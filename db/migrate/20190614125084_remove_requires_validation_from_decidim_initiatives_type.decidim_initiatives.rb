# frozen_string_literal: true

# This migration comes from decidim_initiatives (originally 20171204103119)
# This file has been modified by `decidim upgrade:migrations` task on 2026-03-27 12:32:26 UTC
class RemoveRequiresValidationFromDecidimInitiativesType < ActiveRecord::Migration[5.1]
  def change
    remove_column :decidim_initiatives_types,
                  :requires_validation, :boolean, null: false, default: true
  end
end
