{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = (0, _v2.createContext)(null);
  var _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = _v0 => !_v0.isLayoutDirty && _v0.willUpdate(!1);
  _v0.s(["LayoutGroup", 0, ({
    children: _v0,
    id: _v1,
    inherit: _v2 = !0
  }) => {
    let _v3 = (0, _v2.useContext)(_v3.LayoutGroupContext),
      _v4 = (0, _v2.useContext)(_v4),
      [_v5, _v6] = function () {
        let _v0,
          _v1 = (_v0 = (0, _v2.useRef)(!1), (0, _v5.useIsomorphicLayoutEffect)(() => (_v0.current = !0, () => {
            _v0.current = !1;
          }), []), _v0),
          [_v2, _v3] = (0, _v2.useState)(0),
          _v4 = (0, _v2.useCallback)(() => {
            _v1.current && _v3(_v2 + 1);
          }, [_v2]);
        return [(0, _v2.useCallback)(() => _v6.frame.postRender(_v4), [_v4]), _v2];
      }(),
      _v7 = (0, _v2.useRef)(null),
      _v8 = _v3.id || _v4;
    if (null === _v7.current) {
      let _v0, _v1, _v2, _v3;
      (!0 == (!0 === (_v3 = _v2)) || "id" === _v3) && _v8 && (_v1 = _v1 ? _v8 + "-" + _v1 : _v8), _v7.current = {
        id: _v1,
        group: !0 === _v2 && _v3.group || (_v0 = new Set(), _v1 = new WeakMap(), {
          add: _v0 => {
            _v0.add(_v0), _v1.set(_v0, _v0.addEventListener("willUpdate", _v2));
          },
          remove: _v0 => {
            _v0.delete(_v0);
            let _v1 = _v1.get(_v0);
            _v1 && (_v1(), _v1.delete(_v0)), _v2();
          },
          dirty: _v2 = () => _v0.forEach(_v7)
        })
      };
    }
    let _v9 = (0, _v2.useMemo)(() => ({
      ..._v7.current,
      forceRender: _v5
    }), [_v6]);
    return (0, _v1.jsx)(_v3.LayoutGroupContext.Provider, {
      value: _v9,
      children: _v0
    });
  }], 0);
}