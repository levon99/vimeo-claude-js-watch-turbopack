{
  "use strict";

  let _v1 = location.host.endsWith(".ci.vimeows.com");
  function _v2(_v0, _v1, _v2) {
    return Math.min(Math.max(_v0, _v1), _v2);
  }
  function _v3(_v0, _v1, _v2) {
    return _v2(_v0 / Math.max(("x" === _v2 ? window.innerWidth : window.innerHeight) - _v1, 1), 0, 1);
  }
  _v0.s(["IS_DEV", 0, _v1, "IS_SSR", 0, !1], 0), _v0.s(["positionFromPercentage", 0, function (_v0, _v1, _v2, _v3) {
    return {
      x: _v2(_v0, 0, 1) * (window.innerWidth - _v2),
      y: _v2(_v1, 0, 1) * (window.innerHeight - _v3)
    };
  }, "positionToPercentage", 0, function (_v0, _v1, _v2, _v3) {
    return {
      x: _v3(_v0, _v2, "x"),
      y: _v3(_v1, _v3, "y")
    };
  }, "relativeWindowOffset", 0, _v3], 0), _v0.s(["getTeleprompterInitPersistentState", 0, () => ({
    autoScrollSpeed: 1,
    scrollMode: void 0,
    contentSource: null,
    fontSize: 28,
    width: .5,
    height: .5,
    positionX: .5,
    positionY: _v3(8, .5 * window.innerHeight, "y"),
    poppedOutWidth: 640,
    poppedOutHeight: 300,
    poppedOutPositionX: null,
    poppedOutPositionY: null,
    poppedOutPrevWindowWidth: null,
    poppedOutPrevWindowHeight: null,
    poppedOutScrollingState: "paused",
    isSpeechRecognitionSupported: null,
    scriptGeneratorModifiers: {
      duration: "default",
      tone: "default"
    },
    isPrivacyLinkWasShowed: !1,
    surveyThumbsSelected: void 0
  }), "getTeleprompterInitialState", 0, () => ({
    scrollingState: "disabled",
    scrollModeForInput: void 0,
    isGeneratePanelShown: !1,
    isPopOverVisible: !1,
    isFollowupPromptShown: !1,
    isRecognitionActive: !1,
    isUpsellModalShown: !1,
    scrollPaused: !1,
    words: null,
    spacerHeight: 0,
    textProgress: 0,
    isPoppedOut: !1,
    lastShownAs: void 0,
    promptRequestError: null,
    promptRequestAbortController: null,
    promptRequestStatus: "idle",
    receivedPromptCharacters: null,
    isMicrophonePermissionsGranted: !1,
    audioTrack: null
  }), "scrollModeOrder", 0, [{
    mode: "dictationBased"
  }, {
    mode: "staticSpeed",
    speed: 0
  }, {
    mode: "staticSpeed",
    speed: .5
  }, {
    mode: "staticSpeed",
    speed: 1
  }, {
    mode: "staticSpeed",
    speed: 1.5
  }, {
    mode: "staticSpeed",
    speed: 2
  }]], 0), _v0.s(["mapTeleprompterBoundariesToStateProps", 0, function (_v0, _v1) {
    switch (_v0) {
      case "positionX":
        return _v1 ? "poppedOutPositionX" : _v0;
      case "positionY":
        return _v1 ? "poppedOutPositionY" : _v0;
      case "width":
        return _v1 ? "poppedOutWidth" : _v0;
      case "height":
        return _v1 ? "poppedOutHeight" : _v0;
    }
  }], 0);
}