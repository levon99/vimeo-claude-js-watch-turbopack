{
  "use strict";

  var _v3 = _v0.r(0)("iterator"),
    _v4 = !1;
  try {
    var _v5 = 0,
      _v6 = {
        next: function () {
          return {
            done: !!_v5++
          };
        },
        return: function () {
          _v4 = !0;
        }
      };
    _v6[_v3] = function () {
      return this;
    }, Array.from(_v6, function () {
      throw 2;
    });
  } catch (_v0) {}
  _v1.exports = function (_v0, _v1) {
    try {
      if (!_v1 && !_v4) return !1;
    } catch (_v0) {
      return !1;
    }
    var _v2 = !1;
    try {
      var _v3 = {};
      _v3[_v3] = function () {
        return {
          next: function () {
            return {
              done: _v2 = !0
            };
          }
        };
      }, _v0(_v3);
    } catch (_v0) {}
    return _v2;
  };
}