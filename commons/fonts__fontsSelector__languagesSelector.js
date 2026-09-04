{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  let _v8 = (0, _v2.createSlice)({
      name: "fonts",
      initialState: {
        brandFonts: null,
        languages: null,
        systemFonts: null
      },
      reducers: {},
      extraReducers: _v0 => {
        _v0.addMatcher(_v7.fontsApi.endpoints.fetchFonts.matchFulfilled, (_v0, _v1) => {
          let _v2 = _v1.payload,
            _v3 = (0, _v5.extractLanguages)(_v2.data),
            _v4 = (0, _v4.extractUniqueFonts)(_v2.data);
          (0, _v4.loadFontFaceToDOM)(_v4), _v0.brandFonts = _v4, _v0.languages = _v3;
        }).addMatcher(_v6.assetsApi.endpoints.fetchAssets.matchFulfilled, (_v0, _v1) => {
          if (!_v1.payload.fonts) return;
          let _v2 = _v1.payload.fonts.map(_v0 => Object.assign({}, _v0, {
              isInternal: !0,
              isBrandAsset: !1
            })),
            _v3 = (0, _v5.extractLanguages)(_v2),
            _v4 = (0, _v4.extractUniqueFonts)(_v2);
          (0, _v4.loadFontFaceToDOM)(_v4);
          let _v5 = {
            fonts: _v4,
            languages: _v3
          };
          _v0.systemFonts = {
            ..._v5,
            fonts: Object.fromEntries(Object.entries(_v5.fonts || {}).filter(([, _v0]) => !_v3.DEPRECATED_FONTS_MAP[_v0.name]))
          }.fonts, _v0.languages = _v3;
        });
      }
    }).reducer,
    _v9 = (0, _v1.createSelector)(_v0 => _v0.fonts.brandFonts, _v0 => _v0.fonts.systemFonts, (_v0, _v1) => _v0 && _v1 && {
      ..._v0,
      ..._v1
    });
  _v0.s(["default", 0, _v8, "fontsSelector", 0, _v9, "languagesSelector", 0, _v0 => _v0.fonts.languages]);
}