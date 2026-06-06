{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = (0, _v1.createApi)({
      reducerPath: "assetsApi",
      baseQuery: _v6.baseQuery,
      endpoints: _v0 => ({
        fetchAssets: _v0.query({
          extraOptions: {
            apiServer: _v6.ApiServer.VIMEO
          },
          query: ({
            isTest: _v0,
            select: _v1,
            nonLatin: _v2 = !0
          }) => ({
            url: `create/editor/assets?fields=${_v1.join(",")}`,
            headers: {
              Authorization: `jwt ${_v4.default.jwt}`
            },
            params: {
              non_latin: _v2,
              is_test: _v0
            }
          }),
          async onQueryStarted(_v0, {
            queryFulfilled: _v1
          }) {
            _v0.select.includes("animations") && _v3.default.sendAction(_v2.EditorLoad, {
              step: "start fetch bodymovin skeletons"
            });
            try {
              await _v1;
            } finally {
              _v0.select.includes("animations") && _v3.default.sendAction(_v2.EditorLoad, {
                step: "end fetch bodymovin skeletons"
              });
            }
          },
          transformResponse: _v0 => (0, _v5.camelize)({
            ..._v0,
            ...(_v0.color_palettes && {
              color_palettes: Object.values(_v0.color_palettes)
            })
          })
        })
      })
    }),
    {
      useFetchAssetsQuery: _v8
    } = _v7;
  _v0.s(["assetsApi", 0, _v7, "useFetchAssetsQuery", 0, _v8]);
}