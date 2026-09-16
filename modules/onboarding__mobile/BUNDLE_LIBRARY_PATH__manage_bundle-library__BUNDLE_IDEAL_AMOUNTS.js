{
  "use strict";

  _v0.s(["BUNDLE_LIBRARY_PATH", 0, "/manage/bundle-library"], 0);
  let _v1 = Object.freeze({
      ARS: {
        annual: 0,
        annualMonthly: 0,
        monthly: 0
      },
      AUD: {
        annual: 0,
        annualMonthly: 250,
        monthly: 250
      },
      BND: {
        annual: 0,
        annualMonthly: 165,
        monthly: 165
      },
      BRL: {
        annual: 0,
        annualMonthly: 780,
        monthly: 780
      },
      CAD: {
        annual: 0,
        annualMonthly: 230,
        monthly: 230
      },
      CHF: {
        annual: 0,
        annualMonthly: 150,
        monthly: 150
      },
      CLP: {
        annual: 0,
        annualMonthly: 0,
        monthly: 0
      },
      CZK: {
        annual: 0,
        annualMonthly: 0,
        monthly: 0
      },
      DKK: {
        annual: 0,
        annualMonthly: 0,
        monthly: 0
      },
      EUR: {
        annual: 0,
        annualMonthly: 130,
        monthly: 130
      },
      GBP: {
        annual: 0,
        annualMonthly: 150,
        monthly: 150
      },
      HKD: {
        annual: 0,
        annualMonthly: 0,
        monthly: 0
      },
      HUF: {
        annual: 0,
        annualMonthly: 0,
        monthly: 0
      },
      ILS: {
        annual: 0,
        annualMonthly: 800,
        monthly: 800
      },
      INR: {
        annual: 0,
        annualMonthly: 0,
        monthly: 0
      },
      JPY: {
        annual: 0,
        annualMonthly: 0,
        monthly: 0
      },
      KRW: {
        annual: 0,
        annualMonthly: 0,
        monthly: 0
      },
      MXN: {
        annual: 0,
        annualMonthly: 0,
        monthly: 0
      },
      NOK: {
        annual: 0,
        annualMonthly: 0,
        monthly: 0
      },
      NZD: {
        annual: 0,
        annualMonthly: 165,
        monthly: 165
      },
      PHP: {
        annual: 0,
        annualMonthly: 0,
        monthly: 0
      },
      PLN: {
        annual: 0,
        annualMonthly: 630,
        monthly: 630
      },
      RUB: {
        annual: 0,
        annualMonthly: 0,
        monthly: 0
      },
      SEK: {
        annual: 0,
        annualMonthly: 0,
        monthly: 0
      },
      SGD: {
        annual: 0,
        annualMonthly: 215,
        monthly: 215
      },
      THB: {
        annual: 0,
        annualMonthly: 0,
        monthly: 0
      },
      TRY: {
        annual: 0,
        annualMonthly: 0,
        monthly: 0
      },
      TWD: {
        annual: 0,
        annualMonthly: 0,
        monthly: 0
      },
      USD: {
        annual: 0,
        annualMonthly: 200,
        monthly: 200
      }
    }),
    _v2 = new Set(Object.keys(_v1));
  _v0.s(["BUNDLE_IDEAL_AMOUNTS", 0, _v1, "resolveBundleIdealAmount", 0, ({
    periodicity: _v0,
    display: _v1 = "monthly",
    currency: _v2
  }) => {
    let _v3,
      _v4 = null != (_v3 = _v2) && _v2.has(_v3) ? _v2 : "USD",
      _v5 = _v1[_v4];
    return void 0 === _v5 ? null : "monthly" === _v0 ? {
      amount: _v5.monthly,
      currency: _v4
    } : "period" === _v1 ? {
      amount: _v5.annual,
      currency: _v4
    } : {
      amount: _v5.annualMonthly,
      currency: _v4
    };
  }], 0);
}