{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6,
    _v7 = (0, _v2.createContext)(null);
  _v0.s(["VideoShareViewStoreProvider", 0, ({
    children: _v0
  }) => {
    let _v1 = (0, _v2.useMemo)(() => {
      let _v0;
      return _v0 = (_v0, _v1) => ({
        clip: (({
          set: _v0,
          get: _v1
        }) => ({
          clipId: _v1()?.clip.clipId ?? "",
          clipHash: _v1()?.clip.clipHash ?? _v6,
          actions: {
            setClipParams: (_v0, _v1) => {
              _v0(({
                clip: _v0
              }) => {
                _v0.clipId = _v0, _v0.clipHash = _v1;
              });
            },
            resetClip: () => _v0(({
              clip: _v0
            }) => {
              _v0.clipHash = _v6, _v0.clipId = "";
            })
          }
        }))({
          set: _v0,
          get: _v1
        }),
        util: (({
          set: _v0,
          get: _v1
        }) => ({
          isVideoOwnerCapabilitiesReady: _v1()?.util.isVideoOwnerCapabilitiesReady ?? !1,
          isInputtingPassword: _v1()?.util.isInputtingPassword ?? !1,
          trackingContextConfig: _v1()?.util.trackingContextConfig,
          selectedPanel: _v1()?.util.selectedPanel ?? "COPY_LINK_PANEL",
          isCreateReviewLinkModalOpen: _v1()?.util.isCreateReviewLinkModalOpen ?? !1,
          actions: {
            setVideoOwnerCapabilitiesReady: () => {
              _v0(({
                util: _v0
              }) => {
                _v0.isVideoOwnerCapabilitiesReady = !0;
              });
            },
            setIsInputtingPassword: _v0 => {
              _v0(({
                util: _v0
              }) => {
                _v0.isInputtingPassword = _v0;
              });
            },
            setTrackingContextConfig: _v0 => {
              _v0(({
                util: _v0
              }) => {
                _v0.trackingContextConfig = _v0;
              });
            },
            setCreateReviewLinkModalOpen: _v0 => {
              _v0(({
                util: _v0
              }) => {
                _v0.isCreateReviewLinkModalOpen = _v0;
              });
            },
            setSelectedPanel: _v0 => {
              _v0(({
                util: _v0
              }) => {
                _v0.selectedPanel = _v0;
              });
            },
            resetUtil: () => _v0(({
              util: _v0
            }) => {
              _v0.isVideoOwnerCapabilitiesReady = !1, _v0.isInputtingPassword = !1, _v0.trackingContextConfig = null, _v0.selectedPanel = "COPY_LINK_PANEL", _v0.isCreateReviewLinkModalOpen = !1;
            })
          }
        }))({
          set: _v0,
          get: _v1
        }),
        actions: {
          resetStore: () => {
            _v1().clip.actions.resetClip(), _v1().util.actions.resetUtil();
          }
        }
      }), (0, _v3.create)((0, _v5.immer)((0, _v4.devtools)(_v0, {
        enabled: !1
      })));
    }, []);
    return (0, _v1.jsx)(_v7.Provider, {
      value: _v1,
      children: _v0
    });
  }, "useGlobalStore", 0, _v0 => {
    let _v1 = (0, _v2.useContext)(_v7);
    if (!_v1) throw Error("useGlobalStore must be used within a VideoShareViewStoreProvider");
    return (0, _v3.useStore)(_v1, _v0);
  }], 0);
}