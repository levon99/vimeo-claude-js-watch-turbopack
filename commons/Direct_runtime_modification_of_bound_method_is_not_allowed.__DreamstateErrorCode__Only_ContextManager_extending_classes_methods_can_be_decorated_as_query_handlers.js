{
  "use strict";

  var _v3 = _v0.r(0),
    _v4 = _v0.r(0);
  function _v5(_v0, _v1) {
    var _v2 = !1;
    return {
      configurable: !0,
      get: function () {
        if (_v2) return _v0.value;
        var _v0 = _v0.value.bind(this);
        return _v2 = !0, Object.defineProperty(this, _v1, {
          configurable: !0,
          writable: !1,
          value: _v0
        }), _v2 = !1, _v0;
      },
      set: function () {
        throw new _v3.D(_v3.E.RESTRICTED_OPERATION, "Direct runtime modification of bound method is not allowed.");
      }
    };
  }
  function _v6(_v0) {
    return function (_v0, _v1) {
      return _v0 && _v1 ? _v0(_v1, _v0.constructor) : _v0.finisher = function (_v0) {
        _v0(_v0.key, _v0);
      }, _v0;
    };
  }
  function _v7() {
    return {
      value: _v3.c()
    };
  }
  _v0.r(0), _v0.r(0);
  var _v8 = function () {
    function _v0(_v0, _v1, _v2) {
      this.value = _v0, this.isLoading = _v1, this.error = _v2;
    }
    return _v0.prototype.asLoading = function (_v0) {
      return new _v0(arguments.length > 0 ? _v0 : this.value, !0, null);
    }, _v0.prototype.asFailed = function (_v0, _v1) {
      return new _v0(arguments.length > 1 ? _v1 : this.value, !1, _v0);
    }, _v0.prototype.asReady = function (_v0) {
      return new _v0(arguments.length > 0 ? _v0 : this.value, !1, null);
    }, _v0.prototype.asUpdated = function (_v0, _v1, _v2) {
      return new _v0(_v0, arguments.length > 1 ? _v1 : this.isLoading, arguments.length > 2 ? _v2 : this.error);
    }, _v0;
  }();
  _v2.ContextManager = _v3.C, _v2.DreamstateError = _v3.D, Object.defineProperty(_v2, "DreamstateErrorCode", {
    enumerable: !0,
    get: function () {
      return _v3.E;
    }
  }), _v2.createProvider = _v3.h, _v2.createScope = _v3.c, _v2.Bind = function () {
    return function (_v0, _v1, _v2) {
      if (_v1 && _v2) return _v5(_v2, _v1);
      _v0.descriptor = _v5(_v0.descriptor, _v0.key);
    };
  }, _v2.OnQuery = function (_v0) {
    if (!_v3.i(_v0)) throw new _v3.D(_v3.E.INCORRECT_QUERY_TYPE, typeof _v0);
    return _v6(function (_v0, _v1) {
      if (!(_v1.prototype instanceof _v3.C)) throw new _v3.D(_v3.E.TARGET_CONTEXT_MANAGER_EXPECTED, "Only ContextManager extending classes methods can be decorated as query handlers.");
      _v3.Q.has(_v1) ? _v3.Q.get(_v1).push([_v0, _v0]) : _v3.Q.set(_v1, [[_v0, _v0]]);
    });
  }, _v2.OnSignal = function (_v0) {
    if (Array.isArray(_v0) ? 0 === _v0.length || _v0.some(function (_v0) {
      return !_v3.a(_v0);
    }) : !_v3.a(_v0)) throw new _v3.D(_v3.E.INCORRECT_PARAMETER, "Unexpected signal type provided, expected symbol, string, number or array of it. Got: ".concat(typeof _v0, "."));
    return _v6(function (_v0, _v1) {
      if (!(_v1.prototype instanceof _v3.C)) throw new _v3.D(_v3.E.INCORRECT_PARAMETER, "Only ContextManager extending classes methods can be decorated as handlers.");
      _v3.S.has(_v1) ? _v3.S.get(_v1).push([_v0, _v0]) : _v3.S.set(_v1, [[_v0, _v0]]);
    });
  }, _v2.ScopeProvider = function (_v0) {
    var _v1 = _v4.useState(_v7);
    return _v4.createElement(_v3.b.Provider, _v1[0], _v0.children);
  }, _v2.createActions = function (_v0) {
    if (_v3.d(_v0)) return new _v3.A(_v0);
    throw new _v3.D(_v3.E.INCORRECT_PARAMETER, "Actions store should be initialized with an object, got '".concat(typeof _v0, "' instead."));
  }, _v2.createComputed = function (_v0, _v1) {
    if (_v3.e(_v0) && (_v3.f(_v1) || _v3.e(_v1))) return new _v3.g(_v0, _v1);
    throw new _v3.D(_v3.E.INCORRECT_PARAMETER, "Computed value should be initialized with functional selector and optional memo function.");
  }, _v2.createLoadable = function (_v0, _v1, _v2) {
    return void 0 === _v0 && (_v0 = null), void 0 === _v1 && (_v1 = !1), void 0 === _v2 && (_v2 = null), new _v8(_v0, _v1, _v2);
  }, _v2.createNested = function (_v0) {
    if (_v3.d(_v0)) return Object.assign(new _v3.N(), _v0);
    throw new _v3.D(_v3.E.INCORRECT_PARAMETER, "Nested stores should be initialized with an object, got '".concat(typeof _v0, "' instead."));
  }, _v2.useManager = function (_v0, _v1) {
    var _v2, _v3;
    return _v1 ? (_v2 = _v4.useContext(_v3.b), _v3 = _v4.useState(function () {
      return _v2.INTERNAL.REGISTRY.CONTEXT_STATES_REGISTRY.get(_v0);
    }), _v4.useEffect(function () {
      var _v0 = _v3[0],
        _v1 = _v3[1],
        _v2 = _v2.INTERNAL.REGISTRY.CONTEXT_STATES_REGISTRY.get(_v0) || null,
        _v3 = _v2 ? _v1(_v2) : null;
      return _v0 !== _v2 && _v1(_v2), _v2.INTERNAL.subscribeToManager(_v0, function (_v0) {
        if (!_v3) return _v3 = _v1(_v0), _v1(_v0);
        for (var _v1 = _v1(_v0), _v2 = 0; _v2 < _v1.length; _v2++) if (_v3[_v2] !== _v1[_v2]) return _v3 = _v1, _v1(_v0);
      });
    }, [_v0, _v2.INTERNAL]), _v3[0]) : _v4.useContext(_v0.REACT_CONTEXT);
  }, _v2.useScope = function () {
    return _v4.useContext(_v3.b);
  };
}