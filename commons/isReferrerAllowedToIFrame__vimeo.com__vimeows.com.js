{
  "use strict";

  _v0.s(["isReferrerAllowedToIFrame", 0, function (_v0) {
    return !!_v0 && ["vimeo.com", "vimeows.com", "vimeo.dev", "vimeows.dev"].includes(function (_v0) {
      let _v1;
      try {
        _v1 = new URL(_v0);
      } catch {
        return "";
      }
      return _v1.hostname.split(".").slice(-2).join(".");
    }(_v0));
  }]);
}