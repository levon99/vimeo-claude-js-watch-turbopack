{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  let _v8 = (0, _v2.default)(async () => ({
    default: (await _v0.A(0)).DefaultNavigation
  }), {
    loadableGenerated: {
      modules: [0]
    }
  });
  _v0.s(["LinkUnavailablePage", 0, ({
    title: _v0,
    message: _v1
  }) => (0, _v1.jsxs)("div", {
    children: [(0, _v1.jsx)(_v8, {}), (0, _v1.jsxs)(_v3.Box, {
      id: "vimeo-error-page-view",
      textAlign: "center",
      marginTop: "500",
      children: [(0, _v1.jsx)(_v4.Header, {
        variant: "heading-xl",
        as: "h1",
        marginBottom: "100",
        children: _v0
      }), (0, _v1.jsxs)(_v3.Box, {
        margin: "0 auto",
        maxWidth: (0, _v6.rem)(660),
        paddingX: "200",
        paddingBottom: "100",
        children: [(0, _v1.jsx)(_v5.Paragraph, {
          marginBottom: "400",
          children: _v1
        }), (0, _v1.jsx)(_v7.SearchField, {
          id: "error-page-search"
        })]
      })]
    })]
  })]);
}