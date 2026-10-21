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
  function _v15(_v0) {
    let _v1 = -1;
    for (let _v0 of _v0) if (_v0.meta?.isScheduled) _v1 += 1;else break;
    return _v1;
  }
  function _v16(_v0, _v1) {
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
  }, "findFirstOfTypeGraphics", 0, function (_v0, _v1) {
    return _v1 && _v0 && Object.values(_v1.graphics || {}).find(_v0 => _v0.type === _v0) || null;
  }, "findGraphicBySourceId", 0, function (_v0, _v1) {
    return _v1 && _v0 && Object.values(_v1.graphics || {}).find(_v0 => _v0.data?.sourceId === _v0) || null;
  }, "findGraphicsByType", 0, function (_v0, _v1) {
    return _v1 && _v1.graphics ? Object.values(_v1.graphics).filter(_v0 => _v0.type === _v0) : [];
  }, "findIndexPositionedGraphics", 0, function (_v0) {
    return _v0 && _v0.graphics ? Object.values(_v0.graphics).filter(_v0 => _v4.graphicsConfig.SCENE.CONTROLS.INDEXED_POSITION_ALLOWED.includes(_v0.type)) : [];
  }, "findLastScheduledIndex", 0, _v15, "findPipDescriptorInScene", 0, function (_v0) {
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
    let _v1 = _v15(_v0);
    return -1 === _v1 ? _v0 : _v0.slice(_v1 + 1);
  }, "pickNewSceneBackgroundForIndex", 0, function (_v0, _v1, _v2) {
    let _v3 = _v16(_v0, _v1),
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
    let _v1 = _v15(_v0);
    return -1 === _v1 ? [] : _v0.slice(0, _v1 + 1);
  }, "pickSortedScenesList", 0, _v16], 0);
  var _v17 = _v0.i(0);
  async function _v18(_v0, _v1) {
    _v0.assertIsInitialized(), _v0.assertCanEdit();
    let _v2 = _v1.filter(_v0 => null !== _v0);
    if (_v2.length) return _v0.log.info("Run scene transaction operations:", _v2.length), (0, _v17.batchedDatabaseUpdate)(_v0.firebase, _v0.rootRef, _v1);
    _v0.log.info("Skip transaction");
  }
  _v0.s(["runBatchedSceneUpdate", 0, _v18], 0);
}