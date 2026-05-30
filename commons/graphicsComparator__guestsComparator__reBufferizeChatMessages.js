{
  "use strict";

  var _v1 = _v0.i(0);
  function _v2(_v0 = {}, _v1 = !1, _v2) {
    let _v3 = {};
    return Object.keys(_v0).forEach(_v0 => {
      let _v1 = _v0[_v0];
      _v3[_v0] = {
        id: _v0,
        approved: _v1,
        anonymous: _v1.anonymous,
        createdAt: _v1.createdAt,
        archivedAt: _v1.archivedAt || 0,
        state: _v1.state,
        text: _v1.text,
        user: _v1.user,
        repliesCount: _v1.repliesCount,
        votesCount: _v1.votes ? Object.values(_v1.votes).length : 0,
        isVotedByMe: !!_v2 && Object.keys(_v1.votes || {}).includes(_v2)
      };
    }), _v3;
  }
  _v0.s(["graphicsComparator", 0, function (_v0, _v1) {
    return _v1.createdAt - _v0.createdAt;
  }, "guestsComparator", 0, function (_v0, _v1) {
    return _v0.createdAt - _v1.createdAt;
  }, "reBufferizeChatMessages", 0, function (_v0, _v1, _v2) {
    let _v3 = {},
      _v4 = {};
    return Object.values(_v0).slice(-_v2).forEach(_v0 => {
      _v3[_v0.id] = _v0, _v4[_v0.senderId] = _v1[_v0.senderId];
    }), [_v3, _v4];
  }, "transformBulkedChatMessages", 0, function (_v0 = {}) {
    let _v1 = {},
      _v2 = {};
    return Object.keys(_v0).forEach(_v0 => {
      let _v1 = _v0[_v0],
        _v2 = _v1.user;
      _v2[_v0] = {
        id: _v0,
        message: _v1.contents,
        createdAt: _v1.createdAt,
        senderId: _v1.user.id
      }, _v1[_v2.id] = (0, _v1.camelize)(_v2);
    }), {
      users: _v1,
      messages: _v2
    };
  }, "transformBulkedQuestionReplies", 0, function (_v0 = {}) {
    let _v1 = {};
    return Object.keys(_v0).forEach(_v0 => {
      let _v1 = _v0[_v0];
      _v1[_v0] = {
        id: _v0,
        questionId: _v1.questionId,
        createdAt: _v1.createdAt,
        text: _v1.text,
        user: _v1.user
      };
    }), _v1;
  }, "transformChatMessage", 0, function (_v0, _v1) {
    return [{
      id: _v0,
      message: _v1.contents,
      createdAt: _v1.createdAt,
      senderId: _v1.user.id
    }, (0, _v1.camelize)(_v1.user)];
  }, "transformPoll", 0, function (_v0, _v1, _v2) {
    return {
      id: _v1.id || _v0,
      state: _v1.state,
      createdAt: _v1.createdAt,
      updatedAt: _v1.updatedAt,
      question: _v1.question,
      options: _v1.options ? Object.values(_v1.options).map(_v0 => {
        var _v1, _v2;
        return _v1 = _v0, _v2 = _v2, {
          id: _v1.id,
          correct: _v1.correct,
          votesCount: Object.keys(_v1.votes || {}).length,
          text: _v1.text,
          isVotedByMe: !!_v2 && Object.keys(_v1.votes || {}).includes(_v2)
        };
      }) : []
    };
  }, "transformQnASession", 0, function (_v0, _v1, _v2) {
    return [{
      id: _v0,
      createdAt: _v1.createdAt,
      isQnaModerated: _v1.isQnaModerated,
      startedAt: _v1.startedAt
    }, _v2(_v1.questions, !0, _v2), _v2(_v1.pendingQuestions), _v1.pinnedQuestionId];
  }]);
}