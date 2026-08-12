{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0 => _v0 ? "" : void 0,
    _v4 = _v0 => !!_v0 || void 0,
    _v5 = (..._v0) => _v0.filter(Boolean).join(" ");
  function _v6(..._v0) {
    return function (_v0) {
      _v0.some(_v0 => (null == _v0 || _v0(_v0), null == _v0 ? void 0 : _v0.defaultPrevented));
    };
  }
  function _v7(_v0) {
    let {
      orientation: _v1,
      vertical: _v2,
      horizontal: _v3
    } = _v0;
    return "vertical" === _v1 ? _v2 : _v3;
  }
  _v0.s(["ariaAttr", 0, _v4, "callAllHandlers", 0, _v6, "cx", 0, _v5, "dataAttr", 0, _v3], 0);
  var _v8 = {
    width: 0,
    height: 0
  };
  function _v9(_v0) {
    let {
        orientation: _v1,
        thumbPercents: _v2,
        thumbRects: _v3,
        isReversed: _v4
      } = _v0,
      _v5 = "vertical" === _v1 ? _v3.reduce((_v0, _v1) => (_v0 || _v8).height > (_v1 || _v8).height ? _v0 : _v1, _v8) : _v3.reduce((_v0, _v1) => (_v0 || _v8).width > (_v1 || _v8).width ? _v0 : _v1, _v8),
      _v6 = {
        position: "relative",
        touchAction: "none",
        WebkitTapHighlightColor: "rgba(0,0,0,0)",
        userSelect: "none",
        outline: 0,
        ..._v7({
          orientation: _v1,
          vertical: _v5 ? {
            paddingLeft: _v5.width / 2,
            paddingRight: _v5.width / 2
          } : {},
          horizontal: _v5 ? {
            paddingTop: _v5.height / 2,
            paddingBottom: _v5.height / 2
          } : {}
        })
      },
      _v7 = {
        position: "absolute",
        ..._v7({
          orientation: _v1,
          vertical: {
            left: "50%",
            transform: "translateX(-50%)",
            height: "100%"
          },
          horizontal: {
            top: "50%",
            transform: "translateY(-50%)",
            width: "100%"
          }
        })
      },
      _v8 = 1 === _v2.length,
      _v9 = [0, _v4 ? 100 - _v2[0] : _v2[0]],
      _v10 = _v8 ? _v9 : _v2,
      _v11 = _v10[0];
    !_v8 && _v4 && (_v11 = 100 - _v11);
    let _v12 = Math.abs(_v10[_v10.length - 1] - _v10[0]),
      _v13 = {
        ..._v7,
        ..._v7({
          orientation: _v1,
          vertical: _v4 ? {
            height: `${_v12}%`,
            top: `${_v11}%`
          } : {
            height: `${_v12}%`,
            bottom: `${_v11}%`
          },
          horizontal: _v4 ? {
            width: `${_v12}%`,
            right: `${_v11}%`
          } : {
            width: `${_v12}%`,
            left: `${_v11}%`
          }
        })
      };
    return {
      trackStyle: _v7,
      innerTrackStyle: _v13,
      rootStyle: _v6,
      getThumbStyle: _v0 => {
        var _v1;
        let _v2 = null != (_v1 = _v3[_v0]) ? _v1 : _v8;
        return {
          position: "absolute",
          userSelect: "none",
          WebkitUserSelect: "none",
          MozUserSelect: "none",
          msUserSelect: "none",
          touchAction: "none",
          ..._v7({
            orientation: _v1,
            vertical: {
              bottom: `calc(${_v2[_v0]}% - ${_v2.height / 2}px)`
            },
            horizontal: {
              left: `calc(${_v2[_v0]}% - ${_v2.width / 2}px)`
            }
          })
        };
      }
    };
  }
  function _v10(_v0) {
    let {
      isReversed: _v1,
      direction: _v2,
      orientation: _v3
    } = _v0;
    return "ltr" === _v2 || "vertical" === _v3 ? _v1 : !_v1;
  }
  _v0.s(["getIds", 0, function (_v0) {
    return {
      root: `slider-root-${_v0}`,
      getThumb: _v0 => `slider-thumb-${_v0}-${_v0}`,
      getInput: _v0 => `slider-input-${_v0}-${_v0}`,
      track: `slider-track-${_v0}`,
      innerTrack: `slider-filled-track-${_v0}`,
      getMarker: _v0 => `slider-marker-${_v0}-${_v0}`,
      output: `slider-output-${_v0}`
    };
  }, "getIsReversed", 0, _v10, "getStyles", 0, _v9, "orient", 0, _v7], 0);
  function _v11(_v0, _v1 = "page") {
    return _v0.touches ? function (_v0, _v1 = "page") {
      let _v2 = _v0.touches[0] || _v0.changedTouches[0];
      return {
        x: _v2[`${_v1}X`],
        y: _v2[`${_v1}Y`]
      };
    }(_v0, _v1) : function (_v0, _v1 = "page") {
      return {
        x: _v0[`${_v1}X`],
        y: _v0[`${_v1}Y`]
      };
    }(_v0, _v1);
  }
  function _v12(_v0, _v1, _v2, _v3) {
    var _v4;
    return _v4 = function (_v0, _v1 = !1) {
      function _v2(_v0) {
        _v0(_v0, {
          point: _v11(_v0)
        });
      }
      return _v1 ? _v0 => {
        var _v1;
        let _v2,
          _v3 = void 0 !== (_v2 = null != (_v1 = _v0.view) ? _v1 : window).PointerEvent && _v0 instanceof _v2.PointerEvent ? "mouse" === _v0.pointerType : _v0 instanceof _v2.MouseEvent;
        (!_v3 || _v3 && 0 === _v0.button) && _v2(_v0);
      } : _v2;
    }(_v2, "pointerdown" === _v1), _v0.addEventListener(_v1, _v4, _v3), () => {
      _v0.removeEventListener(_v1, _v4, _v3);
    };
  }
  let _v13 = 1 / 60 * 0,
    _v14 = "u" > typeof performance ? () => performance.now() : () => Date.now(),
    _v15 = "u" > typeof window ? _v0 => window.requestAnimationFrame(_v0) : _v0 => setTimeout(() => _v0(_v14()), _v13),
    _v16 = !0,
    _v17 = !1,
    _v18 = !1,
    _v19 = {
      delta: 0,
      timestamp: 0
    },
    _v20 = ["read", "update", "preRender", "render", "postRender"],
    _v21 = _v20.reduce((_v0, _v1) => {
      var _v2;
      let _v3, _v4, _v5, _v6, _v7, _v8, _v9;
      return _v0[_v1] = (_v2 = () => _v17 = !0, _v3 = [], _v4 = [], _v5 = 0, _v6 = !1, _v7 = !1, _v8 = new WeakSet(), _v9 = {
        schedule: (_v0, _v1 = !1, _v2 = !1) => {
          let _v3 = _v2 && _v6,
            _v4 = _v3 ? _v3 : _v4;
          return _v1 && _v8.add(_v0), -1 === _v4.indexOf(_v0) && (_v4.push(_v0), _v3 && _v6 && (_v5 = _v3.length)), _v0;
        },
        cancel: _v0 => {
          let _v1 = _v4.indexOf(_v0);
          -1 !== _v1 && _v4.splice(_v1, 1), _v8.delete(_v0);
        },
        process: _v0 => {
          if (_v6) {
            _v7 = !0;
            return;
          }
          if (_v6 = !0, [_v3, _v4] = [_v4, _v3], _v4.length = 0, _v5 = _v3.length) for (let _v0 = 0; _v0 < _v5; _v0++) {
            let _v0 = _v3[_v0];
            _v0(_v0), _v8.has(_v0) && (_v9.schedule(_v0), _v2());
          }
          _v6 = !1, _v7 && (_v7 = !1, _v9.process(_v0));
        }
      }), _v0;
    }, {}),
    _v22 = _v20.reduce((_v0, _v1) => {
      let _v2 = _v21[_v1];
      return _v0[_v1] = (_v0, _v1 = !1, _v2 = !1) => (_v17 || _v26(), _v2.schedule(_v0, _v1, _v2)), _v0;
    }, {}),
    _v23 = _v20.reduce((_v0, _v1) => (_v0[_v1] = _v21[_v1].cancel, _v0), {});
  _v20.reduce((_v0, _v1) => (_v0[_v1] = () => _v21[_v1].process(_v19), _v0), {});
  let _v24 = _v0 => _v21[_v0].process(_v19),
    _v25 = _v0 => {
      _v17 = !1, _v19.delta = _v16 ? _v13 : Math.max(Math.min(_v0 - _v19.timestamp, 40), 1), _v19.timestamp = _v0, _v18 = !0, _v20.forEach(_v24), _v18 = !1, _v17 && (_v16 = !1, _v15(_v25));
    },
    _v26 = () => {
      _v17 = !0, _v16 = !0, _v18 || _v15(_v25);
    };
  var _v27 = Object.defineProperty,
    _v28 = (_v0, _v1, _v2) => {
      let _v3;
      return (_v3 = "symbol" != typeof _v1 ? _v1 + "" : _v1) in _v0 ? _v27(_v0, _v3, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: _v2
      }) : _v0[_v3] = _v2, _v2;
    },
    _v29 = class {
      constructor(_v0, _v1, _v2) {
        var _v3;
        if (_v28(this, "history", []), _v28(this, "startEvent", null), _v28(this, "lastEvent", null), _v28(this, "lastEventInfo", null), _v28(this, "handlers", {}), _v28(this, "removeListeners", () => {}), _v28(this, "threshold", 3), _v28(this, "win"), _v28(this, "updatePoint", () => {
          var _v0, _v1;
          if (!(this.lastEvent && this.lastEventInfo)) return;
          let _v2 = _v31(this.lastEventInfo, this.history),
            _v3 = null !== this.startEvent,
            _v4 = (_v0 = _v2.offset, _v1 = {
              x: 0,
              y: 0
            }, ("number" == typeof _v0 && "number" == typeof _v1 ? _v33(_v0, _v1) : _v34(_v0) && _v34(_v1) ? Math.sqrt(_v33(_v0.x, _v1.x) ** 2 + _v33(_v0.y, _v1.y) ** 2) : 0) >= this.threshold);
          if (!_v3 && !_v4) return;
          let {
            timestamp: _v5
          } = _v19;
          this.history.push({
            ..._v2.point,
            timestamp: _v5
          });
          let {
            onStart: _v6,
            onMove: _v7
          } = this.handlers;
          _v3 || (null == _v6 || _v6(this.lastEvent, _v2), this.startEvent = this.lastEvent), null == _v7 || _v7(this.lastEvent, _v2);
        }), _v28(this, "onPointerMove", (_v0, _v1) => {
          this.lastEvent = _v0, this.lastEventInfo = _v1, _v22.update(this.updatePoint, !0);
        }), _v28(this, "onPointerUp", (_v0, _v1) => {
          let _v2 = _v31(_v1, this.history),
            {
              onEnd: _v3,
              onSessionEnd: _v4
            } = this.handlers;
          null == _v4 || _v4(_v0, _v2), this.end(), _v3 && this.startEvent && (null == _v3 || _v3(_v0, _v2));
        }), this.win = null != (_v3 = _v0.view) ? _v3 : window, function (_v0) {
          return !!_v0.touches && _v0.touches.length > 1;
        }(_v0)) return;
        this.handlers = _v1, _v2 && (this.threshold = _v2), _v0.stopPropagation(), _v0.preventDefault();
        const _v4 = {
            point: _v11(_v0)
          },
          {
            timestamp: _v5
          } = _v19;
        this.history = [{
          ..._v4.point,
          timestamp: _v5
        }];
        const {
          onSessionStart: _v6
        } = _v1;
        null == _v6 || _v6(_v0, _v31(_v4, this.history)), this.removeListeners = function (..._v0) {
          return _v0 => _v0.reduce((_v0, _v1) => _v1(_v0), _v0);
        }(_v12(this.win, "pointermove", this.onPointerMove), _v12(this.win, "pointerup", this.onPointerUp), _v12(this.win, "pointercancel", this.onPointerUp));
      }
      updateHandlers(_v0) {
        this.handlers = _v0;
      }
      end() {
        var _v0;
        null == (_v0 = this.removeListeners) || _v0.call(this), _v23.update(this.updatePoint);
      }
    };
  function _v30(_v0, _v1) {
    return {
      x: _v0.x - _v1.x,
      y: _v0.y - _v1.y
    };
  }
  function _v31(_v0, _v1) {
    return {
      point: _v0.point,
      delta: _v30(_v0.point, _v1[_v1.length - 1]),
      offset: _v30(_v0.point, _v1[0]),
      velocity: function (_v0) {
        if (_v0.length < 2) return {
          x: 0,
          y: 0
        };
        let _v1 = _v0.length - 1,
          _v2 = null,
          _v3 = _v0[_v0.length - 1];
        for (; _v1 >= 0 && (_v2 = _v0[_v1], !(_v3.timestamp - _v2.timestamp > _v32(.1)));) _v1--;
        if (!_v2) return {
          x: 0,
          y: 0
        };
        let _v4 = (_v3.timestamp - _v2.timestamp) / 0;
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
  var _v32 = _v0 => 0 * _v0;
  function _v33(_v0, _v1) {
    return Math.abs(_v0 - _v1);
  }
  function _v34(_v0) {
    return "x" in _v0 && "y" in _v0;
  }
  var _v35 = _v0.i(0);
  function _v36(_v0) {
    let _v1 = (0, _v35.useRef)(null);
    return _v1.current = _v0, _v1;
  }
  function _v37(_v0, _v1) {
    let {
        onPan: _v2,
        onPanStart: _v3,
        onPanEnd: _v4,
        onPanSessionStart: _v5,
        onPanSessionEnd: _v6,
        threshold: _v7
      } = _v1,
      _v8 = !!(_v2 || _v3 || _v4 || _v5 || _v6),
      _v9 = (0, _v35.useRef)(null),
      _v10 = _v36({
        onSessionStart: _v5,
        onSessionEnd: _v6,
        onStart: _v3,
        onMove: _v2,
        onEnd(_v0, _v1) {
          _v9.current = null, null == _v4 || _v4(_v0, _v1);
        }
      });
    (0, _v35.useEffect)(() => {
      var _v0;
      null == (_v0 = _v9.current) || _v0.updateHandlers(_v10.current);
    }), (0, _v35.useEffect)(() => {
      let _v0 = _v0.current;
      if (_v0 && _v8) return _v12(_v0, "pointerdown", function (_v0) {
        _v9.current = new _v29(_v0, _v10.current, _v7);
      });
    }, [_v0, _v8, _v10, _v7]), (0, _v35.useEffect)(() => () => {
      var _v0;
      null == (_v0 = _v9.current) || _v0.end(), _v9.current = null;
    }, []);
  }
  _v0.s(["usePanEvent", 0, _v37], 0);
  var _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0);
  function _v44(_v0) {
    var _v1, _v2, _v3;
    let {
        min: _v4 = 0,
        max: _v5 = 100,
        onChange: _v6,
        value: _v7,
        defaultValue: _v8,
        isReversed: _v9,
        direction: _v10 = "ltr",
        orientation: _v11 = "horizontal",
        id: _v12,
        isDisabled: _v13,
        isReadOnly: _v14,
        onChangeStart: _v15,
        onChangeEnd: _v16,
        step: _v17 = 1,
        getAriaValueText: _v18,
        "aria-valuetext": _v19,
        "aria-label": _v20,
        "aria-labelledby": _v21,
        name: _v22,
        focusThumbOnChange: _v23 = !0,
        ..._v24
      } = _v0,
      _v25 = (0, _v38.useCallbackRef)(_v15),
      _v26 = (0, _v38.useCallbackRef)(_v16),
      _v27 = (0, _v38.useCallbackRef)(_v18),
      _v28 = _v10({
        isReversed: _v9,
        direction: _v10,
        orientation: _v11
      }),
      [_v29, _v30] = (0, _v40.useControllableState)({
        value: _v7,
        defaultValue: null != _v8 ? _v8 : (_v2 = _v4, (_v3 = _v5) < _v2 ? _v2 : _v2 + (_v3 - _v2) / 2),
        onChange: _v6
      }),
      [_v31, _v32] = (0, _v35.useState)(!1),
      [_v33, _v34] = (0, _v35.useState)(!1),
      _v35 = !(_v13 || _v14),
      _v36 = (_v5 - _v4) / 10,
      _v37 = _v17 || (_v5 - _v4) / 100,
      _v38 = (0, _v43.clampValue)(_v29, _v4, _v5),
      _v39 = _v5 - _v38 + _v4,
      _v40 = _v28 ? _v39 : _v38,
      _v41 = (0, _v43.valueToPercent)(_v40, _v4, _v5),
      _v42 = "vertical" === _v11,
      _v43 = _v36({
        min: _v4,
        max: _v5,
        step: _v17,
        isDisabled: _v13,
        value: _v38,
        isInteractive: _v35,
        isReversed: _v28,
        isVertical: _v42,
        eventSource: null,
        focusThumbOnChange: _v23,
        orientation: _v11
      }),
      _v44 = (0, _v35.useRef)(null),
      _v45 = (0, _v35.useRef)(null),
      _v46 = (0, _v35.useRef)(null),
      _v47 = (0, _v35.useId)(),
      _v48 = null != _v12 ? _v12 : _v47,
      [_v49, _v50] = [`slider-thumb-${_v48}`, `slider-track-${_v48}`],
      _v51 = (0, _v35.useCallback)(_v0 => {
        var _v1, _v2;
        if (!_v44.current) return;
        let _v3 = _v43.current;
        _v3.eventSource = "pointer";
        let _v4 = _v44.current.getBoundingClientRect(),
          {
            clientX: _v5,
            clientY: _v6
          } = null != (_v2 = null == (_v1 = _v0.touches) ? void 0 : _v1[0]) ? _v2 : _v0,
          _v7 = (_v42 ? _v4.bottom - _v6 : _v5 - _v4.left) / (_v42 ? _v4.height : _v4.width);
        _v28 && (_v7 = 1 - _v7);
        let _v8 = (0, _v43.percentToValue)(_v7, _v3.min, _v3.max);
        return _v3.step && (_v8 = parseFloat((0, _v43.roundValueToStep)(_v8, _v3.min, _v3.step))), _v8 = (0, _v43.clampValue)(_v8, _v3.min, _v3.max);
      }, [_v42, _v28, _v43]),
      _v52 = (0, _v35.useCallback)(_v0 => {
        let _v1 = _v43.current;
        _v1.isInteractive && (_v0 = parseFloat((0, _v43.roundValueToStep)(_v0, _v1.min, _v37)), _v30(_v0 = (0, _v43.clampValue)(_v0, _v1.min, _v1.max)));
      }, [_v37, _v30, _v43]),
      _v53 = (0, _v35.useMemo)(() => ({
        stepUp(_v0 = _v37) {
          _v52(_v28 ? _v38 - _v0 : _v38 + _v0);
        },
        stepDown(_v0 = _v37) {
          _v52(_v28 ? _v38 + _v0 : _v38 - _v0);
        },
        reset() {
          _v52(_v8 || 0);
        },
        stepTo(_v0) {
          _v52(_v0);
        }
      }), [_v52, _v28, _v38, _v37, _v8]),
      _v54 = (0, _v35.useCallback)(_v0 => {
        let _v1 = _v43.current,
          _v2 = {
            ArrowRight: () => _v53.stepUp(),
            ArrowUp: () => _v53.stepUp(),
            ArrowLeft: () => _v53.stepDown(),
            ArrowDown: () => _v53.stepDown(),
            PageUp: () => _v53.stepUp(_v36),
            PageDown: () => _v53.stepDown(_v36),
            Home: () => _v52(_v1.min),
            End: () => _v52(_v1.max)
          }[_v0.key];
        _v2 && (_v0.preventDefault(), _v0.stopPropagation(), _v2(_v0), _v1.eventSource = "keyboard");
      }, [_v53, _v52, _v36, _v43]),
      _v55 = null != (_v1 = null == _v27 ? void 0 : _v27(_v38)) ? _v1 : _v19,
      _v56 = (0, _v41.useSize)(_v45),
      {
        getThumbStyle: _v57,
        rootStyle: _v58,
        trackStyle: _v59,
        innerTrackStyle: _v60
      } = (0, _v35.useMemo)(() => {
        let _v0 = _v43.current,
          _v1 = null != _v56 ? _v56 : {
            width: 0,
            height: 0
          };
        return _v9({
          isReversed: _v28,
          orientation: _v0.orientation,
          thumbRects: [_v1],
          thumbPercents: [_v41]
        });
      }, [_v28, _v56, _v41, _v43]),
      _v61 = (0, _v35.useCallback)(() => {
        _v43.current.focusThumbOnChange && setTimeout(() => {
          var _v0;
          return null == (_v0 = _v45.current) ? void 0 : _v0.focus();
        });
      }, [_v43]);
    function _v62(_v0) {
      let _v1 = _v51(_v0);
      null != _v1 && _v1 !== _v43.current.value && _v30(_v1);
    }
    (0, _v39.useUpdateEffect)(() => {
      let _v0 = _v43.current;
      _v61(), "keyboard" === _v0.eventSource && (null == _v26 || _v26(_v0.value));
    }, [_v38, _v26]), _v37(_v46, {
      onPanSessionStart(_v0) {
        let _v1 = _v43.current;
        _v1.isInteractive && (_v32(!0), _v61(), _v62(_v0), null == _v25 || _v25(_v1.value));
      },
      onPanSessionEnd() {
        let _v0 = _v43.current;
        _v0.isInteractive && (_v32(!1), null == _v26 || _v26(_v0.value));
      },
      onPan(_v0) {
        _v43.current.isInteractive && _v62(_v0);
      }
    });
    let _v63 = (0, _v35.useCallback)((_v0 = {}, _v1 = null) => ({
        ..._v0,
        ..._v24,
        ref: (0, _v42.mergeRefs)(_v1, _v46),
        tabIndex: -1,
        "aria-disabled": _v4(_v13),
        "data-focused": _v3(_v33),
        style: {
          ..._v0.style,
          ..._v58
        }
      }), [_v24, _v13, _v33, _v58]),
      _v64 = (0, _v35.useCallback)((_v0 = {}, _v1 = null) => ({
        ..._v0,
        ref: (0, _v42.mergeRefs)(_v1, _v44),
        id: _v50,
        "data-disabled": _v3(_v13),
        style: {
          ..._v0.style,
          ..._v59
        }
      }), [_v13, _v50, _v59]),
      _v65 = (0, _v35.useCallback)((_v0 = {}, _v1 = null) => ({
        ..._v0,
        ref: _v1,
        style: {
          ..._v0.style,
          ..._v60
        }
      }), [_v60]),
      _v66 = (0, _v35.useCallback)((_v0 = {}, _v1 = null) => ({
        ..._v0,
        ref: (0, _v42.mergeRefs)(_v1, _v45),
        role: "slider",
        tabIndex: _v35 ? 0 : void 0,
        id: _v49,
        "data-active": _v3(_v31),
        "aria-valuetext": _v55,
        "aria-valuemin": _v4,
        "aria-valuemax": _v5,
        "aria-valuenow": _v38,
        "aria-orientation": _v11,
        "aria-disabled": _v4(_v13),
        "aria-readonly": _v4(_v14),
        "aria-label": _v20,
        "aria-labelledby": _v20 ? void 0 : _v21,
        style: {
          ..._v0.style,
          ..._v57(0)
        },
        onKeyDown: _v6(_v0.onKeyDown, _v54),
        onFocus: _v6(_v0.onFocus, () => _v34(!0)),
        onBlur: _v6(_v0.onBlur, () => _v34(!1))
      }), [_v35, _v49, _v31, _v55, _v4, _v5, _v38, _v11, _v13, _v14, _v20, _v21, _v57, _v54]),
      _v67 = (0, _v35.useCallback)((_v0, _v1 = null) => {
        let _v2 = !(_v0.value < _v4 || _v0.value > _v5),
          _v3 = _v38 >= _v0.value,
          _v4 = (0, _v43.valueToPercent)(_v0.value, _v4, _v5),
          _v5 = {
            position: "absolute",
            pointerEvents: "none",
            ...function (_v0) {
              let {
                orientation: _v1,
                vertical: _v2,
                horizontal: _v3
              } = _v0;
              return "vertical" === _v1 ? _v2 : _v3;
            }({
              orientation: _v11,
              vertical: {
                bottom: _v28 ? `${100 - _v4}%` : `${_v4}%`
              },
              horizontal: {
                left: _v28 ? `${100 - _v4}%` : `${_v4}%`
              }
            })
          };
        return {
          ..._v0,
          ref: _v1,
          role: "presentation",
          "aria-hidden": !0,
          "data-disabled": _v3(_v13),
          "data-invalid": _v3(!_v2),
          "data-highlighted": _v3(_v3),
          style: {
            ..._v0.style,
            ..._v5
          }
        };
      }, [_v13, _v28, _v5, _v4, _v11, _v38]),
      _v68 = (0, _v35.useCallback)((_v0 = {}, _v1 = null) => ({
        ..._v0,
        ref: _v1,
        type: "hidden",
        value: _v38,
        name: _v22
      }), [_v22, _v38]);
    return {
      state: {
        value: _v38,
        isFocused: _v33,
        isDragging: _v31
      },
      actions: _v53,
      getRootProps: _v63,
      getTrackProps: _v64,
      getInnerTrackProps: _v65,
      getThumbProps: _v66,
      getMarkerProps: _v67,
      getInputProps: _v68
    };
  }
  _v0.s(["useSlider", 0, _v44], 0);
  var _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    [_v50, _v51] = (0, _v45.createContext)({
      name: "SliderContext",
      hookName: "useSliderContext",
      providerName: "<Slider />"
    }),
    [_v52, _v53] = (0, _v45.createContext)({
      name: "SliderStylesContext",
      hookName: "useSliderStyles",
      providerName: "<Slider />"
    }),
    _v54 = (0, _v2.forwardRef)((_v0, _v1) => {
      var _v2;
      let _v3 = {
          ..._v0,
          orientation: null != (_v2 = null == _v0 ? void 0 : _v0.orientation) ? _v2 : "horizontal"
        },
        _v4 = (0, _v48.useMultiStyleConfig)("Slider", _v3),
        _v5 = (0, _v47.omitThemingProps)(_v3),
        {
          direction: _v6
        } = (0, _v49.useTheme)();
      _v5.direction = _v6;
      let {
          getInputProps: _v7,
          getRootProps: _v8,
          ..._v9
        } = _v44(_v5),
        _v10 = _v8(),
        _v11 = _v7({}, _v1);
      return (0, _v1.jsx)(_v50, {
        value: _v9,
        children: (0, _v1.jsx)(_v52, {
          value: _v4,
          children: (0, _v1.jsxs)(_v46.chakra.div, {
            ..._v10,
            className: _v5("chakra-slider", _v3.className),
            __css: _v4.container,
            children: [_v3.children, (0, _v1.jsx)("input", {
              ..._v11
            })]
          })
        })
      });
    });
  _v54.displayName = "Slider";
  var _v55 = (0, _v2.forwardRef)((_v0, _v1) => {
    let {
        getThumbProps: _v2
      } = _v51(),
      _v3 = _v53(),
      _v4 = _v2(_v0, _v1);
    return (0, _v1.jsx)(_v46.chakra.div, {
      ..._v4,
      className: _v5("chakra-slider__thumb", _v0.className),
      __css: _v3.thumb
    });
  });
  _v55.displayName = "SliderThumb";
  var _v56 = (0, _v2.forwardRef)((_v0, _v1) => {
    let {
        getTrackProps: _v2
      } = _v51(),
      _v3 = _v53(),
      _v4 = _v2(_v0, _v1);
    return (0, _v1.jsx)(_v46.chakra.div, {
      ..._v4,
      className: _v5("chakra-slider__track", _v0.className),
      __css: _v3.track
    });
  });
  _v56.displayName = "SliderTrack";
  var _v57 = (0, _v2.forwardRef)((_v0, _v1) => {
    let {
        getInnerTrackProps: _v2
      } = _v51(),
      _v3 = _v53(),
      _v4 = _v2(_v0, _v1);
    return (0, _v1.jsx)(_v46.chakra.div, {
      ..._v4,
      className: _v5("chakra-slider__filled-track", _v0.className),
      __css: _v3.filledTrack
    });
  });
  _v57.displayName = "SliderFilledTrack";
  var _v58 = (0, _v2.forwardRef)((_v0, _v1) => {
    let {
        getMarkerProps: _v2
      } = _v51(),
      _v3 = _v53(),
      _v4 = _v2(_v0, _v1);
    return (0, _v1.jsx)(_v46.chakra.div, {
      ..._v4,
      className: _v5("chakra-slider__marker", _v0.className),
      __css: _v3.mark
    });
  });
  _v58.displayName = "SliderMark", _v0.s(["Slider", 0, _v54, "SliderFilledTrack", 0, _v57, "SliderMark", 0, _v58, "SliderThumb", 0, _v55, "SliderTrack", 0, _v56, "useSliderContext", 0, _v51, "useSliderStyles", 0, _v53], 0);
  let _v59 = (0, _v2.forwardRef)(({
    markPlacement: _v0,
    ..._v1
  }, _v2) => (0, _v1.jsx)(_v54, {
    ref: _v2,
    markPlacement: _v0,
    ..._v1
  }));
  _v0.s(["Slider", 0, _v59], 0);
}