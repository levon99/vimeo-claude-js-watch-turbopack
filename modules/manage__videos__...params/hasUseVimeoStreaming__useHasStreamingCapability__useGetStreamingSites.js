{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = () => {
    let _v0 = (0, _v3.useViewer)(),
      _v1 = _v0?.teamUser?.ownerId,
      {
        capabilities: _v2,
        ready: _v3,
        error: _v4
      } = (0, _v4.useCapability)(["hasUseVimeoStreaming"], _v1);
    return {
      error: !!_v4,
      hasStreamingCapability: _v2?.hasUseVimeoStreaming ?? !1,
      ready: _v3
    };
  };
  _v0.s(["useHasStreamingCapability", 0, _v5], 0), _v0.s(["useGetStreamingSites", 0, () => {
    let {
        hasStreamingCapability: _v0,
        ready: _v1
      } = _v5(),
      _v2 = (0, _v1.useRef)(!1),
      _v3 = (0, _v3.useViewer)(),
      _v4 = _v3?.teamUser?.ownerId,
      {
        data: _v5,
        ..._v6
      } = (0, _v2.useGetUserOttSites)(() => _v0 && _v4 ? {
        where: {
          userId: _v4
        },
        select: ["commentsEnabled", "externalAdminUrl", "uri"],
        query: {
          direction: "desc",
          sort: "date"
        }
      } : null),
      _v7 = _v5?.data[0]?.externalAdminUrl ?? "",
      _v8 = Number(_v5?.data[0]?.uri?.replace("/ott_sites/", ""));
    return (0, _v1.useEffect)(() => {
      _v6.error && !_v2.current && (_v2.current = !0), !_v6.error && _v2.current && (_v2.current = !1);
    }, [_v6.error, _v4]), {
      hasStreamingSite: !!(_v0 && _v5?.data?.length),
      ready: _v1 && !!_v5 || _v1 && !_v0,
      streamingSites: _v5,
      streamingSiteUrl: _v7,
      siteId: _v8,
      ..._v6
    };
  }], 0);
}