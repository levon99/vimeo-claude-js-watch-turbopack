{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  function _v3(_v0, _v1) {
    "function" == typeof _v0 ? _v0(_v1) : _v0.current = _v1;
  }
  _v0.s(["wrapConnectorHooks", 0, function (_v0) {
    let _v1 = {};
    return Object.keys(_v0).forEach(_v0 => {
      let _v1 = _v0[_v0];
      if (_v0.endsWith("Ref")) _v1[_v0] = _v0[_v0];else {
        let _v0 = (_v0 = null, _v1 = null) => {
          var _v2, _v3;
          let _v4;
          return (0, _v2.isValidElement)(_v0) ? (!function (_v0) {
            if ("string" == typeof _v0.type) return;
            let _v1 = _v0.type.displayName || _v0.type.name || "the component";
            throw Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${_v1} into a <div>, or turn it into a drag source or a drop target itself.`);
          }(_v0), _v2 = _v0, _v3 = _v1 ? _v0 => _v1(_v0, _v1) : _v1, _v4 = _v2.ref, ((0, _v1.invariant)("string" != typeof _v4, "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"), _v4) ? (0, _v2.cloneElement)(_v2, {
            ref: _v0 => {
              _v3(_v4, _v0), _v3(_v3, _v0);
            }
          }) : (0, _v2.cloneElement)(_v2, {
            ref: _v3
          })) : (_v1(_v0, _v1), _v0);
        };
        _v1[_v0] = () => _v0;
      }
    }), _v1;
  }], 0), _v0.s(["isRef", 0, function (_v0) {
    return null !== _v0 && "object" == typeof _v0 && Object.prototype.hasOwnProperty.call(_v0, "current");
  }], 0);
}