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
    _v10 = _v0.i(0);
  let _v11 = "vimeoversion",
    _v12 = _v0 => /^\d+$/.test(_v0),
    _v13 = (_v0, _v1, _v2 = {}) => {
      _v3.default.sendAction(_v2.EditorLoad, {
        step: _v1,
        sourceHash: _v0,
        ...(0, _v2.editorLoadFlowMeta)(),
        ..._v2
      });
    },
    _v14 = _v0 => _v0.frame_count ?? _v0.frames ?? 0,
    _v15 = (_v0, _v1) => {
      let _v2 = {};
      for (let _v0 of _v0) {
        let _v0 = _v0.vimeoVideoId;
        void 0 !== _v0 && _v12(_v0) ? _v2[_v0.hash] = _v0 : null !== _v1 && _v0.hash.startsWith(_v11) && (_v2[_v0.hash] = _v1);
      }
      return _v2;
    },
    _v16 = (0, _v1.createApi)({
      reducerPath: "sourceAssetsApi",
      baseQuery: _v10.baseQuery,
      tagTypes: ["Transcripts"],
      keepUnusedDataFor: 0,
      endpoints: _v0 => ({
        getThumbnailsForSource: _v0.query({
          extraOptions: {
            apiServer: _v10.ApiServer.VIMEO
          },
          queryFn: async ({
            sourceHash: _v0,
            userId: _v1
          }, _v2, _v3, _v4) => {
            let _v5 = `users/${_v1}/assets/${_v0}/thumbnail_sprite`,
              _v6 = performance.now();
            ((_v0, _v1 = {}) => _v13(_v0, _v0, _v1))("start fetch thumbnails sprite");
            let _v7 = await _v4(_v5);
            if (_v7.error) return ((_v0, _v1 = {}) => _v13(_v0, _v0, _v1))("fetch thumbnails sprite failed", {
              errorStatus: _v7.error.status ?? "unknown",
              durationMs: Math.round(performance.now() - _v6)
            }), (0, _v8.camelize)(_v7);
            let _v8 = _v7.data?.thumbnails_sprites[0],
              {
                id: _v9,
                status: _v10
              } = _v8 || {};
            if (((_v0, _v1 = {}) => _v13(_v0, _v0, _v1))("end fetch thumbnails sprite", {
              status: _v10,
              thumbnailJobId: _v9,
              thumbnailsCount: _v8?.thumbnails_count,
              durationMs: Math.round(performance.now() - _v6)
            }), _v9 && _v10 === _v6.ThumbnailsResponseStatus.PROCESSING) {
              let _v0,
                _v1 = performance.now();
              ((_v0, _v1 = {}) => _v13(_v0, _v0, _v1))("start poll thumbnails sprite", {
                thumbnailJobId: _v9
              });
              try {
                _v0 = await (0, _v7.rtkPoll)({
                  url: `${_v5}/${_v9}`,
                  fetchWithBaseQuery: _v4,
                  shouldKeepPolling: _v0 => _v0.data?.thumbnails_sprites[0].status === _v6.ThumbnailsResponseStatus.PROCESSING
                });
              } catch (_v0) {
                throw ((_v0, _v1 = {}) => _v13(_v0, _v0, _v1))("fetch thumbnails sprite failed", {
                  thumbnailJobId: _v9,
                  errorStatus: _v0 instanceof Error ? _v0.message : "unknown",
                  durationMs: Math.round(performance.now() - _v1)
                }), _v0;
              }
              return _v0.error ? ((_v0, _v1 = {}) => _v13(_v0, _v0, _v1))("fetch thumbnails sprite failed", {
                thumbnailJobId: _v9,
                errorStatus: _v0.error.status ?? "unknown",
                durationMs: Math.round(performance.now() - _v1)
              }) : ((_v0, _v1 = {}) => _v13(_v0, _v0, _v1))("end poll thumbnails sprite", {
                thumbnailJobId: _v9,
                status: _v0.data?.thumbnails_sprites[0]?.status,
                durationMs: Math.round(performance.now() - _v1)
              }), (0, _v8.camelize)(_v0);
            }
            return (0, _v8.camelize)(_v7);
          }
        }),
        getPrewarmSpriteForClip: _v0.query({
          extraOptions: {
            apiServer: _v10.ApiServer.VIMEO
          },
          forceRefetch: () => !0,
          queryFn: async ({
            clipId: _v0
          }, _v1, _v2, _v3) => {
            let _v4 = `${_v11}_${_v0}`,
              _v5 = performance.now();
            _v13(_v4, "start fetch prewarm sprite");
            let _v6 = await _v3(`videos/${_v0}/thumbnail_sprite`);
            if (_v6.error) return (_v13(_v4, "fetch prewarm sprite failed", {
              errorStatus: _v6.error.status ?? "unknown",
              durationMs: Math.round(performance.now() - _v5)
            }), 404 === _v6.error.status) ? {
              data: null
            } : {
              error: _v6.error
            };
            let _v7 = (_v0 => {
              if (!_v0) return null;
              let _v1 = (Array.isArray(_v0) ? _v0 : Object.values(_v0)).filter(_v0 => _v0?.urls?.[0]).sort((_v0, _v1) => _v14(_v1) - _v14(_v0))[0],
                _v2 = _v1?.urls?.[0];
              return _v1 && _v2 ? {
                status: _v6.ThumbnailsResponseStatus.OK,
                thumbnailsSprites: [{
                  id: _v1.uuid,
                  url: _v2,
                  columns: _v1.columns,
                  thumbnailsCount: _v14(_v1),
                  thumbnailWidth: _v1.frame_width,
                  thumbnailHeight: _v1.frame_height,
                  status: _v6.ThumbnailsResponseStatus.OK,
                  rows: 0,
                  framesPerSecond: 0,
                  framesPerThumbnail: 0
                }]
              } : null;
            })(_v6.data);
            return _v13(_v4, "end fetch prewarm sprite", {
              thumbnailsCount: _v7?.thumbnailsSprites?.[0]?.thumbnailsCount,
              durationMs: Math.round(performance.now() - _v5)
            }), {
              data: _v7
            };
          }
        }),
        createMediaSource: _v0.query({
          extraOptions: {
            apiServer: _v10.ApiServer.VIMEO
          },
          queryFn: async ({
            vsid: _v0,
            fileName: _v1,
            fileSize: _v2,
            isHotspot: _v3,
            storyboardId: _v4,
            ..._v5
          }, _v6, _v7, _v8) => {
            let _v9 = {
              vsid: _v0,
              file_name: _v1,
              file_size: _v2,
              is_hotspot: _v3,
              storage_object_type: _v5.storageObjectType,
              save_in_library: _v5.saveInLibrary
            };
            "storageObjectId" in _v5 && (_v9.storage_object_id = _v5.storageObjectId), "sourceHash" in _v5 && (_v9.source_hash = _v5.sourceHash), "width" in _v5 && (_v9.width = _v5.width), "height" in _v5 && (_v9.height = _v5.height);
            let _v10 = await _v8({
              url: `users/${_v4.default.teamOwnerId}/storyboards/${_v4}/prepare_source`,
              method: "post",
              body: _v9
            });
            if (_v10.data && !_v10.data.source) {
              let _v0 = await (0, _v7.rtkPoll)({
                url: `users/${_v4.default.teamOwnerId}/storyboards/${_v4}/asset_upload/${_v10.data.prepare_source_job}/progress`,
                fetchWithBaseQuery: _v8,
                shouldKeepPolling: _v0 => _v0.data?.job_status === _v5.STATUS.PRCS
              });
              return (0, _v8.camelize)(_v0);
            }
            return (0, _v8.camelize)(_v10);
          }
        }),
        createSoundSource: _v0.query({
          extraOptions: {
            apiServer: _v10.ApiServer.VIMEO
          },
          query: ({
            fileName: _v0,
            fileSize: _v1,
            vsid: _v2,
            storageObjectId: _v3,
            storyboardId: _v4
          }) => {
            let _v5 = {
              vsid: _v2.toString(),
              file_name: _v0,
              file_size: _v1,
              only_library: !0,
              save_meta: !0,
              storage_object_id: _v3
            };
            return {
              url: `users/${_v4.default.teamOwnerId}/storyboards/${_v4}/create_audio_source`,
              method: "post",
              body: _v5
            };
          },
          transformResponse: _v0 => (0, _v8.camelize)(_v0)
        })
      })
    }),
    {
      useLazyGetThumbnailsForSourceQuery: _v17,
      useLazyGetPrewarmSpriteForClipQuery: _v18,
      useLazyCreateMediaSourceQuery: _v19,
      useLazyCreateSoundSourceQuery: _v20
    } = _v16;
  _v0.s(["isClipId", 0, _v12, "prewarmSpriteUrlBySourceHashSelector", 0, _v0 => {
    let _v1 = {},
      {
        sources: _v2
      } = _v0.storyboard;
    for (let [_v0, _v1] of Object.entries(_v15(_v2, (0, _v9.getVimeoVideoIdString)()))) {
      let _v0 = _v16.endpoints.getPrewarmSpriteForClip.select({
          clipId: _v1
        })(_v0),
        _v1 = _v0?.isSuccess ? _v0.data?.thumbnailsSprites?.[0]?.url : void 0;
      _v1 && (_v1[_v0] = _v1);
    }
    return _v1;
  }, "resolveClipIdBySourceHash", 0, _v15, "sourceAssetsApi", 0, _v16, "thumbnailsSpriteSelector", 0, _v0 => {
    let _v1 = {},
      {
        sources: _v2
      } = _v0.storyboard,
      _v3 = _v15(_v2, (0, _v9.getVimeoVideoIdString)());
    for (let _v0 of _v2) {
      let _v0 = _v0.thumbnailsSprites,
        _v1 = Array.isArray(_v0) ? _v0[0] : _v0 ?? void 0;
      if (_v1?.url) {
        _v1[_v0.hash] = _v1;
        continue;
      }
      let _v2 = _v16.endpoints.getThumbnailsForSource.select({
          sourceHash: _v0.hash,
          userId: _v4.default.teamOwnerId
        })(_v0),
        _v3 = _v2?.isSuccess ? _v2.data?.thumbnailsSprites?.[0] : void 0;
      if (_v3?.url) {
        _v1[_v0.hash] = _v3;
        continue;
      }
      let _v4 = _v3[_v0.hash];
      if (void 0 !== _v4) {
        let _v0 = _v16.endpoints.getPrewarmSpriteForClip.select({
            clipId: _v4
          })(_v0),
          _v1 = _v0?.isSuccess ? _v0.data?.thumbnailsSprites?.[0] : void 0;
        _v1 && (_v1[_v0.hash] = _v1);
      }
    }
    return _v1;
  }, "useLazyCreateMediaSourceQuery", 0, _v19, "useLazyCreateSoundSourceQuery", 0, _v20, "useLazyGetPrewarmSpriteForClipQuery", 0, _v18, "useLazyGetThumbnailsForSourceQuery", 0, _v17]);
}