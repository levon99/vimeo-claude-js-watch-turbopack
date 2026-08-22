{
  "use strict";

  _v0.s(["ChatManager", () => _v20, "UNINITIALIZED_ROOM_ID", () => _v19]);
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
    _v17 = _v0.i(0),
    _v18 = _v0.i(0);
  let _v19 = -1;
  class _v20 extends _v15.UnsubscribingContextManager {
    static createNewChatDescriptor() {
      return (0, _v2.createNested)({
        participants: {},
        messages: {},
        banList: {}
      });
    }
    static createBufferConfig(_v0, _v1, _v2) {
      return {
        name: _v1,
        initialValue: {
          messages: {},
          participants: {}
        },
        throttleDelay: _v7.interactionToolsConfig.CHAT.MESSAGE_UPDATE_THROTTLE,
        onUpdate: _v0 => {
          _v0.context.isHydrated && _v0.setContext({
            [_v2]: _v0.context[_v2].asMerged(_v0)
          });
        }
      };
    }
    context = {
      chatActions: (0, _v2.createActions)({
        enableChat: () => this.setChatEnabled(!0),
        disableChat: () => this.setChatEnabled(!1),
        sendMessage: (_v0, _v1) => this.sendMessage(_v0, _v1),
        deleteMessage: (_v0, _v1) => this.deleteMessage(_v0, _v1),
        blockChatUser: (_v0, _v1) => this.blockChatUser(_v0, _v1),
        unblockChatUser: (_v0, _v1) => this.unblockChatUser(_v0, _v1)
      }),
      [_v9.EChatType.PUBLIC]: _v20.createNewChatDescriptor(),
      [_v9.EChatType.BACKSTAGE]: _v20.createNewChatDescriptor(),
      isEnabled: null,
      enabledAt: null,
      isBackstageEnabled: null,
      isHydrated: !1,
      hydratedAt: null,
      config: {
        roomId: _v19,
        isCreator: !1
      },
      chatSessionsHistory: []
    };
    log = new _v3.Logger("🥨CHT");
    isBackstageAllowed = !1;
    isModuleActive = !1;
    firebase;
    publicChatBuffer = null;
    backstageChatBuffer = null;
    publicChatRef = null;
    guestsChatRef = null;
    metaChatEnabledRef = null;
    publicChatBanListRef = null;
    constructor(_v0) {
      super(), this.isBackstageAllowed = !!(_v0?.interaction?.feature?.isBackstageAllowed && !_v0?.interaction?.feature?.isManagementDisabled), this.isModuleActive = (0, _v13.checkModuleIsActive)(_v0?.interaction?.feature?.module, _v9.EInteractionModule.CHAT);
    }
    onProvisionEnded() {
      return (0, _v4.dispose)(this);
    }
    assertIsInitialized() {
      if (!this.publicChatRef || !this.guestsChatRef || !this.metaChatEnabledRef || !this.publicChatBanListRef) throw new _v10.LiveError("Chat manager is not initialized.", {
        code: _v8.ELiveErrorCode.INITIALIZATION
      });
    }
    getChatRef(_v0) {
      return this.assertIsInitialized(), _v0 === _v9.EChatType.PUBLIC ? this.publicChatRef : this.guestsChatRef;
    }
    getChatBanListRef(_v0) {
      return this.assertIsInitialized(), _v0 === _v9.EChatType.PUBLIC ? this.publicChatBanListRef : null;
    }
    async setChatEnabled(_v0) {
      return (0, _v17.withLiveErrorTracking)(() => (0, _v4.setChatEnabled)(this, _v0), {
        method: "setChatEnabled",
        category: _v16.ELiveErrorCategory.INTERACTION,
        data: {
          metaChatEnabledRef: this.metaChatEnabledRef?.toString()
        }
      });
    }
    async sendMessage(_v0, _v1) {
      return (0, _v17.withLiveErrorTracking)(() => (0, _v4.sendChatMessage)(this, _v0, _v1), {
        method: "sendChatMessage",
        category: _v16.ELiveErrorCategory.INTERACTION,
        data: {
          publicChatRef: this.publicChatRef?.toString(),
          guestsChatRef: this.guestsChatRef?.toString()
        }
      });
    }
    async deleteMessage(_v0, _v1) {
      return (0, _v17.withLiveErrorTracking)(() => (0, _v4.deleteChatMessage)(this, _v0, _v1), {
        method: "deleteChatMessage",
        category: _v16.ELiveErrorCategory.INTERACTION
      });
    }
    async blockChatUser(_v0, _v1) {
      return (0, _v17.withLiveErrorTracking)(() => (0, _v4.blockChatUser)(this, _v0, _v1), {
        method: "blockChatUser",
        category: _v16.ELiveErrorCategory.INTERACTION
      });
    }
    async unblockChatUser(_v0, _v1) {
      return (0, _v17.withLiveErrorTracking)(() => (0, _v4.unblockChatUser)(this, _v0, _v1), {
        method: "unblockChatUser",
        category: _v16.ELiveErrorCategory.INTERACTION
      });
    }
    async onChatApplicationReady({
      data: {
        firebase: _v0,
        app: _v1,
        roomId: _v2,
        user: _v3,
        metadata: _v4
      }
    }) {
      if (this.firebase = _v0, this.isModuleActive) {
        this.log.info("🚀Initializing chat connection:", _v2, _v3), (0, _v17.trackLiveAction)("fb_init_chat_manager");
        let _v0 = (0, _v11.getRealtimeDatabase)(_v0, _v1);
        this.publicChatRef = (0, _v11.getDatabaseRef)(_v0, _v0, _v6.firebaseConfig.REFS.INTERACTION.CHAT.PUBLIC(_v2)), this.guestsChatRef = (0, _v11.getDatabaseRef)(_v0, _v0, _v6.firebaseConfig.REFS.INTERACTION.CHAT.GUEST(_v2)), this.metaChatEnabledRef = (0, _v11.getDatabaseRef)(_v0, _v0, _v6.firebaseConfig.REFS.INTERACTION.CHAT.META_ENABLED(_v2)), this.publicChatBanListRef = (0, _v11.getDatabaseRef)(_v0, _v0, _v6.firebaseConfig.REFS.INTERACTION.CHAT.PUBLIC_BANS(_v2));
        let _v1 = this.isBackstageAllowed;
        this.log.info("🚀Backstage access status:", _v1), this.setContext({
          isBackstageEnabled: _v1,
          chatSessionsHistory: _v4?.connections?.chatHistory || [],
          config: {
            roomId: _v2,
            isCreator: !!_v3.isCreator
          }
        }), this.publicChatBuffer = new _v14.InMemoryBuffer(_v20.createBufferConfig(this, "publicChatBuffer", _v9.EChatType.PUBLIC));
        let _v2 = [(0, _v5.hydrateChatHistory)(this, _v9.EChatType.PUBLIC, this.publicChatRef, this.publicChatBuffer), (0, _v5.hydrateBanList)(this, _v9.EChatType.PUBLIC)],
          _v3 = [(0, _v5.subscribeToChatStatus)(this, this.metaChatEnabledRef), (0, _v5.subscribeToChatMessages)(this, _v9.EChatType.PUBLIC, this.publicChatRef, this.publicChatBuffer), (0, _v5.subscribeToBanList)(this, _v9.EChatType.PUBLIC)];
        if (_v1 && (this.backstageChatBuffer = new _v14.InMemoryBuffer(_v20.createBufferConfig(this, "backstageChatBuffer", _v9.EChatType.BACKSTAGE)), _v2.push((0, _v5.hydrateChatHistory)(this, _v9.EChatType.BACKSTAGE, this.guestsChatRef, this.backstageChatBuffer)), _v3.push((0, _v5.subscribeToChatMessages)(this, _v9.EChatType.BACKSTAGE, this.guestsChatRef, this.backstageChatBuffer))), await Promise.all(_v2), this.IS_DISPOSED) {
          this.log.info("Manager disposed during hydration, unsubscribing"), _v3.forEach(_v0 => _v0());
          return;
        }
        this.setContext({
          isHydrated: !0,
          hydratedAt: (0, _v12.getAbsoluteNow)()
        }), this.addUnSubscribers(_v3), this.publicChatBuffer?.flush(), this.backstageChatBuffer?.flush();
      } else this.log.info("🚀Skipping chat connection");
    }
    onInteractionSessionLogout() {
      return (0, _v4.dispose)(this);
    }
  }
  (0, _v1._)([(0, _v2.OnSignal)(_v18.ELiveRealtimeSignal.FIREBASE_INTERACTION_APP_READY)], _v20.prototype, "onChatApplicationReady", null), (0, _v1._)([(0, _v2.OnSignal)(_v18.ELiveSignal.INTERACTION_SESSION_LOGOUT)], _v20.prototype, "onInteractionSessionLogout", null);
}