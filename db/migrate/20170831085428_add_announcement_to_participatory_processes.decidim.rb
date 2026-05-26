# frozen_string_literal: true

# This migration comes from decidim (originally 20170808080905)
# This file has been modified by `decidim upgrade:migrations` task on 2026-03-27 12:32:26 UTC
class AddAnnouncementToParticipatoryProcesses < ActiveRecord::Migration[5.1]
  def change
    add_column :decidim_participatory_processes, :announcement, :jsonb
  end
end
