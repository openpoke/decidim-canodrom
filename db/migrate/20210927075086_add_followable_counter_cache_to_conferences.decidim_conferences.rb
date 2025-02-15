# frozen_string_literal: true

# This migration comes from decidim_conferences (originally 20210310134942)

class AddFollowableCounterCacheToConferences < ActiveRecord::Migration[5.2]
  def change
    add_column :decidim_conferences, :follows_count, :integer, null: false, default: 0
    add_index :decidim_conferences, :follows_count

    reversible do |dir|
      dir.up do
        Decidim::Conference.reset_column_information
        Decidim::Conference.find_each do |record|
          record.class.reset_counters(record.id, :follows)
        end
      end
    end
  end
end
