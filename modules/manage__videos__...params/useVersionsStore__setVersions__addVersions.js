{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.i(0);
  var _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let {
    setVersions: _v4,
    addVersions: _v5,
    addNewVersion: _v6,
    deleteVersion: _v7,
    resetVersions: _v8,
    setSelectedVersionUri: _v9
  } = _v0.i(0).versionsSlice.actions;
  _v0.s(["useVersionsStore", 0, _v0 => {
    let _v1 = (0, _v2.useDispatch)(),
      _v2 = (0, _v3.useSelector)(_v0 => _v0.versions.versionList);
    return _v0({
      versionList: _v2,
      selectedVersionUri: (0, _v3.useSelector)(_v0 => _v0.versions.selectedVersionUri),
      setVersions: (0, _v1.useCallback)(_v0 => _v1(_v4(_v0)), [_v1]),
      addVersions: (0, _v1.useCallback)(_v0 => _v1(_v5(_v0)), [_v1]),
      addNewVersion: (0, _v1.useCallback)(_v0 => _v1(_v6(_v0)), [_v1]),
      deleteVersion: (0, _v1.useCallback)(_v0 => _v1(_v7(_v0)), [_v1]),
      resetVersions: (0, _v1.useCallback)(() => _v1(_v8()), [_v1]),
      setSelected: (0, _v1.useCallback)(_v0 => _v1(_v9(_v0)), [_v1])
    });
  }]);
}