{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["useCreatedByFilter", 0, () => {
    let _v0 = (0, _v3.useFilter)({
        initialValue: new Set()
      }),
      [_v1, _v2] = (0, _v1.useState)(""),
      _v3 = (0, _v2.useDebouncedValue)(_v1, 500),
      {
        users: _v4,
        setSize: _v5,
        isLoadingInitialData: _v6,
        isLoadingMore: _v7,
        isDone: _v8
      } = (0, _v4.useUserTeamMembers)(_v3),
      _v9 = (0, _v1.useCallback)(() => {
        _v5(_v0 => _v0 + 1);
      }, [_v5]),
      _v10 = _v1.length > 0,
      _v11 = !_v6 && !_v10 && 0 === _v4.length,
      _v12 = _v0.value.size > 0,
      _v13 = _v0.draft.size > 0;
    return {
      ..._v0,
      createdByUsers: _v4,
      membersLoadingInitialData: _v6,
      membersLoadingMore: _v7,
      membersDone: _v8,
      loadMoreMembers: _v9,
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
      isFilterActive: _v12,
      isDraftActive: _v13,
      isDraftUpdated: () => {
        let _v0 = Array.from(_v0.value),
          _v1 = Array.from(_v0.draft),
          _v2 = _v0.map(_v0 => _v0.userId),
          _v3 = _v1.map(_v0 => _v0.userId);
        return _v2.length !== _v3.length || !_v2.every(_v0 => _v3.includes(_v0));
      },
      shouldHideFilter: _v11,
      createdByUsersSearchTerm: _v1,
      setCreatedByUsersSearchTerm: _v2
    };
  }]);
}