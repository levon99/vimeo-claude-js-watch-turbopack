{
  "use strict";

  let _v1 = _v0 => null !== _v0 && "object" == typeof _v0 && !Array.isArray(_v0),
    _v2 = _v0 => _v0.replace(/[^a-z0-9]/gi, "").toLowerCase(),
    _v3 = (_v0, _v1) => {
      if (_v1 in _v0) return _v0[_v1];
      let _v2 = _v2(_v1),
        _v3 = Object.keys(_v0).find(_v0 => _v2(_v0) === _v2);
      return void 0 === _v3 ? void 0 : _v0[_v3];
    };
  _v0.s(["parseAITranslationResults", 0, (_v0, _v1, _v2) => {
    let _v3 = _v1(_v0) ? _v0 : {},
      _v4 = new Map(_v2.map(_v0 => [_v2(_v0), _v0])),
      _v5 = {},
      _v6 = !1;
    return _v1.forEach(_v0 => {
      let _v1 = _v3(_v3, _v0),
        _v2 = _v1(_v1) && _v1(_v1.strings) ? _v1.strings : {},
        _v3 = _v1(_v1) && Array.isArray(_v1.failures) && _v1.failures.length > 0,
        _v4 = {};
      Object.entries(_v2).forEach(([_v0, _v1]) => {
        let _v2 = _v4.get(_v2(_v0));
        void 0 !== _v2 && "string" == typeof _v1 && "" !== _v1 && (_v4[_v2] = {
          value: _v1,
          provenance: "ai"
        });
      });
      let _v5 = Object.keys(_v4).length;
      _v5 > 0 && (_v5[_v0] = _v4), (_v5 < _v2.length || _v3) && (_v6 = !0);
    }), {
      edits: _v5,
      incomplete: _v6
    };
  }, "readDynamicValue", 0, _v3]);
}