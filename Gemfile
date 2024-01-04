# frozen_string_literal: true

source "https://rubygems.org"

ruby RUBY_VERSION

DECIDIM_VERSION = "0.27.5"
gem "decidim", DECIDIM_VERSION
gem "decidim-conferences", DECIDIM_VERSION
gem "decidim-consultations", DECIDIM_VERSION
gem "decidim-initiatives", DECIDIM_VERSION
#gem "decidim-notify"
# Change term_customizer dependency to ruby-gems' when term-customizer is compatible with DECIDIM_VERSION
gem "decidim-term_customizer", github: "mainio/decidim-module-term_customizer"

gem "decidim-decidim_awesome", github: "decidim-ice/decidim-module-decidim_awesome"
gem "decidim-direct_verifications"
gem "decidim-navigation_maps", github: "platoniq/decidim-module-navigation_maps"
# gem "decidim-time_tracker", github: "Platoniq/decidim-module-time_tracker"

gem "decidim-calendar", github: "openpoke/decidim-module-calendar"
gem "decidim-newsletter_agenda", github: "openpoke/decidim-module-newsletter_agenda"

gem "puma"
gem "wicked_pdf"
gem "wkhtmltopdf-binary"

group :development, :test do
  gem "byebug", platform: :mri
  gem "faker", "~> 2.14"
  gem "rubocop-faker"

  gem "decidim-dev", DECIDIM_VERSION
end

group :development do
  gem "letter_opener_web"
  gem "listen"
  gem "spring"
  gem "spring-watcher-listen"
  gem "web-console"

  gem "capistrano", "~> 3.17", require: false
  gem "capistrano-bundler", require: false
  gem "capistrano-passenger", require: false
  gem "capistrano-rails", require: false
  gem "capistrano-rails-console", require: false
  gem "capistrano-rbenv", require: false
  gem "capistrano-sidekiq", require: false
end

group :production do
  gem "figaro", "~> 1.2"
  gem "sidekiq", "<7"
  gem "sidekiq-cron"
end
