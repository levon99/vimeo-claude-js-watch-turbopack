{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = "post_survey_redirect",
    _v3 = () => window.location.pathname + window.location.search + window.location.hash;
  _v0.s(["clearPostSurveyRedirect", 0, () => {
    sessionStorage.removeItem(_v2);
  }, "peekPostSurveyRedirect", 0, () => {
    let _v0 = sessionStorage.getItem(_v2);
    if (null !== _v0) return (0, _v1.isVimeoRedirectableUrl)(_v0) ? _v0 : void 0;
  }, "stashPostSurveyRedirect", 0, (_v0 = _v3()) => {
    if ((0, _v1.isVimeoRedirectableUrl)(_v0)) try {
      sessionStorage.setItem(_v2, _v0);
    } catch {}
  }]);
}