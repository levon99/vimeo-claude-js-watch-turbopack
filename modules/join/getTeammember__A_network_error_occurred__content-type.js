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
  async function _v9({
    baseUrl: _v0,
    select: _v1,
    where: {
      code: _v2
    },
    ..._v3
  }) {
    return (0, _v7.measureLatency)("getTeammember", "GET", async () => {
      let _v0 = await fetch(`${_v0}/teammembers/${_v2}?fields=${_v1.map(_v8.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "GET"
      });
      if (!_v0.ok) throw new _v8.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v8.deepCamelCase)(_v1);
    });
  }
  var _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0);
  async function _v13(_v0) {
    if ((0, _v6.isLoggedOut)(_v0.req)) return !0;
    try {
      await (0, _v4.fetchAndFormatCapabilties)({
        jwt: _v0.jwt,
        capabilities: ["canViewStaffOnlyPage"],
        apiUrl: _v0.baseUrl
      });
    } catch (_v0) {
      return !0;
    }
    return !1;
  }
  async function _v14(_v0) {
    let {
      redirect: _v1
    } = _v0.query;
    if (_v1 && "string" == typeof _v1) {
      let _v0 = new URLSearchParams(_v1.split("?")[1]).get("code");
      if (!_v0) return !0;
      try {
        let _v0 = await _v9({
          select: ["uri"],
          where: {
            code: _v0
          },
          baseUrl: _v0.baseUrl,
          headers: _v0.headers
        });
        return !!(_v0 && _v0.uri);
      } catch (_v0) {
        return !1;
      }
    }
    return !0;
  }
  (0, _v5.withPageSetup)(async _v0 => {
    var _v1;
    return (await _v13(_v0)) ? (await _v14(_v0)) ? (_v1 = _v0, (0, _v12.isReferrerAllowedToIFrame)(_v1.req.headers.referer) || _v1.res.setHeader("Cross-Origin-Opener-Policy", "same-origin-allow-popups"), {
      props: {
        omitEsi: !0,
        isChinaRestricted: (0, _v6.isChinaRestrictedRequest)(_v0.req),
        layoutOptions: {
          globalNotifications: !1
        }
      }
    }) : {
      notFound: !0
    } : {
      redirect: {
        destination: "/",
        statusCode: 302
      }
    };
  }, {
    inlineViewer: "all"
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, ({
    isChinaRestricted: _v0
  }) => {
    let {
        iframe: _v1,
        popup: _v2
      } = (0, _v3.useRouter)().query,
      _v3 = _v0 ? `${(0, _v10.translate)({
        singular: "Join VideoJi",
        dictionary: {
          es: {
            singular: "Únase a VideoJi"
          },
          "de-DE": {
            singular: "VideoJi beitreten"
          },
          "fr-FR": {
            singular: "Rejoignez VideoJi"
          },
          "ja-JP": {
            singular: "VimeoJiに登録"
          },
          "ko-KR": {
            singular: "VideoJi 가입"
          },
          "pt-BR": {
            singular: "Junte-se ao VideoJi"
          },
          "zh-CN": {
            singular: "加入 VideoJi"
          }
        }
      })} | 臻创互联` : (0, _v10.translate)({
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
      _v4 = _v0 ? (0, _v10.translate)({
        singular: "Join VideoJi for everything you need to make, manage, and share brilliant videos.",
        dictionary: {
          es: {
            singular: "Únete a VideoJi para todo lo que necesitas para crear, gestionar y compartir vídeos brillantes."
          },
          "de-DE": {
            singular: "Treten Sie VideoJi bei, um alles zu erhalten, was Sie benötigen, um brillante Videos zu erstellen, zu verwalten und zu teilen."
          },
          "fr-FR": {
            singular: "Rejoignez VideoJi pour tout ce dont vous avez besoin pour créer, gérer et partager des vidéos exceptionnelles."
          },
          "ja-JP": {
            singular: "優れた動画を作成、管理、共有するために必要なあらゆる機能が揃ったVideoJiに参加しましょう。"
          },
          "ko-KR": {
            singular: "놀라운 동영상을 만들고, 관리하고, 공유하는 데 필요한 모든 것을 위해 VideoJi에 가입하세요."
          },
          "pt-BR": {
            singular: "Junte-se ao VideoJi para tudo o que você precisa para criar, gerenciar e compartilhar vídeos incríveis."
          },
          "zh-CN": {
            singular: "加入 VideoJi，获取制作、管理和分享精彩视频所需的一切。"
          }
        }
      }) : (0, _v10.translate)({
        singular: "Join Vimeo for everything you need to make, manage, and share brilliant videos.",
        dictionary: {
          es: {
            singular: "Únete a Vimeo para todo lo que necesitas para crear, gestionar y compartir vídeos brillantes."
          },
          "de-DE": {
            singular: "Treten Sie Vimeo bei, um alles zu erhalten, was Sie benötigen, um brillante Videos zu erstellen, zu verwalten und zu teilen."
          },
          "fr-FR": {
            singular: "Rejoignez Vimeo pour tout ce dont vous avez besoin pour créer, gérer et partager des vidéos exceptionnelles."
          },
          "ja-JP": {
            singular: "優れた動画を作成、管理、共有するために必要なあらゆる機能が揃ったVimeoに参加しましょう。"
          },
          "ko-KR": {
            singular: "놀라운 동영상을 만들고, 관리하고, 공유하는 데 필요한 모든 것을 위해 Vimeo에 가입하세요."
          },
          "pt-BR": {
            singular: "Junte-se ao Vimeo para tudo o que você precisa para criar, gerenciar e compartilhar vídeos incríveis."
          },
          "zh-CN": {
            singular: "加入 Vimeo，获取制作、管理和分享精彩视频所需的一切。"
          }
        }
      });
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v2.default, {
        children: [(0, _v1.jsx)("title", {
          children: _v3
        }), (0, _v1.jsx)("meta", {
          name: "description",
          content: _v4
        })]
      }), (0, _v1.jsx)(_v11.AuthModal, {
        authType: "join",
        disableDismiss: !0,
        isFullScreen: !_v1 && !_v2
      })]
    });
  }], 0);
}