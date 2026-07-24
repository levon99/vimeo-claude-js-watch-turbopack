{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = Object.defineProperty,
    _v4 = (_v0, _v1, _v2) => {
      let _v3;
      return (_v3 = _v1 + "") in _v0 ? _v3(_v0, _v3, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: _v2
      }) : _v0[_v3] = _v2;
    };
  function _v5(_v0, _v1) {
    var _v2, _v3, _v4, _v5, _v6, _v7, _v8, _v9, _v10;
    let {
        xChannel: _v11,
        yChannel: _v12,
        dir: _v13 = "ltr"
      } = _v1,
      {
        zChannel: _v14
      } = _v0.getColorAxes({
        xChannel: _v11,
        yChannel: _v12
      }),
      _v15 = _v0.getChannelValue(_v14),
      {
        minValue: _v16,
        maxValue: _v17
      } = _v0.getChannelRange(_v14),
      _v18 = ["top", "rtl" === _v13 ? "left" : "right"],
      _v19 = !1,
      _v20 = {
        areaStyles: {},
        areaGradientStyles: {}
      },
      _v21 = (_v15 - _v16) / (_v17 - _v16),
      _v22 = "hsla" === _v0.getFormat();
    switch (_v14) {
      case "red":
        let _v0;
        _v2 = _v19 = "green" === _v11, _v0 = `linear-gradient(to ${_v18[Number(!_v2)]}, transparent, #000)`, _v20 = {
          areaStyles: {
            backgroundImage: `linear-gradient(to ${_v18[Number(_v2)]},rgb(${_v15},0,0),rgb(${_v15},255,0))`
          },
          areaGradientStyles: {
            backgroundImage: `linear-gradient(to ${_v18[Number(_v2)]},rgb(${_v15},0,255),rgb(${_v15},255,255))`,
            WebkitMaskImage: _v0,
            maskImage: _v0
          }
        };
        break;
      case "green":
        let _v1;
        _v3 = _v19 = "red" === _v11, _v1 = `linear-gradient(to ${_v18[Number(!_v3)]}, transparent, #000)`, _v20 = {
          areaStyles: {
            backgroundImage: `linear-gradient(to ${_v18[Number(_v3)]},rgb(0,${_v15},0),rgb(255,${_v15},0))`
          },
          areaGradientStyles: {
            backgroundImage: `linear-gradient(to ${_v18[Number(_v3)]},rgb(0,${_v15},255),rgb(255,${_v15},255))`,
            WebkitMaskImage: _v1,
            maskImage: _v1
          }
        };
        break;
      case "blue":
        let _v2;
        _v4 = _v19 = "red" === _v11, _v2 = `linear-gradient(to ${_v18[Number(!_v4)]}, transparent, #000)`, _v20 = {
          areaStyles: {
            backgroundImage: `linear-gradient(to ${_v18[Number(_v4)]},rgb(0,0,${_v15}),rgb(255,0,${_v15}))`
          },
          areaGradientStyles: {
            backgroundImage: `linear-gradient(to ${_v18[Number(_v4)]},rgb(0,255,${_v15}),rgb(255,255,${_v15}))`,
            WebkitMaskImage: _v2,
            maskImage: _v2
          }
        };
        break;
      case "hue":
        (_v19 = "saturation" !== _v11, _v22) ? (_v5 = _v19, _v20 = {
          areaStyles: {},
          areaGradientStyles: {
            background: `linear-gradient(to ${_v18[Number(_v5)]}, hsla(0,0%,0%,1) 0%, hsla(0,0%,0%,0) 50%, hsla(0,0%,100%,0) 50%, hsla(0,0%,100%,1) 100%),linear-gradient(to ${_v18[Number(!_v5)]},hsl(0,0%,50%),hsla(0,0%,50%,0)),hsl(${_v15}, 100%, 50%)`
          }
        }) : (_v6 = _v19, _v20 = {
          areaStyles: {},
          areaGradientStyles: {
            background: `linear-gradient(to ${_v18[Number(_v6)]},hsl(0,0%,0%),hsla(0,0%,0%,0)),linear-gradient(to ${_v18[Number(!_v6)]},hsl(0,0%,100%),hsla(0,0%,100%,0)),hsl(${_v15}, 100%, 50%)`
          }
        });
        break;
      case "saturation":
        (_v19 = "hue" === _v11, _v22) ? (_v7 = _v19, _v20 = {
          areaStyles: {},
          areaGradientStyles: {
            background: `linear-gradient(to ${_v18[Number(!_v7)]}, hsla(0,0%,0%,${_v21}) 0%, hsla(0,0%,0%,0) 50%, hsla(0,0%,100%,0) 50%, hsla(0,0%,100%,${_v21}) 100%),linear-gradient(to ${_v18[Number(_v7)]},hsla(0,100%,50%,${_v21}),hsla(60,100%,50%,${_v21}),hsla(120,100%,50%,${_v21}),hsla(180,100%,50%,${_v21}),hsla(240,100%,50%,${_v21}),hsla(300,100%,50%,${_v21}),hsla(359,100%,50%,${_v21})),hsl(0, 0%, 50%)`
          }
        }) : (_v8 = _v19, _v20 = {
          areaStyles: {},
          areaGradientStyles: {
            background: `linear-gradient(to ${_v18[Number(!_v8)]},hsla(0,0%,0%,${_v21}),hsla(0,0%,0%,0)),linear-gradient(to ${_v18[Number(_v8)]},hsla(0,100%,50%,${_v21}),hsla(60,100%,50%,${_v21}),hsla(120,100%,50%,${_v21}),hsla(180,100%,50%,${_v21}),hsla(240,100%,50%,${_v21}),hsla(300,100%,50%,${_v21}),hsla(359,100%,50%,${_v21})),linear-gradient(to ${_v18[Number(!_v8)]},hsl(0,0%,0%),hsl(0,0%,100%))`
          }
        });
        break;
      case "brightness":
        _v9 = _v19 = "hue" === _v11, _v20 = {
          areaStyles: {},
          areaGradientStyles: {
            background: `linear-gradient(to ${_v18[Number(!_v9)]},hsla(0,0%,100%,${_v21}),hsla(0,0%,100%,0)),linear-gradient(to ${_v18[Number(_v9)]},hsla(0,100%,50%,${_v21}),hsla(60,100%,50%,${_v21}),hsla(120,100%,50%,${_v21}),hsla(180,100%,50%,${_v21}),hsla(240,100%,50%,${_v21}),hsla(300,100%,50%,${_v21}),hsla(359,100%,50%,${_v21})),#000`
          }
        };
        break;
      case "lightness":
        _v10 = _v19 = "hue" === _v11, _v20 = {
          areaStyles: {},
          areaGradientStyles: {
            backgroundImage: `linear-gradient(to ${_v18[Number(!_v10)]},hsl(0,0%,${_v15}%),hsla(0,0%,${_v15}%,0)),linear-gradient(to ${_v18[Number(_v10)]},hsl(0,100%,${_v15}%),hsl(60,100%,${_v15}%),hsl(120,100%,${_v15}%),hsl(180,100%,${_v15}%),hsl(240,100%,${_v15}%),hsl(300,100%,${_v15}%),hsl(360,100%,${_v15}%))`
          }
        };
    }
    return _v20;
  }
  var _v6 = class {
      toHexInt() {
        return this.toFormat("rgba").toHexInt();
      }
      getChannelValue(_v0) {
        if (_v0 in this) return this[_v0];
        throw Error("Unsupported color channel: " + _v0);
      }
      getChannelValuePercent(_v0, _v1) {
        let _v2 = _v1 ?? this.getChannelValue(_v0),
          {
            minValue: _v3,
            maxValue: _v4
          } = this.getChannelRange(_v0);
        return (0, _v2.getValuePercent)(_v2, _v3, _v4);
      }
      getChannelPercentValue(_v0, _v1) {
        let {
            minValue: _v2,
            maxValue: _v3,
            step: _v4
          } = this.getChannelRange(_v0),
          _v5 = (0, _v2.getPercentValue)(_v1, _v2, _v3, _v4);
        return (0, _v2.snapValueToStep)(_v5, _v2, _v3, _v4);
      }
      withChannelValue(_v0, _v1) {
        let {
          minValue: _v2,
          maxValue: _v3
        } = this.getChannelRange(_v0);
        if (_v0 in this) {
          let _v0 = this.clone();
          return _v0[_v0] = (0, _v2.clampValue)(_v1, _v2, _v3), _v0;
        }
        throw Error("Unsupported color channel: " + _v0);
      }
      getColorAxes(_v0) {
        let {
            xChannel: _v1,
            yChannel: _v2
          } = _v0,
          _v3 = _v1 || this.getChannels().find(_v0 => _v0 !== _v2),
          _v4 = _v2 || this.getChannels().find(_v0 => _v0 !== _v3),
          _v5 = this.getChannels().find(_v0 => _v0 !== _v3 && _v0 !== _v4);
        return {
          xChannel: _v3,
          yChannel: _v4,
          zChannel: _v5
        };
      }
      incrementChannel(_v0, _v1) {
        let {
            minValue: _v2,
            maxValue: _v3,
            step: _v4
          } = this.getChannelRange(_v0),
          _v5 = (0, _v2.snapValueToStep)((0, _v2.clampValue)(this.getChannelValue(_v0) + _v1, _v2, _v3), _v2, _v3, _v4);
        return this.withChannelValue(_v0, _v5);
      }
      decrementChannel(_v0, _v1) {
        return this.incrementChannel(_v0, -_v1);
      }
      isEqual(_v0) {
        return ((_v0, _v1) => {
          if (Object.keys(_v0).length !== Object.keys(_v1).length) return !1;
          for (let _v0 in _v0) if (_v0[_v0] !== _v1[_v0]) return !1;
          return !0;
        })(this.toJSON(), _v0.toJSON()) && this.getChannelValue("alpha") === _v0.getChannelValue("alpha");
      }
    },
    _v7 = class _v0 extends _v6 {
      constructor(_v0, _v1, _v2, _v3) {
        super(), this.red = _v0, this.green = _v1, this.blue = _v2, this.alpha = _v3;
      }
      static parse(_v0) {
        let _v1 = [];
        if (/^#[\da-f]+$/i.test(_v0) && [4, 5, 7, 9].includes(_v0.length)) {
          let _v0 = (_v0.length < 6 ? _v0.replace(/[^#]/gi, "$&$&") : _v0).slice(1).split("");
          for (; _v0.length > 0;) _v1.push(parseInt(_v0.splice(0, 2).join(""), 16));
          _v1[3] = void 0 !== _v1[3] ? _v1[3] / 255 : void 0;
        }
        let _v2 = _v0.match(/^rgba?\((.*)\)$/);
        return _v2?.[1] && (_v1 = _v2[1].split(",").map(_v0 => Number(_v0.trim())).map((_v0, _v1) => (0, _v2.clampValue)(_v0, 0, _v1 < 3 ? 255 : 1))), _v1.length < 3 ? void 0 : new _v0(_v1[0], _v1[1], _v1[2], _v1[3] ?? 1);
      }
      toString(_v0) {
        switch (_v0) {
          case "hex":
            return "#" + (this.red.toString(16).padStart(2, "0") + this.green.toString(16).padStart(2, "0") + this.blue.toString(16).padStart(2, "0")).toUpperCase();
          case "hexa":
            return "#" + (this.red.toString(16).padStart(2, "0") + this.green.toString(16).padStart(2, "0") + this.blue.toString(16).padStart(2, "0") + Math.round(255 * this.alpha).toString(16).padStart(2, "0")).toUpperCase();
          case "rgb":
            return `rgb(${this.red}, ${this.green}, ${this.blue})`;
          case "css":
          case "rgba":
            return `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;
          case "hsl":
            return this.toHSL().toString("hsl");
          case "hsb":
            return this.toHSB().toString("hsb");
          default:
            return this.toFormat(_v0).toString(_v0);
        }
      }
      toFormat(_v0) {
        switch (_v0) {
          case "rgba":
            return this;
          case "hsba":
            return this.toHSB();
          case "hsla":
            return this.toHSL();
          default:
            throw Error("Unsupported color conversion: rgb -> " + _v0);
        }
      }
      toHexInt() {
        return this.red << 16 | this.green << 8 | this.blue;
      }
      toHSB() {
        let _v0 = this.red / 255,
          _v1 = this.green / 255,
          _v2 = this.blue / 255,
          _v3 = Math.min(_v0, _v1, _v2),
          _v4 = Math.max(_v0, _v1, _v2),
          _v5 = _v4 - _v3,
          _v6 = 0;
        if (0 !== _v5) {
          switch (_v4) {
            case _v0:
              _v6 = (_v1 - _v2) / _v5 + 6 * (_v1 < _v2);
              break;
            case _v1:
              _v6 = (_v2 - _v0) / _v5 + 2;
              break;
            case _v2:
              _v6 = (_v0 - _v1) / _v5 + 4;
          }
          _v6 /= 6;
        }
        return new _v13((0, _v2.toFixedNumber)(360 * _v6, 2), (0, _v2.toFixedNumber)(100 * (0 === _v4 ? 0 : _v5 / _v4), 2), (0, _v2.toFixedNumber)(100 * _v4, 2), (0, _v2.toFixedNumber)(this.alpha, 2));
      }
      toHSL() {
        let _v0 = this.red / 255,
          _v1 = this.green / 255,
          _v2 = this.blue / 255,
          _v3 = Math.min(_v0, _v1, _v2),
          _v4 = Math.max(_v0, _v1, _v2),
          _v5 = (_v4 + _v3) / 2,
          _v6 = _v4 - _v3,
          _v7 = -1,
          _v8 = -1;
        if (0 === _v6) _v7 = _v8 = 0;else {
          switch (_v8 = _v6 / (_v5 < .5 ? _v4 + _v3 : 2 - _v4 - _v3), _v4) {
            case _v0:
              _v7 = (_v1 - _v2) / _v6 + 6 * (_v1 < _v2);
              break;
            case _v1:
              _v7 = (_v2 - _v0) / _v6 + 2;
              break;
            case _v2:
              _v7 = (_v0 - _v1) / _v6 + 4;
          }
          _v7 /= 6;
        }
        return new _v10((0, _v2.toFixedNumber)(360 * _v7, 2), (0, _v2.toFixedNumber)(100 * _v8, 2), (0, _v2.toFixedNumber)(100 * _v5, 2), (0, _v2.toFixedNumber)(this.alpha, 2));
      }
      clone() {
        return new _v0(this.red, this.green, this.blue, this.alpha);
      }
      getChannelFormatOptions(_v0) {
        switch (_v0) {
          case "red":
          case "green":
          case "blue":
            return {
              style: "decimal"
            };
          case "alpha":
            return {
              style: "percent"
            };
          default:
            throw Error("Unknown color channel: " + _v0);
        }
      }
      formatChannelValue(_v0, _v1) {
        let _v2 = this.getChannelFormatOptions(_v0),
          _v3 = this.getChannelValue(_v0);
        return new Intl.NumberFormat(_v1, _v2).format(_v3);
      }
      getChannelRange(_v0) {
        switch (_v0) {
          case "red":
          case "green":
          case "blue":
            return {
              minValue: 0,
              maxValue: 255,
              step: 1,
              pageSize: 17
            };
          case "alpha":
            return {
              minValue: 0,
              maxValue: 1,
              step: .01,
              pageSize: .1
            };
          default:
            throw Error("Unknown color channel: " + _v0);
        }
      }
      toJSON() {
        return {
          r: this.red,
          g: this.green,
          b: this.blue,
          a: this.alpha
        };
      }
      getFormat() {
        return "rgba";
      }
      getChannels() {
        return _v0.colorChannels;
      }
    };
  _v4(_v7, "colorChannels", ["red", "green", "blue"]);
  var _v8 = /hsl\(([-+]?\d+(?:.\d+)?\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d+(?:.\d+)?%)\)|hsla\(([-+]?\d+(?:.\d+)?\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d(.\d+)?)\)/,
    _v9 = class _v0 extends _v6 {
      constructor(_v0, _v1, _v2, _v3) {
        super(), this.hue = _v0, this.saturation = _v1, this.lightness = _v2, this.alpha = _v3;
      }
      static parse(_v0) {
        let _v1;
        if (_v1 = _v0.match(_v8)) {
          let [_v0, _v1, _v2, _v3] = (_v1[1] ?? _v1[2]).split(",").map(_v0 => Number(_v0.trim().replace("%", "")));
          return new _v0((0, _v2.mod)(_v0, 360), (0, _v2.clampValue)(_v1, 0, 100), (0, _v2.clampValue)(_v2, 0, 100), (0, _v2.clampValue)(_v3 ?? 1, 0, 1));
        }
      }
      toString(_v0) {
        switch (_v0) {
          case "hex":
            return this.toRGB().toString("hex");
          case "hexa":
            return this.toRGB().toString("hexa");
          case "hsl":
            return `hsl(${this.hue}, ${(0, _v2.toFixedNumber)(this.saturation, 2)}%, ${(0, _v2.toFixedNumber)(this.lightness, 2)}%)`;
          case "css":
          case "hsla":
            return `hsla(${this.hue}, ${(0, _v2.toFixedNumber)(this.saturation, 2)}%, ${(0, _v2.toFixedNumber)(this.lightness, 2)}%, ${this.alpha})`;
          case "hsb":
            return this.toHSB().toString("hsb");
          case "rgb":
            return this.toRGB().toString("rgb");
          default:
            return this.toFormat(_v0).toString(_v0);
        }
      }
      toFormat(_v0) {
        switch (_v0) {
          case "hsla":
            return this;
          case "hsba":
            return this.toHSB();
          case "rgba":
            return this.toRGB();
          default:
            throw Error("Unsupported color conversion: hsl -> " + _v0);
        }
      }
      toHSB() {
        let _v0 = this.saturation / 100,
          _v1 = this.lightness / 100,
          _v2 = _v1 + _v0 * Math.min(_v1, 1 - _v1);
        return _v0 = 0 === _v2 ? 0 : 2 * (1 - _v1 / _v2), new _v13((0, _v2.toFixedNumber)(this.hue, 2), (0, _v2.toFixedNumber)(100 * _v0, 2), (0, _v2.toFixedNumber)(100 * _v2, 2), (0, _v2.toFixedNumber)(this.alpha, 2));
      }
      toRGB() {
        let _v0 = this.hue,
          _v1 = this.saturation / 100,
          _v2 = this.lightness / 100,
          _v3 = _v1 * Math.min(_v2, 1 - _v2),
          _v4 = (_v0, _v1 = (_v0 + _v0 / 30) % 12) => _v2 - _v3 * Math.max(Math.min(_v1 - 3, 9 - _v1, 1), -1);
        return new _v7(Math.round(255 * _v4(0)), Math.round(255 * _v4(8)), Math.round(255 * _v4(4)), (0, _v2.toFixedNumber)(this.alpha, 2));
      }
      clone() {
        return new _v0(this.hue, this.saturation, this.lightness, this.alpha);
      }
      getChannelFormatOptions(_v0) {
        switch (_v0) {
          case "hue":
            return {
              style: "unit",
              unit: "degree",
              unitDisplay: "narrow"
            };
          case "saturation":
          case "lightness":
          case "alpha":
            return {
              style: "percent"
            };
          default:
            throw Error("Unknown color channel: " + _v0);
        }
      }
      formatChannelValue(_v0, _v1) {
        let _v2 = this.getChannelFormatOptions(_v0),
          _v3 = this.getChannelValue(_v0);
        return ("saturation" === _v0 || "lightness" === _v0) && (_v3 /= 100), new Intl.NumberFormat(_v1, _v2).format(_v3);
      }
      getChannelRange(_v0) {
        switch (_v0) {
          case "hue":
            return {
              minValue: 0,
              maxValue: 360,
              step: 1,
              pageSize: 15
            };
          case "saturation":
          case "lightness":
            return {
              minValue: 0,
              maxValue: 100,
              step: 1,
              pageSize: 10
            };
          case "alpha":
            return {
              minValue: 0,
              maxValue: 1,
              step: .01,
              pageSize: .1
            };
          default:
            throw Error("Unknown color channel: " + _v0);
        }
      }
      toJSON() {
        return {
          h: this.hue,
          s: this.saturation,
          l: this.lightness,
          a: this.alpha
        };
      }
      getFormat() {
        return "hsla";
      }
      getChannels() {
        return _v0.colorChannels;
      }
    };
  _v4(_v9, "colorChannels", ["hue", "saturation", "lightness"]);
  var _v10 = _v9,
    _v11 = /hsb\(([-+]?\d+(?:.\d+)?\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d+(?:.\d+)?%)\)|hsba\(([-+]?\d+(?:.\d+)?\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d+(?:.\d+)?%\s*,\s*[-+]?\d(.\d+)?)\)/,
    _v12 = class _v0 extends _v6 {
      constructor(_v0, _v1, _v2, _v3) {
        super(), this.hue = _v0, this.saturation = _v1, this.brightness = _v2, this.alpha = _v3;
      }
      static parse(_v0) {
        let _v1;
        if (_v1 = _v0.match(_v11)) {
          let [_v0, _v1, _v2, _v3] = (_v1[1] ?? _v1[2]).split(",").map(_v0 => Number(_v0.trim().replace("%", "")));
          return new _v0((0, _v2.mod)(_v0, 360), (0, _v2.clampValue)(_v1, 0, 100), (0, _v2.clampValue)(_v2, 0, 100), (0, _v2.clampValue)(_v3 ?? 1, 0, 1));
        }
      }
      toString(_v0) {
        switch (_v0) {
          case "css":
            return this.toHSL().toString("css");
          case "hex":
            return this.toRGB().toString("hex");
          case "hexa":
            return this.toRGB().toString("hexa");
          case "hsb":
            return `hsb(${this.hue}, ${(0, _v2.toFixedNumber)(this.saturation, 2)}%, ${(0, _v2.toFixedNumber)(this.brightness, 2)}%)`;
          case "hsba":
            return `hsba(${this.hue}, ${(0, _v2.toFixedNumber)(this.saturation, 2)}%, ${(0, _v2.toFixedNumber)(this.brightness, 2)}%, ${this.alpha})`;
          case "hsl":
            return this.toHSL().toString("hsl");
          case "rgb":
            return this.toRGB().toString("rgb");
          default:
            return this.toFormat(_v0).toString(_v0);
        }
      }
      toFormat(_v0) {
        switch (_v0) {
          case "hsba":
            return this;
          case "hsla":
            return this.toHSL();
          case "rgba":
            return this.toRGB();
          default:
            throw Error("Unsupported color conversion: hsb -> " + _v0);
        }
      }
      toHSL() {
        let _v0 = this.saturation / 100,
          _v1 = this.brightness / 100,
          _v2 = _v1 * (1 - _v0 / 2);
        return _v0 = 0 === _v2 || 1 === _v2 ? 0 : (_v1 - _v2) / Math.min(_v2, 1 - _v2), new _v10((0, _v2.toFixedNumber)(this.hue, 2), (0, _v2.toFixedNumber)(100 * _v0, 2), (0, _v2.toFixedNumber)(100 * _v2, 2), (0, _v2.toFixedNumber)(this.alpha, 2));
      }
      toRGB() {
        let _v0 = this.hue,
          _v1 = this.saturation / 100,
          _v2 = this.brightness / 100,
          _v3 = (_v0, _v1 = (_v0 + _v0 / 60) % 6) => _v2 - _v1 * _v2 * Math.max(Math.min(_v1, 4 - _v1, 1), 0);
        return new _v7(Math.round(255 * _v3(5)), Math.round(255 * _v3(3)), Math.round(255 * _v3(1)), (0, _v2.toFixedNumber)(this.alpha, 2));
      }
      clone() {
        return new _v0(this.hue, this.saturation, this.brightness, this.alpha);
      }
      getChannelFormatOptions(_v0) {
        switch (_v0) {
          case "hue":
            return {
              style: "unit",
              unit: "degree",
              unitDisplay: "narrow"
            };
          case "saturation":
          case "brightness":
          case "alpha":
            return {
              style: "percent"
            };
          default:
            throw Error("Unknown color channel: " + _v0);
        }
      }
      formatChannelValue(_v0, _v1) {
        let _v2 = this.getChannelFormatOptions(_v0),
          _v3 = this.getChannelValue(_v0);
        return ("saturation" === _v0 || "brightness" === _v0) && (_v3 /= 100), new Intl.NumberFormat(_v1, _v2).format(_v3);
      }
      getChannelRange(_v0) {
        switch (_v0) {
          case "hue":
            return {
              minValue: 0,
              maxValue: 360,
              step: 1,
              pageSize: 15
            };
          case "saturation":
          case "brightness":
            return {
              minValue: 0,
              maxValue: 100,
              step: 1,
              pageSize: 10
            };
          case "alpha":
            return {
              minValue: 0,
              maxValue: 1,
              step: .01,
              pageSize: .1
            };
          default:
            throw Error("Unknown color channel: " + _v0);
        }
      }
      toJSON() {
        return {
          h: this.hue,
          s: this.saturation,
          b: this.brightness,
          a: this.alpha
        };
      }
      getFormat() {
        return "hsba";
      }
      getChannels() {
        return _v0.colorChannels;
      }
    };
  _v4(_v12, "colorChannels", ["hue", "saturation", "brightness"]);
  var _v13 = _v12,
    _v14 = (_v0 => {
      let _v1 = new Map(),
        _v2 = _v0.split(",");
      for (let _v0 = 0; _v0 < _v2.length; _v0++) {
        let [_v0, _v1] = _v2[_v0].split(":");
        _v1.set(_v0, `#${_v1}`), _v0.includes("gray") && _v1.set(_v0.replace("gray", "grey"), `#${_v1}`);
      }
      return _v1;
    })("aliceblue:f0f8ff,antiquewhite:faebd7,aqua:00ffff,aquamarine:7fffd4,azure:f0ffff,beige:f5f5dc,bisque:ffe4c4,black:000000,blanchedalmond:ffebcd,blue:0000ff,blueviolet:8a2be2,brown:a52a2a,burlywood:deb887,cadetblue:5f9ea0,chartreuse:7fff00,chocolate:d2691e,coral:ff7f50,cornflowerblue:6495ed,cornsilk:fff8dc,crimson:dc143c,cyan:00ffff,darkblue:00008b,darkcyan:008b8b,darkgoldenrod:b8860b,darkgray:a9a9a9,darkgreen:006400,darkkhaki:bdb76b,darkmagenta:8b008b,darkolivegreen:556b2f,darkorange:ff8c00,darkorchid:9932cc,darkred:8b0000,darksalmon:e9967a,darkseagreen:8fbc8f,darkslateblue:483d8b,darkslategray:2f4f4f,darkturquoise:00ced1,darkviolet:9400d3,deeppink:ff1493,deepskyblue:00bfff,dimgray:696969,dodgerblue:1e90ff,firebrick:b22222,floralwhite:fffaf0,forestgreen:228b22,fuchsia:ff00ff,gainsboro:dcdcdc,ghostwhite:f8f8ff,gold:ffd700,goldenrod:daa520,gray:808080,green:008000,greenyellow:adff2f,honeydew:f0fff0,hotpink:ff69b4,indianred:cd5c5c,indigo:4b0082,ivory:fffff0,khaki:f0e68c,lavender:e6e6fa,lavenderblush:fff0f5,lawngreen:7cfc00,lemonchiffon:fffacd,lightblue:add8e6,lightcoral:f08080,lightcyan:e0ffff,lightgoldenrodyellow:fafad2,lightgrey:d3d3d3,lightgreen:90ee90,lightpink:ffb6c1,lightsalmon:ffa07a,lightseagreen:20b2aa,lightskyblue:87cefa,lightslategray:778899,lightsteelblue:b0c4de,lightyellow:ffffe0,lime:00ff00,limegreen:32cd32,linen:faf0e6,magenta:ff00ff,maroon:800000,mediumaquamarine:66cdaa,mediumblue:0000cd,mediumorchid:ba55d3,mediumpurple:9370d8,mediumseagreen:3cb371,mediumslateblue:7b68ee,mediumspringgreen:00fa9a,mediumturquoise:48d1cc,mediumvioletred:c71585,midnightblue:191970,mintcream:f5fffa,mistyrose:ffe4e1,moccasin:ffe4b5,navajowhite:ffdead,navy:000080,oldlace:fdf5e6,olive:808000,olivedrab:6b8e23,orange:ffa500,orangered:ff4500,orchid:da70d6,palegoldenrod:eee8aa,palegreen:98fb98,paleturquoise:afeeee,palevioletred:d87093,papayawhip:ffefd5,peachpuff:ffdab9,peru:cd853f,pink:ffc0cb,plum:dda0dd,powderblue:b0e0e6,purple:800080,rebeccapurple:663399,red:ff0000,rosybrown:bc8f8f,royalblue:4169e1,saddlebrown:8b4513,salmon:fa8072,sandybrown:f4a460,seagreen:2e8b57,seashell:fff5ee,sienna:a0522d,silver:c0c0c0,skyblue:87ceeb,slateblue:6a5acd,slategray:708090,snow:fffafa,springgreen:00ff7f,steelblue:4682b4,tan:d2b48c,teal:008080,thistle:d8bfd8,tomato:ff6347,turquoise:40e0d0,violet:ee82ee,wheat:f5deb3,white:ffffff,whitesmoke:f5f5f5,yellow:ffff00,yellowgreen:9acd32"),
    _v15 = _v0 => {
      if (_v14.has(_v0)) return _v15(_v14.get(_v0));
      let _v1 = _v7.parse(_v0) || _v13.parse(_v0) || _v10.parse(_v0);
      if (!_v1) {
        let _v0 = Error("Invalid color value: " + _v0);
        throw Error.captureStackTrace?.(_v0, _v15), _v0;
      }
      return _v1;
    },
    _v16 = _v0 => "string" == typeof _v0 ? _v15(_v0) : _v0,
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = (0, _v1.createAnatomy)("color-picker", ["root", "label", "control", "trigger", "positioner", "content", "area", "areaThumb", "valueText", "areaBackground", "channelSlider", "channelSliderLabel", "channelSliderTrack", "channelSliderThumb", "channelSliderValueText", "channelInput", "transparencyGrid", "swatchGroup", "swatchTrigger", "swatchIndicator", "swatch", "eyeDropperTrigger", "formatTrigger", "formatSelect"]),
    _v23 = _v22.build(),
    _v24 = _v0 => _v0.ids?.label ?? `color-picker:${_v0.id}:label`,
    _v25 = _v0 => _v0.ids?.hiddenInput ?? `color-picker:${_v0.id}:hidden-input`,
    _v26 = _v0 => _v0.ids?.control ?? `color-picker:${_v0.id}:control`,
    _v27 = _v0 => _v0.ids?.trigger ?? `color-picker:${_v0.id}:trigger`,
    _v28 = _v0 => _v0.ids?.content ?? `color-picker:${_v0.id}:content`,
    _v29 = _v0 => _v0.ids?.positioner ?? `color-picker:${_v0.id}:positioner`,
    _v30 = _v0 => _v0.ids?.area ?? `color-picker:${_v0.id}:area`,
    _v31 = _v0 => _v0.ids?.areaThumb ?? `color-picker:${_v0.id}:area-thumb`,
    _v32 = (_v0, _v1) => _v0.ids?.channelSliderTrack?.(_v1) ?? `color-picker:${_v0.id}:slider-track:${_v1}`,
    _v33 = (_v0, _v1) => _v0.ids?.channelSliderThumb?.(_v1) ?? `color-picker:${_v0.id}:slider-thumb:${_v1}`,
    _v34 = _v0 => _v0.getById(_v28(_v0)),
    _v35 = _v0 => _v0.getById(_v25(_v0)),
    _v36 = _v0 => _v0.getById(_v26(_v0)),
    _v37 = _v0 => _v0.getById(_v27(_v0));
  function _v38(_v0, _v1) {
    if (null == _v1) return "";
    if ("hex" === _v1) return _v0.toString("hex");
    if ("css" === _v1) return _v0.toString("css");
    if (_v1 in _v0) return _v0.getChannelValue(_v1).toString();
    let _v2 = "hsla" === _v0.getFormat();
    switch (_v1) {
      case "hue":
        return _v2 ? _v0.toFormat("hsla").getChannelValue("hue").toString() : _v0.toFormat("hsba").getChannelValue("hue").toString();
      case "saturation":
        return _v2 ? _v0.toFormat("hsla").getChannelValue("saturation").toString() : _v0.toFormat("hsba").getChannelValue("saturation").toString();
      case "lightness":
        return _v0.toFormat("hsla").getChannelValue("lightness").toString();
      case "brightness":
        return _v0.toFormat("hsba").getChannelValue("brightness").toString();
      case "red":
      case "green":
      case "blue":
        return _v0.toFormat("rgba").getChannelValue(_v1).toString();
      default:
        return _v0.getChannelValue(_v1).toString();
    }
  }
  var _v39 = ["hsba", "hsla", "rgba"],
    _v40 = RegExp(`^(${_v39.join("|")})$`);
  function _v41(_v0) {
    let _v1 = _v39.indexOf(_v0);
    return _v39[_v1 + 1] ?? _v39[0];
  }
  var _v42 = _v0 => _v15(_v0),
    {
      and: _v43
    } = (0, _v19.createGuards)(),
    _v44 = (0, _v19.createMachine)({
      props: ({
        props: _v0
      }) => ({
        dir: "ltr",
        defaultValue: _v42("#000000"),
        defaultFormat: "rgba",
        openAutoFocus: !0,
        ..._v0,
        positioning: {
          placement: "bottom",
          ..._v0.positioning
        }
      }),
      initialState: ({
        prop: _v0
      }) => _v0("open") || _v0("defaultOpen") ? "open" : "idle",
      context: ({
        prop: _v0,
        bindable: _v1,
        getContext: _v2
      }) => ({
        value: _v1(() => ({
          defaultValue: _v0("defaultValue"),
          value: _v0("value"),
          isEqual: (_v0, _v1) => _v0.toString("css") === _v1?.toString("css"),
          hash: _v0 => _v0.toString("css"),
          onChange(_v0) {
            let _v1 = _v2(),
              _v2 = _v0.toString(_v1.get("format"));
            _v0("onValueChange")?.({
              value: _v0,
              valueAsString: _v2
            });
          }
        })),
        format: _v1(() => ({
          defaultValue: _v0("defaultFormat"),
          value: _v0("format"),
          onChange(_v0) {
            _v0("onFormatChange")?.({
              format: _v0
            });
          }
        })),
        activeId: _v1(() => ({
          defaultValue: null
        })),
        activeChannel: _v1(() => ({
          defaultValue: null
        })),
        activeOrientation: _v1(() => ({
          defaultValue: null
        })),
        fieldsetDisabled: _v1(() => ({
          defaultValue: !1
        })),
        restoreFocus: _v1(() => ({
          defaultValue: !0
        })),
        currentPlacement: _v1(() => ({
          defaultValue: void 0
        }))
      }),
      computed: {
        rtl: ({
          prop: _v0
        }) => "rtl" === _v0("dir"),
        disabled: ({
          prop: _v0,
          context: _v1
        }) => !!_v0("disabled") || _v1.get("fieldsetDisabled"),
        interactive: ({
          prop: _v0
        }) => !(_v0("disabled") || _v0("readOnly")),
        valueAsString: ({
          context: _v0
        }) => _v0.get("value").toString(_v0.get("format")),
        areaValue: ({
          context: _v0
        }) => {
          let _v1 = _v0.get("format").startsWith("hsl") ? "hsla" : "hsba";
          return _v0.get("value").toFormat(_v1);
        }
      },
      effects: ["trackFormControl"],
      watch({
        prop: _v0,
        context: _v1,
        action: _v2,
        track: _v3
      }) {
        _v3([() => _v1.hash("value")], () => {
          _v2(["syncInputElements", "dispatchChangeEvent"]);
        }), _v3([() => _v1.get("format")], () => {
          _v2(["syncFormatSelectElement"]);
        }), _v3([() => _v0("open")], () => {
          _v2(["toggleVisibility"]);
        });
      },
      on: {
        "VALUE.SET": {
          actions: ["setValue"]
        },
        "FORMAT.SET": {
          actions: ["setFormat"]
        },
        "CHANNEL_INPUT.CHANGE": {
          actions: ["setChannelColorFromInput"]
        },
        "EYEDROPPER.CLICK": {
          actions: ["openEyeDropper"]
        },
        "SWATCH_TRIGGER.CLICK": {
          actions: ["setValue"]
        }
      },
      states: {
        idle: {
          tags: ["closed"],
          on: {
            "CONTROLLED.OPEN": {
              target: "open",
              actions: ["setInitialFocus"]
            },
            OPEN: [{
              guard: "isOpenControlled",
              actions: ["invokeOnOpen"]
            }, {
              target: "open",
              actions: ["invokeOnOpen", "setInitialFocus"]
            }],
            "TRIGGER.CLICK": [{
              guard: "isOpenControlled",
              actions: ["invokeOnOpen"]
            }, {
              target: "open",
              actions: ["invokeOnOpen", "setInitialFocus"]
            }],
            "CHANNEL_INPUT.FOCUS": {
              target: "focused",
              actions: ["setActiveChannel"]
            }
          }
        },
        focused: {
          tags: ["closed", "focused"],
          on: {
            "CONTROLLED.OPEN": {
              target: "open",
              actions: ["setInitialFocus"]
            },
            OPEN: [{
              guard: "isOpenControlled",
              actions: ["invokeOnOpen"]
            }, {
              target: "open",
              actions: ["invokeOnOpen", "setInitialFocus"]
            }],
            "TRIGGER.CLICK": [{
              guard: "isOpenControlled",
              actions: ["invokeOnOpen"]
            }, {
              target: "open",
              actions: ["invokeOnOpen", "setInitialFocus"]
            }],
            "CHANNEL_INPUT.FOCUS": {
              actions: ["setActiveChannel"]
            },
            "CHANNEL_INPUT.BLUR": {
              target: "idle",
              actions: ["setChannelColorFromInput"]
            },
            "TRIGGER.BLUR": {
              target: "idle"
            }
          }
        },
        open: {
          tags: ["open"],
          effects: ["trackPositioning", "trackDismissableElement"],
          on: {
            "CONTROLLED.CLOSE": [{
              guard: "shouldRestoreFocus",
              target: "focused",
              actions: ["setReturnFocus"]
            }, {
              target: "idle"
            }],
            "TRIGGER.CLICK": [{
              guard: "isOpenControlled",
              actions: ["invokeOnClose"]
            }, {
              target: "idle",
              actions: ["invokeOnClose"]
            }],
            "AREA.POINTER_DOWN": {
              target: "open:dragging",
              actions: ["setActiveChannel", "setAreaColorFromPoint", "focusAreaThumb"]
            },
            "AREA.FOCUS": {
              actions: ["setActiveChannel"]
            },
            "CHANNEL_SLIDER.POINTER_DOWN": {
              target: "open:dragging",
              actions: ["setActiveChannel", "setChannelColorFromPoint", "focusChannelThumb"]
            },
            "CHANNEL_SLIDER.FOCUS": {
              actions: ["setActiveChannel"]
            },
            "AREA.ARROW_LEFT": {
              actions: ["decrementAreaXChannel"]
            },
            "AREA.ARROW_RIGHT": {
              actions: ["incrementAreaXChannel"]
            },
            "AREA.ARROW_UP": {
              actions: ["incrementAreaYChannel"]
            },
            "AREA.ARROW_DOWN": {
              actions: ["decrementAreaYChannel"]
            },
            "AREA.PAGE_UP": {
              actions: ["incrementAreaXChannel"]
            },
            "AREA.PAGE_DOWN": {
              actions: ["decrementAreaXChannel"]
            },
            "CHANNEL_SLIDER.ARROW_LEFT": {
              actions: ["decrementChannel"]
            },
            "CHANNEL_SLIDER.ARROW_RIGHT": {
              actions: ["incrementChannel"]
            },
            "CHANNEL_SLIDER.ARROW_UP": {
              actions: ["incrementChannel"]
            },
            "CHANNEL_SLIDER.ARROW_DOWN": {
              actions: ["decrementChannel"]
            },
            "CHANNEL_SLIDER.PAGE_UP": {
              actions: ["incrementChannel"]
            },
            "CHANNEL_SLIDER.PAGE_DOWN": {
              actions: ["decrementChannel"]
            },
            "CHANNEL_SLIDER.HOME": {
              actions: ["setChannelToMin"]
            },
            "CHANNEL_SLIDER.END": {
              actions: ["setChannelToMax"]
            },
            "CHANNEL_INPUT.BLUR": {
              actions: ["setChannelColorFromInput"]
            },
            INTERACT_OUTSIDE: [{
              guard: "isOpenControlled",
              actions: ["invokeOnClose"]
            }, {
              guard: "shouldRestoreFocus",
              target: "focused",
              actions: ["invokeOnClose", "setReturnFocus"]
            }, {
              target: "idle",
              actions: ["invokeOnClose"]
            }],
            CLOSE: [{
              guard: "isOpenControlled",
              actions: ["invokeOnClose"]
            }, {
              target: "idle",
              actions: ["invokeOnClose"]
            }],
            "SWATCH_TRIGGER.CLICK": [{
              guard: _v43("isOpenControlled", "closeOnSelect"),
              actions: ["setValue", "invokeOnClose"]
            }, {
              guard: "closeOnSelect",
              target: "focused",
              actions: ["setValue", "invokeOnClose", "setReturnFocus"]
            }, {
              actions: ["setValue"]
            }]
          }
        },
        "open:dragging": {
          tags: ["open"],
          exit: ["clearActiveChannel"],
          effects: ["trackPointerMove", "disableTextSelection", "trackPositioning", "trackDismissableElement"],
          on: {
            "CONTROLLED.CLOSE": [{
              guard: "shouldRestoreFocus",
              target: "focused",
              actions: ["setReturnFocus"]
            }, {
              target: "idle"
            }],
            "AREA.POINTER_MOVE": {
              actions: ["setAreaColorFromPoint", "focusAreaThumb"]
            },
            "AREA.POINTER_UP": {
              target: "open",
              actions: ["invokeOnChangeEnd"]
            },
            "CHANNEL_SLIDER.POINTER_MOVE": {
              actions: ["setChannelColorFromPoint", "focusChannelThumb"]
            },
            "CHANNEL_SLIDER.POINTER_UP": {
              target: "open",
              actions: ["invokeOnChangeEnd"]
            },
            INTERACT_OUTSIDE: [{
              guard: "isOpenControlled",
              actions: ["invokeOnClose"]
            }, {
              guard: "shouldRestoreFocus",
              target: "focused",
              actions: ["invokeOnClose", "setReturnFocus"]
            }, {
              target: "idle",
              actions: ["invokeOnClose"]
            }],
            CLOSE: [{
              guard: "isOpenControlled",
              actions: ["invokeOnClose"]
            }, {
              target: "idle",
              actions: ["invokeOnClose"]
            }]
          }
        }
      },
      implementations: {
        guards: {
          closeOnSelect: ({
            prop: _v0
          }) => !!_v0("closeOnSelect"),
          isOpenControlled: ({
            prop: _v0
          }) => null != _v0("open"),
          shouldRestoreFocus: ({
            context: _v0
          }) => !!_v0.get("restoreFocus")
        },
        effects: {
          trackPositioning({
            context: _v0,
            prop: _v1,
            scope: _v2
          }) {
            _v0.get("currentPlacement") || _v0.set("currentPlacement", _v1("positioning")?.placement);
            let _v3 = _v37(_v2);
            return (0, _v18.getPlacement)(_v3, () => _v2.getById(_v29(_v2)), {
              ..._v1("positioning"),
              defer: !0,
              onComplete(_v0) {
                _v0.set("currentPlacement", _v0.placement);
              }
            });
          },
          trackDismissableElement: ({
            context: _v0,
            scope: _v1,
            prop: _v2,
            send: _v3
          }) => (0, _v20.trackDismissableElement)(() => _v34(_v1), {
            exclude: _v37(_v1),
            defer: !0,
            onInteractOutside(_v0) {
              _v2("onInteractOutside")?.(_v0), _v0.defaultPrevented || _v0.set("restoreFocus", !(_v0.detail.focusable || _v0.detail.contextmenu));
            },
            onPointerDownOutside: _v2("onPointerDownOutside"),
            onFocusOutside: _v2("onFocusOutside"),
            onDismiss() {
              _v3({
                type: "INTERACT_OUTSIDE"
              });
            }
          }),
          trackFormControl({
            context: _v0,
            scope: _v1,
            send: _v2
          }) {
            let _v3 = _v35(_v1);
            return (0, _v17.trackFormControl)(_v3, {
              onFieldsetDisabledChange(_v0) {
                _v0.set("fieldsetDisabled", _v0);
              },
              onFormReset() {
                _v2({
                  type: "VALUE.SET",
                  value: _v0.initial("value"),
                  src: "form.reset"
                });
              }
            });
          },
          trackPointerMove: ({
            context: _v0,
            scope: _v1,
            event: _v2,
            send: _v3
          }) => (0, _v17.trackPointerMove)(_v1.getDoc(), {
            onPointerMove({
              point: _v0
            }) {
              _v3({
                type: "area" === _v0.get("activeId") ? "AREA.POINTER_MOVE" : "CHANNEL_SLIDER.POINTER_MOVE",
                point: _v0,
                format: _v2.format
              });
            },
            onPointerUp() {
              _v3({
                type: "area" === _v0.get("activeId") ? "AREA.POINTER_UP" : "CHANNEL_SLIDER.POINTER_UP"
              });
            }
          }),
          disableTextSelection: ({
            scope: _v0
          }) => (0, _v17.disableTextSelection)({
            doc: _v0.getDoc(),
            target: _v34(_v0)
          })
        },
        actions: {
          openEyeDropper({
            scope: _v0,
            context: _v1
          }) {
            let _v2 = _v0.getWin();
            "EyeDropper" in _v2 && new _v2.EyeDropper().open().then(({
              sRGBHex: _v0
            }) => {
              let _v1 = _v1.get("value").getFormat(),
                _v2 = _v15(_v0).toFormat(_v1);
              _v1.set("value", _v2);
            }).catch(() => void 0);
          },
          setActiveChannel({
            context: _v0,
            event: _v1
          }) {
            _v0.set("activeId", _v1.id), _v1.channel && _v0.set("activeChannel", _v1.channel), _v1.orientation && _v0.set("activeOrientation", _v1.orientation);
          },
          clearActiveChannel({
            context: _v0
          }) {
            _v0.set("activeChannel", null), _v0.set("activeId", null), _v0.set("activeOrientation", null);
          },
          setAreaColorFromPoint({
            context: _v0,
            event: _v1,
            computed: _v2,
            scope: _v3
          }) {
            let _v4 = _v1.format ? _v0.get("value").toFormat(_v1.format) : _v2("areaValue"),
              {
                xChannel: _v5,
                yChannel: _v6
              } = _v1.channel || _v0.get("activeChannel"),
              _v7 = ((_v0, _v1) => {
                let _v2 = _v0.getById(_v30(_v0));
                if (!_v2) return;
                let {
                  percent: _v3
                } = (0, _v17.getRelativePoint)(_v1, _v2);
                return _v3;
              })(_v3, _v1.point);
            if (!_v7) return;
            let _v8 = _v4.getChannelPercentValue(_v5, _v7.x),
              _v9 = _v4.getChannelPercentValue(_v6, 1 - _v7.y),
              _v10 = _v4.withChannelValue(_v5, _v8).withChannelValue(_v6, _v9);
            _v0.set("value", _v10);
          },
          setChannelColorFromPoint({
            context: _v0,
            event: _v1,
            computed: _v2,
            scope: _v3
          }) {
            let _v4 = _v1.channel || _v0.get("activeId"),
              _v5 = _v1.format ? _v0.get("value").toFormat(_v1.format) : _v2("areaValue"),
              _v6 = ((_v0, _v1, _v2) => {
                let _v3 = _v0.getById(_v32(_v0, _v2));
                if (!_v3) return;
                let {
                  percent: _v4
                } = (0, _v17.getRelativePoint)(_v1, _v3);
                return _v4;
              })(_v3, _v1.point, _v4);
            if (!_v6) return;
            let _v7 = "horizontal" === (_v0.get("activeOrientation") || "horizontal") ? _v6.x : _v6.y,
              _v8 = _v5.getChannelPercentValue(_v4, _v7),
              _v9 = _v5.withChannelValue(_v4, _v8);
            _v0.set("value", _v9);
          },
          setValue({
            context: _v0,
            event: _v1
          }) {
            _v0.set("value", _v1.value);
          },
          setFormat({
            context: _v0,
            event: _v1
          }) {
            _v0.set("format", _v1.format);
          },
          dispatchChangeEvent({
            scope: _v0,
            computed: _v1
          }) {
            (0, _v17.dispatchInputValueEvent)(_v35(_v0), {
              value: _v1("valueAsString")
            });
          },
          syncInputElements({
            context: _v0,
            scope: _v1
          }) {
            _v45(_v1, _v0.get("value"));
          },
          invokeOnChangeEnd({
            context: _v0,
            prop: _v1,
            computed: _v2
          }) {
            _v1("onValueChangeEnd")?.({
              value: _v0.get("value"),
              valueAsString: _v2("valueAsString")
            });
          },
          setChannelColorFromInput({
            context: _v0,
            event: _v1,
            scope: _v2,
            prop: _v3
          }) {
            let _v4,
              {
                channel: _v5,
                isTextField: _v6,
                value: _v7
              } = _v1,
              _v8 = _v0.get("value").getChannelValue("alpha");
            if ("alpha" === _v5) {
              let _v0 = parseFloat(_v7);
              _v0 = Number.isNaN(_v0) ? _v8 : _v0, _v4 = _v0.get("value").withChannelValue("alpha", _v0);
            } else if (_v6) _v4 = (0, _v2.tryCatch)(() => _v42(_v7).withChannelValue("alpha", _v8), () => _v0.get("value"));else {
              let _v0 = _v0.get("value").toFormat(_v0.get("format")),
                _v1 = Number.isNaN(_v7) ? _v0.getChannelValue(_v5) : _v7;
              _v4 = _v0.withChannelValue(_v5, _v1);
            }
            _v45(_v2, _v0.get("value"), _v4), _v0.set("value", _v4), _v3("onValueChangeEnd")?.({
              value: _v4,
              valueAsString: _v4.toString(_v0.get("format"))
            });
          },
          incrementChannel({
            context: _v0,
            event: _v1
          }) {
            let _v2 = _v0.get("value").incrementChannel(_v1.channel, _v1.step);
            _v0.set("value", _v2);
          },
          decrementChannel({
            context: _v0,
            event: _v1
          }) {
            let _v2 = _v0.get("value").decrementChannel(_v1.channel, _v1.step);
            _v0.set("value", _v2);
          },
          incrementAreaXChannel({
            context: _v0,
            event: _v1,
            computed: _v2
          }) {
            let {
                xChannel: _v3
              } = _v1.channel,
              _v4 = _v2("areaValue").incrementChannel(_v3, _v1.step);
            _v0.set("value", _v4);
          },
          decrementAreaXChannel({
            context: _v0,
            event: _v1,
            computed: _v2
          }) {
            let {
                xChannel: _v3
              } = _v1.channel,
              _v4 = _v2("areaValue").decrementChannel(_v3, _v1.step);
            _v0.set("value", _v4);
          },
          incrementAreaYChannel({
            context: _v0,
            event: _v1,
            computed: _v2
          }) {
            let {
                yChannel: _v3
              } = _v1.channel,
              _v4 = _v2("areaValue").incrementChannel(_v3, _v1.step);
            _v0.set("value", _v4);
          },
          decrementAreaYChannel({
            context: _v0,
            event: _v1,
            computed: _v2
          }) {
            let {
                yChannel: _v3
              } = _v1.channel,
              _v4 = _v2("areaValue").decrementChannel(_v3, _v1.step);
            _v0.set("value", _v4);
          },
          setChannelToMax({
            context: _v0,
            event: _v1
          }) {
            let _v2 = _v0.get("value"),
              _v3 = _v2.getChannelRange(_v1.channel),
              _v4 = _v2.withChannelValue(_v1.channel, _v3.maxValue);
            _v0.set("value", _v4);
          },
          setChannelToMin({
            context: _v0,
            event: _v1
          }) {
            let _v2 = _v0.get("value"),
              _v3 = _v2.getChannelRange(_v1.channel),
              _v4 = _v2.withChannelValue(_v1.channel, _v3.minValue);
            _v0.set("value", _v4);
          },
          focusAreaThumb({
            scope: _v0
          }) {
            (0, _v17.raf)(() => {
              _v0.getById(_v31(_v0))?.focus({
                preventScroll: !0
              });
            });
          },
          focusChannelThumb({
            event: _v0,
            scope: _v1
          }) {
            (0, _v17.raf)(() => {
              let _v0;
              (_v0 = _v0.channel, _v1.getById(_v33(_v1, _v0)))?.focus({
                preventScroll: !0
              });
            });
          },
          setInitialFocus({
            prop: _v0,
            scope: _v1
          }) {
            _v0("openAutoFocus") && (0, _v17.raf)(() => {
              let _v0 = (0, _v17.getInitialFocus)({
                root: _v34(_v1),
                getInitialEl: _v0("initialFocusEl")
              });
              _v0?.focus({
                preventScroll: !0
              });
            });
          },
          setReturnFocus({
            scope: _v0
          }) {
            (0, _v17.raf)(() => {
              _v37(_v0)?.focus({
                preventScroll: !0
              });
            });
          },
          syncFormatSelectElement({
            context: _v0,
            scope: _v1
          }) {
            !function (_v0, _v1) {
              let _v2 = _v0.getById(_v0.ids?.formatSelect ?? `color-picker:${_v0.id}:format-select`);
              _v2 && (0, _v17.raf)(() => (0, _v17.setElementValue)(_v2, _v1));
            }(_v1, _v0.get("format"));
          },
          invokeOnOpen({
            prop: _v0
          }) {
            _v0("onOpenChange")?.({
              open: !0
            });
          },
          invokeOnClose({
            prop: _v0
          }) {
            _v0("onOpenChange")?.({
              open: !1
            });
          },
          toggleVisibility({
            prop: _v0,
            event: _v1,
            send: _v2
          }) {
            _v2({
              type: _v0("open") ? "CONTROLLED.OPEN" : "CONTROLLED.CLOSE",
              previousEvent: _v1
            });
          }
        }
      }
    });
  function _v45(_v0, _v1, _v2) {
    let _v3 = [...(0, _v17.queryAll)(_v34(_v0), "input[data-channel]"), ...(0, _v17.queryAll)(_v36(_v0), "input[data-channel]")];
    (0, _v17.raf)(() => {
      _v3.forEach(_v0 => {
        let _v1 = _v0.dataset.channel;
        (0, _v17.setElementValue)(_v0, _v38(_v2 || _v1, _v1));
      });
    });
  }
  var _v46 = (0, _v21.createProps)()(["closeOnSelect", "dir", "disabled", "format", "defaultFormat", "getRootNode", "id", "ids", "initialFocusEl", "name", "positioning", "onFocusOutside", "onFormatChange", "onInteractOutside", "onOpenChange", "onPointerDownOutside", "onValueChange", "onValueChangeEnd", "defaultOpen", "open", "positioning", "required", "readOnly", "value", "defaultValue", "invalid", "openAutoFocus"]);
  (0, _v2.createSplitProps)(_v46);
  var _v47 = (0, _v21.createProps)()(["xChannel", "yChannel"]);
  (0, _v2.createSplitProps)(_v47);
  var _v48 = (0, _v21.createProps)()(["channel", "orientation"]);
  (0, _v2.createSplitProps)(_v48);
  var _v49 = (0, _v21.createProps)()(["value", "disabled"]);
  (0, _v2.createSplitProps)(_v49);
  var _v50 = (0, _v21.createProps)()(["value", "respectAlpha"]);
  (0, _v2.createSplitProps)(_v50);
  var _v51 = (0, _v21.createProps)()(["size"]);
  (0, _v2.createSplitProps)(_v51), _v0.s(["anatomy", 0, _v22, "connect", 0, function (_v0, _v1) {
    let {
        context: _v2,
        send: _v3,
        prop: _v4,
        computed: _v5,
        state: _v6,
        scope: _v7
      } = _v0,
      _v8 = _v2.get("value"),
      _v9 = _v2.get("format"),
      _v10 = _v5("areaValue"),
      _v11 = _v5("valueAsString"),
      _v12 = _v5("disabled"),
      _v13 = _v5("interactive"),
      _v14 = _v6.hasTag("dragging"),
      _v15 = _v6.hasTag("open"),
      _v16 = _v6.hasTag("focused"),
      _v17 = _v0 => {
        let _v1 = _v10.getChannels();
        return {
          xChannel: _v0.xChannel ?? _v1[1],
          yChannel: _v0.yChannel ?? _v1[2]
        };
      },
      _v18 = _v2.get("currentPlacement"),
      _v19 = (0, _v18.getPlacementStyles)({
        ..._v4("positioning"),
        placement: _v18
      });
    function _v20(_v0) {
      let _v1 = _v16(_v0.value).toFormat(_v2.get("format"));
      return {
        value: _v1,
        valueAsString: _v1.toString("hex"),
        checked: _v1.isEqual(_v8),
        disabled: _v0.disabled || !_v13
      };
    }
    return {
      dragging: _v14,
      open: _v15,
      valueAsString: _v11,
      value: _v8,
      setOpen(_v0) {
        _v6.hasTag("open") !== _v0 && _v3({
          type: _v0 ? "OPEN" : "CLOSE"
        });
      },
      setValue(_v0) {
        _v3({
          type: "VALUE.SET",
          value: _v16(_v0),
          src: "set-color"
        });
      },
      getChannelValue: _v0 => _v38(_v8, _v0),
      getChannelValueText: (_v0, _v1) => _v8.formatChannelValue(_v0, _v1),
      setChannelValue(_v0, _v1) {
        _v3({
          type: "VALUE.SET",
          value: _v8.withChannelValue(_v0, _v1),
          src: "set-channel"
        });
      },
      format: _v2.get("format"),
      setFormat(_v0) {
        _v3({
          type: "VALUE.SET",
          value: _v8.toFormat(_v0),
          src: "set-format"
        });
      },
      alpha: _v8.getChannelValue("alpha"),
      setAlpha(_v0) {
        _v3({
          type: "VALUE.SET",
          value: _v8.withChannelValue("alpha", _v0),
          src: "set-alpha"
        });
      },
      getRootProps: () => _v1.element({
        ..._v23.root.attrs,
        dir: _v4("dir"),
        id: _v7.ids?.root ?? `color-picker:${_v7.id}`,
        "data-disabled": (0, _v17.dataAttr)(_v12),
        "data-readonly": (0, _v17.dataAttr)(_v4("readOnly")),
        "data-invalid": (0, _v17.dataAttr)(_v4("invalid")),
        style: {
          "--value": _v8.toString("css")
        }
      }),
      getLabelProps: () => _v1.element({
        ..._v23.label.attrs,
        dir: _v4("dir"),
        id: _v24(_v7),
        htmlFor: _v25(_v7),
        "data-disabled": (0, _v17.dataAttr)(_v12),
        "data-readonly": (0, _v17.dataAttr)(_v4("readOnly")),
        "data-invalid": (0, _v17.dataAttr)(_v4("invalid")),
        "data-focus": (0, _v17.dataAttr)(_v16),
        onClick(_v0) {
          _v0.preventDefault();
          let _v1 = (0, _v17.query)(_v36(_v7), "[data-channel=hex]");
          _v1?.focus({
            preventScroll: !0
          });
        }
      }),
      getControlProps: () => _v1.element({
        ..._v23.control.attrs,
        id: _v26(_v7),
        dir: _v4("dir"),
        "data-disabled": (0, _v17.dataAttr)(_v12),
        "data-readonly": (0, _v17.dataAttr)(_v4("readOnly")),
        "data-invalid": (0, _v17.dataAttr)(_v4("invalid")),
        "data-state": _v15 ? "open" : "closed",
        "data-focus": (0, _v17.dataAttr)(_v16)
      }),
      getTriggerProps: () => _v1.button({
        ..._v23.trigger.attrs,
        id: _v27(_v7),
        dir: _v4("dir"),
        disabled: _v12,
        "aria-label": `select color. current color is ${_v11}`,
        "aria-controls": _v28(_v7),
        "aria-labelledby": _v24(_v7),
        "data-disabled": (0, _v17.dataAttr)(_v12),
        "data-readonly": (0, _v17.dataAttr)(_v4("readOnly")),
        "data-invalid": (0, _v17.dataAttr)(_v4("invalid")),
        "data-placement": _v18,
        "aria-expanded": (0, _v17.dataAttr)(_v15),
        "data-state": _v15 ? "open" : "closed",
        "data-focus": (0, _v17.dataAttr)(_v16),
        type: "button",
        onClick() {
          _v13 && _v3({
            type: "TRIGGER.CLICK"
          });
        },
        onBlur() {
          _v13 && _v3({
            type: "TRIGGER.BLUR"
          });
        },
        style: {
          position: "relative"
        }
      }),
      getPositionerProps: () => _v1.element({
        ..._v23.positioner.attrs,
        id: _v29(_v7),
        dir: _v4("dir"),
        style: _v19.floating
      }),
      getContentProps: () => _v1.element({
        ..._v23.content.attrs,
        id: _v28(_v7),
        dir: _v4("dir"),
        tabIndex: -1,
        "data-placement": _v18,
        "data-state": _v15 ? "open" : "closed",
        hidden: !_v15
      }),
      getValueTextProps: () => _v1.element({
        ..._v23.valueText.attrs,
        dir: _v4("dir"),
        "data-disabled": (0, _v17.dataAttr)(_v12),
        "data-focus": (0, _v17.dataAttr)(_v16)
      }),
      getAreaProps(_v0 = {}) {
        let {
            xChannel: _v1,
            yChannel: _v2
          } = _v17(_v0),
          {
            areaStyles: _v3
          } = _v5(_v10, {
            xChannel: _v1,
            yChannel: _v2,
            dir: _v4("dir")
          });
        return _v1.element({
          ..._v23.area.attrs,
          id: _v30(_v7),
          role: "group",
          "data-invalid": (0, _v17.dataAttr)(_v4("invalid")),
          "data-disabled": (0, _v17.dataAttr)(_v12),
          "data-readonly": (0, _v17.dataAttr)(_v4("readOnly")),
          onPointerDown(_v0) {
            !_v13 || !(0, _v17.isLeftClick)(_v0) || (0, _v17.isModifierKey)(_v0) || (_v3({
              type: "AREA.POINTER_DOWN",
              point: (0, _v17.getEventPoint)(_v0),
              channel: {
                xChannel: _v1,
                yChannel: _v2
              },
              id: "area"
            }), _v0.preventDefault());
          },
          style: {
            position: "relative",
            touchAction: "none",
            forcedColorAdjust: "none",
            ..._v3
          }
        });
      },
      getAreaBackgroundProps(_v0 = {}) {
        let {
            xChannel: _v1,
            yChannel: _v2
          } = _v17(_v0),
          {
            areaGradientStyles: _v3
          } = _v5(_v10, {
            xChannel: _v1,
            yChannel: _v2,
            dir: _v4("dir")
          });
        return _v1.element({
          ..._v23.areaBackground.attrs,
          id: _v7.ids?.areaGradient ?? `color-picker:${_v7.id}:area-gradient`,
          "data-invalid": (0, _v17.dataAttr)(_v4("invalid")),
          "data-disabled": (0, _v17.dataAttr)(_v12),
          "data-readonly": (0, _v17.dataAttr)(_v4("readOnly")),
          style: {
            position: "relative",
            touchAction: "none",
            forcedColorAdjust: "none",
            ..._v3
          }
        });
      },
      getAreaThumbProps(_v0 = {}) {
        let {
            xChannel: _v1,
            yChannel: _v2
          } = _v17(_v0),
          _v3 = {
            xChannel: _v1,
            yChannel: _v2
          },
          _v4 = _v10.getChannelValuePercent(_v1),
          _v5 = 1 - _v10.getChannelValuePercent(_v2),
          _v6 = _v10.getChannelValue(_v1),
          _v7 = _v10.getChannelValue(_v2),
          _v8 = _v10.withChannelValue("alpha", 1).toString("css");
        return _v1.element({
          ..._v23.areaThumb.attrs,
          id: _v31(_v7),
          dir: _v4("dir"),
          tabIndex: _v12 ? void 0 : 0,
          "data-disabled": (0, _v17.dataAttr)(_v12),
          "data-invalid": (0, _v17.dataAttr)(_v4("invalid")),
          "data-readonly": (0, _v17.dataAttr)(_v4("readOnly")),
          role: "slider",
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": _v6,
          "aria-label": `${_v1} and ${_v2}`,
          "aria-roledescription": "2d slider",
          "aria-valuetext": `${_v1} ${_v6}, ${_v2} ${_v7}`,
          style: {
            position: "absolute",
            left: `${100 * _v4}%`,
            top: `${100 * _v5}%`,
            transform: "translate(-50%, -50%)",
            touchAction: "none",
            forcedColorAdjust: "none",
            "--color": _v8,
            background: _v8
          },
          onFocus() {
            _v13 && _v3({
              type: "AREA.FOCUS",
              id: "area",
              channel: _v3
            });
          },
          onKeyDown(_v0) {
            if (_v0.defaultPrevented || !_v13) return;
            let _v1 = (0, _v17.getEventStep)(_v0),
              _v2 = {
                ArrowUp() {
                  _v3({
                    type: "AREA.ARROW_UP",
                    channel: _v3,
                    step: _v1
                  });
                },
                ArrowDown() {
                  _v3({
                    type: "AREA.ARROW_DOWN",
                    channel: _v3,
                    step: _v1
                  });
                },
                ArrowLeft() {
                  _v3({
                    type: "AREA.ARROW_LEFT",
                    channel: _v3,
                    step: _v1
                  });
                },
                ArrowRight() {
                  _v3({
                    type: "AREA.ARROW_RIGHT",
                    channel: _v3,
                    step: _v1
                  });
                },
                PageUp() {
                  _v3({
                    type: "AREA.PAGE_UP",
                    channel: _v3,
                    step: _v1
                  });
                },
                PageDown() {
                  _v3({
                    type: "AREA.PAGE_DOWN",
                    channel: _v3,
                    step: _v1
                  });
                },
                Escape(_v0) {
                  _v0.stopPropagation();
                }
              }[(0, _v17.getEventKey)(_v0, {
                dir: _v4("dir")
              })];
            _v2 && (_v2(_v0), _v0.preventDefault());
          }
        });
      },
      getTransparencyGridProps(_v0 = {}) {
        let {
          size: _v1 = "12px"
        } = _v0;
        return _v1.element({
          ..._v23.transparencyGrid.attrs,
          style: {
            "--size": _v1,
            width: "100%",
            height: "100%",
            position: "absolute",
            backgroundColor: "#fff",
            backgroundImage: "conic-gradient(#eeeeee 0 25%, transparent 0 50%, #eeeeee 0 75%, transparent 0)",
            backgroundSize: "var(--size) var(--size)",
            inset: "0px",
            zIndex: "auto",
            pointerEvents: "none"
          }
        });
      },
      getChannelSliderProps(_v0) {
        let {
          orientation: _v1 = "horizontal",
          channel: _v2,
          format: _v3
        } = _v0;
        return _v1.element({
          ..._v23.channelSlider.attrs,
          "data-channel": _v2,
          "data-orientation": _v1,
          role: "presentation",
          onPointerDown(_v0) {
            !_v13 || !(0, _v17.isLeftClick)(_v0) || (0, _v17.isModifierKey)(_v0) || (_v3({
              type: "CHANNEL_SLIDER.POINTER_DOWN",
              channel: _v2,
              format: _v3,
              point: (0, _v17.getEventPoint)(_v0),
              id: _v2,
              orientation: _v1
            }), _v0.preventDefault());
          },
          style: {
            position: "relative",
            touchAction: "none"
          }
        });
      },
      getChannelSliderTrackProps(_v0) {
        let {
            orientation: _v1 = "horizontal",
            channel: _v2,
            format: _v3
          } = _v0,
          _v4 = _v3 ? _v8.toFormat(_v3) : _v10;
        return _v1.element({
          ..._v23.channelSliderTrack.attrs,
          id: _v32(_v7, _v2),
          role: "group",
          "data-channel": _v2,
          "data-orientation": _v1,
          style: {
            position: "relative",
            forcedColorAdjust: "none",
            backgroundImage: (_v0 => {
              let {
                  channel: _v1,
                  value: _v2,
                  dir: _v3,
                  orientation: _v4
                } = _v0,
                _v5 = "vertical" === _v4 ? "top" : "ltr" === _v3 ? "right" : "left",
                {
                  minValue: _v6,
                  maxValue: _v7
                } = _v2.getChannelRange(_v1);
              switch (_v1) {
                case "hue":
                  return `linear-gradient(to ${_v5}, rgb(255, 0, 0) 0%, rgb(255, 255, 0) 17%, rgb(0, 255, 0) 33%, rgb(0, 255, 255) 50%, rgb(0, 0, 255) 67%, rgb(255, 0, 255) 83%, rgb(255, 0, 0) 100%)`;
                case "lightness":
                  {
                    let _v0 = _v2.withChannelValue(_v1, _v6).toString("css"),
                      _v1 = _v2.withChannelValue(_v1, (_v7 - _v6) / 2).toString("css"),
                      _v2 = _v2.withChannelValue(_v1, _v7).toString("css");
                    return `linear-gradient(to ${_v5}, ${_v0}, ${_v1}, ${_v2})`;
                  }
                case "saturation":
                case "brightness":
                case "red":
                case "green":
                case "blue":
                case "alpha":
                  {
                    let _v0 = _v2.withChannelValue(_v1, _v6).toString("css"),
                      _v1 = _v2.withChannelValue(_v1, _v7).toString("css");
                    return `linear-gradient(to ${_v5}, ${_v0}, ${_v1})`;
                  }
                default:
                  throw Error("Unknown color channel: " + _v1);
              }
            })({
              orientation: _v1,
              channel: _v2,
              dir: _v4("dir"),
              value: _v4
            })
          }
        });
      },
      getChannelSliderLabelProps(_v0) {
        let {
          channel: _v1
        } = _v0;
        return _v1.element({
          ..._v23.channelSliderLabel.attrs,
          "data-channel": _v1,
          onClick(_v0) {
            if (!_v13) return;
            _v0.preventDefault();
            let _v1 = _v33(_v7, _v1);
            _v7.getById(_v1)?.focus({
              preventScroll: !0
            });
          },
          style: {
            userSelect: "none",
            WebkitUserSelect: "none"
          }
        });
      },
      getChannelSliderValueTextProps: _v0 => _v1.element({
        ..._v23.channelSliderValueText.attrs,
        "data-channel": _v0.channel
      }),
      getChannelSliderThumbProps(_v0) {
        let {
            orientation: _v1 = "horizontal",
            channel: _v2,
            format: _v3
          } = _v0,
          _v4 = _v3 ? _v8.toFormat(_v3) : _v10,
          _v5 = _v4.getChannelRange(_v2),
          _v6 = _v4.getChannelValue(_v2),
          _v7 = (_v6 - _v5.minValue) / (_v5.maxValue - _v5.minValue),
          _v8 = "horizontal" === _v1 ? {
            left: `${100 * _v7}%`,
            top: "50%"
          } : {
            top: `${100 * _v7}%`,
            left: "50%"
          };
        return _v1.element({
          ..._v23.channelSliderThumb.attrs,
          id: _v33(_v7, _v2),
          role: "slider",
          "aria-label": _v2,
          tabIndex: _v12 ? void 0 : 0,
          "data-channel": _v2,
          "data-disabled": (0, _v17.dataAttr)(_v12),
          "data-orientation": _v1,
          "aria-disabled": (0, _v17.dataAttr)(_v12),
          "aria-orientation": _v1,
          "aria-valuemax": _v5.maxValue,
          "aria-valuemin": _v5.minValue,
          "aria-valuenow": _v6,
          "aria-valuetext": `${_v2} ${_v6}`,
          style: {
            forcedColorAdjust: "none",
            position: "absolute",
            background: function (_v0, _v1) {
              switch (_v1) {
                case "hue":
                  return _v15(`hsl(${_v0.getChannelValue("hue")}, 100%, 50%)`);
                case "lightness":
                case "brightness":
                case "saturation":
                case "red":
                case "green":
                case "blue":
                  return _v0.withChannelValue("alpha", 1);
                case "alpha":
                  return _v0;
                default:
                  throw Error("Unknown color channel: " + _v1);
              }
            }(_v10, _v2).toString("css"),
            ..._v8
          },
          onFocus() {
            _v13 && _v3({
              type: "CHANNEL_SLIDER.FOCUS",
              channel: _v2
            });
          },
          onKeyDown(_v0) {
            if (_v0.defaultPrevented || !_v13) return;
            let _v1 = (0, _v17.getEventStep)(_v0) * _v5.step,
              _v2 = {
                ArrowUp() {
                  _v3({
                    type: "CHANNEL_SLIDER.ARROW_UP",
                    channel: _v2,
                    step: _v1
                  });
                },
                ArrowDown() {
                  _v3({
                    type: "CHANNEL_SLIDER.ARROW_DOWN",
                    channel: _v2,
                    step: _v1
                  });
                },
                ArrowLeft() {
                  _v3({
                    type: "CHANNEL_SLIDER.ARROW_LEFT",
                    channel: _v2,
                    step: _v1
                  });
                },
                ArrowRight() {
                  _v3({
                    type: "CHANNEL_SLIDER.ARROW_RIGHT",
                    channel: _v2,
                    step: _v1
                  });
                },
                PageUp() {
                  _v3({
                    type: "CHANNEL_SLIDER.PAGE_UP",
                    channel: _v2
                  });
                },
                PageDown() {
                  _v3({
                    type: "CHANNEL_SLIDER.PAGE_DOWN",
                    channel: _v2
                  });
                },
                Home() {
                  _v3({
                    type: "CHANNEL_SLIDER.HOME",
                    channel: _v2
                  });
                },
                End() {
                  _v3({
                    type: "CHANNEL_SLIDER.END",
                    channel: _v2
                  });
                },
                Escape(_v0) {
                  _v0.stopPropagation();
                }
              }[(0, _v17.getEventKey)(_v0, {
                dir: _v4("dir")
              })];
            _v2 && (_v2(_v0), _v0.preventDefault());
          }
        });
      },
      getChannelInputProps(_v0) {
        let {
            channel: _v1
          } = _v0,
          _v2 = "hex" === _v1 || "css" === _v1,
          _v3 = function (_v0, _v1) {
            switch (_v1) {
              case "hex":
                let _v0 = _v15("#000000"),
                  _v1 = _v15("#FFFFFF");
                return {
                  minValue: _v0.toHexInt(),
                  maxValue: _v1.toHexInt(),
                  pageSize: 10,
                  step: 1
                };
              case "css":
                return;
              case "hue":
              case "saturation":
              case "lightness":
                return _v0.toFormat("hsla").getChannelRange(_v1);
              case "brightness":
                return _v0.toFormat("hsba").getChannelRange(_v1);
              case "red":
              case "green":
              case "blue":
                return _v0.toFormat("rgba").getChannelRange(_v1);
              default:
                return _v0.getChannelRange(_v1);
            }
          }(_v8, _v1);
        return _v1.input({
          ..._v23.channelInput.attrs,
          dir: _v4("dir"),
          type: _v2 ? "text" : "number",
          "data-channel": _v1,
          "aria-label": _v1,
          spellCheck: !1,
          autoComplete: "off",
          disabled: _v12,
          "data-disabled": (0, _v17.dataAttr)(_v12),
          "data-invalid": (0, _v17.dataAttr)(_v4("invalid")),
          "data-readonly": (0, _v17.dataAttr)(_v4("readOnly")),
          readOnly: _v4("readOnly"),
          defaultValue: _v38(_v8, _v1),
          min: _v3?.minValue,
          max: _v3?.maxValue,
          step: _v3?.step,
          onBeforeInput(_v0) {
            _v2 || !_v13 || _v0.currentTarget.value.match(/[^0-9.]/g) && _v0.preventDefault();
          },
          onFocus(_v0) {
            _v13 && (_v3({
              type: "CHANNEL_INPUT.FOCUS",
              channel: _v1
            }), _v0.currentTarget.select());
          },
          onBlur(_v0) {
            _v13 && _v3({
              type: "CHANNEL_INPUT.BLUR",
              channel: _v1,
              value: _v2 ? _v0.currentTarget.value : _v0.currentTarget.valueAsNumber,
              isTextField: _v2
            });
          },
          onKeyDown(_v0) {
            _v0.defaultPrevented || _v13 && "Enter" === _v0.key && (_v3({
              type: "CHANNEL_INPUT.CHANGE",
              channel: _v1,
              value: _v2 ? _v0.currentTarget.value : _v0.currentTarget.valueAsNumber,
              isTextField: _v2
            }), _v0.preventDefault());
          },
          style: {
            appearance: "none",
            WebkitAppearance: "none",
            MozAppearance: "textfield"
          }
        });
      },
      getHiddenInputProps: () => _v1.input({
        type: "text",
        disabled: _v12,
        name: _v4("name"),
        tabIndex: -1,
        readOnly: _v4("readOnly"),
        required: _v4("required"),
        id: _v25(_v7),
        style: _v17.visuallyHiddenStyle,
        defaultValue: _v11
      }),
      getEyeDropperTriggerProps: () => _v1.button({
        ..._v23.eyeDropperTrigger.attrs,
        type: "button",
        dir: _v4("dir"),
        disabled: _v12,
        "data-disabled": (0, _v17.dataAttr)(_v12),
        "data-invalid": (0, _v17.dataAttr)(_v4("invalid")),
        "data-readonly": (0, _v17.dataAttr)(_v4("readOnly")),
        "aria-label": "Pick a color from the screen",
        onClick() {
          _v13 && _v3({
            type: "EYEDROPPER.CLICK"
          });
        }
      }),
      getSwatchGroupProps: () => _v1.element({
        ..._v23.swatchGroup.attrs,
        role: "group"
      }),
      getSwatchTriggerState: _v20,
      getSwatchTriggerProps(_v0) {
        let _v1 = _v20(_v0);
        return _v1.button({
          ..._v23.swatchTrigger.attrs,
          disabled: _v1.disabled,
          dir: _v4("dir"),
          type: "button",
          "aria-label": `select ${_v1.valueAsString} as the color`,
          "data-state": _v1.checked ? "checked" : "unchecked",
          "data-value": _v1.valueAsString,
          "data-disabled": (0, _v17.dataAttr)(_v1.disabled),
          onClick() {
            _v1.disabled || _v3({
              type: "SWATCH_TRIGGER.CLICK",
              value: _v1.value
            });
          },
          style: {
            "--color": _v1.valueAsString,
            position: "relative"
          }
        });
      },
      getSwatchIndicatorProps(_v0) {
        let _v1 = _v20(_v0);
        return _v1.element({
          ..._v23.swatchIndicator.attrs,
          dir: _v4("dir"),
          hidden: !_v1.checked
        });
      },
      getSwatchProps(_v0) {
        let {
            respectAlpha: _v1 = !0
          } = _v0,
          _v2 = _v20(_v0),
          _v3 = _v2.value.toString(_v1 ? "css" : "hex");
        return _v1.element({
          ..._v23.swatch.attrs,
          dir: _v4("dir"),
          "data-state": _v2.checked ? "checked" : "unchecked",
          "data-value": _v2.valueAsString,
          style: {
            "--color": _v3,
            position: "relative",
            background: _v3
          }
        });
      },
      getFormatTriggerProps: () => _v1.button({
        ..._v23.formatTrigger.attrs,
        dir: _v4("dir"),
        type: "button",
        "aria-label": `change color format to ${_v41(_v9)}`,
        onClick(_v0) {
          _v0.currentTarget.disabled || _v3({
            type: "FORMAT.SET",
            format: _v41(_v9),
            src: "format-trigger"
          });
        }
      }),
      getFormatSelectProps: () => _v1.select({
        ..._v23.formatSelect.attrs,
        "aria-label": "change color format",
        dir: _v4("dir"),
        defaultValue: _v4("format"),
        disabled: _v12,
        onChange(_v0) {
          _v3({
            type: "FORMAT.SET",
            format: function (_v0) {
              if (_v40.test(_v0)) return _v0;
              throw Error(`Unsupported color format: ${_v0}`);
            }(_v0.currentTarget.value),
            src: "format-select"
          });
        }
      })
    };
  }, "machine", 0, _v44, "parse", 0, _v42], 0);
}