{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0);
  function _v10(_v0) {
    _v0.log.info("Stop stream stats polling"), _v0.streamStatsInterval && ((0, _v9.unRegisterInterval)(_v0.streamStatsInterval), _v0.streamStatsInterval = 0);
  }
  async function _v11(_v0, {
    isBlockingRequest: _v1 = !0
  } = {}) {
    try {
      if (!_v0.connections?.getStats) throw new _v8.LiveError("Cannot fetch stream stats without connection.");
      _v1 && (await _v0.mutex.acquire("stats-fetching"));
      let _v0 = await (0, _v6.getLiveEventStats)({
        connection: _v0.connections.getStats,
        gctlConfig: (0, _v5.queryManagerGctlConfig)(_v0)
      });
      _v0.setContext({
        stats: (0, _v2.createLoadable)(_v0)
      });
    } catch (_v0) {
      _v0.log.error("Failed to poll stream stats:", _v0);
    } finally {
      _v1 && _v0.mutex.release("stats-fetched");
    }
  }
  var _v12 = _v0.i(0),
    _v13 = _v0.i(0);
  class _v14 extends _v2.ContextManager {
    context = {
      statsActions: (0, _v2.createActions)({
        loadStats: () => this.loadStats()
      }),
      isEnabled: !1,
      stats: (0, _v2.createLoadable)(null)
    };
    connections = null;
    streamStatsInterval = 0;
    mutex = new _v3.Mutex({
      logEnabled: !1,
      name: "🫒CSTS MTX"
    });
    log = new _v4.Logger("🫒CSTS");
    onProvisionEnded() {
      _v10(this);
    }
    canUseStats() {
      return !!this.connections?.getStats;
    }
    loadStats() {
      return _v11(this);
    }
    onComposerStatusUpdate({
      data: _v0
    }) {
      if (_v0 === _v13.EIngestStatus.STREAMING) {
        var _v1;
        _v1 = this, _v1.canUseStats() ? (_v1.log.info("Starting polling stats for live event"), _v1.streamStatsInterval || (_v1.streamStatsInterval = (0, _v9.registerInterval)(() => _v1.mutex.isLocked() ? void 0 : _v1.loadStats(), _v7.liveApplicationConfig.EVENT.STREAM_STATS_POLLING_INTERVAL, "eventStatusPolling"))) : _v1.log.info("Skip status polling, no stats connection");
      } else this.streamStatsInterval && _v10(this);
    }
    onComposerSessionReady({
      data: {
        type: _v0,
        id: _v1,
        metadata: _v2
      }
    }) {
      this.log.info("Session ready for stats polling:", _v0, _v1), this.connections = {
        getStats: _v2.connections.viewerStats
      }, this.setContext({
        isEnabled: !!this.connections.getStats
      });
    }
  }
  (0, _v1._)([(0, _v2.OnSignal)(_v12.ELiveSignal.LIVE_EVENT_STATUS_UPDATED)], _v14.prototype, "onComposerStatusUpdate", null), (0, _v1._)([(0, _v2.OnSignal)(_v12.ELiveSignal.COMPOSER_SESSION_READY)], _v14.prototype, "onComposerSessionReady", null), _v0.s(["ComposerSessionStatsManager", 0, _v14], 0);
}