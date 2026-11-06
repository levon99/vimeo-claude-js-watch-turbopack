{
  "use strict";

  var _v1,
    _v2 = _v0.i(0),
    _v3 = ((_v1 = {}).EDGE_CHROMIUM = "edge-chromium", _v1.FIREFOX = "firefox", _v1.CHROME = "chrome", _v1.OPERA = "opera", _v1.SAFARI = "safari", _v1.IOS = "ios", _v1);
  let _v4 = [["aol", /AOLShield\/([0-9\._]+)/], ["edge", /Edge\/([0-9\._]+)/], ["yandexbrowser", /YaBrowser\/([0-9\._]+)/], ["vivaldi", /Vivaldi\/([0-9\.]+)/], ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/], ["samsung", /SamsungBrowser\/([0-9\.]+)/], ["silk", /\bSilk\/([0-9._-]+)\b/], ["miui", /MiuiBrowser\/([0-9\.]+)$/], ["beaker", /BeakerBrowser\/([0-9\.]+)/], ["edge-chromium", /Edg\/([0-9\.]+)/], ["chromium-webview", /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/], ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/], ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/], ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/], ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/], ["fxios", /FxiOS\/([0-9\.]+)/], ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/], ["opera", /Opera\/([0-9\.]+)(?:\s|$)/], ["opera", /OPR\/([0-9\.]+)(:?\s|$)/], ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/], ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/], ["ie", /MSIE\s(7\.0)/], ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/], ["android", /Android\s([0-9\.]+)/], ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/], ["safari", /Version\/([0-9\._]+).*Safari/], ["facebook", /FBAV\/([0-9\.]+)/], ["instagram", /Instagram\s([0-9\.]+)/], ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/], ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/], ["searchbot", /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]],
    _v5 = [["iOS", /iP(hone|od|ad)/], ["Android OS", /Android/], ["BlackBerry OS", /BlackBerry|BB10/], ["Windows Mobile", /IEMobile/], ["Amazon OS", /Kindle/], ["Windows 3.11", /Win16/], ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/], ["Windows 98", /(Windows 98)|(Win98)/], ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/], ["Windows XP", /(Windows NT 5.1)|(Windows XP)/], ["Windows Server 2003", /(Windows NT 5.2)/], ["Windows Vista", /(Windows NT 6.0)/], ["Windows 7", /(Windows NT 6.1)/], ["Windows 8", /(Windows NT 6.2)/], ["Windows 8.1", /(Windows NT 6.3)/], ["Windows 10", /(Windows NT 10.0)/], ["Windows ME", /Windows ME/], ["Open BSD", /OpenBSD/], ["Sun OS", /SunOS/], ["Chrome OS", /CrOS/], ["Linux", /(Linux)|(X11)/], ["Mac OS", /(Mac_PowerPC)|(Macintosh)/], ["QNX", /QNX/], ["BeOS", /BeOS/], ["OS/2", /OS\/2/], ["Search Bot", /(nuhk)|(Googlebot)|(Yammybot)|(Openbot)|(Slurp)|(MSNBot)|(Ask Jeeves\/Teoma)|(ia_archiver)/]];
  function _v6(_v0) {
    var _v1;
    let _v2 = "" !== _v0 && _v4.reduce((_v0, _v1) => {
      let _v2 = _v1[0],
        _v3 = _v1[1];
      if (_v0) return _v0;
      let _v4 = _v3.exec(_v0);
      return !!_v4 && [_v2, _v4];
    }, !1);
    if (!_v2) return null;
    let _v3 = _v2[0],
      _v4 = _v2[1];
    if ("searchbot" === _v3) return {
      name: "bot",
      version: null,
      os: null
    };
    let _v5 = _v4[1] ? _v4[1].split(/[._]/).slice(0, 3) : null;
    return _v5 ? _v5.length < 3 && (_v5 = _v5.concat(function (_v0) {
      let _v1 = [];
      for (let _v0 = 0; _v0 < _v0; _v0 += 1) _v1.push("0");
      return _v1;
    }(3 - _v5.length))) : _v5 = [], {
      name: _v3,
      version: _v5.join("."),
      os: function (_v0) {
        for (let _v0 = 0, _v1 = _v5.length; _v0 < _v1; _v0 += 1) {
          let [_v0, _v1] = _v5[_v0];
          if (_v1.test(_v0)) return _v0;
        }
        return null;
      }(_v0),
      isMobile: (_v1 = _v0, /Mobi/i.test(_v1))
    };
  }
  _v0.s(["ESupportedBrowser", () => _v3, "NormalizedSupportedBrowser", 0, {
    "edge-chromium": "Edge",
    firefox: "Firefox",
    chrome: "Chrome",
    opera: "Opera",
    safari: "Safari"
  }, "detectBrowser", 0, function (_v0) {
    return _v0 ? _v6(_v0) : "u" > typeof navigator ? _v6(navigator.userAgent) : void 0 !== _v2.default && _v2.default.version ? {
      name: "node",
      os: _v2.default.platform,
      version: _v2.default.version.slice(1),
      isMobile: !1
    } : null;
  }]);
}