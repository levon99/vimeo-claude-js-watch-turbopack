{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  let _v8 = (0, _v2.default)(async () => {
    let {
      Omnisearch: _v0
    } = await _v0.A(0);
    return {
      default: _v0
    };
  }, {
    loadableGenerated: {
      modules: [0]
    }
  });
  _v0.s(["Search", 0, ({
    updateGlobalNavSearchState: _v0,
    withToggle: _v1,
    ..._v2
  }) => {
    let _v3 = (0, _v3.useContext)(_v7.ViewerContext),
      [, _v4] = (0, _v3.useState)(!1);
    return _v3 && (!_v3.isSimplifiedSite || _v3.user) ? (0, _v1.jsxs)(_v4.Box, {
      display: "contents",
      "data-global-nav-search": !0,
      children: [(0, _v1.jsx)(_v8, {}), (0, _v1.jsx)(_v6.SearchField, {
        updateGlobalNavSearchState: _v0 || _v4,
        width: "100%",
        maxWidth: (0, _v5.rem)(480),
        withToggle: _v1,
        ...(_v1 && {
          inputStyle: {
            maxWidth: "90vw",
            backgroundColor: "background",
            borderRadius: "input-md"
          }
        }),
        ..._v2
      })]
    }) : (0, _v1.jsx)(_v1.Fragment, {});
  }]);
}