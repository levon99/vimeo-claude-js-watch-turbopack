{
  "use strict";

  _v0.s(["refreshEntityData", () => _v17, "refreshLeadCaptureData", () => _v18, "useGlobalStore", () => _v16], 0), _v0.s(["cleanUndoRedoHistory", () => _v13, "getLocationState", () => _v14], 0);
  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = (_v0, _v1, _v2) => {
      let _v3 = _v1.split("."),
        _v4 = _v3.pop() || "",
        _v5 = _v3.reduce((_v0, _v1) => _v0[_v1], _v0),
        _v6 = _v5[_v4];
      return "object" != typeof _v6 || "object" != typeof _v2 || _v6 instanceof Array || _v2 instanceof Array ? _v5[_v4] = _v2 : null === _v2 && null === _v5[_v4] ? _v5[_v4] = null : _v5[_v4] = {
        ..._v5[_v4],
        ..._v2
      }, _v6;
    },
    _v8 = /[$&+,:;=?@#|'<>.\-^*()%!]/,
    _v9 = _v0 => !_v8.test(_v0),
    _v10 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  _v0.s(["getImageResolution", 0, _v0 => new Promise((_v0, _v1) => {
    try {
      let _v0 = new Image();
      _v0.onload = () => {
        _v0({
          height: _v0.height,
          width: _v0.width
        });
      }, _v0.src = window.URL.createObjectURL(_v0);
    } catch (_v0) {
      _v1(_v0);
    }
  }), "getTranslateValues", 0, _v0 => {
    if (!_v0) return {
      x: 0,
      y: 0,
      z: 0
    };
    let _v1 = window.getComputedStyle(_v0),
      _v2 = _v1.transform || _v1.webkitTransform || _v1.mozTransform;
    if ("none" === _v2 || void 0 === _v2) return {
      x: 0,
      y: 0,
      z: 0
    };
    let _v3 = _v2.includes("3d") ? "3d" : "2d",
      _v4 = _v2.match(/matrix.*\((.+)\)/)[1].split(", ");
    return "2d" === _v3 ? {
      x: parseInt(_v4[4]),
      y: parseInt(_v4[5]),
      z: 0
    } : "3d" === _v3 ? {
      x: parseInt(_v4[12]),
      y: parseInt(_v4[13]),
      z: parseInt(_v4[14])
    } : {
      x: 0,
      y: 0,
      z: 0
    };
  }, "getUpdatedItemsAddProvider", 0, (_v0, _v1, _v2) => {
    let _v3 = [..._v0],
      _v4 = [..._v3[_v2].connectedFields],
      _v5 = _v4.findIndex(_v0 => _v0.emailServiceProviderType === _v1.emailServiceProviderType);
    return _v5 >= 0 ? _v4[_v5] = _v1 : _v4.push(_v1), _v3[_v2] = {
      ..._v3[_v2],
      connectedFields: _v4
    }, _v3;
  }, "getUpdatedItemsRemoveProvider", 0, (_v0, _v1, _v2) => {
    let _v3 = [..._v0],
      _v4 = [..._v3[_v2].connectedFields],
      _v5 = _v4.findIndex(_v0 => _v0.emailServiceProviderType === _v1);
    return _v4.splice(_v5, 1), _v3[_v2] = {
      ..._v3[_v2],
      connectedFields: _v4
    }, _v3;
  }, "getValidator", 0, (_v0, _v1, _v2) => _v0 === _v5.FORM_FIELD_NAME_VALUES.EMAIL ? _v0 => _v10.test(_v0) ? void 0 : _v1.InvalidEmailAddress : _v2 ? _v0 => "string" == typeof _v0 ? _v0.length > 0 ? void 0 : _v1.ThisFieldIsRequired : "boolean" == typeof _v0 ? _v0 ? void 0 : _v1.ThisFieldIsRequired : void 0 : () => void 0, "hasAutoFilled", 0, _v0 => {
    try {
      return !_v0.nativeEvent?.inputType;
    } catch (_v0) {
      return !0;
    }
  }, "hasValidPresetNameCharacters", 0, _v9, "htmlToText", 0, _v0 => new DOMParser().parseFromString(_v0, "text/html").body.textContent || "", "isNumber", 0, _v0 => !isNaN(Number(_v0)), "isPresetNameValid", 0, (_v0, _v1) => {
    let _v2 = _v0.trim();
    return _v2.length > 0 && _v2.length <= _v5.MAX_PRESET_NAME_LENGTH && _v9(_v0) && !_v1.includes(_v2);
  }, "isScrollBottom", 0, function (_v0) {
    let _v1 = _v0.target;
    return 10 > Math.abs(_v1.scrollHeight - _v1.scrollTop - _v1.clientHeight);
  }, "setNestedObject", 0, _v7], 0);
  var _v11 = _v0.i(0),
    _v12 = _v0.i(0);
  let _v13 = _v0 => {
      let _v1 = _v16.getState().past,
        _v2 = _v16.getState().future,
        _v3 = _v0 => (!["logo", "background"].includes(_v0.key) || _v0.value.uri !== _v0?.uri) && !0,
        _v4 = _v1.filter(_v3),
        _v5 = _v2.filter(_v3);
      _v16.setState({
        past: _v4,
        future: _v5
      });
    },
    _v14 = () => ({
      [_v11.LOCATION_STATE.TAB]: (0, _v12.parseLocationQuery)(_v11.LOCATION_STATE.TAB),
      [_v11.LOCATION_STATE.SIDE_MENU]: (0, _v12.parseLocationQuery)(_v11.LOCATION_STATE.SIDE_MENU),
      [_v11.LOCATION_STATE.PREVIEW_TYPE]: (0, _v12.parseLocationQuery)(_v11.LOCATION_STATE.PREVIEW_TYPE),
      [_v11.LOCATION_STATE.SECTION]: (0, _v12.parseLocationQuery)(_v11.LOCATION_STATE.SECTION)
    }),
    _v15 = {
      past: [],
      future: []
    },
    _v16 = (0, _v2.createImmerStore)((_v0, _v1) => {
      let _v2 = null,
        _v3 = {
          set: _v0,
          get: _v1
        };
      return {
        ...(_v0 => {
          let {
              get: _v1,
              set: _v2
            } = _v0,
            _v3 = (_v0, _v1, _v2, _v3 = !1) => {
              let _v4,
                {
                  leadCapture: _v5
                } = _v1(),
                _v6 = (0, _v4.default)(_v5),
                _v7 = _v0 === _v5.BATCH_PATCH_KEY ? _v1 : {
                  [_v0]: _v1
                },
                _v8 = Object.fromEntries(Object.entries(_v7).map(([_v0, _v1]) => [_v0, _v7(_v6, _v0, _v1)])),
                _v9 = _v0 === _v5.BATCH_PATCH_KEY ? _v8 : _v8[_v0],
                _v10 = _v7.enabledLocales,
                _v11 = void 0 !== _v10 ? {
                  languages: _v10,
                  selectedLanguage: (_v4 = _v1().selectedLanguage) === _v6.DEFAULT_LANGUAGE || _v10.includes(_v4) ? _v4 : _v6.DEFAULT_LANGUAGE
                } : {};
              if (!(!_v3 && (0, _v1.default)(_v5, _v6))) {
                if (_v2) _v2({
                  leadCapture: _v6,
                  ..._v11
                });else {
                  let _v0 = _v14();
                  _v2(_v0 => {
                    _v0.leadCapture = _v6, Object.assign(_v0, _v11), _v0.past.push({
                      key: _v0,
                      value: _v9,
                      locationState: _v0
                    }), _v0.future = [];
                  });
                }
                return _v9;
              }
            },
            _v4 = _v1()?.leadCapture || {};
          return {
            ..._v15,
            leadCaptureState: _v5.defaultState,
            leadCapture: _v4,
            canUndo: () => _v1()?.past.length > 0,
            canRedo: () => _v1()?.future.length > 0,
            undo: () => {
              let {
                past: _v0,
                future: _v1
              } = _v1();
              if (0 === _v0.length) return;
              let _v2 = _v0[_v0.length - 1],
                _v3 = _v0.slice(0, -1),
                _v4 = _v3(_v2.key, _v2.value, !0);
              return _v2({
                past: _v3,
                future: [{
                  key: _v2.key,
                  value: _v4,
                  locationState: _v2.locationState
                }, ..._v1]
              }, void 0, "undo"), [_v2.key, _v2.value, _v2.locationState, _v4];
            },
            redo: () => {
              let {
                past: _v0,
                future: _v1
              } = _v1();
              if (0 === _v1.length) return;
              let _v2 = _v1[0],
                _v3 = _v1.slice(1),
                _v4 = _v3(_v2.key, _v2.value, !0);
              return _v2({
                past: [..._v0, {
                  key: _v2.key,
                  value: _v4,
                  locationState: _v2.locationState
                }],
                future: _v3
              }, void 0, "redo"), [_v2.key, _v2.value, _v2.locationState, _v4];
            },
            setLeadCapture: _v0 => {
              _v2(_v0 => {
                _v0.leadCapture = _v0;
              }, void 0, "setLeadCapture");
            },
            setLeadCaptureState: _v0 => _v2(() => ({
              leadCaptureState: _v0
            }), void 0, "setLeadCaptureState"),
            setLeadCaptureProperties: _v3,
            clearHistory: () => {
              let {
                past: _v0,
                future: _v1
              } = _v1();
              (0 !== _v0.length || 0 !== _v1.length) && _v2({
                past: [],
                future: []
              }, void 0, "clearHistory");
            }
          };
        })(_v3),
        ...(_v0 => {
          let _v1,
            _v2,
            _v3,
            _v4,
            _v5,
            _v6,
            {
              set: _v7,
              get: _v8
            } = _v0,
            _v9 = (_v1 = _v8, _v1()?.presets ?? []),
            _v10 = (_v2 = _v8, _v2()?.totalPresets || 0),
            _v11 = (_v3 = _v8, _v3()?.presetLoading || !1),
            _v12 = (_v4 = _v8, _v4()?.isSavingPreset || !1);
          return {
            presets: _v9,
            totalPresets: _v10,
            defaultPreset: (_v5 = _v8, _v5()?.defaultPreset),
            presetLoading: _v11,
            isSavingPreset: _v12,
            parentPreset: (_v6 = _v8, _v6()?.parentPreset),
            setPresets: _v0 => _v7(() => ({
              presets: _v0
            })),
            setDefaultPreset: _v0 => _v7(() => ({
              defaultPreset: _v0
            })),
            setTotalPresets: _v0 => _v7(() => ({
              totalPresets: _v0
            })),
            setPresetLoading: _v0 => _v7(() => ({
              presetLoading: _v0
            })),
            setIsSavingPreset: _v0 => _v7(() => ({
              isSavingPreset: _v0
            })),
            setParentPreset: _v0 => _v7(() => ({
              parentPreset: _v0
            }))
          };
        })(_v3),
        ...(0, _v3.entityStore)(_v3),
        ...(_v0 => {
          let {
            set: _v1
          } = _v0;
          return {
            selectedLanguage: _v6.DEFAULT_LANGUAGE,
            viewerLanguage: null,
            languages: [],
            isFieldsTranslationModalOpen: !1,
            isTranslating: !1,
            translationRevision: 0,
            translationGeneration: 0,
            sourceSnapshots: {},
            setSelectedLanguage: _v0 => _v1(() => ({
              selectedLanguage: _v0
            }), void 0, "setSelectedLanguage"),
            setViewerLanguage: _v0 => _v1(() => ({
              viewerLanguage: _v0
            }), void 0, "setViewerLanguage"),
            setLanguages: _v0 => _v1(() => ({
              languages: _v0
            }), void 0, "setLanguages"),
            setIsFieldsTranslationModalOpen: _v0 => _v1(() => ({
              isFieldsTranslationModalOpen: _v0
            }), void 0, "setIsFieldsTranslationModalOpen"),
            setIsTranslating: _v0 => _v1(() => ({
              isTranslating: _v0
            }), void 0, "setIsTranslating"),
            setSourceSnapshot: (_v0, _v1) => _v1(_v0 => ({
              sourceSnapshots: {
                ..._v0.sourceSnapshots,
                [_v0]: _v1
              }
            }), void 0, "setSourceSnapshot"),
            invalidateTranslations: () => _v1(_v0 => ({
              translationGeneration: _v0.translationGeneration + 1,
              isTranslating: !1,
              sourceSnapshots: {}
            }), void 0, "invalidateTranslations"),
            bumpTranslationRevision: () => _v1(_v0 => ({
              translationRevision: _v0.translationRevision + 1
            }), void 0, "bumpTranslationRevision")
          };
        })(_v3),
        entityType: "",
        entityId: "0",
        isDefault: !0,
        presetName: "",
        backgroundColorLivePreview: {},
        viewer: null,
        entityOwnerId: null,
        uploadOption: "",
        sideMenuType: _v5.SIDE_MENU_CONTENT.SETTINGS,
        selectedSettingsTab: _v5.FORM_TAB_OPTIONS.APPEARANCE,
        selectedNonEditableField: "",
        providers: [],
        providerFields: {
          marketo: {
            fields: [],
            errors: []
          }
        },
        currentSelectedFieldIndex: 0,
        lastSelectedFieldIndex: 0,
        emailAddressCached: "",
        patchApiStatus: {},
        formPendingChanges: {},
        formSavingChanges: {},
        formSaveHandler: null,
        emailSaveState: null,
        calendarLinks: {
          google: "",
          outlook: "",
          ical: ""
        },
        refreshEntityDataCounter: 0,
        refreshLeadCaptureDataCounter: 0,
        isAutoSavingEmail: !1,
        isRegistrationOn: !1,
        canCompleteEvent: !1,
        canUndoEmail: !1,
        canRedoEmail: !1,
        autoSaveMutex: !1,
        setEntityType: _v0 => _v0(() => ({
          entityType: _v0
        }), void 0, "setEntityType"),
        setEntityId: _v0 => _v0(() => ({
          entityId: _v0
        }), void 0, "setEntityId"),
        setIsDefault: _v0 => _v0(() => ({
          isDefault: _v0
        }), void 0, "setIsDefault"),
        setBackgroundColorLivePreview: _v0 => _v0(() => ({
          backgroundColorLivePreview: {
            ..._v1().backgroundColorLivePreview,
            ..._v0
          }
        }), void 0, "setBackgroundColorLivePreview"),
        setPresetName: _v0 => _v0(() => ({
          presetName: _v0
        }), void 0, "setPresetName"),
        setViewer: _v0 => _v0(() => ({
          viewer: _v0
        }), void 0, "setViewer"),
        setEntityOwnerId: _v0 => _v0(() => ({
          entityOwnerId: _v0
        }), void 0, "setEntityOwnerId"),
        setUploadOption: _v0 => _v0(() => ({
          uploadOption: _v0
        }), void 0, "setUploadOption"),
        setSideMenuType: _v0 => _v0(() => ({
          sideMenuType: _v0
        }), void 0, "setSideMenuType"),
        setSelectedSettingsTab: _v0 => _v0(() => ({
          selectedSettingsTab: _v0
        }), void 0, "setSelectedSettingsTab"),
        setSelectedNonEditableField: _v0 => _v0(() => ({
          selectedNonEditableField: _v0
        }), void 0, "setSelectedNonEditableField"),
        setProviders: _v0 => _v0(() => ({
          providers: _v0
        }), void 0, "setProviders"),
        setProviderFields: (_v0, _v1) => _v0(() => ({
          providerFields: {
            ..._v1().providerFields,
            [_v0]: _v1
          }
        }), void 0, "setProviderFields"),
        setCurrentSelectedFieldIndex: _v0 => _v0(_v0 => ({
          lastSelectedFieldIndex: _v0.currentSelectedFieldIndex,
          currentSelectedFieldIndex: _v0
        }), void 0, "setCurrentSelectedFieldIndex"),
        setEmailAddressCached: _v0 => _v0(() => ({
          emailAddressCached: _v0
        }), void 0, "setEmailAddressCached"),
        setPatchApiStatus: (_v0, _v1) => {
          let _v2 = {
            ..._v1().patchApiStatus
          };
          _v1 ? _v2[_v0] = _v1 : delete _v2[_v0], _v0({
            patchApiStatus: _v2
          }, void 0, "setPatchApiStatus");
        },
        recordFormChange: (_v0, _v1) => {
          let _v2 = {
              ..._v1().formPendingChanges
            },
            _v3 = _v0 in _v2 ? _v2[_v0].originalValue : _v1.originalValue;
          (0, _v1.default)(_v1.value, _v3) ? delete _v2[_v0] : _v2[_v0] = {
            ..._v1,
            originalValue: _v3
          }, _v0({
            formPendingChanges: _v2
          }, void 0, "recordFormChange");
        },
        settleFormChanges: _v0 => {
          _v0({
            formPendingChanges: _v0 ? _v1().formPendingChanges : {
              ..._v1().formSavingChanges,
              ..._v1().formPendingChanges
            },
            formSavingChanges: {}
          }, void 0, "settleFormChanges");
        },
        setFormSaveHandler: _v0 => _v0({
          formSaveHandler: _v0
        }, void 0, "setFormSaveHandler"),
        setEmailSaveState: _v0 => _v0({
          emailSaveState: _v0
        }, void 0, "setEmailSaveState"),
        saveFormChanges: () => _v2 || (0 === Object.keys(_v1().formPendingChanges).length ? Promise.resolve(!0) : _v2 = (async () => {
          for (; Object.keys(_v1().formPendingChanges).length > 0;) {
            _v0({
              formSavingChanges: {
                ..._v1().formPendingChanges
              },
              formPendingChanges: {}
            }, void 0, "saveFormChanges");
            let _v0 = (await _v1().formSaveHandler?.()) ?? !1;
            if (_v1().settleFormChanges(_v0), !_v0) return !1;
          }
          return _v1().clearHistory(), !0;
        })().finally(() => {
          _v2 = null;
        })),
        clearPendingFormChanges: () => _v0({
          formPendingChanges: {}
        }, void 0, "clearPendingFormChanges"),
        saveRegistrationChanges: () => {
          _v1().saveFormChanges(), _v1().emailSaveState?.save();
        },
        discardRegistrationChanges: (_v0 = !0) => {
          _v1().setLeadCaptureProperties("uri", "", !0), _v1().clearHistory(), _v0(_v0 => ({
            formPendingChanges: {},
            formSavingChanges: {},
            sourceSnapshots: {},
            refreshLeadCaptureDataCounter: _v0.refreshLeadCaptureDataCounter + Number(_v0)
          }), void 0, "discardRegistrationChanges");
        },
        setCalendarLinks: _v0 => _v0(() => ({
          calendarLinks: _v0
        }), void 0, "setCalendarLinks"),
        refreshEntityData: () => _v0({
          refreshEntityDataCounter: _v1().refreshEntityDataCounter + 1
        }, void 0, "refreshEntityData"),
        refreshLeadCaptureData: () => _v0({
          refreshLeadCaptureDataCounter: _v1().refreshLeadCaptureDataCounter + 1
        }, void 0, "refreshLeadCaptureData"),
        setIsAutoSavingEmail: _v0 => _v0(() => ({
          isAutoSavingEmail: _v0
        }), void 0, "setIsAutoSavingEmail"),
        setIsRegistrationOn: _v0 => _v0(() => ({
          isRegistrationOn: _v0
        }), void 0, "setIsRegistrationOn"),
        setHasUpsell: _v0 => _v0(() => ({
          hasUpsell: _v0
        }), void 0, "setHasUpsell"),
        setCanCompleteEvent: _v0 => _v0(() => ({
          canCompleteEvent: _v0
        }), void 0, "setCanCompleteEvent"),
        setCanRedoEmail: _v0 => _v0({
          canRedoEmail: _v0
        }, void 0, "setCanRedoEmail"),
        setCanUndoEmail: _v0 => _v0({
          canUndoEmail: _v0
        }, void 0, "setCanUndoEmail")
      };
    }, "globalStore"),
    _v17 = _v16.getState().refreshEntityData,
    _v18 = _v16.getState().refreshLeadCaptureData,
    _v19 = (0, _v2.createImmerStore)(_v0 => ({
      selectedSection: _v5.SECTION_TYPES.FORM,
      setSelectedSection: _v0 => _v0({
        selectedSection: _v0
      })
    }), "sectionStore");
  _v0.s(["useSectionStore", 0, _v19], 0);
}