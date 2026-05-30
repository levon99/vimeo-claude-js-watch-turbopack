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
    _v20 = _v0.i(0);
  _v0.s(["ChatInput", 0, function ({
    id: _v0 = (0, _v18.createDomName)("chat-input"),
    className: _v1 = (0, _v18.createDomName)("chat-input"),
    chatType: _v2,
    isDisabled: _v3 = !1,
    placeholderText: _v4,
    chatContext: {
      isEnabled: _v5,
      chatActions: {
        sendMessage: _v6
      }
    } = (0, _v2.useManager)(_v13.ChatManager)
  }) {
    let _v7 = (0, _v3.useRef)(null),
      [_v8, _v9] = (0, _v3.useState)(""),
      [_v10, _v11] = (0, _v3.useState)(!1),
      _v12 = (0, _v3.useCallback)(_v0 => {
        _v9(_v0.target.value);
      }, []),
      _v13 = (0, _v3.useCallback)(_v0 => {
        _v0.preventDefault(), _v0.stopPropagation(), _v7.current?.focus({
          preventScroll: !0
        }), _v8.length && !(_v8.length > _v12.interactionToolsConfig.CHAT.MAX_MESSAGE_LENGTH) && (_v10 || (_v11(!0), setTimeout(() => _v11(!1), _v12.interactionToolsConfig.CHAT.MESSAGE_SENDING_THROTTLE), _v9(""), _v6(_v2, _v8), _v2 === _v16.EChatType.PUBLIC ? (0, _v14.trackSendMessage)() : (0, _v14.trackSendBackstageMessage)()));
      }, [_v2, _v8, _v10, _v6]),
      _v14 = (0, _v3.useCallback)(_v0 => {
        if (_v7.current) {
          let _v0 = _v7.current.selectionStart || 0,
            _v1 = _v7.current.value,
            _v2 = _v0 + _v0.native.length;
          _v9(_v1.slice(0, _v0) + _v0.native + _v1.slice(_v0, _v1.length)), _v7.current.focus(), _v7.current.setSelectionRange(_v2, _v2);
        }
      }, [_v9]),
      _v15 = _v2 !== _v16.EChatType.PUBLIC || !!_v5,
      _v16 = !_v3 && _v15,
      _v17 = !!(_v16 && _v8.length && !_v10),
      _v18 = _v4 || (_v15 ? _v15.T_CHAT_PLACEHOLDER[_v2].input : _v15.T_CHAT_DISABLED_NO_DOT);
    return (0, _v1.jsx)(_v9.Box, {
      width: "100%",
      padding: (0, _v4.rem)(2),
      children: (0, _v1.jsxs)(_v6.InputGroup, {
        id: (0, _v18.createDomName)(_v0, "controls"),
        className: (0, _v18.createDomName)(_v1, "controls"),
        as: "form",
        display: "flex",
        width: "100%",
        borderRadius: "xs",
        transition: "background-color 170ms ease-in-out",
        onSubmit: _v13,
        onKeyUp: _v17.stopEventPropagation,
        onKeyDown: _v17.stopEventPropagation,
        onKeyPress: _v17.stopEventPropagation,
        children: [_v11.browserConfig.BROWSER?.isMobile ? null : (0, _v1.jsx)(_v7.InputLeftElement, {
          children: (0, _v1.jsx)(_v20.EmojiButton, {
            id: (0, _v18.createDomName)(_v0, "emoji-button"),
            className: (0, _v18.createDomName)(_v1, "emoji-button"),
            inputRef: _v7,
            isSubmitted: _v10,
            placement: "top-start",
            isDisabled: !_v16,
            onEmojiSelect: _v14
          })
        }), (0, _v1.jsx)(_v8.Input, {
          id: (0, _v18.createDomName)(_v0, "input"),
          className: (0, _v18.createDomName)(_v1, "input"),
          ref: _v7,
          maxLength: _v12.interactionToolsConfig.CHAT.MAX_MESSAGE_LENGTH,
          placeholder: _v18,
          value: _v8,
          autoComplete: "off",
          isDisabled: !_v16,
          fontFamily: _v19.EMOJI_FONT_FAMILY,
          fontSize: (0, _v4.rem)(_v11.browserConfig.BROWSER?.isMobile ? 16 : 14),
          lineHeight: (0, _v4.rem)(22),
          _disabled: {
            cursor: "not-allowed",
            backgroundColor: "background-blur"
          },
          onChange: _v12
        }), (0, _v1.jsx)(_v7.InputRightElement, {
          children: (0, _v1.jsx)(_v5.IconButton, {
            id: (0, _v18.createDomName)(_v0, "send-button"),
            className: (0, _v18.createDomName)(_v1, "send-button"),
            "aria-label": "chat submit button",
            "data-chat-submit": !0,
            type: "submit",
            size: "sm",
            variant: "tertiary",
            icon: (0, _v1.jsx)(_v10.Send, {}),
            isDisabled: !_v17,
            transition: "none",
            _hover: {
              backgroundColor: "transparent!important"
            }
          })
        })]
      })
    });
  }], 0);
  var _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0);
  _v0.s(["ChatPreloader", 0, function ({
    id: _v0 = (0, _v18.createDomName)("chat-preloader"),
    className: _v1 = (0, _v18.createDomName)("chat-preloader")
  }) {
    return (0, _v1.jsx)(_v21.Flex, {
      id: _v0,
      className: _v1,
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      flexGrow: 1,
      overflow: "hidden",
      children: (0, _v1.jsx)(_v21.Flex, {
        id: (0, _v18.createDomName)(_v0, "history"),
        className: (0, _v18.createDomName)(_v1, "history"),
        width: "100%",
        overflow: "hidden",
        flexDirection: "column",
        height: "100%",
        padding: `0 ${(0, _v4.rem)(16)}`,
        children: (0, _v22.range)(20).map(_v0 => (0, _v1.jsx)(_v23.BokehSkeleton, {
          className: (0, _v18.createDomName)(_v1, "message"),
          marginBottom: (0, _v4.rem)(16),
          padding: (0, _v4.rem)(20),
          borderRadius: (0, _v4.rem)(4)
        }, _v0))
      })
    });
  }], 0);
}