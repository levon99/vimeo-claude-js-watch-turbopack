{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = [0, 0];
  _v0.s(["useRepackagingCampaign", 0, function (_v0) {
    let _v1 = (0, _v1.useContext)(_v6.ViewerContext),
      _v2 = _v1?.user?.id,
      _v3 = _v1?.teamUser?.accountType?.toString() ?? _v1?.user?.account?.toString() ?? "",
      {
        isRepackFree: _v4,
        isRepackFreeWithoutHistory: _v5
      } = (0, _v2.useRepackagingGate)(),
      _v6 = _v4 && !_v1?.teamUser?.hasPaid,
      _v7 = !!_v0,
      _v8 = !_v7 && _v6 && !_v5,
      _v9 = _v5.RepackagedTiers.includes(_v3),
      _v10 = !_v7 && !_v8 && !!_v2 && _v9,
      {
        data: _v11,
        isLoading: _v12,
        error: _v13
      } = (0, _v3.useGetUserSettingsBillingMembership)(() => _v10 ? {
        select: ["productId"],
        where: {
          userId: Number(_v2)
        }
      } : null);
    if (_v8) return {
      campaignId: _v4.RP_2026_OCT_ROLLOUT_CAMPAIGN_ID,
      isLoading: !1
    };
    if (!_v10 || _v13) return {
      campaignId: null,
      isLoading: !1
    };
    if (_v12 || !_v11) return {
      campaignId: null,
      isLoading: !0
    };
    let _v14 = _v11.productId;
    return _v7.includes(_v14) ? {
      campaignId: "01KGPR56B56Z9H89TBNS98ASMT",
      isLoading: !1
    } : _v9 ? {
      campaignId: "01KGEWQ5SAS6NW735YSBYK68XG",
      isLoading: !1
    } : {
      campaignId: null,
      isLoading: !1
    };
  }], 0);
  var _v8 = _v0.i(0),
    _v9 = _v0.i(0);
  _v0.s(["useSubscriptionPlansUsageCheck", 0, function (_v0) {
    let _v1 = (0, _v1.useContext)(_v6.ViewerContext),
      {
        baseUrl: _v2,
        jwt: _v3
      } = (0, _v9.useGctlConfig)(),
      _v4 = !!_v1?.user,
      [_v5, _v6] = (0, _v1.useState)({
        data: void 0,
        error: void 0,
        isLoading: !1
      }),
      _v7 = [..._v0].sort().join(","),
      _v8 = (0, _v1.useCallback)(async () => {
        if (_v4 && 0 !== _v0.length) {
          _v6(_v0 => ({
            ..._v0,
            isLoading: !0,
            error: void 0
          }));
          try {
            let _v0 = `${_v2}/me/subscription_plans/usage_check?tiers=${_v7}`,
              _v1 = await fetch(_v0, {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  ...(_v3 ? {
                    Authorization: `jwt ${_v3}`
                  } : {})
                },
                credentials: "same-origin"
              });
            if (!_v1.ok) throw Error(`Usage check failed: ${_v1.status}`);
            let _v2 = await _v1.json(),
              _v3 = (0, _v8.deepCamelCase)(_v2);
            _v6({
              data: _v3.data,
              error: void 0,
              isLoading: !1
            });
          } catch (_v0) {
            _v6({
              data: void 0,
              error: _v0 instanceof Error ? _v0 : Error(String(_v0)),
              isLoading: !1
            });
          }
        }
      }, [_v2, _v3, _v4, _v7, _v0.length]);
    return (0, _v1.useEffect)(() => {
      _v8();
    }, [_v8]), _v5;
  }], 0);
}