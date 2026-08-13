{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useReorderFeaturedFoldersModal", 0, () => {
    let {
      setModalContextState: _v0
    } = (0, _v1.useContext)(_v2.ModalContextDispatch);
    if (!_v0) throw Error("useReorderFeaturedFoldersModal must be used within a ReorderFeaturedFoldersProvider");
    return {
      openReorderFeaturedFoldersModal: _v0 => _v0({
        isOpen: !0,
        state: _v0
      }),
      closeReorderFeaturedFoldersModal: () => _v0({
        isOpen: !1,
        state: null
      })
    };
  }], 0);
  var _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0);
  _v0.s(["ShareAction", 0, ({
    video: _v0,
    size: _v1 = "xs",
    variant: _v2 = "blur",
    placement: _v3 = "top",
    analytics: _v4 = {
      feature: _v8.AnalyticsFeatures.VIDEO_LIBRARY,
      location: _v8.AnalyticsLocations.VIDEO_CARD,
      page: "library_homepage",
      shareModalEntryPoint: "VL_folder_card_hover"
    },
    analyticsV2: _v5 = {
      element: "icon",
      location: "card"
    }
  }) => {
    let _v6 = !!_v0?.metadata?.interactions?.invite,
      _v7 = (0, _v9.useVideoShareClick)({
        video: _v0,
        analytics: _v4,
        analyticsV2: _v5,
        parentFolder: _v0?.parentProject ?? void 0,
        canShare: _v6
      });
    return _v6 ? (0, _v3.jsx)(_v5.Tooltip, {
      label: (0, _v7.translate)({
        singular: "Share",
        dictionary: {
          es: {
            singular: "Compartir"
          },
          "de-DE": {
            singular: "Teilen"
          },
          "fr-FR": {
            singular: "Partager"
          },
          "ja-JP": {
            singular: "共有"
          },
          "ko-KR": {
            singular: "공유"
          },
          "pt-BR": {
            singular: "Compartilhar"
          },
          "zh-CN": {
            singular: "分享"
          }
        }
      }),
      placement: _v3,
      children: (0, _v3.jsx)(_v4.IconButton, {
        "aria-label": (0, _v7.translate)({
          singular: "Share",
          dictionary: {
            es: {
              singular: "Compartir"
            },
            "de-DE": {
              singular: "Teilen"
            },
            "fr-FR": {
              singular: "Partager"
            },
            "ja-JP": {
              singular: "共有"
            },
            "ko-KR": {
              singular: "공유"
            },
            "pt-BR": {
              singular: "Compartilhar"
            },
            "zh-CN": {
              singular: "分享"
            }
          }
        }),
        icon: (0, _v3.jsx)(_v6.Share, {}),
        onClick: _v7,
        size: _v1,
        variant: _v2,
        zIndex: 1
      })
    }) : null;
  }], 0);
}