{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = (_v0, _v1) => _v0.length === _v1.length && (_v0.sort(), _v1.sort(), _v0.join("") === _v1.join("")),
    _v8 = (0, _v1.createApi)({
      reducerPath: "clipVersionsApi",
      baseQuery: _v6.baseQueryWithAuth,
      endpoints: _v0 => ({
        fetchClipVersionsWithFields: _v0.query({
          query: ({
            clipId: _v0,
            fields: _v1
          }) => ({
            url: `/videos/${_v0}/versions`,
            params: {
              fields: (0, _v5.fieldsToSnakeCase)(_v1)
            }
          }),
          transformErrorResponse: _v0 => (0, _v2.camelize)(_v0.data),
          transformResponse: (_v0, _v1, {
            fields: _v2
          }) => (0, _v2.camelize)((0, _v4.buildResponse)(_v2, _v0.data)),
          serializeQueryArgs: ({
            queryArgs: _v0
          }) => {
            let {
              clipId: _v1
            } = _v0;
            return _v1;
          },
          forceRefetch({
            currentArg: _v0,
            previousArg: _v1
          }) {
            let {
                fields: _v2
              } = _v0 || {},
              {
                fields: _v3
              } = _v1 || {};
            return !_v2 || !_v3 || !_v7(_v2, _v3);
          },
          merge: (_v0, _v1) => {
            if (!(0, _v3.isErrorResponse)(_v1)) {
              if ((0, _v3.isErrorResponse)(_v0)) return _v1;
              _v0.forEach((_v0, _v1) => {
                _v0[_v1] = {
                  ..._v0,
                  ..._v1[_v1]
                };
              });
            }
          }
        }),
        fetchClipVersionByIdWithFields: _v0.query({
          query: ({
            clipId: _v0,
            versionId: _v1,
            fields: _v2
          }) => ({
            url: `/videos/${_v0}/versions/${_v1}`,
            params: {
              fields: (0, _v5.fieldsToSnakeCase)(_v2)
            }
          }),
          transformErrorResponse: _v0 => (0, _v2.camelize)(_v0.data),
          transformResponse: (_v0, _v1, {
            fields: _v2
          }) => (0, _v2.camelize)((0, _v4.buildResponse)(_v2, _v0)),
          serializeQueryArgs: ({
            queryArgs: _v0
          }) => {
            let {
              clipId: _v1,
              versionId: _v2
            } = _v0;
            return `${_v1}/${_v2}`;
          },
          forceRefetch({
            currentArg: _v0,
            previousArg: _v1
          }) {
            let {
                fields: _v2
              } = _v0 || {},
              {
                fields: _v3
              } = _v1 || {};
            return !_v2 || !_v3 || !_v7(_v2, _v3);
          },
          merge: (_v0, _v1) => {
            if (!(0, _v3.isErrorResponse)(_v1)) return (0, _v3.isErrorResponse)(_v0) ? _v1 : {
              ..._v0,
              ..._v1
            };
          }
        })
      })
    }),
    {
      useLazyFetchClipVersionsWithFieldsQuery: _v9,
      useFetchClipVersionByIdWithFieldsQuery: _v10,
      useLazyFetchClipVersionByIdWithFieldsQuery: _v11
    } = _v8;
  _v0.s(["clipVersionsApi", 0, _v8, "useFetchClipVersionByIdWithFieldsQuery", 0, _v10]);
}