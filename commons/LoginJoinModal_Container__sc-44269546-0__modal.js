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
    _v14 = _v0.i(0);
  let _v15 = (0, _v3.default)(async () => ({
      default: (await _v0.A(0)).default
    }), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v16 = _v6.default.div.withConfig({
      displayName: "LoginJoinModal__Container",
      componentId: "sc-44269546-0"
    })`
  display: flex;
  flex-direction: column;
  margin: 0 ${(0, _v4.rem)(32)};

  @media screen and (max-width: ${(0, _v4.rem)(479)}) {
    margin: 0;
  }
`;
  function _v17({
    children: _v0,
    onSuccess: _v1,
    type: _v2,
    isShowing: _v3,
    disableDismiss: _v4,
    onDismiss: _v5,
    attribution: _v6,
    redirectUrlAfterSocialLogin: _v7,
    redirectUrl: _v8,
    showFBCreativeConnectJoinModal: _v9,
    target: _v10
  }) {
    let [_v11, _v12] = (0, _v5.useState)(!!_v3),
      [_v13, _v14] = (0, _v5.useState)(_v2),
      _v15 = (0, _v14.useAuthAttributionLifecycle)({
        isOpen: _v11,
        supplied: _v6,
        initialIntent: _v2,
        surfaceType: "modal"
      });
    (0, _v5.useEffect)(() => {
      _v14(_v2);
    }, [_v2]), (0, _v5.useEffect)(() => {
      _v12(!!_v3);
    }, [_v3]);
    let _v16 = () => {
      _v12(_v0 => !_v0);
    };
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [_v0 ? _v0(_v16) : null, (0, _v1.jsx)(_v15, {
        type: _v13,
        active: _v11,
        attribution: _v15 ?? void 0,
        disableDismiss: _v4,
        redirectUrlAfterSocialLogin: _v7,
        redirectUrl: _v8,
        showFBCreativeConnectJoinModal: _v9,
        target: _v10,
        onDismiss: () => {
          _v16(), _v5 && _v5(), _v14(_v2);
        },
        onSuccess: _v0 => {
          _v16(), _v1 && _v1(_v0);
        }
      })]
    });
  }
  let _v18 = (0, _v6.default)(_v17).withConfig({
    displayName: "LoginJoinModal__DefaultStyledLoginJoinModal",
    componentId: "sc-44269546-1"
  })`
  #joinModal,
  #loginModal {
    span {
      margin-left: 0;
    }
  }
`;
  _v0.s(["DefaultStyledLoginJoinModal", 0, _v18, "LoginContainer", 0, function ({
    onSuccess: _v0,
    shouldOptIntoMarketing: _v1,
    type: _v2,
    xsrft: _v3,
    switchType: _v4,
    faContainer: _v5,
    redirectUrl: _v6,
    name: _v7,
    email: _v8,
    redirectUrlAfterSocialLogin: _v9 = "",
    target: _v10,
    showFBCreativeConnectJoinModal: _v11
  }) {
    let [_v12, _v13] = (0, _v5.useState)(_v12.ssoDataInitialState),
      [_v14, _v15] = (0, _v5.useState)(_v8),
      [_v16, _v17] = (0, _v5.useState)(_v12.SSO),
      _v18 = (0, _v5.useContext)(_v8.ViewerContext);
    (0, _v5.useEffect)(() => {
      _v18 && (0, _v13.trackViewSignupLoginScreen)(_v5, _v18, _v11, _v2);
    }, []);
    let _v19 = _v0 => {
        _v15(""), _v17(_v0);
      },
      _v20 = _v0 => (_v15(_v0), (0, _v12.validateSSOEmail)(_v0, _v13));
    return (0, _v1.jsx)(_v16, {
      children: _v12.SSO || _v16 ? (0, _v1.jsx)(_v11.default, {
        email: _v14,
        isSSO: _v12.SSO,
        onEmailChange: (0, _v2.default)(_v20, 500),
        handleSSOLogin: () => (0, _v12.loginViaSSO)(_v12.connection, _v12.prevPage || _v6, _v12?.customDomain),
        checkInProgress: _v12.checkInProgress,
        onSSOFlowChoice: _v19,
        firstTimeSSOLogin: _v12.firstTimeSSOLogin,
        switchType: _v4
      }) : _v2 === _v9.MODAL_TYPE_LOGIN ? (0, _v1.jsx)(_v10.LoginForm, {
        xsrft: _v3,
        switchType: _v4,
        onSuccess: _v0,
        fa: _v5 ? {
          container: _v5,
          thirdPartyIntegration: _v11 ? "Facebook" : "none"
        } : void 0,
        email: _v14,
        onEmailChange: (0, _v2.default)(_v20, 500),
        redirectUrl: _v6,
        redirectUrlAfterSocialLogin: _v9,
        target: _v10,
        onSSOFlowChoice: _v19,
        showEnterpriseOptInConsent: _v12.showEnterpriseOptInConsent,
        isF2PVariant: !1
      }) : _v11 && -1 !== window.location.pathname.indexOf("/create") ? (0, _v1.jsx)(_v10.ConnectToFbForm, {
        onSuccess: _v0,
        switchType: _v4,
        xsrft: _v3,
        shouldOptIntoMarketing: _v1,
        redirectUrl: _v6,
        target: _v10
      }) : (0, _v1.jsx)(_v10.JoinForm, {
        onSuccess: _v0,
        shouldOptIntoMarketing: _v1,
        switchType: _v4,
        xsrft: _v3,
        fa: _v5 ? {
          container: _v5,
          thirdPartyIntegration: _v11 ? "Facebook" : "none"
        } : void 0,
        name: _v7,
        email: _v14,
        onEmailChange: (0, _v2.default)(_v20, 500),
        redirectUrl: _v6,
        redirectUrlAfterSocialLogin: _v9,
        onSSOFlowChoice: _v19,
        placeholder: {
          name: (0, _v7.translate)({
            singular: "First and last name",
            dictionary: {
              es: {
                singular: "Nombre y apellido"
              },
              "de-DE": {
                singular: "Vor- und Nachname"
              },
              "fr-FR": {
                singular: "Nom et prénom"
              },
              "ja-JP": {
                singular: "お名前"
              },
              "ko-KR": {
                singular: "성과 이름"
              },
              "pt-BR": {
                singular: "Nome e sobrenome"
              },
              "zh-CN": {
                singular: "名字和姓氏"
              }
            }
          }),
          email: (0, _v7.translate)({
            singular: "Email address",
            dictionary: {
              es: {
                singular: "Correo electrónico"
              },
              "de-DE": {
                singular: "E-Mail-Adresse"
              },
              "fr-FR": {
                singular: "Adresse e-mail"
              },
              "ja-JP": {
                singular: "メールアドレス"
              },
              "ko-KR": {
                singular: "이메일 주소"
              },
              "pt-BR": {
                singular: "Endereço de e-mail"
              },
              "zh-CN": {
                singular: "电子邮件地址"
              }
            }
          }),
          password: (0, _v7.translate)({
            singular: "Password",
            dictionary: {
              es: {
                singular: "Contraseña"
              },
              "de-DE": {
                singular: "Kennwort"
              },
              "fr-FR": {
                singular: "Mot de passe "
              },
              "ja-JP": {
                singular: "パスワード"
              },
              "ko-KR": {
                singular: "비밀번호"
              },
              "pt-BR": {
                singular: "Senha"
              },
              "zh-CN": {
                singular: "密码"
              }
            }
          })
        }
      })
    });
  }, "LoginJoinModal", 0, _v17]);
}