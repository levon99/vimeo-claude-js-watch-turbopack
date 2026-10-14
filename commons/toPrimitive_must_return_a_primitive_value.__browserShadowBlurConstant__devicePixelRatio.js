{
  _v0.e, function (_v0) {
    "use strict";

    let _v1, _v2, _v3;
    function _v4(_v0, _v1) {
      var _v2 = Object.keys(_v0);
      if (Object.getOwnPropertySymbols) {
        var _v3 = Object.getOwnPropertySymbols(_v0);
        _v1 && (_v3 = _v3.filter(function (_v0) {
          return Object.getOwnPropertyDescriptor(_v0, _v0).enumerable;
        })), _v2.push.apply(_v2, _v3);
      }
      return _v2;
    }
    function _v5(_v0) {
      for (var _v1 = 1; _v1 < arguments.length; _v1++) {
        var _v2 = null != arguments[_v1] ? arguments[_v1] : {};
        _v1 % 2 ? _v4(Object(_v2), !0).forEach(function (_v0) {
          _v7(_v0, _v0, _v2[_v0]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_v0, Object.getOwnPropertyDescriptors(_v2)) : _v4(Object(_v2)).forEach(function (_v0) {
          Object.defineProperty(_v0, _v0, Object.getOwnPropertyDescriptor(_v2, _v0));
        });
      }
      return _v0;
    }
    function _v6(_v0) {
      var _v1 = function (_v0, _v1) {
        if ("object" != typeof _v0 || !_v0) return _v0;
        var _v2 = _v0[Symbol.toPrimitive];
        if (void 0 !== _v2) {
          var _v3 = _v2.call(_v0, _v1 || "default");
          if ("object" != typeof _v3) return _v3;
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === _v1 ? String : Number)(_v0);
      }(_v0, "string");
      return "symbol" == typeof _v1 ? _v1 : _v1 + "";
    }
    function _v7(_v0, _v1, _v2) {
      return (_v1 = _v6(_v1)) in _v0 ? Object.defineProperty(_v0, _v1, {
        value: _v2,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : _v0[_v1] = _v2, _v0;
    }
    function _v8(_v0, _v1) {
      if (null == _v0) return {};
      var _v2,
        _v3,
        _v4 = function (_v0, _v1) {
          if (null == _v0) return {};
          var _v2,
            _v3,
            _v4 = {},
            _v5 = Object.keys(_v0);
          for (_v3 = 0; _v3 < _v5.length; _v3++) _v2 = _v5[_v3], _v1.indexOf(_v2) >= 0 || (_v4[_v2] = _v0[_v2]);
          return _v4;
        }(_v0, _v1);
      if (Object.getOwnPropertySymbols) {
        var _v5 = Object.getOwnPropertySymbols(_v0);
        for (_v3 = 0; _v3 < _v5.length; _v3++) _v2 = _v5[_v3], !(_v1.indexOf(_v2) >= 0) && Object.prototype.propertyIsEnumerable.call(_v0, _v2) && (_v4[_v2] = _v0[_v2]);
      }
      return _v4;
    }
    function _v9(_v0, _v1) {
      return _v1 || (_v1 = _v0.slice(0)), Object.freeze(Object.defineProperties(_v0, {
        raw: {
          value: Object.freeze(_v1)
        }
      }));
    }
    class _v10 {
      constructor() {
        _v7(this, "browserShadowBlurConstant", 1), _v7(this, "DPI", 96), _v7(this, "devicePixelRatio", "u" > typeof window ? window.devicePixelRatio : 1), _v7(this, "perfLimitSizeTotal", 0), _v7(this, "maxCacheSideLimit", 0), _v7(this, "minCacheSideLimit", 256), _v7(this, "disableStyleCopyPaste", !1), _v7(this, "enableGLFiltering", !0), _v7(this, "textureSize", 0), _v7(this, "forceGLPutImageData", !1), _v7(this, "cachesBoundsOfCurve", !0), _v7(this, "fontPaths", {}), _v7(this, "NUM_FRACTION_DIGITS", 4);
      }
    }
    let _v11 = new class extends _v10 {
        constructor(_v0) {
          super(), this.configure(_v0);
        }
        configure() {
          let _v0 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          Object.assign(this, _v0);
        }
        addFonts() {
          let _v0 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.fontPaths = _v5(_v5({}, this.fontPaths), _v0);
        }
        removeFonts() {
          let _v0 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          _v0.forEach(_v0 => {
            delete this.fontPaths[_v0];
          });
        }
        clearFonts() {
          this.fontPaths = {};
        }
        restoreDefaults(_v0) {
          let _v1 = new _v10(),
            _v2 = (null == _v0 ? void 0 : _v0.reduce((_v0, _v1) => (_v0[_v1] = _v1[_v1], _v0), {})) || _v1;
          this.configure(_v2);
        }
      }(),
      _v12 = function (_v0) {
        for (var _v1 = arguments.length, _v2 = Array(_v1 > 1 ? _v1 - 1 : 0), _v3 = 1; _v3 < _v1; _v3++) _v2[_v3 - 1] = arguments[_v3];
        return console[_v0]("fabric", ..._v2);
      };
    class _v13 extends Error {
      constructor(_v0, _v1) {
        super("fabric: ".concat(_v0), _v1);
      }
    }
    class _v14 extends _v13 {
      constructor(_v0) {
        super("".concat(_v0, " 'options.signal' is in 'aborted' state"));
      }
    }
    class _v15 {}
    class _v16 extends _v15 {
      testPrecision(_v0, _v1) {
        let _v2 = _v0.createShader(_v0.FRAGMENT_SHADER);
        return !!_v2 && (_v0.shaderSource(_v2, "precision ".concat(_v1, " float;\nvoid main(){}")), _v0.compileShader(_v2), !!_v0.getShaderParameter(_v2, _v0.COMPILE_STATUS));
      }
      queryWebGL(_v0) {
        let _v1 = _v0.getContext("webgl");
        _v1 && (this.maxTextureSize = _v1.getParameter(_v1.MAX_TEXTURE_SIZE), this.GLPrecision = ["highp", "mediump", "lowp"].find(_v0 => this.testPrecision(_v1, _v0)), _v1.getExtension("WEBGL_lose_context").loseContext(), _v12("log", "WebGL: max texture size ".concat(this.maxTextureSize)));
      }
      isSupported(_v0) {
        return !!this.maxTextureSize && this.maxTextureSize >= _v0;
      }
    }
    let _v17 = {},
      _v18 = () => _v1 || (_v1 = {
        document,
        window,
        isTouchSupported: "ontouchstart" in window || "ontouchstart" in document || window && window.navigator && window.navigator.maxTouchPoints > 0,
        WebGLProbe: new _v16(),
        dispose() {},
        copyPasteData: _v17
      }),
      _v19 = () => _v18().document,
      _v20 = () => _v18().window,
      _v21 = () => {
        var _v0;
        return Math.max(null != (_v0 = _v11.devicePixelRatio) ? _v0 : _v20().devicePixelRatio, 1);
      },
      _v22 = new class {
        constructor() {
          _v7(this, "charWidthsCache", {}), _v7(this, "boundsOfCurveCache", {});
        }
        getFontCache(_v0) {
          let {
            fontFamily: _v1,
            fontStyle: _v2,
            fontWeight: _v3
          } = _v0;
          _v1 = _v1.toLowerCase(), this.charWidthsCache[_v1] || (this.charWidthsCache[_v1] = {});
          let _v4 = this.charWidthsCache[_v1],
            _v5 = "".concat(_v2.toLowerCase(), "_").concat((_v3 + "").toLowerCase());
          return _v4[_v5] || (_v4[_v5] = {}), _v4[_v5];
        }
        clearFontCache(_v0) {
          (_v0 = (_v0 || "").toLowerCase()) ? this.charWidthsCache[_v0] && delete this.charWidthsCache[_v0] : this.charWidthsCache = {};
        }
        limitDimsByArea(_v0) {
          let {
              perfLimitSizeTotal: _v1
            } = _v11,
            _v2 = Math.sqrt(_v1 * _v0);
          return [Math.floor(_v2), Math.floor(_v1 / _v2)];
        }
      }(),
      _v23 = "6.0.0-rc1";
    function _v24() {}
    let _v25 = Math.PI / 2,
      _v26 = 2 * Math.PI,
      _v27 = Math.PI / 180,
      _v28 = Object.freeze([1, 0, 0, 1, 0, 0]),
      _v29 = "center",
      _v30 = "left",
      _v31 = "bottom",
      _v32 = "right",
      _v33 = "none",
      _v34 = /\r?\n/,
      _v35 = "json",
      _v36 = new class {
        constructor() {
          this[_v35] = new Map(), this.svg = new Map();
        }
        getClass(_v0) {
          let _v1 = this[_v35].get(_v0);
          if (!_v1) throw new _v13("No class registered for ".concat(_v0));
          return _v1;
        }
        setClass(_v0, _v1) {
          _v1 ? this[_v35].set(_v1, _v0) : (this[_v35].set(_v0.type, _v0), this[_v35].set(_v0.type.toLowerCase(), _v0));
        }
        getSVGClass(_v0) {
          return this.svg.get(_v0);
        }
        setSVGClass(_v0, _v1) {
          this.svg.set(null != _v1 ? _v1 : _v0.type.toLowerCase(), _v0);
        }
      }(),
      _v37 = new class extends Array {
        remove(_v0) {
          let _v1 = this.indexOf(_v0);
          _v1 > -1 && this.splice(_v1, 1);
        }
        cancelAll() {
          let _v0 = this.splice(0);
          return _v0.forEach(_v0 => _v0.abort()), _v0;
        }
        cancelByCanvas(_v0) {
          if (!_v0) return [];
          let _v1 = this.filter(_v0 => {
            var _v1;
            return _v0.target === _v0 || "object" == typeof _v0.target && (null == (_v1 = _v0.target) ? void 0 : _v1.canvas) === _v0;
          });
          return _v1.forEach(_v0 => _v0.abort()), _v1;
        }
        cancelByTarget(_v0) {
          if (!_v0) return [];
          let _v1 = this.filter(_v0 => _v0.target === _v0);
          return _v1.forEach(_v0 => _v0.abort()), _v1;
        }
      }();
    class _v38 {
      constructor() {
        _v7(this, "__eventListeners", {});
      }
      on(_v0, _v1) {
        return (this.__eventListeners || (this.__eventListeners = {}), "object" == typeof _v0) ? (Object.entries(_v0).forEach(_v0 => {
          let [_v1, _v2] = _v0;
          this.on(_v1, _v2);
        }), () => this.off(_v0)) : _v1 ? (this.__eventListeners[_v0] || (this.__eventListeners[_v0] = []), this.__eventListeners[_v0].push(_v1), () => this.off(_v0, _v1)) : () => !1;
      }
      once(_v0, _v1) {
        if ("object" == typeof _v0) {
          let _v0 = [];
          return Object.entries(_v0).forEach(_v0 => {
            let [_v1, _v2] = _v0;
            _v0.push(this.once(_v1, _v2));
          }), () => _v0.forEach(_v0 => _v0());
        }
        if (!_v1) return () => !1;
        {
          let _v0 = this.on(_v0, function () {
            for (var _v0 = arguments.length, _v1 = Array(_v0), _v2 = 0; _v2 < _v0; _v2++) _v1[_v2] = arguments[_v2];
            _v1.call(this, ..._v1), _v0();
          });
          return _v0;
        }
      }
      _removeEventListener(_v0, _v1) {
        if (this.__eventListeners[_v0]) if (_v1) {
          let _v0 = this.__eventListeners[_v0],
            _v1 = _v0.indexOf(_v1);
          _v1 > -1 && _v0.splice(_v1, 1);
        } else this.__eventListeners[_v0] = [];
      }
      off(_v0, _v1) {
        if (this.__eventListeners) if (void 0 === _v0) for (let _v0 in this.__eventListeners) this._removeEventListener(_v0);else "object" == typeof _v0 ? Object.entries(_v0).forEach(_v0 => {
          let [_v1, _v2] = _v0;
          this._removeEventListener(_v1, _v2);
        }) : this._removeEventListener(_v0, _v1);
      }
      fire(_v0, _v1) {
        var _v2;
        if (!this.__eventListeners) return;
        let _v3 = null == (_v2 = this.__eventListeners[_v0]) ? void 0 : _v2.concat();
        if (_v3) for (let _v0 = 0; _v0 < _v3.length; _v0++) _v3[_v0].call(this, _v1 || {});
      }
    }
    let _v39 = (_v0, _v1) => Math.floor(Math.random() * (_v1 - _v0 + 1)) + _v0,
      _v40 = (_v0, _v1) => isNaN(_v0) && "number" == typeof _v1 ? _v1 : _v0,
      _v41 = (_v0, _v1) => {
        let _v2 = _v0.indexOf(_v1);
        return -1 !== _v2 && _v0.splice(_v2, 1), _v0;
      },
      _v42 = _v0 => {
        if (0 === _v0) return 1;
        switch (Math.abs(_v0) / _v25) {
          case 1:
          case 3:
            return 0;
          case 2:
            return -1;
        }
        return Math.cos(_v0);
      },
      _v43 = _v0 => {
        if (0 === _v0) return 0;
        let _v1 = Math.sign(_v0);
        switch (_v0 / _v25) {
          case 1:
            return _v1;
          case 2:
            return 0;
          case 3:
            return -_v1;
        }
        return Math.sin(_v0);
      };
    class _v44 {
      constructor() {
        let _v0 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          _v1 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        "object" == typeof _v0 ? (this.x = _v0.x, this.y = _v0.y) : (this.x = _v0, this.y = _v1);
      }
      add(_v0) {
        return new _v44(this.x + _v0.x, this.y + _v0.y);
      }
      addEquals(_v0) {
        return this.x += _v0.x, this.y += _v0.y, this;
      }
      scalarAdd(_v0) {
        return new _v44(this.x + _v0, this.y + _v0);
      }
      scalarAddEquals(_v0) {
        return this.x += _v0, this.y += _v0, this;
      }
      subtract(_v0) {
        return new _v44(this.x - _v0.x, this.y - _v0.y);
      }
      subtractEquals(_v0) {
        return this.x -= _v0.x, this.y -= _v0.y, this;
      }
      scalarSubtract(_v0) {
        return new _v44(this.x - _v0, this.y - _v0);
      }
      scalarSubtractEquals(_v0) {
        return this.x -= _v0, this.y -= _v0, this;
      }
      multiply(_v0) {
        return new _v44(this.x * _v0.x, this.y * _v0.y);
      }
      scalarMultiply(_v0) {
        return new _v44(this.x * _v0, this.y * _v0);
      }
      scalarMultiplyEquals(_v0) {
        return this.x *= _v0, this.y *= _v0, this;
      }
      divide(_v0) {
        return new _v44(this.x / _v0.x, this.y / _v0.y);
      }
      scalarDivide(_v0) {
        return new _v44(this.x / _v0, this.y / _v0);
      }
      scalarDivideEquals(_v0) {
        return this.x /= _v0, this.y /= _v0, this;
      }
      eq(_v0) {
        return this.x === _v0.x && this.y === _v0.y;
      }
      lt(_v0) {
        return this.x < _v0.x && this.y < _v0.y;
      }
      lte(_v0) {
        return this.x <= _v0.x && this.y <= _v0.y;
      }
      gt(_v0) {
        return this.x > _v0.x && this.y > _v0.y;
      }
      gte(_v0) {
        return this.x >= _v0.x && this.y >= _v0.y;
      }
      lerp(_v0) {
        let _v1 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5;
        return _v1 = Math.max(Math.min(1, _v1), 0), new _v44(this.x + (_v0.x - this.x) * _v1, this.y + (_v0.y - this.y) * _v1);
      }
      distanceFrom(_v0) {
        let _v1 = this.x - _v0.x,
          _v2 = this.y - _v0.y;
        return Math.sqrt(_v1 * _v1 + _v2 * _v2);
      }
      midPointFrom(_v0) {
        return this.lerp(_v0);
      }
      min(_v0) {
        return new _v44(Math.min(this.x, _v0.x), Math.min(this.y, _v0.y));
      }
      max(_v0) {
        return new _v44(Math.max(this.x, _v0.x), Math.max(this.y, _v0.y));
      }
      toString() {
        return "".concat(this.x, ",").concat(this.y);
      }
      setXY(_v0, _v1) {
        return this.x = _v0, this.y = _v1, this;
      }
      setX(_v0) {
        return this.x = _v0, this;
      }
      setY(_v0) {
        return this.y = _v0, this;
      }
      setFromPoint(_v0) {
        return this.x = _v0.x, this.y = _v0.y, this;
      }
      swap(_v0) {
        let _v1 = this.x,
          _v2 = this.y;
        this.x = _v0.x, this.y = _v0.y, _v0.x = _v1, _v0.y = _v2;
      }
      clone() {
        return new _v44(this.x, this.y);
      }
      rotate(_v0) {
        let _v1 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _v45,
          _v2 = _v43(_v0),
          _v3 = _v42(_v0),
          _v4 = this.subtract(_v1);
        return new _v44(_v4.x * _v3 - _v4.y * _v2, _v4.x * _v2 + _v4.y * _v3).add(_v1);
      }
      transform(_v0) {
        let _v1 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return new _v44(_v0[0] * this.x + _v0[2] * this.y + (_v1 ? 0 : _v0[4]), _v0[1] * this.x + _v0[3] * this.y + (_v1 ? 0 : _v0[5]));
      }
    }
    let _v45 = new _v44(0, 0),
      _v46 = _v0 => !!_v0 && Array.isArray(_v0._objects);
    function _v47(_v0) {
      return class _v0 extends _v0 {
        constructor() {
          super(...arguments), _v7(this, "_objects", []);
        }
        _onObjectAdded(_v0) {}
        _onObjectRemoved(_v0) {}
        _onStackOrderChanged(_v0) {}
        add() {
          for (var _v0 = arguments.length, _v1 = Array(_v0), _v2 = 0; _v2 < _v0; _v2++) _v1[_v2] = arguments[_v2];
          let _v3 = this._objects.push(..._v1);
          return _v1.forEach(_v0 => this._onObjectAdded(_v0)), _v3;
        }
        insertAt(_v0) {
          for (var _v1 = arguments.length, _v2 = Array(_v1 > 1 ? _v1 - 1 : 0), _v3 = 1; _v3 < _v1; _v3++) _v2[_v3 - 1] = arguments[_v3];
          return this._objects.splice(_v0, 0, ..._v2), _v2.forEach(_v0 => this._onObjectAdded(_v0)), this._objects.length;
        }
        remove() {
          let _v0 = this._objects,
            _v1 = [];
          for (var _v2 = arguments.length, _v3 = Array(_v2), _v4 = 0; _v4 < _v2; _v4++) _v3[_v4] = arguments[_v4];
          return _v3.forEach(_v0 => {
            let _v1 = _v0.indexOf(_v0);
            -1 !== _v1 && (_v0.splice(_v1, 1), _v1.push(_v0), this._onObjectRemoved(_v0));
          }), _v1;
        }
        forEachObject(_v0) {
          this.getObjects().forEach((_v0, _v1, _v2) => _v0(_v0, _v1, _v2));
        }
        getObjects() {
          for (var _v0 = arguments.length, _v1 = Array(_v0), _v2 = 0; _v2 < _v0; _v2++) _v1[_v2] = arguments[_v2];
          return 0 === _v1.length ? [...this._objects] : this._objects.filter(_v0 => _v0.isType(..._v1));
        }
        item(_v0) {
          return this._objects[_v0];
        }
        isEmpty() {
          return 0 === this._objects.length;
        }
        size() {
          return this._objects.length;
        }
        contains(_v0, _v1) {
          return !!this._objects.includes(_v0) || !!_v1 && this._objects.some(_v0 => _v0 instanceof _v0 && _v0.contains(_v0, !0));
        }
        complexity() {
          return this._objects.reduce((_v0, _v1) => _v0 += _v1.complexity ? _v1.complexity() : 0, 0);
        }
        sendObjectToBack(_v0) {
          return !!_v0 && _v0 !== this._objects[0] && (_v41(this._objects, _v0), this._objects.unshift(_v0), this._onStackOrderChanged(_v0), !0);
        }
        bringObjectToFront(_v0) {
          return !!_v0 && _v0 !== this._objects[this._objects.length - 1] && (_v41(this._objects, _v0), this._objects.push(_v0), this._onStackOrderChanged(_v0), !0);
        }
        sendObjectBackwards(_v0, _v1) {
          if (!_v0) return !1;
          let _v2 = this._objects.indexOf(_v0);
          if (0 !== _v2) {
            let _v0 = this.findNewLowerIndex(_v0, _v2, _v1);
            return _v41(this._objects, _v0), this._objects.splice(_v0, 0, _v0), this._onStackOrderChanged(_v0), !0;
          }
          return !1;
        }
        bringObjectForward(_v0, _v1) {
          if (!_v0) return !1;
          let _v2 = this._objects.indexOf(_v0);
          if (_v2 !== this._objects.length - 1) {
            let _v0 = this.findNewUpperIndex(_v0, _v2, _v1);
            return _v41(this._objects, _v0), this._objects.splice(_v0, 0, _v0), this._onStackOrderChanged(_v0), !0;
          }
          return !1;
        }
        moveObjectTo(_v0, _v1) {
          return _v0 !== this._objects[_v1] && (_v41(this._objects, _v0), this._objects.splice(_v1, 0, _v0), this._onStackOrderChanged(_v0), !0);
        }
        findNewLowerIndex(_v0, _v1, _v2) {
          let _v3;
          if (_v2) {
            _v3 = _v1;
            for (let _v0 = _v1 - 1; _v0 >= 0; --_v0) if (_v0.isOverlapping(this._objects[_v0])) {
              _v3 = _v0;
              break;
            }
          } else _v3 = _v1 - 1;
          return _v3;
        }
        findNewUpperIndex(_v0, _v1, _v2) {
          let _v3;
          if (_v2) {
            _v3 = _v1;
            for (let _v0 = _v1 + 1; _v0 < this._objects.length; ++_v0) if (_v0.isOverlapping(this._objects[_v0])) {
              _v3 = _v0;
              break;
            }
          } else _v3 = _v1 + 1;
          return _v3;
        }
        collectObjects(_v0) {
          let {
              left: _v1,
              top: _v2,
              width: _v3,
              height: _v4
            } = _v0,
            {
              includeIntersecting: _v5 = !0
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            _v6 = [],
            _v7 = new _v44(_v1, _v2),
            _v8 = _v7.add(new _v44(_v3, _v4));
          for (let _v0 = this._objects.length - 1; _v0 >= 0; _v0--) {
            let _v0 = this._objects[_v0];
            _v0.selectable && _v0.visible && (_v5 && _v0.intersectsWithRect(_v7, _v8) || _v0.isContainedWithinRect(_v7, _v8) || _v5 && _v0.containsPoint(_v7) || _v5 && _v0.containsPoint(_v8)) && _v6.push(_v0);
          }
          return _v6;
        }
      };
    }
    class _v48 extends _v38 {
      _setOptions() {
        let _v0 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        for (let _v0 in _v0) this.set(_v0, _v0[_v0]);
      }
      _setObject(_v0) {
        for (let _v0 in _v0) this._set(_v0, _v0[_v0]);
      }
      set(_v0, _v1) {
        return "object" == typeof _v0 ? this._setObject(_v0) : this._set(_v0, _v1), this;
      }
      _set(_v0, _v1) {
        this[_v0] = _v1;
      }
      toggle(_v0) {
        let _v1 = this.get(_v0);
        return "boolean" == typeof _v1 && this.set(_v0, !_v1), this;
      }
      get(_v0) {
        return this[_v0];
      }
    }
    function _v49(_v0) {
      return _v20().requestAnimationFrame(_v0);
    }
    function _v50(_v0) {
      return _v20().cancelAnimationFrame(_v0);
    }
    let _v51 = 0,
      _v52 = () => _v51++,
      _v53 = () => {
        let _v0 = _v19().createElement("canvas");
        if (!_v0 || void 0 === _v0.getContext) throw new _v13("Failed to create `canvas` element");
        return _v0;
      },
      _v54 = () => _v19().createElement("img"),
      _v55 = (_v0, _v1, _v2) => _v0.toDataURL("image/".concat(_v1), _v2),
      _v56 = _v0 => _v0 * _v27,
      _v57 = _v0 => _v0 / _v27,
      _v58 = _v0 => _v0.every((_v0, _v1) => _v0 === _v28[_v1]),
      _v59 = (_v0, _v1, _v2) => new _v44(_v0).transform(_v1, _v2),
      _v60 = _v0 => {
        let _v1 = 1 / (_v0[0] * _v0[3] - _v0[1] * _v0[2]),
          _v2 = [_v1 * _v0[3], -_v1 * _v0[1], -_v1 * _v0[2], _v1 * _v0[0], 0, 0],
          {
            x: _v3,
            y: _v4
          } = new _v44(_v0[4], _v0[5]).transform(_v2, !0);
        return _v2[4] = -_v3, _v2[5] = -_v4, _v2;
      },
      _v61 = (_v0, _v1, _v2) => [_v0[0] * _v1[0] + _v0[2] * _v1[1], _v0[1] * _v1[0] + _v0[3] * _v1[1], _v0[0] * _v1[2] + _v0[2] * _v1[3], _v0[1] * _v1[2] + _v0[3] * _v1[3], _v2 ? 0 : _v0[0] * _v1[4] + _v0[2] * _v1[5] + _v0[4], _v2 ? 0 : _v0[1] * _v1[4] + _v0[3] * _v1[5] + _v0[5]],
      _v62 = (_v0, _v1) => _v0.reduceRight((_v0, _v1) => _v1 ? _v61(_v1, _v0, _v1) : _v0, _v28),
      _v63 = _v0 => {
        let [_v1, _v2] = _v0;
        return Math.atan2(_v2, _v1);
      },
      _v64 = _v0 => {
        let _v1 = _v63(_v0),
          _v2 = Math.pow(_v0[0], 2) + Math.pow(_v0[1], 2),
          _v3 = Math.sqrt(_v2),
          _v4 = (_v0[0] * _v0[3] - _v0[2] * _v0[1]) / _v3,
          _v5 = Math.atan2(_v0[0] * _v0[2] + _v0[1] * _v0[3], _v2);
        return {
          angle: _v57(_v1),
          scaleX: _v3,
          scaleY: _v4,
          skewX: _v57(_v5),
          skewY: 0,
          translateX: _v0[4] || 0,
          translateY: _v0[5] || 0
        };
      },
      _v65 = function (_v0) {
        let _v1 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return [1, 0, 0, 1, _v0, _v1];
      };
    function _v66() {
      let {
          angle: _v0 = 0
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        {
          x: _v1 = 0,
          y: _v2 = 0
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        _v3 = _v56(_v0),
        _v4 = _v42(_v3),
        _v5 = _v43(_v3);
      return [_v4, _v5, -_v5, _v4, _v1 ? _v1 - (_v4 * _v1 - _v5 * _v2) : 0, _v2 ? _v2 - (_v5 * _v1 + _v4 * _v2) : 0];
    }
    let _v67 = function (_v0) {
        let _v1 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _v0;
        return [_v0, 0, 0, _v1, 0, 0];
      },
      _v68 = _v0 => Math.tan(_v56(_v0)),
      _v69 = _v0 => [1, 0, _v68(_v0), 1, 0, 0],
      _v70 = _v0 => [1, _v68(_v0), 0, 1, 0, 0],
      _v71 = _v0 => {
        let {
            scaleX: _v1 = 1,
            scaleY: _v2 = 1,
            flipX: _v3 = !1,
            flipY: _v4 = !1,
            skewX: _v5 = 0,
            skewY: _v6 = 0
          } = _v0,
          _v7 = _v67(_v3 ? -_v1 : _v1, _v4 ? -_v2 : _v2);
        return _v5 && (_v7 = _v61(_v7, _v69(_v5), !0)), _v6 && (_v7 = _v61(_v7, _v70(_v6), !0)), _v7;
      },
      _v72 = _v0 => {
        let {
            translateX: _v1 = 0,
            translateY: _v2 = 0,
            angle: _v3 = 0
          } = _v0,
          _v4 = _v65(_v1, _v2);
        _v3 && (_v4 = _v61(_v4, _v66({
          angle: _v3
        })));
        let _v5 = _v71(_v0);
        return _v58(_v5) || (_v4 = _v61(_v4, _v5)), _v4;
      },
      _v73 = function (_v0) {
        let {
          signal: _v1,
          crossOrigin: _v2 = null
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return new Promise(function (_v0, _v1) {
          let _v2;
          if (_v1 && _v1.aborted) return _v1(new _v14("loadImage"));
          let _v3 = _v54();
          _v1 && (_v2 = function (_v0) {
            _v3.src = "", _v1(_v0);
          }, _v1.addEventListener("abort", _v2, {
            once: !0
          }));
          let _v4 = function () {
            _v3.onload = _v3.onerror = null, _v2 && (null == _v1 || _v1.removeEventListener("abort", _v2)), _v0(_v3);
          };
          _v0 ? (_v3.onload = _v4, _v3.onerror = function () {
            _v2 && (null == _v1 || _v1.removeEventListener("abort", _v2)), _v1(new _v13("Error loading ".concat(_v3.src)));
          }, _v2 && (_v3.crossOrigin = _v2), _v3.src = _v0) : _v4();
        });
      },
      _v74 = function (_v0) {
        let {
          signal: _v1,
          reviver: _v2 = _v24
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return new Promise((_v0, _v1) => {
          let _v2 = [];
          _v1 && _v1.addEventListener("abort", _v1, {
            once: !0
          }), Promise.all(_v0.map(_v0 => _v36.getClass(_v0.type).fromObject(_v0, {
            signal: _v1
          }).then(_v0 => (_v2(_v0, _v0), _v2.push(_v0), _v0)))).then(_v0).catch(_v0 => {
            _v2.forEach(_v0 => {
              _v0.dispose && _v0.dispose();
            }), _v1(_v0);
          }).finally(() => {
            _v1 && _v1.removeEventListener("abort", _v1);
          });
        });
      },
      _v75 = function (_v0) {
        let {
          signal: _v1
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return new Promise((_v0, _v1) => {
          let _v2 = [];
          _v1 && _v1.addEventListener("abort", _v1, {
            once: !0
          });
          let _v3 = Object.values(_v0).map(_v0 => _v0 ? _v0.type ? _v74([_v0], {
              signal: _v1
            }).then(_v0 => {
              let [_v1] = _v0;
              return _v2.push(_v1), _v1;
            }) : _v0.source ? _v36.getClass("pattern").fromObject(_v0, {
              signal: _v1
            }).then(_v0 => (_v2.push(_v0), _v0)) : _v0 : _v0),
            _v4 = Object.keys(_v0);
          Promise.all(_v3).then(_v0 => _v0.reduce((_v0, _v1, _v2) => (_v0[_v4[_v2]] = _v1, _v0), {})).then(_v0).catch(_v0 => {
            _v2.forEach(_v0 => {
              _v0.dispose && _v0.dispose();
            }), _v1(_v0);
          }).finally(() => {
            _v1 && _v1.removeEventListener("abort", _v1);
          });
        });
      },
      _v76 = function (_v0) {
        let _v1 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        return _v1.reduce((_v0, _v1) => (_v1 in _v0 && (_v0[_v1] = _v0[_v1]), _v0), {});
      },
      _v77 = (_v0, _v1) => Object.keys(_v0).reduce((_v0, _v1) => (_v1(_v0[_v1], _v1, _v0) && (_v0[_v1] = _v0[_v1]), _v0), {}),
      _v78 = {
        aliceblue: "#F0F8FF",
        antiquewhite: "#FAEBD7",
        aqua: "#0FF",
        aquamarine: "#7FFFD4",
        azure: "#F0FFFF",
        beige: "#F5F5DC",
        bisque: "#FFE4C4",
        black: "#000",
        blanchedalmond: "#FFEBCD",
        blue: "#00F",
        blueviolet: "#8A2BE2",
        brown: "#A52A2A",
        burlywood: "#DEB887",
        cadetblue: "#5F9EA0",
        chartreuse: "#7FFF00",
        chocolate: "#D2691E",
        coral: "#FF7F50",
        cornflowerblue: "#6495ED",
        cornsilk: "#FFF8DC",
        crimson: "#DC143C",
        cyan: "#0FF",
        darkblue: "#00008B",
        darkcyan: "#008B8B",
        darkgoldenrod: "#B8860B",
        darkgray: "#A9A9A9",
        darkgrey: "#A9A9A9",
        darkgreen: "#006400",
        darkkhaki: "#BDB76B",
        darkmagenta: "#8B008B",
        darkolivegreen: "#556B2F",
        darkorange: "#FF8C00",
        darkorchid: "#9932CC",
        darkred: "#8B0000",
        darksalmon: "#E9967A",
        darkseagreen: "#8FBC8F",
        darkslateblue: "#483D8B",
        darkslategray: "#2F4F4F",
        darkslategrey: "#2F4F4F",
        darkturquoise: "#00CED1",
        darkviolet: "#9400D3",
        deeppink: "#FF1493",
        deepskyblue: "#00BFFF",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1E90FF",
        firebrick: "#B22222",
        floralwhite: "#FFFAF0",
        forestgreen: "#228B22",
        fuchsia: "#F0F",
        gainsboro: "#DCDCDC",
        ghostwhite: "#F8F8FF",
        gold: "#FFD700",
        goldenrod: "#DAA520",
        gray: "#808080",
        grey: "#808080",
        green: "#008000",
        greenyellow: "#ADFF2F",
        honeydew: "#F0FFF0",
        hotpink: "#FF69B4",
        indianred: "#CD5C5C",
        indigo: "#4B0082",
        ivory: "#FFFFF0",
        khaki: "#F0E68C",
        lavender: "#E6E6FA",
        lavenderblush: "#FFF0F5",
        lawngreen: "#7CFC00",
        lemonchiffon: "#FFFACD",
        lightblue: "#ADD8E6",
        lightcoral: "#F08080",
        lightcyan: "#E0FFFF",
        lightgoldenrodyellow: "#FAFAD2",
        lightgray: "#D3D3D3",
        lightgrey: "#D3D3D3",
        lightgreen: "#90EE90",
        lightpink: "#FFB6C1",
        lightsalmon: "#FFA07A",
        lightseagreen: "#20B2AA",
        lightskyblue: "#87CEFA",
        lightslategray: "#789",
        lightslategrey: "#789",
        lightsteelblue: "#B0C4DE",
        lightyellow: "#FFFFE0",
        lime: "#0F0",
        limegreen: "#32CD32",
        linen: "#FAF0E6",
        magenta: "#F0F",
        maroon: "#800000",
        mediumaquamarine: "#66CDAA",
        mediumblue: "#0000CD",
        mediumorchid: "#BA55D3",
        mediumpurple: "#9370DB",
        mediumseagreen: "#3CB371",
        mediumslateblue: "#7B68EE",
        mediumspringgreen: "#00FA9A",
        mediumturquoise: "#48D1CC",
        mediumvioletred: "#C71585",
        midnightblue: "#191970",
        mintcream: "#F5FFFA",
        mistyrose: "#FFE4E1",
        moccasin: "#FFE4B5",
        navajowhite: "#FFDEAD",
        navy: "#000080",
        oldlace: "#FDF5E6",
        olive: "#808000",
        olivedrab: "#6B8E23",
        orange: "#FFA500",
        orangered: "#FF4500",
        orchid: "#DA70D6",
        palegoldenrod: "#EEE8AA",
        palegreen: "#98FB98",
        paleturquoise: "#AFEEEE",
        palevioletred: "#DB7093",
        papayawhip: "#FFEFD5",
        peachpuff: "#FFDAB9",
        peru: "#CD853F",
        pink: "#FFC0CB",
        plum: "#DDA0DD",
        powderblue: "#B0E0E6",
        purple: "#800080",
        rebeccapurple: "#639",
        red: "#F00",
        rosybrown: "#BC8F8F",
        royalblue: "#4169E1",
        saddlebrown: "#8B4513",
        salmon: "#FA8072",
        sandybrown: "#F4A460",
        seagreen: "#2E8B57",
        seashell: "#FFF5EE",
        sienna: "#A0522D",
        silver: "#C0C0C0",
        skyblue: "#87CEEB",
        slateblue: "#6A5ACD",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#FFFAFA",
        springgreen: "#00FF7F",
        steelblue: "#4682B4",
        tan: "#D2B48C",
        teal: "#008080",
        thistle: "#D8BFD8",
        tomato: "#FF6347",
        turquoise: "#40E0D0",
        violet: "#EE82EE",
        wheat: "#F5DEB3",
        white: "#FFF",
        whitesmoke: "#F5F5F5",
        yellow: "#FF0",
        yellowgreen: "#9ACD32"
      },
      _v79 = (_v0, _v1, _v2) => (_v2 < 0 && (_v2 += 1), _v2 > 1 && (_v2 -= 1), _v2 < 1 / 6) ? _v0 + (_v1 - _v0) * 6 * _v2 : _v2 < .5 ? _v1 : _v2 < 2 / 3 ? _v0 + (_v1 - _v0) * (2 / 3 - _v2) * 6 : _v0,
      _v80 = (_v0, _v1, _v2, _v3) => {
        let _v4,
          _v5,
          _v6 = Math.max(_v0 /= 255, _v1 /= 255, _v2 /= 255),
          _v7 = Math.min(_v0, _v1, _v2),
          _v8 = (_v6 + _v7) / 2;
        if (_v6 === _v7) _v4 = _v5 = 0;else {
          let _v0 = _v6 - _v7;
          switch (_v5 = _v8 > .5 ? _v0 / (2 - _v6 - _v7) : _v0 / (_v6 + _v7), _v6) {
            case _v0:
              _v4 = (_v1 - _v2) / _v0 + 6 * (_v1 < _v2);
              break;
            case _v1:
              _v4 = (_v2 - _v0) / _v0 + 2;
              break;
            case _v2:
              _v4 = (_v0 - _v1) / _v0 + 4;
          }
          _v4 /= 6;
        }
        return [Math.round(360 * _v4), Math.round(100 * _v5), Math.round(100 * _v8), _v3];
      },
      _v81 = function () {
        let _v0 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "1";
        return parseFloat(_v0) / (_v0.endsWith("%") ? 100 : 1);
      },
      _v82 = _v0 => Math.min(Math.round(_v0), 255).toString(16).toUpperCase().padStart(2, "0"),
      _v83 = _v0 => {
        let [_v1, _v2, _v3, _v4 = 1] = _v0,
          _v5 = Math.round(.3 * _v1 + .59 * _v2 + .11 * _v3);
        return [_v5, _v5, _v5, _v4];
      };
    class _v84 {
      constructor(_v0) {
        if (_v0) {
          if (_v0 instanceof _v84) this.setSource([..._v0._source]);else if (Array.isArray(_v0)) {
            const [_v0, _v1, _v2, _v3 = 1] = _v0;
            this.setSource([_v0, _v1, _v2, _v3]);
          } else this.setSource(this._tryParsingColor(_v0));
        } else this.setSource([0, 0, 0, 1]);
      }
      _tryParsingColor(_v0) {
        return _v0 in _v78 && (_v0 = _v78[_v0]), "transparent" === _v0 ? [255, 255, 255, 0] : _v84.sourceFromHex(_v0) || _v84.sourceFromRgb(_v0) || _v84.sourceFromHsl(_v0) || [0, 0, 0, 1];
      }
      getSource() {
        return this._source;
      }
      setSource(_v0) {
        this._source = _v0;
      }
      toRgb() {
        let [_v0, _v1, _v2] = this.getSource();
        return "rgb(".concat(_v0, ",").concat(_v1, ",").concat(_v2, ")");
      }
      toRgba() {
        return "rgba(".concat(this.getSource().join(","), ")");
      }
      toHsl() {
        let [_v0, _v1, _v2] = _v80(...this.getSource());
        return "hsl(".concat(_v0, ",").concat(_v1, "%,").concat(_v2, "%)");
      }
      toHsla() {
        let [_v0, _v1, _v2, _v3] = _v80(...this.getSource());
        return "hsla(".concat(_v0, ",").concat(_v1, "%,").concat(_v2, "%,").concat(_v3, ")");
      }
      toHex() {
        return this.toHexa().slice(0, 6);
      }
      toHexa() {
        let [_v0, _v1, _v2, _v3] = this.getSource();
        return "".concat(_v82(_v0)).concat(_v82(_v1)).concat(_v82(_v2)).concat(_v82(Math.round(255 * _v3)));
      }
      getAlpha() {
        return this.getSource()[3];
      }
      setAlpha(_v0) {
        return this._source[3] = _v0, this;
      }
      toGrayscale() {
        return this.setSource(_v83(this.getSource())), this;
      }
      toBlackWhite(_v0) {
        let [_v1,,, _v2] = _v83(this.getSource()),
          _v3 = _v1 < (_v0 || 127) ? 0 : 255;
        return this.setSource([_v3, _v3, _v3, _v2]), this;
      }
      overlayWith(_v0) {
        _v0 instanceof _v84 || (_v0 = new _v84(_v0));
        let _v1 = this.getSource(),
          _v2 = _v0.getSource(),
          [_v3, _v4, _v5] = _v1.map((_v0, _v1) => Math.round(.5 * _v0 + .5 * _v2[_v1]));
        return this.setSource([_v3, _v4, _v5, _v1[3]]), this;
      }
      static fromRgb(_v0) {
        return _v84.fromRgba(_v0);
      }
      static fromRgba(_v0) {
        return new _v84(_v84.sourceFromRgb(_v0));
      }
      static sourceFromRgb(_v0) {
        let _v1 = _v0.match(/^rgba?\(\s*(\d{0,3}(?:\.\d+)?%?)\s*[\s|,]\s*(\d{0,3}(?:\.\d+)?%?)\s*[\s|,]\s*(\d{0,3}(?:\.\d+)?%?)\s*(?:\s*[,/]\s*(\d{0,3}(?:\.\d+)?%?)\s*)?\)$/i);
        if (_v1) {
          let [_v0, _v1, _v2] = _v1.slice(1, 4).map(_v0 => {
            let _v1 = parseFloat(_v0);
            return _v0.endsWith("%") ? Math.round(2.55 * _v1) : _v1;
          });
          return [_v0, _v1, _v2, _v81(_v1[4])];
        }
      }
      static fromHsl(_v0) {
        return _v84.fromHsla(_v0);
      }
      static fromHsla(_v0) {
        return new _v84(_v84.sourceFromHsl(_v0));
      }
      static sourceFromHsl(_v0) {
        let _v1,
          _v2,
          _v3,
          _v4 = _v0.match(/^hsla?\(\s*([+-]?\d{1,3})\s*[\s|,]\s*(\d{1,3}%)\s*[\s|,]\s*(\d{1,3}%)\s*(?:\s*[,/]\s*(\d*(?:\.\d+)?%?)\s*)?\)$/i);
        if (!_v4) return;
        let _v5 = (parseFloat(_v4[1]) % 360 + 360) % 360 / 360,
          _v6 = parseFloat(_v4[2]) / 100,
          _v7 = parseFloat(_v4[3]) / 100;
        if (0 === _v6) _v1 = _v2 = _v3 = _v7;else {
          let _v0 = _v7 <= .5 ? _v7 * (_v6 + 1) : _v7 + _v6 - _v7 * _v6,
            _v1 = 2 * _v7 - _v0;
          _v1 = _v79(_v1, _v0, _v5 + 1 / 3), _v2 = _v79(_v1, _v0, _v5), _v3 = _v79(_v1, _v0, _v5 - 1 / 3);
        }
        return [Math.round(255 * _v1), Math.round(255 * _v2), Math.round(255 * _v3), _v81(_v4[4])];
      }
      static fromHex(_v0) {
        return new _v84(_v84.sourceFromHex(_v0));
      }
      static sourceFromHex(_v0) {
        if (_v0.match(/^#?(([0-9a-f]){3,4}|([0-9a-f]{2}){3,4})$/i)) {
          let _v0 = _v0.slice(_v0.indexOf("#") + 1),
            [_v1, _v2, _v3, _v4 = 255] = (_v0.length <= 4 ? _v0.split("").map(_v0 => _v0 + _v0) : _v0.match(/.{2}/g)).map(_v0 => parseInt(_v0, 16));
          return [_v1, _v2, _v3, _v4 / 255];
        }
      }
    }
    let _v85 = (_v0, _v1) => parseFloat(Number(_v0).toFixed(_v1)),
      _v86 = function (_v0) {
        let _v1 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 16,
          _v2 = /\D{0,2}$/.exec(_v0),
          _v3 = parseFloat(_v0),
          _v4 = _v11.DPI;
        switch (null == _v2 ? void 0 : _v2[0]) {
          case "mm":
            return _v3 * _v4 / 25.4;
          case "cm":
            return _v3 * _v4 / 2.54;
          case "in":
            return _v3 * _v4;
          case "pt":
            return _v3 * _v4 / 72;
          case "pc":
            return _v3 * _v4 / 72 * 12;
          case "em":
            return _v3 * _v1;
          default:
            return _v3;
        }
      },
      _v87 = _v0 => {
        let [_v1, _v2] = _v0.trim().split(" "),
          [_v3, _v4] = _v1 && _v1 !== _v33 ? [_v1.slice(1, 4), _v1.slice(5, 8)] : _v1 === _v33 ? [_v1, _v1] : ["Mid", "Mid"];
        return {
          meetOrSlice: _v2 || "meet",
          alignX: _v3,
          alignY: _v4
        };
      },
      _v88 = _v0 => "matrix(" + _v0.map(_v0 => _v85(_v0, _v11.NUM_FRACTION_DIGITS)).join(" ") + ")",
      _v89 = function (_v0, _v1) {
        let _v2,
          _v3,
          _v4 = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        if (_v1) {
          if (_v1.toLive) _v2 = "url(#SVGID_".concat(_v1.id, ")");else {
            let _v0 = new _v84(_v1),
              _v1 = _v0.getAlpha();
            _v2 = _v0.toRgb(), 1 !== _v1 && (_v3 = _v1.toString());
          }
        } else _v2 = "none";
        return _v4 ? "".concat(_v0, ": ").concat(_v2, "; ").concat(_v3 ? "".concat(_v0, "-opacity: ").concat(_v3, "; ") : "") : "".concat(_v0, '="').concat(_v2, '" ').concat(_v3 ? "".concat(_v0, '-opacity="').concat(_v3, '" ') : "");
      },
      _v90 = function (_v0, _v1) {
        let {
            left: _v2,
            top: _v3,
            width: _v4,
            height: _v5
          } = _v1,
          _v6 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _v11.NUM_FRACTION_DIGITS,
          _v7 = _v89("fill", _v0, !1),
          [_v8, _v9, _v10, _v11] = [_v2, _v3, _v4, _v5].map(_v0 => _v85(_v0, _v6));
        return "<rect ".concat(_v7, ' x="').concat(_v8, '" y="').concat(_v9, '" width="').concat(_v10, '" height="').concat(_v11, '"></rect>');
      },
      _v91 = _v0 => !!_v0 && void 0 !== _v0.toLive,
      _v92 = _v0 => !!_v0 && "function" == typeof _v0.toObject,
      _v93 = _v0 => !!_v0 && void 0 !== _v0.offsetX && "source" in _v0,
      _v94 = _v0 => !!_v0 && "function" == typeof _v0._renderText,
      _v95 = _v0 => !!_v0 && "multiSelectionStacking" in _v0;
    function _v96(_v0) {
      let _v1 = _v0 && _v97(_v0),
        _v2 = 0,
        _v3 = 0;
      if (!_v0 || !_v1) return {
        left: _v2,
        top: _v3
      };
      let _v4 = _v1.documentElement,
        _v5 = _v1.body || {
          scrollLeft: 0,
          scrollTop: 0
        };
      for (; _v0 && (_v0.parentNode || _v0.host) && ((_v0 = _v0.parentNode || _v0.host) === _v1 ? (_v2 = _v5.scrollLeft || _v4.scrollLeft || 0, _v3 = _v5.scrollTop || _v4.scrollTop || 0) : (_v2 += _v0.scrollLeft || 0, _v3 += _v0.scrollTop || 0), 1 !== _v0.nodeType || "fixed" !== _v0.style.position););
      return {
        left: _v2,
        top: _v3
      };
    }
    let _v97 = _v0 => _v0.ownerDocument || null,
      _v98 = _v0 => {
        var _v1;
        return (null == (_v1 = _v0.ownerDocument) ? void 0 : _v1.defaultView) || null;
      };
    function _v99(_v0, _v1) {
      let _v2 = _v0.style;
      _v2 && ("string" == typeof _v1 ? _v0.style.cssText += ";" + _v1 : Object.entries(_v1).forEach(_v0 => {
        let [_v1, _v2] = _v0;
        return _v2.setProperty(_v1, _v2);
      }));
    }
    let _v100 = function (_v0, _v1, _v2) {
        let {
            width: _v3,
            height: _v4
          } = _v2,
          _v5 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        _v0.width = _v3, _v0.height = _v4, _v5 > 1 && (_v0.setAttribute("width", (_v3 * _v5).toString()), _v0.setAttribute("height", (_v4 * _v5).toString()), _v1.scale(_v5, _v5));
      },
      _v101 = (_v0, _v1) => {
        let {
          width: _v2,
          height: _v3
        } = _v1;
        _v2 && (_v0.style.width = "number" == typeof _v2 ? "".concat(_v2, "px") : _v2), _v3 && (_v0.style.height = "number" == typeof _v3 ? "".concat(_v3, "px") : _v3);
      };
    function _v102(_v0) {
      return void 0 !== _v0.onselectstart && (_v0.onselectstart = () => !1), _v0.style.userSelect = _v33, _v0;
    }
    class _v103 {
      constructor(_v0) {
        _v7(this, "_originalCanvasStyle", void 0), _v7(this, "lower", void 0);
        const _v1 = this.createLowerCanvas(_v0);
        this.lower = {
          el: _v1,
          ctx: _v1.getContext("2d")
        };
      }
      createLowerCanvas(_v0) {
        let _v1 = _v0 && void 0 !== _v0.getContext ? _v0 : _v0 && _v19().getElementById(_v0) || _v53();
        if (_v1.hasAttribute("data-fabric")) throw new _v13("Trying to initialize a canvas that has already been initialized. Did you forget to dispose the canvas?");
        return this._originalCanvasStyle = _v1.style.cssText, _v1.setAttribute("data-fabric", "main"), _v1.classList.add("lower-canvas"), _v1;
      }
      cleanupDOM(_v0) {
        let {
            width: _v1,
            height: _v2
          } = _v0,
          {
            el: _v3
          } = this.lower;
        _v3.classList.remove("lower-canvas"), _v3.removeAttribute("data-fabric"), _v3.setAttribute("width", "".concat(_v1)), _v3.setAttribute("height", "".concat(_v2)), _v3.style.cssText = this._originalCanvasStyle || "", this._originalCanvasStyle = void 0;
      }
      setDimensions(_v0, _v1) {
        let {
          el: _v2,
          ctx: _v3
        } = this.lower;
        _v100(_v2, _v3, _v0, _v1);
      }
      setCSSDimensions(_v0) {
        _v101(this.lower.el, _v0);
      }
      calcOffset() {
        return function (_v0) {
          var _v1;
          let _v2 = {
              left: 0,
              top: 0
            },
            _v3 = _v0 && _v97(_v0),
            _v4 = {
              left: 0,
              top: 0
            },
            _v5 = {
              borderLeftWidth: _v30,
              borderTopWidth: "top",
              paddingLeft: _v30,
              paddingTop: "top"
            };
          if (!_v3) return _v4;
          let _v6 = (null == (_v1 = _v98(_v0)) ? void 0 : _v1.getComputedStyle(_v0, null)) || {};
          for (let _v0 in _v5) _v4[_v5[_v0]] += parseInt(_v6[_v0], 10) || 0;
          let _v7 = _v3.documentElement;
          void 0 !== _v0.getBoundingClientRect && (_v2 = _v0.getBoundingClientRect());
          let _v8 = _v96(_v0);
          return {
            left: _v2.left + _v8.left - (_v7.clientLeft || 0) + _v4.left,
            top: _v2.top + _v8.top - (_v7.clientTop || 0) + _v4.top
          };
        }(this.lower.el);
      }
      dispose() {
        _v18().dispose(this.lower.el), delete this.lower;
      }
    }
    let _v104 = {
      backgroundVpt: !0,
      backgroundColor: "",
      overlayVpt: !0,
      overlayColor: "",
      includeDefaultValues: !0,
      svgViewportTransformation: !0,
      renderOnAddRemove: !0,
      skipOffscreen: !0,
      enableRetinaScaling: !0,
      imageSmoothingEnabled: !0,
      controlsAboveOverlay: !1,
      allowTouchScrolling: !1,
      viewportTransform: [..._v28]
    };
    class _v105 extends _v47(_v48) {
      get lowerCanvasEl() {
        var _v0;
        return null == (_v0 = this.elements.lower) ? void 0 : _v0.el;
      }
      get contextContainer() {
        var _v0;
        return null == (_v0 = this.elements.lower) ? void 0 : _v0.ctx;
      }
      static getDefaults() {
        return _v105.ownDefaults;
      }
      constructor(_v0) {
        let _v1 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        super(), Object.assign(this, this.constructor.getDefaults()), this.set(_v1), this.initElements(_v0), this._setDimensionsImpl({
          width: this.width || this.elements.lower.el.width || 0,
          height: this.height || this.elements.lower.el.height || 0
        }), this.viewportTransform = [...this.viewportTransform], this.calcViewportBoundaries();
      }
      initElements(_v0) {
        this.elements = new _v103(_v0);
      }
      add() {
        let _v0 = super.add(...arguments);
        return arguments.length > 0 && this.renderOnAddRemove && this.requestRenderAll(), _v0;
      }
      insertAt(_v0) {
        for (var _v1 = arguments.length, _v2 = Array(_v1 > 1 ? _v1 - 1 : 0), _v3 = 1; _v3 < _v1; _v3++) _v2[_v3 - 1] = arguments[_v3];
        let _v4 = super.insertAt(_v0, ..._v2);
        return _v2.length > 0 && this.renderOnAddRemove && this.requestRenderAll(), _v4;
      }
      remove() {
        let _v0 = super.remove(...arguments);
        return _v0.length > 0 && this.renderOnAddRemove && this.requestRenderAll(), _v0;
      }
      _onObjectAdded(_v0) {
        _v0.canvas && _v0.canvas !== this && (_v12("warn", "Canvas is trying to add an object that belongs to a different canvas.\nResulting to default behavior: removing object from previous canvas and adding to new canvas"), _v0.canvas.remove(_v0)), _v0._set("canvas", this), _v0.setCoords(), this.fire("object:added", {
          target: _v0
        }), _v0.fire("added", {
          target: this
        });
      }
      _onObjectRemoved(_v0) {
        _v0._set("canvas", void 0), this.fire("object:removed", {
          target: _v0
        }), _v0.fire("removed", {
          target: this
        });
      }
      _onStackOrderChanged() {
        this.renderOnAddRemove && this.requestRenderAll();
      }
      getRetinaScaling() {
        return this.enableRetinaScaling ? _v21() : 1;
      }
      calcOffset() {
        return this._offset = this.elements.calcOffset();
      }
      getWidth() {
        return this.width;
      }
      getHeight() {
        return this.height;
      }
      setWidth(_v0, _v1) {
        return this.setDimensions({
          width: _v0
        }, _v1);
      }
      setHeight(_v0, _v1) {
        return this.setDimensions({
          height: _v0
        }, _v1);
      }
      _setDimensionsImpl(_v0) {
        let {
          cssOnly: _v1 = !1,
          backstoreOnly: _v2 = !1
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!_v1) {
          let _v0 = _v5({
            width: this.width,
            height: this.height
          }, _v0);
          this.elements.setDimensions(_v0, this.getRetinaScaling()), this.hasLostContext = !0, this.width = _v0.width, this.height = _v0.height;
        }
        _v2 || this.elements.setCSSDimensions(_v0), this.calcOffset();
      }
      setDimensions(_v0, _v1) {
        this._setDimensionsImpl(_v0, _v1), _v1 && _v1.cssOnly || this.requestRenderAll();
      }
      getZoom() {
        return this.viewportTransform[0];
      }
      setViewportTransform(_v0) {
        let _v1 = this.backgroundImage,
          _v2 = this.overlayImage,
          _v3 = this._objects.length;
        this.viewportTransform = _v0;
        for (let _v0 = 0; _v0 < _v3; _v0++) {
          let _v0 = this._objects[_v0];
          _v0.group || _v0.setCoords();
        }
        _v1 && _v1.setCoords(), _v2 && _v2.setCoords(), this.calcViewportBoundaries(), this.renderOnAddRemove && this.requestRenderAll();
      }
      zoomToPoint(_v0, _v1) {
        let _v2 = [...this.viewportTransform],
          _v3 = _v59(_v0, _v60(_v2));
        _v2[0] = _v1, _v2[3] = _v1;
        let _v4 = _v59(_v3, _v2);
        _v2[4] += _v0.x - _v4.x, _v2[5] += _v0.y - _v4.y, this.setViewportTransform(_v2);
      }
      setZoom(_v0) {
        this.zoomToPoint(new _v44(0, 0), _v0);
      }
      absolutePan(_v0) {
        let _v1 = [...this.viewportTransform];
        return _v1[4] = -_v0.x, _v1[5] = -_v0.y, this.setViewportTransform(_v1);
      }
      relativePan(_v0) {
        return this.absolutePan(new _v44(-_v0.x - this.viewportTransform[4], -_v0.y - this.viewportTransform[5]));
      }
      getElement() {
        return this.elements.lower.el;
      }
      clearContext(_v0) {
        _v0.clearRect(0, 0, this.width, this.height);
      }
      getContext() {
        return this.elements.lower.ctx;
      }
      clear() {
        this.remove(...this.getObjects()), this.backgroundImage = void 0, this.overlayImage = void 0, this.backgroundColor = "", this.overlayColor = "", this.clearContext(this.getContext()), this.fire("canvas:cleared"), this.renderOnAddRemove && this.requestRenderAll();
      }
      renderAll() {
        this.cancelRequestedRender(), this.destroyed || this.renderCanvas(this.getContext(), this._objects);
      }
      renderAndReset() {
        this.nextRenderHandle = 0, this.renderAll();
      }
      requestRenderAll() {
        this.nextRenderHandle || this.disposed || this.destroyed || (this.nextRenderHandle = _v49(() => this.renderAndReset()));
      }
      calcViewportBoundaries() {
        let _v0 = this.width,
          _v1 = this.height,
          _v2 = _v60(this.viewportTransform),
          _v3 = _v59({
            x: 0,
            y: 0
          }, _v2),
          _v4 = _v59({
            x: _v0,
            y: _v1
          }, _v2),
          _v5 = _v3.min(_v4),
          _v6 = _v3.max(_v4);
        return this.vptCoords = {
          tl: _v5,
          tr: new _v44(_v6.x, _v5.y),
          bl: new _v44(_v5.x, _v6.y),
          br: _v6
        };
      }
      cancelRequestedRender() {
        this.nextRenderHandle && (_v50(this.nextRenderHandle), this.nextRenderHandle = 0);
      }
      drawControls(_v0) {}
      renderCanvas(_v0, _v1) {
        if (this.destroyed) return;
        let _v2 = this.viewportTransform,
          _v3 = this.clipPath;
        this.calcViewportBoundaries(), this.clearContext(_v0), _v0.imageSmoothingEnabled = this.imageSmoothingEnabled, _v0.patternQuality = "best", this.fire("before:render", {
          ctx: _v0
        }), this._renderBackground(_v0), _v0.save(), _v0.transform(_v2[0], _v2[1], _v2[2], _v2[3], _v2[4], _v2[5]), this._renderObjects(_v0, _v1), _v0.restore(), this.controlsAboveOverlay || this.drawControls(_v0), _v3 && (_v3._set("canvas", this), _v3.shouldCache(), _v3._transformDone = !0, _v3.renderCache({
          forClipping: !0
        }), this.drawClipPathOnCanvas(_v0, _v3)), this._renderOverlay(_v0), this.controlsAboveOverlay && this.drawControls(_v0), this.fire("after:render", {
          ctx: _v0
        }), this.__cleanupTask && (this.__cleanupTask(), this.__cleanupTask = void 0);
      }
      drawClipPathOnCanvas(_v0, _v1) {
        let _v2 = this.viewportTransform;
        _v0.save(), _v0.transform(..._v2), _v0.globalCompositeOperation = "destination-in", _v1.transform(_v0), _v0.scale(1 / _v1.zoomX, 1 / _v1.zoomY), _v0.drawImage(_v1._cacheCanvas, -_v1.cacheTranslationX, -_v1.cacheTranslationY), _v0.restore();
      }
      _renderObjects(_v0, _v1) {
        for (let _v0 = 0, _v1 = _v1.length; _v0 < _v1; ++_v0) _v1[_v0] && _v1[_v0].render(_v0);
      }
      _renderBackgroundOrOverlay(_v0, _v1) {
        let _v2 = this["".concat(_v1, "Color")],
          _v3 = this["".concat(_v1, "Image")],
          _v4 = this.viewportTransform,
          _v5 = this["".concat(_v1, "Vpt")];
        if (!_v2 && !_v3) return;
        let _v6 = _v91(_v2);
        if (_v2) {
          if (_v0.save(), _v0.beginPath(), _v0.moveTo(0, 0), _v0.lineTo(this.width, 0), _v0.lineTo(this.width, this.height), _v0.lineTo(0, this.height), _v0.closePath(), _v0.fillStyle = _v6 ? _v2.toLive(_v0) : _v2, _v5 && _v0.transform(..._v4), _v6) {
            _v0.transform(1, 0, 0, 1, _v2.offsetX || 0, _v2.offsetY || 0);
            let _v0 = _v2.gradientTransform || _v2.patternTransform;
            _v0 && _v0.transform(..._v0);
          }
          _v0.fill(), _v0.restore();
        }
        if (_v3) {
          _v0.save();
          let {
            skipOffscreen: _v0
          } = this;
          this.skipOffscreen = _v5, _v5 && _v0.transform(..._v4), _v3.render(_v0), this.skipOffscreen = _v0, _v0.restore();
        }
      }
      _renderBackground(_v0) {
        this._renderBackgroundOrOverlay(_v0, "background");
      }
      _renderOverlay(_v0) {
        this._renderBackgroundOrOverlay(_v0, "overlay");
      }
      getCenter() {
        return {
          top: this.height / 2,
          left: this.width / 2
        };
      }
      getCenterPoint() {
        return new _v44(this.width / 2, this.height / 2);
      }
      centerObjectH(_v0) {
        return this._centerObject(_v0, new _v44(this.getCenterPoint().x, _v0.getCenterPoint().y));
      }
      centerObjectV(_v0) {
        return this._centerObject(_v0, new _v44(_v0.getCenterPoint().x, this.getCenterPoint().y));
      }
      centerObject(_v0) {
        return this._centerObject(_v0, this.getCenterPoint());
      }
      viewportCenterObject(_v0) {
        return this._centerObject(_v0, this.getVpCenter());
      }
      viewportCenterObjectH(_v0) {
        return this._centerObject(_v0, new _v44(this.getVpCenter().x, _v0.getCenterPoint().y));
      }
      viewportCenterObjectV(_v0) {
        return this._centerObject(_v0, new _v44(_v0.getCenterPoint().x, this.getVpCenter().y));
      }
      getVpCenter() {
        return _v59(this.getCenterPoint(), _v60(this.viewportTransform));
      }
      _centerObject(_v0, _v1) {
        _v0.setXY(_v1, _v29, _v29), _v0.setCoords(), this.renderOnAddRemove && this.requestRenderAll();
      }
      toDatalessJSON(_v0) {
        return this.toDatalessObject(_v0);
      }
      toObject(_v0) {
        return this._toObjectMethod("toObject", _v0);
      }
      toJSON() {
        return this.toObject();
      }
      toDatalessObject(_v0) {
        return this._toObjectMethod("toDatalessObject", _v0);
      }
      _toObjectMethod(_v0, _v1) {
        let _v2 = this.clipPath,
          _v3 = _v2 && !_v2.excludeFromExport ? this._toObject(_v2, _v0, _v1) : null;
        return _v5(_v5(_v5({
          version: _v23
        }, _v76(this, _v1)), {}, {
          objects: this._objects.filter(_v0 => !_v0.excludeFromExport).map(_v0 => this._toObject(_v0, _v0, _v1))
        }, this.__serializeBgOverlay(_v0, _v1)), _v3 ? {
          clipPath: _v3
        } : null);
      }
      _toObject(_v0, _v1, _v2) {
        let _v3;
        this.includeDefaultValues || (_v3 = _v0.includeDefaultValues, _v0.includeDefaultValues = !1);
        let _v4 = _v0[_v1](_v2);
        return this.includeDefaultValues || (_v0.includeDefaultValues = !!_v3), _v4;
      }
      __serializeBgOverlay(_v0, _v1) {
        let _v2 = {},
          _v3 = this.backgroundImage,
          _v4 = this.overlayImage,
          _v5 = this.backgroundColor,
          _v6 = this.overlayColor;
        return _v91(_v5) ? _v5.excludeFromExport || (_v2.background = _v5.toObject(_v1)) : _v5 && (_v2.background = _v5), _v91(_v6) ? _v6.excludeFromExport || (_v2.overlay = _v6.toObject(_v1)) : _v6 && (_v2.overlay = _v6), _v3 && !_v3.excludeFromExport && (_v2.backgroundImage = this._toObject(_v3, _v0, _v1)), _v4 && !_v4.excludeFromExport && (_v2.overlayImage = this._toObject(_v4, _v0, _v1)), _v2;
      }
      toSVG() {
        let _v0 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          _v1 = arguments.length > 1 ? arguments[1] : void 0;
        _v0.reviver = _v1;
        let _v2 = [];
        return this._setSVGPreamble(_v2, _v0), this._setSVGHeader(_v2, _v0), this.clipPath && _v2.push('<g clip-path="url(#'.concat(this.clipPath.clipPathId, ')" >\n')), this._setSVGBgOverlayColor(_v2, "background"), this._setSVGBgOverlayImage(_v2, "backgroundImage", _v1), this._setSVGObjects(_v2, _v1), this.clipPath && _v2.push("</g>\n"), this._setSVGBgOverlayColor(_v2, "overlay"), this._setSVGBgOverlayImage(_v2, "overlayImage", _v1), _v2.push("</svg>"), _v2.join("");
      }
      _setSVGPreamble(_v0, _v1) {
        _v1.suppressPreamble || _v0.push('<?xml version="1.0" encoding="', _v1.encoding || "UTF-8", '" standalone="no" ?>\n', '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" ', '"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n');
      }
      _setSVGHeader(_v0, _v1) {
        let _v2,
          _v3 = _v1.width || "".concat(this.width),
          _v4 = _v1.height || "".concat(this.height),
          _v5 = _v11.NUM_FRACTION_DIGITS,
          _v6 = _v1.viewBox;
        if (_v6) _v2 = 'viewBox="'.concat(_v6.x, " ").concat(_v6.y, " ").concat(_v6.width, " ").concat(_v6.height, '" ');else if (this.svgViewportTransformation) {
          let _v0 = this.viewportTransform;
          _v2 = 'viewBox="'.concat(_v85(-_v0[4] / _v0[0], _v5), " ").concat(_v85(-_v0[5] / _v0[3], _v5), " ").concat(_v85(this.width / _v0[0], _v5), " ").concat(_v85(this.height / _v0[3], _v5), '" ');
        } else _v2 = 'viewBox="0 0 '.concat(this.width, " ").concat(this.height, '" ');
        _v0.push("<svg ", 'xmlns="http://www.w3.org/2000/svg" ', 'xmlns:xlink="http://www.w3.org/1999/xlink" ', 'version="1.1" ', 'width="', _v3, '" ', 'height="', _v4, '" ', _v2, 'xml:space="preserve">\n', "<desc>Created with Fabric.js ", _v23, "</desc>\n", "<defs>\n", this.createSVGFontFacesMarkup(), this.createSVGRefElementsMarkup(), this.createSVGClipPathMarkup(_v1), "</defs>\n");
      }
      createSVGClipPathMarkup(_v0) {
        let _v1 = this.clipPath;
        return _v1 ? (_v1.clipPathId = "CLIPPATH_".concat(_v52()), '<clipPath id="'.concat(_v1.clipPathId, '" >\n').concat(_v1.toClipPathSVG(_v0.reviver), "</clipPath>\n")) : "";
      }
      createSVGRefElementsMarkup() {
        return ["background", "overlay"].map(_v0 => {
          let _v1 = this["".concat(_v0, "Color")];
          if (_v91(_v1)) {
            let _v0 = this["".concat(_v0, "Vpt")],
              _v1 = this.viewportTransform,
              _v2 = {
                isType: () => !1,
                width: this.width / (_v0 ? _v1[0] : 1),
                height: this.height / (_v0 ? _v1[3] : 1)
              };
            return _v1.toSVG(_v2, {
              additionalTransform: _v0 ? _v88(_v1) : ""
            });
          }
        }).join("");
      }
      createSVGFontFacesMarkup() {
        let _v0 = [],
          _v1 = {},
          _v2 = _v11.fontPaths;
        this._objects.forEach(function _v0(_v1) {
          _v0.push(_v1), _v46(_v1) && _v1._objects.forEach(_v0);
        }), _v0.forEach(_v0 => {
          if (!_v94(_v0)) return;
          let {
            styles: _v1,
            fontFamily: _v2
          } = _v0;
          _v1[_v2] || !_v2[_v2] || (_v1[_v2] = !0, _v1 && Object.values(_v1).forEach(_v0 => {
            Object.values(_v0).forEach(_v0 => {
              let {
                fontFamily: _v1 = ""
              } = _v0;
              !_v1[_v1] && _v2[_v1] && (_v1[_v1] = !0);
            });
          }));
        });
        let _v3 = Object.keys(_v1).map(_v0 => "		@font-face {\n			font-family: '".concat(_v0, "';\n			src: url('").concat(_v2[_v0], "');\n		}\n")).join("");
        return _v3 ? '	<style type="text/css"><![CDATA[\n'.concat(_v3, "]]></style>\n") : "";
      }
      _setSVGObjects(_v0, _v1) {
        this.forEachObject(_v0 => {
          _v0.excludeFromExport || this._setSVGObject(_v0, _v0, _v1);
        });
      }
      _setSVGObject(_v0, _v1, _v2) {
        _v0.push(_v1.toSVG(_v2));
      }
      _setSVGBgOverlayImage(_v0, _v1, _v2) {
        let _v3 = this[_v1];
        _v3 && !_v3.excludeFromExport && _v3.toSVG && _v0.push(_v3.toSVG(_v2));
      }
      _setSVGBgOverlayColor(_v0, _v1) {
        let _v2 = this["".concat(_v1, "Color")];
        if (_v2) if (_v91(_v2)) {
          let _v0 = _v2.repeat || "",
            _v1 = this.width,
            _v2 = this.height,
            _v3 = this["".concat(_v1, "Vpt")] ? _v88(_v60(this.viewportTransform)) : "";
          _v0.push('<rect transform="'.concat(_v3, " translate(").concat(_v1 / 2, ",").concat(_v2 / 2, ')" x="').concat(_v2.offsetX - _v1 / 2, '" y="').concat(_v2.offsetY - _v2 / 2, '" width="').concat(("repeat-y" === _v0 || "no-repeat" === _v0) && _v93(_v2) ? _v2.source.width : _v1, '" height="').concat(("repeat-x" === _v0 || "no-repeat" === _v0) && _v93(_v2) ? _v2.source.height : _v2, '" fill="url(#SVGID_').concat(_v2.id, ')"></rect>\n'));
        } else _v0.push('<rect x="0" y="0" width="100%" height="100%" ', 'fill="', _v2, '"', "></rect>\n");
      }
      loadFromJSON(_v0, _v1) {
        let {
          signal: _v2
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (!_v0) return Promise.reject(new _v13("`json` is undefined"));
        let _v3 = "string" == typeof _v0 ? JSON.parse(_v0) : _v0,
          {
            objects: _v4 = [],
            backgroundImage: _v5,
            background: _v6,
            overlayImage: _v7,
            overlay: _v8,
            clipPath: _v9
          } = _v3,
          _v10 = this.renderOnAddRemove;
        return this.renderOnAddRemove = !1, Promise.all([_v74(_v4, {
          reviver: _v1,
          signal: _v2
        }), _v75({
          backgroundImage: _v5,
          backgroundColor: _v6,
          overlayImage: _v7,
          overlayColor: _v8,
          clipPath: _v9
        }, {
          signal: _v2
        })]).then(_v0 => {
          let [_v1, _v2] = _v0;
          return this.clear(), this.add(..._v1), this.set(_v3), this.set(_v2), this.renderOnAddRemove = _v10, this;
        });
      }
      clone(_v0) {
        let _v1 = this.toObject(_v0);
        return this.cloneWithoutData().loadFromJSON(_v1);
      }
      cloneWithoutData() {
        let _v0 = _v53();
        return _v0.width = this.width, _v0.height = this.height, new this.constructor(_v0);
      }
      toDataURL() {
        let _v0 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          {
            format: _v1 = "png",
            quality: _v2 = 1,
            multiplier: _v3 = 1,
            enableRetinaScaling: _v4 = !1
          } = _v0,
          _v5 = _v3 * (_v4 ? this.getRetinaScaling() : 1);
        return _v55(this.toCanvasElement(_v5, _v0), _v1, _v2);
      }
      toCanvasElement() {
        let _v0 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          {
            width: _v1,
            height: _v2,
            left: _v3,
            top: _v4,
            filter: _v5
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          _v6 = (_v1 || this.width) * _v0,
          _v7 = (_v2 || this.height) * _v0,
          _v8 = this.getZoom(),
          _v9 = this.width,
          _v10 = this.height,
          _v11 = _v8 * _v0,
          _v12 = this.viewportTransform,
          _v13 = (_v12[4] - (_v3 || 0)) * _v0,
          _v14 = (_v12[5] - (_v4 || 0)) * _v0,
          _v15 = this.enableRetinaScaling,
          _v16 = _v53(),
          _v17 = _v5 ? this._objects.filter(_v0 => _v5(_v0)) : this._objects;
        return _v16.width = _v6, _v16.height = _v7, this.enableRetinaScaling = !1, this.viewportTransform = [_v11, 0, 0, _v11, _v13, _v14], this.width = _v6, this.height = _v7, this.calcViewportBoundaries(), this.renderCanvas(_v16.getContext("2d"), _v17), this.viewportTransform = _v12, this.width = _v9, this.height = _v10, this.calcViewportBoundaries(), this.enableRetinaScaling = _v15, _v16;
      }
      dispose() {
        return this.disposed || this.elements.cleanupDOM({
          width: this.width,
          height: this.height
        }), _v37.cancelByCanvas(this), this.disposed = !0, new Promise((_v0, _v1) => {
          let _v2 = () => {
            this.destroy(), _v0(!0);
          };
          _v2.kill = _v1, this.__cleanupTask && this.__cleanupTask.kill("aborted"), this.destroyed ? _v0(!1) : this.nextRenderHandle ? this.__cleanupTask = _v2 : _v2();
        });
      }
      destroy() {
        this.destroyed = !0, this.cancelRequestedRender(), this.forEachObject(_v0 => _v0.dispose()), this._objects = [], this.backgroundImage && this.backgroundImage.dispose(), this.backgroundImage = void 0, this.overlayImage && this.overlayImage.dispose(), this.overlayImage = void 0, this.elements.dispose();
      }
      toString() {
        return "#<Canvas (".concat(this.complexity(), "): { objects: ").concat(this._objects.length, " }>");
      }
    }
    _v7(_v105, "ownDefaults", _v104);
    let _v106 = ["touchstart", "touchmove", "touchend"],
      _v107 = _v0 => {
        let _v1,
          _v2 = _v96(_v0.target),
          _v3 = (_v1 = _v0.changedTouches) && _v1[0] ? _v1[0] : _v0;
        return new _v44(_v3.clientX + _v2.left, _v3.clientY + _v2.top);
      },
      _v108 = _v0 => _v106.includes(_v0.type) || "touch" === _v0.pointerType,
      _v109 = _v0 => {
        _v0.preventDefault(), _v0.stopPropagation();
      },
      _v110 = _v0 => {
        if (0 === _v0.length) return {
          left: 0,
          top: 0,
          width: 0,
          height: 0
        };
        let {
            min: _v1,
            max: _v2
          } = _v0.reduce((_v0, _v1) => {
            let {
              min: _v2,
              max: _v3
            } = _v0;
            return {
              min: _v2.min(_v1),
              max: _v3.max(_v1)
            };
          }, {
            min: new _v44(_v0[0]),
            max: new _v44(_v0[0])
          }),
          _v3 = _v2.subtract(_v1);
        return {
          left: _v1.x,
          top: _v1.y,
          width: _v3.x,
          height: _v3.y
        };
      },
      _v111 = ["translateX", "translateY", "scaleX", "scaleY"],
      _v112 = (_v0, _v1) => _v113(_v0, _v61(_v1, _v0.calcOwnMatrix())),
      _v113 = (_v0, _v1) => {
        let _v2 = _v64(_v1),
          {
            translateX: _v3,
            translateY: _v4,
            scaleX: _v5,
            scaleY: _v6
          } = _v2,
          _v7 = _v8(_v2, _v111),
          _v8 = new _v44(_v3, _v4);
        _v0.flipX = !1, _v0.flipY = !1, Object.assign(_v0, _v7), _v0.set({
          scaleX: _v5,
          scaleY: _v6
        }), _v0.setPositionByOrigin(_v8, _v29, _v29);
      },
      _v114 = _v0 => {
        _v0.scaleX = 1, _v0.scaleY = 1, _v0.skewX = 0, _v0.skewY = 0, _v0.flipX = !1, _v0.flipY = !1, _v0.rotate(0);
      },
      _v115 = _v0 => ({
        scaleX: _v0.scaleX,
        scaleY: _v0.scaleY,
        skewX: _v0.skewX,
        skewY: _v0.skewY,
        angle: _v0.angle,
        left: _v0.left,
        flipX: _v0.flipX,
        flipY: _v0.flipY,
        top: _v0.top
      }),
      _v116 = (_v0, _v1, _v2) => {
        let _v3 = _v0 / 2,
          _v4 = _v1 / 2,
          _v5 = _v110([new _v44(-_v3, -_v4), new _v44(_v3, -_v4), new _v44(-_v3, _v4), new _v44(_v3, _v4)].map(_v0 => _v0.transform(_v2)));
        return new _v44(_v5.width, _v5.height);
      },
      _v117 = function () {
        let _v0 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _v28,
          _v1 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _v28;
        return _v61(_v60(_v1), _v0);
      },
      _v118 = function (_v0) {
        let _v1 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _v28,
          _v2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _v28;
        return _v0.transform(_v117(_v1, _v2));
      },
      _v119 = function (_v0) {
        let _v1 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _v28,
          _v2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _v28;
        return _v0.transform(_v117(_v1, _v2), !0);
      },
      _v120 = (_v0, _v1, _v2) => {
        let _v3 = _v117(_v1, _v2);
        return _v113(_v0, _v61(_v3, _v0.calcOwnMatrix())), _v3;
      },
      _v121 = (_v0, _v1) => {
        var _v2;
        let {
          transform: {
            target: _v3
          }
        } = _v1;
        null == (_v2 = _v3.canvas) || _v2.fire("object:".concat(_v0), _v5(_v5({}, _v1), {}, {
          target: _v3
        })), _v3.fire(_v0, _v1);
      },
      _v122 = {
        left: -.5,
        top: -.5,
        center: 0,
        bottom: .5,
        right: .5
      },
      _v123 = _v0 => "string" == typeof _v0 ? _v122[_v0] : _v0 - .5,
      _v124 = "not-allowed";
    function _v125(_v0) {
      return _v0.originX === _v29 && _v0.originY === _v29;
    }
    let _v126 = (_v0, _v1) => _v0[_v1],
      _v127 = (_v0, _v1, _v2, _v3) => ({
        e: _v0,
        transform: _v1,
        pointer: new _v44(_v2, _v3)
      });
    function _v128(_v0, _v1) {
      return Math.round((_v0.getTotalAngle() + _v57(Math.atan2(_v1.y, _v1.x)) + 360) % 360 / 45);
    }
    function _v129(_v0, _v1, _v2, _v3, _v4) {
      var _v5, _v6;
      let _v7,
        _v8,
        {
          target: _v9,
          corner: _v10
        } = _v0,
        _v11 = _v9.controls[_v10],
        _v12 = (null == (_v5 = _v9.canvas) ? void 0 : _v5.getZoom()) || 1,
        _v13 = _v9.padding / _v12,
        _v14 = (_v6 = new _v44(_v3, _v4), _v7 = _v9.getRelativeCenterPoint(), _v8 = void 0 !== _v1 && void 0 !== _v2 ? _v9.translateToGivenOrigin(_v7, _v29, _v29, _v1, _v2) : new _v44(_v9.left, _v9.top), (_v9.angle ? _v6.rotate(-_v56(_v9.angle), _v7) : _v6).subtract(_v8));
      return _v14.x >= _v13 && (_v14.x -= _v13), _v14.x <= -_v13 && (_v14.x += _v13), _v14.y >= _v13 && (_v14.y -= _v13), _v14.y <= _v13 && (_v14.y += _v13), _v14.x -= _v11.offsetX, _v14.y -= _v11.offsetY, _v14;
    }
    let _v130 = (_v0, _v1, _v2, _v3) => {
      let {
          target: _v4,
          offsetX: _v5,
          offsetY: _v6
        } = _v1,
        _v7 = _v2 - _v5,
        _v8 = _v3 - _v6,
        _v9 = !_v126(_v4, "lockMovementX") && _v4.left !== _v7,
        _v10 = !_v126(_v4, "lockMovementY") && _v4.top !== _v8;
      return _v9 && _v4.set(_v30, _v7), _v10 && _v4.set("top", _v8), (_v9 || _v10) && _v121("moving", _v127(_v0, _v1, _v2, _v3)), _v9 || _v10;
    };
    class _v131 {
      getSvgStyles(_v0) {
        let _v1 = this.fillRule ? this.fillRule : "nonzero",
          _v2 = this.strokeWidth ? this.strokeWidth : "0",
          _v3 = this.strokeDashArray ? this.strokeDashArray.join(" ") : _v33,
          _v4 = this.strokeDashOffset ? this.strokeDashOffset : "0",
          _v5 = this.strokeLineCap ? this.strokeLineCap : "butt",
          _v6 = this.strokeLineJoin ? this.strokeLineJoin : "miter",
          _v7 = this.strokeMiterLimit ? this.strokeMiterLimit : "4",
          _v8 = void 0 !== this.opacity ? this.opacity : "1",
          _v9 = this.visible ? "" : " visibility: hidden;",
          _v10 = _v0 ? "" : this.getSvgFilter(),
          _v11 = _v89("fill", this.fill);
        return [_v89("stroke", this.stroke), "stroke-width: ", _v2, "; ", "stroke-dasharray: ", _v3, "; ", "stroke-linecap: ", _v5, "; ", "stroke-dashoffset: ", _v4, "; ", "stroke-linejoin: ", _v6, "; ", "stroke-miterlimit: ", _v7, "; ", _v11, "fill-rule: ", _v1, "; ", "opacity: ", _v8, ";", _v10, _v9].join("");
      }
      getSvgFilter() {
        return this.shadow ? "filter: url(#SVGID_".concat(this.shadow.id, ");") : "";
      }
      getSvgCommons() {
        return [this.id ? 'id="'.concat(this.id, '" ') : "", this.clipPath ? 'clip-path="url(#'.concat(this.clipPath.clipPathId, ')" ') : ""].join("");
      }
      getSvgTransform(_v0) {
        let _v1 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          _v2 = _v0 ? this.calcTransformMatrix() : this.calcOwnMatrix(),
          _v3 = 'transform="'.concat(_v88(_v2));
        return "".concat(_v3).concat(_v1, '" ');
      }
      _toSVG(_v0) {
        return [""];
      }
      toSVG(_v0) {
        return this._createBaseSVGMarkup(this._toSVG(_v0), {
          reviver: _v0
        });
      }
      toClipPathSVG(_v0) {
        return "	" + this._createBaseClipPathSVGMarkup(this._toSVG(_v0), {
          reviver: _v0
        });
      }
      _createBaseClipPathSVGMarkup(_v0) {
        let {
            reviver: _v1,
            additionalTransform: _v2 = ""
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          _v3 = [this.getSvgTransform(!0, _v2), this.getSvgCommons()].join(""),
          _v4 = _v0.indexOf("COMMON_PARTS");
        return _v0[_v4] = _v3, _v1 ? _v1(_v0.join("")) : _v0.join("");
      }
      _createBaseSVGMarkup(_v0) {
        let _v1,
          {
            noStyle: _v2,
            reviver: _v3,
            withShadow: _v4,
            additionalTransform: _v5
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          _v6 = _v2 ? "" : 'style="'.concat(this.getSvgStyles(), '" '),
          _v7 = _v4 ? 'style="'.concat(this.getSvgFilter(), '" ') : "",
          _v8 = this.clipPath,
          _v9 = this.strokeUniform ? 'vector-effect="non-scaling-stroke" ' : "",
          _v10 = _v8 && _v8.absolutePositioned,
          _v11 = this.stroke,
          _v12 = this.fill,
          _v13 = this.shadow,
          _v14 = [],
          _v15 = _v0.indexOf("COMMON_PARTS");
        _v8 && (_v8.clipPathId = "CLIPPATH_".concat(_v52()), _v1 = '<clipPath id="'.concat(_v8.clipPathId, '" >\n').concat(_v8.toClipPathSVG(_v3), "</clipPath>\n")), _v10 && _v14.push("<g ", _v7, this.getSvgCommons(), " >\n"), _v14.push("<g ", this.getSvgTransform(!1), _v10 ? "" : _v7 + this.getSvgCommons(), " >\n");
        let _v16 = [_v6, _v9, _v2 ? "" : this.addPaintOrder(), " ", _v5 ? 'transform="'.concat(_v5, '" ') : ""].join("");
        return _v0[_v15] = _v16, _v91(_v12) && _v14.push(_v12.toSVG(this)), _v91(_v11) && _v14.push(_v11.toSVG(this)), _v13 && _v14.push(_v13.toSVG(this)), _v8 && _v14.push(_v1), _v14.push(_v0.join("")), _v14.push("</g>\n"), _v10 && _v14.push("</g>\n"), _v3 ? _v3(_v14.join("")) : _v14.join("");
      }
      addPaintOrder() {
        return "fill" !== this.paintFirst ? ' paint-order="'.concat(this.paintFirst, '" ') : "";
      }
    }
    let _v132 = (_v0, _v1, _v2, _v3) => (_v0 < Math.abs(_v1) ? (_v0 = _v1, _v3 = _v2 / 4) : _v3 = 0 === _v1 && 0 === _v0 ? _v2 / _v26 * Math.asin(1) : _v2 / _v26 * Math.asin(_v1 / _v0), {
        a: _v0,
        c: _v1,
        p: _v2,
        s: _v3
      }),
      _v133 = (_v0, _v1, _v2, _v3, _v4) => _v0 * Math.pow(2, 10 * (_v3 -= 1)) * Math.sin((_v3 * _v4 - _v1) * _v26 / _v2),
      _v134 = (_v0, _v1, _v2, _v3) => -_v2 * Math.cos(_v0 / _v3 * _v25) + _v2 + _v1,
      _v135 = (_v0, _v1, _v2, _v3) => (_v0 /= _v3) < 1 / 2.75 ? 7.5625 * _v0 * _v0 * _v2 + _v1 : _v0 < 2 / 2.75 ? _v2 * (7.5625 * (_v0 -= 1.5 / 2.75) * _v0 + .75) + _v1 : _v0 < 2.5 / 2.75 ? _v2 * (7.5625 * (_v0 -= 2.25 / 2.75) * _v0 + .9375) + _v1 : _v2 * (7.5625 * (_v0 -= 2.625 / 2.75) * _v0 + .984375) + _v1,
      _v136 = (_v0, _v1, _v2, _v3) => _v2 - _v135(_v3 - _v0, 0, _v2, _v3) + _v1;
    var _v137,
      _v138,
      _v139,
      _v140,
      _v141,
      _v142,
      _v143,
      _v144,
      _v145,
      _v146,
      _v147 = Object.freeze({
        __proto__: null,
        defaultEasing: _v134,
        easeInBack: function (_v0, _v1, _v2, _v3) {
          let _v4 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1.70158;
          return _v2 * (_v0 /= _v3) * _v0 * ((_v4 + 1) * _v0 - _v4) + _v1;
        },
        easeInBounce: _v136,
        easeInCirc: (_v0, _v1, _v2, _v3) => -_v2 * (Math.sqrt(1 - (_v0 /= _v3) * _v0) - 1) + _v1,
        easeInCubic: (_v0, _v1, _v2, _v3) => _v2 * (_v0 / _v3) ** 3 + _v1,
        easeInElastic: (_v0, _v1, _v2, _v3) => {
          let _v4 = 0;
          if (0 === _v0) return _v1;
          if (1 == (_v0 /= _v3)) return _v1 + _v2;
          _v4 || (_v4 = .3 * _v3);
          let {
            a: _v5,
            s: _v6,
            p: _v7
          } = _v132(_v2, _v2, _v4, 1.70158);
          return -_v133(_v5, _v6, _v7, _v0, _v3) + _v1;
        },
        easeInExpo: (_v0, _v1, _v2, _v3) => 0 === _v0 ? _v1 : _v2 * 2 ** (10 * (_v0 / _v3 - 1)) + _v1,
        easeInOutBack: function (_v0, _v1, _v2, _v3) {
          let _v4 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1.70158;
          return (_v0 /= _v3 / 2) < 1 ? _v2 / 2 * (_v0 * _v0 * (((_v4 *= 1.525) + 1) * _v0 - _v4)) + _v1 : _v2 / 2 * ((_v0 -= 2) * _v0 * (((_v4 *= 1.525) + 1) * _v0 + _v4) + 2) + _v1;
        },
        easeInOutBounce: (_v0, _v1, _v2, _v3) => _v0 < _v3 / 2 ? .5 * _v136(2 * _v0, 0, _v2, _v3) + _v1 : .5 * _v135(2 * _v0 - _v3, 0, _v2, _v3) + .5 * _v2 + _v1,
        easeInOutCirc: (_v0, _v1, _v2, _v3) => (_v0 /= _v3 / 2) < 1 ? -_v2 / 2 * (Math.sqrt(1 - _v0 ** 2) - 1) + _v1 : _v2 / 2 * (Math.sqrt(1 - (_v0 -= 2) * _v0) + 1) + _v1,
        easeInOutCubic: (_v0, _v1, _v2, _v3) => (_v0 /= _v3 / 2) < 1 ? _v2 / 2 * _v0 ** 3 + _v1 : _v2 / 2 * ((_v0 - 2) ** 3 + 2) + _v1,
        easeInOutElastic: (_v0, _v1, _v2, _v3) => {
          let _v4 = 0;
          if (0 === _v0) return _v1;
          if (2 == (_v0 /= _v3 / 2)) return _v1 + _v2;
          _v4 || (_v4 = .3 * 1.5 * _v3);
          let {
            a: _v5,
            s: _v6,
            p: _v7,
            c: _v8
          } = _v132(_v2, _v2, _v4, 1.70158);
          return _v0 < 1 ? -.5 * _v133(_v5, _v6, _v7, _v0, _v3) + _v1 : _v5 * Math.pow(2, -10 * (_v0 -= 1)) * Math.sin((_v0 * _v3 - _v6) * _v26 / _v7) * .5 + _v8 + _v1;
        },
        easeInOutExpo: (_v0, _v1, _v2, _v3) => 0 === _v0 ? _v1 : _v0 === _v3 ? _v1 + _v2 : (_v0 /= _v3 / 2) < 1 ? _v2 / 2 * 2 ** (10 * (_v0 - 1)) + _v1 : -(_v2 / 2 * (2 ** (-10 * --_v0) + 2)) + _v1,
        easeInOutQuad: (_v0, _v1, _v2, _v3) => (_v0 /= _v3 / 2) < 1 ? _v2 / 2 * _v0 ** 2 + _v1 : -_v2 / 2 * (--_v0 * (_v0 - 2) - 1) + _v1,
        easeInOutQuart: (_v0, _v1, _v2, _v3) => (_v0 /= _v3 / 2) < 1 ? _v2 / 2 * _v0 ** 4 + _v1 : -_v2 / 2 * ((_v0 -= 2) * _v0 ** 3 - 2) + _v1,
        easeInOutQuint: (_v0, _v1, _v2, _v3) => (_v0 /= _v3 / 2) < 1 ? _v2 / 2 * _v0 ** 5 + _v1 : _v2 / 2 * ((_v0 - 2) ** 5 + 2) + _v1,
        easeInOutSine: (_v0, _v1, _v2, _v3) => -_v2 / 2 * (Math.cos(Math.PI * _v0 / _v3) - 1) + _v1,
        easeInQuad: (_v0, _v1, _v2, _v3) => _v2 * (_v0 /= _v3) * _v0 + _v1,
        easeInQuart: (_v0, _v1, _v2, _v3) => _v2 * (_v0 /= _v3) * _v0 ** 3 + _v1,
        easeInQuint: (_v0, _v1, _v2, _v3) => _v2 * (_v0 / _v3) ** 5 + _v1,
        easeInSine: (_v0, _v1, _v2, _v3) => -_v2 * Math.cos(_v0 / _v3 * _v25) + _v2 + _v1,
        easeOutBack: function (_v0, _v1, _v2, _v3) {
          let _v4 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1.70158;
          return _v2 * ((_v0 = _v0 / _v3 - 1) * _v0 * ((_v4 + 1) * _v0 + _v4) + 1) + _v1;
        },
        easeOutBounce: _v135,
        easeOutCirc: (_v0, _v1, _v2, _v3) => _v2 * Math.sqrt(1 - (_v0 = _v0 / _v3 - 1) * _v0) + _v1,
        easeOutCubic: (_v0, _v1, _v2, _v3) => _v2 * ((_v0 / _v3 - 1) ** 3 + 1) + _v1,
        easeOutElastic: (_v0, _v1, _v2, _v3) => {
          let _v4 = 0;
          if (0 === _v0) return _v1;
          if (1 == (_v0 /= _v3)) return _v1 + _v2;
          _v4 || (_v4 = .3 * _v3);
          let {
            a: _v5,
            s: _v6,
            p: _v7,
            c: _v8
          } = _v132(_v2, _v2, _v4, 1.70158);
          return _v5 * 2 ** (-10 * _v0) * Math.sin((_v0 * _v3 - _v6) * _v26 / _v7) + _v8 + _v1;
        },
        easeOutExpo: (_v0, _v1, _v2, _v3) => _v0 === _v3 ? _v1 + _v2 : -(_v2 * (2 ** (-10 * _v0 / _v3) + 1)) + _v1,
        easeOutQuad: (_v0, _v1, _v2, _v3) => -_v2 * (_v0 /= _v3) * (_v0 - 2) + _v1,
        easeOutQuart: (_v0, _v1, _v2, _v3) => -_v2 * ((_v0 = _v0 / _v3 - 1) * _v0 ** 3 - 1) + _v1,
        easeOutQuint: (_v0, _v1, _v2, _v3) => _v2 * ((_v0 / _v3 - 1) ** 5 + 1) + _v1,
        easeOutSine: (_v0, _v1, _v2, _v3) => _v2 * Math.sin(_v0 / _v3 * _v25) + _v1
      });
    let _v148 = () => !1;
    class _v149 {
      constructor(_v0) {
        let {
          startValue: _v1,
          byValue: _v2,
          duration: _v3 = 500,
          delay: _v4 = 0,
          easing: _v5 = _v134,
          onStart: _v6 = _v24,
          onChange: _v7 = _v24,
          onComplete: _v8 = _v24,
          abort: _v9 = _v148,
          target: _v10
        } = _v0;
        _v7(this, "_state", "pending"), _v7(this, "durationProgress", 0), _v7(this, "valueProgress", 0), this.tick = this.tick.bind(this), this.duration = _v3, this.delay = _v4, this.easing = _v5, this._onStart = _v6, this._onChange = _v7, this._onComplete = _v8, this._abort = _v9, this.target = _v10, this.startValue = _v1, this.byValue = _v2, this.value = this.startValue, this.endValue = Object.freeze(this.calculate(this.duration).value);
      }
      get state() {
        return this._state;
      }
      isDone() {
        return "aborted" === this._state || "completed" === this._state;
      }
      start() {
        let _v0 = _v0 => {
          "pending" === this._state && (this.startTime = _v0 || +new Date(), this._state = "running", this._onStart(), this.tick(this.startTime));
        };
        this.register(), this.delay > 0 ? setTimeout(() => _v49(_v0), this.delay) : _v49(_v0);
      }
      tick(_v0) {
        let _v1 = (_v0 || +new Date()) - this.startTime,
          _v2 = Math.min(_v1, this.duration);
        this.durationProgress = _v2 / this.duration;
        let {
          value: _v3,
          valueProgress: _v4
        } = this.calculate(_v2);
        this.value = Object.freeze(_v3), this.valueProgress = _v4, "aborted" === this._state || (this._abort(this.value, this.valueProgress, this.durationProgress) ? (this._state = "aborted", this.unregister()) : _v1 >= this.duration ? (this.durationProgress = this.valueProgress = 1, this._onChange(this.endValue, this.valueProgress, this.durationProgress), this._state = "completed", this._onComplete(this.endValue, this.valueProgress, this.durationProgress), this.unregister()) : (this._onChange(this.value, this.valueProgress, this.durationProgress), _v49(this.tick)));
      }
      register() {
        _v37.push(this);
      }
      unregister() {
        _v37.remove(this);
      }
      abort() {
        this._state = "aborted", this.unregister();
      }
    }
    let _v150 = ["startValue", "endValue"];
    class _v151 extends _v149 {
      constructor(_v0) {
        let {
          startValue: _v1 = 0,
          endValue: _v2 = 100
        } = _v0;
        super(_v5(_v5({}, _v8(_v0, _v150)), {}, {
          startValue: _v1,
          byValue: _v2 - _v1
        }));
      }
      calculate(_v0) {
        let _v1 = this.easing(_v0, this.startValue, this.byValue, this.duration);
        return {
          value: _v1,
          valueProgress: Math.abs((_v1 - this.startValue) / this.byValue)
        };
      }
    }
    let _v152 = ["startValue", "endValue"];
    class _v153 extends _v149 {
      constructor(_v0) {
        let {
          startValue: _v1 = [0],
          endValue: _v2 = [100]
        } = _v0;
        super(_v5(_v5({}, _v8(_v0, _v152)), {}, {
          startValue: _v1,
          byValue: _v2.map((_v0, _v1) => _v0 - _v1[_v1])
        }));
      }
      calculate(_v0) {
        let _v1 = this.startValue.map((_v0, _v1) => this.easing(_v0, _v0, this.byValue[_v1], this.duration, _v1));
        return {
          value: _v1,
          valueProgress: Math.abs((_v1[0] - this.startValue[0]) / this.byValue[0])
        };
      }
    }
    let _v154 = (_v0, _v1, _v2) => Math.max(_v0, Math.min(_v1, _v2)),
      _v155 = ["startValue", "endValue", "easing", "onChange", "onComplete", "abort"],
      _v156 = (_v0, _v1, _v2, _v3) => _v1 + _v2 * (1 - Math.cos(_v0 / _v3 * _v25)),
      _v157 = _v0 => _v0 && ((_v0, _v1, _v2) => _v0(new _v84(_v0).toRgba(), _v1, _v2));
    class _v158 extends _v149 {
      constructor(_v0) {
        let {
            startValue: _v1,
            endValue: _v2,
            easing: _v3 = _v156,
            onChange: _v4,
            onComplete: _v5,
            abort: _v6
          } = _v0,
          _v7 = _v8(_v0, _v155);
        const _v8 = new _v84(_v1).getSource(),
          _v9 = new _v84(_v2).getSource();
        super(_v5(_v5({}, _v7), {}, {
          startValue: _v8,
          byValue: _v9.map((_v0, _v1) => _v0 - _v8[_v1]),
          easing: _v3,
          onChange: _v157(_v4),
          onComplete: _v157(_v5),
          abort: _v157(_v6)
        }));
      }
      calculate(_v0) {
        let [_v1, _v2, _v3, _v4] = this.startValue.map((_v0, _v1) => this.easing(_v0, _v0, this.byValue[_v1], this.duration, _v1)),
          _v5 = [...[_v1, _v2, _v3].map(Math.round), _v154(0, _v4, 1)];
        return {
          value: _v5,
          valueProgress: _v5.map((_v0, _v1) => 0 !== this.byValue[_v1] ? Math.abs((_v0 - this.startValue[_v1]) / this.byValue[_v1]) : 0).find(_v0 => 0 !== _v0) || 0
        };
      }
    }
    function _v159(_v0) {
      let _v1 = Array.isArray(_v0.startValue) || Array.isArray(_v0.endValue) ? new _v153(_v0) : new _v151(_v0);
      return _v1.start(), _v1;
    }
    function _v160(_v0) {
      let _v1 = new _v158(_v0);
      return _v1.start(), _v1;
    }
    let _v161 = new _v44(1, 0),
      _v162 = new _v44(),
      _v163 = (_v0, _v1) => _v0.rotate(_v1),
      _v164 = (_v0, _v1) => new _v44(_v1).subtract(_v0),
      _v165 = _v0 => _v0.distanceFrom(_v162),
      _v166 = (_v0, _v1) => Math.atan2(_v170(_v0, _v1), _v171(_v0, _v1)),
      _v167 = _v0 => _v166(_v161, _v0),
      _v168 = _v0 => _v0.eq(_v162) ? _v0 : _v0.scalarDivide(_v165(_v0)),
      _v169 = function (_v0) {
        let _v1 = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return _v168(new _v44(-_v0.y, _v0.x).scalarMultiply(_v1 ? 1 : -1));
      },
      _v170 = (_v0, _v1) => _v0.x * _v1.y - _v0.y * _v1.x,
      _v171 = (_v0, _v1) => _v0.x * _v1.x + _v0.y * _v1.y,
      _v172 = (_v0, _v1, _v2) => {
        if (_v0.eq(_v1) || _v0.eq(_v2)) return !0;
        let _v3 = _v170(_v1, _v2),
          _v4 = _v170(_v1, _v0),
          _v5 = _v170(_v2, _v0);
        return _v3 >= 0 ? _v4 >= 0 && _v5 <= 0 : !(_v4 <= 0 && _v5 >= 0);
      };
    class _v173 {
      constructor(_v0) {
        this.status = _v0, this.points = [];
      }
      includes(_v0) {
        return this.points.some(_v0 => _v0.eq(_v0));
      }
      append() {
        for (var _v0 = arguments.length, _v1 = Array(_v0), _v2 = 0; _v2 < _v0; _v2++) _v1[_v2] = arguments[_v2];
        return this.points = this.points.concat(_v1.filter(_v0 => !this.includes(_v0))), this;
      }
      static isPointContained(_v0, _v1, _v2) {
        let _v3 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (_v1.eq(_v2)) return _v0.eq(_v1);
        {
          if (_v1.x === _v2.x) return _v0.x === _v1.x && (_v3 || _v0.y >= Math.min(_v1.y, _v2.y) && _v0.y <= Math.max(_v1.y, _v2.y));
          if (_v1.y === _v2.y) return _v0.y === _v1.y && (_v3 || _v0.x >= Math.min(_v1.x, _v2.x) && _v0.x <= Math.max(_v1.x, _v2.x));
          let _v0 = _v164(_v1, _v2),
            _v1 = _v164(_v1, _v0).divide(_v0);
          return _v3 ? Math.abs(_v1.x) === Math.abs(_v1.y) : _v1.x === _v1.y && _v1.x >= 0 && _v1.x <= 1;
        }
      }
      static isPointInPolygon(_v0, _v1) {
        let _v2 = new _v44(_v0).setX(Math.min(_v0.x - 1, ..._v1.map(_v0 => _v0.x))),
          _v3 = 0;
        for (let _v0 = 0; _v0 < _v1.length; _v0++) {
          let _v0 = this.intersectSegmentSegment(_v1[_v0], _v1[(_v0 + 1) % _v1.length], _v0, _v2);
          if (_v0.includes(_v0)) return !0;
          _v3 += Number("Intersection" === _v0.status);
        }
        return _v3 % 2 == 1;
      }
      static intersectLineLine(_v0, _v1, _v2, _v3) {
        let _v4 = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
          _v5 = !(arguments.length > 5) || void 0 === arguments[5] || arguments[5],
          _v6 = _v1.x - _v0.x,
          _v7 = _v1.y - _v0.y,
          _v8 = _v3.x - _v2.x,
          _v9 = _v3.y - _v2.y,
          _v10 = _v0.x - _v2.x,
          _v11 = _v0.y - _v2.y,
          _v12 = _v8 * _v11 - _v9 * _v10,
          _v13 = _v6 * _v11 - _v7 * _v10,
          _v14 = _v9 * _v6 - _v8 * _v7;
        if (0 !== _v14) {
          let _v0 = _v12 / _v14,
            _v1 = _v13 / _v14;
          return (_v4 || 0 <= _v0 && _v0 <= 1) && (_v5 || 0 <= _v1 && _v1 <= 1) ? new _v173("Intersection").append(new _v44(_v0.x + _v0 * _v6, _v0.y + _v0 * _v7)) : new _v173();
        }
        if (0 !== _v12 && 0 !== _v13) return new _v173("Parallel");
        {
          let _v0 = _v4 || _v5 || _v173.isPointContained(_v0, _v2, _v3) || _v173.isPointContained(_v1, _v2, _v3) || _v173.isPointContained(_v2, _v0, _v1) || _v173.isPointContained(_v3, _v0, _v1);
          return new _v173(_v0 ? "Coincident" : void 0);
        }
      }
      static intersectSegmentLine(_v0, _v1, _v2, _v3) {
        return _v173.intersectLineLine(_v0, _v1, _v2, _v3, !1, !0);
      }
      static intersectSegmentSegment(_v0, _v1, _v2, _v3) {
        return _v173.intersectLineLine(_v0, _v1, _v2, _v3, !1, !1);
      }
      static intersectLinePolygon(_v0, _v1, _v2) {
        let _v3 = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
          _v4 = new _v173(),
          _v5 = _v2.length;
        for (let _v0 = 0, _v1, _v2, _v3; _v0 < _v5; _v0++) {
          if (_v1 = _v2[_v0], _v2 = _v2[(_v0 + 1) % _v5], "Coincident" === (_v3 = _v173.intersectLineLine(_v0, _v1, _v1, _v2, _v3, !1)).status) return _v3;
          _v4.append(..._v3.points);
        }
        return _v4.points.length > 0 && (_v4.status = "Intersection"), _v4;
      }
      static intersectSegmentPolygon(_v0, _v1, _v2) {
        return _v173.intersectLinePolygon(_v0, _v1, _v2, !1);
      }
      static intersectPolygonPolygon(_v0, _v1) {
        let _v2 = new _v173(),
          _v3 = _v0.length,
          _v4 = [];
        for (let _v0 = 0; _v0 < _v3; _v0++) {
          let _v0 = _v0[_v0],
            _v1 = _v0[(_v0 + 1) % _v3],
            _v2 = _v173.intersectSegmentPolygon(_v0, _v1, _v1);
          "Coincident" === _v2.status ? (_v4.push(_v2), _v2.append(_v0, _v1)) : _v2.append(..._v2.points);
        }
        return _v4.length > 0 && _v4.length === _v0.length ? new _v173("Coincident") : (_v2.points.length > 0 && (_v2.status = "Intersection"), _v2);
      }
      static intersectPolygonRectangle(_v0, _v1, _v2) {
        let _v3 = _v1.min(_v2),
          _v4 = _v1.max(_v2),
          _v5 = new _v44(_v4.x, _v3.y),
          _v6 = new _v44(_v3.x, _v4.y);
        return _v173.intersectPolygonPolygon(_v0, [_v3, _v5, _v4, _v6]);
      }
    }
    class _v174 extends _v48 {
      _getTransformedDimensions() {
        let _v0 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          _v1 = _v5({
            scaleX: this.scaleX,
            scaleY: this.scaleY,
            skewX: this.skewX,
            skewY: this.skewY,
            width: this.width,
            height: this.height,
            strokeWidth: this.strokeWidth
          }, _v0),
          _v2 = _v1.strokeWidth,
          _v3 = _v2,
          _v4 = 0;
        this.strokeUniform && (_v3 = 0, _v4 = _v2);
        let _v5 = _v1.width + _v3,
          _v6 = _v1.height + _v3;
        return (0 === _v1.skewX && 0 === _v1.skewY ? new _v44(_v5 * _v1.scaleX, _v6 * _v1.scaleY) : _v116(_v5, _v6, _v71(_v1))).scalarAdd(_v4);
      }
      translateToGivenOrigin(_v0, _v1, _v2, _v3, _v4) {
        let _v5 = _v0.x,
          _v6 = _v0.y,
          _v7 = _v123(_v3) - _v123(_v1),
          _v8 = _v123(_v4) - _v123(_v2);
        if (_v7 || _v8) {
          let _v0 = this._getTransformedDimensions();
          _v5 += _v7 * _v0.x, _v6 += _v8 * _v0.y;
        }
        return new _v44(_v5, _v6);
      }
      translateToCenterPoint(_v0, _v1, _v2) {
        let _v3 = this.translateToGivenOrigin(_v0, _v1, _v2, _v29, _v29);
        return this.angle ? _v3.rotate(_v56(this.angle), _v0) : _v3;
      }
      translateToOriginPoint(_v0, _v1, _v2) {
        let _v3 = this.translateToGivenOrigin(_v0, _v29, _v29, _v1, _v2);
        return this.angle ? _v3.rotate(_v56(this.angle), _v0) : _v3;
      }
      getCenterPoint() {
        let _v0 = this.getRelativeCenterPoint();
        return this.group ? _v59(_v0, this.group.calcTransformMatrix()) : _v0;
      }
      getRelativeCenterPoint() {
        return this.translateToCenterPoint(new _v44(this.left, this.top), this.originX, this.originY);
      }
      getPointByOrigin(_v0, _v1) {
        return this.translateToOriginPoint(this.getRelativeCenterPoint(), _v0, _v1);
      }
      setPositionByOrigin(_v0, _v1, _v2) {
        let _v3 = this.translateToCenterPoint(_v0, _v1, _v2),
          _v4 = this.translateToOriginPoint(_v3, this.originX, this.originY);
        this.set({
          left: _v4.x,
          top: _v4.y
        });
      }
      _getLeftTopCoords() {
        return this.translateToOriginPoint(this.getRelativeCenterPoint(), _v30, "top");
      }
    }
    class _v175 extends _v174 {
      getX() {
        return this.getXY().x;
      }
      setX(_v0) {
        this.setXY(this.getXY().setX(_v0));
      }
      getY() {
        return this.getXY().y;
      }
      setY(_v0) {
        this.setXY(this.getXY().setY(_v0));
      }
      getRelativeX() {
        return this.left;
      }
      setRelativeX(_v0) {
        this.left = _v0;
      }
      getRelativeY() {
        return this.top;
      }
      setRelativeY(_v0) {
        this.top = _v0;
      }
      getXY() {
        let _v0 = this.getRelativeXY();
        return this.group ? _v59(_v0, this.group.calcTransformMatrix()) : _v0;
      }
      setXY(_v0, _v1, _v2) {
        this.group && (_v0 = _v59(_v0, _v60(this.group.calcTransformMatrix()))), this.setRelativeXY(_v0, _v1, _v2);
      }
      getRelativeXY() {
        return new _v44(this.left, this.top);
      }
      setRelativeXY(_v0) {
        let _v1 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.originX,
          _v2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.originY;
        this.setPositionByOrigin(_v0, _v1, _v2);
      }
      isStrokeAccountedForInDimensions() {
        return !1;
      }
      getCoords() {
        let {
            tl: _v0,
            tr: _v1,
            br: _v2,
            bl: _v3
          } = this.aCoords || (this.aCoords = this.calcACoords()),
          _v4 = [_v0, _v1, _v2, _v3];
        if (this.group) {
          let _v0 = this.group.calcTransformMatrix();
          return _v4.map(_v0 => _v59(_v0, _v0));
        }
        return _v4;
      }
      intersectsWithRect(_v0, _v1) {
        return "Intersection" === _v173.intersectPolygonRectangle(this.getCoords(), _v0, _v1).status;
      }
      intersectsWithObject(_v0) {
        let _v1 = _v173.intersectPolygonPolygon(this.getCoords(), _v0.getCoords());
        return "Intersection" === _v1.status || "Coincident" === _v1.status || _v0.isContainedWithinObject(this) || this.isContainedWithinObject(_v0);
      }
      isContainedWithinObject(_v0) {
        return this.getCoords().every(_v0 => _v0.containsPoint(_v0));
      }
      isContainedWithinRect(_v0, _v1) {
        let {
          left: _v2,
          top: _v3,
          width: _v4,
          height: _v5
        } = this.getBoundingRect();
        return _v2 >= _v0.x && _v2 + _v4 <= _v1.x && _v3 >= _v0.y && _v3 + _v5 <= _v1.y;
      }
      isOverlapping(_v0) {
        return this.intersectsWithObject(_v0) || this.isContainedWithinObject(_v0) || _v0.isContainedWithinObject(this);
      }
      containsPoint(_v0) {
        return _v173.isPointInPolygon(_v0, this.getCoords());
      }
      isOnScreen() {
        if (!this.canvas) return !1;
        let {
          tl: _v0,
          br: _v1
        } = this.canvas.vptCoords;
        return !!(this.getCoords().some(_v0 => _v0.x <= _v1.x && _v0.x >= _v0.x && _v0.y <= _v1.y && _v0.y >= _v0.y) || this.intersectsWithRect(_v0, _v1)) || this.containsPoint(_v0.midPointFrom(_v1));
      }
      isPartiallyOnScreen() {
        if (!this.canvas) return !1;
        let {
          tl: _v0,
          br: _v1
        } = this.canvas.vptCoords;
        return !!this.intersectsWithRect(_v0, _v1) || this.getCoords().every(_v0 => (_v0.x >= _v1.x || _v0.x <= _v0.x) && (_v0.y >= _v1.y || _v0.y <= _v0.y)) && this.containsPoint(_v0.midPointFrom(_v1));
      }
      getBoundingRect() {
        return _v110(this.getCoords());
      }
      getScaledWidth() {
        return this._getTransformedDimensions().x;
      }
      getScaledHeight() {
        return this._getTransformedDimensions().y;
      }
      scale(_v0) {
        this._set("scaleX", _v0), this._set("scaleY", _v0), this.setCoords();
      }
      scaleToWidth(_v0) {
        let _v1 = this.getBoundingRect().width / this.getScaledWidth();
        return this.scale(_v0 / this.width / _v1);
      }
      scaleToHeight(_v0) {
        let _v1 = this.getBoundingRect().height / this.getScaledHeight();
        return this.scale(_v0 / this.height / _v1);
      }
      getCanvasRetinaScaling() {
        var _v0;
        return (null == (_v0 = this.canvas) ? void 0 : _v0.getRetinaScaling()) || 1;
      }
      getTotalAngle() {
        return this.group ? _v57(_v63(this.calcTransformMatrix())) : this.angle;
      }
      getViewportTransform() {
        var _v0;
        return (null == (_v0 = this.canvas) ? void 0 : _v0.viewportTransform) || _v28.concat();
      }
      calcACoords() {
        let _v0 = _v66({
            angle: this.angle
          }),
          {
            x: _v1,
            y: _v2
          } = this.getRelativeCenterPoint(),
          _v3 = _v61(_v65(_v1, _v2), _v0),
          _v4 = this._getTransformedDimensions(),
          _v5 = _v4.x / 2,
          _v6 = _v4.y / 2;
        return {
          tl: _v59({
            x: -_v5,
            y: -_v6
          }, _v3),
          tr: _v59({
            x: _v5,
            y: -_v6
          }, _v3),
          bl: _v59({
            x: -_v5,
            y: _v6
          }, _v3),
          br: _v59({
            x: _v5,
            y: _v6
          }, _v3)
        };
      }
      setCoords() {
        this.aCoords = this.calcACoords();
      }
      transformMatrixKey() {
        let _v0 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          _v1 = "";
        return !_v0 && this.group && (_v1 = this.group.transformMatrixKey(_v0) + "_"), _v1 + this.top + "_" + this.left + "_" + this.scaleX + "_" + this.scaleY + "_" + this.skewX + "_" + this.skewY + "_" + this.angle + "_" + this.originX + "_" + this.originY + "_" + this.width + "_" + this.height + "_" + this.strokeWidth + this.flipX + this.flipY;
      }
      calcTransformMatrix() {
        let _v0 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          _v1 = this.calcOwnMatrix();
        if (_v0 || !this.group) return _v1;
        let _v2 = this.transformMatrixKey(_v0),
          _v3 = this.matrixCache;
        return _v3 && _v3.key === _v2 ? _v3.value : (this.group && (_v1 = _v61(this.group.calcTransformMatrix(!1), _v1)), this.matrixCache = {
          key: _v2,
          value: _v1
        }, _v1);
      }
      calcOwnMatrix() {
        let _v0 = this.transformMatrixKey(!0),
          _v1 = this.ownMatrixCache;
        if (_v1 && _v1.key === _v0) return _v1.value;
        let _v2 = this.getRelativeCenterPoint(),
          _v3 = _v72({
            angle: this.angle,
            translateX: _v2.x,
            translateY: _v2.y,
            scaleX: this.scaleX,
            scaleY: this.scaleY,
            skewX: this.skewX,
            skewY: this.skewY,
            flipX: this.flipX,
            flipY: this.flipY
          });
        return this.ownMatrixCache = {
          key: _v0,
          value: _v3
        }, _v3;
      }
      _getNonTransformedDimensions() {
        return new _v44(this.width, this.height).scalarAdd(this.strokeWidth);
      }
      _calculateCurrentDimensions(_v0) {
        return this._getTransformedDimensions(_v0).transform(this.getViewportTransform(), !0).scalarAdd(2 * this.padding);
      }
    }
    class _v176 extends _v175 {
      isDescendantOf(_v0) {
        let {
          parent: _v1,
          group: _v2
        } = this;
        return _v1 === _v0 || _v2 === _v0 || this.canvas === _v0 || !!_v1 && _v1.isDescendantOf(_v0) || !!_v2 && _v2 !== _v1 && _v2.isDescendantOf(_v0);
      }
      getAncestors(_v0) {
        let _v1 = [],
          _v2 = this;
        do {
          var _v3;
          (_v2 = _v2 instanceof _v176 ? null != (_v3 = _v2.parent) ? _v3 : _v0 ? void 0 : _v2.canvas : void 0) && _v1.push(_v2);
        } while (_v2);
        return _v1;
      }
      findCommonAncestors(_v0, _v1) {
        if (this === _v0) return {
          fork: [],
          otherFork: [],
          common: [this, ...this.getAncestors(_v1)]
        };
        let _v2 = this.getAncestors(_v1),
          _v3 = _v0.getAncestors(_v1);
        if (0 === _v2.length && _v3.length > 0 && this === _v3[_v3.length - 1]) return {
          fork: [],
          otherFork: [_v0, ..._v3.slice(0, _v3.length - 1)],
          common: [this]
        };
        for (let _v0 = 0, _v1; _v0 < _v2.length; _v0++) {
          if ((_v1 = _v2[_v0]) === _v0) return {
            fork: [this, ..._v2.slice(0, _v0)],
            otherFork: [],
            common: _v2.slice(_v0)
          };
          for (let _v0 = 0; _v0 < _v3.length; _v0++) {
            if (this === _v3[_v0]) return {
              fork: [],
              otherFork: [_v0, ..._v3.slice(0, _v0)],
              common: [this, ..._v2]
            };
            if (_v1 === _v3[_v0]) return {
              fork: [this, ..._v2.slice(0, _v0)],
              otherFork: [_v0, ..._v3.slice(0, _v0)],
              common: _v2.slice(_v0)
            };
          }
        }
        return {
          fork: [this, ..._v2],
          otherFork: [_v0, ..._v3],
          common: []
        };
      }
      hasCommonAncestors(_v0, _v1) {
        let _v2 = this.findCommonAncestors(_v0, _v1);
        return _v2 && !!_v2.common.length;
      }
      isInFrontOf(_v0) {
        if (this === _v0) return;
        let _v1 = this.findCommonAncestors(_v0);
        if (!_v1) return;
        if (_v1.fork.includes(_v0)) return !0;
        if (_v1.otherFork.includes(this)) return !1;
        let _v2 = _v1.common[0];
        if (!_v2) return;
        let _v3 = _v1.fork.pop(),
          _v4 = _v1.otherFork.pop(),
          _v5 = _v2._objects.indexOf(_v3),
          _v6 = _v2._objects.indexOf(_v4);
        return _v5 > -1 && _v5 > _v6;
      }
    }
    class _v177 extends _v176 {
      animate(_v0, _v1) {
        return Object.entries(_v0).reduce((_v0, _v1) => {
          let [_v2, _v3] = _v1;
          return _v0[_v2] = this._animate(_v2, _v3, _v1), _v0;
        }, {});
      }
      _animate(_v0, _v1) {
        let _v2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          _v3 = _v0.split("."),
          _v4 = this.constructor.colorProperties.includes(_v3[_v3.length - 1]),
          {
            easing: _v5,
            duration: _v6,
            abort: _v7,
            startValue: _v8,
            onChange: _v9,
            onComplete: _v10
          } = _v2,
          _v11 = {
            target: this,
            startValue: null != _v8 ? _v8 : _v3.reduce((_v0, _v1) => _v0[_v1], this),
            endValue: _v1,
            easing: _v5,
            duration: _v6,
            abort: null == _v7 ? void 0 : _v7.bind(this),
            onChange: (_v0, _v1, _v2) => {
              _v3.reduce((_v0, _v1, _v2) => (_v2 === _v3.length - 1 && (_v0[_v1] = _v0), _v0[_v1]), this), _v9 && _v9(_v0, _v1, _v2);
            },
            onComplete: (_v0, _v1, _v2) => {
              this.setCoords(), _v10 && _v10(_v0, _v1, _v2);
            }
          };
        return _v4 ? _v160(_v11) : _v159(_v11);
      }
    }
    function _v178(_v0) {
      return RegExp("^(" + _v0.join("|") + ")\\b", "i");
    }
    _v7(_v177, "colorProperties", ["fill", "stroke", "backgroundColor"]);
    let _v179 = String.raw(_v137 || (_v137 = _v9(["(?:[-+]?(?:d*.d+|d+.?)(?:[eE][-+]?d+)?)"], ["(?:[-+]?(?:\\d*\\.\\d+|\\d+\\.?)(?:[eE][-+]?\\d+)?)"]))),
      _v180 = "http://www.w3.org/2000/svg";
    String.raw(_v138 || (_v138 = _v9(["(?:s+,?s*|,s*|$)"], ["(?:\\s+,?\\s*|,\\s*|$)"])));
    let _v181 = RegExp("(normal|italic)?\\s*(normal|small-caps)?\\s*(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)?\\s*(" + _v179 + "(?:px|cm|mm|em|pt|pc|in)*)(?:\\/(normal|" + _v179 + "))?\\s+(.*)"),
      _v182 = {
        cx: _v30,
        x: _v30,
        r: "radius",
        cy: "top",
        y: "top",
        display: "visible",
        visibility: "visible",
        transform: "transformMatrix",
        "fill-opacity": "fillOpacity",
        "fill-rule": "fillRule",
        "font-family": "fontFamily",
        "font-size": "fontSize",
        "font-style": "fontStyle",
        "font-weight": "fontWeight",
        "letter-spacing": "charSpacing",
        "paint-order": "paintFirst",
        "stroke-dasharray": "strokeDashArray",
        "stroke-dashoffset": "strokeDashOffset",
        "stroke-linecap": "strokeLineCap",
        "stroke-linejoin": "strokeLineJoin",
        "stroke-miterlimit": "strokeMiterLimit",
        "stroke-opacity": "strokeOpacity",
        "stroke-width": "strokeWidth",
        "text-decoration": "textDecoration",
        "text-anchor": "textAnchor",
        opacity: "opacity",
        "clip-path": "clipPath",
        "clip-rule": "clipRule",
        "vector-effect": "strokeUniform",
        "image-rendering": "imageSmoothing"
      },
      _v183 = "font-size",
      _v184 = "clip-path",
      _v185 = _v178(["path", "circle", "polygon", "polyline", "ellipse", "rect", "line", "image", "text"]),
      _v186 = _v178(["symbol", "image", "marker", "pattern", "view", "svg"]),
      _v187 = _v178(["symbol", "g", "a", "svg", "clipPath", "defs"]),
      _v188 = RegExp("^\\s*(" + _v179 + "+)\\s*,?\\s*(" + _v179 + "+)\\s*,?\\s*(" + _v179 + "+)\\s*,?\\s*(" + _v179 + "+)\\s*$"),
      _v189 = "(-?\\d+(?:\\.\\d*)?(?:px)?(?:\\s?|$))?";
    class _v190 {
      constructor(_v0) {
        const _v1 = "string" == typeof _v0 ? _v190.parseShadow(_v0) : _v0;
        for (const _v0 in Object.assign(this, this.constructor.ownDefaults), _v1) this[_v0] = _v1[_v0];
        this.id = _v52();
      }
      static parseShadow(_v0) {
        let _v1 = _v0.trim(),
          _v2 = RegExp("(?:\\s|^)" + _v189 + _v189 + "(" + _v179 + "?(?:px)?)?(?:\\s?|$)(?:$|\\s)"),
          [, _v3 = 0, _v4 = 0, _v5 = 0] = (_v2.exec(_v1) || []).map(_v0 => parseFloat(_v0) || 0);
        return {
          color: (_v1.replace(_v2, "") || "rgb(0,0,0)").trim(),
          offsetX: _v3,
          offsetY: _v4,
          blur: _v5
        };
      }
      toString() {
        return [this.offsetX, this.offsetY, this.blur, this.color].join("px ");
      }
      toSVG(_v0) {
        let _v1 = _v163(new _v44(this.offsetX, this.offsetY), _v56(-_v0.angle)),
          _v2 = new _v84(this.color),
          _v3 = 40,
          _v4 = 40;
        return _v0.width && _v0.height && (_v3 = 100 * _v85((Math.abs(_v1.x) + this.blur) / _v0.width, _v11.NUM_FRACTION_DIGITS) + 20, _v4 = 100 * _v85((Math.abs(_v1.y) + this.blur) / _v0.height, _v11.NUM_FRACTION_DIGITS) + 20), _v0.flipX && (_v1.x *= -1), _v0.flipY && (_v1.y *= -1), '<filter id="SVGID_'.concat(this.id, '" y="-').concat(_v4, '%" height="').concat(100 + 2 * _v4, '%" x="-').concat(_v3, '%" width="').concat(100 + 2 * _v3, '%" >\n	<feGaussianBlur in="SourceAlpha" stdDeviation="').concat(_v85(this.blur ? this.blur / 2 : 0, _v11.NUM_FRACTION_DIGITS), '"></feGaussianBlur>\n	<feOffset dx="').concat(_v85(_v1.x, _v11.NUM_FRACTION_DIGITS), '" dy="').concat(_v85(_v1.y, _v11.NUM_FRACTION_DIGITS), '" result="oBlur" ></feOffset>\n	<feFlood flood-color="').concat(_v2.toRgb(), '" flood-opacity="').concat(_v2.getAlpha(), '"/>\n	<feComposite in2="oBlur" operator="in" />\n	<feMerge>\n		<feMergeNode></feMergeNode>\n		<feMergeNode in="SourceGraphic"></feMergeNode>\n	</feMerge>\n</filter>\n');
      }
      toObject() {
        let _v0 = {
            color: this.color,
            blur: this.blur,
            offsetX: this.offsetX,
            offsetY: this.offsetY,
            affectStroke: this.affectStroke,
            nonScaling: this.nonScaling,
            type: this.constructor.type
          },
          _v1 = _v190.ownDefaults;
        return this.includeDefaultValues ? _v0 : _v77(_v0, (_v0, _v1) => _v0 !== _v1[_v1]);
      }
      static async fromObject(_v0) {
        return new this(_v0);
      }
    }
    _v7(_v190, "ownDefaults", {
      color: "rgb(0,0,0)",
      blur: 0,
      offsetX: 0,
      offsetY: 0,
      affectStroke: !1,
      includeDefaultValues: !0,
      nonScaling: !1
    }), _v7(_v190, "type", "shadow"), _v36.setClass(_v190, "shadow");
    let _v191 = _v0 => JSON.parse(JSON.stringify(_v0)),
      _v192 = ["top", _v30, "scaleX", "scaleY", "flipX", "flipY", "originX", "originY", "angle", "opacity", "globalCompositeOperation", "shadow", "visible", "skewX", "skewY"],
      _v193 = ["fill", "stroke", "strokeWidth", "strokeDashArray", "width", "height", "paintFirst", "strokeUniform", "strokeLineCap", "strokeDashOffset", "strokeLineJoin", "strokeMiterLimit", "backgroundColor", "clipPath"],
      _v194 = ["type"],
      _v195 = ["extraParam"],
      _v196 = class _v0 extends _v177 {
        static getDefaults() {
          return _v5({}, _v0.ownDefaults);
        }
        get type() {
          let _v0 = this.constructor.type;
          return "FabricObject" === _v0 ? "object" : _v0.toLowerCase();
        }
        set type(_v0) {
          _v12("warn", "Setting type has no effect", _v0);
        }
        constructor() {
          let _v0 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          super(), _v7(this, "_cacheContext", null), Object.assign(this, this.constructor.getDefaults()), this.setOptions(_v0);
        }
        _createCacheCanvas() {
          this._cacheCanvas = _v53(), this._cacheContext = this._cacheCanvas.getContext("2d"), this._updateCacheCanvas(), this.dirty = !0;
        }
        _limitCacheSize(_v0) {
          let _v1 = _v0.width,
            _v2 = _v0.height,
            _v3 = _v11.maxCacheSideLimit,
            _v4 = _v11.minCacheSideLimit;
          if (_v1 <= _v3 && _v2 <= _v3 && _v1 * _v2 <= _v11.perfLimitSizeTotal) return _v1 < _v4 && (_v0.width = _v4), _v2 < _v4 && (_v0.height = _v4), _v0;
          let [_v5, _v6] = _v22.limitDimsByArea(_v1 / _v2),
            _v7 = _v154(_v4, _v5, _v3),
            _v8 = _v154(_v4, _v6, _v3);
          return _v1 > _v7 && (_v0.zoomX /= _v1 / _v7, _v0.width = _v7, _v0.capped = !0), _v2 > _v8 && (_v0.zoomY /= _v2 / _v8, _v0.height = _v8, _v0.capped = !0), _v0;
        }
        _getCacheCanvasDimensions() {
          let _v0 = this.getTotalObjectScaling(),
            _v1 = this._getTransformedDimensions({
              skewX: 0,
              skewY: 0
            }),
            _v2 = _v1.x * _v0.x / this.scaleX,
            _v3 = _v1.y * _v0.y / this.scaleY;
          return {
            width: _v2 + 2,
            height: _v3 + 2,
            zoomX: _v0.x,
            zoomY: _v0.y,
            x: _v2,
            y: _v3
          };
        }
        _updateCacheCanvas() {
          let _v0 = this._cacheCanvas,
            _v1 = this._cacheContext,
            _v2 = this._limitCacheSize(this._getCacheCanvasDimensions()),
            _v3 = _v11.minCacheSideLimit,
            _v4 = _v2.width,
            _v5 = _v2.height,
            _v6 = _v2.zoomX,
            _v7 = _v2.zoomY,
            _v8 = _v4 !== this.cacheWidth || _v5 !== this.cacheHeight,
            _v9 = this.zoomX !== _v6 || this.zoomY !== _v7;
          if (!_v0 || !_v1) return !1;
          let _v10,
            _v11,
            _v12 = _v8 || _v9,
            _v13 = 0,
            _v14 = 0,
            _v15 = !1;
          if (_v8) {
            let _v0 = this._cacheCanvas.width,
              _v1 = this._cacheCanvas.height,
              _v2 = _v4 > _v0 || _v5 > _v1;
            _v15 = _v2 || (_v4 < .9 * _v0 || _v5 < .9 * _v1) && _v0 > _v3 && _v1 > _v3, _v2 && !_v2.capped && (_v4 > _v3 || _v5 > _v3) && (_v13 = .1 * _v4, _v14 = .1 * _v5);
          }
          return _v94(this) && this.path && (_v12 = !0, _v15 = !0, _v13 += this.getHeightOfLine(0) * this.zoomX, _v14 += this.getHeightOfLine(0) * this.zoomY), !!_v12 && (_v15 ? (_v0.width = Math.ceil(_v4 + _v13), _v0.height = Math.ceil(_v5 + _v14)) : (_v1.setTransform(1, 0, 0, 1, 0, 0), _v1.clearRect(0, 0, _v0.width, _v0.height)), _v10 = _v2.x / 2, _v11 = _v2.y / 2, this.cacheTranslationX = Math.round(_v0.width / 2 - _v10) + _v10, this.cacheTranslationY = Math.round(_v0.height / 2 - _v11) + _v11, this.cacheWidth = _v4, this.cacheHeight = _v5, _v1.translate(this.cacheTranslationX, this.cacheTranslationY), _v1.scale(_v6, _v7), this.zoomX = _v6, this.zoomY = _v7, !0);
        }
        setOptions() {
          let _v0 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this._setOptions(_v0);
        }
        transform(_v0) {
          let _v1 = this.group && !this.group._transformDone || this.group && this.canvas && _v0 === this.canvas.contextTop,
            _v2 = this.calcTransformMatrix(!_v1);
          _v0.transform(_v2[0], _v2[1], _v2[2], _v2[3], _v2[4], _v2[5]);
        }
        toObject() {
          let _v0 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            _v1 = _v11.NUM_FRACTION_DIGITS,
            _v2 = this.clipPath && !this.clipPath.excludeFromExport ? _v5(_v5({}, this.clipPath.toObject(_v0)), {}, {
              inverted: this.clipPath.inverted,
              absolutePositioned: this.clipPath.absolutePositioned
            }) : null,
            _v3 = _v5(_v5({}, _v76(this, _v0)), {}, {
              type: this.constructor.type,
              version: _v23,
              originX: this.originX,
              originY: this.originY,
              left: _v85(this.left, _v1),
              top: _v85(this.top, _v1),
              width: _v85(this.width, _v1),
              height: _v85(this.height, _v1),
              fill: _v92(this.fill) ? this.fill.toObject() : this.fill,
              stroke: _v92(this.stroke) ? this.stroke.toObject() : this.stroke,
              strokeWidth: _v85(this.strokeWidth, _v1),
              strokeDashArray: this.strokeDashArray ? this.strokeDashArray.concat() : this.strokeDashArray,
              strokeLineCap: this.strokeLineCap,
              strokeDashOffset: this.strokeDashOffset,
              strokeLineJoin: this.strokeLineJoin,
              strokeUniform: this.strokeUniform,
              strokeMiterLimit: _v85(this.strokeMiterLimit, _v1),
              scaleX: _v85(this.scaleX, _v1),
              scaleY: _v85(this.scaleY, _v1),
              angle: _v85(this.angle, _v1),
              flipX: this.flipX,
              flipY: this.flipY,
              opacity: _v85(this.opacity, _v1),
              shadow: this.shadow && this.shadow.toObject ? this.shadow.toObject() : this.shadow,
              visible: this.visible,
              backgroundColor: this.backgroundColor,
              fillRule: this.fillRule,
              paintFirst: this.paintFirst,
              globalCompositeOperation: this.globalCompositeOperation,
              skewX: _v85(this.skewX, _v1),
              skewY: _v85(this.skewY, _v1)
            }, _v2 ? {
              clipPath: _v2
            } : null);
          return this.includeDefaultValues ? _v3 : this._removeDefaultValues(_v3);
        }
        toDatalessObject(_v0) {
          return this.toObject(_v0);
        }
        _removeDefaultValues(_v0) {
          let _v1 = this.constructor.getDefaults(),
            _v2 = Object.keys(_v1).length > 0 ? _v1 : Object.getPrototypeOf(this);
          return _v77(_v0, (_v0, _v1) => {
            if (_v1 === _v30 || "top" === _v1 || "type" === _v1) return !0;
            let _v2 = _v2[_v1];
            return _v0 !== _v2 && !(Array.isArray(_v0) && Array.isArray(_v2) && 0 === _v0.length && 0 === _v2.length);
          });
        }
        toString() {
          return "#<".concat(this.constructor.type, ">");
        }
        getObjectScaling() {
          if (!this.group) return new _v44(Math.abs(this.scaleX), Math.abs(this.scaleY));
          let _v0 = _v64(this.calcTransformMatrix());
          return new _v44(Math.abs(_v0.scaleX), Math.abs(_v0.scaleY));
        }
        getTotalObjectScaling() {
          let _v0 = this.getObjectScaling();
          if (this.canvas) {
            let _v0 = this.canvas.getZoom(),
              _v1 = this.getCanvasRetinaScaling();
            return _v0.scalarMultiply(_v0 * _v1);
          }
          return _v0;
        }
        getObjectOpacity() {
          let _v0 = this.opacity;
          return this.group && (_v0 *= this.group.getObjectOpacity()), _v0;
        }
        _constrainScale(_v0) {
          if (Math.abs(_v0) < this.minScaleLimit) if (_v0 < 0) return -this.minScaleLimit;else return this.minScaleLimit;
          return 0 === _v0 ? 1e-4 : _v0;
        }
        _set(_v0, _v1) {
          ("scaleX" === _v0 || "scaleY" === _v0) && (_v1 = this._constrainScale(_v1)), "scaleX" === _v0 && _v1 < 0 ? (this.flipX = !this.flipX, _v1 *= -1) : "scaleY" === _v0 && _v1 < 0 ? (this.flipY = !this.flipY, _v1 *= -1) : "shadow" !== _v0 || !_v1 || _v1 instanceof _v190 || (_v1 = new _v190(_v1));
          let _v2 = this[_v0] !== _v1;
          return this[_v0] = _v1, _v2 && this.constructor.cacheProperties.includes(_v0) && (this.dirty = !0), this.parent && (this.dirty || _v2 && this.constructor.stateProperties.includes(_v0)) && this.parent._set("dirty", !0), this;
        }
        isNotVisible() {
          return 0 === this.opacity || !this.width && !this.height && 0 === this.strokeWidth || !this.visible;
        }
        render(_v0) {
          this.isNotVisible() || (!this.canvas || !this.canvas.skipOffscreen || this.group || this.isOnScreen()) && (_v0.save(), this._setupCompositeOperation(_v0), this.drawSelectionBackground(_v0), this.transform(_v0), this._setOpacity(_v0), this._setShadow(_v0), this.shouldCache() ? (this.renderCache(), this.drawCacheOnCanvas(_v0)) : (this._removeCacheCanvas(), this.drawObject(_v0), this.dirty = !1), _v0.restore());
        }
        drawSelectionBackground(_v0) {}
        renderCache(_v0) {
          _v0 = _v0 || {}, this._cacheCanvas && this._cacheContext || this._createCacheCanvas(), this.isCacheDirty() && this._cacheContext && (this.drawObject(this._cacheContext, _v0.forClipping), this.dirty = !1);
        }
        _removeCacheCanvas() {
          this._cacheCanvas = void 0, this._cacheContext = null, this.cacheWidth = 0, this.cacheHeight = 0;
        }
        hasStroke() {
          return this.stroke && "transparent" !== this.stroke && 0 !== this.strokeWidth;
        }
        hasFill() {
          return this.fill && "transparent" !== this.fill;
        }
        needsItsOwnCache() {
          return !!("stroke" === this.paintFirst && this.hasFill() && this.hasStroke()) && !!this.shadow || !!this.clipPath;
        }
        shouldCache() {
          return this.ownCaching = this.needsItsOwnCache() || this.objectCaching && (!this.parent || !this.parent.isOnACache()), this.ownCaching;
        }
        willDrawShadow() {
          return !!this.shadow && (0 !== this.shadow.offsetX || 0 !== this.shadow.offsetY);
        }
        drawClipPathOnCache(_v0, _v1) {
          if (_v0.save(), _v1.inverted ? _v0.globalCompositeOperation = "destination-out" : _v0.globalCompositeOperation = "destination-in", _v1.absolutePositioned) {
            let _v0 = _v60(this.calcTransformMatrix());
            _v0.transform(_v0[0], _v0[1], _v0[2], _v0[3], _v0[4], _v0[5]);
          }
          _v1.transform(_v0), _v0.scale(1 / _v1.zoomX, 1 / _v1.zoomY), _v0.drawImage(_v1._cacheCanvas, -_v1.cacheTranslationX, -_v1.cacheTranslationY), _v0.restore();
        }
        drawObject(_v0, _v1) {
          let _v2 = this.fill,
            _v3 = this.stroke;
          _v1 ? (this.fill = "black", this.stroke = "", this._setClippingProperties(_v0)) : this._renderBackground(_v0), this._render(_v0), this._drawClipPath(_v0, this.clipPath), this.fill = _v2, this.stroke = _v3;
        }
        _drawClipPath(_v0, _v1) {
          _v1 && (_v1._set("canvas", this.canvas), _v1.shouldCache(), _v1._transformDone = !0, _v1.renderCache({
            forClipping: !0
          }), this.drawClipPathOnCache(_v0, _v1));
        }
        drawCacheOnCanvas(_v0) {
          _v0.scale(1 / this.zoomX, 1 / this.zoomY), _v0.drawImage(this._cacheCanvas, -this.cacheTranslationX, -this.cacheTranslationY);
        }
        isCacheDirty() {
          let _v0 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (this.isNotVisible()) return !1;
          if (this._cacheCanvas && this._cacheContext && !_v0 && this._updateCacheCanvas()) return !0;
          if (this.dirty || this.clipPath && this.clipPath.absolutePositioned) {
            if (this._cacheCanvas && this._cacheContext && !_v0) {
              let _v0 = this.cacheWidth / this.zoomX,
                _v1 = this.cacheHeight / this.zoomY;
              this._cacheContext.clearRect(-_v0 / 2, -_v1 / 2, _v0, _v1);
            }
            return !0;
          }
          return !1;
        }
        _renderBackground(_v0) {
          if (!this.backgroundColor) return;
          let _v1 = this._getNonTransformedDimensions();
          _v0.fillStyle = this.backgroundColor, _v0.fillRect(-_v1.x / 2, -_v1.y / 2, _v1.x, _v1.y), this._removeShadow(_v0);
        }
        _setOpacity(_v0) {
          this.group && !this.group._transformDone ? _v0.globalAlpha = this.getObjectOpacity() : _v0.globalAlpha *= this.opacity;
        }
        _setStrokeStyles(_v0, _v1) {
          let _v2 = _v1.stroke;
          _v2 && (_v0.lineWidth = _v1.strokeWidth, _v0.lineCap = _v1.strokeLineCap, _v0.lineDashOffset = _v1.strokeDashOffset, _v0.lineJoin = _v1.strokeLineJoin, _v0.miterLimit = _v1.strokeMiterLimit, _v91(_v2) ? "percentage" === _v2.gradientUnits || _v2.gradientTransform || _v2.patternTransform ? this._applyPatternForTransformedGradient(_v0, _v2) : (_v0.strokeStyle = _v2.toLive(_v0), this._applyPatternGradientTransform(_v0, _v2)) : _v0.strokeStyle = _v1.stroke);
        }
        _setFillStyles(_v0, _v1) {
          let {
            fill: _v2
          } = _v1;
          _v2 && (_v91(_v2) ? (_v0.fillStyle = _v2.toLive(_v0), this._applyPatternGradientTransform(_v0, _v2)) : _v0.fillStyle = _v2);
        }
        _setClippingProperties(_v0) {
          _v0.globalAlpha = 1, _v0.strokeStyle = "transparent", _v0.fillStyle = "#000000";
        }
        _setLineDash(_v0, _v1) {
          _v1 && 0 !== _v1.length && (1 & _v1.length && _v1.push(..._v1), _v0.setLineDash(_v1));
        }
        _setShadow(_v0) {
          if (!this.shadow) return;
          let _v1 = this.shadow,
            _v2 = this.canvas,
            _v3 = this.getCanvasRetinaScaling(),
            [_v4,,, _v5] = (null == _v2 ? void 0 : _v2.viewportTransform) || _v28,
            _v6 = _v4 * _v3,
            _v7 = _v5 * _v3,
            _v8 = _v1.nonScaling ? new _v44(1, 1) : this.getObjectScaling();
          _v0.shadowColor = _v1.color, _v0.shadowBlur = _v1.blur * _v11.browserShadowBlurConstant * (_v6 + _v7) * (_v8.x + _v8.y) / 4, _v0.shadowOffsetX = _v1.offsetX * _v6 * _v8.x, _v0.shadowOffsetY = _v1.offsetY * _v7 * _v8.y;
        }
        _removeShadow(_v0) {
          this.shadow && (_v0.shadowColor = "", _v0.shadowBlur = _v0.shadowOffsetX = _v0.shadowOffsetY = 0);
        }
        _applyPatternGradientTransform(_v0, _v1) {
          if (!_v91(_v1)) return {
            offsetX: 0,
            offsetY: 0
          };
          let _v2 = _v1.gradientTransform || _v1.patternTransform,
            _v3 = -this.width / 2 + _v1.offsetX || 0,
            _v4 = -this.height / 2 + _v1.offsetY || 0;
          return "percentage" === _v1.gradientUnits ? _v0.transform(this.width, 0, 0, this.height, _v3, _v4) : _v0.transform(1, 0, 0, 1, _v3, _v4), _v2 && _v0.transform(_v2[0], _v2[1], _v2[2], _v2[3], _v2[4], _v2[5]), {
            offsetX: _v3,
            offsetY: _v4
          };
        }
        _renderPaintInOrder(_v0) {
          "stroke" === this.paintFirst ? (this._renderStroke(_v0), this._renderFill(_v0)) : (this._renderFill(_v0), this._renderStroke(_v0));
        }
        _render(_v0) {}
        _renderFill(_v0) {
          this.fill && (_v0.save(), this._setFillStyles(_v0, this), "evenodd" === this.fillRule ? _v0.fill("evenodd") : _v0.fill(), _v0.restore());
        }
        _renderStroke(_v0) {
          if (this.stroke && 0 !== this.strokeWidth) {
            if (this.shadow && !this.shadow.affectStroke && this._removeShadow(_v0), _v0.save(), this.strokeUniform) {
              let _v0 = this.getObjectScaling();
              _v0.scale(1 / _v0.x, 1 / _v0.y);
            }
            this._setLineDash(_v0, this.strokeDashArray), this._setStrokeStyles(_v0, this), _v0.stroke(), _v0.restore();
          }
        }
        _applyPatternForTransformedGradient(_v0, _v1) {
          var _v2;
          let _v3 = this._limitCacheSize(this._getCacheCanvasDimensions()),
            _v4 = _v53(),
            _v5 = this.getCanvasRetinaScaling(),
            _v6 = _v3.x / this.scaleX / _v5,
            _v7 = _v3.y / this.scaleY / _v5;
          _v4.width = Math.ceil(_v6), _v4.height = Math.ceil(_v7);
          let _v8 = _v4.getContext("2d");
          _v8 && (_v8.beginPath(), _v8.moveTo(0, 0), _v8.lineTo(_v6, 0), _v8.lineTo(_v6, _v7), _v8.lineTo(0, _v7), _v8.closePath(), _v8.translate(_v6 / 2, _v7 / 2), _v8.scale(_v3.zoomX / this.scaleX / _v5, _v3.zoomY / this.scaleY / _v5), this._applyPatternGradientTransform(_v8, _v1), _v8.fillStyle = _v1.toLive(_v0), _v8.fill(), _v0.translate(-this.width / 2 - this.strokeWidth / 2, -this.height / 2 - this.strokeWidth / 2), _v0.scale(_v5 * this.scaleX / _v3.zoomX, _v5 * this.scaleY / _v3.zoomY), _v0.strokeStyle = null != (_v2 = _v8.createPattern(_v4, "no-repeat")) ? _v2 : "");
        }
        _findCenterFromElement() {
          return new _v44(this.left + this.width / 2, this.top + this.height / 2);
        }
        clone(_v0) {
          let _v1 = this.toObject(_v0);
          return this.constructor.fromObject(_v1);
        }
        cloneAsImage(_v0) {
          let _v1 = this.toCanvasElement(_v0);
          return new (_v36.getClass("image"))(_v1);
        }
        toCanvasElement() {
          let _v0 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            _v1 = _v115(this),
            _v2 = this.group,
            _v3 = this.shadow,
            _v4 = Math.abs,
            _v5 = _v0.enableRetinaScaling ? _v21() : 1,
            _v6 = (_v0.multiplier || 1) * _v5,
            _v7 = _v0.canvasProvider || (_v0 => new _v105(_v0, {
              enableRetinaScaling: !1,
              renderOnAddRemove: !1,
              skipOffscreen: !1
            }));
          delete this.group, _v0.withoutTransform && _v114(this), _v0.withoutShadow && (this.shadow = null), _v0.viewportTransform && _v120(this, this.getViewportTransform()), this.setCoords();
          let _v8 = _v53(),
            _v9 = this.getBoundingRect(),
            _v10 = this.shadow,
            _v11 = new _v44();
          if (_v10) {
            let _v0 = _v10.blur,
              _v1 = _v10.nonScaling ? new _v44(1, 1) : this.getObjectScaling();
            _v11.x = 2 * Math.round(_v4(_v10.offsetX) + _v0) * _v4(_v1.x), _v11.y = 2 * Math.round(_v4(_v10.offsetY) + _v0) * _v4(_v1.y);
          }
          let _v12 = _v9.width + _v11.x,
            _v13 = _v9.height + _v11.y;
          _v8.width = Math.ceil(_v12), _v8.height = Math.ceil(_v13);
          let _v14 = _v7(_v8);
          "jpeg" === _v0.format && (_v14.backgroundColor = "#fff"), this.setPositionByOrigin(new _v44(_v14.width / 2, _v14.height / 2), _v29, _v29);
          let _v15 = this.canvas;
          _v14._objects = [this], this.set("canvas", _v14), this.setCoords();
          let _v16 = _v14.toCanvasElement(_v6 || 1, _v0);
          return this.set("canvas", _v15), this.shadow = _v3, _v2 && (this.group = _v2), this.set(_v1), this.setCoords(), _v14._objects = [], _v14.destroy(), _v16;
        }
        toDataURL() {
          let _v0 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return _v55(this.toCanvasElement(_v0), _v0.format || "png", _v0.quality || 1);
        }
        isType() {
          for (var _v0 = arguments.length, _v1 = Array(_v0), _v2 = 0; _v2 < _v0; _v2++) _v1[_v2] = arguments[_v2];
          return _v1.includes(this.constructor.type) || _v1.includes(this.type);
        }
        complexity() {
          return 1;
        }
        toJSON() {
          return this.toObject();
        }
        rotate(_v0) {
          let {
            centeredRotation: _v1,
            originX: _v2,
            originY: _v3
          } = this;
          if (_v1) {
            let {
              x: _v0,
              y: _v1
            } = this.getRelativeCenterPoint();
            this.originX = _v29, this.originY = _v29, this.left = _v0, this.top = _v1;
          }
          if (this.set("angle", _v0), _v1) {
            let {
              x: _v0,
              y: _v1
            } = this.translateToOriginPoint(this.getRelativeCenterPoint(), _v2, _v3);
            this.left = _v0, this.top = _v1, this.originX = _v2, this.originY = _v3;
          }
        }
        setOnGroup() {}
        _setupCompositeOperation(_v0) {
          this.globalCompositeOperation && (_v0.globalCompositeOperation = this.globalCompositeOperation);
        }
        dispose() {
          _v37.cancelByTarget(this), this.off(), this._set("canvas", void 0), this._cacheCanvas && _v18().dispose(this._cacheCanvas), this._cacheCanvas = void 0, this._cacheContext = null;
        }
        static _fromObject(_v0) {
          let _v1 = _v8(_v0, _v194),
            _v2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            {
              extraParam: _v3
            } = _v2,
            _v4 = _v8(_v2, _v195);
          return _v75(_v191(_v1), _v4).then(_v0 => {
            let _v1 = _v5(_v5({}, _v4), _v0);
            if (!_v3) return new this(_v1);
            {
              let {
                [_v3]: _v0
              } = _v1;
              return new this(_v0, _v8(_v1, [_v3].map(_v6)));
            }
          });
        }
        static fromObject(_v0, _v1) {
          return this._fromObject(_v0, _v1);
        }
      };
    _v7(_v196, "stateProperties", _v192), _v7(_v196, "cacheProperties", _v193), _v7(_v196, "ownDefaults", {
      top: 0,
      left: 0,
      width: 0,
      height: 0,
      angle: 0,
      flipX: !1,
      flipY: !1,
      scaleX: 1,
      scaleY: 1,
      minScaleLimit: 0,
      skewX: 0,
      skewY: 0,
      originX: _v30,
      originY: "top",
      strokeWidth: 1,
      strokeUniform: !1,
      padding: 0,
      opacity: 1,
      paintFirst: "fill",
      fill: "rgb(0,0,0)",
      fillRule: "nonzero",
      stroke: null,
      strokeDashArray: null,
      strokeDashOffset: 0,
      strokeLineCap: "butt",
      strokeLineJoin: "miter",
      strokeMiterLimit: 4,
      globalCompositeOperation: "source-over",
      backgroundColor: "",
      shadow: null,
      visible: !0,
      includeDefaultValues: !0,
      excludeFromExport: !1,
      objectCaching: !0,
      clipPath: void 0,
      inverted: !1,
      absolutePositioned: !1,
      centeredRotation: !0,
      centeredScaling: !1,
      dirty: !0
    }), _v7(_v196, "type", "FabricObject"), _v36.setClass(_v196), _v36.setClass(_v196, "object");
    let _v197 = (_v0, _v1) => (_v0, _v1, _v2, _v3) => {
      let _v4 = _v1(_v0, _v1, _v2, _v3);
      return _v4 && _v121(_v0, _v127(_v0, _v1, _v2, _v3)), _v4;
    };
    function _v198(_v0) {
      return (_v0, _v1, _v2, _v3) => {
        let {
            target: _v4,
            originX: _v5,
            originY: _v6
          } = _v1,
          _v7 = _v4.getRelativeCenterPoint(),
          _v8 = _v4.translateToOriginPoint(_v7, _v5, _v6),
          _v9 = _v0(_v0, _v1, _v2, _v3);
        return _v4.setPositionByOrigin(_v8, _v1.originX, _v1.originY), _v9;
      };
    }
    let _v199 = _v197("resizing", _v198((_v0, _v1, _v2, _v3) => {
      let _v4 = _v129(_v1, _v1.originX, _v1.originY, _v2, _v3);
      if (_v1.originX === _v29 || _v1.originX === _v32 && _v4.x < 0 || _v1.originX === _v30 && _v4.x > 0) {
        let {
            target: _v0
          } = _v1,
          _v1 = _v0.strokeWidth / (_v0.strokeUniform ? _v0.scaleX : 1),
          _v2 = _v125(_v1) ? 2 : 1,
          _v3 = _v0.width,
          _v4 = Math.ceil(Math.abs(_v4.x * _v2 / _v0.scaleX) - _v1);
        return _v0.set("width", Math.max(_v4, 0)), _v3 !== _v0.width;
      }
      return !1;
    }));
    function _v200(_v0, _v1, _v2, _v3, _v4) {
      _v3 = _v3 || {};
      let _v5 = this.sizeX || _v3.cornerSize || _v4.cornerSize,
        _v6 = this.sizeY || _v3.cornerSize || _v4.cornerSize,
        _v7 = void 0 !== _v3.transparentCorners ? _v3.transparentCorners : _v4.transparentCorners,
        _v8 = !_v7 && (_v3.cornerStrokeColor || _v4.cornerStrokeColor),
        _v9 = _v1,
        _v10 = _v2,
        _v11;
      _v0.save(), _v0.fillStyle = _v3.cornerColor || _v4.cornerColor || "", _v0.strokeStyle = _v3.cornerStrokeColor || _v4.cornerStrokeColor || "", _v5 > _v6 ? (_v11 = _v5, _v0.scale(1, _v6 / _v5), _v10 = _v2 * _v5 / _v6) : _v6 > _v5 ? (_v11 = _v6, _v0.scale(_v5 / _v6, 1), _v9 = _v1 * _v6 / _v5) : _v11 = _v5, _v0.lineWidth = 1, _v0.beginPath(), _v0.arc(_v9, _v10, _v11 / 2, 0, _v26, !1), _v0[_v7 ? "stroke" : "fill"](), _v8 && _v0.stroke(), _v0.restore();
    }
    function _v201(_v0, _v1, _v2, _v3, _v4) {
      _v3 = _v3 || {};
      let _v5 = this.sizeX || _v3.cornerSize || _v4.cornerSize,
        _v6 = this.sizeY || _v3.cornerSize || _v4.cornerSize,
        _v7 = void 0 !== _v3.transparentCorners ? _v3.transparentCorners : _v4.transparentCorners,
        _v8 = !_v7 && (_v3.cornerStrokeColor || _v4.cornerStrokeColor),
        _v9 = _v5 / 2,
        _v10 = _v6 / 2;
      _v0.save(), _v0.fillStyle = _v3.cornerColor || _v4.cornerColor || "", _v0.strokeStyle = _v3.cornerStrokeColor || _v4.cornerStrokeColor || "", _v0.lineWidth = 1, _v0.translate(_v1, _v2);
      let _v11 = _v4.getTotalAngle();
      _v0.rotate(_v56(_v11)), _v0["".concat(_v7 ? "stroke" : "fill", "Rect")](-_v9, -_v10, _v5, _v6), _v8 && _v0.strokeRect(-_v9, -_v10, _v5, _v6), _v0.restore();
    }
    class _v202 {
      constructor(_v0) {
        _v7(this, "visible", !0), _v7(this, "actionName", "scale"), _v7(this, "angle", 0), _v7(this, "x", 0), _v7(this, "y", 0), _v7(this, "offsetX", 0), _v7(this, "offsetY", 0), _v7(this, "sizeX", 0), _v7(this, "sizeY", 0), _v7(this, "touchSizeX", 0), _v7(this, "touchSizeY", 0), _v7(this, "cursorStyle", "crosshair"), _v7(this, "withConnection", !1), Object.assign(this, _v0);
      }
      shouldActivate(_v0, _v1, _v2, _v3) {
        var _v4;
        let {
          tl: _v5,
          tr: _v6,
          br: _v7,
          bl: _v8
        } = _v3;
        return (null == (_v4 = _v1.canvas) ? void 0 : _v4.getActiveObject()) === _v1 && _v1.isControlVisible(_v0) && _v173.isPointInPolygon(_v2, [_v5, _v6, _v7, _v8]);
      }
      getActionHandler(_v0, _v1, _v2) {
        return this.actionHandler;
      }
      getMouseDownHandler(_v0, _v1, _v2) {
        return this.mouseDownHandler;
      }
      getMouseUpHandler(_v0, _v1, _v2) {
        return this.mouseUpHandler;
      }
      cursorStyleHandler(_v0, _v1, _v2) {
        return _v1.cursorStyle;
      }
      getActionName(_v0, _v1, _v2) {
        return _v1.actionName;
      }
      getVisibility(_v0, _v1) {
        var _v2, _v3;
        return null != (_v2 = null == (_v3 = _v0._controlsVisibility) ? void 0 : _v3[_v1]) ? _v2 : this.visible;
      }
      setVisibility(_v0, _v1, _v2) {
        this.visible = _v0;
      }
      positionHandler(_v0, _v1, _v2, _v3) {
        return new _v44(this.x * _v0.x + this.offsetX, this.y * _v0.y + this.offsetY).transform(_v1);
      }
      calcCornerCoords(_v0, _v1, _v2, _v3, _v4, _v5) {
        let _v6 = _v62([_v65(_v2, _v3), _v66({
          angle: _v0
        }), _v67((_v4 ? this.touchSizeX : this.sizeX) || _v1, (_v4 ? this.touchSizeY : this.sizeY) || _v1)]);
        return {
          tl: new _v44(-.5, -.5).transform(_v6),
          tr: new _v44(.5, -.5).transform(_v6),
          br: new _v44(.5, .5).transform(_v6),
          bl: new _v44(-.5, .5).transform(_v6)
        };
      }
      render(_v0, _v1, _v2, _v3, _v4) {
        "circle" === ((_v3 = _v3 || {}).cornerStyle || _v4.cornerStyle) ? _v200.call(this, _v0, _v1, _v2, _v3, _v4) : _v201.call(this, _v0, _v1, _v2, _v3, _v4);
      }
    }
    let _v203 = (_v0, _v1, _v2) => _v2.lockRotation ? _v124 : _v1.cursorStyle,
      _v204 = _v197("rotating", _v198((_v0, _v1, _v2, _v3) => {
        let {
            target: _v4,
            ex: _v5,
            ey: _v6,
            theta: _v7,
            originX: _v8,
            originY: _v9
          } = _v1,
          _v10 = _v4.translateToOriginPoint(_v4.getRelativeCenterPoint(), _v8, _v9);
        if (_v126(_v4, "lockRotation")) return !1;
        let _v11 = Math.atan2(_v6 - _v10.y, _v5 - _v10.x),
          _v12 = _v57(Math.atan2(_v3 - _v10.y, _v2 - _v10.x) - _v11 + _v7);
        if (_v4.snapAngle && _v4.snapAngle > 0) {
          let _v0 = _v4.snapAngle,
            _v1 = _v4.snapThreshold || _v0,
            _v2 = Math.ceil(_v12 / _v0) * _v0,
            _v3 = Math.floor(_v12 / _v0) * _v0;
          Math.abs(_v12 - _v3) < _v1 ? _v12 = _v3 : Math.abs(_v12 - _v2) < _v1 && (_v12 = _v2);
        }
        _v12 < 0 && (_v12 = 360 + _v12), _v12 %= 360;
        let _v13 = _v4.angle !== _v12;
        return _v4.angle = _v12, _v13;
      }));
    function _v205(_v0, _v1) {
      let _v2 = _v1.canvas,
        _v3 = _v0[_v2.uniScaleKey];
      return _v2.uniformScaling && !_v3 || !_v2.uniformScaling && _v3;
    }
    function _v206(_v0, _v1, _v2) {
      let _v3 = _v126(_v0, "lockScalingX"),
        _v4 = _v126(_v0, "lockScalingY");
      if (_v3 && _v4 || !_v1 && (_v3 || _v4) && _v2 || _v3 && "x" === _v1 || _v4 && "y" === _v1) return !0;
      let {
        width: _v5,
        height: _v6,
        strokeWidth: _v7
      } = _v0;
      return 0 === _v5 && 0 === _v7 && "y" !== _v1 || 0 === _v6 && 0 === _v7 && "x" !== _v1;
    }
    let _v207 = ["e", "se", "s", "sw", "w", "nw", "n", "ne", "e"],
      _v208 = (_v0, _v1, _v2) => {
        let _v3 = _v205(_v0, _v2);
        if (_v206(_v2, 0 !== _v1.x && 0 === _v1.y ? "x" : 0 === _v1.x && 0 !== _v1.y ? "y" : "", _v3)) return _v124;
        let _v4 = _v128(_v2, _v1);
        return "".concat(_v207[_v4], "-resize");
      };
    function _v209(_v0, _v1, _v2, _v3) {
      let _v4,
        _v5,
        _v6,
        _v7,
        _v8,
        _v9,
        _v10 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        _v11 = _v1.target,
        _v12 = _v10.by,
        _v13 = _v205(_v0, _v11);
      if (_v206(_v11, _v12, _v13)) return !1;
      if (_v1.gestureScale) _v5 = _v1.scaleX * _v1.gestureScale, _v6 = _v1.scaleY * _v1.gestureScale;else {
        if (_v4 = _v129(_v1, _v1.originX, _v1.originY, _v2, _v3), _v8 = "y" !== _v12 ? Math.sign(_v4.x || _v1.signX || 1) : 1, _v9 = "x" !== _v12 ? Math.sign(_v4.y || _v1.signY || 1) : 1, _v1.signX || (_v1.signX = _v8), _v1.signY || (_v1.signY = _v9), _v126(_v11, "lockScalingFlip") && (_v1.signX !== _v8 || _v1.signY !== _v9)) return !1;
        if (_v7 = _v11._getTransformedDimensions(), _v13 && !_v12) {
          let _v0 = Math.abs(_v4.x) + Math.abs(_v4.y),
            {
              original: _v1
            } = _v1,
            _v2 = _v0 / (Math.abs(_v7.x * _v1.scaleX / _v11.scaleX) + Math.abs(_v7.y * _v1.scaleY / _v11.scaleY));
          _v5 = _v1.scaleX * _v2, _v6 = _v1.scaleY * _v2;
        } else _v5 = Math.abs(_v4.x * _v11.scaleX / _v7.x), _v6 = Math.abs(_v4.y * _v11.scaleY / _v7.y);
        _v125(_v1) && (_v5 *= 2, _v6 *= 2), _v1.signX !== _v8 && "y" !== _v12 && (_v1.originX = -_v123(_v1.originX) + .5, _v5 *= -1, _v1.signX = _v8), _v1.signY !== _v9 && "x" !== _v12 && (_v1.originY = -_v123(_v1.originY) + .5, _v6 *= -1, _v1.signY = _v9);
      }
      let _v14 = _v11.scaleX,
        _v15 = _v11.scaleY;
      return _v12 ? ("x" === _v12 && _v11.set("scaleX", _v5), "y" === _v12 && _v11.set("scaleY", _v6)) : (_v126(_v11, "lockScalingX") || _v11.set("scaleX", _v5), _v126(_v11, "lockScalingY") || _v11.set("scaleY", _v6)), _v14 !== _v11.scaleX || _v15 !== _v11.scaleY;
    }
    let _v210 = _v197("scaling", _v198((_v0, _v1, _v2, _v3) => _v209(_v0, _v1, _v2, _v3))),
      _v211 = _v197("scaling", _v198((_v0, _v1, _v2, _v3) => _v209(_v0, _v1, _v2, _v3, {
        by: "x"
      }))),
      _v212 = _v197("scaling", _v198((_v0, _v1, _v2, _v3) => _v209(_v0, _v1, _v2, _v3, {
        by: "y"
      }))),
      _v213 = ["target", "ex", "ey", "skewingSide"],
      _v214 = {
        x: {
          counterAxis: "y",
          scale: "scaleX",
          skew: "skewX",
          lockSkewing: "lockSkewingX",
          origin: "originX",
          flip: "flipX"
        },
        y: {
          counterAxis: "x",
          scale: "scaleY",
          skew: "skewY",
          lockSkewing: "lockSkewingY",
          origin: "originY",
          flip: "flipY"
        }
      },
      _v215 = ["ns", "nesw", "ew", "nwse"],
      _v216 = (_v0, _v1, _v2) => {
        if (0 !== _v1.x && _v126(_v2, "lockSkewingY") || 0 !== _v1.y && _v126(_v2, "lockSkewingX")) return _v124;
        let _v3 = _v128(_v2, _v1) % 4;
        return "".concat(_v215[_v3], "-resize");
      };
    function _v217(_v0, _v1, _v2, _v3, _v4) {
      let {
          target: _v5
        } = _v2,
        {
          counterAxis: _v6,
          origin: _v7,
          lockSkewing: _v8,
          skew: _v9,
          flip: _v10
        } = _v214[_v0];
      if (_v126(_v5, _v8)) return !1;
      let {
          origin: _v11,
          flip: _v12
        } = _v214[_v6],
        _v13 = -Math.sign(_v123(_v2[_v11]) * (_v5[_v12] ? -1 : 1)) * (_v5[_v10] ? -1 : 1),
        _v14 = (0 === _v5[_v9] && _v129(_v2, _v29, _v29, _v3, _v4)[_v0] > 0 || _v5[_v9] > 0 ? 1 : -1) * _v13;
      return _v197("skewing", _v198((_v0, _v1, _v2, _v3) => function (_v0, _v1, _v2) {
        let {
            target: _v3,
            ex: _v4,
            ey: _v5,
            skewingSide: _v6
          } = _v1,
          _v7 = _v8(_v1, _v213),
          {
            skew: _v8
          } = _v214[_v0],
          _v9 = _v2.subtract(new _v44(_v4, _v5)).divide(new _v44(_v3.scaleX, _v3.scaleY))[_v0],
          _v10 = _v3[_v8],
          _v11 = Math.tan(_v56(_v7[_v8])),
          _v12 = _v57(Math.atan(2 * _v9 * _v6 / Math.max("y" === _v0 ? _v3._getTransformedDimensions({
            scaleX: 1,
            scaleY: 1,
            skewX: 0
          }).x : _v3._getTransformedDimensions({
            scaleX: 1,
            scaleY: 1
          }).y, 1) + _v11));
        _v3.set(_v8, _v12);
        let _v13 = _v10 !== _v3[_v8];
        if (_v13 && "y" === _v0) {
          let {
              skewX: _v0,
              scaleX: _v1
            } = _v3,
            _v2 = _v3._getTransformedDimensions({
              skewY: _v10
            }),
            _v3 = _v3._getTransformedDimensions(),
            _v4 = 0 !== _v0 ? _v2.x / _v3.x : 1;
          1 !== _v4 && _v3.set("scaleX", _v4 * _v1);
        }
        return _v13;
      }(_v0, _v1, new _v44(_v2, _v3))))(_v1, _v5(_v5({}, _v2), {}, {
        [_v7]: -(.5 * _v14) + .5,
        skewingSide: _v13
      }), _v3, _v4);
    }
    let _v218 = (_v0, _v1, _v2, _v3) => _v217("x", _v0, _v1, _v2, _v3),
      _v219 = (_v0, _v1, _v2, _v3) => _v217("y", _v0, _v1, _v2, _v3);
    function _v220(_v0, _v1) {
      return _v0[_v1.canvas.altActionKey];
    }
    let _v221 = (_v0, _v1, _v2) => {
        let _v3 = _v220(_v0, _v2);
        return 0 === _v1.x ? _v3 ? "skewX" : "scaleY" : 0 === _v1.y ? _v3 ? "skewY" : "scaleX" : "";
      },
      _v222 = (_v0, _v1, _v2) => _v220(_v0, _v2) ? _v216(_v0, _v1, _v2) : _v208(_v0, _v1, _v2),
      _v223 = (_v0, _v1, _v2, _v3) => _v220(_v0, _v1.target) ? _v219(_v0, _v1, _v2, _v3) : _v211(_v0, _v1, _v2, _v3),
      _v224 = (_v0, _v1, _v2, _v3) => _v220(_v0, _v1.target) ? _v218(_v0, _v1, _v2, _v3) : _v212(_v0, _v1, _v2, _v3),
      _v225 = () => ({
        ml: new _v202({
          x: -.5,
          y: 0,
          cursorStyleHandler: _v222,
          actionHandler: _v223,
          getActionName: _v221
        }),
        mr: new _v202({
          x: .5,
          y: 0,
          cursorStyleHandler: _v222,
          actionHandler: _v223,
          getActionName: _v221
        }),
        mb: new _v202({
          x: 0,
          y: .5,
          cursorStyleHandler: _v222,
          actionHandler: _v224,
          getActionName: _v221
        }),
        mt: new _v202({
          x: 0,
          y: -.5,
          cursorStyleHandler: _v222,
          actionHandler: _v224,
          getActionName: _v221
        }),
        tl: new _v202({
          x: -.5,
          y: -.5,
          cursorStyleHandler: _v208,
          actionHandler: _v210
        }),
        tr: new _v202({
          x: .5,
          y: -.5,
          cursorStyleHandler: _v208,
          actionHandler: _v210
        }),
        bl: new _v202({
          x: -.5,
          y: .5,
          cursorStyleHandler: _v208,
          actionHandler: _v210
        }),
        br: new _v202({
          x: .5,
          y: .5,
          cursorStyleHandler: _v208,
          actionHandler: _v210
        }),
        mtr: new _v202({
          x: 0,
          y: -.5,
          actionHandler: _v204,
          cursorStyleHandler: _v203,
          offsetY: -40,
          withConnection: !0,
          actionName: "rotate"
        })
      }),
      _v226 = () => ({
        mr: new _v202({
          x: .5,
          y: 0,
          actionHandler: _v199,
          cursorStyleHandler: _v222,
          actionName: "resizing"
        }),
        ml: new _v202({
          x: -.5,
          y: 0,
          actionHandler: _v199,
          cursorStyleHandler: _v222,
          actionName: "resizing"
        })
      }),
      _v227 = () => _v5(_v5({}, _v225()), _v226());
    class _v228 extends _v196 {
      static getDefaults() {
        return _v5(_v5({}, super.getDefaults()), {}, {
          controls: _v225()
        }, _v228.ownDefaults);
      }
      _updateCacheCanvas() {
        let _v0 = this.canvas;
        if (this.noScaleCache && _v0 && _v0._currentTransform) {
          let _v0 = _v0._currentTransform,
            _v1 = _v0.target,
            _v2 = _v0.action;
          if (this === _v1 && _v2 && _v2.startsWith("scale")) return !1;
        }
        return super._updateCacheCanvas();
      }
      getActiveControl() {
        let _v0 = this.__corner;
        return _v0 ? {
          key: _v0,
          control: this.controls[_v0],
          coord: this.oCoords[_v0]
        } : void 0;
      }
      findControl(_v0) {
        let _v1 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this.hasControls || !this.canvas) return;
        this.__corner = void 0;
        let _v2 = Object.entries(this.oCoords);
        for (let _v0 = _v2.length - 1; _v0 >= 0; _v0--) {
          let [_v0, _v1] = _v2[_v0],
            _v2 = this.controls[_v0];
          if (_v2.shouldActivate(_v0, this, _v0, _v1 ? _v1.touchCorner : _v1.corner)) return this.__corner = _v0, {
            key: _v0,
            control: _v2,
            coord: this.oCoords[_v0]
          };
        }
      }
      calcOCoords() {
        let _v0 = this.getViewportTransform(),
          _v1 = this.getCenterPoint(),
          _v2 = _v61(_v65(_v1.x, _v1.y), _v66({
            angle: this.getTotalAngle() - (this.group && this.flipX ? 180 : 0)
          })),
          _v3 = _v61(_v0, _v2),
          _v4 = _v61(_v3, [1 / _v0[0], 0, 0, 1 / _v0[3], 0, 0]),
          _v5 = this.group ? _v64(this.calcTransformMatrix()) : void 0;
        _v5 && (_v5.scaleX = Math.abs(_v5.scaleX), _v5.scaleY = Math.abs(_v5.scaleY));
        let _v6 = this._calculateCurrentDimensions(_v5),
          _v7 = {};
        return this.forEachControl((_v0, _v1) => {
          let _v2 = _v0.positionHandler(_v6, _v4, this, _v0);
          _v7[_v1] = Object.assign(_v2, this._calcCornerCoords(_v0, _v2));
        }), _v7;
      }
      _calcCornerCoords(_v0, _v1) {
        let _v2 = this.getTotalAngle();
        return {
          corner: _v0.calcCornerCoords(_v2, this.cornerSize, _v1.x, _v1.y, !1, this),
          touchCorner: _v0.calcCornerCoords(_v2, this.touchCornerSize, _v1.x, _v1.y, !0, this)
        };
      }
      setCoords() {
        super.setCoords(), this.canvas && (this.oCoords = this.calcOCoords());
      }
      forEachControl(_v0) {
        for (let _v0 in this.controls) _v0(this.controls[_v0], _v0, this);
      }
      drawSelectionBackground(_v0) {
        if (!this.selectionBackgroundColor || this.canvas && this.canvas._activeObject !== this) return;
        _v0.save();
        let _v1 = this.getRelativeCenterPoint(),
          _v2 = this._calculateCurrentDimensions(),
          _v3 = this.getViewportTransform();
        _v0.translate(_v1.x, _v1.y), _v0.scale(1 / _v3[0], 1 / _v3[3]), _v0.rotate(_v56(this.angle)), _v0.fillStyle = this.selectionBackgroundColor, _v0.fillRect(-_v2.x / 2, -_v2.y / 2, _v2.x, _v2.y), _v0.restore();
      }
      strokeBorders(_v0, _v1) {
        _v0.strokeRect(-_v1.x / 2, -_v1.y / 2, _v1.x, _v1.y);
      }
      _drawBorders(_v0, _v1) {
        let _v2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          _v3 = _v5({
            hasControls: this.hasControls,
            borderColor: this.borderColor,
            borderDashArray: this.borderDashArray
          }, _v2);
        _v0.save(), _v0.strokeStyle = _v3.borderColor, this._setLineDash(_v0, _v3.borderDashArray), this.strokeBorders(_v0, _v1), _v3.hasControls && this.drawControlsConnectingLines(_v0, _v1), _v0.restore();
      }
      _renderControls(_v0) {
        let _v1 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          {
            hasBorders: _v2,
            hasControls: _v3
          } = this,
          _v4 = _v5({
            hasBorders: _v2,
            hasControls: _v3
          }, _v1),
          _v5 = this.getViewportTransform(),
          _v6 = _v4.hasBorders,
          _v7 = _v4.hasControls,
          _v8 = _v64(_v61(_v5, this.calcTransformMatrix()));
        _v0.save(), _v0.translate(_v8.translateX, _v8.translateY), _v0.lineWidth = +this.borderScaleFactor, this.group === this.parent && (_v0.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1), this.flipX && (_v8.angle -= 180), _v0.rotate(_v56(this.group ? _v8.angle : this.angle)), _v6 && this.drawBorders(_v0, _v8, _v1), _v7 && this.drawControls(_v0, _v1), _v0.restore();
      }
      drawBorders(_v0, _v1, _v2) {
        let _v3;
        if (_v2 && _v2.forActiveSelection || this.group) {
          let _v0 = _v116(this.width, this.height, _v71(_v1)),
            _v1 = this.isStrokeAccountedForInDimensions() ? _v45 : (this.strokeUniform ? new _v44().scalarAdd(this.canvas ? this.canvas.getZoom() : 1) : new _v44(_v1.scaleX, _v1.scaleY)).scalarMultiply(this.strokeWidth);
          _v3 = _v0.add(_v1).scalarAdd(this.borderScaleFactor).scalarAdd(2 * this.padding);
        } else _v3 = this._calculateCurrentDimensions().scalarAdd(this.borderScaleFactor);
        this._drawBorders(_v0, _v3, _v2);
      }
      drawControlsConnectingLines(_v0, _v1) {
        let _v2 = !1;
        _v0.beginPath(), this.forEachControl((_v0, _v1) => {
          _v0.withConnection && _v0.getVisibility(this, _v1) && (_v2 = !0, _v0.moveTo(_v0.x * _v1.x, _v0.y * _v1.y), _v0.lineTo(_v0.x * _v1.x + _v0.offsetX, _v0.y * _v1.y + _v0.offsetY));
        }), _v2 && _v0.stroke();
      }
      drawControls(_v0) {
        let _v1 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        _v0.save();
        let _v2 = this.getCanvasRetinaScaling(),
          {
            cornerStrokeColor: _v3,
            cornerDashArray: _v4,
            cornerColor: _v5
          } = this,
          _v6 = _v5({
            cornerStrokeColor: _v3,
            cornerDashArray: _v4,
            cornerColor: _v5
          }, _v1);
        _v0.setTransform(_v2, 0, 0, _v2, 0, 0), _v0.strokeStyle = _v0.fillStyle = _v6.cornerColor, this.transparentCorners || (_v0.strokeStyle = _v6.cornerStrokeColor), this._setLineDash(_v0, _v6.cornerDashArray), this.setCoords(), this.forEachControl((_v0, _v1) => {
          if (_v0.getVisibility(this, _v1)) {
            let _v0 = this.oCoords[_v1];
            _v0.render(_v0, _v0.x, _v0.y, _v6, this);
          }
        }), _v0.restore();
      }
      isControlVisible(_v0) {
        return this.controls[_v0] && this.controls[_v0].getVisibility(this, _v0);
      }
      setControlVisible(_v0, _v1) {
        this._controlsVisibility || (this._controlsVisibility = {}), this._controlsVisibility[_v0] = _v1;
      }
      setControlsVisibility() {
        let _v0 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        Object.entries(_v0).forEach(_v0 => {
          let [_v1, _v2] = _v0;
          return this.setControlVisible(_v1, _v2);
        });
      }
      clearContextTop(_v0) {
        if (!this.canvas) return;
        let _v1 = this.canvas.contextTop;
        if (!_v1) return;
        let _v2 = this.canvas.viewportTransform;
        _v1.save(), _v1.transform(_v2[0], _v2[1], _v2[2], _v2[3], _v2[4], _v2[5]), this.transform(_v1);
        let _v3 = this.width + 4,
          _v4 = this.height + 4;
        return _v1.clearRect(-_v3 / 2, -_v4 / 2, _v3, _v4), _v0 || _v1.restore(), _v1;
      }
      onDeselect(_v0) {
        return !1;
      }
      onSelect(_v0) {
        return !1;
      }
      shouldStartDragging(_v0) {
        return !1;
      }
      onDragStart(_v0) {
        return !1;
      }
      canDrop(_v0) {
        return !1;
      }
      renderDragSourceEffect(_v0) {}
      renderDropTargetEffect(_v0) {}
    }
    function _v229(_v0, _v1) {
      return _v1.forEach(_v0 => {
        Object.getOwnPropertyNames(_v0.prototype).forEach(_v0 => {
          "constructor" !== _v0 && Object.defineProperty(_v0.prototype, _v0, Object.getOwnPropertyDescriptor(_v0.prototype, _v0) || Object.create(null));
        });
      }), _v0;
    }
    _v7(_v228, "ownDefaults", {
      noScaleCache: !0,
      lockMovementX: !1,
      lockMovementY: !1,
      lockRotation: !1,
      lockScalingX: !1,
      lockScalingY: !1,
      lockSkewingX: !1,
      lockSkewingY: !1,
      lockScalingFlip: !1,
      cornerSize: 13,
      touchCornerSize: 24,
      transparentCorners: !0,
      cornerColor: "rgb(178,204,255)",
      cornerStrokeColor: "",
      cornerStyle: "rect",
      cornerDashArray: null,
      hasControls: !0,
      borderColor: "rgb(178,204,255)",
      borderDashArray: null,
      borderOpacityWhenMoving: .4,
      borderScaleFactor: 1,
      hasBorders: !0,
      selectionBackgroundColor: "",
      selectable: !0,
      evented: !0,
      perPixelTargetFind: !1,
      activeOn: "down",
      hoverCursor: null,
      moveCursor: null
    });
    class _v230 extends _v228 {}
    _v229(_v230, [_v131]), _v36.setClass(_v230), _v36.setClass(_v230, "object");
    let _v231 = (_v0, _v1, _v2, _v3) => {
      let _v4 = 2 * (_v3 = Math.round(_v3)) + 1,
        {
          data: _v5
        } = _v0.getImageData(_v1 - _v3, _v2 - _v3, _v4, _v4);
      for (let _v0 = 3; _v0 < _v5.length; _v0 += 4) if (_v5[_v0] > 0) return !1;
      return !0;
    };
    class _v232 {
      constructor(_v0) {
        this.options = _v0, this.strokeProjectionMagnitude = this.options.strokeWidth / 2, this.scale = new _v44(this.options.scaleX, this.options.scaleY), this.strokeUniformScalar = this.options.strokeUniform ? new _v44(1 / this.options.scaleX, 1 / this.options.scaleY) : new _v44(1, 1);
      }
      createSideVector(_v0, _v1) {
        let _v2 = _v164(_v0, _v1);
        return this.options.strokeUniform ? _v2.multiply(this.scale) : _v2;
      }
      projectOrthogonally(_v0, _v1, _v2) {
        return this.applySkew(_v0.add(this.calcOrthogonalProjection(_v0, _v1, _v2)));
      }
      isSkewed() {
        return 0 !== this.options.skewX || 0 !== this.options.skewY;
      }
      applySkew(_v0) {
        let _v1 = new _v44(_v0);
        return _v1.y += _v1.x * Math.tan(_v56(this.options.skewY)), _v1.x += _v1.y * Math.tan(_v56(this.options.skewX)), _v1;
      }
      scaleUnitVector(_v0, _v1) {
        return _v0.multiply(this.strokeUniformScalar).scalarMultiply(_v1);
      }
    }
    let _v233 = new _v44();
    class _v234 extends _v232 {
      static getOrthogonalRotationFactor(_v0, _v1) {
        return Math.abs(_v1 ? _v166(_v0, _v1) : _v167(_v0)) < _v25 ? -1 : 1;
      }
      constructor(_v0, _v1, _v2, _v3) {
        super(_v3), _v7(this, "AB", void 0), _v7(this, "AC", void 0), _v7(this, "alpha", void 0), _v7(this, "bisector", void 0), this.A = new _v44(_v0), this.B = new _v44(_v1), this.C = new _v44(_v2), this.AB = this.createSideVector(this.A, this.B), this.AC = this.createSideVector(this.A, this.C), this.alpha = _v166(this.AB, this.AC), this.bisector = _v168(_v163(this.AB.eq(_v233) ? this.AC : this.AB, this.alpha / 2));
      }
      calcOrthogonalProjection(_v0, _v1) {
        let _v2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.strokeProjectionMagnitude,
          _v3 = _v169(this.createSideVector(_v0, _v1)),
          _v4 = _v234.getOrthogonalRotationFactor(_v3, this.bisector);
        return this.scaleUnitVector(_v3, _v2 * _v4);
      }
      projectBevel() {
        let _v0 = [];
        return (this.alpha % _v26 == 0 ? [this.B] : [this.B, this.C]).forEach(_v0 => {
          _v0.push(this.projectOrthogonally(this.A, _v0)), _v0.push(this.projectOrthogonally(this.A, _v0, -this.strokeProjectionMagnitude));
        }), _v0;
      }
      projectMiter() {
        let _v0 = [],
          _v1 = 1 / Math.sin(Math.abs(this.alpha) / 2),
          _v2 = this.scaleUnitVector(this.bisector, -this.strokeProjectionMagnitude * _v1),
          _v3 = this.options.strokeUniform ? _v165(this.scaleUnitVector(this.bisector, this.options.strokeMiterLimit)) : this.options.strokeMiterLimit;
        return _v165(_v2) / this.strokeProjectionMagnitude <= _v3 && _v0.push(this.applySkew(this.A.add(_v2))), _v0.push(...this.projectBevel()), _v0;
      }
      projectRoundNoSkew(_v0, _v1) {
        let _v2 = [],
          _v3 = new _v44(_v234.getOrthogonalRotationFactor(this.bisector), _v234.getOrthogonalRotationFactor(new _v44(this.bisector.y, this.bisector.x)));
        return [new _v44(1, 0).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar).multiply(_v3), new _v44(0, 1).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar).multiply(_v3)].forEach(_v0 => {
          _v172(_v0, _v0, _v1) && _v2.push(this.A.add(_v0));
        }), _v2;
      }
      projectRoundWithSkew(_v0, _v1) {
        let _v2 = [],
          {
            skewX: _v3,
            skewY: _v4,
            scaleX: _v5,
            scaleY: _v6,
            strokeUniform: _v7
          } = this.options,
          _v8 = new _v44(Math.tan(_v56(_v3)), Math.tan(_v56(_v4))),
          _v9 = this.strokeProjectionMagnitude,
          _v10 = _v7 ? _v9 / _v6 / Math.sqrt(1 / _v6 ** 2 + 1 / _v5 ** 2 * _v8.y ** 2) : _v9 / Math.sqrt(1 + _v8.y ** 2),
          _v11 = new _v44(Math.sqrt(Math.max(_v9 ** 2 - _v10 ** 2, 0)), _v10),
          _v12 = _v7 ? _v9 / Math.sqrt(1 + _v8.x ** 2 * (1 / _v6) ** 2 / (1 / _v5 + 1 / _v5 * _v8.x * _v8.y) ** 2) : _v9 / Math.sqrt(1 + _v8.x ** 2 / (1 + _v8.x * _v8.y) ** 2),
          _v13 = new _v44(_v12, Math.sqrt(Math.max(_v9 ** 2 - _v12 ** 2, 0)));
        return [_v13, _v13.scalarMultiply(-1), _v11, _v11.scalarMultiply(-1)].map(_v0 => this.applySkew(_v7 ? _v0.multiply(this.strokeUniformScalar) : _v0)).forEach(_v0 => {
          _v172(_v0, _v0, _v1) && _v2.push(this.applySkew(this.A).add(_v0));
        }), _v2;
      }
      projectRound() {
        let _v0 = [];
        _v0.push(...this.projectBevel());
        let _v1 = this.alpha % _v26 == 0,
          _v2 = this.applySkew(this.A),
          _v3 = _v0[2 * !_v1].subtract(_v2),
          _v4 = _v0[+!!_v1].subtract(_v2),
          _v5 = _v170(_v3, _v1 ? this.applySkew(this.AB.scalarMultiply(-1)) : this.applySkew(this.bisector.multiply(this.strokeUniformScalar).scalarMultiply(-1))) > 0,
          _v6 = _v5 ? _v3 : _v4,
          _v7 = _v5 ? _v4 : _v3;
        return this.isSkewed() ? _v0.push(...this.projectRoundWithSkew(_v6, _v7)) : _v0.push(...this.projectRoundNoSkew(_v6, _v7)), _v0;
      }
      projectPoints() {
        switch (this.options.strokeLineJoin) {
          case "miter":
            return this.projectMiter();
          case "round":
            return this.projectRound();
          default:
            return this.projectBevel();
        }
      }
      project() {
        return this.projectPoints().map(_v0 => ({
          originPoint: this.A,
          projectedPoint: _v0,
          angle: this.alpha,
          bisector: this.bisector
        }));
      }
    }
    class _v235 extends _v232 {
      constructor(_v0, _v1, _v2) {
        super(_v2), this.A = new _v44(_v0), this.T = new _v44(_v1);
      }
      calcOrthogonalProjection(_v0, _v1) {
        let _v2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.strokeProjectionMagnitude,
          _v3 = this.createSideVector(_v0, _v1);
        return this.scaleUnitVector(_v169(_v3), _v2);
      }
      projectButt() {
        return [this.projectOrthogonally(this.A, this.T, this.strokeProjectionMagnitude), this.projectOrthogonally(this.A, this.T, -this.strokeProjectionMagnitude)];
      }
      projectRound() {
        let _v0 = [];
        if (!this.isSkewed() && this.A.eq(this.T)) {
          let _v0 = new _v44(1, 1).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar);
          _v0.push(this.applySkew(this.A.add(_v0)), this.applySkew(this.A.subtract(_v0)));
        } else _v0.push(...new _v234(this.A, this.T, this.T, this.options).projectRound());
        return _v0;
      }
      projectSquare() {
        let _v0 = [];
        if (this.A.eq(this.T)) {
          let _v0 = new _v44(1, 1).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar);
          _v0.push(this.A.add(_v0), this.A.subtract(_v0));
        } else {
          let _v0 = this.calcOrthogonalProjection(this.A, this.T, this.strokeProjectionMagnitude),
            _v1 = this.scaleUnitVector(_v168(this.createSideVector(this.A, this.T)), -this.strokeProjectionMagnitude),
            _v2 = this.A.add(_v1);
          _v0.push(_v2.add(_v0), _v2.subtract(_v0));
        }
        return _v0.map(_v0 => this.applySkew(_v0));
      }
      projectPoints() {
        switch (this.options.strokeLineCap) {
          case "round":
            return this.projectRound();
          case "square":
            return this.projectSquare();
          default:
            return this.projectButt();
        }
      }
      project() {
        return this.projectPoints().map(_v0 => ({
          originPoint: this.A,
          projectedPoint: _v0
        }));
      }
    }
    let _v236 = function (_v0, _v1) {
        let _v2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          _v3 = [];
        if (0 === _v0.length) return _v3;
        let _v4 = _v0.reduce((_v0, _v1) => (_v0[_v0.length - 1].eq(_v1) || _v0.push(new _v44(_v1)), _v0), [new _v44(_v0[0])]);
        if (1 === _v4.length) _v2 = !0;else if (!_v2) {
          let _v0 = _v4[0],
            _v1 = ((_v0, _v1) => {
              for (let _v0 = _v0.length - 1; _v0 >= 0; _v0--) if (_v1(_v0[_v0], _v0, _v0)) return _v0;
              return -1;
            })(_v4, _v0 => !_v0.eq(_v0));
          _v4.splice(_v1 + 1);
        }
        return _v4.forEach((_v0, _v1, _v2) => {
          let _v3, _v4;
          0 === _v1 ? (_v4 = _v2[1], _v3 = _v2 ? _v0 : _v2[_v2.length - 1]) : _v1 === _v2.length - 1 ? (_v3 = _v2[_v1 - 1], _v4 = _v2 ? _v0 : _v2[0]) : (_v3 = _v2[_v1 - 1], _v4 = _v2[_v1 + 1]), _v2 && 1 === _v2.length ? _v3.push(...new _v235(_v0, _v0, _v1).project()) : _v2 && (0 === _v1 || _v1 === _v2.length - 1) ? _v3.push(...new _v235(_v0, 0 === _v1 ? _v4 : _v3, _v1).project()) : _v3.push(...new _v234(_v0, _v3, _v4, _v1).project());
        }), _v3;
      },
      _v237 = _v0 => _v0.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;"),
      _v238 = _v0 => {
        let _v1 = [];
        for (let _v0 = 0, _v1; _v0 < _v0.length; _v0++) !1 !== (_v1 = _v239(_v0, _v0)) && _v1.push(_v1);
        return _v1;
      },
      _v239 = (_v0, _v1) => {
        let _v2 = _v0.charCodeAt(_v1);
        if (isNaN(_v2)) return "";
        if (_v2 < 0 || _v2 > 0) return _v0.charAt(_v1);
        if (0 <= _v2 && _v2 <= 0) {
          if (_v0.length <= _v1 + 1) throw "High surrogate without following low surrogate";
          let _v0 = _v0.charCodeAt(_v1 + 1);
          if (0 > _v0 || _v0 > 0) throw "High surrogate without following low surrogate";
          return _v0.charAt(_v1) + _v0.charAt(_v1 + 1);
        }
        if (0 === _v1) throw "Low surrogate without preceding high surrogate";
        let _v3 = _v0.charCodeAt(_v1 - 1);
        if (0 > _v3 || _v3 > 0) throw "Low surrogate without preceding high surrogate";
        return !1;
      };
    var _v240 = Object.freeze({
      __proto__: null,
      capitalize: function (_v0) {
        let _v1 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return "".concat(_v0.charAt(0).toUpperCase()).concat(_v1 ? _v0.slice(1) : _v0.slice(1).toLowerCase());
      },
      escapeXml: _v237,
      graphemeSplit: _v238
    });
    let _v241 = function (_v0, _v1) {
        let _v2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return _v0.fill !== _v1.fill || _v0.stroke !== _v1.stroke || _v0.strokeWidth !== _v1.strokeWidth || _v0.fontSize !== _v1.fontSize || _v0.fontFamily !== _v1.fontFamily || _v0.fontWeight !== _v1.fontWeight || _v0.fontStyle !== _v1.fontStyle || _v0.textBackgroundColor !== _v1.textBackgroundColor || _v0.deltaY !== _v1.deltaY || _v2 && (_v0.overline !== _v1.overline || _v0.underline !== _v1.underline || _v0.linethrough !== _v1.linethrough);
      },
      _v242 = (_v0, _v1) => {
        let _v2 = _v1.split("\n"),
          _v3 = [],
          _v4 = -1,
          _v5 = {};
        _v0 = _v191(_v0);
        for (let _v0 = 0; _v0 < _v2.length; _v0++) {
          let _v0 = _v238(_v2[_v0]);
          if (!_v0[_v0]) {
            _v4 += _v0.length, _v5 = {};
            continue;
          }
          for (let _v0 = 0; _v0 < _v0.length; _v0++) {
            _v4++;
            let _v0 = _v0[_v0][_v0];
            _v0 && Object.keys(_v0).length > 0 && (_v241(_v5, _v0, !0) ? _v3.push({
              start: _v4,
              end: _v4 + 1,
              style: _v0
            }) : _v3[_v3.length - 1].end++), _v5 = _v0 || {};
          }
        }
        return _v3;
      },
      _v243 = (_v0, _v1) => {
        if (!Array.isArray(_v0)) return _v191(_v0);
        let _v2 = _v1.split(_v34),
          _v3 = {},
          _v4 = -1,
          _v5 = 0;
        for (let _v0 = 0; _v0 < _v2.length; _v0++) {
          let _v0 = _v238(_v2[_v0]);
          for (let _v0 = 0; _v0 < _v0.length; _v0++) _v4++, _v0[_v5] && _v0[_v5].start <= _v4 && _v4 < _v0[_v5].end && (_v3[_v0] = _v3[_v0] || {}, _v3[_v0][_v0] = _v5({}, _v0[_v5].style), _v4 === _v0[_v5].end - 1 && _v5++);
        }
        return _v3;
      },
      _v244 = ["display", "transform", "fill", "fill-opacity", "fill-rule", "opacity", "stroke", "stroke-dasharray", "stroke-linecap", "stroke-dashoffset", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "id", "paint-order", "vector-effect", "instantiated_by_use", "clip-path"];
    function _v245(_v0, _v1) {
      let _v2,
        _v3 = _v0.nodeName,
        _v4 = _v0.getAttribute("class"),
        _v5 = _v0.getAttribute("id"),
        _v6 = "(?![a-zA-Z\\-]+)";
      if (_v2 = RegExp("^" + _v3, "i"), _v1 = _v1.replace(_v2, ""), _v5 && _v1.length && (_v2 = RegExp("#" + _v5 + _v6, "i"), _v1 = _v1.replace(_v2, "")), _v4 && _v1.length) {
        let _v0 = _v4.split(" ");
        for (let _v0 = _v0.length; _v0--;) _v2 = RegExp("\\." + _v0[_v0] + _v6, "i"), _v1 = _v1.replace(_v2, "");
      }
      return 0 === _v1.length;
    }
    let _v246 = _v0 => {
        var _v1;
        return null != (_v1 = _v182[_v0]) ? _v1 : _v0;
      },
      _v247 = _v0 => _v0.replace(RegExp("(".concat(_v179, ")"), "gi"), " $1 ").replace(/,/gi, " ").replace(/\s+/gi, " "),
      _v248 = "(".concat(_v179, ")"),
      _v249 = String.raw(_v139 || (_v139 = _v9(["(skewX)(", ")"], ["(skewX)\\(", "\\)"])), _v248),
      _v250 = String.raw(_v140 || (_v140 = _v9(["(skewY)(", ")"], ["(skewY)\\(", "\\)"])), _v248),
      _v251 = String.raw(_v141 || (_v141 = _v9(["(rotate)(", "(?: ", " ", ")?)"], ["(rotate)\\(", "(?: ", " ", ")?\\)"])), _v248, _v248, _v248),
      _v252 = String.raw(_v142 || (_v142 = _v9(["(scale)(", "(?: ", ")?)"], ["(scale)\\(", "(?: ", ")?\\)"])), _v248, _v248),
      _v253 = String.raw(_v143 || (_v143 = _v9(["(translate)(", "(?: ", ")?)"], ["(translate)\\(", "(?: ", ")?\\)"])), _v248, _v248),
      _v254 = String.raw(_v144 || (_v144 = _v9(["(matrix)(", " ", " ", " ", " ", " ", ")"], ["(matrix)\\(", " ", " ", " ", " ", " ", "\\)"])), _v248, _v248, _v248, _v248, _v248, _v248),
      _v255 = "(?:".concat(_v254, "|").concat(_v253, "|").concat(_v251, "|").concat(_v252, "|").concat(_v249, "|").concat(_v250, ")"),
      _v256 = new RegExp(String.raw(_v145 || (_v145 = _v9(["^s*(?:", "?)s*$"], ["^\\s*(?:", "?)\\s*$"])), "(?:".concat(_v255, "*)"))),
      _v257 = RegExp(_v255, "g");
    function _v258(_v0) {
      _v0 = _v247(_v0).replace(/\s*([()])\s*/gi, "$1");
      let _v1 = [];
      if (!_v0 || _v0 && !_v256.test(_v0)) return [..._v28];
      for (let _v0 of _v0.matchAll(_v257)) {
        let _v0 = new RegExp(_v255).exec(_v0[0]);
        if (!_v0) continue;
        let _v1 = _v28,
          [, _v2, ..._v3] = _v0.filter(_v0 => !!_v0),
          [_v4, _v5, _v6, _v7, _v8, _v9] = _v3.map(_v0 => parseFloat(_v0));
        switch (_v2) {
          case "translate":
            _v1 = _v65(_v4, _v5);
            break;
          case "rotate":
            _v1 = _v66({
              angle: _v4
            }, {
              x: _v5,
              y: _v6
            });
            break;
          case "scale":
            _v1 = _v67(_v4, _v5);
            break;
          case "skewX":
            _v1 = _v69(_v4);
            break;
          case "skewY":
            _v1 = _v70(_v4);
            break;
          case "matrix":
            _v1 = [_v4, _v5, _v6, _v7, _v8, _v9];
        }
        _v1.push(_v1);
      }
      return _v62(_v1);
    }
    function _v259(_v0, _v1) {
      let _v2 = _v0.match(_v181);
      if (!_v2) return;
      let _v3 = _v2[1],
        _v4 = _v2[3],
        _v5 = _v2[4],
        _v6 = _v2[5],
        _v7 = _v2[6];
      _v3 && (_v1.fontStyle = _v3), _v4 && (_v1.fontWeight = isNaN(parseFloat(_v4)) ? _v4 : parseFloat(_v4)), _v5 && (_v1.fontSize = _v86(_v5)), _v7 && (_v1.fontFamily = _v7), _v6 && (_v1.lineHeight = "normal" === _v6 ? 1 : _v6);
    }
    function _v260(_v0) {
      let _v1 = {},
        _v2 = _v0.getAttribute("style");
      return _v2 ? ("string" == typeof _v2 ? _v2.replace(/;\s*$/, "").split(";").forEach(_v0 => {
        let [_v1, _v2] = _v0.split(":");
        _v1[_v1.trim().toLowerCase()] = _v2.trim();
      }) : Object.entries(_v2).forEach(_v0 => {
        let [_v1, _v2] = _v0;
        void 0 !== _v2 && (_v1[_v1.toLowerCase()] = _v2);
      }), _v1) : _v1;
    }
    let _v261 = {
      stroke: "strokeOpacity",
      fill: "fillOpacity"
    };
    function _v262(_v0, _v1, _v2) {
      let _v3;
      if (!_v0) return {};
      let _v4 = {},
        _v5,
        _v6 = 16;
      _v0.parentNode && _v187.test(_v0.parentNode.nodeName) && (_v4 = _v262(_v0.parentElement, _v1, _v2)).fontSize && (_v5 = _v6 = _v86(_v4.fontSize));
      let _v7 = _v5(_v5(_v5({}, _v1.reduce((_v0, _v1) => {
        let _v2 = _v0.getAttribute(_v1);
        return _v2 && (_v0[_v1] = _v2), _v0;
      }, {})), function (_v0) {
        let _v1 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          _v2 = {};
        for (let _v0 in _v1) (function (_v0, _v1) {
          let _v2 = !0,
            _v3 = _v245(_v0, _v1.pop());
          return _v3 && _v1.length && (_v2 = function (_v0, _v1) {
            let _v2,
              _v3 = !0;
            for (; _v0.parentElement && 1 === _v0.parentElement.nodeType && _v1.length;) _v3 && (_v2 = _v1.pop()), _v3 = _v245(_v0 = _v0.parentElement, _v2);
            return 0 === _v1.length;
          }(_v0, _v1)), _v3 && _v2 && 0 === _v1.length;
        })(_v0, _v0.split(" ")) && (_v2 = _v5(_v5({}, _v2), _v1[_v0]));
        return _v2;
      }(_v0, _v2)), _v260(_v0));
      _v7[_v184] && _v0.setAttribute(_v184, _v7[_v184]), _v7[_v183] && (_v5 = _v86(_v7[_v183], _v6), _v7[_v183] = "".concat(_v5));
      let _v8 = {};
      for (let _v0 in _v7) {
        let _v0 = _v246(_v0),
          _v1 = function (_v0, _v1, _v2, _v3) {
            let _v4,
              _v5 = Array.isArray(_v1),
              _v6 = _v1;
            if (("fill" === _v0 || "stroke" === _v0) && _v1 === _v33) _v6 = "";else if ("strokeUniform" === _v0) return "non-scaling-stroke" === _v1;else if ("strokeDashArray" === _v0) _v6 = _v1 === _v33 ? null : _v1.replace(/,/g, " ").split(/\s+/).map(parseFloat);else if ("transformMatrix" === _v0) _v6 = _v2 && _v2.transformMatrix ? _v61(_v2.transformMatrix, _v258(_v1)) : _v258(_v1);else if ("visible" === _v0) _v6 = _v1 !== _v33 && "hidden" !== _v1, _v2 && !1 === _v2.visible && (_v6 = !1);else if ("opacity" === _v0) _v6 = parseFloat(_v1), _v2 && void 0 !== _v2.opacity && (_v6 *= _v2.opacity);else if ("textAnchor" === _v0) _v6 = "start" === _v1 ? _v30 : "end" === _v1 ? _v32 : _v29;else if ("charSpacing" === _v0) _v4 = _v86(_v1, _v3) / _v3 * 0;else if ("paintFirst" === _v0) {
              let _v0 = _v1.indexOf("fill"),
                _v1 = _v1.indexOf("stroke");
              _v6 = "fill", _v0 > -1 && _v1 > -1 && _v1 < _v0 ? _v6 = "stroke" : -1 === _v0 && _v1 > -1 && (_v6 = "stroke");
            } else {
              if ("href" === _v0 || "xlink:href" === _v0 || "font" === _v0) return _v1;
              if ("imageSmoothing" === _v0) return "optimizeQuality" === _v1;
              _v4 = _v5 ? _v1.map(_v86) : _v86(_v1, _v3);
            }
            return !_v5 && isNaN(_v4) ? _v6 : _v4;
          }(_v0, _v7[_v0], _v4, _v5);
        _v8[_v0] = _v1;
      }
      _v8 && _v8.font && _v259(_v8.font, _v8);
      let _v9 = _v5(_v5({}, _v4), _v8);
      return _v187.test(_v0.nodeName) || (_v3 = _v230.getDefaults(), Object.entries(_v261).forEach(_v0 => {
        let [_v1, _v2] = _v0;
        if (void 0 === _v9[_v2] || "" === _v9[_v1]) return;
        if (void 0 === _v9[_v1]) {
          if (!_v3[_v1]) return;
          _v9[_v1] = _v3[_v1];
        }
        if (0 === _v9[_v1].indexOf("url(")) return;
        let _v3 = new _v84(_v9[_v1]);
        _v9[_v1] = _v3.setAlpha(_v85(_v3.getAlpha() * _v9[_v2], 2)).toRgba();
      })), _v9;
    }
    let _v263 = ["left", "top", "width", "height", "visible"],
      _v264 = ["rx", "ry"];
    class _v265 extends _v230 {
      static getDefaults() {
        return _v5(_v5({}, super.getDefaults()), _v265.ownDefaults);
      }
      constructor(_v0) {
        super(_v0), this._initRxRy();
      }
      _initRxRy() {
        let {
          rx: _v0,
          ry: _v1
        } = this;
        _v0 && !_v1 ? this.ry = _v0 : _v1 && !_v0 && (this.rx = _v1);
      }
      _render(_v0) {
        let {
            width: _v1,
            height: _v2
          } = this,
          _v3 = -_v1 / 2,
          _v4 = -_v2 / 2,
          _v5 = this.rx ? Math.min(this.rx, _v1 / 2) : 0,
          _v6 = this.ry ? Math.min(this.ry, _v2 / 2) : 0,
          _v7 = 0 !== _v5 || 0 !== _v6;
        _v0.beginPath(), _v0.moveTo(_v3 + _v5, _v4), _v0.lineTo(_v3 + _v1 - _v5, _v4), _v7 && _v0.bezierCurveTo(_v3 + _v1 - .4477152502 * _v5, _v4, _v3 + _v1, _v4 + .4477152502 * _v6, _v3 + _v1, _v4 + _v6), _v0.lineTo(_v3 + _v1, _v4 + _v2 - _v6), _v7 && _v0.bezierCurveTo(_v3 + _v1, _v4 + _v2 - .4477152502 * _v6, _v3 + _v1 - .4477152502 * _v5, _v4 + _v2, _v3 + _v1 - _v5, _v4 + _v2), _v0.lineTo(_v3 + _v5, _v4 + _v2), _v7 && _v0.bezierCurveTo(_v3 + .4477152502 * _v5, _v4 + _v2, _v3, _v4 + _v2 - .4477152502 * _v6, _v3, _v4 + _v2 - _v6), _v0.lineTo(_v3, _v4 + _v6), _v7 && _v0.bezierCurveTo(_v3, _v4 + .4477152502 * _v6, _v3 + .4477152502 * _v5, _v4, _v3 + _v5, _v4), _v0.closePath(), this._renderPaintInOrder(_v0);
      }
      toObject() {
        let _v0 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return super.toObject([..._v264, ..._v0]);
      }
      _toSVG() {
        let {
          width: _v0,
          height: _v1,
          rx: _v2,
          ry: _v3
        } = this;
        return ["<rect ", "COMMON_PARTS", 'x="'.concat(-_v0 / 2, '" y="').concat(-_v1 / 2, '" rx="').concat(_v2, '" ry="').concat(_v3, '" width="').concat(_v0, '" height="').concat(_v1, '" />\n')];
      }
      static async fromElement(_v0, _v1, _v2) {
        let _v3 = _v262(_v0, this.ATTRIBUTE_NAMES, _v2),
          {
            left: _v4 = 0,
            top: _v5 = 0,
            width: _v6 = 0,
            height: _v7 = 0,
            visible: _v8 = !0
          } = _v3,
          _v9 = _v8(_v3, _v263);
        return new this(_v5(_v5(_v5({}, _v1), _v9), {}, {
          left: _v4,
          top: _v5,
          width: _v6,
          height: _v7,
          visible: !!(_v8 && _v6 && _v7)
        }));
      }
    }
    _v7(_v265, "type", "Rect"), _v7(_v265, "cacheProperties", [..._v193, ..._v264]), _v7(_v265, "ownDefaults", {
      rx: 0,
      ry: 0
    }), _v7(_v265, "ATTRIBUTE_NAMES", [..._v244, "x", "y", "rx", "ry", "width", "height"]), _v36.setClass(_v265), _v36.setSVGClass(_v265);
    let _v266 = "initialization",
      _v267 = "added",
      _v268 = "removed",
      _v269 = "imperative",
      _v270 = (_v0, _v1) => {
        let {
            strokeUniform: _v2,
            strokeWidth: _v3,
            width: _v4,
            height: _v5,
            group: _v6
          } = _v1,
          _v7 = _v6 && _v6 !== _v0 ? _v117(_v6.calcTransformMatrix(), _v0.calcTransformMatrix()) : null,
          _v8 = _v7 ? _v1.getRelativeCenterPoint().transform(_v7) : _v1.getRelativeCenterPoint(),
          _v9 = !_v1.isStrokeAccountedForInDimensions(),
          _v10 = _v2 && _v9 ? _v119(new _v44(_v3, _v3), void 0, _v0.calcTransformMatrix()) : _v45,
          _v11 = !_v2 && _v9 ? _v3 : 0,
          _v12 = _v116(_v4 + _v11, _v5 + _v11, _v62([_v7, _v1.calcOwnMatrix()], !0)).add(_v10).scalarDivide(2);
        return [_v8.subtract(_v12), _v8.add(_v12)];
      };
    class _v271 {
      calcLayoutResult(_v0, _v1) {
        if (this.shouldPerformLayout(_v0)) return this.calcBoundingBox(_v1, _v0);
      }
      shouldPerformLayout(_v0) {
        return _v0.type === _v266 || _v0.type === _v269 || !!_v0.prevStrategy && _v0.strategy !== _v0.prevStrategy;
      }
      shouldLayoutClipPath(_v0) {
        let {
          type: _v1,
          target: {
            clipPath: _v2
          }
        } = _v0;
        return _v1 !== _v266 && _v2 && !_v2.absolutePositioned;
      }
      getInitialSize(_v0, _v1) {
        return _v1.size;
      }
      calcBoundingBox(_v0, _v1) {
        if (_v1.type === _v269 && _v1.overrides) return _v1.overrides;
        if (0 === _v0.length) return;
        let {
            target: _v2
          } = _v1,
          {
            left: _v3,
            top: _v4,
            width: _v5,
            height: _v6
          } = _v110(_v0.map(_v0 => _v270(_v2, _v0)).reduce((_v0, _v1) => _v0.concat(_v1), [])),
          _v7 = new _v44(_v5, _v6),
          _v8 = new _v44(_v3, _v4).add(_v7.scalarDivide(2));
        if (_v1.type !== _v266) return {
          center: _v8.transform(_v2.calcOwnMatrix()),
          size: _v7
        };
        {
          let _v0 = this.getInitialSize(_v1, {
            size: _v7,
            center: _v8
          });
          return {
            center: _v8,
            relativeCorrection: new _v44(0, 0),
            size: _v0
          };
        }
      }
    }
    _v7(_v271, "type", "strategy");
    class _v272 extends _v271 {
      shouldPerformLayout(_v0) {
        return !0;
      }
    }
    _v7(_v272, "type", "fit-content"), _v36.setClass(_v272);
    let _v273 = ["strategy"],
      _v274 = ["target", "strategy", "bubbles", "prevStrategy"],
      _v275 = "layoutManager";
    class _v276 {
      constructor() {
        let _v0 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new _v272();
        _v7(this, "strategy", void 0), this.strategy = _v0, this._subscriptions = new Map();
      }
      performLayout(_v0) {
        let _v1 = _v5(_v5({
          bubbles: !0,
          strategy: this.strategy
        }, _v0), {}, {
          prevStrategy: this._prevLayoutStrategy,
          stopPropagation() {
            this.bubbles = !1;
          }
        });
        this.onBeforeLayout(_v1);
        let _v2 = this.getLayoutResult(_v1);
        _v2 && this.commitLayout(_v1, _v2), this.onAfterLayout(_v1, _v2), this._prevLayoutStrategy = _v1.strategy;
      }
      attachHandlers(_v0, _v1) {
        let {
          target: _v2
        } = _v1;
        return ["modified", "moving", "resizing", "rotating", "scaling", "skewing", "changed", "modifyPoly"].map(_v0 => _v0.on(_v0, _v0 => this.performLayout("modified" === _v0 ? {
          type: "object_modified",
          trigger: _v0,
          e: _v0,
          target: _v2
        } : {
          type: "object_modifying",
          trigger: _v0,
          e: _v0,
          target: _v2
        })));
      }
      subscribe(_v0, _v1) {
        this.unsubscribe(_v0, _v1);
        let _v2 = this.attachHandlers(_v0, _v1);
        this._subscriptions.set(_v0, _v2);
      }
      unsubscribe(_v0, _v1) {
        (this._subscriptions.get(_v0) || []).forEach(_v0 => _v0()), this._subscriptions.delete(_v0);
      }
      unsubscribeTargets(_v0) {
        _v0.targets.forEach(_v0 => this.unsubscribe(_v0, _v0));
      }
      subscribeTargets(_v0) {
        _v0.targets.forEach(_v0 => this.subscribe(_v0, _v0));
      }
      onBeforeLayout(_v0) {
        let {
            target: _v1,
            type: _v2
          } = _v0,
          {
            canvas: _v3
          } = _v1;
        if (_v2 === _v266 || _v2 === _v267 ? this.subscribeTargets(_v0) : _v2 === _v268 && this.unsubscribeTargets(_v0), _v1.fire("layout:before", {
          context: _v0
        }), _v3 && _v3.fire("object:layout:before", {
          target: _v1,
          context: _v0
        }), _v2 === _v269 && _v0.deep) {
          let _v0 = _v8(_v0, _v273);
          _v1.forEachObject(_v0 => _v0.layoutManager && _v0.layoutManager.performLayout(_v5(_v5({}, _v0), {}, {
            bubbles: !1,
            target: _v0
          })));
        }
      }
      getLayoutResult(_v0) {
        let {
            target: _v1
          } = _v0,
          _v2 = _v0.strategy.calcLayoutResult(_v0, _v1.getObjects());
        if (!_v2) return;
        let _v3 = _v0.type === _v266 ? new _v44() : _v1.getRelativeCenterPoint(),
          {
            center: _v4,
            correction: _v5 = new _v44(),
            relativeCorrection: _v6 = new _v44()
          } = _v2,
          _v7 = _v3.subtract(_v4).add(_v5).transform(_v0.type === _v266 ? _v28 : _v60(_v1.calcOwnMatrix()), !0).add(_v6);
        return {
          result: _v2,
          prevCenter: _v3,
          nextCenter: _v4,
          offset: _v7
        };
      }
      commitLayout(_v0, _v1) {
        let {
            target: _v2
          } = _v0,
          {
            result: {
              size: _v3
            },
            nextCenter: _v4
          } = _v1;
        if (_v2.set({
          width: _v3.x,
          height: _v3.y
        }), this.layoutObjects(_v0, _v1), _v0.type === _v266) {
          var _v5, _v6;
          _v2.set({
            left: null != (_v5 = _v0.x) ? _v5 : _v4.x + _v3.x * _v123(_v2.originX),
            top: null != (_v6 = _v0.y) ? _v6 : _v4.y + _v3.y * _v123(_v2.originY)
          });
        } else _v2.setPositionByOrigin(_v4, _v29, _v29), _v2.setCoords(), _v2.set("dirty", !0);
      }
      layoutObjects(_v0, _v1) {
        let {
          target: _v2
        } = _v0;
        _v2.forEachObject(_v0 => {
          _v0.group === _v2 && this.layoutObject(_v0, _v1, _v0);
        }), _v0.strategy.shouldLayoutClipPath(_v0) && this.layoutObject(_v0, _v1, _v2.clipPath);
      }
      layoutObject(_v0, _v1, _v2) {
        let {
          offset: _v3
        } = _v1;
        _v2.set({
          left: _v2.left + _v3.x,
          top: _v2.top + _v3.y
        });
      }
      onAfterLayout(_v0, _v1) {
        let {
            target: _v2,
            strategy: _v3,
            bubbles: _v4,
            prevStrategy: _v5
          } = _v0,
          _v6 = _v8(_v0, _v274),
          {
            canvas: _v7
          } = _v2;
        _v2.fire("layout:after", {
          context: _v0,
          result: _v1
        }), _v7 && _v7.fire("object:layout:after", {
          context: _v0,
          result: _v1,
          target: _v2
        });
        let _v8 = _v2.parent;
        _v4 && null != _v8 && _v8.layoutManager && ((_v6.path || (_v6.path = [])).push(_v2), _v8.layoutManager.performLayout(_v5(_v5({}, _v6), {}, {
          target: _v8
        }))), _v2.set("dirty", !0);
      }
      dispose() {
        this._subscriptions.forEach(_v0 => _v0.forEach(_v0 => _v0())), this._subscriptions.clear();
      }
      toObject() {
        return {
          type: _v275,
          strategy: this.strategy.constructor.type
        };
      }
      toJSON() {
        return this.toObject();
      }
    }
    _v36.setClass(_v276, _v275);
    let _v277 = ["type", "objects", "layoutManager"];
    class _v278 extends _v276 {
      performLayout() {}
    }
    class _v279 extends _v47(_v230) {
      static getDefaults() {
        return _v5(_v5({}, super.getDefaults()), _v279.ownDefaults);
      }
      constructor() {
        let _v0 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          _v1 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        super(_v1), _v7(this, "_activeObjects", []), _v7(this, "__objectSelectionTracker", void 0), _v7(this, "__objectSelectionDisposer", void 0), this._objects = [..._v0], this.__objectSelectionTracker = this.__objectSelectionMonitor.bind(this, !0), this.__objectSelectionDisposer = this.__objectSelectionMonitor.bind(this, !1), this.forEachObject(_v0 => {
          this.enterGroup(_v0, !1);
        }), this.layoutManager = _v1.layoutManager || new _v276(), this.layoutManager.performLayout({
          type: _v266,
          target: this,
          targets: [..._v0],
          x: _v1.left,
          y: _v1.top
        });
      }
      canEnterGroup(_v0) {
        return _v0 === this || this.isDescendantOf(_v0) ? (_v12("error", "Group: circular object trees are not supported, this call has no effect"), !1) : -1 === this._objects.indexOf(_v0) || (_v12("error", "Group: duplicate objects are not supported inside group, this call has no effect"), !1);
      }
      _filterObjectsBeforeEnteringGroup(_v0) {
        return _v0.filter((_v0, _v1, _v2) => this.canEnterGroup(_v0) && _v2.indexOf(_v0) === _v1);
      }
      add() {
        for (var _v0 = arguments.length, _v1 = Array(_v0), _v2 = 0; _v2 < _v0; _v2++) _v1[_v2] = arguments[_v2];
        let _v3 = this._filterObjectsBeforeEnteringGroup(_v1),
          _v4 = super.add(..._v3);
        return this._onAfterObjectsChange(_v267, _v3), _v4;
      }
      insertAt(_v0) {
        for (var _v1 = arguments.length, _v2 = Array(_v1 > 1 ? _v1 - 1 : 0), _v3 = 1; _v3 < _v1; _v3++) _v2[_v3 - 1] = arguments[_v3];
        let _v4 = this._filterObjectsBeforeEnteringGroup(_v2),
          _v5 = super.insertAt(_v0, ..._v4);
        return this._onAfterObjectsChange(_v267, _v4), _v5;
      }
      remove() {
        let _v0 = super.remove(...arguments);
        return this._onAfterObjectsChange(_v268, _v0), _v0;
      }
      _onObjectAdded(_v0) {
        this.enterGroup(_v0, !0), this.fire("object:added", {
          target: _v0
        }), _v0.fire("added", {
          target: this
        });
      }
      _onObjectRemoved(_v0, _v1) {
        this.exitGroup(_v0, _v1), this.fire("object:removed", {
          target: _v0
        }), _v0.fire("removed", {
          target: this
        });
      }
      _onAfterObjectsChange(_v0, _v1) {
        this.layoutManager.performLayout({
          type: _v0,
          targets: _v1,
          target: this
        });
      }
      _onStackOrderChanged() {
        this._set("dirty", !0);
      }
      _set(_v0, _v1) {
        let _v2 = this[_v0];
        return super._set(_v0, _v1), "canvas" === _v0 && _v2 !== _v1 && (this._objects || []).forEach(_v0 => {
          _v0._set(_v0, _v1);
        }), this;
      }
      _shouldSetNestedCoords() {
        return this.subTargetCheck;
      }
      removeAll() {
        return this._activeObjects = [], this.remove(...this._objects);
      }
      __objectSelectionMonitor(_v0, _v1) {
        let {
            target: _v2
          } = _v1,
          _v3 = this._activeObjects;
        if (_v0) _v3.push(_v2), this._set("dirty", !0);else if (_v3.length > 0) {
          let _v0 = _v3.indexOf(_v2);
          _v0 > -1 && (_v3.splice(_v0, 1), this._set("dirty", !0));
        }
      }
      _watchObject(_v0, _v1) {
        _v0 && this._watchObject(!1, _v1), _v0 ? (_v1.on("selected", this.__objectSelectionTracker), _v1.on("deselected", this.__objectSelectionDisposer)) : (_v1.off("selected", this.__objectSelectionTracker), _v1.off("deselected", this.__objectSelectionDisposer));
      }
      enterGroup(_v0, _v1) {
        _v0.group && _v0.group.remove(_v0), _v0._set("parent", this), this._enterGroup(_v0, _v1);
      }
      _enterGroup(_v0, _v1) {
        _v1 && _v113(_v0, _v61(_v60(this.calcTransformMatrix()), _v0.calcTransformMatrix())), this._shouldSetNestedCoords() && _v0.setCoords(), _v0._set("group", this), _v0._set("canvas", this.canvas), this._watchObject(!0, _v0);
        let _v2 = this.canvas && this.canvas.getActiveObject && this.canvas.getActiveObject();
        _v2 && (_v2 === _v0 || _v0.isDescendantOf(_v2)) && this._activeObjects.push(_v0);
      }
      exitGroup(_v0, _v1) {
        this._exitGroup(_v0, _v1), _v0._set("parent", void 0), _v0._set("canvas", void 0);
      }
      _exitGroup(_v0, _v1) {
        _v0._set("group", void 0), _v1 || (_v113(_v0, _v61(this.calcTransformMatrix(), _v0.calcTransformMatrix())), _v0.setCoords()), this._watchObject(!1, _v0);
        let _v2 = this._activeObjects.length > 0 ? this._activeObjects.indexOf(_v0) : -1;
        _v2 > -1 && this._activeObjects.splice(_v2, 1);
      }
      shouldCache() {
        let _v0 = _v230.prototype.shouldCache.call(this);
        if (_v0) {
          for (let _v0 = 0; _v0 < this._objects.length; _v0++) if (this._objects[_v0].willDrawShadow()) return this.ownCaching = !1, !1;
        }
        return _v0;
      }
      willDrawShadow() {
        if (super.willDrawShadow()) return !0;
        for (let _v0 = 0; _v0 < this._objects.length; _v0++) if (this._objects[_v0].willDrawShadow()) return !0;
        return !1;
      }
      isOnACache() {
        return this.ownCaching || !!this.parent && this.parent.isOnACache();
      }
      drawObject(_v0) {
        this._renderBackground(_v0);
        for (let _v0 = 0; _v0 < this._objects.length; _v0++) {
          var _v1;
          null != (_v1 = this.canvas) && _v1.preserveObjectStacking && this._objects[_v0].group !== this ? (_v0.save(), _v0.transform(..._v60(this.calcTransformMatrix())), this._objects[_v0].render(_v0), _v0.restore()) : this._objects[_v0].group === this && this._objects[_v0].render(_v0);
        }
        this._drawClipPath(_v0, this.clipPath);
      }
      setCoords() {
        super.setCoords(), this._shouldSetNestedCoords() && this.forEachObject(_v0 => _v0.setCoords());
      }
      triggerLayout() {
        let _v0 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.layoutManager.performLayout(_v5({
          target: this,
          type: _v269
        }, _v0));
      }
      render(_v0) {
        this._transformDone = !0, super.render(_v0), this._transformDone = !1;
      }
      __serializeObjects(_v0, _v1) {
        let _v2 = this.includeDefaultValues;
        return this._objects.filter(function (_v0) {
          return !_v0.excludeFromExport;
        }).map(function (_v0) {
          let _v1 = _v0.includeDefaultValues;
          _v0.includeDefaultValues = _v2;
          let _v2 = _v0[_v0 || "toObject"](_v1);
          return _v0.includeDefaultValues = _v1, _v2;
        });
      }
      toObject() {
        let _v0 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          _v1 = this.layoutManager.toObject();
        return _v5(_v5(_v5({}, super.toObject(["subTargetCheck", "interactive", ..._v0])), "fit-content" !== _v1.strategy || this.includeDefaultValues ? {
          layoutManager: _v1
        } : {}), {}, {
          objects: this.__serializeObjects("toObject", _v0)
        });
      }
      toString() {
        return "#<Group: (".concat(this.complexity(), ")>");
      }
      dispose() {
        this.layoutManager.unsubscribeTargets({
          targets: this.getObjects(),
          target: this
        }), this._activeObjects = [], this.forEachObject(_v0 => {
          this._watchObject(!1, _v0), _v0.dispose();
        }), super.dispose();
      }
      _createSVGBgRect(_v0) {
        if (!this.backgroundColor) return "";
        let _v1 = _v265.prototype._toSVG.call(this),
          _v2 = _v1.indexOf("COMMON_PARTS");
        _v1[_v2] = 'for="group" ';
        let _v3 = _v1.join("");
        return _v0 ? _v0(_v3) : _v3;
      }
      _toSVG(_v0) {
        let _v1 = ["<g ", "COMMON_PARTS", " >\n"],
          _v2 = this._createSVGBgRect(_v0);
        _v2 && _v1.push("		", _v2);
        for (let _v0 = 0; _v0 < this._objects.length; _v0++) _v1.push("		", this._objects[_v0].toSVG(_v0));
        return _v1.push("</g>\n"), _v1;
      }
      getSvgStyles() {
        let _v0 = void 0 !== this.opacity && 1 !== this.opacity ? "opacity: ".concat(this.opacity, ";") : "",
          _v1 = this.visible ? "" : " visibility: hidden;";
        return [_v0, this.getSvgFilter(), _v1].join("");
      }
      toClipPathSVG(_v0) {
        let _v1 = [],
          _v2 = this._createSVGBgRect(_v0);
        _v2 && _v1.push("	", _v2);
        for (let _v0 = 0; _v0 < this._objects.length; _v0++) _v1.push("	", this._objects[_v0].toClipPathSVG(_v0));
        return this._createBaseClipPathSVGMarkup(_v1, {
          reviver: _v0
        });
      }
      static fromObject(_v0) {
        let {
            type: _v1,
            objects: _v2 = [],
            layoutManager: _v3
          } = _v0,
          _v4 = _v8(_v0, _v277);
        return Promise.all([_v74(_v2), _v75(_v4)]).then(_v0 => {
          let [_v1, _v2] = _v0,
            _v3 = new this(_v1, _v5(_v5(_v5({}, _v4), _v2), {}, {
              layoutManager: new _v278()
            }));
          return _v3 ? _v3.layoutManager = new (_v36.getClass(_v3.type))(new (_v36.getClass(_v3.strategy))()) : _v3.layoutManager = new _v276(), _v3.layoutManager.subscribeTargets({
            type: _v266,
            target: _v3,
            targets: _v3.getObjects()
          }), _v3.setCoords(), _v3;
        });
      }
    }
    _v7(_v279, "type", "Group"), _v7(_v279, "ownDefaults", {
      strokeWidth: 0,
      subTargetCheck: !1,
      interactive: !1
    }), _v36.setClass(_v279);
    let _v280 = (_v0, _v1) => Math.min(_v1.width / _v0.width, _v1.height / _v0.height),
      _v281 = (_v0, _v1) => Math.max(_v1.width / _v0.width, _v1.height / _v0.height),
      _v282 = "(".concat(_v179, ")"),
      _v283 = "(M) (?:".concat(_v282, " ").concat(_v282, " ?)+"),
      _v284 = "(L) (?:".concat(_v282, " ").concat(_v282, " ?)+"),
      _v285 = "(H) (?:".concat(_v282, " ?)+"),
      _v286 = "(V) (?:".concat(_v282, " ?)+"),
      _v287 = String.raw(_v146 || (_v146 = _v9(["(Z)s*"], ["(Z)\\s*"]))),
      _v288 = "(C) (?:".concat(_v282, " ").concat(_v282, " ").concat(_v282, " ").concat(_v282, " ").concat(_v282, " ").concat(_v282, " ?)+"),
      _v289 = "(S) (?:".concat(_v282, " ").concat(_v282, " ").concat(_v282, " ").concat(_v282, " ?)+"),
      _v290 = "(Q) (?:".concat(_v282, " ").concat(_v282, " ").concat(_v282, " ").concat(_v282, " ?)+"),
      _v291 = "(T) (?:".concat(_v282, " ").concat(_v282, " ?)+"),
      _v292 = "(A) (?:".concat(_v282, " ").concat(_v282, " ").concat(_v282, " ([01]) ?([01]) ").concat(_v282, " ").concat(_v282, " ?)+"),
      _v293 = "(?:(?:".concat(_v283, ")") + "|(?:".concat(_v284, ")") + "|(?:".concat(_v285, ")") + "|(?:".concat(_v286, ")") + "|(?:".concat(_v287, ")") + "|(?:".concat(_v288, ")") + "|(?:".concat(_v289, ")") + "|(?:".concat(_v290, ")") + "|(?:".concat(_v291, ")") + "|(?:".concat(_v292, "))"),
      _v294 = {
        m: "l",
        M: "L"
      },
      _v295 = (_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7, _v8, _v9, _v10) => {
        let _v11 = _v42(_v0),
          _v12 = _v43(_v0),
          _v13 = _v42(_v1),
          _v14 = _v43(_v1),
          _v15 = _v2 * _v4 * _v13 - _v3 * _v5 * _v14 + _v6,
          _v16 = _v3 * _v4 * _v13 + _v2 * _v5 * _v14 + _v7;
        return ["C", _v9 + _v8 * (-_v2 * _v4 * _v12 - _v3 * _v5 * _v11), _v10 + _v8 * (-_v3 * _v4 * _v12 + _v2 * _v5 * _v11), _v15 + _v8 * (_v2 * _v4 * _v14 + _v3 * _v5 * _v13), _v16 + _v8 * (_v3 * _v4 * _v14 - _v2 * _v5 * _v13), _v15, _v16];
      },
      _v296 = (_v0, _v1, _v2, _v3) => {
        let _v4 = Math.atan2(_v1, _v0),
          _v5 = Math.atan2(_v3, _v2);
        return _v5 >= _v4 ? _v5 - _v4 : 2 * Math.PI - (_v4 - _v5);
      };
    function _v297(_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7) {
      let _v8;
      if (_v11.cachesBoundsOfCurve && (_v8 = [...arguments].join(), _v22.boundsOfCurveCache[_v8])) return _v22.boundsOfCurveCache[_v8];
      let _v9 = Math.sqrt,
        _v10 = Math.abs,
        _v11 = [],
        _v12 = [[0, 0], [0, 0]],
        _v13 = 6 * _v0 - 12 * _v2 + 6 * _v4,
        _v14 = -3 * _v0 + 9 * _v2 - 9 * _v4 + 3 * _v6,
        _v15 = 3 * _v2 - 3 * _v0;
      for (let _v0 = 0; _v0 < 2; ++_v0) {
        if (_v0 > 0 && (_v13 = 6 * _v1 - 12 * _v3 + 6 * _v5, _v14 = -3 * _v1 + 9 * _v3 - 9 * _v5 + 3 * _v7, _v15 = 3 * _v3 - 3 * _v1), 1e-12 > _v10(_v14)) {
          if (1e-12 > _v10(_v13)) continue;
          let _v0 = -_v15 / _v13;
          0 < _v0 && _v0 < 1 && _v11.push(_v0);
          continue;
        }
        let _v0 = _v13 * _v13 - 4 * _v15 * _v14;
        if (_v0 < 0) continue;
        let _v1 = _v9(_v0),
          _v2 = (-_v13 + _v1) / (2 * _v14);
        0 < _v2 && _v2 < 1 && _v11.push(_v2);
        let _v3 = (-_v13 - _v1) / (2 * _v14);
        0 < _v3 && _v3 < 1 && _v11.push(_v3);
      }
      let _v16 = _v11.length,
        _v17 = _v16,
        _v18 = _v301(_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7);
      for (; _v16--;) {
        let {
          x: _v0,
          y: _v1
        } = _v18(_v11[_v16]);
        _v12[0][_v16] = _v0, _v12[1][_v16] = _v1;
      }
      _v12[0][_v17] = _v0, _v12[1][_v17] = _v1, _v12[0][_v17 + 1] = _v6, _v12[1][_v17 + 1] = _v7;
      let _v19 = [new _v44(Math.min(..._v12[0]), Math.min(..._v12[1])), new _v44(Math.max(..._v12[0]), Math.max(..._v12[1]))];
      return _v11.cachesBoundsOfCurve && (_v22.boundsOfCurveCache[_v8] = _v19), _v19;
    }
    let _v298 = (_v0, _v1, _v2) => {
        let [_v3, _v4, _v5, _v6, _v7, _v8, _v9, _v10] = _v2,
          _v11 = ((_v0, _v1, _v2, _v3, _v4, _v5, _v6) => {
            if (0 === _v2 || 0 === _v3) return [];
            let _v7 = 0,
              _v8 = 0,
              _v9 = 0,
              _v10 = Math.PI,
              _v11 = _v6 * _v27,
              _v12 = _v43(_v11),
              _v13 = _v42(_v11),
              _v14 = .5 * (-_v13 * _v0 - _v12 * _v1),
              _v15 = .5 * (-_v13 * _v1 + _v12 * _v0),
              _v16 = _v2 ** 2,
              _v17 = _v3 ** 2,
              _v18 = _v15 ** 2,
              _v19 = _v14 ** 2,
              _v20 = _v16 * _v17 - _v16 * _v18 - _v17 * _v19,
              _v21 = Math.abs(_v2),
              _v22 = Math.abs(_v3);
            if (_v20 < 0) {
              let _v0 = Math.sqrt(1 - _v20 / (_v16 * _v17));
              _v21 *= _v0, _v22 *= _v0;
            } else _v9 = (_v4 === _v5 ? -1 : 1) * Math.sqrt(_v20 / (_v16 * _v18 + _v17 * _v19));
            let _v23 = _v9 * _v21 * _v15 / _v22,
              _v24 = -_v9 * _v22 * _v14 / _v21,
              _v25 = _v13 * _v23 - _v12 * _v24 + .5 * _v0,
              _v26 = _v12 * _v23 + _v13 * _v24 + .5 * _v1,
              _v27 = _v296(1, 0, (_v14 - _v23) / _v21, (_v15 - _v24) / _v22),
              _v28 = _v296((_v14 - _v23) / _v21, (_v15 - _v24) / _v22, (-_v14 - _v23) / _v21, (-_v15 - _v24) / _v22);
            0 === _v5 && _v28 > 0 ? _v28 -= 2 * _v10 : 1 === _v5 && _v28 < 0 && (_v28 += 2 * _v10);
            let _v29 = Math.ceil(Math.abs(_v28 / _v10 * 2)),
              _v30 = Array(_v29),
              _v31 = _v28 / _v29,
              _v32 = 8 / 3 * Math.sin(_v31 / 4) * Math.sin(_v31 / 4) / Math.sin(_v31 / 2),
              _v33 = _v27 + _v31;
            for (let _v0 = 0; _v0 < _v29; _v0++) _v30[_v0] = _v295(_v27, _v33, _v13, _v12, _v21, _v22, _v25, _v26, _v32, _v7, _v8), _v7 = _v30[_v0][5], _v8 = _v30[_v0][6], _v27 = _v33, _v33 += _v31;
            return _v30;
          })(_v9 - _v0, _v10 - _v1, _v4, _v5, _v7, _v8, _v6);
        for (let _v0 = 0, _v1 = _v11.length; _v0 < _v1; _v0++) _v11[_v0][1] += _v0, _v11[_v0][2] += _v1, _v11[_v0][3] += _v0, _v11[_v0][4] += _v1, _v11[_v0][5] += _v0, _v11[_v0][6] += _v1;
        return _v11;
      },
      _v299 = _v0 => {
        let _v1 = 0,
          _v2 = 0,
          _v3 = 0,
          _v4 = 0,
          _v5 = [],
          _v6,
          _v7 = 0,
          _v8 = 0;
        for (let _v0 of _v0) {
          let _v0,
            _v1 = [..._v0];
          switch (_v1[0]) {
            case "l":
              _v1[1] += _v1, _v1[2] += _v2;
            case "L":
              _v0 = ["L", _v1 = _v1[1], _v2 = _v1[2]];
              break;
            case "h":
              _v1[1] += _v1;
            case "H":
              _v0 = ["L", _v1 = _v1[1], _v2];
              break;
            case "v":
              _v1[1] += _v2;
            case "V":
              _v0 = ["L", _v1, _v2 = _v1[1]];
              break;
            case "m":
              _v1[1] += _v1, _v1[2] += _v2;
            case "M":
              _v1 = _v1[1], _v2 = _v1[2], _v3 = _v1[1], _v4 = _v1[2], _v0 = ["M", _v1, _v2];
              break;
            case "c":
              _v1[1] += _v1, _v1[2] += _v2, _v1[3] += _v1, _v1[4] += _v2, _v1[5] += _v1, _v1[6] += _v2;
            case "C":
              _v7 = _v1[3], _v8 = _v1[4], _v1 = _v1[5], _v2 = _v1[6], _v0 = ["C", _v1[1], _v1[2], _v7, _v8, _v1, _v2];
              break;
            case "s":
              _v1[1] += _v1, _v1[2] += _v2, _v1[3] += _v1, _v1[4] += _v2;
            case "S":
              "C" === _v6 ? (_v7 = 2 * _v1 - _v7, _v8 = 2 * _v2 - _v8) : (_v7 = _v1, _v8 = _v2), _v1 = _v1[3], _v2 = _v1[4], _v7 = (_v0 = ["C", _v7, _v8, _v1[1], _v1[2], _v1, _v2])[3], _v8 = _v0[4];
              break;
            case "q":
              _v1[1] += _v1, _v1[2] += _v2, _v1[3] += _v1, _v1[4] += _v2;
            case "Q":
              _v7 = _v1[1], _v8 = _v1[2], _v0 = ["Q", _v7, _v8, _v1 = _v1[3], _v2 = _v1[4]];
              break;
            case "t":
              _v1[1] += _v1, _v1[2] += _v2;
            case "T":
              "Q" === _v6 ? (_v7 = 2 * _v1 - _v7, _v8 = 2 * _v2 - _v8) : (_v7 = _v1, _v8 = _v2), _v0 = ["Q", _v7, _v8, _v1 = _v1[1], _v2 = _v1[2]];
              break;
            case "a":
              _v1[6] += _v1, _v1[7] += _v2;
            case "A":
              _v298(_v1, _v2, _v1).forEach(_v0 => _v5.push(_v0)), _v1 = _v1[6], _v2 = _v1[7];
              break;
            case "z":
            case "Z":
              _v1 = _v3, _v2 = _v4, _v0 = ["Z"];
          }
          _v0 ? (_v5.push(_v0), _v6 = _v0[0]) : _v6 = "";
        }
        return _v5;
      },
      _v300 = (_v0, _v1, _v2, _v3) => Math.sqrt((_v2 - _v0) ** 2 + (_v3 - _v1) ** 2),
      _v301 = (_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7) => _v0 => {
        let _v1 = _v0 ** 3,
          _v2 = 3 * _v0 ** 2 * (1 - _v0),
          _v3 = 3 * _v0 * (1 - _v0) ** 2,
          _v4 = (1 - _v0) ** 3;
        return new _v44(_v6 * _v1 + _v4 * _v2 + _v2 * _v3 + _v0 * _v4, _v7 * _v1 + _v5 * _v2 + _v3 * _v3 + _v1 * _v4);
      },
      _v302 = _v0 => 2 * _v0 * (1 - _v0),
      _v303 = (_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7) => _v0 => {
        let _v1 = _v0 ** 2,
          _v2 = _v302(_v0),
          _v3 = (1 - _v0) ** 2;
        return Math.atan2(3 * (_v3 * (_v3 - _v1) + _v2 * (_v5 - _v3) + _v1 * (_v7 - _v5)), 3 * (_v3 * (_v2 - _v0) + _v2 * (_v4 - _v2) + _v1 * (_v6 - _v4)));
      },
      _v304 = (_v0, _v1, _v2, _v3, _v4, _v5) => _v0 => {
        let _v1 = _v0 ** 2,
          _v2 = _v302(_v0),
          _v3 = (1 - _v0) ** 2;
        return new _v44(_v4 * _v1 + _v2 * _v2 + _v0 * _v3, _v5 * _v1 + _v3 * _v2 + _v1 * _v3);
      },
      _v305 = (_v0, _v1, _v2, _v3, _v4, _v5) => _v0 => {
        let _v1 = 1 - _v0;
        return Math.atan2(2 * (_v1 * (_v3 - _v1) + _v0 * (_v5 - _v3)), 2 * (_v1 * (_v2 - _v0) + _v0 * (_v4 - _v2)));
      },
      _v306 = (_v0, _v1, _v2) => {
        let _v3 = new _v44(_v1, _v2),
          _v4 = 0;
        for (let _v0 = 1; _v0 <= 100; _v0 += 1) {
          let _v0 = _v0(_v0 / 100);
          _v4 += _v300(_v3.x, _v3.y, _v0.x, _v0.y), _v3 = _v0;
        }
        return _v4;
      },
      _v307 = _v0 => {
        let _v1 = 0,
          _v2 = 0,
          _v3 = 0,
          _v4 = 0,
          _v5 = 0,
          _v6,
          _v7,
          _v8 = [];
        for (let _v0 of _v0) {
          let _v0 = {
            x: _v2,
            y: _v3,
            command: _v0[0],
            length: 0
          };
          switch (_v0[0]) {
            case "M":
              (_v7 = _v0).x = _v4 = _v2 = _v0[1], _v7.y = _v5 = _v3 = _v0[2];
              break;
            case "L":
              (_v7 = _v0).length = _v300(_v2, _v3, _v0[1], _v0[2]), _v2 = _v0[1], _v3 = _v0[2];
              break;
            case "C":
              _v6 = _v301(_v2, _v3, _v0[1], _v0[2], _v0[3], _v0[4], _v0[5], _v0[6]), (_v7 = _v0).iterator = _v6, _v7.angleFinder = _v303(_v2, _v3, _v0[1], _v0[2], _v0[3], _v0[4], _v0[5], _v0[6]), _v7.length = _v306(_v6, _v2, _v3), _v2 = _v0[5], _v3 = _v0[6];
              break;
            case "Q":
              _v6 = _v304(_v2, _v3, _v0[1], _v0[2], _v0[3], _v0[4]), (_v7 = _v0).iterator = _v6, _v7.angleFinder = _v305(_v2, _v3, _v0[1], _v0[2], _v0[3], _v0[4]), _v7.length = _v306(_v6, _v2, _v3), _v2 = _v0[3], _v3 = _v0[4];
              break;
            case "Z":
              (_v7 = _v0).destX = _v4, _v7.destY = _v5, _v7.length = _v300(_v2, _v3, _v4, _v5), _v2 = _v4, _v3 = _v5;
          }
          _v1 += _v7.length, _v8.push(_v7);
        }
        return _v8.push({
          length: _v1,
          x: _v2,
          y: _v3
        }), _v8;
      },
      _v308 = function (_v0, _v1) {
        let _v2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _v307(_v0),
          _v3 = 0;
        for (; _v1 - _v2[_v3].length > 0 && _v3 < _v2.length - 2;) _v1 -= _v2[_v3].length, _v3++;
        let _v4 = _v2[_v3],
          _v5 = _v1 / _v4.length,
          _v6 = _v0[_v3];
        switch (_v4.command) {
          case "M":
            return {
              x: _v4.x,
              y: _v4.y,
              angle: 0
            };
          case "Z":
            return _v5(_v5({}, new _v44(_v4.x, _v4.y).lerp(new _v44(_v4.destX, _v4.destY), _v5)), {}, {
              angle: Math.atan2(_v4.destY - _v4.y, _v4.destX - _v4.x)
            });
          case "L":
            return _v5(_v5({}, new _v44(_v4.x, _v4.y).lerp(new _v44(_v6[1], _v6[2]), _v5)), {}, {
              angle: Math.atan2(_v6[2] - _v4.y, _v6[1] - _v4.x)
            });
          case "C":
          case "Q":
            return ((_v0, _v1) => {
              let _v2 = 0,
                _v3 = 0,
                _v4 = {
                  x: _v0.x,
                  y: _v0.y
                },
                _v5 = _v5({}, _v4),
                _v6,
                _v7 = .01,
                _v8 = 0,
                _v9 = _v0.iterator,
                _v10 = _v0.angleFinder;
              for (; _v3 < _v1 && _v7 > 1e-4;) _v5 = _v9(_v2), _v8 = _v2, (_v6 = _v300(_v4.x, _v4.y, _v5.x, _v5.y)) + _v3 > _v1 ? (_v2 -= _v7, _v7 /= 2) : (_v4 = _v5, _v2 += _v7, _v3 += _v6);
              return _v5(_v5({}, _v5), {}, {
                angle: _v10(_v8)
              });
            })(_v4, _v1);
        }
      },
      _v309 = _v0 => {
        _v0 = _v247(_v0);
        let _v1 = [];
        for (let _v0 of _v0.matchAll(RegExp(_v293, "gi"))) {
          let _v0,
            _v1 = _v0[0],
            _v2 = [];
          do {
            if (!(_v0 = RegExp(_v293, "i").exec(_v1))) break;
            let _v0 = _v0.filter(_v0 => _v0);
            _v0.shift();
            let _v1 = _v0.map(_v0 => {
              let _v1 = Number.parseFloat(_v0);
              return Number.isNaN(_v1) ? _v0 : _v1;
            });
            if (_v2.push(_v1), _v0.length <= 1) break;
            _v0.shift(), _v1 = _v1.replace(new RegExp("".concat(_v0.join(" ?"), " ?$")), "");
          } while (_v0);
          _v2.reverse().forEach((_v0, _v1) => {
            let _v2 = _v294[_v0[0]];
            _v1 > 0 && ("l" == _v2 || "L" == _v2) && (_v0[0] = _v2), _v1.push(_v0);
          });
        }
        return _v1;
      },
      _v310 = function (_v0) {
        let _v1,
          _v2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          _v3 = new _v44(_v0[0]),
          _v4 = new _v44(_v0[1]),
          _v5 = 1,
          _v6 = 0,
          _v7 = [],
          _v8 = _v0.length,
          _v9 = _v8 > 2;
        for (_v9 && (_v5 = _v0[2].x < _v4.x ? -1 : +(_v0[2].x !== _v4.x), _v6 = _v0[2].y < _v4.y ? -1 : +(_v0[2].y !== _v4.y)), _v7.push(["M", _v3.x - _v5 * _v2, _v3.y - _v6 * _v2]), _v1 = 1; _v1 < _v8; _v1++) {
          if (!_v3.eq(_v4)) {
            let _v0 = _v3.midPointFrom(_v4);
            _v7.push(["Q", _v3.x, _v3.y, _v0.x, _v0.y]);
          }
          _v3 = _v0[_v1], _v1 + 1 < _v0.length && (_v4 = _v0[_v1 + 1]);
        }
        return _v9 && (_v5 = _v3.x > _v0[_v1 - 2].x ? 1 : _v3.x === _v0[_v1 - 2].x ? 0 : -1, _v6 = _v3.y > _v0[_v1 - 2].y ? 1 : _v3.y === _v0[_v1 - 2].y ? 0 : -1), _v7.push(["L", _v3.x + _v5 * _v2, _v3.y + _v6 * _v2]), _v7;
      },
      _v311 = (_v0, _v1) => _v0.map(_v0 => _v0.map((_v0, _v1) => 0 === _v1 || void 0 === _v1 ? _v0 : _v85(_v0, _v1)).join(" ")).join(" ");
    function _v312(_v0) {
      let _v1 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        _v2 = _v1.onComplete || _v24,
        _v3 = new (_v20().XMLHttpRequest)(),
        _v4 = _v1.signal,
        _v5 = function () {
          _v3.abort();
        },
        _v6 = function () {
          _v4 && _v4.removeEventListener("abort", _v5), _v3.onerror = _v3.ontimeout = _v24;
        };
      if (_v4 && _v4.aborted) throw new _v14("request");
      return _v4 && _v4.addEventListener("abort", _v5, {
        once: !0
      }), _v3.onreadystatechange = function () {
        4 === _v3.readyState && (_v6(), _v2(_v3), _v3.onreadystatechange = _v24);
      }, _v3.onerror = _v3.ontimeout = _v6, _v3.open("get", _v0, !0), _v3.send(), _v3;
    }
    let _v313 = (_v0, _v1) => {
      let _v2 = _v0._findCenterFromElement();
      _v0.transformMatrix && ((_v0 => {
        if (_v0.transformMatrix) {
          let {
            scaleX: _v0,
            scaleY: _v1,
            angle: _v2,
            skewX: _v3
          } = _v64(_v0.transformMatrix);
          _v0.flipX = !1, _v0.flipY = !1, _v0.set("scaleX", _v0), _v0.set("scaleY", _v1), _v0.angle = _v2, _v0.skewX = _v3, _v0.skewY = 0;
        }
      })(_v0), _v2 = _v2.transform(_v0.transformMatrix)), delete _v0.transformMatrix, _v1 && (_v0.scaleX *= _v1.scaleX, _v0.scaleY *= _v1.scaleY, _v0.cropX = _v1.cropX, _v0.cropY = _v1.cropY, _v2.x += _v1.offsetLeft, _v2.y += _v1.offsetTop, _v0.width = _v1.width, _v0.height = _v1.height), _v0.setPositionByOrigin(_v2, _v29, _v29);
    };
    var _v314 = Object.freeze({
      __proto__: null,
      addTransformToObject: _v112,
      animate: _v159,
      animateColor: _v160,
      applyTransformToObject: _v113,
      calcAngleBetweenVectors: _v166,
      calcDimensionsMatrix: _v71,
      calcPlaneChangeMatrix: _v117,
      calcVectorRotation: _v167,
      cancelAnimFrame: _v50,
      capValue: _v154,
      composeMatrix: _v72,
      copyCanvasElement: _v0 => {
        var _v1;
        let _v2 = _v53();
        return _v2.width = _v0.width, _v2.height = _v0.height, null == (_v1 = _v2.getContext("2d")) || _v1.drawImage(_v0, 0, 0), _v2;
      },
      cos: _v42,
      createCanvasElement: _v53,
      createImage: _v54,
      createRotateMatrix: _v66,
      createScaleMatrix: _v67,
      createSkewXMatrix: _v69,
      createSkewYMatrix: _v70,
      createTranslateMatrix: _v65,
      createVector: _v164,
      crossProduct: _v170,
      degreesToRadians: _v56,
      dotProduct: _v171,
      ease: _v147,
      enlivenObjectEnlivables: _v75,
      enlivenObjects: _v74,
      findScaleToCover: _v281,
      findScaleToFit: _v280,
      getBoundsOfCurve: _v297,
      getOrthonormalVector: _v169,
      getPathSegmentsInfo: _v307,
      getPointOnPath: _v308,
      getPointer: _v107,
      getRandomInt: _v39,
      getRegularPolygonPath: (_v0, _v1) => {
        let _v2 = 2 * Math.PI / _v0,
          _v3 = -_v25;
        _v0 % 2 == 0 && (_v3 += _v2 / 2);
        let _v4 = Array(_v0 + 1);
        for (let _v0 = 0; _v0 < _v0; _v0++) {
          let _v0 = _v0 * _v2 + _v3,
            {
              x: _v1,
              y: _v2
            } = new _v44(_v42(_v0), _v43(_v0)).scalarMultiply(_v1);
          _v4[_v0] = [0 === _v0 ? "M" : "L", _v1, _v2];
        }
        return _v4[_v0] = ["Z"], _v4;
      },
      getSmoothPathFromPoints: _v310,
      getSvgAttributes: _v0 => {
        let _v1 = ["instantiated_by_use", "style", "id", "class"];
        switch (_v0) {
          case "linearGradient":
            return _v1.concat(["x1", "y1", "x2", "y2", "gradientUnits", "gradientTransform"]);
          case "radialGradient":
            return _v1.concat(["gradientUnits", "gradientTransform", "cx", "cy", "r", "fx", "fy", "fr"]);
          case "stop":
            return _v1.concat(["offset", "stop-color", "stop-opacity"]);
        }
        return _v1;
      },
      getUnitVector: _v168,
      groupSVGElements: (_v0, _v1) => _v0 && 1 === _v0.length ? _v0[0] : new _v279(_v0, _v1),
      hasStyleChanged: _v241,
      invertTransform: _v60,
      isBetweenVectors: _v172,
      isIdentityMatrix: _v58,
      isTouchEvent: _v108,
      isTransparent: _v231,
      joinPath: _v311,
      loadImage: _v73,
      magnitude: _v165,
      makeBoundingBoxFromPoints: _v110,
      makePathSimpler: _v299,
      matrixToSVG: _v88,
      mergeClipPaths: (_v0, _v1) => {
        var _v2;
        let _v3 = _v0,
          _v4 = _v1;
        _v3.inverted && !_v4.inverted && (_v3 = _v1, _v4 = _v0), _v120(_v4, null == (_v2 = _v4.group) ? void 0 : _v2.calcTransformMatrix(), _v3.calcTransformMatrix());
        let _v5 = _v3.inverted && _v4.inverted;
        return _v5 && (_v3.inverted = _v4.inverted = !1), new _v279([_v3], {
          clipPath: _v4,
          inverted: _v5
        });
      },
      multiplyTransformMatrices: _v61,
      multiplyTransformMatrixArray: _v62,
      parsePath: _v309,
      parsePreserveAspectRatioAttribute: _v87,
      parseUnit: _v86,
      pick: _v76,
      projectStrokeOnPoints: _v236,
      qrDecompose: _v64,
      radiansToDegrees: _v57,
      removeFromArray: _v41,
      removeTransformFromObject: (_v0, _v1) => {
        let _v2 = _v61(_v60(_v1), _v0.calcOwnMatrix());
        _v113(_v0, _v2);
      },
      removeTransformMatrixForSvgParsing: _v313,
      request: _v312,
      requestAnimFrame: _v49,
      resetObjectTransform: _v114,
      rotatePoint: (_v0, _v1, _v2) => _v0.rotate(_v2, _v1),
      rotateVector: _v163,
      saveObjectTransform: _v115,
      sendObjectToPlane: _v120,
      sendPointToPlane: _v118,
      sendVectorToPlane: _v119,
      setStyle: _v99,
      sin: _v43,
      sizeAfterTransform: _v116,
      string: _v240,
      stylesFromArray: _v243,
      stylesToArray: _v242,
      toDataURL: _v55,
      toFixed: _v85,
      transformPath: (_v0, _v1, _v2) => (_v2 && (_v1 = _v61(_v1, [1, 0, 0, 1, -_v2.x, -_v2.y])), _v0.map(_v0 => {
        let _v1 = [..._v0];
        for (let _v0 = 1; _v0 < _v0.length - 1; _v0 += 2) {
          let {
            x: _v0,
            y: _v1
          } = _v59({
            x: _v0[_v0],
            y: _v0[_v0 + 1]
          }, _v1);
          _v1[_v0] = _v0, _v1[_v0 + 1] = _v1;
        }
        return _v1;
      })),
      transformPoint: _v59
    });
    class _v315 extends _v103 {
      constructor(_v0) {
        let {
          allowTouchScrolling: _v1 = !1,
          containerClass: _v2 = ""
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        super(_v0), _v7(this, "upper", void 0), _v7(this, "container", void 0);
        const {
            el: _v3
          } = this.lower,
          _v4 = this.createUpperCanvas();
        this.upper = {
          el: _v4,
          ctx: _v4.getContext("2d")
        }, this.applyCanvasStyle(_v3, {
          allowTouchScrolling: _v1
        }), this.applyCanvasStyle(_v4, {
          allowTouchScrolling: _v1
        });
        const _v5 = this.createContainerElement();
        _v5.classList.add(_v2), _v3.parentNode && _v3.parentNode.replaceChild(_v5, _v3), _v5.append(_v3, _v4), this.container = _v5;
      }
      createUpperCanvas() {
        let {
            el: _v0
          } = this.lower,
          _v1 = _v53();
        return _v1.className = _v0.className, _v1.classList.remove("lower-canvas"), _v1.classList.add("upper-canvas"), _v1.setAttribute("data-fabric", "top"), _v1.style.cssText = _v0.style.cssText, _v1.setAttribute("draggable", "true"), _v1;
      }
      createContainerElement() {
        let _v0 = _v19().createElement("div");
        return _v0.setAttribute("data-fabric", "wrapper"), _v99(_v0, {
          position: "relative"
        }), _v102(_v0), _v0;
      }
      applyCanvasStyle(_v0, _v1) {
        let _v2,
          {
            allowTouchScrolling: _v3
          } = _v1;
        _v99(_v0, {
          position: "absolute",
          left: "0",
          top: "0"
        }), _v99(_v0, {
          "touch-action": _v2 = _v3 ? "manipulation" : _v33,
          "-ms-touch-action": _v2
        }), _v102(_v0);
      }
      setDimensions(_v0, _v1) {
        super.setDimensions(_v0, _v1);
        let {
          el: _v2,
          ctx: _v3
        } = this.upper;
        _v100(_v2, _v3, _v0, _v1);
      }
      setCSSDimensions(_v0) {
        super.setCSSDimensions(_v0), _v101(this.upper.el, _v0), _v101(this.container, _v0);
      }
      cleanupDOM(_v0) {
        let _v1 = this.container,
          {
            el: _v2
          } = this.lower,
          {
            el: _v3
          } = this.upper;
        super.cleanupDOM(_v0), _v1.removeChild(_v3), _v1.removeChild(_v2), _v1.parentNode && _v1.parentNode.replaceChild(_v2, _v1);
      }
      dispose() {
        super.dispose(), _v18().dispose(this.upper.el), delete this.upper, delete this.container;
      }
    }
    class _v316 extends _v105 {
      constructor() {
        super(...arguments), _v7(this, "targets", []), _v7(this, "_hoveredTargets", []), _v7(this, "_objectsToRender", void 0), _v7(this, "_currentTransform", null), _v7(this, "_groupSelector", null), _v7(this, "contextTopDirty", !1);
      }
      static getDefaults() {
        return _v5(_v5({}, super.getDefaults()), _v316.ownDefaults);
      }
      get upperCanvasEl() {
        var _v0;
        return null == (_v0 = this.elements.upper) ? void 0 : _v0.el;
      }
      get contextTop() {
        var _v0;
        return null == (_v0 = this.elements.upper) ? void 0 : _v0.ctx;
      }
      get wrapperEl() {
        return this.elements.container;
      }
      initElements(_v0) {
        this.elements = new _v315(_v0, {
          allowTouchScrolling: this.allowTouchScrolling,
          containerClass: this.containerClass
        }), this._createCacheCanvas();
      }
      _onObjectAdded(_v0) {
        this._objectsToRender = void 0, super._onObjectAdded(_v0);
      }
      _onObjectRemoved(_v0) {
        this._objectsToRender = void 0, _v0 === this._activeObject && (this.fire("before:selection:cleared", {
          deselected: [_v0]
        }), this._discardActiveObject(), this.fire("selection:cleared", {
          deselected: [_v0]
        }), _v0.fire("deselected", {
          target: _v0
        })), _v0 === this._hoveredTarget && (this._hoveredTarget = void 0, this._hoveredTargets = []), super._onObjectRemoved(_v0);
      }
      _onStackOrderChanged() {
        this._objectsToRender = void 0, super._onStackOrderChanged();
      }
      _chooseObjectsToRender() {
        let _v0 = this._activeObject;
        return !this.preserveObjectStacking && _v0 ? this._objects.filter(_v0 => !_v0.group && _v0 !== _v0).concat(_v0) : this._objects;
      }
      renderAll() {
        this.cancelRequestedRender(), this.destroyed || (!this.contextTopDirty || this._groupSelector || this.isDrawingMode || (this.clearContext(this.contextTop), this.contextTopDirty = !1), this.hasLostContext && (this.renderTopLayer(this.contextTop), this.hasLostContext = !1), this._objectsToRender || (this._objectsToRender = this._chooseObjectsToRender()), this.renderCanvas(this.getContext(), this._objectsToRender));
      }
      renderTopLayer(_v0) {
        _v0.save(), this.isDrawingMode && this._isCurrentlyDrawing && (this.freeDrawingBrush && this.freeDrawingBrush._render(), this.contextTopDirty = !0), this.selection && this._groupSelector && (this._drawSelection(_v0), this.contextTopDirty = !0), _v0.restore();
      }
      renderTop() {
        let _v0 = this.contextTop;
        this.clearContext(_v0), this.renderTopLayer(_v0), this.fire("after:render", {
          ctx: _v0
        });
      }
      setTargetFindTolerance(_v0) {
        _v0 = Math.round(_v0), this.targetFindTolerance = _v0;
        let _v1 = this.getRetinaScaling(),
          _v2 = Math.ceil((2 * _v0 + 1) * _v1);
        this.pixelFindCanvasEl.width = this.pixelFindCanvasEl.height = _v2, this.pixelFindContext.scale(_v1, _v1);
      }
      isTargetTransparent(_v0, _v1, _v2) {
        let _v3 = this.targetFindTolerance,
          _v4 = this.pixelFindContext;
        this.clearContext(_v4), _v4.save(), _v4.translate(-_v1 + _v3, -_v2 + _v3), _v4.transform(...this.viewportTransform);
        let _v5 = _v0.selectionBackgroundColor;
        _v0.selectionBackgroundColor = "", _v0.render(_v4), _v0.selectionBackgroundColor = _v5, _v4.restore();
        let _v6 = Math.round(_v3 * this.getRetinaScaling());
        return _v231(_v4, _v6, _v6, _v6);
      }
      _isSelectionKeyPressed(_v0) {
        let _v1 = this.selectionKey;
        return !!_v1 && (Array.isArray(_v1) ? !!_v1.find(_v0 => !!_v0 && !0 === _v0[_v0]) : _v0[_v1]);
      }
      _shouldClearSelection(_v0, _v1) {
        let _v2 = this.getActiveObjects(),
          _v3 = this._activeObject;
        return !!(!_v1 || _v1 && _v3 && _v2.length > 1 && -1 === _v2.indexOf(_v1) && _v3 !== _v1 && !this._isSelectionKeyPressed(_v0) || _v1 && !_v1.evented || _v1 && !_v1.selectable && _v3 && _v3 !== _v1);
      }
      _shouldCenterTransform(_v0, _v1, _v2) {
        let _v3;
        if (_v0) return "scale" === _v1 || "scaleX" === _v1 || "scaleY" === _v1 || "resizing" === _v1 ? _v3 = this.centeredScaling || _v0.centeredScaling : "rotate" === _v1 && (_v3 = this.centeredRotation || _v0.centeredRotation), _v3 ? !_v2 : _v2;
      }
      _getOriginFromCorner(_v0, _v1) {
        let _v2 = {
          x: _v0.originX,
          y: _v0.originY
        };
        return _v1 && (["ml", "tl", "bl"].includes(_v1) ? _v2.x = _v32 : ["mr", "tr", "br"].includes(_v1) && (_v2.x = _v30), ["tl", "mt", "tr"].includes(_v1) ? _v2.y = _v31 : ["bl", "mb", "br"].includes(_v1) && (_v2.y = "top")), _v2;
      }
      _setupCurrentTransform(_v0, _v1, _v2) {
        var _v3;
        let _v4 = _v1.group ? _v118(this.getScenePoint(_v0), void 0, _v1.group.calcTransformMatrix()) : this.getScenePoint(_v0),
          {
            key: _v5 = "",
            control: _v6
          } = _v1.getActiveControl() || {},
          _v7 = _v2 && _v6 ? null == (_v3 = _v6.getActionHandler(_v0, _v1, _v6)) ? void 0 : _v3.bind(_v6) : _v130,
          _v8 = ((_v0, _v1, _v2, _v3) => {
            if (!_v1 || !_v0) return "drag";
            let _v4 = _v3.controls[_v1];
            return _v4.getActionName(_v2, _v4, _v3);
          })(_v2, _v5, _v0, _v1),
          _v9 = _v0[this.centeredKey],
          _v10 = this._shouldCenterTransform(_v1, _v8, _v9) ? {
            x: _v29,
            y: _v29
          } : this._getOriginFromCorner(_v1, _v5),
          _v11 = {
            target: _v1,
            action: _v8,
            actionHandler: _v7,
            actionPerformed: !1,
            corner: _v5,
            scaleX: _v1.scaleX,
            scaleY: _v1.scaleY,
            skewX: _v1.skewX,
            skewY: _v1.skewY,
            offsetX: _v4.x - _v1.left,
            offsetY: _v4.y - _v1.top,
            originX: _v10.x,
            originY: _v10.y,
            ex: _v4.x,
            ey: _v4.y,
            lastX: _v4.x,
            lastY: _v4.y,
            theta: _v56(_v1.angle),
            width: _v1.width,
            height: _v1.height,
            shiftKey: _v0.shiftKey,
            altKey: _v9,
            original: _v5(_v5({}, _v115(_v1)), {}, {
              originX: _v10.x,
              originY: _v10.y
            })
          };
        this._currentTransform = _v11, this.fire("before:transform", {
          e: _v0,
          transform: _v11
        });
      }
      setCursor(_v0) {
        this.upperCanvasEl.style.cursor = _v0;
      }
      _drawSelection(_v0) {
        let {
            x: _v1,
            y: _v2,
            deltaX: _v3,
            deltaY: _v4
          } = this._groupSelector,
          _v5 = new _v44(_v1, _v2).transform(this.viewportTransform),
          _v6 = new _v44(_v1 + _v3, _v2 + _v4).transform(this.viewportTransform),
          _v7 = this.selectionLineWidth / 2,
          _v8 = Math.min(_v5.x, _v6.x),
          _v9 = Math.min(_v5.y, _v6.y),
          _v10 = Math.max(_v5.x, _v6.x),
          _v11 = Math.max(_v5.y, _v6.y);
        this.selectionColor && (_v0.fillStyle = this.selectionColor, _v0.fillRect(_v8, _v9, _v10 - _v8, _v11 - _v9)), this.selectionLineWidth && this.selectionBorderColor && (_v0.lineWidth = this.selectionLineWidth, _v0.strokeStyle = this.selectionBorderColor, _v8 += _v7, _v9 += _v7, _v10 -= _v7, _v11 -= _v7, _v230.prototype._setLineDash.call(this, _v0, this.selectionDashArray), _v0.strokeRect(_v8, _v9, _v10 - _v8, _v11 - _v9));
      }
      findTarget(_v0) {
        if (this.skipTargetFind) return;
        let _v1 = this.getViewportPoint(_v0),
          _v2 = this._activeObject,
          _v3 = this.getActiveObjects();
        if (this.targets = [], _v2 && _v3.length >= 1) {
          if (_v2.findControl(_v1, _v108(_v0))) return _v2;else if (_v3.length > 1 && this.searchPossibleTargets([_v2], _v1)) return _v2;else if (_v2 === this.searchPossibleTargets([_v2], _v1)) if (!this.preserveObjectStacking) return _v2;else {
            let _v0 = this.targets;
            this.targets = [];
            let _v1 = this.searchPossibleTargets(this._objects, _v1);
            return _v0[this.altSelectionKey] && _v1 && _v1 !== _v2 ? (this.targets = _v0, _v2) : _v1;
          }
        }
        return this.searchPossibleTargets(this._objects, _v1);
      }
      _pointIsInObjectSelectionArea(_v0, _v1) {
        let _v2 = _v0.getCoords(),
          _v3 = this.getZoom(),
          _v4 = _v0.padding / _v3;
        if (_v4) {
          let [_v0, _v1, _v2, _v3] = _v2,
            _v4 = Math.atan2(_v1.y - _v0.y, _v1.x - _v0.x),
            _v5 = _v42(_v4) * _v4,
            _v6 = _v43(_v4) * _v4,
            _v7 = _v5 + _v6,
            _v8 = _v5 - _v6;
          _v2 = [new _v44(_v0.x - _v8, _v0.y - _v7), new _v44(_v1.x + _v7, _v1.y - _v8), new _v44(_v2.x + _v8, _v2.y + _v7), new _v44(_v3.x - _v7, _v3.y + _v8)];
        }
        return _v173.isPointInPolygon(_v1, _v2);
      }
      _checkTarget(_v0, _v1) {
        if (_v0 && _v0.visible && _v0.evented && this._pointIsInObjectSelectionArea(_v0, _v118(_v1, void 0, this.viewportTransform))) {
          if (!this.perPixelTargetFind && !_v0.perPixelTargetFind || _v0.isEditing) return !0;else if (!this.isTargetTransparent(_v0, _v1.x, _v1.y)) return !0;
        }
        return !1;
      }
      _searchPossibleTargets(_v0, _v1) {
        let _v2 = _v0.length;
        for (; _v2--;) {
          let _v0 = _v0[_v2];
          if (this._checkTarget(_v0, _v1)) {
            if (_v46(_v0) && _v0.subTargetCheck) {
              let _v0 = this._searchPossibleTargets(_v0._objects, _v1);
              _v0 && this.targets.push(_v0);
            }
            return _v0;
          }
        }
      }
      searchPossibleTargets(_v0, _v1) {
        let _v2 = this._searchPossibleTargets(_v0, _v1);
        if (_v2 && _v46(_v2) && _v2.interactive && this.targets[0]) {
          let _v0 = this.targets;
          for (let _v0 = _v0.length - 1; _v0 > 0; _v0--) {
            let _v0 = _v0[_v0];
            if (!(_v46(_v0) && _v0.interactive)) return _v0;
          }
          return _v0[0];
        }
        return _v2;
      }
      getViewportPoint(_v0) {
        return this._pointer ? this._pointer : this.getPointer(_v0, !0);
      }
      getScenePoint(_v0) {
        return this._absolutePointer ? this._absolutePointer : this.getPointer(_v0);
      }
      getPointer(_v0) {
        let _v1 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          _v2 = this.upperCanvasEl,
          _v3 = _v2.getBoundingClientRect(),
          _v4 = _v107(_v0),
          _v5 = _v3.width || 0,
          _v6 = _v3.height || 0;
        (!_v5 || !_v6) && ("top" in _v3 && _v31 in _v3 && (_v6 = Math.abs(_v3.top - _v3.bottom)), _v32 in _v3 && _v30 in _v3 && (_v5 = Math.abs(_v3.right - _v3.left))), this.calcOffset(), _v4.x = _v4.x - this._offset.left, _v4.y = _v4.y - this._offset.top, _v1 || (_v4 = _v118(_v4, void 0, this.viewportTransform));
        let _v7 = this.getRetinaScaling();
        1 !== _v7 && (_v4.x /= _v7, _v4.y /= _v7);
        let _v8 = 0 === _v5 || 0 === _v6 ? new _v44(1, 1) : new _v44(_v2.width / _v5, _v2.height / _v6);
        return _v4.multiply(_v8);
      }
      _setDimensionsImpl(_v0, _v1) {
        this._resetTransformEventData(), super._setDimensionsImpl(_v0, _v1), this._isCurrentlyDrawing && this.freeDrawingBrush && this.freeDrawingBrush._setBrushStyles(this.contextTop);
      }
      _createCacheCanvas() {
        this.pixelFindCanvasEl = _v53(), this.pixelFindContext = this.pixelFindCanvasEl.getContext("2d", {
          willReadFrequently: !0
        }), this.setTargetFindTolerance(this.targetFindTolerance);
      }
      getTopContext() {
        return this.elements.upper.ctx;
      }
      getSelectionContext() {
        return this.elements.upper.ctx;
      }
      getSelectionElement() {
        return this.elements.upper.el;
      }
      getActiveObject() {
        return this._activeObject;
      }
      getActiveObjects() {
        let _v0 = this._activeObject;
        return _v95(_v0) ? _v0.getObjects() : _v0 ? [_v0] : [];
      }
      _fireSelectionEvents(_v0, _v1) {
        let _v2 = !1,
          _v3 = !1,
          _v4 = this.getActiveObjects(),
          _v5 = [],
          _v6 = [];
        _v0.forEach(_v0 => {
          _v4.includes(_v0) || (_v2 = !0, _v0.fire("deselected", {
            e: _v1,
            target: _v0
          }), _v6.push(_v0));
        }), _v4.forEach(_v0 => {
          _v0.includes(_v0) || (_v2 = !0, _v0.fire("selected", {
            e: _v1,
            target: _v0
          }), _v5.push(_v0));
        }), _v0.length > 0 && _v4.length > 0 ? (_v3 = !0, _v2 && this.fire("selection:updated", {
          e: _v1,
          selected: _v5,
          deselected: _v6
        })) : _v4.length > 0 ? (_v3 = !0, this.fire("selection:created", {
          e: _v1,
          selected: _v5
        })) : _v0.length > 0 && (_v3 = !0, this.fire("selection:cleared", {
          e: _v1,
          deselected: _v6
        })), _v3 && (this._objectsToRender = void 0);
      }
      setActiveObject(_v0, _v1) {
        let _v2 = this.getActiveObjects(),
          _v3 = this._setActiveObject(_v0, _v1);
        return this._fireSelectionEvents(_v2, _v1), _v3;
      }
      _setActiveObject(_v0, _v1) {
        let _v2 = this._activeObject;
        return !(_v2 === _v0 || !this._discardActiveObject(_v1, _v0) && this._activeObject || _v0.onSelect({
          e: _v1
        })) && (this._activeObject = _v0, _v95(_v0) && _v2 !== _v0 && (_v0.set("canvas", this), _v0.setCoords()), !0);
      }
      _discardActiveObject(_v0, _v1) {
        let _v2 = this._activeObject;
        return !!_v2 && !_v2.onDeselect({
          e: _v0,
          object: _v1
        }) && (this._currentTransform && this._currentTransform.target === _v2 && this.endCurrentTransform(_v0), this._activeObject = void 0, !0);
      }
      discardActiveObject(_v0) {
        let _v1 = this.getActiveObjects(),
          _v2 = this.getActiveObject();
        _v1.length && this.fire("before:selection:cleared", {
          e: _v0,
          deselected: [_v2]
        });
        let _v3 = this._discardActiveObject(_v0);
        return this._fireSelectionEvents(_v1, _v0), _v3;
      }
      endCurrentTransform(_v0) {
        let _v1 = this._currentTransform;
        this._finalizeCurrentTransform(_v0), _v1 && _v1.target && (_v1.target.isMoving = !1), this._currentTransform = null;
      }
      _finalizeCurrentTransform(_v0) {
        let _v1 = this._currentTransform,
          _v2 = _v1.target,
          _v3 = {
            e: _v0,
            target: _v2,
            transform: _v1,
            action: _v1.action
          };
        _v2._scaling && (_v2._scaling = !1), _v2.setCoords(), _v1.actionPerformed && (this.fire("object:modified", _v3), _v2.fire("modified", _v3));
      }
      setViewportTransform(_v0) {
        super.setViewportTransform(_v0);
        let _v1 = this._activeObject;
        _v1 && _v1.setCoords();
      }
      destroy() {
        let _v0 = this._activeObject;
        _v95(_v0) && (_v0.removeAll(), _v0.dispose()), delete this._activeObject, super.destroy(), this.pixelFindContext = null, this.pixelFindCanvasEl = void 0;
      }
      clear() {
        this.discardActiveObject(), this._activeObject = void 0, this.clearContext(this.contextTop), super.clear();
      }
      drawControls(_v0) {
        let _v1 = this._activeObject;
        _v1 && _v1._renderControls(_v0);
      }
      _toObject(_v0, _v1, _v2) {
        let _v3 = this._realizeGroupTransformOnObject(_v0),
          _v4 = super._toObject(_v0, _v1, _v2);
        return _v0.set(_v3), _v4;
      }
      _realizeGroupTransformOnObject(_v0) {
        let {
          group: _v1
        } = _v0;
        if (!(_v1 && _v95(_v1)) || this._activeObject !== _v1) return {};
        {
          let _v0 = _v76(_v0, ["angle", "flipX", "flipY", _v30, "scaleX", "scaleY", "skewX", "skewY", "top"]);
          return _v112(_v0, _v1.calcOwnMatrix()), _v0;
        }
      }
      _setSVGObject(_v0, _v1, _v2) {
        let _v3 = this._realizeGroupTransformOnObject(_v1);
        super._setSVGObject(_v0, _v1, _v2), _v1.set(_v3);
      }
    }
    _v7(_v316, "ownDefaults", {
      uniformScaling: !0,
      uniScaleKey: "shiftKey",
      centeredScaling: !1,
      centeredRotation: !1,
      centeredKey: "altKey",
      altActionKey: "shiftKey",
      selection: !0,
      selectionKey: "shiftKey",
      selectionColor: "rgba(100, 100, 255, 0.3)",
      selectionDashArray: [],
      selectionBorderColor: "rgba(255, 255, 255, 0.3)",
      selectionLineWidth: 1,
      selectionFullyContained: !1,
      hoverCursor: "move",
      moveCursor: "move",
      defaultCursor: "default",
      freeDrawingCursor: "crosshair",
      notAllowedCursor: "not-allowed",
      perPixelTargetFind: !1,
      targetFindTolerance: 0,
      skipTargetFind: !1,
      stopContextMenu: !1,
      fireRightClick: !1,
      fireMiddleClick: !1,
      enablePointerEvents: !1,
      containerClass: "canvas-container",
      preserveObjectStacking: !1
    });
    class _v317 {
      constructor(_v0) {
        _v7(this, "targets", []), _v7(this, "__disposer", void 0);
        const _v1 = () => {
            let {
              hiddenTextarea: _v0
            } = _v0.getActiveObject() || {};
            _v0 && _v0.focus();
          },
          _v2 = _v0.upperCanvasEl;
        _v2.addEventListener("click", _v1), this.__disposer = () => _v2.removeEventListener("click", _v1);
      }
      exitTextEditing() {
        this.target = void 0, this.targets.forEach(_v0 => {
          _v0.isEditing && _v0.exitEditing();
        });
      }
      add(_v0) {
        this.targets.push(_v0);
      }
      remove(_v0) {
        this.unregister(_v0), _v41(this.targets, _v0);
      }
      register(_v0) {
        this.target = _v0;
      }
      unregister(_v0) {
        _v0 === this.target && (this.target = void 0);
      }
      onMouseMove(_v0) {
        var _v1;
        (null == (_v1 = this.target) ? void 0 : _v1.isEditing) && this.target.updateSelectionOnMouseMove(_v0);
      }
      clear() {
        this.targets = [], this.target = void 0;
      }
      dispose() {
        this.clear(), this.__disposer(), delete this.__disposer;
      }
    }
    let _v318 = ["target", "oldTarget", "fireCanvas", "e"],
      _v319 = {
        passive: !1
      },
      _v320 = (_v0, _v1) => {
        let _v2 = _v0.getViewportPoint(_v1),
          _v3 = _v0.getScenePoint(_v1);
        return {
          viewportPoint: _v2,
          scenePoint: _v3,
          pointer: _v2,
          absolutePointer: _v3
        };
      },
      _v321 = function (_v0) {
        for (var _v1 = arguments.length, _v2 = Array(_v1 > 1 ? _v1 - 1 : 0), _v3 = 1; _v3 < _v1; _v3++) _v2[_v3 - 1] = arguments[_v3];
        return _v0.addEventListener(..._v2);
      },
      _v322 = function (_v0) {
        for (var _v1 = arguments.length, _v2 = Array(_v1 > 1 ? _v1 - 1 : 0), _v3 = 1; _v3 < _v1; _v3++) _v2[_v3 - 1] = arguments[_v3];
        return _v0.removeEventListener(..._v2);
      },
      _v323 = {
        mouse: {
          in: "over",
          out: "out",
          targetIn: "mouseover",
          targetOut: "mouseout",
          canvasIn: "mouse:over",
          canvasOut: "mouse:out"
        },
        drag: {
          in: "enter",
          out: "leave",
          targetIn: "dragenter",
          targetOut: "dragleave",
          canvasIn: "drag:enter",
          canvasOut: "drag:leave"
        }
      };
    class _v324 extends _v316 {
      constructor(_v0) {
        let _v1 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        super(_v0, _v1), _v7(this, "_isClick", void 0), _v7(this, "textEditingManager", new _v317(this)), ["_onMouseDown", "_onTouchStart", "_onMouseMove", "_onMouseUp", "_onTouchEnd", "_onResize", "_onMouseWheel", "_onMouseOut", "_onMouseEnter", "_onContextMenu", "_onDoubleClick", "_onDragStart", "_onDragEnd", "_onDragProgress", "_onDragOver", "_onDragEnter", "_onDragLeave", "_onDrop"].forEach(_v0 => {
          this[_v0] = this[_v0].bind(this);
        }), this.addOrRemove(_v321, "add");
      }
      _getEventPrefix() {
        return this.enablePointerEvents ? "pointer" : "mouse";
      }
      addOrRemove(_v0, _v1) {
        let _v2 = this.upperCanvasEl,
          _v3 = this._getEventPrefix();
        _v0(_v98(_v2), "resize", this._onResize), _v0(_v2, _v3 + "down", this._onMouseDown), _v0(_v2, "".concat(_v3, "move"), this._onMouseMove, _v319), _v0(_v2, "".concat(_v3, "out"), this._onMouseOut), _v0(_v2, "".concat(_v3, "enter"), this._onMouseEnter), _v0(_v2, "wheel", this._onMouseWheel), _v0(_v2, "contextmenu", this._onContextMenu), _v0(_v2, "dblclick", this._onDoubleClick), _v0(_v2, "dragstart", this._onDragStart), _v0(_v2, "dragend", this._onDragEnd), _v0(_v2, "dragover", this._onDragOver), _v0(_v2, "dragenter", this._onDragEnter), _v0(_v2, "dragleave", this._onDragLeave), _v0(_v2, "drop", this._onDrop), this.enablePointerEvents || _v0(_v2, "touchstart", this._onTouchStart, _v319);
      }
      removeListeners() {
        this.addOrRemove(_v322, "remove");
        let _v0 = this._getEventPrefix(),
          _v1 = _v97(this.upperCanvasEl);
        _v322(_v1, "".concat(_v0, "up"), this._onMouseUp), _v322(_v1, "touchend", this._onTouchEnd, _v319), _v322(_v1, "".concat(_v0, "move"), this._onMouseMove, _v319), _v322(_v1, "touchmove", this._onMouseMove, _v319);
      }
      _onMouseWheel(_v0) {
        this.__onMouseWheel(_v0);
      }
      _onMouseOut(_v0) {
        let _v1 = this._hoveredTarget,
          _v2 = _v5({
            e: _v0
          }, _v320(this, _v0));
        this.fire("mouse:out", _v5(_v5({}, _v2), {}, {
          target: _v1
        })), this._hoveredTarget = void 0, _v1 && _v1.fire("mouseout", _v5({}, _v2)), this._hoveredTargets.forEach(_v0 => {
          this.fire("mouse:out", _v5(_v5({}, _v2), {}, {
            target: _v0
          })), _v0 && _v0.fire("mouseout", _v5({}, _v2));
        }), this._hoveredTargets = [];
      }
      _onMouseEnter(_v0) {
        this._currentTransform || this.findTarget(_v0) || (this.fire("mouse:over", _v5({
          e: _v0
        }, _v320(this, _v0))), this._hoveredTarget = void 0, this._hoveredTargets = []);
      }
      _onDragStart(_v0) {
        this._isClick = !1;
        let _v1 = this.getActiveObject();
        if (_v1 && _v1.onDragStart(_v0)) {
          this._dragSource = _v1;
          let _v0 = {
            e: _v0,
            target: _v1
          };
          this.fire("dragstart", _v0), _v1.fire("dragstart", _v0), _v321(this.upperCanvasEl, "drag", this._onDragProgress);
          return;
        }
        _v109(_v0);
      }
      _renderDragEffects(_v0, _v1, _v2) {
        let _v3 = !1,
          _v4 = this._dropTarget;
        _v4 && _v4 !== _v1 && _v4 !== _v2 && (_v4.clearContextTop(), _v3 = !0), null == _v1 || _v1.clearContextTop(), _v2 !== _v1 && (null == _v2 || _v2.clearContextTop());
        let _v5 = this.contextTop;
        _v5.save(), _v5.transform(...this.viewportTransform), _v1 && (_v5.save(), _v1.transform(_v5), _v1.renderDragSourceEffect(_v0), _v5.restore(), _v3 = !0), _v2 && (_v5.save(), _v2.transform(_v5), _v2.renderDropTargetEffect(_v0), _v5.restore(), _v3 = !0), _v5.restore(), _v3 && (this.contextTopDirty = !0);
      }
      _onDragEnd(_v0) {
        let _v1 = !!_v0.dataTransfer && _v0.dataTransfer.dropEffect !== _v33,
          _v2 = _v1 ? this._activeObject : void 0,
          _v3 = {
            e: _v0,
            target: this._dragSource,
            subTargets: this.targets,
            dragSource: this._dragSource,
            didDrop: _v1,
            dropTarget: _v2
          };
        _v322(this.upperCanvasEl, "drag", this._onDragProgress), this.fire("dragend", _v3), this._dragSource && this._dragSource.fire("dragend", _v3), delete this._dragSource, this._onMouseUp(_v0);
      }
      _onDragProgress(_v0) {
        let _v1 = {
          e: _v0,
          target: this._dragSource,
          dragSource: this._dragSource,
          dropTarget: this._draggedoverTarget
        };
        this.fire("drag", _v1), this._dragSource && this._dragSource.fire("drag", _v1);
      }
      findDragTargets(_v0) {
        return this.targets = [], {
          target: this._searchPossibleTargets(this._objects, this.getViewportPoint(_v0)),
          targets: [...this.targets]
        };
      }
      _onDragOver(_v0) {
        let _v1,
          _v2 = "dragover",
          {
            target: _v3,
            targets: _v4
          } = this.findDragTargets(_v0),
          _v5 = this._dragSource,
          _v6 = {
            e: _v0,
            target: _v3,
            subTargets: _v4,
            dragSource: _v5,
            canDrop: !1,
            dropTarget: void 0
          };
        this.fire(_v2, _v6), this._fireEnterLeaveEvents(_v3, _v6), _v3 && (_v3.canDrop(_v0) && (_v1 = _v3), _v3.fire(_v2, _v6));
        for (let _v0 = 0; _v0 < _v4.length; _v0++) {
          let _v0 = _v4[_v0];
          _v0.canDrop(_v0) && (_v1 = _v0), _v0.fire(_v2, _v6);
        }
        this._renderDragEffects(_v0, _v5, _v1), this._dropTarget = _v1;
      }
      _onDragEnter(_v0) {
        let {
            target: _v1,
            targets: _v2
          } = this.findDragTargets(_v0),
          _v3 = {
            e: _v0,
            target: _v1,
            subTargets: _v2,
            dragSource: this._dragSource
          };
        this.fire("dragenter", _v3), this._fireEnterLeaveEvents(_v1, _v3);
      }
      _onDragLeave(_v0) {
        let _v1 = {
          e: _v0,
          target: this._draggedoverTarget,
          subTargets: this.targets,
          dragSource: this._dragSource
        };
        this.fire("dragleave", _v1), this._fireEnterLeaveEvents(void 0, _v1), this._renderDragEffects(_v0, this._dragSource), this._dropTarget = void 0, this.targets = [], this._hoveredTargets = [];
      }
      _onDrop(_v0) {
        let {
            target: _v1,
            targets: _v2
          } = this.findDragTargets(_v0),
          _v3 = this._basicEventHandler("drop:before", _v5({
            e: _v0,
            target: _v1,
            subTargets: _v2,
            dragSource: this._dragSource
          }, _v320(this, _v0)));
        _v3.didDrop = !1, _v3.dropTarget = void 0, this._basicEventHandler("drop", _v3), this.fire("drop:after", _v3);
      }
      _onContextMenu(_v0) {
        let _v1 = this.findTarget(_v0),
          _v2 = this.targets || [],
          _v3 = this._basicEventHandler("contextmenu:before", {
            e: _v0,
            target: _v1,
            subTargets: _v2
          });
        return this.stopContextMenu && _v109(_v0), this._basicEventHandler("contextmenu", _v3), !1;
      }
      _onDoubleClick(_v0) {
        this._cacheTransformEventData(_v0), this._handleEvent(_v0, "dblclick"), this._resetTransformEventData();
      }
      getPointerId(_v0) {
        let _v1 = _v0.changedTouches;
        return _v1 ? _v1[0] && _v1[0].identifier : this.enablePointerEvents ? _v0.pointerId : -1;
      }
      _isMainEvent(_v0) {
        return !0 === _v0.isPrimary || !1 !== _v0.isPrimary && ("touchend" === _v0.type && 0 === _v0.touches.length || !_v0.changedTouches || _v0.changedTouches[0].identifier === this.mainTouchId);
      }
      _onTouchStart(_v0) {
        _v0.preventDefault(), void 0 === this.mainTouchId && (this.mainTouchId = this.getPointerId(_v0)), this.__onMouseDown(_v0), this._resetTransformEventData();
        let _v1 = this.upperCanvasEl,
          _v2 = this._getEventPrefix(),
          _v3 = _v97(_v1);
        _v321(_v3, "touchend", this._onTouchEnd, _v319), _v321(_v3, "touchmove", this._onMouseMove, _v319), _v322(_v1, "".concat(_v2, "down"), this._onMouseDown);
      }
      _onMouseDown(_v0) {
        this.__onMouseDown(_v0), this._resetTransformEventData();
        let _v1 = this.upperCanvasEl,
          _v2 = this._getEventPrefix();
        _v322(_v1, "".concat(_v2, "move"), this._onMouseMove, _v319);
        let _v3 = _v97(_v1);
        _v321(_v3, "".concat(_v2, "up"), this._onMouseUp), _v321(_v3, "".concat(_v2, "move"), this._onMouseMove, _v319);
      }
      _onTouchEnd(_v0) {
        if (_v0.touches.length > 0) return;
        this.__onMouseUp(_v0), this._resetTransformEventData(), delete this.mainTouchId;
        let _v1 = this._getEventPrefix(),
          _v2 = _v97(this.upperCanvasEl);
        _v322(_v2, "touchend", this._onTouchEnd, _v319), _v322(_v2, "touchmove", this._onMouseMove, _v319), this._willAddMouseDown && clearTimeout(this._willAddMouseDown), this._willAddMouseDown = setTimeout(() => {
          _v321(this.upperCanvasEl, "".concat(_v1, "down"), this._onMouseDown), this._willAddMouseDown = 0;
        }, 400);
      }
      _onMouseUp(_v0) {
        this.__onMouseUp(_v0), this._resetTransformEventData();
        let _v1 = this.upperCanvasEl,
          _v2 = this._getEventPrefix();
        if (this._isMainEvent(_v0)) {
          let _v0 = _v97(this.upperCanvasEl);
          _v322(_v0, "".concat(_v2, "up"), this._onMouseUp), _v322(_v0, "".concat(_v2, "move"), this._onMouseMove, _v319), _v321(_v1, "".concat(_v2, "move"), this._onMouseMove, _v319);
        }
      }
      _onMouseMove(_v0) {
        let _v1 = this.getActiveObject();
        this.allowTouchScrolling || _v1 && _v1.shouldStartDragging(_v0) || !_v0.preventDefault || _v0.preventDefault(), this.__onMouseMove(_v0);
      }
      _onResize() {
        this.calcOffset(), this._resetTransformEventData();
      }
      _shouldRender(_v0) {
        let _v1 = this.getActiveObject();
        return !!_v1 != !!_v0 || _v1 && _v0 && _v1 !== _v0;
      }
      __onMouseUp(_v0) {
        var _v1;
        let _v2, _v3;
        this._cacheTransformEventData(_v0), this._handleEvent(_v0, "up:before");
        let _v4 = this._currentTransform,
          _v5 = this._isClick,
          _v6 = this._target,
          {
            button: _v7
          } = _v0;
        if (_v7) {
          (this.fireMiddleClick && 1 === _v7 || this.fireRightClick && 2 === _v7) && this._handleEvent(_v0, "up"), this._resetTransformEventData();
          return;
        }
        if (this.isDrawingMode && this._isCurrentlyDrawing) return void this._onMouseUpInDrawingMode(_v0);
        if (!this._isMainEvent(_v0)) return;
        let _v8 = !1;
        if (_v4 && (this._finalizeCurrentTransform(_v0), _v8 = _v4.actionPerformed), !_v5) {
          let _v0 = _v6 === this._activeObject;
          this.handleSelection(_v0), _v8 || (_v8 = this._shouldRender(_v6) || !_v0 && _v6 === this._activeObject);
        }
        if (_v6) {
          let {
            key: _v0,
            control: _v1
          } = _v6.findControl(this.getViewportPoint(_v0), _v108(_v0)) || {};
          if (_v3 = _v0, _v6.selectable && _v6 !== this._activeObject && "up" === _v6.activeOn) this.setActiveObject(_v6, _v0), _v8 = !0;else if (_v1) {
            let _v0 = _v1.getMouseUpHandler(_v0, _v6, _v1);
            _v0 && (_v2 = this.getScenePoint(_v0), _v0.call(_v1, _v0, _v4, _v2.x, _v2.y));
          }
          _v6.isMoving = !1;
        }
        if (_v4 && (_v4.target !== _v6 || _v4.corner !== _v3)) {
          let _v0 = _v4.target && _v4.target.controls[_v4.corner],
            _v1 = _v0 && _v0.getMouseUpHandler(_v0, _v4.target, _v0);
          _v2 = _v2 || this.getScenePoint(_v0), _v1 && _v1.call(_v0, _v0, _v4, _v2.x, _v2.y);
        }
        this._setCursorFromEvent(_v0, _v6), this._handleEvent(_v0, "up"), this._groupSelector = null, this._currentTransform = null, _v6 && (_v6.__corner = void 0), _v8 ? this.requestRenderAll() : _v5 || null != (_v1 = this._activeObject) && _v1.isEditing || this.renderTop();
      }
      _basicEventHandler(_v0, _v1) {
        let {
          target: _v2,
          subTargets: _v3 = []
        } = _v1;
        this.fire(_v0, _v1), _v2 && _v2.fire(_v0, _v1);
        for (let _v0 = 0; _v0 < _v3.length; _v0++) _v3[_v0] !== _v2 && _v3[_v0].fire(_v0, _v1);
        return _v1;
      }
      _handleEvent(_v0, _v1) {
        let _v2 = this._target,
          _v3 = this.targets || [],
          _v4 = _v5(_v5({
            e: _v0,
            target: _v2,
            subTargets: _v3
          }, _v320(this, _v0)), {}, {
            transform: this._currentTransform
          }, "up:before" === _v1 || "up" === _v1 ? {
            isClick: this._isClick,
            currentTarget: this.findTarget(_v0),
            currentSubTargets: this.targets
          } : {});
        this.fire("mouse:".concat(_v1), _v4), _v2 && _v2.fire("mouse".concat(_v1), _v4);
        for (let _v0 = 0; _v0 < _v3.length; _v0++) _v3[_v0] !== _v2 && _v3[_v0].fire("mouse".concat(_v1), _v4);
      }
      _onMouseDownInDrawingMode(_v0) {
        this._isCurrentlyDrawing = !0, this.getActiveObject() && (this.discardActiveObject(_v0), this.requestRenderAll());
        let _v1 = this.getScenePoint(_v0);
        this.freeDrawingBrush && this.freeDrawingBrush.onMouseDown(_v1, {
          e: _v0,
          pointer: _v1
        }), this._handleEvent(_v0, "down");
      }
      _onMouseMoveInDrawingMode(_v0) {
        if (this._isCurrentlyDrawing) {
          let _v0 = this.getScenePoint(_v0);
          this.freeDrawingBrush && this.freeDrawingBrush.onMouseMove(_v0, {
            e: _v0,
            pointer: _v0
          });
        }
        this.setCursor(this.freeDrawingCursor), this._handleEvent(_v0, "move");
      }
      _onMouseUpInDrawingMode(_v0) {
        let _v1 = this.getScenePoint(_v0);
        this.freeDrawingBrush ? this._isCurrentlyDrawing = !!this.freeDrawingBrush.onMouseUp({
          e: _v0,
          pointer: _v1
        }) : this._isCurrentlyDrawing = !1, this._handleEvent(_v0, "up");
      }
      __onMouseDown(_v0) {
        this._isClick = !0, this._cacheTransformEventData(_v0), this._handleEvent(_v0, "down:before");
        let _v1 = this._target,
          {
            button: _v2
          } = _v0;
        if (_v2) {
          (this.fireMiddleClick && 1 === _v2 || this.fireRightClick && 2 === _v2) && this._handleEvent(_v0, "down"), this._resetTransformEventData();
          return;
        }
        if (this.isDrawingMode) return void this._onMouseDownInDrawingMode(_v0);
        if (!this._isMainEvent(_v0) || this._currentTransform) return;
        let _v3 = this._shouldRender(_v1),
          _v4 = !1;
        if (this.handleMultiSelection(_v0, _v1) ? (_v1 = this._activeObject, _v4 = !0, _v3 = !0) : this._shouldClearSelection(_v0, _v1) && this.discardActiveObject(_v0), this.selection && (!_v1 || !_v1.selectable && !_v1.isEditing && _v1 !== this._activeObject)) {
          let _v0 = this.getScenePoint(_v0);
          this._groupSelector = {
            x: _v0.x,
            y: _v0.y,
            deltaY: 0,
            deltaX: 0
          };
        }
        if (_v1) {
          let _v0 = _v1 === this._activeObject;
          _v1.selectable && "down" === _v1.activeOn && this.setActiveObject(_v1, _v0);
          let _v1 = _v1.findControl(this.getViewportPoint(_v0), _v108(_v0));
          if (_v1 === this._activeObject && (_v1 || !_v4)) {
            this._setupCurrentTransform(_v0, _v1, _v0);
            let _v0 = _v1 ? _v1.control : void 0,
              _v1 = this.getScenePoint(_v0),
              _v2 = _v0 && _v0.getMouseDownHandler(_v0, _v1, _v0);
            _v2 && _v2.call(_v0, _v0, this._currentTransform, _v1.x, _v1.y);
          }
        }
        _v3 && (this._objectsToRender = void 0), this._handleEvent(_v0, "down"), _v3 && this.requestRenderAll();
      }
      _resetTransformEventData() {
        this._target = void 0, this._pointer = void 0, this._absolutePointer = void 0;
      }
      _cacheTransformEventData(_v0) {
        this._resetTransformEventData(), this._pointer = this.getViewportPoint(_v0), this._absolutePointer = _v118(this._pointer, void 0, this.viewportTransform), this._target = this._currentTransform ? this._currentTransform.target : this.findTarget(_v0);
      }
      __onMouseMove(_v0) {
        if (this._isClick = !1, this._cacheTransformEventData(_v0), this._handleEvent(_v0, "move:before"), this.isDrawingMode) return void this._onMouseMoveInDrawingMode(_v0);
        if (!this._isMainEvent(_v0)) return;
        let _v1 = this._groupSelector;
        if (_v1) {
          let _v0 = this.getScenePoint(_v0);
          _v1.deltaX = _v0.x - _v1.x, _v1.deltaY = _v0.y - _v1.y, this.renderTop();
        } else if (this._currentTransform) this._transformObject(_v0);else {
          let _v0 = this.findTarget(_v0);
          this._setCursorFromEvent(_v0, _v0), this._fireOverOutEvents(_v0, _v0);
        }
        this.textEditingManager.onMouseMove(_v0), this._handleEvent(_v0, "move"), this._resetTransformEventData();
      }
      _fireOverOutEvents(_v0, _v1) {
        let _v2 = this._hoveredTarget,
          _v3 = this._hoveredTargets,
          _v4 = this.targets,
          _v5 = Math.max(_v3.length, _v4.length);
        this.fireSyntheticInOutEvents("mouse", {
          e: _v0,
          target: _v1,
          oldTarget: _v2,
          fireCanvas: !0
        });
        for (let _v0 = 0; _v0 < _v5; _v0++) this.fireSyntheticInOutEvents("mouse", {
          e: _v0,
          target: _v4[_v0],
          oldTarget: _v3[_v0]
        });
        this._hoveredTarget = _v1, this._hoveredTargets = this.targets.concat();
      }
      _fireEnterLeaveEvents(_v0, _v1) {
        let _v2 = this._draggedoverTarget,
          _v3 = this._hoveredTargets,
          _v4 = this.targets,
          _v5 = Math.max(_v3.length, _v4.length);
        this.fireSyntheticInOutEvents("drag", _v5(_v5({}, _v1), {}, {
          target: _v0,
          oldTarget: _v2,
          fireCanvas: !0
        }));
        for (let _v0 = 0; _v0 < _v5; _v0++) this.fireSyntheticInOutEvents("drag", _v5(_v5({}, _v1), {}, {
          target: _v4[_v0],
          oldTarget: _v3[_v0]
        }));
        this._draggedoverTarget = _v0;
      }
      fireSyntheticInOutEvents(_v0, _v1) {
        let {
            target: _v2,
            oldTarget: _v3,
            fireCanvas: _v4,
            e: _v5
          } = _v1,
          _v6 = _v8(_v1, _v318),
          {
            targetIn: _v7,
            targetOut: _v8,
            canvasIn: _v9,
            canvasOut: _v10
          } = _v323[_v0],
          _v11 = _v3 !== _v2;
        if (_v3 && _v11) {
          let _v0 = _v5(_v5({}, _v6), {}, {
            e: _v5,
            target: _v3,
            nextTarget: _v2
          }, _v320(this, _v5));
          _v4 && this.fire(_v10, _v0), _v3.fire(_v8, _v0);
        }
        if (_v2 && _v11) {
          let _v0 = _v5(_v5({}, _v6), {}, {
            e: _v5,
            target: _v2,
            previousTarget: _v3
          }, _v320(this, _v5));
          _v4 && this.fire(_v9, _v0), _v2.fire(_v7, _v0);
        }
      }
      __onMouseWheel(_v0) {
        this._cacheTransformEventData(_v0), this._handleEvent(_v0, "wheel"), this._resetTransformEventData();
      }
      _transformObject(_v0) {
        let _v1 = this.getScenePoint(_v0),
          _v2 = this._currentTransform,
          _v3 = _v2.target,
          _v4 = _v3.group ? _v118(_v1, void 0, _v3.group.calcTransformMatrix()) : _v1;
        _v2.shiftKey = _v0.shiftKey, _v2.altKey = !!this.centeredKey && _v0[this.centeredKey], this._performTransformAction(_v0, _v2, _v4), _v2.actionPerformed && this.requestRenderAll();
      }
      _performTransformAction(_v0, _v1, _v2) {
        let _v3 = _v2.x,
          _v4 = _v2.y,
          _v5 = _v1.action,
          _v6 = _v1.actionHandler,
          _v7 = !1;
        _v6 && (_v7 = _v6(_v0, _v1, _v3, _v4)), "drag" === _v5 && _v7 && (_v1.target.isMoving = !0, this.setCursor(_v1.target.moveCursor || this.moveCursor)), _v1.actionPerformed = _v1.actionPerformed || _v7;
      }
      _setCursorFromEvent(_v0, _v1) {
        if (!_v1) return void this.setCursor(this.defaultCursor);
        let _v2 = _v1.hoverCursor || this.hoverCursor,
          _v3 = _v95(this._activeObject) ? this._activeObject : null,
          _v4 = (!_v3 || _v1.group !== _v3) && _v1.findControl(this.getViewportPoint(_v0));
        if (_v4) {
          let _v0 = _v4.control;
          this.setCursor(_v0.cursorStyleHandler(_v0, _v0, _v1));
        } else _v1.subTargetCheck && this.targets.concat().reverse().map(_v0 => {
          _v2 = _v0.hoverCursor || _v2;
        }), this.setCursor(_v2);
      }
      handleMultiSelection(_v0, _v1) {
        let _v2 = this._activeObject,
          _v3 = _v95(_v2);
        if (_v2 && this._isSelectionKeyPressed(_v0) && this.selection && _v1 && _v1.selectable && (_v2 !== _v1 || _v3) && (_v3 || !_v1.isDescendantOf(_v2) && !_v2.isDescendantOf(_v1)) && !_v1.onSelect({
          e: _v0
        }) && !_v2.getActiveControl()) {
          if (_v3) {
            let _v0 = _v2.getObjects();
            if (_v1 === _v2) {
              let _v0 = this.getViewportPoint(_v0);
              if (!(_v1 = this.searchPossibleTargets(_v0, _v0) || this.searchPossibleTargets(this._objects, _v0)) || !_v1.selectable) return !1;
            }
            _v1.group === _v2 ? (_v2.remove(_v1), this._hoveredTarget = _v1, this._hoveredTargets = [...this.targets], 1 === _v2.size() && this._setActiveObject(_v2.item(0), _v0)) : (_v2.multiSelectAdd(_v1), this._hoveredTarget = _v2, this._hoveredTargets = [...this.targets]), this._fireSelectionEvents(_v0, _v0);
          } else {
            _v2.exitEditing && _v2.exitEditing();
            let _v0 = new (_v36.getClass("ActiveSelection"))([], {
              canvas: this
            });
            _v0.multiSelectAdd(_v2, _v1), this._hoveredTarget = _v0, this._setActiveObject(_v0, _v0), this._fireSelectionEvents([_v2], _v0);
          }
          return !0;
        }
        return !1;
      }
      handleSelection(_v0) {
        if (!this.selection || !this._groupSelector) return !1;
        let {
            x: _v1,
            y: _v2,
            deltaX: _v3,
            deltaY: _v4
          } = this._groupSelector,
          _v5 = new _v44(_v1, _v2),
          _v6 = _v5.add(new _v44(_v3, _v4)),
          _v7 = _v5.min(_v6),
          _v8 = _v5.max(_v6).subtract(_v7),
          _v9 = this.collectObjects({
            left: _v7.x,
            top: _v7.y,
            width: _v8.x,
            height: _v8.y
          }, {
            includeIntersecting: !this.selectionFullyContained
          }),
          _v10 = _v5.eq(_v6) ? _v9[0] ? [_v9[0]] : [] : _v9.length > 1 ? _v9.filter(_v0 => !_v0.onSelect({
            e: _v0
          })).reverse() : _v9;
        if (1 === _v10.length) this.setActiveObject(_v10[0], _v0);else if (_v10.length > 1) {
          let _v0 = _v36.getClass("ActiveSelection");
          this.setActiveObject(new _v0(_v10, {
            canvas: this
          }), _v0);
        }
        return this._groupSelector = null, !0;
      }
      clear() {
        this.textEditingManager.clear(), super.clear();
      }
      destroy() {
        this.removeListeners(), this.textEditingManager.dispose(), super.destroy();
      }
    }
    let _v325 = {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0
      },
      _v326 = _v5(_v5({}, _v325), {}, {
        r1: 0,
        r2: 0
      }),
      _v327 = /^(\d+\.\d+)%|(\d+)%$/;
    function _v328(_v0) {
      return _v0 && _v327.test(_v0);
    }
    function _v329(_v0, _v1) {
      return _v154(0, _v40("number" == typeof _v0 ? _v0 : "string" == typeof _v0 ? parseFloat(_v0) / (_v328(_v0) ? 100 : 1) : NaN, _v1), 1);
    }
    let _v330 = /\s*;\s*/,
      _v331 = /\s*:\s*/;
    function _v332(_v0) {
      return "linearGradient" === _v0.nodeName || "LINEARGRADIENT" === _v0.nodeName ? "linear" : "radial";
    }
    function _v333(_v0) {
      return "userSpaceOnUse" === _v0.getAttribute("gradientUnits") ? "pixels" : "percentage";
    }
    function _v334(_v0, _v1) {
      return _v0.getAttribute(_v1);
    }
    class _v335 {
      constructor(_v0) {
        let {
          type: _v1 = "linear",
          gradientUnits: _v2 = "pixels",
          coords: _v3 = {},
          colorStops: _v4 = [],
          offsetX: _v5 = 0,
          offsetY: _v6 = 0,
          gradientTransform: _v7,
          id: _v8
        } = _v0;
        this.id = _v8 ? "".concat(_v8, "_").concat(_v52()) : _v52(), this.type = _v1, this.gradientUnits = _v2, this.gradientTransform = _v7, this.offsetX = _v5, this.offsetY = _v6, this.coords = _v5(_v5({}, "radial" === this.type ? _v326 : _v325), _v3), this.colorStops = _v4.slice();
      }
      addColorStop(_v0) {
        for (let _v0 in _v0) {
          let _v0 = new _v84(_v0[_v0]);
          this.colorStops.push({
            offset: parseFloat(_v0),
            color: _v0.toRgb(),
            opacity: _v0.getAlpha()
          });
        }
        return this;
      }
      toObject(_v0) {
        return _v5(_v5({}, _v76(this, _v0)), {}, {
          type: this.type,
          coords: this.coords,
          colorStops: this.colorStops,
          offsetX: this.offsetX,
          offsetY: this.offsetY,
          gradientUnits: this.gradientUnits,
          gradientTransform: this.gradientTransform ? [...this.gradientTransform] : void 0
        });
      }
      toSVG(_v0) {
        let {
            additionalTransform: _v1
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          _v2 = [],
          _v3 = this.gradientTransform ? this.gradientTransform.concat() : _v28.concat(),
          _v4 = "pixels" === this.gradientUnits ? "userSpaceOnUse" : "objectBoundingBox",
          _v5 = this.colorStops.map(_v0 => _v5({}, _v0)).sort((_v0, _v1) => _v0.offset - _v1.offset),
          _v6 = -this.offsetX,
          _v7 = -this.offsetY;
        "objectBoundingBox" === _v4 ? (_v6 /= _v0.width, _v7 /= _v0.height) : (_v6 += _v0.width / 2, _v7 += _v0.height / 2), _v0 && "function" == typeof _v0._renderPathCommands && "percentage" !== this.gradientUnits && (_v6 -= _v0.pathOffset.x, _v7 -= _v0.pathOffset.y), _v3[4] -= _v6, _v3[5] -= _v7;
        let _v8 = ['id="SVGID_'.concat(this.id, '"'), 'gradientUnits="'.concat(_v4, '"'), 'gradientTransform="'.concat(_v1 ? _v1 + " " : "").concat(_v88(_v3), '"'), ""].join(" ");
        if ("linear" === this.type) {
          let {
            x1: _v0,
            y1: _v1,
            x2: _v2,
            y2: _v3
          } = this.coords;
          _v2.push("<linearGradient ", _v8, ' x1="', _v0, '" y1="', _v1, '" x2="', _v2, '" y2="', _v3, '">\n');
        } else if ("radial" === this.type) {
          let {
              x1: _v0,
              y1: _v1,
              x2: _v2,
              y2: _v3,
              r1: _v4,
              r2: _v5
            } = this.coords,
            _v6 = _v4 > _v5;
          _v2.push("<radialGradient ", _v8, ' cx="', _v6 ? _v0 : _v2, '" cy="', _v6 ? _v1 : _v3, '" r="', _v6 ? _v4 : _v5, '" fx="', _v6 ? _v2 : _v0, '" fy="', _v6 ? _v3 : _v1, '">\n'), _v6 && (_v5.reverse(), _v5.forEach(_v0 => {
            _v0.offset = 1 - _v0.offset;
          }));
          let _v7 = Math.min(_v4, _v5);
          if (_v7 > 0) {
            let _v0 = _v7 / Math.max(_v4, _v5);
            _v5.forEach(_v0 => {
              _v0.offset += _v0 * (1 - _v0.offset);
            });
          }
        }
        return _v5.forEach(_v0 => {
          let {
            color: _v1,
            offset: _v2,
            opacity: _v3
          } = _v0;
          _v2.push("<stop ", 'offset="', 100 * _v2 + "%", '" style="stop-color:', _v1, void 0 !== _v3 ? ";stop-opacity: " + _v3 : ";", '"/>\n');
        }), _v2.push("linear" === this.type ? "</linearGradient>" : "</radialGradient>", "\n"), _v2.join("");
      }
      toLive(_v0) {
        let _v1 = this.coords,
          _v2 = "linear" === this.type ? _v0.createLinearGradient(_v1.x1, _v1.y1, _v1.x2, _v1.y2) : _v0.createRadialGradient(_v1.x1, _v1.y1, _v1.r1, _v1.x2, _v1.y2, _v1.r2);
        return this.colorStops.forEach(_v0 => {
          let {
            color: _v1,
            opacity: _v2,
            offset: _v3
          } = _v0;
          _v2.addColorStop(_v3, void 0 !== _v2 ? new _v84(_v1).setAlpha(_v2).toRgba() : _v1);
        }), _v2;
      }
      static async fromObject(_v0) {
        return new this(_v0);
      }
      static fromElement(_v0, _v1, _v2) {
        var _v3;
        let _v4 = _v333(_v0),
          _v5 = _v1._findCenterFromElement();
        return new this(_v5({
          id: _v0.getAttribute("id") || void 0,
          type: _v332(_v0),
          coords: (_v3 = {
            width: _v2.viewBoxWidth || _v2.width,
            height: _v2.viewBoxHeight || _v2.height
          }, function (_v0, _v1) {
            let _v2,
              {
                width: _v3,
                height: _v4,
                gradientUnits: _v5
              } = _v1;
            return Object.keys(_v0).reduce((_v0, _v1) => {
              let _v2 = _v0[_v1];
              return "Infinity" === _v2 ? _v2 = 1 : "-Infinity" === _v2 ? _v2 = 0 : (_v2 = "string" == typeof _v2 ? parseFloat(_v2) : _v2, "string" == typeof _v2 && _v328(_v2) && (_v2 *= .01, "pixels" === _v5 && (("x1" === _v1 || "x2" === _v1 || "r2" === _v1) && (_v2 *= _v3), ("y1" === _v1 || "y2" === _v1) && (_v2 *= _v4)))), _v0[_v1] = _v2, _v0;
            }, {});
          }("linear" === _v332(_v0) ? {
            x1: _v334(_v0, "x1") || 0,
            y1: _v334(_v0, "y1") || 0,
            x2: _v334(_v0, "x2") || "100%",
            y2: _v334(_v0, "y2") || 0
          } : {
            x1: _v334(_v0, "fx") || _v334(_v0, "cx") || "50%",
            y1: _v334(_v0, "fy") || _v334(_v0, "cy") || "50%",
            r1: 0,
            x2: _v334(_v0, "cx") || "50%",
            y2: _v334(_v0, "cy") || "50%",
            r2: _v334(_v0, "r") || "50%"
          }, _v5(_v5({}, _v3), {}, {
            gradientUnits: _v333(_v0)
          }))),
          colorStops: function (_v0, _v1) {
            let _v2 = [],
              _v3 = _v0.getElementsByTagName("stop"),
              _v4 = _v329(_v1, 1);
            for (let _v0 = _v3.length; _v0--;) _v2.push(function (_v0, _v1) {
              let _v2,
                _v3,
                _v4 = _v0.getAttribute("style");
              if (_v4) {
                let _v0 = _v4.split(_v330);
                "" === _v0[_v0.length - 1] && _v0.pop();
                for (let _v0 = _v0.length; _v0--;) {
                  let [_v0, _v1] = _v0[_v0].split(_v331).map(_v0 => _v0.trim());
                  "stop-color" === _v0 ? _v2 = _v1 : "stop-opacity" === _v0 && (_v3 = _v1);
                }
              }
              let _v5 = new _v84(_v2 || _v0.getAttribute("stop-color") || "rgb(0,0,0)");
              return {
                offset: _v329(_v0.getAttribute("offset"), 0),
                color: _v5.toRgb(),
                opacity: _v40(parseFloat(_v3 || _v0.getAttribute("stop-opacity") || ""), 1) * _v5.getAlpha() * _v1
              };
            }(_v3[_v0], _v4));
            return _v2;
          }(_v0, _v2.opacity),
          gradientUnits: _v4,
          gradientTransform: _v258(_v0.getAttribute("gradientTransform") || "")
        }, "pixels" === _v4 ? {
          offsetX: _v1.width / 2 - _v5.x,
          offsetY: _v1.height / 2 - _v5.y
        } : {
          offsetX: 0,
          offsetY: 0
        }));
      }
    }
    _v7(_v335, "type", "Gradient"), _v36.setClass(_v335, "gradient"), _v36.setClass(_v335, "linear"), _v36.setClass(_v335, "radial");
    let _v336 = ["type", "source"];
    class _v337 {
      get type() {
        return "pattern";
      }
      set type(_v0) {
        _v12("warn", "Setting type has no effect", _v0);
      }
      constructor(_v0) {
        _v7(this, "repeat", "repeat"), _v7(this, "offsetX", 0), _v7(this, "offsetY", 0), _v7(this, "crossOrigin", ""), _v7(this, "patternTransform", null), this.id = _v52(), Object.assign(this, _v0);
      }
      isImageSource() {
        return !!this.source && "string" == typeof this.source.src;
      }
      isCanvasSource() {
        return !!this.source && !!this.source.toDataURL;
      }
      sourceToString() {
        return this.isImageSource() ? this.source.src : this.isCanvasSource() ? this.source.toDataURL() : "";
      }
      toLive(_v0) {
        return !this.source || this.isImageSource() && (!this.source.complete || 0 === this.source.naturalWidth || 0 === this.source.naturalHeight) ? null : _v0.createPattern(this.source, this.repeat);
      }
      toObject() {
        let _v0 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          {
            repeat: _v1,
            crossOrigin: _v2
          } = this;
        return _v5(_v5({}, _v76(this, _v0)), {}, {
          type: "pattern",
          source: this.sourceToString(),
          repeat: _v1,
          crossOrigin: _v2,
          offsetX: _v85(this.offsetX, _v11.NUM_FRACTION_DIGITS),
          offsetY: _v85(this.offsetY, _v11.NUM_FRACTION_DIGITS),
          patternTransform: this.patternTransform ? [...this.patternTransform] : null
        });
      }
      toSVG(_v0) {
        let {
            width: _v1,
            height: _v2
          } = _v0,
          {
            source: _v3,
            repeat: _v4,
            id: _v5
          } = this,
          _v6 = _v40(this.offsetX / _v1, 0),
          _v7 = _v40(this.offsetY / _v2, 0),
          _v8 = "repeat-y" === _v4 || "no-repeat" === _v4 ? 1 + Math.abs(_v6 || 0) : _v40(_v3.width / _v1, 0),
          _v9 = "repeat-x" === _v4 || "no-repeat" === _v4 ? 1 + Math.abs(_v7 || 0) : _v40(_v3.height / _v2, 0);
        return ['<pattern id="SVGID_'.concat(_v5, '" x="').concat(_v6, '" y="').concat(_v7, '" width="').concat(_v8, '" height="').concat(_v9, '">'), '<image x="0" y="0" width="'.concat(_v3.width, '" height="').concat(_v3.height, '" xlink:href="').concat(this.sourceToString(), '"></image>'), "</pattern>\n"].join("\n");
      }
      static async fromObject(_v0, _v1) {
        let {
            type: _v2,
            source: _v3
          } = _v0,
          _v4 = _v8(_v0, _v336),
          _v5 = await _v73(_v3, _v5(_v5({}, _v1), {}, {
            crossOrigin: _v4.crossOrigin
          }));
        return new this(_v5(_v5({}, _v4), {}, {
          source: _v5
        }));
      }
    }
    _v7(_v337, "type", "Pattern"), _v36.setClass(_v337), _v36.setClass(_v337, "pattern");
    class _v338 {
      constructor(_v0) {
        _v7(this, "color", "rgb(0, 0, 0)"), _v7(this, "width", 1), _v7(this, "shadow", null), _v7(this, "strokeLineCap", "round"), _v7(this, "strokeLineJoin", "round"), _v7(this, "strokeMiterLimit", 10), _v7(this, "strokeDashArray", null), _v7(this, "limitedToCanvasSize", !1), this.canvas = _v0;
      }
      _setBrushStyles(_v0) {
        _v0.strokeStyle = this.color, _v0.lineWidth = this.width, _v0.lineCap = this.strokeLineCap, _v0.miterLimit = this.strokeMiterLimit, _v0.lineJoin = this.strokeLineJoin, _v0.setLineDash(this.strokeDashArray || []);
      }
      _saveAndTransform(_v0) {
        let _v1 = this.canvas.viewportTransform;
        _v0.save(), _v0.transform(_v1[0], _v1[1], _v1[2], _v1[3], _v1[4], _v1[5]);
      }
      needsFullRender() {
        return 1 > new _v84(this.color).getAlpha() || !!this.shadow;
      }
      _setShadow() {
        if (!this.shadow || !this.canvas) return;
        let _v0 = this.canvas,
          _v1 = this.shadow,
          _v2 = _v0.contextTop,
          _v3 = _v0.getZoom() * _v0.getRetinaScaling();
        _v2.shadowColor = _v1.color, _v2.shadowBlur = _v1.blur * _v3, _v2.shadowOffsetX = _v1.offsetX * _v3, _v2.shadowOffsetY = _v1.offsetY * _v3;
      }
      _resetShadow() {
        let _v0 = this.canvas.contextTop;
        _v0.shadowColor = "", _v0.shadowBlur = _v0.shadowOffsetX = _v0.shadowOffsetY = 0;
      }
      _isOutSideCanvas(_v0) {
        return _v0.x < 0 || _v0.x > this.canvas.getWidth() || _v0.y < 0 || _v0.y > this.canvas.getHeight();
      }
    }
    let _v339 = ["path", "left", "top"],
      _v340 = ["d"];
    class _v341 extends _v230 {
      constructor(_v0) {
        let _v1 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          {
            path: _v2,
            left: _v3,
            top: _v4
          } = _v1;
        super(_v8(_v1, _v339)), this._setPath(_v0 || [], !0), "number" == typeof _v3 && this.set(_v30, _v3), "number" == typeof _v4 && this.set("top", _v4);
      }
      _setPath(_v0, _v1) {
        this.path = _v299(Array.isArray(_v0) ? _v0 : _v309(_v0)), this.setBoundingBox(_v1);
      }
      _findCenterFromElement() {
        let _v0 = this._calcBoundsFromPath();
        return new _v44(_v0.left + _v0.width / 2, _v0.top + _v0.height / 2);
      }
      _renderPathCommands(_v0) {
        let _v1 = -this.pathOffset.x,
          _v2 = -this.pathOffset.y;
        for (let _v0 of (_v0.beginPath(), this.path)) switch (_v0[0]) {
          case "L":
            _v0.lineTo(_v0[1] + _v1, _v0[2] + _v2);
            break;
          case "M":
            _v0.moveTo(_v0[1] + _v1, _v0[2] + _v2);
            break;
          case "C":
            _v0.bezierCurveTo(_v0[1] + _v1, _v0[2] + _v2, _v0[3] + _v1, _v0[4] + _v2, _v0[5] + _v1, _v0[6] + _v2);
            break;
          case "Q":
            _v0.quadraticCurveTo(_v0[1] + _v1, _v0[2] + _v2, _v0[3] + _v1, _v0[4] + _v2);
            break;
          case "Z":
            _v0.closePath();
        }
      }
      _render(_v0) {
        this._renderPathCommands(_v0), this._renderPaintInOrder(_v0);
      }
      toString() {
        return "#<Path (".concat(this.complexity(), '): { "top": ').concat(this.top, ', "left": ').concat(this.left, " }>");
      }
      toObject() {
        let _v0 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return _v5(_v5({}, super.toObject(_v0)), {}, {
          path: this.path.map(_v0 => _v0.slice())
        });
      }
      toDatalessObject() {
        let _v0 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          _v1 = this.toObject(_v0);
        return this.sourcePath && (delete _v1.path, _v1.sourcePath = this.sourcePath), _v1;
      }
      _toSVG() {
        let _v0 = _v311(this.path, _v11.NUM_FRACTION_DIGITS);
        return ["<path ", "COMMON_PARTS", 'd="'.concat(_v0, '" stroke-linecap="round" />\n')];
      }
      _getOffsetTransform() {
        let _v0 = _v11.NUM_FRACTION_DIGITS;
        return " translate(".concat(_v85(-this.pathOffset.x, _v0), ", ").concat(_v85(-this.pathOffset.y, _v0), ")");
      }
      toClipPathSVG(_v0) {
        let _v1 = this._getOffsetTransform();
        return "	" + this._createBaseClipPathSVGMarkup(this._toSVG(), {
          reviver: _v0,
          additionalTransform: _v1
        });
      }
      toSVG(_v0) {
        let _v1 = this._getOffsetTransform();
        return this._createBaseSVGMarkup(this._toSVG(), {
          reviver: _v0,
          additionalTransform: _v1
        });
      }
      complexity() {
        return this.path.length;
      }
      setDimensions() {
        this.setBoundingBox();
      }
      setBoundingBox(_v0) {
        let {
          width: _v1,
          height: _v2,
          pathOffset: _v3
        } = this._calcDimensions();
        this.set({
          width: _v1,
          height: _v2,
          pathOffset: _v3
        }), _v0 && this.setPositionByOrigin(_v3, _v29, _v29);
      }
      _calcBoundsFromPath() {
        let _v0 = [],
          _v1 = 0,
          _v2 = 0,
          _v3 = 0,
          _v4 = 0;
        for (let _v0 of this.path) switch (_v0[0]) {
          case "L":
            _v3 = _v0[1], _v4 = _v0[2], _v0.push(new _v44(_v1, _v2), new _v44(_v3, _v4));
            break;
          case "M":
            _v3 = _v0[1], _v4 = _v0[2], _v1 = _v3, _v2 = _v4;
            break;
          case "C":
            _v0.push(..._v297(_v3, _v4, _v0[1], _v0[2], _v0[3], _v0[4], _v0[5], _v0[6])), _v3 = _v0[5], _v4 = _v0[6];
            break;
          case "Q":
            _v0.push(..._v297(_v3, _v4, _v0[1], _v0[2], _v0[1], _v0[2], _v0[3], _v0[4])), _v3 = _v0[3], _v4 = _v0[4];
            break;
          case "Z":
            _v3 = _v1, _v4 = _v2;
        }
        return _v110(_v0);
      }
      _calcDimensions() {
        let _v0 = this._calcBoundsFromPath();
        return _v5(_v5({}, _v0), {}, {
          pathOffset: new _v44(_v0.left + _v0.width / 2, _v0.top + _v0.height / 2)
        });
      }
      static fromObject(_v0) {
        return this._fromObject(_v0, {
          extraParam: "path"
        });
      }
      static async fromElement(_v0, _v1, _v2) {
        let _v3 = _v262(_v0, this.ATTRIBUTE_NAMES, _v2),
          {
            d: _v4
          } = _v3;
        return new this(_v4, _v5(_v5(_v5({}, _v8(_v3, _v340)), _v1), {}, {
          left: void 0,
          top: void 0
        }));
      }
    }
    _v7(_v341, "type", "Path"), _v7(_v341, "cacheProperties", [..._v193, "path", "fillRule"]), _v7(_v341, "ATTRIBUTE_NAMES", [..._v244, "d"]), _v36.setClass(_v341), _v36.setSVGClass(_v341);
    class _v342 extends _v338 {
      constructor(_v0) {
        super(_v0), _v7(this, "decimate", .4), _v7(this, "drawStraightLine", !1), _v7(this, "straightLineKey", "shiftKey"), this._points = [], this._hasStraightLine = !1;
      }
      needsFullRender() {
        return super.needsFullRender() || this._hasStraightLine;
      }
      static drawSegment(_v0, _v1, _v2) {
        let _v3 = _v1.midPointFrom(_v2);
        return _v0.quadraticCurveTo(_v1.x, _v1.y, _v3.x, _v3.y), _v3;
      }
      onMouseDown(_v0, _v1) {
        let {
          e: _v2
        } = _v1;
        this.canvas._isMainEvent(_v2) && (this.drawStraightLine = !!this.straightLineKey && _v2[this.straightLineKey], this._prepareForDrawing(_v0), this._addPoint(_v0), this._render());
      }
      onMouseMove(_v0, _v1) {
        let {
          e: _v2
        } = _v1;
        if (this.canvas._isMainEvent(_v2) && (this.drawStraightLine = !!this.straightLineKey && _v2[this.straightLineKey], !(!0 === this.limitedToCanvasSize && this._isOutSideCanvas(_v0)) && this._addPoint(_v0) && this._points.length > 1)) if (this.needsFullRender()) this.canvas.clearContext(this.canvas.contextTop), this._render();else {
          let _v0 = this._points,
            _v1 = _v0.length,
            _v2 = this.canvas.contextTop;
          this._saveAndTransform(_v2), this.oldEnd && (_v2.beginPath(), _v2.moveTo(this.oldEnd.x, this.oldEnd.y)), this.oldEnd = _v342.drawSegment(_v2, _v0[_v1 - 2], _v0[_v1 - 1]), _v2.stroke(), _v2.restore();
        }
      }
      onMouseUp(_v0) {
        let {
          e: _v1
        } = _v0;
        return !this.canvas._isMainEvent(_v1) || (this.drawStraightLine = !1, this.oldEnd = void 0, this._finalizeAndAddPath(), !1);
      }
      _prepareForDrawing(_v0) {
        this._reset(), this._addPoint(_v0), this.canvas.contextTop.moveTo(_v0.x, _v0.y);
      }
      _addPoint(_v0) {
        return !(this._points.length > 1 && _v0.eq(this._points[this._points.length - 1])) && (this.drawStraightLine && this._points.length > 1 && (this._hasStraightLine = !0, this._points.pop()), this._points.push(_v0), !0);
      }
      _reset() {
        this._points = [], this._setBrushStyles(this.canvas.contextTop), this._setShadow(), this._hasStraightLine = !1;
      }
      _render() {
        let _v0 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.canvas.contextTop,
          _v1 = this._points[0],
          _v2 = this._points[1];
        if (this._saveAndTransform(_v0), _v0.beginPath(), 2 === this._points.length && _v1.x === _v2.x && _v1.y === _v2.y) {
          let _v0 = this.width / 0;
          _v1.x -= _v0, _v2.x += _v0;
        }
        _v0.moveTo(_v1.x, _v1.y);
        for (let _v0 = 1; _v0 < this._points.length; _v0++) _v342.drawSegment(_v0, _v1, _v2), _v1 = this._points[_v0], _v2 = this._points[_v0 + 1];
        _v0.lineTo(_v1.x, _v1.y), _v0.stroke(), _v0.restore();
      }
      convertPointsToSVGPath(_v0) {
        return _v310(_v0, this.width / 0);
      }
      createPath(_v0) {
        let _v1 = new _v341(_v0, {
          fill: null,
          stroke: this.color,
          strokeWidth: this.width,
          strokeLineCap: this.strokeLineCap,
          strokeMiterLimit: this.strokeMiterLimit,
          strokeLineJoin: this.strokeLineJoin,
          strokeDashArray: this.strokeDashArray
        });
        return this.shadow && (this.shadow.affectStroke = !0, _v1.shadow = new _v190(this.shadow)), _v1;
      }
      decimatePoints(_v0, _v1) {
        if (_v0.length <= 2) return _v0;
        let _v2 = _v0[0],
          _v3 = Math.pow(_v1 / this.canvas.getZoom(), 2),
          _v4 = _v0.length - 1,
          _v5 = [_v2];
        for (let _v0 = 1; _v0 < _v4 - 1; _v0++) Math.pow(_v2.x - _v0[_v0].x, 2) + Math.pow(_v2.y - _v0[_v0].y, 2) >= _v3 && _v5.push(_v2 = _v0[_v0]);
        return _v5.push(_v0[_v4]), _v5;
      }
      _finalizeAndAddPath() {
        this.canvas.contextTop.closePath(), this.decimate && (this._points = this.decimatePoints(this._points, this.decimate));
        let _v0 = this.convertPointsToSVGPath(this._points);
        if ("M 0 0 Q 0 0 0 0 L 0 0" === _v311(_v0)) return void this.canvas.requestRenderAll();
        let _v1 = this.createPath(_v0);
        this.canvas.clearContext(this.canvas.contextTop), this.canvas.fire("before:path:created", {
          path: _v1
        }), this.canvas.add(_v1), this.canvas.requestRenderAll(), _v1.setCoords(), this._resetShadow(), this.canvas.fire("path:created", {
          path: _v1
        });
      }
    }
    let _v343 = ["left", "top", "radius"],
      _v344 = ["radius", "startAngle", "endAngle", "counterClockwise"];
    class _v345 extends _v230 {
      static getDefaults() {
        return _v5(_v5({}, super.getDefaults()), _v345.ownDefaults);
      }
      _set(_v0, _v1) {
        return super._set(_v0, _v1), "radius" === _v0 && this.setRadius(_v1), this;
      }
      _render(_v0) {
        _v0.beginPath(), _v0.arc(0, 0, this.radius, _v56(this.startAngle), _v56(this.endAngle), this.counterClockwise), this._renderPaintInOrder(_v0);
      }
      getRadiusX() {
        return this.get("radius") * this.get("scaleX");
      }
      getRadiusY() {
        return this.get("radius") * this.get("scaleY");
      }
      setRadius(_v0) {
        this.radius = _v0, this.set({
          width: 2 * _v0,
          height: 2 * _v0
        });
      }
      toObject() {
        let _v0 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return super.toObject([..._v344, ..._v0]);
      }
      _toSVG() {
        let _v0 = (this.endAngle - this.startAngle) % 360;
        if (0 === _v0) return ["<circle ", "COMMON_PARTS", 'cx="0" cy="0" ', 'r="', "".concat(this.radius), '" />\n'];
        {
          let {
              radius: _v0
            } = this,
            _v1 = _v56(this.startAngle),
            _v2 = _v56(this.endAngle),
            _v3 = _v42(_v1) * _v0,
            _v4 = _v43(_v1) * _v0,
            _v5 = _v42(_v2) * _v0,
            _v6 = _v43(_v2) * _v0,
            _v7 = +!this.counterClockwise;
          return ['<path d="M '.concat(_v3, " ").concat(_v4, " A ").concat(_v0, " ").concat(_v0, " 0 ").concat(+(_v0 > 180), " ").concat(_v7, " ").concat(_v5, " ").concat(_v6, '" '), "COMMON_PARTS", " />\n"];
        }
      }
      static async fromElement(_v0, _v1, _v2) {
        let _v3 = _v262(_v0, this.ATTRIBUTE_NAMES, _v2),
          {
            left: _v4 = 0,
            top: _v5 = 0,
            radius: _v6 = 0
          } = _v3;
        return new this(_v5(_v5({}, _v8(_v3, _v343)), {}, {
          radius: _v6,
          left: _v4 - _v6,
          top: _v5 - _v6
        }));
      }
      static fromObject(_v0) {
        return super._fromObject(_v0);
      }
    }
    _v7(_v345, "type", "Circle"), _v7(_v345, "cacheProperties", [..._v193, ..._v344]), _v7(_v345, "ownDefaults", {
      radius: 0,
      startAngle: 0,
      endAngle: 360,
      counterClockwise: !1
    }), _v7(_v345, "ATTRIBUTE_NAMES", ["cx", "cy", "r", ..._v244]), _v36.setClass(_v345), _v36.setSVGClass(_v345);
    let _v346 = ["x1", "y1", "x2", "y2"],
      _v347 = ["x1", "y1", "x2", "y2"],
      _v348 = ["x1", "x2", "y1", "y2"];
    class _v349 extends _v230 {
      constructor() {
        let [_v0, _v1, _v2, _v3] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [0, 0, 0, 0],
          _v4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        super(_v5(_v5({}, _v4), {}, {
          x1: _v0,
          y1: _v1,
          x2: _v2,
          y2: _v3
        })), this._setWidthHeight();
        const {
          left: _v5,
          top: _v6
        } = _v4;
        "number" == typeof _v5 && this.set(_v30, _v5), "number" == typeof _v6 && this.set("top", _v6);
      }
      _setWidthHeight() {
        let {
          x1: _v0,
          y1: _v1,
          x2: _v2,
          y2: _v3
        } = this;
        this.width = Math.abs(_v2 - _v0), this.height = Math.abs(_v3 - _v1);
        let {
            left: _v4,
            top: _v5,
            width: _v6,
            height: _v7
          } = _v110([{
            x: _v0,
            y: _v1
          }, {
            x: _v2,
            y: _v3
          }]),
          _v8 = new _v44(_v4 + _v6 / 2, _v5 + _v7 / 2);
        this.setPositionByOrigin(_v8, _v29, _v29);
      }
      _set(_v0, _v1) {
        return super._set(_v0, _v1), _v348.includes(_v0) && this._setWidthHeight(), this;
      }
      _render(_v0) {
        _v0.beginPath();
        let _v1 = this.calcLinePoints();
        _v0.moveTo(_v1.x1, _v1.y1), _v0.lineTo(_v1.x2, _v1.y2), _v0.lineWidth = this.strokeWidth;
        let _v2 = _v0.strokeStyle;
        if (_v91(this.stroke)) _v0.strokeStyle = this.stroke.toLive(_v0);else {
          var _v3;
          _v0.strokeStyle = null != (_v3 = this.stroke) ? _v3 : _v0.fillStyle;
        }
        this.stroke && this._renderStroke(_v0), _v0.strokeStyle = _v2;
      }
      _findCenterFromElement() {
        return new _v44((this.x1 + this.x2) / 2, (this.y1 + this.y2) / 2);
      }
      toObject() {
        let _v0 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return _v5(_v5({}, super.toObject(_v0)), this.calcLinePoints());
      }
      _getNonTransformedDimensions() {
        let _v0 = super._getNonTransformedDimensions();
        return "butt" === this.strokeLineCap && (0 === this.width && (_v0.y -= this.strokeWidth), 0 === this.height && (_v0.x -= this.strokeWidth)), _v0;
      }
      calcLinePoints() {
        let {
            x1: _v0,
            x2: _v1,
            y1: _v2,
            y2: _v3,
            width: _v4,
            height: _v5
          } = this,
          _v6 = _v0 <= _v1 ? -1 : 1,
          _v7 = _v2 <= _v3 ? -1 : 1;
        return {
          x1: _v6 * _v4 / 2,
          x2: -(_v6 * _v4) / 2,
          y1: _v7 * _v5 / 2,
          y2: -(_v7 * _v5) / 2
        };
      }
      _toSVG() {
        let {
          x1: _v0,
          x2: _v1,
          y1: _v2,
          y2: _v3
        } = this.calcLinePoints();
        return ["<line ", "COMMON_PARTS", 'x1="'.concat(_v0, '" y1="').concat(_v2, '" x2="').concat(_v1, '" y2="').concat(_v3, '" />\n')];
      }
      static async fromElement(_v0, _v1, _v2) {
        let _v3 = _v262(_v0, this.ATTRIBUTE_NAMES, _v2),
          {
            x1: _v4 = 0,
            y1: _v5 = 0,
            x2: _v6 = 0,
            y2: _v7 = 0
          } = _v3;
        return new this([_v4, _v5, _v6, _v7], _v8(_v3, _v346));
      }
      static fromObject(_v0) {
        let {
            x1: _v1,
            y1: _v2,
            x2: _v3,
            y2: _v4
          } = _v0,
          _v5 = _v8(_v0, _v347);
        return this._fromObject(_v5(_v5({}, _v5), {}, {
          points: [_v1, _v2, _v3, _v4]
        }), {
          extraParam: "points"
        });
      }
    }
    _v7(_v349, "type", "Line"), _v7(_v349, "cacheProperties", [..._v193, ..._v348]), _v7(_v349, "ATTRIBUTE_NAMES", _v244.concat(_v348)), _v36.setClass(_v349), _v36.setSVGClass(_v349);
    class _v350 extends _v230 {
      static getDefaults() {
        return _v5(_v5({}, super.getDefaults()), _v350.ownDefaults);
      }
      _render(_v0) {
        let _v1 = this.width / 2,
          _v2 = this.height / 2;
        _v0.beginPath(), _v0.moveTo(-_v1, _v2), _v0.lineTo(0, -_v2), _v0.lineTo(_v1, _v2), _v0.closePath(), this._renderPaintInOrder(_v0);
      }
      _toSVG() {
        let _v0 = this.width / 2,
          _v1 = this.height / 2;
        return ["<polygon ", "COMMON_PARTS", 'points="', "".concat(-_v0, " ").concat(_v1, ",0 ").concat(-_v1, ",").concat(_v0, " ").concat(_v1), '" />'];
      }
    }
    _v7(_v350, "type", "Triangle"), _v7(_v350, "ownDefaults", {
      width: 100,
      height: 100
    }), _v36.setClass(_v350), _v36.setSVGClass(_v350);
    let _v351 = ["rx", "ry"];
    class _v352 extends _v230 {
      static getDefaults() {
        return _v5(_v5({}, super.getDefaults()), _v352.ownDefaults);
      }
      _set(_v0, _v1) {
        switch (super._set(_v0, _v1), _v0) {
          case "rx":
            this.rx = _v1, this.set("width", 2 * _v1);
            break;
          case "ry":
            this.ry = _v1, this.set("height", 2 * _v1);
        }
        return this;
      }
      getRx() {
        return this.get("rx") * this.get("scaleX");
      }
      getRy() {
        return this.get("ry") * this.get("scaleY");
      }
      toObject() {
        let _v0 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return super.toObject([..._v351, ..._v0]);
      }
      _toSVG() {
        return ["<ellipse ", "COMMON_PARTS", 'cx="0" cy="0" rx="'.concat(this.rx, '" ry="').concat(this.ry, '" />\n')];
      }
      _render(_v0) {
        _v0.beginPath(), _v0.save(), _v0.transform(1, 0, 0, this.ry / this.rx, 0, 0), _v0.arc(0, 0, this.rx, 0, _v26, !1), _v0.restore(), this._renderPaintInOrder(_v0);
      }
      static async fromElement(_v0, _v1, _v2) {
        let _v3 = _v262(_v0, this.ATTRIBUTE_NAMES, _v2);
        return _v3.left = (_v3.left || 0) - _v3.rx, _v3.top = (_v3.top || 0) - _v3.ry, new this(_v3);
      }
    }
    function _v353(_v0) {
      if (!_v0) return [];
      let _v1 = _v0.replace(/,/g, " ").trim().split(/\s+/),
        _v2 = [];
      for (let _v0 = 0; _v0 < _v1.length; _v0 += 2) _v2.push({
        x: parseFloat(_v1[_v0]),
        y: parseFloat(_v1[_v0 + 1])
      });
      return _v2;
    }
    _v7(_v352, "type", "Ellipse"), _v7(_v352, "cacheProperties", [..._v193, ..._v351]), _v7(_v352, "ownDefaults", {
      rx: 0,
      ry: 0
    }), _v7(_v352, "ATTRIBUTE_NAMES", [..._v244, "cx", "cy", "rx", "ry"]), _v36.setClass(_v352), _v36.setSVGClass(_v352);
    let _v354 = ["left", "top"],
      _v355 = {
        exactBoundingBox: !1
      };
    class _v356 extends _v230 {
      static getDefaults() {
        return _v5(_v5({}, super.getDefaults()), _v356.ownDefaults);
      }
      constructor() {
        let _v0 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          _v1 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        super(_v5(_v5({}, _v1), {}, {
          points: _v0
        })), _v7(this, "strokeDiff", void 0);
        const {
          left: _v2,
          top: _v3
        } = _v1;
        this.initialized = !0, this.setBoundingBox(!0), "number" == typeof _v2 && this.set(_v30, _v2), "number" == typeof _v3 && this.set("top", _v3);
      }
      isOpen() {
        return !0;
      }
      _projectStrokeOnPoints(_v0) {
        return _v236(this.points, _v0, this.isOpen());
      }
      _calcDimensions(_v0) {
        _v0 = _v5({
          scaleX: this.scaleX,
          scaleY: this.scaleY,
          skewX: this.skewX,
          skewY: this.skewY,
          strokeLineCap: this.strokeLineCap,
          strokeLineJoin: this.strokeLineJoin,
          strokeMiterLimit: this.strokeMiterLimit,
          strokeUniform: this.strokeUniform,
          strokeWidth: this.strokeWidth
        }, _v0 || {});
        let _v1 = this.exactBoundingBox ? this._projectStrokeOnPoints(_v0).map(_v0 => _v0.projectedPoint) : this.points;
        if (0 === _v1.length) return {
          left: 0,
          top: 0,
          width: 0,
          height: 0,
          pathOffset: new _v44(),
          strokeOffset: new _v44(),
          strokeDiff: new _v44()
        };
        let _v2 = _v110(_v1),
          _v3 = _v71(_v5(_v5({}, _v0), {}, {
            scaleX: 1,
            scaleY: 1
          })),
          _v4 = _v110(this.points.map(_v0 => _v59(_v0, _v3, !0))),
          _v5 = new _v44(this.scaleX, this.scaleY),
          _v6 = _v2.left + _v2.width / 2,
          _v7 = _v2.top + _v2.height / 2;
        return this.exactBoundingBox && (_v6 -= _v7 * Math.tan(_v56(this.skewX)), _v7 -= _v6 * Math.tan(_v56(this.skewY))), _v5(_v5({}, _v2), {}, {
          pathOffset: new _v44(_v6, _v7),
          strokeOffset: new _v44(_v4.left, _v4.top).subtract(new _v44(_v2.left, _v2.top)).multiply(_v5),
          strokeDiff: new _v44(_v2.width, _v2.height).subtract(new _v44(_v4.width, _v4.height)).multiply(_v5)
        });
      }
      _findCenterFromElement() {
        let _v0 = _v110(this.points);
        return new _v44(_v0.left + _v0.width / 2, _v0.top + _v0.height / 2);
      }
      setDimensions() {
        this.setBoundingBox();
      }
      setBoundingBox(_v0) {
        let {
          left: _v1,
          top: _v2,
          width: _v3,
          height: _v4,
          pathOffset: _v5,
          strokeOffset: _v6,
          strokeDiff: _v7
        } = this._calcDimensions();
        this.set({
          width: _v3,
          height: _v4,
          pathOffset: _v5,
          strokeOffset: _v6,
          strokeDiff: _v7
        }), _v0 && this.setPositionByOrigin(new _v44(_v1 + _v3 / 2, _v2 + _v4 / 2), _v29, _v29);
      }
      isStrokeAccountedForInDimensions() {
        return this.exactBoundingBox;
      }
      _getNonTransformedDimensions() {
        return this.exactBoundingBox ? new _v44(this.width, this.height) : super._getNonTransformedDimensions();
      }
      _getTransformedDimensions() {
        let _v0 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (!this.exactBoundingBox) return super._getTransformedDimensions(_v0);
        {
          var _v1, _v2, _v3, _v4;
          let _v0;
          if (Object.keys(_v0).some(_v0 => this.strokeUniform || this.constructor.layoutProperties.includes(_v0))) {
            let {
              width: _v0,
              height: _v1
            } = this._calcDimensions(_v0);
            _v0 = new _v44(null != (_v1 = _v0.width) ? _v1 : _v0, null != (_v2 = _v0.height) ? _v2 : _v1);
          } else _v0 = new _v44(null != (_v3 = _v0.width) ? _v3 : this.width, null != (_v4 = _v0.height) ? _v4 : this.height);
          return _v0.multiply(new _v44(_v0.scaleX || this.scaleX, _v0.scaleY || this.scaleY));
        }
      }
      _set(_v0, _v1) {
        let _v2 = this.initialized && this[_v0] !== _v1,
          _v3 = super._set(_v0, _v1);
        return this.exactBoundingBox && _v2 && (("scaleX" === _v0 || "scaleY" === _v0) && this.strokeUniform && this.constructor.layoutProperties.includes("strokeUniform") || this.constructor.layoutProperties.includes(_v0)) && this.setDimensions(), _v3;
      }
      toObject() {
        let _v0 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return _v5(_v5({}, super.toObject(_v0)), {}, {
          points: _v191(this.points)
        });
      }
      _toSVG() {
        let _v0 = [],
          _v1 = this.pathOffset.x,
          _v2 = this.pathOffset.y,
          _v3 = _v11.NUM_FRACTION_DIGITS;
        for (let _v0 = 0, _v1 = this.points.length; _v0 < _v1; _v0++) _v0.push(_v85(this.points[_v0].x - _v1, _v3), ",", _v85(this.points[_v0].y - _v2, _v3), " ");
        return ["<".concat(this.constructor.type.toLowerCase(), " "), "COMMON_PARTS", 'points="'.concat(_v0.join(""), '" />\n')];
      }
      _render(_v0) {
        let _v1 = this.points.length,
          _v2 = this.pathOffset.x,
          _v3 = this.pathOffset.y;
        if (!(!_v1 || isNaN(this.points[_v1 - 1].y))) {
          _v0.beginPath(), _v0.moveTo(this.points[0].x - _v2, this.points[0].y - _v3);
          for (let _v0 = 0; _v0 < _v1; _v0++) {
            let _v0 = this.points[_v0];
            _v0.lineTo(_v0.x - _v2, _v0.y - _v3);
          }
          this.isOpen() || _v0.closePath(), this._renderPaintInOrder(_v0);
        }
      }
      complexity() {
        return this.points.length;
      }
      static async fromElement(_v0, _v1, _v2) {
        return new this(_v353(_v0.getAttribute("points")), _v5(_v5({}, _v8(_v262(_v0, this.ATTRIBUTE_NAMES, _v2), _v354)), _v1));
      }
      static fromObject(_v0) {
        return this._fromObject(_v0, {
          extraParam: "points"
        });
      }
    }
    _v7(_v356, "ownDefaults", _v355), _v7(_v356, "type", "Polyline"), _v7(_v356, "layoutProperties", ["skewX", "skewY", "strokeLineCap", "strokeLineJoin", "strokeMiterLimit", "strokeWidth", "strokeUniform", "points"]), _v7(_v356, "cacheProperties", [..._v193, "points"]), _v7(_v356, "ATTRIBUTE_NAMES", [..._v244]), _v36.setClass(_v356), _v36.setSVGClass(_v356);
    class _v357 extends _v356 {
      static getDefaults() {
        return _v5(_v5({}, super.getDefaults()), _v356.ownDefaults);
      }
      isOpen() {
        return !1;
      }
    }
    _v7(_v357, "ownDefaults", _v355), _v7(_v357, "type", "Polygon"), _v36.setClass(_v357), _v36.setSVGClass(_v357);
    let _v358 = ["fontSize", "fontWeight", "fontFamily", "fontStyle"],
      _v359 = ["underline", "overline", "linethrough"],
      _v360 = [..._v358, "lineHeight", "text", "charSpacing", "textAlign", "styles", "path", "pathStartOffset", "pathSide", "pathAlign"],
      _v361 = [..._v360, ..._v359, "textBackgroundColor", "direction"],
      _v362 = [..._v358, ..._v359, "stroke", "strokeWidth", "fill", "deltaY", "textBackgroundColor"],
      _v363 = "justify",
      _v364 = "justify-left",
      _v365 = "justify-right",
      _v366 = "justify-center";
    class _v367 extends _v230 {
      isEmptyStyles(_v0) {
        if (!this.styles || void 0 !== _v0 && !this.styles[_v0]) return !0;
        let _v1 = void 0 === _v0 ? this.styles : {
          line: this.styles[_v0]
        };
        for (let _v0 in _v1) for (let _v0 in _v1[_v0]) for (let _v0 in _v1[_v0][_v0]) return !1;
        return !0;
      }
      styleHas(_v0, _v1) {
        if (!this.styles || void 0 !== _v1 && !this.styles[_v1]) return !1;
        let _v2 = void 0 === _v1 ? this.styles : {
          0: this.styles[_v1]
        };
        for (let _v0 in _v2) for (let _v0 in _v2[_v0]) if (void 0 !== _v2[_v0][_v0][_v0]) return !0;
        return !1;
      }
      cleanStyle(_v0) {
        if (!this.styles) return !1;
        let _v1 = this.styles,
          _v2 = 0,
          _v3,
          _v4,
          _v5 = !0,
          _v6 = 0;
        for (let _v0 in _v1) {
          for (let _v0 in _v3 = 0, _v1[_v0]) {
            let _v0 = _v1[_v0][_v0] || {},
              _v1 = void 0 !== _v0[_v0];
            _v2++, _v1 ? (_v4 ? _v0[_v0] !== _v4 && (_v5 = !1) : _v4 = _v0[_v0], _v0[_v0] === this[_v0] && delete _v0[_v0]) : _v5 = !1, 0 !== Object.keys(_v0).length ? _v3++ : delete _v1[_v0][_v0];
          }
          0 === _v3 && delete _v1[_v0];
        }
        for (let _v0 = 0; _v0 < this._textLines.length; _v0++) _v6 += this._textLines[_v0].length;
        _v5 && _v2 === _v6 && (this[_v0] = _v4, this.removeStyle(_v0));
      }
      removeStyle(_v0) {
        let _v1, _v2, _v3;
        if (!this.styles) return;
        let _v4 = this.styles;
        for (_v2 in _v4) {
          for (_v3 in _v1 = _v4[_v2]) delete _v1[_v3][_v0], 0 === Object.keys(_v1[_v3]).length && delete _v1[_v3];
          0 === Object.keys(_v1).length && delete _v4[_v2];
        }
      }
      _extendStyles(_v0, _v1) {
        let {
          lineIndex: _v2,
          charIndex: _v3
        } = this.get2DCursorLocation(_v0);
        this._getLineStyle(_v2) || this._setLineStyle(_v2);
        let _v4 = _v77(_v5(_v5({}, this._getStyleDeclaration(_v2, _v3)), _v1), _v0 => void 0 !== _v0);
        this._setStyleDeclaration(_v2, _v3, _v4);
      }
      getSelectionStyles(_v0, _v1, _v2) {
        let _v3 = [];
        for (let _v0 = _v0; _v0 < (_v1 || _v0); _v0++) _v3.push(this.getStyleAtPosition(_v0, _v2));
        return _v3;
      }
      getStyleAtPosition(_v0, _v1) {
        let {
          lineIndex: _v2,
          charIndex: _v3
        } = this.get2DCursorLocation(_v0);
        return _v1 ? this.getCompleteStyleDeclaration(_v2, _v3) : this._getStyleDeclaration(_v2, _v3);
      }
      setSelectionStyles(_v0, _v1, _v2) {
        for (let _v0 = _v1; _v0 < (_v2 || _v1); _v0++) this._extendStyles(_v0, _v0);
        this._forceClearCache = !0;
      }
      _getStyleDeclaration(_v0, _v1) {
        var _v2;
        let _v3 = this.styles && this.styles[_v0];
        return _v3 && null != (_v2 = _v3[_v1]) ? _v2 : {};
      }
      getCompleteStyleDeclaration(_v0, _v1) {
        return _v5(_v5({}, _v76(this, this.constructor._styleProperties)), this._getStyleDeclaration(_v0, _v1));
      }
      _setStyleDeclaration(_v0, _v1, _v2) {
        this.styles[_v0][_v1] = _v2;
      }
      _deleteStyleDeclaration(_v0, _v1) {
        delete this.styles[_v0][_v1];
      }
      _getLineStyle(_v0) {
        return !!this.styles[_v0];
      }
      _setLineStyle(_v0) {
        this.styles[_v0] = {};
      }
      _deleteLineStyle(_v0) {
        delete this.styles[_v0];
      }
    }
    _v7(_v367, "_styleProperties", _v362);
    let _v368 = /  +/g,
      _v369 = /"/g;
    function _v370(_v0, _v1, _v2, _v3, _v4) {
      return "		".concat(_v90(_v0, {
        left: _v1,
        top: _v2,
        width: _v3,
        height: _v4
      }), "\n");
    }
    let _v371 = ["textAnchor", "textDecoration", "dx", "dy", "top", "left", "fontSize", "strokeWidth"];
    class _v372 extends _v367 {
      static getDefaults() {
        return _v5(_v5({}, super.getDefaults()), _v372.ownDefaults);
      }
      constructor(_v0) {
        let _v1 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        super(_v5(_v5({}, _v1), {}, {
          text: _v0,
          styles: (null == _v1 ? void 0 : _v1.styles) || {}
        })), _v7(this, "__charBounds", []), this.initialized = !0, this.path && this.setPathInfo(), this.initDimensions(), this.setCoords();
      }
      setPathInfo() {
        let _v0 = this.path;
        _v0 && (_v0.segmentsInfo = _v307(_v0.path));
      }
      _splitText() {
        let _v0 = this._splitTextIntoLines(this.text);
        return this.textLines = _v0.lines, this._textLines = _v0.graphemeLines, this._unwrappedTextLines = _v0._unwrappedLines, this._text = _v0.graphemeText, _v0;
      }
      initDimensions() {
        this._splitText(), this._clearCache(), this.dirty = !0, this.path ? (this.width = this.path.width, this.height = this.path.height) : (this.width = this.calcTextWidth() || this.cursorWidth || this.MIN_TEXT_WIDTH, this.height = this.calcTextHeight()), this.textAlign.includes(_v363) && this.enlargeSpaces();
      }
      enlargeSpaces() {
        let _v0, _v1, _v2, _v3, _v4, _v5, _v6;
        for (let _v0 = 0, _v1 = this._textLines.length; _v0 < _v1; _v0++) if (!(this.textAlign !== _v363 && (_v0 === _v1 - 1 || this.isEndOfWrapping(_v0))) && (_v3 = 0, _v4 = this._textLines[_v0], (_v1 = this.getLineWidth(_v0)) < this.width && (_v6 = this.textLines[_v0].match(this._reSpacesAndTabs)))) {
          _v2 = _v6.length, _v0 = (this.width - _v1) / _v2;
          for (let _v0 = 0; _v0 <= _v4.length; _v0++) _v5 = this.__charBounds[_v0][_v0], this._reSpaceAndTab.test(_v4[_v0]) ? (_v5.width += _v0, _v5.kernedWidth += _v0, _v5.left += _v3, _v3 += _v0) : _v5.left += _v3;
        }
      }
      isEndOfWrapping(_v0) {
        return _v0 === this._textLines.length - 1;
      }
      missingNewlineOffset(_v0) {
        return 1;
      }
      get2DCursorLocation(_v0, _v1) {
        let _v2,
          _v3 = _v1 ? this._unwrappedTextLines : this._textLines;
        for (_v2 = 0; _v2 < _v3.length; _v2++) {
          if (_v0 <= _v3[_v2].length) return {
            lineIndex: _v2,
            charIndex: _v0
          };
          _v0 -= _v3[_v2].length + this.missingNewlineOffset(_v2, _v1);
        }
        return {
          lineIndex: _v2 - 1,
          charIndex: _v3[_v2 - 1].length < _v0 ? _v3[_v2 - 1].length : _v0
        };
      }
      toString() {
        return "#<Text (".concat(this.complexity(), '): { "text": "').concat(this.text, '", "fontFamily": "').concat(this.fontFamily, '" }>');
      }
      _getCacheCanvasDimensions() {
        let _v0 = super._getCacheCanvasDimensions(),
          _v1 = this.fontSize;
        return _v0.width += _v1 * _v0.zoomX, _v0.height += _v1 * _v0.zoomY, _v0;
      }
      _render(_v0) {
        let _v1 = this.path;
        _v1 && !_v1.isNotVisible() && _v1._render(_v0), this._setTextStyles(_v0), this._renderTextLinesBackground(_v0), this._renderTextDecoration(_v0, "underline"), this._renderText(_v0), this._renderTextDecoration(_v0, "overline"), this._renderTextDecoration(_v0, "linethrough");
      }
      _renderText(_v0) {
        "stroke" === this.paintFirst ? (this._renderTextStroke(_v0), this._renderTextFill(_v0)) : (this._renderTextFill(_v0), this._renderTextStroke(_v0));
      }
      _setTextStyles(_v0, _v1, _v2) {
        if (_v0.textBaseline = "alphabetic", this.path) switch (this.pathAlign) {
          case _v29:
            _v0.textBaseline = "middle";
            break;
          case "ascender":
            _v0.textBaseline = "top";
            break;
          case "descender":
            _v0.textBaseline = _v31;
        }
        _v0.font = this._getFontDeclaration(_v1, _v2);
      }
      calcTextWidth() {
        let _v0 = this.getLineWidth(0);
        for (let _v0 = 1, _v1 = this._textLines.length; _v0 < _v1; _v0++) {
          let _v0 = this.getLineWidth(_v0);
          _v0 > _v0 && (_v0 = _v0);
        }
        return _v0;
      }
      _renderTextLine(_v0, _v1, _v2, _v3, _v4, _v5) {
        this._renderChars(_v0, _v1, _v2, _v3, _v4, _v5);
      }
      _renderTextLinesBackground(_v0) {
        if (!this.textBackgroundColor && !this.styleHas("textBackgroundColor")) return;
        let _v1 = _v0.fillStyle,
          _v2 = this._getLeftOffset(),
          _v3 = this._getTopOffset();
        for (let _v0 = 0, _v1 = this._textLines.length; _v0 < _v1; _v0++) {
          let _v0,
            _v1,
            _v2 = this.getHeightOfLine(_v0);
          if (!this.textBackgroundColor && !this.styleHas("textBackgroundColor", _v0)) {
            _v3 += _v2;
            continue;
          }
          let _v3 = this._textLines[_v0].length,
            _v4 = this._getLineLeftOffset(_v0),
            _v5 = 0,
            _v6 = 0,
            _v7 = this.getValueOfPropertyAt(_v0, 0, "textBackgroundColor");
          for (let _v0 = 0; _v0 < _v3; _v0++) {
            let _v0 = this.__charBounds[_v0][_v0];
            _v1 = this.getValueOfPropertyAt(_v0, _v0, "textBackgroundColor"), this.path ? (_v0.save(), _v0.translate(_v0.renderLeft, _v0.renderTop), _v0.rotate(_v0.angle), _v0.fillStyle = _v1, _v1 && _v0.fillRect(-_v0.width / 2, -_v2 / this.lineHeight * (1 - this._fontSizeFraction), _v0.width, _v2 / this.lineHeight), _v0.restore()) : _v1 !== _v7 ? (_v0 = _v2 + _v4 + _v6, "rtl" === this.direction && (_v0 = this.width - _v0 - _v5), _v0.fillStyle = _v7, _v7 && _v0.fillRect(_v0, _v3, _v5, _v2 / this.lineHeight), _v6 = _v0.left, _v5 = _v0.width, _v7 = _v1) : _v5 += _v0.kernedWidth;
          }
          _v1 && !this.path && (_v0 = _v2 + _v4 + _v6, "rtl" === this.direction && (_v0 = this.width - _v0 - _v5), _v0.fillStyle = _v1, _v0.fillRect(_v0, _v3, _v5, _v2 / this.lineHeight)), _v3 += _v2;
        }
        _v0.fillStyle = _v1, this._removeShadow(_v0);
      }
      _measureChar(_v0, _v1, _v2, _v3) {
        let _v4,
          _v5,
          _v6,
          _v7,
          _v8 = _v22.getFontCache(_v1),
          _v9 = this._getFontDeclaration(_v1),
          _v10 = _v2 + _v0,
          _v11 = _v2 && _v9 === this._getFontDeclaration(_v3),
          _v12 = _v1.fontSize / this.CACHE_FONT_SIZE;
        if (_v2 && void 0 !== _v8[_v2] && (_v6 = _v8[_v2]), void 0 !== _v8[_v0] && (_v7 = _v4 = _v8[_v0]), _v11 && void 0 !== _v8[_v10] && (_v7 = (_v5 = _v8[_v10]) - _v6), void 0 === _v4 || void 0 === _v6 || void 0 === _v5) {
          let _v0 = function () {
            if (!_v2) {
              let _v0 = _v53();
              _v0.width = _v0.height = 0, _v2 = _v0.getContext("2d");
            }
            return _v2;
          }();
          this._setTextStyles(_v0, _v1, !0), void 0 === _v4 && (_v7 = _v4 = _v0.measureText(_v0).width, _v8[_v0] = _v4), void 0 === _v6 && _v11 && _v2 && (_v6 = _v0.measureText(_v2).width, _v8[_v2] = _v6), _v11 && void 0 === _v5 && (_v5 = _v0.measureText(_v10).width, _v8[_v10] = _v5, _v7 = _v5 - _v6);
        }
        return {
          width: _v4 * _v12,
          kernedWidth: _v7 * _v12
        };
      }
      getHeightOfChar(_v0, _v1) {
        return this.getValueOfPropertyAt(_v0, _v1, "fontSize");
      }
      measureLine(_v0) {
        let _v1 = this._measureLine(_v0);
        return 0 !== this.charSpacing && (_v1.width -= this._getWidthOfCharSpacing()), _v1.width < 0 && (_v1.width = 0), _v1;
      }
      _measureLine(_v0) {
        let _v1 = 0,
          _v2,
          _v3,
          _v4 = this.pathSide === _v32,
          _v5 = this.path,
          _v6 = this._textLines[_v0],
          _v7 = _v6.length,
          _v8 = Array(_v7);
        this.__charBounds[_v0] = _v8;
        for (let _v0 = 0; _v0 < _v7; _v0++) {
          let _v0 = _v6[_v0];
          _v3 = this._getGraphemeBox(_v0, _v0, _v0, _v2), _v8[_v0] = _v3, _v1 += _v3.kernedWidth, _v2 = _v0;
        }
        if (_v8[_v7] = {
          left: _v3 ? _v3.left + _v3.width : 0,
          width: 0,
          kernedWidth: 0,
          height: this.fontSize,
          deltaY: 0
        }, _v5 && _v5.segmentsInfo) {
          let _v0 = 0,
            _v1 = _v5.segmentsInfo[_v5.segmentsInfo.length - 1].length;
          switch (this.textAlign) {
            case _v30:
              _v0 = _v4 ? _v1 - _v1 : 0;
              break;
            case _v29:
              _v0 = (_v1 - _v1) / 2;
              break;
            case _v32:
              _v0 = _v4 ? 0 : _v1 - _v1;
          }
          _v0 += this.pathStartOffset * (_v4 ? -1 : 1);
          for (let _v0 = _v4 ? _v7 - 1 : 0; _v4 ? _v0 >= 0 : _v0 < _v7; _v4 ? _v0-- : _v0++) _v3 = _v8[_v0], _v0 > _v1 ? _v0 %= _v1 : _v0 < 0 && (_v0 += _v1), this._setGraphemeOnPath(_v0, _v3), _v0 += _v3.kernedWidth;
        }
        return {
          width: _v1,
          numOfSpaces: 0
        };
      }
      _setGraphemeOnPath(_v0, _v1) {
        let _v2 = _v0 + _v1.kernedWidth / 2,
          _v3 = this.path,
          _v4 = _v308(_v3.path, _v2, _v3.segmentsInfo);
        _v1.renderLeft = _v4.x - _v3.pathOffset.x, _v1.renderTop = _v4.y - _v3.pathOffset.y, _v1.angle = _v4.angle + (this.pathSide === _v32 ? Math.PI : 0);
      }
      _getGraphemeBox(_v0, _v1, _v2, _v3, _v4) {
        let _v5 = this.getCompleteStyleDeclaration(_v1, _v2),
          _v6 = _v3 ? this.getCompleteStyleDeclaration(_v1, _v2 - 1) : {},
          _v7 = this._measureChar(_v0, _v5, _v3, _v6),
          _v8 = _v7.kernedWidth,
          _v9 = _v7.width,
          _v10;
        0 !== this.charSpacing && (_v9 += _v10 = this._getWidthOfCharSpacing(), _v8 += _v10);
        let _v11 = {
          width: _v9,
          left: 0,
          height: _v5.fontSize,
          kernedWidth: _v8,
          deltaY: _v5.deltaY
        };
        if (_v2 > 0 && !_v4) {
          let _v0 = this.__charBounds[_v1][_v2 - 1];
          _v11.left = _v0.left + _v0.width + _v7.kernedWidth - _v7.width;
        }
        return _v11;
      }
      getHeightOfLine(_v0) {
        if (this.__lineHeights[_v0]) return this.__lineHeights[_v0];
        let _v1 = this.getHeightOfChar(_v0, 0);
        for (let _v0 = 1, _v1 = this._textLines[_v0].length; _v0 < _v1; _v0++) _v1 = Math.max(this.getHeightOfChar(_v0, _v0), _v1);
        return this.__lineHeights[_v0] = _v1 * this.lineHeight * this._fontSizeMult;
      }
      calcTextHeight() {
        let _v0,
          _v1 = 0;
        for (let _v0 = 0, _v1 = this._textLines.length; _v0 < _v1; _v0++) _v0 = this.getHeightOfLine(_v0), _v1 += _v0 === _v1 - 1 ? _v0 / this.lineHeight : _v0;
        return _v1;
      }
      _getLeftOffset() {
        return "ltr" === this.direction ? -this.width / 2 : this.width / 2;
      }
      _getTopOffset() {
        return -this.height / 2;
      }
      _renderTextCommon(_v0, _v1) {
        _v0.save();
        let _v2 = 0,
          _v3 = this._getLeftOffset(),
          _v4 = this._getTopOffset();
        for (let _v0 = 0, _v1 = this._textLines.length; _v0 < _v1; _v0++) {
          let _v0 = this.getHeightOfLine(_v0),
            _v1 = _v0 / this.lineHeight,
            _v2 = this._getLineLeftOffset(_v0);
          this._renderTextLine(_v1, _v0, this._textLines[_v0], _v3 + _v2, _v4 + _v2 + _v1, _v0), _v2 += _v0;
        }
        _v0.restore();
      }
      _renderTextFill(_v0) {
        (this.fill || this.styleHas("fill")) && this._renderTextCommon(_v0, "fillText");
      }
      _renderTextStroke(_v0) {
        (!this.stroke || 0 === this.strokeWidth) && this.isEmptyStyles() || (this.shadow && !this.shadow.affectStroke && this._removeShadow(_v0), _v0.save(), this._setLineDash(_v0, this.strokeDashArray), _v0.beginPath(), this._renderTextCommon(_v0, "strokeText"), _v0.closePath(), _v0.restore());
      }
      _renderChars(_v0, _v1, _v2, _v3, _v4, _v5) {
        let _v6 = this.getHeightOfLine(_v5),
          _v7 = this.textAlign.includes(_v363),
          _v8 = this.path,
          _v9 = !_v7 && 0 === this.charSpacing && this.isEmptyStyles(_v5) && !_v8,
          _v10 = "ltr" === this.direction,
          _v11 = "ltr" === this.direction ? 1 : -1,
          _v12 = _v1.direction,
          _v13,
          _v14,
          _v15 = "",
          _v16,
          _v17 = 0,
          _v18,
          _v19;
        if (_v1.save(), _v12 !== this.direction && (_v1.canvas.setAttribute("dir", _v10 ? "ltr" : "rtl"), _v1.direction = _v10 ? "ltr" : "rtl", _v1.textAlign = _v10 ? _v30 : _v32), _v4 -= _v6 * this._fontSizeFraction / this.lineHeight, _v9) {
          this._renderChar(_v0, _v1, _v5, 0, _v2.join(""), _v3, _v4), _v1.restore();
          return;
        }
        for (let _v0 = 0, _v1 = _v2.length - 1; _v0 <= _v1; _v0++) _v18 = _v0 === _v1 || this.charSpacing || _v8, _v15 += _v2[_v0], _v16 = this.__charBounds[_v5][_v0], 0 === _v17 ? (_v3 += _v11 * (_v16.kernedWidth - _v16.width), _v17 += _v16.width) : _v17 += _v16.kernedWidth, _v7 && !_v18 && this._reSpaceAndTab.test(_v2[_v0]) && (_v18 = !0), _v18 || (_v18 = _v241(_v13 = _v13 || this.getCompleteStyleDeclaration(_v5, _v0), _v14 = this.getCompleteStyleDeclaration(_v5, _v0 + 1), !1)), _v18 && (_v8 ? (_v1.save(), _v1.translate(_v16.renderLeft, _v16.renderTop), _v1.rotate(_v16.angle), this._renderChar(_v0, _v1, _v5, _v0, _v15, -_v17 / 2, 0), _v1.restore()) : (_v19 = _v3, this._renderChar(_v0, _v1, _v5, _v0, _v15, _v19, _v4)), _v15 = "", _v13 = _v14, _v3 += _v11 * _v17, _v17 = 0);
        _v1.restore();
      }
      _applyPatternGradientTransformText(_v0) {
        let _v1 = _v53(),
          _v2 = this.width + this.strokeWidth,
          _v3 = this.height + this.strokeWidth,
          _v4 = _v1.getContext("2d");
        return _v1.width = _v2, _v1.height = _v3, _v4.beginPath(), _v4.moveTo(0, 0), _v4.lineTo(_v2, 0), _v4.lineTo(_v2, _v3), _v4.lineTo(0, _v3), _v4.closePath(), _v4.translate(_v2 / 2, _v3 / 2), _v4.fillStyle = _v0.toLive(_v4), this._applyPatternGradientTransform(_v4, _v0), _v4.fill(), _v4.createPattern(_v1, "no-repeat");
      }
      handleFiller(_v0, _v1, _v2) {
        let _v3, _v4;
        if (_v91(_v2)) if ("percentage" === _v2.gradientUnits || _v2.gradientTransform || _v2.patternTransform) return _v3 = -this.width / 2, _v4 = -this.height / 2, _v0.translate(_v3, _v4), _v0[_v1] = this._applyPatternGradientTransformText(_v2), {
          offsetX: _v3,
          offsetY: _v4
        };else return _v0[_v1] = _v2.toLive(_v0), this._applyPatternGradientTransform(_v0, _v2);
        return _v0[_v1] = _v2, {
          offsetX: 0,
          offsetY: 0
        };
      }
      _setStrokeStyles(_v0, _v1) {
        let {
          stroke: _v2,
          strokeWidth: _v3
        } = _v1;
        return _v0.lineWidth = _v3, _v0.lineCap = this.strokeLineCap, _v0.lineDashOffset = this.strokeDashOffset, _v0.lineJoin = this.strokeLineJoin, _v0.miterLimit = this.strokeMiterLimit, this.handleFiller(_v0, "strokeStyle", _v2);
      }
      _setFillStyles(_v0, _v1) {
        let {
          fill: _v2
        } = _v1;
        return this.handleFiller(_v0, "fillStyle", _v2);
      }
      _renderChar(_v0, _v1, _v2, _v3, _v4, _v5, _v6) {
        let _v7 = this._getStyleDeclaration(_v2, _v3),
          _v8 = this.getCompleteStyleDeclaration(_v2, _v3),
          _v9 = "fillText" === _v0 && _v8.fill,
          _v10 = "strokeText" === _v0 && _v8.stroke && _v8.strokeWidth;
        if (_v10 || _v9) {
          if (_v1.save(), _v1.font = this._getFontDeclaration(_v8), _v7.textBackgroundColor && this._removeShadow(_v1), _v7.deltaY && (_v6 += _v7.deltaY), _v9) {
            let _v0 = this._setFillStyles(_v1, _v8);
            _v1.fillText(_v4, _v5 - _v0.offsetX, _v6 - _v0.offsetY);
          }
          if (_v10) {
            let _v0 = this._setStrokeStyles(_v1, _v8);
            _v1.strokeText(_v4, _v5 - _v0.offsetX, _v6 - _v0.offsetY);
          }
          _v1.restore();
        }
      }
      setSuperscript(_v0, _v1) {
        this._setScript(_v0, _v1, this.superscript);
      }
      setSubscript(_v0, _v1) {
        this._setScript(_v0, _v1, this.subscript);
      }
      _setScript(_v0, _v1, _v2) {
        let _v3 = this.get2DCursorLocation(_v0, !0),
          _v4 = this.getValueOfPropertyAt(_v3.lineIndex, _v3.charIndex, "fontSize"),
          _v5 = this.getValueOfPropertyAt(_v3.lineIndex, _v3.charIndex, "deltaY"),
          _v6 = {
            fontSize: _v4 * _v2.size,
            deltaY: _v5 + _v4 * _v2.baseline
          };
        this.setSelectionStyles(_v6, _v0, _v1);
      }
      _getLineLeftOffset(_v0) {
        let _v1 = this.getLineWidth(_v0),
          _v2 = this.width - _v1,
          _v3 = this.textAlign,
          _v4 = this.direction,
          _v5 = this.isEndOfWrapping(_v0),
          _v6 = 0;
        return _v3 !== _v363 && (_v3 !== _v366 || _v5) && (_v3 !== _v365 || _v5) && (_v3 !== _v364 || _v5) ? (_v3 === _v29 && (_v6 = _v2 / 2), _v3 === _v32 && (_v6 = _v2), _v3 === _v366 && (_v6 = _v2 / 2), _v3 === _v365 && (_v6 = _v2), "rtl" === _v4 && (_v3 === _v32 || _v3 === _v363 || _v3 === _v365 ? _v6 = 0 : _v3 === _v30 || _v3 === _v364 ? _v6 = -_v2 : (_v3 === _v29 || _v3 === _v366) && (_v6 = -_v2 / 2)), _v6) : 0;
      }
      _clearCache() {
        this._forceClearCache = !1, this.__lineWidths = [], this.__lineHeights = [], this.__charBounds = [];
      }
      getLineWidth(_v0) {
        if (void 0 !== this.__lineWidths[_v0]) return this.__lineWidths[_v0];
        let {
          width: _v1
        } = this.measureLine(_v0);
        return this.__lineWidths[_v0] = _v1, _v1;
      }
      _getWidthOfCharSpacing() {
        return 0 !== this.charSpacing ? this.fontSize * this.charSpacing / 0 : 0;
      }
      getValueOfPropertyAt(_v0, _v1, _v2) {
        var _v3;
        return null != (_v3 = this._getStyleDeclaration(_v0, _v1)[_v2]) ? _v3 : this[_v2];
      }
      _renderTextDecoration(_v0, _v1) {
        if (!this[_v1] && !this.styleHas(_v1)) return;
        let _v2 = this._getTopOffset(),
          _v3 = this._getLeftOffset(),
          _v4 = this.path,
          _v5 = this._getWidthOfCharSpacing(),
          _v6 = this.offsets[_v1];
        for (let _v0 = 0, _v1 = this._textLines.length; _v0 < _v1; _v0++) {
          let _v0,
            _v1,
            _v2 = this.getHeightOfLine(_v0);
          if (!this[_v1] && !this.styleHas(_v1, _v0)) {
            _v2 += _v2;
            continue;
          }
          let _v3 = this._textLines[_v0],
            _v4 = _v2 / this.lineHeight,
            _v5 = this._getLineLeftOffset(_v0),
            _v6 = 0,
            _v7 = 0,
            _v8 = this.getValueOfPropertyAt(_v0, 0, _v1),
            _v9 = this.getValueOfPropertyAt(_v0, 0, "fill"),
            _v10 = _v2 + _v4 * (1 - this._fontSizeFraction),
            _v11 = this.getHeightOfChar(_v0, 0),
            _v12 = this.getValueOfPropertyAt(_v0, 0, "deltaY");
          for (let _v0 = 0, _v1 = _v3.length; _v0 < _v1; _v0++) {
            let _v0 = this.__charBounds[_v0][_v0];
            _v0 = this.getValueOfPropertyAt(_v0, _v0, _v1), _v1 = this.getValueOfPropertyAt(_v0, _v0, "fill");
            let _v1 = this.getHeightOfChar(_v0, _v0),
              _v2 = this.getValueOfPropertyAt(_v0, _v0, "deltaY");
            if (_v4 && _v0 && _v1) _v0.save(), _v0.fillStyle = _v9, _v0.translate(_v0.renderLeft, _v0.renderTop), _v0.rotate(_v0.angle), _v0.fillRect(-_v0.kernedWidth / 2, _v6 * _v1 + _v2, _v0.kernedWidth, this.fontSize / 15), _v0.restore();else if ((_v0 !== _v8 || _v1 !== _v9 || _v1 !== _v11 || _v2 !== _v12) && _v7 > 0) {
              let _v0 = _v3 + _v5 + _v6;
              "rtl" === this.direction && (_v0 = this.width - _v0 - _v7), _v8 && _v9 && (_v0.fillStyle = _v9, _v0.fillRect(_v0, _v10 + _v6 * _v11 + _v12, _v7, this.fontSize / 15)), _v6 = _v0.left, _v7 = _v0.width, _v8 = _v0, _v9 = _v1, _v11 = _v1, _v12 = _v2;
            } else _v7 += _v0.kernedWidth;
          }
          let _v13 = _v3 + _v5 + _v6;
          "rtl" === this.direction && (_v13 = this.width - _v13 - _v7), _v0.fillStyle = _v1, _v0 && _v1 && _v0.fillRect(_v13, _v10 + _v6 * _v11 + _v12, _v7 - _v5, this.fontSize / 15), _v2 += _v2;
        }
        this._removeShadow(_v0);
      }
      _getFontDeclaration() {
        let {
            fontFamily: _v0 = this.fontFamily,
            fontStyle: _v1 = this.fontStyle,
            fontWeight: _v2 = this.fontWeight,
            fontSize: _v3 = this.fontSize
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          _v4 = arguments.length > 1 ? arguments[1] : void 0,
          _v5 = _v0.includes("'") || _v0.includes('"') || _v0.includes(",") || _v372.genericFonts.includes(_v0.toLowerCase()) ? _v0 : '"'.concat(_v0, '"');
        return [_v1, _v2, "".concat(_v4 ? this.CACHE_FONT_SIZE : _v3, "px"), _v5].join(" ");
      }
      render(_v0) {
        !this.visible || (!this.canvas || !this.canvas.skipOffscreen || this.group || this.isOnScreen()) && (this._forceClearCache && this.initDimensions(), super.render(_v0));
      }
      graphemeSplit(_v0) {
        return _v238(_v0);
      }
      _splitTextIntoLines(_v0) {
        let _v1 = _v0.split(this._reNewline),
          _v2 = Array(_v1.length),
          _v3 = ["\n"],
          _v4 = [];
        for (let _v0 = 0; _v0 < _v1.length; _v0++) _v2[_v0] = this.graphemeSplit(_v1[_v0]), _v4 = _v4.concat(_v2[_v0], _v3);
        return _v4.pop(), {
          _unwrappedLines: _v2,
          lines: _v1,
          graphemeText: _v4,
          graphemeLines: _v2
        };
      }
      toObject() {
        let _v0 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return _v5(_v5({}, super.toObject([..._v361, ..._v0])), {}, {
          styles: _v242(this.styles, this.text)
        }, this.path ? {
          path: this.path.toObject()
        } : {});
      }
      set(_v0, _v1) {
        let {
          textLayoutProperties: _v2
        } = this.constructor;
        super.set(_v0, _v1);
        let _v3 = !1,
          _v4 = !1;
        if ("object" == typeof _v0) for (let _v0 in _v0) "path" === _v0 && this.setPathInfo(), _v3 = _v3 || _v2.includes(_v0), _v4 = _v4 || "path" === _v0;else _v3 = _v2.includes(_v0), _v4 = "path" === _v0;
        return _v4 && this.setPathInfo(), _v3 && this.initialized && (this.initDimensions(), this.setCoords()), this;
      }
      complexity() {
        return 1;
      }
      static async fromElement(_v0, _v1, _v2) {
        let _v3 = _v262(_v0, _v372.ATTRIBUTE_NAMES, _v2),
          _v4 = _v5(_v5({}, _v1), _v3),
          {
            textAnchor: _v5 = _v30,
            textDecoration: _v6 = "",
            dx: _v7 = 0,
            dy: _v8 = 0,
            top: _v9 = 0,
            left: _v10 = 0,
            fontSize: _v11 = 16,
            strokeWidth: _v12 = 1
          } = _v4,
          _v13 = _v8(_v4, _v371),
          _v14 = new this((_v0.textContent || "").replace(/^\s+|\s+$|\n+/g, "").replace(/\s+/g, " "), _v5({
            left: _v10 + _v7,
            top: _v9 + _v8,
            underline: _v6.includes("underline"),
            overline: _v6.includes("overline"),
            linethrough: _v6.includes("line-through"),
            strokeWidth: 0,
            fontSize: _v11
          }, _v13)),
          _v15 = _v14.getScaledHeight() / _v14.height,
          _v16 = (_v14.height + _v14.strokeWidth) * _v14.lineHeight - _v14.height,
          _v17 = _v14.getScaledHeight() + _v16 * _v15,
          _v18 = 0;
        return _v5 === _v29 && (_v18 = _v14.getScaledWidth() / 2), _v5 === _v32 && (_v18 = _v14.getScaledWidth()), _v14.set({
          left: _v14.left - _v18,
          top: _v14.top - (_v17 - _v14.fontSize * (.07 + _v14._fontSizeFraction)) / _v14.lineHeight,
          strokeWidth: _v12
        }), _v14;
      }
      static fromObject(_v0) {
        return this._fromObject(_v5(_v5({}, _v0), {}, {
          styles: _v243(_v0.styles || {}, _v0.text)
        }), {
          extraParam: "text"
        });
      }
    }
    _v7(_v372, "textLayoutProperties", _v360), _v7(_v372, "cacheProperties", [..._v193, ..._v361]), _v7(_v372, "ownDefaults", {
      _reNewline: _v34,
      _reSpacesAndTabs: /[ \t\r]/g,
      _reSpaceAndTab: /[ \t\r]/,
      _reWords: /\S+/g,
      fontSize: 40,
      fontWeight: "normal",
      fontFamily: "Times New Roman",
      underline: !1,
      overline: !1,
      linethrough: !1,
      textAlign: _v30,
      fontStyle: "normal",
      lineHeight: 1.16,
      superscript: {
        size: .6,
        baseline: -.35
      },
      subscript: {
        size: .6,
        baseline: .11
      },
      textBackgroundColor: "",
      stroke: null,
      shadow: null,
      path: void 0,
      pathStartOffset: 0,
      pathSide: _v30,
      pathAlign: "baseline",
      _fontSizeFraction: .222,
      offsets: {
        underline: .1,
        linethrough: -.315,
        overline: -.88
      },
      _fontSizeMult: 1.13,
      charSpacing: 0,
      deltaY: 0,
      direction: "ltr",
      CACHE_FONT_SIZE: 400,
      MIN_TEXT_WIDTH: 2
    }), _v7(_v372, "type", "Text"), _v7(_v372, "genericFonts", ["sans-serif", "serif", "cursive", "fantasy", "monospace"]), _v7(_v372, "ATTRIBUTE_NAMES", _v244.concat("x", "y", "dx", "dy", "font-family", "font-style", "font-weight", "font-size", "letter-spacing", "text-decoration", "text-anchor")), _v229(_v372, [class extends _v131 {
      _toSVG() {
        let _v0 = this._getSVGLeftTopOffsets(),
          _v1 = this._getSVGTextAndBg(_v0.textTop, _v0.textLeft);
        return this._wrapSVGTextAndBg(_v1);
      }
      toSVG(_v0) {
        return this._createBaseSVGMarkup(this._toSVG(), {
          reviver: _v0,
          noStyle: !0,
          withShadow: !0
        });
      }
      _getSVGLeftTopOffsets() {
        return {
          textLeft: -this.width / 2,
          textTop: -this.height / 2,
          lineTop: this.getHeightOfLine(0)
        };
      }
      _wrapSVGTextAndBg(_v0) {
        let {
            textBgRects: _v1,
            textSpans: _v2
          } = _v0,
          _v3 = this.getSvgTextDecoration(this);
        return [_v1.join(""), '		<text xml:space="preserve" ', this.fontFamily ? 'font-family="'.concat(this.fontFamily.replace(_v369, "'"), '" ') : "", this.fontSize ? 'font-size="'.concat(this.fontSize, '" ') : "", this.fontStyle ? 'font-style="'.concat(this.fontStyle, '" ') : "", this.fontWeight ? 'font-weight="'.concat(this.fontWeight, '" ') : "", _v3 ? 'text-decoration="'.concat(_v3, '" ') : "", "rtl" === this.direction ? 'direction="'.concat(this.direction, '" ') : "", 'style="', this.getSvgStyles(!0), '"', this.addPaintOrder(), " >", _v2.join(""), "</text>\n"];
      }
      _getSVGTextAndBg(_v0, _v1) {
        let _v2 = [],
          _v3 = [],
          _v4 = _v0,
          _v5;
        this.backgroundColor && _v3.push(..._v370(this.backgroundColor, -this.width / 2, -this.height / 2, this.width, this.height));
        for (let _v0 = 0, _v1 = this._textLines.length; _v0 < _v1; _v0++) _v5 = this._getLineLeftOffset(_v0), "rtl" === this.direction && (_v5 += this.width), (this.textBackgroundColor || this.styleHas("textBackgroundColor", _v0)) && this._setSVGTextLineBg(_v3, _v0, _v1 + _v5, _v4), this._setSVGTextLineText(_v2, _v0, _v1 + _v5, _v4), _v4 += this.getHeightOfLine(_v0);
        return {
          textSpans: _v2,
          textBgRects: _v3
        };
      }
      _createTextCharSpan(_v0, _v1, _v2, _v3) {
        let _v4 = this.getSvgSpanStyles(_v1, _v0 !== _v0.trim() || !!_v0.match(_v368)),
          _v5 = _v1.deltaY,
          _v6 = _v5 ? ' dy="'.concat(_v85(_v5, _v11.NUM_FRACTION_DIGITS), '" ') : "";
        return '<tspan x="'.concat(_v85(_v2, _v11.NUM_FRACTION_DIGITS), '" y="').concat(_v85(_v3, _v11.NUM_FRACTION_DIGITS), '" ').concat(_v6).concat(_v4 ? 'style="'.concat(_v4, '"') : "", ">").concat(_v237(_v0), "</tspan>");
      }
      _setSVGTextLineText(_v0, _v1, _v2, _v3) {
        let _v4 = this.getHeightOfLine(_v1),
          _v5 = this.textAlign.includes(_v363),
          _v6 = this._textLines[_v1],
          _v7,
          _v8,
          _v9 = "",
          _v10,
          _v11,
          _v12 = 0,
          _v13;
        _v3 += _v4 * (1 - this._fontSizeFraction) / this.lineHeight;
        for (let _v0 = 0, _v1 = _v6.length - 1; _v0 <= _v1; _v0++) _v13 = _v0 === _v1 || this.charSpacing, _v9 += _v6[_v0], _v10 = this.__charBounds[_v1][_v0], 0 === _v12 ? (_v2 += _v10.kernedWidth - _v10.width, _v12 += _v10.width) : _v12 += _v10.kernedWidth, _v5 && !_v13 && this._reSpaceAndTab.test(_v6[_v0]) && (_v13 = !0), _v13 || (_v13 = _v241(_v7 = _v7 || this.getCompleteStyleDeclaration(_v1, _v0), _v8 = this.getCompleteStyleDeclaration(_v1, _v0 + 1), !0)), _v13 && (_v11 = this._getStyleDeclaration(_v1, _v0), _v0.push(this._createTextCharSpan(_v9, _v11, _v2, _v3)), _v9 = "", _v7 = _v8, "rtl" === this.direction ? _v2 -= _v12 : _v2 += _v12, _v12 = 0);
      }
      _setSVGTextLineBg(_v0, _v1, _v2, _v3) {
        let _v4 = this._textLines[_v1],
          _v5 = this.getHeightOfLine(_v1) / this.lineHeight,
          _v6 = 0,
          _v7 = 0,
          _v8,
          _v9 = this.getValueOfPropertyAt(_v1, 0, "textBackgroundColor");
        for (let _v0 = 0; _v0 < _v4.length; _v0++) {
          let {
            left: _v0,
            width: _v1,
            kernedWidth: _v2
          } = this.__charBounds[_v1][_v0];
          (_v8 = this.getValueOfPropertyAt(_v1, _v0, "textBackgroundColor")) !== _v9 ? (_v9 && _v0.push(..._v370(_v9, _v2 + _v7, _v3, _v6, _v5)), _v7 = _v0, _v6 = _v1, _v9 = _v8) : _v6 += _v2;
        }
        _v8 && _v0.push(..._v370(_v9, _v2 + _v7, _v3, _v6, _v5));
      }
      _getSVGLineTopOffset(_v0) {
        let _v1 = 0,
          _v2;
        for (_v2 = 0; _v2 < _v0; _v2++) _v1 += this.getHeightOfLine(_v2);
        let _v3 = this.getHeightOfLine(_v2);
        return {
          lineTop: _v1,
          offset: (this._fontSizeMult - this._fontSizeFraction) * _v3 / (this.lineHeight * this._fontSizeMult)
        };
      }
      getSvgStyles(_v0) {
        return "".concat(super.getSvgStyles(_v0), " white-space: pre;");
      }
      getSvgSpanStyles(_v0, _v1) {
        let {
            fontFamily: _v2,
            strokeWidth: _v3,
            stroke: _v4,
            fill: _v5,
            fontSize: _v6,
            fontStyle: _v7,
            fontWeight: _v8,
            deltaY: _v9
          } = _v0,
          _v10 = this.getSvgTextDecoration(_v0);
        return [_v4 ? _v89("stroke", _v4) : "", _v3 ? "stroke-width: ".concat(_v3, "; ") : "", _v2 ? "font-family: ".concat(!_v2.includes("'") && !_v2.includes('"') ? "'".concat(_v2, "'") : _v2, "; ") : "", _v6 ? "font-size: ".concat(_v6, "px; ") : "", _v7 ? "font-style: ".concat(_v7, "; ") : "", _v8 ? "font-weight: ".concat(_v8, "; ") : "", _v10 ? "text-decoration: ".concat(_v10, "; ") : _v10, _v5 ? _v89("fill", _v5) : "", _v9 ? "baseline-shift: ".concat(-_v9, "; ") : "", _v1 ? "white-space: pre; " : ""].join("");
      }
      getSvgTextDecoration(_v0) {
        return ["overline", "underline", "line-through"].filter(_v0 => _v0[_v0.replace("-", "")]).join(" ");
      }
    }]), _v36.setClass(_v372), _v36.setSVGClass(_v372);
    class _v373 {
      constructor(_v0) {
        _v7(this, "target", void 0), _v7(this, "__mouseDownInPlace", !1), _v7(this, "__dragStartFired", !1), _v7(this, "__isDraggingOver", !1), _v7(this, "__dragStartSelection", void 0), _v7(this, "__dragImageDisposer", void 0), _v7(this, "_dispose", void 0), this.target = _v0;
        const _v1 = [this.target.on("dragenter", this.dragEnterHandler.bind(this)), this.target.on("dragover", this.dragOverHandler.bind(this)), this.target.on("dragleave", this.dragLeaveHandler.bind(this)), this.target.on("dragend", this.dragEndHandler.bind(this)), this.target.on("drop", this.dropHandler.bind(this))];
        this._dispose = () => {
          _v1.forEach(_v0 => _v0()), this._dispose = void 0;
        };
      }
      isPointerOverSelection(_v0) {
        let _v1 = this.target,
          _v2 = _v1.getSelectionStartFromPointer(_v0);
        return _v1.isEditing && _v2 >= _v1.selectionStart && _v2 <= _v1.selectionEnd && _v1.selectionStart < _v1.selectionEnd;
      }
      start(_v0) {
        return this.__mouseDownInPlace = this.isPointerOverSelection(_v0);
      }
      isActive() {
        return this.__mouseDownInPlace;
      }
      end(_v0) {
        let _v1 = this.isActive();
        return _v1 && !this.__dragStartFired && (this.target.setCursorByClick(_v0), this.target.initDelayedCursor(!0)), this.__mouseDownInPlace = !1, this.__dragStartFired = !1, this.__isDraggingOver = !1, _v1;
      }
      getDragStartSelection() {
        return this.__dragStartSelection;
      }
      setDragImage(_v0, _v1) {
        var _v2;
        let {
            selectionStart: _v3,
            selectionEnd: _v4
          } = _v1,
          _v5 = this.target,
          _v6 = _v5.canvas,
          _v7 = new _v44(_v5.flipX ? -1 : 1, _v5.flipY ? -1 : 1),
          _v8 = _v5._getCursorBoundaries(_v3),
          _v9 = new _v44(_v8.left + _v8.leftOffset, _v8.top + _v8.topOffset).multiply(_v7).transform(_v5.calcTransformMatrix()),
          _v10 = _v6.getScenePoint(_v0).subtract(_v9),
          _v11 = _v5.getCanvasRetinaScaling(),
          _v12 = _v5.getBoundingRect(),
          _v13 = _v9.subtract(new _v44(_v12.left, _v12.top)),
          _v14 = _v6.viewportTransform,
          _v15 = _v13.add(_v10).transform(_v14, !0),
          _v16 = _v5.backgroundColor,
          _v17 = _v191(_v5.styles);
        _v5.backgroundColor = "";
        let _v18 = {
          stroke: "transparent",
          fill: "transparent",
          textBackgroundColor: "transparent"
        };
        _v5.setSelectionStyles(_v18, 0, _v3), _v5.setSelectionStyles(_v18, _v4, _v5.text.length), _v5.dirty = !0;
        let _v19 = _v5.toCanvasElement({
          enableRetinaScaling: _v6.enableRetinaScaling,
          viewportTransform: !0
        });
        _v5.backgroundColor = _v16, _v5.styles = _v17, _v5.dirty = !0, _v99(_v19, {
          position: "fixed",
          left: "".concat(-_v19.width, "px"),
          border: _v33,
          width: "".concat(_v19.width / _v11, "px"),
          height: "".concat(_v19.height / _v11, "px")
        }), this.__dragImageDisposer && this.__dragImageDisposer(), this.__dragImageDisposer = () => {
          _v19.remove();
        }, _v97(_v0.target || this.target.hiddenTextarea).body.appendChild(_v19), null == (_v2 = _v0.dataTransfer) || _v2.setDragImage(_v19, _v15.x, _v15.y);
      }
      onDragStart(_v0) {
        this.__dragStartFired = !0;
        let _v1 = this.target,
          _v2 = this.isActive();
        if (_v2 && _v0.dataTransfer) {
          let _v0 = this.__dragStartSelection = {
              selectionStart: _v1.selectionStart,
              selectionEnd: _v1.selectionEnd
            },
            _v1 = _v1._text.slice(_v0.selectionStart, _v0.selectionEnd).join(""),
            _v2 = _v5({
              text: _v1.text,
              value: _v1
            }, _v0);
          _v0.dataTransfer.setData("text/plain", _v1), _v0.dataTransfer.setData("application/fabric", JSON.stringify({
            value: _v1,
            styles: _v1.getSelectionStyles(_v0.selectionStart, _v0.selectionEnd, !0)
          })), _v0.dataTransfer.effectAllowed = "copyMove", this.setDragImage(_v0, _v2);
        }
        return _v1.abortCursorAnimation(), _v2;
      }
      canDrop(_v0) {
        if (this.target.editable && !this.target.getActiveControl() && !_v0.defaultPrevented) {
          if (this.isActive() && this.__dragStartSelection) {
            let _v0 = this.target.getSelectionStartFromPointer(_v0),
              _v1 = this.__dragStartSelection;
            return _v0 < _v1.selectionStart || _v0 > _v1.selectionEnd;
          }
          return !0;
        }
        return !1;
      }
      targetCanDrop(_v0) {
        return this.target.canDrop(_v0);
      }
      dragEnterHandler(_v0) {
        let {
            e: _v1
          } = _v0,
          _v2 = this.targetCanDrop(_v1);
        !this.__isDraggingOver && _v2 && (this.__isDraggingOver = !0);
      }
      dragOverHandler(_v0) {
        let {
            e: _v1
          } = _v0,
          _v2 = this.targetCanDrop(_v1);
        !this.__isDraggingOver && _v2 ? this.__isDraggingOver = !0 : this.__isDraggingOver && !_v2 && (this.__isDraggingOver = !1), this.__isDraggingOver && (_v1.preventDefault(), _v0.canDrop = !0, _v0.dropTarget = this.target);
      }
      dragLeaveHandler() {
        (this.__isDraggingOver || this.isActive()) && (this.__isDraggingOver = !1);
      }
      dropHandler(_v0) {
        var _v1;
        let {
            e: _v2
          } = _v0,
          _v3 = _v2.defaultPrevented;
        this.__isDraggingOver = !1, _v2.preventDefault();
        let _v4 = null == (_v1 = _v2.dataTransfer) ? void 0 : _v1.getData("text/plain");
        if (_v4 && !_v3) {
          let _v0 = this.target,
            _v1 = _v0.canvas,
            _v2 = _v0.getSelectionStartFromPointer(_v2),
            {
              styles: _v3
            } = _v2.dataTransfer.types.includes("application/fabric") ? JSON.parse(_v2.dataTransfer.getData("application/fabric")) : {},
            _v4 = _v4[Math.max(0, _v4.length - 1)];
          if (this.__dragStartSelection) {
            let _v0 = this.__dragStartSelection.selectionStart,
              _v1 = this.__dragStartSelection.selectionEnd;
            _v2 > _v0 && _v2 <= _v1 ? _v2 = _v0 : _v2 > _v1 && (_v2 -= _v1 - _v0), _v0.removeChars(_v0, _v1), delete this.__dragStartSelection;
          }
          _v0._reNewline.test(_v4) && (_v0._reNewline.test(_v0._text[_v2]) || _v2 === _v0._text.length) && (_v4 = _v4.trimEnd()), _v0.didDrop = !0, _v0.dropTarget = _v0, _v0.insertChars(_v4, _v3, _v2), _v1.setActiveObject(_v0), _v0.enterEditing(_v2), _v0.selectionStart = Math.min(_v2 + 0, _v0._text.length), _v0.selectionEnd = Math.min(_v0.selectionStart + _v4.length, _v0._text.length), _v0.hiddenTextarea.value = _v0.text, _v0._updateTextarea(), _v0.hiddenTextarea.focus(), _v0.fire("changed", {
            index: _v2 + 0,
            action: "drop"
          }), _v1.fire("text:changed", {
            target: _v0
          }), _v1.contextTopDirty = !0, _v1.requestRenderAll();
        }
      }
      dragEndHandler(_v0) {
        let {
          e: _v1
        } = _v0;
        if (this.isActive() && this.__dragStartFired && this.__dragStartSelection) {
          var _v2;
          let _v0 = this.target,
            _v1 = this.target.canvas,
            {
              selectionStart: _v2,
              selectionEnd: _v3
            } = this.__dragStartSelection,
            _v4 = (null == (_v2 = _v1.dataTransfer) ? void 0 : _v2.dropEffect) || _v33;
          _v4 === _v33 ? (_v0.selectionStart = _v2, _v0.selectionEnd = _v3, _v0._updateTextarea(), _v0.hiddenTextarea.focus()) : (_v0.clearContextTop(), "move" === _v4 && (_v0.removeChars(_v2, _v3), _v0.selectionStart = _v0.selectionEnd = _v2, _v0.hiddenTextarea && (_v0.hiddenTextarea.value = _v0.text), _v0._updateTextarea(), _v0.fire("changed", {
            index: _v2,
            action: "dragend"
          }), _v1.fire("text:changed", {
            target: _v0
          }), _v1.requestRenderAll()), _v0.exitEditing());
        }
        this.__dragImageDisposer && this.__dragImageDisposer(), delete this.__dragImageDisposer, delete this.__dragStartSelection, this.__isDraggingOver = !1;
      }
      dispose() {
        this._dispose && this._dispose();
      }
    }
    let _v374 = /[ \n\.,;!\?\-]/;
    class _v375 extends _v372 {
      constructor() {
        super(...arguments), _v7(this, "_currentCursorOpacity", 1);
      }
      initBehavior() {
        this._tick = this._tick.bind(this), this._onTickComplete = this._onTickComplete.bind(this), this.updateSelectionOnMouseMove = this.updateSelectionOnMouseMove.bind(this);
      }
      onDeselect(_v0) {
        return this.isEditing && this.exitEditing(), this.selected = !1, super.onDeselect(_v0);
      }
      _animateCursor(_v0) {
        let {
          toValue: _v1,
          duration: _v2,
          delay: _v3,
          onComplete: _v4
        } = _v0;
        return _v159({
          startValue: this._currentCursorOpacity,
          endValue: _v1,
          duration: _v2,
          delay: _v3,
          onComplete: _v4,
          abort: () => !this.canvas || this.selectionStart !== this.selectionEnd,
          onChange: _v0 => {
            this._currentCursorOpacity = _v0, this.renderCursorOrSelection();
          }
        });
      }
      _tick(_v0) {
        this._currentTickState = this._animateCursor({
          toValue: 0,
          duration: this.cursorDuration / 2,
          delay: Math.max(_v0 || 0, 100),
          onComplete: this._onTickComplete
        });
      }
      _onTickComplete() {
        var _v0;
        null == (_v0 = this._currentTickCompleteState) || _v0.abort(), this._currentTickCompleteState = this._animateCursor({
          toValue: 1,
          duration: this.cursorDuration,
          onComplete: this._tick
        });
      }
      initDelayedCursor(_v0) {
        this.abortCursorAnimation(), this._tick(_v0 ? 0 : this.cursorDelay);
      }
      abortCursorAnimation() {
        let _v0 = !1;
        [this._currentTickState, this._currentTickCompleteState].forEach(_v0 => {
          _v0 && !_v0.isDone() && (_v0 = !0, _v0.abort());
        }), this._currentCursorOpacity = 1, _v0 && this.clearContextTop();
      }
      restartCursorIfNeeded() {
        [this._currentTickState, this._currentTickCompleteState].some(_v0 => !_v0 || _v0.isDone()) && this.initDelayedCursor();
      }
      selectAll() {
        return this.selectionStart = 0, this.selectionEnd = this._text.length, this._fireSelectionChanged(), this._updateTextarea(), this;
      }
      getSelectedText() {
        return this._text.slice(this.selectionStart, this.selectionEnd).join("");
      }
      findWordBoundaryLeft(_v0) {
        let _v1 = 0,
          _v2 = _v0 - 1;
        if (this._reSpace.test(this._text[_v2])) for (; this._reSpace.test(this._text[_v2]);) _v1++, _v2--;
        for (; /\S/.test(this._text[_v2]) && _v2 > -1;) _v1++, _v2--;
        return _v0 - _v1;
      }
      findWordBoundaryRight(_v0) {
        let _v1 = 0,
          _v2 = _v0;
        if (this._reSpace.test(this._text[_v2])) for (; this._reSpace.test(this._text[_v2]);) _v1++, _v2++;
        for (; /\S/.test(this._text[_v2]) && _v2 < this._text.length;) _v1++, _v2++;
        return _v0 + _v1;
      }
      findLineBoundaryLeft(_v0) {
        let _v1 = 0,
          _v2 = _v0 - 1;
        for (; !/\n/.test(this._text[_v2]) && _v2 > -1;) _v1++, _v2--;
        return _v0 - _v1;
      }
      findLineBoundaryRight(_v0) {
        let _v1 = 0,
          _v2 = _v0;
        for (; !/\n/.test(this._text[_v2]) && _v2 < this._text.length;) _v1++, _v2++;
        return _v0 + _v1;
      }
      searchWordBoundary(_v0, _v1) {
        let _v2 = this._text,
          _v3 = _v0 > 0 && this._reSpace.test(_v2[_v0]) && (-1 === _v1 || !_v34.test(_v2[_v0 - 1])) ? _v0 - 1 : _v0,
          _v4 = _v2[_v3];
        for (; _v3 > 0 && _v3 < _v2.length && !_v374.test(_v4);) _v3 += _v1, _v4 = _v2[_v3];
        return -1 === _v1 && _v374.test(_v4) && _v3++, _v3;
      }
      selectWord(_v0) {
        _v0 = _v0 || this.selectionStart;
        let _v1 = this.searchWordBoundary(_v0, -1),
          _v2 = Math.max(_v1, this.searchWordBoundary(_v0, 1));
        this.selectionStart = _v1, this.selectionEnd = _v2, this._fireSelectionChanged(), this._updateTextarea(), this.renderCursorOrSelection();
      }
      selectLine(_v0) {
        _v0 = _v0 || this.selectionStart;
        let _v1 = this.findLineBoundaryLeft(_v0),
          _v2 = this.findLineBoundaryRight(_v0);
        return this.selectionStart = _v1, this.selectionEnd = _v2, this._fireSelectionChanged(), this._updateTextarea(), this;
      }
      enterEditing(_v0) {
        !this.isEditing && this.editable && (this.canvas && (this.canvas.calcOffset(), this.canvas.textEditingManager.exitTextEditing()), this.isEditing = !0, this.initHiddenTextarea(), this.hiddenTextarea.focus(), this.hiddenTextarea.value = this.text, this._updateTextarea(), this._saveEditingProps(), this._setEditingProps(), this._textBeforeEdit = this.text, this._tick(), this.fire("editing:entered", _v0 ? {
          e: _v0
        } : void 0), this._fireSelectionChanged(), this.canvas && (this.canvas.fire("text:editing:entered", {
          target: this,
          e: _v0
        }), this.canvas.requestRenderAll()));
      }
      updateSelectionOnMouseMove(_v0) {
        if (this.getActiveControl()) return;
        let _v1 = this.hiddenTextarea;
        _v97(_v1).activeElement !== _v1 && _v1.focus();
        let _v2 = this.getSelectionStartFromPointer(_v0),
          _v3 = this.selectionStart,
          _v4 = this.selectionEnd;
        (_v2 === this.__selectionStartOnMouseDown && _v3 !== _v4 || _v3 !== _v2 && _v4 !== _v2) && (_v2 > this.__selectionStartOnMouseDown ? (this.selectionStart = this.__selectionStartOnMouseDown, this.selectionEnd = _v2) : (this.selectionStart = _v2, this.selectionEnd = this.__selectionStartOnMouseDown), (this.selectionStart !== _v3 || this.selectionEnd !== _v4) && (this._fireSelectionChanged(), this._updateTextarea(), this.renderCursorOrSelection()));
      }
      _setEditingProps() {
        this.hoverCursor = "text", this.canvas && (this.canvas.defaultCursor = this.canvas.moveCursor = "text"), this.borderColor = this.editingBorderColor, this.hasControls = this.selectable = !1, this.lockMovementX = this.lockMovementY = !0;
      }
      fromStringToGraphemeSelection(_v0, _v1, _v2) {
        let _v3 = _v2.slice(0, _v0),
          _v4 = this.graphemeSplit(_v3).length;
        if (_v0 === _v1) return {
          selectionStart: _v4,
          selectionEnd: _v4
        };
        let _v5 = _v2.slice(_v0, _v1);
        return {
          selectionStart: _v4,
          selectionEnd: _v4 + this.graphemeSplit(_v5).length
        };
      }
      fromGraphemeToStringSelection(_v0, _v1, _v2) {
        let _v3 = _v2.slice(0, _v0).join("").length;
        return _v0 === _v1 ? {
          selectionStart: _v3,
          selectionEnd: _v3
        } : {
          selectionStart: _v3,
          selectionEnd: _v3 + _v2.slice(_v0, _v1).join("").length
        };
      }
      _updateTextarea() {
        if (this.cursorOffsetCache = {}, this.hiddenTextarea) {
          if (!this.inCompositionMode) {
            let _v0 = this.fromGraphemeToStringSelection(this.selectionStart, this.selectionEnd, this._text);
            this.hiddenTextarea.selectionStart = _v0.selectionStart, this.hiddenTextarea.selectionEnd = _v0.selectionEnd;
          }
          this.updateTextareaPosition();
        }
      }
      updateFromTextArea() {
        if (!this.hiddenTextarea) return;
        this.cursorOffsetCache = {};
        let _v0 = this.hiddenTextarea;
        this.text = _v0.value, this.set("dirty", !0), this.initDimensions(), this.setCoords();
        let _v1 = this.fromStringToGraphemeSelection(_v0.selectionStart, _v0.selectionEnd, _v0.value);
        this.selectionEnd = this.selectionStart = _v1.selectionEnd, this.inCompositionMode || (this.selectionStart = _v1.selectionStart), this.updateTextareaPosition();
      }
      updateTextareaPosition() {
        if (this.selectionStart === this.selectionEnd) {
          let _v0 = this._calcTextareaPosition();
          this.hiddenTextarea.style.left = _v0.left, this.hiddenTextarea.style.top = _v0.top;
        }
      }
      _calcTextareaPosition() {
        if (!this.canvas) return {
          left: "1px",
          top: "1px"
        };
        let _v0 = this.inCompositionMode ? this.compositionStart : this.selectionStart,
          _v1 = this._getCursorBoundaries(_v0),
          _v2 = this.get2DCursorLocation(_v0),
          _v3 = _v2.lineIndex,
          _v4 = _v2.charIndex,
          _v5 = this.getValueOfPropertyAt(_v3, _v4, "fontSize") * this.lineHeight,
          _v6 = _v1.leftOffset,
          _v7 = this.getCanvasRetinaScaling(),
          _v8 = this.canvas.upperCanvasEl,
          _v9 = _v8.width / _v7,
          _v10 = _v8.height / _v7,
          _v11 = _v9 - _v5,
          _v12 = _v10 - _v5,
          _v13 = new _v44(_v1.left + _v6, _v1.top + _v1.topOffset + _v5).transform(this.calcTransformMatrix()).transform(this.canvas.viewportTransform).multiply(new _v44(_v8.clientWidth / _v9, _v8.clientHeight / _v10));
        return _v13.x < 0 && (_v13.x = 0), _v13.x > _v11 && (_v13.x = _v11), _v13.y < 0 && (_v13.y = 0), _v13.y > _v12 && (_v13.y = _v12), _v13.x += this.canvas._offset.left, _v13.y += this.canvas._offset.top, {
          left: "".concat(_v13.x, "px"),
          top: "".concat(_v13.y, "px"),
          fontSize: "".concat(_v5, "px"),
          charHeight: _v5
        };
      }
      _saveEditingProps() {
        this._savedProps = {
          hasControls: this.hasControls,
          borderColor: this.borderColor,
          lockMovementX: this.lockMovementX,
          lockMovementY: this.lockMovementY,
          hoverCursor: this.hoverCursor,
          selectable: this.selectable,
          defaultCursor: this.canvas && this.canvas.defaultCursor,
          moveCursor: this.canvas && this.canvas.moveCursor
        };
      }
      _restoreEditingProps() {
        this._savedProps && (this.hoverCursor = this._savedProps.hoverCursor, this.hasControls = this._savedProps.hasControls, this.borderColor = this._savedProps.borderColor, this.selectable = this._savedProps.selectable, this.lockMovementX = this._savedProps.lockMovementX, this.lockMovementY = this._savedProps.lockMovementY, this.canvas && (this.canvas.defaultCursor = this._savedProps.defaultCursor || this.canvas.defaultCursor, this.canvas.moveCursor = this._savedProps.moveCursor || this.canvas.moveCursor), delete this._savedProps);
      }
      _exitEditing() {
        let _v0 = this.hiddenTextarea;
        this.selected = !1, this.isEditing = !1, _v0 && (_v0.blur && _v0.blur(), _v0.parentNode && _v0.parentNode.removeChild(_v0)), this.hiddenTextarea = null, this.abortCursorAnimation(), this.selectionStart !== this.selectionEnd && this.clearContextTop();
      }
      exitEditing() {
        let _v0 = this._textBeforeEdit !== this.text;
        return this._exitEditing(), this.selectionEnd = this.selectionStart, this._restoreEditingProps(), this._forceClearCache && (this.initDimensions(), this.setCoords()), this.fire("editing:exited"), _v0 && this.fire("modified"), this.canvas && (this.canvas.fire("text:editing:exited", {
          target: this
        }), _v0 && this.canvas.fire("object:modified", {
          target: this
        })), this;
      }
      _removeExtraneousStyles() {
        for (let _v0 in this.styles) this._textLines[_v0] || delete this.styles[_v0];
      }
      removeStyleFromTo(_v0, _v1) {
        let {
            lineIndex: _v2,
            charIndex: _v3
          } = this.get2DCursorLocation(_v0, !0),
          {
            lineIndex: _v4,
            charIndex: _v5
          } = this.get2DCursorLocation(_v1, !0);
        if (_v2 !== _v4) {
          if (this.styles[_v2]) for (let _v0 = _v3; _v0 < this._unwrappedTextLines[_v2].length; _v0++) delete this.styles[_v2][_v0];
          if (this.styles[_v4]) for (let _v0 = _v5; _v0 < this._unwrappedTextLines[_v4].length; _v0++) {
            let _v0 = this.styles[_v4][_v0];
            _v0 && (this.styles[_v2] || (this.styles[_v2] = {}), this.styles[_v2][_v3 + _v0 - _v5] = _v0);
          }
          for (let _v0 = _v2 + 1; _v0 <= _v4; _v0++) delete this.styles[_v0];
          this.shiftLineStyles(_v4, _v2 - _v4);
        } else if (this.styles[_v2]) {
          let _v0 = this.styles[_v2],
            _v1 = _v5 - _v3;
          for (let _v0 = _v3; _v0 < _v5; _v0++) delete _v0[_v0];
          for (let _v0 in this.styles[_v2]) {
            let _v0 = parseInt(_v0, 10);
            _v0 >= _v5 && (_v0[_v0 - _v1] = _v0[_v0], delete _v0[_v0]);
          }
        }
      }
      shiftLineStyles(_v0, _v1) {
        let _v2 = Object.assign({}, this.styles);
        for (let _v0 in this.styles) {
          let _v0 = parseInt(_v0, 10);
          _v0 > _v0 && (this.styles[_v0 + _v1] = _v2[_v0], _v2[_v0 - _v1] || delete this.styles[_v0]);
        }
      }
      insertNewlineStyleObject(_v0, _v1, _v2, _v3) {
        let _v4 = {},
          _v5 = this._unwrappedTextLines[_v0].length,
          _v6 = _v5 === _v1,
          _v7 = !1;
        _v2 || (_v2 = 1), this.shiftLineStyles(_v0, _v2);
        let _v8 = this.styles[_v0] ? this.styles[_v0][0 === _v1 ? _v1 : _v1 - 1] : void 0;
        for (let _v0 in this.styles[_v0]) {
          let _v0 = parseInt(_v0, 10);
          _v0 >= _v1 && (_v7 = !0, _v4[_v0 - _v1] = this.styles[_v0][_v0], _v6 && 0 === _v1 || delete this.styles[_v0][_v0]);
        }
        let _v9 = !1;
        for (_v7 && !_v6 && (this.styles[_v0 + _v2] = _v4, _v9 = !0), (_v9 || _v5 > _v1) && _v2--; _v2 > 0;) _v3 && _v3[_v2 - 1] ? this.styles[_v0 + _v2] = {
          0: _v5({}, _v3[_v2 - 1])
        } : _v8 ? this.styles[_v0 + _v2] = {
          0: _v5({}, _v8)
        } : delete this.styles[_v0 + _v2], _v2--;
        this._forceClearCache = !0;
      }
      insertCharStyleObject(_v0, _v1, _v2, _v3) {
        this.styles || (this.styles = {});
        let _v4 = this.styles[_v0],
          _v5 = _v4 ? _v5({}, _v4) : {};
        for (let _v0 in _v2 || (_v2 = 1), _v5) {
          let _v0 = parseInt(_v0, 10);
          _v0 >= _v1 && (_v4[_v0 + _v2] = _v5[_v0], _v5[_v0 - _v2] || delete _v4[_v0]);
        }
        if (this._forceClearCache = !0, _v3) {
          for (; _v2--;) Object.keys(_v3[_v2]).length && (this.styles[_v0] || (this.styles[_v0] = {}), this.styles[_v0][_v1 + _v2] = _v5({}, _v3[_v2]));
          return;
        }
        if (!_v4) return;
        let _v6 = _v4[_v1 ? _v1 - 1 : 1];
        for (; _v6 && _v2--;) this.styles[_v0][_v1 + _v2] = _v5({}, _v6);
      }
      insertNewStyleBlock(_v0, _v1, _v2) {
        let _v3,
          _v4 = this.get2DCursorLocation(_v1, !0),
          _v5 = [0],
          _v6 = 0;
        for (let _v0 = 0; _v0 < _v0.length; _v0++) "\n" === _v0[_v0] ? _v5[++_v6] = 0 : _v5[_v6]++;
        for (_v5[0] > 0 && (this.insertCharStyleObject(_v4.lineIndex, _v4.charIndex, _v5[0], _v2), _v2 = _v2 && _v2.slice(_v5[0] + 1)), _v6 && this.insertNewlineStyleObject(_v4.lineIndex, _v4.charIndex + _v5[0], _v6), _v3 = 1; _v3 < _v6; _v3++) _v5[_v3] > 0 ? this.insertCharStyleObject(_v4.lineIndex + _v3, 0, _v5[_v3], _v2) : _v2 && this.styles[_v4.lineIndex + _v3] && _v2[0] && (this.styles[_v4.lineIndex + _v3][0] = _v2[0]), _v2 = _v2 && _v2.slice(_v5[_v3] + 1);
        _v5[_v3] > 0 && this.insertCharStyleObject(_v4.lineIndex + _v3, 0, _v5[_v3], _v2);
      }
      removeChars(_v0) {
        let _v1 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _v0 + 1;
        this.removeStyleFromTo(_v0, _v1), this._text.splice(_v0, _v1 - _v0), this.text = this._text.join(""), this.set("dirty", !0), this.initDimensions(), this.setCoords(), this._removeExtraneousStyles();
      }
      insertChars(_v0, _v1, _v2) {
        let _v3 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : _v2;
        _v3 > _v2 && this.removeStyleFromTo(_v2, _v3);
        let _v4 = this.graphemeSplit(_v0);
        this.insertNewStyleBlock(_v4, _v2, _v1), this._text = [...this._text.slice(0, _v2), ..._v4, ...this._text.slice(_v3)], this.text = this._text.join(""), this.set("dirty", !0), this.initDimensions(), this.setCoords(), this._removeExtraneousStyles();
      }
      setSelectionStartEndWithShift(_v0, _v1, _v2) {
        _v2 <= _v0 ? (_v1 === _v0 ? this._selectionDirection = _v30 : this._selectionDirection === _v32 && (this._selectionDirection = _v30, this.selectionEnd = _v0), this.selectionStart = _v2) : _v2 > _v0 && _v2 < _v1 ? this._selectionDirection === _v32 ? this.selectionEnd = _v2 : this.selectionStart = _v2 : (_v1 === _v0 ? this._selectionDirection = _v32 : this._selectionDirection === _v30 && (this._selectionDirection = _v32, this.selectionStart = _v1), this.selectionEnd = _v2);
      }
    }
    class _v376 extends _v375 {
      initHiddenTextarea() {
        let _v0 = this.canvas && _v97(this.canvas.getElement()) || _v19(),
          _v1 = _v0.createElement("textarea");
        Object.entries({
          autocapitalize: "off",
          autocorrect: "off",
          autocomplete: "off",
          spellcheck: "false",
          "data-fabric": "textarea",
          wrap: "off"
        }).map(_v0 => {
          let [_v1, _v2] = _v0;
          return _v1.setAttribute(_v1, _v2);
        });
        let {
          top: _v2,
          left: _v3,
          fontSize: _v4
        } = this._calcTextareaPosition();
        _v1.style.cssText = "position: absolute; top: ".concat(_v2, "; left: ").concat(_v3, "; z-index: -999; opacity: 0; width: 1px; height: 1px; font-size: 1px; padding-top: ").concat(_v4, ";"), (this.hiddenTextareaContainer || _v0.body).appendChild(_v1), Object.entries({
          blur: "blur",
          keydown: "onKeyDown",
          keyup: "onKeyUp",
          input: "onInput",
          copy: "copy",
          cut: "copy",
          paste: "paste",
          compositionstart: "onCompositionStart",
          compositionupdate: "onCompositionUpdate",
          compositionend: "onCompositionEnd"
        }).map(_v0 => {
          let [_v1, _v2] = _v0;
          return _v1.addEventListener(_v1, this[_v2].bind(this));
        }), this.hiddenTextarea = _v1;
      }
      blur() {
        this.abortCursorAnimation();
      }
      onKeyDown(_v0) {
        if (!this.isEditing) return;
        let _v1 = "rtl" === this.direction ? this.keysMapRtl : this.keysMap;
        if (_v0.keyCode in _v1) this[_v1[_v0.keyCode]](_v0);else {
          if (!(_v0.keyCode in this.ctrlKeysMapDown) || !_v0.ctrlKey && !_v0.metaKey) return;
          this[this.ctrlKeysMapDown[_v0.keyCode]](_v0);
        }
        _v0.stopImmediatePropagation(), _v0.preventDefault(), _v0.keyCode >= 33 && _v0.keyCode <= 40 ? (this.inCompositionMode = !1, this.clearContextTop(), this.renderCursorOrSelection()) : this.canvas && this.canvas.requestRenderAll();
      }
      onKeyUp(_v0) {
        if (!this.isEditing || this._copyDone || this.inCompositionMode) {
          this._copyDone = !1;
          return;
        }
        _v0.keyCode in this.ctrlKeysMapUp && (_v0.ctrlKey || _v0.metaKey) && (this[this.ctrlKeysMapUp[_v0.keyCode]](_v0), _v0.stopImmediatePropagation(), _v0.preventDefault(), this.canvas && this.canvas.requestRenderAll());
      }
      onInput(_v0) {
        let _v1 = this.fromPaste;
        if (this.fromPaste = !1, _v0 && _v0.stopPropagation(), !this.isEditing) return;
        let _v2 = () => {
          this.updateFromTextArea(), this.fire("changed"), this.canvas && (this.canvas.fire("text:changed", {
            target: this
          }), this.canvas.requestRenderAll());
        };
        if ("" === this.hiddenTextarea.value) {
          this.styles = {}, _v2();
          return;
        }
        let _v3 = this._splitTextIntoLines(this.hiddenTextarea.value).graphemeText,
          _v4 = this._text.length,
          _v5 = _v3.length,
          _v6 = this.selectionStart,
          _v7 = this.selectionEnd,
          _v8 = _v6 !== _v7,
          _v9,
          _v10,
          _v11 = _v5 - _v4,
          _v12,
          _v13,
          _v14 = this.fromStringToGraphemeSelection(this.hiddenTextarea.selectionStart, this.hiddenTextarea.selectionEnd, this.hiddenTextarea.value),
          _v15 = _v6 > _v14.selectionStart;
        _v8 ? (_v10 = this._text.slice(_v6, _v7), _v11 += _v7 - _v6) : _v5 < _v4 && (_v10 = _v15 ? this._text.slice(_v7 + _v11, _v7) : this._text.slice(_v6, _v6 - _v11));
        let _v16 = _v3.slice(_v14.selectionEnd - _v11, _v14.selectionEnd);
        if (_v10 && _v10.length && (_v16.length && (_v9 = this.getSelectionStyles(_v6, _v6 + 1, !1), _v9 = _v16.map(() => _v9[0])), _v8 ? (_v12 = _v6, _v13 = _v7) : _v15 ? (_v12 = _v7 - _v10.length, _v13 = _v7) : (_v12 = _v7, _v13 = _v7 + _v10.length), this.removeStyleFromTo(_v12, _v13)), _v16.length) {
          let {
            copyPasteData: _v0
          } = _v18();
          _v1 && _v16.join("") === _v0.copiedText && !_v11.disableStyleCopyPaste && (_v9 = _v0.copiedTextStyle), this.insertNewStyleBlock(_v16, _v6, _v9);
        }
        _v2();
      }
      onCompositionStart() {
        this.inCompositionMode = !0;
      }
      onCompositionEnd() {
        this.inCompositionMode = !1;
      }
      onCompositionUpdate(_v0) {
        let {
            target: _v1
          } = _v0,
          {
            selectionStart: _v2,
            selectionEnd: _v3
          } = _v1;
        this.compositionStart = _v2, this.compositionEnd = _v3, this.updateTextareaPosition();
      }
      copy() {
        if (this.selectionStart === this.selectionEnd) return;
        let {
          copyPasteData: _v0
        } = _v18();
        _v0.copiedText = this.getSelectedText(), _v11.disableStyleCopyPaste ? _v0.copiedTextStyle = void 0 : _v0.copiedTextStyle = this.getSelectionStyles(this.selectionStart, this.selectionEnd, !0), this._copyDone = !0;
      }
      paste() {
        this.fromPaste = !0;
      }
      _getWidthBeforeCursor(_v0, _v1) {
        let _v2 = this._getLineLeftOffset(_v0),
          _v3;
        return _v1 > 0 && (_v2 += (_v3 = this.__charBounds[_v0][_v1 - 1]).left + _v3.width), _v2;
      }
      getDownCursorOffset(_v0, _v1) {
        let _v2 = this._getSelectionForOffset(_v0, _v1),
          _v3 = this.get2DCursorLocation(_v2),
          _v4 = _v3.lineIndex;
        if (_v4 === this._textLines.length - 1 || _v0.metaKey || 34 === _v0.keyCode) return this._text.length - _v2;
        let _v5 = _v3.charIndex,
          _v6 = this._getWidthBeforeCursor(_v4, _v5),
          _v7 = this._getIndexOnLine(_v4 + 1, _v6);
        return this._textLines[_v4].slice(_v5).length + _v7 + 1 + this.missingNewlineOffset(_v4);
      }
      _getSelectionForOffset(_v0, _v1) {
        return _v0.shiftKey && this.selectionStart !== this.selectionEnd && _v1 ? this.selectionEnd : this.selectionStart;
      }
      getUpCursorOffset(_v0, _v1) {
        let _v2 = this._getSelectionForOffset(_v0, _v1),
          _v3 = this.get2DCursorLocation(_v2),
          _v4 = _v3.lineIndex;
        if (0 === _v4 || _v0.metaKey || 33 === _v0.keyCode) return -_v2;
        let _v5 = _v3.charIndex,
          _v6 = this._getWidthBeforeCursor(_v4, _v5),
          _v7 = this._getIndexOnLine(_v4 - 1, _v6),
          _v8 = this._textLines[_v4].slice(0, _v5),
          _v9 = this.missingNewlineOffset(_v4 - 1);
        return -this._textLines[_v4 - 1].length + _v7 - _v8.length + (1 - _v9);
      }
      _getIndexOnLine(_v0, _v1) {
        let _v2 = this._textLines[_v0],
          _v3 = this._getLineLeftOffset(_v0),
          _v4 = 0,
          _v5,
          _v6;
        for (let _v0 = 0, _v1 = _v2.length; _v0 < _v1; _v0++) if ((_v3 += _v5 = this.__charBounds[_v0][_v0].width) > _v1) {
          _v6 = !0;
          let _v0 = Math.abs(_v3 - _v5 - _v1);
          _v4 = Math.abs(_v3 - _v1) < _v0 ? _v0 : _v0 - 1;
          break;
        }
        return _v6 || (_v4 = _v2.length - 1), _v4;
      }
      moveCursorDown(_v0) {
        this.selectionStart >= this._text.length && this.selectionEnd >= this._text.length || this._moveCursorUpOrDown("Down", _v0);
      }
      moveCursorUp(_v0) {
        (0 !== this.selectionStart || 0 !== this.selectionEnd) && this._moveCursorUpOrDown("Up", _v0);
      }
      _moveCursorUpOrDown(_v0, _v1) {
        let _v2 = this["get".concat(_v0, "CursorOffset")](_v1, this._selectionDirection === _v32);
        if (_v1.shiftKey ? this.moveCursorWithShift(_v2) : this.moveCursorWithoutShift(_v2), 0 !== _v2) {
          let _v0 = this.text.length;
          this.selectionStart = _v154(0, this.selectionStart, _v0), this.selectionEnd = _v154(0, this.selectionEnd, _v0), this.abortCursorAnimation(), this.initDelayedCursor(), this._fireSelectionChanged(), this._updateTextarea();
        }
      }
      moveCursorWithShift(_v0) {
        let _v1 = this._selectionDirection === _v30 ? this.selectionStart + _v0 : this.selectionEnd + _v0;
        return this.setSelectionStartEndWithShift(this.selectionStart, this.selectionEnd, _v1), 0 !== _v0;
      }
      moveCursorWithoutShift(_v0) {
        return _v0 < 0 ? (this.selectionStart += _v0, this.selectionEnd = this.selectionStart) : (this.selectionEnd += _v0, this.selectionStart = this.selectionEnd), 0 !== _v0;
      }
      moveCursorLeft(_v0) {
        (0 !== this.selectionStart || 0 !== this.selectionEnd) && this._moveCursorLeftOrRight("Left", _v0);
      }
      _move(_v0, _v1, _v2) {
        let _v3;
        if (_v0.altKey) _v3 = this["findWordBoundary".concat(_v2)](this[_v1]);else {
          if (!_v0.metaKey && 35 !== _v0.keyCode && 36 !== _v0.keyCode) return this[_v1] += "Left" === _v2 ? -1 : 1, !0;
          _v3 = this["findLineBoundary".concat(_v2)](this[_v1]);
        }
        return void 0 !== _v3 && this[_v1] !== _v3 && (this[_v1] = _v3, !0);
      }
      _moveLeft(_v0, _v1) {
        return this._move(_v0, _v1, "Left");
      }
      _moveRight(_v0, _v1) {
        return this._move(_v0, _v1, "Right");
      }
      moveCursorLeftWithoutShift(_v0) {
        let _v1 = !0;
        return this._selectionDirection = _v30, this.selectionEnd === this.selectionStart && 0 !== this.selectionStart && (_v1 = this._moveLeft(_v0, "selectionStart")), this.selectionEnd = this.selectionStart, _v1;
      }
      moveCursorLeftWithShift(_v0) {
        return this._selectionDirection === _v32 && this.selectionStart !== this.selectionEnd ? this._moveLeft(_v0, "selectionEnd") : 0 !== this.selectionStart ? (this._selectionDirection = _v30, this._moveLeft(_v0, "selectionStart")) : void 0;
      }
      moveCursorRight(_v0) {
        this.selectionStart >= this._text.length && this.selectionEnd >= this._text.length || this._moveCursorLeftOrRight("Right", _v0);
      }
      _moveCursorLeftOrRight(_v0, _v1) {
        let _v2 = "moveCursor".concat(_v0).concat(_v1.shiftKey ? "WithShift" : "WithoutShift");
        this._currentCursorOpacity = 1, this[_v2](_v1) && (this.abortCursorAnimation(), this.initDelayedCursor(), this._fireSelectionChanged(), this._updateTextarea());
      }
      moveCursorRightWithShift(_v0) {
        return this._selectionDirection === _v30 && this.selectionStart !== this.selectionEnd ? this._moveRight(_v0, "selectionStart") : this.selectionEnd !== this._text.length ? (this._selectionDirection = _v32, this._moveRight(_v0, "selectionEnd")) : void 0;
      }
      moveCursorRightWithoutShift(_v0) {
        let _v1 = !0;
        return this._selectionDirection = _v32, this.selectionStart === this.selectionEnd ? (_v1 = this._moveRight(_v0, "selectionStart"), this.selectionEnd = this.selectionStart) : this.selectionStart = this.selectionEnd, _v1;
      }
    }
    class _v377 extends _v376 {
      constructor() {
        super(...arguments), _v7(this, "draggableTextDelegate", void 0);
      }
      initBehavior() {
        this.on("mousedown", this._mouseDownHandler), this.on("mousedown:before", this._mouseDownHandlerBefore), this.on("mouseup", this.mouseUpHandler), this.on("mousedblclick", this.doubleClickHandler), this.on("tripleclick", this.tripleClickHandler), this.__lastClickTime = +new Date(), this.__lastLastClickTime = +new Date(), this.__lastPointer = {}, this.on("mousedown", this.onMouseDown), this.draggableTextDelegate = new _v373(this), super.initBehavior();
      }
      shouldStartDragging() {
        return this.draggableTextDelegate.isActive();
      }
      onDragStart(_v0) {
        return this.draggableTextDelegate.onDragStart(_v0);
      }
      canDrop(_v0) {
        return this.draggableTextDelegate.canDrop(_v0);
      }
      onMouseDown(_v0) {
        if (!this.canvas) return;
        this.__newClickTime = +new Date();
        let _v1 = _v0.pointer;
        this.isTripleClick(_v1) && (this.fire("tripleclick", _v0), _v109(_v0.e)), this.__lastLastClickTime = this.__lastClickTime, this.__lastClickTime = this.__newClickTime, this.__lastPointer = _v1, this.__lastSelected = this.selected && !this.getActiveControl();
      }
      isTripleClick(_v0) {
        return this.__newClickTime - this.__lastClickTime < 500 && this.__lastClickTime - this.__lastLastClickTime < 500 && this.__lastPointer.x === _v0.x && this.__lastPointer.y === _v0.y;
      }
      doubleClickHandler(_v0) {
        this.isEditing && this.selectWord(this.getSelectionStartFromPointer(_v0.e));
      }
      tripleClickHandler(_v0) {
        this.isEditing && this.selectLine(this.getSelectionStartFromPointer(_v0.e));
      }
      _mouseDownHandler(_v0) {
        let {
          e: _v1
        } = _v0;
        !this.canvas || !this.editable || _v1.button || this.getActiveControl() || !this.draggableTextDelegate.start(_v1) && (this.canvas.textEditingManager.register(this), this.selected && (this.inCompositionMode = !1, this.setCursorByClick(_v1)), this.isEditing && (this.__selectionStartOnMouseDown = this.selectionStart, this.selectionStart === this.selectionEnd && this.abortCursorAnimation(), this.renderCursorOrSelection()));
      }
      _mouseDownHandlerBefore(_v0) {
        let {
          e: _v1
        } = _v0;
        !this.canvas || !this.editable || _v1.button || (this.selected = this === this.canvas._activeObject);
      }
      mouseUpHandler(_v0) {
        let {
            e: _v1,
            transform: _v2
          } = _v0,
          _v3 = this.draggableTextDelegate.end(_v1);
        if (this.canvas) {
          this.canvas.textEditingManager.unregister(this);
          let _v0 = this.canvas._activeObject;
          if (_v0 && _v0 !== this) return;
        }
        !this.editable || this.group && !this.group.interactive || _v2 && _v2.actionPerformed || _v1.button || _v3 || (this.__lastSelected && !this.getActiveControl() ? (this.selected = !1, this.__lastSelected = !1, this.enterEditing(_v1), this.selectionStart === this.selectionEnd ? this.initDelayedCursor(!0) : this.renderCursorOrSelection()) : this.selected = !0);
      }
      setCursorByClick(_v0) {
        let _v1 = this.getSelectionStartFromPointer(_v0),
          _v2 = this.selectionStart,
          _v3 = this.selectionEnd;
        _v0.shiftKey ? this.setSelectionStartEndWithShift(_v2, _v3, _v1) : (this.selectionStart = _v1, this.selectionEnd = _v1), this.isEditing && (this._fireSelectionChanged(), this._updateTextarea());
      }
      getSelectionStartFromPointer(_v0) {
        let _v1 = this.canvas.getScenePoint(_v0).transform(_v60(this.calcTransformMatrix())).add(new _v44(-this._getLeftOffset(), -this._getTopOffset())),
          _v2 = 0,
          _v3 = 0,
          _v4 = 0;
        for (let _v0 = 0; _v0 < this._textLines.length; _v0++) if (_v2 <= _v1.y) _v2 += this.getHeightOfLine(_v0), _v4 = _v0, _v0 > 0 && (_v3 += this._textLines[_v0 - 1].length + this.missingNewlineOffset(_v0 - 1));else break;
        let _v5 = Math.abs(this._getLineLeftOffset(_v4)),
          _v6 = this._textLines[_v4].length,
          _v7 = this.__charBounds[_v4];
        for (let _v0 = 0; _v0 < _v6; _v0++) {
          let _v0 = _v5 + _v7[_v0].kernedWidth;
          if (_v1.x <= _v0) {
            Math.abs(_v1.x - _v0) <= Math.abs(_v1.x - _v5) && _v3++;
            break;
          }
          _v5 = _v0, _v3++;
        }
        return Math.min(this.flipX ? _v6 - _v3 : _v3, this._text.length);
      }
    }
    let _v378 = "moveCursorUp",
      _v379 = "moveCursorDown",
      _v380 = "moveCursorLeft",
      _v381 = "moveCursorRight",
      _v382 = "exitEditing",
      _v383 = _v5({
        selectionStart: 0,
        selectionEnd: 0,
        selectionColor: "rgba(17,119,255,0.3)",
        isEditing: !1,
        editable: !0,
        editingBorderColor: "rgba(102,153,255,0.25)",
        cursorWidth: 2,
        cursorColor: "",
        cursorDelay: 0,
        cursorDuration: 600,
        caching: !0,
        hiddenTextareaContainer: null,
        keysMap: {
          9: _v382,
          27: _v382,
          33: _v378,
          34: _v379,
          35: _v381,
          36: _v380,
          37: _v380,
          38: _v378,
          39: _v381,
          40: _v379
        },
        keysMapRtl: {
          9: _v382,
          27: _v382,
          33: _v378,
          34: _v379,
          35: _v380,
          36: _v381,
          37: _v381,
          38: _v378,
          39: _v380,
          40: _v379
        },
        ctrlKeysMapDown: {
          65: "selectAll"
        },
        ctrlKeysMapUp: {
          67: "copy",
          88: "cut"
        }
      }, {
        _selectionDirection: null,
        _reSpace: /\s|\r?\n/,
        inCompositionMode: !1
      });
    class _v384 extends _v377 {
      static getDefaults() {
        return _v5(_v5({}, super.getDefaults()), _v384.ownDefaults);
      }
      get type() {
        let _v0 = super.type;
        return "itext" === _v0 ? "i-text" : _v0;
      }
      constructor(_v0, _v1) {
        super(_v0, _v1), this.initBehavior();
      }
      _set(_v0, _v1) {
        return this.isEditing && this._savedProps && _v0 in this._savedProps ? (this._savedProps[_v0] = _v1, this) : ("canvas" === _v0 && (this.canvas instanceof _v324 && this.canvas.textEditingManager.remove(this), _v1 instanceof _v324 && _v1.textEditingManager.add(this)), super._set(_v0, _v1));
      }
      setSelectionStart(_v0) {
        _v0 = Math.max(_v0, 0), this._updateAndFire("selectionStart", _v0);
      }
      setSelectionEnd(_v0) {
        _v0 = Math.min(_v0, this.text.length), this._updateAndFire("selectionEnd", _v0);
      }
      _updateAndFire(_v0, _v1) {
        this[_v0] !== _v1 && (this._fireSelectionChanged(), this[_v0] = _v1), this._updateTextarea();
      }
      _fireSelectionChanged() {
        this.fire("selection:changed"), this.canvas && this.canvas.fire("text:selection:changed", {
          target: this
        });
      }
      initDimensions() {
        this.isEditing && this.initDelayedCursor(), super.initDimensions();
      }
      getSelectionStyles() {
        let _v0 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.selectionStart || 0,
          _v1 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.selectionEnd,
          _v2 = arguments.length > 2 ? arguments[2] : void 0;
        return super.getSelectionStyles(_v0, _v1, _v2);
      }
      setSelectionStyles(_v0) {
        let _v1 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.selectionStart || 0,
          _v2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.selectionEnd;
        return super.setSelectionStyles(_v0, _v1, _v2);
      }
      get2DCursorLocation() {
        let _v0 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.selectionStart,
          _v1 = arguments.length > 1 ? arguments[1] : void 0;
        return super.get2DCursorLocation(_v0, _v1);
      }
      render(_v0) {
        super.render(_v0), this.cursorOffsetCache = {}, this.renderCursorOrSelection();
      }
      toCanvasElement(_v0) {
        let _v1 = this.isEditing;
        this.isEditing = !1;
        let _v2 = super.toCanvasElement(_v0);
        return this.isEditing = _v1, _v2;
      }
      renderCursorOrSelection() {
        if (!this.isEditing) return;
        let _v0 = this.clearContextTop(!0);
        if (!_v0) return;
        let _v1 = this._getCursorBoundaries();
        this.selectionStart === this.selectionEnd ? this.renderCursor(_v0, _v1) : this.renderSelection(_v0, _v1), this.canvas.contextTopDirty = !0, _v0.restore();
      }
      _getCursorBoundaries() {
        let _v0 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.selectionStart,
          _v1 = arguments.length > 1 ? arguments[1] : void 0,
          _v2 = this._getLeftOffset(),
          _v3 = this._getTopOffset(),
          _v4 = this._getCursorBoundariesOffsets(_v0, _v1);
        return {
          left: _v2,
          top: _v3,
          leftOffset: _v4.left,
          topOffset: _v4.top
        };
      }
      _getCursorBoundariesOffsets(_v0, _v1) {
        return _v1 ? this.__getCursorBoundariesOffsets(_v0) : this.cursorOffsetCache && "top" in this.cursorOffsetCache ? this.cursorOffsetCache : this.cursorOffsetCache = this.__getCursorBoundariesOffsets(_v0);
      }
      __getCursorBoundariesOffsets(_v0) {
        let _v1 = 0,
          _v2 = 0,
          {
            charIndex: _v3,
            lineIndex: _v4
          } = this.get2DCursorLocation(_v0);
        for (let _v0 = 0; _v0 < _v4; _v0++) _v1 += this.getHeightOfLine(_v0);
        let _v5 = this._getLineLeftOffset(_v4),
          _v6 = this.__charBounds[_v4][_v3];
        _v6 && (_v2 = _v6.left), 0 !== this.charSpacing && _v3 === this._textLines[_v4].length && (_v2 -= this._getWidthOfCharSpacing());
        let _v7 = {
          top: _v1,
          left: _v5 + (_v2 > 0 ? _v2 : 0)
        };
        return "rtl" === this.direction && (this.textAlign === _v32 || this.textAlign === _v363 || this.textAlign === _v365 ? _v7.left *= -1 : this.textAlign === _v30 || this.textAlign === _v364 ? _v7.left = _v5 - (_v2 > 0 ? _v2 : 0) : (this.textAlign === _v29 || this.textAlign === _v366) && (_v7.left = _v5 - (_v2 > 0 ? _v2 : 0))), _v7;
      }
      renderCursorAt(_v0) {
        let _v1 = this._getCursorBoundaries(_v0, !0);
        this._renderCursor(this.canvas.contextTop, _v1, _v0);
      }
      renderCursor(_v0, _v1) {
        this._renderCursor(_v0, _v1, this.selectionStart);
      }
      _renderCursor(_v0, _v1, _v2) {
        let _v3 = this.get2DCursorLocation(_v2),
          _v4 = _v3.lineIndex,
          _v5 = _v3.charIndex > 0 ? _v3.charIndex - 1 : 0,
          _v6 = this.getValueOfPropertyAt(_v4, _v5, "fontSize"),
          _v7 = this.getObjectScaling().x * this.canvas.getZoom(),
          _v8 = this.cursorWidth / _v7,
          _v9 = this.getValueOfPropertyAt(_v4, _v5, "deltaY"),
          _v10 = _v1.topOffset + (1 - this._fontSizeFraction) * this.getHeightOfLine(_v4) / this.lineHeight - _v6 * (1 - this._fontSizeFraction);
        this.inCompositionMode && this.renderSelection(_v0, _v1), _v0.fillStyle = this.cursorColor || this.getValueOfPropertyAt(_v4, _v5, "fill"), _v0.globalAlpha = this._currentCursorOpacity, _v0.fillRect(_v1.left + _v1.leftOffset - _v8 / 2, _v10 + _v1.top + _v9, _v8, _v6);
      }
      renderSelection(_v0, _v1) {
        let _v2 = {
          selectionStart: this.inCompositionMode ? this.hiddenTextarea.selectionStart : this.selectionStart,
          selectionEnd: this.inCompositionMode ? this.hiddenTextarea.selectionEnd : this.selectionEnd
        };
        this._renderSelection(_v0, _v2, _v1);
      }
      renderDragSourceEffect() {
        let _v0 = this.draggableTextDelegate.getDragStartSelection();
        this._renderSelection(this.canvas.contextTop, _v0, this._getCursorBoundaries(_v0.selectionStart, !0));
      }
      renderDropTargetEffect(_v0) {
        let _v1 = this.getSelectionStartFromPointer(_v0);
        this.renderCursorAt(_v1);
      }
      _renderSelection(_v0, _v1, _v2) {
        let _v3 = _v1.selectionStart,
          _v4 = _v1.selectionEnd,
          _v5 = this.textAlign.includes(_v363),
          _v6 = this.get2DCursorLocation(_v3),
          _v7 = this.get2DCursorLocation(_v4),
          _v8 = _v6.lineIndex,
          _v9 = _v7.lineIndex,
          _v10 = _v6.charIndex < 0 ? 0 : _v6.charIndex,
          _v11 = _v7.charIndex < 0 ? 0 : _v7.charIndex;
        for (let _v0 = _v8; _v0 <= _v9; _v0++) {
          let _v0 = this._getLineLeftOffset(_v0) || 0,
            _v1 = this.getHeightOfLine(_v0),
            _v2 = 0,
            _v3 = 0,
            _v4 = 0;
          if (_v0 === _v8 && (_v3 = this.__charBounds[_v8][_v10].left), _v0 >= _v8 && _v0 < _v9) _v4 = _v5 && !this.isEndOfWrapping(_v0) ? this.width : this.getLineWidth(_v0) || 5;else if (_v0 === _v9) if (0 === _v11) _v4 = this.__charBounds[_v9][_v11].left;else {
            let _v0 = this._getWidthOfCharSpacing();
            _v4 = this.__charBounds[_v9][_v11 - 1].left + this.__charBounds[_v9][_v11 - 1].width - _v0;
          }
          _v2 = _v1, (this.lineHeight < 1 || _v0 === _v9 && this.lineHeight > 1) && (_v1 /= this.lineHeight);
          let _v5 = _v2.left + _v0 + _v3,
            _v6 = _v1,
            _v7 = 0,
            _v8 = _v4 - _v3;
          this.inCompositionMode ? (_v0.fillStyle = this.compositionColor || "black", _v6 = 1, _v7 = _v1) : _v0.fillStyle = this.selectionColor, "rtl" === this.direction && (this.textAlign === _v32 || this.textAlign === _v363 || this.textAlign === _v365 ? _v5 = this.width - _v5 - _v8 : this.textAlign === _v30 || this.textAlign === _v364 ? _v5 = _v2.left + _v0 - _v4 : (this.textAlign === _v29 || this.textAlign === _v366) && (_v5 = _v2.left + _v0 - _v4)), _v0.fillRect(_v5, _v2.top + _v2.topOffset + _v7, _v8, _v6), _v2.topOffset += _v2;
        }
      }
      getCurrentCharFontSize() {
        let _v0 = this._getCurrentCharIndex();
        return this.getValueOfPropertyAt(_v0.l, _v0.c, "fontSize");
      }
      getCurrentCharColor() {
        let _v0 = this._getCurrentCharIndex();
        return this.getValueOfPropertyAt(_v0.l, _v0.c, "fill");
      }
      _getCurrentCharIndex() {
        let _v0 = this.get2DCursorLocation(this.selectionStart, !0),
          _v1 = _v0.charIndex > 0 ? _v0.charIndex - 1 : 0;
        return {
          l: _v0.lineIndex,
          c: _v1
        };
      }
      dispose() {
        this._exitEditing(), this.draggableTextDelegate.dispose(), super.dispose();
      }
    }
    _v7(_v384, "ownDefaults", _v383), _v7(_v384, "type", "IText"), _v36.setClass(_v384), _v36.setClass(_v384, "i-text");
    class _v385 extends _v384 {
      static getDefaults() {
        return _v5(_v5({}, super.getDefaults()), {}, {
          controls: _v227()
        }, _v385.ownDefaults);
      }
      initDimensions() {
        this.initialized && (this.isEditing && this.initDelayedCursor(), this._clearCache(), this.dynamicMinWidth = 0, this._styleMap = this._generateStyleMap(this._splitText()), this.dynamicMinWidth > this.width && this._set("width", this.dynamicMinWidth), this.textAlign.includes(_v363) && this.enlargeSpaces(), this.height = this.calcTextHeight());
      }
      _generateStyleMap(_v0) {
        let _v1 = 0,
          _v2 = 0,
          _v3 = 0,
          _v4 = {};
        for (let _v0 = 0; _v0 < _v0.graphemeLines.length; _v0++) "\n" === _v0.graphemeText[_v3] && _v0 > 0 ? (_v2 = 0, _v3++, _v1++) : !this.splitByGrapheme && this._reSpaceAndTab.test(_v0.graphemeText[_v3]) && _v0 > 0 && (_v2++, _v3++), _v4[_v0] = {
          line: _v1,
          offset: _v2
        }, _v3 += _v0.graphemeLines[_v0].length, _v2 += _v0.graphemeLines[_v0].length;
        return _v4;
      }
      styleHas(_v0, _v1) {
        if (this._styleMap && !this.isWrapping) {
          let _v0 = this._styleMap[_v1];
          _v0 && (_v1 = _v0.line);
        }
        return super.styleHas(_v0, _v1);
      }
      isEmptyStyles(_v0) {
        if (!this.styles) return !0;
        let _v1 = 0,
          _v2,
          _v3 = !1,
          _v4 = this._styleMap[_v0],
          _v5 = this._styleMap[_v0 + 1];
        _v4 && (_v0 = _v4.line, _v1 = _v4.offset), _v5 && (_v3 = _v5.line === _v0, _v2 = _v5.offset);
        let _v6 = void 0 === _v0 ? this.styles : {
          line: this.styles[_v0]
        };
        for (let _v0 in _v6) for (let _v0 in _v6[_v0]) {
          let _v0 = parseInt(_v0, 10);
          if (_v0 >= _v1 && (!_v3 || _v0 < _v2)) for (let _v0 in _v6[_v0][_v0]) return !1;
        }
        return !0;
      }
      _getStyleDeclaration(_v0, _v1) {
        if (this._styleMap && !this.isWrapping) {
          let _v0 = this._styleMap[_v0];
          if (!_v0) return {};
          _v0 = _v0.line, _v1 = _v0.offset + _v1;
        }
        return super._getStyleDeclaration(_v0, _v1);
      }
      _setStyleDeclaration(_v0, _v1, _v2) {
        let _v3 = this._styleMap[_v0];
        super._setStyleDeclaration(_v3.line, _v3.offset + _v1, _v2);
      }
      _deleteStyleDeclaration(_v0, _v1) {
        let _v2 = this._styleMap[_v0];
        super._deleteStyleDeclaration(_v2.line, _v2.offset + _v1);
      }
      _getLineStyle(_v0) {
        let _v1 = this._styleMap[_v0];
        return !!this.styles[_v1.line];
      }
      _setLineStyle(_v0) {
        let _v1 = this._styleMap[_v0];
        super._setLineStyle(_v1.line);
      }
      _wrapText(_v0, _v1) {
        this.isWrapping = !0;
        let _v2 = this.getGraphemeDataForRender(_v0),
          _v3 = [];
        for (let _v0 = 0; _v0 < _v2.wordsData.length; _v0++) _v3.push(...this._wrapLine(_v0, _v1, _v2));
        return this.isWrapping = !1, _v3;
      }
      getGraphemeDataForRender(_v0) {
        let _v1 = this.splitByGrapheme,
          _v2 = _v1 ? "" : " ",
          _v3 = 0;
        return {
          wordsData: _v0.map((_v0, _v1) => {
            let _v2 = 0,
              _v3 = _v1 ? this.graphemeSplit(_v0) : this.wordSplit(_v0);
            return 0 === _v3.length ? [{
              word: [],
              width: 0
            }] : _v3.map(_v0 => {
              let _v1 = _v1 ? [_v0] : this.graphemeSplit(_v0),
                _v2 = this._measureWord(_v1, _v1, _v2);
              return _v3 = Math.max(_v2, _v3), _v2 += _v1.length + _v2.length, {
                word: _v1,
                width: _v2
              };
            });
          }),
          largestWordWidth: _v3
        };
      }
      _measureWord(_v0, _v1) {
        let _v2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          _v3 = 0,
          _v4;
        for (let _v0 = 0, _v1 = _v0.length; _v0 < _v1; _v0++) _v3 += this._getGraphemeBox(_v0[_v0], _v1, _v0 + _v2, _v4, !0).kernedWidth, _v4 = _v0[_v0];
        return _v3;
      }
      wordSplit(_v0) {
        return _v0.split(this._wordJoiners);
      }
      _wrapLine(_v0, _v1, _v2) {
        let _v3,
          {
            largestWordWidth: _v4,
            wordsData: _v5
          } = _v2,
          _v6 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          _v7 = this._getWidthOfCharSpacing(),
          _v8 = this.splitByGrapheme,
          _v9 = [],
          _v10 = _v8 ? "" : " ",
          _v11 = 0,
          _v12 = [],
          _v13 = 0,
          _v14 = 0,
          _v15 = !0,
          _v16 = Math.max(_v1 -= _v6, _v4, this.dynamicMinWidth),
          _v17 = _v5[_v0];
        for (_v3 = 0, _v13 = 0; _v3 < _v17.length; _v3++) {
          let {
            word: _v0,
            width: _v1
          } = _v17[_v3];
          _v13 += _v0.length, (_v11 += _v14 + _v1 - _v7) > _v16 && !_v15 ? (_v9.push(_v12), _v12 = [], _v11 = _v1, _v15 = !0) : _v11 += _v7, _v15 || _v8 || _v12.push(_v10), _v12 = _v12.concat(_v0), _v14 = _v8 ? 0 : this._measureWord([_v10], _v0, _v13), _v13++, _v15 = !1;
        }
        return _v3 && _v9.push(_v12), _v4 + _v6 > this.dynamicMinWidth && (this.dynamicMinWidth = _v4 - _v7 + _v6), _v9;
      }
      isEndOfWrapping(_v0) {
        return !this._styleMap[_v0 + 1] || this._styleMap[_v0 + 1].line !== this._styleMap[_v0].line;
      }
      missingNewlineOffset(_v0, _v1) {
        return this.splitByGrapheme && !_v1 ? +!!this.isEndOfWrapping(_v0) : 1;
      }
      _splitTextIntoLines(_v0) {
        let _v1 = super._splitTextIntoLines(_v0),
          _v2 = this._wrapText(_v1.lines, this.width),
          _v3 = Array(_v2.length);
        for (let _v0 = 0; _v0 < _v2.length; _v0++) _v3[_v0] = _v2[_v0].join("");
        return _v1.lines = _v3, _v1.graphemeLines = _v2, _v1;
      }
      getMinWidth() {
        return Math.max(this.minWidth, this.dynamicMinWidth);
      }
      _removeExtraneousStyles() {
        let _v0 = new Map();
        for (let _v0 in this._styleMap) {
          let _v0 = parseInt(_v0, 10);
          if (this._textLines[_v0]) {
            let _v0 = this._styleMap[_v0].line;
            _v0.set("".concat(_v0), !0);
          }
        }
        for (let _v0 in this.styles) _v0.has(_v0) || delete this.styles[_v0];
      }
      toObject() {
        let _v0 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return super.toObject(["minWidth", "splitByGrapheme", ..._v0]);
      }
    }
    _v7(_v385, "type", "Textbox"), _v7(_v385, "textLayoutProperties", [..._v384.textLayoutProperties, "width"]), _v7(_v385, "ownDefaults", {
      minWidth: 20,
      dynamicMinWidth: 2,
      lockScalingFlip: !0,
      noScaleCache: !1,
      _wordJoiners: /[ \t\r]/,
      splitByGrapheme: !1
    }), _v36.setClass(_v385);
    class _v386 extends _v271 {
      shouldPerformLayout(_v0) {
        return !!_v0.target.clipPath && super.shouldPerformLayout(_v0);
      }
      shouldLayoutClipPath() {
        return !1;
      }
      calcLayoutResult(_v0, _v1) {
        let {
            target: _v2
          } = _v0,
          {
            clipPath: _v3
          } = _v2;
        if (!_v3 || !this.shouldPerformLayout(_v0)) return;
        let {
            width: _v4,
            height: _v5
          } = _v110(_v270(_v2, _v3)),
          _v6 = new _v44(_v4, _v5);
        if (_v3.absolutePositioned) {
          var _v7;
          return {
            center: _v118(_v3.getRelativeCenterPoint(), void 0, null == (_v7 = _v2.group) ? void 0 : _v7.calcTransformMatrix()),
            size: _v6
          };
        }
        {
          let _v0 = _v3.getRelativeCenterPoint().transform(_v2.calcOwnMatrix(), !0);
          if (!this.shouldPerformLayout(_v0)) return {
            center: _v2.getRelativeCenterPoint().add(_v0),
            size: _v6
          };
          {
            let {
              center: _v0 = new _v44(),
              correction: _v1 = new _v44()
            } = this.calcBoundingBox(_v1, _v0) || {};
            return {
              center: _v0.add(_v0),
              correction: _v1.subtract(_v0),
              size: _v6
            };
          }
        }
      }
    }
    _v7(_v386, "type", "clip-path"), _v36.setClass(_v386);
    class _v387 extends _v271 {
      getInitialSize(_v0, _v1) {
        let {
            target: _v2
          } = _v0,
          {
            size: _v3
          } = _v1;
        return new _v44(_v2.width || _v3.x, _v2.height || _v3.y);
      }
    }
    _v7(_v387, "type", "fixed"), _v36.setClass(_v387);
    class _v388 extends _v276 {
      subscribeTargets(_v0) {
        let _v1 = _v0.target;
        _v0.targets.reduce((_v0, _v1) => (_v1.parent && _v0.add(_v1.parent), _v0), new Set()).forEach(_v0 => {
          _v0.layoutManager.subscribeTargets({
            target: _v0,
            targets: [_v1]
          });
        });
      }
      unsubscribeTargets(_v0) {
        let _v1 = _v0.target,
          _v2 = _v1.getObjects();
        _v0.targets.reduce((_v0, _v1) => (_v1.parent && _v0.add(_v1.parent), _v0), new Set()).forEach(_v0 => {
          _v2.some(_v0 => _v0.parent === _v0) || _v0.layoutManager.unsubscribeTargets({
            target: _v0,
            targets: [_v1]
          });
        });
      }
    }
    class _v389 extends _v279 {
      static getDefaults() {
        return _v5(_v5({}, super.getDefaults()), _v389.ownDefaults);
      }
      constructor() {
        var _v0;
        let _v1 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          _v2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        super(_v1, _v5(_v5({}, _v2), {}, {
          layoutManager: null != (_v0 = _v2.layoutManager) ? _v0 : new _v388()
        }));
      }
      _shouldSetNestedCoords() {
        return !0;
      }
      __objectSelectionMonitor() {}
      multiSelectAdd() {
        for (var _v0 = arguments.length, _v1 = Array(_v0), _v2 = 0; _v2 < _v0; _v2++) _v1[_v2] = arguments[_v2];
        "selection-order" === this.multiSelectionStacking ? this.add(..._v1) : _v1.forEach(_v0 => {
          let _v1 = this._objects.findIndex(_v0 => _v0.isInFrontOf(_v0)),
            _v2 = -1 === _v1 ? this.size() : _v1;
          this.insertAt(_v2, _v0);
        });
      }
      canEnterGroup(_v0) {
        return this.getObjects().some(_v0 => _v0.isDescendantOf(_v0) || _v0.isDescendantOf(_v0)) ? (_v12("error", "ActiveSelection: circular object trees are not supported, this call has no effect"), !1) : super.canEnterGroup(_v0);
      }
      enterGroup(_v0, _v1) {
        _v0.parent && _v0.parent === _v0.group ? _v0.parent._exitGroup(_v0) : _v0.group && _v0.parent !== _v0.group && _v0.group.remove(_v0), this._enterGroup(_v0, _v1);
      }
      exitGroup(_v0, _v1) {
        this._exitGroup(_v0, _v1), _v0.parent && _v0.parent._enterGroup(_v0, !0);
      }
      _onAfterObjectsChange(_v0, _v1) {
        super._onAfterObjectsChange(_v0, _v1);
        let _v2 = new Set();
        _v1.forEach(_v0 => {
          let {
            parent: _v1
          } = _v0;
          _v1 && _v2.add(_v1);
        }), _v0 === _v268 ? _v2.forEach(_v0 => {
          _v0._onAfterObjectsChange(_v267, _v1);
        }) : _v2.forEach(_v0 => {
          _v0._set("dirty", !0);
        });
      }
      onDeselect() {
        return this.removeAll(), !1;
      }
      toString() {
        return "#<ActiveSelection: (".concat(this.complexity(), ")>");
      }
      shouldCache() {
        return !1;
      }
      isOnACache() {
        return !1;
      }
      _renderControls(_v0, _v1, _v2) {
        _v0.save(), _v0.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1, super._renderControls(_v0, _v1);
        let _v3 = _v5(_v5({
          hasControls: !1
        }, _v2), {}, {
          forActiveSelection: !0
        });
        for (let _v0 = 0; _v0 < this._objects.length; _v0++) this._objects[_v0]._renderControls(_v0, _v3);
        _v0.restore();
      }
    }
    _v7(_v389, "type", "ActiveSelection"), _v7(_v389, "ownDefaults", {
      multiSelectionStacking: "canvas-stacking"
    }), _v36.setClass(_v389), _v36.setClass(_v389, "activeSelection");
    class _v390 {
      constructor() {
        _v7(this, "resources", {});
      }
      applyFilters(_v0, _v1, _v2, _v3, _v4) {
        let _v5 = _v4.getContext("2d");
        if (!_v5) return;
        _v5.drawImage(_v1, 0, 0, _v2, _v3);
        let _v6 = _v5.getImageData(0, 0, _v2, _v3),
          _v7 = _v5.getImageData(0, 0, _v2, _v3),
          _v8 = {
            sourceWidth: _v2,
            sourceHeight: _v3,
            imageData: _v6,
            originalEl: _v1,
            originalImageData: _v7,
            canvasEl: _v4,
            ctx: _v5,
            filterBackend: this
          };
        _v0.forEach(_v0 => {
          _v0.applyTo(_v8);
        });
        let {
          imageData: _v9
        } = _v8;
        return (_v9.width !== _v2 || _v9.height !== _v3) && (_v4.width = _v9.width, _v4.height = _v9.height), _v5.putImageData(_v9, 0, 0), _v8;
      }
    }
    class _v391 {
      constructor() {
        let {
          tileSize: _v0 = _v11.textureSize
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        _v7(this, "aPosition", new Float32Array([0, 0, 0, 1, 1, 0, 1, 1])), _v7(this, "resources", {}), this.tileSize = _v0, this.setupGLContext(_v0, _v0), this.captureGPUInfo();
      }
      setupGLContext(_v0, _v1) {
        this.dispose(), this.createWebGLCanvas(_v0, _v1);
      }
      createWebGLCanvas(_v0, _v1) {
        let _v2 = _v53();
        _v2.width = _v0, _v2.height = _v1;
        let _v3 = _v2.getContext("webgl", {
          alpha: !0,
          premultipliedAlpha: !1,
          depth: !1,
          stencil: !1,
          antialias: !1
        });
        _v3 && (_v3.clearColor(0, 0, 0, 0), this.canvas = _v2, this.gl = _v3);
      }
      applyFilters(_v0, _v1, _v2, _v3, _v4, _v5) {
        var _v6;
        let _v7,
          _v8,
          _v9,
          _v10,
          _v11,
          _v12,
          _v13 = this.gl,
          _v14 = _v4.getContext("2d");
        if (!_v13 || !_v14) return;
        _v5 && (_v12 = this.getCachedTexture(_v5, _v1));
        let _v15 = {
            originalWidth: _v1.width || _v1.originalWidth || 0,
            originalHeight: _v1.height || _v1.originalHeight || 0,
            sourceWidth: _v2,
            sourceHeight: _v3,
            destinationWidth: _v2,
            destinationHeight: _v3,
            context: _v13,
            sourceTexture: this.createTexture(_v13, _v2, _v3, _v12 ? void 0 : _v1),
            targetTexture: this.createTexture(_v13, _v2, _v3),
            originalTexture: _v12 || this.createTexture(_v13, _v2, _v3, _v12 ? void 0 : _v1),
            passes: _v0.length,
            webgl: !0,
            aPosition: this.aPosition,
            programCache: this.programCache,
            pass: 0,
            filterBackend: this,
            targetCanvas: _v4
          },
          _v16 = _v13.createFramebuffer();
        return _v13.bindFramebuffer(_v13.FRAMEBUFFER, _v16), _v0.forEach(_v0 => {
          _v0 && _v0.applyTo(_v15);
        }), _v8 = (_v7 = (_v6 = _v15).targetCanvas).width, _v9 = _v7.height, _v10 = _v6.destinationWidth, _v11 = _v6.destinationHeight, (_v8 !== _v10 || _v9 !== _v11) && (_v7.width = _v10, _v7.height = _v11), this.copyGLTo2D(_v13, _v15), _v13.bindTexture(_v13.TEXTURE_2D, null), _v13.deleteTexture(_v15.sourceTexture), _v13.deleteTexture(_v15.targetTexture), _v13.deleteFramebuffer(_v16), _v14.setTransform(1, 0, 0, 1, 0, 0), _v15;
      }
      dispose() {
        this.canvas && (this.canvas = null, this.gl = null), this.clearWebGLCaches();
      }
      clearWebGLCaches() {
        this.programCache = {}, this.textureCache = {};
      }
      createTexture(_v0, _v1, _v2, _v3, _v4) {
        let {
            NEAREST: _v5,
            TEXTURE_2D: _v6,
            RGBA: _v7,
            UNSIGNED_BYTE: _v8,
            CLAMP_TO_EDGE: _v9,
            TEXTURE_MAG_FILTER: _v10,
            TEXTURE_MIN_FILTER: _v11,
            TEXTURE_WRAP_S: _v12,
            TEXTURE_WRAP_T: _v13
          } = _v0,
          _v14 = _v0.createTexture();
        return _v0.bindTexture(_v6, _v14), _v0.texParameteri(_v6, _v10, _v4 || _v5), _v0.texParameteri(_v6, _v11, _v4 || _v5), _v0.texParameteri(_v6, _v12, _v9), _v0.texParameteri(_v6, _v13, _v9), _v3 ? _v0.texImage2D(_v6, 0, _v7, _v7, _v8, _v3) : _v0.texImage2D(_v6, 0, _v7, _v1, _v2, 0, _v7, _v8, null), _v14;
      }
      getCachedTexture(_v0, _v1, _v2) {
        let {
          textureCache: _v3
        } = this;
        if (_v3[_v0]) return _v3[_v0];
        {
          let _v0 = this.createTexture(this.gl, _v1.width, _v1.height, _v1, _v2);
          return _v0 && (_v3[_v0] = _v0), _v0;
        }
      }
      evictCachesForKey(_v0) {
        this.textureCache[_v0] && (this.gl.deleteTexture(this.textureCache[_v0]), delete this.textureCache[_v0]);
      }
      copyGLTo2D(_v0, _v1) {
        let _v2 = _v0.canvas,
          _v3 = _v1.targetCanvas,
          _v4 = _v3.getContext("2d");
        if (!_v4) return;
        _v4.translate(0, _v3.height), _v4.scale(1, -1);
        let _v5 = _v2.height - _v3.height;
        _v4.drawImage(_v2, 0, _v5, _v3.width, _v3.height, 0, 0, _v3.width, _v3.height);
      }
      copyGLTo2DPutImageData(_v0, _v1) {
        let _v2 = _v1.targetCanvas.getContext("2d"),
          _v3 = _v1.destinationWidth,
          _v4 = _v1.destinationHeight,
          _v5 = _v3 * _v4 * 4;
        if (!_v2) return;
        let _v6 = new Uint8Array(this.imageBuffer, 0, _v5),
          _v7 = new Uint8ClampedArray(this.imageBuffer, 0, _v5);
        _v0.readPixels(0, 0, _v3, _v4, _v0.RGBA, _v0.UNSIGNED_BYTE, _v6);
        let _v8 = new ImageData(_v7, _v3, _v4);
        _v2.putImageData(_v8, 0, 0);
      }
      captureGPUInfo() {
        if (this.gpuInfo) return this.gpuInfo;
        let _v0 = this.gl,
          _v1 = {
            renderer: "",
            vendor: ""
          };
        if (!_v0) return _v1;
        let _v2 = _v0.getExtension("WEBGL_debug_renderer_info");
        if (_v2) {
          let _v0 = _v0.getParameter(_v2.UNMASKED_RENDERER_WEBGL),
            _v1 = _v0.getParameter(_v2.UNMASKED_VENDOR_WEBGL);
          _v0 && (_v1.renderer = _v0.toLowerCase()), _v1 && (_v1.vendor = _v1.toLowerCase());
        }
        return this.gpuInfo = _v1, _v1;
      }
    }
    function _v392() {
      let {
        WebGLProbe: _v0
      } = _v18();
      return (_v0.queryWebGL(_v53()), _v11.enableGLFiltering && _v0.isSupported(_v11.textureSize)) ? new _v391({
        tileSize: _v11.textureSize
      }) : new _v390();
    }
    function _v393() {
      let _v0 = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
      return !_v3 && _v0 && (_v3 = _v392()), _v3;
    }
    let _v394 = ["filters", "resizeFilter", "src", "crossOrigin", "type"],
      _v395 = ["cropX", "cropY"];
    class _v396 extends _v230 {
      static getDefaults() {
        return _v5(_v5({}, super.getDefaults()), _v396.ownDefaults);
      }
      constructor(_v0) {
        let _v1 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        super(_v5({
          filters: []
        }, _v1)), _v7(this, "_lastScaleX", 1), _v7(this, "_lastScaleY", 1), _v7(this, "_filterScalingX", 1), _v7(this, "_filterScalingY", 1), this.cacheKey = "texture".concat(_v52()), this.setElement("string" == typeof _v0 ? (this.canvas && _v97(this.canvas.getElement()) || _v19()).getElementById(_v0) : _v0, _v1);
      }
      getElement() {
        return this._element;
      }
      setElement(_v0) {
        let _v1 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.removeTexture(this.cacheKey), this.removeTexture("".concat(this.cacheKey, "_filtered")), this._element = _v0, this._originalElement = _v0, this._setWidthHeight(_v1), _v0.classList.add(_v396.CSS_CANVAS), 0 !== this.filters.length && this.applyFilters(), this.resizeFilter && this.applyResizeFilters();
      }
      removeTexture(_v0) {
        let _v1 = _v393(!1);
        _v1 instanceof _v391 && _v1.evictCachesForKey(_v0);
      }
      dispose() {
        super.dispose(), this.removeTexture(this.cacheKey), this.removeTexture("".concat(this.cacheKey, "_filtered")), this._cacheContext = null, ["_originalElement", "_element", "_filteredEl", "_cacheCanvas"].forEach(_v0 => {
          let _v1 = this[_v0];
          _v1 && _v18().dispose(_v1), this[_v0] = void 0;
        });
      }
      getCrossOrigin() {
        return this._originalElement && (this._originalElement.crossOrigin || null);
      }
      getOriginalSize() {
        let _v0 = this.getElement();
        return _v0 ? {
          width: _v0.naturalWidth || _v0.width,
          height: _v0.naturalHeight || _v0.height
        } : {
          width: 0,
          height: 0
        };
      }
      _stroke(_v0) {
        if (!this.stroke || 0 === this.strokeWidth) return;
        let _v1 = this.width / 2,
          _v2 = this.height / 2;
        _v0.beginPath(), _v0.moveTo(-_v1, -_v2), _v0.lineTo(_v1, -_v2), _v0.lineTo(_v1, _v2), _v0.lineTo(-_v1, _v2), _v0.lineTo(-_v1, -_v2), _v0.closePath();
      }
      toObject() {
        let _v0 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          _v1 = [];
        return this.filters.forEach(_v0 => {
          _v0 && _v1.push(_v0.toObject());
        }), _v5(_v5({}, super.toObject([..._v395, ..._v0])), {}, {
          src: this.getSrc(),
          crossOrigin: this.getCrossOrigin(),
          filters: _v1
        }, this.resizeFilter ? {
          resizeFilter: this.resizeFilter.toObject()
        } : {});
      }
      hasCrop() {
        return !!this.cropX || !!this.cropY || this.width < this._element.width || this.height < this._element.height;
      }
      _toSVG() {
        let _v0 = [],
          _v1 = this._element,
          _v2 = -this.width / 2,
          _v3 = -this.height / 2,
          _v4 = [],
          _v5 = [],
          _v6 = "",
          _v7 = "";
        if (!_v1) return [];
        if (this.hasCrop()) {
          let _v0 = _v52();
          _v4.push('<clipPath id="imageCrop_' + _v0 + '">\n', '	<rect x="' + _v2 + '" y="' + _v3 + '" width="' + this.width + '" height="' + this.height + '" />\n', "</clipPath>\n"), _v6 = ' clip-path="url(#imageCrop_' + _v0 + ')" ';
        }
        if (this.imageSmoothing || (_v7 = ' image-rendering="optimizeSpeed"'), _v0.push("	<image ", "COMMON_PARTS", 'xlink:href="'.concat(this.getSvgSrc(!0), '" x="').concat(_v2 - this.cropX, '" y="').concat(_v3 - this.cropY, '" width="').concat(_v1.width || _v1.naturalWidth, '" height="').concat(_v1.height || _v1.naturalHeight, '"').concat(_v7).concat(_v6, "></image>\n")), this.stroke || this.strokeDashArray) {
          let _v0 = this.fill;
          this.fill = null, _v5 = ['	<rect x="'.concat(_v2, '" y="').concat(_v3, '" width="').concat(this.width, '" height="').concat(this.height, '" style="').concat(this.getSvgStyles(), '" />\n')], this.fill = _v0;
        }
        return "fill" !== this.paintFirst ? _v4.concat(_v5, _v0) : _v4.concat(_v0, _v5);
      }
      getSrc(_v0) {
        let _v1 = _v0 ? this._element : this._originalElement;
        return _v1 ? _v1.toDataURL ? _v1.toDataURL() : this.srcFromAttribute ? _v1.getAttribute("src") || "" : _v1.src : this.src || "";
      }
      getSvgSrc(_v0) {
        return this.getSrc(_v0);
      }
      setSrc(_v0) {
        let {
          crossOrigin: _v1,
          signal: _v2
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return _v73(_v0, {
          crossOrigin: _v1,
          signal: _v2
        }).then(_v0 => {
          void 0 !== _v1 && this.set({
            crossOrigin: _v1
          }), this.setElement(_v0);
        });
      }
      toString() {
        return '#<Image: { src: "'.concat(this.getSrc(), '" }>');
      }
      applyResizeFilters() {
        let _v0 = this.resizeFilter,
          _v1 = this.minimumScaleTrigger,
          _v2 = this.getTotalObjectScaling(),
          _v3 = _v2.x,
          _v4 = _v2.y,
          _v5 = this._filteredEl || this._originalElement;
        if (this.group && this.set("dirty", !0), !_v0 || _v3 > _v1 && _v4 > _v1) {
          this._element = _v5, this._filterScalingX = 1, this._filterScalingY = 1, this._lastScaleX = _v3, this._lastScaleY = _v4;
          return;
        }
        let _v6 = _v53(),
          _v7 = _v5.width,
          _v8 = _v5.height;
        _v6.width = _v7, _v6.height = _v8, this._element = _v6, this._lastScaleX = _v0.scaleX = _v3, this._lastScaleY = _v0.scaleY = _v4, _v393().applyFilters([_v0], _v5, _v7, _v8, this._element), this._filterScalingX = _v6.width / this._originalElement.width, this._filterScalingY = _v6.height / this._originalElement.height;
      }
      applyFilters() {
        let _v0 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.filters || [];
        if (_v0 = _v0.filter(_v0 => _v0 && !_v0.isNeutralState()), this.set("dirty", !0), this.removeTexture("".concat(this.cacheKey, "_filtered")), 0 === _v0.length) {
          this._element = this._originalElement, this._filteredEl = void 0, this._filterScalingX = 1, this._filterScalingY = 1;
          return;
        }
        let _v1 = this._originalElement,
          _v2 = _v1.naturalWidth || _v1.width,
          _v3 = _v1.naturalHeight || _v1.height;
        if (this._element === this._originalElement) {
          let _v0 = _v53();
          _v0.width = _v2, _v0.height = _v3, this._element = _v0, this._filteredEl = _v0;
        } else this._filteredEl && (this._element = this._filteredEl, this._filteredEl.getContext("2d").clearRect(0, 0, _v2, _v3), this._lastScaleX = 1, this._lastScaleY = 1);
        _v393().applyFilters(_v0, this._originalElement, _v2, _v3, this._element), (this._originalElement.width !== this._element.width || this._originalElement.height !== this._element.height) && (this._filterScalingX = this._element.width / this._originalElement.width, this._filterScalingY = this._element.height / this._originalElement.height);
      }
      _render(_v0) {
        _v0.imageSmoothingEnabled = this.imageSmoothing, !0 !== this.isMoving && this.resizeFilter && this._needsResize() && this.applyResizeFilters(), this._stroke(_v0), this._renderPaintInOrder(_v0);
      }
      drawCacheOnCanvas(_v0) {
        _v0.imageSmoothingEnabled = this.imageSmoothing, super.drawCacheOnCanvas(_v0);
      }
      shouldCache() {
        return this.needsItsOwnCache();
      }
      _renderFill(_v0) {
        let _v1 = this._element;
        if (!_v1) return;
        let _v2 = this._filterScalingX,
          _v3 = this._filterScalingY,
          _v4 = this.width,
          _v5 = this.height,
          _v6 = Math.max(this.cropX, 0),
          _v7 = Math.max(this.cropY, 0),
          _v8 = _v1.naturalWidth || _v1.width,
          _v9 = _v1.naturalHeight || _v1.height,
          _v10 = _v6 * _v2,
          _v11 = _v7 * _v3,
          _v12 = Math.min(_v4 * _v2, _v8 - _v10),
          _v13 = Math.min(_v5 * _v3, _v9 - _v11),
          _v14 = Math.min(_v4, _v8 / _v2 - _v6),
          _v15 = Math.min(_v5, _v9 / _v3 - _v7);
        _v1 && _v0.drawImage(_v1, _v10, _v11, _v12, _v13, -_v4 / 2, -_v5 / 2, _v14, _v15);
      }
      _needsResize() {
        let _v0 = this.getTotalObjectScaling();
        return _v0.x !== this._lastScaleX || _v0.y !== this._lastScaleY;
      }
      _resetWidthHeight() {
        this.set(this.getOriginalSize());
      }
      _setWidthHeight() {
        let {
            width: _v0,
            height: _v1
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          _v2 = this.getOriginalSize();
        this.width = _v0 || _v2.width, this.height = _v1 || _v2.height;
      }
      parsePreserveAspectRatioAttribute() {
        let _v0 = _v87(this.preserveAspectRatio || ""),
          _v1 = this.width,
          _v2 = this.height,
          _v3 = {
            width: _v1,
            height: _v2
          },
          _v4 = this._element.width,
          _v5 = this._element.height,
          _v6 = 1,
          _v7 = 1,
          _v8 = 0,
          _v9 = 0,
          _v10 = 0,
          _v11 = 0,
          _v12;
        return _v0 && (_v0.alignX !== _v33 || _v0.alignY !== _v33) ? ("meet" === _v0.meetOrSlice && (_v12 = (_v1 - _v4 * (_v6 = _v7 = _v280(this._element, _v3))) / 2, "Min" === _v0.alignX && (_v8 = -_v12), "Max" === _v0.alignX && (_v8 = _v12), _v12 = (_v2 - _v5 * _v7) / 2, "Min" === _v0.alignY && (_v9 = -_v12), "Max" === _v0.alignY && (_v9 = _v12)), "slice" === _v0.meetOrSlice && (_v12 = _v4 - _v1 / (_v6 = _v7 = _v281(this._element, _v3)), "Mid" === _v0.alignX && (_v10 = _v12 / 2), "Max" === _v0.alignX && (_v10 = _v12), _v12 = _v5 - _v2 / _v7, "Mid" === _v0.alignY && (_v11 = _v12 / 2), "Max" === _v0.alignY && (_v11 = _v12), _v4 = _v1 / _v6, _v5 = _v2 / _v7)) : (_v6 = _v1 / _v4, _v7 = _v2 / _v5), {
          width: _v4,
          height: _v5,
          scaleX: _v6,
          scaleY: _v7,
          offsetLeft: _v8,
          offsetTop: _v9,
          cropX: _v10,
          cropY: _v11
        };
      }
      static fromObject(_v0) {
        let {
            filters: _v1,
            resizeFilter: _v2,
            src: _v3,
            crossOrigin: _v4,
            type: _v5
          } = _v0,
          _v6 = _v8(_v0, _v394),
          _v7 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return Promise.all([_v73(_v3, _v5(_v5({}, _v7), {}, {
          crossOrigin: _v4
        })), _v1 && _v74(_v1, _v7), _v2 && _v74([_v2], _v7), _v75(_v6, _v7)]).then(_v0 => {
          let [_v1, _v2 = [], [_v3] = [], _v4 = {}] = _v0;
          return new this(_v1, _v5(_v5({}, _v6), {}, {
            src: _v3,
            filters: _v2,
            resizeFilter: _v3
          }, _v4));
        });
      }
      static fromURL(_v0) {
        let {
            crossOrigin: _v1 = null,
            signal: _v2
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          _v3 = arguments.length > 2 ? arguments[2] : void 0;
        return _v73(_v0, {
          crossOrigin: _v1,
          signal: _v2
        }).then(_v0 => new this(_v0, _v3));
      }
      static async fromElement(_v0) {
        let _v1 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          _v2 = arguments.length > 2 ? arguments[2] : void 0,
          _v3 = _v262(_v0, this.ATTRIBUTE_NAMES, _v2);
        return this.fromURL(_v3["xlink:href"], _v1, _v3).catch(_v0 => (_v12("log", "Unable to parse Image", _v0), null));
      }
    }
    function _v397(_v0) {
      let _v1, _v2;
      if (!_v186.test(_v0.nodeName)) return {};
      let _v3 = _v0.getAttribute("viewBox"),
        _v4 = 1,
        _v5 = 1,
        _v6 = 0,
        _v7 = 0,
        _v8 = _v0.getAttribute("width"),
        _v9 = _v0.getAttribute("height"),
        _v10 = _v0.getAttribute("x") || 0,
        _v11 = _v0.getAttribute("y") || 0,
        _v12 = !(_v3 && _v188.test(_v3)),
        _v13 = !_v8 || !_v9 || "100%" === _v8 || "100%" === _v9,
        _v14 = "",
        _v15 = 0,
        _v16 = 0;
      if (_v12 && (_v10 || _v11) && _v0.parentNode && "#document" !== _v0.parentNode.nodeName && (_v14 = " translate(" + _v86(_v10 || "0") + " " + _v86(_v11 || "0") + ") ", _v1 = (_v0.getAttribute("transform") || "") + _v14, _v0.setAttribute("transform", _v1), _v0.removeAttribute("x"), _v0.removeAttribute("y")), _v12 && _v13) return {
        width: 0,
        height: 0
      };
      let _v17 = {
        width: 0,
        height: 0
      };
      if (_v12) return _v17.width = _v86(_v8), _v17.height = _v86(_v9), _v17;
      let _v18 = _v3.match(_v188);
      _v6 = -parseFloat(_v18[1]), _v7 = -parseFloat(_v18[2]);
      let _v19 = parseFloat(_v18[3]),
        _v20 = parseFloat(_v18[4]);
      _v17.minX = _v6, _v17.minY = _v7, _v17.viewBoxWidth = _v19, _v17.viewBoxHeight = _v20, _v13 ? (_v17.width = _v19, _v17.height = _v20) : (_v17.width = _v86(_v8), _v17.height = _v86(_v9), _v4 = _v17.width / _v19, _v5 = _v17.height / _v20);
      let _v21 = _v87(_v0.getAttribute("preserveAspectRatio") || "");
      if (_v21.alignX !== _v33 && ("meet" === _v21.meetOrSlice && (_v5 = _v4 = _v4 > _v5 ? _v5 : _v4), "slice" === _v21.meetOrSlice && (_v5 = _v4 = _v4 > _v5 ? _v4 : _v5), _v15 = _v17.width - _v19 * _v4, _v16 = _v17.height - _v20 * _v4, "Mid" === _v21.alignX && (_v15 /= 2), "Mid" === _v21.alignY && (_v16 /= 2), "Min" === _v21.alignX && (_v15 = 0), "Min" === _v21.alignY && (_v16 = 0)), 1 === _v4 && 1 === _v5 && 0 === _v6 && 0 === _v7 && 0 === _v10 && 0 === _v11) return _v17;
      if ((_v10 || _v11) && "#document" !== _v0.parentNode.nodeName && (_v14 = " translate(" + _v86(_v10 || "0") + " " + _v86(_v11 || "0") + ") "), _v1 = _v14 + " matrix(" + _v4 + " 0 0 " + _v5 + " " + (_v6 * _v4 + _v15) + " " + (_v7 * _v5 + _v16) + ") ", "svg" === _v0.nodeName) {
        for (_v2 = _v0.ownerDocument.createElementNS(_v180, "g"); _v0.firstChild;) _v2.appendChild(_v0.firstChild);
        _v0.appendChild(_v2);
      } else (_v2 = _v0).removeAttribute("x"), _v2.removeAttribute("y"), _v1 = _v2.getAttribute("transform") + _v1;
      return _v2.setAttribute("transform", _v1), _v17;
    }
    _v7(_v396, "type", "Image"), _v7(_v396, "cacheProperties", [..._v193, ..._v395]), _v7(_v396, "ownDefaults", {
      strokeWidth: 0,
      srcFromAttribute: !1,
      minimumScaleTrigger: .5,
      cropX: 0,
      cropY: 0,
      imageSmoothing: !0
    }), _v7(_v396, "CSS_CANVAS", "canvas-img"), _v7(_v396, "ATTRIBUTE_NAMES", [..._v244, "x", "y", "width", "height", "preserveAspectRatio", "xlink:href", "crossOrigin", "image-rendering"]), _v36.setClass(_v396), _v36.setSVGClass(_v396);
    let _v398 = _v0 => _v0.tagName.replace("svg:", ""),
      _v399 = _v178(["pattern", "defs", "symbol", "metadata", "clipPath", "mask", "desc"]);
    function _v400(_v0, _v1) {
      let _v2,
        _v3 = [],
        _v4,
        _v5,
        _v6;
      for (_v5 = 0, _v6 = _v1.length; _v5 < _v6; _v5++) _v2 = _v1[_v5], _v4 = _v0.getElementsByTagNameNS("http://www.w3.org/2000/svg", _v2), _v3 = _v3.concat(Array.from(_v4));
      return _v3;
    }
    let _v401 = ["gradientTransform", "x1", "x2", "y1", "y2", "gradientUnits", "cx", "cy", "r", "fx", "fy"],
      _v402 = "xlink:href",
      _v403 = ["linearGradient", "radialGradient", "svg:linearGradient", "svg:radialGradient"];
    function _v404(_v0) {
      let _v1,
        _v2,
        _v3 = _v0.getElementsByTagName("style"),
        _v4 = {};
      for (_v1 = 0, _v2 = _v3.length; _v1 < _v2; _v1++) {
        let _v0 = (_v3[_v1].textContent || "").replace(/\/\*[\s\S]*?\*\//g, "");
        "" !== _v0.trim() && _v0.split("}").filter((_v0, _v1, _v2) => _v2.length > 1 && _v0.trim()).forEach(_v0 => {
          if ((_v0.match(/{/g) || []).length > 1 && _v0.trim().startsWith("@")) return;
          let _v1 = _v0.split("{"),
            _v2 = {},
            _v3 = _v1[1].trim().split(";").filter(function (_v0) {
              return _v0.trim();
            });
          for (_v1 = 0, _v2 = _v3.length; _v1 < _v2; _v1++) {
            let _v0 = _v3[_v1].split(":"),
              _v1 = _v0[0].trim(),
              _v2 = _v0[1].trim();
            _v2[_v1] = _v2;
          }
          (_v0 = _v1[0].trim()).split(",").forEach(_v0 => {
            "" !== (_v0 = _v0.replace(/^svg/i, "").trim()) && (_v4[_v0] = _v5(_v5({}, _v4[_v0] || {}), _v2));
          });
        });
      }
      return _v4;
    }
    let _v405 = _v0 => _v36.getSVGClass(_v398(_v0).toLowerCase());
    class _v406 {
      constructor(_v0, _v1, _v2, _v3, _v4) {
        this.elements = _v0, this.options = _v1, this.reviver = _v2, this.regexUrl = /^url\(['"]?#([^'"]+)['"]?\)/g, this.doc = _v3, this.clipPaths = _v4, this.gradientDefs = function (_v0) {
          let _v1 = _v400(_v0, _v403),
            _v2 = {},
            _v3 = _v1.length;
          for (; _v3--;) {
            let _v0 = _v1[_v3];
            _v0.getAttribute("xlink:href") && function _v0(_v1, _v2) {
              var _v3;
              let _v4 = (null == (_v3 = _v2.getAttribute(_v402)) ? void 0 : _v3.slice(1)) || "",
                _v5 = _v1.getElementById(_v4);
              if (_v5 && _v5.getAttribute(_v402) && _v0(_v1, _v5), _v5 && (_v401.forEach(_v0 => {
                let _v1 = _v5.getAttribute(_v0);
                !_v2.hasAttribute(_v0) && _v1 && _v2.setAttribute(_v0, _v1);
              }), !_v2.children.length)) {
                let _v0 = _v5.cloneNode(!0);
                for (; _v0.firstChild;) _v2.appendChild(_v0.firstChild);
              }
              _v2.removeAttribute(_v402);
            }(_v0, _v0);
            let _v1 = _v0.getAttribute("id");
            _v1 && (_v2[_v1] = _v0);
          }
          return _v2;
        }(_v3), this.cssRules = _v404(_v3);
      }
      parse() {
        return Promise.all(this.elements.map(_v0 => this.createObject(_v0)));
      }
      async createObject(_v0) {
        let _v1 = _v405(_v0);
        if (_v1) {
          let _v0 = await _v1.fromElement(_v0, this.options, this.cssRules);
          return this.resolveGradient(_v0, _v0, "fill"), this.resolveGradient(_v0, _v0, "stroke"), _v0 instanceof _v396 && _v0._originalElement ? _v313(_v0, _v0.parsePreserveAspectRatioAttribute()) : _v313(_v0), await this.resolveClipPath(_v0, _v0), this.reviver && this.reviver(_v0, _v0), _v0;
        }
        return null;
      }
      extractPropertyDefinition(_v0, _v1, _v2) {
        let _v3 = _v0[_v1],
          _v4 = this.regexUrl;
        if (!_v4.test(_v3)) return;
        _v4.lastIndex = 0;
        let _v5 = _v4.exec(_v3)[1];
        return _v4.lastIndex = 0, _v2[_v5];
      }
      resolveGradient(_v0, _v1, _v2) {
        let _v3 = this.extractPropertyDefinition(_v0, _v2, this.gradientDefs);
        if (_v3) {
          let _v0 = _v1.getAttribute(_v2 + "-opacity"),
            _v1 = _v335.fromElement(_v3, _v0, _v5(_v5({}, this.options), {}, {
              opacity: _v0
            }));
          _v0.set(_v2, _v1);
        }
      }
      async resolveClipPath(_v0, _v1) {
        let _v2 = this.extractPropertyDefinition(_v0, "clipPath", this.clipPaths);
        if (!_v2) return void delete _v0.clipPath;
        {
          let _v0 = _v60(_v0.calcTransformMatrix()),
            _v1 = _v2[0].parentElement,
            _v2 = _v1;
          for (; _v2.parentElement && _v2.getAttribute("clip-path") !== _v0.clipPath;) _v2 = _v2.parentElement;
          _v2.parentElement.appendChild(_v1);
          let _v3 = _v258("".concat(_v2.getAttribute("transform") || "", " ").concat(_v1.getAttribute("originalTransform") || ""));
          _v1.setAttribute("transform", "matrix(".concat(_v3.join(","), ")"));
          let _v4 = await Promise.all(_v2.map(_v0 => _v405(_v0).fromElement(_v0, this.options, this.cssRules).then(_v0 => (_v313(_v0), _v0.fillRule = _v0.clipRule, delete _v0.clipRule, _v0)))),
            _v5 = 1 === _v4.length ? _v4[0] : new _v279(_v4),
            _v6 = _v61(_v0, _v5.calcTransformMatrix());
          _v5.clipPath && (await this.resolveClipPath(_v5, _v2));
          let {
            scaleX: _v7,
            scaleY: _v8,
            angle: _v9,
            skewX: _v10,
            translateX: _v11,
            translateY: _v12
          } = _v64(_v6);
          _v5.set({
            flipX: !1,
            flipY: !1
          }), _v5.set({
            scaleX: _v7,
            scaleY: _v8,
            angle: _v9,
            skewX: _v10,
            skewY: 0
          }), _v5.setPositionByOrigin(new _v44(_v11, _v12), _v29, _v29), _v0.clipPath = _v5;
        }
      }
    }
    let _v407 = _v0 => _v185.test(_v398(_v0)),
      _v408 = () => ({
        objects: [],
        elements: [],
        options: {},
        allElements: []
      });
    async function _v409(_v0, _v1) {
      let {
        crossOrigin: _v2,
        signal: _v3
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if (_v3 && _v3.aborted) return _v12("log", new _v14("parseSVGDocument")), _v408();
      let _v4 = _v0.documentElement;
      !function (_v0) {
        let _v1 = _v400(_v0, ["use", "svg:use"]),
          _v2 = 0;
        for (; _v1.length && _v2 < _v1.length;) {
          let _v0 = _v1[_v2],
            _v1 = _v0.getAttribute("xlink:href") || _v0.getAttribute("href");
          if (null === _v1) return;
          let _v2 = _v1.slice(1),
            _v3 = _v0.getAttribute("x") || 0,
            _v4 = _v0.getAttribute("y") || 0,
            _v5 = _v0.getElementById(_v2);
          if (null === _v5) return;
          let _v6 = _v5.cloneNode(!0),
            _v7 = (_v6.getAttribute("transform") || "") + " translate(" + _v3 + ", " + _v4 + ")",
            _v8 = _v1.length;
          if (_v397(_v6), /^svg$/i.test(_v6.nodeName)) {
            let _v0 = _v6.ownerDocument.createElementNS(_v180, "g");
            for (let _v0 = 0, _v1 = _v6.attributes, _v2 = _v1.length; _v0 < _v2; _v0++) {
              let _v0 = _v1.item(_v0);
              _v0 && _v0.setAttributeNS(_v180, _v0.nodeName, _v0.nodeValue);
            }
            for (; _v6.firstChild;) _v0.appendChild(_v6.firstChild);
            _v6 = _v0;
          }
          for (let _v0 = 0, _v1 = _v0.attributes, _v2 = _v1.length; _v0 < _v2; _v0++) {
            let _v0 = _v1.item(_v0);
            if (!_v0) continue;
            let {
              nodeName: _v1,
              nodeValue: _v2
            } = _v0;
            "x" !== _v1 && "y" !== _v1 && "xlink:href" !== _v1 && "href" !== _v1 && ("transform" === _v1 ? _v7 = _v2 + " " + _v7 : _v6.setAttribute(_v1, _v2));
          }
          _v6.setAttribute("transform", _v7), _v6.setAttribute("instantiated_by_use", "1"), _v6.removeAttribute("id"), _v0.parentNode.replaceChild(_v6, _v0), _v1.length === _v8 && _v2++;
        }
      }(_v0);
      let _v5 = Array.from(_v4.getElementsByTagName("*")),
        _v6 = _v5(_v5({}, _v397(_v4)), {}, {
          crossOrigin: _v2,
          signal: _v3
        }),
        _v7 = _v5.filter(_v0 => (_v397(_v0), _v407(_v0) && !function (_v0) {
          let _v1 = _v0;
          for (; _v1 && (_v1 = _v1.parentElement);) if (_v1 && _v1.nodeName && _v399.test(_v398(_v1)) && !_v1.getAttribute("instantiated_by_use")) return !0;
          return !1;
        }(_v0)));
      if (!_v7 || _v7 && !_v7.length) return _v5(_v5({}, _v408()), {}, {
        options: _v6,
        allElements: _v5
      });
      let _v8 = {};
      _v5.filter(_v0 => "clipPath" === _v398(_v0)).forEach(_v0 => {
        _v0.setAttribute("originalTransform", _v0.getAttribute("transform") || ""), _v8[_v0.getAttribute("id")] = Array.from(_v0.getElementsByTagName("*")).filter(_v0 => _v407(_v0));
      });
      let _v9 = new _v406(_v7, _v6, _v1, _v0, _v8);
      return {
        objects: await _v9.parse(),
        elements: _v7,
        options: _v6,
        allElements: _v5
      };
    }
    let _v410 = "modifyPoly",
      _v411 = _v0 => function (_v0, _v1, _v2) {
        let {
          points: _v3,
          pathOffset: _v4
        } = _v2;
        return new _v44(_v3[_v0]).subtract(_v4).transform(_v61(_v2.getViewportTransform(), _v2.calcTransformMatrix()));
      },
      _v412 = (_v0, _v1, _v2, _v3) => {
        let {
            target: _v4,
            pointIndex: _v5
          } = _v1,
          _v6 = _v118(new _v44(_v2, _v3), void 0, _v4.calcOwnMatrix());
        return _v4.points[_v5] = _v6.add(_v4.pathOffset), _v4.setDimensions(), !0;
      },
      _v413 = (_v0, _v1) => function (_v0, _v1, _v2, _v3) {
        let _v4 = _v1.target,
          _v5 = new _v44(_v4.points[(_v0 > 0 ? _v0 : _v4.points.length) - 1]),
          _v6 = _v5.subtract(_v4.pathOffset).transform(_v4.calcOwnMatrix()),
          _v7 = _v1(_v0, _v5(_v5({}, _v1), {}, {
            pointIndex: _v0
          }), _v2, _v3),
          _v8 = _v5.subtract(_v4.pathOffset).transform(_v4.calcOwnMatrix()).subtract(_v6);
        return _v4.left -= _v8.x, _v4.top -= _v8.y, _v7;
      },
      _v414 = _v0 => _v197(_v410, _v413(_v0, _v412));
    var _v415 = Object.freeze({
      __proto__: null,
      changeWidth: _v199,
      createObjectDefaultControls: _v225,
      createPolyActionHandler: _v414,
      createPolyControls: function (_v0) {
        let _v1 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          _v2 = {};
        for (let _v0 = 0; _v0 < ("number" == typeof _v0 ? _v0 : _v0.points.length); _v0++) _v2["p".concat(_v0)] = new _v202(_v5({
          actionName: _v410,
          positionHandler: _v411(_v0),
          actionHandler: _v414(_v0)
        }, _v1));
        return _v2;
      },
      createPolyPositionHandler: _v411,
      createResizeControls: _v226,
      createTextboxDefaultControls: _v227,
      dragHandler: _v130,
      factoryPolyActionHandler: _v413,
      getLocalPoint: _v129,
      polyActionHandler: _v412,
      renderCircleControl: _v200,
      renderSquareControl: _v201,
      rotationStyleHandler: _v203,
      rotationWithSnapping: _v204,
      scaleCursorStyleHandler: _v208,
      scaleOrSkewActionName: _v221,
      scaleSkewCursorStyleHandler: _v222,
      scalingEqually: _v210,
      scalingX: _v211,
      scalingXOrSkewingY: _v223,
      scalingY: _v212,
      scalingYOrSkewingX: _v224,
      skewCursorStyleHandler: _v216,
      skewHandlerX: _v218,
      skewHandlerY: _v219,
      wrapWithFireEvent: _v197,
      wrapWithFixedAnchor: _v198
    });
    let _v416 = _v0 => void 0 !== _v0.webgl,
      _v417 = "precision highp float",
      _v418 = "\n    ".concat(_v417, ";\n    varying vec2 vTexCoord;\n    uniform sampler2D uTexture;\n    void main() {\n      gl_FragColor = texture2D(uTexture, vTexCoord);\n    }"),
      _v419 = ["type"],
      _v420 = ["type"];
    class _v421 {
      get type() {
        return this.constructor.type;
      }
      constructor() {
        let _v0 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          _v1 = _v8(_v0, _v419);
        _v7(this, "vertexSource", "\n    attribute vec2 aPosition;\n    varying vec2 vTexCoord;\n    void main() {\n      vTexCoord = aPosition;\n      gl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);\n    }"), Object.assign(this, this.constructor.defaults, _v1);
      }
      getFragmentSource() {
        return _v418;
      }
      createProgram(_v0) {
        let _v1 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.getFragmentSource(),
          _v2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.vertexSource,
          {
            WebGLProbe: {
              GLPrecision: _v3 = "highp"
            }
          } = _v18();
        "highp" !== _v3 && (_v1 = _v1.replace(RegExp(_v417, "g"), _v417.replace("highp", _v3)));
        let _v4 = _v0.createShader(_v0.VERTEX_SHADER),
          _v5 = _v0.createShader(_v0.FRAGMENT_SHADER),
          _v6 = _v0.createProgram();
        if (!_v4 || !_v5 || !_v6) throw new _v13("Vertex, fragment shader or program creation error");
        if (_v0.shaderSource(_v4, _v2), _v0.compileShader(_v4), !_v0.getShaderParameter(_v4, _v0.COMPILE_STATUS)) throw new _v13("Vertex shader compile error for ".concat(this.type, ": ").concat(_v0.getShaderInfoLog(_v4)));
        if (_v0.shaderSource(_v5, _v1), _v0.compileShader(_v5), !_v0.getShaderParameter(_v5, _v0.COMPILE_STATUS)) throw new _v13("Fragment shader compile error for ".concat(this.type, ": ").concat(_v0.getShaderInfoLog(_v5)));
        if (_v0.attachShader(_v6, _v4), _v0.attachShader(_v6, _v5), _v0.linkProgram(_v6), !_v0.getProgramParameter(_v6, _v0.LINK_STATUS)) throw new _v13('Shader link error for "'.concat(this.type, '" ').concat(_v0.getProgramInfoLog(_v6)));
        let _v7 = this.getUniformLocations(_v0, _v6) || {};
        return _v7.uStepW = _v0.getUniformLocation(_v6, "uStepW"), _v7.uStepH = _v0.getUniformLocation(_v6, "uStepH"), {
          program: _v6,
          attributeLocations: this.getAttributeLocations(_v0, _v6),
          uniformLocations: _v7
        };
      }
      getAttributeLocations(_v0, _v1) {
        return {
          aPosition: _v0.getAttribLocation(_v1, "aPosition")
        };
      }
      getUniformLocations(_v0, _v1) {
        return {};
      }
      sendAttributeData(_v0, _v1, _v2) {
        let _v3 = _v1.aPosition,
          _v4 = _v0.createBuffer();
        _v0.bindBuffer(_v0.ARRAY_BUFFER, _v4), _v0.enableVertexAttribArray(_v3), _v0.vertexAttribPointer(_v3, 2, _v0.FLOAT, !1, 0, 0), _v0.bufferData(_v0.ARRAY_BUFFER, _v2, _v0.STATIC_DRAW);
      }
      _setupFrameBuffer(_v0) {
        let _v1 = _v0.context;
        if (_v0.passes > 1) {
          let _v0 = _v0.destinationWidth,
            _v1 = _v0.destinationHeight;
          (_v0.sourceWidth !== _v0 || _v0.sourceHeight !== _v1) && (_v1.deleteTexture(_v0.targetTexture), _v0.targetTexture = _v0.filterBackend.createTexture(_v1, _v0, _v1)), _v1.framebufferTexture2D(_v1.FRAMEBUFFER, _v1.COLOR_ATTACHMENT0, _v1.TEXTURE_2D, _v0.targetTexture, 0);
        } else _v1.bindFramebuffer(_v1.FRAMEBUFFER, null), _v1.finish();
      }
      _swapTextures(_v0) {
        _v0.passes--, _v0.pass++;
        let _v1 = _v0.targetTexture;
        _v0.targetTexture = _v0.sourceTexture, _v0.sourceTexture = _v1;
      }
      isNeutralState(_v0) {
        let _v1 = this.mainParameter,
          _v2 = this.constructor.defaults[_v1];
        if (!_v1) return !1;
        {
          let _v0 = this[_v1];
          return Array.isArray(_v2) && Array.isArray(_v0) ? _v2.every((_v0, _v1) => _v0 === _v0[_v1]) : _v2 === _v0;
        }
      }
      applyTo(_v0) {
        _v416(_v0) ? (this._setupFrameBuffer(_v0), this.applyToWebGL(_v0), this._swapTextures(_v0)) : this.applyTo2d(_v0);
      }
      applyTo2d(_v0) {}
      getCacheKey() {
        return this.type;
      }
      retrieveShader(_v0) {
        let _v1 = this.getCacheKey();
        return _v0.programCache[_v1] || (_v0.programCache[_v1] = this.createProgram(_v0.context)), _v0.programCache[_v1];
      }
      applyToWebGL(_v0) {
        let _v1 = _v0.context,
          _v2 = this.retrieveShader(_v0);
        0 === _v0.pass && _v0.originalTexture ? _v1.bindTexture(_v1.TEXTURE_2D, _v0.originalTexture) : _v1.bindTexture(_v1.TEXTURE_2D, _v0.sourceTexture), _v1.useProgram(_v2.program), this.sendAttributeData(_v1, _v2.attributeLocations, _v0.aPosition), _v1.uniform1f(_v2.uniformLocations.uStepW, 1 / _v0.sourceWidth), _v1.uniform1f(_v2.uniformLocations.uStepH, 1 / _v0.sourceHeight), this.sendUniformData(_v1, _v2.uniformLocations), _v1.viewport(0, 0, _v0.destinationWidth, _v0.destinationHeight), _v1.drawArrays(_v1.TRIANGLE_STRIP, 0, 4);
      }
      bindAdditionalTexture(_v0, _v1, _v2) {
        _v0.activeTexture(_v2), _v0.bindTexture(_v0.TEXTURE_2D, _v1), _v0.activeTexture(_v0.TEXTURE0);
      }
      unbindAdditionalTexture(_v0, _v1) {
        _v0.activeTexture(_v1), _v0.bindTexture(_v0.TEXTURE_2D, null), _v0.activeTexture(_v0.TEXTURE0);
      }
      getMainParameter() {
        return this.mainParameter ? this[this.mainParameter] : void 0;
      }
      setMainParameter(_v0) {
        this.mainParameter && (this[this.mainParameter] = _v0);
      }
      sendUniformData(_v0, _v1) {}
      createHelpLayer(_v0) {
        if (!_v0.helpLayer) {
          let _v0 = _v53();
          _v0.width = _v0.sourceWidth, _v0.height = _v0.sourceHeight, _v0.helpLayer = _v0;
        }
      }
      toObject() {
        let _v0 = this.mainParameter;
        return _v5({
          type: this.type
        }, _v0 ? {
          [_v0]: this[_v0]
        } : {});
      }
      toJSON() {
        return this.toObject();
      }
      static async fromObject(_v0, _v1) {
        return new this(_v8(_v0, _v420));
      }
    }
    _v7(_v421, "type", "BaseFilter");
    let _v422 = {
      multiply: "gl_FragColor.rgb *= uColor.rgb;\n",
      screen: "gl_FragColor.rgb = 1.0 - (1.0 - gl_FragColor.rgb) * (1.0 - uColor.rgb);\n",
      add: "gl_FragColor.rgb += uColor.rgb;\n",
      difference: "gl_FragColor.rgb = abs(gl_FragColor.rgb - uColor.rgb);\n",
      subtract: "gl_FragColor.rgb -= uColor.rgb;\n",
      lighten: "gl_FragColor.rgb = max(gl_FragColor.rgb, uColor.rgb);\n",
      darken: "gl_FragColor.rgb = min(gl_FragColor.rgb, uColor.rgb);\n",
      exclusion: "gl_FragColor.rgb += uColor.rgb - 2.0 * (uColor.rgb * gl_FragColor.rgb);\n",
      overlay: "\n    if (uColor.r < 0.5) {\n      gl_FragColor.r *= 2.0 * uColor.r;\n    } else {\n      gl_FragColor.r = 1.0 - 2.0 * (1.0 - gl_FragColor.r) * (1.0 - uColor.r);\n    }\n    if (uColor.g < 0.5) {\n      gl_FragColor.g *= 2.0 * uColor.g;\n    } else {\n      gl_FragColor.g = 1.0 - 2.0 * (1.0 - gl_FragColor.g) * (1.0 - uColor.g);\n    }\n    if (uColor.b < 0.5) {\n      gl_FragColor.b *= 2.0 * uColor.b;\n    } else {\n      gl_FragColor.b = 1.0 - 2.0 * (1.0 - gl_FragColor.b) * (1.0 - uColor.b);\n    }\n    ",
      tint: "\n    gl_FragColor.rgb *= (1.0 - uColor.a);\n    gl_FragColor.rgb += uColor.rgb;\n    "
    };
    class _v423 extends _v421 {
      getCacheKey() {
        return "".concat(this.type, "_").concat(this.mode);
      }
      getFragmentSource() {
        return "\n      precision highp float;\n      uniform sampler2D uTexture;\n      uniform vec4 uColor;\n      varying vec2 vTexCoord;\n      void main() {\n        vec4 color = texture2D(uTexture, vTexCoord);\n        gl_FragColor = color;\n        if (color.a > 0.0) {\n          ".concat(_v422[this.mode], "\n        }\n      }\n      ");
      }
      applyTo2d(_v0) {
        let {
            imageData: {
              data: _v1
            }
          } = _v0,
          _v2 = new _v84(this.color).getSource(),
          _v3 = _v2[0] * this.alpha,
          _v4 = _v2[1] * this.alpha,
          _v5 = _v2[2] * this.alpha,
          _v6 = 1 - this.alpha;
        for (let _v0 = 0; _v0 < _v1.length; _v0 += 4) {
          let _v0 = _v1[_v0],
            _v1 = _v1[_v0 + 1],
            _v2 = _v1[_v0 + 2];
          switch (this.mode) {
            case "multiply":
              _v1[_v0] = _v0 * _v3 / 255, _v1[_v0 + 1] = _v1 * _v4 / 255, _v1[_v0 + 2] = _v2 * _v5 / 255;
              break;
            case "screen":
              _v1[_v0] = 255 - (255 - _v0) * (255 - _v3) / 255, _v1[_v0 + 1] = 255 - (255 - _v1) * (255 - _v4) / 255, _v1[_v0 + 2] = 255 - (255 - _v2) * (255 - _v5) / 255;
              break;
            case "add":
              _v1[_v0] = _v0 + _v3, _v1[_v0 + 1] = _v1 + _v4, _v1[_v0 + 2] = _v2 + _v5;
              break;
            case "difference":
              _v1[_v0] = Math.abs(_v0 - _v3), _v1[_v0 + 1] = Math.abs(_v1 - _v4), _v1[_v0 + 2] = Math.abs(_v2 - _v5);
              break;
            case "subtract":
              _v1[_v0] = _v0 - _v3, _v1[_v0 + 1] = _v1 - _v4, _v1[_v0 + 2] = _v2 - _v5;
              break;
            case "darken":
              _v1[_v0] = Math.min(_v0, _v3), _v1[_v0 + 1] = Math.min(_v1, _v4), _v1[_v0 + 2] = Math.min(_v2, _v5);
              break;
            case "lighten":
              _v1[_v0] = Math.max(_v0, _v3), _v1[_v0 + 1] = Math.max(_v1, _v4), _v1[_v0 + 2] = Math.max(_v2, _v5);
              break;
            case "overlay":
              _v1[_v0] = _v3 < 128 ? 2 * _v0 * _v3 / 255 : 255 - 2 * (255 - _v0) * (255 - _v3) / 255, _v1[_v0 + 1] = _v4 < 128 ? 2 * _v1 * _v4 / 255 : 255 - 2 * (255 - _v1) * (255 - _v4) / 255, _v1[_v0 + 2] = _v5 < 128 ? 2 * _v2 * _v5 / 255 : 255 - 2 * (255 - _v2) * (255 - _v5) / 255;
              break;
            case "exclusion":
              _v1[_v0] = _v3 + _v0 - 2 * _v3 * _v0 / 255, _v1[_v0 + 1] = _v4 + _v1 - 2 * _v4 * _v1 / 255, _v1[_v0 + 2] = _v5 + _v2 - 2 * _v5 * _v2 / 255;
              break;
            case "tint":
              _v1[_v0] = _v3 + _v0 * _v6, _v1[_v0 + 1] = _v4 + _v1 * _v6, _v1[_v0 + 2] = _v5 + _v2 * _v6;
          }
        }
      }
      getUniformLocations(_v0, _v1) {
        return {
          uColor: _v0.getUniformLocation(_v1, "uColor")
        };
      }
      sendUniformData(_v0, _v1) {
        let _v2 = new _v84(this.color).getSource();
        _v2[0] = this.alpha * _v2[0] / 255, _v2[1] = this.alpha * _v2[1] / 255, _v2[2] = this.alpha * _v2[2] / 255, _v2[3] = this.alpha, _v0.uniform4fv(_v1.uColor, _v2);
      }
      toObject() {
        return {
          type: this.type,
          color: this.color,
          mode: this.mode,
          alpha: this.alpha
        };
      }
    }
    _v7(_v423, "defaults", {
      color: "#F95C63",
      mode: "multiply",
      alpha: 1
    }), _v7(_v423, "type", "BlendColor"), _v36.setClass(_v423);
    let _v424 = {
        multiply: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform sampler2D uImage;\n    uniform vec4 uColor;\n    varying vec2 vTexCoord;\n    varying vec2 vTexCoord2;\n    void main() {\n      vec4 color = texture2D(uTexture, vTexCoord);\n      vec4 color2 = texture2D(uImage, vTexCoord2);\n      color.rgba *= color2.rgba;\n      gl_FragColor = color;\n    }\n    ",
        mask: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform sampler2D uImage;\n    uniform vec4 uColor;\n    varying vec2 vTexCoord;\n    varying vec2 vTexCoord2;\n    void main() {\n      vec4 color = texture2D(uTexture, vTexCoord);\n      vec4 color2 = texture2D(uImage, vTexCoord2);\n      color.a = color2.a;\n      gl_FragColor = color;\n    }\n    "
      },
      _v425 = ["type", "image"];
    class _v426 extends _v421 {
      getCacheKey() {
        return "".concat(this.type, "_").concat(this.mode);
      }
      getFragmentSource() {
        return _v424[this.mode];
      }
      applyToWebGL(_v0) {
        let _v1 = _v0.context,
          _v2 = this.createTexture(_v0.filterBackend, this.image);
        this.bindAdditionalTexture(_v1, _v2, _v1.TEXTURE1), super.applyToWebGL(_v0), this.unbindAdditionalTexture(_v1, _v1.TEXTURE1);
      }
      createTexture(_v0, _v1) {
        return _v0.getCachedTexture(_v1.cacheKey, _v1.getElement());
      }
      calculateMatrix() {
        let _v0 = this.image,
          {
            width: _v1,
            height: _v2
          } = _v0.getElement();
        return [1 / _v0.scaleX, 0, 0, 0, 1 / _v0.scaleY, 0, -_v0.left / _v1, -_v0.top / _v2, 1];
      }
      applyTo2d(_v0) {
        let {
            imageData: {
              data: _v1,
              width: _v2,
              height: _v3
            },
            filterBackend: {
              resources: _v4
            }
          } = _v0,
          _v5 = this.image;
        _v4.blendImage || (_v4.blendImage = _v53());
        let _v6 = _v4.blendImage,
          _v7 = _v6.getContext("2d");
        _v6.width !== _v2 || _v6.height !== _v3 ? (_v6.width = _v2, _v6.height = _v3) : _v7.clearRect(0, 0, _v2, _v3), _v7.setTransform(_v5.scaleX, 0, 0, _v5.scaleY, _v5.left, _v5.top), _v7.drawImage(_v5.getElement(), 0, 0, _v2, _v3);
        let _v8 = _v7.getImageData(0, 0, _v2, _v3).data;
        for (let _v0 = 0; _v0 < _v1.length; _v0 += 4) {
          let _v0 = _v1[_v0],
            _v1 = _v1[_v0 + 1],
            _v2 = _v1[_v0 + 2],
            _v3 = _v1[_v0 + 3],
            _v4 = _v8[_v0],
            _v5 = _v8[_v0 + 1],
            _v6 = _v8[_v0 + 2],
            _v7 = _v8[_v0 + 3];
          switch (this.mode) {
            case "multiply":
              _v1[_v0] = _v0 * _v4 / 255, _v1[_v0 + 1] = _v1 * _v5 / 255, _v1[_v0 + 2] = _v2 * _v6 / 255, _v1[_v0 + 3] = _v3 * _v7 / 255;
              break;
            case "mask":
              _v1[_v0 + 3] = _v7;
          }
        }
      }
      getUniformLocations(_v0, _v1) {
        return {
          uTransformMatrix: _v0.getUniformLocation(_v1, "uTransformMatrix"),
          uImage: _v0.getUniformLocation(_v1, "uImage")
        };
      }
      sendUniformData(_v0, _v1) {
        let _v2 = this.calculateMatrix();
        _v0.uniform1i(_v1.uImage, 1), _v0.uniformMatrix3fv(_v1.uTransformMatrix, !1, _v2);
      }
      toObject() {
        return {
          type: this.type,
          image: this.image && this.image.toObject(),
          mode: this.mode,
          alpha: this.alpha
        };
      }
      static fromObject(_v0, _v1) {
        let {
            type: _v2,
            image: _v3
          } = _v0,
          _v4 = _v8(_v0, _v425);
        return _v396.fromObject(_v3, _v1).then(_v0 => new this(_v5(_v5({}, _v4), {}, {
          image: _v0
        })));
      }
    }
    _v7(_v426, "type", "BlendImage"), _v7(_v426, "defaults", {
      mode: "multiply",
      alpha: 1,
      vertexSource: "\n    attribute vec2 aPosition;\n    varying vec2 vTexCoord;\n    varying vec2 vTexCoord2;\n    uniform mat3 uTransformMatrix;\n    void main() {\n      vTexCoord = aPosition;\n      vTexCoord2 = (uTransformMatrix * vec3(aPosition, 1.0)).xy;\n      gl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);\n    }\n    "
    }), _v36.setClass(_v426);
    class _v427 extends _v421 {
      getFragmentSource() {
        return "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform vec2 uDelta;\n    varying vec2 vTexCoord;\n    const float nSamples = 15.0;\n    vec3 v3offset = vec3(12.9898, 78.233, 151.7182);\n    float random(vec3 scale) {\n      /* use the fragment position for a different seed per-pixel */\n      return fract(sin(dot(gl_FragCoord.xyz, scale)) * 43758.5453);\n    }\n    void main() {\n      vec4 color = vec4(0.0);\n      float total = 0.0;\n      float offset = random(v3offset);\n      for (float t = -nSamples; t <= nSamples; t++) {\n        float percent = (t + offset - 0.5) / nSamples;\n        float weight = 1.0 - abs(percent);\n        color += texture2D(uTexture, vTexCoord + uDelta * percent) * weight;\n        total += weight;\n      }\n      gl_FragColor = color / total;\n    }\n  ";
      }
      applyTo(_v0) {
        _v416(_v0) ? (this.aspectRatio = _v0.sourceWidth / _v0.sourceHeight, _v0.passes++, this._setupFrameBuffer(_v0), this.horizontal = !0, this.applyToWebGL(_v0), this._swapTextures(_v0), this._setupFrameBuffer(_v0), this.horizontal = !1, this.applyToWebGL(_v0), this._swapTextures(_v0)) : this.applyTo2d(_v0);
      }
      applyTo2d(_v0) {
        _v0.imageData = this.simpleBlur(_v0);
      }
      simpleBlur(_v0) {
        let _v1,
          _v2,
          _v3,
          _v4,
          {
            ctx: _v5,
            imageData: _v6,
            filterBackend: {
              resources: _v7
            }
          } = _v0,
          {
            width: _v8,
            height: _v9
          } = _v6;
        _v7.blurLayer1 || (_v7.blurLayer1 = _v53(), _v7.blurLayer2 = _v53());
        let _v10 = _v7.blurLayer1,
          _v11 = _v7.blurLayer2;
        (_v10.width !== _v8 || _v10.height !== _v9) && (_v11.width = _v10.width = _v8, _v11.height = _v10.height = _v9);
        let _v12 = _v10.getContext("2d"),
          _v13 = _v11.getContext("2d"),
          _v14 = .06 * this.blur * .5;
        for (_v12.putImageData(_v6, 0, 0), _v13.clearRect(0, 0, _v8, _v9), _v4 = -15; _v4 <= 15; _v4++) _v1 = (Math.random() - .5) / 4, _v3 = _v14 * (_v2 = _v4 / 15) * _v8 + _v1, _v13.globalAlpha = 1 - Math.abs(_v2), _v13.drawImage(_v10, _v3, _v1), _v12.drawImage(_v11, 0, 0), _v13.globalAlpha = 1, _v13.clearRect(0, 0, _v11.width, _v11.height);
        for (_v4 = -15; _v4 <= 15; _v4++) _v1 = (Math.random() - .5) / 4, _v3 = _v14 * (_v2 = _v4 / 15) * _v9 + _v1, _v13.globalAlpha = 1 - Math.abs(_v2), _v13.drawImage(_v10, _v1, _v3), _v12.drawImage(_v11, 0, 0), _v13.globalAlpha = 1, _v13.clearRect(0, 0, _v11.width, _v11.height);
        _v5.drawImage(_v10, 0, 0);
        let _v15 = _v5.getImageData(0, 0, _v10.width, _v10.height);
        return _v12.globalAlpha = 1, _v12.clearRect(0, 0, _v10.width, _v10.height), _v15;
      }
      getUniformLocations(_v0, _v1) {
        return {
          delta: _v0.getUniformLocation(_v1, "uDelta")
        };
      }
      sendUniformData(_v0, _v1) {
        let _v2 = this.chooseRightDelta();
        _v0.uniform2fv(_v1.delta, _v2);
      }
      chooseRightDelta() {
        let _v0 = 1,
          _v1 = [0, 0];
        this.horizontal ? this.aspectRatio > 1 && (_v0 = 1 / this.aspectRatio) : this.aspectRatio < 1 && (_v0 = this.aspectRatio);
        let _v2 = _v0 * this.blur * .12;
        return this.horizontal ? _v1[0] = _v2 : _v1[1] = _v2, _v1;
      }
    }
    _v7(_v427, "type", "Blur"), _v7(_v427, "defaults", {
      blur: 0,
      mainParameter: "blur"
    }), _v36.setClass(_v427);
    class _v428 extends _v421 {
      getFragmentSource() {
        return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  uniform float uBrightness;\n  varying vec2 vTexCoord;\n  void main() {\n    vec4 color = texture2D(uTexture, vTexCoord);\n    color.rgb += uBrightness;\n    gl_FragColor = color;\n  }\n";
      }
      applyTo2d(_v0) {
        let {
          imageData: {
            data: _v1
          }
        } = _v0;
        if (0 === this.brightness) return;
        let _v2 = Math.round(255 * this.brightness);
        for (let _v0 = 0; _v0 < _v1.length; _v0 += 4) _v1[_v0] = _v1[_v0] + _v2, _v1[_v0 + 1] = _v1[_v0 + 1] + _v2, _v1[_v0 + 2] = _v1[_v0 + 2] + _v2;
      }
      getUniformLocations(_v0, _v1) {
        return {
          uBrightness: _v0.getUniformLocation(_v1, "uBrightness")
        };
      }
      sendUniformData(_v0, _v1) {
        _v0.uniform1f(_v1.uBrightness, this.brightness);
      }
    }
    _v7(_v428, "type", "Brightness"), _v7(_v428, "defaults", {
      brightness: 0,
      mainParameter: "brightness"
    }), _v36.setClass(_v428);
    let _v429 = ["matrix"],
      _v430 = {
        matrix: [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
        mainParameter: "matrix",
        colorsOnly: !0
      };
    class _v431 extends _v421 {
      setOptions(_v0) {
        let {
            matrix: _v1
          } = _v0,
          _v2 = _v8(_v0, _v429);
        _v1 && (this.matrix = [..._v1]), Object.assign(this, _v2);
      }
      getFragmentSource() {
        return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  varying vec2 vTexCoord;\n  uniform mat4 uColorMatrix;\n  uniform vec4 uConstants;\n  void main() {\n    vec4 color = texture2D(uTexture, vTexCoord);\n    color *= uColorMatrix;\n    color += uConstants;\n    gl_FragColor = color;\n  }";
      }
      applyTo2d(_v0) {
        let _v1 = _v0.imageData.data,
          _v2 = this.matrix,
          _v3 = this.colorsOnly;
        for (let _v0 = 0; _v0 < _v1.length; _v0 += 4) {
          let _v0 = _v1[_v0],
            _v1 = _v1[_v0 + 1],
            _v2 = _v1[_v0 + 2];
          if (_v3) _v1[_v0] = _v0 * _v2[0] + _v1 * _v2[1] + _v2 * _v2[2] + 255 * _v2[4], _v1[_v0 + 1] = _v0 * _v2[5] + _v1 * _v2[6] + _v2 * _v2[7] + 255 * _v2[9], _v1[_v0 + 2] = _v0 * _v2[10] + _v1 * _v2[11] + _v2 * _v2[12] + 255 * _v2[14];else {
            let _v0 = _v1[_v0 + 3];
            _v1[_v0] = _v0 * _v2[0] + _v1 * _v2[1] + _v2 * _v2[2] + _v0 * _v2[3] + 255 * _v2[4], _v1[_v0 + 1] = _v0 * _v2[5] + _v1 * _v2[6] + _v2 * _v2[7] + _v0 * _v2[8] + 255 * _v2[9], _v1[_v0 + 2] = _v0 * _v2[10] + _v1 * _v2[11] + _v2 * _v2[12] + _v0 * _v2[13] + 255 * _v2[14], _v1[_v0 + 3] = _v0 * _v2[15] + _v1 * _v2[16] + _v2 * _v2[17] + _v0 * _v2[18] + 255 * _v2[19];
          }
        }
      }
      getUniformLocations(_v0, _v1) {
        return {
          uColorMatrix: _v0.getUniformLocation(_v1, "uColorMatrix"),
          uConstants: _v0.getUniformLocation(_v1, "uConstants")
        };
      }
      sendUniformData(_v0, _v1) {
        let _v2 = this.matrix,
          _v3 = [_v2[0], _v2[1], _v2[2], _v2[3], _v2[5], _v2[6], _v2[7], _v2[8], _v2[10], _v2[11], _v2[12], _v2[13], _v2[15], _v2[16], _v2[17], _v2[18]],
          _v4 = [_v2[4], _v2[9], _v2[14], _v2[19]];
        _v0.uniformMatrix4fv(_v1.uColorMatrix, !1, _v3), _v0.uniform4fv(_v1.uConstants, _v4);
      }
    }
    function _v432(_v0, _v1) {
      var _v2;
      let _v3 = (_v7(_v2 = class extends _v431 {}, "type", _v0), _v7(_v2, "defaults", _v5(_v5({}, _v430), {}, {
        mainParameter: void 0,
        matrix: _v1
      })), _v2);
      return _v36.setClass(_v3, _v0), _v3;
    }
    _v7(_v431, "type", "ColorMatrix"), _v7(_v431, "defaults", _v430), _v36.setClass(_v431);
    let _v433 = _v432("Brownie", [.5997, .34553, -.27082, 0, .186, -.0377, .86095, .15059, 0, -.1449, .24113, -.07441, .44972, 0, -.02965, 0, 0, 0, 1, 0]),
      _v434 = _v432("Vintage", [.62793, .32021, -.03965, 0, .03784, .02578, .64411, .03259, 0, .02926, .0466, -.08512, .52416, 0, .02023, 0, 0, 0, 1, 0]),
      _v435 = _v432("Kodachrome", [1.12855, -.39673, -.03992, 0, .24991, -.16404, 1.08352, -.05498, 0, .09698, -.16786, -.56034, 1.60148, 0, .13972, 0, 0, 0, 1, 0]),
      _v436 = _v432("Technicolor", [1.91252, -.85453, -.09155, 0, .04624, -.30878, 1.76589, -.10601, 0, -.27589, -.2311, -.75018, 1.84759, 0, .12137, 0, 0, 0, 1, 0]),
      _v437 = _v432("Polaroid", [1.438, -.062, -.062, 0, 0, -.122, 1.378, -.122, 0, 0, -.016, -.016, 1.483, 0, 0, 0, 0, 0, 1, 0]),
      _v438 = _v432("Sepia", [.393, .769, .189, 0, 0, .349, .686, .168, 0, 0, .272, .534, .131, 0, 0, 0, 0, 0, 1, 0]),
      _v439 = _v432("BlackWhite", [1.5, 1.5, 1.5, 0, -1, 1.5, 1.5, 1.5, 0, -1, 1.5, 1.5, 1.5, 0, -1, 0, 0, 0, 1, 0]),
      _v440 = ["subFilters"];
    class _v441 extends _v421 {
      constructor() {
        let _v0 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          {
            subFilters: _v1 = []
          } = _v0;
        super(_v8(_v0, _v440)), this.subFilters = _v1;
      }
      applyTo(_v0) {
        _v416(_v0) && (_v0.passes += this.subFilters.length - 1), this.subFilters.forEach(_v0 => {
          _v0.applyTo(_v0);
        });
      }
      toObject() {
        return _v5(_v5({}, super.toObject()), {}, {
          subFilters: this.subFilters.map(_v0 => _v0.toObject())
        });
      }
      isNeutralState() {
        return !this.subFilters.some(_v0 => !_v0.isNeutralState());
      }
      static fromObject(_v0, _v1) {
        return Promise.all((_v0.subFilters || []).map(_v0 => _v36.getClass(_v0.type).fromObject(_v0, _v1))).then(_v0 => new this({
          subFilters: _v0
        }));
      }
    }
    _v7(_v441, "type", "Composed"), _v36.setClass(_v441);
    class _v442 extends _v421 {
      getFragmentSource() {
        return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  uniform float uContrast;\n  varying vec2 vTexCoord;\n  void main() {\n    vec4 color = texture2D(uTexture, vTexCoord);\n    float contrastF = 1.015 * (uContrast + 1.0) / (1.0 * (1.015 - uContrast));\n    color.rgb = contrastF * (color.rgb - 0.5) + 0.5;\n    gl_FragColor = color;\n  }";
      }
      applyTo2d(_v0) {
        let {
          imageData: {
            data: _v1
          }
        } = _v0;
        if (0 === this.contrast) return;
        let _v2 = Math.floor(255 * this.contrast),
          _v3 = 259 * (_v2 + 255) / (255 * (259 - _v2));
        for (let _v0 = 0; _v0 < _v1.length; _v0 += 4) _v1[_v0] = _v3 * (_v1[_v0] - 128) + 128, _v1[_v0 + 1] = _v3 * (_v1[_v0 + 1] - 128) + 128, _v1[_v0 + 2] = _v3 * (_v1[_v0 + 2] - 128) + 128;
      }
      getUniformLocations(_v0, _v1) {
        return {
          uContrast: _v0.getUniformLocation(_v1, "uContrast")
        };
      }
      sendUniformData(_v0, _v1) {
        _v0.uniform1f(_v1.uContrast, this.contrast);
      }
    }
    _v7(_v442, "type", "Contrast"), _v7(_v442, "defaults", {
      contrast: 0,
      mainParameter: "contrast"
    }), _v36.setClass(_v442);
    let _v443 = {
      Convolute_3_1: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform float uMatrix[9];\n    uniform float uStepW;\n    uniform float uStepH;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = vec4(0, 0, 0, 0);\n      for (float h = 0.0; h < 3.0; h+=1.0) {\n        for (float w = 0.0; w < 3.0; w+=1.0) {\n          vec2 matrixPos = vec2(uStepW * (w - 1), uStepH * (h - 1));\n          color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 3.0 + w)];\n        }\n      }\n      gl_FragColor = color;\n    }\n    ",
      Convolute_3_0: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform float uMatrix[9];\n    uniform float uStepW;\n    uniform float uStepH;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = vec4(0, 0, 0, 1);\n      for (float h = 0.0; h < 3.0; h+=1.0) {\n        for (float w = 0.0; w < 3.0; w+=1.0) {\n          vec2 matrixPos = vec2(uStepW * (w - 1.0), uStepH * (h - 1.0));\n          color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 3.0 + w)];\n        }\n      }\n      float alpha = texture2D(uTexture, vTexCoord).a;\n      gl_FragColor = color;\n      gl_FragColor.a = alpha;\n    }\n    ",
      Convolute_5_1: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform float uMatrix[25];\n    uniform float uStepW;\n    uniform float uStepH;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = vec4(0, 0, 0, 0);\n      for (float h = 0.0; h < 5.0; h+=1.0) {\n        for (float w = 0.0; w < 5.0; w+=1.0) {\n          vec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));\n          color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 5.0 + w)];\n        }\n      }\n      gl_FragColor = color;\n    }\n    ",
      Convolute_5_0: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform float uMatrix[25];\n    uniform float uStepW;\n    uniform float uStepH;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = vec4(0, 0, 0, 1);\n      for (float h = 0.0; h < 5.0; h+=1.0) {\n        for (float w = 0.0; w < 5.0; w+=1.0) {\n          vec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));\n          color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 5.0 + w)];\n        }\n      }\n      float alpha = texture2D(uTexture, vTexCoord).a;\n      gl_FragColor = color;\n      gl_FragColor.a = alpha;\n    }\n    ",
      Convolute_7_1: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform float uMatrix[49];\n    uniform float uStepW;\n    uniform float uStepH;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = vec4(0, 0, 0, 0);\n      for (float h = 0.0; h < 7.0; h+=1.0) {\n        for (float w = 0.0; w < 7.0; w+=1.0) {\n          vec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));\n          color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 7.0 + w)];\n        }\n      }\n      gl_FragColor = color;\n    }\n    ",
      Convolute_7_0: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform float uMatrix[49];\n    uniform float uStepW;\n    uniform float uStepH;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = vec4(0, 0, 0, 1);\n      for (float h = 0.0; h < 7.0; h+=1.0) {\n        for (float w = 0.0; w < 7.0; w+=1.0) {\n          vec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));\n          color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 7.0 + w)];\n        }\n      }\n      float alpha = texture2D(uTexture, vTexCoord).a;\n      gl_FragColor = color;\n      gl_FragColor.a = alpha;\n    }\n    ",
      Convolute_9_1: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform float uMatrix[81];\n    uniform float uStepW;\n    uniform float uStepH;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = vec4(0, 0, 0, 0);\n      for (float h = 0.0; h < 9.0; h+=1.0) {\n        for (float w = 0.0; w < 9.0; w+=1.0) {\n          vec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));\n          color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 9.0 + w)];\n        }\n      }\n      gl_FragColor = color;\n    }\n    ",
      Convolute_9_0: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform float uMatrix[81];\n    uniform float uStepW;\n    uniform float uStepH;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = vec4(0, 0, 0, 1);\n      for (float h = 0.0; h < 9.0; h+=1.0) {\n        for (float w = 0.0; w < 9.0; w+=1.0) {\n          vec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));\n          color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 9.0 + w)];\n        }\n      }\n      float alpha = texture2D(uTexture, vTexCoord).a;\n      gl_FragColor = color;\n      gl_FragColor.a = alpha;\n    }\n    "
    };
    class _v444 extends _v421 {
      getCacheKey() {
        return "".concat(this.type, "_").concat(Math.sqrt(this.matrix.length), "_").concat(+!!this.opaque);
      }
      getFragmentSource() {
        return _v443[this.getCacheKey()];
      }
      applyTo2d(_v0) {
        let _v1,
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
          _v14 = _v0.imageData,
          _v15 = _v14.data,
          _v16 = this.matrix,
          _v17 = Math.round(Math.sqrt(_v16.length)),
          _v18 = Math.floor(_v17 / 2),
          _v19 = _v14.width,
          _v20 = _v14.height,
          _v21 = _v0.ctx.createImageData(_v19, _v20),
          _v22 = _v21.data,
          _v23 = +!!this.opaque;
        for (_v11 = 0; _v11 < _v20; _v11++) for (_v10 = 0; _v10 < _v19; _v10++) {
          for (_v5 = (_v11 * _v19 + _v10) * 4, _v1 = 0, _v2 = 0, _v3 = 0, _v4 = 0, _v13 = 0; _v13 < _v17; _v13++) for (_v12 = 0; _v12 < _v17; _v12++) _v7 = _v11 + _v13 - _v18, _v6 = _v10 + _v12 - _v18, _v7 < 0 || _v7 >= _v20 || _v6 < 0 || _v6 >= _v19 || (_v8 = (_v7 * _v19 + _v6) * 4, _v9 = _v16[_v13 * _v17 + _v12], _v1 += _v15[_v8] * _v9, _v2 += _v15[_v8 + 1] * _v9, _v3 += _v15[_v8 + 2] * _v9, _v23 || (_v4 += _v15[_v8 + 3] * _v9));
          _v22[_v5] = _v1, _v22[_v5 + 1] = _v2, _v22[_v5 + 2] = _v3, _v23 ? _v22[_v5 + 3] = _v15[_v5 + 3] : _v22[_v5 + 3] = _v4;
        }
        _v0.imageData = _v21;
      }
      getUniformLocations(_v0, _v1) {
        return {
          uMatrix: _v0.getUniformLocation(_v1, "uMatrix"),
          uOpaque: _v0.getUniformLocation(_v1, "uOpaque"),
          uHalfSize: _v0.getUniformLocation(_v1, "uHalfSize"),
          uSize: _v0.getUniformLocation(_v1, "uSize")
        };
      }
      sendUniformData(_v0, _v1) {
        _v0.uniform1fv(_v1.uMatrix, this.matrix);
      }
      toObject() {
        return _v5(_v5({}, super.toObject()), {}, {
          opaque: this.opaque,
          matrix: [...this.matrix]
        });
      }
    }
    _v7(_v444, "type", "Convolute"), _v7(_v444, "defaults", {
      opaque: !1,
      matrix: [0, 0, 0, 0, 1, 0, 0, 0, 0]
    }), _v36.setClass(_v444);
    let _v445 = ["gamma"];
    class _v446 extends _v421 {
      getFragmentSource() {
        return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  uniform vec3 uGamma;\n  varying vec2 vTexCoord;\n  void main() {\n    vec4 color = texture2D(uTexture, vTexCoord);\n    vec3 correction = (1.0 / uGamma);\n    color.r = pow(color.r, correction.r);\n    color.g = pow(color.g, correction.g);\n    color.b = pow(color.b, correction.b);\n    gl_FragColor = color;\n    gl_FragColor.rgb *= color.a;\n  }\n";
      }
      constructor() {
        let _v0 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          {
            gamma: _v1 = [1, 1, 1]
          } = _v0;
        super(_v8(_v0, _v445)), this.gamma = _v1;
      }
      applyTo2d(_v0) {
        let {
            imageData: {
              data: _v1
            }
          } = _v0,
          _v2 = this.gamma,
          _v3 = 1 / _v2[0],
          _v4 = 1 / _v2[1],
          _v5 = 1 / _v2[2];
        this.rgbValues || (this.rgbValues = {
          r: new Uint8Array(256),
          g: new Uint8Array(256),
          b: new Uint8Array(256)
        });
        let _v6 = this.rgbValues;
        for (let _v0 = 0; _v0 < 256; _v0++) _v6.r[_v0] = 255 * Math.pow(_v0 / 255, _v3), _v6.g[_v0] = 255 * Math.pow(_v0 / 255, _v4), _v6.b[_v0] = 255 * Math.pow(_v0 / 255, _v5);
        for (let _v0 = 0; _v0 < _v1.length; _v0 += 4) _v1[_v0] = _v6.r[_v1[_v0]], _v1[_v0 + 1] = _v6.g[_v1[_v0 + 1]], _v1[_v0 + 2] = _v6.b[_v1[_v0 + 2]];
      }
      getUniformLocations(_v0, _v1) {
        return {
          uGamma: _v0.getUniformLocation(_v1, "uGamma")
        };
      }
      sendUniformData(_v0, _v1) {
        _v0.uniform3fv(_v1.uGamma, this.gamma);
      }
    }
    _v7(_v446, "type", "Gamma"), _v7(_v446, "defaults", {
      mainParameter: "gamma",
      gamma: [1, 1, 1]
    }), _v36.setClass(_v446);
    let _v447 = {
      average: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = texture2D(uTexture, vTexCoord);\n      float average = (color.r + color.b + color.g) / 3.0;\n      gl_FragColor = vec4(average, average, average, color.a);\n    }\n    ",
      lightness: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform int uMode;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 col = texture2D(uTexture, vTexCoord);\n      float average = (max(max(col.r, col.g),col.b) + min(min(col.r, col.g),col.b)) / 2.0;\n      gl_FragColor = vec4(average, average, average, col.a);\n    }\n    ",
      luminosity: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform int uMode;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 col = texture2D(uTexture, vTexCoord);\n      float average = 0.21 * col.r + 0.72 * col.g + 0.07 * col.b;\n      gl_FragColor = vec4(average, average, average, col.a);\n    }\n    "
    };
    class _v448 extends _v421 {
      applyTo2d(_v0) {
        let {
          imageData: {
            data: _v1
          }
        } = _v0;
        for (let _v0 = 0, _v1; _v0 < _v1.length; _v0 += 4) {
          switch (this.mode) {
            case "average":
              _v1 = (_v1[_v0] + _v1[_v0 + 1] + _v1[_v0 + 2]) / 3;
              break;
            case "lightness":
              _v1 = (Math.min(_v1[_v0], _v1[_v0 + 1], _v1[_v0 + 2]) + Math.max(_v1[_v0], _v1[_v0 + 1], _v1[_v0 + 2])) / 2;
              break;
            case "luminosity":
              _v1 = .21 * _v1[_v0] + .72 * _v1[_v0 + 1] + .07 * _v1[_v0 + 2];
          }
          _v1[_v0] = _v1, _v1[_v0 + 1] = _v1, _v1[_v0 + 2] = _v1;
        }
      }
      getCacheKey() {
        return "".concat(this.type, "_").concat(this.mode);
      }
      getFragmentSource() {
        return _v447[this.mode];
      }
      getUniformLocations(_v0, _v1) {
        return {
          uMode: _v0.getUniformLocation(_v1, "uMode")
        };
      }
      sendUniformData(_v0, _v1) {
        _v0.uniform1i(_v1.uMode, 1);
      }
      isNeutralState() {
        return !1;
      }
    }
    _v7(_v448, "type", "Grayscale"), _v7(_v448, "defaults", {
      mode: "average",
      mainParameter: "mode"
    }), _v36.setClass(_v448);
    class _v449 extends _v431 {
      calculateMatrix() {
        let _v0 = this.rotation * Math.PI,
          _v1 = _v42(_v0),
          _v2 = _v43(_v0),
          _v3 = 1 / 3,
          _v4 = Math.sqrt(1 / 3) * _v2,
          _v5 = 1 - _v1;
        this.matrix = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], this.matrix[0] = _v1 + _v5 / 3, this.matrix[1] = _v3 * _v5 - _v4, this.matrix[2] = _v3 * _v5 + _v4, this.matrix[5] = _v3 * _v5 + _v4, this.matrix[6] = _v1 + _v3 * _v5, this.matrix[7] = _v3 * _v5 - _v4, this.matrix[10] = _v3 * _v5 - _v4, this.matrix[11] = _v3 * _v5 + _v4, this.matrix[12] = _v1 + _v3 * _v5;
      }
      isNeutralState() {
        return this.calculateMatrix(), super.isNeutralState();
      }
      applyTo(_v0) {
        this.calculateMatrix(), super.applyTo(_v0);
      }
    }
    _v7(_v449, "type", "HueRotation"), _v7(_v449, "defaults", {
      rotation: 0,
      mainParameter: "rotation"
    }), _v36.setClass(_v449);
    class _v450 extends _v421 {
      applyTo2d(_v0) {
        let {
          imageData: {
            data: _v1
          }
        } = _v0;
        for (let _v0 = 0; _v0 < _v1.length; _v0 += 4) _v1[_v0] = 255 - _v1[_v0], _v1[_v0 + 1] = 255 - _v1[_v0 + 1], _v1[_v0 + 2] = 255 - _v1[_v0 + 2], this.alpha && (_v1[_v0 + 3] = 255 - _v1[_v0 + 3]);
      }
      getFragmentSource() {
        return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  uniform int uInvert;\n  uniform int uAlpha;\n  varying vec2 vTexCoord;\n  void main() {\n    vec4 color = texture2D(uTexture, vTexCoord);\n    if (uInvert == 1) {\n      if (uAlpha == 1) {\n        gl_FragColor = vec4(1.0 - color.r,1.0 -color.g,1.0 -color.b,1.0 -color.a);\n      } else {\n        gl_FragColor = vec4(1.0 - color.r,1.0 -color.g,1.0 -color.b,color.a);\n      }\n    } else {\n      gl_FragColor = color;\n    }\n  }\n";
      }
      isNeutralState() {
        return !this.invert;
      }
      getUniformLocations(_v0, _v1) {
        return {
          uInvert: _v0.getUniformLocation(_v1, "uInvert"),
          uAlpha: _v0.getUniformLocation(_v1, "uAlpha")
        };
      }
      sendUniformData(_v0, _v1) {
        _v0.uniform1i(_v1.uInvert, Number(this.invert)), _v0.uniform1i(_v1.uAlpha, Number(this.alpha));
      }
    }
    _v7(_v450, "type", "Invert"), _v7(_v450, "defaults", {
      alpha: !1,
      invert: !0,
      mainParameter: "invert"
    }), _v36.setClass(_v450);
    class _v451 extends _v421 {
      getFragmentSource() {
        return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  uniform float uStepH;\n  uniform float uNoise;\n  uniform float uSeed;\n  varying vec2 vTexCoord;\n  float rand(vec2 co, float seed, float vScale) {\n    return fract(sin(dot(co.xy * vScale ,vec2(12.9898 , 78.233))) * 43758.5453 * (seed + 0.01) / 2.0);\n  }\n  void main() {\n    vec4 color = texture2D(uTexture, vTexCoord);\n    color.rgb += (0.5 - rand(vTexCoord, uSeed, 0.1 / uStepH)) * uNoise;\n    gl_FragColor = color;\n  }\n";
      }
      applyTo2d(_v0) {
        let {
          imageData: {
            data: _v1
          }
        } = _v0;
        if (0 === this.noise) return;
        let _v2 = this.noise;
        for (let _v0 = 0; _v0 < _v1.length; _v0 += 4) {
          let _v0 = (.5 - Math.random()) * _v2;
          _v1[_v0] += _v0, _v1[_v0 + 1] += _v0, _v1[_v0 + 2] += _v0;
        }
      }
      getUniformLocations(_v0, _v1) {
        return {
          uNoise: _v0.getUniformLocation(_v1, "uNoise"),
          uSeed: _v0.getUniformLocation(_v1, "uSeed")
        };
      }
      sendUniformData(_v0, _v1) {
        _v0.uniform1f(_v1.uNoise, this.noise / 255), _v0.uniform1f(_v1.uSeed, Math.random());
      }
      toObject() {
        return _v5(_v5({}, super.toObject()), {}, {
          noise: this.noise
        });
      }
    }
    _v7(_v451, "type", "Noise"), _v7(_v451, "defaults", {
      mainParameter: "noise",
      noise: 0
    }), _v36.setClass(_v451);
    class _v452 extends _v421 {
      applyTo2d(_v0) {
        let {
          imageData: {
            data: _v1,
            width: _v2,
            height: _v3
          }
        } = _v0;
        for (let _v0 = 0; _v0 < _v3; _v0 += this.blocksize) for (let _v0 = 0; _v0 < _v2; _v0 += this.blocksize) {
          let _v0 = 4 * _v0 * _v2 + 4 * _v0,
            _v1 = _v1[_v0],
            _v2 = _v1[_v0 + 1],
            _v3 = _v1[_v0 + 2],
            _v4 = _v1[_v0 + 3];
          for (let _v0 = _v0; _v0 < Math.min(_v0 + this.blocksize, _v3); _v0++) for (let _v0 = _v0; _v0 < Math.min(_v0 + this.blocksize, _v2); _v0++) {
            let _v0 = 4 * _v0 * _v2 + 4 * _v0;
            _v1[_v0] = _v1, _v1[_v0 + 1] = _v2, _v1[_v0 + 2] = _v3, _v1[_v0 + 3] = _v4;
          }
        }
      }
      isNeutralState() {
        return 1 === this.blocksize;
      }
      getFragmentSource() {
        return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  uniform float uBlocksize;\n  uniform float uStepW;\n  uniform float uStepH;\n  varying vec2 vTexCoord;\n  void main() {\n    float blockW = uBlocksize * uStepW;\n    float blockH = uBlocksize * uStepW;\n    int posX = int(vTexCoord.x / blockW);\n    int posY = int(vTexCoord.y / blockH);\n    float fposX = float(posX);\n    float fposY = float(posY);\n    vec2 squareCoords = vec2(fposX * blockW, fposY * blockH);\n    vec4 color = texture2D(uTexture, squareCoords);\n    gl_FragColor = color;\n  }\n";
      }
      getUniformLocations(_v0, _v1) {
        return {
          uBlocksize: _v0.getUniformLocation(_v1, "uBlocksize"),
          uStepW: _v0.getUniformLocation(_v1, "uStepW"),
          uStepH: _v0.getUniformLocation(_v1, "uStepH")
        };
      }
      sendUniformData(_v0, _v1) {
        _v0.uniform1f(_v1.uBlocksize, this.blocksize);
      }
    }
    _v7(_v452, "type", "Pixelate"), _v7(_v452, "defaults", {
      blocksize: 4,
      mainParameter: "blocksize"
    }), _v36.setClass(_v452);
    class _v453 extends _v421 {
      getFragmentShader() {
        return "\nprecision highp float;\nuniform sampler2D uTexture;\nuniform vec4 uLow;\nuniform vec4 uHigh;\nvarying vec2 vTexCoord;\nvoid main() {\n  gl_FragColor = texture2D(uTexture, vTexCoord);\n  if(all(greaterThan(gl_FragColor.rgb,uLow.rgb)) && all(greaterThan(uHigh.rgb,gl_FragColor.rgb))) {\n    gl_FragColor.a = 0.0;\n  }\n}\n";
      }
      applyTo2d(_v0) {
        let {
            imageData: {
              data: _v1
            }
          } = _v0,
          _v2 = 255 * this.distance,
          _v3 = new _v84(this.color).getSource(),
          _v4 = [_v3[0] - _v2, _v3[1] - _v2, _v3[2] - _v2],
          _v5 = [_v3[0] + _v2, _v3[1] + _v2, _v3[2] + _v2];
        for (let _v0 = 0; _v0 < _v1.length; _v0 += 4) {
          let _v0 = _v1[_v0],
            _v1 = _v1[_v0 + 1],
            _v2 = _v1[_v0 + 2];
          _v0 > _v4[0] && _v1 > _v4[1] && _v2 > _v4[2] && _v0 < _v5[0] && _v1 < _v5[1] && _v2 < _v5[2] && (_v1[_v0 + 3] = 0);
        }
      }
      getUniformLocations(_v0, _v1) {
        return {
          uLow: _v0.getUniformLocation(_v1, "uLow"),
          uHigh: _v0.getUniformLocation(_v1, "uHigh")
        };
      }
      sendUniformData(_v0, _v1) {
        let _v2 = new _v84(this.color).getSource(),
          _v3 = this.distance,
          _v4 = [0 + _v2[0] / 255 - _v3, 0 + _v2[1] / 255 - _v3, 0 + _v2[2] / 255 - _v3, 1],
          _v5 = [_v2[0] / 255 + _v3, _v2[1] / 255 + _v3, _v2[2] / 255 + _v3, 1];
        _v0.uniform4fv(_v1.uLow, _v4), _v0.uniform4fv(_v1.uHigh, _v5);
      }
      toObject() {
        return _v5(_v5({}, super.toObject()), {}, {
          color: this.color,
          distance: this.distance
        });
      }
    }
    _v7(_v453, "type", "RemoveColor"), _v7(_v453, "defaults", {
      color: "#FFFFFF",
      distance: .02,
      useAlpha: !1
    }), _v36.setClass(_v453);
    class _v454 extends _v421 {
      getUniformLocations(_v0, _v1) {
        return {
          uDelta: _v0.getUniformLocation(_v1, "uDelta"),
          uTaps: _v0.getUniformLocation(_v1, "uTaps")
        };
      }
      sendUniformData(_v0, _v1) {
        _v0.uniform2fv(_v1.uDelta, this.horizontal ? [1 / this.width, 0] : [0, 1 / this.height]), _v0.uniform1fv(_v1.uTaps, this.taps);
      }
      getFilterWindow() {
        let _v0 = this.tempScale;
        return Math.ceil(this.lanczosLobes / _v0);
      }
      getCacheKey() {
        let _v0 = this.getFilterWindow();
        return "".concat(this.type, "_").concat(_v0);
      }
      getFragmentSource() {
        let _v0 = this.getFilterWindow();
        return this.generateShader(_v0);
      }
      getTaps() {
        let _v0 = this.lanczosCreate(this.lanczosLobes),
          _v1 = this.tempScale,
          _v2 = this.getFilterWindow(),
          _v3 = Array(_v2);
        for (let _v0 = 1; _v0 <= _v2; _v0++) _v3[_v0 - 1] = _v0(_v0 * _v1);
        return _v3;
      }
      generateShader(_v0) {
        let _v1 = Array(_v0);
        for (let _v0 = 1; _v0 <= _v0; _v0++) _v1[_v0 - 1] = "".concat(_v0, ".0 * uDelta");
        return "\n      ".concat(this.fragmentSourceTOP, "\n      uniform float uTaps[").concat(_v0, "];\n      void main() {\n        vec4 color = texture2D(uTexture, vTexCoord);\n        float sum = 1.0;\n        ").concat(_v1.map((_v0, _v1) => "\n              color += texture2D(uTexture, vTexCoord + ".concat(_v0, ") * uTaps[").concat(_v1, "] + texture2D(uTexture, vTexCoord - ").concat(_v0, ") * uTaps[").concat(_v1, "];\n              sum += 2.0 * uTaps[").concat(_v1, "];\n            ")).join("\n"), "\n        gl_FragColor = color / sum;\n      }\n    ");
      }
      applyToForWebgl(_v0) {
        _v0.passes++, this.width = _v0.sourceWidth, this.horizontal = !0, this.dW = Math.round(this.width * this.scaleX), this.dH = _v0.sourceHeight, this.tempScale = this.dW / this.width, this.taps = this.getTaps(), _v0.destinationWidth = this.dW, super.applyTo(_v0), _v0.sourceWidth = _v0.destinationWidth, this.height = _v0.sourceHeight, this.horizontal = !1, this.dH = Math.round(this.height * this.scaleY), this.tempScale = this.dH / this.height, this.taps = this.getTaps(), _v0.destinationHeight = this.dH, super.applyTo(_v0), _v0.sourceHeight = _v0.destinationHeight;
      }
      applyTo(_v0) {
        _v416(_v0) ? this.applyToForWebgl(_v0) : this.applyTo2d(_v0);
      }
      isNeutralState() {
        return 1 === this.scaleX && 1 === this.scaleY;
      }
      lanczosCreate(_v0) {
        return _v0 => {
          if (_v0 >= _v0 || _v0 <= -_v0) return 0;
          if (_v0 < 11920929e-14 && _v0 > -11920929e-14) return 1;
          let _v1 = (_v0 *= Math.PI) / _v0;
          return Math.sin(_v0) / _v0 * Math.sin(_v1) / _v1;
        };
      }
      applyTo2d(_v0) {
        let _v1,
          _v2 = _v0.imageData,
          _v3 = this.scaleX,
          _v4 = this.scaleY;
        this.rcpScaleX = 1 / _v3, this.rcpScaleY = 1 / _v4;
        let _v5 = _v2.width,
          _v6 = _v2.height,
          _v7 = Math.round(_v5 * _v3),
          _v8 = Math.round(_v6 * _v4);
        _v1 = "sliceHack" === this.resizeType ? this.sliceByTwo(_v0, _v5, _v6, _v7, _v8) : "hermite" === this.resizeType ? this.hermiteFastResize(_v0, _v5, _v6, _v7, _v8) : "bilinear" === this.resizeType ? this.bilinearFiltering(_v0, _v5, _v6, _v7, _v8) : "lanczos" === this.resizeType ? this.lanczosResize(_v0, _v5, _v6, _v7, _v8) : new ImageData(_v7, _v8), _v0.imageData = _v1;
      }
      sliceByTwo(_v0, _v1, _v2, _v3, _v4) {
        let _v5 = _v0.imageData,
          _v6 = !1,
          _v7 = !1,
          _v8 = .5 * _v1,
          _v9 = .5 * _v2,
          _v10 = _v0.filterBackend.resources,
          _v11 = 0,
          _v12 = 0,
          _v13 = _v1,
          _v14 = 0;
        _v10.sliceByTwo || (_v10.sliceByTwo = _v53());
        let _v15 = _v10.sliceByTwo;
        (_v15.width < 1.5 * _v1 || _v15.height < _v2) && (_v15.width = 1.5 * _v1, _v15.height = _v2);
        let _v16 = _v15.getContext("2d");
        for (_v16.clearRect(0, 0, 1.5 * _v1, _v2), _v16.putImageData(_v5, 0, 0), _v3 = Math.floor(_v3), _v4 = Math.floor(_v4); !_v6 || !_v7;) _v1 = _v8, _v2 = _v9, _v3 < Math.floor(.5 * _v8) ? _v8 = Math.floor(.5 * _v8) : (_v8 = _v3, _v6 = !0), _v4 < Math.floor(.5 * _v9) ? _v9 = Math.floor(.5 * _v9) : (_v9 = _v4, _v7 = !0), _v16.drawImage(_v15, _v11, _v12, _v1, _v2, _v13, _v14, _v8, _v9), _v11 = _v13, _v12 = _v14, _v14 += _v9;
        return _v16.getImageData(_v11, _v12, _v3, _v4);
      }
      lanczosResize(_v0, _v1, _v2, _v3, _v4) {
        let _v5 = _v0.imageData.data,
          _v6 = _v0.ctx.createImageData(_v3, _v4),
          _v7 = _v6.data,
          _v8 = this.lanczosCreate(this.lanczosLobes),
          _v9 = this.rcpScaleX,
          _v10 = this.rcpScaleY,
          _v11 = 2 / this.rcpScaleX,
          _v12 = 2 / this.rcpScaleY,
          _v13 = Math.ceil(_v9 * this.lanczosLobes / 2),
          _v14 = Math.ceil(_v10 * this.lanczosLobes / 2),
          _v15 = {},
          _v16 = {
            x: 0,
            y: 0
          },
          _v17 = {
            x: 0,
            y: 0
          };
        return function _v0(_v1) {
          let _v2, _v3, _v4, _v5, _v6, _v7, _v8, _v9, _v10, _v11, _v12;
          for (_v16.x = (_v1 + .5) * _v9, _v17.x = Math.floor(_v16.x), _v2 = 0; _v2 < _v4; _v2++) {
            for (_v16.y = (_v2 + .5) * _v10, _v17.y = Math.floor(_v16.y), _v6 = 0, _v7 = 0, _v8 = 0, _v9 = 0, _v10 = 0, _v3 = _v17.x - _v13; _v3 <= _v17.x + _v13; _v3++) if (!(_v3 < 0) && !(_v3 >= _v1)) {
              _v15[_v11 = Math.floor(0 * Math.abs(_v3 - _v16.x))] || (_v15[_v11] = {});
              for (let _v0 = _v17.y - _v14; _v0 <= _v17.y + _v14; _v0++) _v0 < 0 || _v0 >= _v2 || (_v12 = Math.floor(0 * Math.abs(_v0 - _v16.y)), _v15[_v11][_v12] || (_v15[_v11][_v12] = _v8(Math.sqrt(Math.pow(_v11 * _v11, 2) + Math.pow(_v12 * _v12, 2)) / 0)), (_v4 = _v15[_v11][_v12]) > 0 && (_v5 = (_v0 * _v1 + _v3) * 4, _v6 += _v4, _v7 += _v4 * _v5[_v5], _v8 += _v4 * _v5[_v5 + 1], _v9 += _v4 * _v5[_v5 + 2], _v10 += _v4 * _v5[_v5 + 3]));
            }
            _v7[_v5 = (_v2 * _v3 + _v1) * 4] = _v7 / _v6, _v7[_v5 + 1] = _v8 / _v6, _v7[_v5 + 2] = _v9 / _v6, _v7[_v5 + 3] = _v10 / _v6;
          }
          return ++_v1 < _v3 ? _v0(_v1) : _v6;
        }(0);
      }
      bilinearFiltering(_v0, _v1, _v2, _v3, _v4) {
        let _v5,
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
          _v16 = 0,
          _v17 = this.rcpScaleX,
          _v18 = this.rcpScaleY,
          _v19 = 4 * (_v1 - 1),
          _v20 = _v0.imageData.data,
          _v21 = _v0.ctx.createImageData(_v3, _v4),
          _v22 = _v21.data;
        for (_v9 = 0; _v9 < _v4; _v9++) for (_v10 = 0; _v10 < _v3; _v10++) for (_v7 = Math.floor(_v17 * _v10), _v8 = Math.floor(_v18 * _v9), _v11 = _v17 * _v10 - _v7, _v12 = _v18 * _v9 - _v8, _v15 = 4 * (_v8 * _v1 + _v7), _v13 = 0; _v13 < 4; _v13++) _v5 = _v20[_v15 + _v13], _v6 = _v20[_v15 + 4 + _v13], _v14 = _v5 * (1 - _v11) * (1 - _v12) + _v6 * _v11 * (1 - _v12) + _v20[_v15 + _v19 + _v13] * _v12 * (1 - _v11) + _v20[_v15 + _v19 + 4 + _v13] * _v11 * _v12, _v22[_v16++] = _v14;
        return _v21;
      }
      hermiteFastResize(_v0, _v1, _v2, _v3, _v4) {
        let _v5 = this.rcpScaleX,
          _v6 = this.rcpScaleY,
          _v7 = Math.ceil(_v5 / 2),
          _v8 = Math.ceil(_v6 / 2),
          _v9 = _v0.imageData.data,
          _v10 = _v0.ctx.createImageData(_v3, _v4),
          _v11 = _v10.data;
        for (let _v0 = 0; _v0 < _v4; _v0++) for (let _v0 = 0; _v0 < _v3; _v0++) {
          let _v0 = (_v0 + _v0 * _v3) * 4,
            _v1 = 0,
            _v2 = 0,
            _v3 = 0,
            _v4 = 0,
            _v5 = 0,
            _v6 = 0,
            _v7 = 0,
            _v8 = (_v0 + .5) * _v6;
          for (let _v0 = Math.floor(_v0 * _v6); _v0 < (_v0 + 1) * _v6; _v0++) {
            let _v0 = Math.abs(_v8 - (_v0 + .5)) / _v8,
              _v1 = (_v0 + .5) * _v5,
              _v2 = _v0 * _v0;
            for (let _v0 = Math.floor(_v0 * _v5); _v0 < (_v0 + 1) * _v5; _v0++) {
              let _v0 = Math.abs(_v1 - (_v0 + .5)) / _v7,
                _v1 = Math.sqrt(_v2 + _v0 * _v0);
              _v1 > 1 && _v1 < -1 || (_v1 = 2 * _v1 * _v1 * _v1 - 3 * _v1 * _v1 + 1) > 0 && (_v7 += _v1 * _v9[(_v0 = 4 * (_v0 + _v0 * _v1)) + 3], _v3 += _v1, _v9[_v0 + 3] < 255 && (_v1 = _v1 * _v9[_v0 + 3] / 250), _v4 += _v1 * _v9[_v0], _v5 += _v1 * _v9[_v0 + 1], _v6 += _v1 * _v9[_v0 + 2], _v2 += _v1);
            }
          }
          _v11[_v0] = _v4 / _v2, _v11[_v0 + 1] = _v5 / _v2, _v11[_v0 + 2] = _v6 / _v2, _v11[_v0 + 3] = _v7 / _v3;
        }
        return _v10;
      }
      toObject() {
        return {
          type: this.type,
          scaleX: this.scaleX,
          scaleY: this.scaleY,
          resizeType: this.resizeType,
          lanczosLobes: this.lanczosLobes
        };
      }
    }
    _v7(_v454, "type", "Resize"), _v7(_v454, "defaults", {
      resizeType: "hermite",
      scaleX: 1,
      scaleY: 1,
      lanczosLobes: 3,
      fragmentSourceTOP: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform vec2 uDelta;\n    varying vec2 vTexCoord;\n  "
    }), _v36.setClass(_v454);
    class _v455 extends _v421 {
      getFragmentSource() {
        return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  uniform float uSaturation;\n  varying vec2 vTexCoord;\n  void main() {\n    vec4 color = texture2D(uTexture, vTexCoord);\n    float rgMax = max(color.r, color.g);\n    float rgbMax = max(rgMax, color.b);\n    color.r += rgbMax != color.r ? (rgbMax - color.r) * uSaturation : 0.00;\n    color.g += rgbMax != color.g ? (rgbMax - color.g) * uSaturation : 0.00;\n    color.b += rgbMax != color.b ? (rgbMax - color.b) * uSaturation : 0.00;\n    gl_FragColor = color;\n  }\n";
      }
      applyTo2d(_v0) {
        let {
          imageData: {
            data: _v1
          }
        } = _v0;
        if (0 === this.saturation) return;
        let _v2 = -this.saturation;
        for (let _v0 = 0; _v0 < _v1.length; _v0 += 4) {
          let _v0 = Math.max(_v1[_v0], _v1[_v0 + 1], _v1[_v0 + 2]);
          _v1[_v0] += _v0 !== _v1[_v0] ? (_v0 - _v1[_v0]) * _v2 : 0, _v1[_v0 + 1] += _v0 !== _v1[_v0 + 1] ? (_v0 - _v1[_v0 + 1]) * _v2 : 0, _v1[_v0 + 2] += _v0 !== _v1[_v0 + 2] ? (_v0 - _v1[_v0 + 2]) * _v2 : 0;
        }
      }
      getUniformLocations(_v0, _v1) {
        return {
          uSaturation: _v0.getUniformLocation(_v1, "uSaturation")
        };
      }
      sendUniformData(_v0, _v1) {
        _v0.uniform1f(_v1.uSaturation, -this.saturation);
      }
    }
    _v7(_v455, "type", "Saturation"), _v7(_v455, "defaults", {
      saturation: 0,
      mainParameter: "saturation"
    }), _v36.setClass(_v455);
    class _v456 extends _v421 {
      getFragmentSource() {
        return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  uniform float uVibrance;\n  varying vec2 vTexCoord;\n  void main() {\n    vec4 color = texture2D(uTexture, vTexCoord);\n    float max = max(color.r, max(color.g, color.b));\n    float avg = (color.r + color.g + color.b) / 3.0;\n    float amt = (abs(max - avg) * 2.0) * uVibrance;\n    color.r += max != color.r ? (max - color.r) * amt : 0.00;\n    color.g += max != color.g ? (max - color.g) * amt : 0.00;\n    color.b += max != color.b ? (max - color.b) * amt : 0.00;\n    gl_FragColor = color;\n  }\n";
      }
      applyTo2d(_v0) {
        let {
          imageData: {
            data: _v1
          }
        } = _v0;
        if (0 === this.vibrance) return;
        let _v2 = -this.vibrance;
        for (let _v0 = 0; _v0 < _v1.length; _v0 += 4) {
          let _v0 = Math.max(_v1[_v0], _v1[_v0 + 1], _v1[_v0 + 2]),
            _v1 = 2 * Math.abs(_v0 - (_v1[_v0] + _v1[_v0 + 1] + _v1[_v0 + 2]) / 3) / 255 * _v2;
          _v1[_v0] += _v0 !== _v1[_v0] ? (_v0 - _v1[_v0]) * _v1 : 0, _v1[_v0 + 1] += _v0 !== _v1[_v0 + 1] ? (_v0 - _v1[_v0 + 1]) * _v1 : 0, _v1[_v0 + 2] += _v0 !== _v1[_v0 + 2] ? (_v0 - _v1[_v0 + 2]) * _v1 : 0;
        }
      }
      getUniformLocations(_v0, _v1) {
        return {
          uVibrance: _v0.getUniformLocation(_v1, "uVibrance")
        };
      }
      sendUniformData(_v0, _v1) {
        _v0.uniform1f(_v1.uVibrance, -this.vibrance);
      }
    }
    _v7(_v456, "type", "Vibrance"), _v7(_v456, "defaults", {
      vibrance: 0,
      mainParameter: "vibrance"
    }), _v36.setClass(_v456);
    var _v457 = Object.freeze({
      __proto__: null,
      BaseFilter: _v421,
      BlackWhite: _v439,
      BlendColor: _v423,
      BlendImage: _v426,
      Blur: _v427,
      Brightness: _v428,
      Brownie: _v433,
      ColorMatrix: _v431,
      Composed: _v441,
      Contrast: _v442,
      Convolute: _v444,
      Gamma: _v446,
      Grayscale: _v448,
      HueRotation: _v449,
      Invert: _v450,
      Kodachrome: _v435,
      Noise: _v451,
      Pixelate: _v452,
      Polaroid: _v437,
      RemoveColor: _v453,
      Resize: _v454,
      Saturation: _v455,
      Sepia: _v438,
      Technicolor: _v436,
      Vibrance: _v456,
      Vintage: _v434
    });
    _v0.ActiveSelection = _v389, _v0.BaseBrush = _v338, _v0.Canvas = _v324, _v0.Canvas2dFilterBackend = _v390, _v0.CanvasDOMManager = _v315, _v0.Circle = _v345, _v0.CircleBrush = class extends _v338 {
      constructor(_v0) {
        super(_v0), _v7(this, "width", 10), this.points = [];
      }
      drawDot(_v0) {
        let _v1 = this.addPoint(_v0),
          _v2 = this.canvas.contextTop;
        this._saveAndTransform(_v2), this.dot(_v2, _v1), _v2.restore();
      }
      dot(_v0, _v1) {
        _v0.fillStyle = _v1.fill, _v0.beginPath(), _v0.arc(_v1.x, _v1.y, _v1.radius, 0, 2 * Math.PI, !1), _v0.closePath(), _v0.fill();
      }
      onMouseDown(_v0) {
        this.points = [], this.canvas.clearContext(this.canvas.contextTop), this._setShadow(), this.drawDot(_v0);
      }
      _render() {
        let _v0 = this.canvas.contextTop,
          _v1 = this.points;
        this._saveAndTransform(_v0);
        for (let _v0 = 0; _v0 < _v1.length; _v0++) this.dot(_v0, _v1[_v0]);
        _v0.restore();
      }
      onMouseMove(_v0) {
        !0 === this.limitedToCanvasSize && this._isOutSideCanvas(_v0) || (this.needsFullRender() ? (this.canvas.clearContext(this.canvas.contextTop), this.addPoint(_v0), this._render()) : this.drawDot(_v0));
      }
      onMouseUp() {
        let _v0 = this.canvas.renderOnAddRemove;
        this.canvas.renderOnAddRemove = !1;
        let _v1 = [];
        for (let _v0 = 0; _v0 < this.points.length; _v0++) {
          let _v0 = this.points[_v0],
            _v1 = new _v345({
              radius: _v0.radius,
              left: _v0.x,
              top: _v0.y,
              originX: _v29,
              originY: _v29,
              fill: _v0.fill
            });
          this.shadow && (_v1.shadow = new _v190(this.shadow)), _v1.push(_v1);
        }
        let _v2 = new _v279(_v1, {
          canvas: this.canvas
        });
        this.canvas.fire("before:path:created", {
          path: _v2
        }), this.canvas.add(_v2), this.canvas.fire("path:created", {
          path: _v2
        }), this.canvas.clearContext(this.canvas.contextTop), this._resetShadow(), this.canvas.renderOnAddRemove = _v0, this.canvas.requestRenderAll();
      }
      addPoint(_v0) {
        let {
            x: _v1,
            y: _v2
          } = _v0,
          _v3 = {
            x: _v1,
            y: _v2,
            radius: _v39(Math.max(0, this.width - 20), this.width + 20) / 2,
            fill: new _v84(this.color).setAlpha(_v39(0, 100) / 100).toRgba()
          };
        return this.points.push(_v3), _v3;
      }
    }, _v0.ClipPathLayout = _v386, _v0.Color = _v84, _v0.Control = _v202, _v0.Ellipse = _v352, _v0.FabricImage = _v396, _v0.FabricObject = _v230, _v0.FabricText = _v372, _v0.FitContentLayout = _v272, _v0.FixedLayout = _v387, _v0.Gradient = _v335, _v0.Group = _v279, _v0.IText = _v384, _v0.Image = _v396, _v0.Intersection = _v173, _v0.LayoutManager = _v276, _v0.LayoutStrategy = _v271, _v0.Line = _v349, _v0.Object = _v230, _v0.Observable = _v38, _v0.Path = _v341, _v0.Pattern = _v337, _v0.PatternBrush = class extends _v342 {
      constructor(_v0) {
        super(_v0);
      }
      getPatternSrc() {
        let _v0 = _v53(),
          _v1 = _v0.getContext("2d");
        return _v0.width = _v0.height = 25, _v1 && (_v1.fillStyle = this.color, _v1.beginPath(), _v1.arc(10, 10, 10, 0, 2 * Math.PI, !1), _v1.closePath(), _v1.fill()), _v0;
      }
      getPattern(_v0) {
        return _v0.createPattern(this.source || this.getPatternSrc(), "repeat");
      }
      _setBrushStyles(_v0) {
        super._setBrushStyles(_v0);
        let _v1 = this.getPattern(_v0);
        _v1 && (_v0.strokeStyle = _v1);
      }
      createPath(_v0) {
        let _v1 = super.createPath(_v0),
          _v2 = _v1._getLeftTopCoords().scalarAdd(_v1.strokeWidth / 2);
        return _v1.stroke = new _v337({
          source: this.source || this.getPatternSrc(),
          offsetX: -_v2.x,
          offsetY: -_v2.y
        }), _v1;
      }
    }, _v0.PencilBrush = _v342, _v0.Point = _v44, _v0.Polygon = _v357, _v0.Polyline = _v356, _v0.Rect = _v265, _v0.Shadow = _v190, _v0.SprayBrush = class extends _v338 {
      constructor(_v0) {
        super(_v0), _v7(this, "width", 10), _v7(this, "density", 20), _v7(this, "dotWidth", 1), _v7(this, "dotWidthVariance", 1), _v7(this, "randomOpacity", !1), _v7(this, "optimizeOverlapping", !0), this.sprayChunks = [], this.sprayChunk = [];
      }
      onMouseDown(_v0) {
        this.sprayChunks = [], this.canvas.clearContext(this.canvas.contextTop), this._setShadow(), this.addSprayChunk(_v0), this.renderChunck(this.sprayChunk);
      }
      onMouseMove(_v0) {
        !0 === this.limitedToCanvasSize && this._isOutSideCanvas(_v0) || (this.addSprayChunk(_v0), this.renderChunck(this.sprayChunk));
      }
      onMouseUp() {
        let _v0 = this.canvas.renderOnAddRemove;
        this.canvas.renderOnAddRemove = !1;
        let _v1 = [];
        for (let _v0 = 0; _v0 < this.sprayChunks.length; _v0++) {
          let _v0 = this.sprayChunks[_v0];
          for (let _v0 = 0; _v0 < _v0.length; _v0++) {
            let _v0 = _v0[_v0],
              _v1 = new _v265({
                width: _v0.width,
                height: _v0.width,
                left: _v0.x + 1,
                top: _v0.y + 1,
                originX: _v29,
                originY: _v29,
                fill: this.color
              });
            _v1.push(_v1);
          }
        }
        let _v2 = new _v279(this.optimizeOverlapping ? function (_v0) {
          let _v1 = {},
            _v2 = [];
          for (let _v0 = 0, _v1; _v0 < _v0.length; _v0++) _v1[_v1 = "".concat(_v0[_v0].left).concat(_v0[_v0].top)] || (_v1[_v1] = !0, _v2.push(_v0[_v0]));
          return _v2;
        }(_v1) : _v1, {
          objectCaching: !0,
          subTargetCheck: !1,
          interactive: !1
        });
        this.shadow && _v2.set("shadow", new _v190(this.shadow)), this.canvas.fire("before:path:created", {
          path: _v2
        }), this.canvas.add(_v2), this.canvas.fire("path:created", {
          path: _v2
        }), this.canvas.clearContext(this.canvas.contextTop), this._resetShadow(), this.canvas.renderOnAddRemove = _v0, this.canvas.requestRenderAll();
      }
      renderChunck(_v0) {
        let _v1 = this.canvas.contextTop;
        _v1.fillStyle = this.color, this._saveAndTransform(_v1);
        for (let _v0 = 0; _v0 < _v0.length; _v0++) {
          let _v0 = _v0[_v0];
          _v1.globalAlpha = _v0.opacity, _v1.fillRect(_v0.x, _v0.y, _v0.width, _v0.width);
        }
        _v1.restore();
      }
      _render() {
        let _v0 = this.canvas.contextTop;
        _v0.fillStyle = this.color, this._saveAndTransform(_v0);
        for (let _v0 = 0; _v0 < this.sprayChunks.length; _v0++) this.renderChunck(this.sprayChunks[_v0]);
        _v0.restore();
      }
      addSprayChunk(_v0) {
        this.sprayChunk = [];
        let _v1 = this.width / 2;
        for (let _v0 = 0; _v0 < this.density; _v0++) this.sprayChunk.push({
          x: _v39(_v0.x - _v1, _v0.x + _v1),
          y: _v39(_v0.y - _v1, _v0.y + _v1),
          width: this.dotWidthVariance ? _v39(Math.max(1, this.dotWidth - this.dotWidthVariance), this.dotWidth + this.dotWidthVariance) : this.dotWidth,
          opacity: this.randomOpacity ? _v39(0, 100) / 100 : 1
        });
        this.sprayChunks.push(this.sprayChunk);
      }
    }, _v0.StaticCanvas = _v105, _v0.StaticCanvasDOMManager = _v103, _v0.Text = _v372, _v0.Textbox = _v385, _v0.Triangle = _v350, _v0.WebGLFilterBackend = _v391, _v0.cache = _v22, _v0.classRegistry = _v36, _v0.config = _v11, _v0.controlsUtils = _v415, _v0.createCollectionMixin = _v47, _v0.filters = _v457, _v0.getCSSRules = _v404, _v0.getEnv = _v18, _v0.getFabricDocument = _v19, _v0.getFabricWindow = _v20, _v0.getFilterBackend = _v393, _v0.iMatrix = _v28, _v0.initFilterBackend = _v392, _v0.isPutImageFaster = (_v0, _v1) => {
      let _v2,
        _v3 = _v53(),
        _v4 = _v53().getContext("webgl"),
        _v5 = {
          imageBuffer: new ArrayBuffer(_v0 * _v1 * 4)
        },
        _v6 = {
          destinationWidth: _v0,
          destinationHeight: _v1,
          targetCanvas: _v3
        };
      _v3.width = _v0, _v3.height = _v1, _v2 = _v20().performance.now(), _v391.prototype.copyGLTo2D.call(_v5, _v4, _v6);
      let _v7 = _v20().performance.now() - _v2;
      return _v2 = _v20().performance.now(), _v391.prototype.copyGLTo2DPutImageData.call(_v5, _v4, _v6), _v7 > _v20().performance.now() - _v2;
    }, _v0.isWebGLPipelineState = _v416, _v0.loadSVGFromString = function (_v0, _v1, _v2) {
      return _v409(new (_v20().DOMParser)().parseFromString(_v0.trim(), "text/xml"), _v1, _v2);
    }, _v0.loadSVGFromURL = function (_v0, _v1) {
      let _v2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      return new Promise((_v0, _v1) => {
        _v312(_v0.replace(/^\n\s*/, "").trim(), {
          onComplete: _v0 => {
            let _v1 = _v0.responseXML;
            _v1 && _v0(_v1), _v1();
          },
          signal: _v2.signal
        });
      }).then(_v0 => _v409(_v0, _v1, _v2)).catch(() => _v408());
    }, _v0.parseAttributes = _v262, _v0.parseFontDeclaration = _v259, _v0.parsePointsAttribute = _v353, _v0.parseSVGDocument = _v409, _v0.parseStyleAttribute = _v260, _v0.parseTransformAttribute = _v258, _v0.runningAnimations = _v37, _v0.setEnv = _v0 => {
      _v1 = _v0;
    }, _v0.setFilterBackend = function (_v0) {
      _v3 = _v0;
    }, _v0.util = _v314, _v0.version = _v23;
  }(_v2);
}