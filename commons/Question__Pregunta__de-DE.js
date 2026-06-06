{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = _v1.POLL_STYLE_ID.floatingBox,
    _v4 = () => ({
      question: (0, _v2.translate)({
        singular: "Question",
        dictionary: {
          es: {
            singular: "Pregunta"
          },
          "de-DE": {
            singular: "Frage"
          },
          "ja-JP": {
            singular: "質問"
          },
          "ko-KR": {
            singular: "질문"
          },
          "pt-BR": {
            singular: "Pergunta"
          },
          "zh-CN": {
            singular: "疑问"
          }
        }
      }),
      answer: (0, _v2.translate)({
        singular: "Answer",
        dictionary: {
          es: {
            singular: "Responder"
          },
          "de-DE": {
            singular: "Antworten"
          },
          "fr-FR": {
            singular: "Répondre"
          },
          "ja-JP": {
            singular: "回答"
          },
          "ko-KR": {
            singular: "답변하기"
          },
          "pt-BR": {
            singular: "Responder"
          },
          "zh-CN": {
            singular: "回答"
          }
        }
      }),
      polls: (0, _v2.translate)({
        singular: "Polls",
        dictionary: {
          es: {
            singular: "Encuestas"
          },
          "de-DE": {
            singular: "Umfragen"
          },
          "fr-FR": {
            singular: "Sondages"
          },
          "ja-JP": {
            singular: "アンケート"
          },
          "ko-KR": {
            singular: "투표"
          },
          "pt-BR": {
            singular: "Enquetes"
          },
          "zh-CN": {
            singular: "投票"
          }
        }
      }),
      pollsAndQuizzes: (0, _v2.translate)({
        singular: "Polls and quizzes",
        dictionary: {
          es: {
            singular: "Encuestas y cuestionarios"
          },
          "de-DE": {
            singular: "Umfragen und Quizfragen"
          },
          "fr-FR": {
            singular: "Sondages et quiz"
          },
          "ja-JP": {
            singular: "投票とクイズ"
          },
          "ko-KR": {
            singular: "투표 및 퀴즈"
          },
          "pt-BR": {
            singular: "Enquetes e questionários"
          },
          "zh-CN": {
            singular: "调查和测验"
          }
        }
      })
    }),
    _v5 = {
      font: "Inter_SemiBold",
      backgroundColor: "#ffffff",
      answerBackgroundColor: "#edeff2",
      answerTextColor: "#000000",
      questionTextColor: "#000000",
      styleId: _v1.POLL_STYLE_ID.resizableBox
    };
  _v0.s(["DEFAULT_INTERACTIVE_QUIZ", 0, {
    scoringMethod: "percentage",
    passPercentage: 80,
    showCorrectAnswerIfIncorrectSelected: !1,
    shuffleAnswers: !1,
    questionProgress: !0,
    retakesAmount: -1,
    scorecardOverlayIds: [],
    showConfetti: !0,
    showLogo: !1,
    logoUri: ""
  }, "DEFAULT_POLL_STYLE", 0, _v3, "DEFAULT_SHOW_CORRECT_ANSWER_IF_INCORRECT_SELECTED", 0, !1, "DEFAULT_SHUFFLE_ANSWERS", 0, !1, "FREEFORM_POLL_DEFAULTS", 0, _v5, "LMS_MAX_ANSWERS_PER_POLL", 0, 5, "MAX_ALLOWED_RETAKES", 0, 3, "MIN_ALLOWED_RETAKES", 0, 1, "MIN_ANSWERS_PER_POLL", 0, 2, "POLL_MAX_INPUT_LENGTH", 0, 120, "SCORECARD_TRIGGER_TIME_FROM_END", 0, .3, "UNLIMITED_RETAKES_VALUE", 0, -1, "getPollDefaults", 0, () => ({
    questionText: _v4().question,
    animationName: "none",
    answerText: _v0 => `${_v4().answer} #${_v0 + 1}`,
    duration: 3,
    rotate: 0
  }), "getPollTranslations", 0, _v4]);
}