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
  }], 0);
  var _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["Speedometer", 0, _v0 => (0, _v3.jsx)(_v4.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v3.jsxs)("g", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      fill: "currentColor",
      children: [(0, _v3.jsx)("path", {
        d: "M17.666 7.335c-3.113-3.113-8.219-3.113-11.331 0-3.113 3.112-3.113 8.218 0 11.33A1 1 0 1 1 4.92 20.08c-3.893-3.894-3.893-10.266 0-14.16 3.894-3.893 10.266-3.893 14.16 0 3.893 3.894 3.893 10.266 0 14.16a1 1 0 0 1-1.414-1.414c3.112-3.113 3.112-8.219 0-11.331Z"
      }), (0, _v3.jsx)("path", {
        d: "M16.207 9.793a1 1 0 0 1 0 1.414l-3.5 3.5a1 1 0 0 1-1.414-1.414l3.5-3.5a1 1 0 0 1 1.414 0Z"
      })]
    })
  })], 0);
}