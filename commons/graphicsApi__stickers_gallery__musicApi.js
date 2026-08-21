{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = (0, _v1.createApi)({
    reducerPath: "graphicsApi",
    baseQuery: _v3.baseQuery,
    endpoints: _v0 => ({
      fetchGraphicsCategories: _v0.query({
        extraOptions: {
          apiServer: _v3.ApiServer.VIMEO
        },
        query: ({
          tag: _v0
        }) => ({
          url: "stickers/gallery",
          params: {
            tag: _v0
          }
        }),
        transformResponse: _v0 => Object.fromEntries((0, _v2.camelize)(_v0).categories.map(_v0 => [_v0.name, {
          id: _v0.id,
          name: _v0.name,
          thumbnailUrl: _v0.items[0].lowPath
        }]))
      }),
      fetchGraphics: _v0.query({
        extraOptions: {
          apiServer: _v3.ApiServer.VIMEO
        },
        query: ({
          page: _v0,
          categoryId: _v1,
          tag: _v2
        }) => ({
          url: "stickers/gallery",
          params: {
            p: _v0,
            category_id: _v1,
            tag: _v2
          }
        }),
        serializeQueryArgs: ({
          endpointName: _v0,
          queryArgs: _v1
        }) => `${_v0}-${_v1.categoryId}-${_v1.tag}`,
        forceRefetch: ({
          currentArg: _v0,
          state: _v1
        }) => {
          let _v2 = `fetchGraphics-${_v0?.categoryId}-${_v0?.tag}`,
            _v3 = _v1[_v4.reducerPath].queries[_v2]?.data;
          return !_v3 || _v3.items.length < 10 * (_v0?.page || 1) && !!_v3.hasNextPage;
        },
        merge: (_v0, _v1, {
          arg: _v2
        }) => {
          _v0.hasNextPage = _v1.hasNextPage, 1 === _v2.page ? _v0.items = _v1.items : _v0.items.push(..._v1.items);
        },
        transformResponse: _v0 => (0, _v2.camelize)(_v0.categories[0]),
        keepUnusedDataFor: 60
      })
    })
  });
  _v0.s(["graphicsApi", 0, _v4], 0);
  var _v5 = _v0.i(0);
  let _v6 = (0, _v1.createApi)({
      reducerPath: "musicApi",
      baseQuery: _v3.baseQuery,
      endpoints: _v0 => ({
        fetchAllMusic: _v0.query({
          extraOptions: {
            apiServer: _v3.ApiServer.VIMEO
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
              Authorization: `jwt ${_v5.default.jwt}`
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
          transformResponse: _v0 => (0, _v2.camelize)(_v0).tracks.map(_v0 => ({
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
            apiServer: _v3.ApiServer.VIMEO
          },
          query: () => ({
            url: "music/tags",
            headers: {
              Authorization: `jwt ${_v5.default.jwt}`
            }
          }),
          transformResponse: _v0 => (0, _v2.camelize)(_v0).tags
        })
      })
    }),
    {
      useLazyFetchAllMusicQuery: _v7,
      useFetchMusicFilterGroupsQuery: _v8
    } = _v6;
  _v0.s(["musicApi", 0, _v6, "useFetchMusicFilterGroupsQuery", 0, _v8, "useLazyFetchAllMusicQuery", 0, _v7], 0);
  var _v9 = _v0.i(0),
    _v10 = _v0.i(0);
  let _v11 = (0, _v1.createApi)({
      reducerPath: "overlayTemplatesApi",
      baseQuery: _v3.baseQuery,
      tagTypes: ["OverlayTeamTemplatesData", "OverlayLibraryTemplatesData"],
      endpoints: _v0 => ({
        getTemplateStoryboard: _v0.query({
          extraOptions: {
            apiServer: _v3.ApiServer.VIMEO
          },
          query: ({
            storyboardId: _v0
          }) => ({
            url: `users/${_v5.default.teamOwnerId}/storyboards/${_v0}?v=${_v10.PROTOCOL_VERSION}`,
            method: "GET"
          }),
          transformResponse: _v0 => (0, _v2.camelize)(_v0)
        }),
        initTemplateStoryboard: _v0.query({
          extraOptions: {
            apiServer: _v3.ApiServer.VIMEO
          },
          query: ({
            isSystem: _v0
          }) => ({
            url: "storyboards",
            headers: {
              Authorization: `jwt ${_v5.default.jwt}`
            },
            method: "post",
            params: {
              v: _v10.PROTOCOL_VERSION
            },
            body: {
              use_cached_vs: !0,
              ...(!0 === _v0 && {
                save_as_system_user: !0
              })
            }
          }),
          transformResponse: _v0 => (0, _v2.camelize)(_v0)
        }),
        getTeamTemplates: _v0.query({
          extraOptions: {
            apiServer: _v3.ApiServer.VIMEO
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
          merge: (_v0, _v1, _v2) => (0, _v9.isErrorResponse)(_v0) && !(0, _v9.isErrorResponse)(_v1) ? _v1 : (0, _v9.isErrorResponse)(_v1) && !(0, _v9.isErrorResponse)(_v0) ? _v0 : _v2?.arg?.page ? void (_v0.items.push(..._v1.items), _v0.nextPage = _v1.nextPage) : _v1,
          transformResponse: _v0 => (0, _v2.camelize)(_v0),
          providesTags: ["OverlayTeamTemplatesData"]
        }),
        saveAsTeamTemplate: _v0.mutation({
          extraOptions: {
            apiServer: _v3.ApiServer.VIMEO
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
          transformResponse: _v0 => (0, _v2.camelize)(_v0)
        }),
        updateTeamTemplate: _v0.mutation({
          extraOptions: {
            apiServer: _v3.ApiServer.VIMEO
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
            let _v5 = _v3(_v11.util.updateQueryData("getTeamTemplates", {
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
          transformResponse: _v0 => (0, _v2.camelize)(_v0)
        }),
        deleteTeamTemplate: _v0.mutation({
          extraOptions: {
            apiServer: _v3.ApiServer.VIMEO
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
            let _v4 = _v2(_v11.util.updateQueryData("getTeamTemplates", {
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
            apiServer: _v3.ApiServer.VIMEO
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
          merge: (_v0, _v1, _v2) => (0, _v9.isErrorResponse)(_v0) && !(0, _v9.isErrorResponse)(_v1) ? _v1 : (0, _v9.isErrorResponse)(_v1) && !(0, _v9.isErrorResponse)(_v0) ? _v0 : _v2?.arg?.page && parseInt(_v2?.arg?.page) > 1 ? void (_v0.data.push(..._v1.data), _v0.paging = _v1.paging) : _v1,
          forceRefetch: ({
            currentArg: _v0,
            previousArg: _v1
          }) => _v0?.page !== _v1?.page || _v0?.categoryId !== _v1?.categoryId,
          transformResponse: _v0 => (0, _v2.camelize)(_v0),
          providesTags: ["OverlayLibraryTemplatesData"]
        }),
        getLibraryTemplateCategories: _v0.query({
          extraOptions: {
            apiServer: _v3.ApiServer.VIMEO
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
          transformResponse: _v0 => (0, _v2.camelize)(_v0)
        }),
        saveAsLibraryTemplate: _v0.mutation({
          extraOptions: {
            apiServer: _v3.ApiServer.VIMEO
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
          transformResponse: _v0 => (0, _v2.camelize)(_v0)
        }),
        updateLibraryTemplate: _v0.mutation({
          extraOptions: {
            apiServer: _v3.ApiServer.VIMEO
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
            let _v4 = _v2(_v11.util.updateQueryData("getLibraryTemplates", {}, _v0 => {
              let _v1 = _v0.data.findIndex(_v0 => _v0.templateId === _v0);
              -1 !== _v1 && _v1 && (_v0.data[_v1].name = _v1);
            }));
            try {
              await _v3;
            } catch (_v0) {
              throw _v4.undo(), _v0;
            }
          },
          transformResponse: _v0 => (0, _v2.camelize)(_v0)
        }),
        deleteLibraryTemplate: _v0.mutation({
          extraOptions: {
            apiServer: _v3.ApiServer.VIMEO
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
            let _v3 = _v1(_v11.util.updateQueryData("getLibraryTemplates", {}, _v0 => {
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
            apiServer: _v3.ApiServer.VIMEO
          },
          query: () => ({
            url: `users/${_v5.default.teamOwnerId}/create_assets`,
            method: "POST",
            body: {
              upload: {
                type: "overlay_thumbnail"
              }
            }
          }),
          transformResponse: _v0 => (0, _v2.camelize)(_v0)
        })
      })
    }),
    {
      useLazyGetTemplateStoryboardQuery: _v12,
      useLazyInitTemplateStoryboardQuery: _v13,
      useGetTeamTemplatesQuery: _v14,
      useSaveAsTeamTemplateMutation: _v15,
      useUpdateTeamTemplateMutation: _v16,
      useDeleteTeamTemplateMutation: _v17,
      useGetLibraryTemplatesQuery: _v18,
      useGetLibraryTemplateCategoriesQuery: _v19,
      useSaveAsLibraryTemplateMutation: _v20,
      useUpdateLibraryTemplateMutation: _v21,
      useDeleteLibraryTemplateMutation: _v22,
      useGetOverlayThumbnailUploadLinkMutation: _v23
    } = _v11;
  _v0.s(["overlayTemplatesApi", 0, _v11, "useDeleteLibraryTemplateMutation", 0, _v22, "useDeleteTeamTemplateMutation", 0, _v17, "useGetLibraryTemplatesQuery", 0, _v18, "useGetOverlayThumbnailUploadLinkMutation", 0, _v23, "useGetTeamTemplatesQuery", 0, _v14, "useLazyGetTemplateStoryboardQuery", 0, _v12, "useLazyInitTemplateStoryboardQuery", 0, _v13, "useSaveAsLibraryTemplateMutation", 0, _v20, "useSaveAsTeamTemplateMutation", 0, _v15, "useUpdateLibraryTemplateMutation", 0, _v21, "useUpdateTeamTemplateMutation", 0, _v16], 0);
}