{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = ["adsbot-google", "applebot", "baiduspider", "bingbot", "blekkobot", "Embedly", "facebookexternalhit", "Facebot", "feedfetcher-google", "feedly", "FlipboardProxy", "google web preview", "Googlebot", "googlebot-news", "google-inspectiontool", "googleother", "GrapeshotCrawler", "linkedinbot", "mail.ru_bot", "mediapartners-google", "msnbot_mobile", "msnbot", "pinterest", "Seznam", "SkypeUriPreview", "slurp", "storebot-google", "superfeedr bot", "tumblr", "twitterbot", "yandex", "prerender"];
  _v0.s(["default", 0, () => {
    let [_v0, _v1] = (0, _v1.useState)();
    if ((0, _v1.useEffect)(() => {
      _v1(window.navigator.userAgent);
    }, []), void 0 === _v0) return;
    let _v2 = RegExp(`(${_v2.join("|").replace(".", "\\.").replace("-", "\\-")})`, "i");
    return !!_v0.match(_v2);
  }]);
}