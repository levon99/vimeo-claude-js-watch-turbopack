{
  "use strict";

  function _v1(_v0, _v1) {
    let _v2 = "name" in _v0 ? _v0.name : "interactiveHotspot" in _v0 ? _v0.interactiveHotspot?.name : void 0;
    if (_v1 && void 0 === _v2) throw Error("Element does not have a name");
    return _v2;
  }
  let _v2 = (_v0, _v1) => `${_v0} Copy #${_v1}`,
    _v3 = _v0 => _v0.replace(/ Copy #\d+$/, "");
  _v0.s(["getWithDuplicationNaming", 0, (_v0, _v1) => {
    let _v2 = new Set(_v1.flatMap(_v0 => _v0.composition.map(_v0 => _v1(_v0, !1))).filter(Boolean));
    return _v0.map(_v0 => {
      if (void 0 === _v0.name && _v0.interactiveHotspot?.name === void 0) return _v0;
      let _v1 = function (_v0, _v1) {
        let _v2 = _v0.match(/ Copy #(\d+)$/),
          _v3 = _v2 ? parseInt(_v2[1]) + 1 : 1,
          _v4 = _v2 ? _v2(_v3(_v0), _v3) : _v2(_v0, _v3);
        for (; _v1.has(_v4);) _v3 += 1, _v4 = _v2(_v3(_v0), _v3);
        return _v4;
      }(_v1(_v0, !0), _v2);
      if (_v2.add(_v1), _v0.interactiveHotspot) return {
        ..._v0,
        interactiveHotspot: {
          ..._v0.interactiveHotspot,
          name: _v1
        }
      };
      if (_v0.name) return {
        ..._v0,
        name: _v1
      };
      throw Error("Element does not have a name");
    });
  }]);
}