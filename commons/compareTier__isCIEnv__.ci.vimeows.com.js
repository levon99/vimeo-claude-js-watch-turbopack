{
  "use strict";

  let _v1 = {
    free: 1,
    basic: 1,
    enterprise_lapsed: 1,
    pro_lapsed: 1,
    plus_lapsed: 1,
    producer_lapsed: 1,
    live_pro_lapsed: 1,
    live_business_lapsed: 1,
    live_premium_lapsed: 1,
    starter: 2,
    pro_solution: 2,
    plus: 2,
    producer: 3,
    standard: 4,
    team: 4,
    pro: 4,
    pro_custom: 4,
    pro_unlimited: 4,
    live_pro: 4,
    pro_expired: 4,
    advanced: 5,
    team_live: 5,
    custom_self_serve: 6,
    business: 5,
    live_business: 5,
    live_premium: 6,
    custom: 7,
    ott_custom: 7,
    enterprise: 8,
    creator: 2,
    professional: 3,
    studio: 4,
    production: 5
  };
  _v0.s(["compareTier", 0, (_v0, _v1) => _v1[_v0] && _v1[_v1] ? _v1[_v0] > _v1[_v1] ? 1 : _v1[_v0] < _v1[_v1] ? -1 : 0 : -2, "isCIEnv", 0, () => window?.location?.host?.endsWith(".ci.vimeows.com"), "isLocalDevEnv", 0, () => window?.location?.host === "vimeo.dev", "parseHTMLEntities", 0, _v0 => new DOMParser().parseFromString(_v0, "text/html").body.textContent || ""]);
}