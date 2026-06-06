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
    _v23 = _v0.i(0);
  _v0.s(["TopRightDecoration", 0, ({
    video: _v0,
    shouldUpdateSideNavStars: _v1,
    location: _v2 = "card",
    buttonVariant: _v3 = "transparent",
    flexDirection: _v4 = "column",
    canShare: _v5,
    shareEventAnalyticsOverride: _v6,
    hasVideoInfo: _v7 = !1,
    onVideoInfo: _v8,
    onRename: _v9,
    pageName: _v10 = ""
  }) => {
    let _v11 = (0, _v23.useViewer)(),
      {
        capabilities: _v12
      } = (0, _v10.useCapability)(["hasLibrarySidePanel"]),
      {
        getVideoShareLoopTrackingParams: _v13
      } = (0, _v20.useShareLoopTrackingParams)(),
      _v14 = (0, _v21.usePageName)(),
      {
        reviewId: _v15
      } = (0, _v2.useContext)(_v13.ReviewLinkContext),
      _v16 = (0, _v18.useCopyVideoLinkToast)(),
      _v17 = !!_v0.metadata?.interactions?.edit?.uri,
      _v18 = (0, _v19.useManageShareAction)({
        canEdit: _v17,
        entityUri: _v0.uri,
        location: "card" === _v2 ? "VL_video_card_hover" : "VL_video_list_hover",
        panel: "COPY_LINK_PANEL"
      }),
      {
        trackVideoLinkCopied: _v19
      } = (0, _v12.useDistributionTracking)();
    if (_v0?.isColdStorage) return (0, _v1.jsx)(_v1.Fragment, {});
    let _v20 = (0, _v22.useVideoShareClick)({
        video: _v0,
        analytics: {
          feature: _v6?.feature || "video_library",
          location: "card" === _v2 ? "video_card" : "video_list",
          page: _v6?.page,
          shareModalEntryPoint: _v6?.shareModalEntryPoint || "card" === _v2 ? "VL_video_card_hover" : "VL_video_list_hover"
        },
        analyticsV2: {
          location: "card" === _v2 ? "card" : "video_list",
          element: "icon"
        },
        parentFolder: _v0.parentProject ?? void 0,
        canShare: _v5
      }),
      _v21 = _v7 ? (0, _v1.jsx)(_v5.Tooltip, {
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
        children: (0, _v1.jsx)(_v4.IconButton, {
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
          "data-id": "hover_info_icon",
          icon: (0, _v1.jsx)(_v8.InfoCircle, {
            height: "400",
            width: "400",
            boxSize: "sm"
          }),
          size: "sm",
          variant: _v3,
          zIndex: 1,
          opacity: 0,
          transition: "opacity 200ms ease-in-out",
          _groupHover: {
            opacity: 1
          },
          onClick: _v0 => {
            _v0.currentTarget.blur(), (0, _v17.sendOpenSidePanelEvent)({
              location: "video_list",
              page: _v14
            }), _v8?.(), _v0.preventDefault(), _v0.stopPropagation();
          }
        })
      }) : null,
      _v22 = _v7 || _v12?.hasLibrarySidePanel || _v15 ? null : (0, _v1.jsx)(_v16.StarredIconContainer, {
        type: "video",
        uri: _v0.uri,
        entity: _v0,
        shouldUpdateSideNav: _v1,
        buttonVariant: _v3
      }),
      _v23 = (0, _v2.useCallback)(_v0 => {
        _v0.preventDefault(), _v0.stopPropagation();
        let _v1 = _v13(_v10, !!_v0?.parentProject?.isPrivateToUser),
          _v2 = "";
        _v2 = _v15 ? `${_v11?.vimeoHttpsUrl}/reviews/${_v15}${_v0.uri}${_v1}` : /http/.test(_v0?.link) ? `${_v0?.link}${_v1}` : `${_v11?.vimeoHttpsUrl}${_v0?.link}${_v1}`;
        let _v3 = (0, _v14.default)(_v2);
        _v16({
          video: _v0,
          isSuccess: _v3,
          onManage: _v18
        }), _v3 && _v19({
          clipId: _v0.uri?.split("/").pop() ?? "",
          source: "video_thumbnail"
        }), _v15.BPAnalyticsV2.copyVideoShareLink({
          location: "card" === _v2 ? "card" : "video_list",
          element: "icon",
          teamUser: _v11?.teamUser,
          folder: _v0.parentProject,
          video: _v0
        });
      }, [_v13, _v2, _v10, _v0, _v11?.teamUser, _v11?.vimeoHttpsUrl, _v15, _v16, _v18, _v19]),
      _v24 = _v5 && _v20 ? (0, _v1.jsx)(_v5.Tooltip, {
        label: (0, _v11.translate)({
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
        placement: "top",
        children: (0, _v1.jsx)(_v4.IconButton, {
          "aria-label": (0, _v11.translate)({
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
          icon: (0, _v1.jsx)(_v9.Share, {
            height: "400",
            width: "400",
            boxSize: "sm"
          }),
          size: "sm",
          variant: _v3,
          zIndex: 1,
          opacity: 0,
          transition: "opacity 200ms ease-in-out",
          _groupHover: {
            opacity: 1
          },
          onClick: _v0 => {
            _v0.currentTarget.blur(), _v20(), _v0.preventDefault(), _v0.stopPropagation();
          }
        })
      }) : null;
    return (0, _v1.jsxs)(_v3.Flex, {
      position: "absolute",
      top: "0",
      right: "0",
      gap: "50",
      direction: _v4,
      children: ["column" === _v4 ? _v7 ? _v21 : _v22 : _v24, _v9 && (0, _v1.jsx)(_v5.Tooltip, {
        label: (0, _v11.translate)({
          singular: "Rename",
          dictionary: {
            es: {
              singular: "Cambiar de nombre"
            },
            "de-DE": {
              singular: "Neu benennen"
            },
            "fr-FR": {
              singular: "Renommer"
            },
            "ja-JP": {
              singular: "名前を変更"
            },
            "ko-KR": {
              singular: "이름 변경"
            },
            "pt-BR": {
              singular: "Renomear"
            },
            "zh-CN": {
              singular: "重新命名"
            }
          }
        }),
        placement: "top",
        children: (0, _v1.jsx)(_v4.IconButton, {
          "aria-label": (0, _v11.translate)({
            singular: "Rename",
            dictionary: {
              es: {
                singular: "Cambiar de nombre"
              },
              "de-DE": {
                singular: "Neu benennen"
              },
              "fr-FR": {
                singular: "Renommer"
              },
              "ja-JP": {
                singular: "名前を変更"
              },
              "ko-KR": {
                singular: "이름 변경"
              },
              "pt-BR": {
                singular: "Renomear"
              },
              "zh-CN": {
                singular: "重新命名"
              }
            }
          }),
          icon: (0, _v1.jsx)(_v6.RenamePencil, {
            height: "400",
            width: "400",
            boxSize: "sm"
          }),
          size: "sm",
          variant: _v3,
          zIndex: 1,
          opacity: 0,
          transition: "opacity 200ms ease-in-out",
          _groupHover: {
            opacity: 1
          },
          onClick: _v0 => {
            _v0.currentTarget.blur(), _v9(), _v0.preventDefault(), _v0.stopPropagation();
          }
        })
      }), (0, _v1.jsx)(_v5.Tooltip, {
        label: (0, _v11.translate)({
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
        }),
        placement: "top",
        children: (0, _v1.jsx)(_v4.IconButton, {
          "aria-label": (0, _v11.translate)({
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
          }),
          icon: (0, _v1.jsx)(_v7.Link, {
            height: "400",
            width: "400",
            boxSize: "sm"
          }),
          size: "sm",
          variant: _v3,
          zIndex: 1,
          opacity: 0,
          transition: "opacity 200ms ease-in-out",
          _groupHover: {
            opacity: 1
          },
          onClick: _v23
        })
      }), "column" === _v4 ? _v24 : _v7 ? _v21 : _v22]
    });
  }]);
}