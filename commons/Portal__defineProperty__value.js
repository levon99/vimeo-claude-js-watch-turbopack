{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), Object.defineProperty(_v2, "Portal", {
    enumerable: !0,
    get: function () {
      return _v5;
    }
  });
  let _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = ({
      children: _v0,
      type: _v1
    }) => {
      let [_v2, _v3] = (0, _v3.useState)(null);
      return (0, _v3.useEffect)(() => {
        let _v0 = document.createElement(_v1);
        return document.body.appendChild(_v0), _v3(_v0), () => {
          document.body.removeChild(_v0);
        };
      }, [_v1]), _v2 ? (0, _v4.createPortal)(_v0, _v2) : null;
    };
  ("function" == typeof _v2.default || "object" == typeof _v2.default && null !== _v2.default) && void 0 === _v2.default.__esModule && (Object.defineProperty(_v2.default, "__esModule", {
    value: !0
  }), Object.assign(_v2.default, _v2), _v1.exports = _v2.default);
}