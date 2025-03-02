# This migration comes from decidim (originally 20180226140756)
# frozen_string_literal: true

class AddVersionToActionLogs < ActiveRecord::Migration[5.1]
  def up
    add_column :decidim_action_logs, :version_id, :integer
    add_index :decidim_action_logs, :version_id

    Decidim::ActionLog.find_each do |action_log|
      version_id = action_log.extra.dig("version", "id")
      next unless version_id

      # rubocop:disable Rails/SkipsModelValidations
      action_log.update_column(:version_id, version_id)
      # rubocop:enable Rails/SkipsModelValidations
    end
  end

  def down
    remove_column :decidim_action_logs, :version_id
  end
end
