{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["useOutsideClick", 0, function (_v0, _v1, _v2) {
    (0, _v1.useEffect)(function () {
      if (_v1) {
        var _v0 = (null == _v2 ? void 0 : _v2.capture) || !1;
        return document.addEventListener("mousedown", _v1, _v0), document.addEventListener("touchstart", _v1, _v0), function () {
          document.removeEventListener("mousedown", _v1, _v0), document.removeEventListener("touchstart", _v1, _v0);
        };
      }
      function _v1(_v0) {
        [_v0].flat().some(function (_v0) {
          var _v1;
          return null == (_v1 = null == _v0 ? void 0 : _v0.current) ? void 0 : _v1.contains(_v0.target);
        }) || _v1(_v0);
      }
    }, [_v0, _v1, _v2]);
  }]);
}