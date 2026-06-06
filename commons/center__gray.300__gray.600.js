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
    isMobile: _v0
  }) => (0, _v1.jsx)(_v10.Flex, {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray.300",
    borderRadius: _v0 ? "0px" : "sm",
    _dark: {
      backgroundColor: "gray.600"
    },
    children: (0, _v1.jsxs)(_v10.Flex, {
      flexDirection: "column",
      alignItems: "center",
      gap: "md",
      children: [(0, _v1.jsx)(_v3.Box, {
        padding: "22px",
        width: "88px",
        height: "88px",
        borderRadius: "full",
        backgroundColor: "fill-component",
        children: (0, _v1.jsx)(_v12.TrashBin, {
          color: "text-primary",
          boxSize: "44px"
        })
      }), (0, _v1.jsx)(_v11.Text, {
        variant: "heading-lg",
        color: "text-secondary",
        children: (0, _v13.translate)({
          singular: "This version was deleted",
          dictionary: {
            es: {
              singular: "Esta versión se eliminó."
            },
            "de-DE": {
              singular: "Diese Version wurde gelöscht"
            },
            "fr-FR": {
              singular: "Cette version a été supprimée"
            },
            "ja-JP": {
              singular: "このバージョンは削除されました"
            },
            "ko-KR": {
              singular: "이 버전은 삭제되었습니다."
            },
            "pt-BR": {
              singular: "Essa versão foi excluída"
            },
            "zh-CN": {
              singular: "该版本已被删除"
            }
          }
        })
      })]
    })
  });
  _v0.s(["ReviewPlayer", 0, function ({
    containerRef: _v0,
    isMobile: _v1,
    isDeleted: _v2,
    playerElementRef: _v3,
    player: _v4,
    showComments: _v5,
    clipRequestId: _v6,
    teamAccentColor: _v7,
    playerMaxHeight: _v8,
    videoAspectRatio: _v9,
    allowTimecodeComments: _v10,
    isPlayerReady: _v11,
    isShowAdvancedPlayBar: _v12
  }) {
    let _v13 = _v1 ? "0px" : "8px",
      {
        colorMode: _v14
      } = (0, _v5.useColorMode)(),
      _v15 = _v2 || _v11,
      _v16 = (0, _v6.useTheme)(),
      {
        reviewId: _v17
      } = (0, _v2.useContext)(_v9.ReviewLinkContext),
      _v18 = (0, _v8.useShowAdvancedControlsFeature)(_v12),
      _v19 = () => {
        _v5 && !_v18 && _v4?.played.length > 0 && _v4._setControlbarVisibility(!0);
      };
    return (0, _v1.jsxs)(_v3.Box, {
      position: "relative",
      width: "100%",
      maxHeight: _v8,
      aspectRatio: _v9,
      ref: _v0,
      onMouseEnter: _v19,
      onMouseOver: _v19,
      onMouseLeave: () => {
        _v5 && !_v18 && _v4?.played.length > 0 && _v4._setControlbarVisibility(!1);
      },
      children: [_v4 && _v5 && (0, _v1.jsx)(_v7.AnnotationsOverlay, {
        playerContainerRef: _v0,
        showSvvTimecodedComments: !0,
        player: _v4,
        clipRequestId: _v6,
        teamAccentColor: _v7,
        isViewOnly: !_v10,
        reviewId: _v17
      }), (0, _v1.jsx)(_v3.Box, {
        width: "100%",
        height: "100%",
        maxHeight: _v8,
        display: _v15 ? "block" : "none",
        sx: {
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            pointerEvents: "none",
            borderRadius: _v13,
            border: "2px solid",
            borderColor: "dark" === _v14 ? _v16.colors.gray[900] : _v16.colors.gray[100],
            top: "-0.5px",
            left: "-0.5px",
            bottom: "-0.5px",
            right: "-0.5px",
            zIndex: "2"
          }
        },
        children: _v2 ? (0, _v1.jsx)(_v14, {
          isMobile: _v1
        }) : (0, _v1.jsx)("div", {
          ref: _v3,
          className: "player js-player",
          "data-testid": "video-versions-player",
          style: {
            width: "100%",
            height: "100%",
            borderRadius: "8px"
          }
        })
      }), (0, _v1.jsx)(_v4.Skeleton, {
        w: "100%",
        h: "100%",
        borderRadius: _v13,
        display: _v15 ? "none" : "block"
      })]
    });
  }], 0);
  var _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0);
  _v0.s(["VersionAlert", 0, ({
    uri: _v0,
    isOpen: _v1,
    closeAlert: _v2
  }) => _v1 ? (0, _v1.jsx)(_v3.Box, {
    paddingX: "sm",
    children: (0, _v1.jsx)(_v15.Alert, {
      variant: "info",
      size: "sm",
      onClose: () => _v2(),
      children: (0, _v1.jsx)(_v16.AlertDescription, {
        children: (0, _v1.jsx)(_v11.Text, {
          variant: "body-xl",
          as: "span",
          fontSize: "body-sm",
          color: "text-primary",
          letterSpacing: "0.24px",
          children: (0, _v13.translate)({
            singular: "You are viewing a previous version of this video. {LINK}View current version{/LINK}",
            replacements: {
              LINK: _v0 => (0, _v1.jsx)(_v17.Link, {
                href: _v0,
                variant: "inline-primary",
                fontSize: "body-sm",
                _hover: {
                  cursor: "pointer"
                },
                children: _v0
              })
            },
            dictionary: {
              es: {
                singular: "Está viendo una versión anterior de este video. {LINK}Ver la versión actual{/LINK}."
              },
              "de-DE": {
                singular: "Sie sehen sich eine frühere Version dieses Videos an. {LINK}Aktuelle Version anzeigen{/LINK}"
              },
              "fr-FR": {
                singular: "Vous regardez une ancienne version de cette vidéo. {LINK}Afficher la version actuelle{/LINK}"
              },
              "ja-JP": {
                singular: "この動画の以前のバージョンを表示しています。{LINK}現在のバージョンを表示する{/LINK}"
              },
              "ko-KR": {
                singular: "이전 버전의 동영상입니다. {LINK}최신 버전 보기{/LINK}"
              },
              "pt-BR": {
                singular: "Você está visualizando uma versão anterior deste vídeo. {LINK}Visualizar versão atual{/LINK}"
              },
              "zh-CN": {
                singular: "您正在查看此视频的先前版本。{LINK}查看当前版本{/LINK}"
              }
            }
          })
        })
      })
    })
  }) : null], 0);
}