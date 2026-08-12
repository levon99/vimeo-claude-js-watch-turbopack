{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["useBaseUrl", 0, () => {
    let [_v0, _v1] = (0, _v1.useState)();
    return (0, _v1.useEffect)(() => {
      try {
        let _v0 = new URL(window.location.href);
        _v0.search = "", _v0.hash = "", _v1(_v0.href);
      } catch (_v0) {
        console.error("Failed to get base URL", _v0);
      }
    }, []), _v0;
  }]);
}