{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  _v0.s(["useUserAllowedPrivacies", 0, _v0 => {
    let _v1 = (0, _v4.useViewer)(),
      _v2 = _v0 ? _v0.teamOwnersId : _v1?.teamUser?.ownerId ?? _v1?.user?.id,
      _v3 = _v0 ? _v0.teamPermissionLevel : _v1?.teamUser?.plainTextPermissionLevel,
      {
        capabilities: _v4,
        loading: _v5
      } = (0, _v2.useCapability)(["hasEnterprise", "canUnlistVideo", "canHideVideos", "hasVideoPasswordPrivacyUpsell"], _v2),
      _v6 = _v4?.hasEnterprise,
      {
        data: _v7,
        isLoading: _v8
      } = (0, _v3.useGetUserPreferences)(() => _v6 && _v2 ? {
        where: {
          userId: _v2
        },
        select: ["tapa", "tapc"]
      } : null);
    return {
      allowedPrivacies: (0, _v1.useMemo)(() => _v6 ? function (_v0, _v1) {
        if (!_v0) return [_v5.DEFAULT_PRIVACY_VALUES.PRIVATE];
        let _v2 = ["Admin", "Owner"].includes(_v0) ? "tapa" : "tapc";
        return _v1?.[_v2] || [_v5.DEFAULT_PRIVACY_VALUES.PRIVATE];
      }(_v3, _v7) : function (_v0) {
        let {
            canUnlistVideo: _v1,
            canHideVideos: _v2,
            hasVideoPasswordPrivacyUpsell: _v3
          } = _v0,
          _v4 = [_v5.DEFAULT_PRIVACY_VALUES.PRIVATE, _v5.DEFAULT_PRIVACY_VALUES.PUBLIC];
        return _v1 && _v4.push(_v5.DEFAULT_PRIVACY_VALUES.UNLISTED), _v3 || _v4.push(_v5.DEFAULT_PRIVACY_VALUES.PASSWORD), _v2 && _v4.push(_v5.DEFAULT_PRIVACY_VALUES.HIDE_FROM_VIMEO), _v4;
      }(_v4), [_v6, _v3, _v7, _v4]),
      isLoading: _v5 || _v8,
      shouldUseEnterprisePrivacyMode: _v6
    };
  }]);
}