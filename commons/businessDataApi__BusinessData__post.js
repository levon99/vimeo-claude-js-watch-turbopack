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
    _v10 = _v0.i(0);
  let _v11 = {
    EDITOR: "editor",
    INTERACTIVE: "interactive"
  };
  _v0.s(["EditingToolType", 0, _v11], 0);
  var _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0);
  let _v15 = new class {
    _originalStoryboard = null;
    setOriginalStoryboard(_v0) {
      this._originalStoryboard = _v0;
    }
    get originalStoryboard() {
      return this._originalStoryboard;
    }
  }();
  _v0.s(["default", 0, _v15], 0);
  let _v16 = _v0 => new Promise(function (_v0) {
    let _v1 = new Audio();
    _v1.onloadedmetadata = () => {
      _v0(_v1.duration);
    }, _v1.src = _v0;
  });
  var _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0);
  let _v20 = "shared-render-storyboard",
    _v21 = "shared-auto-save-storyboard",
    _v22 = "shared-save-storyboard",
    _v23 = "shared-save-interactive",
    _v24 = "shared-publish-interactive",
    _v25 = "shared-save-overlay-as-template",
    _v26 = (0, _v1.createApi)({
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
              editing_tool: _v2 ? _v11.INTERACTIVE : _v11.EDITOR,
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
          queryFn: async ({
            videoHash: _v0,
            videoVersionId: _v1,
            videoUploadAttemptId: _v2,
            isInteractive: _v3,
            useRevision: _v4 = !1,
            shouldAddVimeoVersionSource: _v5 = !0,
            vimeoVideoId: _v6
          }, _v7, _v8, _v9) => {
            let _v10,
              _v11 = _v0?.startsWith("storyboard_"),
              _v12 = _v11 && !_v4 ? _v0?.match("[^_]*_[^_]*")?.[0] : _v0;
            !_v11 && _v4 && console.warn("Warning! videoHash is not storyboardId. Fetching latest revision.");
            let _v13 = function ({
                videoHash: _v0,
                videoVersionId: _v1,
                isInteractive: _v2,
                shouldAddVimeoVersionSource: _v3,
                videoUploadAttemptId: _v4,
                vimeoVideoId: _v5
              }) {
                let _v6 = new URLSearchParams({
                  v: `${_v12.PROTOCOL_VERSION}`
                });
                return _v1 && _v6.set("version_id", _v1), _v4 && _v6.set("upload_attempt_id", _v4), _v2 && (_v6.set("interactive", "1"), _v3 && _v6.set("vimeoversion_source", "true")), _v5 ? `users/${_v2.default.teamOwnerId}/videos/${_v5}/storyboards/${_v0}?${_v6.toString()}` : `users/${_v2.default.teamOwnerId}/storyboards/${_v0}?${_v6.toString()}`;
              }({
                videoHash: _v12,
                videoVersionId: _v1,
                shouldAddVimeoVersionSource: _v5,
                isInteractive: _v3,
                videoUploadAttemptId: _v2,
                vimeoVideoId: _v6
              }),
              _v14 = await _v9({
                url: _v13
              });
            if (_v14.error) {
              let _v0 = _v0 => {
                let _v1 = _v0.error,
                  _v2 = _v1?.data && _v1.data.error_code;
                return _v2 === _v13.STORYBOARD_NOT_READY || _v2 === _v13.STILL_TRANSCODING_IN_VIMEO;
              };
              if (!_v0(_v14)) return _v14;
              _v14 = await (0, _v17.rtkPoll)({
                url: _v13,
                fetchWithBaseQuery: _v9,
                shouldKeepPolling: _v0
              });
            }
            let _v15 = (0, _v3.camelize)(_v14?.data?.storyboard);
            if (!_v15) throw Error(_v14.STORYBOARD_NOT_FOUND);
            _v14?.data?.is_duplicate_from_team_template ? _v10 = "team_templates" : _v14?.data?.storyboard_info?.template_id && (_v10 = "templates");
            let _v16 = (0, _v18.isLayersStoryboard)(_v15) ? _v15 : await (0, _v19.scenesToLayers)(_v15);
            _v15.setOriginalStoryboard(_v16);
            let _v17 = _v3 ? (0, _v19.prepareStoryboardForInteractive)({
              storyboard: _v16,
              vimeoSourceHash: _v14?.data?.vimeo_version_source_hash,
              shouldAddBackgroundVideoLayer: _v5
            }) : _v16;
            if (_v17.sources) for (let _v0 of _v17.sources) _v0.type === _v10.SourceType.AUDIO && (_v0.duration = await _v16(_v0.previewUrl)), null === _v0.previewUrl && (_v0.previewUrl = "");
            let {
              editing_tool: _v18,
              last_user_saved_storyboard: _v19,
              streamyard_context: _v20,
              vimeo_video: _v21
            } = _v14?.data || {};
            return {
              data: {
                storyboard: _v17,
                createdBy: _v10,
                vimeoVideo: _v21,
                ...(_v20 && {
                  streamyardContext: (0, _v3.camelize)(_v20)
                }),
                ...(_v18 && {
                  editingTool: _v18
                }),
                ...(_v19 && {
                  lastUserSavedStoryboard: _v19
                })
              }
            };
          }
        }),
        initStoryboard: _v0.query({
          extraOptions: {
            apiServer: _v4.ApiServer.VIMEO
          },
          query: ({
            vimeoVideoId: _v0
          }) => ({
            url: `users/${_v2.default.teamOwnerId}/storyboards`,
            headers: {
              Authorization: `jwt ${_v2.default.jwt}`
            },
            method: "post",
            params: {
              v: _v12.PROTOCOL_VERSION,
              ...(_v0 && {
                vvid: _v0
              })
            },
            body: {
              use_cached_vs: !0
            }
          }),
          transformResponse: _v0 => (0, _v3.camelize)(_v0)
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
              v: _v12.PROTOCOL_VERSION
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
      useLazyFetchStoryboardQuery: _v27,
      useLazyInitStoryboardQuery: _v28,
      useLazyInitStoryboardFromClipQuery: _v29,
      useSaveStoryboardMutation: _v30,
      useRenderStoryboardMutation: _v31,
      usePublishInteractiveStoryboardMutation: _v32,
      useDuplicateStoryboardSourcesMutation: _v33
    } = _v26,
    _v34 = (0, _v9.createSelector)(_v0 => _v0, _v0 => ({
      renderStoryboard: _v26.endpoints.renderStoryboard.select(_v20)(_v0),
      saveStoryboard: _v26.endpoints.saveStoryboard.select(_v22)(_v0),
      saveOverlayStoryboard: _v26.endpoints.saveStoryboard.select(_v25)(_v0),
      saveInteractive: _v26.endpoints.saveStoryboard.select(_v23)(_v0),
      publishInteractiveStoryboard: _v26.endpoints.publishInteractiveStoryboard.select(_v24)(_v0)
    })),
    _v35 = (0, _v9.createSelector)(_v34, ({
      renderStoryboard: _v0,
      publishInteractiveStoryboard: _v1
    }) => _v1.isSuccess || _v0.isSuccess),
    _v36 = (0, _v9.createSelector)(_v34, ({
      renderStoryboard: _v0,
      saveStoryboard: _v1
    }) => _v0.isLoading || _v1.isLoading),
    _v37 = (0, _v9.createSelector)(_v0 => _v0, _v0 => {
      let {
        renderStoryboard: _v1,
        saveInteractive: _v2,
        publishInteractiveStoryboard: _v3,
        saveStoryboard: _v4
      } = _v34(_v0);
      return !_v4.error && !_v1.error && !_v2.error && !_v3.error && (_v4.isLoading || _v4.isSuccess || _v1.isLoading || _v1.isSuccess || _v2.isLoading || _v3.isLoading || _v3.isSuccess);
    });
  _v0.s(["SHARED_AUTO_SAVE_STORYBOARD_KEY", 0, _v21, "SHARED_PUBLISH_INTERACTIVE_KEY", 0, _v24, "SHARED_RENDER_STORYBOARD_KEY", 0, _v20, "SHARED_SAVE_INTERACTIVE_KEY", 0, _v23, "SHARED_SAVE_OVERLAY_AS_TEMPLATE_KEY", 0, _v25, "SHARED_SAVE_STORYBOARD_KEY", 0, _v22, "isAutoSaveStoryboardLoadingSelector", 0, _v0 => _v26.endpoints.saveStoryboard.select(_v21)(_v0).isLoading, "isStoryboardSavedSelector", 0, _v35, "isStoryboardSavingOrSavedSelector", 0, _v37, "isStoryboardSavingSelector", 0, _v36, "storyboardApi", 0, _v26, "useDuplicateStoryboardSourcesMutation", 0, _v33, "useLazyFetchStoryboardQuery", 0, _v27, "useLazyInitStoryboardFromClipQuery", 0, _v29, "useLazyInitStoryboardQuery", 0, _v28, "usePublishInteractiveStoryboardMutation", 0, _v32, "useRenderStoryboardMutation", 0, _v31, "useSaveStoryboardMutation", 0, _v30], 0);
}