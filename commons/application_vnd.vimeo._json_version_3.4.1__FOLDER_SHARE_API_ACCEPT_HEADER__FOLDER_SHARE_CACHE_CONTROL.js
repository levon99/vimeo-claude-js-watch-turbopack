{
  "use strict";

  let _v1 = "application/vnd.vimeo.*+json;version=3.4.1";
  _v0.s(["FOLDER_SHARE_API_ACCEPT_HEADER", 0, _v1, "FOLDER_SHARE_CACHE_CONTROL", 0, "no-store, no-cache, must-revalidate, post-check=0, pre-check=0", "FOLDER_SHARE_INCORRECT_PASSWORD", 0, 1, "FOLDER_SHARE_REFERRER_POLICY", 0, "no-referrer", "FOLDER_SHARE_ROBOTS_TAG", 0, "noindex, nofollow", "folderShareClipHref", 0, (_v0, _v1) => `/share/folder/${_v0}/video/${_v1}`, "folderShareFileHref", 0, (_v0, _v1) => `/share/folder/${_v0}/file/${_v1}`], 0);
  let _v2 = _v0 => {
      let _v1 = {
          ..._v0.headers,
          Accept: _v1
        },
        _v2 = _v0.req.headers.cookie;
      return "string" == typeof _v2 && _v2.length > 0 && (_v1.cookie = _v2), _v1;
    },
    _v3 = async (_v0, _v1) => {
      try {
        let _v0 = await fetch(`${_v0.baseUrl}/folder_share_links/${encodeURIComponent(_v1)}/resolve`, {
          headers: _v2(_v0)
        });
        if (!_v0.ok) return {
          status: "unavailable"
        };
        let _v1 = await _v0.json();
        if ("object" != typeof _v1 || null === _v1) return {
          status: "unavailable"
        };
        if ("active" === _v1.status) {
          let {
            folder_id: _v0,
            owner_id: _v1
          } = _v1;
          if ("number" == typeof _v0 && "number" == typeof _v1) return {
            status: "active",
            folderId: _v0,
            ownerId: _v1
          };
          return {
            status: "unavailable"
          };
        }
        if ("locked" === _v1.status) return {
          status: "locked"
        };
        return {
          status: "unavailable"
        };
      } catch {
        return {
          status: "unavailable"
        };
      }
    };
  _v0.s(["buildFolderShareHeaders", 0, _v2, "resolveFolderShareLink", 0, _v3], 0);
  var _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = (_v0, _v1) => {
    switch (_v0) {
      case 429:
        return "attempts_exceeded";
      case 401:
        return 1 === _v1 ? "incorrect_password" : "cookies_disabled";
      default:
        return "generic_error";
    }
  };
  _v0.s(["FolderSharePasswordPage", 0, ({
    token: _v0
  }) => (0, _v4.jsx)(_v6.PasswordPageView, {
    heading: (0, _v5.translate)({
      singular: "This link is password protected",
      dictionary: {
        es: {
          singular: "Este enlace está protegido por contraseña."
        },
        "de-DE": {
          singular: "Dieser Link ist kennwortgeschützt"
        },
        "fr-FR": {
          singular: "Ce lien est protégé par un mot de passe"
        },
        "ja-JP": {
          singular: "このリンクはパスワードで保護されています"
        },
        "ko-KR": {
          singular: "이 링크는 비밀번호로 보호되어 있습니다."
        },
        "pt-BR": {
          singular: "Este link está protegido por senha"
        },
        "zh-CN": {
          singular: "此链接受密码保护"
        }
      }
    }),
    submit: ({
      password: _v0,
      token: _v1
    }) => fetch(`/folder_share_links/${_v0}/auth`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        token: _v1,
        password: _v0
      }),
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest"
      }
    }),
    getErrorType: _v7
  })], 0);
}