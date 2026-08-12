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
    _v9 = _v0.i(0),
    _v10 = _v0.i(0);
  async function _v11(_v0, _v1) {
    try {
      _v0.log.info("Hydrating event participants list");
      let {
          eventConnections: _v0
        } = _v0.context,
        _v1 = await (0, _v6.getRefValue)(_v0.firebase, _v1),
        _v2 = {
          ..._v0,
          ..._v1
        };
      _v0.log.info("Hydrated event participants list"), _v0.setContext({
        eventConnections: _v2
      });
    } catch (_v0) {
      _v0.log.error("Failed to hydrate event participants list:", _v0), (0, _v10.trackLiveError)(_v0, {
        category: _v9.ELiveErrorCategory.LIVE,
        method: "hydrateEventParticipantsList"
      });
    }
  }
  async function _v12(_v0, _v1, _v2) {
    _v0.log.warn("Participants lifetime expired:", _v2, _v1), (0, _v10.trackLiveAction)("participants_lifetime_expired", {
      id: _v1.id,
      lifeTimeOfParticipant: _v2
    }), await (0, _v6.removeRefValue)(_v0.firebase, (0, _v6.getRefChild)(_v0.firebase, _v0.participantsRef, _v1.id));
  }
  var _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0);
  class _v19 extends _v15.UnsubscribingContextManager {
    context = {
      presenceActions: (0, _v2.createActions)({
        switchToBroadcasterMode: () => this.switchToBroadcasterMode(),
        switchConnectionToBroadcasterMode: _v0 => this.switchConnectionToBroadcasterMode(_v0),
        dropConnection: _v0 => this.dropConnection(_v0)
      }),
      eventConnections: {},
      broadcasterId: null,
      isConnected: null,
      currentConnectionId: (0, _v3.v4)(),
      connectionType: _v5.EEventConnectionType.UNKNOWN
    };
    log = new _v4.Logger("🐝PSNC");
    MAX_PARTICIPANTS_LIFE_TIME_IN_DAYS = 3;
    firebase;
    participantsRef;
    currentTabPresenceRef;
    currentBroadcasterRef;
    connectionStatusRef;
    onProvisionEnded() {
      this.disposeSubscribers(), this.dispose();
    }
    async switchToBroadcasterMode() {
      return this.log.info("Trying to switch to broadcaster mode"), this.assertIsInitialized(), this.switchConnectionToBroadcasterMode(this.context.currentConnectionId);
    }
    async switchConnectionToBroadcasterMode(_v0) {
      this.log.info("Trying to switch connection to broadcaster mode:", _v0), this.assertIsInitialized();
      let {
        broadcasterId: _v1
      } = this.context;
      _v1 === _v0 ? this.log.info("Cancel transfer, already user already broadcaster") : await (0, _v6.setRefValue)(this.firebase, this.currentBroadcasterRef, _v0);
    }
    async dropConnection(_v0) {
      this.log.info("Deleting presence participant:", _v0), this.assertIsInitialized();
      let {
        broadcasterId: _v1
      } = this.context;
      _v1 === _v0 && (this.log.info("Deactivate current broadcaster:", _v0), await (0, _v6.setRefValue)(this.firebase, this.currentBroadcasterRef, _v0)), await (0, _v6.removeRefValue)(this.firebase, (0, _v6.getRefChild)(this.firebase, this.participantsRef, _v0));
    }
    onConnectionTypeChanged(_v0) {
      let {
        connectionType: _v1
      } = this.context;
      this.log.info("Connection type changed:", _v0), this.emitSignal({
        type: _v18.ELiveBroadcasterSignal.EVENT_CONNECTION_TYPE_CHANGED,
        data: _v1
      });
      let {
          data: _v2
        } = this.queryDataSync({
          type: _v17.ELiveQuery.INGEST_STATUS
        }),
        {
          data: _v3
        } = this.queryDataSync({
          type: _v17.ELiveConnectionQuery.COMPOSER_FIREBASE_CONNECTION_STATE_READY
        });
      _v1 === _v5.EEventConnectionType.ADMIN && _v2 !== _v13.EIngestStatus.ENDED && _v3 && this.emitSignal({
        type: _v18.ELiveSignal.ADMIN_CONNECTION_TYPE_DETECTED,
        data: {
          switchToBroadcasterMode: () => this.switchToBroadcasterMode()
        }
      });
    }
    async detectConnectionType() {
      this.log.info("Detecting current connection type");
      let {
          currentConnectionId: _v0,
          connectionType: _v1
        } = this.context,
        _v2 = await (0, _v6.getRefValue)(this.firebase, this.currentBroadcasterRef),
        _v3 = (0, _v16.queryOptionalViewerSync)(this);
      if (_v3?.ribbonModifier === "possessed") {
        this.log.info("Detected viewer possessed by mod:", _v3?.ribbonModifier), await (0, _v6.onRefDisconnect)(this.firebase, this.currentBroadcasterRef).cancel(), this.setContext({
          connectionType: _v5.EEventConnectionType.ADMIN
        }), this.onConnectionTypeChanged(_v5.EEventConnectionType.ADMIN);
        return;
      }
      _v1 === _v5.EEventConnectionType.BROADCASTER || _v2 ? _v1 !== _v5.EEventConnectionType.ADMIN && (this.log.info("Detected connection type:", _v5.EEventConnectionType.ADMIN), await (0, _v6.onRefDisconnect)(this.firebase, this.currentBroadcasterRef).cancel(), this.setContext({
        connectionType: _v5.EEventConnectionType.ADMIN
      }), this.onConnectionTypeChanged(_v5.EEventConnectionType.ADMIN)) : (this.log.info("Broadcaster spot is free, forcing broadcaster mode", _v0), await Promise.all([(0, _v6.setRefValue)(this.firebase, this.currentBroadcasterRef, _v0), (0, _v6.onRefDisconnect)(this.firebase, this.currentBroadcasterRef).remove()]));
    }
    createCurrentTabParticipant() {
      let {
          currentConnectionId: _v0
        } = this.context,
        _v1 = (0, _v16.queryOptionalViewerSync)(this);
      return {
        id: _v0,
        name: _v1?.user?.name || "unknown",
        connectedAt: (0, _v8.getAbsoluteNow)(),
        isPossessedByMod: _v1?.ribbonModifier === "possessed",
        avatarUrl: (0, _v14.getUserAvatar)(_v1?.user, {
          maximalAllowedWidth: 80
        })?.link || null
      };
    }
    assertIsInitialized() {
      if (!this.currentBroadcasterRef || !this.currentTabPresenceRef || !this.participantsRef) throw (0, _v10.trackLiveError)("Presence manager is not initialized.", {
        method: "assertIsInitialized",
        category: _v9.ELiveErrorCategory.LIVE
      }), Error("Presence manager is not initialized.");
    }
    dispose() {
      this.log.info("Dispose connection presence");
      let {
        connectionType: _v0
      } = this.context;
      _v0 === _v5.EEventConnectionType.BROADCASTER && this.currentBroadcasterRef && ((0, _v6.removeRefValue)(this.firebase, this.currentBroadcasterRef).then(() => this.log.info("Disposed presence broadcaster status")), (0, _v6.onRefDisconnect)(this.firebase, this.currentBroadcasterRef).cancel().then(() => this.log.info("Deactivated presence broadcaster status hook"))), this.currentTabPresenceRef && (0, _v6.removeRefValue)(this.firebase, this.currentTabPresenceRef).then(() => "Disposed current presence status");
    }
    async onChatApplicationReady({
      data: {
        firebase: _v0,
        app: _v1,
        sessionId: _v2
      }
    }) {
      var _v3, _v4, _v5, _v6, _v7, _v8, _v9;
      let _v10, _v11, _v12, _v13, _v14;
      this.firebase = _v0;
      let {
          currentConnectionId: _v15
        } = this.context,
        _v16 = (0, _v6.getRealtimeDatabase)(_v0, _v1);
      this.log.info("🚀Initializing presence connection"), this.participantsRef = (0, _v6.getDatabaseRef)(_v0, _v16, `/participants/${_v2}`), this.currentTabPresenceRef = (0, _v6.getDatabaseRef)(_v0, _v16, `/participants/${_v2}/${_v15}`), this.currentBroadcasterRef = (0, _v6.getDatabaseRef)(_v0, _v16, `/active_broadcaster/${_v2}`), this.connectionStatusRef = (0, _v6.getDatabaseRef)(_v0, _v16, ".info/connected"), await _v11(this, this.participantsRef), this.addUnSubscribers([() => (0, _v6.onRefDisconnect)(_v0, this.currentTabPresenceRef).cancel(), (_v3 = this, _v4 = this.connectionStatusRef, _v5 = this.currentTabPresenceRef, _v10 = !1, _v11 = async _v0 => {
        let {
            isConnected: _v1
          } = _v3.context,
          _v2 = _v0.val(),
          _v3 = !_v1 && _v2,
          _v4 = !_v2 && !0 === _v1;
        if (_v10 = _v2, _v4) _v3.log.info("Disconnecting from fb presence");else if (_v3) {
          if ((0, _v6.onRefDisconnect)(_v3.firebase, _v5).remove(), _v3.log.info("Reconnecting to fb presence"), !_v10) return _v3.log.warn("Disconnected before saving presence");
          await (0, _v6.setRefValue)(_v3.firebase, _v5, _v3.createCurrentTabParticipant()), _v3.detectConnectionType();
        } else _v3.log.info("Initializing fb presence");
        _v3.setContext({
          isConnected: _v2
        });
      }, (0, _v6.onRefEvent)(_v3.firebase, _v4, "value", _v11, "presence-status"), () => (0, _v6.offRefEvent)(_v3.firebase, _v4, "value", _v11)), (_v6 = this, _v7 = this.participantsRef, _v6.log.info("Setup current event participants presence"), _v12 = _v0 => {
        let {
            eventConnections: _v1
          } = _v6.context,
          _v2 = _v0.val(),
          _v3 = (0, _v8.getDifferenceBetweenTwoTimeStamps)(_v2.connectedAt, (0, _v8.getAbsoluteNow)());
        _v3.days >= _v6.MAX_PARTICIPANTS_LIFE_TIME_IN_DAYS ? _v12(_v6, _v2, _v3) : (_v6.log.info("Event participant detected:", _v2.connectedAt, _v2.id, _v2.name), _v6.setContext({
          eventConnections: {
            ..._v1,
            [_v2.id]: _v2
          }
        }));
      }, _v13 = _v0 => {
        let {
          eventConnections: _v1
        } = _v6.context;
        _v1[_v0.key] && (_v6.log.info("Event participant left:", _v0.key), _v6.setContext({
          eventConnections: (0, _v7.omit)(_v1, _v0.key)
        }));
      }, (0, _v6.onRefEvent)(_v6.firebase, _v7, "child_added", _v12, "participant-added"), (0, _v6.onRefEvent)(_v6.firebase, _v7, "child_removed", _v13, "participant-removed"), () => {
        (0, _v6.offRefEvent)(_v6.firebase, _v7, "child_added", _v12), (0, _v6.offRefEvent)(_v6.firebase, _v7, "child_removed", _v13);
      }), (_v8 = this, _v9 = this.currentBroadcasterRef, _v14 = _v0 => {
        let {
            connectionType: _v1,
            currentConnectionId: _v2
          } = _v8.context,
          _v3 = _v0.val() || null,
          _v4 = _v3 === _v2;
        _v1 === _v5.EEventConnectionType.BROADCASTER && _v3 !== _v2 ? (_v8.setContext({
          broadcasterId: _v3,
          connectionType: _v5.EEventConnectionType.ADMIN
        }), _v8.onConnectionTypeChanged(_v5.EEventConnectionType.ADMIN), (0, _v6.onRefDisconnect)(_v8.firebase, _v9).cancel()) : _v4 ? (_v8.setContext({
          broadcasterId: _v3,
          connectionType: _v5.EEventConnectionType.BROADCASTER
        }), _v8.onConnectionTypeChanged(_v5.EEventConnectionType.BROADCASTER), (0, _v6.onRefDisconnect)(_v8.firebase, _v9).remove()) : _v8.setContext({
          broadcasterId: _v3
        });
      }, (0, _v6.onRefEvent)(_v8.firebase, _v9, "value", _v14, "active-broadcaster"), () => (0, _v6.offRefEvent)(_v8.firebase, _v9, "value", _v14))]);
    }
    onCurrentEventConnectionTypeRequested() {
      return this.context.connectionType;
    }
  }
  (0, _v1._)([(0, _v2.OnSignal)(_v18.ELiveRealtimeSignal.FIREBASE_COMPOSER_APP_READY)], _v19.prototype, "onChatApplicationReady", null), (0, _v1._)([(0, _v2.OnQuery)(_v17.ELiveConnectionQuery.CURRENT_EVENT_CONNECTION_TYPE)], _v19.prototype, "onCurrentEventConnectionTypeRequested", null), _v0.s(["PresenceManager", 0, _v19], 0);
}