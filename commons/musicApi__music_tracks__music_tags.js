{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = (0, _v1.createApi)({
      reducerPath: "musicApi",
      baseQuery: _v4.baseQuery,
      endpoints: _v0 => ({
        fetchAllMusic: _v0.query({
          extraOptions: {
            apiServer: _v4.ApiServer.VIMEO
          },
          query: ({
            page: _v0,
            filterTags: _v1
          }) => ({
            url: "music/tracks",
            params: {
              page: _v0,
              filter_tags: _v1.join("|")
            },
            headers: {
              Authorization: `jwt ${_v2.default.jwt}`
            }
          }),
          serializeQueryArgs: ({
            endpointName: _v0
          }) => _v0,
          merge: (_v0, _v1, {
            arg: _v2
          }) => {
            if (1 === _v2.page) return _v1;
            _v0.push(..._v1);
          },
          forceRefetch: ({
            currentArg: _v0,
            previousArg: _v1
          }) => !!_v1 && !!_v0 && (_v0.page !== _v1.page || _v0.filterTags.join("|") !== _v1.filterTags.join("|")),
          transformResponse: _v0 => (0, _v3.camelize)(_v0).tracks.map(_v0 => ({
            id: String(_v0.id),
            url: _v0.fullUrl,
            previewUrl: _v0.url,
            duration: _v0.duration ?? 0,
            album: _v0.album,
            artist: _v0.artist,
            name: _v0.name,
            coverUrl: _v0.thumb
          }))
        }),
        fetchMusicFilterGroups: _v0.query({
          extraOptions: {
            apiServer: _v4.ApiServer.VIMEO
          },
          query: () => ({
            url: "music/tags",
            headers: {
              Authorization: `jwt ${_v2.default.jwt}`
            }
          }),
          transformResponse: _v0 => (0, _v3.camelize)(_v0).tags
        })
      })
    }),
    {
      useLazyFetchAllMusicQuery: _v6,
      useFetchMusicFilterGroupsQuery: _v7
    } = _v5;
  _v0.s(["musicApi", 0, _v5, "useFetchMusicFilterGroupsQuery", 0, _v7, "useLazyFetchAllMusicQuery", 0, _v6], 0);
  var _v8 = _v0.i(0),
    _v9 = _v0.i(0);
  let _v10 = (0, _v1.createApi)({
      reducerPath: "overlayTemplatesApi",
      baseQuery: _v4.baseQuery,
      tagTypes: ["OverlayTeamTemplatesData", "OverlayLibraryTemplatesData"],
      endpoints: _v0 => ({
        getTemplateStoryboard: _v0.query({
          extraOptions: {
            apiServer: _v4.ApiServer.VIMEO
          },
          query: ({
            storyboardId: _v0
          }) => ({
            url: `users/${_v2.default.teamOwnerId}/storyboards/${_v0}?v=${_v9.PROTOCOL_VERSION}`,
            method: "GET"
          }),
          transformResponse: _v0 => (0, _v3.camelize)(_v0)
        }),
        initTemplateStoryboard: _v0.query({
          extraOptions: {
            apiServer: _v4.ApiServer.VIMEO
          },
          query: ({
            isSystem: _v0
          }) => ({
            url: "storyboards",
            headers: {
              Authorization: `jwt ${_v2.default.jwt}`
            },
            method: "post",
            params: {
              v: _v9.PROTOCOL_VERSION
            },
            body: {
              use_cached_vs: !0,
              ...(!0 === _v0 && {
                save_as_system_user: !0
              })
            }
          }),
          transformResponse: _v0 => (0, _v3.camelize)(_v0)
        }),
        getTeamTemplates: _v0.query({
          extraOptions: {
            apiServer: _v4.ApiServer.VIMEO
          },
          query: ({
            userId: _v0,
            page: _v1,
            perPage: _v2
          }) => {
            let _v3 = `users/${_v0}/overlay_templates`,
              _v4 = new URLSearchParams();
            _v1 && _v4.set("page", _v1), _v2 && _v4.set("per_page", String(_v2));
            let _v5 = _v4.toString();
            return _v5 && (_v3 += `?${_v5}`), {
              url: _v3,
              method: "GET"
            };
          },
          serializeQueryArgs: ({
            endpointName: _v0
          }) => _v0,
          merge: (_v0, _v1, _v2) => (0, _v8.isErrorResponse)(_v0) && !(0, _v8.isErrorResponse)(_v1) ? _v1 : (0, _v8.isErrorResponse)(_v1) && !(0, _v8.isErrorResponse)(_v0) ? _v0 : _v2?.arg?.page ? void (_v0.items.push(..._v1.items), _v0.nextPage = _v1.nextPage) : _v1,
          transformResponse: _v0 => (0, _v3.camelize)(_v0),
          providesTags: ["OverlayTeamTemplatesData"]
        }),
        saveAsTeamTemplate: _v0.mutation({
          extraOptions: {
            apiServer: _v4.ApiServer.VIMEO
          },
          query: ({
            userId: _v0,
            storyboardId: _v1,
            name: _v2,
            thumbnailId: _v3
          }) => ({
            url: `users/${_v0}/overlay_templates`,
            method: "POST",
            body: {
              storyboard_id: _v1,
              name: _v2,
              ...(_v3 && {
                thumbnail_id: _v3
              })
            }
          }),
          invalidatesTags: ["OverlayTeamTemplatesData"],
          transformResponse: _v0 => (0, _v3.camelize)(_v0)
        }),
        updateTeamTemplate: _v0.mutation({
          extraOptions: {
            apiServer: _v4.ApiServer.VIMEO
          },
          query: ({
            userId: _v0,
            templateId: _v1,
            name: _v2
          }) => ({
            url: `users/${_v0}/overlay_templates/${_v1}`,
            method: "PATCH",
            body: {
              name: _v2
            }
          }),
          onQueryStarted: async ({
            userId: _v0,
            templateId: _v1,
            name: _v2
          }, {
            dispatch: _v3,
            queryFulfilled: _v4
          }) => {
            let _v5 = _v3(_v10.util.updateQueryData("getTeamTemplates", {
              userId: _v0
            }, _v0 => {
              let _v1 = _v0.items.findIndex(_v0 => _v0.templateId === _v1);
              -1 !== _v1 && _v2 && (_v0.items[_v1].name = _v2);
            }));
            try {
              await _v4;
            } catch (_v0) {
              throw _v5.undo(), _v0;
            }
          },
          transformResponse: _v0 => (0, _v3.camelize)(_v0)
        }),
        deleteTeamTemplate: _v0.mutation({
          extraOptions: {
            apiServer: _v4.ApiServer.VIMEO
          },
          query: ({
            userId: _v0,
            templateId: _v1
          }) => ({
            url: `users/${_v0}/overlay_templates/${_v1}`,
            method: "DELETE"
          }),
          onQueryStarted: async ({
            userId: _v0,
            templateId: _v1
          }, {
            dispatch: _v2,
            queryFulfilled: _v3
          }) => {
            let _v4 = _v2(_v10.util.updateQueryData("getTeamTemplates", {
              userId: _v0
            }, _v0 => {
              let _v1 = _v0.items.findIndex(_v0 => _v0.templateId === _v1);
              -1 !== _v1 && _v0.items.splice(_v1, 1);
            }));
            try {
              await _v3;
            } catch (_v0) {
              throw _v4.undo(), _v0;
            }
          }
        }),
        getLibraryTemplates: _v0.query({
          extraOptions: {
            apiServer: _v4.ApiServer.VIMEO
          },
          query: ({
            page: _v0,
            perPage: _v1,
            isTest: _v2,
            categoryId: _v3
          }) => {
            let _v4 = "create/overlay_templates",
              _v5 = new URLSearchParams();
            _v0 && _v5.set("page", _v0.toString()), _v1 && _v5.set("per_page", "100"), _v2 && _v5.set("is_test", _v2.toString()), _v3 && _v5.set("category_id", _v3.toString());
            let _v6 = _v5.toString();
            return _v6 && (_v4 += `?${_v6}`), {
              url: _v4,
              method: "GET"
            };
          },
          serializeQueryArgs: ({
            endpointName: _v0,
            queryArgs: _v1
          }) => `${_v0}-istest:${_v1.isTest ?? "default"}-category:${_v1.categoryId ?? "default"}`,
          merge: (_v0, _v1, _v2) => (0, _v8.isErrorResponse)(_v0) && !(0, _v8.isErrorResponse)(_v1) ? _v1 : (0, _v8.isErrorResponse)(_v1) && !(0, _v8.isErrorResponse)(_v0) ? _v0 : _v2?.arg?.page && parseInt(_v2?.arg?.page) > 1 ? void (_v0.data.push(..._v1.data), _v0.paging = _v1.paging) : _v1,
          forceRefetch: ({
            currentArg: _v0,
            previousArg: _v1
          }) => _v0?.page !== _v1?.page || _v0?.categoryId !== _v1?.categoryId,
          transformResponse: _v0 => (0, _v3.camelize)(_v0),
          providesTags: ["OverlayLibraryTemplatesData"]
        }),
        getLibraryTemplateCategories: _v0.query({
          extraOptions: {
            apiServer: _v4.ApiServer.VIMEO
          },
          query: ({
            isActive: _v0
          }) => ({
            url: "create/overlay_templates/categories",
            method: "GET",
            params: {
              is_active: _v0 ?? !0
            }
          }),
          transformResponse: _v0 => (0, _v3.camelize)(_v0)
        }),
        saveAsLibraryTemplate: _v0.mutation({
          extraOptions: {
            apiServer: _v4.ApiServer.VIMEO
          },
          query: ({
            storyboardId: _v0,
            name: _v1,
            thumbnailId: _v2
          }) => ({
            url: "create/overlay_templates",
            method: "POST",
            body: {
              storyboard_id: _v0,
              name: _v1,
              ...(_v2 && {
                thumbnail_id: _v2
              }),
              system: !0
            }
          }),
          invalidatesTags: ["OverlayLibraryTemplatesData"],
          transformResponse: _v0 => (0, _v3.camelize)(_v0)
        }),
        updateLibraryTemplate: _v0.mutation({
          extraOptions: {
            apiServer: _v4.ApiServer.VIMEO
          },
          query: ({
            templateId: _v0,
            name: _v1
          }) => ({
            url: `create/overlay_templates/${_v0}`,
            method: "PATCH",
            body: {
              name: _v1
            }
          }),
          onQueryStarted: async ({
            templateId: _v0,
            name: _v1
          }, {
            dispatch: _v2,
            queryFulfilled: _v3
          }) => {
            let _v4 = _v2(_v10.util.updateQueryData("getLibraryTemplates", {}, _v0 => {
              let _v1 = _v0.data.findIndex(_v0 => _v0.templateId === _v0);
              -1 !== _v1 && _v1 && (_v0.data[_v1].name = _v1);
            }));
            try {
              await _v3;
            } catch (_v0) {
              throw _v4.undo(), _v0;
            }
          },
          transformResponse: _v0 => (0, _v3.camelize)(_v0)
        }),
        deleteLibraryTemplate: _v0.mutation({
          extraOptions: {
            apiServer: _v4.ApiServer.VIMEO
          },
          query: ({
            templateId: _v0
          }) => ({
            url: `create/overlay_templates/${_v0}`,
            method: "DELETE"
          }),
          onQueryStarted: async ({
            templateId: _v0
          }, {
            dispatch: _v1,
            queryFulfilled: _v2
          }) => {
            let _v3 = _v1(_v10.util.updateQueryData("getLibraryTemplates", {}, _v0 => {
              let _v1 = _v0.data.findIndex(_v0 => _v0.templateId === _v0);
              -1 !== _v1 && _v0.data.splice(_v1, 1);
            }));
            try {
              await _v2;
            } catch (_v0) {
              throw _v3.undo(), _v0;
            }
          }
        }),
        getOverlayThumbnailUploadLink: _v0.mutation({
          extraOptions: {
            apiServer: _v4.ApiServer.VIMEO
          },
          query: () => ({
            url: `users/${_v2.default.teamOwnerId}/create_assets`,
            method: "POST",
            body: {
              upload: {
                type: "overlay_thumbnail"
              }
            }
          }),
          transformResponse: _v0 => (0, _v3.camelize)(_v0)
        })
      })
    }),
    {
      useLazyGetTemplateStoryboardQuery: _v11,
      useLazyInitTemplateStoryboardQuery: _v12,
      useGetTeamTemplatesQuery: _v13,
      useSaveAsTeamTemplateMutation: _v14,
      useUpdateTeamTemplateMutation: _v15,
      useDeleteTeamTemplateMutation: _v16,
      useGetLibraryTemplatesQuery: _v17,
      useGetLibraryTemplateCategoriesQuery: _v18,
      useSaveAsLibraryTemplateMutation: _v19,
      useUpdateLibraryTemplateMutation: _v20,
      useDeleteLibraryTemplateMutation: _v21,
      useGetOverlayThumbnailUploadLinkMutation: _v22
    } = _v10;
  _v0.s(["overlayTemplatesApi", 0, _v10, "useDeleteLibraryTemplateMutation", 0, _v21, "useDeleteTeamTemplateMutation", 0, _v16, "useGetLibraryTemplatesQuery", 0, _v17, "useGetOverlayThumbnailUploadLinkMutation", 0, _v22, "useGetTeamTemplatesQuery", 0, _v13, "useLazyGetTemplateStoryboardQuery", 0, _v11, "useLazyInitTemplateStoryboardQuery", 0, _v12, "useSaveAsLibraryTemplateMutation", 0, _v19, "useSaveAsTeamTemplateMutation", 0, _v14, "useUpdateLibraryTemplateMutation", 0, _v20, "useUpdateTeamTemplateMutation", 0, _v15], 0);
}