{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = _v0 => _v2.SEAT_TIER_PLANS.includes(_v0);
  _v0.s(["appendExtraQueryParams", 0, (_v0, _v1) => {
    if (!_v0 || !_v1 || 0 === Object.keys(_v1).length) return _v0;
    let _v2 = new URLSearchParams(_v1);
    return `${_v0}${_v0.includes("?") ? "&" : "?"}${_v2.toString()}`;
  }, "appendPaywallParams", 0, (_v0, _v1) => {
    if (!_v0 || !_v1.paywallTrigger) return _v0;
    let _v2 = new URLSearchParams({
      paywall_trigger: _v1.paywallTrigger,
      paywall_location: _v1.paywallLocation,
      paywall_type: _v1.paywallType,
      paywall_feature: _v1.paywallFeature
    });
    return `${_v0}${_v0.includes("?") ? "&" : "?"}${_v2.toString()}`;
  }, "appendTrackingQueryParams", 0, (_v0, _v1) => _v0 ? `${_v0}${_v0.includes("?") ? "&" : "?"}upsell=${_v1?.upsell_name || "none"}&integration=${_v1?.integration || "none"}&feature=${_v1?.feature || "none"}` : "", "filterPlansData", 0, (_v0, _v1, _v2 = []) => _v0.filter(_v0 => ((_v0, _v1, _v2 = []) => !_v2.includes(_v0.tier) && !_v2.UNSUPPORTED_PLANS.includes(_v0.tier) && _v1.membership?.type !== _v0.tier && (_v2.PLANS_ORDER[_v0.tier] ?? -1) > (_v2.PLANS_ORDER[_v1.membership?.type] ?? -1))(_v0, _v1, _v2)), "getBandwidthSubHeader", 0, _v0 => _v0.metadata.isBandwidthProduct ? "enterprise" === _v0.tier ? (0, _v1.translate)({
    singular: "More Bandwidth",
    dictionary: {
      es: {
        singular: "Más ancho de banda"
      },
      "de-DE": {
        singular: "Mehr Bandbreite"
      },
      "fr-FR": {
        singular: "Plus de bande passante"
      },
      "ja-JP": {
        singular: "帯域幅がさらにアップ"
      },
      "ko-KR": {
        singular: "더 많은 대역폭"
      },
      "pt-BR": {
        singular: "Mais largura de banda"
      },
      "zh-CN": {
        singular: "更多带宽"
      }
    }
  }) : (0, _v1.translate)({
    singular: "{BANDWIDTH} annual bandwidth",
    replacements: {
      BANDWIDTH: _v0?.metadata?.entitlements?.params?.bandwidth?.periodicQuota
    },
    dictionary: {
      es: {
        singular: "{BANDWIDTH} de ancho de banda anual"
      },
      "de-DE": {
        singular: "{BANDWIDTH} jährliche Bandbreite"
      },
      "fr-FR": {
        singular: "{BANDWIDTH} de bande passante annuelle"
      },
      "ja-JP": {
        singular: "年間帯域幅：{BANDWIDTH}"
      },
      "ko-KR": {
        singular: "{BANDWIDTH} 연간 대역폭"
      },
      "pt-BR": {
        singular: "{BANDWIDTH} de largura de banda anual"
      },
      "zh-CN": {
        singular: "{BANDWIDTH} 年度带宽"
      }
    }
  }) : null, "getDeviceType", 0, () => {
    let _v0 = navigator.userAgent;
    return /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(_v0) ? "tablet" : /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(_v0) ? "mobile" : "desktop";
  }, "getEnterpriseFooterLinkText", 0, _v0 => void 0 === _v0 ? _v3.default.morePlanDetails : _v0, "getEnterpriseModalTitle", 0, _v0 => _v0 || _v3.default.doMoreWithEnterprise, "getEnterpriseSubtitle", 0, _v0 => void 0 === _v0 ? _v3.default.productBenefits : _v0, "getLanguage", 0, () => {
    let _v0 = document.cookie.match(/language=(\w+);?/);
    return _v0 && _v0.length >= 2 ? _v0[1] : null;
  }, "getModalHeader", 0, _v0 => _v0 || _v3.default.defaultHeader, "getModalSubheader", 0, _v0 => void 0 === _v0 ? _v3.default.defaultSubHeader : _v0, "getPlanBillingFrequencyCopy", 0, (_v0, _v1, _v2) => _v0 ? _v3.default.billedMonthly : !_v1 || [_v2.PLANS.PRO, _v2.PLANS.BUSINESS, _v2.PLANS.PREMIUM].includes(_v1.tier) || _v2 ? _v3.default.billedAnnually : _v3.default.orPriceBilledMonthly(_v1), "getPlanCTALink", 0, (_v0, _v1, _v2) => {
    let {
        annual: _v3,
        monthly: _v4
      } = _v0.metadata.interactions.purchase.uri,
      _v5 = _v1 ? _v4 : _v3;
    if (_v2) {
      let _v0 = _v5.includes("?") ? "&" : "?";
      return `${_v5}${_v0}campaignId=${_v2}&usePaymentsService=true`;
    }
    return _v5;
  }, "getPlanDisplayPrice", 0, (_v0, _v1, _v2) => _v2 ? `${_v0.priceFormatted.annual}` : `${_v1 ? _v0.priceFormatted.monthly : _v0.priceFormatted.annualMonthly}`, "getPlanFeaturesList", 0, (_v0, _v1) => {
    let _v2,
      _v3 = _v0?.planOverrides?.[_v1.tier]?.featuresList,
      _v4 = (_v0 => {
        let {
            tier: _v1,
            metadata: _v2
          } = _v0,
          _v3 = _v2.entitlements?.params?.videoStorageQuotaPeriod,
          _v4 = _v2.entitlements?.params?.videoStoragePeriodicQuota || _v2.entitlements?.params?.videoStorageQuotaCap,
          _v5 = "free" === _v1 && null !== _v4 ? _v4 : _v2.entitlements?.params?.videoStoragePeriodicQuota || 0;
        return "lifetime" !== _v3 || _v4(_v1) ? "pro" === _v1 || "plus" === _v1 ? (0, _v1.translate)({
          singular: "{AMOUNT} / week",
          replacements: {
            AMOUNT: _v5
          },
          dictionary: {
            es: {
              singular: "{AMOUNT} por semana"
            },
            "de-DE": {
              singular: "{AMOUNT} pro Woche"
            },
            "fr-FR": {
              singular: "{AMOUNT}/semaine"
            },
            "ja-JP": {
              singular: "{AMOUNT}/週"
            },
            "ko-KR": {
              singular: "{AMOUNT}/주"
            },
            "pt-BR": {
              singular: "{AMOUNT} / semana"
            },
            "zh-CN": {
              singular: "{AMOUNT}/周"
            }
          }
        }) : null : (0, _v1.translate)({
          singular: "{AMOUNT} total storage",
          replacements: {
            AMOUNT: _v5
          },
          dictionary: {
            es: {
              singular: "{AMOUNT} de almacenamiento total"
            },
            "de-DE": {
              singular: "{AMOUNT} Gesamtspeicherplatz"
            },
            "fr-FR": {
              singular: "{AMOUNT} de stockage en tout"
            },
            "ja-JP": {
              singular: "{AMOUNT} の総ストレージ"
            },
            "ko-KR": {
              singular: "총 {AMOUNT} 저장 공간"
            },
            "pt-BR": {
              singular: "{AMOUNT} de armazenamento total"
            },
            "zh-CN": {
              singular: "{AMOUNT} 总存储量"
            }
          }
        });
      })(_v1);
    return void 0 === _v3 ? (_v2 = _v1, _v2?.tier === _v2.PLANS.CREATOR && (_v2.CREATOR_V2_SKUS.includes(_v2.id?.monthly ?? "") || _v2.CREATOR_V2_SKUS.includes(_v2.id?.annual ?? ""))) ? _v2.CREATOR_V2_FEATURES : _v4 ? [_v4, ..._v2.PLANS_DEFAULT_FEATURES[_v1.tier]] : _v2.PLANS_DEFAULT_FEATURES[_v1.tier] : _v3;
  }, "getPlanQuota", 0, _v0 => _v2.PLANS_DEFAULT_VIDEO_QUOTAS[_v0.tier] || null, "getPlanSubHeading", 0, (_v0, _v1) => {
    let _v2 = _v0?.planOverrides?.[_v1.tier]?.subHeading;
    return void 0 === _v2 ? _v2.PLANS_SUBHEADING[_v1.tier] : _v2;
  }, "getPreviousPlanTierCopy", 0, (_v0, _v1, _v2) => {
    let _v3 = _v2.SEAT_TIER_PLANS.includes(_v1.tier),
      _v4 = _v2.SOLUTION_PLANS.includes(_v1.tier);
    if (_v2 > 0) return _v0[_v2 - 1].tier;
    let _v5 = [],
      _v6 = (_v5 = _v3 ? _v2.DEFAULT_SEAT_PLANS : _v4 ? _v2.SOLUTION_PLANS : _v2.LEGACY_PLANS).findIndex(_v0 => _v1.tier === _v0);
    return _v5[_v6 - 1];
  }, "getUkVatDisplayPrice", 0, (_v0, _v1, _v2) => {
    let _v3,
      _v4 = _v0.currency?.currencyCode;
    return _v4 && "number" == typeof (_v3 = _v2 ? _v0.price.annual : _v1 ? _v0.price.monthly : _v0.price.annualMonthly) ? ((_v0, _v1, _v2 = "en-GB") => {
      let _v3 = Math.round(100 * _v0) / 100,
        _v4 = _v3 % 1 == 0;
      try {
        return new Intl.NumberFormat(_v2, {
          style: "currency",
          currency: _v1,
          currencyDisplay: "narrowSymbol",
          minimumFractionDigits: 2 * !_v4,
          maximumFractionDigits: 2
        }).format(_v3);
      } catch {
        return `${_v4 ? _v3.toFixed(0) : _v3.toFixed(2)} ${_v1}`;
      }
    })(1.2 * _v3, _v4) : null;
  }, "getVuid", 0, () => {
    let _v0 = document.cookie.match(/vuid=(\w+\.\w+);?/);
    return _v0 && _v0.length >= 2 ? _v0[1] : null;
  }, "hasDisplayPlan", 0, _v0 => _v0 && _v0.hasOwnProperty("displayPlan"), "isEligibleForFreeTrial", 0, _v0 => (_v0.membership?.type === _v2.PLANS.FREE || _v0.membership?.type === _v2.PLANS.BASIC) && !_v0.membership?.subscription?.trial?.hasBeenInFreeTrial, "isRepackagingTier", 0, _v0 => _v2.NEW_PLANS.includes(_v0), "isSeatTierPlan", 0, _v4, "isSolutionTier", 0, _v0 => _v2.SOLUTION_PLANS.includes(_v0), "isUkLocation", 0, _v0 => _v0?.toUpperCase() === "GB", "isUserPlanHigherOrEqualThan", 0, (_v0, _v1) => {
    let _v2 = ((_v0, _v1) => {
      if (!_v0 || !_v1) return null;
      let _v2 = _v2.PLANS_ORDER[_v0],
        _v3 = _v2.PLANS_ORDER[_v1];
      return void 0 === _v2 || void 0 === _v3 ? null : _v2 > _v3 ? 1 : _v2 < _v3 ? -1 : 0;
    })(_v0, _v1);
    return 1 === _v2 || 0 === _v2;
  }, "showMonthlyPlans", 0, _v0 => void 0 !== _v0.find(_v0 => _v0.metadata?.purchasedProduct?.isMonthly) && _v4(_v0[0].tier), "showRecommendedBadge", 0, (_v0, _v1, _v2) => 0 === (_v2 && [_v2.PLANS.STARTER, _v2.PLANS.PLUS].includes(_v2) ? _v1 - 1 : _v1) && (_v2.SEAT_TIER_PLANS.includes(_v0.tier) || _v2.LEGACY_PLANS.includes(_v0.tier)) && _v0.tier !== _v2.PLANS.STARTER && _v0.tier !== _v2.PLANS.PLUS]);
}