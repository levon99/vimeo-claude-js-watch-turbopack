{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  function _v7({
    getBaseUrl: _v0,
    isRetryOnError: _v1 = !0,
    refreshesMagistoSession: _v2 = !1,
    ..._v3
  }) {
    let _v4 = (0, _v1.fetchBaseQuery)(_v3);
    function _v5(_v0, _v1) {
      let _v2 = "string" == typeof _v0 ? _v0 : _v0.url,
        _v3 = `${_v1}${_v2}`;
      return "string" == typeof _v0 ? _v3 : {
        ..._v0,
        url: _v3
      };
    }
    return _v1 ? (0, _v1.retry)(async (_v0, _v1, _v2) => {
      let _v3 = await _v4(_v5(_v0, _v0()), _v1, _v2);
      if (_v3.error) if (401 === _v3.error.status && _v2 && _v5.default.authenticate) {
        let _v0;
        _v4.default.sendLog(_v3.UNAUTHORIZED, _v6.LogComponent.EDITOR_API_ERROR, {
          error: "got 401, refetch token",
          vimeoSessionId: _v5.default.getVimeoSessionId()
        });
        try {
          _v0 = await _v5.default.authenticate(!0);
        } catch {
          _v4.default.sendLog(_v3.UNAUTHORIZED, _v6.LogComponent.EDITOR_API_ERROR, {
            error: "auth refresh rejected"
          }), _v1.retry.fail(_v3.error);
        }
        if (_v0 && _v0.sessionId) {
          let _v0 = _v0.sessionId;
          _v5.default.setVimeoSessionId(_v0), _v4.default.sendLog(_v3.UNAUTHORIZED, _v6.LogComponent.EDITOR_API_ERROR, {
            error: "got new token",
            vimeoSessionId: _v0
          });
          let _v1 = await _v4(_v5(_v0, _v0()), _v1, _v2);
          return _v1.error && _v1.retry.fail(_v1.error), _v1;
        }
        _v4.default.sendLog(_v3.UNAUTHORIZED, _v6.LogComponent.EDITOR_API_ERROR, {
          error: "fail to set storyboard with new token"
        }), _v1.retry.fail(_v3.error);
      } else {
        if (504 === _v3.error.status || 500 === _v3.error.status || _v3.error.status === _v2.FETCH_ERROR) return _v3;
        _v1.retry.fail(_v3.error);
      }
      return _v3;
    }, {
      maxRetries: 3
    }) : (_v0, _v1, _v2) => _v4(_v5(_v0, _v0()), _v1, _v2);
  }
  _v0.s(["baseQueryFactory", 0, _v7], 0);
  let _v8 = [{
      name: "fetchGraphicsCategories",
      urlPattern: "*/stickerlib/gallery?tag=editor",
      getResponseBody: async () => await _v0.A(0)
    }, {
      name: "fetchGraphicsCategories",
      urlPattern: "*/stickerlib/gallery?tag=interactive",
      getResponseBody: async () => await _v0.A(0)
    }, {
      name: "fetchGraphics",
      urlPattern: "*/stickerlib/gallery?p=*&category_id=*&tag=editor",
      getResponseBody: async () => await _v0.A(0)
    }, {
      name: "fetchGraphics",
      urlPattern: "*/stickerlib/gallery?p=*&category_id=*&tag=interactive",
      getResponseBody: async () => await _v0.A(0)
    }, {
      name: "fetchStoryboard",
      urlPattern: "*/storyboard/*?v=11&version_id=*&interactive=1&vimeoversion_source=true",
      getResponseBody: async () => await _v0.A(0)
    }, {
      name: "fetchTransitionLibrary",
      urlPattern: "*/transitions",
      getResponseBody: async () => await _v0.A(0)
    }],
    _v9 = _v8.map(({
      name: _v0
    }) => _v0),
    _v10 = _v7({
      getBaseUrl: () => "",
      fetchFn: async _v0 => {
        let _v1 = "string" == typeof _v0 ? _v0 : _v0.url,
          _v2 = _v8.find(_v0 => {
            var _v1;
            let _v2;
            return _v1 = _v1, _v2 = _v0.urlPattern.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\\\*/g, ".*"), RegExp(`^${_v2}$`).test(_v1);
          });
        if (!_v2) throw Error(`Could not find a mocked for the URL: ${_v1}`);
        return new Response(JSON.stringify(await _v2.getResponseBody()), {
          status: 200,
          headers: new Headers({
            "Content-Type": "application/json"
          })
        });
      }
    }),
    _v11 = {
      CREATE: "create",
      VIMEO: "vimeo"
    };
  _v0.s(["ApiServer", 0, _v11, "baseQuery", 0, (_v0, _v1, {
    apiServer: _v2,
    isRetryOnError: _v3 = !0,
    ..._v4
  }) => {
    let _v5;
    if (_v5 = _v1.endpoint, window.location.search.includes("mockingApis=true") && _v9.includes(_v5)) return _v10(_v0, _v1, _v4);
    switch (_v2) {
      case _v11.CREATE:
        return _v7({
          getBaseUrl: () => `${_v5.default.serverUrl}/api/`,
          isRetryOnError: _v3,
          refreshesMagistoSession: !0,
          prepareHeaders: _v0 => (_v0.set("Accept", "application/json"), _v0.set("Authorization", _v5.default.getVimeoSessionId()), _v0.set("X-Requested-With", "XMLHttpRequest"), _v0),
          credentials: "include"
        })(_v0, _v1, _v4);
      case _v11.VIMEO:
        return _v7({
          getBaseUrl: () => `//${_v5.default.vimeoApiUrl}/`,
          isRetryOnError: _v3,
          prepareHeaders: _v0 => (_v0.set("Accept", "application/json"), _v0.set("Authorization", `jwt ${_v5.default.jwt}`), _v0),
          credentials: "same-origin"
        })(_v0, _v1, _v4);
      default:
        throw Error(_v2 ? `Unknown \`apiServer\` value "${_v2}". It should be either "${_v11.CREATE}" or "${_v11.VIMEO}".` : `Please add \`extraOption\` parameter with mandatory \`apiServer\` field to \`${_v1.endpoint}\` endpoint definition.`);
    }
  }], 0);
}