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
    _v11 = _v0.i(0),
    _v12 = _v0.i(0);
  let _v13 = () => (0, _v1.jsxs)(_v7.Flex, {
    direction: "column",
    align: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    grow: 1,
    padding: (0, _v10.rem)(24),
    background: "background",
    children: [(0, _v1.jsx)(_v11.CircleExclamation, {
      boxSize: "2xl"
    }), (0, _v1.jsx)(_v8.Header, {
      size: "xl",
      marginY: (0, _v10.rem)(8),
      children: (0, _v12.translate)({
        singular: "This page isn’t available",
        dictionary: {
          es: {
            singular: "Esta página no está disponible"
          },
          "de-DE": {
            singular: "Diese Seite ist nicht verfügbar."
          },
          "fr-FR": {
            singular: "Cette page n'est pas disponible"
          },
          "ja-JP": {
            singular: "このページは利用できません"
          },
          "ko-KR": {
            singular: "이 페이지를 사용할 수 없습니다."
          },
          "pt-BR": {
            singular: "Esta página não está disponível"
          },
          "zh-CN": {
            singular: "此页面不可用"
          }
        }
      })
    }), (0, _v1.jsx)(_v9.Paragraph, {
      size: "lg",
      textAlign: "center",
      maxWidth: (0, _v10.rem)(400),
      marginBottom: (0, _v10.rem)(16),
      children: (0, _v12.translate)({
        singular: "The link might have expired",
        dictionary: {
          es: {
            singular: "Es posible que el enlace haya caducado"
          },
          "de-DE": {
            singular: "Der Link ist möglicherweise abgelaufen"
          },
          "fr-FR": {
            singular: "Le lien a peut-être expiré"
          },
          "ja-JP": {
            singular: "リンクが期限切れになっている可能性があります"
          },
          "ko-KR": {
            singular: "링크가 만료되었을 수 있습니다."
          },
          "pt-BR": {
            singular: "O link pode ter expirado"
          },
          "zh-CN": {
            singular: "链接可能已过期"
          }
        }
      })
    })]
  });
  var _v14 = _v0.i(0);
  let _v15 = () => (0, _v1.jsx)(_v7.Flex, {
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    bgColor: "background",
    children: (0, _v1.jsx)(_v14.Spinner, {
      size: "xl"
    })
  });
  var _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0);
  async function _v19({
    baseUrl: _v0,
    select: _v1,
    ..._v2
  }) {
    return (0, _v17.measureLatency)("getTokensInfo", "GET", async () => {
      let _v0 = await fetch(`${_v0}/tokens/info?fields=${_v1.map(_v18.intoSnakeCase).join(",")}`, {
        ..._v2,
        method: "GET"
      });
      if (!_v0.ok) throw new _v18.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v18.deepCamelCase)(_v1);
    });
  }
  _v0.s(["VpaasProvider", 0, function ({
    children: _v0,
    hasVpaasViewer: _v1,
    baseUrl: _v2
  }) {
    let {
        config: _v3,
        error: _v4
      } = (0, _v16.useIntegration)({
        loadConfig: _v1
      }),
      {
        vpaasViewer: _v5,
        vpaasViewerError: _v6
      } = function ({
        baseUrl: _v0,
        jwtAccessToken: _v1
      }) {
        let [_v2, _v3] = (0, _v3.useState)(null),
          [_v4, _v5] = (0, _v3.useState)(null);
        return (0, _v3.useEffect)(() => {
          if (!_v1 || !_v0) return;
          let _v0 = !1;
          return (async () => {
            try {
              _v5(null);
              let _v0 = await _v19({
                baseUrl: _v0,
                select: ["name", "email", "externalId"],
                headers: new Headers({
                  Authorization: `jwt ${_v1}`
                })
              });
              _v0 || _v3({
                user: {
                  id: _v0.externalId,
                  name: _v0.name,
                  email: _v0.email
                },
                locale: ("u" > typeof navigator ? navigator.language : "en-US") ?? "en-US"
              });
            } catch (_v0) {
              _v0 || _v5(_v0);
            }
          })(), () => {
            _v0 = !0;
          };
        }, [_v0, _v1]), {
          vpaasViewer: _v2,
          vpaasViewerError: _v4
        };
      }({
        baseUrl: _v2,
        jwtAccessToken: _v3?.accessToken
      }),
      _v7 = (0, _v3.useMemo)(() => ({
        isEnabled: !0,
        producerTitle: _v3?.producerTitle
      }), [_v3?.producerTitle]),
      _v8 = (0, _v2.useRouter)().pathname,
      _v9 = (0, _v3.useMemo)(() => {
        let _v0 = new URLSearchParams(window?.location.search ?? ""),
          _v1 = _v0.get("dbg-jwt-override"),
          _v2 = _v0.get("dbg-locale-override");
        return {
          baseUrl: _v2,
          xVimeoPage: _v8,
          jwt: _v1 ?? _v3?.accessToken,
          locale: _v2 ?? _v5?.locale
        };
      }, [_v2, _v8, _v3, _v5]);
    return _v1 ? (_v3 || _v4) && (_v5 || _v6) ? _v4 || _v6 ? (0, _v1.jsx)(_v13, {}) : (0, _v1.jsx)(_v6.VpaasContext.Provider, {
      value: _v7,
      children: (0, _v1.jsx)(_v5.ViewerContext.Provider, {
        value: _v5,
        children: (0, _v1.jsx)(_v4.GctlProvider, {
          jwt: _v9.jwt,
          baseUrl: _v9.baseUrl,
          locale: _v9.locale,
          xVimeoPage: _v9.xVimeoPage,
          children: _v0
        })
      })
    }) : (0, _v1.jsx)(_v15, {}) : (0, _v1.jsx)(_v6.VpaasContext.Provider, {
      value: _v7,
      children: _v0
    });
  }], 0);
}