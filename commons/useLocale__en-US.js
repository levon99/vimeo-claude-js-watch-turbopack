{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["useLocale", 0, function () {
    let _v0 = (0, _v1.useOptionalViewer)();
    return _v0?.locale ?? ("u" > typeof navigator ? navigator.language : "en-US") ?? "en-US";
  }]);
}