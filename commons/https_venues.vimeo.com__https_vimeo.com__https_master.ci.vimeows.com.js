{
  "use strict";

  let _v1 = {
    IS_SSR: !1,
    IS_IFRAME: (() => {
      try {
        return window.self !== window.top;
      } catch (_v0) {
        return !0;
      }
    })(),
    IFRAME_ALLOWED_ORIGINS: ["https://venues.vimeo.com", "https://vimeo.com", "https://master.ci.vimeows.com", "https://vimeo.dev"],
    IS_DEV: location.host.endsWith("vimeo.dev") || location.host.endsWith(".ci.vimeows.com"),
    IS_LOCAL_DEV: location.host.endsWith("vimeo.dev"),
    IS_PRODUCTION: !0,
    IS_CI: location.host.endsWith(".ci.vimeows.com"),
    IS_COM: location.host.endsWith("vimeo.com") || location.host.endsWith("vimeo.work"),
    IS_TEST: !1,
    PROTOCOL: location.protocol,
    HOST: location.host,
    URL_BASE: `${location.protocol}//${location.host}`,
    BUILD_ID: "v1.0.14"
  };
  _v0.s(["environmentConfig", 0, _v1]);
}