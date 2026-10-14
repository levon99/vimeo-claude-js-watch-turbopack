{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["useFilePreviewUrl", 0, _v0 => {
    let _v1 = (0, _v1.useMemo)(() => {
      if (null != _v0 && _v0.type.startsWith("image/")) return URL.createObjectURL(_v0);
    }, [_v0]);
    return (0, _v1.useEffect)(() => () => {
      null != _v1 && URL.revokeObjectURL(_v1);
    }, [_v1]), _v1;
  }]);
}