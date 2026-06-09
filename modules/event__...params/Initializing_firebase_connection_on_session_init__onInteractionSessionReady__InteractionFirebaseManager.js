{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  class _v6 extends _v3.AbstractFirebaseManager {
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
    isConnected() {
      let {
        interactionConnection: _v0
      } = this.context;
      return _v0.isConnected && null !== _v0.user;
    }
    async onInteractionSessionReady(_v0) {
      this.log.info("Initializing firebase connection on session init"), await (0, _v4.initializeInteractionToolsConnection)(this, _v0);
    }
  }
  (0, _v1._)([(0, _v2.OnSignal)(_v5.ELiveSignal.INTERACTION_SESSION_READY)], _v6.prototype, "onInteractionSessionReady", null), _v0.s(["InteractionFirebaseManager", 0, _v6]);
}