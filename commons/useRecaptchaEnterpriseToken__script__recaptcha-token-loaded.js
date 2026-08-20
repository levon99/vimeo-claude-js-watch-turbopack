{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useRecaptchaEnterpriseToken", 0, function (_v0) {
    let _v1 = (0, _v1.useContext)(_v2.ViewerContext),
      [_v2, _v3] = (0, _v1.useState)(null);
    return _v0 ? ((0, _v1.useEffect)(() => {
      if (_v1) {
        let _v0 = document.createElement("script");
        _v0.src = `https://www.google.com/recaptcha/enterprise.js?render=${_v1.recaptchaEnterpriseScoreBasedSiteKey}&onload=onloadCallback&render=explicit`, _v0.async = !0, _v0.defer = !0, document.head.appendChild(_v0);
        let _v1 = document.createElement("script");
        _v1.async = !0, _v1.defer = !0, _v1.innerHTML = `function onloadCallback() {
             grecaptcha.enterprise.ready(async () => {
                const recaptcha_token = await grecaptcha.enterprise.execute('${_v1.recaptchaEnterpriseScoreBasedSiteKey}', {action:"join"});
                window.recaptcha_enterprise_token = recaptcha_token;
                var gb = document.getElementsByClassName("grecaptcha-badge")[0];
                gb.style.visibility = "hidden";
                let event = window.document.createEvent('CustomEvent');
                event.initCustomEvent(
                    'recaptcha-token-loaded',
                    true,
                    true,
                );
                document.dispatchEvent(event);
               })
        }`, document.body.appendChild(_v1);
      }
    }, [_v1]), (0, _v1.useEffect)(() => {
      let _v0 = function () {
        _v3(window.recaptcha_enterprise_token);
      };
      return document.addEventListener("recaptcha-token-loaded", _v0), () => {
        document.removeEventListener("recaptcha-token-loaded", _v0);
      };
    }, []), _v2) : "";
  }], 0);
}