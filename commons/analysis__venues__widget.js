{
  "use strict";

  var _v1,
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  function _v9() {
    return {
      ...(0, _v7.newTeamCtx)(),
      ...(0, _v7.newVenueCtx)(),
      ...(0, _v7.newLiveCtx)({
        live_feature: null
      }),
      ...(0, _v7.newProductAnalyticsCtx)({
        product: "analysis",
        feature: "venues",
        location: "widget"
      })
    };
  }
  function _v10(_v0, _v1, _v2) {
    (0, _v8.createBPv2EventFactory)("vimeo.venues_add_qa_question", 1, () => ({
      ..._v9(),
      ...(0, _v7.newActionCtx)("type")
    }), {})({
      qa_session_id: _v0,
      qa_question_id: _v1,
      is_qa_question_anonymous: _v2
    });
  }
  function _v11(_v0, _v1, _v2, _v3) {
    (0, _v8.createBPv2EventFactory)("vimeo.venues_add_qa_question_reaction", 1, () => ({
      ..._v9(),
      ...(0, _v7.newActionCtx)("click")
    }), {})({
      qa_session_id: _v0,
      qa_question_id: _v1,
      is_qa_question_anonymous: _v2,
      reaction_type: _v3
    });
  }
  function _v12(_v0, _v1, _v2, _v3) {
    (0, _v8.createBPv2EventFactory)("vimeo.venues_remove_qa_question_reaction", 1, () => ({
      ..._v9(),
      ...(0, _v7.newActionCtx)("click")
    }), {})({
      qa_session_id: _v0,
      qa_question_id: _v1,
      is_qa_question_anonymous: _v2,
      reaction_type: _v3
    });
  }
  function _v13(_v0, _v1, _v2, _v3) {
    (0, _v8.createBPv2EventFactory)("vimeo.venues_add_qa_reply", 1, () => ({
      ..._v9(),
      ...(0, _v7.newActionCtx)("type")
    }), {})({
      qa_session_id: _v0,
      qa_question_id: _v1,
      is_qa_question_anonymous: _v2,
      qa_reply_id: _v3
    });
  }
  _v0.s(["trackVenuesAddPollVote", 0, function (_v0, _v1, _v2) {
    (0, _v8.createBPv2EventFactory)("vimeo.venues_add_poll_vote", 1, () => ({
      ..._v9(),
      ...(0, _v7.newActionCtx)("click")
    }), {})({
      poll_id: _v0,
      poll_option_id: _v1,
      is_poll_option_correct: _v2
    });
  }, "trackVenuesAddQaQuestion", 0, _v10, "trackVenuesAddQaQuestionReaction", 0, _v11, "trackVenuesAddQaReply", 0, _v13, "trackVenuesRemoveQaQuestionReaction", 0, _v12, "trackVenuesViewPoll", 0, function (_v0) {
    (0, _v8.createBPv2EventFactory)("vimeo.venues_view_poll", 1, () => ({
      ..._v9(),
      ...(0, _v7.newViewCtx)("impression")
    }), {})({
      poll_id: _v0
    });
  }, "trackVenuesViewQa", 0, function (_v0) {
    (0, _v8.createBPv2EventFactory)("vimeo.venues_view_qa", 1, () => ({
      ..._v9(),
      ...(0, _v7.newViewCtx)("impression")
    }), {})({
      qa_session_id: _v0
    });
  }], 0);
  var _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0);
  let _v19 = new _v4.Logger("🗝EM", _v18.liveApplicationConfig.TRACKING.IS_EMBED_MESSAGING_LOG_ENABLED);
  function _v20(_v0, _v1, _v2 = !0) {
    if (_v17.environmentConfig.IS_IFRAME && window.parent) try {
      let _v0 = window.document.referrer,
        _v1 = "*";
      if (!0 === _v2) {
        let _v0 = _v17.environmentConfig.IFRAME_ALLOWED_ORIGINS.find(_v0 => _v0.startsWith(_v0));
        if (!_v0) return _v19.info("Skip posting message, origin is not allowed:", _v0), !1;
        _v1 = _v0;
      } else "string" == typeof _v2 && (_v1 = _v2);
      return _v19.info("Posting iframe page message:", _v0, _v1, _v1), window.parent.postMessage({
        type: _v0,
        data: _v1
      }, _v1), !0;
    } catch (_v0) {
      _v19.error("Failed to post iframe message:", _v0);
    } else _v19.info("Skip iframe post page message:", _v0, _v1, _v2);
    return !1;
  }
  _v0.s(["postPageMessage", 0, _v20], 0);
  var _v21 = ((_v1 = {}).ACTIVE_POLL_CHANGED = "ACTIVE_POLL_CHANGED", _v1.POLL_OPTION_VOTED = "POLL_OPTION_VOTED", _v1.ACTIVE_QNA_CHANGED = "ACTIVE_QNA_CHANGED", _v1.QUESTION_SUBMIT = "QUESTION_SUBMIT", _v1);
  _v0.s(["EInteractionEmbedSignal", () => _v21], 0);
  var _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0);
  async function _v28(_v0, _v1) {
    _v0.log.info("Creating qna session:", _v1), _v0.assertIsInitialized();
    let _v2 = await (0, _v23.pushRefValue)(_v0.firebase, _v0.qnaSessionsRef),
      _v3 = _v2.key,
      _v4 = (0, _v24.createQuestionSessionRecordInteractionObject)({
        id: _v3,
        isQnaModerated: _v1
      });
    return await (0, _v23.setRefValue)(_v0.firebase, _v2, {
      ..._v4,
      createdAt: _v0.firebase.database.serverTimestamp()
    }), _v3;
  }
  async function _v29(_v0, _v1) {
    _v0.log.info("Toggling moderation state:", _v1), _v0.assertIsInitialized(), await (0, _v23.setRefValue)(_v0.firebase, _v0.qnaModerationStatusRef, _v1);
  }
  async function _v30(_v0, _v1) {
    _v0.log.info("Toggling anonymous questions state:", _v1), _v0.assertIsInitialized(), await (0, _v23.setRefValue)(_v0.firebase, _v0.qnaAnonymousQuestionsStatusRef, _v1);
  }
  async function _v31(_v0, _v1) {
    _v0.log.info("Open qna session:", _v1), _v0.assertIsInitialized();
    let _v2 = (0, _v23.getRefChild)(_v0.firebase, _v0.qnaSessionsRef, _v1),
      _v3 = await (0, _v23.getRefValue)(_v0.firebase, _v2);
    if (_v3) await (0, _v23.batchedDatabaseUpdate)(_v0.firebase, _v0.rootRef, [[_v0.qnaActiveSessionMetaRef, _v1], [(0, _v23.getRefChild)(_v0.firebase, _v2, "startedAt"), _v0.firebase.database.serverTimestamp()]]);else throw new _v22.LiveError("Tried to open session that does not exist.", {
      code: _v15.ELiveErrorCode.INVALID_PARAMETERS,
      data: {
        session: _v3,
        sessionId: _v1
      }
    });
  }
  async function _v32(_v0) {
    _v0.log.info("Closing current qna session"), _v0.assertIsInitialized();
    let {
      config: _v1
    } = _v0.context;
    _v0.emitSignal({
      type: _v27.ELiveGraphicsSignal.QNA_QUESTION_DESELECTED
    }), _v0?.qnaRepliesBuffer?.resetValue(), _v1.canUseQnaModeration ? await (0, _v23.batchedDatabaseUpdate)(_v0.firebase, _v0.rootRef, [[_v0.qnaModerationStatusRef, !1], [_v0.qnaActiveSessionMetaRef, null]]) : await (0, _v23.removeRefValue)(_v0.firebase, _v0.qnaActiveSessionMetaRef);
  }
  async function _v33(_v0, _v1) {
    _v0.log.info("Approving question:", _v1), _v0.assertIsInitialized(), _v0.assertActiveSessionExists();
    let _v2 = (0, _v23.getRefChild)(_v0.firebase, _v0.qnaActiveSessionRef, `pendingQuestions/${_v1}`),
      _v3 = (0, _v23.getRefChild)(_v0.firebase, _v0.qnaActiveSessionRef, `questions/${_v1}`),
      _v4 = await (0, _v23.getRefValue)(_v0.firebase, _v2);
    _v4.state = _v16.EQuestionState.ASKED, await (0, _v23.batchedDatabaseUpdate)(_v0.firebase, _v0.rootRef, [[_v2, null], [_v3, _v4]]);
  }
  async function _v34(_v0, _v1, _v2) {
    _v0.log.info("Archiving question:", _v1, _v2), _v0.assertActiveSessionExists();
    let {
      activeSessionQuestions: _v3,
      activeSessionPendingQuestions: _v4,
      activeSessionPinnedQuestionId: _v5
    } = _v0.context;
    _v0.assertQuestionExists(_v1, _v2 ? _v3 : _v4).state === _v16.EQuestionState.ANSWERING && _v0.emitSignal({
      type: _v27.ELiveGraphicsSignal.QNA_QUESTION_DESELECTED
    }), _v1 === _v5 && (await _v43(_v0, _v1)), await (0, _v23.updateRefValue)(_v0.firebase, (0, _v23.getRefChild)(_v0.firebase, _v0.qnaActiveSessionRef, `${_v2 ? "questions" : "pendingQuestions"}/${_v1}`), {
      state: _v16.EQuestionState.ARCHIVED,
      archivedAt: _v0.firebase.database.serverTimestamp()
    });
  }
  async function _v35(_v0, _v1, _v2) {
    if (_v0.log.info("Un-archiving question:", _v1, _v2), _v0.assertActiveSessionExists(), !_v2) return _v0.approveQuestion(_v1);
    await (0, _v23.updateRefValue)(_v0.firebase, (0, _v23.getRefChild)(_v0.firebase, _v0.qnaActiveSessionRef, `questions/${_v1}`), {
      state: _v16.EQuestionState.ASKED,
      archivedAt: null
    });
  }
  async function _v36(_v0, _v1) {
    _v0.log.info("Deactivating question:", _v1), _v0.assertActiveSessionExists(), _v0.emitSignal({
      type: _v27.ELiveGraphicsSignal.QNA_QUESTION_DESELECTED
    }), await (0, _v23.updateRefValue)(_v0.firebase, (0, _v23.getRefChild)(_v0.firebase, _v0.qnaActiveSessionRef, `questions/${_v1}`), {
      state: _v16.EQuestionState.ASKED
    });
  }
  async function _v37(_v0, _v1) {
    _v0.log.info("Answering question:", _v1), _v0.assertIsInitialized(), _v0.assertActiveSessionExists();
    let _v2 = _v0.assertQuestionExists(_v1),
      {
        activeSessionQuestions: _v3
      } = _v0.context,
      _v4 = Object.entries(_v3).filter(([, _v0]) => _v0.state === _v16.EQuestionState.ANSWERING).map(([_v0]) => [(0, _v23.getRefChild)(_v0.firebase, _v0.qnaActiveSessionRef, `questions/${_v0}/state`), _v16.EQuestionState.ASKED]);
    _v4.push([(0, _v23.getRefChild)(_v0.firebase, _v0.qnaActiveSessionRef, `questions/${_v1}/state`), _v16.EQuestionState.ANSWERING], [(0, _v23.getRefChild)(_v0.firebase, _v0.qnaActiveSessionRef, `questions/${_v1}/answered`), !0]), _v0.emitSignal({
      type: _v27.ELiveGraphicsSignal.QNA_QUESTION_SELECTED,
      data: _v2
    }), await (0, _v23.batchedDatabaseUpdate)(_v0.firebase, _v0.rootRef, _v4);
  }
  async function _v38(_v0, _v1, _v2) {
    _v0.assertIsInitialized(), _v0.assertActiveSessionExists();
    let {
      data: _v3
    } = _v0.queryDataSync({
      type: _v26.ELiveInteractionQuery.LIVE_INTERACTION_USER
    });
    if (!_v3) throw new _v22.LiveError("User should be authorized to submit questions.", {
      code: _v15.ELiveErrorCode.UNAUTHORIZED
    });
    let {
        isEventModerated: _v4,
        activeSessionId: _v5
      } = _v0.context,
      _v6 = _v6.vimeoConfig.USER.DEFAULT_LOGO_URL(75);
    _v0.log.info("Submitting question:", _v5, _v4);
    let _v7 = await (0, _v23.pushRefValue)(_v0.firebase, (0, _v23.getRefChild)(_v0.firebase, _v0.qnaActiveSessionRef, _v4 ? "pendingQuestions" : "questions"), {}),
      _v8 = _v2 ? null : (0, _v24.createQuestionAuthorInteractionObject)({
        id: _v3.id.toString(),
        displayName: _v3.displayName,
        avatarUrl: _v2 ? _v6 : _v3.avatarUrl ?? _v6
      }),
      _v9 = (0, _v24.createQuestionInteractionObject)({
        anonymous: _v2,
        id: _v7.key,
        state: _v4 ? _v16.EQuestionState.PENDING : _v16.EQuestionState.ASKED,
        text: _v1,
        user: _v8
      });
    await (0, _v23.setRefValue)(_v0.firebase, _v7, {
      ..._v9,
      createdAt: _v0.firebase.database.serverTimestamp()
    }), _v0.composerSessionType === _v14.EComposerSessionType.VENUE && _v10(_v5, _v7.key, _v2), _v20(_v21.QUESTION_SUBMIT, (0, _v5.default)(_v9), !0);
  }
  async function _v39(_v0, _v1) {
    _v0.assertIsInitialized(), _v0.assertActiveSessionExists();
    let _v2 = (0, _v25.queryInteractionUserSync)(_v0),
      _v3 = String(_v2?.id);
    if (!_v3) throw new _v22.LiveError("User should be authorized to vote questions.", {
      code: _v15.ELiveErrorCode.UNAUTHORIZED
    });
    let {
        activeSessionQuestions: _v4,
        activeSessionId: _v5
      } = _v0.context,
      _v6 = !!Object.values(_v4).find(_v0 => _v0.id === _v1)?.isVotedByMe,
      _v7 = !!Object.values(_v4).find(_v0 => _v0.id === _v1)?.anonymous,
      _v8 = (0, _v23.getRefChild)(_v0.firebase, _v0.qnaActiveSessionRef, `questions/${_v1}/votes/${_v3}`);
    _v6 ? (_v0.log.info("Removing vote from question:", _v1), await (0, _v23.removeRefValue)(_v0.firebase, _v8), _v0.composerSessionType === _v14.EComposerSessionType.VENUE && _v12(String(_v5), _v1, _v7, "upvote")) : (_v0.log.info("Voting for question:", _v1), await (0, _v23.pushRefValue)(_v0.firebase, _v8, {
      userId: _v3
    }), _v0.composerSessionType === _v14.EComposerSessionType.VENUE && _v11(String(_v5), _v1, _v7, "upvote"));
  }
  async function _v40(_v0, _v1, _v2) {
    _v0.log.info("Replying question:", _v1), _v0.assertIsInitialized(), _v0.assertActiveSessionExists();
    let {
      data: _v3
    } = _v0.queryDataSync({
      type: _v26.ELiveInteractionQuery.LIVE_INTERACTION_USER
    });
    if (!_v3) throw new _v22.LiveError("User should be authorized to reply questions.", {
      code: _v15.ELiveErrorCode.UNAUTHORIZED
    });
    if (!_v3.isCreator && !_v3.capabilities.canUseQnaModeration) throw new _v22.LiveError("User should be creator or moderator to reply questions.", {
      code: _v15.ELiveErrorCode.OPERATION_RESTRICTED
    });
    let {
        activeSessionQuestions: _v4,
        activeSessionId: _v5
      } = _v0.context,
      _v6 = !!Object.values(_v4).find(_v0 => _v0.id === _v1)?.anonymous;
    _v0.log.info("Submitting reply for question:", _v1, _v5);
    let _v7 = await (0, _v23.pushRefValue)(_v0.firebase, (0, _v23.getRefChild)(_v0.firebase, _v0.qnaRepliesSessionsRef, `${_v5}/${_v1}`), {}),
      _v8 = (0, _v24.createQuestionReplyInteractionObject)({
        questionId: _v1,
        text: _v2,
        user: (0, _v24.createQuestionAuthorInteractionObject)({
          id: _v3.id.toString(),
          displayName: _v3.displayName,
          avatarUrl: _v3.avatarUrl ?? _v6.vimeoConfig.USER.DEFAULT_LOGO_URL(75)
        })
      });
    await (0, _v23.setRefValue)(_v0.firebase, _v7, {
      ..._v8,
      createdAt: _v0.firebase.database.serverTimestamp()
    }), _v0.composerSessionType === _v14.EComposerSessionType.VENUE && _v13(String(_v5), _v1, _v6, _v7.key);
  }
  async function _v41(_v0, _v1, _v2) {
    if (_v0.log.info("Deleting question reply:", _v2), !_v2 || !_v1) throw new _v22.LiveError("No question id or reply id supplied for removal.", {
      code: _v15.ELiveErrorCode.INVALID_PARAMETERS
    });
    _v0.assertIsInitialized(), _v0.assertActiveSessionExists(), _v0.assertQuestionExists(_v1);
    let {
      data: _v3
    } = _v0.queryDataSync({
      type: _v26.ELiveInteractionQuery.LIVE_INTERACTION_USER
    });
    if (!_v3) throw new _v22.LiveError("User should be authorized to delete questions replies.", {
      code: _v15.ELiveErrorCode.UNAUTHORIZED
    });
    if (!_v3.isCreator && !_v3.capabilities.canUseQnaModeration) throw new _v22.LiveError("User should be creator or moderator to delete questions replies.", {
      code: _v15.ELiveErrorCode.OPERATION_RESTRICTED
    });
    let {
      activeSessionId: _v4
    } = _v0.context;
    await (0, _v23.removeRefValue)(_v0.firebase, (0, _v23.getRefChild)(_v0.firebase, _v0.qnaRepliesSessionsRef, `${_v4}/${_v1}/${_v2}`));
  }
  async function _v42(_v0, _v1) {
    _v0.log.info("Pinning question:", _v1), _v0.assertIsInitialized(), _v0.assertActiveSessionExists();
    let {
        activeSessionQuestions: _v2,
        activeSessionPinnedQuestionId: _v3
      } = _v0.context,
      _v4 = _v0.assertQuestionExists(_v1, _v2);
    _v4.state === _v16.EQuestionState.PENDING || _v4.state === _v16.EQuestionState.ARCHIVED ? _v0.log.warn(`Can not pin ${_v4.state} question.`) : _v1 === _v3 ? _v0.log.warn("Question is already pinned") : await (0, _v23.setRefValue)(_v0.firebase, (0, _v23.getRefChild)(_v0.firebase, _v0.qnaActiveSessionRef, "pinnedQuestionId"), _v1);
  }
  async function _v43(_v0, _v1) {
    _v0.log.info("Unpinning question:", _v1), _v0.assertIsInitialized(), _v0.assertActiveSessionExists();
    let {
        activeSessionQuestions: _v2,
        activeSessionPinnedQuestionId: _v3
      } = _v0.context,
      _v4 = _v0.assertQuestionExists(_v1, _v2);
    _v4.state === _v16.EQuestionState.PENDING || _v4.state === _v16.EQuestionState.ARCHIVED ? _v0.log.warn(`Can not unpin ${_v4.state} question.`) : _v1 !== _v3 ? _v0.log.warn("Question is not pinned") : await (0, _v23.removeRefValue)(_v0.firebase, (0, _v23.getRefChild)(_v0.firebase, _v0.qnaActiveSessionRef, "pinnedQuestionId"));
  }
  function _v44(_v0) {
    _v0.log.info("Disposing manager"), _v0.disposeSubscribers(), _v0.qnaSessionsRef = null, _v0.qnaModerationStatusRef = null, _v0.qnaActiveSessionRef = null, _v0.qnaActiveSessionMetaRef = null, _v0.qnaRepliesSessionsRef = null, _v0.rootRef = null, _v0.qnaRepliesBuffer = null, _v0.setContext({
      config: {
        canUseQnaModeration: null,
        canViewQnaModeration: null
      },
      qnaSessionsHistory: [],
      activeSessionId: null,
      activeSession: null,
      activeSessionQuestions: {},
      activeSessionPendingQuestions: {},
      isEventModerated: null,
      qnaReplies: {}
    });
  }
  function _v45(_v0) {
    _v0.qnaActiveSessionRef && (_v0.log.info("Unsubscribing from qna session:", _v0.qnaActiveSessionRef.toString()), _v0.qnaActiveSessionRef = null, _v0.activeSessionUnSubscribers.forEach(_v0 => _v0()), _v0.activeSessionUnSubscribers.splice(0), _v0.setContext({
      activeSessionId: null,
      activeSession: null,
      activeSessionQuestions: {},
      activeSessionPendingQuestions: {}
    }));
  }
  var _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0);
  async function _v51(_v0, _v1) {
    _v0.log.info("Hydrating QNA moderation:", _v1.toString());
    try {
      let _v0 = !!(await (0, _v23.getRefValue)(_v0.firebase, _v1));
      _v0.log.info("Hydrated moderation state:", _v0), _v0.setContext({
        isEventModerated: _v0
      });
    } catch (_v0) {
      (0, _v49.trackLiveError)(_v0, {
        method: "hydrateModerationState",
        category: _v50.ELiveErrorCategory.INTERACTION,
        data: {
          moderationRef: _v1.toString()
        }
      });
    }
  }
  async function _v52(_v0, _v1) {
    _v0.log.info("Hydrating QNA anonymous question state:", _v1.toString());
    try {
      let _v0 = !!(await (0, _v23.getRefValue)(_v0.firebase, _v1));
      _v0.log.info("Hydrated anonymous question state:", _v0), _v0.setContext({
        isAnonymousQuestionsDisabled: _v0
      });
    } catch (_v0) {
      (0, _v49.trackLiveError)(_v0, {
        method: "hydrateAnonymousQuestionsState",
        category: _v50.ELiveErrorCategory.INTERACTION,
        data: {
          anonymousQuestionsRef: _v1.toString()
        }
      });
    }
  }
  async function _v53(_v0, _v1, _v2) {
    _v0.log.info("Hydrating active QNA session:", _v2.toString());
    try {
      let _v0 = await (0, _v23.getRefValue)(_v0.firebase, _v2);
      if (_v0) {
        let _v0 = (0, _v23.getRefChild)(_v0.firebase, _v1, String(_v0)),
          _v1 = (0, _v23.getRefChild)(_v0.firebase, _v0.qnaRepliesSessionsRef, String(_v0)),
          _v2 = await _v54(_v0, _v0);
        if (_v2) {
          let _v0 = (0, _v25.queryInteractionUserSync)(_v0),
            [_v1, _v2, _v3, _v4] = (0, _v47.transformQnASession)(_v2.id, _v2, String(_v0?.id));
          _v0.log.info("Hydrated active QNA session:", _v1, _v0.toString()), _v0.setContext({
            activeSessionId: _v0,
            activeSession: _v1,
            activeSessionQuestions: _v2,
            activeSessionPendingQuestions: _v3,
            activeSessionPinnedQuestionId: _v4
          });
        } else _v0.log.info("Hydrated active QNA id:", _v0, _v2.toString()), _v0.setContext({
          activeSessionId: _v0
        });
        _v55(_v0, _v0, _v1);
      }
    } catch (_v0) {
      (0, _v49.trackLiveError)(_v0, {
        method: "hydrateActiveSession",
        category: _v50.ELiveErrorCategory.INTERACTION,
        data: {
          activeSessionIdRef: _v2.toString()
        }
      });
    }
  }
  async function _v54(_v0, _v1) {
    let _v2 = await (0, _v23.getRefValue)(_v0.firebase, _v1);
    return _v2 && (0, _v49.checkErrorsAndTrack)({
      possibleErrors: (0, _v46.collectQuestionSessionInteractionErrors)(_v2),
      data: _v2,
      methodName: "onActiveSessionValue"
    }) ? _v2 : null;
  }
  function _v55(_v0, _v1, _v2) {
    let _v3 = _v0 => {
        let _v1 = _v0.val();
        if (_v1 && (0, _v49.checkErrorsAndTrack)({
          possibleErrors: (0, _v46.collectQuestionSessionInteractionErrors)(_v1),
          data: _v1,
          methodName: "onActiveSessionValue"
        })) {
          let _v0 = (0, _v25.queryInteractionUserSync)(_v0),
            [_v1, _v2, _v3, _v4] = (0, _v47.transformQnASession)(_v0.key, _v1, String(_v0?.id));
          _v0.setContext({
            activeSession: _v1,
            activeSessionQuestions: _v2,
            activeSessionPendingQuestions: _v3,
            activeSessionPinnedQuestionId: _v4
          });
        } else _v0.setContext({
          activeSession: null,
          activeSessionQuestions: {},
          activeSessionPendingQuestions: {},
          activeSessionPinnedQuestionId: null
        }), _v0.qnaRepliesBuffer && _v0.qnaRepliesBuffer.resetValue();
      },
      _v4 = _v0 => {
        _v0.qnaRepliesBuffer ? _v0.qnaRepliesBuffer.updateValue({
          [_v0.key]: (0, _v47.transformBulkedQuestionReplies)(_v0.val())
        }) : _v0.log.warn("Question appeared without initialized buffer");
      },
      _v5 = _v0 => {
        _v0.qnaRepliesBuffer ? _v0.qnaRepliesBuffer.updateValue({
          [_v0.key]: (0, _v47.transformBulkedQuestionReplies)(_v0.val())
        }) : _v0.log.warn("Question changed without initialized buffer");
      },
      _v6 = _v0 => {
        _v0.qnaRepliesBuffer ? _v0.qnaRepliesBuffer.setValue((0, _v48.omit)(_v0.qnaRepliesBuffer.getValue(), _v0.key)) : _v0.log.warn("Question changed without initialized buffer");
      };
    _v0.log.info("Subscribing to active qna session:", _v1.toString()), _v0.qnaActiveSessionRef = _v1, (0, _v23.onRefEvent)(_v0.firebase, _v1, "value", _v3, "active-session-value"), (0, _v23.onRefEvent)(_v0.firebase, _v2, "child_added", _v4, "active-session-reply-added"), (0, _v23.onRefEvent)(_v0.firebase, _v2, "child_removed", _v6, "active-session-reply-removed"), (0, _v23.onRefEvent)(_v0.firebase, _v2, "child_changed", _v5, "active-session-reply-changed"), _v0.activeSessionUnSubscribers.push(() => {
      (0, _v23.offRefEvent)(_v0.firebase, _v1, "value", _v3), (0, _v23.offRefEvent)(_v0.firebase, _v2, "child_added", _v4), (0, _v23.offRefEvent)(_v0.firebase, _v2, "child_removed", _v6), (0, _v23.offRefEvent)(_v0.firebase, _v2, "child_changed", _v5);
    });
  }
  var _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0),
    _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v61 = _v0.i(0);
  class _v62 extends _v61.UnsubscribingContextManager {
    static createBufferConfig(_v0, _v1) {
      return {
        name: _v1,
        initialValue: {},
        throttleDelay: _v57.interactionToolsConfig.QNA.QNA_REPLIES_UPDATE_THROTTLE,
        onUpdate: _v0 => {
          _v0.setContext({
            qnaReplies: _v0
          });
        }
      };
    }
    context = {
      qnaActions: (0, _v3.createActions)({
        createQnASession: _v0 => this.createQnASession(_v0),
        openQnASession: _v0 => this.openQnASession(_v0),
        closeQnASession: () => this.closeQnASession(),
        toggleModerationState: _v0 => this.toggleModerationState(_v0),
        toggleAnonymousQuestionsState: _v0 => this.toggleAnonymousQuestionsState(_v0),
        approveQuestion: _v0 => this.approveQuestion(_v0),
        archiveQuestion: (_v0, _v1) => this.archiveQuestion(_v0, _v1),
        unArchiveQuestion: (_v0, _v1) => this.unArchiveQuestion(_v0, _v1),
        deactivateQuestion: _v0 => this.deactivateQuestion(_v0),
        answerQuestion: _v0 => this.answerQuestion(_v0),
        submitQuestion: (_v0, _v1) => this.submitQuestion(_v0, _v1),
        voteQuestion: _v0 => this.voteQuestion(_v0),
        submitQuestionReply: (_v0, _v1) => this.submitQuestionReply(_v0, _v1),
        deleteQuestionReply: (_v0, _v1) => this.deleteQuestionReply(_v0, _v1),
        pinQuestion: _v0 => this.pinQuestion(_v0),
        unPinQuestion: _v0 => this.unPinQuestion(_v0)
      }),
      config: {
        canUseQnaModeration: null,
        canViewQnaModeration: null
      },
      isHydrated: !1,
      hydratedAt: null,
      isEventModerated: null,
      isAnonymousQuestionsDisabled: null,
      qnaSessionsHistory: [],
      activeSessionId: null,
      activeSession: null,
      activeSessionQuestions: {},
      activeSessionPendingQuestions: {},
      activeSessionPinnedQuestionId: null,
      qnaReplies: {}
    };
    log = new _v4.Logger("🌮QNA");
    isModuleActive = !1;
    composerSessionType;
    firebase;
    qnaSessionsRef = null;
    qnaModerationStatusRef = null;
    qnaAnonymousQuestionsStatusRef = null;
    qnaActiveSessionRef = null;
    qnaActiveSessionMetaRef = null;
    qnaRepliesSessionsRef = null;
    rootRef = null;
    activeSessionUnSubscribers = [];
    qnaRepliesBuffer = null;
    constructor(_v0) {
      super(), this.isModuleActive = (0, _v59.checkModuleIsActive)(_v0?.interaction?.feature?.module, _v16.EInteractionModule.QNA), this.composerSessionType = _v0?.sessionType;
    }
    onProvisionEnded() {
      return _v44(this);
    }
    disposeSubscribers(_v0) {
      super.disposeSubscribers(_v0), _v0 || _v45(this);
    }
    async createQnASession(_v0) {
      return (0, _v49.withLiveErrorTracking)(() => _v28(this, _v0), {
        method: "createQnASession",
        category: _v50.ELiveErrorCategory.INTERACTION
      });
    }
    async toggleModerationState(_v0) {
      return (0, _v49.withLiveErrorTracking)(() => _v29(this, _v0), {
        method: "toggleModerationState",
        category: _v50.ELiveErrorCategory.INTERACTION,
        data: {
          isQnAModerated: _v0,
          qnaModerationStatusRef: this.qnaModerationStatusRef?.toString()
        }
      });
    }
    async toggleAnonymousQuestionsState(_v0) {
      return (0, _v49.withLiveErrorTracking)(() => _v30(this, _v0), {
        method: "toggleAnonymousQuestionsState",
        category: _v50.ELiveErrorCategory.INTERACTION,
        data: {
          isAnonymousQuestionsDisabled: _v0,
          qnaAnonymousQuestionsStatusRef: this.qnaAnonymousQuestionsStatusRef?.toString()
        }
      });
    }
    async openQnASession(_v0) {
      return (0, _v49.withLiveErrorTracking)(() => _v31(this, _v0), {
        method: "openQnASession",
        category: _v50.ELiveErrorCategory.INTERACTION,
        data: {
          sessionId: _v0,
          qnaSessionsRef: this.qnaSessionsRef?.toString()
        }
      });
    }
    async closeQnASession() {
      return (0, _v49.withLiveErrorTracking)(() => _v32(this), {
        method: "closeQnASession",
        category: _v50.ELiveErrorCategory.INTERACTION
      });
    }
    async approveQuestion(_v0) {
      return (0, _v49.withLiveErrorTracking)(() => _v33(this, _v0), {
        method: "approveQuestion",
        category: _v50.ELiveErrorCategory.INTERACTION,
        data: {
          questionId: _v0,
          qnaActiveSessionRef: this.qnaActiveSessionRef?.toString()
        }
      });
    }
    async archiveQuestion(_v0, _v1) {
      return (0, _v49.withLiveErrorTracking)(() => _v34(this, _v0, _v1), {
        method: "approveQuestion",
        category: _v50.ELiveErrorCategory.INTERACTION,
        data: {
          questionId: _v0,
          isApproved: _v1,
          qnaActiveSessionRef: this.qnaActiveSessionRef?.toString()
        }
      });
    }
    async unArchiveQuestion(_v0, _v1) {
      return (0, _v49.withLiveErrorTracking)(() => _v35(this, _v0, _v1), {
        method: "unArchiveQuestion",
        category: _v50.ELiveErrorCategory.INTERACTION,
        data: {
          questionId: _v0,
          isApproved: _v1,
          qnaActiveSessionRef: this.qnaActiveSessionRef?.toString()
        }
      });
    }
    async deactivateQuestion(_v0) {
      return (0, _v49.withLiveErrorTracking)(() => _v36(this, _v0), {
        method: "deactivateQuestion",
        category: _v50.ELiveErrorCategory.INTERACTION
      });
    }
    async answerQuestion(_v0) {
      return (0, _v49.withLiveErrorTracking)(() => _v37(this, _v0), {
        method: "answerQuestion",
        category: _v50.ELiveErrorCategory.INTERACTION
      });
    }
    async submitQuestion(_v0, _v1 = !1) {
      return (0, _v49.withLiveErrorTracking)(() => _v38(this, _v0, _v1), {
        method: "submitQuestion",
        category: _v50.ELiveErrorCategory.INTERACTION,
        data: {
          question: _v0,
          isAnonymous: _v1,
          qnaActiveSessionRef: this.qnaActiveSessionRef?.toString()
        }
      });
    }
    async voteQuestion(_v0) {
      return (0, _v49.withLiveErrorTracking)(() => _v39(this, _v0), {
        method: "voteQuestion",
        category: _v50.ELiveErrorCategory.INTERACTION
      });
    }
    async submitQuestionReply(_v0, _v1) {
      return (0, _v49.withLiveErrorTracking)(() => _v40(this, _v0, _v1), {
        method: "submitQuestionReply",
        category: _v50.ELiveErrorCategory.INTERACTION
      });
    }
    async deleteQuestionReply(_v0, _v1) {
      return (0, _v49.withLiveErrorTracking)(() => _v41(this, _v0, _v1), {
        method: "deleteQuestionReply",
        category: _v50.ELiveErrorCategory.INTERACTION
      });
    }
    async pinQuestion(_v0) {
      return (0, _v49.withLiveErrorTracking)(() => _v42(this, _v0), {
        method: "pinQuestion",
        category: _v50.ELiveErrorCategory.INTERACTION,
        data: {
          questionId: _v0,
          qnaActiveSessionRef: this.qnaActiveSessionRef?.toString()
        }
      });
    }
    async unPinQuestion(_v0) {
      return (0, _v49.withLiveErrorTracking)(() => _v43(this, _v0), {
        method: "unPinQuestion",
        category: _v50.ELiveErrorCategory.INTERACTION,
        data: {
          questionId: _v0,
          qnaActiveSessionRef: this.qnaActiveSessionRef?.toString()
        }
      });
    }
    assertQuestionExists(_v0, _v1 = this.context.activeSessionQuestions) {
      let _v2 = _v1[_v0];
      if (!_v2) throw new _v22.LiveError("Cannot modify question that does not exist.");
      return _v2;
    }
    assertIsInitialized() {
      if (!this.qnaSessionsRef || !this.qnaActiveSessionMetaRef || !this.qnaModerationStatusRef || !this.qnaAnonymousQuestionsStatusRef) throw new _v22.LiveError("QnA manager is not initialized.", {
        code: _v15.ELiveErrorCode.INITIALIZATION
      });
    }
    assertActiveSessionExists() {
      if (!this.qnaActiveSessionRef) throw new _v22.LiveError("QnA session is not initialized.", {
        code: _v15.ELiveErrorCode.INITIALIZATION
      });
    }
    async onChatApplicationReady({
      data: {
        firebase: _v0,
        app: _v1,
        roomId: _v2,
        user: _v3,
        roomHash: _v4,
        metadata: _v5
      }
    }) {
      if (this.firebase = _v0, this.isModuleActive) {
        var _v6, _v7, _v8, _v9, _v10, _v11, _v12;
        let _v0, _v1, _v2;
        this.log.info("🚀Initializing qna connection:", _v2, _v4, _v3), (0, _v49.trackLiveAction)("fb_init_qna_manager"), this.qnaRepliesBuffer = new _v60.InMemoryBuffer(_v62.createBufferConfig(this, "qnaRepliesBuffer"));
        let _v3 = (0, _v23.getRealtimeDatabase)(_v0, _v1);
        this.rootRef = (0, _v23.getDatabaseRootRef)(_v0, _v3), this.qnaSessionsRef = (0, _v23.getDatabaseRef)(_v0, _v3, _v56.firebaseConfig.REFS.INTERACTION.QNA.SESSIONS(_v2)), this.qnaActiveSessionMetaRef = (0, _v23.getDatabaseRef)(_v0, _v3, _v56.firebaseConfig.REFS.INTERACTION.QNA.ACTIVE_ID(_v2)), this.qnaModerationStatusRef = (0, _v23.getDatabaseRef)(_v0, _v3, _v56.firebaseConfig.REFS.INTERACTION.QNA.MODERATION(_v4)), this.qnaAnonymousQuestionsStatusRef = (0, _v23.getDatabaseRef)(_v0, _v3, _v56.firebaseConfig.REFS.INTERACTION.QNA.ANONYMOUS_QUESTIONS(_v4)), this.qnaRepliesSessionsRef = (0, _v23.getDatabaseRef)(_v0, _v3, _v56.firebaseConfig.REFS.INTERACTION.QNA.REPLIES_SESSIONS(_v2)), await Promise.all([_v53(this, this.qnaSessionsRef, this.qnaActiveSessionMetaRef), _v51(this, this.qnaModerationStatusRef), _v52(this, this.qnaAnonymousQuestionsStatusRef)]).finally(() => {
          this.log.info("Hydration finished"), this.setContext({
            isHydrated: !0,
            hydratedAt: (0, _v58.getAbsoluteNow)(),
            qnaSessionsHistory: _v5?.connections?.questionsHistory || [],
            config: {
              canUseQnaModeration: _v3?.capabilities?.canUseQnaModeration,
              canViewQnaModeration: !0
            }
          });
        }), this.addUnSubscribers([(_v6 = this, _v7 = this.qnaSessionsRef, _v8 = this.qnaActiveSessionMetaRef, _v0 = _v0 => {
          let _v1 = _v0.val(),
            _v2 = _v6.context.activeSessionId;
          _v2 !== _v1 && (_v6.log.info("QnA active session changed:", _v2, "->", _v1), _v2 && _v45(_v6), _v1 && (_v6.setContext({
            activeSessionId: _v1
          }), _v55(_v6, (0, _v23.getRefChild)(_v6.firebase, _v7, String(_v1)), (0, _v23.getRefChild)(_v6.firebase, _v6.qnaRepliesSessionsRef, String(_v1)))));
        }, (0, _v23.onRefEvent)(_v6.firebase, _v8, "value", _v0, "active-session-id"), () => (0, _v23.offRefEvent)(_v6.firebase, _v8, "value", _v0)), (_v9 = this, _v10 = this.qnaModerationStatusRef, _v1 = _v0 => {
          let _v1 = !!_v0.val(),
            {
              isEventModerated: _v2
            } = _v9.context;
          _v1 !== _v2 && (_v9.log.info("QnA moderation state changed:", _v9.context.isEventModerated, "->", _v1), _v9.setContext({
            isEventModerated: _v1
          }));
        }, (0, _v23.onRefEvent)(_v9.firebase, _v10, "value", _v1, "moderation-state"), () => (0, _v23.offRefEvent)(_v9.firebase, _v10, "value", _v1)), (_v11 = this, _v12 = this.qnaAnonymousQuestionsStatusRef, _v2 = _v0 => {
          let _v1 = !!_v0.val(),
            {
              isAnonymousQuestionsDisabled: _v2
            } = _v11.context;
          _v1 !== _v2 && (_v11.log.info("QnA anonymous question state changed:", _v11.context.isAnonymousQuestionsDisabled, "->", _v1), _v11.setContext({
            isAnonymousQuestionsDisabled: _v1
          }));
        }, (0, _v23.onRefEvent)(_v11.firebase, _v12, "value", _v2, "anonymous-question-state"), () => (0, _v23.offRefEvent)(_v11.firebase, _v12, "value", _v2))]);
      } else this.log.info("🚀Skipping qna connection");
    }
    onInteractionSessionLogout() {
      return _v44(this);
    }
  }
  (0, _v2._)([(0, _v3.OnSignal)(_v27.ELiveRealtimeSignal.FIREBASE_INTERACTION_APP_READY)], _v62.prototype, "onChatApplicationReady", null), (0, _v2._)([(0, _v3.OnSignal)(_v27.ELiveSignal.INTERACTION_SESSION_LOGOUT)], _v62.prototype, "onInteractionSessionLogout", null), _v0.s(["QnAManager", 0, _v62], 0);
}