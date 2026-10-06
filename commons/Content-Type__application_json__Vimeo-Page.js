{
  "use strict";

  let _v1 = (0, _v0.i(0).create)((_v0, _v1) => ({
    baseUrl: null,
    jwt: null,
    xVimeoPage: null,
    locale: null,
    getApiHeaders: _v0 => {
      let {
        jwt: _v1,
        xVimeoPage: _v2,
        locale: _v3
      } = _v1();
      return {
        "Content-Type": _v0 ?? "application/json",
        Authorization: _v1 ? `jwt ${_v1}` : "",
        "Vimeo-Page": _v2 ?? "",
        "Accept-Language": _v3 ?? "en"
      };
    },
    setBaseUrl: _v0 => _v0({
      baseUrl: _v0
    }),
    setJwt: _v0 => _v0({
      jwt: _v0
    }),
    setXVimeoPage: _v0 => _v0({
      xVimeoPage: _v0
    }),
    setLocale: _v0 => _v0({
      locale: _v0
    })
  }));
  _v0.s(["ApiCredentialsStore", 0, _v1, "useApiCredentialsStore", 0, _v1]);
}