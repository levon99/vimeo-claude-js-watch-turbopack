{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = () => {};
  _v0.s(["TIMECODE_SELECTION_CONTEXT", 0, {
    CHAPTER_THUMBNAIL: "chapter-thumbnail"
  }, "useSelectTimecodeFromVideo", 0, ({
    overlayMode: _v0,
    setOverlayMode: _v1,
    player: _v2,
    onConfirm: _v3,
    onCancel: _v4
  }) => {
    let _v5 = (0, _v1.useRef)(_v2),
      [_v6, _v7] = (0, _v1.useState)(),
      _v8 = "ClickToPlay" === _v0 || "SelectingThumbnail" === _v0,
      _v9 = (0, _v1.useCallback)((_v0, _v1) => {
        _v7(_v1), _v1("ClickToPlay"), _v0 && (_v5.current = _v0);
      }, [_v1, _v7]),
      _v10 = (0, _v1.useCallback)(() => {
        _v2 && _v2.play(), _v1("SelectingThumbnail");
      }, [_v2, _v1]),
      _v11 = (0, _v1.useCallback)(() => {
        if (!_v2) return _v5.current(void 0);
        _v2.paused || _v2.pause(), _v1("InteractionZones"), _v5.current(_v2.currentTime), _v3?.(_v6);
      }, [_v3, _v6, _v2, _v1]),
      _v12 = (0, _v1.useCallback)(() => {
        _v7(void 0), _v1("InteractionZones"), _v5.current(void 0), _v4?.(_v6);
      }, [_v4, _v6, _v1]);
    return (0, _v1.useMemo)(() => ({
      context: _v6,
      startTimecodeSelection: _v9,
      handlePlayToSelectFrameClick: _v10,
      handleSelectThisFrameClick: _v11,
      handleSelectCancelClick: _v12,
      isSelectingFrame: _v8
    }), [_v6, _v10, _v12, _v11, _v8, _v9]);
  }], 0), _v0.s(["CAROUSEL_HEIGHT", 0, 105, "CAROUSEL_WIDTH", 0, 136, "COLOR_DEFAULTS", 0, {
    colorOne: "#000000",
    colorTwo: "#00adef",
    colorThree: "#ffffff",
    colorFour: "#000000"
  }, "DEFAULT_CUSTOM_LOGO", 0, {
    active: !1,
    url: "https://i.vimeocdn.com/custom_asset/1529"
  }, "PRESET_MENU_WIDTH", 0, 300, "linkStyles", 0, {
    variant: "inline-primary",
    fontSize: "inherit",
    cursor: "pointer"
  }], 0);
}