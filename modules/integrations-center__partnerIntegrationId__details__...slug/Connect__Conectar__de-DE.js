{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  _v0.s(["Connect", 0, function ({
    partnerIntegrationId: _v0,
    method: _v1 = "GET",
    url: _v2,
    enterpriseUrl: _v3,
    ciUrl: _v4,
    showTerms: _v5 = !1,
    text: _v6 = (0, _v5.translate)({
      singular: "Connect",
      dictionary: {
        es: {
          singular: "Conectar"
        },
        "de-DE": {
          singular: "Verbinden"
        },
        "fr-FR": {
          singular: "Connecter"
        },
        "ja-JP": {
          singular: "接続"
        },
        "ko-KR": {
          singular: "연결"
        },
        "pt-BR": {
          singular: "Conectar"
        },
        "zh-CN": {
          singular: "关联"
        }
      }
    }),
    isDisabled: _v7 = !1,
    isReconnect: _v8 = !1,
    width: _v9,
    appName: _v10
  }) {
    let _v11 = (0, _v2.useRouter)(),
      {
        isEnterpriseSite: _v12,
        xsrft: _v13
      } = (0, _v3.useContext)(_v6.ViewerContext) || {},
      _v14 = _v8 ? (0, _v5.translate)({
        singular: "Reconnect",
        dictionary: {
          es: {
            singular: "Reconectar"
          },
          "de-DE": {
            singular: "Erneut verbinden"
          },
          "fr-FR": {
            singular: "Reconnecter"
          },
          "ja-JP": {
            singular: "再接続"
          },
          "ko-KR": {
            singular: "다시 연결"
          },
          "pt-BR": {
            singular: "Reconectar"
          },
          "zh-CN": {
            singular: "重新连接"
          }
        }
      }) : _v6,
      {
        sendConnectionEvent: _v15
      } = (0, _v7.useTracking)(),
      _v16 = () => _v15({
        isConnect: !0,
        buttonText: _v14,
        integrationName: _v10
      }),
      _v17 = (0, _v3.useMemo)(() => _v5 ? `/integrations-center/${_v0}/terms` : _v4 && ((0, _v8.isCIEnv)() || (0, _v8.isLocalDevEnv)()) ? _v4 : _v3 && _v12 ? _v3 : _v2, [_v4, _v3, _v12, _v0, _v5, _v2]);
    return "POST" === _v1.toUpperCase() ? (0, _v1.jsxs)("form", {
      method: _v1,
      action: _v2,
      children: [(0, _v1.jsx)(_v4.Button, {
        type: "submit",
        variant: "primary",
        size: "md",
        isDisabled: _v7,
        width: _v9,
        onClick: _v16,
        children: _v14
      }), (0, _v1.jsx)("input", {
        name: "token",
        value: _v13,
        hidden: !0
      })]
    }) : (0, _v1.jsx)(_v4.Button, {
      variant: "primary",
      size: "md",
      onClick: () => {
        _v16(), _v11.push(_v17);
      },
      isDisabled: _v7,
      width: _v9,
      children: _v14
    });
  }]);
}