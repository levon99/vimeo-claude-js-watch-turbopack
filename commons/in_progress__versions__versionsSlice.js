{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = _v0 => _v0.find(_v0 => !_v0.isDeleted && (_v0.upload?.status === "in_progress" || "in_progress" === _v0.versionTranscodeStatus))?.uri ?? _v0.find(_v0 => !_v0.isDeleted && _v0.active)?.uri ?? null,
    _v3 = (0, _v1.createSlice)({
      name: "versions",
      initialState: {
        versionList: [],
        selectedVersionUri: null,
        renditionStatus: null,
        isLocalUploadActive: !1,
        isReverted: !1
      },
      reducers: {
        setVersions(_v0, {
          payload: _v1
        }) {
          _v0.versionList = _v1, _v0.selectedVersionUri ??= _v2(_v1);
        },
        addVersions(_v0, {
          payload: _v1
        }) {
          let _v2 = new Map(_v0.versionList.map(_v0 => [_v0.uri, _v0]));
          _v1.forEach(_v0 => {
            let _v1 = _v2.get(_v0.uri);
            _v2.set(_v0.uri, {
              ..._v1,
              ..._v0,
              isDeleted: _v1?.isDeleted === !0 || _v0.isDeleted
            });
          }), _v0.versionList = [..._v2.values()], _v0.selectedVersionUri ??= _v2(_v0.versionList);
        },
        addNewVersion(_v0, {
          payload: _v1
        }) {
          let _v2 = _v0.versionList.findIndex(_v0 => _v0.uri === _v1.uri);
          if (-1 !== _v2) _v0.versionList[_v2] = {
            ..._v0.versionList[_v2],
            ..._v1,
            isDeleted: !0 === _v0.versionList[_v2].isDeleted || _v1.isDeleted
          };else {
            let _v0 = _v0.versionList.find(_v0 => _v0.active);
            _v0 && _v1.active && (_v0.active = !1), _v0.versionList.unshift(_v1);
          }
          _v0.selectedVersionUri = _v1.uri ?? null;
        },
        deleteVersion(_v0, {
          payload: _v1
        }) {
          let _v2 = _v0.versionList.find(_v0 => _v0.uri === _v1);
          _v2 && (_v2.isDeleted = !0), _v0.renditionStatus?.versionUri === _v1 && (_v0.renditionStatus = null), _v0.selectedVersionUri === _v1 && (_v0.selectedVersionUri = null);
        },
        setIsReverted(_v0, {
          payload: _v1
        }) {
          _v0.isReverted = _v1;
        },
        resetVersions(_v0) {
          _v0.versionList = [], _v0.selectedVersionUri = null, _v0.renditionStatus = null, _v0.isReverted = !1;
        },
        setSelectedVersionUri(_v0, {
          payload: _v1
        }) {
          _v0.selectedVersionUri = _v1;
        },
        setRenditionStatus(_v0, {
          payload: _v1
        }) {
          _v0.renditionStatus = _v1;
        },
        setIsLocalUploadActive(_v0, {
          payload: _v1
        }) {
          _v0.isLocalUploadActive = _v1;
        }
      }
    });
  _v0.s(["versionsSlice", 0, _v3]);
}