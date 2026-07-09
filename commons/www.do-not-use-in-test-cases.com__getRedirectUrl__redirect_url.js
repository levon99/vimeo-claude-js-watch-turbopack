{
  "use strict";

  let _v1 = "www.do-not-use-in-test-cases.com",
    _v2 = _v0 => {
      let _v1 = _v0.replace(/\\/g, "/");
      return !!_v1.startsWith("/") && !_v1.startsWith("//");
    };
  _v0.s(["getRedirectUrl", 0, () => {
    let _v0 = new URLSearchParams(location.search).get("redirect_url");
    return _v0 ? (_v0 => {
      let _v1;
      try {
        _v1 = new URL(_v0, `https://${_v1}`);
      } catch (_v0) {
        return "/";
      }
      if (!_v1 || _v1.username || _v1.password || ["/forgot_password", "/log_out", "/logged_out", "/tag:login"].includes(_v1.pathname) || "http:" !== _v1.protocol && "https:" !== _v1.protocol) return "/";
      let _v2 = _v1.searchParams.get("return_to");
      if (_v2) {
        let _v0;
        try {
          _v0 = new URL(_v2, `https://${_v1}`);
        } catch (_v0) {
          return "/";
        }
        if ("help.vimeo.com" === _v0.hostname && _v0.pathname.startsWith("/attachments")) return "/";
      }
      if (_v1.hostname === _v1) return _v2(_v0) ? _v0 : "/";
      if ("localhost" === _v1.hostname && "3001" !== _v1.port) return "/";
      for (let _v0 of ["ci.vimeows.com", "playerci.vimeows.com", "cikube.vimeows.com", "vimeopro.com", "vimeo.com", "vimeo.dev", "vimeotest.dev", "vimeo.zendesk.com", "help.vimeo.com", "localhost", "feature-slvhyk3sjq-ue.a.run.app", "spa-v2-sim-2-slvhyk3sjq-ue.a.run.app", "dev.venues.vimeows.com"]) {
        if (_v1.hostname === _v0) return _v1.href;
        let _v0 = `.${_v0}`;
        if (_v1.hostname.endsWith(_v0)) return _v1.href;
      }
      return "/";
    })(_v0 = (_v0 = decodeURIComponent(_v0)).trim().replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim, "").replace(/&(newline|tab);/gi, "")) : "/";
  }, "prepareDataForSubmitBP", 0, (_v0, _v1) => {
    let _v2 = {};
    return _v0.map(_v0 => {
      let _v1 = [];
      if (_v1.answersData.some(_v0 => _v0.id === _v0.id)) {
        let _v0 = _v1.answersData.find(_v0 => _v0.id === _v0.id);
        if (_v0 && (_v1 = [_v0.answers[0].id], _v0?.answers[0].id === "other")) {
          let _v0 = _v1.otherInputsData.find(_v0 => _v0.question === _v0.id);
          _v1.push(_v0 ? _v0.value : "");
        }
      }
      _v2[_v0.id] = _v1;
    }), _v2;
  }]);
}