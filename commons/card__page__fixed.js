{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["default", 0, ({
    type: _v0 = "card"
  }) => {
    let _v1 = "page" === _v0;
    return (0, _v1.jsx)(_v2.Spinner, {
      position: _v1 ? "fixed" : "static",
      top: _v1 ? 0 : void 0,
      left: _v1 ? 0 : void 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: _v1 ? "100%" : void 0,
      height: _v1 ? "100%" : void 0,
      "data-testid": "brandkit-loader",
      zIndex: "10000"
    });
  }]);
}