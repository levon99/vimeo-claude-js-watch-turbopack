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
    _v22 = _v0.i(0);
  _v0.s(["QnaReplyForm", 0, function ({
    id: _v0 = (0, _v20.createDomName)("qna-reply-form"),
    className: _v1 = (0, _v20.createDomName)("qna-reply-form"),
    selectedQuestionId: _v2,
    isApproveNeeded: _v3,
    onDismiss: _v4,
    qnaContext: {
      qnaActions: _v5
    } = (0, _v2.useManager)(_v16.QnAManager, () => [])
  }) {
    let _v6 = (0, _v3.useRef)(null),
      [_v7, _v8] = (0, _v3.useState)(""),
      [_v9, _v10] = (0, _v3.useState)(!1),
      _v11 = !!(_v7.length && _v7.length <= _v14.interactionToolsConfig.QNA.MAX_QUESTION_REPLY_LENGTH && !_v9),
      _v12 = _v14.interactionToolsConfig.QNA.MAX_QUESTION_REPLY_LENGTH - _v7.length,
      _v13 = _v12 < 0,
      _v14 = (0, _v15.useSimpleNotification)(),
      _v15 = (0, _v3.useCallback)(async _v0 => {
        if ((_v0.preventDefault(), _v0.stopPropagation(), _v7.length && !(_v7.length > _v14.interactionToolsConfig.QNA.MAX_QUESTION_REPLY_LENGTH)) && !_v9) {
          _v10(!0);
          try {
            await (_v3 ? _v5.approveQuestion(_v2) : Promise.resolve()), await _v5.submitQuestionReply(_v2, _v7), _v8(""), _v3 ? (0, _v17.trackReplyAndApproveQuestion)() : (0, _v17.trackReplyQuestion)(), _v14({
              message: _v3 ? _v18.T_REPLY_POSTED_AND_APPROVED : _v18.T_REPLY_POSTED
            }), setTimeout(() => _v10(!1), _v14.interactionToolsConfig.QNA.QUESTION_REPLY_THROTTLE);
          } catch (_v0) {
            _v10(!1);
          }
        }
      }, [_v5, _v3, _v14, _v7, _v2, _v9]),
      _v16 = (0, _v3.useCallback)(_v0 => {
        if (_v6.current) {
          let _v0 = _v6.current.selectionStart || 0,
            _v1 = _v6.current.value;
          _v8(_v1.slice(0, _v0) + _v0.native + _v1.slice(_v0, _v1.length)), _v6.current.focus();
        }
      }, []),
      _v17 = (0, _v3.useCallback)(_v0 => {
        _v8(_v0.target.value);
      }, []);
    return (0, _v3.useEffect)(() => {
      _v6 && _v6.current && _v6.current.focus();
    }, [_v2]), (0, _v1.jsxs)(_v4.Box, {
      id: _v0,
      className: _v1,
      as: "form",
      display: "flex",
      flexDirection: "column",
      width: "100%",
      paddingTop: (0, _v10.rem)(8),
      onSubmit: _v15,
      onKeyUp: _v19.stopEventPropagation,
      onKeyDown: _v19.stopEventPropagation,
      onKeyPress: _v19.stopEventPropagation,
      children: [(0, _v1.jsxs)(_v5.Flex, {
        id: (0, _v20.createDomName)(_v0, "title"),
        className: (0, _v20.createDomName)(_v1, "title"),
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: (0, _v10.rem)(12),
        fontSize: "text-xs",
        fontWeight: "bold",
        children: [(0, _v1.jsx)("div", {
          children: _v3 ? _v18.T_REPLY_AND_APPROVE : _v18.T_REPLY
        }), (0, _v1.jsx)(_v6.IconButton, {
          id: (0, _v20.createDomName)(_v0, "dismiss"),
          className: (0, _v20.createDomName)(_v1, "dismiss"),
          "aria-label": "stop-reply",
          size: "xs",
          variant: "tertiary",
          type: "button",
          icon: (0, _v1.jsx)(_v12.CloseX, {}),
          onClick: _v4
        })]
      }), (0, _v1.jsxs)(_v8.InputGroup, {
        id: (0, _v20.createDomName)(_v0, "controls"),
        className: (0, _v20.createDomName)(_v1, "controls"),
        children: [_v13.browserConfig.BROWSER?.isMobile ? null : (0, _v1.jsx)(_v9.InputLeftElement, {
          children: (0, _v1.jsx)(_v22.EmojiButton, {
            id: (0, _v20.createDomName)(_v0, "emoji-button"),
            className: (0, _v20.createDomName)(_v1, "emoji-button"),
            inputRef: _v6,
            isSubmitted: _v9,
            placement: "top-start",
            onEmojiSelect: _v16
          })
        }), (0, _v1.jsx)(_v7.Input, {
          id: (0, _v20.createDomName)(_v0, "input"),
          className: (0, _v20.createDomName)(_v1, "input"),
          ref: _v6,
          maxLength: _v14.interactionToolsConfig.CHAT.MAX_MESSAGE_LENGTH,
          value: _v7,
          autoComplete: "off",
          onChange: _v17
        }), (0, _v1.jsx)(_v9.InputRightElement, {
          children: (0, _v1.jsx)(_v6.IconButton, {
            id: (0, _v20.createDomName)(_v0, "send-button"),
            className: (0, _v20.createDomName)(_v1, "send-button"),
            "aria-label": "qna-submit-button",
            "data-chat-submit": !0,
            type: "submit",
            size: "sm",
            variant: "tertiary",
            icon: (0, _v1.jsx)(_v11.Send, {}),
            transition: "none",
            _hover: {
              backgroundColor: "transparent!important"
            },
            isDisabled: !_v11
          })
        })]
      }), (0, _v1.jsx)(_v5.Flex, {
        id: (0, _v20.createDomName)(_v0, "info"),
        className: (0, _v20.createDomName)(_v1, "info"),
        justifyContent: "flex-end",
        alignContent: "center",
        width: "100%",
        children: (0, _v1.jsx)(_v5.Flex, {
          id: (0, _v20.createDomName)(_v0, "characters-count"),
          className: (0, _v20.createDomName)(_v1, "characters-count"),
          as: "span",
          alignItems: "center",
          fontSize: "text-xs",
          lineHeight: "text-xs",
          padding: `${(0, _v10.rem)(8)} 0 0`,
          fontWeight: _v12 <= 20 || _v13 ? "bold" : 400,
          color: _v13 ? _v21.FAILED_STATUS_COLOR : "text-secondary",
          children: `${_v7.length}/${_v14.interactionToolsConfig.QNA.MAX_QUESTION_REPLY_LENGTH}`
        })
      })]
    });
  }]);
}