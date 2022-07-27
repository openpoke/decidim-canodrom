# frozen_string_literal: true

class ApplicationMailer < ActionMailer::Base
  default from: "from@example.com"
  layout "mailer"

  after_action :set_delivery_options

  def set_delivery_options
    byebug
  end
end
