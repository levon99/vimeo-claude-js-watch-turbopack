{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  function _v5(_v0) {
    let _v1 = Object.values(_v0).filter(_v0 => _v0.type === _v2.EGraphicsDescriptorType.AGORA_STREAM),
      _v2 = {},
      _v3 = function (_v0) {
        let _v1,
          _v2,
          _v3,
          _v4,
          _v5,
          _v6,
          _v7,
          {
            leftOffset: _v8,
            topOffset: _v9
          } = (_v2 = Math.sqrt(_v1 = (0, _v4.nearestHigherSquare)(_v0)), {
            topOffset: (_v3 = _v1 - _v0) / _v2 >= 1 ? 100 / (2 * _v2) : 0,
            leftOffset: _v3 && _v3 % _v2 ? 100 / (2 * _v2 / (_v3 % _v2)) : 0
          }),
          {
            rowCount: _v10,
            columnCount: _v11,
            width: _v12,
            height: _v13
          } = (_v4 = Math.ceil(Math.sqrt(_v0)), _v5 = Math.ceil(_v0 / _v4), _v6 = +(100 / _v4).toFixed(2), _v7 = +(100 / _v4).toFixed(2), {
            columnCount: _v4,
            rowCount: _v5,
            width: _v6,
            height: _v7
          }),
          _v14 = [],
          _v15 = 0,
          _v16 = 0;
        for (let _v0 = 1; _v0 <= _v0; _v0++) {
          let _v0 = _v15 + 1 === _v10,
            _v1 = _v15 % _v11 * _v13 + _v9,
            _v2 = _v16 % _v11 * _v12 + (_v0 ? _v8 : 0);
          _v0 % _v11 == 0 && _v15++, _v16++, _v14.push({
            align: "topLeft",
            top: _v1,
            left: _v2,
            width: _v12,
            height: _v13,
            z: _v1.graphicsConfig.GRAPHICS_POSITIONING.Z_INDEX.AGORA_STREAM,
            visible: !0,
            guestLabelScale: 1 / Math.max(_v10, _v11)
          });
        }
        return _v14;
      }(_v1.length);
    return _v1.forEach((_v0, _v1) => {
      _v2[_v0.data.sourceId] = _v3[_v1];
    }), _v2;
  }
  function _v6(_v0, _v1) {
    let _v2 = _v0.sources[_v1];
    if (!_v2) throw new _v3.LiveError("Source position is out of bounds.", {
      data: {
        sourcePosition: _v2,
        index: _v1,
        sources: _v0.sources
      }
    });
    return {
      index: _v1,
      width: _v2.w,
      height: _v2.h,
      top: _v2.y,
      left: _v2.x,
      z: _v2.e ? _v1.graphicsConfig.GRAPHICS_POSITIONING.Z_INDEX.CUSTOM_SLOT_ELEVATED : _v1.graphicsConfig.GRAPHICS_POSITIONING.Z_INDEX.CUSTOM_SLOT,
      guestLabelScale: _v2.w / 100
    };
  }
  _v0.s(["getGuestPresetPositions", 0, _v5, "getLayoutPositionFromDescriptor", 0, _v6, "rearrangeSourcesPositioning", 0, function (_v0) {
    let _v1 = _v5(_v0),
      _v2 = {};
    return Object.entries(_v0).forEach(([_v0, _v1]) => {
      _v1.type === _v2.EGraphicsDescriptorType.AGORA_STREAM && (_v2[_v0] = {
        ..._v1,
        position: _v1[_v0]
      });
    }), _v2;
  }], 0);
  var _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0);
  function _v12(_v0) {
    return _v0 === _v2.EGraphicsDescriptorType.QNA || _v0 === _v2.EGraphicsDescriptorType.POLL;
  }
  function _v13(_v0, _v1) {
    return !!_v1 && !!_v0 && Object.values(_v1.graphics || {}).some(_v0 => _v0.data?.sourceId === _v0);
  }
  function _v14(_v0, _v1) {
    return !!_v1 && Object.values(_v1.graphics || {}).some(_v0 => _v0.type === _v0);
  }
  function _v15(_v0, _v1) {
    let _v2 = {
      sourceId: _v1.sourceId,
      createdAt: _v1.createdAt ?? (0, _v11.getAbsoluteNow)(),
      visibleAt: _v1.visibleAt ?? 0
    };
    return _v0 === _v2.EGraphicsDescriptorType.SLIDES && (_v2.slideIndex = 0), _v2;
  }
  _v0.s(["canAddObjectToScene", 0, function (_v0, _v1, _v2) {
    if (_v0.meta?.layoutType && _v1.graphicsConfig.SCENE.CONTROLS.INDEXED_POSITION_ALLOWED.includes(_v1)) return !0;
    if (_v1 === _v2.EGraphicsDescriptorType.AGORA_STREAM) if (_v2) return !_v13(_v2, _v0);else return !1;
    return !_v14(_v1, _v0);
  }, "createDefaultScreenDescriptor", 0, function (_v0 = _v1.graphicsConfig.GRAPHICS_POSITIONING.DEFAULT_POSITION_FOR_TYPE(_v2.EGraphicsDescriptorType.AGORA_SCREEN)) {
    return {
      type: _v2.EGraphicsDescriptorType.AGORA_SCREEN,
      position: _v0,
      data: {
        visibleAt: 0,
        createdAt: 0,
        sourceId: "-"
      }
    };
  }, "createGraphicsDescriptor", 0, function ({
    graphicType: _v0,
    graphicId: _v1,
    layoutIndex: _v2,
    layoutId: _v3,
    at: _v4 = (0, _v11.getAbsoluteNow)()
  }) {
    let _v5 = _v1.graphicsConfig.GRAPHICS_POSITIONING.DEFAULT_POSITION_FOR_TYPE(_v0);
    if (_v3 && Number.isInteger(_v2)) {
      let _v0 = _v7.layoutsConfig.LAYOUTS[_v3];
      if (_v0 && _v2 < Object.values(_v0.sources).length) {
        let _v0 = _v6(_v0, _v2);
        _v5 = {
          ..._v5,
          ..._v0
        };
      } else throw new _v3.LiveError("Layout item descriptor requires correct inbound index.", {
        code: _v9.ELiveErrorCode.CORRUPTED_OBJECT,
        data: {
          graphicType: _v0,
          layoutId: _v3,
          layoutIndex: _v2
        }
      });
    }
    return {
      type: _v0,
      data: _v15(_v0, {
        sourceId: _v1,
        createdAt: _v4,
        visibleAt: _v5.visible ? _v4 : 0
      }),
      position: _v5
    };
  }, "createGraphicsDescriptorData", 0, _v15, "findConflictingGraphicsWithType", 0, function (_v0, _v1) {
    let _v2 = {
        ..._v1?.graphics
      },
      _v3 = _v1.graphicsConfig.GRAPHICS_CONFLICTING[_v0] || [];
    return (_v1?.meta?.guestLabelsVisible && (_v2[_v2.EGraphicsDescriptorType.GUEST_LOWER_THIRD] = {
      type: _v2.EGraphicsDescriptorType.GUEST_LOWER_THIRD,
      data: {
        sourceId: _v2.EGraphicsDescriptorType.GUEST_LOWER_THIRD,
        visibleAt: 0,
        createdAt: 0
      },
      position: _v1.graphicsConfig.GRAPHICS_POSITIONING.FULL_POSITION
    }), _v1.graphicsConfig.SCENE.CONTROLS.INDEXED_POSITION_ALLOWED.includes(_v0) && !_v1.graphicsConfig.SCENE.CONTROLS.CONFLICTING_ALLOWED) ? Object.values(_v2).filter(_v0 => !Number.isInteger(_v0.position.index) && _v3.includes(_v0.type)) : Object.values(_v2).filter(_v0 => _v3.includes(_v0.type));
  }, "getLowerThirdGraphicProps", 0, function (_v0, _v1, _v2, _v3, _v4, _v5) {
    return {
      descriptor: {
        data: {
          visibleAt: 0,
          createdAt: 0,
          sourceId: "-"
        },
        type: _v2.EGraphicsDescriptorType.LOWER_THIRD,
        position: _v3
      },
      object: {
        id: _v0,
        type: _v2.EGraphicsDescriptorType.LOWER_THIRD,
        createdAt: 0,
        line: _v1,
        subLine: _v2
      },
      theme: _v4,
      animation: _v5,
      fadeInDuration: 0,
      fadeOutDuration: 0
    };
  }, "hasIndexedSlotsInScene", 0, function (_v0) {
    if (!_v0) return !1;
    let _v1 = _v0.meta?.layoutType,
      _v2 = _v1 ? _v7.layoutsConfig.LAYOUTS[_v1] : null;
    if (!_v2) return !0;
    {
      let _v0 = Object.keys(_v2.sources).length;
      return Object.values(_v0.graphics || {}).reduce((_v0, _v1) => _v0 + +!!Number.isInteger(_v1.position.index), 0) < _v0;
    }
  }, "isAgoraConnectionInScene", 0, function (_v0, _v1) {
    return !!_v1 && !!_v0 && ((0, _v10.isAgoraConnectionType)(_v0, _v8.EAgoraConnectionType.MEDIA) ? _v14(_v2.EGraphicsDescriptorType.AGORA_MEDIA, _v1) : _v13((0, _v10.mapUidToGraphicsSource)(_v0), _v1));
  }, "isGraphicAlreadyInScene", 0, _v13, "isGraphicStale", 0, function (_v0, _v1) {
    return !!_v12(_v0.type) && !!_v0.roomId && !!_v1 && String(_v0.roomId) !== String(_v1);
  }, "isGraphicTypeAlreadyInScene", 0, _v14, "isGuestAlreadyInScene", 0, function (_v0, _v1) {
    return _v13(_v0 ? (0, _v10.formatConnectionUidByType)(_v8.EAgoraConnectionType.GUEST, _v0) : null, _v1);
  }, "isInteractionToolsGraphic", 0, _v12, "wrapGraphicsDescriptorsToSceneGraphicsList", 0, function (_v0) {
    return _v0.reduce((_v0, _v1) => (_v0[_v1.data.sourceId] = _v1, _v0), {});
  }], 0);
}