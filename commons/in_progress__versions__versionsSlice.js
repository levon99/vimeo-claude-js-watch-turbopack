{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = _v0 => _v0.find(_v0 => _v0.upload?.status === "in_progress" || "in_progress" === _v0.versionTranscodeStatus)?.uri ?? _v0.find(_v0 => _v0.active)?.uri ?? null,
    _v3 = (0, _v1.createSlice)({
      name: "versions",
      initialState: {
        versionList: [],
        selectedVersionUri: null
      },
      reducers: {
        setVersions(_v0, {
          payload: _v1
        }) {
          _v0.versionList = _v1, null === _v0.selectedVersionUri && (_v0.selectedVersionUri = _v2(_v1));
        },
        addVersions(_v0, {
          payload: _v1
        }) {
          let _v2 = new Map(_v0.versionList.map(_v0 => [_v0.uri, _v0]));
          _v1.forEach(_v0 => _v2.set(_v0.uri, {
            ..._v2.get(_v0.uri),
            ..._v0
          })), _v0.versionList = [..._v2.values()], null === _v0.selectedVersionUri && (_v0.selectedVersionUri = _v2(_v0.versionList));
        },
        addNewVersion(_v0, {
          payload: _v1
        }) {
          let _v2 = _v0.versionList.findIndex(_v0 => _v0.uri === _v1.uri);
          if (-1 !== _v2) _v0.versionList[_v2] = _v1;else {
            let _v0 = _v0.versionList.find(_v0 => _v0.active);
            _v0 && _v1.active && (_v0.active = !1), _v0.versionList.unshift(_v1);
          }
          _v0.selectedVersionUri = _v1.uri ?? null;
        },
        deleteVersion(_v0, {
          payload: _v1
        }) {
          let _v2 = _v0.versionList.find(_v0 => _v0.uri === _v1);
          _v2 && (_v2.isDeleted = !0);
        },
        resetVersions(_v0) {
          _v0.versionList = [], _v0.selectedVersionUri = null;
        },
        setSelectedVersionUri(_v0, {
          payload: _v1
        }) {
          _v0.selectedVersionUri = _v1;
        }
      }
    });
  _v0.s(["versionsSlice", 0, _v3]);
}