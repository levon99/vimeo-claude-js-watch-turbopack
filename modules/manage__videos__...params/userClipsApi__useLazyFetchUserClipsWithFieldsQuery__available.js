{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = (0, _v1.createApi)({
      reducerPath: "userClipsApi",
      baseQuery: _v6.baseQueryWithAuth,
      endpoints: _v0 => ({
        fetchUserClipsWithFields: _v0.query({
          query: ({
            userId: _v0,
            fields: _v1,
            query: _v2
          }) => ({
            url: `/users/${_v0}/videos`,
            params: {
              fields: (0, _v5.fieldsToSnakeCase)(_v1),
              ...(0, _v3.deepSnakeCase)(_v2)
            }
          }),
          transformErrorResponse: _v0 => (0, _v2.camelize)(_v0.data),
          transformResponse: (_v0, _v1, {
            fields: _v2
          }) => (0, _v2.camelize)((0, _v4.buildResponse)(_v2, _v0))
        })
      })
    }),
    {
      useLazyFetchUserClipsWithFieldsQuery: _v8
    } = _v7;
  _v0.s(["useLazyFetchUserClipsWithFieldsQuery", 0, _v8, "userClipsApi", 0, _v7], 0);
  var _v9 = _v0.i(0);
  let _v10 = (0, _v9.createSelector)(_v0 => _v0.clip, _v0 => _v0.clipData.status),
    _v11 = (0, _v9.createSelector)(_v0 => _v0.clip, _v0 => _v0.clipData.isPlayable),
    _v12 = (0, _v9.createSelector)(_v0 => _v0.clip, _v0 => _v0.clipData?.transcode?.status),
    _v13 = (0, _v9.createSelector)(_v0 => _v0.clip, _v0 => "available" !== _v0.clipData.status && !_v0.clipData.isPlayable),
    _v14 = (0, _v9.createSelector)(_v0 => _v0.clip, _v0 => _v0.clipData.live?.status);
  _v0.s(["clipIsPlayableSelector", 0, _v11, "clipLiveStatusSelector", 0, _v14, "clipStatusSelector", 0, _v10, "clipTranscodeStatusSelector", 0, _v12, "isUploadingSelector", 0, _v13], 0);
}