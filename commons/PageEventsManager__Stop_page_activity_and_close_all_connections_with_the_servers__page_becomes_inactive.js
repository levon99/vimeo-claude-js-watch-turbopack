{
  "use strict";

  _v0.s(["PageEventsManager", () => _v15], 0);
  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0);
  function _v11() {
    return _v4.liveApplicationConfig.TIMING.IDLE_TIME > _v4.liveApplicationConfig.TIMING.IDLE_TIME_TIMEOUT;
  }
  function _v12(_v0) {
    if (!_v0.canUseIdleState) return !1;
    let _v1 = _v0.queryDataSync({
        type: _v7.ELiveQuery.INGEST_STATUS
      }),
      _v2 = _v1?.data || _v8.EIngestStatus.UNKNOWN;
    return !(_v2 === _v8.EIngestStatus.STREAMING || _v2 === _v8.EIngestStatus.ENDED || !_v0.context.isPageActive);
  }
  function _v13(_v0) {
    _v0.log.info("Stop page activity and close all connections with the servers"), (0, _v10.trackLiveAction)("page_becomes_inactive"), _v0.emitSignal({
      type: _v6.EPageSignal.PAGE_INACTIVE
    }), _v0.setContext({
      isPageActive: !1
    }), _v4.liveApplicationConfig.IS_ACTIVE = !1;
  }
  function _v14(_v0) {
    _v0.idleStateCheckInterval && (_v0.log.info("Stop page idle state observing"), (0, _v9.unRegisterInterval)(_v0.idleStateCheckInterval), _v15.EVENTS_TO_CHECK_IDLE.forEach(_v0 => window.document.removeEventListener(_v0, _v0.onUserPageInteraction, !0)));
  }
  class _v15 extends _v2.ContextManager {
    static EVENTS_TO_CHECK_IDLE = ["resize", "scroll", "mousemove", "keydown", "touchstart"];
    context = {
      pageEventsActions: (0, _v2.createActions)({
        setPageInactive: () => _v13(this)
      }),
      isPageActive: !0
    };
    log = new _v3.Logger("🗒PAGE");
    canUseIdleState = !0;
    idleStateCheckInterval = null;
    lastPageKeypress = 0;
    restrictedTags = ["INPUT", "TEXTAREA"];
    constructor(_v0) {
      super(), this.canUseIdleState = _v0.sessionApplicationType === _v5.EComposerApplicationType.BROADCASTER;
    }
    onProvisionStarted() {
      var _v0;
      _v0 = this, _v14(_v0), _v0.log.info("Start page idle state observing"), _v0.idleStateCheckInterval = (0, _v9.registerInterval)(() => {
        !function (_v0) {
          let _v1 = _v0.queryDataSync({
            type: _v7.ELiveMediaQuery.IS_REMOTE_MEDIA_PLAYING
          });
          if (_v1?.data) return !1;
          let _v2 = _v0.queryDataSync({
            type: _v7.ELiveMediaQuery.CURRENT_LOCAL_MEDIA
          });
          return !_v2?.data?.screen;
        }(_v0) ? _v4.liveApplicationConfig.TIMING.IDLE_TIME = 0 : _v4.liveApplicationConfig.TIMING.IDLE_TIME += _v4.liveApplicationConfig.TIMING.IDLE_TIME_CHECK_INTERVAL, _v11() && _v12(_v0) && _v13(_v0);
      }, _v4.liveApplicationConfig.TIMING.IDLE_TIME_CHECK_INTERVAL, "pageStateObserving"), _v15.EVENTS_TO_CHECK_IDLE.forEach(_v0 => {
        window.document.addEventListener(_v0, _v0.onUserPageInteraction, {
          capture: !0,
          passive: !0
        });
      }), window.addEventListener("keydown", this.onKeyDown, {
        capture: !0,
        passive: !1
      }), window.addEventListener("focus", this.onPageFocused, {
        capture: !0,
        passive: !1
      });
    }
    onProvisionEnded() {
      _v14(this), window.removeEventListener("keydown", this.onKeyDown, !0), window.removeEventListener("focus", this.onPageFocused, !0);
    }
    onUserPageInteraction(_v0) {
      _v0.isTrusted && (_v4.liveApplicationConfig.TIMING.IDLE_TIME = 0);
    }
    onPageFocused() {
      _v11() && _v12(this) && _v13(this);
    }
    onKeyDown(_v0) {
      let _v1 = !!(_v0.isTrusted && !_v0.target.isContentEditable && !this.restrictedTags.includes(_v0.target.tagName) && _v4.liveApplicationConfig.KEY_BINDS.ENABLED_KEYS.includes(_v0.code)),
        _v2 = _v1 && Date.now() - this.lastPageKeypress > _v4.liveApplicationConfig.KEY_BINDS.KEYPRESS_THROTTLING_PERIOD;
      _v1 && (this.onUserPageInteraction(_v0), _v0.preventDefault(), _v0.stopPropagation(), _v2 && (this.lastPageKeypress = Date.now(), this.emitSignal({
        type: _v6.EPageSignal.PAGE_KEY_PRESSED,
        data: _v0
      })));
    }
  }
  (0, _v1._)([(0, _v2.Bind)()], _v15.prototype, "onUserPageInteraction", null), (0, _v1._)([(0, _v2.Bind)()], _v15.prototype, "onPageFocused", null), (0, _v1._)([(0, _v2.Bind)()], _v15.prototype, "onKeyDown", null);
}