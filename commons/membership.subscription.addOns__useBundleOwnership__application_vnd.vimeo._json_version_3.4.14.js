{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = ["membership.subscription.addOns"];
  _v0.s(["useBundleOwnership", 0, ({
    enabled: _v0 = !0
  } = {}) => {
    let {
      data: _v1,
      isLoading: _v2
    } = (0, _v2.useGetMe)(() => _v0 ? {
      select: _v4,
      headers: {
        Accept: "application/vnd.vimeo.*+json;version=3.4.14"
      }
    } : null);
    return (0, _v1.useMemo)(() => ({
      ownsBundle: (_v1?.membership?.subscription?.addOns ?? []).some(_v0 => _v3.BUNDLE_TYPES.some(_v0 => _v0.name.startsWith(`bsp-${_v0}-bundle`)) && "expired" !== _v0.status),
      isResolving: _v0 && _v2
    }), [_v1, _v2, _v0]);
  }]);
}