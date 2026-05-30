{
  "use strict";

  var _v1 = (_v0, _v1 = []) => ({
      parts: (..._v0) => {
        if (_v3(_v1)) return _v1(_v0, _v0);
        throw Error("createAnatomy().parts(...) should only be called once. Did you mean to use .extendWith(...) ?");
      },
      extendWith: (..._v0) => _v1(_v0, [..._v1, ..._v0]),
      rename: _v0 => _v1(_v0, _v1),
      keys: () => _v1,
      build: () => [...new Set(_v1)].reduce((_v0, _v1) => Object.assign(_v0, {
        [_v1]: {
          selector: `&[data-scope="${_v2(_v0)}"][data-part="${_v2(_v1)}"], & [data-scope="${_v2(_v0)}"][data-part="${_v2(_v1)}"]`,
          attrs: {
            "data-scope": _v2(_v0),
            "data-part": _v2(_v1)
          }
        }
      }), {})
    }),
    _v2 = _v0 => _v0.replace(/([A-Z])([A-Z])/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[\s_]+/g, "-").toLowerCase(),
    _v3 = _v0 => 0 === _v0.length;
  _v0.s(["createAnatomy", 0, _v1]);
}