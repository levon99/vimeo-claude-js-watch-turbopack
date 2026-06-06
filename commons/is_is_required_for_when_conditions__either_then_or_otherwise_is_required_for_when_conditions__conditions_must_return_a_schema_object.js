{
  "use strict";

  var _v3 = _v0.r(0);
  _v2.__esModule = !0, _v2.default = void 0;
  var _v4 = _v3(_v0.r(0)),
    _v5 = _v3(_v0.r(0));
  function _v6(_v0) {
    return "function" == typeof _v0 ? _v0 : function (_v0) {
      return _v0.concat(_v0);
    };
  }
  _v2.default = function () {
    function _v0(_v0, _v1) {
      var _v2 = _v1.is,
        _v3 = _v1.then,
        _v4 = _v1.otherwise;
      if (this.refs = [].concat(_v0), _v3 = _v6(_v3), _v4 = _v6(_v4), "function" == typeof _v1) this.fn = _v1;else {
        if (!(0, _v4.default)(_v1, "is")) throw TypeError("`is:` is required for `when()` conditions");
        if (!_v1.then && !_v1.otherwise) throw TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
        var _v5 = "function" == typeof _v2 ? _v2 : function () {
          for (var _v0 = arguments.length, _v1 = Array(_v0), _v2 = 0; _v2 < _v0; _v2++) _v1[_v2] = arguments[_v2];
          return _v1.every(function (_v0) {
            return _v0 === _v2;
          });
        };
        this.fn = function () {
          for (var _v0 = arguments.length, _v1 = Array(_v0), _v2 = 0; _v2 < _v0; _v2++) _v1[_v2] = arguments[_v2];
          var _v3 = _v1.pop();
          return (_v5.apply(void 0, _v1) ? _v3 : _v4)(_v3);
        };
      }
    }
    var _v1 = _v0.prototype;
    return _v1.getValue = function (_v0, _v1) {
      return this.refs.map(function (_v0) {
        return _v0.getValue(_v0, _v1);
      });
    }, _v1.resolve = function (_v0, _v1) {
      var _v2 = this.fn.apply(_v0, _v1.concat(_v0));
      if (void 0 !== _v2 && !(0, _v5.default)(_v2)) throw TypeError("conditions must return a schema object");
      return _v2 || _v0;
    }, _v0;
  }(), _v1.exports = _v2.default;
}