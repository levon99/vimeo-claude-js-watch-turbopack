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
  _v0.s(["useCreateAndCopySharingLink", 0, (_v0, _v1, _v2) => {
    let [_v3, {
        data: _v4,
        error: _v5
      }] = (0, _v3.usePostVideoSharingLink)(),
      {
        trackSharingLinkCopied: _v6,
        trackVideoLinkCopied: _v7,
        trackSharingLinkExpirationReset: _v8
      } = (0, _v4.useDistributionTracking)(),
      _v9 = (0, _v1.useRef)(_v6);
    _v9.current = _v6;
    let _v10 = (0, _v8.useCopyVideoLinkToast)(),
      _v11 = (0, _v1.useRef)(_v10);
    _v11.current = _v10;
    let _v12 = (0, _v1.useRef)(_v1);
    _v12.current = _v1;
    let _v13 = (0, _v2.useMatchMutate)(),
      _v14 = (0, _v1.useRef)(_v13);
    _v14.current = _v13;
    let _v15 = (0, _v1.useRef)(_v2);
    _v15.current = _v2;
    let _v16 = (() => {
        let [_v0] = (0, _v3.usePatchVideoSharingLink)(),
          _v1 = (0, _v2.useMatchMutate)(),
          _v2 = (0, _v1.useRef)(_v1);
        return _v2.current = _v1, (0, _v1.useCallback)((_v0, _v1) => {
          _v0({
            where: {
              videoId: _v0
            },
            select: ["expiresOn", "intervalDays", "hasExpiration"],
            variables: {
              expiresOn: new Date(Date.now() + _v1 * _v6.MS_PER_DAY).toISOString(),
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
            _v2 = _v4 && _v0 ? (0, _v6.formatExpiryDuration)(_v0) : void 0,
            _v3 = _v4 && _v0 && _v1 && (0, _v6.getRemainingDays)(_v0) <= _v6.EXPIRY_SOON_DAYS ? () => {
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
    }, [_v5, _v0, _v7]), (0, _v1.useCallback)((_v0, _v1, _v2, _v3) => {
      _v18.current || (_v18.current = {
        videoId: _v0,
        shareLoopParams: _v1,
        canonicalUrl: _v2
      }, _v3({
        where: {
          videoId: _v0
        },
        select: ["url", "hasExpiration", "expiresOn", "intervalDays"],
        variables: void 0 === _v3 ? {} : {
          intervalDaysFallback: _v3
        }
      }));
    }, [_v3]);
  }], 0);
}