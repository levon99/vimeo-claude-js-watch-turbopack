{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["useB2BRepackagingContext", 0, function (_v0, _v1) {
    let {
        settings: _v2,
        isLoadingResponse: _v3
      } = (0, _v2.useOrionSettings)(),
      _v4 = (0, _v3.useViewer)(),
      _v5 = _v2.business_plans_enforced,
      {
        capabilities: _v6,
        ready: _v7
      } = (0, _v1.useCapability)(["individualPlansWhitelisted", "repackSurveyCompleted"], _v0, _v1),
      _v8 = _v7 && !!_v6.individualPlansWhitelisted,
      _v9 = _v7 && !!_v6.repackSurveyCompleted,
      _v10 = null != _v0 || _v4?.user != null,
      _v11 = null === _v4 || _v3 || _v5 && _v10 && !_v7;
    return {
      isLoading: _v11,
      areBusinessPlansEnforced: _v5,
      isWhitelistedForIndPlans: _v8,
      showIndividualPlans: !_v11 && (!_v5 || _v10 && _v8),
      hasSubmittedSurvey: _v9,
      canRequestEligibility: !_v11 && _v5 && !_v8
    };
  }]);
}