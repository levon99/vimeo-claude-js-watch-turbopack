{
  "use strict";

  _v0.s(["clipApi", () => _v13, "useLazyFetchClipWithFieldsQuery", () => _v14, "useUpdateClipMutation", () => _v15], 0), _v0.s(["clipSlice", () => _v11, "default", () => _v12], 0);
  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0);
  let _v10 = (_v0, _v1) => {
      for (let _v0 in _v1) "object" != typeof _v1[_v0] || null === _v1[_v0] || Array.isArray(_v1[_v0]) ? _v0[_v0] = _v1[_v0] : (("object" != typeof _v0[_v0] || null === _v0[_v0]) && (_v0[_v0] = {}), _v10(_v0[_v0], _v1[_v0]));
    },
    _v11 = (0, _v7.createSlice)({
      name: "clip",
      initialState: {
        clipId: 0,
        clipHash: void 0,
        clipData: {
          name: "",
          description: "",
          status: "unavailable",
          transcode: {
            status: void 0
          }
        },
        fields: {},
        clipDataWithQueryModifications: {},
        isInitialized: !1
      },
      reducers: {
        setInitialized: _v0 => {
          _v0.isInitialized = !0;
        },
        update: (_v0, _v1) => {
          _v10(_v0.clipData, _v1.payload);
        },
        hydrateFromSSR: (_v0, _v1) => {
          let _v2 = _v1.payload,
            {
              clipId: _v3,
              clipHash: _v4
            } = (0, _v9.getClipIdentifiersFromVideoData)(_v2);
          _v3 > 0 && (_v0.clipId = _v3, _v0.clipHash = _v4), _v10(_v0.clipData, _v2), _v0.isInitialized = !0;
        }
      },
      extraReducers: _v0 => {
        _v0.addMatcher(_v13.endpoints.fetchClipWithFields.matchFulfilled, (_v0, _v1) => {
          if (!(0, _v8.isErrorResponse)(_v1.payload)) {
            if (_v1.payload.manageLink) {
              let _v0 = _v1.payload.manageLink.split("/");
              _v0.clipId = Number(_v0[3]), _v0.clipHash = _v0[4];
            }
            _v1.meta.arg.originalArgs.fields.forEach(_v0 => {
              _v0.fields[_v0] = !0;
            });
            let _v0 = Object.assign({}, _v1.payload);
            if (_v1.meta.arg.originalArgs.query?.responsive === !0 && _v0.embed?.html) {
              _v0.fields["embed.html-responsive"] = !0;
              let _v0 = {
                embed: {
                  html: _v0.embed.html
                }
              };
              delete _v0.embed.html, _v10(_v0.clipDataWithQueryModifications, _v0);
            }
            if (_v1.meta.arg.originalArgs.query?.videoLinks === "non_expiring") {
              let _v0 = {};
              if (_v0.download) {
                _v0.fields["download.link-videoLinks"] = !0;
                let _v0 = [];
                _v0.download.forEach(_v0 => {
                  _v0.push({
                    link: _v0.link
                  }), delete _v0.link;
                }), _v0.download = _v0;
              }
              _v0.play?.dash?.link && (_v0.fields["play.dash.link-videoLinks"] = !0, _v0.play || (_v0.play = {}), _v0.play.dash = {
                link: _v0.play.dash.link
              }, delete _v0.play.dash.link), _v0.play?.hls?.link && (_v0.fields["play.hls.link-videoLinks"] = !0, _v0.play || (_v0.play = {}), _v0.play.hls = {
                link: _v0.play.hls.link
              }, delete _v0.play.hls.link), _v0.play?.progressive?.link && (_v0.fields["play.progressive.link-videoLinks"] = !0, _v0.play || (_v0.play = {}), _v0.play.progressive = {
                link: _v0.play.progressive.link
              }, delete _v0.play.progressive.link), _v10(_v0.clipDataWithQueryModifications, _v0);
            }
            _v10(_v0.clipData, _v0);
          }
        }).addMatcher(_v13.endpoints.updateClip.matchFulfilled, (_v0, _v1) => {
          (0, _v8.isErrorResponse)(_v1.payload) || _v10(_v0.clipData, _v1.payload);
        });
      }
    }),
    _v12 = _v11.reducer,
    _v13 = (0, _v1.createApi)({
      reducerPath: "clipApi",
      baseQuery: _v6.baseQueryWithAuth,
      endpoints: _v0 => ({
        fetchClipWithFields: _v0.query({
          query: ({
            clipId: _v0,
            clipHash: _v1,
            fields: _v2,
            transparent: _v3,
            accessGates: _v4,
            autoplay: _v5,
            query: _v6
          }) => ({
            url: `/videos/${_v1 ? `${_v0}:${_v1}` : _v0}`,
            params: {
              fields: (0, _v5.fieldsToSnakeCase)(_v2),
              transparent: _v3,
              access_gates: _v4,
              autoplay: _v5,
              ...(0, _v3.deepSnakeCase)(_v6)
            }
          }),
          transformErrorResponse: _v0 => (0, _v2.camelize)(_v0.data),
          transformResponse: (_v0, _v1, {
            fields: _v2
          }) => (0, _v2.camelize)((0, _v4.buildResponse)(_v2, _v0))
        }),
        updateClip: _v0.mutation({
          query: ({
            clipId: _v0,
            fields: _v1
          }) => ({
            url: `/videos/${_v0}`,
            method: "PATCH",
            body: JSON.stringify((0, _v5.patchFieldsToSnakeCase)(_v1)),
            headers: {
              "Content-Type": "application/json"
            }
          }),
          onQueryStarted: async ({
            fields: _v0
          }, {
            dispatch: _v1,
            queryFulfilled: _v2,
            getState: _v3
          }) => {
            let _v4 = _v3().clip.clipData;
            if (_v4) {
              _v1(_v11.actions.update(_v0));
              try {
                await _v2;
              } catch {
                _v1(_v11.actions.update(_v4));
              }
            }
          },
          transformErrorResponse: _v0 => (0, _v2.camelize)(_v0.data),
          transformResponse: _v0 => (0, _v2.camelize)(_v0)
        })
      })
    }),
    {
      useLazyFetchClipWithFieldsQuery: _v14,
      useUpdateClipMutation: _v15
    } = _v13;
}