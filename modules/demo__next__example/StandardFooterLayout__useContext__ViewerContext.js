{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["StandardFooterLayout", 0, function () {
    let _v0 = (0, _v2.useContext)(_v3.ViewerContext);
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)("div", {
        style: {
          flexGrow: 1
        }
      }), (0, _v1.jsx)(_v4.default, {
        locale: _v0?.locale ?? "",
        localeLabels: _v0?.localeLabels ?? [],
        xsrft: _v0?.xsrft ?? "",
        locales: _v0?.locales ?? [],
        impressumQualifies: _v0?.impressumQualifies
      })]
    });
  }]);
}