# frozen_string_literal: true

# This migration comes from decidim_meetings (originally 20200827153856)

class AddCommentableCounterCacheToMeetings < ActiveRecord::Migration[5.2]
  class Decidim::Meetings::Meeting < Decidim::Meetings::ApplicationRecord
    def salt; end
  end

  def change
    add_column :decidim_meetings_meetings, :comments_count, :integer, null: false, default: 0
    Decidim::Meetings::Meeting.reset_column_information
    Decidim::Meetings::Meeting.find_each(&:update_comments_count)
  end
end
