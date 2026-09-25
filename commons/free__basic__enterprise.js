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
  _v0.s(["useAutoRenewEncouragementEligibility", 0, function (_v0 = {}) {
    let {
        isTreatment: _v1,
        isReady: _v2
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
      _v3 = (0, _v3.useViewer)(),
      _v4 = _v3?.user?.id,
      _v5 = _v3?.teamUser?.ownerId ?? _v4,
      _v6 = _v3?.user?.account,
      _v7 = null != _v4 && null != _v5 && Number(_v5) === Number(_v4),
      _v8 = null != _v6 && !_v5.has(_v6),
      _v9 = _v7 && _v8,
      {
        data: _v10,
        isLoading: _v11,
        mutate: _v12
      } = (0, _v2.useGetUserSettingsBillingMembership)(() => _v9 && null != _v5 ? {
        select: ["billingPeriod", "hasAutorenew", "renewalDate", "gracePeriodType", "userEntity", "isImpactedByGermanConsumerLaw", "subscriptionId", "tier", "tierForDisplay"],
        where: {
          userId: Number(_v5)
        }
      } : null, {
        dedupingInterval: 0,
        revalidateOnFocus: !1,
        revalidateIfStale: !1
      }),
      _v13 = _v2 && (!_v9 || !_v11),
      _v14 = (0, _v1.useCallback)(() => {
        _v12();
      }, [_v12]);
    if (!_v9 || null == _v10) return {
      ..._v7,
      isTreatment: _v1,
      isReady: _v13,
      revalidateMembership: _v14
    };
    let {
        isAudienceMatch: _v15,
        daysToRenewal: _v16
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
          tier: _v10.tier,
          billingPeriod: _v10.billingPeriod,
          hasAutorenew: _v10.hasAutorenew,
          renewalDate: _v10.renewalDate,
          gracePeriodType: _v10.gracePeriodType,
          userEntity: _v10.userEntity,
          isImpactedByGermanConsumerLaw: _v10.isImpactedByGermanConsumerLaw,
          subscriptionId: _v10.subscriptionId
        },
        viewer: {
          accountType: _v6,
          canReadOwnBilling: _v7
        }
      }),
      _v17 = !!_v0.skipRenewalWindow || null != _v16 && _v16 <= 60,
      _v18 = _v15 && _v17;
    return {
      isEligible: _v18 && (_v1 || !0 === _v0.skipRenewalWindow),
      isAudienceMatch: _v18,
      isTreatment: _v1,
      daysToRenewal: _v16,
      subscriptionId: _v10.subscriptionId ?? null,
      currentTier: _v10.tier ?? null,
      currentPlanName: _v10.tierForDisplay ?? null,
      endDate: _v10.renewalDate ?? null,
      isReady: _v13,
      revalidateMembership: _v14
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