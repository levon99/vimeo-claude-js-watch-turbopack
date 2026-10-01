{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0);
  let _v19 = {
      barebone_js: "",
      chromeless_css: "",
      chromeless_js: "",
      css: "",
      js: "",
      player_url: ""
    },
    _v20 = ({
      playerAssetUrls: _v0
    }) => {
      let _v1 = (0, _v17.useTeamPresetsPageAvailability)();
      return "loading" === _v1.status ? (0, _v1.jsx)(_v12.Spinner, {}) : "unavailable" === _v1.status ? (0, _v1.jsx)(_v18.ErrorPage, {
        error: new _v7.UnauthorizedError()
      }) : (0, _v1.jsx)(_v13.PlayerContextProvider, {
        type: _v14.PlayerType.VimeoPlayer,
        assetUrls: _v0 ?? _v19,
        children: (0, _v1.jsxs)(_v5.Box, {
          maxW: _v10.SETTING_PAGES_MAX_WIDTH,
          w: "100%",
          mx: "auto",
          py: "lg",
          children: [(0, _v1.jsx)(_v11.SettingsPageContentHeader, {
            title: _v16.T.Presets
          }), (0, _v1.jsxs)(_v6.Flex, {
            direction: "column",
            gap: "xl",
            children: [(0, _v1.jsx)(_v2.EmbedPresetListModule, {}), (0, _v1.jsx)(_v3.VideoPagePresetListModule, {}), (0, _v1.jsx)(_v4.VideoPageThemeBlock, {}), (0, _v1.jsx)(_v9.PresetsDefaultsCrossLink, {
              scope: "team",
              direction: "to-defaults"
            })]
          })]
        })
      });
    };
  (0, _v8.withPageSetup)(() => ({
    props: {
      hasThemeSupport: !0
    }
  }), {
    requireLogin: !0,
    inlineViewer: !0,
    inlinePlayerAssets: !0,
    noIndex: !0
  }), _v20.getLayout = _v15.getLayout, _v0.s(["__N_SSP", 0, !0, "default", 0, _v20], 0);
}