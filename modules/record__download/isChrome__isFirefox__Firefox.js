{
  "use strict";

  _v0.s(["isChrome", 0, () => "u" > typeof navigator && /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor), "isFirefox", 0, () => window.navigator.userAgent.indexOf("Firefox") > -1 && -1 === window.navigator.userAgent.indexOf("Chrome")]);
}