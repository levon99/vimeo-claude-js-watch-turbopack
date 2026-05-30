{
  "use strict";

  var _v1,
    _v2,
    _v3 = _v0.i(0);
  function _v4() {
    return (_v4 = Object.assign || function (_v0) {
      for (var _v1 = 1; _v1 < arguments.length; _v1++) {
        var _v2 = arguments[_v1];
        for (var _v3 in _v2) Object.prototype.hasOwnProperty.call(_v2, _v3) && (_v0[_v3] = _v2[_v3]);
      }
      return _v0;
    }).apply(this, arguments);
  }
  function _v5(_v0, _v1) {
    _v0.prototype = Object.create(_v1.prototype), _v0.prototype.constructor = _v0, _v0.__proto__ = _v1;
  }
  function _v6(_v0, _v1) {
    if (null == _v0) return {};
    var _v2,
      _v3,
      _v4 = {},
      _v5 = Object.keys(_v0);
    for (_v3 = 0; _v3 < _v5.length; _v3++) _v2 = _v5[_v3], _v1.indexOf(_v2) >= 0 || (_v4[_v2] = _v0[_v2]);
    return _v4;
  }
  (_v1 = _v2 || (_v2 = {})).OnStart = "start", _v1.OnChange = "change", _v1.OnEnd = "end";
  var _v7 = function () {},
    _v8 = function () {
      for (var _v0 = arguments.length, _v1 = Array(_v0), _v2 = 0; _v2 < _v0; _v2++) _v1[_v2] = arguments[_v2];
      return function () {
        for (var _v0 = arguments.length, _v1 = Array(_v0), _v2 = 0; _v2 < _v0; _v2++) _v1[_v2] = arguments[_v2];
        return _v1.forEach(function (_v0) {
          return _v0.apply(void 0, _v1);
        });
      };
    },
    _v9 = function (_v0, _v1) {
      return _v0.map(function (_v0, _v1) {
        return _v0 + _v1[_v1];
      });
    },
    _v10 = function (_v0, _v1) {
      return _v0.map(function (_v0, _v1) {
        return _v0 - _v1[_v1];
      });
    },
    _v11 = function (_v0) {
      return function (_v0, _v1, _v2) {
        var _v3 = _v0 ? "addEventListener" : "removeEventListener";
        _v1.forEach(function (_v0) {
          var _v1 = _v0[0],
            _v2 = _v0[1];
          return _v0[_v3](_v1, _v2, _v2);
        });
      };
    },
    _v12 = _v11(!0),
    _v13 = _v11(!1);
  function _v14(_v0) {
    return {
      shiftKey: _v0.shiftKey,
      altKey: _v0.altKey,
      metaKey: _v0.metaKey,
      ctrlKey: _v0.ctrlKey
    };
  }
  function _v15(_v0) {
    var _v1 = _v0.deltaX,
      _v2 = _v0.deltaY;
    return _v4({
      xy: [_v1, _v2]
    }, _v14(_v0));
  }
  function _v16(_v0) {
    var _v1 = _v0.touches,
      _v2 = _v0.buttons,
      _v3 = _v0.changedTouches,
      _v4 = _v1 && _v1.length > 0 ? _v1 : _v3 && _v3.length > 0 ? _v3 : null,
      _v5 = _v4 ? _v4[0] : _v0,
      _v6 = _v5.clientX,
      _v7 = _v5.clientY,
      _v8 = _v4 && _v4.length > 0 || _v2 > 0;
    return _v4({
      xy: [_v6, _v7],
      touches: _v4 && _v4.length || 0,
      down: _v8,
      buttons: _v2
    }, _v14(_v0));
  }
  function _v17(_v0) {
    var _v1 = _v0.touches,
      _v2 = _v1[1].clientX - _v1[0].clientX,
      _v3 = _v1[1].clientY - _v1[0].clientY,
      _v4 = [Math.hypot(_v2, _v3), -(180 * Math.atan2(_v2, _v3)) / Math.PI],
      _v5 = [(_v1[1].clientX + _v1[0].clientX) / 2, (_v1[1].clientY + _v1[0].clientY) / 2];
    return _v4({
      da: _v4,
      origin: _v5,
      touches: 2,
      down: _v1.length > 0
    }, _v14(_v0));
  }
  function _v18(_v0, _v1) {
    return _v1 ? _v0.map(function (_v0) {
      return _v0 / _v1;
    }) : Array(_v0.length).fill(0);
  }
  function _v19(_v0, _v1) {
    return _v1 = _v1 || Math.hypot.apply(Math, _v0) || 1, _v0.map(function (_v0) {
      return _v0 / _v1;
    });
  }
  function _v20(_v0, _v1, _v2) {
    var _v3,
      _v4 = Math.hypot.apply(Math, _v1);
    return {
      velocities: _v18(_v1, _v2),
      velocity: (_v3 = (_v3 = _v4) || Math.hypot.apply(Math, _v1), _v2 ? _v3 / _v2 : 0),
      distance: Math.hypot.apply(Math, _v0),
      direction: _v19(_v1, _v4)
    };
  }
  var _v21 = {
      drag: {
        stateKey: "drag",
        handlerKey: "onDrag"
      },
      pinch: {
        stateKey: "pinch",
        handlerKey: "onPinch"
      },
      move: {
        stateKey: "move",
        handlerKey: "onMove"
      },
      scroll: {
        stateKey: "scroll",
        handlerKey: "onScroll"
      },
      wheel: {
        stateKey: "wheel",
        handlerKey: "onWheel"
      },
      hover: {
        stateKey: "move",
        handlerKey: "onHover"
      }
    },
    _v22 = {
      domTarget: void 0,
      event: {
        passive: !0,
        capture: !1
      },
      window: "u" > typeof window ? window : void 0,
      dragDelay: !1,
      passiveEvents: !0,
      pointerEvents: !1,
      enabled: !0,
      drag: !0,
      pinch: !0,
      scroll: !0,
      wheel: !0,
      hover: !0,
      move: !0
    },
    _v23 = {
      event: void 0,
      currentTarget: void 0,
      pointerId: void 0,
      values: [0, 0],
      delta: [0, 0],
      movement: [0, 0],
      offset: [0, 0],
      direction: [0, 0],
      initial: [0, 0],
      previous: [0, 0],
      first: !1,
      last: !1,
      active: !1,
      time: void 0,
      cancel: _v7,
      canceled: !1,
      memo: void 0,
      args: void 0
    },
    _v24 = {
      xy: [0, 0],
      vxvy: [0, 0],
      velocity: 0,
      distance: 0
    },
    _v25 = {
      shared: {
        hovering: !1,
        scrolling: !1,
        wheeling: !1,
        dragging: !1,
        moving: !1,
        pinching: !1,
        touches: 0,
        buttons: 0,
        down: !1,
        shiftKey: !1,
        altKey: !1,
        metaKey: !1,
        ctrlKey: !1
      },
      move: _v4({}, _v23, {}, _v24),
      drag: _v4({}, _v23, {}, _v24),
      scroll: _v4({}, _v23, {}, _v24),
      wheel: _v4({}, _v23, {}, _v24),
      pinch: _v4({}, _v23, {}, {
        da: [0, 0],
        vdva: [0, 0],
        origin: void 0,
        turns: 0
      })
    },
    _v26 = {
      first: !1,
      last: !0,
      active: !1
    },
    _v27 = function () {
      var _v0;
      function _v1(_v0, _v1, _v2) {
        var _v3 = this;
        void 0 === _v2 && (_v2 = []), this.gestureKey = _v0, this.controller = _v1, this.args = _v2, this.continuousGesture = !1, this.setTimeout = function (_v0, _v1) {
          var _v2;
          void 0 === _v1 && (_v1 = 140);
          for (var _v3 = arguments.length, _v4 = Array(_v3 > 2 ? _v3 - 2 : 0), _v5 = 2; _v5 < _v3; _v5++) _v4[_v5 - 2] = arguments[_v5];
          _v3.controller.timeouts[_v3.stateKey] = (_v2 = window).setTimeout.apply(_v2, [_v0, _v1].concat(_v4));
        }, this.clearTimeout = function () {
          clearTimeout(_v3.controller.timeouts[_v3.stateKey]);
        }, this.addWindowListeners = function (_v0) {
          _v3.controller.addWindowListeners(_v3.stateKey, _v0);
        }, this.removeWindowListeners = function () {
          _v3.controller.removeWindowListeners(_v3.stateKey);
        }, this.updateState = function (_v0, _v1) {
          _v3.controller.updateState(_v0, _v1, _v3.stateKey);
        }, this.fireGestureHandler = function (_v0) {
          _v3.controller.fireGestureHandler(_v3.gestureKey, _v0);
        }, this.onStart = function (_v0, _v1) {
          var _v2 = _v3.getPayloadFromEvent(_v0),
            _v3 = _v2.values,
            _v4 = _v2.gesturePayload,
            _v5 = _v2.sharedPayload,
            _v6 = _v4({}, _v25[_v3.stateKey], {
              values: _v3,
              event: _v0,
              first: !0,
              active: !0,
              time: _v0.timeStamp,
              args: _v3.args
            }),
            _v7 = _v3.state,
            _v8 = _v7.values,
            _v9 = _v7.offset;
          _v3.continuousGesture ? (_v6.initial = _v8, _v6.delta = _v6.movement = _v10(_v3, _v8), _v6.offset = _v3, Object.assign(_v6, _v20(_v6.movement, _v6.delta, 0))) : (_v6.initial = _v3, _v6.offset = _v9), _v3.updateState(_v4({}, _v3.sharedStartState, {}, _v5), _v4({}, _v6, {}, _v4, {}, _v1)), _v3.fireGestureHandler(_v2.OnStart);
        }, this.onChange = function (_v0, _v1) {
          var _v2 = _v3.getPayloadFromEvent(_v0),
            _v3 = _v2.values,
            _v4 = _v2.gesturePayload,
            _v5 = _v2.sharedPayload,
            _v6 = _v3.getKinematics(_v3, _v0);
          _v3.updateState(_v4({}, _v5), _v4({
            first: !1
          }, _v6, {}, _v4, {}, _v1)), _v3.fireGestureHandler(_v2.OnChange);
        }, this.onEnd = function (_v0, _v1) {
          _v3.state.active && (_v3.removeWindowListeners(), _v3.updateState(_v3.sharedEndState, _v4({
            event: _v0
          }, _v26, {}, _v1)), _v3.fireGestureHandler(_v2.OnEnd));
        }, this.onCancel = function (_v0) {
          _v3.updateState(null, {
            canceled: !0,
            cancel: _v7
          }), requestAnimationFrame(function () {
            return _v3.onEnd(_v0);
          });
        }, this.timeoutHandler = function (_v0) {
          _v3.enabled && (_v3.clearTimeout(), _v3.setTimeout(_v3.onEnd), _v3.state.active ? _v3.onChange(_v0) : _v3.onStart(_v0));
        }, this.stateKey = _v21[_v0].stateKey;
      }
      return _v0 = [{
        key: "enabled",
        get: function () {
          return this.controller.config.enabled && this.controller.config[this.gestureKey];
        }
      }, {
        key: "state",
        get: function () {
          return this.controller.state[this.stateKey];
        }
      }], function (_v0, _v1) {
        for (var _v2 = 0; _v2 < _v1.length; _v2++) {
          var _v3 = _v1[_v2];
          _v3.enumerable = _v3.enumerable || !1, _v3.configurable = !0, "value" in _v3 && (_v3.writable = !0), Object.defineProperty(_v0, _v3.key, _v3);
        }
      }(_v1.prototype, _v0), _v1;
    }(),
    _v28 = function (_v0) {
      function _v1() {
        return _v0.apply(this, arguments) || this;
      }
      return _v5(_v1, _v0), _v1.prototype.getKinematics = function (_v0, _v1) {
        var _v2 = this.state,
          _v3 = _v2.values,
          _v4 = _v2.initial,
          _v5 = _v2.offset,
          _v6 = _v2.time,
          _v7 = _v10(_v0, _v4),
          _v8 = _v10(_v0, _v3),
          _v9 = _v20(_v7, _v8, _v1.timeStamp - _v6),
          _v10 = _v9.velocity,
          _v11 = _v9.velocities,
          _v12 = _v9.distance,
          _v13 = _v9.direction;
        return {
          event: _v1,
          values: _v0,
          movement: _v7,
          offset: _v9(_v5, _v8),
          delta: _v8,
          velocity: _v10,
          vxvy: _v11,
          distance: _v12,
          direction: _v13,
          previous: _v3,
          time: _v1.timeStamp
        };
      }, _v1;
    }(_v27),
    _v29 = function (_v0) {
      function _v1(_v0, _v1) {
        var _v2;
        return (_v2 = _v0.call(this, "drag", _v0, _v1) || this).sharedStartState = {
          dragging: !0,
          down: !0
        }, _v2.sharedEndState = {
          dragging: !1,
          down: !1,
          buttons: 0,
          touches: 0
        }, _v2.delayedEvent = !1, _v2.onDragStart = function (_v0) {
          if (_v2.enabled && !(_v16(_v0).touches > 1)) {
            var _v1 = _v0.currentTarget,
              _v2 = _v0.pointerId;
            if (_v2.controller.config.pointerEvents) _v1 && _v1.setPointerCapture(_v2);else {
              _v2.removeWindowListeners();
              var _v3 = [["mousemove", _v2.onDragChange], ["touchmove", _v2.onDragChange], ["mouseup", _v2.onDragEnd], ["touchend", _v2.onDragEnd], ["touchcancel", _v2.onDragEnd]];
              _v2.addWindowListeners(_v3);
            }
            if (_v2.controller.config.dragDelay) {
              var _v4 = "number" == typeof _v2.controller.config.dragDelay ? _v2.controller.config.dragDelay : 180;
              "function" == typeof _v0.persist && _v0.persist(), _v2.delayedEvent = !0, _v2.setTimeout(function () {
                return _v2.startDrag(_v0);
              }, _v4);
            } else _v2.startDrag(_v0);
          }
        }, _v2.startDrag = function (_v0) {
          var _v1 = _v0.currentTarget,
            _v2 = _v0.pointerId;
          _v2.onStart(_v0, {
            currentTarget: _v1,
            pointerId: _v2,
            cancel: function () {
              return _v2.onCancel(_v0);
            }
          }), _v2.delayedEvent = !1;
        }, _v2.onDragChange = function (_v0) {
          var _v1 = _v2.state,
            _v2 = _v1.canceled,
            _v3 = _v1.active;
          if (!_v2) {
            if (!_v3) {
              _v2.delayedEvent && (_v2.clearTimeout(), _v2.startDrag(_v0));
              return;
            }
            var _v4 = _v16(_v0),
              _v5 = _v4.buttons,
              _v6 = _v4.touches;
            if (0 === _v5 && 0 === _v6) return void _v2.onEnd(_v0);
            _v2.onChange(_v0, {
              cancel: function () {
                return _v2.onCancel(_v0);
              }
            });
          }
        }, _v2.onDragEnd = function (_v0) {
          if (_v2.clearTimeout(), _v2.delayedEvent = !1, _v2.state.active) {
            var _v1 = _v2.state,
              _v2 = _v1.currentTarget,
              _v3 = _v1.pointerId;
            _v2 && _v2.controller.config.pointerEvents && _v2.releasePointerCapture(_v3), _v2.onEnd(_v0);
          }
        }, _v2;
      }
      _v5(_v1, _v0);
      var _v2 = _v1.prototype;
      return _v2.getPayloadFromEvent = function (_v0) {
        var _v1 = _v16(_v0);
        return {
          values: _v1.xy,
          sharedPayload: _v6(_v1, ["xy"])
        };
      }, _v2.getEventBindings = function () {
        return this.controller.config.pointerEvents ? [["onPointerDown", this.onDragStart], ["onPointerMove", this.onDragChange], [["onPointerUp"], this.onDragEnd]] : [[["onMouseDown", "onTouchStart"], this.onDragStart]];
      }, _v1;
    }(_v28),
    _v30 = function (_v0) {
      function _v1(_v0, _v1) {
        var _v2;
        return (_v2 = _v0.call(this, "scroll", _v0, _v1) || this).sharedStartState = {
          scrolling: !0
        }, _v2.sharedEndState = {
          scrolling: !1,
          velocity: 0,
          vxvy: [0, 0]
        }, _v2.continuousGesture = !0, _v2;
      }
      _v5(_v1, _v0);
      var _v2 = _v1.prototype;
      return _v2.getPayloadFromEvent = function (_v0) {
        var _v1,
          _v2,
          _v3,
          _v4,
          _v5,
          _v6 = (_v2 = (_v1 = _v0.currentTarget).scrollX, _v3 = _v1.scrollY, _v4 = _v1.scrollLeft, _v5 = _v1.scrollTop, _v4({
            xy: [_v2 || _v4 || 0, _v3 || _v5 || 0]
          }, _v14(_v0)));
        return {
          values: _v6.xy,
          sharedPayload: _v6(_v6, ["xy"])
        };
      }, _v2.getEventBindings = function () {
        return [["onScroll", this.timeoutHandler]];
      }, _v1;
    }(_v28),
    _v31 = function (_v0) {
      function _v1(_v0, _v1) {
        var _v2;
        return (_v2 = _v0.call(this, "wheel", _v0, _v1) || this).sharedStartState = {
          wheeling: !0
        }, _v2.sharedEndState = {
          wheeling: !1,
          velocity: 0,
          vxvy: [0, 0]
        }, _v2.continuousGesture = !0, _v2.onWheel = function (_v0) {
          _v0.ctrlKey && _v2.controller.actions.has("onPinch") || _v2.timeoutHandler(_v0);
        }, _v2;
      }
      _v5(_v1, _v0);
      var _v2 = _v1.prototype;
      return _v2.getPayloadFromEvent = function (_v0) {
        var _v1 = this.state.xy,
          _v2 = _v15(_v0),
          _v3 = _v2.xy,
          _v4 = _v6(_v2, ["xy"]);
        return {
          values: _v9(_v3, _v1),
          sharedPayload: _v4
        };
      }, _v2.getEventBindings = function () {
        return [["onWheel", this.onWheel]];
      }, _v1;
    }(_v28),
    _v32 = function (_v0) {
      function _v1(_v0, _v1) {
        var _v2;
        return (_v2 = _v0.call(this, "move", _v0, _v1) || this).sharedStartState = {
          moving: !0
        }, _v2.sharedEndState = {
          moving: !1,
          velocity: 0,
          vxvy: [0, 0]
        }, _v2;
      }
      _v5(_v1, _v0);
      var _v2 = _v1.prototype;
      return _v2.getPayloadFromEvent = function (_v0) {
        var _v1 = _v16(_v0);
        return {
          values: _v1.xy,
          sharedPayload: _v6(_v1, ["xy"])
        };
      }, _v2.getEventBindings = function () {
        return this.controller.config.pointerEvents ? [["onPointerMove", this.timeoutHandler]] : [["onMouseMove", this.timeoutHandler]];
      }, _v1;
    }(_v28),
    _v33 = function (_v0) {
      function _v1(_v0, _v1) {
        var _v2;
        return (_v2 = _v0.call(this, "hover", _v0, _v1) || this).onPointerEnter = function (_v0) {
          if (_v2.enabled) {
            var _v1 = _v2.getPayloadFromEvent(_v0),
              _v2 = _v1.values,
              _v3 = _v1.sharedPayload;
            _v2.updateState(_v4({
              hovering: !0
            }, _v3), {
              values: _v2,
              event: _v0,
              args: _v2.args
            }), _v2.fireGestureHandler(_v2.OnChange);
          }
        }, _v2.onPointerLeave = function (_v0) {
          if (_v2.enabled) {
            var _v1 = _v2.getPayloadFromEvent(_v0),
              _v2 = _v1.values,
              _v3 = _v1.sharedPayload,
              _v4 = _v2.getKinematics(_v2, _v0);
            _v2.updateState(_v4({
              hovering: !1,
              moving: !1
            }, _v3), _v4({}, _v4, {}, _v26, {
              velocity: 0,
              vxvy: [0, 0]
            })), _v2.controller.fireGestureHandler("move", _v2.OnEnd), _v2.controller.fireGestureHandler("hover", _v2.OnChange);
          }
        }, _v2;
      }
      _v5(_v1, _v0);
      var _v2 = _v1.prototype;
      return _v2.getPayloadFromEvent = function (_v0) {
        var _v1 = _v16(_v0);
        return {
          values: _v1.xy,
          sharedPayload: _v6(_v1, ["xy"])
        };
      }, _v2.getEventBindings = function () {
        return this.controller.config.pointerEvents ? [["onPointerEnter", this.onPointerEnter], ["onPointerLeave", this.onEnd]] : [["onMouseEnter", this.onPointerEnter], ["onMouseLeave", this.onPointerLeave]];
      }, _v1;
    }(_v28),
    _v34 = function (_v0) {
      function _v1(_v0, _v1, _v2) {
        return void 0 === _v2 && (_v2 = []), _v0.call(this, _v0, _v1, _v2) || this;
      }
      return _v5(_v1, _v0), _v1.prototype.getKinematics = function (_v0, _v1) {
        var _v2 = _v0[0],
          _v3 = _v0[1],
          _v4 = this.state,
          _v5 = _v4.values,
          _v6 = _v4.turns,
          _v7 = _v4.initial,
          _v8 = _v4.offset,
          _v9 = _v4.time;
        _v3 = void 0 !== _v3 ? _v3 : _v5[1];
        var _v10 = _v2 - _v5[0],
          _v11 = _v3 - _v5[1],
          _v12 = Math.abs(_v11) > 270 ? _v6 + Math.sign(_v11) : _v6,
          _v13 = [_v10, _v11 -= 360 * (_v12 - _v6)],
          _v14 = _v2 - _v7[0],
          _v15 = _v3 - 360 * _v12 - _v7[1],
          _v16 = _v18(_v13, _v1.timeStamp - _v9),
          _v17 = _v19(_v13);
        return {
          event: _v1,
          values: [_v2, _v3],
          movement: [_v14, _v15],
          delta: _v13,
          offset: _v9(_v8, _v13),
          vdva: _v16,
          direction: _v17,
          turns: _v12,
          previous: _v5,
          time: _v1.timeStamp
        };
      }, _v1;
    }(_v27),
    _v35 = function (_v0) {
      function _v1(_v0, _v1) {
        var _v2;
        return (_v2 = _v0.call(this, "pinch", _v0, _v1) || this).sharedStartState = {
          pinching: !0
        }, _v2.sharedEndState = {
          pinching: !1,
          down: !1,
          touches: 0
        }, _v2.onPinchStart = function (_v0) {
          _v2.enabled && 2 === _v0.touches.length && _v2.onStart(_v0, {
            cancel: function () {
              return _v2.onCancel(_v0);
            }
          });
        }, _v2.onPinchChange = function (_v0) {
          var _v1 = _v2.state,
            _v2 = _v1.canceled,
            _v3 = _v1.active,
            _v4 = _v1.time;
          !_v2 && _v3 && 2 === _v0.touches.length && _v0.timeStamp !== _v4 && _v2.onChange(_v0, {
            cancel: function () {
              return _v2.onCancel(_v0);
            }
          });
        }, _v2;
      }
      _v5(_v1, _v0);
      var _v2 = _v1.prototype;
      return _v2.getPayloadFromEvent = function (_v0) {
        var _v1 = _v17(_v0);
        return {
          values: _v1.da,
          gesturePayload: {
            origin: _v1.origin
          },
          sharedPayload: _v6(_v1, ["da", "origin"])
        };
      }, _v2.getEventBindings = function () {
        return [["onTouchStart", this.onPinchStart], ["onTouchMove", this.onPinchChange], [["onTouchEnd", "onTouchCancel"], this.onEnd]];
      }, _v1;
    }(_v34),
    _v36 = function (_v0) {
      function _v1(_v0, _v1) {
        var _v2;
        return (_v2 = _v0.call(this, "pinch", _v0, _v1) || this).sharedStartState = {
          pinching: !0
        }, _v2.sharedEndState = {
          pinching: !1
        }, _v2.onWheel = function (_v0) {
          _v0.ctrlKey && (_v2.controller.config.passiveEvents || _v0.preventDefault(), _v2.timeoutHandler(_v0));
        }, _v2;
      }
      _v5(_v1, _v0);
      var _v2 = _v1.prototype;
      return _v2.getPayloadFromEvent = function (_v0) {
        var _v1 = _v15(_v0),
          _v2 = _v1.xy[1],
          _v3 = _v6(_v1, ["xy"]),
          _v4 = this.state.da,
          _v5 = _v4[0],
          _v6 = _v4[1];
        return {
          values: [_v5 - _v2, void 0 !== _v6 ? _v6 : 0],
          gesturePayload: {
            origin: [_v0.clientX, _v0.clientY]
          },
          sharedPayload: _v3
        };
      }, _v2.getEventBindings = function () {
        return [["onWheel", this.onWheel]];
      }, _v1;
    }(_v34),
    _v37 = function (_v0) {
      function _v1(_v0, _v1) {
        var _v2;
        return (_v2 = _v0.call(this, "pinch", _v0, _v1) || this).sharedStartState = {
          pinching: !0,
          down: !0,
          touches: 2
        }, _v2.sharedEndState = {
          pinching: !1,
          down: !1,
          touches: 0
        }, _v2.onPinchStart = function (_v0) {
          if (_v2.enabled) {
            _v0.preventDefault();
            var _v1 = _v2.origin ? _v2.origin : [_v0.clientX, _v0.clientY];
            _v2.onStart(_v0, {
              origin: _v1,
              cancel: function () {
                return _v2.onCancel(_v0);
              }
            });
          }
        }, _v2.onPinchChange = function (_v0) {
          var _v1 = _v2.state,
            _v2 = _v1.canceled,
            _v3 = _v1.active;
          !_v2 && _v3 && (_v0.preventDefault(), _v2.onChange(_v0, {
            cancel: function () {
              return _v2.onCancel(_v0);
            }
          }));
        }, _v2.onGestureEnd = function (_v0) {
          _v2.onEnd(_v0), _v0.preventDefault(), _v2.origin = void 0;
        }, _v2.updateTouchData = function (_v0) {
          _v2.enabled && 2 === _v0.touches.length && (_v2.origin = _v17(_v0).origin);
        }, _v2;
      }
      _v5(_v1, _v0);
      var _v2 = _v1.prototype;
      return _v2.getPayloadFromEvent = function (_v0) {
        return {
          values: [260 * _v0.scale, _v0.rotation]
        };
      }, _v2.getEventBindings = function () {
        return [["onGestureStart", this.onPinchStart], ["onGestureChange", this.onPinchChange], [["onGestureEnd", "onTouchCancel"], this.onGestureEnd], [["onTouchStart", "onTouchMove"], this.updateTouchData]];
      }, _v1;
    }(_v34),
    _v38 = function (_v0, _v1) {
      var _v2 = this;
      this.handlers = _v0, this.config = _v1, this.state = _v25, this.timeouts = {}, this.bindings = {}, this.domListeners = [], this.windowListeners = {}, this.clean = function () {
        _v2.cleanOnBind(), Object.values(_v2.timeouts).forEach(clearTimeout), Object.keys(_v2.windowListeners).forEach(function (_v0) {
          return _v2.removeWindowListeners(_v0);
        });
      }, this.cleanOnBind = function () {
        _v2.bindings = {};
        var _v0 = _v2.config.domTarget;
        _v0 && (_v13(_v0, _v2.domListeners, _v2.config.event), _v2.domListeners = []);
      }, this.updateState = function (_v0, _v1, _v2) {
        var _v3,
          _v4 = _v4({}, _v2.state[_v2], {}, _v1);
        "da" in _v4 ? _v4.da = _v4.values : "xy" in _v4 && (_v4.xy = _v4.values), _v2.state = _v4({}, _v2.state, ((_v3 = {
          shared: _v4({}, _v2.state.shared, {}, _v0)
        })[_v2] = _v4, _v3));
      }, this.fireGestureHandler = function (_v0, _v1) {
        var _v2 = _v21[_v0],
          _v3 = _v2.stateKey,
          _v4 = _v2.handlerKey,
          _v5 = _v4({}, _v2.state.shared, {}, _v2.state[_v3]);
        if (_v5.event && (_v5.event.gesture = _v0), _v1 === _v2.OnStart) {
          var _v6 = _v2.handlers[_v4 + "Start"];
          _v6 && _v6(_v5);
        }
        var _v7 = _v2.handlers[_v4];
        if (_v7) {
          var _v8 = _v7(_v5);
          _v2.state[_v3].memo = void 0 !== _v8 ? _v8 : _v2.state[_v3].memo;
        }
        if (_v1 === _v2.OnEnd) {
          var _v9 = _v2.handlers[_v4 + "End"];
          _v9 && _v9(_v5);
        }
      }, this.addWindowListeners = function (_v0, _v1) {
        _v2.config.window && (_v2.windowListeners[_v0] = _v1, _v12(_v2.config.window, _v1, _v2.config.event));
      }, this.removeWindowListeners = function (_v0) {
        if (_v2.config.window) {
          var _v1 = _v2.windowListeners[_v0];
          _v1 && (_v13(_v2.config.window, _v1, _v2.config.event), delete _v2.windowListeners[_v0]);
        }
      }, this.addRecognizer = function (_v0) {
        _v0.getEventBindings().map(_v2.addEventBindings);
      }, this.addEventBindings = function (_v0) {
        var _v1 = _v0[0],
          _v2 = _v0[1];
        (Array.isArray(_v1) ? _v1 : [_v1]).forEach(function (_v0) {
          _v2.bindings[_v0] = _v2.bindings[_v0] ? [].concat(_v2.bindings[_v0], [_v2]) : [_v2];
        });
      }, this.addDomTargetListeners = function () {
        var _v0 = _v2.config.domTarget;
        Object.entries(_v2.bindings).forEach(function (_v0) {
          var _v1 = _v0[0],
            _v2 = _v0[1];
          _v2.domListeners.push([_v1.substr(2).toLowerCase(), _v8.apply(void 0, _v2)]);
        }), _v12(_v0, _v2.domListeners, _v2.config.event);
      }, this.getBindings = function () {
        var _v0 = {},
          _v1 = _v2.config.event.capture ? "Capture" : "";
        return Object.entries(_v2.bindings).forEach(function (_v0) {
          var _v1 = _v0[0],
            _v2 = _v0[1],
            _v3 = Array.isArray(_v2) ? _v2 : [_v2];
          _v0[_v1 + _v1] = _v8.apply(void 0, _v3);
        }), _v0;
      }, this.bind = function () {
        var _v0 = _v2.config.domTarget,
          _v1 = _v4({}, _v2.handlers);
        _v2.cleanOnBind();
        for (var _v2 = arguments.length, _v3 = Array(_v2), _v4 = 0; _v4 < _v2; _v4++) _v3[_v4] = arguments[_v4];
        return (_v2.actions.has("onDrag") && (_v2.addRecognizer(new _v29(_v2, _v3)), delete _v1.onDrag, delete _v1.onDragStart, delete _v1.onDragEnd), _v2.actions.has("onScroll") && (_v2.addRecognizer(new _v30(_v2, _v3)), delete _v1.onScroll, delete _v1.onScrollStart, delete _v1.onScrollEnd), _v2.actions.has("onWheel") && (_v2.addRecognizer(new _v31(_v2, _v3)), delete _v1.onWheel, delete _v1.onWheelStart, delete _v1.onWheelEnd), _v2.actions.has("onMove") && (_v2.addRecognizer(new _v32(_v2, _v3)), delete _v1.onMove, delete _v1.onMoveStart, delete _v1.onMoveEnd), _v2.actions.has("onHover") && (_v2.addRecognizer(new _v33(_v2, _v3)), delete _v1.onHover), _v2.actions.has("onPinch") && (_v0 && function () {
          try {
            return "constructor" in GestureEvent;
          } catch (_v0) {
            return !1;
          }
        }() ? _v2.addRecognizer(new _v37(_v2, _v3)) : (_v2.addRecognizer(new _v35(_v2, _v3)), _v2.addRecognizer(new _v36(_v2, _v3))), delete _v1.onPinch, delete _v1.onPinchStart, delete _v1.onPinchEnd), Object.entries(_v1).map(function (_v0) {
          var _v1 = _v0[0],
            _v2 = _v0[1];
          _v2.addEventBindings([_v1, _v2]);
        }), _v0) ? (_v2.addDomTargetListeners(), _v2.clean) : _v2.getBindings();
      }, this.actions = new Set(Object.keys(this.handlers).map(function (_v0) {
        return _v0.replace(/End|Start/, "");
      }));
    };
  function _v39(_v0, _v1) {
    var _v2 = _v3.default.useRef();
    return _v2.current || (_v2.current = new _v38(_v0, _v40(_v1))), _v3.default.useEffect(function () {
      _v2.current.config = _v40(_v1), _v2.current.handlers = _v0;
    }, [_v0, _v1]), _v3.default.useEffect(function () {
      return _v2.current.clean;
    }, []), _v2.current.bind;
  }
  function _v40(_v0) {
    var _v1 = _v4({}, _v22, {}, _v0),
      _v2 = _v1.domTarget;
    _v1.domTarget = _v2 && "current" in _v2 ? _v2.current : _v2;
    var _v3 = void 0 === _v1.event.passive || _v1.event.passive;
    return _v1.passiveEvents = !_v1.domTarget || _v3, _v1;
  }
  _v0.s(["addV", 0, _v9, "useDrag", 0, function (_v0, _v1) {
    return _v39({
      onDrag: _v0
    }, _v1);
  }, "useGesture", 0, _v39]);
}