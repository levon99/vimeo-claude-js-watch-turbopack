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
    _v19 = _v0.i(0);
  function _v20(_v0) {
    let _v1 = function ({
        descriptor: _v0,
        logoList: _v1,
        agoraMediaList: _v2,
        mediaVideo: _v3,
        lowerthirdList: _v4,
        slidesList: _v5,
        fullscreenList: _v6,
        pollList: _v7,
        globalList: _v8,
        guests: _v9,
        localMediaUid: _v10,
        roomMedia: _v11,
        screenTrack: _v12,
        localVideo: _v13,
        theme: _v14,
        sceneMeta: _v15,
        isPIP: _v16 = !1,
        isInProgram: _v17,
        isLocalMirrored: _v18
      }) {
        let _v19 = (0, _v14.mapTypeToComponent)(_v0.type),
          _v20 = _v0.data.sourceId,
          _v21 = null;
        if (!_v0.position || !_v19) return null;
        _v0.type === _v11.EGraphicsDescriptorType.LOWER_THIRD ? _v21 = _v4[_v20] : _v0.type === _v11.EGraphicsDescriptorType.LOGO ? _v21 = _v1[_v20] : _v0.type === _v11.EGraphicsDescriptorType.IMAGE ? _v21 = _v6[_v20] : _v0.type === _v11.EGraphicsDescriptorType.POLL ? _v21 = _v7[_v20] : _v0.type === _v11.EGraphicsDescriptorType.QNA ? _v21 = _v8 ? _v8[_v11.EGraphicsDescriptorType.QNA] : null : _v0.type === _v11.EGraphicsDescriptorType.SLIDES ? _v21 = _v5 ? _v5[_v20] : null : _v0.type === _v11.EGraphicsDescriptorType.AGORA_MEDIA && (_v21 = _v2 ? _v2[_v20] : null);
        let {
          animation: _v22,
          isDisabled: _v23,
          isHidden: _v24
        } = function ({
          position: _v0,
          data: _v1
        }, _v2) {
          let _v3 = (0, _v17.getAbsoluteNow)(),
            _v4 = _v1?.visibleAt || 0,
            _v5 = Math.max(_v2?.createdAt || 0, _v2?.updatedAt || 0, _v2?.disabledAt || 0),
            _v6 = _v3 - _v4 < _v8.graphicsConfig.RENDERER.ANIMATION.SYSTEM_DURATION_OFFSET,
            _v7 = !_v6 && _v3 - _v5 < _v8.graphicsConfig.RENDERER.ANIMATION.SYSTEM_DURATION_OFFSET,
            _v8 = _v0.visible && !_v2?.disabled,
            _v9 = !_v0.visible && !_v6,
            _v10 = !!(_v2?.disabled && !_v7),
            _v11 = _v11.EAnimationState.NONE;
          return _v9 ? _v11 = _v11.EAnimationState.OUTRO : _v6 ? _v11 = _v8 ? _v11.EAnimationState.INTRO : _v11.EAnimationState.OUTRO : _v7 && _v0.visible && (_v11 = _v2?.disabled ? _v11.EAnimationState.OUTRO : _v11.EAnimationState.INTRO), {
            animation: _v11,
            isVisible: _v8,
            isVisibilityChangedRecently: _v6,
            isDynamicObjectVisibilityChangedRecently: _v7,
            isHidden: _v9,
            isDisabled: _v10
          };
        }(_v0, _v21);
        if ((_v24 || _v23) && _v0.type !== _v11.EGraphicsDescriptorType.IMAGE) return null;
        if (_v0.type === _v11.EGraphicsDescriptorType.AGORA_SCREEN) return (0, _v2.createElement)(_v19, {
          descriptor: _v0,
          theme: _v14,
          screenTrack: _v12
        });
        if (_v0.type === _v11.EGraphicsDescriptorType.AGORA_MEDIA) return (0, _v2.createElement)(_v19, {
          descriptor: _v0,
          mediaTrack: _v3,
          isMediaPlaying: !!_v17,
          graphicObject: _v21
        });
        if (_v0.type === _v11.EGraphicsDescriptorType.AGORA_STREAM) {
          let _v0 = (0, _v16.parseAgoraConnectionDetails)(_v0.data.sourceId);
          if (!_v0) return null;
          let [_v1, _v2] = _v0,
            _v3 = _v1 === _v15.EAgoraConnectionType.GUEST ? _v9[_v2] : void 0,
            _v4 = !!(_v10 === _v0.data.sourceId || _v1 === _v15.EAgoraConnectionType.BROADCASTER && String(_v10).startsWith(_v15.EAgoraConnectionType.BROADCASTER)) && _v18;
          return (0, _v2.createElement)(_v19, {
            descriptor: _v0,
            guest: _v3,
            localMediaUid: _v10,
            roomMedia: _v11,
            localVideo: _v13,
            broadcasterLowerThird: _v8[_v8.graphicsConfig.BROADCASTER.LOWERTHIRD_KEY],
            isPIP: _v16,
            theme: _v14,
            sceneMeta: _v15,
            isMirrored: _v4
          });
        }
        return (0, _v2.createElement)(_v19, {
          animation: _v22,
          fadeOutDuration: _v8.graphicsConfig.ANIMATION.DEFAULT_ANIMATION_DURATION,
          fadeInDuration: _v8.graphicsConfig.ANIMATION.DEFAULT_ANIMATION_DURATION,
          isHidden: _v24,
          theme: _v14,
          descriptor: _v0,
          object: _v21
        });
      }(_v0),
      _v2 = (0, _v2.useMemo)(() => (0, _v18.getGraphicWrapperStyle)(_v0.descriptor.position), [_v0.descriptor]);
    return (0, _v1.jsx)("div", {
      className: (0, _v19.createLiveDomName)("graphics-renderer"),
      style: _v2,
      "data-descriptor-type": _v0.descriptor.type,
      children: _v1
    });
  }
  var _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v12,
    _v25 = _v0.i(0);
  let _v26 = _v21.default.div.withConfig({
      displayName: "SourcePlaceholder__SourcePlaceholderWrapper",
      componentId: "sc-eb6eb127-0"
    })`
  ${_v25.CENTERED_FLEX}
  ${_v25.NO_SELECTION}
  width: 100%;
  height: 100%;
  opacity: 0.7;
  background: ${_v25.PREVIEW_GRADIENT};
  border: 1px solid #000000;
`,
    _v27 = _v21.default.span.withConfig({
      displayName: "SourcePlaceholder__SourcePlaceholderLabel",
      componentId: "sc-eb6eb127-1"
    })`
  color: ${(0, _v22.grayscale)(240)};
  font-size: ${_v8.graphicsConfig.RENDERER.HEIGHT / 12}px;
`,
    _v28 = (0, _v2.memo)(({
      className: _v0 = (0, _v24.createDomName)("gfx-source-placeholder"),
      index: _v1
    }) => (0, _v1.jsx)(_v26, {
      className: _v0,
      "data-index": _v1,
      children: (0, _v1.jsx)(_v27, {
        className: (0, _v24.createDomName)(_v0, "label"),
        children: Number.isInteger(_v1) ? _v1 + 1 : _v23.T_PLACE_CONTENT
      })
    })),
    _v29 = (0, _v2.memo)(_v0 => {
      let _v1 = (0, _v2.useMemo)(() => (0, _v18.getGraphicWrapperStyle)(_v0.position), [_v0.position]);
      return (0, _v1.jsx)("div", {
        style: _v1,
        children: (0, _v1.jsx)(_v28, {
          index: _v0.position.index
        })
      });
    }),
    _v30 = (0, _v2.forwardRef)(({
      id: _v0 = (0, _v12.createDomName)("scene-graphics-overlay"),
      className: _v1 = (0, _v12.createDomName)("scene-graphics-overlay"),
      graphicsEntries: _v2,
      scene: _v3,
      theme: _v4,
      lowerthirdList: _v5,
      agoraMediaList: _v6,
      slidesList: _v7,
      logoList: _v8,
      fullscreenList: _v9,
      globalList: _v10,
      pollList: _v11,
      guests: _v12,
      localMediaUid: _v13,
      roomMedia: _v14,
      localVideo: _v15,
      mediaVideo: _v16,
      isLocalMirrored: _v17,
      isWithPlaceholders: _v18,
      isInProgram: _v19
    }, _v20) => {
      let _v21 = (0, _v2.useRef)(null),
        _v22 = (0, _v10.useLayoutPlaceholdersDescriptors)(_v3),
        _v23 = _v3.meta?.background || _v13.NEUTRAL_PREVIEW_CANVAS_BACKGROUND;
      return (0, _v9.useGraphicsResizeObserver)({
        zoomElement: _v21,
        maxWidth: _v8.graphicsConfig.SCENE.MAX_WIDTH,
        relativeCoefficient: _v8.graphicsConfig.SCENE.RELATIVE_COEFFICIENT,
        defaultRescaleThrottle: _v8.graphicsConfig.SCENE.DEFAULT_RESCALE_THROTTLE
      }), (0, _v1.jsx)(_v7.Box, {
        ref: _v20,
        id: (0, _v12.createDomName)(_v0, "wrapper"),
        className: (0, _v12.createDomName)(_v1, "wrapper"),
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        children: (0, _v1.jsx)(_v7.Box, {
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          background: _v23,
          overflow: "hidden",
          children: (0, _v1.jsxs)(_v7.Box, {
            ref: _v21,
            id: (0, _v12.createDomName)(_v0, "canvas"),
            className: (0, _v12.createDomName)(_v1, "canvas"),
            position: "absolute",
            top: 0,
            left: 0,
            width: _v8.graphicsConfig.RENDERER.WIDTH,
            height: _v8.graphicsConfig.RENDERER.HEIGHT,
            transformOrigin: "top left",
            children: [_v2.map(([_v0, _v1]) => {
              let _v2 = _v1.type === _v11.EGraphicsDescriptorType.AGORA_STREAM;
              return (0, _v1.jsx)(_v20, {
                descriptor: _v1,
                lowerthirdList: _v5,
                logoList: _v8,
                agoraMediaList: _v6,
                fullscreenList: _v9,
                globalList: _v10,
                slidesList: _v7,
                pollList: _v11,
                guests: _v12,
                roomMedia: _v14,
                localMediaUid: _v13,
                screenTrack: null,
                mediaVideo: _v16,
                localVideo: _v15,
                theme: _v4,
                sceneMeta: _v3.meta,
                isLocalMirrored: _v17,
                isInProgram: _v19
              }, _v2 && _v1.data.sourceId ? _v1.data.sourceId || _v0 : _v0 + _v3?.id);
            }), _v18 ? _v22.map((_v0, _v1) => (0, _v1.jsx)(_v29, {
              position: _v0
            }, _v0.index ?? `p-${_v1}`)) : null]
          })
        })
      });
    });
  var _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0);
  function _v35({
    theme: _v0,
    descriptor: _v1,
    mediaVideo: _v2,
    screenVideo: _v3,
    isInProgram: _v4,
    agoraMediaList: _v5,
    slidesList: _v6
  }) {
    let _v7 = (0, _v2.useMemo)(() => _v1 || (0, _v34.createDefaultScreenDescriptor)(), [_v1]),
      _v8 = (0, _v2.useMemo)(() => _v7 ? (0, _v18.getGraphicWrapperStyle)(_v7.position) : {}, [_v7]);
    if (_v3) return (0, _v1.jsx)("div", {
      style: _v8,
      children: (0, _v1.jsx)(_v32.AgoraScreen, {
        screenTrack: _v3,
        descriptor: _v7,
        theme: _v0
      })
    });
    switch (_v7?.type) {
      case _v11.EGraphicsDescriptorType.AGORA_MEDIA:
        let _v0 = _v5[_v7.data.sourceId];
        if (!_v0) return null;
        return (0, _v1.jsx)("div", {
          style: _v8,
          children: (0, _v1.jsx)(_v31.AgoraMediaPlayer, {
            descriptor: _v7,
            mediaTrack: _v2,
            graphicObject: _v0,
            isMediaPlaying: _v4
          })
        });
      case _v11.EGraphicsDescriptorType.SLIDES:
        let _v1 = _v6[_v7.data?.sourceId];
        if (!_v1) return null;
        return (0, _v1.jsx)("div", {
          style: _v8,
          children: (0, _v1.jsx)(_v33.Slide, {
            fadeInDuration: 0,
            fadeOutDuration: 0,
            animation: _v11.EAnimationState.NONE,
            object: _v1,
            descriptor: _v7
          })
        });
      default:
        return null;
    }
  }
  var _v36 = _v12;
  let _v37 = (0, _v2.forwardRef)(({
    id: _v0 = (0, _v36.createDomName)("scene-active-speaker-overlay"),
    className: _v1 = (0, _v36.createDomName)("scene-active-speaker-overlay"),
    children: _v2,
    graphicsEntries: _v3,
    slidesList: _v4,
    logoList: _v5,
    lowerthirdList: _v6,
    fullscreenList: _v7,
    pollList: _v8,
    globalList: _v9,
    scene: _v10,
    roomVolume: _v11,
    theme: _v12,
    guests: _v13,
    localMediaUid: _v14,
    localVideo: _v15,
    roomMedia: _v16,
    preferredSpeaker: _v17,
    isGraphicsEnabled: _v18,
    isSpeakerPipEnabled: _v19,
    isLocalMirrored: _v20
  }, _v21) => {
    let _v22 = (0, _v2.useRef)(null),
      _v23 = (0, _v2.useMemo)(() => ({}), []),
      _v24 = function ({
        scene: _v0,
        fallbackUid: _v1 = null,
        roomVolume: _v2,
        roomMedia: _v3
      }) {
        let [_v4, _v5] = (0, _v2.useState)(null);
        return (0, _v2.useEffect)(() => {
          let _v0 = Object.values(_v0?.graphics || {}).filter(_v0 => _v0.type === _v11.EGraphicsDescriptorType.AGORA_STREAM).reduce((_v0, _v1) => _v0.add(_v1.data.sourceId), new Set());
          if (!_v0.size || !_v0) return _v5(null);
          let _v1 = [..._v0].map(_v0 => {
            if (_v0 === _v15.EAgoraConnectionType.BROADCASTER) {
              for (let _v0 in _v2) if ((0, _v16.isAgoraConnectionType)(_v0, _v15.EAgoraConnectionType.BROADCASTER)) return {
                uid: _v0,
                level: _v2[_v0]?.level || 0
              };
            }
            let _v1 = _v2[_v0];
            return {
              uid: _v0,
              level: _v1?.level || 0
            };
          }).sort((_v0, _v1) => _v1.level - _v0.level || String(_v0.uid).localeCompare(String(_v1.uid)));
          _v5(() => {
            let _v0 = _v1[0],
              _v1 = _v0?.level ? _v0.uid : _v1 || _v0?.uid;
            return (0, _v16.mapUidToGraphicsSource)(_v1);
          });
        }, [_v0?.graphics, _v2, _v3, _v1]), _v4;
      }({
        scene: _v10,
        roomVolume: _v11,
        roomMedia: _v16,
        fallbackUid: _v17
      }),
      _v25 = _v10.meta?.background || _v13.NEUTRAL_PREVIEW_CANVAS_BACKGROUND,
      _v26 = (0, _v2.useMemo)(() => (0, _v6.createSceneMetadata)({
        speakerPosition: _v10.meta?.speakerPosition || _v8.graphicsConfig.GRAPHICS_POSITIONING.SCREEN_SPEAKER_POSITION
      }), [_v10?.meta]),
      _v27 = (0, _v2.useMemo)(() => {
        let _v0 = (0, _v6.findGraphicBySourceId)(_v24, _v10);
        return _v0 ? {
          ..._v0,
          position: _v26?.speakerPosition
        } : null;
      }, [_v10.graphics, _v26, _v24]);
    return (0, _v9.useGraphicsResizeObserver)({
      zoomElement: _v22,
      maxWidth: _v8.graphicsConfig.SCENE.MAX_WIDTH,
      relativeCoefficient: _v8.graphicsConfig.SCENE.RELATIVE_COEFFICIENT,
      defaultRescaleThrottle: _v8.graphicsConfig.SCENE.DEFAULT_RESCALE_THROTTLE
    }), (0, _v1.jsx)(_v7.Box, {
      ref: _v21,
      id: (0, _v36.createDomName)(_v0, "wrapper"),
      className: (0, _v36.createDomName)(_v1, "wrapper"),
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: _v25,
      overflow: "hidden",
      children: (0, _v1.jsxs)(_v7.Box, {
        ref: _v22,
        id: (0, _v36.createDomName)(_v0, "canvas"),
        className: (0, _v36.createDomName)(_v1, "canvas"),
        position: "absolute",
        top: 0,
        left: 0,
        width: _v8.graphicsConfig.RENDERER.WIDTH,
        height: _v8.graphicsConfig.RENDERER.HEIGHT,
        transformOrigin: "top left",
        children: [_v2, _v10 && _v19 && _v27 ? (0, _v1.jsx)(_v20, {
          descriptor: _v27,
          screenTrack: null,
          roomMedia: _v16,
          localMediaUid: _v14,
          localVideo: _v15,
          agoraMediaList: _v23,
          logoList: _v23,
          slidesList: _v4,
          fullscreenList: _v23,
          lowerthirdList: _v23,
          pollList: _v23,
          globalList: _v23,
          guests: _v13,
          theme: _v12,
          sceneMeta: _v26,
          isPIP: !0,
          isLocalMirrored: _v20
        }) : null, _v18 ? _v3.map(([_v0, _v1]) => {
          let _v2 = Number.isInteger(_v1.position.index),
            _v3 = !_v10.meta?.disableSpeakerPip && _v1.type === _v11.EGraphicsDescriptorType.LOGO;
          return _v2 || _v3 || _v1.type === _v11.EGraphicsDescriptorType.AGORA_STREAM || _v1.type === _v11.EGraphicsDescriptorType.SLIDES || _v1.type === _v11.EGraphicsDescriptorType.AGORA_MEDIA ? null : (0, _v1.jsx)(_v20, {
            descriptor: _v1,
            agoraMediaList: _v23,
            lowerthirdList: _v6,
            logoList: _v5,
            fullscreenList: _v7,
            slidesList: _v4,
            globalList: _v9,
            pollList: _v8,
            guests: _v13,
            roomMedia: _v16,
            localMediaUid: _v14,
            screenTrack: null,
            localVideo: _v15,
            theme: _v12,
            sceneMeta: _v26
          }, _v0 + _v10?.id);
        }) : null]
      })
    });
  });
  _v0.s(["SceneRenderer", 0, function ({
    isInProgram: _v0,
    scene: _v1,
    activeScreen: _v2,
    theme: _v3,
    emptyStatePlaceholder: _v4,
    lowerthirdList: _v5,
    logoList: _v6,
    fullscreenList: _v7,
    globalList: _v8,
    pollList: _v9,
    slidesList: _v10,
    agoraMediaList: _v11,
    guests: _v12,
    localMediaUid: _v13,
    roomMedia: _v14,
    roomVolume: _v15,
    localVideo: _v16,
    globalLogo: _v17,
    isLocalMirrored: _v18,
    isWithPlaceholders: _v19,
    onQualityChangeRequired: _v20,
    canEdit: _v21
  }) {
    let _v22 = (0, _v2.useRef)(null),
      [_v23] = (0, _v4.useMediaTracks)(_v1, _v14),
      _v24 = (0, _v3.useGlobalLogo)({
        scene: _v1,
        globalLogo: _v17,
        logoList: _v6
      }),
      _v25 = (0, _v2.useMemo)(() => {
        let _v0 = Object.entries(_v1?.graphics || {});
        return _v24 ? _v0.concat([[_v24.data.sourceId, _v24]]) : _v0;
      }, [_v1?.graphics, _v24]),
      _v26 = (0, _v2.useMemo)(() => (0, _v6.findPipDescriptorInScene)(_v1), [_v1]),
      _v27 = !!(_v2 || _v26),
      _v28 = !_v1.meta?.disableSpeakerPip;
    if ((0, _v5.useSceneHighQualityStreams)({
      scene: _v1,
      changeQuality: _v20,
      canUseHQ: !_v27,
      roomMedia: _v14,
      previewRef: _v22
    }), !_v1) return null;
    if (!_v25.length && !_v1.meta?.layoutType) {
      let _v0 = !!_v1.meta?.background;
      return _v21 && !_v0 ? _v4 : null;
    }
    if (_v27) {
      let [, _v0, _v1] = _v2 || [];
      return (0, _v1.jsx)(_v37, {
        ref: _v22,
        scene: _v1,
        graphicsEntries: _v25,
        slidesList: _v10,
        lowerthirdList: _v5,
        logoList: _v6,
        fullscreenList: _v7,
        pollList: _v9,
        globalList: _v8,
        localMediaUid: _v13,
        roomMedia: _v14,
        localVideo: _v16,
        theme: _v3,
        guests: _v12,
        roomVolume: _v15,
        preferredSpeaker: _v1,
        isSpeakerPipEnabled: _v28,
        isGraphicsEnabled: !_v2,
        isLocalMirrored: _v18,
        children: (0, _v1.jsx)(_v35, {
          theme: _v3,
          descriptor: _v26,
          screenVideo: _v0,
          agoraMediaList: _v11,
          mediaVideo: _v23,
          slidesList: _v10,
          isInProgram: _v0
        })
      });
    }
    return (0, _v1.jsx)(_v30, {
      ref: _v22,
      scene: _v1,
      graphicsEntries: _v25,
      theme: _v3,
      lowerthirdList: _v5,
      logoList: _v6,
      agoraMediaList: _v11,
      fullscreenList: _v7,
      pollList: _v9,
      slidesList: _v10,
      globalList: _v8,
      guests: _v12,
      localMediaUid: _v13,
      roomMedia: _v14,
      localVideo: _v16,
      mediaVideo: _v23,
      isLocalMirrored: _v18,
      isInProgram: _v0,
      isWithPlaceholders: _v19
    });
  }], 0);
  var _v38 = _v0.i(0);
  _v0.s(["PreviewCanvas", 0, function ({
    id: _v0,
    className: _v1,
    children: _v2 = null,
    background: _v3 = ""
  }) {
    let _v4 = (0, _v38.useColorModeValue)(_v13.PREVIEW_CANVAS_BACKGROUND_BOKEH_LIGHT, _v13.PREVIEW_CANVAS_BACKGROUND_BOKEH_DARK);
    return (0, _v1.jsx)(_v7.Box, {
      id: _v0,
      className: _v1,
      background: _v3 || _v4,
      overflow: "hidden",
      width: "100%",
      height: "100%",
      outline: "1px solid",
      outlineColor: "stroke",
      children: _v2
    });
  }], 0);
  var _v39 = _v0.i(0),
    _v40 = _v0.i(0);
  let _v41 = (0, _v2.forwardRef)(({
    id: _v0,
    className: _v1,
    children: _v2,
    isFullscreenMode: _v3,
    column: _v4
  }, _v5) => (0, _v1.jsx)(_v7.Box, {
    ref: _v5,
    id: _v0,
    className: _v1,
    position: "relative",
    display: "flex",
    flexDirection: _v4 ? "column" : "row",
    width: "100%",
    minWidth: (0, _v39.rem)(_v8.graphicsConfig.SCENE.MIN_WIDTH),
    maxWidth: (0, _v39.rem)(_v3 ? _v8.graphicsConfig.SCENE.FULLSCREEN_MODE_MAX_WIDTH : _v8.graphicsConfig.SCENE.MAX_WIDTH),
    onContextMenu: _v40.StopPropagation,
    children: _v2
  }));
  _v0.s(["PreviewLayout", 0, _v41], 0);
}