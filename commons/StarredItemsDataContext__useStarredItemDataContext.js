{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = (0, _v1.createContext)(void 0);
  _v0.s(["StarredItemsDataContext", 0, _v2, "useStarredItemDataContext", 0, () => {
    let _v0 = (0, _v1.useContext)(_v2);
    return {
      starredItemsData: _v0?.starredListData ?? [],
      mutateStarredItemsData: _v0?.mutateStarredItemsData,
      fetchNextPageItems: _v0?.fetchNextPageItems,
      starredListError: _v0?.starredListError,
      isLoading: _v0?.isLoading ?? !1,
      starredListResponseData: _v0?.starredListResponse,
      isLoadingMore: _v0?.isLoadingMore,
      isDone: _v0?.isDone
    };
  }]);
}