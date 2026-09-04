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
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0);
  let _v21 = () => {
    let {
      getCurrentTimeFromRef: _v0
    } = (0, _v20.useDragonfly)();
    return {
      createSoundElement: (0, _v1.useCallback)(({
        soundItem: _v0,
        time: _v1,
        sourceHash: _v2
      }) => {
        let {
            album: _v3,
            artist: _v4,
            url: _v5,
            id: _v6,
            name: _v7,
            duration: _v8
          } = _v0,
          _v9 = _v0(),
          {
            start: _v10,
            end: _v11
          } = {
            start: _v1 ?? _v9,
            end: (_v1 ?? _v9) + _v8
          };
        return {
          album: _v3 ?? "",
          name: _v7,
          artist: _v4 ?? "",
          url: _v5,
          id: `${_v6}_${(0, _v12.createUuidV4)()}`,
          type: _v18.CompositionElementType.SOUND,
          compositionTiming: {
            start: _v10,
            end: _v11
          },
          timing: {
            startTime: 0,
            endTime: _v8
          },
          rect: _v8.DEFAULT_RECT,
          muted: !1,
          sourceHash: _v2 ?? _v6.toString(),
          selectable: !0,
          effects: [{
            type: _v17.SoundEffectType.volume,
            level: _v19.MUSIC_DEFAULT_VOLUME,
            startTime: 0,
            endTime: _v8
          }]
        };
      }, [_v0])
    };
  };
  _v0.s(["useSoundElement", 0, _v21], 0);
  var _v22 = _v0.i(0),
    _v23 = _v0.i(0);
  let _v24 = () => ({
    createMediaSource: (0, _v1.useCallback)(async (_v0, _v1) => {
      let _v2 = (0, _v23.isLocalUrl)(_v0.url) ? await (0, _v13.generateVideoThumbnail)(_v0.url) : "",
        _v3 = _v0.type === _v10.MediaType.VIDEO;
      return {
        mhash: _v0.id,
        hash: _v1 || (0, _v12.createUuidV4)(),
        height: _v0.height,
        width: _v0.width,
        type: _v0.type === _v10.MediaType.VIDEO ? _v4.SourceType.CLIP : _v4.SourceType.IMAGE,
        duration: (0, _v22.isVideoUploadItem)(_v0) ? _v0.duration : _v8.DEFAULT_IMAGE_ELEMENT_DURATION,
        service: null,
        previewUrl: _v0.url,
        previewUrlLivePhoto: null,
        previewHeight: _v0.height,
        previewWidth: _v0.width,
        order: 0,
        text: null,
        name: _v0.name,
        size: 1,
        externalId: "",
        hasAudio: !!_v3 && _v0.hasAudio,
        masks: null,
        thumbnailsSprites: null,
        thumb: {
          thumbUrl: _v2,
          height: 0,
          width: 0
        },
        transcriptions: [],
        status: "ready",
        fps: 30
      };
    }, []),
    createSoundSource: (0, _v1.useCallback)((_v0, _v1) => {
      let {
        url: _v2,
        name: _v3,
        duration: _v4
      } = _v0;
      return {
        type: _v4.SourceType.AUDIO,
        width: 0,
        height: 0,
        previewUrl: _v2,
        duration: _v4,
        mhash: "",
        hash: _v1,
        previewUrlLivePhoto: null,
        service: "",
        previewHeight: 0,
        previewWidth: 0,
        order: 0,
        text: null,
        name: _v3,
        size: 0,
        externalId: "",
        hasAudio: !0,
        masks: null,
        thumbnailsSprites: null,
        thumb: null,
        transcriptions: null,
        status: "",
        fps: 0
      };
    }, [])
  });
  _v0.s(["useSource", 0, _v24], 0);
  var _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0);
  let _v34 = ({
    trackName: _v0,
    trackId: _v1
  }) => {
    _v33.default.send({
      eventName: "vimeo.music_track_selection",
      version: 1,
      contexts: {
        ..._v33.default.buildActionContext("click"),
        ..._v33.default.buildEditorContext({
          via: null,
          editorFeature: "music"
        }),
        ..._v33.default.buildProductAnalyticsContext({
          feature: "music",
          location: "drawer"
        }),
        ..._v33.default.buildWebContext(),
        ..._v33.default.buildTeamContext()
      },
      additionalFields: {
        action_state: null,
        selection_format: null,
        selection_id: _v1,
        selection_name: _v0,
        action_cta: null,
        number_of_elements: 1,
        third_party_integration: _v33.default.getThirdPartyIntegration()
      }
    });
  };
  _v0.s(["sendTrackSelectMusicTab", 0, ({
    musicTab: _v0,
    prevMusicTab: _v1
  }) => {
    _v33.default.send({
      eventName: "vimeo.music_tab_selection",
      version: 1,
      contexts: {
        ..._v33.default.buildActionContext("click"),
        ..._v33.default.buildEditorContext({
          via: null,
          editorFeature: "media"
        }),
        ..._v33.default.buildProductAnalyticsContext({
          feature: "media",
          location: "drawer",
          copy: _v0
        }),
        ..._v33.default.buildWebContext(),
        ..._v33.default.buildTeamContext()
      },
      additionalFields: {
        action_cta: null,
        action_state: _v1 ?? null,
        selection_id: null,
        selection_name: null,
        selection_format: null,
        number_of_elements: 3,
        third_party_integration: _v33.default.getThirdPartyIntegration()
      }
    });
  }, "sendTrackSelectMusicTrackElement", 0, _v34], 0);
  var _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0);
  async function _v39(_v0, _v1) {
    let _v2 = {
        isCodecSupported: !0,
        isResolutionSupported: !0,
        isStandardResolution: !0,
        isFPSSupported: !0,
        isBitrateSupported: !0,
        isResolutionChanges: !0,
        isKeyframeIntervalSupported: !0
      },
      _v3 = _v0.tracks[0];
    if (_v3 && ("video" === _v3.type || "metadata" === _v3.type)) {
      let {
          codec: _v0,
          bitrate: _v1,
          track_width: _v2,
          track_height: _v3,
          timescale: _v4,
          duration: _v5,
          nb_samples: _v6
        } = _v3,
        _v7 = _v1 ? _v6 / _v1 : void 0;
      return console.debug("cdc", _v0), console.debug("bit", _v1), console.debug("dim", _v2 + "x" + _v3), console.debug("tsc", _v4), console.debug("dur", _v5 + "/" + _v4 + "=" + _v5 / _v4), console.debug("nbs", _v6), console.debug("fps", _v7), "mp4v" === _v0 && (_v2.isCodecSupported = !1), _v1 > 0 && (_v2.isBitrateSupported = !1), _v2 % 2 != 0 && (_v2.isStandardResolution = !1), _v2 >= _v3 ? (_v2 >= 0 || _v3 >= 0) && (_v2.isResolutionSupported = !1) : (_v3 >= 0 || _v2 >= 0) && (_v2.isResolutionSupported = !1), _v7 && _v7 >= 90 && (_v2.isFPSSupported = !1), _v2;
    }
    throw Error(_v9.MP4_SOURCE_TRACK_MISSING_OR_INVALID_TRACK_TYPE);
  }
  async function _v40(_v0, _v1) {
    let {
        isFragmented: _v2
      } = _v0,
      _v3 = _v0.videoTracks[0];
    if (!_v3) return {
      isKeyframeIntervalSupported: !0
    };
    _v1.selectTrack(_v3.id);
    let _v4 = [],
      _v5 = 0,
      _v6 = 0,
      _v7 = 0,
      {
        samples: _v8,
        keyframes: _v9,
        averageKeyframeInterval: _v10
      } = await _v1.start((_v0, _v1, _v2) => {
        let _v3 = _v1.file.extractedTracks[0].trak.samples.length;
        return (_v6 += _v2.length, _v2.forEach(_v0 => {
          if (1 == _v0.track_id) {
            let _v0 = _v0.cts / _v0.timescale;
            _v0.is_sync && (_v7 += _v0 - _v5, _v4.push(_v0), _v5 = _v0);
          }
        }), _v2 && _v6 === _v3 && _v1.file.stream.getPosition() === _v1.file.size || !_v2 && _v6 === _v3) ? {
          samples: _v6,
          keyframes: _v4.length,
          averageKeyframeInterval: _v7 / _v4.length
        } : null;
      });
    return (console.debug("samples", _v8), console.debug("keyframes", _v9), console.debug("avg KF dist", _v10), _v10 > 15) ? {
      isKeyframeIntervalSupported: !1
    } : {
      isKeyframeIntervalSupported: !0
    };
  }
  async function _v41(_v0, _v1) {
    let _v2 = performance.now();
    (0, _v37.sendTrackLocalFilesAnalysis)({
      stepName: "start",
      canRenderLocally: !0
    });
    try {
      let _v0 = (0, _v38.getExtension)(_v0.name)?.toLowerCase();
      if ("mp4" !== _v0) return (0, _v37.sendTrackLocalFilesAnalysis)({
        stepName: "finish",
        canRenderLocally: !1,
        duration: 0
      }), !1;
      let _v1 = new _v36.MP4Source(_v0),
        _v2 = await _v1.getInfo(),
        {
          isFragmented: _v3,
          fragment_duration: _v4,
          timescale: _v5,
          duration: _v6
        } = _v2,
        _v7 = await _v39(_v2, _v3 && _v4 ? _v4 / _v5 : _v6 / _v5),
        _v8 = Object.values(_v7).includes(!1);
      !_v8 && _v1 && (_v7.isKeyframeIntervalSupported = (await _v40(_v2, _v1)).isKeyframeIntervalSupported);
      let _v9 = performance.now();
      return _v8 = Object.values(_v7).includes(!1), (0, _v37.sendTrackLocalFilesAnalysis)({
        stepName: "finish",
        canRenderLocally: !_v8,
        duration: _v9 - _v2
      }), !_v8;
    } catch (_v0) {
      let _v1 = performance.now();
      return (0, _v37.sendTrackLocalFilesAnalysis)({
        stepName: "finish",
        canRenderLocally: !1,
        duration: _v1 - _v2
      }), !1;
    }
  }
  async function _v42(_v0) {
    return new File([await _v0.arrayBuffer()], _v0.name);
  }
  _v0.s(["useLocalFile", 0, () => {
    let _v0 = (0, _v31.useAppDispatch)(),
      _v1 = (0, _v31.useAppSelector)(_v29.videoSessionIdSelector),
      _v2 = (0, _v31.useAppSelector)(_v29.sourceMapSelector),
      _v3 = (0, _v31.useAppSelector)(_v0 => _v0.storyboard.id),
      _v4 = (0, _v1.useContext)(_v2.ArtifactsUploaderContext),
      {
        addElement: _v5
      } = (0, _v6.useAddElement)(),
      {
        createMediaItem: _v6
      } = {
        createMediaItem: (0, _v1.useCallback)(async (_v0, _v1 = !1) => {
          let _v2 = (0, _v16.getItemType)(_v11.UploadMediaOrigin.BROWSER, _v0),
            _v3 = URL.createObjectURL(_v0);
          if (!_v2 || _v2 !== _v11.UploadQueueFileType.IMAGE && _v2 !== _v11.UploadQueueFileType.VIDEO) throw Error(_v9.UPLOAD_FILE_TYPE_ERROR);
          let {
            width: _v4,
            height: _v5,
            ..._v6
          } = await (0, _v13.fetchMediaMetadata)({
            url: _v3,
            type: _v2,
            eventName: "loadedmetadata",
            isCrossOrigin: !0,
            isSvg: _v1
          }).catch(_v0 => {
            if (_v0.target?.error.code === MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED) return {
              width: 0,
              height: 0,
              duration: 1,
              hasAudio: !1
            };
            let _v1 = _v0.target?.error?.code;
            throw Error(`${_v0.target?.error?.message ?? ""}${_v1 ? ` code: ${_v1}` : ""}`);
          });
          if (_v2 === _v11.UploadQueueFileType.VIDEO && _v5 < _v8.MIN_ALLOWED_VIDEO_RESOLUTION) throw Error(_v9.THE_VIDEO_HAS_UNSUPPORTED_RESOLUTION);
          let _v7 = {
            id: (0, _v12.createUuidV4)(),
            url: _v3,
            width: _v4,
            height: _v5,
            name: _v0.name,
            orientation: (0, _v14.getOrientation)(_v4, _v5)
          };
          if (_v2 === _v11.UploadQueueFileType.VIDEO) {
            let {
              duration: _v0,
              hasAudio: _v1
            } = _v6;
            return {
              ..._v7,
              type: _v10.MediaType.VIDEO,
              previewUrl: _v3,
              duration: (0, _v15.toFloorFrame)(_v0),
              hasAudio: _v1
            };
          }
          if (_v2 === _v11.UploadQueueFileType.IMAGE) return {
            type: _v10.MediaType.IMAGE,
            ..._v7,
            thumbnailUrl: _v3
          };
          throw Error(_v9.UPLOAD_FILE_TYPE_ERROR);
        }, [])
      },
      {
        createSoundItem: _v7
      } = {
        createSoundItem: (0, _v1.useCallback)(async _v0 => {
          let _v1 = URL.createObjectURL(_v0),
            _v2 = await (0, _v13.fetchAudioDuration)(_v1);
          return {
            id: (0, _v12.createUuidV4)(),
            url: _v1,
            previewUrl: _v1,
            name: _v0.name,
            duration: _v2
          };
        }, [])
      },
      {
        createMediaElementV2: _v8,
        addOrReplaceMediaElement: _v9
      } = (0, _v7.useMediaElement)(),
      {
        createSoundElement: _v10
      } = _v21(),
      {
        toHotspotElement: _v11
      } = (0, _v5.useHotspot)(),
      {
        createMediaSource: _v12,
        createSoundSource: _v13
      } = _v24(),
      [_v14] = (0, _v26.useLazyCreateMediaSourceQuery)(),
      [_v15] = (0, _v26.useLazyCreateSoundSourceQuery)(),
      _v16 = (0, _v1.useCallback)(async (_v0, _v1, _v2) => {
        let _v3 = [{
            id: _v2,
            file: _v0,
            apiConfiguration: {
              approach: _v3.UPLOAD_APPROACH.TUS,
              upload: {}
            }
          }],
          _v4 = (await _v4.upload({
            uploadedFiles: _v3,
            typeName: _v1
          }))[0];
        if (!_v4 || !_v4.storageObjectId || _v4.processStatus === _v3.UPLOAD_PROCESS_STATUS.FAILED) throw Error(_v9.SOMETHING_WENT_WRONG);
        return _v4.storageObjectId;
      }, [_v4]),
      _v17 = (0, _v1.useCallback)(async ({
        mediaItem: _v0,
        sourceHash: _v1,
        time: _v2,
        addItemAsHotspot: _v3
      }) => {
        let _v4 = await _v8({
          mediaItem: _v0,
          sourceHash: _v1,
          time: _v2
        });
        _v3 && (0, _v35.isImageElement)(_v4) && (_v4 = _v11({
          imageElement: _v4
        }));
        let _v5 = await _v12(_v0, _v1);
        _v1 && _v2[_v1] || _v0((0, _v29.addSourceAction)(_v5)), _v9(_v4, !0);
      }, [_v12, _v2, _v8, _v9, _v0, _v11]),
      _v18 = (0, _v1.useCallback)(async ({
        source: _v0,
        elementId: _v1
      }) => {
        if (_v0.type !== _v4.SourceType.CLIP) throw Error(_v9.SOURCE_NOT_FOUND);
        let _v2 = {
            id: _v0.mhash || _v0.hash,
            url: _v0.previewUrl,
            previewUrl: _v0.previewUrl,
            type: _v10.MediaType.VIDEO,
            width: _v0.width,
            height: _v0.height,
            name: _v0.name,
            orientation: (0, _v14.getOrientation)(_v0.width, _v0.height),
            duration: _v0.duration,
            hasAudio: _v0.hasAudio
          },
          _v3 = await _v8({
            mediaItem: _v2,
            sourceHash: _v0.hash,
            time: 0
          });
        return (0, _v29.storyboardIdSelector)(_v30.default.getState()) === _v3 && ((0, _v29.sourceMapSelector)(_v30.default.getState())[_v0.hash] || _v0((0, _v29.addSourceAction)(_v0)), _v5({
          ..._v3,
          id: _v1
        }), !0);
      }, [_v5, _v8, _v0, _v3]),
      _v19 = (0, _v1.useCallback)(_v0 => {
        (0, _v29.sourceMapSelector)(_v30.default.getState())[_v0.hash] && (_v0((0, _v29.updateSourceAction)({
          hash: _v0.hash,
          source: _v0
        })), _v0((0, _v27.updateSourceAction)({
          hash: _v0.hash,
          source: _v0
        })));
      }, [_v0]),
      _v20 = (0, _v1.useCallback)(({
        soundItem: _v0,
        sourceHash: _v1,
        time: _v2
      }) => {
        let _v3 = _v10({
            soundItem: _v0,
            sourceHash: _v1,
            time: _v2
          }),
          _v4 = _v13(_v0, _v1);
        _v1 && _v2[_v1] || _v0((0, _v29.addSourceAction)(_v4)), _v5(_v3), _v34({
          trackName: _v3.name,
          trackId: _v3.id
        });
      }, [_v10, _v13, _v2, _v5, _v0]),
      _v21 = (0, _v1.useCallback)(_v0 => {
        let {
          id: _v1,
          sourceHash: _v2
        } = _v0;
        _v0((0, _v28.removeLoadingItemAction)({
          id: _v1
        })), _v0((0, _v29.removeElementsBySourceHashAction)({
          sourceHash: _v2
        }));
      }, [_v0]),
      _v22 = (0, _v1.useCallback)(async (_v0, _v1) => {
        try {
          let _v0 = await _v16(_v0, _v3.UPLOAD_TYPE_NAME.CREATE_SOUNDTRACK_ASSET, _v1),
            _v1 = await _v15({
              vsid: _v1,
              fileName: _v0.name,
              fileSize: _v0.size,
              storageObjectId: _v0,
              storyboardId: _v3
            }).unwrap();
          if (!_v1 || !_v1.hash) throw Error(_v9.SOURCE_NOT_FOUND);
          let {
            hash: _v2
          } = _v1;
          try {
            _v0((0, _v28.updateLoadingItemSourceAction)({
              hash: _v1,
              source: {
                hash: _v2
              }
            })), _v0((0, _v29.updateSourceAction)({
              hash: _v1,
              source: {
                hash: _v2
              }
            })), _v0((0, _v27.updateSourceAction)({
              hash: _v1,
              source: {
                hash: _v2
              }
            }));
          } catch (_v0) {
            if (_v0.message !== _v9.SOURCE_NOT_FOUND) throw _v0;
          }
          _v0((0, _v28.updateLoadingItemAction)({
            id: _v1,
            item: {
              status: _v32.STATUS.DONE
            }
          }));
        } catch (_v0) {
          throw _v0((0, _v28.updateLoadingItemAction)({
            id: _v1,
            item: {
              status: _v32.STATUS.ERROR
            }
          })), _v0;
        }
      }, [_v0, _v15, _v16, _v1]),
      _v23 = (0, _v1.useCallback)(async _v0 => {
        let _v1 = (0, _v12.createUuidV4)(),
          _v2 = await _v7(_v0);
        _v0((0, _v28.addLoadingSoundItemAction)({
          id: _v1,
          item: _v2
        })), await _v22(_v0, _v1);
      }, [_v7, _v0, _v22]),
      _v24 = (0, _v1.useCallback)(async ({
        file: _v0,
        itemId: _v1,
        mediaItem: _v2,
        itemType: _v3,
        isHotspot: _v4
      }) => {
        let _v5 = _v0.name.toLowerCase().endsWith(".gif"),
          _v6 = _v0.name.endsWith(".svg"),
          _v7 = _v5 || _v6 ? await _v42(_v0) : _v0;
        try {
          let _v0 = _v3 === _v11.UploadQueueFileType.VIDEO || _v5 || _v6,
            _v1 = await _v16(_v7, _v0 ? _v3.UPLOAD_TYPE_NAME.CREATE_VIDEO_ASSET : _v3.UPLOAD_TYPE_NAME.CREATE_IMAGE_ASSET, _v1),
            _v2 = await _v14({
              storyboardId: _v3,
              vsid: _v1,
              fileName: _v7.name,
              fileSize: _v7.size,
              storageObjectId: (_v0 ? "starlord-" : "") + _v1,
              isHotspot: _v4,
              caller: "localUpload",
              ...(_v6 && {
                width: _v2.width,
                height: _v2.height
              })
            }).unwrap();
          if (!_v2 || !_v2.source) throw Error(_v9.SOURCE_NOT_FOUND);
          let {
              source: _v3
            } = _v2,
            {
              hash: _v4
            } = _v3;
          _v0((0, _v28.addRemoteUrl)({
            localUrl: _v2.url,
            remoteUrl: _v3.previewUrl
          }));
          try {
            let _v0 = structuredClone(_v3);
            _v0.previewUrl, _v0((0, _v28.updateLoadingItemSourceAction)({
              hash: _v1,
              source: _v3
            })), _v0((0, _v29.updateSourceAction)({
              hash: _v1,
              source: _v0
            })), _v0((0, _v27.updateSourceAction)({
              hash: _v1,
              source: _v0
            }));
          } catch (_v0) {
            if (_v0.message !== _v9.SOURCE_NOT_FOUND) throw _v0;
          }
          _v3.type === _v4.SourceType.CLIP && _v0(_v26.sourceAssetsApi.endpoints.getThumbnailsForSource.initiate({
            sourceHash: _v4,
            userId: _v25.default.teamOwnerId
          })), _v0((0, _v28.updateLoadingItemAction)({
            id: _v1,
            item: {
              status: _v32.STATUS.DONE
            }
          }));
        } catch (_v0) {
          throw _v0((0, _v28.updateLoadingItemAction)({
            id: _v1,
            item: {
              status: _v32.STATUS.ERROR
            }
          })), _v0;
        }
      }, [_v0, _v14, _v3, _v16, _v1]),
      _v25 = (0, _v1.useCallback)(async _v0 => {
        let _v1 = await fetch(_v0.data.url),
          _v2 = await _v1.blob(),
          _v3 = new File([_v2], _v0.data.name, {
            type: _v2.type
          });
        _v0((0, _v28.updateLoadingItemAction)({
          id: _v0.id,
          item: {
            status: _v32.STATUS.PROGRESS
          }
        }));
        let _v4 = (0, _v16.getItemType)(_v11.UploadMediaOrigin.BROWSER, _v3);
        if (!_v4) throw Error(_v9.UPLOAD_FILE_TYPE_ERROR);
        await _v24({
          file: _v3,
          itemId: _v0.id,
          mediaItem: _v0.data,
          itemType: _v4,
          isHotspot: !1
        });
      }, [_v0, _v24]),
      _v26 = (0, _v1.useCallback)(async _v0 => {
        let _v1 = await fetch(_v0.data.url),
          _v2 = await _v1.blob(),
          _v3 = new File([_v2], _v0.data.name, {
            type: _v2.type
          });
        _v0((0, _v28.updateLoadingItemAction)({
          id: _v0.id,
          item: {
            status: _v32.STATUS.PROGRESS
          }
        })), await _v22(_v3, _v0.id);
      }, [_v0, _v22]);
    return {
      initialUploadLocalMediaFile: (0, _v1.useCallback)(async (_v0, _v1 = {}) => {
        let _v2,
          _v3 = (0, _v16.getItemType)(_v11.UploadMediaOrigin.BROWSER, _v0);
        if (!_v3) throw Error(_v9.UPLOAD_FILE_TYPE_ERROR);
        let _v4 = (0, _v12.createUuidV4)(),
          _v5 = await _v6(_v0);
        _v0((0, _v28.addLoadingMediaItemAction)({
          id: _v4,
          item: _v5,
          canBeUseLocally: !1
        }));
        let _v6 = _v3 !== _v11.UploadQueueFileType.IMAGE && (await _v41(_v0, !0));
        _v6 && _v0((0, _v28.updateLoadingItemAction)({
          id: _v4,
          item: {
            canBeUseLocally: _v6
          }
        })), _v6 && _v1.addToStoryboard && (_v2 = _v17({
          mediaItem: _v5,
          sourceHash: _v4,
          addItemAsHotspot: _v1.isHotspot
        })), await _v24({
          file: _v0,
          itemId: _v4,
          mediaItem: _v5,
          itemType: _v3,
          isHotspot: _v1.isHotspot ?? !1
        }), !_v2 && _v1.addToStoryboard && _v17({
          mediaItem: _v5,
          sourceHash: _v4,
          addItemAsHotspot: _v1.isHotspot
        });
      }, [_v6, _v0, _v17, _v24]),
      initialUploadLocalSoundFile: _v23,
      addMediaItemToStoryboard: _v17,
      addPreparedMediaSourceToStoryboard: _v18,
      replacePreparedMediaSource: _v19,
      addSoundItemToStoryboard: _v20,
      retryUploadLocalMediaFile: _v25,
      retryUploadLocalSoundFile: _v26,
      deleteFailedLocalMediaFile: _v21
    };
  }], 0);
}