{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = "3.4.12",
    _v4 = async (_v0, _v1, _v2) => (0, _v1.fetchBaseQuery)({
      baseUrl: `//${_v2.default.vimeoApiUrl}`,
      prepareHeaders: _v0 => (_v0.set("Authorization", `jwt ${_v2.default.jwt}`), _v0.set("Content-Type", "application/json"), _v0.set("Accept", `application/vnd.vimeo.*+json;version=${_v3}`), _v0)
    })(_v0, _v1, _v2);
  _v0.s(["TARGET_API_VERSION", 0, _v3, "baseQueryWithAuth", 0, _v4], 0);
  var _v5 = _v0.i(0);
  let _v6 = (0, _v5.createSelector)(_v0 => _v0.clip, _v0 => _v0.clipData.editSession);
  (0, _v5.createSelector)(_v0 => _v0.clip, _v0 => _v0.clipData.editSession?.status);
  let _v7 = (0, _v5.createSelector)(_v0 => _v0.clip, _v0 => _v0.clipData.editSession?.status === "failed"),
    _v8 = (0, _v5.createSelector)(_v0 => _v0.clip, _v0 => _v0.clipData.editSession?.isEditedByTve),
    _v9 = (0, _v5.createSelector)(_v0 => _v0.clip, _v0 => _v0.clipData.editSession?.vsid);
  _v0.s(["clipEditSessionSelector", 0, _v6, "clipEditSessionVsidSelector", 0, _v9, "isClipEditedByTveSelector", 0, _v8, "isRenderFailedSelector", 0, _v7], 0);
  let _v10 = (0, _v5.createSelector)(_v0 => _v0.clip, _v0 => !!_v0.clipData.embed?.interactive),
    _v11 = (0, _v5.createSelector)(_v0 => _v0.clip, _v0 => _v0.clipData.embedPlayerConfigUrl);
  (0, _v5.createSelector)(_v0 => _v0.clip, _v0 => _v0.clipData.embed), (0, _v5.createSelector)(_v0 => _v0.clip, _v0 => _v0.clipDataWithQueryModifications.embed), _v0.s(["clipEmbedPlayerConfigUrlSelector", 0, _v11, "clipHasWirewaxSelector", 0, _v10], 0);
}