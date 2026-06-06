{
  "use strict";

  _v0.s(["brandLogoToElement", () => _v48, "createLayer", () => _v45, "createSourceMap", () => _v71, "deleteElementFromLayers", () => _v75, "extractVideoSessionIdFromStoryboardId", () => _v78, "getAllElements", () => _v51, "getAllUsedFonts", () => _v53, "getElementById", () => _v52, "getElementByIdFromLayers", () => _v74, "getElementByIdFromStoryboard", () => _v73, "getElementTimingObject", () => _v46, "getElementsInTime", () => _v50, "getHighestFreeZIndexInTimeframe", () => _v54, "getLayersWithValidSource", () => _v72, "getSafeElement", () => _v70, "getVisualSourceHashesFromLayers", () => _v76, "getVisualSourceHashesFromScenes", () => _v77, "getZIndexForNewElement", () => _v55, "isElementExistInTime", () => _v56, "isElementsOverlapping", () => _v57, "isNegativeCompositionTiming", () => _v67, "isNewStoryboard", () => _v68, "isSomeSelectedElementInCurrentTime", () => _v59, "isTemplate", () => _v69, "isValidCompositionTiming", () => _v64, "isValidRect", () => _v63, "prepareInteractiveOverlayEditorStoryboardForSave", () => _v62, "prepareInteractiveStoryboardForSave", () => _v61, "prepareStoryboardForInteractive", () => _v60, "sanitizeLayersAndSources", () => _v79, "scenesToLayers", () => _v49, "splitElement", () => _v58, "validateSoundEffects", () => _v65], 0);
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
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0);
  let _v32 = {
      [_v23.MediaType.IMAGE]: _v31.CompositionElementType.IMAGE,
      [_v23.MediaType.VIDEO]: _v31.CompositionElementType.VIDEO
    },
    _v33 = async _v0 => (_v0.muted = !0, await _v0.play(), await new Promise(_v0 => setTimeout(_v0, 100)), _v0.pause(), console.log("hasAudio: webkitAudioDecodedByteCount", _v0.webkitAudioDecodedByteCount), console.log("hasAudio: mozHasAudio", _v0.mozHasAudio), void 0 !== _v0.webkitAudioDecodedByteCount) ? _v0.webkitAudioDecodedByteCount > 0 : void 0 !== _v0.mozHasAudio ? _v0.mozHasAudio : (console.log("hasAudio: defaulting to true"), !0),
    _v34 = (_v0, _v1 = "loadedmetadata", _v2 = !1) => new Promise((_v0, _v1) => {
      let _v2 = document.createElement("video");
      _v2 && (_v2.crossOrigin = "Anonymous");
      let _v3 = () => {
          _v2.removeEventListener(_v1, _v4), _v2.removeEventListener("error", _v5);
        },
        _v4 = async () => {
          _v3();
          let _v0 = {
            width: _v2.videoWidth || 0,
            height: _v2.videoHeight || 0,
            duration: _v2.duration || 0,
            hasAudio: await _v33(_v2)
          };
          return console.log("fetchVideoMetadata: video metadata", _v0), _v2.src = "", _v2.remove(), _v0(_v0);
        },
        _v5 = _v0 => (_v3(), _v1(_v0));
      _v2.addEventListener(_v1, _v4), _v2.addEventListener("error", _v5), _v2.src = _v0;
    }),
    _v35 = (_v0, _v1 = !1, _v2 = !1, _v3 = !1) => new Promise(async (_v0, _v1) => {
      let _v2 = new Image();
      _v1 && (_v2.crossOrigin = "Anonymous"), _v2 && (await fetch(_v0, {
        cache: "reload"
      }));
      let _v3 = () => {
          _v2.removeEventListener("error", _v5), _v2.removeEventListener("load", _v4);
        },
        _v4 = function () {
          return (_v3(), _v3) ? _v0({
            width: _v2.width ?? _v2.naturalWidth ?? 0,
            height: _v2.height ?? _v2.naturalHeight ?? 0
          }) : _v0({
            width: _v2.width ?? 0,
            height: _v2.height ?? 0
          });
        },
        _v5 = _v0 => (_v3(), _v1(Error(`${_v28.IMAGE_FAILED_TO_LOAD} = ${_v0}`)));
      _v2.addEventListener("error", _v5), _v2.addEventListener("load", _v4), _v2.src = _v0, _v2.complete && _v4();
    }),
    _v36 = ({
      url: _v0,
      type: _v1,
      eventName: _v2,
      isCrossOrigin: _v3,
      isSvg: _v4
    }) => "video" === _v1 ? _v34(_v0, _v2, _v3) : _v35(_v0, _v3, _v4),
    _v37 = async (_v0, _v1, _v2 = !1, _v3 = !1) => {
      let _v4,
        _v5,
        {
          width: _v6,
          height: _v7
        } = _v1.width && _v1.height ? {
          width: _v1.width,
          height: _v1.height
        } : await _v36({
          url: _v1.previewUrl || _v1.thumbnailUrl,
          type: _v1.type,
          eventName: "loadedmetadata",
          isCrossOrigin: _v3
        }),
        _v8 = _v2 ? _v14.DEFAULT_GRAPHIC_RECT_SIZE : 1,
        _v9 = _v24.OrientationRatio[_v0],
        _v10 = _v6 / _v7;
      return _v9 > _v10 ? (_v5 = _v8, _v4 = _v8 * _v10 / _v9) : (_v4 = _v8, _v5 = _v8 / _v10 * _v9), {
        width: _v4,
        height: _v5
      };
    },
    _v38 = (_v0, _v1, _v2) => {
      let {
          innerMediaRect: _v3,
          sourceFootageRect: _v4,
          rect: _v5
        } = _v0,
        {
          width: _v6,
          height: _v7
        } = _v29.ORIENTATION_MAP[_v1],
        _v8 = _v6 * _v5.width * _v3.width,
        _v9 = _v7 * _v5.height * _v3.height,
        _v10 = _v6 * _v4.width,
        _v11 = _v7 * _v4.height,
        _v12 = _v8 / _v10,
        _v13 = _v9 / _v11,
        _v14 = _v4.x * _v6,
        _v15 = _v4.y * _v7;
      if (_v0.rect = {
        x: -_v14 * _v12 / _v6 + _v3.x,
        y: -_v15 * _v13 / _v7 + _v3.y,
        width: _v12,
        height: _v13
      }, _v0.innerMediaRect = _v14.DEFAULT_RECT, _v0.sourceFootageRect = _v14.DEFAULT_RECT, _v2) {
        let _v0 = _v2.width / _v6 / (_v2.height / _v7);
        Math.abs(_v0 - _v0.rect.width / _v0.rect.height) > .01 && (_v0.rect.height = _v0.rect.width / _v0, _v0.rect.height > 1 && (_v0.rect.width /= _v0.rect.height, _v0.rect.height = 1, _v0.rect.x = (1 - _v0.rect.width) / 2));
      }
    },
    _v39 = _v0 => {
      let _v1,
        _v2 = _v0?.layers;
      if (_v2) {
        let _v0 = _v2[0].effects,
          {
            width: _v1,
            height: _v2
          } = _v0.rect;
        (_v1 = _v0.find(_v0 => _v0.name === _v22.ImageEffectName.breath)) && (_v1.options.transformsFromFootageRect[0].transform.type = _v22.TransitionTimingFunctionName.LINEAR, _v1 > 1 && (_v1.options.transformsFromFootageRect[0].transform.transformX *= _v1), _v2 > 1 && (_v1.options.transformsFromFootageRect[0].transform.transformY *= _v2));
      }
      _v2 && _v1 || (_v0.layers = [{
        type: _v22.ImageLayerTypeName.FULL_SOURCE,
        effects: [{
          name: _v22.ImageEffectName.breath,
          options: {
            transformsFromFootageRect: [{
              timing: {
                startTime: 0,
                endTime: _v0.compositionTiming.end - _v0.compositionTiming.start
              },
              transform: {
                type: _v22.TransitionTimingFunctionName.LINEAR,
                transformX: _v0.sourceFootageRect.width * (1 - _v13.BREATH_EFFECT_SCALES.ZOOM_IN) / 2,
                transformY: _v0.sourceFootageRect.height * (1 - _v13.BREATH_EFFECT_SCALES.ZOOM_IN) / 2,
                scale: _v13.BREATH_EFFECT_SCALES.ZOOM_IN
              }
            }]
          }
        }]
      }]);
    },
    _v40 = _v0 => {
      _v0.effects && (_v0.effects = _v0.effects.filter(_v0 => _v0.type !== _v6.SoundEffectType.fade));
    };
  function _v41({
    type: _v0,
    start: _v1,
    end: _v2,
    thumbnailUrl: _v3,
    creditInfo: _v4,
    effects: _v5,
    elementDuration: _v6,
    sourceHash: _v7,
    rect: _v8,
    colors: _v9,
    description: _v10,
    isLoading: _v11 = !0,
    selectable: _v12 = !0,
    animationName: _v13
  }) {
    let _v14 = {
      id: (0, _v12.createUuidV4)(),
      type: _v32[_v0],
      compositionTiming: {
        start: _v1,
        end: _v2
      },
      sourceFootageRect: _v14.DEFAULT_RECT,
      rect: _v8 || _v14.DEFAULT_RECT,
      innerMediaRect: _v14.DEFAULT_RECT,
      isManualCrop: !1,
      isLoading: _v11,
      sourceHash: _v7,
      thumbnailUrl: _v3,
      creditInfo: _v4,
      description: _v10,
      selectable: _v12,
      animationMid: _v3.AnimationMid.NONE,
      animationOut: _v3.AnimationOut.NONE,
      ...(_v13 && {
        animationName: _v13
      })
    };
    if (_v0 === _v23.MediaType.IMAGE) return {
      ..._v14,
      ..._v9,
      layers: [{
        type: _v22.ImageLayerTypeName.FULL_SOURCE,
        effects: _v5
      }],
      flip: {
        horizontal: !1,
        vertical: !1
      },
      rotate: 0
    };
    if (_v0 === _v23.MediaType.VIDEO) return {
      ..._v14,
      hasAudio: !1,
      timing: {
        startTime: 0,
        endTime: _v6
      },
      muted: !1,
      effects: [{
        type: _v6.SoundEffectType.volume,
        level: 1,
        startTime: 0,
        endTime: _v6
      }]
    };
    throw Error("Invalid media type");
  }
  let _v42 = async _v0 => new Promise((_v0, _v1) => {
    let _v2 = document.createElement("video"),
      _v3 = async () => {
        let {
            videoWidth: _v0,
            videoHeight: _v1
          } = _v2,
          _v2 = document.createElement("canvas");
        _v2.width = (0, _v27.getThumbnailWidth)(_v0, _v1), _v2.height = _v30.TIMELINE_STRIP_HEIGHT;
        let _v3 = _v2.getContext("2d");
        _v3?.drawImage(_v2, 0, 0, _v2.width, _v2.height);
        let _v4 = _v2.toDataURL("image/jpeg");
        _v2.src = "", _v2.srcObject = null, _v2.removeEventListener("loadeddata", _v3), _v2.removeEventListener("error", _v1), _v0(_v4);
      };
    _v2.addEventListener("loadeddata", _v3), _v2.addEventListener("error", _v1), _v2.currentTime = 5e-324, _v2.src = _v0;
  });
  _v0.s(["addDefaultBreathEffect", 0, _v39, "convertVideoRecording", 0, _v0 => ({
    id: _v0.id.toString(),
    previewUrl: _v0.link,
    thumbnailUrl: _v0.thumbnailLink,
    title: _v0.name,
    fileName: _v0.name,
    duration: _v0.duration,
    type: "video",
    height: _v0.height,
    width: _v0.width,
    modificationDate: "",
    serviceName: "vimeo",
    uplOrigin: "vimeo",
    date: ""
  }), "convertVimeoVideo", 0, _v0 => {
    let {
        pictures: _v1,
        createdTime: _v2,
        name: _v3,
        files: _v4,
        duration: _v5,
        uri: _v6,
        width: _v7,
        height: _v8,
        lastUserActionEventDate: _v9
      } = _v0,
      _v10 = _v6?.split("/") || [];
    return {
      id: _v10[_v10.length - 1],
      date: _v2,
      previewUrl: _v4?.[0]?.link || "",
      thumbnailUrl: _v1?.baseLink,
      title: _v3,
      fileName: _v3,
      duration: _v5,
      type: "video",
      height: _v8,
      width: _v7,
      modificationDate: _v9 || "",
      serviceName: "vimeo",
      uplOrigin: "vimeo"
    };
  }, "createMediaElementObject", 0, _v41, "fetchAudioDuration", 0, _v0 => new Promise(_v0 => {
    let _v1 = new Audio(),
      _v2 = () => {
        let _v0 = _v1.duration;
        _v1.removeEventListener("loadedmetadata", _v2), _v1.removeEventListener("error", _v2), _v1.src = "", _v1.remove(), _v0(_v0 || 0);
      };
    _v1.addEventListener("loadedmetadata", _v2), _v1.addEventListener("error", _v2), _v1.src = _v0;
  }), "fetchImageMetadata", 0, _v35, "fetchMediaMetadata", 0, _v36, "fetchVideoMetadata", 0, _v34, "generateVideoThumbnail", 0, _v42, "getMediaSize", 0, _v37, "mediaTypeToCompositionTypeMap", 0, _v32, "normalizeMediaRect", 0, _v38, "removeFades", 0, _v40, "removeRandomizedSuffixFromFileName", 0, _v0 => _v0.replace(/-[^.-]+(?=\.[^.]+$)/, "")], 0);
  var _v43 = _v0.i(0),
    _v44 = _v0.i(0);
  let _v45 = (_v0, _v1 = _v5.LayerType.VISUAL) => ({
      type: _v1,
      composition: _v0 || [],
      id: `layer-${(0, _v43.randomString)(5)}`
    }),
    _v46 = _v0 => Array.isArray(_v0) ? _v0[0] : _v0,
    _v47 = async (_v0, _v1, _v2, _v3 = !1) => new Promise(async _v0 => {
      let _v1 = `logo-${(0, _v43.randomString)(5)}`,
        {
          width: _v2,
          height: _v3
        } = await _v35(_v0, _v3, !0),
        _v4 = _v2 / _v3,
        _v5 = _v24.OrientationRatio[_v1],
        _v6 = _v14.DEFAULT_LOGO_HEIGHT * _v4 / _v5,
        _v7 = {
          x: _v14.DEFAULT_LOGO_X_Y,
          y: _v14.DEFAULT_LOGO_X_Y * _v24.OrientationRatio[_v1],
          width: _v6,
          height: _v14.DEFAULT_LOGO_HEIGHT
        },
        _v8 = {
          mhash: "",
          hash: _v1,
          height: _v3,
          width: _v2,
          type: _v8.SourceType.IMAGE,
          duration: 0,
          service: "",
          previewUrl: _v0,
          previewUrlLivePhoto: null,
          previewHeight: _v3,
          previewWidth: _v2,
          order: 0,
          text: null,
          name: "logo.jpg",
          size: 0,
          externalId: "",
          hasAudio: !1,
          masks: null,
          thumbnailsSprites: null,
          thumb: null,
          transcriptions: [],
          status: "",
          fps: 0
        };
      _v0({
        element: {
          id: (0, _v12.createUuidV4)(),
          type: _v4.CompositionElementType.IMAGE,
          rect: _v7,
          compositionTiming: {
            start: 0,
            end: _v2
          },
          bgColor: "",
          sourceFootageRect: _v14.DEFAULT_RECT,
          innerMediaRect: _v14.DEFAULT_RECT,
          isManualCrop: !1,
          isLoading: !1,
          sourceHash: _v1,
          thumbnailUrl: _v0,
          layers: [{
            type: _v22.ImageLayerTypeName.FULL_SOURCE,
            effects: [{
              name: _v22.ImageEffectName.breath,
              options: {
                transformsFromFootageRect: [{
                  timing: {
                    startTime: 0,
                    endTime: _v2
                  },
                  transform: {
                    type: _v22.TransitionTimingFunctionName.LINEAR,
                    transformX: _v14.DEFAULT_RECT.width * (1 - _v13.BREATH_EFFECT_SCALES.NONE) / 2,
                    transformY: _v14.DEFAULT_RECT.height * (1 - _v13.BREATH_EFFECT_SCALES.NONE) / 2,
                    scale: _v13.BREATH_EFFECT_SCALES.NONE
                  }
                }]
              }
            }]
          }],
          selectable: !0
        },
        source: _v8
      });
    }),
    _v48 = async ({
      logo: _v0,
      orientation: _v1,
      end: _v2,
      isCrossOrigin: _v3 = !1
    }) => {
      let {
          width: _v4,
          height: _v5
        } = await _v35(_v0.url, _v3, !0),
        _v6 = _v24.OrientationRatio[_v1],
        _v7 = _v14.DEFAULT_LOGO_HEIGHT * (_v4 / _v5) / _v6,
        _v8 = {
          x: _v14.DEFAULT_LOGO_X_Y,
          y: _v14.DEFAULT_LOGO_X_Y * _v24.OrientationRatio[_v1],
          width: _v7,
          height: _v14.DEFAULT_LOGO_HEIGHT
        };
      return {
        element: {
          id: (0, _v12.createUuidV4)(),
          type: _v4.CompositionElementType.IMAGE,
          rect: _v8,
          compositionTiming: {
            start: 0,
            end: _v2
          },
          bgColor: "",
          sourceFootageRect: _v14.DEFAULT_RECT,
          innerMediaRect: _v14.DEFAULT_RECT,
          isManualCrop: !1,
          isLoading: !1,
          sourceHash: _v0.hash,
          thumbnailUrl: _v0.url,
          layers: [{
            type: _v22.ImageLayerTypeName.FULL_SOURCE,
            effects: [{
              name: _v22.ImageEffectName.breath,
              options: {
                transformsFromFootageRect: [{
                  timing: {
                    startTime: 0,
                    endTime: _v2
                  },
                  transform: {
                    type: _v22.TransitionTimingFunctionName.LINEAR,
                    transformX: _v14.DEFAULT_RECT.width * (1 - _v13.BREATH_EFFECT_SCALES.NONE) / 2,
                    transformY: _v14.DEFAULT_RECT.height * (1 - _v13.BREATH_EFFECT_SCALES.NONE) / 2,
                    scale: _v13.BREATH_EFFECT_SCALES.NONE
                  }
                }]
              }
            }]
          }],
          flip: {
            horizontal: !1,
            vertical: !1
          },
          rotate: 0,
          selectable: !0
        }
      };
    },
    _v49 = async _v0 => new Promise(async _v0 => {
      let {
          scenes: _v1,
          sources: _v2
        } = _v0,
        _v3 = 0,
        _v4 = [];
      _v1?.forEach(_v0 => {
        let _v1 = (0, _v44.toNearestFrame)(_v0.sceneDuration.endTime);
        _v0.bgColor && _v4.push({
          id: (0, _v43.randomString)(5),
          type: _v4.CompositionElementType.SOLID,
          rect: _v14.DEFAULT_RECT,
          zindex: 0,
          compositionTiming: {
            start: _v3,
            end: _v1
          },
          fill: _v0.bgColor,
          selectable: !0
        }), _v0.composition.sort((_v0, _v1) => (_v0.zindex || 0) - (_v1.zindex || 0)), _v0.composition.forEach((_v0, _v1) => {
          Object.keys(_v0.compositionTiming).forEach(_v0 => {
            _v0.compositionTiming[_v0] = (0, _v44.toNearestFrame)(_v0.compositionTiming[_v0]);
          });
          let _v2 = (0, _v1.default)(_v0.compositionTiming.start) ? _v0.compositionTiming.startTime : _v0.compositionTiming.start,
            _v3 = (0, _v1.default)(_v0.compositionTiming.end) ? _v0.compositionTiming.endTime : _v0.compositionTiming.end,
            _v4 = [];
          if ((0, _v9.isMediaElement)(_v0)) {
            _v0.innerMediaRect.width > 0 && Object.values((0, _v10.wrappingRectsFromRect)(_v0.innerMediaRect, _v14.DEFAULT_RECT)).forEach(_v0 => _v0.width > 0 && _v0.height > 0 && _v4.push(_v0));
            let _v0 = _v2?.find(_v0 => _v0.hash === _v0.sourceHash);
            _v38(_v0, _v0.orientation, _v0);
          }
          (0, _v9.isImageElement)(_v0) && _v39(_v0), (0, _v9.isVideoElement)(_v0) && _v40(_v0);
          let _v5 = (0, _v9.isVideoElement)(_v0) || (0, _v9.isSoundElement)(_v0),
            _v6 = `ce-${(0, _v43.randomString)(5)}`;
          _v4.push({
            ..._v0,
            ...(_v5 && {
              timing: _v46(_v0.timing),
              effects: [{
                startTime: 0,
                endTime: _v1 - _v3,
                type: _v6.SoundEffectType.volume,
                level: +!_v0.muted
              }]
            }),
            zindex: _v0.bgColor ? _v1 + 1 : _v1,
            id: _v6,
            compositionTiming: {
              start: _v2 + _v3,
              end: (0, _v9.isMediaElement)(_v0) ? _v1 : Math.min(_v3 + _v3, _v1)
            }
          }), _v4?.length && (0, _v9.isMediaElement)(_v0) && _v0.layoutId !== _v20.Layout.FRAME && _v0.layoutId !== _v20.Layout.FULL_FRAME && _v4.forEach(_v0 => {
            _v4.push({
              id: (0, _v43.randomString)(5),
              type: _v4.CompositionElementType.SOLID,
              rect: _v0,
              zindex: 0,
              compositionTiming: {
                start: _v3,
                end: _v1
              },
              fill: _v0.bgColor,
              selectable: !0
            });
          });
        }), _v3 = _v1;
      });
      let {
        soundElement: _v5,
        soundSource: _v6
      } = ((_v0, _v1) => {
        let {
            globalScene: _v2,
            sound: _v3
          } = _v0,
          _v4 = _v2?.composition.find(_v9.isSoundElement);
        if (_v4 && _v3) {
          let {
              type: _v0,
              timing: _v1,
              compositionTiming: _v2
            } = _v4,
            {
              id: _v3,
              name: _v4,
              artist: _v5,
              album: _v6,
              type: _v7,
              hash: _v8
            } = _v3,
            _v9 = _v3.toString(),
            _v10 = _v0.sources.find(_v0 => _v0.hash === _v4.id)?.previewUrl || _v3?.url || "",
            _v11 = _v46(_v1),
            _v12 = Math.min(_v2.end, _v1),
            _v13 = {
              id: _v9 + (0, _v12.createUuidV4)(),
              name: _v4,
              artist: _v5,
              album: _v6,
              url: _v10,
              type: _v0,
              timing: {
                ..._v11,
                endTime: _v12
              },
              compositionTiming: {
                ..._v2,
                end: _v12
              },
              rect: _v14.DEFAULT_RECT,
              muted: !1,
              sourceHash: _v7 === _v7.SoundElementSource.LIBRARY ? _v9 : _v8,
              effects: [{
                type: _v6.SoundEffectType.volume,
                level: _v17.MUSIC_DEFAULT_VOLUME,
                startTime: 0,
                endTime: _v1.endTime - _v1.startTime
              }],
              selectable: !0
            },
            _v14 = null;
          return _v7 !== _v7.SoundElementSource.USER_UPLOAD && (_v14 = {
            type: _v8.SourceType.AUDIO,
            width: 0,
            height: 0,
            previewUrl: _v10,
            duration: _v1.endTime,
            mhash: "",
            hash: _v9,
            previewUrlLivePhoto: null,
            service: "",
            previewHeight: 0,
            previewWidth: 0,
            order: 0,
            text: null,
            name: _v4,
            size: 0,
            externalId: "",
            hasAudio: !0,
            masks: null,
            thumbnailsSprites: null,
            thumb: null,
            transcriptions: null,
            status: "",
            fps: 0
          }), {
            soundElement: _v13,
            soundSource: _v14
          };
        }
        return {
          soundElement: null,
          soundSource: null
        };
      })(_v0, _v3);
      _v5 && _v4.unshift(_v5), _v6 && _v2.unshift(_v6);
      let _v7 = [];
      if (_v4.forEach(_v0 => {
        let _v1 = _v7.findIndex(_v0 => {
          let _v1 = _v0.composition[_v0.composition.length - 1].compositionTiming.end;
          return _v0.compositionTiming.start >= _v1;
        });
        if (-1 !== _v1) _v7[_v1].composition.push(Object.assign(_v0, {
          zindex: _v1
        }));else if (!_v7[_v7.length]) {
          let _v0 = (0, _v9.isSoundElement)(_v0) ? _v5.LayerType.AUDIO : _v5.LayerType.VISUAL;
          _v7.push(_v45([Object.assign(_v0, {
            zindex: _v7.length
          })], _v0));
        }
      }), _v2?.forEach(_v0 => {
        _v0.previewHeight || (_v0.previewHeight = _v14.DEFAULT_LIBRARY_GRAPHIC_DIMENSIONS.height), _v0.previewWidth || (_v0.previewWidth = _v14.DEFAULT_LIBRARY_GRAPHIC_DIMENSIONS.width), _v0.previewUrl || _v7.forEach(_v0 => _v0.composition.forEach(_v0 => {
          _v0.sourceHash === _v0.hash && (_v0.previewUrl = _v0.mediaPath);
        }));
      }), _v0.branding.logoWatermark && _v0.branding.logoPath) {
        let {
          element: _v0,
          source: _v1
        } = await _v47(_v0.branding.logoPath, _v0.orientation, _v3);
        _v7.push(_v45([Object.assign(_v0, {
          zindex: _v7.length
        })])), _v2.push(_v1);
      }
      let {
        scenes: _v8,
        ..._v9
      } = _v0;
      _v0({
        ..._v9,
        canvas: {
          color: `#${_v0.branding?.colors?.primary}`
        },
        layers: _v7,
        version: 11,
        interactiveQuiz: _v16.DEFAULT_INTERACTIVE_QUIZ,
        interactiveLayers: [],
        interactiveOverlays: []
      });
    }),
    _v50 = (_v0, _v1, _v2, _v3 = !1) => {
      let _v4 = [];
      return _v2.forEach(_v0 => {
        _v0.composition.forEach(_v0 => {
          let {
              start: _v1,
              end: _v2
            } = _v0.compositionTiming,
            _v3 = _v0.type !== _v4.CompositionElementType.TRANSITION;
          (_v2 > _v0 && _v2 <= _v1 || _v1 >= _v0 && _v1 <= _v1 || _v1 < _v0 && _v2 > _v1 || _v3 && _v2 === _v1) && _v3 && _v4.push(_v0);
        });
      }), _v4;
    },
    _v51 = _v0 => {
      let _v1 = [];
      return _v0.forEach(_v0 => {
        _v0.composition.forEach(_v0 => {
          _v1.push(_v0);
        });
      }), _v1;
    },
    _v52 = (_v0, _v1) => {
      for (let _v0 of _v1) {
        let _v0 = _v0.composition.find(_v0 => _v0.id === _v0);
        if (_v0) return _v0;
      }
    },
    _v53 = _v0 => {
      let _v1 = new Set();
      return _v0.forEach(_v0 => {
        _v0.composition.forEach(_v0 => {
          "font" in _v0 && _v1.add(_v0.font);
        });
      }), [..._v1];
    },
    _v54 = (_v0, _v1, _v2) => {
      let _v3 = _v50(_v0, _v1, _v2);
      return 0 === _v3.length ? 0 : Math.max(...new Set(_v3.map(_v0 => _v0.zindex || 0).sort((_v0, _v1) => _v0 - _v1))) + 1;
    },
    _v55 = (_v0, _v1) => void 0 !== _v0.zindex ? _v0.zindex : _v54(_v0.compositionTiming.start, _v0.compositionTiming.end, _v1),
    _v56 = (_v0, _v1, _v2, _v3 = []) => {
      let _v4 = !1;
      for (let _v0 = 0; _v0 < _v2.length; _v0++) {
        let _v0 = _v2[_v0],
          {
            start: _v1,
            end: _v2
          } = _v0.compositionTiming;
        if (!_v3.includes(_v0.id) && _v0.type !== _v4.CompositionElementType.TRANSITION && (_v2 > _v0 && _v2 <= _v1 || _v1 >= _v0 && _v1 < _v1 || _v1 < _v0 && _v2 > _v1)) {
          _v4 = !0;
          break;
        }
      }
      return _v4;
    },
    _v57 = (_v0, _v1, _v2 = []) => {
      for (let _v0 of _v0) {
        let {
          start: _v0,
          end: _v1
        } = _v0.compositionTiming;
        if (_v56(_v0, _v1, _v1, _v2)) return !0;
      }
      return !1;
    },
    _v58 = (_v0, _v1, _v2, _v3) => {
      let _v4 = {
        ..._v0,
        id: _v1,
        compositionTiming: {
          start: _v0.compositionTiming.start,
          end: _v3
        },
        ...((0, _v9.isElementWithTiming)(_v0) && {
          timing: {
            ..._v0.timing,
            endTime: _v3 - _v0.compositionTiming.start + _v0.timing.startTime
          },
          effects: _v0.effects ? (0, _v11.removeFadeOutEffect)(_v0) : [(0, _v11.getDefaultVolumeEffect)(_v0)]
        })
      };
      (0, _v9.isElementWithTiming)(_v4) && (_v4.effects = (0, _v11.getElementEffectsAdjustedDuration)(_v4, _v3 - _v0.compositionTiming.start));
      let _v5 = {
        ..._v0,
        id: _v2,
        compositionTiming: {
          start: _v3,
          end: _v0.compositionTiming.end
        },
        ...((0, _v9.isElementWithTiming)(_v0) && {
          timing: {
            ..._v0.timing,
            startTime: _v3 - _v0.compositionTiming.start + _v0.timing.startTime
          },
          effects: _v0.effects ? (0, _v11.removeFadeInEffect)(_v0) : [(0, _v11.getDefaultVolumeEffect)(_v0)]
        })
      };
      return (0, _v9.isElementWithTiming)(_v5) && (_v5.effects = (0, _v11.getElementEffectsAdjustedDuration)(_v5, _v0.compositionTiming.end - _v3)), (0, _v9.isMediaElement)(_v5) && _v5.animationName && (_v5.animationName = _v3.AnimationType.NONE), {
        leftSplitElement: _v4,
        rightSplitElement: _v5
      };
    };
  function _v59(_v0, _v1, _v2, _v3, _v4 = !1) {
    if (!_v0.length) return !1;
    for (let _v0 of _v1) for (let _v0 of _v0.composition) {
      let _v0 = _v0.type === _v4.CompositionElementType.SOUND,
        _v1 = !_v0 || _v0 && !_v4;
      if (_v0.includes(_v0.id) && (0, _v9.isInCurrentTime)(_v2, _v0, _v3) && _v1) return !0;
    }
    return !1;
  }
  function _v60({
    storyboard: _v0,
    vimeoSourceHash: _v1,
    shouldAddBackgroundVideoLayer: _v2
  }) {
    if (_v2 && !_v1) throw Error("Could not find vimeo video source hash");
    let {
        interactiveLayers: _v3
      } = _v0,
      _v4 = _v0.sources.find(_v0 => _v0.hash === _v1),
      _v5 = [..._v3];
    if (_v2) {
      if (!_v4) throw Error("Could not find background video source");
      _v5 = [_v45([_v41({
        type: _v23.MediaType.VIDEO,
        rect: _v14.DEFAULT_RECT,
        thumbnailUrl: "",
        elementDuration: _v4.duration,
        start: 0,
        end: _v4.duration,
        effects: [],
        sourceHash: _v4.hash,
        isLoading: !1,
        selectable: !1
      })], _v5.LayerType.INTERACTIVE_BACKGROUND_VIDEO), ..._v5];
    }
    _v5 = _v5.map((_v0, _v1) => ({
      ..._v0,
      composition: _v0.composition.map(_v0 => ({
        ..._v0,
        zindex: _v1
      }))
    }));
    let _v6 = !_v0.interactiveQuiz;
    return {
      ..._v0,
      layers: _v5,
      ...(_v6 && {
        interactiveQuiz: _v16.DEFAULT_INTERACTIVE_QUIZ
      })
    };
  }
  function _v61(_v0, _v1) {
    let _v2 = _v0.layers.filter(_v0 => _v0.type !== _v5.LayerType.INTERACTIVE_BACKGROUND_VIDEO);
    return {
      ..._v0,
      layers: _v1.layers,
      interactiveLayers: _v2
    };
  }
  function _v62(_v0, _v1) {
    let _v2 = _v1.activeOverlayId,
      _v3 = _v0.interactiveOverlays.findIndex(_v0 => _v0.id === _v2);
    if (-1 === _v3) return console.error(`Interactive overlay with id ${_v2} not found while autosaving`), _v19.default.sendLog(_v15.INTERACTIVE_ELEMENT_MISSING_OVERLAY, _v21.LogComponent.INTERACTIVE_ERROR, {
      storyboardId: _v0.id,
      overlayId: _v2,
      context: "prepareInteractiveOverlayEditorStoryboardForSave"
    }), {
      ..._v0,
      layers: _v1.editorBackup.storyboardLayers
    };
    let _v4 = _v1.editorBackup.storyboardLayers,
      _v5 = _v1.linkedElementId,
      {
        element: _v6,
        layerIndex: _v7,
        elementIndex: _v8
      } = _v74(_v5, _v4);
    if (!_v6) return console.error(`Element with id ${_v5} not found in storyboard layers while autosaving`), _v19.default.sendLog(_v15.OVERLAY_MISSING_LINKED_ELEMENT, _v21.LogComponent.INTERACTIVE_ERROR, {
      storyboardId: _v0.id,
      overlayId: _v2,
      context: "prepareInteractiveOverlayEditorStoryboardForSave"
    }), {
      ..._v0,
      layers: _v1.editorBackup.storyboardLayers
    };
    let _v9 = _v0.layers.filter(_v0 => _v0.type !== _v5.LayerType.INTERACTIVE_BACKGROUND_VIDEO),
      _v10 = JSON.parse(JSON.stringify(_v0.interactiveOverlays));
    _v10[_v3] = {
      ..._v10[_v3],
      interactiveLayers: _v9
    };
    let _v11 = JSON.parse(JSON.stringify(_v4));
    return (0, _v9.isOverlayElement)(_v6) && (0, _v25.mutateOverlayElementAndLayersWhenExitingOverlayEditor)({
      layersToRestore: _v11,
      overlayElementIndex: _v8,
      overlayElementLayerIndex: _v7,
      overlayId: _v2,
      currentlyEditedOverlayLayers: _v9
    }), {
      ..._v0,
      layers: _v11,
      interactiveOverlays: _v10
    };
  }
  function _v63(_v0) {
    return Number.isFinite(_v0.x) && Number.isFinite(_v0.y);
  }
  function _v64(_v0) {
    return !(_v0.compositionTiming.end - _v0.compositionTiming.start < _v18.FRAME_TIMING) && !(_v0.compositionTiming.end < _v0.compositionTiming.start);
  }
  function _v65(_v0) {
    let {
      fadeInEffect: _v1,
      volumeEffect: _v2,
      fadeOutEffect: _v3
    } = (0, _v11.deconstructSoundEffects)(_v0);
    return _v2 && _v66(_v2) && (_v2.startTime = _v2.endTime), _v1 && _v66(_v1) && (_v1.startTime = _v1.endTime), _v3 && _v66(_v3) && (_v3.startTime = _v3.endTime), (0, _v26.isSoundEffectsValid)(_v0);
  }
  function _v66(_v0) {
    return _v0.startTime > _v0.endTime;
  }
  function _v67(_v0) {
    return _v0.compositionTiming.start < 0;
  }
  function _v68(_v0) {
    return _v0.endsWith("_1000");
  }
  function _v69(_v0, _v1) {
    return _v68(_v0) && !!_v1;
  }
  function _v70({
    element: _v0,
    layers: _v1
  }) {
    if ((0, _v9.isInteractiveElement)(_v0)) {
      let _v0 = (0, _v44.getDurationFromLayers)(_v1);
      return {
        ..._v0,
        compositionTiming: (0, _v44.getSafeTimeAccordingToDuration)({
          compositionTiming: _v0.compositionTiming,
          duration: _v0
        })
      };
    }
    return _v0;
  }
  let _v71 = _v0 => _v0.reduce((_v0, _v1) => ({
    ..._v0,
    [_v1.hash]: _v1
  }), {});
  function _v72({
    layers: _v0,
    sources: _v1,
    vsid: _v2,
    textAnimations: _v3,
    fonts: _v4
  }) {
    let _v5 = _v71(_v1);
    return _v0.map(_v0 => ({
      ..._v0,
      composition: _v0.composition.reduce((_v0, _v1) => {
        if ((0, _v9.isImageHotspot)(_v1)) {
          let _v0 = !_v5[_v1.sourceHash],
            _v1 = _v1.interactiveHotspot.hover,
            _v2 = !!_v1.sourceHash && !_v5[_v1.sourceHash];
          _v0 && _v19.default.sendLog(_v15.MISSING_SOURCE, _v21.LogComponent.INTERACTIVE_ERROR, {
            vsid: _v2 ?? "unknown",
            sourceHash: _v1.sourceHash
          }), _v2 && _v19.default.sendLog(_v15.MISSING_SOURCE, _v21.LogComponent.INTERACTIVE_ERROR, {
            vsid: _v2 ?? "unknown",
            sourceHash: _v1.sourceHash
          }), _v0 || _v2 || _v0.push(_v1), !_v0 && _v2 && _v0.push({
            ..._v1,
            interactiveHotspot: {
              ..._v1.interactiveHotspot,
              hover: {
                ..._v1,
                sourceHash: void 0
              }
            }
          });
        } else if ((0, _v9.isMediaElement)(_v1) || (0, _v9.isSoundElement)(_v1)) _v5[_v1.sourceHash] ? _v0.push({
          ..._v1,
          ...((0, _v9.isVideoElement)(_v1) && {
            timing: _v46(_v1.timing)
          })
        }) : _v19.default.sendLog(_v15.MISSING_SOURCE, _v21.LogComponent.EDITOR_API_ERROR, {
          vsid: _v2 ?? "unknown",
          sourceHash: _v1.sourceHash
        });else if ((0, _v9.isTextElement)(_v1)) {
          let _v0 = _v4?.fonts[_v1.font],
            _v1 = _v3?.[_v1.textStyleId];
          _v0.push({
            ..._v1,
            textStyleId: _v1 ? _v1.textStyleId : _v14.DEFAULT_TEXT_STYLE,
            font: _v0 ? _v1.font : _v14.DEFAULT_FONT
          });
        } else _v0.push(_v1);
        return _v0;
      }, [])
    })).filter(_v0 => _v0.composition.length > 0);
  }
  let _v73 = (_v0, _v1) => _v74(_v0, _v1.layers)?.element,
    _v74 = (_v0, _v1) => {
      for (let _v0 = 0; _v0 < _v1.length; _v0++) {
        let _v0 = _v1[_v0];
        for (let _v0 = 0; _v0 < _v0.composition.length; _v0++) {
          let _v0 = _v0.composition[_v0];
          if (_v0.id === _v0) return {
            element: _v0,
            layerIndex: _v0,
            elementIndex: _v0
          };
        }
      }
      return {
        element: void 0,
        layerIndex: -1,
        elementIndex: -1
      };
    },
    _v75 = (_v0, _v1) => {
      for (let _v0 = 0; _v0 < _v1.length; _v0++) {
        let _v0 = _v1[_v0].composition.findIndex(_v0 => _v0.id === _v0);
        if (-1 !== _v0) {
          let _v0 = {
            ..._v1[_v0],
            composition: [..._v1[_v0].composition.slice(0, _v0), ..._v1[_v0].composition.slice(_v0 + 1)]
          };
          return [..._v1.slice(0, _v0), ...(_v0.composition.length ? [_v0] : []), ..._v1.slice(_v0 + 1)];
        }
      }
      return _v1;
    },
    _v76 = _v0 => (0, _v2.default)(_v0.flatMap(_v0 => _v0.composition.filter(_v0 => (0, _v9.isMediaElement)(_v0)).flatMap(_v0 => (0, _v9.isImageHotspot)(_v0) && _v0.interactiveHotspot.hover.sourceHash ? [_v0.sourceHash, _v0.interactiveHotspot.hover.sourceHash] : [_v0.sourceHash]))),
    _v77 = _v0 => (0, _v2.default)(_v0.flatMap(_v0 => _v0.composition.filter(_v0 => (0, _v9.isMediaElement)(_v0)).map(_v0 => _v0.sourceHash).filter(_v0 => !!_v0))),
    _v78 = _v0 => _v0.split("_")[1];
  function _v79({
    layers: _v0,
    sources: _v1,
    storyboardId: _v2,
    isEVV: _v3,
    flow: _v4
  }) {
    let _v5,
      _v6,
      _v7 = structuredClone(_v0),
      _v8 = structuredClone(_v1),
      _v9 = [],
      _v10 = 0;
    for (let _v0 of _v7) {
      let _v0 = [];
      for (let _v0 of _v0.composition) {
        if (null === _v0.compositionTiming) {
          _v19.default.sendLog(_v15.MISSING_COMPOSITION_TIMING, _v21.LogComponent.EDITOR_ERROR, {
            storyboardId: _v2,
            elementId: _v0.id,
            elementType: _v0.type,
            sourceHash: (0, _v9.isMediaElement)(_v0) ? _v0.sourceHash : "n/a",
            flow: _v4
          }), _v10++;
          continue;
        }
        (0, _v9.isSoundElement)(_v0) && null === _v0.effects && (_v19.default.sendLog("sound element effects is null", _v21.LogComponent.EDITOR_ERROR, {
          storyboardId: _v2,
          elementId: _v0.id,
          elementType: _v0.type,
          flow: _v4
        }), _v0.effects = [(0, _v11.getDefaultVolumeEffect)(_v0)]), _v3 && (_v0.compositionTiming = {
          start: (0, _v44.toNearestFrame)(_v0.compositionTiming.start),
          end: (0, _v44.toNearestFrame)(_v0.compositionTiming.end)
        }, "timing" in _v0 && (_v0.timing = {
          startTime: (0, _v44.toNearestFrame)(_v0.timing.startTime),
          endTime: (0, _v44.toNearestFrame)(_v0.timing.endTime)
        })), _v0.push(_v0);
      }
      _v9.push({
        ..._v0,
        composition: _v0
      });
    }
    let {
      layers: _v11,
      sources: _v12
    } = (_v6 = _v71(_v5 = _v8.map(_v0 => ({
      ..._v0,
      duration: (0, _v44.toFloorFrame)(_v0.duration)
    }))), {
      layers: _v9.map(_v0 => {
        let _v1 = [..._v0.composition].sort((_v0, _v1) => _v0.compositionTiming.start - _v1.compositionTiming.end).map(_v0 => {
          if ((_v0 => {
            let {
              start: _v1,
              end: _v2
            } = _v0.compositionTiming;
            return (0, _v44.toNearestFrame)(_v1) === _v1 && (0, _v44.toNearestFrame)(_v2) === _v2;
          })(_v0) || !(0, _v9.isVideoElement)(_v0)) return _v0;
          let {
              start: _v1,
              end: _v2
            } = _v0.compositionTiming,
            {
              startTime: _v3,
              endTime: _v4
            } = _v0.timing,
            _v5 = _v4 < _v6[_v0.sourceHash].duration,
            _v6 = _v3 > 0 ? (0, _v44.toNearestFrame)(_v1) : (0, _v44.toCeilFrame)(_v1),
            _v7 = _v5 ? (0, _v44.toNearestFrame)(_v2) : (0, _v44.toFloorFrame)(_v2),
            _v8 = {
              start: _v6 - _v1,
              end: _v7 - _v2
            },
            _v9 = (0, _v44.toFloorFrame)(_v4),
            _v10 = _v3 + (_v9 - _v4) + _v8.start,
            _v11 = _v9 + _v8.end,
            _v12 = _v10 < 0 ? -_v10 : 0;
          return {
            ..._v0,
            compositionTiming: {
              start: _v6,
              end: _v7
            },
            timing: {
              startTime: (0, _v44.toNearestFrame)(_v10 + _v12),
              endTime: (0, _v44.toNearestFrame)(_v11 + _v12)
            }
          };
        });
        return {
          ..._v0,
          composition: _v1
        };
      }),
      sources: _v5
    });
    return {
      layers: _v11,
      sources: _v12,
      removedElementsCount: _v10
    };
  }
}