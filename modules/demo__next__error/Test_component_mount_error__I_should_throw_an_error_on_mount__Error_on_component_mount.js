{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  let _v8 = () => {
      let [_v0, _v1] = (0, _v2.useState)(!1);
      if ((0, _v2.useEffect)(() => {
        _v1(!0);
      }, []), _v0) throw Error("Test component mount error");
      return (0, _v1.jsx)("div", {
        children: "I should throw an error on mount"
      });
    },
    _v9 = () => {
      let [_v0, _v1] = (0, _v2.useState)(!1);
      return (0, _v1.jsxs)(_v6.Page, {
        children: [(0, _v1.jsx)(_v4.Button, {
          onClick: () => _v1(!0),
          children: "Error on component mount"
        }), _v0 && (0, _v1.jsx)(_v8, {})]
      });
    };
  _v9.getLayout = (_v0, _v1) => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v5.HeaderLayout, {
      ..._v1
    }), (0, _v1.jsx)(_v7.NextNavigationLayout, {}), _v0]
  }), (0, _v3.withPageSetup)({
    staffOnly: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v9], 0);
}