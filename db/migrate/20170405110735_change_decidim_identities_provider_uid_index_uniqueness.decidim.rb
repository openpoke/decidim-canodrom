# frozen_string_literal: true

# This migration comes from decidim (originally 20170405094258)
class ChangeDecidimIdentitiesProviderUidIndexUniqueness < ActiveRecord::Migration[5.0]
  def change
    remove_index :decidim_identities, [:provider, :uid]
    add_index :decidim_identities, [:provider, :uid, :decidim_organization_id], unique: true,
                                                                                name: "decidim_identities_provider_uid_organization_unique"

    Decidim::Identity.includes(:user).find_each do |identity|
      Rails.logger.debug { "Processing identity #{identity}..." }
      identity.organization = identity.user.organization
      identity.save!
    end
  end
end
