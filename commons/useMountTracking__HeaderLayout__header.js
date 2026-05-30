{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = {
    ribbon: !0,
    globalSearch: !0,
    headerFixed: !1
  };
  var _v8 = _v0.i(0);
  _v0.i(0);
  let _v9 = () => {};
  _v0.s(["useMountTracking", 0, _v9], 0), _v0.s(["HeaderLayout", 0, function ({
    layoutOptions: _v0
  }) {
    let _v1 = (0, _v3.useContext)(_v5.ViewerContext),
      {
        headerFixed: _v2,
        ribbon: _v3,
        globalSearch: _v4
      } = {
        ..._v7,
        ..._v0
      };
    return _v9("HeaderLayout"), (0, _v1.jsxs)(_v6.FixableContainer, {
      fixed: _v2,
      as: "header",
      children: [_v3 && (0, _v1.jsx)(_v4.Ribbon, {
        variant: _v1?.ribbonModifier,
        animate: !1,
        style: {
          height: (0, _v2.rem)(3)
        }
      }), (0, _v1.jsx)(_v8.Header, {
        globalSearch: _v4
      })]
    });
  }], 0);
}