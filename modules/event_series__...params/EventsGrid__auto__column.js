{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["EventsGrid", 0, ({
    children: _v0,
    isHorizontalScroll: _v1 = !1
  }) => {
    let _v2 = (0, _v4.useIsMobilePreview)(),
      _v3 = (0, _v4.useResponsiveStylingToken)();
    return _v1 ? (0, _v1.jsx)(_v2.SimpleGrid, {
      columns: _v2 ? void 0 : {
        sm: 2,
        lg: 3
      },
      gridAutoColumns: _v3(_v3.EVENTS_GRID_STYLES.MOBILE_SCROLL_CARD_WIDTH_320, "auto", "sm"),
      gridAutoFlow: _v3("column", "row", "sm"),
      overflowX: _v3("auto", "visible", "sm"),
      spacing: "md",
      width: "100%",
      children: _v0
    }) : (0, _v1.jsx)(_v2.SimpleGrid, {
      columns: _v2 ? 1 : {
        base: 1,
        sm: 2,
        lg: 3
      },
      spacing: "md",
      width: "100%",
      children: _v0
    });
  }]);
}