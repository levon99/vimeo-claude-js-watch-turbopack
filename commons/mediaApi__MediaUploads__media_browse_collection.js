{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = (0, _v1.createApi)({
      reducerPath: "mediaApi",
      baseQuery: _v4.baseQuery,
      tagTypes: ["MediaUploads"],
      endpoints: _v0 => ({
        fetchStockMedia: _v0.query({
          extraOptions: {
            apiServer: _v4.ApiServer.VIMEO
          },
          query: ({
            page: _v0,
            keywords: _v1,
            searchType: _v2,
            searchStockType: _v3,
            sortEditorialType: _v4
          }) => ({
            url: "media/browse/collection",
            params: {
              p: _v0,
              page_size: 60,
              keywords: _v1,
              search_type: _v2,
              media_stock_type: _v3,
              editorial_sort: _v4
            }
          }),
          serializeQueryArgs: ({
            endpointName: _v0
          }) => _v0,
          merge: (_v0, _v1, {
            arg: _v2
          }) => {
            _v0.hasNext = _v1.hasNext, 1 === _v2.page ? _v0.items = _v1.items : _v0.items.push(..._v1.items);
          },
          transformResponse: _v0 => (0, _v3.camelize)(_v0),
          forceRefetch: ({
            currentArg: _v0,
            previousArg: _v1
          }) => !!_v1 && !!_v0 && (_v0.page !== _v1.page || _v0.searchType !== _v1.searchType || _v0.searchStockType !== _v1.searchStockType || _v0.sortEditorialType !== _v1.sortEditorialType || _v0.keywords !== _v1.keywords)
        }),
        fetchStockMediaCategories: _v0.query({
          extraOptions: {
            apiServer: _v4.ApiServer.VIMEO
          },
          query: () => ({
            url: "create/stock/category",
            headers: {
              Authorization: `jwt ${_v2.default.jwt}`
            }
          }),
          transformResponse: _v0 => (0, _v3.camelize)(_v0)
        }),
        fetchMediaUploads: _v0.query({
          extraOptions: {
            apiServer: _v4.ApiServer.VIMEO
          },
          query: ({
            vsid: _v0,
            limit: _v1,
            service: _v2,
            page: _v3,
            isImage: _v4,
            orientation: _v5,
            fetchHotspotUploads: _v6
          }) => ({
            url: `create/users/${_v2.default.teamOwnerId}/media`,
            params: {
              vsid: _v0,
              limit: _v1,
              service: _v2,
              p: _v3,
              is_image: _v4,
              ...("all" !== _v5 && {
                orientation: _v5
              }),
              use_db: !0,
              ...(_v6 && {
                hotspot: !0
              })
            }
          }),
          serializeQueryArgs: ({
            endpointName: _v0
          }) => _v0,
          merge: (_v0, _v1, {
            arg: _v2
          }) => {
            1 === _v2.page ? _v0.items = _v1.items : _v0.items.push(..._v1.items);
          },
          forceRefetch: ({
            currentArg: _v0,
            previousArg: _v1
          }) => !!_v1 && !!_v0 && (_v0.page !== _v1.page || _v0.isImage !== _v1.isImage || _v0.orientation !== _v1.orientation),
          transformResponse: _v0 => (0, _v3.camelize)(_v0),
          providesTags: ["MediaUploads"]
        }),
        deleteMediaUpload: _v0.mutation({
          invalidatesTags: ["MediaUploads"],
          extraOptions: {
            apiServer: _v4.ApiServer.VIMEO
          },
          query: ({
            mediaHash: _v0
          }) => ({
            url: `users/${_v2.default.teamOwnerId}/medialib/${_v0}`,
            method: "DELETE"
          })
        }),
        uploadProviderItem: _v0.mutation({
          queryFn: async ({
            userId: _v0,
            storyboardId: _v1,
            serviceName: _v2,
            assetId: _v3,
            filePayload: _v4,
            isEditorial: _v5
          }) => {
            try {
              let _v0 = await fetch(`//${_v2.default.vimeoApiUrl}/users/${_v0}/storyboards/${_v1}/services/${_v2}/assets/${_v3}?fields=hash,mhash,width,height,async`, {
                  method: "POST",
                  headers: {
                    Authorization: `jwt ${_v2.default.jwt}`,
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify((0, _v3.lowerCaseUnderscore)({
                    filePayload: _v4,
                    isEditorial: _v5
                  }))
                }),
                _v1 = await _v0.json();
              if (_v1.error) return {
                error: _v1.error,
                data: void 0
              };
              return {
                data: (0, _v3.camelize)(_v1),
                error: void 0
              };
            } catch (_v0) {
              return {
                error: _v0,
                data: void 0
              };
            }
          }
        }),
        checkMediaProgress: _v0.query({
          extraOptions: {
            apiServer: _v4.ApiServer.VIMEO
          },
          query: ({
            storyboardId: _v0,
            serviceName: _v1,
            assetId: _v2,
            fileName: _v3,
            fileSize: _v4
          }) => ({
            url: `users/${_v2.default.teamOwnerId}/storyboards/${_v0}/services/${_v1}/assets/${_v2}/progress`,
            method: "post",
            body: (0, _v3.lowerCaseUnderscore)({
              filePayload: {
                fileName: _v3,
                fileSize: _v4
              }
            })
          }),
          transformResponse: _v0 => (0, _v3.camelize)(_v0)
        })
      })
    }),
    {
      useUploadProviderItemMutation: _v6,
      useLazyFetchStockMediaQuery: _v7,
      useLazyFetchStockMediaCategoriesQuery: _v8,
      useLazyFetchMediaUploadsQuery: _v9,
      useLazyCheckMediaProgressQuery: _v10,
      useDeleteMediaUploadMutation: _v11
    } = _v5;
  _v0.s(["mediaApi", 0, _v5, "useDeleteMediaUploadMutation", 0, _v11, "useLazyCheckMediaProgressQuery", 0, _v10, "useLazyFetchMediaUploadsQuery", 0, _v9, "useLazyFetchStockMediaCategoriesQuery", 0, _v8, "useLazyFetchStockMediaQuery", 0, _v7, "useUploadProviderItemMutation", 0, _v6]);
}