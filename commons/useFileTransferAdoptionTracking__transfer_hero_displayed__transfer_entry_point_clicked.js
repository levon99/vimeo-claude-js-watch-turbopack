{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useFileTransferAdoptionTracking", 0, () => {
    let _v0 = (0, _v2.usePico)(),
      _v1 = (0, _v1.useCallback)(() => null !== _v0 && (_v0.track("transfer_hero_displayed", {}), !0), [_v0]),
      _v2 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("transfer_entry_point_clicked", {
        entry_point: _v0.entryPoint
      }), !0), [_v0]),
      _v3 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("transfer_entry_point_video_confirmed", {
        entry_point: _v0.entryPoint
      }), !0), [_v0]),
      _v4 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("transfer_cta_dismissed", {
        dismissal_stage: _v0.dismissalStage,
        entry_point: _v0.entryPoint
      }), !0), [_v0]);
    return {
      trackTransferHeroDisplayed: _v1,
      trackTransferEntryPointClicked: _v2,
      trackTransferEntryPointVideoConfirmed: _v3,
      trackTransferCtaDismissed: _v4,
      trackTransferInlineLinkDisplayed: (0, _v1.useCallback)(() => null !== _v0 && (_v0.track("transfer_inline_link_displayed", {}), !0), [_v0]),
      trackTransferInlineLinkClicked: (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("transfer_inline_link_clicked", {
        surface: _v0.surface
      }), !0), [_v0])
    };
  }]);
}