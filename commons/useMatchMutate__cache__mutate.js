{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useMatchMutate", 0, function () {
    let {
      cache: _v0,
      mutate: _v1
    } = (0, _v2.useSWRConfig)();
    return (0, _v1.useCallback)((_v0, ..._v1) => {
      let _v2 = new RegExp(_v0),
        _v3 = [];
      for (let _v0 of _v0.keys()) _v2.test(_v0) && _v3.push(_v0);
      return Promise.all(_v3.map(_v0 => _v1(_v0, ..._v1)));
    }, [_v0, _v1]);
  }]);
}