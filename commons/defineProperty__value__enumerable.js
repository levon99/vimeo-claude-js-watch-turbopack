{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), Object.defineProperty(_v2, "default", {
    enumerable: !0,
    get: function () {
      return _v7;
    }
  });
  let _v3 = _v0.r(0),
    _v4 = "u" < typeof window,
    _v5 = _v4 ? () => {} : _v3.useLayoutEffect,
    _v6 = _v4 ? () => {} : _v3.useEffect;
  function _v7(_v0) {
    let {
      headManager: _v1,
      reduceComponentsToState: _v2
    } = _v0;
    function _v3() {
      if (_v1 && _v1.mountedInstances) {
        let _v0 = _v3.Children.toArray(Array.from(_v1.mountedInstances).filter(Boolean));
        _v1.updateHead(_v2(_v0));
      }
    }
    return _v4 && (_v1?.mountedInstances?.add(_v0.children), _v3()), _v5(() => (_v1?.mountedInstances?.add(_v0.children), () => {
      _v1?.mountedInstances?.delete(_v0.children);
    })), _v5(() => (_v1 && (_v1._pendingUpdate = _v3), () => {
      _v1 && (_v1._pendingUpdate = _v3);
    })), _v6(() => (_v1 && _v1._pendingUpdate && (_v1._pendingUpdate(), _v1._pendingUpdate = null), () => {
      _v1 && _v1._pendingUpdate && (_v1._pendingUpdate(), _v1._pendingUpdate = null);
    })), null;
  }
}