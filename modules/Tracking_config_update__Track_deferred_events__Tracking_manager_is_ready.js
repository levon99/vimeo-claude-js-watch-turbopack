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
  class _v10 extends _v2.ContextManager {
    context = {
      isReady: !1,
      config: _v5.liveTrackingConfig,
      trackingActions: (0, _v2.createActions)({
        setConfig: _v0 => this.setConfig(_v0),
        setIsReady: () => this.setIsReady(),
        trackSafely: _v0 => this.trackSafely(_v0)
      })
    };
    trackingEventsQueue = [];
    log = new _v3.Logger("➡TM");
    constructor(_v0) {
      super(), _v0?.sessionApplicationType === _v7.EComposerApplicationType.BROADCASTER && (this.context.config.BIG_PICTURE_LIVE_SCHEMA_BASE.leadSource = this.getLeadSource());
    }
    setConfig(_v0) {
      this.log.info("Tracking config update:", _v0), (0, _v6.updateTrackingConfig)(_v0, this.context.config), this.forceUpdate();
    }
    getLeadSource() {
      return (0, _v8.getUrlQueryValue)(_v4.liveQueryConfig.UTM_CAMPAIGN) || (0, _v8.getUrlQueryValue)(_v4.liveQueryConfig.VCID);
    }
    unleashDeferredEvents() {
      for (this.trackingEventsQueue.reverse(); this.trackingEventsQueue.length;) {
        this.log.info("Track deferred events");
        let _v0 = this.trackingEventsQueue.pop();
        _v0 && _v0();
      }
    }
    setIsReady() {
      this.log.info("Tracking manager is ready"), this.unleashDeferredEvents(), this.setContext({
        isReady: !0
      });
    }
    trackSafely(_v0) {
      let {
        isReady: _v1
      } = this.context;
      _v1 ? _v0() : this.trackingEventsQueue.push(_v0);
    }
    onTrackSafely(_v0) {
      this.trackSafely(_v0.data);
    }
  }
  (0, _v1._)([(0, _v2.OnSignal)(_v9.ELiveSignal.TRACK_SAFELY)], _v10.prototype, "onTrackSafely", null), _v0.s(["TrackingManager", 0, _v10]);
}