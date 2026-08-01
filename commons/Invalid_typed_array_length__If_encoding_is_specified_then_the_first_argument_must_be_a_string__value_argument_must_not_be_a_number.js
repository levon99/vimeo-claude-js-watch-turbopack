{
  "use strict";

  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0);
  function _v6() {
    return _v8.TYPED_ARRAY_SUPPORT ? 0 : 0;
  }
  function _v7(_v0, _v1) {
    if (_v6() < _v1) throw RangeError("Invalid typed array length");
    return _v8.TYPED_ARRAY_SUPPORT ? (_v0 = new Uint8Array(_v1)).__proto__ = _v8.prototype : (null === _v0 && (_v0 = new _v8(_v1)), _v0.length = _v1), _v0;
  }
  function _v8(_v0, _v1, _v2) {
    if (!_v8.TYPED_ARRAY_SUPPORT && !(this instanceof _v8)) return new _v8(_v0, _v1, _v2);
    if ("number" == typeof _v0) {
      if ("string" == typeof _v1) throw Error("If encoding is specified then the first argument must be a string");
      return _v11(this, _v0);
    }
    return _v9(this, _v0, _v1, _v2);
  }
  function _v9(_v0, _v1, _v2, _v3) {
    if ("number" == typeof _v1) throw TypeError('"value" argument must not be a number');
    return "u" > typeof ArrayBuffer && _v1 instanceof ArrayBuffer ? function (_v0, _v1, _v2, _v3) {
      if (_v1.byteLength, _v2 < 0 || _v1.byteLength < _v2) throw RangeError("'offset' is out of bounds");
      if (_v1.byteLength < _v2 + (_v3 || 0)) throw RangeError("'length' is out of bounds");
      return _v1 = void 0 === _v2 && void 0 === _v3 ? new Uint8Array(_v1) : void 0 === _v3 ? new Uint8Array(_v1, _v2) : new Uint8Array(_v1, _v2, _v3), _v8.TYPED_ARRAY_SUPPORT ? (_v0 = _v1).__proto__ = _v8.prototype : _v0 = _v12(_v0, _v1), _v0;
    }(_v0, _v1, _v2, _v3) : "string" == typeof _v1 ? function (_v0, _v1, _v2) {
      if (("string" != typeof _v2 || "" === _v2) && (_v2 = "utf8"), !_v8.isEncoding(_v2)) throw TypeError('"encoding" must be a valid string encoding');
      var _v3 = 0 | _v14(_v1, _v2),
        _v4 = (_v0 = _v7(_v0, _v3)).write(_v1, _v2);
      return _v4 !== _v3 && (_v0 = _v0.slice(0, _v4)), _v0;
    }(_v0, _v1, _v2) : function (_v0, _v1) {
      if (_v8.isBuffer(_v1)) {
        var _v2,
          _v3 = 0 | _v13(_v1.length);
        return 0 === (_v0 = _v7(_v0, _v3)).length || _v1.copy(_v0, 0, 0, _v3), _v0;
      }
      if (_v1) {
        if ("u" > typeof ArrayBuffer && _v1.buffer instanceof ArrayBuffer || "length" in _v1) {
          return "number" != typeof _v1.length || (_v2 = _v1.length) != _v2 ? _v7(_v0, 0) : _v12(_v0, _v1);
        }
        if ("Buffer" === _v1.type && _v5(_v1.data)) return _v12(_v0, _v1.data);
      }
      throw TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
    }(_v0, _v1);
  }
  function _v10(_v0) {
    if ("number" != typeof _v0) throw TypeError('"size" argument must be a number');
    if (_v0 < 0) throw RangeError('"size" argument must not be negative');
  }
  function _v11(_v0, _v1) {
    if (_v10(_v1), _v0 = _v7(_v0, _v1 < 0 ? 0 : 0 | _v13(_v1)), !_v8.TYPED_ARRAY_SUPPORT) for (var _v2 = 0; _v2 < _v1; ++_v2) _v0[_v2] = 0;
    return _v0;
  }
  function _v12(_v0, _v1) {
    var _v2 = _v1.length < 0 ? 0 : 0 | _v13(_v1.length);
    _v0 = _v7(_v0, _v2);
    for (var _v3 = 0; _v3 < _v2; _v3 += 1) _v0[_v3] = 255 & _v1[_v3];
    return _v0;
  }
  function _v13(_v0) {
    if (_v0 >= _v6()) throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + _v6().toString(16) + " bytes");
    return 0 | _v0;
  }
  function _v14(_v0, _v1) {
    if (_v8.isBuffer(_v0)) return _v0.length;
    if ("u" > typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(_v0) || _v0 instanceof ArrayBuffer)) return _v0.byteLength;
    "string" != typeof _v0 && (_v0 = "" + _v0);
    var _v2 = _v0.length;
    if (0 === _v2) return 0;
    for (var _v3 = !1;;) switch (_v1) {
      case "ascii":
      case "latin1":
      case "binary":
        return _v2;
      case "utf8":
      case "utf-8":
      case void 0:
        return _v28(_v0).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return 2 * _v2;
      case "hex":
        return _v2 >>> 1;
      case "base64":
        return _v30(_v0).length;
      default:
        if (_v3) return _v28(_v0).length;
        _v1 = ("" + _v1).toLowerCase(), _v3 = !0;
    }
  }
  function _v15(_v0, _v1, _v2) {
    var _v3,
      _v4,
      _v5,
      _v6 = !1;
    if ((void 0 === _v1 || _v1 < 0) && (_v1 = 0), _v1 > this.length || ((void 0 === _v2 || _v2 > this.length) && (_v2 = this.length), _v2 <= 0 || (_v2 >>>= 0) <= (_v1 >>>= 0))) return "";
    for (_v0 || (_v0 = "utf8");;) switch (_v0) {
      case "hex":
        return function (_v0, _v1, _v2) {
          var _v3,
            _v4 = _v0.length;
          (!_v1 || _v1 < 0) && (_v1 = 0), (!_v2 || _v2 < 0 || _v2 > _v4) && (_v2 = _v4);
          for (var _v5 = "", _v6 = _v1; _v6 < _v2; ++_v6) {
            _v5 += (_v3 = _v0[_v6]) < 16 ? "0" + _v3.toString(16) : _v3.toString(16);
          }
          return _v5;
        }(this, _v1, _v2);
      case "utf8":
      case "utf-8":
        return _v19(this, _v1, _v2);
      case "ascii":
        return function (_v0, _v1, _v2) {
          var _v3 = "";
          _v2 = Math.min(_v0.length, _v2);
          for (var _v4 = _v1; _v4 < _v2; ++_v4) _v3 += String.fromCharCode(127 & _v0[_v4]);
          return _v3;
        }(this, _v1, _v2);
      case "latin1":
      case "binary":
        return function (_v0, _v1, _v2) {
          var _v3 = "";
          _v2 = Math.min(_v0.length, _v2);
          for (var _v4 = _v1; _v4 < _v2; ++_v4) _v3 += String.fromCharCode(_v0[_v4]);
          return _v3;
        }(this, _v1, _v2);
      case "base64":
        return _v3 = this, _v4 = _v1, _v5 = _v2, 0 === _v4 && _v5 === _v3.length ? _v3.fromByteArray(_v3) : _v3.fromByteArray(_v3.slice(_v4, _v5));
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return function (_v0, _v1, _v2) {
          for (var _v3 = _v0.slice(_v1, _v2), _v4 = "", _v5 = 0; _v5 < _v3.length; _v5 += 2) _v4 += String.fromCharCode(_v3[_v5] + 256 * _v3[_v5 + 1]);
          return _v4;
        }(this, _v1, _v2);
      default:
        if (_v6) throw TypeError("Unknown encoding: " + _v0);
        _v0 = (_v0 + "").toLowerCase(), _v6 = !0;
    }
  }
  function _v16(_v0, _v1, _v2) {
    var _v3 = _v0[_v1];
    _v0[_v1] = _v0[_v2], _v0[_v2] = _v3;
  }
  function _v17(_v0, _v1, _v2, _v3, _v4) {
    if (0 === _v0.length) return -1;
    if ("string" == typeof _v2 ? (_v3 = _v2, _v2 = 0) : _v2 > 0 ? _v2 = 0 : _v2 < 0 && (_v2 = 0), isNaN(_v2 *= 1) && (_v2 = _v4 ? 0 : _v0.length - 1), _v2 < 0 && (_v2 = _v0.length + _v2), _v2 >= _v0.length) {
      if (_v4) return -1;else _v2 = _v0.length - 1;
    } else if (_v2 < 0) if (!_v4) return -1;else _v2 = 0;
    if ("string" == typeof _v1 && (_v1 = _v8.from(_v1, _v3)), _v8.isBuffer(_v1)) return 0 === _v1.length ? -1 : _v18(_v0, _v1, _v2, _v3, _v4);
    if ("number" == typeof _v1) {
      if (_v1 &= 255, _v8.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf) if (_v4) return Uint8Array.prototype.indexOf.call(_v0, _v1, _v2);else return Uint8Array.prototype.lastIndexOf.call(_v0, _v1, _v2);
      return _v18(_v0, [_v1], _v2, _v3, _v4);
    }
    throw TypeError("val must be string, number or Buffer");
  }
  function _v18(_v0, _v1, _v2, _v3, _v4) {
    var _v5,
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
      var _v10 = -1;
      for (_v5 = _v2; _v5 < _v7; _v5++) if (_v9(_v0, _v5) === _v9(_v1, -1 === _v10 ? 0 : _v5 - _v10)) {
        if (-1 === _v10 && (_v10 = _v5), _v5 - _v10 + 1 === _v8) return _v10 * _v6;
      } else -1 !== _v10 && (_v5 -= _v5 - _v10), _v10 = -1;
    } else for (_v2 + _v8 > _v7 && (_v2 = _v7 - _v8), _v5 = _v2; _v5 >= 0; _v5--) {
      for (var _v11 = !0, _v12 = 0; _v12 < _v8; _v12++) if (_v9(_v0, _v5 + _v12) !== _v9(_v1, _v12)) {
        _v11 = !1;
        break;
      }
      if (_v11) return _v5;
    }
    return -1;
  }
  _v2.Buffer = _v8, _v2.SlowBuffer = function (_v0) {
    return +_v0 != _v0 && (_v0 = 0), _v8.alloc(+_v0);
  }, _v2.INSPECT_MAX_BYTES = 50, _v8.TYPED_ARRAY_SUPPORT = void 0 !== _v0.g.TYPED_ARRAY_SUPPORT ? _v0.g.TYPED_ARRAY_SUPPORT : function () {
    try {
      var _v0 = new Uint8Array(1);
      return _v0.__proto__ = {
        __proto__: Uint8Array.prototype,
        foo: function () {
          return 42;
        }
      }, 42 === _v0.foo() && "function" == typeof _v0.subarray && 0 === _v0.subarray(1, 1).byteLength;
    } catch (_v0) {
      return !1;
    }
  }(), _v2.kMaxLength = _v6(), _v8.poolSize = 0, _v8._augment = function (_v0) {
    return _v0.__proto__ = _v8.prototype, _v0;
  }, _v8.from = function (_v0, _v1, _v2) {
    return _v9(null, _v0, _v1, _v2);
  }, _v8.TYPED_ARRAY_SUPPORT && (_v8.prototype.__proto__ = Uint8Array.prototype, _v8.__proto__ = Uint8Array, "u" > typeof Symbol && Symbol.species && _v8[Symbol.species] === _v8 && Object.defineProperty(_v8, Symbol.species, {
    value: null,
    configurable: !0
  })), _v8.alloc = function (_v0, _v1, _v2) {
    return (_v10(_v0), _v0 <= 0) ? _v7(null, _v0) : void 0 !== _v1 ? "string" == typeof _v2 ? _v7(null, _v0).fill(_v1, _v2) : _v7(null, _v0).fill(_v1) : _v7(null, _v0);
  }, _v8.allocUnsafe = function (_v0) {
    return _v11(null, _v0);
  }, _v8.allocUnsafeSlow = function (_v0) {
    return _v11(null, _v0);
  }, _v8.isBuffer = function (_v0) {
    return !!(null != _v0 && _v0._isBuffer);
  }, _v8.compare = function (_v0, _v1) {
    if (!_v8.isBuffer(_v0) || !_v8.isBuffer(_v1)) throw TypeError("Arguments must be Buffers");
    if (_v0 === _v1) return 0;
    for (var _v2 = _v0.length, _v3 = _v1.length, _v4 = 0, _v5 = Math.min(_v2, _v3); _v4 < _v5; ++_v4) if (_v0[_v4] !== _v1[_v4]) {
      _v2 = _v0[_v4], _v3 = _v1[_v4];
      break;
    }
    return _v2 < _v3 ? -1 : +(_v3 < _v2);
  }, _v8.isEncoding = function (_v0) {
    switch (String(_v0).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }, _v8.concat = function (_v0, _v1) {
    if (!_v5(_v0)) throw TypeError('"list" argument must be an Array of Buffers');
    if (0 === _v0.length) return _v8.alloc(0);
    if (void 0 === _v1) for (_v2 = 0, _v1 = 0; _v2 < _v0.length; ++_v2) _v1 += _v0[_v2].length;
    var _v2,
      _v3 = _v8.allocUnsafe(_v1),
      _v4 = 0;
    for (_v2 = 0; _v2 < _v0.length; ++_v2) {
      var _v5 = _v0[_v2];
      if (!_v8.isBuffer(_v5)) throw TypeError('"list" argument must be an Array of Buffers');
      _v5.copy(_v3, _v4), _v4 += _v5.length;
    }
    return _v3;
  }, _v8.byteLength = _v14, _v8.prototype._isBuffer = !0, _v8.prototype.swap16 = function () {
    var _v0 = this.length;
    if (_v0 % 2 != 0) throw RangeError("Buffer size must be a multiple of 16-bits");
    for (var _v1 = 0; _v1 < _v0; _v1 += 2) _v16(this, _v1, _v1 + 1);
    return this;
  }, _v8.prototype.swap32 = function () {
    var _v0 = this.length;
    if (_v0 % 4 != 0) throw RangeError("Buffer size must be a multiple of 32-bits");
    for (var _v1 = 0; _v1 < _v0; _v1 += 4) _v16(this, _v1, _v1 + 3), _v16(this, _v1 + 1, _v1 + 2);
    return this;
  }, _v8.prototype.swap64 = function () {
    var _v0 = this.length;
    if (_v0 % 8 != 0) throw RangeError("Buffer size must be a multiple of 64-bits");
    for (var _v1 = 0; _v1 < _v0; _v1 += 8) _v16(this, _v1, _v1 + 7), _v16(this, _v1 + 1, _v1 + 6), _v16(this, _v1 + 2, _v1 + 5), _v16(this, _v1 + 3, _v1 + 4);
    return this;
  }, _v8.prototype.toString = function () {
    var _v0 = 0 | this.length;
    return 0 === _v0 ? "" : 0 == arguments.length ? _v19(this, 0, _v0) : _v15.apply(this, arguments);
  }, _v8.prototype.equals = function (_v0) {
    if (!_v8.isBuffer(_v0)) throw TypeError("Argument must be a Buffer");
    return this === _v0 || 0 === _v8.compare(this, _v0);
  }, _v8.prototype.inspect = function () {
    var _v0 = "",
      _v1 = _v2.INSPECT_MAX_BYTES;
    return this.length > 0 && (_v0 = this.toString("hex", 0, _v1).match(/.{2}/g).join(" "), this.length > _v1 && (_v0 += " ... ")), "<Buffer " + _v0 + ">";
  }, _v8.prototype.compare = function (_v0, _v1, _v2, _v3, _v4) {
    if (!_v8.isBuffer(_v0)) throw TypeError("Argument must be a Buffer");
    if (void 0 === _v1 && (_v1 = 0), void 0 === _v2 && (_v2 = _v0 ? _v0.length : 0), void 0 === _v3 && (_v3 = 0), void 0 === _v4 && (_v4 = this.length), _v1 < 0 || _v2 > _v0.length || _v3 < 0 || _v4 > this.length) throw RangeError("out of range index");
    if (_v3 >= _v4 && _v1 >= _v2) return 0;
    if (_v3 >= _v4) return -1;
    if (_v1 >= _v2) return 1;
    if (_v1 >>>= 0, _v2 >>>= 0, _v3 >>>= 0, _v4 >>>= 0, this === _v0) return 0;
    for (var _v5 = _v4 - _v3, _v6 = _v2 - _v1, _v7 = Math.min(_v5, _v6), _v8 = this.slice(_v3, _v4), _v9 = _v0.slice(_v1, _v2), _v10 = 0; _v10 < _v7; ++_v10) if (_v8[_v10] !== _v9[_v10]) {
      _v5 = _v8[_v10], _v6 = _v9[_v10];
      break;
    }
    return _v5 < _v6 ? -1 : +(_v6 < _v5);
  }, _v8.prototype.includes = function (_v0, _v1, _v2) {
    return -1 !== this.indexOf(_v0, _v1, _v2);
  }, _v8.prototype.indexOf = function (_v0, _v1, _v2) {
    return _v17(this, _v0, _v1, _v2, !0);
  }, _v8.prototype.lastIndexOf = function (_v0, _v1, _v2) {
    return _v17(this, _v0, _v1, _v2, !1);
  };
  function _v19(_v0, _v1, _v2) {
    _v2 = Math.min(_v0.length, _v2);
    for (var _v3 = [], _v4 = _v1; _v4 < _v2;) {
      var _v5,
        _v6,
        _v7,
        _v8,
        _v9 = _v0[_v4],
        _v10 = null,
        _v11 = _v9 > 239 ? 4 : _v9 > 223 ? 3 : _v9 > 191 ? 2 : 1;
      if (_v4 + _v11 <= _v2) switch (_v11) {
        case 1:
          _v9 < 128 && (_v10 = _v9);
          break;
        case 2:
          (192 & (_v5 = _v0[_v4 + 1])) == 128 && (_v8 = (31 & _v9) << 6 | 63 & _v5) > 127 && (_v10 = _v8);
          break;
        case 3:
          _v5 = _v0[_v4 + 1], _v6 = _v0[_v4 + 2], (192 & _v5) == 128 && (192 & _v6) == 128 && (_v8 = (15 & _v9) << 12 | (63 & _v5) << 6 | 63 & _v6) > 0 && (_v8 < 0 || _v8 > 0) && (_v10 = _v8);
          break;
        case 4:
          _v5 = _v0[_v4 + 1], _v6 = _v0[_v4 + 2], _v7 = _v0[_v4 + 3], (192 & _v5) == 128 && (192 & _v6) == 128 && (192 & _v7) == 128 && (_v8 = (15 & _v9) << 18 | (63 & _v5) << 12 | (63 & _v6) << 6 | 63 & _v7) > 0 && _v8 < 0 && (_v10 = _v8);
      }
      null === _v10 ? (_v10 = 0, _v11 = 1) : _v10 > 0 && (_v10 -= 0, _v3.push(_v10 >>> 10 & 0 | 0), _v10 = 0 | 0 & _v10), _v3.push(_v10), _v4 += _v11;
    }
    var _v12 = _v3,
      _v13 = _v12.length;
    if (_v13 <= 0) return String.fromCharCode.apply(String, _v12);
    for (var _v14 = "", _v15 = 0; _v15 < _v13;) _v14 += String.fromCharCode.apply(String, _v12.slice(_v15, _v15 += 0));
    return _v14;
  }
  function _v20(_v0, _v1, _v2) {
    if (_v0 % 1 != 0 || _v0 < 0) throw RangeError("offset is not uint");
    if (_v0 + _v1 > _v2) throw RangeError("Trying to access beyond buffer length");
  }
  function _v21(_v0, _v1, _v2, _v3, _v4, _v5) {
    if (!_v8.isBuffer(_v0)) throw TypeError('"buffer" argument must be a Buffer instance');
    if (_v1 > _v4 || _v1 < _v5) throw RangeError('"value" argument is out of bounds');
    if (_v2 + _v3 > _v0.length) throw RangeError("Index out of range");
  }
  function _v22(_v0, _v1, _v2, _v3) {
    _v1 < 0 && (_v1 = 0 + _v1 + 1);
    for (var _v4 = 0, _v5 = Math.min(_v0.length - _v2, 2); _v4 < _v5; ++_v4) _v0[_v2 + _v4] = (_v1 & 255 << 8 * (_v3 ? _v4 : 1 - _v4)) >>> (_v3 ? _v4 : 1 - _v4) * 8;
  }
  function _v23(_v0, _v1, _v2, _v3) {
    _v1 < 0 && (_v1 = 0 + _v1 + 1);
    for (var _v4 = 0, _v5 = Math.min(_v0.length - _v2, 4); _v4 < _v5; ++_v4) _v0[_v2 + _v4] = _v1 >>> (_v3 ? _v4 : 3 - _v4) * 8 & 255;
  }
  function _v24(_v0, _v1, _v2, _v3, _v4, _v5) {
    if (_v2 + _v3 > _v0.length || _v2 < 0) throw RangeError("Index out of range");
  }
  function _v25(_v0, _v1, _v2, _v3, _v4) {
    return _v4 || _v24(_v0, _v1, _v2, 4, 0, 0), _v4.write(_v0, _v1, _v2, _v3, 23, 4), _v2 + 4;
  }
  function _v26(_v0, _v1, _v2, _v3, _v4) {
    return _v4 || _v24(_v0, _v1, _v2, 8, 0, 0), _v4.write(_v0, _v1, _v2, _v3, 52, 8), _v2 + 8;
  }
  _v8.prototype.write = function (_v0, _v1, _v2, _v3) {
    if (void 0 === _v1) _v3 = "utf8", _v2 = this.length, _v1 = 0;else if (void 0 === _v2 && "string" == typeof _v1) _v3 = _v1, _v2 = this.length, _v1 = 0;else if (isFinite(_v1)) _v1 |= 0, isFinite(_v2) ? (_v2 |= 0, void 0 === _v3 && (_v3 = "utf8")) : (_v3 = _v2, _v2 = void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    var _v4,
      _v5,
      _v6,
      _v7,
      _v8,
      _v9,
      _v10,
      _v11,
      _v12 = this.length - _v1;
    if ((void 0 === _v2 || _v2 > _v12) && (_v2 = _v12), _v0.length > 0 && (_v2 < 0 || _v1 < 0) || _v1 > this.length) throw RangeError("Attempt to write outside buffer bounds");
    _v3 || (_v3 = "utf8");
    for (var _v13 = !1;;) switch (_v3) {
      case "hex":
        return function (_v0, _v1, _v2, _v3) {
          _v2 = Number(_v2) || 0;
          var _v4 = _v0.length - _v2;
          _v3 ? (_v3 = Number(_v3)) > _v4 && (_v3 = _v4) : _v3 = _v4;
          var _v5 = _v1.length;
          if (_v5 % 2 != 0) throw TypeError("Invalid hex string");
          _v3 > _v5 / 2 && (_v3 = _v5 / 2);
          for (var _v6 = 0; _v6 < _v3; ++_v6) {
            var _v7 = parseInt(_v1.substr(2 * _v6, 2), 16);
            if (isNaN(_v7)) break;
            _v0[_v2 + _v6] = _v7;
          }
          return _v6;
        }(this, _v0, _v1, _v2);
      case "utf8":
      case "utf-8":
        return _v4 = _v1, _v5 = _v2, _v31(_v28(_v0, this.length - _v4), this, _v4, _v5);
      case "ascii":
        return _v6 = _v1, _v7 = _v2, _v31(_v29(_v0), this, _v6, _v7);
      case "latin1":
      case "binary":
        return function (_v0, _v1, _v2, _v3) {
          return _v31(_v29(_v1), _v0, _v2, _v3);
        }(this, _v0, _v1, _v2);
      case "base64":
        return _v8 = _v1, _v9 = _v2, _v31(_v30(_v0), this, _v8, _v9);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return _v10 = _v1, _v11 = _v2, _v31(function (_v0, _v1) {
          for (var _v2, _v3, _v4 = [], _v5 = 0; _v5 < _v0.length && !((_v1 -= 2) < 0); ++_v5) _v3 = (_v2 = _v0.charCodeAt(_v5)) >> 8, _v4.push(_v2 % 256), _v4.push(_v3);
          return _v4;
        }(_v0, this.length - _v10), this, _v10, _v11);
      default:
        if (_v13) throw TypeError("Unknown encoding: " + _v3);
        _v3 = ("" + _v3).toLowerCase(), _v13 = !0;
    }
  }, _v8.prototype.toJSON = function () {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  }, _v8.prototype.slice = function (_v0, _v1) {
    var _v2,
      _v3 = this.length;
    if (_v0 = ~~_v0, _v1 = void 0 === _v1 ? _v3 : ~~_v1, _v0 < 0 ? (_v0 += _v3) < 0 && (_v0 = 0) : _v0 > _v3 && (_v0 = _v3), _v1 < 0 ? (_v1 += _v3) < 0 && (_v1 = 0) : _v1 > _v3 && (_v1 = _v3), _v1 < _v0 && (_v1 = _v0), _v8.TYPED_ARRAY_SUPPORT) (_v2 = this.subarray(_v0, _v1)).__proto__ = _v8.prototype;else {
      var _v4 = _v1 - _v0;
      _v2 = new _v8(_v4, void 0);
      for (var _v5 = 0; _v5 < _v4; ++_v5) _v2[_v5] = this[_v5 + _v0];
    }
    return _v2;
  }, _v8.prototype.readUIntLE = function (_v0, _v1, _v2) {
    _v0 |= 0, _v1 |= 0, _v2 || _v20(_v0, _v1, this.length);
    for (var _v3 = this[_v0], _v4 = 1, _v5 = 0; ++_v5 < _v1 && (_v4 *= 256);) _v3 += this[_v0 + _v5] * _v4;
    return _v3;
  }, _v8.prototype.readUIntBE = function (_v0, _v1, _v2) {
    _v0 |= 0, _v1 |= 0, _v2 || _v20(_v0, _v1, this.length);
    for (var _v3 = this[_v0 + --_v1], _v4 = 1; _v1 > 0 && (_v4 *= 256);) _v3 += this[_v0 + --_v1] * _v4;
    return _v3;
  }, _v8.prototype.readUInt8 = function (_v0, _v1) {
    return _v1 || _v20(_v0, 1, this.length), this[_v0];
  }, _v8.prototype.readUInt16LE = function (_v0, _v1) {
    return _v1 || _v20(_v0, 2, this.length), this[_v0] | this[_v0 + 1] << 8;
  }, _v8.prototype.readUInt16BE = function (_v0, _v1) {
    return _v1 || _v20(_v0, 2, this.length), this[_v0] << 8 | this[_v0 + 1];
  }, _v8.prototype.readUInt32LE = function (_v0, _v1) {
    return _v1 || _v20(_v0, 4, this.length), (this[_v0] | this[_v0 + 1] << 8 | this[_v0 + 2] << 16) + 0 * this[_v0 + 3];
  }, _v8.prototype.readUInt32BE = function (_v0, _v1) {
    return _v1 || _v20(_v0, 4, this.length), 0 * this[_v0] + (this[_v0 + 1] << 16 | this[_v0 + 2] << 8 | this[_v0 + 3]);
  }, _v8.prototype.readIntLE = function (_v0, _v1, _v2) {
    _v0 |= 0, _v1 |= 0, _v2 || _v20(_v0, _v1, this.length);
    for (var _v3 = this[_v0], _v4 = 1, _v5 = 0; ++_v5 < _v1 && (_v4 *= 256);) _v3 += this[_v0 + _v5] * _v4;
    return _v3 >= (_v4 *= 128) && (_v3 -= Math.pow(2, 8 * _v1)), _v3;
  }, _v8.prototype.readIntBE = function (_v0, _v1, _v2) {
    _v0 |= 0, _v1 |= 0, _v2 || _v20(_v0, _v1, this.length);
    for (var _v3 = _v1, _v4 = 1, _v5 = this[_v0 + --_v3]; _v3 > 0 && (_v4 *= 256);) _v5 += this[_v0 + --_v3] * _v4;
    return _v5 >= (_v4 *= 128) && (_v5 -= Math.pow(2, 8 * _v1)), _v5;
  }, _v8.prototype.readInt8 = function (_v0, _v1) {
    return (_v1 || _v20(_v0, 1, this.length), 128 & this[_v0]) ? -((255 - this[_v0] + 1) * 1) : this[_v0];
  }, _v8.prototype.readInt16LE = function (_v0, _v1) {
    _v1 || _v20(_v0, 2, this.length);
    var _v2 = this[_v0] | this[_v0 + 1] << 8;
    return 0 & _v2 ? 0 | _v2 : _v2;
  }, _v8.prototype.readInt16BE = function (_v0, _v1) {
    _v1 || _v20(_v0, 2, this.length);
    var _v2 = this[_v0 + 1] | this[_v0] << 8;
    return 0 & _v2 ? 0 | _v2 : _v2;
  }, _v8.prototype.readInt32LE = function (_v0, _v1) {
    return _v1 || _v20(_v0, 4, this.length), this[_v0] | this[_v0 + 1] << 8 | this[_v0 + 2] << 16 | this[_v0 + 3] << 24;
  }, _v8.prototype.readInt32BE = function (_v0, _v1) {
    return _v1 || _v20(_v0, 4, this.length), this[_v0] << 24 | this[_v0 + 1] << 16 | this[_v0 + 2] << 8 | this[_v0 + 3];
  }, _v8.prototype.readFloatLE = function (_v0, _v1) {
    return _v1 || _v20(_v0, 4, this.length), _v4.read(this, _v0, !0, 23, 4);
  }, _v8.prototype.readFloatBE = function (_v0, _v1) {
    return _v1 || _v20(_v0, 4, this.length), _v4.read(this, _v0, !1, 23, 4);
  }, _v8.prototype.readDoubleLE = function (_v0, _v1) {
    return _v1 || _v20(_v0, 8, this.length), _v4.read(this, _v0, !0, 52, 8);
  }, _v8.prototype.readDoubleBE = function (_v0, _v1) {
    return _v1 || _v20(_v0, 8, this.length), _v4.read(this, _v0, !1, 52, 8);
  }, _v8.prototype.writeUIntLE = function (_v0, _v1, _v2, _v3) {
    if (_v0 *= 1, _v1 |= 0, _v2 |= 0, !_v3) {
      var _v4 = Math.pow(2, 8 * _v2) - 1;
      _v21(this, _v0, _v1, _v2, _v4, 0);
    }
    var _v5 = 1,
      _v6 = 0;
    for (this[_v1] = 255 & _v0; ++_v6 < _v2 && (_v5 *= 256);) this[_v1 + _v6] = _v0 / _v5 & 255;
    return _v1 + _v2;
  }, _v8.prototype.writeUIntBE = function (_v0, _v1, _v2, _v3) {
    if (_v0 *= 1, _v1 |= 0, _v2 |= 0, !_v3) {
      var _v4 = Math.pow(2, 8 * _v2) - 1;
      _v21(this, _v0, _v1, _v2, _v4, 0);
    }
    var _v5 = _v2 - 1,
      _v6 = 1;
    for (this[_v1 + _v5] = 255 & _v0; --_v5 >= 0 && (_v6 *= 256);) this[_v1 + _v5] = _v0 / _v6 & 255;
    return _v1 + _v2;
  }, _v8.prototype.writeUInt8 = function (_v0, _v1, _v2) {
    return _v0 *= 1, _v1 |= 0, _v2 || _v21(this, _v0, _v1, 1, 255, 0), _v8.TYPED_ARRAY_SUPPORT || (_v0 = Math.floor(_v0)), this[_v1] = 255 & _v0, _v1 + 1;
  }, _v8.prototype.writeUInt16LE = function (_v0, _v1, _v2) {
    return _v0 *= 1, _v1 |= 0, _v2 || _v21(this, _v0, _v1, 2, 0, 0), _v8.TYPED_ARRAY_SUPPORT ? (this[_v1] = 255 & _v0, this[_v1 + 1] = _v0 >>> 8) : _v22(this, _v0, _v1, !0), _v1 + 2;
  }, _v8.prototype.writeUInt16BE = function (_v0, _v1, _v2) {
    return _v0 *= 1, _v1 |= 0, _v2 || _v21(this, _v0, _v1, 2, 0, 0), _v8.TYPED_ARRAY_SUPPORT ? (this[_v1] = _v0 >>> 8, this[_v1 + 1] = 255 & _v0) : _v22(this, _v0, _v1, !1), _v1 + 2;
  }, _v8.prototype.writeUInt32LE = function (_v0, _v1, _v2) {
    return _v0 *= 1, _v1 |= 0, _v2 || _v21(this, _v0, _v1, 4, 0, 0), _v8.TYPED_ARRAY_SUPPORT ? (this[_v1 + 3] = _v0 >>> 24, this[_v1 + 2] = _v0 >>> 16, this[_v1 + 1] = _v0 >>> 8, this[_v1] = 255 & _v0) : _v23(this, _v0, _v1, !0), _v1 + 4;
  }, _v8.prototype.writeUInt32BE = function (_v0, _v1, _v2) {
    return _v0 *= 1, _v1 |= 0, _v2 || _v21(this, _v0, _v1, 4, 0, 0), _v8.TYPED_ARRAY_SUPPORT ? (this[_v1] = _v0 >>> 24, this[_v1 + 1] = _v0 >>> 16, this[_v1 + 2] = _v0 >>> 8, this[_v1 + 3] = 255 & _v0) : _v23(this, _v0, _v1, !1), _v1 + 4;
  }, _v8.prototype.writeIntLE = function (_v0, _v1, _v2, _v3) {
    if (_v0 *= 1, _v1 |= 0, !_v3) {
      var _v4 = Math.pow(2, 8 * _v2 - 1);
      _v21(this, _v0, _v1, _v2, _v4 - 1, -_v4);
    }
    var _v5 = 0,
      _v6 = 1,
      _v7 = 0;
    for (this[_v1] = 255 & _v0; ++_v5 < _v2 && (_v6 *= 256);) _v0 < 0 && 0 === _v7 && 0 !== this[_v1 + _v5 - 1] && (_v7 = 1), this[_v1 + _v5] = (_v0 / _v6 | 0) - _v7 & 255;
    return _v1 + _v2;
  }, _v8.prototype.writeIntBE = function (_v0, _v1, _v2, _v3) {
    if (_v0 *= 1, _v1 |= 0, !_v3) {
      var _v4 = Math.pow(2, 8 * _v2 - 1);
      _v21(this, _v0, _v1, _v2, _v4 - 1, -_v4);
    }
    var _v5 = _v2 - 1,
      _v6 = 1,
      _v7 = 0;
    for (this[_v1 + _v5] = 255 & _v0; --_v5 >= 0 && (_v6 *= 256);) _v0 < 0 && 0 === _v7 && 0 !== this[_v1 + _v5 + 1] && (_v7 = 1), this[_v1 + _v5] = (_v0 / _v6 | 0) - _v7 & 255;
    return _v1 + _v2;
  }, _v8.prototype.writeInt8 = function (_v0, _v1, _v2) {
    return _v0 *= 1, _v1 |= 0, _v2 || _v21(this, _v0, _v1, 1, 127, -128), _v8.TYPED_ARRAY_SUPPORT || (_v0 = Math.floor(_v0)), _v0 < 0 && (_v0 = 255 + _v0 + 1), this[_v1] = 255 & _v0, _v1 + 1;
  }, _v8.prototype.writeInt16LE = function (_v0, _v1, _v2) {
    return _v0 *= 1, _v1 |= 0, _v2 || _v21(this, _v0, _v1, 2, 0, 0), _v8.TYPED_ARRAY_SUPPORT ? (this[_v1] = 255 & _v0, this[_v1 + 1] = _v0 >>> 8) : _v22(this, _v0, _v1, !0), _v1 + 2;
  }, _v8.prototype.writeInt16BE = function (_v0, _v1, _v2) {
    return _v0 *= 1, _v1 |= 0, _v2 || _v21(this, _v0, _v1, 2, 0, 0), _v8.TYPED_ARRAY_SUPPORT ? (this[_v1] = _v0 >>> 8, this[_v1 + 1] = 255 & _v0) : _v22(this, _v0, _v1, !1), _v1 + 2;
  }, _v8.prototype.writeInt32LE = function (_v0, _v1, _v2) {
    return _v0 *= 1, _v1 |= 0, _v2 || _v21(this, _v0, _v1, 4, 0, 0), _v8.TYPED_ARRAY_SUPPORT ? (this[_v1] = 255 & _v0, this[_v1 + 1] = _v0 >>> 8, this[_v1 + 2] = _v0 >>> 16, this[_v1 + 3] = _v0 >>> 24) : _v23(this, _v0, _v1, !0), _v1 + 4;
  }, _v8.prototype.writeInt32BE = function (_v0, _v1, _v2) {
    return _v0 *= 1, _v1 |= 0, _v2 || _v21(this, _v0, _v1, 4, 0, 0), _v0 < 0 && (_v0 = 0 + _v0 + 1), _v8.TYPED_ARRAY_SUPPORT ? (this[_v1] = _v0 >>> 24, this[_v1 + 1] = _v0 >>> 16, this[_v1 + 2] = _v0 >>> 8, this[_v1 + 3] = 255 & _v0) : _v23(this, _v0, _v1, !1), _v1 + 4;
  }, _v8.prototype.writeFloatLE = function (_v0, _v1, _v2) {
    return _v25(this, _v0, _v1, !0, _v2);
  }, _v8.prototype.writeFloatBE = function (_v0, _v1, _v2) {
    return _v25(this, _v0, _v1, !1, _v2);
  }, _v8.prototype.writeDoubleLE = function (_v0, _v1, _v2) {
    return _v26(this, _v0, _v1, !0, _v2);
  }, _v8.prototype.writeDoubleBE = function (_v0, _v1, _v2) {
    return _v26(this, _v0, _v1, !1, _v2);
  }, _v8.prototype.copy = function (_v0, _v1, _v2, _v3) {
    if (_v2 || (_v2 = 0), _v3 || 0 === _v3 || (_v3 = this.length), _v1 >= _v0.length && (_v1 = _v0.length), _v1 || (_v1 = 0), _v3 > 0 && _v3 < _v2 && (_v3 = _v2), _v3 === _v2 || 0 === _v0.length || 0 === this.length) return 0;
    if (_v1 < 0) throw RangeError("targetStart out of bounds");
    if (_v2 < 0 || _v2 >= this.length) throw RangeError("sourceStart out of bounds");
    if (_v3 < 0) throw RangeError("sourceEnd out of bounds");
    _v3 > this.length && (_v3 = this.length), _v0.length - _v1 < _v3 - _v2 && (_v3 = _v0.length - _v1 + _v2);
    var _v4,
      _v5 = _v3 - _v2;
    if (this === _v0 && _v2 < _v1 && _v1 < _v3) for (_v4 = _v5 - 1; _v4 >= 0; --_v4) _v0[_v4 + _v1] = this[_v4 + _v2];else if (_v5 < 0 || !_v8.TYPED_ARRAY_SUPPORT) for (_v4 = 0; _v4 < _v5; ++_v4) _v0[_v4 + _v1] = this[_v4 + _v2];else Uint8Array.prototype.set.call(_v0, this.subarray(_v2, _v2 + _v5), _v1);
    return _v5;
  }, _v8.prototype.fill = function (_v0, _v1, _v2, _v3) {
    if ("string" == typeof _v0) {
      if ("string" == typeof _v1 ? (_v3 = _v1, _v1 = 0, _v2 = this.length) : "string" == typeof _v2 && (_v3 = _v2, _v2 = this.length), 1 === _v0.length) {
        var _v4,
          _v5 = _v0.charCodeAt(0);
        _v5 < 256 && (_v0 = _v5);
      }
      if (void 0 !== _v3 && "string" != typeof _v3) throw TypeError("encoding must be a string");
      if ("string" == typeof _v3 && !_v8.isEncoding(_v3)) throw TypeError("Unknown encoding: " + _v3);
    } else "number" == typeof _v0 && (_v0 &= 255);
    if (_v1 < 0 || this.length < _v1 || this.length < _v2) throw RangeError("Out of range index");
    if (_v2 <= _v1) return this;
    if (_v1 >>>= 0, _v2 = void 0 === _v2 ? this.length : _v2 >>> 0, _v0 || (_v0 = 0), "number" == typeof _v0) for (_v4 = _v1; _v4 < _v2; ++_v4) this[_v4] = _v0;else {
      var _v6 = _v8.isBuffer(_v0) ? _v0 : _v28(new _v8(_v0, _v3).toString()),
        _v7 = _v6.length;
      for (_v4 = 0; _v4 < _v2 - _v1; ++_v4) this[_v4 + _v1] = _v6[_v4 % _v7];
    }
    return this;
  };
  var _v27 = /[^+\/0-9A-Za-z-_]/g;
  function _v28(_v0, _v1) {
    _v1 = _v1 || 1 / 0;
    for (var _v2, _v3 = _v0.length, _v4 = null, _v5 = [], _v6 = 0; _v6 < _v3; ++_v6) {
      if ((_v2 = _v0.charCodeAt(_v6)) > 0 && _v2 < 0) {
        if (!_v4) {
          if (_v2 > 0 || _v6 + 1 === _v3) {
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
  function _v29(_v0) {
    for (var _v1 = [], _v2 = 0; _v2 < _v0.length; ++_v2) _v1.push(255 & _v0.charCodeAt(_v2));
    return _v1;
  }
  function _v30(_v0) {
    return _v3.toByteArray(function (_v0) {
      var _v1;
      if ((_v0 = ((_v1 = _v0).trim ? _v1.trim() : _v1.replace(/^\s+|\s+$/g, "")).replace(_v27, "")).length < 2) return "";
      for (; _v0.length % 4 != 0;) _v0 += "=";
      return _v0;
    }(_v0));
  }
  function _v31(_v0, _v1, _v2, _v3) {
    for (var _v4 = 0; _v4 < _v3 && !(_v4 + _v2 >= _v1.length) && !(_v4 >= _v0.length); ++_v4) _v1[_v4 + _v2] = _v0[_v4];
    return _v4;
  }
}