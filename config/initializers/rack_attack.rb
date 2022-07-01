# frozen_string_literal: true

if Rails.env.production? && Rails.application.secrets.rack_attack_skip.present?
  # TODO: add internal canodrom ip here
  # Rack::Attack.safelist_ip("5.6.7.0/24")

  # Provided that trusted users use an HTTP request param named skip_rack_attack
  # with this you can perform apache benchmark test like this:
  # ab -n 2000 -c 20 'https://decidim.url/?skip_rack_attack=some-secret'
  Rack::Attack.safelist("mark any authenticated access safe") do |request|
    # skip rails active storage routes
    return true if request.path.start_with?("/rails/active_storage")

    # skip logged users
    return true if request.env['rack.session']["warden.user.user.key"].present?

    # Requests are allowed if the return value is truthy
    request.params["skip_rack_attack"] == Rails.application.secrets.rack_attack_skip
  end
end