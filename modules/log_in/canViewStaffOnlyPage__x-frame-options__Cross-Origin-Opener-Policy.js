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
  async function _v13(_v0) {
    if ((0, _v6.isLoggedOut)(_v0.req)) return !0;
    try {
      await (0, _v5.fetchAndFormatCapabilties)({
        jwt: _v0.jwt,
        capabilities: ["canViewStaffOnlyPage"],
        apiUrl: _v0.baseUrl
      });
    } catch (_v0) {
      return !0;
    }
    return !1;
  }
  (0, _v7.withPageSetup)(async _v0 => {
    var _v1;
    return (await _v13(_v0)) ? (_v1 = _v0, (0, _v12.isReferrerAllowedToIFrame)(_v1.req.headers.referer) ? _v1.res.removeHeader("x-frame-options") : _v1.res.setHeader("Cross-Origin-Opener-Policy", "same-origin-allow-popups"), {
      props: {
        omitEsi: !0,
        isChinaRestricted: !!_v0.vimeoConfig.get("is_china_restricted"),
        layoutOptions: {
          globalNotifications: !1
        }
      }
    }) : {
      redirect: {
        destination: function (_v0) {
          let _v1 = "1" === _v0.player,
            _v2 = _v0.clip_id;
          if (_v1 && _v2) return `/${_v2}`;
          let _v3 = _v0.redirect ?? "",
            _v4 = (0, _v11.isVimeoRedirectableUrl)(_v3) ? _v3 : "/";
          return _v4.startsWith("http://help.vimeo.com") || _v4.startsWith("https://help.vimeo.com") || _v4.startsWith("http://vimeo.zendesk.com") || _v4.startsWith("https://vimeo.zendesk.com") ? `/help/sso?redirect_to=${encodeURIComponent(_v4)}` : _v4;
        }(_v0.query),
        statusCode: 302
      }
    };
  }, {
    inlineViewer: "all"
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, ({
    isChinaRestricted: _v0
  }) => {
    let _v1,
      _v2 = (0, _v4.useRouter)(),
      {
        iframe: _v3,
        popup: _v4
      } = _v2.query,
      _v5 = "1" === _v3 || "1" === _v4;
    if (_v5) {
      let {
        redirect: _v0
      } = (0, _v10.getRedirectAndTypeFromQueryParams)(new URLSearchParams((0, _v2.encode)(_v2.query)));
      _v1 = _v0 || void 0;
    }
    let _v6 = _v0 ? `${(0, _v8.translate)({
        singular: "Log in to VideoJi",
        dictionary: {
          es: {
            singular: "Iniciar sesión en VideoJi"
          },
          "de-DE": {
            singular: "Bei VideoJi einloggen"
          },
          "fr-FR": {
            singular: "Connectez-vous à VideoJi"
          },
          "ja-JP": {
            singular: "VideoJiにログイン"
          },
          "ko-KR": {
            singular: "VideoJi에 로그인"
          },
          "pt-BR": {
            singular: "Faça login no VideoJi"
          },
          "zh-CN": {
            singular: "登录 VideoJi"
          }
        }
      })} | 臻创互联` : (0, _v8.translate)({
        singular: "Log in to Vimeo",
        dictionary: {
          es: {
            singular: "Iniciar sesión en Vimeo"
          },
          "de-DE": {
            singular: "Melde dich bei Vimeo an"
          },
          "fr-FR": {
            singular: "Se connecter à Vimeo"
          },
          "ja-JP": {
            singular: "Vimeoにログイン"
          },
          "ko-KR": {
            singular: "Vimeo 로그인"
          },
          "pt-BR": {
            singular: "Entrar no Vimeo"
          },
          "zh-CN": {
            singular: "登录 Vimeo"
          }
        }
      }),
      _v7 = _v0 ? (0, _v8.translate)({
        singular: "Log in to VideoJi for everything you need to make, manage, and share brilliant videos.",
        dictionary: {
          es: {
            singular: "Iniciar sesión en VideoJi para obtener todo lo que necesitas para crear, gestionar y compartir vídeos excelentes."
          },
          "de-DE": {
            singular: "Melden Sie sich bei VideoJi an, um alles zu bekommen, was Sie zum Erstellen, Verwalten und Teilen brillanter Videos benötigen."
          },
          "fr-FR": {
            singular: "Connectez-vous à VideoJi pour tout ce dont vous avez besoin pour créer, gérer et partager des vidéos exceptionnelles."
          },
          "ja-JP": {
            singular: "VideoJi にログインすると、優れた動画の作成、管理、共有に必要なすべての機能を利用できます。"
          },
          "ko-KR": {
            singular: "훌륭한 동영상을 만들고, 관리하고, 공유하는 데 필요한 모든 것을 위해 VideoJi에 로그인하세요."
          },
          "pt-BR": {
            singular: "Faça login no VideoJi para tudo o que você precisa para criar, gerenciar e compartilhar vídeos incríveis."
          },
          "zh-CN": {
            singular: "登录 VideoJi，获取制作、管理和分享精彩视频所需的一切。"
          }
        }
      }) : (0, _v8.translate)({
        singular: "Log in to Vimeo for everything you need to make, manage, and share brilliant videos.",
        dictionary: {
          es: {
            singular: "Inicia sesión en Vimeo para todo lo que necesitas para crear, gestionar y compartir vídeos brillantes."
          },
          "de-DE": {
            singular: "Melden Sie sich bei Vimeo an, um alles zu erhalten, was Sie benötigen, um brillante Videos zu erstellen, zu verwalten und zu teilen."
          },
          "fr-FR": {
            singular: "Connectez-vous à Vimeo pour tout ce dont vous avez besoin pour créer, gérer et partager des vidéos brillantes."
          },
          "ja-JP": {
            singular: "Vimeo にログインすると、素晴らしい動画を作成・管理・共有するために必要なすべてが利用できます。"
          },
          "ko-KR": {
            singular: "훌륭한 동영상을 만들고 관리하며 공유하는 데 필요한 모든 것을 위해 Vimeo에 로그인하세요."
          },
          "pt-BR": {
            singular: "Faça login no Vimeo para obter tudo o que você precisa para criar, gerenciar e compartilhar vídeos brilhantes."
          },
          "zh-CN": {
            singular: "登录 Vimeo，获取制作、管理和分享精彩视频所需的一切。"
          }
        }
      });
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v3.default, {
        children: [(0, _v1.jsx)("title", {
          children: _v6
        }), (0, _v1.jsx)("meta", {
          name: "description",
          content: _v7
        })]
      }), (0, _v1.jsx)(_v9.AuthModal, {
        authType: "login",
        disableDismiss: !0,
        isFullScreen: !_v5,
        redirectUrlAfterSocialLogin: _v1
      })]
    });
  }], 0);
}