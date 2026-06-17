{
  var _v3 = function () {
    var _v0 = String.fromCharCode,
      _v1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
      _v2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",
      _v3 = {};
    function _v4(_v0, _v1) {
      if (!_v3[_v0]) {
        _v3[_v0] = {};
        for (var _v2 = 0; _v2 < _v0.length; _v2++) _v3[_v0][_v0.charAt(_v2)] = _v2;
      }
      return _v3[_v0][_v1];
    }
    var _v5 = {
      compressToBase64: function (_v0) {
        if (null == _v0) return "";
        var _v1 = _v5._compress(_v0, 6, function (_v0) {
          return _v1.charAt(_v0);
        });
        switch (_v1.length % 4) {
          default:
          case 0:
            return _v1;
          case 1:
            return _v1 + "===";
          case 2:
            return _v1 + "==";
          case 3:
            return _v1 + "=";
        }
      },
      decompressFromBase64: function (_v0) {
        return null == _v0 ? "" : "" == _v0 ? null : _v5._decompress(_v0.length, 32, function (_v0) {
          return _v4(_v1, _v0.charAt(_v0));
        });
      },
      compressToUTF16: function (_v0) {
        return null == _v0 ? "" : _v5._compress(_v0, 15, function (_v0) {
          return _v0(_v0 + 32);
        }) + " ";
      },
      decompressFromUTF16: function (_v0) {
        return null == _v0 ? "" : "" == _v0 ? null : _v5._decompress(_v0.length, 0, function (_v0) {
          return _v0.charCodeAt(_v0) - 32;
        });
      },
      compressToUint8Array: function (_v0) {
        for (var _v1 = _v5.compress(_v0), _v2 = new Uint8Array(2 * _v1.length), _v3 = 0, _v4 = _v1.length; _v3 < _v4; _v3++) {
          var _v5 = _v1.charCodeAt(_v3);
          _v2[2 * _v3] = _v5 >>> 8, _v2[2 * _v3 + 1] = _v5 % 256;
        }
        return _v2;
      },
      decompressFromUint8Array: function (_v0) {
        if (null == _v0) return _v5.decompress(_v0);
        for (var _v1 = Array(_v0.length / 2), _v2 = 0, _v3 = _v1.length; _v2 < _v3; _v2++) _v1[_v2] = 256 * _v0[2 * _v2] + _v0[2 * _v2 + 1];
        var _v4 = [];
        return _v1.forEach(function (_v0) {
          _v4.push(_v0(_v0));
        }), _v5.decompress(_v4.join(""));
      },
      compressToEncodedURIComponent: function (_v0) {
        return null == _v0 ? "" : _v5._compress(_v0, 6, function (_v0) {
          return _v2.charAt(_v0);
        });
      },
      decompressFromEncodedURIComponent: function (_v0) {
        return null == _v0 ? "" : "" == _v0 ? null : (_v0 = _v0.replace(/ /g, "+"), _v5._decompress(_v0.length, 32, function (_v0) {
          return _v4(_v2, _v0.charAt(_v0));
        }));
      },
      compress: function (_v0) {
        return _v5._compress(_v0, 16, function (_v0) {
          return _v0(_v0);
        });
      },
      _compress: function (_v0, _v1, _v2) {
        if (null == _v0) return "";
        var _v3,
          _v4,
          _v5,
          _v6 = {},
          _v7 = {},
          _v8 = "",
          _v9 = "",
          _v10 = "",
          _v11 = 2,
          _v12 = 3,
          _v13 = 2,
          _v14 = [],
          _v15 = 0,
          _v16 = 0;
        for (_v5 = 0; _v5 < _v0.length; _v5 += 1) if (_v8 = _v0.charAt(_v5), Object.prototype.hasOwnProperty.call(_v6, _v8) || (_v6[_v8] = _v12++, _v7[_v8] = !0), _v9 = _v10 + _v8, Object.prototype.hasOwnProperty.call(_v6, _v9)) _v10 = _v9;else {
          if (Object.prototype.hasOwnProperty.call(_v7, _v10)) {
            if (256 > _v10.charCodeAt(0)) {
              for (_v3 = 0; _v3 < _v13; _v3++) _v15 <<= 1, _v16 == _v1 - 1 ? (_v16 = 0, _v14.push(_v2(_v15)), _v15 = 0) : _v16++;
              for (_v3 = 0, _v4 = _v10.charCodeAt(0); _v3 < 8; _v3++) _v15 = _v15 << 1 | 1 & _v4, _v16 == _v1 - 1 ? (_v16 = 0, _v14.push(_v2(_v15)), _v15 = 0) : _v16++, _v4 >>= 1;
            } else {
              for (_v3 = 0, _v4 = 1; _v3 < _v13; _v3++) _v15 = _v15 << 1 | _v4, _v16 == _v1 - 1 ? (_v16 = 0, _v14.push(_v2(_v15)), _v15 = 0) : _v16++, _v4 = 0;
              for (_v3 = 0, _v4 = _v10.charCodeAt(0); _v3 < 16; _v3++) _v15 = _v15 << 1 | 1 & _v4, _v16 == _v1 - 1 ? (_v16 = 0, _v14.push(_v2(_v15)), _v15 = 0) : _v16++, _v4 >>= 1;
            }
            0 == --_v11 && (_v11 = Math.pow(2, _v13), _v13++), delete _v7[_v10];
          } else for (_v3 = 0, _v4 = _v6[_v10]; _v3 < _v13; _v3++) _v15 = _v15 << 1 | 1 & _v4, _v16 == _v1 - 1 ? (_v16 = 0, _v14.push(_v2(_v15)), _v15 = 0) : _v16++, _v4 >>= 1;
          0 == --_v11 && (_v11 = Math.pow(2, _v13), _v13++), _v6[_v9] = _v12++, _v10 = String(_v8);
        }
        if ("" !== _v10) {
          if (Object.prototype.hasOwnProperty.call(_v7, _v10)) {
            if (256 > _v10.charCodeAt(0)) {
              for (_v3 = 0; _v3 < _v13; _v3++) _v15 <<= 1, _v16 == _v1 - 1 ? (_v16 = 0, _v14.push(_v2(_v15)), _v15 = 0) : _v16++;
              for (_v3 = 0, _v4 = _v10.charCodeAt(0); _v3 < 8; _v3++) _v15 = _v15 << 1 | 1 & _v4, _v16 == _v1 - 1 ? (_v16 = 0, _v14.push(_v2(_v15)), _v15 = 0) : _v16++, _v4 >>= 1;
            } else {
              for (_v3 = 0, _v4 = 1; _v3 < _v13; _v3++) _v15 = _v15 << 1 | _v4, _v16 == _v1 - 1 ? (_v16 = 0, _v14.push(_v2(_v15)), _v15 = 0) : _v16++, _v4 = 0;
              for (_v3 = 0, _v4 = _v10.charCodeAt(0); _v3 < 16; _v3++) _v15 = _v15 << 1 | 1 & _v4, _v16 == _v1 - 1 ? (_v16 = 0, _v14.push(_v2(_v15)), _v15 = 0) : _v16++, _v4 >>= 1;
            }
            0 == --_v11 && (_v11 = Math.pow(2, _v13), _v13++), delete _v7[_v10];
          } else for (_v3 = 0, _v4 = _v6[_v10]; _v3 < _v13; _v3++) _v15 = _v15 << 1 | 1 & _v4, _v16 == _v1 - 1 ? (_v16 = 0, _v14.push(_v2(_v15)), _v15 = 0) : _v16++, _v4 >>= 1;
          0 == --_v11 && (_v11 = Math.pow(2, _v13), _v13++);
        }
        for (_v3 = 0, _v4 = 2; _v3 < _v13; _v3++) _v15 = _v15 << 1 | 1 & _v4, _v16 == _v1 - 1 ? (_v16 = 0, _v14.push(_v2(_v15)), _v15 = 0) : _v16++, _v4 >>= 1;
        for (;;) {
          if (_v15 <<= 1, _v16 == _v1 - 1) {
            _v14.push(_v2(_v15));
            break;
          }
          _v16++;
        }
        return _v14.join("");
      },
      decompress: function (_v0) {
        return null == _v0 ? "" : "" == _v0 ? null : _v5._decompress(_v0.length, 0, function (_v0) {
          return _v0.charCodeAt(_v0);
        });
      },
      _decompress: function (_v0, _v1, _v2) {
        var _v3,
          _v4,
          _v5,
          _v6,
          _v7,
          _v8,
          _v9,
          _v10 = [],
          _v11 = 4,
          _v12 = 4,
          _v13 = 3,
          _v14 = "",
          _v15 = [],
          _v16 = {
            val: _v2(0),
            position: _v1,
            index: 1
          };
        for (_v3 = 0; _v3 < 3; _v3 += 1) _v10[_v3] = _v3;
        for (_v5 = 0, _v7 = 4, _v8 = 1; _v8 != _v7;) _v6 = _v16.val & _v16.position, _v16.position >>= 1, 0 == _v16.position && (_v16.position = _v1, _v16.val = _v2(_v16.index++)), _v5 |= (_v6 > 0) * _v8, _v8 <<= 1;
        switch (_v5) {
          case 0:
            for (_v5 = 0, _v7 = 256, _v8 = 1; _v8 != _v7;) _v6 = _v16.val & _v16.position, _v16.position >>= 1, 0 == _v16.position && (_v16.position = _v1, _v16.val = _v2(_v16.index++)), _v5 |= (_v6 > 0) * _v8, _v8 <<= 1;
            _v9 = _v0(_v5);
            break;
          case 1:
            for (_v5 = 0, _v7 = 0, _v8 = 1; _v8 != _v7;) _v6 = _v16.val & _v16.position, _v16.position >>= 1, 0 == _v16.position && (_v16.position = _v1, _v16.val = _v2(_v16.index++)), _v5 |= (_v6 > 0) * _v8, _v8 <<= 1;
            _v9 = _v0(_v5);
            break;
          case 2:
            return "";
        }
        for (_v10[3] = _v9, _v4 = _v9, _v15.push(_v9);;) {
          if (_v16.index > _v0) return "";
          for (_v5 = 0, _v7 = Math.pow(2, _v13), _v8 = 1; _v8 != _v7;) _v6 = _v16.val & _v16.position, _v16.position >>= 1, 0 == _v16.position && (_v16.position = _v1, _v16.val = _v2(_v16.index++)), _v5 |= (_v6 > 0) * _v8, _v8 <<= 1;
          switch (_v9 = _v5) {
            case 0:
              for (_v5 = 0, _v7 = 256, _v8 = 1; _v8 != _v7;) _v6 = _v16.val & _v16.position, _v16.position >>= 1, 0 == _v16.position && (_v16.position = _v1, _v16.val = _v2(_v16.index++)), _v5 |= (_v6 > 0) * _v8, _v8 <<= 1;
              _v10[_v12++] = _v0(_v5), _v9 = _v12 - 1, _v11--;
              break;
            case 1:
              for (_v5 = 0, _v7 = 0, _v8 = 1; _v8 != _v7;) _v6 = _v16.val & _v16.position, _v16.position >>= 1, 0 == _v16.position && (_v16.position = _v1, _v16.val = _v2(_v16.index++)), _v5 |= (_v6 > 0) * _v8, _v8 <<= 1;
              _v10[_v12++] = _v0(_v5), _v9 = _v12 - 1, _v11--;
              break;
            case 2:
              return _v15.join("");
          }
          if (0 == _v11 && (_v11 = Math.pow(2, _v13), _v13++), _v10[_v9]) _v14 = _v10[_v9];else {
            if (_v9 !== _v12) return null;
            _v14 = _v4 + _v4.charAt(0);
          }
          _v15.push(_v14), _v10[_v12++] = _v4 + _v14.charAt(0), _v11--, _v4 = _v14, 0 == _v11 && (_v11 = Math.pow(2, _v13), _v13++);
        }
      }
    };
    return _v5;
  }();
  if ("function" == typeof define && define.amd) _v0.r, void 0 !== _v3 && _v0.v(_v3);else null != _v1 ? _v1.exports = _v3 : "u" > typeof angular && null != angular && angular.module("LZString", []).factory("LZString", function () {
    return _v3;
  });
}