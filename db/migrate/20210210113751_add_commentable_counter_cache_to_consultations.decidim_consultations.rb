# frozen_string_literal: true

# This migration comes from decidim_consultations (originally 20200827154143)

class AddCommentableCounterCacheToConsultations < ActiveRecord::Migration[5.2]
  def change
    add_column :decidim_consultations_questions, :comments_count, :integer, null: false, default: 0
    add_index :decidim_consultations_questions, :comments_count
    Decidim::Consultations::Question.reset_column_information
    Decidim::Consultations::Question.find_each(&:update_comments_count)
  end
end
