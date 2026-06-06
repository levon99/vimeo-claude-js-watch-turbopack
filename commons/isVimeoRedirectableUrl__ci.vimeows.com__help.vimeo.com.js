{
  "use strict";

  _v0.s(["isVimeoRedirectableUrl", 0, function (_v0, _v1 = []) {
    let _v2, _v3;
    if (_v2 = function (_v0) {
      let _v1 = _v0;
      for (let _v0 = 0; _v0 < 10; _v0++) try {
        let _v0 = decodeURIComponent(_v1);
        if (_v0 === _v1) break;
        _v1 = _v0;
      } catch {
        break;
      }
      return _v1;
    }(_v0).replace(/[\x00-\x1f\x7f]/g, "").trim(), /^(javascript|data|vbscript|blob|about)\s*:/i.test(_v2)) return !1;
    if (_v1.length && _v1.includes(_v0) || _v0 && function (_v0) {
      return !/^[a-zA-Z][a-zA-Z0-9+.-]*:/m.test(_v0.trim()) && !/^https?:\/\/|^\/\//i.test(_v0) && "/" === _v0[0];
    }(_v0)) return !0;
    let _v4 = ["ci.vimeows.com", "help.vimeo.com", "vimeo.com", "vimeo.dev", "vimeo.zendesk.com", "vimeopro.com", "vimeotest.dev", "feature-slvhyk3sjq-ue.a.run.app", "spa-v2-sim-2-slvhyk3sjq-ue.a.run.app", "dev.venues.vimeows.com", "venues.vimeo.com", "localhost", "player2.vimeo.dev", "master.playerci.vimeows.com", "playerci.vimeows.com", "player.vimeo.com"];
    try {
      _v3 = new URL(_v0);
    } catch (_v0) {
      return !1;
    }
    return _v4.includes(_v3.host) || _v4.includes(_v3.hostname) || _v4.some(_v0 => _v3.host.endsWith(`.${_v0}`) || _v3.hostname.endsWith(`.${_v0}`));
  }]);
}