{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v3,
    _v4 = {
      RenderStage: function () {
        return _v8;
      },
      StagedRenderingController: function () {
        return _v9;
      }
    };
  for (var _v5 in _v4) Object.defineProperty(_v2, _v5, {
    enumerable: !0,
    get: _v4[_v5]
  });
  let _v6 = _v0.r(0),
    _v7 = _v0.r(0);
  var _v8 = ((_v3 = {})[_v3.Before = 1] = "Before", _v3[_v3.EarlyStatic = 2] = "EarlyStatic", _v3[_v3.Static = 3] = "Static", _v3[_v3.EarlyRuntime = 4] = "EarlyRuntime", _v3[_v3.Runtime = 5] = "Runtime", _v3[_v3.Dynamic = 6] = "Dynamic", _v3[_v3.Abandoned = 7] = "Abandoned", _v3);
  class _v9 {
    constructor(_v0, _v1, _v2) {
      this.abortSignal = _v0, this.abandonController = _v1, this.shouldTrackSyncIO = _v2, this.currentStage = 1, this.syncInterruptReason = null, this.staticStageEndTime = 1 / 0, this.runtimeStageEndTime = 1 / 0, this.staticStageListeners = [], this.earlyRuntimeStageListeners = [], this.runtimeStageListeners = [], this.dynamicStageListeners = [], this.staticStagePromise = (0, _v7.createPromiseWithResolvers)(), this.earlyRuntimeStagePromise = (0, _v7.createPromiseWithResolvers)(), this.runtimeStagePromise = (0, _v7.createPromiseWithResolvers)(), this.dynamicStagePromise = (0, _v7.createPromiseWithResolvers)(), _v0 && _v0.addEventListener("abort", () => {
        let {
          reason: _v0
        } = _v0;
        this.staticStagePromise.promise.catch(_v10), this.staticStagePromise.reject(_v0), this.earlyRuntimeStagePromise.promise.catch(_v10), this.earlyRuntimeStagePromise.reject(_v0), this.runtimeStagePromise.promise.catch(_v10), this.runtimeStagePromise.reject(_v0), this.dynamicStagePromise.promise.catch(_v10), this.dynamicStagePromise.reject(_v0);
      }, {
        once: !0
      }), _v1 && _v1.signal.addEventListener("abort", () => {
        this.abandonRender();
      }, {
        once: !0
      });
    }
    onStage(_v0, _v1) {
      if (this.currentStage >= _v0) _v1();else if (3 === _v0) this.staticStageListeners.push(_v1);else if (4 === _v0) this.earlyRuntimeStageListeners.push(_v1);else if (5 === _v0) this.runtimeStageListeners.push(_v1);else if (6 === _v0) this.dynamicStageListeners.push(_v1);else throw Object.defineProperty(new _v6.InvariantError(`Invalid render stage: ${_v0}`), "__NEXT_ERROR_CODE", {
        value: "E881",
        enumerable: !1,
        configurable: !0
      });
    }
    shouldTrackSyncInterrupt() {
      if (!this.shouldTrackSyncIO) return !1;
      switch (this.currentStage) {
        case 1:
        case 5:
        case 6:
        case 7:
        default:
          return !1;
        case 2:
        case 3:
        case 4:
          return !0;
      }
    }
    syncInterruptCurrentStageWithReason(_v0) {
      if (1 !== this.currentStage && 7 !== this.currentStage) {
        if (this.abandonController) return void this.abandonController.abort();
        if (this.abortSignal) {
          this.syncInterruptReason = _v0, this.currentStage = 7;
          return;
        }
        switch (this.currentStage) {
          case 2:
          case 3:
          case 4:
            this.syncInterruptReason = _v0, this.advanceStage(6);
            return;
          case 5:
            return;
        }
      }
    }
    getSyncInterruptReason() {
      return this.syncInterruptReason;
    }
    getStaticStageEndTime() {
      return this.staticStageEndTime;
    }
    getRuntimeStageEndTime() {
      return this.runtimeStageEndTime;
    }
    abandonRender() {
      let {
        currentStage: _v0
      } = this;
      switch (_v0) {
        case 2:
          this.resolveStaticStage();
        case 3:
          this.resolveEarlyRuntimeStage();
        case 4:
          this.resolveRuntimeStage();
        case 5:
          this.currentStage = 7;
          return;
      }
    }
    advanceStage(_v0) {
      if (_v0 <= this.currentStage) return;
      let _v1 = this.currentStage;
      if (this.currentStage = _v0, _v1 < 3 && _v0 >= 3 && this.resolveStaticStage(), _v1 < 4 && _v0 >= 4 && this.resolveEarlyRuntimeStage(), _v1 < 5 && _v0 >= 5 && (this.staticStageEndTime = performance.now() + performance.timeOrigin, this.resolveRuntimeStage()), _v1 < 6 && _v0 >= 6) {
        this.runtimeStageEndTime = performance.now() + performance.timeOrigin, this.resolveDynamicStage();
        return;
      }
    }
    resolveStaticStage() {
      let _v0 = this.staticStageListeners;
      for (let _v0 = 0; _v0 < _v0.length; _v0++) _v0[_v0]();
      _v0.length = 0, this.staticStagePromise.resolve();
    }
    resolveEarlyRuntimeStage() {
      let _v0 = this.earlyRuntimeStageListeners;
      for (let _v0 = 0; _v0 < _v0.length; _v0++) _v0[_v0]();
      _v0.length = 0, this.earlyRuntimeStagePromise.resolve();
    }
    resolveRuntimeStage() {
      let _v0 = this.runtimeStageListeners;
      for (let _v0 = 0; _v0 < _v0.length; _v0++) _v0[_v0]();
      _v0.length = 0, this.runtimeStagePromise.resolve();
    }
    resolveDynamicStage() {
      let _v0 = this.dynamicStageListeners;
      for (let _v0 = 0; _v0 < _v0.length; _v0++) _v0[_v0]();
      _v0.length = 0, this.dynamicStagePromise.resolve();
    }
    getStagePromise(_v0) {
      switch (_v0) {
        case 3:
          return this.staticStagePromise.promise;
        case 4:
          return this.earlyRuntimeStagePromise.promise;
        case 5:
          return this.runtimeStagePromise.promise;
        case 6:
          return this.dynamicStagePromise.promise;
        default:
          throw Object.defineProperty(new _v6.InvariantError(`Invalid render stage: ${_v0}`), "__NEXT_ERROR_CODE", {
            value: "E881",
            enumerable: !1,
            configurable: !0
          });
      }
    }
    waitForStage(_v0) {
      return this.getStagePromise(_v0);
    }
    delayUntilStage(_v0, _v1, _v2) {
      var _v3, _v4, _v5;
      let _v6,
        _v7 = (_v3 = this.getStagePromise(_v0), _v4 = _v1, _v5 = _v2, _v6 = new Promise((_v0, _v1) => {
          _v3.then(_v0.bind(null, _v5), _v1);
        }), void 0 !== _v4 && (_v6.displayName = _v4), _v6);
      return this.abortSignal && _v7.catch(_v10), _v7;
    }
  }
  function _v10() {}
}