{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  function _v6() {
    let [_v0, _v1] = (0, _v1.useState)(!1),
      [_v2, _v3] = (0, _v1.useState)(!1),
      [_v4, _v5] = (0, _v1.useState)(!1),
      [_v6, _v7] = (0, _v1.useState)(!1),
      _v8 = (0, _v4.useViewer)(),
      _v9 = _v8?.user?.id,
      {
        data: _v10,
        isValidating: _v11
      } = (0, _v3.useGetUserTeams)(() => _v9 ? {
        select: ["teamData.ownerId", "untranslatedUserRole"],
        where: {
          userId: _v9
        }
      } : null);
    return (0, _v1.useEffect)(() => {
      !_v11 && _v10?.data && _v10.data.forEach(_v0 => {
        "Admin" === _v0.untranslatedUserRole ? _v1(!0) : "Owner" === _v0.untranslatedUserRole ? _v3(!0) : "Contributor" === _v0.untranslatedUserRole ? _v5(!0) : "Contributor Plus" === _v0.untranslatedUserRole && _v7(!0);
      });
    }, [_v11, _v10?.data]), {
      isLoading: _v11,
      isAdmin: _v0,
      isOwner: _v2,
      isContributor: _v4,
      isContributorPlus: _v6
    };
  }
  _v0.s(["useGetRoleInAnyTeam", 0, _v6], 0);
  let _v7 = ["marketingSettings", "marketingSettingsEnterprise", "enterprise", "connectToHubspotMediaBridge", "videoLibraryLiveEvents", "liveEventLeadAnalyticsUpsell", "liveEventLeadUpsell", "salescloudCrm"];
  _v0.s(["useNeedUpsell", 0, function () {
    let [_v0, _v1] = (0, _v1.useState)({}),
      [_v2, _v3] = (0, _v1.useState)(!1),
      _v4 = (0, _v4.useViewer)(),
      _v5 = _v4?.user?.id,
      {
        isOwner: _v6,
        isLoading: _v7
      } = _v6(),
      {
        data: _v8,
        isValidating: _v9
      } = (0, _v3.useGetUserTeams)(() => _v5 ? {
        select: ["teamData.ownerId", "owner.account"],
        where: {
          userId: _v5
        }
      } : null);
    return (0, _v1.useEffect)(() => {
      _v4?.apiUrl && _v4?.jwt && _v8?.data && !(Object.keys(_v0).length > 0) && (async () => {
        _v3(!0);
        let _v0 = {};
        for (let _v0 of _v8.data) {
          let _v0 = _v0.teamData.ownerId,
            _v1 = await (0, _v2.getUserCapabilities)({
              where: {
                userId: _v0
              },
              select: _v7,
              baseUrl: `//${_v4.apiUrl}`,
              headers: {
                Authorization: `jwt ${_v4.jwt}`,
                "Content-Type": "application/json"
              }
            });
          _v7.map(_v0 => {
            _v0[_v0] = _v0[_v0] || _v1[_v0];
          });
        }
        _v1(_v0), _v3(!1);
      })();
    }, [_v0, _v8, _v4?.apiUrl, _v4?.jwt]), {
      isLoading: _v9 || _v2,
      canConnect: (0, _v1.useCallback)(_v0 => {
        if (0 === Object.keys(_v0).length || !_v0 || !_v8?.data) return !0;
        let {
          requiredCapability: _v1,
          requiredCapabilityFn: _v2,
          requiredTier: _v3
        } = _v0;
        if (_v2) return _v2(_v0);
        if (_v1) return _v0[_v1];
        if (_v3) {
          for (let _v0 of _v8.data) {
            let _v0 = _v0.owner.account;
            if ((0, _v5.compareTier)(_v0, _v3) >= 0) return !0;
          }
          return !1;
        }
        return !0;
      }, [_v0, _v8?.data]),
      hasPermissionToUpsell: !!_v7 || _v6
    };
  }], 0);
}