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
      _v3 = (0, _v6.useViewer)(),
      _v4 = _v3?.user,
      _v5 = (0, _v5.getUserIdFromUri)(_v1?.uri) || _v4?.id || 0,
      {
        data: _v6,
        isLoading: _v7
      } = (0, _v3.useGetUserCapabilities)({
        where: {
          userId: _v5
        },
        select: ["liveEventLeadUpsell", "enterprise", "leadEmailEdit", "addPlayerLogo", "extraEmbedOptions"]
      }),
      {
        liveEventLeadUpsell: _v8,
        enterprise: _v9,
        leadEmailEdit: _v10,
        addPlayerLogo: _v11,
        extraEmbedOptions: _v12
      } = _v6 || {},
      _v13 = (0, _v2.useMemo)(() => ({
        hasEnterprise: _v9,
        hasUpsell: !!_v8,
        loading: _v7,
        isStaff: _v4?.badge.type === "staff",
        hasEmailEditAccess: _v10,
        canAccessCustomLogo: _v11 || _v12,
        hasEmailQuotaUsed: !!_v2 && !_v9 && _v2.capping - _v2.total <= 0
      }), [_v9, _v8, _v7, _v4?.badge.type, _v10, _v11, _v12, _v2]);
    return _v7 && !_v6 ? (0, _v1.jsx)(_v4.FullScreenLoader, {}) : (0, _v1.jsx)(_v8.Provider, {
      value: _v13,
      children: _v0
    });
  }, "useEntityCapability", 0, () => (0, _v2.useContext)(_v8)]);
}