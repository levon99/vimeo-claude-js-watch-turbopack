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
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0);
  function _v22({
    disclaimer: _v0,
    userInfo: _v1,
    termsAndConditions: _v2,
    onSocialLoginClick: _v3,
    onSocialLoginSubmit: _v4,
    target: _v5 = "_self",
    onAuthSuccess: _v6,
    thirdPartyIntegration: _v7
  }) {
    let _v8 = (0, _v4.useContext)(_v11.ViewerContext),
      _v9 = (0, _v2.useRouter)(),
      _v10 = _v9.query,
      _v11 = _v9.pathname === _v12.RequiredOAuthPaths.login,
      [_v12, _v13] = (0, _v4.useState)(+!!_v11),
      _v14 = window?.location?.search ?? "",
      _v15 = _v9.pathname + _v14,
      _v16 = _v10?.name && decodeURIComponent(_v10.name),
      _v17 = _v10?.email_policy && decodeURIComponent(_v10.email_policy),
      _v18 = !!_v17,
      _v19 = _v10?.use_sso && decodeURIComponent(_v10.use_sso),
      _v20 = _v10?.email && decodeURIComponent(_v10.email);
    _v17 && _v1?.managed_user?.email ? _v20 = _v1.managed_user.email : _v17 && (_v20 = _v17);
    let [_v21, _v22] = (0, _v4.useState)(_v20),
      [_v23, _v24] = (0, _v4.useState)(_v21.ssoDataInitialState),
      [_v25, _v26] = (0, _v4.useState)(_v23.SSO || !!_v19),
      _v27 = _v0 => (_v22(_v0), (0, _v21.validateSSOEmail)(_v0, _v24));
    (0, _v4.useEffect)(() => {
      (0, _v21.validateSSOEmail)(_v20 ?? "", _v24);
    }, [_v20]);
    let {
      managed_user_id: _v28
    } = _v10;
    _v28 || (_v28 = _v1?.managed_user?.id ? _v1.managed_user.id.toString() : "");
    let _v29 = {
        label: (0, _v16.translate)({
          singular: "Join Vimeo",
          dictionary: {
            es: {
              singular: "Unirse a Vimeo"
            },
            "de-DE": {
              singular: "Registriere dich bei Vimeo"
            },
            "fr-FR": {
              singular: "S'inscrire à Vimeo"
            },
            "ja-JP": {
              singular: "Vimeoに登録"
            },
            "ko-KR": {
              singular: "Vimeo 가입"
            },
            "pt-BR": {
              singular: "Cadastre-se no Vimeo"
            },
            "zh-CN": {
              singular: "加入 Vimeo"
            }
          }
        }),
        tabId: "auth-join",
        content: (0, _v1.jsx)(_v19.JoinForm, {
          xsrft: _v8?.xsrft ?? "",
          redirectUrl: _v15,
          name: _v16,
          email: _v21,
          disableEmail: _v18,
          disclaimer: _v0,
          termsAndConditions: _v2,
          shouldOptIntoMarketing: _v8?.shouldOptIntoMarketing,
          onSuccess: _v6("sign_up"),
          onEmailChange: (0, _v15.default)(_v27, 500),
          onSocialLoginClick: _v3,
          onSocialLoginSubmit: _v4,
          target: _v5,
          fa: {
            container: "onboarding",
            thirdPartyIntegration: _v7
          }
        })
      },
      _v30 = {
        label: (0, _v16.translate)({
          singular: "Log in",
          dictionary: {
            es: {
              singular: "Iniciar sesión"
            },
            "de-DE": {
              singular: "Anmelden"
            },
            "fr-FR": {
              singular: "Se connecter"
            },
            "ja-JP": {
              singular: "ログイン"
            },
            "ko-KR": {
              singular: "로그인"
            },
            "pt-BR": {
              singular: "Entrar"
            },
            "zh-CN": {
              singular: "登录"
            }
          }
        }),
        tabId: "auth-login",
        content: (0, _v1.jsx)(_v19.LoginForm, {
          xsrft: _v8?.xsrft ?? "",
          redirectUrl: _v15,
          email: _v21,
          disableEmail: _v18,
          termsAndConditions: _v2,
          onSuccess: _v6("sign_in"),
          onEmailChange: (0, _v15.default)(_v27, 500),
          onSocialLoginClick: _v3,
          onSocialLoginSubmit: _v4,
          target: _v5,
          fa: {
            container: "onboarding",
            thirdPartyIntegration: _v7
          }
        })
      },
      _v31 = !0,
      _v32 = !0;
    _v18 && (_v31 = !(_v32 = !_v1?.managed_user?.email && !_v1?.vimeo_user_exists));
    let _v33 = [];
    if (_v32 && _v33.push(_v29), _v31 && _v33.push(_v30), !_v8) return null;
    if (_v23.SSO || _v25) return (0, _v1.jsx)(_v20.default, {
      email: _v21,
      isSSO: _v23.SSO,
      onEmailChange: (0, _v15.default)(_v27, 500),
      handleSSOLogin: () => {
        let _v0 = _v23.prevPage || `${_v12.RequiredOAuthPaths.authorize}${_v14}`,
          _v1 = `${_v23?.customDomain || ""}/auth0/connect?connection=${_v23.connection}&prev_page=${encodeURIComponent(_v0)}`;
        window.location.assign(_v1);
      },
      disableEmailUpdate: _v18,
      checkInProgress: _v23.checkInProgress,
      onSSOFlowChoice: _v0 => _v26(_v0),
      firstTimeSSOLogin: _v23.firstTimeSSOLogin
    });
    if (1 === _v33.length) {
      let _v0 = _v33[0];
      return (0, _v1.jsxs)("div", {
        style: {
          width: "100%"
        },
        children: [(0, _v1.jsx)(_v18.Header, {
          size: "4",
          children: _v0.label
        }), _v0.content]
      });
    }
    return (0, _v1.jsx)(_v17.Tabs, {
      style: {
        width: "100%"
      },
      children: _v33.map((_v0, _v1) => (0, _v1.jsx)(_v17.Tabs.Panel, {
        active: _v1 === _v12,
        label: _v0.label,
        id: _v0.tabId,
        onOpen: () => _v13(_v1),
        children: _v0.content
      }, `${_v0.tabId}-${_v1}`))
    });
  }
  var _v23 = _v0.i(0),
    _v24 = _v0.i(0);
  let _v25 = _v24.default.div.withConfig({
      displayName: "VenuesAppHeader__VenuesAppWrapper",
      componentId: "sc-723ac717-0"
    })`
  padding: ${(0, _v23.rem)(20)} 0;
  border-bottom-color: #525252;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  background-color: ${_v0 => _v0.theme.content.background};
  display: flex;
  justify-content: center;
  align-items: center;
`,
    _v26 = (0, _v24.default)(_v18.Header).withConfig({
      displayName: "VenuesAppHeader__HeaderTitle",
      componentId: "sc-723ac717-1"
    })`
  margin-bottom: 0;
`,
    _v27 = () => (0, _v1.jsx)(_v25, {
      children: (0, _v1.jsx)(_v26, {
        size: "3",
        children: (0, _v16.translate)({
          singular: "Connect to Vimeo",
          dictionary: {
            es: {
              singular: "Conectar con Vimeo"
            },
            "de-DE": {
              singular: "Verknüpfe dich mit Vimeo"
            },
            "fr-FR": {
              singular: "Connexion à Vimeo"
            },
            "ja-JP": {
              singular: "Vimeoに接続する"
            },
            "ko-KR": {
              singular: "Vimeo에 연결"
            },
            "pt-BR": {
              singular: "Conectar ao Vimeo"
            },
            "zh-CN": {
              singular: "连接到 Vimeo"
            }
          }
        })
      })
    });
  var _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0);
  function _v31({
    userInfo: _v0
  }) {
    let {
        setTheme: _v1
      } = (0, _v4.useContext)(_v6.ThemeDispatchContext),
      _v2 = (0, _v4.useContext)(_v11.ViewerContext),
      _v3 = (0, _v2.useRouter)(),
      _v4 = _v3.query,
      _v5 = "?" + _v3.default.stringify(_v4),
      {
        managed_user_id: _v6,
        via: _v7,
        third_party_integration: _v8
      } = _v4,
      _v9 = _v8 ?? (0, _v30.getTrackingName)(_v0.app_id, _v7);
    _v6 && (0, _v8.saveCookie)({
      name: "was_managed_user",
      value: "true",
      path: "/"
    });
    let {
        data: _v10,
        loading: _v11
      } = (0, _v7.useQuery)(`/apps/${_v0.app_id}?fields=name,thumbnail`),
      _v12 = _v3.pathname === _v12.RequiredOAuthPaths.join,
      _v13 = (0, _v4.useCallback)(_v0 => () => {
        _v5.BigPictureClient.sendEvent(new _v5.Event("vimeo_com.account_connection", 3, {
          component: _v0,
          type: "submit",
          account_type: null,
          managed_user_id: _v6 ?? null,
          user_id: _v2?.user?.id ? `${_v2.user.id}` : null,
          product: _v7 ?? _v9,
          device_id: _v2?.vuid ?? null,
          third_party_integration: _v9
        })), window.location.href = `${_v12.RequiredOAuthPaths.authorize}${_v5}`;
      }, [_v5, _v6, _v2?.user?.id, _v2?.vuid, _v7, _v9]),
      _v14 = null;
    _v0.app_id && _v10 && (_v14 = (0, _v30.getCopyForApp)(_v0.app_id, _v10));
    let _v15 = _v0.app_id === _v30.PartnerAppIds.VenuesDevelopmentApp;
    return (0, _v4.useEffect)(() => {
      _v15 ? _v1(_v9.themes.dark) : _v1(_v9.themes.light);
    }, [_v15, _v1]), (0, _v1.jsxs)(_v14.LoginWrapper, {
      children: [_v15 && (0, _v1.jsx)(_v27, {}), (0, _v1.jsx)(_v14.Layout, {
        children: _v2 && _v14 && !_v11 ? (0, _v1.jsxs)(_v1.Fragment, {
          children: [!_v15 && (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v13.default, {
              logo: _v14.logo
            }), (0, _v1.jsx)(_v14.PromptHeading, {
              size: "4",
              children: _v12 ? _v14.getJoinHeading() : _v14.getLoginHeading()
            })]
          }), (0, _v1.jsx)(_v14.PromptMessage, {
            size: "2",
            children: _v12 ? _v14.getJoinPrompt() : _v14.getLoginPrompt()
          }), _v14.getHeaderDisclaimer() && (0, _v1.jsx)(_v14.PromptMessage, {
            size: "2",
            children: _v14.getHeaderDisclaimer()
          }), (0, _v1.jsx)(_v22, {
            disclaimer: _v14.getDisclaimer(),
            termsAndConditions: _v14.getTermsAndConditions(),
            userInfo: _v0,
            target: "_self",
            onSocialLoginClick: function (_v0) {
              _v5.BigPictureClient.sendEvent(new _v5.Event("vimeo_com.account_connection", 3, {
                component: _v0 ? _v0 + "_social_login" : "social_login",
                type: "submit",
                account_type: null,
                managed_user_id: _v6 ?? null,
                user_id: _v2?.user?.id ? `${_v2.user.id}` : null,
                product: _v7 ?? _v9,
                device_id: _v2?.vuid ?? null,
                third_party_integration: _v9
              }));
            },
            onAuthSuccess: _v13,
            thirdPartyIntegration: _v9
          })]
        }) : (0, _v1.jsx)(_v14.Loader, {})
      }), (0, _v1.jsx)(_v10.MinimalFooterLayout, {})]
    });
  }
  _v0.s(["default", 0, function () {
    let _v0 = (0, _v4.useContext)(_v11.ViewerContext),
      _v1 = (0, _v2.useRouter)(),
      _v2 = _v1.query,
      {
        isLoading: _v3
      } = (0, _v29.useValidateClientId)(),
      {
        isLoading: _v4,
        userInfo: _v5
      } = (0, _v28.useManagedUserOauthInfo)((0, _v28.decodeOAuthQuery)(_v2)),
      _v6 = _v0?.user?.uri;
    return ((0, _v4.useEffect)(() => {
      _v6 && _v1.push({
        pathname: _v12.RequiredOAuthPaths.authorize,
        query: _v1.query
      });
    }, [_v1, _v6]), _v4 || _v3 || !_v5.app_id) ? (0, _v1.jsx)(_v14.Layout, {
      children: (0, _v1.jsx)(_v14.Loader, {})
    }) : (0, _v1.jsx)(_v31, {
      userInfo: _v5
    });
  }], 0);
}