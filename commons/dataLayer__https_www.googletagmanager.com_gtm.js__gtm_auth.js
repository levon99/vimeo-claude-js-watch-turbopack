{
  "use strict";

  var _v3 = _v0.e && _v0.e.__importDefault || function (_v0) {
    return _v0 && _v0.__esModule ? _v0 : {
      default: _v0
    };
  };
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.sendGTMEvent = void 0, _v2.GoogleTagManager = function (_v0) {
    let {
      gtmId: _v1,
      gtmScriptUrl: _v2,
      dataLayerName: _v3 = "dataLayer",
      auth: _v4,
      preview: _v5,
      dataLayer: _v6,
      nonce: _v7
    } = _v0;
    _v7 = _v3;
    let _v8 = new URL(_v2 || "https://www.googletagmanager.com/gtm.js");
    return _v1 && _v8.searchParams.set("id", _v1), "dataLayer" !== _v3 && _v8.searchParams.set("l", _v3), _v4 && _v8.searchParams.set("gtm_auth", _v4), _v5 && (_v8.searchParams.set("gtm_preview", _v5), _v8.searchParams.set("gtm_cookies_win", "x")), (0, _v5.useEffect)(() => {
      performance.mark("mark_feature_usage", {
        detail: {
          feature: "next-third-parties-gtm"
        }
      });
    }, []), (0, _v4.jsxs)(_v4.Fragment, {
      children: [(0, _v4.jsx)(_v6.default, {
        id: "_next-gtm-init",
        dangerouslySetInnerHTML: {
          __html: `
      (function(w,l){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        ${_v6 ? `w[l].push(${JSON.stringify(_v6)})` : ""}
      })(window,'${_v3}');`
        },
        nonce: _v7
      }), (0, _v4.jsx)(_v6.default, {
        id: "_next-gtm",
        "data-ntpc": "GTM",
        src: _v8.href,
        nonce: _v7
      })]
    });
  };
  let _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v3(_v0.r(0)),
    _v7 = "dataLayer";
  _v2.sendGTMEvent = (_v0, _v1) => {
    let _v2 = _v1 || _v7;
    window[_v2] = window[_v2] || [], window[_v2].push(_v0);
  };
}