{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = Error("Timeout while waiting for mutex to become available."),
    _v3 = Error("Mutex already locked."),
    _v4 = Error("Request for lock canceled.");
  class _v5 {
    tryAcquire(_v0 = _v3) {
      return this.withTimeout(0, _v0);
    }
    withTimeout(_v0, _v1 = _v2) {
      return {
        acquire: _v0 => {
          if (void 0 !== _v0 && _v0 <= 0) throw Error(`Invalid weight ${_v0}: must be positive.`);
          return new Promise(async (_v0, _v1) => {
            let _v2 = !1,
              _v3 = setTimeout(() => {
                _v2 = !0, _v1(_v1);
              }, _v0);
            try {
              let _v0 = await this.acquire(_v0);
              _v2 ? (Array.isArray(_v0) ? _v0[1] : _v0)() : (clearTimeout(_v3), _v0(_v0));
            } catch (_v0) {
              _v2 || (clearTimeout(_v3), _v1(_v0));
            }
          });
        },
        async runExclusive(_v0, _v1) {
          let _v2 = () => void 0;
          try {
            let _v0 = await this.acquire(_v1);
            if (Array.isArray(_v0)) return _v2 = _v0[1], await _v0(_v0[0]);
            return _v2 = _v0, await _v0();
          } finally {
            _v2();
          }
        },
        release(_v0) {
          this.release(_v0);
        },
        cancel() {
          return this.cancel();
        },
        waitForUnlock: _v0 => {
          if (void 0 !== _v0 && _v0 <= 0) throw Error(`Invalid weight ${_v0}: must be positive.`);
          return new Promise((_v0, _v1) => {
            this.waitForUnlock(_v0).then(_v0), setTimeout(() => _v1(_v1), _v0);
          });
        },
        isLocked: () => this.isLocked(),
        getValue: () => this.getValue(),
        setValue: _v0 => this.setValue(_v0)
      };
    }
  }
  class _v6 extends _v5 {
    weightedQueues = [];
    weightedWaiters = [];
    cancelError;
    value;
    name;
    log;
    constructor({
      name: _v0 = "Semaphore",
      logEnabled: _v1,
      capacity: _v2,
      cancelError: _v3 = _v4
    }) {
      super(), this.value = _v2, this.cancelError = _v3, this.name = _v0, this.log = new _v1.Logger("🍠 S " + _v0, _v1), this.log.info("Declared semaphore:", _v0);
    }
    acquire(_v0 = 1) {
      if (this.log.info("Acquire:", _v0), _v0 <= 0) throw Error(`Invalid weight ${_v0}: must be positive.`);
      return new Promise((_v0, _v1) => {
        this.weightedQueues[_v0 - 1] || (this.weightedQueues[_v0 - 1] = []), this.weightedQueues[_v0 - 1].push({
          resolve: _v0,
          reject: _v1
        }), this.dispatch();
      });
    }
    async runExclusive(_v0, _v1 = 1) {
      let [_v2, _v3] = await this.acquire(_v1);
      this.log.info("Run exclusive:", _v1);
      try {
        return await _v0(_v2);
      } finally {
        _v3();
      }
    }
    waitForUnlock(_v0 = 1) {
      if (this.log.info("Wait unlock:", _v0), _v0 <= 0) throw Error(`Invalid weight ${_v0}: must be positive.`);
      return new Promise(_v0 => {
        this.weightedWaiters[_v0 - 1] || (this.weightedWaiters[_v0 - 1] = []), this.weightedWaiters[_v0 - 1].push(_v0), this.dispatch();
      });
    }
    isLocked() {
      return this.value <= 0;
    }
    getValue() {
      return this.value;
    }
    setValue(_v0) {
      this.value = _v0, this.dispatch();
    }
    release(_v0 = 1) {
      if (_v0 <= 0) throw Error(`Invalid weight ${_v0}: must be positive.`);
      this.log.info("Release:", _v0), this.value += _v0, this.dispatch();
    }
    cancel() {
      this.log.info("Cancel"), this.weightedQueues.forEach(_v0 => _v0.forEach(_v0 => _v0.reject(this.cancelError))), this.weightedQueues = [];
    }
    dispatch() {
      for (let _v0 = this.value; _v0 > 0; _v0--) {
        let _v0 = this.weightedQueues[_v0 - 1]?.shift();
        if (!_v0) continue;
        let _v1 = this.value,
          _v2 = _v0;
        this.value -= _v0, _v0 = this.value + 1, _v0.resolve([_v1, this.newReleaser(_v2)]);
      }
      this.drainUnlockWaiters();
    }
    newReleaser(_v0) {
      let _v1 = !1;
      return () => {
        _v1 || (_v1 = !0, this.release(_v0));
      };
    }
    drainUnlockWaiters() {
      for (let _v0 = this.value; _v0 > 0; _v0--) this.weightedWaiters[_v0 - 1] && (this.weightedWaiters[_v0 - 1].forEach(_v0 => _v0()), this.weightedWaiters[_v0 - 1] = []);
    }
  }
  _v0.s(["Mutex", 0, class extends _v5 {
    name;
    semaphore;
    log;
    constructor({
      name: _v0 = "Mutex",
      logEnabled: _v1,
      cancelError: _v2 = _v4
    } = {}) {
      super(), this.name = _v0, this.log = new _v1.Logger(_v0, _v1), this.semaphore = new _v6({
        capacity: 1,
        name: _v0,
        logEnabled: !1,
        cancelError: _v2
      }), this.log.info("Declared mutex:", _v0);
    }
    async acquire(_v0) {
      let [, _v1] = await this.semaphore.acquire();
      return this.log.info("Acquired:", _v0), _v1;
    }
    runExclusive(_v0, _v1 = "") {
      return this.log.info("Run exclusive:", _v1), this.semaphore.runExclusive(() => _v0());
    }
    isLocked() {
      return this.semaphore.isLocked();
    }
    waitForUnlock(_v0) {
      return this.log.info("Wait unlock:", _v0), this.semaphore.waitForUnlock();
    }
    release(_v0 = "generic") {
      this.log.info("Release:", _v0), this.semaphore.isLocked() && this.semaphore.release();
    }
    cancel(_v0 = "generic") {
      return this.log.info("Cancel:", _v0), this.semaphore.cancel();
    }
  }], 0);
}