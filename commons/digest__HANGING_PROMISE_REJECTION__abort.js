{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v3 = {
    delayUntilRuntimeStage: function () {
      return _v14;
    },
    getRuntimeStage: function () {
      return _v13;
    },
    isHangingPromiseRejectionError: function () {
      return _v6;
    },
    makeDevtoolsIOAwarePromise: function () {
      return _v12;
    },
    makeHangingPromise: function () {
      return _v10;
    }
  };
  for (var _v4 in _v3) Object.defineProperty(_v2, _v4, {
    enumerable: !0,
    get: _v3[_v4]
  });
  let _v5 = _v0.r(0);
  function _v6(_v0) {
    return "object" == typeof _v0 && null !== _v0 && "digest" in _v0 && _v0.digest === _v7;
  }
  let _v7 = "HANGING_PROMISE_REJECTION";
  class _v8 extends Error {
    constructor(_v0, _v1) {
      super(`During prerendering, ${_v1} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${_v1} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context. This occurred at route "${_v0}".`), this.route = _v0, this.expression = _v1, this.digest = _v7;
    }
  }
  let _v9 = new WeakMap();
  function _v10(_v0, _v1, _v2) {
    if (_v0.aborted) return Promise.reject(new _v8(_v1, _v2));
    {
      let _v0 = new Promise((_v0, _v1) => {
        let _v2 = _v1.bind(null, new _v8(_v1, _v2)),
          _v3 = _v9.get(_v0);
        if (_v3) _v3.push(_v2);else {
          let _v0 = [_v2];
          _v9.set(_v0, _v0), _v0.addEventListener("abort", () => {
            for (let _v0 = 0; _v0 < _v0.length; _v0++) _v0[_v0]();
          }, {
            once: !0
          });
        }
      });
      return _v0.catch(_v11), _v0;
    }
  }
  function _v11() {}
  function _v12(_v0, _v1, _v2) {
    return _v1.stagedRendering ? _v1.stagedRendering.delayUntilStage(_v2, void 0, _v0) : new Promise(_v0 => {
      setTimeout(() => {
        _v0(_v0);
      }, 0);
    });
  }
  function _v13(_v0) {
    return _v0.currentStage === _v5.RenderStage.EarlyStatic || _v0.currentStage === _v5.RenderStage.EarlyRuntime ? _v5.RenderStage.EarlyRuntime : _v5.RenderStage.Runtime;
  }
  function _v14(_v0, _v1) {
    let {
      stagedRendering: _v2
    } = _v0;
    return _v2 ? _v2.waitForStage(_v13(_v2)).then(() => _v1) : _v1;
  }
}