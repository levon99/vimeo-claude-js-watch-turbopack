{
  var _v3 = function (_v0) {
    "use strict";

    var _v1,
      _v2 = Object.prototype,
      _v3 = _v2.hasOwnProperty,
      _v4 = Object.defineProperty || function (_v0, _v1, _v2) {
        _v0[_v1] = _v2.value;
      },
      _v5 = "function" == typeof Symbol ? Symbol : {},
      _v6 = _v5.iterator || "@@iterator",
      _v7 = _v5.asyncIterator || "@@asyncIterator",
      _v8 = _v5.toStringTag || "@@toStringTag";
    function _v9(_v0, _v1, _v2) {
      return Object.defineProperty(_v0, _v1, {
        value: _v2,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), _v0[_v1];
    }
    try {
      _v9({}, "");
    } catch (_v0) {
      _v9 = function (_v0, _v1, _v2) {
        return _v0[_v1] = _v2;
      };
    }
    function _v10(_v0, _v1, _v2, _v3) {
      var _v4,
        _v5,
        _v6,
        _v7,
        _v8 = Object.create((_v1 && _v1.prototype instanceof _v16 ? _v1 : _v16).prototype);
      return _v4(_v8, "_invoke", {
        value: (_v4 = _v0, _v5 = _v2, _v6 = new _v27(_v3 || []), _v7 = _v12, function (_v0, _v1) {
          if (_v7 === _v13) throw Error("Generator is already running");
          if (_v7 === _v14) {
            if ("throw" === _v0) throw _v1;
            return _v29();
          }
          for (_v6.method = _v0, _v6.arg = _v1;;) {
            var _v2 = _v6.delegate;
            if (_v2) {
              var _v3 = function _v0(_v1, _v2) {
                var _v3 = _v2.method,
                  _v4 = _v1.iterator[_v3];
                if (_v1 === _v4) return (_v2.delegate = null, "throw" === _v3 && _v1.iterator.return && (_v2.method = "return", _v2.arg = _v1, _v0(_v1, _v2), "throw" === _v2.method)) ? _v15 : ("return" !== _v3 && (_v2.method = "throw", _v2.arg = TypeError("The iterator does not provide a '" + _v3 + "' method")), _v15);
                var _v5 = _v11(_v4, _v1.iterator, _v2.arg);
                if ("throw" === _v5.type) return _v2.method = "throw", _v2.arg = _v5.arg, _v2.delegate = null, _v15;
                var _v6 = _v5.arg;
                return _v6 ? _v6.done ? (_v2[_v1.resultName] = _v6.value, _v2.next = _v1.nextLoc, "return" !== _v2.method && (_v2.method = "next", _v2.arg = _v1), _v2.delegate = null, _v15) : _v6 : (_v2.method = "throw", _v2.arg = TypeError("iterator result is not an object"), _v2.delegate = null, _v15);
              }(_v2, _v6);
              if (_v3) {
                if (_v3 === _v15) continue;
                return _v3;
              }
            }
            if ("next" === _v6.method) _v6.sent = _v6._sent = _v6.arg;else if ("throw" === _v6.method) {
              if (_v7 === _v12) throw _v7 = _v14, _v6.arg;
              _v6.dispatchException(_v6.arg);
            } else "return" === _v6.method && _v6.abrupt("return", _v6.arg);
            _v7 = _v13;
            var _v4 = _v11(_v4, _v5, _v6);
            if ("normal" === _v4.type) {
              if (_v7 = _v6.done ? _v14 : "suspendedYield", _v4.arg === _v15) continue;
              return {
                value: _v4.arg,
                done: _v6.done
              };
            }
            "throw" === _v4.type && (_v7 = _v14, _v6.method = "throw", _v6.arg = _v4.arg);
          }
        })
      }), _v8;
    }
    function _v11(_v0, _v1, _v2) {
      try {
        return {
          type: "normal",
          arg: _v0.call(_v1, _v2)
        };
      } catch (_v0) {
        return {
          type: "throw",
          arg: _v0
        };
      }
    }
    _v0.wrap = _v10;
    var _v12 = "suspendedStart",
      _v13 = "executing",
      _v14 = "completed",
      _v15 = {};
    function _v16() {}
    function _v17() {}
    function _v18() {}
    var _v19 = {};
    _v9(_v19, _v6, function () {
      return this;
    });
    var _v20 = Object.getPrototypeOf,
      _v21 = _v20 && _v20(_v20(_v28([])));
    _v21 && _v21 !== _v2 && _v3.call(_v21, _v6) && (_v19 = _v21);
    var _v22 = _v18.prototype = _v16.prototype = Object.create(_v19);
    function _v23(_v0) {
      ["next", "throw", "return"].forEach(function (_v0) {
        _v9(_v0, _v0, function (_v0) {
          return this._invoke(_v0, _v0);
        });
      });
    }
    function _v24(_v0, _v1) {
      var _v2;
      _v4(this, "_invoke", {
        value: function (_v0, _v1) {
          function _v2() {
            return new _v1(function (_v0, _v1) {
              !function _v0(_v1, _v2, _v3, _v4) {
                var _v5 = _v11(_v0[_v1], _v0, _v2);
                if ("throw" === _v5.type) _v4(_v5.arg);else {
                  var _v6 = _v5.arg,
                    _v7 = _v6.value;
                  return _v7 && "object" == typeof _v7 && _v3.call(_v7, "__await") ? _v1.resolve(_v7.__await).then(function (_v0) {
                    _v0("next", _v0, _v3, _v4);
                  }, function (_v0) {
                    _v0("throw", _v0, _v3, _v4);
                  }) : _v1.resolve(_v7).then(function (_v0) {
                    _v6.value = _v0, _v3(_v6);
                  }, function (_v0) {
                    return _v0("throw", _v0, _v3, _v4);
                  });
                }
              }(_v0, _v1, _v0, _v1);
            });
          }
          return _v2 = _v2 ? _v2.then(_v2, _v2) : _v2();
        }
      });
    }
    function _v25(_v0) {
      var _v1 = {
        tryLoc: _v0[0]
      };
      1 in _v0 && (_v1.catchLoc = _v0[1]), 2 in _v0 && (_v1.finallyLoc = _v0[2], _v1.afterLoc = _v0[3]), this.tryEntries.push(_v1);
    }
    function _v26(_v0) {
      var _v1 = _v0.completion || {};
      _v1.type = "normal", delete _v1.arg, _v0.completion = _v1;
    }
    function _v27(_v0) {
      this.tryEntries = [{
        tryLoc: "root"
      }], _v0.forEach(_v25, this), this.reset(!0);
    }
    function _v28(_v0) {
      if (_v0) {
        var _v1 = _v0[_v6];
        if (_v1) return _v1.call(_v0);
        if ("function" == typeof _v0.next) return _v0;
        if (!isNaN(_v0.length)) {
          var _v2 = -1,
            _v3 = function _v0() {
              for (; ++_v2 < _v0.length;) if (_v3.call(_v0, _v2)) return _v0.value = _v0[_v2], _v0.done = !1, _v0;
              return _v0.value = _v1, _v0.done = !0, _v0;
            };
          return _v3.next = _v3;
        }
      }
      return {
        next: _v29
      };
    }
    function _v29() {
      return {
        value: _v1,
        done: !0
      };
    }
    return _v17.prototype = _v18, _v4(_v22, "constructor", {
      value: _v18,
      configurable: !0
    }), _v4(_v18, "constructor", {
      value: _v17,
      configurable: !0
    }), _v17.displayName = _v9(_v18, _v8, "GeneratorFunction"), _v0.isGeneratorFunction = function (_v0) {
      var _v1 = "function" == typeof _v0 && _v0.constructor;
      return !!_v1 && (_v1 === _v17 || "GeneratorFunction" === (_v1.displayName || _v1.name));
    }, _v0.mark = function (_v0) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(_v0, _v18) : (_v0.__proto__ = _v18, _v9(_v0, _v8, "GeneratorFunction")), _v0.prototype = Object.create(_v22), _v0;
    }, _v0.awrap = function (_v0) {
      return {
        __await: _v0
      };
    }, _v23(_v24.prototype), _v9(_v24.prototype, _v7, function () {
      return this;
    }), _v0.AsyncIterator = _v24, _v0.async = function (_v0, _v1, _v2, _v3, _v4) {
      void 0 === _v4 && (_v4 = Promise);
      var _v5 = new _v24(_v10(_v0, _v1, _v2, _v3), _v4);
      return _v0.isGeneratorFunction(_v1) ? _v5 : _v5.next().then(function (_v0) {
        return _v0.done ? _v0.value : _v5.next();
      });
    }, _v23(_v22), _v9(_v22, _v8, "Generator"), _v9(_v22, _v6, function () {
      return this;
    }), _v9(_v22, "toString", function () {
      return "[object Generator]";
    }), _v0.keys = function (_v0) {
      var _v1 = Object(_v0),
        _v2 = [];
      for (var _v3 in _v1) _v2.push(_v3);
      return _v2.reverse(), function _v0() {
        for (; _v2.length;) {
          var _v1 = _v2.pop();
          if (_v1 in _v1) return _v0.value = _v1, _v0.done = !1, _v0;
        }
        return _v0.done = !0, _v0;
      };
    }, _v0.values = _v28, _v27.prototype = {
      constructor: _v27,
      reset: function (_v0) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = _v1, this.done = !1, this.delegate = null, this.method = "next", this.arg = _v1, this.tryEntries.forEach(_v26), !_v0) for (var _v1 in this) "t" === _v1.charAt(0) && _v3.call(this, _v1) && !isNaN(+_v1.slice(1)) && (this[_v1] = _v1);
      },
      stop: function () {
        this.done = !0;
        var _v0 = this.tryEntries[0].completion;
        if ("throw" === _v0.type) throw _v0.arg;
        return this.rval;
      },
      dispatchException: function (_v0) {
        if (this.done) throw _v0;
        var _v1 = this;
        function _v2(_v0, _v1) {
          return _v5.type = "throw", _v5.arg = _v0, _v1.next = _v0, _v1 && (_v1.method = "next", _v1.arg = _v1), !!_v1;
        }
        for (var _v3 = this.tryEntries.length - 1; _v3 >= 0; --_v3) {
          var _v4 = this.tryEntries[_v3],
            _v5 = _v4.completion;
          if ("root" === _v4.tryLoc) return _v2("end");
          if (_v4.tryLoc <= this.prev) {
            var _v6 = _v3.call(_v4, "catchLoc"),
              _v7 = _v3.call(_v4, "finallyLoc");
            if (_v6 && _v7) {
              if (this.prev < _v4.catchLoc) return _v2(_v4.catchLoc, !0);else if (this.prev < _v4.finallyLoc) return _v2(_v4.finallyLoc);
            } else if (_v6) {
              if (this.prev < _v4.catchLoc) return _v2(_v4.catchLoc, !0);
            } else if (_v7) {
              if (this.prev < _v4.finallyLoc) return _v2(_v4.finallyLoc);
            } else throw Error("try statement without catch or finally");
          }
        }
      },
      abrupt: function (_v0, _v1) {
        for (var _v2 = this.tryEntries.length - 1; _v2 >= 0; --_v2) {
          var _v3 = this.tryEntries[_v2];
          if (_v3.tryLoc <= this.prev && _v3.call(_v3, "finallyLoc") && this.prev < _v3.finallyLoc) {
            var _v4 = _v3;
            break;
          }
        }
        _v4 && ("break" === _v0 || "continue" === _v0) && _v4.tryLoc <= _v1 && _v1 <= _v4.finallyLoc && (_v4 = null);
        var _v5 = _v4 ? _v4.completion : {};
        return (_v5.type = _v0, _v5.arg = _v1, _v4) ? (this.method = "next", this.next = _v4.finallyLoc, _v15) : this.complete(_v5);
      },
      complete: function (_v0, _v1) {
        if ("throw" === _v0.type) throw _v0.arg;
        return "break" === _v0.type || "continue" === _v0.type ? this.next = _v0.arg : "return" === _v0.type ? (this.rval = this.arg = _v0.arg, this.method = "return", this.next = "end") : "normal" === _v0.type && _v1 && (this.next = _v1), _v15;
      },
      finish: function (_v0) {
        for (var _v1 = this.tryEntries.length - 1; _v1 >= 0; --_v1) {
          var _v2 = this.tryEntries[_v1];
          if (_v2.finallyLoc === _v0) return this.complete(_v2.completion, _v2.afterLoc), _v26(_v2), _v15;
        }
      },
      catch: function (_v0) {
        for (var _v1 = this.tryEntries.length - 1; _v1 >= 0; --_v1) {
          var _v2 = this.tryEntries[_v1];
          if (_v2.tryLoc === _v0) {
            var _v3 = _v2.completion;
            if ("throw" === _v3.type) {
              var _v4 = _v3.arg;
              _v26(_v2);
            }
            return _v4;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (_v0, _v1, _v2) {
        return this.delegate = {
          iterator: _v28(_v0),
          resultName: _v1,
          nextLoc: _v2
        }, "next" === this.method && (this.arg = _v1), _v15;
      }
    }, _v0;
  }(_v1.exports);
  try {
    regeneratorRuntime = _v3;
  } catch (_v0) {
    "object" == typeof globalThis ? globalThis.regeneratorRuntime = _v3 : Function("r", "regeneratorRuntime = r")(_v3);
  }
}