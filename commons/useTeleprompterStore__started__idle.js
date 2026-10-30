{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let {
      debug: _v7
    } = (0, _v5.getLogger)("useTeleprompterStore"),
    _v8 = (0, _v6.createPersistentStore)((_v0, _v1) => ({
      ...(0, _v2.getTeleprompterInitialState)(),
      persistentData: (0, _v2.getTeleprompterInitPersistentState)(),
      setIsMicrophonePermissionsGranted: _v0 => {
        _v0(_v0 => {
          _v0.isMicrophonePermissionsGranted = _v0;
        });
      },
      setAudioTrack: _v0 => {
        _v0(_v0 => {
          _v0.audioTrack = _v0;
        });
      },
      updateScrollingState: _v0 => {
        _v0(_v0 => {
          _v0.scrollingState = _v0, _v0.persistentData.poppedOutScrollingState = _v0;
        });
      },
      updatePersistentData: _v0 => {
        _v0(_v0 => {
          let _v1 = "function" == typeof _v0 ? _v0(_v1().persistentData) : _v0;
          _v0.persistentData = {
            ..._v0.persistentData,
            ..._v1
          };
        });
      },
      resetPromptStatus: () => {
        let {
          promptRequestStatus: _v0,
          promptRequestAbortController: _v1,
          setPromptRequestStatus: _v2
        } = _v1();
        "started" === _v0 ? _v1?.abort() : _v2("idle");
      },
      resetMemoryState: () => {
        _v0({
          ..._v1(),
          ...(0, _v2.getTeleprompterInitialState)()
        });
      },
      setIsGeneratePanelShown: _v0 => {
        _v0(_v0 => {
          _v0.isGeneratePanelShown = _v0;
        });
      },
      setIsPopOverVisible: _v0 => {
        _v0(_v0 => {
          _v0.isPopOverVisible = "function" == typeof _v0 ? _v0(_v0.isPopOverVisible) : _v0;
        });
      },
      resetEditorState: () => {
        let _v0 = (0, _v2.getTeleprompterInitialState)();
        _v0(_v0 => {
          _v0.isPopOverVisible = _v0.isPopOverVisible, _v0.isFollowupPromptShown = _v0.isFollowupPromptShown;
        });
      },
      setIsFollowupPromptShown: _v0 => {
        _v0(_v0 => {
          _v0.isFollowupPromptShown = _v0;
        });
      },
      setTextProgress: _v0 => {
        _v0(_v0 => {
          _v0.textProgress = _v0;
        });
      },
      setWords: _v0 => {
        _v0(_v0 => {
          _v0.words = _v0;
        });
      },
      setScrollPaused: _v0 => {
        _v0(_v0 => {
          _v0.scrollPaused = _v0;
        });
      },
      setSpacerHeight: _v0 => {
        _v0(_v0 => {
          _v0.spacerHeight = _v0(_v0.spacerHeight);
        });
      },
      setIsRecognitionActive: _v0 => {
        _v0(_v0 => {
          _v0.isRecognitionActive = _v0;
        });
      },
      setLastShownAs: _v0 => {
        _v0(_v0 => {
          _v0.lastShownAs = _v0;
        });
      },
      setIsPoppedOut: _v0 => {
        _v0(_v0 => {
          _v0.isPoppedOut = _v0;
        });
      },
      setUpsellModalShown: _v0 => {
        _v0(_v0 => {
          _v0.isUpsellModalShown = _v0(_v0.isUpsellModalShown);
        });
      },
      setPromptError: _v0 => {
        _v0(_v0 => {
          _v0.promptRequestError = _v0;
        });
      },
      setReceivedCharacters: _v0 => {
        _v0(_v0 => {
          _v0.receivedPromptCharacters = _v0;
        });
      },
      setPromptRequestStatus: _v0 => {
        _v0(_v0 => {
          _v0.promptRequestStatus = _v0;
        });
      },
      setPromptRequestAbortController: _v0 => {
        _v0(_v0 => {
          _v0.promptRequestAbortController = _v0;
        });
      },
      setScrollMode: _v0 => {
        _v0(_v0 => {
          _v0.persistentData.scrollMode = _v0;
        });
      },
      setScrollForInput: _v0 => {
        _v0(_v0 => {
          _v0.scrollModeForInput = _v0;
        });
      },
      setCertainMode: _v0 => {
        let {
            updatePersistentData: _v1,
            getAvailableScrollModes: _v2,
            persistentData: _v3,
            setScrollMode: _v4
          } = _v1(),
          _v5 = !!_v2(_v3.isSpeechRecognitionSupported).find(_v0 => _v0.mode === _v0.mode),
          _v6 = !1;
        if (_v5) {
          let {
            scrollMode: _v0,
            autoScrollSpeed: _v1
          } = _v1().persistentData;
          _v0 !== _v0.mode && (_v4(_v0.mode), _v7('changed "userDesired" scroll mode', {
            scrollMode: _v0.mode
          }), _v6 = !0), "staticSpeed" === _v0.mode && _v1 !== _v0.speed && (_v1({
            autoScrollSpeed: _v0.speed
          }), _v7("changed autoscroll speed", {
            autoScrollSpeed: _v0.speed
          }), _v6 = !0);
        }
        return _v6;
      },
      alignScrollModeWithAccount: () => {
        let {
            persistentData: {
              scrollMode: _v0,
              isSpeechRecognitionSupported: _v1
            },
            setScrollMode: _v2
          } = _v1(),
          _v3 = !1 !== _v1;
        if (_v0) "dictationBased" !== _v0 || _v3 || (_v7('unset "userDesired" as "dictationBased" scroll mode.'), _v2("staticSpeed"));else {
          let _v0 = _v3 ? "dictationBased" : "staticSpeed";
          _v2(_v0), _v7('changed "userDesired" scroll mode.', {
            newScrollMode: _v0
          });
        }
      },
      getAvailableScrollModes: _v0 => {
        let _v1 = !1 !== _v0;
        return _v2.scrollModeOrder.filter(_v0 => !!_v1 || "dictationBased" !== _v0.mode);
      },
      updateBoundaries: (_v0, _v1 = !1) => {
        let _v2 = {};
        Object.keys(_v0).forEach(_v0 => {
          void 0 !== _v0[_v0] && (_v2[(0, _v3.mapTeleprompterBoundariesToStateProps)(_v0, _v1)] = _v0[_v0]);
        }), _v1().updatePersistentData(_v2);
      }
    }), {
      name: "teleprompterPersistentStore",
      partialize: _v0 => ({
        persistentData: _v0.persistentData
      }),
      version: 4,
      migrate: (_v0, _v1) => (_v1 < 4 && (_v0.persistentData.isSpeechRecognitionSupported = null), _v0)
    });
  function _v9({
    autoEvaluatedForCurrentInput: _v0,
    userDesiredAndPersistent: _v1
  }) {
    return _v0 ? {
      mode: _v0,
      source: "autoEvaluatedForCurrentInput"
    } : _v1 ? {
      mode: _v1,
      source: "userDesiredAndPersistent"
    } : {
      mode: "uncertain"
    };
  }
  _v4.IS_SSR || (0, _v6.rehydrate)(_v8), _v0.s(["useTeleprompterStore", 0, _v8], 0), _v0.s(["getResultingScrollMode", 0, _v9, "useScrollMode", 0, function () {
    let _v0 = _v8(({
        scrollModeForInput: _v0
      }) => _v0),
      _v1 = _v8(({
        persistentData: _v0
      }) => _v0.scrollMode);
    return (0, _v1.useMemo)(() => _v9({
      autoEvaluatedForCurrentInput: _v0,
      userDesiredAndPersistent: _v1
    }), [_v0, _v1]);
  }], 0);
  var _v10 = _v0.i(0);
  let _v11 = {
      teleprompterRawContent: "",
      teleprompterTextContent: "",
      scriptGeneratorPrompt: "",
      scriptGeneratorIsSurveyShown: !1,
      isTeleprompterShown: !1,
      conversationHistory: []
    },
    _v12 = (0, _v6.createPersistentStore)(_v0 => ({
      currentSessionId: null,
      history: [],
      setCurrentSessionId: _v0 => {
        _v0(_v0 => {
          _v0.currentSessionId !== _v0 && (_v0.currentSessionId = _v0, !_v0.history.find(_v0 => _v0.id === _v0) && (_v0.history.push({
            id: _v0,
            data: _v11
          }), _v0.history.length > 15 && (_v0.history = _v0.history.slice(_v0.history.length - 15))));
        });
      },
      addSessionToHistory: _v0 => {
        _v0(_v0 => {
          let _v1 = _v0.history.findIndex(_v0 => _v0.id === _v0.id);
          _v1 < 0 ? _v0.history.push(_v0) : _v0.history[_v1] = _v0;
        });
      },
      updateCurrentSessionData: _v0 => {
        _v0(_v0 => {
          if (!_v0.currentSessionId) return;
          let _v1 = _v0.history.findIndex(_v0 => _v0.id === _v0.currentSessionId);
          if (_v1 >= 0) {
            let _v0 = {
              ..._v0.history[_v1].data,
              ..._v0
            };
            _v0.history[_v1].data = _v0;
          } else _v0.addSessionToHistory({
            id: _v0.currentSessionId,
            data: {
              ..._v11,
              ..._v0
            }
          });
        });
      }
    }), {
      name: "teleprompterSessionPersistentConfig",
      partialize: _v0 => ({
        history: _v0.history
      }),
      version: 1
    });
  _v4.IS_SSR || (0, _v6.rehydrate)(_v12), _v0.s(["useSession", 0, _v0 => {
    let {
      currentSessionId: _v1,
      setCurrentSessionId: _v2,
      updateCurrentSessionData: _v3,
      currentSessionData: _v4
    } = _v12((0, _v10.useShallow)(_v0 => {
      var _v1;
      let _v2;
      return {
        currentSessionId: _v0.currentSessionId,
        setCurrentSessionId: _v0.setCurrentSessionId,
        updateCurrentSessionData: _v0.updateCurrentSessionData,
        currentSessionData: (_v1 = _v0.currentSessionId, _v2 = _v0.history.find(_v0 => _v0.id === _v1), _v1 && _v2 ? _v2.data : _v11)
      };
    }));
    return (0, _v1.useMemo)(() => {
      _v0 && _v2(_v0);
    }, [_v0, _v2]), {
      currentSessionId: _v1,
      currentSessionData: _v4,
      updateCurrentSessionData: _v3
    };
  }], 0);
}