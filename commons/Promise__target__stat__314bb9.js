{
  "use strict";

  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0),
    _v8 = _v0.r(0);
  _v3({
    target: "Promise",
    stat: !0,
    forced: _v0.r(0)
  }, {
    race: function (_v0) {
      var _v1 = this,
        _v2 = _v6.f(_v1),
        _v3 = _v2.reject,
        _v4 = _v7(function () {
          var _v0 = _v5(_v1.resolve);
          _v8(_v0, function (_v0) {
            _v4(_v0, _v1, _v0).then(_v2.resolve, _v3);
          });
        });
      return _v4.error && _v3(_v4.value), _v2.promise;
    }
  });
}