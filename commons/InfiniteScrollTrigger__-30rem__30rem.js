{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["InfiniteScrollTrigger", 0, ({
    isLoading: _v0,
    onLoadMore: _v1
  }) => {
    let _v2 = (0, _v2.useRef)(null),
      _v3 = (0, _v4.useOnScreen)(_v2);
    return (0, _v2.useEffect)(() => {
      !_v0 && _v3 && _v1();
    }, [_v0, _v1, _v3]), (0, _v1.jsx)(_v3.Box, {
      marginTop: "-30rem",
      height: "30rem",
      pointerEvents: "none",
      ref: _v2,
      width: "100%"
    });
  }]);
}