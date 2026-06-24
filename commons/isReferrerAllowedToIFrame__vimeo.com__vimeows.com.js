{
  "use strict";

  _v0.s(["isReferrerAllowedToIFrame", 0, function (_v0) {
    return !!_v0 && ["vimeo.com", "vimeows.com", "vimeo.dev", "vimeows.dev"].includes(new URL(_v0).hostname.split(".").slice(-2).join("."));
  }]);
}