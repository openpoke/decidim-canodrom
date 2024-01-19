# frozen_string_literal: true

# This migration comes from decidim_consultations (originally 20180130142018)

class AddDecidimUserGroupIdToDecidimConsultationsEndorsements < ActiveRecord::Migration[5.1]
  def change
    add_column :decidim_consultations_endorsements, :decidim_user_group_id, :integer
    add_index :decidim_consultations_endorsements, :decidim_user_group_id, name: "index_consultations_endorsements_on_decidim_user_group_id"
  end
end
