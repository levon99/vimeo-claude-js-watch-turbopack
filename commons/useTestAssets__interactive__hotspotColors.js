{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = {
    USE_TEST_ASSETS: "useTestAssets",
    INTERACTIVE: "interactive",
    HOTSPOT_COLORS: "hotspotColors",
    KITE_RENDER: "kiteRender",
    DRAGONITE_LOGS: "dragoniteLogs"
  };
  _v0.s(["FeatureFlags", 0, _v3], 0);
  let _v4 = {
      [_v3.USE_TEST_ASSETS]: {
        value: !1,
        displayName: "Test assets (fonts, palettes, etc.)",
        shouldReload: !0
      },
      [_v3.INTERACTIVE]: {
        value: !1,
        displayName: "Interactive",
        shouldReload: !1
      },
      [_v3.KITE_RENDER]: {
        value: !1,
        displayName: "Kite Render",
        shouldReload: !1
      },
      [_v3.DRAGONITE_LOGS]: {
        value: !1,
        displayName: "Dragonite logs",
        shouldReload: !1
      },
      [_v3.HOTSPOT_COLORS]: {
        value: !1,
        displayName: "Hotspot Colors",
        shouldReload: !1
      }
    },
    _v5 = (0, _v2.createSlice)({
      name: "featureFlags",
      initialState: _v4,
      reducers: {
        setFeatureFlagValueAction: (_v0, _v1) => {
          let {
            featureFlag: _v2,
            value: _v3
          } = _v1.payload;
          _v0[_v2].value = _v3;
        },
        initFeatureFlagsAction: (_v0, _v1) => {
          _v1.payload.forEach(({
            featureFlag: _v0,
            value: _v1
          }) => {
            _v0[_v0].value = _v1;
          });
        }
      }
    }),
    {
      setFeatureFlagValueAction: _v6,
      initFeatureFlagsAction: _v7
    } = _v5.actions,
    _v8 = (0, _v1.createSelector)(_v0 => _v0.featureFlags, _v0 => _v0),
    _v9 = _v5.reducer;
  _v0.s(["default", 0, _v9, "featureFlagsSelector", 0, _v8, "initFeatureFlagsAction", 0, _v7, "isInteractiveSelector", 0, _v0 => _v0.featureFlags[_v3.INTERACTIVE]?.value ?? !1, "setFeatureFlagValueAction", 0, _v6, "shouldShowTestAssetsSelector", 0, _v0 => _v0.featureFlags[_v3.USE_TEST_ASSETS]?.value ?? !1], 0);
}