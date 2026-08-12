{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = (0, _v3.default)(function (_v0) {
      return (0, _v1.jsx)("svg", {
        viewBox: "0 0 214 1",
        xmlns: "http://www.w3.org/2000/svg",
        ..._v0,
        children: (0, _v1.jsx)("path", {
          d: "M0 0H212.278",
          stroke: "#B3BFC8",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeDasharray: "2 7"
        })
      });
    }).withConfig({
      displayName: "Header__Connector",
      componentId: "sc-3ee61cd7-0"
    })`
  width: 214px;
  height: 3px;
  padding-left: ${(0, _v2.rem)(8)};
`,
    _v7 = _v3.default.div.withConfig({
      displayName: "Header__Container",
      componentId: "sc-3ee61cd7-1"
    })`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 320px;
  margin: ${(0, _v2.rem)(12)} auto;
`,
    _v8 = (0, _v3.default)(_v5.VimeoV).withConfig({
      displayName: "Header__BlueVimeoV",
      componentId: "sc-3ee61cd7-2"
    })`
${_v3.css`
  * {
    fill: ${(0, _v4.blue)(400)};
  }
`}}

`;
  _v0.s(["default", 0, function ({
    logo: _v0
  }) {
    return (0, _v1.jsxs)(_v7, {
      children: [_v0 && (0, _v1.jsxs)(_v1.Fragment, {
        children: [_v0, (0, _v1.jsx)(_v6, {})]
      }), (0, _v1.jsx)(_v8, {
        height: "36"
      })]
    });
  }], 0);
  var _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0);
  async function _v14({
    baseUrl: _v0,
    select: _v1,
    where: {
      clientId: _v2
    },
    ..._v3
  }) {
    return (0, _v12.measureLatency)("getApp", "GET", async () => {
      let _v0 = await fetch(`${_v0}/apps/${_v2}?fields=${_v1.map(_v13.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "GET"
      });
      if (!_v0.ok) throw new _v13.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v13.deepCamelCase)(_v1);
    });
  }
  var _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0);
  function _v19(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v18.useGctlConfig)();
    return (0, _v15.default)(_v2 ? `/apps/${_v2.where.clientId}${(0, _v17.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v14({
      ..._v2,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      baseUrl: _v3
    }) : null, _v1);
  }
  "true" === _v11.default.env.STORYBOOK && (0, _v17.assignMswData)(_v19, {
    endpoint: "/apps/:clientId",
    method: "GET"
  }), "true" === _v11.default.env.STORYBOOK && (0, _v17.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v16.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v18.useGctlConfig)(),
      [_v5, _v6] = (0, _v17.useInternalState)();
    return [(0, _v10.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/apps/${_v0.where.clientId}${(0, _v17.serializeQuery)(_v0)}`, _v14({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }));
        _v6({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v6({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v1, _v3, _v2, _v4, _v6]), _v5];
  }, {
    endpoint: "/apps/:clientId",
    method: "GET"
  });
  var _v20 = _v0.i(0);
  let _v21 = "/oauth/error";
  _v0.s(["useValidateClientId", 0, function () {
    let _v0 = (0, _v9.useRouter)(),
      _v1 = (0, _v20.useViewer)(),
      {
        client_id: _v2
      } = _v0.query,
      {
        data: _v3,
        isLoading: _v4,
        error: _v5
      } = _v19(() => _v1 && _v2 ? {
        where: {
          clientId: _v2
        },
        select: ["uri"]
      } : null);
    return (0, _v10.useEffect)(() => {
      _v0.isReady && !_v2 && _v0.replace({
        pathname: _v21,
        query: _v0.query
      });
    }, [_v2, _v0, _v0.isReady]), (0, _v10.useEffect)(() => {
      _v3 || _v4 || !_v5 || _v0.replace({
        pathname: _v21,
        query: _v0.query
      });
    }, [_v3, _v4, _v5, _v0]), {
      isLoading: _v4,
      error: _v5
    };
  }], 0);
}