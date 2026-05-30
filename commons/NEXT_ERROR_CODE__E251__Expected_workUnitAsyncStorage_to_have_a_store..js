{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v3 = {
    getCacheSignal: function () {
      return _v18;
    },
    getDraftModeProviderForCacheScope: function () {
      return _v16;
    },
    getHmrRefreshHash: function () {
      return _v13;
    },
    getPrerenderResumeDataCache: function () {
      return _v11;
    },
    getRenderResumeDataCache: function () {
      return _v12;
    },
    getServerComponentsHmrCache: function () {
      return _v15;
    },
    getStagedRenderingController: function () {
      return _v17;
    },
    isHmrRefresh: function () {
      return _v14;
    },
    isInEarlyRenderStage: function () {
      return _v8;
    },
    throwForMissingRequestStore: function () {
      return _v9;
    },
    throwInvariantForMissingStore: function () {
      return _v10;
    },
    workUnitAsyncStorage: function () {
      return _v5.workUnitAsyncStorageInstance;
    }
  };
  for (var _v4 in _v3) Object.defineProperty(_v2, _v4, {
    enumerable: !0,
    get: _v3[_v4]
  });
  let _v5 = _v0.r(0);
  _v0.r(0);
  let _v6 = _v0.r(0),
    _v7 = _v0.r(0);
  function _v8(_v0) {
    let _v1 = _v0.stagedRendering;
    return !!_v1 && (_v1.currentStage === _v7.RenderStage.EarlyStatic || _v1.currentStage === _v7.RenderStage.EarlyRuntime);
  }
  function _v9(_v0) {
    throw Object.defineProperty(Error(`\`${_v0}\` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`), "__NEXT_ERROR_CODE", {
      value: "E251",
      enumerable: !1,
      configurable: !0
    });
  }
  function _v10() {
    throw Object.defineProperty(new _v6.InvariantError("Expected workUnitAsyncStorage to have a store."), "__NEXT_ERROR_CODE", {
      value: "E696",
      enumerable: !1,
      configurable: !0
    });
  }
  function _v11(_v0) {
    switch (_v0.type) {
      case "prerender":
      case "prerender-runtime":
      case "prerender-ppr":
      case "prerender-client":
      case "validation-client":
        return _v0.prerenderResumeDataCache;
      case "request":
        if (_v0.prerenderResumeDataCache) return _v0.prerenderResumeDataCache;
      case "prerender-legacy":
      case "cache":
      case "private-cache":
      case "unstable-cache":
      case "generate-static-params":
        return null;
      default:
        return _v0;
    }
  }
  function _v12(_v0) {
    switch (_v0.type) {
      case "request":
      case "prerender":
      case "prerender-runtime":
      case "prerender-client":
      case "validation-client":
        if (_v0.renderResumeDataCache) return _v0.renderResumeDataCache;
      case "prerender-ppr":
        return _v0.prerenderResumeDataCache ?? null;
      case "cache":
      case "private-cache":
      case "unstable-cache":
      case "prerender-legacy":
      case "generate-static-params":
        return null;
      default:
        return _v0;
    }
  }
  function _v13(_v0) {}
  function _v14(_v0) {
    return !1;
  }
  function _v15(_v0) {}
  function _v16(_v0, _v1) {
    if (_v0.isDraftMode) switch (_v1.type) {
      case "cache":
      case "private-cache":
      case "unstable-cache":
      case "prerender-runtime":
      case "request":
        return _v1.draftMode;
    }
  }
  function _v17(_v0) {
    switch (_v0.type) {
      case "request":
      case "prerender-runtime":
        return _v0.stagedRendering ?? null;
      case "prerender":
      case "prerender-client":
      case "validation-client":
      case "prerender-ppr":
      case "prerender-legacy":
      case "cache":
      case "private-cache":
      case "unstable-cache":
      case "generate-static-params":
        return null;
      default:
        return _v0;
    }
  }
  function _v18(_v0) {
    switch (_v0.type) {
      case "prerender":
      case "prerender-client":
      case "validation-client":
      case "prerender-runtime":
        return _v0.cacheSignal;
      case "request":
        if (_v0.cacheSignal) return _v0.cacheSignal;
      case "prerender-ppr":
      case "prerender-legacy":
      case "cache":
      case "private-cache":
      case "unstable-cache":
      case "generate-static-params":
        return null;
      default:
        return _v0;
    }
  }
}