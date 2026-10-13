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
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0);
  _v0.s(["ChatInput", 0, function ({
    id: _v0 = (0, _v20.createDomName)("chat-input"),
    className: _v1 = (0, _v20.createDomName)("chat-input"),
    chatType: _v2,
    isDisabled: _v3 = !1,
    placeholderText: _v4,
    chatContext: {
      isEnabled: _v5,
      chatActions: {
        sendMessage: _v6
      },
      config: {
        roomId: _v7
      }
    } = (0, _v2.useManager)(_v15.ChatManager)
  }) {
    let _v8 = (0, _v3.useRef)(null),
      _v9 = (0, _v10.useToast)(),
      [_v10, _v11] = (0, _v3.useState)(() => _v7 !== _v15.UNINITIALIZED_ROOM_ID ? (0, _v22.readDraft)(_v7, _v2) : ""),
      [_v12, _v13] = (0, _v3.useState)(() => _v7 !== _v15.UNINITIALIZED_ROOM_ID ? _v7 : null),
      [_v14, _v15] = (0, _v3.useState)(!1);
    _v7 !== _v15.UNINITIALIZED_ROOM_ID && _v7 !== _v12 && (_v13(_v7), _v11(_v0 => _v0 || (0, _v22.readDraft)(_v7, _v2))), (0, _v3.useEffect)(() => {
      _v7 !== _v15.UNINITIALIZED_ROOM_ID && (0, _v22.writeDraft)(_v7, _v2, _v10);
    }, [_v7, _v2, _v10]);
    let _v16 = (0, _v3.useCallback)(_v0 => {
        _v11(_v0.target.value);
      }, []),
      _v17 = (0, _v3.useCallback)(_v0 => {
        _v0.preventDefault(), _v0.stopPropagation(), _v8.current?.focus({
          preventScroll: !0
        }), _v10.length && !(_v10.length > _v14.interactionToolsConfig.CHAT.MAX_MESSAGE_LENGTH) && (_v14 || (_v15(!0), setTimeout(() => _v15(!1), _v14.interactionToolsConfig.CHAT.MESSAGE_SENDING_THROTTLE), _v11(""), _v6(_v2, _v10).catch(_v0 => {
          _v0 instanceof _v21.ProxyRateLimitError && (_v11(_v0 => _v0 || _v10), _v9({
            status: "error",
            duration: 0,
            title: (0, _v12.translate)({
              singular: "You're posting too many messages. Please wait a moment and try again.",
              dictionary: {
                es: {
                  singular: "Estás publicando demasiados mensajes. Por favor, espera un momento e inténtalo de nuevo."
                },
                "de-DE": {
                  singular: "Sie posten zu viele Nachrichten. Bitte warten Sie einen Moment und versuchen Sie es dann erneut."
                },
                "fr-FR": {
                  singular: "Vous envoyez trop de messages. Veuillez patienter un instant et réessayer."
                },
                "ja-JP": {
                  singular: "メッセージの投稿が多すぎます。しばらく待ってから再度お試しください。"
                },
                "ko-KR": {
                  singular: "메시지를 너무 많이 게시하고 계십니다. 잠시 기다렸다가 다시 시도해 주세요."
                },
                "pt-BR": {
                  singular: "Você está enviando muitas mensagens. Por favor, aguarde um momento e tente novamente."
                },
                "zh-CN": {
                  singular: "您发送的消息过多。请稍候再试。"
                }
              }
            })
          }));
        }), _v2 === _v18.EChatType.PUBLIC ? (0, _v16.trackSendMessage)() : (0, _v16.trackSendBackstageMessage)()));
      }, [_v2, _v10, _v14, _v6, _v9]),
      _v18 = (0, _v3.useCallback)(_v0 => {
        if (_v8.current) {
          let _v0 = _v8.current.selectionStart || 0,
            _v1 = _v8.current.value,
            _v2 = _v0 + _v0.native.length;
          _v11(_v1.slice(0, _v0) + _v0.native + _v1.slice(_v0, _v1.length)), _v8.current.focus(), _v8.current.setSelectionRange(_v2, _v2);
        }
      }, [_v11]),
      _v19 = _v2 !== _v18.EChatType.PUBLIC || !!_v5,
      _v20 = !_v3 && _v19,
      _v21 = !!(_v20 && _v10.length && !_v14),
      _v22 = _v4 || (_v19 ? _v17.T_CHAT_PLACEHOLDER[_v2].input : _v17.T_CHAT_DISABLED_NO_DOT);
    return (0, _v1.jsx)(_v9.Box, {
      width: "100%",
      padding: (0, _v4.rem)(2),
      children: (0, _v1.jsxs)(_v6.InputGroup, {
        id: (0, _v20.createDomName)(_v0, "controls"),
        className: (0, _v20.createDomName)(_v1, "controls"),
        as: "form",
        display: "flex",
        width: "100%",
        borderRadius: "xs",
        transition: "background-color 170ms ease-in-out",
        onSubmit: _v17,
        onKeyUp: _v19.stopEventPropagation,
        onKeyDown: _v19.stopEventPropagation,
        onKeyPress: _v19.stopEventPropagation,
        children: [_v13.browserConfig.BROWSER?.isMobile ? null : (0, _v1.jsx)(_v7.InputLeftElement, {
          children: (0, _v1.jsx)(_v24.EmojiButton, {
            id: (0, _v20.createDomName)(_v0, "emoji-button"),
            className: (0, _v20.createDomName)(_v1, "emoji-button"),
            inputRef: _v8,
            isSubmitted: _v14,
            placement: "top-start",
            isDisabled: !_v20,
            onEmojiSelect: _v18
          })
        }), (0, _v1.jsx)(_v8.Input, {
          id: (0, _v20.createDomName)(_v0, "input"),
          className: (0, _v20.createDomName)(_v1, "input"),
          ref: _v8,
          maxLength: _v14.interactionToolsConfig.CHAT.MAX_MESSAGE_LENGTH,
          placeholder: _v22,
          value: _v10,
          autoComplete: "off",
          isDisabled: !_v20,
          fontFamily: _v23.EMOJI_FONT_FAMILY,
          fontSize: (0, _v4.rem)(_v13.browserConfig.BROWSER?.isMobile ? 16 : 14),
          lineHeight: (0, _v4.rem)(22),
          _disabled: {
            cursor: "not-allowed",
            backgroundColor: "background-blur"
          },
          onChange: _v16
        }), (0, _v1.jsx)(_v7.InputRightElement, {
          children: (0, _v1.jsx)(_v5.IconButton, {
            id: (0, _v20.createDomName)(_v0, "send-button"),
            className: (0, _v20.createDomName)(_v1, "send-button"),
            "aria-label": "chat submit button",
            "data-chat-submit": !0,
            type: "submit",
            size: "sm",
            variant: "tertiary",
            icon: (0, _v1.jsx)(_v11.Send, {}),
            isDisabled: !_v21,
            transition: "none",
            _hover: {
              backgroundColor: "transparent!important"
            }
          })
        })]
      })
    });
  }], 0);
  var _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0);
  _v0.s(["ChatPreloader", 0, function ({
    id: _v0 = (0, _v20.createDomName)("chat-preloader"),
    className: _v1 = (0, _v20.createDomName)("chat-preloader")
  }) {
    return (0, _v1.jsx)(_v25.Flex, {
      id: _v0,
      className: _v1,
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      flexGrow: 1,
      overflow: "hidden",
      children: (0, _v1.jsx)(_v25.Flex, {
        id: (0, _v20.createDomName)(_v0, "history"),
        className: (0, _v20.createDomName)(_v1, "history"),
        width: "100%",
        overflow: "hidden",
        flexDirection: "column",
        height: "100%",
        padding: `0 ${(0, _v4.rem)(16)}`,
        children: (0, _v26.range)(20).map(_v0 => (0, _v1.jsx)(_v27.BokehSkeleton, {
          className: (0, _v20.createDomName)(_v1, "message"),
          marginBottom: (0, _v4.rem)(16),
          padding: (0, _v4.rem)(20),
          borderRadius: (0, _v4.rem)(4)
        }, _v0))
      })
    });
  }], 0);
}