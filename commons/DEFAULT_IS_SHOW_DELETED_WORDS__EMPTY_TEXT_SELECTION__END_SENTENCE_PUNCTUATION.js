{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = [".", "?", "!"],
    _v7 = {
      selectedElements: [],
      direction: _v5.TextSelectionDirection.NONE,
      selectionType: _v5.TranscriptSelectionType.NONE,
      selectedSectionsRange: {
        start: {
          time: -1,
          sectionIndex: -1,
          itemIndex: -1
        },
        end: {
          time: -1,
          sectionIndex: -1,
          itemIndex: -1
        }
      }
    };
  _v0.s(["DEFAULT_IS_SHOW_DELETED_WORDS", 0, !0, "EMPTY_TEXT_SELECTION", 0, _v7, "END_SENTENCE_PUNCTUATION", 0, _v6, "PARAGRAPH_MIN_DURATION", 0, 30, "TRANSCRIPT_GAP_THRESHOLD", 0, .5, "TRANSCRIPT_ITEM_SCROLL_THRESHOLD", 0, .2, "TVE_IGNORED_SOURCES_CACHE_KEEP_DAYS", 0, 5, "TVE_IGNORED_SOURCES_KEY", 0, "tve-ignored-sources"], 0);
  var _v8 = _v0.i(0);
  let _v9 = async (_v0, _v1) => {
    let _v2 = _v0 => {
      _v8.default.sendAction(_v4.FetchTranscript, {
        step: _v5.FetchTranscriptStep.FETCH_WORDS,
        status: _v0
      });
    };
    try {
      let _v0;
      _v2(_v5.FetchTranscriptStepStatus.START);
      let _v1 = await fetch(_v0, {
        ...(_v1 ? {
          signal: _v1
        } : {})
      });
      if (!_v1.ok) return _v2(_v5.FetchTranscriptStep.FAILED), [];
      let _v2 = await _v1.json();
      return _v2(_v5.FetchTranscriptStepStatus.DONE), _v0 = 0, _v2.reduce((_v0, _v1) => {
        let _v2 = (0, _v2.camelize)(_v1);
        return _v2.startTime < _v0 ? _v0 : (_v0 = _v2.endTime, [..._v0, _v2]);
      }, []);
    } catch (_v0) {
      return _v2(_v5.FetchTranscriptStep.FAILED), [];
    }
  };
  _v0.s(["addGapsToTranscript", 0, (_v0, _v1) => _v0.map((_v0, _v1) => {
    let _v2 = _v0.startTime / 0,
      _v3 = _v0.endTime / 0,
      _v4 = _v0[_v1 + 1]?.startTime / 0 - _v3,
      _v5 = _v4 < .5 ? _v3 + _v4 : _v3,
      _v6 = {
        word: _v0.word,
        startTime: (0, _v3.toNearestFrame)(_v2),
        endTime: (0, _v3.toNearestFrame)(_v5)
      },
      _v7 = 0 === _v1 && _v2 > 0 ? {
        word: "",
        startTime: 0,
        endTime: (0, _v3.toNearestFrame)(_v2)
      } : null,
      _v8 = _v7 ? [_v7, _v6] : [_v6],
      _v9 = _v1 === _v0.length - 1 && _v1 > _v5 ? _v1 - _v5 : 0;
    return (_v4 >= .5 || _v9) && _v8.push({
      word: "",
      startTime: (0, _v3.toNearestFrame)(_v3),
      endTime: (0, _v3.toNearestFrame)(_v3 + (_v9 || _v4))
    }), _v8;
  }).flat(), "createTranscriptItemsForTranscriptSection", 0, (_v0, _v1) => {
    if (!_v0 || !_v1) return [];
    let {
        transcriptElementTiming: _v2
      } = _v1,
      _v3 = 0;
    return _v0.map((_v0, _v1) => {
      let _v2 = (_v0 => {
          if (!_v2.length) return 0;
          let _v1 = 0;
          for (let _v0 = _v3; _v0 < _v2.length; _v0++) {
            let _v0 = _v2[_v0].timing;
            if (_v0.startTime < _v0.endTime && _v0.endTime > _v0.startTime && (_v1 += Math.min(_v0.endTime, _v0.endTime) - Math.max(_v0.startTime, _v0.startTime), _v0.endTime >= _v0.endTime)) {
              _v3 = _v0;
              break;
            }
          }
          return _v1;
        })(_v0),
        {
          compositionStart: _v3,
          compositionEnd: _v4,
          layerIndex: _v5
        } = ((_v0, _v1) => {
          let _v2 = _v2.findIndex(_v0 => _v0.timing.startTime < _v0.endTime && _v0.timing.endTime > _v0.startTime),
            _v3 = -1,
            _v4 = -1;
          if (-1 === _v2) return {
            compositionStart: _v3,
            compositionEnd: _v4,
            layerIndex: -1
          };
          let _v5 = _v2[_v2].compositionTiming.start - _v2[_v2].timing.startTime;
          return _v2[_v2].timing.startTime <= _v0.startTime ? _v4 = (_v3 = _v0.startTime + _v5) + _v1 : _v3 = (_v4 = _v0.endTime + _v5) - _v1, {
            compositionStart: (0, _v3.toNearestFrame)(_v3),
            compositionEnd: (0, _v3.toNearestFrame)(_v4),
            layerIndex: _v2[_v2].layerIndex
          };
        })(_v0, _v2);
      return {
        ..._v0,
        index: _v1,
        remainingDuration: _v2,
        compositionStart: _v3,
        compositionEnd: _v4,
        layerIndex: _v5
      };
    });
  }, "createTranscriptParagraphList", 0, _v0 => {
    let _v1 = [],
      _v2 = 0,
      _v3 = 0;
    return _v0.forEach((_v0, _v1) => {
      (_v0.startTime > (_v2 + 1) * 30 && _v6.find(_v0 => _v0 === _v0.word.charAt(_v0.word.length - 1)) || _v1 === _v0.length - 1) && (_v1.push({
        startIndex: _v3,
        endIndex: _v1
      }), _v2++, _v3 = _v1 + 1);
    }), _v1;
  }, "createTranscriptSectionsData", 0, _v0 => {
    let _v1,
      _v2 = [],
      _v3 = -1;
    return _v0.forEach(_v0 => {
      let {
          compositionTiming: _v1,
          timing: _v2,
          sourceHash: _v3,
          layerIndex: _v4
        } = _v0,
        _v5 = _v2[_v3]?.transcriptElementTiming,
        _v6 = _v5?.[_v5.length - 1],
        _v7 = _v6?.sourceHash === _v3,
        _v8 = _v6?.timing.endTime <= _v2.startTime,
        _v9 = _v6?.compositionTiming.end > _v1.start,
        _v10 = _v1?.layerIndex < _v4,
        _v11 = _v1?.compositionTiming.end > _v1.start && {
          start: _v1.start,
          end: Math.min(_v1.compositionTiming.end, _v1.end)
        };
      if (_v7 && _v8 && !_v9) _v11 && _v2[_v10 ? _v3 - 1 : _v3].overlapsCompositionTiming.push(_v11), _v2[_v3].transcriptElementTiming.push(_v0);else {
        let _v0 = {
          sourceHash: _v3,
          transcriptElementTiming: [_v0],
          overlapsCompositionTiming: [],
          transcriptItems: []
        };
        _v11 && (_v10 ? _v2[_v3].overlapsCompositionTiming.push(_v11) : _v0.overlapsCompositionTiming.push(_v11)), _v2.push(_v0), _v3++;
      }
      (!_v1 || _v1.end > _v1.compositionTiming.end) && (_v1 = _v0);
    }), _v2;
  }, "fetchTranscriptWordsUrl", 0, _v9, "findFirstValidIndexAfterSelection", 0, (_v0, _v1) => {
    if (_v0 === _v1.length - 1) return _v0;
    for (let _v0 = _v0 + 1; _v0 < _v1.length; _v0++) if (_v1[_v0].compositionStart > -1) return _v0;
    return -1;
  }, "findLatestValidIndexBeforeSelection", 0, (_v0, _v1) => {
    if (!_v0) return _v0;
    for (let _v0 = _v0 - 1; _v0 >= 0; _v0--) if (_v1[_v0].compositionStart > -1) return _v0;
    return -1;
  }, "getBulkRemovableItemsCountAndDuration", 0, _v0 => _v0.reduce((_v0, _v1) => (_v0.count += _v1.length, _v0.duration += _v1.reduce((_v0, _v1) => _v0 + _v1.remainingDuration, 0), _v0), {
    count: 0,
    duration: 0
  }), "getBulkRemoveTimingForAllSections", 0, (_v0, _v1) => _v1.map((_v0, _v1) => {
    let {
      transcriptElementTiming: _v2
    } = _v0;
    return (({
      transcriptElementTiming: _v0,
      itemsToRemove: _v1
    }) => _v0.reduce((_v0, _v1) => {
      let {
          id: _v2,
          timing: _v3
        } = _v1,
        _v4 = _v1.filter(_v0 => _v0.startTime < _v3.endTime && _v0.endTime > _v3.startTime).sort((_v0, _v1) => _v0.startTime - _v1.startTime);
      if (_v4.length) {
        let _v0 = _v4.map(_v0 => {
          let _v1 = _v0.startTime,
            _v2 = _v0.endTime;
          return _v0.startTime < _v3.startTime && (_v1 = _v3.startTime), _v0.endTime > _v3.endTime && (_v2 = _v3.endTime), {
            startTime: _v1,
            endTime: _v2
          };
        });
        _v0[_v2] = {
          elementTiming: _v1,
          timingsToRemove: _v0
        };
      }
      return _v0;
    }, {}))({
      itemsToRemove: _v0[_v1],
      transcriptElementTiming: _v2
    });
  }), "getRemovableFillerWords", 0, _v0 => _v0.filter(_v0 => _v0.remainingDuration > 0 && /^[ue][uhm,.?]*$/gi.test(_v0.word)), "getSelectedElementsData", 0, ({
    transcriptSections: _v0,
    startSectionIndex: _v1,
    endSectionIndex: _v2,
    startTime: _v3,
    endTime: _v4
  }) => {
    let _v5 = [];
    if (_v1 === _v2) _v0[_v1].transcriptElementTiming.forEach(_v0 => {
      _v0.timing.startTime < _v4 && _v0.timing.endTime > _v3 && _v5.push({
        element: _v0,
        selectionStart: Math.max(_v3, _v0.timing.startTime),
        selectionEnd: Math.min(_v4, _v0.timing.endTime)
      });
    });else for (let _v0 = _v1; _v0 <= _v2; _v0++) {
      let {
        transcriptElementTiming: _v0
      } = _v0[_v0];
      _v0 === _v1 ? _v0.forEach(_v0 => {
        _v0.timing.endTime > _v3 && _v5.push({
          element: _v0,
          selectionStart: Math.max(_v3, _v0.timing.startTime),
          selectionEnd: _v0.timing.endTime
        });
      }) : _v0 === _v2 ? _v0.forEach(_v0 => {
        _v0.timing.startTime < _v4 && _v5.push({
          element: _v0,
          selectionStart: _v0.timing.startTime,
          selectionEnd: Math.min(_v4, _v0.timing.endTime)
        });
      }) : _v0.forEach(_v0 => {
        _v5.push({
          element: _v0,
          selectionStart: _v0.timing.startTime,
          selectionEnd: _v0.timing.endTime
        });
      });
    }
    return _v5;
  }, "getTranscriptItemText", 0, _v0 => {
    let {
        remainingDuration: _v1,
        startTime: _v2,
        endTime: _v3,
        word: _v4
      } = _v0,
      _v5 = (0, _v3.getDurationDisplay)((0, _v3.roundUpToOneDecimalPoint)(_v1 || _v3 - _v2), !0);
    return _v4 ? `${_v4} ` : `(\xb7\xb7\xb7${_v5}) `;
  }, "getTranscriptSelectionType", 0, ({
    transcriptItemsBySections: _v0,
    startSectionIndex: _v1,
    endSectionIndex: _v2,
    startItemIndex: _v3,
    endItemIndex: _v4
  }) => {
    if (_v1 < 0 || _v2 < 0) return _v5.TranscriptSelectionType.NONE;
    let _v5 = !1,
      _v6 = !1;
    if (_v1 === _v2) {
      let _v0 = _v0[_v1].slice(_v3, _v4 + 1);
      _v6 = _v0.some(_v0 => _v0.remainingDuration), _v5 = _v0.some(_v0 => !_v0.remainingDuration);
    } else for (let _v0 = _v1; _v0 <= _v2; _v0++) {
      let _v0 = _v0[_v0];
      if (_v0 === _v1) {
        let _v0 = _v0.slice(_v3);
        _v6 = _v0.some(_v0 => _v0.remainingDuration), _v5 = _v0.some(_v0 => !_v0.remainingDuration);
      } else if (_v0 === _v2) {
        let _v0 = _v0.slice(0, _v4 + 1);
        _v6 || (_v6 = _v0.some(_v0 => _v0.remainingDuration)), _v5 || (_v5 = _v0.some(_v0 => !_v0.remainingDuration));
      } else _v6 || (_v6 = _v0.some(_v0 => _v0.remainingDuration)), _v5 || (_v5 = _v0.some(_v0 => !_v0.remainingDuration));
    }
    return _v6 && _v5 ? _v5.TranscriptSelectionType.COMBINED : _v6 ? _v5.TranscriptSelectionType.EXISTING : _v5.TranscriptSelectionType.DELETED;
  }, "getUnversionedStoryboardId", 0, _v0 => _v0.substring(0, _v0.lastIndexOf("_")), "isSourceFromLibrary", 0, _v0 => _v0.service === _v1.SourceServiceType.VIMEO || !0 === _v0.isVimeoEdit, "isSourceValidForTranscript", 0, _v0 => _v0.hasAudio && _v0.type === _v1.SourceType.CLIP && (_v0.service === _v1.SourceServiceType.VIMEO || null === _v0.service), "isTimeInRange", 0, (_v0, _v1, _v2) => _v0 >= _v1 && _v0 < _v2, "isTranscriptStatusFetched", 0, _v0 => _v0 === _v5.TranscriptStatus.DONE || _v0 === _v5.TranscriptStatus.LANG_NOT_SUPPORTED || _v0 === _v5.TranscriptStatus.NO_SPEECH], 0);
}