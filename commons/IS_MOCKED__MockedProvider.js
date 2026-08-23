{
  "use strict";

  var _v3 = _v0.r(0),
    _v4 = _v0.r(0);
  function _v5() {
    return _v4.b.Provider;
  }
  _v0.r(0), _v0.r(0);
  var _v6 = Symbol("IS_MOCKED");
  function _v7(_v0, _v1) {
    void 0 === _v0 && (_v0 = {}), void 0 === _v1 && (_v1 = _v4.j());
    var _v2 = _v0.isLifecycleDisabled,
      _v3 = _v0.applyInitialContexts,
      _v4 = new Map(void 0 === _v3 ? [] : _v3),
      _v5 = _v4.c(_v1);
    if (Object.defineProperty(_v5, _v6, {
      value: !0
    }), void 0 === _v2 || _v2) {
      var _v6 = _v5.INTERNAL.addServiceObserver,
        _v7 = _v5.INTERNAL.removeServiceObserver;
      _v5.INTERNAL.addServiceObserver = function (_v0, _v1) {
        return _v6(_v0, _v1, -1);
      }, _v5.INTERNAL.removeServiceObserver = function (_v0, _v1) {
        return _v7(_v0, _v1, -1);
      };
    }
    if (_v4.size) {
      var _v8 = _v5.INTERNAL.registerManager;
      _v5.INTERNAL.registerManager = function (_v0, _v1, _v2) {
        return _v8(_v0, _v1, _v4.get(_v0));
      };
    }
    return _v5;
  }
  _v2.getCurrent = function (_v0, _v1) {
    return _v1.INTERNAL.REGISTRY.CONTEXT_INSTANCES_REGISTRY.get(_v0) || null;
  }, _v2.getReactConsumer = function (_v0) {
    return _v0.REACT_CONTEXT.Consumer;
  }, _v2.getReactProvider = function (_v0) {
    return _v0.REACT_CONTEXT.Provider;
  }, _v2.mockContextProvider = function (_v0, _v1, _v2) {
    void 0 === _v1 && (_v1 = {}), void 0 === _v2 && (_v2 = _v7());
    var _v3 = {
        value: _v2
      },
      _v4 = _v4.h(_v0, _v1),
      _v5 = _v5();
    function _v6(_v0) {
      return _v3.createElement(_v5, _v3, _v3.createElement(_v4, _v0));
    }
    return _v6.displayName = "MockedProvider", _v6;
  }, _v2.mockManager = function (_v0, _v1, _v2) {
    return void 0 === _v2 && (_v2 = _v4.c()), _v2.INTERNAL.registerManager(_v0, _v1), _v2.INTERNAL.REGISTRY.CONTEXT_INSTANCES_REGISTRY.get(_v0);
  }, _v2.mockManagerInitialContext = function (_v0, _v1) {
    return [_v0, _v1];
  }, _v2.mockManagers = function (_v0, _v1, _v2) {
    void 0 === _v2 && (_v2 = _v7());
    for (var _v3 = 0; _v3 < _v0.length; _v3++) _v2.INTERNAL.registerManager(_v0[_v3], _v1);
    return new Map(_v2.INTERNAL.REGISTRY.CONTEXT_INSTANCES_REGISTRY);
  }, _v2.mockRegistry = function () {
    return _v4.j();
  }, _v2.mockScope = _v7, _v2.mockScopeProvider = _v5, _v2.nextAsyncQueue = function (_v0) {
    return void 0 === _v0 && (_v0 = 0), new Promise(function (_v0) {
      return setTimeout(_v0, _v0);
    });
  };
}