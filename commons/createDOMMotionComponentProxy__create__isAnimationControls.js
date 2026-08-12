{
  "use strict";

  let _v1, _v2;
  function _v3(_v0) {
    return null !== _v0 && "object" == typeof _v0 && "function" == typeof _v0.start;
  }
  _v0.i(0), _v0.s(["createDOMMotionComponentProxy", 0, function (_v0) {
    if ("u" < typeof Proxy) return _v0;
    let _v1 = new Map();
    return new Proxy((..._v0) => _v0(..._v0), {
      get: (_v0, _v1) => "create" === _v1 ? _v0 : (_v1.has(_v1) || _v1.set(_v1, _v0(_v1)), _v1.get(_v1))
    });
  }], 0), _v0.s(["isAnimationControls", 0, _v3], 0);
  let _v4 = _v0 => Array.isArray(_v0);
  function _v5(_v0, _v1) {
    if (!Array.isArray(_v1)) return !1;
    let _v2 = _v1.length;
    if (_v2 !== _v0.length) return !1;
    for (let _v0 = 0; _v0 < _v2; _v0++) if (_v1[_v0] !== _v0[_v0]) return !1;
    return !0;
  }
  function _v6(_v0) {
    return "string" == typeof _v0 || Array.isArray(_v0);
  }
  function _v7(_v0) {
    let _v1 = [{}, {}];
    return null == _v0 || _v0.values.forEach((_v0, _v1) => {
      _v1[0][_v1] = _v0.get(), _v1[1][_v1] = _v0.getVelocity();
    }), _v1;
  }
  function _v8(_v0, _v1, _v2, _v3) {
    if ("function" == typeof _v1) {
      let [_v0, _v1] = _v7(_v3);
      _v1 = _v1(void 0 !== _v2 ? _v2 : _v0.custom, _v0, _v1);
    }
    if ("string" == typeof _v1 && (_v1 = _v0.variants && _v0.variants[_v1]), "function" == typeof _v1) {
      let [_v0, _v1] = _v7(_v3);
      _v1 = _v1(void 0 !== _v2 ? _v2 : _v0.custom, _v0, _v1);
    }
    return _v1;
  }
  function _v9(_v0, _v1, _v2) {
    let _v3 = _v0.getProps();
    return _v8(_v3, _v1, void 0 !== _v2 ? _v2 : _v3.custom, _v0);
  }
  _v0.s(["isVariantLabel", 0, _v6], 0), _v0.s(["resolveVariantFromProps", 0, _v8], 0);
  let _v10 = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
    _v11 = ["initial", ..._v10];
  _v0.s(["variantPriorityOrder", 0, _v10, "variantProps", 0, _v11], 0);
  let _v12 = _v0 => _v0;
  function _v13(_v0) {
    let _v1;
    return () => (void 0 === _v1 && (_v1 = _v0()), _v1);
  }
  _v0.s(["noop", 0, _v12], 0), _v0.s(["invariant", 0, _v12, "warning", 0, _v12], 0), _v0.s([], 0);
  let _v14 = _v13(() => void 0 !== window.ScrollTimeline);
  class _v15 {
    constructor(_v0) {
      this.stop = () => this.runAll("stop"), this.animations = _v0.filter(Boolean);
    }
    get finished() {
      return Promise.all(this.animations.map(_v0 => "finished" in _v0 ? _v0.finished : _v0));
    }
    getAll(_v0) {
      return this.animations[0][_v0];
    }
    setAll(_v0, _v1) {
      for (let _v0 = 0; _v0 < this.animations.length; _v0++) this.animations[_v0][_v0] = _v1;
    }
    attachTimeline(_v0, _v1) {
      let _v2 = this.animations.map(_v0 => _v14() && _v0.attachTimeline ? _v0.attachTimeline(_v0) : "function" == typeof _v1 ? _v1(_v0) : void 0);
      return () => {
        _v2.forEach((_v0, _v1) => {
          _v0 && _v0(), this.animations[_v1].stop();
        });
      };
    }
    get time() {
      return this.getAll("time");
    }
    set time(_v0) {
      this.setAll("time", _v0);
    }
    get speed() {
      return this.getAll("speed");
    }
    set speed(_v0) {
      this.setAll("speed", _v0);
    }
    get startTime() {
      return this.getAll("startTime");
    }
    get duration() {
      let _v0 = 0;
      for (let _v0 = 0; _v0 < this.animations.length; _v0++) _v0 = Math.max(_v0, this.animations[_v0].duration);
      return _v0;
    }
    runAll(_v0) {
      this.animations.forEach(_v0 => _v0[_v0]());
    }
    flatten() {
      this.runAll("flatten");
    }
    play() {
      this.runAll("play");
    }
    pause() {
      this.runAll("pause");
    }
    cancel() {
      this.runAll("cancel");
    }
    complete() {
      this.runAll("complete");
    }
  }
  class _v16 extends _v15 {
    then(_v0, _v1) {
      return Promise.all(this.animations).then(_v0).catch(_v1);
    }
  }
  let _v17 = _v0 => 0 * _v0,
    _v18 = _v0 => _v0 / 0;
  function _v19(_v0) {
    let _v1 = 0,
      _v2 = _v0.next(_v1);
    for (; !_v2.done && _v1 < 0;) _v1 += 50, _v2 = _v0.next(_v1);
    return _v1 >= 0 ? 1 / 0 : _v1;
  }
  function _v20(_v0, _v1) {
    _v0.timeline = _v1, _v0.onfinish = null;
  }
  _v0.s(["millisecondsToSeconds", 0, _v18, "secondsToMilliseconds", 0, _v17], 0);
  let _v21 = _v0 => Array.isArray(_v0) && "number" == typeof _v0[0],
    _v22,
    _v23 = (_v2 = _v13(() => {
      try {
        document.createElement("div").animate({
          opacity: 0
        }, {
          easing: "linear(0, 1)"
        });
      } catch (_v0) {
        return !1;
      }
      return !0;
    }), () => {
      var _v0;
      return null != (_v0 = _v22) ? _v0 : _v2();
    }),
    _v24 = (_v0, _v1, _v2) => {
      let _v3 = _v1 - _v0;
      return 0 === _v3 ? 1 : (_v2 - _v0) / _v3;
    };
  _v0.s(["progress", 0, _v24], 0);
  let _v25 = (_v0, _v1, _v2 = 10) => {
      let _v3 = "",
        _v4 = Math.max(Math.round(_v1 / _v2), 2);
      for (let _v0 = 0; _v0 < _v4; _v0++) _v3 += _v0(_v24(0, _v4 - 1, _v0)) + ", ";
      return `linear(${_v3.substring(0, _v3.length - 2)})`;
    },
    _v26 = ([_v0, _v1, _v2, _v3]) => `cubic-bezier(${_v0}, ${_v1}, ${_v2}, ${_v3})`,
    _v27 = {
      linear: "linear",
      ease: "ease",
      easeIn: "ease-in",
      easeOut: "ease-out",
      easeInOut: "ease-in-out",
      circIn: _v26([0, .65, .55, 1]),
      circOut: _v26([.55, 0, 1, .45]),
      backIn: _v26([.31, .01, .66, -.59]),
      backOut: _v26([.33, 1.53, .69, .99])
    };
  function _v28(_v0, _v1) {
    return _v0 ? _v0[_v1] || _v0.default || _v0 : void 0;
  }
  function _v29(_v0) {
    return "function" == typeof _v0;
  }
  _v0.s(["getValueTransition", 0, _v28], 0), _v0.s([], 0);
  let _v30 = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
    _v31 = new Set(_v30);
  _v0.s(["transformPropOrder", 0, _v30, "transformProps", 0, _v31], 0);
  let _v32 = new Set(["width", "height", "top", "left", "right", "bottom", ..._v30]),
    _v33 = _v0 => _v4(_v0) ? _v0[_v0.length - 1] || 0 : _v0;
  _v0.s(["isCustomValue", 0, _v0 => !!(_v0 && "object" == typeof _v0 && _v0.mix && _v0.toValue), "resolveFinalValueInKeyframes", 0, _v33], 0);
  let _v34 = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"];
  function _v35(_v0, _v1) {
    let _v2 = !1,
      _v3 = !0,
      _v4 = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
      },
      _v5 = () => _v2 = !0,
      _v6 = _v34.reduce((_v0, _v1) => (_v0[_v1] = function (_v0) {
        let _v1 = new Set(),
          _v2 = new Set(),
          _v3 = !1,
          _v4 = !1,
          _v5 = new WeakSet(),
          _v6 = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
          };
        function _v7(_v0) {
          _v5.has(_v0) && (_v8.schedule(_v0), _v0()), _v0(_v6);
        }
        let _v8 = {
          schedule: (_v0, _v1 = !1, _v2 = !1) => {
            let _v3 = _v2 && _v3 ? _v1 : _v2;
            return _v1 && _v5.add(_v0), _v3.has(_v0) || _v3.add(_v0), _v0;
          },
          cancel: _v0 => {
            _v2.delete(_v0), _v5.delete(_v0);
          },
          process: _v0 => {
            if (_v6 = _v0, _v3) {
              _v4 = !0;
              return;
            }
            _v3 = !0, [_v1, _v2] = [_v2, _v1], _v1.forEach(_v7), _v1.clear(), _v3 = !1, _v4 && (_v4 = !1, _v8.process(_v0));
          }
        };
        return _v8;
      }(_v5), _v0), {}),
      {
        read: _v7,
        resolveKeyframes: _v8,
        update: _v9,
        preRender: _v10,
        render: _v11,
        postRender: _v12
      } = _v6,
      _v13 = () => {
        let _v0 = performance.now();
        _v2 = !1, _v4.delta = _v3 ? 0 / 60 : Math.max(Math.min(_v0 - _v4.timestamp, 40), 1), _v4.timestamp = _v0, _v4.isProcessing = !0, _v7.process(_v4), _v8.process(_v4), _v9.process(_v4), _v10.process(_v4), _v11.process(_v4), _v12.process(_v4), _v4.isProcessing = !1, _v2 && _v1 && (_v3 = !1, _v0(_v13));
      };
    return {
      schedule: _v34.reduce((_v0, _v1) => {
        let _v2 = _v6[_v1];
        return _v0[_v1] = (_v0, _v1 = !1, _v2 = !1) => (!_v2 && (_v2 = !0, _v3 = !0, _v4.isProcessing || _v0(_v13)), _v2.schedule(_v0, _v1, _v2)), _v0;
      }, {}),
      cancel: _v0 => {
        for (let _v0 = 0; _v0 < _v34.length; _v0++) _v6[_v34[_v0]].cancel(_v0);
      },
      state: _v4,
      steps: _v6
    };
  }
  _v0.s(["createRenderBatcher", 0, _v35], 0);
  let {
    schedule: _v36,
    cancel: _v37,
    state: _v38,
    steps: _v39
  } = _v35("u" > typeof requestAnimationFrame ? requestAnimationFrame : _v12, !0);
  function _v40() {
    _v1 = void 0;
  }
  _v0.s(["cancelFrame", 0, _v37, "frame", 0, _v36, "frameData", 0, _v38, "frameSteps", 0, _v39], 0);
  let _v41 = {
    now: () => (void 0 === _v1 && _v41.set(_v38.isProcessing ? _v38.timestamp : performance.now()), _v1),
    set: _v0 => {
      _v1 = _v0, queueMicrotask(_v40);
    }
  };
  function _v42(_v0, _v1) {
    -1 === _v0.indexOf(_v1) && _v0.push(_v1);
  }
  function _v43(_v0, _v1) {
    let _v2 = _v0.indexOf(_v1);
    _v2 > -1 && _v0.splice(_v2, 1);
  }
  _v0.s(["time", 0, _v41], 0), _v0.s(["addUniqueItem", 0, _v42, "moveItem", 0, function ([..._v0], _v1, _v2) {
    let _v3 = _v1 < 0 ? _v0.length + _v1 : _v1;
    if (_v3 >= 0 && _v3 < _v0.length) {
      let _v0 = _v2 < 0 ? _v0.length + _v2 : _v2,
        [_v1] = _v0.splice(_v1, 1);
      _v0.splice(_v0, 0, _v1);
    }
    return _v0;
  }, "removeItem", 0, _v43], 0);
  class _v44 {
    constructor() {
      this.subscriptions = [];
    }
    add(_v0) {
      return _v42(this.subscriptions, _v0), () => _v43(this.subscriptions, _v0);
    }
    notify(_v0, _v1, _v2) {
      let _v3 = this.subscriptions.length;
      if (_v3) if (1 === _v3) this.subscriptions[0](_v0, _v1, _v2);else for (let _v0 = 0; _v0 < _v3; _v0++) {
        let _v0 = this.subscriptions[_v0];
        _v0 && _v0(_v0, _v1, _v2);
      }
    }
    getSize() {
      return this.subscriptions.length;
    }
    clear() {
      this.subscriptions.length = 0;
    }
  }
  _v0.s(["SubscriptionManager", 0, _v44], 0);
  let _v45 = {
    current: void 0
  };
  class _v46 {
    constructor(_v0, _v1 = {}) {
      this.version = "11.18.2", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (_v0, _v1 = !0) => {
        let _v2 = _v41.now();
        this.updatedAt !== _v2 && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(_v0), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), _v1 && this.events.renderRequest && this.events.renderRequest.notify(this.current);
      }, this.hasAnimated = !1, this.setCurrent(_v0), this.owner = _v1.owner;
    }
    setCurrent(_v0) {
      this.current = _v0, this.updatedAt = _v41.now(), null === this.canTrackVelocity && void 0 !== _v0 && (this.canTrackVelocity = !isNaN(parseFloat(this.current)));
    }
    setPrevFrameValue(_v0 = this.current) {
      this.prevFrameValue = _v0, this.prevUpdatedAt = this.updatedAt;
    }
    onChange(_v0) {
      return this.on("change", _v0);
    }
    on(_v0, _v1) {
      this.events[_v0] || (this.events[_v0] = new _v44());
      let _v2 = this.events[_v0].add(_v1);
      return "change" === _v0 ? () => {
        _v2(), _v36.read(() => {
          this.events.change.getSize() || this.stop();
        });
      } : _v2;
    }
    clearListeners() {
      for (let _v0 in this.events) this.events[_v0].clear();
    }
    attach(_v0, _v1) {
      this.passiveEffect = _v0, this.stopPassiveEffect = _v1;
    }
    set(_v0, _v1 = !0) {
      _v1 && this.passiveEffect ? this.passiveEffect(_v0, this.updateAndNotify) : this.updateAndNotify(_v0, _v1);
    }
    setWithVelocity(_v0, _v1, _v2) {
      this.set(_v1), this.prev = void 0, this.prevFrameValue = _v0, this.prevUpdatedAt = this.updatedAt - _v2;
    }
    jump(_v0, _v1 = !0) {
      this.updateAndNotify(_v0), this.prev = _v0, this.prevUpdatedAt = this.prevFrameValue = void 0, _v1 && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
    }
    get() {
      return _v45.current && _v45.current.push(this), this.current;
    }
    getPrevious() {
      return this.prev;
    }
    getVelocity() {
      var _v0;
      let _v1 = _v41.now();
      if (!this.canTrackVelocity || void 0 === this.prevFrameValue || _v1 - this.updatedAt > 30) return 0;
      let _v2 = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
      return _v0 = parseFloat(this.current) - parseFloat(this.prevFrameValue), _v2 ? 0 / _v2 * _v0 : 0;
    }
    start(_v0) {
      return this.stop(), new Promise(_v0 => {
        this.hasAnimated = !0, this.animation = _v0(_v0), this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
      });
    }
    stop() {
      this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
    }
    isAnimating() {
      return !!this.animation;
    }
    clearAnimation() {
      delete this.animation;
    }
    destroy() {
      this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
    }
  }
  function _v47(_v0, _v1) {
    return new _v46(_v0, _v1);
  }
  function _v48(_v0, _v1) {
    let {
      transitionEnd: _v2 = {},
      transition: _v3 = {},
      ..._v4
    } = _v9(_v0, _v1) || {};
    for (let _v0 in _v4 = {
      ..._v4,
      ..._v2
    }) {
      let _v0 = _v33(_v4[_v0]);
      _v0.hasValue(_v0) ? _v0.getValue(_v0).set(_v0) : _v0.addValue(_v0, _v47(_v0));
    }
  }
  _v0.s(["collectMotionValues", 0, _v45, "motionValue", 0, _v47], 0), _v0.s(["setTarget", 0, _v48], 0);
  let _v49 = _v0 => !!(_v0 && _v0.getVelocity);
  function _v50(_v0, _v1) {
    let _v2 = _v0.getValue("willChange");
    if (_v49(_v2) && _v2.add) return _v2.add(_v1);
  }
  _v0.s(["isMotionValue", 0, _v49], 0);
  let _v51 = _v0 => _v0.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase();
  _v0.s(["camelToDash", 0, _v51], 0);
  let _v52 = "data-" + _v51("framerAppearId");
  function _v53(_v0) {
    return _v0.props[_v52];
  }
  _v0.s(["optimizedAppearDataAttribute", 0, _v52], 0), _v0.s(["getOptimisedAppearId", 0, _v53], 0);
  let _v54 = (_v0, _v1, _v2) => (((1 - 3 * _v2 + 3 * _v1) * _v0 + (3 * _v2 - 6 * _v1)) * _v0 + 3 * _v1) * _v0;
  function _v55(_v0, _v1, _v2, _v3) {
    return _v0 === _v1 && _v2 === _v3 ? _v12 : _v0 => 0 === _v0 || 1 === _v0 ? _v0 : _v54(function (_v0, _v1, _v2, _v3, _v4) {
      let _v5,
        _v6,
        _v7 = 0;
      do (_v5 = _v54(_v6 = _v1 + (_v2 - _v1) / 2, _v3, _v4) - _v0) > 0 ? _v2 = _v6 : _v1 = _v6; while (Math.abs(_v5) > 1e-7 && ++_v7 < 12);
      return _v6;
    }(_v0, 0, 1, _v0, _v2), _v1, _v3);
  }
  _v0.s(["cubicBezier", 0, _v55], 0);
  let _v56 = _v0 => _v0 => _v0 <= .5 ? _v0(2 * _v0) / 2 : (2 - _v0(2 * (1 - _v0))) / 2,
    _v57 = _v0 => _v0 => 1 - _v0(1 - _v0),
    _v58 = _v55(.33, 1.53, .69, .99),
    _v59 = _v57(_v58),
    _v60 = _v56(_v59),
    _v61 = _v0 => (_v0 *= 2) < 1 ? .5 * _v59(_v0) : .5 * (2 - Math.pow(2, -10 * (_v0 - 1))),
    _v62 = _v0 => 1 - Math.sin(Math.acos(_v0)),
    _v63 = _v57(_v62),
    _v64 = _v56(_v62);
  _v0.s(["circIn", 0, _v62, "circInOut", 0, _v64, "circOut", 0, _v63], 0);
  let _v65 = _v0 => /^0[^.\s]+$/u.test(_v0);
  _v0.s(["isZeroValueString", 0, _v65], 0);
  let _v66 = (_v0, _v1, _v2) => _v2 > _v1 ? _v1 : _v2 < _v0 ? _v0 : _v2;
  _v0.s(["clamp", 0, _v66], 0);
  let _v67 = {
      test: _v0 => "number" == typeof _v0,
      parse: parseFloat,
      transform: _v0 => _v0
    },
    _v68 = {
      ..._v67,
      transform: _v0 => _v66(0, 1, _v0)
    },
    _v69 = {
      ..._v67,
      default: 1
    },
    _v70 = _v0 => Math.round(0 * _v0) / 0,
    _v71 = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
    _v72 = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
    _v73 = (_v0, _v1) => _v0 => !!("string" == typeof _v0 && _v72.test(_v0) && _v0.startsWith(_v0) || _v1 && null != _v0 && Object.prototype.hasOwnProperty.call(_v0, _v1)),
    _v74 = (_v0, _v1, _v2) => _v0 => {
      if ("string" != typeof _v0) return _v0;
      let [_v1, _v2, _v3, _v4] = _v0.match(_v71);
      return {
        [_v0]: parseFloat(_v1),
        [_v1]: parseFloat(_v2),
        [_v2]: parseFloat(_v3),
        alpha: void 0 !== _v4 ? parseFloat(_v4) : 1
      };
    },
    _v75 = {
      ..._v67,
      transform: _v0 => Math.round(_v66(0, 255, _v0))
    },
    _v76 = {
      test: _v73("rgb", "red"),
      parse: _v74("red", "green", "blue"),
      transform: ({
        red: _v0,
        green: _v1,
        blue: _v2,
        alpha: _v3 = 1
      }) => "rgba(" + _v75.transform(_v0) + ", " + _v75.transform(_v1) + ", " + _v75.transform(_v2) + ", " + _v70(_v68.transform(_v3)) + ")"
    },
    _v77 = {
      test: _v73("#"),
      parse: function (_v0) {
        let _v1 = "",
          _v2 = "",
          _v3 = "",
          _v4 = "";
        return _v0.length > 5 ? (_v1 = _v0.substring(1, 3), _v2 = _v0.substring(3, 5), _v3 = _v0.substring(5, 7), _v4 = _v0.substring(7, 9)) : (_v1 = _v0.substring(1, 2), _v2 = _v0.substring(2, 3), _v3 = _v0.substring(3, 4), _v4 = _v0.substring(4, 5), _v1 += _v1, _v2 += _v2, _v3 += _v3, _v4 += _v4), {
          red: parseInt(_v1, 16),
          green: parseInt(_v2, 16),
          blue: parseInt(_v3, 16),
          alpha: _v4 ? parseInt(_v4, 16) / 255 : 1
        };
      },
      transform: _v76.transform
    },
    _v78 = _v0 => ({
      test: _v0 => "string" == typeof _v0 && _v0.endsWith(_v0) && 1 === _v0.split(" ").length,
      parse: parseFloat,
      transform: _v0 => `${_v0}${_v0}`
    }),
    _v79 = _v78("deg"),
    _v80 = _v78("%"),
    _v81 = _v78("px"),
    _v82 = _v78("vh"),
    _v83 = _v78("vw"),
    _v84 = {
      ..._v80,
      parse: _v0 => _v80.parse(_v0) / 100,
      transform: _v0 => _v80.transform(100 * _v0)
    };
  _v0.s(["degrees", 0, _v79, "percent", 0, _v80, "progressPercentage", 0, _v84, "px", 0, _v81, "vh", 0, _v82, "vw", 0, _v83], 0);
  let _v85 = {
      test: _v73("hsl", "hue"),
      parse: _v74("hue", "saturation", "lightness"),
      transform: ({
        hue: _v0,
        saturation: _v1,
        lightness: _v2,
        alpha: _v3 = 1
      }) => "hsla(" + Math.round(_v0) + ", " + _v80.transform(_v70(_v1)) + ", " + _v80.transform(_v70(_v2)) + ", " + _v70(_v68.transform(_v3)) + ")"
    },
    _v86 = {
      test: _v0 => _v76.test(_v0) || _v77.test(_v0) || _v85.test(_v0),
      parse: _v0 => _v76.test(_v0) ? _v76.parse(_v0) : _v85.test(_v0) ? _v85.parse(_v0) : _v77.parse(_v0),
      transform: _v0 => "string" == typeof _v0 ? _v0 : _v0.hasOwnProperty("red") ? _v76.transform(_v0) : _v85.transform(_v0)
    };
  _v0.s(["color", 0, _v86], 0);
  let _v87 = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
    _v88 = "number",
    _v89 = "color",
    _v90 = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
  function _v91(_v0) {
    let _v1 = _v0.toString(),
      _v2 = [],
      _v3 = {
        color: [],
        number: [],
        var: []
      },
      _v4 = [],
      _v5 = 0,
      _v6 = _v1.replace(_v90, _v0 => (_v86.test(_v0) ? (_v3.color.push(_v5), _v4.push(_v89), _v2.push(_v86.parse(_v0))) : _v0.startsWith("var(") ? (_v3.var.push(_v5), _v4.push("var"), _v2.push(_v0)) : (_v3.number.push(_v5), _v4.push(_v88), _v2.push(parseFloat(_v0))), ++_v5, "${}")).split("${}");
    return {
      values: _v2,
      split: _v6,
      indexes: _v3,
      types: _v4
    };
  }
  function _v92(_v0) {
    return _v91(_v0).values;
  }
  function _v93(_v0) {
    let {
        split: _v1,
        types: _v2
      } = _v91(_v0),
      _v3 = _v1.length;
    return _v0 => {
      let _v1 = "";
      for (let _v0 = 0; _v0 < _v3; _v0++) if (_v1 += _v1[_v0], void 0 !== _v0[_v0]) {
        let _v0 = _v2[_v0];
        _v0 === _v88 ? _v1 += _v70(_v0[_v0]) : _v0 === _v89 ? _v1 += _v86.transform(_v0[_v0]) : _v1 += _v0[_v0];
      }
      return _v1;
    };
  }
  let _v94 = _v0 => "number" == typeof _v0 ? 0 : _v0,
    _v95 = {
      test: function (_v0) {
        var _v1, _v2;
        return isNaN(_v0) && "string" == typeof _v0 && ((null == (_v1 = _v0.match(_v71)) ? void 0 : _v1.length) || 0) + ((null == (_v2 = _v0.match(_v87)) ? void 0 : _v2.length) || 0) > 0;
      },
      parse: _v92,
      createTransformer: _v93,
      getAnimatableNone: function (_v0) {
        let _v1 = _v92(_v0);
        return _v93(_v0)(_v1.map(_v94));
      }
    };
  _v0.s(["analyseComplexValue", 0, _v91, "complex", 0, _v95], 0);
  let _v96 = new Set(["brightness", "contrast", "saturate", "opacity"]);
  function _v97(_v0) {
    let [_v1, _v2] = _v0.slice(0, -1).split("(");
    if ("drop-shadow" === _v1) return _v0;
    let [_v3] = _v2.match(_v71) || [];
    if (!_v3) return _v0;
    let _v4 = _v2.replace(_v3, ""),
      _v5 = +!!_v96.has(_v1);
    return _v3 !== _v2 && (_v5 *= 100), _v1 + "(" + _v5 + _v4 + ")";
  }
  let _v98 = /\b([a-z-]*)\(.*?\)/gu,
    _v99 = {
      ..._v95,
      getAnimatableNone: _v0 => {
        let _v1 = _v0.match(_v98);
        return _v1 ? _v1.map(_v97).join(" ") : _v0;
      }
    },
    _v100 = {
      ..._v67,
      transform: Math.round
    },
    _v101 = {
      borderWidth: _v81,
      borderTopWidth: _v81,
      borderRightWidth: _v81,
      borderBottomWidth: _v81,
      borderLeftWidth: _v81,
      borderRadius: _v81,
      radius: _v81,
      borderTopLeftRadius: _v81,
      borderTopRightRadius: _v81,
      borderBottomRightRadius: _v81,
      borderBottomLeftRadius: _v81,
      width: _v81,
      maxWidth: _v81,
      height: _v81,
      maxHeight: _v81,
      top: _v81,
      right: _v81,
      bottom: _v81,
      left: _v81,
      padding: _v81,
      paddingTop: _v81,
      paddingRight: _v81,
      paddingBottom: _v81,
      paddingLeft: _v81,
      margin: _v81,
      marginTop: _v81,
      marginRight: _v81,
      marginBottom: _v81,
      marginLeft: _v81,
      backgroundPositionX: _v81,
      backgroundPositionY: _v81,
      rotate: _v79,
      rotateX: _v79,
      rotateY: _v79,
      rotateZ: _v79,
      scale: _v69,
      scaleX: _v69,
      scaleY: _v69,
      scaleZ: _v69,
      skew: _v79,
      skewX: _v79,
      skewY: _v79,
      distance: _v81,
      translateX: _v81,
      translateY: _v81,
      translateZ: _v81,
      x: _v81,
      y: _v81,
      z: _v81,
      perspective: _v81,
      transformPerspective: _v81,
      opacity: _v68,
      originX: _v84,
      originY: _v84,
      originZ: _v81,
      zIndex: _v100,
      size: _v81,
      fillOpacity: _v68,
      strokeOpacity: _v68,
      numOctaves: _v100
    };
  _v0.s(["numberValueTypes", 0, _v101], 0);
  let _v102 = {
      ..._v101,
      color: _v86,
      backgroundColor: _v86,
      outlineColor: _v86,
      fill: _v86,
      stroke: _v86,
      borderColor: _v86,
      borderTopColor: _v86,
      borderRightColor: _v86,
      borderBottomColor: _v86,
      borderLeftColor: _v86,
      filter: _v99,
      WebkitFilter: _v99
    },
    _v103 = _v0 => _v102[_v0];
  function _v104(_v0, _v1) {
    let _v2 = _v103(_v0);
    return _v2 !== _v99 && (_v2 = _v95), _v2.getAnimatableNone ? _v2.getAnimatableNone(_v1) : void 0;
  }
  _v0.s(["getDefaultValueType", 0, _v103], 0), _v0.s(["getAnimatableNone", 0, _v104], 0);
  let _v105 = new Set(["auto", "none", "0"]),
    _v106 = _v0 => _v0 === _v67 || _v0 === _v81,
    _v107 = (_v0, _v1) => parseFloat(_v0.split(", ")[_v1]),
    _v108 = (_v0, _v1) => (_v0, {
      transform: _v1
    }) => {
      if ("none" === _v1 || !_v1) return 0;
      let _v2 = _v1.match(/^matrix3d\((.+)\)$/u);
      if (_v2) return _v107(_v2[1], _v1);
      {
        let _v0 = _v1.match(/^matrix\((.+)\)$/u);
        return _v0 ? _v107(_v0[1], _v0) : 0;
      }
    },
    _v109 = new Set(["x", "y", "z"]),
    _v110 = _v30.filter(_v0 => !_v109.has(_v0)),
    _v111 = {
      width: ({
        x: _v0
      }, {
        paddingLeft: _v1 = "0",
        paddingRight: _v2 = "0"
      }) => _v0.max - _v0.min - parseFloat(_v1) - parseFloat(_v2),
      height: ({
        y: _v0
      }, {
        paddingTop: _v1 = "0",
        paddingBottom: _v2 = "0"
      }) => _v0.max - _v0.min - parseFloat(_v1) - parseFloat(_v2),
      top: (_v0, {
        top: _v1
      }) => parseFloat(_v1),
      left: (_v0, {
        left: _v1
      }) => parseFloat(_v1),
      bottom: ({
        y: _v0
      }, {
        top: _v1
      }) => parseFloat(_v1) + (_v0.max - _v0.min),
      right: ({
        x: _v0
      }, {
        left: _v1
      }) => parseFloat(_v1) + (_v0.max - _v0.min),
      x: _v108(4, 13),
      y: _v108(5, 14)
    };
  _v111.translateX = _v111.x, _v111.translateY = _v111.y;
  let _v112 = new Set(),
    _v113 = !1,
    _v114 = !1;
  function _v115() {
    if (_v114) {
      let _v0 = Array.from(_v112).filter(_v0 => _v0.needsMeasurement),
        _v1 = new Set(_v0.map(_v0 => _v0.element)),
        _v2 = new Map();
      _v1.forEach(_v0 => {
        let _v1,
          _v2 = (_v1 = [], _v110.forEach(_v0 => {
            let _v1 = _v0.getValue(_v0);
            void 0 !== _v1 && (_v1.push([_v0, _v1.get()]), _v1.set(+!!_v0.startsWith("scale")));
          }), _v1);
        _v2.length && (_v2.set(_v0, _v2), _v0.render());
      }), _v0.forEach(_v0 => _v0.measureInitialState()), _v1.forEach(_v0 => {
        _v0.render();
        let _v1 = _v2.get(_v0);
        _v1 && _v1.forEach(([_v0, _v1]) => {
          var _v2;
          null == (_v2 = _v0.getValue(_v0)) || _v2.set(_v1);
        });
      }), _v0.forEach(_v0 => _v0.measureEndState()), _v0.forEach(_v0 => {
        void 0 !== _v0.suspendedScrollY && window.scrollTo(0, _v0.suspendedScrollY);
      });
    }
    _v114 = !1, _v113 = !1, _v112.forEach(_v0 => _v0.complete()), _v112.clear();
  }
  function _v116() {
    _v112.forEach(_v0 => {
      _v0.readKeyframes(), _v0.needsMeasurement && (_v114 = !0);
    });
  }
  function _v117() {
    _v116(), _v115();
  }
  class _v118 {
    constructor(_v0, _v1, _v2, _v3, _v4, _v5 = !1) {
      this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [..._v0], this.onComplete = _v1, this.name = _v2, this.motionValue = _v3, this.element = _v4, this.isAsync = _v5;
    }
    scheduleResolve() {
      this.isScheduled = !0, this.isAsync ? (_v112.add(this), _v113 || (_v113 = !0, _v36.read(_v116), _v36.resolveKeyframes(_v115))) : (this.readKeyframes(), this.complete());
    }
    readKeyframes() {
      let {
        unresolvedKeyframes: _v0,
        name: _v1,
        element: _v2,
        motionValue: _v3
      } = this;
      for (let _v0 = 0; _v0 < _v0.length; _v0++) if (null === _v0[_v0]) if (0 === _v0) {
        let _v0 = null == _v3 ? void 0 : _v3.get(),
          _v1 = _v0[_v0.length - 1];
        if (void 0 !== _v0) _v0[0] = _v0;else if (_v2 && _v1) {
          let _v0 = _v2.readValue(_v1, _v1);
          null != _v0 && (_v0[0] = _v0);
        }
        void 0 === _v0[0] && (_v0[0] = _v1), _v3 && void 0 === _v0 && _v3.set(_v0[0]);
      } else _v0[_v0] = _v0[_v0 - 1];
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
      this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), _v112.delete(this);
    }
    cancel() {
      this.isComplete || (this.isScheduled = !1, _v112.delete(this));
    }
    resume() {
      this.isComplete || this.scheduleResolve();
    }
  }
  _v0.s(["KeyframeResolver", 0, _v118, "flushKeyframeResolvers", 0, _v117], 0);
  let _v119 = _v0 => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(_v0);
  _v0.s(["isNumericalString", 0, _v119], 0);
  let _v120 = _v0 => _v0 => "string" == typeof _v0 && _v0.startsWith(_v0),
    _v121 = _v120("--"),
    _v122 = _v120("var(--"),
    _v123 = _v0 => !!_v122(_v0) && _v124.test(_v0.split("/*")[0].trim()),
    _v124 = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
  _v0.s(["isCSSVariableName", 0, _v121, "isCSSVariableToken", 0, _v123], 0);
  let _v125 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
    _v126 = _v0 => _v0 => _v0.test(_v0);
  _v0.s(["testValueType", 0, _v126], 0);
  let _v127 = [_v67, _v81, _v80, _v79, _v83, _v82, {
      test: _v0 => "auto" === _v0,
      parse: _v0 => _v0
    }],
    _v128 = _v0 => _v127.find(_v126(_v0));
  _v0.s(["dimensionValueTypes", 0, _v127, "findDimensionValueType", 0, _v128], 0);
  class _v129 extends _v118 {
    constructor(_v0, _v1, _v2, _v3, _v4) {
      super(_v0, _v1, _v2, _v3, _v4, !0);
    }
    readKeyframes() {
      let {
        unresolvedKeyframes: _v0,
        element: _v1,
        name: _v2
      } = this;
      if (!_v1 || !_v1.current) return;
      super.readKeyframes();
      for (let _v0 = 0; _v0 < _v0.length; _v0++) {
        let _v0 = _v0[_v0];
        if ("string" == typeof _v0 && _v123(_v0 = _v0.trim())) {
          let _v0 = function _v0(_v1, _v2, _v3 = 1) {
            _v12(_v3 <= 4, `Max CSS variable fallback depth detected in property "${_v1}". This may indicate a circular fallback dependency.`);
            let [_v4, _v5] = function (_v0) {
              let _v1 = _v125.exec(_v0);
              if (!_v1) return [,];
              let [, _v2, _v3, _v4] = _v1;
              return [`--${null != _v2 ? _v2 : _v3}`, _v4];
            }(_v1);
            if (!_v4) return;
            let _v6 = window.getComputedStyle(_v2).getPropertyValue(_v4);
            if (_v6) {
              let _v0 = _v6.trim();
              return _v119(_v0) ? parseFloat(_v0) : _v0;
            }
            return _v123(_v5) ? _v0(_v5, _v2, _v3 + 1) : _v5;
          }(_v0, _v1.current);
          void 0 !== _v0 && (_v0[_v0] = _v0), _v0 === _v0.length - 1 && (this.finalKeyframe = _v0);
        }
      }
      if (this.resolveNoneKeyframes(), !_v32.has(_v2) || 2 !== _v0.length) return;
      let [_v3, _v4] = _v0,
        _v5 = _v128(_v3),
        _v6 = _v128(_v4);
      if (_v5 !== _v6) if (_v106(_v5) && _v106(_v6)) for (let _v0 = 0; _v0 < _v0.length; _v0++) {
        let _v0 = _v0[_v0];
        "string" == typeof _v0 && (_v0[_v0] = parseFloat(_v0));
      } else this.needsMeasurement = !0;
    }
    resolveNoneKeyframes() {
      let {
          unresolvedKeyframes: _v0,
          name: _v1
        } = this,
        _v2 = [];
      for (let _v0 = 0; _v0 < _v0.length; _v0++) {
        var _v3;
        ("number" == typeof (_v3 = _v0[_v0]) ? 0 === _v3 : null === _v3 || "none" === _v3 || "0" === _v3 || _v65(_v3)) && _v2.push(_v0);
      }
      _v2.length && function (_v0, _v1, _v2) {
        let _v3,
          _v4 = 0;
        for (; _v4 < _v0.length && !_v3;) {
          let _v0 = _v0[_v4];
          "string" == typeof _v0 && !_v105.has(_v0) && _v91(_v0).values.length && (_v3 = _v0[_v4]), _v4++;
        }
        if (_v3 && _v2) for (let _v0 of _v1) _v0[_v0] = _v104(_v2, _v3);
      }(_v0, _v2, _v1);
    }
    measureInitialState() {
      let {
        element: _v0,
        unresolvedKeyframes: _v1,
        name: _v2
      } = this;
      if (!_v0 || !_v0.current) return;
      "height" === _v2 && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = _v111[_v2](_v0.measureViewportBox(), window.getComputedStyle(_v0.current)), _v1[0] = this.measuredOrigin;
      let _v3 = _v1[_v1.length - 1];
      void 0 !== _v3 && _v0.getValue(_v2, _v3).jump(_v3, !1);
    }
    measureEndState() {
      var _v0;
      let {
        element: _v1,
        name: _v2,
        unresolvedKeyframes: _v3
      } = this;
      if (!_v1 || !_v1.current) return;
      let _v4 = _v1.getValue(_v2);
      _v4 && _v4.jump(this.measuredOrigin, !1);
      let _v5 = _v3.length - 1,
        _v6 = _v3[_v5];
      _v3[_v5] = _v111[_v2](_v1.measureViewportBox(), window.getComputedStyle(_v1.current)), null !== _v6 && void 0 === this.finalKeyframe && (this.finalKeyframe = _v6), (null == (_v0 = this.removedTransforms) ? void 0 : _v0.length) && this.removedTransforms.forEach(([_v0, _v1]) => {
        _v1.getValue(_v0).set(_v1);
      }), this.resolveNoneKeyframes();
    }
  }
  _v0.s(["DOMKeyframesResolver", 0, _v129], 0);
  let _v130 = (_v0, _v1) => "zIndex" !== _v1 && !!("number" == typeof _v0 || Array.isArray(_v0) || "string" == typeof _v0 && (_v95.test(_v0) || "0" === _v0) && !_v0.startsWith("url(")),
    _v131 = _v0 => null !== _v0;
  function _v132(_v0, {
    repeat: _v1,
    repeatType: _v2 = "loop"
  }, _v3) {
    let _v4 = _v0.filter(_v131),
      _v5 = _v1 && "loop" !== _v2 && _v1 % 2 == 1 ? 0 : _v4.length - 1;
    return _v5 && void 0 !== _v3 ? _v3 : _v4[_v5];
  }
  class _v133 {
    constructor({
      autoplay: _v0 = !0,
      delay: _v1 = 0,
      type: _v2 = "keyframes",
      repeat: _v3 = 0,
      repeatDelay: _v4 = 0,
      repeatType: _v5 = "loop",
      ..._v6
    }) {
      this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = _v41.now(), this.options = {
        autoplay: _v0,
        delay: _v1,
        type: _v2,
        repeat: _v3,
        repeatDelay: _v4,
        repeatType: _v5,
        ..._v6
      }, this.updateFinishedPromise();
    }
    calcStartTime() {
      return this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt;
    }
    get resolved() {
      return this._resolved || this.hasAttemptedResolve || _v117(), this._resolved;
    }
    onKeyframesResolved(_v0, _v1) {
      this.resolvedAt = _v41.now(), this.hasAttemptedResolve = !0;
      let {
        name: _v2,
        type: _v3,
        velocity: _v4,
        delay: _v5,
        onComplete: _v6,
        onUpdate: _v7,
        isGenerator: _v8
      } = this.options;
      if (!_v8 && !function (_v0, _v1, _v2, _v3) {
        let _v4 = _v0[0];
        if (null === _v4) return !1;
        if ("display" === _v1 || "visibility" === _v1) return !0;
        let _v5 = _v0[_v0.length - 1],
          _v6 = _v130(_v4, _v1),
          _v7 = _v130(_v5, _v1);
        return _v12(_v6 === _v7, `You are trying to animate ${_v1} from "${_v4}" to "${_v5}". ${_v4} is not an animatable value - to enable this animation set ${_v4} to a value animatable to ${_v5} via the \`style\` property.`), !!_v6 && !!_v7 && (function (_v0) {
          let _v1 = _v0[0];
          if (1 === _v0.length) return !0;
          for (let _v0 = 0; _v0 < _v0.length; _v0++) if (_v0[_v0] !== _v1) return !0;
        }(_v0) || ("spring" === _v2 || _v29(_v2)) && _v3);
      }(_v0, _v2, _v3, _v4)) if (_v5) this.options.duration = 0;else {
        _v7 && _v7(_v132(_v0, this.options, _v1)), _v6 && _v6(), this.resolveFinishedPromise();
        return;
      }
      let _v9 = this.initPlayback(_v0, _v1);
      !1 !== _v9 && (this._resolved = {
        keyframes: _v0,
        finalKeyframe: _v1,
        ..._v9
      }, this.onPostResolved());
    }
    onPostResolved() {}
    then(_v0, _v1) {
      return this.currentFinishedPromise.then(_v0, _v1);
    }
    flatten() {
      this.options.type = "keyframes", this.options.ease = "linear";
    }
    updateFinishedPromise() {
      this.currentFinishedPromise = new Promise(_v0 => {
        this.resolveFinishedPromise = _v0;
      });
    }
  }
  let _v134 = (_v0, _v1, _v2) => _v0 + (_v1 - _v0) * _v2;
  function _v135(_v0, _v1, _v2) {
    return (_v2 < 0 && (_v2 += 1), _v2 > 1 && (_v2 -= 1), _v2 < 1 / 6) ? _v0 + (_v1 - _v0) * 6 * _v2 : _v2 < .5 ? _v1 : _v2 < 2 / 3 ? _v0 + (_v1 - _v0) * (2 / 3 - _v2) * 6 : _v0;
  }
  function _v136(_v0, _v1) {
    return _v0 => _v0 > 0 ? _v1 : _v0;
  }
  _v0.s(["mixNumber", 0, _v134], 0);
  let _v137 = (_v0, _v1, _v2) => {
      let _v3 = _v0 * _v0,
        _v4 = _v2 * (_v1 * _v1 - _v3) + _v3;
      return _v4 < 0 ? 0 : Math.sqrt(_v4);
    },
    _v138 = [_v77, _v76, _v85];
  function _v139(_v0) {
    let _v1 = _v138.find(_v0 => _v0.test(_v0));
    if (_v12(!!_v1, `'${_v0}' is not an animatable color. Use the equivalent color code instead.`), !_v1) return !1;
    let _v2 = _v1.parse(_v0);
    return _v1 === _v85 && (_v2 = function ({
      hue: _v0,
      saturation: _v1,
      lightness: _v2,
      alpha: _v3
    }) {
      _v0 /= 360, _v2 /= 100;
      let _v4 = 0,
        _v5 = 0,
        _v6 = 0;
      if (_v1 /= 100) {
        let _v0 = _v2 < .5 ? _v2 * (1 + _v1) : _v2 + _v1 - _v2 * _v1,
          _v1 = 2 * _v2 - _v0;
        _v4 = _v135(_v1, _v0, _v0 + 1 / 3), _v5 = _v135(_v1, _v0, _v0), _v6 = _v135(_v1, _v0, _v0 - 1 / 3);
      } else _v4 = _v5 = _v6 = _v2;
      return {
        red: Math.round(255 * _v4),
        green: Math.round(255 * _v5),
        blue: Math.round(255 * _v6),
        alpha: _v3
      };
    }(_v2)), _v2;
  }
  let _v140 = (_v0, _v1) => {
      let _v2 = _v139(_v0),
        _v3 = _v139(_v1);
      if (!_v2 || !_v3) return _v136(_v0, _v1);
      let _v4 = {
        ..._v2
      };
      return _v0 => (_v4.red = _v137(_v2.red, _v3.red, _v0), _v4.green = _v137(_v2.green, _v3.green, _v0), _v4.blue = _v137(_v2.blue, _v3.blue, _v0), _v4.alpha = _v134(_v2.alpha, _v3.alpha, _v0), _v76.transform(_v4));
    },
    _v141 = (_v0, _v1) => _v0 => _v1(_v0(_v0)),
    _v142 = (..._v0) => _v0.reduce(_v141);
  _v0.s(["pipe", 0, _v142], 0);
  let _v143 = new Set(["none", "hidden"]);
  function _v144(_v0, _v1) {
    return _v0 => _v134(_v0, _v1, _v0);
  }
  function _v145(_v0) {
    return "number" == typeof _v0 ? _v144 : "string" == typeof _v0 ? _v123(_v0) ? _v136 : _v86.test(_v0) ? _v140 : _v148 : Array.isArray(_v0) ? _v146 : "object" == typeof _v0 ? _v86.test(_v0) ? _v140 : _v147 : _v136;
  }
  function _v146(_v0, _v1) {
    let _v2 = [..._v0],
      _v3 = _v2.length,
      _v4 = _v0.map((_v0, _v1) => _v145(_v0)(_v0, _v1[_v1]));
    return _v0 => {
      for (let _v0 = 0; _v0 < _v3; _v0++) _v2[_v0] = _v4[_v0](_v0);
      return _v2;
    };
  }
  function _v147(_v0, _v1) {
    let _v2 = {
        ..._v0,
        ..._v1
      },
      _v3 = {};
    for (let _v0 in _v2) void 0 !== _v0[_v0] && void 0 !== _v1[_v0] && (_v3[_v0] = _v145(_v0[_v0])(_v0[_v0], _v1[_v0]));
    return _v0 => {
      for (let _v0 in _v3) _v2[_v0] = _v3[_v0](_v0);
      return _v2;
    };
  }
  let _v148 = (_v0, _v1) => {
    let _v2 = _v95.createTransformer(_v1),
      _v3 = _v91(_v0),
      _v4 = _v91(_v1);
    if (!(_v3.indexes.var.length === _v4.indexes.var.length && _v3.indexes.color.length === _v4.indexes.color.length && _v3.indexes.number.length >= _v4.indexes.number.length)) return _v12(!0, `Complex values '${_v0}' and '${_v1}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), _v136(_v0, _v1);
    if (_v143.has(_v0) && !_v4.values.length || _v143.has(_v1) && !_v3.values.length) return _v143.has(_v0) ? _v0 => _v0 <= 0 ? _v0 : _v1 : _v0 => _v0 >= 1 ? _v1 : _v0;
    return _v142(_v146(function (_v0, _v1) {
      var _v2;
      let _v3 = [],
        _v4 = {
          color: 0,
          var: 0,
          number: 0
        };
      for (let _v0 = 0; _v0 < _v1.values.length; _v0++) {
        let _v0 = _v1.types[_v0],
          _v1 = _v0.indexes[_v0][_v4[_v0]],
          _v2 = null != (_v2 = _v0.values[_v1]) ? _v2 : 0;
        _v3[_v0] = _v2, _v4[_v0]++;
      }
      return _v3;
    }(_v3, _v4), _v4.values), _v2);
  };
  function _v149(_v0, _v1, _v2) {
    return "number" == typeof _v0 && "number" == typeof _v1 && "number" == typeof _v2 ? _v134(_v0, _v1, _v2) : _v145(_v0)(_v0, _v1);
  }
  function _v150(_v0, _v1, _v2) {
    var _v3, _v4;
    let _v5 = Math.max(_v1 - 5, 0);
    return _v3 = _v2 - _v0(_v5), (_v4 = _v1 - _v5) ? 0 / _v4 * _v3 : 0;
  }
  let _v151 = .01,
    _v152 = 2,
    _v153 = .005,
    _v154 = .5;
  function _v155(_v0, _v1) {
    return _v0 * Math.sqrt(1 - _v1 * _v1);
  }
  let _v156 = ["duration", "bounce"],
    _v157 = ["stiffness", "damping", "mass"];
  function _v158(_v0, _v1) {
    return _v1.some(_v0 => void 0 !== _v0[_v0]);
  }
  function _v159(_v0 = .3, _v1 = .3) {
    let _v2,
      _v3 = "object" != typeof _v0 ? {
        visualDuration: _v0,
        keyframes: [0, 1],
        bounce: _v1
      } : _v0,
      {
        restSpeed: _v4,
        restDelta: _v5
      } = _v3,
      _v6 = _v3.keyframes[0],
      _v7 = _v3.keyframes[_v3.keyframes.length - 1],
      _v8 = {
        done: !1,
        value: _v6
      },
      {
        stiffness: _v9,
        damping: _v10,
        mass: _v11,
        duration: _v12,
        velocity: _v13,
        isResolvedFromDuration: _v14
      } = function (_v0) {
        let _v1 = {
          velocity: 0,
          stiffness: 100,
          damping: 10,
          mass: 1,
          isResolvedFromDuration: !1,
          ..._v0
        };
        if (!_v158(_v0, _v157) && _v158(_v0, _v156)) if (_v0.visualDuration) {
          let _v0 = 2 * Math.PI / (1.2 * _v0.visualDuration),
            _v1 = _v0 * _v0,
            _v2 = 2 * _v66(.05, 1, 1 - (_v0.bounce || 0)) * Math.sqrt(_v1);
          _v1 = {
            ..._v1,
            mass: 1,
            stiffness: _v1,
            damping: _v2
          };
        } else {
          let _v0 = function ({
            duration: _v0 = 800,
            bounce: _v1 = .3,
            velocity: _v2 = 0,
            mass: _v3 = 1
          }) {
            let _v4, _v5;
            _v12(_v0 <= _v17(10), "Spring duration must be 10 seconds or less");
            let _v6 = 1 - _v1;
            _v6 = _v66(.05, 1, _v6), _v0 = _v66(.01, 10, _v18(_v0)), _v6 < 1 ? (_v4 = _v0 => {
              let _v1 = _v0 * _v6,
                _v2 = _v1 * _v0;
              return .001 - (_v1 - _v2) / _v155(_v0, _v6) * Math.exp(-_v2);
            }, _v5 = _v0 => {
              let _v1 = _v0 * _v6 * _v0,
                _v2 = Math.pow(_v6, 2) * Math.pow(_v0, 2) * _v0,
                _v3 = Math.exp(-_v1),
                _v4 = _v155(Math.pow(_v0, 2), _v6);
              return (_v1 * _v2 + _v2 - _v2) * _v3 * (-_v4(_v0) + .001 > 0 ? -1 : 1) / _v4;
            }) : (_v4 = _v0 => -.001 + Math.exp(-_v0 * _v0) * ((_v0 - _v2) * _v0 + 1), _v5 = _v0 => _v0 * _v0 * (_v2 - _v0) * Math.exp(-_v0 * _v0));
            let _v7 = function (_v0, _v1, _v2) {
              let _v3 = _v2;
              for (let _v0 = 1; _v0 < 12; _v0++) _v3 -= _v0(_v3) / _v1(_v3);
              return _v3;
            }(_v4, _v5, 5 / _v0);
            if (_v0 = _v17(_v0), isNaN(_v7)) return {
              stiffness: 100,
              damping: 10,
              duration: _v0
            };
            {
              let _v0 = Math.pow(_v7, 2) * _v3;
              return {
                stiffness: _v0,
                damping: 2 * _v6 * Math.sqrt(_v3 * _v0),
                duration: _v0
              };
            }
          }(_v0);
          (_v1 = {
            ..._v1,
            ..._v0,
            mass: 1
          }).isResolvedFromDuration = !0;
        }
        return _v1;
      }({
        ..._v3,
        velocity: -_v18(_v3.velocity || 0)
      }),
      _v15 = _v13 || 0,
      _v16 = _v10 / (2 * Math.sqrt(_v9 * _v11)),
      _v17 = _v7 - _v6,
      _v18 = _v18(Math.sqrt(_v9 / _v11)),
      _v19 = 5 > Math.abs(_v17);
    if (_v4 || (_v4 = _v19 ? _v151 : _v152), _v5 || (_v5 = _v19 ? _v153 : _v154), _v16 < 1) {
      let _v0 = _v155(_v18, _v16);
      _v2 = _v0 => _v7 - Math.exp(-_v16 * _v18 * _v0) * ((_v15 + _v16 * _v18 * _v17) / _v0 * Math.sin(_v0 * _v0) + _v17 * Math.cos(_v0 * _v0));
    } else if (1 === _v16) _v2 = _v0 => _v7 - Math.exp(-_v18 * _v0) * (_v17 + (_v15 + _v18 * _v17) * _v0);else {
      let _v0 = _v18 * Math.sqrt(_v16 * _v16 - 1);
      _v2 = _v0 => {
        let _v1 = Math.exp(-_v16 * _v18 * _v0),
          _v2 = Math.min(_v0 * _v0, 300);
        return _v7 - _v1 * ((_v15 + _v16 * _v18 * _v17) * Math.sinh(_v2) + _v0 * _v17 * Math.cosh(_v2)) / _v0;
      };
    }
    let _v20 = {
      calculatedDuration: _v14 && _v12 || null,
      next: _v0 => {
        let _v1 = _v2(_v0);
        if (_v14) _v8.done = _v0 >= _v12;else {
          let _v0 = 0;
          _v16 < 1 && (_v0 = 0 === _v0 ? _v17(_v15) : _v150(_v2, _v0, _v1));
          let _v1 = Math.abs(_v7 - _v1) <= _v5;
          _v8.done = Math.abs(_v0) <= _v4 && _v1;
        }
        return _v8.value = _v8.done ? _v7 : _v1, _v8;
      },
      toString: () => {
        let _v0 = Math.min(_v19(_v20), 0),
          _v1 = _v25(_v0 => _v20.next(_v0 * _v0).value, _v0, 30);
        return _v0 + "ms " + _v1;
      }
    };
    return _v20;
  }
  function _v160({
    keyframes: _v0,
    velocity: _v1 = 0,
    power: _v2 = .8,
    timeConstant: _v3 = 325,
    bounceDamping: _v4 = 10,
    bounceStiffness: _v5 = 500,
    modifyTarget: _v6,
    min: _v7,
    max: _v8,
    restDelta: _v9 = .5,
    restSpeed: _v10
  }) {
    let _v11,
      _v12,
      _v13 = _v0[0],
      _v14 = {
        done: !1,
        value: _v13
      },
      _v15 = _v2 * _v1,
      _v16 = _v13 + _v15,
      _v17 = void 0 === _v6 ? _v16 : _v6(_v16);
    _v17 !== _v16 && (_v15 = _v17 - _v13);
    let _v18 = _v0 => -_v15 * Math.exp(-_v0 / _v3),
      _v19 = _v0 => _v17 + _v18(_v0),
      _v20 = _v0 => {
        let _v1 = _v18(_v0),
          _v2 = _v19(_v0);
        _v14.done = Math.abs(_v1) <= _v9, _v14.value = _v14.done ? _v17 : _v2;
      },
      _v21 = _v0 => {
        let _v1;
        if (_v1 = _v14.value, void 0 !== _v7 && _v1 < _v7 || void 0 !== _v8 && _v1 > _v8) {
          var _v2;
          _v11 = _v0, _v12 = _v159({
            keyframes: [_v14.value, (_v2 = _v14.value, void 0 === _v7 ? _v8 : void 0 === _v8 || Math.abs(_v7 - _v2) < Math.abs(_v8 - _v2) ? _v7 : _v8)],
            velocity: _v150(_v19, _v0, _v14.value),
            damping: _v4,
            stiffness: _v5,
            restDelta: _v9,
            restSpeed: _v10
          });
        }
      };
    return _v21(0), {
      calculatedDuration: null,
      next: _v0 => {
        let _v1 = !1;
        return (_v12 || void 0 !== _v11 || (_v1 = !0, _v20(_v0), _v21(_v0)), void 0 !== _v11 && _v0 >= _v11) ? _v12.next(_v0 - _v11) : (_v1 || _v20(_v0), _v14);
      }
    };
  }
  let _v161 = _v55(.42, 0, 1, 1),
    _v162 = _v55(0, 0, .58, 1),
    _v163 = _v55(.42, 0, .58, 1),
    _v164 = {
      linear: _v12,
      easeIn: _v161,
      easeInOut: _v163,
      easeOut: _v162,
      circIn: _v62,
      circInOut: _v64,
      circOut: _v63,
      backIn: _v59,
      backInOut: _v60,
      backOut: _v58,
      anticipate: _v61
    },
    _v165 = _v0 => {
      if (_v21(_v0)) {
        _v12(4 === _v0.length, "Cubic bezier arrays must contain four numerical values.");
        let [_v0, _v1, _v2, _v3] = _v0;
        return _v55(_v0, _v1, _v2, _v3);
      }
      return "string" == typeof _v0 ? (_v12(void 0 !== _v164[_v0], `Invalid easing type '${_v0}'`), _v164[_v0]) : _v0;
    };
  function _v166(_v0, _v1, {
    clamp: _v2 = !0,
    ease: _v3,
    mixer: _v4
  } = {}) {
    let _v5 = _v0.length;
    if (_v12(_v5 === _v1.length, "Both input and output ranges must be the same length"), 1 === _v5) return () => _v1[0];
    if (2 === _v5 && _v1[0] === _v1[1]) return () => _v1[1];
    let _v6 = _v0[0] === _v0[1];
    _v0[0] > _v0[_v5 - 1] && (_v0 = [..._v0].reverse(), _v1 = [..._v1].reverse());
    let _v7 = function (_v0, _v1, _v2) {
        let _v3 = [],
          _v4 = _v2 || _v149,
          _v5 = _v0.length - 1;
        for (let _v0 = 0; _v0 < _v5; _v0++) {
          let _v0 = _v4(_v0[_v0], _v0[_v0 + 1]);
          _v1 && (_v0 = _v142(Array.isArray(_v1) ? _v1[_v0] || _v12 : _v1, _v0)), _v3.push(_v0);
        }
        return _v3;
      }(_v1, _v3, _v4),
      _v8 = _v7.length,
      _v9 = _v0 => {
        if (_v6 && _v0 < _v0[0]) return _v1[0];
        let _v1 = 0;
        if (_v8 > 1) for (; _v1 < _v0.length - 2 && !(_v0 < _v0[_v1 + 1]); _v1++);
        let _v2 = _v24(_v0[_v1], _v0[_v1 + 1], _v0);
        return _v7[_v1](_v2);
      };
    return _v2 ? _v0 => _v9(_v66(_v0[0], _v0[_v5 - 1], _v0)) : _v9;
  }
  function _v167({
    duration: _v0 = 300,
    keyframes: _v1,
    times: _v2,
    ease: _v3 = "easeInOut"
  }) {
    var _v4;
    let _v5,
      _v6 = Array.isArray(_v3) && "number" != typeof _v3[0] ? _v3.map(_v165) : _v165(_v3),
      _v7 = {
        done: !1,
        value: _v1[0]
      },
      _v8 = _v166((_v4 = _v2 && _v2.length === _v1.length ? _v2 : (!function (_v0, _v1) {
        let _v2 = _v0[_v0.length - 1];
        for (let _v0 = 1; _v0 <= _v1; _v0++) {
          let _v0 = _v24(0, _v1, _v0);
          _v0.push(_v134(_v2, 1, _v0));
        }
      }(_v5 = [0], _v1.length - 1), _v5), _v4.map(_v0 => _v0 * _v0)), _v1, {
        ease: Array.isArray(_v6) ? _v6 : _v1.map(() => _v6 || _v163).splice(0, _v1.length - 1)
      });
    return {
      calculatedDuration: _v0,
      next: _v0 => (_v7.value = _v8(_v0), _v7.done = _v0 >= _v0, _v7)
    };
  }
  _v0.s(["interpolate", 0, _v166], 0);
  let _v168 = _v0 => {
      let _v1 = ({
        timestamp: _v0
      }) => _v0(_v0);
      return {
        start: () => _v36.update(_v1, !0),
        stop: () => _v37(_v1),
        now: () => _v38.isProcessing ? _v38.timestamp : _v41.now()
      };
    },
    _v169 = {
      decay: _v160,
      inertia: _v160,
      tween: _v167,
      keyframes: _v167,
      spring: _v159
    },
    _v170 = _v0 => _v0 / 100;
  class _v171 extends _v133 {
    constructor(_v0) {
      super(_v0), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
        if (this.resolver.cancel(), this.isStopped = !0, "idle" === this.state) return;
        this.teardown();
        let {
          onStop: _v0
        } = this.options;
        _v0 && _v0();
      };
      const {
          name: _v1,
          motionValue: _v2,
          element: _v3,
          keyframes: _v4
        } = this.options,
        _v5 = (null == _v3 ? void 0 : _v3.KeyframeResolver) || _v118,
        _v6 = (_v0, _v1) => this.onKeyframesResolved(_v0, _v1);
      this.resolver = new _v5(_v4, _v6, _v1, _v2, _v3), this.resolver.scheduleResolve();
    }
    flatten() {
      super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
    }
    initPlayback(_v0) {
      let _v1,
        _v2,
        {
          type: _v3 = "keyframes",
          repeat: _v4 = 0,
          repeatDelay: _v5 = 0,
          repeatType: _v6,
          velocity: _v7 = 0
        } = this.options,
        _v8 = _v29(_v3) ? _v3 : _v169[_v3] || _v167;
      _v8 !== _v167 && "number" != typeof _v0[0] && (_v1 = _v142(_v170, _v149(_v0[0], _v0[1])), _v0 = [0, 100]);
      let _v9 = _v8({
        ...this.options,
        keyframes: _v0
      });
      "mirror" === _v6 && (_v2 = _v8({
        ...this.options,
        keyframes: [..._v0].reverse(),
        velocity: -_v7
      })), null === _v9.calculatedDuration && (_v9.calculatedDuration = _v19(_v9));
      let {
          calculatedDuration: _v10
        } = _v9,
        _v11 = _v10 + _v5;
      return {
        generator: _v9,
        mirroredGenerator: _v2,
        mapPercentToKeyframes: _v1,
        calculatedDuration: _v10,
        resolvedDuration: _v11,
        totalDuration: _v11 * (_v4 + 1) - _v5
      };
    }
    onPostResolved() {
      let {
        autoplay: _v0 = !0
      } = this.options;
      this.play(), "paused" !== this.pendingPlayState && _v0 ? this.state = this.pendingPlayState : this.pause();
    }
    tick(_v0, _v1 = !1) {
      let {
        resolved: _v2
      } = this;
      if (!_v2) {
        let {
          keyframes: _v0
        } = this.options;
        return {
          done: !0,
          value: _v0[_v0.length - 1]
        };
      }
      let {
        finalKeyframe: _v3,
        generator: _v4,
        mirroredGenerator: _v5,
        mapPercentToKeyframes: _v6,
        keyframes: _v7,
        calculatedDuration: _v8,
        totalDuration: _v9,
        resolvedDuration: _v10
      } = _v2;
      if (null === this.startTime) return _v4.next(0);
      let {
        delay: _v11,
        repeat: _v12,
        repeatType: _v13,
        repeatDelay: _v14,
        onUpdate: _v15
      } = this.options;
      this.speed > 0 ? this.startTime = Math.min(this.startTime, _v0) : this.speed < 0 && (this.startTime = Math.min(_v0 - _v9 / this.speed, this.startTime)), _v1 ? this.currentTime = _v0 : null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = Math.round(_v0 - this.startTime) * this.speed;
      let _v16 = this.currentTime - _v11 * (this.speed >= 0 ? 1 : -1),
        _v17 = this.speed >= 0 ? _v16 < 0 : _v16 > _v9;
      this.currentTime = Math.max(_v16, 0), "finished" === this.state && null === this.holdTime && (this.currentTime = _v9);
      let _v18 = this.currentTime,
        _v19 = _v4;
      if (_v12) {
        let _v0 = Math.min(this.currentTime, _v9) / _v10,
          _v1 = Math.floor(_v0),
          _v2 = _v0 % 1;
        !_v2 && _v0 >= 1 && (_v2 = 1), 1 === _v2 && _v1--, (_v1 = Math.min(_v1, _v12 + 1)) % 2 && ("reverse" === _v13 ? (_v2 = 1 - _v2, _v14 && (_v2 -= _v14 / _v10)) : "mirror" === _v13 && (_v19 = _v5)), _v18 = _v66(0, 1, _v2) * _v10;
      }
      let _v20 = _v17 ? {
        done: !1,
        value: _v7[0]
      } : _v19.next(_v18);
      _v6 && (_v20.value = _v6(_v20.value));
      let {
        done: _v21
      } = _v20;
      _v17 || null === _v8 || (_v21 = this.speed >= 0 ? this.currentTime >= _v9 : this.currentTime <= 0);
      let _v22 = null === this.holdTime && ("finished" === this.state || "running" === this.state && _v21);
      return _v22 && void 0 !== _v3 && (_v20.value = _v132(_v7, this.options, _v3)), _v15 && _v15(_v20.value), _v22 && this.finish(), _v20;
    }
    get duration() {
      let {
        resolved: _v0
      } = this;
      return _v0 ? _v18(_v0.calculatedDuration) : 0;
    }
    get time() {
      return _v18(this.currentTime);
    }
    set time(_v0) {
      _v0 = _v17(_v0), this.currentTime = _v0, null !== this.holdTime || 0 === this.speed ? this.holdTime = _v0 : this.driver && (this.startTime = this.driver.now() - _v0 / this.speed);
    }
    get speed() {
      return this.playbackSpeed;
    }
    set speed(_v0) {
      let _v1 = this.playbackSpeed !== _v0;
      this.playbackSpeed = _v0, _v1 && (this.time = _v18(this.currentTime));
    }
    play() {
      if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
        this.pendingPlayState = "running";
        return;
      }
      if (this.isStopped) return;
      let {
        driver: _v0 = _v168,
        onPlay: _v1,
        startTime: _v2
      } = this.options;
      this.driver || (this.driver = _v0(_v0 => this.tick(_v0))), _v1 && _v1();
      let _v3 = this.driver.now();
      null !== this.holdTime ? this.startTime = _v3 - this.holdTime : this.startTime ? "finished" === this.state && (this.startTime = _v3) : this.startTime = null != _v2 ? _v2 : this.calcStartTime(), "finished" === this.state && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start();
    }
    pause() {
      var _v0;
      if (!this._resolved) {
        this.pendingPlayState = "paused";
        return;
      }
      this.state = "paused", this.holdTime = null != (_v0 = this.currentTime) ? _v0 : 0;
    }
    complete() {
      "running" !== this.state && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null;
    }
    finish() {
      this.teardown(), this.state = "finished";
      let {
        onComplete: _v0
      } = this.options;
      _v0 && _v0();
    }
    cancel() {
      null !== this.cancelTime && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise();
    }
    teardown() {
      this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel();
    }
    stopDriver() {
      this.driver && (this.driver.stop(), this.driver = void 0);
    }
    sample(_v0) {
      return this.startTime = 0, this.tick(_v0, !0);
    }
  }
  let _v172 = new Set(["opacity", "clipPath", "filter", "transform"]),
    _v173 = _v13(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
    _v174 = {
      anticipate: _v61,
      backInOut: _v60,
      circInOut: _v64
    };
  class _v175 extends _v133 {
    constructor(_v0) {
      super(_v0);
      const {
        name: _v1,
        motionValue: _v2,
        element: _v3,
        keyframes: _v4
      } = this.options;
      this.resolver = new _v129(_v4, (_v0, _v1) => this.onKeyframesResolved(_v0, _v1), _v1, _v2, _v3), this.resolver.scheduleResolve();
    }
    initPlayback(_v0, _v1) {
      var _v2;
      let {
        duration: _v3 = 300,
        times: _v4,
        ease: _v5,
        type: _v6,
        motionValue: _v7,
        name: _v8,
        startTime: _v9
      } = this.options;
      if (!_v7.owner || !_v7.owner.current) return !1;
      if ("string" == typeof _v5 && _v23() && _v5 in _v174 && (_v5 = _v174[_v5]), _v29((_v2 = this.options).type) || "spring" === _v2.type || !function _v0(_v1) {
        return !!("function" == typeof _v1 && _v23() || !_v1 || "string" == typeof _v1 && (_v1 in _v27 || _v23()) || _v21(_v1) || Array.isArray(_v1) && _v1.every(_v0));
      }(_v2.ease)) {
        let {
            onComplete: _v0,
            onUpdate: _v1,
            motionValue: _v2,
            element: _v3,
            ..._v4
          } = this.options,
          _v5 = function (_v0, _v1) {
            let _v2 = new _v171({
                ..._v1,
                keyframes: _v0,
                repeat: 0,
                delay: 0,
                isGenerator: !0
              }),
              _v3 = {
                done: !1,
                value: _v0[0]
              },
              _v4 = [],
              _v5 = 0;
            for (; !_v3.done && _v5 < 0;) _v4.push((_v3 = _v2.sample(_v5)).value), _v5 += 10;
            return {
              times: void 0,
              keyframes: _v4,
              duration: _v5 - 10,
              ease: "linear"
            };
          }(_v0, _v4);
        1 === (_v0 = _v5.keyframes).length && (_v0[1] = _v0[0]), _v3 = _v5.duration, _v4 = _v5.times, _v5 = _v5.ease, _v6 = "keyframes";
      }
      let _v10 = function (_v0, _v1, _v2, {
        delay: _v3 = 0,
        duration: _v4 = 300,
        repeat: _v5 = 0,
        repeatType: _v6 = "loop",
        ease: _v7 = "easeInOut",
        times: _v8
      } = {}) {
        let _v9 = {
          [_v1]: _v2
        };
        _v8 && (_v9.offset = _v8);
        let _v10 = function _v0(_v1, _v2) {
          if (_v1) return "function" == typeof _v1 && _v23() ? _v25(_v1, _v2) : _v21(_v1) ? _v26(_v1) : Array.isArray(_v1) ? _v1.map(_v0 => _v0(_v0, _v2) || _v27.easeOut) : _v27[_v1];
        }(_v7, _v4);
        return Array.isArray(_v10) && (_v9.easing = _v10), _v0.animate(_v9, {
          delay: _v3,
          duration: _v4,
          easing: Array.isArray(_v10) ? "linear" : _v10,
          fill: "both",
          iterations: _v5 + 1,
          direction: "reverse" === _v6 ? "alternate" : "normal"
        });
      }(_v7.owner.current, _v8, _v0, {
        ...this.options,
        duration: _v3,
        times: _v4,
        ease: _v5
      });
      return _v10.startTime = null != _v9 ? _v9 : this.calcStartTime(), this.pendingTimeline ? (_v20(_v10, this.pendingTimeline), this.pendingTimeline = void 0) : _v10.onfinish = () => {
        let {
          onComplete: _v0
        } = this.options;
        _v7.set(_v132(_v0, this.options, _v1)), _v0 && _v0(), this.cancel(), this.resolveFinishedPromise();
      }, {
        animation: _v10,
        duration: _v3,
        times: _v4,
        type: _v6,
        ease: _v5,
        keyframes: _v0
      };
    }
    get duration() {
      let {
        resolved: _v0
      } = this;
      if (!_v0) return 0;
      let {
        duration: _v1
      } = _v0;
      return _v18(_v1);
    }
    get time() {
      let {
        resolved: _v0
      } = this;
      if (!_v0) return 0;
      let {
        animation: _v1
      } = _v0;
      return _v18(_v1.currentTime || 0);
    }
    set time(_v0) {
      let {
        resolved: _v1
      } = this;
      if (!_v1) return;
      let {
        animation: _v2
      } = _v1;
      _v2.currentTime = _v17(_v0);
    }
    get speed() {
      let {
        resolved: _v0
      } = this;
      if (!_v0) return 1;
      let {
        animation: _v1
      } = _v0;
      return _v1.playbackRate;
    }
    set speed(_v0) {
      let {
        resolved: _v1
      } = this;
      if (!_v1) return;
      let {
        animation: _v2
      } = _v1;
      _v2.playbackRate = _v0;
    }
    get state() {
      let {
        resolved: _v0
      } = this;
      if (!_v0) return "idle";
      let {
        animation: _v1
      } = _v0;
      return _v1.playState;
    }
    get startTime() {
      let {
        resolved: _v0
      } = this;
      if (!_v0) return null;
      let {
        animation: _v1
      } = _v0;
      return _v1.startTime;
    }
    attachTimeline(_v0) {
      if (this._resolved) {
        let {
          resolved: _v0
        } = this;
        if (!_v0) return _v12;
        let {
          animation: _v1
        } = _v0;
        _v20(_v1, _v0);
      } else this.pendingTimeline = _v0;
      return _v12;
    }
    play() {
      if (this.isStopped) return;
      let {
        resolved: _v0
      } = this;
      if (!_v0) return;
      let {
        animation: _v1
      } = _v0;
      "finished" === _v1.playState && this.updateFinishedPromise(), _v1.play();
    }
    pause() {
      let {
        resolved: _v0
      } = this;
      if (!_v0) return;
      let {
        animation: _v1
      } = _v0;
      _v1.pause();
    }
    stop() {
      if (this.resolver.cancel(), this.isStopped = !0, "idle" === this.state) return;
      this.resolveFinishedPromise(), this.updateFinishedPromise();
      let {
        resolved: _v0
      } = this;
      if (!_v0) return;
      let {
        animation: _v1,
        keyframes: _v2,
        duration: _v3,
        type: _v4,
        ease: _v5,
        times: _v6
      } = _v0;
      if ("idle" === _v1.playState || "finished" === _v1.playState) return;
      if (this.time) {
        let {
            motionValue: _v0,
            onUpdate: _v1,
            onComplete: _v2,
            element: _v3,
            ..._v4
          } = this.options,
          _v5 = new _v171({
            ..._v4,
            keyframes: _v2,
            duration: _v3,
            type: _v4,
            ease: _v5,
            times: _v6,
            isGenerator: !0
          }),
          _v6 = _v17(this.time);
        _v0.setWithVelocity(_v5.sample(_v6 - 10).value, _v5.sample(_v6).value, 10);
      }
      let {
        onStop: _v7
      } = this.options;
      _v7 && _v7(), this.cancel();
    }
    complete() {
      let {
        resolved: _v0
      } = this;
      _v0 && _v0.animation.finish();
    }
    cancel() {
      let {
        resolved: _v0
      } = this;
      _v0 && _v0.animation.cancel();
    }
    static supports(_v0) {
      let {
        motionValue: _v1,
        name: _v2,
        repeatDelay: _v3,
        repeatType: _v4,
        damping: _v5,
        type: _v6
      } = _v0;
      if (!_v1 || !_v1.owner || !(_v1.owner.current instanceof HTMLElement)) return !1;
      let {
        onUpdate: _v7,
        transformTemplate: _v8
      } = _v1.owner.getProps();
      return _v173() && _v2 && _v172.has(_v2) && !_v7 && !_v8 && !_v3 && "mirror" !== _v4 && 0 !== _v5 && "inertia" !== _v6;
    }
  }
  let _v176 = {
      type: "spring",
      stiffness: 500,
      damping: 25,
      restSpeed: 10
    },
    _v177 = {
      type: "keyframes",
      duration: .8
    },
    _v178 = {
      type: "keyframes",
      ease: [.25, .1, .35, 1],
      duration: .3
    },
    _v179 = (_v0, _v1, _v2, _v3 = {}, _v4, _v5) => _v0 => {
      let _v1 = _v28(_v3, _v0) || {},
        _v2 = _v1.delay || _v3.delay || 0,
        {
          elapsed: _v3 = 0
        } = _v3;
      _v3 -= _v17(_v2);
      let _v4 = {
        keyframes: Array.isArray(_v2) ? _v2 : [null, _v2],
        ease: "easeOut",
        velocity: _v1.getVelocity(),
        ..._v1,
        delay: -_v3,
        onUpdate: _v0 => {
          _v1.set(_v0), _v1.onUpdate && _v1.onUpdate(_v0);
        },
        onComplete: () => {
          _v0(), _v1.onComplete && _v1.onComplete();
        },
        name: _v0,
        motionValue: _v1,
        element: _v5 ? void 0 : _v4
      };
      !function ({
        when: _v0,
        delay: _v1,
        delayChildren: _v2,
        staggerChildren: _v3,
        staggerDirection: _v4,
        repeat: _v5,
        repeatType: _v6,
        repeatDelay: _v7,
        from: _v8,
        elapsed: _v9,
        ..._v10
      }) {
        return !!Object.keys(_v10).length;
      }(_v1) && (_v4 = {
        ..._v4,
        ...((_v0, {
          keyframes: _v1
        }) => _v1.length > 2 ? _v177 : _v31.has(_v0) ? _v0.startsWith("scale") ? {
          type: "spring",
          stiffness: 550,
          damping: 0 === _v1[1] ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10
        } : _v176 : _v178)(_v0, _v4)
      }), _v4.duration && (_v4.duration = _v17(_v4.duration)), _v4.repeatDelay && (_v4.repeatDelay = _v17(_v4.repeatDelay)), void 0 !== _v4.from && (_v4.keyframes[0] = _v4.from);
      let _v5 = !1;
      if (!1 !== _v4.type && (0 !== _v4.duration || _v4.repeatDelay) || (_v4.duration = 0, 0 === _v4.delay && (_v5 = !0)), _v5 && !_v5 && void 0 !== _v1.get()) {
        let _v0 = _v132(_v4.keyframes, _v1);
        if (void 0 !== _v0) return _v36.update(() => {
          _v4.onUpdate(_v0), _v4.onComplete();
        }), new _v16([]);
      }
      return !_v5 && _v175.supports(_v4) ? new _v175(_v4) : new _v171(_v4);
    };
  function _v180(_v0, _v1, {
    delay: _v2 = 0,
    transitionOverride: _v3,
    type: _v4
  } = {}) {
    var _v5;
    let {
      transition: _v6 = _v0.getDefaultTransition(),
      transitionEnd: _v7,
      ..._v8
    } = _v1;
    _v3 && (_v6 = _v3);
    let _v9 = [],
      _v10 = _v4 && _v0.animationState && _v0.animationState.getState()[_v4];
    for (let _v0 in _v8) {
      let _v0 = _v0.getValue(_v0, null != (_v5 = _v0.latestValues[_v0]) ? _v5 : null),
        _v1 = _v8[_v0];
      if (void 0 === _v1 || _v10 && function ({
        protectedKeys: _v0,
        needsAnimating: _v1
      }, _v2) {
        let _v3 = _v0.hasOwnProperty(_v2) && !0 !== _v1[_v2];
        return _v1[_v2] = !1, _v3;
      }(_v10, _v0)) continue;
      let _v2 = {
          delay: _v2,
          ..._v28(_v6 || {}, _v0)
        },
        _v3 = !1;
      if (window.MotionHandoffAnimation) {
        let _v0 = _v53(_v0);
        if (_v0) {
          let _v0 = window.MotionHandoffAnimation(_v0, _v0, _v36);
          null !== _v0 && (_v2.startTime = _v0, _v3 = !0);
        }
      }
      _v50(_v0, _v0), _v0.start(_v179(_v0, _v0, _v1, _v0.shouldReduceMotion && _v32.has(_v0) ? {
        type: !1
      } : _v2, _v0, _v3));
      let _v4 = _v0.animation;
      _v4 && _v9.push(_v4);
    }
    return _v7 && Promise.all(_v9).then(() => {
      _v36.update(() => {
        _v7 && _v48(_v0, _v7);
      });
    }), _v9;
  }
  function _v181(_v0, _v1, _v2 = {}) {
    var _v3;
    let _v4 = _v9(_v0, _v1, "exit" === _v2.type ? null == (_v3 = _v0.presenceContext) ? void 0 : _v3.custom : void 0),
      {
        transition: _v5 = _v0.getDefaultTransition() || {}
      } = _v4 || {};
    _v2.transitionOverride && (_v5 = _v2.transitionOverride);
    let _v6 = _v4 ? () => Promise.all(_v180(_v0, _v4, _v2)) : () => Promise.resolve(),
      _v7 = _v0.variantChildren && _v0.variantChildren.size ? (_v0 = 0) => {
        let {
          delayChildren: _v1 = 0,
          staggerChildren: _v2,
          staggerDirection: _v3
        } = _v5;
        return function (_v0, _v1, _v2 = 0, _v3 = 0, _v4 = 1, _v5) {
          let _v6 = [],
            _v7 = (_v0.variantChildren.size - 1) * _v3,
            _v8 = 1 === _v4 ? (_v0 = 0) => _v0 * _v3 : (_v0 = 0) => _v7 - _v0 * _v3;
          return Array.from(_v0.variantChildren).sort(_v182).forEach((_v0, _v1) => {
            _v0.notify("AnimationStart", _v1), _v6.push(_v181(_v0, _v1, {
              ..._v5,
              delay: _v2 + _v8(_v1)
            }).then(() => _v0.notify("AnimationComplete", _v1)));
          }), Promise.all(_v6);
        }(_v0, _v1, _v1 + _v0, _v2, _v3, _v2);
      } : () => Promise.resolve(),
      {
        when: _v8
      } = _v5;
    if (!_v8) return Promise.all([_v6(), _v7(_v2.delay)]);
    {
      let [_v0, _v1] = "beforeChildren" === _v8 ? [_v6, _v7] : [_v7, _v6];
      return _v0().then(() => _v1());
    }
  }
  function _v182(_v0, _v1) {
    return _v0.sortNodePosition(_v1);
  }
  function _v183(_v0, _v1, _v2 = {}) {
    let _v3;
    if (_v0.notify("AnimationStart", _v1), Array.isArray(_v1)) _v3 = Promise.all(_v1.map(_v0 => _v181(_v0, _v0, _v2)));else if ("string" == typeof _v1) _v3 = _v181(_v0, _v1, _v2);else {
      let _v0 = "function" == typeof _v1 ? _v9(_v0, _v1, _v2.custom) : _v1;
      _v3 = Promise.all(_v180(_v0, _v0, _v2));
    }
    return _v3.then(() => {
      _v0.notify("AnimationComplete", _v1);
    });
  }
  _v0.s(["animateMotionValue", 0, _v179], 0), _v0.s(["animateVisualElement", 0, _v183], 0);
  let _v184 = _v11.length,
    _v185 = [..._v10].reverse(),
    _v186 = _v10.length;
  function _v187(_v0 = !1) {
    return {
      isActive: _v0,
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {}
    };
  }
  function _v188() {
    return {
      animate: _v187(!0),
      whileInView: _v187(),
      whileHover: _v187(),
      whileTap: _v187(),
      whileDrag: _v187(),
      whileFocus: _v187(),
      exit: _v187()
    };
  }
  class _v189 {
    constructor(_v0) {
      this.isMounted = !1, this.node = _v0;
    }
    update() {}
  }
  _v0.s(["Feature", 0, _v189], 0);
  let _v190 = 0;
  _v0.s(["animations", 0, {
    animation: {
      Feature: class extends _v189 {
        constructor(_v0) {
          super(_v0), _v0.animationState || (_v0.animationState = function (_v0) {
            let _v1 = _v0 => Promise.all(_v0.map(({
                animation: _v0,
                options: _v1
              }) => _v183(_v0, _v0, _v1))),
              _v2 = _v188(),
              _v3 = !0,
              _v4 = _v0 => (_v0, _v1) => {
                var _v2;
                let _v3 = _v9(_v0, _v1, "exit" === _v0 ? null == (_v2 = _v0.presenceContext) ? void 0 : _v2.custom : void 0);
                if (_v3) {
                  let {
                    transition: _v0,
                    transitionEnd: _v1,
                    ..._v2
                  } = _v3;
                  _v0 = {
                    ..._v0,
                    ..._v2,
                    ..._v1
                  };
                }
                return _v0;
              };
            function _v5(_v0) {
              let {
                  props: _v1
                } = _v0,
                _v2 = function _v0(_v1) {
                  if (!_v1) return;
                  if (!_v1.isControllingVariants) {
                    let _v0 = _v1.parent && _v0(_v1.parent) || {};
                    return void 0 !== _v1.props.initial && (_v0.initial = _v1.props.initial), _v0;
                  }
                  let _v2 = {};
                  for (let _v0 = 0; _v0 < _v184; _v0++) {
                    let _v0 = _v11[_v0],
                      _v1 = _v1.props[_v0];
                    (_v6(_v1) || !1 === _v1) && (_v2[_v0] = _v1);
                  }
                  return _v2;
                }(_v0.parent) || {},
                _v3 = [],
                _v4 = new Set(),
                _v5 = {},
                _v6 = 1 / 0;
              for (let _v0 = 0; _v0 < _v186; _v0++) {
                var _v7, _v8;
                let _v0 = _v185[_v0],
                  _v1 = _v2[_v0],
                  _v2 = void 0 !== _v1[_v0] ? _v1[_v0] : _v2[_v0],
                  _v3 = _v6(_v2),
                  _v4 = _v0 === _v0 ? _v1.isActive : null;
                !1 === _v4 && (_v6 = _v0);
                let _v5 = _v2 === _v2[_v0] && _v2 !== _v1[_v0] && _v3;
                if (_v5 && _v3 && _v0.manuallyAnimateOnMount && (_v5 = !1), _v1.protectedKeys = {
                  ..._v5
                }, !_v1.isActive && null === _v4 || !_v2 && !_v1.prevProp || _v3(_v2) || "boolean" == typeof _v2) continue;
                let _v6 = (_v7 = _v1.prevProp, "string" == typeof (_v8 = _v2) ? _v8 !== _v7 : !!Array.isArray(_v8) && !_v5(_v8, _v7)),
                  _v7 = _v6 || _v0 === _v0 && _v1.isActive && !_v5 && _v3 || _v0 > _v6 && _v3,
                  _v8 = !1,
                  _v9 = Array.isArray(_v2) ? _v2 : [_v2],
                  _v10 = _v9.reduce(_v4(_v0), {});
                !1 === _v4 && (_v10 = {});
                let {
                    prevResolvedValues: _v11 = {}
                  } = _v1,
                  _v12 = {
                    ..._v11,
                    ..._v10
                  },
                  _v13 = _v0 => {
                    _v7 = !0, _v4.has(_v0) && (_v8 = !0, _v4.delete(_v0)), _v1.needsAnimating[_v0] = !0;
                    let _v1 = _v0.getValue(_v0);
                    _v1 && (_v1.liveStyle = !1);
                  };
                for (let _v0 in _v12) {
                  let _v0 = _v10[_v0],
                    _v1 = _v11[_v0];
                  if (!_v5.hasOwnProperty(_v0)) (_v4(_v0) && _v4(_v1) ? _v5(_v0, _v1) : _v0 === _v1) ? void 0 !== _v0 && _v4.has(_v0) ? _v13(_v0) : _v1.protectedKeys[_v0] = !0 : null != _v0 ? _v13(_v0) : _v4.add(_v0);
                }
                _v1.prevProp = _v2, _v1.prevResolvedValues = _v10, _v1.isActive && (_v5 = {
                  ..._v5,
                  ..._v10
                }), _v3 && _v0.blockInitialAnimation && (_v7 = !1);
                let _v14 = !(_v5 && _v6) || _v8;
                _v7 && _v14 && _v3.push(..._v9.map(_v0 => ({
                  animation: _v0,
                  options: {
                    type: _v0
                  }
                })));
              }
              if (_v4.size) {
                let _v0 = {};
                _v4.forEach(_v0 => {
                  let _v1 = _v0.getBaseTarget(_v0),
                    _v2 = _v0.getValue(_v0);
                  _v2 && (_v2.liveStyle = !0), _v0[_v0] = null != _v1 ? _v1 : null;
                }), _v3.push({
                  animation: _v0
                });
              }
              let _v9 = !!_v3.length;
              return _v3 && (!1 === _v1.initial || _v1.initial === _v1.animate) && !_v0.manuallyAnimateOnMount && (_v9 = !1), _v3 = !1, _v9 ? _v1(_v3) : Promise.resolve();
            }
            return {
              animateChanges: _v5,
              setActive: function (_v0, _v1) {
                var _v2;
                if (_v2[_v0].isActive === _v1) return Promise.resolve();
                null == (_v2 = _v0.variantChildren) || _v2.forEach(_v0 => {
                  var _v1;
                  return null == (_v1 = _v0.animationState) ? void 0 : _v1.setActive(_v0, _v1);
                }), _v2[_v0].isActive = _v1;
                let _v3 = _v5(_v0);
                for (let _v0 in _v2) _v2[_v0].protectedKeys = {};
                return _v3;
              },
              setAnimateFunction: function (_v0) {
                _v1 = _v0(_v0);
              },
              getState: () => _v2,
              reset: () => {
                _v2 = _v188(), _v3 = !0;
              }
            };
          }(_v0));
        }
        updateAnimationControlsSubscription() {
          let {
            animate: _v0
          } = this.node.getProps();
          _v3(_v0) && (this.unmountControls = _v0.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let {
              animate: _v0
            } = this.node.getProps(),
            {
              animate: _v1
            } = this.node.prevProps || {};
          _v0 !== _v1 && this.updateAnimationControlsSubscription();
        }
        unmount() {
          var _v0;
          this.node.animationState.reset(), null == (_v0 = this.unmountControls) || _v0.call(this);
        }
      }
    },
    exit: {
      Feature: class extends _v189 {
        constructor() {
          super(...arguments), this.id = _v190++;
        }
        update() {
          if (!this.node.presenceContext) return;
          let {
              isPresent: _v0,
              onExitComplete: _v1
            } = this.node.presenceContext,
            {
              isPresent: _v2
            } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || _v0 === _v2) return;
          let _v3 = this.node.animationState.setActive("exit", !_v0);
          _v1 && !_v0 && _v3.then(() => _v1(this.id));
        }
        mount() {
          let {
            register: _v0
          } = this.node.presenceContext || {};
          _v0 && (this.unmount = _v0(this.id));
        }
        unmount() {}
      }
    }
  }], 0);
  let _v191 = {
    x: !1,
    y: !1
  };
  _v0.s(["isDragActive", 0, function () {
    return _v191.x || _v191.y;
  }, "isDragging", 0, _v191], 0);
  let _v192 = _v0 => "mouse" === _v0.pointerType ? "number" != typeof _v0.button || _v0.button <= 0 : !1 !== _v0.isPrimary;
  function _v193(_v0, _v1, _v2, _v3 = {
    passive: !0
  }) {
    return _v0.addEventListener(_v1, _v2, _v3), () => _v0.removeEventListener(_v1, _v2);
  }
  function _v194(_v0) {
    return {
      point: {
        x: _v0.pageX,
        y: _v0.pageY
      }
    };
  }
  _v0.s(["isPrimaryPointer", 0, _v192], 0), _v0.s(["addDomEvent", 0, _v193], 0);
  let _v195 = _v0 => _v0 => _v192(_v0) && _v0(_v0, _v194(_v0));
  function _v196(_v0, _v1, _v2, _v3) {
    return _v193(_v0, _v1, _v195(_v2), _v3);
  }
  _v0.s(["addPointerInfo", 0, _v195, "extractEventInfo", 0, _v194], 0);
  let _v197 = (_v0, _v1) => Math.abs(_v0 - _v1);
  class _v198 {
    constructor(_v0, _v1, {
      transformPagePoint: _v2,
      contextWindow: _v3,
      dragSnapToOrigin: _v4 = !1
    } = {}) {
      if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
        var _v0, _v1;
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        let _v2 = _v201(this.lastMoveEventInfo, this.history),
          _v3 = null !== this.startEvent,
          _v4 = (_v0 = _v2.offset, _v1 = {
            x: 0,
            y: 0
          }, Math.sqrt(_v197(_v0.x, _v1.x) ** 2 + _v197(_v0.y, _v1.y) ** 2) >= 3);
        if (!_v3 && !_v4) return;
        let {
            point: _v5
          } = _v2,
          {
            timestamp: _v6
          } = _v38;
        this.history.push({
          ..._v5,
          timestamp: _v6
        });
        let {
          onStart: _v7,
          onMove: _v8
        } = this.handlers;
        _v3 || (_v7 && _v7(this.lastMoveEvent, _v2), this.startEvent = this.lastMoveEvent), _v8 && _v8(this.lastMoveEvent, _v2);
      }, this.handlePointerMove = (_v0, _v1) => {
        this.lastMoveEvent = _v0, this.lastMoveEventInfo = _v199(_v1, this.transformPagePoint), _v36.update(this.updatePoint, !0);
      }, this.handlePointerUp = (_v0, _v1) => {
        this.end();
        let {
          onEnd: _v2,
          onSessionEnd: _v3,
          resumeAnimation: _v4
        } = this.handlers;
        if (this.dragSnapToOrigin && _v4 && _v4(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        let _v5 = _v201("pointercancel" === _v0.type ? this.lastMoveEventInfo : _v199(_v1, this.transformPagePoint), this.history);
        this.startEvent && _v2 && _v2(_v0, _v5), _v3 && _v3(_v0, _v5);
      }, !_v192(_v0)) return;
      this.dragSnapToOrigin = _v4, this.handlers = _v1, this.transformPagePoint = _v2, this.contextWindow = _v3 || window;
      const _v5 = _v199(_v194(_v0), this.transformPagePoint),
        {
          point: _v6
        } = _v5,
        {
          timestamp: _v7
        } = _v38;
      this.history = [{
        ..._v6,
        timestamp: _v7
      }];
      const {
        onSessionStart: _v8
      } = _v1;
      _v8 && _v8(_v0, _v201(_v5, this.history)), this.removeListeners = _v142(_v196(this.contextWindow, "pointermove", this.handlePointerMove), _v196(this.contextWindow, "pointerup", this.handlePointerUp), _v196(this.contextWindow, "pointercancel", this.handlePointerUp));
    }
    updateHandlers(_v0) {
      this.handlers = _v0;
    }
    end() {
      this.removeListeners && this.removeListeners(), _v37(this.updatePoint);
    }
  }
  function _v199(_v0, _v1) {
    return _v1 ? {
      point: _v1(_v0.point)
    } : _v0;
  }
  function _v200(_v0, _v1) {
    return {
      x: _v0.x - _v1.x,
      y: _v0.y - _v1.y
    };
  }
  function _v201({
    point: _v0
  }, _v1) {
    return {
      point: _v0,
      delta: _v200(_v0, _v202(_v1)),
      offset: _v200(_v0, _v1[0]),
      velocity: function (_v0) {
        if (_v0.length < 2) return {
          x: 0,
          y: 0
        };
        let _v1 = _v0.length - 1,
          _v2 = null,
          _v3 = _v202(_v0);
        for (; _v1 >= 0 && (_v2 = _v0[_v1], !(_v3.timestamp - _v2.timestamp > _v17(.1)));) _v1--;
        if (!_v2) return {
          x: 0,
          y: 0
        };
        let _v4 = _v18(_v3.timestamp - _v2.timestamp);
        if (0 === _v4) return {
          x: 0,
          y: 0
        };
        let _v5 = {
          x: (_v3.x - _v2.x) / _v4,
          y: (_v3.y - _v2.y) / _v4
        };
        return _v5.x === 1 / 0 && (_v5.x = 0), _v5.y === 1 / 0 && (_v5.y = 0), _v5;
      }(_v1)
    };
  }
  function _v202(_v0) {
    return _v0[_v0.length - 1];
  }
  function _v203(_v0) {
    return _v0 && "object" == typeof _v0 && Object.prototype.hasOwnProperty.call(_v0, "current");
  }
  _v0.s(["isRefObject", 0, _v203], 0);
  function _v204(_v0) {
    return _v0.max - _v0.min;
  }
  function _v205(_v0, _v1, _v2, _v3 = .5) {
    _v0.origin = _v3, _v0.originPoint = _v134(_v1.min, _v1.max, _v0.origin), _v0.scale = _v204(_v2) / _v204(_v1), _v0.translate = _v134(_v2.min, _v2.max, _v0.origin) - _v0.originPoint, (_v0.scale >= .9999 && _v0.scale <= 1.0001 || isNaN(_v0.scale)) && (_v0.scale = 1), (_v0.translate >= -.01 && _v0.translate <= .01 || isNaN(_v0.translate)) && (_v0.translate = 0);
  }
  function _v206(_v0, _v1, _v2) {
    _v0.min = _v2.min + _v1.min, _v0.max = _v0.min + _v204(_v1);
  }
  function _v207(_v0, _v1, _v2) {
    _v0.min = _v1.min - _v2.min, _v0.max = _v0.min + _v204(_v1);
  }
  function _v208(_v0, _v1, _v2) {
    return {
      min: void 0 !== _v1 ? _v0.min + _v1 : void 0,
      max: void 0 !== _v2 ? _v0.max + _v2 - (_v0.max - _v0.min) : void 0
    };
  }
  function _v209(_v0, _v1) {
    let _v2 = _v1.min - _v0.min,
      _v3 = _v1.max - _v0.max;
    return _v1.max - _v1.min < _v0.max - _v0.min && ([_v2, _v3] = [_v3, _v2]), {
      min: _v2,
      max: _v3
    };
  }
  function _v210(_v0, _v1, _v2) {
    return {
      min: _v211(_v0, _v1),
      max: _v211(_v0, _v2)
    };
  }
  function _v211(_v0, _v1) {
    return "number" == typeof _v0 ? _v0 : _v0[_v1] || 0;
  }
  _v0.s(["calcBoxDelta", 0, function (_v0, _v1, _v2, _v3) {
    _v205(_v0.x, _v1.x, _v2.x, _v3 ? _v3.originX : void 0), _v205(_v0.y, _v1.y, _v2.y, _v3 ? _v3.originY : void 0);
  }, "calcLength", 0, _v204, "calcRelativeBox", 0, function (_v0, _v1, _v2) {
    _v206(_v0.x, _v1.x, _v2.x), _v206(_v0.y, _v1.y, _v2.y);
  }, "calcRelativePosition", 0, function (_v0, _v1, _v2) {
    _v207(_v0.x, _v1.x, _v2.x), _v207(_v0.y, _v1.y, _v2.y);
  }, "isNear", 0, function (_v0, _v1, _v2) {
    return Math.abs(_v0 - _v1) <= _v2;
  }], 0);
  let _v212 = () => ({
      translate: 0,
      scale: 1,
      origin: 0,
      originPoint: 0
    }),
    _v213 = () => ({
      min: 0,
      max: 0
    }),
    _v214 = () => ({
      x: _v213(),
      y: _v213()
    });
  function _v215(_v0) {
    return [_v0("x"), _v0("y")];
  }
  function _v216({
    top: _v0,
    left: _v1,
    right: _v2,
    bottom: _v3
  }) {
    return {
      x: {
        min: _v1,
        max: _v2
      },
      y: {
        min: _v0,
        max: _v3
      }
    };
  }
  function _v217(_v0) {
    return void 0 === _v0 || 1 === _v0;
  }
  function _v218({
    scale: _v0,
    scaleX: _v1,
    scaleY: _v2
  }) {
    return !_v217(_v0) || !_v217(_v1) || !_v217(_v2);
  }
  function _v219(_v0) {
    return _v218(_v0) || _v220(_v0) || _v0.z || _v0.rotate || _v0.rotateX || _v0.rotateY || _v0.skewX || _v0.skewY;
  }
  function _v220(_v0) {
    var _v1, _v2;
    return (_v1 = _v0.x) && "0%" !== _v1 || (_v2 = _v0.y) && "0%" !== _v2;
  }
  _v0.s(["createBox", 0, _v214, "createDelta", 0, () => ({
    x: _v212(),
    y: _v212()
  })], 0), _v0.s(["eachAxis", 0, _v215], 0);
  function _v221(_v0, _v1, _v2) {
    return _v2 + _v1 * (_v0 - _v2);
  }
  function _v222(_v0, _v1, _v2, _v3, _v4) {
    return void 0 !== _v4 && (_v0 = _v221(_v0, _v4, _v3)), _v221(_v0, _v2, _v3) + _v1;
  }
  function _v223(_v0, _v1 = 0, _v2 = 1, _v3, _v4) {
    _v0.min = _v222(_v0.min, _v1, _v2, _v3, _v4), _v0.max = _v222(_v0.max, _v1, _v2, _v3, _v4);
  }
  function _v224(_v0, {
    x: _v1,
    y: _v2
  }) {
    _v223(_v0.x, _v1.translate, _v1.scale, _v1.originPoint), _v223(_v0.y, _v2.translate, _v2.scale, _v2.originPoint);
  }
  function _v225(_v0, _v1) {
    _v0.min = _v0.min + _v1, _v0.max = _v0.max + _v1;
  }
  function _v226(_v0, _v1, _v2, _v3, _v4 = .5) {
    let _v5 = _v134(_v0.min, _v0.max, _v4);
    _v223(_v0, _v1, _v2, _v5, _v3);
  }
  function _v227(_v0, _v1) {
    _v226(_v0.x, _v1.x, _v1.scaleX, _v1.scale, _v1.originX), _v226(_v0.y, _v1.y, _v1.scaleY, _v1.scale, _v1.originY);
  }
  function _v228(_v0, _v1) {
    return _v216(function (_v0, _v1) {
      if (!_v1) return _v0;
      let _v2 = _v1({
          x: _v0.left,
          y: _v0.top
        }),
        _v3 = _v1({
          x: _v0.right,
          y: _v0.bottom
        });
      return {
        top: _v2.y,
        left: _v2.x,
        bottom: _v3.y,
        right: _v3.x
      };
    }(_v0.getBoundingClientRect(), _v1));
  }
  function _v229(_v0, _v1, _v2) {
    let _v3 = _v228(_v0, _v2),
      {
        scroll: _v4
      } = _v1;
    return _v4 && (_v225(_v3.x, _v4.offset.x), _v225(_v3.y, _v4.offset.y)), _v3;
  }
  _v0.s(["has2DTranslate", 0, _v220, "hasScale", 0, _v218, "hasTransform", 0, _v219], 0), _v0.s(["applyBoxDelta", 0, _v224, "applyTreeDeltas", 0, function (_v0, _v1, _v2, _v3 = !1) {
    let _v4,
      _v5,
      _v6 = _v2.length;
    if (_v6) {
      _v1.x = _v1.y = 1;
      for (let _v0 = 0; _v0 < _v6; _v0++) {
        _v5 = (_v4 = _v2[_v0]).projectionDelta;
        let {
          visualElement: _v0
        } = _v4.options;
        (!_v0 || !_v0.props.style || "contents" !== _v0.props.style.display) && (_v3 && _v4.options.layoutScroll && _v4.scroll && _v4 !== _v4.root && _v227(_v0, {
          x: -_v4.scroll.offset.x,
          y: -_v4.scroll.offset.y
        }), _v5 && (_v1.x *= _v5.x.scale, _v1.y *= _v5.y.scale, _v224(_v0, _v5)), _v3 && _v219(_v4.latestValues) && _v227(_v0, _v4.latestValues));
      }
      _v1.x < 1.0000000000001 && _v1.x > .999999999999 && (_v1.x = 1), _v1.y < 1.0000000000001 && _v1.y > .999999999999 && (_v1.y = 1);
    }
  }, "scalePoint", 0, _v221, "transformBox", 0, _v227, "translateAxis", 0, _v225], 0), _v0.s(["measurePageBox", 0, _v229, "measureViewportBox", 0, _v228], 0);
  let _v230 = ({
      current: _v0
    }) => _v0 ? _v0.ownerDocument.defaultView : null,
    _v231 = new WeakMap();
  class _v232 {
    constructor(_v0) {
      this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
        x: 0,
        y: 0
      }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = _v214(), this.visualElement = _v0;
    }
    start(_v0, {
      snapToCursor: _v1 = !1
    } = {}) {
      let {
        presenceContext: _v2
      } = this.visualElement;
      if (_v2 && !1 === _v2.isPresent) return;
      let _v3 = _v0 => {
          let {
            dragSnapToOrigin: _v1
          } = this.getProps();
          _v1 ? this.pauseAnimation() : this.stopAnimation(), _v1 && this.snapToCursor(_v194(_v0).point);
        },
        _v4 = (_v0, _v1) => {
          let {
            drag: _v2,
            dragPropagation: _v3,
            onDragStart: _v4
          } = this.getProps();
          if (_v2 && !_v3 && (this.openDragLock && this.openDragLock(), this.openDragLock = function (_v0) {
            if ("x" === _v0 || "y" === _v0) if (_v191[_v0]) return null;else return _v191[_v0] = !0, () => {
              _v191[_v0] = !1;
            };
            return _v191.x || _v191.y ? null : (_v191.x = _v191.y = !0, () => {
              _v191.x = _v191.y = !1;
            });
          }(_v2), !this.openDragLock)) return;
          this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), _v215(_v0 => {
            let _v1 = this.getAxisMotionValue(_v0).get() || 0;
            if (_v80.test(_v1)) {
              let {
                projection: _v0
              } = this.visualElement;
              if (_v0 && _v0.layout) {
                let _v0 = _v0.layout.layoutBox[_v0];
                _v0 && (_v1 = _v204(_v0) * (parseFloat(_v1) / 100));
              }
            }
            this.originPoint[_v0] = _v1;
          }), _v4 && _v36.postRender(() => _v4(_v0, _v1)), _v50(this.visualElement, "transform");
          let {
            animationState: _v5
          } = this.visualElement;
          _v5 && _v5.setActive("whileDrag", !0);
        },
        _v5 = (_v0, _v1) => {
          let {
            dragPropagation: _v2,
            dragDirectionLock: _v3,
            onDirectionLock: _v4,
            onDrag: _v5
          } = this.getProps();
          if (!_v2 && !this.openDragLock) return;
          let {
            offset: _v6
          } = _v1;
          if (_v3 && null === this.currentDirection) {
            this.currentDirection = function (_v0, _v1 = 10) {
              let _v2 = null;
              return Math.abs(_v0.y) > _v1 ? _v2 = "y" : Math.abs(_v0.x) > _v1 && (_v2 = "x"), _v2;
            }(_v6), null !== this.currentDirection && _v4 && _v4(this.currentDirection);
            return;
          }
          this.updateAxis("x", _v1.point, _v6), this.updateAxis("y", _v1.point, _v6), this.visualElement.render(), _v5 && _v5(_v0, _v1);
        },
        _v6 = (_v0, _v1) => this.stop(_v0, _v1),
        _v7 = () => _v215(_v0 => {
          var _v1;
          return "paused" === this.getAnimationState(_v0) && (null == (_v1 = this.getAxisMotionValue(_v0).animation) ? void 0 : _v1.play());
        }),
        {
          dragSnapToOrigin: _v8
        } = this.getProps();
      this.panSession = new _v198(_v0, {
        onSessionStart: _v3,
        onStart: _v4,
        onMove: _v5,
        onSessionEnd: _v6,
        resumeAnimation: _v7
      }, {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: _v8,
        contextWindow: _v230(this.visualElement)
      });
    }
    stop(_v0, _v1) {
      let _v2 = this.isDragging;
      if (this.cancel(), !_v2) return;
      let {
        velocity: _v3
      } = _v1;
      this.startAnimation(_v3);
      let {
        onDragEnd: _v4
      } = this.getProps();
      _v4 && _v36.postRender(() => _v4(_v0, _v1));
    }
    cancel() {
      this.isDragging = !1;
      let {
        projection: _v0,
        animationState: _v1
      } = this.visualElement;
      _v0 && (_v0.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
      let {
        dragPropagation: _v2
      } = this.getProps();
      !_v2 && this.openDragLock && (this.openDragLock(), this.openDragLock = null), _v1 && _v1.setActive("whileDrag", !1);
    }
    updateAxis(_v0, _v1, _v2) {
      let {
        drag: _v3
      } = this.getProps();
      if (!_v2 || !_v233(_v0, _v3, this.currentDirection)) return;
      let _v4 = this.getAxisMotionValue(_v0),
        _v5 = this.originPoint[_v0] + _v2[_v0];
      this.constraints && this.constraints[_v0] && (_v5 = function (_v0, {
        min: _v1,
        max: _v2
      }, _v3) {
        return void 0 !== _v1 && _v0 < _v1 ? _v0 = _v3 ? _v134(_v1, _v0, _v3.min) : Math.max(_v0, _v1) : void 0 !== _v2 && _v0 > _v2 && (_v0 = _v3 ? _v134(_v2, _v0, _v3.max) : Math.min(_v0, _v2)), _v0;
      }(_v5, this.constraints[_v0], this.elastic[_v0])), _v4.set(_v5);
    }
    resolveConstraints() {
      var _v0;
      let {
          dragConstraints: _v1,
          dragElastic: _v2
        } = this.getProps(),
        _v3 = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : null == (_v0 = this.visualElement.projection) ? void 0 : _v0.layout,
        _v4 = this.constraints;
      _v1 && _v203(_v1) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : _v1 && _v3 ? this.constraints = function (_v0, {
        top: _v1,
        left: _v2,
        bottom: _v3,
        right: _v4
      }) {
        return {
          x: _v208(_v0.x, _v2, _v4),
          y: _v208(_v0.y, _v1, _v3)
        };
      }(_v3.layoutBox, _v1) : this.constraints = !1, this.elastic = function (_v0 = .35) {
        return !1 === _v0 ? _v0 = 0 : !0 === _v0 && (_v0 = .35), {
          x: _v210(_v0, "left", "right"),
          y: _v210(_v0, "top", "bottom")
        };
      }(_v2), _v4 !== this.constraints && _v3 && this.constraints && !this.hasMutatedConstraints && _v215(_v0 => {
        var _v1, _v2;
        let _v3;
        !1 !== this.constraints && this.getAxisMotionValue(_v0) && (this.constraints[_v0] = (_v1 = _v3.layoutBox[_v0], _v2 = this.constraints[_v0], _v3 = {}, void 0 !== _v2.min && (_v3.min = _v2.min - _v1.min), void 0 !== _v2.max && (_v3.max = _v2.max - _v1.min), _v3));
      });
    }
    resolveRefConstraints() {
      var _v0;
      let {
        dragConstraints: _v1,
        onMeasureDragConstraints: _v2
      } = this.getProps();
      if (!_v1 || !_v203(_v1)) return !1;
      let _v3 = _v1.current;
      _v12(null !== _v3, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
      let {
        projection: _v4
      } = this.visualElement;
      if (!_v4 || !_v4.layout) return !1;
      let _v5 = _v229(_v3, _v4.root, this.visualElement.getTransformPagePoint()),
        _v6 = (_v0 = _v4.layout.layoutBox, {
          x: _v209(_v0.x, _v5.x),
          y: _v209(_v0.y, _v5.y)
        });
      if (_v2) {
        let _v0 = _v2(function ({
          x: _v0,
          y: _v1
        }) {
          return {
            top: _v1.min,
            right: _v0.max,
            bottom: _v1.max,
            left: _v0.min
          };
        }(_v6));
        this.hasMutatedConstraints = !!_v0, _v0 && (_v6 = _v216(_v0));
      }
      return _v6;
    }
    startAnimation(_v0) {
      let {
          drag: _v1,
          dragMomentum: _v2,
          dragElastic: _v3,
          dragTransition: _v4,
          dragSnapToOrigin: _v5,
          onDragTransitionEnd: _v6
        } = this.getProps(),
        _v7 = this.constraints || {};
      return Promise.all(_v215(_v0 => {
        if (!_v233(_v0, _v1, this.currentDirection)) return;
        let _v1 = _v7 && _v7[_v0] || {};
        _v5 && (_v1 = {
          min: 0,
          max: 0
        });
        let _v2 = {
          type: "inertia",
          velocity: _v2 ? _v0[_v0] : 0,
          bounceStiffness: _v3 ? 200 : 0,
          bounceDamping: _v3 ? 40 : 0,
          timeConstant: 750,
          restDelta: 1,
          restSpeed: 10,
          ..._v4,
          ..._v1
        };
        return this.startAxisValueAnimation(_v0, _v2);
      })).then(_v6);
    }
    startAxisValueAnimation(_v0, _v1) {
      let _v2 = this.getAxisMotionValue(_v0);
      return _v50(this.visualElement, _v0), _v2.start(_v179(_v0, _v2, 0, _v1, this.visualElement, !1));
    }
    stopAnimation() {
      _v215(_v0 => this.getAxisMotionValue(_v0).stop());
    }
    pauseAnimation() {
      _v215(_v0 => {
        var _v1;
        return null == (_v1 = this.getAxisMotionValue(_v0).animation) ? void 0 : _v1.pause();
      });
    }
    getAnimationState(_v0) {
      var _v1;
      return null == (_v1 = this.getAxisMotionValue(_v0).animation) ? void 0 : _v1.state;
    }
    getAxisMotionValue(_v0) {
      let _v1 = `_drag${_v0.toUpperCase()}`,
        _v2 = this.visualElement.getProps();
      return _v2[_v1] || this.visualElement.getValue(_v0, (_v2.initial ? _v2.initial[_v0] : void 0) || 0);
    }
    snapToCursor(_v0) {
      _v215(_v0 => {
        let {
          drag: _v1
        } = this.getProps();
        if (!_v233(_v0, _v1, this.currentDirection)) return;
        let {
            projection: _v2
          } = this.visualElement,
          _v3 = this.getAxisMotionValue(_v0);
        if (_v2 && _v2.layout) {
          let {
            min: _v0,
            max: _v1
          } = _v2.layout.layoutBox[_v0];
          _v3.set(_v0[_v0] - _v134(_v0, _v1, .5));
        }
      });
    }
    scalePositionWithinConstraints() {
      if (!this.visualElement.current) return;
      let {
          drag: _v0,
          dragConstraints: _v1
        } = this.getProps(),
        {
          projection: _v2
        } = this.visualElement;
      if (!_v203(_v1) || !_v2 || !this.constraints) return;
      this.stopAnimation();
      let _v3 = {
        x: 0,
        y: 0
      };
      _v215(_v0 => {
        let _v1 = this.getAxisMotionValue(_v0);
        if (_v1 && !1 !== this.constraints) {
          var _v2, _v3;
          let _v0,
            _v1,
            _v2,
            _v3 = _v1.get();
          _v3[_v0] = (_v2 = {
            min: _v3,
            max: _v3
          }, _v3 = this.constraints[_v0], _v0 = .5, _v1 = _v204(_v2), (_v2 = _v204(_v3)) > _v1 ? _v0 = _v24(_v3.min, _v3.max - _v1, _v2.min) : _v1 > _v2 && (_v0 = _v24(_v2.min, _v2.max - _v2, _v3.min)), _v66(0, 1, _v0));
        }
      });
      let {
        transformTemplate: _v4
      } = this.visualElement.getProps();
      this.visualElement.current.style.transform = _v4 ? _v4({}, "") : "none", _v2.root && _v2.root.updateScroll(), _v2.updateLayout(), this.resolveConstraints(), _v215(_v0 => {
        if (!_v233(_v0, _v0, null)) return;
        let _v1 = this.getAxisMotionValue(_v0),
          {
            min: _v2,
            max: _v3
          } = this.constraints[_v0];
        _v1.set(_v134(_v2, _v3, _v3[_v0]));
      });
    }
    addListeners() {
      if (!this.visualElement.current) return;
      _v231.set(this.visualElement, this);
      let _v0 = _v196(this.visualElement.current, "pointerdown", _v0 => {
          let {
            drag: _v1,
            dragListener: _v2 = !0
          } = this.getProps();
          _v1 && _v2 && this.start(_v0);
        }),
        _v1 = () => {
          let {
            dragConstraints: _v0
          } = this.getProps();
          _v203(_v0) && _v0.current && (this.constraints = this.resolveRefConstraints());
        },
        {
          projection: _v2
        } = this.visualElement,
        _v3 = _v2.addEventListener("measure", _v1);
      _v2 && !_v2.layout && (_v2.root && _v2.root.updateScroll(), _v2.updateLayout()), _v36.read(_v1);
      let _v4 = _v193(window, "resize", () => this.scalePositionWithinConstraints()),
        _v5 = _v2.addEventListener("didUpdate", ({
          delta: _v0,
          hasLayoutChanged: _v1
        }) => {
          this.isDragging && _v1 && (_v215(_v0 => {
            let _v1 = this.getAxisMotionValue(_v0);
            _v1 && (this.originPoint[_v0] += _v0[_v0].translate, _v1.set(_v1.get() + _v0[_v0].translate));
          }), this.visualElement.render());
        });
      return () => {
        _v4(), _v0(), _v3(), _v5 && _v5();
      };
    }
    getProps() {
      let _v0 = this.visualElement.getProps(),
        {
          drag: _v1 = !1,
          dragDirectionLock: _v2 = !1,
          dragPropagation: _v3 = !1,
          dragConstraints: _v4 = !1,
          dragElastic: _v5 = .35,
          dragMomentum: _v6 = !0
        } = _v0;
      return {
        ..._v0,
        drag: _v1,
        dragDirectionLock: _v2,
        dragPropagation: _v3,
        dragConstraints: _v4,
        dragElastic: _v5,
        dragMomentum: _v6
      };
    }
  }
  function _v233(_v0, _v1, _v2) {
    return (!0 === _v1 || _v1 === _v0) && (null === _v2 || _v2 === _v0);
  }
  _v0.s(["DragGesture", 0, class extends _v189 {
    constructor(_v0) {
      super(_v0), this.removeGroupControls = _v12, this.removeListeners = _v12, this.controls = new _v232(_v0);
    }
    mount() {
      let {
        dragControls: _v0
      } = this.node.getProps();
      _v0 && (this.removeGroupControls = _v0.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || _v12;
    }
    unmount() {
      this.removeGroupControls(), this.removeListeners();
    }
  }], 0);
  let _v234 = _v0 => (_v0, _v1) => {
    _v0 && _v36.postRender(() => _v0(_v0, _v1));
  };
  _v0.s(["PanGesture", 0, class extends _v189 {
    constructor() {
      super(...arguments), this.removePointerDownListener = _v12;
    }
    onPointerDown(_v0) {
      this.session = new _v198(_v0, this.createPanHandlers(), {
        transformPagePoint: this.node.getTransformPagePoint(),
        contextWindow: _v230(this.node)
      });
    }
    createPanHandlers() {
      let {
        onPanSessionStart: _v0,
        onPanStart: _v1,
        onPan: _v2,
        onPanEnd: _v3
      } = this.node.getProps();
      return {
        onSessionStart: _v234(_v0),
        onStart: _v234(_v1),
        onMove: _v2,
        onEnd: (_v0, _v1) => {
          delete this.session, _v3 && _v36.postRender(() => _v3(_v0, _v1));
        }
      };
    }
    mount() {
      this.removePointerDownListener = _v196(this.node.current, "pointerdown", _v0 => this.onPointerDown(_v0));
    }
    update() {
      this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
      this.removePointerDownListener(), this.session && this.session.end();
    }
  }], 0);
}