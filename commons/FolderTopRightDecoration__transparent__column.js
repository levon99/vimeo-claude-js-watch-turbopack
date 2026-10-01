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
    _v18 = _v0.i(0);
  _v0.s(["FolderTopRightDecoration", 0, ({
    folder: _v0,
    shareEventAnalyticsOverride: _v1,
    buttonVariant: _v2 = "transparent",
    flexDirection: _v3 = "column",
    location: _v4,
    onRename: _v5
  }) => {
    let _v6 = (0, _v13.useCopyFolderLinkToast)(),
      _v7 = (0, _v14.useManageShareAction)({
        canEdit: (0, _v18.getFolderPermissions)(_v0).canEditSettings,
        entityUri: _v0.uri,
        location: _v11.SHARE_RESOURCE_FOLDER_CARD_HOVER_ENTRY_POINT,
        panel: "INVITE_PANEL"
      }),
      _v8 = (0, _v17.usePageName)(),
      _v9 = (0, _v16.useFolderShareClick)({
        folder: _v0,
        analytics: {
          feature: _v1?.feature || _v11.AnalyticsFeatures.VIDEO_LIBRARY,
          location: _v1?.location || _v11.AnalyticsLocations.FOLDER_CARD,
          page: _v1?.page,
          shareModalEntryPoint: _v1?.shareModalEntryPoint || _v11.SHARE_RESOURCE_FOLDER_CARD_HOVER_ENTRY_POINT
        },
        analyticsV2: {
          location: _v4,
          element: "icon"
        }
      }),
      _v10 = (0, _v10.useViewer)(),
      {
        getFolderShareLoopTrackingParams: _v11
      } = (0, _v15.useShareLoopTrackingParams)(),
      _v12 = _v9 ? (0, _v1.jsx)(_v4.Tooltip, {
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
      children: ["column" === _v3 ? null : _v12, _v5 && (0, _v1.jsx)(_v4.Tooltip, {
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
            _v0.currentTarget.blur(), _v5(), _v0.preventDefault(), _v0.stopPropagation();
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
              _v2 = _v11(_v8, !!_v0.isPrivateToUser),
              _v3 = `${window.location.protocol}//${window.location.hostname}/user/${_v1[2]}/folder/${_v1[4]}${_v2}`;
            _v6({
              isSuccess: (0, _v9.default)(_v3),
              onManage: _v7
            }), _v0.preventDefault(), _v0.stopPropagation(), _v12.BPAnalyticsV2.copyFolderLink({
              location: _v4,
              element: "icon",
              teamUser: _v10?.teamUser,
              folder: _v0,
              webCtx: {
                path: window.location.pathname,
                page_name: _v0.isPrivateToUser ? "my_library" : "video_library"
              }
            });
          }
        })
      }), "column" === _v3 ? _v12 : null]
    });
  }]);
}