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
  let _v14 = ({
      videoId: _v0,
      embedPlayerConfigUrl: _v1
    }) => {
      let _v2 = (0, _v9.useRef)(null);
      return (0, _v13.usePlayer)(_v2, _v0, !0, _v1, !1), (0, _v1.jsx)(_v10.Box, {
        ref: _v2,
        className: "player js-player",
        width: "100%",
        aspectRatio: "16 / 9",
        backgroundColor: "background"
      });
    },
    _v15 = ({
      videoId: _v0,
      embedPlayerConfigUrl: _v1,
      playerAssetUrls: _v2
    }) => (0, _v1.jsx)(_v11.PlayerContextProvider, {
      type: _v12.PlayerType.VimeoPlayer,
      assetUrls: _v2,
      children: (0, _v1.jsx)(_v10.Box, {
        minHeight: "100dvh",
        backgroundColor: "background",
        padding: {
          base: "0",
          md: "400"
        },
        children: (0, _v1.jsx)(_v10.Box, {
          maxWidth: "1280px",
          width: "100%",
          margin: "0 auto",
          children: (0, _v1.jsx)(_v14, {
            videoId: _v0,
            embedPlayerConfigUrl: _v1
          })
        })
      })
    });
  var _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0);
  let _v26 = ({
    blockReason: _v0
  }) => (0, _v1.jsxs)(_v21.ClipPageBase, {
    gridTemplateAreas: _v22.GRID_TEMPLATE_AREAS_LOADER,
    children: [(0, _v1.jsx)(_v24.PlayerWrapper, {
      gridArea: "media",
      children: (0, _v1.jsx)(_v17.Center, {
        w: "100%",
        h: "100%",
        children: (0, _v1.jsxs)(_v20.VStack, {
          textAlign: "center",
          gap: "200",
          children: [(0, _v1.jsx)(_v18.Header, {
            size: {
              base: "lg",
              md: "2xl"
            },
            color: "text-primary",
            children: "unrated" === _v0 ? (0, _v5.translate)({
              singular: "This video is not rated",
              dictionary: {
                es: {
                  singular: "Este video no está calificado"
                },
                "de-DE": {
                  singular: "Dieses Video wurde nicht bewertet"
                },
                "fr-FR": {
                  singular: "Cette vidéo n'a aucune classification."
                },
                "ja-JP": {
                  singular: "この動画はレーティングされていません"
                },
                "ko-KR": {
                  singular: "이 동영상은 등급이 지정되지 않았습니다."
                },
                "pt-BR": {
                  singular: "Este vídeo não tem classificação"
                },
                "zh-CN": {
                  singular: "此视频未分级"
                }
              }
            }) : (0, _v5.translate)({
              singular: "This video contains mature content",
              dictionary: {
                es: {
                  singular: "Este video incluye contenido para adultos"
                },
                "de-DE": {
                  singular: "Dieses Video enthält nicht jugendfreie Inhalte"
                },
                "fr-FR": {
                  singular: "Cette vidéo comporte du contenu pour adultes."
                },
                "ja-JP": {
                  singular: "この動画には成人向けコンテンツが含まれています"
                },
                "ko-KR": {
                  singular: "이 동영상은 성인 콘텐츠를 포함하고 있습니다."
                },
                "pt-BR": {
                  singular: "Este vídeo apresenta conteúdo adulto"
                },
                "zh-CN": {
                  singular: "此视频包含成人内容"
                }
              }
            })
          }), (0, _v1.jsx)(_v19.Paragraph, {
            size: {
              base: "sm",
              md: "md"
            },
            children: (0, _v5.translate)({
              singular: "Log in to watch this video.",
              dictionary: {
                es: {
                  singular: "Inicie sesión para ver este vídeo."
                },
                "de-DE": {
                  singular: "Melden Sie sich an, um dieses Video anzusehen."
                },
                "fr-FR": {
                  singular: "Connectez-vous pour regarder cette vidéo."
                },
                "ja-JP": {
                  singular: "この動画を見るにはログインしてください。"
                },
                "ko-KR": {
                  singular: "이 비디오를 시청하려면 로그인하세요."
                },
                "pt-BR": {
                  singular: "Faça login para assistir a este vídeo."
                },
                "zh-CN": {
                  singular: "登录以观看此视频。"
                }
              }
            })
          })]
        })
      })
    }), (0, _v1.jsx)(_v23.ModuleWrapper, {
      gridArea: "contentStack",
      h: "min-content",
      children: (0, _v1.jsx)(_v25.VideoDetailsSkeleton, {})
    })]
  });
  var _v27 = _v0.i(0);
  let _v28 = ["embedPlayerConfigUrl", "name", "privacy", "contentRatingClass", "pictures", "width", "height", "uri"],
    _v29 = () => (0, _v1.jsxs)(_v2.default, {
      children: [(0, _v1.jsx)("title", {
        children: (0, _v5.translate)("Vimeo")
      }), (0, _v1.jsx)("meta", {
        name: "robots",
        content: "noindex, nofollow"
      })]
    });
  (0, _v3.withPageSetup)(async _v0 => {
    _v0.res.setHeader("X-Robots-Tag", _v27.FOLDER_SHARE_ROBOTS_TAG), _v0.res.setHeader("Cache-Control", _v27.FOLDER_SHARE_CACHE_CONTROL), _v0.res.setHeader("Referrer-Policy", _v27.FOLDER_SHARE_REFERRER_POLICY);
    let _v1 = _v0.params?.token,
      _v2 = _v0.params?.clipId;
    if ("string" != typeof _v1 || 0 === _v1.length || "string" != typeof _v2 || !/^\d+$/.test(_v2)) return {
      notFound: !0
    };
    let _v3 = Number(_v2),
      _v4 = await (0, _v8.resolveFolderShareLink)(_v0, _v1);
    if ("unavailable" === _v4.status) return {
      props: {
        status: "unavailable",
        token: _v1,
        videoId: _v3,
        hasThemeSupport: !0
      }
    };
    if ("locked" === _v4.status) return {
      props: {
        status: "locked",
        token: _v1,
        videoId: _v3,
        hasThemeSupport: !0
      }
    };
    try {
      let _v0 = await (0, _v7.getClipSignature)(_v3),
        _v1 = await (0, _v4.getVideo)({
          baseUrl: _v0.baseUrl,
          where: {
            videoId: _v3
          },
          query: {
            folderShareLinkId: _v1,
            anonSignature: _v0
          },
          select: _v28,
          headers: (0, _v8.buildFolderShareHeaders)(_v0)
        });
      return {
        props: {
          status: "active",
          token: _v1,
          videoId: _v3,
          embedPlayerConfigUrl: _v1.embedPlayerConfigUrl ?? "",
          hasThemeSupport: !0,
          hasPlayerAPI: !0
        }
      };
    } catch (_v0) {
      if (!("object" == typeof _v0 && null !== _v0 && "res" in _v0 && "function" == typeof _v0.res?.json)) return {
        notFound: !0
      };
      let _v1 = await _v0.res.json().catch(() => void 0),
        _v2 = "object" == typeof _v1 && null !== _v1 ? _v1.error_code : void 0;
      if (_v2 === _v27.FOLDER_SHARE_INVALID_INPUT_NO_PASSWORD || _v2 === _v27.FOLDER_SHARE_INVALID_INPUT_NO_PASSWORD_MISSING || _v2 === _v27.FOLDER_SHARE_INVALID_INPUT_WRONG_PASSWORD) return {
        props: {
          status: "password",
          token: _v1,
          videoId: _v3,
          hasThemeSupport: !0
        }
      };
      if (_v2 === _v27.FOLDER_SHARE_UNRATED_MATURE_CONTENT_RATING) return {
        props: {
          status: "restricted",
          token: _v1,
          videoId: _v3,
          blockReason: "unrated",
          hasThemeSupport: !0
        }
      };
      if (_v2 === _v27.FOLDER_SHARE_CONTENT_NOT_ALLOWED_FOR_USER) return {
        props: {
          status: "restricted",
          token: _v1,
          videoId: _v3,
          blockReason: "mature",
          hasThemeSupport: !0
        }
      };
      return {
        notFound: !0
      };
    }
  }, {
    inlineViewer: "all",
    inlinePlayerAssets: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v0 => "unavailable" === _v0.status ? (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v29, {}), (0, _v1.jsx)(_v6.LinkUnavailablePage, {
      title: (0, _v5.translate)({
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
      message: (0, _v5.translate)({
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
  }) : "locked" === _v0.status ? (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v29, {}), (0, _v1.jsx)(_v16.FolderSharePasswordPage, {
      resource: "folder",
      token: _v0.token
    })]
  }) : "password" === _v0.status ? (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v29, {}), (0, _v1.jsx)(_v16.FolderSharePasswordPage, {
      resource: "video",
      videoId: _v0.videoId
    })]
  }) : "restricted" === _v0.status ? (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v29, {}), (0, _v1.jsx)(_v26, {
      blockReason: _v0.blockReason
    })]
  }) : _v0.playerAssetUrls ? (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v29, {}), (0, _v1.jsx)(_v15, {
      videoId: _v0.videoId,
      embedPlayerConfigUrl: _v0.embedPlayerConfigUrl,
      playerAssetUrls: _v0.playerAssetUrls
    })]
  }) : (0, _v1.jsx)(_v29, {})], 0);
}