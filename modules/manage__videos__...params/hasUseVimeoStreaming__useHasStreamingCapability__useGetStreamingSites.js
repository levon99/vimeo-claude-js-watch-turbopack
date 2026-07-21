{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = () => {
    let _v0 = (0, _v5.useViewer)(),
      _v1 = _v0?.teamUser?.ownerId,
      {
        capabilities: _v2
      } = (0, _v6.useCapability)(["hasUseVimeoStreaming"], _v1);
    return _v2.hasUseVimeoStreaming;
  };
  _v0.s(["useHasStreamingCapability", 0, _v7], 0), _v0.s(["useGetStreamingSites", 0, () => {
    let _v0 = _v7(),
      _v1 = (0, _v1.useRef)(!1),
      _v2 = (0, _v5.useViewer)(),
      _v3 = _v2?.teamUser?.ownerId,
      {
        data: _v4,
        ..._v5
      } = (0, _v2.useGetUserOttSites)(() => _v0 && _v3 ? {
        where: {
          userId: _v3
        },
        select: ["externalAdminUrl", "uri"],
        query: {
          direction: "desc",
          sort: "date"
        }
      } : null),
      _v6 = _v4?.data[0]?.externalAdminUrl ?? "",
      _v7 = _v4?.data[0]?.uri ? Number(_v4.data[0].uri.replace("/ott_sites/", "")) : void 0;
    return (0, _v1.useEffect)(() => {
      _v5.error && !_v1.current && ((0, _v3.trackLiveError)(_v5.error, {
        category: _v4.ELiveErrorCategory.GENERIC,
        method: "get_streaming_link",
        data: {
          user_id: _v3
        }
      }), _v1.current = !0), !_v5.error && _v1.current && (_v1.current = !1);
    }, [_v5.error, _v3]), {
      hasStreamingSite: !!_v6,
      streamingSites: _v4,
      streamingSiteUrl: _v6,
      siteId: _v7,
      ..._v5
    };
  }], 0);
}