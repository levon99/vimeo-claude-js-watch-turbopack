{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["useB2BRepackagingContext", 0, function (_v0, _v1) {
    let _v2 = (0, _v3.useOrionSetting)("business_plans_enforced"),
      _v3 = (0, _v2.useOrionLoading)(),
      _v4 = (0, _v4.useViewer)(),
      {
        capabilities: _v5,
        ready: _v6
      } = (0, _v1.useCapability)(["individualPlansWhitelisted", "repackSurveyCompleted"], _v0, _v1),
      _v7 = _v6 && !!_v5.individualPlansWhitelisted,
      _v8 = _v6 && !!_v5.repackSurveyCompleted,
      _v9 = null != _v0 || _v4?.user != null,
      _v10 = null === _v4 || _v3 || _v2 && _v9 && !_v6;
    return {
      isLoading: _v10,
      areBusinessPlansEnforced: _v2,
      isWhitelistedForIndPlans: _v7,
      showIndividualPlans: !_v10 && (!_v2 || _v9 && _v7),
      hasSubmittedSurvey: _v8,
      canRequestEligibility: !_v10 && _v2 && !_v7
    };
  }]);
}