{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  let _v8 = _v0 => "hover_icon" === _v0 ? "library_menu" : "video_menu";
  _v0.s(["useCreateAndCopySharingLink", 0, (_v0, _v1, _v2) => {
    let [_v3, {
        data: _v4,
        error: _v5
      }] = (0, _v2.usePostVideoSharingLink)(),
      {
        trackSharingLinkCopied: _v6,
        trackVideoLinkCopied: _v7
      } = (0, _v3.useDistributionTracking)(),
      _v8 = (0, _v1.useRef)(_v6);
    _v8.current = _v6;
    let _v9 = (0, _v6.useCopyVideoLinkToast)(),
      _v10 = (0, _v1.useRef)(_v9);
    _v10.current = _v9;
    let _v11 = (0, _v1.useRef)(_v1);
    _v11.current = _v1;
    let _v12 = (0, _v7.default)(),
      _v13 = (0, _v1.useRef)(_v12);
    _v13.current = _v12;
    let _v14 = (0, _v1.useRef)(_v2);
    _v14.current = _v2;
    let _v15 = (() => {
        let [_v0] = (0, _v2.usePatchVideoSharingLink)(),
          _v1 = (0, _v7.default)(),
          _v2 = (0, _v1.useRef)(_v1);
        return _v2.current = _v1, (0, _v1.useCallback)((_v0, _v1) => {
          _v0({
            where: {
              videoId: _v0
            },
            select: ["expiresOn", "intervalDays", "hasExpiration"],
            variables: {
              expiresOn: new Date(Date.now() + _v1 * _v5.MS_PER_DAY).toISOString(),
              intervalDays: _v1,
              hasExpiration: !0
            }
          }), _v2.current("sharing_link");
        }, [_v0]);
      })(),
      _v16 = (0, _v1.useRef)(_v15);
    _v16.current = _v15;
    let _v17 = (0, _v1.useRef)(null);
    return (0, _v1.useEffect)(() => {
      if (_v4?.url && _v17.current) {
        let _v0,
          {
            videoId: _v1,
            shareLoopParams: _v2,
            canonicalUrl: _v3
          } = _v17.current,
          _v4 = !1 !== _v4.hasExpiration;
        if (_v4) {
          let _v0 = _v2 ? `&${_v2.replace(/^\?/, "")}` : "";
          _v0 = `${window.location.origin}${_v4.url}?share=copy${_v0}`;
        } else {
          let _v0 = _v3.includes("?") ? "&" : "?";
          _v0 = `${_v3}${_v0}share=copy`;
        }
        if (_v13.current("sharing_link"), (0, _v4.default)(_v0)) {
          let _v0 = _v4.expiresOn ?? null,
            _v1 = _v4.intervalDays ?? 0,
            _v2 = _v4 && _v0 ? (0, _v5.formatExpiryDuration)(_v0) : void 0,
            _v3 = _v4 && _v0 && _v1 && (0, _v5.getRemainingDays)(_v0) <= _v5.EXPIRY_SOON_DAYS ? () => _v16.current(_v1, _v1) : void 0;
          _v2 && _v8.current({
            clipId: String(_v1),
            surface: _v0,
            intervalDays: _v1
          }), _v7({
            clipId: String(_v1),
            source: _v8(_v0)
          }), _v10.current(_v11.current, !0, _v2, _v3);
        } else _v14.current?.();
        _v17.current = null;
      }
    }, [_v4, _v0, _v7]), (0, _v1.useEffect)(() => {
      if (_v5 && _v17.current) {
        let {
            videoId: _v0,
            canonicalUrl: _v1
          } = _v17.current,
          _v2 = _v1.includes("?") ? "&" : "?";
        (0, _v4.default)(`${_v1}${_v2}share=copy`) ? (_v7({
          clipId: String(_v0),
          source: _v8(_v0)
        }), _v10.current(_v11.current, !0)) : _v14.current?.(), _v17.current = null;
      }
    }, [_v5, _v0, _v7]), (0, _v1.useCallback)((_v0, _v1, _v2) => {
      _v17.current = {
        videoId: _v0,
        shareLoopParams: _v1,
        canonicalUrl: _v2
      }, _v3({
        where: {
          videoId: _v0
        },
        select: ["url", "hasExpiration", "expiresOn", "intervalDays"],
        variables: {}
      });
    }, [_v3]);
  }], 0);
}