{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = "create_fb_context",
    _v6 = "create_context.shopify";
  _v0.s(["FB_CONTEXT", 0, _v5, "SHOPIFY_CONTEXT", 0, _v6], 0);
  let _v7 = () => Error("Not implemented"),
    _v8 = _v2.default.createContext({
      playerAssetUrls: {
        barebone_js: "",
        chromeless_css: "",
        chromeless_js: "",
        css: "",
        js: "",
        player_url: ""
      },
      magistoApiHost: "",
      xsrft: "",
      user: null,
      locale: "",
      apiUrl: "",
      jwt: "",
      isFBCreativeContext: !1,
      updateXsrft: _v7,
      updateShopifyContext: _v7,
      vuid: "",
      teamUser: null,
      thirdPartyIntegration: _v4.ThirdPartyIntegration.None
    });
  _v0.s(["ConfigContext", 0, _v8, "default", 0, function ({
    playerAssetUrls: _v0,
    magistoApiHost: _v1,
    xsrft: _v2,
    children: _v3,
    user: _v4,
    locale: _v5,
    apiUrl: _v6,
    jwt: _v7,
    vuid: _v8,
    teamUser: _v9,
    partnerConfig: _v10
  }) {
    let [_v11, _v12] = (0, _v2.useState)(_v2),
      _v13 = (0, _v3.loadCookie)(_v6),
      [_v14, _v15] = (0, _v2.useState)(null != _v13 ? JSON.parse(_v13) : void 0);
    (0, _v2.useEffect)(() => {
      _v12(_v2);
    }, [_v2]);
    let _v16 = _v10?.app === _v4.PartnerApp.FacebookCCM || _v10?.app === _v4.PartnerApp.FACEBOOK_CCM_VARIANT || null != (0, _v3.loadCookie)(_v5),
      _v17 = function ({
        isFacebook: _v0,
        isShopify: _v1,
        partnerIntegration: _v2
      }) {
        let _v3 = _v4.ThirdPartyIntegration.None;
        return _v2 ? _v3 = _v2 : _v0 ? _v3 = _v4.ThirdPartyIntegration.Facebook : _v1 && (_v3 = _v4.ThirdPartyIntegration.Shopify), _v3;
      }({
        isShopify: void 0 !== _v14,
        isFacebook: _v16,
        partnerIntegration: _v10?.bigPictureConfig?.thirdPartyIntegration
      });
    return (0, _v1.jsx)(_v8.Provider, {
      value: {
        playerAssetUrls: _v0,
        magistoApiHost: _v1,
        xsrft: _v11,
        user: _v4,
        locale: _v5,
        updateXsrft: _v0 => {
          _v12(_v0);
        },
        apiUrl: _v6,
        jwt: _v7,
        isFBCreativeContext: _v16,
        vuid: _v8,
        currentShopifyContext: _v14,
        teamUser: _v9,
        partnerConfig: _v10,
        thirdPartyIntegration: _v17,
        updateShopifyContext: _v0 => {
          _v15(_v0);
        }
      },
      children: _v3
    });
  }], 0);
}