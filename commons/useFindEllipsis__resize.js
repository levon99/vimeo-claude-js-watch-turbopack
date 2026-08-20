{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["useFindEllipsis", 0, _v0 => {
    let [_v1, _v2] = (0, _v1.useState)(!1);
    return (0, _v1.useEffect)(() => {
      let _v0 = () => {
        _v0.current ? _v2(_v0.current && _v0.current.offsetWidth < _v0.current.scrollWidth) : _v2(!1);
      };
      return _v0(), window.addEventListener("resize", _v0), () => {
        window.removeEventListener("resize", _v0);
      };
    }, [_v0]), _v1;
  }]);
}