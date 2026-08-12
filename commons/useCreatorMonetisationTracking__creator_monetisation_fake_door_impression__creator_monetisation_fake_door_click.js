{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useCreatorMonetisationTracking", 0, () => {
    let _v0 = (0, _v2.usePico)(),
      _v1 = _v0 => ({
        ...(_v0?.videoId && {
          video_id: _v0.videoId
        }),
        ...(_v0?.variant && {
          variant: _v0.variant
        })
      }),
      _v2 = (0, _v1.useCallback)((_v0, _v1) => {
        _v0?.track("creator_monetisation_fake_door_impression", {
          surface: _v0,
          ..._v1(_v1)
        });
      }, [_v0]),
      _v3 = (0, _v1.useCallback)((_v0, _v1) => {
        _v0?.track("creator_monetisation_fake_door_click", {
          surface: _v0,
          ..._v1(_v1)
        });
      }, [_v0]),
      _v4 = (0, _v1.useCallback)((_v0, _v1) => {
        _v0?.track("creator_monetisation_fake_door_modal_dismissed", {
          surface: _v0,
          ..._v1(_v1)
        });
      }, [_v0]),
      _v5 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("creator_monetisation_fake_door_waitlist_join", {
          surface: "uploader",
          email: _v0
        });
      }, [_v0]);
    return {
      trackImpression: _v2,
      trackClick: _v3,
      trackModalDismissed: _v4,
      trackWaitlistJoin: _v5,
      trackDonateClicked: (0, _v1.useCallback)((_v0, _v1) => {
        _v0?.track("creator_monetisation_fake_door_donate_clicked", {
          surface: "viewer",
          amount: _v0,
          ..._v1(_v1)
        });
      }, [_v0]),
      trackSubscribeClicked: (0, _v1.useCallback)((_v0, _v1) => {
        _v0?.track("creator_monetisation_fake_door_subscribe_clicked", {
          surface: "viewer",
          amount: _v0,
          ..._v1(_v1)
        });
      }, [_v0])
    };
  }]);
}