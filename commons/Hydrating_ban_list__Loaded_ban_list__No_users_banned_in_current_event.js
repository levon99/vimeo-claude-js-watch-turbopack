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
    _v11 = _v0.i(0);
  async function _v12(_v0, _v1) {
    _v0.log.info("Hydrating ban list");
    let _v2 = _v0.getChatBanListRef(_v1);
    if (_v2) try {
      let _v0 = await (0, _v5.getRefValue)(_v0.firebase, _v2);
      if (_v0) {
        let _v0 = _v0.context[_v1].banList;
        _v0.setContext({
          [_v1]: _v0.context[_v1].asMerged({
            banList: {
              ..._v0,
              ..._v0
            }
          })
        }), _v0.log.info("Loaded ban list:", _v0);
      } else _v0.log.info("No users banned in current event:", _v0);
    } catch (_v0) {
      _v0.log.error("Ban list hydration failed:", _v0), (0, _v10.trackLiveError)(_v0, {
        method: "hydrateBanList",
        category: _v11.ELiveErrorCategory.INTERACTION
      });
    }
  }
  async function _v13(_v0, _v1, _v2, _v3) {
    _v0.log.info("Hydrating chat messages history");
    let _v4 = _v2.parent?.parent?.key?.toString(),
      _v5 = (0, _v9.getAbsoluteNow)();
    try {
      let _v0 = await (0, _v5.getRefValue)(_v0.firebase, _v0.firebase.database.query(_v2, _v0.firebase.database.limitToLast(_v2.interactionToolsConfig.CHAT.IN_MEMORY_MESSAGES_LIMIT)));
      if (Object.entries(_v0 || {}).forEach(([_v0, _v1]) => {
        let _v2 = (0, _v6.collectMessageInteractionErrors)(_v1);
        (0, _v10.checkErrorsAndTrack)({
          possibleErrors: _v2,
          data: _v1,
          methodName: "hydrateChatHistory"
        }) || delete _v0[_v0];
      }), _v0) {
        let {
            messages: _v0,
            users: _v1
          } = (0, _v7.transformBulkedChatMessages)(_v0),
          {
            messages: _v2,
            participants: _v3
          } = _v3.getValue(),
          _v4 = {
            ..._v2,
            ..._v0
          },
          _v5 = {
            ..._v1,
            ..._v3
          };
        _v3.setValue({
          messages: _v4,
          participants: _v5
        }), _v0.log.info("Hydrated messages for chat ref:", _v4);
      } else _v0.log.info("Chat history was empty for chat ref:", _v4);
      (0, _v10.trackLiveAction)("chat_history_hydrated", {
        chatType: _v4.CHAT_TYPE_LABELS[_v1],
        durationMs: (0, _v9.getAbsoluteNow)() - _v5,
        messageCount: Object.keys(_v0 || {}).length
      });
    } catch (_v0) {
      _v0.log.error("Chat history hydration failed for chat ref:", _v0, _v4), (0, _v10.trackLiveError)(_v0, {
        method: "hydrateChatHistory",
        category: _v11.ELiveErrorCategory.INTERACTION,
        data: {
          chatType: _v4
        }
      });
    }
  }
  _v0.s(["hydrateBanList", 0, _v12, "hydrateChatHistory", 0, _v13, "subscribeToBanList", 0, function (_v0, _v1) {
    let _v2 = _v0 => {
        let _v1 = _v0.val();
        if (!_v0.key) return _v0.log.error("Failed to ban user, no snapshot key:", _v1);
        if (_v1) {
          _v0.log.info("Received block user from remote:", _v1);
          let _v0 = _v0.context[_v1].banList;
          _v0.setContext({
            [_v1]: _v0.context[_v1].asMerged({
              banList: {
                ..._v0,
                [_v0.key]: _v1
              }
            })
          });
        }
      },
      _v3 = _v0 => {
        if (!_v0.key) return _v0.log.error("Failed to unban user, no snapshot key:", _v0.key);
        {
          _v0.log.info("Received unban user:", _v0.key);
          let _v0 = _v0.context[_v1].banList;
          _v0.setContext({
            [_v1]: _v0.context[_v1].asMerged({
              banList: (0, _v8.omit)(_v0, _v0.key)
            })
          });
        }
      },
      _v4 = _v0.getChatBanListRef(_v1);
    return _v4 ? ((0, _v5.onRefEvent)(_v0.firebase, _v4, "child_added", _v2, "ban-list"), (0, _v5.onRefEvent)(_v0.firebase, _v4, "child_removed", _v3, "ban-list"), () => {
      (0, _v5.offRefEvent)(_v0.firebase, _v4, "child_added", _v2), (0, _v5.offRefEvent)(_v0.firebase, _v4, "child_removed", _v3);
    }) : _v3.CallablePlaceholder;
  }, "subscribeToChatMessages", 0, function (_v0, _v1, _v2, _v3) {
    let _v4 = 0,
      _v5 = (0, _v1.default)(_v0 => (0, _v10.trackLiveAction)("chat_message_delivery_lag", {
        chatType: _v4.CHAT_TYPE_LABELS[_v1],
        lagMs: _v0,
        visibility: document.visibilityState
      }), _v2.interactionToolsConfig.CHAT.DELIVERY_LAG_TRACK_INTERVAL, {
        trailing: !1
      }),
      _v6 = _v0 => {
        let _v1 = _v0.val();
        if (!_v0.key) return _v0.log.error("Failed to add message, no snapshot key:", _v1);
        try {
          let _v0 = (0, _v6.collectMessageInteractionErrors)(_v1),
            _v1 = (0, _v10.checkErrorsAndTrack)({
              possibleErrors: _v0,
              data: _v1,
              methodName: "onChatMessagePush"
            });
          if (_v1 && _v1) {
            let [_v0, _v1] = (0, _v7.transformChatMessage)(_v0.key, _v1),
              {
                messages: _v2,
                participants: _v3
              } = _v3.getValue();
            _v3.setValue({
              messages: {
                ..._v2,
                [_v0.key]: _v0
              },
              participants: {
                ..._v3,
                [_v1.id]: _v1
              }
            }), function (_v0, _v1) {
              let {
                messages: _v2,
                participants: _v3
              } = _v1.getValue();
              if (Object.keys(_v2).length > _v2.interactionToolsConfig.CHAT.IN_MEMORY_MESSAGES_BUFFER + _v2.interactionToolsConfig.CHAT.IN_MEMORY_MESSAGES_LIMIT) {
                _v0.log.info("Cleaning up chat messages buffer:", _v1.name);
                let [_v0, _v1] = (0, _v7.reBufferizeChatMessages)(_v2, _v3, _v2.interactionToolsConfig.CHAT.IN_MEMORY_MESSAGES_LIMIT);
                _v1.setValue({
                  messages: _v0,
                  participants: _v1
                });
              }
            }(_v0, _v3), _v0.context.hydratedAt && _v0.createdAt > _v0.context.hydratedAt && _v0.createdAt >= _v4 && (_v4 = _v0.createdAt, _v5((0, _v9.getAbsoluteNow)() - _v0.createdAt));
          }
        } catch (_v0) {
          (0, _v10.trackLiveError)(_v0, {
            category: _v11.ELiveErrorCategory.INTERACTION,
            method: "onChatMessagePush",
            data: {
              key: _v0.key,
              roomId: _v0.context.config.roomId
            }
          });
        }
      },
      _v7 = _v0 => {
        if (!_v0.key) return _v0.log.error("Failed to remove message, no snapshot key:", _v0.key);
        {
          let {
            messages: _v0,
            participants: _v1
          } = _v3.getValue();
          _v0[_v0.key] && _v3.setValue({
            messages: (0, _v8.omit)(_v0, _v0.key),
            participants: _v1
          });
        }
      };
    return (0, _v5.onRefEvent)(_v0.firebase, _v0.firebase.database.query(_v2, _v0.firebase.database.limitToLast(25)), "child_added", _v6, "chat-messages"), (0, _v5.onRefEvent)(_v0.firebase, _v2, "child_removed", _v7, "chat-messages"), () => {
      (0, _v5.offRefEvent)(_v0.firebase, _v2, "child_added", _v6), (0, _v5.offRefEvent)(_v0.firebase, _v2, "child_removed", _v7);
    };
  }, "subscribeToChatStatus", 0, function (_v0, _v1) {
    let _v2 = _v0 => {
      let _v1 = !!_v0.val();
      _v1 !== _v0.context.isEnabled && (_v0.log.info("Chat status change:", _v1), _v0.setContext({
        isEnabled: !!_v1,
        enabledAt: (0, _v9.getAbsoluteNow)()
      }));
    };
    return (0, _v5.onRefEvent)(_v0.firebase, _v1, "value", _v2, "chat-status"), () => (0, _v5.offRefEvent)(_v0.firebase, _v1, "value", _v2);
  }]);
}