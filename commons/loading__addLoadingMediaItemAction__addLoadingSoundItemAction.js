{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0);
  let _v14 = (0, _v2.createSlice)({
      name: "loading",
      initialState: {
        loadingBrandFontsFromLibrary: [],
        loadingBrandFontsFromFile: [],
        loadingItemFromFile: [],
        uploadingSourceStatuses: {},
        localToRemoteUrl: {}
      },
      reducers: {
        addLoadingMediaItemAction: (_v0, _v1) => {
          let {
            id: _v2,
            item: _v3,
            canBeUseLocally: _v4
          } = _v1.payload;
          _v0.loadingItemFromFile.push({
            id: _v2,
            data: _v3,
            status: _v5.STATUS.PROGRESS,
            type: _v6.UploadItemType.MEDIA,
            sourceHash: _v2,
            canBeUseLocally: _v4
          });
        },
        addLoadingSoundItemAction: (_v0, _v1) => {
          let {
            id: _v2,
            item: _v3
          } = _v1.payload;
          _v0.loadingItemFromFile.push({
            id: _v2,
            data: _v3,
            status: _v5.STATUS.PROGRESS,
            type: _v6.UploadItemType.SOUND,
            sourceHash: _v2,
            canBeUseLocally: !1
          });
        },
        removeLoadingItemAction: (_v0, _v1) => {
          let _v2 = _v0.loadingItemFromFile.findIndex(_v0 => _v0.id === _v1.payload.id);
          -1 !== _v2 && _v0.loadingItemFromFile.splice(_v2, 1);
        },
        updateLoadingItemAction: (_v0, _v1) => {
          let {
              id: _v2,
              item: _v3
            } = _v1.payload,
            _v4 = _v0.loadingItemFromFile.find(_v0 => _v0.id === _v2);
          if (!_v4) throw Error(_v4.ITEM_NOT_FOUND);
          Object.assign(_v4, _v3);
        },
        updateLoadingItemSourceAction: (_v0, _v1) => {
          let {
              hash: _v2,
              source: _v3
            } = _v1.payload,
            _v4 = _v0.loadingItemFromFile.find(_v0 => _v0.sourceHash === _v2);
          if (!_v4) throw Error(_v4.ITEM_NOT_FOUND);
          if (_v4.sourceHash = _v3.hash, _v3.mhash && (_v4.mhash = _v3.mhash), _v3.previewUrl && !(0, _v10.isLocalUrl)(_v3.previewUrl)) {
            if (_v4.canBeUseLocally = !0, (0, _v9.isMediaUploadItem)(_v4)) {
              let {
                width: _v0,
                height: _v1,
                duration: _v2
              } = _v3;
              _v0 && (_v4.data.width = _v0), _v1 && (_v4.data.height = _v1), (0, _v9.isVideoUploadItem)(_v4.data) && _v2 && (_v4.data.duration = _v2);
            }
            _v4.data.url = _v3.previewUrl;
          }
        },
        finishLoadingItemAction: (_v0, _v1) => {
          let {
              hash: _v2
            } = _v1.payload,
            _v3 = _v0.loadingItemFromFile.find(_v0 => _v0.sourceHash === _v2);
          if (!_v3) throw Error(_v4.ITEM_NOT_FOUND);
          _v3.status = _v5.STATUS.DONE;
        },
        updateUploadingSourceStatusAction: (_v0, _v1) => {
          let {
            ids: _v2,
            status: _v3
          } = _v1.payload;
          _v2.forEach(_v0 => {
            _v0.uploadingSourceStatuses[_v0] = _v3;
          });
        },
        addRemoteUrl: (_v0, _v1) => {
          let {
            localUrl: _v2,
            remoteUrl: _v3
          } = _v1.payload;
          _v0.localToRemoteUrl[_v2] = _v3;
        }
      },
      extraReducers: _v0 => {
        _v0.addMatcher(_v12.mediaApi.endpoints.fetchMediaUploads.matchFulfilled, (_v0, _v1) => {
          let _v2 = _v1.payload.items.map(_v0 => _v0.mhash);
          _v0.loadingItemFromFile = _v0.loadingItemFromFile.filter(_v0 => !_v2.includes(_v0.mhash));
        }).addMatcher(_v11.fontsApi.endpoints.uploadAndCreateFont.matchPending, (_v0, _v1) => {
          let {
              isInternal: _v2,
              file: _v3
            } = _v1.meta.arg.originalArgs,
            {
              fontName: _v4,
              displayName: _v5
            } = (0, _v8.getFontExtraData)(_v3, _v2);
          _v2 ? _v0.loadingBrandFontsFromLibrary.push({
            name: _v4,
            displayName: _v5
          }) : _v0.loadingBrandFontsFromFile.push({
            name: _v4
          });
        }).addMatcher(_v11.fontsApi.endpoints.fetchFonts.matchFulfilled, _v0 => {
          _v0.loadingBrandFontsFromFile = [], _v0.loadingBrandFontsFromLibrary = [];
        }).addMatcher(_v11.fontsApi.endpoints.uploadAndCreateFont.matchRejected, (_v0, _v1) => {
          let {
              isInternal: _v2,
              file: _v3
            } = _v1.meta.arg.originalArgs,
            {
              fontName: _v4
            } = (0, _v8.getFontExtraData)(_v3, _v2);
          if (_v2) {
            let _v0 = _v0.loadingBrandFontsFromLibrary.findIndex(_v0 => _v0.name === _v4);
            -1 !== _v0 && _v0.loadingBrandFontsFromLibrary.splice(_v0, 1);
          } else {
            let _v0 = _v0.loadingBrandFontsFromFile.findIndex(_v0 => _v0.name === _v4);
            -1 !== _v0 && _v0.loadingBrandFontsFromFile.splice(_v0, 1);
          }
        });
      }
    }),
    {
      addLoadingMediaItemAction: _v15,
      addLoadingSoundItemAction: _v16,
      removeLoadingItemAction: _v17,
      updateLoadingItemAction: _v18,
      updateLoadingItemSourceAction: _v19,
      finishLoadingItemAction: _v20,
      updateUploadingSourceStatusAction: _v21,
      addRemoteUrl: _v22
    } = _v14.actions,
    _v23 = (0, _v1.createSelector)(_v0 => _v0.loading, _v0 => _v0.loadingItemFromFile.filter(_v9.isMediaUploadItem)),
    _v24 = (0, _v1.createSelector)(_v0 => _v0.loading, _v0 => _v0.loadingItemFromFile.filter(_v9.isSoundUploadItem)),
    _v25 = (0, _v1.createSelector)(_v0 => _v0.loading, _v0 => _v0.localToRemoteUrl),
    _v26 = (0, _v1.createSelector)(_v0 => [_v0.loading, _v0.storyboard, (0, _v13.sourceMapSelector)(_v0)], ([_v0, _v1, _v2]) => 0 !== _v0.loadingItemFromFile.length && !!_v1.layers.filter(_v0 => _v0.type !== _v3.LayerType.HIDDEN).find(_v0 => _v0.composition.find(_v0 => {
      if ((0, _v7.isMediaElement)(_v0)) {
        let _v0 = _v2[_v0.sourceHash];
        return (0, _v10.isDataUrl)(_v0?.thumb?.thumbUrl || "");
      }
      return !1;
    }))),
    _v27 = (0, _v1.createSelector)(_v0 => [_v0.loading.loadingItemFromFile, _v0.loading.uploadingSourceStatuses], ([_v0, _v1]) => {
      let _v2 = Object.assign({}, _v1);
      return _v0.forEach(_v0 => {
        _v0.status !== _v5.STATUS.DONE && (_v2[_v0.sourceHash] = _v0.status);
      }), _v2;
    }),
    _v28 = (0, _v1.createSelector)((_v0, _v1) => [_v0.loading.loadingItemFromFile, _v1], ([_v0, _v1]) => _v0.find(_v0 => _v0.sourceHash === _v1)?.status),
    _v29 = (0, _v1.createSelector)([_v13.nonHiddenLayersSelector, _v27], (_v0, _v1) => {
      let _v2 = {};
      for (let _v0 of _v0) for (let _v0 of _v0.composition) if ((0, _v7.isMediaElement)(_v0)) {
        let _v0 = _v1[_v0.sourceHash];
        _v0 && (_v2[_v0.id] = _v0);
      }
      return _v2;
    }),
    _v30 = _v14.reducer;
  _v0.s(["addLoadingMediaItemAction", 0, _v15, "addLoadingSoundItemAction", 0, _v16, "addRemoteUrl", 0, _v22, "allSourcesStatusSelector", 0, _v27, "default", 0, _v30, "elementStatusSelector", 0, _v28, "elementsStatusesSelector", 0, _v29, "isLoadingElementInUseSelector", 0, _v26, "loadingMediaSelector", 0, _v23, "loadingSoundSelector", 0, _v24, "removeLoadingItemAction", 0, _v17, "sourceStatusSelector", 0, _v0 => (0, _v1.createSelector)(_v27, _v0 => _v0[_v0]), "updateLoadingItemAction", 0, _v18, "updateLoadingItemSourceAction", 0, _v19, "updateUploadingSourceStatusAction", 0, _v21, "urlMapSelector", 0, _v25]);
}