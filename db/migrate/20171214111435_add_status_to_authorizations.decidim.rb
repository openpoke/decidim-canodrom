# frozen_string_literal: true

# This migration comes from decidim (originally 20170914092117)
# This file has been modified by `decidim upgrade:migrations` task on 2026-03-27 12:32:26 UTC
class AddStatusToAuthorizations < ActiveRecord::Migration[5.1]
  def change
    add_column :decidim_authorizations, :granted_at, :datetime

    execute "UPDATE decidim_authorizations SET granted_at = updated_at"
  end
end
