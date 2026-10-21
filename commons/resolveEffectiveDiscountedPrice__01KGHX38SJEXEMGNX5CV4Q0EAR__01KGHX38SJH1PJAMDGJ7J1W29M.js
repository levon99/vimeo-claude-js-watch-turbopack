{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = (_v0, _v1) => Math.round(_v0 * (100 - _v1)) / 100;
  _v0.s(["resolveEffectiveDiscountedPrice", 0, _v5], 0);
  let _v6 = new Set([0, 0, 0, 0, 0, 0]);
  function _v7(_v0) {
    return null != _v0 && _v6.has(_v0);
  }
  let _v8 = new Set([0, 0, 0, 0, 0, 0, 0, 0]),
    _v9 = {
      0: {
        monthly: "01KGHX38SJEXEMGNX5CV4Q0EAR"
      },
      0: {
        yearly: "01KGHX38SJH1PJAMDGJ7J1W29M"
      },
      0: {
        monthly: "01KW9DH1F07AG38NPWVHA9EMK1"
      },
      0: {
        yearly: "01KW9DH1F0Q5ZAJVBBQVW2YD5T"
      },
      0: {
        monthly: "01KVWW33NQVDEVN70VEHF01WS4"
      },
      0: {
        yearly: "01KVWW41K7MBQX2TXZ5PC39YKK"
      },
      0: {
        monthly: "01KVWW5A3KQXYF8P2NRT6BDZM7"
      },
      0: {
        yearly: "01KVWW5A3KQXYF8P2NRT9CWHK4"
      },
      0: {
        monthly: "01KW9DH1F0ZS21EKV4R6QR8DK9"
      },
      0: {
        yearly: "01KW9DH1F0JMZ59HN2WZQ1BN5S"
      },
      0: {
        monthly: "01M4WTDVF8PGHG3XH1PZ480286"
      },
      0: {
        yearly: "01M4WTDVF8PGHG3XH1Q0BEE8WP"
      },
      0: {
        monthly: "01M4WTDVF8PGHG3XH1Q29K4Y9K"
      },
      0: {
        yearly: "01M4WTDVF8PGHG3XH1Q2Y2RQXY"
      },
      0: {
        monthly: "01M4WTDVF8PGHG3XH1Q3NHHW41"
      },
      0: {
        yearly: "01M4WTDVF8PGHG3XH1Q3VR96AV"
      },
      0: {
        monthly: "01M51TD03KV0THNJAMEPD7FJWX"
      },
      0: {
        yearly: "01M51SZSQ6G06PSFNYWQK744S7"
      }
    },
    _v10 = {
      0: 0,
      0: 0,
      0: 0,
      0: 0,
      0: 0,
      0: 0,
      0: 0,
      0: 0
    },
    _v11 = (_v0, _v1) => {
      let _v2 = _v9[_v1];
      if (_v2) return _v0.find(_v0 => void 0 !== _v2.yearly && _v0.id?.annual === _v2.yearly || void 0 !== _v2.monthly && _v0.id?.monthly === _v2.monthly);
    },
    _v12 = (_v0, _v1) => "year" === _v1 ? _v0.price?.annualMonthly ?? _v0.price?.monthly : _v0.price?.monthly ?? _v0.price?.annualMonthly;
  _v0.s(["findPlanRowByProductId", 0, function (_v0, _v1) {
    if (null != _v1 && _v0) return _v11(_v0, _v1);
  }, "getBillingPlanSkuForProduct", 0, function (_v0, _v1) {
    if (null == _v0) return;
    let _v2 = _v9[_v0];
    return "year" === _v1 ? _v2?.yearly : _v2?.monthly;
  }, "isJuly2026Product", 0, _v7, "isOctober2026Product", 0, function (_v0) {
    return null != _v0 && _v8.has(_v0);
  }, "resolveB2CPriceMatch", 0, function ({
    scheduledProductId: _v0,
    renewalMonthlyPrice: _v1,
    plans: _v2,
    billingPeriod: _v3
  }) {
    if (null == _v0 || !_v2) return null;
    let _v4 = _v10[_v0];
    if (null == _v4) return null;
    let _v5 = _v11(_v2, _v0),
      _v6 = _v11(_v2, _v4);
    if (!_v5 || !_v6) return null;
    let _v7 = _v1 ?? _v12(_v5, _v3),
      _v8 = _v12(_v6, _v3);
    if (null == _v7 || null == _v8 || _v8 >= _v7) return null;
    let _v9 = Math.floor((_v7 - _v8) / _v7 * 100);
    return {
      savingsPercent: _v9,
      effectiveDiscountedPrice: _v5(_v7, _v9),
      landedPlan: _v5,
      tierBelowPlan: _v6
    };
  }], 0);
  var _v13 = _v0.i(0);
  let _v14 = ["currency", "id", "metadata", "name", "price", "tier"],
    _v15 = ["studio", "professional"];
  _v0.s(["useStudioRenewalOfferData", 0, function ({
    isEligible: _v0,
    isAnnual: _v1,
    scheduledProductId: _v2
  }) {
    let _v3 = (0, _v1.useContext)(_v4.ViewerContext),
      _v4 = (0, _v3.useCampaignIdOverride)(),
      _v5 = _v4 ?? (!_v4 && _v7(_v2) ? _v3.RP_2026_LOW_CAMPAIGN_ID : void 0),
      {
        data: _v6
      } = (0, _v2.useGetSubscriptionPlans)(() => _v3 && _v0 ? {
        select: _v14,
        query: {
          filter: _v15,
          ...(_v5 ? {
            campaignId: _v5
          } : {}),
          ...(_v3.vuid ? {
            vuid: _v3.vuid
          } : {})
        }
      } : null),
      _v7 = (0, _v1.useMemo)(() => _v6?.data ?? null, [_v6]),
      _v8 = (0, _v1.useMemo)(() => _v7?.find(_v0 => "studio" === _v0.tier) ?? null, [_v7]),
      _v9 = (0, _v1.useMemo)(() => _v7?.find(_v0 => "professional" === _v0.tier) ?? null, [_v7]);
    return {
      discount: (0, _v1.useMemo)(() => null != _v8 ? (0, _v13.resolveStudioRenewalDiscount)({
        studioPlan: _v8,
        professionalPlan: _v9,
        isAnnual: _v1
      }) : null, [_v8, _v9, _v1]),
      studioPlan: _v8,
      isLoading: _v0 && void 0 === _v6
    };
  }], 0);
}