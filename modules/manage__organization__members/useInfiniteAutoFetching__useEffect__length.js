{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["useInfiniteAutoFetching", 0, function (_v0, _v1, _v2, _v3) {
    (0, _v1.useEffect)(() => {
      let _v0 = _v0?.length ?? 0;
      if (_v1 || !_v0 || 0 === _v0 || _v0 < _v2) return;
      let _v1 = _v0?.[_v2 - 1];
      _v1?.paging?.next && _v3(Math.min(_v1.page + 1, 10));
    }, [_v0, _v1, _v3, _v2]);
  }]);
}