{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = new _v3.ResourceNotFoundError();
  _v0.s(["ErrorView", 0, ({
    shouldTrack: _v0 = !1,
    children: _v1
  }) => (0, _v1.jsxs)(_v1.Fragment, {
    children: [_v1, (0, _v1.jsx)(_v2.Center, {
      flex: "1",
      alignItems: "flex-start",
      backgroundColor: "surface",
      p: 200,
      children: (0, _v1.jsx)(_v4.ErrorPage, {
        error: _v5,
        shouldTrack: _v0,
        useBokeh: !0
      })
    })]
  })], 0);
  var _v6 = _v0.i(0);
  class _v7 {
    static isPublicFacingPrivacy(_v0) {
      return [_v6.PRIVACY_PUBLIC, _v6.PRIVACY_PASSWORD, _v6.PRIVACY_USER, _v6.PRIVACY_FOLLOW].includes(_v0);
    }
    static isInternalFacingPrivacy(_v0) {
      return !_v7.isPublicFacingPrivacy(_v0);
    }
    static isPrivacyMatch(_v0, _v1) {
      return _v0 === _v1;
    }
    static isPublicPrivacy(_v0) {
      return this.isPrivacyMatch(_v0, _v6.PRIVACY_PUBLIC);
    }
    static isUnlistedPrivacy(_v0) {
      return this.isPrivacyMatch(_v0, _v6.PRIVACY_UNLISTED);
    }
    static isPasswordPrivacy(_v0) {
      return this.isPrivacyMatch(_v0, _v6.PRIVACY_PASSWORD);
    }
    static isHideFromVimeoPrivacy(_v0) {
      return this.isPrivacyMatch(_v0, _v6.PRIVACY_DISABLE);
    }
  }
  _v0.s(["PrivacyUtility", 0, _v7], 0);
}