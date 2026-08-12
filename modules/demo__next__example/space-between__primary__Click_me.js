{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  let _v9 = () => (0, _v1.jsx)(_v7.Page, {
    children: (0, _v1.jsx)(_v3.Flex, {
      my: "lg",
      justify: "space-between",
      children: (0, _v1.jsx)(_v2.Button, {
        variant: "primary",
        children: "Click me"
      })
    })
  });
  _v9.getLayout = (_v0, _v1) => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v5.HeaderLayout, {
      ..._v1
    }), (0, _v1.jsx)(_v8.NextNavigationLayout, {}), _v0, (0, _v1.jsx)(_v6.StandardFooterLayout, {})]
  }), (0, _v4.withPageSetup)(() => ({
    props: {
      layoutOptions: {
        headerFixed: !0
      }
    }
  }), {
    staffOnly: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v9], 0);
}