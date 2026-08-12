{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.i(0);
  let _v2 = location.host.endsWith(".ci.vimeows.com");
  function _v3(_v0, _v1, _v2) {
    return Math.min(Math.max(_v0, _v1), _v2);
  }
  function _v4(_v0, _v1, _v2) {
    return _v3(_v0 / Math.max(("x" === _v2 ? window.innerWidth : window.innerHeight) - _v1, 1), 0, 1);
  }
  _v0.s(["IS_DEV", 0, _v2, "IS_SSR", 0, !1], 0), _v0.s(["positionFromPercentage", 0, function (_v0, _v1, _v2, _v3) {
    return {
      x: _v3(_v0, 0, 1) * (window.innerWidth - _v2),
      y: _v3(_v1, 0, 1) * (window.innerHeight - _v3)
    };
  }, "positionToPercentage", 0, function (_v0, _v1, _v2, _v3) {
    return {
      x: _v4(_v0, _v2, "x"),
      y: _v4(_v1, _v3, "y")
    };
  }, "relativeWindowOffset", 0, _v4], 0);
  let _v5 = () => ({
      scrollingState: "disabled",
      scrollModeForInput: void 0,
      isGeneratePanelShown: !1,
      isPopOverVisible: !1,
      isFollowupPromptShown: !1,
      isRecognitionActive: !1,
      isUpsellModalShown: !1,
      scrollPaused: !1,
      words: null,
      spacerHeight: 0,
      textProgress: 0,
      isPoppedOut: !1,
      lastShownAs: void 0,
      promptRequestError: null,
      promptRequestAbortController: null,
      promptRequestStatus: "idle",
      receivedPromptCharacters: null,
      isMicrophonePermissionsGranted: !1,
      audioTrack: null
    }),
    _v6 = [{
      mode: "dictationBased"
    }, {
      mode: "staticSpeed",
      speed: 0
    }, {
      mode: "staticSpeed",
      speed: .5
    }, {
      mode: "staticSpeed",
      speed: 1
    }, {
      mode: "staticSpeed",
      speed: 1.5
    }, {
      mode: "staticSpeed",
      speed: 2
    }];
  var _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  let {
      debug: _v9
    } = (0, _v7.getLogger)("useTeleprompterStore"),
    _v10 = (0, _v8.createPersistentStore)((_v0, _v1) => ({
      ..._v5(),
      persistentData: {
        autoScrollSpeed: 1,
        scrollMode: void 0,
        contentSource: null,
        fontSize: 28,
        width: .5,
        height: .5,
        positionX: .5,
        positionY: _v4(8, .5 * window.innerHeight, "y"),
        poppedOutWidth: 640,
        poppedOutHeight: 300,
        poppedOutPositionX: null,
        poppedOutPositionY: null,
        poppedOutPrevWindowWidth: null,
        poppedOutPrevWindowHeight: null,
        poppedOutScrollingState: "paused",
        isSpeechRecognitionSupported: null,
        scriptGeneratorModifiers: {
          duration: "default",
          tone: "default"
        },
        isPrivacyLinkWasShowed: !1,
        surveyThumbsSelected: void 0
      },
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
          ..._v5()
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
        let _v0 = _v5();
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
          _v0 !== _v0.mode && (_v4(_v0.mode), _v9('changed "userDesired" scroll mode', {
            scrollMode: _v0.mode
          }), _v6 = !0), "staticSpeed" === _v0.mode && _v1 !== _v0.speed && (_v1({
            autoScrollSpeed: _v0.speed
          }), _v9("changed autoscroll speed", {
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
        if (_v0) "dictationBased" !== _v0 || _v3 || (_v9('unset "userDesired" as "dictationBased" scroll mode.'), _v2("staticSpeed"));else {
          let _v0 = _v3 ? "dictationBased" : "staticSpeed";
          _v2(_v0), _v9('changed "userDesired" scroll mode.', {
            newScrollMode: _v0
          });
        }
      },
      getAvailableScrollModes: _v0 => {
        let _v1 = !1 !== _v0;
        return _v6.filter(_v0 => !!_v1 || "dictationBased" !== _v0.mode);
      },
      updateBoundaries: (_v0, _v1 = !1) => {
        let _v2 = {};
        Object.keys(_v0).forEach(_v0 => {
          void 0 !== _v0[_v0] && (_v2[function (_v0, _v1) {
            switch (_v0) {
              case "positionX":
                return _v1 ? "poppedOutPositionX" : _v0;
              case "positionY":
                return _v1 ? "poppedOutPositionY" : _v0;
              case "width":
                return _v1 ? "poppedOutWidth" : _v0;
              case "height":
                return _v1 ? "poppedOutHeight" : _v0;
            }
          }(_v0, _v1)] = _v0[_v0]);
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
  function _v11({
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
  (0, _v8.rehydrate)(_v10), _v0.s(["useTeleprompterStore", 0, _v10], 0), _v0.s(["getResultingScrollMode", 0, _v11, "useScrollMode", 0, function () {
    let _v0 = _v10(({
        scrollModeForInput: _v0
      }) => _v0),
      _v1 = _v10(({
        persistentData: _v0
      }) => _v0.scrollMode);
    return (0, _v1.useMemo)(() => _v11({
      autoEvaluatedForCurrentInput: _v0,
      userDesiredAndPersistent: _v1
    }), [_v0, _v1]);
  }], 0);
  var _v12 = _v0.i(0);
  let _v13 = {
      teleprompterRawContent: "",
      teleprompterTextContent: "",
      scriptGeneratorPrompt: "",
      scriptGeneratorIsSurveyShown: !1,
      isTeleprompterShown: !1,
      conversationHistory: []
    },
    _v14 = (0, _v8.createPersistentStore)(_v0 => ({
      currentSessionId: null,
      history: [],
      setCurrentSessionId: _v0 => {
        _v0(_v0 => {
          _v0.currentSessionId !== _v0 && (_v0.currentSessionId = _v0, !_v0.history.find(_v0 => _v0.id === _v0) && (_v0.history.push({
            id: _v0,
            data: _v13
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
              ..._v13,
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
  (0, _v8.rehydrate)(_v14), _v0.s(["useSession", 0, _v0 => {
    let {
      currentSessionId: _v1,
      setCurrentSessionId: _v2,
      updateCurrentSessionData: _v3,
      currentSessionData: _v4
    } = _v14((0, _v12.useShallow)(_v0 => {
      var _v1;
      let _v2;
      return {
        currentSessionId: _v0.currentSessionId,
        setCurrentSessionId: _v0.setCurrentSessionId,
        updateCurrentSessionData: _v0.updateCurrentSessionData,
        currentSessionData: (_v1 = _v0.currentSessionId, _v2 = _v0.history.find(_v0 => _v0.id === _v1), _v1 && _v2 ? _v2.data : _v13)
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