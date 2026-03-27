# frozen_string_literal: true

source "https://rubygems.org"

ruby RUBY_VERSION

DECIDIM_VERSION = { github: "decidim/decidim", branch: "release/0.30-stable" }.freeze

gem "decidim", DECIDIM_VERSION
gem "decidim-conferences", DECIDIM_VERSION
gem "decidim-initiatives", DECIDIM_VERSION
gem "decidim-templates", DECIDIM_VERSION
gem "decidim-term_customizer", github: "openpoke/decidim-module-term_customizer", branch: "release/0.30-stable"

gem "decidim-decidim_awesome", github: "decidim-ice/decidim-module-decidim_awesome", branch: "release/0.30-stable"

# gem "decidim-calendar", github: "decidim-ice/decidim-module-calendar"
gem "decidim-newsletter_agenda", github: "openpoke/decidim-module-newsletter_agenda", branch: "release/0.30-stable"

gem "bootsnap"
gem "deface"
gem "health_check"
gem "puma"
gem "rails_semantic_logger"
gem "sentry-rails"
gem "sentry-ruby"

group :development, :test do
  gem "byebug", platform: :mri
  gem "faker"
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
