{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["getStripeOptions", 0, ({
    locale: _v0,
    amount: _v1,
    currency: _v2,
    paymentMethodConfigId: _v3,
    mode: _v4,
    clientSecret: _v5,
    customerSessionClientSecret: _v6
  }) => _v5 ? {
    clientSecret: _v5,
    customerSessionClientSecret: _v6
  } : (_v1 || "payment" !== _v4 || (_v1 = 0), {
    amount: _v1,
    currency: _v2,
    customerSessionClientSecret: _v6,
    locale: (_v0 => {
      switch (_v0) {
        case _v1.Locales.de:
          return "de";
        case _v1.Locales.ja:
          return "ja";
        case _v1.Locales.ko:
          return "ko";
        case _v1.Locales.zh:
          return "zh";
        default:
          return _v0;
      }
    })(_v0),
    mode: _v4,
    paymentMethodConfiguration: _v3,
    appearance: {
      theme: "stripe",
      variables: {
        colorPrimary: "#000",
        borderRadius: "12px",
        iconColor: "transparent"
      },
      rules: {
        ".Input": {
          transition: "all 120ms ease-in-out 0s"
        },
        ".Input:focus": {
          borderColor: "none",
          boxShadow: "0 0 0 0px rgba(0,173,239,1)",
          outline: "2px solid"
        },
        ".Label": {
          fontSize: "0.875rem",
          paddingLeft: "0.25rem",
          letterSpacing: "-0.02625rem",
          color: "#000"
        },
        ".AccordionItem": {
          border: "none",
          boxShadow: "none",
          padding: "5px 5px"
        }
      }
    }
  }), "usesSetupIntent", 0, ({
    isFreeTrial: _v0,
    useJuno: _v1,
    currency: _v2
  }) => !!_v0 || _v1 && _v2?.toLowerCase() !== "inr"]);
}