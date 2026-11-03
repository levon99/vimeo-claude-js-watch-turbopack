{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = 300,
    _v7 = _v4.default.div.withConfig({
      displayName: "InfiniteLoadingZone__LoadingZone",
      componentId: "sc-b23feee-0"
    })`
  height: ${({
      size: _v0
    }) => (0, _v2.rem)(_v0)};
  margin-top: ${({
      size: _v0
    }) => (0, _v2.rem)(-_v0)};
  width: 100%;
  pointer-events: none;
`;
  _v0.s(["InfiniteLoadingZone", 0, ({
    isLoading: _v0,
    onLoadMore: _v1,
    size: _v2 = _v6
  }) => {
    let _v3 = (0, _v3.useRef)(null),
      _v4 = (0, _v5.useOnScreen)(_v3);
    return (0, _v3.useEffect)(() => {
      _v4 && !_v0 && _v1();
    }, [_v0, _v4, _v1]), (0, _v1.jsx)(_v7, {
      ref: _v3,
      size: _v2
    });
  }]);
}