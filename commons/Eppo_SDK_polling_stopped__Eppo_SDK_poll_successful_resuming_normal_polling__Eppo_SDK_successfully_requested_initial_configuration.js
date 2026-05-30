{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.default = function (_v0, _v1, _v2) {
    let _v3,
      _v4 = !1,
      _v5 = 0,
      _v6 = _v0,
      _v7 = !1,
      _v8 = () => {
        _v4 || (_v4 = !0, _v3 && (clearTimeout(_v3), _v3 = void 0), _v3.logger.info("Eppo SDK polling stopped"));
      };
    async function _v9() {
      if (_v4) {
        _v3 && (clearTimeout(_v3), _v3 = void 0);
        return;
      }
      try {
        await _v1(), _v5 = 0, _v6 = _v0, _v7 && (_v7 = !1, _v3.logger.info("Eppo SDK poll successful; resuming normal polling"));
      } catch (_v0) {
        _v7 = !0, _v3.logger.warn(`Eppo SDK encountered an error polling configurations: ${_v0.message}`);
        let _v1 = 1 + (_v2?.maxPollRetries ?? _v4.DEFAULT_POLL_CONFIG_REQUEST_RETRIES);
        if (++_v5 < _v1) {
          let _v0 = Math.pow(2, _v5),
            _v1 = _v6(_v0);
          _v6 = _v0 * _v0 + _v1, _v3.logger.warn(`Eppo SDK will try polling again in ${_v6} ms (${_v1 - _v5} attempts remaining)`);
        } else {
          _v3.logger.error(`Eppo SDK reached maximum of ${_v5} failed polling attempts. Stopping polling`), _v8();
          return;
        }
      }
      _v4 || (_v3 = setTimeout(_v9, _v6));
    }
    return {
      start: async () => {
        _v4 = !1;
        let _v0 = !1,
          _v1 = _v2?.skipInitialPoll ? 0 : 1 + (_v2?.maxStartRetries ?? _v4.DEFAULT_INITIAL_CONFIG_REQUEST_RETRIES),
          _v2 = null;
        for (; !_v0 && _v1 > 0;) try {
          await _v1(), _v0 = !0, _v7 = !1, _v3.logger.info("Eppo SDK successfully requested initial configuration");
        } catch (_v0) {
          if (_v7 = !0, _v3.logger.warn(`Eppo SDK encountered an error with initial poll of configurations: ${_v0.message}`), --_v1 > 0) {
            let _v0 = _v6(_v0);
            _v3.logger.warn(`Eppo SDK will retry the initial poll again in ${_v0} ms (${_v1} attempts remaining)`), await (0, _v5.waitForMs)(_v0);
          } else _v2?.pollAfterFailedStart ? _v3.logger.warn("Eppo SDK initial poll failed; will attempt regular polling") : (_v3.logger.error("Eppo SDK initial poll failed. Aborting polling"), _v8()), _v2?.errorOnFailedStart && (_v2 = _v0);
        }
        if (!_v4 && (_v0 && _v2?.pollAfterSuccessfulStart || !_v0 && _v2?.pollAfterFailedStart) ? (_v3.logger.info(`Eppo SDK starting regularly polling every ${_v0} ms`), _v3 = setTimeout(_v9, _v0)) : _v3.logger.info("Eppo SDK will not poll for configuration updates"), _v2) throw _v3.logger.info("Eppo SDK rethrowing start error"), _v2;
      },
      stop: _v8
    };
  };
  let _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0);
  function _v6(_v0) {
    return _v0 * _v4.POLL_JITTER_PCT / 2 + Math.max(Math.floor(Math.random() * _v0 * _v4.POLL_JITTER_PCT / 2), 1);
  }
}