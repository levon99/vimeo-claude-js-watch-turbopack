{
  "use strict";

  var _v1 = function () {
      if ("u" > typeof Map) return Map;
      function _v0(_v0, _v1) {
        var _v2 = -1;
        return _v0.some(function (_v0, _v1) {
          return _v0[0] === _v1 && (_v2 = _v1, !0);
        }), _v2;
      }
      function _v1() {
        this.__entries__ = [];
      }
      return Object.defineProperty(_v1.prototype, "size", {
        get: function () {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), _v1.prototype.get = function (_v0) {
        var _v1 = _v0(this.__entries__, _v0),
          _v2 = this.__entries__[_v1];
        return _v2 && _v2[1];
      }, _v1.prototype.set = function (_v0, _v1) {
        var _v2 = _v0(this.__entries__, _v0);
        ~_v2 ? this.__entries__[_v2][1] = _v1 : this.__entries__.push([_v0, _v1]);
      }, _v1.prototype.delete = function (_v0) {
        var _v1 = this.__entries__,
          _v2 = _v0(_v1, _v0);
        ~_v2 && _v1.splice(_v2, 1);
      }, _v1.prototype.has = function (_v0) {
        return !!~_v0(this.__entries__, _v0);
      }, _v1.prototype.clear = function () {
        this.__entries__.splice(0);
      }, _v1.prototype.forEach = function (_v0, _v1) {
        void 0 === _v1 && (_v1 = null);
        for (var _v2 = 0, _v3 = this.__entries__; _v2 < _v3.length; _v2++) {
          var _v4 = _v3[_v2];
          _v0.call(_v1, _v4[1], _v4[0]);
        }
      }, _v1;
    }(),
    _v2 = "u" > typeof window && "u" > typeof document && window.document === document,
    _v3 = _v0.g.Math === Math ? _v0.g : "u" > typeof self && self.Math === Math ? self : "u" > typeof window && window.Math === Math ? window : Function("return this")(),
    _v4 = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(_v3) : function (_v0) {
      return setTimeout(function () {
        return _v0(Date.now());
      }, 0 / 60);
    },
    _v5 = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
    _v6 = "u" > typeof MutationObserver,
    _v7 = function () {
      function _v0() {
        this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function (_v0) {
          var _v1 = !1,
            _v2 = !1,
            _v3 = 0;
          function _v4() {
            _v1 && (_v1 = !1, _v0()), _v2 && _v6();
          }
          function _v5() {
            _v4(_v4);
          }
          function _v6() {
            var _v0 = Date.now();
            if (_v1) {
              if (_v0 - _v3 < 2) return;
              _v2 = !0;
            } else _v1 = !0, _v2 = !1, setTimeout(_v5, 20);
            _v3 = _v0;
          }
          return _v6;
        }(this.refresh.bind(this));
      }
      return _v0.prototype.addObserver = function (_v0) {
        ~this.observers_.indexOf(_v0) || this.observers_.push(_v0), this.connected_ || this.connect_();
      }, _v0.prototype.removeObserver = function (_v0) {
        var _v1 = this.observers_,
          _v2 = _v1.indexOf(_v0);
        ~_v2 && _v1.splice(_v2, 1), !_v1.length && this.connected_ && this.disconnect_();
      }, _v0.prototype.refresh = function () {
        this.updateObservers_() && this.refresh();
      }, _v0.prototype.updateObservers_ = function () {
        var _v0 = this.observers_.filter(function (_v0) {
          return _v0.gatherActive(), _v0.hasActive();
        });
        return _v0.forEach(function (_v0) {
          return _v0.broadcastActive();
        }), _v0.length > 0;
      }, _v0.prototype.connect_ = function () {
        _v2 && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), _v6 ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
          attributes: !0,
          childList: !0,
          characterData: !0,
          subtree: !0
        })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
      }, _v0.prototype.disconnect_ = function () {
        _v2 && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
      }, _v0.prototype.onTransitionEnd_ = function (_v0) {
        var _v1 = _v0.propertyName,
          _v2 = void 0 === _v1 ? "" : _v1;
        _v5.some(function (_v0) {
          return !!~_v2.indexOf(_v0);
        }) && this.refresh();
      }, _v0.getInstance = function () {
        return this.instance_ || (this.instance_ = new _v0()), this.instance_;
      }, _v0.instance_ = null, _v0;
    }(),
    _v8 = function (_v0, _v1) {
      for (var _v2 = 0, _v3 = Object.keys(_v1); _v2 < _v3.length; _v2++) {
        var _v4 = _v3[_v2];
        Object.defineProperty(_v0, _v4, {
          value: _v1[_v4],
          enumerable: !1,
          writable: !1,
          configurable: !0
        });
      }
      return _v0;
    },
    _v9 = function (_v0) {
      return _v0 && _v0.ownerDocument && _v0.ownerDocument.defaultView || _v3;
    },
    _v10 = _v14(0, 0, 0, 0);
  function _v11(_v0) {
    return parseFloat(_v0) || 0;
  }
  function _v12(_v0) {
    for (var _v1 = [], _v2 = 1; _v2 < arguments.length; _v2++) _v1[_v2 - 1] = arguments[_v2];
    return _v1.reduce(function (_v0, _v1) {
      return _v0 + _v11(_v0["border-" + _v1 + "-width"]);
    }, 0);
  }
  var _v13 = "u" > typeof SVGGraphicsElement ? function (_v0) {
    return _v0 instanceof _v9(_v0).SVGGraphicsElement;
  } : function (_v0) {
    return _v0 instanceof _v9(_v0).SVGElement && "function" == typeof _v0.getBBox;
  };
  function _v14(_v0, _v1, _v2, _v3) {
    return {
      x: _v0,
      y: _v1,
      width: _v2,
      height: _v3
    };
  }
  var _v15 = function () {
      function _v0(_v0) {
        this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = _v14(0, 0, 0, 0), this.target = _v0;
      }
      return _v0.prototype.isActive = function () {
        var _v0 = function (_v0) {
          if (!_v2) return _v10;
          if (_v13(_v0)) {
            var _v1;
            return _v14(0, 0, (_v1 = _v0.getBBox()).width, _v1.height);
          }
          return function (_v0) {
            var _v1,
              _v2 = _v0.clientWidth,
              _v3 = _v0.clientHeight;
            if (!_v2 && !_v3) return _v10;
            var _v4 = _v9(_v0).getComputedStyle(_v0),
              _v5 = function (_v0) {
                for (var _v1 = {}, _v2 = 0, _v3 = ["top", "right", "bottom", "left"]; _v2 < _v3.length; _v2++) {
                  var _v4 = _v3[_v2],
                    _v5 = _v0["padding-" + _v4];
                  _v1[_v4] = _v11(_v5);
                }
                return _v1;
              }(_v4),
              _v6 = _v5.left + _v5.right,
              _v7 = _v5.top + _v5.bottom,
              _v8 = _v11(_v4.width),
              _v9 = _v11(_v4.height);
            if ("border-box" === _v4.boxSizing && (Math.round(_v8 + _v6) !== _v2 && (_v8 -= _v12(_v4, "left", "right") + _v6), Math.round(_v9 + _v7) !== _v3 && (_v9 -= _v12(_v4, "top", "bottom") + _v7)), (_v1 = _v0) !== _v9(_v1).document.documentElement) {
              var _v10 = Math.round(_v8 + _v6) - _v2,
                _v11 = Math.round(_v9 + _v7) - _v3;
              1 !== Math.abs(_v10) && (_v8 -= _v10), 1 !== Math.abs(_v11) && (_v9 -= _v11);
            }
            return _v14(_v5.left, _v5.top, _v8, _v9);
          }(_v0);
        }(this.target);
        return this.contentRect_ = _v0, _v0.width !== this.broadcastWidth || _v0.height !== this.broadcastHeight;
      }, _v0.prototype.broadcastRect = function () {
        var _v0 = this.contentRect_;
        return this.broadcastWidth = _v0.width, this.broadcastHeight = _v0.height, _v0;
      }, _v0;
    }(),
    _v16 = function (_v0, _v1) {
      var _v2,
        _v3,
        _v4,
        _v5,
        _v6,
        _v7 = (_v2 = _v1.x, _v3 = _v1.y, _v4 = _v1.width, _v5 = _v1.height, _v8(_v6 = Object.create(("u" > typeof DOMRectReadOnly ? DOMRectReadOnly : Object).prototype), {
          x: _v2,
          y: _v3,
          width: _v4,
          height: _v5,
          top: _v3,
          right: _v2 + _v4,
          bottom: _v5 + _v3,
          left: _v2
        }), _v6);
      _v8(this, {
        target: _v0,
        contentRect: _v7
      });
    },
    _v17 = function () {
      function _v0(_v0, _v1, _v2) {
        if (this.activeObservations_ = [], this.observations_ = new _v1(), "function" != typeof _v0) throw TypeError("The callback provided as parameter 1 is not a function.");
        this.callback_ = _v0, this.controller_ = _v1, this.callbackCtx_ = _v2;
      }
      return _v0.prototype.observe = function (_v0) {
        if (!arguments.length) throw TypeError("1 argument required, but only 0 present.");
        if (!("u" < typeof Element) && Element instanceof Object) {
          if (!(_v0 instanceof _v9(_v0).Element)) throw TypeError('parameter 1 is not of type "Element".');
          var _v1 = this.observations_;
          _v1.has(_v0) || (_v1.set(_v0, new _v15(_v0)), this.controller_.addObserver(this), this.controller_.refresh());
        }
      }, _v0.prototype.unobserve = function (_v0) {
        if (!arguments.length) throw TypeError("1 argument required, but only 0 present.");
        if (!("u" < typeof Element) && Element instanceof Object) {
          if (!(_v0 instanceof _v9(_v0).Element)) throw TypeError('parameter 1 is not of type "Element".');
          var _v1 = this.observations_;
          _v1.has(_v0) && (_v1.delete(_v0), _v1.size || this.controller_.removeObserver(this));
        }
      }, _v0.prototype.disconnect = function () {
        this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
      }, _v0.prototype.gatherActive = function () {
        var _v0 = this;
        this.clearActive(), this.observations_.forEach(function (_v0) {
          _v0.isActive() && _v0.activeObservations_.push(_v0);
        });
      }, _v0.prototype.broadcastActive = function () {
        if (this.hasActive()) {
          var _v0 = this.callbackCtx_,
            _v1 = this.activeObservations_.map(function (_v0) {
              return new _v16(_v0.target, _v0.broadcastRect());
            });
          this.callback_.call(_v0, _v1, _v0), this.clearActive();
        }
      }, _v0.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
      }, _v0.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
      }, _v0;
    }(),
    _v18 = "u" > typeof WeakMap ? new WeakMap() : new _v1(),
    _v19 = function _v0(_v1) {
      if (!(this instanceof _v0)) throw TypeError("Cannot call a class as a function.");
      if (!arguments.length) throw TypeError("1 argument required, but only 0 present.");
      var _v2 = new _v17(_v1, _v7.getInstance(), this);
      _v18.set(this, _v2);
    };
  ["observe", "unobserve", "disconnect"].forEach(function (_v0) {
    _v19.prototype[_v0] = function () {
      var _v0;
      return (_v0 = _v18.get(this))[_v0].apply(_v0, arguments);
    };
  });
  var _v20 = void 0 !== _v3.ResizeObserver ? _v3.ResizeObserver : _v19;
  _v0.s(["default", 0, _v20]);
}