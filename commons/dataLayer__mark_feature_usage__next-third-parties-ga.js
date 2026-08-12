{
  "use strict";

  let _v3;
  var _v4 = _v0.e && _v0.e.__importDefault || function (_v0) {
    return _v0 && _v0.__esModule ? _v0 : {
      default: _v0
    };
  };
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.GoogleAnalytics = function (_v0) {
    let {
      gaId: _v1,
      debugMode: _v2,
      dataLayerName: _v3 = "dataLayer",
      nonce: _v4
    } = _v0;
    return void 0 === _v3 && (_v3 = _v3), (0, _v6.useEffect)(() => {
      performance.mark("mark_feature_usage", {
        detail: {
          feature: "next-third-parties-ga"
        }
      });
    }, []), (0, _v5.jsxs)(_v5.Fragment, {
      children: [(0, _v5.jsx)(_v7.default, {
        id: "_next-ga-init",
        dangerouslySetInnerHTML: {
          __html: `
          window['${_v3}'] = window['${_v3}'] || [];
          function gtag(){window['${_v3}'].push(arguments);}
          gtag('js', new Date());

          gtag('config', '${_v1}' ${_v2 ? ",{ 'debug_mode': true }" : ""});`
        },
        nonce: _v4
      }), (0, _v5.jsx)(_v7.default, {
        id: "_next-ga",
        src: `https://www.googletagmanager.com/gtag/js?id=${_v1}`,
        nonce: _v4
      })]
    });
  }, _v2.sendGAEvent = function () {
    void 0 === _v3 ? console.warn("@next/third-parties: GA has not been initialized") : window[_v3] ? window[_v3].push(arguments) : console.warn(`@next/third-parties: GA dataLayer ${_v3} does not exist`);
  };
  let _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v4(_v0.r(0));
}