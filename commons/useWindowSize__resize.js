{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useWindowSize", 0, function (_v0 = 500) {
    function _v1() {
      return {
        width: window.innerWidth,
        height: window.innerHeight
      };
    }
    let [_v2, _v3] = (0, _v2.useState)(_v1);
    return (0, _v2.useEffect)(() => {
      let _v0 = (0, _v1.default)(function () {
        _v3(_v1());
      }, _v0);
      return window.addEventListener("resize", _v0), () => window.removeEventListener("resize", _v0);
    }, []), _v2;
  }]);
}