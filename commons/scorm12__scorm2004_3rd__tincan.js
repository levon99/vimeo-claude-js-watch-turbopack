{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = [{
      value: "scorm12",
      label: _v1.T.STANDARD.SCORM_1
    }, {
      value: "scorm2004_3rd",
      label: _v1.T.STANDARD.SCORM_3
    }, {
      value: "tincan",
      label: _v1.T.STANDARD.XAPI
    }, {
      value: "aicc",
      label: _v1.T.STANDARD.AICC
    }, {
      value: "cmi5",
      label: _v1.T.STANDARD.CMI5
    }],
    _v3 = {
      QUIZ: "quiz",
      PERCENTAGE: "percentage",
      PASSFAIL: "passfail"
    },
    _v4 = [{
      value: _v3.QUIZ,
      label: _v1.T.QuizScore
    }, {
      value: _v3.PERCENTAGE,
      label: _v1.T.PercentageWatched
    }, {
      value: _v3.PASSFAIL,
      label: _v1.T.PassFail
    }],
    _v5 = {
      TECH_STANDARD: "standard",
      SCORING_ALGORITHM: "scoringAlgorithm",
      COMPLETION_THRESHOLD: "completionThreshold",
      COURSE_TITLE: "courseTitle",
      PASSING_SCORE: "passingScore",
      SKIPPING_FORWARD: "skipping_forward",
      SPEED: "speed"
    },
    _v6 = {
      [_v5.TECH_STANDARD]: "scorm12",
      [_v5.SCORING_ALGORITHM]: "percentage",
      [_v5.COMPLETION_THRESHOLD]: 80
    };
  _v0.s(["DOWNLOAD_LMS_OPTIONS_KEYS", 0, _v5, "FALLBACK_DOWNLOAD_PARAMS", 0, _v6, "LMS_OPTIONS_KEYS", 0, {
    TECH_STANDARD: "elmsle",
    SCORING_ALGORITHM: "elmssa",
    COMPLETION_THRESHOLD: "elmsct",
    PASSING_SCORE: "elmsps"
  }, "SCORING_ALGORITHM", 0, _v3, "SCORING_ALGORITHM_OPTIONS", 0, _v4, "TECH_STANDARD_OPTIONS", 0, _v2]);
}