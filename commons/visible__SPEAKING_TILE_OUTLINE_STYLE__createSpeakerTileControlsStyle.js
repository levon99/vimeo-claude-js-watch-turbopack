{
  "use strict";

  var _v1,
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = {
    boxShadow: `0 0 ${(0, _v2.rem)(4)} color-mix(in srgb, var(--vimeo-colors-fill-brand) 60%, transparent)`
  };
  function _v5(_v0) {
    return {
      ...(0, _v3.createTabListColumnHalfItemStyle)({
        withBorder: !_v0
      }),
      ...(_v0 ? {
        overflow: "visible"
      } : null)
    };
  }
  _v0.s(["SPEAKING_TILE_OUTLINE_STYLE", 0, _v4, "createSpeakerTileControlsStyle", 0, function (_v0, _v1) {
    return _v1 ? {
      opacity: +!!_v0,
      pointerEvents: _v0 ? "auto" : "none",
      _focusWithin: {
        opacity: 1,
        pointerEvents: "auto"
      }
    } : {
      visibility: _v0 ? "visible" : "hidden"
    };
  }, "createSpeakerTileItemStyle", 0, _v5, "createSpeakerTileListStyle", 0, function (_v0, _v1) {
    return {
      ...(0, _v3.createTabListColumnStyle)(_v0),
      ...(_v1 ? {
        paddingLeft: (0, _v2.rem)(2),
        paddingTop: (0, _v2.rem)(2)
      } : null)
    };
  }], 0);
  var _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0);
  _v0.s(["SpeakerTileCaption", 0, function ({
    id: _v0,
    className: _v1,
    name: _v2,
    isConnected: _v3,
    networkQuality: _v4,
    health: _v5
  }) {
    return (0, _v6.jsxs)(_v7.Flex, {
      color: "text-primary",
      maxWidth: (0, _v2.rem)(140),
      padding: (0, _v2.rem)(4),
      overflow: "hidden",
      whiteSpace: "nowrap",
      children: [(0, _v6.jsx)(_v10.LiveSourceStatusIndicator, {
        isConnected: _v3,
        networkQuality: _v4,
        health: _v5
      }), (0, _v6.jsx)(_v9.BokehTooltip, {
        placement: "top",
        label: _v2,
        shouldWrapChildren: !1,
        children: (0, _v6.jsx)(_v8.Text, {
          id: _v0,
          className: _v1,
          cursor: "pointer",
          variant: "body-xs",
          color: "text-primary",
          width: "100%",
          overflow: "hidden",
          textOverflow: "ellipsis",
          children: _v2
        })
      })]
    });
  }], 0);
  var _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0);
  function _v18({
    id: _v0 = "",
    className: _v1 = "",
    children: _v2 = ""
  }) {
    return (0, _v6.jsx)(_v17.Badge, {
      id: _v0,
      className: _v1,
      color: "white",
      position: "absolute",
      left: (0, _v2.rem)(4),
      bottom: (0, _v2.rem)(4),
      fontSize: (0, _v2.rem)(10),
      zIndex: 20,
      children: _v2
    });
  }
  var _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = ((_v1 = {}).MUTED = "muted", _v1.SILENT = "silent", _v1.SPEAKING = "speaking", _v1);
  let _v24 = [{
      key: "left",
      multiplier: .55
    }, {
      key: "center",
      multiplier: 1
    }, {
      key: "right",
      multiplier: .8
    }],
    _v25 = (0, _v2.rem)(24),
    _v26 = (0, _v2.rem)(4),
    _v27 = (0, _v2.rem)(16),
    _v28 = (0, _v2.rem)(8),
    _v29 = `height ${_v19.Duration.lg}s cubic-bezier(${_v19.Easing["basic-standard"].join(", ")})`;
  function _v30({
    isMuted: _v0,
    isSpeaking: _v1,
    level: _v2
  }) {
    let _v3,
      _v4 = (0, _v20.usePrefersReducedMotion)(),
      _v5 = _v0 ? "muted" : _v1 ? "speaking" : "silent",
      _v6 = _v5 === _v23.SPEAKING;
    return (0, _v6.jsxs)(_v11.Box, {
      role: "img",
      "aria-label": _v5 === _v23.MUTED ? (0, _v12.translate)({
        singular: "Muted",
        dictionary: {
          es: {
            singular: "Silenciado"
          },
          "de-DE": {
            singular: "Stummgeschaltet"
          },
          "fr-FR": {
            singular: "Muet"
          },
          "ja-JP": {
            singular: "ミュート"
          },
          "ko-KR": {
            singular: "음소거됨"
          },
          "pt-BR": {
            singular: "Mudo"
          },
          "zh-CN": {
            singular: "已静音"
          }
        }
      }) : _v5 === _v23.SPEAKING ? (0, _v12.translate)({
        singular: "Speaking",
        dictionary: {
          es: {
            singular: "Hablando"
          },
          "de-DE": {
            singular: "Spricht"
          },
          "fr-FR": {
            singular: "Parle"
          },
          "ja-JP": {
            singular: "発言中"
          },
          "ko-KR": {
            singular: "발언 중"
          },
          "pt-BR": {
            singular: "Falando"
          },
          "zh-CN": {
            singular: "正在发言"
          }
        }
      }) : (0, _v12.translate)({
        singular: "Unmuted",
        dictionary: {
          es: {
            singular: "Sin silenciar"
          },
          "de-DE": {
            singular: "Stummschaltung aufgehoben"
          },
          "fr-FR": {
            singular: "Micro activé"
          },
          "ja-JP": {
            singular: "音声オン"
          },
          "ko-KR": {
            singular: "음소거 해제됨"
          },
          "pt-BR": {
            singular: "Não silenciado"
          },
          "zh-CN": {
            singular: "已取消静音"
          }
        }
      }),
      position: "absolute",
      left: _v26,
      top: _v26,
      zIndex: 20,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: _v25,
      height: _v25,
      borderRadius: "full",
      color: _v6 ? "white" : "gray.350",
      backgroundColor: _v6 ? "fill-brand" : "gray.700",
      children: [_v5 === _v23.MUTED ? (0, _v6.jsx)(_v21.MicOff, {
        boxSize: _v27
      }) : null, _v5 === _v23.SILENT ? (0, _v6.jsx)(_v22.MicOn, {
        boxSize: _v27
      }) : null, _v6 ? (0, _v6.jsx)(_v11.Box, {
        display: "flex",
        alignItems: "center",
        gap: (0, _v2.rem)(2),
        children: (_v3 = Math.min(1, Math.max(0, _v2 / 100)), _v24.map(({
          key: _v0,
          multiplier: _v1
        }) => ({
          key: _v0,
          height: (0, _v2.rem)(4 + _v3 * _v1 * 10)
        }))).map(({
          key: _v0,
          height: _v1
        }) => (0, _v6.jsx)(_v11.Box, {
          width: (0, _v2.rem)(2),
          height: _v4 ? _v28 : _v1,
          borderRadius: "full",
          backgroundColor: "currentColor",
          sx: _v4 ? void 0 : {
            transition: _v29
          }
        }, _v0))
      }) : null]
    });
  }
  var _v31 = _v0.i(0);
  _v0.s(["SpeakerTilePreview", 0, function ({
    id: _v0,
    className: _v1,
    previewId: _v2,
    name: _v3,
    colorSeed: _v4,
    track: _v5,
    isMirrored: _v6,
    fontFamily: _v7,
    withAnimation: _v8 = !1,
    isMuted: _v9,
    level: _v10,
    isRedesignEnabled: _v11,
    isSharingScreen: _v12 = !1,
    legacyAudioBadge: _v13,
    children: _v14,
    onMouseEnter: _v15,
    onMouseLeave: _v16,
    onMouseMove: _v17
  }) {
    let _v18 = function (_v0, _v1) {
      let _v2 = !_v1 && _v0 >= 60,
        [_v3, _v4] = (0, _v31.useState)(_v2);
      return (0, _v31.useEffect)(() => {
        let _v0 = setTimeout(() => _v4(_v2), _v2 || _v1 ? 0 : 400);
        return () => clearTimeout(_v0);
      }, [_v2, _v1]), !_v1 && _v3;
    }(_v10, _v9);
    return (0, _v6.jsx)(_v11.Box, {
      id: _v0,
      className: _v1,
      sx: {
        ..._v5(_v11),
        ...(_v11 && _v18 ? _v4 : null)
      },
      onMouseEnter: _v15,
      onMouseLeave: _v16,
      onMouseMove: _v17,
      children: (0, _v6.jsxs)(_v7.Flex, {
        direction: "column",
        alignItems: "center",
        background: _v14.PREVIEW_GRADIENT,
        overflow: "hidden",
        borderRadius: "inherit",
        sx: _v14.STRICT_16BY9_BOX_STYLE,
        children: [(0, _v6.jsx)(_v15.AgoraStreamAvatar, {
          avatarSrc: void 0,
          name: _v3,
          colorSeed: _v4,
          fontFamily: _v7,
          withAnimation: _v8
        }), (0, _v6.jsx)(_v16.AgoraMediaTrackPreview, {
          id: _v2,
          track: _v5,
          isMirrored: _v6,
          background: "transparent",
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }), _v11 ? (0, _v6.jsx)(_v30, {
          isMuted: _v9,
          isSpeaking: _v18,
          level: _v10
        }) : _v13, _v12 ? (0, _v6.jsx)(_v18, {
          id: (0, _v13.createDomName)(_v0, "sharing-screen-badge"),
          className: (0, _v13.createDomName)(_v1, "sharing-screen-badge"),
          children: (0, _v12.translate)({
            singular: "Sharing screen",
            dictionary: {
              es: {
                singular: "Compartiendo pantalla"
              },
              "de-DE": {
                singular: "Bildschirm freigeben"
              },
              "fr-FR": {
                singular: "Partage de l'écran"
              },
              "ja-JP": {
                singular: "画面の共有"
              },
              "ko-KR": {
                singular: "화면 공유 중"
              },
              "pt-BR": {
                singular: "Compartilhando a tela"
              },
              "zh-CN": {
                singular: "共享屏幕"
              }
            }
          })
        }) : null, _v14]
      })
    });
  }], 0), _v0.s(["useLatestValue", 0, function (_v0) {
    let _v1 = (0, _v31.useRef)(_v0);
    return (0, _v31.useEffect)(() => {
      _v1.current = _v0;
    }, [_v0]), _v1;
  }], 0);
}