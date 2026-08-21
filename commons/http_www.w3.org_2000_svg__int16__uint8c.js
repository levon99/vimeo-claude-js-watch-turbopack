{
  "u" > typeof document && "u" > typeof navigator && function (_v0, _v1) {
    _v1.exports = _v1();
  }(_v0.e, function () {
    "use strict";

    var _v0 = "http://www.w3.org/2000/svg",
      _v1 = "",
      _v2 = !1,
      _v3 = 0,
      _v4 = function (_v0) {
        _v2 = !!_v0;
      },
      _v5 = function () {
        return _v2;
      },
      _v6 = function (_v0) {
        _v1 = _v0;
      },
      _v7 = function () {
        return _v1;
      };
    function _v8(_v0) {
      return document.createElement(_v0);
    }
    function _v9(_v0, _v1) {
      var _v2,
        _v3,
        _v4 = _v0.length;
      for (_v2 = 0; _v2 < _v4; _v2 += 1) for (var _v5 in _v3 = _v0[_v2].prototype) Object.prototype.hasOwnProperty.call(_v3, _v5) && (_v1.prototype[_v5] = _v3[_v5]);
    }
    function _v10(_v0, _v1) {
      return Object.getOwnPropertyDescriptor(_v0, _v1);
    }
    function _v11(_v0) {
      function _v1() {}
      return _v1.prototype = _v0, _v1;
    }
    var _v12 = function () {
        function _v0(_v0) {
          this.audios = [], this.audioFactory = _v0, this._volume = 1, this._isMuted = !1;
        }
        return _v0.prototype = {
          addAudio: function (_v0) {
            this.audios.push(_v0);
          },
          pause: function () {
            var _v0,
              _v1 = this.audios.length;
            for (_v0 = 0; _v0 < _v1; _v0 += 1) this.audios[_v0].pause();
          },
          resume: function () {
            var _v0,
              _v1 = this.audios.length;
            for (_v0 = 0; _v0 < _v1; _v0 += 1) this.audios[_v0].resume();
          },
          setRate: function (_v0) {
            var _v1,
              _v2 = this.audios.length;
            for (_v1 = 0; _v1 < _v2; _v1 += 1) this.audios[_v1].setRate(_v0);
          },
          createAudio: function (_v0) {
            return this.audioFactory ? this.audioFactory(_v0) : window.Howl ? new window.Howl({
              src: [_v0]
            }) : {
              isPlaying: !1,
              play: function () {
                this.isPlaying = !0;
              },
              seek: function () {
                this.isPlaying = !1;
              },
              playing: function () {},
              rate: function () {},
              setVolume: function () {}
            };
          },
          setAudioFactory: function (_v0) {
            this.audioFactory = _v0;
          },
          setVolume: function (_v0) {
            this._volume = _v0, this._updateVolume();
          },
          mute: function () {
            this._isMuted = !0, this._updateVolume();
          },
          unmute: function () {
            this._isMuted = !1, this._updateVolume();
          },
          getVolume: function () {
            return this._volume;
          },
          _updateVolume: function () {
            var _v0,
              _v1 = this.audios.length;
            for (_v0 = 0; _v0 < _v1; _v0 += 1) this.audios[_v0].volume(!this._isMuted * this._volume);
          }
        }, function () {
          return new _v0();
        };
      }(),
      _v13 = function () {
        function _v0(_v0, _v1) {
          var _v2,
            _v3 = 0,
            _v4 = [];
          switch (_v0) {
            case "int16":
            case "uint8c":
              _v2 = 1;
              break;
            default:
              _v2 = 1.1;
          }
          for (_v3 = 0; _v3 < _v1; _v3 += 1) _v4.push(_v2);
          return _v4;
        }
        function _v1(_v0, _v1) {
          return "float32" === _v0 ? new Float32Array(_v1) : "int16" === _v0 ? new Int16Array(_v1) : "uint8c" === _v0 ? new Uint8ClampedArray(_v1) : _v0(_v0, _v1);
        }
        return "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? _v1 : _v0;
      }();
    function _v14(_v0) {
      return Array.apply(null, {
        length: _v0
      });
    }
    function _v15(_v0) {
      return (_v15 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_v0) {
        return typeof _v0;
      } : function (_v0) {
        return _v0 && "function" == typeof Symbol && _v0.constructor === Symbol && _v0 !== Symbol.prototype ? "symbol" : typeof _v0;
      })(_v0);
    }
    var _v16 = !0,
      _v17 = null,
      _v18 = null,
      _v19 = "",
      _v20 = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
      _v21 = !1,
      _v22 = Math.pow,
      _v23 = Math.sqrt,
      _v24 = Math.floor,
      _v25 = Math.max,
      _v26 = Math.min,
      _v27 = {};
    function _v28() {
      return {};
    }
    !function () {
      var _v0,
        _v1 = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
        _v2 = _v1.length;
      for (_v0 = 0; _v0 < _v2; _v0 += 1) _v27[_v1[_v0]] = Math[_v1[_v0]];
    }(), _v27.random = Math.random, _v27.abs = function (_v0) {
      if ("object" === _v15(_v0) && _v0.length) {
        var _v1,
          _v2 = _v14(_v0.length),
          _v3 = _v0.length;
        for (_v1 = 0; _v1 < _v3; _v1 += 1) _v2[_v1] = Math.abs(_v0[_v1]);
        return _v2;
      }
      return Math.abs(_v0);
    };
    var _v29 = 150,
      _v30 = Math.PI / 180,
      _v31 = .5519;
    function _v32(_v0) {
      _v21 = !!_v0;
    }
    function _v33(_v0) {
      return _v21 ? Math.round(_v0) : _v0;
    }
    function _v34(_v0) {
      _v0.style.position = "absolute", _v0.style.top = 0, _v0.style.left = 0, _v0.style.display = "block", _v0.style.transformOrigin = "0 0", _v0.style.webkitTransformOrigin = "0 0", _v0.style.backfaceVisibility = "visible", _v0.style.webkitBackfaceVisibility = "visible", _v0.style.transformStyle = "preserve-3d", _v0.style.webkitTransformStyle = "preserve-3d", _v0.style.mozTransformStyle = "preserve-3d";
    }
    function _v35(_v0, _v1, _v2, _v3) {
      this.type = _v0, this.currentTime = _v1, this.totalTime = _v2, this.direction = _v3 < 0 ? -1 : 1;
    }
    function _v36(_v0, _v1) {
      this.type = _v0, this.direction = _v1 < 0 ? -1 : 1;
    }
    function _v37(_v0, _v1, _v2, _v3) {
      this.type = _v0, this.currentLoop = _v2, this.totalLoops = _v1, this.direction = _v3 < 0 ? -1 : 1;
    }
    function _v38(_v0, _v1, _v2) {
      this.type = _v0, this.firstFrame = _v1, this.totalFrames = _v2;
    }
    function _v39(_v0, _v1) {
      this.type = _v0, this.target = _v1;
    }
    function _v40(_v0, _v1) {
      this.type = "renderFrameError", this.nativeError = _v0, this.currentTime = _v1;
    }
    function _v41(_v0) {
      this.type = "configError", this.nativeError = _v0;
    }
    function _v42(_v0, _v1) {
      this.type = _v0, this.nativeError = _v1;
    }
    var _v43 = function () {
      var _v0 = 0;
      return function () {
        return _v0 += 1, _v19 + "__lottie_element_" + _v0;
      };
    }();
    function _v44(_v0, _v1, _v2) {
      var _v3, _v4, _v5, _v6, _v7, _v8, _v9, _v10;
      switch (_v6 = Math.floor(6 * _v0), _v7 = 6 * _v0 - _v6, _v8 = _v2 * (1 - _v1), _v9 = _v2 * (1 - _v7 * _v1), _v10 = _v2 * (1 - (1 - _v7) * _v1), _v6 % 6) {
        case 0:
          _v3 = _v2, _v4 = _v10, _v5 = _v8;
          break;
        case 1:
          _v3 = _v9, _v4 = _v2, _v5 = _v8;
          break;
        case 2:
          _v3 = _v8, _v4 = _v2, _v5 = _v10;
          break;
        case 3:
          _v3 = _v8, _v4 = _v9, _v5 = _v2;
          break;
        case 4:
          _v3 = _v10, _v4 = _v8, _v5 = _v2;
          break;
        case 5:
          _v3 = _v2, _v4 = _v8, _v5 = _v9;
      }
      return [_v3, _v4, _v5];
    }
    function _v45(_v0, _v1, _v2) {
      var _v3,
        _v4 = Math.max(_v0, _v1, _v2),
        _v5 = Math.min(_v0, _v1, _v2),
        _v6 = _v4 - _v5,
        _v7 = 0 === _v4 ? 0 : _v6 / _v4,
        _v8 = _v4 / 255;
      switch (_v4) {
        case _v5:
          _v3 = 0;
          break;
        case _v0:
          _v3 = (_v1 - _v2 + 6 * (_v1 < _v2) * _v6) / (6 * _v6);
          break;
        case _v1:
          _v3 = (_v2 - _v0 + 2 * _v6) / (6 * _v6);
          break;
        case _v2:
          _v3 = (_v0 - _v1 + 4 * _v6) / (6 * _v6);
      }
      return [_v3, _v7, _v8];
    }
    function _v46(_v0, _v1) {
      var _v2 = _v45(255 * _v0[0], 255 * _v0[1], 255 * _v0[2]);
      return _v2[1] += _v1, _v2[1] > 1 ? _v2[1] = 1 : _v2[1] <= 0 && (_v2[1] = 0), _v44(_v2[0], _v2[1], _v2[2]);
    }
    function _v47(_v0, _v1) {
      var _v2 = _v45(255 * _v0[0], 255 * _v0[1], 255 * _v0[2]);
      return _v2[2] += _v1, _v2[2] > 1 ? _v2[2] = 1 : _v2[2] < 0 && (_v2[2] = 0), _v44(_v2[0], _v2[1], _v2[2]);
    }
    function _v48(_v0, _v1) {
      var _v2 = _v45(255 * _v0[0], 255 * _v0[1], 255 * _v0[2]);
      return _v2[0] += _v1 / 360, _v2[0] > 1 ? _v2[0] -= 1 : _v2[0] < 0 && (_v2[0] += 1), _v44(_v2[0], _v2[1], _v2[2]);
    }
    var _v49 = function () {
        var _v0,
          _v1,
          _v2 = [];
        for (_v0 = 0; _v0 < 256; _v0 += 1) _v1 = _v0.toString(16), _v2[_v0] = 1 === _v1.length ? "0" + _v1 : _v1;
        return function (_v0, _v1, _v2) {
          return _v0 < 0 && (_v0 = 0), _v1 < 0 && (_v1 = 0), _v2 < 0 && (_v2 = 0), "#" + _v2[_v0] + _v2[_v1] + _v2[_v2];
        };
      }(),
      _v50 = function (_v0) {
        _v16 = !!_v0;
      },
      _v51 = function () {
        return _v16;
      },
      _v52 = function (_v0) {
        _v17 = _v0;
      },
      _v53 = function () {
        return _v17;
      },
      _v54 = function (_v0) {
        _v18 = _v0;
      },
      _v55 = function () {
        return _v18;
      },
      _v56 = function (_v0) {
        _v29 = _v0;
      },
      _v57 = function () {
        return _v29;
      },
      _v58 = function (_v0) {
        _v19 = _v0;
      },
      _v59 = function () {
        return _v19;
      };
    function _v60(_v0) {
      return document.createElementNS(_v0, _v0);
    }
    function _v61(_v0) {
      return (_v61 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_v0) {
        return typeof _v0;
      } : function (_v0) {
        return _v0 && "function" == typeof Symbol && _v0.constructor === Symbol && _v0 !== Symbol.prototype ? "symbol" : typeof _v0;
      })(_v0);
    }
    var _v62 = function () {
        var _v0,
          _v1,
          _v2 = 1,
          _v3 = [],
          _v4 = {
            onmessage: function () {},
            postMessage: function (_v0) {
              _v0({
                data: _v0
              });
            }
          },
          _v5 = {
            postMessage: function (_v0) {
              _v4.onmessage({
                data: _v0
              });
            }
          };
        function _v6(_v0) {
          if (window.Worker && window.Blob && _v5()) {
            var _v1 = new Blob(["var _workerSelf = self; self.onmessage = ", _v0.toString()], {
              type: "text/javascript"
            });
            return new Worker(URL.createObjectURL(_v1));
          }
          return _v0 = _v0, _v4;
        }
        function _v7() {
          _v1 || ((_v1 = _v6(function (_v0) {
            function _v1() {
              function _v0(_v0, _v1) {
                var _v2,
                  _v3,
                  _v4,
                  _v5,
                  _v6,
                  _v7,
                  _v8 = _v0.length;
                for (_v3 = 0; _v3 < _v8; _v3 += 1) if ("ks" in (_v2 = _v0[_v3]) && !_v2.completed) {
                  if (_v2.completed = !0, _v2.hasMask) {
                    var _v9 = _v2.masksProperties;
                    for (_v5 = _v9.length, _v4 = 0; _v4 < _v5; _v4 += 1) if (_v9[_v4].pt.k.i) _v5(_v9[_v4].pt.k);else for (_v7 = _v9[_v4].pt.k.length, _v6 = 0; _v6 < _v7; _v6 += 1) _v9[_v4].pt.k[_v6].s && _v5(_v9[_v4].pt.k[_v6].s[0]), _v9[_v4].pt.k[_v6].e && _v5(_v9[_v4].pt.k[_v6].e[0]);
                  }
                  0 === _v2.ty ? (_v2.layers = _v3(_v2.refId, _v1), _v0(_v2.layers, _v1)) : 4 === _v2.ty ? _v4(_v2.shapes) : 5 === _v2.ty && _v13(_v2);
                }
              }
              function _v1(_v0, _v1) {
                if (_v0) {
                  var _v2 = 0,
                    _v3 = _v0.length;
                  for (_v2 = 0; _v2 < _v3; _v2 += 1) 1 === _v0[_v2].t && (_v0[_v2].data.layers = _v3(_v0[_v2].data.refId, _v1), _v0(_v0[_v2].data.layers, _v1));
                }
              }
              function _v2(_v0, _v1) {
                for (var _v2 = 0, _v3 = _v1.length; _v2 < _v3;) {
                  if (_v1[_v2].id === _v0) return _v1[_v2];
                  _v2 += 1;
                }
                return null;
              }
              function _v3(_v0, _v1) {
                var _v2 = _v2(_v0, _v1);
                return _v2 ? _v2.layers.__used ? JSON.parse(JSON.stringify(_v2.layers)) : (_v2.layers.__used = !0, _v2.layers) : null;
              }
              function _v4(_v0) {
                var _v1, _v2, _v3;
                for (_v1 = _v0.length - 1; _v1 >= 0; _v1 -= 1) if ("sh" === _v0[_v1].ty) {
                  if (_v0[_v1].ks.k.i) _v5(_v0[_v1].ks.k);else for (_v3 = _v0[_v1].ks.k.length, _v2 = 0; _v2 < _v3; _v2 += 1) _v0[_v1].ks.k[_v2].s && _v5(_v0[_v1].ks.k[_v2].s[0]), _v0[_v1].ks.k[_v2].e && _v5(_v0[_v1].ks.k[_v2].e[0]);
                } else "gr" === _v0[_v1].ty && _v4(_v0[_v1].it);
              }
              function _v5(_v0) {
                var _v1,
                  _v2 = _v0.i.length;
                for (_v1 = 0; _v1 < _v2; _v1 += 1) _v0.i[_v1][0] += _v0.v[_v1][0], _v0.i[_v1][1] += _v0.v[_v1][1], _v0.o[_v1][0] += _v0.v[_v1][0], _v0.o[_v1][1] += _v0.v[_v1][1];
              }
              function _v6(_v0, _v1) {
                var _v2 = _v1 ? _v1.split(".") : [100, 100, 100];
                return _v0[0] > _v2[0] || !(_v2[0] > _v0[0]) && (_v0[1] > _v2[1] || !(_v2[1] > _v0[1]) && (_v0[2] > _v2[2] || !(_v2[2] > _v0[2]) && null));
              }
              var _v7,
                _v8 = function () {
                  var _v0 = [4, 4, 14];
                  function _v1(_v0) {
                    var _v1 = _v0.t.d;
                    _v0.t.d = {
                      k: [{
                        s: _v1,
                        t: 0
                      }]
                    };
                  }
                  function _v2(_v0) {
                    var _v1,
                      _v2 = _v0.length;
                    for (_v1 = 0; _v1 < _v2; _v1 += 1) 5 === _v0[_v1].ty && _v1(_v0[_v1]);
                  }
                  return function (_v0) {
                    if (_v6(_v0, _v0.v) && (_v2(_v0.layers), _v0.assets)) {
                      var _v1,
                        _v2 = _v0.assets.length;
                      for (_v1 = 0; _v1 < _v2; _v1 += 1) _v0.assets[_v1].layers && _v2(_v0.assets[_v1].layers);
                    }
                  };
                }(),
                _v9 = (_v7 = [4, 7, 99], function (_v0) {
                  if (_v0.chars && !_v6(_v7, _v0.v)) {
                    var _v1,
                      _v2 = _v0.chars.length;
                    for (_v1 = 0; _v1 < _v2; _v1 += 1) {
                      var _v3 = _v0.chars[_v1];
                      _v3.data && _v3.data.shapes && (_v4(_v3.data.shapes), _v3.data.ip = 0, _v3.data.op = 0, _v3.data.st = 0, _v3.data.sr = 1, _v3.data.ks = {
                        p: {
                          k: [0, 0],
                          a: 0
                        },
                        s: {
                          k: [100, 100],
                          a: 0
                        },
                        a: {
                          k: [0, 0],
                          a: 0
                        },
                        r: {
                          k: 0,
                          a: 0
                        },
                        o: {
                          k: 100,
                          a: 0
                        }
                      }, _v0.chars[_v1].t || (_v3.data.shapes.push({
                        ty: "no"
                      }), _v3.data.shapes[0].it.push({
                        p: {
                          k: [0, 0],
                          a: 0
                        },
                        s: {
                          k: [100, 100],
                          a: 0
                        },
                        a: {
                          k: [0, 0],
                          a: 0
                        },
                        r: {
                          k: 0,
                          a: 0
                        },
                        o: {
                          k: 100,
                          a: 0
                        },
                        sk: {
                          k: 0,
                          a: 0
                        },
                        sa: {
                          k: 0,
                          a: 0
                        },
                        ty: "tr"
                      })));
                    }
                  }
                }),
                _v10 = function () {
                  var _v0 = [5, 7, 15];
                  function _v1(_v0) {
                    var _v1 = _v0.t.p;
                    "number" == typeof _v1.a && (_v1.a = {
                      a: 0,
                      k: _v1.a
                    }), "number" == typeof _v1.p && (_v1.p = {
                      a: 0,
                      k: _v1.p
                    }), "number" == typeof _v1.r && (_v1.r = {
                      a: 0,
                      k: _v1.r
                    });
                  }
                  function _v2(_v0) {
                    var _v1,
                      _v2 = _v0.length;
                    for (_v1 = 0; _v1 < _v2; _v1 += 1) 5 === _v0[_v1].ty && _v1(_v0[_v1]);
                  }
                  return function (_v0) {
                    if (_v6(_v0, _v0.v) && (_v2(_v0.layers), _v0.assets)) {
                      var _v1,
                        _v2 = _v0.assets.length;
                      for (_v1 = 0; _v1 < _v2; _v1 += 1) _v0.assets[_v1].layers && _v2(_v0.assets[_v1].layers);
                    }
                  };
                }(),
                _v11 = function () {
                  var _v0 = [4, 1, 9];
                  function _v1(_v0) {
                    var _v1,
                      _v2,
                      _v3,
                      _v4 = _v0.length;
                    for (_v1 = 0; _v1 < _v4; _v1 += 1) if ("gr" === _v0[_v1].ty) _v1(_v0[_v1].it);else if ("fl" === _v0[_v1].ty || "st" === _v0[_v1].ty) if (_v0[_v1].c.k && _v0[_v1].c.k[0].i) for (_v3 = _v0[_v1].c.k.length, _v2 = 0; _v2 < _v3; _v2 += 1) _v0[_v1].c.k[_v2].s && (_v0[_v1].c.k[_v2].s[0] /= 255, _v0[_v1].c.k[_v2].s[1] /= 255, _v0[_v1].c.k[_v2].s[2] /= 255, _v0[_v1].c.k[_v2].s[3] /= 255), _v0[_v1].c.k[_v2].e && (_v0[_v1].c.k[_v2].e[0] /= 255, _v0[_v1].c.k[_v2].e[1] /= 255, _v0[_v1].c.k[_v2].e[2] /= 255, _v0[_v1].c.k[_v2].e[3] /= 255);else _v0[_v1].c.k[0] /= 255, _v0[_v1].c.k[1] /= 255, _v0[_v1].c.k[2] /= 255, _v0[_v1].c.k[3] /= 255;
                  }
                  function _v2(_v0) {
                    var _v1,
                      _v2 = _v0.length;
                    for (_v1 = 0; _v1 < _v2; _v1 += 1) 4 === _v0[_v1].ty && _v1(_v0[_v1].shapes);
                  }
                  return function (_v0) {
                    if (_v6(_v0, _v0.v) && (_v2(_v0.layers), _v0.assets)) {
                      var _v1,
                        _v2 = _v0.assets.length;
                      for (_v1 = 0; _v1 < _v2; _v1 += 1) _v0.assets[_v1].layers && _v2(_v0.assets[_v1].layers);
                    }
                  };
                }(),
                _v12 = function () {
                  var _v0 = [4, 4, 18];
                  function _v1(_v0) {
                    var _v1, _v2, _v3;
                    for (_v1 = _v0.length - 1; _v1 >= 0; _v1 -= 1) if ("sh" === _v0[_v1].ty) {
                      if (_v0[_v1].ks.k.i) _v0[_v1].ks.k.c = _v0[_v1].closed;else for (_v3 = _v0[_v1].ks.k.length, _v2 = 0; _v2 < _v3; _v2 += 1) _v0[_v1].ks.k[_v2].s && (_v0[_v1].ks.k[_v2].s[0].c = _v0[_v1].closed), _v0[_v1].ks.k[_v2].e && (_v0[_v1].ks.k[_v2].e[0].c = _v0[_v1].closed);
                    } else "gr" === _v0[_v1].ty && _v1(_v0[_v1].it);
                  }
                  function _v2(_v0) {
                    var _v1,
                      _v2,
                      _v3,
                      _v4,
                      _v5,
                      _v6,
                      _v7 = _v0.length;
                    for (_v2 = 0; _v2 < _v7; _v2 += 1) {
                      if ((_v1 = _v0[_v2]).hasMask) {
                        var _v8 = _v1.masksProperties;
                        for (_v4 = _v8.length, _v3 = 0; _v3 < _v4; _v3 += 1) if (_v8[_v3].pt.k.i) _v8[_v3].pt.k.c = _v8[_v3].cl;else for (_v6 = _v8[_v3].pt.k.length, _v5 = 0; _v5 < _v6; _v5 += 1) _v8[_v3].pt.k[_v5].s && (_v8[_v3].pt.k[_v5].s[0].c = _v8[_v3].cl), _v8[_v3].pt.k[_v5].e && (_v8[_v3].pt.k[_v5].e[0].c = _v8[_v3].cl);
                      }
                      4 === _v1.ty && _v1(_v1.shapes);
                    }
                  }
                  return function (_v0) {
                    if (_v6(_v0, _v0.v) && (_v2(_v0.layers), _v0.assets)) {
                      var _v1,
                        _v2 = _v0.assets.length;
                      for (_v1 = 0; _v1 < _v2; _v1 += 1) _v0.assets[_v1].layers && _v2(_v0.assets[_v1].layers);
                    }
                  };
                }();
              function _v13(_v0) {
                0 === _v0.t.a.length && _v0.t.p;
              }
              var _v14 = {};
              return _v14.completeData = function (_v0) {
                _v0.__complete || (_v11(_v0), _v8(_v0), _v9(_v0), _v10(_v0), _v12(_v0), _v0(_v0.layers, _v0.assets), _v1(_v0.chars, _v0.assets), _v0.__complete = !0);
              }, _v14.checkColors = _v11, _v14.checkChars = _v9, _v14.checkPathProperties = _v10, _v14.checkShapes = _v12, _v14.completeLayers = _v0, _v14;
            }
            if (_v5.dataManager || (_v5.dataManager = _v1()), _v5.assetLoader || (_v5.assetLoader = function () {
              function _v0(_v0) {
                var _v1 = _v0.getResponseHeader("content-type");
                return _v1 && "json" === _v0.responseType && -1 !== _v1.indexOf("json") || _v0.response && "object" === _v61(_v0.response) ? _v0.response : _v0.response && "string" == typeof _v0.response ? JSON.parse(_v0.response) : _v0.responseText ? JSON.parse(_v0.responseText) : null;
              }
              return {
                load: function (_v0, _v1, _v2, _v3) {
                  var _v4,
                    _v5 = new XMLHttpRequest();
                  try {
                    _v5.responseType = "json";
                  } catch (_v0) {}
                  _v5.onreadystatechange = function () {
                    if (4 === _v5.readyState) if (200 === _v5.status) _v2(_v4 = _v0(_v5));else try {
                      _v4 = _v0(_v5), _v2(_v4);
                    } catch (_v0) {
                      _v3 && _v3(_v0);
                    }
                  };
                  try {
                    _v5.open("GET", _v0, !0);
                  } catch (_v0) {
                    _v5.open("GET", _v1 + "/" + _v0, !0);
                  }
                  _v5.send();
                }
              };
            }()), "loadAnimation" === _v0.data.type) _v5.assetLoader.load(_v0.data.path, _v0.data.fullPath, function (_v0) {
              _v5.dataManager.completeData(_v0), _v5.postMessage({
                id: _v0.data.id,
                payload: _v0,
                status: "success"
              });
            }, function () {
              _v5.postMessage({
                id: _v0.data.id,
                status: "error"
              });
            });else if ("complete" === _v0.data.type) {
              var _v2 = _v0.data.animation;
              _v5.dataManager.completeData(_v2), _v5.postMessage({
                id: _v0.data.id,
                payload: _v2,
                status: "success"
              });
            } else "loadData" === _v0.data.type && _v5.assetLoader.load(_v0.data.path, _v0.data.fullPath, function (_v0) {
              _v5.postMessage({
                id: _v0.data.id,
                payload: _v0,
                status: "success"
              });
            }, function () {
              _v5.postMessage({
                id: _v0.data.id,
                status: "error"
              });
            });
          })).onmessage = function (_v0) {
            var _v1 = _v0.data,
              _v2 = _v1.id,
              _v3 = _v3[_v2];
            _v3[_v2] = null, "success" === _v1.status ? _v3.onComplete(_v1.payload) : _v3.onError && _v3.onError();
          });
        }
        function _v8(_v0, _v1) {
          var _v2 = "processId_" + (_v2 += 1);
          return _v3[_v2] = {
            onComplete: _v0,
            onError: _v1
          }, _v2;
        }
        return {
          loadAnimation: function (_v0, _v1, _v2) {
            _v7();
            var _v3 = _v8(_v1, _v2);
            _v1.postMessage({
              type: "loadAnimation",
              path: _v0,
              fullPath: window.location.origin + window.location.pathname,
              id: _v3
            });
          },
          loadData: function (_v0, _v1, _v2) {
            _v7();
            var _v3 = _v8(_v1, _v2);
            _v1.postMessage({
              type: "loadData",
              path: _v0,
              fullPath: window.location.origin + window.location.pathname,
              id: _v3
            });
          },
          completeAnimation: function (_v0, _v1, _v2) {
            _v7();
            var _v3 = _v8(_v1, _v2);
            _v1.postMessage({
              type: "complete",
              animation: _v0,
              id: _v3
            });
          }
        };
      }(),
      _v63 = function () {
        var _v0,
          _v1,
          _v2 = ((_v0 = _v8("canvas")).width = 1, _v0.height = 1, (_v1 = _v0.getContext("2d")).fillStyle = "rgba(0,0,0,0)", _v1.fillRect(0, 0, 1, 1), _v0);
        function _v3() {
          this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
        }
        function _v4() {
          this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
        }
        function _v5(_v0, _v1, _v2) {
          var _v3 = "";
          if (_v0.e) _v3 = _v0.p;else if (_v1) {
            var _v4 = _v0.p;
            -1 !== _v4.indexOf("images/") && (_v4 = _v4.split("/")[1]), _v3 = _v1 + _v4;
          } else _v3 = _v2 + (_v0.u ? _v0.u : "") + _v0.p;
          return _v3;
        }
        function _v6(_v0) {
          var _v1 = 0,
            _v2 = setInterval(function () {
              (_v0.getBBox().width || _v1 > 500) && (this._imageLoaded(), clearInterval(_v2)), _v1 += 1;
            }.bind(this), 50);
        }
        function _v7(_v0) {
          var _v1 = {
              assetData: _v0
            },
            _v2 = _v5(_v0, this.assetsPath, this.path);
          return _v62.loadData(_v2, function (_v0) {
            _v1.img = _v0, this._footageLoaded();
          }.bind(this), function () {
            _v1.img = {}, this._footageLoaded();
          }.bind(this)), _v1;
        }
        function _v8() {
          this._imageLoaded = _v3.bind(this), this._footageLoaded = _v4.bind(this), this.testImageLoaded = _v6.bind(this), this.createFootageData = _v7.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = [];
        }
        return _v8.prototype = {
          loadAssets: function (_v0, _v1) {
            this.imagesLoadedCb = _v1;
            var _v2,
              _v3 = _v0.length;
            for (_v2 = 0; _v2 < _v3; _v2 += 1) _v0[_v2].layers || (_v0[_v2].t && "seq" !== _v0[_v2].t ? 3 === _v0[_v2].t && (this.totalFootages += 1, this.images.push(this.createFootageData(_v0[_v2]))) : (this.totalImages += 1, this.images.push(this._createImageData(_v0[_v2]))));
          },
          setAssetsPath: function (_v0) {
            this.assetsPath = _v0 || "";
          },
          setPath: function (_v0) {
            this.path = _v0 || "";
          },
          loadedImages: function () {
            return this.totalImages === this.loadedAssets;
          },
          loadedFootages: function () {
            return this.totalFootages === this.loadedFootagesCount;
          },
          destroy: function () {
            this.imagesLoadedCb = null, this.images.length = 0;
          },
          getAsset: function (_v0) {
            for (var _v1 = 0, _v2 = this.images.length; _v1 < _v2;) {
              if (this.images[_v1].assetData === _v0) return this.images[_v1].img;
              _v1 += 1;
            }
            return null;
          },
          createImgData: function (_v0) {
            var _v1 = _v5(_v0, this.assetsPath, this.path),
              _v2 = _v8("img");
            _v2.crossOrigin = "anonymous", _v2.addEventListener("load", this._imageLoaded, !1), _v2.addEventListener("error", function () {
              _v3.img = _v2, this._imageLoaded();
            }.bind(this), !1), _v2.src = _v1;
            var _v3 = {
              img: _v2,
              assetData: _v0
            };
            return _v3;
          },
          createImageData: function (_v0) {
            var _v1 = _v5(_v0, this.assetsPath, this.path),
              _v2 = _v60("image");
            _v20 ? this.testImageLoaded(_v2) : _v2.addEventListener("load", this._imageLoaded, !1), _v2.addEventListener("error", function () {
              _v3.img = _v2, this._imageLoaded();
            }.bind(this), !1), _v2.setAttributeNS("http://www.w3.org/1999/xlink", "href", _v1), this._elementHelper.append ? this._elementHelper.append(_v2) : this._elementHelper.appendChild(_v2);
            var _v3 = {
              img: _v2,
              assetData: _v0
            };
            return _v3;
          },
          imageLoaded: _v3,
          footageLoaded: _v4,
          setCacheType: function (_v0, _v1) {
            "svg" === _v0 ? (this._elementHelper = _v1, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this);
          }
        }, _v8;
      }();
    function _v64() {}
    _v64.prototype = {
      triggerEvent: function (_v0, _v1) {
        if (this._cbs[_v0]) for (var _v2 = this._cbs[_v0], _v3 = 0; _v3 < _v2.length; _v3 += 1) _v2[_v3](_v1);
      },
      addEventListener: function (_v0, _v1) {
        return this._cbs[_v0] || (this._cbs[_v0] = []), this._cbs[_v0].push(_v1), function () {
          this.removeEventListener(_v0, _v1);
        }.bind(this);
      },
      removeEventListener: function (_v0, _v1) {
        if (_v1) {
          if (this._cbs[_v0]) {
            for (var _v2 = 0, _v3 = this._cbs[_v0].length; _v2 < _v3;) this._cbs[_v0][_v2] === _v1 && (this._cbs[_v0].splice(_v2, 1), _v2 -= 1, _v3 -= 1), _v2 += 1;
            this._cbs[_v0].length || (this._cbs[_v0] = null);
          }
        } else this._cbs[_v0] = null;
      }
    };
    var _v65 = function () {
        function _v0(_v0) {
          for (var _v1, _v2 = _v0.split("\r\n"), _v3 = {}, _v4 = 0, _v5 = 0; _v5 < _v2.length; _v5 += 1) 2 === (_v1 = _v2[_v5].split(":")).length && (_v3[_v1[0]] = _v1[1].trim(), _v4 += 1);
          if (0 === _v4) throw Error();
          return _v3;
        }
        return function (_v0) {
          for (var _v1 = [], _v2 = 0; _v2 < _v0.length; _v2 += 1) {
            var _v3 = _v0[_v2],
              _v4 = {
                time: _v3.tm,
                duration: _v3.dr
              };
            try {
              _v4.payload = JSON.parse(_v0[_v2].cm);
            } catch (_v0) {
              try {
                _v4.payload = _v0(_v0[_v2].cm);
              } catch (_v0) {
                _v4.payload = {
                  name: _v0[_v2].cm
                };
              }
            }
            _v1.push(_v4);
          }
          return _v1;
        };
      }(),
      _v66 = function () {
        function _v0(_v0) {
          this.compositions.push(_v0);
        }
        return function () {
          function _v0(_v0) {
            for (var _v1 = 0, _v2 = this.compositions.length; _v1 < _v2;) {
              if (this.compositions[_v1].data && this.compositions[_v1].data.nm === _v0) return this.compositions[_v1].prepareFrame && this.compositions[_v1].data.xt && this.compositions[_v1].prepareFrame(this.currentFrame), this.compositions[_v1].compInterface;
              _v1 += 1;
            }
            return null;
          }
          return _v0.compositions = [], _v0.currentFrame = 0, _v0.registerComposition = _v0, _v0;
        };
      }(),
      _v67 = {},
      _v68 = function (_v0, _v1) {
        _v67[_v0] = _v1;
      };
    function _v69(_v0) {
      return _v67[_v0];
    }
    function _v70() {
      if (_v67.canvas) return "canvas";
      for (var _v0 in _v67) if (_v67[_v0]) return _v0;
      return "";
    }
    function _v71(_v0) {
      return (_v71 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_v0) {
        return typeof _v0;
      } : function (_v0) {
        return _v0 && "function" == typeof Symbol && _v0.constructor === Symbol && _v0 !== Symbol.prototype ? "symbol" : typeof _v0;
      })(_v0);
    }
    var _v72 = function () {
      this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = _v43(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = _v51(), this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = _v66(), this.imagePreloader = new _v63(), this.audioController = _v12(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new _v35("drawnFrame", 0, 0, 0), this.expressionsPlugin = _v53();
    };
    _v9([_v64], _v72), _v72.prototype.setParams = function (_v0) {
      (_v0.wrapper || _v0.container) && (this.wrapper = _v0.wrapper || _v0.container);
      var _v1 = "svg";
      _v0.animType ? _v1 = _v0.animType : _v0.renderer && (_v1 = _v0.renderer);
      var _v2 = _v69(_v1);
      this.renderer = new _v2(this, _v0.rendererSettings), this.imagePreloader.setCacheType(_v1, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = _v1, "" === _v0.loop || null === _v0.loop || void 0 === _v0.loop || !0 === _v0.loop ? this.loop = !0 : !1 === _v0.loop ? this.loop = !1 : this.loop = parseInt(_v0.loop, 10), this.autoplay = !("autoplay" in _v0) || _v0.autoplay, this.name = _v0.name ? _v0.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(_v0, "autoloadSegments") || _v0.autoloadSegments, this.assetsPath = _v0.assetsPath, this.initialSegment = _v0.initialSegment, _v0.audioFactory && this.audioController.setAudioFactory(_v0.audioFactory), _v0.animationData ? this.setupAnimation(_v0.animationData) : _v0.path && (-1 !== _v0.path.lastIndexOf("\\") ? this.path = _v0.path.substr(0, _v0.path.lastIndexOf("\\") + 1) : this.path = _v0.path.substr(0, _v0.path.lastIndexOf("/") + 1), this.fileName = _v0.path.substr(_v0.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), _v62.loadAnimation(_v0.path, this.configAnimation, this.onSetupError));
    }, _v72.prototype.onSetupError = function () {
      this.trigger("data_failed");
    }, _v72.prototype.setupAnimation = function (_v0) {
      _v62.completeAnimation(_v0, this.configAnimation);
    }, _v72.prototype.setData = function (_v0, _v1) {
      _v1 && "object" !== _v71(_v1) && (_v1 = JSON.parse(_v1));
      var _v2 = {
          wrapper: _v0,
          animationData: _v1
        },
        _v3 = _v0.attributes;
      _v2.path = _v3.getNamedItem("data-animation-path") ? _v3.getNamedItem("data-animation-path").value : _v3.getNamedItem("data-bm-path") ? _v3.getNamedItem("data-bm-path").value : _v3.getNamedItem("bm-path") ? _v3.getNamedItem("bm-path").value : "", _v2.animType = _v3.getNamedItem("data-anim-type") ? _v3.getNamedItem("data-anim-type").value : _v3.getNamedItem("data-bm-type") ? _v3.getNamedItem("data-bm-type").value : _v3.getNamedItem("bm-type") ? _v3.getNamedItem("bm-type").value : _v3.getNamedItem("data-bm-renderer") ? _v3.getNamedItem("data-bm-renderer").value : _v3.getNamedItem("bm-renderer") ? _v3.getNamedItem("bm-renderer").value : _v70() || "canvas";
      var _v4 = _v3.getNamedItem("data-anim-loop") ? _v3.getNamedItem("data-anim-loop").value : _v3.getNamedItem("data-bm-loop") ? _v3.getNamedItem("data-bm-loop").value : _v3.getNamedItem("bm-loop") ? _v3.getNamedItem("bm-loop").value : "";
      "false" === _v4 ? _v2.loop = !1 : "true" === _v4 ? _v2.loop = !0 : "" !== _v4 && (_v2.loop = parseInt(_v4, 10)), _v2.autoplay = "false" !== (_v3.getNamedItem("data-anim-autoplay") ? _v3.getNamedItem("data-anim-autoplay").value : _v3.getNamedItem("data-bm-autoplay") ? _v3.getNamedItem("data-bm-autoplay").value : !_v3.getNamedItem("bm-autoplay") || _v3.getNamedItem("bm-autoplay").value), _v2.name = _v3.getNamedItem("data-name") ? _v3.getNamedItem("data-name").value : _v3.getNamedItem("data-bm-name") ? _v3.getNamedItem("data-bm-name").value : _v3.getNamedItem("bm-name") ? _v3.getNamedItem("bm-name").value : "", "false" === (_v3.getNamedItem("data-anim-prerender") ? _v3.getNamedItem("data-anim-prerender").value : _v3.getNamedItem("data-bm-prerender") ? _v3.getNamedItem("data-bm-prerender").value : _v3.getNamedItem("bm-prerender") ? _v3.getNamedItem("bm-prerender").value : "") && (_v2.prerender = !1), _v2.path ? this.setParams(_v2) : this.trigger("destroy");
    }, _v72.prototype.includeLayers = function (_v0) {
      _v0.op > this.animationData.op && (this.animationData.op = _v0.op, this.totalFrames = Math.floor(_v0.op - this.animationData.ip));
      var _v1,
        _v2,
        _v3 = this.animationData.layers,
        _v4 = _v3.length,
        _v5 = _v0.layers,
        _v6 = _v5.length;
      for (_v2 = 0; _v2 < _v6; _v2 += 1) for (_v1 = 0; _v1 < _v4;) {
        if (_v3[_v1].id === _v5[_v2].id) {
          _v3[_v1] = _v5[_v2];
          break;
        }
        _v1 += 1;
      }
      if ((_v0.chars || _v0.fonts) && (this.renderer.globalData.fontManager.addChars(_v0.chars), this.renderer.globalData.fontManager.addFonts(_v0.fonts, this.renderer.globalData.defs)), _v0.assets) for (_v4 = _v0.assets.length, _v1 = 0; _v1 < _v4; _v1 += 1) this.animationData.assets.push(_v0.assets[_v1]);
      this.animationData.__complete = !1, _v62.completeAnimation(this.animationData, this.onSegmentComplete);
    }, _v72.prototype.onSegmentComplete = function (_v0) {
      this.animationData = _v0;
      var _v1 = _v53();
      _v1 && _v1.initExpressions(this), this.loadNextSegment();
    }, _v72.prototype.loadNextSegment = function () {
      var _v0 = this.animationData.segments;
      if (!_v0 || 0 === _v0.length || !this.autoloadSegments) {
        this.trigger("data_ready"), this.timeCompleted = this.totalFrames;
        return;
      }
      var _v1 = _v0.shift();
      this.timeCompleted = _v1.time * this.frameRate;
      var _v2 = this.path + this.fileName + "_" + this.segmentPos + ".json";
      this.segmentPos += 1, _v62.loadData(_v2, this.includeLayers.bind(this), function () {
        this.trigger("data_failed");
      }.bind(this));
    }, _v72.prototype.loadSegments = function () {
      this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment();
    }, _v72.prototype.imagesLoaded = function () {
      this.trigger("loaded_images"), this.checkLoaded();
    }, _v72.prototype.preloadImages = function () {
      this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this));
    }, _v72.prototype.configAnimation = function (_v0) {
      if (this.renderer) try {
        this.animationData = _v0, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(_v0), _v0.assets || (_v0.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 0, this.renderer.searchExtraCompositions(_v0.assets), this.markers = _v65(_v0.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause();
      } catch (_v0) {
        this.triggerConfigError(_v0);
      }
    }, _v72.prototype.waitForFontsLoaded = function () {
      this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20));
    }, _v72.prototype.checkLoaded = function () {
      if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || "canvas" !== this.renderer.rendererType) && this.imagePreloader.loadedFootages()) {
        this.isLoaded = !0;
        var _v0 = _v53();
        _v0 && _v0.initExpressions(this), this.renderer.initItems(), setTimeout(function () {
          this.trigger("DOMLoaded");
        }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play();
      }
    }, _v72.prototype.resize = function (_v0, _v1) {
      var _v2 = "number" == typeof _v0 ? _v0 : void 0,
        _v3 = "number" == typeof _v1 ? _v1 : void 0;
      this.renderer.updateContainerSize(_v2, _v3);
    }, _v72.prototype.setSubframe = function (_v0) {
      this.isSubframeEnabled = !!_v0;
    }, _v72.prototype.gotoFrame = function () {
      this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame");
    }, _v72.prototype.renderFrame = function () {
      if (!1 !== this.isLoaded && this.renderer) try {
        this.expressionsPlugin && this.expressionsPlugin.resetFrame(), this.renderer.renderFrame(this.currentFrame + this.firstFrame);
      } catch (_v0) {
        this.triggerRenderFrameError(_v0);
      }
    }, _v72.prototype.play = function (_v0) {
      (!_v0 || this.name === _v0) && !0 === this.isPaused && (this.isPaused = !1, this.trigger("_play"), this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")));
    }, _v72.prototype.pause = function (_v0) {
      _v0 && this.name !== _v0 || !1 === this.isPaused && (this.isPaused = !0, this.trigger("_pause"), this._idle = !0, this.trigger("_idle"), this.audioController.pause());
    }, _v72.prototype.togglePause = function (_v0) {
      _v0 && this.name !== _v0 || (!0 === this.isPaused ? this.play() : this.pause());
    }, _v72.prototype.stop = function (_v0) {
      _v0 && this.name !== _v0 || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0));
    }, _v72.prototype.getMarkerData = function (_v0) {
      for (var _v1, _v2 = 0; _v2 < this.markers.length; _v2 += 1) if ((_v1 = this.markers[_v2]).payload && _v1.payload.name === _v0) return _v1;
      return null;
    }, _v72.prototype.goToAndStop = function (_v0, _v1, _v2) {
      if (!_v2 || this.name === _v2) {
        var _v3 = Number(_v0);
        if (isNaN(_v3)) {
          var _v4 = this.getMarkerData(_v0);
          _v4 && this.goToAndStop(_v4.time, !0);
        } else _v1 ? this.setCurrentRawFrameValue(_v0) : this.setCurrentRawFrameValue(_v0 * this.frameModifier);
        this.pause();
      }
    }, _v72.prototype.goToAndPlay = function (_v0, _v1, _v2) {
      if (!_v2 || this.name === _v2) {
        var _v3 = Number(_v0);
        if (isNaN(_v3)) {
          var _v4 = this.getMarkerData(_v0);
          _v4 && (_v4.duration ? this.playSegments([_v4.time, _v4.time + _v4.duration], !0) : this.goToAndStop(_v4.time, !0));
        } else this.goToAndStop(_v3, _v1, _v2);
        this.play();
      }
    }, _v72.prototype.advanceTime = function (_v0) {
      if (!0 !== this.isPaused && !1 !== this.isLoaded) {
        var _v1 = this.currentRawFrame + _v0 * this.frameModifier,
          _v2 = !1;
        _v1 >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? _v1 >= this.totalFrames ? (this.playCount += 1, this.checkSegments(_v1 % this.totalFrames) || (this.setCurrentRawFrameValue(_v1 % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(_v1) : this.checkSegments(_v1 > this.totalFrames ? _v1 % this.totalFrames : 0) || (_v2 = !0, _v1 = this.totalFrames - 1) : _v1 < 0 ? this.checkSegments(_v1 % this.totalFrames) || (this.loop && !(this.playCount-- <= 0 && !0 !== this.loop) ? (this.setCurrentRawFrameValue(this.totalFrames + _v1 % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0) : (_v2 = !0, _v1 = 0)) : this.setCurrentRawFrameValue(_v1), _v2 && (this.setCurrentRawFrameValue(_v1), this.pause(), this.trigger("complete"));
      }
    }, _v72.prototype.adjustSegment = function (_v0, _v1) {
      this.playCount = 0, _v0[1] < _v0[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = _v0[0] - _v0[1], this.timeCompleted = this.totalFrames, this.firstFrame = _v0[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - _v1)) : _v0[1] > _v0[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = _v0[1] - _v0[0], this.timeCompleted = this.totalFrames, this.firstFrame = _v0[0], this.setCurrentRawFrameValue(.001 + _v1)), this.trigger("segmentStart");
    }, _v72.prototype.setSegment = function (_v0, _v1) {
      var _v2 = -1;
      this.isPaused && (this.currentRawFrame + this.firstFrame < _v0 ? _v2 = _v0 : this.currentRawFrame + this.firstFrame > _v1 && (_v2 = _v1 - _v0)), this.firstFrame = _v0, this.totalFrames = _v1 - _v0, this.timeCompleted = this.totalFrames, -1 !== _v2 && this.goToAndStop(_v2, !0);
    }, _v72.prototype.playSegments = function (_v0, _v1) {
      if (_v1 && (this.segments.length = 0), "object" === _v71(_v0[0])) {
        var _v2,
          _v3 = _v0.length;
        for (_v2 = 0; _v2 < _v3; _v2 += 1) this.segments.push(_v0[_v2]);
      } else this.segments.push(_v0);
      this.segments.length && _v1 && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play();
    }, _v72.prototype.resetSegments = function (_v0) {
      this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), _v0 && this.checkSegments(0);
    }, _v72.prototype.checkSegments = function (_v0) {
      return !!this.segments.length && (this.adjustSegment(this.segments.shift(), _v0), !0);
    }, _v72.prototype.destroy = function (_v0) {
      (!_v0 || this.name === _v0) && this.renderer && (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.expressionsPlugin = null, this.imagePreloader = null, this.projectInterface = null);
    }, _v72.prototype.setCurrentRawFrameValue = function (_v0) {
      this.currentRawFrame = _v0, this.gotoFrame();
    }, _v72.prototype.setSpeed = function (_v0) {
      this.playSpeed = _v0, this.updaFrameModifier();
    }, _v72.prototype.setDirection = function (_v0) {
      this.playDirection = _v0 < 0 ? -1 : 1, this.updaFrameModifier();
    }, _v72.prototype.setLoop = function (_v0) {
      this.loop = _v0;
    }, _v72.prototype.setVolume = function (_v0, _v1) {
      _v1 && this.name !== _v1 || this.audioController.setVolume(_v0);
    }, _v72.prototype.getVolume = function () {
      return this.audioController.getVolume();
    }, _v72.prototype.mute = function (_v0) {
      _v0 && this.name !== _v0 || this.audioController.mute();
    }, _v72.prototype.unmute = function (_v0) {
      _v0 && this.name !== _v0 || this.audioController.unmute();
    }, _v72.prototype.updaFrameModifier = function () {
      this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection);
    }, _v72.prototype.getPath = function () {
      return this.path;
    }, _v72.prototype.getAssetsPath = function (_v0) {
      var _v1 = "";
      if (_v0.e) _v1 = _v0.p;else if (this.assetsPath) {
        var _v2 = _v0.p;
        -1 !== _v2.indexOf("images/") && (_v2 = _v2.split("/")[1]), _v1 = this.assetsPath + _v2;
      } else _v1 = this.path + (_v0.u ? _v0.u : "") + _v0.p;
      return _v1;
    }, _v72.prototype.getAssetData = function (_v0) {
      for (var _v1 = 0, _v2 = this.assets.length; _v1 < _v2;) {
        if (_v0 === this.assets[_v1].id) return this.assets[_v1];
        _v1 += 1;
      }
      return null;
    }, _v72.prototype.hide = function () {
      this.renderer.hide();
    }, _v72.prototype.show = function () {
      this.renderer.show();
    }, _v72.prototype.getDuration = function (_v0) {
      return _v0 ? this.totalFrames : this.totalFrames / this.frameRate;
    }, _v72.prototype.updateDocumentData = function (_v0, _v1, _v2) {
      try {
        this.renderer.getElementByPath(_v0).updateDocumentData(_v1, _v2);
      } catch (_v0) {}
    }, _v72.prototype.trigger = function (_v0) {
      if (this._cbs && this._cbs[_v0]) switch (_v0) {
        case "enterFrame":
          this.triggerEvent(_v0, new _v35(_v0, this.currentFrame, this.totalFrames, this.frameModifier));
          break;
        case "drawnFrame":
          this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(_v0, this.drawnFrameEvent);
          break;
        case "loopComplete":
          this.triggerEvent(_v0, new _v37(_v0, this.loop, this.playCount, this.frameMult));
          break;
        case "complete":
          this.triggerEvent(_v0, new _v36(_v0, this.frameMult));
          break;
        case "segmentStart":
          this.triggerEvent(_v0, new _v38(_v0, this.firstFrame, this.totalFrames));
          break;
        case "destroy":
          this.triggerEvent(_v0, new _v39(_v0, this));
          break;
        default:
          this.triggerEvent(_v0);
      }
      "enterFrame" === _v0 && this.onEnterFrame && this.onEnterFrame.call(this, new _v35(_v0, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === _v0 && this.onLoopComplete && this.onLoopComplete.call(this, new _v37(_v0, this.loop, this.playCount, this.frameMult)), "complete" === _v0 && this.onComplete && this.onComplete.call(this, new _v36(_v0, this.frameMult)), "segmentStart" === _v0 && this.onSegmentStart && this.onSegmentStart.call(this, new _v38(_v0, this.firstFrame, this.totalFrames)), "destroy" === _v0 && this.onDestroy && this.onDestroy.call(this, new _v39(_v0, this));
    }, _v72.prototype.triggerRenderFrameError = function (_v0) {
      var _v1 = new _v40(_v0, this.currentFrame);
      this.triggerEvent("error", _v1), this.onError && this.onError.call(this, _v1);
    }, _v72.prototype.triggerConfigError = function (_v0) {
      var _v1 = new _v41(_v0, this.currentFrame);
      this.triggerEvent("error", _v1), this.onError && this.onError.call(this, _v1);
    };
    var _v73 = function () {
        var _v0 = {},
          _v1 = [],
          _v2 = 0,
          _v3 = 0,
          _v4 = 0,
          _v5 = !0,
          _v6 = !1;
        function _v7(_v0) {
          for (var _v1 = 0, _v2 = _v0.target; _v1 < _v3;) _v1[_v1].animation === _v2 && (_v1.splice(_v1, 1), _v1 -= 1, _v3 -= 1, _v2.isPaused || _v11()), _v1 += 1;
        }
        function _v8(_v0, _v1) {
          if (!_v0) return null;
          for (var _v2 = 0; _v2 < _v3;) {
            if (_v1[_v2].elem === _v0 && null !== _v1[_v2].elem) return _v1[_v2].animation;
            _v2 += 1;
          }
          var _v3 = new _v72();
          return _v12(_v3, _v0), _v3.setData(_v0, _v1), _v3;
        }
        function _v9() {
          var _v0,
            _v1 = _v1.length,
            _v2 = [];
          for (_v0 = 0; _v0 < _v1; _v0 += 1) _v2.push(_v1[_v0].animation);
          return _v2;
        }
        function _v10() {
          _v4 += 1, _v26();
        }
        function _v11() {
          _v4 -= 1;
        }
        function _v12(_v0, _v1) {
          _v0.addEventListener("destroy", _v7), _v0.addEventListener("_active", _v10), _v0.addEventListener("_idle", _v11), _v1.push({
            elem: _v1,
            animation: _v0
          }), _v3 += 1;
        }
        function _v13(_v0) {
          var _v1 = new _v72();
          return _v12(_v1, null), _v1.setParams(_v0), _v1;
        }
        function _v14(_v0, _v1) {
          var _v2;
          for (_v2 = 0; _v2 < _v3; _v2 += 1) _v1[_v2].animation.setSpeed(_v0, _v1);
        }
        function _v15(_v0, _v1) {
          var _v2;
          for (_v2 = 0; _v2 < _v3; _v2 += 1) _v1[_v2].animation.setDirection(_v0, _v1);
        }
        function _v16(_v0) {
          var _v1;
          for (_v1 = 0; _v1 < _v3; _v1 += 1) _v1[_v1].animation.play(_v0);
        }
        function _v17(_v0) {
          var _v1,
            _v2 = _v0 - _v2;
          for (_v1 = 0; _v1 < _v3; _v1 += 1) _v1[_v1].animation.advanceTime(_v2);
          _v2 = _v0, _v4 && !_v6 ? window.requestAnimationFrame(_v17) : _v5 = !0;
        }
        function _v18(_v0) {
          _v2 = _v0, window.requestAnimationFrame(_v17);
        }
        function _v19(_v0) {
          var _v1;
          for (_v1 = 0; _v1 < _v3; _v1 += 1) _v1[_v1].animation.pause(_v0);
        }
        function _v20(_v0, _v1, _v2) {
          var _v3;
          for (_v3 = 0; _v3 < _v3; _v3 += 1) _v1[_v3].animation.goToAndStop(_v0, _v1, _v2);
        }
        function _v21(_v0) {
          var _v1;
          for (_v1 = 0; _v1 < _v3; _v1 += 1) _v1[_v1].animation.stop(_v0);
        }
        function _v22(_v0) {
          var _v1;
          for (_v1 = 0; _v1 < _v3; _v1 += 1) _v1[_v1].animation.togglePause(_v0);
        }
        function _v23(_v0) {
          var _v1;
          for (_v1 = _v3 - 1; _v1 >= 0; _v1 -= 1) _v1[_v1].animation.destroy(_v0);
        }
        function _v24(_v0, _v1, _v2) {
          var _v3,
            _v4 = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
            _v5 = _v4.length;
          for (_v3 = 0; _v3 < _v5; _v3 += 1) _v2 && _v4[_v3].setAttribute("data-bm-type", _v2), _v8(_v4[_v3], _v0);
          if (_v1 && 0 === _v5) {
            _v2 || (_v2 = "svg");
            var _v6 = document.getElementsByTagName("body")[0];
            _v6.innerText = "";
            var _v7 = _v8("div");
            _v7.style.width = "100%", _v7.style.height = "100%", _v7.setAttribute("data-bm-type", _v2), _v6.appendChild(_v7), _v8(_v7, _v0);
          }
        }
        function _v25() {
          var _v0;
          for (_v0 = 0; _v0 < _v3; _v0 += 1) _v1[_v0].animation.resize();
        }
        function _v26() {
          !_v6 && _v4 && _v5 && (window.requestAnimationFrame(_v18), _v5 = !1);
        }
        function _v27() {
          _v6 = !0;
        }
        function _v28() {
          _v6 = !1, _v26();
        }
        function _v29(_v0, _v1) {
          var _v2;
          for (_v2 = 0; _v2 < _v3; _v2 += 1) _v1[_v2].animation.setVolume(_v0, _v1);
        }
        function _v30(_v0) {
          var _v1;
          for (_v1 = 0; _v1 < _v3; _v1 += 1) _v1[_v1].animation.mute(_v0);
        }
        function _v31(_v0) {
          var _v1;
          for (_v1 = 0; _v1 < _v3; _v1 += 1) _v1[_v1].animation.unmute(_v0);
        }
        return _v0.registerAnimation = _v8, _v0.loadAnimation = _v13, _v0.setSpeed = _v14, _v0.setDirection = _v15, _v0.play = _v16, _v0.pause = _v19, _v0.stop = _v21, _v0.togglePause = _v22, _v0.searchAnimations = _v24, _v0.resize = _v25, _v0.goToAndStop = _v20, _v0.destroy = _v23, _v0.freeze = _v27, _v0.unfreeze = _v28, _v0.setVolume = _v29, _v0.mute = _v30, _v0.unmute = _v31, _v0.getRegisteredAnimations = _v9, _v0;
      }(),
      _v74 = function () {
        var _v0 = {};
        _v0.getBezierEasing = _v2;
        var _v1 = {};
        function _v2(_v0, _v1, _v2, _v3, _v4) {
          var _v5 = _v4 || ("bez_" + _v0 + "_" + _v1 + "_" + _v2 + "_" + _v3).replace(/\./g, "p");
          if (_v1[_v5]) return _v1[_v5];
          var _v6 = new _v17([_v0, _v1, _v2, _v3]);
          return _v1[_v5] = _v6, _v6;
        }
        var _v3 = 4,
          _v4 = .001,
          _v5 = 1e-7,
          _v6 = 10,
          _v7 = 11,
          _v8 = .1,
          _v9 = "function" == typeof Float32Array;
        function _v10(_v0, _v1) {
          return 1 - 3 * _v1 + 3 * _v0;
        }
        function _v11(_v0, _v1) {
          return 3 * _v1 - 6 * _v0;
        }
        function _v12(_v0) {
          return 3 * _v0;
        }
        function _v13(_v0, _v1, _v2) {
          return ((_v10(_v1, _v2) * _v0 + _v11(_v1, _v2)) * _v0 + _v12(_v1)) * _v0;
        }
        function _v14(_v0, _v1, _v2) {
          return 3 * _v10(_v1, _v2) * _v0 * _v0 + 2 * _v11(_v1, _v2) * _v0 + _v12(_v1);
        }
        function _v15(_v0, _v1, _v2, _v3, _v4) {
          var _v5,
            _v6,
            _v7 = 0;
          do (_v5 = _v13(_v6 = _v1 + (_v2 - _v1) / 2, _v3, _v4) - _v0) > 0 ? _v2 = _v6 : _v1 = _v6; while (Math.abs(_v5) > _v5 && ++_v7 < _v6);
          return _v6;
        }
        function _v16(_v0, _v1, _v2, _v3) {
          for (var _v4 = 0; _v4 < _v3; ++_v4) {
            var _v5 = _v14(_v1, _v2, _v3);
            if (0 === _v5) break;
            var _v6 = _v13(_v1, _v2, _v3) - _v0;
            _v1 -= _v6 / _v5;
          }
          return _v1;
        }
        function _v17(_v0) {
          this._p = _v0, this._mSampleValues = _v9 ? new Float32Array(_v7) : Array(_v7), this._precomputed = !1, this.get = this.get.bind(this);
        }
        return _v17.prototype = {
          get: function (_v0) {
            var _v1 = this._p[0],
              _v2 = this._p[1],
              _v3 = this._p[2],
              _v4 = this._p[3];
            return (this._precomputed || this._precompute(), _v1 === _v2 && _v3 === _v4) ? _v0 : 0 === _v0 ? 0 : 1 === _v0 ? 1 : _v13(this._getTForX(_v0), _v2, _v4);
          },
          _precompute: function () {
            var _v0 = this._p[0],
              _v1 = this._p[1],
              _v2 = this._p[2],
              _v3 = this._p[3];
            this._precomputed = !0, (_v0 !== _v1 || _v2 !== _v3) && this._calcSampleValues();
          },
          _calcSampleValues: function () {
            for (var _v0 = this._p[0], _v1 = this._p[2], _v2 = 0; _v2 < _v7; ++_v2) this._mSampleValues[_v2] = _v13(_v2 * _v8, _v0, _v1);
          },
          _getTForX: function (_v0) {
            for (var _v1 = this._p[0], _v2 = this._p[2], _v3 = this._mSampleValues, _v4 = 0, _v5 = 1, _v6 = _v7 - 1; _v5 !== _v6 && _v3[_v5] <= _v0; ++_v5) _v4 += _v8;
            var _v7 = _v4 + (_v0 - _v3[--_v5]) / (_v3[_v5 + 1] - _v3[_v5]) * _v8,
              _v8 = _v14(_v7, _v1, _v2);
            return _v8 >= _v4 ? _v16(_v0, _v7, _v1, _v2) : 0 === _v8 ? _v7 : _v15(_v0, _v4, _v4 + _v8, _v1, _v2);
          }
        }, _v0;
      }(),
      _v75 = {
        double: function (_v0) {
          return _v0.concat(_v14(_v0.length));
        }
      },
      _v76 = function (_v0, _v1, _v2) {
        var _v3 = 0,
          _v4 = _v0,
          _v5 = _v14(_v4);
        return {
          newElement: function () {
            var _v0;
            return _v3 ? (_v3 -= 1, _v0 = _v5[_v3]) : _v0 = _v1(), _v0;
          },
          release: function (_v0) {
            _v3 === _v4 && (_v5 = _v75.double(_v5), _v4 *= 2), _v2 && _v2(_v0), _v5[_v3] = _v0, _v3 += 1;
          }
        };
      },
      _v77 = _v76(8, function () {
        return {
          addedLength: 0,
          percents: _v13("float32", _v57()),
          lengths: _v13("float32", _v57())
        };
      }),
      _v78 = _v76(8, function () {
        return {
          lengths: [],
          totalLength: 0
        };
      }, function (_v0) {
        var _v1,
          _v2 = _v0.lengths.length;
        for (_v1 = 0; _v1 < _v2; _v1 += 1) _v77.release(_v0.lengths[_v1]);
        _v0.lengths.length = 0;
      });
    function _v79() {
      var _v0,
        _v1 = Math;
      function _v2(_v0, _v1, _v2, _v3, _v4, _v5) {
        var _v6 = _v0 * _v3 + _v1 * _v4 + _v2 * _v5 - _v4 * _v3 - _v5 * _v0 - _v2 * _v1;
        return _v6 > -.001 && _v6 < .001;
      }
      function _v3(_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7, _v8) {
        if (0 === _v2 && 0 === _v5 && 0 === _v8) return _v2(_v0, _v1, _v3, _v4, _v6, _v7);
        var _v9,
          _v10 = _v1.sqrt(_v1.pow(_v3 - _v0, 2) + _v1.pow(_v4 - _v1, 2) + _v1.pow(_v5 - _v2, 2)),
          _v11 = _v1.sqrt(_v1.pow(_v6 - _v0, 2) + _v1.pow(_v7 - _v1, 2) + _v1.pow(_v8 - _v2, 2)),
          _v12 = _v1.sqrt(_v1.pow(_v6 - _v3, 2) + _v1.pow(_v7 - _v4, 2) + _v1.pow(_v8 - _v5, 2));
        return (_v9 = _v10 > _v11 ? _v10 > _v12 ? _v10 - _v11 - _v12 : _v12 - _v11 - _v10 : _v12 > _v11 ? _v12 - _v11 - _v10 : _v11 - _v10 - _v12) > -1e-4 && _v9 < 1e-4;
      }
      var _v4 = function (_v0, _v1, _v2, _v3) {
        var _v4,
          _v5,
          _v6,
          _v7,
          _v8,
          _v9,
          _v10 = _v57(),
          _v11 = 0,
          _v12 = [],
          _v13 = [],
          _v14 = _v77.newElement();
        for (_v6 = _v2.length, _v4 = 0; _v4 < _v10; _v4 += 1) {
          for (_v8 = _v4 / (_v10 - 1), _v9 = 0, _v5 = 0; _v5 < _v6; _v5 += 1) _v7 = _v22(1 - _v8, 3) * _v0[_v5] + 3 * _v22(1 - _v8, 2) * _v8 * _v2[_v5] + 3 * (1 - _v8) * _v22(_v8, 2) * _v3[_v5] + _v22(_v8, 3) * _v1[_v5], _v12[_v5] = _v7, null !== _v13[_v5] && (_v9 += _v22(_v12[_v5] - _v13[_v5], 2)), _v13[_v5] = _v12[_v5];
          _v9 && (_v11 += _v9 = _v23(_v9)), _v14.percents[_v4] = _v8, _v14.lengths[_v4] = _v11;
        }
        return _v14.addedLength = _v11, _v14;
      };
      function _v5(_v0) {
        var _v1,
          _v2 = _v78.newElement(),
          _v3 = _v0.c,
          _v4 = _v0.v,
          _v5 = _v0.o,
          _v6 = _v0.i,
          _v7 = _v0._length,
          _v8 = _v2.lengths,
          _v9 = 0;
        for (_v1 = 0; _v1 < _v7 - 1; _v1 += 1) _v8[_v1] = _v4(_v4[_v1], _v4[_v1 + 1], _v5[_v1], _v6[_v1 + 1]), _v9 += _v8[_v1].addedLength;
        return _v3 && _v7 && (_v8[_v1] = _v4(_v4[_v1], _v4[0], _v5[_v1], _v6[0]), _v9 += _v8[_v1].addedLength), _v2.totalLength = _v9, _v2;
      }
      function _v6(_v0) {
        this.segmentLength = 0, this.points = Array(_v0);
      }
      function _v7(_v0, _v1) {
        this.partialLength = _v0, this.point = _v1;
      }
      var _v8 = (_v0 = {}, function (_v0, _v1, _v2, _v3) {
        var _v4 = (_v0[0] + "_" + _v0[1] + "_" + _v1[0] + "_" + _v1[1] + "_" + _v2[0] + "_" + _v2[1] + "_" + _v3[0] + "_" + _v3[1]).replace(/\./g, "p");
        if (!_v0[_v4]) {
          var _v5,
            _v6,
            _v7,
            _v8,
            _v9,
            _v10,
            _v11,
            _v12 = _v57(),
            _v13 = 0,
            _v14 = null;
          2 === _v0.length && (_v0[0] !== _v1[0] || _v0[1] !== _v1[1]) && _v2(_v0[0], _v0[1], _v1[0], _v1[1], _v0[0] + _v2[0], _v0[1] + _v2[1]) && _v2(_v0[0], _v0[1], _v1[0], _v1[1], _v1[0] + _v3[0], _v1[1] + _v3[1]) && (_v12 = 2);
          var _v15 = new _v6(_v12);
          for (_v7 = _v2.length, _v5 = 0; _v5 < _v12; _v5 += 1) {
            for (_v11 = _v14(_v7), _v9 = _v5 / (_v12 - 1), _v10 = 0, _v6 = 0; _v6 < _v7; _v6 += 1) _v8 = _v22(1 - _v9, 3) * _v0[_v6] + 3 * _v22(1 - _v9, 2) * _v9 * (_v0[_v6] + _v2[_v6]) + 3 * (1 - _v9) * _v22(_v9, 2) * (_v1[_v6] + _v3[_v6]) + _v22(_v9, 3) * _v1[_v6], _v11[_v6] = _v8, null !== _v14 && (_v10 += _v22(_v11[_v6] - _v14[_v6], 2));
            _v13 += _v10 = _v23(_v10), _v15.points[_v5] = new _v7(_v10, _v11), _v14 = _v11;
          }
          _v15.segmentLength = _v13, _v0[_v4] = _v15;
        }
        return _v0[_v4];
      });
      function _v9(_v0, _v1) {
        var _v2 = _v1.percents,
          _v3 = _v1.lengths,
          _v4 = _v2.length,
          _v5 = _v24((_v4 - 1) * _v0),
          _v6 = _v0 * _v1.addedLength,
          _v7 = 0;
        if (_v5 === _v4 - 1 || 0 === _v5 || _v6 === _v3[_v5]) return _v2[_v5];
        for (var _v8 = _v3[_v5] > _v6 ? -1 : 1, _v9 = !0; _v9;) if (_v3[_v5] <= _v6 && _v3[_v5 + 1] > _v6 ? (_v7 = (_v6 - _v3[_v5]) / (_v3[_v5 + 1] - _v3[_v5]), _v9 = !1) : _v5 += _v8, _v5 < 0 || _v5 >= _v4 - 1) {
          if (_v5 === _v4 - 1) return _v2[_v5];
          _v9 = !1;
        }
        return _v2[_v5] + (_v2[_v5 + 1] - _v2[_v5]) * _v7;
      }
      function _v10(_v0, _v1, _v2, _v3, _v4, _v5) {
        var _v6 = _v9(_v4, _v5),
          _v7 = 1 - _v6;
        return [_v1.round((_v7 * _v7 * _v7 * _v0[0] + (_v6 * _v7 * _v7 + _v7 * _v6 * _v7 + _v7 * _v7 * _v6) * _v2[0] + (_v6 * _v6 * _v7 + _v7 * _v6 * _v6 + _v6 * _v7 * _v6) * _v3[0] + _v6 * _v6 * _v6 * _v1[0]) * 0) / 0, _v1.round((_v7 * _v7 * _v7 * _v0[1] + (_v6 * _v7 * _v7 + _v7 * _v6 * _v7 + _v7 * _v7 * _v6) * _v2[1] + (_v6 * _v6 * _v7 + _v7 * _v6 * _v6 + _v6 * _v7 * _v6) * _v3[1] + _v6 * _v6 * _v6 * _v1[1]) * 0) / 0];
      }
      var _v11 = _v13("float32", 8);
      return {
        getSegmentsLength: _v5,
        getNewSegment: function (_v0, _v1, _v2, _v3, _v4, _v5, _v6) {
          _v4 < 0 ? _v4 = 0 : _v4 > 1 && (_v4 = 1);
          var _v7,
            _v8 = _v9(_v4, _v6),
            _v9 = _v9(_v5 = _v5 > 1 ? 1 : _v5, _v6),
            _v10 = _v0.length,
            _v11 = 1 - _v8,
            _v12 = 1 - _v9,
            _v13 = _v11 * _v11 * _v11,
            _v14 = _v8 * _v11 * _v11 * 3,
            _v15 = _v8 * _v8 * _v11 * 3,
            _v16 = _v8 * _v8 * _v8,
            _v17 = _v11 * _v11 * _v12,
            _v18 = _v8 * _v11 * _v12 + _v11 * _v8 * _v12 + _v11 * _v11 * _v9,
            _v19 = _v8 * _v8 * _v12 + _v11 * _v8 * _v9 + _v8 * _v11 * _v9,
            _v20 = _v8 * _v8 * _v9,
            _v21 = _v11 * _v12 * _v12,
            _v22 = _v8 * _v12 * _v12 + _v11 * _v9 * _v12 + _v11 * _v12 * _v9,
            _v23 = _v8 * _v9 * _v12 + _v11 * _v9 * _v9 + _v8 * _v12 * _v9,
            _v24 = _v8 * _v9 * _v9,
            _v25 = _v12 * _v12 * _v12,
            _v26 = _v9 * _v12 * _v12 + _v12 * _v9 * _v12 + _v12 * _v12 * _v9,
            _v27 = _v9 * _v9 * _v12 + _v12 * _v9 * _v9 + _v9 * _v12 * _v9,
            _v28 = _v9 * _v9 * _v9;
          for (_v7 = 0; _v7 < _v10; _v7 += 1) _v11[4 * _v7] = _v1.round((_v13 * _v0[_v7] + _v14 * _v2[_v7] + _v15 * _v3[_v7] + _v16 * _v1[_v7]) * 0) / 0, _v11[4 * _v7 + 1] = _v1.round((_v17 * _v0[_v7] + _v18 * _v2[_v7] + _v19 * _v3[_v7] + _v20 * _v1[_v7]) * 0) / 0, _v11[4 * _v7 + 2] = _v1.round((_v21 * _v0[_v7] + _v22 * _v2[_v7] + _v23 * _v3[_v7] + _v24 * _v1[_v7]) * 0) / 0, _v11[4 * _v7 + 3] = _v1.round((_v25 * _v0[_v7] + _v26 * _v2[_v7] + _v27 * _v3[_v7] + _v28 * _v1[_v7]) * 0) / 0;
          return _v11;
        },
        getPointInSegment: _v10,
        buildBezierData: _v8,
        pointOnLine2D: _v2,
        pointOnLine3D: _v3
      };
    }
    var _v80 = _v79(),
      _v81 = _v3,
      _v82 = Math.abs;
    function _v83(_v0, _v1) {
      var _v2,
        _v3,
        _v4,
        _v5,
        _v6,
        _v7 = this.offsetTime;
      "multidimensional" === this.propType && (_v16 = _v13("float32", this.pv.length));
      for (var _v8 = _v1.lastIndex, _v9 = _v8, _v10 = this.keyframes.length - 1, _v11 = !0; _v11;) {
        if (_v17 = this.keyframes[_v9], _v18 = this.keyframes[_v9 + 1], _v9 === _v10 - 1 && _v0 >= _v18.t - _v7) {
          _v17.h && (_v17 = _v18), _v8 = 0;
          break;
        }
        if (_v18.t - _v7 > _v0) {
          _v8 = _v9;
          break;
        }
        _v9 < _v10 - 1 ? _v9 += 1 : (_v8 = 0, _v11 = !1);
      }
      _v19 = this.keyframesMetadata[_v9] || {};
      var _v12 = _v18.t - _v7,
        _v13 = _v17.t - _v7;
      if (_v17.to) {
        _v19.bezierData || (_v19.bezierData = _v80.buildBezierData(_v17.s, _v18.s || _v17.e, _v17.to, _v17.ti));
        var _v14 = _v19.bezierData;
        if (_v0 >= _v12 || _v0 < _v13) {
          var _v15 = _v0 >= _v12 ? _v14.points.length - 1 : 0;
          for (_v21 = _v14.points[_v15].point.length, _v20 = 0; _v20 < _v21; _v20 += 1) _v16[_v20] = _v14.points[_v15].point[_v20];
        } else {
          _v19.__fnct ? _v24 = _v19.__fnct : _v19.__fnct = _v24 = _v74.getBezierEasing(_v17.o.x, _v17.o.y, _v17.i.x, _v17.i.y, _v17.n).get;
          var _v16,
            _v17,
            _v18,
            _v19,
            _v20,
            _v21,
            _v22,
            _v23,
            _v24,
            _v25,
            _v26,
            _v27 = _v24((_v0 - _v13) / (_v12 - _v13)),
            _v28 = _v14.segmentLength * _v27,
            _v29 = _v1.lastFrame < _v0 && _v1._lastKeyframeIndex === _v9 ? _v1._lastAddedLength : 0;
          for (_v23 = _v1.lastFrame < _v0 && _v1._lastKeyframeIndex === _v9 ? _v1._lastPoint : 0, _v11 = !0, _v22 = _v14.points.length; _v11;) {
            if (_v29 += _v14.points[_v23].partialLength, 0 === _v28 || 0 === _v27 || _v23 === _v14.points.length - 1) {
              for (_v21 = _v14.points[_v23].point.length, _v20 = 0; _v20 < _v21; _v20 += 1) _v16[_v20] = _v14.points[_v23].point[_v20];
              break;
            }
            if (_v28 >= _v29 && _v28 < _v29 + _v14.points[_v23 + 1].partialLength) {
              for (_v26 = (_v28 - _v29) / _v14.points[_v23 + 1].partialLength, _v21 = _v14.points[_v23].point.length, _v20 = 0; _v20 < _v21; _v20 += 1) _v16[_v20] = _v14.points[_v23].point[_v20] + (_v14.points[_v23 + 1].point[_v20] - _v14.points[_v23].point[_v20]) * _v26;
              break;
            }
            _v23 < _v22 - 1 ? _v23 += 1 : _v11 = !1;
          }
          _v1._lastPoint = _v23, _v1._lastAddedLength = _v29 - _v14.points[_v23].partialLength, _v1._lastKeyframeIndex = _v9;
        }
      } else if (_v10 = _v17.s.length, _v25 = _v18.s || _v17.e, this.sh && 1 !== _v17.h) _v0 >= _v12 ? (_v16[0] = _v25[0], _v16[1] = _v25[1], _v16[2] = _v25[2]) : _v0 <= _v13 ? (_v16[0] = _v17.s[0], _v16[1] = _v17.s[1], _v16[2] = _v17.s[2]) : _v85(_v16, _v84(_v86(_v17.s), _v86(_v25), (_v0 - _v13) / (_v12 - _v13)));else for (_v9 = 0; _v9 < _v10; _v9 += 1) 1 !== _v17.h && (_v0 >= _v12 ? _v27 = 1 : _v0 < _v13 ? _v27 = 0 : (_v17.o.x.constructor === Array ? (_v19.__fnct || (_v19.__fnct = []), _v19.__fnct[_v9] ? _v24 = _v19.__fnct[_v9] : (_v2 = void 0 === _v17.o.x[_v9] ? _v17.o.x[0] : _v17.o.x[_v9], _v3 = void 0 === _v17.o.y[_v9] ? _v17.o.y[0] : _v17.o.y[_v9], _v4 = void 0 === _v17.i.x[_v9] ? _v17.i.x[0] : _v17.i.x[_v9], _v5 = void 0 === _v17.i.y[_v9] ? _v17.i.y[0] : _v17.i.y[_v9], _v24 = _v74.getBezierEasing(_v2, _v3, _v4, _v5).get, _v19.__fnct[_v9] = _v24)) : _v19.__fnct ? _v24 = _v19.__fnct : (_v2 = _v17.o.x, _v3 = _v17.o.y, _v4 = _v17.i.x, _v5 = _v17.i.y, _v24 = _v74.getBezierEasing(_v2, _v3, _v4, _v5).get, _v17.keyframeMetadata = _v24), _v27 = _v24((_v0 - _v13) / (_v12 - _v13)))), _v25 = _v18.s || _v17.e, _v6 = 1 === _v17.h ? _v17.s[_v9] : _v17.s[_v9] + (_v25[_v9] - _v17.s[_v9]) * _v27, "multidimensional" === this.propType ? _v16[_v9] = _v6 : _v16 = _v6;
      return _v1.lastIndex = _v8, _v16;
    }
    function _v84(_v0, _v1, _v2) {
      var _v3,
        _v4,
        _v5,
        _v6,
        _v7,
        _v8 = [],
        _v9 = _v0[0],
        _v10 = _v0[1],
        _v11 = _v0[2],
        _v12 = _v0[3],
        _v13 = _v1[0],
        _v14 = _v1[1],
        _v15 = _v1[2],
        _v16 = _v1[3];
      return (_v4 = _v9 * _v13 + _v10 * _v14 + _v11 * _v15 + _v12 * _v16) < 0 && (_v4 = -_v4, _v13 = -_v13, _v14 = -_v14, _v15 = -_v15, _v16 = -_v16), 1 - _v4 > 1e-6 ? (_v5 = Math.sin(_v3 = Math.acos(_v4)), _v6 = Math.sin((1 - _v2) * _v3) / _v5, _v7 = Math.sin(_v2 * _v3) / _v5) : (_v6 = 1 - _v2, _v7 = _v2), _v8[0] = _v6 * _v9 + _v7 * _v13, _v8[1] = _v6 * _v10 + _v7 * _v14, _v8[2] = _v6 * _v11 + _v7 * _v15, _v8[3] = _v6 * _v12 + _v7 * _v16, _v8;
    }
    function _v85(_v0, _v1) {
      var _v2 = _v1[0],
        _v3 = _v1[1],
        _v4 = _v1[2],
        _v5 = _v1[3],
        _v6 = Math.atan2(2 * _v3 * _v5 - 2 * _v2 * _v4, 1 - 2 * _v3 * _v3 - 2 * _v4 * _v4),
        _v7 = Math.asin(2 * _v2 * _v3 + 2 * _v4 * _v5),
        _v8 = Math.atan2(2 * _v2 * _v5 - 2 * _v3 * _v4, 1 - 2 * _v2 * _v2 - 2 * _v4 * _v4);
      _v0[0] = _v6 / _v30, _v0[1] = _v7 / _v30, _v0[2] = _v8 / _v30;
    }
    function _v86(_v0) {
      var _v1 = _v0[0] * _v30,
        _v2 = _v0[1] * _v30,
        _v3 = _v0[2] * _v30,
        _v4 = Math.cos(_v1 / 2),
        _v5 = Math.cos(_v2 / 2),
        _v6 = Math.cos(_v3 / 2),
        _v7 = Math.sin(_v1 / 2),
        _v8 = Math.sin(_v2 / 2),
        _v9 = Math.sin(_v3 / 2),
        _v10 = _v4 * _v5 * _v6 - _v7 * _v8 * _v9;
      return [_v7 * _v8 * _v6 + _v4 * _v5 * _v9, _v7 * _v5 * _v6 + _v4 * _v8 * _v9, _v4 * _v8 * _v6 - _v7 * _v5 * _v9, _v10];
    }
    function _v87() {
      var _v0 = this.comp.renderedFrame - this.offsetTime,
        _v1 = this.keyframes[0].t - this.offsetTime,
        _v2 = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
      if (!(_v0 === this._caching.lastFrame || this._caching.lastFrame !== _v81 && (this._caching.lastFrame >= _v2 && _v0 >= _v2 || this._caching.lastFrame < _v1 && _v0 < _v1))) {
        this._caching.lastFrame >= _v0 && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
        var _v3 = this.interpolateValue(_v0, this._caching);
        this.pv = _v3;
      }
      return this._caching.lastFrame = _v0, this.pv;
    }
    function _v88(_v0) {
      var _v1;
      if ("unidimensional" === this.propType) _v1 = _v0 * this.mult, _v82(this.v - _v1) > 1e-5 && (this.v = _v1, this._mdf = !0);else for (var _v2 = 0, _v3 = this.v.length; _v2 < _v3;) _v1 = _v0[_v2] * this.mult, _v82(this.v[_v2] - _v1) > 1e-5 && (this.v[_v2] = _v1, this._mdf = !0), _v2 += 1;
    }
    function _v89() {
      if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length) {
        if (this.lock) return void this.setVValue(this.pv);
        this.lock = !0, this._mdf = this._isFirstFrame;
        var _v0,
          _v1 = this.effectsSequence.length,
          _v2 = this.kf ? this.pv : this.data.k;
        for (_v0 = 0; _v0 < _v1; _v0 += 1) _v2 = this.effectsSequence[_v0](_v2);
        this.setVValue(_v2), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId;
      }
    }
    function _v90(_v0) {
      this.effectsSequence.push(_v0), this.container.addDynamicProperty(this);
    }
    function _v91(_v0, _v1, _v2, _v3) {
      this.propType = "unidimensional", this.mult = _v2 || 1, this.data = _v1, this.v = _v2 ? _v1.k * _v2 : _v1.k, this.pv = _v1.k, this._mdf = !1, this.elem = _v0, this.container = _v3, this.comp = _v0.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = _v89, this.setVValue = _v88, this.addEffect = _v90;
    }
    function _v92(_v0, _v1, _v2, _v3) {
      this.propType = "multidimensional", this.mult = _v2 || 1, this.data = _v1, this._mdf = !1, this.elem = _v0, this.container = _v3, this.comp = _v0.comp, this.k = !1, this.kf = !1, this.frameId = -1;
      var _v4,
        _v5 = _v1.k.length;
      for (this.v = _v13("float32", _v5), this.pv = _v13("float32", _v5), this.vel = _v13("float32", _v5), _v4 = 0; _v4 < _v5; _v4 += 1) this.v[_v4] = _v1.k[_v4] * this.mult, this.pv[_v4] = _v1.k[_v4];
      this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = _v89, this.setVValue = _v88, this.addEffect = _v90;
    }
    function _v93(_v0, _v1, _v2, _v3) {
      this.propType = "unidimensional", this.keyframes = _v1.k, this.keyframesMetadata = [], this.offsetTime = _v0.data.st, this.frameId = -1, this._caching = {
        lastFrame: _v81,
        lastIndex: 0,
        value: 0,
        _lastKeyframeIndex: -1
      }, this.k = !0, this.kf = !0, this.data = _v1, this.mult = _v2 || 1, this.elem = _v0, this.container = _v3, this.comp = _v0.comp, this.v = _v81, this.pv = _v81, this._isFirstFrame = !0, this.getValue = _v89, this.setVValue = _v88, this.interpolateValue = _v83, this.effectsSequence = [_v87.bind(this)], this.addEffect = _v90;
    }
    function _v94(_v0, _v1, _v2, _v3) {
      this.propType = "multidimensional";
      var _v4,
        _v5,
        _v6,
        _v7,
        _v8,
        _v9 = _v1.k.length;
      for (_v4 = 0; _v4 < _v9 - 1; _v4 += 1) _v1.k[_v4].to && _v1.k[_v4].s && _v1.k[_v4 + 1] && _v1.k[_v4 + 1].s && (_v5 = _v1.k[_v4].s, _v6 = _v1.k[_v4 + 1].s, _v7 = _v1.k[_v4].to, _v8 = _v1.k[_v4].ti, (2 === _v5.length && (_v5[0] !== _v6[0] || _v5[1] !== _v6[1]) && _v80.pointOnLine2D(_v5[0], _v5[1], _v6[0], _v6[1], _v5[0] + _v7[0], _v5[1] + _v7[1]) && _v80.pointOnLine2D(_v5[0], _v5[1], _v6[0], _v6[1], _v6[0] + _v8[0], _v6[1] + _v8[1]) || 3 === _v5.length && (_v5[0] !== _v6[0] || _v5[1] !== _v6[1] || _v5[2] !== _v6[2]) && _v80.pointOnLine3D(_v5[0], _v5[1], _v5[2], _v6[0], _v6[1], _v6[2], _v5[0] + _v7[0], _v5[1] + _v7[1], _v5[2] + _v7[2]) && _v80.pointOnLine3D(_v5[0], _v5[1], _v5[2], _v6[0], _v6[1], _v6[2], _v6[0] + _v8[0], _v6[1] + _v8[1], _v6[2] + _v8[2])) && (_v1.k[_v4].to = null, _v1.k[_v4].ti = null), _v5[0] === _v6[0] && _v5[1] === _v6[1] && 0 === _v7[0] && 0 === _v7[1] && 0 === _v8[0] && 0 === _v8[1] && (2 === _v5.length || _v5[2] === _v6[2] && 0 === _v7[2] && 0 === _v8[2]) && (_v1.k[_v4].to = null, _v1.k[_v4].ti = null));
      this.effectsSequence = [_v87.bind(this)], this.data = _v1, this.keyframes = _v1.k, this.keyframesMetadata = [], this.offsetTime = _v0.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = _v2 || 1, this.elem = _v0, this.container = _v3, this.comp = _v0.comp, this.getValue = _v89, this.setVValue = _v88, this.interpolateValue = _v83, this.frameId = -1;
      var _v10 = _v1.k[0].s.length;
      for (this.v = _v13("float32", _v10), this.pv = _v13("float32", _v10), _v4 = 0; _v4 < _v10; _v4 += 1) this.v[_v4] = _v81, this.pv[_v4] = _v81;
      this._caching = {
        lastFrame: _v81,
        lastIndex: 0,
        value: _v13("float32", _v10)
      }, this.addEffect = _v90;
    }
    var _v95 = {
      getProp: function (_v0, _v1, _v2, _v3, _v4) {
        var _v5;
        if (_v1.sid && (_v1 = _v0.globalData.slotManager.getProp(_v1)), _v1.k.length) {
          if ("number" == typeof _v1.k[0]) _v5 = new _v92(_v0, _v1, _v3, _v4);else switch (_v2) {
            case 0:
              _v5 = new _v93(_v0, _v1, _v3, _v4);
              break;
            case 1:
              _v5 = new _v94(_v0, _v1, _v3, _v4);
          }
        } else _v5 = new _v91(_v0, _v1, _v3, _v4);
        return _v5.effectsSequence.length && _v4.addDynamicProperty(_v5), _v5;
      }
    };
    function _v96() {}
    _v96.prototype = {
      addDynamicProperty: function (_v0) {
        -1 === this.dynamicProperties.indexOf(_v0) && (this.dynamicProperties.push(_v0), this.container.addDynamicProperty(this), this._isAnimated = !0);
      },
      iterateDynamicProperties: function () {
        this._mdf = !1;
        var _v0,
          _v1 = this.dynamicProperties.length;
        for (_v0 = 0; _v0 < _v1; _v0 += 1) this.dynamicProperties[_v0].getValue(), this.dynamicProperties[_v0]._mdf && (this._mdf = !0);
      },
      initDynamicPropertyContainer: function (_v0) {
        this.container = _v0, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1;
      }
    };
    var _v97 = _v76(8, function () {
      return _v13("float32", 2);
    });
    function _v98() {
      this.c = !1, this._length = 0, this._maxLength = 8, this.v = _v14(this._maxLength), this.o = _v14(this._maxLength), this.i = _v14(this._maxLength);
    }
    _v98.prototype.setPathData = function (_v0, _v1) {
      this.c = _v0, this.setLength(_v1);
      for (var _v2 = 0; _v2 < _v1;) this.v[_v2] = _v97.newElement(), this.o[_v2] = _v97.newElement(), this.i[_v2] = _v97.newElement(), _v2 += 1;
    }, _v98.prototype.setLength = function (_v0) {
      for (; this._maxLength < _v0;) this.doubleArrayLength();
      this._length = _v0;
    }, _v98.prototype.doubleArrayLength = function () {
      this.v = this.v.concat(_v14(this._maxLength)), this.i = this.i.concat(_v14(this._maxLength)), this.o = this.o.concat(_v14(this._maxLength)), this._maxLength *= 2;
    }, _v98.prototype.setXYAt = function (_v0, _v1, _v2, _v3, _v4) {
      var _v5;
      switch (this._length = Math.max(this._length, _v3 + 1), this._length >= this._maxLength && this.doubleArrayLength(), _v2) {
        case "v":
          _v5 = this.v;
          break;
        case "i":
          _v5 = this.i;
          break;
        case "o":
          _v5 = this.o;
          break;
        default:
          _v5 = [];
      }
      _v5[_v3] && (!_v5[_v3] || _v4) || (_v5[_v3] = _v97.newElement()), _v5[_v3][0] = _v0, _v5[_v3][1] = _v1;
    }, _v98.prototype.setTripleAt = function (_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7) {
      this.setXYAt(_v0, _v1, "v", _v6, _v7), this.setXYAt(_v2, _v3, "o", _v6, _v7), this.setXYAt(_v4, _v5, "i", _v6, _v7);
    }, _v98.prototype.reverse = function () {
      var _v0,
        _v1 = new _v98();
      _v1.setPathData(this.c, this._length);
      var _v2 = this.v,
        _v3 = this.o,
        _v4 = this.i,
        _v5 = 0;
      this.c && (_v1.setTripleAt(_v2[0][0], _v2[0][1], _v4[0][0], _v4[0][1], _v3[0][0], _v3[0][1], 0, !1), _v5 = 1);
      var _v6 = this._length - 1,
        _v7 = this._length;
      for (_v0 = _v5; _v0 < _v7; _v0 += 1) _v1.setTripleAt(_v2[_v6][0], _v2[_v6][1], _v4[_v6][0], _v4[_v6][1], _v3[_v6][0], _v3[_v6][1], _v0, !1), _v6 -= 1;
      return _v1;
    }, _v98.prototype.length = function () {
      return this._length;
    };
    var _v99 = function () {
      function _v0(_v0) {
        var _v1,
          _v2 = _v1.newElement(),
          _v3 = void 0 === _v0._length ? _v0.v.length : _v0._length;
        for (_v2.setLength(_v3), _v2.c = _v0.c, _v1 = 0; _v1 < _v3; _v1 += 1) _v2.setTripleAt(_v0.v[_v1][0], _v0.v[_v1][1], _v0.o[_v1][0], _v0.o[_v1][1], _v0.i[_v1][0], _v0.i[_v1][1], _v1);
        return _v2;
      }
      var _v1 = _v76(4, function () {
        return new _v98();
      }, function (_v0) {
        var _v1,
          _v2 = _v0._length;
        for (_v1 = 0; _v1 < _v2; _v1 += 1) _v97.release(_v0.v[_v1]), _v97.release(_v0.i[_v1]), _v97.release(_v0.o[_v1]), _v0.v[_v1] = null, _v0.i[_v1] = null, _v0.o[_v1] = null;
        _v0._length = 0, _v0.c = !1;
      });
      return _v1.clone = _v0, _v1;
    }();
    function _v100() {
      this._length = 0, this._maxLength = 4, this.shapes = _v14(this._maxLength);
    }
    _v100.prototype.addShape = function (_v0) {
      this._length === this._maxLength && (this.shapes = this.shapes.concat(_v14(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = _v0, this._length += 1;
    }, _v100.prototype.releaseShapes = function () {
      var _v0;
      for (_v0 = 0; _v0 < this._length; _v0 += 1) _v99.release(this.shapes[_v0]);
      this._length = 0;
    };
    var _v101 = function () {
        var _v0 = {
            newShapeCollection: _v4,
            release: _v5
          },
          _v1 = 0,
          _v2 = 4,
          _v3 = _v14(4);
        function _v4() {
          var _v0;
          return _v1 ? (_v1 -= 1, _v0 = _v3[_v1]) : _v0 = new _v100(), _v0;
        }
        function _v5(_v0) {
          var _v1,
            _v2 = _v0._length;
          for (_v1 = 0; _v1 < _v2; _v1 += 1) _v99.release(_v0.shapes[_v1]);
          _v0._length = 0, _v1 === _v2 && (_v3 = _v75.double(_v3), _v2 *= 2), _v3[_v1] = _v0, _v1 += 1;
        }
        return _v0;
      }(),
      _v102 = function () {
        var _v0 = 0;
        function _v1(_v0, _v1, _v2) {
          var _v3 = _v2.lastIndex,
            _v4 = this.keyframes;
          if (_v0 < _v4[0].t - this.offsetTime) _v5 = _v4[0].s[0], _v7 = !0, _v3 = 0;else if (_v0 >= _v4[_v4.length - 1].t - this.offsetTime) _v5 = _v4[_v4.length - 1].s ? _v4[_v4.length - 1].s[0] : _v4[_v4.length - 2].e[0], _v7 = !0;else {
            for (var _v5, _v6, _v7, _v8, _v9, _v10, _v11, _v12, _v13, _v14, _v15, _v16, _v17, _v18 = _v3, _v19 = _v4.length - 1, _v20 = !0; _v20 && (_v14 = _v4[_v18], !((_v15 = _v4[_v18 + 1]).t - this.offsetTime > _v0));) _v18 < _v19 - 1 ? _v18 += 1 : _v20 = !1;
            _v16 = this.keyframesMetadata[_v18] || {}, _v7 = 1 === _v14.h, _v3 = _v18, _v7 || (_v0 >= _v15.t - this.offsetTime ? _v12 = 1 : _v0 < _v14.t - this.offsetTime ? _v12 = 0 : (_v16.__fnct ? _v17 = _v16.__fnct : _v16.__fnct = _v17 = _v74.getBezierEasing(_v14.o.x, _v14.o.y, _v14.i.x, _v14.i.y).get, _v12 = _v17((_v0 - (_v14.t - this.offsetTime)) / (_v15.t - this.offsetTime - (_v14.t - this.offsetTime)))), _v6 = _v15.s ? _v15.s[0] : _v14.e[0]), _v5 = _v14.s[0];
          }
          for (_v10 = _v1._length, _v11 = _v5.i[0].length, _v2.lastIndex = _v3, _v8 = 0; _v8 < _v10; _v8 += 1) for (_v9 = 0; _v9 < _v11; _v9 += 1) _v13 = _v7 ? _v5.i[_v8][_v9] : _v5.i[_v8][_v9] + (_v6.i[_v8][_v9] - _v5.i[_v8][_v9]) * _v12, _v1.i[_v8][_v9] = _v13, _v13 = _v7 ? _v5.o[_v8][_v9] : _v5.o[_v8][_v9] + (_v6.o[_v8][_v9] - _v5.o[_v8][_v9]) * _v12, _v1.o[_v8][_v9] = _v13, _v13 = _v7 ? _v5.v[_v8][_v9] : _v5.v[_v8][_v9] + (_v6.v[_v8][_v9] - _v5.v[_v8][_v9]) * _v12, _v1.v[_v8][_v9] = _v13;
        }
        function _v2() {
          var _v0 = this.comp.renderedFrame - this.offsetTime,
            _v1 = this.keyframes[0].t - this.offsetTime,
            _v2 = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
            _v3 = this._caching.lastFrame;
          return _v3 !== _v0 && (_v3 < _v1 && _v0 < _v1 || _v3 > _v2 && _v0 > _v2) || (this._caching.lastIndex = _v3 < _v0 ? this._caching.lastIndex : 0, this.interpolateShape(_v0, this.pv, this._caching)), this._caching.lastFrame = _v0, this.pv;
        }
        function _v3() {
          this.paths = this.localShapeCollection;
        }
        function _v4(_v0, _v1) {
          if (_v0._length !== _v1._length || _v0.c !== _v1.c) return !1;
          var _v2,
            _v3 = _v0._length;
          for (_v2 = 0; _v2 < _v3; _v2 += 1) if (_v0.v[_v2][0] !== _v1.v[_v2][0] || _v0.v[_v2][1] !== _v1.v[_v2][1] || _v0.o[_v2][0] !== _v1.o[_v2][0] || _v0.o[_v2][1] !== _v1.o[_v2][1] || _v0.i[_v2][0] !== _v1.i[_v2][0] || _v0.i[_v2][1] !== _v1.i[_v2][1]) return !1;
          return !0;
        }
        function _v5(_v0) {
          _v4(this.v, _v0) || (this.v = _v99.clone(_v0), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection);
        }
        function _v6() {
          if (this.elem.globalData.frameId !== this.frameId) {
            if (!this.effectsSequence.length) {
              this._mdf = !1;
              return;
            }
            if (this.lock) return void this.setVValue(this.pv);
            this.lock = !0, this._mdf = !1, _v0 = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
            var _v0,
              _v1,
              _v2 = this.effectsSequence.length;
            for (_v1 = 0; _v1 < _v2; _v1 += 1) _v0 = this.effectsSequence[_v1](_v0);
            this.setVValue(_v0), this.lock = !1, this.frameId = this.elem.globalData.frameId;
          }
        }
        function _v7(_v0, _v1, _v2) {
          this.propType = "shape", this.comp = _v0.comp, this.container = _v0, this.elem = _v0, this.data = _v1, this.k = !1, this.kf = !1, this._mdf = !1;
          var _v3 = 3 === _v2 ? _v1.pt.k : _v1.ks.k;
          this.v = _v99.clone(_v3), this.pv = _v99.clone(this.v), this.localShapeCollection = _v101.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = _v3, this.effectsSequence = [];
        }
        function _v8(_v0) {
          this.effectsSequence.push(_v0), this.container.addDynamicProperty(this);
        }
        function _v9(_v0, _v1, _v2) {
          this.propType = "shape", this.comp = _v0.comp, this.elem = _v0, this.container = _v0, this.offsetTime = _v0.data.st, this.keyframes = 3 === _v2 ? _v1.pt.k : _v1.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
          var _v3 = this.keyframes[0].s[0].i.length;
          this.v = _v99.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, _v3), this.pv = _v99.clone(this.v), this.localShapeCollection = _v101.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = _v0, this.reset = _v3, this._caching = {
            lastFrame: _v0,
            lastIndex: 0
          }, this.effectsSequence = [_v2.bind(this)];
        }
        _v7.prototype.interpolateShape = _v1, _v7.prototype.getValue = _v6, _v7.prototype.setVValue = _v5, _v7.prototype.addEffect = _v8, _v9.prototype.getValue = _v6, _v9.prototype.interpolateShape = _v1, _v9.prototype.setVValue = _v5, _v9.prototype.addEffect = _v8;
        var _v10 = function () {
            var _v0 = _v31;
            function _v1(_v0, _v1) {
              this.v = _v99.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = _v101.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = _v1.d, this.elem = _v0, this.comp = _v0.comp, this.frameId = -1, this.initDynamicPropertyContainer(_v0), this.p = _v95.getProp(_v0, _v1.p, 1, 0, this), this.s = _v95.getProp(_v0, _v1.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath());
            }
            return _v1.prototype = {
              reset: _v3,
              getValue: function () {
                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath());
              },
              convertEllToPath: function () {
                var _v0 = this.p.v[0],
                  _v1 = this.p.v[1],
                  _v2 = this.s.v[0] / 2,
                  _v3 = this.s.v[1] / 2,
                  _v4 = 3 !== this.d,
                  _v5 = this.v;
                _v5.v[0][0] = _v0, _v5.v[0][1] = _v1 - _v3, _v5.v[1][0] = _v4 ? _v0 + _v2 : _v0 - _v2, _v5.v[1][1] = _v1, _v5.v[2][0] = _v0, _v5.v[2][1] = _v1 + _v3, _v5.v[3][0] = _v4 ? _v0 - _v2 : _v0 + _v2, _v5.v[3][1] = _v1, _v5.i[0][0] = _v4 ? _v0 - _v2 * _v0 : _v0 + _v2 * _v0, _v5.i[0][1] = _v1 - _v3, _v5.i[1][0] = _v4 ? _v0 + _v2 : _v0 - _v2, _v5.i[1][1] = _v1 - _v3 * _v0, _v5.i[2][0] = _v4 ? _v0 + _v2 * _v0 : _v0 - _v2 * _v0, _v5.i[2][1] = _v1 + _v3, _v5.i[3][0] = _v4 ? _v0 - _v2 : _v0 + _v2, _v5.i[3][1] = _v1 + _v3 * _v0, _v5.o[0][0] = _v4 ? _v0 + _v2 * _v0 : _v0 - _v2 * _v0, _v5.o[0][1] = _v1 - _v3, _v5.o[1][0] = _v4 ? _v0 + _v2 : _v0 - _v2, _v5.o[1][1] = _v1 + _v3 * _v0, _v5.o[2][0] = _v4 ? _v0 - _v2 * _v0 : _v0 + _v2 * _v0, _v5.o[2][1] = _v1 + _v3, _v5.o[3][0] = _v4 ? _v0 - _v2 : _v0 + _v2, _v5.o[3][1] = _v1 - _v3 * _v0;
              }
            }, _v9([_v96], _v1), _v1;
          }(),
          _v11 = function () {
            function _v0(_v0, _v1) {
              this.v = _v99.newElement(), this.v.setPathData(!0, 0), this.elem = _v0, this.comp = _v0.comp, this.data = _v1, this.frameId = -1, this.d = _v1.d, this.initDynamicPropertyContainer(_v0), 1 === _v1.sy ? (this.ir = _v95.getProp(_v0, _v1.ir, 0, 0, this), this.is = _v95.getProp(_v0, _v1.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = _v95.getProp(_v0, _v1.pt, 0, 0, this), this.p = _v95.getProp(_v0, _v1.p, 1, 0, this), this.r = _v95.getProp(_v0, _v1.r, 0, _v30, this), this.or = _v95.getProp(_v0, _v1.or, 0, 0, this), this.os = _v95.getProp(_v0, _v1.os, 0, .01, this), this.localShapeCollection = _v101.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath());
            }
            return _v0.prototype = {
              reset: _v3,
              getValue: function () {
                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath());
              },
              convertStarToPath: function () {
                var _v0,
                  _v1,
                  _v2,
                  _v3,
                  _v4 = 2 * Math.floor(this.pt.v),
                  _v5 = 2 * Math.PI / _v4,
                  _v6 = !0,
                  _v7 = this.or.v,
                  _v8 = this.ir.v,
                  _v9 = this.os.v,
                  _v10 = this.is.v,
                  _v11 = 2 * Math.PI * _v7 / (2 * _v4),
                  _v12 = 2 * Math.PI * _v8 / (2 * _v4),
                  _v13 = -Math.PI / 2;
                _v13 += this.r.v;
                var _v14 = 3 === this.data.d ? -1 : 1;
                for (this.v._length = 0, _v0 = 0; _v0 < _v4; _v0 += 1) {
                  _v1 = _v6 ? _v7 : _v8, _v2 = _v6 ? _v9 : _v10, _v3 = _v6 ? _v11 : _v12;
                  var _v15 = _v1 * Math.cos(_v13),
                    _v16 = _v1 * Math.sin(_v13),
                    _v17 = 0 === _v15 && 0 === _v16 ? 0 : _v16 / Math.sqrt(_v15 * _v15 + _v16 * _v16),
                    _v18 = 0 === _v15 && 0 === _v16 ? 0 : -_v15 / Math.sqrt(_v15 * _v15 + _v16 * _v16);
                  _v15 += +this.p.v[0], _v16 += +this.p.v[1], this.v.setTripleAt(_v15, _v16, _v15 - _v17 * _v3 * _v2 * _v14, _v16 - _v18 * _v3 * _v2 * _v14, _v15 + _v17 * _v3 * _v2 * _v14, _v16 + _v18 * _v3 * _v2 * _v14, _v0, !0), _v6 = !_v6, _v13 += _v5 * _v14;
                }
              },
              convertPolygonToPath: function () {
                var _v0,
                  _v1 = Math.floor(this.pt.v),
                  _v2 = 2 * Math.PI / _v1,
                  _v3 = this.or.v,
                  _v4 = this.os.v,
                  _v5 = 2 * Math.PI * _v3 / (4 * _v1),
                  _v6 = -(.5 * Math.PI),
                  _v7 = 3 === this.data.d ? -1 : 1;
                for (_v6 += this.r.v, this.v._length = 0, _v0 = 0; _v0 < _v1; _v0 += 1) {
                  var _v8 = _v3 * Math.cos(_v6),
                    _v9 = _v3 * Math.sin(_v6),
                    _v10 = 0 === _v8 && 0 === _v9 ? 0 : _v9 / Math.sqrt(_v8 * _v8 + _v9 * _v9),
                    _v11 = 0 === _v8 && 0 === _v9 ? 0 : -_v8 / Math.sqrt(_v8 * _v8 + _v9 * _v9);
                  _v8 += +this.p.v[0], _v9 += +this.p.v[1], this.v.setTripleAt(_v8, _v9, _v8 - _v10 * _v5 * _v4 * _v7, _v9 - _v11 * _v5 * _v4 * _v7, _v8 + _v10 * _v5 * _v4 * _v7, _v9 + _v11 * _v5 * _v4 * _v7, _v0, !0), _v6 += _v2 * _v7;
                }
                this.paths.length = 0, this.paths[0] = this.v;
              }
            }, _v9([_v96], _v0), _v0;
          }(),
          _v12 = function () {
            function _v0(_v0, _v1) {
              this.v = _v99.newElement(), this.v.c = !0, this.localShapeCollection = _v101.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = _v0, this.comp = _v0.comp, this.frameId = -1, this.d = _v1.d, this.initDynamicPropertyContainer(_v0), this.p = _v95.getProp(_v0, _v1.p, 1, 0, this), this.s = _v95.getProp(_v0, _v1.s, 1, 0, this), this.r = _v95.getProp(_v0, _v1.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath());
            }
            return _v0.prototype = {
              convertRectToPath: function () {
                var _v0 = this.p.v[0],
                  _v1 = this.p.v[1],
                  _v2 = this.s.v[0] / 2,
                  _v3 = this.s.v[1] / 2,
                  _v4 = _v26(_v2, _v3, this.r.v),
                  _v5 = _v4 * (1 - _v31);
                this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(_v0 + _v2, _v1 - _v3 + _v4, _v0 + _v2, _v1 - _v3 + _v4, _v0 + _v2, _v1 - _v3 + _v5, 0, !0), this.v.setTripleAt(_v0 + _v2, _v1 + _v3 - _v4, _v0 + _v2, _v1 + _v3 - _v5, _v0 + _v2, _v1 + _v3 - _v4, 1, !0), 0 !== _v4 ? (this.v.setTripleAt(_v0 + _v2 - _v4, _v1 + _v3, _v0 + _v2 - _v4, _v1 + _v3, _v0 + _v2 - _v5, _v1 + _v3, 2, !0), this.v.setTripleAt(_v0 - _v2 + _v4, _v1 + _v3, _v0 - _v2 + _v5, _v1 + _v3, _v0 - _v2 + _v4, _v1 + _v3, 3, !0), this.v.setTripleAt(_v0 - _v2, _v1 + _v3 - _v4, _v0 - _v2, _v1 + _v3 - _v4, _v0 - _v2, _v1 + _v3 - _v5, 4, !0), this.v.setTripleAt(_v0 - _v2, _v1 - _v3 + _v4, _v0 - _v2, _v1 - _v3 + _v5, _v0 - _v2, _v1 - _v3 + _v4, 5, !0), this.v.setTripleAt(_v0 - _v2 + _v4, _v1 - _v3, _v0 - _v2 + _v4, _v1 - _v3, _v0 - _v2 + _v5, _v1 - _v3, 6, !0), this.v.setTripleAt(_v0 + _v2 - _v4, _v1 - _v3, _v0 + _v2 - _v5, _v1 - _v3, _v0 + _v2 - _v4, _v1 - _v3, 7, !0)) : (this.v.setTripleAt(_v0 - _v2, _v1 + _v3, _v0 - _v2 + _v5, _v1 + _v3, _v0 - _v2, _v1 + _v3, 2), this.v.setTripleAt(_v0 - _v2, _v1 - _v3, _v0 - _v2, _v1 - _v3 + _v5, _v0 - _v2, _v1 - _v3, 3))) : (this.v.setTripleAt(_v0 + _v2, _v1 - _v3 + _v4, _v0 + _v2, _v1 - _v3 + _v5, _v0 + _v2, _v1 - _v3 + _v4, 0, !0), 0 !== _v4 ? (this.v.setTripleAt(_v0 + _v2 - _v4, _v1 - _v3, _v0 + _v2 - _v4, _v1 - _v3, _v0 + _v2 - _v5, _v1 - _v3, 1, !0), this.v.setTripleAt(_v0 - _v2 + _v4, _v1 - _v3, _v0 - _v2 + _v5, _v1 - _v3, _v0 - _v2 + _v4, _v1 - _v3, 2, !0), this.v.setTripleAt(_v0 - _v2, _v1 - _v3 + _v4, _v0 - _v2, _v1 - _v3 + _v4, _v0 - _v2, _v1 - _v3 + _v5, 3, !0), this.v.setTripleAt(_v0 - _v2, _v1 + _v3 - _v4, _v0 - _v2, _v1 + _v3 - _v5, _v0 - _v2, _v1 + _v3 - _v4, 4, !0), this.v.setTripleAt(_v0 - _v2 + _v4, _v1 + _v3, _v0 - _v2 + _v4, _v1 + _v3, _v0 - _v2 + _v5, _v1 + _v3, 5, !0), this.v.setTripleAt(_v0 + _v2 - _v4, _v1 + _v3, _v0 + _v2 - _v5, _v1 + _v3, _v0 + _v2 - _v4, _v1 + _v3, 6, !0), this.v.setTripleAt(_v0 + _v2, _v1 + _v3 - _v4, _v0 + _v2, _v1 + _v3 - _v4, _v0 + _v2, _v1 + _v3 - _v5, 7, !0)) : (this.v.setTripleAt(_v0 - _v2, _v1 - _v3, _v0 - _v2 + _v5, _v1 - _v3, _v0 - _v2, _v1 - _v3, 1, !0), this.v.setTripleAt(_v0 - _v2, _v1 + _v3, _v0 - _v2, _v1 + _v3 - _v5, _v0 - _v2, _v1 + _v3, 2, !0), this.v.setTripleAt(_v0 + _v2, _v1 + _v3, _v0 + _v2 - _v5, _v1 + _v3, _v0 + _v2, _v1 + _v3, 3, !0)));
              },
              getValue: function () {
                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath());
              },
              reset: _v3
            }, _v9([_v96], _v0), _v0;
          }();
        function _v13() {
          return _v7;
        }
        function _v14() {
          return _v9;
        }
        var _v15 = {};
        return _v15.getShapeProp = function (_v0, _v1, _v2) {
          var _v3;
          return 3 === _v2 || 4 === _v2 ? _v3 = (3 === _v2 ? _v1.pt : _v1.ks).k.length ? new _v9(_v0, _v1, _v2) : new _v7(_v0, _v1, _v2) : 5 === _v2 ? _v3 = new _v12(_v0, _v1) : 6 === _v2 ? _v3 = new _v10(_v0, _v1) : 7 === _v2 && (_v3 = new _v11(_v0, _v1)), _v3.k && _v0.addDynamicProperty(_v3), _v3;
        }, _v15.getConstructorFunction = _v13, _v15.getKeyframedConstructorFunction = _v14, _v15;
      }(),
      _v103 = function () {
        var _v0 = Math.cos,
          _v1 = Math.sin,
          _v2 = Math.tan,
          _v3 = Math.round;
        function _v4() {
          return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this;
        }
        function _v5(_v0) {
          if (0 === _v0) return this;
          var _v1 = _v0(_v0),
            _v2 = _v1(_v0);
          return this._t(_v1, -_v2, 0, 0, _v2, _v1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        function _v6(_v0) {
          if (0 === _v0) return this;
          var _v1 = _v0(_v0),
            _v2 = _v1(_v0);
          return this._t(1, 0, 0, 0, 0, _v1, -_v2, 0, 0, _v2, _v1, 0, 0, 0, 0, 1);
        }
        function _v7(_v0) {
          if (0 === _v0) return this;
          var _v1 = _v0(_v0),
            _v2 = _v1(_v0);
          return this._t(_v1, 0, _v2, 0, 0, 1, 0, 0, -_v2, 0, _v1, 0, 0, 0, 0, 1);
        }
        function _v8(_v0) {
          if (0 === _v0) return this;
          var _v1 = _v0(_v0),
            _v2 = _v1(_v0);
          return this._t(_v1, -_v2, 0, 0, _v2, _v1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        function _v9(_v0, _v1) {
          return this._t(1, _v1, _v0, 1, 0, 0);
        }
        function _v10(_v0, _v1) {
          return this.shear(_v2(_v0), _v2(_v1));
        }
        function _v11(_v0, _v1) {
          var _v2 = _v0(_v1),
            _v3 = _v1(_v1);
          return this._t(_v2, _v3, 0, 0, -_v3, _v2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, _v2(_v0), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(_v2, -_v3, 0, 0, _v3, _v2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        function _v12(_v0, _v1, _v2) {
          return (_v2 || 0 === _v2 || (_v2 = 1), 1 === _v0 && 1 === _v1 && 1 === _v2) ? this : this._t(_v0, 0, 0, 0, 0, _v1, 0, 0, 0, 0, _v2, 0, 0, 0, 0, 1);
        }
        function _v13(_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7, _v8, _v9, _v10, _v11, _v12, _v13, _v14, _v15) {
          return this.props[0] = _v0, this.props[1] = _v1, this.props[2] = _v2, this.props[3] = _v3, this.props[4] = _v4, this.props[5] = _v5, this.props[6] = _v6, this.props[7] = _v7, this.props[8] = _v8, this.props[9] = _v9, this.props[10] = _v10, this.props[11] = _v11, this.props[12] = _v12, this.props[13] = _v13, this.props[14] = _v14, this.props[15] = _v15, this;
        }
        function _v14(_v0, _v1, _v2) {
          return (_v2 = _v2 || 0, 0 !== _v0 || 0 !== _v1 || 0 !== _v2) ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, _v0, _v1, _v2, 1) : this;
        }
        function _v15(_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7, _v8, _v9, _v10, _v11, _v12, _v13, _v14, _v15) {
          var _v16 = this.props;
          if (1 === _v0 && 0 === _v1 && 0 === _v2 && 0 === _v3 && 0 === _v4 && 1 === _v5 && 0 === _v6 && 0 === _v7 && 0 === _v8 && 0 === _v9 && 1 === _v10 && 0 === _v11) return _v16[12] = _v16[12] * _v0 + _v16[15] * _v12, _v16[13] = _v16[13] * _v5 + _v16[15] * _v13, _v16[14] = _v16[14] * _v10 + _v16[15] * _v14, _v16[15] *= _v15, this._identityCalculated = !1, this;
          var _v17 = _v16[0],
            _v18 = _v16[1],
            _v19 = _v16[2],
            _v20 = _v16[3],
            _v21 = _v16[4],
            _v22 = _v16[5],
            _v23 = _v16[6],
            _v24 = _v16[7],
            _v25 = _v16[8],
            _v26 = _v16[9],
            _v27 = _v16[10],
            _v28 = _v16[11],
            _v29 = _v16[12],
            _v30 = _v16[13],
            _v31 = _v16[14],
            _v32 = _v16[15];
          return _v16[0] = _v17 * _v0 + _v18 * _v4 + _v19 * _v8 + _v20 * _v12, _v16[1] = _v17 * _v1 + _v18 * _v5 + _v19 * _v9 + _v20 * _v13, _v16[2] = _v17 * _v2 + _v18 * _v6 + _v19 * _v10 + _v20 * _v14, _v16[3] = _v17 * _v3 + _v18 * _v7 + _v19 * _v11 + _v20 * _v15, _v16[4] = _v21 * _v0 + _v22 * _v4 + _v23 * _v8 + _v24 * _v12, _v16[5] = _v21 * _v1 + _v22 * _v5 + _v23 * _v9 + _v24 * _v13, _v16[6] = _v21 * _v2 + _v22 * _v6 + _v23 * _v10 + _v24 * _v14, _v16[7] = _v21 * _v3 + _v22 * _v7 + _v23 * _v11 + _v24 * _v15, _v16[8] = _v25 * _v0 + _v26 * _v4 + _v27 * _v8 + _v28 * _v12, _v16[9] = _v25 * _v1 + _v26 * _v5 + _v27 * _v9 + _v28 * _v13, _v16[10] = _v25 * _v2 + _v26 * _v6 + _v27 * _v10 + _v28 * _v14, _v16[11] = _v25 * _v3 + _v26 * _v7 + _v27 * _v11 + _v28 * _v15, _v16[12] = _v29 * _v0 + _v30 * _v4 + _v31 * _v8 + _v32 * _v12, _v16[13] = _v29 * _v1 + _v30 * _v5 + _v31 * _v9 + _v32 * _v13, _v16[14] = _v29 * _v2 + _v30 * _v6 + _v31 * _v10 + _v32 * _v14, _v16[15] = _v29 * _v3 + _v30 * _v7 + _v31 * _v11 + _v32 * _v15, this._identityCalculated = !1, this;
        }
        function _v16(_v0) {
          var _v1 = _v0.props;
          return this.transform(_v1[0], _v1[1], _v1[2], _v1[3], _v1[4], _v1[5], _v1[6], _v1[7], _v1[8], _v1[9], _v1[10], _v1[11], _v1[12], _v1[13], _v1[14], _v1[15]);
        }
        function _v17() {
          return this._identityCalculated || (this._identity = 1 === this.props[0] && 0 === this.props[1] && 0 === this.props[2] && 0 === this.props[3] && 0 === this.props[4] && 1 === this.props[5] && 0 === this.props[6] && 0 === this.props[7] && 0 === this.props[8] && 0 === this.props[9] && 1 === this.props[10] && 0 === this.props[11] && 0 === this.props[12] && 0 === this.props[13] && 0 === this.props[14] && 1 === this.props[15], this._identityCalculated = !0), this._identity;
        }
        function _v18(_v0) {
          for (var _v1 = 0; _v1 < 16;) {
            if (_v0.props[_v1] !== this.props[_v1]) return !1;
            _v1 += 1;
          }
          return !0;
        }
        function _v19(_v0) {
          var _v1;
          for (_v1 = 0; _v1 < 16; _v1 += 1) _v0.props[_v1] = this.props[_v1];
          return _v0;
        }
        function _v20(_v0) {
          var _v1;
          for (_v1 = 0; _v1 < 16; _v1 += 1) this.props[_v1] = _v0[_v1];
        }
        function _v21(_v0, _v1, _v2) {
          return {
            x: _v0 * this.props[0] + _v1 * this.props[4] + _v2 * this.props[8] + this.props[12],
            y: _v0 * this.props[1] + _v1 * this.props[5] + _v2 * this.props[9] + this.props[13],
            z: _v0 * this.props[2] + _v1 * this.props[6] + _v2 * this.props[10] + this.props[14]
          };
        }
        function _v22(_v0, _v1, _v2) {
          return _v0 * this.props[0] + _v1 * this.props[4] + _v2 * this.props[8] + this.props[12];
        }
        function _v23(_v0, _v1, _v2) {
          return _v0 * this.props[1] + _v1 * this.props[5] + _v2 * this.props[9] + this.props[13];
        }
        function _v24(_v0, _v1, _v2) {
          return _v0 * this.props[2] + _v1 * this.props[6] + _v2 * this.props[10] + this.props[14];
        }
        function _v25() {
          var _v0 = this.props[0] * this.props[5] - this.props[1] * this.props[4],
            _v1 = this.props[5] / _v0,
            _v2 = -this.props[1] / _v0,
            _v3 = -this.props[4] / _v0,
            _v4 = this.props[0] / _v0,
            _v5 = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / _v0,
            _v6 = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / _v0,
            _v7 = new _v103();
          return _v7.props[0] = _v1, _v7.props[1] = _v2, _v7.props[4] = _v3, _v7.props[5] = _v4, _v7.props[12] = _v5, _v7.props[13] = _v6, _v7;
        }
        function _v26(_v0) {
          return this.getInverseMatrix().applyToPointArray(_v0[0], _v0[1], _v0[2] || 0);
        }
        function _v27(_v0) {
          var _v1,
            _v2 = _v0.length,
            _v3 = [];
          for (_v1 = 0; _v1 < _v2; _v1 += 1) _v3[_v1] = _v26(_v0[_v1]);
          return _v3;
        }
        function _v28(_v0, _v1, _v2) {
          var _v3 = _v13("float32", 6);
          if (this.isIdentity()) _v3[0] = _v0[0], _v3[1] = _v0[1], _v3[2] = _v1[0], _v3[3] = _v1[1], _v3[4] = _v2[0], _v3[5] = _v2[1];else {
            var _v4 = this.props[0],
              _v5 = this.props[1],
              _v6 = this.props[4],
              _v7 = this.props[5],
              _v8 = this.props[12],
              _v9 = this.props[13];
            _v3[0] = _v0[0] * _v4 + _v0[1] * _v6 + _v8, _v3[1] = _v0[0] * _v5 + _v0[1] * _v7 + _v9, _v3[2] = _v1[0] * _v4 + _v1[1] * _v6 + _v8, _v3[3] = _v1[0] * _v5 + _v1[1] * _v7 + _v9, _v3[4] = _v2[0] * _v4 + _v2[1] * _v6 + _v8, _v3[5] = _v2[0] * _v5 + _v2[1] * _v7 + _v9;
          }
          return _v3;
        }
        function _v29(_v0, _v1, _v2) {
          var _v3;
          return this.isIdentity() ? [_v0, _v1, _v2] : [_v0 * this.props[0] + _v1 * this.props[4] + _v2 * this.props[8] + this.props[12], _v0 * this.props[1] + _v1 * this.props[5] + _v2 * this.props[9] + this.props[13], _v0 * this.props[2] + _v1 * this.props[6] + _v2 * this.props[10] + this.props[14]];
        }
        function _v30(_v0, _v1) {
          if (this.isIdentity()) return _v0 + "," + _v1;
          var _v2 = this.props;
          return Math.round((_v0 * _v2[0] + _v1 * _v2[4] + _v2[12]) * 100) / 100 + "," + Math.round((_v0 * _v2[1] + _v1 * _v2[5] + _v2[13]) * 100) / 100;
        }
        function _v31() {
          for (var _v0 = 0, _v1 = this.props, _v2 = "matrix3d(", _v3 = 0; _v0 < 16;) _v2 += _v3(_v1[_v0] * _v3) / _v3, _v2 += 15 === _v0 ? ")" : ",", _v0 += 1;
          return _v2;
        }
        function _v32(_v0) {
          var _v1 = 0;
          return _v0 < 1e-6 && _v0 > 0 || _v0 > -1e-6 && _v0 < 0 ? _v3(_v0 * _v1) / _v1 : _v0;
        }
        function _v33() {
          var _v0 = this.props;
          return "matrix(" + _v32(_v0[0]) + "," + _v32(_v0[1]) + "," + _v32(_v0[4]) + "," + _v32(_v0[5]) + "," + _v32(_v0[12]) + "," + _v32(_v0[13]) + ")";
        }
        return function () {
          this.reset = _v4, this.rotate = _v5, this.rotateX = _v6, this.rotateY = _v7, this.rotateZ = _v8, this.skew = _v10, this.skewFromAxis = _v11, this.shear = _v9, this.scale = _v12, this.setTransform = _v13, this.translate = _v14, this.transform = _v15, this.multiply = _v16, this.applyToPoint = _v21, this.applyToX = _v22, this.applyToY = _v23, this.applyToZ = _v24, this.applyToPointArray = _v29, this.applyToTriplePoints = _v28, this.applyToPointStringified = _v30, this.toCSS = _v31, this.to2dCSS = _v33, this.clone = _v19, this.cloneFromProps = _v20, this.equals = _v18, this.inversePoints = _v27, this.inversePoint = _v26, this.getInverseMatrix = _v25, this._t = this.transform, this.isIdentity = _v17, this._identity = !0, this._identityCalculated = !1, this.props = _v13("float32", 16), this.reset();
        };
      }();
    function _v104(_v0) {
      return (_v104 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_v0) {
        return typeof _v0;
      } : function (_v0) {
        return _v0 && "function" == typeof Symbol && _v0.constructor === Symbol && _v0 !== Symbol.prototype ? "symbol" : typeof _v0;
      })(_v0);
    }
    var _v105 = {},
      _v106 = "__[STANDALONE]__",
      _v107 = "__[ANIMATIONDATA]__",
      _v108 = "";
    function _v109(_v0) {
      _v6(_v0);
    }
    function _v110() {
      _v73.searchAnimations();
    }
    function _v111(_v0) {
      _v50(_v0);
    }
    function _v112(_v0) {
      _v58(_v0);
    }
    function _v113(_v0) {
      return _v73.loadAnimation(_v0);
    }
    function _v114(_v0) {
      if ("string" == typeof _v0) switch (_v0) {
        case "high":
          _v56(200);
          break;
        default:
        case "medium":
          _v56(50);
          break;
        case "low":
          _v56(10);
      } else !isNaN(_v0) && _v0 > 1 && _v56(_v0);
      _v57() >= 50 ? _v32(!1) : _v32(!0);
    }
    function _v115() {
      return "u" > typeof navigator;
    }
    function _v116(_v0, _v1) {
      "expressions" === _v0 && _v52(_v1);
    }
    function _v117(_v0) {
      switch (_v0) {
        case "propertyFactory":
          return _v95;
        case "shapePropertyFactory":
          return _v102;
        case "matrix":
          return _v103;
        default:
          return null;
      }
    }
    function _v118() {
      "complete" === document.readyState && (clearInterval(_v124), _v110());
    }
    function _v119(_v0) {
      for (var _v1 = _v120.split("&"), _v2 = 0; _v2 < _v1.length; _v2 += 1) {
        var _v3 = _v1[_v2].split("=");
        if (decodeURIComponent(_v3[0]) == _v0) return decodeURIComponent(_v3[1]);
      }
      return null;
    }
    _v105.play = _v73.play, _v105.pause = _v73.pause, _v105.setLocationHref = _v109, _v105.togglePause = _v73.togglePause, _v105.setSpeed = _v73.setSpeed, _v105.setDirection = _v73.setDirection, _v105.stop = _v73.stop, _v105.searchAnimations = _v110, _v105.registerAnimation = _v73.registerAnimation, _v105.loadAnimation = _v113, _v105.setSubframeRendering = _v111, _v105.resize = _v73.resize, _v105.goToAndStop = _v73.goToAndStop, _v105.destroy = _v73.destroy, _v105.setQuality = _v114, _v105.inBrowser = _v115, _v105.installPlugin = _v116, _v105.freeze = _v73.freeze, _v105.unfreeze = _v73.unfreeze, _v105.setVolume = _v73.setVolume, _v105.mute = _v73.mute, _v105.unmute = _v73.unmute, _v105.getRegisteredAnimations = _v73.getRegisteredAnimations, _v105.useWebWorker = _v4, _v105.setIDPrefix = _v112, _v105.__getFactory = _v117, _v105.version = "5.13.0";
    var _v120 = "",
      _v121 = document.getElementsByTagName("script"),
      _v122 = _v121.length - 1,
      _v123 = _v121[_v122] || {
        src: ""
      };
    _v120 = _v123.src ? _v123.src.replace(/^[^\?]+\??/, "") : "", _v108 = _v119("renderer");
    var _v124 = setInterval(_v118, 100);
    try {
      "object" === _v104(_v2) || "function" == typeof define && define.amd || (window.bodymovin = _v105);
    } catch (_v0) {}
    var _v125 = function () {
      var _v0 = {},
        _v1 = {};
      function _v2(_v0, _v1, _v2) {
        return new _v1[_v0](_v1, _v2);
      }
      return _v0.registerModifier = function t(_v0, _v1) {
        _v1[_v0] || (_v1[_v0] = _v1);
      }, _v0.getModifier = _v2, _v0;
    }();
    function _v126() {}
    function _v127() {}
    function _v128() {}
    _v126.prototype.initModifierProperties = function () {}, _v126.prototype.addShapeToModifier = function () {}, _v126.prototype.addShape = function (_v0) {
      if (!this.closed) {
        _v0.sh.container.addDynamicProperty(_v0.sh);
        var _v1 = {
          shape: _v0.sh,
          data: _v0,
          localShapeCollection: _v101.newShapeCollection()
        };
        this.shapes.push(_v1), this.addShapeToModifier(_v1), this._isAnimated && _v0.setAsAnimated();
      }
    }, _v126.prototype.init = function (_v0, _v1) {
      this.shapes = [], this.elem = _v0, this.initDynamicPropertyContainer(_v0), this.initModifierProperties(_v0, _v1), this.frameId = _v3, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0);
    }, _v126.prototype.processKeys = function () {
      this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties());
    }, _v9([_v96], _v126), _v9([_v126], _v127), _v127.prototype.initModifierProperties = function (_v0, _v1) {
      this.s = _v95.getProp(_v0, _v1.s, 0, .01, this), this.e = _v95.getProp(_v0, _v1.e, 0, .01, this), this.o = _v95.getProp(_v0, _v1.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = _v1.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length;
    }, _v127.prototype.addShapeToModifier = function (_v0) {
      _v0.pathsData = [];
    }, _v127.prototype.calculateShapeEdges = function (_v0, _v1, _v2, _v3, _v4) {
      var _v5,
        _v6,
        _v7,
        _v8 = [];
      _v1 <= 1 ? _v8.push({
        s: _v0,
        e: _v1
      }) : _v0 >= 1 ? _v8.push({
        s: _v0 - 1,
        e: _v1 - 1
      }) : (_v8.push({
        s: _v0,
        e: 1
      }), _v8.push({
        s: 0,
        e: _v1 - 1
      }));
      var _v9 = [],
        _v10 = _v8.length;
      for (_v5 = 0; _v5 < _v10; _v5 += 1) (_v6 = _v8[_v5]).e * _v4 < _v3 || _v6.s * _v4 > _v3 + _v2 || (_v7 = _v6.s * _v4 <= _v3 ? 0 : (_v6.s * _v4 - _v3) / _v2, _v9.push([_v7, _v6.e * _v4 >= _v3 + _v2 ? 1 : (_v6.e * _v4 - _v3) / _v2]));
      return _v9.length || _v9.push([0, 0]), _v9;
    }, _v127.prototype.releasePathsData = function (_v0) {
      var _v1,
        _v2 = _v0.length;
      for (_v1 = 0; _v1 < _v2; _v1 += 1) _v78.release(_v0[_v1]);
      return _v0.length = 0, _v0;
    }, _v127.prototype.processShapes = function (_v0) {
      if (this._mdf || _v0) {
        var _v1 = this.o.v % 360 / 360;
        if (_v1 < 0 && (_v1 += 1), (_v5 = this.s.v > 1 ? 1 + _v1 : this.s.v < 0 ? 0 + _v1 : this.s.v + _v1) > (_v6 = this.e.v > 1 ? 1 + _v1 : this.e.v < 0 ? 0 + _v1 : this.e.v + _v1)) {
          var _v2 = _v5;
          _v5 = _v6, _v6 = _v2;
        }
        _v5 = 1e-4 * Math.round(0 * _v5), _v6 = 1e-4 * Math.round(0 * _v6), this.sValue = _v5, this.eValue = _v6;
      } else _v5 = this.sValue, _v6 = this.eValue;
      var _v3 = this.shapes.length,
        _v4 = 0;
      if (_v6 === _v5) for (_v8 = 0; _v8 < _v3; _v8 += 1) this.shapes[_v8].localShapeCollection.releaseShapes(), this.shapes[_v8].shape._mdf = !0, this.shapes[_v8].shape.paths = this.shapes[_v8].localShapeCollection, this._mdf && (this.shapes[_v8].pathsData.length = 0);else if ((1 !== _v6 || 0 !== _v5) && (0 !== _v6 || 1 !== _v5)) {
        var _v5,
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
          _v17 = [];
        for (_v8 = 0; _v8 < _v3; _v8 += 1) if ((_v14 = this.shapes[_v8]).shape._mdf || this._mdf || _v0 || 2 === this.m) {
          if (_v10 = (_v7 = _v14.shape.paths)._length, _v13 = 0, !_v14.shape._mdf && _v14.pathsData.length) _v13 = _v14.totalShapeLength;else {
            for (_v11 = this.releasePathsData(_v14.pathsData), _v9 = 0; _v9 < _v10; _v9 += 1) _v12 = _v80.getSegmentsLength(_v7.shapes[_v9]), _v11.push(_v12), _v13 += _v12.totalLength;
            _v14.totalShapeLength = _v13, _v14.pathsData = _v11;
          }
          _v4 += _v13, _v14.shape._mdf = !0;
        } else _v14.shape.paths = _v14.localShapeCollection;
        var _v18 = _v5,
          _v19 = _v6,
          _v20 = 0;
        for (_v8 = _v3 - 1; _v8 >= 0; _v8 -= 1) if ((_v14 = this.shapes[_v8]).shape._mdf) {
          for ((_v15 = _v14.localShapeCollection).releaseShapes(), 2 === this.m && _v3 > 1 ? (_v16 = this.calculateShapeEdges(_v5, _v6, _v14.totalShapeLength, _v20, _v4), _v20 += _v14.totalShapeLength) : _v16 = [[_v18, _v19]], _v10 = _v16.length, _v9 = 0; _v9 < _v10; _v9 += 1) {
            _v18 = _v16[_v9][0], _v19 = _v16[_v9][1], _v17.length = 0, _v19 <= 1 ? _v17.push({
              s: _v14.totalShapeLength * _v18,
              e: _v14.totalShapeLength * _v19
            }) : _v18 >= 1 ? _v17.push({
              s: _v14.totalShapeLength * (_v18 - 1),
              e: _v14.totalShapeLength * (_v19 - 1)
            }) : (_v17.push({
              s: _v14.totalShapeLength * _v18,
              e: _v14.totalShapeLength
            }), _v17.push({
              s: 0,
              e: _v14.totalShapeLength * (_v19 - 1)
            }));
            var _v21 = this.addShapes(_v14, _v17[0]);
            if (_v17[0].s !== _v17[0].e) {
              if (_v17.length > 1) if (_v14.shape.paths.shapes[_v14.shape.paths._length - 1].c) {
                var _v22 = _v21.pop();
                this.addPaths(_v21, _v15), _v21 = this.addShapes(_v14, _v17[1], _v22);
              } else this.addPaths(_v21, _v15), _v21 = this.addShapes(_v14, _v17[1]);
              this.addPaths(_v21, _v15);
            }
          }
          _v14.shape.paths = _v15;
        }
      } else if (this._mdf) for (_v8 = 0; _v8 < _v3; _v8 += 1) this.shapes[_v8].pathsData.length = 0, this.shapes[_v8].shape._mdf = !0;
    }, _v127.prototype.addPaths = function (_v0, _v1) {
      var _v2,
        _v3 = _v0.length;
      for (_v2 = 0; _v2 < _v3; _v2 += 1) _v1.addShape(_v0[_v2]);
    }, _v127.prototype.addSegment = function (_v0, _v1, _v2, _v3, _v4, _v5, _v6) {
      _v4.setXYAt(_v1[0], _v1[1], "o", _v5), _v4.setXYAt(_v2[0], _v2[1], "i", _v5 + 1), _v6 && _v4.setXYAt(_v0[0], _v0[1], "v", _v5), _v4.setXYAt(_v3[0], _v3[1], "v", _v5 + 1);
    }, _v127.prototype.addSegmentFromArray = function (_v0, _v1, _v2, _v3) {
      _v1.setXYAt(_v0[1], _v0[5], "o", _v2), _v1.setXYAt(_v0[2], _v0[6], "i", _v2 + 1), _v3 && _v1.setXYAt(_v0[0], _v0[4], "v", _v2), _v1.setXYAt(_v0[3], _v0[7], "v", _v2 + 1);
    }, _v127.prototype.addShapes = function (_v0, _v1, _v2) {
      var _v3,
        _v4,
        _v5,
        _v6,
        _v7,
        _v8,
        _v9,
        _v10,
        _v11 = _v0.pathsData,
        _v12 = _v0.shape.paths.shapes,
        _v13 = _v0.shape.paths._length,
        _v14 = 0,
        _v15 = [],
        _v16 = !0;
      for (_v2 ? (_v7 = _v2._length, _v10 = _v2._length) : (_v2 = _v99.newElement(), _v7 = 0, _v10 = 0), _v15.push(_v2), _v3 = 0; _v3 < _v13; _v3 += 1) {
        for (_v8 = _v11[_v3].lengths, _v2.c = _v12[_v3].c, _v5 = _v12[_v3].c ? _v8.length : _v8.length + 1, _v4 = 1; _v4 < _v5; _v4 += 1) if (_v14 + (_v6 = _v8[_v4 - 1]).addedLength < _v1.s) _v14 += _v6.addedLength, _v2.c = !1;else if (_v14 > _v1.e) {
          _v2.c = !1;
          break;
        } else _v1.s <= _v14 && _v1.e >= _v14 + _v6.addedLength ? (this.addSegment(_v12[_v3].v[_v4 - 1], _v12[_v3].o[_v4 - 1], _v12[_v3].i[_v4], _v12[_v3].v[_v4], _v2, _v7, _v16), _v16 = !1) : (_v9 = _v80.getNewSegment(_v12[_v3].v[_v4 - 1], _v12[_v3].v[_v4], _v12[_v3].o[_v4 - 1], _v12[_v3].i[_v4], (_v1.s - _v14) / _v6.addedLength, (_v1.e - _v14) / _v6.addedLength, _v8[_v4 - 1]), this.addSegmentFromArray(_v9, _v2, _v7, _v16), _v16 = !1, _v2.c = !1), _v14 += _v6.addedLength, _v7 += 1;
        if (_v12[_v3].c && _v8.length) {
          if (_v6 = _v8[_v4 - 1], _v14 <= _v1.e) {
            var _v17 = _v8[_v4 - 1].addedLength;
            _v1.s <= _v14 && _v1.e >= _v14 + _v17 ? (this.addSegment(_v12[_v3].v[_v4 - 1], _v12[_v3].o[_v4 - 1], _v12[_v3].i[0], _v12[_v3].v[0], _v2, _v7, _v16), _v16 = !1) : (_v9 = _v80.getNewSegment(_v12[_v3].v[_v4 - 1], _v12[_v3].v[0], _v12[_v3].o[_v4 - 1], _v12[_v3].i[0], (_v1.s - _v14) / _v17, (_v1.e - _v14) / _v17, _v8[_v4 - 1]), this.addSegmentFromArray(_v9, _v2, _v7, _v16), _v16 = !1, _v2.c = !1);
          } else _v2.c = !1;
          _v14 += _v6.addedLength, _v7 += 1;
        }
        if (_v2._length && (_v2.setXYAt(_v2.v[_v10][0], _v2.v[_v10][1], "i", _v10), _v2.setXYAt(_v2.v[_v2._length - 1][0], _v2.v[_v2._length - 1][1], "o", _v2._length - 1)), _v14 > _v1.e) break;
        _v3 < _v13 - 1 && (_v2 = _v99.newElement(), _v16 = !0, _v15.push(_v2), _v7 = 0);
      }
      return _v15;
    }, _v9([_v126], _v128), _v128.prototype.initModifierProperties = function (_v0, _v1) {
      this.getValue = this.processKeys, this.amount = _v95.getProp(_v0, _v1.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length;
    }, _v128.prototype.processPath = function (_v0, _v1) {
      var _v2,
        _v3,
        _v4,
        _v5,
        _v6,
        _v7,
        _v8 = _v1 / 100,
        _v9 = [0, 0],
        _v10 = _v0._length,
        _v11 = 0;
      for (_v11 = 0; _v11 < _v10; _v11 += 1) _v9[0] += _v0.v[_v11][0], _v9[1] += _v0.v[_v11][1];
      _v9[0] /= _v10, _v9[1] /= _v10;
      var _v12 = _v99.newElement();
      for (_v12.c = _v0.c, _v11 = 0; _v11 < _v10; _v11 += 1) _v2 = _v0.v[_v11][0] + (_v9[0] - _v0.v[_v11][0]) * _v8, _v3 = _v0.v[_v11][1] + (_v9[1] - _v0.v[_v11][1]) * _v8, _v4 = _v0.o[_v11][0] + -((_v9[0] - _v0.o[_v11][0]) * _v8), _v5 = _v0.o[_v11][1] + -((_v9[1] - _v0.o[_v11][1]) * _v8), _v6 = _v0.i[_v11][0] + -((_v9[0] - _v0.i[_v11][0]) * _v8), _v7 = _v0.i[_v11][1] + -((_v9[1] - _v0.i[_v11][1]) * _v8), _v12.setTripleAt(_v2, _v3, _v4, _v5, _v6, _v7, _v11);
      return _v12;
    }, _v128.prototype.processShapes = function (_v0) {
      var _v1,
        _v2,
        _v3,
        _v4,
        _v5,
        _v6,
        _v7 = this.shapes.length,
        _v8 = this.amount.v;
      if (0 !== _v8) for (_v2 = 0; _v2 < _v7; _v2 += 1) {
        if (_v6 = (_v5 = this.shapes[_v2]).localShapeCollection, !(!_v5.shape._mdf && !this._mdf && !_v0)) for (_v6.releaseShapes(), _v5.shape._mdf = !0, _v1 = _v5.shape.paths.shapes, _v4 = _v5.shape.paths._length, _v3 = 0; _v3 < _v4; _v3 += 1) _v6.addShape(this.processPath(_v1[_v3], _v8));
        _v5.shape.paths = _v5.localShapeCollection;
      }
      this.dynamicProperties.length || (this._mdf = !1);
    };
    var _v129 = function () {
      var _v0 = [0, 0];
      function _v1(_v0) {
        this._addDynamicProperty(_v0), this.elem.addDynamicProperty(_v0), this._isDirty = !0;
      }
      function _v2(_v0, _v1, _v2) {
        if (this.elem = _v0, this.frameId = -1, this.propType = "transform", this.data = _v1, this.v = new _v103(), this.pre = new _v103(), this.appliedTransformations = 0, this.initDynamicPropertyContainer(_v2 || _v0), _v1.p && _v1.p.s ? (this.px = _v95.getProp(_v0, _v1.p.x, 0, 0, this), this.py = _v95.getProp(_v0, _v1.p.y, 0, 0, this), _v1.p.z && (this.pz = _v95.getProp(_v0, _v1.p.z, 0, 0, this))) : this.p = _v95.getProp(_v0, _v1.p || {
          k: [0, 0, 0]
        }, 1, 0, this), _v1.rx) {
          if (this.rx = _v95.getProp(_v0, _v1.rx, 0, _v30, this), this.ry = _v95.getProp(_v0, _v1.ry, 0, _v30, this), this.rz = _v95.getProp(_v0, _v1.rz, 0, _v30, this), _v1.or.k[0].ti) {
            var _v3,
              _v4 = _v1.or.k.length;
            for (_v3 = 0; _v3 < _v4; _v3 += 1) _v1.or.k[_v3].to = null, _v1.or.k[_v3].ti = null;
          }
          this.or = _v95.getProp(_v0, _v1.or, 1, _v30, this), this.or.sh = !0;
        } else this.r = _v95.getProp(_v0, _v1.r || {
          k: 0
        }, 0, _v30, this);
        _v1.sk && (this.sk = _v95.getProp(_v0, _v1.sk, 0, _v30, this), this.sa = _v95.getProp(_v0, _v1.sa, 0, _v30, this)), this.a = _v95.getProp(_v0, _v1.a || {
          k: [0, 0, 0]
        }, 1, 0, this), this.s = _v95.getProp(_v0, _v1.s || {
          k: [100, 100, 100]
        }, 1, .01, this), _v1.o ? this.o = _v95.getProp(_v0, _v1.o, 0, .01, _v0) : this.o = {
          _mdf: !1,
          v: 1
        }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0);
      }
      return _v2.prototype = {
        applyToMatrix: function (_v0) {
          var _v1 = this._mdf;
          this.iterateDynamicProperties(), this._mdf = this._mdf || _v1, this.a && _v0.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && _v0.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && _v0.skewFromAxis(-this.sk.v, this.sa.v), this.r ? _v0.rotate(-this.r.v) : _v0.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? _v0.translate(this.px.v, this.py.v, -this.pz.v) : _v0.translate(this.px.v, this.py.v, 0) : _v0.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
        },
        getValue: function (_v0) {
          if (this.elem.globalData.frameId !== this.frameId) {
            if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || _v0) {
              var _v1;
              if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                if (_v1 = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (_v2 = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / _v1, 0), _v3 = this.p.getValueAtTime(this.p.keyframes[0].t / _v1, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (_v2 = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / _v1, 0), _v3 = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / _v1, 0)) : (_v2 = this.p.pv, _v3 = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / _v1, this.p.offsetTime));else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                  var _v2 = [],
                    _v3 = [],
                    _v4 = this.px,
                    _v5 = this.py;
                  _v4._caching.lastFrame + _v4.offsetTime <= _v4.keyframes[0].t ? (_v2[0] = _v4.getValueAtTime((_v4.keyframes[0].t + .01) / _v1, 0), _v2[1] = _v5.getValueAtTime((_v5.keyframes[0].t + .01) / _v1, 0), _v3[0] = _v4.getValueAtTime(_v4.keyframes[0].t / _v1, 0), _v3[1] = _v5.getValueAtTime(_v5.keyframes[0].t / _v1, 0)) : _v4._caching.lastFrame + _v4.offsetTime >= _v4.keyframes[_v4.keyframes.length - 1].t ? (_v2[0] = _v4.getValueAtTime(_v4.keyframes[_v4.keyframes.length - 1].t / _v1, 0), _v2[1] = _v5.getValueAtTime(_v5.keyframes[_v5.keyframes.length - 1].t / _v1, 0), _v3[0] = _v4.getValueAtTime((_v4.keyframes[_v4.keyframes.length - 1].t - .01) / _v1, 0), _v3[1] = _v5.getValueAtTime((_v5.keyframes[_v5.keyframes.length - 1].t - .01) / _v1, 0)) : (_v2 = [_v4.pv, _v5.pv], _v3[0] = _v4.getValueAtTime((_v4._caching.lastFrame + _v4.offsetTime - .01) / _v1, _v4.offsetTime), _v3[1] = _v5.getValueAtTime((_v5._caching.lastFrame + _v5.offsetTime - .01) / _v1, _v5.offsetTime));
                } else _v2 = _v3 = _v0;
                this.v.rotate(-Math.atan2(_v2[1] - _v3[1], _v2[0] - _v3[0]));
              }
              this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
            }
            this.frameId = this.elem.globalData.frameId;
          }
        },
        precalculateMatrix: function () {
          if (this.appliedTransformations = 0, this.pre.reset(), !this.a.effectsSequence.length) {
            if (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length) {
              if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;else this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3;
              this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4);
            }
          }
        },
        autoOrient: function () {}
      }, _v9([_v96], _v2), _v2.prototype.addDynamicProperty = _v1, _v2.prototype._addDynamicProperty = _v96.prototype.addDynamicProperty, {
        getTransformProperty: function (_v0, _v1, _v2) {
          return new _v2(_v0, _v1, _v2);
        }
      };
    }();
    function _v130() {}
    function _v131() {}
    function _v132(_v0, _v1) {
      return 0 * Math.abs(_v0 - _v1) <= Math.min(Math.abs(_v0), Math.abs(_v1));
    }
    function _v133(_v0) {
      return 1e-5 >= Math.abs(_v0);
    }
    function _v134(_v0, _v1, _v2) {
      return _v0 * (1 - _v2) + _v1 * _v2;
    }
    function _v135(_v0, _v1, _v2) {
      return [_v134(_v0[0], _v1[0], _v2), _v134(_v0[1], _v1[1], _v2)];
    }
    function _v136(_v0, _v1, _v2) {
      if (0 === _v0) return [];
      var _v3 = _v1 * _v1 - 4 * _v0 * _v2;
      if (_v3 < 0) return [];
      var _v4 = -_v1 / (2 * _v0);
      if (0 === _v3) return [_v4];
      var _v5 = Math.sqrt(_v3) / (2 * _v0);
      return [_v4 - _v5, _v4 + _v5];
    }
    function _v137(_v0, _v1, _v2, _v3) {
      return [-_v0 + 3 * _v1 - 3 * _v2 + _v3, 3 * _v0 - 6 * _v1 + 3 * _v2, -3 * _v0 + 3 * _v1, _v0];
    }
    function _v138(_v0) {
      return new _v139(_v0, _v0, _v0, _v0, !1);
    }
    function _v139(_v0, _v1, _v2, _v3, _v4) {
      _v4 && _v149(_v0, _v1) && (_v1 = _v135(_v0, _v3, 1 / 3)), _v4 && _v149(_v2, _v3) && (_v2 = _v135(_v0, _v3, 2 / 3));
      var _v5 = _v137(_v0[0], _v1[0], _v2[0], _v3[0]),
        _v6 = _v137(_v0[1], _v1[1], _v2[1], _v3[1]);
      this.a = [_v5[0], _v6[0]], this.b = [_v5[1], _v6[1]], this.c = [_v5[2], _v6[2]], this.d = [_v5[3], _v6[3]], this.points = [_v0, _v1, _v2, _v3];
    }
    function _v140(_v0, _v1) {
      var _v2 = _v0.points[0][_v1],
        _v3 = _v0.points[_v0.points.length - 1][_v1];
      if (_v2 > _v3) {
        var _v4 = _v3;
        _v3 = _v2, _v2 = _v4;
      }
      for (var _v5 = _v136(3 * _v0.a[_v1], 2 * _v0.b[_v1], _v0.c[_v1]), _v6 = 0; _v6 < _v5.length; _v6 += 1) if (_v5[_v6] > 0 && _v5[_v6] < 1) {
        var _v7 = _v0.point(_v5[_v6])[_v1];
        _v7 < _v2 ? _v2 = _v7 : _v7 > _v3 && (_v3 = _v7);
      }
      return {
        min: _v2,
        max: _v3
      };
    }
    function _v141(_v0, _v1, _v2) {
      var _v3 = _v0.boundingBox();
      return {
        cx: _v3.cx,
        cy: _v3.cy,
        width: _v3.width,
        height: _v3.height,
        bez: _v0,
        t: (_v1 + _v2) / 2,
        t1: _v1,
        t2: _v2
      };
    }
    function _v142(_v0) {
      var _v1 = _v0.bez.split(.5);
      return [_v141(_v1[0], _v0.t1, _v0.t), _v141(_v1[1], _v0.t, _v0.t2)];
    }
    function _v143(_v0, _v1) {
      return 2 * Math.abs(_v0.cx - _v1.cx) < _v0.width + _v1.width && 2 * Math.abs(_v0.cy - _v1.cy) < _v0.height + _v1.height;
    }
    function _v144(_v0, _v1, _v2, _v3, _v4, _v5) {
      if (_v143(_v0, _v1)) {
        if (_v2 >= _v5 || _v0.width <= _v3 && _v0.height <= _v3 && _v1.width <= _v3 && _v1.height <= _v3) return void _v4.push([_v0.t, _v1.t]);
        var _v6 = _v142(_v0),
          _v7 = _v142(_v1);
        _v144(_v6[0], _v7[0], _v2 + 1, _v3, _v4, _v5), _v144(_v6[0], _v7[1], _v2 + 1, _v3, _v4, _v5), _v144(_v6[1], _v7[0], _v2 + 1, _v3, _v4, _v5), _v144(_v6[1], _v7[1], _v2 + 1, _v3, _v4, _v5);
      }
    }
    function _v145(_v0, _v1) {
      return [_v0[1] * _v1[2] - _v0[2] * _v1[1], _v0[2] * _v1[0] - _v0[0] * _v1[2], _v0[0] * _v1[1] - _v0[1] * _v1[0]];
    }
    function _v146(_v0, _v1, _v2, _v3) {
      var _v4 = [_v0[0], _v0[1], 1],
        _v5 = [_v1[0], _v1[1], 1],
        _v6 = [_v2[0], _v2[1], 1],
        _v7 = [_v3[0], _v3[1], 1],
        _v8 = _v145(_v145(_v4, _v5), _v145(_v6, _v7));
      return _v133(_v8[2]) ? null : [_v8[0] / _v8[2], _v8[1] / _v8[2]];
    }
    function _v147(_v0, _v1, _v2) {
      return [_v0[0] + Math.cos(_v1) * _v2, _v0[1] - Math.sin(_v1) * _v2];
    }
    function _v148(_v0, _v1) {
      return Math.hypot(_v0[0] - _v1[0], _v0[1] - _v1[1]);
    }
    function _v149(_v0, _v1) {
      return _v132(_v0[0], _v1[0]) && _v132(_v0[1], _v1[1]);
    }
    function _v150() {}
    function _v151(_v0, _v1, _v2, _v3, _v4, _v5, _v6) {
      var _v7 = _v2 - Math.PI / 2,
        _v8 = _v2 + Math.PI / 2,
        _v9 = _v1[0] + Math.cos(_v2) * _v3 * _v4,
        _v10 = _v1[1] - Math.sin(_v2) * _v3 * _v4;
      _v0.setTripleAt(_v9, _v10, _v9 + Math.cos(_v7) * _v5, _v10 - Math.sin(_v7) * _v5, _v9 + Math.cos(_v8) * _v6, _v10 - Math.sin(_v8) * _v6, _v0.length());
    }
    function _v152(_v0, _v1) {
      var _v2 = [_v1[0] - _v0[0], _v1[1] - _v0[1]],
        _v3 = -(.5 * Math.PI);
      return [Math.cos(_v3) * _v2[0] - Math.sin(_v3) * _v2[1], Math.sin(_v3) * _v2[0] + Math.cos(_v3) * _v2[1]];
    }
    function _v153(_v0, _v1) {
      var _v2 = 0 === _v1 ? _v0.length() - 1 : _v1 - 1,
        _v3 = (_v1 + 1) % _v0.length(),
        _v4 = _v152(_v0.v[_v2], _v0.v[_v3]);
      return Math.atan2(0, 1) - Math.atan2(_v4[1], _v4[0]);
    }
    function _v154(_v0, _v1, _v2, _v3, _v4, _v5, _v6) {
      var _v7 = _v153(_v1, _v2),
        _v8 = _v1.v[_v2 % _v1._length],
        _v9 = _v1.v[0 === _v2 ? _v1._length - 1 : _v2 - 1],
        _v10 = _v1.v[(_v2 + 1) % _v1._length],
        _v11 = 2 === _v5 ? Math.sqrt(Math.pow(_v8[0] - _v9[0], 2) + Math.pow(_v8[1] - _v9[1], 2)) : 0,
        _v12 = 2 === _v5 ? Math.sqrt(Math.pow(_v8[0] - _v10[0], 2) + Math.pow(_v8[1] - _v10[1], 2)) : 0;
      _v151(_v0, _v1.v[_v2 % _v1._length], _v7, _v6, _v3, _v12 / ((_v4 + 1) * 2), _v11 / ((_v4 + 1) * 2), _v5);
    }
    function _v155(_v0, _v1, _v2, _v3, _v4, _v5) {
      for (var _v6 = 0; _v6 < _v3; _v6 += 1) {
        var _v7 = (_v6 + 1) / (_v3 + 1),
          _v8 = 2 === _v4 ? Math.sqrt(Math.pow(_v1.points[3][0] - _v1.points[0][0], 2) + Math.pow(_v1.points[3][1] - _v1.points[0][1], 2)) : 0,
          _v9 = _v1.normalAngle(_v7);
        _v151(_v0, _v1.point(_v7), _v9, _v5, _v2, _v8 / ((_v3 + 1) * 2), _v8 / ((_v3 + 1) * 2), _v4), _v5 = -_v5;
      }
      return _v5;
    }
    function _v156(_v0, _v1, _v2) {
      var _v3 = Math.atan2(_v1[0] - _v0[0], _v1[1] - _v0[1]);
      return [_v147(_v0, _v3, _v2), _v147(_v1, _v3, _v2)];
    }
    function _v157(_v0, _v1) {
      _v2 = (_v7 = _v156(_v0.points[0], _v0.points[1], _v1))[0], _v3 = _v7[1], _v4 = (_v7 = _v156(_v0.points[1], _v0.points[2], _v1))[0], _v5 = _v7[1], _v6 = (_v7 = _v156(_v0.points[2], _v0.points[3], _v1))[0];
      var _v2,
        _v3,
        _v4,
        _v5,
        _v6,
        _v7,
        _v8 = _v7[1],
        _v9 = _v146(_v2, _v3, _v4, _v5);
      null === _v9 && (_v9 = _v3);
      var _v10 = _v146(_v6, _v8, _v4, _v5);
      return null === _v10 && (_v10 = _v6), new _v139(_v2, _v9, _v10, _v8);
    }
    function _v158(_v0, _v1, _v2, _v3, _v4) {
      var _v5 = _v1.points[3],
        _v6 = _v2.points[0];
      if (3 === _v3 || _v149(_v5, _v6)) return _v5;
      if (2 === _v3) {
        var _v7 = -_v1.tangentAngle(1),
          _v8 = -_v2.tangentAngle(0) + Math.PI,
          _v9 = _v146(_v5, _v147(_v5, _v7 + Math.PI / 2, 100), _v6, _v147(_v6, _v7 + Math.PI / 2, 100)),
          _v10 = _v9 ? _v148(_v9, _v5) : _v148(_v5, _v6) / 2,
          _v11 = _v147(_v5, _v7, 2 * _v10 * _v31);
        return _v0.setXYAt(_v11[0], _v11[1], "o", _v0.length() - 1), _v11 = _v147(_v6, _v8, 2 * _v10 * _v31), _v0.setTripleAt(_v6[0], _v6[1], _v6[0], _v6[1], _v11[0], _v11[1], _v0.length()), _v6;
      }
      var _v12 = _v149(_v5, _v1.points[2]) ? _v1.points[0] : _v1.points[2],
        _v13 = _v149(_v6, _v2.points[1]) ? _v2.points[3] : _v2.points[1],
        _v14 = _v146(_v12, _v5, _v6, _v13);
      return _v14 && _v148(_v14, _v5) < _v4 ? (_v0.setTripleAt(_v14[0], _v14[1], _v14[0], _v14[1], _v14[0], _v14[1], _v0.length()), _v14) : _v5;
    }
    function _v159(_v0, _v1) {
      var _v2 = _v0.intersections(_v1);
      return (_v2.length && _v132(_v2[0][0], 1) && _v2.shift(), _v2.length) ? _v2[0] : null;
    }
    function _v160(_v0, _v1) {
      var _v2 = _v0.slice(),
        _v3 = _v1.slice(),
        _v4 = _v159(_v0[_v0.length - 1], _v1[0]);
      return (_v4 && (_v2[_v0.length - 1] = _v0[_v0.length - 1].split(_v4[0])[0], _v3[0] = _v1[0].split(_v4[1])[1]), _v0.length > 1 && _v1.length > 1 && (_v4 = _v159(_v0[0], _v1[_v1.length - 1]))) ? [[_v0[0].split(_v4[0])[0]], [_v1[_v1.length - 1].split(_v4[1])[1]]] : [_v2, _v3];
    }
    function _v161(_v0) {
      for (var _v1, _v2 = 1; _v2 < _v0.length; _v2 += 1) _v1 = _v160(_v0[_v2 - 1], _v0[_v2]), _v0[_v2 - 1] = _v1[0], _v0[_v2] = _v1[1];
      return _v0.length > 1 && (_v1 = _v160(_v0[_v0.length - 1], _v0[0]), _v0[_v0.length - 1] = _v1[0], _v0[0] = _v1[1]), _v0;
    }
    function _v162(_v0, _v1) {
      var _v2,
        _v3,
        _v4,
        _v5,
        _v6 = _v0.inflectionPoints();
      if (0 === _v6.length) return [_v157(_v0, _v1)];
      if (1 === _v6.length || _v132(_v6[1], 1)) return _v2 = (_v4 = _v0.split(_v6[0]))[0], _v3 = _v4[1], [_v157(_v2, _v1), _v157(_v3, _v1)];
      _v2 = (_v4 = _v0.split(_v6[0]))[0];
      var _v7 = (_v6[1] - _v6[0]) / (1 - _v6[0]);
      return _v5 = (_v4 = _v4[1].split(_v7))[0], _v3 = _v4[1], [_v157(_v2, _v1), _v157(_v5, _v1), _v157(_v3, _v1)];
    }
    function _v163() {}
    function _v164(_v0) {
      for (var _v1 = _v0.fStyle ? _v0.fStyle.split(" ") : [], _v2 = "normal", _v3 = "normal", _v4 = _v1.length, _v5 = 0; _v5 < _v4; _v5 += 1) switch (_v1[_v5].toLowerCase()) {
        case "italic":
          _v3 = "italic";
          break;
        case "bold":
          _v2 = "700";
          break;
        case "black":
          _v2 = "900";
          break;
        case "medium":
          _v2 = "500";
          break;
        case "regular":
        case "normal":
          _v2 = "400";
          break;
        case "light":
        case "thin":
          _v2 = "200";
      }
      return {
        style: _v3,
        weight: _v0.fWeight || _v2
      };
    }
    _v9([_v126], _v130), _v130.prototype.initModifierProperties = function (_v0, _v1) {
      this.getValue = this.processKeys, this.c = _v95.getProp(_v0, _v1.c, 0, null, this), this.o = _v95.getProp(_v0, _v1.o, 0, null, this), this.tr = _v129.getTransformProperty(_v0, _v1.tr, this), this.so = _v95.getProp(_v0, _v1.tr.so, 0, .01, this), this.eo = _v95.getProp(_v0, _v1.tr.eo, 0, .01, this), this.data = _v1, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new _v103(), this.rMatrix = new _v103(), this.sMatrix = new _v103(), this.tMatrix = new _v103(), this.matrix = new _v103();
    }, _v130.prototype.applyTransforms = function (_v0, _v1, _v2, _v3, _v4, _v5) {
      var _v6 = _v5 ? -1 : 1,
        _v7 = _v3.s.v[0] + (1 - _v3.s.v[0]) * (1 - _v4),
        _v8 = _v3.s.v[1] + (1 - _v3.s.v[1]) * (1 - _v4);
      _v0.translate(_v3.p.v[0] * _v6 * _v4, _v3.p.v[1] * _v6 * _v4, _v3.p.v[2]), _v1.translate(-_v3.a.v[0], -_v3.a.v[1], _v3.a.v[2]), _v1.rotate(-_v3.r.v * _v6 * _v4), _v1.translate(_v3.a.v[0], _v3.a.v[1], _v3.a.v[2]), _v2.translate(-_v3.a.v[0], -_v3.a.v[1], _v3.a.v[2]), _v2.scale(_v5 ? 1 / _v7 : _v7, _v5 ? 1 / _v8 : _v8), _v2.translate(_v3.a.v[0], _v3.a.v[1], _v3.a.v[2]);
    }, _v130.prototype.init = function (_v0, _v1, _v2, _v3) {
      for (this.elem = _v0, this.arr = _v1, this.pos = _v2, this.elemsData = _v3, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(_v0), this.initModifierProperties(_v0, _v1[_v2]); _v2 > 0;) _v2 -= 1, this._elements.unshift(_v1[_v2]);
      this.dynamicProperties.length ? this.k = !0 : this.getValue(!0);
    }, _v130.prototype.resetElements = function (_v0) {
      var _v1,
        _v2 = _v0.length;
      for (_v1 = 0; _v1 < _v2; _v1 += 1) _v0[_v1]._processed = !1, "gr" === _v0[_v1].ty && this.resetElements(_v0[_v1].it);
    }, _v130.prototype.cloneElements = function (_v0) {
      var _v1 = JSON.parse(JSON.stringify(_v0));
      return this.resetElements(_v1), _v1;
    }, _v130.prototype.changeGroupRender = function (_v0, _v1) {
      var _v2,
        _v3 = _v0.length;
      for (_v2 = 0; _v2 < _v3; _v2 += 1) _v0[_v2]._render = _v1, "gr" === _v0[_v2].ty && this.changeGroupRender(_v0[_v2].it, _v1);
    }, _v130.prototype.processShapes = function (_v0) {
      var _v1 = !1;
      if (this._mdf || _v0) {
        var _v2,
          _v3,
          _v4,
          _v5,
          _v6,
          _v7,
          _v8,
          _v9,
          _v10 = Math.ceil(this.c.v);
        if (this._groups.length < _v10) {
          for (; this._groups.length < _v10;) {
            var _v11 = {
              it: this.cloneElements(this._elements),
              ty: "gr"
            };
            _v11.it.push({
              a: {
                a: 0,
                ix: 1,
                k: [0, 0]
              },
              nm: "Transform",
              o: {
                a: 0,
                ix: 7,
                k: 100
              },
              p: {
                a: 0,
                ix: 2,
                k: [0, 0]
              },
              r: {
                a: 1,
                ix: 6,
                k: [{
                  s: 0,
                  e: 0,
                  t: 0
                }, {
                  s: 0,
                  e: 0,
                  t: 1
                }]
              },
              s: {
                a: 0,
                ix: 3,
                k: [100, 100]
              },
              sa: {
                a: 0,
                ix: 5,
                k: 0
              },
              sk: {
                a: 0,
                ix: 4,
                k: 0
              },
              ty: "tr"
            }), this.arr.splice(0, 0, _v11), this._groups.splice(0, 0, _v11), this._currentCopies += 1;
          }
          this.elem.reloadShapes(), _v1 = !0;
        }
        for (_v4 = 0, _v6 = 0; _v4 <= this._groups.length - 1; _v4 += 1) {
          if (_v7 = _v6 < _v10, this._groups[_v4]._render = _v7, this.changeGroupRender(this._groups[_v4].it, _v7), !_v7) {
            var _v12 = this.elemsData[_v4].it,
              _v13 = _v12[_v12.length - 1];
            0 !== _v13.transform.op.v ? (_v13.transform.op._mdf = !0, _v13.transform.op.v = 0) : _v13.transform.op._mdf = !1;
          }
          _v6 += 1;
        }
        this._currentCopies = _v10;
        var _v14 = this.o.v,
          _v15 = _v14 % 1,
          _v16 = _v14 > 0 ? Math.floor(_v14) : Math.ceil(_v14),
          _v17 = this.pMatrix.props,
          _v18 = this.rMatrix.props,
          _v19 = this.sMatrix.props;
        this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
        var _v20 = 0;
        if (_v14 > 0) {
          for (; _v20 < _v16;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), _v20 += 1;
          _v15 && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, _v15, !1), _v20 += _v15);
        } else if (_v14 < 0) {
          for (; _v20 > _v16;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), _v20 -= 1;
          _v15 && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -_v15, !0), _v20 -= _v15);
        }
        for (_v4 = 1 === this.data.m ? 0 : this._currentCopies - 1, _v5 = 1 === this.data.m ? 1 : -1, _v6 = this._currentCopies; _v6;) {
          if (_v9 = (_v3 = (_v2 = this.elemsData[_v4].it)[_v2.length - 1].transform.mProps.v.props).length, _v2[_v2.length - 1].transform.mProps._mdf = !0, _v2[_v2.length - 1].transform.op._mdf = !0, _v2[_v2.length - 1].transform.op.v = 1 === this._currentCopies ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (_v4 / (this._currentCopies - 1)), 0 !== _v20) {
            for ((0 !== _v4 && 1 === _v5 || _v4 !== this._currentCopies - 1 && -1 === _v5) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(_v18[0], _v18[1], _v18[2], _v18[3], _v18[4], _v18[5], _v18[6], _v18[7], _v18[8], _v18[9], _v18[10], _v18[11], _v18[12], _v18[13], _v18[14], _v18[15]), this.matrix.transform(_v19[0], _v19[1], _v19[2], _v19[3], _v19[4], _v19[5], _v19[6], _v19[7], _v19[8], _v19[9], _v19[10], _v19[11], _v19[12], _v19[13], _v19[14], _v19[15]), this.matrix.transform(_v17[0], _v17[1], _v17[2], _v17[3], _v17[4], _v17[5], _v17[6], _v17[7], _v17[8], _v17[9], _v17[10], _v17[11], _v17[12], _v17[13], _v17[14], _v17[15]), _v8 = 0; _v8 < _v9; _v8 += 1) _v3[_v8] = this.matrix.props[_v8];
            this.matrix.reset();
          } else for (this.matrix.reset(), _v8 = 0; _v8 < _v9; _v8 += 1) _v3[_v8] = this.matrix.props[_v8];
          _v20 += 1, _v6 -= 1, _v4 += _v5;
        }
      } else for (_v6 = this._currentCopies, _v4 = 0, _v5 = 1; _v6;) _v3 = (_v2 = this.elemsData[_v4].it)[_v2.length - 1].transform.mProps.v.props, _v2[_v2.length - 1].transform.mProps._mdf = !1, _v2[_v2.length - 1].transform.op._mdf = !1, _v6 -= 1, _v4 += _v5;
      return _v1;
    }, _v130.prototype.addShape = function () {}, _v9([_v126], _v131), _v131.prototype.initModifierProperties = function (_v0, _v1) {
      this.getValue = this.processKeys, this.rd = _v95.getProp(_v0, _v1.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length;
    }, _v131.prototype.processPath = function (_v0, _v1) {
      var _v2,
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
        _v15 = _v99.newElement();
      _v15.c = _v0.c;
      var _v16 = _v0._length,
        _v17 = 0;
      for (_v2 = 0; _v2 < _v16; _v2 += 1) _v3 = _v0.v[_v2], _v5 = _v0.o[_v2], _v4 = _v0.i[_v2], _v3[0] === _v5[0] && _v3[1] === _v5[1] && _v3[0] === _v4[0] && _v3[1] === _v4[1] ? 0 !== _v2 && _v2 !== _v16 - 1 || _v0.c ? (_v6 = 0 === _v2 ? _v0.v[_v16 - 1] : _v0.v[_v2 - 1], _v8 = (_v7 = Math.sqrt(Math.pow(_v3[0] - _v6[0], 2) + Math.pow(_v3[1] - _v6[1], 2))) ? Math.min(_v7 / 2, _v1) / _v7 : 0, _v9 = _v13 = _v3[0] + (_v6[0] - _v3[0]) * _v8, _v10 = _v14 = _v3[1] - (_v3[1] - _v6[1]) * _v8, _v11 = _v9 - (_v9 - _v3[0]) * _v31, _v12 = _v10 - (_v10 - _v3[1]) * _v31, _v15.setTripleAt(_v9, _v10, _v11, _v12, _v13, _v14, _v17), _v17 += 1, _v6 = _v2 === _v16 - 1 ? _v0.v[0] : _v0.v[_v2 + 1], _v8 = (_v7 = Math.sqrt(Math.pow(_v3[0] - _v6[0], 2) + Math.pow(_v3[1] - _v6[1], 2))) ? Math.min(_v7 / 2, _v1) / _v7 : 0, _v9 = _v11 = _v3[0] + (_v6[0] - _v3[0]) * _v8, _v10 = _v12 = _v3[1] + (_v6[1] - _v3[1]) * _v8, _v13 = _v9 - (_v9 - _v3[0]) * _v31, _v14 = _v10 - (_v10 - _v3[1]) * _v31, _v15.setTripleAt(_v9, _v10, _v11, _v12, _v13, _v14, _v17)) : _v15.setTripleAt(_v3[0], _v3[1], _v5[0], _v5[1], _v4[0], _v4[1], _v17) : _v15.setTripleAt(_v0.v[_v2][0], _v0.v[_v2][1], _v0.o[_v2][0], _v0.o[_v2][1], _v0.i[_v2][0], _v0.i[_v2][1], _v17), _v17 += 1;
      return _v15;
    }, _v131.prototype.processShapes = function (_v0) {
      var _v1,
        _v2,
        _v3,
        _v4,
        _v5,
        _v6,
        _v7 = this.shapes.length,
        _v8 = this.rd.v;
      if (0 !== _v8) for (_v2 = 0; _v2 < _v7; _v2 += 1) {
        if (_v6 = (_v5 = this.shapes[_v2]).localShapeCollection, !(!_v5.shape._mdf && !this._mdf && !_v0)) for (_v6.releaseShapes(), _v5.shape._mdf = !0, _v1 = _v5.shape.paths.shapes, _v4 = _v5.shape.paths._length, _v3 = 0; _v3 < _v4; _v3 += 1) _v6.addShape(this.processPath(_v1[_v3], _v8));
        _v5.shape.paths = _v5.localShapeCollection;
      }
      this.dynamicProperties.length || (this._mdf = !1);
    }, _v139.prototype.point = function (_v0) {
      return [((this.a[0] * _v0 + this.b[0]) * _v0 + this.c[0]) * _v0 + this.d[0], ((this.a[1] * _v0 + this.b[1]) * _v0 + this.c[1]) * _v0 + this.d[1]];
    }, _v139.prototype.derivative = function (_v0) {
      return [(3 * _v0 * this.a[0] + 2 * this.b[0]) * _v0 + this.c[0], (3 * _v0 * this.a[1] + 2 * this.b[1]) * _v0 + this.c[1]];
    }, _v139.prototype.tangentAngle = function (_v0) {
      var _v1 = this.derivative(_v0);
      return Math.atan2(_v1[1], _v1[0]);
    }, _v139.prototype.normalAngle = function (_v0) {
      var _v1 = this.derivative(_v0);
      return Math.atan2(_v1[0], _v1[1]);
    }, _v139.prototype.inflectionPoints = function () {
      var _v0 = this.a[1] * this.b[0] - this.a[0] * this.b[1];
      if (_v133(_v0)) return [];
      var _v1 = -.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / _v0,
        _v2 = _v1 * _v1 - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / _v0;
      if (_v2 < 0) return [];
      var _v3 = Math.sqrt(_v2);
      return _v133(_v3) ? _v3 > 0 && _v3 < 1 ? [_v1] : [] : [_v1 - _v3, _v1 + _v3].filter(function (_v0) {
        return _v0 > 0 && _v0 < 1;
      });
    }, _v139.prototype.split = function (_v0) {
      if (_v0 <= 0) return [_v138(this.points[0]), this];
      if (_v0 >= 1) return [this, _v138(this.points[this.points.length - 1])];
      var _v1 = _v135(this.points[0], this.points[1], _v0),
        _v2 = _v135(this.points[1], this.points[2], _v0),
        _v3 = _v135(this.points[2], this.points[3], _v0),
        _v4 = _v135(_v1, _v2, _v0),
        _v5 = _v135(_v2, _v3, _v0),
        _v6 = _v135(_v4, _v5, _v0);
      return [new _v139(this.points[0], _v1, _v4, _v6, !0), new _v139(_v6, _v5, _v3, this.points[3], !0)];
    }, _v139.prototype.bounds = function () {
      return {
        x: _v140(this, 0),
        y: _v140(this, 1)
      };
    }, _v139.prototype.boundingBox = function () {
      var _v0 = this.bounds();
      return {
        left: _v0.x.min,
        right: _v0.x.max,
        top: _v0.y.min,
        bottom: _v0.y.max,
        width: _v0.x.max - _v0.x.min,
        height: _v0.y.max - _v0.y.min,
        cx: (_v0.x.max + _v0.x.min) / 2,
        cy: (_v0.y.max + _v0.y.min) / 2
      };
    }, _v139.prototype.intersections = function (_v0, _v1, _v2) {
      void 0 === _v1 && (_v1 = 2), void 0 === _v2 && (_v2 = 7);
      var _v3 = [];
      return _v144(_v141(this, 0, 1), _v141(_v0, 0, 1), 0, _v1, _v3, _v2), _v3;
    }, _v139.shapeSegment = function (_v0, _v1) {
      var _v2 = (_v1 + 1) % _v0.length();
      return new _v139(_v0.v[_v1], _v0.o[_v1], _v0.i[_v2], _v0.v[_v2], !0);
    }, _v139.shapeSegmentInverted = function (_v0, _v1) {
      var _v2 = (_v1 + 1) % _v0.length();
      return new _v139(_v0.v[_v2], _v0.i[_v2], _v0.o[_v1], _v0.v[_v1], !0);
    }, _v9([_v126], _v150), _v150.prototype.initModifierProperties = function (_v0, _v1) {
      this.getValue = this.processKeys, this.amplitude = _v95.getProp(_v0, _v1.s, 0, null, this), this.frequency = _v95.getProp(_v0, _v1.r, 0, null, this), this.pointsType = _v95.getProp(_v0, _v1.pt, 0, null, this), this._isAnimated = 0 !== this.amplitude.effectsSequence.length || 0 !== this.frequency.effectsSequence.length || 0 !== this.pointsType.effectsSequence.length;
    }, _v150.prototype.processPath = function (_v0, _v1, _v2, _v3) {
      var _v4 = _v0._length,
        _v5 = _v99.newElement();
      if (_v5.c = _v0.c, _v0.c || (_v4 -= 1), 0 === _v4) return _v5;
      var _v6 = -1,
        _v7 = _v139.shapeSegment(_v0, 0);
      _v154(_v5, _v0, 0, _v1, _v2, _v3, _v6);
      for (var _v8 = 0; _v8 < _v4; _v8 += 1) _v6 = _v155(_v5, _v7, _v1, _v2, _v3, -_v6), _v7 = _v8 !== _v4 - 1 || _v0.c ? _v139.shapeSegment(_v0, (_v8 + 1) % _v4) : null, _v154(_v5, _v0, _v8 + 1, _v1, _v2, _v3, _v6);
      return _v5;
    }, _v150.prototype.processShapes = function (_v0) {
      var _v1,
        _v2,
        _v3,
        _v4,
        _v5,
        _v6,
        _v7 = this.shapes.length,
        _v8 = this.amplitude.v,
        _v9 = Math.max(0, Math.round(this.frequency.v)),
        _v10 = this.pointsType.v;
      if (0 !== _v8) for (_v2 = 0; _v2 < _v7; _v2 += 1) {
        if (_v6 = (_v5 = this.shapes[_v2]).localShapeCollection, !(!_v5.shape._mdf && !this._mdf && !_v0)) for (_v6.releaseShapes(), _v5.shape._mdf = !0, _v1 = _v5.shape.paths.shapes, _v4 = _v5.shape.paths._length, _v3 = 0; _v3 < _v4; _v3 += 1) _v6.addShape(this.processPath(_v1[_v3], _v8, _v9, _v10));
        _v5.shape.paths = _v5.localShapeCollection;
      }
      this.dynamicProperties.length || (this._mdf = !1);
    }, _v9([_v126], _v163), _v163.prototype.initModifierProperties = function (_v0, _v1) {
      this.getValue = this.processKeys, this.amount = _v95.getProp(_v0, _v1.a, 0, null, this), this.miterLimit = _v95.getProp(_v0, _v1.ml, 0, null, this), this.lineJoin = _v1.lj, this._isAnimated = 0 !== this.amount.effectsSequence.length;
    }, _v163.prototype.processPath = function (_v0, _v1, _v2, _v3) {
      var _v4,
        _v5,
        _v6,
        _v7 = _v99.newElement();
      _v7.c = _v0.c;
      var _v8 = _v0.length();
      _v0.c || (_v8 -= 1);
      var _v9 = [];
      for (_v4 = 0; _v4 < _v8; _v4 += 1) _v6 = _v139.shapeSegment(_v0, _v4), _v9.push(_v162(_v6, _v1));
      if (!_v0.c) for (_v4 = _v8 - 1; _v4 >= 0; _v4 -= 1) _v6 = _v139.shapeSegmentInverted(_v0, _v4), _v9.push(_v162(_v6, _v1));
      _v9 = _v161(_v9);
      var _v10 = null,
        _v11 = null;
      for (_v4 = 0; _v4 < _v9.length; _v4 += 1) {
        var _v12 = _v9[_v4];
        for (_v11 && (_v10 = _v158(_v7, _v11, _v12[0], _v2, _v3)), _v11 = _v12[_v12.length - 1], _v5 = 0; _v5 < _v12.length; _v5 += 1) _v6 = _v12[_v5], _v10 && _v149(_v6.points[0], _v10) ? _v7.setXYAt(_v6.points[1][0], _v6.points[1][1], "o", _v7.length() - 1) : _v7.setTripleAt(_v6.points[0][0], _v6.points[0][1], _v6.points[1][0], _v6.points[1][1], _v6.points[0][0], _v6.points[0][1], _v7.length()), _v7.setTripleAt(_v6.points[3][0], _v6.points[3][1], _v6.points[3][0], _v6.points[3][1], _v6.points[2][0], _v6.points[2][1], _v7.length()), _v10 = _v6.points[3];
      }
      return _v9.length && _v158(_v7, _v11, _v9[0][0], _v2, _v3), _v7;
    }, _v163.prototype.processShapes = function (_v0) {
      var _v1,
        _v2,
        _v3,
        _v4,
        _v5,
        _v6,
        _v7 = this.shapes.length,
        _v8 = this.amount.v,
        _v9 = this.miterLimit.v,
        _v10 = this.lineJoin;
      if (0 !== _v8) for (_v2 = 0; _v2 < _v7; _v2 += 1) {
        if (_v6 = (_v5 = this.shapes[_v2]).localShapeCollection, !(!_v5.shape._mdf && !this._mdf && !_v0)) for (_v6.releaseShapes(), _v5.shape._mdf = !0, _v1 = _v5.shape.paths.shapes, _v4 = _v5.shape.paths._length, _v3 = 0; _v3 < _v4; _v3 += 1) _v6.addShape(this.processPath(_v1[_v3], _v8, _v10, _v9));
        _v5.shape.paths = _v5.localShapeCollection;
      }
      this.dynamicProperties.length || (this._mdf = !1);
    };
    var _v165 = function () {
      var _v0 = 0,
        _v1 = {
          w: 0,
          size: 0,
          shapes: [],
          data: {
            shapes: []
          }
        },
        _v2 = [];
      _v2 = _v2.concat([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
      var _v3 = 0,
        _v4 = 0,
        _v5 = 0,
        _v6 = 0,
        _v7 = 0,
        _v8 = 0,
        _v9 = 0,
        _v10 = 0,
        _v11 = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];
      function _v12(_v0) {
        var _v1,
          _v2 = _v0.split(","),
          _v3 = _v2.length,
          _v4 = [];
        for (_v1 = 0; _v1 < _v3; _v1 += 1) "sans-serif" !== _v2[_v1] && "monospace" !== _v2[_v1] && _v4.push(_v2[_v1]);
        return _v4.join(",");
      }
      function _v13(_v0, _v1) {
        var _v2 = _v8("span");
        _v2.setAttribute("aria-hidden", !0), _v2.style.fontFamily = _v1;
        var _v3 = _v8("span");
        _v3.innerText = "giItT1WQy@!-/#", _v2.style.position = "absolute", _v2.style.left = "-10000px", _v2.style.top = "-10000px", _v2.style.fontSize = "300px", _v2.style.fontVariant = "normal", _v2.style.fontStyle = "normal", _v2.style.fontWeight = "normal", _v2.style.letterSpacing = "0", _v2.appendChild(_v3), document.body.appendChild(_v2);
        var _v4 = _v3.offsetWidth;
        return _v3.style.fontFamily = _v12(_v0) + ", " + _v1, {
          node: _v3,
          w: _v4,
          parent: _v2
        };
      }
      function _v14() {
        var _v0,
          _v1,
          _v2,
          _v3 = this.fonts.length,
          _v4 = _v3;
        for (_v0 = 0; _v0 < _v3; _v0 += 1) this.fonts[_v0].loaded ? _v4 -= 1 : "n" === this.fonts[_v0].fOrigin || 0 === this.fonts[_v0].origin ? this.fonts[_v0].loaded = !0 : (_v1 = this.fonts[_v0].monoCase.node, _v2 = this.fonts[_v0].monoCase.w, _v1.offsetWidth !== _v2 ? (_v4 -= 1, this.fonts[_v0].loaded = !0) : (_v1 = this.fonts[_v0].sansCase.node, _v2 = this.fonts[_v0].sansCase.w, _v1.offsetWidth !== _v2 && (_v4 -= 1, this.fonts[_v0].loaded = !0)), this.fonts[_v0].loaded && (this.fonts[_v0].sansCase.parent.parentNode.removeChild(this.fonts[_v0].sansCase.parent), this.fonts[_v0].monoCase.parent.parentNode.removeChild(this.fonts[_v0].monoCase.parent)));
        0 !== _v4 && Date.now() - this.initTime < _v0 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10);
      }
      function _v15(_v0, _v1) {
        var _v2,
          _v3 = document.body && _v1 ? "svg" : "canvas",
          _v4 = _v164(_v0);
        if ("svg" === _v3) {
          var _v5 = _v60("text");
          _v5.style.fontSize = "100px", _v5.setAttribute("font-family", _v0.fFamily), _v5.setAttribute("font-style", _v4.style), _v5.setAttribute("font-weight", _v4.weight), _v5.textContent = "1", _v0.fClass ? (_v5.style.fontFamily = "inherit", _v5.setAttribute("class", _v0.fClass)) : _v5.style.fontFamily = _v0.fFamily, _v1.appendChild(_v5), _v2 = _v5;
        } else {
          var _v6 = new OffscreenCanvas(500, 500).getContext("2d");
          _v6.font = _v4.style + " " + _v4.weight + " 100px " + _v0.fFamily, _v2 = _v6;
        }
        return {
          measureText: function (_v0) {
            return "svg" === _v3 ? (_v2.textContent = _v0, _v2.getComputedTextLength()) : _v2.measureText(_v0).width;
          }
        };
      }
      function _v16(_v0, _v1) {
        if (!_v0) {
          this.isLoaded = !0;
          return;
        }
        if (this.chars) {
          this.isLoaded = !0, this.fonts = _v0.list;
          return;
        }
        if (!document.body) {
          this.isLoaded = !0, _v0.list.forEach(function (_v0) {
            _v0.helper = _v15(_v0), _v0.cache = {};
          }), this.fonts = _v0.list;
          return;
        }
        var _v2 = _v0.list,
          _v3 = _v2.length,
          _v4 = _v3;
        for (_v5 = 0; _v5 < _v3; _v5 += 1) {
          var _v5,
            _v6,
            _v7,
            _v8 = !0;
          if (_v2[_v5].loaded = !1, _v2[_v5].monoCase = _v13(_v2[_v5].fFamily, "monospace"), _v2[_v5].sansCase = _v13(_v2[_v5].fFamily, "sans-serif"), _v2[_v5].fPath) {
            if ("p" === _v2[_v5].fOrigin || 3 === _v2[_v5].origin) {
              if ((_v6 = document.querySelectorAll('style[f-forigin="p"][f-family="' + _v2[_v5].fFamily + '"], style[f-origin="3"][f-family="' + _v2[_v5].fFamily + '"]')).length > 0 && (_v8 = !1), _v8) {
                var _v9 = _v8("style");
                _v9.setAttribute("f-forigin", _v2[_v5].fOrigin), _v9.setAttribute("f-origin", _v2[_v5].origin), _v9.setAttribute("f-family", _v2[_v5].fFamily), _v9.type = "text/css", _v9.innerText = "@font-face {font-family: " + _v2[_v5].fFamily + "; font-style: normal; src: url('" + _v2[_v5].fPath + "');}", _v1.appendChild(_v9);
              }
            } else if ("g" === _v2[_v5].fOrigin || 1 === _v2[_v5].origin) {
              for (_v6 = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), _v7 = 0; _v7 < _v6.length; _v7 += 1) -1 !== _v6[_v7].href.indexOf(_v2[_v5].fPath) && (_v8 = !1);
              if (_v8) {
                var _v10 = _v8("link");
                _v10.setAttribute("f-forigin", _v2[_v5].fOrigin), _v10.setAttribute("f-origin", _v2[_v5].origin), _v10.type = "text/css", _v10.rel = "stylesheet", _v10.href = _v2[_v5].fPath, document.body.appendChild(_v10);
              }
            } else if ("t" === _v2[_v5].fOrigin || 2 === _v2[_v5].origin) {
              for (_v6 = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), _v7 = 0; _v7 < _v6.length; _v7 += 1) _v2[_v5].fPath === _v6[_v7].src && (_v8 = !1);
              if (_v8) {
                var _v11 = _v8("link");
                _v11.setAttribute("f-forigin", _v2[_v5].fOrigin), _v11.setAttribute("f-origin", _v2[_v5].origin), _v11.setAttribute("rel", "stylesheet"), _v11.setAttribute("href", _v2[_v5].fPath), _v1.appendChild(_v11);
              }
            }
          } else _v2[_v5].loaded = !0, _v4 -= 1;
          _v2[_v5].helper = _v15(_v2[_v5], _v1), _v2[_v5].cache = {}, this.fonts.push(_v2[_v5]);
        }
        0 === _v4 ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100);
      }
      function _v17(_v0) {
        if (_v0) {
          this.chars || (this.chars = []);
          var _v1,
            _v2,
            _v3,
            _v4 = _v0.length,
            _v5 = this.chars.length;
          for (_v1 = 0; _v1 < _v4; _v1 += 1) {
            for (_v2 = 0, _v3 = !1; _v2 < _v5;) this.chars[_v2].style === _v0[_v1].style && this.chars[_v2].fFamily === _v0[_v1].fFamily && this.chars[_v2].ch === _v0[_v1].ch && (_v3 = !0), _v2 += 1;
            _v3 || (this.chars.push(_v0[_v1]), _v5 += 1);
          }
        }
      }
      function _v18(_v0, _v1, _v2) {
        for (var _v3 = 0, _v4 = this.chars.length; _v3 < _v4;) {
          if (this.chars[_v3].ch === _v0 && this.chars[_v3].style === _v1 && this.chars[_v3].fFamily === _v2) return this.chars[_v3];
          _v3 += 1;
        }
        return ("string" == typeof _v0 && 13 !== _v0.charCodeAt(0) || !_v0) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", _v0, _v1, _v2)), _v1;
      }
      function _v19(_v0, _v1, _v2) {
        var _v3 = this.getFontByName(_v1),
          _v4 = _v0;
        if (!_v3.cache[_v4]) {
          var _v5 = _v3.helper;
          if (" " === _v0) {
            var _v6 = _v5.measureText("|" + _v0 + "|"),
              _v7 = _v5.measureText("||");
            _v3.cache[_v4] = (_v6 - _v7) / 100;
          } else _v3.cache[_v4] = _v5.measureText(_v0) / 100;
        }
        return _v3.cache[_v4] * _v2;
      }
      function _v20(_v0) {
        for (var _v1 = 0, _v2 = this.fonts.length; _v1 < _v2;) {
          if (this.fonts[_v1].fName === _v0) return this.fonts[_v1];
          _v1 += 1;
        }
        return this.fonts[0];
      }
      function _v21(_v0) {
        var _v1 = 0,
          _v2 = _v0.charCodeAt(0);
        if (_v2 >= 0 && _v2 <= 0) {
          var _v3 = _v0.charCodeAt(1);
          _v3 >= 0 && _v3 <= 0 && (_v1 = (_v2 - 0) * 0 + _v3 - 0 + 0);
        }
        return _v1;
      }
      function _v22(_v0) {
        return _v0 === _v8;
      }
      function _v23(_v0) {
        return _v0 === _v7;
      }
      function _v24(_v0) {
        var _v1 = _v21(_v0);
        return !!(_v1 >= _v9) && !!(_v1 <= _v10);
      }
      function _v25(_v0) {
        return _v24(_v0.substr(0, 2)) && _v24(_v0.substr(2, 2));
      }
      function _v26(_v0) {
        return -1 !== _v2.indexOf(_v0);
      }
      function _v27(_v0, _v1) {
        var _v2 = _v21(_v0.substr(_v1, 2));
        if (_v2 !== _v3) return !1;
        var _v3 = 0;
        for (_v1 += 2; _v3 < 5;) {
          if ((_v2 = _v21(_v0.substr(_v1, 2))) < _v5 || _v2 > _v6) return !1;
          _v3 += 1, _v1 += 2;
        }
        return _v21(_v0.substr(_v1, 2)) === _v4;
      }
      function _v28() {
        this.isLoaded = !0;
      }
      var _v29 = function () {
        this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this);
      };
      return _v29.isModifier = function (_v0, _v1) {
        var _v2 = _v0.toString(16) + _v1.toString(16);
        return -1 !== _v11.indexOf(_v2);
      }, _v29.isZeroWidthJoiner = _v22, _v29.isFlagEmoji = _v25, _v29.isRegionalCode = _v24, _v29.isCombinedCharacter = _v26, _v29.isRegionalFlag = _v27, _v29.isVariationSelector = _v23, _v29.BLACK_FLAG_CODE_POINT = _v3, _v29.prototype = {
        addChars: _v17,
        addFonts: _v16,
        getCharData: _v18,
        getFontByName: _v20,
        measureText: _v19,
        checkLoadedFonts: _v14,
        setIsLoaded: _v28
      }, _v29;
    }();
    function _v166(_v0) {
      this.animationData = _v0;
    }
    function _v167(_v0) {
      return new _v166(_v0);
    }
    function _v168() {}
    _v166.prototype.getProp = function (_v0) {
      return this.animationData.slots && this.animationData.slots[_v0.sid] ? Object.assign(_v0, this.animationData.slots[_v0.sid].p) : _v0;
    }, _v168.prototype = {
      initRenderable: function () {
        this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = [];
      },
      addRenderableComponent: function (_v0) {
        -1 === this.renderableComponents.indexOf(_v0) && this.renderableComponents.push(_v0);
      },
      removeRenderableComponent: function (_v0) {
        -1 !== this.renderableComponents.indexOf(_v0) && this.renderableComponents.splice(this.renderableComponents.indexOf(_v0), 1);
      },
      prepareRenderableFrame: function (_v0) {
        this.checkLayerLimits(_v0);
      },
      checkTransparency: function () {
        this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show());
      },
      checkLayerLimits: function (_v0) {
        this.data.ip - this.data.st <= _v0 && this.data.op - this.data.st > _v0 ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide());
      },
      renderRenderable: function () {
        var _v0,
          _v1 = this.renderableComponents.length;
        for (_v0 = 0; _v0 < _v1; _v0 += 1) this.renderableComponents[_v0].renderFrame(this._isFirstFrame);
      },
      sourceRectAtTime: function () {
        return {
          top: 0,
          left: 0,
          width: 100,
          height: 100
        };
      },
      getLayerSize: function () {
        return 5 === this.data.ty ? {
          w: this.data.textData.width,
          h: this.data.textData.height
        } : {
          w: this.data.width,
          h: this.data.height
        };
      }
    };
    var _v169 = function () {
      var _v0 = {
        0: "source-over",
        1: "multiply",
        2: "screen",
        3: "overlay",
        4: "darken",
        5: "lighten",
        6: "color-dodge",
        7: "color-burn",
        8: "hard-light",
        9: "soft-light",
        10: "difference",
        11: "exclusion",
        12: "hue",
        13: "saturation",
        14: "color",
        15: "luminosity"
      };
      return function (_v0) {
        return _v0[_v0] || "";
      };
    }();
    function _v170(_v0, _v1, _v2) {
      this.p = _v95.getProp(_v1, _v0.v, 0, 0, _v2);
    }
    function _v171(_v0, _v1, _v2) {
      this.p = _v95.getProp(_v1, _v0.v, 0, 0, _v2);
    }
    function _v172(_v0, _v1, _v2) {
      this.p = _v95.getProp(_v1, _v0.v, 1, 0, _v2);
    }
    function _v173(_v0, _v1, _v2) {
      this.p = _v95.getProp(_v1, _v0.v, 1, 0, _v2);
    }
    function _v174(_v0, _v1, _v2) {
      this.p = _v95.getProp(_v1, _v0.v, 0, 0, _v2);
    }
    function _v175(_v0, _v1, _v2) {
      this.p = _v95.getProp(_v1, _v0.v, 0, 0, _v2);
    }
    function _v176(_v0, _v1, _v2) {
      this.p = _v95.getProp(_v1, _v0.v, 0, 0, _v2);
    }
    function _v177() {
      this.p = {};
    }
    function _v178(_v0, _v1) {
      var _v2,
        _v3,
        _v4 = _v0.ef || [];
      this.effectElements = [];
      var _v5 = _v4.length;
      for (_v2 = 0; _v2 < _v5; _v2 += 1) _v3 = new _v179(_v4[_v2], _v1), this.effectElements.push(_v3);
    }
    function _v179(_v0, _v1) {
      this.init(_v0, _v1);
    }
    function _v180() {}
    function _v181() {}
    function _v182(_v0, _v1, _v2) {
      this.initFrame(), this.initRenderable(), this.assetData = _v1.getAssetData(_v0.refId), this.footageData = _v1.imageLoader.getAsset(this.assetData), this.initBaseData(_v0, _v1, _v2);
    }
    function _v183(_v0, _v1, _v2) {
      this.initFrame(), this.initRenderable(), this.assetData = _v1.getAssetData(_v0.refId), this.initBaseData(_v0, _v1, _v2), this._isPlaying = !1, this._canPlay = !1;
      var _v3 = this.globalData.getAssetsPath(this.assetData);
      this.audio = this.globalData.audioController.createAudio(_v3), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = _v0.tm ? _v95.getProp(this, _v0.tm, 0, _v1.frameRate, this) : {
        _placeholder: !0
      }, this.lv = _v95.getProp(this, _v0.au && _v0.au.lv ? _v0.au.lv : {
        k: [100]
      }, 1, .01, this);
    }
    function _v184() {}
    _v9([_v96], _v179), _v179.prototype.getValue = _v179.prototype.iterateDynamicProperties, _v179.prototype.init = function (_v0, _v1) {
      this.data = _v0, this.effectElements = [], this.initDynamicPropertyContainer(_v1);
      var _v2,
        _v3,
        _v4 = this.data.ef.length,
        _v5 = this.data.ef;
      for (_v2 = 0; _v2 < _v4; _v2 += 1) {
        switch (_v3 = null, _v5[_v2].ty) {
          case 0:
            _v3 = new _v170(_v5[_v2], _v1, this);
            break;
          case 1:
            _v3 = new _v171(_v5[_v2], _v1, this);
            break;
          case 2:
            _v3 = new _v172(_v5[_v2], _v1, this);
            break;
          case 3:
            _v3 = new _v173(_v5[_v2], _v1, this);
            break;
          case 4:
          case 7:
            _v3 = new _v176(_v5[_v2], _v1, this);
            break;
          case 10:
            _v3 = new _v174(_v5[_v2], _v1, this);
            break;
          case 11:
            _v3 = new _v175(_v5[_v2], _v1, this);
            break;
          case 5:
            _v3 = new _v178(_v5[_v2], _v1, this);
            break;
          default:
            _v3 = new _v177(_v5[_v2], _v1, this);
        }
        _v3 && this.effectElements.push(_v3);
      }
    }, _v180.prototype = {
      checkMasks: function () {
        if (!this.data.hasMask) return !1;
        for (var _v0 = 0, _v1 = this.data.masksProperties.length; _v0 < _v1;) {
          if ("n" !== this.data.masksProperties[_v0].mode && !1 !== this.data.masksProperties[_v0].cl) return !0;
          _v0 += 1;
        }
        return !1;
      },
      initExpressions: function () {
        var _v0 = _v55();
        if (_v0) {
          var _v1 = _v0("layer"),
            _v2 = _v0("effects"),
            _v3 = _v0("shape"),
            _v4 = _v0("text"),
            _v5 = _v0("comp");
          this.layerInterface = _v1(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
          var _v6 = _v2.createEffectsInterface(this, this.layerInterface);
          this.layerInterface.registerEffectsInterface(_v6), 0 === this.data.ty || this.data.xt ? this.compInterface = _v5(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = _v3(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = _v4(this), this.layerInterface.text = this.layerInterface.textInterface);
        }
      },
      setBlendMode: function () {
        var _v0 = _v169(this.data.bm);
        (this.baseElement || this.layerElement).style["mix-blend-mode"] = _v0;
      },
      initBaseData: function (_v0, _v1, _v2) {
        this.globalData = _v1, this.comp = _v2, this.data = _v0, this.layerId = _v43(), this.data.sr || (this.data.sr = 1), this.effectsManager = new _v178(this.data, this, this.dynamicProperties);
      },
      getType: function () {
        return this.type;
      },
      sourceRectAtTime: function () {}
    }, _v181.prototype = {
      initFrame: function () {
        this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1;
      },
      prepareProperties: function (_v0, _v1) {
        var _v2,
          _v3 = this.dynamicProperties.length;
        for (_v2 = 0; _v2 < _v3; _v2 += 1) (_v1 || this._isParent && "transform" === this.dynamicProperties[_v2].propType) && (this.dynamicProperties[_v2].getValue(), this.dynamicProperties[_v2]._mdf && (this.globalData._mdf = !0, this._mdf = !0));
      },
      addDynamicProperty: function (_v0) {
        -1 === this.dynamicProperties.indexOf(_v0) && this.dynamicProperties.push(_v0);
      }
    }, _v182.prototype.prepareFrame = function () {}, _v9([_v168, _v180, _v181], _v182), _v182.prototype.getBaseElement = function () {
      return null;
    }, _v182.prototype.renderFrame = function () {}, _v182.prototype.destroy = function () {}, _v182.prototype.initExpressions = function () {
      var _v0 = _v55();
      if (_v0) {
        var _v1 = _v0("footage");
        this.layerInterface = _v1(this);
      }
    }, _v182.prototype.getFootageData = function () {
      return this.footageData;
    }, _v183.prototype.prepareFrame = function (_v0) {
      if (this.prepareRenderableFrame(_v0, !0), this.prepareProperties(_v0, !0), this.tm._placeholder) this._currentTime = _v0 / this.data.sr;else {
        var _v1 = this.tm.v;
        this._currentTime = _v1;
      }
      this._volume = this.lv.v[0];
      var _v2 = this._volume * this._volumeMultiplier;
      this._previousVolume !== _v2 && (this._previousVolume = _v2, this.audio.volume(_v2));
    }, _v9([_v168, _v180, _v181], _v183), _v183.prototype.renderFrame = function () {
      this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0));
    }, _v183.prototype.show = function () {}, _v183.prototype.hide = function () {
      this.audio.pause(), this._isPlaying = !1;
    }, _v183.prototype.pause = function () {
      this.audio.pause(), this._isPlaying = !1, this._canPlay = !1;
    }, _v183.prototype.resume = function () {
      this._canPlay = !0;
    }, _v183.prototype.setRate = function (_v0) {
      this.audio.rate(_v0);
    }, _v183.prototype.volume = function (_v0) {
      this._volumeMultiplier = _v0, this._previousVolume = _v0 * this._volume, this.audio.volume(this._previousVolume);
    }, _v183.prototype.getBaseElement = function () {
      return null;
    }, _v183.prototype.destroy = function () {}, _v183.prototype.sourceRectAtTime = function () {}, _v183.prototype.initExpressions = function () {}, _v184.prototype.checkLayers = function (_v0) {
      var _v1,
        _v2,
        _v3 = this.layers.length;
      for (this.completeLayers = !0, _v1 = _v3 - 1; _v1 >= 0; _v1 -= 1) !this.elements[_v1] && (_v2 = this.layers[_v1]).ip - _v2.st <= _v0 - this.layers[_v1].st && _v2.op - _v2.st > _v0 - this.layers[_v1].st && this.buildItem(_v1), this.completeLayers = !!this.elements[_v1] && this.completeLayers;
      this.checkPendingElements();
    }, _v184.prototype.createItem = function (_v0) {
      switch (_v0.ty) {
        case 2:
          return this.createImage(_v0);
        case 0:
          return this.createComp(_v0);
        case 1:
          return this.createSolid(_v0);
        case 3:
        default:
          return this.createNull(_v0);
        case 4:
          return this.createShape(_v0);
        case 5:
          return this.createText(_v0);
        case 6:
          return this.createAudio(_v0);
        case 13:
          return this.createCamera(_v0);
        case 15:
          return this.createFootage(_v0);
      }
    }, _v184.prototype.createCamera = function () {
      throw Error("You're using a 3d camera. Try the html renderer.");
    }, _v184.prototype.createAudio = function (_v0) {
      return new _v183(_v0, this.globalData, this);
    }, _v184.prototype.createFootage = function (_v0) {
      return new _v182(_v0, this.globalData, this);
    }, _v184.prototype.buildAllItems = function () {
      var _v0,
        _v1 = this.layers.length;
      for (_v0 = 0; _v0 < _v1; _v0 += 1) this.buildItem(_v0);
      this.checkPendingElements();
    }, _v184.prototype.includeLayers = function (_v0) {
      this.completeLayers = !1;
      var _v1,
        _v2,
        _v3 = _v0.length,
        _v4 = this.layers.length;
      for (_v1 = 0; _v1 < _v3; _v1 += 1) for (_v2 = 0; _v2 < _v4;) {
        if (this.layers[_v2].id === _v0[_v1].id) {
          this.layers[_v2] = _v0[_v1];
          break;
        }
        _v2 += 1;
      }
    }, _v184.prototype.setProjectInterface = function (_v0) {
      this.globalData.projectInterface = _v0;
    }, _v184.prototype.initItems = function () {
      this.globalData.progressiveLoad || this.buildAllItems();
    }, _v184.prototype.buildElementParenting = function (_v0, _v1, _v2) {
      for (var _v3 = this.elements, _v4 = this.layers, _v5 = 0, _v6 = _v4.length; _v5 < _v6;) _v4[_v5].ind == _v1 && (_v3[_v5] && !0 !== _v3[_v5] ? (_v2.push(_v3[_v5]), _v3[_v5].setAsParent(), void 0 !== _v4[_v5].parent ? this.buildElementParenting(_v0, _v4[_v5].parent, _v2) : _v0.setHierarchy(_v2)) : (this.buildItem(_v5), this.addPendingElement(_v0))), _v5 += 1;
    }, _v184.prototype.addPendingElement = function (_v0) {
      this.pendingElements.push(_v0);
    }, _v184.prototype.searchExtraCompositions = function (_v0) {
      var _v1,
        _v2 = _v0.length;
      for (_v1 = 0; _v1 < _v2; _v1 += 1) if (_v0[_v1].xt) {
        var _v3 = this.createComp(_v0[_v1]);
        _v3.initExpressions(), this.globalData.projectInterface.registerComposition(_v3);
      }
    }, _v184.prototype.getElementById = function (_v0) {
      var _v1,
        _v2 = this.elements.length;
      for (_v1 = 0; _v1 < _v2; _v1 += 1) if (this.elements[_v1].data.ind === _v0) return this.elements[_v1];
      return null;
    }, _v184.prototype.getElementByPath = function (_v0) {
      var _v1 = _v0.shift();
      if ("number" == typeof _v1) _v2 = this.elements[_v1];else {
        var _v2,
          _v3,
          _v4 = this.elements.length;
        for (_v3 = 0; _v3 < _v4; _v3 += 1) if (this.elements[_v3].data.nm === _v1) {
          _v2 = this.elements[_v3];
          break;
        }
      }
      return 0 === _v0.length ? _v2 : _v2.getElementByPath(_v0);
    }, _v184.prototype.setupGlobalData = function (_v0, _v1) {
      this.globalData.fontManager = new _v165(), this.globalData.slotManager = _v167(_v0), this.globalData.fontManager.addChars(_v0.chars), this.globalData.fontManager.addFonts(_v0.fonts, _v1), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = _v0.fr, this.globalData.nm = _v0.nm, this.globalData.compSize = {
        w: _v0.w,
        h: _v0.h
      };
    };
    var _v185 = {
      TRANSFORM_EFFECT: "transformEFfect"
    };
    function _v186() {}
    function _v187(_v0, _v1, _v2) {
      this.data = _v0, this.element = _v1, this.globalData = _v2, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
      var _v3 = this.globalData.defs,
        _v4 = this.masksProperties ? this.masksProperties.length : 0;
      this.viewData = _v14(_v4), this.solidPath = "";
      var _v5 = this.masksProperties,
        _v6 = 0,
        _v7 = [],
        _v8 = _v43(),
        _v9 = "clipPath",
        _v10 = "clip-path";
      for (_v11 = 0; _v11 < _v4; _v11 += 1) if (("a" !== _v5[_v11].mode && "n" !== _v5[_v11].mode || _v5[_v11].inv || 100 !== _v5[_v11].o.k || _v5[_v11].o.x) && (_v9 = "mask", _v10 = "mask"), ("s" === _v5[_v11].mode || "i" === _v5[_v11].mode) && 0 === _v6 ? ((_v14 = _v60("rect")).setAttribute("fill", "#ffffff"), _v14.setAttribute("width", this.element.comp.data.w || 0), _v14.setAttribute("height", this.element.comp.data.h || 0), _v7.push(_v14)) : _v14 = null, _v12 = _v60("path"), "n" === _v5[_v11].mode) this.viewData[_v11] = {
        op: _v95.getProp(this.element, _v5[_v11].o, 0, .01, this.element),
        prop: _v102.getShapeProp(this.element, _v5[_v11], 3),
        elem: _v12,
        lastPath: ""
      }, _v3.appendChild(_v12);else {
        if (_v6 += 1, _v12.setAttribute("fill", "s" === _v5[_v11].mode ? "#000000" : "#ffffff"), _v12.setAttribute("clip-rule", "nonzero"), 0 !== _v5[_v11].x.k ? (_v9 = "mask", _v10 = "mask", _v17 = _v95.getProp(this.element, _v5[_v11].x, 0, null, this.element), _v18 = _v43(), (_v15 = _v60("filter")).setAttribute("id", _v18), (_v16 = _v60("feMorphology")).setAttribute("operator", "erode"), _v16.setAttribute("in", "SourceGraphic"), _v16.setAttribute("radius", "0"), _v15.appendChild(_v16), _v3.appendChild(_v15), _v12.setAttribute("stroke", "s" === _v5[_v11].mode ? "#000000" : "#ffffff")) : (_v16 = null, _v17 = null), this.storedData[_v11] = {
          elem: _v12,
          x: _v17,
          expan: _v16,
          lastPath: "",
          lastOperator: "",
          filterId: _v18,
          lastRadius: 0
        }, "i" === _v5[_v11].mode) {
          var _v11,
            _v12,
            _v13,
            _v14,
            _v15,
            _v16,
            _v17,
            _v18,
            _v19 = _v7.length,
            _v20 = _v60("g");
          for (_v13 = 0; _v13 < _v19; _v13 += 1) _v20.appendChild(_v7[_v13]);
          var _v21 = _v60("mask");
          _v21.setAttribute("mask-type", "alpha"), _v21.setAttribute("id", _v8 + "_" + _v6), _v21.appendChild(_v12), _v3.appendChild(_v21), _v20.setAttribute("mask", "url(" + _v7() + "#" + _v8 + "_" + _v6 + ")"), _v7.length = 0, _v7.push(_v20);
        } else _v7.push(_v12);
        _v5[_v11].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[_v11] = {
          elem: _v12,
          lastPath: "",
          op: _v95.getProp(this.element, _v5[_v11].o, 0, .01, this.element),
          prop: _v102.getShapeProp(this.element, _v5[_v11], 3),
          invRect: _v14
        }, this.viewData[_v11].prop.k || this.drawPath(_v5[_v11], this.viewData[_v11].prop.v, this.viewData[_v11]);
      }
      for (this.maskElement = _v60(_v9), _v4 = _v7.length, _v11 = 0; _v11 < _v4; _v11 += 1) this.maskElement.appendChild(_v7[_v11]);
      _v6 > 0 && (this.maskElement.setAttribute("id", _v8), this.element.maskedElement.setAttribute(_v10, "url(" + _v7() + "#" + _v8 + ")"), _v3.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this);
    }
    _v186.prototype = {
      initTransform: function () {
        var _v0 = new _v103();
        this.finalTransform = {
          mProp: this.data.ks ? _v129.getTransformProperty(this, this.data.ks, this) : {
            o: 0
          },
          _matMdf: !1,
          _localMatMdf: !1,
          _opMdf: !1,
          mat: _v0,
          localMat: _v0,
          localOpacity: 1
        }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty;
      },
      renderTransform: function () {
        if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
          var _v0,
            _v1 = this.finalTransform.mat,
            _v2 = 0,
            _v3 = this.hierarchy.length;
          if (!this.finalTransform._matMdf) for (; _v2 < _v3;) {
            if (this.hierarchy[_v2].finalTransform.mProp._mdf) {
              this.finalTransform._matMdf = !0;
              break;
            }
            _v2 += 1;
          }
          if (this.finalTransform._matMdf) for (_v0 = this.finalTransform.mProp.v.props, _v1.cloneFromProps(_v0), _v2 = 0; _v2 < _v3; _v2 += 1) _v1.multiply(this.hierarchy[_v2].finalTransform.mProp.v);
        }
        (!this.localTransforms || this.finalTransform._matMdf) && (this.finalTransform._localMatMdf = this.finalTransform._matMdf), this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v);
      },
      renderLocalTransform: function () {
        if (this.localTransforms) {
          var _v0 = 0,
            _v1 = this.localTransforms.length;
          if (this.finalTransform._localMatMdf = this.finalTransform._matMdf, !this.finalTransform._localMatMdf || !this.finalTransform._opMdf) for (; _v0 < _v1;) this.localTransforms[_v0]._mdf && (this.finalTransform._localMatMdf = !0), this.localTransforms[_v0]._opMdf && !this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v, this.finalTransform._opMdf = !0), _v0 += 1;
          if (this.finalTransform._localMatMdf) {
            var _v2 = this.finalTransform.localMat;
            for (this.localTransforms[0].matrix.clone(_v2), _v0 = 1; _v0 < _v1; _v0 += 1) {
              var _v3 = this.localTransforms[_v0].matrix;
              _v2.multiply(_v3);
            }
            _v2.multiply(this.finalTransform.mat);
          }
          if (this.finalTransform._opMdf) {
            var _v4 = this.finalTransform.localOpacity;
            for (_v0 = 0; _v0 < _v1; _v0 += 1) _v4 *= .01 * this.localTransforms[_v0].opacity;
            this.finalTransform.localOpacity = _v4;
          }
        }
      },
      searchEffectTransforms: function () {
        if (this.renderableEffectsManager) {
          var _v0 = this.renderableEffectsManager.getEffects(_v185.TRANSFORM_EFFECT);
          if (_v0.length) {
            this.localTransforms = [], this.finalTransform.localMat = new _v103();
            var _v1 = 0,
              _v2 = _v0.length;
            for (_v1 = 0; _v1 < _v2; _v1 += 1) this.localTransforms.push(_v0[_v1]);
          }
        }
      },
      globalToLocal: function (_v0) {
        var _v1,
          _v2,
          _v3 = [];
        _v3.push(this.finalTransform);
        for (var _v4 = !0, _v5 = this.comp; _v4;) _v5.finalTransform ? (_v5.data.hasMask && _v3.splice(0, 0, _v5.finalTransform), _v5 = _v5.comp) : _v4 = !1;
        var _v6 = _v3.length;
        for (_v1 = 0; _v1 < _v6; _v1 += 1) _v2 = _v3[_v1].mat.applyToPointArray(0, 0, 0), _v0 = [_v0[0] - _v2[0], _v0[1] - _v2[1], 0];
        return _v0;
      },
      mHelper: new _v103()
    }, _v187.prototype.getMaskProperty = function (_v0) {
      return this.viewData[_v0].prop;
    }, _v187.prototype.renderFrame = function (_v0) {
      var _v1,
        _v2 = this.element.finalTransform.mat,
        _v3 = this.masksProperties.length;
      for (_v1 = 0; _v1 < _v3; _v1 += 1) if ((this.viewData[_v1].prop._mdf || _v0) && this.drawPath(this.masksProperties[_v1], this.viewData[_v1].prop.v, this.viewData[_v1]), (this.viewData[_v1].op._mdf || _v0) && this.viewData[_v1].elem.setAttribute("fill-opacity", this.viewData[_v1].op.v), "n" !== this.masksProperties[_v1].mode && (this.viewData[_v1].invRect && (this.element.finalTransform.mProp._mdf || _v0) && this.viewData[_v1].invRect.setAttribute("transform", _v2.getInverseMatrix().to2dCSS()), this.storedData[_v1].x && (this.storedData[_v1].x._mdf || _v0))) {
        var _v4 = this.storedData[_v1].expan;
        this.storedData[_v1].x.v < 0 ? ("erode" !== this.storedData[_v1].lastOperator && (this.storedData[_v1].lastOperator = "erode", this.storedData[_v1].elem.setAttribute("filter", "url(" + _v7() + "#" + this.storedData[_v1].filterId + ")")), _v4.setAttribute("radius", -this.storedData[_v1].x.v)) : ("dilate" !== this.storedData[_v1].lastOperator && (this.storedData[_v1].lastOperator = "dilate", this.storedData[_v1].elem.setAttribute("filter", null)), this.storedData[_v1].elem.setAttribute("stroke-width", 2 * this.storedData[_v1].x.v));
      }
    }, _v187.prototype.getMaskelement = function () {
      return this.maskElement;
    }, _v187.prototype.createLayerSolidPath = function () {
      var _v0 = "M0,0 ";
      return _v0 + (" h" + this.globalData.compSize.w + " v" + this.globalData.compSize.h + " h-" + this.globalData.compSize.w + (" v-" + this.globalData.compSize.h) + " ");
    }, _v187.prototype.drawPath = function (_v0, _v1, _v2) {
      var _v3,
        _v4,
        _v5 = " M" + _v1.v[0][0] + "," + _v1.v[0][1];
      for (_v4 = _v1._length, _v3 = 1; _v3 < _v4; _v3 += 1) _v5 += " C" + _v1.o[_v3 - 1][0] + "," + _v1.o[_v3 - 1][1] + " " + _v1.i[_v3][0] + "," + _v1.i[_v3][1] + " " + _v1.v[_v3][0] + "," + _v1.v[_v3][1];
      if (_v1.c && _v4 > 1 && (_v5 += " C" + _v1.o[_v3 - 1][0] + "," + _v1.o[_v3 - 1][1] + " " + _v1.i[0][0] + "," + _v1.i[0][1] + " " + _v1.v[0][0] + "," + _v1.v[0][1]), _v2.lastPath !== _v5) {
        var _v6 = "";
        _v2.elem && (_v1.c && (_v6 = _v0.inv ? this.solidPath + _v5 : _v5), _v2.elem.setAttribute("d", _v6)), _v2.lastPath = _v5;
      }
    }, _v187.prototype.destroy = function () {
      this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null;
    };
    var _v188 = function () {
        var _v0 = {};
        function _v1() {
          var _v0 = _v60("feColorMatrix");
          return _v0.setAttribute("type", "matrix"), _v0.setAttribute("color-interpolation-filters", "sRGB"), _v0.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), _v0;
        }
        return _v0.createFilter = function t(_v0, _v1) {
          var _v2 = _v60("filter");
          return _v2.setAttribute("id", _v0), !0 !== _v1 && (_v2.setAttribute("filterUnits", "objectBoundingBox"), _v2.setAttribute("x", "0%"), _v2.setAttribute("y", "0%"), _v2.setAttribute("width", "100%"), _v2.setAttribute("height", "100%")), _v2;
        }, _v0.createAlphaToLuminanceFilter = _v1, _v0;
      }(),
      _v189 = function () {
        var _v0 = {
          maskType: !0,
          svgLumaHidden: !0,
          offscreenCanvas: "u" > typeof OffscreenCanvas
        };
        return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (_v0.maskType = !1), /firefox/i.test(navigator.userAgent) && (_v0.svgLumaHidden = !1), _v0;
      }(),
      _v190 = {},
      _v191 = "filter_result_";
    function _v192(_v0) {
      var _v1,
        _v2,
        _v3 = "SourceGraphic",
        _v4 = _v0.data.ef ? _v0.data.ef.length : 0,
        _v5 = _v43(),
        _v6 = _v188.createFilter(_v5, !0),
        _v7 = 0;
      for (this.filters = [], _v1 = 0; _v1 < _v4; _v1 += 1) {
        _v2 = null;
        var _v8 = _v0.data.ef[_v1].ty;
        _v190[_v8] && (_v2 = new _v190[_v8].effect(_v6, _v0.effectsManager.effectElements[_v1], _v0, _v191 + _v7, _v3), _v3 = _v191 + _v7, _v190[_v8].countsAsEffect && (_v7 += 1)), _v2 && this.filters.push(_v2);
      }
      _v7 && (_v0.globalData.defs.appendChild(_v6), _v0.layerElement.setAttribute("filter", "url(" + _v7() + "#" + _v5 + ")")), this.filters.length && _v0.addRenderableComponent(this);
    }
    function _v193(_v0, _v1, _v2) {
      _v190[_v0] = {
        effect: _v1,
        countsAsEffect: _v2
      };
    }
    function _v194() {}
    function _v195() {}
    function _v196() {}
    function _v197(_v0, _v1, _v2) {
      this.assetData = _v1.getAssetData(_v0.refId), this.assetData && this.assetData.sid && (this.assetData = _v1.slotManager.getProp(this.assetData)), this.initElement(_v0, _v1, _v2), this.sourceRect = {
        top: 0,
        left: 0,
        width: this.assetData.w,
        height: this.assetData.h
      };
    }
    function _v198(_v0, _v1) {
      this.elem = _v0, this.pos = _v1;
    }
    function _v199() {}
    _v192.prototype.renderFrame = function (_v0) {
      var _v1,
        _v2 = this.filters.length;
      for (_v1 = 0; _v1 < _v2; _v1 += 1) this.filters[_v1].renderFrame(_v0);
    }, _v192.prototype.getEffects = function (_v0) {
      var _v1,
        _v2 = this.filters.length,
        _v3 = [];
      for (_v1 = 0; _v1 < _v2; _v1 += 1) this.filters[_v1].type === _v0 && _v3.push(this.filters[_v1]);
      return _v3;
    }, _v194.prototype = {
      initRendererElement: function () {
        this.layerElement = _v60("g");
      },
      createContainerElements: function () {
        this.matteElement = _v60("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
        var _v0 = null;
        if (this.data.td) {
          this.matteMasks = {};
          var _v1 = _v60("g");
          _v1.setAttribute("id", this.layerId), _v1.appendChild(this.layerElement), _v0 = _v1, this.globalData.defs.appendChild(_v1);
        } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), _v0 = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
        if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
          var _v2 = _v60("clipPath"),
            _v3 = _v60("path");
          _v3.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
          var _v4 = _v43();
          if (_v2.setAttribute("id", _v4), _v2.appendChild(_v3), this.globalData.defs.appendChild(_v2), this.checkMasks()) {
            var _v5 = _v60("g");
            _v5.setAttribute("clip-path", "url(" + _v7() + "#" + _v4 + ")"), _v5.appendChild(this.layerElement), this.transformedElement = _v5, _v0 ? _v0.appendChild(this.transformedElement) : this.baseElement = this.transformedElement;
          } else this.layerElement.setAttribute("clip-path", "url(" + _v7() + "#" + _v4 + ")");
        }
        0 !== this.data.bm && this.setBlendMode();
      },
      renderElement: function () {
        this.finalTransform._localMatMdf && this.transformedElement.setAttribute("transform", this.finalTransform.localMat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.localOpacity);
      },
      destroyBaseElement: function () {
        this.layerElement = null, this.matteElement = null, this.maskManager.destroy();
      },
      getBaseElement: function () {
        return this.data.hd ? null : this.baseElement;
      },
      createRenderableComponents: function () {
        this.maskManager = new _v187(this.data, this, this.globalData), this.renderableEffectsManager = new _v192(this), this.searchEffectTransforms();
      },
      getMatte: function (_v0) {
        if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[_v0]) {
          var _v1,
            _v2,
            _v3,
            _v4,
            _v5 = this.layerId + "_" + _v0;
          if (1 === _v0 || 3 === _v0) {
            var _v6 = _v60("mask");
            _v6.setAttribute("id", _v5), _v6.setAttribute("mask-type", 3 === _v0 ? "luminance" : "alpha"), (_v3 = _v60("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), _v6.appendChild(_v3), this.globalData.defs.appendChild(_v6), _v189.maskType || 1 !== _v0 || (_v6.setAttribute("mask-type", "luminance"), _v1 = _v43(), _v2 = _v188.createFilter(_v1), this.globalData.defs.appendChild(_v2), _v2.appendChild(_v188.createAlphaToLuminanceFilter()), (_v4 = _v60("g")).appendChild(_v3), _v6.appendChild(_v4), _v4.setAttribute("filter", "url(" + _v7() + "#" + _v1 + ")"));
          } else if (2 === _v0) {
            var _v7 = _v60("mask");
            _v7.setAttribute("id", _v5), _v7.setAttribute("mask-type", "alpha");
            var _v8 = _v60("g");
            _v7.appendChild(_v8), _v1 = _v43(), _v2 = _v188.createFilter(_v1);
            var _v9 = _v60("feComponentTransfer");
            _v9.setAttribute("in", "SourceGraphic"), _v2.appendChild(_v9);
            var _v10 = _v60("feFuncA");
            _v10.setAttribute("type", "table"), _v10.setAttribute("tableValues", "1.0 0.0"), _v9.appendChild(_v10), this.globalData.defs.appendChild(_v2);
            var _v11 = _v60("rect");
            _v11.setAttribute("width", this.comp.data.w), _v11.setAttribute("height", this.comp.data.h), _v11.setAttribute("x", "0"), _v11.setAttribute("y", "0"), _v11.setAttribute("fill", "#ffffff"), _v11.setAttribute("opacity", "0"), _v8.setAttribute("filter", "url(" + _v7() + "#" + _v1 + ")"), _v8.appendChild(_v11), (_v3 = _v60("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), _v8.appendChild(_v3), _v189.maskType || (_v7.setAttribute("mask-type", "luminance"), _v2.appendChild(_v188.createAlphaToLuminanceFilter()), _v4 = _v60("g"), _v8.appendChild(_v11), _v4.appendChild(this.layerElement), _v8.appendChild(_v4)), this.globalData.defs.appendChild(_v7);
          }
          this.matteMasks[_v0] = _v5;
        }
        return this.matteMasks[_v0];
      },
      setMatte: function (_v0) {
        this.matteElement && this.matteElement.setAttribute("mask", "url(" + _v7() + "#" + _v0 + ")");
      }
    }, _v195.prototype = {
      initHierarchy: function () {
        this.hierarchy = [], this._isParent = !1, this.checkParenting();
      },
      setHierarchy: function (_v0) {
        this.hierarchy = _v0;
      },
      setAsParent: function () {
        this._isParent = !0;
      },
      checkParenting: function () {
        void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, []);
      }
    }, _v9([_v168, _v11({
      initElement: function (_v0, _v1, _v2) {
        this.initFrame(), this.initBaseData(_v0, _v1, _v2), this.initTransform(_v0, _v1, _v2), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide();
      },
      hide: function () {
        this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0);
      },
      show: function () {
        this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0);
      },
      renderFrame: function () {
        this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1));
      },
      renderInnerContent: function () {},
      prepareFrame: function (_v0) {
        this._mdf = !1, this.prepareRenderableFrame(_v0), this.prepareProperties(_v0, this.isInRange), this.checkTransparency();
      },
      destroy: function () {
        this.innerElem = null, this.destroyBaseElement();
      }
    })], _v196), _v9([_v180, _v186, _v194, _v195, _v181, _v196], _v197), _v197.prototype.createContent = function () {
      var _v0 = this.globalData.getAssetsPath(this.assetData);
      this.innerElem = _v60("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", _v0), this.layerElement.appendChild(this.innerElem);
    }, _v197.prototype.sourceRectAtTime = function () {
      return this.sourceRect;
    }, _v199.prototype = {
      addShapeToModifiers: function (_v0) {
        var _v1,
          _v2 = this.shapeModifiers.length;
        for (_v1 = 0; _v1 < _v2; _v1 += 1) this.shapeModifiers[_v1].addShape(_v0);
      },
      isShapeInAnimatedModifiers: function (_v0) {
        for (var _v1 = 0, _v2 = this.shapeModifiers.length; _v1 < _v2;) if (this.shapeModifiers[_v1].isAnimatedWithShape(_v0)) return !0;
        return !1;
      },
      renderModifiers: function () {
        if (this.shapeModifiers.length) {
          var _v0,
            _v1 = this.shapes.length;
          for (_v0 = 0; _v0 < _v1; _v0 += 1) this.shapes[_v0].sh.reset();
          for (_v1 = this.shapeModifiers.length, _v0 = _v1 - 1; _v0 >= 0 && !this.shapeModifiers[_v0].processShapes(this._isFirstFrame); _v0 -= 1);
        }
      },
      searchProcessedElement: function (_v0) {
        for (var _v1 = this.processedElements, _v2 = 0, _v3 = _v1.length; _v2 < _v3;) {
          if (_v1[_v2].elem === _v0) return _v1[_v2].pos;
          _v2 += 1;
        }
        return 0;
      },
      addProcessedElement: function (_v0, _v1) {
        for (var _v2 = this.processedElements, _v3 = _v2.length; _v3;) if (_v2[_v3 -= 1].elem === _v0) {
          _v2[_v3].pos = _v1;
          return;
        }
        _v2.push(new _v198(_v0, _v1));
      },
      prepareFrame: function (_v0) {
        this.prepareRenderableFrame(_v0), this.prepareProperties(_v0, this.isInRange);
      }
    };
    var _v200 = {
        1: "butt",
        2: "round",
        3: "square"
      },
      _v201 = {
        1: "miter",
        2: "round",
        3: "bevel"
      };
    function _v202(_v0, _v1, _v2) {
      this.caches = [], this.styles = [], this.transformers = _v0, this.lStr = "", this.sh = _v2, this.lvl = _v1, this._isAnimated = !!_v2.k;
      for (var _v3 = 0, _v4 = _v0.length; _v3 < _v4;) {
        if (_v0[_v3].mProps.dynamicProperties.length) {
          this._isAnimated = !0;
          break;
        }
        _v3 += 1;
      }
    }
    function _v203(_v0, _v1) {
      this.data = _v0, this.type = _v0.ty, this.d = "", this.lvl = _v1, this._mdf = !1, this.closed = !0 === _v0.hd, this.pElem = _v60("path"), this.msElem = null;
    }
    function _v204(_v0, _v1, _v2, _v3) {
      this.elem = _v0, this.frameId = -1, this.dataProps = _v14(_v1.length), this.renderer = _v2, this.k = !1, this.dashStr = "", this.dashArray = _v13("float32", _v1.length ? _v1.length - 1 : 0), this.dashoffset = _v13("float32", 1), this.initDynamicPropertyContainer(_v3);
      var _v4,
        _v5,
        _v6 = _v1.length || 0;
      for (_v4 = 0; _v4 < _v6; _v4 += 1) _v5 = _v95.getProp(_v0, _v1[_v4].v, 0, 0, this), this.k = _v5.k || this.k, this.dataProps[_v4] = {
        n: _v1[_v4].n,
        p: _v5
      };
      this.k || this.getValue(!0), this._isAnimated = this.k;
    }
    function _v205(_v0, _v1, _v2) {
      this.initDynamicPropertyContainer(_v0), this.getValue = this.iterateDynamicProperties, this.o = _v95.getProp(_v0, _v1.o, 0, .01, this), this.w = _v95.getProp(_v0, _v1.w, 0, null, this), this.d = new _v204(_v0, _v1.d || {}, "svg", this), this.c = _v95.getProp(_v0, _v1.c, 1, 255, this), this.style = _v2, this._isAnimated = !!this._isAnimated;
    }
    function _v206(_v0, _v1, _v2) {
      this.initDynamicPropertyContainer(_v0), this.getValue = this.iterateDynamicProperties, this.o = _v95.getProp(_v0, _v1.o, 0, .01, this), this.c = _v95.getProp(_v0, _v1.c, 1, 255, this), this.style = _v2;
    }
    function _v207(_v0, _v1, _v2) {
      this.initDynamicPropertyContainer(_v0), this.getValue = this.iterateDynamicProperties, this.style = _v2;
    }
    function _v208(_v0, _v1, _v2) {
      this.data = _v1, this.c = _v13("uint8c", 4 * _v1.p);
      var _v3 = _v1.k.k[0].s ? _v1.k.k[0].s.length - 4 * _v1.p : _v1.k.k.length - 4 * _v1.p;
      this.o = _v13("float32", _v3), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = _v3, this.initDynamicPropertyContainer(_v2), this.prop = _v95.getProp(_v0, _v1.k, 1, null, this), this.k = this.prop.k, this.getValue(!0);
    }
    function _v209(_v0, _v1, _v2) {
      this.initDynamicPropertyContainer(_v0), this.getValue = this.iterateDynamicProperties, this.initGradientData(_v0, _v1, _v2);
    }
    function _v210(_v0, _v1, _v2) {
      this.initDynamicPropertyContainer(_v0), this.getValue = this.iterateDynamicProperties, this.w = _v95.getProp(_v0, _v1.w, 0, null, this), this.d = new _v204(_v0, _v1.d || {}, "svg", this), this.initGradientData(_v0, _v1, _v2), this._isAnimated = !!this._isAnimated;
    }
    function _v211() {
      this.it = [], this.prevViewData = [], this.gr = _v60("g");
    }
    function _v212(_v0, _v1, _v2) {
      this.transform = {
        mProps: _v0,
        op: _v1,
        container: _v2
      }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length;
    }
    _v202.prototype.setAsAnimated = function () {
      this._isAnimated = !0;
    }, _v203.prototype.reset = function () {
      this.d = "", this._mdf = !1;
    }, _v204.prototype.getValue = function (_v0) {
      if ((this.elem.globalData.frameId !== this.frameId || _v0) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || _v0, this._mdf)) {
        var _v1 = 0,
          _v2 = this.dataProps.length;
        for ("svg" === this.renderer && (this.dashStr = ""), _v1 = 0; _v1 < _v2; _v1 += 1) "o" !== this.dataProps[_v1].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[_v1].p.v : this.dashArray[_v1] = this.dataProps[_v1].p.v : this.dashoffset[0] = this.dataProps[_v1].p.v;
      }
    }, _v9([_v96], _v204), _v9([_v96], _v205), _v9([_v96], _v206), _v9([_v96], _v207), _v208.prototype.comparePoints = function (_v0, _v1) {
      for (var _v2 = 0, _v3 = this.o.length / 2; _v2 < _v3;) {
        if (Math.abs(_v0[4 * _v2] - _v0[4 * _v1 + 2 * _v2]) > .01) return !1;
        _v2 += 1;
      }
      return !0;
    }, _v208.prototype.checkCollapsable = function () {
      if (this.o.length / 2 != this.c.length / 4) return !1;
      if (this.data.k.k[0].s) for (var _v0 = 0, _v1 = this.data.k.k.length; _v0 < _v1;) {
        if (!this.comparePoints(this.data.k.k[_v0].s, this.data.p)) return !1;
        _v0 += 1;
      } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
      return !0;
    }, _v208.prototype.getValue = function (_v0) {
      if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || _v0) {
        var _v1,
          _v2,
          _v3,
          _v4 = 4 * this.data.p;
        for (_v1 = 0; _v1 < _v4; _v1 += 1) _v2 = _v1 % 4 == 0 ? 100 : 255, _v3 = Math.round(this.prop.v[_v1] * _v2), this.c[_v1] !== _v3 && (this.c[_v1] = _v3, this._cmdf = !_v0);
        if (this.o.length) for (_v4 = this.prop.v.length, _v1 = 4 * this.data.p; _v1 < _v4; _v1 += 1) _v2 = _v1 % 2 == 0 ? 100 : 1, _v3 = _v1 % 2 == 0 ? Math.round(100 * this.prop.v[_v1]) : this.prop.v[_v1], this.o[_v1 - 4 * this.data.p] !== _v3 && (this.o[_v1 - 4 * this.data.p] = _v3, this._omdf = !_v0);
        this._mdf = !_v0;
      }
    }, _v9([_v96], _v208), _v209.prototype.initGradientData = function (_v0, _v1, _v2) {
      this.o = _v95.getProp(_v0, _v1.o, 0, .01, this), this.s = _v95.getProp(_v0, _v1.s, 1, null, this), this.e = _v95.getProp(_v0, _v1.e, 1, null, this), this.h = _v95.getProp(_v0, _v1.h || {
        k: 0
      }, 0, .01, this), this.a = _v95.getProp(_v0, _v1.a || {
        k: 0
      }, 0, _v30, this), this.g = new _v208(_v0, _v1.g, this), this.style = _v2, this.stops = [], this.setGradientData(_v2.pElem, _v1), this.setGradientOpacity(_v1, _v2), this._isAnimated = !!this._isAnimated;
    }, _v209.prototype.setGradientData = function (_v0, _v1) {
      var _v2,
        _v3,
        _v4,
        _v5 = _v43(),
        _v6 = _v60(1 === _v1.t ? "linearGradient" : "radialGradient");
      _v6.setAttribute("id", _v5), _v6.setAttribute("spreadMethod", "pad"), _v6.setAttribute("gradientUnits", "userSpaceOnUse");
      var _v7 = [];
      for (_v4 = 4 * _v1.g.p, _v3 = 0; _v3 < _v4; _v3 += 4) _v2 = _v60("stop"), _v6.appendChild(_v2), _v7.push(_v2);
      _v0.setAttribute("gf" === _v1.ty ? "fill" : "stroke", "url(" + _v7() + "#" + _v5 + ")"), this.gf = _v6, this.cst = _v7;
    }, _v209.prototype.setGradientOpacity = function (_v0, _v1) {
      if (this.g._hasOpacity && !this.g._collapsable) {
        var _v2,
          _v3,
          _v4,
          _v5 = _v60("mask"),
          _v6 = _v60("path");
        _v5.appendChild(_v6);
        var _v7 = _v43(),
          _v8 = _v43();
        _v5.setAttribute("id", _v8);
        var _v9 = _v60(1 === _v0.t ? "linearGradient" : "radialGradient");
        _v9.setAttribute("id", _v7), _v9.setAttribute("spreadMethod", "pad"), _v9.setAttribute("gradientUnits", "userSpaceOnUse"), _v4 = _v0.g.k.k[0].s ? _v0.g.k.k[0].s.length : _v0.g.k.k.length;
        var _v10 = this.stops;
        for (_v3 = 4 * _v0.g.p; _v3 < _v4; _v3 += 2) (_v2 = _v60("stop")).setAttribute("stop-color", "rgb(255,255,255)"), _v9.appendChild(_v2), _v10.push(_v2);
        _v6.setAttribute("gf" === _v0.ty ? "fill" : "stroke", "url(" + _v7() + "#" + _v7 + ")"), "gs" === _v0.ty && (_v6.setAttribute("stroke-linecap", _v200[_v0.lc || 2]), _v6.setAttribute("stroke-linejoin", _v201[_v0.lj || 2]), 1 === _v0.lj && _v6.setAttribute("stroke-miterlimit", _v0.ml)), this.of = _v9, this.ms = _v5, this.ost = _v10, this.maskId = _v8, _v1.msElem = _v6;
      }
    }, _v9([_v96], _v209), _v9([_v209, _v96], _v210);
    var _v213 = function (_v0, _v1, _v2, _v3) {
        if (0 === _v1) return "";
        var _v4,
          _v5 = _v0.o,
          _v6 = _v0.i,
          _v7 = _v0.v,
          _v8 = " M" + _v3.applyToPointStringified(_v7[0][0], _v7[0][1]);
        for (_v4 = 1; _v4 < _v1; _v4 += 1) _v8 += " C" + _v3.applyToPointStringified(_v5[_v4 - 1][0], _v5[_v4 - 1][1]) + " " + _v3.applyToPointStringified(_v6[_v4][0], _v6[_v4][1]) + " " + _v3.applyToPointStringified(_v7[_v4][0], _v7[_v4][1]);
        return _v2 && _v1 && (_v8 += " C" + _v3.applyToPointStringified(_v5[_v4 - 1][0], _v5[_v4 - 1][1]) + " " + _v3.applyToPointStringified(_v6[0][0], _v6[0][1]) + " " + _v3.applyToPointStringified(_v7[0][0], _v7[0][1]) + "z"), _v8;
      },
      _v214 = function () {
        var _v0 = new _v103(),
          _v1 = new _v103();
        function _v2(_v0, _v1, _v2) {
          (_v2 || _v1.transform.op._mdf) && _v1.transform.container.setAttribute("opacity", _v1.transform.op.v), (_v2 || _v1.transform.mProps._mdf) && _v1.transform.container.setAttribute("transform", _v1.transform.mProps.v.to2dCSS());
        }
        function _v3() {}
        function _v4(_v0, _v1, _v2) {
          var _v3,
            _v4,
            _v5,
            _v6,
            _v7,
            _v8,
            _v9,
            _v10,
            _v11,
            _v12,
            _v13 = _v1.styles.length,
            _v14 = _v1.lvl;
          for (_v8 = 0; _v8 < _v13; _v8 += 1) {
            if (_v6 = _v1.sh._mdf || _v2, _v1.styles[_v8].lvl < _v14) {
              for (_v10 = _v1.reset(), _v11 = _v14 - _v1.styles[_v8].lvl, _v12 = _v1.transformers.length - 1; !_v6 && _v11 > 0;) _v6 = _v1.transformers[_v12].mProps._mdf || _v6, _v11 -= 1, _v12 -= 1;
              if (_v6) for (_v11 = _v14 - _v1.styles[_v8].lvl, _v12 = _v1.transformers.length - 1; _v11 > 0;) _v10.multiply(_v1.transformers[_v12].mProps.v), _v11 -= 1, _v12 -= 1;
            } else _v10 = _v0;
            if (_v4 = (_v9 = _v1.sh.paths)._length, _v6) {
              for (_v3 = 0, _v5 = ""; _v3 < _v4; _v3 += 1) (_v7 = _v9.shapes[_v3]) && _v7._length && (_v5 += _v213(_v7, _v7._length, _v7.c, _v10));
              _v1.caches[_v8] = _v5;
            } else _v5 = _v1.caches[_v8];
            _v1.styles[_v8].d += !0 === _v0.hd ? "" : _v5, _v1.styles[_v8]._mdf = _v6 || _v1.styles[_v8]._mdf;
          }
        }
        function _v5(_v0, _v1, _v2) {
          var _v3 = _v1.style;
          (_v1.c._mdf || _v2) && _v3.pElem.setAttribute("fill", "rgb(" + _v24(_v1.c.v[0]) + "," + _v24(_v1.c.v[1]) + "," + _v24(_v1.c.v[2]) + ")"), (_v1.o._mdf || _v2) && _v3.pElem.setAttribute("fill-opacity", _v1.o.v);
        }
        function _v6(_v0, _v1, _v2) {
          _v7(_v0, _v1, _v2), _v8(_v0, _v1, _v2);
        }
        function _v7(_v0, _v1, _v2) {
          var _v3,
            _v4,
            _v5,
            _v6,
            _v7,
            _v8 = _v1.gf,
            _v9 = _v1.g._hasOpacity,
            _v10 = _v1.s.v,
            _v11 = _v1.e.v;
          if (_v1.o._mdf || _v2) {
            var _v12 = "gf" === _v0.ty ? "fill-opacity" : "stroke-opacity";
            _v1.style.pElem.setAttribute(_v12, _v1.o.v);
          }
          if (_v1.s._mdf || _v2) {
            var _v13 = 1 === _v0.t ? "x1" : "cx",
              _v14 = "x1" === _v13 ? "y1" : "cy";
            _v8.setAttribute(_v13, _v10[0]), _v8.setAttribute(_v14, _v10[1]), _v9 && !_v1.g._collapsable && (_v1.of.setAttribute(_v13, _v10[0]), _v1.of.setAttribute(_v14, _v10[1]));
          }
          if (_v1.g._cmdf || _v2) {
            _v3 = _v1.cst;
            var _v15 = _v1.g.c;
            for (_v5 = _v3.length, _v4 = 0; _v4 < _v5; _v4 += 1) (_v6 = _v3[_v4]).setAttribute("offset", _v15[4 * _v4] + "%"), _v6.setAttribute("stop-color", "rgb(" + _v15[4 * _v4 + 1] + "," + _v15[4 * _v4 + 2] + "," + _v15[4 * _v4 + 3] + ")");
          }
          if (_v9 && (_v1.g._omdf || _v2)) {
            var _v16 = _v1.g.o;
            for (_v5 = (_v3 = _v1.g._collapsable ? _v1.cst : _v1.ost).length, _v4 = 0; _v4 < _v5; _v4 += 1) _v6 = _v3[_v4], _v1.g._collapsable || _v6.setAttribute("offset", _v16[2 * _v4] + "%"), _v6.setAttribute("stop-opacity", _v16[2 * _v4 + 1]);
          }
          if (1 === _v0.t) (_v1.e._mdf || _v2) && (_v8.setAttribute("x2", _v11[0]), _v8.setAttribute("y2", _v11[1]), _v9 && !_v1.g._collapsable && (_v1.of.setAttribute("x2", _v11[0]), _v1.of.setAttribute("y2", _v11[1])));else if ((_v1.s._mdf || _v1.e._mdf || _v2) && (_v7 = Math.sqrt(Math.pow(_v10[0] - _v11[0], 2) + Math.pow(_v10[1] - _v11[1], 2)), _v8.setAttribute("r", _v7), _v9 && !_v1.g._collapsable && _v1.of.setAttribute("r", _v7)), _v1.s._mdf || _v1.e._mdf || _v1.h._mdf || _v1.a._mdf || _v2) {
            _v7 || (_v7 = Math.sqrt(Math.pow(_v10[0] - _v11[0], 2) + Math.pow(_v10[1] - _v11[1], 2)));
            var _v17 = Math.atan2(_v11[1] - _v10[1], _v11[0] - _v10[0]),
              _v18 = _v1.h.v;
            _v18 >= 1 ? _v18 = .99 : _v18 <= -1 && (_v18 = -.99);
            var _v19 = _v7 * _v18,
              _v20 = Math.cos(_v17 + _v1.a.v) * _v19 + _v10[0],
              _v21 = Math.sin(_v17 + _v1.a.v) * _v19 + _v10[1];
            _v8.setAttribute("fx", _v20), _v8.setAttribute("fy", _v21), _v9 && !_v1.g._collapsable && (_v1.of.setAttribute("fx", _v20), _v1.of.setAttribute("fy", _v21));
          }
        }
        function _v8(_v0, _v1, _v2) {
          var _v3 = _v1.style,
            _v4 = _v1.d;
          _v4 && (_v4._mdf || _v2) && _v4.dashStr && (_v3.pElem.setAttribute("stroke-dasharray", _v4.dashStr), _v3.pElem.setAttribute("stroke-dashoffset", _v4.dashoffset[0])), _v1.c && (_v1.c._mdf || _v2) && _v3.pElem.setAttribute("stroke", "rgb(" + _v24(_v1.c.v[0]) + "," + _v24(_v1.c.v[1]) + "," + _v24(_v1.c.v[2]) + ")"), (_v1.o._mdf || _v2) && _v3.pElem.setAttribute("stroke-opacity", _v1.o.v), (_v1.w._mdf || _v2) && (_v3.pElem.setAttribute("stroke-width", _v1.w.v), _v3.msElem && _v3.msElem.setAttribute("stroke-width", _v1.w.v));
        }
        return {
          createRenderFunction: function (_v0) {
            switch (_v0.ty) {
              case "fl":
                return _v5;
              case "gf":
                return _v7;
              case "gs":
                return _v6;
              case "st":
                return _v8;
              case "sh":
              case "el":
              case "rc":
              case "sr":
                return _v4;
              case "tr":
                return _v2;
              case "no":
                return _v3;
              default:
                return null;
            }
          }
        };
      }();
    function _v215(_v0, _v1, _v2) {
      this.shapes = [], this.shapesData = _v0.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(_v0, _v1, _v2), this.prevViewData = [];
    }
    function _v216(_v0, _v1, _v2, _v3, _v4, _v5) {
      this.o = _v0, this.sw = _v1, this.sc = _v2, this.fc = _v3, this.m = _v4, this.p = _v5, this._mdf = {
        o: !0,
        sw: !!_v1,
        sc: !!_v2,
        fc: !!_v3,
        m: !0,
        p: !0
      };
    }
    function _v217(_v0, _v1) {
      this._frameId = _v3, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, _v1.d && _v1.d.sid && (_v1.d = _v0.globalData.slotManager.getProp(_v1.d)), this.data = _v1, this.elem = _v0, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
        ascent: 0,
        boxWidth: this.defaultBoxWidth,
        f: "",
        fStyle: "",
        fWeight: "",
        fc: "",
        j: "",
        justifyOffset: "",
        l: [],
        lh: 0,
        lineWidths: [],
        ls: "",
        of: "",
        s: "",
        sc: "",
        sw: 0,
        t: 0,
        tr: 0,
        sz: 0,
        ps: null,
        fillColorAnim: !1,
        strokeColorAnim: !1,
        strokeWidthAnim: !1,
        yOffset: 0,
        finalSize: 0,
        finalText: [],
        finalLineHeight: 0,
        __complete: !1
      }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData);
    }
    _v9([_v180, _v186, _v194, _v199, _v195, _v181, _v196], _v215), _v215.prototype.initSecondaryElement = function () {}, _v215.prototype.identityMatrix = new _v103(), _v215.prototype.buildExpressionInterface = function () {}, _v215.prototype.createContent = function () {
      this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes();
    }, _v215.prototype.filterUniqueShapes = function () {
      var _v0,
        _v1,
        _v2,
        _v3,
        _v4 = this.shapes.length,
        _v5 = this.stylesList.length,
        _v6 = [],
        _v7 = !1;
      for (_v2 = 0; _v2 < _v5; _v2 += 1) {
        for (_v3 = this.stylesList[_v2], _v7 = !1, _v6.length = 0, _v0 = 0; _v0 < _v4; _v0 += 1) -1 !== (_v1 = this.shapes[_v0]).styles.indexOf(_v3) && (_v6.push(_v1), _v7 = _v1._isAnimated || _v7);
        _v6.length > 1 && _v7 && this.setShapesAsAnimated(_v6);
      }
    }, _v215.prototype.setShapesAsAnimated = function (_v0) {
      var _v1,
        _v2 = _v0.length;
      for (_v1 = 0; _v1 < _v2; _v1 += 1) _v0[_v1].setAsAnimated();
    }, _v215.prototype.createStyleElement = function (_v0, _v1) {
      var _v2,
        _v3 = new _v203(_v0, _v1),
        _v4 = _v3.pElem;
      return "st" === _v0.ty ? _v2 = new _v205(this, _v0, _v3) : "fl" === _v0.ty ? _v2 = new _v206(this, _v0, _v3) : "gf" === _v0.ty || "gs" === _v0.ty ? (_v2 = new ("gf" === _v0.ty ? _v209 : _v210)(this, _v0, _v3), this.globalData.defs.appendChild(_v2.gf), _v2.maskId && (this.globalData.defs.appendChild(_v2.ms), this.globalData.defs.appendChild(_v2.of), _v4.setAttribute("mask", "url(" + _v7() + "#" + _v2.maskId + ")"))) : "no" === _v0.ty && (_v2 = new _v207(this, _v0, _v3)), ("st" === _v0.ty || "gs" === _v0.ty) && (_v4.setAttribute("stroke-linecap", _v200[_v0.lc || 2]), _v4.setAttribute("stroke-linejoin", _v201[_v0.lj || 2]), _v4.setAttribute("fill-opacity", "0"), 1 === _v0.lj && _v4.setAttribute("stroke-miterlimit", _v0.ml)), 2 === _v0.r && _v4.setAttribute("fill-rule", "evenodd"), _v0.ln && _v4.setAttribute("id", _v0.ln), _v0.cl && _v4.setAttribute("class", _v0.cl), _v0.bm && (_v4.style["mix-blend-mode"] = _v169(_v0.bm)), this.stylesList.push(_v3), this.addToAnimatedContents(_v0, _v2), _v2;
    }, _v215.prototype.createGroupElement = function (_v0) {
      var _v1 = new _v211();
      return _v0.ln && _v1.gr.setAttribute("id", _v0.ln), _v0.cl && _v1.gr.setAttribute("class", _v0.cl), _v0.bm && (_v1.gr.style["mix-blend-mode"] = _v169(_v0.bm)), _v1;
    }, _v215.prototype.createTransformElement = function (_v0, _v1) {
      var _v2 = _v129.getTransformProperty(this, _v0, this),
        _v3 = new _v212(_v2, _v2.o, _v1);
      return this.addToAnimatedContents(_v0, _v3), _v3;
    }, _v215.prototype.createShapeElement = function (_v0, _v1, _v2) {
      var _v3 = 4;
      "rc" === _v0.ty ? _v3 = 5 : "el" === _v0.ty ? _v3 = 6 : "sr" === _v0.ty && (_v3 = 7);
      var _v4 = new _v202(_v1, _v2, _v102.getShapeProp(this, _v0, _v3, this));
      return this.shapes.push(_v4), this.addShapeToModifiers(_v4), this.addToAnimatedContents(_v0, _v4), _v4;
    }, _v215.prototype.addToAnimatedContents = function (_v0, _v1) {
      for (var _v2 = 0, _v3 = this.animatedContents.length; _v2 < _v3;) {
        if (this.animatedContents[_v2].element === _v1) return;
        _v2 += 1;
      }
      this.animatedContents.push({
        fn: _v214.createRenderFunction(_v0),
        element: _v1,
        data: _v0
      });
    }, _v215.prototype.setElementStyles = function (_v0) {
      var _v1,
        _v2 = _v0.styles,
        _v3 = this.stylesList.length;
      for (_v1 = 0; _v1 < _v3; _v1 += 1) -1 !== _v2.indexOf(this.stylesList[_v1]) || this.stylesList[_v1].closed || _v2.push(this.stylesList[_v1]);
    }, _v215.prototype.reloadShapes = function () {
      this._isFirstFrame = !0;
      var _v0,
        _v1 = this.itemsData.length;
      for (_v0 = 0; _v0 < _v1; _v0 += 1) this.prevViewData[_v0] = this.itemsData[_v0];
      for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), _v1 = this.dynamicProperties.length, _v0 = 0; _v0 < _v1; _v0 += 1) this.dynamicProperties[_v0].getValue();
      this.renderModifiers();
    }, _v215.prototype.searchShapes = function (_v0, _v1, _v2, _v3, _v4, _v5, _v6) {
      var _v7,
        _v8,
        _v9,
        _v10,
        _v11,
        _v12,
        _v13 = [].concat(_v5),
        _v14 = _v0.length - 1,
        _v15 = [],
        _v16 = [];
      for (_v7 = _v14; _v7 >= 0; _v7 -= 1) {
        if ((_v12 = this.searchProcessedElement(_v0[_v7])) ? _v1[_v7] = _v2[_v12 - 1] : _v0[_v7]._render = _v6, "fl" === _v0[_v7].ty || "st" === _v0[_v7].ty || "gf" === _v0[_v7].ty || "gs" === _v0[_v7].ty || "no" === _v0[_v7].ty) _v12 ? _v1[_v7].style.closed = _v0[_v7].hd : _v1[_v7] = this.createStyleElement(_v0[_v7], _v4), _v0[_v7]._render && _v1[_v7].style.pElem.parentNode !== _v3 && _v3.appendChild(_v1[_v7].style.pElem), _v15.push(_v1[_v7].style);else if ("gr" === _v0[_v7].ty) {
          if (_v12) for (_v9 = _v1[_v7].it.length, _v8 = 0; _v8 < _v9; _v8 += 1) _v1[_v7].prevViewData[_v8] = _v1[_v7].it[_v8];else _v1[_v7] = this.createGroupElement(_v0[_v7]);
          this.searchShapes(_v0[_v7].it, _v1[_v7].it, _v1[_v7].prevViewData, _v1[_v7].gr, _v4 + 1, _v13, _v6), _v0[_v7]._render && _v1[_v7].gr.parentNode !== _v3 && _v3.appendChild(_v1[_v7].gr);
        } else "tr" === _v0[_v7].ty ? (_v12 || (_v1[_v7] = this.createTransformElement(_v0[_v7], _v3)), _v10 = _v1[_v7].transform, _v13.push(_v10)) : "sh" === _v0[_v7].ty || "rc" === _v0[_v7].ty || "el" === _v0[_v7].ty || "sr" === _v0[_v7].ty ? (_v12 || (_v1[_v7] = this.createShapeElement(_v0[_v7], _v13, _v4)), this.setElementStyles(_v1[_v7])) : "tm" === _v0[_v7].ty || "rd" === _v0[_v7].ty || "ms" === _v0[_v7].ty || "pb" === _v0[_v7].ty || "zz" === _v0[_v7].ty || "op" === _v0[_v7].ty ? (_v12 ? (_v11 = _v1[_v7]).closed = !1 : ((_v11 = _v125.getModifier(_v0[_v7].ty)).init(this, _v0[_v7]), _v1[_v7] = _v11, this.shapeModifiers.push(_v11)), _v16.push(_v11)) : "rp" === _v0[_v7].ty && (_v12 ? (_v11 = _v1[_v7]).closed = !0 : (_v11 = _v125.getModifier(_v0[_v7].ty), _v1[_v7] = _v11, _v11.init(this, _v0, _v7, _v1), this.shapeModifiers.push(_v11), _v6 = !1), _v16.push(_v11));
        this.addProcessedElement(_v0[_v7], _v7 + 1);
      }
      for (_v14 = _v15.length, _v7 = 0; _v7 < _v14; _v7 += 1) _v15[_v7].closed = !0;
      for (_v14 = _v16.length, _v7 = 0; _v7 < _v14; _v7 += 1) _v16[_v7].closed = !0;
    }, _v215.prototype.renderInnerContent = function () {
      this.renderModifiers();
      var _v0,
        _v1 = this.stylesList.length;
      for (_v0 = 0; _v0 < _v1; _v0 += 1) this.stylesList[_v0].reset();
      for (this.renderShape(), _v0 = 0; _v0 < _v1; _v0 += 1) (this.stylesList[_v0]._mdf || this._isFirstFrame) && (this.stylesList[_v0].msElem && (this.stylesList[_v0].msElem.setAttribute("d", this.stylesList[_v0].d), this.stylesList[_v0].d = "M0 0" + this.stylesList[_v0].d), this.stylesList[_v0].pElem.setAttribute("d", this.stylesList[_v0].d || "M0 0"));
    }, _v215.prototype.renderShape = function () {
      var _v0,
        _v1,
        _v2 = this.animatedContents.length;
      for (_v0 = 0; _v0 < _v2; _v0 += 1) _v1 = this.animatedContents[_v0], (this._isFirstFrame || _v1.element._isAnimated) && !0 !== _v1.data && _v1.fn(_v1.data, _v1.element, this._isFirstFrame);
    }, _v215.prototype.destroy = function () {
      this.destroyBaseElement(), this.shapesData = null, this.itemsData = null;
    }, _v216.prototype.update = function (_v0, _v1, _v2, _v3, _v4, _v5) {
      this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
      var _v6 = !1;
      return this.o !== _v0 && (this.o = _v0, this._mdf.o = !0, _v6 = !0), this.sw !== _v1 && (this.sw = _v1, this._mdf.sw = !0, _v6 = !0), this.sc !== _v2 && (this.sc = _v2, this._mdf.sc = !0, _v6 = !0), this.fc !== _v3 && (this.fc = _v3, this._mdf.fc = !0, _v6 = !0), this.m !== _v4 && (this.m = _v4, this._mdf.m = !0, _v6 = !0), _v5.length && (this.p[0] !== _v5[0] || this.p[1] !== _v5[1] || this.p[4] !== _v5[4] || this.p[5] !== _v5[5] || this.p[12] !== _v5[12] || this.p[13] !== _v5[13]) && (this.p = _v5, this._mdf.p = !0, _v6 = !0), _v6;
    }, _v217.prototype.defaultBoxWidth = [0, 0], _v217.prototype.copyData = function (_v0, _v1) {
      for (var _v2 in _v1) Object.prototype.hasOwnProperty.call(_v1, _v2) && (_v0[_v2] = _v1[_v2]);
      return _v0;
    }, _v217.prototype.setCurrentData = function (_v0) {
      _v0.__complete || this.completeTextData(_v0), this.currentData = _v0, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0;
    }, _v217.prototype.searchProperty = function () {
      return this.searchKeyframes();
    }, _v217.prototype.searchKeyframes = function () {
      return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf;
    }, _v217.prototype.addEffect = function (_v0) {
      this.effectsSequence.push(_v0), this.elem.addDynamicProperty(this);
    }, _v217.prototype.getValue = function (_v0) {
      if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || _v0) {
        this.currentData.t = this.data.d.k[this.keysIndex].s.t;
        var _v1,
          _v2 = this.currentData,
          _v3 = this.keysIndex;
        if (this.lock) return void this.setCurrentData(this.currentData);
        this.lock = !0, this._mdf = !1;
        var _v4 = this.effectsSequence.length,
          _v5 = _v0 || this.data.d.k[this.keysIndex].s;
        for (_v1 = 0; _v1 < _v4; _v1 += 1) _v5 = _v3 !== this.keysIndex ? this.effectsSequence[_v1](_v5, _v5.t) : this.effectsSequence[_v1](this.currentData, _v5.t);
        _v2 !== _v5 && this.setCurrentData(_v5), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId;
      }
    }, _v217.prototype.getKeyframeValue = function () {
      for (var _v0 = this.data.d.k, _v1 = this.elem.comp.renderedFrame, _v2 = 0, _v3 = _v0.length; _v2 <= _v3 - 1 && _v2 !== _v3 - 1 && !(_v0[_v2 + 1].t > _v1);) _v2 += 1;
      return this.keysIndex !== _v2 && (this.keysIndex = _v2), this.data.d.k[this.keysIndex].s;
    }, _v217.prototype.buildFinalText = function (_v0) {
      for (var _v1, _v2, _v3 = [], _v4 = 0, _v5 = _v0.length, _v6 = !1, _v7 = !1, _v8 = ""; _v4 < _v5;) _v6 = _v7, _v7 = !1, _v1 = _v0.charCodeAt(_v4), _v8 = _v0.charAt(_v4), _v165.isCombinedCharacter(_v1) ? _v6 = !0 : _v1 >= 0 && _v1 <= 0 ? _v165.isRegionalFlag(_v0, _v4) ? _v8 = _v0.substr(_v4, 14) : (_v2 = _v0.charCodeAt(_v4 + 1)) >= 0 && _v2 <= 0 && (_v165.isModifier(_v1, _v2) ? (_v8 = _v0.substr(_v4, 2), _v6 = !0) : _v8 = _v165.isFlagEmoji(_v0.substr(_v4, 4)) ? _v0.substr(_v4, 4) : _v0.substr(_v4, 2)) : _v1 > 0 ? (_v2 = _v0.charCodeAt(_v4 + 1), _v165.isVariationSelector(_v1) && (_v6 = !0)) : _v165.isZeroWidthJoiner(_v1) && (_v6 = !0, _v7 = !0), _v6 ? (_v3[_v3.length - 1] += _v8, _v6 = !1) : _v3.push(_v8), _v4 += _v8.length;
      return _v3;
    }, _v217.prototype.completeTextData = function (_v0) {
      _v0.__complete = !0;
      var _v1 = this.elem.globalData.fontManager,
        _v2 = this.data,
        _v3 = [],
        _v4 = 0,
        _v5 = _v2.m.g,
        _v6 = 0,
        _v7 = 0,
        _v8 = 0,
        _v9 = [],
        _v10 = 0,
        _v11 = 0,
        _v12 = _v1.getFontByName(_v0.f),
        _v13 = 0,
        _v14 = _v164(_v12);
      _v0.fWeight = _v14.weight, _v0.fStyle = _v14.style, _v0.finalSize = _v0.s, _v0.finalText = this.buildFinalText(_v0.t), _v17 = _v0.finalText.length, _v0.finalLineHeight = _v0.lh;
      var _v15 = _v0.tr / 0 * _v0.finalSize;
      if (_v0.sz) for (var _v16, _v17, _v18, _v19, _v20, _v21, _v22, _v23, _v24, _v25, _v26 = !0, _v27 = _v0.sz[0], _v28 = _v0.sz[1]; _v26;) {
        _v25 = this.buildFinalText(_v0.t), _v24 = 0, _v10 = 0, _v17 = _v25.length, _v15 = _v0.tr / 0 * _v0.finalSize;
        var _v29 = -1;
        for (_v16 = 0; _v16 < _v17; _v16 += 1) _v23 = _v25[_v16].charCodeAt(0), _v18 = !1, " " === _v25[_v16] ? _v29 = _v16 : (13 === _v23 || 3 === _v23) && (_v10 = 0, _v18 = !0, _v24 += _v0.finalLineHeight || 1.2 * _v0.finalSize), _v1.chars ? (_v22 = _v1.getCharData(_v25[_v16], _v12.fStyle, _v12.fFamily), _v13 = _v18 ? 0 : _v22.w * _v0.finalSize / 100) : _v13 = _v1.measureText(_v25[_v16], _v0.f, _v0.finalSize), _v10 + _v13 > _v27 && " " !== _v25[_v16] ? (-1 === _v29 ? _v17 += 1 : _v16 = _v29, _v24 += _v0.finalLineHeight || 1.2 * _v0.finalSize, _v25.splice(_v16, +(_v29 === _v16), "\r"), _v29 = -1, _v10 = 0) : (_v10 += _v13, _v10 += _v15);
        _v24 += _v12.ascent * _v0.finalSize / 100, this.canResize && _v0.finalSize > this.minimumFontSize && _v28 < _v24 ? (_v0.finalSize -= 1, _v0.finalLineHeight = _v0.finalSize * _v0.lh / _v0.s) : (_v0.finalText = _v25, _v17 = _v0.finalText.length, _v26 = !1);
      }
      _v10 = -_v15, _v13 = 0;
      var _v30 = 0;
      for (_v16 = 0; _v16 < _v17; _v16 += 1) if (_v18 = !1, 13 === (_v23 = (_v33 = _v0.finalText[_v16]).charCodeAt(0)) || 3 === _v23 ? (_v30 = 0, _v9.push(_v10), _v11 = _v10 > _v11 ? _v10 : _v11, _v10 = -2 * _v15, _v19 = "", _v18 = !0, _v8 += 1) : _v19 = _v33, _v1.chars ? (_v22 = _v1.getCharData(_v33, _v12.fStyle, _v1.getFontByName(_v0.f).fFamily), _v13 = _v18 ? 0 : _v22.w * _v0.finalSize / 100) : _v13 = _v1.measureText(_v19, _v0.f, _v0.finalSize), " " === _v33 ? _v30 += _v13 + _v15 : (_v10 += _v13 + _v15 + _v30, _v30 = 0), _v3.push({
        l: _v13,
        an: _v13,
        add: _v6,
        n: _v18,
        anIndexes: [],
        val: _v19,
        line: _v8,
        animatorJustifyOffset: 0
      }), 2 == _v5) {
        if (_v6 += _v13, "" === _v19 || " " === _v19 || _v16 === _v17 - 1) {
          for (("" === _v19 || " " === _v19) && (_v6 -= _v13); _v7 <= _v16;) _v3[_v7].an = _v6, _v3[_v7].ind = _v4, _v3[_v7].extra = _v13, _v7 += 1;
          _v4 += 1, _v6 = 0;
        }
      } else if (3 == _v5) {
        if (_v6 += _v13, "" === _v19 || _v16 === _v17 - 1) {
          for ("" === _v19 && (_v6 -= _v13); _v7 <= _v16;) _v3[_v7].an = _v6, _v3[_v7].ind = _v4, _v3[_v7].extra = _v13, _v7 += 1;
          _v6 = 0, _v4 += 1;
        }
      } else _v3[_v4].ind = _v4, _v3[_v4].extra = 0, _v4 += 1;
      if (_v0.l = _v3, _v11 = _v10 > _v11 ? _v10 : _v11, _v9.push(_v10), _v0.sz) _v0.boxWidth = _v0.sz[0], _v0.justifyOffset = 0;else switch (_v0.boxWidth = _v11, _v0.j) {
        case 1:
          _v0.justifyOffset = -_v0.boxWidth;
          break;
        case 2:
          _v0.justifyOffset = -_v0.boxWidth / 2;
          break;
        default:
          _v0.justifyOffset = 0;
      }
      _v0.lineWidths = _v9;
      var _v31 = _v2.a;
      _v21 = _v31.length;
      var _v32 = [];
      for (_v20 = 0; _v20 < _v21; _v20 += 1) {
        for ((_v34 = _v31[_v20]).a.sc && (_v0.strokeColorAnim = !0), _v34.a.sw && (_v0.strokeWidthAnim = !0), (_v34.a.fc || _v34.a.fh || _v34.a.fs || _v34.a.fb) && (_v0.fillColorAnim = !0), _v37 = 0, _v36 = _v34.s.b, _v16 = 0; _v16 < _v17; _v16 += 1) (_v35 = _v3[_v16]).anIndexes[_v20] = _v37, (1 == _v36 && "" !== _v35.val || 2 == _v36 && "" !== _v35.val && " " !== _v35.val || 3 == _v36 && (_v35.n || " " == _v35.val || _v16 == _v17 - 1) || 4 == _v36 && (_v35.n || _v16 == _v17 - 1)) && (1 === _v34.s.rn && _v32.push(_v37), _v37 += 1);
        _v2.a[_v20].s.totalChars = _v37;
        var _v33,
          _v34,
          _v35,
          _v36,
          _v37,
          _v38,
          _v39 = -1;
        if (1 === _v34.s.rn) for (_v16 = 0; _v16 < _v17; _v16 += 1) _v39 != (_v35 = _v3[_v16]).anIndexes[_v20] && (_v39 = _v35.anIndexes[_v20], _v38 = _v32.splice(Math.floor(Math.random() * _v32.length), 1)[0]), _v35.anIndexes[_v20] = _v38;
      }
      _v0.yOffset = _v0.finalLineHeight || 1.2 * _v0.finalSize, _v0.ls = _v0.ls || 0, _v0.ascent = _v12.ascent * _v0.finalSize / 100;
    }, _v217.prototype.updateDocumentData = function (_v0, _v1) {
      _v1 = void 0 === _v1 ? this.keysIndex : _v1;
      var _v2 = this.copyData({}, this.data.d.k[_v1].s);
      _v2 = this.copyData(_v2, _v0), this.data.d.k[_v1].s = _v2, this.recalculate(_v1), this.setCurrentData(_v2), this.elem.addDynamicProperty(this);
    }, _v217.prototype.recalculate = function (_v0) {
      var _v1 = this.data.d.k[_v0].s;
      _v1.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(_v1);
    }, _v217.prototype.canResizeFont = function (_v0) {
      this.canResize = _v0, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
    }, _v217.prototype.setMinimumFontSize = function (_v0) {
      this.minimumFontSize = Math.floor(_v0) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
    };
    var _v218 = function () {
      var _v0 = Math.max,
        _v1 = Math.min,
        _v2 = Math.floor;
      function _v3(_v0, _v1) {
        this._currentTextLength = -1, this.k = !1, this.data = _v1, this.elem = _v0, this.comp = _v0.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(_v0), this.s = _v95.getProp(_v0, _v1.s || {
          k: 0
        }, 0, 0, this), "e" in _v1 ? this.e = _v95.getProp(_v0, _v1.e, 0, 0, this) : this.e = {
          v: 100
        }, this.o = _v95.getProp(_v0, _v1.o || {
          k: 0
        }, 0, 0, this), this.xe = _v95.getProp(_v0, _v1.xe || {
          k: 0
        }, 0, 0, this), this.ne = _v95.getProp(_v0, _v1.ne || {
          k: 0
        }, 0, 0, this), this.sm = _v95.getProp(_v0, _v1.sm || {
          k: 100
        }, 0, 0, this), this.a = _v95.getProp(_v0, _v1.a, 0, .01, this), this.dynamicProperties.length || this.getValue();
      }
      return _v3.prototype = {
        getMult: function (_v0) {
          this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
          var _v1 = 0,
            _v2 = 0,
            _v3 = 1,
            _v4 = 1;
          this.ne.v > 0 ? _v1 = this.ne.v / 100 : _v2 = -this.ne.v / 100, this.xe.v > 0 ? _v3 = 1 - this.xe.v / 100 : _v4 = 1 + this.xe.v / 100;
          var _v5 = _v74.getBezierEasing(_v1, _v2, _v3, _v4).get,
            _v6 = 0,
            _v7 = this.finalS,
            _v8 = this.finalE,
            _v9 = this.data.sh;
          if (2 === _v9) _v6 = _v5(_v6 = _v8 === _v7 ? +(_v0 >= _v8) : _v0(0, _v1(.5 / (_v8 - _v7) + (_v0 - _v7) / (_v8 - _v7), 1)));else if (3 === _v9) _v6 = _v5(_v6 = _v8 === _v7 ? _v0 >= _v8 ? 0 : 1 : 1 - _v0(0, _v1(.5 / (_v8 - _v7) + (_v0 - _v7) / (_v8 - _v7), 1)));else if (4 === _v9) _v8 === _v7 ? _v6 = 0 : (_v6 = _v0(0, _v1(.5 / (_v8 - _v7) + (_v0 - _v7) / (_v8 - _v7), 1))) < .5 ? _v6 *= 2 : _v6 = 1 - 2 * (_v6 - .5), _v6 = _v5(_v6);else if (5 === _v9) {
            if (_v8 === _v7) _v6 = 0;else {
              var _v10 = _v8 - _v7,
                _v11 = -_v10 / 2 + (_v0 = _v1(_v0(0, _v0 + .5 - _v7), _v8 - _v7)),
                _v12 = _v10 / 2;
              _v6 = Math.sqrt(1 - _v11 * _v11 / (_v12 * _v12));
            }
            _v6 = _v5(_v6);
          } else 6 === _v9 ? _v6 = _v5(_v6 = _v8 === _v7 ? 0 : (1 + Math.cos(Math.PI + 2 * Math.PI * (_v0 = _v1(_v0(0, _v0 + .5 - _v7), _v8 - _v7)) / (_v8 - _v7))) / 2) : (_v0 >= _v2(_v7) && (_v6 = _v0 - _v7 < 0 ? _v0(0, _v1(_v1(_v8, 1) - (_v7 - _v0), 1)) : _v0(0, _v1(_v8 - _v0, 1))), _v6 = _v5(_v6));
          if (100 !== this.sm.v) {
            var _v13 = .01 * this.sm.v;
            0 === _v13 && (_v13 = 1e-8);
            var _v14 = .5 - .5 * _v13;
            _v6 < _v14 ? _v6 = 0 : (_v6 = (_v6 - _v14) / _v13) > 1 && (_v6 = 1);
          }
          return _v6 * this.a.v;
        },
        getValue: function (_v0) {
          this.iterateDynamicProperties(), this._mdf = _v0 || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, _v0 && 2 === this.data.r && (this.e.v = this._currentTextLength);
          var _v1 = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
            _v2 = this.o.v / _v1,
            _v3 = this.s.v / _v1 + _v2,
            _v4 = this.e.v / _v1 + _v2;
          if (_v3 > _v4) {
            var _v5 = _v3;
            _v3 = _v4, _v4 = _v5;
          }
          this.finalS = _v3, this.finalE = _v4;
        }
      }, _v9([_v96], _v3), {
        getTextSelectorProp: function (_v0, _v1, _v2) {
          return new _v3(_v0, _v1, _v2);
        }
      };
    }();
    function _v219(_v0, _v1, _v2) {
      var _v3 = {
          propType: !1
        },
        _v4 = _v95.getProp,
        _v5 = _v1.a;
      this.a = {
        r: _v5.r ? _v4(_v0, _v5.r, 0, _v30, _v2) : _v3,
        rx: _v5.rx ? _v4(_v0, _v5.rx, 0, _v30, _v2) : _v3,
        ry: _v5.ry ? _v4(_v0, _v5.ry, 0, _v30, _v2) : _v3,
        sk: _v5.sk ? _v4(_v0, _v5.sk, 0, _v30, _v2) : _v3,
        sa: _v5.sa ? _v4(_v0, _v5.sa, 0, _v30, _v2) : _v3,
        s: _v5.s ? _v4(_v0, _v5.s, 1, .01, _v2) : _v3,
        a: _v5.a ? _v4(_v0, _v5.a, 1, 0, _v2) : _v3,
        o: _v5.o ? _v4(_v0, _v5.o, 0, .01, _v2) : _v3,
        p: _v5.p ? _v4(_v0, _v5.p, 1, 0, _v2) : _v3,
        sw: _v5.sw ? _v4(_v0, _v5.sw, 0, 0, _v2) : _v3,
        sc: _v5.sc ? _v4(_v0, _v5.sc, 1, 0, _v2) : _v3,
        fc: _v5.fc ? _v4(_v0, _v5.fc, 1, 0, _v2) : _v3,
        fh: _v5.fh ? _v4(_v0, _v5.fh, 0, 0, _v2) : _v3,
        fs: _v5.fs ? _v4(_v0, _v5.fs, 0, .01, _v2) : _v3,
        fb: _v5.fb ? _v4(_v0, _v5.fb, 0, .01, _v2) : _v3,
        t: _v5.t ? _v4(_v0, _v5.t, 0, 0, _v2) : _v3
      }, this.s = _v218.getTextSelectorProp(_v0, _v1.s, _v2), this.s.t = _v1.s.t;
    }
    function _v220(_v0, _v1, _v2) {
      this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = _v0, this._renderType = _v1, this._elem = _v2, this._animatorsData = _v14(this._textData.a.length), this._pathData = {}, this._moreOptions = {
        alignment: {}
      }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(_v2);
    }
    function _v221() {}
    _v220.prototype.searchProperties = function () {
      var _v0,
        _v1,
        _v2 = this._textData.a.length,
        _v3 = _v95.getProp;
      for (_v0 = 0; _v0 < _v2; _v0 += 1) _v1 = this._textData.a[_v0], this._animatorsData[_v0] = new _v219(this._elem, _v1, this);
      this._textData.p && "m" in this._textData.p ? (this._pathData = {
        a: _v3(this._elem, this._textData.p.a, 0, 0, this),
        f: _v3(this._elem, this._textData.p.f, 0, 0, this),
        l: _v3(this._elem, this._textData.p.l, 0, 0, this),
        r: _v3(this._elem, this._textData.p.r, 0, 0, this),
        p: _v3(this._elem, this._textData.p.p, 0, 0, this),
        m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
      }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = _v3(this._elem, this._textData.m.a, 1, 0, this);
    }, _v220.prototype.getMeasures = function (_v0, _v1) {
      if (this.lettersChangedFlag = _v1, this._mdf || this._isFirstFrame || _v1 || this._hasMaskedPath && this._pathData.m._mdf) {
        this._isFirstFrame = !1;
        var _v2,
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
          _v20 = this._moreOptions.alignment.v,
          _v21 = this._animatorsData,
          _v22 = this._textData,
          _v23 = this.mHelper,
          _v24 = this._renderType,
          _v25 = this.renderedLetters.length,
          _v26 = _v0.l;
        if (this._hasMaskedPath) {
          if (_v45 = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
            var _v27,
              _v28,
              _v29,
              _v30,
              _v31,
              _v32,
              _v33,
              _v34,
              _v35,
              _v36,
              _v37,
              _v38,
              _v39,
              _v40,
              _v41,
              _v42,
              _v43,
              _v44,
              _v45,
              _v46,
              _v47 = _v45.v;
            for (this._pathData.r.v && (_v47 = _v47.reverse()), _v31 = {
              tLength: 0,
              segments: []
            }, _v30 = _v47._length - 1, _v42 = 0, _v29 = 0; _v29 < _v30; _v29 += 1) _v46 = _v80.buildBezierData(_v47.v[_v29], _v47.v[_v29 + 1], [_v47.o[_v29][0] - _v47.v[_v29][0], _v47.o[_v29][1] - _v47.v[_v29][1]], [_v47.i[_v29 + 1][0] - _v47.v[_v29 + 1][0], _v47.i[_v29 + 1][1] - _v47.v[_v29 + 1][1]]), _v31.tLength += _v46.segmentLength, _v31.segments.push(_v46), _v42 += _v46.segmentLength;
            _v29 = _v30, _v45.v.c && (_v46 = _v80.buildBezierData(_v47.v[_v29], _v47.v[0], [_v47.o[_v29][0] - _v47.v[_v29][0], _v47.o[_v29][1] - _v47.v[_v29][1]], [_v47.i[0][0] - _v47.v[0][0], _v47.i[0][1] - _v47.v[0][1]]), _v31.tLength += _v46.segmentLength, _v31.segments.push(_v46), _v42 += _v46.segmentLength), this._pathData.pi = _v31;
          }
          if (_v31 = this._pathData.pi, _v32 = this._pathData.f.v, _v37 = 0, _v36 = 1, _v34 = 0, _v35 = !0, _v40 = _v31.segments, _v32 < 0 && _v45.v.c) for (_v31.tLength < Math.abs(_v32) && (_v32 = -Math.abs(_v32) % _v31.tLength), _v37 = _v40.length - 1, _v36 = (_v39 = _v40[_v37].points).length - 1; _v32 < 0;) _v32 += _v39[_v36].partialLength, (_v36 -= 1) < 0 && (_v37 -= 1, _v36 = (_v39 = _v40[_v37].points).length - 1);
          _v38 = (_v39 = _v40[_v37].points)[_v36 - 1], _v41 = (_v33 = _v39[_v36]).partialLength;
        }
        _v30 = _v26.length, _v27 = 0, _v28 = 0;
        var _v48 = 1.2 * _v0.finalSize * .714,
          _v49 = !0;
        _v5 = _v21.length;
        var _v50 = -1,
          _v51 = _v32,
          _v52 = _v37,
          _v53 = _v36,
          _v54 = -1,
          _v55 = "",
          _v56 = this.defaultPropsArray;
        if (2 === _v0.j || 1 === _v0.j) {
          var _v57 = 0,
            _v58 = 0,
            _v59 = 2 === _v0.j ? -.5 : -1,
            _v60 = 0,
            _v61 = !0;
          for (_v29 = 0; _v29 < _v30; _v29 += 1) if (_v26[_v29].n) {
            for (_v57 && (_v57 += _v58); _v60 < _v29;) _v26[_v60].animatorJustifyOffset = _v57, _v60 += 1;
            _v57 = 0, _v61 = !0;
          } else {
            for (_v4 = 0; _v4 < _v5; _v4 += 1) (_v2 = _v21[_v4].a).t.propType && (_v61 && 2 === _v0.j && (_v58 += _v2.t.v * _v59), (_v7 = (_v3 = _v21[_v4].s).getMult(_v26[_v29].anIndexes[_v4], _v22.a[_v4].s.totalChars)).length ? _v57 += _v2.t.v * _v7[0] * _v59 : _v57 += _v2.t.v * _v7 * _v59);
            _v61 = !1;
          }
          for (_v57 && (_v57 += _v58); _v60 < _v29;) _v26[_v60].animatorJustifyOffset = _v57, _v60 += 1;
        }
        for (_v29 = 0; _v29 < _v30; _v29 += 1) {
          if (_v23.reset(), _v11 = 1, _v26[_v29].n) _v27 = 0, _v28 += _v0.yOffset, _v28 += +!!_v49, _v32 = _v51, _v49 = !1, this._hasMaskedPath && (_v37 = _v52, _v36 = _v53, _v38 = (_v39 = _v40[_v37].points)[_v36 - 1], _v41 = (_v33 = _v39[_v36]).partialLength, _v34 = 0), _v55 = "", _v18 = "", _v16 = "", _v19 = "", _v56 = this.defaultPropsArray;else {
            if (this._hasMaskedPath) {
              if (_v54 !== _v26[_v29].line) {
                switch (_v0.j) {
                  case 1:
                    _v32 += _v42 - _v0.lineWidths[_v26[_v29].line];
                    break;
                  case 2:
                    _v32 += (_v42 - _v0.lineWidths[_v26[_v29].line]) / 2;
                }
                _v54 = _v26[_v29].line;
              }
              _v50 !== _v26[_v29].ind && (_v26[_v50] && (_v32 += _v26[_v50].extra), _v32 += _v26[_v29].an / 2, _v50 = _v26[_v29].ind), _v32 += _v20[0] * _v26[_v29].an * .005;
              var _v62 = 0;
              for (_v4 = 0; _v4 < _v5; _v4 += 1) (_v2 = _v21[_v4].a).p.propType && ((_v7 = (_v3 = _v21[_v4].s).getMult(_v26[_v29].anIndexes[_v4], _v22.a[_v4].s.totalChars)).length ? _v62 += _v2.p.v[0] * _v7[0] : _v62 += _v2.p.v[0] * _v7), _v2.a.propType && ((_v7 = (_v3 = _v21[_v4].s).getMult(_v26[_v29].anIndexes[_v4], _v22.a[_v4].s.totalChars)).length ? _v62 += _v2.a.v[0] * _v7[0] : _v62 += _v2.a.v[0] * _v7);
              for (_v35 = !0, this._pathData.a.v && (_v32 = .5 * _v26[0].an + (_v42 - this._pathData.f.v - .5 * _v26[0].an - .5 * _v26[_v26.length - 1].an) * _v50 / (_v30 - 1) + this._pathData.f.v); _v35;) _v34 + _v41 >= _v32 + _v62 || !_v39 ? (_v43 = (_v32 + _v62 - _v34) / _v33.partialLength, _v9 = _v38.point[0] + (_v33.point[0] - _v38.point[0]) * _v43, _v10 = _v38.point[1] + (_v33.point[1] - _v38.point[1]) * _v43, _v23.translate(-_v20[0] * _v26[_v29].an * .005, -(.01 * (_v20[1] * _v48))), _v35 = !1) : _v39 && (_v34 += _v33.partialLength, (_v36 += 1) >= _v39.length && (_v36 = 0, _v40[_v37 += 1] ? _v39 = _v40[_v37].points : _v45.v.c ? (_v36 = 0, _v39 = _v40[_v37 = 0].points) : (_v34 -= _v33.partialLength, _v39 = null)), _v39 && (_v38 = _v33, _v41 = (_v33 = _v39[_v36]).partialLength));
              _v8 = _v26[_v29].an / 2 - _v26[_v29].add, _v23.translate(-_v8, 0, 0);
            } else _v8 = _v26[_v29].an / 2 - _v26[_v29].add, _v23.translate(-_v8, 0, 0), _v23.translate(-_v20[0] * _v26[_v29].an * .005, -_v20[1] * _v48 * .01, 0);
            for (_v4 = 0; _v4 < _v5; _v4 += 1) (_v2 = _v21[_v4].a).t.propType && (_v7 = (_v3 = _v21[_v4].s).getMult(_v26[_v29].anIndexes[_v4], _v22.a[_v4].s.totalChars), (0 !== _v27 || 0 !== _v0.j) && (this._hasMaskedPath ? _v7.length ? _v32 += _v2.t.v * _v7[0] : _v32 += _v2.t.v * _v7 : _v7.length ? _v27 += _v2.t.v * _v7[0] : _v27 += _v2.t.v * _v7));
            for (_v0.strokeWidthAnim && (_v13 = _v0.sw || 0), _v0.strokeColorAnim && (_v12 = _v0.sc ? [_v0.sc[0], _v0.sc[1], _v0.sc[2]] : [0, 0, 0]), _v0.fillColorAnim && _v0.fc && (_v14 = [_v0.fc[0], _v0.fc[1], _v0.fc[2]]), _v4 = 0; _v4 < _v5; _v4 += 1) (_v2 = _v21[_v4].a).a.propType && ((_v7 = (_v3 = _v21[_v4].s).getMult(_v26[_v29].anIndexes[_v4], _v22.a[_v4].s.totalChars)).length ? _v23.translate(-_v2.a.v[0] * _v7[0], -_v2.a.v[1] * _v7[1], _v2.a.v[2] * _v7[2]) : _v23.translate(-_v2.a.v[0] * _v7, -_v2.a.v[1] * _v7, _v2.a.v[2] * _v7));
            for (_v4 = 0; _v4 < _v5; _v4 += 1) (_v2 = _v21[_v4].a).s.propType && ((_v7 = (_v3 = _v21[_v4].s).getMult(_v26[_v29].anIndexes[_v4], _v22.a[_v4].s.totalChars)).length ? _v23.scale(1 + (_v2.s.v[0] - 1) * _v7[0], 1 + (_v2.s.v[1] - 1) * _v7[1], 1) : _v23.scale(1 + (_v2.s.v[0] - 1) * _v7, 1 + (_v2.s.v[1] - 1) * _v7, 1));
            for (_v4 = 0; _v4 < _v5; _v4 += 1) {
              if (_v2 = _v21[_v4].a, _v7 = (_v3 = _v21[_v4].s).getMult(_v26[_v29].anIndexes[_v4], _v22.a[_v4].s.totalChars), _v2.sk.propType && (_v7.length ? _v23.skewFromAxis(-_v2.sk.v * _v7[0], _v2.sa.v * _v7[1]) : _v23.skewFromAxis(-_v2.sk.v * _v7, _v2.sa.v * _v7)), _v2.r.propType && (_v7.length ? _v23.rotateZ(-_v2.r.v * _v7[2]) : _v23.rotateZ(-_v2.r.v * _v7)), _v2.ry.propType && (_v7.length ? _v23.rotateY(_v2.ry.v * _v7[1]) : _v23.rotateY(_v2.ry.v * _v7)), _v2.rx.propType && (_v7.length ? _v23.rotateX(_v2.rx.v * _v7[0]) : _v23.rotateX(_v2.rx.v * _v7)), _v2.o.propType && (_v7.length ? _v11 += (_v2.o.v * _v7[0] - _v11) * _v7[0] : _v11 += (_v2.o.v * _v7 - _v11) * _v7), _v0.strokeWidthAnim && _v2.sw.propType && (_v7.length ? _v13 += _v2.sw.v * _v7[0] : _v13 += _v2.sw.v * _v7), _v0.strokeColorAnim && _v2.sc.propType) for (_v15 = 0; _v15 < 3; _v15 += 1) _v7.length ? _v12[_v15] += (_v2.sc.v[_v15] - _v12[_v15]) * _v7[0] : _v12[_v15] += (_v2.sc.v[_v15] - _v12[_v15]) * _v7;
              if (_v0.fillColorAnim && _v0.fc) {
                if (_v2.fc.propType) for (_v15 = 0; _v15 < 3; _v15 += 1) _v7.length ? _v14[_v15] += (_v2.fc.v[_v15] - _v14[_v15]) * _v7[0] : _v14[_v15] += (_v2.fc.v[_v15] - _v14[_v15]) * _v7;
                _v2.fh.propType && (_v14 = _v7.length ? _v48(_v14, _v2.fh.v * _v7[0]) : _v48(_v14, _v2.fh.v * _v7)), _v2.fs.propType && (_v14 = _v7.length ? _v46(_v14, _v2.fs.v * _v7[0]) : _v46(_v14, _v2.fs.v * _v7)), _v2.fb.propType && (_v14 = _v7.length ? _v47(_v14, _v2.fb.v * _v7[0]) : _v47(_v14, _v2.fb.v * _v7));
              }
            }
            for (_v4 = 0; _v4 < _v5; _v4 += 1) (_v2 = _v21[_v4].a).p.propType && (_v7 = (_v3 = _v21[_v4].s).getMult(_v26[_v29].anIndexes[_v4], _v22.a[_v4].s.totalChars), this._hasMaskedPath ? _v7.length ? _v23.translate(0, _v2.p.v[1] * _v7[0], -_v2.p.v[2] * _v7[1]) : _v23.translate(0, _v2.p.v[1] * _v7, -_v2.p.v[2] * _v7) : _v7.length ? _v23.translate(_v2.p.v[0] * _v7[0], _v2.p.v[1] * _v7[1], -_v2.p.v[2] * _v7[2]) : _v23.translate(_v2.p.v[0] * _v7, _v2.p.v[1] * _v7, -_v2.p.v[2] * _v7));
            if (_v0.strokeWidthAnim && (_v16 = _v13 < 0 ? 0 : _v13), _v0.strokeColorAnim && (_v17 = "rgb(" + Math.round(255 * _v12[0]) + "," + Math.round(255 * _v12[1]) + "," + Math.round(255 * _v12[2]) + ")"), _v0.fillColorAnim && _v0.fc && (_v18 = "rgb(" + Math.round(255 * _v14[0]) + "," + Math.round(255 * _v14[1]) + "," + Math.round(255 * _v14[2]) + ")"), this._hasMaskedPath) {
              if (_v23.translate(0, -_v0.ls), _v23.translate(0, _v20[1] * _v48 * .01 + _v28, 0), this._pathData.p.v) {
                var _v63 = 180 * Math.atan(_v44 = (_v33.point[1] - _v38.point[1]) / (_v33.point[0] - _v38.point[0])) / Math.PI;
                _v33.point[0] < _v38.point[0] && (_v63 += 180), _v23.rotate(-_v63 * Math.PI / 180);
              }
              _v23.translate(_v9, _v10, 0), _v32 -= _v20[0] * _v26[_v29].an * .005, _v26[_v29 + 1] && _v50 !== _v26[_v29 + 1].ind && (_v32 += _v26[_v29].an / 2, _v32 += .001 * _v0.tr * _v0.finalSize);
            } else {
              switch (_v23.translate(_v27, _v28, 0), _v0.ps && _v23.translate(_v0.ps[0], _v0.ps[1] + _v0.ascent, 0), _v0.j) {
                case 1:
                  _v23.translate(_v26[_v29].animatorJustifyOffset + _v0.justifyOffset + (_v0.boxWidth - _v0.lineWidths[_v26[_v29].line]), 0, 0);
                  break;
                case 2:
                  _v23.translate(_v26[_v29].animatorJustifyOffset + _v0.justifyOffset + (_v0.boxWidth - _v0.lineWidths[_v26[_v29].line]) / 2, 0, 0);
              }
              _v23.translate(0, -_v0.ls), _v23.translate(_v8, 0, 0), _v23.translate(_v20[0] * _v26[_v29].an * .005, _v20[1] * _v48 * .01, 0), _v27 += _v26[_v29].l + .001 * _v0.tr * _v0.finalSize;
            }
            "html" === _v24 ? _v55 = _v23.toCSS() : "svg" === _v24 ? _v55 = _v23.to2dCSS() : _v56 = [_v23.props[0], _v23.props[1], _v23.props[2], _v23.props[3], _v23.props[4], _v23.props[5], _v23.props[6], _v23.props[7], _v23.props[8], _v23.props[9], _v23.props[10], _v23.props[11], _v23.props[12], _v23.props[13], _v23.props[14], _v23.props[15]], _v19 = _v11;
          }
          _v25 <= _v29 ? (_v6 = new _v216(_v19, _v16, _v17, _v18, _v55, _v56), this.renderedLetters.push(_v6), _v25 += 1, this.lettersChangedFlag = !0) : (_v6 = this.renderedLetters[_v29], this.lettersChangedFlag = _v6.update(_v19, _v16, _v17, _v18, _v55, _v56) || this.lettersChangedFlag);
        }
      }
    }, _v220.prototype.getValue = function () {
      this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties());
    }, _v220.prototype.mHelper = new _v103(), _v220.prototype.defaultPropsArray = [], _v9([_v96], _v220), _v221.prototype.initElement = function (_v0, _v1, _v2) {
      this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(_v0, _v1, _v2), this.textProperty = new _v217(this, _v0.t, this.dynamicProperties), this.textAnimator = new _v220(_v0.t, this.renderType, this), this.initTransform(_v0, _v1, _v2), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties);
    }, _v221.prototype.prepareFrame = function (_v0) {
      this._mdf = !1, this.prepareRenderableFrame(_v0), this.prepareProperties(_v0, this.isInRange);
    }, _v221.prototype.createPathShape = function (_v0, _v1) {
      var _v2,
        _v3,
        _v4 = _v1.length,
        _v5 = "";
      for (_v2 = 0; _v2 < _v4; _v2 += 1) "sh" === _v1[_v2].ty && (_v5 += _v213(_v3 = _v1[_v2].ks.k, _v3.i.length, !0, _v0));
      return _v5;
    }, _v221.prototype.updateDocumentData = function (_v0, _v1) {
      this.textProperty.updateDocumentData(_v0, _v1);
    }, _v221.prototype.canResizeFont = function (_v0) {
      this.textProperty.canResizeFont(_v0);
    }, _v221.prototype.setMinimumFontSize = function (_v0) {
      this.textProperty.setMinimumFontSize(_v0);
    }, _v221.prototype.applyTextPropertiesToMatrix = function (_v0, _v1, _v2, _v3, _v4) {
      switch (_v0.ps && _v1.translate(_v0.ps[0], _v0.ps[1] + _v0.ascent, 0), _v1.translate(0, -_v0.ls, 0), _v0.j) {
        case 1:
          _v1.translate(_v0.justifyOffset + (_v0.boxWidth - _v0.lineWidths[_v2]), 0, 0);
          break;
        case 2:
          _v1.translate(_v0.justifyOffset + (_v0.boxWidth - _v0.lineWidths[_v2]) / 2, 0, 0);
      }
      _v1.translate(_v3, _v4, 0);
    }, _v221.prototype.buildColor = function (_v0) {
      return "rgb(" + Math.round(255 * _v0[0]) + "," + Math.round(255 * _v0[1]) + "," + Math.round(255 * _v0[2]) + ")";
    }, _v221.prototype.emptyProp = new _v216(), _v221.prototype.destroy = function () {}, _v221.prototype.validateText = function () {
      (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1);
    };
    var _v222 = {
      shapes: []
    };
    function _v223(_v0, _v1, _v2) {
      this.textSpans = [], this.renderType = "svg", this.initElement(_v0, _v1, _v2);
    }
    function _v224(_v0, _v1, _v2) {
      this.initElement(_v0, _v1, _v2);
    }
    function _v225(_v0, _v1, _v2) {
      this.initFrame(), this.initBaseData(_v0, _v1, _v2), this.initFrame(), this.initTransform(_v0, _v1, _v2), this.initHierarchy();
    }
    function _v226() {}
    function _v227() {}
    function _v228(_v0, _v1, _v2) {
      this.layers = _v0.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? _v14(this.layers.length) : [], this.initElement(_v0, _v1, _v2), this.tm = _v0.tm ? _v95.getProp(this, _v0.tm, 0, _v1.frameRate, this) : {
        _placeholder: !0
      };
    }
    function _v229(_v0, _v1) {
      this.animationItem = _v0, this.layers = null, this.renderedFrame = -1, this.svgElement = _v60("svg");
      var _v2 = "";
      if (_v1 && _v1.title) {
        var _v3 = _v60("title"),
          _v4 = _v43();
        _v3.setAttribute("id", _v4), _v3.textContent = _v1.title, this.svgElement.appendChild(_v3), _v2 += _v4;
      }
      if (_v1 && _v1.description) {
        var _v5 = _v60("desc"),
          _v6 = _v43();
        _v5.setAttribute("id", _v6), _v5.textContent = _v1.description, this.svgElement.appendChild(_v5), _v2 += " " + _v6;
      }
      _v2 && this.svgElement.setAttribute("aria-labelledby", _v2);
      var _v7 = _v60("defs");
      this.svgElement.appendChild(_v7);
      var _v8 = _v60("g");
      this.svgElement.appendChild(_v8), this.layerElement = _v8, this.renderConfig = {
        preserveAspectRatio: _v1 && _v1.preserveAspectRatio || "xMidYMid meet",
        imagePreserveAspectRatio: _v1 && _v1.imagePreserveAspectRatio || "xMidYMid slice",
        contentVisibility: _v1 && _v1.contentVisibility || "visible",
        progressiveLoad: _v1 && _v1.progressiveLoad || !1,
        hideOnTransparent: !(_v1 && !1 === _v1.hideOnTransparent),
        viewBoxOnly: _v1 && _v1.viewBoxOnly || !1,
        viewBoxSize: _v1 && _v1.viewBoxSize || !1,
        className: _v1 && _v1.className || "",
        id: _v1 && _v1.id || "",
        focusable: _v1 && _v1.focusable,
        filterSize: {
          width: _v1 && _v1.filterSize && _v1.filterSize.width || "100%",
          height: _v1 && _v1.filterSize && _v1.filterSize.height || "100%",
          x: _v1 && _v1.filterSize && _v1.filterSize.x || "0%",
          y: _v1 && _v1.filterSize && _v1.filterSize.y || "0%"
        },
        width: _v1 && _v1.width,
        height: _v1 && _v1.height,
        runExpressions: !_v1 || void 0 === _v1.runExpressions || _v1.runExpressions
      }, this.globalData = {
        _mdf: !1,
        frameNum: -1,
        defs: _v7,
        renderConfig: this.renderConfig
      }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg";
    }
    function _v230() {
      this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0;
    }
    _v9([_v180, _v186, _v194, _v195, _v181, _v196, _v221], _v223), _v223.prototype.createContent = function () {
      this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = _v60("text"));
    }, _v223.prototype.buildTextContents = function (_v0) {
      for (var _v1 = 0, _v2 = _v0.length, _v3 = [], _v4 = ""; _v1 < _v2;) "\r" === _v0[_v1] || "\x03" === _v0[_v1] ? (_v3.push(_v4), _v4 = "") : _v4 += _v0[_v1], _v1 += 1;
      return _v3.push(_v4), _v3;
    }, _v223.prototype.buildShapeData = function (_v0, _v1) {
      if (_v0.shapes && _v0.shapes.length) {
        var _v2 = _v0.shapes[0];
        if (_v2.it) {
          var _v3 = _v2.it[_v2.it.length - 1];
          _v3.s && (_v3.s.k[0] = _v1, _v3.s.k[1] = _v1);
        }
      }
      return _v0;
    }, _v223.prototype.buildNewText = function () {
      this.addDynamicProperty(this);
      var _v0 = this.textProperty.currentData;
      this.renderedLetters = _v14(_v0 ? _v0.l.length : 0), _v0.fc ? this.layerElement.setAttribute("fill", this.buildColor(_v0.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), _v0.sc && (this.layerElement.setAttribute("stroke", this.buildColor(_v0.sc)), this.layerElement.setAttribute("stroke-width", _v0.sw)), this.layerElement.setAttribute("font-size", _v0.finalSize);
      var _v1 = this.globalData.fontManager.getFontByName(_v0.f);
      if (_v1.fClass) this.layerElement.setAttribute("class", _v1.fClass);else {
        this.layerElement.setAttribute("font-family", _v1.fFamily);
        var _v2 = _v0.fWeight,
          _v3 = _v0.fStyle;
        this.layerElement.setAttribute("font-style", _v3), this.layerElement.setAttribute("font-weight", _v2);
      }
      this.layerElement.setAttribute("aria-label", _v0.t);
      var _v4 = _v0.l || [],
        _v5 = !!this.globalData.fontManager.chars;
      _v16 = _v4.length;
      var _v6 = this.mHelper,
        _v7 = "",
        _v8 = this.data.singleShape,
        _v9 = 0,
        _v10 = 0,
        _v11 = !0,
        _v12 = .001 * _v0.tr * _v0.finalSize;
      if (!_v8 || _v5 || _v0.sz) {
        var _v13 = this.textSpans.length;
        for (_v15 = 0; _v15 < _v16; _v15 += 1) {
          if (this.textSpans[_v15] || (this.textSpans[_v15] = {
            span: null,
            childSpan: null,
            glyph: null
          }), !_v5 || !_v8 || 0 === _v15) {
            if (_v17 = _v13 > _v15 ? this.textSpans[_v15].span : _v60(_v5 ? "g" : "text"), _v13 <= _v15) {
              if (_v17.setAttribute("stroke-linecap", "butt"), _v17.setAttribute("stroke-linejoin", "round"), _v17.setAttribute("stroke-miterlimit", "4"), this.textSpans[_v15].span = _v17, _v5) {
                var _v14 = _v60("g");
                _v17.appendChild(_v14), this.textSpans[_v15].childSpan = _v14;
              }
              this.textSpans[_v15].span = _v17, this.layerElement.appendChild(_v17);
            }
            _v17.style.display = "inherit";
          }
          if (_v6.reset(), _v8 && (_v4[_v15].n && (_v9 = -_v12, _v10 += _v0.yOffset, _v10 += +!!_v11, _v11 = !1), this.applyTextPropertiesToMatrix(_v0, _v6, _v4[_v15].line, _v9, _v10), _v9 += _v4[_v15].l || 0, _v9 += _v12), _v5) {
            if (1 === (_v18 = this.globalData.fontManager.getCharData(_v0.finalText[_v15], _v1.fStyle, this.globalData.fontManager.getFontByName(_v0.f).fFamily)).t) _v19 = new _v228(_v18.data, this.globalData, this);else {
              var _v15,
                _v16,
                _v17,
                _v18,
                _v19,
                _v20 = _v222;
              _v18.data && _v18.data.shapes && (_v20 = this.buildShapeData(_v18.data, _v0.finalSize)), _v19 = new _v215(_v20, this.globalData, this);
            }
            if (this.textSpans[_v15].glyph) {
              var _v21 = this.textSpans[_v15].glyph;
              this.textSpans[_v15].childSpan.removeChild(_v21.layerElement), _v21.destroy();
            }
            this.textSpans[_v15].glyph = _v19, _v19._debug = !0, _v19.prepareFrame(0), _v19.renderFrame(), this.textSpans[_v15].childSpan.appendChild(_v19.layerElement), 1 === _v18.t && this.textSpans[_v15].childSpan.setAttribute("transform", "scale(" + _v0.finalSize / 100 + "," + _v0.finalSize / 100 + ")");
          } else _v8 && _v17.setAttribute("transform", "translate(" + _v6.props[12] + "," + _v6.props[13] + ")"), _v17.textContent = _v4[_v15].val, _v17.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
        }
        _v8 && _v17 && _v17.setAttribute("d", _v7);
      } else {
        var _v22 = this.textContainer,
          _v23 = "start";
        switch (_v0.j) {
          case 1:
            _v23 = "end";
            break;
          case 2:
            _v23 = "middle";
            break;
          default:
            _v23 = "start";
        }
        _v22.setAttribute("text-anchor", _v23), _v22.setAttribute("letter-spacing", _v12);
        var _v24 = this.buildTextContents(_v0.finalText);
        for (_v16 = _v24.length, _v10 = _v0.ps ? _v0.ps[1] + _v0.ascent : 0, _v15 = 0; _v15 < _v16; _v15 += 1) (_v17 = this.textSpans[_v15].span || _v60("tspan")).textContent = _v24[_v15], _v17.setAttribute("x", 0), _v17.setAttribute("y", _v10), _v17.style.display = "inherit", _v22.appendChild(_v17), this.textSpans[_v15] || (this.textSpans[_v15] = {
          span: null,
          glyph: null
        }), this.textSpans[_v15].span = _v17, _v10 += _v0.finalLineHeight;
        this.layerElement.appendChild(_v22);
      }
      for (; _v15 < this.textSpans.length;) this.textSpans[_v15].span.style.display = "none", _v15 += 1;
      this._sizeChanged = !0;
    }, _v223.prototype.sourceRectAtTime = function () {
      if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
        this._sizeChanged = !1;
        var _v0 = this.layerElement.getBBox();
        this.bbox = {
          top: _v0.y,
          left: _v0.x,
          width: _v0.width,
          height: _v0.height
        };
      }
      return this.bbox;
    }, _v223.prototype.getValue = function () {
      var _v0,
        _v1,
        _v2 = this.textSpans.length;
      for (this.renderedFrame = this.comp.renderedFrame, _v0 = 0; _v0 < _v2; _v0 += 1) (_v1 = this.textSpans[_v0].glyph) && (_v1.prepareFrame(this.comp.renderedFrame - this.data.st), _v1._mdf && (this._mdf = !0));
    }, _v223.prototype.renderInnerContent = function () {
      if (this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
        this._sizeChanged = !0;
        var _v0,
          _v1,
          _v2,
          _v3,
          _v4,
          _v5 = this.textAnimator.renderedLetters,
          _v6 = this.textProperty.currentData.l;
        for (_v1 = _v6.length, _v0 = 0; _v0 < _v1; _v0 += 1) !_v6[_v0].n && (_v2 = _v5[_v0], _v3 = this.textSpans[_v0].span, (_v4 = this.textSpans[_v0].glyph) && _v4.renderFrame(), _v2._mdf.m && _v3.setAttribute("transform", _v2.m), _v2._mdf.o && _v3.setAttribute("opacity", _v2.o), _v2._mdf.sw && _v3.setAttribute("stroke-width", _v2.sw), _v2._mdf.sc && _v3.setAttribute("stroke", _v2.sc), _v2._mdf.fc && _v3.setAttribute("fill", _v2.fc));
      }
    }, _v9([_v197], _v224), _v224.prototype.createContent = function () {
      var _v0 = _v60("rect");
      _v0.setAttribute("width", this.data.sw), _v0.setAttribute("height", this.data.sh), _v0.setAttribute("fill", this.data.sc), this.layerElement.appendChild(_v0);
    }, _v225.prototype.prepareFrame = function (_v0) {
      this.prepareProperties(_v0, !0);
    }, _v225.prototype.renderFrame = function () {}, _v225.prototype.getBaseElement = function () {
      return null;
    }, _v225.prototype.destroy = function () {}, _v225.prototype.sourceRectAtTime = function () {}, _v225.prototype.hide = function () {}, _v9([_v180, _v186, _v195, _v181], _v225), _v9([_v184], _v226), _v226.prototype.createNull = function (_v0) {
      return new _v225(_v0, this.globalData, this);
    }, _v226.prototype.createShape = function (_v0) {
      return new _v215(_v0, this.globalData, this);
    }, _v226.prototype.createText = function (_v0) {
      return new _v223(_v0, this.globalData, this);
    }, _v226.prototype.createImage = function (_v0) {
      return new _v197(_v0, this.globalData, this);
    }, _v226.prototype.createSolid = function (_v0) {
      return new _v224(_v0, this.globalData, this);
    }, _v226.prototype.configAnimation = function (_v0) {
      this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + _v0.w + " " + _v0.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", _v0.w), this.svgElement.setAttribute("height", _v0.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
      var _v1 = this.globalData.defs;
      this.setupGlobalData(_v0, _v1), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = _v0;
      var _v2 = _v60("clipPath"),
        _v3 = _v60("rect");
      _v3.setAttribute("width", _v0.w), _v3.setAttribute("height", _v0.h), _v3.setAttribute("x", 0), _v3.setAttribute("y", 0);
      var _v4 = _v43();
      _v2.setAttribute("id", _v4), _v2.appendChild(_v3), this.layerElement.setAttribute("clip-path", "url(" + _v7() + "#" + _v4 + ")"), _v1.appendChild(_v2), this.layers = _v0.layers, this.elements = _v14(_v0.layers.length);
    }, _v226.prototype.destroy = function () {
      this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
      var _v0,
        _v1 = this.layers ? this.layers.length : 0;
      for (_v0 = 0; _v0 < _v1; _v0 += 1) this.elements[_v0] && this.elements[_v0].destroy && this.elements[_v0].destroy();
      this.elements.length = 0, this.destroyed = !0, this.animationItem = null;
    }, _v226.prototype.updateContainerSize = function () {}, _v226.prototype.findIndexByInd = function (_v0) {
      var _v1 = 0,
        _v2 = this.layers.length;
      for (_v1 = 0; _v1 < _v2; _v1 += 1) if (this.layers[_v1].ind === _v0) return _v1;
      return -1;
    }, _v226.prototype.buildItem = function (_v0) {
      var _v1 = this.elements;
      if (!_v1[_v0] && 99 !== this.layers[_v0].ty) {
        _v1[_v0] = !0;
        var _v2 = this.createItem(this.layers[_v0]);
        if (_v1[_v0] = _v2, _v53() && (0 === this.layers[_v0].ty && this.globalData.projectInterface.registerComposition(_v2), _v2.initExpressions()), this.appendElementInPos(_v2, _v0), this.layers[_v0].tt) {
          var _v3 = "tp" in this.layers[_v0] ? this.findIndexByInd(this.layers[_v0].tp) : _v0 - 1;
          if (-1 === _v3) return;
          if (this.elements[_v3] && !0 !== this.elements[_v3]) {
            var _v4 = _v1[_v3].getMatte(this.layers[_v0].tt);
            _v2.setMatte(_v4);
          } else this.buildItem(_v3), this.addPendingElement(_v2);
        }
      }
    }, _v226.prototype.checkPendingElements = function () {
      for (; this.pendingElements.length;) {
        var _v0 = this.pendingElements.pop();
        if (_v0.checkParenting(), _v0.data.tt) for (var _v1 = 0, _v2 = this.elements.length; _v1 < _v2;) {
          if (this.elements[_v1] === _v0) {
            var _v3 = "tp" in _v0.data ? this.findIndexByInd(_v0.data.tp) : _v1 - 1,
              _v4 = this.elements[_v3].getMatte(this.layers[_v1].tt);
            _v0.setMatte(_v4);
            break;
          }
          _v1 += 1;
        }
      }
    }, _v226.prototype.renderFrame = function (_v0) {
      if (this.renderedFrame !== _v0 && !this.destroyed) {
        null === _v0 ? _v0 = this.renderedFrame : this.renderedFrame = _v0, this.globalData.frameNum = _v0, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = _v0, this.globalData._mdf = !1;
        var _v1,
          _v2 = this.layers.length;
        for (this.completeLayers || this.checkLayers(_v0), _v1 = _v2 - 1; _v1 >= 0; _v1 -= 1) (this.completeLayers || this.elements[_v1]) && this.elements[_v1].prepareFrame(_v0 - this.layers[_v1].st);
        if (this.globalData._mdf) for (_v1 = 0; _v1 < _v2; _v1 += 1) (this.completeLayers || this.elements[_v1]) && this.elements[_v1].renderFrame();
      }
    }, _v226.prototype.appendElementInPos = function (_v0, _v1) {
      var _v2,
        _v3 = _v0.getBaseElement();
      if (_v3) {
        for (var _v4 = 0; _v4 < _v1;) this.elements[_v4] && !0 !== this.elements[_v4] && this.elements[_v4].getBaseElement() && (_v2 = this.elements[_v4].getBaseElement()), _v4 += 1;
        _v2 ? this.layerElement.insertBefore(_v3, _v2) : this.layerElement.appendChild(_v3);
      }
    }, _v226.prototype.hide = function () {
      this.layerElement.style.display = "none";
    }, _v226.prototype.show = function () {
      this.layerElement.style.display = "block";
    }, _v9([_v180, _v186, _v195, _v181, _v196], _v227), _v227.prototype.initElement = function (_v0, _v1, _v2) {
      this.initFrame(), this.initBaseData(_v0, _v1, _v2), this.initTransform(_v0, _v1, _v2), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), (this.data.xt || !_v1.progressiveLoad) && this.buildAllItems(), this.hide();
    }, _v227.prototype.prepareFrame = function (_v0) {
      if (this._mdf = !1, this.prepareRenderableFrame(_v0), this.prepareProperties(_v0, this.isInRange), this.isInRange || this.data.xt) {
        if (this.tm._placeholder) this.renderedFrame = _v0 / this.data.sr;else {
          var _v1,
            _v2 = this.tm.v;
          _v2 === this.data.op && (_v2 = this.data.op - 1), this.renderedFrame = _v2;
        }
        var _v3 = this.elements.length;
        for (this.completeLayers || this.checkLayers(this.renderedFrame), _v1 = _v3 - 1; _v1 >= 0; _v1 -= 1) (this.completeLayers || this.elements[_v1]) && (this.elements[_v1].prepareFrame(this.renderedFrame - this.layers[_v1].st), this.elements[_v1]._mdf && (this._mdf = !0));
      }
    }, _v227.prototype.renderInnerContent = function () {
      var _v0,
        _v1 = this.layers.length;
      for (_v0 = 0; _v0 < _v1; _v0 += 1) (this.completeLayers || this.elements[_v0]) && this.elements[_v0].renderFrame();
    }, _v227.prototype.setElements = function (_v0) {
      this.elements = _v0;
    }, _v227.prototype.getElements = function () {
      return this.elements;
    }, _v227.prototype.destroyElements = function () {
      var _v0,
        _v1 = this.layers.length;
      for (_v0 = 0; _v0 < _v1; _v0 += 1) this.elements[_v0] && this.elements[_v0].destroy();
    }, _v227.prototype.destroy = function () {
      this.destroyElements(), this.destroyBaseElement();
    }, _v9([_v226, _v227, _v194], _v228), _v228.prototype.createComp = function (_v0) {
      return new _v228(_v0, this.globalData, this);
    }, _v9([_v226], _v229), _v229.prototype.createComp = function (_v0) {
      return new _v228(_v0, this.globalData, this);
    }, _v230.prototype = {
      addTransformSequence: function (_v0) {
        var _v1,
          _v2 = _v0.length,
          _v3 = "_";
        for (_v1 = 0; _v1 < _v2; _v1 += 1) _v3 += _v0[_v1].transform.key + "_";
        var _v4 = this.sequences[_v3];
        return _v4 || (_v4 = {
          transforms: [].concat(_v0),
          finalTransform: new _v103(),
          _mdf: !1
        }, this.sequences[_v3] = _v4, this.sequenceList.push(_v4)), _v4;
      },
      processSequence: function (_v0, _v1) {
        for (var _v2 = 0, _v3 = _v0.transforms.length, _v4 = _v1; _v2 < _v3 && !_v1;) {
          if (_v0.transforms[_v2].transform.mProps._mdf) {
            _v4 = !0;
            break;
          }
          _v2 += 1;
        }
        if (_v4) for (_v0.finalTransform.reset(), _v2 = _v3 - 1; _v2 >= 0; _v2 -= 1) _v0.finalTransform.multiply(_v0.transforms[_v2].transform.mProps.v);
        _v0._mdf = _v4;
      },
      processSequences: function (_v0) {
        var _v1,
          _v2 = this.sequenceList.length;
        for (_v1 = 0; _v1 < _v2; _v1 += 1) this.processSequence(this.sequenceList[_v1], _v0);
      },
      getNewKey: function () {
        return this.transform_key_count += 1, "_" + this.transform_key_count;
      }
    };
    var _v231 = function () {
      var _v0 = "__lottie_element_luma_buffer",
        _v1 = null,
        _v2 = null,
        _v3 = null;
      function _v4() {
        var _v0 = _v60("svg"),
          _v1 = _v60("filter"),
          _v2 = _v60("feColorMatrix");
        return _v1.setAttribute("id", _v0), _v2.setAttribute("type", "matrix"), _v2.setAttribute("color-interpolation-filters", "sRGB"), _v2.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"), _v1.appendChild(_v2), _v0.appendChild(_v1), _v0.setAttribute("id", _v0 + "_svg"), _v189.svgLumaHidden && (_v0.style.display = "none"), _v0;
      }
      function _v5() {
        _v1 || (_v3 = _v4(), document.body.appendChild(_v3), (_v2 = (_v1 = _v8("canvas")).getContext("2d")).filter = "url(#" + _v0 + ")", _v2.fillStyle = "rgba(0,0,0,0)", _v2.fillRect(0, 0, 1, 1));
      }
      function _v6(_v0) {
        return _v1 || _v5(), _v1.width = _v0.width, _v1.height = _v0.height, _v2.filter = "url(#" + _v0 + ")", _v1;
      }
      return {
        load: _v5,
        get: _v6
      };
    };
    function _v232(_v0, _v1) {
      if (_v189.offscreenCanvas) return new OffscreenCanvas(_v0, _v1);
      var _v2 = _v8("canvas");
      return _v2.width = _v0, _v2.height = _v1, _v2;
    }
    var _v233 = {
        loadLumaCanvas: _v231.load,
        getLumaCanvas: _v231.get,
        createCanvas: _v232
      },
      _v234 = {};
    function _v235(_v0) {
      var _v1,
        _v2,
        _v3 = _v0.data.ef ? _v0.data.ef.length : 0;
      for (this.filters = [], _v1 = 0; _v1 < _v3; _v1 += 1) {
        _v2 = null;
        var _v4 = _v0.data.ef[_v1].ty;
        _v234[_v4] && (_v2 = new _v234[_v4].effect(_v0.effectsManager.effectElements[_v1], _v0)), _v2 && this.filters.push(_v2);
      }
      this.filters.length && _v0.addRenderableComponent(this);
    }
    function _v236(_v0, _v1) {
      _v234[_v0] = {
        effect: _v1
      };
    }
    function _v237(_v0, _v1) {
      this.data = _v0, this.element = _v1, this.masksProperties = this.data.masksProperties || [], this.viewData = _v14(this.masksProperties.length);
      var _v2,
        _v3 = this.masksProperties.length,
        _v4 = !1;
      for (_v2 = 0; _v2 < _v3; _v2 += 1) "n" !== this.masksProperties[_v2].mode && (_v4 = !0), this.viewData[_v2] = _v102.getShapeProp(this.element, this.masksProperties[_v2], 3);
      this.hasMasks = _v4, _v4 && this.element.addRenderableComponent(this);
    }
    function _v238() {}
    _v235.prototype.renderFrame = function (_v0) {
      var _v1,
        _v2 = this.filters.length;
      for (_v1 = 0; _v1 < _v2; _v1 += 1) this.filters[_v1].renderFrame(_v0);
    }, _v235.prototype.getEffects = function (_v0) {
      var _v1,
        _v2 = this.filters.length,
        _v3 = [];
      for (_v1 = 0; _v1 < _v2; _v1 += 1) this.filters[_v1].type === _v0 && _v3.push(this.filters[_v1]);
      return _v3;
    }, _v237.prototype.renderFrame = function () {
      if (this.hasMasks) {
        var _v0 = this.element.finalTransform.mat,
          _v1 = this.element.canvasContext,
          _v2 = this.masksProperties.length;
        for (_v1.beginPath(), _v3 = 0; _v3 < _v2; _v3 += 1) if ("n" !== this.masksProperties[_v3].mode) {
          this.masksProperties[_v3].inv && (_v1.moveTo(0, 0), _v1.lineTo(this.element.globalData.compSize.w, 0), _v1.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), _v1.lineTo(0, this.element.globalData.compSize.h), _v1.lineTo(0, 0)), _v6 = this.viewData[_v3].v, _v4 = _v0.applyToPointArray(_v6.v[0][0], _v6.v[0][1], 0), _v1.moveTo(_v4[0], _v4[1]);
          var _v3,
            _v4,
            _v5,
            _v6,
            _v7,
            _v8 = _v6._length;
          for (_v7 = 1; _v7 < _v8; _v7 += 1) _v5 = _v0.applyToTriplePoints(_v6.o[_v7 - 1], _v6.i[_v7], _v6.v[_v7]), _v1.bezierCurveTo(_v5[0], _v5[1], _v5[2], _v5[3], _v5[4], _v5[5]);
          _v5 = _v0.applyToTriplePoints(_v6.o[_v7 - 1], _v6.i[0], _v6.v[0]), _v1.bezierCurveTo(_v5[0], _v5[1], _v5[2], _v5[3], _v5[4], _v5[5]);
        }
        this.element.globalData.renderer.save(!0), _v1.clip();
      }
    }, _v237.prototype.getMaskProperty = _v187.prototype.getMaskProperty, _v237.prototype.destroy = function () {
      this.element = null;
    };
    var _v239 = {
      1: "source-in",
      2: "source-out",
      3: "source-in",
      4: "source-out"
    };
    function _v240(_v0, _v1, _v2, _v3) {
      this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
      var _v4,
        _v5,
        _v6 = 4;
      "rc" === _v1.ty ? _v6 = 5 : "el" === _v1.ty ? _v6 = 6 : "sr" === _v1.ty && (_v6 = 7), this.sh = _v102.getShapeProp(_v0, _v1, _v6, _v0);
      var _v7 = _v2.length;
      for (_v4 = 0; _v4 < _v7; _v4 += 1) _v2[_v4].closed || (_v5 = {
        transforms: _v3.addTransformSequence(_v2[_v4].transforms),
        trNodes: []
      }, this.styledShapes.push(_v5), _v2[_v4].elements.push(_v5));
    }
    function _v241(_v0, _v1, _v2) {
      this.shapes = [], this.shapesData = _v0.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new _v230(), this.initElement(_v0, _v1, _v2);
    }
    function _v242(_v0, _v1, _v2) {
      this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
        fill: "rgba(0,0,0,0)",
        stroke: "rgba(0,0,0,0)",
        sWidth: 0,
        fValue: ""
      }, this.initElement(_v0, _v1, _v2);
    }
    function _v243(_v0, _v1, _v2) {
      this.assetData = _v1.getAssetData(_v0.refId), this.img = _v1.imageLoader.getAsset(this.assetData), this.initElement(_v0, _v1, _v2);
    }
    function _v244(_v0, _v1, _v2) {
      this.initElement(_v0, _v1, _v2);
    }
    function _v245() {}
    function _v246() {
      this.opacity = -1, this.transform = _v13("float32", 16), this.fillStyle = "", this.strokeStyle = "", this.lineWidth = "", this.lineCap = "", this.lineJoin = "", this.miterLimit = "", this.id = Math.random();
    }
    function _v247() {
      this.stack = [], this.cArrPos = 0, this.cTr = new _v103();
      var _v0,
        _v1 = 15;
      for (_v0 = 0; _v0 < _v1; _v0 += 1) {
        var _v2 = new _v246();
        this.stack[_v0] = _v2;
      }
      this._length = _v1, this.nativeContext = null, this.transformMat = new _v103(), this.currentOpacity = 1, this.currentFillStyle = "", this.appliedFillStyle = "", this.currentStrokeStyle = "", this.appliedStrokeStyle = "", this.currentLineWidth = "", this.appliedLineWidth = "", this.currentLineCap = "", this.appliedLineCap = "", this.currentLineJoin = "", this.appliedLineJoin = "", this.appliedMiterLimit = "", this.currentMiterLimit = "";
    }
    function _v248(_v0, _v1, _v2) {
      this.completeLayers = !1, this.layers = _v0.layers, this.pendingElements = [], this.elements = _v14(this.layers.length), this.initElement(_v0, _v1, _v2), this.tm = _v0.tm ? _v95.getProp(this, _v0.tm, 0, _v1.frameRate, this) : {
        _placeholder: !0
      };
    }
    function _v249(_v0, _v1) {
      this.animationItem = _v0, this.renderConfig = {
        clearCanvas: !_v1 || void 0 === _v1.clearCanvas || _v1.clearCanvas,
        context: _v1 && _v1.context || null,
        progressiveLoad: _v1 && _v1.progressiveLoad || !1,
        preserveAspectRatio: _v1 && _v1.preserveAspectRatio || "xMidYMid meet",
        imagePreserveAspectRatio: _v1 && _v1.imagePreserveAspectRatio || "xMidYMid slice",
        contentVisibility: _v1 && _v1.contentVisibility || "visible",
        className: _v1 && _v1.className || "",
        id: _v1 && _v1.id || "",
        runExpressions: !_v1 || void 0 === _v1.runExpressions || _v1.runExpressions
      }, this.renderConfig.dpr = _v1 && _v1.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = _v1 && _v1.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
        frameNum: -1,
        _mdf: !1,
        renderConfig: this.renderConfig,
        currentGlobalAlpha: -1
      }, this.contextData = new _v247(), this.elements = [], this.pendingElements = [], this.transformMat = new _v103(), this.completeLayers = !1, this.rendererType = "canvas", this.renderConfig.clearCanvas && (this.ctxTransform = this.contextData.transform.bind(this.contextData), this.ctxOpacity = this.contextData.opacity.bind(this.contextData), this.ctxFillStyle = this.contextData.fillStyle.bind(this.contextData), this.ctxStrokeStyle = this.contextData.strokeStyle.bind(this.contextData), this.ctxLineWidth = this.contextData.lineWidth.bind(this.contextData), this.ctxLineCap = this.contextData.lineCap.bind(this.contextData), this.ctxLineJoin = this.contextData.lineJoin.bind(this.contextData), this.ctxMiterLimit = this.contextData.miterLimit.bind(this.contextData), this.ctxFill = this.contextData.fill.bind(this.contextData), this.ctxFillRect = this.contextData.fillRect.bind(this.contextData), this.ctxStroke = this.contextData.stroke.bind(this.contextData), this.save = this.contextData.save.bind(this.contextData));
    }
    function _v250() {}
    function _v251(_v0, _v1, _v2) {
      this.initElement(_v0, _v1, _v2);
    }
    function _v252(_v0, _v1, _v2) {
      this.shapes = [], this.shapesData = _v0.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = _v60("g"), this.initElement(_v0, _v1, _v2), this.prevViewData = [], this.currentBBox = {
        x: 0,
        y: 0,
        h: 0,
        w: 0
      };
    }
    function _v253(_v0, _v1, _v2) {
      this.textSpans = [], this.textPaths = [], this.currentBBox = {
        x: 0,
        y: 0,
        h: 0,
        w: 0
      }, this.renderType = "svg", this.isMasked = !1, this.initElement(_v0, _v1, _v2);
    }
    function _v254(_v0, _v1, _v2) {
      this.initFrame(), this.initBaseData(_v0, _v1, _v2), this.initHierarchy();
      var _v3 = _v95.getProp;
      if (this.pe = _v3(this, _v0.pe, 0, 0, this), _v0.ks.p.s ? (this.px = _v3(this, _v0.ks.p.x, 1, 0, this), this.py = _v3(this, _v0.ks.p.y, 1, 0, this), this.pz = _v3(this, _v0.ks.p.z, 1, 0, this)) : this.p = _v3(this, _v0.ks.p, 1, 0, this), _v0.ks.a && (this.a = _v3(this, _v0.ks.a, 1, 0, this)), _v0.ks.or.k.length && _v0.ks.or.k[0].to) {
        var _v4,
          _v5 = _v0.ks.or.k.length;
        for (_v4 = 0; _v4 < _v5; _v4 += 1) _v0.ks.or.k[_v4].to = null, _v0.ks.or.k[_v4].ti = null;
      }
      this.or = _v3(this, _v0.ks.or, 1, _v30, this), this.or.sh = !0, this.rx = _v3(this, _v0.ks.rx, 0, _v30, this), this.ry = _v3(this, _v0.ks.ry, 0, _v30, this), this.rz = _v3(this, _v0.ks.rz, 0, _v30, this), this.mat = new _v103(), this._prevMat = new _v103(), this._isFirstFrame = !0, this.finalTransform = {
        mProp: this
      };
    }
    function _v255(_v0, _v1, _v2) {
      this.assetData = _v1.getAssetData(_v0.refId), this.initElement(_v0, _v1, _v2);
    }
    function _v256(_v0, _v1) {
      this.animationItem = _v0, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
        className: _v1 && _v1.className || "",
        imagePreserveAspectRatio: _v1 && _v1.imagePreserveAspectRatio || "xMidYMid slice",
        hideOnTransparent: !(_v1 && !1 === _v1.hideOnTransparent),
        filterSize: {
          width: _v1 && _v1.filterSize && _v1.filterSize.width || "400%",
          height: _v1 && _v1.filterSize && _v1.filterSize.height || "400%",
          x: _v1 && _v1.filterSize && _v1.filterSize.x || "-100%",
          y: _v1 && _v1.filterSize && _v1.filterSize.y || "-100%"
        }
      }, this.globalData = {
        _mdf: !1,
        frameNum: -1,
        renderConfig: this.renderConfig
      }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html";
    }
    function _v257(_v0, _v1, _v2) {
      this.layers = _v0.layers, this.supports3d = !_v0.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? _v14(this.layers.length) : [], this.initElement(_v0, _v1, _v2), this.tm = _v0.tm ? _v95.getProp(this, _v0.tm, 0, _v1.frameRate, this) : {
        _placeholder: !0
      };
    }
    function _v258(_v0, _v1) {
      this.animationItem = _v0, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
        className: _v1 && _v1.className || "",
        imagePreserveAspectRatio: _v1 && _v1.imagePreserveAspectRatio || "xMidYMid slice",
        hideOnTransparent: !(_v1 && !1 === _v1.hideOnTransparent),
        filterSize: {
          width: _v1 && _v1.filterSize && _v1.filterSize.width || "400%",
          height: _v1 && _v1.filterSize && _v1.filterSize.height || "400%",
          x: _v1 && _v1.filterSize && _v1.filterSize.x || "-100%",
          y: _v1 && _v1.filterSize && _v1.filterSize.y || "-100%"
        },
        runExpressions: !_v1 || void 0 === _v1.runExpressions || _v1.runExpressions
      }, this.globalData = {
        _mdf: !1,
        frameNum: -1,
        renderConfig: this.renderConfig
      }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html";
    }
    _v238.prototype = {
      createElements: function () {},
      initRendererElement: function () {},
      createContainerElements: function () {
        if (this.data.tt >= 1) {
          this.buffers = [];
          var _v0 = this.globalData.canvasContext,
            _v1 = _v233.createCanvas(_v0.canvas.width, _v0.canvas.height);
          this.buffers.push(_v1);
          var _v2 = _v233.createCanvas(_v0.canvas.width, _v0.canvas.height);
          this.buffers.push(_v2), this.data.tt >= 3 && !document._isProxy && _v233.loadLumaCanvas();
        }
        this.canvasContext = this.globalData.canvasContext, this.transformCanvas = this.globalData.transformCanvas, this.renderableEffectsManager = new _v235(this), this.searchEffectTransforms();
      },
      createContent: function () {},
      setBlendMode: function () {
        var _v0 = this.globalData;
        if (_v0.blendMode !== this.data.bm) {
          _v0.blendMode = this.data.bm;
          var _v1 = _v169(this.data.bm);
          _v0.canvasContext.globalCompositeOperation = _v1;
        }
      },
      createRenderableComponents: function () {
        this.maskManager = new _v237(this.data, this), this.transformEffects = this.renderableEffectsManager.getEffects(_v185.TRANSFORM_EFFECT);
      },
      hideElement: function () {
        this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0);
      },
      showElement: function () {
        this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0);
      },
      clearCanvas: function (_v0) {
        _v0.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy);
      },
      prepareLayer: function () {
        if (this.data.tt >= 1) {
          var _v0 = this.buffers[0].getContext("2d");
          this.clearCanvas(_v0), _v0.drawImage(this.canvasContext.canvas, 0, 0), this.currentTransform = this.canvasContext.getTransform(), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform);
        }
      },
      exitLayer: function () {
        if (this.data.tt >= 1) {
          var _v0 = this.buffers[1],
            _v1 = _v0.getContext("2d");
          if (this.clearCanvas(_v1), _v1.drawImage(this.canvasContext.canvas, 0, 0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform), this.comp.getElementById("tp" in this.data ? this.data.tp : this.data.ind - 1).renderFrame(!0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.data.tt >= 3 && !document._isProxy) {
            var _v2 = _v233.getLumaCanvas(this.canvasContext.canvas);
            _v2.getContext("2d").drawImage(this.canvasContext.canvas, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.drawImage(_v2, 0, 0);
          }
          this.canvasContext.globalCompositeOperation = _v239[this.data.tt], this.canvasContext.drawImage(_v0, 0, 0), this.canvasContext.globalCompositeOperation = "destination-over", this.canvasContext.drawImage(this.buffers[0], 0, 0), this.canvasContext.setTransform(this.currentTransform), this.canvasContext.globalCompositeOperation = "source-over";
        }
      },
      renderFrame: function (_v0) {
        if (!this.hidden && !this.data.hd && (1 !== this.data.td || _v0)) {
          this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.setBlendMode();
          var _v1 = 0 === this.data.ty;
          this.prepareLayer(), this.globalData.renderer.save(_v1), this.globalData.renderer.ctxTransform(this.finalTransform.localMat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.localOpacity), this.renderInnerContent(), this.globalData.renderer.restore(_v1), this.exitLayer(), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1);
        }
      },
      destroy: function () {
        this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy();
      },
      mHelper: new _v103()
    }, _v238.prototype.hide = _v238.prototype.hideElement, _v238.prototype.show = _v238.prototype.showElement, _v240.prototype.setAsAnimated = _v202.prototype.setAsAnimated, _v9([_v180, _v186, _v238, _v199, _v195, _v181, _v168], _v241), _v241.prototype.initElement = _v196.prototype.initElement, _v241.prototype.transformHelper = {
      opacity: 1,
      _opMdf: !1
    }, _v241.prototype.dashResetter = [], _v241.prototype.createContent = function () {
      this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []);
    }, _v241.prototype.createStyleElement = function (_v0, _v1) {
      var _v2 = {
          data: _v0,
          type: _v0.ty,
          preTransforms: this.transformsManager.addTransformSequence(_v1),
          transforms: [],
          elements: [],
          closed: !0 === _v0.hd
        },
        _v3 = {};
      return "fl" === _v0.ty || "st" === _v0.ty ? (_v3.c = _v95.getProp(this, _v0.c, 1, 255, this), _v3.c.k || (_v2.co = "rgb(" + _v24(_v3.c.v[0]) + "," + _v24(_v3.c.v[1]) + "," + _v24(_v3.c.v[2]) + ")")) : ("gf" === _v0.ty || "gs" === _v0.ty) && (_v3.s = _v95.getProp(this, _v0.s, 1, null, this), _v3.e = _v95.getProp(this, _v0.e, 1, null, this), _v3.h = _v95.getProp(this, _v0.h || {
        k: 0
      }, 0, .01, this), _v3.a = _v95.getProp(this, _v0.a || {
        k: 0
      }, 0, _v30, this), _v3.g = new _v208(this, _v0.g, this)), _v3.o = _v95.getProp(this, _v0.o, 0, .01, this), "st" === _v0.ty || "gs" === _v0.ty ? (_v2.lc = _v200[_v0.lc || 2], _v2.lj = _v201[_v0.lj || 2], 1 == _v0.lj && (_v2.ml = _v0.ml), _v3.w = _v95.getProp(this, _v0.w, 0, null, this), _v3.w.k || (_v2.wi = _v3.w.v), _v0.d && (_v3.d = new _v204(this, _v0.d, "canvas", this), _v3.d.k || (_v2.da = _v3.d.dashArray, _v2.do = _v3.d.dashoffset[0]))) : _v2.r = 2 === _v0.r ? "evenodd" : "nonzero", this.stylesList.push(_v2), _v3.style = _v2, _v3;
    }, _v241.prototype.createGroupElement = function () {
      return {
        it: [],
        prevViewData: []
      };
    }, _v241.prototype.createTransformElement = function (_v0) {
      return {
        transform: {
          opacity: 1,
          _opMdf: !1,
          key: this.transformsManager.getNewKey(),
          op: _v95.getProp(this, _v0.o, 0, .01, this),
          mProps: _v129.getTransformProperty(this, _v0, this)
        }
      };
    }, _v241.prototype.createShapeElement = function (_v0) {
      var _v1 = new _v240(this, _v0, this.stylesList, this.transformsManager);
      return this.shapes.push(_v1), this.addShapeToModifiers(_v1), _v1;
    }, _v241.prototype.reloadShapes = function () {
      this._isFirstFrame = !0;
      var _v0,
        _v1 = this.itemsData.length;
      for (_v0 = 0; _v0 < _v1; _v0 += 1) this.prevViewData[_v0] = this.itemsData[_v0];
      for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), _v1 = this.dynamicProperties.length, _v0 = 0; _v0 < _v1; _v0 += 1) this.dynamicProperties[_v0].getValue();
      this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame);
    }, _v241.prototype.addTransformToStyleList = function (_v0) {
      var _v1,
        _v2 = this.stylesList.length;
      for (_v1 = 0; _v1 < _v2; _v1 += 1) this.stylesList[_v1].closed || this.stylesList[_v1].transforms.push(_v0);
    }, _v241.prototype.removeTransformFromStyleList = function () {
      var _v0,
        _v1 = this.stylesList.length;
      for (_v0 = 0; _v0 < _v1; _v0 += 1) this.stylesList[_v0].closed || this.stylesList[_v0].transforms.pop();
    }, _v241.prototype.closeStyles = function (_v0) {
      var _v1,
        _v2 = _v0.length;
      for (_v1 = 0; _v1 < _v2; _v1 += 1) _v0[_v1].closed = !0;
    }, _v241.prototype.searchShapes = function (_v0, _v1, _v2, _v3, _v4) {
      var _v5,
        _v6,
        _v7,
        _v8,
        _v9,
        _v10,
        _v11 = _v0.length - 1,
        _v12 = [],
        _v13 = [],
        _v14 = [].concat(_v4);
      for (_v5 = _v11; _v5 >= 0; _v5 -= 1) {
        if ((_v8 = this.searchProcessedElement(_v0[_v5])) ? _v1[_v5] = _v2[_v8 - 1] : _v0[_v5]._shouldRender = _v3, "fl" === _v0[_v5].ty || "st" === _v0[_v5].ty || "gf" === _v0[_v5].ty || "gs" === _v0[_v5].ty) _v8 ? _v1[_v5].style.closed = !1 : _v1[_v5] = this.createStyleElement(_v0[_v5], _v14), _v12.push(_v1[_v5].style);else if ("gr" === _v0[_v5].ty) {
          if (_v8) for (_v7 = _v1[_v5].it.length, _v6 = 0; _v6 < _v7; _v6 += 1) _v1[_v5].prevViewData[_v6] = _v1[_v5].it[_v6];else _v1[_v5] = this.createGroupElement(_v0[_v5]);
          this.searchShapes(_v0[_v5].it, _v1[_v5].it, _v1[_v5].prevViewData, _v3, _v14);
        } else "tr" === _v0[_v5].ty ? (_v8 || (_v10 = this.createTransformElement(_v0[_v5]), _v1[_v5] = _v10), _v14.push(_v1[_v5]), this.addTransformToStyleList(_v1[_v5])) : "sh" === _v0[_v5].ty || "rc" === _v0[_v5].ty || "el" === _v0[_v5].ty || "sr" === _v0[_v5].ty ? _v8 || (_v1[_v5] = this.createShapeElement(_v0[_v5])) : "tm" === _v0[_v5].ty || "rd" === _v0[_v5].ty || "pb" === _v0[_v5].ty || "zz" === _v0[_v5].ty || "op" === _v0[_v5].ty ? (_v8 ? (_v9 = _v1[_v5]).closed = !1 : ((_v9 = _v125.getModifier(_v0[_v5].ty)).init(this, _v0[_v5]), _v1[_v5] = _v9, this.shapeModifiers.push(_v9)), _v13.push(_v9)) : "rp" === _v0[_v5].ty && (_v8 ? (_v9 = _v1[_v5]).closed = !0 : (_v9 = _v125.getModifier(_v0[_v5].ty), _v1[_v5] = _v9, _v9.init(this, _v0, _v5, _v1), this.shapeModifiers.push(_v9), _v3 = !1), _v13.push(_v9));
        this.addProcessedElement(_v0[_v5], _v5 + 1);
      }
      for (this.removeTransformFromStyleList(), this.closeStyles(_v12), _v11 = _v13.length, _v5 = 0; _v5 < _v11; _v5 += 1) _v13[_v5].closed = !0;
    }, _v241.prototype.renderInnerContent = function () {
      this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0);
    }, _v241.prototype.renderShapeTransform = function (_v0, _v1) {
      (_v0._opMdf || _v1.op._mdf || this._isFirstFrame) && (_v1.opacity = _v0.opacity, _v1.opacity *= _v1.op.v, _v1._opMdf = !0);
    }, _v241.prototype.drawLayer = function () {
      var _v0,
        _v1,
        _v2,
        _v3,
        _v4,
        _v5,
        _v6,
        _v7,
        _v8,
        _v9 = this.stylesList.length,
        _v10 = this.globalData.renderer,
        _v11 = this.globalData.canvasContext;
      for (_v0 = 0; _v0 < _v9; _v0 += 1) if (!(("st" === (_v7 = (_v8 = this.stylesList[_v0]).type) || "gs" === _v7) && 0 === _v8.wi || !_v8.data._shouldRender || 0 === _v8.coOp || 0 === this.globalData.currentGlobalAlpha)) {
        for (_v10.save(), _v5 = _v8.elements, "st" === _v7 || "gs" === _v7 ? (_v10.ctxStrokeStyle("st" === _v7 ? _v8.co : _v8.grd), _v10.ctxLineWidth(_v8.wi), _v10.ctxLineCap(_v8.lc), _v10.ctxLineJoin(_v8.lj), _v10.ctxMiterLimit(_v8.ml || 0)) : _v10.ctxFillStyle("fl" === _v7 ? _v8.co : _v8.grd), _v10.ctxOpacity(_v8.coOp), "st" !== _v7 && "gs" !== _v7 && _v11.beginPath(), _v10.ctxTransform(_v8.preTransforms.finalTransform.props), _v2 = _v5.length, _v1 = 0; _v1 < _v2; _v1 += 1) {
          for (("st" === _v7 || "gs" === _v7) && (_v11.beginPath(), _v8.da && (_v11.setLineDash(_v8.da), _v11.lineDashOffset = _v8.do)), _v4 = (_v6 = _v5[_v1].trNodes).length, _v3 = 0; _v3 < _v4; _v3 += 1) "m" === _v6[_v3].t ? _v11.moveTo(_v6[_v3].p[0], _v6[_v3].p[1]) : "c" === _v6[_v3].t ? _v11.bezierCurveTo(_v6[_v3].pts[0], _v6[_v3].pts[1], _v6[_v3].pts[2], _v6[_v3].pts[3], _v6[_v3].pts[4], _v6[_v3].pts[5]) : _v11.closePath();
          ("st" === _v7 || "gs" === _v7) && (_v10.ctxStroke(), _v8.da && _v11.setLineDash(this.dashResetter));
        }
        "st" !== _v7 && "gs" !== _v7 && this.globalData.renderer.ctxFill(_v8.r), _v10.restore();
      }
    }, _v241.prototype.renderShape = function (_v0, _v1, _v2, _v3) {
      var _v4,
        _v5,
        _v6 = _v1.length - 1;
      for (_v5 = _v0, _v4 = _v6; _v4 >= 0; _v4 -= 1) "tr" === _v1[_v4].ty ? (_v5 = _v2[_v4].transform, this.renderShapeTransform(_v0, _v5)) : "sh" === _v1[_v4].ty || "el" === _v1[_v4].ty || "rc" === _v1[_v4].ty || "sr" === _v1[_v4].ty ? this.renderPath(_v1[_v4], _v2[_v4]) : "fl" === _v1[_v4].ty ? this.renderFill(_v1[_v4], _v2[_v4], _v5) : "st" === _v1[_v4].ty ? this.renderStroke(_v1[_v4], _v2[_v4], _v5) : "gf" === _v1[_v4].ty || "gs" === _v1[_v4].ty ? this.renderGradientFill(_v1[_v4], _v2[_v4], _v5) : "gr" === _v1[_v4].ty ? this.renderShape(_v5, _v1[_v4].it, _v2[_v4].it) : _v1[_v4].ty;
      _v3 && this.drawLayer();
    }, _v241.prototype.renderStyledShape = function (_v0, _v1) {
      if (this._isFirstFrame || _v1._mdf || _v0.transforms._mdf) {
        var _v2,
          _v3,
          _v4,
          _v5 = _v0.trNodes,
          _v6 = _v1.paths,
          _v7 = _v6._length;
        _v5.length = 0;
        var _v8 = _v0.transforms.finalTransform;
        for (_v4 = 0; _v4 < _v7; _v4 += 1) {
          var _v9 = _v6.shapes[_v4];
          if (_v9 && _v9.v) {
            for (_v3 = _v9._length, _v2 = 1; _v2 < _v3; _v2 += 1) 1 === _v2 && _v5.push({
              t: "m",
              p: _v8.applyToPointArray(_v9.v[0][0], _v9.v[0][1], 0)
            }), _v5.push({
              t: "c",
              pts: _v8.applyToTriplePoints(_v9.o[_v2 - 1], _v9.i[_v2], _v9.v[_v2])
            });
            1 === _v3 && _v5.push({
              t: "m",
              p: _v8.applyToPointArray(_v9.v[0][0], _v9.v[0][1], 0)
            }), _v9.c && _v3 && (_v5.push({
              t: "c",
              pts: _v8.applyToTriplePoints(_v9.o[_v2 - 1], _v9.i[0], _v9.v[0])
            }), _v5.push({
              t: "z"
            }));
          }
        }
        _v0.trNodes = _v5;
      }
    }, _v241.prototype.renderPath = function (_v0, _v1) {
      if (!0 !== _v0.hd && _v0._shouldRender) {
        var _v2,
          _v3 = _v1.styledShapes.length;
        for (_v2 = 0; _v2 < _v3; _v2 += 1) this.renderStyledShape(_v1.styledShapes[_v2], _v1.sh);
      }
    }, _v241.prototype.renderFill = function (_v0, _v1, _v2) {
      var _v3 = _v1.style;
      (_v1.c._mdf || this._isFirstFrame) && (_v3.co = "rgb(" + _v24(_v1.c.v[0]) + "," + _v24(_v1.c.v[1]) + "," + _v24(_v1.c.v[2]) + ")"), (_v1.o._mdf || _v2._opMdf || this._isFirstFrame) && (_v3.coOp = _v1.o.v * _v2.opacity);
    }, _v241.prototype.renderGradientFill = function (_v0, _v1, _v2) {
      var _v3 = _v1.style;
      if (!_v3.grd || _v1.g._mdf || _v1.s._mdf || _v1.e._mdf || 1 !== _v0.t && (_v1.h._mdf || _v1.a._mdf)) {
        var _v4,
          _v5,
          _v6 = this.globalData.canvasContext,
          _v7 = _v1.s.v,
          _v8 = _v1.e.v;
        if (1 === _v0.t) _v4 = _v6.createLinearGradient(_v7[0], _v7[1], _v8[0], _v8[1]);else {
          var _v9 = Math.sqrt(Math.pow(_v7[0] - _v8[0], 2) + Math.pow(_v7[1] - _v8[1], 2)),
            _v10 = Math.atan2(_v8[1] - _v7[1], _v8[0] - _v7[0]),
            _v11 = _v1.h.v;
          _v11 >= 1 ? _v11 = .99 : _v11 <= -1 && (_v11 = -.99);
          var _v12 = _v9 * _v11,
            _v13 = Math.cos(_v10 + _v1.a.v) * _v12 + _v7[0],
            _v14 = Math.sin(_v10 + _v1.a.v) * _v12 + _v7[1];
          _v4 = _v6.createRadialGradient(_v13, _v14, 0, _v7[0], _v7[1], _v9);
        }
        var _v15 = _v0.g.p,
          _v16 = _v1.g.c,
          _v17 = 1;
        for (_v5 = 0; _v5 < _v15; _v5 += 1) _v1.g._hasOpacity && _v1.g._collapsable && (_v17 = _v1.g.o[2 * _v5 + 1]), _v4.addColorStop(_v16[4 * _v5] / 100, "rgba(" + _v16[4 * _v5 + 1] + "," + _v16[4 * _v5 + 2] + "," + _v16[4 * _v5 + 3] + "," + _v17 + ")");
        _v3.grd = _v4;
      }
      _v3.coOp = _v1.o.v * _v2.opacity;
    }, _v241.prototype.renderStroke = function (_v0, _v1, _v2) {
      var _v3 = _v1.style,
        _v4 = _v1.d;
      _v4 && (_v4._mdf || this._isFirstFrame) && (_v3.da = _v4.dashArray, _v3.do = _v4.dashoffset[0]), (_v1.c._mdf || this._isFirstFrame) && (_v3.co = "rgb(" + _v24(_v1.c.v[0]) + "," + _v24(_v1.c.v[1]) + "," + _v24(_v1.c.v[2]) + ")"), (_v1.o._mdf || _v2._opMdf || this._isFirstFrame) && (_v3.coOp = _v1.o.v * _v2.opacity), (_v1.w._mdf || this._isFirstFrame) && (_v3.wi = _v1.w.v);
    }, _v241.prototype.destroy = function () {
      this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0;
    }, _v9([_v180, _v186, _v238, _v195, _v181, _v168, _v221], _v242), _v242.prototype.tHelper = _v8("canvas").getContext("2d"), _v242.prototype.buildNewText = function () {
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
        _v12 = this.textProperty.currentData;
      this.renderedLetters = _v14(_v12.l ? _v12.l.length : 0);
      var _v13 = !1;
      _v12.fc ? (_v13 = !0, this.values.fill = this.buildColor(_v12.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = _v13;
      var _v14 = !1;
      _v12.sc && (_v14 = !0, this.values.stroke = this.buildColor(_v12.sc), this.values.sWidth = _v12.sw);
      var _v15 = this.globalData.fontManager.getFontByName(_v12.f),
        _v16 = _v12.l,
        _v17 = this.mHelper;
      this.stroke = _v14, this.values.fValue = _v12.finalSize + "px " + this.globalData.fontManager.getFontByName(_v12.f).fFamily, _v1 = _v12.finalText.length;
      var _v18 = this.data.singleShape,
        _v19 = .001 * _v12.tr * _v12.finalSize,
        _v20 = 0,
        _v21 = 0,
        _v22 = !0,
        _v23 = 0;
      for (_v0 = 0; _v0 < _v1; _v0 += 1) {
        _v3 = (_v2 = this.globalData.fontManager.getCharData(_v12.finalText[_v0], _v15.fStyle, this.globalData.fontManager.getFontByName(_v12.f).fFamily)) && _v2.data || {}, _v17.reset(), _v18 && _v16[_v0].n && (_v20 = -_v19, _v21 += _v12.yOffset, _v21 += +!!_v22, _v22 = !1), _v8 = (_v6 = _v3.shapes ? _v3.shapes[0].it : []).length, _v17.scale(_v12.finalSize / 100, _v12.finalSize / 100), _v18 && this.applyTextPropertiesToMatrix(_v12, _v17, _v16[_v0].line, _v20, _v21), _v10 = _v14(_v8 - 1);
        var _v24 = 0;
        for (_v7 = 0; _v7 < _v8; _v7 += 1) if ("sh" === _v6[_v7].ty) {
          for (_v5 = _v6[_v7].ks.k.i.length, _v9 = _v6[_v7].ks.k, _v11 = [], _v4 = 1; _v4 < _v5; _v4 += 1) 1 === _v4 && _v11.push(_v17.applyToX(_v9.v[0][0], _v9.v[0][1], 0), _v17.applyToY(_v9.v[0][0], _v9.v[0][1], 0)), _v11.push(_v17.applyToX(_v9.o[_v4 - 1][0], _v9.o[_v4 - 1][1], 0), _v17.applyToY(_v9.o[_v4 - 1][0], _v9.o[_v4 - 1][1], 0), _v17.applyToX(_v9.i[_v4][0], _v9.i[_v4][1], 0), _v17.applyToY(_v9.i[_v4][0], _v9.i[_v4][1], 0), _v17.applyToX(_v9.v[_v4][0], _v9.v[_v4][1], 0), _v17.applyToY(_v9.v[_v4][0], _v9.v[_v4][1], 0));
          _v11.push(_v17.applyToX(_v9.o[_v4 - 1][0], _v9.o[_v4 - 1][1], 0), _v17.applyToY(_v9.o[_v4 - 1][0], _v9.o[_v4 - 1][1], 0), _v17.applyToX(_v9.i[0][0], _v9.i[0][1], 0), _v17.applyToY(_v9.i[0][0], _v9.i[0][1], 0), _v17.applyToX(_v9.v[0][0], _v9.v[0][1], 0), _v17.applyToY(_v9.v[0][0], _v9.v[0][1], 0)), _v10[_v24] = _v11, _v24 += 1;
        }
        _v18 && (_v20 += _v16[_v0].l, _v20 += _v19), this.textSpans[_v23] ? this.textSpans[_v23].elem = _v10 : this.textSpans[_v23] = {
          elem: _v10
        }, _v23 += 1;
      }
    }, _v242.prototype.renderInnerContent = function () {
      this.validateText(), this.canvasContext.font = this.values.fValue, this.globalData.renderer.ctxLineCap("butt"), this.globalData.renderer.ctxLineJoin("miter"), this.globalData.renderer.ctxMiterLimit(4), this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
      var _v0,
        _v1,
        _v2,
        _v3,
        _v4,
        _v5,
        _v6,
        _v7,
        _v8,
        _v9 = this.textAnimator.renderedLetters,
        _v10 = this.textProperty.currentData.l;
      _v1 = _v10.length;
      var _v11 = null,
        _v12 = null,
        _v13 = null,
        _v14 = this.globalData.renderer;
      for (_v0 = 0; _v0 < _v1; _v0 += 1) if (!_v10[_v0].n) {
        if ((_v6 = _v9[_v0]) && (_v14.save(), _v14.ctxTransform(_v6.p), _v14.ctxOpacity(_v6.o)), this.fill) {
          for (_v6 && _v6.fc ? _v11 !== _v6.fc && (_v14.ctxFillStyle(_v6.fc), _v11 = _v6.fc) : _v11 !== this.values.fill && (_v11 = this.values.fill, _v14.ctxFillStyle(this.values.fill)), _v3 = (_v7 = this.textSpans[_v0].elem).length, this.globalData.canvasContext.beginPath(), _v2 = 0; _v2 < _v3; _v2 += 1) for (_v5 = (_v8 = _v7[_v2]).length, this.globalData.canvasContext.moveTo(_v8[0], _v8[1]), _v4 = 2; _v4 < _v5; _v4 += 6) this.globalData.canvasContext.bezierCurveTo(_v8[_v4], _v8[_v4 + 1], _v8[_v4 + 2], _v8[_v4 + 3], _v8[_v4 + 4], _v8[_v4 + 5]);
          this.globalData.canvasContext.closePath(), _v14.ctxFill();
        }
        if (this.stroke) {
          for (_v6 && _v6.sw ? _v13 !== _v6.sw && (_v13 = _v6.sw, _v14.ctxLineWidth(_v6.sw)) : _v13 !== this.values.sWidth && (_v13 = this.values.sWidth, _v14.ctxLineWidth(this.values.sWidth)), _v6 && _v6.sc ? _v12 !== _v6.sc && (_v12 = _v6.sc, _v14.ctxStrokeStyle(_v6.sc)) : _v12 !== this.values.stroke && (_v12 = this.values.stroke, _v14.ctxStrokeStyle(this.values.stroke)), _v3 = (_v7 = this.textSpans[_v0].elem).length, this.globalData.canvasContext.beginPath(), _v2 = 0; _v2 < _v3; _v2 += 1) for (_v5 = (_v8 = _v7[_v2]).length, this.globalData.canvasContext.moveTo(_v8[0], _v8[1]), _v4 = 2; _v4 < _v5; _v4 += 6) this.globalData.canvasContext.bezierCurveTo(_v8[_v4], _v8[_v4 + 1], _v8[_v4 + 2], _v8[_v4 + 3], _v8[_v4 + 4], _v8[_v4 + 5]);
          this.globalData.canvasContext.closePath(), _v14.ctxStroke();
        }
        _v6 && this.globalData.renderer.restore();
      }
    }, _v9([_v180, _v186, _v238, _v195, _v181, _v168], _v243), _v243.prototype.initElement = _v215.prototype.initElement, _v243.prototype.prepareFrame = _v197.prototype.prepareFrame, _v243.prototype.createContent = function () {
      if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
        var _v0,
          _v1,
          _v2 = _v8("canvas");
        _v2.width = this.assetData.w, _v2.height = this.assetData.h;
        var _v3 = _v2.getContext("2d"),
          _v4 = this.img.width,
          _v5 = this.img.height,
          _v6 = _v4 / _v5,
          _v7 = this.assetData.w / this.assetData.h,
          _v8 = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
        _v6 > _v7 && "xMidYMid slice" === _v8 || _v6 < _v7 && "xMidYMid slice" !== _v8 ? _v0 = (_v1 = _v5) * _v7 : _v1 = (_v0 = _v4) / _v7, _v3.drawImage(this.img, (_v4 - _v0) / 2, (_v5 - _v1) / 2, _v0, _v1, 0, 0, this.assetData.w, this.assetData.h), this.img = _v2;
      }
    }, _v243.prototype.renderInnerContent = function () {
      this.canvasContext.drawImage(this.img, 0, 0);
    }, _v243.prototype.destroy = function () {
      this.img = null;
    }, _v9([_v180, _v186, _v238, _v195, _v181, _v168], _v244), _v244.prototype.initElement = _v215.prototype.initElement, _v244.prototype.prepareFrame = _v197.prototype.prepareFrame, _v244.prototype.renderInnerContent = function () {
      this.globalData.renderer.ctxFillStyle(this.data.sc), this.globalData.renderer.ctxFillRect(0, 0, this.data.sw, this.data.sh);
    }, _v9([_v184], _v245), _v245.prototype.createShape = function (_v0) {
      return new _v241(_v0, this.globalData, this);
    }, _v245.prototype.createText = function (_v0) {
      return new _v242(_v0, this.globalData, this);
    }, _v245.prototype.createImage = function (_v0) {
      return new _v243(_v0, this.globalData, this);
    }, _v245.prototype.createSolid = function (_v0) {
      return new _v244(_v0, this.globalData, this);
    }, _v245.prototype.createNull = _v229.prototype.createNull, _v245.prototype.ctxTransform = function (_v0) {
      (1 !== _v0[0] || 0 !== _v0[1] || 0 !== _v0[4] || 1 !== _v0[5] || 0 !== _v0[12] || 0 !== _v0[13]) && this.canvasContext.transform(_v0[0], _v0[1], _v0[4], _v0[5], _v0[12], _v0[13]);
    }, _v245.prototype.ctxOpacity = function (_v0) {
      this.canvasContext.globalAlpha *= _v0 < 0 ? 0 : _v0;
    }, _v245.prototype.ctxFillStyle = function (_v0) {
      this.canvasContext.fillStyle = _v0;
    }, _v245.prototype.ctxStrokeStyle = function (_v0) {
      this.canvasContext.strokeStyle = _v0;
    }, _v245.prototype.ctxLineWidth = function (_v0) {
      this.canvasContext.lineWidth = _v0;
    }, _v245.prototype.ctxLineCap = function (_v0) {
      this.canvasContext.lineCap = _v0;
    }, _v245.prototype.ctxLineJoin = function (_v0) {
      this.canvasContext.lineJoin = _v0;
    }, _v245.prototype.ctxMiterLimit = function (_v0) {
      this.canvasContext.miterLimit = _v0;
    }, _v245.prototype.ctxFill = function (_v0) {
      this.canvasContext.fill(_v0);
    }, _v245.prototype.ctxFillRect = function (_v0, _v1, _v2, _v3) {
      this.canvasContext.fillRect(_v0, _v1, _v2, _v3);
    }, _v245.prototype.ctxStroke = function () {
      this.canvasContext.stroke();
    }, _v245.prototype.reset = function () {
      this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore();
    }, _v245.prototype.save = function () {
      this.canvasContext.save();
    }, _v245.prototype.restore = function (_v0) {
      this.renderConfig.clearCanvas ? (_v0 && (this.globalData.blendMode = "source-over"), this.contextData.restore(_v0)) : this.canvasContext.restore();
    }, _v245.prototype.configAnimation = function (_v0) {
      if (this.animationItem.wrapper) {
        this.animationItem.container = _v8("canvas");
        var _v1 = this.animationItem.container.style;
        _v1.width = "100%", _v1.height = "100%";
        var _v2 = "0px 0px 0px";
        _v1.transformOrigin = _v2, _v1.mozTransformOrigin = _v2, _v1.webkitTransformOrigin = _v2, _v1["-webkit-transform"] = _v2, _v1.contentVisibility = this.renderConfig.contentVisibility, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id);
      } else this.canvasContext = this.renderConfig.context;
      this.contextData.setContext(this.canvasContext), this.data = _v0, this.layers = _v0.layers, this.transformCanvas = {
        w: _v0.w,
        h: _v0.h,
        sx: 0,
        sy: 0,
        tx: 0,
        ty: 0
      }, this.setupGlobalData(_v0, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = _v14(_v0.layers.length), this.updateContainerSize();
    }, _v245.prototype.updateContainerSize = function (_v0, _v1) {
      if (this.reset(), _v0 ? (_v2 = _v0, _v3 = _v1, this.canvasContext.canvas.width = _v2, this.canvasContext.canvas.height = _v3) : (this.animationItem.wrapper && this.animationItem.container ? (_v2 = this.animationItem.wrapper.offsetWidth, _v3 = this.animationItem.wrapper.offsetHeight) : (_v2 = this.canvasContext.canvas.width, _v3 = this.canvasContext.canvas.height), this.canvasContext.canvas.width = _v2 * this.renderConfig.dpr, this.canvasContext.canvas.height = _v3 * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
        var _v2,
          _v3,
          _v4,
          _v5,
          _v6 = this.renderConfig.preserveAspectRatio.split(" "),
          _v7 = _v6[1] || "meet",
          _v8 = _v6[0] || "xMidYMid",
          _v9 = _v8.substr(0, 4),
          _v10 = _v8.substr(4);
        _v4 = _v2 / _v3, (_v5 = this.transformCanvas.w / this.transformCanvas.h) > _v4 && "meet" === _v7 || _v5 < _v4 && "slice" === _v7 ? (this.transformCanvas.sx = _v2 / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = _v2 / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = _v3 / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = _v3 / (this.transformCanvas.h / this.renderConfig.dpr)), "xMid" === _v9 && (_v5 < _v4 && "meet" === _v7 || _v5 > _v4 && "slice" === _v7) ? this.transformCanvas.tx = (_v2 - this.transformCanvas.w * (_v3 / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === _v9 && (_v5 < _v4 && "meet" === _v7 || _v5 > _v4 && "slice" === _v7) ? this.transformCanvas.tx = (_v2 - this.transformCanvas.w * (_v3 / this.transformCanvas.h)) * this.renderConfig.dpr : this.transformCanvas.tx = 0, "YMid" === _v10 && (_v5 > _v4 && "meet" === _v7 || _v5 < _v4 && "slice" === _v7) ? this.transformCanvas.ty = (_v3 - this.transformCanvas.h * (_v2 / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === _v10 && (_v5 > _v4 && "meet" === _v7 || _v5 < _v4 && "slice" === _v7) ? this.transformCanvas.ty = (_v3 - this.transformCanvas.h * (_v2 / this.transformCanvas.w)) * this.renderConfig.dpr : this.transformCanvas.ty = 0;
      } else "none" === this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = _v2 / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = _v3 / (this.transformCanvas.h / this.renderConfig.dpr)) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0;
      this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0);
    }, _v245.prototype.destroy = function () {
      var _v0;
      for (this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), _v0 = (this.layers ? this.layers.length : 0) - 1; _v0 >= 0; _v0 -= 1) this.elements[_v0] && this.elements[_v0].destroy && this.elements[_v0].destroy();
      this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0;
    }, _v245.prototype.renderFrame = function (_v0, _v1) {
      if ((this.renderedFrame !== _v0 || !0 !== this.renderConfig.clearCanvas || _v1) && !this.destroyed && -1 !== _v0) {
        this.renderedFrame = _v0, this.globalData.frameNum = _v0 - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || _v1, this.globalData.projectInterface.currentFrame = _v0;
        var _v2,
          _v3 = this.layers.length;
        for (this.completeLayers || this.checkLayers(_v0), _v2 = _v3 - 1; _v2 >= 0; _v2 -= 1) (this.completeLayers || this.elements[_v2]) && this.elements[_v2].prepareFrame(_v0 - this.layers[_v2].st);
        if (this.globalData._mdf) {
          for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), _v2 = _v3 - 1; _v2 >= 0; _v2 -= 1) (this.completeLayers || this.elements[_v2]) && this.elements[_v2].renderFrame();
          !0 !== this.renderConfig.clearCanvas && this.restore();
        }
      }
    }, _v245.prototype.buildItem = function (_v0) {
      var _v1 = this.elements;
      if (!_v1[_v0] && 99 !== this.layers[_v0].ty) {
        var _v2 = this.createItem(this.layers[_v0], this, this.globalData);
        _v1[_v0] = _v2, _v2.initExpressions();
      }
    }, _v245.prototype.checkPendingElements = function () {
      for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting();
    }, _v245.prototype.hide = function () {
      this.animationItem.container.style.display = "none";
    }, _v245.prototype.show = function () {
      this.animationItem.container.style.display = "block";
    }, _v247.prototype.duplicate = function () {
      var _v0 = 2 * this._length,
        _v1 = 0;
      for (_v1 = this._length; _v1 < _v0; _v1 += 1) this.stack[_v1] = new _v246();
      this._length = _v0;
    }, _v247.prototype.reset = function () {
      this.cArrPos = 0, this.cTr.reset(), this.stack[this.cArrPos].opacity = 1;
    }, _v247.prototype.restore = function (_v0) {
      this.cArrPos -= 1;
      var _v1,
        _v2 = this.stack[this.cArrPos],
        _v3 = _v2.transform,
        _v4 = this.cTr.props;
      for (_v1 = 0; _v1 < 16; _v1 += 1) _v4[_v1] = _v3[_v1];
      if (_v0) {
        this.nativeContext.restore();
        var _v5 = this.stack[this.cArrPos + 1];
        this.appliedFillStyle = _v5.fillStyle, this.appliedStrokeStyle = _v5.strokeStyle, this.appliedLineWidth = _v5.lineWidth, this.appliedLineCap = _v5.lineCap, this.appliedLineJoin = _v5.lineJoin, this.appliedMiterLimit = _v5.miterLimit;
      }
      this.nativeContext.setTransform(_v3[0], _v3[1], _v3[4], _v3[5], _v3[12], _v3[13]), (_v0 || -1 !== _v2.opacity && this.currentOpacity !== _v2.opacity) && (this.nativeContext.globalAlpha = _v2.opacity, this.currentOpacity = _v2.opacity), this.currentFillStyle = _v2.fillStyle, this.currentStrokeStyle = _v2.strokeStyle, this.currentLineWidth = _v2.lineWidth, this.currentLineCap = _v2.lineCap, this.currentLineJoin = _v2.lineJoin, this.currentMiterLimit = _v2.miterLimit;
    }, _v247.prototype.save = function (_v0) {
      _v0 && this.nativeContext.save();
      var _v1,
        _v2 = this.cTr.props;
      this._length <= this.cArrPos && this.duplicate();
      var _v3 = this.stack[this.cArrPos];
      for (_v1 = 0; _v1 < 16; _v1 += 1) _v3.transform[_v1] = _v2[_v1];
      this.cArrPos += 1;
      var _v4 = this.stack[this.cArrPos];
      _v4.opacity = _v3.opacity, _v4.fillStyle = _v3.fillStyle, _v4.strokeStyle = _v3.strokeStyle, _v4.lineWidth = _v3.lineWidth, _v4.lineCap = _v3.lineCap, _v4.lineJoin = _v3.lineJoin, _v4.miterLimit = _v3.miterLimit;
    }, _v247.prototype.setOpacity = function (_v0) {
      this.stack[this.cArrPos].opacity = _v0;
    }, _v247.prototype.setContext = function (_v0) {
      this.nativeContext = _v0;
    }, _v247.prototype.fillStyle = function (_v0) {
      this.stack[this.cArrPos].fillStyle !== _v0 && (this.currentFillStyle = _v0, this.stack[this.cArrPos].fillStyle = _v0);
    }, _v247.prototype.strokeStyle = function (_v0) {
      this.stack[this.cArrPos].strokeStyle !== _v0 && (this.currentStrokeStyle = _v0, this.stack[this.cArrPos].strokeStyle = _v0);
    }, _v247.prototype.lineWidth = function (_v0) {
      this.stack[this.cArrPos].lineWidth !== _v0 && (this.currentLineWidth = _v0, this.stack[this.cArrPos].lineWidth = _v0);
    }, _v247.prototype.lineCap = function (_v0) {
      this.stack[this.cArrPos].lineCap !== _v0 && (this.currentLineCap = _v0, this.stack[this.cArrPos].lineCap = _v0);
    }, _v247.prototype.lineJoin = function (_v0) {
      this.stack[this.cArrPos].lineJoin !== _v0 && (this.currentLineJoin = _v0, this.stack[this.cArrPos].lineJoin = _v0);
    }, _v247.prototype.miterLimit = function (_v0) {
      this.stack[this.cArrPos].miterLimit !== _v0 && (this.currentMiterLimit = _v0, this.stack[this.cArrPos].miterLimit = _v0);
    }, _v247.prototype.transform = function (_v0) {
      this.transformMat.cloneFromProps(_v0);
      var _v1 = this.cTr;
      this.transformMat.multiply(_v1), _v1.cloneFromProps(this.transformMat.props);
      var _v2 = _v1.props;
      this.nativeContext.setTransform(_v2[0], _v2[1], _v2[4], _v2[5], _v2[12], _v2[13]);
    }, _v247.prototype.opacity = function (_v0) {
      var _v1 = this.stack[this.cArrPos].opacity;
      _v1 *= _v0 < 0 ? 0 : _v0, this.stack[this.cArrPos].opacity !== _v1 && (this.currentOpacity !== _v0 && (this.nativeContext.globalAlpha = _v0, this.currentOpacity = _v0), this.stack[this.cArrPos].opacity = _v1);
    }, _v247.prototype.fill = function (_v0) {
      this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fill(_v0);
    }, _v247.prototype.fillRect = function (_v0, _v1, _v2, _v3) {
      this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fillRect(_v0, _v1, _v2, _v3);
    }, _v247.prototype.stroke = function () {
      this.appliedStrokeStyle !== this.currentStrokeStyle && (this.appliedStrokeStyle = this.currentStrokeStyle, this.nativeContext.strokeStyle = this.appliedStrokeStyle), this.appliedLineWidth !== this.currentLineWidth && (this.appliedLineWidth = this.currentLineWidth, this.nativeContext.lineWidth = this.appliedLineWidth), this.appliedLineCap !== this.currentLineCap && (this.appliedLineCap = this.currentLineCap, this.nativeContext.lineCap = this.appliedLineCap), this.appliedLineJoin !== this.currentLineJoin && (this.appliedLineJoin = this.currentLineJoin, this.nativeContext.lineJoin = this.appliedLineJoin), this.appliedMiterLimit !== this.currentMiterLimit && (this.appliedMiterLimit = this.currentMiterLimit, this.nativeContext.miterLimit = this.appliedMiterLimit), this.nativeContext.stroke();
    }, _v9([_v245, _v227, _v238], _v248), _v248.prototype.renderInnerContent = function () {
      var _v0,
        _v1 = this.canvasContext;
      for (_v1.beginPath(), _v1.moveTo(0, 0), _v1.lineTo(this.data.w, 0), _v1.lineTo(this.data.w, this.data.h), _v1.lineTo(0, this.data.h), _v1.lineTo(0, 0), _v1.clip(), _v0 = this.layers.length - 1; _v0 >= 0; _v0 -= 1) (this.completeLayers || this.elements[_v0]) && this.elements[_v0].renderFrame();
    }, _v248.prototype.destroy = function () {
      var _v0;
      for (_v0 = this.layers.length - 1; _v0 >= 0; _v0 -= 1) this.elements[_v0] && this.elements[_v0].destroy();
      this.layers = null, this.elements = null;
    }, _v248.prototype.createComp = function (_v0) {
      return new _v248(_v0, this.globalData, this);
    }, _v9([_v245], _v249), _v249.prototype.createComp = function (_v0) {
      return new _v248(_v0, this.globalData, this);
    }, _v250.prototype = {
      checkBlendMode: function () {},
      initRendererElement: function () {
        this.baseElement = _v8(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = _v60("svg"), this.layerElement = _v60("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, _v34(this.baseElement);
      },
      createContainerElements: function () {
        this.renderableEffectsManager = new _v235(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 !== this.data.bm && this.setBlendMode();
      },
      renderElement: function () {
        var _v0 = this.transformedElement ? this.transformedElement.style : {};
        if (this.finalTransform._matMdf) {
          var _v1 = this.finalTransform.mat.toCSS();
          _v0.transform = _v1, _v0.webkitTransform = _v1;
        }
        this.finalTransform._opMdf && (_v0.opacity = this.finalTransform.mProp.o.v);
      },
      renderFrame: function () {
        this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1));
      },
      destroy: function () {
        this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null);
      },
      createRenderableComponents: function () {
        this.maskManager = new _v187(this.data, this, this.globalData);
      },
      addEffects: function () {},
      setMatte: function () {}
    }, _v250.prototype.getBaseElement = _v194.prototype.getBaseElement, _v250.prototype.destroyBaseElement = _v250.prototype.destroy, _v250.prototype.buildElementParenting = _v184.prototype.buildElementParenting, _v9([_v180, _v186, _v250, _v195, _v181, _v196], _v251), _v251.prototype.createContent = function () {
      var _v0;
      this.data.hasMask ? ((_v0 = _v60("rect")).setAttribute("width", this.data.sw), _v0.setAttribute("height", this.data.sh), _v0.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((_v0 = _v8("div")).style.width = this.data.sw + "px", _v0.style.height = this.data.sh + "px", _v0.style.backgroundColor = this.data.sc), this.layerElement.appendChild(_v0);
    }, _v9([_v180, _v186, _v251, _v215, _v250, _v195, _v181, _v168], _v252), _v252.prototype._renderShapeFrame = _v252.prototype.renderInnerContent, _v252.prototype.createContent = function () {
      var _v0;
      if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), _v0 = this.svgElement;else {
        _v0 = _v60("svg");
        var _v1 = this.comp.data ? this.comp.data : this.globalData.compSize;
        _v0.setAttribute("width", _v1.w), _v0.setAttribute("height", _v1.h), _v0.appendChild(this.shapesContainer), this.layerElement.appendChild(_v0);
      }
      this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = _v0;
    }, _v252.prototype.getTransformedPoint = function (_v0, _v1) {
      var _v2,
        _v3 = _v0.length;
      for (_v2 = 0; _v2 < _v3; _v2 += 1) _v1 = _v0[_v2].mProps.v.applyToPointArray(_v1[0], _v1[1], 0);
      return _v1;
    }, _v252.prototype.calculateShapeBoundingBox = function (_v0, _v1) {
      var _v2,
        _v3,
        _v4,
        _v5,
        _v6,
        _v7 = _v0.sh.v,
        _v8 = _v0.transformers,
        _v9 = _v7._length;
      if (!(_v9 <= 1)) {
        for (_v2 = 0; _v2 < _v9 - 1; _v2 += 1) _v3 = this.getTransformedPoint(_v8, _v7.v[_v2]), _v4 = this.getTransformedPoint(_v8, _v7.o[_v2]), _v5 = this.getTransformedPoint(_v8, _v7.i[_v2 + 1]), _v6 = this.getTransformedPoint(_v8, _v7.v[_v2 + 1]), this.checkBounds(_v3, _v4, _v5, _v6, _v1);
        _v7.c && (_v3 = this.getTransformedPoint(_v8, _v7.v[_v2]), _v4 = this.getTransformedPoint(_v8, _v7.o[_v2]), _v5 = this.getTransformedPoint(_v8, _v7.i[0]), _v6 = this.getTransformedPoint(_v8, _v7.v[0]), this.checkBounds(_v3, _v4, _v5, _v6, _v1));
      }
    }, _v252.prototype.checkBounds = function (_v0, _v1, _v2, _v3, _v4) {
      this.getBoundsOfCurve(_v0, _v1, _v2, _v3);
      var _v5 = this.shapeBoundingBox;
      _v4.x = _v26(_v5.left, _v4.x), _v4.xMax = _v25(_v5.right, _v4.xMax), _v4.y = _v26(_v5.top, _v4.y), _v4.yMax = _v25(_v5.bottom, _v4.yMax);
    }, _v252.prototype.shapeBoundingBox = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, _v252.prototype.tempBoundingBox = {
      x: 0,
      xMax: 0,
      y: 0,
      yMax: 0,
      width: 0,
      height: 0
    }, _v252.prototype.getBoundsOfCurve = function (_v0, _v1, _v2, _v3) {
      for (var _v4, _v5, _v6, _v7, _v8, _v9, _v10, _v11 = [[_v0[0], _v3[0]], [_v0[1], _v3[1]]], _v12 = 0; _v12 < 2; ++_v12) _v5 = 6 * _v0[_v12] - 12 * _v1[_v12] + 6 * _v2[_v12], _v4 = -3 * _v0[_v12] + 9 * _v1[_v12] - 9 * _v2[_v12] + 3 * _v3[_v12], _v6 = 3 * _v1[_v12] - 3 * _v0[_v12], _v5 |= 0, _v6 |= 0, 0 == (_v4 |= 0) && 0 === _v5 || (0 === _v4 ? (_v7 = -_v6 / _v5) > 0 && _v7 < 1 && _v11[_v12].push(this.calculateF(_v7, _v0, _v1, _v2, _v3, _v12)) : (_v8 = _v5 * _v5 - 4 * _v6 * _v4) >= 0 && ((_v9 = (-_v5 + _v23(_v8)) / (2 * _v4)) > 0 && _v9 < 1 && _v11[_v12].push(this.calculateF(_v9, _v0, _v1, _v2, _v3, _v12)), (_v10 = (-_v5 - _v23(_v8)) / (2 * _v4)) > 0 && _v10 < 1 && _v11[_v12].push(this.calculateF(_v10, _v0, _v1, _v2, _v3, _v12))));
      this.shapeBoundingBox.left = _v26.apply(null, _v11[0]), this.shapeBoundingBox.top = _v26.apply(null, _v11[1]), this.shapeBoundingBox.right = _v25.apply(null, _v11[0]), this.shapeBoundingBox.bottom = _v25.apply(null, _v11[1]);
    }, _v252.prototype.calculateF = function (_v0, _v1, _v2, _v3, _v4, _v5) {
      return _v22(1 - _v0, 3) * _v1[_v5] + 3 * _v22(1 - _v0, 2) * _v0 * _v2[_v5] + 3 * (1 - _v0) * _v22(_v0, 2) * _v3[_v5] + _v22(_v0, 3) * _v4[_v5];
    }, _v252.prototype.calculateBoundingBox = function (_v0, _v1) {
      var _v2,
        _v3 = _v0.length;
      for (_v2 = 0; _v2 < _v3; _v2 += 1) _v0[_v2] && _v0[_v2].sh ? this.calculateShapeBoundingBox(_v0[_v2], _v1) : _v0[_v2] && _v0[_v2].it ? this.calculateBoundingBox(_v0[_v2].it, _v1) : _v0[_v2] && _v0[_v2].style && _v0[_v2].w && this.expandStrokeBoundingBox(_v0[_v2].w, _v1);
    }, _v252.prototype.expandStrokeBoundingBox = function (_v0, _v1) {
      var _v2 = 0;
      if (_v0.keyframes) {
        for (var _v3 = 0; _v3 < _v0.keyframes.length; _v3 += 1) {
          var _v4 = _v0.keyframes[_v3].s;
          _v4 > _v2 && (_v2 = _v4);
        }
        _v2 *= _v0.mult;
      } else _v2 = _v0.v * _v0.mult;
      _v1.x -= _v2, _v1.xMax += _v2, _v1.y -= _v2, _v1.yMax += _v2;
    }, _v252.prototype.currentBoxContains = function (_v0) {
      return this.currentBBox.x <= _v0.x && this.currentBBox.y <= _v0.y && this.currentBBox.width + this.currentBBox.x >= _v0.x + _v0.width && this.currentBBox.height + this.currentBBox.y >= _v0.y + _v0.height;
    }, _v252.prototype.renderInnerContent = function () {
      if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
        var _v0 = this.tempBoundingBox,
          _v1 = 0;
        if (_v0.x = 0, _v0.xMax = -_v1, _v0.y = _v1, _v0.yMax = -_v1, this.calculateBoundingBox(this.itemsData, _v0), _v0.width = _v0.xMax < _v0.x ? 0 : _v0.xMax - _v0.x, _v0.height = _v0.yMax < _v0.y ? 0 : _v0.yMax - _v0.y, !this.currentBoxContains(_v0)) {
          var _v2 = !1;
          if (this.currentBBox.w !== _v0.width && (this.currentBBox.w = _v0.width, this.shapeCont.setAttribute("width", _v0.width), _v2 = !0), this.currentBBox.h !== _v0.height && (this.currentBBox.h = _v0.height, this.shapeCont.setAttribute("height", _v0.height), _v2 = !0), _v2 || this.currentBBox.x !== _v0.x || this.currentBBox.y !== _v0.y) {
            this.currentBBox.w = _v0.width, this.currentBBox.h = _v0.height, this.currentBBox.x = _v0.x, this.currentBBox.y = _v0.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
            var _v3 = this.shapeCont.style,
              _v4 = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
            _v3.transform = _v4, _v3.webkitTransform = _v4;
          }
        }
      }
    }, _v9([_v180, _v186, _v250, _v195, _v181, _v196, _v221], _v253), _v253.prototype.createContent = function () {
      if (this.isMasked = this.checkMasks(), this.isMasked) {
        this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
        var _v0 = _v60("g");
        this.maskedElement.appendChild(_v0), this.innerElem = _v0;
      } else this.renderType = "html", this.innerElem = this.layerElement;
      this.checkParenting();
    }, _v253.prototype.buildNewText = function () {
      var _v0 = this.textProperty.currentData;
      this.renderedLetters = _v14(_v0.l ? _v0.l.length : 0);
      var _v1 = this.innerElem.style,
        _v2 = _v0.fc ? this.buildColor(_v0.fc) : "rgba(0,0,0,0)";
      _v1.fill = _v2, _v1.color = _v2, _v0.sc && (_v1.stroke = this.buildColor(_v0.sc), _v1.strokeWidth = _v0.sw + "px");
      var _v3 = this.globalData.fontManager.getFontByName(_v0.f);
      if (!this.globalData.fontManager.chars) if (_v1.fontSize = _v0.finalSize + "px", _v1.lineHeight = _v0.finalSize + "px", _v3.fClass) this.innerElem.className = _v3.fClass;else {
        _v1.fontFamily = _v3.fFamily;
        var _v4 = _v0.fWeight;
        _v1.fontStyle = _v0.fStyle, _v1.fontWeight = _v4;
      }
      var _v5 = _v0.l;
      _v10 = _v5.length;
      var _v6 = this.mHelper,
        _v7 = "",
        _v8 = 0;
      for (_v9 = 0; _v9 < _v10; _v9 += 1) {
        if (this.globalData.fontManager.chars ? (this.textPaths[_v8] ? _v11 = this.textPaths[_v8] : ((_v11 = _v60("path")).setAttribute("stroke-linecap", _v200[1]), _v11.setAttribute("stroke-linejoin", _v201[2]), _v11.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[_v8] ? _v13 = (_v12 = this.textSpans[_v8]).children[0] : ((_v12 = _v8("div")).style.lineHeight = 0, (_v13 = _v60("svg")).appendChild(_v11), _v34(_v12)))) : this.isMasked ? _v11 = this.textPaths[_v8] ? this.textPaths[_v8] : _v60("text") : this.textSpans[_v8] ? (_v12 = this.textSpans[_v8], _v11 = this.textPaths[_v8]) : (_v34(_v12 = _v8("span")), _v34(_v11 = _v8("span")), _v12.appendChild(_v11)), this.globalData.fontManager.chars) {
          var _v9,
            _v10,
            _v11,
            _v12,
            _v13,
            _v14,
            _v15,
            _v16 = this.globalData.fontManager.getCharData(_v0.finalText[_v9], _v3.fStyle, this.globalData.fontManager.getFontByName(_v0.f).fFamily);
          if (_v15 = _v16 ? _v16.data : null, _v6.reset(), _v15 && _v15.shapes && _v15.shapes.length && (_v14 = _v15.shapes[0].it, _v6.scale(_v0.finalSize / 100, _v0.finalSize / 100), _v7 = this.createPathShape(_v6, _v14), _v11.setAttribute("d", _v7)), this.isMasked) this.innerElem.appendChild(_v11);else {
            if (this.innerElem.appendChild(_v12), _v15 && _v15.shapes) {
              document.body.appendChild(_v13);
              var _v17 = _v13.getBBox();
              _v13.setAttribute("width", _v17.width + 2), _v13.setAttribute("height", _v17.height + 2), _v13.setAttribute("viewBox", _v17.x - 1 + " " + (_v17.y - 1) + " " + (_v17.width + 2) + " " + (_v17.height + 2));
              var _v18 = _v13.style,
                _v19 = "translate(" + (_v17.x - 1) + "px," + (_v17.y - 1) + "px)";
              _v18.transform = _v19, _v18.webkitTransform = _v19, _v5[_v9].yOffset = _v17.y - 1;
            } else _v13.setAttribute("width", 1), _v13.setAttribute("height", 1);
            _v12.appendChild(_v13);
          }
        } else if (_v11.textContent = _v5[_v9].val, _v11.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(_v11);else {
          this.innerElem.appendChild(_v12);
          var _v20 = _v11.style,
            _v21 = "translate3d(0," + -_v0.finalSize / 1.2 + "px,0)";
          _v20.transform = _v21, _v20.webkitTransform = _v21;
        }
        this.isMasked ? this.textSpans[_v8] = _v11 : this.textSpans[_v8] = _v12, this.textSpans[_v8].style.display = "block", this.textPaths[_v8] = _v11, _v8 += 1;
      }
      for (; _v8 < this.textSpans.length;) this.textSpans[_v8].style.display = "none", _v8 += 1;
    }, _v253.prototype.renderInnerContent = function () {
      if (this.validateText(), this.data.singleShape) {
        if (!this._isFirstFrame && !this.lettersChangedFlag) return;
        if (this.isMasked && this.finalTransform._matMdf) {
          this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH);
          var _v0,
            _v1,
            _v2,
            _v3,
            _v4,
            _v5 = this.svgElement.style,
            _v6 = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
          _v5.transform = _v6, _v5.webkitTransform = _v6;
        }
      }
      if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
        var _v7 = 0,
          _v8 = this.textAnimator.renderedLetters,
          _v9 = this.textProperty.currentData.l;
        for (_v1 = _v9.length, _v0 = 0; _v0 < _v1; _v0 += 1) _v9[_v0].n ? _v7 += 1 : (_v3 = this.textSpans[_v0], _v4 = this.textPaths[_v0], _v2 = _v8[_v7], _v7 += 1, _v2._mdf.m && (this.isMasked ? _v3.setAttribute("transform", _v2.m) : (_v3.style.webkitTransform = _v2.m, _v3.style.transform = _v2.m)), _v3.style.opacity = _v2.o, _v2.sw && _v2._mdf.sw && _v4.setAttribute("stroke-width", _v2.sw), _v2.sc && _v2._mdf.sc && _v4.setAttribute("stroke", _v2.sc), _v2.fc && _v2._mdf.fc && (_v4.setAttribute("fill", _v2.fc), _v4.style.color = _v2.fc));
        if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
          var _v10 = this.innerElem.getBBox();
          this.currentBBox.w !== _v10.width && (this.currentBBox.w = _v10.width, this.svgElement.setAttribute("width", _v10.width)), this.currentBBox.h !== _v10.height && (this.currentBBox.h = _v10.height, this.svgElement.setAttribute("height", _v10.height));
          var _v11 = 1;
          if (this.currentBBox.w !== _v10.width + 2 * _v11 || this.currentBBox.h !== _v10.height + 2 * _v11 || this.currentBBox.x !== _v10.x - _v11 || this.currentBBox.y !== _v10.y - _v11) {
            this.currentBBox.w = _v10.width + 2 * _v11, this.currentBBox.h = _v10.height + 2 * _v11, this.currentBBox.x = _v10.x - _v11, this.currentBBox.y = _v10.y - _v11, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), _v5 = this.svgElement.style;
            var _v12 = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
            _v5.transform = _v12, _v5.webkitTransform = _v12;
          }
        }
      }
    }, _v9([_v180, _v181, _v195], _v254), _v254.prototype.setup = function () {
      var _v0,
        _v1,
        _v2,
        _v3,
        _v4 = this.comp.threeDElements.length;
      for (_v0 = 0; _v0 < _v4; _v0 += 1) if ("3d" === (_v1 = this.comp.threeDElements[_v0]).type) {
        _v2 = _v1.perspectiveElem.style, _v3 = _v1.container.style;
        var _v5 = this.pe.v + "px",
          _v6 = "0px 0px 0px",
          _v7 = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
        _v2.perspective = _v5, _v2.webkitPerspective = _v5, _v3.transformOrigin = _v6, _v3.mozTransformOrigin = _v6, _v3.webkitTransformOrigin = _v6, _v2.transform = _v7, _v2.webkitTransform = _v7;
      }
    }, _v254.prototype.createElements = function () {}, _v254.prototype.hide = function () {}, _v254.prototype.renderFrame = function () {
      var _v0 = this._isFirstFrame;
      if (this.hierarchy) for (_v3 = this.hierarchy.length, _v2 = 0; _v2 < _v3; _v2 += 1) _v0 = this.hierarchy[_v2].finalTransform.mProp._mdf || _v0;
      if (_v0 || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
        if (this.mat.reset(), this.hierarchy) for (_v2 = _v3 = this.hierarchy.length - 1; _v2 >= 0; _v2 -= 1) {
          var _v1 = this.hierarchy[_v2].finalTransform.mProp;
          this.mat.translate(-_v1.p.v[0], -_v1.p.v[1], _v1.p.v[2]), this.mat.rotateX(-_v1.or.v[0]).rotateY(-_v1.or.v[1]).rotateZ(_v1.or.v[2]), this.mat.rotateX(-_v1.rx.v).rotateY(-_v1.ry.v).rotateZ(_v1.rz.v), this.mat.scale(1 / _v1.s.v[0], 1 / _v1.s.v[1], 1 / _v1.s.v[2]), this.mat.translate(_v1.a.v[0], _v1.a.v[1], _v1.a.v[2]);
        }
        if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
          var _v2,
            _v3,
            _v4 = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]],
            _v5 = Math.sqrt(Math.pow(_v4[0], 2) + Math.pow(_v4[1], 2) + Math.pow(_v4[2], 2)),
            _v6 = [_v4[0] / _v5, _v4[1] / _v5, _v4[2] / _v5],
            _v7 = Math.sqrt(_v6[2] * _v6[2] + _v6[0] * _v6[0]),
            _v8 = Math.atan2(_v6[1], _v7),
            _v9 = Math.atan2(_v6[0], -_v6[2]);
          this.mat.rotateY(_v9).rotateX(-_v8);
        }
        this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
        var _v10 = !this._prevMat.equals(this.mat);
        if ((_v10 || this.pe._mdf) && this.comp.threeDElements) {
          for (_v3 = this.comp.threeDElements.length, _v2 = 0; _v2 < _v3; _v2 += 1) if ("3d" === (_v11 = this.comp.threeDElements[_v2]).type) {
            if (_v10) {
              var _v11,
                _v12,
                _v13,
                _v14 = this.mat.toCSS();
              (_v13 = _v11.container.style).transform = _v14, _v13.webkitTransform = _v14;
            }
            this.pe._mdf && ((_v12 = _v11.perspectiveElem.style).perspective = this.pe.v + "px", _v12.webkitPerspective = this.pe.v + "px");
          }
          this.mat.clone(this._prevMat);
        }
      }
      this._isFirstFrame = !1;
    }, _v254.prototype.prepareFrame = function (_v0) {
      this.prepareProperties(_v0, !0);
    }, _v254.prototype.destroy = function () {}, _v254.prototype.getBaseElement = function () {
      return null;
    }, _v9([_v180, _v186, _v250, _v251, _v195, _v181, _v168], _v255), _v255.prototype.createContent = function () {
      var _v0 = this.globalData.getAssetsPath(this.assetData),
        _v1 = new Image();
      this.data.hasMask ? (this.imageElem = _v60("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", _v0), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(_v1), _v1.crossOrigin = "anonymous", _v1.src = _v0, this.data.ln && this.baseElement.setAttribute("id", this.data.ln);
    }, _v9([_v184], _v256), _v256.prototype.buildItem = _v229.prototype.buildItem, _v256.prototype.checkPendingElements = function () {
      for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting();
    }, _v256.prototype.appendElementInPos = function (_v0, _v1) {
      var _v2 = _v0.getBaseElement();
      if (_v2) {
        var _v3 = this.layers[_v1];
        if (_v3.ddd && this.supports3d) this.addTo3dContainer(_v2, _v1);else if (this.threeDElements) this.addTo3dContainer(_v2, _v1);else {
          for (var _v4, _v5, _v6 = 0; _v6 < _v1;) this.elements[_v6] && !0 !== this.elements[_v6] && this.elements[_v6].getBaseElement && (_v5 = this.elements[_v6], _v4 = (this.layers[_v6].ddd ? this.getThreeDContainerByPos(_v6) : _v5.getBaseElement()) || _v4), _v6 += 1;
          _v4 ? _v3.ddd && this.supports3d || this.layerElement.insertBefore(_v2, _v4) : _v3.ddd && this.supports3d || this.layerElement.appendChild(_v2);
        }
      }
    }, _v256.prototype.createShape = function (_v0) {
      return this.supports3d ? new _v252(_v0, this.globalData, this) : new _v215(_v0, this.globalData, this);
    }, _v256.prototype.createText = function (_v0) {
      return this.supports3d ? new _v253(_v0, this.globalData, this) : new _v223(_v0, this.globalData, this);
    }, _v256.prototype.createCamera = function (_v0) {
      return this.camera = new _v254(_v0, this.globalData, this), this.camera;
    }, _v256.prototype.createImage = function (_v0) {
      return this.supports3d ? new _v255(_v0, this.globalData, this) : new _v197(_v0, this.globalData, this);
    }, _v256.prototype.createSolid = function (_v0) {
      return this.supports3d ? new _v251(_v0, this.globalData, this) : new _v224(_v0, this.globalData, this);
    }, _v256.prototype.createNull = _v229.prototype.createNull, _v256.prototype.getThreeDContainerByPos = function (_v0) {
      for (var _v1 = 0, _v2 = this.threeDElements.length; _v1 < _v2;) {
        if (this.threeDElements[_v1].startPos <= _v0 && this.threeDElements[_v1].endPos >= _v0) return this.threeDElements[_v1].perspectiveElem;
        _v1 += 1;
      }
      return null;
    }, _v256.prototype.createThreeDContainer = function (_v0, _v1) {
      var _v2,
        _v3,
        _v4 = _v8("div");
      _v34(_v4);
      var _v5 = _v8("div");
      if (_v34(_v5), "3d" === _v1) {
        (_v2 = _v4.style).width = this.globalData.compSize.w + "px", _v2.height = this.globalData.compSize.h + "px";
        var _v6 = "50% 50%";
        _v2.webkitTransformOrigin = _v6, _v2.mozTransformOrigin = _v6, _v2.transformOrigin = _v6;
        var _v7 = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
        (_v3 = _v5.style).transform = _v7, _v3.webkitTransform = _v7;
      }
      _v4.appendChild(_v5);
      var _v8 = {
        container: _v5,
        perspectiveElem: _v4,
        startPos: _v0,
        endPos: _v0,
        type: _v1
      };
      return this.threeDElements.push(_v8), _v8;
    }, _v256.prototype.build3dContainers = function () {
      var _v0,
        _v1,
        _v2 = this.layers.length,
        _v3 = "";
      for (_v0 = 0; _v0 < _v2; _v0 += 1) this.layers[_v0].ddd && 3 !== this.layers[_v0].ty ? "3d" !== _v3 && (_v3 = "3d", _v1 = this.createThreeDContainer(_v0, "3d")) : "2d" !== _v3 && (_v3 = "2d", _v1 = this.createThreeDContainer(_v0, "2d")), _v1.endPos = Math.max(_v1.endPos, _v0);
      for (_v0 = (_v2 = this.threeDElements.length) - 1; _v0 >= 0; _v0 -= 1) this.resizerElem.appendChild(this.threeDElements[_v0].perspectiveElem);
    }, _v256.prototype.addTo3dContainer = function (_v0, _v1) {
      for (var _v2 = 0, _v3 = this.threeDElements.length; _v2 < _v3;) {
        if (_v1 <= this.threeDElements[_v2].endPos) {
          for (var _v4, _v5 = this.threeDElements[_v2].startPos; _v5 < _v1;) this.elements[_v5] && this.elements[_v5].getBaseElement && (_v4 = this.elements[_v5].getBaseElement()), _v5 += 1;
          _v4 ? this.threeDElements[_v2].container.insertBefore(_v0, _v4) : this.threeDElements[_v2].container.appendChild(_v0);
          break;
        }
        _v2 += 1;
      }
    }, _v256.prototype.configAnimation = function (_v0) {
      var _v1 = _v8("div"),
        _v2 = this.animationItem.wrapper,
        _v3 = _v1.style;
      _v3.width = _v0.w + "px", _v3.height = _v0.h + "px", this.resizerElem = _v1, _v34(_v1), _v3.transformStyle = "flat", _v3.mozTransformStyle = "flat", _v3.webkitTransformStyle = "flat", this.renderConfig.className && _v1.setAttribute("class", this.renderConfig.className), _v2.appendChild(_v1), _v3.overflow = "hidden";
      var _v4 = _v60("svg");
      _v4.setAttribute("width", "1"), _v4.setAttribute("height", "1"), _v34(_v4), this.resizerElem.appendChild(_v4);
      var _v5 = _v60("defs");
      _v4.appendChild(_v5), this.data = _v0, this.setupGlobalData(_v0, _v4), this.globalData.defs = _v5, this.layers = _v0.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize();
    }, _v256.prototype.destroy = function () {
      this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
      var _v0,
        _v1 = this.layers ? this.layers.length : 0;
      for (_v0 = 0; _v0 < _v1; _v0 += 1) this.elements[_v0] && this.elements[_v0].destroy && this.elements[_v0].destroy();
      this.elements.length = 0, this.destroyed = !0, this.animationItem = null;
    }, _v256.prototype.updateContainerSize = function () {
      var _v0,
        _v1,
        _v2,
        _v3,
        _v4 = this.animationItem.wrapper.offsetWidth,
        _v5 = this.animationItem.wrapper.offsetHeight,
        _v6 = _v4 / _v5;
      this.globalData.compSize.w / this.globalData.compSize.h > _v6 ? (_v0 = _v4 / this.globalData.compSize.w, _v1 = _v4 / this.globalData.compSize.w, _v2 = 0, _v3 = (_v5 - this.globalData.compSize.h * (_v4 / this.globalData.compSize.w)) / 2) : (_v0 = _v5 / this.globalData.compSize.h, _v1 = _v5 / this.globalData.compSize.h, _v2 = (_v4 - this.globalData.compSize.w * (_v5 / this.globalData.compSize.h)) / 2, _v3 = 0);
      var _v7 = this.resizerElem.style;
      _v7.webkitTransform = "matrix3d(" + _v0 + ",0,0,0,0," + _v1 + ",0,0,0,0,1,0," + _v2 + "," + _v3 + ",0,1)", _v7.transform = _v7.webkitTransform;
    }, _v256.prototype.renderFrame = _v229.prototype.renderFrame, _v256.prototype.hide = function () {
      this.resizerElem.style.display = "none";
    }, _v256.prototype.show = function () {
      this.resizerElem.style.display = "block";
    }, _v256.prototype.initItems = function () {
      if (this.buildAllItems(), this.camera) this.camera.setup();else {
        var _v0,
          _v1 = this.globalData.compSize.w,
          _v2 = this.globalData.compSize.h,
          _v3 = this.threeDElements.length;
        for (_v0 = 0; _v0 < _v3; _v0 += 1) {
          var _v4 = this.threeDElements[_v0].perspectiveElem.style;
          _v4.webkitPerspective = Math.sqrt(Math.pow(_v1, 2) + Math.pow(_v2, 2)) + "px", _v4.perspective = _v4.webkitPerspective;
        }
      }
    }, _v256.prototype.searchExtraCompositions = function (_v0) {
      var _v1,
        _v2 = _v0.length,
        _v3 = _v8("div");
      for (_v1 = 0; _v1 < _v2; _v1 += 1) if (_v0[_v1].xt) {
        var _v4 = this.createComp(_v0[_v1], _v3, this.globalData.comp, null);
        _v4.initExpressions(), this.globalData.projectInterface.registerComposition(_v4);
      }
    }, _v9([_v256, _v227, _v250], _v257), _v257.prototype._createBaseContainerElements = _v257.prototype.createContainerElements, _v257.prototype.createContainerElements = function () {
      this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement;
    }, _v257.prototype.addTo3dContainer = function (_v0, _v1) {
      for (var _v2, _v3 = 0; _v3 < _v1;) this.elements[_v3] && this.elements[_v3].getBaseElement && (_v2 = this.elements[_v3].getBaseElement()), _v3 += 1;
      _v2 ? this.layerElement.insertBefore(_v0, _v2) : this.layerElement.appendChild(_v0);
    }, _v257.prototype.createComp = function (_v0) {
      return this.supports3d ? new _v257(_v0, this.globalData, this) : new _v228(_v0, this.globalData, this);
    }, _v9([_v256], _v258), _v258.prototype.createComp = function (_v0) {
      return this.supports3d ? new _v257(_v0, this.globalData, this) : new _v228(_v0, this.globalData, this);
    };
    var _v259 = function (_v0) {
      function _v1(_v0) {
        for (var _v1 = 0, _v2 = _v0.layers.length; _v1 < _v2;) {
          if (_v0.layers[_v1].nm === _v0 || _v0.layers[_v1].ind === _v0) return _v0.elements[_v1].layerInterface;
          _v1 += 1;
        }
        return null;
      }
      return Object.defineProperty(_v1, "_name", {
        value: _v0.data.nm
      }), _v1.layer = _v1, _v1.pixelAspect = 1, _v1.height = _v0.data.h || _v0.globalData.compSize.h, _v1.width = _v0.data.w || _v0.globalData.compSize.w, _v1.pixelAspect = 1, _v1.frameDuration = 1 / _v0.globalData.frameRate, _v1.displayStartTime = 0, _v1.numLayers = _v0.layers.length, _v1;
    };
    function _v260(_v0) {
      return (_v260 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_v0) {
        return typeof _v0;
      } : function (_v0) {
        return _v0 && "function" == typeof Symbol && _v0.constructor === Symbol && _v0 !== Symbol.prototype ? "symbol" : typeof _v0;
      })(_v0);
    }
    function _v261(_v0, _v1) {
      var _v2,
        _v3 = this,
        _v4 = 256,
        _v5 = 6,
        _v6 = 52,
        _v7 = "random",
        _v8 = _v1.pow(_v4, _v5),
        _v9 = _v1.pow(2, _v6),
        _v10 = 2 * _v9,
        _v11 = _v4 - 1;
      function _v12(_v0, _v1, _v2) {
        var _v3 = [],
          _v4 = _v16(_v15((_v1 = !0 === _v1 ? {
            entropy: !0
          } : _v1 || {}).entropy ? [_v0, _v18(_v0)] : null === _v0 ? _v17() : _v0, 3), _v3),
          _v5 = new _v13(_v3),
          _v6 = function () {
            for (var _v0 = _v5.g(_v5), _v1 = _v8, _v2 = 0; _v0 < _v9;) _v0 = (_v0 + _v2) * _v4, _v1 *= _v4, _v2 = _v5.g(1);
            for (; _v0 >= _v10;) _v0 /= 2, _v1 /= 2, _v2 >>>= 1;
            return (_v0 + _v2) / _v1;
          };
        return _v6.int32 = function () {
          return 0 | _v5.g(4);
        }, _v6.quick = function () {
          return _v5.g(4) / 0;
        }, _v6.double = _v6, _v16(_v18(_v5.S), _v0), (_v1.pass || _v2 || function (_v0, _v1, _v2, _v3) {
          return (_v3 && (_v3.S && _v14(_v3, _v5), _v0.state = function () {
            return _v14(_v5, {});
          }), _v2) ? (_v1[_v7] = _v0, _v1) : _v0;
        })(_v6, _v4, "global" in _v1 ? _v1.global : this == _v1, _v1.state);
      }
      function _v13(_v0) {
        var _v1,
          _v2 = _v0.length,
          _v3 = this,
          _v4 = 0,
          _v5 = _v3.i = _v3.j = 0,
          _v6 = _v3.S = [];
        for (_v2 || (_v0 = [_v2++]); _v4 < _v4;) _v6[_v4] = _v4++;
        for (_v4 = 0; _v4 < _v4; _v4++) _v6[_v4] = _v6[_v5 = _v11 & _v5 + _v0[_v4 % _v2] + (_v1 = _v6[_v4])], _v6[_v5] = _v1;
        _v3.g = function (_v0) {
          for (var _v1, _v2 = 0, _v3 = _v3.i, _v4 = _v3.j, _v5 = _v3.S; _v0--;) _v1 = _v5[_v3 = _v11 & _v3 + 1], _v2 = _v2 * _v4 + _v5[_v11 & (_v5[_v3] = _v5[_v4 = _v11 & _v4 + _v1]) + (_v5[_v4] = _v1)];
          return _v3.i = _v3, _v3.j = _v4, _v2;
        };
      }
      function _v14(_v0, _v1) {
        return _v1.i = _v0.i, _v1.j = _v0.j, _v1.S = _v0.S.slice(), _v1;
      }
      function _v15(_v0, _v1) {
        var _v2,
          _v3 = [],
          _v4 = _v260(_v0);
        if (_v1 && "object" == _v4) for (_v2 in _v0) try {
          _v3.push(_v15(_v0[_v2], _v1 - 1));
        } catch (_v0) {}
        return _v3.length ? _v3 : "string" == _v4 ? _v0 : _v0 + "\0";
      }
      function _v16(_v0, _v1) {
        for (var _v2, _v3 = _v0 + "", _v4 = 0; _v4 < _v3.length;) _v1[_v11 & _v4] = _v11 & (_v2 ^= 19 * _v1[_v11 & _v4]) + _v3.charCodeAt(_v4++);
        return _v18(_v1);
      }
      function _v17() {
        try {
          if (_v2) return _v18(_v2.randomBytes(_v4));
          var _v0 = new Uint8Array(_v4);
          return (_v3.crypto || _v3.msCrypto).getRandomValues(_v0), _v18(_v0);
        } catch (_v0) {
          var _v1 = _v3.navigator,
            _v2 = _v1 && _v1.plugins;
          return [+new Date(), _v3, _v2, _v3.screen, _v18(_v0)];
        }
      }
      function _v18(_v0) {
        return String.fromCharCode.apply(0, _v0);
      }
      _v1["seed" + _v7] = _v12, _v16(_v1.random(), _v0);
    }
    function _v262(_v0) {
      _v261([], _v0);
    }
    var _v263 = {
      SHAPE: "shape"
    };
    function _v264(_v0) {
      return (_v264 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_v0) {
        return typeof _v0;
      } : function (_v0) {
        return _v0 && "function" == typeof Symbol && _v0.constructor === Symbol && _v0 !== Symbol.prototype ? "symbol" : typeof _v0;
      })(_v0);
    }
    var _v265 = function () {
        var _v0 = {},
          _v1 = _v27,
          _v2 = null,
          _v3 = null,
          _v4 = null,
          _v5 = null,
          _v6 = null,
          _v7 = {};
        function _v8() {
          _v7 = {};
        }
        function _v9(_v0) {
          return _v0.constructor === Array || _v0.constructor === Float32Array;
        }
        function _v10(_v0, _v1) {
          return "number" === _v0 || _v1 instanceof Number || "boolean" === _v0 || "string" === _v0;
        }
        function _v11(_v0) {
          var _v1 = _v264(_v0);
          if ("number" === _v1 || _v0 instanceof Number || "boolean" === _v1) return -_v0;
          if (_v9(_v0)) {
            var _v2,
              _v3 = _v0.length,
              _v4 = [];
            for (_v2 = 0; _v2 < _v3; _v2 += 1) _v4[_v2] = -_v0[_v2];
            return _v4;
          }
          return _v0.propType ? _v0.v : -_v0;
        }
        _v262(_v27);
        var _v12 = _v74.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
          _v13 = _v74.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
          _v14 = _v74.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;
        function _v15(_v0, _v1) {
          var _v2 = _v264(_v0),
            _v3 = _v264(_v1);
          if (_v10(_v2, _v0) && _v10(_v3, _v1) || "string" === _v2 || "string" === _v3) return _v0 + _v1;
          if (_v9(_v0) && _v10(_v3, _v1)) return _v0 = _v0.slice(0), _v0[0] += _v1, _v0;
          if (_v10(_v2, _v0) && _v9(_v1)) return (_v1 = _v1.slice(0))[0] = _v0 + _v1[0], _v1;
          if (_v9(_v0) && _v9(_v1)) {
            for (var _v4 = 0, _v5 = _v0.length, _v6 = _v1.length, _v7 = []; _v4 < _v5 || _v4 < _v6;) ("number" == typeof _v0[_v4] || _v0[_v4] instanceof Number) && ("number" == typeof _v1[_v4] || _v1[_v4] instanceof Number) ? _v7[_v4] = _v0[_v4] + _v1[_v4] : _v7[_v4] = void 0 === _v1[_v4] ? _v0[_v4] : _v0[_v4] || _v1[_v4], _v4 += 1;
            return _v7;
          }
          return 0;
        }
        var _v16 = _v15;
        function _v17(_v0, _v1) {
          var _v2 = _v264(_v0),
            _v3 = _v264(_v1);
          if (_v10(_v2, _v0) && _v10(_v3, _v1)) return "string" === _v2 && (_v0 = parseInt(_v0, 10)), "string" === _v3 && (_v1 = parseInt(_v1, 10)), _v0 - _v1;
          if (_v9(_v0) && _v10(_v3, _v1)) return _v0 = _v0.slice(0), _v0[0] -= _v1, _v0;
          if (_v10(_v2, _v0) && _v9(_v1)) return (_v1 = _v1.slice(0))[0] = _v0 - _v1[0], _v1;
          if (_v9(_v0) && _v9(_v1)) {
            for (var _v4 = 0, _v5 = _v0.length, _v6 = _v1.length, _v7 = []; _v4 < _v5 || _v4 < _v6;) ("number" == typeof _v0[_v4] || _v0[_v4] instanceof Number) && ("number" == typeof _v1[_v4] || _v1[_v4] instanceof Number) ? _v7[_v4] = _v0[_v4] - _v1[_v4] : _v7[_v4] = void 0 === _v1[_v4] ? _v0[_v4] : _v0[_v4] || _v1[_v4], _v4 += 1;
            return _v7;
          }
          return 0;
        }
        function _v18(_v0, _v1) {
          var _v2,
            _v3,
            _v4,
            _v5 = _v264(_v0),
            _v6 = _v264(_v1);
          if (_v10(_v5, _v0) && _v10(_v6, _v1)) return _v0 * _v1;
          if (_v9(_v0) && _v10(_v6, _v1)) {
            for (_v2 = _v13("float32", _v4 = _v0.length), _v3 = 0; _v3 < _v4; _v3 += 1) _v2[_v3] = _v0[_v3] * _v1;
            return _v2;
          }
          if (_v10(_v5, _v0) && _v9(_v1)) {
            for (_v2 = _v13("float32", _v4 = _v1.length), _v3 = 0; _v3 < _v4; _v3 += 1) _v2[_v3] = _v0 * _v1[_v3];
            return _v2;
          }
          return 0;
        }
        function _v19(_v0, _v1) {
          var _v2,
            _v3,
            _v4,
            _v5 = _v264(_v0),
            _v6 = _v264(_v1);
          if (_v10(_v5, _v0) && _v10(_v6, _v1)) return _v0 / _v1;
          if (_v9(_v0) && _v10(_v6, _v1)) {
            for (_v2 = _v13("float32", _v4 = _v0.length), _v3 = 0; _v3 < _v4; _v3 += 1) _v2[_v3] = _v0[_v3] / _v1;
            return _v2;
          }
          if (_v10(_v5, _v0) && _v9(_v1)) {
            for (_v2 = _v13("float32", _v4 = _v1.length), _v3 = 0; _v3 < _v4; _v3 += 1) _v2[_v3] = _v0 / _v1[_v3];
            return _v2;
          }
          return 0;
        }
        function _v20(_v0, _v1) {
          return "string" == typeof _v0 && (_v0 = parseInt(_v0, 10)), "string" == typeof _v1 && (_v1 = parseInt(_v1, 10)), _v0 % _v1;
        }
        var _v21 = _v15,
          _v22 = _v17,
          _v23 = _v18,
          _v24 = _v19,
          _v25 = _v20;
        function _v26(_v0, _v1, _v2) {
          if (_v1 > _v2) {
            var _v3 = _v2;
            _v2 = _v1, _v1 = _v3;
          }
          return _v1.min(_v1.max(_v0, _v1), _v2);
        }
        function _v27(_v0) {
          return _v0 / _v30;
        }
        var _v28 = _v27;
        function _v29(_v0) {
          return _v0 * _v30;
        }
        var _v30 = _v27,
          _v31 = [0, 0, 0, 0, 0, 0];
        function _v32(_v0, _v1) {
          if ("number" == typeof _v0 || _v0 instanceof Number) return _v1 = _v1 || 0, _v1.abs(_v0 - _v1);
          _v1 || (_v1 = _v31);
          var _v2,
            _v3 = _v1.min(_v0.length, _v1.length),
            _v4 = 0;
          for (_v2 = 0; _v2 < _v3; _v2 += 1) _v4 += _v1.pow(_v1[_v2] - _v0[_v2], 2);
          return _v1.sqrt(_v4);
        }
        function _v33(_v0) {
          return _v19(_v0, _v32(_v0));
        }
        function _v34(_v0) {
          var _v1,
            _v2,
            _v3 = _v0[0],
            _v4 = _v0[1],
            _v5 = _v0[2],
            _v6 = _v1.max(_v3, _v4, _v5),
            _v7 = _v1.min(_v3, _v4, _v5),
            _v8 = (_v6 + _v7) / 2;
          if (_v6 === _v7) _v1 = 0, _v2 = 0;else {
            var _v9 = _v6 - _v7;
            switch (_v2 = _v8 > .5 ? _v9 / (2 - _v6 - _v7) : _v9 / (_v6 + _v7), _v6) {
              case _v3:
                _v1 = (_v4 - _v5) / _v9 + 6 * (_v4 < _v5);
                break;
              case _v4:
                _v1 = (_v5 - _v3) / _v9 + 2;
                break;
              case _v5:
                _v1 = (_v3 - _v4) / _v9 + 4;
            }
            _v1 /= 6;
          }
          return [_v1, _v2, _v8, _v0[3]];
        }
        function _v35(_v0, _v1, _v2) {
          return (_v2 < 0 && (_v2 += 1), _v2 > 1 && (_v2 -= 1), _v2 < 1 / 6) ? _v0 + (_v1 - _v0) * 6 * _v2 : _v2 < .5 ? _v1 : _v2 < 2 / 3 ? _v0 + (_v1 - _v0) * (2 / 3 - _v2) * 6 : _v0;
        }
        function _v36(_v0) {
          var _v1,
            _v2,
            _v3,
            _v4 = _v0[0],
            _v5 = _v0[1],
            _v6 = _v0[2];
          if (0 === _v5) _v1 = _v6, _v3 = _v6, _v2 = _v6;else {
            var _v7 = _v6 < .5 ? _v6 * (1 + _v5) : _v6 + _v5 - _v6 * _v5,
              _v8 = 2 * _v6 - _v7;
            _v1 = _v35(_v8, _v7, _v4 + 1 / 3), _v2 = _v35(_v8, _v7, _v4), _v3 = _v35(_v8, _v7, _v4 - 1 / 3);
          }
          return [_v1, _v2, _v3, _v0[3]];
        }
        function _v37(_v0, _v1, _v2, _v3, _v4) {
          if ((void 0 === _v3 || void 0 === _v4) && (_v3 = _v1, _v4 = _v2, _v1 = 0, _v2 = 1), _v2 < _v1) {
            var _v5,
              _v6 = _v2;
            _v2 = _v1, _v1 = _v6;
          }
          if (_v0 <= _v1) return _v3;
          if (_v0 >= _v2) return _v4;
          var _v7 = _v2 === _v1 ? 0 : (_v0 - _v1) / (_v2 - _v1);
          if (!_v3.length) return _v3 + (_v4 - _v3) * _v7;
          var _v8 = _v3.length,
            _v9 = _v13("float32", _v8);
          for (_v5 = 0; _v5 < _v8; _v5 += 1) _v9[_v5] = _v3[_v5] + (_v4[_v5] - _v3[_v5]) * _v7;
          return _v9;
        }
        function _v38(_v0, _v1) {
          if (void 0 === _v1 && (void 0 === _v0 ? (_v0 = 0, _v1 = 1) : (_v1 = _v0, _v0 = void 0)), _v1.length) {
            var _v2,
              _v3 = _v1.length;
            _v0 || (_v0 = _v13("float32", _v3));
            var _v4 = _v13("float32", _v3),
              _v5 = _v27.random();
            for (_v2 = 0; _v2 < _v3; _v2 += 1) _v4[_v2] = _v0[_v2] + _v5 * (_v1[_v2] - _v0[_v2]);
            return _v4;
          }
          return void 0 === _v0 && (_v0 = 0), _v0 + _v27.random() * (_v1 - _v0);
        }
        function _v39(_v0, _v1, _v2, _v3) {
          var _v4,
            _v5,
            _v6,
            _v7 = _v0.length,
            _v8 = _v99.newElement();
          _v8.setPathData(!!_v3, _v7);
          var _v9 = [0, 0];
          for (_v4 = 0; _v4 < _v7; _v4 += 1) _v5 = _v1 && _v1[_v4] ? _v1[_v4] : _v9, _v6 = _v2 && _v2[_v4] ? _v2[_v4] : _v9, _v8.setTripleAt(_v0[_v4][0], _v0[_v4][1], _v6[0] + _v0[_v4][0], _v6[1] + _v0[_v4][1], _v5[0] + _v0[_v4][0], _v5[1] + _v0[_v4][1], _v4, !0);
          return _v8;
        }
        function _v40(_v0, _v1, _v2) {
          function _v3(_v0) {
            return _v0;
          }
          if (!_v0.globalData.renderConfig.runExpressions) return _v3;
          var _v4,
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
            _v25,
            _v26,
            _v27,
            _v28,
            _v29,
            _v30,
            _v31,
            _v32,
            _v33,
            _v34,
            _v35,
            _v36 = _v1.x,
            _v37 = /velocity(?![\w\d])/.test(_v36),
            _v38 = -1 !== _v36.indexOf("random"),
            _v39 = _v0.data.ty,
            _v40 = _v2;
          _v40._name = _v0.data.nm, _v40.valueAtTime = _v40.getValueAtTime, Object.defineProperty(_v40, "value", {
            get: function () {
              return _v40.v;
            }
          }), _v0.comp.frameDuration = 1 / _v0.comp.globalData.frameRate, _v0.comp.displayStartTime = 0;
          var _v41 = _v0.data.ip / _v0.comp.globalData.frameRate,
            _v42 = _v0.data.op / _v0.comp.globalData.frameRate,
            _v43 = _v0.data.sw ? _v0.data.sw : 0,
            _v44 = _v0.data.sh ? _v0.data.sh : 0,
            _v45 = _v0.data.nm,
            _v46 = eval("[function _expression_function(){" + _v36 + ";scoped_bm_rt=$bm_rt}]")[0],
            _v47 = _v2.kf ? _v1.k.length : 0,
            _v48 = !this.data || !0 !== this.data.hd,
            _v49 = function (_v0, _v1) {
              var _v2,
                _v3,
                _v4 = this.pv.length ? this.pv.length : 1,
                _v5 = _v13("float32", _v4);
              _v0 = 5;
              var _v6 = _v1.floor(_v28 * _v0);
              for (_v2 = 0, _v3 = 0; _v2 < _v6;) {
                for (_v3 = 0; _v3 < _v4; _v3 += 1) _v5[_v3] += -_v1 + 2 * _v1 * _v27.random();
                _v2 += 1;
              }
              var _v7 = _v28 * _v0,
                _v8 = _v7 - _v1.floor(_v7),
                _v9 = _v13("float32", _v4);
              if (_v4 > 1) {
                for (_v3 = 0; _v3 < _v4; _v3 += 1) _v9[_v3] = this.pv[_v3] + _v5[_v3] + (-_v1 + 2 * _v1 * _v27.random()) * _v8;
                return _v9;
              }
              return this.pv + _v5[0] + (-_v1 + 2 * _v1 * _v27.random()) * _v8;
            }.bind(this);
          function _v50(_v0, _v1) {
            return _v8(_v0, _v1, !0);
          }
          function _v51(_v0, _v1) {
            return _v10(_v0, _v1, !0);
          }
          _v40.loopIn && (_v9 = _v8 = _v40.loopIn.bind(_v40)), _v40.loopOut && (_v11 = _v10 = _v40.loopOut.bind(_v40)), _v40.smooth && (_v12 = _v40.smooth.bind(_v40)), this.getValueAtTime && (_v25 = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (_v26 = this.getVelocityAtTime.bind(this));
          var _v52 = _v0.comp.globalData.projectInterface.bind(_v0.comp.globalData.projectInterface);
          function _v53(_v0, _v1) {
            var _v2 = [_v1[0] - _v0[0], _v1[1] - _v0[1], _v1[2] - _v0[2]],
              _v3 = _v1.atan2(_v2[0], _v1.sqrt(_v2[1] * _v2[1] + _v2[2] * _v2[2])) / _v30;
            return [-_v1.atan2(_v2[1], _v2[2]) / _v30, _v3, 0];
          }
          function _v54(_v0, _v1, _v2, _v3, _v4) {
            return _v57(_v13, _v0, _v1, _v2, _v3, _v4);
          }
          function _v55(_v0, _v1, _v2, _v3, _v4) {
            return _v57(_v12, _v0, _v1, _v2, _v3, _v4);
          }
          function _v56(_v0, _v1, _v2, _v3, _v4) {
            return _v57(_v14, _v0, _v1, _v2, _v3, _v4);
          }
          function _v57(_v0, _v1, _v2, _v3, _v4, _v5) {
            void 0 === _v4 ? (_v4 = _v2, _v5 = _v3) : _v1 = (_v1 - _v2) / (_v3 - _v2), _v1 > 1 ? _v1 = 1 : _v1 < 0 && (_v1 = 0);
            var _v6 = _v0(_v1);
            if (_v9(_v4)) {
              var _v7,
                _v8 = _v4.length,
                _v9 = _v13("float32", _v8);
              for (_v7 = 0; _v7 < _v8; _v7 += 1) _v9[_v7] = (_v5[_v7] - _v4[_v7]) * _v6 + _v4[_v7];
              return _v9;
            }
            return (_v5 - _v4) * _v6 + _v4;
          }
          function _v58(_v0) {
            var _v1,
              _v2,
              _v3,
              _v4 = _v1.k.length;
            if (_v1.k.length && "number" != typeof _v1.k[0]) {
              if (_v2 = -1, (_v0 *= _v0.comp.globalData.frameRate) < _v1.k[0].t) _v2 = 1, _v3 = _v1.k[0].t;else {
                for (_v1 = 0; _v1 < _v4 - 1; _v1 += 1) if (_v0 === _v1.k[_v1].t) {
                  _v2 = _v1 + 1, _v3 = _v1.k[_v1].t;
                  break;
                } else if (_v0 > _v1.k[_v1].t && _v0 < _v1.k[_v1 + 1].t) {
                  _v0 - _v1.k[_v1].t > _v1.k[_v1 + 1].t - _v0 ? (_v2 = _v1 + 2, _v3 = _v1.k[_v1 + 1].t) : (_v2 = _v1 + 1, _v3 = _v1.k[_v1].t);
                  break;
                }
                -1 === _v2 && (_v2 = _v1 + 1, _v3 = _v1.k[_v1].t);
              }
            } else _v2 = 0, _v3 = 0;
            var _v5 = {};
            return _v5.index = _v2, _v5.time = _v3 / _v0.comp.globalData.frameRate, _v5;
          }
          function _v59(_v0) {
            if (!_v1.k.length || "number" == typeof _v1.k[0]) throw Error("The property has no keyframe at index " + _v0);
            _v0 -= 1;
            var _v1,
              _v2,
              _v3 = {
                time: _v1.k[_v0].t / _v0.comp.globalData.frameRate,
                value: []
              },
              _v4 = Object.prototype.hasOwnProperty.call(_v1.k[_v0], "s") ? _v1.k[_v0].s : _v1.k[_v0 - 1].e;
            for (_v2 = _v4.length, _v1 = 0; _v1 < _v2; _v1 += 1) _v3[_v1] = _v4[_v1], _v3.value[_v1] = _v4[_v1];
            return _v3;
          }
          function _v60(_v0, _v1) {
            return _v1 || (_v1 = _v0.comp.globalData.frameRate), _v0 / _v1;
          }
          function _v61(_v0, _v1) {
            return _v0 || 0 === _v0 || (_v0 = _v28), _v1 || (_v1 = _v0.comp.globalData.frameRate), _v0 * _v1;
          }
          function _v62(_v0) {
            _v27.seedrandom(_v69 + _v0);
          }
          function _v63() {
            return _v0.sourceRectAtTime();
          }
          function _v64(_v0, _v1) {
            return "string" == typeof _v30 ? void 0 === _v1 ? _v30.substring(_v0) : _v30.substring(_v0, _v1) : "";
          }
          function _v65(_v0, _v1) {
            return "string" == typeof _v30 ? void 0 === _v1 ? _v30.substr(_v0) : _v30.substr(_v0, _v1) : "";
          }
          function _v66(_v0) {
            _v28 = 0 === _v0 ? 0 : _v1.floor(_v28 * _v0) / _v0, _v30 = _v25(_v28);
          }
          var _v67 = _v0.data.ind,
            _v68 = !!(_v0.hierarchy && _v0.hierarchy.length),
            _v69 = _v1.floor(0 * _v1.random()),
            _v70 = _v0.globalData;
          function _v71(_v0) {
            return (_v30 = _v0, this.frameExpressionId === _v0.globalData.frameId && "textSelector" !== this.propType) ? _v30 : ("textSelector" === this.propType && (_v32 = this.textIndex, _v33 = this.textTotal, _v34 = this.selectorValue), _v22 || (_v31 = _v0.layerInterface.text, _v22 = _v0.layerInterface, _v23 = _v0.comp.compInterface, _v13 = _v22.toWorld.bind(_v22), _v14 = _v22.fromWorld.bind(_v22), _v15 = _v22.fromComp.bind(_v22), _v16 = _v22.toComp.bind(_v22), _v24 = _v22.mask ? _v22.mask.bind(_v22) : null, _v17 = _v15), !_v4 && (_v5 = _v4 = _v0.layerInterface("ADBE Transform Group"), _v4 && (_v20 = _v4.anchorPoint)), 4 !== _v39 || _v6 || (_v6 = _v22("ADBE Root Vectors Group")), _v7 || (_v7 = _v22(4)), (_v68 = !!(_v0.hierarchy && _v0.hierarchy.length)) && !_v35 && (_v35 = _v0.hierarchy[0].layerInterface), _v28 = this.comp.renderedFrame / this.comp.globalData.frameRate, _v38 && _v62(_v69 + _v28), _v37 && (_v29 = _v26(_v28)), _v46(), this.frameExpressionId = _v0.globalData.frameId, _v27 = _v27.propType === _v263.SHAPE ? _v27.v : _v27);
          }
          return _v71.__preventDeadCodeRemoval = [_v5, _v20, _v28, _v29, _v41, _v42, _v43, _v44, _v45, _v9, _v11, _v12, _v16, _v17, _v13, _v14, _v24, _v18, _v19, _v21, _v23, _v47, _v48, _v49, _v50, _v51, _v52, _v53, _v54, _v55, _v56, _v58, _v59, _v31, _v32, _v33, _v34, _v60, _v61, _v63, _v64, _v65, _v66, _v67, _v70], _v71;
        }
        return _v0.initiateExpression = _v40, _v0.__preventDeadCodeRemoval = [_v2, _v3, _v4, _v5, _v6, _v11, _v16, _v21, _v22, _v23, _v24, _v25, _v26, _v28, _v29, _v30, _v33, _v34, _v36, _v37, _v38, _v39, _v7], _v0.resetFrame = _v8, _v0;
      }(),
      _v266 = function () {
        var _v0 = {};
        return _v0.initExpressions = function t(_v0) {
          var _v1 = 0,
            _v2 = [];
          function _v3() {
            _v1 += 1;
          }
          function _v4() {
            0 == (_v1 -= 1) && _v6();
          }
          function _v5(_v0) {
            -1 === _v2.indexOf(_v0) && _v2.push(_v0);
          }
          function _v6() {
            var _v0,
              _v1 = _v2.length;
            for (_v0 = 0; _v0 < _v1; _v0 += 1) _v2[_v0].release();
            _v2.length = 0;
          }
          _v0.renderer.compInterface = _v259(_v0.renderer), _v0.renderer.globalData.projectInterface.registerComposition(_v0.renderer), _v0.renderer.globalData.pushExpression = _v3, _v0.renderer.globalData.popExpression = _v4, _v0.renderer.globalData.registerExpressionProperty = _v5;
        }, _v0.resetFrame = _v265.resetFrame, _v0;
      }(),
      _v267 = function () {
        function _v0(_v0, _v1) {
          this._mask = _v0, this._data = _v1;
        }
        return Object.defineProperty(_v0.prototype, "maskPath", {
          get: function () {
            return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop;
          }
        }), Object.defineProperty(_v0.prototype, "maskOpacity", {
          get: function () {
            return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v;
          }
        }), function (_v0) {
          var _v1,
            _v2 = _v14(_v0.viewData.length),
            _v3 = _v0.viewData.length;
          for (_v1 = 0; _v1 < _v3; _v1 += 1) _v2[_v1] = new _v0(_v0.viewData[_v1], _v0.masksProperties[_v1]);
          return function (_v0) {
            for (_v1 = 0; _v1 < _v3;) {
              if (_v0.masksProperties[_v1].nm === _v0) return _v2[_v1];
              _v1 += 1;
            }
            return null;
          };
        };
      }(),
      _v268 = function () {
        var _v0 = {
            pv: 0,
            v: 0,
            mult: 1
          },
          _v1 = {
            pv: [0, 0, 0],
            v: [0, 0, 0],
            mult: 1
          };
        function _v2(_v0, _v1, _v2) {
          Object.defineProperty(_v0, "velocity", {
            get: function () {
              return _v1.getVelocityAtTime(_v1.comp.currentFrame);
            }
          }), _v0.numKeys = _v1.keyframes ? _v1.keyframes.length : 0, _v0.key = function (_v0) {
            if (!_v0.numKeys) return 0;
            var _v1 = "";
            _v1 = "s" in _v1.keyframes[_v0 - 1] ? _v1.keyframes[_v0 - 1].s : "e" in _v1.keyframes[_v0 - 2] ? _v1.keyframes[_v0 - 2].e : _v1.keyframes[_v0 - 2].s;
            var _v2 = "unidimensional" === _v2 ? new Number(_v1) : Object.assign({}, _v1);
            return _v2.time = _v1.keyframes[_v0 - 1].t / _v1.elem.comp.globalData.frameRate, _v2.value = "unidimensional" === _v2 ? _v1[0] : _v1, _v2;
          }, _v0.valueAtTime = _v1.getValueAtTime, _v0.speedAtTime = _v1.getSpeedAtTime, _v0.velocityAtTime = _v1.getVelocityAtTime, _v0.propertyGroup = _v1.propertyGroup;
        }
        function _v3(_v0) {
          _v0 && "pv" in _v0 || (_v0 = _v0);
          var _v1 = 1 / _v0.mult,
            _v2 = _v0.pv * _v1,
            _v3 = new Number(_v2);
          return _v3.value = _v2, _v2(_v3, _v0, "unidimensional"), function () {
            return _v0.k && _v0.getValue(), _v2 = _v0.v * _v1, _v3.value !== _v2 && ((_v3 = new Number(_v2)).value = _v2, _v3[0] = _v2, _v2(_v3, _v0, "unidimensional")), _v3;
          };
        }
        function _v4(_v0) {
          _v0 && "pv" in _v0 || (_v0 = _v1);
          var _v1 = 1 / _v0.mult,
            _v2 = _v0.data && _v0.data.l || _v0.pv.length,
            _v3 = _v13("float32", _v2),
            _v4 = _v13("float32", _v2);
          return _v3.value = _v4, _v2(_v3, _v0, "multidimensional"), function () {
            _v0.k && _v0.getValue();
            for (var _v0 = 0; _v0 < _v2; _v0 += 1) _v4[_v0] = _v0.v[_v0] * _v1, _v3[_v0] = _v4[_v0];
            return _v3;
          };
        }
        function _v5() {
          return _v0;
        }
        return function (_v0) {
          return _v0 ? "unidimensional" === _v0.propType ? _v3(_v0) : _v4(_v0) : _v5;
        };
      }(),
      _v269 = function (_v0) {
        var _v1, _v2, _v3, _v4;
        function _v5(_v0) {
          switch (_v0) {
            case "scale":
            case "Scale":
            case "ADBE Scale":
            case 6:
              return _v5.scale;
            case "rotation":
            case "Rotation":
            case "ADBE Rotation":
            case "ADBE Rotate Z":
            case 10:
              return _v5.rotation;
            case "ADBE Rotate X":
              return _v5.xRotation;
            case "ADBE Rotate Y":
              return _v5.yRotation;
            case "position":
            case "Position":
            case "ADBE Position":
            case 2:
              return _v5.position;
            case "ADBE Position_0":
              return _v5.xPosition;
            case "ADBE Position_1":
              return _v5.yPosition;
            case "ADBE Position_2":
              return _v5.zPosition;
            case "anchorPoint":
            case "AnchorPoint":
            case "Anchor Point":
            case "ADBE AnchorPoint":
            case 1:
              return _v5.anchorPoint;
            case "opacity":
            case "Opacity":
            case 11:
              return _v5.opacity;
            default:
              return null;
          }
        }
        return Object.defineProperty(_v5, "rotation", {
          get: _v268(_v0.r || _v0.rz)
        }), Object.defineProperty(_v5, "zRotation", {
          get: _v268(_v0.rz || _v0.r)
        }), Object.defineProperty(_v5, "xRotation", {
          get: _v268(_v0.rx)
        }), Object.defineProperty(_v5, "yRotation", {
          get: _v268(_v0.ry)
        }), Object.defineProperty(_v5, "scale", {
          get: _v268(_v0.s)
        }), _v0.p ? _v4 = _v268(_v0.p) : (_v1 = _v268(_v0.px), _v2 = _v268(_v0.py), _v0.pz && (_v3 = _v268(_v0.pz))), Object.defineProperty(_v5, "position", {
          get: function () {
            return _v0.p ? _v4() : [_v1(), _v2(), _v3 ? _v3() : 0];
          }
        }), Object.defineProperty(_v5, "xPosition", {
          get: _v268(_v0.px)
        }), Object.defineProperty(_v5, "yPosition", {
          get: _v268(_v0.py)
        }), Object.defineProperty(_v5, "zPosition", {
          get: _v268(_v0.pz)
        }), Object.defineProperty(_v5, "anchorPoint", {
          get: _v268(_v0.a)
        }), Object.defineProperty(_v5, "opacity", {
          get: _v268(_v0.o)
        }), Object.defineProperty(_v5, "skew", {
          get: _v268(_v0.sk)
        }), Object.defineProperty(_v5, "skewAxis", {
          get: _v268(_v0.sa)
        }), Object.defineProperty(_v5, "orientation", {
          get: _v268(_v0.or)
        }), _v5;
      },
      _v270 = function () {
        function _v0(_v0) {
          var _v1 = new _v103();
          return void 0 !== _v0 ? this._elem.finalTransform.mProp.getValueAtTime(_v0).clone(_v1) : this._elem.finalTransform.mProp.applyToMatrix(_v1), _v1;
        }
        function _v1(_v0, _v1) {
          var _v2 = this.getMatrix(_v1);
          return _v2.props[12] = 0, _v2.props[13] = 0, _v2.props[14] = 0, this.applyPoint(_v2, _v0);
        }
        function _v2(_v0, _v1) {
          var _v2 = this.getMatrix(_v1);
          return this.applyPoint(_v2, _v0);
        }
        function _v3(_v0, _v1) {
          var _v2 = this.getMatrix(_v1);
          return _v2.props[12] = 0, _v2.props[13] = 0, _v2.props[14] = 0, this.invertPoint(_v2, _v0);
        }
        function _v4(_v0, _v1) {
          var _v2 = this.getMatrix(_v1);
          return this.invertPoint(_v2, _v0);
        }
        function _v5(_v0, _v1) {
          if (this._elem.hierarchy && this._elem.hierarchy.length) {
            var _v2,
              _v3 = this._elem.hierarchy.length;
            for (_v2 = 0; _v2 < _v3; _v2 += 1) this._elem.hierarchy[_v2].finalTransform.mProp.applyToMatrix(_v0);
          }
          return _v0.applyToPointArray(_v1[0], _v1[1], _v1[2] || 0);
        }
        function _v6(_v0, _v1) {
          if (this._elem.hierarchy && this._elem.hierarchy.length) {
            var _v2,
              _v3 = this._elem.hierarchy.length;
            for (_v2 = 0; _v2 < _v3; _v2 += 1) this._elem.hierarchy[_v2].finalTransform.mProp.applyToMatrix(_v0);
          }
          return _v0.inversePoint(_v1);
        }
        function _v7(_v0) {
          var _v1 = new _v103();
          if (_v1.reset(), this._elem.finalTransform.mProp.applyToMatrix(_v1), this._elem.hierarchy && this._elem.hierarchy.length) {
            var _v2,
              _v3 = this._elem.hierarchy.length;
            for (_v2 = 0; _v2 < _v3; _v2 += 1) this._elem.hierarchy[_v2].finalTransform.mProp.applyToMatrix(_v1);
          }
          return _v1.inversePoint(_v0);
        }
        function _v8() {
          return [1, 1, 1, 1];
        }
        return function (_v0) {
          function _v1(_v0) {
            _v3.mask = new _v267(_v0, _v0);
          }
          function _v2(_v0) {
            _v3.effect = _v0;
          }
          function _v3(_v0) {
            switch (_v0) {
              case "ADBE Root Vectors Group":
              case "Contents":
              case 2:
                return _v3.shapeInterface;
              case 1:
              case 6:
              case "Transform":
              case "transform":
              case "ADBE Transform Group":
                return _v4;
              case 4:
              case "ADBE Effect Parade":
              case "effects":
              case "Effects":
                return _v3.effect;
              case "ADBE Text Properties":
                return _v3.textInterface;
              default:
                return null;
            }
          }
          _v3.getMatrix = _v0, _v3.invertPoint = _v6, _v3.applyPoint = _v5, _v3.toWorld = _v2, _v3.toWorldVec = _v1, _v3.fromWorld = _v4, _v3.fromWorldVec = _v3, _v3.toComp = _v2, _v3.fromComp = _v7, _v3.sampleImage = _v8, _v3.sourceRectAtTime = _v0.sourceRectAtTime.bind(_v0), _v3._elem = _v0;
          var _v4 = _v269(_v0.finalTransform.mProp),
            _v5 = _v10(_v4, "anchorPoint");
          return Object.defineProperties(_v3, {
            hasParent: {
              get: function () {
                return _v0.hierarchy.length;
              }
            },
            parent: {
              get: function () {
                return _v0.hierarchy[0].layerInterface;
              }
            },
            rotation: _v10(_v4, "rotation"),
            scale: _v10(_v4, "scale"),
            position: _v10(_v4, "position"),
            opacity: _v10(_v4, "opacity"),
            anchorPoint: _v5,
            anchor_point: _v5,
            transform: {
              get: function () {
                return _v4;
              }
            },
            active: {
              get: function () {
                return _v0.isInRange;
              }
            }
          }), _v3.startTime = _v0.data.st, _v3.index = _v0.data.ind, _v3.source = _v0.data.refId, _v3.height = 0 === _v0.data.ty ? _v0.data.h : 100, _v3.width = 0 === _v0.data.ty ? _v0.data.w : 100, _v3.inPoint = _v0.data.ip / _v0.comp.globalData.frameRate, _v3.outPoint = _v0.data.op / _v0.comp.globalData.frameRate, _v3._name = _v0.data.nm, _v3.registerMaskInterface = _v1, _v3.registerEffectsInterface = _v2, _v3;
        };
      }(),
      _v271 = function (_v0, _v1) {
        return function (_v0) {
          return (_v0 = void 0 === _v0 ? 1 : _v0) <= 0 ? _v0 : _v1(_v0 - 1);
        };
      },
      _v272 = function (_v0, _v1) {
        var _v2 = {
          _name: _v0
        };
        return function (_v0) {
          return (_v0 = void 0 === _v0 ? 1 : _v0) <= 0 ? _v2 : _v1(_v0 - 1);
        };
      },
      _v273 = function () {
        function _v0(_v0, _v1, _v2, _v3) {
          function _v4(_v0) {
            for (var _v1 = _v0.ef, _v2 = 0, _v3 = _v1.length; _v2 < _v3;) {
              if (_v0 === _v1[_v2].nm || _v0 === _v1[_v2].mn || _v0 === _v1[_v2].ix) {
                if (5 === _v1[_v2].ty) return _v7[_v2];
                return _v7[_v2]();
              }
              _v2 += 1;
            }
            throw Error();
          }
          var _v5,
            _v6 = _v271(_v4, _v2),
            _v7 = [],
            _v8 = _v0.ef.length;
          for (_v5 = 0; _v5 < _v8; _v5 += 1) 5 === _v0.ef[_v5].ty ? _v7.push(_v0(_v0.ef[_v5], _v1.effectElements[_v5], _v1.effectElements[_v5].propertyGroup, _v3)) : _v7.push(_v1(_v1.effectElements[_v5], _v0.ef[_v5].ty, _v3, _v6));
          return "ADBE Color Control" === _v0.mn && Object.defineProperty(_v4, "color", {
            get: function () {
              return _v7[0]();
            }
          }), Object.defineProperties(_v4, {
            numProperties: {
              get: function () {
                return _v0.np;
              }
            },
            _name: {
              value: _v0.nm
            },
            propertyGroup: {
              value: _v6
            }
          }), _v4.enabled = 0 !== _v0.en, _v4.active = _v4.enabled, _v4;
        }
        function _v1(_v0, _v1, _v2, _v3) {
          var _v4 = _v268(_v0.p);
          function _v5() {
            return 10 === _v1 ? _v2.comp.compInterface(_v0.p.v) : _v4();
          }
          return _v0.p.setGroupProperty && _v0.p.setGroupProperty(_v272("", _v3)), _v5;
        }
        return {
          createEffectsInterface: function (_v0, _v1) {
            if (_v0.effectsManager) {
              var _v2,
                _v3 = [],
                _v4 = _v0.data.ef,
                _v5 = _v0.effectsManager.effectElements.length;
              for (_v2 = 0; _v2 < _v5; _v2 += 1) _v3.push(_v0(_v4[_v2], _v0.effectsManager.effectElements[_v2], _v1, _v0));
              var _v6 = _v0.data.ef || [],
                _v7 = function (_v0) {
                  for (_v2 = 0, _v5 = _v6.length; _v2 < _v5;) {
                    if (_v0 === _v6[_v2].nm || _v0 === _v6[_v2].mn || _v0 === _v6[_v2].ix) return _v3[_v2];
                    _v2 += 1;
                  }
                  return null;
                };
              return Object.defineProperty(_v7, "numProperties", {
                get: function () {
                  return _v6.length;
                }
              }), _v7;
            }
            return null;
          }
        };
      }(),
      _v274 = function (_v0, _v1, _v2) {
        var _v3 = _v1.sh;
        function _v4(_v0) {
          return "Shape" === _v0 || "shape" === _v0 || "Path" === _v0 || "path" === _v0 || "ADBE Vector Shape" === _v0 || 2 === _v0 ? _v4.path : null;
        }
        var _v5 = _v271(_v4, _v2);
        return _v3.setGroupProperty(_v272("Path", _v5)), Object.defineProperties(_v4, {
          path: {
            get: function () {
              return _v3.k && _v3.getValue(), _v3;
            }
          },
          shape: {
            get: function () {
              return _v3.k && _v3.getValue(), _v3;
            }
          },
          _name: {
            value: _v0.nm
          },
          ix: {
            value: _v0.ix
          },
          propertyIndex: {
            value: _v0.ix
          },
          mn: {
            value: _v0.mn
          },
          propertyGroup: {
            value: _v2
          }
        }), _v4;
      },
      _v275 = function () {
        function _v0(_v0, _v1, _v2) {
          var _v3,
            _v4 = [],
            _v5 = _v0 ? _v0.length : 0;
          for (_v3 = 0; _v3 < _v5; _v3 += 1) "gr" === _v0[_v3].ty ? _v4.push(_v2(_v0[_v3], _v1[_v3], _v2)) : "fl" === _v0[_v3].ty ? _v4.push(_v3(_v0[_v3], _v1[_v3], _v2)) : "st" === _v0[_v3].ty ? _v4.push(_v6(_v0[_v3], _v1[_v3], _v2)) : "tm" === _v0[_v3].ty ? _v4.push(_v7(_v0[_v3], _v1[_v3], _v2)) : "tr" === _v0[_v3].ty || ("el" === _v0[_v3].ty ? _v4.push(_v9(_v0[_v3], _v1[_v3], _v2)) : "sr" === _v0[_v3].ty ? _v4.push(_v10(_v0[_v3], _v1[_v3], _v2)) : "sh" === _v0[_v3].ty ? _v4.push(_v274(_v0[_v3], _v1[_v3], _v2)) : "rc" === _v0[_v3].ty ? _v4.push(_v11(_v0[_v3], _v1[_v3], _v2)) : "rd" === _v0[_v3].ty ? _v4.push(_v12(_v0[_v3], _v1[_v3], _v2)) : "rp" === _v0[_v3].ty ? _v4.push(_v13(_v0[_v3], _v1[_v3], _v2)) : "gf" === _v0[_v3].ty ? _v4.push(_v4(_v0[_v3], _v1[_v3], _v2)) : _v4.push(_v5(_v0[_v3], _v1[_v3])));
          return _v4;
        }
        function _v1(_v0, _v1, _v2) {
          var _v3,
            _v4 = function (_v0) {
              for (var _v1 = 0, _v2 = _v3.length; _v1 < _v2;) {
                if (_v3[_v1]._name === _v0 || _v3[_v1].mn === _v0 || _v3[_v1].propertyIndex === _v0 || _v3[_v1].ix === _v0 || _v3[_v1].ind === _v0) return _v3[_v1];
                _v1 += 1;
              }
              return "number" == typeof _v0 ? _v3[_v0 - 1] : null;
            };
          _v4.propertyGroup = _v271(_v4, _v2), _v3 = _v0(_v0.it, _v1.it, _v4.propertyGroup), _v4.numProperties = _v3.length;
          var _v5 = _v8(_v0.it[_v0.it.length - 1], _v1.it[_v1.it.length - 1], _v4.propertyGroup);
          return _v4.transform = _v5, _v4.propertyIndex = _v0.cix, _v4._name = _v0.nm, _v4;
        }
        function _v2(_v0, _v1, _v2) {
          var _v3 = function (_v0) {
            switch (_v0) {
              case "ADBE Vectors Group":
              case "Contents":
              case 2:
                return _v3.content;
              default:
                return _v3.transform;
            }
          };
          _v3.propertyGroup = _v271(_v3, _v2);
          var _v4 = _v1(_v0, _v1, _v3.propertyGroup),
            _v5 = _v8(_v0.it[_v0.it.length - 1], _v1.it[_v1.it.length - 1], _v3.propertyGroup);
          return _v3.content = _v4, _v3.transform = _v5, Object.defineProperty(_v3, "_name", {
            get: function () {
              return _v0.nm;
            }
          }), _v3.numProperties = _v0.np, _v3.propertyIndex = _v0.ix, _v3.nm = _v0.nm, _v3.mn = _v0.mn, _v3;
        }
        function _v3(_v0, _v1, _v2) {
          function _v3(_v0) {
            return "Color" === _v0 || "color" === _v0 ? _v3.color : "Opacity" === _v0 || "opacity" === _v0 ? _v3.opacity : null;
          }
          return Object.defineProperties(_v3, {
            color: {
              get: _v268(_v1.c)
            },
            opacity: {
              get: _v268(_v1.o)
            },
            _name: {
              value: _v0.nm
            },
            mn: {
              value: _v0.mn
            }
          }), _v1.c.setGroupProperty(_v272("Color", _v2)), _v1.o.setGroupProperty(_v272("Opacity", _v2)), _v3;
        }
        function _v4(_v0, _v1, _v2) {
          function _v3(_v0) {
            return "Start Point" === _v0 || "start point" === _v0 ? _v3.startPoint : "End Point" === _v0 || "end point" === _v0 ? _v3.endPoint : "Opacity" === _v0 || "opacity" === _v0 ? _v3.opacity : null;
          }
          return Object.defineProperties(_v3, {
            startPoint: {
              get: _v268(_v1.s)
            },
            endPoint: {
              get: _v268(_v1.e)
            },
            opacity: {
              get: _v268(_v1.o)
            },
            type: {
              get: function () {
                return "a";
              }
            },
            _name: {
              value: _v0.nm
            },
            mn: {
              value: _v0.mn
            }
          }), _v1.s.setGroupProperty(_v272("Start Point", _v2)), _v1.e.setGroupProperty(_v272("End Point", _v2)), _v1.o.setGroupProperty(_v272("Opacity", _v2)), _v3;
        }
        function _v5() {
          return function () {
            return null;
          };
        }
        function _v6(_v0, _v1, _v2) {
          var _v3,
            _v4 = _v271(_v9, _v2),
            _v5 = _v271(_v8, _v4);
          function _v6(_v0) {
            Object.defineProperty(_v8, _v0.d[_v0].nm, {
              get: _v268(_v1.d.dataProps[_v0].p)
            });
          }
          var _v7 = _v0.d ? _v0.d.length : 0,
            _v8 = {};
          for (_v3 = 0; _v3 < _v7; _v3 += 1) _v6(_v3), _v1.d.dataProps[_v3].p.setGroupProperty(_v5);
          function _v9(_v0) {
            return "Color" === _v0 || "color" === _v0 ? _v9.color : "Opacity" === _v0 || "opacity" === _v0 ? _v9.opacity : "Stroke Width" === _v0 || "stroke width" === _v0 ? _v9.strokeWidth : null;
          }
          return Object.defineProperties(_v9, {
            color: {
              get: _v268(_v1.c)
            },
            opacity: {
              get: _v268(_v1.o)
            },
            strokeWidth: {
              get: _v268(_v1.w)
            },
            dash: {
              get: function () {
                return _v8;
              }
            },
            _name: {
              value: _v0.nm
            },
            mn: {
              value: _v0.mn
            }
          }), _v1.c.setGroupProperty(_v272("Color", _v4)), _v1.o.setGroupProperty(_v272("Opacity", _v4)), _v1.w.setGroupProperty(_v272("Stroke Width", _v4)), _v9;
        }
        function _v7(_v0, _v1, _v2) {
          function _v3(_v0) {
            return _v0 === _v0.e.ix || "End" === _v0 || "end" === _v0 ? _v3.end : _v0 === _v0.s.ix ? _v3.start : _v0 === _v0.o.ix ? _v3.offset : null;
          }
          var _v4 = _v271(_v3, _v2);
          return _v3.propertyIndex = _v0.ix, _v1.s.setGroupProperty(_v272("Start", _v4)), _v1.e.setGroupProperty(_v272("End", _v4)), _v1.o.setGroupProperty(_v272("Offset", _v4)), _v3.propertyIndex = _v0.ix, _v3.propertyGroup = _v2, Object.defineProperties(_v3, {
            start: {
              get: _v268(_v1.s)
            },
            end: {
              get: _v268(_v1.e)
            },
            offset: {
              get: _v268(_v1.o)
            },
            _name: {
              value: _v0.nm
            }
          }), _v3.mn = _v0.mn, _v3;
        }
        function _v8(_v0, _v1, _v2) {
          function _v3(_v0) {
            return _v0.a.ix === _v0 || "Anchor Point" === _v0 ? _v3.anchorPoint : _v0.o.ix === _v0 || "Opacity" === _v0 ? _v3.opacity : _v0.p.ix === _v0 || "Position" === _v0 ? _v3.position : _v0.r.ix === _v0 || "Rotation" === _v0 || "ADBE Vector Rotation" === _v0 ? _v3.rotation : _v0.s.ix === _v0 || "Scale" === _v0 ? _v3.scale : _v0.sk && _v0.sk.ix === _v0 || "Skew" === _v0 ? _v3.skew : _v0.sa && _v0.sa.ix === _v0 || "Skew Axis" === _v0 ? _v3.skewAxis : null;
          }
          var _v4 = _v271(_v3, _v2);
          return _v1.transform.mProps.o.setGroupProperty(_v272("Opacity", _v4)), _v1.transform.mProps.p.setGroupProperty(_v272("Position", _v4)), _v1.transform.mProps.a.setGroupProperty(_v272("Anchor Point", _v4)), _v1.transform.mProps.s.setGroupProperty(_v272("Scale", _v4)), _v1.transform.mProps.r.setGroupProperty(_v272("Rotation", _v4)), _v1.transform.mProps.sk && (_v1.transform.mProps.sk.setGroupProperty(_v272("Skew", _v4)), _v1.transform.mProps.sa.setGroupProperty(_v272("Skew Angle", _v4))), _v1.transform.op.setGroupProperty(_v272("Opacity", _v4)), Object.defineProperties(_v3, {
            opacity: {
              get: _v268(_v1.transform.mProps.o)
            },
            position: {
              get: _v268(_v1.transform.mProps.p)
            },
            anchorPoint: {
              get: _v268(_v1.transform.mProps.a)
            },
            scale: {
              get: _v268(_v1.transform.mProps.s)
            },
            rotation: {
              get: _v268(_v1.transform.mProps.r)
            },
            skew: {
              get: _v268(_v1.transform.mProps.sk)
            },
            skewAxis: {
              get: _v268(_v1.transform.mProps.sa)
            },
            _name: {
              value: _v0.nm
            }
          }), _v3.ty = "tr", _v3.mn = _v0.mn, _v3.propertyGroup = _v2, _v3;
        }
        function _v9(_v0, _v1, _v2) {
          function _v3(_v0) {
            return _v0.p.ix === _v0 ? _v3.position : _v0.s.ix === _v0 ? _v3.size : null;
          }
          var _v4 = _v271(_v3, _v2);
          _v3.propertyIndex = _v0.ix;
          var _v5 = "tm" === _v1.sh.ty ? _v1.sh.prop : _v1.sh;
          return _v5.s.setGroupProperty(_v272("Size", _v4)), _v5.p.setGroupProperty(_v272("Position", _v4)), Object.defineProperties(_v3, {
            size: {
              get: _v268(_v5.s)
            },
            position: {
              get: _v268(_v5.p)
            },
            _name: {
              value: _v0.nm
            }
          }), _v3.mn = _v0.mn, _v3;
        }
        function _v10(_v0, _v1, _v2) {
          function _v3(_v0) {
            return _v0.p.ix === _v0 ? _v3.position : _v0.r.ix === _v0 ? _v3.rotation : _v0.pt.ix === _v0 ? _v3.points : _v0.or.ix === _v0 || "ADBE Vector Star Outer Radius" === _v0 ? _v3.outerRadius : _v0.os.ix === _v0 ? _v3.outerRoundness : _v0.ir && (_v0.ir.ix === _v0 || "ADBE Vector Star Inner Radius" === _v0) ? _v3.innerRadius : _v0.is && _v0.is.ix === _v0 ? _v3.innerRoundness : null;
          }
          var _v4 = _v271(_v3, _v2),
            _v5 = "tm" === _v1.sh.ty ? _v1.sh.prop : _v1.sh;
          return _v3.propertyIndex = _v0.ix, _v5.or.setGroupProperty(_v272("Outer Radius", _v4)), _v5.os.setGroupProperty(_v272("Outer Roundness", _v4)), _v5.pt.setGroupProperty(_v272("Points", _v4)), _v5.p.setGroupProperty(_v272("Position", _v4)), _v5.r.setGroupProperty(_v272("Rotation", _v4)), _v0.ir && (_v5.ir.setGroupProperty(_v272("Inner Radius", _v4)), _v5.is.setGroupProperty(_v272("Inner Roundness", _v4))), Object.defineProperties(_v3, {
            position: {
              get: _v268(_v5.p)
            },
            rotation: {
              get: _v268(_v5.r)
            },
            points: {
              get: _v268(_v5.pt)
            },
            outerRadius: {
              get: _v268(_v5.or)
            },
            outerRoundness: {
              get: _v268(_v5.os)
            },
            innerRadius: {
              get: _v268(_v5.ir)
            },
            innerRoundness: {
              get: _v268(_v5.is)
            },
            _name: {
              value: _v0.nm
            }
          }), _v3.mn = _v0.mn, _v3;
        }
        function _v11(_v0, _v1, _v2) {
          function _v3(_v0) {
            return _v0.p.ix === _v0 ? _v3.position : _v0.r.ix === _v0 ? _v3.roundness : _v0.s.ix === _v0 || "Size" === _v0 || "ADBE Vector Rect Size" === _v0 ? _v3.size : null;
          }
          var _v4 = _v271(_v3, _v2),
            _v5 = "tm" === _v1.sh.ty ? _v1.sh.prop : _v1.sh;
          return _v3.propertyIndex = _v0.ix, _v5.p.setGroupProperty(_v272("Position", _v4)), _v5.s.setGroupProperty(_v272("Size", _v4)), _v5.r.setGroupProperty(_v272("Rotation", _v4)), Object.defineProperties(_v3, {
            position: {
              get: _v268(_v5.p)
            },
            roundness: {
              get: _v268(_v5.r)
            },
            size: {
              get: _v268(_v5.s)
            },
            _name: {
              value: _v0.nm
            }
          }), _v3.mn = _v0.mn, _v3;
        }
        function _v12(_v0, _v1, _v2) {
          function _v3(_v0) {
            return _v0.r.ix === _v0 || "Round Corners 1" === _v0 ? _v3.radius : null;
          }
          var _v4 = _v271(_v3, _v2),
            _v5 = _v1;
          return _v3.propertyIndex = _v0.ix, _v5.rd.setGroupProperty(_v272("Radius", _v4)), Object.defineProperties(_v3, {
            radius: {
              get: _v268(_v5.rd)
            },
            _name: {
              value: _v0.nm
            }
          }), _v3.mn = _v0.mn, _v3;
        }
        function _v13(_v0, _v1, _v2) {
          function _v3(_v0) {
            return _v0.c.ix === _v0 || "Copies" === _v0 ? _v3.copies : _v0.o.ix === _v0 || "Offset" === _v0 ? _v3.offset : null;
          }
          var _v4 = _v271(_v3, _v2),
            _v5 = _v1;
          return _v3.propertyIndex = _v0.ix, _v5.c.setGroupProperty(_v272("Copies", _v4)), _v5.o.setGroupProperty(_v272("Offset", _v4)), Object.defineProperties(_v3, {
            copies: {
              get: _v268(_v5.c)
            },
            offset: {
              get: _v268(_v5.o)
            },
            _name: {
              value: _v0.nm
            }
          }), _v3.mn = _v0.mn, _v3;
        }
        return function (_v0, _v1, _v2) {
          var _v3;
          function _v4(_v0) {
            if ("number" == typeof _v0) return 0 === (_v0 = void 0 === _v0 ? 1 : _v0) ? _v2 : _v3[_v0 - 1];
            for (var _v1 = 0, _v2 = _v3.length; _v1 < _v2;) {
              if (_v3[_v1]._name === _v0) return _v3[_v1];
              _v1 += 1;
            }
            return null;
          }
          return _v4.propertyGroup = _v271(_v4, function () {
            return _v2;
          }), _v3 = _v0(_v0, _v1, _v4.propertyGroup), _v4.numProperties = _v3.length, _v4._name = "Contents", _v4;
        };
      }(),
      _v276 = function (_v0) {
        var _v1;
        function _v2(_v0) {
          return "ADBE Text Document" === _v0 ? _v2.sourceText : null;
        }
        return Object.defineProperty(_v2, "sourceText", {
          get: function () {
            _v0.textProperty.getValue();
            var _v0 = _v0.textProperty.currentData.t;
            return _v1 && _v0 === _v1.value || ((_v1 = new String(_v0)).value = _v0 || new String(_v0), Object.defineProperty(_v1, "style", {
              get: function () {
                return {
                  fillColor: _v0.textProperty.currentData.fc
                };
              }
            })), _v1;
          }
        }), _v2;
      };
    function _v277(_v0) {
      return (_v277 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_v0) {
        return typeof _v0;
      } : function (_v0) {
        return _v0 && "function" == typeof Symbol && _v0.constructor === Symbol && _v0 !== Symbol.prototype ? "symbol" : typeof _v0;
      })(_v0);
    }
    var _v278 = function () {
        var _v0 = function (_v0) {
            var _v1 = "",
              _v2 = _v0.getFootageData();
            function _v3(_v0) {
              if (_v2[_v0]) return (_v1 = _v0, _v2 = _v2[_v0], "object" === _v277(_v2)) ? _v3 : _v2;
              var _v1 = _v0.indexOf(_v1);
              return -1 !== _v1 ? (_v2 = _v2[parseInt(_v0.substr(_v1 + _v1.length), 10)], "object" === _v277(_v2)) ? _v3 : _v2 : "";
            }
            return function () {
              return _v1 = "", _v2 = _v0.getFootageData(), _v3;
            };
          },
          _v1 = function (_v0) {
            function _v1(_v0) {
              return "Outline" === _v0 ? _v1.outlineInterface() : null;
            }
            return _v1._name = "Outline", _v1.outlineInterface = _v0(_v0), _v1;
          };
        return function (_v0) {
          function _v1(_v0) {
            return "Data" === _v0 ? _v1.dataInterface : null;
          }
          return _v1._name = "Data", _v1.dataInterface = _v1(_v0), _v1;
        };
      }(),
      _v279 = {
        layer: _v270,
        effects: _v273,
        comp: _v259,
        shape: _v275,
        text: _v276,
        footage: _v278
      };
    function _v280(_v0) {
      return _v279[_v0] || null;
    }
    var _v281 = {
      searchExpressions: function (_v0, _v1, _v2) {
        _v1.x && (_v2.k = !0, _v2.x = !0, _v2.initiateExpression = _v265.initiateExpression, _v2.effectsSequence.push(_v2.initiateExpression(_v0, _v1, _v2).bind(_v2)));
      },
      getSpeedAtTime: function (_v0) {
        var _v1,
          _v2 = -.01,
          _v3 = this.getValueAtTime(_v0),
          _v4 = this.getValueAtTime(_v0 + _v2),
          _v5 = 0;
        if (_v3.length) {
          for (_v1 = 0; _v1 < _v3.length; _v1 += 1) _v5 += Math.pow(_v4[_v1] - _v3[_v1], 2);
          _v5 = 100 * Math.sqrt(_v5);
        } else _v5 = 0;
        return _v5;
      },
      getVelocityAtTime: function (_v0) {
        if (void 0 !== this.vel) return this.vel;
        var _v1,
          _v2,
          _v3 = -.001,
          _v4 = this.getValueAtTime(_v0),
          _v5 = this.getValueAtTime(_v0 + _v3);
        if (_v4.length) for (_v1 = _v13("float32", _v4.length), _v2 = 0; _v2 < _v4.length; _v2 += 1) _v1[_v2] = (_v5[_v2] - _v4[_v2]) / _v3;else _v1 = (_v5 - _v4) / _v3;
        return _v1;
      },
      getValueAtTime: function (_v0) {
        return _v0 *= this.elem.globalData.frameRate, (_v0 -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < _v0 ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(_v0, this._cachingAtTime), this._cachingAtTime.lastFrame = _v0), this._cachingAtTime.value;
      },
      getStaticValueAtTime: function () {
        return this.pv;
      },
      setGroupProperty: function (_v0) {
        this.propertyGroup = _v0;
      }
    };
    function _v282() {
      function _v0(_v0, _v1, _v2) {
        if (!this.k || !this.keyframes) return this.pv;
        _v0 = _v0 ? _v0.toLowerCase() : "";
        var _v3,
          _v4,
          _v5,
          _v6,
          _v7,
          _v8 = this.comp.renderedFrame,
          _v9 = this.keyframes,
          _v10 = _v9[_v9.length - 1].t;
        if (_v8 <= _v10) return this.pv;
        if (_v2 ? (_v3 = _v1 ? Math.abs(_v10 - this.elem.comp.globalData.frameRate * _v1) : Math.max(0, _v10 - this.elem.data.ip), _v4 = _v10 - _v3) : ((!_v1 || _v1 > _v9.length - 1) && (_v1 = _v9.length - 1), _v3 = _v10 - (_v4 = _v9[_v9.length - 1 - _v1].t)), "pingpong" === _v0) {
          if (Math.floor((_v8 - _v4) / _v3) % 2 != 0) return this.getValueAtTime((_v3 - (_v8 - _v4) % _v3 + _v4) / this.comp.globalData.frameRate, 0);
        } else if ("offset" === _v0) {
          var _v11 = this.getValueAtTime(_v4 / this.comp.globalData.frameRate, 0),
            _v12 = this.getValueAtTime(_v10 / this.comp.globalData.frameRate, 0),
            _v13 = this.getValueAtTime(((_v8 - _v4) % _v3 + _v4) / this.comp.globalData.frameRate, 0),
            _v14 = Math.floor((_v8 - _v4) / _v3);
          if (this.pv.length) {
            for (_v6 = (_v7 = Array(_v11.length)).length, _v5 = 0; _v5 < _v6; _v5 += 1) _v7[_v5] = (_v12[_v5] - _v11[_v5]) * _v14 + _v13[_v5];
            return _v7;
          }
          return (_v12 - _v11) * _v14 + _v13;
        } else if ("continue" === _v0) {
          var _v15 = this.getValueAtTime(_v10 / this.comp.globalData.frameRate, 0),
            _v16 = this.getValueAtTime((_v10 - .001) / this.comp.globalData.frameRate, 0);
          if (this.pv.length) {
            for (_v6 = (_v7 = Array(_v15.length)).length, _v5 = 0; _v5 < _v6; _v5 += 1) _v7[_v5] = _v15[_v5] + (_v15[_v5] - _v16[_v5]) * ((_v8 - _v10) / this.comp.globalData.frameRate) / 5e-4;
            return _v7;
          }
          return _v15 + (_v8 - _v10) / .001 * (_v15 - _v16);
        }
        return this.getValueAtTime(((_v8 - _v4) % _v3 + _v4) / this.comp.globalData.frameRate, 0);
      }
      function _v1(_v0, _v1, _v2) {
        if (!this.k) return this.pv;
        _v0 = _v0 ? _v0.toLowerCase() : "";
        var _v3,
          _v4,
          _v5,
          _v6,
          _v7,
          _v8 = this.comp.renderedFrame,
          _v9 = this.keyframes,
          _v10 = _v9[0].t;
        if (_v8 >= _v10) return this.pv;
        if (_v2 ? (_v3 = _v1 ? Math.abs(this.elem.comp.globalData.frameRate * _v1) : Math.max(0, this.elem.data.op - _v10), _v4 = _v10 + _v3) : ((!_v1 || _v1 > _v9.length - 1) && (_v1 = _v9.length - 1), _v3 = (_v4 = _v9[_v1].t) - _v10), "pingpong" === _v0) {
          if (Math.floor((_v10 - _v8) / _v3) % 2 == 0) return this.getValueAtTime(((_v10 - _v8) % _v3 + _v10) / this.comp.globalData.frameRate, 0);
        } else if ("offset" === _v0) {
          var _v11 = this.getValueAtTime(_v10 / this.comp.globalData.frameRate, 0),
            _v12 = this.getValueAtTime(_v4 / this.comp.globalData.frameRate, 0),
            _v13 = this.getValueAtTime((_v3 - (_v10 - _v8) % _v3 + _v10) / this.comp.globalData.frameRate, 0),
            _v14 = Math.floor((_v10 - _v8) / _v3) + 1;
          if (this.pv.length) {
            for (_v6 = (_v7 = Array(_v11.length)).length, _v5 = 0; _v5 < _v6; _v5 += 1) _v7[_v5] = _v13[_v5] - (_v12[_v5] - _v11[_v5]) * _v14;
            return _v7;
          }
          return _v13 - (_v12 - _v11) * _v14;
        } else if ("continue" === _v0) {
          var _v15 = this.getValueAtTime(_v10 / this.comp.globalData.frameRate, 0),
            _v16 = this.getValueAtTime((_v10 + .001) / this.comp.globalData.frameRate, 0);
          if (this.pv.length) {
            for (_v6 = (_v7 = Array(_v15.length)).length, _v5 = 0; _v5 < _v6; _v5 += 1) _v7[_v5] = _v15[_v5] + (_v15[_v5] - _v16[_v5]) * (_v10 - _v8) / .001;
            return _v7;
          }
          return _v15 + (_v15 - _v16) * (_v10 - _v8) / .001;
        }
        return this.getValueAtTime((_v3 - ((_v10 - _v8) % _v3 + _v10)) / this.comp.globalData.frameRate, 0);
      }
      function _v2(_v0, _v1) {
        if (!this.k || (_v0 = .5 * (_v0 || .4), (_v1 = Math.floor(_v1 || 5)) <= 1)) return this.pv;
        var _v2,
          _v3,
          _v4 = this.comp.renderedFrame / this.comp.globalData.frameRate,
          _v5 = _v4 - _v0,
          _v6 = _v4 + _v0,
          _v7 = _v1 > 1 ? (_v6 - _v5) / (_v1 - 1) : 1,
          _v8 = 0,
          _v9 = 0;
        for (_v2 = this.pv.length ? _v13("float32", this.pv.length) : 0; _v8 < _v1;) {
          if (_v3 = this.getValueAtTime(_v5 + _v8 * _v7), this.pv.length) for (_v9 = 0; _v9 < this.pv.length; _v9 += 1) _v2[_v9] += _v3[_v9];else _v2 += _v3;
          _v8 += 1;
        }
        if (this.pv.length) for (_v9 = 0; _v9 < this.pv.length; _v9 += 1) _v2[_v9] /= _v1;else _v2 /= _v1;
        return _v2;
      }
      function _v3(_v0) {
        this._transformCachingAtTime || (this._transformCachingAtTime = {
          v: new _v103()
        });
        var _v1 = this._transformCachingAtTime.v;
        if (_v1.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
          var _v2 = this.a.getValueAtTime(_v0);
          _v1.translate(-_v2[0] * this.a.mult, -_v2[1] * this.a.mult, _v2[2] * this.a.mult);
        }
        if (this.appliedTransformations < 2) {
          var _v3 = this.s.getValueAtTime(_v0);
          _v1.scale(_v3[0] * this.s.mult, _v3[1] * this.s.mult, _v3[2] * this.s.mult);
        }
        if (this.sk && this.appliedTransformations < 3) {
          var _v4 = this.sk.getValueAtTime(_v0),
            _v5 = this.sa.getValueAtTime(_v0);
          _v1.skewFromAxis(-_v4 * this.sk.mult, _v5 * this.sa.mult);
        }
        if (this.r && this.appliedTransformations < 4) {
          var _v6 = this.r.getValueAtTime(_v0);
          _v1.rotate(-_v6 * this.r.mult);
        } else if (!this.r && this.appliedTransformations < 4) {
          var _v7 = this.rz.getValueAtTime(_v0),
            _v8 = this.ry.getValueAtTime(_v0),
            _v9 = this.rx.getValueAtTime(_v0),
            _v10 = this.or.getValueAtTime(_v0);
          _v1.rotateZ(-_v7 * this.rz.mult).rotateY(_v8 * this.ry.mult).rotateX(_v9 * this.rx.mult).rotateZ(-_v10[2] * this.or.mult).rotateY(_v10[1] * this.or.mult).rotateX(_v10[0] * this.or.mult);
        }
        if (this.data.p && this.data.p.s) {
          var _v11 = this.px.getValueAtTime(_v0),
            _v12 = this.py.getValueAtTime(_v0);
          if (this.data.p.z) {
            var _v13 = this.pz.getValueAtTime(_v0);
            _v1.translate(_v11 * this.px.mult, _v12 * this.py.mult, -_v13 * this.pz.mult);
          } else _v1.translate(_v11 * this.px.mult, _v12 * this.py.mult, 0);
        } else {
          var _v14 = this.p.getValueAtTime(_v0);
          _v1.translate(_v14[0] * this.p.mult, _v14[1] * this.p.mult, -_v14[2] * this.p.mult);
        }
        return _v1;
      }
      function _v4() {
        return this.v.clone(new _v103());
      }
      var _v5 = _v129.getTransformProperty;
      _v129.getTransformProperty = function (_v0, _v1, _v2) {
        var _v3 = _v5(_v0, _v1, _v2);
        return _v3.dynamicProperties.length ? _v3.getValueAtTime = _v3.bind(_v3) : _v3.getValueAtTime = _v4.bind(_v3), _v3.setGroupProperty = _v281.setGroupProperty, _v3;
      };
      var _v6 = _v95.getProp;
      function _v7(_v0) {
        return this._cachingAtTime || (this._cachingAtTime = {
          shapeValue: _v99.clone(this.pv),
          lastIndex: 0,
          lastTime: _v3
        }), _v0 *= this.elem.globalData.frameRate, (_v0 -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < _v0 ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = _v0, this.interpolateShape(_v0, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue;
      }
      _v95.getProp = function (_v0, _v1, _v2, _v3, _v4) {
        var _v5 = _v6(_v0, _v1, _v2, _v3, _v4);
        _v5.kf ? _v5.getValueAtTime = _v281.getValueAtTime.bind(_v5) : _v5.getValueAtTime = _v281.getStaticValueAtTime.bind(_v5), _v5.setGroupProperty = _v281.setGroupProperty, _v5.loopOut = _v0, _v5.loopIn = _v1, _v5.smooth = _v2, _v5.getVelocityAtTime = _v281.getVelocityAtTime.bind(_v5), _v5.getSpeedAtTime = _v281.getSpeedAtTime.bind(_v5), _v5.numKeys = 1 === _v1.a ? _v1.k.length : 0, _v5.propertyIndex = _v1.ix;
        var _v6 = 0;
        return 0 !== _v2 && (_v6 = _v13("float32", 1 === _v1.a ? _v1.k[0].s.length : _v1.k.length)), _v5._cachingAtTime = {
          lastFrame: _v3,
          lastIndex: 0,
          value: _v6
        }, _v281.searchExpressions(_v0, _v1, _v5), _v5.k && _v4.addDynamicProperty(_v5), _v5;
      };
      var _v8 = _v102.getConstructorFunction(),
        _v9 = _v102.getKeyframedConstructorFunction();
      function _v10() {}
      _v10.prototype = {
        vertices: function (_v0, _v1) {
          this.k && this.getValue();
          var _v2,
            _v3 = this.v;
          void 0 !== _v1 && (_v3 = this.getValueAtTime(_v1, 0));
          var _v4 = _v3._length,
            _v5 = _v3[_v0],
            _v6 = _v3.v,
            _v7 = _v14(_v4);
          for (_v2 = 0; _v2 < _v4; _v2 += 1) "i" === _v0 || "o" === _v0 ? _v7[_v2] = [_v5[_v2][0] - _v6[_v2][0], _v5[_v2][1] - _v6[_v2][1]] : _v7[_v2] = [_v5[_v2][0], _v5[_v2][1]];
          return _v7;
        },
        points: function (_v0) {
          return this.vertices("v", _v0);
        },
        inTangents: function (_v0) {
          return this.vertices("i", _v0);
        },
        outTangents: function (_v0) {
          return this.vertices("o", _v0);
        },
        isClosed: function () {
          return this.v.c;
        },
        pointOnPath: function (_v0, _v1) {
          var _v2,
            _v3 = this.v;
          void 0 !== _v1 && (_v3 = this.getValueAtTime(_v1, 0)), this._segmentsLength || (this._segmentsLength = _v80.getSegmentsLength(_v3));
          for (var _v4 = this._segmentsLength, _v5 = _v4.lengths, _v6 = _v4.totalLength * _v0, _v7 = 0, _v8 = _v5.length, _v9 = 0; _v7 < _v8;) {
            if (_v9 + _v5[_v7].addedLength > _v6) {
              var _v10 = _v7,
                _v11 = _v3.c && _v7 === _v8 - 1 ? 0 : _v7 + 1,
                _v12 = (_v6 - _v9) / _v5[_v7].addedLength;
              _v2 = _v80.getPointInSegment(_v3.v[_v10], _v3.v[_v11], _v3.o[_v10], _v3.i[_v11], _v12, _v5[_v7]);
              break;
            }
            _v9 += _v5[_v7].addedLength, _v7 += 1;
          }
          return _v2 || (_v2 = _v3.c ? [_v3.v[0][0], _v3.v[0][1]] : [_v3.v[_v3._length - 1][0], _v3.v[_v3._length - 1][1]]), _v2;
        },
        vectorOnPath: function (_v0, _v1, _v2) {
          1 == _v0 ? _v0 = this.v.c : 0 == _v0 && (_v0 = .999);
          var _v3 = this.pointOnPath(_v0, _v1),
            _v4 = this.pointOnPath(_v0 + .001, _v1),
            _v5 = _v4[0] - _v3[0],
            _v6 = _v4[1] - _v3[1],
            _v7 = Math.sqrt(Math.pow(_v5, 2) + Math.pow(_v6, 2));
          return 0 === _v7 ? [0, 0] : "tangent" === _v2 ? [_v5 / _v7, _v6 / _v7] : [-_v6 / _v7, _v5 / _v7];
        },
        tangentOnPath: function (_v0, _v1) {
          return this.vectorOnPath(_v0, _v1, "tangent");
        },
        normalOnPath: function (_v0, _v1) {
          return this.vectorOnPath(_v0, _v1, "normal");
        },
        setGroupProperty: _v281.setGroupProperty,
        getValueAtTime: _v281.getStaticValueAtTime
      }, _v9([_v10], _v8), _v9([_v10], _v9), _v9.prototype.getValueAtTime = _v7, _v9.prototype.initiateExpression = _v265.initiateExpression;
      var _v11 = _v102.getShapeProp;
      _v102.getShapeProp = function (_v0, _v1, _v2, _v3, _v4) {
        var _v5 = _v11(_v0, _v1, _v2, _v3, _v4);
        return _v5.propertyIndex = _v1.ix, _v5.lock = !1, 3 === _v2 ? _v281.searchExpressions(_v0, _v1.pt, _v5) : 4 === _v2 && _v281.searchExpressions(_v0, _v1.ks, _v5), _v5.k && _v0.addDynamicProperty(_v5), _v5;
      };
    }
    function _v283() {
      _v282();
    }
    function _v284() {
      function _v0() {
        return this.data.d.x ? (this.calculateExpression = _v265.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null;
      }
      _v217.prototype.getExpressionValue = function (_v0, _v1) {
        var _v2 = this.calculateExpression(_v1);
        if (_v0.t !== _v2) {
          var _v3 = {};
          return this.copyData(_v3, _v0), _v3.t = _v2.toString(), _v3.__complete = !1, _v3;
        }
        return _v0;
      }, _v217.prototype.searchProperty = function () {
        var _v0 = this.searchKeyframes(),
          _v1 = this.searchExpressions();
        return this.kf = _v0 || _v1, this.kf;
      }, _v217.prototype.searchExpressions = _v0;
    }
    function _v285() {
      _v284();
    }
    function _v286() {}
    _v286.prototype = {
      createMergeNode: function (_v0, _v1) {
        var _v2,
          _v3,
          _v4 = _v60("feMerge");
        for (_v4.setAttribute("result", _v0), _v3 = 0; _v3 < _v1.length; _v3 += 1) (_v2 = _v60("feMergeNode")).setAttribute("in", _v1[_v3]), _v4.appendChild(_v2), _v4.appendChild(_v2);
        return _v4;
      }
    };
    var _v287 = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";
    function _v288(_v0, _v1, _v2, _v3, _v4) {
      this.filterManager = _v1;
      var _v5 = _v60("feColorMatrix");
      _v5.setAttribute("type", "matrix"), _v5.setAttribute("color-interpolation-filters", "linearRGB"), _v5.setAttribute("values", _v287 + " 1 0"), this.linearFilter = _v5, _v5.setAttribute("result", _v3 + "_tint_1"), _v0.appendChild(_v5), (_v5 = _v60("feColorMatrix")).setAttribute("type", "matrix"), _v5.setAttribute("color-interpolation-filters", "sRGB"), _v5.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), _v5.setAttribute("result", _v3 + "_tint_2"), _v0.appendChild(_v5), this.matrixFilter = _v5;
      var _v6 = this.createMergeNode(_v3, [_v4, _v3 + "_tint_1", _v3 + "_tint_2"]);
      _v0.appendChild(_v6);
    }
    function _v289(_v0, _v1, _v2, _v3) {
      this.filterManager = _v1;
      var _v4 = _v60("feColorMatrix");
      _v4.setAttribute("type", "matrix"), _v4.setAttribute("color-interpolation-filters", "sRGB"), _v4.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), _v4.setAttribute("result", _v3), _v0.appendChild(_v4), this.matrixFilter = _v4;
    }
    function _v290(_v0, _v1, _v2) {
      this.initialized = !1, this.filterManager = _v1, this.elem = _v2, this.paths = [];
    }
    function _v291(_v0, _v1, _v2, _v3) {
      this.filterManager = _v1;
      var _v4 = _v60("feColorMatrix");
      _v4.setAttribute("type", "matrix"), _v4.setAttribute("color-interpolation-filters", "linearRGB"), _v4.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), _v0.appendChild(_v4);
      var _v5 = _v60("feComponentTransfer");
      _v5.setAttribute("color-interpolation-filters", "sRGB"), _v5.setAttribute("result", _v3), this.matrixFilter = _v5;
      var _v6 = _v60("feFuncR");
      _v6.setAttribute("type", "table"), _v5.appendChild(_v6), this.feFuncR = _v6;
      var _v7 = _v60("feFuncG");
      _v7.setAttribute("type", "table"), _v5.appendChild(_v7), this.feFuncG = _v7;
      var _v8 = _v60("feFuncB");
      _v8.setAttribute("type", "table"), _v5.appendChild(_v8), this.feFuncB = _v8, _v0.appendChild(_v5);
    }
    function _v292(_v0, _v1, _v2, _v3) {
      this.filterManager = _v1;
      var _v4 = this.filterManager.effectElements,
        _v5 = _v60("feComponentTransfer");
      (_v4[10].p.k || 0 !== _v4[10].p.v || _v4[11].p.k || 1 !== _v4[11].p.v || _v4[12].p.k || 1 !== _v4[12].p.v || _v4[13].p.k || 0 !== _v4[13].p.v || _v4[14].p.k || 1 !== _v4[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", _v5)), (_v4[17].p.k || 0 !== _v4[17].p.v || _v4[18].p.k || 1 !== _v4[18].p.v || _v4[19].p.k || 1 !== _v4[19].p.v || _v4[20].p.k || 0 !== _v4[20].p.v || _v4[21].p.k || 1 !== _v4[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", _v5)), (_v4[24].p.k || 0 !== _v4[24].p.v || _v4[25].p.k || 1 !== _v4[25].p.v || _v4[26].p.k || 1 !== _v4[26].p.v || _v4[27].p.k || 0 !== _v4[27].p.v || _v4[28].p.k || 1 !== _v4[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", _v5)), (_v4[31].p.k || 0 !== _v4[31].p.v || _v4[32].p.k || 1 !== _v4[32].p.v || _v4[33].p.k || 1 !== _v4[33].p.v || _v4[34].p.k || 0 !== _v4[34].p.v || _v4[35].p.k || 1 !== _v4[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", _v5)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (_v5.setAttribute("color-interpolation-filters", "sRGB"), _v0.appendChild(_v5)), (_v4[3].p.k || 0 !== _v4[3].p.v || _v4[4].p.k || 1 !== _v4[4].p.v || _v4[5].p.k || 1 !== _v4[5].p.v || _v4[6].p.k || 0 !== _v4[6].p.v || _v4[7].p.k || 1 !== _v4[7].p.v) && ((_v5 = _v60("feComponentTransfer")).setAttribute("color-interpolation-filters", "sRGB"), _v5.setAttribute("result", _v3), _v0.appendChild(_v5), this.feFuncRComposed = this.createFeFunc("feFuncR", _v5), this.feFuncGComposed = this.createFeFunc("feFuncG", _v5), this.feFuncBComposed = this.createFeFunc("feFuncB", _v5));
    }
    function _v293(_v0, _v1, _v2, _v3, _v4) {
      var _v5 = _v1.container.globalData.renderConfig.filterSize,
        _v6 = _v1.data.fs || _v5;
      _v0.setAttribute("x", _v6.x || _v5.x), _v0.setAttribute("y", _v6.y || _v5.y), _v0.setAttribute("width", _v6.width || _v5.width), _v0.setAttribute("height", _v6.height || _v5.height), this.filterManager = _v1;
      var _v7 = _v60("feGaussianBlur");
      _v7.setAttribute("in", "SourceAlpha"), _v7.setAttribute("result", _v3 + "_drop_shadow_1"), _v7.setAttribute("stdDeviation", "0"), this.feGaussianBlur = _v7, _v0.appendChild(_v7);
      var _v8 = _v60("feOffset");
      _v8.setAttribute("dx", "25"), _v8.setAttribute("dy", "0"), _v8.setAttribute("in", _v3 + "_drop_shadow_1"), _v8.setAttribute("result", _v3 + "_drop_shadow_2"), this.feOffset = _v8, _v0.appendChild(_v8);
      var _v9 = _v60("feFlood");
      _v9.setAttribute("flood-color", "#00ff00"), _v9.setAttribute("flood-opacity", "1"), _v9.setAttribute("result", _v3 + "_drop_shadow_3"), this.feFlood = _v9, _v0.appendChild(_v9);
      var _v10 = _v60("feComposite");
      _v10.setAttribute("in", _v3 + "_drop_shadow_3"), _v10.setAttribute("in2", _v3 + "_drop_shadow_2"), _v10.setAttribute("operator", "in"), _v10.setAttribute("result", _v3 + "_drop_shadow_4"), _v0.appendChild(_v10);
      var _v11 = this.createMergeNode(_v3, [_v3 + "_drop_shadow_4", _v4]);
      _v0.appendChild(_v11);
    }
    _v9([_v286], _v288), _v288.prototype.renderFrame = function (_v0) {
      if (_v0 || this.filterManager._mdf) {
        var _v1 = this.filterManager.effectElements[0].p.v,
          _v2 = this.filterManager.effectElements[1].p.v,
          _v3 = this.filterManager.effectElements[2].p.v / 100;
        this.linearFilter.setAttribute("values", _v287 + " " + _v3 + " 0"), this.matrixFilter.setAttribute("values", _v2[0] - _v1[0] + " 0 0 0 " + _v1[0] + " " + (_v2[1] - _v1[1]) + " 0 0 0 " + _v1[1] + " " + (_v2[2] - _v1[2]) + " 0 0 0 " + _v1[2] + " 0 0 0 1 0");
      }
    }, _v289.prototype.renderFrame = function (_v0) {
      if (_v0 || this.filterManager._mdf) {
        var _v1 = this.filterManager.effectElements[2].p.v,
          _v2 = this.filterManager.effectElements[6].p.v;
        this.matrixFilter.setAttribute("values", "0 0 0 0 " + _v1[0] + " 0 0 0 0 " + _v1[1] + " 0 0 0 0 " + _v1[2] + " 0 0 0 " + _v2 + " 0");
      }
    }, _v290.prototype.initialize = function () {
      var _v0,
        _v1,
        _v2,
        _v3,
        _v4 = this.elem.layerElement.children || this.elem.layerElement.childNodes;
      for (1 === this.filterManager.effectElements[1].p.v ? (_v3 = this.elem.maskManager.masksProperties.length, _v2 = 0) : _v3 = (_v2 = this.filterManager.effectElements[0].p.v - 1) + 1, (_v1 = _v60("g")).setAttribute("fill", "none"), _v1.setAttribute("stroke-linecap", "round"), _v1.setAttribute("stroke-dashoffset", 1); _v2 < _v3; _v2 += 1) _v0 = _v60("path"), _v1.appendChild(_v0), this.paths.push({
        p: _v0,
        m: _v2
      });
      if (3 === this.filterManager.effectElements[10].p.v) {
        var _v5 = _v60("mask"),
          _v6 = _v43();
        _v5.setAttribute("id", _v6), _v5.setAttribute("mask-type", "alpha"), _v5.appendChild(_v1), this.elem.globalData.defs.appendChild(_v5);
        var _v7 = _v60("g");
        for (_v7.setAttribute("mask", "url(" + _v7() + "#" + _v6 + ")"); _v4[0];) _v7.appendChild(_v4[0]);
        this.elem.layerElement.appendChild(_v7), this.masker = _v5, _v1.setAttribute("stroke", "#fff");
      } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
        if (2 === this.filterManager.effectElements[10].p.v) for (_v4 = this.elem.layerElement.children || this.elem.layerElement.childNodes; _v4.length;) this.elem.layerElement.removeChild(_v4[0]);
        this.elem.layerElement.appendChild(_v1), this.elem.layerElement.removeAttribute("mask"), _v1.setAttribute("stroke", "#fff");
      }
      this.initialized = !0, this.pathMasker = _v1;
    }, _v290.prototype.renderFrame = function (_v0) {
      this.initialized || this.initialize();
      var _v1 = this.paths.length;
      for (_v2 = 0; _v2 < _v1; _v2 += 1) if (-1 !== this.paths[_v2].m && (_v3 = this.elem.maskManager.viewData[this.paths[_v2].m], _v4 = this.paths[_v2].p, (_v0 || this.filterManager._mdf || _v3.prop._mdf) && _v4.setAttribute("d", _v3.lastPath), _v0 || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || _v3.prop._mdf)) {
        if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
          var _v2,
            _v3,
            _v4,
            _v5,
            _v6,
            _v7 = .01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
            _v8 = .01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
            _v9 = _v4.getTotalLength();
          _v5 = "0 0 0 " + _v9 * _v7 + " ";
          var _v10 = Math.floor(_v9 * (_v8 - _v7) / (1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01));
          for (_v6 = 0; _v6 < _v10; _v6 += 1) _v5 += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01 + " ";
          _v5 += "0 " + 10 * _v9 + " 0 0";
        } else _v5 = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01;
        _v4.setAttribute("stroke-dasharray", _v5);
      }
      if ((_v0 || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (_v0 || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (_v0 || this.filterManager.effectElements[3].p._mdf)) {
        var _v11 = this.filterManager.effectElements[3].p.v;
        this.pathMasker.setAttribute("stroke", "rgb(" + _v24(255 * _v11[0]) + "," + _v24(255 * _v11[1]) + "," + _v24(255 * _v11[2]) + ")");
      }
    }, _v291.prototype.renderFrame = function (_v0) {
      if (_v0 || this.filterManager._mdf) {
        var _v1 = this.filterManager.effectElements[0].p.v,
          _v2 = this.filterManager.effectElements[1].p.v,
          _v3 = this.filterManager.effectElements[2].p.v,
          _v4 = _v3[0] + " " + _v2[0] + " " + _v1[0],
          _v5 = _v3[1] + " " + _v2[1] + " " + _v1[1],
          _v6 = _v3[2] + " " + _v2[2] + " " + _v1[2];
        this.feFuncR.setAttribute("tableValues", _v4), this.feFuncG.setAttribute("tableValues", _v5), this.feFuncB.setAttribute("tableValues", _v6);
      }
    }, _v292.prototype.createFeFunc = function (_v0, _v1) {
      var _v2 = _v60(_v0);
      return _v2.setAttribute("type", "table"), _v1.appendChild(_v2), _v2;
    }, _v292.prototype.getTableValue = function (_v0, _v1, _v2, _v3, _v4) {
      for (var _v5, _v6, _v7 = 0, _v8 = 256, _v9 = Math.min(_v0, _v1), _v10 = Math.max(_v0, _v1), _v11 = Array.call(null, {
          length: 256
        }), _v12 = 0, _v13 = _v4 - _v3, _v14 = _v1 - _v0; _v7 <= 256;) _v6 = (_v5 = _v7 / 256) <= _v9 ? _v14 < 0 ? _v4 : _v3 : _v5 >= _v10 ? _v14 < 0 ? _v3 : _v4 : _v3 + _v13 * Math.pow((_v5 - _v0) / _v14, 1 / _v2), _v11[_v12] = _v6, _v12 += 1, _v7 += 256 / (_v8 - 1);
      return _v11.join(" ");
    }, _v292.prototype.renderFrame = function (_v0) {
      if (_v0 || this.filterManager._mdf) {
        var _v1,
          _v2 = this.filterManager.effectElements;
        this.feFuncRComposed && (_v0 || _v2[3].p._mdf || _v2[4].p._mdf || _v2[5].p._mdf || _v2[6].p._mdf || _v2[7].p._mdf) && (_v1 = this.getTableValue(_v2[3].p.v, _v2[4].p.v, _v2[5].p.v, _v2[6].p.v, _v2[7].p.v), this.feFuncRComposed.setAttribute("tableValues", _v1), this.feFuncGComposed.setAttribute("tableValues", _v1), this.feFuncBComposed.setAttribute("tableValues", _v1)), this.feFuncR && (_v0 || _v2[10].p._mdf || _v2[11].p._mdf || _v2[12].p._mdf || _v2[13].p._mdf || _v2[14].p._mdf) && (_v1 = this.getTableValue(_v2[10].p.v, _v2[11].p.v, _v2[12].p.v, _v2[13].p.v, _v2[14].p.v), this.feFuncR.setAttribute("tableValues", _v1)), this.feFuncG && (_v0 || _v2[17].p._mdf || _v2[18].p._mdf || _v2[19].p._mdf || _v2[20].p._mdf || _v2[21].p._mdf) && (_v1 = this.getTableValue(_v2[17].p.v, _v2[18].p.v, _v2[19].p.v, _v2[20].p.v, _v2[21].p.v), this.feFuncG.setAttribute("tableValues", _v1)), this.feFuncB && (_v0 || _v2[24].p._mdf || _v2[25].p._mdf || _v2[26].p._mdf || _v2[27].p._mdf || _v2[28].p._mdf) && (_v1 = this.getTableValue(_v2[24].p.v, _v2[25].p.v, _v2[26].p.v, _v2[27].p.v, _v2[28].p.v), this.feFuncB.setAttribute("tableValues", _v1)), this.feFuncA && (_v0 || _v2[31].p._mdf || _v2[32].p._mdf || _v2[33].p._mdf || _v2[34].p._mdf || _v2[35].p._mdf) && (_v1 = this.getTableValue(_v2[31].p.v, _v2[32].p.v, _v2[33].p.v, _v2[34].p.v, _v2[35].p.v), this.feFuncA.setAttribute("tableValues", _v1));
      }
    }, _v9([_v286], _v293), _v293.prototype.renderFrame = function (_v0) {
      if (_v0 || this.filterManager._mdf) {
        if ((_v0 || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), _v0 || this.filterManager.effectElements[0].p._mdf) {
          var _v1 = this.filterManager.effectElements[0].p.v;
          this.feFlood.setAttribute("flood-color", _v49(Math.round(255 * _v1[0]), Math.round(255 * _v1[1]), Math.round(255 * _v1[2])));
        }
        if ((_v0 || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), _v0 || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
          var _v2 = this.filterManager.effectElements[3].p.v,
            _v3 = (this.filterManager.effectElements[2].p.v - 90) * _v30,
            _v4 = _v2 * Math.cos(_v3),
            _v5 = _v2 * Math.sin(_v3);
          this.feOffset.setAttribute("dx", _v4), this.feOffset.setAttribute("dy", _v5);
        }
      }
    };
    var _v294 = [];
    function _v295(_v0, _v1, _v2) {
      this.initialized = !1, this.filterManager = _v1, this.filterElem = _v0, this.elem = _v2, _v2.matteElement = _v60("g"), _v2.matteElement.appendChild(_v2.layerElement), _v2.matteElement.appendChild(_v2.transformedElement), _v2.baseElement = _v2.matteElement;
    }
    function _v296(_v0, _v1, _v2, _v3) {
      _v0.setAttribute("x", "-100%"), _v0.setAttribute("y", "-100%"), _v0.setAttribute("width", "300%"), _v0.setAttribute("height", "300%"), this.filterManager = _v1;
      var _v4 = _v60("feGaussianBlur");
      _v4.setAttribute("result", _v3), _v0.appendChild(_v4), this.feGaussianBlur = _v4;
    }
    function _v297() {}
    function _v298(_v0, _v1) {
      this.init(_v1);
    }
    function _v299(_v0) {
      this.init(_v0);
    }
    return _v295.prototype.findSymbol = function (_v0) {
      for (var _v1 = 0, _v2 = _v294.length; _v1 < _v2;) {
        if (_v294[_v1] === _v0) return _v294[_v1];
        _v1 += 1;
      }
      return null;
    }, _v295.prototype.replaceInParent = function (_v0, _v1) {
      var _v2,
        _v3 = _v0.layerElement.parentNode;
      if (_v3) {
        for (var _v4 = _v3.children, _v5 = 0, _v6 = _v4.length; _v5 < _v6 && _v4[_v5] !== _v0.layerElement;) _v5 += 1;
        _v5 <= _v6 - 2 && (_v2 = _v4[_v5 + 1]);
        var _v7 = _v60("use");
        _v7.setAttribute("href", "#" + _v1), _v2 ? _v3.insertBefore(_v7, _v2) : _v3.appendChild(_v7);
      }
    }, _v295.prototype.setElementAsMask = function (_v0, _v1) {
      if (!this.findSymbol(_v1)) {
        var _v2 = _v43(),
          _v3 = _v60("mask");
        _v3.setAttribute("id", _v1.layerId), _v3.setAttribute("mask-type", "alpha"), _v294.push(_v1);
        var _v4 = _v0.globalData.defs;
        _v4.appendChild(_v3);
        var _v5 = _v60("symbol");
        _v5.setAttribute("id", _v2), this.replaceInParent(_v1, _v2), _v5.appendChild(_v1.layerElement), _v4.appendChild(_v5);
        var _v6 = _v60("use");
        _v6.setAttribute("href", "#" + _v2), _v3.appendChild(_v6), _v1.data.hd = !1, _v1.show();
      }
      _v0.setMatte(_v1.layerId);
    }, _v295.prototype.initialize = function () {
      for (var _v0 = this.filterManager.effectElements[0].p.v, _v1 = this.elem.comp.elements, _v2 = 0, _v3 = _v1.length; _v2 < _v3;) _v1[_v2] && _v1[_v2].data.ind === _v0 && this.setElementAsMask(this.elem, _v1[_v2]), _v2 += 1;
      this.initialized = !0;
    }, _v295.prototype.renderFrame = function () {
      this.initialized || this.initialize();
    }, _v296.prototype.renderFrame = function (_v0) {
      if (_v0 || this.filterManager._mdf) {
        var _v1 = .3,
          _v2 = this.filterManager.effectElements[0].p.v * _v1,
          _v3 = this.filterManager.effectElements[1].p.v,
          _v4 = 3 == _v3 ? 0 : _v2,
          _v5 = 2 == _v3 ? 0 : _v2;
        this.feGaussianBlur.setAttribute("stdDeviation", _v4 + " " + _v5);
        var _v6 = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
        this.feGaussianBlur.setAttribute("edgeMode", _v6);
      }
    }, _v297.prototype.init = function (_v0) {
      this.effectsManager = _v0, this.type = _v185.TRANSFORM_EFFECT, this.matrix = new _v103(), this.opacity = -1, this._mdf = !1, this._opMdf = !1;
    }, _v297.prototype.renderFrame = function (_v0) {
      if (this._opMdf = !1, this._mdf = !1, _v0 || this.effectsManager._mdf) {
        var _v1 = this.effectsManager.effectElements,
          _v2 = _v1[0].p.v,
          _v3 = _v1[1].p.v,
          _v4 = 1 === _v1[2].p.v,
          _v5 = _v1[3].p.v,
          _v6 = _v4 ? _v5 : _v1[4].p.v,
          _v7 = _v1[5].p.v,
          _v8 = _v1[6].p.v,
          _v9 = _v1[7].p.v;
        this.matrix.reset(), this.matrix.translate(-_v2[0], -_v2[1], _v2[2]), this.matrix.scale(.01 * _v6, .01 * _v5, 1), this.matrix.rotate(-_v9 * _v30), this.matrix.skewFromAxis(-_v7 * _v30, (_v8 + 90) * _v30), this.matrix.translate(_v3[0], _v3[1], 0), this._mdf = !0, this.opacity !== _v1[8].p.v && (this.opacity = _v1[8].p.v, this._opMdf = !0);
      }
    }, _v9([_v297], _v298), _v9([_v297], _v299), _v68("canvas", _v249), _v68("html", _v258), _v68("svg", _v229), _v125.registerModifier("tm", _v127), _v125.registerModifier("pb", _v128), _v125.registerModifier("rp", _v130), _v125.registerModifier("rd", _v131), _v125.registerModifier("zz", _v150), _v125.registerModifier("op", _v163), _v52(_v266), _v54(_v280), _v283(), _v285(), _v193(20, _v288, !0), _v193(21, _v289, !0), _v193(22, _v290, !1), _v193(23, _v291, !0), _v193(24, _v292, !0), _v193(25, _v293, !0), _v193(28, _v295, !1), _v193(29, _v296, !0), _v193(35, _v298, !1), _v236(35, _v299), _v105;
  });
}