{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  (0, _v3.withPageSetup)(async () => ({
    props: {
      hasThemeSupport: !0,
      hasUploader: !0
    }
  }), {
    omitEsi: !0,
    inlineViewer: !0,
    noIndex: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, () => {
    let _v0 = (0, _v1.useRouter)(),
      _v1 = (0, _v5.useViewer)(),
      {
        data: _v2,
        error: _v3
      } = (0, _v4.useGetMeVideos)(() => _v1 ? {
        select: ["manageLink", "createdTime"],
        query: {
          perPage: 1,
          orderBy: "createdTime",
          direction: "desc"
        }
      } : null, {
        revalidateIfStale: !1,
        revalidateOnFocus: !1,
        revalidateOnReconnect: !1
      });
    return (0, _v2.useEffect)(() => {
      let _v0 = _v2?.data?.[0]?.manageLink;
      _v0 ? _v0.replace(_v0) : _v3 ? _v0.replace("/") : _v2 && !_v0 && _v0.replace("/");
    }, [_v2, _v3, _v0]), null;
  }], 0);
}