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
    _v10 = _v0.i(0);
  function _v11({
    speakerPosition: _v0 = {
      ..._v4.graphicsConfig.GRAPHICS_POSITIONING.SCREEN_SPEAKER_POSITION
    },
    guestLabelsVisible: _v1 = !1,
    guestLabelsVisibleAt: _v2 = 0,
    media: _v3 = {
      status: _v7.EMediaStatus.PAUSE
    },
    layoutType: _v4 = null,
    isScheduled: _v5 = null,
    isTemplateBased: _v6 = null,
    background: _v7 = null
  } = {}) {
    return {
      speakerPosition: _v0,
      guestLabelsVisible: _v1,
      guestLabelsVisibleAt: _v2,
      media: _v3,
      layoutType: _v4,
      isScheduled: _v5,
      isTemplateBased: _v6,
      background: _v7
    };
  }
  function _v12({
    status: _v0 = _v7.EMediaStatus.PAUSE,
    startedAt: _v1 = null,
    offset: _v2 = null,
    loop: _v3 = null,
    volume: _v4 = null,
    nextOnEOF: _v5 = null
  }) {
    return {
      status: _v0,
      startedAt: _v1,
      offset: _v2,
      loop: _v3,
      volume: _v4,
      nextOnEOF: _v5
    };
  }
  function _v13(_v0, _v1) {
    let _v2 = 0,
      _v3 = {};
    return _v1.filter(_v0 => _v0 && _v0[_v0]).forEach(_v0 => {
      _v3[_v0] = _v2, _v2 += 1;
    }, {}), Object.values(_v0).forEach(_v0 => {
      _v0.id && "number" != typeof _v3[_v0.id] && (_v3[_v0.id] = _v2, _v2 += 1);
    }), _v3;
  }
  function _v14(_v0, _v1) {
    let _v2 = _v13(_v0, _v1 ?? []),
      _v3 = [],
      _v4 = [];
    return Object.values(_v0).forEach(_v0 => "number" == typeof _v2[_v0.id] ? _v4.push(_v0.id) : _v3.push(_v0.id)), _v4.sort((_v0, _v1) => _v2[_v0] - _v2[_v1]).concat(_v3);
  }
  function _v15(_v0, _v1) {
    return _v1 && _v0 && Object.values(_v1.graphics || {}).find(_v0 => _v0.type === _v0) || null;
  }
  function _v16(_v0) {
    let _v1 = -1;
    for (let _v0 of _v0) if (_v0.meta?.isScheduled) _v1 += 1;else break;
    return _v1;
  }
  function _v17(_v0, _v1) {
    return _v14(_v0, _v1 ?? []).map(_v0 => _v0[_v0]).filter(Boolean);
  }
  _v0.s(["canBeScheduledScene", 0, function (_v0) {
    let _v1 = Object.values(_v0.graphics || {});
    if (_v0.meta?.layoutType) return !1;
    for (let _v0 of _v1) if (!_v4.graphicsConfig.SCENE.CONTROLS.SCHEDULED_PLAYBACK_ALLOWED.includes(_v0.type)) return !1;
    return !0;
  }, "copyScene", 0, function (_v0, _v1 = {}) {
    let _v2 = (0, _v2.default)(_v0),
      _v3 = _v2.meta?.isScheduled === !0,
      _v4 = _v2.meta?.media;
    return _v4 && _v2.meta && (_v2.meta.media = _v12({
      status: _v7.EMediaStatus.PAUSE,
      nextOnEOF: !!_v3 || _v4.nextOnEOF,
      loop: _v3 ? null : _v4.loop
    })), Object.assign(_v2, _v1);
  }, "createScene", 0, function ({
    name: _v0 = _v5.T_SCENE,
    id: _v1,
    graphics: _v2 = {},
    meta: _v3 = _v11()
  } = {}) {
    return {
      id: _v1 || (0, _v3.v4)(),
      name: _v0,
      graphics: _v2,
      meta: _v3,
      pushedAt: 0
    };
  }, "createSceneMediaMetadata", 0, _v12, "createSceneMetadata", 0, _v11, "findAgoraSourceInScene", 0, function (_v0, _v1) {
    if (!_v1 || !_v0) return null;
    let _v2 = String(_v0).startsWith(_v6.EAgoraConnectionType.BROADCASTER) ? _v6.EAgoraConnectionType.BROADCASTER : _v0;
    return Object.values(_v1.graphics || {}).find(_v0 => _v0.type === _v7.EGraphicsDescriptorType.AGORA_STREAM && _v0.data.sourceId === _v2) || null;
  }, "findFirstOfTypeGraphics", 0, _v15, "findGraphicBySourceId", 0, function (_v0, _v1) {
    return _v1 && _v0 && Object.values(_v1.graphics || {}).find(_v0 => _v0.data?.sourceId === _v0) || null;
  }, "findGraphicsByType", 0, function (_v0, _v1) {
    return _v1 && _v1.graphics ? Object.values(_v1.graphics).filter(_v0 => _v0.type === _v0) : [];
  }, "findIndexPositionedGraphics", 0, function (_v0) {
    return _v0 && _v0.graphics ? Object.values(_v0.graphics).filter(_v0 => _v4.graphicsConfig.SCENE.CONTROLS.INDEXED_POSITION_ALLOWED.includes(_v0.type)) : [];
  }, "findLastScheduledIndex", 0, _v16, "findPipDescriptorInScene", 0, function (_v0) {
    return !_v0 || !_v0.graphics || _v0.meta?.layoutType ? null : Object.values(_v0.graphics).find(_v0 => _v4.graphicsConfig.SCENE.INFO.PIP_TYPES.includes(_v0.type)) || null;
  }, "getCountOfGraphicsByType", 0, function (_v0, _v1) {
    return _v1 && _v0 ? Object.values(_v1.graphics || {}).reduce((_v0, _v1) => _v1.type === _v0 ? _v0 + 1 : _v0, 0) : 0;
  }, "getCurrentScenesOrder", 0, _v14, "getSceneOverlayColorNew", 0, function (_v0, _v1, _v2, _v3, _v4) {
    switch (!0) {
      case _v1:
        return _v10.INACTIVE_LAYOUT_COLOR;
      case _v2:
        return _v0 && !_v4 ? _v10.LIVE_LAYOUT_COLOR : _v10.FOCUSED_STATE_COLOR;
      case _v3:
        return _v10.WARNING_LAYOUT_COLOR;
      default:
        return _v10.NONE_LAYOUT_COLOR;
    }
  }, "getSceneThumbnailStatusLabel", 0, function (_v0, _v1, _v2, _v3) {
    if (_v1) {
      if (_v2 && !_v3) return _v5.T_RECORDING;
      if (_v0 && !_v3) return _v5.T_LIVE;
    }
    return "";
  }, "getScenesNewOrder", 0, function (_v0, _v1, _v2, _v3) {
    let _v4 = _v13(_v0, _v1 ?? []),
      _v5 = Object.values(_v0).sort((_v0, _v1) => _v4[_v0.id] - _v4[_v1.id]),
      _v6 = _v3 ? _v5.findIndex(_v0 => _v0.id === _v3) : null;
    return _v2.forEach(_v0 => {
      if (_v0.meta?.isScheduled) {
        if (_v6) _v5.splice(_v6 + 1, 0, _v0);else {
          let _v0 = (0, _v9.findLastIndex)(_v5, _v0 => !!_v0.meta?.isScheduled);
          _v5.splice(_v0 + 1, 0, _v0);
        }
      } else _v5.push(_v0);
    }), _v5.map(_v0 => _v0.id);
  }, "isSceneValidForScheduledPlayback", 0, function (_v0) {
    return !!(_v0.meta?.isScheduled && Object.values(_v0.graphics || {}).some(_v0 => _v0.type === _v7.EGraphicsDescriptorType.AGORA_MEDIA));
  }, "isScreenSharingInScene", 0, function (_v0, _v1) {
    if (!_v0 || !_v1) return !1;
    let [_v2, _v3] = _v1;
    return Object.values(_v0.graphics || {}).some(_v0 => {
      if (_v0.type !== _v7.EGraphicsDescriptorType.AGORA_STREAM || !_v0.data.sourceId) return !1;
      {
        let _v0 = (0, _v8.parseAgoraConnectionDetails)(_v0.data.sourceId);
        return !!_v0 && (_v2 === _v6.EAgoraConnectionType.BROADCASTER_SCREEN ? _v0[0] === _v6.EAgoraConnectionType.BROADCASTER : _v0[1] === _v3);
      }
    });
  }, "moveSceneToNewPosition", 0, function (_v0, _v1, _v2) {
    if (_v1 === _v2) return !1;
    let _v3 = [..._v0],
      _v4 = _v3.indexOf(_v1);
    -1 !== _v4 && _v3.splice(_v4, 1);
    let _v5 = null === _v2 ? -1 : _v3.indexOf(_v2);
    return -1 === _v5 && _v2 || _v3.splice(_v5 + 1, 0, _v1), _v3;
  }, "normalizeSceneOrder", 0, _v13, "pickLiveScenesList", 0, function (_v0) {
    let _v1 = _v16(_v0);
    return -1 === _v1 ? _v0 : _v0.slice(_v1 + 1);
  }, "pickNewSceneBackgroundForIndex", 0, function (_v0, _v1, _v2) {
    let _v3 = _v17(_v0, _v1),
      _v4 = _v3[(0, _v1.default)(_v2 - 1, -1, _v3.length - 1)];
    return _v4?.meta?.background ?? null;
  }, "pickNextSceneId", 0, function (_v0, _v1, _v2) {
    let _v3;
    if (!_v1) return null;
    let _v4 = _v0.findIndex(_v0 => _v0 === _v1),
      _v5 = _v0.filter(_v0 => _v0 !== _v1);
    if (!_v5.length) return null;
    let _v6 = _v5.length - 1;
    switch (_v2) {
      case _v7.ENextScenePosition.FIRST:
        _v3 = 0;
        break;
      case _v7.ENextScenePosition.PREVIOUS:
        _v3 = _v4 - 1;
        break;
      case _v7.ENextScenePosition.NEXT:
        _v3 = _v4;
        break;
      case _v7.ENextScenePosition.LAST:
        _v3 = _v6;
    }
    return _v5[(0, _v1.default)(_v3, 0, _v6)];
  }, "pickScheduledScenesList", 0, function (_v0) {
    let _v1 = _v16(_v0);
    return -1 === _v1 ? [] : _v0.slice(0, _v1 + 1);
  }, "pickSortedScenesList", 0, _v17], 0);
  var _v18 = _v0.i(0);
  async function _v19(_v0, _v1) {
    _v0.assertIsInitialized(), _v0.assertCanEdit();
    let _v2 = _v1.filter(_v0 => null !== _v0);
    if (_v2.length) return _v0.log.info("Run scene transaction operations:", _v2.length), (0, _v18.batchedDatabaseUpdate)(_v0.firebase, _v0.rootRef, _v1);
    _v0.log.info("Skip transaction");
  }
  _v0.s(["runBatchedSceneUpdate", 0, _v19], 0);
  var _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0);
  let _v27 = (0, _v26.createLiveSchemaEventFactory)("vimeo.simple_live_images", 8, () => ({
    ..._v25.liveTrackingConfig.BIG_PICTURE_LIVE_SCHEMA_BASE,
    hasPrimaryText: null,
    hasSecondaryText: null
  }));
  function _v28() {
    return _v27("show_image_in_scene");
  }
  function _v29() {
    return _v27("hide_image_from_scene");
  }
  function _v30() {
    return _v27("remove_image_from_scene");
  }
  function _v31(_v0) {
    return _v27("add_image_to_scene", _v0);
  }
  _v0.s(["trackAddImageToScene", 0, _v31, "trackClickAddImage", 0, function () {
    return _v27("click_add_image");
  }, "trackHideImage", 0, _v29, "trackOpenImageEditModal", 0, function () {
    return _v27("open_image_edit_modal");
  }, "trackRemoveImageFromEvent", 0, function () {
    return _v27("remove_image_from_event");
  }, "trackRemoveImageFromScene", 0, _v30, "trackSaveImage", 0, function (_v0) {
    return _v27("save_image", _v0);
  }, "trackShowImage", 0, _v28], 0);
  let _v32 = (0, _v26.createLiveSchemaEventFactory)("vimeo.simple_live_lower_thirds", 7, () => ({
    ..._v25.liveTrackingConfig.BIG_PICTURE_LIVE_SCHEMA_BASE,
    hasPrimaryText: null,
    hasSecondaryText: null,
    isInProgram: null,
    lowerThirdType: null
  }));
  function _v33() {
    return _v32("remove_other_lower_third_from_scene");
  }
  function _v34(_v0) {
    return _v32("add_other_lower_third_to_scene", _v0);
  }
  function _v35(_v0) {
    return _v32("show_other_lower_third_in_scene", _v0);
  }
  function _v36() {
    return _v32("hide_other_lower_third_in_scene");
  }
  _v0.s(["trackAddOtherLowerThirdToScene", 0, _v34, "trackClickAddOtherLowerThird", 0, function () {
    return _v32("click_add_other_lower_third");
  }, "trackHideOtherLowerThirdInScene", 0, _v36, "trackOpenGuestLowerThirdEditModal", 0, function () {
    return _v32("open_guest_lower_third_edit_modal");
  }, "trackOpenOtherLowerThirdEditModal", 0, function () {
    return _v32("open_other_lower_third_edit_modal");
  }, "trackRemoveOtherLowerThirdFromEvent", 0, function () {
    return _v32("remove_other_lower_third_from_event");
  }, "trackRemoveOtherLowerThirdFromScene", 0, _v33, "trackSaveOtherLowerThird", 0, function (_v0) {
    return _v32("save_other_lower_third", _v0);
  }, "trackShowOtherLowerThirdInScene", 0, _v35, "trackUploadLowerThirdImage", 0, function () {
    return _v32("upload_lower_third_image");
  }], 0);
  var _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0);
  let _v40 = {
      addedByDragging: null,
      videoTitle: null,
      isSpeakerPresent: null,
      isSimulive: null
    },
    _v41 = (0, _v26.createLiveSchemaEventFactory)("vimeo.simple_live_media_playback", 13, () => ({
      ..._v25.liveTrackingConfig.BIG_PICTURE_LIVE_SCHEMA_BASE,
      ..._v40,
      isSimulive: _v25.liveTrackingConfig.BIG_PICTURE_SCHEME_ADDITIONAL.isSimulive
    }));
  function _v42() {
    return _v41("remove_video_from_scene");
  }
  function _v43(_v0) {
    return _v41("add_video_to_scene", _v0);
  }
  function _v44({
    status: _v0,
    location: _v1,
    element: _v2,
    copy: _v3
  }) {
    let _v4 = (0, _v39.inline)(() => "play" === _v0 ? "vimeo.browser_studio_play_media_on_stage" : "play_custom" === _v0 ? "vimeo.browser_studio_play_media_from_custom_place" : "vimeo.browser_studio_pause_media_on_stage");
    (0, _v26.createBPv2EventFactory)(_v4, -1, () => ({
      ...(0, _v38.newTeamCtx)(),
      ...(0, _v38.newWebCtx)(),
      ...(0, _v38.newActionCtx)("click"),
      ...(0, _v38.newLiveCtx)({
        live_feature: null
      }),
      ...(0, _v38.newProductAnalyticsCtx)({
        product: "events",
        feature: "media",
        location: _v1,
        element: _v2,
        copy: _v3,
        device_type: _v37.browserConfig.BROWSER?.isMobile ? "mobile" : "desktop"
      })
    }), () => void 0)();
  }
  _v0.s(["trackAddVideoToEvent", 0, function () {
    return _v41("add_video_to_event");
  }, "trackAddVideoToScene", 0, _v43, "trackCancelAddingVideo", 0, function () {
    return _v41("click_cancel_adding_video");
  }, "trackChangeSoundVolume", 0, function () {
    return _v41("change_sound_volume");
  }, "trackChooseVideoTransition", 0, function (_v0) {
    return _v41(`choose_video_transition_${_v0}`);
  }, "trackClickAddVideo", 0, function () {
    return _v41("click_add_video");
  }, "trackClickVideoTransition", 0, function () {
    return _v41("click_video_transition");
  }, "trackExpandVideoForLocalPlayback", 0, function () {
    return _v41("expand_video");
  }, "trackOpenVideoManagementBox", 0, function () {
    return _v41("open_video_management_box");
  }, "trackPlayVideoFromCustomPlace", 0, function () {
    _v44({
      status: "play_custom",
      location: "content_area",
      element: "icon",
      copy: null
    });
  }, "trackPlayVideoInProgram", 0, function () {
    return _v41("play_video_in_program");
  }, "trackRemoveVideoFromEvent", 0, function () {
    return _v41("remove_video_from_event");
  }, "trackRemoveVideoFromScene", 0, _v42, "trackSelectVideo", 0, function () {
    return _v41("select_video");
  }, "trackStopProgramVideo", 0, function () {
    return _v41("stop_program_video");
  }, "trackToggleVideoState", 0, _v44], 0);
  let _v45 = (0, _v26.createLiveSchemaEventFactory)("vimeo.simple_live_slides", 6, () => ({
    ..._v25.liveTrackingConfig.BIG_PICTURE_LIVE_SCHEMA_BASE,
    errorReason: null,
    errorDetails: null,
    uploadState: null
  }));
  function _v46(_v0) {
    return _v45("add_slides_to_scene", _v0);
  }
  function _v47() {
    return _v45("remove_slides_from_scene");
  }
  _v0.s(["trackAddSlidesToScene", 0, _v46, "trackCancelSlidesUploading", 0, function (_v0) {
    return _v45("cancel_slides_uploading", _v0);
  }, "trackClickAddSlides", 0, function () {
    return _v45("click_add_slides");
  }, "trackRemoveSlidesFromEvent", 0, function () {
    return _v45("remove_slides_from_event");
  }, "trackRemoveSlidesFromScene", 0, _v47, "trackShowErrorStates", 0, function (_v0) {
    return _v45("show_error_states", _v0);
  }], 0), _v0.s(["trackAddGraphicToScene", 0, function ({
    scene: _v0,
    graphicType: _v1,
    options: _v2 = {
      isDragged: !1,
      location: null
    }
  }) {
    switch (_v1) {
      case _v7.EGraphicsDescriptorType.POLL:
        (0, _v22.trackAddPollToScene)(_v2.location);
        break;
      case _v7.EGraphicsDescriptorType.QNA:
        (0, _v23.trackAddQnaToScene)();
        break;
      case _v7.EGraphicsDescriptorType.LOWER_THIRD:
        _v34({
          location: _v2.location
        });
        break;
      case _v7.EGraphicsDescriptorType.IMAGE:
        _v31({
          location: _v2.location
        });
        break;
      case _v7.EGraphicsDescriptorType.AGORA_STREAM:
        (0, _v24.trackAddSpeakerToScene)({
          addedByDragging: _v2.isDragged,
          isVideoPresent: !!_v15(_v7.EGraphicsDescriptorType.AGORA_MEDIA, _v0),
          location: _v2.location
        });
        break;
      case _v7.EGraphicsDescriptorType.AGORA_MEDIA:
        _v43({
          addedByDragging: _v2.isDragged,
          isSpeakerPresent: !!_v15(_v7.EGraphicsDescriptorType.AGORA_STREAM, _v0),
          location: _v2.location
        });
        break;
      case _v7.EGraphicsDescriptorType.SLIDES:
        _v46({
          location: _v2.location
        });
    }
  }, "trackHideGraphicInScene", 0, function ({
    graphicType: _v0,
    isModerated: _v1 = !1
  }) {
    switch (_v0) {
      case _v7.EGraphicsDescriptorType.QNA:
        (0, _v23.trackHideQuestion)(_v1, "scene_preview");
        break;
      case _v7.EGraphicsDescriptorType.LOWER_THIRD:
        _v36();
        break;
      case _v7.EGraphicsDescriptorType.POLL:
        (0, _v22.trackHidePollInScene)("scene_preview");
        break;
      case _v7.EGraphicsDescriptorType.IMAGE:
        _v29();
    }
  }, "trackRemoveGraphicFromScene", 0, function (_v0) {
    switch (_v0) {
      case _v7.EGraphicsDescriptorType.POLL:
        (0, _v22.trackRemovePollFromScene)();
        break;
      case _v7.EGraphicsDescriptorType.QNA:
        (0, _v23.trackRemoveQnaFromScene)();
        break;
      case _v7.EGraphicsDescriptorType.LOWER_THIRD:
        _v33();
        break;
      case _v7.EGraphicsDescriptorType.IMAGE:
        _v30();
        break;
      case _v7.EGraphicsDescriptorType.AGORA_STREAM:
        (0, _v24.trackRemoveSpeakerFromScene)();
        break;
      case _v7.EGraphicsDescriptorType.SLIDES:
        _v47();
        break;
      case _v7.EGraphicsDescriptorType.AGORA_MEDIA:
        _v42();
    }
  }, "trackShowGraphicInScene", 0, function ({
    isInProgram: _v0,
    graphicType: _v1,
    isModerated: _v2 = !1,
    pollState: _v3 = _v20.EPollState.DRAFT,
    lowerThirdType: _v4 = _v21.ELowerThirdType.OTHER,
    location: _v5 = "overlays_tab"
  }) {
    switch (_v1) {
      case _v7.EGraphicsDescriptorType.POLL:
        _v3 === _v20.EPollState.CLOSED ? (0, _v22.trackShowPollResultsInScene)(_v0, _v5) : (0, _v22.trackShowPollQuestionInScene)(_v0, _v5);
        break;
      case _v7.EGraphicsDescriptorType.QNA:
        (0, _v23.trackShowQuestion)(_v2, _v0, _v5);
        break;
      case _v7.EGraphicsDescriptorType.LOWER_THIRD:
        _v35({
          isInProgram: _v0,
          lowerThirdType: _v4
        });
        break;
      case _v7.EGraphicsDescriptorType.IMAGE:
        _v28();
    }
  }], 0);
}