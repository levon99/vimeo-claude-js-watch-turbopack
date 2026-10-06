{
  "use strict";

  let _v1 = new class {
    teamOwnerId = 0;
    vimeoApiUrl = "";
    jwt = "";
    magistoApiHost = "";
    xsrft = "";
    init({
      vimeoApiUrl: _v0 = "",
      jwt: _v1 = "",
      teamOwnerId: _v2 = 0,
      magistoApiHost: _v3 = "",
      xsrft: _v4 = ""
    }) {
      this.jwt = _v1, this.vimeoApiUrl = _v0, this.teamOwnerId = _v2, this.magistoApiHost = _v3, this.xsrft = _v4;
    }
  }();
  _v0.s(["default", 0, _v1]);
}