{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = (0, _v1.createSlice)({
      name: "history",
      initialState: {
        undoSnapshots: [],
        redoSnapshots: []
      },
      reducers: {
        undoAction: _v0 => {
          _v0.undoSnapshots.pop();
        },
        redoAction: _v0 => {
          _v0.redoSnapshots.pop();
        },
        addUndoSnapshotAction: (0, _v2.default)((_v0, _v1) => {
          _v0.undoSnapshots.push(_v1.payload), _v0.undoSnapshots.length > 40 && _v0.undoSnapshots.shift();
        }, 200, {
          leading: !0,
          trailing: !1
        }),
        addRedoSnapshotAction: (_v0, _v1) => {
          _v0.redoSnapshots.push(_v1.payload);
        },
        resetRedoAction: _v0 => {
          _v0.redoSnapshots = [];
        },
        resetUndoAction: _v0 => {
          _v0.undoSnapshots = [];
        },
        resetHistoryAction: _v0 => {
          _v0.undoSnapshots = [], _v0.redoSnapshots = [];
        },
        restoreHistoryAction: (_v0, _v1) => {
          let {
            undoSnapshots: _v2,
            redoSnapshots: _v3
          } = _v1.payload;
          _v0.undoSnapshots = _v2, _v0.redoSnapshots = _v3;
        },
        updateSnapshotsWithSourceAction: (_v0, _v1) => {
          let {
            ceId: _v2,
            sourceData: _v3,
            source: _v4
          } = _v1.payload;
          [..._v0.undoSnapshots, ..._v0.redoSnapshots].forEach(_v0 => {
            _v0.layers.forEach(_v0 => {
              _v0.composition.forEach((_v0, _v1, _v2) => {
                _v0.id === _v2 && (0, _v3.isMediaElement)(_v0) && _v0.isLoading && (_v2[_v1] = {
                  ..._v0,
                  ..._v3
                });
              });
            }), _v0.sources.find(_v0 => _v0.hash === _v4.hash) || _v0.sources.push(_v4);
          });
        },
        updateSourceAction: (_v0, _v1) => {
          let {
            hash: _v2,
            source: _v3
          } = _v1.payload;
          [..._v0.undoSnapshots, ..._v0.redoSnapshots].forEach(_v0 => {
            let [_v1, _v2] = (0, _v4.updateStoryboardSource)(_v0, _v2, _v3);
            _v0.layers = _v1, _v0.sources = _v2;
          });
        }
      }
    }),
    {
      undoAction: _v6,
      redoAction: _v7,
      addUndoSnapshotAction: _v8,
      addRedoSnapshotAction: _v9,
      resetUndoAction: _v10,
      resetRedoAction: _v11,
      resetHistoryAction: _v12,
      restoreHistoryAction: _v13,
      updateSnapshotsWithSourceAction: _v14,
      updateSourceAction: _v15
    } = _v5.actions,
    _v16 = _v5.reducer;
  _v0.s(["addRedoSnapshotAction", 0, _v9, "addUndoSnapshotAction", 0, _v8, "default", 0, _v16, "redoAction", 0, _v7, "resetHistoryAction", 0, _v12, "resetRedoAction", 0, _v11, "restoreHistoryAction", 0, _v13, "undoAction", 0, _v6, "updateSnapshotsWithSourceAction", 0, _v14, "updateSourceAction", 0, _v15]);
}