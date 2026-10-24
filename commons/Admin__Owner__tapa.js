{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  function _v9(_v0, _v1) {
    if (!_v0) return [_v7.DEFAULT_PRIVACY_VALUES.PRIVATE];
    let _v2 = ["Admin", "Owner"].includes(_v0) ? "tapa" : "tapc";
    return _v1?.[_v2] || [_v7.DEFAULT_PRIVACY_VALUES.PRIVATE];
  }
  _v0.s(["getAllowedEnterprisePrivacyOptions", 0, _v9, "useUserAllowedPrivacies", 0, (_v0, _v1) => {
    let _v2 = (0, _v6.useViewer)(),
      _v3 = _v0 ? _v0.teamOwnersId : _v2?.teamUser?.ownerId ?? _v2?.user?.id,
      _v4 = _v0 ? _v0.teamPermissionLevel : _v2?.teamUser?.plainTextPermissionLevel,
      {
        capabilities: _v5,
        loading: _v6
      } = (0, _v2.useCapability)(["hasEnterprise", "canUnlistVideo", "canHideVideos", "hasVideoPasswordPrivacyUpsell"], _v3),
      {
        free_tier_unlisted_expiry_days: _v7
      } = (0, _v5.useOrionSettingsFields)(["free_tier_unlisted_expiry_days"]),
      _v8 = _v2?.user?.id,
      _v9 = _v2?.user?.account,
      _v10 = _v2?.teamUser?.ownerId,
      _v11 = _v2?.teamUser?.accountType,
      _v12 = (0, _v1.useMemo)(() => {
        if (null != _v3) {
          if (_v3 === _v8) return _v9;
          if (null != _v10 && _v3 === _v10) return _v11;
        }
      }, [_v3, _v8, _v9, _v10, _v11]),
      _v13 = (0, _v1.useMemo)(() => _v5 && (_v1?.includeFreeTierUnlisted ?? !0) ? {
        ..._v5,
        canUnlistVideo: (0, _v8.resolveEffectiveCanUnlistVideo)(_v5.canUnlistVideo, _v7, _v12)
      } : _v5, [_v5, _v1?.includeFreeTierUnlisted, _v7, _v12]),
      _v14 = _v13?.hasEnterprise,
      {
        data: _v15,
        isLoading: _v16
      } = (0, _v3.useGetUserPreferences)(() => _v14 && _v3 ? {
        where: {
          userId: _v3
        },
        select: ["tapa", "tapc"]
      } : null, {
        revalidateOnFocus: !1
      }),
      {
        data: _v17,
        isLoading: _v18
      } = (0, _v4.useGetUserTeammembers)(() => !_v14 || _v0 || _v4 || !_v3 ? null : {
        where: {
          userId: _v3
        },
        query: {
          users: String(_v3)
        },
        select: ["permissionLevel"]
      }, {
        revalidateOnFocus: !1
      }),
      _v19 = _v4 ?? _v17?.data?.[0]?.permissionLevel ?? null;
    return {
      allowedPrivacies: (0, _v1.useMemo)(() => _v14 ? _v9(_v19, _v15) : function (_v0) {
        let {
            canUnlistVideo: _v1,
            canHideVideos: _v2,
            hasVideoPasswordPrivacyUpsell: _v3
          } = _v0,
          _v4 = [_v7.DEFAULT_PRIVACY_VALUES.PRIVATE, _v7.DEFAULT_PRIVACY_VALUES.PUBLIC];
        return _v1 && _v4.push(_v7.DEFAULT_PRIVACY_VALUES.UNLISTED), _v3 || _v4.push(_v7.DEFAULT_PRIVACY_VALUES.PASSWORD), _v2 && _v4.push(_v7.DEFAULT_PRIVACY_VALUES.HIDE_FROM_VIMEO), _v4;
      }(_v13), [_v14, _v19, _v15, _v13]),
      isLoading: _v6 || _v16 || _v18,
      shouldUseEnterprisePrivacyMode: _v14
    };
  }]);
}