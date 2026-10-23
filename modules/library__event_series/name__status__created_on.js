{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  let _v8 = ({
    children: _v0
  }) => {
    let _v1 = (0, _v2.useContext)(_v5.ViewerContext),
      _v2 = _v1?.teamUser?.ownerId ?? _v1?.user?.id,
      _v3 = _v1?.user?.id,
      {
        data: _v4,
        error: _v5,
        mutate: _v6,
        isLoading: _v7,
        size: _v8,
        setSize: _v9
      } = (0, _v3.useGetUserMemberListsStarredItemsInfinite)(() => _v2 && _v3 ? {
        select: ["uri", "name", "status", ..._v6.LIST_QUERY_FIELDS],
        where: {
          userId: _v2,
          teamMemberId: _v3
        },
        query: {
          perPage: _v6.PER_PAGE_DATA,
          sort: "created_on",
          direction: "desc"
        },
        headers: {
          Accept: "application/vnd.vimeo.*+json;version=3.4"
        }
      } : null, {
        revalidateOnFocus: !1,
        errorRetryCount: 0
      }),
      _v10 = (0, _v2.useCallback)(() => {
        _v9(_v0 => _v0 + 1);
      }, [_v9]),
      _v11 = _v4?.flatMap(_v0 => _v0.data ?? []).filter(_v0 => _v0.status === _v6.STARRED_ITEM_STATUS_ACTIVE),
      {
        isLoadingMore: _v12,
        isDone: _v13
      } = (0, _v4.getInfiniteRequestLoadingState)({
        data: _v4,
        itemsPerPage: _v6.PER_PAGE_DATA,
        size: _v8
      });
    return (0, _v1.jsx)(_v7.StarredItemsDataContext.Provider, {
      value: {
        starredListData: _v11,
        mutateStarredItemsData: _v6,
        fetchNextPageItems: _v10,
        starredListError: _v5,
        isLoading: _v7,
        starredListResponse: _v4,
        isLoadingMore: _v12,
        isDone: _v13
      },
      children: _v0
    });
  };
  var _v9 = _v0.i(0),
    _v10 = _v0.i(0);
  let _v11 = ({
    children: _v0
  }) => {
    let _v1 = (0, _v2.useContext)(_v5.ViewerContext),
      _v2 = _v1?.teamUser?.ownerId ?? _v1?.user?.id,
      _v3 = _v1?.user?.id,
      {
        data: _v4,
        mutate: _v5
      } = (0, _v3.useGetUserMemberListsStarredItemsInfinite)(() => _v2 && _v3 ? {
        select: ["video.uri", "folder.uri", "uri", "type"],
        where: {
          userId: _v2,
          teamMemberId: _v3
        },
        query: {
          perPage: 100
        }
      } : null, {
        revalidateOnFocus: !1,
        errorRetryCount: 0
      });
    return (0, _v1.jsx)(_v10.StarredItemUriContext.Provider, {
      value: {
        starredItemsUri: (0, _v9.organiseStarredItemData)(_v4 && _v4[0]?.data),
        mutateStarredItemsUri: _v5,
        starredItemsUriData: _v4
      },
      children: _v0
    });
  };
  _v0.s(["StarredItemsProvider", 0, ({
    children: _v0
  }) => (0, _v1.jsx)(_v11, {
    children: (0, _v1.jsx)(_v8, {
      children: _v0
    })
  })], 0);
}