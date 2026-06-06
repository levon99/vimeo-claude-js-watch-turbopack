{
  "use strict";

  _v0.s(["getInfiniteRequestLoadingState", 0, ({
    data: _v0,
    error: _v1,
    size: _v2,
    itemsPerPage: _v3
  }) => {
    let _v4 = !_v0 && !_v1,
      _v5 = _v4 || _v2 > 0 && _v0 && void 0 === _v0[_v2 - 1];
    return {
      isLoadingInitialData: _v4,
      isLoadingMore: _v5,
      isDone: !_v0?.[_v0?.length - 1]?.paging?.next
    };
  }]);
}