{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = (_v0, _v1, _v2) => {
    let _v3 = _v4.SNAP_THRESHOLD_PX / (60 * _v2);
    for (let _v0 = 0; _v0 < _v1.length; _v0++) {
      let {
        value: _v0
      } = _v1[_v0];
      if (_v0 - _v3 <= _v0 && _v0 >= _v0 || _v0 + _v3 >= _v0 && _v0 <= _v0) return {
        snapPoint: _v1[_v0],
        time: (0, _v3.toNearestFrame)(_v0)
      };
    }
    return {
      snapPoint: null,
      time: _v0
    };
  };
  _v0.s(["getCollisionElement", 0, (_v0, _v1, _v2, _v3, _v4, _v5) => {
    for (let _v0 = 0; _v0 < _v2.length; _v0++) {
      let {
        value: _v0,
        duration: _v1,
        ceId: _v2,
        layerId: _v3
      } = _v2[_v0];
      if (_v1 && _v2 && _v3) {
        let _v0 = 60 * _v0 * _v4,
          _v1 = (_v0 + _v1) * 60 * _v4;
        if (_v1 > _v0 && _v1 <= _v1 || _v0 >= _v0 && _v0 < _v1 || _v0 < _v0 && _v1 > _v1) {
          let _v0 = Math.max(0, _v0 - _v0) < Math.max(0, _v1 - _v1) ? -1 : 1;
          _v0 - _v0 <= .1 && -1 === _v5 && (_v0 = -1), _v1 - _v1 <= .1 && 1 === _v5 && (_v0 = 1);
          let _v1 = -1 === _v0 ? _v2[_v0] : {
            value: _v0 + _v1,
            type: _v5.SnapTimePointType.END,
            duration: _v1,
            ceId: _v2,
            layerId: _v3
          };
          return {
            snapPoint: _v1.value === _v3?.value ? _v3 : _v1,
            collisionProps: {
              layerId: _v3,
              elementId: _v2,
              elementOffset: _v0
            }
          };
        }
      }
    }
    return {
      snapPoint: null,
      collisionProps: null
    };
  }, "getSnappedPxValue", 0, (_v0, _v1, _v2) => {
    for (let _v0 = 0; _v0 < _v1.length; _v0++) {
      let {
          value: _v0
        } = _v1[_v0],
        _v1 = 60 * _v0 * _v2;
      if (_v1 - _v4.SNAP_THRESHOLD_PX <= _v0 && _v1 >= _v0 || _v1 + _v4.SNAP_THRESHOLD_PX >= _v0 && _v1 <= _v0) return {
        snapPoint: _v1[_v0],
        pxPositionSnapped: _v1
      };
    }
    return {
      snapPoint: null,
      pxPositionSnapped: _v0
    };
  }, "getSnappedTimeValue", 0, _v6], 0);
  var _v7 = _v0.i(0);
  let _v8 = "LEFT",
    _v9 = "RIGHT",
    _v10 = (_v0, _v1, _v2, _v3) => {
      let _v4 = JSON.parse(JSON.stringify(_v0)),
        _v5 = [..._v1].reverse();
      return _v5.forEach((_v0, _v1) => {
        let _v2 = _v4[_v5[_v1].id];
        if (!_v2) return;
        _v2.compositionTiming.end > _v2 && (_v2.compositionTiming.end = _v2), _v2.compositionTiming.end - _v2.compositionTiming.start < _v3 && (_v2.compositionTiming.start = _v2.compositionTiming.end - _v3);
        let _v3 = _v5[_v1 + 1]?.id;
        if (!_v3) return;
        let _v4 = _v4[_v3];
        _v4 && (_v4.compositionTiming.end > _v2.compositionTiming.start && (_v4.compositionTiming.end = _v2.compositionTiming.start), _v4.compositionTiming.end - _v4.compositionTiming.start < _v3 && (_v4.compositionTiming.start = _v4.compositionTiming.end - _v3));
      }), _v4;
    },
    _v11 = ({
      offset: _v0,
      element: _v1,
      sortedLayerElements: _v2,
      sources: _v3,
      snapPoints: _v4,
      secondsPerPixel: _v5,
      isMutateChainedElements: _v6 = !0,
      totalDurationLimit: _v7 = 0,
      minimumElementDuration: _v8 = 0
    }) => {
      let _v9,
        _v10 = Math.abs(_v0),
        _v11 = _v4?.length > 0,
        _v12 = {},
        _v13 = null,
        {
          compositionTiming: _v14,
          id: _v15
        } = _v1,
        _v16 = (0, _v2.isVideoElement)(_v1) || (0, _v2.isSoundElement)(_v1);
      if ((_v0 > 0 ? _v9 : _v8) === _v8) {
        _v12[_v15] = {};
        let _v0 = _v14.end - _v14.start,
          _v1 = _v14.start + Math.max(_v0 - _v10, _v7.FRAME_TIMING);
        if (_v11 && (_v1 = Math.max((_v9 = _v6(_v1, _v4, _v5)).time, _v14.start + _v7.FRAME_TIMING)), _v16 && _v1.sourceHash) {
          let {
              timing: _v0,
              sourceHash: _v1
            } = _v1,
            _v2 = _v3[_v1].duration - _v0.endTime,
            _v3 = _v14.end + _v2;
          _v1 > _v3 && (_v1 = _v3);
          let _v4 = _v1 - _v14.end;
          _v12[_v15].timing = {
            startTime: _v0.startTime,
            endTime: (0, _v3.toNearestFrame)(Math.max(_v0.endTime + _v4, _v0.startTime + _v7.FRAME_TIMING))
          };
        }
        _v1 = (0, _v3.toNearestFrame)(_v1), _v12[_v15].compositionTiming = {
          start: _v14.start,
          end: _v1
        }, _v9 && _v1 === _v9.time && (_v13 = _v9.snapPoint);
      } else {
        _v12[_v15] = {};
        let _v0 = _v14.end + _v10;
        if (_v11 && (_v0 = (_v9 = _v6(_v0, _v4, _v5)).time), _v16 && _v1.sourceHash) {
          let {
              timing: _v0,
              sourceHash: _v1
            } = _v1,
            _v2 = _v3[_v1].duration - _v0.endTime,
            _v3 = _v14.end + _v2;
          _v0 > _v3 && (_v0 = _v3);
          let _v4 = _v0 - _v14.end;
          _v12[_v15].timing = {
            startTime: _v0.startTime,
            endTime: (0, _v3.toNearestFrame)(_v0.endTime + _v4)
          };
        }
        _v0 = (0, _v3.toNearestFrame)(_v0), _v12[_v15].compositionTiming = {
          start: _v14.start,
          end: _v0
        }, _v9 && _v0 === _v9.time && (_v13 = _v9.snapPoint);
        let _v1 = _v2.findIndex(_v0 => _v0.id === _v15),
          _v2 = _v1 === _v2.length - 1;
        if (_v6 && !_v2) {
          let _v0 = _v0 - _v2[_v1 + 1].compositionTiming.start;
          for (let _v0 = _v1 + 1; _v0 < _v2.length; _v0++) _v0 > 0 && (_v12[_v2[_v0].id] = {
            compositionTiming: {
              start: (0, _v3.toNearestFrame)(_v2[_v0].compositionTiming.start + _v0),
              end: (0, _v3.toNearestFrame)(_v2[_v0].compositionTiming.end + _v0)
            }
          });
        }
        _v6 && _v7 && (_v12 = _v10(_v12, _v2, _v7, _v8));
      }
      return {
        snapPoint: _v13,
        timesMap: _v12
      };
    },
    _v12 = ({
      offset: _v0,
      element: _v1,
      sortedLayerElements: _v2,
      snapPoints: _v3,
      secondsPerPixel: _v4,
      isMutateChainedElements: _v5 = !0
    }) => {
      let _v6,
        _v7 = Math.abs(_v0),
        _v8 = _v3?.length > 0,
        {
          compositionTiming: _v9,
          id: _v10
        } = _v1,
        _v11 = (0, _v2.isVideoElement)(_v1) || (0, _v2.isSoundElement)(_v1),
        _v12 = {},
        _v13 = null;
      if ((_v0 > 0 ? _v9 : _v8) === _v9) {
        _v12[_v10] = {};
        let _v0 = _v9.end - _v7.FRAME_TIMING,
          _v1 = Math.min(_v9.start + _v7, _v0);
        if (_v8 && (_v1 = Math.min((_v6 = _v6(_v1, _v3, _v4)).time, _v0)), _v1 = (0, _v3.toNearestFrame)(_v1), _v11) {
          let {
              timing: _v0
            } = _v1,
            _v1 = _v9.start - _v0.startTime;
          _v1 < _v1 && (_v1 = _v1);
          let _v2 = _v1 - _v9.start;
          _v12[_v10].timing = {
            startTime: (0, _v3.toNearestFrame)(_v0.startTime + _v2),
            endTime: _v0.endTime
          };
        }
        _v12[_v10].compositionTiming = {
          start: _v1,
          end: _v9.end
        }, _v1 === _v6?.time && (_v13 = _v6?.snapPoint);
      } else {
        let _v0 = _v2.findIndex(_v0 => _v0.id === _v10),
          _v1 = 0 === _v0;
        _v12[_v10] = {};
        let _v2 = Math.min(_v7, (_v5 || _v1 ? _v2[0].compositionTiming.start : 0) + (_v1 ? 0 : _v9.start - _v2[_v0 - 1].compositionTiming.end)),
          _v3 = _v9.start - _v2;
        if (_v8 && (_v3 = (_v6 = _v6(_v3, _v3, _v4)).time), _v3 = (0, _v3.toNearestFrame)(_v3), _v11) {
          let {
              timing: _v0
            } = _v1,
            _v1 = _v9.start - _v0.startTime;
          _v3 < _v1 && (_v3 = _v1);
          let _v2 = _v9.start - _v3;
          _v12[_v10].timing = {
            startTime: (0, _v3.toNearestFrame)(_v0.startTime - _v2),
            endTime: _v0.endTime
          };
        }
        if (_v12[_v10].compositionTiming = {
          start: _v3,
          end: _v9.end
        }, _v3 === _v6?.time && (_v13 = _v6?.snapPoint), _v5 && !_v1) {
          let _v0 = _v3 - _v2[_v0 - 1].compositionTiming.end;
          for (let _v0 = 0; _v0 < _v0; _v0++) _v0 < 0 && (_v12[_v2[_v0].id] = {
            compositionTiming: {
              start: (0, _v3.toNearestFrame)(_v2[_v0].compositionTiming.start + _v0),
              end: (0, _v3.toNearestFrame)(_v2[_v0].compositionTiming.end + _v0)
            }
          });
        }
      }
      return {
        snapPoint: _v13,
        timesMap: _v12
      };
    };
  _v0.s(["getCompositionTimingWithUpdateLeft", 0, _v12, "getCompositionTimingWithUpdateRight", 0, _v11, "getCompositionTimingWithUpdateStartTime", 0, ({
    startTime: _v0,
    elementDuration: _v1,
    sortedCompositionWithoutCeId: _v2,
    ceId: _v3,
    videoDuration: _v4
  }) => {
    let _v5 = {},
      _v6 = !1,
      _v7 = (0, _v3.toNearestFrame)(_v0 + _v1);
    _v3 && (_v5[_v3] = {
      compositionTiming: {
        start: (0, _v3.toNearestFrame)(_v0),
        end: _v7
      }
    });
    let _v8 = -1;
    for (let _v0 = 0; _v0 < _v2.length; _v0++) if (_v2[_v0].compositionTiming.start - _v0 >= 0) {
      _v8 = _v0;
      break;
    }
    if (_v8 > -1 && _v7 > _v2[_v8].compositionTiming.start) {
      let _v0 = _v7 - _v2[_v8].compositionTiming.start;
      for (let _v0 = _v8; _v0 < _v2.length; _v0++) {
        let _v0 = (0, _v3.toNearestFrame)(_v2[_v0].compositionTiming.end + _v0);
        _v4 && _v0 > _v4 && (_v6 = !0), _v5[_v2[_v0].id] = {
          compositionTiming: {
            start: (0, _v3.toNearestFrame)(_v2[_v0].compositionTiming.start + _v0),
            end: _v0
          }
        };
      }
    }
    return {
      timesMap: _v5,
      isExceedingVideoDuration: _v6
    };
  }, "getMultiCompositionTimingWithUpdateLeft", 0, ({
    offset: _v0,
    elements: _v1,
    sortedLayerElements: _v2
  }) => {
    let _v3 = {};
    for (let _v0 = _v1.length - 1; _v0 >= 0; _v0--) {
      let {
        timesMap: _v0
      } = _v12({
        offset: _v0,
        element: _v1[_v0],
        sortedLayerElements: _v2,
        snapPoints: [],
        secondsPerPixel: 1,
        isMutateChainedElements: !1
      });
      _v3 = {
        ..._v3,
        ..._v0
      };
    }
    return {
      timesMap: _v3
    };
  }, "getMultiCompositionTimingWithUpdateRight", 0, ({
    offset: _v0,
    anchorElementId: _v1,
    elements: _v2,
    sortedLayerElements: _v3,
    sources: _v4,
    totalDurationLimit: _v5 = 0,
    minimumElementDuration: _v6 = 0
  }) => {
    let _v7 = {};
    for (let _v0 = 0; _v0 < _v2.length; _v0++) {
      let {
        timesMap: _v0
      } = _v11({
        offset: _v0,
        element: _v2[_v0],
        sortedLayerElements: _v3,
        sources: _v4,
        snapPoints: [],
        secondsPerPixel: 1,
        isMutateChainedElements: !1,
        totalDurationLimit: _v5,
        minimumElementDuration: _v6
      });
      _v7 = {
        ..._v7,
        ..._v0
      };
    }
    let _v8 = ((_v0, _v1, _v2) => {
      let _v3 = _v1.findIndex(_v0 => _v0[0] === _v0.id),
        _v4 = _v1.findIndex(_v0 => _v0[_v0.length - 1] === _v0.id),
        _v5 = {},
        _v6 = _v0.shift();
      for (let _v0 = _v3; _v0 <= _v4; _v0++) {
        let _v0 = _v1[_v0],
          _v1 = _v1[_v0 + 1];
        if (!_v1 || _v0.id === _v2) break;
        let _v2 = _v1.compositionTiming.start - _v0.compositionTiming.end;
        void 0 !== _v6 && (void 0 === _v5[_v6] && (_v5[_v6] = 0), _v5[_v6] += _v2), _v1.id === _v0[0] && (_v6 = _v0.shift());
      }
      return _v5;
    })(Object.keys(_v7).sort((_v0, _v1) => _v7[_v0].compositionTiming.start - _v7[_v1].compositionTiming.start), _v3, _v1);
    _v2.forEach(_v0 => {
      let _v1 = _v0.id;
      if (_v7[_v1]) {
        let _v0 = _v8[_v1];
        if (!(0, _v1.default)(_v0)) {
          let _v0 = (0, _v3.toNearestFrame)(_v0.compositionTiming.end + _v0),
            _v1 = (0, _v3.toNearestFrame)(_v7[_v1].compositionTiming.end - _v0);
          _v1 >= 0 && (_v7[_v1].compositionTiming.end = Math.min(_v7[_v1].compositionTiming.end, _v0), _v7[_v1].timing && (_v7[_v1].timing.endTime = (0, _v3.toNearestFrame)(_v7[_v1].timing.endTime - _v1)));
        }
      }
    });
    for (let _v0 = 0; _v0 < _v3.length - 1; _v0++) {
      let _v0 = _v3[_v0],
        _v1 = _v3[_v0 + 1],
        _v2 = _v0.id,
        _v3 = _v1.id,
        _v4 = _v7[_v2],
        _v5 = _v7[_v3],
        _v6 = _v4 ? _v4.compositionTiming : _v0.compositionTiming,
        _v7 = _v5 ? _v5.compositionTiming : _v1.compositionTiming;
      if (_v6.end > _v7.start) {
        let _v0 = _v6.end - _v7.start;
        _v5 || (_v7[_v3] = {}), _v7[_v3].compositionTiming = {
          start: (0, _v3.toNearestFrame)(_v7.start + _v0),
          end: (0, _v3.toNearestFrame)(_v7.end + _v0)
        };
      }
    }
    return _v5 && (_v7 = _v10(_v7, _v3, _v5, _v6)), {
      timesMap: _v7
    };
  }, "layersToTimepoints", 0, _v0 => _v0.reduce((_v0, _v1) => [..._v0, ...(0, _v2.getCompositionWithoutTransition)(_v1.composition).reduce((_v0, _v1) => {
    let _v2 = _v1.compositionTiming.end - _v1.compositionTiming.start;
    return [..._v0, {
      value: _v1.compositionTiming.start,
      duration: _v2,
      type: _v5.SnapTimePointType.START,
      ceId: _v1.id,
      layerId: _v1.id
    }, {
      value: _v1.compositionTiming.end,
      duration: _v2,
      type: _v5.SnapTimePointType.END,
      ceId: _v1.id,
      layerId: _v1.id
    }];
  }, [])], []), "resolveCollisionsInComposition", 0, _v0 => {
    let _v1 = JSON.parse(JSON.stringify(_v0)),
      _v2 = [];
    return _v1.forEach((_v0, _v1) => {
      if (_v0.compositionTiming.start < 0) {
        let _v0 = -_v0.compositionTiming.start;
        _v0.compositionTiming = {
          start: 0,
          end: (0, _v3.toNearestFrame)(_v0.compositionTiming.end + _v0)
        }, _v2.push(_v0.id);
      }
      let _v2 = _v1[_v1 + 1];
      if (_v2 && _v0.compositionTiming.end > _v2.compositionTiming.start) {
        let _v0 = _v0.compositionTiming.end - _v2.compositionTiming.start;
        _v2.compositionTiming = {
          start: (0, _v3.toNearestFrame)(_v2.compositionTiming.start + _v0),
          end: (0, _v3.toNearestFrame)(_v2.compositionTiming.end + _v0)
        }, _v2.push(_v2.id);
      }
    }), [_v1, _v2];
  }], 0);
}