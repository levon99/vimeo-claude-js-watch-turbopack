{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.DEFAULT_EVENT_DISPATCHER_CONFIG = _v2.DEFAULT_EVENT_DISPATCHER_BATCH_SIZE = void 0, _v2.newDefaultEventDispatcher = function (_v0, _v1, _v2, _v3 = _v2.DEFAULT_EVENT_DISPATCHER_BATCH_SIZE, _v4 = _v2.DEFAULT_EVENT_DISPATCHER_CONFIG) {
    let _v5 = _v3.default.createEventIngestionUrl(_v2);
    return _v5 ? new _v9(new _v5.default(_v0, _v3), _v1, {
      ..._v4,
      ingestionUrl: _v5,
      sdkKey: _v2
    }) : (_v4.logger.debug("Unable to parse Event ingestion URL from SDK key, falling back to no-op event dispatcher"), new _v8.default());
  };
  let _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0),
    _v8 = _v0.r(0);
  _v2.DEFAULT_EVENT_DISPATCHER_BATCH_SIZE = 0, _v2.DEFAULT_EVENT_DISPATCHER_CONFIG = {
    deliveryIntervalMs: 0,
    retryIntervalMs: 0,
    maxRetryDelayMs: 0,
    maxRetries: 3
  };
  class _v9 {
    constructor(_v0, _v1, _v2) {
      this.batchProcessor = _v0, this.networkStatusListener = _v1, this.context = {}, this.dispatchTimer = null, this.isOffline = !1, this.ensureConfigFields(_v2);
      const {
        sdkKey: _v3,
        ingestionUrl: _v4,
        retryIntervalMs: _v5,
        maxRetryDelayMs: _v6,
        maxRetries: _v7 = 3
      } = _v2;
      this.eventDelivery = new _v7.default(_v3, _v4), this.retryManager = new _v6.default(this.eventDelivery, {
        retryIntervalMs: _v5,
        maxRetryDelayMs: _v6,
        maxRetries: _v7
      }), this.deliveryIntervalMs = _v2.deliveryIntervalMs, this.networkStatusListener.onNetworkStatusChange(_v0 => {
        _v4.logger.info(`[EventDispatcher] Network status change, isOffline=${_v0}.`), this.isOffline = _v0, _v0 ? this.dispatchTimer = null : this.maybeScheduleNextDelivery();
      });
    }
    attachContext(_v0, _v1) {
      this.ensureValidContext(_v0, _v1), this.context[_v0] = _v1;
    }
    dispatch(_v0) {
      this.ensureValidEvent(_v0), this.batchProcessor.push(_v0), this.maybeScheduleNextDelivery();
    }
    ensureValidContext(_v0, _v1) {
      if (_v1 && ("object" == typeof _v1 || Array.isArray(_v1))) throw Error("Context value must be a string, number, boolean, or null");
      if (_v1 && JSON.stringify({
        ...this.context,
        [_v0]: _v1
      }).length > 0) throw Error("The total context size must be less than 2048 characters");
    }
    ensureValidEvent(_v0) {
      if (JSON.stringify(_v0).length > 0) throw Error("Event serialized length exceeds maximum allowed length of 4096");
    }
    async deliverNextBatch() {
      if (this.isOffline) return void _v4.logger.warn("[EventDispatcher] Skipping delivery; network status is offline.");
      let _v0 = this.batchProcessor.nextBatch();
      if (0 === _v0.length) {
        this.dispatchTimer = null;
        return;
      }
      let _v1 = {
          ...this.context
        },
        {
          failedEvents: _v2
        } = await this.eventDelivery.deliver(_v0, _v1);
      if (_v2.length > 0) {
        _v4.logger.warn("[EventDispatcher] Failed to deliver some events from batch, retrying...");
        let _v0 = await this.retryManager.retry(_v2, _v1);
        _v0.length > 0 && this.batchProcessor.push(..._v0);
      }
      _v4.logger.debug(`[EventDispatcher] Delivered batch of ${_v0.length} events.`), this.dispatchTimer = null, this.maybeScheduleNextDelivery();
    }
    maybeScheduleNextDelivery() {
      this.isOffline || this.batchProcessor.isEmpty() || this.dispatchTimer || (_v4.logger.info(`[EventDispatcher] Scheduling next delivery in ${this.deliveryIntervalMs}ms.`), this.dispatchTimer = setTimeout(() => this.deliverNextBatch(), this.deliveryIntervalMs));
    }
    ensureConfigFields(_v0) {
      if (!_v0.ingestionUrl) throw Error("Missing required ingestionUrl in EventDispatcherConfig");
      if (!_v0.deliveryIntervalMs) throw Error("Missing required deliveryIntervalMs in EventDispatcherConfig");
      if (!_v0.retryIntervalMs) throw Error("Missing required retryIntervalMs in EventDispatcherConfig");
      if (!_v0.maxRetryDelayMs) throw Error("Missing required maxRetryDelayMs in EventDispatcherConfig");
    }
  }
  _v2.default = _v9;
}