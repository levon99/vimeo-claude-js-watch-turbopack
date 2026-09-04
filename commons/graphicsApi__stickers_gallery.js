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
  _v0.s(["graphicsApi", 0, _v4]);
}