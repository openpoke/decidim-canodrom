# frozen_string_literal: true

# this is to fix a super weird bug that does not allow to edit speakers in a conference.
# it might be constrained only to decidim 0.26 so try to remove this on upgrade
# The bug was introduce by this PR https://github.com/decidim/decidim/pull/10294
Rails.application.config.to_prepare do
	Decidim::Conferences::Admin::ConferenceSpeakersController.class_eval do
	  def edit
	    speaker = collection.find(params[:id])
	    enforce_permission_to :update, :conference_speaker, speaker: speaker
	    @form = form(Decidim::Conferences::Admin::ConferenceSpeakerForm).from_model(speaker)
	  end
	end
end