{
  var _v3,
    _v4,
    _v5 = (_v3 = new Date(), _v4 = 4, {
      setLogLevel: function (_v0) {
        _v0 == this.debug ? _v4 = 1 : _v0 == this.info ? _v4 = 2 : _v0 == this.warn ? _v4 = 3 : (this.error, _v4 = 4);
      },
      debug: function (_v0, _v1) {
        void 0 === console.debug && (console.debug = console.log), 1 >= _v4 && console.debug("[" + _v5.getDurationString(new Date() - _v3, 0) + "]", "[" + _v0 + "]", _v1);
      },
      log: function (_v0, _v1) {
        this.debug(_v0.msg);
      },
      info: function (_v0, _v1) {
        2 >= _v4 && console.info("[" + _v5.getDurationString(new Date() - _v3, 0) + "]", "[" + _v0 + "]", _v1);
      },
      warn: function (_v0, _v1) {
        3 >= _v4 && console.warn("[" + _v5.getDurationString(new Date() - _v3, 0) + "]", "[" + _v0 + "]", _v1);
      },
      error: function (_v0, _v1) {
        4 >= _v4 && console.error("[" + _v5.getDurationString(new Date() - _v3, 0) + "]", "[" + _v0 + "]", _v1);
      }
    });
  _v5.getDurationString = function (_v0, _v1) {
    function _v2(_v0, _v1) {
      for (var _v2 = ("" + _v0).split("."); _v2[0].length < _v1;) _v2[0] = "0" + _v2[0];
      return _v2.join(".");
    }
    _v0 < 0 ? (_v3 = !0, _v0 = -_v0) : _v3 = !1;
    var _v3,
      _v4 = _v0 / (_v1 || 1),
      _v5 = Math.floor(_v4 / 0),
      _v6 = Math.floor((_v4 -= 0 * _v5) / 60),
      _v7 = 0 * (_v4 -= 60 * _v6);
    return _v7 -= 0 * (_v4 = Math.floor(_v4)), _v7 = Math.floor(_v7), (_v3 ? "-" : "") + _v5 + ":" + _v2(_v6, 2) + ":" + _v2(_v4, 2) + "." + _v2(_v7, 3);
  }, _v5.printRanges = function (_v0) {
    var _v1 = _v0.length;
    if (!(_v1 > 0)) return "(empty)";
    for (var _v2 = "", _v3 = 0; _v3 < _v1; _v3++) _v3 > 0 && (_v2 += ","), _v2 += "[" + _v5.getDurationString(_v0.start(_v3)) + "," + _v5.getDurationString(_v0.end(_v3)) + "]";
    return _v2;
  }, _v2.Log = _v5;
  var _v6 = function (_v0) {
    if (_v0 instanceof ArrayBuffer) this.buffer = _v0, this.dataview = new DataView(_v0);else throw "Needs an array buffer";
    this.position = 0;
  };
  _v6.prototype.getPosition = function () {
    return this.position;
  }, _v6.prototype.getEndPosition = function () {
    return this.buffer.byteLength;
  }, _v6.prototype.getLength = function () {
    return this.buffer.byteLength;
  }, _v6.prototype.seek = function (_v0) {
    var _v1 = Math.max(0, Math.min(this.buffer.byteLength, _v0));
    return this.position = isNaN(_v1) || !isFinite(_v1) ? 0 : _v1, !0;
  }, _v6.prototype.isEos = function () {
    return this.getPosition() >= this.getEndPosition();
  }, _v6.prototype.readAnyInt = function (_v0, _v1) {
    var _v2 = 0;
    if (this.position + _v0 <= this.buffer.byteLength) {
      switch (_v0) {
        case 1:
          _v2 = _v1 ? this.dataview.getInt8(this.position) : this.dataview.getUint8(this.position);
          break;
        case 2:
          _v2 = _v1 ? this.dataview.getInt16(this.position) : this.dataview.getUint16(this.position);
          break;
        case 3:
          if (_v1) throw "No method for reading signed 24 bits values";
          _v2 = this.dataview.getUint8(this.position) << 16 | this.dataview.getUint8(this.position + 1) << 8 | this.dataview.getUint8(this.position + 2);
          break;
        case 4:
          _v2 = _v1 ? this.dataview.getInt32(this.position) : this.dataview.getUint32(this.position);
          break;
        case 8:
          if (_v1) throw "No method for reading signed 64 bits values";
          _v2 = this.dataview.getUint32(this.position) << 32 | this.dataview.getUint32(this.position + 4);
          break;
        default:
          throw "readInt method not implemented for size: " + _v0;
      }
      return this.position += _v0, _v2;
    }
    throw "Not enough bytes in buffer";
  }, _v6.prototype.readUint8 = function () {
    return this.readAnyInt(1, !1);
  }, _v6.prototype.readUint16 = function () {
    return this.readAnyInt(2, !1);
  }, _v6.prototype.readUint24 = function () {
    return this.readAnyInt(3, !1);
  }, _v6.prototype.readUint32 = function () {
    return this.readAnyInt(4, !1);
  }, _v6.prototype.readUint64 = function () {
    return this.readAnyInt(8, !1);
  }, _v6.prototype.readString = function (_v0) {
    if (this.position + _v0 <= this.buffer.byteLength) {
      for (var _v1 = "", _v2 = 0; _v2 < _v0; _v2++) _v1 += String.fromCharCode(this.readUint8());
      return _v1;
    }
    throw "Not enough bytes in buffer";
  }, _v6.prototype.readCString = function () {
    for (var _v0 = [];;) {
      var _v1 = this.readUint8();
      if (0 !== _v1) _v0.push(_v1);else break;
    }
    return String.fromCharCode.apply(null, _v0);
  }, _v6.prototype.readInt8 = function () {
    return this.readAnyInt(1, !0);
  }, _v6.prototype.readInt16 = function () {
    return this.readAnyInt(2, !0);
  }, _v6.prototype.readInt32 = function () {
    return this.readAnyInt(4, !0);
  }, _v6.prototype.readInt64 = function () {
    return this.readAnyInt(8, !1);
  }, _v6.prototype.readUint8Array = function (_v0) {
    for (var _v1 = new Uint8Array(_v0), _v2 = 0; _v2 < _v0; _v2++) _v1[_v2] = this.readUint8();
    return _v1;
  }, _v6.prototype.readInt16Array = function (_v0) {
    for (var _v1 = new Int16Array(_v0), _v2 = 0; _v2 < _v0; _v2++) _v1[_v2] = this.readInt16();
    return _v1;
  }, _v6.prototype.readUint16Array = function (_v0) {
    for (var _v1 = new Int16Array(_v0), _v2 = 0; _v2 < _v0; _v2++) _v1[_v2] = this.readUint16();
    return _v1;
  }, _v6.prototype.readUint32Array = function (_v0) {
    for (var _v1 = new Uint32Array(_v0), _v2 = 0; _v2 < _v0; _v2++) _v1[_v2] = this.readUint32();
    return _v1;
  }, _v6.prototype.readInt32Array = function (_v0) {
    for (var _v1 = new Int32Array(_v0), _v2 = 0; _v2 < _v0; _v2++) _v1[_v2] = this.readInt32();
    return _v1;
  }, _v2.MP4BoxStream = _v6;
  var _v7 = function (_v0, _v1, _v2) {
    this._byteOffset = _v1 || 0, _v0 instanceof ArrayBuffer ? this.buffer = _v0 : "object" == typeof _v0 ? (this.dataView = _v0, _v1 && (this._byteOffset += _v1)) : this.buffer = new ArrayBuffer(_v0 || 0), this.position = 0, this.endianness = null == _v2 ? _v7.LITTLE_ENDIAN : _v2;
  };
  _v7.prototype = {}, _v7.prototype.getPosition = function () {
    return this.position;
  }, _v7.prototype._realloc = function (_v0) {
    if (this._dynamicSize) {
      var _v1 = this._byteOffset + this.position + _v0,
        _v2 = this._buffer.byteLength;
      if (_v1 <= _v2) {
        _v1 > this._byteLength && (this._byteLength = _v1);
        return;
      }
      for (_v2 < 1 && (_v2 = 1); _v1 > _v2;) _v2 *= 2;
      var _v3 = new ArrayBuffer(_v2),
        _v4 = new Uint8Array(this._buffer);
      new Uint8Array(_v3, 0, _v4.length).set(_v4), this.buffer = _v3, this._byteLength = _v1;
    }
  }, _v7.prototype._trimAlloc = function () {
    if (this._byteLength != this._buffer.byteLength) {
      var _v0 = new ArrayBuffer(this._byteLength),
        _v1 = new Uint8Array(_v0),
        _v2 = new Uint8Array(this._buffer, 0, _v1.length);
      _v1.set(_v2), this.buffer = _v0;
    }
  }, _v7.BIG_ENDIAN = !1, _v7.LITTLE_ENDIAN = !0, _v7.prototype._byteLength = 0, Object.defineProperty(_v7.prototype, "byteLength", {
    get: function () {
      return this._byteLength - this._byteOffset;
    }
  }), Object.defineProperty(_v7.prototype, "buffer", {
    get: function () {
      return this._trimAlloc(), this._buffer;
    },
    set: function (_v0) {
      this._buffer = _v0, this._dataView = new DataView(this._buffer, this._byteOffset), this._byteLength = this._buffer.byteLength;
    }
  }), Object.defineProperty(_v7.prototype, "byteOffset", {
    get: function () {
      return this._byteOffset;
    },
    set: function (_v0) {
      this._byteOffset = _v0, this._dataView = new DataView(this._buffer, this._byteOffset), this._byteLength = this._buffer.byteLength;
    }
  }), Object.defineProperty(_v7.prototype, "dataView", {
    get: function () {
      return this._dataView;
    },
    set: function (_v0) {
      this._byteOffset = _v0.byteOffset, this._buffer = _v0.buffer, this._dataView = new DataView(this._buffer, this._byteOffset), this._byteLength = this._byteOffset + _v0.byteLength;
    }
  }), _v7.prototype.seek = function (_v0) {
    var _v1 = Math.max(0, Math.min(this.byteLength, _v0));
    this.position = isNaN(_v1) || !isFinite(_v1) ? 0 : _v1;
  }, _v7.prototype.isEof = function () {
    return this.position >= this._byteLength;
  }, _v7.prototype.mapUint8Array = function (_v0) {
    this._realloc(+_v0);
    var _v1 = new Uint8Array(this._buffer, this.byteOffset + this.position, _v0);
    return this.position += +_v0, _v1;
  }, _v7.prototype.readInt32Array = function (_v0, _v1) {
    var _v2 = new Int32Array(_v0 = null == _v0 ? this.byteLength - this.position / 4 : _v0);
    return _v7.memcpy(_v2.buffer, 0, this.buffer, this.byteOffset + this.position, _v0 * _v2.BYTES_PER_ELEMENT), _v7.arrayToNative(_v2, null == _v1 ? this.endianness : _v1), this.position += _v2.byteLength, _v2;
  }, _v7.prototype.readInt16Array = function (_v0, _v1) {
    var _v2 = new Int16Array(_v0 = null == _v0 ? this.byteLength - this.position / 2 : _v0);
    return _v7.memcpy(_v2.buffer, 0, this.buffer, this.byteOffset + this.position, _v0 * _v2.BYTES_PER_ELEMENT), _v7.arrayToNative(_v2, null == _v1 ? this.endianness : _v1), this.position += _v2.byteLength, _v2;
  }, _v7.prototype.readInt8Array = function (_v0) {
    var _v1 = new Int8Array(_v0 = null == _v0 ? this.byteLength - this.position : _v0);
    return _v7.memcpy(_v1.buffer, 0, this.buffer, this.byteOffset + this.position, _v0 * _v1.BYTES_PER_ELEMENT), this.position += _v1.byteLength, _v1;
  }, _v7.prototype.readUint32Array = function (_v0, _v1) {
    var _v2 = new Uint32Array(_v0 = null == _v0 ? this.byteLength - this.position / 4 : _v0);
    return _v7.memcpy(_v2.buffer, 0, this.buffer, this.byteOffset + this.position, _v0 * _v2.BYTES_PER_ELEMENT), _v7.arrayToNative(_v2, null == _v1 ? this.endianness : _v1), this.position += _v2.byteLength, _v2;
  }, _v7.prototype.readUint16Array = function (_v0, _v1) {
    var _v2 = new Uint16Array(_v0 = null == _v0 ? this.byteLength - this.position / 2 : _v0);
    return _v7.memcpy(_v2.buffer, 0, this.buffer, this.byteOffset + this.position, _v0 * _v2.BYTES_PER_ELEMENT), _v7.arrayToNative(_v2, null == _v1 ? this.endianness : _v1), this.position += _v2.byteLength, _v2;
  }, _v7.prototype.readUint8Array = function (_v0) {
    var _v1 = new Uint8Array(_v0 = null == _v0 ? this.byteLength - this.position : _v0);
    return _v7.memcpy(_v1.buffer, 0, this.buffer, this.byteOffset + this.position, _v0 * _v1.BYTES_PER_ELEMENT), this.position += _v1.byteLength, _v1;
  }, _v7.prototype.readFloat64Array = function (_v0, _v1) {
    var _v2 = new Float64Array(_v0 = null == _v0 ? this.byteLength - this.position / 8 : _v0);
    return _v7.memcpy(_v2.buffer, 0, this.buffer, this.byteOffset + this.position, _v0 * _v2.BYTES_PER_ELEMENT), _v7.arrayToNative(_v2, null == _v1 ? this.endianness : _v1), this.position += _v2.byteLength, _v2;
  }, _v7.prototype.readFloat32Array = function (_v0, _v1) {
    var _v2 = new Float32Array(_v0 = null == _v0 ? this.byteLength - this.position / 4 : _v0);
    return _v7.memcpy(_v2.buffer, 0, this.buffer, this.byteOffset + this.position, _v0 * _v2.BYTES_PER_ELEMENT), _v7.arrayToNative(_v2, null == _v1 ? this.endianness : _v1), this.position += _v2.byteLength, _v2;
  }, _v7.prototype.readInt32 = function (_v0) {
    var _v1 = this._dataView.getInt32(this.position, null == _v0 ? this.endianness : _v0);
    return this.position += 4, _v1;
  }, _v7.prototype.readInt16 = function (_v0) {
    var _v1 = this._dataView.getInt16(this.position, null == _v0 ? this.endianness : _v0);
    return this.position += 2, _v1;
  }, _v7.prototype.readInt8 = function () {
    var _v0 = this._dataView.getInt8(this.position);
    return this.position += 1, _v0;
  }, _v7.prototype.readUint32 = function (_v0) {
    this.position + 4 > this.buffer.byteLength && console.log("WILL OVERFLOW: " + (this.position + 4) + " > " + this.buffer.byteLength);
    var _v1 = this._dataView.getUint32(this.position, null == _v0 ? this.endianness : _v0);
    return this.position += 4, _v1;
  }, _v7.prototype.readUint16 = function (_v0) {
    var _v1 = this._dataView.getUint16(this.position, null == _v0 ? this.endianness : _v0);
    return this.position += 2, _v1;
  }, _v7.prototype.readUint8 = function () {
    var _v0 = this._dataView.getUint8(this.position);
    return this.position += 1, _v0;
  }, _v7.prototype.readFloat32 = function (_v0) {
    var _v1 = this._dataView.getFloat32(this.position, null == _v0 ? this.endianness : _v0);
    return this.position += 4, _v1;
  }, _v7.prototype.readFloat64 = function (_v0) {
    var _v1 = this._dataView.getFloat64(this.position, null == _v0 ? this.endianness : _v0);
    return this.position += 8, _v1;
  }, _v7.endianness = new Int8Array(new Int16Array([1]).buffer)[0] > 0, _v7.memcpy = function (_v0, _v1, _v2, _v3, _v4) {
    var _v5 = new Uint8Array(_v0, _v1, _v4),
      _v6 = new Uint8Array(_v2, _v3, _v4);
    _v5.set(_v6);
  }, _v7.arrayToNative = function (_v0, _v1) {
    return _v1 == this.endianness ? _v0 : this.flipArrayEndianness(_v0);
  }, _v7.nativeToEndian = function (_v0, _v1) {
    return this.endianness == _v1 ? _v0 : this.flipArrayEndianness(_v0);
  }, _v7.flipArrayEndianness = function (_v0) {
    for (var _v1 = new Uint8Array(_v0.buffer, _v0.byteOffset, _v0.byteLength), _v2 = 0; _v2 < _v0.byteLength; _v2 += _v0.BYTES_PER_ELEMENT) for (var _v3 = _v2 + _v0.BYTES_PER_ELEMENT - 1, _v4 = _v2; _v3 > _v4; _v3--, _v4++) {
      var _v5 = _v1[_v4];
      _v1[_v4] = _v1[_v3], _v1[_v3] = _v5;
    }
    return _v0;
  }, _v7.prototype.failurePosition = 0, String.fromCharCodeUint8 = function (_v0) {
    for (var _v1 = [], _v2 = 0; _v2 < _v0.length; _v2++) _v1[_v2] = _v0[_v2];
    return String.fromCharCode.apply(null, _v1);
  }, _v7.prototype.readString = function (_v0, _v1) {
    return null == _v1 || "ASCII" == _v1 ? String.fromCharCodeUint8.apply(null, [this.mapUint8Array(null == _v0 ? this.byteLength - this.position : _v0)]) : new TextDecoder(_v1).decode(this.mapUint8Array(_v0));
  }, _v7.prototype.readCString = function (_v0) {
    var _v1 = this.byteLength - this.position,
      _v2 = new Uint8Array(this._buffer, this._byteOffset + this.position),
      _v3 = _v1;
    null != _v0 && (_v3 = Math.min(_v0, _v1));
    for (var _v4 = 0; _v4 < _v3 && 0 !== _v2[_v4]; _v4++);
    var _v5 = String.fromCharCodeUint8.apply(null, [this.mapUint8Array(_v4)]);
    return null != _v0 ? this.position += _v3 - _v4 : _v4 != _v1 && (this.position += 1), _v5;
  }, _v7.prototype.readInt64 = function () {
    return 0 * this.readInt32() + this.readUint32();
  }, _v7.prototype.readUint64 = function () {
    return 0 * this.readUint32() + this.readUint32();
  }, _v7.prototype.readInt64 = function () {
    return 0 * this.readUint32() + this.readUint32();
  }, _v7.prototype.readUint24 = function () {
    return (this.readUint8() << 16) + (this.readUint8() << 8) + this.readUint8();
  }, _v2.DataStream = _v7, _v7.prototype.save = function (_v0) {
    var _v1 = new Blob([this.buffer]);
    if (window.URL && URL.createObjectURL) {
      var _v2 = window.URL.createObjectURL(_v1),
        _v3 = document.createElement("a");
      document.body.appendChild(_v3), _v3.setAttribute("href", _v2), _v3.setAttribute("download", _v0), _v3.setAttribute("target", "_self"), _v3.click(), window.URL.revokeObjectURL(_v2);
    } else throw "DataStream.save: Can't create object URL.";
  }, _v7.prototype._dynamicSize = !0, Object.defineProperty(_v7.prototype, "dynamicSize", {
    get: function () {
      return this._dynamicSize;
    },
    set: function (_v0) {
      _v0 || this._trimAlloc(), this._dynamicSize = _v0;
    }
  }), _v7.prototype.shift = function (_v0) {
    var _v1 = new ArrayBuffer(this._byteLength - _v0),
      _v2 = new Uint8Array(_v1),
      _v3 = new Uint8Array(this._buffer, _v0, _v2.length);
    _v2.set(_v3), this.buffer = _v1, this.position -= _v0;
  }, _v7.prototype.writeInt32Array = function (_v0, _v1) {
    if (this._realloc(4 * _v0.length), _v0 instanceof Int32Array && this.byteOffset + this.position % _v0.BYTES_PER_ELEMENT === 0) _v7.memcpy(this._buffer, this.byteOffset + this.position, _v0.buffer, 0, _v0.byteLength), this.mapInt32Array(_v0.length, _v1);else for (var _v2 = 0; _v2 < _v0.length; _v2++) this.writeInt32(_v0[_v2], _v1);
  }, _v7.prototype.writeInt16Array = function (_v0, _v1) {
    if (this._realloc(2 * _v0.length), _v0 instanceof Int16Array && this.byteOffset + this.position % _v0.BYTES_PER_ELEMENT === 0) _v7.memcpy(this._buffer, this.byteOffset + this.position, _v0.buffer, 0, _v0.byteLength), this.mapInt16Array(_v0.length, _v1);else for (var _v2 = 0; _v2 < _v0.length; _v2++) this.writeInt16(_v0[_v2], _v1);
  }, _v7.prototype.writeInt8Array = function (_v0) {
    if (this._realloc(+_v0.length), _v0 instanceof Int8Array && this.byteOffset + this.position % _v0.BYTES_PER_ELEMENT === 0) _v7.memcpy(this._buffer, this.byteOffset + this.position, _v0.buffer, 0, _v0.byteLength), this.mapInt8Array(_v0.length);else for (var _v1 = 0; _v1 < _v0.length; _v1++) this.writeInt8(_v0[_v1]);
  }, _v7.prototype.writeUint32Array = function (_v0, _v1) {
    if (this._realloc(4 * _v0.length), _v0 instanceof Uint32Array && this.byteOffset + this.position % _v0.BYTES_PER_ELEMENT === 0) _v7.memcpy(this._buffer, this.byteOffset + this.position, _v0.buffer, 0, _v0.byteLength), this.mapUint32Array(_v0.length, _v1);else for (var _v2 = 0; _v2 < _v0.length; _v2++) this.writeUint32(_v0[_v2], _v1);
  }, _v7.prototype.writeUint16Array = function (_v0, _v1) {
    if (this._realloc(2 * _v0.length), _v0 instanceof Uint16Array && this.byteOffset + this.position % _v0.BYTES_PER_ELEMENT === 0) _v7.memcpy(this._buffer, this.byteOffset + this.position, _v0.buffer, 0, _v0.byteLength), this.mapUint16Array(_v0.length, _v1);else for (var _v2 = 0; _v2 < _v0.length; _v2++) this.writeUint16(_v0[_v2], _v1);
  }, _v7.prototype.writeUint8Array = function (_v0) {
    if (this._realloc(+_v0.length), _v0 instanceof Uint8Array && this.byteOffset + this.position % _v0.BYTES_PER_ELEMENT === 0) _v7.memcpy(this._buffer, this.byteOffset + this.position, _v0.buffer, 0, _v0.byteLength), this.mapUint8Array(_v0.length);else for (var _v1 = 0; _v1 < _v0.length; _v1++) this.writeUint8(_v0[_v1]);
  }, _v7.prototype.writeFloat64Array = function (_v0, _v1) {
    if (this._realloc(8 * _v0.length), _v0 instanceof Float64Array && this.byteOffset + this.position % _v0.BYTES_PER_ELEMENT === 0) _v7.memcpy(this._buffer, this.byteOffset + this.position, _v0.buffer, 0, _v0.byteLength), this.mapFloat64Array(_v0.length, _v1);else for (var _v2 = 0; _v2 < _v0.length; _v2++) this.writeFloat64(_v0[_v2], _v1);
  }, _v7.prototype.writeFloat32Array = function (_v0, _v1) {
    if (this._realloc(4 * _v0.length), _v0 instanceof Float32Array && this.byteOffset + this.position % _v0.BYTES_PER_ELEMENT === 0) _v7.memcpy(this._buffer, this.byteOffset + this.position, _v0.buffer, 0, _v0.byteLength), this.mapFloat32Array(_v0.length, _v1);else for (var _v2 = 0; _v2 < _v0.length; _v2++) this.writeFloat32(_v0[_v2], _v1);
  }, _v7.prototype.writeInt32 = function (_v0, _v1) {
    this._realloc(4), this._dataView.setInt32(this.position, _v0, null == _v1 ? this.endianness : _v1), this.position += 4;
  }, _v7.prototype.writeInt16 = function (_v0, _v1) {
    this._realloc(2), this._dataView.setInt16(this.position, _v0, null == _v1 ? this.endianness : _v1), this.position += 2;
  }, _v7.prototype.writeInt8 = function (_v0) {
    this._realloc(1), this._dataView.setInt8(this.position, _v0), this.position += 1;
  }, _v7.prototype.writeUint32 = function (_v0, _v1) {
    this._realloc(4), this._dataView.setUint32(this.position, _v0, null == _v1 ? this.endianness : _v1), this.position += 4;
  }, _v7.prototype.writeUint16 = function (_v0, _v1) {
    this._realloc(2), this._dataView.setUint16(this.position, _v0, null == _v1 ? this.endianness : _v1), this.position += 2;
  }, _v7.prototype.writeUint8 = function (_v0) {
    this._realloc(1), this._dataView.setUint8(this.position, _v0), this.position += 1;
  }, _v7.prototype.writeFloat32 = function (_v0, _v1) {
    this._realloc(4), this._dataView.setFloat32(this.position, _v0, null == _v1 ? this.endianness : _v1), this.position += 4;
  }, _v7.prototype.writeFloat64 = function (_v0, _v1) {
    this._realloc(8), this._dataView.setFloat64(this.position, _v0, null == _v1 ? this.endianness : _v1), this.position += 8;
  }, _v7.prototype.writeUCS2String = function (_v0, _v1, _v2) {
    null == _v2 && (_v2 = _v0.length);
    for (var _v3 = 0; _v3 < _v0.length && _v3 < _v2; _v3++) this.writeUint16(_v0.charCodeAt(_v3), _v1);
    for (; _v3 < _v2; _v3++) this.writeUint16(0);
  }, _v7.prototype.writeString = function (_v0, _v1, _v2) {
    var _v3 = 0;
    if (null == _v1 || "ASCII" == _v1) {
      if (null != _v2) {
        var _v4 = Math.min(_v0.length, _v2);
        for (_v3 = 0; _v3 < _v4; _v3++) this.writeUint8(_v0.charCodeAt(_v3));
        for (; _v3 < _v2; _v3++) this.writeUint8(0);
      } else for (_v3 = 0; _v3 < _v0.length; _v3++) this.writeUint8(_v0.charCodeAt(_v3));
    } else this.writeUint8Array(new TextEncoder(_v1).encode(_v0.substring(0, _v2)));
  }, _v7.prototype.writeCString = function (_v0, _v1) {
    var _v2 = 0;
    if (null != _v1) {
      var _v3 = Math.min(_v0.length, _v1);
      for (_v2 = 0; _v2 < _v3; _v2++) this.writeUint8(_v0.charCodeAt(_v2));
      for (; _v2 < _v1; _v2++) this.writeUint8(0);
    } else {
      for (_v2 = 0; _v2 < _v0.length; _v2++) this.writeUint8(_v0.charCodeAt(_v2));
      this.writeUint8(0);
    }
  }, _v7.prototype.writeStruct = function (_v0, _v1) {
    for (var _v2 = 0; _v2 < _v0.length; _v2 += 2) {
      var _v3 = _v0[_v2 + 1];
      this.writeType(_v3, _v1[_v0[_v2]], _v1);
    }
  }, _v7.prototype.writeType = function (_v0, _v1, _v2) {
    if ("function" == typeof _v0) return _v0(this, _v1);
    if ("object" == typeof _v0 && !(_v0 instanceof Array)) return _v0.set(this, _v1, _v2);
    var _v3,
      _v4 = null,
      _v5 = "ASCII",
      _v6 = this.position;
    switch ("string" == typeof _v0 && /:/.test(_v0) && (_v0 = (_v3 = _v0.split(":"))[0], _v4 = parseInt(_v3[1])), "string" == typeof _v0 && /,/.test(_v0) && (_v0 = (_v3 = _v0.split(","))[0], _v5 = parseInt(_v3[1])), _v0) {
      case "uint8":
        this.writeUint8(_v1);
        break;
      case "int8":
        this.writeInt8(_v1);
        break;
      case "uint16":
        this.writeUint16(_v1, this.endianness);
        break;
      case "int16":
        this.writeInt16(_v1, this.endianness);
        break;
      case "uint32":
        this.writeUint32(_v1, this.endianness);
        break;
      case "int32":
        this.writeInt32(_v1, this.endianness);
        break;
      case "float32":
        this.writeFloat32(_v1, this.endianness);
        break;
      case "float64":
        this.writeFloat64(_v1, this.endianness);
        break;
      case "uint16be":
        this.writeUint16(_v1, _v7.BIG_ENDIAN);
        break;
      case "int16be":
        this.writeInt16(_v1, _v7.BIG_ENDIAN);
        break;
      case "uint32be":
        this.writeUint32(_v1, _v7.BIG_ENDIAN);
        break;
      case "int32be":
        this.writeInt32(_v1, _v7.BIG_ENDIAN);
        break;
      case "float32be":
        this.writeFloat32(_v1, _v7.BIG_ENDIAN);
        break;
      case "float64be":
        this.writeFloat64(_v1, _v7.BIG_ENDIAN);
        break;
      case "uint16le":
        this.writeUint16(_v1, _v7.LITTLE_ENDIAN);
        break;
      case "int16le":
        this.writeInt16(_v1, _v7.LITTLE_ENDIAN);
        break;
      case "uint32le":
        this.writeUint32(_v1, _v7.LITTLE_ENDIAN);
        break;
      case "int32le":
        this.writeInt32(_v1, _v7.LITTLE_ENDIAN);
        break;
      case "float32le":
        this.writeFloat32(_v1, _v7.LITTLE_ENDIAN);
        break;
      case "float64le":
        this.writeFloat64(_v1, _v7.LITTLE_ENDIAN);
        break;
      case "cstring":
        this.writeCString(_v1, _v4);
        break;
      case "string":
        this.writeString(_v1, _v5, _v4);
        break;
      case "u16string":
        this.writeUCS2String(_v1, this.endianness, _v4);
        break;
      case "u16stringle":
        this.writeUCS2String(_v1, _v7.LITTLE_ENDIAN, _v4);
        break;
      case "u16stringbe":
        this.writeUCS2String(_v1, _v7.BIG_ENDIAN, _v4);
        break;
      default:
        if (3 == _v0.length) for (var _v7 = _v0[1], _v8 = 0; _v8 < _v1.length; _v8++) this.writeType(_v7, _v1[_v8]);else this.writeStruct(_v0, _v1);
    }
    null != _v4 && (this.position = _v6, this._realloc(_v4), this.position = _v6 + _v4);
  }, _v7.prototype.writeUint64 = function (_v0) {
    var _v1 = Math.floor(_v0 / 0);
    this.writeUint32(_v1), this.writeUint32(0 | _v0);
  }, _v7.prototype.writeUint24 = function (_v0) {
    this.writeUint8((0 & _v0) >> 16), this.writeUint8((0 & _v0) >> 8), this.writeUint8(255 & _v0);
  }, _v7.prototype.adjustUint32 = function (_v0, _v1) {
    var _v2 = this.position;
    this.seek(_v0), this.writeUint32(_v1), this.seek(_v2);
  }, _v7.prototype.mapInt32Array = function (_v0, _v1) {
    this._realloc(4 * _v0);
    var _v2 = new Int32Array(this._buffer, this.byteOffset + this.position, _v0);
    return _v7.arrayToNative(_v2, null == _v1 ? this.endianness : _v1), this.position += 4 * _v0, _v2;
  }, _v7.prototype.mapInt16Array = function (_v0, _v1) {
    this._realloc(2 * _v0);
    var _v2 = new Int16Array(this._buffer, this.byteOffset + this.position, _v0);
    return _v7.arrayToNative(_v2, null == _v1 ? this.endianness : _v1), this.position += 2 * _v0, _v2;
  }, _v7.prototype.mapInt8Array = function (_v0) {
    this._realloc(+_v0);
    var _v1 = new Int8Array(this._buffer, this.byteOffset + this.position, _v0);
    return this.position += +_v0, _v1;
  }, _v7.prototype.mapUint32Array = function (_v0, _v1) {
    this._realloc(4 * _v0);
    var _v2 = new Uint32Array(this._buffer, this.byteOffset + this.position, _v0);
    return _v7.arrayToNative(_v2, null == _v1 ? this.endianness : _v1), this.position += 4 * _v0, _v2;
  }, _v7.prototype.mapUint16Array = function (_v0, _v1) {
    this._realloc(2 * _v0);
    var _v2 = new Uint16Array(this._buffer, this.byteOffset + this.position, _v0);
    return _v7.arrayToNative(_v2, null == _v1 ? this.endianness : _v1), this.position += 2 * _v0, _v2;
  }, _v7.prototype.mapFloat64Array = function (_v0, _v1) {
    this._realloc(8 * _v0);
    var _v2 = new Float64Array(this._buffer, this.byteOffset + this.position, _v0);
    return _v7.arrayToNative(_v2, null == _v1 ? this.endianness : _v1), this.position += 8 * _v0, _v2;
  }, _v7.prototype.mapFloat32Array = function (_v0, _v1) {
    this._realloc(4 * _v0);
    var _v2 = new Float32Array(this._buffer, this.byteOffset + this.position, _v0);
    return _v7.arrayToNative(_v2, null == _v1 ? this.endianness : _v1), this.position += 4 * _v0, _v2;
  };
  var _v8 = function (_v0) {
    this.file = _v0, this.EOF = !1;
  };
  _v8.prototype = new _v7(new ArrayBuffer(), 0, _v7.BIG_ENDIAN), _v8.prototype.initialized = function () {
    return !0;
  }, _v8.prototype.cleanBuffers = function () {}, _v8.prototype.findPosition = function (_v0, _v1, _v2) {
    return console.log("FS: findPosition: ", _v1), -1;
  }, _v8.prototype.logBufferLevel = function (_v0) {}, _v8.prototype.seek = function (_v0, _v1, _v2) {
    return (console.log("FS: seek: ", _v0, ", savedPos=", this.isoFile.lastBoxStartPosition), _v0 == this.file.size) ? (console.log("FS: seek to EOF: ", _v0), this.EOF = !0, !1) : (_v0 < this.getPosition() && console.log("FS: seek: " + _v0 + ", backwards from: " + this.getPosition()), _v0 >= this.getEndPosition()) ? (console.log("FS: SEEK OUTSIDE BUFFER: " + _v0 + " > " + this.getEndPosition()), !1) : (this.position = _v0 - this.buffer.fileStart, !0);
  }, _v8.prototype.getPosition = function () {
    return this.EOF ? this.file.size : this.position + this.buffer.fileStart;
  }, _v8.prototype.getLength = function () {
    return console.log("FS: getLength"), this.buffer.byteLength;
  }, _v8.prototype.getEndPosition = function () {
    return this.buffer.fileStart + this.buffer.byteLength;
  }, _v8.prototype.addUsedBytes = function (_v0) {}, _v8.prototype.findEndContiguousBuf = function (_v0) {
    return this.buffer.fileStart + this.buffer.byteLength;
  }, _v2.FileStream = _v8;
  var _v9 = function (_v0) {
    this.buffers = [], this.bufferIndex = -1, _v0 && (this.insertBuffer(_v0), this.bufferIndex = 0);
  };
  _v9.prototype = new _v7(new ArrayBuffer(), 0, _v7.BIG_ENDIAN), _v9.prototype.initialized = function () {
    var _v0;
    return !!(this.bufferIndex > -1) || (this.buffers.length > 0 ? 0 === (_v0 = this.buffers[0]).fileStart ? (this.buffer = _v0, this.bufferIndex = 0, _v5.debug("MultiBufferStream", "Stream ready for parsing"), !0) : (_v5.warn("MultiBufferStream", "The first buffer should have a fileStart of 0"), this.logBufferLevel(), !1) : (_v5.warn("MultiBufferStream", "No buffer to start parsing from"), this.logBufferLevel(), !1));
  }, ArrayBuffer.concat = function (_v0, _v1) {
    _v5.debug("ArrayBuffer", "Trying to create a new buffer of size: " + (_v0.byteLength + _v1.byteLength));
    var _v2 = new Uint8Array(_v0.byteLength + _v1.byteLength);
    return _v2.set(new Uint8Array(_v0), 0), _v2.set(new Uint8Array(_v1), _v0.byteLength), _v2.buffer;
  }, _v9.prototype.reduceBuffer = function (_v0, _v1, _v2) {
    var _v3;
    return (_v3 = new Uint8Array(_v2)).set(new Uint8Array(_v0, _v1, _v2)), _v3.buffer.fileStart = _v0.fileStart + _v1, _v3.buffer.usedBytes = 0, _v3.buffer;
  }, _v9.prototype.insertBuffer = function (_v0) {
    for (var _v1 = !0, _v2 = 0; _v2 < this.buffers.length; _v2++) {
      var _v3 = this.buffers[_v2];
      if (_v0.fileStart <= _v3.fileStart) {
        if (_v0.fileStart === _v3.fileStart) {
          if (_v0.byteLength > _v3.byteLength) {
            this.buffers.splice(_v2, 1), _v2--;
            continue;
          } else _v5.warn("MultiBufferStream", "Buffer (fileStart: " + _v0.fileStart + " - Length: " + _v0.byteLength + ") already appended, ignoring");
        } else _v0.fileStart + _v0.byteLength <= _v3.fileStart || (_v0 = this.reduceBuffer(_v0, 0, _v3.fileStart - _v0.fileStart)), _v5.debug("MultiBufferStream", "Appending new buffer (fileStart: " + _v0.fileStart + " - Length: " + _v0.byteLength + ")"), this.buffers.splice(_v2, 0, _v0), 0 === _v2 && (this.buffer = _v0);
        _v1 = !1;
        break;
      }
      if (_v0.fileStart < _v3.fileStart + _v3.byteLength) {
        var _v4 = _v3.fileStart + _v3.byteLength - _v0.fileStart,
          _v5 = _v0.byteLength - _v4;
        if (_v5 > 0) _v0 = this.reduceBuffer(_v0, _v4, _v5);else {
          _v1 = !1;
          break;
        }
      }
    }
    _v1 && (_v5.debug("MultiBufferStream", "Appending new buffer (fileStart: " + _v0.fileStart + " - Length: " + _v0.byteLength + ")"), this.buffers.push(_v0), 0 === _v2 && (this.buffer = _v0));
  }, _v9.prototype.logBufferLevel = function (_v0) {
    var _v1,
      _v2,
      _v3,
      _v4,
      _v5,
      _v6 = [],
      _v7 = "";
    for (_v1 = 0, _v3 = 0, _v4 = 0; _v1 < this.buffers.length; _v1++) _v2 = this.buffers[_v1], 0 === _v1 ? (_v6.push(_v5 = {}), _v5.start = _v2.fileStart, _v5.end = _v2.fileStart + _v2.byteLength, _v7 += "[" + _v5.start + "-") : _v5.end === _v2.fileStart ? _v5.end = _v2.fileStart + _v2.byteLength : ((_v5 = {}).start = _v2.fileStart, _v7 += _v6[_v6.length - 1].end - 1 + "], [" + _v5.start + "-", _v5.end = _v2.fileStart + _v2.byteLength, _v6.push(_v5)), _v3 += _v2.usedBytes, _v4 += _v2.byteLength;
    _v6.length > 0 && (_v7 += _v5.end - 1 + "]"), (_v0 ? _v5.info : _v5.debug)("MultiBufferStream", 0 === this.buffers.length ? "No more buffer in memory" : "" + this.buffers.length + " stored buffer(s) (" + _v3 + "/" + _v4 + " bytes), continuous ranges: " + _v7);
  }, _v9.prototype.cleanBuffers = function () {
    var _v0, _v1;
    for (_v0 = 0; _v0 < this.buffers.length; _v0++) (_v1 = this.buffers[_v0]).usedBytes === _v1.byteLength && (_v5.debug("MultiBufferStream", "Removing buffer #" + _v0), this.buffers.splice(_v0, 1), _v0--);
  }, _v9.prototype.mergeNextBuffer = function () {
    if (!(this.bufferIndex + 1 < this.buffers.length) || (_v0 = this.buffers[this.bufferIndex + 1]).fileStart !== this.buffer.fileStart + this.buffer.byteLength) return !1;
    var _v0,
      _v1 = this.buffer.byteLength,
      _v2 = this.buffer.usedBytes,
      _v3 = this.buffer.fileStart;
    return this.buffers[this.bufferIndex] = ArrayBuffer.concat(this.buffer, _v0), this.buffer = this.buffers[this.bufferIndex], this.buffers.splice(this.bufferIndex + 1, 1), this.buffer.usedBytes = _v2, this.buffer.fileStart = _v3, _v5.debug("ISOFile", "Concatenating buffer for box parsing (length: " + _v1 + "->" + this.buffer.byteLength + ")"), !0;
  }, _v9.prototype.findPosition = function (_v0, _v1, _v2) {
    var _v3,
      _v4 = null,
      _v5 = -1;
    for (_v3 = !0 === _v0 ? 0 : this.bufferIndex; _v3 < this.buffers.length && (_v4 = this.buffers[_v3]).fileStart <= _v1;) _v5 = _v3, _v2 && (_v4.fileStart + _v4.byteLength <= _v1 ? _v4.usedBytes = _v4.byteLength : _v4.usedBytes = _v1 - _v4.fileStart, this.logBufferLevel()), _v3++;
    return -1 === _v5 ? -1 : (_v4 = this.buffers[_v5]).fileStart + _v4.byteLength >= _v1 ? (_v5.debug("MultiBufferStream", "Found position in existing buffer #" + _v5), _v5) : -1;
  }, _v9.prototype.findEndContiguousBuf = function (_v0) {
    var _v1,
      _v2,
      _v3,
      _v4 = void 0 !== _v0 ? _v0 : this.bufferIndex;
    if (_v2 = this.buffers[_v4], this.buffers.length > _v4 + 1) for (_v1 = _v4 + 1; _v1 < this.buffers.length; _v1++) if ((_v3 = this.buffers[_v1]).fileStart === _v2.fileStart + _v2.byteLength) _v2 = _v3;else break;
    return _v2.fileStart + _v2.byteLength;
  }, _v9.prototype.getEndFilePositionAfter = function (_v0) {
    var _v1 = this.findPosition(!0, _v0, !1);
    return -1 !== _v1 ? this.findEndContiguousBuf(_v1) : _v0;
  }, _v9.prototype.addUsedBytes = function (_v0) {
    this.buffer.usedBytes += _v0, this.logBufferLevel();
  }, _v9.prototype.setAllUsedBytes = function () {
    this.buffer.usedBytes = this.buffer.byteLength, this.logBufferLevel();
  }, _v9.prototype.seek = function (_v0, _v1, _v2) {
    var _v3;
    return (_v0 < this.getPosition() ? console.log("MBS: seek: " + _v0 + ", backwards from: " + this.getPosition()) : console.log("MBS: seek: ", _v0, ", savedPos=", this.isoFile.lastBoxStartPosition), this.getPosition() == this.isoFile.size && console.log("MBS: seek to EOF: ", _v0), -1 !== (_v3 = this.findPosition(_v1, _v0, _v2))) ? (this.buffer = this.buffers[_v3], this.bufferIndex = _v3, this.position = _v0 - this.buffer.fileStart, _v5.debug("MultiBufferStream", "Repositioning parser at buffer position: " + this.position), !0) : (_v5.debug("MultiBufferStream", "Position " + _v0 + " not found in buffered data"), !1);
  }, _v9.prototype.getPosition = function () {
    if (-1 === this.bufferIndex || null === this.buffers[this.bufferIndex]) throw "Error accessing position in the MultiBufferStream";
    return void 0 === this.buffers[this.bufferIndex].fileStart && (console.log("fileStart is undefined at bufferIndex=" + this.bufferIndex), console.log("buffers.length=" + this.buffers.length)), this.buffers[this.bufferIndex].fileStart + this.position;
  }, _v9.prototype.getLength = function () {
    return this.byteLength;
  }, _v9.prototype.getEndPosition = function () {
    if (-1 === this.bufferIndex || null === this.buffers[this.bufferIndex]) throw "Error accessing position in the MultiBufferStream";
    return this.buffers[this.bufferIndex].fileStart + this.byteLength;
  }, _v2.MultiBufferStream = _v9;
  var _v10 = function () {
    var _v0 = [];
    _v0[3] = "ES_Descriptor", _v0[4] = "DecoderConfigDescriptor", _v0[5] = "DecoderSpecificInfo", _v0[6] = "SLConfigDescriptor", this.getDescriptorName = function (_v0) {
      return _v0[_v0];
    };
    var _v1 = this,
      _v2 = {};
    return this.parseOneDescriptor = function (_v0) {
      var _v1,
        _v2,
        _v3,
        _v4 = 0,
        _v5 = 0;
      for (_v1 = _v0.readUint8(), _v4++, _v3 = _v0.readUint8(), _v4++; 128 & _v3;) _v5 = (127 & _v3) << 7, _v3 = _v0.readUint8(), _v4++;
      return _v5 += 127 & _v3, _v5.debug("MPEG4DescriptorParser", "Found " + (_v0[_v1] || "Descriptor " + _v1) + ", size " + _v5 + " at position " + _v0.getPosition()), (_v2 = _v0[_v1] ? new _v2[_v0[_v1]](_v5) : new _v2.Descriptor(_v5)).parse(_v0), _v2;
    }, _v2.Descriptor = function (_v0, _v1) {
      this.tag = _v0, this.size = _v1, this.descs = [];
    }, _v2.Descriptor.prototype.parse = function (_v0) {
      this.data = _v0.readUint8Array(this.size);
    }, _v2.Descriptor.prototype.findDescriptor = function (_v0) {
      for (var _v1 = 0; _v1 < this.descs.length; _v1++) if (this.descs[_v1].tag == _v0) return this.descs[_v1];
      return null;
    }, _v2.Descriptor.prototype.parseRemainingDescriptors = function (_v0) {
      for (var _v1 = _v0.position; _v0.position < _v1 + this.size;) {
        var _v2 = _v1.parseOneDescriptor(_v0);
        this.descs.push(_v2);
      }
    }, _v2.ES_Descriptor = function (_v0) {
      _v2.Descriptor.call(this, 3, _v0);
    }, _v2.ES_Descriptor.prototype = new _v2.Descriptor(), _v2.ES_Descriptor.prototype.parse = function (_v0) {
      if (this.ES_ID = _v0.readUint16(), this.flags = _v0.readUint8(), this.size -= 3, 128 & this.flags ? (this.dependsOn_ES_ID = _v0.readUint16(), this.size -= 2) : this.dependsOn_ES_ID = 0, 64 & this.flags) {
        var _v1 = _v0.readUint8();
        this.URL = _v0.readString(_v1), this.size -= _v1 + 1;
      } else this.URL = "";
      32 & this.flags ? (this.OCR_ES_ID = _v0.readUint16(), this.size -= 2) : this.OCR_ES_ID = 0, this.parseRemainingDescriptors(_v0);
    }, _v2.ES_Descriptor.prototype.getOTI = function (_v0) {
      var _v1 = this.findDescriptor(4);
      return _v1 ? _v1.oti : 0;
    }, _v2.ES_Descriptor.prototype.getAudioConfig = function (_v0) {
      var _v1 = this.findDescriptor(4);
      if (!_v1) return null;
      var _v2 = _v1.findDescriptor(5);
      if (!_v2 || !_v2.data) return null;
      var _v3 = (248 & _v2.data[0]) >> 3;
      return 31 === _v3 && _v2.data.length >= 2 && (_v3 = 32 + ((7 & _v2.data[0]) << 3) + ((224 & _v2.data[1]) >> 5)), _v3;
    }, _v2.DecoderConfigDescriptor = function (_v0) {
      _v2.Descriptor.call(this, 4, _v0);
    }, _v2.DecoderConfigDescriptor.prototype = new _v2.Descriptor(), _v2.DecoderConfigDescriptor.prototype.parse = function (_v0) {
      this.oti = _v0.readUint8(), this.streamType = _v0.readUint8(), this.upStream = (this.streamType >> 1 & 1) != 0, this.streamType = this.streamType >>> 2, this.bufferSize = _v0.readUint24(), this.maxBitrate = _v0.readUint32(), this.avgBitrate = _v0.readUint32(), this.size -= 13, this.parseRemainingDescriptors(_v0);
    }, _v2.DecoderSpecificInfo = function (_v0) {
      _v2.Descriptor.call(this, 5, _v0);
    }, _v2.DecoderSpecificInfo.prototype = new _v2.Descriptor(), _v2.SLConfigDescriptor = function (_v0) {
      _v2.Descriptor.call(this, 6, _v0);
    }, _v2.SLConfigDescriptor.prototype = new _v2.Descriptor(), this;
  };
  _v2.MPEG4DescriptorParser = _v10;
  var _v11 = {
    ERR_INVALID_DATA: -1,
    ERR_NOT_ENOUGH_DATA: 0,
    OK: 1,
    BASIC_BOXES: ["mdat", "idat", "free", "skip", "meco", "strk"],
    FULL_BOXES: ["hmhd", "nmhd", "iods", "xml ", "bxml", "ipro", "mere"],
    CONTAINER_BOXES: [["moov", ["trak", "pssh"]], ["trak"], ["edts"], ["mdia"], ["minf"], ["dinf"], ["stbl", ["sgpd", "sbgp"]], ["mvex", ["trex"]], ["moof", ["traf"]], ["traf", ["trun", "sgpd", "sbgp"]], ["vttc"], ["tref"], ["iref"], ["mfra", ["tfra"]], ["meco"], ["hnti"], ["hinf"], ["strk"], ["strd"], ["sinf"], ["rinf"], ["schi"], ["trgr"], ["udta", ["kind"]], ["iprp", ["ipma"]], ["ipco"], ["grpl"], ["j2kH"], ["etyp", ["tyco"]]],
    boxCodes: [],
    fullBoxCodes: [],
    containerBoxCodes: [],
    sampleEntryCodes: {},
    sampleGroupEntryCodes: [],
    trackGroupTypes: [],
    UUIDBoxes: {},
    UUIDs: [],
    initialize: function () {
      _v11.FullBox.prototype = new _v11.Box(), _v11.ContainerBox.prototype = new _v11.Box(), _v11.SampleEntry.prototype = new _v11.Box(), _v11.TrackGroupTypeBox.prototype = new _v11.FullBox(), _v11.BASIC_BOXES.forEach(function (_v0) {
        _v11.createBoxCtor(_v0);
      }), _v11.FULL_BOXES.forEach(function (_v0) {
        _v11.createFullBoxCtor(_v0);
      }), _v11.CONTAINER_BOXES.forEach(function (_v0) {
        _v11.createContainerBoxCtor(_v0[0], null, _v0[1]);
      });
    },
    Box: function (_v0, _v1, _v2) {
      this.type = _v0, this.size = _v1, this.uuid = _v2;
    },
    FullBox: function (_v0, _v1, _v2) {
      _v11.Box.call(this, _v0, _v1, _v2), this.flags = 0, this.version = 0;
    },
    ContainerBox: function (_v0, _v1, _v2) {
      _v11.Box.call(this, _v0, _v1, _v2), this.boxes = [];
    },
    SampleEntry: function (_v0, _v1, _v2, _v3) {
      _v11.ContainerBox.call(this, _v0, _v1), this.hdr_size = _v2, this.start = _v3;
    },
    SampleGroupEntry: function (_v0) {
      this.grouping_type = _v0;
    },
    TrackGroupTypeBox: function (_v0, _v1) {
      _v11.FullBox.call(this, _v0, _v1);
    },
    createBoxCtor: function (_v0, _v1) {
      _v11.boxCodes.push(_v0), _v11[_v0 + "Box"] = function (_v0) {
        _v11.Box.call(this, _v0, _v0);
      }, _v11[_v0 + "Box"].prototype = new _v11.Box(), _v1 && (_v11[_v0 + "Box"].prototype.parse = _v1);
    },
    createFullBoxCtor: function (_v0, _v1) {
      _v11[_v0 + "Box"] = function (_v0) {
        _v11.FullBox.call(this, _v0, _v0);
      }, _v11[_v0 + "Box"].prototype = new _v11.FullBox(), _v11[_v0 + "Box"].prototype.parse = function (_v0) {
        this.parseFullHeader(_v0), _v1 && _v1.call(this, _v0);
      };
    },
    addSubBoxArrays: function (_v0) {
      if (_v0) {
        this.subBoxNames = _v0;
        for (var _v1 = _v0.length, _v2 = 0; _v2 < _v1; _v2++) this[_v0[_v2] + "s"] = [];
      }
    },
    createContainerBoxCtor: function (_v0, _v1, _v2) {
      _v11[_v0 + "Box"] = function (_v0) {
        _v11.ContainerBox.call(this, _v0, _v0), _v11.addSubBoxArrays.call(this, _v2);
      }, _v11[_v0 + "Box"].prototype = new _v11.ContainerBox(), _v1 && (_v11[_v0 + "Box"].prototype.parse = _v1);
    },
    createMediaSampleEntryCtor: function (_v0, _v1, _v2) {
      _v11.sampleEntryCodes[_v0] = [], _v11[_v0 + "SampleEntry"] = function (_v0, _v1) {
        _v11.SampleEntry.call(this, _v0, _v1), _v11.addSubBoxArrays.call(this, _v2);
      }, _v11[_v0 + "SampleEntry"].prototype = new _v11.SampleEntry(), _v1 && (_v11[_v0 + "SampleEntry"].prototype.parse = _v1);
    },
    createSampleEntryCtor: function (_v0, _v1, _v2, _v3) {
      _v11.sampleEntryCodes[_v0].push(_v1), _v11[_v1 + "SampleEntry"] = function (_v0) {
        _v11[_v0 + "SampleEntry"].call(this, _v1, _v0), _v11.addSubBoxArrays.call(this, _v3);
      }, _v11[_v1 + "SampleEntry"].prototype = new _v11[_v0 + "SampleEntry"](), _v2 && (_v11[_v1 + "SampleEntry"].prototype.parse = _v2);
    },
    createEncryptedSampleEntryCtor: function (_v0, _v1, _v2) {
      _v11.createSampleEntryCtor.call(this, _v0, _v1, _v2, ["sinf"]);
    },
    createSampleGroupCtor: function (_v0, _v1) {
      _v11[_v0 + "SampleGroupEntry"] = function (_v0) {
        _v11.SampleGroupEntry.call(this, _v0, _v0);
      }, _v11[_v0 + "SampleGroupEntry"].prototype = new _v11.SampleGroupEntry(), _v1 && (_v11[_v0 + "SampleGroupEntry"].prototype.parse = _v1);
    },
    createTrackGroupCtor: function (_v0, _v1) {
      _v11[_v0 + "TrackGroupTypeBox"] = function (_v0) {
        _v11.TrackGroupTypeBox.call(this, _v0, _v0);
      }, _v11[_v0 + "TrackGroupTypeBox"].prototype = new _v11.TrackGroupTypeBox(), _v1 && (_v11[_v0 + "TrackGroupTypeBox"].prototype.parse = _v1);
    },
    createUUIDBox: function (_v0, _v1, _v2, _v3) {
      _v11.UUIDs.push(_v0), _v11.UUIDBoxes[_v0] = function (_v0) {
        _v1 ? _v11.FullBox.call(this, "uuid", _v0, _v0) : _v2 ? _v11.ContainerBox.call(this, "uuid", _v0, _v0) : _v11.Box.call(this, "uuid", _v0, _v0);
      }, _v11.UUIDBoxes[_v0].prototype = _v1 ? new _v11.FullBox() : _v2 ? new _v11.ContainerBox() : new _v11.Box(), _v3 && (_v1 ? _v11.UUIDBoxes[_v0].prototype.parse = function (_v0) {
        this.parseFullHeader(_v0), _v3 && _v3.call(this, _v0);
      } : _v11.UUIDBoxes[_v0].prototype.parse = _v3);
    }
  };
  function _v12(_v0, _v1) {
    this.x = _v0, this.y = _v1;
  }
  function _v13(_v0, _v1) {
    this.bad_pixel_row = _v0, this.bad_pixel_column = _v1;
  }
  _v11.initialize(), _v11.TKHD_FLAG_ENABLED = 1, _v11.TKHD_FLAG_IN_MOVIE = 2, _v11.TKHD_FLAG_IN_PREVIEW = 4, _v11.TFHD_FLAG_BASE_DATA_OFFSET = 1, _v11.TFHD_FLAG_SAMPLE_DESC = 2, _v11.TFHD_FLAG_SAMPLE_DUR = 8, _v11.TFHD_FLAG_SAMPLE_SIZE = 16, _v11.TFHD_FLAG_SAMPLE_FLAGS = 32, _v11.TFHD_FLAG_DUR_EMPTY = 0, _v11.TFHD_FLAG_DEFAULT_BASE_IS_MOOF = 0, _v11.TRUN_FLAGS_DATA_OFFSET = 1, _v11.TRUN_FLAGS_FIRST_FLAG = 4, _v11.TRUN_FLAGS_DURATION = 256, _v11.TRUN_FLAGS_SIZE = 512, _v11.TRUN_FLAGS_FLAGS = 0, _v11.TRUN_FLAGS_CTS_OFFSET = 0, _v11.Box.prototype.add = function (_v0) {
    return this.addBox(new _v11[_v0 + "Box"]());
  }, _v11.Box.prototype.addBox = function (_v0) {
    return this.boxes.push(_v0), this[_v0.type + "s"] ? this[_v0.type + "s"].push(_v0) : this[_v0.type] = _v0, _v0;
  }, _v11.Box.prototype.set = function (_v0, _v1) {
    return this[_v0] = _v1, this;
  }, _v11.Box.prototype.addEntry = function (_v0, _v1) {
    var _v2 = _v1 || "entries";
    return this[_v2] || (this[_v2] = []), this[_v2].push(_v0), this;
  }, _v2.BoxParser = _v11, _v11.parseUUID = function (_v0) {
    return _v11.parseHex16(_v0);
  }, _v11.parseHex16 = function (_v0) {
    for (var _v1 = "", _v2 = 0; _v2 < 16; _v2++) {
      var _v3 = _v0.readUint8().toString(16);
      _v1 += 1 === _v3.length ? "0" + _v3 : _v3;
    }
    return _v1;
  }, _v11.parseOneBox = function (_v0, _v1, _v2) {
    var _v3,
      _v4,
      _v5,
      _v6 = _v0.getPosition(),
      _v7 = 0;
    if (_v0.getEndPosition() - _v6 < 8) return _v5.debug("BoxParser", "Not enough data in stream to parse the type and size of the box"), {
      code: _v11.ERR_NOT_ENOUGH_DATA
    };
    if (_v2 && _v2 < 8) return _v5.debug("BoxParser", "Not enough bytes left in the parent box to parse a new box"), {
      code: _v11.ERR_NOT_ENOUGH_DATA
    };
    var _v8 = _v0.readUint32(),
      _v9 = _v0.readString(4),
      _v10 = _v9;
    if (_v5.debug("BoxParser", "Found box of type '" + _v9 + "' and size " + _v8 + " at position " + _v6), _v7 = 8, "uuid" == _v9) {
      if (_v0.getEndPosition() - _v0.getPosition() < 16 || _v2 - _v7 < 16) return _v0.seek(_v6), _v5.debug("BoxParser", "Not enough bytes left in the parent box to parse a UUID box"), {
        code: _v11.ERR_NOT_ENOUGH_DATA
      };
      _v5 = _v11.parseUUID(_v0), _v7 += 16, _v10 = _v5;
    }
    if (1 == _v8) {
      if (_v0.getEndPosition() - _v0.getPosition() < 8 || _v2 && _v2 - _v7 < 8) return _v0.seek(_v6), _v5.warn("BoxParser", 'Not enough data in stream to parse the extended size of the "' + _v9 + '" box'), {
        code: _v11.ERR_NOT_ENOUGH_DATA
      };
      _v8 = _v0.readUint64(), _v7 += 8;
    } else if (0 === _v8) {
      if (_v2) _v8 = _v2;else if ("mdat" !== _v9) return _v5.error("BoxParser", "Unlimited box size not supported for type: '" + _v9 + "'"), _v3 = new _v11.Box(_v9, _v8), {
        code: _v11.OK,
        box: _v3,
        size: _v3.size
      };
    }
    return 0 !== _v8 && _v8 < _v7 ? (_v5.error("BoxParser", "Box of type " + _v9 + " has an invalid size " + _v8 + " (too small to be a box)"), {
      code: _v11.ERR_NOT_ENOUGH_DATA,
      type: _v9,
      size: _v8,
      hdr_size: _v7,
      start: _v6
    }) : 0 !== _v8 && _v2 && _v8 > _v2 ? (_v5.error("BoxParser", "Box of type '" + _v9 + "' has a size " + _v8 + " greater than its container size " + _v2), {
      code: _v11.ERR_NOT_ENOUGH_DATA,
      type: _v9,
      size: _v8,
      hdr_size: _v7,
      start: _v6
    }) : 0 !== _v8 && _v6 + _v8 > _v0.getEndPosition() ? (_v0.seek(_v6), _v5.info("BoxParser", "Not enough data in stream to parse the entire '" + _v9 + "' box"), {
      code: _v11.ERR_NOT_ENOUGH_DATA,
      type: _v9,
      size: _v8,
      hdr_size: _v7,
      start: _v6
    }) : _v1 ? {
      code: _v11.OK,
      type: _v9,
      size: _v8,
      hdr_size: _v7,
      start: _v6
    } : (_v11[_v9 + "Box"] ? _v3 = new _v11[_v9 + "Box"](_v8) : "uuid" !== _v9 ? (_v5.warn("BoxParser", "Unknown box type: '" + _v9 + "'"), (_v3 = new _v11.Box(_v9, _v8)).has_unparsed_data = !0) : _v11.UUIDBoxes[_v5] ? _v3 = new _v11.UUIDBoxes[_v5](_v8) : (_v5.warn("BoxParser", "Unknown uuid type: '" + _v5 + "'"), (_v3 = new _v11.Box(_v9, _v8)).uuid = _v5, _v3.has_unparsed_data = !0), _v3.hdr_size = _v7, _v3.start = _v6, _v3.write === _v11.Box.prototype.write && "mdat" !== _v3.type && (_v5.info("BoxParser", "'" + _v10 + "' box writing not yet implemented, keeping unparsed data in memory for later write"), _v3.parseDataAndRewind(_v0)), _v3.parse(_v0), (_v4 = _v0.getPosition() - (_v3.start + _v3.size)) < 0 ? (_v5.warn("BoxParser", "Parsing of box '" + _v10 + "' did not read the entire indicated box data size (missing " + -_v4 + " bytes), seeking forward"), _v0.seek(_v3.start + _v3.size)) : _v4 > 0 && (_v5.error("BoxParser", "Parsing of box '" + _v10 + "' read " + _v4 + " more bytes than the indicated box data size, seeking backwards"), 0 !== _v3.size && _v0.seek(_v3.start + _v3.size)), {
      code: _v11.OK,
      box: _v3,
      size: _v3.size
    });
  }, _v11.Box.prototype.parse = function (_v0) {
    "mdat" != this.type ? this.data = _v0.readUint8Array(this.size - this.hdr_size) : 0 === this.size ? _v0.seek(_v0.getEndPosition()) : _v0.seek(this.start + this.size);
  }, _v11.Box.prototype.parseDataAndRewind = function (_v0) {
    this.data = _v0.readUint8Array(this.size - this.hdr_size), _v0.position -= this.size - this.hdr_size;
  }, _v11.FullBox.prototype.parseDataAndRewind = function (_v0) {
    this.parseFullHeader(_v0), this.data = _v0.readUint8Array(this.size - this.hdr_size), this.hdr_size -= 4, _v0.position -= this.size - this.hdr_size;
  }, _v11.FullBox.prototype.parseFullHeader = function (_v0) {
    this.version = _v0.readUint8(), this.flags = _v0.readUint24(), this.hdr_size += 4;
  }, _v11.FullBox.prototype.parse = function (_v0) {
    this.parseFullHeader(_v0), this.data = _v0.readUint8Array(this.size - this.hdr_size);
  }, _v11.ContainerBox.prototype.parse = function (_v0) {
    for (; _v0.getPosition() < this.start + this.size;) {
      if ((_v1 = _v11.parseOneBox(_v0, !1, this.size - (_v0.getPosition() - this.start))).code !== _v11.OK) return;
      if (_v2 = _v1.box, this.boxes.push(_v2), this.subBoxNames && -1 != this.subBoxNames.indexOf(_v2.type)) this[this.subBoxNames[this.subBoxNames.indexOf(_v2.type)] + "s"].push(_v2);else {
        var _v1,
          _v2,
          _v3 = "uuid" !== _v2.type ? _v2.type : _v2.uuid;
        this[_v3] ? _v5.warn("Box of type " + _v3 + " already stored in field of this type") : this[_v3] = _v2;
      }
    }
  }, _v11.Box.prototype.parseLanguage = function (_v0) {
    this.language = _v0.readUint16();
    var _v1 = [];
    _v1[0] = this.language >> 10 & 31, _v1[1] = this.language >> 5 & 31, _v1[2] = 31 & this.language, this.languageString = String.fromCharCode(_v1[0] + 96, _v1[1] + 96, _v1[2] + 96);
  }, _v11.SAMPLE_ENTRY_TYPE_VISUAL = "Visual", _v11.SAMPLE_ENTRY_TYPE_AUDIO = "Audio", _v11.SAMPLE_ENTRY_TYPE_HINT = "Hint", _v11.SAMPLE_ENTRY_TYPE_METADATA = "Metadata", _v11.SAMPLE_ENTRY_TYPE_SUBTITLE = "Subtitle", _v11.SAMPLE_ENTRY_TYPE_SYSTEM = "System", _v11.SAMPLE_ENTRY_TYPE_TEXT = "Text", _v11.SampleEntry.prototype.parseHeader = function (_v0) {
    _v0.readUint8Array(6), this.data_reference_index = _v0.readUint16(), this.hdr_size += 8;
  }, _v11.SampleEntry.prototype.parse = function (_v0) {
    this.parseHeader(_v0), this.data = _v0.readUint8Array(this.size - this.hdr_size);
  }, _v11.SampleEntry.prototype.parseDataAndRewind = function (_v0) {
    this.parseHeader(_v0), this.data = _v0.readUint8Array(this.size - this.hdr_size), this.hdr_size -= 8, _v0.position -= this.size - this.hdr_size;
  }, _v11.SampleEntry.prototype.parseFooter = function (_v0) {
    _v11.ContainerBox.prototype.parse.call(this, _v0);
  }, _v11.createMediaSampleEntryCtor(_v11.SAMPLE_ENTRY_TYPE_HINT), _v11.createMediaSampleEntryCtor(_v11.SAMPLE_ENTRY_TYPE_METADATA), _v11.createMediaSampleEntryCtor(_v11.SAMPLE_ENTRY_TYPE_SUBTITLE), _v11.createMediaSampleEntryCtor(_v11.SAMPLE_ENTRY_TYPE_SYSTEM), _v11.createMediaSampleEntryCtor(_v11.SAMPLE_ENTRY_TYPE_TEXT), _v11.createMediaSampleEntryCtor(_v11.SAMPLE_ENTRY_TYPE_VISUAL, function (_v0) {
    var _v1;
    this.parseHeader(_v0), _v0.readUint16(), _v0.readUint16(), _v0.readUint32Array(3), this.width = _v0.readUint16(), this.height = _v0.readUint16(), this.horizresolution = _v0.readUint32(), this.vertresolution = _v0.readUint32(), _v0.readUint32(), this.frame_count = _v0.readUint16(), _v1 = Math.min(31, _v0.readUint8()), this.compressorname = _v0.readString(_v1), _v1 < 31 && _v0.readString(31 - _v1), this.depth = _v0.readUint16(), _v0.readUint16(), this.parseFooter(_v0);
  }), _v11.createMediaSampleEntryCtor(_v11.SAMPLE_ENTRY_TYPE_AUDIO, function (_v0) {
    this.parseHeader(_v0), _v0.readUint32Array(2), this.channel_count = _v0.readUint16(), this.samplesize = _v0.readUint16(), _v0.readUint16(), _v0.readUint16(), this.samplerate = _v0.readUint32() / 0, this.parseFooter(_v0);
  }), _v11.createSampleEntryCtor(_v11.SAMPLE_ENTRY_TYPE_VISUAL, "avc1"), _v11.createSampleEntryCtor(_v11.SAMPLE_ENTRY_TYPE_VISUAL, "avc2"), _v11.createSampleEntryCtor(_v11.SAMPLE_ENTRY_TYPE_VISUAL, "avc3"), _v11.createSampleEntryCtor(_v11.SAMPLE_ENTRY_TYPE_VISUAL, "avc4"), _v11.createSampleEntryCtor(_v11.SAMPLE_ENTRY_TYPE_VISUAL, "av01"), _v11.createSampleEntryCtor(_v11.SAMPLE_ENTRY_TYPE_VISUAL, "dav1"), _v11.createSampleEntryCtor(_v11.SAMPLE_ENTRY_TYPE_VISUAL, "hvc1"), _v11.createSampleEntryCtor(_v11.SAMPLE_ENTRY_TYPE_VISUAL, "hev1"), _v11.createSampleEntryCtor(_v11.SAMPLE_ENTRY_TYPE_VISUAL, "hvt1"), _v11.createSampleEntryCtor(_v11.SAMPLE_ENTRY_TYPE_VISUAL, "lhe1"), _v11.createSampleEntryCtor(_v11.SAMPLE_ENTRY_TYPE_VISUAL, "dvh1"), _v11.createSampleEntryCtor(_v11.SAMPLE_ENTRY_TYPE_VISUAL, "dvhe"), _v11.createSampleEntryCtor(_v11.SAMPLE_ENTRY_TYPE_VISUAL, "vvc1"), _v11.createSampleEntryCtor(_v11.SAMPLE_ENTRY_TYPE_VISUAL, "vvi1"), _v11.createSampleEntryCtor(_v11.SAMPLE_ENTRY_TYPE_VISUAL, "vvs1"), _v11.createSampleEntryCtor(_v11.SAMPLE_ENTRY_TYPE_VISUAL, "vvcN"), _v11.createSampleEntryCtor(_v11.SAMPLE_ENTRY_TYPE_VISUAL, "vp08"), _v11.createSampleEntryCtor(_v11.SAMPLE_ENTRY_TYPE_VISUAL, "vp09"), _v11.createSampleEntryCtor(_v11.SAMPLE_ENTRY_TYPE_VISUAL, "avs3"), _v11.createSampleEntryCtor(_v11.SAMPLE_ENTRY_TYPE_VISUAL, "j2ki"), _v11.createSampleEntryCtor(_v11.SAMPLE_ENTRY_TYPE_VISUAL, "mjp2"), _v11.createSampleEntryCtor(_v11.SAMPLE_ENTRY_TYPE_VISUAL, "mjpg"), _v11.createSampleEntryCtor(_v11.SAMPLE_ENTRY_TYPE_VISUAL, "uncv"), _v11.createSampleEntryCtor(_v11.SAMPLE_ENTRY_TYPE_AUDIO, "mp4a"), _v11.createSampleEntryCtor(_v11.SAMPLE_ENTRY_TYPE_AUDIO, "ac-3"), _v11.createSampleEntryCtor(_v11.SAMPLE_ENTRY_TYPE_AUDIO, "ac-4"), _v11.createSampleEntryCtor(_v11.SAMPLE_ENTRY_TYPE_AUDIO, "ec-3"), _v11.createSampleEntryCtor(_v11.SAMPLE_ENTRY_TYPE_AUDIO, "Opus"), _v11.createSampleEntryCtor(_v11.SAMPLE_ENTRY_TYPE_AUDIO, "mha1"), _v11.createSampleEntryCtor(_v11.SAMPLE_ENTRY_TYPE_AUDIO, "mha2"), _v11.createSampleEntryCtor(_v11.SAMPLE_ENTRY_TYPE_AUDIO, "mhm1"), _v11.createSampleEntryCtor(_v11.SAMPLE_ENTRY_TYPE_AUDIO, "mhm2"), _v11.createSampleEntryCtor(_v11.SAMPLE_ENTRY_TYPE_AUDIO, "fLaC"), _v11.createEncryptedSampleEntryCtor(_v11.SAMPLE_ENTRY_TYPE_VISUAL, "encv"), _v11.createEncryptedSampleEntryCtor(_v11.SAMPLE_ENTRY_TYPE_AUDIO, "enca"), _v11.createEncryptedSampleEntryCtor(_v11.SAMPLE_ENTRY_TYPE_SUBTITLE, "encu"), _v11.createEncryptedSampleEntryCtor(_v11.SAMPLE_ENTRY_TYPE_SYSTEM, "encs"), _v11.createEncryptedSampleEntryCtor(_v11.SAMPLE_ENTRY_TYPE_TEXT, "enct"), _v11.createEncryptedSampleEntryCtor(_v11.SAMPLE_ENTRY_TYPE_METADATA, "encm"), _v11.createBoxCtor("a1lx", function (_v0) {
    var _v1 = ((1 & (1 & _v0.readUint8())) + 1) * 16;
    this.layer_size = [];
    for (var _v2 = 0; _v2 < 3; _v2++) 16 == _v1 ? this.layer_size[_v2] = _v0.readUint16() : this.layer_size[_v2] = _v0.readUint32();
  }), _v11.createBoxCtor("a1op", function (_v0) {
    this.op_index = _v0.readUint8();
  }), _v11.createFullBoxCtor("auxC", function (_v0) {
    this.aux_type = _v0.readCString();
    var _v1 = this.size - this.hdr_size - (this.aux_type.length + 1);
    this.aux_subtype = _v0.readUint8Array(_v1);
  }), _v11.createBoxCtor("av1C", function (_v0) {
    var _v1 = _v0.readUint8();
    if (_v1 >> 7 & !1) return void _v5.error("av1C marker problem");
    if (this.version = 127 & _v1, 1 !== this.version) return void _v5.error("av1C version " + this.version + " not supported");
    if (_v1 = _v0.readUint8(), this.seq_profile = _v1 >> 5 & 7, this.seq_level_idx_0 = 31 & _v1, _v1 = _v0.readUint8(), this.seq_tier_0 = _v1 >> 7 & 1, this.high_bitdepth = _v1 >> 6 & 1, this.twelve_bit = _v1 >> 5 & 1, this.monochrome = _v1 >> 4 & 1, this.chroma_subsampling_x = _v1 >> 3 & 1, this.chroma_subsampling_y = _v1 >> 2 & 1, this.chroma_sample_position = 3 & _v1, _v1 = _v0.readUint8(), this.reserved_1 = _v1 >> 5 & 7, 0 !== this.reserved_1) return void _v5.error("av1C reserved_1 parsing problem");
    if (this.initial_presentation_delay_present = _v1 >> 4 & 1, 1 === this.initial_presentation_delay_present) this.initial_presentation_delay_minus_one = 15 & _v1;else if (this.reserved_2 = 15 & _v1, 0 !== this.reserved_2) return void _v5.error("av1C reserved_2 parsing problem");
    var _v2 = this.size - this.hdr_size - 4;
    this.configOBUs = _v0.readUint8Array(_v2);
  }), _v11.createBoxCtor("avcC", function (_v0) {
    var _v1, _v2;
    for (this.configurationVersion = _v0.readUint8(), this.AVCProfileIndication = _v0.readUint8(), this.profile_compatibility = _v0.readUint8(), this.AVCLevelIndication = _v0.readUint8(), this.lengthSizeMinusOne = 3 & _v0.readUint8(), this.nb_SPS_nalus = 31 & _v0.readUint8(), _v2 = this.size - this.hdr_size - 6, this.SPS = [], _v1 = 0; _v1 < this.nb_SPS_nalus; _v1++) this.SPS[_v1] = {}, this.SPS[_v1].length = _v0.readUint16(), this.SPS[_v1].nalu = _v0.readUint8Array(this.SPS[_v1].length), _v2 -= 2 + this.SPS[_v1].length;
    for (this.nb_PPS_nalus = _v0.readUint8(), _v2--, this.PPS = [], _v1 = 0; _v1 < this.nb_PPS_nalus; _v1++) this.PPS[_v1] = {}, this.PPS[_v1].length = _v0.readUint16(), this.PPS[_v1].nalu = _v0.readUint8Array(this.PPS[_v1].length), _v2 -= 2 + this.PPS[_v1].length;
    _v2 > 0 && (this.ext = _v0.readUint8Array(_v2));
  }), _v11.createBoxCtor("btrt", function (_v0) {
    this.bufferSizeDB = _v0.readUint32(), this.maxBitrate = _v0.readUint32(), this.avgBitrate = _v0.readUint32();
  }), _v11.createFullBoxCtor("ccst", function (_v0) {
    var _v1 = _v0.readUint8();
    this.all_ref_pics_intra = (128 & _v1) == 128, this.intra_pred_used = (64 & _v1) == 64, this.max_ref_per_pic = (63 & _v1) >> 2, _v0.readUint24();
  }), _v11.createBoxCtor("cdef", function (_v0) {
    var _v1;
    for (this.channel_count = _v0.readUint16(), this.channel_indexes = [], this.channel_types = [], this.channel_associations = [], _v1 = 0; _v1 < this.channel_count; _v1++) this.channel_indexes.push(_v0.readUint16()), this.channel_types.push(_v0.readUint16()), this.channel_associations.push(_v0.readUint16());
  }), _v11.createBoxCtor("clap", function (_v0) {
    this.cleanApertureWidthN = _v0.readUint32(), this.cleanApertureWidthD = _v0.readUint32(), this.cleanApertureHeightN = _v0.readUint32(), this.cleanApertureHeightD = _v0.readUint32(), this.horizOffN = _v0.readUint32(), this.horizOffD = _v0.readUint32(), this.vertOffN = _v0.readUint32(), this.vertOffD = _v0.readUint32();
  }), _v11.createBoxCtor("clli", function (_v0) {
    this.max_content_light_level = _v0.readUint16(), this.max_pic_average_light_level = _v0.readUint16();
  }), _v11.createFullBoxCtor("cmex", function (_v0) {
    1 & this.flags && (this.pos_x = _v0.readInt32()), 2 & this.flags && (this.pos_y = _v0.readInt32()), 4 & this.flags && (this.pos_z = _v0.readInt32()), 8 & this.flags && (0 == this.version ? 16 & this.flags ? (this.quat_x = _v0.readInt32(), this.quat_y = _v0.readInt32(), this.quat_z = _v0.readInt32()) : (this.quat_x = _v0.readInt16(), this.quat_y = _v0.readInt16(), this.quat_z = _v0.readInt16()) : this.version), 32 & this.flags && (this.id = _v0.readUint32());
  }), _v11.createFullBoxCtor("cmin", function (_v0) {
    this.focal_length_x = _v0.readInt32(), this.principal_point_x = _v0.readInt32(), this.principal_point_y = _v0.readInt32(), 1 & this.flags && (this.focal_length_y = _v0.readInt32(), this.skew_factor = _v0.readInt32());
  }), _v11.createBoxCtor("cmpd", function (_v0) {
    for (this.component_count = _v0.readUint32(), this.component_types = [], this.component_type_urls = [], i = 0; i < this.component_count; i++) {
      var _v1 = _v0.readUint16();
      this.component_types.push(_v1), _v1 >= 0 && this.component_type_urls.push(_v0.readCString());
    }
  }), _v11.createFullBoxCtor("co64", function (_v0) {
    var _v1, _v2;
    if (_v1 = _v0.readUint32(), this.chunk_offsets = [], 0 === this.version) for (_v2 = 0; _v2 < _v1; _v2++) this.chunk_offsets.push(_v0.readUint64());
  }), _v11.createFullBoxCtor("CoLL", function (_v0) {
    this.maxCLL = _v0.readUint16(), this.maxFALL = _v0.readUint16();
  }), _v11.createBoxCtor("colr", function (_v0) {
    if (this.colour_type = _v0.readString(4), "nclx" === this.colour_type) {
      this.colour_primaries = _v0.readUint16(), this.transfer_characteristics = _v0.readUint16(), this.matrix_coefficients = _v0.readUint16();
      var _v1 = _v0.readUint8();
      this.full_range_flag = _v1 >> 7;
    } else "rICC" === this.colour_type ? this.ICC_profile = _v0.readUint8Array(this.size - 4) : "prof" === this.colour_type && (this.ICC_profile = _v0.readUint8Array(this.size - 4));
  }), _v11.createFullBoxCtor("cprt", function (_v0) {
    this.parseLanguage(_v0), this.notice = _v0.readCString();
  }), _v11.createFullBoxCtor("cslg", function (_v0) {
    0 === this.version && (this.compositionToDTSShift = _v0.readInt32(), this.leastDecodeToDisplayDelta = _v0.readInt32(), this.greatestDecodeToDisplayDelta = _v0.readInt32(), this.compositionStartTime = _v0.readInt32(), this.compositionEndTime = _v0.readInt32());
  }), _v11.createFullBoxCtor("ctts", function (_v0) {
    if (_v1 = _v0.readUint32(), this.sample_counts = [], this.sample_offsets = [], 0 === this.version) for (_v2 = 0; _v2 < _v1; _v2++) {
      this.sample_counts.push(_v0.readUint32());
      var _v1,
        _v2,
        _v3 = _v0.readInt32();
      _v3 < 0 && _v5.warn("BoxParser", "ctts box uses negative values without using version 1"), this.sample_offsets.push(_v3);
    } else if (1 == this.version) for (_v2 = 0; _v2 < _v1; _v2++) this.sample_counts.push(_v0.readUint32()), this.sample_offsets.push(_v0.readInt32());
  }), _v11.createBoxCtor("dac3", function (_v0) {
    var _v1 = _v0.readUint8(),
      _v2 = _v0.readUint8(),
      _v3 = _v0.readUint8();
    this.fscod = _v1 >> 6, this.bsid = _v1 >> 1 & 31, this.bsmod = (1 & _v1) << 2 | _v2 >> 6 & 3, this.acmod = _v2 >> 3 & 7, this.lfeon = _v2 >> 2 & 1, this.bit_rate_code = 3 & _v2 | _v3 >> 5 & 7;
  }), _v11.createBoxCtor("dec3", function (_v0) {
    var _v1 = _v0.readUint16();
    this.data_rate = _v1 >> 3, this.num_ind_sub = 7 & _v1, this.ind_subs = [];
    for (var _v2 = 0; _v2 < this.num_ind_sub + 1; _v2++) {
      var _v3 = {};
      this.ind_subs.push(_v3);
      var _v4 = _v0.readUint8(),
        _v5 = _v0.readUint8(),
        _v6 = _v0.readUint8();
      _v3.fscod = _v4 >> 6, _v3.bsid = _v4 >> 1 & 31, _v3.bsmod = (1 & _v4) << 4 | _v5 >> 4 & 15, _v3.acmod = _v5 >> 1 & 7, _v3.lfeon = 1 & _v5, _v3.num_dep_sub = _v6 >> 1 & 15, _v3.num_dep_sub > 0 && (_v3.chan_loc = (1 & _v6) << 8 | _v0.readUint8());
    }
  }), _v11.createFullBoxCtor("dfLa", function (_v0) {
    for (var _v1 = [], _v2 = ["STREAMINFO", "PADDING", "APPLICATION", "SEEKTABLE", "VORBIS_COMMENT", "CUESHEET", "PICTURE", "RESERVED"];;) {
      var _v3 = _v0.readUint8(),
        _v4 = Math.min(127 & _v3, _v2.length - 1);
      if (_v4 ? _v0.readUint8Array(_v0.readUint24()) : (_v0.readUint8Array(13), this.samplerate = _v0.readUint32() >> 12, _v0.readUint8Array(20)), _v1.push(_v2[_v4]), 128 & _v3) break;
    }
    this.numMetadataBlocks = _v1.length + " (" + _v1.join(", ") + ")";
  }), _v11.createBoxCtor("dimm", function (_v0) {
    this.bytessent = _v0.readUint64();
  }), _v11.createBoxCtor("dmax", function (_v0) {
    this.time = _v0.readUint32();
  }), _v11.createBoxCtor("dmed", function (_v0) {
    this.bytessent = _v0.readUint64();
  }), _v11.createBoxCtor("dOps", function (_v0) {
    if (this.Version = _v0.readUint8(), this.OutputChannelCount = _v0.readUint8(), this.PreSkip = _v0.readUint16(), this.InputSampleRate = _v0.readUint32(), this.OutputGain = _v0.readInt16(), this.ChannelMappingFamily = _v0.readUint8(), 0 !== this.ChannelMappingFamily) {
      this.StreamCount = _v0.readUint8(), this.CoupledCount = _v0.readUint8(), this.ChannelMapping = [];
      for (var _v1 = 0; _v1 < this.OutputChannelCount; _v1++) this.ChannelMapping[_v1] = _v0.readUint8();
    }
  }), _v11.createFullBoxCtor("dref", function (_v0) {
    this.entries = [];
    for (var _v1, _v2, _v3 = _v0.readUint32(), _v4 = 0; _v4 < _v3; _v4++) {
      if ((_v1 = _v11.parseOneBox(_v0, !1, this.size - (_v0.getPosition() - this.start))).code !== _v11.OK) return;
      _v2 = _v1.box, this.entries.push(_v2);
    }
  }), _v11.createBoxCtor("drep", function (_v0) {
    this.bytessent = _v0.readUint64();
  }), _v11.createFullBoxCtor("elng", function (_v0) {
    this.extended_language = _v0.readString(this.size - this.hdr_size);
  }), _v11.createFullBoxCtor("elst", function (_v0) {
    this.entries = [];
    for (var _v1 = _v0.readUint32(), _v2 = 0; _v2 < _v1; _v2++) {
      var _v3 = {};
      this.entries.push(_v3), 1 === this.version ? (_v3.segment_duration = _v0.readUint64(), _v3.media_time = _v0.readInt64()) : (_v3.segment_duration = _v0.readUint32(), _v3.media_time = _v0.readInt32()), _v3.media_rate_integer = _v0.readInt16(), _v3.media_rate_fraction = _v0.readInt16();
    }
  }), _v11.createFullBoxCtor("emsg", function (_v0) {
    1 == this.version ? (this.timescale = _v0.readUint32(), this.presentation_time = _v0.readUint64(), this.event_duration = _v0.readUint32(), this.id = _v0.readUint32(), this.scheme_id_uri = _v0.readCString(), this.value = _v0.readCString()) : (this.scheme_id_uri = _v0.readCString(), this.value = _v0.readCString(), this.timescale = _v0.readUint32(), this.presentation_time_delta = _v0.readUint32(), this.event_duration = _v0.readUint32(), this.id = _v0.readUint32());
    var _v1 = this.size - this.hdr_size - (16 + (this.scheme_id_uri.length + 1) + (this.value.length + 1));
    1 == this.version && (_v1 -= 4), this.message_data = _v0.readUint8Array(_v1);
  }), _v11.createEntityToGroupCtor = function (_v0, _v1) {
    _v11[_v0 + "Box"] = function (_v0) {
      _v11.FullBox.call(this, _v0, _v0);
    }, _v11[_v0 + "Box"].prototype = new _v11.FullBox(), _v11[_v0 + "Box"].prototype.parse = function (_v0) {
      if (this.parseFullHeader(_v0), _v1) _v1.call(this, _v0);else for (this.group_id = _v0.readUint32(), this.num_entities_in_group = _v0.readUint32(), this.entity_ids = [], i = 0; i < this.num_entities_in_group; i++) {
        var _v1 = _v0.readUint32();
        this.entity_ids.push(_v1);
      }
    };
  }, _v11.createEntityToGroupCtor("aebr"), _v11.createEntityToGroupCtor("afbr"), _v11.createEntityToGroupCtor("albc"), _v11.createEntityToGroupCtor("altr"), _v11.createEntityToGroupCtor("brst"), _v11.createEntityToGroupCtor("dobr"), _v11.createEntityToGroupCtor("eqiv"), _v11.createEntityToGroupCtor("favc"), _v11.createEntityToGroupCtor("fobr"), _v11.createEntityToGroupCtor("iaug"), _v11.createEntityToGroupCtor("pano"), _v11.createEntityToGroupCtor("slid"), _v11.createEntityToGroupCtor("ster"), _v11.createEntityToGroupCtor("tsyn"), _v11.createEntityToGroupCtor("wbbr"), _v11.createEntityToGroupCtor("prgr"), _v11.createEntityToGroupCtor("pymd", function (_v0) {
    this.group_id = _v0.readUint32(), this.num_entities_in_group = _v0.readUint32(), this.entity_ids = [];
    for (var _v1 = 0; _v1 < this.num_entities_in_group; _v1++) {
      var _v2 = _v0.readUint32();
      this.entity_ids.push(_v2);
    }
    for (this.tile_size_x = _v0.readUint16(), this.tile_size_y = _v0.readUint16(), this.layer_binning = [], this.tiles_in_layer_column_minus1 = [], this.tiles_in_layer_row_minus1 = [], _v1 = 0; _v1 < this.num_entities_in_group; _v1++) this.layer_binning[_v1] = _v0.readUint16(), this.tiles_in_layer_row_minus1[_v1] = _v0.readUint16(), this.tiles_in_layer_column_minus1[_v1] = _v0.readUint16();
  }), _v11.createFullBoxCtor("esds", function (_v0) {
    var _v1 = _v0.readUint8Array(this.size - this.hdr_size);
    if (void 0 !== _v10) {
      var _v2 = new _v10();
      this.esd = _v2.parseOneDescriptor(new _v7(_v1.buffer, 0, _v7.BIG_ENDIAN));
    }
  }), _v11.createBoxCtor("fiel", function (_v0) {
    this.fieldCount = _v0.readUint8(), this.fieldOrdering = _v0.readUint8();
  }), _v11.createBoxCtor("frma", function (_v0) {
    this.data_format = _v0.readString(4);
  }), _v11.createBoxCtor("ftyp", function (_v0) {
    var _v1 = this.size - this.hdr_size;
    this.major_brand = _v0.readString(4), this.minor_version = _v0.readUint32(), _v1 -= 8, this.compatible_brands = [];
    for (var _v2 = 0; _v1 >= 4;) this.compatible_brands[_v2] = _v0.readString(4), _v1 -= 4, _v2++;
  }), _v11.createFullBoxCtor("hdlr", function (_v0) {
    0 === this.version && (_v0.readUint32(), this.handler = _v0.readString(4), _v0.readUint32Array(3), this.name = _v0.readString(this.size - this.hdr_size - 20), "\0" === this.name[this.name.length - 1] && (this.name = this.name.slice(0, -1)));
  }), _v11.createBoxCtor("hvcC", function (_v0) {
    this.configurationVersion = _v0.readUint8(), _v4 = _v0.readUint8(), this.general_profile_space = _v4 >> 6, this.general_tier_flag = (32 & _v4) >> 5, this.general_profile_idc = 31 & _v4, this.general_profile_compatibility = _v0.readUint32(), this.general_constraint_indicator = _v0.readUint8Array(6), this.general_level_idc = _v0.readUint8(), this.min_spatial_segmentation_idc = 0 & _v0.readUint16(), this.parallelismType = 3 & _v0.readUint8(), this.chroma_format_idc = 3 & _v0.readUint8(), this.bit_depth_luma_minus8 = 7 & _v0.readUint8(), this.bit_depth_chroma_minus8 = 7 & _v0.readUint8(), this.avgFrameRate = _v0.readUint16(), _v4 = _v0.readUint8(), this.constantFrameRate = _v4 >> 6, this.numTemporalLayers = (13 & _v4) >> 3, this.temporalIdNested = (4 & _v4) >> 2, this.lengthSizeMinusOne = 3 & _v4, this.nalu_arrays = [];
    var _v1,
      _v2,
      _v3,
      _v4,
      _v5 = _v0.readUint8();
    for (_v1 = 0; _v1 < _v5; _v1++) {
      var _v6 = [];
      this.nalu_arrays.push(_v6), _v6.completeness = (128 & (_v4 = _v0.readUint8())) >> 7, _v6.nalu_type = 63 & _v4;
      var _v7 = _v0.readUint16();
      for (_v2 = 0; _v2 < _v7; _v2++) {
        var _v8 = {};
        _v6.push(_v8), _v3 = _v0.readUint16(), _v8.data = _v0.readUint8Array(_v3);
      }
    }
  }), _v11.createFullBoxCtor("iinf", function (_v0) {
    var _v1;
    0 === this.version ? this.entry_count = _v0.readUint16() : this.entry_count = _v0.readUint32(), this.item_infos = [];
    for (var _v2 = 0; _v2 < this.entry_count; _v2++) {
      if ((_v1 = _v11.parseOneBox(_v0, !1, this.size - (_v0.getPosition() - this.start))).code !== _v11.OK) return;
      "infe" !== _v1.box.type && _v5.error("BoxParser", "Expected 'infe' box, got " + _v1.box.type), this.item_infos[_v2] = _v1.box;
    }
  }), _v11.createFullBoxCtor("iloc", function (_v0) {
    _v1 = _v0.readUint8(), this.offset_size = _v1 >> 4 & 15, this.length_size = 15 & _v1, _v1 = _v0.readUint8(), this.base_offset_size = _v1 >> 4 & 15, 1 === this.version || 2 === this.version ? this.index_size = 15 & _v1 : this.index_size = 0, this.items = [];
    var _v1,
      _v2 = 0;
    if (this.version < 2) _v2 = _v0.readUint16();else if (2 === this.version) _v2 = _v0.readUint32();else throw "version of iloc box not supported";
    for (var _v3 = 0; _v3 < _v2; _v3++) {
      var _v4 = {};
      if (this.items.push(_v4), this.version < 2) _v4.item_ID = _v0.readUint16();else if (2 === this.version) _v4.item_ID = _v0.readUint32();else throw "version of iloc box not supported";
      switch (1 === this.version || 2 === this.version ? _v4.construction_method = 15 & _v0.readUint16() : _v4.construction_method = 0, _v4.data_reference_index = _v0.readUint16(), this.base_offset_size) {
        case 0:
          _v4.base_offset = 0;
          break;
        case 4:
          _v4.base_offset = _v0.readUint32();
          break;
        case 8:
          _v4.base_offset = _v0.readUint64();
          break;
        default:
          throw "Error reading base offset size";
      }
      var _v5 = _v0.readUint16();
      _v4.extents = [];
      for (var _v6 = 0; _v6 < _v5; _v6++) {
        var _v7 = {};
        if (_v4.extents.push(_v7), 1 === this.version || 2 === this.version) switch (this.index_size) {
          case 0:
            _v7.extent_index = 0;
            break;
          case 4:
            _v7.extent_index = _v0.readUint32();
            break;
          case 8:
            _v7.extent_index = _v0.readUint64();
            break;
          default:
            throw "Error reading extent index";
        }
        switch (this.offset_size) {
          case 0:
            _v7.extent_offset = 0;
            break;
          case 4:
            _v7.extent_offset = _v0.readUint32();
            break;
          case 8:
            _v7.extent_offset = _v0.readUint64();
            break;
          default:
            throw "Error reading extent index";
        }
        switch (this.length_size) {
          case 0:
            _v7.extent_length = 0;
            break;
          case 4:
            _v7.extent_length = _v0.readUint32();
            break;
          case 8:
            _v7.extent_length = _v0.readUint64();
            break;
          default:
            throw "Error reading extent index";
        }
      }
    }
  }), _v11.createBoxCtor("imir", function (_v0) {
    var _v1 = _v0.readUint8();
    this.reserved = _v1 >> 7, this.axis = 1 & _v1;
  }), _v11.createFullBoxCtor("infe", function (_v0) {
    if ((0 === this.version || 1 === this.version) && (this.item_ID = _v0.readUint16(), this.item_protection_index = _v0.readUint16(), this.item_name = _v0.readCString(), this.content_type = _v0.readCString(), this.content_encoding = _v0.readCString()), 1 === this.version) {
      this.extension_type = _v0.readString(4), _v5.warn("BoxParser", "Cannot parse extension type"), _v0.seek(this.start + this.size);
      return;
    }
    this.version >= 2 && (2 === this.version ? this.item_ID = _v0.readUint16() : 3 === this.version && (this.item_ID = _v0.readUint32()), this.item_protection_index = _v0.readUint16(), this.item_type = _v0.readString(4), this.item_name = _v0.readCString(), "mime" === this.item_type ? (this.content_type = _v0.readCString(), this.content_encoding = _v0.readCString()) : "uri " === this.item_type && (this.item_uri_type = _v0.readCString()));
  }), _v11.createFullBoxCtor("ipma", function (_v0) {
    var _v1, _v2;
    for (entry_count = _v0.readUint32(), this.associations = [], _v1 = 0; _v1 < entry_count; _v1++) {
      var _v3 = {};
      this.associations.push(_v3), this.version < 1 ? _v3.id = _v0.readUint16() : _v3.id = _v0.readUint32();
      var _v4 = _v0.readUint8();
      for (_v3.props = [], _v2 = 0; _v2 < _v4; _v2++) {
        var _v5 = _v0.readUint8(),
          _v6 = {};
        _v3.props.push(_v6), _v6.essential = (128 & _v5) >> 7 == 1, 1 & this.flags ? _v6.property_index = (127 & _v5) << 8 | _v0.readUint8() : _v6.property_index = 127 & _v5;
      }
    }
  }), _v11.createFullBoxCtor("iref", function (_v0) {
    var _v1, _v2;
    for (this.references = []; _v0.getPosition() < this.start + this.size;) {
      if ((_v1 = _v11.parseOneBox(_v0, !0, this.size - (_v0.getPosition() - this.start))).code !== _v11.OK) return;
      (_v2 = 0 === this.version ? new _v11.SingleItemTypeReferenceBox(_v1.type, _v1.size, _v1.hdr_size, _v1.start) : new _v11.SingleItemTypeReferenceBoxLarge(_v1.type, _v1.size, _v1.hdr_size, _v1.start)).write === _v11.Box.prototype.write && "mdat" !== _v2.type && (_v5.warn("BoxParser", _v2.type + " box writing not yet implemented, keeping unparsed data in memory for later write"), _v2.parseDataAndRewind(_v0)), _v2.parse(_v0), this.references.push(_v2);
    }
  }), _v11.createBoxCtor("irot", function (_v0) {
    this.angle = 3 & _v0.readUint8();
  }), _v11.createFullBoxCtor("ispe", function (_v0) {
    this.image_width = _v0.readUint32(), this.image_height = _v0.readUint32();
  }), _v11.createFullBoxCtor("kind", function (_v0) {
    this.schemeURI = _v0.readCString(), this.value = _v0.readCString();
  }), _v11.createFullBoxCtor("leva", function (_v0) {
    var _v1 = _v0.readUint8();
    this.levels = [];
    for (var _v2 = 0; _v2 < _v1; _v2++) {
      var _v3 = {};
      this.levels[_v2] = _v3, _v3.track_ID = _v0.readUint32();
      var _v4 = _v0.readUint8();
      switch (_v3.padding_flag = _v4 >> 7, _v3.assignment_type = 127 & _v4, _v3.assignment_type) {
        case 0:
          _v3.grouping_type = _v0.readString(4);
          break;
        case 1:
          _v3.grouping_type = _v0.readString(4), _v3.grouping_type_parameter = _v0.readUint32();
          break;
        case 2:
        case 3:
          break;
        case 4:
          _v3.sub_track_id = _v0.readUint32();
          break;
        default:
          _v5.warn("BoxParser", "Unknown leva assignement type");
      }
    }
  }), _v11.createBoxCtor("lhvC", function (_v0) {
    this.configurationVersion = _v0.readUint8(), this.min_spatial_segmentation_idc = 0 & _v0.readUint16(), this.parallelismType = 3 & _v0.readUint8(), _v3 = _v0.readUint8(), this.numTemporalLayers = (13 & _v3) >> 3, this.temporalIdNested = (4 & _v3) >> 2, this.lengthSizeMinusOne = 3 & _v3, this.nalu_arrays = [];
    var _v1,
      _v2,
      _v3,
      _v4 = _v0.readUint8();
    for (_v1 = 0; _v1 < _v4; _v1++) {
      var _v5 = [];
      this.nalu_arrays.push(_v5), _v5.completeness = (128 & (_v3 = _v0.readUint8())) >> 7, _v5.nalu_type = 63 & _v3;
      var _v6 = _v0.readUint16();
      for (_v2 = 0; _v2 < _v6; _v2++) {
        var _v7 = {};
        _v5.push(_v7);
        var _v8 = _v0.readUint16();
        _v7.data = _v0.readUint8Array(_v8);
      }
    }
  }), _v11.createBoxCtor("lsel", function (_v0) {
    this.layer_id = _v0.readUint16();
  }), _v11.createBoxCtor("maxr", function (_v0) {
    this.period = _v0.readUint32(), this.bytes = _v0.readUint32();
  }), _v12.prototype.toString = function () {
    return "(" + this.x + "," + this.y + ")";
  }, _v11.createBoxCtor("mdcv", function (_v0) {
    this.display_primaries = [], this.display_primaries[0] = new _v12(_v0.readUint16(), _v0.readUint16()), this.display_primaries[1] = new _v12(_v0.readUint16(), _v0.readUint16()), this.display_primaries[2] = new _v12(_v0.readUint16(), _v0.readUint16()), this.white_point = new _v12(_v0.readUint16(), _v0.readUint16()), this.max_display_mastering_luminance = _v0.readUint32(), this.min_display_mastering_luminance = _v0.readUint32();
  }), _v11.createFullBoxCtor("mdhd", function (_v0) {
    1 == this.version ? (this.creation_time = _v0.readUint64(), this.modification_time = _v0.readUint64(), this.timescale = _v0.readUint32(), this.duration = _v0.readUint64()) : (this.creation_time = _v0.readUint32(), this.modification_time = _v0.readUint32(), this.timescale = _v0.readUint32(), this.duration = _v0.readUint32()), this.parseLanguage(_v0), _v0.readUint16();
  }), _v11.createFullBoxCtor("mehd", function (_v0) {
    1 & this.flags && (_v5.warn("BoxParser", "mehd box incorrectly uses flags set to 1, converting version to 1"), this.version = 1), 1 == this.version ? this.fragment_duration = _v0.readUint64() : this.fragment_duration = _v0.readUint32();
  }), _v11.createFullBoxCtor("meta", function (_v0) {
    this.boxes = [], _v11.ContainerBox.prototype.parse.call(this, _v0);
  }), _v11.createFullBoxCtor("mfhd", function (_v0) {
    this.sequence_number = _v0.readUint32();
  }), _v11.createFullBoxCtor("mfro", function (_v0) {
    this._size = _v0.readUint32();
  }), _v11.createFullBoxCtor("mskC", function (_v0) {
    this.bits_per_pixel = _v0.readUint8();
  }), _v11.createFullBoxCtor("mvhd", function (_v0) {
    1 == this.version ? (this.creation_time = _v0.readUint64(), this.modification_time = _v0.readUint64(), this.timescale = _v0.readUint32(), this.duration = _v0.readUint64()) : (this.creation_time = _v0.readUint32(), this.modification_time = _v0.readUint32(), this.timescale = _v0.readUint32(), this.duration = _v0.readUint32()), this.rate = _v0.readUint32(), this.volume = _v0.readUint16() >> 8, _v0.readUint16(), _v0.readUint32Array(2), this.matrix = _v0.readUint32Array(9), _v0.readUint32Array(6), this.next_track_id = _v0.readUint32();
  }), _v11.createBoxCtor("npck", function (_v0) {
    this.packetssent = _v0.readUint32();
  }), _v11.createBoxCtor("nump", function (_v0) {
    this.packetssent = _v0.readUint64();
  }), _v11.createFullBoxCtor("padb", function (_v0) {
    var _v1 = _v0.readUint32();
    this.padbits = [];
    for (var _v2 = 0; _v2 < Math.floor((_v1 + 1) / 2); _v2++) this.padbits = _v0.readUint8();
  }), _v11.createBoxCtor("pasp", function (_v0) {
    this.hSpacing = _v0.readUint32(), this.vSpacing = _v0.readUint32();
  }), _v11.createBoxCtor("payl", function (_v0) {
    this.text = _v0.readString(this.size - this.hdr_size);
  }), _v11.createBoxCtor("payt", function (_v0) {
    this.payloadID = _v0.readUint32();
    var _v1 = _v0.readUint8();
    this.rtpmap_string = _v0.readString(_v1);
  }), _v11.createFullBoxCtor("pdin", function (_v0) {
    var _v1 = (this.size - this.hdr_size) / 8;
    this.rate = [], this.initial_delay = [];
    for (var _v2 = 0; _v2 < _v1; _v2++) this.rate[_v2] = _v0.readUint32(), this.initial_delay[_v2] = _v0.readUint32();
  }), _v11.createFullBoxCtor("pitm", function (_v0) {
    0 === this.version ? this.item_id = _v0.readUint16() : this.item_id = _v0.readUint32();
  }), _v11.createFullBoxCtor("pixi", function (_v0) {
    var _v1;
    for (this.num_channels = _v0.readUint8(), this.bits_per_channels = [], _v1 = 0; _v1 < this.num_channels; _v1++) this.bits_per_channels[_v1] = _v0.readUint8();
  }), _v11.createBoxCtor("pmax", function (_v0) {
    this.bytes = _v0.readUint32();
  }), _v11.createFullBoxCtor("prdi", function (_v0) {
    if (this.step_count = _v0.readUint16(), this.item_count = [], 2 & this.flags) for (var _v1 = 0; _v1 < this.step_count; _v1++) this.item_count[_v1] = _v0.readUint16();
  }), _v11.createFullBoxCtor("prft", function (_v0) {
    this.ref_track_id = _v0.readUint32(), this.ntp_timestamp = _v0.readUint64(), 0 === this.version ? this.media_time = _v0.readUint32() : this.media_time = _v0.readUint64();
  }), _v11.createFullBoxCtor("pssh", function (_v0) {
    if (this.system_id = _v11.parseHex16(_v0), this.version > 0) {
      var _v1 = _v0.readUint32();
      this.kid = [];
      for (var _v2 = 0; _v2 < _v1; _v2++) this.kid[_v2] = _v11.parseHex16(_v0);
    }
    var _v3 = _v0.readUint32();
    _v3 > 0 && (this.data = _v0.readUint8Array(_v3));
  }), _v11.createFullBoxCtor("clef", function (_v0) {
    this.width = _v0.readUint32(), this.height = _v0.readUint32();
  }), _v11.createFullBoxCtor("enof", function (_v0) {
    this.width = _v0.readUint32(), this.height = _v0.readUint32();
  }), _v11.createFullBoxCtor("prof", function (_v0) {
    this.width = _v0.readUint32(), this.height = _v0.readUint32();
  }), _v11.createContainerBoxCtor("tapt", null, ["clef", "prof", "enof"]), _v11.createBoxCtor("rtp ", function (_v0) {
    this.descriptionformat = _v0.readString(4), this.sdptext = _v0.readString(this.size - this.hdr_size - 4);
  }), _v11.createFullBoxCtor("saio", function (_v0) {
    1 & this.flags && (this.aux_info_type = _v0.readUint32(), this.aux_info_type_parameter = _v0.readUint32());
    var _v1 = _v0.readUint32();
    this.offset = [];
    for (var _v2 = 0; _v2 < _v1; _v2++) 0 === this.version ? this.offset[_v2] = _v0.readUint32() : this.offset[_v2] = _v0.readUint64();
  }), _v11.createFullBoxCtor("saiz", function (_v0) {
    1 & this.flags && (this.aux_info_type = _v0.readUint32(), this.aux_info_type_parameter = _v0.readUint32()), this.default_sample_info_size = _v0.readUint8();
    var _v1 = _v0.readUint32();
    if (this.sample_info_size = [], 0 === this.default_sample_info_size) for (var _v2 = 0; _v2 < _v1; _v2++) this.sample_info_size[_v2] = _v0.readUint8();
  }), _v11.createSampleEntryCtor(_v11.SAMPLE_ENTRY_TYPE_METADATA, "mett", function (_v0) {
    this.parseHeader(_v0), this.content_encoding = _v0.readCString(), this.mime_format = _v0.readCString(), this.parseFooter(_v0);
  }), _v11.createSampleEntryCtor(_v11.SAMPLE_ENTRY_TYPE_METADATA, "metx", function (_v0) {
    this.parseHeader(_v0), this.content_encoding = _v0.readCString(), this.namespace = _v0.readCString(), this.schema_location = _v0.readCString(), this.parseFooter(_v0);
  }), _v11.createSampleEntryCtor(_v11.SAMPLE_ENTRY_TYPE_SUBTITLE, "sbtt", function (_v0) {
    this.parseHeader(_v0), this.content_encoding = _v0.readCString(), this.mime_format = _v0.readCString(), this.parseFooter(_v0);
  }), _v11.createSampleEntryCtor(_v11.SAMPLE_ENTRY_TYPE_SUBTITLE, "stpp", function (_v0) {
    this.parseHeader(_v0), this.namespace = _v0.readCString(), this.schema_location = _v0.readCString(), this.auxiliary_mime_types = _v0.readCString(), this.parseFooter(_v0);
  }), _v11.createSampleEntryCtor(_v11.SAMPLE_ENTRY_TYPE_SUBTITLE, "stxt", function (_v0) {
    this.parseHeader(_v0), this.content_encoding = _v0.readCString(), this.mime_format = _v0.readCString(), this.parseFooter(_v0);
  }), _v11.createSampleEntryCtor(_v11.SAMPLE_ENTRY_TYPE_SUBTITLE, "tx3g", function (_v0) {
    this.parseHeader(_v0), this.displayFlags = _v0.readUint32(), this.horizontal_justification = _v0.readInt8(), this.vertical_justification = _v0.readInt8(), this.bg_color_rgba = _v0.readUint8Array(4), this.box_record = _v0.readInt16Array(4), this.style_record = _v0.readUint8Array(12), this.parseFooter(_v0);
  }), _v11.createSampleEntryCtor(_v11.SAMPLE_ENTRY_TYPE_METADATA, "wvtt", function (_v0) {
    this.parseHeader(_v0), this.parseFooter(_v0);
  }), _v11.createSampleGroupCtor("alst", function (_v0) {
    var _v1,
      _v2 = _v0.readUint16();
    for (this.first_output_sample = _v0.readUint16(), this.sample_offset = [], _v1 = 0; _v1 < _v2; _v1++) this.sample_offset[_v1] = _v0.readUint32();
    var _v3 = this.description_length - 4 - 4 * _v2;
    for (this.num_output_samples = [], this.num_total_samples = [], _v1 = 0; _v1 < _v3 / 4; _v1++) this.num_output_samples[_v1] = _v0.readUint16(), this.num_total_samples[_v1] = _v0.readUint16();
  }), _v11.createSampleGroupCtor("avll", function (_v0) {
    this.layerNumber = _v0.readUint8(), this.accurateStatisticsFlag = _v0.readUint8(), this.avgBitRate = _v0.readUint16(), this.avgFrameRate = _v0.readUint16();
  }), _v11.createSampleGroupCtor("avss", function (_v0) {
    this.subSequenceIdentifier = _v0.readUint16(), this.layerNumber = _v0.readUint8();
    var _v1 = _v0.readUint8();
    this.durationFlag = _v1 >> 7, this.avgRateFlag = _v1 >> 6 & 1, this.durationFlag && (this.duration = _v0.readUint32()), this.avgRateFlag && (this.accurateStatisticsFlag = _v0.readUint8(), this.avgBitRate = _v0.readUint16(), this.avgFrameRate = _v0.readUint16()), this.dependency = [];
    for (var _v2 = _v0.readUint8(), _v3 = 0; _v3 < _v2; _v3++) {
      var _v4 = {};
      this.dependency.push(_v4), _v4.subSeqDirectionFlag = _v0.readUint8(), _v4.layerNumber = _v0.readUint8(), _v4.subSequenceIdentifier = _v0.readUint16();
    }
  }), _v11.createSampleGroupCtor("dtrt", function (_v0) {
    _v5.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
  }), _v11.createSampleGroupCtor("mvif", function (_v0) {
    _v5.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
  }), _v11.createSampleGroupCtor("prol", function (_v0) {
    this.roll_distance = _v0.readInt16();
  }), _v11.createSampleGroupCtor("rap ", function (_v0) {
    var _v1 = _v0.readUint8();
    this.num_leading_samples_known = _v1 >> 7, this.num_leading_samples = 127 & _v1;
  }), _v11.createSampleGroupCtor("rash", function (_v0) {
    if (this.operation_point_count = _v0.readUint16(), this.description_length !== 2 + (1 === this.operation_point_count ? 2 : 6 * this.operation_point_count) + 9) _v5.warn("BoxParser", "Mismatch in " + this.grouping_type + " sample group length"), this.data = _v0.readUint8Array(this.description_length - 2);else {
      if (1 === this.operation_point_count) this.target_rate_share = _v0.readUint16();else {
        this.target_rate_share = [], this.available_bitrate = [];
        for (var _v1 = 0; _v1 < this.operation_point_count; _v1++) this.available_bitrate[_v1] = _v0.readUint32(), this.target_rate_share[_v1] = _v0.readUint16();
      }
      this.maximum_bitrate = _v0.readUint32(), this.minimum_bitrate = _v0.readUint32(), this.discard_priority = _v0.readUint8();
    }
  }), _v11.createSampleGroupCtor("roll", function (_v0) {
    this.roll_distance = _v0.readInt16();
  }), _v11.SampleGroupEntry.prototype.parse = function (_v0) {
    _v5.warn("BoxParser", "Unknown Sample Group type: " + this.grouping_type), this.data = _v0.readUint8Array(this.description_length);
  }, _v11.createSampleGroupCtor("scif", function (_v0) {
    _v5.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
  }), _v11.createSampleGroupCtor("scnm", function (_v0) {
    _v5.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
  }), _v11.createSampleGroupCtor("seig", function (_v0) {
    this.reserved = _v0.readUint8();
    var _v1 = _v0.readUint8();
    this.crypt_byte_block = _v1 >> 4, this.skip_byte_block = 15 & _v1, this.isProtected = _v0.readUint8(), this.Per_Sample_IV_Size = _v0.readUint8(), this.KID = _v11.parseHex16(_v0), this.constant_IV_size = 0, this.constant_IV = 0, 1 === this.isProtected && 0 === this.Per_Sample_IV_Size && (this.constant_IV_size = _v0.readUint8(), this.constant_IV = _v0.readUint8Array(this.constant_IV_size));
  }), _v11.createSampleGroupCtor("stsa", function (_v0) {
    _v5.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
  }), _v11.createSampleGroupCtor("sync", function (_v0) {
    var _v1 = _v0.readUint8();
    this.NAL_unit_type = 63 & _v1;
  }), _v11.createSampleGroupCtor("tele", function (_v0) {
    var _v1 = _v0.readUint8();
    this.level_independently_decodable = _v1 >> 7;
  }), _v11.createSampleGroupCtor("tsas", function (_v0) {
    _v5.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
  }), _v11.createSampleGroupCtor("tscl", function (_v0) {
    _v5.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
  }), _v11.createSampleGroupCtor("vipr", function (_v0) {
    _v5.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
  }), _v11.createFullBoxCtor("sbgp", function (_v0) {
    this.grouping_type = _v0.readString(4), 1 === this.version ? this.grouping_type_parameter = _v0.readUint32() : this.grouping_type_parameter = 0, this.entries = [];
    for (var _v1 = _v0.readUint32(), _v2 = 0; _v2 < _v1; _v2++) {
      var _v3 = {};
      this.entries.push(_v3), _v3.sample_count = _v0.readInt32(), _v3.group_description_index = _v0.readInt32();
    }
  }), _v13.prototype.toString = function () {
    return "[row: " + this.bad_pixel_row + ", column: " + this.bad_pixel_column + "]";
  }, _v11.createFullBoxCtor("sbpm", function (_v0) {
    for (this.component_count = _v0.readUint16(), this.component_index = [], _v1 = 0; _v1 < this.component_count; _v1++) this.component_index.push(_v0.readUint16());
    var _v1,
      _v2 = _v0.readUint8();
    for (this.correction_applied = 128 == (128 & _v2), this.num_bad_rows = _v0.readUint32(), this.num_bad_cols = _v0.readUint32(), this.num_bad_pixels = _v0.readUint32(), this.bad_rows = [], this.bad_columns = [], this.bad_pixels = [], _v1 = 0; _v1 < this.num_bad_rows; _v1++) this.bad_rows.push(_v0.readUint32());
    for (_v1 = 0; _v1 < this.num_bad_cols; _v1++) this.bad_columns.push(_v0.readUint32());
    for (_v1 = 0; _v1 < this.num_bad_pixels; _v1++) {
      var _v3 = _v0.readUint32(),
        _v4 = _v0.readUint32();
      this.bad_pixels.push(new _v13(_v3, _v4));
    }
  }), _v11.createFullBoxCtor("schm", function (_v0) {
    this.scheme_type = _v0.readString(4), this.scheme_version = _v0.readUint32(), 1 & this.flags && (this.scheme_uri = _v0.readString(this.size - this.hdr_size - 8));
  }), _v11.createBoxCtor("sdp ", function (_v0) {
    this.sdptext = _v0.readString(this.size - this.hdr_size);
  }), _v11.createFullBoxCtor("sdtp", function (_v0) {
    var _v1,
      _v2 = this.size - this.hdr_size;
    this.is_leading = [], this.sample_depends_on = [], this.sample_is_depended_on = [], this.sample_has_redundancy = [];
    for (var _v3 = 0; _v3 < _v2; _v3++) _v1 = _v0.readUint8(), this.is_leading[_v3] = _v1 >> 6, this.sample_depends_on[_v3] = _v1 >> 4 & 3, this.sample_is_depended_on[_v3] = _v1 >> 2 & 3, this.sample_has_redundancy[_v3] = 3 & _v1;
  }), _v11.createFullBoxCtor("senc"), _v11.createFullBoxCtor("sgpd", function (_v0) {
    this.grouping_type = _v0.readString(4), _v5.debug("BoxParser", "Found Sample Groups of type " + this.grouping_type), 1 === this.version ? this.default_length = _v0.readUint32() : this.default_length = 0, this.version >= 2 && (this.default_group_description_index = _v0.readUint32()), this.entries = [];
    for (var _v1, _v2 = _v0.readUint32(), _v3 = 0; _v3 < _v2; _v3++) _v1 = _v11[this.grouping_type + "SampleGroupEntry"] ? new _v11[this.grouping_type + "SampleGroupEntry"](this.grouping_type) : new _v11.SampleGroupEntry(this.grouping_type), this.entries.push(_v1), 1 === this.version && 0 === this.default_length ? _v1.description_length = _v0.readUint32() : _v1.description_length = this.default_length, _v1.write === _v11.SampleGroupEntry.prototype.write && (_v5.info("BoxParser", "SampleGroup for type " + this.grouping_type + " writing not yet implemented, keeping unparsed data in memory for later write"), _v1.data = _v0.readUint8Array(_v1.description_length), _v0.position -= _v1.description_length), _v1.parse(_v0);
  }), _v11.createFullBoxCtor("sidx", function (_v0) {
    this.reference_ID = _v0.readUint32(), this.timescale = _v0.readUint32(), 0 === this.version ? (this.earliest_presentation_time = _v0.readUint32(), this.first_offset = _v0.readUint32()) : (this.earliest_presentation_time = _v0.readUint64(), this.first_offset = _v0.readUint64()), _v0.readUint16(), this.references = [];
    for (var _v1 = _v0.readUint16(), _v2 = 0; _v2 < _v1; _v2++) {
      var _v3 = {};
      this.references.push(_v3);
      var _v4 = _v0.readUint32();
      _v3.reference_type = _v4 >> 31 & 1, _v3.referenced_size = 0 & _v4, _v3.subsegment_duration = _v0.readUint32(), _v3.starts_with_SAP = (_v4 = _v0.readUint32()) >> 31 & 1, _v3.SAP_type = _v4 >> 28 & 7, _v3.SAP_delta_time = 0 & _v4;
    }
  }), _v11.SingleItemTypeReferenceBox = function (_v0, _v1, _v2, _v3) {
    _v11.Box.call(this, _v0, _v1), this.hdr_size = _v2, this.start = _v3;
  }, _v11.SingleItemTypeReferenceBox.prototype = new _v11.Box(), _v11.SingleItemTypeReferenceBox.prototype.parse = function (_v0) {
    this.from_item_ID = _v0.readUint16();
    var _v1 = _v0.readUint16();
    this.references = [];
    for (var _v2 = 0; _v2 < _v1; _v2++) this.references[_v2] = {}, this.references[_v2].to_item_ID = _v0.readUint16();
  }, _v11.SingleItemTypeReferenceBoxLarge = function (_v0, _v1, _v2, _v3) {
    _v11.Box.call(this, _v0, _v1), this.hdr_size = _v2, this.start = _v3;
  }, _v11.SingleItemTypeReferenceBoxLarge.prototype = new _v11.Box(), _v11.SingleItemTypeReferenceBoxLarge.prototype.parse = function (_v0) {
    this.from_item_ID = _v0.readUint32();
    var _v1 = _v0.readUint16();
    this.references = [];
    for (var _v2 = 0; _v2 < _v1; _v2++) this.references[_v2] = {}, this.references[_v2].to_item_ID = _v0.readUint32();
  }, _v11.createFullBoxCtor("SmDm", function (_v0) {
    this.primaryRChromaticity_x = _v0.readUint16(), this.primaryRChromaticity_y = _v0.readUint16(), this.primaryGChromaticity_x = _v0.readUint16(), this.primaryGChromaticity_y = _v0.readUint16(), this.primaryBChromaticity_x = _v0.readUint16(), this.primaryBChromaticity_y = _v0.readUint16(), this.whitePointChromaticity_x = _v0.readUint16(), this.whitePointChromaticity_y = _v0.readUint16(), this.luminanceMax = _v0.readUint32(), this.luminanceMin = _v0.readUint32();
  }), _v11.createFullBoxCtor("smhd", function (_v0) {
    this.balance = _v0.readUint16(), _v0.readUint16();
  }), _v11.createFullBoxCtor("ssix", function (_v0) {
    this.subsegments = [];
    for (var _v1 = _v0.readUint32(), _v2 = 0; _v2 < _v1; _v2++) {
      var _v3 = {};
      this.subsegments.push(_v3), _v3.ranges = [];
      for (var _v4 = _v0.readUint32(), _v5 = 0; _v5 < _v4; _v5++) {
        var _v6 = {};
        _v3.ranges.push(_v6), _v6.level = _v0.readUint8(), _v6.range_size = _v0.readUint24();
      }
    }
  }), _v11.createFullBoxCtor("stco", function (_v0) {
    var _v1;
    if (_v1 = _v0.readUint32(), this.chunk_offsets = [], 0 === this.version) for (var _v2 = 0; _v2 < _v1; _v2++) this.chunk_offsets.push(_v0.readUint32());
  }), _v11.createFullBoxCtor("stdp", function (_v0) {
    var _v1 = (this.size - this.hdr_size) / 2;
    this.priority = [];
    for (var _v2 = 0; _v2 < _v1; _v2++) this.priority[_v2] = _v0.readUint16();
  }), _v11.createFullBoxCtor("sthd"), _v11.createFullBoxCtor("stri", function (_v0) {
    this.switch_group = _v0.readUint16(), this.alternate_group = _v0.readUint16(), this.sub_track_id = _v0.readUint32();
    var _v1 = (this.size - this.hdr_size - 8) / 4;
    this.attribute_list = [];
    for (var _v2 = 0; _v2 < _v1; _v2++) this.attribute_list[_v2] = _v0.readUint32();
  }), _v11.createFullBoxCtor("stsc", function (_v0) {
    var _v1, _v2;
    if (_v1 = _v0.readUint32(), this.first_chunk = [], this.samples_per_chunk = [], this.sample_description_index = [], 0 === this.version) for (_v2 = 0; _v2 < _v1; _v2++) this.first_chunk.push(_v0.readUint32()), this.samples_per_chunk.push(_v0.readUint32()), this.sample_description_index.push(_v0.readUint32());
  }), _v11.createFullBoxCtor("stsd", function (_v0) {
    var _v1, _v2, _v3, _v4;
    for (this.entries = [], _v3 = _v0.readUint32(), _v1 = 1; _v1 <= _v3; _v1++) {
      if ((_v2 = _v11.parseOneBox(_v0, !0, this.size - (_v0.getPosition() - this.start))).code !== _v11.OK) return;
      _v11[_v2.type + "SampleEntry"] ? ((_v4 = new _v11[_v2.type + "SampleEntry"](_v2.size)).hdr_size = _v2.hdr_size, _v4.start = _v2.start) : (_v5.warn("BoxParser", "Unknown sample entry type: " + _v2.type), _v4 = new _v11.SampleEntry(_v2.type, _v2.size, _v2.hdr_size, _v2.start)), _v4.write === _v11.SampleEntry.prototype.write && (_v5.info("BoxParser", "SampleEntry " + _v4.type + " box writing not yet implemented, keeping unparsed data in memory for later write"), _v4.parseDataAndRewind(_v0)), _v4.parse(_v0), this.entries.push(_v4);
    }
  }), _v11.createFullBoxCtor("stsg", function (_v0) {
    this.grouping_type = _v0.readUint32();
    var _v1 = _v0.readUint16();
    this.group_description_index = [];
    for (var _v2 = 0; _v2 < _v1; _v2++) this.group_description_index[_v2] = _v0.readUint32();
  }), _v11.createFullBoxCtor("stsh", function (_v0) {
    var _v1, _v2;
    if (_v1 = _v0.readUint32(), this.shadowed_sample_numbers = [], this.sync_sample_numbers = [], 0 === this.version) for (_v2 = 0; _v2 < _v1; _v2++) this.shadowed_sample_numbers.push(_v0.readUint32()), this.sync_sample_numbers.push(_v0.readUint32());
  }), _v11.createFullBoxCtor("stss", function (_v0) {
    var _v1, _v2;
    if (_v2 = _v0.readUint32(), 0 === this.version) for (this.sample_numbers = [], _v1 = 0; _v1 < _v2; _v1++) this.sample_numbers.push(_v0.readUint32());
  }), _v11.createFullBoxCtor("stsz", function (_v0) {
    var _v1;
    if (this.sample_sizes = [], 0 === this.version) for (this.sample_size = _v0.readUint32(), this.sample_count = _v0.readUint32(), _v1 = 0; _v1 < this.sample_count; _v1++) 0 === this.sample_size ? this.sample_sizes.push(_v0.readUint32()) : this.sample_sizes[_v1] = this.sample_size;
  }), _v11.createFullBoxCtor("stts", function (_v0) {
    var _v1, _v2, _v3;
    if (_v1 = _v0.readUint32(), this.sample_counts = [], this.sample_deltas = [], 0 === this.version) for (_v2 = 0; _v2 < _v1; _v2++) this.sample_counts.push(_v0.readUint32()), (_v3 = _v0.readInt32()) < 0 && (_v5.warn("BoxParser", "File uses negative stts sample delta, using value 1 instead, sync may be lost!"), _v3 = 1), this.sample_deltas.push(_v3);
  }), _v11.createFullBoxCtor("stvi", function (_v0) {
    var _v1,
      _v2,
      _v3 = _v0.readUint32();
    this.single_view_allowed = 3 & _v3, this.stereo_scheme = _v0.readUint32();
    var _v4 = _v0.readUint32();
    for (this.stereo_indication_type = _v0.readString(_v4), this.boxes = []; _v0.getPosition() < this.start + this.size;) {
      if ((_v1 = _v11.parseOneBox(_v0, !1, this.size - (_v0.getPosition() - this.start))).code !== _v11.OK) return;
      _v2 = _v1.box, this.boxes.push(_v2), this[_v2.type] = _v2;
    }
  }), _v11.createBoxCtor("styp", function (_v0) {
    _v11.ftypBox.prototype.parse.call(this, _v0);
  }), _v11.createFullBoxCtor("stz2", function (_v0) {
    if (this.sample_sizes = [], 0 === this.version) if (this.reserved = _v0.readUint24(), this.field_size = _v0.readUint8(), _v2 = _v0.readUint32(), 4 === this.field_size) for (_v1 = 0; _v1 < _v2; _v1 += 2) {
      var _v1,
        _v2,
        _v3 = _v0.readUint8();
      this.sample_sizes[_v1] = _v3 >> 4 & 15, this.sample_sizes[_v1 + 1] = 15 & _v3;
    } else if (8 === this.field_size) for (_v1 = 0; _v1 < _v2; _v1++) this.sample_sizes[_v1] = _v0.readUint8();else if (16 === this.field_size) for (_v1 = 0; _v1 < _v2; _v1++) this.sample_sizes[_v1] = _v0.readUint16();else _v5.error("BoxParser", "Error in length field in stz2 box");
  }), _v11.createFullBoxCtor("subs", function (_v0) {
    for (_v3 = _v0.readUint32(), this.entries = [], _v1 = 0; _v1 < _v3; _v1++) {
      var _v1,
        _v2,
        _v3,
        _v4,
        _v5 = {};
      if (this.entries[_v1] = _v5, _v5.sample_delta = _v0.readUint32(), _v5.subsamples = [], (_v4 = _v0.readUint16()) > 0) for (_v2 = 0; _v2 < _v4; _v2++) {
        var _v6 = {};
        _v5.subsamples.push(_v6), 1 == this.version ? _v6.size = _v0.readUint32() : _v6.size = _v0.readUint16(), _v6.priority = _v0.readUint8(), _v6.discardable = _v0.readUint8(), _v6.codec_specific_parameters = _v0.readUint32();
      }
    }
  }), _v11.createFullBoxCtor("tenc", function (_v0) {
    if (_v0.readUint8(), 0 === this.version) _v0.readUint8();else {
      var _v1 = _v0.readUint8();
      this.default_crypt_byte_block = _v1 >> 4 & 15, this.default_skip_byte_block = 15 & _v1;
    }
    this.default_isProtected = _v0.readUint8(), this.default_Per_Sample_IV_Size = _v0.readUint8(), this.default_KID = _v11.parseHex16(_v0), 1 === this.default_isProtected && 0 === this.default_Per_Sample_IV_Size && (this.default_constant_IV_size = _v0.readUint8(), this.default_constant_IV = _v0.readUint8Array(this.default_constant_IV_size));
  }), _v11.createFullBoxCtor("tfdt", function (_v0) {
    1 == this.version ? this.baseMediaDecodeTime = _v0.readUint64() : this.baseMediaDecodeTime = _v0.readUint32();
  }), _v11.createFullBoxCtor("tfhd", function (_v0) {
    var _v1 = 0;
    this.track_id = _v0.readUint32(), this.size - this.hdr_size > _v1 && this.flags & _v11.TFHD_FLAG_BASE_DATA_OFFSET ? (this.base_data_offset = _v0.readUint64(), _v1 += 8) : this.base_data_offset = 0, this.size - this.hdr_size > _v1 && this.flags & _v11.TFHD_FLAG_SAMPLE_DESC ? (this.default_sample_description_index = _v0.readUint32(), _v1 += 4) : this.default_sample_description_index = 0, this.size - this.hdr_size > _v1 && this.flags & _v11.TFHD_FLAG_SAMPLE_DUR ? (this.default_sample_duration = _v0.readUint32(), _v1 += 4) : this.default_sample_duration = 0, this.size - this.hdr_size > _v1 && this.flags & _v11.TFHD_FLAG_SAMPLE_SIZE ? (this.default_sample_size = _v0.readUint32(), _v1 += 4) : this.default_sample_size = 0, this.size - this.hdr_size > _v1 && this.flags & _v11.TFHD_FLAG_SAMPLE_FLAGS ? (this.default_sample_flags = _v0.readUint32(), _v1 += 4) : this.default_sample_flags = 0;
  }), _v11.createFullBoxCtor("tfra", function (_v0) {
    this.track_ID = _v0.readUint32(), _v0.readUint24();
    var _v1 = _v0.readUint8();
    this.length_size_of_traf_num = _v1 >> 4 & 3, this.length_size_of_trun_num = _v1 >> 2 & 3, this.length_size_of_sample_num = 3 & _v1, this.entries = [];
    for (var _v2 = _v0.readUint32(), _v3 = 0; _v3 < _v2; _v3++) 1 === this.version ? (this.time = _v0.readUint64(), this.moof_offset = _v0.readUint64()) : (this.time = _v0.readUint32(), this.moof_offset = _v0.readUint32()), this.traf_number = _v0["readUint" + 8 * (this.length_size_of_traf_num + 1)](), this.trun_number = _v0["readUint" + 8 * (this.length_size_of_trun_num + 1)](), this.sample_number = _v0["readUint" + 8 * (this.length_size_of_sample_num + 1)]();
  }), _v11.createFullBoxCtor("tkhd", function (_v0) {
    1 == this.version ? (this.creation_time = _v0.readUint64(), this.modification_time = _v0.readUint64(), this.track_id = _v0.readUint32(), _v0.readUint32(), this.duration = _v0.readUint64()) : (this.creation_time = _v0.readUint32(), this.modification_time = _v0.readUint32(), this.track_id = _v0.readUint32(), _v0.readUint32(), this.duration = _v0.readUint32()), _v0.readUint32Array(2), this.layer = _v0.readInt16(), this.alternate_group = _v0.readInt16(), this.volume = _v0.readInt16() >> 8, _v0.readUint16(), this.matrix = _v0.readInt32Array(9), this.width = _v0.readUint32(), this.height = _v0.readUint32();
  }), _v11.createBoxCtor("tmax", function (_v0) {
    this.time = _v0.readUint32();
  }), _v11.createBoxCtor("tmin", function (_v0) {
    this.time = _v0.readUint32();
  }), _v11.createBoxCtor("totl", function (_v0) {
    this.bytessent = _v0.readUint32();
  }), _v11.createBoxCtor("tpay", function (_v0) {
    this.bytessent = _v0.readUint32();
  }), _v11.createBoxCtor("tpyl", function (_v0) {
    this.bytessent = _v0.readUint64();
  }), _v11.TrackGroupTypeBox.prototype.parse = function (_v0) {
    this.parseFullHeader(_v0), this.track_group_id = _v0.readUint32();
  }, _v11.createTrackGroupCtor("msrc"), _v11.TrackReferenceTypeBox = function (_v0, _v1, _v2, _v3) {
    _v11.Box.call(this, _v0, _v1), this.hdr_size = _v2, this.start = _v3;
  }, _v11.TrackReferenceTypeBox.prototype = new _v11.Box(), _v11.TrackReferenceTypeBox.prototype.parse = function (_v0) {
    this.track_ids = _v0.readUint32Array((this.size - this.hdr_size) / 4);
  }, _v11.trefBox.prototype.parse = function (_v0) {
    for (var _v1, _v2; _v0.getPosition() < this.start + this.size;) {
      if ((_v1 = _v11.parseOneBox(_v0, !0, this.size - (_v0.getPosition() - this.start))).code !== _v11.OK) return;
      (_v2 = new _v11.TrackReferenceTypeBox(_v1.type, _v1.size, _v1.hdr_size, _v1.start)).write === _v11.Box.prototype.write && "mdat" !== _v2.type && (_v5.info("BoxParser", "TrackReference " + _v2.type + " box writing not yet implemented, keeping unparsed data in memory for later write"), _v2.parseDataAndRewind(_v0)), _v2.parse(_v0), this.boxes.push(_v2);
    }
  }, _v11.createFullBoxCtor("trep", function (_v0) {
    for (this.track_ID = _v0.readUint32(), this.boxes = []; _v0.getPosition() < this.start + this.size;) {
      if ((ret = _v11.parseOneBox(_v0, !1, this.size - (_v0.getPosition() - this.start))).code !== _v11.OK) return;
      box = ret.box, this.boxes.push(box);
    }
  }), _v11.createFullBoxCtor("trex", function (_v0) {
    this.track_id = _v0.readUint32(), this.default_sample_description_index = _v0.readUint32(), this.default_sample_duration = _v0.readUint32(), this.default_sample_size = _v0.readUint32(), this.default_sample_flags = _v0.readUint32();
  }), _v11.createBoxCtor("trpy", function (_v0) {
    this.bytessent = _v0.readUint64();
  }), _v11.createFullBoxCtor("trun", function (_v0) {
    var _v1 = 0;
    if (this.sample_count = _v0.readUint32(), _v1 += 4, this.size - this.hdr_size > _v1 && this.flags & _v11.TRUN_FLAGS_DATA_OFFSET ? (this.data_offset = _v0.readInt32(), _v1 += 4) : this.data_offset = 0, this.size - this.hdr_size > _v1 && this.flags & _v11.TRUN_FLAGS_FIRST_FLAG ? (this.first_sample_flags = _v0.readUint32(), _v1 += 4) : this.first_sample_flags = 0, this.sample_duration = [], this.sample_size = [], this.sample_flags = [], this.sample_composition_time_offset = [], this.size - this.hdr_size > _v1) for (var _v2 = 0; _v2 < this.sample_count; _v2++) this.flags & _v11.TRUN_FLAGS_DURATION && (this.sample_duration[_v2] = _v0.readUint32()), this.flags & _v11.TRUN_FLAGS_SIZE && (this.sample_size[_v2] = _v0.readUint32()), this.flags & _v11.TRUN_FLAGS_FLAGS && (this.sample_flags[_v2] = _v0.readUint32()), this.flags & _v11.TRUN_FLAGS_CTS_OFFSET && (0 === this.version ? this.sample_composition_time_offset[_v2] = _v0.readUint32() : this.sample_composition_time_offset[_v2] = _v0.readInt32());
  }), _v11.createFullBoxCtor("tsel", function (_v0) {
    this.switch_group = _v0.readUint32();
    var _v1 = (this.size - this.hdr_size - 4) / 4;
    this.attribute_list = [];
    for (var _v2 = 0; _v2 < _v1; _v2++) this.attribute_list[_v2] = _v0.readUint32();
  }), _v11.createFullBoxCtor("txtC", function (_v0) {
    this.config = _v0.readCString();
  }), _v11.createBoxCtor("tyco", function (_v0) {
    var _v1 = (this.size - this.hdr_size) / 4;
    this.compatible_brands = [];
    for (var _v2 = 0; _v2 < _v1; _v2++) this.compatible_brands[_v2] = _v0.readString(4);
  }), _v11.createFullBoxCtor("udes", function (_v0) {
    this.lang = _v0.readCString(), this.name = _v0.readCString(), this.description = _v0.readCString(), this.tags = _v0.readCString();
  }), _v11.createFullBoxCtor("uncC", function (_v0) {
    var _v1;
    if (this.profile = _v0.readUint32(), 1 == this.version) ;else if (0 == this.version) {
      for (this.component_count = _v0.readUint32(), this.component_index = [], this.component_bit_depth_minus_one = [], this.component_format = [], this.component_align_size = [], _v1 = 0; _v1 < this.component_count; _v1++) this.component_index.push(_v0.readUint16()), this.component_bit_depth_minus_one.push(_v0.readUint8()), this.component_format.push(_v0.readUint8()), this.component_align_size.push(_v0.readUint8());
      this.sampling_type = _v0.readUint8(), this.interleave_type = _v0.readUint8(), this.block_size = _v0.readUint8();
      var _v2 = _v0.readUint8();
      this.component_little_endian = _v2 >> 7 & 1, this.block_pad_lsb = _v2 >> 6 & 1, this.block_little_endian = _v2 >> 5 & 1, this.block_reversed = _v2 >> 4 & 1, this.pad_unknown = _v2 >> 3 & 1, this.pixel_size = _v0.readUint32(), this.row_align_size = _v0.readUint32(), this.tile_align_size = _v0.readUint32(), this.num_tile_cols_minus_one = _v0.readUint32(), this.num_tile_rows_minus_one = _v0.readUint32();
    }
  }), _v11.createFullBoxCtor("url ", function (_v0) {
    1 !== this.flags && (this.location = _v0.readCString());
  }), _v11.createFullBoxCtor("urn ", function (_v0) {
    this.name = _v0.readCString(), this.size - this.hdr_size - this.name.length - 1 > 0 && (this.location = _v0.readCString());
  }), _v11.createUUIDBox("a5d40b30e81411ddba2f0800200c9a66", !0, !1, function (_v0) {
    this.LiveServerManifest = _v0.readString(this.size - this.hdr_size).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  }), _v11.createUUIDBox("d08a4f1810f34a82b6c832d8aba183d3", !0, !1, function (_v0) {
    this.system_id = _v11.parseHex16(_v0);
    var _v1 = _v0.readUint32();
    _v1 > 0 && (this.data = _v0.readUint8Array(_v1));
  }), _v11.createUUIDBox("a2394f525a9b4f14a2446c427c648df4", !0, !1), _v11.createUUIDBox("8974dbce7be74c5184f97148f9882554", !0, !1, function (_v0) {
    this.default_AlgorithmID = _v0.readUint24(), this.default_IV_size = _v0.readUint8(), this.default_KID = _v11.parseHex16(_v0);
  }), _v11.createUUIDBox("d4807ef2ca3946958e5426cb9e46a79f", !0, !1, function (_v0) {
    this.fragment_count = _v0.readUint8(), this.entries = [];
    for (var _v1 = 0; _v1 < this.fragment_count; _v1++) {
      var _v2 = {},
        _v3 = 0,
        _v4 = 0;
      1 === this.version ? (_v3 = _v0.readUint64(), _v4 = _v0.readUint64()) : (_v3 = _v0.readUint32(), _v4 = _v0.readUint32()), _v2.absolute_time = _v3, _v2.absolute_duration = _v4, this.entries.push(_v2);
    }
  }), _v11.createUUIDBox("6d1d9b0542d544e680e2141daff757b2", !0, !1, function (_v0) {
    1 === this.version ? (this.absolute_time = _v0.readUint64(), this.duration = _v0.readUint64()) : (this.absolute_time = _v0.readUint32(), this.duration = _v0.readUint32());
  }), _v11.createFullBoxCtor("vmhd", function (_v0) {
    this.graphicsmode = _v0.readUint16(), this.opcolor = _v0.readUint16Array(3);
  }), _v11.createFullBoxCtor("vpcC", function (_v0) {
    var _v1;
    1 === this.version ? (this.profile = _v0.readUint8(), this.level = _v0.readUint8(), _v1 = _v0.readUint8(), this.bitDepth = _v1 >> 4, this.chromaSubsampling = _v1 >> 1 & 7, this.videoFullRangeFlag = 1 & _v1, this.colourPrimaries = _v0.readUint8(), this.transferCharacteristics = _v0.readUint8(), this.matrixCoefficients = _v0.readUint8()) : (this.profile = _v0.readUint8(), this.level = _v0.readUint8(), _v1 = _v0.readUint8(), this.bitDepth = _v1 >> 4 & 15, this.colorSpace = 15 & _v1, _v1 = _v0.readUint8(), this.chromaSubsampling = _v1 >> 4 & 15, this.transferFunction = _v1 >> 1 & 7, this.videoFullRangeFlag = 1 & _v1), this.codecIntializationDataSize = _v0.readUint16(), this.codecIntializationData = _v0.readUint8Array(this.codecIntializationDataSize);
  }), _v11.createBoxCtor("vttC", function (_v0) {
    this.text = _v0.readString(this.size - this.hdr_size);
  }), _v11.createFullBoxCtor("vvcC", function (_v0) {
    var _v1,
      _v2,
      _v3 = {
        held_bits: void 0,
        num_held_bits: 0,
        stream_read_1_bytes: function (_v0) {
          this.held_bits = _v0.readUint8(), this.num_held_bits = 8;
        },
        stream_read_2_bytes: function (_v0) {
          this.held_bits = _v0.readUint16(), this.num_held_bits = 16;
        },
        extract_bits: function (_v0) {
          var _v1 = this.held_bits >> this.num_held_bits - _v0 & (1 << _v0) - 1;
          return this.num_held_bits -= _v0, _v1;
        }
      };
    if (_v3.stream_read_1_bytes(_v0), _v3.extract_bits(5), this.lengthSizeMinusOne = _v3.extract_bits(2), this.ptl_present_flag = _v3.extract_bits(1), this.ptl_present_flag) {
      if (_v3.stream_read_2_bytes(_v0), this.ols_idx = _v3.extract_bits(9), this.num_sublayers = _v3.extract_bits(3), this.constant_frame_rate = _v3.extract_bits(2), this.chroma_format_idc = _v3.extract_bits(2), _v3.stream_read_1_bytes(_v0), this.bit_depth_minus8 = _v3.extract_bits(3), _v3.extract_bits(5), _v3.stream_read_2_bytes(_v0), _v3.extract_bits(2), this.num_bytes_constraint_info = _v3.extract_bits(6), this.general_profile_idc = _v3.extract_bits(7), this.general_tier_flag = _v3.extract_bits(1), this.general_level_idc = _v0.readUint8(), _v3.stream_read_1_bytes(_v0), this.ptl_frame_only_constraint_flag = _v3.extract_bits(1), this.ptl_multilayer_enabled_flag = _v3.extract_bits(1), this.general_constraint_info = new Uint8Array(this.num_bytes_constraint_info), this.num_bytes_constraint_info) {
        for (_v1 = 0; _v1 < this.num_bytes_constraint_info - 1; _v1++) {
          var _v4 = _v3.extract_bits(6);
          _v3.stream_read_1_bytes(_v0);
          var _v5 = _v3.extract_bits(2);
          this.general_constraint_info[_v1] = _v4 << 2 | _v5;
        }
        this.general_constraint_info[this.num_bytes_constraint_info - 1] = _v3.extract_bits(6);
      } else _v3.extract_bits(6);
      if (this.num_sublayers > 1) {
        for (_v3.stream_read_1_bytes(_v0), this.ptl_sublayer_present_mask = 0, _v2 = this.num_sublayers - 2; _v2 >= 0; --_v2) {
          var _v6 = _v3.extract_bits(1);
          this.ptl_sublayer_present_mask |= _v6 << _v2;
        }
        for (_v2 = this.num_sublayers; _v2 <= 8 && this.num_sublayers > 1; ++_v2) _v3.extract_bits(1);
        for (this.sublayer_level_idc = [], _v2 = this.num_sublayers - 2; _v2 >= 0; --_v2) this.ptl_sublayer_present_mask & 1 << _v2 && (this.sublayer_level_idc[_v2] = _v0.readUint8());
      }
      if (this.ptl_num_sub_profiles = _v0.readUint8(), this.general_sub_profile_idc = [], this.ptl_num_sub_profiles) for (_v1 = 0; _v1 < this.ptl_num_sub_profiles; _v1++) this.general_sub_profile_idc.push(_v0.readUint32());
      this.max_picture_width = _v0.readUint16(), this.max_picture_height = _v0.readUint16(), this.avg_frame_rate = _v0.readUint16();
    }
    this.nalu_arrays = [];
    var _v7 = _v0.readUint8();
    for (_v1 = 0; _v1 < _v7; _v1++) {
      var _v8 = [];
      this.nalu_arrays.push(_v8), _v3.stream_read_1_bytes(_v0), _v8.completeness = _v3.extract_bits(1), _v3.extract_bits(2), _v8.nalu_type = _v3.extract_bits(5);
      var _v9 = 1;
      for (13 != _v8.nalu_type && 12 != _v8.nalu_type && (_v9 = _v0.readUint16()), _v2 = 0; _v2 < _v9; _v2++) {
        var _v10 = _v0.readUint16();
        _v8.push({
          data: _v0.readUint8Array(_v10),
          length: _v10
        });
      }
    }
  }), _v11.createFullBoxCtor("vvnC", function (_v0) {
    var _v1 = strm.readUint8();
    this.lengthSizeMinusOne = 3 & _v1;
  }), _v11.SampleEntry.prototype.isVideo = function () {
    return !1;
  }, _v11.SampleEntry.prototype.isAudio = function () {
    return !1;
  }, _v11.SampleEntry.prototype.isSubtitle = function () {
    return !1;
  }, _v11.SampleEntry.prototype.isMetadata = function () {
    return !1;
  }, _v11.SampleEntry.prototype.isHint = function () {
    return !1;
  }, _v11.SampleEntry.prototype.getCodec = function () {
    return this.type.replace(".", "");
  }, _v11.SampleEntry.prototype.getWidth = function () {
    return "";
  }, _v11.SampleEntry.prototype.getHeight = function () {
    return "";
  }, _v11.SampleEntry.prototype.getChannelCount = function () {
    return "";
  }, _v11.SampleEntry.prototype.getSampleRate = function () {
    return "";
  }, _v11.SampleEntry.prototype.getSampleSize = function () {
    return "";
  }, _v11.VisualSampleEntry.prototype.isVideo = function () {
    return !0;
  }, _v11.VisualSampleEntry.prototype.getWidth = function () {
    return this.width;
  }, _v11.VisualSampleEntry.prototype.getHeight = function () {
    return this.height;
  }, _v11.AudioSampleEntry.prototype.isAudio = function () {
    return !0;
  }, _v11.AudioSampleEntry.prototype.getChannelCount = function () {
    return this.channel_count;
  }, _v11.AudioSampleEntry.prototype.getSampleRate = function () {
    return this.samplerate;
  }, _v11.AudioSampleEntry.prototype.getSampleSize = function () {
    return this.samplesize;
  }, _v11.SubtitleSampleEntry.prototype.isSubtitle = function () {
    return !0;
  }, _v11.MetadataSampleEntry.prototype.isMetadata = function () {
    return !0;
  }, _v11.decimalToHex = function (_v0, _v1) {
    var _v2 = Number(_v0).toString(16);
    for (_v1 = null == _v1 ? _v1 = 2 : _v1; _v2.length < _v1;) _v2 = "0" + _v2;
    return _v2;
  }, _v11.avc1SampleEntry.prototype.getCodec = _v11.avc2SampleEntry.prototype.getCodec = _v11.avc3SampleEntry.prototype.getCodec = _v11.avc4SampleEntry.prototype.getCodec = function () {
    var _v0 = _v11.SampleEntry.prototype.getCodec.call(this);
    return this.avcC ? _v0 + "." + _v11.decimalToHex(this.avcC.AVCProfileIndication) + _v11.decimalToHex(this.avcC.profile_compatibility) + _v11.decimalToHex(this.avcC.AVCLevelIndication) : _v0;
  }, _v11.hev1SampleEntry.prototype.getCodec = _v11.hvc1SampleEntry.prototype.getCodec = function () {
    var _v0,
      _v1 = _v11.SampleEntry.prototype.getCodec.call(this);
    if (this.hvcC) {
      switch (_v1 += ".", this.hvcC.general_profile_space) {
        case 0:
          _v1 += "";
          break;
        case 1:
          _v1 += "A";
          break;
        case 2:
          _v1 += "B";
          break;
        case 3:
          _v1 += "C";
      }
      _v1 += this.hvcC.general_profile_idc, _v1 += ".";
      var _v2 = this.hvcC.general_profile_compatibility,
        _v3 = 0;
      for (_v0 = 0; _v0 < 32 && (_v3 |= 1 & _v2, 31 != _v0); _v0++) _v3 <<= 1, _v2 >>= 1;
      _v1 += _v11.decimalToHex(_v3, 0), _v1 += ".", 0 === this.hvcC.general_tier_flag ? _v1 += "L" : _v1 += "H", _v1 += this.hvcC.general_level_idc;
      var _v4 = !1,
        _v5 = "";
      for (_v0 = 5; _v0 >= 0; _v0--) (this.hvcC.general_constraint_indicator[_v0] || _v4) && (_v5 = "." + _v11.decimalToHex(this.hvcC.general_constraint_indicator[_v0], 0) + _v5, _v4 = !0);
      _v1 += _v5;
    }
    return _v1;
  }, _v11.vvc1SampleEntry.prototype.getCodec = _v11.vvi1SampleEntry.prototype.getCodec = function () {
    var _v0 = _v11.SampleEntry.prototype.getCodec.call(this);
    if (this.vvcC) {
      _v0 += "." + this.vvcC.general_profile_idc, this.vvcC.general_tier_flag ? _v0 += ".H" : _v0 += ".L", _v0 += this.vvcC.general_level_idc;
      var _v1 = "";
      if (this.vvcC.general_constraint_info) {
        var _v2,
          _v3,
          _v4,
          _v5 = [];
        for (_v2 = this.vvcC.ptl_frame_only_constraint << 7 | this.vvcC.ptl_multilayer_enabled << 6, _v3 = 0; _v3 < this.vvcC.general_constraint_info.length; ++_v3) _v2 |= this.vvcC.general_constraint_info[_v3] >> 2 & 63, _v5.push(_v2), _v2 && (_v4 = _v3), _v2 = this.vvcC.general_constraint_info[_v3] >> 2 & 3;
        if (void 0 === _v4) _v1 = ".CA";else {
          _v1 = ".C";
          var _v6 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
            _v7 = 0,
            _v8 = 0;
          for (_v3 = 0; _v3 <= _v4; ++_v3) for (_v7 = _v7 << 8 | _v5[_v3], _v8 += 8; _v8 >= 5;) _v1 += _v6[_v7 >> _v8 - 5 & 31], _v8 -= 5, _v7 &= (1 << _v8) - 1;
          _v8 && (_v7 <<= 5 - _v8, _v1 += _v6[31 & _v7]);
        }
      }
      _v0 += _v1;
    }
    return _v0;
  }, _v11.mp4aSampleEntry.prototype.getCodec = function () {
    var _v0 = _v11.SampleEntry.prototype.getCodec.call(this);
    if (!this.esds || !this.esds.esd) return _v0;
    var _v1 = this.esds.esd.getOTI(),
      _v2 = this.esds.esd.getAudioConfig();
    return _v0 + "." + _v11.decimalToHex(_v1) + (_v2 ? "." + _v2 : "");
  }, _v11.stxtSampleEntry.prototype.getCodec = function () {
    var _v0 = _v11.SampleEntry.prototype.getCodec.call(this);
    return this.mime_format ? _v0 + "." + this.mime_format : _v0;
  }, _v11.vp08SampleEntry.prototype.getCodec = _v11.vp09SampleEntry.prototype.getCodec = function () {
    var _v0 = _v11.SampleEntry.prototype.getCodec.call(this),
      _v1 = this.vpcC.level;
    0 == _v1 && (_v1 = "00");
    var _v2 = this.vpcC.bitDepth;
    return 8 == _v2 && (_v2 = "08"), _v0 + ".0" + this.vpcC.profile + "." + _v1 + "." + _v2;
  }, _v11.av01SampleEntry.prototype.getCodec = function () {
    var _v0,
      _v1 = _v11.SampleEntry.prototype.getCodec.call(this),
      _v2 = this.av1C.seq_level_idx_0;
    return _v2 < 10 && (_v2 = "0" + _v2), 2 === this.av1C.seq_profile && 1 === this.av1C.high_bitdepth ? _v0 = 1 === this.av1C.twelve_bit ? "12" : "10" : this.av1C.seq_profile <= 2 && (_v0 = 1 === this.av1C.high_bitdepth ? "10" : "08"), _v1 + "." + this.av1C.seq_profile + "." + _v2 + (this.av1C.seq_tier_0 ? "H" : "M") + "." + _v0;
  }, _v11.Box.prototype.writeHeader = function (_v0, _v1) {
    this.size += 8, this.size > 0 && (this.size += 8), "uuid" === this.type && (this.size += 16), _v5.debug("BoxWriter", "Writing box " + this.type + " of size: " + this.size + " at position " + _v0.getPosition() + (_v1 || "")), this.size > 0 ? _v0.writeUint32(1) : (this.sizePosition = _v0.getPosition(), _v0.writeUint32(this.size)), _v0.writeString(this.type, null, 4), "uuid" === this.type && _v0.writeUint8Array(this.uuid), this.size > 0 && _v0.writeUint64(this.size);
  }, _v11.FullBox.prototype.writeHeader = function (_v0) {
    this.size += 4, _v11.Box.prototype.writeHeader.call(this, _v0, " v=" + this.version + " f=" + this.flags), _v0.writeUint8(this.version), _v0.writeUint24(this.flags);
  }, _v11.Box.prototype.write = function (_v0) {
    "mdat" === this.type ? this.data && (this.size = this.data.length, this.writeHeader(_v0), _v0.writeUint8Array(this.data)) : (this.size = this.data ? this.data.length : 0, this.writeHeader(_v0), this.data && _v0.writeUint8Array(this.data));
  }, _v11.ContainerBox.prototype.write = function (_v0) {
    this.size = 0, this.writeHeader(_v0);
    for (var _v1 = 0; _v1 < this.boxes.length; _v1++) this.boxes[_v1] && (this.boxes[_v1].write(_v0), this.size += this.boxes[_v1].size);
    _v5.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size), _v0.adjustUint32(this.sizePosition, this.size);
  }, _v11.TrackReferenceTypeBox.prototype.write = function (_v0) {
    this.size = 4 * this.track_ids.length, this.writeHeader(_v0), _v0.writeUint32Array(this.track_ids);
  }, _v11.avcCBox.prototype.write = function (_v0) {
    var _v1;
    for (this.size = 7, _v1 = 0; _v1 < this.SPS.length; _v1++) this.size += 2 + this.SPS[_v1].length;
    for (_v1 = 0; _v1 < this.PPS.length; _v1++) this.size += 2 + this.PPS[_v1].length;
    for (this.ext && (this.size += this.ext.length), this.writeHeader(_v0), _v0.writeUint8(this.configurationVersion), _v0.writeUint8(this.AVCProfileIndication), _v0.writeUint8(this.profile_compatibility), _v0.writeUint8(this.AVCLevelIndication), _v0.writeUint8(this.lengthSizeMinusOne + 252), _v0.writeUint8(this.SPS.length + 224), _v1 = 0; _v1 < this.SPS.length; _v1++) _v0.writeUint16(this.SPS[_v1].length), _v0.writeUint8Array(this.SPS[_v1].nalu);
    for (_v0.writeUint8(this.PPS.length), _v1 = 0; _v1 < this.PPS.length; _v1++) _v0.writeUint16(this.PPS[_v1].length), _v0.writeUint8Array(this.PPS[_v1].nalu);
    this.ext && _v0.writeUint8Array(this.ext);
  }, _v11.co64Box.prototype.write = function (_v0) {
    var _v1;
    for (this.version = 0, this.flags = 0, this.size = 4 + 8 * this.chunk_offsets.length, this.writeHeader(_v0), _v0.writeUint32(this.chunk_offsets.length), _v1 = 0; _v1 < this.chunk_offsets.length; _v1++) _v0.writeUint64(this.chunk_offsets[_v1]);
  }, _v11.cslgBox.prototype.write = function (_v0) {
    this.version = 0, this.flags = 0, this.size = 20, this.writeHeader(_v0), _v0.writeInt32(this.compositionToDTSShift), _v0.writeInt32(this.leastDecodeToDisplayDelta), _v0.writeInt32(this.greatestDecodeToDisplayDelta), _v0.writeInt32(this.compositionStartTime), _v0.writeInt32(this.compositionEndTime);
  }, _v11.cttsBox.prototype.write = function (_v0) {
    var _v1;
    for (this.version = 0, this.flags = 0, this.size = 4 + 8 * this.sample_counts.length, this.writeHeader(_v0), _v0.writeUint32(this.sample_counts.length), _v1 = 0; _v1 < this.sample_counts.length; _v1++) _v0.writeUint32(this.sample_counts[_v1]), 1 === this.version ? _v0.writeInt32(this.sample_offsets[_v1]) : _v0.writeUint32(this.sample_offsets[_v1]);
  }, _v11.drefBox.prototype.write = function (_v0) {
    this.version = 0, this.flags = 0, this.size = 4, this.writeHeader(_v0), _v0.writeUint32(this.entries.length);
    for (var _v1 = 0; _v1 < this.entries.length; _v1++) this.entries[_v1].write(_v0), this.size += this.entries[_v1].size;
    _v5.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size), _v0.adjustUint32(this.sizePosition, this.size);
  }, _v11.elngBox.prototype.write = function (_v0) {
    this.version = 0, this.flags = 0, this.size = this.extended_language.length, this.writeHeader(_v0), _v0.writeString(this.extended_language);
  }, _v11.elstBox.prototype.write = function (_v0) {
    this.version = 0, this.flags = 0, this.size = 4 + 12 * this.entries.length, this.writeHeader(_v0), _v0.writeUint32(this.entries.length);
    for (var _v1 = 0; _v1 < this.entries.length; _v1++) {
      var _v2 = this.entries[_v1];
      _v0.writeUint32(_v2.segment_duration), _v0.writeInt32(_v2.media_time), _v0.writeInt16(_v2.media_rate_integer), _v0.writeInt16(_v2.media_rate_fraction);
    }
  }, _v11.emsgBox.prototype.write = function (_v0) {
    this.version = 0, this.flags = 0, this.size = 16 + this.message_data.length + (this.scheme_id_uri.length + 1) + (this.value.length + 1), this.writeHeader(_v0), _v0.writeCString(this.scheme_id_uri), _v0.writeCString(this.value), _v0.writeUint32(this.timescale), _v0.writeUint32(this.presentation_time_delta), _v0.writeUint32(this.event_duration), _v0.writeUint32(this.id), _v0.writeUint8Array(this.message_data);
  }, _v11.ftypBox.prototype.write = function (_v0) {
    this.size = 8 + 4 * this.compatible_brands.length, this.writeHeader(_v0), _v0.writeString(this.major_brand, null, 4), _v0.writeUint32(this.minor_version);
    for (var _v1 = 0; _v1 < this.compatible_brands.length; _v1++) _v0.writeString(this.compatible_brands[_v1], null, 4);
  }, _v11.hdlrBox.prototype.write = function (_v0) {
    this.size = 20 + this.name.length + 1, this.version = 0, this.flags = 0, this.writeHeader(_v0), _v0.writeUint32(0), _v0.writeString(this.handler, null, 4), _v0.writeUint32(0), _v0.writeUint32(0), _v0.writeUint32(0), _v0.writeCString(this.name);
  }, _v11.hvcCBox.prototype.write = function (_v0) {
    var _v1, _v2;
    for (this.size = 23, _v1 = 0; _v1 < this.nalu_arrays.length; _v1++) for (this.size += 3, _v2 = 0; _v2 < this.nalu_arrays[_v1].length; _v2++) this.size += 2 + this.nalu_arrays[_v1][_v2].data.length;
    for (this.writeHeader(_v0), _v0.writeUint8(this.configurationVersion), _v0.writeUint8(this.general_profile_space << 6 + this.general_tier_flag << 5 + this.general_profile_idc), _v0.writeUint32(this.general_profile_compatibility), _v0.writeUint8Array(this.general_constraint_indicator), _v0.writeUint8(this.general_level_idc), _v0.writeUint16(this.min_spatial_segmentation_idc + 0), _v0.writeUint8(this.parallelismType + 252), _v0.writeUint8(this.chroma_format_idc + 252), _v0.writeUint8(this.bit_depth_luma_minus8 + 248), _v0.writeUint8(this.bit_depth_chroma_minus8 + 248), _v0.writeUint16(this.avgFrameRate), _v0.writeUint8((this.constantFrameRate << 6) + (this.numTemporalLayers << 3) + (this.temporalIdNested << 2) + this.lengthSizeMinusOne), _v0.writeUint8(this.nalu_arrays.length), _v1 = 0; _v1 < this.nalu_arrays.length; _v1++) for (_v0.writeUint8((this.nalu_arrays[_v1].completeness << 7) + this.nalu_arrays[_v1].nalu_type), _v0.writeUint16(this.nalu_arrays[_v1].length), _v2 = 0; _v2 < this.nalu_arrays[_v1].length; _v2++) _v0.writeUint16(this.nalu_arrays[_v1][_v2].data.length), _v0.writeUint8Array(this.nalu_arrays[_v1][_v2].data);
  }, _v11.kindBox.prototype.write = function (_v0) {
    this.version = 0, this.flags = 0, this.size = this.schemeURI.length + 1 + (this.value.length + 1), this.writeHeader(_v0), _v0.writeCString(this.schemeURI), _v0.writeCString(this.value);
  }, _v11.mdhdBox.prototype.write = function (_v0) {
    this.size = 20, this.flags = 0, this.version = 0, this.writeHeader(_v0), _v0.writeUint32(this.creation_time), _v0.writeUint32(this.modification_time), _v0.writeUint32(this.timescale), _v0.writeUint32(this.duration), _v0.writeUint16(this.language), _v0.writeUint16(0);
  }, _v11.mehdBox.prototype.write = function (_v0) {
    this.version = 0, this.flags = 0, this.size = 4, this.writeHeader(_v0), _v0.writeUint32(this.fragment_duration);
  }, _v11.mfhdBox.prototype.write = function (_v0) {
    this.version = 0, this.flags = 0, this.size = 4, this.writeHeader(_v0), _v0.writeUint32(this.sequence_number);
  }, _v11.mvhdBox.prototype.write = function (_v0) {
    this.version = 0, this.flags = 0, this.size = 96, this.writeHeader(_v0), _v0.writeUint32(this.creation_time), _v0.writeUint32(this.modification_time), _v0.writeUint32(this.timescale), _v0.writeUint32(this.duration), _v0.writeUint32(this.rate), _v0.writeUint16(this.volume << 8), _v0.writeUint16(0), _v0.writeUint32(0), _v0.writeUint32(0), _v0.writeUint32Array(this.matrix), _v0.writeUint32(0), _v0.writeUint32(0), _v0.writeUint32(0), _v0.writeUint32(0), _v0.writeUint32(0), _v0.writeUint32(0), _v0.writeUint32(this.next_track_id);
  }, _v11.SampleEntry.prototype.writeHeader = function (_v0) {
    this.size = 8, _v11.Box.prototype.writeHeader.call(this, _v0), _v0.writeUint8(0), _v0.writeUint8(0), _v0.writeUint8(0), _v0.writeUint8(0), _v0.writeUint8(0), _v0.writeUint8(0), _v0.writeUint16(this.data_reference_index);
  }, _v11.SampleEntry.prototype.writeFooter = function (_v0) {
    for (var _v1 = 0; _v1 < this.boxes.length; _v1++) this.boxes[_v1].write(_v0), this.size += this.boxes[_v1].size;
    _v5.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size), _v0.adjustUint32(this.sizePosition, this.size);
  }, _v11.SampleEntry.prototype.write = function (_v0) {
    this.writeHeader(_v0), _v0.writeUint8Array(this.data), this.size += this.data.length, _v5.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size), _v0.adjustUint32(this.sizePosition, this.size);
  }, _v11.VisualSampleEntry.prototype.write = function (_v0) {
    this.writeHeader(_v0), this.size += 70, _v0.writeUint16(0), _v0.writeUint16(0), _v0.writeUint32(0), _v0.writeUint32(0), _v0.writeUint32(0), _v0.writeUint16(this.width), _v0.writeUint16(this.height), _v0.writeUint32(this.horizresolution), _v0.writeUint32(this.vertresolution), _v0.writeUint32(0), _v0.writeUint16(this.frame_count), _v0.writeUint8(Math.min(31, this.compressorname.length)), _v0.writeString(this.compressorname, null, 31), _v0.writeUint16(this.depth), _v0.writeInt16(-1), this.writeFooter(_v0);
  }, _v11.AudioSampleEntry.prototype.write = function (_v0) {
    this.writeHeader(_v0), this.size += 20, _v0.writeUint32(0), _v0.writeUint32(0), _v0.writeUint16(this.channel_count), _v0.writeUint16(this.samplesize), _v0.writeUint16(0), _v0.writeUint16(0), _v0.writeUint32(this.samplerate << 16), this.writeFooter(_v0);
  }, _v11.stppSampleEntry.prototype.write = function (_v0) {
    this.writeHeader(_v0), this.size += this.namespace.length + 1 + this.schema_location.length + 1 + this.auxiliary_mime_types.length + 1, _v0.writeCString(this.namespace), _v0.writeCString(this.schema_location), _v0.writeCString(this.auxiliary_mime_types), this.writeFooter(_v0);
  }, _v11.SampleGroupEntry.prototype.write = function (_v0) {
    _v0.writeUint8Array(this.data);
  }, _v11.sbgpBox.prototype.write = function (_v0) {
    this.version = 1, this.flags = 0, this.size = 12 + 8 * this.entries.length, this.writeHeader(_v0), _v0.writeString(this.grouping_type, null, 4), _v0.writeUint32(this.grouping_type_parameter), _v0.writeUint32(this.entries.length);
    for (var _v1 = 0; _v1 < this.entries.length; _v1++) {
      var _v2 = this.entries[_v1];
      _v0.writeInt32(_v2.sample_count), _v0.writeInt32(_v2.group_description_index);
    }
  }, _v11.sgpdBox.prototype.write = function (_v0) {
    var _v1, _v2;
    for (this.flags = 0, this.size = 12, _v1 = 0; _v1 < this.entries.length; _v1++) _v2 = this.entries[_v1], 1 === this.version && (0 === this.default_length && (this.size += 4), this.size += _v2.data.length);
    for (this.writeHeader(_v0), _v0.writeString(this.grouping_type, null, 4), 1 === this.version && _v0.writeUint32(this.default_length), this.version >= 2 && _v0.writeUint32(this.default_sample_description_index), _v0.writeUint32(this.entries.length), _v1 = 0; _v1 < this.entries.length; _v1++) _v2 = this.entries[_v1], 1 === this.version && 0 === this.default_length && _v0.writeUint32(_v2.description_length), _v2.write(_v0);
  }, _v11.sidxBox.prototype.write = function (_v0) {
    this.version = 0, this.flags = 0, this.size = 20 + 12 * this.references.length, this.writeHeader(_v0), _v0.writeUint32(this.reference_ID), _v0.writeUint32(this.timescale), _v0.writeUint32(this.earliest_presentation_time), _v0.writeUint32(this.first_offset), _v0.writeUint16(0), _v0.writeUint16(this.references.length);
    for (var _v1 = 0; _v1 < this.references.length; _v1++) {
      var _v2 = this.references[_v1];
      _v0.writeUint32(_v2.reference_type << 31 | _v2.referenced_size), _v0.writeUint32(_v2.subsegment_duration), _v0.writeUint32(_v2.starts_with_SAP << 31 | _v2.SAP_type << 28 | _v2.SAP_delta_time);
    }
  }, _v11.smhdBox.prototype.write = function (_v0) {
    this.version = 0, this.flags = 1, this.size = 4, this.writeHeader(_v0), _v0.writeUint16(this.balance), _v0.writeUint16(0);
  }, _v11.stcoBox.prototype.write = function (_v0) {
    this.version = 0, this.flags = 0, this.size = 4 + 4 * this.chunk_offsets.length, this.writeHeader(_v0), _v0.writeUint32(this.chunk_offsets.length), _v0.writeUint32Array(this.chunk_offsets);
  }, _v11.stscBox.prototype.write = function (_v0) {
    var _v1;
    for (this.version = 0, this.flags = 0, this.size = 4 + 12 * this.first_chunk.length, this.writeHeader(_v0), _v0.writeUint32(this.first_chunk.length), _v1 = 0; _v1 < this.first_chunk.length; _v1++) _v0.writeUint32(this.first_chunk[_v1]), _v0.writeUint32(this.samples_per_chunk[_v1]), _v0.writeUint32(this.sample_description_index[_v1]);
  }, _v11.stsdBox.prototype.write = function (_v0) {
    var _v1;
    for (this.version = 0, this.flags = 0, this.size = 0, this.writeHeader(_v0), _v0.writeUint32(this.entries.length), this.size += 4, _v1 = 0; _v1 < this.entries.length; _v1++) this.entries[_v1].write(_v0), this.size += this.entries[_v1].size;
    _v5.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size), _v0.adjustUint32(this.sizePosition, this.size);
  }, _v11.stshBox.prototype.write = function (_v0) {
    var _v1;
    for (this.version = 0, this.flags = 0, this.size = 4 + 8 * this.shadowed_sample_numbers.length, this.writeHeader(_v0), _v0.writeUint32(this.shadowed_sample_numbers.length), _v1 = 0; _v1 < this.shadowed_sample_numbers.length; _v1++) _v0.writeUint32(this.shadowed_sample_numbers[_v1]), _v0.writeUint32(this.sync_sample_numbers[_v1]);
  }, _v11.stssBox.prototype.write = function (_v0) {
    this.version = 0, this.flags = 0, this.size = 4 + 4 * this.sample_numbers.length, this.writeHeader(_v0), _v0.writeUint32(this.sample_numbers.length), _v0.writeUint32Array(this.sample_numbers);
  }, _v11.stszBox.prototype.write = function (_v0) {
    var _v1,
      _v2 = !0;
    if (this.version = 0, this.flags = 0, this.sample_sizes.length > 0) {
      for (_v1 = 0; _v1 + 1 < this.sample_sizes.length;) if (this.sample_sizes[_v1 + 1] !== this.sample_sizes[0]) {
        _v2 = !1;
        break;
      } else _v1++;
    } else _v2 = !1;
    this.size = 8, _v2 || (this.size += 4 * this.sample_sizes.length), this.writeHeader(_v0), _v2 ? _v0.writeUint32(this.sample_sizes[0]) : _v0.writeUint32(0), _v0.writeUint32(this.sample_sizes.length), _v2 || _v0.writeUint32Array(this.sample_sizes);
  }, _v11.sttsBox.prototype.write = function (_v0) {
    var _v1;
    for (this.version = 0, this.flags = 0, this.size = 4 + 8 * this.sample_counts.length, this.writeHeader(_v0), _v0.writeUint32(this.sample_counts.length), _v1 = 0; _v1 < this.sample_counts.length; _v1++) _v0.writeUint32(this.sample_counts[_v1]), _v0.writeUint32(this.sample_deltas[_v1]);
  }, _v11.tfdtBox.prototype.write = function (_v0) {
    this.version = +(this.baseMediaDecodeTime > 0), this.flags = 0, this.size = 4, 1 === this.version && (this.size += 4), this.writeHeader(_v0), 1 === this.version ? _v0.writeUint64(this.baseMediaDecodeTime) : _v0.writeUint32(this.baseMediaDecodeTime);
  }, _v11.tfhdBox.prototype.write = function (_v0) {
    this.version = 0, this.size = 4, this.flags & _v11.TFHD_FLAG_BASE_DATA_OFFSET && (this.size += 8), this.flags & _v11.TFHD_FLAG_SAMPLE_DESC && (this.size += 4), this.flags & _v11.TFHD_FLAG_SAMPLE_DUR && (this.size += 4), this.flags & _v11.TFHD_FLAG_SAMPLE_SIZE && (this.size += 4), this.flags & _v11.TFHD_FLAG_SAMPLE_FLAGS && (this.size += 4), this.writeHeader(_v0), _v0.writeUint32(this.track_id), this.flags & _v11.TFHD_FLAG_BASE_DATA_OFFSET && _v0.writeUint64(this.base_data_offset), this.flags & _v11.TFHD_FLAG_SAMPLE_DESC && _v0.writeUint32(this.default_sample_description_index), this.flags & _v11.TFHD_FLAG_SAMPLE_DUR && _v0.writeUint32(this.default_sample_duration), this.flags & _v11.TFHD_FLAG_SAMPLE_SIZE && _v0.writeUint32(this.default_sample_size), this.flags & _v11.TFHD_FLAG_SAMPLE_FLAGS && _v0.writeUint32(this.default_sample_flags);
  }, _v11.tkhdBox.prototype.write = function (_v0) {
    this.version = 0, this.size = 80, this.writeHeader(_v0), _v0.writeUint32(this.creation_time), _v0.writeUint32(this.modification_time), _v0.writeUint32(this.track_id), _v0.writeUint32(0), _v0.writeUint32(this.duration), _v0.writeUint32(0), _v0.writeUint32(0), _v0.writeInt16(this.layer), _v0.writeInt16(this.alternate_group), _v0.writeInt16(this.volume << 8), _v0.writeUint16(0), _v0.writeInt32Array(this.matrix), _v0.writeUint32(this.width), _v0.writeUint32(this.height);
  }, _v11.trexBox.prototype.write = function (_v0) {
    this.version = 0, this.flags = 0, this.size = 20, this.writeHeader(_v0), _v0.writeUint32(this.track_id), _v0.writeUint32(this.default_sample_description_index), _v0.writeUint32(this.default_sample_duration), _v0.writeUint32(this.default_sample_size), _v0.writeUint32(this.default_sample_flags);
  }, _v11.trunBox.prototype.write = function (_v0) {
    this.version = 0, this.size = 4, this.flags & _v11.TRUN_FLAGS_DATA_OFFSET && (this.size += 4), this.flags & _v11.TRUN_FLAGS_FIRST_FLAG && (this.size += 4), this.flags & _v11.TRUN_FLAGS_DURATION && (this.size += 4 * this.sample_duration.length), this.flags & _v11.TRUN_FLAGS_SIZE && (this.size += 4 * this.sample_size.length), this.flags & _v11.TRUN_FLAGS_FLAGS && (this.size += 4 * this.sample_flags.length), this.flags & _v11.TRUN_FLAGS_CTS_OFFSET && (this.size += 4 * this.sample_composition_time_offset.length), this.writeHeader(_v0), _v0.writeUint32(this.sample_count), this.flags & _v11.TRUN_FLAGS_DATA_OFFSET && (this.data_offset_position = _v0.getPosition(), _v0.writeInt32(this.data_offset)), this.flags & _v11.TRUN_FLAGS_FIRST_FLAG && _v0.writeUint32(this.first_sample_flags);
    for (var _v1 = 0; _v1 < this.sample_count; _v1++) this.flags & _v11.TRUN_FLAGS_DURATION && _v0.writeUint32(this.sample_duration[_v1]), this.flags & _v11.TRUN_FLAGS_SIZE && _v0.writeUint32(this.sample_size[_v1]), this.flags & _v11.TRUN_FLAGS_FLAGS && _v0.writeUint32(this.sample_flags[_v1]), this.flags & _v11.TRUN_FLAGS_CTS_OFFSET && (0 === this.version ? _v0.writeUint32(this.sample_composition_time_offset[_v1]) : _v0.writeInt32(this.sample_composition_time_offset[_v1]));
  }, _v11["url Box"].prototype.write = function (_v0) {
    this.version = 0, this.location ? (this.flags = 0, this.size = this.location.length + 1) : (this.flags = 1, this.size = 0), this.writeHeader(_v0), this.location && _v0.writeCString(this.location);
  }, _v11["urn Box"].prototype.write = function (_v0) {
    this.version = 0, this.flags = 0, this.size = this.name.length + 1 + (this.location ? this.location.length + 1 : 0), this.writeHeader(_v0), _v0.writeCString(this.name), this.location && _v0.writeCString(this.location);
  }, _v11.vmhdBox.prototype.write = function (_v0) {
    this.version = 0, this.flags = 1, this.size = 8, this.writeHeader(_v0), _v0.writeUint16(this.graphicsmode), _v0.writeUint16Array(this.opcolor);
  }, _v11.cttsBox.prototype.unpack = function (_v0) {
    var _v1, _v2, _v3;
    for (_v1 = 0, _v3 = 0; _v1 < this.sample_counts.length; _v1++) for (_v2 = 0; _v2 < this.sample_counts[_v1]; _v2++) _v0[_v3].pts = _v0[_v3].dts + this.sample_offsets[_v1], _v3++;
  }, _v11.sttsBox.prototype.unpack = function (_v0) {
    var _v1, _v2, _v3;
    for (_v1 = 0, _v3 = 0; _v1 < this.sample_counts.length; _v1++) for (_v2 = 0; _v2 < this.sample_counts[_v1]; _v2++) 0 === _v3 ? _v0[_v3].dts = 0 : _v0[_v3].dts = _v0[_v3 - 1].dts + this.sample_deltas[_v1], _v3++;
  }, _v11.stcoBox.prototype.unpack = function (_v0) {
    var _v1;
    for (_v1 = 0; _v1 < this.chunk_offsets.length; _v1++) _v0[_v1].offset = this.chunk_offsets[_v1];
  }, _v11.stscBox.prototype.unpack = function (_v0) {
    var _v1, _v2, _v3, _v4, _v5;
    for (_v1 = 0, _v4 = 0, _v5 = 0; _v1 < this.first_chunk.length; _v1++) for (_v2 = 0; _v2 < (_v1 + 1 < this.first_chunk.length ? this.first_chunk[_v1 + 1] : 1 / 0); _v2++) for (_v5++, _v3 = 0; _v3 < this.samples_per_chunk[_v1]; _v3++) {
      if (!_v0[_v4]) return;
      _v0[_v4].description_index = this.sample_description_index[_v1], _v0[_v4].chunk_index = _v5, _v4++;
    }
  }, _v11.stszBox.prototype.unpack = function (_v0) {
    var _v1;
    for (_v1 = 0; _v1 < this.sample_sizes.length; _v1++) _v0[_v1].size = this.sample_sizes[_v1];
  }, _v11.DIFF_BOXES_PROP_NAMES = ["boxes", "entries", "references", "subsamples", "items", "item_infos", "extents", "associations", "subsegments", "ranges", "seekLists", "seekPoints", "esd", "levels"], _v11.DIFF_PRIMITIVE_ARRAY_PROP_NAMES = ["compatible_brands", "matrix", "opcolor", "sample_counts", "sample_counts", "sample_deltas", "first_chunk", "samples_per_chunk", "sample_sizes", "chunk_offsets", "sample_offsets", "sample_description_index", "sample_duration"], _v11.boxEqualFields = function (_v0, _v1) {
    var _v2;
    if (_v0 && !_v1) return !1;
    for (_v2 in _v0) if (_v11.DIFF_BOXES_PROP_NAMES.indexOf(_v2) > -1) continue;else if (_v0[_v2] instanceof _v11.Box || _v1[_v2] instanceof _v11.Box) continue;else if (void 0 === _v0[_v2] || void 0 === _v1[_v2]) continue;else if ("function" == typeof _v0[_v2] || "function" == typeof _v1[_v2]) continue;else if (_v0.subBoxNames && _v0.subBoxNames.indexOf(_v2.slice(0, 4)) > -1 || _v1.subBoxNames && _v1.subBoxNames.indexOf(_v2.slice(0, 4)) > -1) continue;else if ("data" === _v2 || "start" === _v2 || "size" === _v2 || "creation_time" === _v2 || "modification_time" === _v2) continue;else if (_v11.DIFF_PRIMITIVE_ARRAY_PROP_NAMES.indexOf(_v2) > -1) continue;else if (_v0[_v2] !== _v1[_v2]) return !1;
    return !0;
  }, _v11.boxEqual = function (_v0, _v1) {
    if (!_v11.boxEqualFields(_v0, _v1)) return !1;
    for (var _v2 = 0; _v2 < _v11.DIFF_BOXES_PROP_NAMES.length; _v2++) {
      var _v3 = _v11.DIFF_BOXES_PROP_NAMES[_v2];
      if (_v0[_v3] && _v1[_v3] && !_v11.boxEqual(_v0[_v3], _v1[_v3])) return !1;
    }
    return !0;
  };
  var _v14 = function () {};
  _v14.prototype.parseSample = function (_v0) {
    var _v1,
      _v2,
      _v3 = new _v6(_v0.buffer);
    for (_v1 = []; !_v3.isEos();) (_v2 = _v11.parseOneBox(_v3, !1)).code === _v11.OK && "vttc" === _v2.box.type && _v1.push(_v2.box);
    return _v1;
  }, _v14.prototype.getText = function (_v0, _v1, _v2) {
    function _v3(_v0, _v1, _v2) {
      return _v2 = _v2 || "0", (_v0 += "").length >= _v1 ? _v0 : Array(_v1 - _v0.length + 1).join(_v2) + _v0;
    }
    function _v4(_v0) {
      var _v1 = Math.floor(_v0 / 0),
        _v2 = Math.floor((_v0 - 0 * _v1) / 60),
        _v3 = Math.floor(_v0 - 0 * _v1 - 60 * _v2),
        _v4 = Math.floor((_v0 - 0 * _v1 - 60 * _v2 - _v3) * 0);
      return "" + _v3(_v1, 2) + ":" + _v3(_v2, 2) + ":" + _v3(_v3, 2) + "." + _v3(_v4, 3);
    }
    for (var _v5 = this.parseSample(_v2), _v6 = "", _v7 = 0; _v7 < _v5.length; _v7++) {
      var _v8 = _v5[_v7];
      _v6 += _v4(_v0) + " --> " + _v4(_v1) + "\r\n", _v6 += _v8.payl.text;
    }
    return _v6;
  };
  var _v15 = function () {};
  _v15.prototype.parseSample = function (_v0) {
    var _v1,
      _v2 = {};
    _v2.resources = [];
    var _v3 = new _v6(_v0.data.buffer);
    if (_v0.subsamples && 0 !== _v0.subsamples.length) {
      if (_v2.documentString = _v3.readString(_v0.subsamples[0].size), _v0.subsamples.length > 1) for (_v1 = 1; _v1 < _v0.subsamples.length; _v1++) _v2.resources[_v1] = _v3.readUint8Array(_v0.subsamples[_v1].size);
    } else _v2.documentString = _v3.readString(_v0.data.length);
    return "u" > typeof DOMParser && (_v2.document = new DOMParser().parseFromString(_v2.documentString, "application/xml")), _v2;
  };
  var _v16 = function () {};
  _v16.prototype.parseSample = function (_v0) {
    return new _v6(_v0.data.buffer).readString(_v0.data.length);
  }, _v16.prototype.parseConfig = function (_v0) {
    var _v1 = new _v6(_v0.buffer);
    return _v1.readUint32(), _v1.readCString();
  }, _v2.XMLSubtitlein4Parser = _v15, _v2.Textin4Parser = _v16;
  var _v17 = function (_v0) {
    this.stream = _v0 || new _v9(), this.boxes = [], this.mdats = [], this.moofs = [], this.isProgressive = !1, this.moovStartFound = !1, this.onMoovStart = null, this.moovStartSent = !1, this.onReady = null, this.readySent = !1, this.onSegment = null, this.onSamples = null, this.onError = null, this.sampleListBuilt = !1, this.fragmentedTracks = [], this.extractedTracks = [], this.isFragmentationInitialized = !1, this.sampleProcessingStarted = !1, this.nextMoofNumber = 0, this.itemListBuilt = !1, this.onSidx = null, this.sidxSent = !1;
  };
  _v17.prototype.setSegmentOptions = function (_v0, _v1, _v2) {
    var _v3 = this.getTrackById(_v0);
    if (_v3) {
      var _v4 = {};
      this.fragmentedTracks.push(_v4), _v4.id = _v0, _v4.user = _v1, _v4.trak = _v3, _v3.nextSample = 0, _v4.segmentStream = null, _v4.nb_samples = 0, _v4.rapAlignement = !0, _v2 && (_v2.nbSamples && (_v4.nb_samples = _v2.nbSamples), _v2.rapAlignement && (_v4.rapAlignement = _v2.rapAlignement));
    }
  }, _v17.prototype.unsetSegmentOptions = function (_v0) {
    for (var _v1 = -1, _v2 = 0; _v2 < this.fragmentedTracks.length; _v2++) this.fragmentedTracks[_v2].id == _v0 && (_v1 = _v2);
    _v1 > -1 && this.fragmentedTracks.splice(_v1, 1);
  }, _v17.prototype.setExtractionOptions = function (_v0, _v1, _v2) {
    var _v3 = this.getTrackById(_v0);
    if (_v3) {
      var _v4 = {};
      this.extractedTracks.push(_v4), _v4.id = _v0, _v4.user = _v1, _v4.trak = _v3, _v3.nextSample = 0, _v4.nb_samples = 0, _v4.samples = [], _v2 && _v2.nbSamples && (_v4.nb_samples = _v2.nbSamples);
    }
  }, _v17.prototype.unsetExtractionOptions = function (_v0) {
    for (var _v1 = -1, _v2 = 0; _v2 < this.extractedTracks.length; _v2++) this.extractedTracks[_v2].id == _v0 && (_v1 = _v2);
    _v1 > -1 && this.extractedTracks.splice(_v1, 1);
  }, _v17.prototype.parse = function () {
    var _v0, _v1, _v2;
    if (!this.restoreParsePosition || this.restoreParsePosition()) for (;;) if (this.hasIncompleteMdat && this.hasIncompleteMdat()) {
      if (this.processIncompleteMdat()) continue;else return;
    } else {
      if (this.saveParsePosition && this.saveParsePosition(), (_v0 = _v11.parseOneBox(this.stream, !1)).code === _v11.ERR_NOT_ENOUGH_DATA) {
        if (console.log("parse: ERR_NOT_ENOUGH_DATA"), !this.processIncompleteBox) return;
        if (this.processIncompleteBox(_v0)) continue;
        return;
      }
      switch (_v2 = "uuid" !== (_v1 = _v0.box).type ? _v1.type : _v1.uuid, this.boxes.push(_v1), _v2) {
        case "mdat":
          console.log("parse: mdat at ", this.stream.getPosition()), this.mdats.push(_v1);
          break;
        case "moof":
          console.log("parse: moof at ", this.stream.getPosition(), ", seq=", _v1.mfhd.sequence_number), this.moofs.push(_v1);
          break;
        case "moov":
          console.log("parse: moov at ", this.stream.getPosition()), this.moovStartFound = !0, 0 === this.mdats.length && (this.isProgressive = !0);
        default:
          void 0 !== this[_v2] && _v5.warn("ISOFile", "Duplicate Box of type: " + _v2 + ", overriding previous occurrence"), this[_v2] = _v1;
      }
      this.updateUsedBytes && this.updateUsedBytes(_v1, _v0);
    }
  }, _v17.prototype.checkBuffer = function (_v0) {
    if (null == _v0) throw "Buffer must be defined and non empty";
    if (void 0 === _v0.fileStart) throw "Buffer must have a fileStart property";
    return 0 === _v0.byteLength ? (_v5.warn("ISOFile", "Ignoring empty buffer (fileStart: " + _v0.fileStart + ")"), this.stream.logBufferLevel(), !1) : (_v5.info("ISOFile", "Processing buffer (fileStart: " + _v0.fileStart + ")"), _v0.usedBytes = 0, this.stream.insertBuffer(_v0), this.stream.logBufferLevel(), !!this.stream.initialized() || (_v5.warn("ISOFile", "Not ready to start parsing"), !1));
  }, _v17.prototype.go = function (_v0) {
    var _v1;
    return this.parse(), this.moovStartFound && !this.moovStartSent && (this.moovStartSent = !0, this.onMoovStart && this.onMoovStart()), this.moov ? (this.sampleListBuilt || (this.buildSampleLists(), this.sampleListBuilt = !0), this.updateSampleLists(), this.onReady && !this.readySent && (this.readySent = !0, this.onReady(this.getInfo())), this.processSamples(_v0, !0), this.nextSeekPosition ? (_v1 = this.nextSeekPosition, this.nextSeekPosition = void 0) : _v1 = this.nextParsePosition, this.stream.getEndFilePositionAfter && (_v1 = this.stream.getEndFilePositionAfter(_v1))) : _v1 = this.nextParsePosition ? this.nextParsePosition : 0, this.sidx && this.onSidx && !this.sidxSent && (this.onSidx(this.sidx), this.sidxSent = !0), this.meta && (this.flattenItemInfo && !this.itemListBuilt && (this.flattenItemInfo(), this.itemListBuilt = !0), this.processItems && this.processItems(this.onItem)), this.stream.cleanBuffers && (_v5.info("ISOFile", "Done processing buffer"), this.stream.logBufferLevel(), this.stream.cleanBuffers(), this.stream.logBufferLevel(!0), _v5.info("ISOFile", "Sample data size in memory: " + this.getAllocatedSampleDataSize())), _v1;
  }, _v17.prototype.appendBuffer = function (_v0, _v1) {
    var _v2;
    if (this.checkBuffer(_v0)) return console.log("ISO: appendBuffer: ab.fileStart=" + _v0.fileStart + ", buf=" + _v0.byteLength + ", endPos=" + this.stream.findEndContiguousBuf(0)), this.parse(), this.moovStartFound && !this.moovStartSent && (this.moovStartSent = !0, this.onMoovStart && this.onMoovStart()), this.moov ? (this.sampleListBuilt || (this.buildSampleLists(), this.sampleListBuilt = !0), this.updateSampleLists(), this.onReady && !this.readySent && (this.readySent = !0, this.onReady(this.getInfo())), this.processSamples(_v1), this.nextSeekPosition ? (_v2 = this.nextSeekPosition, this.nextSeekPosition = void 0) : _v2 = this.nextParsePosition, this.stream.getEndFilePositionAfter && (_v2 = this.stream.getEndFilePositionAfter(_v2))) : _v2 = this.nextParsePosition ? this.nextParsePosition : 0, this.sidx && this.onSidx && !this.sidxSent && (this.onSidx(this.sidx), this.sidxSent = !0), this.meta && (this.flattenItemInfo && !this.itemListBuilt && (this.flattenItemInfo(), this.itemListBuilt = !0), this.processItems && this.processItems(this.onItem)), this.stream.cleanBuffers && (_v5.info("ISOFile", "Done processing buffer (fileStart: " + _v0.fileStart + ") - next buffer to fetch should have a fileStart position of " + _v2), this.stream.logBufferLevel(), this.stream.cleanBuffers(), this.stream.logBufferLevel(!0), _v5.info("ISOFile", "Sample data size in memory: " + this.getAllocatedSampleDataSize())), _v2;
  }, _v17.prototype.getInfo = function () {
    var _v0,
      _v1,
      _v2,
      _v3,
      _v4,
      _v5,
      _v6 = {},
      _v7 = new Date("1904-01-01T00:00:00Z").getTime();
    if (this.moov) for (_v6.hasMoov = !0, _v6.duration = this.moov.mvhd.duration, _v6.timescale = this.moov.mvhd.timescale, _v6.isFragmented = null != this.moov.mvex, _v6.isFragmented && this.moov.mvex.mehd && (_v6.fragment_duration = this.moov.mvex.mehd.fragment_duration), _v6.isProgressive = this.isProgressive, _v6.hasIOD = null != this.moov.iods, _v6.brands = [], _v6.brands.push(this.ftyp.major_brand), _v6.brands = _v6.brands.concat(this.ftyp.compatible_brands), _v6.created = new Date(_v7 + 0 * this.moov.mvhd.creation_time), _v6.modified = new Date(_v7 + 0 * this.moov.mvhd.modification_time), _v6.tracks = [], _v6.audioTracks = [], _v6.videoTracks = [], _v6.subtitleTracks = [], _v6.metadataTracks = [], _v6.hintTracks = [], _v6.otherTracks = [], _v0 = 0; _v0 < this.moov.traks.length; _v0++) {
      if (_v5 = (_v2 = this.moov.traks[_v0]).mdia.minf.stbl.stsd.entries[0], _v3 = {}, _v6.tracks.push(_v3), _v3.id = _v2.tkhd.track_id, _v3.name = _v2.mdia.hdlr.name, _v3.references = [], _v2.tref) for (_v1 = 0; _v1 < _v2.tref.boxes.length; _v1++) _v4 = {}, _v3.references.push(_v4), _v4.type = _v2.tref.boxes[_v1].type, _v4.track_ids = _v2.tref.boxes[_v1].track_ids;
      _v2.edts && (_v3.edits = _v2.edts.elst.entries), _v3.created = new Date(_v7 + 0 * _v2.tkhd.creation_time), _v3.modified = new Date(_v7 + 0 * _v2.tkhd.modification_time), _v3.movie_duration = _v2.tkhd.duration, _v3.movie_timescale = _v6.timescale, _v3.layer = _v2.tkhd.layer, _v3.alternate_group = _v2.tkhd.alternate_group, _v3.volume = _v2.tkhd.volume, _v3.matrix = _v2.tkhd.matrix, _v3.track_width = _v2.tkhd.width / 0, _v3.track_height = _v2.tkhd.height / 0, _v3.timescale = _v2.mdia.mdhd.timescale, _v3.cts_shift = _v2.mdia.minf.stbl.cslg, _v3.duration = _v2.mdia.mdhd.duration, _v3.samples_duration = _v2.samples_duration, _v3.codec = _v5.getCodec(), _v3.kind = _v2.udta && _v2.udta.kinds.length ? _v2.udta.kinds[0] : {
        schemeURI: "",
        value: ""
      }, _v3.language = _v2.mdia.elng ? _v2.mdia.elng.extended_language : _v2.mdia.mdhd.languageString, _v3.nb_samples = _v2.samples.length, _v3.size = _v2.samples_size, _v3.bitrate = 8 * _v3.size * _v3.timescale / _v3.samples_duration, _v5.isAudio() ? (_v3.type = "audio", _v6.audioTracks.push(_v3), _v3.audio = {}, _v3.audio.sample_rate = _v5.getSampleRate(), _v3.audio.channel_count = _v5.getChannelCount(), _v3.audio.sample_size = _v5.getSampleSize()) : _v5.isVideo() ? (_v3.type = "video", _v6.videoTracks.push(_v3), _v3.video = {}, _v3.video.width = _v5.getWidth(), _v3.video.height = _v5.getHeight()) : _v5.isSubtitle() ? (_v3.type = "subtitles", _v6.subtitleTracks.push(_v3)) : _v5.isHint() ? (_v3.type = "metadata", _v6.hintTracks.push(_v3)) : _v5.isMetadata() ? (_v3.type = "metadata", _v6.metadataTracks.push(_v3)) : (_v3.type = "metadata", _v6.otherTracks.push(_v3));
    } else _v6.hasMoov = !1;
    if (_v6.mime = "", _v6.hasMoov && _v6.tracks) {
      for (_v6.videoTracks && _v6.videoTracks.length > 0 ? _v6.mime += 'video/mp4; codecs="' : _v6.audioTracks && _v6.audioTracks.length > 0 ? _v6.mime += 'audio/mp4; codecs="' : _v6.mime += 'application/mp4; codecs="', _v0 = 0; _v0 < _v6.tracks.length; _v0++) 0 !== _v0 && (_v6.mime += ","), _v6.mime += _v6.tracks[_v0].codec;
      _v6.mime += '"; profiles="', _v6.mime += this.ftyp.compatible_brands.join(), _v6.mime += '"';
    }
    return _v6;
  }, _v17.prototype.setNextSeekPositionFromSample = function (_v0) {
    _v0 && (this.nextSeekPosition ? this.nextSeekPosition = Math.min(_v0.offset + _v0.alreadyRead, this.nextSeekPosition) : this.nextSeekPosition = _v0.offset + _v0.alreadyRead);
  }, _v17.prototype.processSamples = function (_v0, _v1) {
    if (this.sampleProcessingStarted) {
      if (this.isFragmentationInitialized && null !== this.onSegment) for (_v2 = 0; _v2 < this.fragmentedTracks.length; _v2++) {
        var _v2,
          _v3,
          _v4 = this.fragmentedTracks[_v2];
        for (_v3 = _v4.trak; _v3.nextSample < _v3.samples.length && this.sampleProcessingStarted;) {
          _v5.debug("ISOFile", "Creating media fragment on track #" + _v4.id + " for sample " + _v3.nextSample);
          var _v5 = this.createFragment(_v4.id, _v3.nextSample, _v4.segmentStream);
          if (_v5) _v4.segmentStream = _v5, _v3.nextSample++;else break;
          if ((_v3.nextSample % _v4.nb_samples == 0 || _v0 || _v3.nextSample >= _v3.samples.length) && (_v5.info("ISOFile", "Sending fragmented data on track #" + _v4.id + " for samples [" + Math.max(0, _v3.nextSample - _v4.nb_samples) + "," + (_v3.nextSample - 1) + "]"), _v5.info("ISOFile", "Sample data size in memory: " + this.getAllocatedSampleDataSize()), this.onSegment && this.onSegment(_v4.id, _v4.user, _v4.segmentStream.buffer, _v3.nextSample, _v0 || _v3.nextSample >= _v3.samples.length), _v4.segmentStream = null, _v4 !== this.fragmentedTracks[_v2])) break;
        }
      }
      if (null !== this.onSamples) for (_v2 = 0; _v2 < this.extractedTracks.length; _v2++) {
        var _v6 = this.extractedTracks[_v2];
        for (console.log("trak.samples.length=", (_v3 = _v6.trak).samples.length); _v3.nextSample < _v3.samples.length && this.sampleProcessingStarted;) {
          _v5.debug("ISOFile", "Exporting on track #" + _v6.id + " sample #" + _v3.nextSample);
          var _v7 = _v3.samples[_v3.nextSample];
          if (_v7) _v3.nextSample++, _v6.samples.push(_v7);else {
            this.setNextSeekPositionFromSample(_v3.samples[_v3.nextSample]), console.log("break1");
            break;
          }
          if ((_v3.nextSample % _v6.nb_samples == 0 || _v3.nextSample >= _v3.samples.length) && (_v5.debug("ISOFile", "Sending samples on track #" + _v6.id + " for sample " + _v3.nextSample), this.onSamples && this.onSamples(_v6.id, _v6.user, _v6.samples), _v6.samples = [], _v6 !== this.extractedTracks[_v2])) {
            console.log("break2");
            break;
          }
        }
      }
    }
  }, _v17.prototype.getBox = function (_v0) {
    var _v1 = this.getBoxes(_v0, !0);
    return _v1.length ? _v1[0] : null;
  }, _v17.prototype.getBoxes = function (_v0, _v1) {
    var _v2 = [];
    return _v17._sweep.call(this, _v0, _v2, _v1), _v2;
  }, _v17._sweep = function (_v0, _v1, _v2) {
    for (var _v3 in this.type && this.type == _v0 && _v1.push(this), this.boxes) {
      if (_v1.length && _v2) return;
      _v17._sweep.call(this.boxes[_v3], _v0, _v1, _v2);
    }
  }, _v17.prototype.getTrackSamplesInfo = function (_v0) {
    var _v1 = this.getTrackById(_v0);
    return _v1 ? _v1.samples : void 0;
  }, _v17.prototype.getTrackSample = function (_v0, _v1) {
    var _v2 = this.getTrackById(_v0);
    return this.getSample(_v2, _v1);
  }, _v17.prototype.releaseUsedSamples = function (_v0, _v1) {
    var _v2 = 0,
      _v3 = this.getTrackById(_v0);
    _v3.lastValidSample || (_v3.lastValidSample = 0);
    for (var _v4 = _v3.lastValidSample; _v4 < _v1; _v4++) _v2 += this.releaseSample(_v3, _v4);
    _v5.info("ISOFile", "Track #" + _v0 + " released samples up to " + _v1 + " (released size: " + _v2 + ", remaining: " + this.samplesDataSize + ")"), _v3.lastValidSample = _v1;
  }, _v17.prototype.start = function () {
    this.sampleProcessingStarted = !0, this.processSamples(!1);
  }, _v17.prototype.stop = function () {
    this.sampleProcessingStarted = !1;
  }, _v17.prototype.flush = function () {
    console.log("ISOFile", "Flushing remaining samples"), console.log("flush: filePos=", this.stream.getPosition(), ", fileSize=", this.size), this.updateSampleLists(), this.processSamples(!0), this.stream.cleanBuffers(), this.stream.logBufferLevel(!0);
  }, _v17.prototype.seekTrack = function (_v0, _v1, _v2) {
    var _v3,
      _v4,
      _v5,
      _v6 = 1 / 0,
      _v7 = 0,
      _v8 = 0;
    if (0 === _v2.samples.length) return _v5.info("ISOFile", "No sample in track, cannot seek! Using time " + _v5.getDurationString(0, 1) + " and offset: 0"), {
      offset: 0,
      time: 0
    };
    for (_v3 = 0; _v3 < _v2.samples.length; _v3++) {
      if (_v4 = _v2.samples[_v3], 0 === _v3) _v8 = 0, _v5 = _v4.timescale;else if (_v4.cts > _v0 * _v4.timescale) {
        _v8 = _v3 - 1;
        break;
      }
      _v1 && _v4.is_sync && (_v7 = _v3);
    }
    for (_v1 && (_v8 = _v7), _v0 = _v2.samples[_v8].cts, _v2.nextSample = _v8; _v2.samples[_v8].alreadyRead === _v2.samples[_v8].size && _v2.samples[_v8 + 1];) _v8++;
    return _v6 = _v2.samples[_v8].offset + _v2.samples[_v8].alreadyRead, _v5.info("ISOFile", "Seeking to " + (_v1 ? "RAP" : "") + " sample #" + _v2.nextSample + " on track " + _v2.tkhd.track_id + ", time " + _v5.getDurationString(_v0, _v5) + " and offset: " + _v6), {
      offset: _v6,
      time: _v0 / _v5
    };
  }, _v17.prototype.getTrackDuration = function (_v0) {
    var _v1;
    return _v0.samples ? ((_v1 = _v0.samples[_v0.samples.length - 1]).cts + _v1.duration) / _v1.timescale : 1 / 0;
  }, _v17.prototype.seek = function (_v0, _v1) {
    var _v2,
      _v3,
      _v4,
      _v5 = this.moov,
      _v6 = {
        offset: 1 / 0,
        time: 1 / 0
      };
    if (this.moov) {
      for (_v4 = 0; _v4 < _v5.traks.length; _v4++) _v2 = _v5.traks[_v4], !(_v0 > this.getTrackDuration(_v2)) && ((_v3 = this.seekTrack(_v0, _v1, _v2)).offset < _v6.offset && (_v6.offset = _v3.offset), _v3.time < _v6.time && (_v6.time = _v3.time));
      return _v5.info("ISOFile", "Seeking at time " + _v5.getDurationString(_v6.time, 1) + " needs a buffer with a fileStart position of " + _v6.offset), _v6.offset === 1 / 0 ? _v6 = {
        offset: this.nextParsePosition,
        time: 0
      } : _v6.offset = this.stream.getEndFilePositionAfter(_v6.offset), _v5.info("ISOFile", "Adjusted seek position (after checking data already in buffer): " + _v6.offset), _v6;
    }
    throw "Cannot seek: moov not received!";
  }, _v17.prototype.equal = function (_v0) {
    for (var _v1 = 0; _v1 < this.boxes.length && _v1 < _v0.boxes.length;) {
      var _v2 = this.boxes[_v1],
        _v3 = _v0.boxes[_v1];
      if (!_v11.boxEqual(_v2, _v3)) return !1;
      _v1++;
    }
    return !0;
  }, _v2.ISOFile = _v17, _v17.prototype.lastBoxStartPosition = 0, _v17.prototype.parsingMdat = null, _v17.prototype.nextParsePosition = 0, _v17.prototype.discardMdatData = !1, _v17.prototype.processIncompleteBox = function (_v0) {
    var _v1;
    return "mdat" === _v0.type ? (_v1 = new _v11[_v0.type + "Box"](_v0.size), this.parsingMdat = _v1, this.boxes.push(_v1), this.mdats.push(_v1), _v1.start = _v0.start, _v1.hdr_size = _v0.hdr_size, this.stream.addUsedBytes(_v1.hdr_size), this.lastBoxStartPosition = _v1.start + _v1.size, this.stream.seek(_v1.start + _v1.size, !1, this.discardMdatData)) ? (this.parsingMdat = null, !0) : (this.moovStartFound ? this.nextParsePosition = this.stream.findEndContiguousBuf() : this.nextParsePosition = _v1.start + _v1.size, !1) : ("moov" === _v0.type && (this.moovStartFound = !0, 0 === this.mdats.length && (this.isProgressive = !0)), this.stream.mergeNextBuffer && this.stream.mergeNextBuffer()) ? (this.nextParsePosition = this.stream.getEndPosition(), !0) : (_v0.type ? this.moovStartFound ? this.nextParsePosition = this.stream.getEndPosition() : this.nextParsePosition = this.stream.getPosition() + _v0.size : this.nextParsePosition = this.stream.getEndPosition(), !1);
  }, _v17.prototype.hasIncompleteMdat = function () {
    return null !== this.parsingMdat;
  }, _v17.prototype.processIncompleteMdat = function () {
    var _v0;
    return (_v0 = this.parsingMdat, this.stream.seek(_v0.start + _v0.size, !1, this.discardMdatData)) ? (_v5.debug("ISOFile", "Found 'mdat' end in buffered data"), this.parsingMdat = null, !0) : (this.nextParsePosition = this.stream.findEndContiguousBuf(), !1);
  }, _v17.prototype.restoreParsePosition = function () {
    return this.stream.seek(this.lastBoxStartPosition, !0, this.discardMdatData);
  }, _v17.prototype.saveParsePosition = function () {
    this.lastBoxStartPosition = this.stream.getPosition();
  }, _v17.prototype.updateUsedBytes = function (_v0, _v1) {
    this.stream.addUsedBytes && ("mdat" === _v0.type ? (this.stream.addUsedBytes(_v0.hdr_size), this.discardMdatData && this.stream.addUsedBytes(_v0.size - _v0.hdr_size)) : this.stream.addUsedBytes(_v0.size));
  }, _v17.prototype.add = _v11.Box.prototype.add, _v17.prototype.addBox = _v11.Box.prototype.addBox, _v17.prototype.init = function (_v0) {
    var _v1 = _v0 || {};
    this.add("ftyp").set("major_brand", _v1.brands && _v1.brands[0] || "iso4").set("minor_version", 0).set("compatible_brands", _v1.brands || ["iso4"]);
    var _v2 = this.add("moov");
    return _v2.add("mvhd").set("timescale", _v1.timescale || 600).set("rate", _v1.rate || 0).set("creation_time", 0).set("modification_time", 0).set("duration", _v1.duration || 0).set("volume", 256 * !_v1.width).set("matrix", [0, 0, 0, 0, 0, 0, 0, 0, 0]).set("next_track_id", 1), _v2.add("mvex"), this;
  }, _v17.prototype.addTrack = function (_v0) {
    this.moov || this.init(_v0);
    var _v1 = _v0 || {};
    _v1.width = _v1.width || 320, _v1.height = _v1.height || 320, _v1.id = _v1.id || this.moov.mvhd.next_track_id, _v1.type = _v1.type || "avc1";
    var _v2 = this.moov.add("trak");
    this.moov.mvhd.next_track_id = _v1.id + 1, _v2.add("tkhd").set("flags", _v11.TKHD_FLAG_ENABLED | _v11.TKHD_FLAG_IN_MOVIE | _v11.TKHD_FLAG_IN_PREVIEW).set("creation_time", 0).set("modification_time", 0).set("track_id", _v1.id).set("duration", _v1.duration || 0).set("layer", _v1.layer || 0).set("alternate_group", 0).set("volume", 1).set("matrix", [0, 0, 0, 0, 0, 0, 0, 0, 0]).set("width", _v1.width << 16).set("height", _v1.height << 16);
    var _v3 = _v2.add("mdia");
    _v3.add("mdhd").set("creation_time", 0).set("modification_time", 0).set("timescale", _v1.timescale || 1).set("duration", _v1.media_duration || 0).set("language", _v1.language || "und"), _v3.add("hdlr").set("handler", _v1.hdlr || "vide").set("name", _v1.name || "Track created with MP4Box.js"), _v3.add("elng").set("extended_language", _v1.language || "fr-FR");
    var _v4 = _v3.add("minf");
    if (void 0 !== _v11[_v1.type + "SampleEntry"]) {
      var _v5 = new _v11[_v1.type + "SampleEntry"]();
      _v5.data_reference_index = 1;
      var _v6 = "";
      for (var _v7 in _v11.sampleEntryCodes) for (var _v8 = _v11.sampleEntryCodes[_v7], _v9 = 0; _v9 < _v8.length; _v9++) if (_v8.indexOf(_v1.type) > -1) {
        _v6 = _v7;
        break;
      }
      switch (_v6) {
        case "Visual":
          if (_v4.add("vmhd").set("graphicsmode", 0).set("opcolor", [0, 0, 0]), _v5.set("width", _v1.width).set("height", _v1.height).set("horizresolution", 0).set("vertresolution", 0).set("frame_count", 1).set("compressorname", _v1.type + " Compressor").set("depth", 24), _v1.avcDecoderConfigRecord) {
            var _v10 = new _v11.avcCBox();
            _v10.parse(new _v6(_v1.avcDecoderConfigRecord)), _v5.addBox(_v10);
          } else if (_v1.hevcDecoderConfigRecord) {
            var _v11 = new _v11.hvcCBox();
            _v11.parse(new _v6(_v1.hevcDecoderConfigRecord)), _v5.addBox(_v11);
          }
          break;
        case "Audio":
          _v4.add("smhd").set("balance", _v1.balance || 0), _v5.set("channel_count", _v1.channel_count || 2).set("samplesize", _v1.samplesize || 16).set("samplerate", _v1.samplerate || 0);
          break;
        case "Hint":
          _v4.add("hmhd");
          break;
        case "Subtitle":
          _v4.add("sthd"), "stpp" === _v1.type && _v5.set("namespace", _v1.namespace || "nonamespace").set("schema_location", _v1.schema_location || "").set("auxiliary_mime_types", _v1.auxiliary_mime_types || "");
          break;
        default:
          _v4.add("nmhd");
      }
      _v1.description && _v5.addBox(_v1.description), _v1.description_boxes && _v1.description_boxes.forEach(function (_v0) {
        _v5.addBox(_v0);
      }), _v4.add("dinf").add("dref").addEntry(new _v11["url Box"]().set("flags", 1));
      var _v12 = _v4.add("stbl");
      return _v12.add("stsd").addEntry(_v5), _v12.add("stts").set("sample_counts", []).set("sample_deltas", []), _v12.add("stsc").set("first_chunk", []).set("samples_per_chunk", []).set("sample_description_index", []), _v12.add("stco").set("chunk_offsets", []), _v12.add("stsz").set("sample_sizes", []), this.moov.mvex.add("trex").set("track_id", _v1.id).set("default_sample_description_index", _v1.default_sample_description_index || 1).set("default_sample_duration", _v1.default_sample_duration || 0).set("default_sample_size", _v1.default_sample_size || 0).set("default_sample_flags", _v1.default_sample_flags || 0), this.buildTrakSampleLists(_v2), _v1.id;
    }
  }, _v11.Box.prototype.computeSize = function (_v0) {
    var _v1 = _v0 || new _v7();
    _v1.endianness = _v7.BIG_ENDIAN, this.write(_v1);
  }, _v17.prototype.addSample = function (_v0, _v1, _v2) {
    var _v3 = _v2 || {},
      _v4 = {},
      _v5 = this.getTrackById(_v0);
    if (null !== _v5) {
      _v4.number = _v5.samples.length, _v4.track_id = _v5.tkhd.track_id, _v4.timescale = _v5.mdia.mdhd.timescale, _v4.description_index = _v3.sample_description_index ? _v3.sample_description_index - 1 : 0, _v4.description = _v5.mdia.minf.stbl.stsd.entries[_v4.description_index], _v4.data = _v1, _v4.size = _v1.byteLength, _v4.alreadyRead = _v4.size, _v4.duration = _v3.duration || 1, _v4.cts = _v3.cts || 0, _v4.dts = _v3.dts || 0, _v4.is_sync = _v3.is_sync || !1, _v4.is_leading = _v3.is_leading || 0, _v4.depends_on = _v3.depends_on || 0, _v4.is_depended_on = _v3.is_depended_on || 0, _v4.has_redundancy = _v3.has_redundancy || 0, _v4.degradation_priority = _v3.degradation_priority || 0, _v4.offset = 0, _v4.subsamples = _v3.subsamples, _v5.samples.push(_v4), _v5.samples_size += _v4.size, _v5.samples_duration += _v4.duration, void 0 === _v5.first_dts && (_v5.first_dts = _v3.dts), this.processSamples();
      var _v6 = this.createSingleSampleMoof(_v4);
      return this.addBox(_v6), _v6.computeSize(), _v6.trafs[0].truns[0].data_offset = _v6.size + 8, this.add("mdat").data = new Uint8Array(_v1), _v4;
    }
  }, _v17.prototype.createSingleSampleMoof = function (_v0) {
    var _v1 = 0;
    _v1 = _v0.is_sync ? 0 : 0;
    var _v2 = new _v11.moofBox();
    _v2.add("mfhd").set("sequence_number", this.nextMoofNumber), this.nextMoofNumber++;
    var _v3 = _v2.add("traf"),
      _v4 = this.getTrackById(_v0.track_id);
    return _v3.add("tfhd").set("track_id", _v0.track_id).set("flags", _v11.TFHD_FLAG_DEFAULT_BASE_IS_MOOF), _v3.add("tfdt").set("baseMediaDecodeTime", _v0.dts - (_v4.first_dts || 0)), _v3.add("trun").set("flags", _v11.TRUN_FLAGS_DATA_OFFSET | _v11.TRUN_FLAGS_DURATION | _v11.TRUN_FLAGS_SIZE | _v11.TRUN_FLAGS_FLAGS | _v11.TRUN_FLAGS_CTS_OFFSET).set("data_offset", 0).set("first_sample_flags", 0).set("sample_count", 1).set("sample_duration", [_v0.duration]).set("sample_size", [_v0.size]).set("sample_flags", [_v1]).set("sample_composition_time_offset", [_v0.cts - _v0.dts]), _v2;
  }, _v17.prototype.lastMoofIndex = 0, _v17.prototype.samplesDataSize = 0, _v17.prototype.resetTables = function () {
    for (this.initial_duration = this.moov.mvhd.duration, this.moov.mvhd.duration = 0, _v0 = 0; _v0 < this.moov.traks.length; _v0++) {
      (_v1 = this.moov.traks[_v0]).tkhd.duration = 0, _v1.mdia.mdhd.duration = 0, (_v1.mdia.minf.stbl.stco || _v1.mdia.minf.stbl.co64).chunk_offsets = [], (_v2 = _v1.mdia.minf.stbl.stsc).first_chunk = [], _v2.samples_per_chunk = [], _v2.sample_description_index = [], (_v1.mdia.minf.stbl.stsz || _v1.mdia.minf.stbl.stz2).sample_sizes = [], (_v3 = _v1.mdia.minf.stbl.stts).sample_counts = [], _v3.sample_deltas = [], (_v4 = _v1.mdia.minf.stbl.ctts) && (_v4.sample_counts = [], _v4.sample_offsets = []);
      var _v0,
        _v1,
        _v2,
        _v3,
        _v4,
        _v5 = _v1.mdia.minf.stbl.stss,
        _v6 = _v1.mdia.minf.stbl.boxes.indexOf(_v5);
      -1 != _v6 && (_v1.mdia.minf.stbl.boxes[_v6] = null);
    }
  }, _v17.initSampleGroups = function (_v0, _v1, _v2, _v3, _v4) {
    var _v5, _v6, _v7, _v8;
    function _v9(_v0, _v1, _v2) {
      this.grouping_type = _v0, this.grouping_type_parameter = _v1, this.sbgp = _v2, this.last_sample_in_run = -1, this.entry_index = -1;
    }
    for (_v1 && (_v1.sample_groups_info = []), _v0.sample_groups_info || (_v0.sample_groups_info = []), _v6 = 0; _v6 < _v2.length; _v6++) {
      for (_v8 = _v2[_v6].grouping_type + "/" + _v2[_v6].grouping_type_parameter, _v7 = new _v9(_v2[_v6].grouping_type, _v2[_v6].grouping_type_parameter, _v2[_v6]), _v1 && (_v1.sample_groups_info[_v8] = _v7), _v0.sample_groups_info[_v8] || (_v0.sample_groups_info[_v8] = _v7), _v5 = 0; _v5 < _v3.length; _v5++) _v3[_v5].grouping_type === _v2[_v6].grouping_type && (_v7.description = _v3[_v5], _v7.description.used = !0);
      if (_v4) for (_v5 = 0; _v5 < _v4.length; _v5++) _v4[_v5].grouping_type === _v2[_v6].grouping_type && (_v7.fragment_description = _v4[_v5], _v7.fragment_description.used = !0, _v7.is_fragment = !0);
    }
    if (_v1) {
      if (_v4) for (_v6 = 0; _v6 < _v4.length; _v6++) !_v4[_v6].used && _v4[_v6].version >= 2 && (_v8 = _v4[_v6].grouping_type + "/0", (_v7 = new _v9(_v4[_v6].grouping_type, 0)).is_fragment = !0, _v1.sample_groups_info[_v8] || (_v1.sample_groups_info[_v8] = _v7));
    } else for (_v6 = 0; _v6 < _v3.length; _v6++) !_v3[_v6].used && _v3[_v6].version >= 2 && (_v8 = _v3[_v6].grouping_type + "/0", _v7 = new _v9(_v3[_v6].grouping_type, 0), _v0.sample_groups_info[_v8] || (_v0.sample_groups_info[_v8] = _v7));
  }, _v17.setSampleGroupProperties = function (_v0, _v1, _v2, _v3) {
    var _v4, _v5, _v6;
    for (_v4 in _v1.sample_groups = [], _v3) _v1.sample_groups[_v4] = {}, _v1.sample_groups[_v4].grouping_type = _v3[_v4].grouping_type, _v1.sample_groups[_v4].grouping_type_parameter = _v3[_v4].grouping_type_parameter, _v2 >= _v3[_v4].last_sample_in_run && (_v3[_v4].last_sample_in_run < 0 && (_v3[_v4].last_sample_in_run = 0), _v3[_v4].entry_index++, _v3[_v4].entry_index <= _v3[_v4].sbgp.entries.length - 1 && (_v3[_v4].last_sample_in_run += _v3[_v4].sbgp.entries[_v3[_v4].entry_index].sample_count)), _v3[_v4].entry_index <= _v3[_v4].sbgp.entries.length - 1 ? _v1.sample_groups[_v4].group_description_index = _v3[_v4].sbgp.entries[_v3[_v4].entry_index].group_description_index : _v1.sample_groups[_v4].group_description_index = -1, 0 !== _v1.sample_groups[_v4].group_description_index && (_v6 = _v3[_v4].fragment_description ? _v3[_v4].fragment_description : _v3[_v4].description, _v1.sample_groups[_v4].group_description_index > 0 ? (_v5 = _v1.sample_groups[_v4].group_description_index > 0 ? (_v1.sample_groups[_v4].group_description_index >> 16) - 1 : _v1.sample_groups[_v4].group_description_index - 1, _v6 && _v5 >= 0 && (_v1.sample_groups[_v4].description = _v6.entries[_v5])) : _v6 && _v6.version >= 2 && _v6.default_group_description_index > 0 && (_v1.sample_groups[_v4].description = _v6.entries[_v6.default_group_description_index - 1]));
  }, _v17.process_sdtp = function (_v0, _v1, _v2) {
    _v1 && (_v0 ? (_v1.is_leading = _v0.is_leading[_v2], _v1.depends_on = _v0.sample_depends_on[_v2], _v1.is_depended_on = _v0.sample_is_depended_on[_v2], _v1.has_redundancy = _v0.sample_has_redundancy[_v2]) : (_v1.is_leading = 0, _v1.depends_on = 0, _v1.is_depended_on = 0, _v1.has_redundancy = 0));
  }, _v17.prototype.buildSampleLists = function () {
    var _v0, _v1;
    for (_v0 = 0; _v0 < this.moov.traks.length; _v0++) _v1 = this.moov.traks[_v0], this.buildTrakSampleLists(_v1);
  }, _v17.prototype.buildTrakSampleLists = function (_v0) {
    if (_v0.samples = [], _v0.samples_duration = 0, _v0.samples_size = 0, _v2 = _v0.mdia.minf.stbl.stco || _v0.mdia.minf.stbl.co64, _v3 = _v0.mdia.minf.stbl.stsc, _v4 = _v0.mdia.minf.stbl.stsz || _v0.mdia.minf.stbl.stz2, _v5 = _v0.mdia.minf.stbl.stts, _v6 = _v0.mdia.minf.stbl.ctts, _v7 = _v0.mdia.minf.stbl.stss, _v8 = _v0.mdia.minf.stbl.stsd, _v9 = _v0.mdia.minf.stbl.subs, _v12 = _v0.mdia.minf.stbl.stdp, _v10 = _v0.mdia.minf.stbl.sbgps, _v11 = _v0.mdia.minf.stbl.sgpds, _v18 = -1, _v19 = -1, _v20 = -1, _v21 = -1, _v22 = 0, _v23 = 0, _v24 = 0, _v17.initSampleGroups(_v0, null, _v10, _v11), void 0 !== _v4) {
      for (console.log("buildTrakSampleLists: stsz.sample_sizes=", _v4.sample_sizes.length), console.log("filePosition=", this.stream.getPosition()), _v1 = 0; _v1 < _v4.sample_sizes.length; _v1++) {
        var _v1,
          _v2,
          _v3,
          _v4,
          _v5,
          _v6,
          _v7,
          _v8,
          _v9,
          _v10,
          _v11,
          _v12,
          _v13,
          _v14,
          _v15,
          _v16,
          _v17,
          _v18,
          _v19,
          _v20,
          _v21,
          _v22,
          _v23,
          _v24,
          _v25 = {};
        _v25.number = _v1, _v25.track_id = _v0.tkhd.track_id, _v25.timescale = _v0.mdia.mdhd.timescale, _v25.alreadyRead = 0, _v0.samples[_v1] = _v25, _v25.size = _v4.sample_sizes[_v1], _v0.samples_size += _v25.size, 0 === _v1 ? (_v13 = 0, _v25.chunk_index = _v14 = 1, _v25.chunk_run_index = _v13, _v17 = _v3.samples_per_chunk[_v13], _v16 = 0, _v15 = _v13 + 1 < _v3.first_chunk.length ? _v3.first_chunk[_v13 + 1] - 1 : 1 / 0) : _v1 < _v17 ? (_v25.chunk_index = _v14, _v25.chunk_run_index = _v13) : (_v25.chunk_index = ++_v14, _v16 = 0, _v14 <= _v15 || (_v15 = ++_v13 + 1 < _v3.first_chunk.length ? _v3.first_chunk[_v13 + 1] - 1 : 1 / 0), _v25.chunk_run_index = _v13, _v17 += _v3.samples_per_chunk[_v13]), _v25.description_index = _v3.sample_description_index[_v25.chunk_run_index] - 1, _v25.description = _v8.entries[_v25.description_index], _v25.offset = _v2.chunk_offsets[_v25.chunk_index - 1] + _v16, _v16 += _v25.size, _v1 > _v18 && (_v19++, _v18 < 0 && (_v18 = 0), _v18 += _v5.sample_counts[_v19]), _v1 > 0 ? (_v0.samples[_v1 - 1].duration = _v5.sample_deltas[_v19], _v0.samples_duration += _v0.samples[_v1 - 1].duration, _v25.dts = _v0.samples[_v1 - 1].dts + _v0.samples[_v1 - 1].duration) : _v25.dts = 0, _v6 ? (_v1 >= _v20 && (_v21++, _v20 < 0 && (_v20 = 0), _v20 += _v6.sample_counts[_v21]), _v25.cts = _v0.samples[_v1].dts + _v6.sample_offsets[_v21]) : _v25.cts = _v25.dts, _v7 ? (_v1 == _v7.sample_numbers[_v22] - 1 ? (_v25.is_sync = !0, _v22++) : (_v25.is_sync = !1, _v25.degradation_priority = 0), _v9 && _v9.entries[_v23].sample_delta + _v24 == _v1 + 1 && (_v25.subsamples = _v9.entries[_v23].subsamples, _v24 += _v9.entries[_v23].sample_delta, _v23++)) : _v25.is_sync = !0, _v17.process_sdtp(_v0.mdia.minf.stbl.sdtp, _v25, _v25.number), _v12 ? _v25.degradation_priority = _v12.priority[_v1] : _v25.degradation_priority = 0, _v9 && _v9.entries[_v23].sample_delta + _v24 == _v1 && (_v25.subsamples = _v9.entries[_v23].subsamples, _v24 += _v9.entries[_v23].sample_delta), (_v10.length > 0 || _v11.length > 0) && _v17.setSampleGroupProperties(_v0, _v25, _v1, _v0.sample_groups_info);
      }
      _v1 > 0 && (_v0.samples[_v1 - 1].duration = Math.max(_v0.mdia.mdhd.duration - _v0.samples[_v1 - 1].dts, 0), _v0.samples_duration += _v0.samples[_v1 - 1].duration);
    }
  }, _v17.prototype.updateSampleLists = function () {
    if (void 0 !== this.moov) {
      for (; this.lastMoofIndex < this.moofs.length;) if (_v8 = this.moofs[this.lastMoofIndex], this.lastMoofIndex++, "moof" == _v8.type) for (_v0 = 0; _v0 < _v8.trafs.length; _v0++) {
        for (_v9 = _v8.trafs[_v0], _v10 = this.getTrackById(_v9.tfhd.track_id), _v11 = this.getTrexById(_v9.tfhd.track_id), _v3 = _v9.tfhd.flags & _v11.TFHD_FLAG_SAMPLE_DESC ? _v9.tfhd.default_sample_description_index : _v11 ? _v11.default_sample_description_index : 1, _v4 = _v9.tfhd.flags & _v11.TFHD_FLAG_SAMPLE_DUR ? _v9.tfhd.default_sample_duration : _v11 ? _v11.default_sample_duration : 0, _v5 = _v9.tfhd.flags & _v11.TFHD_FLAG_SAMPLE_SIZE ? _v9.tfhd.default_sample_size : _v11 ? _v11.default_sample_size : 0, _v6 = _v9.tfhd.flags & _v11.TFHD_FLAG_SAMPLE_FLAGS ? _v9.tfhd.default_sample_flags : _v11 ? _v11.default_sample_flags : 0, _v9.sample_number = 0, _v9.sbgps.length > 0 && _v17.initSampleGroups(_v10, _v9, _v9.sbgps, _v10.mdia.minf.stbl.sgpds, _v9.sgpds), _v1 = 0; _v1 < _v9.truns.length; _v1++) {
          var _v0,
            _v1,
            _v2,
            _v3,
            _v4,
            _v5,
            _v6,
            _v7,
            _v8,
            _v9,
            _v10,
            _v11,
            _v12,
            _v13,
            _v14 = _v9.truns[_v1];
          for (_v2 = 0; _v2 < _v14.sample_count; _v2++) {
            (_v12 = {}).moof_number = this.lastMoofIndex, _v12.number_in_traf = _v9.sample_number, _v9.sample_number++, _v12.number = _v10.samples.length, _v9.first_sample_index = _v10.samples.length, _v10.samples.push(_v12), _v12.track_id = _v10.tkhd.track_id, _v12.timescale = _v10.mdia.mdhd.timescale, _v12.description_index = _v3 - 1, _v12.description = _v10.mdia.minf.stbl.stsd.entries[_v12.description_index], _v12.size = _v5, _v14.flags & _v11.TRUN_FLAGS_SIZE && (_v12.size = _v14.sample_size[_v2]), _v10.samples_size += _v12.size, _v12.duration = _v4, _v14.flags & _v11.TRUN_FLAGS_DURATION && (_v12.duration = _v14.sample_duration[_v2]), _v10.samples_duration += _v12.duration, _v10.first_traf_merged || _v2 > 0 ? _v12.dts = _v10.samples[_v10.samples.length - 2].dts + _v10.samples[_v10.samples.length - 2].duration : (_v9.tfdt ? _v12.dts = _v9.tfdt.baseMediaDecodeTime : _v12.dts = 0, _v10.first_traf_merged = !0), _v12.cts = _v12.dts, _v14.flags & _v11.TRUN_FLAGS_CTS_OFFSET && (_v12.cts = _v12.dts + _v14.sample_composition_time_offset[_v2]), _v13 = _v6, _v14.flags & _v11.TRUN_FLAGS_FLAGS ? _v13 = _v14.sample_flags[_v2] : 0 === _v2 && _v14.flags & _v11.TRUN_FLAGS_FIRST_FLAG && (_v13 = _v14.first_sample_flags), _v12.is_sync = !(_v13 >> 16 & 1), _v12.is_leading = _v13 >> 26 & 3, _v12.depends_on = _v13 >> 24 & 3, _v12.is_depended_on = _v13 >> 22 & 3, _v12.has_redundancy = _v13 >> 20 & 3, _v12.degradation_priority = 0 & _v13;
            var _v15 = !!(_v9.tfhd.flags & _v11.TFHD_FLAG_BASE_DATA_OFFSET),
              _v16 = !!(_v9.tfhd.flags & _v11.TFHD_FLAG_DEFAULT_BASE_IS_MOOF),
              _v17 = !!(_v14.flags & _v11.TRUN_FLAGS_DATA_OFFSET),
              _v18 = 0;
            _v18 = _v15 ? _v9.tfhd.base_data_offset : _v16 || 0 === _v1 ? _v8.start : _v7, 0 === _v1 && 0 === _v2 ? _v17 ? _v12.offset = _v18 + _v14.data_offset : _v12.offset = _v18 : _v12.offset = _v7, _v7 = _v12.offset + _v12.size, (_v9.sbgps.length > 0 || _v9.sgpds.length > 0 || _v10.mdia.minf.stbl.sbgps.length > 0 || _v10.mdia.minf.stbl.sgpds.length > 0) && _v17.setSampleGroupProperties(_v10, _v12, _v12.number_in_traf, _v9.sample_groups_info);
          }
        }
        if (_v9.subs) {
          _v10.has_fragment_subsamples = !0;
          var _v19 = _v9.first_sample_index;
          for (_v1 = 0; _v1 < _v9.subs.entries.length; _v1++) _v19 += _v9.subs.entries[_v1].sample_delta, (_v12 = _v10.samples[_v19 - 1]).subsamples = _v9.subs.entries[_v1].subsamples;
        }
      }
    }
  }, _v17.prototype.getSample = function (_v0, _v1) {
    var _v2,
      _v3 = _v0.samples[_v1];
    if (!this.moov) return null;
    if (_v3.data) {
      if (_v3.alreadyRead == _v3.size) return _v3;
    } else _v3.data = new Uint8Array(_v3.size), _v3.alreadyRead = 0, this.samplesDataSize += _v3.size, _v5.debug("ISOFile", "Allocating sample #" + _v1 + " on track #" + _v0.tkhd.track_id + " of size " + _v3.size + " (total: " + this.samplesDataSize + ")");
    for (;;) {
      var _v4 = this.stream.findPosition(!0, _v3.offset + _v3.alreadyRead, !1);
      if (!(_v4 > -1)) return null;
      var _v5 = (_v2 = this.stream.buffers[_v4]).byteLength - (_v3.offset + _v3.alreadyRead - _v2.fileStart);
      if (_v3.size - _v3.alreadyRead <= _v5) return _v5.debug("ISOFile", "Getting sample #" + _v1 + " data (alreadyRead: " + _v3.alreadyRead + " offset: " + (_v3.offset + _v3.alreadyRead - _v2.fileStart) + " read size: " + (_v3.size - _v3.alreadyRead) + " full size: " + _v3.size + ")"), _v7.memcpy(_v3.data.buffer, _v3.alreadyRead, _v2, _v3.offset + _v3.alreadyRead - _v2.fileStart, _v3.size - _v3.alreadyRead), _v2.usedBytes += _v3.size - _v3.alreadyRead, this.stream.logBufferLevel(), _v3.alreadyRead = _v3.size, _v3;
      if (0 === _v5) return null;
      _v5.debug("ISOFile", "Getting sample #" + _v1 + " partial data (alreadyRead: " + _v3.alreadyRead + " offset: " + (_v3.offset + _v3.alreadyRead - _v2.fileStart) + " read size: " + _v5 + " full size: " + _v3.size + ")"), _v7.memcpy(_v3.data.buffer, _v3.alreadyRead, _v2, _v3.offset + _v3.alreadyRead - _v2.fileStart, _v5), _v3.alreadyRead += _v5, _v2.usedBytes += _v5, this.stream.logBufferLevel();
    }
  }, _v17.prototype.releaseSample = function (_v0, _v1) {
    var _v2 = _v0.samples[_v1];
    return _v2.data ? (this.samplesDataSize -= _v2.size, _v2.data = null, _v2.alreadyRead = 0, _v2.size) : 0;
  }, _v17.prototype.getAllocatedSampleDataSize = function () {
    return this.samplesDataSize;
  }, _v17.prototype.getCodecs = function () {
    var _v0,
      _v1 = "";
    for (_v0 = 0; _v0 < this.moov.traks.length; _v0++) {
      var _v2 = this.moov.traks[_v0];
      _v0 > 0 && (_v1 += ","), _v1 += _v2.mdia.minf.stbl.stsd.entries[0].getCodec();
    }
    return _v1;
  }, _v17.prototype.getTrexById = function (_v0) {
    var _v1;
    if (!this.moov || !this.moov.mvex) return null;
    for (_v1 = 0; _v1 < this.moov.mvex.trexs.length; _v1++) {
      var _v2 = this.moov.mvex.trexs[_v1];
      if (_v2.track_id == _v0) return _v2;
    }
    return null;
  }, _v17.prototype.getTrackById = function (_v0) {
    if (void 0 === this.moov) return null;
    for (var _v1 = 0; _v1 < this.moov.traks.length; _v1++) {
      var _v2 = this.moov.traks[_v1];
      if (_v2.tkhd.track_id == _v0) return _v2;
    }
    return null;
  }, _v17.prototype.items = [], _v17.prototype.entity_groups = [], _v17.prototype.itemsDataSize = 0, _v17.prototype.flattenItemInfo = function () {
    var _v0,
      _v1,
      _v2,
      _v3 = this.items,
      _v4 = this.entity_groups,
      _v5 = this.meta;
    if (null != _v5 && void 0 !== _v5.hdlr && void 0 !== _v5.iinf) {
      for (_v0 = 0; _v0 < _v5.iinf.item_infos.length; _v0++) (_v2 = {}).id = _v5.iinf.item_infos[_v0].item_ID, _v3[_v2.id] = _v2, _v2.ref_to = [], _v2.name = _v5.iinf.item_infos[_v0].item_name, _v5.iinf.item_infos[_v0].protection_index > 0 && (_v2.protection = _v5.ipro.protections[_v5.iinf.item_infos[_v0].protection_index - 1]), _v5.iinf.item_infos[_v0].item_type ? _v2.type = _v5.iinf.item_infos[_v0].item_type : _v2.type = "mime", _v2.content_type = _v5.iinf.item_infos[_v0].content_type, _v2.content_encoding = _v5.iinf.item_infos[_v0].content_encoding;
      if (_v5.grpl) for (_v0 = 0; _v0 < _v5.grpl.boxes.length; _v0++) (entity_group = {}).id = _v5.grpl.boxes[_v0].group_id, entity_group.entity_ids = _v5.grpl.boxes[_v0].entity_ids, entity_group.type = _v5.grpl.boxes[_v0].type, _v4[entity_group.id] = entity_group;
      if (_v5.iloc) for (_v0 = 0; _v0 < _v5.iloc.items.length; _v0++) {
        var _v6 = _v5.iloc.items[_v0];
        switch (_v2 = _v3[_v6.item_ID], 0 !== _v6.data_reference_index && (_v5.warn("Item storage with reference to other files: not supported"), _v2.source = _v5.dinf.boxes[_v6.data_reference_index - 1]), _v6.construction_method) {
          case 0:
            break;
          case 1:
          case 2:
            _v5.warn("Item storage with construction_method : not supported");
        }
        for (_v2.extents = [], _v2.size = 0, _v1 = 0; _v1 < _v6.extents.length; _v1++) _v2.extents[_v1] = {}, _v2.extents[_v1].offset = _v6.extents[_v1].extent_offset + _v6.base_offset, _v2.extents[_v1].length = _v6.extents[_v1].extent_length, _v2.extents[_v1].alreadyRead = 0, _v2.size += _v2.extents[_v1].length;
      }
      if (_v5.pitm && (_v3[_v5.pitm.item_id].primary = !0), _v5.iref) for (_v0 = 0; _v0 < _v5.iref.references.length; _v0++) {
        var _v7 = _v5.iref.references[_v0];
        for (_v1 = 0; _v1 < _v7.references.length; _v1++) _v3[_v7.from_item_ID].ref_to.push({
          type: _v7.type,
          id: _v7.references[_v1]
        });
      }
      if (_v5.iprp) for (var _v8 = 0; _v8 < _v5.iprp.ipmas.length; _v8++) {
        var _v9 = _v5.iprp.ipmas[_v8];
        for (_v0 = 0; _v0 < _v9.associations.length; _v0++) {
          var _v10 = _v9.associations[_v0];
          if ((_v2 = _v3[_v10.id]) || (_v2 = _v4[_v10.id]), _v2) for (void 0 === _v2.properties && (_v2.properties = {}, _v2.properties.boxes = []), _v1 = 0; _v1 < _v10.props.length; _v1++) {
            var _v11 = _v10.props[_v1];
            if (_v11.property_index > 0 && _v11.property_index - 1 < _v5.iprp.ipco.boxes.length) {
              var _v12 = _v5.iprp.ipco.boxes[_v11.property_index - 1];
              _v2.properties[_v12.type] = _v12, _v2.properties.boxes.push(_v12);
            }
          }
        }
      }
    }
  }, _v17.prototype.getItem = function (_v0) {
    if (!this.meta) return null;
    if (!(_v2 = this.items[_v0]).data && _v2.size) _v2.data = new Uint8Array(_v2.size), _v2.alreadyRead = 0, this.itemsDataSize += _v2.size, _v5.debug("ISOFile", "Allocating item #" + _v0 + " of size " + _v2.size + " (total: " + this.itemsDataSize + ")");else if (_v2.alreadyRead === _v2.size) return _v2;
    for (var _v1, _v2, _v3 = 0; _v3 < _v2.extents.length; _v3++) {
      var _v4 = _v2.extents[_v3];
      if (_v4.alreadyRead !== _v4.length) {
        var _v5 = this.stream.findPosition(!0, _v4.offset + _v4.alreadyRead, !1);
        if (!(_v5 > -1)) return null;
        var _v6 = (_v1 = this.stream.buffers[_v5]).byteLength - (_v4.offset + _v4.alreadyRead - _v1.fileStart);
        if (!(_v4.length - _v4.alreadyRead <= _v6)) return _v5.debug("ISOFile", "Getting item #" + _v0 + " extent #" + _v3 + " partial data (alreadyRead: " + _v4.alreadyRead + " offset: " + (_v4.offset + _v4.alreadyRead - _v1.fileStart) + " read size: " + _v6 + " full extent size: " + _v4.length + " full item size: " + _v2.size + ")"), _v7.memcpy(_v2.data.buffer, _v2.alreadyRead, _v1, _v4.offset + _v4.alreadyRead - _v1.fileStart, _v6), _v4.alreadyRead += _v6, _v2.alreadyRead += _v6, _v1.usedBytes += _v6, this.stream.logBufferLevel(), null;
        _v5.debug("ISOFile", "Getting item #" + _v0 + " extent #" + _v3 + " data (alreadyRead: " + _v4.alreadyRead + " offset: " + (_v4.offset + _v4.alreadyRead - _v1.fileStart) + " read size: " + (_v4.length - _v4.alreadyRead) + " full extent size: " + _v4.length + " full item size: " + _v2.size + ")"), _v7.memcpy(_v2.data.buffer, _v2.alreadyRead, _v1, _v4.offset + _v4.alreadyRead - _v1.fileStart, _v4.length - _v4.alreadyRead), _v1.usedBytes += _v4.length - _v4.alreadyRead, this.stream.logBufferLevel(), _v2.alreadyRead += _v4.length - _v4.alreadyRead, _v4.alreadyRead = _v4.length;
      }
    }
    return _v2.alreadyRead === _v2.size ? _v2 : null;
  }, _v17.prototype.releaseItem = function (_v0) {
    var _v1 = this.items[_v0];
    if (!_v1.data) return 0;
    this.itemsDataSize -= _v1.size, _v1.data = null, _v1.alreadyRead = 0;
    for (var _v2 = 0; _v2 < _v1.extents.length; _v2++) _v1.extents[_v2].alreadyRead = 0;
    return _v1.size;
  }, _v17.prototype.processItems = function (_v0) {
    for (var _v1 in this.items) {
      var _v2 = this.items[_v1];
      this.getItem(_v2.id), _v0 && !_v2.sent && (_v0(_v2), _v2.sent = !0, _v2.data = null);
    }
  }, _v17.prototype.hasItem = function (_v0) {
    for (var _v1 in this.items) {
      var _v2 = this.items[_v1];
      if (_v2.name === _v0) return _v2.id;
    }
    return -1;
  }, _v17.prototype.getMetaHandler = function () {
    return this.meta ? this.meta.hdlr.handler : null;
  }, _v17.prototype.getPrimaryItem = function () {
    return this.meta && this.meta.pitm ? this.getItem(this.meta.pitm.item_id) : null;
  }, _v17.prototype.itemToFragmentedTrackFile = function (_v0) {
    var _v1 = _v0 || {},
      _v2 = null;
    if (null == (_v2 = _v1.itemId ? this.getItem(_v1.itemId) : this.getPrimaryItem())) return null;
    var _v3 = new _v17();
    _v3.discardMdatData = !1;
    var _v4 = {
      type: _v2.type,
      description_boxes: _v2.properties.boxes
    };
    _v2.properties.ispe && (_v4.width = _v2.properties.ispe.image_width, _v4.height = _v2.properties.ispe.image_height);
    var _v5 = _v3.addTrack(_v4);
    return _v5 ? (_v3.addSample(_v5, _v2.data), _v3) : null;
  }, _v17.prototype.write = function (_v0) {
    for (var _v1 = 0; _v1 < this.boxes.length; _v1++) this.boxes[_v1].write(_v0);
  }, _v17.prototype.createFragment = function (_v0, _v1, _v2) {
    var _v3 = this.getTrackById(_v0),
      _v4 = this.getSample(_v3, _v1);
    if (null == _v4) return this.setNextSeekPositionFromSample(_v3.samples[_v1]), null;
    var _v5 = _v2 || new _v7();
    _v5.endianness = _v7.BIG_ENDIAN;
    var _v6 = this.createSingleSampleMoof(_v4);
    _v6.write(_v5), _v6.trafs[0].truns[0].data_offset = _v6.size + 8, _v5.debug("MP4Box", "Adjusting data_offset with new value " + _v6.trafs[0].truns[0].data_offset), _v5.adjustUint32(_v6.trafs[0].truns[0].data_offset_position, _v6.trafs[0].truns[0].data_offset);
    var _v7 = new _v11.mdatBox();
    return _v7.data = _v4.data, _v7.write(_v5), _v5;
  }, _v17.writeInitializationSegment = function (_v0, _v1, _v2, _v3) {
    _v5.debug("ISOFile", "Generating initialization segment");
    var _v4,
      _v5 = new _v7();
    _v5.endianness = _v7.BIG_ENDIAN, _v0.write(_v5);
    var _v6 = _v1.add("mvex");
    for (_v2 && _v6.add("mehd").set("fragment_duration", _v2), _v4 = 0; _v4 < _v1.traks.length; _v4++) _v6.add("trex").set("track_id", _v1.traks[_v4].tkhd.track_id).set("default_sample_description_index", 1).set("default_sample_duration", _v3).set("default_sample_size", 0).set("default_sample_flags", 0);
    return _v1.write(_v5), _v5.buffer;
  }, _v17.prototype.save = function (_v0) {
    var _v1 = new _v7();
    _v1.endianness = _v7.BIG_ENDIAN, this.write(_v1), _v1.save(_v0);
  }, _v17.prototype.getBuffer = function () {
    var _v0 = new _v7();
    return _v0.endianness = _v7.BIG_ENDIAN, this.write(_v0), _v0.buffer;
  }, _v17.prototype.initializeSegmentation = function () {
    for (null === this.onSegment && _v5.warn("MP4Box", "No segmentation callback set!"), this.isFragmentationInitialized || (this.isFragmentationInitialized = !0, this.nextMoofNumber = 0, this.resetTables()), _v1 = [], _v0 = 0; _v0 < this.fragmentedTracks.length; _v0++) {
      var _v0,
        _v1,
        _v2,
        _v3,
        _v4 = new _v11.moovBox();
      _v4.mvhd = this.moov.mvhd, _v4.boxes.push(_v4.mvhd), _v2 = this.getTrackById(this.fragmentedTracks[_v0].id), _v4.boxes.push(_v2), _v4.traks.push(_v2), (_v3 = {}).id = _v2.tkhd.track_id, _v3.user = this.fragmentedTracks[_v0].user, _v3.buffer = _v17.writeInitializationSegment(this.ftyp, _v4, this.moov.mvex && this.moov.mvex.mehd ? this.moov.mvex.mehd.fragment_duration : void 0, this.moov.traks[_v0].samples.length > 0 ? this.moov.traks[_v0].samples[0].duration : 0), _v1.push(_v3);
    }
    return _v1;
  }, _v11.Box.prototype.printHeader = function (_v0) {
    this.size += 8, this.size > 0 && (this.size += 8), "uuid" === this.type && (this.size += 16), _v0.log(_v0.indent + "size:" + this.size), _v0.log(_v0.indent + "type:" + this.type);
  }, _v11.FullBox.prototype.printHeader = function (_v0) {
    this.size += 4, _v11.Box.prototype.printHeader.call(this, _v0), _v0.log(_v0.indent + "version:" + this.version), _v0.log(_v0.indent + "flags:" + this.flags);
  }, _v11.Box.prototype.print = function (_v0) {
    this.printHeader(_v0);
  }, _v11.ContainerBox.prototype.print = function (_v0) {
    this.printHeader(_v0);
    for (var _v1 = 0; _v1 < this.boxes.length; _v1++) if (this.boxes[_v1]) {
      var _v2 = _v0.indent;
      _v0.indent += " ", this.boxes[_v1].print(_v0), _v0.indent = _v2;
    }
  }, _v17.prototype.print = function (_v0) {
    _v0.indent = "";
    for (var _v1 = 0; _v1 < this.boxes.length; _v1++) this.boxes[_v1] && this.boxes[_v1].print(_v0);
  }, _v11.mvhdBox.prototype.print = function (_v0) {
    _v11.FullBox.prototype.printHeader.call(this, _v0), _v0.log(_v0.indent + "creation_time: " + this.creation_time), _v0.log(_v0.indent + "modification_time: " + this.modification_time), _v0.log(_v0.indent + "timescale: " + this.timescale), _v0.log(_v0.indent + "duration: " + this.duration), _v0.log(_v0.indent + "rate: " + this.rate), _v0.log(_v0.indent + "volume: " + (this.volume >> 8)), _v0.log(_v0.indent + "matrix: " + this.matrix.join(", ")), _v0.log(_v0.indent + "next_track_id: " + this.next_track_id);
  }, _v11.tkhdBox.prototype.print = function (_v0) {
    _v11.FullBox.prototype.printHeader.call(this, _v0), _v0.log(_v0.indent + "creation_time: " + this.creation_time), _v0.log(_v0.indent + "modification_time: " + this.modification_time), _v0.log(_v0.indent + "track_id: " + this.track_id), _v0.log(_v0.indent + "duration: " + this.duration), _v0.log(_v0.indent + "volume: " + (this.volume >> 8)), _v0.log(_v0.indent + "matrix: " + this.matrix.join(", ")), _v0.log(_v0.indent + "layer: " + this.layer), _v0.log(_v0.indent + "alternate_group: " + this.alternate_group), _v0.log(_v0.indent + "width: " + this.width), _v0.log(_v0.indent + "height: " + this.height);
  };
  var _v18 = {};
  _v18.createFile = function (_v0, _v1) {
    var _v2 = new _v17(_v1);
    return _v2.discardMdatData = !(void 0 === _v0 || _v0), _v2;
  }, _v2.createFile = _v18.createFile, _v2.MP4Source = class {
    constructor(_v0) {
      if (this.file = _v18.createFile(), this.file.onError = console.error.bind(console), this.file.onReady = this.onReady.bind(this), this.file.onSamples = this.onSamples.bind(this), this.file.onSegment = this.onSegment.bind(this), console.log("MP4Box fetching file"), "File" === _v0.constructor.name) {
        console.log("typeof: ", typeof _v0), console.log("method: memory streaming");
        let _v0 = this.file;
        _v0.size = _v0.size, _v0.stream = new _v8(_v0);
        var _v1 = 0;
        (async () => {
          console.log("PARSE #1");
          var _v0 = await _v0.slice(0, Math.min(0, _v0.size)).arrayBuffer();
          _v0.fileStart = 0, _v1 = _v0.byteLength, _v0.stream.buffer = _v0, _v0.stream.isoFile = _v0, _v0.go();
          var _v1 = 0,
            _v2 = 0;
          _v0.moovStartFound ? (console.log("* moov found, continue from offset: ", _v1), _v2 = (_v1 = _v1) + 0) : (console.log("* moov not found, continue from lastBoxStartPosition: ", _v0.lastBoxStartPosition), _v1 = _v0.lastBoxStartPosition, _v2 = _v0.size);
          for (var _v3 = 2;;) {
            if (console.log("PARSE #" + _v3 + ": start=", _v1, ", end=", _v2), _v3++, _v0.lastBoxStartPosition >= _v0.size) {
              console.log("Seeking to EOF so buffer size = 0");
              break;
            }
            _v2 - _v1 > 0 && (_v2 = _v1 + 0, console.log("Exceed 4MB chunk size, limiting.."));
            var _v4 = await _v0.slice(_v1, _v2).arrayBuffer();
            if (_v4.fileStart = _v1, console.log("buffer start=" + _v1 + ", fileSize=" + _v2), _v0.stream.buffer = _v4, _v0.go(), _v2 >= _v0.size) {
              console.log("EOF, exit loop");
              break;
            }
            (_v2 = (_v1 = _v1 = _v2) + 0) > _v0.size && (_v2 = _v0.size);
          }
          _v0.flush();
        })();
      } else fetch(_v0).then(_v0 => {
        console.log("method: loading whole file into memory");
        let _v1 = _v0.headers.get("content-length");
        _v1 && (this.file.size = Number(_v1), console.log("fetch(uri) file size=", this.file.size));
        let _v2 = _v0.body.getReader(),
          _v3 = 0,
          _v4 = this.file;
        return _v4.stream.isoFile = _v4, _v2.read().then(function _v0({
          done: _v1,
          value: _v2
        }) {
          if (_v1) return void _v4.flush();
          let _v3 = _v2.buffer;
          return _v3.fileStart = _v3, _v3 += _v3.byteLength, _v4.appendBuffer(_v3), _v2.read().then(_v0);
        });
      });
      this.info = null, this._info_resolver = null, this._start_resolver = null;
    }
    onReady(_v0) {
      console.log("onReady: "), this.info = _v0, this._info_resolver && (this._info_resolver(_v0), this._info_resolver = null);
    }
    getInfo() {
      return this.info ? Promise.resolve(this.info) : new Promise(_v0 => {
        this._info_resolver = _v0;
      });
    }
    getDescriptionBox(_v0) {
      let _v1 = this.file.moov.traks[_v0].mdia.minf.stbl.stsd.entries[0],
        _v2 = _v1.avcC || _v1.hvcC || _v1.vpcC || _v1.av1C;
      if (!_v2) throw Error("avcC, hvcC, vpcC, or av1C box not found!");
      return _v2;
    }
    getAudioSpecificConfig(_v0) {
      return console.assert(4 == this.file.moov.traks[_v0].mdia.minf.stbl.stsd.entries[0].esds.esd.descs[0].tag), console.assert(64 == this.file.moov.traks[_v0].mdia.minf.stbl.stsd.entries[0].esds.esd.descs[0].oti), console.assert(5 == this.file.moov.traks[_v0].mdia.minf.stbl.stsd.entries[0].esds.esd.descs[0].descs[0].tag), this.file.moov.traks[_v0].mdia.minf.stbl.stsd.entries[0].esds.esd.descs[0].descs[0].data;
    }
    selectTrack(_v0) {
      console.log("selectTrack: %d", _v0), this.file.setExtractionOptions(_v0, null, {
        nbSamples: 50
      });
    }
    start(_v0) {
      return new Promise(_v0 => {
        this._onSamples = _v0, this._start_resolver = _v0, this.file.start();
      });
    }
    stop() {
      this.file.stop();
    }
    seek(_v0) {
      return this.file.seek(_v0, !0);
    }
    onSegment(_v0, _v1, _v2) {
      console.log("onSegment:", _v0);
    }
    onSamples(_v0, _v1, _v2) {
      let _v3 = this._onSamples(_v0, _v1, _v2);
      this._start_resolver && _v3 && (this._start_resolver(_v3), this._start_resolver = null);
    }
    duration() {
      return this.info.duration / this.info.timescale;
    }
  };
}