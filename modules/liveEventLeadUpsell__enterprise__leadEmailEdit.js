{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  let _v8 = (0, _v2.createContext)({
    hasUpsell: !1,
    hasEnterprise: !1,
    loading: !0,
    isStaff: !1,
    hasEmailEditAccess: !1,
    hasEmailQuotaUsed: !1,
    canAccessCustomLogo: !1
  });
  _v0.s(["default", 0, function ({
    children: _v0
  }) {
    let {
        user: _v1,
        emailQuota: _v2
      } = (0, _v7.useEntityStore)(),
      {
        user: _v3
      } = (0, _v6.useViewer)(),
      _v4 = (0, _v5.getUserIdFromUri)(_v1?.uri) || _v3?.id || 0,
      {
        data: _v5,
        isLoading: _v6
      } = (0, _v3.useGetUserCapabilities)({
        where: {
          userId: _v4
        },
        select: ["liveEventLeadUpsell", "enterprise", "leadEmailEdit", "addPlayerLogo", "extraEmbedOptions"]
      }),
      {
        liveEventLeadUpsell: _v7,
        enterprise: _v8,
        leadEmailEdit: _v9,
        addPlayerLogo: _v10,
        extraEmbedOptions: _v11
      } = _v5 || {},
      _v12 = (0, _v2.useMemo)(() => ({
        hasEnterprise: _v8,
        hasUpsell: !!_v7,
        loading: _v6,
        isStaff: _v3?.badge.type === "staff",
        hasEmailEditAccess: _v9,
        canAccessCustomLogo: _v10 || _v11,
        hasEmailQuotaUsed: !!_v2 && !_v8 && _v2.capping - _v2.total <= 0
      }), [_v8, _v7, _v6, _v3?.badge.type, _v9, _v10, _v11, _v2]);
    return _v6 && !_v5 ? (0, _v1.jsx)(_v4.FullScreenLoader, {}) : (0, _v1.jsx)(_v8.Provider, {
      value: _v12,
      children: _v0
    });
  }, "useEntityCapability", 0, () => (0, _v2.useContext)(_v8)]);
}