{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = {
      flow: [[]],
      sectionIndex: 0,
      stepIndex: 0,
      team: {
        accentColor: (0, _v2.blue)(500),
        id: 0,
        logoUrl: "",
        teamName: "",
        brandingSuggestion: {
          logoUrl: "",
          teamName: "",
          logoSource: ""
        }
      }
    },
    _v5 = (0, _v1.createContext)(_v4),
    _v6 = (0, _v1.createContext)(() => {}),
    _v7 = (0, _v1.createContext)({
      apiUrl: "",
      jwt: "",
      user: {
        account: _v3.AccountType.Pro,
        id: 0
      },
      remainingInviteCount: 0,
      isSingleSeatOnboarding: !1
    });
  _v0.s(["ConfigContext", 0, _v7, "DispatchContext", 0, _v6, "StateContext", 0, _v5, "defaultState", 0, _v4], 0);
  let _v8 = {
    [_v3.AccountType.Business]: "Vimeo Business",
    [_v3.AccountType.Enterprise]: "Vimeo Enterprise",
    [_v3.AccountType.LiveBusiness]: "Vimeo Business Live",
    [_v3.AccountType.LivePremium]: "Vimeo Premium",
    [_v3.AccountType.LivePro]: "Vimeo PRO Live",
    [_v3.AccountType.Pro]: "Vimeo Pro",
    [_v3.AccountType.ProUnlimited]: "Vimeo PRO Unlimited"
  };
  _v0.s(["ACCOUNT_TYPE_MAP", 0, _v8, "RECEIPT_ONBOARDING_HAS_GIFT", 0, "has_gift", "RECEIPT_ONBOARDING_ORDER_ID", 0, "order_id", "RECEIPT_ONBOARDING_PRODUCT_NAME", 0, "product_name", "RECEIPT_ONBOARDING_USER_EMAIL", 0, "user_email", "REDIRECT_LOCATION_AFTER_ONBOARDING", 0, "/", "getReceiptValue", 0, (_v0, _v1) => {
    if (!window.location.search) return null;
    let _v2 = decodeURIComponent(window.location.search).slice(1).split("&"),
      _v3 = _v2.find(_v0 => _v0.startsWith(_v0))?.split("=")[1];
    return _v3 ? _v1 ? _v3.replace(/\+/g, " ") : _v3 : null;
  }], 0);
}