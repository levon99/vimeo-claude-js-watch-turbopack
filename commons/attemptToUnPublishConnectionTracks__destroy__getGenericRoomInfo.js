{
  "use strict";

  _v0.s(["attemptToUnPublishConnectionTracks", () => _v100, "destroy", () => _v99, "getGenericRoomInfo", () => _v107, "getPeerRTCReport", () => _v108, "getPerformanceReport", () => _v106, "initializeClients", () => _v102, "initializeRoomConfig", () => _v101, "initializeSdk", () => _v98, "setLogLevel", () => _v104, "setLogUpload", () => _v105, "stopAgoraConnection", () => _v109, "unPublishMediaTrack", () => _v111], 0);
  var _v1,
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
    _v27 = _v0.i(0);
  function _v28(_v0, _v1, _v2) {
    if (_v0.assertIsInitialized(), _v0.assertCanEdit(), !_v0.context.scenes[_v1]) throw new _v13.LiveError("Cannot set agora media data for an undefined scene.");
    return Object.entries(_v2).map(([_v0, _v1]) => [(0, _v14.getRefChild)(_v0.firebase, _v0.scenesListRef, `${_v1}/meta/media/${_v0}`), _v1]);
  }
  async function _v29(_v0, _v1, _v2) {
    await (0, _v21.runBatchedSceneUpdate)(_v0, _v28(_v0, _v1, _v2));
  }
  async function _v30(_v0, _v1, _v2) {
    _v0.assertIsInitialized(), _v0.assertCanEdit(), _v0.log.info("Pause media at:", _v1, _v2), await (0, _v21.runBatchedSceneUpdate)(_v0, _v28(_v0, _v1, {
      status: _v11.EMediaStatus.PAUSE,
      startedAt: null,
      offset: _v2
    }));
  }
  async function _v31(_v0, _v1) {
    _v0.assertIsInitialized(), _v0.assertCanEdit(), _v0.log.info("Restart media:", _v1), await (0, _v21.runBatchedSceneUpdate)(_v0, _v28(_v0, _v1, {
      status: _v11.EMediaStatus.RESTART,
      startedAt: null,
      offset: null
    }));
  }
  async function _v32(_v0, _v1, _v2 = 0) {
    _v0.assertIsInitialized(), _v0.assertCanEdit(), _v0.log.info("Play media:", _v1, _v2), await (0, _v21.runBatchedSceneUpdate)(_v0, _v28(_v0, _v1, {
      status: _v11.EMediaStatus.PLAY,
      startedAt: null,
      offset: _v2
    }));
  }
  var _v33 = _v0.i(0),
    _v34 = _v0.i(0);
  async function _v35(_v0, {
    sceneId: _v1,
    graphicId: _v2,
    graphicType: _v3,
    sourceIndex: _v4,
    options: _v5
  }) {
    _v0.log.info("Adding GFX to a scene:", _v1, _v3, _v2), _v0.assertIsInitialized(), _v0.assertCanEdit();
    let _v6 = _v0.context.scenes[_v1];
    if (_v2) {
      if (_v6) {
        if (!(0, _v27.canAddObjectToScene)(_v6, _v3, _v2)) throw new _v13.LiveError("Cannot add GFX to a scene.");
      } else throw new _v13.LiveError("Cannot add graphic to invalid scene.");
    } else throw new _v13.LiveError("Cannot add invalid graphic ID to a scene.");
    let {
      prescribers: _v7,
      removedItems: _v8,
      conflictingItems: _v9
    } = function (_v0, {
      scene: _v1,
      graphicId: _v2,
      graphicType: _v3,
      sourceIndex: _v4
    }) {
      _v0.assertIsInitialized();
      let _v5 = (0, _v14.getRefChild)(_v0.firebase, _v0.scenesListRef, `/${_v1.id}/graphics`),
        _v6 = [],
        _v7 = [],
        _v8 = [],
        {
          data: _v9
        } = _v0.queryDataSync({
          type: _v6.ELiveConnectionQuery.IS_SCHEDULED_CLOUD_SESSION
        }) || {},
        _v10 = !!(_v1.meta?.layoutType && _v5.graphicsConfig.SCENE.CONTROLS.INDEXED_POSITION_ALLOWED.includes(_v3));
      if (_v1.meta?.isScheduled && !_v9 && _v8.push([(0, _v14.getRefChild)(_v0.firebase, _v0.scenesListRef, `/${_v1.id}/meta/isScheduled`), null]), _v3 === _v11.EGraphicsDescriptorType.AGORA_MEDIA && _v8.push([(0, _v14.getRefChild)(_v0.firebase, _v0.scenesListRef, `/${_v1.id}/meta/media`), (0, _v16.createSceneMediaMetadata)({
        nextOnEOF: !!_v1.meta?.isScheduled && !!_v9 || null
      })]), _v10) {
        let _v0 = _v26.layoutsConfig.LAYOUTS[_v1.meta?.layoutType],
          _v1 = Object.values(_v0.sources).length,
          _v2 = (0, _v16.findIndexPositionedGraphics)(_v1),
          _v3 = _v2.filter(_v0 => Number.isInteger(_v0.position.index)).sort((_v0, _v1) => (_v0.position.index || -1) - (_v1.position.index || -1)),
          _v4 = !_v5.graphicsConfig.SCENE.CONTROLS.BG_POSITION_ALLOWED.includes(_v3) && _v5.graphicsConfig.SCENE.CONTROLS.INDEXED_POSITION_ALLOWED.includes(_v3),
          _v5 = Number.isInteger(_v4) || !_v4 ? _v4 : _v3.reduce((_v0, _v1) => _v1.position.index === _v0 ? _v0 + 1 : _v0, 0);
        if (Number.isInteger(_v5) && _v5 >= _v1) if (1 === _v1) _v5 = 0;else throw new _v13.LiveError("Not enough slots in a scene.");
        _v0.log.info("Inserting graphic into slot:", _v1.id, _v4, _v3, _v5, _v0);
        let _v6 = _v2.find(_v0 => _v0.position.index === _v5 && (!!Number.isInteger(_v5) || _v0.type === _v3));
        return _v6 && (_v6.push(_v6), _v8.push([(0, _v14.getRefChild)(_v0.firebase, _v5, String(_v6.data.sourceId)), null])), _v5.graphicsConfig.SCENE.CONTROLS.CONFLICTING_ALLOWED.includes(_v3) || (0, _v27.findConflictingGraphicsWithType)(_v3, _v1).forEach(_v0 => {
          let _v1 = _v0.data.sourceId;
          _v1 !== _v2 && _v1 !== _v6?.data.sourceId && (_v6.push(_v0), _v7.push(_v0), _v8.push([(0, _v14.getRefChild)(_v0.firebase, _v5, String(_v1)), null]));
        }), _v8.push([(0, _v14.getRefChild)(_v0.firebase, _v5, _v2), (0, _v27.createGraphicsDescriptor)({
          graphicId: _v2,
          graphicType: _v3,
          layoutId: _v0.id,
          layoutIndex: _v5
        })]), {
          prescribers: _v8,
          removedItems: _v6,
          conflictingItems: _v7
        };
      }
      {
        let _v0 = (0, _v27.createGraphicsDescriptor)({
          graphicType: _v3,
          graphicId: _v2
        });
        if (_v3 !== _v11.EGraphicsDescriptorType.AGORA_STREAM) return _v8.push([(0, _v14.getRefChild)(_v0.firebase, _v5, _v2), _v0]), {
          prescribers: _v8,
          removedItems: _v6,
          conflictingItems: _v7
        };
        {
          let _v0 = {
            ..._v1.graphics,
            [_v2]: _v0
          };
          return {
            prescribers: [..._v8, ...Object.entries((0, _v25.rearrangeSourcesPositioning)(_v0)).reduce((_v0, [_v1, _v2]) => (_v1 === _v2 ? _v0.push([(0, _v14.getRefChild)(_v0.firebase, _v5, _v1), _v2]) : _v0.push([(0, _v14.getRefChild)(_v0.firebase, _v5, `${_v1}/position`), _v2.position]), _v0), [])],
            removedItems: _v6,
            conflictingItems: _v7
          };
        }
      }
    }(_v0, {
      scene: _v6,
      graphicId: _v2,
      graphicType: _v3,
      sourceIndex: _v4
    });
    _v0.log.info("Should remove with conflicts:", _v8), await (0, _v14.batchedDatabaseUpdate)(_v0.firebase, _v0.rootRef, _v7), _v45(_v0, _v1, _v3, _v5), _v9.length && _v0.emitSignal({
      type: _v7.ELiveSignal.SHOW_SIMPLE_NOTIFICATION,
      data: {
        message: _v33.translations.conflictingItemRemoved(_v34.NormalizedGraphicsDescriptorType[_v9[0].type])
      }
    });
  }
  async function _v36(_v0, _v1, _v2, _v3, _v4) {
    _v0.log.info("Replacing GFX type in a scene:", _v1, _v2, _v3), _v0.assertIsInitialized(), _v0.assertCanEdit();
    let {
        scenes: _v5
      } = _v0.context,
      _v6 = _v5[_v1];
    if (_v3) {
      if (!_v6) throw new _v13.LiveError("Cannot add graphic to invalid scene.");
    } else throw new _v13.LiveError("Cannot add invalid graphic ID to a scene.");
    let _v7 = (0, _v16.findGraphicsByType)(_v2, _v6).sort((_v0, _v1) => (_v0.position.index ?? -1) - (_v1.position.index ?? -1))[0],
      _v8 = {
        type: _v2,
        data: (0, _v27.createGraphicsDescriptorData)(_v2, {
          sourceId: _v3,
          createdAt: _v7?.data.createdAt ?? (0, _v15.getAbsoluteNow)()
        }),
        position: _v5.graphicsConfig.GRAPHICS_POSITIONING.DEFAULT_POSITION_FOR_TYPE(_v2)
      },
      _v9 = (0, _v27.findConflictingGraphicsWithType)(_v2, _v6);
    _v0.log.info("Conflicting items for removal:", _v9.map(_v0 => _v0.type));
    let _v10 = [[(0, _v14.getRefChild)(_v0.firebase, _v0.scenesListRef, `${_v1}/graphics/${_v3}`), _v8]];
    _v9.forEach(_v0 => {
      _v0.type === _v11.EGraphicsDescriptorType.AGORA_MEDIA && _v10.push(..._v28(_v0, _v1, {
        startedAt: null,
        status: _v11.EMediaStatus.PAUSE,
        offset: null
      })), _v10.push([(0, _v14.getRefChild)(_v0.firebase, _v0.scenesListRef, `${_v1}/graphics/${_v0.data?.sourceId}`), null]);
    }), await (0, _v14.batchedDatabaseUpdate)(_v0.firebase, _v0.rootRef, _v10), _v45(_v0, _v1, _v2, _v4), _v9.forEach(_v0 => (0, _v22.trackRemoveGraphicFromScene)(_v0.type));
  }
  async function _v37(_v0, _v1, _v2) {
    _v0.log.info("Removing GFX from scene:", _v1, _v2), _v0.assertIsInitialized(), _v0.assertCanEdit();
    let _v3 = _v0.context.scenes[_v1],
      _v4 = (_v3?.graphics || {})[_v2],
      _v5 = _v4?.type === _v11.EGraphicsDescriptorType.AGORA_STREAM;
    if (!_v4) return _v0.log.warn("Cannot remove GFX that does not exist in scene");
    (0, _v22.trackRemoveGraphicFromScene)(_v4.type), _v5 ? await (0, _v14.batchedDatabaseUpdate)(_v0.firebase, _v0.rootRef, _v46(_v0, _v1, _v2)) : await (0, _v14.removeRefValue)(_v0.firebase, (0, _v14.getRefChild)(_v0.firebase, _v0.scenesListRef, `${_v1}/graphics/${_v2}`));
  }
  async function _v38(_v0, _v1, _v2, _v3) {
    _v0.log.info("Toggling gfx visibility:", _v1, _v2, _v3), _v0.assertIsInitialized(), _v0.assertCanEdit();
    let {
        scenes: _v4
      } = _v0.context,
      _v5 = _v4[_v1];
    if (!(_v5?.graphics ? _v5.graphics[_v2] : null)) throw new _v13.LiveError("Cannot toggle visibility, object does not exist.");
    let _v6 = (0, _v14.getRefChild)(_v0.firebase, _v0.scenesListRef, `${_v1}/graphics/${_v2}`);
    await (0, _v14.batchedDatabaseUpdate)(_v0.firebase, _v0.rootRef, [[(0, _v14.getRefChild)(_v0.firebase, _v6, "position/visible"), _v3], [(0, _v14.getRefChild)(_v0.firebase, _v6, "data/visibleAt"), (0, _v15.getAbsoluteNow)()]]);
  }
  async function _v39(_v0, _v1, _v2) {
    _v0.log.info("Toggling screen PIP visibility:", _v1, _v2), _v0.assertIsInitialized(), _v0.assertCanEdit();
    let {
        scenes: _v3
      } = _v0.context,
      _v4 = _v3[_v1],
      _v5 = (0, _v14.getRefChild)(_v0.firebase, _v0.scenesListRef, `${_v1}/meta/disableSpeakerPip`);
    if (!_v4) throw new _v13.LiveError("Cannot toggle visibility, scene does not exist.");
    await (0, _v14.setRefValue)(_v0.firebase, _v5, !_v2 || null);
  }
  async function _v40(_v0, _v1, _v2) {
    _v0.log.info("Setting scene background color:", _v1, _v2), _v0.assertIsInitialized(), _v0.assertCanEdit();
    let {
      scenes: _v3
    } = _v0.context;
    if (!_v3[_v1]) throw new _v13.LiveError("Cannot change background, scene does not exist.");
    let _v4 = (0, _v14.getRefChild)(_v0.firebase, _v0.scenesListRef, `${_v1}/meta/background`);
    await (0, _v14.setRefValue)(_v0.firebase, _v4, _v2 || null);
  }
  async function _v41(_v0, _v1, _v2) {
    let {
      scenes: _v3
    } = _v0.context;
    _v0.log.info("Removing GFX from scenes:", _v1), _v0.assertIsInitialized(), _v0.assertCanEdit();
    let _v4 = Object.values(_v3).filter(_v0 => (0, _v16.findGraphicBySourceId)(_v1, _v0)).map(_v0 => _v0.id),
      _v5 = _v2 ? _v4.reduce((_v0, _v1) => _v46(_v0, _v1, _v1).concat(_v0), []) : _v4.map(_v0 => [(0, _v14.getRefChild)(_v0.firebase, _v0.scenesListRef, `${_v0}/graphics/${_v1}`), null]);
    await (0, _v14.batchedDatabaseUpdate)(_v0.firebase, _v0.rootRef, _v5);
  }
  async function _v42(_v0, _v1) {
    _v0.log.info("Flip gfx slide index by:", _v1), _v0.assertIsInitialized();
    let {
        activeScene: _v2,
        scenes: _v3,
        sceneInProgram: _v4
      } = _v0.context,
      _v5 = _v0.canEditGraphic ? _v2 : _v3[_v4 || ""],
      _v6 = (0, _v16.findFirstOfTypeGraphics)(_v11.EGraphicsDescriptorType.SLIDES, _v5),
      _v7 = _v6?.data.sourceId,
      _v8 = _v7 ? _v0.queryDataSync({
        type: _v6.ELiveGraphicsQuery.GRAPHICS_ITEM,
        data: {
          type: _v11.EGraphicsDescriptorType.SLIDES,
          id: _v7
        }
      }) : null;
    if ((_v0.canEditGraphic || _v0.isCurrentlyInScene(_v5)) && _v5 && _v6 && _v8?.data) {
      let _v0 = _v8.data,
        _v1 = _v6.data.slideIndex || 0,
        _v2 = (0, _v24.normalizeToRange)(_v1 + _v1, 0, _v0.slides.length - 1);
      _v2 !== _v1 && ((await (0, _v14.runRefTransaction)(_v0.firebase, (0, _v14.getRefChild)(_v0.firebase, _v0.scenesListRef, `${_v5.id}/graphics/${_v7}/data/slideIndex`), _v0 => "number" == typeof _v0 ? _v2 : _v0)).committed ? _v0.log.info("Flip slide index transaction OK:", _v2, _v5.id) : _v0.log.warn("Flip slide index transaction FAIL:", _v2, _v5.id));
    }
  }
  async function _v43(_v0, _v1, _v2, _v3) {
    _v0.log.info("Setting gfx slide index to:", _v3), _v0.assertIsInitialized();
    let _v4 = _v0.context.scenes[_v1],
      _v5 = _v2?.id,
      _v6 = _v2?.slides?.length || 0;
    if (_v4 && _v1) {
      if ((0, _v27.isGraphicAlreadyInScene)(_v5, _v4)) {
        if (_v3 < 0 || _v3 >= _v6) throw new _v13.LiveError("Cannot set slide index less than 0 ot greater than slides number.", {
          data: {
            index: _v3,
            slidesCount: _v6
          }
        });else if (!_v0.canEditGraphic && !_v0.isCurrentlyInScene(_v4)) throw new _v13.LiveError("Cannot set slide index when have no edit capability or not on scene.");
      } else throw new _v13.LiveError("Cannot set slide index for slides not in the scene.", {
        data: {
          slidesId: _v5,
          sceneId: _v1
        }
      });
    } else throw new _v13.LiveError("Cannot set slide index for an undefined scene.");
    (await (0, _v14.runRefTransaction)(_v0.firebase, (0, _v14.getRefChild)(_v0.firebase, _v0.scenesListRef, `${_v4.id}/graphics/${_v5}/data/slideIndex`), _v0 => "number" == typeof _v0 ? _v3 : _v0)).committed ? _v0.log.info("Set slide index transaction OK:", _v3, _v4.id) : _v0.log.warn("Set slide index transaction FAIL:", _v3, _v4.id);
  }
  async function _v44(_v0, _v1, _v2) {
    if (_v0.assertIsInitialized(), _v0.assertCanEdit(), !_v0.context.scenes[_v1]) throw new _v13.LiveError("Cannot toggle lowerthirds for an undefined scene.");
    await (0, _v14.updateRefValue)(_v0.firebase, (0, _v14.getRefChild)(_v0.firebase, _v0.scenesListRef, `${_v1}/meta`), {
      guestLabelsVisible: _v2,
      guestLabelsVisibleAt: (0, _v15.getAbsoluteNow)()
    });
  }
  function _v45(_v0, _v1, _v2, _v3) {
    let {
        scenes: _v4
      } = _v0.context,
      _v5 = _v4[_v1];
    switch ((0, _v22.trackAddGraphicToScene)({
      graphicType: _v2,
      options: _v3,
      scene: _v5
    }), _v0.emitSignal({
      type: _v7.ELiveGraphicsSignal.GRAPHIC_ADDED_TO_SCENE,
      data: {
        type: _v2,
        scene: _v5
      }
    }), _v2) {
      case _v11.EGraphicsDescriptorType.AGORA_MEDIA:
        _v1 !== _v0.context.sceneInProgram && _v0.emitSignal({
          type: _v7.ELiveGraphicsSignal.SHOW_VIDEO_PLAY_CONTROLS_DISABLED_NOTICE
        });
        break;
      case _v11.EGraphicsDescriptorType.IMAGE:
        let _v0 = _v0.context.scenes[_v1],
          _v1 = Object.values(_v0?.graphics || {}).reduce((_v0, _v1) => _v0 + +(_v1.type === _v11.EGraphicsDescriptorType.AGORA_STREAM), 0);
        (_v0?.meta?.layoutType ? _v3?.isDragged : 1 !== _v1) || _v0.emitSignal({
          type: _v7.ELiveGraphicsSignal.IMAGE_ADDED_BEHIND_GUEST
        });
    }
  }
  function _v46(_v0, _v1, _v2) {
    _v0.assertIsInitialized();
    let _v3 = _v0.context.scenes[_v1],
      _v4 = _v3.graphics || {};
    if (_v4[_v2]) {
      if (_v3.meta?.layoutType) return [[(0, _v14.getRefChild)(_v0.firebase, _v0.scenesListRef, `/${_v1}/graphics/${_v2}`), null]];
      {
        let _v0 = (0, _v14.getRefChild)(_v0.firebase, _v0.scenesListRef, `/${_v1}/graphics`),
          _v1 = (0, _v23.omit)(_v4, _v2),
          _v2 = Object.entries((0, _v25.getGuestPresetPositions)(_v1)).map(([_v0, _v1]) => [(0, _v14.getRefChild)(_v0.firebase, _v0, `${_v0}/position`), _v1]),
          _v3 = [[(0, _v14.getRefChild)(_v0.firebase, _v0, _v2), null]];
        return _v2.concat(_v3);
      }
    }
    return [];
  }
  async function _v47(_v0, {
    sceneId: _v1,
    layoutId: _v2
  }) {
    _v0.log.info("Setting active layout", _v1, _v2), _v0.assertIsInitialized(), _v0.assertCanEdit();
    let _v3 = _v0.context.scenes[_v1],
      _v4 = (0, _v14.getRefChild)(_v0.firebase, _v0.scenesListRef, `${_v1}/meta/layoutType`),
      _v5 = _v2 ? _v26.layoutsConfig.LAYOUTS[_v2] : _v26.layoutsConfig.DEFAULT_LAYOUT;
    if (!_v3) throw new _v13.LiveError("No scene with provided ID found.");
    if (_v5) {
      let _v0 = [[_v4, _v5.id]],
        _v1 = function (_v0, {
          scene: _v1,
          layout: _v2
        }) {
          if (_v0.assertIsInitialized(), !_v1.graphics) return [];
          let _v3 = _v1.meta?.layoutType,
            _v4 = (0, _v14.getRefChild)(_v0.firebase, _v0.scenesListRef, `${_v1.id}/graphics`);
          if (null === _v2.id) {
            let _v0 = [];
            return (0, _v16.findIndexPositionedGraphics)(_v1).forEach(_v0 => {
              if (Number.isInteger(_v0.position.index)) switch (_v0.type) {
                case _v11.EGraphicsDescriptorType.IMAGE:
                  _v0.push([(0, _v14.getRefChild)(_v0.firebase, _v4, String(_v0.data.sourceId)), null]);
                  break;
                case _v11.EGraphicsDescriptorType.SLIDES:
                case _v11.EGraphicsDescriptorType.AGORA_MEDIA:
                  _v0.push([(0, _v14.getRefChild)(_v0.firebase, _v4, `${_v0.data.sourceId}/position`), _v5.graphicsConfig.GRAPHICS_POSITIONING.DEFAULT_POSITION_FOR_TYPE(_v0.type)]);
              }
            }), _v0.concat(Object.entries((0, _v25.getGuestPresetPositions)(_v1.graphics)).map(([_v0, _v1]) => [(0, _v14.getRefChild)(_v0.firebase, _v4, `${_v0}/position`), _v1]));
          }
          {
            let _v0 = Object.values(_v2.sources).length;
            return _v3 ? (0, _v16.findIndexPositionedGraphics)(_v1).filter(_v0 => Number.isInteger(_v0.position.index)).map(_v0 => !Number.isInteger(_v0.position.index) || _v0.position.index >= _v0 ? [(0, _v14.getRefChild)(_v0.firebase, _v4, `${_v0.data.sourceId}`), null] : [(0, _v14.getRefChild)(_v0.firebase, _v4, `${_v0.data.sourceId}/position`), {
              ..._v0.position,
              ...(0, _v25.getLayoutPositionFromDescriptor)(_v2, _v0.position.index)
            }]) : (0, _v16.findIndexPositionedGraphics)(_v1).filter(_v0 => _v0.type !== _v11.EGraphicsDescriptorType.IMAGE).map((_v0, _v1) => _v1 < _v0 ? [(0, _v14.getRefChild)(_v0.firebase, _v4, `${_v0.data.sourceId}/position`), {
              ..._v0.position,
              ...(0, _v25.getLayoutPositionFromDescriptor)(_v2, _v1)
            }] : [(0, _v14.getRefChild)(_v0.firebase, _v4, `${_v0.data.sourceId}`), null]);
          }
        }(_v0, {
          scene: _v3,
          layout: _v5
        });
      await (0, _v14.batchedDatabaseUpdate)(_v0.firebase, _v0.rootRef, _v0.concat(_v1));
    } else _v0.log.warn("Tried to set unknown layout:", _v2);
  }
  async function _v48(_v0, {
    sceneId: _v1,
    graphicType: _v2,
    graphicId: _v3,
    graphicIndex: _v4,
    swap: _v5
  }) {
    _v0.log.info("Setting item layout index", _v1, _v2, _v3, _v4), _v0.assertIsInitialized(), _v0.assertCanEdit();
    let _v6 = _v0.context.scenes[_v1],
      _v7 = (0, _v16.findGraphicBySourceId)(_v3, _v6),
      _v8 = _v6?.meta?.layoutType,
      _v9 = _v8 ? _v26.layoutsConfig.LAYOUTS[_v8] : null;
    if (_v7) {
      if (_v9) {
        if (Number.isInteger(_v4) && (_v4 < 0 || _v4 >= Object.keys(_v9.sources).length)) throw new _v13.LiveError("Cannot use index out of bounds.");else if (_v4 === _v7.position.index) return _v0.log.info("Already in same position");
      } else throw new _v13.LiveError("Unknown layout, cannot swap indexes.");
    } else throw new _v13.LiveError("Cannot change index for graphic without it.");
    let _v10 = (0, _v14.getRefChild)(_v0.firebase, _v0.scenesListRef, `${_v1}/graphics`),
      _v11 = [],
      _v12 = (0, _v16.findIndexPositionedGraphics)(_v6).find(_v0 => _v0.position.index === _v4);
    if (_v12) {
      let _v0 = !Number.isInteger(_v7.position.index),
        _v1 = _v12.type !== _v11.EGraphicsDescriptorType.AGORA_STREAM,
        _v2 = !!(_v5 && (!_v0 || _v1));
      if (_v0.log.info("Handling existing GFX with index:", _v7.position.index, _v2), _v2) {
        let _v0 = _v0 ? _v5.graphicsConfig.GRAPHICS_POSITIONING.DEFAULT_POSITION_FOR_TYPE(_v7.type) : (0, _v25.getLayoutPositionFromDescriptor)(_v9, _v7.position.index);
        _v11.push([(0, _v14.getRefChild)(_v0.firebase, _v10, `${_v12.data.sourceId}/position`), {
          ..._v12.position,
          ..._v0
        }]);
      } else _v11.push([(0, _v14.getRefChild)(_v0.firebase, _v10, String(_v12.data.sourceId)), null]);
    }
    let _v13 = Number.isInteger(_v4) ? (0, _v25.getLayoutPositionFromDescriptor)(_v9, _v4) : _v5.graphicsConfig.GRAPHICS_POSITIONING.DEFAULT_POSITION_FOR_TYPE(_v2);
    _v11.push([(0, _v14.getRefChild)(_v0.firebase, _v10, `${_v3}/position`), {
      ..._v7.position,
      ..._v13
    }]), await (0, _v14.batchedDatabaseUpdate)(_v0.firebase, _v0.rootRef, _v11);
  }
  async function _v49(_v0, _v1) {
    let _v2 = await _v0.createScene(_v1);
    return await _v0.setActiveScene(_v2), _v2;
  }
  async function _v50(_v0, {
    name: _v1,
    graphics: _v2,
    meta: _v3
  } = {}) {
    _v0.log.info("Creating new scene"), _v0.assertIsInitialized(), _v0.assertCanEdit();
    let {
      scenes: _v4,
      scenesOrder: _v5
    } = _v0.context;
    if (Object.keys(_v4).length >= _v5.graphicsConfig.SCENE.MAX_SCENES_COUNT) throw new _v13.LiveError(`Cannot create more than ${_v5.graphicsConfig.SCENE.MAX_SCENES_COUNT} scenes.`);
    _v1 || (_v1 = `${_v33.translations.scene} ${_v0.sceneIncrement++}`);
    let _v6 = await (0, _v14.pushRefValue)(_v0.firebase, _v0.scenesListRef),
      _v7 = (0, _v16.createScene)({
        id: _v6.key,
        name: _v1,
        graphics: _v2,
        meta: _v3
      }),
      _v8 = (0, _v16.getScenesNewOrder)(_v4, _v5, [_v7]);
    return await (0, _v14.batchedDatabaseUpdate)(_v0.firebase, _v0.rootRef, [[_v6, _v7], [_v0.scenesOrderListRef, _v8], _v70(_v0, _v0.sceneIncrement)]), _v7;
  }
  async function _v51(_v0, _v1, _v2) {
    _v0.log.info("Creating new scenes"), _v0.assertIsInitialized(), _v0.assertCanEdit();
    let _v3 = _v1.length,
      {
        scenes: _v4,
        scenesOrder: _v5
      } = _v0.context;
    if (Object.keys(_v4).length + _v3 > _v5.graphicsConfig.SCENE.MAX_SCENES_COUNT) throw new _v13.LiveError(`Cannot create more than ${_v5.graphicsConfig.SCENE.MAX_SCENES_COUNT} scenes.`);
    let _v6 = await Promise.all(_v1.map(async ({
        name: _v0,
        graphics: _v1,
        meta: _v2
      }) => {
        let _v3 = await (0, _v14.pushRefValue)(_v0.firebase, _v0.scenesListRef);
        _v0 || (_v0 = `${_v33.translations.scene} ${_v0.sceneIncrement++}`);
        let _v4 = (0, _v16.createScene)({
          id: _v3.key,
          name: _v0,
          graphics: _v1,
          meta: _v2
        });
        return [_v3, _v4];
      })),
      _v7 = _v6.map(_v0 => _v0[1]),
      _v8 = (0, _v16.getScenesNewOrder)(_v4, _v5, _v7, _v2);
    return await (0, _v14.batchedDatabaseUpdate)(_v0.firebase, _v0.rootRef, [..._v6, [_v0.scenesOrderListRef, _v8], _v70(_v0, _v0.sceneIncrement)]), _v7;
  }
  async function _v52(_v0, _v1, {
    isCloudProvisionRequired: _v2 = !0,
    isMediaUpdateRequired: _v3 = !0
  } = {}) {
    _v0.log.info("Pushing scene to program:", _v1), _v0.assertIsInitialized(), _v0.setContext({
      isEditMode: !1
    });
    try {
      let _v0 = _v0.context.sceneInProgram;
      await (0, _v14.batchedDatabaseUpdate)(_v0.firebase, _v0.rootRef, _v53(_v0, _v1, {
        isMediaUpdateRequired: _v3
      })), _v2 && null !== _v1 && _v0.emitSignal({
        type: _v7.ELiveGraphicsSignal.SCENE_PUSHED,
        data: _v1
      }), _v0 && (await (0, _v14.batchedDatabaseUpdate)(_v0.firebase, _v0.rootRef, function (_v0, _v1) {
        _v0.assertIsInitialized(), _v0.assertCanEdit();
        let {
          scenes: _v2
        } = _v0.context;
        if (_v1 && _v2[_v1]) {
          let _v0 = (0, _v14.getRefChild)(_v0.firebase, _v0.scenesListRef, String(_v1));
          return [[(0, _v14.getRefChild)(_v0.firebase, _v0, "meta/media/offset"), null], [(0, _v14.getRefChild)(_v0.firebase, _v0, "meta/media/startedAt"), null], [(0, _v14.getRefChild)(_v0.firebase, _v0, "meta/media/status"), _v11.EMediaStatus.PAUSE]];
        }
        throw new _v13.LiveError("Cannot clear media playing metadata, scene does not exist.");
      }(_v0, _v0)));
    } catch (_v0) {
      throw _v0.log.error("Failed to push scene to program:", _v0), (0, _v19.trackLiveError)(_v0, {
        category: _v18.ELiveErrorCategory.GRAPHICS,
        method: "pushSceneToProgram"
      }), _v0;
    }
  }
  function _v53(_v0, _v1, {
    isMediaUpdateRequired: _v2 = !0
  } = {}) {
    _v0.assertIsInitialized(), _v0.assertCanEdit();
    let {
      scenes: _v3
    } = _v0.context;
    if (null === _v1) return [[_v0.programSceneRef, null]];
    if (_v3[_v1]) {
      let _v0 = (0, _v27.isGraphicTypeAlreadyInScene)(_v11.EGraphicsDescriptorType.AGORA_MEDIA, _v3[_v1]),
        _v1 = _v0.queryDataSync({
          type: _v6.ELiveQuery.LIVE_COMPOSER_STATUSES
        })?.data,
        _v2 = _v0 && !!_v1?.isSessionActive,
        _v3 = (0, _v14.getRefChild)(_v0.firebase, _v0.scenesListRef, String(_v1)),
        _v4 = [[_v0.programSceneRef, _v1], [(0, _v14.getRefChild)(_v0.firebase, _v3, "pushedAt"), (0, _v15.getAbsoluteNow)()]];
      return _v2 && _v4.push([(0, _v14.getRefChild)(_v0.firebase, _v3, "meta/media/offset"), null], [(0, _v14.getRefChild)(_v0.firebase, _v3, "meta/media/startedAt"), null], [(0, _v14.getRefChild)(_v0.firebase, _v3, "meta/media/status"), _v2 ? _v11.EMediaStatus.PLAY : _v11.EMediaStatus.PAUSE]), _v4;
    }
    throw new _v13.LiveError("Cannot push scene, it does not exist.");
  }
  async function _v54(_v0, _v1, _v2) {
    _v0.log.info("Deleting scene:", _v1), _v0.assertIsInitialized(), _v0.assertCanEdit(), await (0, _v14.batchedDatabaseUpdate)(_v0.firebase, _v0.rootRef, _v55(_v0, _v1, _v2));
  }
  function _v55(_v0, _v1, _v2) {
    _v0.assertIsInitialized(), _v0.assertCanEdit();
    let {
        sceneInProgram: _v3
      } = _v0.context,
      _v4 = [[(0, _v14.getRefChild)(_v0.firebase, _v0.scenesListRef, String(_v1)), null]];
    return void 0 !== _v2 ? _v4.push(..._v53(_v0, _v2)) : _v1 === _v3 && _v4.push([_v0.programSceneRef, null]), _v4;
  }
  async function _v56(_v0, _v1) {
    _v0.log.info("Deleting scenes:", _v1), _v0.assertIsInitialized(), _v0.assertCanEdit(), await (0, _v14.batchedDatabaseUpdate)(_v0.firebase, _v0.rootRef, function (_v0, _v1) {
      _v0.assertIsInitialized(), _v0.assertCanEdit();
      let {
          sceneInProgram: _v2
        } = _v0.context,
        _v3 = [];
      return _v1.forEach(_v0 => {
        _v3.push([(0, _v14.getRefChild)(_v0.firebase, _v0.scenesListRef, String(_v0)), null]), _v0 === _v2 && _v3.push([_v0.programSceneRef, null]);
      }), _v3;
    }(_v0, _v1));
  }
  async function _v57(_v0) {
    _v0.log.info("Deleting all scenes"), _v0.assertIsInitialized(), _v0.assertCanEdit(), await (0, _v14.batchedDatabaseUpdate)(_v0.firebase, _v0.rootRef, [[_v0.scenesOrderListRef, null], [_v0.scenesListRef, null]]), _v0.setContext({
      sceneInProgram: null,
      activeScene: null
    });
  }
  async function _v58(_v0, _v1, _v2) {
    _v0.log.info("Inserting new scene after sceneId:", _v1, _v2), _v0.assertIsInitialized(), _v0.assertCanEdit();
    let {
      scenesOrder: _v3,
      scenes: _v4
    } = _v0.context;
    if (Object.keys(_v4).length >= _v5.graphicsConfig.SCENE.MAX_SCENES_COUNT) throw new _v13.LiveError(`Cannot create more than ${_v5.graphicsConfig.SCENE.MAX_SCENES_COUNT} scenes.`);
    let _v5 = await (0, _v14.pushRefValue)(_v0.firebase, _v0.scenesListRef),
      _v6 = _v5.key,
      _v7 = _v2 ? (0, _v16.copyScene)(_v2, {
        id: _v6
      }) : (0, _v16.createScene)({
        id: _v6
      }),
      _v8 = (0, _v16.normalizeSceneOrder)(_v4, _v3),
      _v9 = (0, _v16.moveSceneToNewPosition)(Object.keys(_v8), _v7.id, _v1);
    return await (0, _v14.batchedDatabaseUpdate)(_v0.firebase, _v0.rootRef, [[_v5, _v7], _v9 ? [_v0.scenesOrderListRef, _v9] : null]), _v7;
  }
  async function _v59(_v0, _v1, _v2) {
    _v0.log.info("Inserting new scenes after index:", _v1, _v2), _v0.assertIsInitialized();
    let {
      prescribers: _v3,
      scenes: _v4
    } = await _v60(_v0, _v1, _v2);
    return await (0, _v14.batchedDatabaseUpdate)(_v0.firebase, _v0.rootRef, _v3), _v4;
  }
  async function _v60(_v0, _v1, _v2) {
    if (_v0.assertIsInitialized(), _v0.assertCanEdit(), 0 === _v1.length) return {
      prescribers: [],
      scenes: []
    };
    let {
      scenes: _v3,
      scenesOrder: _v4
    } = _v0.context;
    if (Object.keys(_v3).length + _v1.length > _v5.graphicsConfig.SCENE.MAX_SCENES_COUNT) throw new _v13.LiveError(`Cannot create more than ${_v5.graphicsConfig.SCENE.MAX_SCENES_COUNT} scenes.`);
    let _v5 = await Promise.all(_v1.map(async _v0 => {
        let _v1 = await (0, _v14.pushRefValue)(_v0.firebase, _v0.scenesListRef);
        return _v0.name || (_v0.name = `${_v33.translations.scene} ${_v0.sceneIncrement++}`), [_v1, (0, _v16.createScene)({
          ..._v0,
          id: _v1.key
        })];
      })),
      _v6 = (0, _v16.getCurrentScenesOrder)(_v3, _v4),
      _v7 = _v5.map(_v0 => _v0[1]),
      _v8 = (0, _v24.normalizeToRange)(_v2, 0, _v6.length);
    return _v6.splice(_v8, 0, ..._v7.map(_v0 => _v0.id)), {
      prescribers: [..._v5, [_v0.scenesOrderListRef, _v6], _v70(_v0, _v0.sceneIncrement)],
      scenes: _v7
    };
  }
  async function _v61(_v0, _v1, _v2) {
    _v0.log.info("Moving scene to index:", _v1, _v2);
    let _v3 = _v62(_v0, _v1, _v2);
    _v3 ? await (0, _v14.setRefPrescriberValue)(_v0.firebase, _v3) : _v0.log.info("Skip moving to already same index:", _v1, _v2);
  }
  function _v62(_v0, _v1, _v2) {
    _v0.assertIsInitialized(), _v0.assertCanEdit();
    let {
        scenes: _v3,
        scenesOrder: _v4
      } = _v0.context,
      _v5 = (0, _v16.getCurrentScenesOrder)(_v3, _v4),
      _v6 = _v5.length;
    if (_v5[_v2] === _v1 || _v2 < 0 && _v5[0] === _v1 || _v2 >= _v6 && _v5[_v6 - 1] === _v1) return null;
    let _v7 = (0, _v24.normalizeToRange)(_v2, 0, _v4.length);
    return _v5.splice(_v7, 0, _v1), [_v0.scenesOrderListRef, _v5.filter((_v0, _v1) => _v0 !== _v1 || _v1 === _v7)];
  }
  async function _v63(_v0, _v1, _v2 = _v5.graphicsConfig.GRAPHICS_POSITIONING.SCREEN_SPEAKER_POSITION) {
    _v0.assertIsInitialized(), _v0.assertCanEdit();
    let {
      scenes: _v3
    } = _v0.context;
    if (!_v3[_v1]) throw new _v13.LiveError("Tried to modify non-existing scene.");
    await (0, _v14.updateRefValue)(_v0.firebase, (0, _v14.getRefChild)(_v0.firebase, _v0.scenesListRef, `${_v1}/meta/speakerPosition`), _v2);
  }
  async function _v64(_v0, _v1, _v2) {
    _v0.log.info("Updating scene name:", _v1), _v0.assertIsInitialized(), _v0.assertCanEdit();
    let {
      scenes: _v3
    } = _v0.context;
    if (!_v3[_v1]) throw new _v13.LiveError(`There is no scene with id: ${_v1}.`);
    if (!_v2 || _v2.length > _v5.graphicsConfig.SCENE.MAX_NAME_LENGTH) throw new _v13.LiveError("Cannot set name, length is not valid.");
    await (0, _v14.setRefValue)(_v0.firebase, (0, _v14.getRefChild)(_v0.firebase, _v0.scenesListRef, `${_v1}/name`), _v2);
  }
  async function _v65(_v0, _v1) {
    _v0.log.info("Updating scene ordering", _v1), await (0, _v14.setRefPrescriberValue)(_v0.firebase, _v66(_v0, _v1));
  }
  function _v66(_v0, _v1) {
    return _v0.assertIsInitialized(), _v0.assertCanEdit(), [_v0.scenesOrderListRef, _v1];
  }
  async function _v67(_v0, _v1) {
    let {
        scenes: _v2,
        scenesOrder: _v3
      } = _v0.context,
      _v4 = Object.values(_v2);
    if (!_v4.length) return _v0.setContext({
      activeScene: null
    }), null;
    let _v5 = null;
    return _v5 = _v1 && _v2[_v1] ? _v2[_v1] : _v4.find(_v0 => _v0.id === _v3[0]) ?? _v4[0], _v0.setContext({
      activeScene: _v5 || null
    }), _v0.context.activeScene;
  }
  async function _v68(_v0, _v1, _v2) {
    _v0.log.info("Switching scene scheduled status:", _v1, _v2), await (0, _v14.setRefPrescriberValue)(_v0.firebase, _v69(_v0, _v1, _v2));
  }
  function _v69(_v0, _v1, _v2) {
    _v0.assertIsInitialized(), _v0.assertCanEdit();
    let _v3 = _v0.context.scenes[_v1];
    if (!_v3) throw new _v13.LiveError("Cannot set agora media data for an undefined scene.");
    return !!_v3.meta?.isScheduled != !!_v2 ? [(0, _v14.getRefChild)(_v0.firebase, _v0.scenesListRef, `${_v1}/meta/isScheduled`), !!_v2 || null] : null;
  }
  function _v70(_v0, _v1) {
    return _v0.assertIsInitialized(), _v0.assertCanEdit(), [_v0.sceneIncrementRef, _v1];
  }
  function _v71(_v0) {
    let _v1 = _v0.val();
    return {
      ..._v1,
      id: _v1.id || _v0.key,
      graphics: _v1.graphics || {},
      meta: _v1.meta || {}
    };
  }
  async function _v72(_v0, _v1) {
    try {
      _v0.log.info("Hydrating scenes list");
      let {
          scenes: _v0
        } = _v0.context,
        _v1 = await (0, _v14.getRefValue)(_v0.firebase, _v1);
      if (!_v1) return _v0.log.info("No scenes to hydrate");
      Object.entries(_v1).forEach(([_v0, _v1]) => {
        _v1.id || (0, _v19.trackLiveError)("Detected corrupted entity without id when hydrating scenes list.", {
          category: _v18.ELiveErrorCategory.GRAPHICS,
          method: "hydrateScenesList",
          data: {
            key: _v0,
            scene: _v1
          }
        }), _v1.id = _v1.id || _v0, _v1.graphics = _v1.graphics || {}, _v1.meta = _v1.meta || {};
      }), _v0.log.info("Hydrated scenes list"), _v0.setContext({
        scenes: {
          ..._v0,
          ..._v1
        }
      });
    } catch (_v0) {
      throw _v0.log.error("Failed to hydrate scene list:", _v0), (0, _v19.trackLiveError)(_v0, {
        category: _v18.ELiveErrorCategory.GRAPHICS,
        method: "hydrateScenesList"
      }), _v0;
    }
  }
  async function _v73(_v0, _v1) {
    try {
      _v0.log.info("Hydrating scenes list"), _v0.sceneIncrement = (await (0, _v14.getRefValue)(_v0.firebase, _v1)) || 1;
    } catch (_v0) {
      throw _v0.log.error("Failed to hydrate scene increment:", _v0), (0, _v19.trackLiveError)(_v0, {
        category: _v18.ELiveErrorCategory.GRAPHICS,
        method: "hydrateScenesList"
      }), _v0;
    }
  }
  async function _v74(_v0, _v1) {
    try {
      _v0.log.info("Hydrating active scene");
      let _v0 = await (0, _v14.getRefValue)(_v0.firebase, _v1);
      if (_v0) {
        _v0.setContext({
          sceneInProgram: _v0
        });
        let _v0 = _v0.context.scenes[_v0];
        _v0 && _v0.emitSignal({
          type: _v7.ELiveGraphicsSignal.SCENE_IN_PROGRAM_CHANGED,
          data: _v0
        });
      }
      await _v0.selectDefaultScene(_v0), _v0.log.info("Hydrated active broadcast scene:", _v0);
    } catch (_v0) {
      throw _v0.log.error("Failed to hydrate active scene:", _v0), await _v0.selectDefaultScene(), (0, _v19.trackLiveError)(_v0, {
        category: _v18.ELiveErrorCategory.GRAPHICS,
        method: "hydrateSceneInProgram"
      }), _v0;
    }
  }
  async function _v75(_v0, _v1) {
    try {
      _v0.log.info("Hydrating scene order array");
      let _v0 = await (0, _v14.getRefValue)(_v0.firebase, _v1);
      _v0.setContext({
        scenesOrder: _v0 ?? []
      }), _v0.log.info("Hydrated scene order array:", _v0 ?? []);
    } catch (_v0) {
      throw _v0.log.error("Failed to hydrate scene order:", _v0), (0, _v19.trackLiveError)(_v0, {
        category: _v18.ELiveErrorCategory.GRAPHICS,
        method: "hydrateScenesOrder"
      }), _v0;
    }
  }
  _v0.i(0);
  class _v76 extends _v17.UnsubscribingContextManager {
    context = {
      sceneActions: (0, _v3.createActions)({
        runTransaction: _v0 => this.runTransaction(_v0),
        createDefaultScene: _v0 => this.createDefaultScene(_v0),
        createScene: _v0 => this.createScene(_v0),
        createScenes: (_v0, _v1) => this.createScenes(_v0, _v1),
        createScenesOnIndex: (_v0, _v1) => this.createScenesOnIndex(_v0, _v1),
        pushSceneToProgram: (_v0, _v1) => this.pushSceneToProgram(_v0, _v1),
        deleteScene: (_v0, _v1) => this.deleteScene(_v0, _v1),
        deleteScenes: _v0 => this.deleteScenes(_v0),
        setIsSceneScheduled: (_v0, _v1) => this.setIsSceneScheduled(_v0, _v1),
        insertNewSceneAfter: (_v0, _v1) => this.insertNewSceneAfter(_v0, _v1),
        moveSceneToIndex: (_v0, _v1) => this.moveSceneToIndex(_v0, _v1),
        setActiveScene: _v0 => this.setActiveScene(_v0),
        setSceneName: (_v0, _v1) => this.setSceneName(_v0, _v1),
        setScenesOrder: _v0 => this.setScenesOrder(_v0),
        setIsEditMode: () => this.setContext({
          isEditMode: !0
        }),
        addGraphicToScene: _v0 => this.addGraphicToScene(_v0),
        replaceGraphicInScene: (_v0, _v1, _v2, _v3) => this.replaceGraphicInScene(_v0, _v1, _v2, _v3),
        removeGraphicFromScene: (_v0, _v1) => this.removeGraphicFromScene(_v0, _v1),
        removeGraphicFromAllScenes: _v0 => this.removeGraphicFromAllScenes(_v0),
        setGraphicVisibility: (_v0, _v1, _v2) => this.setGraphicVisibility(_v0, _v1, _v2),
        setSceneSpeakerPipEnabled: (_v0, _v1) => this.setSceneScreensharePipEnabled(_v0, _v1),
        updateSceneSpeakerPositions: (_v0, _v1) => this.updateSceneSpeakerPositions(_v0, _v1),
        setSceneBackground: (_v0, _v1) => this.setSceneBackground(_v0, _v1),
        setGuestLowerThirdsVisibility: (_v0, _v1) => this.setGuestLowerThirdsVisibility(_v0, _v1),
        purgeScenes: () => this.purgeScenes(),
        setSceneSlideIndex: (_v0, _v1, _v2) => this.setSceneSlideIndex(_v0, _v1, _v2),
        setAgoraMediaMetaData: (_v0, _v1) => this.setAgoraMediaMetaData(_v0, _v1),
        setSceneLayout: (_v0, _v1) => this.setSceneLayout(_v0, _v1),
        setGraphicLayoutIndex: ({
          sceneId: _v0,
          graphicId: _v1,
          graphicIndex: _v2,
          graphicType: _v3,
          swap: _v4
        }) => this.setGraphicLayoutIndex({
          sceneId: _v0,
          graphicId: _v1,
          graphicIndex: _v2,
          graphicType: _v3,
          swap: _v4
        })
      }),
      sceneMediaActions: (0, _v3.createActions)({
        playMedia: (_v0, _v1) => this.playMedia(_v0, _v1),
        pauseMedia: (_v0, _v1) => this.pauseMedia(_v0, _v1),
        restartMedia: _v0 => this.restartMedia(_v0)
      }),
      scenePrescribersGetters: (0, _v3.createActions)({
        getSetScenesOrderPrescriber: _v0 => _v66(this, _v0),
        getIsSceneScheduledTogglePrescriber: (_v0, _v1) => _v69(this, _v0, _v1),
        getAgoraMediaMetaDataPrescriber: (_v0, _v1) => _v28(this, _v0, _v1),
        getMoveSceneToIndexPrescriber: (_v0, _v1) => _v62(this, _v0, _v1),
        getDeleteScenePrescribers: (_v0, _v1) => _v55(this, _v0, _v1),
        getPushSceneToProgramPrescriber: _v0 => _v53(this, _v0),
        getCreateScenesOnIndexPrescriber: (_v0, _v1) => _v60(this, _v0, _v1)
      }),
      sceneGetters: {
        getSceneNameIncrement: () => this.sceneIncrement,
        getNextSceneNameIncrement: () => this.sceneIncrement++
      },
      isHydrated: !1,
      isEditMode: !1,
      hydratedAt: null,
      scenes: {},
      sceneInProgram: null,
      editingScene: null,
      activeScene: null,
      scenesOrder: []
    };
    log = new _v20.Logger("🚧SCN");
    canEditGraphic = !1;
    sceneIncrement = 1;
    firebase;
    sceneIncrementRef = null;
    scenesListRef = null;
    programSceneRef = null;
    scenesOrderListRef = null;
    rootRef = null;
    constructor(_v0) {
      super(), this.canEditGraphic = !!_v0?.graphic?.canEditGraphic;
    }
    async runTransaction(_v0) {
      return (0, _v19.withLiveErrorTracking)(() => (0, _v21.runBatchedSceneUpdate)(this, _v0), {
        method: "runTransaction",
        category: _v18.ELiveErrorCategory.GRAPHICS
      });
    }
    async createScene(_v0 = {}) {
      return (0, _v19.withLiveErrorTracking)(() => _v50(this, _v0), {
        method: "createScene",
        category: _v18.ELiveErrorCategory.GRAPHICS
      });
    }
    async createScenes(_v0, _v1) {
      return (0, _v19.withLiveErrorTracking)(() => _v51(this, _v0, _v1), {
        method: "createScenes",
        category: _v18.ELiveErrorCategory.GRAPHICS
      });
    }
    async createScenesOnIndex(_v0, _v1) {
      return (0, _v19.withLiveErrorTracking)(() => _v59(this, _v0, _v1), {
        method: "createScenesOnIndex",
        category: _v18.ELiveErrorCategory.GRAPHICS
      });
    }
    async createDefaultScene(_v0) {
      return (0, _v19.withLiveErrorTracking)(() => _v49(this, _v0), {
        method: "createDefaultScene",
        category: _v18.ELiveErrorCategory.GRAPHICS
      });
    }
    async setActiveScene(_v0) {
      _v0 !== this.context.activeScene && this.setContext({
        activeScene: _v0
      });
    }
    async setSceneName(_v0, _v1) {
      return (0, _v19.withLiveErrorTracking)(() => _v64(this, _v0, _v1), {
        method: "setSceneName",
        category: _v18.ELiveErrorCategory.GRAPHICS
      });
    }
    async setScenesOrder(_v0) {
      return (0, _v19.withLiveErrorTracking)(() => _v65(this, _v0), {
        method: "setScenesOrder",
        category: _v18.ELiveErrorCategory.GRAPHICS
      });
    }
    async pushSceneToProgram(_v0, _v1) {
      return (0, _v19.withLiveErrorTracking)(() => _v52(this, _v0, _v1), {
        method: "pushSceneToProgram",
        category: _v18.ELiveErrorCategory.GRAPHICS
      });
    }
    async deleteScene(_v0, _v1) {
      return (0, _v19.withLiveErrorTracking)(() => _v54(this, _v0, _v1), {
        method: "deleteScene",
        category: _v18.ELiveErrorCategory.GRAPHICS
      });
    }
    async deleteScenes(_v0) {
      return (0, _v19.withLiveErrorTracking)(() => _v56(this, _v0), {
        method: "deleteScenes",
        category: _v18.ELiveErrorCategory.GRAPHICS
      });
    }
    async purgeScenes() {
      return (0, _v19.withLiveErrorTracking)(() => _v57(this), {
        method: "purgeScenes",
        category: _v18.ELiveErrorCategory.GRAPHICS
      });
    }
    async insertNewSceneAfter(_v0, _v1) {
      return (0, _v19.withLiveErrorTracking)(() => _v58(this, _v0, _v1), {
        method: "insertNewSceneAfter",
        category: _v18.ELiveErrorCategory.GRAPHICS
      });
    }
    async moveSceneToIndex(_v0, _v1) {
      return (0, _v19.withLiveErrorTracking)(() => _v61(this, _v0, _v1), {
        method: "moveSceneToIndex",
        category: _v18.ELiveErrorCategory.GRAPHICS
      });
    }
    async updateSceneSpeakerPositions(_v0, _v1 = _v5.graphicsConfig.GRAPHICS_POSITIONING.SCREEN_SPEAKER_POSITION) {
      return (0, _v19.withLiveErrorTracking)(() => _v63(this, _v0, _v1), {
        method: "updateSceneSpeakerPositions",
        category: _v18.ELiveErrorCategory.GRAPHICS
      });
    }
    async setIsSceneScheduled(_v0, _v1) {
      return (0, _v19.withLiveErrorTracking)(() => _v68(this, _v0, _v1), {
        method: "setIsSceneScheduled",
        category: _v18.ELiveErrorCategory.GRAPHICS
      });
    }
    async selectDefaultScene(_v0) {
      return (0, _v19.withLiveErrorTracking)(() => _v67(this, _v0), {
        method: "selectDefaultScene",
        category: _v18.ELiveErrorCategory.GRAPHICS
      });
    }
    async setGuestLowerThirdsVisibility(_v0, _v1) {
      return (0, _v19.withLiveErrorTracking)(() => _v44(this, _v0, _v1), {
        method: "setGuestLowerThirdsVisibility",
        category: _v18.ELiveErrorCategory.GRAPHICS
      });
    }
    async setAgoraMediaMetaData(_v0, _v1) {
      return (0, _v19.withLiveErrorTracking)(() => _v29(this, _v0, _v1), {
        method: "setAgoraMediaMetaData",
        category: _v18.ELiveErrorCategory.GRAPHICS
      });
    }
    async playMedia(_v0, _v1 = 0) {
      return (0, _v19.withLiveErrorTracking)(() => _v32(this, _v0, _v1), {
        method: "playMedia",
        category: _v18.ELiveErrorCategory.GRAPHICS
      });
    }
    async restartMedia(_v0) {
      return (0, _v19.withLiveErrorTracking)(() => _v31(this, _v0), {
        method: "restartMedia",
        category: _v18.ELiveErrorCategory.GRAPHICS
      });
    }
    async pauseMedia(_v0, _v1) {
      return (0, _v19.withLiveErrorTracking)(() => _v30(this, _v0, _v1), {
        method: "pauseMedia",
        category: _v18.ELiveErrorCategory.GRAPHICS
      });
    }
    async flipSlideIndex(_v0) {
      return (0, _v19.withLiveErrorTracking)(() => _v42(this, _v0), {
        method: "flipSlideIndex",
        category: _v18.ELiveErrorCategory.GRAPHICS
      });
    }
    async setSceneSlideIndex(_v0, _v1, _v2) {
      return (0, _v19.withLiveErrorTracking)(() => _v43(this, _v0, _v1, _v2), {
        method: "setSceneSlideIndex",
        category: _v18.ELiveErrorCategory.GRAPHICS
      });
    }
    async addGraphicToScene(_v0) {
      return (0, _v19.withLiveErrorTracking)(() => _v35(this, _v0), {
        method: "addGraphicToScene",
        category: _v18.ELiveErrorCategory.GRAPHICS,
        data: {
          params: _v0,
          scene: this.context.scenes[_v0.sceneId]
        }
      });
    }
    async replaceGraphicInScene(_v0, _v1, _v2, _v3) {
      return (0, _v19.withLiveErrorTracking)(() => _v36(this, _v0, _v1, _v2, _v3), {
        method: "replaceGraphicInScene",
        category: _v18.ELiveErrorCategory.GRAPHICS
      });
    }
    async removeGraphicFromScene(_v0, _v1) {
      return (0, _v19.withLiveErrorTracking)(() => _v37(this, _v0, _v1), {
        method: "removeGraphicFromScene",
        category: _v18.ELiveErrorCategory.GRAPHICS
      });
    }
    async removeGraphicFromAllScenes(_v0, _v1 = !1) {
      return (0, _v19.withLiveErrorTracking)(() => _v41(this, _v0, _v1), {
        method: "removeGraphicFromAllScenes",
        category: _v18.ELiveErrorCategory.GRAPHICS
      });
    }
    async setGraphicVisibility(_v0, _v1, _v2) {
      return (0, _v19.withLiveErrorTracking)(() => _v38(this, _v0, _v1, _v2), {
        method: "setGraphicVisibility",
        category: _v18.ELiveErrorCategory.GRAPHICS
      });
    }
    async setSceneScreensharePipEnabled(_v0, _v1) {
      return (0, _v19.withLiveErrorTracking)(() => _v39(this, _v0, _v1), {
        method: "setSceneScreensharePipEnabled",
        category: _v18.ELiveErrorCategory.GRAPHICS
      });
    }
    async setSceneBackground(_v0, _v1) {
      return (0, _v19.withLiveErrorTracking)(() => _v40(this, _v0, _v1), {
        method: "setSceneBackground",
        category: _v18.ELiveErrorCategory.GRAPHICS
      });
    }
    async setSceneLayout(_v0, _v1) {
      return (0, _v19.withLiveErrorTracking)(() => _v47(this, {
        sceneId: _v0,
        layoutId: _v1
      }), {
        method: "setSceneLayout",
        category: _v18.ELiveErrorCategory.GRAPHICS
      });
    }
    async setGraphicLayoutIndex(_v0) {
      return (0, _v19.withLiveErrorTracking)(() => _v48(this, _v0), {
        method: "setGraphicLayoutIndex",
        category: _v18.ELiveErrorCategory.GRAPHICS
      });
    }
    isCurrentlyInScene(_v0) {
      let _v1 = this.queryDataSync({
        type: _v6.ELiveConnectionQuery.CURRENT_CONNECTION_MEDIA_UID
      })?.data;
      return !!_v1 && !!_v0 && !!(0, _v16.findAgoraSourceInScene)(_v1, _v0);
    }
    isInitialized() {
      return !!(this.sceneIncrementRef && this.programSceneRef && this.scenesListRef && this.rootRef);
    }
    assertIsInitialized() {
      if (!this.isInitialized()) throw new _v13.LiveError("Scenes manager is not initialized.", {
        code: _v9.ELiveErrorCode.INITIALIZATION
      });
    }
    assertCanEdit() {
      if (!this.canEditGraphic) throw new _v13.LiveError("Scenes manager action is not permitted.", {
        code: _v9.ELiveErrorCode.OPERATION_RESTRICTED
      });
    }
    async onBroadcasterApplicationReady({
      data: {
        firebase: _v0,
        app: _v1,
        sessionId: _v2
      }
    }) {
      var _v3, _v4, _v5, _v6, _v7, _v8, _v9, _v10;
      let _v11, _v12, _v13, _v14, _v15, _v16;
      this.firebase = _v0;
      let _v17 = (0, _v14.getRealtimeDatabase)(_v0, _v1);
      this.log.info("🚀Initializing scenes connection"), this.programSceneRef = (0, _v14.getDatabaseRef)(_v0, _v17, _v4.firebaseConfig.REFS.COMPOSER.SCENE.ACTIVE_SCENE(_v2)), this.scenesListRef = (0, _v14.getDatabaseRef)(_v0, _v17, _v4.firebaseConfig.REFS.COMPOSER.SCENE.SCENES(_v2)), this.scenesOrderListRef = (0, _v14.getDatabaseRef)(_v0, _v17, _v4.firebaseConfig.REFS.COMPOSER.SCENE.SCENE_ORDER(_v2)), this.sceneIncrementRef = (0, _v14.getRefChild)(_v0, (0, _v14.getDatabaseRef)(_v0, _v17, _v4.firebaseConfig.REFS.COMPOSER.SETTINGS(_v2)), "scene_creation_increment"), this.rootRef = (0, _v14.getDatabaseRootRef)(_v0, _v17), await Promise.all([_v73(this, this.sceneIncrementRef), _v72(this, this.scenesListRef), _v74(this, this.programSceneRef), _v75(this, this.scenesOrderListRef)]).finally(() => {
        this.log.info("Hydrated scene context"), this.setContext({
          isHydrated: !0,
          hydratedAt: (0, _v15.getAbsoluteNow)()
        });
      }), this.addUnSubscribers([(_v3 = this, _v4 = this.scenesListRef, _v11 = _v0 => {
        let {
            scenes: _v1
          } = _v3.context,
          _v2 = _v71(_v0);
        _v3.log.info("Adding scene:", _v2.id), _v3.setContext({
          scenes: {
            ..._v1,
            [_v2.id]: _v2
          }
        });
      }, _v12 = _v0 => {
        let {
            scenes: _v1,
            scenesOrder: _v2,
            sceneInProgram: _v3,
            activeScene: _v4
          } = _v3.context,
          _v5 = _v0.key,
          _v6 = (0, _v23.omit)(_v1, _v5);
        _v3.log.info("Removing scene:", _v5), _v3.setContext({
          scenes: _v6,
          scenesOrder: _v2.filter(_v0 => _v0 !== _v5)
        }), _v4?.id === _v5 && _v3.selectDefaultScene(_v3);
      }, _v13 = _v0 => {
        let {
            scenes: _v1,
            activeScene: _v2,
            sceneInProgram: _v3
          } = _v3.context,
          _v4 = _v71(_v0),
          _v5 = {
            ..._v1,
            [_v4.id]: _v4
          },
          _v6 = _v1[_v4.id] || null;
        _v3.log.info("Updated scene:", _v4.id, _v4), _v6 && _v6.meta?.media?.status === _v11.EMediaStatus.PLAY && _v4.meta?.media?.status !== _v11.EMediaStatus.PLAY && _v3.emitSignal({
          type: _v7.ELiveGraphicsSignal.SCENE_VIDEO_STOPPED_PLAYING,
          data: _v4
        }), _v3.setContext({
          scenes: _v5,
          activeScene: _v2?.id === _v4.id ? _v4 : _v2
        }), _v3 === _v4.id && _v3.emitSignal({
          type: _v7.ELiveGraphicsSignal.SCENE_IN_PROGRAM_CHANGED,
          data: _v4
        });
      }, (0, _v14.onRefEvent)(_v3.firebase, _v4, "child_added", _v11, "scenes-list"), (0, _v14.onRefEvent)(_v3.firebase, _v4, "child_removed", _v12, "scenes-list"), (0, _v14.onRefEvent)(_v3.firebase, _v4, "child_changed", _v13, "scenes-list"), () => {
        (0, _v14.offRefEvent)(_v3.firebase, _v4, "child_added", _v11), (0, _v14.offRefEvent)(_v3.firebase, _v4, "child_removed", _v12), (0, _v14.offRefEvent)(_v3.firebase, _v4, "child_changed", _v13);
      }), (_v5 = this, _v6 = this.programSceneRef, _v14 = _v0 => {
        let _v1 = _v0.val();
        _v5.log.info("Program scene changed:", _v1);
        let {
          scenes: _v2,
          sceneInProgram: _v3
        } = _v5.context;
        _v3 !== _v1 && _v5.emitSignal({
          type: _v7.ELiveGraphicsSignal.SCENE_IN_PROGRAM_CHANGED,
          data: _v1 ? _v2[_v1] : null
        }), _v5.setContext({
          sceneInProgram: _v1
        });
      }, (0, _v14.onRefEvent)(_v5.firebase, _v6, "value", _v14, "program-scene"), () => (0, _v14.offRefEvent)(_v5.firebase, _v6, "value", _v14)), (_v7 = this, _v8 = this.scenesOrderListRef, _v15 = _v0 => {
        let _v1 = _v0.val();
        _v7.log.info("Scene order changed:", _v1), _v7.setContext({
          scenesOrder: _v1 ?? []
        });
      }, (0, _v14.onRefEvent)(_v7.firebase, _v8, "value", _v15, "scenes-order"), () => (0, _v14.offRefEvent)(_v7.firebase, _v8, "value", _v15)), (_v9 = this, _v10 = this.sceneIncrementRef, _v16 = _v0 => {
        _v9.sceneIncrement = _v0.val() || 1;
      }, (0, _v14.onRefEvent)(_v9.firebase, _v10, "value", _v16, "scene-increment"), () => (0, _v14.offRefEvent)(_v9.firebase, _v10, "value", _v16))]);
    }
    async onRemoveGraphicFromAllScenes(_v0) {
      let {
        graphicId: _v1
      } = _v0.data;
      if (this.canEditGraphic) return this.removeGraphicFromAllScenes(_v1);
    }
    async onScreenMediaStopped() {
      let {
        activeScene: _v0
      } = this.context;
      this.isInitialized() && this.canEditGraphic && _v0 && (await (0, _v19.withLiveErrorTracking)(() => this.updateSceneSpeakerPositions(_v0.id), {
        method: "onScreenMediaStopped",
        category: _v18.ELiveErrorCategory.LIVE,
        data: {
          sceneId: _v0.id
        }
      }));
    }
    async onLiveEventStarting() {
      let {
        scenes: _v0,
        activeScene: _v1,
        sceneInProgram: _v2,
        isHydrated: _v3
      } = this.context;
      if (!this.isInitialized() || !_v3 || !this.canEditGraphic) return this.log.info("Skip scene check when starting stream");
      this.log.info("Handling event start, checking scenes"), _v2 || (this.log.info("Trying to start stream without selected program"), await (0, _v19.withLiveErrorTracking)(async () => {
        if (_v1) this.log.info("Push preview scene to program"), await this.pushSceneToProgram(_v1.id, {
          isMediaUpdateRequired: !1,
          isCloudProvisionRequired: !1
        });else {
          this.log.info("Should select scene in list for program");
          let _v0 = Object.values(_v0),
            _v1 = _v0.length ? _v0[0] : await this.createScene();
          await this.pushSceneToProgram(_v1.id, {
            isCloudProvisionRequired: !1
          }), await this.setActiveScene(_v1);
        }
      }, {
        method: "onLiveEventStarting",
        category: _v18.ELiveErrorCategory.LIVE,
        data: {
          activeScene: _v1,
          scenes: _v0
        }
      }));
    }
    async onRemoveGuestFromAllScenes(_v0) {
      let {
        data: _v1
      } = _v0;
      if (this.canEditGraphic) return this.removeGraphicFromAllScenes((0, _v12.formatConnectionUidByType)(_v8.EAgoraConnectionType.GUEST, _v1), !0);
    }
    onMediaPlaying() {
      let {
        activeScene: _v0
      } = this.context;
      return _v0?.meta?.media?.status === _v11.EMediaStatus.PLAY;
    }
    removeAllScenes() {
      return this.purgeScenes();
    }
    async onPageKeyPressed({
      data: _v0
    }) {
      switch (_v0.key) {
        case _v10.EKey.ARROW_RIGHT:
          return this.flipSlideIndex(1);
        case _v10.EKey.ARROW_LEFT:
          return this.flipSlideIndex(-1);
      }
    }
    async onCreateScenes({
      data: {
        scenes: _v0,
        index: _v1
      }
    }) {
      return this.createScenesOnIndex(_v0, _v1);
    }
  }
  (0, _v2._)([(0, _v3.OnSignal)(_v7.ELiveRealtimeSignal.FIREBASE_COMPOSER_APP_READY)], _v76.prototype, "onBroadcasterApplicationReady", null), (0, _v2._)([(0, _v3.OnSignal)(_v7.ELiveGraphicsSignal.GRAPHIC_DELETED)], _v76.prototype, "onRemoveGraphicFromAllScenes", null), (0, _v2._)([(0, _v3.OnSignal)(_v7.ELiveMediaSignal.SCREEN_MEDIA_STOPPED)], _v76.prototype, "onScreenMediaStopped", null), (0, _v2._)([(0, _v3.OnSignal)(_v7.ELiveSignal.LIVE_EVENT_STARTING)], _v76.prototype, "onLiveEventStarting", null), (0, _v2._)([(0, _v3.OnSignal)(_v7.ELiveGraphicsSignal.GUEST_DELETED)], _v76.prototype, "onRemoveGuestFromAllScenes", null), (0, _v2._)([(0, _v3.OnQuery)(_v6.ELiveMediaQuery.IS_REMOTE_MEDIA_PLAYING)], _v76.prototype, "onMediaPlaying", null), (0, _v2._)([(0, _v3.OnQuery)(_v6.ELiveGraphicsQuery.REMOVE_ALL_SCENES)], _v76.prototype, "removeAllScenes", null), (0, _v2._)([(0, _v3.OnSignal)(_v7.EPageSignal.PAGE_KEY_PRESSED)], _v76.prototype, "onPageKeyPressed", null), (0, _v2._)([(0, _v3.OnQuery)(_v6.ELiveGraphicsQuery.CREATE_SCENES_FROM_PARTIAL)], _v76.prototype, "onCreateScenes", null), _v0.s(["SceneManager", 0, _v76], 0);
  var _v77 = _v0.i(0),
    _v78 = _v0.i(0);
  _v0.s(["getBroadcasterAgoraCredentials", 0, function (_v0, _v1) {
    return (0, _v77.withConnectionSupport)(_v78.ERequestMethod.GET, _v0, ({
      liveEventId: _v0
    }) => ({
      path: `/live_events/${_v0}/broadcaster/rtc`
    }), {
      query: {
        client_id: _v1 || void 0
      }
    });
  }, "getGuestAgoraCredentials", 0, function (_v0) {
    return (0, _v77.withConnectionSupport)(_v78.ERequestMethod.GET, _v0, ({
      liveEventId: _v0,
      guestCode: _v1
    }) => ({
      path: `/live_events/${_v0}/guest/rtc`,
      query: {
        code: _v1
      }
    }));
  }], 0);
  var _v79 = _v3,
    _v80 = _v0.i(0),
    _v81 = _v0.i(0),
    _v82 = _v0.i(0),
    _v83 = _v0.i(0),
    _v84 = _v0.i(0);
  function _v85(_v0, _v1) {
    switch (_v1) {
      case _v8.EAgoraProxyMode.FORCE_UDP:
        _v0.startProxyServer(3);
        return;
      case _v8.EAgoraProxyMode.FORCE_TCP:
        _v0.startProxyServer(5);
        return;
    }
  }
  async function _v86(_v0, _v1 = 0) {
    if (_v0.IS_DISPOSED) return;
    let {
      connectionConfig: _v2,
      mediaUid: _v3,
      isDestroyed: _v4
    } = _v0.context;
    if (_v0.log.info("[SAMC] Connecting to agora room as media:", _v2), _v4) return (0, _v19.trackLiveAction)("agora_media_connection_start_skip"), _v0.log.warn("[SAMC] Cannot start media connection in destroyed context.");
    if (_v2) {
      if ((0, _v12.isAgoraClientConnecting)(_v0.mediaClient)) return _v0.log.warn("[SAMC] Already connected [m], just trying to re-publish");
    } else throw (0, _v19.trackLiveError)("Agora media bad credentials.", {
      category: _v18.ELiveErrorCategory.AGORA,
      method: "startAgoraMediaConnection",
      data: {
        info: _v107(_v0)
      }
    }), new _v13.LiveError("Cannot connect to agora with corrupted credentials.", {
      code: _v9.ELiveErrorCode.RTC
    });
    try {
      (0, _v19.trackLiveAction)("agora_media_connection_start"), _v0.setContext({
        mediaUid: _v3.asLoading()
      });
      let {
          appid: _v0,
          channel: _v1,
          cloudProxy: _v2,
          media: _v3
        } = _v2,
        _v4 = _v82.liveMediaConfig.AGORA.CLOUD_PROXY ?? _v2;
      _v0.log.info("[SAMC] Set media connection proxy mode:", _v4), _v85(_v0.mediaClient, _v4);
      let _v5 = await _v0.mediaClient.join(_v0, _v1, _v3.token, _v3.uid);
      if (_v0.log.info("[SAMC] Connected to agora room as:", _v5), _v0.IS_DISPOSED || _v0.context.isDestroyed || !_v0.mediaClient) return;
      _v0.setContext({
        isMediaJoined: !0,
        mediaJoinedAt: Date.now(),
        mediaUid: _v0.context.mediaUid.asReady(_v5)
      }), await _v0.attemptToPublishLocalMedia(), (0, _v19.trackLiveAction)("agora_media_connection_started");
    } catch (_v0) {
      if (_v0.IS_DISPOSED) return;
      (0, _v19.trackLiveError)(_v0, {
        category: _v18.ELiveErrorCategory.AGORA,
        method: "startAgoraMediaConnection",
        data: {
          info: _v107(_v0)
        }
      }), _v0.code === _v8.EAgoraErrorCode.CAN_NOT_GET_GATEWAY_SERVER && _v1 > 0 ? (_v0.log.warn("[SAMC] Join attempt failed, retrying times:", _v1), (0, _v19.trackLiveAction)("media_connection_start_failed_retry"), await _v0.initializeRoomConfig().then(() => _v86(_v0, _v1 - 1))) : (_v0.log.error("[SAMC] Failed to join agora:", _v0), _v0.setContext({
        mediaUid: _v0.context.mediaUid.asFailed(_v0)
      }), (0, _v19.trackLiveAction)("media_connection_start_failed_completely"));
    }
  }
  async function _v87(_v0, _v1, _v2) {
    if (_v0.IS_DISPOSED) return;
    _v0.log.info("[UL] Agora user left room:", _v1.uid, _v2);
    let {
      roomParticipants: _v3
    } = _v0.context;
    _v0.setContext({
      roomParticipants: _v3.filter(_v0 => _v0.uid !== _v1.uid)
    }), _v0.emitSignal({
      type: _v7.EAgoraSignal.AGORA_USER_LEFT,
      data: _v1
    }), _v97(_v0);
  }
  async function _v88(_v0, _v1, _v2) {
    var _v3, _v4;
    let _v5;
    if (_v0.IS_DISPOSED) return;
    let {
        isDestroyed: _v6
      } = _v0.context,
      _v7 = (_v3 = _v0, _v4 = _v1.uid, _v3.log.info("[S] Checking security of uid:", _v4), _v5 = (0, _v12.parseConnectionTypeFromUid)(_v4), !![_v8.EAgoraConnectionType.MEDIA, _v8.EAgoraConnectionType.PREVIEW, _v8.EAgoraConnectionType.BROADCASTER_SCREEN, _v8.EAgoraConnectionType.BROADCASTER].includes(_v5) || !!_v3.queryDataSync({
        type: _v6.ELiveConnectionQuery.IS_REMOTE_ALLOWED_IN_ROOM,
        data: (0, _v12.parseUidFromAgora)(_v4)
      })?.data);
    if (_v6) return _v0.log.warn("[STUM] Cannot subscribe to media in destroyed context");
    if (!_v0.mediaClient) return _v0.log.warn("[STUM] Cannot subscribe to media before client initialization");
    if ((0, _v12.isAgoraClientDisconnected)(_v0.mediaClient)) return _v0.log.warn("[STUM] Cannot subscribe to media when disconnected");
    if (!_v7) return _v0.log.info("[STUM] Skip subscribing to user media, not allowed:", _v2, _v1.uid);
    _v0.log.info("[STUM] Subscribing to user media:", _v2, _v1.uid);
    let _v8 = await _v0.mediaClient.subscribe(_v1, _v2);
    !_v0.IS_DISPOSED && _v0.mediaClient && (_v0.log.info("[STUM] Subscribed to user media:", _v2, _v1.uid), _v0.emitSignal({
      type: _v7.EAgoraSignal.AGORA_MEDIA_RECEIVED,
      data: {
        mediaType: _v2,
        user: _v1,
        track: _v8
      }
    }));
  }
  async function _v89(_v0, _v1, _v2) {
    if (_v0.IS_DISPOSED) return;
    let {
      isDestroyed: _v3
    } = _v0.context;
    return _v3 ? _v0.log.info("[UFUM] Skipping unsubscribe in destroyed context") : _v0.mediaClient ? void (_v0.log.info("[UFUM] Unsubscribing from user media:", _v2, _v1), await _v0.mediaClient.unsubscribe(_v1, _v2), _v0.IS_DISPOSED || _v0.emitSignal({
      type: _v7.EAgoraSignal.AGORA_MEDIA_REMOVED,
      data: {
        user: _v1,
        mediaType: _v2
      }
    })) : _v0.log.info("[UFUM] Skipping unsubscribe before client initialization");
  }
  async function _v90(_v0, _v1, _v2) {
    try {
      _v0.mutex.cancel("role-change-acquisition"), await _v0.mutex.acquire("for-role-change");
      let {
        role: _v0,
        isReady: _v1,
        isDestroyed: _v2,
        isMediaJoined: _v3,
        isScreenJoined: _v4
      } = _v0.context;
      if (_v1) {
        if (_v2 || !_v0.mediaClient || !_v0.screenClient) return _v0.log.info("[CR] Cannot change role for destroyed connection:", _v2);else if (_v1 === _v0) return _v83.liveTrackingConfig.DETAILS.SESSION_USER_ROLE = _v1, _v0.log.info("[CR] Received role update but already same:", _v1, _v2);
      } else {
        _v0.log.info("[CR] Received role update before client initialization:", _v2), _v0.setContext({
          role: _v1
        }), _v83.liveTrackingConfig.DETAILS.SESSION_USER_ROLE = _v1;
        return;
      }
      (0, _v19.trackLiveAction)("agora_change_role_" + _v1), _v1 === _v8.EClientRole.HOST ? (_v0.log.info("[CR] Turning current connection to broadcaster:", _v1, _v2), await _v0.mediaClient.setClientRole(_v1), _v0.log.info("[CR] Confirmed role change to:", _v1), _v0.setContext({
        role: _v1
      }), _v83.liveTrackingConfig.DETAILS.SESSION_USER_ROLE = _v1, _v0.attemptToPublishLocalMedia()) : (_v0.log.info("[CR] Turning current connection to audience:", _v0, _v1, _v2), _v0.log.info("[CR] Un-publishing media:", _v3, _v4), await Promise.all([_v3 ? _v0.mediaClient.unpublish().then(() => _v0.log.info("[CR] Unpublished local media from agora")).catch(_v0 => _v0.log.error("[CR] Failed to un-publish local media from agora:", _v0)) : Promise.resolve(), _v4 ? _v0.screenClient.unpublish().then(() => _v0.log.info("[CR] Unpublished screen media from agora")).catch(_v0 => _v0.log.error("[CR] Failed to un-publish screen media from agora:", _v0)) : Promise.resolve()]), _v0.log.info("[CR] Changing role to:", _v1), await _v0.mediaClient.setClientRole(_v1), _v0.log.info("[CR] Confirmed role change to:", _v1), _v0.setContext({
        role: _v1
      }), _v83.liveTrackingConfig.DETAILS.SESSION_USER_ROLE = _v1);
    } catch (_v0) {
      if (_v0.code === _v9.ELiveErrorCode.CANCEL) _v0.log.warn("Canceled pending role change:", _v1);else throw _v0;
    } finally {
      _v0.mutex.release("role-changed");
    }
  }
  async function _v91(_v0) {
    try {
      if (_v0.IS_DISPOSED) return;
      if (await _v0.mutex.acquire("publishing-media"), _v0.IS_DISPOSED || _v0.context.isDestroyed) return _v0.log.warn("Skip publish, destroyed");
      if (!_v0.mediaClient) return _v0.log.warn("Skip publish, media client is not initialized");
      let {
        data: {
          video: _v0,
          audio: _v1
        }
      } = _v0.queryDataSync({
        type: _v6.ELiveMediaQuery.CURRENT_LOCAL_MEDIA
      });
      if (_v0.log.info("[ATPLM] Checking sync of current local media:", _v1, _v0), _v0.IS_DISPOSED || !_v0.mediaClient) return;
      let _v2 = (0, _v84.filterTracks)(_v0, _v1).filter(_v0 => !_v0.mediaClient.localTracks.includes(_v0) && !(0, _v84.isAgoraTrackMuted)(_v0)),
        _v3 = _v2.reduce((_v0, _v1) => {
          let _v2 = _v0.mediaClient.localTracks.find(_v0 => _v0.trackMediaType === _v1.trackMediaType);
          return _v2 ? [..._v0, _v2] : _v0;
        }, []);
      _v0.canPublishLocalMedia(_v2) ? ((0, _v19.trackLiveAction)("agora_media_connection_publish_" + _v2.map(_v0 => _v0.trackMediaType).join("_")), _v3.length && (_v0.log.info("[ATPLM] Un-publishing stale local media", _v3), await _v0.mediaClient.unpublish(_v3), _v0.log.info("[ATPLM] Un-published stale local media", _v3)), _v0.log.info("[ATPLM] Publishing local media:", _v2), await _v0.mediaClient.publish(_v2), _v0.log.info("[ATPLM] Published local media:", _v2)) : (0, _v19.trackLiveAction)("agora_media_connection_skip");
    } catch (_v0) {
      if (_v0.code === _v9.ELiveErrorCode.CANCEL) (0, _v19.trackLiveAction)("agora_media_connection_cancel"), _v0.log.warn("Pending media publish attempt canceled");else throw (0, _v19.trackLiveAction)("agora_media_connection_publish_fail", {
        errorName: _v0.name,
        errorMessage: _v0.message
      }), _v0;
    } finally {
      _v0.mutex.release("publish-media-finished"), _v97(_v0);
    }
  }
  async function _v92(_v0, _v1, _v2) {
    let {
      roomParticipants: _v3,
      isDestroyed: _v4
    } = _v0.context;
    if (!_v0.mediaClient || _v4) return;
    let _v5 = (0, _v12.isAgoraConnectionType)(_v1, _v8.EAgoraConnectionType.BROADCASTER) ? _v3.find(_v0 => _v0.hasVideo && (0, _v12.isAgoraConnectionType)(_v0.uid, _v8.EAgoraConnectionType.BROADCASTER))?.uid : _v1;
    if (_v5 && _v3.some(_v0 => _v0.uid === _v5 && _v0.hasVideo)) try {
      _v0.log.info("[SRMSQ] Setting remote stream quality:", _v5, _v2), _v95(_v0, _v5, _v2), await _v0.mediaClient.setRemoteVideoStreamType(_v5, _v2);
    } catch (_v0) {
      _v0.log.error("[SRMSQ] Failed to change remote quality:", _v0);
    }
  }
  async function _v93(_v0, _v1, _v2) {
    if (_v0.IS_DISPOSED) return;
    _v0.log.info("[UP] Remote media published:", _v1.uid, _v2);
    let {
      roomParticipants: _v3,
      screenUid: _v4
    } = _v0.context;
    _v1.uid !== _v4.value && (_v0.setContext({
      roomParticipants: Array.from(_v3)
    }), await _v0.subscribeToUserMedia(_v1, _v2, "user_published"), _v97(_v0));
  }
  async function _v94(_v0, _v1) {
    !_v0.IS_DISPOSED && _v0.mediaClient && (_v0.setContext({
      roomParticipants: _v0.context.roomParticipants.concat([_v1])
    }), await _v0.mediaClient.setStreamFallbackOption(_v1.uid, _v0.remoteStreamFallbackType), _v97(_v0));
  }
  function _v95(_v0, _v1, _v2) {
    _v0.log.info("[MQC] Remote media quality changed:", _v1, _v2), _v0.emitSignal({
      type: _v7.EAgoraSignal.AGORA_MEDIA_QUALITY_CHANGED,
      data: {
        uid: _v1,
        quality: _v2
      }
    });
  }
  async function _v96(_v0, _v1, _v2) {
    if (_v0.IS_DISPOSED) return;
    _v0.log.info("[UU] Remote media unpublished:", _v1.uid, _v2);
    let {
      roomParticipants: _v3,
      screenUid: _v4
    } = _v0.context;
    _v1.uid !== _v4.value && (_v0.setContext({
      roomParticipants: Array.from(_v3)
    }), await _v89(_v0, _v1, _v2), _v97(_v0));
  }
  function _v97(_v0) {
    if (_v0.IS_DISPOSED || _v0.context.isDestroyed || !_v0.mediaClient) return;
    let _v1 = 0,
      _v2 = _v0.mediaClient.remoteUsers.filter(_v0 => _v0.hasVideo && (String(_v0.uid).startsWith(_v8.EAgoraConnectionType.GUEST) || String(_v8.EAgoraConnectionType.BROADCASTER))).length;
    for (let _v0 = 0; _v0 < _v82.liveMediaConfig.DUAL_STREAM.ROOM_SCALE_BREAKPOINTS.length && (_v1 = _v0, !(_v2 < _v82.liveMediaConfig.DUAL_STREAM.ROOM_SCALE_BREAKPOINTS[_v0])); _v0++);
    let _v3 = _v82.liveMediaConfig.DUAL_STREAM.ROOM_SCALE_PRESETS[_v1],
      _v4 = window.document.querySelector("body > canvas");
    _v4 && _v4.height !== _v3.height && (_v0.log.info("Update media settings to:", _v2, _v3), _v4.height = _v3.height, _v4.width = _v3.width);
  }
  function _v98(_v0) {
    _v0.log.info("Initializing agora SDK"), _v0.log.info("Agora codec:", _v0.codec), _v0.log.info("Agora modes media/screen:", _v0.mediaMode, _v0.screenMode);
    let _v1 = _v0.agoraSDK.checkSystemRequirements();
    _v0.log.info("Is agora supported in current env:", _v1, _v0.agoraSDK.VERSION), _v0.setContext({
      isSupported: _v1
    }), _v0.log.info("Set agora room volume check interval:", _v82.liveMediaConfig.AGORA.ROOM_VOLUME_CHECK_INTERVAL), function (_v0, _v1, _v2) {
      try {
        if (_v0.setParameter) _v0.setParameter(_v1, _v2), !0;
      } catch {
        return !1;
      }
    }(_v0.agoraSDK, _v8.EAgoraParameter.AUDIO_VOLUME_INDICATION_INTERVAL, _v82.liveMediaConfig.AGORA.ROOM_VOLUME_CHECK_INTERVAL), _v0.log.info("Enable audio volume smoother"), _v0.audioSmoother.subscribe(_v0 => _v0.setContext({
      roomVolumeSmooth: (0, _v3.createNested)(_v0)
    }));
  }
  async function _v99(_v0) {
    _v0.log.info("Destroying agora context"), _v0.mutex.cancel("destroy"), _v0.setContext({
      isDestroyed: !0,
      isReady: !1
    }), await _v0.stopAgoraConnection(), _v0.mediaClient?.removeAllListeners(), _v0.screenClient?.removeAllListeners(), _v0.mediaClient = null, _v0.screenClient = null, _v0.statsCollector.dispose();
  }
  function _v100(_v0) {
    _v0.mediaClient?.localTracks?.length && (_v0.log.info("UnPublishing connection local media"), _v0.mediaClient.unpublish()), _v0.screenClient?.localTracks?.length && (_v0.log.info("UnPublishing connection screen media"), _v0.screenClient.unpublish());
  }
  async function _v101(_v0) {
    if (_v0.context.isDestroyed) return (0, _v19.trackLiveAction)("agora_info_load_skip"), _v0.log.warn("Skip agora init in destroyed context");
    try {
      (0, _v19.trackLiveAction)("agora_info_load_start"), _v0.log.info("Loading agora credentials");
      let _v0 = await _v0.loadInitialAgoraConfig();
      if (_v0.log.info("Loaded agora config for channel:", _v0.channel), _v0.log.info("Planned token expiration (M):", new Date(0 * _v0.media.ttl)), _v0.setContext({
        connectionConfig: _v0
      }), _v0.IS_DISPOSED || _v0.context.isDestroyed) return (0, _v19.trackLiveAction)("agora_info_load_cancel"), _v0.log.info("Fetched information after manager destruction, skip connection");
      _v0.emitSignal({
        type: _v7.EAgoraSignal.AGORA_CONFIG_LOADED,
        data: _v0
      }), await _v0.tryEstablishConnection();
    } catch (_v0) {
      _v0.log.error("Failed to load agora credentials:", _v0), (0, _v19.trackLiveError)(_v0, {
        category: _v18.ELiveErrorCategory.AGORA,
        method: "initializeRoomConfig",
        data: {
          info: _v107(_v0)
        }
      }), _v0.emitSignal({
        type: _v7.ELiveSignal.GLOBAL_ERROR,
        data: _v0
      });
    }
    (0, _v19.trackLiveAction)("agora_info_load_finish");
  }
  function _v102(_v0) {
    _v0.log.info("Initializing agora media clients");
    let {
      role: _v1,
      isDestroyed: _v2
    } = _v0.context;
    if (_v0.mediaClient) return (0, _v19.trackLiveAction)("agora_init_clients_repeat"), _v0.log.error("Tried to initialize already existing media client");
    if (_v2) return (0, _v19.trackLiveAction)("agora_init_clients_destroyed"), _v0.log.error("Tried to initialize in destroyed context");
    if ((0, _v19.trackLiveAction)("agora_init_clients"), _v0.mediaClient = _v0.agoraSDK.createClient({
      codec: _v0.codec,
      mode: _v0.mediaMode,
      role: _v1
    }), _v0.mediaClient.setRemoteDefaultVideoStreamType(_v8.EStreamQuality.LOW).then(() => _v0.log.info("Set default stream quality as low")).catch(_v0 => _v0.log.error("Failed to set default stream quality:", _v0)), _v0.isDualStreamEnabled ? _v0.mediaClient.enableDualStream().then(() => {
      _v0.mediaClient.setLowStreamParameter(_v0.dualStreamConfig), _v0.log.info("Updated dual stream parameters for agora (media):", _v0.dualStreamConfig);
    }).catch(_v0 => _v0.log.error("Could not enable dual stream:", _v0)) : _v0.log.info("Dual stream option is disabled for media"), _v0.isVolumeIndicatorEnabled) {
      let _v0 = (0, _v81.default)(_v0 => {
        _v0.IS_DISPOSED || _v0.setContext({
          roomVolume: _v0.reduce((_v0, _v1) => (_v0[_v1.uid] = _v1, _v0), (0, _v3.createNested)({}))
        });
      }, _v82.liveMediaConfig.AGORA.ROOM_VOLUME_CHECK_THROTTLE);
      _v0.mediaClient.enableAudioVolumeIndicator(), _v0.mediaClient.on("volume-indicator", _v0 => {
        _v0(_v0), _v0.audioSmoother.push(_v0);
      });
    }
    if (_v0.mediaClient.on("token-privilege-will-expire", () => {
      _v0.log.info("Token will expire, refreshing"), _v103(_v0);
    }), _v0.mediaClient.on("token-privilege-did-expire", async () => {
      _v0.log.warn("Token privilege expired for agora media connection");
      try {
        await _v0.initializeRoomConfig();
      } catch (_v0) {
        (0, _v19.trackLiveError)(new _v13.LiveError("Media token expired.", {
          code: _v9.ELiveErrorCode.RTC
        }), {
          category: _v18.ELiveErrorCategory.AGORA,
          data: {
            info: _v107(_v0),
            refreshError: _v0
          }
        }), _v0.emitSignal({
          type: _v7.EAgoraSignal.AGORA_TOKEN_EXPIRED
        });
      }
    }), _v0.mediaClient.on("network-quality", _v0 => {
      _v0.IS_DISPOSED || _v0.setContext({
        mediaConnectionQuality: (0, _v3.createNested)(_v0)
      });
    }), _v0.mediaClient.on("connection-state-change", _v0 => {
      _v0.IS_DISPOSED || (_v0.setContext({
        mediaConnectionState: _v0
      }), _v0 === _v8.EAgoraConnectionState.CONNECTED && (_v0.log.info("🧲Media agora connected"), _v0.attemptToPublishLocalMedia()));
    }), _v0.mediaClient.on("stream-type-changed", (_v0, _v1) => _v95(_v0, _v0, _v1)), _v0.mediaClient.on("user-joined", _v0 => _v94(_v0, _v0)), _v0.mediaClient.on("user-left", (_v0, _v1) => _v87(_v0, _v0, _v1)), _v0.mediaClient.on("user-published", (_v0, _v1) => _v93(_v0, _v0, _v1)), _v0.mediaClient.on("user-unpublished", (_v0, _v1) => _v96(_v0, _v0, _v1)), _v0.mediaClient.on("user-info-updated", (_v0, _v1) => {
      var _v2, _v3, _v4;
      return _v2 = _v0, _v3 = _v0, _v4 = _v1, void (_v2.log.info("Remote user state update:", _v3, _v4), _v97(_v2));
    }), _v0.mediaClient.on("exception", _v0 => _v110(_v0, _v0)), _v0.mediaClient.on("is-using-cloud-proxy", _v0 => {
      _v0 ? (_v0.log.info("✨️ Proxy usage is enabled [media]"), (0, _v19.trackLiveAction)("agora_media_use_with_cloud_proxy")) : (_v0.log.info("✨️ Proxy usage is disabled [media]"), (0, _v19.trackLiveAction)("agora_media_use_without_cloud_proxy"));
    }), _v0.screenClient) return _v0.log.error("Tried to initialize already existing screen client");
    _v0.screenClient = _v0.agoraSDK.createClient({
      codec: _v0.codec,
      mode: _v0.screenMode,
      role: _v8.EClientRole.HOST
    }), _v0.screenClient.on("token-privilege-will-expire", () => {
      _v0.log.info("Token privilege will expire for agora screen connection");
    }), _v0.screenClient.on("token-privilege-did-expire", () => {
      _v0.log.warn("Token privilege expired for agora screen connection"), (0, _v19.trackLiveError)(new _v13.LiveError("Screen token expired.", {
        code: _v9.ELiveErrorCode.RTC
      }), {
        category: _v18.ELiveErrorCategory.AGORA,
        data: {
          info: _v107(_v0)
        }
      });
    }), _v0.screenClient.on("network-quality", _v0 => {
      _v0.IS_DISPOSED || _v0.setContext({
        screenConnectionQuality: (0, _v3.createNested)(_v0)
      });
    }), _v0.screenClient.on("connection-state-change", _v0 => {
      _v0.IS_DISPOSED || (_v0.setContext({
        screenConnectionState: _v0
      }), _v0.log.info("🧲Screen connection state:", _v0), _v0 === _v8.EAgoraConnectionState.CONNECTED && _v0.attemptToPublishScreen());
    }), _v0.screenClient.on("exception", _v0 => _v110(_v0, _v0)), _v0.screenClient.on("is-using-cloud-proxy", _v0 => {
      _v0 ? (_v0.log.info("✨️ Proxy usage is enabled [screen]"), (0, _v19.trackLiveAction)("agora_screen_use_with_cloud_proxy")) : (_v0.log.info("✨️ Proxy usage is disabled [screen]"), (0, _v19.trackLiveAction)("agora_screen_use_without_cloud_proxy"));
    }), _v0.isStatsCollectionEnabled && _v0.statsCollector.start(_v0.mediaClient, _v0.screenClient, _v0.getScope()), _v0.log.info("Initialized agora clients"), _v0.setContext({
      isReady: !0
    });
  }
  async function _v103(_v0) {
    if (_v0.IS_DISPOSED) return;
    let {
      isDestroyed: _v1,
      isReady: _v2
    } = _v0.context;
    if (_v1 || !_v2) return _v0.log.warn("Tried to refresh token in incorrect state:", _v2, _v1);
    (0, _v19.trackLiveAction)("agora_info_refresh_start");
    try {
      let _v0 = await _v0.loadRefreshedAgoraConfig();
      if (_v0.IS_DISPOSED || !_v0.mediaClient || (await _v0.mediaClient.renewToken(_v0.media.token), ((0, _v12.isAgoraClientConnected)(_v0.screenClient) || (0, _v12.isAgoraClientConnecting)(_v0.screenClient)) && (await _v0.screenClient.renewToken(_v0.screen.token)), _v0.IS_DISPOSED)) return;
      _v0.setContext({
        connectionConfig: _v0
      }), _v0.log.info("Refreshed tokens"), _v0.log.info("Planned token expiration (M):", new Date(0 * _v0.media.ttl));
    } catch (_v0) {
      if (_v0.log.error("Failed to refresh tokens:", _v0), _v0.IS_DISPOSED) return;
      (0, _v19.trackLiveError)(_v0, {
        category: _v18.ELiveErrorCategory.AGORA,
        method: "refreshToken",
        data: {
          info: _v107(_v0)
        }
      }), _v0.emitSignal({
        type: _v7.EAgoraSignal.AGORA_TOKEN_FAILED_TO_REFRESH,
        data: _v0
      });
    }
    (0, _v19.trackLiveAction)("agora_info_refresh_finish");
  }
  function _v104(_v0, _v1) {
    _v0.log.info("Changing agora log level:", _v1), _v0.agoraSDK ? _v0.agoraSDK.setLogLevel(_v1) : _v0.log.warn("Cannot set log level, no agora SDK initialized");
  }
  function _v105(_v0, _v1) {
    _v0.log.info("Changing agora log upload state to:", _v1), _v0.agoraSDK ? _v1 ? _v0.agoraSDK.enableLogUpload() : _v0.agoraSDK.disableLogUpload() : _v0.log.warn("Cannot set log uploading, no agora SDK initialized");
  }
  async function _v106(_v0) {
    return {
      SENT_STATS_SUMMARY: _v0.statsCollector?.getSentStatsSummary(),
      RECV_STATS_SUMMARY: await _v0.statsCollector?.getReceivedStatsSummary(),
      CUR_LOCAL_MEDIA_RTC: _v0.mediaClient?.getRTCStats(),
      CUR_LOCAL_SCREEN_RTC: _v0.screenClient?.getRTCStats(),
      CUR_LOCAL_SCREEN_STATS: _v0.screenClient?.getLocalVideoStats(),
      CUR_LOCAL_VIDEO_STATS: _v0.mediaClient?.getLocalVideoStats(),
      CUR_LOCAL_AUDIO_STATS: _v0.mediaClient?.getLocalAudioStats(),
      CUR_REMOTE_STATS: _v0.mediaClient?.remoteUsers?.map(_v0 => ({
        UID: _v0.uid,
        VIDEO_STATS: _v0.videoTrack?.getStats() || null,
        VIDEO_SETTINGS: _v0.videoTrack?.getMediaStreamTrack()?.getSettings() || null,
        AUDIO_STATS: _v0.audioTrack?.getStats() || null,
        AUDIO_SETTINGS: _v0.audioTrack?.getMediaStreamTrack()?.getSettings() || null
      }))
    };
  }
  function _v107(_v0) {
    let _v1 = _v0.mediaClient ? _v0.mediaClient._gateway : null,
      {
        role: _v2,
        connectionConfig: _v3,
        isDestroyed: _v4,
        isReady: _v5,
        isSupported: _v6,
        mediaJoinedAt: _v7,
        isMediaJoined: _v8,
        isScreenJoined: _v9,
        screenUid: _v10,
        mediaUid: _v11,
        mediaConnectionState: _v12,
        screenConnectionState: _v13,
        roomParticipants: _v14
      } = _v0.context;
    return {
      isDestroyed: _v4,
      isReady: _v5,
      isSupported: _v6,
      isMutexLocked: _v0.mutex.isLocked(),
      mediaJoinedAt: _v7,
      isMediaJoined: _v8,
      isScreenJoined: _v9,
      mediaConnectionState: _v12,
      screenConnectionState: _v13,
      screenUid: _v10,
      mediaUid: _v11,
      role: _v2,
      participantsCount: _v14.length,
      channel: _v3?.channel,
      uid: _v3?.uid,
      screenTracks: _v0.screenClient?.localTracks.length,
      mediaTracks: _v0.mediaClient?.localTracks.length,
      mediaRole: _v1?.role
    };
  }
  async function _v108(_v0) {
    let _v1 = (0, _v12.getRtcPeer)(_v0.mediaClient);
    return _v1 ? _v1.getStats() : null;
  }
  async function _v109(_v0) {
    _v0.log.info("Leaving agora connection room");
    let {
      mediaUid: _v1,
      screenUid: _v2
    } = _v0.context;
    _v0.mediaClient && _v1.value && (await _v0.mediaClient.leave()), _v0.screenClient && _v2.value && (await _v0.screenClient.leave()), _v0.log.info("Left agora connection room"), _v0.setContext({
      isMediaJoined: !1,
      isScreenJoined: !1,
      mediaJoinedAt: null,
      screenJoinedAt: null,
      mediaUid: _v0.context.mediaUid.asReady(null),
      screenUid: _v0.context.screenUid.asReady(null),
      mediaConnectionQuality: (0, _v3.createNested)({
        uplinkNetworkQuality: _v8.EAgoraNetworkQuality.UNKNOWN,
        downlinkNetworkQuality: _v8.EAgoraNetworkQuality.UNKNOWN
      }),
      screenConnectionQuality: (0, _v3.createNested)({
        uplinkNetworkQuality: _v8.EAgoraNetworkQuality.UNKNOWN,
        downlinkNetworkQuality: _v8.EAgoraNetworkQuality.UNKNOWN
      }),
      roomParticipants: []
    });
  }
  function _v110(_v0, {
    msg: _v1,
    code: _v2,
    uid: _v3
  }) {
    _v0.log.debug("Channel exception received:", _v3, _v2, _v1);
  }
  async function _v111(_v0, _v1) {
    _v1 || _v0.log.info("Empty track disposed"), _v0.mediaClient ? (_v0.log.info("Unpublish media track:", _v1), await _v0.mediaClient.unpublish(_v1).catch(_v0 => _v0.log.error("Unpublish failed:", _v0)), _v97(_v0)) : _v0.log.info("Manager is not initialized, cannot unpublish:", _v1);
  }
  async function _v112(_v0) {
    let {
      connectionConfig: _v1,
      screenUid: _v2,
      isDestroyed: _v3
    } = _v0.context;
    if (_v0.log.info("Connecting to agora room as screen:", _v1), _v3) return _v0.log.warn("Cannot start screen connection in destroyed context.");
    if (_v1) {
      if ((0, _v12.isAgoraClientConnecting)(_v0.screenClient)) return _v0.log.warn("Tried to start new [s] connection while connecting, skip");
    } else throw (0, _v19.trackLiveError)("Agora screen bad credentials.", {
      category: _v18.ELiveErrorCategory.AGORA,
      method: "startAgoraScreenConnection",
      data: {
        info: _v107(_v0)
      }
    }), new _v13.LiveError("Cannot connect to agora with corrupted credentials.");
    try {
      if ((0, _v12.isAgoraClientConnected)(_v0.screenClient)) return _v0.log.warn("Already connected [s], just trying to re-publish"), _v0.attemptToPublishScreen();
      {
        (0, _v19.trackLiveAction)("agora_screen_connection_start"), _v0.setContext({
          screenUid: _v2.asLoading()
        });
        let {
            appid: _v0,
            channel: _v1,
            cloudProxy: _v2,
            screen: _v3
          } = _v1,
          _v4 = _v82.liveMediaConfig.AGORA.CLOUD_PROXY ?? _v2;
        _v0.log.info("Set screenshare connection proxy mode:", _v4), _v85(_v0.screenClient, _v4);
        let _v5 = await _v0.screenClient.join(_v0, _v1, _v3.token, _v3.uid);
        _v0.log.info("Connected to agora room as:", _v5), _v0.setContext({
          isScreenJoined: !0,
          screenJoinedAt: Date.now(),
          screenUid: _v0.context.screenUid.asReady(_v5)
        }), await _v0.attemptToPublishScreen();
      }
      (0, _v19.trackLiveAction)("agora_screen_connection_started");
    } catch (_v0) {
      (0, _v19.trackLiveError)(_v0, {
        category: _v18.ELiveErrorCategory.AGORA,
        method: "startAgoraScreenConnection",
        data: {
          info: _v107(_v0)
        }
      }), _v0.setContext({
        screenUid: _v0.context.screenUid.asFailed(_v0)
      }), _v0.log.error("Failed to join agora with screen:", _v0);
    }
  }
  async function _v113(_v0) {
    _v0.log.info("Leaving agora screen connection"), ((0, _v12.isAgoraClientConnected)(_v0.screenClient) || (0, _v12.isAgoraClientConnecting)(_v0.screenClient)) && ((0, _v19.trackLiveAction)("agora_screen_connection_stop"), await _v0.screenClient.leave(), _v0.setContext({
      screenUid: _v0.context.screenUid.asReady(null),
      screenJoinedAt: null,
      isScreenJoined: !1,
      screenConnectionQuality: (0, _v3.createNested)({
        uplinkNetworkQuality: _v8.EAgoraNetworkQuality.UNKNOWN,
        downlinkNetworkQuality: _v8.EAgoraNetworkQuality.UNKNOWN
      }),
      screenConnectionState: _v8.EAgoraConnectionState.DISCONNECTED
    }));
  }
  async function _v114(_v0) {
    await _v0.mutex.acquire("publishing-screen");
    try {
      if (_v0.context.isDestroyed) return _v0.log.warn("Skip publish, destroyed");
      let {
        data: {
          screen: _v0
        }
      } = _v0.queryDataSync({
        type: _v6.ELiveMediaQuery.CURRENT_LOCAL_MEDIA
      });
      _v0.canPublishLocalScreen(_v0) && ((0, _v19.trackLiveAction)("agora_screen_connection_publish"), _v0.log.info("Publishing screen media", _v0), await _v0.screenClient.publish(_v0), _v0.log.info("Published screen media", _v0));
    } catch (_v0) {
      if (_v0?.code === _v9.ELiveErrorCode.CANCEL) _v0.log.warn("Cancel screen publish");else throw _v0;
    } finally {
      _v0.mutex.release("publish-screen-finished");
    }
  }
  var _v115 = _v0.i(0);
  class _v116 {
    static TICKS_LIMIT = 32;
    static TICKS_BUFFER = 8;
    static TICKS_CUTOFF_DURATION = 0;
    updatedAt = 0;
    callback = null;
    ticks = [];
    subscribe(_v0) {
      this.callback = _v0;
    }
    unsubscribe() {
      this.callback = null;
    }
    reset() {
      this.updatedAt = 0, this.ticks.splice(0, this.ticks.length), this.callback && this.callback({});
    }
    push(_v0) {
      this.ticks.length >= _v116.TICKS_LIMIT && this.ticks.splice(0, _v116.TICKS_BUFFER), this.ticks.push([Date.now(), _v0]), Date.now() - this.updatedAt > _v116.TICKS_CUTOFF_DURATION && (this.updatedAt = Date.now(), this.callback && this.callback(this.calculate(this.ticks)));
    }
    calculate(_v0) {
      let _v1 = Date.now(),
        _v2 = {};
      for (let _v0 of _v0.filter(([_v0]) => _v1 - _v0 < _v116.TICKS_CUTOFF_DURATION).map(([, _v0]) => _v0)) _v0.forEach(_v0 => {
        if (!(_v0.level < _v82.liveMediaConfig.AGORA.AUDIO_VOLUME_CHECK_THRESHOLD / 100)) if (_v0.uid in _v2) {
          let _v0 = _v2[_v0.uid];
          _v0.level = Math.max(_v0.level, _v0.level);
        } else _v2[_v0.uid] = {
          ..._v0
        };
      });
      return _v2;
    }
  }
  var _v117 = _v0.i(0),
    _v118 = _v0.i(0),
    _v119 = ((_v1 = {}).OK = "OK", _v1.POOR_NETWORK = "POOR_NETWORK", _v1.COMPUTE_LOW = "COMPUTE_LOW", _v1);
  class _v120 {
    get isStarted() {
      return !!(this.client && this.startedAt && this.collectorIntervalId && this.reporterIntervalId);
    }
    client;
    screenClient;
    scope;
    startedAt = null;
    statsCollectedAt = null;
    statsReportedAt = null;
    statsSentOkReported = 0;
    statsSentComputeLowReported = 0;
    statsSentPoorNetworkReported = 0;
    statsSentUnknownReported = 0;
    sentStats = [];
    receivedStats = [];
    collectorIntervalId = 0;
    reporterIntervalId = 0;
    static getFpsSummaryStats(_v0) {
      let _v1 = 0,
        _v2 = 0;
      for (let _v0 = 0; _v0 < _v0.length; _v0++) _v2 += _v0[_v0];
      let _v3 = (0, _v117.roundWithPrecision)(_v2 / _v0.length, 4);
      for (let _v0 = 0; _v0 < _v0.length; _v0++) _v1 += Math.abs(_v0[_v0] - _v3);
      let _v4 = (0, _v117.roundWithPrecision)(_v1 / _v0.length, 4);
      return {
        volatility: (0, _v117.roundWithPrecision)(_v4 / _v3 * 100, 4),
        mean: _v3,
        deviation: _v4
      };
    }
    start(_v0, _v1, _v2) {
      if (this.client = _v0, this.screenClient = _v1, this.scope = _v2, this.startedAt = Date.now(), this.collectorIntervalId || this.reporterIntervalId) throw new _v13.LiveError("Tried to start stat collection for already working service.");
      this.collectorIntervalId = (0, _v118.registerInterval)(this.measurePerformanceStats, _v82.liveMediaConfig.PERFORMANCE.PERFORMANCE_CHECK_INTERVAL, "measurePerformanceStats"), this.reporterIntervalId = (0, _v118.registerInterval)(this.reportPerformanceStats, _v82.liveMediaConfig.PERFORMANCE.PERFORMANCE_REPORT_INTERVAL, "reportPerformanceStats");
    }
    stop() {
      this.client = null, this.scope = null, this.startedAt = null, this.sentStats = [], this.receivedStats = [], (0, _v118.unRegisterInterval)(this.collectorIntervalId), (0, _v118.unRegisterInterval)(this.reporterIntervalId), this.reporterIntervalId = 0, this.collectorIntervalId = 0;
    }
    dispose() {
      this.stop();
    }
    addReceivedStatRecord(_v0) {
      null !== _v0 && (this.receivedStats.length > _v82.liveMediaConfig.PERFORMANCE.PERFORMANCE_REPORT_SAMPLES_MAX && this.receivedStats.splice(0, _v82.liveMediaConfig.PERFORMANCE.PERFORMANCE_REPORT_SAMPLES_OFFSET), this.receivedStats.push(_v0));
    }
    addSentStatRecord(_v0) {
      null !== _v0 && (this.sentStats.length > _v82.liveMediaConfig.PERFORMANCE.PERFORMANCE_REPORT_SAMPLES_MAX && this.sentStats.splice(0, _v82.liveMediaConfig.PERFORMANCE.PERFORMANCE_REPORT_SAMPLES_OFFSET), this.sentStats.push(_v0));
    }
    collectReceivedStatsRecord() {
      let _v0 = this.client.getRemoteVideoStats(),
        _v1 = Date.now(),
        _v2 = Object.entries(_v0).reduce((_v0, [_v1, _v2]) => (_v2 && (_v2.renderFrameRate || 0) > 0 && (_v2.receiveFrameRate || 0) > 0 && _v2.publishDuration >= _v82.liveMediaConfig.PERFORMANCE.PERFORMANCE_CHECK_OMITTED_TIME && (_v0[_v1] = _v2), _v0), {});
      return 0 === Object.values(_v2).length ? null : {
        stats: _v2,
        collectedAt: _v1,
        checkDelay: this.statsCollectedAt ? Math.abs(_v1 - this.statsCollectedAt - _v82.liveMediaConfig.PERFORMANCE.PERFORMANCE_CHECK_INTERVAL) : 0
      };
    }
    collectSentStatsRecord() {
      let _v0 = this.client.localTracks.find(_v0 => _v0.trackMediaType === _v115.ETrackKind.AUDIO),
        _v1 = !!this.client.localTracks.find(_v0 => _v0.trackMediaType === _v115.ETrackKind.VIDEO),
        _v2 = !!_v0,
        _v3 = 0 !== this.screenClient.localTracks.length;
      if (!_v1) return null;
      let _v4 = this.client.getRTCStats(),
        _v5 = this.screenClient.getRTCStats(),
        _v6 = this.client.getLocalVideoStats(),
        _v7 = this.client.getLocalAudioStats(),
        _v8 = _v1 ? this.screenClient.getLocalVideoStats() : null;
      return void 0 !== _v6.encodeDelay && void 0 !== _v6.sendFrameRate && _v6.sendFrameRate >= 0 && _v4.SendBitrate && _v4.UserCount > 1 ? {
        rtcRecordedAt: Date.now(),
        rtcSentAudioMuted: _v0 ? (0, _v84.isAgoraTrackMuted)(_v0) : null,
        rtcPublishedAudio: _v2,
        rtcSentRTT: _v4.RTT,
        rtcSentAudioVolume: _v2 ? _v7.sendVolumeLevel : null,
        rtcSentAudioBitrate: _v2 ? _v7.sendBitrate / 0 : null,
        rtcSentAudioCodec: _v2 && _v7.codecType || null,
        rtcPublishedScreen: _v3,
        rtcSentScreenFps: _v8 ? _v8.sendFrameRate : null,
        rtcSentScreenPixels: _v8 ? _v8.sendResolutionWidth * _v8.sendResolutionHeight : null,
        rtcSentScreenBitrate: _v8 ? _v8.sendBitrate / 0 : null,
        rtcSendAvailableBitrate: _v4.OutgoingAvailableBandwidth,
        rtcSentUsedBitrate: _v6.sendBitrate / 0,
        rtcSentUsedBitrateTotal: (_v4.SendBitrate + _v5.SendBitrate) / 0,
        rtcSentPixels: _v6.sendResolutionWidth * _v6.sendResolutionHeight,
        rtcSentPacketLossRate: _v6.currentPacketLossRate,
        rtcSentFps: _v6.sendFrameRate,
        rtcSendCaptureFps: _v6.captureFrameRate || 0,
        rtcSentEncodeDelay: _v6.encodeDelay,
        rtcSentDesiredBitrate: _v6.targetSendBitrate / 0,
        rtcSentDesiredBitrateTotal: (_v6.targetSendBitrate + (_v8 ? _v8.targetSendBitrate : 0)) / 0 + (_v82.liveMediaConfig.DUAL_STREAM.CONFIG.bitrate || 0),
        rtcSentUsedCodec: _v6.codecType || null
      } : null;
    }
    async getReceivedStatsSummary() {
      let {
          data: _v0
        } = this.scope.queryDataSync({
          type: _v6.ELiveMediaQuery.CURRENT_REMOTE_MEDIA
        }),
        _v1 = Date.now(),
        _v2 = {};
      this.receivedStats.filter(_v0 => _v1 - _v0.collectedAt <= _v82.liveMediaConfig.PERFORMANCE.PERFORMANCE_REPORT_INTERVAL).forEach(_v0 => {
        Object.entries(_v0.stats).forEach(([_v0, _v1]) => {
          let _v2 = _v2[_v0];
          _v2 ? _v2[_v0] = {
            ..._v2,
            count: _v2.count + 1,
            rtcCheckDelay: _v2.rtcCheckDelay + _v0.checkDelay,
            rtcRenderPixels: _v2.rtcRenderPixels + _v1.receiveResolutionHeight * _v1.receiveResolutionWidth,
            renderFrameRate: [..._v2.renderFrameRate, _v1.renderFrameRate],
            rtcRenderFreezeRate: _v2.rtcRenderFreezeRate + _v1.freezeRate,
            rtcReceivedPacketLossRate: _v2.rtcReceivedPacketLossRate + _v1.packetLossRate,
            rtcReceivedBitrate: _v2.rtcReceivedBitrate + _v1.receiveBitrate
          } : _v2[_v0] = {
            count: 1,
            rtcCheckDelay: _v0.checkDelay,
            rtcRenderPixels: _v1.receiveResolutionHeight * _v1.receiveResolutionWidth,
            renderFrameRate: [_v1.renderFrameRate],
            rtcRenderFreezeRate: _v1.freezeRate,
            rtcReceivedPacketLossRate: _v1.packetLossRate,
            rtcReceivedBitrate: _v1.receiveBitrate
          };
        });
      }), Object.entries(_v2).forEach(([_v0, _v1]) => {
        if (_v1.count < _v82.liveMediaConfig.PERFORMANCE.PERFORMANCE_REPORT_CONNECTION_SAMPLES_MIN) return void delete _v2[_v0];
        let {
          mean: _v2,
          deviation: _v3,
          volatility: _v4
        } = _v120.getFpsSummaryStats(_v1.renderFrameRate);
        _v1.rtcCheckDelay /= _v1.count, _v1.rtcRenderPixels /= _v1.count, _v1.rtcRenderFreezeRate /= _v1.count, _v1.rtcReceivedPacketLossRate /= _v1.count, _v1.rtcReceivedBitrate /= _v1.count, _v1.rtcRenderFpsMean = _v2, _v1.rtcRenderFpsDeviation = _v3, _v1.rtcRenderFpsVolatility = _v4;
      });
      let _v3 = Object.keys(_v2).length,
        _v4 = _v0.reduce((_v0, _v1) => (_v0[_v1.uid] = _v1, _v0), {}),
        _v5 = !1,
        _v6 = !1,
        _v7 = !1,
        _v8 = 0,
        _v9 = 0,
        _v10 = 0;
      if (this.receivedStats.length >= _v82.liveMediaConfig.PERFORMANCE.PERFORMANCE_REPORT_CONNECTION_SAMPLES_MIN) {
        let _v0 = Object.entries(_v2).reduce((_v0, [_v1, _v2]) => {
            let _v3 = _v4[_v1],
              _v4 = _v3?.quality,
              [_v5] = (0, _v12.parseAgoraConnectionDetails)(_v1) || [],
              _v6 = (0, _v12.isAgoraScreenConnectionType)(_v1);
            return _v5 === _v8.EAgoraConnectionType.MEDIA ? _v5 = !0 : _v5 === _v8.EAgoraConnectionType.PREVIEW ? _v6 = !0 : (_v5 === _v8.EAgoraConnectionType.GUEST_SCREEN || _v5 === _v8.EAgoraConnectionType.BROADCASTER_SCREEN) && (_v7 = !0), _v4 === _v8.EStreamQuality.LOW ? _v9 += 1 : _v4 === _v8.EStreamQuality.HIGH && (_v10 += 1), _v2.rtcRenderPixels > _v82.liveMediaConfig.PERFORMANCE.PERFORMANCE_LARGE_RESOLUTION_THRESHOLD && (_v8 += 1), _v0.rtcCheckDelay += _v2.rtcCheckDelay, _v0.rtcRenderPixels += _v2.rtcRenderPixels, _v0.rtcRenderFreezeRate += _v2.rtcRenderFreezeRate, _v0.rtcReceivedPacketLossRate += _v2.rtcReceivedPacketLossRate, _v0.rtcReceivedBitrate += _v2.rtcReceivedBitrate / 0, _v6 || (_v0.rtcRenderFpsMean += _v2.rtcRenderFpsMean, _v0.rtcRenderFpsDeviation += _v2.rtcRenderFpsDeviation, _v0.rtcRenderFpsVolatility += _v2.rtcRenderFpsVolatility), _v0;
          }, {
            rtcCheckDelay: 0,
            rtcRenderPixels: 0,
            rtcRenderFreezeRate: 0,
            rtcReceivedPacketLossRate: 0,
            rtcReceivedBitrate: 0,
            rtcRenderFpsMean: 0,
            rtcRenderFpsDeviation: 0,
            rtcRenderFpsVolatility: 0
          }),
          _v1 = _v3 - !!_v7;
        if (["rtcCheckDelay", "rtcRenderFreezeRate", "rtcReceivedPacketLossRate"].forEach(_v0 => {
          _v0[_v0] = (0, _v117.roundWithPrecision)(_v0[_v0] / _v3, 4);
        }), ["rtcRenderFpsMean", "rtcRenderFpsDeviation", "rtcRenderFpsVolatility"].forEach(_v0 => _v0[_v0] = (0, _v117.roundWithPrecision)(_v0[_v0] / _v1, 4) ?? -1), 0 === _v1) ;else {
          let _v0 = this.scope.queryDataSync({
            type: _v6.ELiveMediaQuery.CURRENT_LOCAL_VIDEO_CONFIG
          });
          return {
            ..._v0,
            rtcRenderPreview: _v6,
            rtcRenderAgoraMedia: _v5,
            rtcRenderScreen: _v7,
            rtcRenderLSCount: _v8,
            rtcRenderHQCount: _v10,
            rtcRenderLQCount: _v9,
            rtcRenderSources: _v3,
            rtcRenderUsedBlur: !!_v0?.data.isBlurred,
            rtcRenderUsedStats: this.receivedStats.length
          };
        }
      }
      return null;
    }
    getSentStatsSummary() {
      let _v0 = Date.now(),
        _v1 = this.sentStats.filter(_v0 => _v0 - _v0.rtcRecordedAt <= _v82.liveMediaConfig.PERFORMANCE.PERFORMANCE_REPORT_INTERVAL).sort((_v0, _v1) => _v0.rtcSentFps - _v1.rtcSentFps);
      if (_v1.length >= _v82.liveMediaConfig.PERFORMANCE.PERFORMANCE_REPORT_CONNECTION_SAMPLES_MIN) {
        let _v0 = _v1.slice(0, 2 * _v82.liveMediaConfig.PERFORMANCE.PERFORMANCE_REPORT_CONNECTION_SAMPLES_MIN),
          _v1 = _v0.filter(_v0 => !_v0.rtcSentAudioMuted),
          _v2 = _v0.filter(_v0 => _v0.rtcPublishedScreen),
          _v3 = (_v0, [_v1, _v2]) => (_v0[_v1] = "number" == typeof _v2 ? (0, _v117.roundWithPrecision)(_v2 / _v0.length, 4) : _v2, _v0),
          _v4 = Object.entries(_v0.reduce((_v0, _v1) => (_v0.rtcSentRTT += _v1.rtcSentRTT, _v0.rtcSentFps += _v1.rtcSentFps, _v0.rtcSendAvailableBitrate += _v1.rtcSendAvailableBitrate, _v0.rtcSentPixels += _v1.rtcSentPixels, _v0.rtcSentUsedBitrate += _v1.rtcSentUsedBitrate, _v0.rtcSentUsedBitrateTotal += _v1.rtcSentUsedBitrateTotal, _v0.rtcSentPacketLossRate += _v1.rtcSentPacketLossRate, _v0.rtcSentEncodeDelay += _v1.rtcSentEncodeDelay, _v0.rtcSendCaptureFps += _v1.rtcSendCaptureFps, _v0.rtcSentDesiredBitrate += _v1.rtcSentDesiredBitrate, _v0.rtcSentDesiredBitrateTotal += _v1.rtcSentDesiredBitrateTotal, _v0.rtcPublishedAudio = _v1.rtcPublishedAudio, _v0.rtcSentAudioMuted = _v1.rtcSentAudioMuted, _v0.rtcPublishedScreen = _v1.rtcPublishedScreen, _v0.rtcSentUsedCodec = _v1.rtcSentUsedCodec, _v0), {
            rtcSentRTT: 0,
            rtcSentFps: 0,
            rtcSendAvailableBitrate: 0,
            rtcSentPixels: 0,
            rtcSentUsedBitrate: 0,
            rtcSentUsedBitrateTotal: 0,
            rtcSentPacketLossRate: 0,
            rtcSentEncodeDelay: 0,
            rtcSendCaptureFps: 0,
            rtcSentDesiredBitrate: 0,
            rtcSentDesiredBitrateTotal: 0,
            rtcSentUsedCodec: null
          })).reduce(_v3, {}),
          _v5 = Object.entries(_v1.reduce((_v0, _v1) => (_v0.rtcSentAudioBitrate += _v1.rtcSentAudioBitrate || 0, _v0.rtcSentAudioVolume += _v1.rtcSentAudioVolume || 0, _v0.rtcSentAudioCodec = _v1.rtcSentAudioCodec, _v0), {
            rtcSentAudioBitrate: 0,
            rtcSentAudioVolume: 0
          })).reduce(_v3, {}),
          _v6 = Object.entries(_v2.reduce((_v0, _v1) => (_v0.rtcSentScreenBitrate += _v1.rtcSentScreenBitrate || 0, _v0.rtcSentScreenPixels += _v1.rtcSentScreenPixels || 0, _v0.rtcSentScreenFps += _v1.rtcSentScreenFps || 0, _v0), {
            rtcSentScreenBitrate: 0,
            rtcSentScreenPixels: 0,
            rtcSentScreenFps: 0
          })).reduce(_v3, {}),
          _v7 = this.client.localTracks.find(_v0 => _v0.trackMediaType === _v115.ETrackKind.VIDEO),
          _v8 = _v7?.getMediaStreamTrack()?.getSettings(),
          _v9 = _v8?.frameRate,
          _v10 = _v8 ? _v8.width * _v8.height : null,
          _v11 = _v7 ? (0, _v84.getAgoraTrackEncoderConfig)(_v7) : null,
          _v12 = !!(_v9 && _v10 && (_v4.rtcSentFps < .9 * _v9 || _v4.rtcSentPixels < .9 * _v10)),
          _v13 = _v4.rtcSentUsedBitrate < _v11?.bitrateMin ? _v119.POOR_NETWORK : _v119.COMPUTE_LOW,
          {
            deviation: _v14,
            volatility: _v15
          } = _v120.getFpsSummaryStats(_v0.map(_v0 => _v0.rtcSentFps)),
          _v16 = _v7?.getTrackLabel(),
          _v17 = this.scope.queryDataSync({
            type: _v6.ELiveMediaQuery.CURRENT_LOCAL_VIDEO_CONFIG
          });
        return {
          ..._v4,
          ...(_v1.length ? _v5 : {}),
          ...(_v2.length ? _v6 : {}),
          rtcSentDesiredFramerate: _v9,
          rtcSentDesiredPixelCount: _v10,
          rtcSentFpsVolatility: _v15,
          rtcSentFpsDeviation: _v14,
          rtcSentState: _v12 ? _v13 : _v119.OK,
          rtcSentUsedStats: _v0.length,
          rtcSentUsedBlur: !!_v17?.data.isBlurred,
          rtcSentDevice: _v16 ? _v16.replace(_v82.liveMediaConfig.DEVICE_NAME_HASH_REGEX, "") : null
        };
      }
      return null;
    }
    measurePerformanceStats() {
      this.addReceivedStatRecord(this.collectReceivedStatsRecord()), this.addSentStatRecord(this.collectSentStatsRecord()), this.statsCollectedAt = Date.now();
    }
    async getPerformanceStats() {
      let _v0 = await this.getReceivedStatsSummary(),
        _v1 = await this.getSentStatsSummary();
      return {
        received: _v0,
        sent: _v1 ? {
          ..._v1,
          rtcRenderPreview: _v0 ? _v0.rtcRenderPreview : null,
          rtcRenderScreen: _v0 ? _v0.rtcRenderScreen : null,
          rtcRenderAgoraMedia: _v0 ? _v0.rtcRenderAgoraMedia : null,
          rtcRenderPixels: _v0 ? _v0.rtcRenderPixels : null,
          rtcReceivedBitrate: _v0 ? _v0.rtcReceivedBitrate : null,
          rtcRenderSources: _v0 ? _v0.rtcRenderSources : null
        } : null
      };
    }
    async reportPerformanceStats() {
      let _v0 = await this.getPerformanceStats();
      if (_v0.received && (0, _v19.trackLiveAction)("rtc_received_performance_measured", _v0.received), _v0.sent) switch ((0, _v19.trackLiveAction)("rtc_sent_performance_measured", _v0.sent), _v0.sent.rtcSentState) {
        case _v119.OK:
          this.statsSentOkReported += 1;
          break;
        case _v119.COMPUTE_LOW:
          this.statsSentComputeLowReported += 1;
          break;
        case _v119.POOR_NETWORK:
          this.statsSentPoorNetworkReported += 1;
      } else this.statsSentUnknownReported += 1;
      this.statsReportedAt = Date.now();
    }
  }
  (0, _v2._)([(0, _v3.Bind)()], _v120.prototype, "measurePerformanceStats", null), (0, _v2._)([(0, _v3.Bind)()], _v120.prototype, "getPerformanceStats", null), (0, _v2._)([(0, _v3.Bind)()], _v120.prototype, "reportPerformanceStats", null);
  class _v121 extends _v79.ContextManager {
    agoraSDK;
    mediaClient;
    screenClient;
    connections = null;
    codec;
    mediaMode;
    screenMode;
    isStatsCollectionEnabled;
    isDualStreamEnabled;
    isVolumeIndicatorEnabled;
    dualStreamConfig;
    remoteStreamFallbackType;
    log = new _v20.Logger("🍄AGCM");
    statsCollector = new _v120();
    audioSmoother = new _v116();
    mutex = new _v80.Mutex({
      name: "🍠AGCM MTX"
    });
    constructor(_v0) {
      if (super(), !_v0?.media?.codec || !_v0?.media?.mediaMode || !_v0?.media?.screenMode || _v0?.media?.remoteStreamFallbackType === void 0 || _v0?.media?.isDualStreamEnabled === void 0 || !_v0?.media?.dualStreamConfig) throw new _v13.LiveError("Agora manager init failed.", {
        data: _v0,
        code: _v9.ELiveErrorCode.INITIALIZATION
      });
      this.codec = _v0.media.codec, this.mediaMode = _v0.media.mediaMode, this.screenMode = _v0.media.screenMode, this.isDualStreamEnabled = _v0.media.isDualStreamEnabled, this.dualStreamConfig = _v0.media.dualStreamConfig, this.remoteStreamFallbackType = _v0.media.remoteStreamFallbackType, this.isStatsCollectionEnabled = !!_v0.media.isStatsCollectionEnabled, this.isVolumeIndicatorEnabled = !!_v0.media.isVolumeIndicatorEnabled;
    }
    onProvisionEnded() {
      return _v99(this);
    }
    async initializeRoomConfig() {
      return _v101(this);
    }
    canEstablishConnection() {
      let {
        isReady: _v0,
        isDestroyed: _v1,
        connectionConfig: _v2,
        mediaUid: {
          value: _v3,
          isLoading: _v4
        },
        mediaUid: {
          value: _v5
        }
      } = this.context;
      return !!(!_v1 && _v0 && _v2 && !_v3 && !_v5 && !_v4);
    }
    canPublishLocalMedia(_v0) {
      let {
        isReady: _v1,
        role: _v2,
        isDestroyed: _v3,
        isMediaJoined: _v4
      } = this.context;
      if (_v4) {
        if (_v3) this.log.info("[CPLM] Ignore media init, is destroyed");else if (_v1) {
          if (_v2 !== _v8.EClientRole.HOST) this.log.info("[CPLM] Ignore media init, is not host");else if ((0, _v12.isAgoraClientConnecting)(this.mediaClient)) this.log.info("[CPLM] Ignore media init, currently connecting");else if ((0, _v12.isAgoraClientDisconnected)(this.mediaClient)) this.log.info("[CPLM] Cannot publish on disconnected state");else {
            if (_v0.length) return !0;
            this.log.info("[CPLM] Skipping publishing tracks, no enabled/unpublished supplied:", _v0);
          }
        } else this.log.info("[CPLM] Ignore media init, is not ready now");
      } else this.log.info("[CPLM] Ignore media init, is not joined");
      return !1;
    }
    canPublishLocalScreen(_v0) {
      let {
        isReady: _v1,
        role: _v2,
        isDestroyed: _v3,
        isScreenJoined: _v4
      } = this.context;
      if (_v4) {
        if (_v3) this.log.info("Ignore screen init, connection destroyed");else if (_v1) {
          if (_v0) {
            if (_v2 !== _v8.EClientRole.HOST) this.log.info("Ignore screen init, is not host");else if (this.screenClient.localTracks.length) this.log.info("Ignore screen init, already published to Agora");else if ((0, _v12.isAgoraClientConnecting)(this.screenClient)) this.log.info("Ignore screen init, currently connecting");else {
              if (!(0, _v12.isAgoraClientDisconnected)(this.screenClient)) return !0;
              this.log.info("Cannot publish screen on disconnected state");
            }
          } else this.log.info("Ignore screen init, no local screen found:", _v0);
        } else this.log.info("Ignore screen init, is not ready now");
      } else this.log.info("Ignore screen init, is not joined");
      return !1;
    }
    async startAgoraMediaConnection(_v0 = 0) {
      return _v86(this, _v0);
    }
    async startAgoraScreenConnection() {
      return _v112(this);
    }
    async tryEstablishConnection() {
      if (this.canEstablishConnection()) return this.log.info("Establishing agora connection"), this.startAgoraMediaConnection(1);
    }
    async stopAgoraScreenConnection() {
      return (0, _v19.withLiveErrorTracking)(() => _v113(this), {
        category: _v18.ELiveErrorCategory.AGORA,
        method: "stopAgoraScreenConnection"
      });
    }
    async stopAgoraConnection() {
      return (0, _v19.withLiveErrorTracking)(() => _v109(this), {
        category: _v18.ELiveErrorCategory.AGORA,
        method: "stopAgoraConnection"
      });
    }
    async attemptToPublishLocalMedia() {
      return (0, _v19.withLiveErrorTracking)(() => _v91(this), () => ({
        category: _v18.ELiveErrorCategory.AGORA,
        method: "attemptToPublishLocalMedia",
        data: {
          info: _v107(this)
        }
      }));
    }
    async attemptToPublishScreen() {
      return (0, _v19.withLiveErrorTracking)(() => _v114(this), {
        category: _v18.ELiveErrorCategory.AGORA,
        method: "attemptToPublishScreen",
        data: {
          info: _v107(this)
        }
      });
    }
    async attemptToUnPublishConnectionTracks() {
      return (0, _v19.withLiveErrorTracking)(() => _v100(this), {
        category: _v18.ELiveErrorCategory.AGORA,
        method: "attemptToUnPublishConnectionTracks"
      });
    }
    async subscribeToUserMedia(_v0, _v1, _v2 = "call") {
      return (0, _v19.withLiveErrorTracking)(() => _v88(this, _v0, _v1), {
        category: _v18.ELiveErrorCategory.AGORA,
        method: "subscribeToUserMedia",
        data: () => ({
          reason: _v2,
          user: _v0,
          mediaType: _v1,
          info: _v107(this)
        })
      });
    }
    async unsubscribeFromUserMedia(_v0, _v1) {
      return (0, _v19.withLiveErrorTracking)(() => _v89(this, _v0, _v1), {
        category: _v18.ELiveErrorCategory.AGORA,
        method: "unsubscribeFromUserMedia",
        data: {
          user: _v0,
          info: _v107(this)
        }
      });
    }
    async changeRole(_v0, _v1 = "generic") {
      return (0, _v19.withLiveErrorTracking)(() => _v90(this, _v0, _v1), () => ({
        category: _v18.ELiveErrorCategory.AGORA,
        method: "changeRole",
        data: {
          nextRole: _v0,
          info: _v107(this)
        }
      }));
    }
    assertConnectionsInitialized() {
      if (!this.connections) throw new _v13.LiveError("Agora connections are not initialized.", {
        code: _v9.ELiveErrorCode.INITIALIZATION
      });
    }
    onAllowedRemoteGuestAdded(_v0) {
      let {
          roomParticipants: _v1,
          isDestroyed: _v2
        } = this.context,
        _v3 = _v0.data;
      if (!this.mediaClient || _v2) return;
      this.log.info("[ARGA] Attempting to subscribe to remote guest:", _v3?.id);
      let _v4 = (0, _v12.formatConnectionUidByType)(_v8.EAgoraConnectionType.GUEST, _v3.id),
        _v5 = (0, _v12.formatConnectionUidByType)(_v8.EAgoraConnectionType.GUEST_SCREEN, _v3.id),
        _v6 = _v1.find(_v0 => _v0.uid === _v4),
        _v7 = _v1.find(_v0 => _v0.uid === _v5);
      _v6 && (this.log.info("[ARGA] Subscribing to media user:", _v4, _v6.hasVideo, _v6.hasVideo), Promise.all([_v6.hasAudio ? this.subscribeToUserMedia(_v6, _v115.ETrackKind.AUDIO, "guest_added") : Promise.resolve(null), _v6.hasVideo ? this.subscribeToUserMedia(_v6, _v115.ETrackKind.VIDEO, "guest_added") : Promise.resolve(null)])), _v7?.hasVideo && this.subscribeToUserMedia(_v7, _v115.ETrackKind.VIDEO, "guest_added");
    }
    onAllowedRemoteGuestRemoved(_v0) {
      let {
          roomParticipants: _v1,
          isDestroyed: _v2
        } = this.context,
        _v3 = _v0.data;
      if (!this.mediaClient || _v2) return;
      let _v4 = (0, _v12.formatConnectionUidByType)(_v8.EAgoraConnectionType.GUEST, _v3.id),
        _v5 = (0, _v12.formatConnectionUidByType)(_v8.EAgoraConnectionType.GUEST_SCREEN, _v3.id),
        _v6 = _v1.find(_v0 => _v0.uid === _v4),
        _v7 = _v1.find(_v0 => _v0.uid === _v5);
      this.log.info("[S] Making sure agora media connections stopped for:", _v3), _v6 && (0, _v84.unsubscribeFromAllUserMedia)(this.mediaClient, _v6), _v7 && (0, _v84.unsubscribeFromAllUserMedia)(this.mediaClient, _v7);
    }
    onCurrentConnectionUidQueried() {
      return this.context.connectionConfig?.uid || null;
    }
    onCurrentConnectionMediaUidQueried() {
      return this.context.connectionConfig?.media.uid || null;
    }
    onCurrentConnectionScreenUidQueried() {
      return this.context.connectionConfig?.screen.uid || null;
    }
    onIsEventBroadcasterConnectionQueried() {
      let {
        mediaUid: {
          value: _v0
        }
      } = this.context;
      return String(_v0).startsWith(_v8.EAgoraConnectionType.BROADCASTER);
    }
    async onLocalMediaAccessDenied() {
      let {
        role: _v0
      } = this.context;
      if (_v0 === _v8.EClientRole.HOST && this.mediaClient && this.mediaClient.localTracks.length) {
        this.log.info("Local media degraded, stopping sending of it");
        try {
          await this.mediaClient.unpublish();
        } catch (_v0) {
          this.log.error("Failed to unpublish media on permissions deny:", _v0), (0, _v19.trackLiveError)(_v0, {
            category: _v18.ELiveErrorCategory.AGORA,
            method: "onLocalMediaAccessDenied",
            data: {
              info: _v107(this)
            }
          });
        }
      }
    }
    async onLocalMediaUpdated() {
      await this.attemptToPublishLocalMedia();
    }
    async onScreenMediaStarted() {
      await this.attemptToPublishScreen();
    }
    async onScreenMediaStopped() {
      let {
        isReady: _v0,
        isDestroyed: _v1,
        isScreenJoined: _v2
      } = this.context;
      if (!_v0 || _v1) return this.log.warn("Tried to stop screen when service is not allowed to");
      if (!_v2) return this.log.info("Unpublish screen ignored, room is not joined");
      if (!this.screenClient.localTracks.length) return this.log.info("Unpublish screen ignored, no tracks present");
      try {
        this.log.info("Unpublishing screen media"), await this.screenClient.unpublish(...this.screenClient.localTracks), this.log.info("Unpublished screen media");
      } catch (_v0) {
        this.log.error("Failed to un-publish screen media:", _v0), (0, _v19.trackLiveError)(_v0, {
          category: _v18.ELiveErrorCategory.AGORA,
          method: "onScreenMediaStopped",
          data: {
            info: _v107(this)
          }
        });
      }
    }
    onAgoraMediaQualityChangeRequired({
      data: {
        uid: _v0,
        quality: _v1
      }
    }) {
      return _v92(this, _v0, _v1);
    }
    onAgoraMediaBulkQualityChangeRequired({
      data: _v0
    }) {
      Object.entries(_v0).forEach(([_v0, _v1]) => {
        _v92(this, _v0, _v1);
      });
    }
    onLiveEventEnded() {
      return _v99(this);
    }
    async onScreenMediaStartRequired() {
      let {
        isReady: _v0,
        role: _v1,
        isDestroyed: _v2
      } = this.context;
      if (!_v0 || _v2) return this.log.error("Tried to share screen when service is not allowed to");
      if (_v1 !== _v8.EClientRole.HOST) return this.log.error("Tried to share screen when role is admin");
      try {
        this.log.info("Starting screen connection on external requirement"), await this.startAgoraScreenConnection();
      } catch (_v0) {
        this.log.error("Failed to start screen media:", _v0), (0, _v19.trackLiveError)(_v0, {
          category: _v18.ELiveErrorCategory.AGORA,
          method: "onScreenMediaStartRequired",
          data: {
            info: _v107(this)
          }
        });
      }
    }
    async onScreenMediaStopRequired() {
      try {
        await this.stopAgoraScreenConnection();
      } catch (_v0) {
        this.log.error("Failed to stop screen connection on screen stop requirement");
      }
    }
    onMediaMuteStateChange() {
      return this.attemptToPublishLocalMedia();
    }
    onLocalTrackDisposed(_v0) {
      return _v111(this, _v0.data);
    }
    async onAgoraLoaded(_v0) {
      if (this.agoraSDK = _v0.data.agoraSDK, this.IS_DISPOSED || this.context.isDestroyed) return this.log.info("Cancel init process, already destroyed");
      try {
        _v98(this), _v102(this), await this.tryEstablishConnection();
      } catch (_v0) {
        (0, _v19.trackLiveError)(_v0, {
          category: _v18.ELiveErrorCategory.AGORA,
          method: "onAgoraLoaded"
        });
      }
    }
    async onComposerSessionReady({
      data: {
        metadata: _v0
      }
    }) {
      this.IS_DISPOSED || (this.connections = {
        getRtcCredentials: _v0.connections.rtc
      }, await this.initializeRoomConfig());
    }
  }
  (0, _v2._)([(0, _v79.OnSignal)(_v7.EAgoraSignal.ALLOWED_REMOTE_GUEST_ADDED)], _v121.prototype, "onAllowedRemoteGuestAdded", null), (0, _v2._)([(0, _v79.OnSignal)(_v7.EAgoraSignal.ALLOWED_REMOTE_GUEST_REMOVED)], _v121.prototype, "onAllowedRemoteGuestRemoved", null), (0, _v2._)([(0, _v79.OnQuery)(_v6.ELiveConnectionQuery.CURRENT_CONNECTION_UID)], _v121.prototype, "onCurrentConnectionUidQueried", null), (0, _v2._)([(0, _v79.OnQuery)(_v6.ELiveConnectionQuery.CURRENT_CONNECTION_MEDIA_UID)], _v121.prototype, "onCurrentConnectionMediaUidQueried", null), (0, _v2._)([(0, _v79.OnQuery)(_v6.ELiveConnectionQuery.CURRENT_CONNECTION_SCREEN_UID)], _v121.prototype, "onCurrentConnectionScreenUidQueried", null), (0, _v2._)([(0, _v79.OnQuery)(_v6.ELiveConnectionQuery.IS_EVENT_BROADCASTER_CONNECTION)], _v121.prototype, "onIsEventBroadcasterConnectionQueried", null), (0, _v2._)([(0, _v79.OnSignal)(_v7.ELiveMediaSignal.LOCAL_MEDIA_ACCESS_DENIED)], _v121.prototype, "onLocalMediaAccessDenied", null), (0, _v2._)([(0, _v79.OnSignal)(_v7.ELiveMediaSignal.LOCAL_MEDIA_INITIALIZED)], _v121.prototype, "onLocalMediaUpdated", null), (0, _v2._)([(0, _v79.OnSignal)(_v7.ELiveMediaSignal.SCREEN_MEDIA_STARTED)], _v121.prototype, "onScreenMediaStarted", null), (0, _v2._)([(0, _v79.OnSignal)(_v7.ELiveMediaSignal.SCREEN_MEDIA_STOPPED)], _v121.prototype, "onScreenMediaStopped", null), (0, _v2._)([(0, _v79.OnSignal)(_v7.EAgoraSignal.AGORA_MEDIA_QUALITY_CHANGE_REQUIRED)], _v121.prototype, "onAgoraMediaQualityChangeRequired", null), (0, _v2._)([(0, _v79.OnSignal)(_v7.EAgoraSignal.AGORA_MEDIA_BULK_QUALITY_CHANGE_REQUIRED)], _v121.prototype, "onAgoraMediaBulkQualityChangeRequired", null), (0, _v2._)([(0, _v79.OnSignal)(_v7.ELiveSignal.LIVE_EVENT_ENDED), (0, _v79.OnSignal)(_v7.EPageSignal.PAGE_INACTIVE)], _v121.prototype, "onLiveEventEnded", null), (0, _v2._)([(0, _v79.OnSignal)(_v7.ELiveMediaSignal.SCREEN_MEDIA_START_REQUIRED)], _v121.prototype, "onScreenMediaStartRequired", null), (0, _v2._)([(0, _v79.OnSignal)(_v7.ELiveMediaSignal.SCREEN_MEDIA_STOP_REQUIRED)], _v121.prototype, "onScreenMediaStopRequired", null), (0, _v2._)([(0, _v79.OnSignal)(_v7.ELiveMediaSignal.LOCAL_TRACK_UPDATED)], _v121.prototype, "onMediaMuteStateChange", null), (0, _v2._)([(0, _v79.OnSignal)(_v7.ELiveMediaSignal.LOCAL_TRACK_DISPOSED)], _v121.prototype, "onLocalTrackDisposed", null), (0, _v2._)([(0, _v79.OnSignal)(_v7.EDependencySignal.AGORA_DEPENDENCIES_LOADED)], _v121.prototype, "onAgoraLoaded", null), (0, _v2._)([(0, _v79.OnSignal)(_v7.ELiveSignal.COMPOSER_SESSION_READY)], _v121.prototype, "onComposerSessionReady", null), _v0.s(["AbstractAgoraManager", 0, _v121], 0);
}