{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = _v0 => {
    let _v1 = (0, _v6.useViewer)(),
      {
        data: _v2,
        error: _v3,
        size: _v4,
        setSize: _v5
      } = (0, _v4.useGetUserTeammembersInfinite)(() => _v1?.user ? {
        where: {
          userId: _v1?.teamUser?.ownerId || _v1?.user?.id
        },
        query: {
          perPage: 25,
          sort: "name",
          query: _v0 || ""
        },
        select: ["active", "user.name", "user.pictures.sizes", "user.uri"]
      } : null),
      {
        isDone: _v6,
        isLoadingMore: _v7,
        isLoadingInitialData: _v8
      } = (0, _v5.getInfiniteRequestLoadingState)({
        data: _v2,
        error: _v3,
        size: _v4,
        itemsPerPage: 25
      });
    return {
      users: (0, _v1.useMemo)(() => {
        let _v0 = new Set(),
          _v1 = [];
        return _v2 && _v2.forEach(_v0 => {
          _v0?.data.forEach(_v0 => {
            let _v1 = _v0.user?.uri.split("/").pop(),
              _v2 = _v0?.active,
              _v3 = !!_v0?.user?.name && _v0?.user?.name.length > 0,
              _v4 = _v0.has(_v1),
              _v5 = _v0?.user?.pictures?.sizes?.[0]?.link ?? "";
            _v2 && _v3 && !_v4 && (_v0.add(_v1), _v1.push({
              name: _v0.user?.name || "",
              userId: _v1,
              avatarLink: _v5
            }));
          });
        }), _v1;
      }, [_v2]),
      error: _v3,
      isLoadingMore: _v7,
      isLoadingInitialData: _v8,
      isDone: _v6,
      setSize: _v5,
      size: _v4
    };
  };
  _v0.s(["useUserTeamMembers", 0, _v7], 0), _v0.s(["useCreatedByFilter", 0, () => {
    let _v0 = (0, _v3.useFilter)({
        initialValue: new Set()
      }),
      [_v1, _v2] = (0, _v1.useState)(""),
      {
        users: _v3,
        setSize: _v4,
        isLoadingInitialData: _v5,
        isLoadingMore: _v6,
        isDone: _v7
      } = _v7((0, _v2.useDebouncedValue)(_v1, 500)),
      _v8 = (0, _v1.useCallback)(() => {
        _v4(_v0 => _v0 + 1);
      }, [_v4]),
      _v9 = _v1.length > 0,
      _v10 = !_v5 && !_v9 && 0 === _v3.length,
      _v11 = _v0.value.size > 0,
      _v12 = _v0.draft.size > 0;
    return {
      ..._v0,
      createdByUsers: _v3,
      membersLoadingInitialData: _v5,
      membersLoadingMore: _v6,
      membersDone: _v7,
      loadMoreMembers: _v8,
      setFilterValues: (_v0, _v1) => {
        let _v2 = new Set(_v0);
        _v0.setDraft(_v2), _v1 || _v0.setValue(_v2);
      },
      updateFilterValues: (_v0, _v1) => {
        let _v2 = Array.from(_v0.value),
          _v3 = Array.from(_v0.draft),
          _v4 = _v2.map(_v0 => _v0.userId),
          _v5 = _v3.map(_v0 => _v0.userId);
        if (_v1) {
          let _v0 = _v5.includes(_v0.userId) ? _v3.filter(_v0 => _v0.userId !== _v0.userId) : [..._v3, _v0];
          _v0.setDraft(new Set(_v0));
        } else {
          let _v0 = _v4.includes(_v0.userId) ? _v2.filter(_v0 => _v0.userId !== _v0.userId) : [..._v2, _v0];
          _v0.setDraft(new Set(_v0)), _v0.setValue(new Set(_v0));
        }
      },
      isFilterActive: _v11,
      isDraftActive: _v12,
      isDraftUpdated: () => {
        let _v0 = Array.from(_v0.value),
          _v1 = Array.from(_v0.draft),
          _v2 = _v0.map(_v0 => _v0.userId),
          _v3 = _v1.map(_v0 => _v0.userId);
        return _v2.length !== _v3.length || !_v2.every(_v0 => _v3.includes(_v0));
      },
      shouldHideFilter: _v10,
      createdByUsersSearchTerm: _v1,
      setCreatedByUsersSearchTerm: _v2
    };
  }], 0);
}