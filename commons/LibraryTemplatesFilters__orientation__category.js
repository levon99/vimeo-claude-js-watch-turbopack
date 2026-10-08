{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  _v0.s(["LibraryTemplatesFilters", 0, {
    ORIENTATION: "orientation",
    CATEGORY: "category"
  }, "TEAM_TEMPLATES", 0, "custom", "TEMPLATES_PER_REQUEST", 0, 100], 0);
  var _v7 = _v0.i(0);
  let _v8 = "desc";
  var _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0);
  let _v14 = (0, _v1.createApi)({
      reducerPath: "templatesApi",
      baseQuery: _v13.baseQuery,
      tagTypes: ["TemplatesData"],
      endpoints: _v0 => ({
        fetchCategories: _v0.query({
          extraOptions: {
            apiServer: _v13.ApiServer.VIMEO
          },
          query: ({
            integrationApp: _v0
          }) => {
            let _v1 = {};
            return _v0 === _v3.PartnerApp.FACEBOOK_CCM_VARIANT && (_v1.integration_app = "facebook", _v1.facebook_ccm_tags_variant = "variant"), _v7.default.isShopifyUser && (_v1.integration_app = "shopify"), {
              url: "create/template/tags",
              params: _v1,
              headers: {
                Authorization: `jwt ${_v7.default.jwt}`
              }
            };
          },
          transformResponse: _v0 => (0, _v11.camelize)(_v0)
        }),
        fetchSystemTemplates: _v0.query({
          providesTags: ["TemplatesData"],
          extraOptions: {
            apiServer: _v13.ApiServer.VIMEO
          },
          query: ({
            page: _v0,
            keywords: _v1,
            freetext: _v2
          }) => ({
            url: "create/templates/browse",
            params: {
              page: _v0,
              per_page: 100,
              direction: _v8,
              keywords: _v1,
              freetext: _v2
            }
          }),
          serializeQueryArgs: ({
            endpointName: _v0
          }) => _v0,
          merge: (_v0, _v1, {
            arg: _v2
          }) => {
            _v0.page = _v1.page, 1 === _v2.page ? _v0.data = _v1.data : _v0.data.push(..._v1.data);
          },
          transformResponse: _v0 => (0, _v11.camelize)(_v0),
          forceRefetch: ({
            currentArg: _v0,
            previousArg: _v1
          }) => !!_v1 && !!_v0 && (_v0.page !== _v1.page || _v0.freetext !== _v1.freetext || _v0.keywords !== _v1.keywords)
        }),
        fetchTeamTemplates: _v0.query({
          providesTags: ["TemplatesData"],
          extraOptions: {
            apiServer: _v13.ApiServer.VIMEO
          },
          query: ({
            limit: _v0,
            keywords: _v1,
            offset: _v2
          }) => ({
            url: `users/${_v7.default.teamOwnerId}/create/templates`,
            params: {
              limit: _v0,
              offset: _v2,
              sort_order: _v8,
              prefilled: 1,
              keywords: _v1
            }
          }),
          serializeQueryArgs: ({
            endpointName: _v0
          }) => _v0,
          merge: (_v0, _v1, {
            arg: _v2
          }) => {
            _v0.gotMore = _v1.gotMore, 0 === _v2.offset ? _v0.items = _v1.items : _v1.currPage < _v1.numPages && _v0.items.push(..._v1.items);
          },
          transformResponse: _v0 => (0, _v11.camelize)(_v0),
          forceRefetch: ({
            currentArg: _v0,
            previousArg: _v1
          }) => !!_v1 && !!_v0 && (_v0.offset !== _v1.offset || _v0.freetext !== _v1.freetext || _v0.keywords !== _v1.keywords)
        }),
        deleteTemplate: _v0.mutation({
          invalidatesTags: ["TemplatesData"],
          extraOptions: {
            apiServer: _v13.ApiServer.VIMEO
          },
          query: ({
            templateId: _v0
          }) => ({
            url: `users/${_v7.default.teamOwnerId}/create/template/team/${_v0}`,
            method: "DELETE"
          }),
          transformResponse: (_v0, _v1, _v2) => (0, _v11.camelize)({
            templateId: _v2.templateId
          })
        }),
        renameTemplate: _v0.mutation({
          invalidatesTags: ["TemplatesData"],
          extraOptions: {
            apiServer: _v13.ApiServer.VIMEO
          },
          query: ({
            templateId: _v0,
            title: _v1
          }) => ({
            url: `users/${_v7.default.teamOwnerId}/create/template/team/${_v0}`,
            method: "PATCH",
            body: {
              title: _v1
            }
          }),
          transformResponse: (_v0, _v1, _v2) => (0, _v11.camelize)({
            title: _v2.title,
            templateId: _v2.templateId
          })
        }),
        fetchTemplate: _v0.query({
          extraOptions: {
            apiServer: _v13.ApiServer.VIMEO
          },
          query: ({
            hash: _v0,
            protocolVersion: _v1
          }) => ({
            url: `users/${_v7.default.teamOwnerId}/storyboards/${_v0}`,
            params: {
              ...(_v1 && {
                v: _v4.PROTOCOL_VERSION
              })
            }
          }),
          transformResponse: (_v0, _v1, _v2) => {
            let _v3 = (0, _v11.camelize)(_v0.storyboard),
              {
                sources: _v4,
                branding: _v5,
                projectName: _v6,
                id: _v7,
                videoSessionId: _v8,
                canvas: _v9
              } = _v3,
              _v10 = {
                version: 0,
                title: _v6 ?? "",
                branding: _v5,
                hash: _v2.hash,
                id: _v7,
                vsid: _v8 ?? 0
              };
            if ((0, _v12.isLayersStoryboard)(_v3)) {
              let {
                  layers: _v0
                } = _v3,
                _v1 = {
                  ..._v10,
                  sources: _v4,
                  layers: _v0,
                  canvasColor: _v9.color
                };
              return (0, _v11.camelize)(_v1);
            }
            if ((0, _v12.isScenesStoryboard)(_v3)) {
              let {
                  scenes: _v0,
                  sound: _v1
                } = _v3,
                _v2 = _v0.map(_v0 => ({
                  ..._v0,
                  composition: _v0.composition.map(_v0 => ({
                    ..._v0,
                    ...((0, _v9.isVideoElement)(_v0) && {
                      effects: (0, _v10.isSoundEffectsValid)(_v0) ? _v0.effects : [(_v0 => {
                        let {
                          compositionTiming: _v1,
                          hasAudio: _v2,
                          muted: _v3
                        } = _v0;
                        return {
                          type: _v2.SoundEffectType.volume,
                          level: _v2 && !_v3 ? _v6.MUSIC_DEFAULT_VOLUME : 0,
                          startTime: 0,
                          endTime: _v1.end - _v1.start
                        };
                      })(_v0)]
                    })
                  }))
                })),
                _v3 = {
                  ..._v10,
                  sources: _v4,
                  items: _v2.map(_v0 => ({
                    ..._v0,
                    thumbnail: _v0.scene_thumb_url?.[_v0.id]
                  })),
                  ...(_v1?.name !== _v6.NO_MUSIC && {
                    sound: _v1
                  })
                };
              return (0, _v11.camelize)(_v3);
            }
            throw Error(_v5.STORYBOARD_NOT_FOUND);
          },
          keepUnusedDataFor: 30
        }),
        fetchTemplateProgress: _v0.query({
          extraOptions: {
            apiServer: _v13.ApiServer.VIMEO
          },
          query: ({
            vsid: _v0,
            jobId: _v1
          }) => ({
            url: `users/${_v7.default.teamOwnerId}/storyboards/${_v0}/progress`,
            method: "GET"
          }),
          transformResponse: _v0 => (0, _v11.camelize)(_v0)
        }),
        saveTemplate: _v0.mutation({
          invalidatesTags: ["TemplatesData"],
          extraOptions: {
            apiServer: _v13.ApiServer.CREATE
          },
          query: ({
            templateName: _v0,
            storyboard: _v1,
            hash: _v2,
            saveAsTeamTemplateFlag: _v3 = 1
          }) => ({
            method: "post",
            url: `set_storyboard/${_v2 || _v7.default.videoHash}`,
            body: JSON.stringify({
              storyboard: {
                ...(0, _v11.lowerCaseUnderscore)(_v1),
                project_name: _v0
              },
              save_as_team_template: _v3
            }),
            options: {
              sessionId: _v7.default.vimeoSessionId
            }
          })
        })
      })
    }),
    {
      useLazyFetchSystemTemplatesQuery: _v15,
      useLazyFetchTeamTemplatesQuery: _v16,
      useFetchTemplateProgressQuery: _v17,
      useFetchTemplateQuery: _v18,
      useLazyFetchTemplateQuery: _v19,
      useFetchCategoriesQuery: _v20,
      useDeleteTemplateMutation: _v21,
      useRenameTemplateMutation: _v22,
      useSaveTemplateMutation: _v23
    } = _v14;
  _v0.s(["templatesApi", 0, _v14, "useDeleteTemplateMutation", 0, _v21, "useFetchCategoriesQuery", 0, _v20, "useFetchTemplateProgressQuery", 0, _v17, "useFetchTemplateQuery", 0, _v18, "useLazyFetchSystemTemplatesQuery", 0, _v15, "useLazyFetchTeamTemplatesQuery", 0, _v16, "useLazyFetchTemplateQuery", 0, _v19, "useRenameTemplateMutation", 0, _v22, "useSaveTemplateMutation", 0, _v23], 0);
}