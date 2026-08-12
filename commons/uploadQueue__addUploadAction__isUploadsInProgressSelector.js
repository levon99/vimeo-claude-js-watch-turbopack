{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = (0, _v1.createSlice)({
      name: "uploadQueue",
      initialState: {
        uploads: []
      },
      reducers: {
        addUploadAction: (_v0, _v1) => {
          _v0.uploads.find(_v0 => _v0.id === _v1.payload.id) || _v0.uploads.unshift(_v1.payload);
        },
        setUploadErrorAction: (_v0, _v1) => {
          let _v2 = _v0.uploads.find(_v0 => _v0.id === _v1.payload.id);
          _v2 && (_v2.error = _v1.payload.error);
        },
        updateUploadStatusAction: (_v0, _v1) => {
          let _v2 = _v0.uploads.find(_v0 => _v0.id === _v1.payload.id);
          _v2 && (_v2.status.status = _v1.payload.status);
        },
        updateUploadProgressAction: (_v0, _v1) => {
          let _v2 = _v0.uploads.find(_v0 => _v0.id === _v1.payload.id);
          _v2 && (_v2.status.progress = _v1.payload.progress);
        },
        updateUploadSourceAction: (_v0, _v1) => {
          let _v2 = _v0.uploads.find(_v0 => _v0.id === _v1.payload.id);
          _v2 && (_v2.source = _v1.payload.source);
        },
        updateUploadIdAction: (_v0, _v1) => {
          let _v2 = _v0.uploads.find(_v0 => _v0.id === _v1.payload.oldId);
          _v2 && (_v2.id = _v1.payload.newId);
        },
        updateUploadHashAction: (_v0, _v1) => {
          let _v2 = _v0.uploads.find(_v0 => _v0.id === _v1.payload.id);
          _v2 && (_v2.media.id = _v1.payload.mediaHash);
        },
        removeUploadAction: (_v0, _v1) => {
          _v0.uploads = _v0.uploads.filter(_v0 => _v0.id !== _v1.payload.id);
        }
      }
    }),
    {
      addUploadAction: _v4,
      setUploadErrorAction: _v5,
      updateUploadProgressAction: _v6,
      updateUploadStatusAction: _v7,
      updateUploadSourceAction: _v8,
      updateUploadIdAction: _v9,
      updateUploadHashAction: _v10,
      removeUploadAction: _v11
    } = _v3.actions,
    _v12 = _v3.reducer;
  _v0.s(["addUploadAction", 0, _v4, "default", 0, _v12, "isUploadsInProgressSelector", 0, _v0 => _v0.uploadQueue.uploads.some(_v0 => _v0.status.status === _v2.UploadMediaStatus.PROGRESS), "removeUploadAction", 0, _v11, "updateUploadHashAction", 0, _v10, "updateUploadIdAction", 0, _v9, "updateUploadProgressAction", 0, _v6, "updateUploadSourceAction", 0, _v8, "updateUploadStatusAction", 0, _v7, "uploadsSelector", 0, _v0 => _v0.uploadQueue.uploads]);
}