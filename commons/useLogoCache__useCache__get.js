{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useLogoCache", 0, function (_v0) {
    let _v1 = (0, _v2.useCache)(),
      _v2 = _v1.get(_v0) || [];
    return {
      removeLogoFromCache: (0, _v1.useCallback)(_v0 => {
        _v1.set(_v0, {
          ..._v2,
          ...{
            total: _v2.total - 1,
            items: _v2.items.filter(({
              uri: _v0
            }) => !_v0?.includes(_v0))
          }
        });
      }, [_v2]),
      addLogoToCache: (0, _v1.useCallback)(_v0 => {
        _v2.items.some(({
          uri: _v0
        }) => _v0 === _v0?.uri) || _v1.set(_v0, {
          ..._v2,
          ...{
            total: _v2.total + 1,
            items: [..._v2.items, _v0]
          }
        });
      }, [_v2])
    };
  }]);
}