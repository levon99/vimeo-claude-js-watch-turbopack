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
    _v19 = _v0.i(0);
  let _v20 = () => (0, _v1.jsxs)(_v2.default, {
      children: [(0, _v1.jsx)("title", {
        children: (0, _v12.translate)("Vimeo")
      }), (0, _v1.jsx)("meta", {
        name: "robots",
        content: "noindex, nofollow"
      })]
    }),
    _v21 = ({
      status: _v0,
      token: _v1,
      folderId: _v2,
      userId: _v3,
      folderData: _v4,
      playerAssetUrls: _v5
    }) => {
      let _v6 = (0, _v16.useViewer)(),
        _v7 = (0, _v3.useCallback)(_v0 => (0, _v19.folderShareClipHref)(_v1, (0, _v14.idFromUri)(_v0)), [_v1]),
        _v8 = (0, _v3.useMemo)(() => ({
          locale: _v6?.locale ?? "default"
        }), [_v6?.locale]);
      return "unavailable" === _v0 ? (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v20, {}), (0, _v1.jsx)(_v13.LinkUnavailablePage, {
          title: (0, _v12.translate)({
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
          message: (0, _v12.translate)({
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
      }) : "locked" === _v0 ? (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v20, {}), (0, _v1.jsx)(_v18.FolderSharePasswordPage, {
          token: _v1
        })]
      }) : _v6 && void 0 !== _v2 && void 0 !== _v3 ? ((0, _v10.setCdnUrl)(_v6.viewmasterCdnUrl), (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v20, {}), (0, _v1.jsx)(_v4.SWRConfig, {
          value: {
            revalidateOnFocus: !1,
            revalidateOnReconnect: !1
          },
          children: (0, _v1.jsx)(_v8.ConfigContext.Provider, {
            value: _v8,
            children: (0, _v1.jsx)(_v7.App, {
              folderData: _v4,
              folderId: _v2,
              folderShareLinkId: _v1,
              itemHref: _v7,
              playerAssetUrls: _v5 ?? _v5.EMPTY_PLAYER_ASSET_URLS,
              userId: _v3,
              viewer: _v6
            })
          })
        })]
      })) : (0, _v1.jsx)(_v20, {});
    };
  (0, _v6.withPageSetup)(async _v0 => {
    let _v1;
    _v0.res.setHeader("X-Robots-Tag", _v19.FOLDER_SHARE_ROBOTS_TAG), _v0.res.setHeader("Cache-Control", _v19.FOLDER_SHARE_CACHE_CONTROL), _v0.res.setHeader("Referrer-Policy", _v19.FOLDER_SHARE_REFERRER_POLICY);
    let _v2 = _v0.params?.token;
    if ("string" != typeof _v2 || 0 === _v2.length) return {
      notFound: !0
    };
    let _v3 = await (0, _v17.resolveFolderShareLink)(_v0, _v2);
    if ("active" !== _v3.status) return {
      props: {
        status: _v3.status,
        token: _v2,
        hasThemeSupport: !0
      }
    };
    try {
      _v1 = await (0, _v11.getUserProject)({
        baseUrl: _v0.baseUrl,
        where: {
          userId: _v3.ownerId,
          projectId: _v3.folderId
        },
        query: {
          folderShareLinkId: _v2
        },
        select: _v9.DEFAULT_FOLDER_API_FIELDS,
        headers: (0, _v17.buildFolderShareHeaders)(_v0)
      });
    } catch {
      return {
        props: {
          status: "unavailable",
          token: _v2,
          hasThemeSupport: !0
        }
      };
    }
    return {
      props: {
        status: "active",
        token: _v2,
        folderId: _v3.folderId,
        userId: _v3.ownerId,
        folderData: _v1,
        hasThemeSupport: !0
      }
    };
  }, {
    inlineViewer: "all",
    inlinePlayerAssets: !0
  }), _v21.getLayout = (_v0, _v1) => "active" === _v1.status ? (0, _v1.jsx)(_v15.VideoLibraryLayout, {
    isReviewPage: !0,
    children: _v0
  }) : _v0, _v0.s(["__N_SSP", 0, !0, "default", 0, _v21], 0);
}