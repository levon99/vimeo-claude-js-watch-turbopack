{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["isAgoraSupportedInBrowser", 0, function () {
    let _v0 = _v1.browserConfig.BROWSER && _v1.browserConfig.AGORA_SUPPORT[_v1.browserConfig.BROWSER.name] || null;
    return !!_v0?.version && (0, _v2.compareVersions)(_v0.version, _v1.browserConfig.BROWSER.version);
  }]);
}