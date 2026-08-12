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
  _v0.s(["CommentMentionModule", 0, ({
    clipRequestId: _v0,
    perPage: _v1 = 4,
    page: _v2 = 1,
    richtextAreaRef: _v3,
    commentContextFields: _v4 = {
      commentId: -1,
      existingReplyCounts: 0,
      isReply: !1,
      isEdit: !1,
      isTimeCoded: !1
    },
    analyticsProps: _v5,
    onFocus: _v6,
    isPostCommentLoading: _v7,
    showcaseId: _v8,
    reviewId: _v9,
    textLimit: _v10,
    ..._v11
  }) => {
    let _v12 = (0, _v11.useViewer)(),
      _v13 = _v12?.team?.ownerId,
      {
        videoData: _v14
      } = (0, _v13.useVideoData)(_v0, _v8, _v9),
      _v15 = Number((0, _v15.getVideoIdFromClipRequestId)(_v0)),
      [_v16, _v17] = (0, _v2.useState)(!1),
      _v18 = (0, _v2.useRef)(_v16);
    _v18.current = _v16;
    let _v19 = (0, _v2.useRef)(_v7);
    _v19.current = _v7;
    let [_v20, _v21] = (0, _v2.useState)(0),
      _v22 = (0, _v2.useRef)(_v20);
    _v22.current = _v20;
    let {
        loadingMentionSuggestion: _v23,
        mentionSuggestionList: _v24,
        getMentionSuggestionItemsDebounced: _v25
      } = (0, _v12.useUserMentionSuggestions)(_v0, _v1, _v2, _v8, _v9),
      _v26 = (0, _v2.useRef)([]),
      _v27 = (0, _v2.useRef)(null),
      _v28 = (0, _v2.useCallback)(_v0 => {
        _v17(_v0), _v11?.setIsMentionActive?.(_v0);
      }, [_v11, _v17]),
      _v29 = (0, _v2.useCallback)(() => _v28(!1), [_v28]),
      _v30 = (0, _v2.useCallback)(() => {
        if (_v28(!0), _v5) {
          let _v0 = {
            ..._v5,
            commentContextFields: {
              existing_reply_counts: _v4.existingReplyCounts,
              is_reply: _v4.isReply,
              comment_id: _v4.commentId,
              comment_length: _v3?.current?.commentLength() ?? 0
            }
          };
          (0, _v14.bpMentionImpression)(_v15, _v14?.privacy.view, _v0, _v11.isPublic, _v12);
        }
      }, []),
      _v31 = (0, _v2.useRef)(_v24);
    _v31.current = _v24;
    let _v32 = (0, _v2.useCallback)(_v0 => {
        let _v1 = _v24[_v0];
        if (!_v1) return;
        let _v2 = (0, _v15.buildMentionNodePayload)(_v1);
        if (_v3?.current?.addMentionNode(_v2), _v5) {
          let _v0 = {
            ..._v5,
            commentContextFields: {
              existing_reply_counts: _v4.existingReplyCounts,
              is_reply: _v4.isReply,
              comment_id: _v4.commentId,
              comment_length: _v3?.current?.commentLength() ?? 0,
              mentionee_email: _v1.email,
              mentionee_id: _v1.userId,
              is_pending: _v1.isPending,
              mentionee_permission: null
            }
          };
          (0, _v14.bpAddMentionee)(_v15, _v14?.privacy.view, _v14?.uploader.link, _v11.isPublic, _v0, _v12);
        }
      }, [_v24]),
      _v33 = (0, _v2.useCallback)(_v0 => _v31.current.find(({
        email: _v0
      }) => _v0 === _v0), []),
      _v34 = (0, _v2.useCallback)((_v0, _v1, _v2) => {
        if (_v0.length && "Space" === _v2.code) {
          let _v0 = _v0.match(_v15.EMAIL_REGEX);
          if (_v0?.length) {
            let _v0 = _v33(_v0);
            if (!_v0) return;
            let _v1 = (0, _v15.buildMentionNodePayload)(_v0);
            if (_v3?.current?.addMentionNode(_v1), _v5) {
              let _v0 = {
                ..._v5,
                commentContextFields: {
                  existing_reply_counts: _v4.existingReplyCounts,
                  is_reply: _v4.isReply,
                  comment_id: _v4.commentId,
                  comment_length: _v3?.current?.commentLength() ?? 0,
                  mentionee_email: _v0.email,
                  mentionee_id: _v0.userId,
                  is_pending: _v0.isPending,
                  mentionee_permission: null
                }
              };
              (0, _v14.bpAddMentionee)(_v15, _v14?.privacy.view, _v14?.uploader.link, _v11.isPublic, _v0, _v12);
            }
          }
        }
      }, [_v33]),
      _v35 = (0, _v2.useCallback)((_v0, _v1, _v2, _v3) => {
        if ("Enter" === _v2.key && !_v2.shiftKey && !_v18.current) {
          if (_v2.preventDefault(), _v2.isComposing) return;
          let _v0 = _v3?.current?.getCommentContent() || "",
            _v1 = _v3?.current?.commentLength(),
            _v2 = !!_v10 && !!_v1 && _v1 > _v10;
          !_v1 || _v2 || _v19.current || _v3?.(_v0);
        }
        if (_v18.current && _v0.length && _v31.current?.length && ("ArrowUp" === _v2.key && (_v21(_v0 => 0 === _v0 ? _v31.current?.length - 1 : _v0 - 1), _v2.preventDefault(), _v2.stopPropagation()), "ArrowDown" === _v2.key && (_v21(_v0 => _v0 === _v31.current?.length - 1 ? 0 : _v0 + 1), _v2.preventDefault(), _v2.stopPropagation()), "Enter" === _v2.key)) {
          let _v0 = _v31.current[_v22.current];
          if (!_v0) return;
          let _v1 = (0, _v15.buildMentionNodePayload)(_v0);
          if (_v3?.current?.addMentionNode?.(_v1), _v5) {
            let _v0 = {
              ..._v5,
              commentContextFields: {
                existing_reply_counts: _v4.existingReplyCounts,
                is_reply: _v4.isReply,
                comment_id: _v4.commentId,
                comment_length: _v3?.current?.commentLength() ?? 0,
                mentionee_email: _v0.email,
                mentionee_id: _v0.userId,
                is_pending: _v0.isPending,
                mentionee_permission: null
              }
            };
            (0, _v14.bpAddMentionee)(_v15, _v14?.privacy.view, _v14?.uploader.link, _v11.isPublic, _v0, _v12);
          }
          _v2.preventDefault(), _v2.stopPropagation();
        }
      }, [_v21]),
      _v36 = (0, _v2.useCallback)(_v0 => {
        let _v1 = _v0.teamUserId ? "teamUserId" : "userId",
          _v2 = _v31?.current.find(_v0 => _v0[_v1] === _v0[_v1]);
        _v2 && _v26?.current.push(_v2);
      }, []),
      _v37 = (0, _v2.useCallback)(_v0 => {
        let _v1 = !1;
        _v26.current = _v26?.current.filter(_v0 => (_v0?.userId ?? _v0?.teamUserId) !== _v0 || !!_v1 || (_v1 = !0, !1));
      }, []);
    return (0, _v2.useEffect)(() => {
      0 === _v24.length && _v29();
    }, [_v24]), (0, _v10.default)([_v27], () => {
      _v16 && _v28(!1);
    }, null, [_v16, _v28]), (0, _v1.jsxs)(_v4.Popover, {
      matchWidth: !0,
      isLazy: !0,
      returnFocusOnClose: !0,
      closeOnEsc: !0,
      isOpen: _v16,
      placement: "top",
      children: [(0, _v1.jsx)(_v6.PopoverContent, {
        padding: "0",
        minWidth: "0px",
        ref: _v27,
        children: (0, _v1.jsx)(_v7.PopoverBody, {
          children: (0, _v1.jsx)(_v8.MentionList, {
            selectedIndex: _v20,
            mentionSuggestions: _v24,
            isLoading: _v23,
            isOpen: !0,
            onMenuItemSelection: _v32,
            avatarSize: "sm",
            iconSpacing: "10",
            borderRadius: "input-md"
          })
        })
      }), (0, _v1.jsx)(_v5.PopoverAnchor, {
        children: (0, _v1.jsx)(_v3.default, {
          persistentFocus: !0,
          disabled: !_v16,
          whiteList: _v0 => (_v27.current && _v27.current.contains(_v0)) ?? !1,
          children: (0, _v1.jsx)(_v9.RichTextArea, {
            ..._v11,
            ref: _v3,
            mentionExtensionItemCallback: _v25,
            onMentioneeAdd: _v36,
            onMentioneeRemove: _v37,
            onMentionStart: _v30,
            onMentionsExit: _v29,
            onKeyUpHandler: _v34,
            onKeyDownHandler: _v35,
            teamOwnerId: _v13,
            onFocus: () => {
              if (_v6(), _v5) {
                let _v0 = {
                  ..._v5,
                  commentContextFields: {
                    existing_reply_counts: _v4.existingReplyCounts,
                    is_reply: _v4.isReply,
                    comment_id: _v4.commentId,
                    comment_length: _v3?.current?.commentLength() ?? 0
                  }
                };
                _v4.isEdit ? (0, _v14.bpEditComment)(`${_v15}`, _v14?.privacy.view, _v11.isPublic, _v0, _v12, _v14?.uploader?.link, _v4.isTimeCoded) : _v3 && !_v3?.current?.commentLength() && (0, _v14.bpStartComment)(_v15, _v14?.privacy.view, _v11.isPublic, _v0, _v14?.uploader?.link, "text", !1, _v12);
              }
            },
            commentContextFields: _v4,
            textLimit: _v10
          })
        })
      })]
    });
  }]);
}