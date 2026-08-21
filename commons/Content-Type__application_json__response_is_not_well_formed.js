{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = function (_v0) {
    (0, _v2.useEffect)(_v0, []);
  };
  function _v8(_v0) {
    return _v0.replace(/([A-Z])/g, (_v0, _v1) => "_" + _v1.toLowerCase()).replace(/^_/, "");
  }
  function _v9(_v0, _v1) {
    let _v2 = (0, _v2.useContext)(_v4.ViewerContext),
      _v3 = _v2?.teamUser?.ownerId,
      _v4 = _v2?.teamUser && (_v2.teamUser.plainTextPermissionLevel === _v6.TeamUserPermissionLevel.Contributor || _v2.teamUser.plainTextPermissionLevel === _v6.TeamUserPermissionLevel.ContributorPlus || _v2.teamUser.plainTextPermissionLevel === _v6.TeamUserPermissionLevel.Admin),
      _v5 = _v2?.user?.id,
      _v6 = _v1 ? function (_v0) {
        if (!_v0) return null;
        let _v1 = _v0.match(/^([0-9]+)$/);
        if (_v1) return _v1[1];
        let _v2 = _v0.match(/users\/([0-9]+)/);
        return _v2 ? _v2[1] : null;
      }(`${_v1}`) : _v3 && _v4 ? _v3 : _v5,
      [_v7, _v8] = (0, _v2.useState)({
        loading: !1,
        error: null,
        capabilities: {}
      }),
      {
        baseUrl: _v9
      } = (0, _v5.useGctlConfig)(),
      _v10 = (0, _v2.useMemo)(() => ({
        baseUrl: _v9,
        userId: _v6
      }), [_v9, _v6]),
      _v11 = (0, _v2.useCallback)(async () => {
        let _v0 = _v2?.jwt;
        if (_v6 && _v0) {
          _v8(_v0 => ({
            ..._v0,
            loading: !0
          }));
          try {
            let _v0 = _v0.reduce((_v0, _v1) => {
                let _v2 = _v1.match(/^(can|has)(.+)/)?.[2];
                return _v0[_v8(_v2 ? _v2[0].toLowerCase() + _v2.slice(1) : _v1)] = _v1, _v0;
              }, {}),
              _v1 = _v0.map(_v0 => _v0.substr(3)).map(_v0 => _v8(_v0)).reduce((_v0, _v1) => _v0 + _v1 + ",", ""),
              _v2 = await fetch(`${_v10.baseUrl}/users/${_v6}/capabilities?fields=${_v1}`, {
                headers: {
                  Authorization: `jwt ${_v0}`,
                  "Content-Type": "application/json"
                }
              }).then(_v0 => _v0.json()),
              _v3 = Object.keys(_v2).reduce((_v0, _v1) => {
                let _v2 = _v2[_v1];
                if ("boolean" == typeof _v2 && _v0[_v1]) _v0[_v0[_v1]] = _v2;else throw Error("response is not well formed");
                return _v0;
              }, {});
            _v8({
              loading: !1,
              error: null,
              capabilities: _v3
            });
          } catch (_v0) {
            _v8({
              loading: !1,
              error: _v0,
              capabilities: {}
            });
          }
        }
      }, [_v10, _v0, _v2, _v6]);
    return (0, _v2.useEffect)(() => {
      let _v0 = () => {
        "visible" === document.visibilityState && _v11?.();
      };
      return document.addEventListener("visibilitychange", _v0), () => {
        document.removeEventListener("visibilitychange", _v0);
      };
    }, [void 0, _v11]), _v7(() => {
      _v11();
    }), {
      capabilities: _v6 ? _v7.capabilities : _v0.reduce((_v0, _v1) => (_v0[_v1] = !1, _v0), {}),
      loading: _v7.loading,
      error: _v7.error
    };
  }
  _v0.s(["default", 0, _v7], 0);
  var _v10 = _v0.i(0);
  let _v11 = ["hasCreateBrandView", "hasCreateBrandApply", "hasCreateBrandEdit", "hasCreateTeamTemplateView", "hasCreateTeamTemplateApply", "hasCreateTeamTemplateEdit", "hasStockUpsell", "hasSeePerSeatPricingPages", "hasTveSupported", "hasCreateInteractiveTeamOverlayTemplateApply", "hasCreateInteractiveTeamOverlayTemplateCreate", "hasCreateInteractiveTeamOverlayTemplateDelete", "hasCreateInteractiveTeamOverlayTemplateEdit", "hasCreateSystemTemplate", "hasManageBranding", "hasApplyBranding", "canRemoveCreateWatermark"],
    _v12 = ["hasContentSpaceEnabled", "hasContentSpaceEnabledTeamGated"],
    _v13 = (0, _v2.createContext)({});
  _v0.s(["PermissionsContext", 0, _v13, "PermissionsProvider", 0, ({
    children: _v0
  }) => {
    let _v1 = (0, _v2.useContext)(_v4.ViewerContext),
      _v2 = _v9(_v11, (0, _v2.useMemo)(() => `users/${_v1?.teamUser?.ownerId || _v1?.user?.id}`, [_v1])).capabilities,
      {
        settings: _v3,
        isLoadingResponse: _v4
      } = (0, _v3.useOrionSettings)(),
      _v5 = _v9(_v12, _v10.default.teamOwnerId).capabilities,
      _v6 = !_v4 && _v3.remove_watermark_free_tier,
      _v7 = {
        ..._v2,
        ..._v5,
        ...(_v6 ? {
          canRemoveCreateWatermark: !0
        } : {})
      };
    return (0, _v1.jsx)(_v13.Provider, {
      value: _v7,
      children: _v0
    });
  }], 0);
}