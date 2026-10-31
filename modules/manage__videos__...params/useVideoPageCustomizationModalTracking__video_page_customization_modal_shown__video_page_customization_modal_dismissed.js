{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = ({
    clipId: _v0,
    source: _v1
  }) => ({
    clip_id: _v0,
    video_page_customization_modal_source: _v1
  });
  _v0.s(["useVideoPageCustomizationModalTracking", 0, () => {
    let _v0 = (0, _v2.usePico)(),
      _v1 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("video_page_customization_modal_shown", _v3(_v0));
      }, [_v0]);
    return {
      trackModalShown: _v1,
      trackModalDismissed: (0, _v1.useCallback)(_v0 => {
        _v0?.track("video_page_customization_modal_dismissed", {
          ..._v3(_v0),
          action_type: _v0.actionType
        });
      }, [_v0]),
      trackCtaClicked: (0, _v1.useCallback)(_v0 => {
        _v0?.track("video_page_customization_modal_cta_clicked", _v3(_v0));
      }, [_v0])
    };
  }]);
}