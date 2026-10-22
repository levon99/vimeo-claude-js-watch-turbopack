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
    _v13 = _v0.i(0);
  let _v14 = () => (0, _v1.jsxs)(_v2.default, {
      children: [(0, _v1.jsx)("title", {
        children: (0, _v4.translate)("Vimeo")
      }), (0, _v1.jsx)("meta", {
        name: "robots",
        content: "noindex, nofollow"
      })]
    }),
    _v15 = ({
      folderId: _v0,
      clipId: _v1
    }) => {
      let {
        trackFolderShareVideoDisplayed: _v2
      } = (0, _v6.useFolderShareTracking)();
      return (0, _v7.usePicoEffect)(() => {
        _v2({
          folderId: _v0,
          clipId: _v1
        });
      }, [_v0, _v1, _v2], {
        once: !0
      }), null;
    };
  (0, _v3.withPageSetup)(async _v0 => {
    _v0.res.setHeader("X-Robots-Tag", _v13.FOLDER_SHARE_ROBOTS_TAG), _v0.res.setHeader("Cache-Control", _v13.FOLDER_SHARE_CACHE_CONTROL), _v0.res.setHeader("Referrer-Policy", _v13.FOLDER_SHARE_REFERRER_POLICY);
    let _v1 = _v0.params?.token,
      _v2 = _v0.params?.clipId;
    if ("string" != typeof _v1 || 0 === _v1.length || "string" != typeof _v2 || !/^\d+$/.test(_v2)) return {
      notFound: !0
    };
    let _v3 = await (0, _v10.resolveFolderShareLink)(_v0, _v1);
    if ("active" !== _v3.status) return {
      props: {
        folderShareStatus: _v3.status,
        token: _v1,
        hasThemeSupport: !0
      }
    };
    let _v4 = _v0.req.cookies[`folder_${_v3.folderId}_password`];
    return await (0, _v9.clipPageGetServerSideProps)(_v0, {
      notFoundHandling: "caller",
      folderShareLinkId: _v1,
      folderId: _v3.folderId,
      folderPassword: _v4
    });
  }, {
    inlineViewer: "all",
    inlinePlayerAssets: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v0 => {
    if (!("folderShareStatus" in _v0)) {
      let _v0 = _v0.pageMetadata?.folderId;
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [void 0 !== _v0 && (0, _v1.jsx)(_v15, {
          folderId: _v0,
          clipId: _v0.clipId
        }), (0, _v1.jsx)(_v8.default, {
          ..._v0
        })]
      });
    }
    return "locked" === _v0.folderShareStatus ? (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v14, {}), (0, _v1.jsx)(_v12.FolderSharePasswordPage, {
        token: _v0.token
      })]
    }) : (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v14, {}), (0, _v1.jsx)(_v11.FolderShareLinkUnavailableTracking, {}), (0, _v1.jsx)(_v5.LinkUnavailablePage, {
        title: (0, _v4.translate)({
          singular: "This folder link is no longer available",
          dictionary: {
            es: {
              singular: "El enlace a esta carpeta ya no está disponible"
            },
            "de-DE": {
              singular: "Dieser Ordnerlink ist nicht mehr verfügbar"
            },
            "fr-FR": {
              singular: "Ce lien vers le dossier n'est plus disponible"
            },
            "ja-JP": {
              singular: "このフォルダのリンクは利用できなくなっています"
            },
            "ko-KR": {
              singular: "이 폴더 링크는 더 이상 유효하지 않습니다"
            },
            "pt-BR": {
              singular: "O link desta pasta não está mais disponível"
            },
            "zh-CN": {
              singular: "此文件夹链接不再可用"
            }
          }
        }),
        message: (0, _v4.translate)({
          singular: "It may have expired or been turned off",
          dictionary: {
            es: {
              singular: "Es posible que haya expirado o que se haya desactivado"
            },
            "de-DE": {
              singular: "Es ist möglicherweise abgelaufen oder wurde deaktiviert."
            },
            "fr-FR": {
              singular: "Il se peut qu'il ait expiré ou qu'il ait été désactivé."
            },
            "ja-JP": {
              singular: "有効期限が切れているか、無効になっている可能性があります"
            },
            "ko-KR": {
              singular: "만료되었거나 비활성화되었을 수 있습니다."
            },
            "pt-BR": {
              singular: "Ele pode ter expirado ou estar desativado"
            },
            "zh-CN": {
              singular: "可能已过期或已关闭"
            }
          }
        })
      })]
    });
  }], 0);
}