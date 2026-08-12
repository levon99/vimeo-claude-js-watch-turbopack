{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["useDebouncedValue", 0, function (_v0, _v1) {
    let [_v2, _v3] = (0, _v1.useState)(_v0);
    return (0, _v1.useEffect)(() => {
      let _v0 = setTimeout(() => {
        _v3(_v0);
      }, _v1);
      return () => {
        clearTimeout(_v0);
      };
    }, [_v1, _v0]), _v2;
  }]);
}