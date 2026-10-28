{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = "professional";
  var _v7 = _v0.i(0);
  let _v8 = (_v0, _v1) => new Intl.NumberFormat((0, _v7.getCurrentLocale)(), {
      style: "currency",
      currency: _v1,
      maximumFractionDigits: 0
    }).format(_v0),
    _v9 = ["plans", "tier"],
    _v10 = ["currency", "price", "priceFormatted", "tier"],
    _v11 = (_v0, _v1) => {
      let _v2 = (0, _v5.useViewer)(),
        _v3 = _v2?.vuid,
        _v4 = _v2?.location,
        {
          data: _v5
        } = (0, _v2.useGetMeSubscriptionProducts)(() => _v0 && _v2?.user ? {
          select: _v9,
          query: {
            country: _v4 ?? "",
            tiers: [_v6],
            ...(void 0 !== _v3 ? {
              vuid: _v3
            } : {}),
            ...(void 0 !== _v1 ? {
              billingPlanId: _v1
            } : {})
          }
        } : null, {
          revalidateIfStale: !1,
          revalidateOnFocus: !1,
          revalidateOnReconnect: !1
        });
      return (0, _v1.useMemo)(() => (_v0 => {
        if (null == _v0 || "object" != typeof _v0) return null;
        let _v1 = _v0.price?.amount,
          _v2 = _v0.price?.currency;
        return "number" != typeof _v1 || "string" != typeof _v2 ? null : {
          annual: _v1,
          monthlyFormatted: "string" == typeof _v0.priceMonthly?.formatted ? _v0.priceMonthly.formatted : void 0,
          currency: _v2
        };
      })(_v5?.data?.[0]?.plans?.annual), [_v5]);
    };
  _v0.s(["useIndiePricing", 0, () => {
    let _v0 = (0, _v5.useViewer)(),
      _v1 = !!_v0?.user,
      _v2 = _v11(_v1, _v4.INDIE_PROGRAM_BILLING_PLAN_ID),
      _v3 = _v11(_v1),
      _v4 = (_v0 => {
        let _v1 = (0, _v5.useViewer)(),
          _v2 = _v1?.vuid,
          {
            data: _v3
          } = (0, _v3.useGetSubscriptionPlans)(() => _v0 ? {
            select: _v10,
            query: {
              bypassTierHierarchy: !0,
              campaignId: "01M4WTDVF8PGHG3XH1Q4R07RW9",
              filter: [_v6],
              usePaymentsService: !0,
              ...(void 0 !== _v2 ? {
                vuid: _v2
              } : {})
            }
          } : null),
          _v4 = (0, _v1.useMemo)(() => _v3?.data?.find(_v0 => _v0.tier === _v6) ?? null, [_v3]);
        return (0, _v1.useMemo)(() => {
          let _v0, _v1;
          return _v0 = _v4?.currency?.currencyCode, _v1 = _v4?.price?.annual, _v0 && "number" == typeof _v1 ? {
            annual: _v1,
            monthlyFormatted: _v4?.priceFormatted?.annualMonthly,
            currency: _v0
          } : null;
        }, [_v4]);
      })(!_v1);
    return (0, _v1.useMemo)(() => _v1 ? _v2 && _v3 && 0 !== _v3.annual ? {
      listMonthly: _v3.monthlyFormatted ?? _v8(Math.round(_v3.annual / 12), _v3.currency),
      indieAnnual: _v8(_v2.annual, _v2.currency),
      indieMonthly: _v2.monthlyFormatted ?? _v8(Math.round(_v2.annual / 12), _v2.currency),
      discountPercent: Math.round((1 - _v2.annual / _v3.annual) * 100)
    } : null : (_v0 => {
      if (null === _v0 || 0 === _v0.annual) return null;
      let _v1 = Math.round(.09999999999999998 * _v0.annual);
      return {
        listMonthly: _v0.monthlyFormatted ?? _v8(Math.round(_v0.annual / 12), _v0.currency),
        indieAnnual: _v8(_v1, _v0.currency),
        indieMonthly: _v8(Math.round(_v1 / 12), _v0.currency),
        discountPercent: Math.round(90)
      };
    })(_v4), [_v3, _v2, _v1, _v4]);
  }], 0);
}