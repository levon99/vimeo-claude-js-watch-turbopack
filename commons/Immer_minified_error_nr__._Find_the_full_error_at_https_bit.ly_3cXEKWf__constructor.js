{
  "use strict";

  function _v1(_v0) {
    for (var _v1 = arguments.length, _v2 = Array(_v1 > 1 ? _v1 - 1 : 0), _v3 = 1; _v3 < _v1; _v3++) _v2[_v3 - 1] = arguments[_v3];
    throw Error("[Immer] minified error nr: " + _v0 + (_v2.length ? " " + _v2.map(function (_v0) {
      return "'" + _v0 + "'";
    }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
  }
  function _v2(_v0) {
    return !!_v0 && !!_v0[_v42];
  }
  function _v3(_v0) {
    var _v1;
    return !!_v0 && (function (_v0) {
      if (!_v0 || "object" != typeof _v0) return !1;
      var _v1 = Object.getPrototypeOf(_v0);
      if (null === _v1) return !0;
      var _v2 = Object.hasOwnProperty.call(_v1, "constructor") && _v1.constructor;
      return _v2 === Object || "function" == typeof _v2 && Function.toString.call(_v2) === _v43;
    }(_v0) || Array.isArray(_v0) || !!_v0[_v41] || !!(null == (_v1 = _v0.constructor) ? void 0 : _v1[_v41]) || _v10(_v0) || _v11(_v0));
  }
  function _v4(_v0, _v1, _v2) {
    void 0 === _v2 && (_v2 = !1), 0 === _v5(_v0) ? (_v2 ? Object.keys : _v44)(_v0).forEach(function (_v0) {
      _v2 && "symbol" == typeof _v0 || _v1(_v0, _v0[_v0], _v0);
    }) : _v0.forEach(function (_v0, _v1) {
      return _v1(_v1, _v0, _v0);
    });
  }
  function _v5(_v0) {
    var _v1 = _v0[_v42];
    return _v1 ? _v1.i > 3 ? _v1.i - 4 : _v1.i : Array.isArray(_v0) ? 1 : _v10(_v0) ? 2 : 3 * !!_v11(_v0);
  }
  function _v6(_v0, _v1) {
    return 2 === _v5(_v0) ? _v0.has(_v1) : Object.prototype.hasOwnProperty.call(_v0, _v1);
  }
  function _v7(_v0, _v1) {
    return 2 === _v5(_v0) ? _v0.get(_v1) : _v0[_v1];
  }
  function _v8(_v0, _v1, _v2) {
    var _v3 = _v5(_v0);
    2 === _v3 ? _v0.set(_v1, _v2) : 3 === _v3 ? (_v0.delete(_v1), _v0.add(_v2)) : _v0[_v1] = _v2;
  }
  function _v9(_v0, _v1) {
    return _v0 === _v1 ? 0 !== _v0 || 1 / _v0 == 1 / _v1 : _v0 != _v0 && _v1 != _v1;
  }
  function _v10(_v0) {
    return _v37 && _v0 instanceof Map;
  }
  function _v11(_v0) {
    return _v38 && _v0 instanceof Set;
  }
  function _v12(_v0) {
    return _v0.o || _v0.t;
  }
  function _v13(_v0) {
    if (Array.isArray(_v0)) return Array.prototype.slice.call(_v0);
    var _v1 = _v45(_v0);
    delete _v1[_v42];
    for (var _v2 = _v44(_v1), _v3 = 0; _v3 < _v2.length; _v3++) {
      var _v4 = _v2[_v3],
        _v5 = _v1[_v4];
      !1 === _v5.writable && (_v5.writable = !0, _v5.configurable = !0), (_v5.get || _v5.set) && (_v1[_v4] = {
        configurable: !0,
        writable: !0,
        enumerable: _v5.enumerable,
        value: _v0[_v4]
      });
    }
    return Object.create(Object.getPrototypeOf(_v0), _v1);
  }
  function _v14(_v0, _v1) {
    return void 0 === _v1 && (_v1 = !1), _v16(_v0) || _v2(_v0) || !_v3(_v0) || (_v5(_v0) > 1 && (_v0.set = _v0.add = _v0.clear = _v0.delete = _v15), Object.freeze(_v0), _v1 && _v4(_v0, function (_v0, _v1) {
      return _v14(_v1, !0);
    }, !0)), _v0;
  }
  function _v15() {
    _v1(2);
  }
  function _v16(_v0) {
    return null == _v0 || "object" != typeof _v0 || Object.isFrozen(_v0);
  }
  function _v17(_v0) {
    var _v1 = _v46[_v0];
    return _v1 || _v1(18, _v0), _v1;
  }
  function _v18(_v0, _v1) {
    _v1 && (_v17("Patches"), _v0.u = [], _v0.s = [], _v0.v = _v1);
  }
  function _v19(_v0) {
    _v20(_v0), _v0.p.forEach(_v22), _v0.p = null;
  }
  function _v20(_v0) {
    _v0 === _v35 && (_v35 = _v0.l);
  }
  function _v21(_v0) {
    return _v35 = {
      p: [],
      l: _v35,
      h: _v0,
      m: !0,
      _: 0
    };
  }
  function _v22(_v0) {
    var _v1 = _v0[_v42];
    0 === _v1.i || 1 === _v1.i ? _v1.j() : _v1.O = !0;
  }
  function _v23(_v0, _v1) {
    _v1._ = _v1.p.length;
    var _v2 = _v1.p[0],
      _v3 = void 0 !== _v0 && _v0 !== _v2;
    return _v1.h.g || _v17("ES5").S(_v1, _v0, _v3), _v3 ? (_v2[_v42].P && (_v19(_v1), _v1(4)), _v3(_v0) && (_v0 = _v24(_v1, _v0), _v1.l || _v26(_v1, _v0)), _v1.u && _v17("Patches").M(_v2[_v42].t, _v0, _v1.u, _v1.s)) : _v0 = _v24(_v1, _v2, []), _v19(_v1), _v1.u && _v1.v(_v1.u, _v1.s), _v0 !== _v40 ? _v0 : void 0;
  }
  function _v24(_v0, _v1, _v2) {
    if (_v16(_v1)) return _v1;
    var _v3 = _v1[_v42];
    if (!_v3) return _v4(_v1, function (_v0, _v1) {
      return _v25(_v0, _v3, _v1, _v0, _v1, _v2);
    }, !0), _v1;
    if (_v3.A !== _v0) return _v1;
    if (!_v3.P) return _v26(_v0, _v3.t, !0), _v3.t;
    if (!_v3.I) {
      _v3.I = !0, _v3.A._--;
      var _v4 = 4 === _v3.i || 5 === _v3.i ? _v3.o = _v13(_v3.k) : _v3.o;
      _v4(3 === _v3.i ? new Set(_v4) : _v4, function (_v0, _v1) {
        return _v25(_v0, _v3, _v4, _v0, _v1, _v2);
      }), _v26(_v0, _v4, !1), _v2 && _v0.u && _v17("Patches").N(_v3, _v2, _v0.u, _v0.s);
    }
    return _v3.o;
  }
  function _v25(_v0, _v1, _v2, _v3, _v4, _v5) {
    if (_v2(_v4)) {
      var _v6 = _v24(_v0, _v4, _v5 && _v1 && 3 !== _v1.i && !_v6(_v1.R, _v3) ? _v5.concat(_v3) : void 0);
      if (_v8(_v2, _v3, _v6), !_v2(_v6)) return;
      _v0.m = !1;
    }
    if (_v3(_v4) && !_v16(_v4)) {
      if (!_v0.h.D && _v0._ < 1) return;
      _v24(_v0, _v4), _v1 && _v1.A.l || _v26(_v0, _v4);
    }
  }
  function _v26(_v0, _v1, _v2) {
    void 0 === _v2 && (_v2 = !1), _v0.h.D && _v0.m && _v14(_v1, _v2);
  }
  function _v27(_v0, _v1) {
    var _v2 = _v0[_v42];
    return (_v2 ? _v12(_v2) : _v0)[_v1];
  }
  function _v28(_v0, _v1) {
    if (_v1 in _v0) for (var _v2 = Object.getPrototypeOf(_v0); _v2;) {
      var _v3 = Object.getOwnPropertyDescriptor(_v2, _v1);
      if (_v3) return _v3;
      _v2 = Object.getPrototypeOf(_v2);
    }
  }
  function _v29(_v0) {
    _v0.P || (_v0.P = !0, _v0.l && _v29(_v0.l));
  }
  function _v30(_v0) {
    _v0.o || (_v0.o = _v13(_v0.t));
  }
  function _v31(_v0, _v1, _v2) {
    var _v3,
      _v4,
      _v5,
      _v6,
      _v7,
      _v8,
      _v9,
      _v10 = _v10(_v1) ? _v17("MapSet").F(_v1, _v2) : _v11(_v1) ? _v17("MapSet").T(_v1, _v2) : _v0.g ? (_v5 = _v4 = {
        i: +!!(_v3 = Array.isArray(_v1)),
        A: _v2 ? _v2.A : _v35,
        P: !1,
        I: !1,
        R: {},
        l: _v2,
        t: _v1,
        k: null,
        o: null,
        j: null,
        C: !1
      }, _v6 = _v47, _v3 && (_v5 = [_v4], _v6 = _v48), _v8 = (_v7 = Proxy.revocable(_v5, _v6)).revoke, _v4.k = _v9 = _v7.proxy, _v4.j = _v8, _v9) : _v17("ES5").J(_v1, _v2);
    return (_v2 ? _v2.A : _v35).p.push(_v10), _v10;
  }
  function _v32(_v0) {
    return _v2(_v0) || _v1(22, _v0), function _v0(_v1) {
      if (!_v3(_v1)) return _v1;
      var _v2,
        _v3 = _v1[_v42],
        _v4 = _v5(_v1);
      if (_v3) {
        if (!_v3.P && (_v3.i < 4 || !_v17("ES5").K(_v3))) return _v3.t;
        _v3.I = !0, _v2 = _v33(_v1, _v4), _v3.I = !1;
      } else _v2 = _v33(_v1, _v4);
      return _v4(_v2, function (_v0, _v1) {
        _v3 && _v7(_v3.t, _v0) === _v1 || _v8(_v2, _v0, _v0(_v1));
      }), 3 === _v4 ? new Set(_v2) : _v2;
    }(_v0);
  }
  function _v33(_v0, _v1) {
    switch (_v1) {
      case 2:
        return new Map(_v0);
      case 3:
        return Array.from(_v0);
    }
    return _v13(_v0);
  }
  var _v34,
    _v35,
    _v36 = "u" > typeof Symbol && "symbol" == typeof Symbol("x"),
    _v37 = "u" > typeof Map,
    _v38 = "u" > typeof Set,
    _v39 = "u" > typeof Proxy && void 0 !== Proxy.revocable && "u" > typeof Reflect,
    _v40 = _v36 ? Symbol.for("immer-nothing") : ((_v34 = {})["immer-nothing"] = !0, _v34),
    _v41 = _v36 ? Symbol.for("immer-draftable") : "__$immer_draftable",
    _v42 = _v36 ? Symbol.for("immer-state") : "__$immer_state",
    _v43 = "" + Object.prototype.constructor,
    _v44 = "u" > typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function (_v0) {
      return Object.getOwnPropertyNames(_v0).concat(Object.getOwnPropertySymbols(_v0));
    } : Object.getOwnPropertyNames,
    _v45 = Object.getOwnPropertyDescriptors || function (_v0) {
      var _v1 = {};
      return _v44(_v0).forEach(function (_v0) {
        _v1[_v0] = Object.getOwnPropertyDescriptor(_v0, _v0);
      }), _v1;
    },
    _v46 = {},
    _v47 = {
      get: function (_v0, _v1) {
        if (_v1 === _v42) return _v0;
        var _v2,
          _v3,
          _v4 = _v12(_v0);
        if (!_v6(_v4, _v1)) return (_v3 = _v28(_v4, _v1)) ? "value" in _v3 ? _v3.value : null == (_v2 = _v3.get) ? void 0 : _v2.call(_v0.k) : void 0;
        var _v5 = _v4[_v1];
        return _v0.I || !_v3(_v5) ? _v5 : _v5 === _v27(_v0.t, _v1) ? (_v30(_v0), _v0.o[_v1] = _v31(_v0.A.h, _v5, _v0)) : _v5;
      },
      has: function (_v0, _v1) {
        return _v1 in _v12(_v0);
      },
      ownKeys: function (_v0) {
        return Reflect.ownKeys(_v12(_v0));
      },
      set: function (_v0, _v1, _v2) {
        var _v3 = _v28(_v12(_v0), _v1);
        if (null == _v3 ? void 0 : _v3.set) return _v3.set.call(_v0.k, _v2), !0;
        if (!_v0.P) {
          var _v4 = _v27(_v12(_v0), _v1),
            _v5 = null == _v4 ? void 0 : _v4[_v42];
          if (_v5 && _v5.t === _v2) return _v0.o[_v1] = _v2, _v0.R[_v1] = !1, !0;
          if (_v9(_v2, _v4) && (void 0 !== _v2 || _v6(_v0.t, _v1))) return !0;
          _v30(_v0), _v29(_v0);
        }
        return _v0.o[_v1] === _v2 && (void 0 !== _v2 || _v1 in _v0.o) || Number.isNaN(_v2) && Number.isNaN(_v0.o[_v1]) || (_v0.o[_v1] = _v2, _v0.R[_v1] = !0), !0;
      },
      deleteProperty: function (_v0, _v1) {
        return void 0 !== _v27(_v0.t, _v1) || _v1 in _v0.t ? (_v0.R[_v1] = !1, _v30(_v0), _v29(_v0)) : delete _v0.R[_v1], _v0.o && delete _v0.o[_v1], !0;
      },
      getOwnPropertyDescriptor: function (_v0, _v1) {
        var _v2 = _v12(_v0),
          _v3 = Reflect.getOwnPropertyDescriptor(_v2, _v1);
        return _v3 ? {
          writable: !0,
          configurable: 1 !== _v0.i || "length" !== _v1,
          enumerable: _v3.enumerable,
          value: _v2[_v1]
        } : _v3;
      },
      defineProperty: function () {
        _v1(11);
      },
      getPrototypeOf: function (_v0) {
        return Object.getPrototypeOf(_v0.t);
      },
      setPrototypeOf: function () {
        _v1(12);
      }
    },
    _v48 = {};
  _v4(_v47, function (_v0, _v1) {
    _v48[_v0] = function () {
      return arguments[0] = arguments[0][0], _v1.apply(this, arguments);
    };
  }), _v48.deleteProperty = function (_v0, _v1) {
    return _v48.set.call(this, _v0, _v1, void 0);
  }, _v48.set = function (_v0, _v1, _v2) {
    return _v47.set.call(this, _v0[0], _v1, _v2, _v0[0]);
  };
  var _v49 = new (function () {
      function _v0(_v0) {
        var _v1 = this;
        this.g = _v39, this.D = !0, this.produce = function (_v0, _v1, _v2) {
          if ("function" == typeof _v0 && "function" != typeof _v1) {
            var _v3,
              _v4 = _v1;
            return _v1 = _v0, function (_v0) {
              var _v1 = this;
              void 0 === _v0 && (_v0 = _v4);
              for (var _v2 = arguments.length, _v3 = Array(_v2 > 1 ? _v2 - 1 : 0), _v4 = 1; _v4 < _v2; _v4++) _v3[_v4 - 1] = arguments[_v4];
              return _v1.produce(_v0, function (_v0) {
                var _v1;
                return (_v1 = _v1).call.apply(_v1, [_v1, _v0].concat(_v3));
              });
            };
          }
          if ("function" != typeof _v1 && _v1(6), void 0 !== _v2 && "function" != typeof _v2 && _v1(7), _v3(_v0)) {
            var _v5 = _v21(_v1),
              _v6 = _v31(_v1, _v0, void 0),
              _v7 = !0;
            try {
              _v3 = _v1(_v6), _v7 = !1;
            } finally {
              _v7 ? _v19(_v5) : _v20(_v5);
            }
            return "u" > typeof Promise && _v3 instanceof Promise ? _v3.then(function (_v0) {
              return _v18(_v5, _v2), _v23(_v0, _v5);
            }, function (_v0) {
              throw _v19(_v5), _v0;
            }) : (_v18(_v5, _v2), _v23(_v3, _v5));
          }
          if (!_v0 || "object" != typeof _v0) {
            if (void 0 === (_v3 = _v1(_v0)) && (_v3 = _v0), _v3 === _v40 && (_v3 = void 0), _v1.D && _v14(_v3, !0), _v2) {
              var _v8 = [],
                _v9 = [];
              _v17("Patches").M(_v0, _v3, _v8, _v9), _v2(_v8, _v9);
            }
            return _v3;
          }
          _v1(21, _v0);
        }, this.produceWithPatches = function (_v0, _v1) {
          if ("function" == typeof _v0) return function (_v0) {
            for (var _v1 = arguments.length, _v2 = Array(_v1 > 1 ? _v1 - 1 : 0), _v3 = 1; _v3 < _v1; _v3++) _v2[_v3 - 1] = arguments[_v3];
            return _v1.produceWithPatches(_v0, function (_v0) {
              return _v0.apply(void 0, [_v0].concat(_v2));
            });
          };
          var _v2,
            _v3,
            _v4 = _v1.produce(_v0, _v1, function (_v0, _v1) {
              _v2 = _v0, _v3 = _v1;
            });
          return "u" > typeof Promise && _v4 instanceof Promise ? _v4.then(function (_v0) {
            return [_v0, _v2, _v3];
          }) : [_v4, _v2, _v3];
        }, "boolean" == typeof (null == _v0 ? void 0 : _v0.useProxies) && this.setUseProxies(_v0.useProxies), "boolean" == typeof (null == _v0 ? void 0 : _v0.autoFreeze) && this.setAutoFreeze(_v0.autoFreeze);
      }
      var _v1 = _v0.prototype;
      return _v1.createDraft = function (_v0) {
        _v3(_v0) || _v1(8), _v2(_v0) && (_v0 = _v32(_v0));
        var _v1 = _v21(this),
          _v2 = _v31(this, _v0, void 0);
        return _v2[_v42].C = !0, _v20(_v1), _v2;
      }, _v1.finishDraft = function (_v0, _v1) {
        var _v2 = (_v0 && _v0[_v42]).A;
        return _v18(_v2, _v1), _v23(void 0, _v2);
      }, _v1.setAutoFreeze = function (_v0) {
        this.D = _v0;
      }, _v1.setUseProxies = function (_v0) {
        _v0 && !_v39 && _v1(20), this.g = _v0;
      }, _v1.applyPatches = function (_v0, _v1) {
        for (_v2 = _v1.length - 1; _v2 >= 0; _v2--) {
          var _v2,
            _v3 = _v1[_v2];
          if (0 === _v3.path.length && "replace" === _v3.op) {
            _v0 = _v3.value;
            break;
          }
        }
        _v2 > -1 && (_v1 = _v1.slice(_v2 + 1));
        var _v4 = _v17("Patches").$;
        return _v2(_v0) ? _v4(_v0, _v1) : this.produce(_v0, function (_v0) {
          return _v4(_v0, _v1);
        });
      }, _v0;
    }())(),
    _v50 = _v49.produce,
    _v51 = _v49.produceWithPatches.bind(_v49),
    _v52 = (_v49.setAutoFreeze.bind(_v49), _v49.setUseProxies.bind(_v49), _v49.applyPatches.bind(_v49));
  _v49.createDraft.bind(_v49), _v49.finishDraft.bind(_v49), _v0.s(["applyPatches", 0, _v52, "current", 0, _v32, "default", 0, _v50, "enableES5", 0, function () {
    function _v0(_v0, _v1) {
      var _v2 = _v4[_v0];
      return _v2 ? _v2.enumerable = _v1 : _v4[_v0] = _v2 = {
        configurable: !0,
        enumerable: _v1,
        get: function () {
          var _v0 = this[_v42];
          return _v47.get(_v0, _v0);
        },
        set: function (_v0) {
          var _v1 = this[_v42];
          _v47.set(_v1, _v0, _v0);
        }
      }, _v2;
    }
    function _v1(_v0) {
      for (var _v1 = _v0.length - 1; _v1 >= 0; _v1--) {
        var _v2 = _v0[_v1][_v42];
        if (!_v2.P) switch (_v2.i) {
          case 5:
            _v3(_v2) && _v29(_v2);
            break;
          case 4:
            _v2(_v2) && _v29(_v2);
        }
      }
    }
    function _v2(_v0) {
      for (var _v1 = _v0.t, _v2 = _v0.k, _v3 = _v44(_v2), _v4 = _v3.length - 1; _v4 >= 0; _v4--) {
        var _v5 = _v3[_v4];
        if (_v5 !== _v42) {
          var _v6 = _v1[_v5];
          if (void 0 === _v6 && !_v6(_v1, _v5)) return !0;
          var _v7 = _v2[_v5],
            _v8 = _v7 && _v7[_v42];
          if (_v8 ? _v8.t !== _v6 : !_v9(_v7, _v6)) return !0;
        }
      }
      var _v9 = !!_v1[_v42];
      return _v3.length !== _v44(_v1).length + +!_v9;
    }
    function _v3(_v0) {
      var _v1 = _v0.k;
      if (_v1.length !== _v0.t.length) return !0;
      var _v2 = Object.getOwnPropertyDescriptor(_v1, _v1.length - 1);
      if (_v2 && !_v2.get) return !0;
      for (var _v3 = 0; _v3 < _v1.length; _v3++) if (!_v1.hasOwnProperty(_v3)) return !0;
      return !1;
    }
    var _v4 = {};
    _v46.ES5 || (_v46.ES5 = {
      J: function (_v0, _v1) {
        var _v2 = Array.isArray(_v0),
          _v3 = function (_v0, _v1) {
            if (_v0) {
              for (var _v2 = Array(_v1.length), _v3 = 0; _v3 < _v1.length; _v3++) Object.defineProperty(_v2, "" + _v3, _v0(_v3, !0));
              return _v2;
            }
            var _v4 = _v45(_v1);
            delete _v4[_v42];
            for (var _v5 = _v44(_v4), _v6 = 0; _v6 < _v5.length; _v6++) {
              var _v7 = _v5[_v6];
              _v4[_v7] = _v0(_v7, _v0 || !!_v4[_v7].enumerable);
            }
            return Object.create(Object.getPrototypeOf(_v1), _v4);
          }(_v2, _v0),
          _v4 = {
            i: _v2 ? 5 : 4,
            A: _v1 ? _v1.A : _v35,
            P: !1,
            I: !1,
            R: {},
            l: _v1,
            t: _v0,
            k: _v3,
            o: null,
            O: !1,
            C: !1
          };
        return Object.defineProperty(_v3, _v42, {
          value: _v4,
          writable: !0
        }), _v3;
      },
      S: function (_v0, _v1, _v2) {
        _v2 ? _v2(_v1) && _v1[_v42].A === _v0 && _v1(_v0.p) : (_v0.u && function _v0(_v1) {
          if (_v1 && "object" == typeof _v1) {
            var _v2 = _v1[_v42];
            if (_v2) {
              var _v3 = _v2.t,
                _v4 = _v2.k,
                _v5 = _v2.R,
                _v6 = _v2.i;
              if (4 === _v6) _v4(_v4, function (_v0) {
                _v0 !== _v42 && (void 0 !== _v3[_v0] || _v6(_v3, _v0) ? _v5[_v0] || _v0(_v4[_v0]) : (_v5[_v0] = !0, _v29(_v2)));
              }), _v4(_v3, function (_v0) {
                void 0 !== _v4[_v0] || _v6(_v4, _v0) || (_v5[_v0] = !1, _v29(_v2));
              });else if (5 === _v6) {
                if (_v3(_v2) && (_v29(_v2), _v5.length = !0), _v4.length < _v3.length) for (var _v7 = _v4.length; _v7 < _v3.length; _v7++) _v5[_v7] = !1;else for (var _v8 = _v3.length; _v8 < _v4.length; _v8++) _v5[_v8] = !0;
                for (var _v9 = Math.min(_v4.length, _v3.length), _v10 = 0; _v10 < _v9; _v10++) _v4.hasOwnProperty(_v10) || (_v5[_v10] = !0), void 0 === _v5[_v10] && _v0(_v4[_v10]);
              }
            }
          }
        }(_v0.p[0]), _v1(_v0.p));
      },
      K: function (_v0) {
        return 4 === _v0.i ? _v2(_v0) : _v3(_v0);
      }
    });
  }, "enablePatches", 0, function () {
    function _v0(_v0) {
      if (!_v3(_v0)) return _v0;
      if (Array.isArray(_v0)) return _v0.map(_v0);
      if (_v10(_v0)) return new Map(Array.from(_v0.entries()).map(function (_v0) {
        return [_v0[0], _v0(_v0[1])];
      }));
      if (_v11(_v0)) return new Set(Array.from(_v0).map(_v0));
      var _v1 = Object.create(Object.getPrototypeOf(_v0));
      for (var _v2 in _v0) _v1[_v2] = _v0(_v0[_v2]);
      return _v6(_v0, _v41) && (_v1[_v41] = _v0[_v41]), _v1;
    }
    function _v1(_v0) {
      return _v2(_v0) ? _v0(_v0) : _v0;
    }
    _v46.Patches || (_v46.Patches = {
      $: function (_v0, _v1) {
        return _v1.forEach(function (_v0) {
          for (var _v1 = _v0.path, _v2 = _v0.op, _v3 = _v0, _v4 = 0; _v4 < _v1.length - 1; _v4++) {
            var _v5 = _v5(_v3),
              _v6 = "" + _v1[_v4];
            0 !== _v5 && 1 !== _v5 || "__proto__" !== _v6 && "constructor" !== _v6 || _v1(24), "function" == typeof _v3 && "prototype" === _v6 && _v1(24), "object" != typeof (_v3 = _v7(_v3, _v6)) && _v1(15, _v1.join("/"));
          }
          var _v7 = _v5(_v3),
            _v8 = _v0(_v0.value),
            _v9 = _v1[_v1.length - 1];
          switch (_v2) {
            case "replace":
              switch (_v7) {
                case 2:
                  return _v3.set(_v9, _v8);
                case 3:
                  _v1(16);
                default:
                  return _v3[_v9] = _v8;
              }
            case "add":
              switch (_v7) {
                case 1:
                  return "-" === _v9 ? _v3.push(_v8) : _v3.splice(_v9, 0, _v8);
                case 2:
                  return _v3.set(_v9, _v8);
                case 3:
                  return _v3.add(_v8);
                default:
                  return _v3[_v9] = _v8;
              }
            case "remove":
              switch (_v7) {
                case 1:
                  return _v3.splice(_v9, 1);
                case 2:
                  return _v3.delete(_v9);
                case 3:
                  return _v3.delete(_v0.value);
                default:
                  return delete _v3[_v9];
              }
            default:
              _v1(17, _v2);
          }
        }), _v0;
      },
      N: function (_v0, _v1, _v2, _v3) {
        var _v4, _v5, _v6, _v7, _v8;
        switch (_v0.i) {
          case 0:
          case 4:
          case 2:
            return _v4 = _v0.t, _v5 = _v0.o, void _v4(_v0.R, function (_v0, _v1) {
              var _v2 = _v7(_v4, _v0),
                _v3 = _v7(_v5, _v0),
                _v4 = _v1 ? _v6(_v4, _v0) ? "replace" : "add" : "remove";
              if (_v2 !== _v3 || "replace" !== _v4) {
                var _v5 = _v1.concat(_v0);
                _v2.push("remove" === _v4 ? {
                  op: _v4,
                  path: _v5
                } : {
                  op: _v4,
                  path: _v5,
                  value: _v3
                }), _v3.push("add" === _v4 ? {
                  op: "remove",
                  path: _v5
                } : "remove" === _v4 ? {
                  op: "add",
                  path: _v5,
                  value: _v1(_v2)
                } : {
                  op: "replace",
                  path: _v5,
                  value: _v1(_v2)
                });
              }
            });
          case 5:
          case 1:
            return function (_v0, _v1, _v2, _v3) {
              var _v4 = _v0.t,
                _v5 = _v0.R,
                _v6 = _v0.o;
              if (_v6.length < _v4.length) {
                var _v7 = [_v6, _v4];
                _v4 = _v7[0], _v6 = _v7[1];
                var _v8 = [_v3, _v2];
                _v2 = _v8[0], _v3 = _v8[1];
              }
              for (var _v9 = 0; _v9 < _v4.length; _v9++) if (_v5[_v9] && _v6[_v9] !== _v4[_v9]) {
                var _v10 = _v1.concat([_v9]);
                _v2.push({
                  op: "replace",
                  path: _v10,
                  value: _v1(_v6[_v9])
                }), _v3.push({
                  op: "replace",
                  path: _v10,
                  value: _v1(_v4[_v9])
                });
              }
              for (var _v11 = _v4.length; _v11 < _v6.length; _v11++) {
                var _v12 = _v1.concat([_v11]);
                _v2.push({
                  op: "add",
                  path: _v12,
                  value: _v1(_v6[_v11])
                });
              }
              _v4.length < _v6.length && _v3.push({
                op: "replace",
                path: _v1.concat(["length"]),
                value: _v4.length
              });
            }(_v0, _v1, _v2, _v3);
          case 3:
            return _v6 = _v0.t, _v7 = _v0.o, _v8 = 0, void (_v6.forEach(function (_v0) {
              if (!_v7.has(_v0)) {
                var _v1 = _v1.concat([_v8]);
                _v2.push({
                  op: "remove",
                  path: _v1,
                  value: _v0
                }), _v3.unshift({
                  op: "add",
                  path: _v1,
                  value: _v0
                });
              }
              _v8++;
            }), _v8 = 0, _v7.forEach(function (_v0) {
              if (!_v6.has(_v0)) {
                var _v1 = _v1.concat([_v8]);
                _v2.push({
                  op: "add",
                  path: _v1,
                  value: _v0
                }), _v3.unshift({
                  op: "remove",
                  path: _v1,
                  value: _v0
                });
              }
              _v8++;
            }));
        }
      },
      M: function (_v0, _v1, _v2, _v3) {
        _v2.push({
          op: "replace",
          path: [],
          value: _v1 === _v40 ? void 0 : _v1
        }), _v3.push({
          op: "replace",
          path: [],
          value: _v0
        });
      }
    });
  }, "freeze", 0, _v14, "isDraft", 0, _v2, "isDraftable", 0, _v3, "original", 0, function (_v0) {
    return _v2(_v0) || _v1(23, _v0), _v0[_v42].t;
  }, "produce", 0, _v50, "produceWithPatches", 0, _v51]);
}