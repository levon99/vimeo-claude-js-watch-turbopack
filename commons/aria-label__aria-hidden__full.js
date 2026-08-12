{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = (0, _v2.forwardRef)((_v0, _v1) => {
      let {
          icon: _v2,
          children: _v3,
          isRound: _v4,
          "aria-label": _v5,
          ..._v6
        } = _v0,
        _v7 = _v2 || _v3,
        _v8 = (0, _v3.isValidElement)(_v7) ? (0, _v3.cloneElement)(_v7, {
          "aria-hidden": !0,
          focusable: !1
        }) : null;
      return (0, _v4.jsx)(_v1.Button, {
        padding: "0",
        borderRadius: _v4 ? "full" : void 0,
        ref: _v1,
        "aria-label": _v5,
        ..._v6,
        children: _v8
      });
    });
  _v5.displayName = "IconButton", _v0.s(["IconButton", 0, _v5]);
}