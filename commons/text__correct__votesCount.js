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
    text: _v1,
    votesCount: _v2,
    correct: _v3
  }) {
    let _v4 = [];
    return (0, _v4.validateString)({
      field: _v0,
      fieldName: "id",
      errors: _v4
    }), (0, _v4.validateString)({
      field: _v1,
      fieldName: "text",
      errors: _v4
    }), (0, _v4.validateBoolean)({
      field: _v3,
      fieldName: "correct",
      errors: _v4
    }), void 0 !== _v2 && (0, _v4.validateNumber)({
      field: _v2,
      fieldName: "votesCount",
      errors: _v4
    }), _v4;
  }
  function _v8({
    id: _v0,
    displayName: _v1,
    avatarUrl: _v2,
    isCreator: _v3
  }) {
    let _v4 = [];
    return (0, _v4.validateString)({
      field: _v0,
      fieldName: "id",
      errors: _v4
    }), _v1 && (0, _v4.validateString)({
      field: _v1,
      fieldName: "displayName",
      errors: _v4
    }), void 0 !== _v3 && (0, _v4.validateBoolean)({
      field: _v3,
      fieldName: "isCreator",
      errors: _v4
    }), _v2 && (0, _v4.validateString)({
      field: _v2,
      fieldName: "avatarUrl",
      errors: _v4
    }), _v4;
  }
  _v0.s(["collectMessageAuthorInteractionErrors", 0, _v8, "collectMessageInteractionErrors", 0, function ({
    contents: _v0,
    createdAt: _v1,
    user: _v2
  }) {
    let _v3 = [];
    if ((0, _v4.validateString)({
      field: _v0,
      fieldName: "contents",
      errors: _v3
    }), (0, _v2.default)(_v0)) {
      let _v0 = _v0.trim();
      (_v0.length > _v5.interactionToolsConfig.CHAT.MAX_MESSAGE_LENGTH || !_v0.length) && _v3.push(`Chat message did not pass validation: ${_v0}, length: ${_v0}`);
    }
    return null != _v1 && (0, _v4.validateDateField)({
      field: _v1,
      fieldName: "createdAt",
      errors: _v3
    }), (0, _v4.validateObject)({
      field: _v2,
      fieldName: "user",
      errors: _v3
    }), !(0, _v3.default)(_v2) && _v8(_v2).length > 0 && _v3.push(`user should be a plain object, but found  ${JSON.stringify(_v2)}`), _v3;
  }, "collectPollInteractionErrors", 0, function ({
    id: _v0,
    createdAt: _v1,
    state: _v2,
    question: _v3,
    options: _v4
  }) {
    let _v5 = [];
    return (0, _v4.validateString)({
      field: _v0,
      fieldName: "id",
      errors: _v5
    }), (0, _v4.validateString)({
      field: _v3,
      fieldName: "question",
      errors: _v5
    }), (0, _v4.validateDateField)({
      field: _v1,
      fieldName: "createdAt",
      errors: _v5
    }), Object.values(_v6.EPollState).includes(_v2) || _v5.push(`state should exists in EPollState, ${_v2}`), (!Array.isArray(_v4) || _v4.some(_v0 => _v7(_v0).length > 0)) && _v5.push(`options should be an array and all options should be valid, but found  ${JSON.stringify(_v4)}`), Array.isArray(_v4) && (_v4.length < 2 || _v4.length > 4) && _v5.push(`options length should be between 2 and 4, but found  ${_v4.length}`), _v5;
  }, "collectPollOptionInteractionErrors", 0, _v7, "collectQuestionAuthorInteractionErrors", 0, function ({
    id: _v0,
    displayName: _v1,
    avatarUrl: _v2
  }) {
    let _v3 = [];
    return (0, _v4.validateString)({
      field: _v0,
      fieldName: "id",
      errors: _v3
    }), (0, _v4.validateString)({
      field: _v1,
      fieldName: "displayName",
      errors: _v3
    }), (0, _v4.validateString)({
      field: _v2,
      fieldName: "avatarUrl",
      errors: _v3
    }), _v3;
  }, "collectQuestionInteractionErrors", 0, function ({
    id: _v0,
    anonymous: _v1,
    createdAt: _v2,
    state: _v3,
    text: _v4,
    user: _v5,
    votes: _v6
  }) {
    let _v7 = [];
    return (0, _v4.validateString)({
      field: _v0,
      fieldName: "id",
      errors: _v7
    }), (0, _v4.validateBoolean)({
      field: _v1,
      fieldName: "anonymous",
      errors: _v7
    }), (0, _v4.validateString)({
      field: _v4,
      fieldName: "text",
      errors: _v7
    }), (0, _v2.default)(_v4) && (_v4.length > _v5.interactionToolsConfig.QNA.MAX_QUESTION_LENGTH || !_v4.length) && _v7.push(`Qna question did not pass validation: ${_v4}, length: ${_v4}`), (0, _v4.validateDateField)({
      field: _v2,
      fieldName: "createdAt",
      errors: _v7
    }), (0, _v4.validateObject)({
      field: _v6,
      fieldName: "votes",
      errors: _v7
    }), Object.values(_v6.EQuestionState).includes(_v3) || _v7.push(`Qna question state should exists in EPollState, ${_v3}`), null != _v5 && _v8(_v5).length > 0 && _v7.push(`user should be optional plain object, but found  ${JSON.stringify(_v5)}`), _v7;
  }, "collectQuestionReplyInteractionErrors", 0, function ({
    questionId: _v0,
    createdAt: _v1,
    text: _v2,
    user: _v3,
    votes: _v4
  }) {
    let _v5 = [];
    return (0, _v4.validateString)({
      field: _v0,
      fieldName: "questionId",
      errors: _v5
    }), (0, _v4.validateString)({
      field: _v2,
      fieldName: "text",
      errors: _v5
    }), (0, _v2.default)(_v2) && (_v2.length > _v5.interactionToolsConfig.QNA.MAX_QUESTION_REPLY_LENGTH || !_v2.length) && _v5.push(`Qna question reply did not pass validation: ${_v2}, length: ${_v2}`), (0, _v4.validateDateField)({
      field: _v1,
      fieldName: "createdAt",
      errors: _v5
    }), (0, _v4.validateObject)({
      field: _v4,
      fieldName: "votes",
      errors: _v5
    }), void 0 === _v3 ? _v5.push("user should be plain object, but found undefined") : _v8(_v3), _v5;
  }, "collectQuestionSessionInteractionErrors", 0, function ({
    id: _v0,
    createdAt: _v1,
    questions: _v2,
    pendingQuestions: _v3,
    startedAt: _v4,
    isQnaModerated: _v5
  }) {
    let _v6 = [];
    return (0, _v4.validateString)({
      field: _v0,
      fieldName: "id",
      errors: _v6
    }), (0, _v4.validateDateField)({
      field: _v1,
      fieldName: "createdAt",
      errors: _v6
    }), (0, _v4.validateDateField)({
      field: _v4,
      fieldName: "startedAt",
      errors: _v6
    }), (0, _v4.validateBoolean)({
      field: _v5,
      fieldName: "isQnaModerated",
      errors: _v6
    }), void 0 === _v2 || (0, _v1.default)(_v2) || _v6.push(`questions should be a plain object, but found  ${JSON.stringify(_v2)}`), void 0 === _v3 || (0, _v1.default)(_v3) || _v6.push(`pendingQuestions should be a plain object or undefined, but found  ${JSON.stringify(_v2)}`), _v6;
  }]);
}