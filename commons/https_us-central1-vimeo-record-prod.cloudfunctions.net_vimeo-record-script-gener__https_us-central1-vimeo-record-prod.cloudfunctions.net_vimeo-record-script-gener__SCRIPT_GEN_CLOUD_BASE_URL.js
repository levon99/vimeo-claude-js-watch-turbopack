{
  "use strict";

  let _v1 = _v0.i(0).IS_DEV ? "https://us-central1-vimeo-record-prod.cloudfunctions.net/vimeo-record-script-generator-v2-staging" : "https://us-central1-vimeo-record-prod.cloudfunctions.net/vimeo-record-script-generator-v2";
  _v0.s(["SCRIPT_GEN_CLOUD_BASE_URL", 0, _v1, "getScriptGenCouldDevSecretKey", 0, () => new URLSearchParams(window.location.search).get("script_gen_secret") ?? ""], 0);
  let _v2 = new class {
    baseUrl = null;
    isInitialized = !1;
    additionalHeaders = {};
    authorizationHeaderPromise = null;
    initialize({
      baseUrl: _v0,
      xVimeoPage: _v1,
      locale: _v2
    }) {
      _v0 && (this.baseUrl = _v0, this.additionalHeaders = {
        ...this.additionalHeaders,
        "Content-Type": "application/json",
        "Vimeo-Page": `${_v1}`,
        "Accept-Language": _v2 ?? "en",
        Client: "vimeo record/studio"
      }, this.isInitialized = !0);
    }
    async setAuthorizationHeader() {
      this.authorizationHeaderPromise = fetch("/_next/jwt?source=screen_recorder", {
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          Client: "vimeo record/studio"
        }
      }).then(_v0 => _v0.json()).then(_v0 => {
        this.additionalHeaders.Authorization = `jwt ${_v0.token}`;
      }).finally(() => {
        this.authorizationHeaderPromise = null;
      }), await this.authorizationHeaderPromise;
    }
    async updateAuthorizationHeader() {
      if (this.authorizationHeaderPromise) try {
        await this.authorizationHeaderPromise;
      } catch {} else await this.setAuthorizationHeader();
    }
    async fetchWithJWT(_v0, _v1, _v2 = !0) {
      if (!this.isInitialized) throw Error("RecordJWTFetchHelper:fetchWithRecordJWT was called before initialization");
      if (!this.additionalHeaders.Authorization) try {
        await this.updateAuthorizationHeader();
      } catch (_v0) {
        throw TypeError("Couldn't get a new JWT token: " + _v0.message);
      }
      _v1.headers = {
        ..._v1.headers,
        ...this.additionalHeaders
      }, _v1.baseUrl = this.baseUrl;
      try {
        return await _v0(_v1);
      } catch (_v0) {
        if (401 === _v0.status && _v2) {
          try {
            await this.updateAuthorizationHeader();
          } catch (_v0) {
            throw TypeError("Couldn't get a new JWT token: " + _v0.message);
          }
          return await this.fetchWithJWT(_v0, _v1, !1);
        }
        throw _v0;
      }
    }
  }();
  _v0.s(["fetchHelper", 0, _v2], 0);
}