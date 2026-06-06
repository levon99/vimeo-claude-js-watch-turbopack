{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  let _v3 = _v0.r(0);
  _v2.default = class {
    constructor(_v0, _v1) {
      this.delivery = _v0, this.config = _v1;
    }
    async retry(_v0, _v1, _v2 = 0) {
      let {
          retryIntervalMs: _v3,
          maxRetryDelayMs: _v4,
          maxRetries: _v5
        } = this.config,
        _v6 = Math.min(_v3 * Math.pow(2, _v2), _v4);
      _v3.logger.info(`[BatchRetryManager] Retrying batch delivery of ${_v0.length} events in ${_v6}ms...`), await new Promise(_v0 => setTimeout(_v0, _v6));
      let {
        failedEvents: _v7
      } = await this.delivery.deliver(_v0, _v1);
      return 0 === _v7.length ? (_v3.logger.info(`[BatchRetryManager] Batch delivery successfully after ${_v2 + 1} tries.`), []) : _v2 < _v5 - 1 ? this.retry(_v7, _v1, _v2 + 1) : (_v3.logger.warn(`[BatchRetryManager] Failed to deliver batch after ${_v5} tries, bailing`), _v0);
    }
  };
}