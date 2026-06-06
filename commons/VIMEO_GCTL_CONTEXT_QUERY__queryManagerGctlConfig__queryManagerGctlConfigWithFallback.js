{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = "@VIMEO/GCTL_CONTEXT_QUERY";
  _v0.s(["queryManagerGctlConfig", 0, function (_v0) {
    return _v0.queryDataSync({
      type: _v5
    })?.data;
  }, "queryManagerGctlConfigWithFallback", 0, function (_v0) {
    let _v1 = _v0.queryDataSync({
      type: _v5
    })?.data;
    if (0 === Object.keys(_v1).length) {
      let _v0 = _v0.queryDataSync({
        type: _v4.VIMEO_VIEWER_CONTEXT_QUERY
      })?.data;
      if (_v0) return {
        xVimeoPage: "",
        jwt: _v0.jwt,
        baseUrl: `https://${_v0.apiUrl}`,
        locale: _v0.locale
      };
    }
    return _v1;
  }, "queryScopeGctlConfig", 0, function (_v0) {
    return _v0.queryDataSync({
      type: _v5
    })?.data;
  }, "useScopeGctlProvision", 0, function () {
    let _v0 = (0, _v1.useScope)(),
      _v1 = (0, _v3.useGctlConfig)();
    (0, _v2.useLayoutEffect)(() => _v0.registerQueryProvider(_v5, () => _v1), [_v0, _v1]);
  }]);
}