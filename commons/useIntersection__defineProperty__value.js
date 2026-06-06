{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), Object.defineProperty(_v2, "useIntersection", {
    enumerable: !0,
    get: function () {
      return _v8;
    }
  });
  let _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = "function" == typeof IntersectionObserver,
    _v6 = new Map(),
    _v7 = [];
  function _v8({
    rootRef: _v0,
    rootMargin: _v1,
    disabled: _v2
  }) {
    let _v3 = _v2 || !_v5,
      [_v4, _v5] = (0, _v3.useState)(!1),
      _v6 = (0, _v3.useRef)(null),
      _v7 = (0, _v3.useCallback)(_v0 => {
        _v6.current = _v0;
      }, []);
    return (0, _v3.useEffect)(() => {
      if (_v5) {
        if (_v3 || _v4) return;
        let _v0 = _v6.current;
        if (_v0 && _v0.tagName) return function (_v0, _v1, _v2) {
          let {
            id: _v3,
            observer: _v4,
            elements: _v5
          } = function (_v0) {
            let _v1,
              _v2 = {
                root: _v0.root || null,
                margin: _v0.rootMargin || ""
              },
              _v3 = _v7.find(_v0 => _v0.root === _v2.root && _v0.margin === _v2.margin);
            if (_v3 && (_v1 = _v6.get(_v3))) return _v1;
            let _v4 = new Map();
            return _v1 = {
              id: _v2,
              observer: new IntersectionObserver(_v0 => {
                _v0.forEach(_v0 => {
                  let _v1 = _v4.get(_v0.target),
                    _v2 = _v0.isIntersecting || _v0.intersectionRatio > 0;
                  _v1 && _v2 && _v1(_v2);
                });
              }, _v0),
              elements: _v4
            }, _v7.push(_v2), _v6.set(_v2, _v1), _v1;
          }(_v2);
          return _v5.set(_v0, _v1), _v4.observe(_v0), function () {
            if (_v5.delete(_v0), _v4.unobserve(_v0), 0 === _v5.size) {
              _v4.disconnect(), _v6.delete(_v3);
              let _v0 = _v7.findIndex(_v0 => _v0.root === _v3.root && _v0.margin === _v3.margin);
              _v0 > -1 && _v7.splice(_v0, 1);
            }
          };
        }(_v0, _v0 => _v0 && _v5(_v0), {
          root: _v0?.current,
          rootMargin: _v1
        });
      } else if (!_v4) {
        let _v0 = (0, _v4.requestIdleCallback)(() => _v5(!0));
        return () => (0, _v4.cancelIdleCallback)(_v0);
      }
    }, [_v3, _v1, _v0, _v4, _v6.current]), [_v7, _v4, (0, _v3.useCallback)(() => {
      _v5(!1);
    }, [])];
  }
  ("function" == typeof _v2.default || "object" == typeof _v2.default && null !== _v2.default) && void 0 === _v2.default.__esModule && (Object.defineProperty(_v2.default, "__esModule", {
    value: !0
  }), Object.assign(_v2.default, _v2), _v1.exports = _v2.default);
}