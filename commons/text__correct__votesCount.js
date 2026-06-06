{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  function _v8({
    id: _v0,
    text: _v1,
    votesCount: _v2,
    correct: _v3
  }) {
    let _v4 = [];
    return (0, _v5.validateString)({
      field: _v0,
      fieldName: "id",
      errors: _v4
    }), (0, _v5.validateString)({
      field: _v1,
      fieldName: "text",
      errors: _v4
    }), (0, _v5.validateBoolean)({
      field: _v3,
      fieldName: "correct",
      errors: _v4
    }), void 0 !== _v2 && (0, _v5.validateNumber)({
      field: _v2,
      fieldName: "votesCount",
      errors: _v4
    }), _v4;
  }
  function _v9({
    id: _v0,
    createdAt: _v1,
    state: _v2,
    question: _v3,
    options: _v4
  }) {
    let _v5 = [];
    return (0, _v5.validateString)({
      field: _v0,
      fieldName: "id",
      errors: _v5
    }), (0, _v5.validateString)({
      field: _v3,
      fieldName: "question",
      errors: _v5
    }), (0, _v5.validateDateField)({
      field: _v1,
      fieldName: "createdAt",
      errors: _v5
    }), Object.values(_v7.EPollState).includes(_v2) || _v5.push(`state should exists in EPollState, ${_v2}`), (!Array.isArray(_v4) || _v4.some(_v0 => _v8(_v0).length > 0)) && _v5.push(`options should be an array and all options should be valid, but found  ${JSON.stringify(_v4)}`), Array.isArray(_v4) && (_v4.length < 2 || _v4.length > 4) && _v5.push(`options length should be between 2 and 4, but found  ${_v4.length}`), _v5;
  }
  function _v10({
    id: _v0,
    createdAt: _v1,
    questions: _v2,
    pendingQuestions: _v3,
    startedAt: _v4,
    isQnaModerated: _v5
  }) {
    let _v6 = [];
    return (0, _v5.validateString)({
      field: _v0,
      fieldName: "id",
      errors: _v6
    }), (0, _v5.validateDateField)({
      field: _v1,
      fieldName: "createdAt",
      errors: _v6
    }), (0, _v5.validateDateField)({
      field: _v4,
      fieldName: "startedAt",
      errors: _v6
    }), (0, _v5.validateBoolean)({
      field: _v5,
      fieldName: "isQnaModerated",
      errors: _v6
    }), void 0 === _v2 || (0, _v2.default)(_v2) || _v6.push(`questions should be a plain object, but found  ${JSON.stringify(_v2)}`), void 0 === _v3 || (0, _v2.default)(_v3) || _v6.push(`pendingQuestions should be a plain object or undefined, but found  ${JSON.stringify(_v2)}`), _v6;
  }
  function _v11({
    id: _v0,
    anonymous: _v1,
    createdAt: _v2,
    state: _v3,
    text: _v4,
    user: _v5,
    votes: _v6
  }) {
    let _v7 = [];
    return (0, _v5.validateString)({
      field: _v0,
      fieldName: "id",
      errors: _v7
    }), (0, _v5.validateBoolean)({
      field: _v1,
      fieldName: "anonymous",
      errors: _v7
    }), (0, _v5.validateString)({
      field: _v4,
      fieldName: "text",
      errors: _v7
    }), (0, _v3.default)(_v4) && (_v4.length > _v6.interactionToolsConfig.QNA.MAX_QUESTION_LENGTH || !_v4.length) && _v7.push(`Qna question did not pass validation: ${_v4}, length: ${_v4}`), (0, _v5.validateDateField)({
      field: _v2,
      fieldName: "createdAt",
      errors: _v7
    }), (0, _v5.validateObject)({
      field: _v6,
      fieldName: "votes",
      errors: _v7
    }), Object.values(_v7.EQuestionState).includes(_v3) || _v7.push(`Qna question state should exists in EPollState, ${_v3}`), null != _v5 && _v14(_v5).length > 0 && _v7.push(`user should be optional plain object, but found  ${JSON.stringify(_v5)}`), _v7;
  }
  function _v12({
    questionId: _v0,
    createdAt: _v1,
    text: _v2,
    user: _v3,
    votes: _v4
  }) {
    let _v5 = [];
    return (0, _v5.validateString)({
      field: _v0,
      fieldName: "questionId",
      errors: _v5
    }), (0, _v5.validateString)({
      field: _v2,
      fieldName: "text",
      errors: _v5
    }), (0, _v3.default)(_v2) && (_v2.length > _v6.interactionToolsConfig.QNA.MAX_QUESTION_REPLY_LENGTH || !_v2.length) && _v5.push(`Qna question reply did not pass validation: ${_v2}, length: ${_v2}`), (0, _v5.validateDateField)({
      field: _v1,
      fieldName: "createdAt",
      errors: _v5
    }), (0, _v5.validateObject)({
      field: _v4,
      fieldName: "votes",
      errors: _v5
    }), void 0 === _v3 ? _v5.push("user should be plain object, but found undefined") : _v14(_v3), _v5;
  }
  function _v13({
    id: _v0,
    displayName: _v1,
    avatarUrl: _v2
  }) {
    let _v3 = [];
    return (0, _v5.validateString)({
      field: _v0,
      fieldName: "id",
      errors: _v3
    }), (0, _v5.validateString)({
      field: _v1,
      fieldName: "displayName",
      errors: _v3
    }), (0, _v5.validateString)({
      field: _v2,
      fieldName: "avatarUrl",
      errors: _v3
    }), _v3;
  }
  function _v14({
    id: _v0,
    displayName: _v1,
    avatarUrl: _v2,
    isCreator: _v3
  }) {
    let _v4 = [];
    return (0, _v5.validateString)({
      field: _v0,
      fieldName: "id",
      errors: _v4
    }), _v1 && (0, _v5.validateString)({
      field: _v1,
      fieldName: "displayName",
      errors: _v4
    }), void 0 !== _v3 && (0, _v5.validateBoolean)({
      field: _v3,
      fieldName: "isCreator",
      errors: _v4
    }), _v2 && (0, _v5.validateString)({
      field: _v2,
      fieldName: "avatarUrl",
      errors: _v4
    }), _v4;
  }
  function _v15({
    contents: _v0,
    createdAt: _v1,
    user: _v2
  }) {
    let _v3 = [];
    if ((0, _v5.validateString)({
      field: _v0,
      fieldName: "contents",
      errors: _v3
    }), (0, _v3.default)(_v0)) {
      let _v0 = _v0.trim();
      (_v0.length > _v6.interactionToolsConfig.CHAT.MAX_MESSAGE_LENGTH || !_v0.length) && _v3.push(`Chat message did not pass validation: ${_v0}, length: ${_v0}`);
    }
    return null != _v1 && (0, _v5.validateDateField)({
      field: _v1,
      fieldName: "createdAt",
      errors: _v3
    }), (0, _v5.validateObject)({
      field: _v2,
      fieldName: "user",
      errors: _v3
    }), !(0, _v4.default)(_v2) && _v14(_v2).length > 0 && _v3.push(`user should be a plain object, but found  ${JSON.stringify(_v2)}`), _v3;
  }
  _v0.s(["collectMessageAuthorInteractionErrors", 0, _v14, "collectMessageInteractionErrors", 0, _v15, "collectPollInteractionErrors", 0, _v9, "collectPollOptionInteractionErrors", 0, _v8, "collectQuestionAuthorInteractionErrors", 0, _v13, "collectQuestionInteractionErrors", 0, _v11, "collectQuestionReplyInteractionErrors", 0, _v12, "collectQuestionSessionInteractionErrors", 0, _v10], 0);
  var _v16 = _v0.i(0),
    _v17 = _v0.i(0);
  function _v18({
    id: _v0,
    createdAt: _v1 = (0, _v17.getAbsoluteNow)(),
    updatedAt: _v2 = 0,
    question: _v3,
    options: _v4,
    state: _v5 = _v7.EPollState.DRAFT
  }, {
    isDbModel: _v6,
    validate: _v7 = !0
  } = {}) {
    _v7 && (0, _v5.assertNoTypeErrors)("poll", _v9({
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
    return _v6 && (_v8.options = _v8.options.map(_v0 => (0, _v16.omit)(_v0, "votesCount"))), _v8;
  }
  function _v19({
    id: _v0,
    text: _v1,
    correct: _v2 = !1,
    votesCount: _v3 = 0
  }, {
    validate: _v4 = !0
  } = {}) {
    return _v4 && (0, _v5.assertNoTypeErrors)("poll option", _v8({
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
    return _v18({
      id: "",
      question: "",
      state: _v7.EPollState.DRAFT,
      createdAt: 0,
      options: [_v19({
        id: (0, _v1.v4)(),
        text: ""
      }, {
        validate: !1
      }), _v19({
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
    let _v4 = _v14({
      id: _v0,
      displayName: _v1,
      avatarUrl: _v2,
      isCreator: _v3
    });
    (0, _v5.assertNoTypeErrors)("message author representation", _v4);
    let _v5 = {
      id: _v0,
      displayName: _v1,
      avatarUrl: _v2
    };
    return _v3 && (_v5.isCreator = !0), _v5;
  }, "createMessageInteractionObject", 0, function ({
    contents: _v0,
    createdAt: _v1 = (0, _v17.getAbsoluteNow)(),
    user: _v2
  }) {
    let _v3 = _v15({
      contents: _v0,
      createdAt: _v1,
      user: _v2
    });
    return (0, _v5.assertNoTypeErrors)("message interaction object", _v3), {
      contents: _v0.trim(),
      createdAt: _v1,
      user: _v2
    };
  }, "createPollInteractionObject", 0, _v18, "createPollOptionInteractionObject", 0, _v19, "createQuestionAuthorInteractionObject", 0, function ({
    id: _v0,
    displayName: _v1,
    avatarUrl: _v2
  }) {
    let _v3 = {
      id: _v0,
      displayName: _v1,
      avatarUrl: _v2
    };
    return (0, _v5.assertNoTypeErrors)("question author representation", _v13(_v3)), _v3;
  }, "createQuestionInteractionObject", 0, function ({
    id: _v0,
    anonymous: _v1,
    createdAt: _v2 = (0, _v17.getAbsoluteNow)(),
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
    return (0, _v5.assertNoTypeErrors)("message question object", _v11(_v6)), _v6;
  }, "createQuestionReplyInteractionObject", 0, function ({
    questionId: _v0,
    createdAt: _v1 = (0, _v17.getAbsoluteNow)(),
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
    return (0, _v5.assertNoTypeErrors)("message question reply object", _v12(_v4)), _v4;
  }, "createQuestionSessionRecordInteractionObject", 0, function ({
    id: _v0,
    createdAt: _v1 = (0, _v17.getAbsoluteNow)(),
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
    let _v6 = _v10(_v5);
    return (0, _v5.assertNoTypeErrors)("question", _v6), _v5;
  }], 0);
}