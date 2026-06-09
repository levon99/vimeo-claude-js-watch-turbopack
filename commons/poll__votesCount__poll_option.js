{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  function _v7({
    id: _v0,
    createdAt: _v1 = (0, _v6.getAbsoluteNow)(),
    updatedAt: _v2 = 0,
    question: _v3,
    options: _v4,
    state: _v5 = _v4.EPollState.DRAFT
  }, {
    isDbModel: _v6,
    validate: _v7 = !0
  } = {}) {
    _v7 && (0, _v3.assertNoTypeErrors)("poll", (0, _v2.collectPollInteractionErrors)({
      id: _v0,
      createdAt: _v1,
      question: _v3,
      options: _v4,
      state: _v5
    }));
    let _v8 = {
      id: _v0,
      createdAt: _v1,
      updatedAt: _v2,
      question: _v3,
      options: _v4,
      state: _v5
    };
    return _v6 && (_v8.options = _v8.options.map(_v0 => (0, _v5.omit)(_v0, "votesCount"))), _v8;
  }
  function _v8({
    id: _v0,
    text: _v1,
    correct: _v2 = !1,
    votesCount: _v3 = 0
  }, {
    validate: _v4 = !0
  } = {}) {
    return _v4 && (0, _v3.assertNoTypeErrors)("poll option", (0, _v2.collectPollOptionInteractionErrors)({
      id: _v0,
      text: _v1,
      votesCount: _v3,
      correct: _v2
    })), {
      id: _v0,
      correct: _v2,
      votesCount: _v3,
      text: _v1
    };
  }
  _v0.s(["createDefaultPollInteractionObject", 0, function () {
    return _v7({
      id: "",
      question: "",
      state: _v4.EPollState.DRAFT,
      createdAt: 0,
      options: [_v8({
        id: (0, _v1.v4)(),
        text: ""
      }, {
        validate: !1
      }), _v8({
        id: (0, _v1.v4)(),
        text: ""
      }, {
        validate: !1
      })]
    }, {
      validate: !1
    });
  }, "createMessageAuthorInteractionObject", 0, function ({
    id: _v0,
    displayName: _v1,
    avatarUrl: _v2,
    isCreator: _v3
  }) {
    let _v4 = (0, _v2.collectMessageAuthorInteractionErrors)({
      id: _v0,
      displayName: _v1,
      avatarUrl: _v2,
      isCreator: _v3
    });
    (0, _v3.assertNoTypeErrors)("message author representation", _v4);
    let _v5 = {
      id: _v0,
      displayName: _v1,
      avatarUrl: _v2
    };
    return _v3 && (_v5.isCreator = !0), _v5;
  }, "createMessageInteractionObject", 0, function ({
    contents: _v0,
    createdAt: _v1 = (0, _v6.getAbsoluteNow)(),
    user: _v2
  }) {
    let _v3 = (0, _v2.collectMessageInteractionErrors)({
      contents: _v0,
      createdAt: _v1,
      user: _v2
    });
    return (0, _v3.assertNoTypeErrors)("message interaction object", _v3), {
      contents: _v0.trim(),
      createdAt: _v1,
      user: _v2
    };
  }, "createPollInteractionObject", 0, _v7, "createPollOptionInteractionObject", 0, _v8, "createQuestionAuthorInteractionObject", 0, function ({
    id: _v0,
    displayName: _v1,
    avatarUrl: _v2
  }) {
    let _v3 = {
      id: _v0,
      displayName: _v1,
      avatarUrl: _v2
    };
    return (0, _v3.assertNoTypeErrors)("question author representation", (0, _v2.collectQuestionAuthorInteractionErrors)(_v3)), _v3;
  }, "createQuestionInteractionObject", 0, function ({
    id: _v0,
    anonymous: _v1,
    createdAt: _v2 = (0, _v6.getAbsoluteNow)(),
    state: _v3,
    text: _v4,
    user: _v5
  }) {
    let _v6 = {
      id: _v0,
      anonymous: _v1,
      createdAt: _v2,
      state: _v3,
      text: _v4.trim(),
      user: _v5,
      votes: {}
    };
    return (0, _v3.assertNoTypeErrors)("message question object", (0, _v2.collectQuestionInteractionErrors)(_v6)), _v6;
  }, "createQuestionReplyInteractionObject", 0, function ({
    questionId: _v0,
    createdAt: _v1 = (0, _v6.getAbsoluteNow)(),
    text: _v2,
    user: _v3
  }) {
    let _v4 = {
      questionId: _v0,
      createdAt: _v1,
      text: _v2.trim(),
      user: _v3,
      votes: {}
    };
    return (0, _v3.assertNoTypeErrors)("message question reply object", (0, _v2.collectQuestionReplyInteractionErrors)(_v4)), _v4;
  }, "createQuestionSessionRecordInteractionObject", 0, function ({
    id: _v0,
    createdAt: _v1 = (0, _v6.getAbsoluteNow)(),
    questions: _v2 = {},
    startedAt: _v3 = 0,
    isQnaModerated: _v4 = !1
  }) {
    let _v5 = {
      id: _v0,
      createdAt: _v1,
      startedAt: _v3,
      isQnaModerated: _v4,
      questions: _v2
    };
    !0 === _v4 && (_v5.pendingQuestions = {});
    let _v6 = (0, _v2.collectQuestionSessionInteractionErrors)(_v5);
    return (0, _v3.assertNoTypeErrors)("question", _v6), _v5;
  }]);
}