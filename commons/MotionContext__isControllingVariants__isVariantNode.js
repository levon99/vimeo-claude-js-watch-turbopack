{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = (0, _v1.createContext)({});
  _v0.s(["MotionContext", 0, _v2], 0);
  var _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  function _v6(_v0) {
    return (0, _v4.isAnimationControls)(_v0.animate) || _v5.variantProps.some(_v0 => (0, _v3.isVariantLabel)(_v0[_v0]));
  }
  function _v7(_v0) {
    return Array.isArray(_v0) ? _v0.join(" ") : _v0;
  }
  _v0.s(["isControllingVariants", 0, _v6, "isVariantNode", 0, function (_v0) {
    return !!(_v6(_v0) || _v0.variants);
  }], 0), _v0.s(["useCreateMotionContext", 0, function (_v0) {
    let {
      initial: _v1,
      animate: _v2
    } = function (_v0, _v1) {
      if (_v6(_v0)) {
        let {
          initial: _v0,
          animate: _v1
        } = _v0;
        return {
          initial: !1 === _v0 || (0, _v3.isVariantLabel)(_v0) ? _v0 : void 0,
          animate: (0, _v3.isVariantLabel)(_v1) ? _v1 : void 0
        };
      }
      return !1 !== _v0.inherit ? _v1 : {};
    }(_v0, (0, _v1.useContext)(_v2));
    return (0, _v1.useMemo)(() => ({
      initial: _v1,
      animate: _v2
    }), [_v7(_v1), _v7(_v2)]);
  }], 0);
}