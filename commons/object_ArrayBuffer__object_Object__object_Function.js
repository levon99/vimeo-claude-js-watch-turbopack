{
  "use strict";

  var _v3 = _v0.r(0),
    _v4 = Object.prototype.toString;
  function _v5(_v0) {
    return Array.isArray(_v0);
  }
  function _v6(_v0) {
    return void 0 === _v0;
  }
  function _v7(_v0) {
    return "[object ArrayBuffer]" === _v4.call(_v0);
  }
  function _v8(_v0) {
    return null !== _v0 && "object" == typeof _v0;
  }
  function _v9(_v0) {
    if ("[object Object]" !== _v4.call(_v0)) return !1;
    var _v1 = Object.getPrototypeOf(_v0);
    return null === _v1 || _v1 === Object.prototype;
  }
  function _v10(_v0) {
    return "[object Function]" === _v4.call(_v0);
  }
  function _v11(_v0, _v1) {
    if (null != _v0) if ("object" != typeof _v0 && (_v0 = [_v0]), _v5(_v0)) for (var _v2 = 0, _v3 = _v0.length; _v2 < _v3; _v2++) _v1.call(null, _v0[_v2], _v2, _v0);else for (var _v4 in _v0) Object.prototype.hasOwnProperty.call(_v0, _v4) && _v1.call(null, _v0[_v4], _v4, _v0);
  }
  _v1.exports = {
    isArray: _v5,
    isArrayBuffer: _v7,
    isBuffer: function (_v0) {
      return null !== _v0 && !_v6(_v0) && null !== _v0.constructor && !_v6(_v0.constructor) && "function" == typeof _v0.constructor.isBuffer && _v0.constructor.isBuffer(_v0);
    },
    isFormData: function (_v0) {
      return "[object FormData]" === _v4.call(_v0);
    },
    isArrayBufferView: function (_v0) {
      return "u" > typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(_v0) : _v0 && _v0.buffer && _v7(_v0.buffer);
    },
    isString: function (_v0) {
      return "string" == typeof _v0;
    },
    isNumber: function (_v0) {
      return "number" == typeof _v0;
    },
    isObject: _v8,
    isPlainObject: _v9,
    isUndefined: _v6,
    isDate: function (_v0) {
      return "[object Date]" === _v4.call(_v0);
    },
    isFile: function (_v0) {
      return "[object File]" === _v4.call(_v0);
    },
    isBlob: function (_v0) {
      return "[object Blob]" === _v4.call(_v0);
    },
    isFunction: _v10,
    isStream: function (_v0) {
      return _v8(_v0) && _v10(_v0.pipe);
    },
    isURLSearchParams: function (_v0) {
      return "[object URLSearchParams]" === _v4.call(_v0);
    },
    isStandardBrowserEnv: function () {
      return (!("u" > typeof navigator) || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && "u" > typeof window && "u" > typeof document;
    },
    forEach: _v11,
    merge: function _v0() {
      var _v1 = {};
      function _v2(_v0, _v1) {
        _v9(_v1[_v1]) && _v9(_v0) ? _v1[_v1] = _v0(_v1[_v1], _v0) : _v9(_v0) ? _v1[_v1] = _v0({}, _v0) : _v5(_v0) ? _v1[_v1] = _v0.slice() : _v1[_v1] = _v0;
      }
      for (var _v3 = 0, _v4 = arguments.length; _v3 < _v4; _v3++) _v11(arguments[_v3], _v2);
      return _v1;
    },
    extend: function (_v0, _v1, _v2) {
      return _v11(_v1, function (_v0, _v1) {
        _v2 && "function" == typeof _v0 ? _v0[_v1] = _v3(_v0, _v2) : _v0[_v1] = _v0;
      }), _v0;
    },
    trim: function (_v0) {
      return _v0.trim ? _v0.trim() : _v0.replace(/^\s+|\s+$/g, "");
    },
    stripBOM: function (_v0) {
      return 0 === _v0.charCodeAt(0) && (_v0 = _v0.slice(1)), _v0;
    }
  };
}