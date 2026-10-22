{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["useGetVideoSignature", 0, function (_v0) {
    let [_v1, _v2] = (0, _v1.useState)(void 0);
    return (0, _v1.useEffect)(() => {
      let _v0 = document.querySelector(`meta[name="video-signature-${_v0}"]`);
      _v0 && _v2(_v0.getAttribute("content") ?? "");
    }, [_v0]), _v1;
  }]);
}