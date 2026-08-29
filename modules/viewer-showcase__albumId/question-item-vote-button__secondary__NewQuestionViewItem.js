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
    _v15 = _v0.i(0);
  function _v16({
    className: _v0 = (0, _v15.createDomName)("question-item-vote-button"),
    isDisabled: _v1,
    votesCount: _v2 = null,
    onVoteQuestion: _v3
  }) {
    return (0, _v1.jsx)(_v13.Button, {
      className: _v0,
      variant: "secondary",
      size: "xs",
      isDisabled: _v1,
      leftIcon: (0, _v1.jsx)(_v14.ThumbUp, {
        boxSize: (0, _v3.rem)(16)
      }),
      onClick: _v3,
      children: _v2
    });
  }
  var _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0);
  _v0.s(["NewQuestionViewItem", 0, function ({
    className: _v0 = (0, _v15.createDomName)("qna-item-preview"),
    question: _v1,
    isPinned: _v2 = !1,
    hasVoteButton: _v3 = !1,
    questionReplies: _v4 = {},
    onQuestionVoted: _v5
  }) {
    let {
        id: _v6,
        text: _v7,
        createdAt: _v8,
        anonymous: _v9,
        votesCount: _v10,
        state: _v11,
        user: _v12
      } = _v1,
      {
        colorMode: _v13
      } = (0, _v7.useColorMode)(),
      _v14 = (0, _v17.useQuestionTimeAsked)(_v8),
      _v15 = !_v9 && _v12 && _v12.displayName ? _v12.displayName : _v19.T_ANONYMOUS,
      _v16 = _v9 || !_v12?.avatarUrl ? (0, _v1.jsx)(_v18.default, {
        height: "sm",
        width: "sm"
      }) : (0, _v1.jsx)(_v21.CdnAvatar, {
        src: _v12.avatarUrl,
        size: "sm",
        name: _v15
      }),
      _v17 = _v3 && (_v11 === _v20.EQuestionState.ASKED || _v11 === _v20.EQuestionState.ANSWERING),
      _v18 = _v11 !== _v20.EQuestionState.PENDING && (_v17 || _v10 > 0),
      _v19 = Object.values(_v4),
      _v20 = _v11 !== _v20.EQuestionState.ARCHIVED && _v11 !== _v20.EQuestionState.PENDING,
      _v21 = (0, _v2.useMemo)(() => `${_v0} ${_v20 && _v2 ? "pinned-item" : ""}`, [_v0, _v20, _v2]),
      _v22 = (0, _v2.useCallback)(async () => {
        _v5 && (await _v5(_v6));
      }, [_v6, _v5]);
    return (0, _v1.jsxs)(_v5.Flex, {
      className: _v21,
      sx: (0, _v11.createQuestionItemWrapperStyle)({
        themeName: _v13,
        isPinned: _v20 && _v2
      }),
      children: [_v20 && _v2 ? (0, _v1.jsx)(_v5.Flex, {
        justifyContent: "center",
        alignItems: "center",
        height: (0, _v3.rem)(24),
        width: (0, _v3.rem)(24),
        padding: `0 ${(0, _v3.rem)(4)}`,
        position: "absolute",
        top: (0, _v3.rem)(8),
        right: (0, _v3.rem)(8),
        children: (0, _v1.jsx)(_v9.PinOnFilled, {
          boxSize: (0, _v3.rem)(16)
        })
      }) : null, (0, _v1.jsx)(_v4.Box, {
        className: (0, _v15.createDomName)(_v0, "author-avatar"),
        sx: (0, _v11.createAvatarWrapperStyle)(),
        children: _v16
      }), (0, _v1.jsxs)(_v5.Flex, {
        flexDirection: "column",
        alignItems: "flex-start",
        width: "100%",
        gap: (0, _v3.rem)(8),
        overflow: "hidden",
        children: [(0, _v1.jsxs)(_v5.Flex, {
          className: (0, _v15.createDomName)(_v0, "author-info"),
          sx: {
            ...(0, _v11.createQuestionInfoStyle)(),
            paddingRight: (0, _v3.rem)(24 * !!_v2)
          },
          children: [(0, _v1.jsx)(_v12.QuestionItemAuthor, {
            className: (0, _v15.createDomName)(_v0, "author-name"),
            name: _v15
          }), (0, _v1.jsx)(_v8.Text, {
            className: (0, _v15.createDomName)(_v0, "time"),
            variant: "body-sm",
            sx: _v11.TIME_ASKED_STYLE,
            children: _v14
          })]
        }), (0, _v1.jsx)(_v6.Paragraph, {
          className: (0, _v15.createDomName)(_v0, "text"),
          variant: "body-md",
          maxWidth: "100%",
          children: _v7
        }), _v18 ? (0, _v1.jsx)(_v16, {
          className: (0, _v15.createDomName)(_v0, "votes"),
          isDisabled: !_v17,
          votesCount: _v10,
          onVoteQuestion: _v22
        }) : null, _v19.map((_v0, _v1) => (0, _v1.jsx)(_v10.NewQuestionItemReply, {
          reply: _v0
        }, _v1))]
      })]
    });
  }], 0);
}