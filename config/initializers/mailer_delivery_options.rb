# frozen_string_literal: true

Rails.application.config.to_prepare do
	Decidim::ApplicationMailer.include(ApplicationMailerDelivery)
end