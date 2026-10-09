{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  _v0.s(["useTeleprompter", 0, (_v0 = !1) => {
    let _v1 = (0, _v3.useIsVpaas)(),
      _v2 = (0, _v4.useLogger)("useTeleprompter"),
      {
        currentSessionData: _v3,
        updateCurrentSessionData: _v4
      } = (0, _v6.useSession)(),
      _v5 = _v3.isTeleprompterShown,
      _v6 = _v3.teleprompterTextContent,
      {
        promptRequestStatus: _v7,
        setUpsellModalShown: _v8,
        updateScrollingState: _v9,
        autoScrollSpeed: _v10,
        contentSource: _v11,
        scriptGeneratorModifiers: _v12,
        lastShownAs: _v13,
        isUpsellModalShown: _v14,
        resetMemoryState: _v15
      } = (0, _v8.useTeleprompterStore)((0, _v2.useShallow)(_v0 => ({
        promptRequestStatus: _v0.promptRequestStatus,
        setUpsellModalShown: _v0.setUpsellModalShown,
        updateScrollingState: _v0.updateScrollingState,
        autoScrollSpeed: _v0.persistentData.autoScrollSpeed,
        contentSource: _v0.persistentData.contentSource,
        scriptGeneratorModifiers: _v0.persistentData.scriptGeneratorModifiers,
        lastShownAs: _v0.lastShownAs,
        isUpsellModalShown: _v0.isUpsellModalShown,
        resetMemoryState: _v0.resetMemoryState
      }))),
      {
        mode: _v16
      } = (0, _v5.useScrollMode)(),
      _v17 = (0, _v7.useShowTeleprompterUpsell)(_v0) && !_v1,
      _v18 = (0, _v1.useCallback)(_v0 => {
        let _v1 = "boolean" == typeof _v0;
        if (_v17) return _v8(_v0 => _v1 ? _v0 : !_v0);
        _v4({
          isTeleprompterShown: _v1 ? _v0 : !_v5
        });
      }, [_v5, _v8, _v17, _v4]),
      _v19 = (0, _v1.useCallback)(() => {
        _v9("active"), _v2.debug("Teleprompter scrolling is started");
      }, [_v2, _v9]);
    return {
      toggleTeleprompter: _v18,
      startTeleprompterScrolling: _v19,
      stopTeleprompterScrolling: (0, _v1.useCallback)(() => {
        _v9("disabled"), _v2.debug("Teleprompter scrolling is stopped");
      }, [_v2, _v9]),
      pauseTeleprompterScrolling: (0, _v1.useCallback)(() => {
        _v9("paused"), _v2.debug("Teleprompter scrolling is paused");
      }, [_v2, _v9]),
      resetMemoryState: _v15,
      isTeleprompterShown: _v5,
      autoScrollSpeed: _v10,
      contentSource: _v11,
      scrollMode: _v16,
      scriptGeneratorModifiers: _v12,
      lastShownAs: _v13,
      promptRequestStatus: _v7,
      teleprompterTextContent: _v6,
      showUpsell: _v17,
      isUpsellModalShown: _v14
    };
  }]);
}