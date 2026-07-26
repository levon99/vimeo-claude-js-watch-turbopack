{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["useDebouncedCallback", 0, function (_v0, _v1) {
    let _v2 = (0, _v1.useRef)(void 0),
      _v3 = (0, _v1.useRef)(void 0),
      _v4 = (0, _v1.useRef)(!0);
    function _v5() {
      _v3.current && clearTimeout(_v3.current);
    }
    return (0, _v1.useEffect)(() => _v5, []), {
      debouncedCallback: function (..._v0) {
        _v4.current = !0, _v2.current = _v0, _v5(), _v3.current = setTimeout(() => {
          _v2.current && _v4.current && _v0(..._v2.current);
        }, _v1);
      },
      cancel: function () {
        _v4.current = !1;
      }
    };
  }]);
}