{
  "use strict";

  var _v3,
    _v4 = _v0.i(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0),
    _v8 = {
      "Content-Type": "application/x-www-form-urlencoded"
    };
  function _v9(_v0, _v1) {
    !_v5.isUndefined(_v0) && _v5.isUndefined(_v0["Content-Type"]) && (_v0["Content-Type"] = _v1);
  }
  var _v10 = {
    transitional: {
      silentJSONParsing: !0,
      forcedJSONParsing: !0,
      clarifyTimeoutError: !1
    },
    adapter: ("u" > typeof XMLHttpRequest ? _v3 = _v0.r(0) : void 0 !== _v4.default && "[object process]" === Object.prototype.toString.call(_v4.default) && (_v3 = _v0.r(0)), _v3),
    transformRequest: [function (_v0, _v1) {
      if (_v6(_v1, "Accept"), _v6(_v1, "Content-Type"), _v5.isFormData(_v0) || _v5.isArrayBuffer(_v0) || _v5.isBuffer(_v0) || _v5.isStream(_v0) || _v5.isFile(_v0) || _v5.isBlob(_v0)) return _v0;
      if (_v5.isArrayBufferView(_v0)) return _v0.buffer;
      if (_v5.isURLSearchParams(_v0)) return _v9(_v1, "application/x-www-form-urlencoded;charset=utf-8"), _v0.toString();
      if (_v5.isObject(_v0) || _v1 && "application/json" === _v1["Content-Type"]) {
        _v9(_v1, "application/json");
        if (_v5.isString(_v0)) try {
          return (0, JSON.parse)(_v0), _v5.trim(_v0);
        } catch (_v0) {
          if ("SyntaxError" !== _v0.name) throw _v0;
        }
        return (0, JSON.stringify)(_v0);
      }
      return _v0;
    }],
    transformResponse: [function (_v0) {
      var _v1 = this.transitional || _v10.transitional,
        _v2 = _v1 && _v1.silentJSONParsing,
        _v3 = _v1 && _v1.forcedJSONParsing,
        _v4 = !_v2 && "json" === this.responseType;
      if (_v4 || _v3 && _v5.isString(_v0) && _v0.length) try {
        return JSON.parse(_v0);
      } catch (_v0) {
        if (_v4) {
          if ("SyntaxError" === _v0.name) throw _v7(_v0, this, "E_JSON_PARSE");
          throw _v0;
        }
      }
      return _v0;
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    validateStatus: function (_v0) {
      return _v0 >= 200 && _v0 < 300;
    },
    headers: {
      common: {
        Accept: "application/json, text/plain, */*"
      }
    }
  };
  _v5.forEach(["delete", "get", "head"], function (_v0) {
    _v10.headers[_v0] = {};
  }), _v5.forEach(["post", "put", "patch"], function (_v0) {
    _v10.headers[_v0] = _v5.merge(_v8);
  }), _v1.exports = _v10;
}