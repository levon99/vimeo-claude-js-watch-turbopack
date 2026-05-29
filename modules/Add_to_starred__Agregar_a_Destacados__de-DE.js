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
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0);
  let _v29 = {
    addToStarred: (0, _v11.translate)({
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
    removeFromStarred: (0, _v11.translate)({
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
    share: (0, _v11.translate)({
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
    copyLink: (0, _v11.translate)({
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
  _v0.s(["HoverActions", 0, ({
    type: _v0,
    entity: _v1,
    shareEventAnalyticsOverride: _v2,
    canShare: _v3,
    hasMoreInfo: _v4 = !1,
    onMoreInfo: _v5,
    onQuickActionClick: _v6
  }) => {
    let _v7 = (0, _v15.useViewer)(),
      {
        reviewId: _v8
      } = (0, _v2.useContext)(_v13.ReviewLinkContext),
      _v9 = (0, _v18.useNotification)(),
      _v10 = (0, _v19.usePageName)(),
      {
        capabilities: _v11
      } = (0, _v10.useCapability)(["hasLibrarySidePanel"]),
      {
        getVideoShareLoopTrackingParams: _v12,
        getFolderShareLoopTrackingParams: _v13
      } = (0, _v20.useShareLoopTrackingParams)(),
      _v14 = (0, _v21.useCopyVideoLinkToast)(),
      {
        settings: _v15
      } = (0, _v12.useOrionSettings)(),
      _v16 = !!_v15?.bi_expiring_links_ux_enabled,
      _v17 = (0, _v22.useCreateAndCopySharingLink)("hover_icon", _v1, () => _v9({
        content: _v26.linkCopyFailed,
        status: "error"
      })),
      _v18 = _v3 ?? !!_v1.metadata?.interactions?.invite?.uri,
      _v19 = _v4 || !!_v11?.hasLibrarySidePanel || !!_v8,
      _v20 = "video" === _v0 && _v1.isColdStorage,
      {
        isLocked: _v21,
        renderLocked: _v22
      } = (0, _v24.useVideoMetadataLock)("video" === _v0 ? _v1 : void 0);
    if (_v20) return (0, _v1.jsx)(_v1.Fragment, {});
    let _v23 = (0, _v23.useFolderShareClick)({
        folder: _v1,
        analytics: {
          feature: _v2?.feature || _v16.AnalyticsFeatures.VIDEO_LIBRARY,
          location: _v2?.location || _v16.AnalyticsLocations.FOLDER_CARD,
          page: _v2?.page,
          shareModalEntryPoint: _v2?.shareModalEntryPoint || _v16.SHARE_RESOURCE_FOLDER_CARD_HOVER_ENTRY_POINT
        },
        analyticsV2: {
          location: "card",
          element: "icon"
        }
      }),
      _v24 = (0, _v25.useVideoShareClick)({
        video: _v1,
        analytics: {
          feature: _v2?.feature || _v16.AnalyticsFeatures.VIDEO_LIBRARY,
          location: _v2?.location || _v16.AnalyticsLocations.VIDEO_CARD,
          page: _v2?.page,
          shareModalEntryPoint: _v2?.shareModalEntryPoint || _v16.SHARE_RESOURCE_FOLDER_CARD_HOVER_ENTRY_POINT
        },
        analyticsV2: {
          location: "card",
          element: "icon"
        },
        parentFolder: _v1?.parentProject ?? void 0,
        canShare: _v3
      });
    return (0, _v1.jsxs)(_v9.ContentCard.HoverActions, {
      children: [_v4 && (0, _v1.jsx)(_v9.ContentCard.HoverAction, {
        children: (0, _v1.jsx)(_v4.Tooltip, {
          label: (0, _v11.translate)({
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
          children: (0, _v1.jsx)(_v3.IconButton, {
            "data-id": "hover_info_icon",
            display: {
              base: "none",
              md: "block"
            },
            "aria-label": (0, _v11.translate)({
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
            icon: (0, _v1.jsx)(_v8.InfoCircle, {}),
            variant: "blur",
            size: "xs",
            onClick: () => {
              (0, _v16.sendOpenSidePanelEvent)({
                location: "video_card",
                page: _v10
              }), _v5?.();
            }
          })
        })
      }), !_v19 && (0, _v1.jsx)(_v9.ContentCard.HoverAction, {
        isAlwaysVisible: !0,
        children: (0, _v1.jsx)(_v28.StarredIconContainer, {
          type: _v0,
          uri: _v1.uri,
          entity: _v1,
          buttonVariant: "blur",
          buttonSize: "xs",
          onBeforeAction: _v0 => {
            "mark" === _v0 && _v6?.("add_to_starred");
          }
        })
      }), _v18 && ("folder" === _v0 || "video" === _v0) && (0, _v1.jsx)(_v9.ContentCard.HoverAction, {
        children: "video" === _v0 && _v21 ? _v22((0, _v1.jsx)(_v3.IconButton, {
          "aria-label": _v29.share,
          icon: (0, _v1.jsx)(_v6.Lock, {}),
          variant: "blur",
          size: "xs",
          isDisabled: !0,
          pointerEvents: "none"
        })) : (0, _v1.jsx)(_v4.Tooltip, {
          label: _v29.share,
          placement: "top",
          children: (0, _v1.jsx)(_v3.IconButton, {
            "aria-label": _v29.share,
            icon: (0, _v1.jsx)(_v7.Share, {}),
            variant: "blur",
            size: "xs",
            onClick: "folder" === _v0 ? () => _v23?.() : "video" === _v0 ? () => {
              _v6?.("share"), _v24?.();
            } : void 0
          })
        })
      }), (0, _v1.jsx)(_v9.ContentCard.HoverAction, {
        children: (0, _v1.jsx)(_v4.Tooltip, {
          label: _v29.copyLink,
          placement: "top",
          children: (0, _v1.jsx)(_v3.IconButton, {
            "aria-label": _v29.copyLink,
            icon: (0, _v1.jsx)(_v5.Link, {}),
            variant: "blur",
            size: "xs",
            onClick: () => {
              _v6?.("copy_link"), (() => {
                if ("folder" === _v0) {
                  let _v0 = _v1.uri.split("/"),
                    _v1 = _v13(_v10, !!_v1.isPrivateToUser),
                    _v2 = `${window.location.protocol}//${window.location.hostname}/user/${_v0[2]}/folder/${_v0[4]}${_v1}`,
                    _v3 = (0, _v14.default)(_v2),
                    _v4 = !!_v1.isPrivateToUser;
                  _v3 ? _v9({
                    content: _v26.linkCopySuccess
                  }) : _v9({
                    content: _v26.linkCopyFailed,
                    status: "error"
                  }), _v17.BPAnalyticsV2.copyFolderLink({
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
                } else if ("video" === _v0) {
                  let _v0 = _v12(_v10, !!_v1.parentProject?.isPrivateToUser),
                    _v1 = !!_v1.metadata?.interactions?.edit?.uri;
                  if (_v16 && _v1 && !_v8) {
                    let _v0 = (0, _v27.idFromUri)(_v1.uri),
                      _v1 = /http/.test(_v1?.link) ? `${_v1?.link}${_v0}` : `${_v7?.vimeoHttpsUrl}${_v1?.link}${_v0}`;
                    _v17(_v0, _v0, _v1), _v17.BPAnalyticsV2.copyVideoShareLink({
                      location: "card",
                      element: "icon",
                      teamUser: _v7?.teamUser,
                      video: _v1,
                      webCtx: {
                        path: _v10,
                        target_path: null
                      }
                    });
                    return;
                  }
                  let _v2 = "";
                  _v2 = _v8 ? `${_v7?.vimeoHttpsUrl}/reviews/${_v8}${_v1.uri}${_v0}` : /http/.test(_v1?.link) ? `${_v1?.link}${_v0}` : `${_v7?.vimeoHttpsUrl}${_v1?.link}${_v0}`, _v14(_v1, (0, _v14.default)(_v2)), _v17.BPAnalyticsV2.copyVideoShareLink({
                    location: "card",
                    element: "icon",
                    teamUser: _v7?.teamUser,
                    video: _v1,
                    webCtx: {
                      path: _v10,
                      target_path: _v2 ?? null
                    }
                  });
                }
              })();
            }
          })
        })
      })]
    });
  }], 0);
}