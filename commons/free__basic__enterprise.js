{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = new Set(["free", "basic", "enterprise", "live_business"]),
    _v6 = new Set(["free", "basic", "enterprise", "custom", "ott_custom", "live_business", "team", "team_live", "custom_self_serve", "pro_solution"]),
    _v7 = {
      isEligible: !1,
      isAudienceMatch: !1,
      daysToRenewal: null,
      subscriptionId: null,
      currentTier: null,
      currentPlanName: null,
      endDate: null
    };
  _v0.s(["useAutoRenewEncouragementEligibility", 0, function () {
    let {
        isTreatment: _v0,
        isReady: _v1
      } = function () {
        let {
          settings: _v0,
          isLoadingResponse: _v1
        } = (0, _v4.useOrionSettings)();
        return {
          isTreatment: !0 === _v0.enable_auto_renew_encouragement,
          isReady: !_v1
        };
      }(),
      _v2 = (0, _v3.useViewer)(),
      _v3 = _v2?.user?.id,
      _v4 = _v2?.teamUser?.ownerId ?? _v3,
      _v5 = _v2?.user?.account,
      _v6 = null != _v3 && null != _v4 && Number(_v4) === Number(_v3),
      _v7 = null != _v5 && !_v5.has(_v5),
      _v8 = _v6 && _v7,
      {
        data: _v9,
        isLoading: _v10,
        mutate: _v11
      } = (0, _v2.useGetUserSettingsBillingMembership)(() => _v8 && null != _v4 ? {
        select: ["billingPeriod", "hasAutorenew", "renewalDate", "gracePeriodType", "userEntity", "isImpactedByGermanConsumerLaw", "subscriptionId", "tier", "tierForDisplay"],
        where: {
          userId: Number(_v4)
        }
      } : null, {
        dedupingInterval: 0,
        revalidateOnFocus: !1,
        revalidateIfStale: !1
      }),
      _v12 = _v1 && (!_v8 || !_v10),
      _v13 = (0, _v1.useCallback)(() => {
        _v11();
      }, [_v11]);
    if (!_v8 || null == _v9) return {
      ..._v7,
      isTreatment: _v0,
      isReady: _v12,
      revalidateMembership: _v13
    };
    let {
        isAudienceMatch: _v14,
        daysToRenewal: _v15
      } = function ({
        membership: _v0,
        viewer: _v1,
        now: _v2 = Date.now()
      }) {
        var _v3;
        let _v4 = function (_v0, _v1 = Date.now()) {
          if (null == _v0) return null;
          let _v2 = Date.parse(_v0);
          return Number.isNaN(_v2) ? null : Math.ceil((_v2 - _v1) / 0);
        }(_v0.renewalDate, _v2);
        return {
          isAudienceMatch: _v1.canReadOwnBilling && null != _v0.subscriptionId && "" !== _v0.subscriptionId && null != _v1.accountType && !_v5.has(_v1.accountType) && null != (_v3 = _v0.tier) && "" !== _v3 && !_v6.has(_v3.toLowerCase()) && "year" === _v0.billingPeriod && !1 === _v0.hasAutorenew && null == _v0.gracePeriodType && "business" !== _v0.userEntity && !0 !== _v0.isImpactedByGermanConsumerLaw && null != _v4 && _v4 > 0,
          daysToRenewal: _v4
        };
      }({
        membership: {
          tier: _v9.tier,
          billingPeriod: _v9.billingPeriod,
          hasAutorenew: _v9.hasAutorenew,
          renewalDate: _v9.renewalDate,
          gracePeriodType: _v9.gracePeriodType,
          userEntity: _v9.userEntity,
          isImpactedByGermanConsumerLaw: _v9.isImpactedByGermanConsumerLaw,
          subscriptionId: _v9.subscriptionId
        },
        viewer: {
          accountType: _v5,
          canReadOwnBilling: _v6
        }
      }),
      _v16 = _v14 && null != _v15 && _v15 <= 60;
    return {
      isEligible: _v16 && _v0,
      isAudienceMatch: _v16,
      isTreatment: _v0,
      daysToRenewal: _v15,
      subscriptionId: _v9.subscriptionId ?? null,
      currentTier: _v9.tier ?? null,
      currentPlanName: _v9.tierForDisplay ?? null,
      endDate: _v9.renewalDate ?? null,
      isReady: _v12,
      revalidateMembership: _v13
    };
  }], 0);
  var _v8 = _v0.i(0);
  _v0.s(["useAutoRenewEncouragementTracking", 0, function () {
    let _v0 = (0, _v8.usePico)(),
      _v1 = (0, _v1.useCallback)(_v0 => ({
        surface: _v0.surface,
        variant: _v0.variant,
        days_to_renewal: _v0.daysToRenewal,
        tier: _v0.tier
      }), []),
      _v2 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("auto_renew_encouragement_eligible", _v1(_v0));
      }, [_v1, _v0]),
      _v3 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("auto_renew_encouragement_displayed", _v1(_v0));
      }, [_v1, _v0]),
      _v4 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("auto_renew_encouragement_cta_clicked", _v1(_v0));
      }, [_v1, _v0]);
    return {
      trackEligible: _v2,
      trackDisplayed: _v3,
      trackCtaClicked: _v4,
      trackEnabled: (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("auto_renew_encouragement_enabled", _v1(_v0));
      }, [_v1, _v0]),
      trackModalDismissed: (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("auto_renew_encouragement_modal_dismissed", {
          ..._v1(_v0),
          dismissal_count: _v0.dismissalCount
        });
      }, [_v1, _v0])
    };
  }], 0);
}