{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = [];
  _v0.s(["useScript", 0, function (_v0, _v1 = !1) {
    let [_v2, _v3] = (0, _v1.useState)({
      loaded: !1,
      error: !1
    });
    return (0, _v1.useEffect)(() => {
      if (_v2.includes(_v0) || _v1) _v3({
        loaded: !0,
        error: !1
      });else {
        _v2.push(_v0);
        let _v0 = document.createElement("script");
        _v0.src = _v0, _v0.async = !0;
        let _v1 = () => {
            _v3({
              loaded: !0,
              error: !1
            });
          },
          _v2 = () => {
            let _v0 = _v2.indexOf(_v0);
            _v0 >= 0 && _v2.splice(_v0, 1), _v0.remove(), _v3({
              loaded: !0,
              error: !0
            });
          };
        return _v0.addEventListener("load", _v1), _v0.addEventListener("error", _v2), document.body.appendChild(_v0), () => {
          _v0.removeEventListener("load", _v1), _v0.removeEventListener("error", _v2);
        };
      }
    }, [_v0, _v1]), [_v2.loaded, _v2.error];
  }]);
}