{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = (0, _v0.i(0).createLiveSchemaEventFactoryNew)("vimeo.live_engagement_polls", 4, () => ({
    ..._v1.liveTrackingConfig.BIG_PICTURE_INTERACTION_SCHEMA_BASE,
    isInProgram: null,
    countOptions: null
  }));
  _v0.s(["trackAddPollToScene", 0, function (_v0 = null) {
    return _v2({
      eventName: "add_poll_to_scene",
      location: _v0
    });
  }, "trackArchivePoll", 0, function () {
    return _v2({
      eventName: "archive_poll"
    });
  }, "trackCancelPollCreation", 0, function () {
    return _v2({
      eventName: "cancel_poll_creation"
    });
  }, "trackClickAddPoll", 0, function () {
    return _v2({
      eventName: "click_add_poll"
    });
  }, "trackClickEditPoll", 0, function () {
    return _v2({
      eventName: "click_edit_poll"
    });
  }, "trackHidePollInScene", 0, function (_v0) {
    return _v2({
      eventName: "hide_poll_in_scene",
      location: _v0
    });
  }, "trackOpenPoll", 0, function () {
    return _v2({
      eventName: "open_poll"
    });
  }, "trackPublishPollResults", 0, function () {
    return _v2({
      eventName: "publish_poll_results"
    });
  }, "trackRemovePollFromEvent", 0, function () {
    return _v2({
      eventName: "remove_poll_from_event"
    });
  }, "trackRemovePollFromScene", 0, function () {
    return _v2({
      eventName: "remove_poll_from_scene"
    });
  }, "trackSavePoll", 0, function (_v0) {
    return _v2({
      eventName: "save_poll",
      countOptions: _v0
    });
  }, "trackShowPollQuestionInScene", 0, function (_v0, _v1) {
    return _v2({
      eventName: "show_poll_question_in_scene",
      isInProgram: _v0,
      location: _v1
    });
  }, "trackShowPollResultsInScene", 0, function (_v0, _v1) {
    return _v2({
      eventName: "show_poll_results_in_scene",
      isInProgram: _v0,
      location: _v1
    });
  }, "trackViewPoll", 0, function () {
    return _v2({
      eventName: "view_poll",
      eventType: "impression"
    });
  }, "trackVoteInPoll", 0, function () {
    return _v2({
      eventName: "vote_in_poll"
    });
  }]);
}