{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useB2BRepackagingContext", 0, function () {
    let {
        settings: _v0
      } = (0, _v2.useOrionSettings)(),
      _v1 = _v0.business_plans_enforced,
      {
        capabilities: _v2,
        ready: _v3
      } = (0, _v1.useCapability)(["individualPlansWhitelisted", "repackSurveyCompleted"]),
      _v4 = _v3 && !!_v2.individualPlansWhitelisted;
    return {
      areBusinessPlansEnforced: _v1,
      isWhitelistedForIndPlans: _v4,
      showIndividualPlans: !_v1 || _v4,
      hasSubmittedSurvey: _v3 && !!_v2.repackSurveyCompleted,
      canRequestEligibility: _v3 && _v1 && !_v4
    };
  }]);
}