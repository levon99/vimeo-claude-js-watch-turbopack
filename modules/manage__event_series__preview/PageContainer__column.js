{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["PageContainer", 0, ({
    children: _v0
  }) => {
    let _v1 = (0, _v4.useResponsiveStylingToken)();
    return (0, _v1.jsx)(_v2.Flex, {
      direction: "column",
      gap: "xl",
      maxWidth: _v3.PAGE_CONTAINER_STYLES.MAX_CONTENT_WIDTH_1200,
      px: _v1(_v3.PAGE_CONTAINER_STYLES.MOBILE_X_PADDING_4, _v3.PAGE_CONTAINER_STYLES.DESKTOP_X_PADDING_16),
      py: _v1(_v3.PAGE_CONTAINER_STYLES.MOBILE_Y_PADDING_16, _v3.PAGE_CONTAINER_STYLES.DESKTOP_Y_PADDING_16),
      width: "100%",
      children: _v0
    });
  }]);
}