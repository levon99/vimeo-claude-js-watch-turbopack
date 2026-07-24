{
  "use strict";

  _v0.s(["createNormalizer", 0, function (_v0) {
    return new Proxy({}, {
      get: (_v0, _v1) => "style" === _v1 ? _v0 => _v0({
        style: _v0
      }).style : _v0
    });
  }, "createProps", 0, () => _v0 => Array.from(new Set(_v0))]);
}