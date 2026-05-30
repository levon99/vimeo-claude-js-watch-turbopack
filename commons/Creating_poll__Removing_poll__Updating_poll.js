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
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0);
  async function _v18(_v0, _v1) {
    _v0.log.info("Creating poll:", _v1), _v0.assertIsInitialized();
    let _v2 = await (0, _v12.pushRefValue)(_v0.firebase, _v0.pollListRef),
      _v3 = (0, _v13.createPollInteractionObject)({
        id: _v2.key,
        question: _v1.question,
        options: _v1.options.map(_v0 => (0, _v13.createPollOptionInteractionObject)(_v0)),
        state: _v1.state,
        createdAt: (0, _v15.getAbsoluteNow)()
      }, {
        isDbModel: !0
      });
    await (0, _v12.setRefValue)(_v0.firebase, _v2, {
      ..._v3,
      createdAt: _v0.firebase.database.serverTimestamp()
    }), _v0.emitSignal({
      type: _v17.ELiveGraphicsSignal.POLL_OBJECT_UPDATED,
      data: _v3
    });
  }
  async function _v19(_v0, _v1) {
    _v0.log.info("Removing poll:", _v1), _v0.assertIsInitialized(), await (0, _v12.removeRefValue)(_v0.firebase, (0, _v12.getRefChild)(_v0.firebase, _v0.pollListRef, _v1)), _v0.emitSignal({
      type: _v17.ELiveGraphicsSignal.POLL_OBJECT_REMOVED,
      data: _v1
    });
  }
  async function _v20(_v0, _v1, _v2) {
    _v0.log.info("Updating poll:", _v1), _v0.assertIsInitialized();
    let {
        activePollId: _v3
      } = _v0.context,
      _v4 = (0, _v12.getRefChild)(_v0.firebase, _v0.pollListRef, _v1),
      _v5 = _v0.assertPollExists(_v1),
      _v6 = (0, _v13.createPollInteractionObject)({
        ..._v2,
        updatedAt: (0, _v15.getAbsoluteNow)()
      }, {
        isDbModel: !0
      }),
      _v7 = (0, _v12.collectObjectBatchPrescribers)({
        firebase: _v0.firebase,
        ref: _v4,
        object: {
          ..._v6,
          updatedAt: _v0.firebase.database.serverTimestamp()
        },
        keys: ["state", "question", "updatedAt"]
      });
    (0, _v14.range)(_v5.interactionToolsConfig.POLLS.MAX_OPTION_COUNT).forEach(_v0 => {
      let _v1 = (0, _v12.getRefChild)(_v0.firebase, _v4, `options/${_v0}`),
        _v2 = _v6.options[_v0],
        _v3 = _v5.options[_v0];
      if (_v3 || _v2) return _v2 ? _v3 && _v2.id === _v3.id ? _v7.push(...(0, _v12.collectObjectBatchPrescribers)({
        firebase: _v0.firebase,
        ref: _v1,
        keys: ["correct", "text"],
        object: _v2
      })) : _v7.push([_v1, _v2]) : _v7.push([_v1, null]);
    }), _v5.id === _v3 && _v6.state === _v8.EPollState.ARCHIVED && (await _v0.setActivePoll(null)), await (0, _v12.batchedDatabaseUpdate)(_v0.firebase, _v0.rootRef, _v7), _v0.emitSignal({
      type: _v17.ELiveGraphicsSignal.POLL_OBJECT_UPDATED,
      data: _v2
    });
  }
  async function _v21(_v0, _v1) {
    _v0.log.info("Setting active poll:", _v1), _v0.assertIsInitialized(), await (0, _v12.setRefValue)(_v0.firebase, _v0.pollActiveMetaRef, _v1);
  }
  async function _v22(_v0) {
    return _v0.log.info("Removing active poll"), _v21(_v0, null);
  }
  async function _v23(_v0, _v1, _v2) {
    _v0.log.info("Voting for poll option:", _v1, _v2), _v0.assertIsInitialized(), _v0.assertPollExists(_v1);
    let _v3 = (0, _v16.queryInteractionUserSync)(_v0),
      _v4 = String(_v3?.id);
    if (_v4) {
      if (_v2 < 0 || _v2 > _v5.interactionToolsConfig.POLLS.MAX_OPTION_COUNT) throw new _v11.LiveError("Option index out of bounds.");
    } else throw new _v11.LiveError("Auth required to vote for poll.");
    await (0, _v12.setRefValue)(_v0.firebase, (0, _v12.getRefChild)(_v0.firebase, _v0.pollListRef, `${_v1}/options/${_v2}/votes/${_v4}`), {
      userId: _v4
    }), _v0.composerSessionType === _v7.EComposerSessionType.VENUE && (0, _v6.trackVenuesAddPollVote)(_v1, String(_v0.context.polls[_v1].options[_v2].id), _v0.context.polls[_v1].options[_v2].correct), (0, _v9.postPageMessage)(_v10.EInteractionEmbedSignal.POLL_OPTION_VOTED, {
      poll: (0, _v4.default)(_v0.context.polls[_v1]),
      optionIndex: _v2
    }, !0);
  }
  function _v24(_v0) {
    _v0.log.info("Disposing manager"), _v0.disposeSubscribers(), _v0.rootRef = null, _v0.pollListRef = null, _v0.pollActiveMetaRef = null, _v0.setContext({
      activePollId: null,
      polls: {}
    });
  }
  var _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0);
  async function _v29(_v0, _v1) {
    _v0.log.info("Hydrating active poll:", _v1.toString());
    try {
      let _v0 = await (0, _v12.getRefValue)(_v0.firebase, _v1);
      _v0 && (_v0.log.info("Active poll hydrated:", _v0), _v0.setContext({
        activePollId: _v0
      }));
    } catch (_v0) {
      (0, _v27.trackLiveError)(_v0, {
        method: "hydrateActivePoll",
        category: _v28.ELiveErrorCategory.INTERACTION
      });
    }
  }
  async function _v30(_v0, _v1) {
    _v0.log.info("Hydrating polls list:", _v1.toString());
    try {
      let _v0 = (0, _v16.queryInteractionUserSync)(_v0),
        _v1 = String(_v0?.id),
        _v2 = await (0, _v12.getRefValue)(_v0.firebase, _v1);
      if (_v2) {
        let _v0 = Object.entries(_v2).map(([_v0, _v1]) => (0, _v26.transformPoll)(_v0, _v1, _v1)).filter(_v0 => (0, _v27.checkErrorsAndTrack)({
          data: _v0,
          possibleErrors: (0, _v25.collectPollInteractionErrors)(_v0),
          methodName: "hydratePollsList"
        })).reduce((_v0, _v1) => (_v0[_v1.id] = _v1, _v0), {});
        _v0.log.info("Polls hydrated:", _v2), _v0.setContext({
          polls: _v0
        });
      }
    } catch (_v0) {
      (0, _v27.trackLiveError)(_v0, {
        method: "hydrateActivePoll",
        category: _v28.ELiveErrorCategory.INTERACTION
      });
    }
  }
  var _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0);
  class _v35 extends _v34.UnsubscribingContextManager {
    context = {
      pollActions: (0, _v2.createActions)({
        createPoll: _v0 => this.createPoll(_v0),
        removeActivePoll: () => this.removeActivePoll(),
        deletePoll: _v0 => this.deletePoll(_v0),
        updatePoll: (_v0, _v1) => this.updatePoll(_v0, _v1),
        setActivePoll: _v0 => this.setActivePoll(_v0),
        voteForPollOption: (_v0, _v1) => this.voteForPollOption(_v0, _v1)
      }),
      isHydrated: !1,
      hydratedAt: null,
      activePollId: null,
      polls: {},
      pollsHistory: []
    };
    log = new _v3.Logger("🎨POLL");
    isModuleActive = !1;
    composerSessionType;
    firebase;
    rootRef = null;
    pollActiveMetaRef = null;
    pollListRef = null;
    constructor(_v0) {
      super(), this.isModuleActive = (0, _v33.checkModuleIsActive)(_v0?.interaction?.feature?.module, _v8.EInteractionModule.POLL), this.composerSessionType = _v0?.sessionType;
    }
    onProvisionEnded() {
      return _v24(this);
    }
    async createPoll(_v0) {
      return (0, _v27.withLiveErrorTracking)(() => _v18(this, _v0), {
        category: _v28.ELiveErrorCategory.INTERACTION,
        method: "createPoll",
        data: {
          pollData: _v0
        }
      });
    }
    async deletePoll(_v0) {
      return (0, _v27.withLiveErrorTracking)(() => _v19(this, _v0), {
        category: _v28.ELiveErrorCategory.INTERACTION,
        method: "deletePoll",
        data: {
          pollId: _v0
        }
      });
    }
    async updatePoll(_v0, _v1) {
      return (0, _v27.withLiveErrorTracking)(() => _v20(this, _v0, _v1), {
        category: _v28.ELiveErrorCategory.INTERACTION,
        method: "updatePoll",
        data: {
          pollId: _v0,
          pollData: _v1
        }
      });
    }
    async setActivePoll(_v0) {
      return (0, _v27.withLiveErrorTracking)(() => _v21(this, _v0), {
        category: _v28.ELiveErrorCategory.INTERACTION,
        method: "setActivePoll",
        data: {
          pollId: _v0
        }
      });
    }
    async removeActivePoll() {
      return (0, _v27.withLiveErrorTracking)(() => _v22(this), {
        category: _v28.ELiveErrorCategory.INTERACTION,
        method: "removeActivePoll"
      });
    }
    async voteForPollOption(_v0, _v1) {
      return (0, _v27.withLiveErrorTracking)(() => _v23(this, _v0, _v1), {
        category: _v28.ELiveErrorCategory.INTERACTION,
        method: "voteForPollOption"
      });
    }
    assertPollExists(_v0) {
      let _v1 = this.context.polls[_v0];
      if (_v1) return _v1;
      throw new _v11.LiveError("Cannot modify poll that does not exist.");
    }
    assertIsInitialized() {
      if (!this.pollListRef || !this.pollActiveMetaRef || !this.rootRef) throw new _v11.LiveError("Polls manager is not initialized.", {
        code: _v32.ELiveErrorCode.INITIALIZATION
      });
    }
    async onChatApplicationReady({
      data: {
        firebase: _v0,
        app: _v1,
        roomId: _v2,
        metadata: _v3
      }
    }) {
      if (this.firebase = _v0, this.isModuleActive) {
        var _v4, _v5, _v6, _v7;
        let _v0, _v1, _v2, _v3, _v4, _v5;
        this.log.info("🚀Initializing poll connection:", _v2), (0, _v27.trackLiveAction)("fb_init_poll_manager");
        let _v6 = (0, _v12.getRealtimeDatabase)(_v0, _v1);
        this.pollActiveMetaRef = (0, _v12.getDatabaseRef)(_v0, _v6, _v31.firebaseConfig.REFS.INTERACTION.POLLS.ACTIVE(_v2)), this.pollListRef = (0, _v12.getDatabaseRef)(_v0, _v6, _v31.firebaseConfig.REFS.INTERACTION.POLLS.LIST(_v2)), this.rootRef = (0, _v12.getDatabaseRootRef)(_v0, _v6), await Promise.all([_v29(this, this.pollActiveMetaRef), _v30(this, this.pollListRef)]).finally(() => {
          this.log.info("Hydration finished"), this.setContext({
            isHydrated: !0,
            hydratedAt: null,
            pollsHistory: _v3?.connections?.pollsHistory || []
          });
        }), this.addUnSubscribers([(_v4 = this, _v5 = this.pollListRef, _v0 = (0, _v16.queryInteractionUserSync)(_v4), _v1 = String(_v0?.id), _v2 = _v0 => {
          let {
              polls: _v1
            } = _v4.context,
            _v2 = (0, _v26.transformPoll)(_v0.key, _v0.val(), _v1);
          if (!_v1[_v0.key] && (0, _v27.checkErrorsAndTrack)({
            data: _v2,
            possibleErrors: (0, _v25.collectPollInteractionErrors)(_v2),
            methodName: "onPollAdded"
          })) {
            let _v0 = {
              ..._v1,
              [_v2.id]: _v2
            };
            _v4.log.info("Loaded poll:", _v2.id), _v4.setContext({
              polls: _v0
            });
          }
        }, _v3 = _v0 => {
          let {
              polls: _v1
            } = _v4.context,
            _v2 = _v0.key,
            _v3 = {
              ..._v1
            };
          delete _v3[_v2], _v4.log.info("Removed poll:", _v2), _v4.setContext({
            polls: _v3
          });
        }, _v4 = _v0 => {
          let {
              polls: _v1
            } = _v4.context,
            _v2 = (0, _v26.transformPoll)(_v0.key, _v0.val(), _v1);
          if ((0, _v27.checkErrorsAndTrack)({
            data: _v2,
            possibleErrors: (0, _v25.collectPollInteractionErrors)(_v2),
            methodName: "onPollUpdated"
          })) {
            let _v0 = {
              ..._v1,
              [_v2.id]: _v2
            };
            _v4.log.info("Updated poll:", _v2.id, _v2), _v4.setContext({
              polls: _v0
            });
          }
        }, (0, _v12.onRefEvent)(_v4.firebase, _v5, "child_added", _v2, "polls-list"), (0, _v12.onRefEvent)(_v4.firebase, _v5, "child_removed", _v3, "polls-list"), (0, _v12.onRefEvent)(_v4.firebase, _v5, "child_changed", _v4, "polls-list"), () => {
          (0, _v12.offRefEvent)(_v4.firebase, _v5, "child_added", _v2), (0, _v12.offRefEvent)(_v4.firebase, _v5, "child_removed", _v3), (0, _v12.offRefEvent)(_v4.firebase, _v5, "child_changed", _v4);
        }), (_v6 = this, _v7 = this.pollActiveMetaRef, _v5 = _v0 => {
          let _v1 = _v0.val();
          _v1 !== _v6.context.activePollId && (_v6.log.info("Active poll changed:", _v1), _v6.setContext({
            activePollId: _v1
          }));
        }, (0, _v12.onRefEvent)(_v6.firebase, _v7, "value", _v5, "active-poll-id"), () => (0, _v12.offRefEvent)(_v6.firebase, _v7, "value", _v5))]);
      } else this.log.info("🚀Skipping poll connection");
    }
    onInteractionSessionLogout() {
      return _v24(this);
    }
  }
  (0, _v1._)([(0, _v2.OnSignal)(_v17.ELiveRealtimeSignal.FIREBASE_INTERACTION_APP_READY)], _v35.prototype, "onChatApplicationReady", null), (0, _v1._)([(0, _v2.OnSignal)(_v17.ELiveSignal.INTERACTION_SESSION_LOGOUT)], _v35.prototype, "onInteractionSessionLogout", null), _v0.s(["PollManager", 0, _v35], 0);
}