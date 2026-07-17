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
    _v9 = _v0.i(0);
  let _v10 = () => {
    let _v0 = (0, _v3.useContext)(_v8.ViewerContext),
      _v1 = _v0?.isSimplifiedSite || !1,
      _v2 = _v0?.isEnterpriseSite || !1;
    return _v0 ? _v1 || !_v2 ? (0, _v1.jsx)(_v6.ErrorPage, {
      error: new _v4.ForbiddenError("You are not authorised for this page."),
      useBokeh: !0
    }) : (0, _v1.jsx)(_v9.EnterpriseLohpContainer, {
      showForbidden: !0
    }) : (0, _v1.jsx)(_v7.default, {});
  };
  _v10.getLayout = _v0 => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v2.default, {
      children: (0, _v1.jsx)("title", {
        children: (0, _v5.translate)({
          singular: "Forbidden",
          dictionary: {
            es: {
              singular: "Prohibido"
            },
            "de-DE": {
              singular: "Verboten"
            },
            "fr-FR": {
              singular: "Interdit"
            },
            "ja-JP": {
              singular: "無効です"
            },
            "ko-KR": {
              singular: "금지됨"
            },
            "pt-BR": {
              singular: "Proibido"
            },
            "zh-CN": {
              singular: "禁止"
            }
          }
        })
      })
    }), _v0]
  }), _v0.s(["__N_SSG", 0, !0, "default", 0, _v10], 0);
}