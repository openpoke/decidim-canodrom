# frozen_string_literal: true

require "active_support/concern"

module ApplicationMailerDelivery
  extend ActiveSupport::Concern

  included do
    after_action :set_delivery_options

    private

    def set_delivery_options
      return if Decidim::Env.new("BROADCAST_USERNAME").blank?
      return unless instance_of?(Decidim::NewsletterMailer)

      mail.delivery_method.settings.merge!(
        address: Decidim::Env.new("BROADCAST_ADDRESS").to_s,
        user_name: Decidim::Env.new("BROADCAST_USERNAME").to_s,
        password: Decidim::Env.new("BROADCAST_PASSWORD").to_s
      )
    end
  end
end
