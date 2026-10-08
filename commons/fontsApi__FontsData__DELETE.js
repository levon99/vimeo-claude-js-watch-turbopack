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
    _v9 = _v0.i(0);
  let _v10 = (0, _v1.createApi)({
      reducerPath: "fontsApi",
      baseQuery: _v9.baseQuery,
      tagTypes: ["FontsData"],
      endpoints: _v0 => ({
        fetchFonts: _v0.query({
          extraOptions: {
            apiServer: _v9.ApiServer.VIMEO
          },
          query: () => ({
            url: `users/${_v3.default.teamOwnerId}/brandkits?fields=fonts,is_default,is_organization`,
            method: "GET"
          }),
          transformResponse: _v0 => {
            let _v1 = (0, _v7.camelize)(_v0).data.find(_v0 => _v0.isDefault && !_v0.isOrganization);
            return {
              data: [...(_v1 ? _v1.fonts : []).filter(_v0 => _v0.isActive).map(_v5.mapBrandKitFontToFont)]
            };
          },
          providesTags: ["FontsData"]
        }),
        deleteFont: _v0.mutation({
          extraOptions: {
            apiServer: _v9.ApiServer.VIMEO
          },
          query: ({
            assetId: _v0,
            kitId: _v1
          }) => ({
            url: `users/${_v3.default.teamOwnerId}/brandkits/${_v1}/fonts/${_v0}`,
            method: "DELETE"
          }),
          invalidatesTags: ["FontsData"]
        }),
        uploadAndCreateFont: _v0.mutation({
          extraOptions: {
            apiServer: _v9.ApiServer.VIMEO
          },
          queryFn: async (_v0, _v1, _v2, _v3) => {
            let {
              fileName: _v4,
              fontName: _v5,
              displayName: _v6,
              fileFormat: _v7
            } = (0, _v5.getFontExtraData)(_v0.file, _v0.isInternal);
            if (!1 === _v0.isInternal) {
              let _v0 = await _v3({
                url: `users/${_v3.default.teamOwnerId}/brandkits/upload_asset`,
                method: "POST",
                body: {
                  asset_type: "font",
                  file_name: _v4,
                  file_size: _v0.file.size
                }
              });
              if (_v0.error) return {
                error: _v0.error
              };
              let _v1 = _v0.data,
                _v2 = _v1.upload_link,
                _v3 = {
                  AWSAccessKeyId: _v1.aws_access_key_id,
                  key: _v1.key,
                  policy: _v1.policy,
                  signature: _v1.signature,
                  "x-amz-security-token": _v1.x_amz_security_token
                };
              await (0, _v8.uploadFileToS3)(_v0.file, _v2, _v3);
            }
            let {
              job_status: _v8,
              uri: _v9
            } = (await _v3({
              url: `users/${_v3.default.teamOwnerId}/brandkits/${_v0.kitId}/fonts`,
              method: "POST",
              body: {
                display_name: _v6,
                file_format: _v7,
                file_name: _v4,
                font_name: _v5,
                is_internal: _v0.isInternal
              }
            })).data;
            if ("ERROR" === _v8) throw Error(_v2.FONT_UPLOAD_FAILED);
            let _v10 = await (0, _v6.rtkPoll)({
              url: _v9.substring(1),
              fetchWithBaseQuery: _v3,
              shouldKeepPolling: _v0 => _v0?.data?.job_status === _v4.PollingStatus.IN_PROGRESS
            });
            return _v10.error ? {
              error: _v10.error
            } : _v10?.data?.job_status === "ERROR" ? {
              error: {
                status: "CUSTOM_ERROR",
                error: "Failed Creating Font"
              }
            } : {
              data: {
                uploadedAssetId: _v9.match(/[^\/]*$/)?.[0] || ""
              }
            };
          },
          invalidatesTags: ["FontsData"]
        })
      })
    }),
    {
      useLazyFetchFontsQuery: _v11,
      useDeleteFontMutation: _v12,
      useUploadAndCreateFontMutation: _v13
    } = _v10;
  _v0.s(["fontsApi", 0, _v10, "useDeleteFontMutation", 0, _v12, "useLazyFetchFontsQuery", 0, _v11, "useUploadAndCreateFontMutation", 0, _v13]);
}