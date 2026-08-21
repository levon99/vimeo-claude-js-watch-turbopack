{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = () => (0, _v1.jsx)(_v1.Fragment, {
    children: (0, _v1.jsx)("h1", {
      children: (0, _v3.translate)({
        singular: "About",
        dictionary: {
          es: {
            singular: "Acerca de"
          },
          "de-DE": {
            singular: "Über uns"
          },
          "fr-FR": {
            singular: "À propos"
          },
          "ko-KR": {
            singular: "소개"
          },
          "pt-BR": {
            singular: "Sobre"
          },
          "zh-CN": {
            singular: "关于"
          }
        }
      })
    })
  });
  _v7.getLayout = (_v0, _v1) => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v4.HeaderLayout, {
      ..._v1
    }), (0, _v1.jsx)(_v6.NextNavigationLayout, {}), _v0, (0, _v1.jsx)(_v5.StandardFooterLayout, {})]
  }), (0, _v2.withPageSetup)({
    staffOnly: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v7], 0);
}