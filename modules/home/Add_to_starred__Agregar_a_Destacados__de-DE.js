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
    _v11 = _v0.i(0);
  let _v12 = {
    addToStarred: (0, _v9.translate)({
      singular: "Add to starred",
      dictionary: {
        es: {
          singular: "Agregar a Destacados"
        },
        "de-DE": {
          singular: "Zu Starred hinzufügen"
        },
        "fr-FR": {
          singular: "Ajouter aux favoris"
        },
        "ja-JP": {
          singular: "スター付きに追加"
        },
        "ko-KR": {
          singular: '"별점 평가 완료"에 추가'
        },
        "pt-BR": {
          singular: "Adicionar aos favoritos"
        },
        "zh-CN": {
          singular: "添加到带星标内容"
        }
      }
    }),
    removeFromStarred: (0, _v9.translate)({
      singular: "Remove from starred",
      dictionary: {
        es: {
          singular: "Eliminar de Destacados"
        },
        "de-DE": {
          singular: "Aus Starred entfernen"
        },
        "fr-FR": {
          singular: "Supprimer des favoris"
        },
        "ja-JP": {
          singular: "スター付きから削除"
        },
        "ko-KR": {
          singular: '"별점 평가 완료"에서 삭제'
        },
        "pt-BR": {
          singular: "Remover dos favoritos"
        },
        "zh-CN": {
          singular: "从星标中移除"
        }
      }
    }),
    share: (0, _v9.translate)({
      singular: "Share",
      dictionary: {
        es: {
          singular: "Compartir"
        },
        "de-DE": {
          singular: "Teilen"
        },
        "fr-FR": {
          singular: "Partager"
        },
        "ja-JP": {
          singular: "共有"
        },
        "ko-KR": {
          singular: "공유"
        },
        "pt-BR": {
          singular: "Compartilhar"
        },
        "zh-CN": {
          singular: "分享"
        }
      }
    }),
    copyLink: (0, _v9.translate)({
      singular: "Copy link",
      dictionary: {
        es: {
          singular: "Copiar vínculo"
        },
        "de-DE": {
          singular: "Link kopieren"
        },
        "fr-FR": {
          singular: "Copier le lien"
        },
        "ja-JP": {
          singular: "リンクをコピー"
        },
        "ko-KR": {
          singular: "링크 복사"
        },
        "pt-BR": {
          singular: "Copiar link"
        },
        "zh-CN": {
          singular: "复制链接"
        }
      }
    })
  };
  var _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0);
  _v0.s(["HoverActions", 0, ({
    type: _v0,
    entity: _v1,
    shareEventAnalyticsOverride: _v2,
    canShare: _v3,
    hasMoreInfo: _v4 = !1,
    onMoreInfo: _v5,
    onQuickActionClick: _v6
  }) => {
    let _v7 = (0, _v11.useViewer)(),
      _v8 = (0, _v15.usePageName)(),
      {
        getFolderShareLoopTrackingParams: _v9
      } = (0, _v16.useShareLoopTrackingParams)(),
      _v10 = (0, _v17.useCopyFolderLinkToast)(),
      _v11 = "folder" === _v0 && (0, _v23.getFolderPermissions)(_v1).canEditSettings,
      _v12 = (0, _v20.useManageShareAction)({
        canEdit: _v11,
        entityUri: _v1.uri,
        location: _v13.SHARE_RESOURCE_FOLDER_CARD_HOVER_ENTRY_POINT,
        panel: "INVITE_PANEL"
      }),
      _v13 = (0, _v18.useCopyVideoLink)({
        video: _v1,
        surface: "hover_icon",
        analyticsElement: "icon",
        manageActionLocation: _v13.SHARE_RESOURCE_FOLDER_CARD_HOVER_ENTRY_POINT
      }),
      _v14 = _v3 ?? !!_v1.metadata?.interactions?.invite?.uri,
      _v15 = "video" === _v0 && _v1.isColdStorage,
      {
        isLocked: _v16,
        renderLocked: _v17
      } = (0, _v21.useVideoMetadataLock)("video" === _v0 ? _v1 : void 0),
      _v18 = (0, _v19.useFolderShareClick)({
        folder: _v1,
        analytics: {
          feature: _v2?.feature || _v13.AnalyticsFeatures.VIDEO_LIBRARY,
          location: _v2?.location || _v13.AnalyticsLocations.FOLDER_CARD,
          page: _v2?.page,
          shareModalEntryPoint: _v2?.shareModalEntryPoint || _v13.SHARE_RESOURCE_FOLDER_CARD_HOVER_ENTRY_POINT
        },
        analyticsV2: {
          location: "card",
          element: "icon"
        }
      }),
      _v19 = (0, _v22.useVideoShareClick)({
        video: _v1,
        analytics: {
          feature: _v2?.feature || _v13.AnalyticsFeatures.VIDEO_LIBRARY,
          location: _v2?.location || _v13.AnalyticsLocations.VIDEO_CARD,
          page: _v2?.page,
          shareModalEntryPoint: _v2?.shareModalEntryPoint || _v13.SHARE_RESOURCE_FOLDER_CARD_HOVER_ENTRY_POINT
        },
        analyticsV2: {
          location: "card",
          element: "icon"
        },
        parentFolder: _v1?.parentProject ?? void 0,
        canShare: _v3
      });
    return _v15 ? (0, _v1.jsx)(_v1.Fragment, {}) : (0, _v1.jsxs)(_v8.ContentCard.HoverActions, {
      children: [_v4 && (0, _v1.jsx)(_v8.ContentCard.HoverAction, {
        children: (0, _v1.jsx)(_v3.Tooltip, {
          label: (0, _v9.translate)({
            singular: "Video info",
            dictionary: {
              es: {
                singular: "Información del video"
              },
              "de-DE": {
                singular: "Videoinfo"
              },
              "fr-FR": {
                singular: "Infos de la vidéo"
              },
              "ja-JP": {
                singular: "動画情報"
              },
              "ko-KR": {
                singular: "동영상 정보"
              },
              "pt-BR": {
                singular: "Informação do vídeo"
              }
            }
          }),
          placement: "top",
          children: (0, _v1.jsx)(_v2.IconButton, {
            "data-id": "hover_info_icon",
            display: {
              base: "none",
              md: "block"
            },
            "aria-label": (0, _v9.translate)({
              singular: "Video info",
              dictionary: {
                es: {
                  singular: "Información del video"
                },
                "de-DE": {
                  singular: "Videoinfo"
                },
                "fr-FR": {
                  singular: "Infos de la vidéo"
                },
                "ja-JP": {
                  singular: "動画情報"
                },
                "ko-KR": {
                  singular: "동영상 정보"
                },
                "pt-BR": {
                  singular: "Informação do vídeo"
                }
              }
            }),
            icon: (0, _v1.jsx)(_v7.InfoCircle, {}),
            variant: "blur",
            size: "xs",
            onClick: () => {
              (0, _v13.sendOpenSidePanelEvent)({
                location: "video_card",
                page: _v8
              }), _v5?.();
            }
          })
        })
      }), _v14 && ("folder" === _v0 || "video" === _v0) && (0, _v1.jsx)(_v8.ContentCard.HoverAction, {
        children: "video" === _v0 && _v16 ? _v17((0, _v1.jsx)(_v2.IconButton, {
          "aria-label": _v12.share,
          icon: (0, _v1.jsx)(_v5.Lock, {}),
          variant: "blur",
          size: "xs",
          isDisabled: !0,
          pointerEvents: "none"
        })) : (0, _v1.jsx)(_v3.Tooltip, {
          label: _v12.share,
          placement: "top",
          children: (0, _v1.jsx)(_v2.IconButton, {
            "aria-label": _v12.share,
            icon: (0, _v1.jsx)(_v6.Share, {}),
            variant: "blur",
            size: "xs",
            onClick: "folder" === _v0 ? () => _v18?.() : "video" === _v0 ? () => {
              _v6?.("share"), _v19?.();
            } : void 0
          })
        })
      }), (0, _v1.jsx)(_v8.ContentCard.HoverAction, {
        children: (0, _v1.jsx)(_v3.Tooltip, {
          label: _v12.copyLink,
          placement: "top",
          children: (0, _v1.jsx)(_v2.IconButton, {
            "aria-label": _v12.copyLink,
            icon: (0, _v1.jsx)(_v4.Link, {}),
            variant: "blur",
            size: "xs",
            onClick: () => {
              _v6?.("copy_link"), (() => {
                if ("folder" === _v0) {
                  let _v0 = _v1.uri.split("/"),
                    _v1 = _v9(_v8, !!_v1.isPrivateToUser),
                    _v2 = `${window.location.protocol}//${window.location.hostname}/user/${_v0[2]}/folder/${_v0[4]}${_v1}`,
                    _v3 = (0, _v10.default)(_v2),
                    _v4 = !!_v1.isPrivateToUser;
                  _v10({
                    isSuccess: _v3,
                    onManage: _v12
                  }), _v14.BPAnalyticsV2.copyFolderLink({
                    location: "card",
                    element: "icon",
                    teamUser: _v7?.teamUser,
                    folder: _v1,
                    webCtx: {
                      path: window.location.pathname,
                      page_name: _v4 ? "my_library" : "video_library",
                      target_path: _v2 ?? null
                    }
                  });
                } else "video" === _v0 && _v13();
              })();
            }
          })
        })
      })]
    });
  }], 0);
}