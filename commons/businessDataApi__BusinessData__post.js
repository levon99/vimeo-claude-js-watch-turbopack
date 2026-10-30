{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = (0, _v1.createApi)({
      reducerPath: "businessDataApi",
      baseQuery: _v4.baseQuery,
      tagTypes: ["BusinessData"],
      endpoints: _v0 => ({
        fetchBusinessData: _v0.query({
          extraOptions: {
            apiServer: _v4.ApiServer.VIMEO
          },
          query: () => ({
            url: `users/${_v2.default.teamOwnerId}/create/business_info`,
            params: {
              vsid: _v2.default.vimeoSessionId
            },
            method: "get",
            headers: {
              Authorization: `jwt ${_v2.default.jwt}`
            }
          }),
          transformResponse: _v0 => (0, _v3.camelize)(_v0),
          providesTags: ["BusinessData"]
        }),
        updateColorsBusinessData: _v0.mutation({
          extraOptions: {
            apiServer: _v4.ApiServer.VIMEO
          },
          query: ({
            primary: _v0,
            secondary: _v1,
            default: _v2
          }) => {
            let _v3 = {};
            return _v0 && (_v3.primary_color = _v0), _v1 && (_v3.secondary_color = _v1), _v2 && (_v3.default_color = _v2), {
              url: `users/${_v2.default.teamOwnerId}/create/business_info`,
              method: "post",
              body: _v3,
              headers: {
                Authorization: `jwt ${_v2.default.jwt}`,
                "Content-Type": "application/json"
              }
            };
          },
          invalidatesTags: ["BusinessData"]
        }),
        updateLogoBusinessData: _v0.mutation({
          extraOptions: {
            apiServer: _v4.ApiServer.VIMEO
          },
          queryFn: async ({
            logo: _v0
          }, _v1, _v2, _v3) => {
            let _v4 = {};
            if (_v0) try {
              _v4.logo_b64 = await new Promise((_v0, _v1) => {
                let _v2 = new FileReader();
                _v2.readAsDataURL(_v0), _v2.onload = () => _v0(_v2.result), _v2.onerror = _v0 => _v1(_v0);
              });
            } catch (_v0) {
              return {
                error: {
                  status: "CUSTOM_ERROR",
                  error: "There was an issue reading the logo file."
                }
              };
            }
            let _v5 = await _v3({
              url: `users/${_v2.default.teamOwnerId}/create/business_info`,
              method: "post",
              body: _v4,
              headers: {
                Authorization: `jwt ${_v2.default.jwt}`,
                "Content-Type": "application/json"
              }
            });
            return _v5.error ? {
              error: _v5.error
            } : {
              data: _v5.data
            };
          },
          invalidatesTags: ["BusinessData"]
        })
      })
    }),
    {
      useFetchBusinessDataQuery: _v6,
      useUpdateColorsBusinessDataMutation: _v7,
      useUpdateLogoBusinessDataMutation: _v8
    } = _v5;
  _v0.s(["businessDataApi", 0, _v5, "useFetchBusinessDataQuery", 0, _v6, "useUpdateColorsBusinessDataMutation", 0, _v7], 0);
  var _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0);
  let _v12 = {
    EDITOR: "editor",
    INTERACTIVE: "interactive"
  };
  _v0.s(["EditingToolType", 0, _v12], 0);
  var _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0);
  let _v16 = new class {
    _originalStoryboard = null;
    setOriginalStoryboard(_v0) {
      this._originalStoryboard = _v0;
    }
    get originalStoryboard() {
      return this._originalStoryboard;
    }
  }();
  _v0.s(["default", 0, _v16], 0);
  let _v17 = _v0 => new Promise(function (_v0) {
    let _v1 = new Audio();
    _v1.onloadedmetadata = () => {
      _v0(_v1.duration);
    }, _v1.src = _v0;
  });
  var _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0);
  let _v21 = new WeakSet(),
    _v22 = "shared-render-storyboard",
    _v23 = "shared-auto-save-storyboard",
    _v24 = "shared-save-storyboard",
    _v25 = "shared-save-interactive",
    _v26 = "shared-publish-interactive",
    _v27 = "shared-save-overlay-as-template",
    _v28 = (0, _v1.createApi)({
      reducerPath: "storyboardApi",
      baseQuery: _v4.baseQuery,
      endpoints: _v0 => ({
        saveStoryboard: _v0.mutation({
          extraOptions: {
            apiServer: _v4.ApiServer.VIMEO
          },
          query: ({
            storyboard: _v0,
            vimeoVideoId: _v1,
            isInteractive: _v2,
            isSystem: _v3
          }) => {
            let _v4 = {
              storyboard: (0, _v3.lowerCaseUnderscore)({
                ..._v0,
                sources: _v0.sources.map(_v0 => "streamyard" !== _v0.service ? _v0 : {
                  ..._v0,
                  previewUrl: "",
                  ...(_v0.thumb && {
                    thumb: {
                      ..._v0.thumb,
                      thumbUrl: ""
                    }
                  })
                })
              }),
              editing_tool: _v2 ? _v12.INTERACTIVE : _v12.EDITOR,
              ...(!0 === _v3 && {
                save_as_system_user: !0
              })
            };
            return {
              url: _v1 ? `videos/${_v1}/storyboards/${_v0.id}` : `users/${_v2.default.teamOwnerId}/storyboards/${_v0.id}`,
              headers: {
                Authorization: `jwt ${_v2.default.jwt}`,
                "Content-Type": "application/json"
              },
              method: "put",
              body: _v4
            };
          },
          transformResponse: _v0 => (0, _v3.camelize)(_v0)
        }),
        renderStoryboard: _v0.mutation({
          extraOptions: {
            apiServer: _v4.ApiServer.VIMEO
          },
          query: ({
            storyboardId: _v0,
            userId: _v1,
            isKiteRender: _v2,
            folderUri: _v3,
            forceCancelWatermark: _v4,
            isNewClip: _v5,
            title: _v6,
            vimeoVideoId: _v7
          }) => {
            let _v8 = {
              new_clip: !!_v5,
              kite_render: !!_v2,
              folder_uri: _v3,
              title: _v6,
              ...(_v4 && {
                toggle_wm: !1
              }),
              ...(_v7 && {
                vimeo_video_id: _v7
              })
            };
            return {
              url: `users/${_v1}/storyboards/${_v0}/render`,
              headers: {
                Authorization: `jwt ${_v2.default.jwt}`,
                "Content-Type": "application/json"
              },
              method: "post",
              body: _v8
            };
          },
          transformResponse: _v0 => (0, _v3.camelize)(_v0)
        }),
        publishInteractiveStoryboard: _v0.mutation({
          extraOptions: {
            apiServer: _v4.ApiServer.VIMEO
          },
          query: ({
            vimeoVideoId: _v0,
            storyboardId: _v1
          }) => ({
            url: `videos/${_v0}/storyboards/${_v1}/publish_interactive`,
            headers: {
              Authorization: `jwt ${_v2.default.jwt}`
            },
            method: "post"
          }),
          transformResponse: _v0 => (0, _v3.camelize)(_v0)
        }),
        fetchStoryboard: _v0.query({
          extraOptions: {
            apiServer: _v4.ApiServer.VIMEO
          },
          serializeQueryArgs: ({
            queryArgs: _v0
          }) => (0, _v10.default)(_v0, "initResponse"),
          queryFn: async ({
            videoHash: _v0,
            videoVersionId: _v1,
            videoUploadAttemptId: _v2,
            isInteractive: _v3,
            useRevision: _v4 = !1,
            shouldAddVimeoVersionSource: _v5 = !0,
            vimeoVideoId: _v6,
            initResponse: _v7
          }, _v8, _v9, _v10) => {
            let _v11,
              _v12 = _v0?.startsWith("storyboard_"),
              _v13 = _v12 && !_v4 ? _v0?.match("[^_]*_[^_]*")?.[0] : _v0;
            !_v12 && _v4 && console.warn("Warning! videoHash is not storyboardId. Fetching latest revision.");
            let _v14 = _v40({
                videoHash: _v13,
                videoVersionId: _v1,
                shouldAddVimeoVersionSource: _v5,
                isInteractive: _v3,
                videoUploadAttemptId: _v2,
                vimeoVideoId: _v6
              }),
              _v15 = _v7 && !_v21.has(_v7) ? _v7 : void 0;
            _v15 && _v21.add(_v15);
            let _v16 = _v15 ? {
              data: _v15
            } : await _v10({
              url: _v14
            });
            if (_v16.error) {
              let _v0 = _v0 => {
                let _v1 = _v0.error,
                  _v2 = _v1?.data && _v1.data.error_code;
                return _v2 === _v14.STORYBOARD_NOT_READY || _v2 === _v14.STILL_TRANSCODING_IN_VIMEO;
              };
              if (!_v0(_v16)) return _v16;
              _v16 = await (0, _v18.rtkPoll)({
                url: _v14,
                fetchWithBaseQuery: _v10,
                shouldKeepPolling: _v0
              });
            }
            let _v17 = (0, _v3.camelize)(_v16?.data?.storyboard);
            if (!_v17) throw Error(_v15.STORYBOARD_NOT_FOUND);
            _v16?.data?.is_duplicate_from_team_template ? _v11 = "team_templates" : _v16?.data?.storyboard_info?.template_id && (_v11 = "templates");
            let _v18 = (0, _v19.isLayersStoryboard)(_v17) ? _v17 : await (0, _v20.scenesToLayers)(_v17);
            _v16.setOriginalStoryboard(_v18);
            let _v19 = _v3 ? (0, _v20.prepareStoryboardForInteractive)({
              storyboard: _v18,
              vimeoSourceHash: _v16?.data?.vimeo_version_source_hash,
              shouldAddBackgroundVideoLayer: _v5
            }) : _v18;
            if (_v19.sources) for (let _v0 of _v19.sources) _v0.type === _v11.SourceType.AUDIO && (_v0.duration = await _v17(_v0.previewUrl)), null === _v0.previewUrl && (_v0.previewUrl = "");
            let {
              editing_tool: _v20,
              last_user_saved_storyboard: _v21,
              streamyard_context: _v22,
              vimeo_video: _v23
            } = _v16?.data || {};
            return {
              data: {
                storyboard: _v19,
                createdBy: _v11,
                vimeoVideo: _v23,
                ...(_v22 && {
                  streamyardContext: (0, _v3.camelize)(_v22)
                }),
                ...(_v20 && {
                  editingTool: _v20
                }),
                ...(_v21 && {
                  lastUserSavedStoryboard: _v21
                })
              }
            };
          }
        }),
        fetchStoryboardSources: _v0.query({
          extraOptions: {
            apiServer: _v4.ApiServer.VIMEO
          },
          query: ({
            videoHash: _v0,
            isInteractive: _v1,
            vimeoVideoId: _v2
          }) => ({
            url: _v40({
              videoHash: _v0?.startsWith("storyboard_") ? _v0.match("[^_]*_[^_]*")?.[0] ?? _v0 : _v0,
              isInteractive: _v1,
              shouldAddVimeoVersionSource: !0,
              vimeoVideoId: _v2
            })
          }),
          transformResponse: _v0 => {
            let _v1 = (0, _v3.camelize)(_v0.storyboard);
            return _v1?.sources ?? [];
          }
        }),
        initStoryboard: _v0.query({
          extraOptions: {
            apiServer: _v4.ApiServer.VIMEO
          },
          query: ({
            vimeoVideoId: _v0,
            includeStoryboard: _v1
          }) => ({
            url: `users/${_v2.default.teamOwnerId}/storyboards`,
            headers: {
              Authorization: `jwt ${_v2.default.jwt}`
            },
            method: "post",
            params: {
              v: _v13.PROTOCOL_VERSION,
              ...(_v0 && {
                vvid: _v0
              }),
              ...(_v1 && {
                include_storyboard: 1
              })
            },
            body: {
              use_cached_vs: !0
            }
          }),
          transformResponse: ({
            storyboard_response: _v0,
            ..._v1
          }) => ({
            ...(0, _v3.camelize)(_v1),
            storyboardResponse: _v0
          })
        }),
        initStoryboardFromClip: _v0.query({
          extraOptions: {
            apiServer: _v4.ApiServer.VIMEO
          },
          query: ({
            vimeoVideoId: _v0
          }) => ({
            url: `users/${_v2.default.teamOwnerId}/videos/${_v0}/storyboards`,
            headers: {
              Authorization: `jwt ${_v2.default.jwt}`
            },
            method: "post",
            params: {
              v: _v13.PROTOCOL_VERSION
            },
            body: {
              use_cached_vs: !0
            }
          }),
          transformResponse: _v0 => (0, _v3.camelize)(_v0)
        }),
        duplicateStoryboardSources: _v0.mutation({
          extraOptions: {
            apiServer: _v4.ApiServer.VIMEO
          },
          query: ({
            storyboardId: _v0,
            targetStoryboardId: _v1,
            sourceHashes: _v2,
            isSystem: _v3,
            checkOriginUser: _v4
          }) => ({
            url: `users/${_v2.default.teamOwnerId}/storyboards/${_v0}/duplicate_sources`,
            headers: {
              Authorization: `jwt ${_v2.default.jwt}`
            },
            method: "post",
            body: {
              target_storyboard_id: _v1,
              sources_ids: _v2,
              ...(!0 === _v3 && {
                save_as_system_user: !0
              }),
              ...(!1 === _v4 && {
                check_origin_user: !1
              })
            }
          }),
          transformResponse: _v0 => ({
            originalToDuplicateHashMap: _v0.original_to_duplicate_hash_map,
            sources: (0, _v3.camelize)(_v0.sources)
          })
        })
      })
    }),
    {
      useLazyFetchStoryboardQuery: _v29,
      useLazyInitStoryboardQuery: _v30,
      useLazyInitStoryboardFromClipQuery: _v31,
      useSaveStoryboardMutation: _v32,
      useRenderStoryboardMutation: _v33,
      usePublishInteractiveStoryboardMutation: _v34,
      useDuplicateStoryboardSourcesMutation: _v35
    } = _v28,
    _v36 = (0, _v9.createSelector)(_v0 => _v0, _v0 => ({
      renderStoryboard: _v28.endpoints.renderStoryboard.select(_v22)(_v0),
      saveStoryboard: _v28.endpoints.saveStoryboard.select(_v24)(_v0),
      saveOverlayStoryboard: _v28.endpoints.saveStoryboard.select(_v27)(_v0),
      saveInteractive: _v28.endpoints.saveStoryboard.select(_v25)(_v0),
      publishInteractiveStoryboard: _v28.endpoints.publishInteractiveStoryboard.select(_v26)(_v0)
    })),
    _v37 = (0, _v9.createSelector)(_v36, ({
      renderStoryboard: _v0,
      publishInteractiveStoryboard: _v1
    }) => _v1.isSuccess || _v0.isSuccess),
    _v38 = (0, _v9.createSelector)(_v36, ({
      renderStoryboard: _v0,
      saveStoryboard: _v1
    }) => _v0.isLoading || _v1.isLoading),
    _v39 = (0, _v9.createSelector)(_v0 => _v0, _v0 => {
      let {
        renderStoryboard: _v1,
        saveInteractive: _v2,
        publishInteractiveStoryboard: _v3,
        saveStoryboard: _v4
      } = _v36(_v0);
      return !_v4.error && !_v1.error && !_v2.error && !_v3.error && (_v4.isLoading || _v4.isSuccess || _v1.isLoading || _v1.isSuccess || _v2.isLoading || _v3.isLoading || _v3.isSuccess);
    });
  function _v40({
    videoHash: _v0,
    videoVersionId: _v1,
    isInteractive: _v2,
    shouldAddVimeoVersionSource: _v3,
    videoUploadAttemptId: _v4,
    vimeoVideoId: _v5
  }) {
    let _v6 = new URLSearchParams({
      v: `${_v13.PROTOCOL_VERSION}`
    });
    return _v1 && _v6.set("version_id", _v1), _v4 && _v6.set("upload_attempt_id", _v4), _v2 && (_v6.set("interactive", "1"), _v3 && _v6.set("vimeoversion_source", "true")), _v5 ? `users/${_v2.default.teamOwnerId}/videos/${_v5}/storyboards/${_v0}?${_v6.toString()}` : `users/${_v2.default.teamOwnerId}/storyboards/${_v0}?${_v6.toString()}`;
  }
  _v0.s(["SHARED_AUTO_SAVE_STORYBOARD_KEY", 0, _v23, "SHARED_PUBLISH_INTERACTIVE_KEY", 0, _v26, "SHARED_RENDER_STORYBOARD_KEY", 0, _v22, "SHARED_SAVE_INTERACTIVE_KEY", 0, _v25, "SHARED_SAVE_OVERLAY_AS_TEMPLATE_KEY", 0, _v27, "SHARED_SAVE_STORYBOARD_KEY", 0, _v24, "isAutoSaveStoryboardLoadingSelector", 0, _v0 => _v28.endpoints.saveStoryboard.select(_v23)(_v0).isLoading, "isStoryboardSavedSelector", 0, _v37, "isStoryboardSavingOrSavedSelector", 0, _v39, "isStoryboardSavingSelector", 0, _v38, "storyboardApi", 0, _v28, "useDuplicateStoryboardSourcesMutation", 0, _v35, "useLazyFetchStoryboardQuery", 0, _v29, "useLazyInitStoryboardFromClipQuery", 0, _v31, "useLazyInitStoryboardQuery", 0, _v30, "usePublishInteractiveStoryboardMutation", 0, _v34, "useRenderStoryboardMutation", 0, _v33, "useSaveStoryboardMutation", 0, _v32], 0);
}