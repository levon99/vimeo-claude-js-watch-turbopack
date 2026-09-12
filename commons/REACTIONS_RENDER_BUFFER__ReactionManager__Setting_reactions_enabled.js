{
  "use strict";

  _v0.s(["REACTIONS_RENDER_BUFFER", () => _v20, "ReactionManager", () => _v21], 0);
  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0);
  async function _v10(_v0, _v1) {
    _v0.log.info("Setting reactions enabled:", _v1), _v0.assertIsInitialized(), await (0, _v7.setRefValue)(_v0.firebase, _v0.metaReactionsEnabledRef, _v1);
  }
  async function _v11(_v0, _v1) {
    if (!_v1) throw new _v6.LiveError("No emoji supplied for reaction.", {
      code: _v5.ELiveErrorCode.INVALID_PARAMETERS
    });
    if (_v0.assertIsInitialized(), !0 !== _v0.context.isEnabled) throw new _v6.LiveError("Reactions are disabled for this room.", {
      code: _v5.ELiveErrorCode.OPERATION_RESTRICTED
    });
    let _v2 = (0, _v8.getAbsoluteNow)();
    if (_v0.pruneSentReactionTimestamps(_v2), _v0.sentReactionTimestamps.length >= _v4.interactionToolsConfig.REACTIONS.MAX_REACTIONS_PER_WINDOW) throw _v0.context.isRateLimited || _v0.setContext({
      isRateLimited: !0
    }), _v0.scheduleRateLimitReset(), new _v6.LiveError("Emoji break! Try again in a moment.", {
      code: _v5.ELiveErrorCode.OPERATION_RESTRICTED
    });
    let _v3 = (0, _v9.queryInteractionUserSync)(_v0);
    if (!_v3) throw new _v6.LiveError("User should be authorized to send reactions.", {
      code: _v5.ELiveErrorCode.UNAUTHORIZED
    });
    _v0.sentReactionTimestamps.push(_v2), _v0.sentReactionTimestamps.length >= _v4.interactionToolsConfig.REACTIONS.MAX_REACTIONS_PER_WINDOW && (_v0.setContext({
      isRateLimited: !0
    }), _v0.scheduleRateLimitReset());
    try {
      await (0, _v7.pushRefValue)(_v0.firebase, _v0.reactionsRef, {
        emoji: _v1,
        createdAt: _v0.firebase.database.serverTimestamp(),
        user: {
          id: String(_v3.id),
          displayName: _v3.displayName
        }
      });
    } catch (_v0) {
      let _v1 = _v0.sentReactionTimestamps.lastIndexOf(_v2);
      throw -1 !== _v1 && _v0.sentReactionTimestamps.splice(_v1, 1), _v0.checkRateLimitStatus(), _v0;
    }
    _v0.log.info("Sent reaction:", _v1);
  }
  function _v12(_v0) {
    _v0.log.info("Disposing manager"), _v0.disposeSubscribers(), null !== _v0.rateLimitTimer && (clearTimeout(_v0.rateLimitTimer), _v0.rateLimitTimer = null), _v0.sentReactionTimestamps = [], _v0.metaReactionsEnabledRef = null, _v0.reactionsRef = null, _v0.setContext({
      isEnabled: null,
      isRateLimited: !1,
      reactions: [],
      config: {
        roomId: -1,
        isCreator: !1
      }
    });
  }
  var _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0);
  let _v20 = 24;
  class _v21 extends _v18.UnsubscribingContextManager {
    context = {
      reactionActions: (0, _v2.createActions)({
        enableReactions: () => this.setReactionsEnabled(!0),
        disableReactions: () => this.setReactionsEnabled(!1),
        sendReaction: _v0 => this.sendReaction(_v0)
      }),
      isEnabled: null,
      isRateLimited: !1,
      reactions: [],
      config: {
        roomId: -1,
        isCreator: !1
      }
    };
    log = new _v3.Logger("🎉RCT");
    isModuleActive = !1;
    firebase;
    metaReactionsEnabledRef = null;
    reactionsRef = null;
    sentReactionTimestamps = [];
    rateLimitTimer = null;
    constructor(_v0) {
      super(), this.isModuleActive = (0, _v17.checkModuleIsActive)(_v0?.interaction?.feature?.module, _v16.EInteractionModule.REACTIONS);
    }
    onProvisionEnded() {
      return _v12(this);
    }
    pruneSentReactionTimestamps(_v0 = (0, _v8.getAbsoluteNow)()) {
      let _v1 = _v0 - _v4.interactionToolsConfig.REACTIONS.RATE_LIMIT_WINDOW_MS;
      this.sentReactionTimestamps = this.sentReactionTimestamps.filter(_v0 => _v0 > _v1);
    }
    checkRateLimitStatus() {
      let _v0 = (0, _v8.getAbsoluteNow)();
      this.pruneSentReactionTimestamps(_v0), this.sentReactionTimestamps.length >= _v4.interactionToolsConfig.REACTIONS.MAX_REACTIONS_PER_WINDOW ? (this.context.isRateLimited || this.setContext({
        isRateLimited: !0
      }), this.scheduleRateLimitReset()) : (this.context.isRateLimited && this.setContext({
        isRateLimited: !1
      }), null !== this.rateLimitTimer && (clearTimeout(this.rateLimitTimer), this.rateLimitTimer = null));
    }
    scheduleRateLimitReset() {
      if (null !== this.rateLimitTimer && (clearTimeout(this.rateLimitTimer), this.rateLimitTimer = null), 0 === this.sentReactionTimestamps.length) return;
      let _v0 = this.sentReactionTimestamps[0],
        _v1 = (0, _v8.getAbsoluteNow)(),
        _v2 = Math.max(0, _v4.interactionToolsConfig.REACTIONS.RATE_LIMIT_WINDOW_MS - (_v1 - _v0) + 10);
      this.rateLimitTimer = setTimeout(() => {
        this.rateLimitTimer = null, this.checkRateLimitStatus();
      }, _v2);
    }
    assertIsInitialized() {
      if (!this.metaReactionsEnabledRef || !this.reactionsRef) throw new _v6.LiveError("Reaction manager is not initialized.", {
        code: _v5.ELiveErrorCode.INITIALIZATION
      });
    }
    async setReactionsEnabled(_v0) {
      return (0, _v14.withLiveErrorTracking)(() => _v10(this, _v0), {
        method: "setReactionsEnabled",
        category: _v13.ELiveErrorCategory.INTERACTION,
        data: {
          metaReactionsEnabledRef: this.metaReactionsEnabledRef?.toString()
        }
      });
    }
    async sendReaction(_v0) {
      return (0, _v14.withLiveErrorTracking)(() => _v11(this, _v0), {
        method: "sendReaction",
        category: _v13.ELiveErrorCategory.INTERACTION,
        data: {
          reactionsRef: this.reactionsRef?.toString()
        }
      });
    }
    async onReactionApplicationReady({
      data: {
        firebase: _v0,
        app: _v1,
        roomId: _v2,
        user: _v3
      }
    }) {
      var _v4, _v5, _v6, _v7;
      let _v8, _v9, _v10;
      if (this.firebase = _v0, !this.isModuleActive) return void this.log.info("🎉Skipping reactions connection");
      this.log.info("🎉Initializing reactions connection:", _v2, _v3), (0, _v14.trackLiveAction)("fb_init_reaction_manager");
      let _v11 = (0, _v7.getRealtimeDatabase)(_v0, _v1);
      this.metaReactionsEnabledRef = (0, _v7.getDatabaseRef)(_v0, _v11, _v15.firebaseConfig.REFS.INTERACTION.REACTIONS.META_ENABLED(_v2)), this.reactionsRef = (0, _v7.getDatabaseRef)(_v0, _v11, _v15.firebaseConfig.REFS.INTERACTION.REACTIONS.LIST(_v2)), this.disposeSubscribers(), this.setContext({
        config: {
          roomId: _v2,
          isCreator: !!_v3.isCreator
        },
        reactions: []
      });
      let _v12 = [(_v4 = this, _v5 = this.metaReactionsEnabledRef, _v8 = _v0 => {
        let _v1 = !!_v0.val();
        _v1 !== _v4.context.isEnabled && (_v4.log.info("Reactions status change:", _v1), _v4.setContext({
          isEnabled: _v1,
          reactions: _v1 ? [] : _v4.context.reactions
        }));
      }, (0, _v7.onRefEvent)(_v4.firebase, _v5, "value", _v8, "reactions-status"), () => (0, _v7.offRefEvent)(_v4.firebase, _v5, "value", _v8)), (_v6 = this, _v7 = this.reactionsRef, _v9 = (0, _v8.getAbsoluteNow)(), _v10 = _v0 => {
        let _v1 = _v0.val();
        if (_v0.key && _v1 && _v1.emoji && "number" == typeof _v1.createdAt && !(_v1.createdAt < _v9 - 0)) try {
          _v6.setContext(({
            reactions: _v0
          }) => ({
            reactions: [..._v0, {
              key: _v0.key,
              emoji: _v1.emoji,
              createdAt: _v1.createdAt,
              user: _v1.user
            }].slice(-_v20)
          }));
        } catch (_v0) {
          (0, _v14.trackLiveError)(_v0, {
            category: _v13.ELiveErrorCategory.INTERACTION,
            method: "onReactionAdded",
            data: {
              key: _v0.key,
              roomId: _v6.context.config.roomId
            }
          });
        }
      }, (0, _v7.onRefEvent)(_v6.firebase, _v6.firebase.database.query(_v7, _v6.firebase.database.limitToLast(1)), "child_added", _v10, "reactions"), () => (0, _v7.offRefEvent)(_v6.firebase, _v7, "child_added", _v10))];
      this.addUnSubscribers(_v12);
    }
    onInteractionSessionLogout() {
      return _v12(this);
    }
  }
  (0, _v1._)([(0, _v2.OnSignal)(_v19.ELiveRealtimeSignal.FIREBASE_INTERACTION_APP_READY)], _v21.prototype, "onReactionApplicationReady", null), (0, _v1._)([(0, _v2.OnSignal)(_v19.ELiveSignal.INTERACTION_SESSION_LOGOUT)], _v21.prototype, "onInteractionSessionLogout", null);
}