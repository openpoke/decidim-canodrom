# frozen_string_literal: true

# This migration comes from decidim_consultations (originally 20180202085309)

class AddResultsPublishedAtToDecidimConsultations < ActiveRecord::Migration[5.1]
  def change
    add_column :decidim_consultations, :results_published_at, :date
    add_index :decidim_consultations, :results_published_at
  end
end
