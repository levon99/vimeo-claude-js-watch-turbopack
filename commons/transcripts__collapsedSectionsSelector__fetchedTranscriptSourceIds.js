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
    _v9 = _v0.i(0);
  let _v10 = {
      transcripts: {},
      search: {
        value: "",
        position: 0,
        results: []
      },
      sectionUi: {},
      minGapsThreshold: _v4.TRANSCRIPT_GAP_THRESHOLD,
      ignoredSources: (_v0 => {
        try {
          let _v0 = window.localStorage.getItem(_v4.TVE_IGNORED_SOURCES_KEY);
          return _v0 ? JSON.parse(_v0) : _v0;
        } catch (_v0) {
          return _v0;
        }
      })({
        storyboards: {}
      }),
      transcriptsToFetch: {},
      collapsedSections: [],
      transcribableElementTimings: []
    },
    _v11 = (0, _v2.createSlice)({
      name: "transcripts",
      initialState: _v10,
      reducers: {
        setTranscriptForSource: (_v0, _v1) => {
          let {
            sourceHash: _v2,
            transcript: _v3
          } = _v1.payload;
          _v0.transcripts[_v2] = _v3;
        },
        setShouldFetchTranscriptForSource: (_v0, _v1) => {
          let {
            sourceHash: _v2,
            shouldFetchTranscript: _v3,
            force: _v4
          } = _v1.payload;
          !_v4 && (0, _v6.isTranscriptStatusFetched)(_v0.transcripts[_v2]?.status) || (_v3 ? _v0.transcripts[_v2] = {
            status: _v5.TranscriptStatus.PROCESSING,
            id: "",
            words: []
          } : (delete _v0.transcripts[_v2], delete _v0.sectionUi[_v2]), _v0.transcriptsToFetch[_v2] = _v3);
        },
        setIsShowDeletedWordsForSourceAction: (_v0, _v1) => {
          let {
            sourceHash: _v2,
            isShowDeletedWords: _v3
          } = _v1.payload;
          _v0.sectionUi[_v2] = Object.assign({}, _v0.sectionUi[_v2], {
            isShowDeletedWords: _v3
          });
        },
        toggleShowDeletedWordsForAllSourcesAction: (_v0, _v1) => {
          Object.keys(_v0.sectionUi).forEach(_v0 => _v0.sectionUi[_v0].isShowDeletedWords = _v1.payload);
        },
        setSearchValueAction: (_v0, _v1) => {
          let _v2 = _v1.payload;
          _v0.search.value = _v2;
        },
        setSearchPositionAction: (_v0, _v1) => {
          _v0.search.position = _v1.payload;
        },
        setSearchResultsAction: (_v0, _v1) => {
          _v0.search.results = _v1.payload;
        },
        setMinGapsThresholdAction: (_v0, _v1) => {
          _v0.minGapsThreshold = _v1.payload;
        },
        setRemoveFromIgnoreSourceForStoryboardId: (_v0, _v1) => {
          let {
              sourceHash: _v2,
              storyboardId: _v3
            } = _v1.payload,
            _v4 = _v0.ignoredSources.storyboards[_v3];
          if (_v4) {
            let _v0 = {
              ignoredSources: _v4.ignoredSources.filter(_v0 => _v0 !== _v2),
              lastModified: Date.now()
            };
            _v0.ignoredSources.storyboards = {
              ..._v0.ignoredSources.storyboards,
              ...{
                [_v3]: _v0
              }
            }, window.localStorage.setItem(_v4.TVE_IGNORED_SOURCES_KEY, JSON.stringify(_v0.ignoredSources));
          }
        },
        setIgnoreSourceForStoryboardId: (_v0, _v1) => {
          let {
            sourceHash: _v2,
            storyboardId: _v3
          } = _v1.payload;
          _v0.ignoredSources.storyboards[_v3] || (_v0.ignoredSources.storyboards[_v3] = {
            ignoredSources: [],
            lastModified: Date.now()
          });
          let _v4 = {
            ignoredSources: [..._v0.ignoredSources.storyboards[_v3].ignoredSources, _v2],
            lastModified: Date.now()
          };
          _v0.ignoredSources.storyboards = {
            ..._v0.ignoredSources.storyboards,
            ...{
              [_v3]: _v4
            }
          }, window.localStorage.setItem(_v4.TVE_IGNORED_SOURCES_KEY, JSON.stringify(_v0.ignoredSources));
        },
        setTranscribableElementTimings: (_v0, _v1) => {
          _v0.transcribableElementTimings = _v1.payload;
        },
        toggleTranscriptOpen: (_v0, _v1) => {
          let {
            sourceHash: _v2
          } = _v1.payload;
          _v0.collapsedSections.includes(_v2) ? _v0.collapsedSections = _v0.collapsedSections.filter(_v0 => _v0 !== _v2) : _v0.collapsedSections = [..._v0.collapsedSections, _v2];
        },
        updateSourceHashForTranscribableElementTimings: (_v0, _v1) => {
          let {
            oldSourceHash: _v2,
            newSourceHash: _v3
          } = _v1.payload;
          _v0.transcribableElementTimings.forEach(_v0 => {
            _v0.sourceHash === _v2 && (_v0.sourceHash = _v3);
          });
        }
      },
      extraReducers: _v0 => {
        _v0.addMatcher(_v7.transcriptApi.endpoints.getTranscriptForSource.matchFulfilled, (_v0, _v1) => {
          let {
            sourceHash: _v2
          } = _v1.meta.arg.originalArgs;
          _v0.transcriptsToFetch[_v2] = !1, _v0.transcripts[_v2] = Object.assign({}, _v0.transcripts[_v2], _v1.payload), _v0.sectionUi[_v2] = Object.assign({}, _v0.sectionUi[_v2], {
            isShowDeletedWords: _v4.DEFAULT_IS_SHOW_DELETED_WORDS
          });
        }), _v0.addMatcher(_v7.transcriptApi.endpoints.getTranscriptForSource.matchRejected, (_v0, _v1) => {
          let _v2 = _v1.payload ? _v1.payload.error : "",
            {
              sourceHash: _v3
            } = _v1.meta.arg.originalArgs;
          _v0.transcriptsToFetch[_v3] = !1, _v2 === _v5.TranscriptApiQueryError.CANCEL ? delete _v0.transcripts[_v3] : _v0.transcripts[_v3] = {
            id: "",
            status: _v5.TranscriptStatus.FAILED,
            words: []
          }, delete _v0.sectionUi[_v3];
        });
      }
    }),
    {
      setShouldFetchTranscriptForSource: _v12,
      setIsShowDeletedWordsForSourceAction: _v13,
      toggleShowDeletedWordsForAllSourcesAction: _v14,
      setSearchValueAction: _v15,
      setSearchPositionAction: _v16,
      setSearchResultsAction: _v17,
      setIgnoreSourceForStoryboardId: _v18,
      setRemoveFromIgnoreSourceForStoryboardId: _v19,
      setMinGapsThresholdAction: _v20,
      setTranscribableElementTimings: _v21,
      updateSourceHashForTranscribableElementTimings: _v22,
      setTranscriptForSource: _v23,
      toggleTranscriptOpen: _v24
    } = _v11.actions,
    _v25 = _v11.reducer;
  (0, _v1.createSelector)([_v0 => _v0.transcripts], _v0 => _v0.transcripts);
  let _v26 = (0, _v1.createSelector)([_v0 => _v0.transcripts], _v0 => _v0.sectionUi),
    _v27 = (0, _v1.createSelector)([_v0 => _v0.transcripts, (_v0, _v1) => _v1], (_v0, _v1) => _v0.transcripts[_v1]),
    _v28 = (0, _v1.createSelector)([_v0 => _v0.transcripts, (_v0, _v1) => _v1], (_v0, _v1) => _v0.sectionUi[_v1] ? _v0.sectionUi[_v1].isShowDeletedWords : _v4.DEFAULT_IS_SHOW_DELETED_WORDS),
    _v29 = (0, _v1.createSelector)(_v0 => _v0.transcripts, _v0 => Object.keys(_v0.transcripts).filter(_v0 => (0, _v6.isTranscriptStatusFetched)(_v0.transcripts[_v0]?.status))),
    _v30 = (0, _v1.createSelector)([_v0 => _v0.transcripts], _v0 => _v0.search.value),
    _v31 = (0, _v1.createSelector)([_v0 => _v0.transcripts], _v0 => _v0.search.position),
    _v32 = (0, _v1.createSelector)([_v0 => _v0.transcripts], _v0 => _v0.search.results),
    _v33 = (0, _v1.createSelector)(_v0 => _v0.transcripts, _v0 => _v0.ignoredSources),
    _v34 = (0, _v1.createSelector)(_v0 => _v0.transcripts, _v0 => _v0.transcriptsToFetch);
  (0, _v1.createSelector)([_v0 => _v0.transcripts], _v0 => _v0.minGapsThreshold);
  let _v35 = (0, _v1.createSelector)([_v0 => _v0.transcripts.transcribableElementTimings, _v0 => _v0.transcripts.ignoredSources, _v0 => _v0.storyboard.id], (_v0, _v1, _v2) => {
      let _v3 = (0, _v6.getUnversionedStoryboardId)(_v2),
        _v4 = _v1.storyboards[_v3]?.ignoredSources || [];
      return 0 === _v4.length ? _v0 : _v0.filter(_v0 => !_v4.includes(_v0.sourceHash));
    }),
    _v36 = (0, _v1.createSelector)([_v35, _v0 => _v0.transcripts.transcripts, _v9.sourceMapSelector], (_v0, _v1, _v2) => {
      let _v3 = (0, _v6.createTranscriptSectionsData)(_v0);
      return _v3.forEach(_v0 => {
        let _v1 = _v0.sourceHash,
          _v2 = _v1[_v1],
          _v3 = [];
        if (_v2) {
          let {
              words: _v0
            } = _v2,
            _v1 = _v2[_v1],
            _v2 = (0, _v6.addGapsToTranscript)(_v0, _v1.duration);
          _v3 = (0, _v6.createTranscriptItemsForTranscriptSection)(_v2, _v0);
        }
        _v0.transcriptItems = _v3;
      }), _v3;
    }),
    _v37 = (0, _v1.createSelector)([_v36], _v0 => _v0.length),
    _v38 = (0, _v1.createSelector)([_v36], _v0 => {
      let _v1 = {};
      return _v0.forEach(_v0 => _v1[_v0.sourceHash] = !0), Object.keys(_v1).length || 0;
    }),
    _v39 = (0, _v1.createSelector)(_v0 => _v0.transcripts.collapsedSections, _v0 => _v0),
    _v40 = (0, _v1.createSelector)([_v36], _v0 => {
      let _v1 = {};
      return _v0.forEach(_v0 => _v1[_v0.sourceHash] = !0), Object.keys(_v1);
    }),
    _v41 = (0, _v1.createSelector)([_v0 => _v0.storyboard.sources, _v0 => _v0.transcripts.transcripts, _v40], (_v0, _v1, _v2) => {
      let _v3 = _v2.length,
        _v4 = 0,
        _v5 = 0,
        _v6 = 0,
        _v7 = 0,
        _v8 = 0,
        _v9 = 0;
      return _v0.forEach(_v0 => {
        let _v1 = _v0.hash,
          _v2 = _v1[_v1];
        if (_v2) switch (_v2.status) {
          case _v5.TranscriptStatus.DONE:
            _v5++;
            break;
          case _v5.TranscriptStatus.PROCESSING:
            _v4++;
            break;
          case _v5.TranscriptStatus.FAILED:
            _v7++;
            break;
          case _v5.TranscriptStatus.LANG_NOT_SUPPORTED:
            _v9++;
            break;
          case _v5.TranscriptStatus.NO_SPEECH:
            _v6++;
        } else _v2.includes(_v1) ? _v4++ : _v0.type === _v3.SourceType.CLIP && _v8++;
      }), {
        totalSources: _v3,
        sourcesToTranscribe: _v4,
        sourcesWithGeneratedTranscript: _v5,
        noSpeechDetectedSources: _v6,
        sourcesWithErrors: _v7,
        sourcesNotLoaded: _v8,
        sourcesWithoutLanguageSupport: _v9
      };
    }),
    _v42 = (0, _v1.createSelector)([_v8.currentTimeSelector, (_v0, {
      start: _v1,
      end: _v2,
      buffer: _v3
    }) => ({
      start: _v1,
      end: _v2,
      buffer: _v3
    })], (_v0, {
      start: _v1,
      end: _v2,
      buffer: _v3
    }) => _v1 < _v0 + _v3 && _v2 > _v0),
    _v43 = (0, _v1.createSelector)([_v8.currentTimeSelector, (_v0, {
      start: _v1,
      end: _v2
    }) => ({
      start: _v1,
      end: _v2
    })], (_v0, {
      start: _v1,
      end: _v2
    }) => (0, _v6.isTimeInRange)(_v0, _v1, _v2));
  _v0.s(["collapsedSectionsSelector", 0, _v39, "default", 0, _v25, "fetchedTranscriptSourceIds", 0, _v29, "ignoredSourcesSelector", 0, _v33, "searchPositionIndexSelector", 0, _v31, "searchResultsSelector", 0, _v32, "searchValueSelector", 0, _v30, "sectionSourcesTotalSelector", 0, _v38, "selectAllUiForSources", 0, _v26, "selectIsParagraphCurrent", 0, _v42, "selectIsShowDeletedWordsById", 0, _v28, "selectIsWordCurrent", 0, _v43, "selectTranscriptById", 0, _v27, "setIgnoreSourceForStoryboardId", 0, _v18, "setIsShowDeletedWordsForSourceAction", 0, _v13, "setMinGapsThresholdAction", 0, _v20, "setRemoveFromIgnoreSourceForStoryboardId", 0, _v19, "setSearchPositionAction", 0, _v16, "setSearchResultsAction", 0, _v17, "setSearchValueAction", 0, _v15, "setShouldFetchTranscriptForSource", 0, _v12, "setTranscribableElementTimings", 0, _v21, "setTranscriptForSource", 0, _v23, "shouldFetchTranscriptsSelector", 0, _v34, "sourcesForViewInspectorBIEvent", 0, _v41, "toggleShowDeletedWordsForAllSourcesAction", 0, _v14, "toggleTranscriptOpen", 0, _v24, "transcriptSectionsSelector", 0, _v36, "transcriptSectionsTotalSelector", 0, _v37, "updateSourceHashForTranscribableElementTimings", 0, _v22]);
}