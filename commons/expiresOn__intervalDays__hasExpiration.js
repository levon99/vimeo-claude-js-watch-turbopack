{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0);
  let _v12 = (_v0, _v1, _v2) => {
    let [_v3, {
        data: _v4,
        error: _v5
      }] = (0, _v9.usePostVideoSharingLink)(),
      {
        trackSharingLinkCopied: _v6,
        trackVideoLinkCopied: _v7,
        trackSharingLinkExpirationReset: _v8
      } = (0, _v3.useDistributionTracking)(),
      _v9 = (0, _v1.useRef)(_v6);
    _v9.current = _v6;
    let _v10 = (0, _v8.useCopyVideoLinkToast)(),
      _v11 = (0, _v1.useRef)(_v10);
    _v11.current = _v10;
    let _v12 = (0, _v1.useRef)(_v1);
    _v12.current = _v1;
    let _v13 = (0, _v11.default)(),
      _v14 = (0, _v1.useRef)(_v13);
    _v14.current = _v13;
    let _v15 = (0, _v1.useRef)(_v2);
    _v15.current = _v2;
    let _v16 = (() => {
        let [_v0] = (0, _v9.usePatchVideoSharingLink)(),
          _v1 = (0, _v11.default)(),
          _v2 = (0, _v1.useRef)(_v1);
        return _v2.current = _v1, (0, _v1.useCallback)((_v0, _v1) => {
          _v0({
            where: {
              videoId: _v0
            },
            select: ["expiresOn", "intervalDays", "hasExpiration"],
            variables: {
              expiresOn: new Date(Date.now() + _v1 * _v10.MS_PER_DAY).toISOString(),
              intervalDays: _v1,
              hasExpiration: !0
            }
          }), _v2.current("sharing_link");
        }, [_v0]);
      })(),
      _v17 = (0, _v1.useRef)(_v16);
    _v17.current = _v16;
    let _v18 = (0, _v1.useRef)(null);
    return (0, _v1.useEffect)(() => {
      if (_v4?.url && _v18.current) {
        let _v0,
          {
            videoId: _v1,
            shareLoopParams: _v2,
            canonicalUrl: _v3
          } = _v18.current,
          _v4 = !1 !== _v4.hasExpiration;
        if (_v4) {
          let _v0 = _v2 ? `&${_v2.replace(/^\?/, "")}` : "";
          _v0 = `${window.location.origin}${_v4.url}?share=copy${_v0}`;
        } else {
          let _v0 = _v3.includes("?") ? "&" : "?";
          _v0 = `${_v3}${_v0}share=copy`;
        }
        if (_v14.current("sharing_link"), (0, _v5.default)(_v0)) {
          let _v0 = _v4.expiresOn ?? null,
            _v1 = _v4.intervalDays ?? 0,
            _v2 = _v4 && _v0 ? (0, _v10.formatExpiryDuration)(_v0) : void 0,
            _v3 = _v4 && _v0 && _v1 && (0, _v10.getRemainingDays)(_v0) <= _v10.EXPIRY_SOON_DAYS ? () => {
              _v8({
                videoId: String(_v1),
                entryPoint: "library_copy_toast"
              }), _v17.current(_v1, _v1);
            } : void 0;
          if (_v2) {
            let _v0 = "video_thumbnail" === _v0 ? "hover_icon" : _v0;
            _v9.current({
              clipId: String(_v1),
              surface: _v0,
              intervalDays: _v1
            });
          }
          _v7({
            clipId: String(_v1),
            source: (0, _v7.surfaceToVideoLinkCopiedSource)(_v0)
          }), _v11.current({
            video: _v12.current,
            durationSuffix: _v2,
            onReset: _v3
          });
        } else _v15.current?.();
        _v18.current = null;
      }
    }, [_v4, _v0, _v7, _v8]), (0, _v1.useEffect)(() => {
      if (_v5 && _v18.current) {
        let {
            videoId: _v0,
            canonicalUrl: _v1
          } = _v18.current,
          _v2 = _v1.includes("?") ? "&" : "?";
        (0, _v5.default)(`${_v1}${_v2}share=copy`) ? (_v7({
          clipId: String(_v0),
          source: (0, _v7.surfaceToVideoLinkCopiedSource)(_v0)
        }), _v11.current({
          video: _v12.current
        })) : _v15.current?.(), _v18.current = null;
      }
    }, [_v5, _v0, _v7]), (0, _v1.useCallback)((_v0, _v1, _v2) => {
      _v18.current || (_v18.current = {
        videoId: _v0,
        shareLoopParams: _v1,
        canonicalUrl: _v2
      }, _v3({
        where: {
          videoId: _v0
        },
        select: ["url", "hasExpiration", "expiresOn", "intervalDays"],
        variables: {}
      }));
    }, [_v3]);
  };
  _v0.s(["useCreateAndCopySharingLink", 0, _v12], 0);
  var _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0);
  _v0.s(["useCopyVideoLink", 0, ({
    video: _v0,
    surface: _v1,
    analyticsElement: _v2,
    manageActionLocation: _v3,
    analyticsLocation: _v4 = "card",
    pageNameOverride: _v5
  }) => {
    let _v6 = (0, _v6.useViewer)(),
      _v7 = (0, _v14.useNotification)(),
      _v8 = (0, _v15.usePageName)(),
      _v9 = _v5 ?? _v8,
      {
        settings: _v10
      } = (0, _v2.useOrionSettings)(),
      {
        reviewId: _v11
      } = (0, _v1.useContext)(_v4.ReviewLinkContext),
      {
        getVideoShareLoopTrackingParams: _v12
      } = (0, _v16.useShareLoopTrackingParams)(),
      {
        trackVideoLinkCopied: _v13
      } = (0, _v3.useDistributionTracking)(),
      _v14 = (0, _v8.useCopyVideoLinkToast)(),
      _v15 = !!_v0?.metadata?.interactions?.edit?.uri,
      _v16 = (0, _v13.useManageShareAction)({
        canEdit: _v15,
        entityUri: _v0.uri,
        location: _v3,
        panel: "COPY_LINK_PANEL"
      }),
      _v17 = !!_v10?.bi_expiring_links_ux_enabled,
      _v18 = _v12(_v1, _v0, () => _v7({
        content: _v18.linkCopyFailed,
        status: "error"
      }));
    return (0, _v1.useCallback)(() => {
      let _v0,
        _v1 = _v12(_v9, !!_v0?.parentProject?.isPrivateToUser);
      if (_v17 && _v15 && !_v11) {
        let _v0 = (0, _v19.idFromUri)(_v0.uri),
          _v1 = /http/.test(_v0?.link) ? `${_v0?.link}${_v1}` : `${_v6?.vimeoHttpsUrl}${_v0?.link}${_v1}`;
        _v18(_v0, _v1, _v1), _v17.BPAnalyticsV2.copyVideoShareLink({
          location: _v4,
          element: _v2,
          teamUser: _v6?.teamUser,
          folder: _v0.parentProject,
          video: _v0,
          webCtx: {
            path: _v9,
            target_path: null
          }
        });
        return;
      }
      _v0 = _v11 ? `${_v6?.vimeoHttpsUrl}/reviews/${_v11}${_v0.uri}${_v1}` : /http/.test(_v0?.link) ? `${_v0?.link}${_v1}` : `${_v6?.vimeoHttpsUrl}${_v0?.link}${_v1}`;
      let _v2 = (0, _v5.default)(_v0);
      _v14({
        video: _v0,
        isSuccess: _v2,
        onManage: _v16
      }), _v2 && _v13({
        clipId: String((0, _v19.idFromUri)(_v0.uri)),
        source: (0, _v7.surfaceToVideoLinkCopiedSource)(_v1)
      }), _v17.BPAnalyticsV2.copyVideoShareLink({
        location: _v4,
        element: _v2,
        teamUser: _v6?.teamUser,
        folder: _v0.parentProject,
        video: _v0,
        webCtx: {
          path: _v9,
          target_path: _v0 ?? null
        }
      });
    }, [_v2, _v4, _v15, _v18, _v12, _v17, _v16, _v9, _v11, _v14, _v1, _v13, _v0, _v6?.teamUser, _v6?.vimeoHttpsUrl]);
  }], 0);
  var _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0);
  _v0.s(["useVideoShareClick", 0, ({
    video: _v0,
    analytics: _v1,
    analyticsV2: _v2,
    parentFolder: _v3,
    canShare: _v4
  }) => {
    let {
        openShareFolderModal: _v5
      } = (0, _v21.useShareFolderModal)(),
      _v6 = (0, _v15.usePageName)(),
      _v7 = (0, _v6.useViewer)(),
      _v8 = _v4 ?? !!_v0.metadata?.interactions?.invite?.uri,
      {
        uri: _v9
      } = _v0,
      _v10 = (0, _v20.useAnalyticsEvent)(),
      _v11 = _v1.page ? _v1.page : _v6.toUpperCase();
    return _v8 ? () => {
      _v10((0, _v22.genericClick)({
        copy: "Share",
        feature: _v1.feature,
        location: _v1.location,
        name: "select_folder_menu_item",
        page: _v11,
        target: null,
        type: "general",
        target_path: null
      })), _v17.BPAnalyticsV2.openVideoShare({
        location: _v2.location,
        element: _v2.element,
        teamUser: _v7?.teamUser,
        folder: _v3,
        video: _v0
      }), _v5?.(_v9, _v1.shareModalEntryPoint);
    } : void 0;
  }], 0);
}