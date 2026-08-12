{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  _v0.s(["BlockingLoadingWrapper", 0, function ({
    id: _v0,
    className: _v1 = (0, _v7.createDomName)("blocking-loader"),
    overlayColor: _v2,
    delay: _v3 = 0,
    opacity: _v4 = 1,
    withLoader: _v5,
    withAnimation: _v6,
    zIndex: _v7 = 0
  }) {
    let _v8 = (0, _v2.useMemo)(() => _v3.keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: ${_v4};
    }
  `, [_v4]);
    return (0, _v1.jsxs)(_v4.Flex, {
      id: _v0,
      className: _v1,
      alignItems: "center",
      justifyContent: "center",
      zIndex: _v7,
      background: _v2 || "gray.400",
      opacity: _v4,
      animation: `${_v3}ms ${_v8} linear`,
      sx: _v8.FULL_WIDTH_ABSOLUTE_STYLE,
      children: [_v6 ? (0, _v1.jsx)(_v6.Skeleton, {
        borderRadius: 0,
        sx: {
          ..._v8.FULL_WIDTH_ABSOLUTE_STYLE,
          animationDirection: "reverse!important"
        }
      }) : null, _v5 ? (0, _v1.jsx)(_v5.Spinner, {
        color: "text-primary"
      }) : null]
    });
  }]);
}