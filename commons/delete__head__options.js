{
  "use strict";

  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0),
    _v8 = _v0.r(0),
    _v9 = _v8.validators;
  function _v10(_v0) {
    this.defaults = _v0, this.interceptors = {
      request: new _v5(),
      response: new _v5()
    };
  }
  _v10.prototype.request = function (_v0, _v1) {
    "string" == typeof _v0 ? (_v1 = _v1 || {}).url = _v0 : _v1 = _v0 || {}, (_v1 = _v7(this.defaults, _v1)).method ? _v1.method = _v1.method.toLowerCase() : this.defaults.method ? _v1.method = this.defaults.method.toLowerCase() : _v1.method = "get";
    var _v2,
      _v3 = _v1.transitional;
    void 0 !== _v3 && _v8.assertOptions(_v3, {
      silentJSONParsing: _v9.transitional(_v9.boolean),
      forcedJSONParsing: _v9.transitional(_v9.boolean),
      clarifyTimeoutError: _v9.transitional(_v9.boolean)
    }, !1);
    var _v4 = [],
      _v5 = !0;
    this.interceptors.request.forEach(function (_v0) {
      ("function" != typeof _v0.runWhen || !1 !== _v0.runWhen(_v1)) && (_v5 = _v5 && _v0.synchronous, _v4.unshift(_v0.fulfilled, _v0.rejected));
    });
    var _v6 = [];
    if (this.interceptors.response.forEach(function (_v0) {
      _v6.push(_v0.fulfilled, _v0.rejected);
    }), !_v5) {
      var _v7 = [_v6, void 0];
      for (Array.prototype.unshift.apply(_v7, _v4), _v7 = _v7.concat(_v6), _v2 = Promise.resolve(_v1); _v7.length;) _v2 = _v2.then(_v7.shift(), _v7.shift());
      return _v2;
    }
    for (var _v8 = _v1; _v4.length;) {
      var _v9 = _v4.shift(),
        _v10 = _v4.shift();
      try {
        _v8 = _v9(_v8);
      } catch (_v0) {
        _v10(_v0);
        break;
      }
    }
    try {
      _v2 = _v6(_v8);
    } catch (_v0) {
      return Promise.reject(_v0);
    }
    for (; _v6.length;) _v2 = _v2.then(_v6.shift(), _v6.shift());
    return _v2;
  }, _v10.prototype.getUri = function (_v0) {
    return _v4((_v0 = _v7(this.defaults, _v0)).url, _v0.params, _v0.paramsSerializer).replace(/^\?/, "");
  }, _v3.forEach(["delete", "get", "head", "options"], function (_v0) {
    _v10.prototype[_v0] = function (_v0, _v1) {
      return this.request(_v7(_v1 || {}, {
        method: _v0,
        url: _v0,
        data: (_v1 || {}).data
      }));
    };
  }), _v3.forEach(["post", "put", "patch"], function (_v0) {
    _v10.prototype[_v0] = function (_v0, _v1, _v2) {
      return this.request(_v7(_v2 || {}, {
        method: _v0,
        url: _v0,
        data: _v1
      }));
    };
  }), _v1.exports = _v10;
}