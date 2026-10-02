{
  "use strict";

  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0).CONSTRUCTOR,
    _v8 = _v0.r(0),
    _v9 = _v4("Promise"),
    _v10 = _v5 && !_v7;
  _v3({
    target: "Promise",
    stat: !0,
    forced: _v5 || _v7
  }, {
    resolve: function (_v0) {
      return _v8(_v10 && this === _v9 ? _v6 : this, _v0);
    }
  });
}