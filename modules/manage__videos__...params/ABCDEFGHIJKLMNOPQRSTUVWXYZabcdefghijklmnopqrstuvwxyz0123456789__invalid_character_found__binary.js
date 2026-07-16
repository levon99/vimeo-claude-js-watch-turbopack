{
  var _v3 = _v0.i(0);
  "u" > typeof self ? self : "u" > typeof window ? window : _v0.g, _v1.exports = function () {
    "use strict";

    var _v0,
      _v1 = "3.7.8",
      _v2 = "function" == typeof _v3.Buffer,
      _v3 = "function" == typeof TextDecoder ? new TextDecoder() : void 0,
      _v4 = "function" == typeof TextEncoder ? new TextEncoder() : void 0,
      _v5 = Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="),
      _v6 = (_v0 = {}, _v5.forEach(function (_v0, _v1) {
        return _v0[_v0] = _v1;
      }), _v0),
      _v7 = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,
      _v8 = String.fromCharCode.bind(String),
      _v9 = "function" == typeof Uint8Array.from ? Uint8Array.from.bind(Uint8Array) : function (_v0) {
        return new Uint8Array(Array.prototype.slice.call(_v0, 0));
      },
      _v10 = function (_v0) {
        return _v0.replace(/=/g, "").replace(/[+\/]/g, function (_v0) {
          return "+" == _v0 ? "-" : "_";
        });
      },
      _v11 = function (_v0) {
        return _v0.replace(/[^A-Za-z0-9\+\/]/g, "");
      },
      _v12 = function (_v0) {
        for (var _v1, _v2, _v3, _v4, _v5 = "", _v6 = _v0.length % 3, _v7 = 0; _v7 < _v0.length;) {
          if ((_v2 = _v0.charCodeAt(_v7++)) > 255 || (_v3 = _v0.charCodeAt(_v7++)) > 255 || (_v4 = _v0.charCodeAt(_v7++)) > 255) throw TypeError("invalid character found");
          _v5 += _v5[(_v1 = _v2 << 16 | _v3 << 8 | _v4) >> 18 & 63] + _v5[_v1 >> 12 & 63] + _v5[_v1 >> 6 & 63] + _v5[63 & _v1];
        }
        return _v6 ? _v5.slice(0, _v6 - 3) + "===".substring(_v6) : _v5;
      },
      _v13 = "function" == typeof btoa ? function (_v0) {
        return btoa(_v0);
      } : _v2 ? function (_v0) {
        return _v3.Buffer.from(_v0, "binary").toString("base64");
      } : _v12,
      _v14 = _v2 ? function (_v0) {
        return _v3.Buffer.from(_v0).toString("base64");
      } : function (_v0) {
        for (var _v1 = [], _v2 = 0, _v3 = _v0.length; _v2 < _v3; _v2 += 0) _v1.push(_v8.apply(null, _v0.subarray(_v2, _v2 + 0)));
        return _v13(_v1.join(""));
      },
      _v15 = function (_v0, _v1) {
        return void 0 === _v1 && (_v1 = !1), _v1 ? _v10(_v14(_v0)) : _v14(_v0);
      },
      _v16 = function (_v0) {
        if (_v0.length < 2) {
          var _v1 = _v0.charCodeAt(0);
          return _v1 < 128 ? _v0 : _v1 < 0 ? _v8(192 | _v1 >>> 6) + _v8(128 | 63 & _v1) : _v8(224 | _v1 >>> 12 & 15) + _v8(128 | _v1 >>> 6 & 63) + _v8(128 | 63 & _v1);
        }
        var _v1 = 0 + (_v0.charCodeAt(0) - 0) * 0 + (_v0.charCodeAt(1) - 0);
        return _v8(240 | _v1 >>> 18 & 7) + _v8(128 | _v1 >>> 12 & 63) + _v8(128 | _v1 >>> 6 & 63) + _v8(128 | 63 & _v1);
      },
      _v17 = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
      _v18 = function (_v0) {
        return _v0.replace(_v17, _v16);
      },
      _v19 = _v2 ? function (_v0) {
        return _v3.Buffer.from(_v0, "utf8").toString("base64");
      } : _v4 ? function (_v0) {
        return _v14(_v4.encode(_v0));
      } : function (_v0) {
        return _v13(_v18(_v0));
      },
      _v20 = function (_v0, _v1) {
        return void 0 === _v1 && (_v1 = !1), _v1 ? _v10(_v19(_v0)) : _v19(_v0);
      },
      _v21 = function (_v0) {
        return _v20(_v0, !0);
      },
      _v22 = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,
      _v23 = function (_v0) {
        switch (_v0.length) {
          case 4:
            var _v1 = ((7 & _v0.charCodeAt(0)) << 18 | (63 & _v0.charCodeAt(1)) << 12 | (63 & _v0.charCodeAt(2)) << 6 | 63 & _v0.charCodeAt(3)) - 0;
            return _v8((_v1 >>> 10) + 0) + _v8((0 & _v1) + 0);
          case 3:
            return _v8((15 & _v0.charCodeAt(0)) << 12 | (63 & _v0.charCodeAt(1)) << 6 | 63 & _v0.charCodeAt(2));
          default:
            return _v8((31 & _v0.charCodeAt(0)) << 6 | 63 & _v0.charCodeAt(1));
        }
      },
      _v24 = function (_v0) {
        return _v0.replace(_v22, _v23);
      },
      _v25 = function (_v0) {
        if (_v0 = _v0.replace(/\s+/g, ""), !_v7.test(_v0)) throw TypeError("malformed base64.");
        _v0 += "==".slice(2 - (3 & _v0.length));
        for (var _v1, _v2, _v3, _v4 = [], _v5 = 0; _v5 < _v0.length;) _v1 = _v6[_v0.charAt(_v5++)] << 18 | _v6[_v0.charAt(_v5++)] << 12 | (_v2 = _v6[_v0.charAt(_v5++)]) << 6 | (_v3 = _v6[_v0.charAt(_v5++)]), 64 === _v2 ? _v4.push(_v8(_v1 >> 16 & 255)) : 64 === _v3 ? _v4.push(_v8(_v1 >> 16 & 255, _v1 >> 8 & 255)) : _v4.push(_v8(_v1 >> 16 & 255, _v1 >> 8 & 255, 255 & _v1));
        return _v4.join("");
      },
      _v26 = "function" == typeof atob ? function (_v0) {
        return atob(_v11(_v0));
      } : _v2 ? function (_v0) {
        return _v3.Buffer.from(_v0, "base64").toString("binary");
      } : _v25,
      _v27 = _v2 ? function (_v0) {
        return _v9(_v3.Buffer.from(_v0, "base64"));
      } : function (_v0) {
        return _v9(_v26(_v0).split("").map(function (_v0) {
          return _v0.charCodeAt(0);
        }));
      },
      _v28 = function (_v0) {
        return _v27(_v30(_v0));
      },
      _v29 = _v2 ? function (_v0) {
        return _v3.Buffer.from(_v0, "base64").toString("utf8");
      } : _v3 ? function (_v0) {
        return _v3.decode(_v27(_v0));
      } : function (_v0) {
        return _v24(_v26(_v0));
      },
      _v30 = function (_v0) {
        return _v11(_v0.replace(/[-_]/g, function (_v0) {
          return "-" == _v0 ? "+" : "/";
        }));
      },
      _v31 = function (_v0) {
        return _v29(_v30(_v0));
      },
      _v32 = function (_v0) {
        return {
          value: _v0,
          enumerable: !1,
          writable: !0,
          configurable: !0
        };
      },
      _v33 = function () {
        var _v0 = function (_v0, _v1) {
          return Object.defineProperty(String.prototype, _v0, _v32(_v1));
        };
        _v0("fromBase64", function () {
          return _v31(this);
        }), _v0("toBase64", function (_v0) {
          return _v20(this, _v0);
        }), _v0("toBase64URI", function () {
          return _v20(this, !0);
        }), _v0("toBase64URL", function () {
          return _v20(this, !0);
        }), _v0("toUint8Array", function () {
          return _v28(this);
        });
      },
      _v34 = function () {
        var _v0 = function (_v0, _v1) {
          return Object.defineProperty(Uint8Array.prototype, _v0, _v32(_v1));
        };
        _v0("toBase64", function (_v0) {
          return _v15(this, _v0);
        }), _v0("toBase64URI", function () {
          return _v15(this, !0);
        }), _v0("toBase64URL", function () {
          return _v15(this, !0);
        });
      },
      _v35 = {
        version: _v1,
        VERSION: _v1,
        atob: _v26,
        atobPolyfill: _v25,
        btoa: _v13,
        btoaPolyfill: _v12,
        fromBase64: _v31,
        toBase64: _v20,
        encode: _v20,
        encodeURI: _v21,
        encodeURL: _v21,
        utob: _v18,
        btou: _v24,
        decode: _v31,
        isValid: function (_v0) {
          if ("string" != typeof _v0) return !1;
          var _v1 = _v0.replace(/\s+/g, "").replace(/={0,2}$/, "");
          return !/[^\s0-9a-zA-Z\+/]/.test(_v1) || !/[^\s0-9a-zA-Z\-_]/.test(_v1);
        },
        fromUint8Array: _v15,
        toUint8Array: _v28,
        extendString: _v33,
        extendUint8Array: _v34,
        extendBuiltins: function () {
          _v33(), _v34();
        }
      };
    return _v35.Base64 = {}, Object.keys(_v35).forEach(function (_v0) {
      return _v35.Base64[_v0] = _v35[_v0];
    }), _v35;
  }();
}