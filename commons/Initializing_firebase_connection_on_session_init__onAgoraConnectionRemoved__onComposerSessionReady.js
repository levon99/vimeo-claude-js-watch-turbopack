{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  class _v8 extends _v3.AbstractFirebaseManager {
    context = {
      isFirebaseReady: !1,
      isComposerReady: !1,
      isInteractionReady: !1,
      isStreamHealthReady: !1,
      isDisposed: !1,
      interactionCredentials: null,
      composerCredentials: null,
      streamHealthCredentials: null,
      interactionConnection: (0, _v2.createNested)({
        isConnected: !1,
        user: null
      }),
      composerConnection: (0, _v2.createNested)({
        isConnected: !1,
        user: null
      }),
      streamHealthConnection: (0, _v2.createNested)({
        isConnected: !1,
        user: null
      }),
      connectionStatuses: (0, _v2.createComputed)(({
        interactionConnection: _v0
      }) => ({
        isInteractionConnected: !!(_v0?.isConnected && _v0?.user !== null)
      }))
    };
    onAgoraConnectionRemoved() {
      return (0, _v4.dispose)(this);
    }
    async onComposerSessionReady(_v0) {
      this.log.info("Initializing firebase connection on session init"), await Promise.all([(0, _v6.initializeComposerInteractionToolsConnection)(this, _v0), (0, _v5.initializeComposerConnection)(this, _v0)]);
    }
  }
  (0, _v1._)([(0, _v2.OnSignal)(_v7.EAgoraSignal.AGORA_CONNECTION_REMOVED_FROM_SESSION)], _v8.prototype, "onAgoraConnectionRemoved", null), (0, _v1._)([(0, _v2.OnSignal)(_v7.ELiveSignal.COMPOSER_SESSION_READY)], _v8.prototype, "onComposerSessionReady", null), _v0.s(["GuestFirebaseManager", 0, _v8]);
}