# frozen_string_literal: true

source "https://rubygems.org"

ruby RUBY_VERSION

DECIDIM_VERSION = { github: "decidim/decidim", branch: "release/0.29-stable" }.freeze

gem "decidim", DECIDIM_VERSION
gem "decidim-conferences", DECIDIM_VERSION
gem "decidim-initiatives", DECIDIM_VERSION
gem "decidim-templates", DECIDIM_VERSION
gem "decidim-term_customizer", github: "openpoke/decidim-module-term_customizer", branch: "main"

gem "decidim-decidim_awesome", github: "decidim-ice/decidim-module-decidim_awesome", branch: "release/0.29-stable"

# gem "decidim-calendar", github: "decidim-ice/decidim-module-calendar"
gem "decidim-newsletter_agenda", github: "openpoke/decidim-module-newsletter_agenda", branch: "main"

gem "bootsnap", "~> 1.7"
gem "deface", ">= 1.9"
gem "health_check"
gem "puma"
gem "rails_semantic_logger"
gem "sentry-rails"
gem "sentry-ruby"

group :development, :test do
  gem "byebug", platform: :mri
  gem "faker", "~> 3.2"
  gem "rubocop-faker"

  gem "decidim-dev", DECIDIM_VERSION
end

group :development do
  gem "letter_opener_web"
  gem "listen"
  gem "web-console"
end

group :production do
  gem "sidekiq"
  gem "sidekiq-cron"
end
