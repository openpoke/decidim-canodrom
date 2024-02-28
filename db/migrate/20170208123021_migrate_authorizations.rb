# frozen_string_literal: true

class MigrateAuthorizations < ActiveRecord::Migration[5.0]
  def change
    Decidim::Authorization.all.find_each do |authorization|
      metadata = authorization.metadata
      scope_id = metadata["scope_id"]

      next if scope_id.blank?

      authorization.update_attribute(:metadata, {
                                       postal_code: metadata["postal_code"],
                                       scope: Decidim::Scope.find(scope_id).name
                                     })
    end
  end
end
