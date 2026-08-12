{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = _v0 => ({
    question_id: _v0.id,
    question_text: _v0.question,
    step_index: _v0.stepIndex
  });
  _v0.s(["useIndividualEligibilityTracking", 0, () => {
    let _v0 = (0, _v2.usePico)(),
      _v1 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("individual_eligibility_cta_clicked", {
          location: _v0.location,
          offer_kind: _v0.offerKind ?? null
        });
      }, [_v0]),
      _v2 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("individual_eligibility_survey_viewed", {
          entry_point: _v0 ?? null
        });
      }, [_v0]),
      _v3 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("individual_eligibility_survey_question_viewed", {
          entry_point: _v0.entryPoint ?? null,
          ..._v3(_v0.question)
        });
      }, [_v0]),
      _v4 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("individual_eligibility_survey_question_answered", {
          entry_point: _v0.entryPoint ?? null,
          ..._v3(_v0.question),
          answers: _v0.answers.map(_v0 => ({
            answer_id: _v0.id,
            answer_text: _v0.label ?? null,
            answer_input: _v0.text ?? null
          }))
        });
      }, [_v0]),
      _v5 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("individual_eligibility_survey_submitted", {
          entry_point: _v0.entryPoint ?? null,
          respondent_type: _v0.respondentType,
          vimeo_usage: _v0.vimeoUsage,
          team_size: _v0.teamSize,
          reason_length: _v0.reasonLength
        });
      }, [_v0]),
      _v6 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("individual_eligibility_survey_outcome_shown", {
          entry_point: _v0.entryPoint ?? null,
          outcome: _v0.outcome
        });
      }, [_v0]),
      _v7 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("individual_eligibility_survey_outcome_cta_clicked", {
          entry_point: _v0.entryPoint ?? null,
          outcome: _v0.outcome
        });
      }, [_v0]);
    return {
      trackIndividualEligibilityCtaClicked: _v1,
      trackIndividualEligibilitySurveyViewed: _v2,
      trackIndividualEligibilitySurveyQuestionViewed: _v3,
      trackIndividualEligibilitySurveyQuestionAnswered: _v4,
      trackIndividualEligibilitySurveySubmitted: _v5,
      trackIndividualEligibilitySurveyOutcomeShown: _v6,
      trackIndividualEligibilitySurveyOutcomeCtaClicked: _v7,
      trackIndividualEligibilitySurveyAbandoned: (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("individual_eligibility_survey_abandoned", {
          entry_point: _v0.entryPoint ?? null,
          last_question_id: _v0.lastQuestionId,
          last_step_index: _v0.lastStepIndex
        });
      }, [_v0]),
      trackIndividualEligibilitySurveyError: (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("individual_eligibility_survey_error", {
          entry_point: _v0.entryPoint ?? null,
          error_message: _v0.errorMessage
        });
      }, [_v0])
    };
  }]);
}