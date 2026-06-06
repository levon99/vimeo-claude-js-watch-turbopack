{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["useVideoActionsTracking", 0, function () {
    let _v0 = (0, _v3.usePico)(),
      _v1 = (0, _v2.useViewer)();
    return {
      trackMyVideoMenuClicked: (0, _v1.useCallback)(_v0 => {
        if (null === _v0) return !1;
        let _v1 = _v0.myVideoMenuClickedContext ?? (0, _v4.deriveLibraryType)({
          hasContentSpaceEnabled: _v1?.teamUser?.hasContentSpaceEnabled ?? !1,
          isPrivateToUser: _v0.isPrivateToUser,
          isSharedWithMe: _v0.isSharedWithMe
        });
        return _v0.track("my_video_menu_clicked", {
          clip_id: _v0.clipId,
          my_video_menu_clicked_context: _v1,
          my_video_menu_action: _v0.myVideoMenuAction
        }), !0;
      }, [_v0, _v1?.teamUser?.hasContentSpaceEnabled])
    };
  }]);
}