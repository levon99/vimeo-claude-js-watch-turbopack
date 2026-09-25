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
    isShowAdvancedPlayBar: _v12,
    videoContentAspectRatio: _v13,
    isReviewPageReworkEnabled: _v14,
    fillAvailableHeight: _v15
  }) {
    let {
        colorMode: _v16
      } = (0, _v5.useColorMode)(),
      _v17 = _v2 || _v11,
      _v18 = (0, _v6.useTheme)(),
      {
        reviewId: _v19
      } = (0, _v2.useContext)(_v9.ReviewLinkContext),
      _v20 = (0, _v8.useShowAdvancedControlsFeature)(_v12),
      _v21 = () => {
        _v5 && !_v20 && _v4?.played.length > 0 && _v4._setControlbarVisibility(!0);
      },
      _v22 = !_v14 && _v1 ? "0px" : "8px",
      [_v23, _v24] = (0, _v2.useState)(null),
      _v25 = _v14 && _v13 ? _v13 : null;
    return (0, _v2.useEffect)(() => {
      if (!_v14 || !_v23) return;
      let _v0 = ["--review-video-w", "--review-video-h", "--review-video-x", "--review-video-y", "--review-video-radius"],
        _v1 = () => {
          _v0.forEach(_v0 => _v23.style.removeProperty(_v0));
        };
      _v23.style.setProperty("--review-video-radius", _v22);
      let _v2 = null,
        _v3 = () => {
          _v2?.removeEventListener("resize", _v4), _v2?.removeEventListener("loadedmetadata", _v4), _v2 = null;
        };
      if (!_v25 || _v25 <= 0) return _v1;
      let _v4 = () => {
        let _v0,
          _v1 = _v23.getBoundingClientRect();
        if (0 === _v1.width || 0 === _v1.height) return;
        let _v2 = ((_v0 = _v23.querySelector("video")) !== _v2 && (_v3(), _v2 = _v0, _v0?.addEventListener("resize", _v4), _v0?.addEventListener("loadedmetadata", _v4)), (_v0 && _v0.videoWidth > 0 && _v0.videoHeight > 0 ? _v0.videoWidth / _v0.videoHeight : null) ?? _v25);
        if (_v2 <= 0) return;
        let _v3 = Math.min(_v1.width, _v1.height * _v2),
          _v4 = Math.min(_v1.height, _v1.width / _v2);
        _v23.style.setProperty("--review-video-w", `${_v3}px`), _v23.style.setProperty("--review-video-h", `${_v4}px`), _v23.style.setProperty("--review-video-x", `${(_v1.width - _v3) / 2}px`), _v23.style.setProperty("--review-video-y", `${(_v1.height - _v4) / 2}px`), _v23.style.setProperty("--review-video-radius", _v22);
      };
      _v4();
      let _v5 = new window.ResizeObserver(_v4);
      _v5.observe(_v23);
      let _v6 = new window.MutationObserver(_v4);
      return _v6.observe(_v23, {
        childList: !0,
        subtree: !0
      }), () => {
        _v5.disconnect(), _v6.disconnect(), _v3(), _v1();
      };
    }, [_v14, _v25, _v22, _v23]), (0, _v1.jsxs)(_v3.Box, {
      position: "relative",
      width: "100%",
      maxHeight: _v8,
      ...(_v15 ? {
        height: "100%"
      } : {
        aspectRatio: _v9
      }),
      ref: _v0,
      onMouseEnter: _v21,
      onMouseOver: _v21,
      onMouseLeave: () => {
        _v5 && !_v20 && _v4?.played.length > 0 && _v4._setControlbarVisibility(!1);
      },
      children: [_v4 && _v5 && (0, _v1.jsx)(_v7.AnnotationsOverlay, {
        playerContainerRef: _v0,
        showSvvTimecodedComments: !0,
        player: _v4,
        clipRequestId: _v6,
        teamAccentColor: _v7,
        isViewOnly: !_v10,
        reviewId: _v19,
        videoAspectRatio: _v14 ? _v13 : void 0
      }), (0, _v1.jsx)(_v3.Box, {
        ref: _v24,
        width: "100%",
        height: "100%",
        maxHeight: _v8,
        display: _v17 ? "block" : "none",
        sx: {
          position: "relative",
          ...(_v14 ? {
            ".player.js-player:not(:fullscreen):not(.js-player-fullscreen-api)": {
              backgroundColor: "transparent !important",
              ".vp-content-area-background": {
                display: "none !important"
              },
              "[data-content-area-sibling-eligible]": {
                transitionProperty: "opacity !important"
              },
              ".vp-video-wrapper": {
                backgroundColor: "transparent !important",
                width: "var(--review-video-w, 100%) !important",
                height: "var(--review-video-h, 100%) !important",
                left: "var(--review-video-x, 0) !important",
                top: "var(--review-video-y, 0) !important",
                right: "auto !important",
                bottom: "auto !important",
                borderRadius: "var(--review-video-radius, 8px)",
                overflow: "hidden"
              },
              '[class*="Outro_module_outroWrapper"]': {
                width: "var(--review-video-w, 100%) !important",
                height: "var(--review-video-h, 100%) !important",
                left: "var(--review-video-x, 0) !important",
                top: "var(--review-video-y, 0) !important",
                right: "auto !important",
                bottom: "auto !important",
                transform: "none !important",
                borderRadius: "var(--review-video-radius, 8px)",
                overflow: "hidden"
              },
              ".vp-video-wrapper .vp-video, .vp-preview": {
                borderRadius: "var(--review-video-radius, 8px)"
              }
            }
          } : {}),
          ...(!_v14 && {
            "&::after": {
              content: '""',
              position: "absolute",
              pointerEvents: "none",
              borderRadius: _v22,
              border: "2px solid",
              borderColor: "dark" === _v16 ? _v18.colors.gray[900] : _v18.colors.gray[100],
              top: "-0.5px",
              left: "-0.5px",
              bottom: "-0.5px",
              right: "-0.5px",
              zIndex: "2"
            }
          })
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
        ...(_v14 ? {
          position: "absolute",
          top: "var(--review-video-y, 0)",
          left: "var(--review-video-x, 0)",
          width: "var(--review-video-w, 100%)",
          height: "var(--review-video-h, 100%)"
        } : {
          w: "100%",
          h: "100%"
        }),
        borderRadius: _v22,
        display: _v17 ? "none" : "block"
      })]
    });
  }], 0);
}