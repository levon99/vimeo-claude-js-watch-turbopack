{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["sendTrackSelectMusicTab", 0, ({
    musicTab: _v0,
    prevMusicTab: _v1
  }) => {
    _v1.default.send({
      eventName: "vimeo.music_tab_selection",
      version: 1,
      contexts: {
        ..._v1.default.buildActionContext("click"),
        ..._v1.default.buildEditorContext({
          via: null,
          editorFeature: "media"
        }),
        ..._v1.default.buildProductAnalyticsContext({
          feature: "media",
          location: "drawer",
          copy: _v0
        }),
        ..._v1.default.buildWebContext(),
        ..._v1.default.buildTeamContext()
      },
      additionalFields: {
        action_cta: null,
        action_state: _v1 ?? null,
        selection_id: null,
        selection_name: null,
        selection_format: null,
        number_of_elements: 3,
        third_party_integration: _v1.default.getThirdPartyIntegration()
      }
    });
  }, "sendTrackSelectMusicTrackElement", 0, ({
    trackName: _v0,
    trackId: _v1
  }) => {
    _v1.default.send({
      eventName: "vimeo.music_track_selection",
      version: 1,
      contexts: {
        ..._v1.default.buildActionContext("click"),
        ..._v1.default.buildEditorContext({
          via: null,
          editorFeature: "music"
        }),
        ..._v1.default.buildProductAnalyticsContext({
          feature: "music",
          location: "drawer"
        }),
        ..._v1.default.buildWebContext(),
        ..._v1.default.buildTeamContext()
      },
      additionalFields: {
        action_state: null,
        selection_format: null,
        selection_id: _v1,
        selection_name: _v0,
        action_cta: null,
        number_of_elements: 1,
        third_party_integration: _v1.default.getThirdPartyIntegration()
      }
    });
  }], 0);
  var _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  async function _v6(_v0, _v1) {
    let _v2 = {
        isCodecSupported: !0,
        isResolutionSupported: !0,
        isStandardResolution: !0,
        isFPSSupported: !0,
        isBitrateSupported: !0,
        isResolutionChanges: !0,
        isKeyframeIntervalSupported: !0
      },
      _v3 = _v0.tracks[0];
    if (_v3 && ("video" === _v3.type || "metadata" === _v3.type)) {
      let {
          codec: _v0,
          bitrate: _v1,
          track_width: _v2,
          track_height: _v3,
          timescale: _v4,
          duration: _v5,
          nb_samples: _v6
        } = _v3,
        _v7 = _v1 ? _v6 / _v1 : void 0;
      return console.debug("cdc", _v0), console.debug("bit", _v1), console.debug("dim", _v2 + "x" + _v3), console.debug("tsc", _v4), console.debug("dur", _v5 + "/" + _v4 + "=" + _v5 / _v4), console.debug("nbs", _v6), console.debug("fps", _v7), "mp4v" === _v0 && (_v2.isCodecSupported = !1), _v1 > 0 && (_v2.isBitrateSupported = !1), _v2 % 2 != 0 && (_v2.isStandardResolution = !1), _v2 >= _v3 ? (_v2 >= 0 || _v3 >= 0) && (_v2.isResolutionSupported = !1) : (_v3 >= 0 || _v2 >= 0) && (_v2.isResolutionSupported = !1), _v7 && _v7 >= 90 && (_v2.isFPSSupported = !1), _v2;
    }
    throw Error(_v3.MP4_SOURCE_TRACK_MISSING_OR_INVALID_TRACK_TYPE);
  }
  async function _v7(_v0, _v1) {
    let {
        isFragmented: _v2
      } = _v0,
      _v3 = _v0.videoTracks[0];
    if (!_v3) return {
      isKeyframeIntervalSupported: !0
    };
    _v1.selectTrack(_v3.id);
    let _v4 = [],
      _v5 = 0,
      _v6 = 0,
      _v7 = 0,
      {
        samples: _v8,
        keyframes: _v9,
        averageKeyframeInterval: _v10
      } = await _v1.start((_v0, _v1, _v2) => {
        let _v3 = _v1.file.extractedTracks[0].trak.samples.length;
        return (_v6 += _v2.length, _v2.forEach(_v0 => {
          if (1 == _v0.track_id) {
            let _v0 = _v0.cts / _v0.timescale;
            _v0.is_sync && (_v7 += _v0 - _v5, _v4.push(_v0), _v5 = _v0);
          }
        }), _v2 && _v6 === _v3 && _v1.file.stream.getPosition() === _v1.file.size || !_v2 && _v6 === _v3) ? {
          samples: _v6,
          keyframes: _v4.length,
          averageKeyframeInterval: _v7 / _v4.length
        } : null;
      });
    return (console.debug("samples", _v8), console.debug("keyframes", _v9), console.debug("avg KF dist", _v10), _v10 > 15) ? {
      isKeyframeIntervalSupported: !1
    } : {
      isKeyframeIntervalSupported: !0
    };
  }
  async function _v8(_v0, _v1) {
    let _v2 = performance.now();
    (0, _v4.sendTrackLocalFilesAnalysis)({
      stepName: "start",
      canRenderLocally: !0
    });
    try {
      let _v0 = (0, _v5.getExtension)(_v0.name)?.toLowerCase();
      if ("mp4" !== _v0) return (0, _v4.sendTrackLocalFilesAnalysis)({
        stepName: "finish",
        canRenderLocally: !1,
        duration: 0
      }), !1;
      let _v1 = new _v2.MP4Source(_v0),
        _v2 = await _v1.getInfo(),
        {
          isFragmented: _v3,
          fragment_duration: _v4,
          timescale: _v5,
          duration: _v6
        } = _v2,
        _v7 = await _v6(_v2, _v3 && _v4 ? _v4 / _v5 : _v6 / _v5),
        _v8 = Object.values(_v7).includes(!1);
      !_v8 && _v1 && (_v7.isKeyframeIntervalSupported = (await _v7(_v2, _v1)).isKeyframeIntervalSupported);
      let _v9 = performance.now();
      return _v8 = Object.values(_v7).includes(!1), (0, _v4.sendTrackLocalFilesAnalysis)({
        stepName: "finish",
        canRenderLocally: !_v8,
        duration: _v9 - _v2
      }), !_v8;
    } catch (_v0) {
      let _v1 = performance.now();
      return (0, _v4.sendTrackLocalFilesAnalysis)({
        stepName: "finish",
        canRenderLocally: !1,
        duration: _v1 - _v2
      }), !1;
    }
  }
  async function _v9(_v0) {
    return new File([await _v0.arrayBuffer()], _v0.name);
  }
  _v0.s(["canRenderLocally", 0, _v8], 0), _v0.s(["removeMimeType", 0, _v9], 0);
}