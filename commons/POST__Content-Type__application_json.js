{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  let _v3 = _v0.r(0);
  _v2.default = class {
    constructor(_v0, _v1) {
      this.sdkKey = _v0, this.ingestionUrl = _v1;
    }
    async deliver(_v0, _v1) {
      try {
        _v3.logger.info(`[EventDispatcher] Delivering batch of ${_v0.length} events to ${this.ingestionUrl}...`);
        let _v0 = await fetch(this.ingestionUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-eppo-token": this.sdkKey
          },
          body: JSON.stringify({
            eppo_events: _v0,
            context: _v1
          })
        });
        if (_v0.ok) return await this.parseFailedEvents(_v0, _v0);
        return {
          failedEvents: _v0
        };
      } catch (_v0) {
        return _v3.logger.warn({
          err: _v0
        }, "Failed to upload event batch"), {
          failedEvents: _v0
        };
      }
    }
    async parseFailedEvents(_v0, _v1) {
      _v3.logger.info("[EventDispatcher] Batch delivered successfully.");
      let _v2 = await _v0.json(),
        _v3 = new Set(_v2?.failed_events || []);
      return _v3.size > 0 ? (_v3.logger.warn(`[EventDispatcher] ${_v3.size}/${_v1.length} events failed ingestion.`), {
        failedEvents: _v1.filter(({
          uuid: _v0
        }) => _v3.has(_v0))
      }) : {
        failedEvents: []
      };
    }
  };
}