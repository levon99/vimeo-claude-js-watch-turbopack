{
  "use strict";

  let _v1 = "https://help.vimeo.com",
    _v2 = new Map([["en", "en-us"], ["de-DE", "de"], ["es", "es"], ["fr-FR", "fr"], ["ja-JP", "ja"], ["ko-KR", "ko"], ["pt-BR", "pt-br"], ["zh-CN", "zh-cn"]]),
    _v3 = _v0 => _v2.get(_v0) ?? "en-us";
  _v0.s(["HC_BASE_URL", 0, _v1, "getHelpCenterRequestsUrl", 0, _v0 => `https://vimeo.com/help/sso?redirect_to=${((_v0, _v1 = "") => `${_v1}/hc/${_v3(_v0)}${_v1}`)(_v0, "/requests")}`, "getZendeskLocale", 0, _v3]);
}