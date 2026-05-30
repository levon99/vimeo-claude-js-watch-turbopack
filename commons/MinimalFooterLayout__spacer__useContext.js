{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["MinimalFooterLayout", 0, function ({
    spacer: _v0 = !0
  }) {
    let _v1 = (0, _v2.useContext)(_v3.ViewerContext);
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [_v0 && (0, _v1.jsx)("div", {
        style: {
          flexGrow: 1
        }
      }), (0, _v1.jsx)(_v4.default, {
        locale: _v1?.locale ?? "",
        localeLabels: _v1?.localeLabels ?? [],
        xsrft: _v1?.xsrft ?? "",
        locales: _v1?.locales ?? [],
        impressumQualifies: _v1?.impressumQualifies,
        contentViewingPrefs: _v1?.contentViewingPrefs
      })]
    });
  }]);
}