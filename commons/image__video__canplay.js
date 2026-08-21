{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.i(0);
  var _v2 = _v0.i(0),
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
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0);
  let _v27 = () => {
    let _v0 = (0, _v18.useAppDispatch)(),
      {
        addElement: _v1,
        addIntroOutroElement: _v2
      } = (0, _v7.useAddElement)(),
      {
        getCurrentTimeFromRef: _v3
      } = (0, _v12.useDragonfly)(),
      {
        isReplacing: _v4,
        replaceElement: _v5
      } = (0, _v8.useReplaceElement)(),
      _v6 = (0, _v18.useAppSelector)(_v16.selectedElementsSelector),
      _v7 = (0, _v18.useAppSelector)(_v14.isInteractiveSelector),
      _v8 = (0, _v18.useAppSelector)(_v17.durationSelector),
      _v9 = (0, _v18.useAppSelector)(_v17.orientationSelector),
      _v10 = (0, _v1.useCallback)(async (_v0, _v1) => {
        let _v2 = {
          sourceHash: _v0.hash,
          isLoading: !1,
          ...(_v0.type === _v6.SourceType.CLIP && {
            hasAudio: _v0.hasAudio
          })
        };
        _v0.type === _v6.SourceType.AUDIO || _v7 || (await (0, _v22.fetchMediaMetadata)({
          url: _v0.previewUrl,
          type: _v0.type === _v6.SourceType.IMAGE ? "image" : "video",
          eventName: "canplay",
          isCrossOrigin: !0
        })), _v0((0, _v17.addSourceAction)(_v0)), (0, _v2.batch)(() => {
          _v0((0, _v17.updateElementAction)({
            ceId: _v1,
            element: _v2,
            isIgnoreUndo: !0
          })), _v0((0, _v15.updateSnapshotsWithSourceAction)({
            ceId: _v1,
            sourceData: _v2,
            source: _v0
          })), _v0((0, _v17.updateMediaElementsWithSameSource)({
            ceId: _v1,
            element: _v2
          }));
        });
      }, [_v0, _v7]),
      _v11 = (0, _v1.useCallback)(({
        rect: _v0,
        type: _v1,
        thumbnailUrl: _v2,
        colors: _v3,
        duration: _v4,
        time: _v5,
        creditInfo: _v6,
        description: _v7,
        sourceHash: _v8
      }) => {
        let _v9 = _v3(),
          _v10 = (0, _v25.toNearestFrame)(_v4 || _v10.DEFAULT_IMAGE_ELEMENT_DURATION),
          {
            start: _v11,
            end: _v12
          } = {
            start: _v5 ?? _v9,
            end: (_v5 ?? _v9) + _v10
          },
          _v13 = _v4.AnimationType.NONE;
        return (0, _v22.createMediaElementObject)({
          type: _v1,
          start: _v11,
          end: _v12,
          rect: _v0,
          colors: _v3,
          thumbnailUrl: _v2,
          creditInfo: _v6,
          effects: [],
          animationName: _v13,
          elementDuration: _v10,
          description: _v7,
          sourceHash: _v8
        });
      }, [_v3]),
      _v12 = (0, _v1.useCallback)(async ({
        mediaItem: _v0,
        time: _v1,
        addBreathAnimation: _v2 = !1,
        sourceHash: _v3
      }) => {
        var _v4, _v5;
        let _v6,
          _v7 = _v3(),
          _v8 = (0, _v26.isVideoUploadItem)(_v0) ? _v0.duration : _v10.DEFAULT_IMAGE_ELEMENT_DURATION,
          {
            start: _v9,
            end: _v10
          } = {
            start: _v1 ?? _v7,
            end: (_v1 ?? _v7) + _v8
          },
          _v11 = [(_v4 = _v10, _v5 = _v9, _v6 = _v2 ? {
            transformX: _v10.DEFAULT_RECT.width * (1 - _v9.BREATH_EFFECT_SCALES.ZOOM_IN) / 2,
            transformY: _v10.DEFAULT_RECT.height * (1 - _v9.BREATH_EFFECT_SCALES.ZOOM_IN) / 2,
            scale: _v9.BREATH_EFFECT_SCALES.ZOOM_IN
          } : {
            transformX: 0,
            transformY: 0,
            scale: 1
          }, {
            name: _v20.ImageEffectName.breath,
            options: {
              transformsFromFootageRect: [{
                timing: {
                  startTime: 0,
                  endTime: _v4 - _v5
                },
                transform: {
                  type: _v20.TransitionTimingFunctionName.LINEAR,
                  ..._v6
                }
              }]
            }
          })],
          _v12 = await (0, _v22.getMediaSize)(_v9, _v0, _v7, !0);
        return {
          id: (0, _v21.createUuidV4)(),
          type: _v22.mediaTypeToCompositionTypeMap[_v0.type],
          compositionTiming: {
            start: _v9,
            end: _v10
          },
          sourceFootageRect: _v10.DEFAULT_RECT,
          rect: _v28(_v12.height, _v12.width),
          innerMediaRect: _v10.DEFAULT_RECT,
          isManualCrop: !1,
          isLoading: !1,
          thumbnailUrl: _v0.url,
          sourceHash: _v3 || (0, _v21.createUuidV4)(),
          animationMid: _v4.AnimationMid.NONE,
          animationOut: _v4.AnimationOut.NONE,
          ...((0, _v26.isImageUploadItem)(_v0) && {
            layers: [{
              type: _v20.ImageLayerTypeName.FULL_SOURCE,
              effects: _v11
            }],
            flip: {
              horizontal: !1,
              vertical: !1
            },
            rotate: 0
          }),
          ...((0, _v26.isVideoUploadItem)(_v0) && {
            previewUrl: _v0.url,
            hasAudio: _v0.hasAudio,
            timing: {
              startTime: 0,
              endTime: _v8
            },
            muted: !_v0.hasAudio,
            effects: [{
              type: _v5.SoundEffectType.volume,
              level: 1,
              startTime: 0,
              endTime: _v8
            }]
          }),
          selectable: !0
        };
      }, [_v3, _v7, _v9]),
      _v13 = (0, _v1.useCallback)(async ({
        mediaItem: _v0,
        introOutroType: _v1,
        time: _v2,
        isAddToStoryboard: _v3 = !0,
        useGraphicsSizing: _v4 = !1,
        position: _v5,
        colors: _v6
      }) => {
        let _v7 = await (0, _v22.getMediaSize)(_v9, _v0, _v4, !0),
          {
            thumbnailUrl: _v8,
            duration: _v9,
            type: _v10,
            creditInfo: _v11,
            description: _v12
          } = _v0,
          _v13 = _v6[0],
          _v14 = _v4 ? (0, _v23.calculateContainedRect)({
            rect: _v13.rect,
            newWidth: _v7.width,
            newHeight: _v7.height
          }) : _v28(_v7.height, _v7.width, _v5);
        if (!(0, _v24.isValidRect)(_v14)) return void _v13.default.sendLog(_v11.INVALID_RECT, _v19.LogComponent.EDITOR_ERROR, {
          element: JSON.stringify(_v13),
          newRect: JSON.stringify(_v14),
          flow: "createOrReplaceMediaElement"
        });
        let _v15 = _v11({
          rect: _v14,
          type: _v10,
          thumbnailUrl: _v8,
          colors: _v6,
          duration: _v9,
          time: _v2,
          creditInfo: _v11,
          description: _v12,
          sourceHash: (0, _v21.createUuidV4)()
        });
        return _v4 && _v5({
          selectedElement: _v13,
          newElement: _v15
        }), _v3 && (_v1 ? _v2(_v15, _v8, _v1) : _v1(_v15)), _v15;
      }, [_v1, _v2, _v11, _v4, _v9, _v5, _v6, _v8]);
    return {
      addMediaSourceForElement: _v10,
      addOrReplaceMediaElement: (0, _v1.useCallback)((_v0, _v1) => {
        let _v2 = _v6[0];
        if (_v4) {
          let _v0 = {
            ..._v0,
            rect: (0, _v23.calculateContainedRect)({
              rect: _v2.rect,
              newWidth: _v0.rect.width,
              newHeight: _v0.rect.height
            })
          };
          _v5({
            selectedElement: _v2,
            newElement: _v0
          });
        } else _v1 && _v1(_v0);
      }, [_v1, _v4, _v5, _v6]),
      createOrReplaceMediaElement: _v13,
      createMediaElementV2: _v12
    };
  };
  function _v28(_v0, _v1, _v2) {
    return _v2 ? {
      x: _v2.left,
      y: _v2.top,
      width: _v1,
      height: _v0
    } : (0, _v23.recenterRect)(_v10.DEFAULT_RECT, _v1, _v0);
  }
  _v0.s(["useMediaElement", 0, _v27], 0);
  var _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0);
  let _v45 = new Map(),
    _v46 = (_v0, _v1) => _v1.origin === _v41.UploadMediaOrigin.VIMEO && (0, _v34.isClipId)(_v1.media.id) ? {
      ..._v0,
      vimeoVideoId: _v1.media.id
    } : _v0;
  _v0.s(["useUploadQueue", 0, () => {
    let _v0 = (0, _v18.useAppDispatch)(),
      _v1 = (0, _v18.useAppSelector)(_v17.videoSessionIdSelector),
      _v2 = (0, _v18.useAppSelector)(_v17.storyboardIdSelector),
      _v3 = (0, _v18.useAppSelector)(_v37.uploadsSelector),
      _v4 = (0, _v18.useAppSelector)(_v36.lastElementSelector),
      [_v5] = (0, _v33.useLazyCheckMediaProgressQuery)(),
      [_v6] = (0, _v33.useUploadProviderItemMutation)(),
      {
        addMediaSourceForElement: _v7
      } = _v27(),
      {
        alertUploadFailed: _v8
      } = (0, _v3.useAlerts)(),
      [_v9] = (0, _v32.useDeleteIntroOutroMutation)(),
      [_v10] = (0, _v32.useUploadAndCreateIntroOutroMutation)(),
      {
        replaceElement: _v11
      } = (0, _v8.useReplaceElement)(),
      {
        notifyHoverAssetUploadFailed: _v12
      } = (0, _v29.useNotifications)(),
      [_v13] = (0, _v34.useLazyCreateMediaSourceQuery)(),
      _v14 = (0, _v1.useCallback)(({
        error: _v0,
        elementSourceHash: _v1,
        uploadItem: _v2,
        sourceHash: _v3,
        isHoverAsset: _v4 = !1
      }) => {
        if ("The user aborted a request." === _v0.message) return {
          status: _v41.UploadMediaStatus.ABORTED
        };
        _v0((0, _v37.removeUploadAction)({
          id: _v2.id
        }));
        let _v5 = (0, _v24.getAllElements)(_v38.default.getState().storyboard.layers);
        return _v4 ? _v5.filter(_v0 => (0, _v42.isMediaElement)(_v0) && _v0.sourceHash === _v1).forEach(_v0 => {
          _v12(_v0.interactiveHotspot?.name), _v0((0, _v17.updateElementAction)({
            ceId: _v0.id,
            element: {
              interactiveHotspot: {
                hover: {
                  sourceHash: ""
                }
              }
            },
            isIgnoreUndo: !0
          }));
        }) : (_v3 ? (_v5.filter(_v0 => (0, _v42.isMediaElement)(_v0) && _v0.sourceHash === _v1).forEach(({
          id: _v0
        }) => {
          _v0((0, _v17.updateElementAction)({
            ceId: _v0,
            element: {
              sourceHash: _v3
            },
            isIgnoreUndo: !0
          }));
        }), _v0((0, _v35.updateUploadingSourceStatusAction)({
          ids: [_v3],
          status: _v40.STATUS.ERROR
        }))) : _v4 ? _v5.filter(_v0 => (0, _v42.isMediaElement)(_v0) && _v0.sourceHash === _v1).forEach(_v0 => {
          _v11({
            selectedElement: _v0,
            newElement: structuredClone(_v4)
          });
        }) : _v5.filter(_v0 => (0, _v42.isMediaElement)(_v0) && _v0.sourceHash === _v1).forEach(({
          id: _v0
        }) => {
          _v0((0, _v17.deleteElementAction)({
            ceId: _v0,
            isIgnoreUndo: !0
          }));
        }), _v8((0, _v43.prettifyString)(_v2.media.fileName))), {
          status: _v41.UploadMediaStatus.ERROR
        };
      }, [_v0, _v4, _v8, _v12, _v11]),
      _v15 = (0, _v1.useCallback)(async _v0 => {
        let _v1 = async _v0 => {
          let _v1 = await _v5(_v0).unwrap();
          if (_v0((0, _v37.updateUploadProgressAction)({
            id: _v0.assetId,
            progress: _v1.bytesCompleted / _v1.totalBytes
          })), "downloaded" === _v1.downloadStatus) return _v0();
          setTimeout(() => _v1(_v0), 0);
        };
        return new Promise(_v1);
      }, [_v5, _v0]),
      _v16 = (0, _v1.useCallback)(_v0 => {
        let _v1 = _v3.find(_v0 => {
          if (!(0, _v44.isProvidedMedia)(_v0)) return !1;
          let _v1 = _v0.media;
          return _v0.status.status === _v41.UploadMediaStatus.SUCCESS && _v1.id === _v0;
        });
        return _v1?.source;
      }, [_v3]),
      _v17 = (0, _v1.useCallback)((_v0, _v1) => {
        (0, _v2.batch)(() => {
          _v0((0, _v37.updateUploadSourceAction)({
            id: _v1.id,
            source: _v0
          })), _v0((0, _v37.updateUploadStatusAction)({
            id: _v1.id,
            status: _v41.UploadMediaStatus.SUCCESS
          }));
        });
      }, [_v0]),
      _v18 = (0, _v1.useCallback)(({
        uploadItem: _v0,
        source: _v1,
        isAddToStoryboard: _v2 = !0,
        elementSourceHash: _v3,
        uploadedData: _v4
      }) => (_v2 && (0, _v24.getAllElements)(_v38.default.getState().storyboard.layers).filter(_v0 => (0, _v42.isMediaElement)(_v0) && _v0.sourceHash === _v3).forEach(({
        id: _v0
      }) => {
        _v7(_v1, _v0);
      }), _v4 && _v0((0, _v37.updateUploadHashAction)({
        id: _v0.id,
        mediaHash: _v1.mhash
      })), _v17(_v1, _v0), {
        status: _v41.UploadMediaStatus.SUCCESS
      }), [_v7, _v0, _v17]),
      _v19 = (0, _v1.useCallback)(({
        uploadItem: _v0,
        source: _v1,
        elementSourceHash: _v2
      }) => {
        let _v3 = {
          interactiveHotspot: {
            hover: {
              sourceHash: _v1.hash,
              isLoading: !1
            }
          }
        };
        return _v0((0, _v17.addSourceAction)(_v1)), (0, _v24.getAllElements)(_v38.default.getState().storyboard.layers).filter(_v0 => (0, _v42.isMediaElement)(_v0) && _v0.sourceHash === _v2).forEach(({
          id: _v0
        }) => {
          _v0((0, _v17.updateElementAction)({
            ceId: _v0,
            element: _v3,
            isIgnoreUndo: !0
          }));
        }), _v17(_v1, _v0), {
          status: _v41.UploadMediaStatus.SUCCESS
        };
      }, [_v0, _v17]),
      _v20 = (0, _v1.useCallback)(() => {
        for (let _v0 of _v3) {
          let {
            status: _v0
          } = _v0.status;
          (_v0 === _v41.UploadMediaStatus.QUEUED || _v0 === _v41.UploadMediaStatus.PROGRESS) && (_v45.get(_v0.abortControllerId)?.abort(), _v0((0, _v37.updateUploadStatusAction)({
            id: _v0.id,
            status: _v41.UploadMediaStatus.ABORTED
          })));
        }
      }, [_v0, _v3]),
      _v21 = (0, _v1.useCallback)(async ({
        origin: _v0,
        elementSourceHash: _v1,
        uploadItem: _v2,
        abortController: _v3,
        isHoverAsset: _v4 = !1,
        storyboardId: _v5,
        videoSessionId: _v6,
        isEditorial: _v7 = !1
      }) => {
        let _v8;
        _v3.signal;
        try {
          (_v8 = await _v6({
            userId: _v31.default.teamOwnerId,
            storyboardId: _v5,
            serviceName: _v2.media.serviceName || _v0,
            assetId: _v2.media.id,
            isEditorial: _v7,
            filePayload: {
              fileName: _v2.media.fileName,
              fileId: _v2.media.id
            }
          }).unwrap()).async && (await _v15({
            storyboardId: _v5,
            assetId: _v2.media.id,
            serviceName: _v2.media.serviceName || _v0,
            fileName: _v2.media.fileName,
            fileSize: _v2.media.fileSize ?? 0
          })), _v0((0, _v37.updateUploadStatusAction)({
            id: _v2.id,
            status: _v41.UploadMediaStatus.FETCHING_SOURCE
          }));
          let _v0 = (await _v13({
            vsid: _v1,
            fileName: _v2.media.fileName,
            fileSize: _v2.media.fileSize || 0,
            sourceHash: _v8.hash,
            isHotspot: !1,
            storyboardId: _v5,
            caller: "addFromProvider"
          }).unwrap()).source;
          if (!_v0) throw Error("Source is missing");
          if (_v0 = _v46(_v0, _v2), _v4) return _v19({
            uploadItem: _v2,
            source: _v0,
            elementSourceHash: _v1
          });
          return _v18({
            uploadItem: _v2,
            source: _v0,
            elementSourceHash: _v1
          });
        } catch (_v0) {
          return _v14({
            error: _v0,
            elementSourceHash: _v1,
            uploadItem: _v2,
            sourceHash: _v8?.hash,
            isHoverAsset: _v4
          });
        }
      }, [_v13, _v0, _v19, _v18, _v14, _v15, _v6, _v1]),
      _v22 = (0, _v1.useCallback)(_v0 => {
        let _v1 = _v3.find(_v0 => _v0.id === _v0);
        _v1 && _v45.get(_v1.abortControllerId)?.abort();
      }, [_v3]),
      _v23 = (0, _v1.useCallback)(async ({
        file: _v0,
        context: _v1
      }) => {
        let _v2 = URL.createObjectURL(_v0),
          _v3 = await (0, _v22.fetchVideoMetadata)(_v2, "loadedmetadata", !0);
        if (_v3.duration && _v3.duration > 60) throw Error(_v30.VIDEO_DURATION_ABOVE_60_SEC);
        let _v4 = {
          id: (0, _v21.createUuidV4)(),
          thumbnailUrl: "",
          uplOrigin: _v41.UploadMediaOrigin.BRAND,
          previewUrl: "",
          fileName: _v0.name,
          title: "",
          type: _v39.MediaType.VIDEO,
          date: "",
          modificationDate: "",
          width: _v3.width,
          height: _v3.height,
          duration: _v3.duration
        };
        _v4.previewUrl = _v2;
        let _v5 = {
          id: _v4.id,
          type: _v39.MediaType.VIDEO,
          origin: _v41.UploadMediaOrigin.BRAND,
          status: {
            progress: 0,
            status: _v41.UploadMediaStatus.QUEUED
          },
          media: _v4,
          context: _v1
        };
        try {
          let _v0 = _v0.name.split(".");
          _v0((0, _v37.addUploadAction)(_v5));
          let {
            uploadedAssetId: _v1
          } = await _v10({
            file: _v0,
            name: _v0[0],
            type: _v1,
            fileName: _v0.name,
            fileSize: _v0.size,
            kitId: _v10.DEFAULT_BRANDKIT_ID
          }).unwrap();
          _v0.width = _v3.width, _v0.height = _v3.height, _v0.duration = _v3.duration, _v0.id = _v4.id, _v0.preview = _v0.url, _v0((0, _v37.updateUploadIdAction)({
            oldId: _v4.id,
            newId: _v1
          })), _v0((0, _v37.updateUploadStatusAction)({
            id: _v5.id,
            status: _v41.UploadMediaStatus.SUCCESS
          }));
        } catch (_v0) {
          throw _v0((0, _v37.removeUploadAction)({
            id: _v5.id
          })), _v0;
        }
      }, [_v10, _v0]),
      _v24 = (0, _v1.useCallback)(async _v0 => {
        try {
          await _v9({
            assetId: _v0,
            kitId: _v10.DEFAULT_BRANDKIT_ID
          }).unwrap(), _v0((0, _v37.removeUploadAction)({
            id: _v0
          }));
        } catch (_v0) {
          throw Error(_v30.SOMETHING_WENT_WRONG);
        }
      }, [_v0, _v9]),
      _v25 = (0, _v1.useCallback)((_v0, _v1) => {
        if (!_v1.hoverAssetId) throw Error("Missing hover asset id");
        let _v2 = (0, _v43.randomString)(5);
        _v45.set(_v2, new AbortController());
        let _v3 = {
          ..._v0,
          id: (0, _v43.randomString)(5),
          media: {
            ..._v1,
            id: _v1.hoverAssetId,
            fileName: _v1.fileName.replace(/(\.[^.]+)$/, "__hover$1")
          },
          abortControllerId: _v2
        };
        return _v0((0, _v37.addUploadAction)(_v3)), _v0((0, _v37.updateUploadStatusAction)({
          id: _v3.id,
          status: _v41.UploadMediaStatus.PROGRESS
        })), _v3;
      }, [_v0]),
      _v26 = (0, _v1.useCallback)((_v0, _v1, _v2) => {
        let _v3 = _v45.get(_v0.abortControllerId);
        if (!_v3) throw Error("Missing hover asset abort controller");
        return _v21({
          origin: _v1,
          elementSourceHash: _v2,
          uploadItem: _v0,
          abortController: _v3,
          isHoverAsset: !0,
          storyboardId: _v2
        });
      }, [_v2, _v21]),
      _v27 = (0, _v1.useCallback)(async ({
        uploadItem: _v0,
        existingSource: _v1,
        elementSourceHash: _v2,
        hoverAssetUploadItem: _v3,
        origin: _v4
      }) => {
        if (_v3) {
          let _v0 = _v16(_v3.media.id);
          _v0 ? _v19({
            uploadItem: _v3,
            source: _v0,
            elementSourceHash: _v2
          }) : _v26(_v3, _v4, _v2);
        }
        let _v5 = _v46(_v1, _v0);
        return _v18({
          uploadItem: _v0,
          source: _v5,
          elementSourceHash: _v2
        });
      }, [_v16, _v19, _v18, _v26]);
    return {
      uploadIntroOutroMedia: _v23,
      deleteIntroOutroMedia: _v24,
      cancelUploadMedia: _v22,
      uploadMedia: (0, _v1.useCallback)(async ({
        origin: _v0,
        mediaItem: _v1,
        elementSourceHash: _v2,
        isReplacing: _v3,
        videoSessionId: _v4,
        storyboardId: _v5 = _v2,
        isEditorial: _v6 = !1
      }) => {
        _v3 && _v20();
        let _v7 = (0, _v44.getItemType)(_v0, _v1);
        if (!(0, _v42.isMediaType)(_v7)) throw Error(_v30.UPLOAD_FORMAT_ERROR);
        let _v8 = new AbortController(),
          _v9 = (0, _v43.randomString)(5);
        _v45.set(_v9, _v8);
        let _v10 = {
          id: (0, _v43.randomString)(5),
          type: _v7,
          origin: _v0,
          status: {
            progress: 0,
            status: _v41.UploadMediaStatus.QUEUED
          },
          media: _v1,
          abortControllerId: _v9
        };
        if (!_v10.type) {
          _v10.status.status = _v41.UploadMediaStatus.ERROR;
          let _v0 = Error("Unknown file type");
          return _v10.error = _v0, _v14({
            error: _v0,
            elementSourceHash: _v2,
            uploadItem: _v10
          });
        }
        _v0((0, _v37.addUploadAction)(_v10)), _v0((0, _v37.updateUploadStatusAction)({
          id: _v10.id,
          status: _v41.UploadMediaStatus.PROGRESS
        }));
        let _v11 = _v1.hoverAssetId ? _v25(_v10, _v1) : null,
          _v12 = _v16(_v1.id);
        return _v12 ? _v27({
          uploadItem: _v10,
          existingSource: _v12,
          elementSourceHash: _v2,
          hoverAssetUploadItem: _v11,
          origin: _v0
        }) : (_v11 && (await _v26(_v11, _v0, _v2)), _v21({
          origin: _v0,
          elementSourceHash: _v2,
          uploadItem: _v10,
          abortController: _v8,
          storyboardId: _v5,
          videoSessionId: _v4,
          isEditorial: _v6
        }));
      }, [_v20, _v2, _v0, _v16, _v21, _v14, _v25, _v27, _v26])
    };
  }], 0);
}