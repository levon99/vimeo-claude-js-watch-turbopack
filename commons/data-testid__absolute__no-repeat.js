{
  "use strict";

  var _v1,
    _v2,
    _v3,
    _v4,
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
  function _v20({
    scene: _v0,
    guests: _v1,
    theme: _v2,
    broadcasterInfo: _v3,
    fullscreenList: _v4,
    agoraMediaList: _v5,
    slidesList: _v6
  }) {
    let _v7 = !!(0, _v11.useMemo)(() => (0, _v17.findPipDescriptorInScene)(_v0), [_v0]),
      _v8 = (0, _v11.useMemo)(() => Object.values(_v0?.graphics || {}), [_v0?.graphics]),
      _v9 = (0, _v13.useLayoutPlaceholdersDescriptors)(_v0),
      _v10 = _v8.map(_v0 => {
        let _v1 = `${_v0.type}-thumbnail`;
        switch (_v0.type) {
          case _v15.EGraphicsDescriptorType.AGORA_STREAM:
            {
              let _v0 = (0, _v16.parseAgoraConnectionDetails)(_v0.data.sourceId),
                _v1 = _v0 ? _v1?.[_v0[1]] : null,
                _v2 = _v0.data?.sourceId === _v14.EAgoraConnectionType.BROADCASTER,
                _v3 = _v1?.name || _v3?.name || "U",
                _v4 = _v1?.id || (_v2 ? _v14.EAgoraConnectionType.BROADCASTER : "U"),
                _v5 = 100 * (1.25 * _v0.position.guestLabelScale || 1) + "%";
              if (_v7) return null;
              return (0, _v5.jsx)(_v8.Flex, {
                "data-testid": _v1,
                background: _v19.PREVIEW_GRADIENT,
                position: "absolute",
                zIndex: _v0.position.z,
                top: `${_v0.position.top}%`,
                left: `${_v0.position.left}%`,
                width: `${_v0.position.width}%`,
                height: `${_v0.position.height}%`,
                children: (0, _v5.jsx)(_v12.AgoraStreamAvatar, {
                  name: _v3,
                  colorSeed: _v4,
                  fontSize: _v5,
                  fontFamily: _v2?.font
                })
              }, _v0.data.sourceId);
            }
          case _v15.EGraphicsDescriptorType.AGORA_MEDIA:
            {
              let _v0 = _v5?.[_v0.data.sourceId] || null,
                _v1 = _v0?.videoThumbFullSize || "";
              return (0, _v5.jsx)(_v11.Fragment, {
                children: (0, _v5.jsx)(_v6.Box, {
                  "data-testid": _v1,
                  position: "absolute",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundImage: `url('${_v1}')`,
                  zIndex: _v0.position.z,
                  top: `${_v0.position.top}%`,
                  left: `${_v0.position.left}%`,
                  width: `${_v0.position.width}%`,
                  height: `${_v0.position.height}%`
                })
              }, _v0.data.sourceId);
            }
          case _v15.EGraphicsDescriptorType.IMAGE:
            {
              let _v0 = _v4?.[_v0.data.sourceId]?.imageSrc || "";
              return (0, _v5.jsx)(_v6.Box, {
                "data-testid": _v1,
                position: "absolute",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage: `url('${_v0}')`,
                zIndex: _v0.position.z,
                top: `${_v0.position.top}%`,
                left: `${_v0.position.left}%`,
                width: `${_v0.position.width}%`,
                height: `${_v0.position.height}%`
              }, _v0.data.sourceId);
            }
          case _v15.EGraphicsDescriptorType.SLIDES:
            {
              let {
                  sourceId: _v0,
                  slideIndex: _v1 = 0
                } = _v0.data,
                _v2 = _v6?.[_v0],
                _v3 = (0, _v18.getSlideThumbnail)(_v2, _v1);
              return (0, _v5.jsx)(_v6.Box, {
                "data-testid": _v1,
                position: "absolute",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundImage: `url('${_v3}')`,
                zIndex: _v0.position.z,
                top: `${_v0.position.top}%`,
                left: `${_v0.position.left}%`,
                width: `${_v0.position.width}%`,
                height: `${_v0.position.height}%`
              }, _v0.data.sourceId);
            }
          default:
            return null;
        }
      }),
      _v11 = _v7 ? null : _v9.map((_v0, _v1) => (0, _v5.jsx)(_v8.Flex, {
        position: "absolute",
        border: "1px solid black",
        background: _v19.PREVIEW_GRADIENT,
        zIndex: _v0.z,
        top: `${_v0.top}%`,
        left: `${_v0.left}%`,
        width: `${_v0.width}%`,
        height: `${_v0.height}%`,
        opacity: .7
      }, _v0.index || `i-${_v1}`));
    return (0, _v5.jsxs)(_v5.Fragment, {
      children: [_v10, _v11]
    });
  }
  var _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0);
  let _v24 = _v0 => (0, _v5.jsx)(_v23.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v5.jsxs)("g", {
      fill: "currentColor",
      children: [(0, _v5.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M22 8a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V8Zm-4-2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12Z"
      }), (0, _v5.jsx)("path", {
        d: "M13 13a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-2Z"
      })]
    })
  });
  _v0.s(["LowerThird", 0, _v24], 0);
  var _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0);
  function _v30({
    className: _v0 = (0, _v29.createLiveDomName)("modifier-icon"),
    testId: _v1,
    children: _v2
  }) {
    return (0, _v5.jsx)(_v28.Center, {
      className: _v0,
      "data-testid": _v1,
      background: "fill-blur",
      backdropFilter: `blur(${(0, _v7.rem)(40)})`,
      position: "absolute",
      zIndex: _v26.graphicsConfig.GRAPHICS_POSITIONING.Z_INDEX.SCENE_MODIFIERS,
      top: (0, _v7.rem)(6),
      right: (0, _v7.rem)(6),
      borderRadius: (0, _v7.rem)(4),
      height: (0, _v7.rem)(20),
      width: (0, _v7.rem)(20),
      sx: (0, _v19.createSvgStyle)({
        size: (0, _v7.rem)(12)
      }),
      children: _v2
    });
  }
  let _v31 = (0, _v11.memo)(({
    activeScreenOwnerId: _v0,
    scene: _v1,
    guests: _v2,
    className: _v3
  }) => function ({
    scene: _v0,
    activeScreenOwnerId: _v1,
    guests: _v2
  }) {
    return (0, _v11.useMemo)(() => {
      let _v0 = Object.values(_v0.graphics || {}),
        _v1 = new Set();
      return _v0.forEach(_v0 => {
        if (_v1 && _v0.type === _v15.EGraphicsDescriptorType.AGORA_STREAM) {
          let _v0 = (0, _v16.parseAgoraConnectionDetails)(_v0.data.sourceId),
            _v1 = _v0 ? _v2[_v0[1]] : null;
          (_v0.data?.sourceId === _v14.EAgoraConnectionType.BROADCASTER ? _v14.EAgoraConnectionType.BROADCASTER : _v1?.id || null) === _v1 && _v1.add(_v15.EGraphicsDescriptorType.AGORA_SCREEN);
        }
        _v26.graphicsConfig.SCENE.INFO.MODIFIER_TYPES.includes(_v0.type) && _v1.add(_v0.type);
      }), Array.from(_v1).sort((_v0, _v1) => _v0.localeCompare(_v1));
    }, [_v0.graphics, _v2, _v1]);
  }({
    scene: _v1,
    guests: _v2,
    activeScreenOwnerId: _v0
  }).map(_v0 => {
    let _v1 = `${_v0}-modifier`,
      _v2 = null;
    switch (_v0) {
      case _v15.EGraphicsDescriptorType.QNA:
        _v2 = (0, _v5.jsx)(_v30, {
          className: (0, _v27.createDomName)(_v3, "modifier-qna"),
          testId: _v1,
          children: (0, _v5.jsx)(_v22.ReviewQuestion, {
            color: "white"
          })
        }, _v0);
        break;
      case _v15.EGraphicsDescriptorType.POLL:
        _v2 = (0, _v5.jsx)(_v30, {
          className: (0, _v27.createDomName)(_v3, "modifier-poll"),
          testId: _v1,
          children: (0, _v5.jsx)(_v21.ChartGrowthAlt, {
            color: "white"
          })
        }, _v0);
        break;
      case _v15.EGraphicsDescriptorType.LOWER_THIRD:
        _v2 = (0, _v5.jsx)(_v30, {
          className: (0, _v27.createDomName)(_v3, "modifier-lowerthird"),
          testId: _v1,
          children: (0, _v5.jsx)(_v24, {
            color: "white"
          })
        }, _v0);
        break;
      case _v15.EGraphicsDescriptorType.SLIDES:
        _v2 = (0, _v5.jsx)(_v30, {
          className: (0, _v27.createDomName)(_v3, "modifier-slides"),
          testId: _v1,
          children: (0, _v5.jsx)(_v25.PresentationLine, {
            color: "white"
          })
        }, _v0);
    }
    return _v2;
  }));
  var _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0);
  function _v43({
    scene: _v0 = null,
    graphicsContext: {
      theme: _v1,
      logoList: _v2,
      lowerthirdList: _v3,
      fullscreenList: _v4,
      pollList: _v5,
      agoraMediaList: _v6,
      globalList: _v7,
      slidesList: _v8
    } = (0, _v32.useManager)(_v41.GraphicsManager),
    composerSettingsContext: {
      globalLogo: _v9
    } = (0, _v32.useManager)(_v37.ComposerSettingsManager),
    guestContext: {
      guests: _v10
    } = (0, _v32.useManager)(_v35.GuestsManager, ({
      guests: _v0
    }) => [_v0]),
    agoraContext: {
      role: _v11,
      connectionConfig: _v12,
      mediaUid: _v13,
      roomVolumeSmooth: _v14
    } = (0, _v32.useManager)(_v34.BroadcasterAgoraManager, ({
      mediaUid: _v0,
      role: _v1,
      connectionConfig: _v2,
      roomVolumeSmooth: _v3
    }) => [_v0, _v2, _v1, _v3]),
    remoteMediaContext: {
      roomMedia: _v15
    } = (0, _v32.useManager)(_v39.RemoteMediaManager, ({
      roomMedia: _v0
    }) => [_v0]),
    roomScreenShareContext: {
      activeScreenShareId: _v16
    } = (0, _v32.useManager)(_v36.RoomScreenShareManager, ({
      activeScreenShareId: _v0
    }) => [_v0]),
    localMediaContext: {
      video: _v17,
      screen: _v18
    } = (0, _v32.useManager)(_v38.LocalMediaManager)
  }) {
    let _v19 = (0, _v33.useSceneScreenShare)(_v16, _v12?.screen.uid || null, _v11 !== _v14.EClientRole.HOST || _v18.isMuted ? null : _v18.track, _v0, _v15),
      _v20 = _v17.isMuted ? null : _v17.track;
    return _v0 ? (0, _v5.jsx)(_v42.SceneRenderer, {
      canEdit: !1,
      emptyStatePlaceholder: null,
      isInProgram: !0,
      scene: _v0,
      theme: _v1,
      logoList: _v2,
      lowerthirdList: _v3,
      fullscreenList: _v4,
      globalList: _v7,
      pollList: _v5,
      agoraMediaList: _v6,
      guests: _v10,
      slidesList: _v8,
      localMediaUid: _v13.value,
      roomMedia: _v15,
      roomVolume: _v14,
      localVideo: _v20,
      activeScreen: _v19,
      globalLogo: _v9,
      isLocalMirrored: !1,
      onQualityChangeRequired: _v40.CallablePlaceholder
    }) : null;
  }
  function _v44() {
    return (_v44 = Object.assign.bind()).apply(null, arguments);
  }
  let _v45 = function (_v0) {
    return _v11.createElement("svg", _v44({
      width: 12,
      height: 12,
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, _v0), _v1 || (_v1 = _v11.createElement("rect", {
      width: 12,
      height: 12,
      rx: 6,
      fill: "#fff"
    })), _v2 || (_v2 = _v11.createElement("path", {
      d: "M10.333 5.623l-3.5-3.16A.5.5 0 006 2.841v1.841a.083.083 0 01-.14.062L3.334 2.462a.5.5 0 00-.833.38V9.16a.5.5 0 00.833.378l2.528-2.282a.083.083 0 01.14.062v1.842a.5.5 0 00.832.378l3.5-3.16a.513.513 0 000-.756z",
      fill: "#000"
    })));
  };
  function _v46() {
    return (_v46 = Object.assign.bind()).apply(null, arguments);
  }
  _v0.s(["default", 0, _v45], 0);
  let _v47 = function (_v0) {
    return _v11.createElement("svg", _v46({
      width: 12,
      height: 12,
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, _v0), _v3 || (_v3 = _v11.createElement("rect", {
      width: 12,
      height: 12,
      rx: 6,
      fill: "#fff"
    })), _v4 || (_v4 = _v11.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6 2a4 4 0 00-4 4h1a3 3 0 015.12-2.123L8.242 4H7.5a.5.5 0 000 1h2a.5.5 0 00.5-.5v-2a.5.5 0 00-1 0v.843l-.174-.174A3.989 3.989 0 006 2zM2.5 7a.5.5 0 00-.5.5v2a.5.5 0 001 0v-.816l.147.147A4 4 0 009.973 6h-1a3 3 0 01-5.12 2.123L3.73 8h.77a.5.5 0 000-1h-2z",
      fill: "#000"
    })));
  };
  _v0.s(["default", 0, _v47], 0);
  var _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0);
  function _v51({
    className: _v0 = (0, _v27.createDomName)("video-time-left"),
    isPlaying: _v1,
    isInProgram: _v2,
    startedAt: _v3,
    offset: _v4,
    duration: _v5
  }) {
    let _v6 = _v1 && _v2,
      {
        timeRemaining: _v7
      } = (0, _v50.useSubscriptionToRemotePlaybackState)({
        startedAt: _v6 || _v2 ? _v3 : null,
        duration: _v5,
        isActive: _v6,
        offset: _v6 || _v2 ? _v4 : null
      });
    return (0, _v5.jsx)("span", {
      className: _v0,
      children: (0, _v48.default)(_v7) ? (0, _v49.secondsToDisplay)(_v7 / 0) : "--:--"
    });
  }
  _v0.s(["VideoTimeLeft", 0, _v51], 0);
  var _v52 = _v0.i(0);
  function _v53({
    className: _v0 = (0, _v27.createDomName)("live-video-error-status"),
    title: _v1,
    description: _v2
  }) {
    return (0, _v5.jsx)(_v6.Box, {
      className: _v0,
      sx: {
        "& > span": {
          display: "flex"
        }
      },
      children: (0, _v5.jsx)(_v52.AlertTooltipIcon, {
        title: _v1,
        description: _v2
      })
    });
  }
  _v0.s(["LiveVideoErrorStatus", 0, _v53], 0);
  var _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0);
  let _v58 = {
    [_v55.EVideoTransitionState.AUTO]: (0, _v5.jsx)(_v45, {}),
    [_v55.EVideoTransitionState.LOOP]: (0, _v5.jsx)(_v47, {}),
    [_v55.EVideoTransitionState.MANUAL]: null
  };
  function _v59({
    className: _v0 = (0, _v27.createDomName)("scene-thumbnail-status"),
    isInProgram: _v1 = !1,
    isSelected: _v2 = !1,
    isScheduled: _v3 = !1,
    agoraMediaList: _v4,
    scene: _v5,
    hasStudioConnection: _v6,
    statusLabel: _v7,
    statusColor: _v8
  }) {
    let _v9 = Object.values(_v5?.graphics).find(_v0 => _v0.type === _v15.EGraphicsDescriptorType.AGORA_MEDIA),
      _v10 = _v9 ? _v4?.[_v9.data.sourceId] : null,
      _v11 = _v10?.error === "NOT_FOUND",
      _v12 = _v3 && !_v10,
      _v13 = !!(_v1 || _v2 || _v11 || _v12 || _v7),
      [_v14, _v15] = (0, _v11.useMemo)(() => {
        switch (!0) {
          case _v11:
            return [_v54.T_VIDEO_CARD_PREVIEW_ERROR, _v54.T_VIDEO_CARD_PREVIEW_ERROR_DESCRIPTION];
          case _v12:
            return [null, _v54.T_ADD_VIDEO_TO_SIMULATED_LIVE_SCENES];
        }
        return [null, null];
      }, [_v11, _v12]);
    return (0, _v5.jsxs)(_v5.Fragment, {
      children: [_v13 ? (0, _v5.jsxs)(_v8.Flex, {
        className: _v0,
        alignItems: "center",
        position: "absolute",
        top: (0, _v7.rem)(6),
        left: (0, _v7.rem)(6),
        gap: (0, _v7.rem)(4),
        zIndex: 101,
        children: [_v7 ? (0, _v5.jsx)(_v8.Flex, {
          className: (0, _v27.createDomName)(_v0, "scene-state"),
          fontSize: (0, _v7.rem)(10),
          padding: `${(0, _v7.rem)(2)} ${(0, _v7.rem)(4)}`,
          borderRadius: (0, _v7.rem)(4),
          color: "white",
          textTransform: "uppercase",
          backgroundColor: _v8,
          children: _v7
        }) : null, _v11 || _v12 ? (0, _v5.jsx)(_v53, {
          className: (0, _v27.createDomName)(_v0, "scene-status-error"),
          title: _v14,
          description: _v15
        }) : null]
      }) : null, _v9 ? (0, _v56.inline)(() => {
        let _v0 = (0, _v57.getVideoTransitionState)(_v5);
        return (0, _v5.jsx)(_v8.Flex, {
          className: _v0,
          position: "absolute",
          zIndex: _v26.graphicsConfig.GRAPHICS_POSITIONING.Z_INDEX.SCENE_MODIFIERS,
          bottom: (0, _v7.rem)(8),
          right: (0, _v7.rem)(8),
          children: (0, _v5.jsxs)(_v8.Flex, {
            alignItems: "center",
            gap: (0, _v7.rem)(4),
            justifyContent: "space-between",
            padding: `0 ${(0, _v7.rem)(2)}`,
            borderRadius: (0, _v7.rem)(4),
            color: "white",
            fontSize: (0, _v7.rem)(10),
            background: "rgba(0,0,0,0.75)",
            fontWeight: "bold",
            height: (0, _v7.rem)(16),
            minWidth: (0, _v7.rem)(30),
            textTransform: "uppercase",
            children: [_v58[_v0], (0, _v5.jsx)(_v51, {
              isPlaying: !!(_v6 && _v5?.meta?.media?.status === _v15.EMediaStatus.PLAY),
              isInProgram: _v1,
              offset: _v5?.meta?.media?.offset,
              startedAt: _v5?.meta?.media?.startedAt,
              duration: 0 * (_v10?.videoDuration || 0)
            })]
          })
        });
      }) : null]
    });
  }
  _v0.s(["SceneThumbnail", 0, function ({
    className: _v0 = (0, _v29.createLiveDomName)("scene-thumbnail"),
    isInProgram: _v1,
    isSelected: _v2,
    isScheduled: _v3 = !1,
    statusLabel: _v4,
    statusColor: _v5,
    hasStudioConnection: _v6,
    activeScreenOwnerId: _v7,
    scene: _v8,
    guests: _v9,
    broadcasterInfo: _v10,
    theme: _v11,
    fullscreenList: _v12 = {},
    agoraMediaList: _v13 = {},
    slidesList: _v14 = {}
  }) {
    let _v15 = (0, _v9.useColorModeValue)(_v10.PREVIEW_CANVAS_BACKGROUND_BOKEH_LIGHT, _v10.PREVIEW_CANVAS_BACKGROUND_BOKEH_DARK),
      _v16 = _v8.meta?.background || void 0;
    return Object.keys(_v8.graphics || {}).length || _v8.meta?.layoutType ? (0, _v5.jsx)(_v6.Box, {
      width: "100%",
      height: "100%",
      borderRadius: (0, _v7.rem)(8),
      background: _v10.NEUTRAL_PREVIEW_CANVAS_BACKGROUND,
      children: (0, _v5.jsxs)(_v8.Flex, {
        className: _v0,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "100%",
        padding: (0, _v7.rem)(8),
        borderRadius: (0, _v7.rem)(8),
        background: _v16,
        children: [_v1 && !_v2 ? (0, _v5.jsx)(_v43, {
          scene: _v8
        }) : (0, _v5.jsx)(_v20, {
          scene: _v8,
          guests: _v9,
          theme: _v11,
          slidesList: _v14,
          agoraMediaList: _v13,
          fullscreenList: _v12,
          broadcasterInfo: _v10
        }), (0, _v5.jsx)(_v59, {
          className: (0, _v29.createLiveDomName)(_v0, "status"),
          isScheduled: _v3,
          isInProgram: _v1,
          isSelected: _v2,
          scene: _v8,
          hasStudioConnection: _v6,
          agoraMediaList: _v13,
          statusLabel: _v4,
          statusColor: _v5
        }), (0, _v5.jsx)(_v31, {
          className: (0, _v29.createLiveDomName)(_v0, "modifiers"),
          scene: _v8,
          guests: _v9,
          activeScreenOwnerId: _v7
        })]
      })
    }) : (0, _v5.jsx)(_v8.Flex, {
      className: _v0,
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      width: "100%",
      height: "100%",
      outline: "1px solid",
      outlineColor: "stroke",
      padding: (0, _v7.rem)(8),
      borderRadius: (0, _v7.rem)(8),
      background: _v16 || _v15,
      children: (0, _v5.jsx)(_v59, {
        className: (0, _v29.createLiveDomName)(_v0, "status"),
        isScheduled: _v3,
        isInProgram: _v1,
        isSelected: _v2,
        scene: _v8,
        hasStudioConnection: _v6,
        agoraMediaList: _v13,
        statusLabel: _v4,
        statusColor: _v5
      })
    });
  }], 0);
}