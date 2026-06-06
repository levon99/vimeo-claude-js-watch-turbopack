{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = (0, _v0.i(0).createLiveSchemaEventFactory)("vimeo.simple_live_guest_speakers", 8, () => ({
    ..._v1.liveTrackingConfig.BIG_PICTURE_LIVE_SCHEMA_BASE,
    addedByDragging: null,
    isVideoPresent: null,
    toggleState: null
  }));
  _v0.s(["trackAddSpeakerToScene", 0, function ({
    addedByDragging: _v0 = null,
    isVideoPresent: _v1 = null,
    location: _v2 = null
  }) {
    return _v2("add_speaker_to_scene", {
      addedByDragging: _v0,
      isVideoPresent: _v1,
      location: _v2
    });
  }, "trackAllowSpeakerToScreenshare", 0, function () {
    return _v2("allow_speaker_to_screenshare");
  }, "trackClickAddSource", 0, function () {
    return _v2("click_add_source");
  }, "trackClickGenerateLink", 0, function () {
    return _v2("click_generate_link");
  }, "trackClickSendEmail", 0, function () {
    return _v2("click_send_email");
  }, "trackCopySpeakerInviteLink", 0, function () {
    return _v2("copy_speaker_invite_link");
  }, "trackOpenBroadcasterEditModal", 0, function () {
    return _v2("open_broadcaster_edit_modal");
  }, "trackOpenSpeakerEditModal", 0, function () {
    return _v2("open_speaker_edit_modal");
  }, "trackOpenSpeakerManagementBox", 0, function () {
    return _v2("open_speaker_management_box");
  }, "trackOverrideScreenshare", 0, function () {
    return _v2("override_screenshare");
  }, "trackRemoveSpeakerFromEvent", 0, function () {
    return _v2("remove_speaker_from_event");
  }, "trackRemoveSpeakerFromScene", 0, function () {
    return _v2("remove_speaker_from_scene");
  }, "trackSaveSpeakerEmail", 0, function () {
    return _v2("save_speaker_email");
  }, "trackSaveSpeakerName", 0, function () {
    return _v2("save_speaker_name");
  }, "trackSaveSpeakerTitle", 0, function () {
    return _v2("save_speaker_title");
  }, "trackStartScreenshare", 0, function () {
    return _v2("start_screenshare");
  }, "trackToggleAudioMode", 0, function (_v0) {
    return _v2("toggle_backstage", {
      toggleState: _v0
    });
  }]);
}