# frozen_string_literal: true

# This migration comes from decidim (originally 20180508111640)

class AddTosVersionToOrganization < ActiveRecord::Migration[5.1]
  class Organization < ApplicationRecord
    self.table_name = :decidim_organizations
  end

  def up
    add_column :decidim_organizations, :tos_version, :datetime
    Organization.find_each do |organization|
      tos_page = Decidim::StaticPage.find_by(slug: "terms-and-conditions", organization: organization)
      organization.update(tos_version: tos_page.updated_at) if tos_page
    end
  end

  def down
    remove_columns :decidim_organizations, :tos_version
  end
end
