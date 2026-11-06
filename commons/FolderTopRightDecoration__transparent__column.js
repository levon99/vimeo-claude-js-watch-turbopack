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
    _v17 = _v0.i(0);
  _v0.s(["FolderTopRightDecoration", 0, ({
    folder: _v0,
    shareEventAnalyticsOverride: _v1,
    buttonVariant: _v2 = "transparent",
    flexDirection: _v3 = "column",
    onRename: _v4
  }) => {
    let _v5 = (0, _v12.useCopyFolderLinkToast)(),
      {
        warnIfProtectedVideos: _v6
      } = (0, _v9.useFolderProtectedVideosWarning)(),
      _v7 = (0, _v13.useManageShareAction)({
        canEdit: (0, _v17.getFolderPermissions)(_v0).canEditSettings,
        entityUri: _v0.uri,
        location: _v11.SHARE_RESOURCE_FOLDER_CARD_HOVER_ENTRY_POINT,
        panel: "INVITE_PANEL"
      }),
      _v8 = (0, _v16.usePageName)(),
      _v9 = (0, _v15.useFolderShareClick)({
        folder: _v0,
        analytics: {
          feature: _v1?.feature || _v11.AnalyticsFeatures.VIDEO_LIBRARY,
          location: _v1?.location || _v11.AnalyticsLocations.FOLDER_CARD,
          page: _v1?.page,
          shareModalEntryPoint: _v1?.shareModalEntryPoint || _v11.SHARE_RESOURCE_FOLDER_CARD_HOVER_ENTRY_POINT
        }
      }),
      {
        getFolderShareLoopTrackingParams: _v10
      } = (0, _v14.useShareLoopTrackingParams)(),
      _v11 = _v9 ? (0, _v1.jsx)(_v4.Tooltip, {
        label: (0, _v8.translate)({
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
        children: (0, _v1.jsx)(_v3.IconButton, {
          "aria-label": (0, _v8.translate)({
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
          icon: (0, _v1.jsx)(_v7.Share, {
            height: "400",
            width: "400",
            boxSize: "sm"
          }),
          size: "sm",
          variant: _v2,
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
      }) : null;
    return (0, _v1.jsxs)(_v2.Flex, {
      position: "absolute",
      top: "0",
      right: "0",
      gap: "50",
      direction: _v3,
      zIndex: 10,
      children: ["column" === _v3 ? null : _v11, _v4 && (0, _v1.jsx)(_v4.Tooltip, {
        label: (0, _v8.translate)({
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
        children: (0, _v1.jsx)(_v3.IconButton, {
          "aria-label": (0, _v8.translate)({
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
          variant: _v2,
          zIndex: 1,
          opacity: 0,
          transition: "opacity 200ms ease-in-out",
          _groupHover: {
            opacity: 1
          },
          onClick: _v0 => {
            _v0.currentTarget.blur(), _v4(), _v0.preventDefault(), _v0.stopPropagation();
          }
        })
      }), (0, _v1.jsx)(_v4.Tooltip, {
        label: (0, _v8.translate)({
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
        children: (0, _v1.jsx)(_v3.IconButton, {
          "aria-label": (0, _v8.translate)({
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
          icon: (0, _v1.jsx)(_v5.Link, {
            height: "400",
            width: "400",
            boxSize: "sm"
          }),
          size: "sm",
          variant: _v2,
          zIndex: 1,
          opacity: 0,
          transition: "opacity 200ms ease-in-out",
          _groupHover: {
            opacity: 1
          },
          onClick: _v0 => {
            let _v1 = _v0.uri.split("/"),
              _v2 = _v10(_v8, !!_v0.isPrivateToUser),
              _v3 = `${window.location.protocol}//${window.location.hostname}/user/${_v1[2]}/folder/${_v1[4]}${_v2}`;
            _v6(_v3), _v5({
              isSuccess: (0, _v10.default)(_v3),
              onManage: _v7
            }), _v0.preventDefault(), _v0.stopPropagation();
          }
        })
      }), "column" === _v3 ? _v11 : null]
    });
  }], 0);
  var _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0);
  _v0.s(["VideoTopRightDecoration", 0, ({
    video: _v0,
    location: _v1 = "card",
    buttonVariant: _v2 = "transparent",
    flexDirection: _v3 = "column",
    canShare: _v4,
    shareEventAnalyticsOverride: _v5,
    hasVideoInfo: _v6 = !1,
    onVideoInfo: _v7,
    onRename: _v8,
    pageName: _v9 = "",
    copyLinkOverride: _v10
  }) => {
    let _v11 = (0, _v21.useRegistrationRequiredToast)(),
      _v12 = (0, _v20.useCopyVideoLink)({
        video: _v0,
        surface: "video_thumbnail",
        analyticsElement: "icon",
        analyticsLocation: "card" === _v1 ? "card" : "video_list",
        manageActionLocation: "card" === _v1 ? "VL_video_card_hover" : "VL_video_list_hover",
        pageNameOverride: _v9,
        linkOverride: _v10
      }),
      _v13 = _v0.metadata?.hasMandatoryEmailCapture ?? !1,
      _v14 = (0, _v22.useVideoShareClick)({
        video: _v0,
        analytics: {
          feature: _v5?.feature || "video_library",
          location: "card" === _v1 ? "video_card" : "video_list",
          page: _v5?.page,
          shareModalEntryPoint: _v5?.shareModalEntryPoint || "card" === _v1 ? "VL_video_card_hover" : "VL_video_list_hover"
        },
        parentFolder: _v0.parentProject ?? void 0,
        canShare: _v4
      }),
      _v15 = _v6 ? (0, _v1.jsx)(_v4.Tooltip, {
        label: (0, _v8.translate)({
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
          "aria-label": (0, _v8.translate)({
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
          icon: (0, _v1.jsx)(_v19.InfoCircle, {
            height: "400",
            width: "400",
            boxSize: "sm"
          }),
          size: "sm",
          variant: _v2,
          zIndex: 1,
          opacity: 0,
          transition: "opacity 200ms ease-in-out",
          _groupHover: {
            opacity: 1
          },
          onClick: _v0 => {
            _v0.currentTarget.blur(), _v7?.(), _v0.preventDefault(), _v0.stopPropagation();
          }
        })
      }) : null,
      _v16 = (0, _v18.useCallback)(_v0 => {
        (_v0.preventDefault(), _v0.stopPropagation(), _v13) ? _v11(_v0) : _v12();
      }, [_v12, _v13, _v11, _v0]);
    if (_v0?.isColdStorage) return (0, _v1.jsx)(_v1.Fragment, {});
    let _v17 = _v4 && _v14 ? (0, _v1.jsx)(_v4.Tooltip, {
      label: (0, _v8.translate)({
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
      children: (0, _v1.jsx)(_v3.IconButton, {
        "aria-label": (0, _v8.translate)({
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
        icon: (0, _v1.jsx)(_v7.Share, {
          height: "400",
          width: "400",
          boxSize: "sm"
        }),
        size: "sm",
        variant: _v2,
        zIndex: 1,
        opacity: 0,
        transition: "opacity 200ms ease-in-out",
        _groupHover: {
          opacity: 1
        },
        onClick: _v0 => {
          _v0.currentTarget.blur(), _v13 ? _v11(_v0) : _v14(), _v0.preventDefault(), _v0.stopPropagation();
        }
      })
    }) : null;
    return (0, _v1.jsxs)(_v2.Flex, {
      position: "absolute",
      top: "0",
      right: "0",
      gap: "50",
      direction: _v3,
      children: ["column" === _v3 ? _v15 : _v17, _v8 && (0, _v1.jsx)(_v4.Tooltip, {
        label: (0, _v8.translate)({
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
        children: (0, _v1.jsx)(_v3.IconButton, {
          "aria-label": (0, _v8.translate)({
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
          variant: _v2,
          zIndex: 1,
          opacity: 0,
          transition: "opacity 200ms ease-in-out",
          _groupHover: {
            opacity: 1
          },
          onClick: _v0 => {
            _v0.currentTarget.blur(), _v8(), _v0.preventDefault(), _v0.stopPropagation();
          }
        })
      }), (0, _v1.jsx)(_v4.Tooltip, {
        label: (0, _v8.translate)({
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
        children: (0, _v1.jsx)(_v3.IconButton, {
          "aria-label": (0, _v8.translate)({
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
          icon: (0, _v1.jsx)(_v5.Link, {
            height: "400",
            width: "400",
            boxSize: "sm"
          }),
          size: "sm",
          variant: _v2,
          zIndex: 1,
          opacity: 0,
          transition: "opacity 200ms ease-in-out",
          _groupHover: {
            opacity: 1
          },
          onClick: _v16
        })
      }), "column" === _v3 ? _v17 : _v15]
    });
  }], 0);
  var _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0);
  _v0.s(["ListViewHoverActionsContainer", 0, ({
    children: _v0,
    onRename: _v1,
    disableHoverBackground: _v2 = !1
  }) => {
    let _v3 = (0, _v25.useColorModeValue)("linear-gradient(to right, transparent, #E8EAEE 30%)", "linear-gradient(to right, transparent, #1A2326 30%)");
    return (0, _v1.jsxs)(_v23.Box, {
      position: "absolute",
      right: "92px",
      display: {
        base: "none",
        md: "block"
      },
      children: [(0, _v1.jsx)(_v2.Flex, {
        width: (0, _v24.rem)(175),
        height: (0, _v24.rem)(40),
        position: "absolute",
        opacity: 0,
        right: (0, _v24.rem)(-45),
        bottom: "0",
        top: (0, _v24.rem)(4),
        _groupHover: _v2 ? void 0 : {
          background: _v3,
          opacity: 1,
          transitionDuration: "0.3s",
          transitionTimingFunction: "ease-in-out"
        }
      }), (0, _v1.jsx)(_v23.Box, {
        position: "absolute",
        top: (0, _v24.rem)(3),
        right: (0, _v24.rem)(-55),
        children: _v1 ? _v18.default.Children.map(_v0, _v0 => _v18.default.isValidElement(_v0) ? _v18.default.cloneElement(_v0, {
          onRename: _v1
        }) : _v0) : _v0
      })]
    });
  }], 0);
}