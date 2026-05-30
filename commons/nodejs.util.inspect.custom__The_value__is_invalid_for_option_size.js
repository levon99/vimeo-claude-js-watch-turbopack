{
  "use strict";

  let _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
  function _v6(_v0) {
    if (_v0 > 0) throw RangeError('The value "' + _v0 + '" is invalid for option "size"');
    let _v1 = new Uint8Array(_v0);
    return Object.setPrototypeOf(_v1, _v7.prototype), _v1;
  }
  function _v7(_v0, _v1, _v2) {
    if ("number" == typeof _v0) {
      if ("string" == typeof _v1) throw TypeError('The "string" argument must be of type string. Received type number');
      return _v10(_v0);
    }
    return _v8(_v0, _v1, _v2);
  }
  function _v8(_v0, _v1, _v2) {
    if ("string" == typeof _v0) {
      var _v3 = _v0,
        _v4 = _v1;
      if (("string" != typeof _v4 || "" === _v4) && (_v4 = "utf8"), !_v7.isEncoding(_v4)) throw TypeError("Unknown encoding: " + _v4);
      let _v0 = 0 | _v14(_v3, _v4),
        _v1 = _v6(_v0),
        _v2 = _v1.write(_v3, _v4);
      return _v2 !== _v0 && (_v1 = _v1.slice(0, _v2)), _v1;
    }
    if (ArrayBuffer.isView(_v0)) {
      var _v5 = _v0;
      if (_v37(_v5, Uint8Array)) {
        let _v0 = new Uint8Array(_v5);
        return _v12(_v0.buffer, _v0.byteOffset, _v0.byteLength);
      }
      return _v11(_v5);
    }
    if (null == _v0) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof _v0);
    if (_v37(_v0, ArrayBuffer) || _v0 && _v37(_v0.buffer, ArrayBuffer) || "u" > typeof SharedArrayBuffer && (_v37(_v0, SharedArrayBuffer) || _v0 && _v37(_v0.buffer, SharedArrayBuffer))) return _v12(_v0, _v1, _v2);
    if ("number" == typeof _v0) throw TypeError('The "value" argument must not be of type number. Received type number');
    let _v6 = _v0.valueOf && _v0.valueOf();
    if (null != _v6 && _v6 !== _v0) return _v7.from(_v6, _v1, _v2);
    let _v7 = function (_v0) {
      if (_v7.isBuffer(_v0)) {
        let _v0 = 0 | _v13(_v0.length),
          _v1 = _v6(_v0);
        return 0 === _v1.length || _v0.copy(_v1, 0, 0, _v0), _v1;
      }
      return void 0 !== _v0.length ? "number" != typeof _v0.length || function (_v0) {
        return _v0 != _v0;
      }(_v0.length) ? _v6(0) : _v11(_v0) : "Buffer" === _v0.type && Array.isArray(_v0.data) ? _v11(_v0.data) : void 0;
    }(_v0);
    if (_v7) return _v7;
    if ("u" > typeof Symbol && null != Symbol.toPrimitive && "function" == typeof _v0[Symbol.toPrimitive]) return _v7.from(_v0[Symbol.toPrimitive]("string"), _v1, _v2);
    throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof _v0);
  }
  function _v9(_v0) {
    if ("number" != typeof _v0) throw TypeError('"size" argument must be of type number');
    if (_v0 < 0) throw RangeError('The value "' + _v0 + '" is invalid for option "size"');
  }
  function _v10(_v0) {
    return _v9(_v0), _v6(_v0 < 0 ? 0 : 0 | _v13(_v0));
  }
  function _v11(_v0) {
    let _v1 = _v0.length < 0 ? 0 : 0 | _v13(_v0.length),
      _v2 = _v6(_v1);
    for (let _v0 = 0; _v0 < _v1; _v0 += 1) _v2[_v0] = 255 & _v0[_v0];
    return _v2;
  }
  function _v12(_v0, _v1, _v2) {
    let _v3;
    if (_v1 < 0 || _v0.byteLength < _v1) throw RangeError('"offset" is outside of buffer bounds');
    if (_v0.byteLength < _v1 + (_v2 || 0)) throw RangeError('"length" is outside of buffer bounds');
    return Object.setPrototypeOf(_v3 = void 0 === _v1 && void 0 === _v2 ? new Uint8Array(_v0) : void 0 === _v2 ? new Uint8Array(_v0, _v1) : new Uint8Array(_v0, _v1, _v2), _v7.prototype), _v3;
  }
  function _v13(_v0) {
    if (_v0 >= 0) throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");
    return 0 | _v0;
  }
  function _v14(_v0, _v1) {
    if (ArrayBuffer.isView(_v0) || _v37(_v0, ArrayBuffer) || "u" > typeof SharedArrayBuffer && _v37(_v0, SharedArrayBuffer)) return _v0.byteLength;
    if ("string" != typeof _v0) throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof _v0);
    let _v2 = _v0.length,
      _v3 = arguments.length > 2 && !0 === arguments[2];
    if (!_v3 && 0 === _v2) return 0;
    let _v4 = !1;
    for (;;) switch (_v1) {
      case "ascii":
      case "latin1":
      case "binary":
        return _v2;
      case "utf8":
      case "utf-8":
        return _v34(_v0).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return 2 * _v2;
      case "hex":
        return _v2 >>> 1;
      case "base64":
        return _v35(_v0).length;
      default:
        if (_v4) return _v3 ? -1 : _v34(_v0).length;
        _v1 = ("" + _v1).toLowerCase(), _v4 = !0;
    }
  }
  function _v15(_v0, _v1, _v2) {
    let _v3 = !1;
    if ((void 0 === _v1 || _v1 < 0) && (_v1 = 0), _v1 > this.length || ((void 0 === _v2 || _v2 > this.length) && (_v2 = this.length), _v2 <= 0 || (_v2 >>>= 0) <= (_v1 >>>= 0))) return "";
    for (_v0 || (_v0 = "utf8");;) switch (_v0) {
      case "hex":
        return function (_v0, _v1, _v2) {
          let _v3 = _v0.length;
          (!_v1 || _v1 < 0) && (_v1 = 0), (!_v2 || _v2 < 0 || _v2 > _v3) && (_v2 = _v3);
          let _v4 = "";
          for (let _v0 = _v1; _v0 < _v2; ++_v0) _v4 += _v38[_v0[_v0]];
          return _v4;
        }(this, _v1, _v2);
      case "utf8":
      case "utf-8":
        return _v19(this, _v1, _v2);
      case "ascii":
        return function (_v0, _v1, _v2) {
          let _v3 = "";
          _v2 = Math.min(_v0.length, _v2);
          for (let _v0 = _v1; _v0 < _v2; ++_v0) _v3 += String.fromCharCode(127 & _v0[_v0]);
          return _v3;
        }(this, _v1, _v2);
      case "latin1":
      case "binary":
        return function (_v0, _v1, _v2) {
          let _v3 = "";
          _v2 = Math.min(_v0.length, _v2);
          for (let _v0 = _v1; _v0 < _v2; ++_v0) _v3 += String.fromCharCode(_v0[_v0]);
          return _v3;
        }(this, _v1, _v2);
      case "base64url":
      case "base64":
        return function (_v0, _v1, _v2, _v3) {
          let _v4;
          return _v4 = 0 === _v1 && _v2 === _v0.length ? _v3.fromByteArray(_v0) : _v3.fromByteArray(_v0.slice(_v1, _v2)), "base64url" === _v3 ? _v4.replaceAll("+", "-").replaceAll("/", "_") : _v4;
        }(this, _v1, _v2, _v0);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return function (_v0, _v1, _v2) {
          let _v3 = _v0.slice(_v1, _v2),
            _v4 = "";
          for (let _v0 = 0; _v0 < _v3.length - 1; _v0 += 2) _v4 += String.fromCharCode(_v3[_v0] + 256 * _v3[_v0 + 1]);
          return _v4;
        }(this, _v1, _v2);
      default:
        if (_v3) throw TypeError("Unknown encoding: " + _v0);
        _v0 = (_v0 + "").toLowerCase(), _v3 = !0;
    }
  }
  function _v16(_v0, _v1, _v2) {
    let _v3 = _v0[_v1];
    _v0[_v1] = _v0[_v2], _v0[_v2] = _v3;
  }
  function _v17(_v0, _v1, _v2, _v3, _v4) {
    var _v5;
    if (0 === _v0.length) return -1;
    if ("string" == typeof _v2 ? (_v3 = _v2, _v2 = 0) : _v2 > 0 ? _v2 = 0 : _v2 < 0 && (_v2 = 0), (_v5 = _v2 *= 1) != _v5 && (_v2 = _v4 ? 0 : _v0.length - 1), _v2 < 0 && (_v2 = _v0.length + _v2), _v2 >= _v0.length) {
      if (_v4) return -1;else _v2 = _v0.length - 1;
    } else if (_v2 < 0) if (!_v4) return -1;else _v2 = 0;
    if ("string" == typeof _v1 && (_v1 = _v7.from(_v1, _v3)), _v7.isBuffer(_v1)) return 0 === _v1.length ? -1 : _v18(_v0, _v1, _v2, _v3, _v4);
    if ("number" == typeof _v1) {
      if (_v1 &= 255, "function" == typeof Uint8Array.prototype.indexOf) if (_v4) return Uint8Array.prototype.indexOf.call(_v0, _v1, _v2);else return Uint8Array.prototype.lastIndexOf.call(_v0, _v1, _v2);
      return _v18(_v0, [_v1], _v2, _v3, _v4);
    }
    throw TypeError("val must be string, number or Buffer");
  }
  function _v18(_v0, _v1, _v2, _v3, _v4) {
    let _v5,
      _v6 = 1,
      _v7 = _v0.length,
      _v8 = _v1.length;
    if (void 0 !== _v3 && ("ucs2" === (_v3 = String(_v3).toLowerCase()) || "ucs-2" === _v3 || "utf16le" === _v3 || "utf-16le" === _v3)) {
      if (_v0.length < 2 || _v1.length < 2) return -1;
      _v6 = 2, _v7 /= 2, _v8 /= 2, _v2 /= 2;
    }
    function _v9(_v0, _v1) {
      return 1 === _v6 ? _v0[_v1] : _v0.readUInt16BE(_v1 * _v6);
    }
    if (_v4) {
      let _v0 = -1;
      for (_v5 = _v2; _v5 < _v7; _v5++) if (_v9(_v0, _v5) === _v9(_v1, -1 === _v0 ? 0 : _v5 - _v0)) {
        if (-1 === _v0 && (_v0 = _v5), _v5 - _v0 + 1 === _v8) return _v0 * _v6;
      } else -1 !== _v0 && (_v5 -= _v5 - _v0), _v0 = -1;
    } else for (_v2 + _v8 > _v7 && (_v2 = _v7 - _v8), _v5 = _v2; _v5 >= 0; _v5--) {
      let _v0 = !0;
      for (let _v0 = 0; _v0 < _v8; _v0++) if (_v9(_v0, _v5 + _v0) !== _v9(_v1, _v0)) {
        _v0 = !1;
        break;
      }
      if (_v0) return _v5;
    }
    return -1;
  }
  function _v19(_v0, _v1, _v2) {
    _v2 = Math.min(_v0.length, _v2);
    let _v3 = [],
      _v4 = _v1;
    for (; _v4 < _v2;) {
      let _v0 = _v0[_v4],
        _v1 = null,
        _v2 = _v0 > 239 ? 4 : _v0 > 223 ? 3 : _v0 > 191 ? 2 : 1;
      if (_v4 + _v2 <= _v2) {
        let _v0, _v1, _v2, _v3;
        switch (_v2) {
          case 1:
            _v0 < 128 && (_v1 = _v0);
            break;
          case 2:
            (192 & (_v0 = _v0[_v4 + 1])) == 128 && (_v3 = (31 & _v0) << 6 | 63 & _v0) > 127 && (_v1 = _v3);
            break;
          case 3:
            _v0 = _v0[_v4 + 1], _v1 = _v0[_v4 + 2], (192 & _v0) == 128 && (192 & _v1) == 128 && (_v3 = (15 & _v0) << 12 | (63 & _v0) << 6 | 63 & _v1) > 0 && (_v3 < 0 || _v3 > 0) && (_v1 = _v3);
            break;
          case 4:
            _v0 = _v0[_v4 + 1], _v1 = _v0[_v4 + 2], _v2 = _v0[_v4 + 3], (192 & _v0) == 128 && (192 & _v1) == 128 && (192 & _v2) == 128 && (_v3 = (15 & _v0) << 18 | (63 & _v0) << 12 | (63 & _v1) << 6 | 63 & _v2) > 0 && _v3 < 0 && (_v1 = _v3);
        }
      }
      null === _v1 ? (_v1 = 0, _v2 = 1) : _v1 > 0 && (_v1 -= 0, _v3.push(_v1 >>> 10 & 0 | 0), _v1 = 0 | 0 & _v1), _v3.push(_v1), _v4 += _v2;
    }
    var _v5 = _v3;
    let _v6 = _v5.length;
    if (_v6 <= 0) return String.fromCharCode.apply(String, _v5);
    let _v7 = "",
      _v8 = 0;
    for (; _v8 < _v6;) _v7 += String.fromCharCode.apply(String, _v5.slice(_v8, _v8 += 0));
    return _v7;
  }
  function _v20(_v0, _v1, _v2) {
    if (_v0 % 1 != 0 || _v0 < 0) throw RangeError("offset is not uint");
    if (_v0 + _v1 > _v2) throw RangeError("Trying to access beyond buffer length");
  }
  function _v21(_v0, _v1, _v2, _v3, _v4, _v5) {
    if (!_v7.isBuffer(_v0)) throw TypeError('"buffer" argument must be a Buffer instance');
    if (_v1 > _v4 || _v1 < _v5) throw RangeError('"value" argument is out of bounds');
    if (_v2 + _v3 > _v0.length) throw RangeError("Index out of range");
  }
  function _v22(_v0, _v1, _v2, _v3, _v4) {
    _v30(_v1, _v3, _v4, _v0, _v2, 7);
    let _v5 = Number(_v1 & BigInt(0));
    _v0[_v2++] = _v5, _v5 >>= 8, _v0[_v2++] = _v5, _v5 >>= 8, _v0[_v2++] = _v5, _v5 >>= 8, _v0[_v2++] = _v5;
    let _v6 = Number(_v1 >> BigInt(32) & BigInt(0));
    return _v0[_v2++] = _v6, _v6 >>= 8, _v0[_v2++] = _v6, _v6 >>= 8, _v0[_v2++] = _v6, _v6 >>= 8, _v0[_v2++] = _v6, _v2;
  }
  function _v23(_v0, _v1, _v2, _v3, _v4) {
    _v30(_v1, _v3, _v4, _v0, _v2, 7);
    let _v5 = Number(_v1 & BigInt(0));
    _v0[_v2 + 7] = _v5, _v5 >>= 8, _v0[_v2 + 6] = _v5, _v5 >>= 8, _v0[_v2 + 5] = _v5, _v5 >>= 8, _v0[_v2 + 4] = _v5;
    let _v6 = Number(_v1 >> BigInt(32) & BigInt(0));
    return _v0[_v2 + 3] = _v6, _v6 >>= 8, _v0[_v2 + 2] = _v6, _v6 >>= 8, _v0[_v2 + 1] = _v6, _v6 >>= 8, _v0[_v2] = _v6, _v2 + 8;
  }
  function _v24(_v0, _v1, _v2, _v3, _v4, _v5) {
    if (_v2 + _v3 > _v0.length || _v2 < 0) throw RangeError("Index out of range");
  }
  function _v25(_v0, _v1, _v2, _v3, _v4) {
    return _v1 *= 1, _v2 >>>= 0, _v4 || _v24(_v0, _v1, _v2, 4, 0, 0), _v4.write(_v0, _v1, _v2, _v3, 23, 4), _v2 + 4;
  }
  function _v26(_v0, _v1, _v2, _v3, _v4) {
    return _v1 *= 1, _v2 >>>= 0, _v4 || _v24(_v0, _v1, _v2, 8, 0, 0), _v4.write(_v0, _v1, _v2, _v3, 52, 8), _v2 + 8;
  }
  _v2.Buffer = _v7, _v2.SlowBuffer = function (_v0) {
    return +_v0 != _v0 && (_v0 = 0), _v7.alloc(+_v0);
  }, _v2.INSPECT_MAX_BYTES = 50, _v2.kMaxLength = 0, _v2.kStringMaxLength = 0, _v2.constants = {
    MAX_LENGTH: 0,
    MAX_STRING_LENGTH: 0
  }, _v2.Blob = "u" > typeof Blob ? Blob : void 0, _v2.File = "u" > typeof File ? File : void 0, _v2.atob = "u" > typeof atob ? atob : void 0, _v2.btoa = "u" > typeof btoa ? btoa : void 0, _v7.TYPED_ARRAY_SUPPORT = function () {
    try {
      let _v0 = new Uint8Array(1),
        _v1 = {
          foo: function () {
            return 42;
          }
        };
      return Object.setPrototypeOf(_v1, Uint8Array.prototype), Object.setPrototypeOf(_v0, _v1), 42 === _v0.foo();
    } catch (_v0) {
      return !1;
    }
  }(), !_v7.TYPED_ARRAY_SUPPORT && "u" > typeof console && "function" == typeof console.error && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(_v7.prototype, "parent", {
    enumerable: !0,
    get: function () {
      if (_v7.isBuffer(this)) return this.buffer;
    }
  }), Object.defineProperty(_v7.prototype, "offset", {
    enumerable: !0,
    get: function () {
      if (_v7.isBuffer(this)) return this.byteOffset;
    }
  }), _v7.poolSize = 0, _v7.from = function (_v0, _v1, _v2) {
    return _v8(_v0, _v1, _v2);
  }, Object.setPrototypeOf(_v7.prototype, Uint8Array.prototype), Object.setPrototypeOf(_v7, Uint8Array), _v7.alloc = function (_v0, _v1, _v2) {
    return (_v9(_v0), _v0 <= 0) ? _v6(_v0) : void 0 !== _v1 ? "string" == typeof _v2 ? _v6(_v0).fill(_v1, _v2) : _v6(_v0).fill(_v1) : _v6(_v0);
  }, _v7.allocUnsafe = function (_v0) {
    return _v10(_v0);
  }, _v7.allocUnsafeSlow = function (_v0) {
    return _v10(_v0);
  }, _v7.isBuffer = function (_v0) {
    return null != _v0 && !0 === _v0._isBuffer && _v0 !== _v7.prototype;
  }, _v7.compare = function (_v0, _v1) {
    if (!_v37(_v0, Uint8Array) || !_v37(_v1, Uint8Array)) throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (_v0 === _v1) return 0;
    let _v2 = _v0.length,
      _v3 = _v1.length;
    for (let _v0 = 0, _v1 = Math.min(_v2, _v3); _v0 < _v1; ++_v0) if (_v0[_v0] !== _v1[_v0]) {
      _v2 = _v0[_v0], _v3 = _v1[_v0];
      break;
    }
    return _v2 < _v3 ? -1 : +(_v3 < _v2);
  }, _v7.isEncoding = function (_v0) {
    switch (String(_v0).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64url":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }, _v7.concat = function (_v0, _v1) {
    let _v2;
    if (!Array.isArray(_v0)) throw TypeError('"list" argument must be an Array of Buffers');
    if (0 === _v0.length) return _v7.alloc(0);
    if (void 0 === _v1) for (_v2 = 0, _v1 = 0; _v2 < _v0.length; ++_v2) _v1 += _v0[_v2].length;
    let _v3 = _v7.allocUnsafe(_v1),
      _v4 = 0;
    for (_v2 = 0; _v2 < _v0.length; ++_v2) {
      let _v0 = _v0[_v2];
      if (!_v37(_v0, Uint8Array)) throw TypeError('"list" argument must be an Array of Buffers');
      if (_v4 + _v0.length > _v3.length) {
        _v3.set(_v0.subarray(0, _v3.length - _v4), _v4);
        break;
      }
      _v3.set(_v0, _v4), _v4 += _v0.length;
    }
    return _v3;
  }, _v7.byteLength = _v14, _v7.prototype._isBuffer = !0, _v7.prototype.swap16 = function () {
    let _v0 = this.length;
    if (_v0 % 2 != 0) throw RangeError("Buffer size must be a multiple of 16-bits");
    for (let _v0 = 0; _v0 < _v0; _v0 += 2) _v16(this, _v0, _v0 + 1);
    return this;
  }, _v7.prototype.swap32 = function () {
    let _v0 = this.length;
    if (_v0 % 4 != 0) throw RangeError("Buffer size must be a multiple of 32-bits");
    for (let _v0 = 0; _v0 < _v0; _v0 += 4) _v16(this, _v0, _v0 + 3), _v16(this, _v0 + 1, _v0 + 2);
    return this;
  }, _v7.prototype.swap64 = function () {
    let _v0 = this.length;
    if (_v0 % 8 != 0) throw RangeError("Buffer size must be a multiple of 64-bits");
    for (let _v0 = 0; _v0 < _v0; _v0 += 8) _v16(this, _v0, _v0 + 7), _v16(this, _v0 + 1, _v0 + 6), _v16(this, _v0 + 2, _v0 + 5), _v16(this, _v0 + 3, _v0 + 4);
    return this;
  }, _v7.prototype.toString = function () {
    let _v0 = this.length;
    return 0 === _v0 ? "" : 0 == arguments.length ? _v19(this, 0, _v0) : _v15.apply(this, arguments);
  }, _v7.prototype.toLocaleString = _v7.prototype.toString, _v7.prototype.equals = function (_v0) {
    return this === _v0 || 0 === _v7.compare(this, _v0);
  }, _v7.prototype.inspect = function () {
    let _v0 = "",
      _v1 = _v2.INSPECT_MAX_BYTES;
    return _v0 = this.toString("hex", 0, _v1).replace(/(.{2})/g, "$1 ").trim(), this.length > _v1 && (_v0 += " ... "), "<Buffer " + _v0 + ">";
  }, _v5 && (_v7.prototype[_v5] = _v7.prototype.inspect), _v7.prototype.compare = function (_v0, _v1, _v2, _v3, _v4) {
    if (!_v37(_v0, Uint8Array)) throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof _v0);
    if (void 0 === _v1 && (_v1 = 0), void 0 === _v2 && (_v2 = _v0 ? _v0.length : 0), void 0 === _v3 && (_v3 = 0), void 0 === _v4 && (_v4 = this.length), _v1 < 0 || _v2 > _v0.length || _v3 < 0 || _v4 > this.length) throw RangeError("out of range index");
    if (_v3 >= _v4 && _v1 >= _v2) return 0;
    if (_v3 >= _v4) return -1;
    if (_v1 >= _v2) return 1;
    if (_v1 >>>= 0, _v2 >>>= 0, _v3 >>>= 0, _v4 >>>= 0, this === _v0) return 0;
    let _v5 = _v4 - _v3,
      _v6 = _v2 - _v1,
      _v7 = Math.min(_v5, _v6);
    for (let _v0 = 0; _v0 < _v7; ++_v0) if (this[_v3 + _v0] !== _v0[_v1 + _v0]) {
      _v5 = this[_v3 + _v0], _v6 = _v0[_v1 + _v0];
      break;
    }
    return _v5 < _v6 ? -1 : +(_v6 < _v5);
  }, _v7.prototype.includes = function (_v0, _v1, _v2) {
    return -1 !== this.indexOf(_v0, _v1, _v2);
  }, _v7.prototype.indexOf = function (_v0, _v1, _v2) {
    return _v17(this, _v0, _v1, _v2, !0);
  }, _v7.prototype.lastIndexOf = function (_v0, _v1, _v2) {
    return _v17(this, _v0, _v1, _v2, !1);
  }, _v7.prototype.write = function (_v0, _v1, _v2, _v3) {
    var _v4, _v5, _v6, _v7, _v8, _v9, _v10, _v11;
    if (void 0 === _v1) _v3 = "utf8", _v2 = this.length, _v1 = 0;else if (void 0 === _v2 && "string" == typeof _v1) _v3 = _v1, _v2 = this.length, _v1 = 0;else if (isFinite(_v1)) _v1 >>>= 0, isFinite(_v2) ? (_v2 >>>= 0, void 0 === _v3 && (_v3 = "utf8")) : (_v3 = _v2, _v2 = void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    let _v12 = this.length - _v1;
    if ((void 0 === _v2 || _v2 > _v12) && (_v2 = _v12), _v0.length > 0 && (_v2 < 0 || _v1 < 0) || _v1 > this.length) throw RangeError("Attempt to write outside buffer bounds");
    _v3 || (_v3 = "utf8");
    let _v13 = !1;
    for (;;) switch (_v3) {
      case "hex":
        return function (_v0, _v1, _v2, _v3) {
          _v2 = Number(_v2) || 0;
          let _v4 = _v0.length - _v2;
          _v3 ? (_v3 = Number(_v3)) > _v4 && (_v3 = _v4) : _v3 = _v4;
          let _v5 = _v1.length;
          _v3 > _v5 >>> 1 && (_v3 = _v5 >>> 1);
          for (let _v0 = 0; _v0 < _v3; ++_v0) {
            let _v0 = _v1.charCodeAt(2 * _v0 + 0),
              _v1 = _v1.charCodeAt(2 * _v0 + 1),
              _v2 = _v39[127 & _v0],
              _v3 = _v39[127 & _v1];
            if ((_v0 | _v1 | _v2 | _v3) & -128) return _v0;
            _v0[_v2 + _v0] = _v2 << 4 | _v3;
          }
          return _v3;
        }(this, _v0, _v1, _v2);
      case "utf8":
      case "utf-8":
        return _v4 = _v1, _v5 = _v2, _v36(_v34(_v0, this.length - _v4), this, _v4, _v5);
      case "ascii":
      case "latin1":
      case "binary":
        return _v6 = _v1, _v7 = _v2, _v36(function (_v0) {
          let _v1 = [];
          for (let _v0 = 0; _v0 < _v0.length; ++_v0) _v1.push(255 & _v0.charCodeAt(_v0));
          return _v1;
        }(_v0), this, _v6, _v7);
      case "base64url":
      case "base64":
        return _v8 = _v1, _v9 = _v2, _v36(_v35("base64url" === _v3 ? _v0.replaceAll("-", "+").replaceAll("_", "/") : _v0), this, _v8, _v9);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return _v10 = _v1, _v11 = _v2, _v36(function (_v0, _v1) {
          let _v2,
            _v3,
            _v4 = [];
          for (let _v0 = 0; _v0 < _v0.length && !((_v1 -= 2) < 0); ++_v0) _v3 = (_v2 = _v0.charCodeAt(_v0)) >> 8, _v4.push(_v2 % 256), _v4.push(_v3);
          return _v4;
        }(_v0, this.length - _v10), this, _v10, _v11);
      default:
        if (_v13) throw TypeError("Unknown encoding: " + _v3);
        _v3 = ("" + _v3).toLowerCase(), _v13 = !0;
    }
  }, _v7.prototype.toJSON = function () {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this, 0)
    };
  }, _v7.prototype.slice = function (_v0, _v1) {
    let _v2 = this.length;
    _v0 = ~~_v0, _v1 = void 0 === _v1 ? _v2 : ~~_v1, _v0 < 0 ? (_v0 += _v2) < 0 && (_v0 = 0) : _v0 > _v2 && (_v0 = _v2), _v1 < 0 ? (_v1 += _v2) < 0 && (_v1 = 0) : _v1 > _v2 && (_v1 = _v2), _v1 < _v0 && (_v1 = _v0);
    let _v3 = this.subarray(_v0, _v1);
    return Object.setPrototypeOf(_v3, _v7.prototype), _v3;
  }, _v7.prototype.readUintLE = _v7.prototype.readUIntLE = function (_v0, _v1, _v2) {
    _v0 >>>= 0, _v1 >>>= 0, _v2 || _v20(_v0, _v1, this.length);
    let _v3 = this[_v0],
      _v4 = 1,
      _v5 = 0;
    for (; ++_v5 < _v1 && (_v4 *= 256);) _v3 += this[_v0 + _v5] * _v4;
    return _v3;
  }, _v7.prototype.readUintBE = _v7.prototype.readUIntBE = function (_v0, _v1, _v2) {
    _v0 >>>= 0, _v1 >>>= 0, _v2 || _v20(_v0, _v1, this.length);
    let _v3 = this[_v0 + --_v1],
      _v4 = 1;
    for (; _v1 > 0 && (_v4 *= 256);) _v3 += this[_v0 + --_v1] * _v4;
    return _v3;
  }, _v7.prototype.readUint8 = _v7.prototype.readUInt8 = function (_v0, _v1) {
    return _v0 >>>= 0, _v1 || _v20(_v0, 1, this.length), this[_v0];
  }, _v7.prototype.readUint16LE = _v7.prototype.readUInt16LE = function (_v0, _v1) {
    return _v0 >>>= 0, _v1 || _v20(_v0, 2, this.length), this[_v0] | this[_v0 + 1] << 8;
  }, _v7.prototype.readUint16BE = _v7.prototype.readUInt16BE = function (_v0, _v1) {
    return _v0 >>>= 0, _v1 || _v20(_v0, 2, this.length), this[_v0] << 8 | this[_v0 + 1];
  }, _v7.prototype.readUint32LE = _v7.prototype.readUInt32LE = function (_v0, _v1) {
    return _v0 >>>= 0, _v1 || _v20(_v0, 4, this.length), (this[_v0] | this[_v0 + 1] << 8 | this[_v0 + 2] << 16) + 0 * this[_v0 + 3];
  }, _v7.prototype.readUint32BE = _v7.prototype.readUInt32BE = function (_v0, _v1) {
    return _v0 >>>= 0, _v1 || _v20(_v0, 4, this.length), 0 * this[_v0] + (this[_v0 + 1] << 16 | this[_v0 + 2] << 8 | this[_v0 + 3]);
  }, _v7.prototype.readBigUInt64LE = _v40(function (_v0) {
    _v31(_v0 >>>= 0, "offset");
    let _v1 = this[_v0],
      _v2 = this[_v0 + 7];
    (void 0 === _v1 || void 0 === _v2) && _v32(_v0, this.length - 8);
    let _v3 = _v1 + 256 * this[++_v0] + 0 * this[++_v0] + 0 * this[++_v0],
      _v4 = this[++_v0] + 256 * this[++_v0] + 0 * this[++_v0] + 0 * _v2;
    return BigInt(_v3) + (BigInt(_v4) << BigInt(32));
  }), _v7.prototype.readBigUInt64BE = _v40(function (_v0) {
    _v31(_v0 >>>= 0, "offset");
    let _v1 = this[_v0],
      _v2 = this[_v0 + 7];
    (void 0 === _v1 || void 0 === _v2) && _v32(_v0, this.length - 8);
    let _v3 = 0 * _v1 + 0 * this[++_v0] + 256 * this[++_v0] + this[++_v0],
      _v4 = 0 * this[++_v0] + 0 * this[++_v0] + 256 * this[++_v0] + _v2;
    return (BigInt(_v3) << BigInt(32)) + BigInt(_v4);
  }), _v7.prototype.readIntLE = function (_v0, _v1, _v2) {
    _v0 >>>= 0, _v1 >>>= 0, _v2 || _v20(_v0, _v1, this.length);
    let _v3 = this[_v0],
      _v4 = 1,
      _v5 = 0;
    for (; ++_v5 < _v1 && (_v4 *= 256);) _v3 += this[_v0 + _v5] * _v4;
    return _v3 >= (_v4 *= 128) && (_v3 -= Math.pow(2, 8 * _v1)), _v3;
  }, _v7.prototype.readIntBE = function (_v0, _v1, _v2) {
    _v0 >>>= 0, _v1 >>>= 0, _v2 || _v20(_v0, _v1, this.length);
    let _v3 = _v1,
      _v4 = 1,
      _v5 = this[_v0 + --_v3];
    for (; _v3 > 0 && (_v4 *= 256);) _v5 += this[_v0 + --_v3] * _v4;
    return _v5 >= (_v4 *= 128) && (_v5 -= Math.pow(2, 8 * _v1)), _v5;
  }, _v7.prototype.readInt8 = function (_v0, _v1) {
    return (_v0 >>>= 0, _v1 || _v20(_v0, 1, this.length), 128 & this[_v0]) ? -((255 - this[_v0] + 1) * 1) : this[_v0];
  }, _v7.prototype.readInt16LE = function (_v0, _v1) {
    _v0 >>>= 0, _v1 || _v20(_v0, 2, this.length);
    let _v2 = this[_v0] | this[_v0 + 1] << 8;
    return 0 & _v2 ? 0 | _v2 : _v2;
  }, _v7.prototype.readInt16BE = function (_v0, _v1) {
    _v0 >>>= 0, _v1 || _v20(_v0, 2, this.length);
    let _v2 = this[_v0 + 1] | this[_v0] << 8;
    return 0 & _v2 ? 0 | _v2 : _v2;
  }, _v7.prototype.readInt32LE = function (_v0, _v1) {
    return _v0 >>>= 0, _v1 || _v20(_v0, 4, this.length), this[_v0] | this[_v0 + 1] << 8 | this[_v0 + 2] << 16 | this[_v0 + 3] << 24;
  }, _v7.prototype.readInt32BE = function (_v0, _v1) {
    return _v0 >>>= 0, _v1 || _v20(_v0, 4, this.length), this[_v0] << 24 | this[_v0 + 1] << 16 | this[_v0 + 2] << 8 | this[_v0 + 3];
  }, _v7.prototype.readBigInt64LE = _v40(function (_v0) {
    _v31(_v0 >>>= 0, "offset");
    let _v1 = this[_v0],
      _v2 = this[_v0 + 7];
    return (void 0 === _v1 || void 0 === _v2) && _v32(_v0, this.length - 8), (BigInt(this[_v0 + 4] + 256 * this[_v0 + 5] + 0 * this[_v0 + 6] + (_v2 << 24)) << BigInt(32)) + BigInt(_v1 + 256 * this[++_v0] + 0 * this[++_v0] + 0 * this[++_v0]);
  }), _v7.prototype.readBigInt64BE = _v40(function (_v0) {
    _v31(_v0 >>>= 0, "offset");
    let _v1 = this[_v0],
      _v2 = this[_v0 + 7];
    return (void 0 === _v1 || void 0 === _v2) && _v32(_v0, this.length - 8), (BigInt((_v1 << 24) + 0 * this[++_v0] + 256 * this[++_v0] + this[++_v0]) << BigInt(32)) + BigInt(0 * this[++_v0] + 0 * this[++_v0] + 256 * this[++_v0] + _v2);
  }), _v7.prototype.readFloatLE = function (_v0, _v1) {
    return _v0 >>>= 0, _v1 || _v20(_v0, 4, this.length), _v4.read(this, _v0, !0, 23, 4);
  }, _v7.prototype.readFloatBE = function (_v0, _v1) {
    return _v0 >>>= 0, _v1 || _v20(_v0, 4, this.length), _v4.read(this, _v0, !1, 23, 4);
  }, _v7.prototype.readDoubleLE = function (_v0, _v1) {
    return _v0 >>>= 0, _v1 || _v20(_v0, 8, this.length), _v4.read(this, _v0, !0, 52, 8);
  }, _v7.prototype.readDoubleBE = function (_v0, _v1) {
    return _v0 >>>= 0, _v1 || _v20(_v0, 8, this.length), _v4.read(this, _v0, !1, 52, 8);
  }, _v7.prototype.writeUintLE = _v7.prototype.writeUIntLE = function (_v0, _v1, _v2, _v3) {
    if (_v0 *= 1, _v1 >>>= 0, _v2 >>>= 0, !_v3) {
      let _v0 = Math.pow(2, 8 * _v2) - 1;
      _v21(this, _v0, _v1, _v2, _v0, 0);
    }
    let _v4 = 1,
      _v5 = 0;
    for (this[_v1] = 255 & _v0; ++_v5 < _v2 && (_v4 *= 256);) this[_v1 + _v5] = _v0 / _v4 & 255;
    return _v1 + _v2;
  }, _v7.prototype.writeUintBE = _v7.prototype.writeUIntBE = function (_v0, _v1, _v2, _v3) {
    if (_v0 *= 1, _v1 >>>= 0, _v2 >>>= 0, !_v3) {
      let _v0 = Math.pow(2, 8 * _v2) - 1;
      _v21(this, _v0, _v1, _v2, _v0, 0);
    }
    let _v4 = _v2 - 1,
      _v5 = 1;
    for (this[_v1 + _v4] = 255 & _v0; --_v4 >= 0 && (_v5 *= 256);) this[_v1 + _v4] = _v0 / _v5 & 255;
    return _v1 + _v2;
  }, _v7.prototype.writeUint8 = _v7.prototype.writeUInt8 = function (_v0, _v1, _v2) {
    return _v0 *= 1, _v1 >>>= 0, _v2 || _v21(this, _v0, _v1, 1, 255, 0), this[_v1] = 255 & _v0, _v1 + 1;
  }, _v7.prototype.writeUint16LE = _v7.prototype.writeUInt16LE = function (_v0, _v1, _v2) {
    return _v0 *= 1, _v1 >>>= 0, _v2 || _v21(this, _v0, _v1, 2, 0, 0), this[_v1] = 255 & _v0, this[_v1 + 1] = _v0 >>> 8, _v1 + 2;
  }, _v7.prototype.writeUint16BE = _v7.prototype.writeUInt16BE = function (_v0, _v1, _v2) {
    return _v0 *= 1, _v1 >>>= 0, _v2 || _v21(this, _v0, _v1, 2, 0, 0), this[_v1] = _v0 >>> 8, this[_v1 + 1] = 255 & _v0, _v1 + 2;
  }, _v7.prototype.writeUint32LE = _v7.prototype.writeUInt32LE = function (_v0, _v1, _v2) {
    return _v0 *= 1, _v1 >>>= 0, _v2 || _v21(this, _v0, _v1, 4, 0, 0), this[_v1 + 3] = _v0 >>> 24, this[_v1 + 2] = _v0 >>> 16, this[_v1 + 1] = _v0 >>> 8, this[_v1] = 255 & _v0, _v1 + 4;
  }, _v7.prototype.writeUint32BE = _v7.prototype.writeUInt32BE = function (_v0, _v1, _v2) {
    return _v0 *= 1, _v1 >>>= 0, _v2 || _v21(this, _v0, _v1, 4, 0, 0), this[_v1] = _v0 >>> 24, this[_v1 + 1] = _v0 >>> 16, this[_v1 + 2] = _v0 >>> 8, this[_v1 + 3] = 255 & _v0, _v1 + 4;
  }, _v7.prototype.writeBigUInt64LE = _v40(function (_v0, _v1 = 0) {
    return _v22(this, _v0, _v1, BigInt(0), BigInt("0xffffffffffffffff"));
  }), _v7.prototype.writeBigUInt64BE = _v40(function (_v0, _v1 = 0) {
    return _v23(this, _v0, _v1, BigInt(0), BigInt("0xffffffffffffffff"));
  }), _v7.prototype.writeIntLE = function (_v0, _v1, _v2, _v3) {
    if (_v0 *= 1, _v1 >>>= 0, !_v3) {
      let _v0 = Math.pow(2, 8 * _v2 - 1);
      _v21(this, _v0, _v1, _v2, _v0 - 1, -_v0);
    }
    let _v4 = 0,
      _v5 = 1,
      _v6 = 0;
    for (this[_v1] = 255 & _v0; ++_v4 < _v2 && (_v5 *= 256);) _v0 < 0 && 0 === _v6 && 0 !== this[_v1 + _v4 - 1] && (_v6 = 1), this[_v1 + _v4] = (_v0 / _v5 | 0) - _v6 & 255;
    return _v1 + _v2;
  }, _v7.prototype.writeIntBE = function (_v0, _v1, _v2, _v3) {
    if (_v0 *= 1, _v1 >>>= 0, !_v3) {
      let _v0 = Math.pow(2, 8 * _v2 - 1);
      _v21(this, _v0, _v1, _v2, _v0 - 1, -_v0);
    }
    let _v4 = _v2 - 1,
      _v5 = 1,
      _v6 = 0;
    for (this[_v1 + _v4] = 255 & _v0; --_v4 >= 0 && (_v5 *= 256);) _v0 < 0 && 0 === _v6 && 0 !== this[_v1 + _v4 + 1] && (_v6 = 1), this[_v1 + _v4] = (_v0 / _v5 | 0) - _v6 & 255;
    return _v1 + _v2;
  }, _v7.prototype.writeInt8 = function (_v0, _v1, _v2) {
    return _v0 *= 1, _v1 >>>= 0, _v2 || _v21(this, _v0, _v1, 1, 127, -128), _v0 < 0 && (_v0 = 255 + _v0 + 1), this[_v1] = 255 & _v0, _v1 + 1;
  }, _v7.prototype.writeInt16LE = function (_v0, _v1, _v2) {
    return _v0 *= 1, _v1 >>>= 0, _v2 || _v21(this, _v0, _v1, 2, 0, 0), this[_v1] = 255 & _v0, this[_v1 + 1] = _v0 >>> 8, _v1 + 2;
  }, _v7.prototype.writeInt16BE = function (_v0, _v1, _v2) {
    return _v0 *= 1, _v1 >>>= 0, _v2 || _v21(this, _v0, _v1, 2, 0, 0), this[_v1] = _v0 >>> 8, this[_v1 + 1] = 255 & _v0, _v1 + 2;
  }, _v7.prototype.writeInt32LE = function (_v0, _v1, _v2) {
    return _v0 *= 1, _v1 >>>= 0, _v2 || _v21(this, _v0, _v1, 4, 0, 0), this[_v1] = 255 & _v0, this[_v1 + 1] = _v0 >>> 8, this[_v1 + 2] = _v0 >>> 16, this[_v1 + 3] = _v0 >>> 24, _v1 + 4;
  }, _v7.prototype.writeInt32BE = function (_v0, _v1, _v2) {
    return _v0 *= 1, _v1 >>>= 0, _v2 || _v21(this, _v0, _v1, 4, 0, 0), _v0 < 0 && (_v0 = 0 + _v0 + 1), this[_v1] = _v0 >>> 24, this[_v1 + 1] = _v0 >>> 16, this[_v1 + 2] = _v0 >>> 8, this[_v1 + 3] = 255 & _v0, _v1 + 4;
  }, _v7.prototype.writeBigInt64LE = _v40(function (_v0, _v1 = 0) {
    return _v22(this, _v0, _v1, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), _v7.prototype.writeBigInt64BE = _v40(function (_v0, _v1 = 0) {
    return _v23(this, _v0, _v1, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), _v7.prototype.writeFloatLE = function (_v0, _v1, _v2) {
    return _v25(this, _v0, _v1, !0, _v2);
  }, _v7.prototype.writeFloatBE = function (_v0, _v1, _v2) {
    return _v25(this, _v0, _v1, !1, _v2);
  }, _v7.prototype.writeDoubleLE = function (_v0, _v1, _v2) {
    return _v26(this, _v0, _v1, !0, _v2);
  }, _v7.prototype.writeDoubleBE = function (_v0, _v1, _v2) {
    return _v26(this, _v0, _v1, !1, _v2);
  }, _v7.prototype.copy = function (_v0, _v1, _v2, _v3) {
    if (!_v37(_v0, Uint8Array)) throw TypeError("argument should be a Buffer");
    if (_v2 || (_v2 = 0), _v3 || 0 === _v3 || (_v3 = this.length), _v1 >= _v0.length && (_v1 = _v0.length), _v1 || (_v1 = 0), _v3 > 0 && _v3 < _v2 && (_v3 = _v2), _v3 === _v2 || 0 === _v0.length || 0 === this.length) return 0;
    if (_v1 < 0) throw RangeError("targetStart out of bounds");
    if (_v2 < 0 || _v2 >= this.length) throw RangeError("Index out of range");
    if (_v3 < 0) throw RangeError("sourceEnd out of bounds");
    _v3 > this.length && (_v3 = this.length), _v0.length - _v1 < _v3 - _v2 && (_v3 = _v0.length - _v1 + _v2);
    let _v4 = _v3 - _v2;
    return this === _v0 && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(_v1, _v2, _v3) : Uint8Array.prototype.set.call(_v0, this.subarray(_v2, _v3), _v1), _v4;
  }, _v7.prototype.fill = function (_v0, _v1, _v2, _v3) {
    let _v4;
    if ("string" == typeof _v0) {
      if ("string" == typeof _v1 ? (_v3 = _v1, _v1 = 0, _v2 = this.length) : "string" == typeof _v2 && (_v3 = _v2, _v2 = this.length), void 0 !== _v3 && "string" != typeof _v3) throw TypeError("encoding must be a string");
      if ("string" == typeof _v3 && !_v7.isEncoding(_v3)) throw TypeError("Unknown encoding: " + _v3);
      if (1 === _v0.length) {
        let _v0 = _v0.charCodeAt(0);
        ("utf8" === _v3 && _v0 < 128 || "latin1" === _v3) && (_v0 = _v0);
      }
    } else "number" == typeof _v0 ? _v0 &= 255 : "boolean" == typeof _v0 && (_v0 = Number(_v0));
    if (_v1 < 0 || this.length < _v1 || this.length < _v2) throw RangeError("Out of range index");
    if (_v2 <= _v1) return this;
    if (_v1 >>>= 0, _v2 = void 0 === _v2 ? this.length : _v2 >>> 0, _v0 || (_v0 = 0), "number" == typeof _v0) for (_v4 = _v1; _v4 < _v2; ++_v4) this[_v4] = _v0;else {
      let _v0 = _v37(_v0, Uint8Array) ? _v0 : _v7.from(_v0, _v3),
        _v1 = _v0.length;
      if (0 === _v1) throw TypeError('The value "' + _v0 + '" is invalid for argument "value"');
      for (_v4 = 0; _v4 < _v2 - _v1; ++_v4) this[_v4 + _v1] = _v0[_v4 % _v1];
    }
    return this;
  };
  let _v27 = {};
  function _v28(_v0, _v1, _v2) {
    function _v3() {
      let _v0 = new _v2(_v1.apply(null, arguments));
      return Object.setPrototypeOf(_v0, _v3.prototype), _v0.code = _v0, _v0.name = `${_v0.name} [${_v0}]`, Error.captureStackTrace && Error.captureStackTrace(_v0, _v3), _v0.stack, delete _v0.name, _v0;
    }
    Object.setPrototypeOf(_v3.prototype, _v2.prototype), Object.setPrototypeOf(_v3, _v2), _v3.prototype.toString = function () {
      return `${this.name} [${_v0}]: ${this.message}`;
    }, _v27[_v0] = _v3;
  }
  function _v29(_v0) {
    let _v1 = "",
      _v2 = _v0.length,
      _v3 = +("-" === _v0[0]);
    for (; _v2 >= _v3 + 4; _v2 -= 3) _v1 = `_${_v0.slice(_v2 - 3, _v2)}${_v1}`;
    return `${_v0.slice(0, _v2)}${_v1}`;
  }
  function _v30(_v0, _v1, _v2, _v3, _v4, _v5) {
    if (_v0 > _v2 || _v0 < _v1) {
      let _v0,
        _v1 = "bigint" == typeof _v1 ? "n" : "";
      throw _v0 = _v5 > 3 ? 0 === _v1 || _v1 === BigInt(0) ? `>= 0${_v1} and < 2${_v1} ** ${(_v5 + 1) * 8}${_v1}` : `>= -(2${_v1} ** ${(_v5 + 1) * 8 - 1}${_v1}) and < 2 ** ${(_v5 + 1) * 8 - 1}${_v1}` : `>= ${_v1}${_v1} and <= ${_v2}${_v1}`, new _v27.ERR_OUT_OF_RANGE("value", _v0, _v0);
    }
    _v31(_v4, "offset"), (void 0 === _v3[_v4] || void 0 === _v3[_v4 + _v5]) && _v32(_v4, _v3.length - (_v5 + 1));
  }
  function _v31(_v0, _v1) {
    if ("number" != typeof _v0) throw new _v27.ERR_INVALID_ARG_TYPE(_v1, "number", _v0);
  }
  function _v32(_v0, _v1, _v2) {
    if (Math.floor(_v0) !== _v0) throw _v31(_v0, _v2), new _v27.ERR_OUT_OF_RANGE(_v2 || "offset", "an integer", _v0);
    if (_v1 < 0) throw new _v27.ERR_BUFFER_OUT_OF_BOUNDS();
    throw new _v27.ERR_OUT_OF_RANGE(_v2 || "offset", `>= ${+!!_v2} and <= ${_v1}`, _v0);
  }
  _v28("ERR_BUFFER_OUT_OF_BOUNDS", function (_v0) {
    return _v0 ? `${_v0} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
  }, RangeError), _v28("ERR_INVALID_ARG_TYPE", function (_v0, _v1) {
    return `The "${_v0}" argument must be of type number. Received type ${typeof _v1}`;
  }, TypeError), _v28("ERR_OUT_OF_RANGE", function (_v0, _v1, _v2) {
    let _v3 = `The value of "${_v0}" is out of range.`,
      _v4 = _v2;
    return Number.isInteger(_v2) && Math.abs(_v2) > 0 ? _v4 = _v29(String(_v2)) : "bigint" == typeof _v2 && (_v4 = String(_v2), (_v2 > BigInt(2) ** BigInt(32) || _v2 < -(BigInt(2) ** BigInt(32))) && (_v4 = _v29(_v4)), _v4 += "n"), _v3 += ` It must be ${_v1}. Received ${_v4}`;
  }, RangeError);
  let _v33 = /[^+/0-9A-Za-z-_]/g;
  function _v34(_v0, _v1) {
    let _v2;
    _v1 = _v1 || 1 / 0;
    let _v3 = _v0.length,
      _v4 = null,
      _v5 = [];
    for (let _v0 = 0; _v0 < _v3; ++_v0) {
      if ((_v2 = _v0.charCodeAt(_v0)) > 0 && _v2 < 0) {
        if (!_v4) {
          if (_v2 > 0 || _v0 + 1 === _v3) {
            (_v1 -= 3) > -1 && _v5.push(239, 191, 189);
            continue;
          }
          _v4 = _v2;
          continue;
        }
        if (_v2 < 0) {
          (_v1 -= 3) > -1 && _v5.push(239, 191, 189), _v4 = _v2;
          continue;
        }
        _v2 = (_v4 - 0 << 10 | _v2 - 0) + 0;
      } else _v4 && (_v1 -= 3) > -1 && _v5.push(239, 191, 189);
      if (_v4 = null, _v2 < 128) {
        if ((_v1 -= 1) < 0) break;
        _v5.push(_v2);
      } else if (_v2 < 0) {
        if ((_v1 -= 2) < 0) break;
        _v5.push(_v2 >> 6 | 192, 63 & _v2 | 128);
      } else if (_v2 < 0) {
        if ((_v1 -= 3) < 0) break;
        _v5.push(_v2 >> 12 | 224, _v2 >> 6 & 63 | 128, 63 & _v2 | 128);
      } else if (_v2 < 0) {
        if ((_v1 -= 4) < 0) break;
        _v5.push(_v2 >> 18 | 240, _v2 >> 12 & 63 | 128, _v2 >> 6 & 63 | 128, 63 & _v2 | 128);
      } else throw Error("Invalid code point");
    }
    return _v5;
  }
  function _v35(_v0) {
    return _v3.toByteArray(function (_v0) {
      if ((_v0 = (_v0 = _v0.split("=")[0]).trim().replace(_v33, "")).length < 2) return "";
      for (; _v0.length % 4 != 0;) _v0 += "=";
      return _v0;
    }(_v0));
  }
  function _v36(_v0, _v1, _v2, _v3) {
    let _v4;
    for (_v4 = 0; _v4 < _v3 && !(_v4 + _v2 >= _v1.length) && !(_v4 >= _v0.length); ++_v4) _v1[_v4 + _v2] = _v0[_v4];
    return _v4;
  }
  function _v37(_v0, _v1) {
    return _v0 instanceof _v1 || null != _v0 && null != _v0.constructor && null != _v0.constructor.name && _v0.constructor.name === _v1.name || _v1 === Uint8Array && _v7.isBuffer(_v0);
  }
  let _v38 = function () {
      let _v0 = "0123456789abcdef",
        _v1 = Array(256);
      for (let _v0 = 0; _v0 < 16; ++_v0) {
        let _v0 = 16 * _v0;
        for (let _v0 = 0; _v0 < 16; ++_v0) _v1[_v0 + _v0] = _v0[_v0] + _v0[_v0];
      }
      return _v1;
    }(),
    _v39 = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, -1, -1, -1, -1, -1, -1, -1, 10, 11, 12, 13, 14, 15, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 10, 11, 12, 13, 14, 15, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
  function _v40(_v0) {
    return "u" < typeof BigInt ? _v41 : _v0;
  }
  function _v41() {
    throw Error("BigInt not supported");
  }
}