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
    _v11 = _v0.i(0);
  let _v12 = (0, _v1.createApi)({
      reducerPath: "brandApi",
      baseQuery: _v11.baseQuery,
      tagTypes: ["IntroOutroData", "BrandKitLogos"],
      endpoints: _v0 => ({
        getBrandKitsLogos: _v0.query({
          extraOptions: {
            apiServer: _v11.ApiServer.VIMEO
          },
          query: () => ({
            url: `users/${_v4.default.teamOwnerId}/brandkits`,
            params: {
              fields: "logos,name,uri,is_default,is_organization,is_locked"
            }
          }),
          transformResponse: _v0 => {
            let _v1 = (0, _v9.camelize)(_v0);
            return _v1?.data?.map(_v0 => ({
              id: _v0.uri?.split("/").at(-1) || "",
              label: _v0.name,
              uri: _v0.uri,
              isLocked: _v0.isLocked,
              isOrganization: _v0.isOrganization,
              logos: _v0.logos.map(_v0 => ({
                url: _v0.picture.baseLink,
                fileName: _v0.fileName,
                uri: _v0.uri,
                size: _v0.fileSize,
                id: _v0.uri,
                previewUrl: _v0.picture.baseLink,
                thumbnailUrl: _v0.picture.baseLink
              }))
            })) || [];
          },
          providesTags: ["BrandKitLogos"]
        }),
        fetchIntroOutro: _v0.query({
          extraOptions: {
            apiServer: _v11.ApiServer.VIMEO
          },
          query: () => ({
            url: `users/${_v4.default.teamOwnerId}/brandkits?fields=bumpers,is_default,is_organization`,
            method: "GET"
          }),
          transformResponse: _v0 => {
            let _v1 = (0, _v9.camelize)(_v0).data.find(_v0 => _v0.isDefault && !_v0.isOrganization),
              _v2 = (_v1 ? _v1.bumpers : []).map(_v0 => ({
                ..._v0,
                id: _v0.uri.match(/[^\/]*$/)?.[0] || "",
                context: _v0.type,
                fileName: `${_v0.name}.mp4`,
                assetId: `${_v0.name}.mp4`,
                title: _v0.name,
                size: _v0.fileSize,
                date: "",
                type: _v6.MediaType.VIDEO
              })),
              _v3 = _v2.filter(_v0 => _v0.context === _v5.IntroOutroContext.INTRO);
            return {
              intro: _v3,
              outro: _v2.filter(_v0 => _v0.context === _v5.IntroOutroContext.OUTRO)
            };
          },
          providesTags: ["IntroOutroData"]
        }),
        deleteIntroOutro: _v0.mutation({
          extraOptions: {
            apiServer: _v11.ApiServer.VIMEO
          },
          query: ({
            assetId: _v0,
            kitId: _v1
          }) => ({
            url: `users/${_v4.default.teamOwnerId}/brandkits/${_v1}/bumpers/${_v0}`,
            method: "DELETE"
          }),
          invalidatesTags: ["IntroOutroData"]
        }),
        createBrandKit: _v0.mutation({
          extraOptions: {
            apiServer: _v11.ApiServer.VIMEO
          },
          query: ({
            brandKitName: _v0
          }) => ({
            url: `users/${_v4.default.teamOwnerId}/brandkits`,
            method: "POST",
            body: {
              name: _v0,
              isDefault: !1
            }
          })
        }),
        deleteBrandkitLogo: _v0.mutation({
          extraOptions: {
            apiServer: _v11.ApiServer.VIMEO
          },
          query: ({
            logoId: _v0,
            kitId: _v1,
            organizationId: _v2 = _v4.default.teamOwnerId
          }) => ({
            url: `users/${_v2}/brandkits/${_v1}/logos/${_v0}`,
            method: "DELETE"
          })
        }),
        uploadAndCreateIntroOutro: _v0.mutation({
          extraOptions: {
            apiServer: _v11.ApiServer.VIMEO
          },
          queryFn: async (_v0, _v1, _v2, _v3) => {
            let _v4 = await _v3({
              url: `users/${_v4.default.teamOwnerId}/brandkits/upload_asset`,
              method: "POST",
              body: {
                asset_type: _v0.type.toLowerCase(),
                file_name: _v0.fileName,
                file_size: _v0.fileSize
              }
            });
            if (_v4.error) return {
              error: _v4.error
            };
            let _v5 = _v4.data,
              _v6 = _v5.upload_link,
              _v7 = {
                AWSAccessKeyId: _v5.aws_access_key_id,
                key: _v5.key,
                policy: _v5.policy,
                signature: _v5.signature,
                "x-amz-security-token": _v5.x_amz_security_token
              };
            await (0, _v10.uploadFileToS3)(_v0.file, _v6, _v7);
            let {
              job_status: _v8,
              uri: _v9
            } = (await _v3({
              url: `users/${_v4.default.teamOwnerId}/brandkits/${_v0.kitId}/bumpers`,
              method: "POST",
              body: {
                kit_uuid: _v0.kitId,
                file_name: _v0.fileName,
                name: _v0.name,
                type: _v0.type
              }
            })).data;
            if ("ERROR" === _v8) throw Error(_v3.BUMPER_UPLOAD_FAILED);
            let _v10 = await (0, _v8.rtkPoll)({
              url: _v9.substring(1),
              fetchWithBaseQuery: _v3,
              shouldKeepPolling: _v0 => _v0?.data?.job_status === _v7.PollingStatus.IN_PROGRESS
            });
            return {
              data: {
                uploadedAssetId: _v10.data?.uri?.match(/[^\/]*$/)?.[0] || ""
              }
            };
          },
          invalidatesTags: ["IntroOutroData"]
        }),
        uploadBrandkitLogo: _v0.mutation({
          extraOptions: {
            apiServer: _v11.ApiServer.VIMEO
          },
          queryFn: async (_v0, _v1, _v2, _v3) => {
            try {
              let _v0 = _v0.organizationId || _v4.default.teamOwnerId,
                _v1 = _v0.file.type.split("/")[1],
                _v2 = {
                  asset_type: "logo",
                  file_name: _v0.file.name,
                  file_size: _v0.file.size.toString()
                },
                _v3 = await _v3({
                  url: `users/${_v0}/brandkits/upload_asset`,
                  method: "POST",
                  body: _v2
                });
              if (_v3.error) return _v3;
              let _v4 = _v3.data.upload_link,
                _v5 = await fetch(_v4, {
                  method: "PUT",
                  body: _v0.file,
                  headers: {
                    "Content-Type": _v0.file.type
                  }
                }),
                _v6 = (await _v5.json()).Path.split("/").pop(),
                _v7 = {
                  name: (0, _v2.generateFileName)(_v0.file.name, _v1),
                  file_name: _v0.file.name,
                  is_default: !1 !== _v0.isDefault,
                  storage_asset_id: _v6
                },
                _v8 = await _v3({
                  url: `users/${_v0}/brandkits/${_v0.brandKitId}/logos`,
                  method: "POST",
                  body: _v7
                });
              return (0, _v9.camelize)(_v8);
            } catch (_v0) {
              throw Error(_v3.BRAND_LOGO_UPLOAD_FAILED);
            }
          },
          invalidatesTags: ["BrandKitLogos"]
        })
      })
    }),
    {
      useGetBrandKitsLogosQuery: _v13,
      useLazyGetBrandKitsLogosQuery: _v14,
      useFetchIntroOutroQuery: _v15,
      useDeleteIntroOutroMutation: _v16,
      useCreateBrandKitMutation: _v17,
      useDeleteBrandkitLogoMutation: _v18,
      useUploadBrandkitLogoMutation: _v19,
      useUploadAndCreateIntroOutroMutation: _v20
    } = _v12;
  _v0.s(["brandApi", 0, _v12, "useCreateBrandKitMutation", 0, _v17, "useDeleteBrandkitLogoMutation", 0, _v18, "useDeleteIntroOutroMutation", 0, _v16, "useFetchIntroOutroQuery", 0, _v15, "useGetBrandKitsLogosQuery", 0, _v13, "useLazyGetBrandKitsLogosQuery", 0, _v14, "useUploadAndCreateIntroOutroMutation", 0, _v20, "useUploadBrandkitLogoMutation", 0, _v19]);
}