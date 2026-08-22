{
  "use strict";

  _v0.s(["blockChatUser", () => _v13, "deleteChatMessage", () => _v11, "dispose", () => _v15, "sendChatMessage", () => _v12, "setChatEnabled", () => _v10, "unblockChatUser", () => _v14]);
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
    _v0.log.info("Setting chat enabled:", _v1), _v0.assertIsInitialized(), await (0, _v5.setRefValue)(_v0.firebase, _v0.metaChatEnabledRef, _v1);
  }
  async function _v11(_v0, _v1, _v2) {
    if (!_v2) throw new _v4.LiveError("No message id supplied for removal.", {
      code: _v2.ELiveErrorCode.INVALID_PARAMETERS
    });
    _v0.assertIsInitialized();
    let _v3 = _v0.getChatRef(_v1);
    _v0.log.info("Deleting message", _v2), await (0, _v5.removeRefValue)(_v0.firebase, (0, _v5.getRefChild)(_v0.firebase, _v3, _v2));
  }
  async function _v12(_v0, _v1, _v2) {
    _v0.log.info("Sending chat message"), _v0.assertIsInitialized();
    let _v3 = (0, _v8.queryInteractionUserSync)(_v0);
    if (!_v3) throw new _v4.LiveError("User should be authorized to send chat messages.", {
      code: _v2.ELiveErrorCode.UNAUTHORIZED
    });
    let _v4 = _v0.getChatRef(_v1),
      _v5 = (0, _v6.createMessageInteractionObject)({
        contents: _v2,
        createdAt: (0, _v7.getAbsoluteNow)(),
        user: (0, _v6.createMessageAuthorInteractionObject)({
          id: String(_v3.id),
          displayName: _v3.displayName,
          avatarUrl: _v3.avatarUrl,
          isCreator: !!_v3.isCreator
        })
      }),
      _v6 = (0, _v7.getAbsoluteNow)();
    await (0, _v5.pushRefValue)(_v0.firebase, _v4, {
      ..._v5,
      createdAt: _v0.firebase.database.serverTimestamp()
    }), (0, _v9.trackLiveAction)("chat_message_sent", {
      chatType: _v3.CHAT_TYPE_LABELS[_v1],
      durationMs: (0, _v7.getAbsoluteNow)() - _v6
    }), _v0.log.info("Sent chat message:", _v2.length);
  }
  async function _v13(_v0, _v1, _v2) {
    if (!_v2) throw new _v4.LiveError("No user id supplied to block user.", {
      code: _v2.ELiveErrorCode.INVALID_PARAMETERS
    });
    _v0.assertIsInitialized();
    let _v3 = _v0.getChatBanListRef(_v1);
    _v3 && (_v0.log.info("Blocking chat user:", _v2), await (0, _v5.pushRefValue)(_v0.firebase, _v3, {
      userId: _v2
    }));
  }
  async function _v14(_v0, _v1, _v2) {
    if (!_v2) throw new _v4.LiveError("No user id supplied to unblock user.", {
      code: _v2.ELiveErrorCode.INVALID_PARAMETERS
    });
    _v0.assertIsInitialized();
    let _v3 = _v0.getChatBanListRef(_v1);
    _v3 && (_v0.log.info("Unblocking chat user:", _v2), (await _v0.firebase.database.get(_v0.firebase.database.query(_v3, _v0.firebase.database.orderByChild("userId"), _v0.firebase.database.equalTo(_v2)))).forEach(_v0 => !!(0, _v5.removeRefValue)(_v0.firebase, (0, _v5.getRefChild)(_v0.firebase, _v3, _v0.key))));
  }
  function _v15(_v0) {
    _v0.log.info("Disposing manager"), _v0.disposeSubscribers(), _v0.publicChatBanListRef = null, _v0.metaChatEnabledRef = null, _v0.publicChatRef = null, _v0.guestsChatRef = null, _v0.setContext({
      [_v3.EChatType.PUBLIC]: _v1.ChatManager.createNewChatDescriptor(),
      [_v3.EChatType.BACKSTAGE]: _v1.ChatManager.createNewChatDescriptor(),
      isEnabled: null,
      isHydrated: !1,
      config: {
        roomId: -1,
        isCreator: !1
      },
      chatSessionsHistory: []
    });
  }
}