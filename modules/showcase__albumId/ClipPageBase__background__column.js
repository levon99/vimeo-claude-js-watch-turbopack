{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["ClipPageBase", 0, ({
    children: _v0,
    gridTemplateAreas: _v1,
    isSideBySideActive: _v2 = !1,
    isShowcaseLayout: _v3 = !1,
    showcaseConfig: _v4,
    ..._v5
  }) => {
    let {
      isShowcaseEmpty: _v6,
      isShowcaseMobilePreview: _v7 = !1
    } = _v4 || {};
    return (0, _v1.jsx)(_v2.Flex, {
      backgroundColor: "background",
      flex: "1",
      direction: "column",
      align: "center",
      position: "relative",
      ..._v5,
      children: (0, _v1.jsx)(_v3.Grid, {
        flex: _v6 ? "1" : void 0,
        w: "100%",
        maxW: "1536px",
        gridTemplateColumns: {
          base: "minmax(0, 1fr)",
          md: "repeat(6, minmax(0, 1fr))"
        },
        gridAutoRows: _v6 ? void 0 : "max-content",
        gridTemplateAreas: _v1,
        gap: {
          base: 200,
          md: 200,
          lg: 300
        },
        pt: _v2 && !_v3 ? {
          base: 0,
          md: 200,
          lg: 300
        } : 0,
        pb: {
          base: 200,
          lg: 300
        },
        px: _v7 ? 0 : {
          base: 0,
          md: 200,
          lg: 300
        },
        children: _v0
      })
    });
  }]);
}