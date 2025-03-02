# frozen_string_literal: true

require "active_support/concern"

module ApplicationMailerDelivery
  extend ActiveSupport::Concern

  included do
    after_action :set_delivery_options

    private

    def set_delivery_options
      return if Rails.application.secrets.broadcast_username.blank?
      return unless instance_of?(Decidim::NewsletterMailer)

      mail.delivery_method.settings.merge!(
        address: Rails.application.secrets.broadcast_address,
        user_name: Rails.application.secrets.broadcast_username,
        password: Rails.application.secrets.broadcast_password
      )
    end
  end
end
