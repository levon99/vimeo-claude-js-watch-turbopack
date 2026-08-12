{
  "use strict";

  _v0.s(["refreshEntityData", () => _v18, "refreshLeadCaptureData", () => _v19, "useGlobalStore", () => _v17], 0), _v0.i(0);
  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = (_v0, _v1) => (0, _v1.create)((0, _v3.immer)((0, _v2.devtools)(_v0, {
    name: _v1,
    enabled: !1
  })));
  _v0.s(["createImmerStore", 0, _v4], 0);
  var _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  let _v9 = (_v0, _v1, _v2) => {
      let _v3 = _v1.split("."),
        _v4 = _v3.pop() || "",
        _v5 = _v3.reduce((_v0, _v1) => _v0[_v1], _v0),
        _v6 = _v5[_v4];
      return "object" != typeof _v6 || "object" != typeof _v2 || _v6 instanceof Array || _v2 instanceof Array ? _v5[_v4] = _v2 : null === _v2 && null === _v5[_v4] ? _v5[_v4] = null : _v5[_v4] = {
        ..._v5[_v4],
        ..._v2
      }, _v6;
    },
    _v10 = /[$&+,:;=?@#|'<>.\-^*()%!]/,
    _v11 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
  }, "getValidator", 0, (_v0, _v1) => _v0 === _v5.FORM_FIELD_NAME_VALUES.EMAIL ? _v0 => _v11.test(_v0) ? void 0 : _v8.default.InvalidEmailAddress : _v1 ? _v0 => "string" == typeof _v0 ? _v0.length > 0 ? void 0 : _v8.default.ThisFieldIsRequired : "boolean" == typeof _v0 ? _v0 ? void 0 : _v8.default.ThisFieldIsRequired : void 0 : () => void 0, "hasAutoFilled", 0, _v0 => {
    try {
      return !_v0.nativeEvent?.inputType;
    } catch (_v0) {
      return !0;
    }
  }, "htmlToText", 0, _v0 => new DOMParser().parseFromString(_v0, "text/html").body.textContent || "", "isNumber", 0, _v0 => !isNaN(Number(_v0)), "isScrollBottom", 0, function (_v0) {
    let _v1 = _v0.target;
    return 10 > Math.abs(_v1.scrollHeight - _v1.scrollTop - _v1.clientHeight);
  }, "isValidPresetsName", 0, _v0 => !_v10.test(_v0), "setNestedObject", 0, _v9], 0), _v0.s(["cleanUndoRedoHistory", () => _v14, "getLocationState", () => _v15], 0);
  var _v12 = _v0.i(0),
    _v13 = _v0.i(0);
  let _v14 = _v0 => {
      let _v1 = _v17.getState().past,
        _v2 = _v17.getState().future,
        _v3 = _v0 => (!["logo", "background"].includes(_v0.key) || _v0.value.uri !== _v0?.uri) && !0,
        _v4 = _v1.filter(_v3),
        _v5 = _v2.filter(_v3);
      _v17.setState({
        past: _v4,
        future: _v5
      });
    },
    _v15 = () => ({
      [_v12.LOCATION_STATE.TAB]: (0, _v13.parseLocationQuery)(_v12.LOCATION_STATE.TAB),
      [_v12.LOCATION_STATE.SIDE_MENU]: (0, _v13.parseLocationQuery)(_v12.LOCATION_STATE.SIDE_MENU),
      [_v12.LOCATION_STATE.PREVIEW_TYPE]: (0, _v13.parseLocationQuery)(_v12.LOCATION_STATE.PREVIEW_TYPE),
      [_v12.LOCATION_STATE.SECTION]: (0, _v13.parseLocationQuery)(_v12.LOCATION_STATE.SECTION)
    }),
    _v16 = {
      past: [],
      future: []
    },
    _v17 = _v4((_v0, _v1) => {
      let _v2 = {
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
              let {
                  past: _v4,
                  leadCapture: _v5
                } = _v1(),
                _v6 = (0, _v6.default)(_v5),
                _v7 = _v9(_v6, _v0, _v1);
              if (!(!_v3 && (0, _v7.default)(_v5, _v6))) return _v2 ? _v2({
                leadCapture: _v6
              }) : (_v2({
                leadCapture: _v6
              }), setTimeout(() => {
                _v2({
                  past: [..._v4, {
                    key: _v0,
                    value: _v7,
                    locationState: _v15()
                  }],
                  future: []
                });
              }, 0)), _v7;
            },
            _v4 = _v1()?.leadCapture || {};
          return {
            ..._v16,
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
              }, void 0, "undo"), [_v2.key, _v2.value, _v2.locationState];
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
              }, void 0, "redo"), [_v2.key, _v2.value, _v2.locationState];
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
        })(_v2),
        ...(_v0 => {
          let _v1,
            _v2,
            _v3,
            _v4,
            _v5,
            {
              set: _v6,
              get: _v7
            } = _v0,
            _v8 = (_v1 = _v7, _v1()?.presets),
            _v9 = (_v2 = _v7, _v2()?.totalPresets || 0),
            _v10 = (_v3 = _v7, _v3()?.presetLoading || !1);
          return {
            presets: _v8,
            totalPresets: _v9,
            defaultPreset: (_v4 = _v7, _v4()?.defaultPreset),
            presetLoading: _v10,
            parentPreset: (_v5 = _v7, _v5()?.parentPreset),
            setPresets: _v0 => _v6(() => ({
              presets: _v0
            })),
            setDefaultPreset: _v0 => _v6(() => ({
              defaultPreset: _v0
            })),
            setTotalPresets: _v0 => _v6(() => ({
              totalPresets: _v0
            })),
            setPresetLoading: _v0 => _v6(() => ({
              presetLoading: _v0
            })),
            setParentPreset: _v0 => _v6(() => ({
              parentPreset: _v0
            }))
          };
        })(_v2),
        ...(_v0 => {
          var _v1;
          let _v2,
            {
              set: _v3,
              get: _v4
            } = _v0,
            _v5 = (_v1 = _v4, (_v2 = _v1()?.entity) || {});
          return {
            entityState: _v5.defaultState,
            entity: _v5,
            authRoomPassword: null,
            pageReferrer: null,
            setEntityState: _v0 => _v3(() => ({
              entityState: _v0
            })),
            setEntity: _v0 => _v3(() => ({
              entity: _v0
            })),
            setSchedule: _v0 => {
              let {
                entity: _v1
              } = _v4();
              _v3({
                entity: {
                  ..._v1,
                  schedule: _v0
                }
              });
            },
            setAuthRoomPassword: _v0 => _v3({
              authRoomPassword: _v0
            }),
            setPageReferrer: _v0 => _v3({
              pageReferrer: _v0
            })
          };
        })(_v2),
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
          let _v2 = Object.entries(_v1().patchApiStatus).filter(_v0 => !0 === _v0[1]);
          _v0(() => ({
            patchApiStatus: {
              ..._v2,
              [_v0]: _v1
            }
          }), void 0, "setPatchApiStatus");
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
    _v18 = _v17.getState().refreshEntityData,
    _v19 = _v17.getState().refreshLeadCaptureData,
    _v20 = _v4(_v0 => ({
      selectedSection: _v5.SECTION_TYPES.FORM,
      setSelectedSection: _v0 => _v0({
        selectedSection: _v0
      })
    }), "sectionStore");
  _v0.s(["useSectionStore", 0, _v20], 0);
}