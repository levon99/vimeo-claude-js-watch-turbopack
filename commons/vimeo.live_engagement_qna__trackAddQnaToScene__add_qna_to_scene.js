{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = (0, _v0.i(0).createLiveSchemaEventFactoryNew)("vimeo.live_engagement_qna", 6, () => ({
    ..._v1.liveTrackingConfig.BIG_PICTURE_INTERACTION_SCHEMA_BASE,
    isModerated: null,
    isInProgram: null,
    countQuestions: null
  }));
  _v0.s(["trackAddQnaToScene", 0, function () {
    return _v2({
      eventName: "add_qna_to_scene"
    });
  }, "trackApproveModeratedQuestion", 0, function () {
    return _v2({
      eventName: "approve_moderated_question"
    });
  }, "trackArchiveQuestion", 0, function (_v0) {
    return _v2({
      eventName: "archive_question",
      isModerated: _v0
    });
  }, "trackAskQuestion", 0, function () {
    return _v2({
      eventName: "ask_question"
    });
  }, "trackClickEndQna", 0, function (_v0, _v1) {
    return _v2({
      eventName: "click_end_qna",
      isModerated: _v0,
      countQuestions: _v1
    });
  }, "trackClickStartQna", 0, function (_v0) {
    return _v2({
      eventName: "click_start_qna",
      isModerated: _v0
    });
  }, "trackDeleteQuestionReply", 0, function () {
    return _v2({
      eventName: "delete_response"
    });
  }, "trackExportQna", 0, function () {
    return _v2({
      eventName: "export_qna"
    });
  }, "trackHideQuestion", 0, function (_v0, _v1) {
    return _v2({
      eventName: "hide_question",
      isModerated: _v0,
      location: _v1
    });
  }, "trackPinQuestion", 0, function () {
    return _v2({
      eventName: "pin_question"
    });
  }, "trackRemoveQnaFromScene", 0, function () {
    return _v2({
      eventName: "remove_qna_from_scene"
    });
  }, "trackReplyAndApproveQuestion", 0, function () {
    return _v2({
      eventName: "reply_and_approve_question"
    });
  }, "trackReplyQuestion", 0, function () {
    return _v2({
      eventName: "reply_question"
    });
  }, "trackShowQuestion", 0, function (_v0, _v1, _v2) {
    return _v2({
      eventName: "show_question",
      isModerated: _v0,
      isInProgram: _v1,
      location: _v2
    });
  }, "trackSortByMostPopular", 0, function () {
    return _v2({
      eventName: "sort_by_most_popular"
    });
  }, "trackSortByMostRecent", 0, function () {
    return _v2({
      eventName: "sort_by_most_recent"
    });
  }, "trackSwitchActiveTab", 0, function () {
    return _v2({
      eventName: "switch_active_tab"
    });
  }, "trackUnarchiveQuestion", 0, function (_v0) {
    return _v2({
      eventName: "unarchive_question",
      isModerated: _v0
    });
  }, "trackUnpinQuestion", 0, function () {
    return _v2({
      eventName: "unpin_question"
    });
  }, "trackViewQna", 0, function () {
    return _v2({
      eventName: "view_qna",
      eventType: "impression"
    });
  }]);
}