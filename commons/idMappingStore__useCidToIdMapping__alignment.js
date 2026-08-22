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
    _v10 = _v0.i(0),
    _v11 = _v0.i(0);
  let _v12 = (_v0, _v1) => {
      let _v2 = {};
      for (let _v0 in _v0) _v1.includes(_v0) && (_v2[_v0] = _v0[_v0]);
      return _v2;
    },
    _v13 = (0, _v11.createImmerStore)((_v0, _v1) => ({
      customFields: {},
      hiddenFields: {},
      setCustomFieldsMapping: (_v0, _v1) => _v0(() => ({
        customFields: {
          ..._v1().customFields,
          [_v0]: _v1
        }
      })),
      setHiddenFieldsMapping: (_v0, _v1) => _v0(() => ({
        hiddenFields: {
          ..._v1().hiddenFields,
          [_v0]: _v1
        }
      })),
      burstCustomFieldsMappingCache: _v0 => _v0(() => ({
        customFields: _v12(_v1().customFields, _v0)
      })),
      burstHiddenFieldsMappingCache: _v0 => _v0(() => ({
        hiddenFields: _v12(_v1().hiddenFields, _v0)
      }))
    }), "idMappingStore"),
    _v14 = () => {
      let _v0 = _v13(_v0 => _v0.setHiddenFieldsMapping),
        _v1 = _v13(_v0 => _v0.setCustomFieldsMapping),
        _v2 = _v13(_v0 => _v0.burstCustomFieldsMappingCache),
        _v3 = _v13(_v0 => _v0.burstHiddenFieldsMappingCache),
        _v4 = (0, _v3.useCallback)((_v0, _v1) => {
          if (![_v9.RESPONSE_KEYS_MAP.customFields, _v9.RESPONSE_KEYS_MAP.hiddenFields].includes(_v0)) throw Error(`initializeIdUsingCidAsKey called with an invalid key: ${_v0}`);
          _v1.forEach(_v0 => {
            (_v0 === _v9.RESPONSE_KEYS_MAP.customFields ? _v1 : _v0)(_v0.id, {
              name: _v0.name,
              id: _v0.id
            });
          });
        }, [_v1, _v0]),
        _v5 = (0, _v3.useCallback)((_v0, _v1) => {
          if (![_v9.RESPONSE_KEYS_MAP.customFields, _v9.RESPONSE_KEYS_MAP.hiddenFields].includes(_v0)) throw Error(`updateNameUsingCidAsKey called with an invalid key: ${_v0}`);
          let _v2 = _v13.getState().customFields,
            _v3 = _v13.getState().hiddenFields;
          _v1.forEach(_v0 => {
            let _v1 = Object.entries(_v0 === _v9.RESPONSE_KEYS_MAP.customFields ? _v2 : _v3).find(_v0 => {
                let [_v1] = _v0;
                return _v0.cid.toString() === _v1;
              }),
              _v2 = _v1?.[1];
            (_v0 === _v9.RESPONSE_KEYS_MAP.customFields ? _v1 : _v0)(_v0.cid, {
              name: _v0.name,
              id: _v2?.id
            });
          });
        }, [_v1, _v0]),
        _v6 = (0, _v3.useCallback)((_v0, _v1) => {
          let _v2 = _v13.getState().customFields,
            _v3 = _v13.getState().hiddenFields;
          if (![_v9.RESPONSE_KEYS_MAP.customFields, _v9.RESPONSE_KEYS_MAP.hiddenFields].includes(_v0)) throw Error(`updateIdUsingName called with an invalid key: ${_v0}`);
          _v1.forEach(_v0 => {
            let _v1 = Object.entries(_v0 === _v9.RESPONSE_KEYS_MAP.customFields ? _v2 : _v3).find(_v0 => {
                let [, _v1] = _v0;
                return _v0.name === _v1.name;
              }),
              _v2 = _v1?.[0];
            _v2 && (_v0 === _v9.RESPONSE_KEYS_MAP.customFields ? _v1 : _v0)(_v2, {
              name: _v0.name,
              id: _v0.id
            });
          });
        }, [_v1, _v0]),
        _v7 = (0, _v3.useCallback)(() => {
          let _v0 = _v10.useGlobalStore.getState().leadCapture,
            _v1 = _v0.customFields.map(_v0 => _v0.cid.toString());
          _v3(_v0.hiddenFields.map(_v0 => _v0.cid.toString())), _v2(_v1);
        }, [_v2, _v3]);
      return (0, _v3.useMemo)(() => ({
        burstCache: _v7,
        updateIdUsingNameAsKey: _v6,
        initializeIdUsingCidAsKey: _v4,
        updateNameUsingCidAsKey: _v5
      }), [_v7, _v6, _v4, _v5]);
    };
  _v0.s(["useCidToIdMapping", 0, _v14], 0);
  let _v15 = ["alignment", "background", "secondaryButtonStyle", "confirmationPageDescription", "confirmationPageTitle", "primaryButtonStyle", "isEventDateSetToCalendar", "isEventDateVisible", "isSkippable", "joinPageTitle", "layout", "loginPageTitle", "logo", "metadata", "placement", "placementTimecode", "presetName", "privacyPolicyUrl", "uri", "customFields", "hiddenFields", "emailLists.name", "emailLists.providerId", "emailLists.listId", "emailLists.numberOfRegistrants", "emailLists.type", "emailLists.connectionOwnerName", "calendarLinks", "uuid", "isDefault", "isApproved", "parentForm", "nonEditableTextStyle", "privacyPolicyVersion", "hasActiveCrmExportConnection", "memberConnections"];
  _v0.s(["CRM_IMPORT_FIELDS", 0, ["uri", "status", "errorDetails", "emailProviderList.provider"], "ESP_API_FIELDS", 0, ["service_id", "service_type", "user_id", "name", "icon", "dark_icon", "connected", "lists.id", "lists.name"], "LEAD_CAPTURE_FORM_FIELDS", 0, _v15], 0);
  var _v16 = _v9,
    _v17 = _v0.i(0),
    _v18 = _v0.i(0);
  let _v19 = (_v0, _v1) => {
      if (_v0 === _v9.RESPONSE_KEYS_MAP.logo) {
        let _v0 = _v1.pictures?.sizes.reduce((_v0, _v1) => _v1.width < _v0.width ? _v1 : _v0, {
          width: 1 / 0,
          link: ""
        })?.link || "";
        return _v1.uri ? {
          ..._v1,
          pictures: void 0,
          url: _v0
        } : {
          ..._v1,
          pictures: void 0,
          url: void 0,
          isActive: !1
        };
      }
      if (_v0 === _v9.RESPONSE_KEYS_MAP.background) {
        let _v0 = _v1.pictures?.sizes.reduce((_v0, _v1) => _v1.width < _v0.width ? _v1 : _v0, {
            width: 1 / 0,
            link: ""
          })?.link || "",
          _v1 = _v1.pictures?.sizes.reduce((_v0, _v1) => _v1.width > _v0.width ? _v1 : _v0, {
            width: 0,
            link: ""
          })?.link || "";
        return {
          ..._v1,
          pictures: void 0,
          urlLow: _v0,
          urlHigh: _v1
        };
      }
      return _v1;
    },
    _v20 = (_v0, _v1) => {
      let _v2 = _v0 === _v9.RESPONSE_KEYS_MAP.customFields ? _v13.getState().customFields : _v0 === _v9.RESPONSE_KEYS_MAP.hiddenFields ? _v13.getState().hiddenFields : void 0,
        _v3 = _v0.split("."),
        _v4 = _v3.length,
        _v5 = (0, _v18.intoSnakeCase)(_v3[0]);
      if (_v5 === _v9.UUID && (_v5 = (0, _v18.intoSnakeCase)("presetId")), ["placement", "placementTimecode"].includes(_v0)) return _v22(_v0, _v1);
      let _v6 = Object.keys(_v9.PREVIEW_HTML_KEYS);
      if (_v3.some(_v0 => _v6.includes(_v0))) return {
        formattedKey: _v5,
        formattedPayload: _v1
      };
      let _v7 = _v3[_v4 - 1] || "",
        _v8 = _v4 > 1 ? {
          [_v7]: _v1
        } : _v1,
        _v9 = _v8 instanceof Object ? (0, _v18.deepSnakeCase)(_v8) : _v8;
      return [_v9.RESPONSE_KEYS_MAP.customFields, _v9.RESPONSE_KEYS_MAP.hiddenFields].includes(_v0) && _v2 && (_v9 = [..._v9].map(_v0 => ({
        ..._v0,
        id: _v2[_v0.cid]?.id
      }))), {
        formattedKey: _v5,
        formattedPayload: _v9
      };
    },
    _v21 = _v0 => {
      let _v1 = [_v9.CustomFieldTypes.Checkbox, _v9.CustomFieldTypes.Dropdown],
        _v2 = _v0.length > 0 ? Math.max(..._v0.map(_v0 => _v0.id || 0)) : 1;
      return _v0.map((_v0, _v1) => {
        let _v2 = _v1.includes(_v0.type) ? {
          description: _v0.metadata?.description,
          color: _v0.metadata?.color,
          options: _v0.metadata?.options ? _v0.metadata.options.map(_v0 => ({
            ..._v0,
            cid: _v0.optionPosition
          })).sort((_v0, _v1) => _v0.optionPosition - _v1.optionPosition) : void 0
        } : _v0.metadata;
        return {
          ..._v0,
          cid: _v0.id ?? _v2 + 1 + _v1,
          metadata: _v2
        };
      }).sort((_v0, _v1) => _v0.position - _v1.position);
    },
    _v22 = (_v0, _v1) => {
      let _v2 = _v10.useGlobalStore.getState().leadCapture.placementTimecode,
        _v3 = "placement";
      if ("placementTimecode" === _v0) return {
        formattedKey: _v3,
        formattedPayload: {
          key: _v9.VIDEO_PLACEMENT.DURING,
          timecode: _v1
        }
      };
      {
        let _v0 = {
          key: _v1
        };
        return _v1 === _v9.VIDEO_PLACEMENT.DURING && (_v0.timecode = _v2), {
          formattedKey: _v3,
          formattedPayload: _v0
        };
      }
    },
    _v23 = _v0 => {
      let _v1 = "",
        _v2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        _v3 = _v2.length,
        _v4 = 0;
      for (; _v4 < _v0;) _v1 += _v2.charAt(Math.floor(Math.random() * _v3)), _v4 += 1;
      return _v1;
    };
  _v0.s(["formatCustomFieldPayload", 0, _v0 => {
    let _v1 = [_v9.CustomFieldTypes.Checkbox, _v9.CustomFieldTypes.Dropdown];
    return _v0.map(_v0 => ({
      ..._v0,
      metadata: _v1.includes(_v0.type) ? _v0.metadata : void 0
    }));
  }, "formatFields", 0, _v21, "formatPatchPayload", 0, _v20, "getMarketoFieldName", 0, _v0 => {
    if (_v0) return new Promise((_v0, _v1) => {
      fetch(`/settings/marketing/provider/marketo_field_name?field_api_name=${_v0}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json"
        }
      }).then(_v0 => _v0.json()).then(({
        field_name: _v0
      }) => {
        _v0(_v0);
      }).catch(_v0 => {
        _v1(_v0);
      });
    });
  }, "getMarketoFields", 0, _v0 => new Promise((_v0, _v1) => {
    fetch(`/settings/marketing/provider/marketo_fields${_v0 ? `?page_token=${_v0}` : ""}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json"
      }
    }).then(_v0 => _v0.json()).then(({
      fields: _v0 = {},
      nextPageToken: _v1,
      errors: _v2 = []
    }) => {
      _v0({
        fields: _v0 = Object.keys(_v0).map(_v0 => ({
          key: _v0,
          value: _v0[_v0]
        })),
        nextPageToken: _v1,
        errors: _v2
      });
    }).catch(_v0 => {
      _v1({
        error: _v0
      });
    });
  }), "isDataLoaded", 0, ({
    leadCaptureUri: _v0,
    entityUri: _v1
  }) => !!(_v0 && _v1), "makeId", 0, _v23, "responseTransformer", 0, _v19], 0);
  let _v24 = (_v0, _v1) => _v1.split(".").reduce((_v0, _v1) => _v0[_v1], _v0);
  _v0.s(["usePatchLeadCapture", 0, (_v0 = _v16.LEAD_CAPTURE_AUTO_SAVE_DEBOUNCED_INTERVAL, _v1 = !1) => {
    let _v2 = (0, _v10.useGlobalStore)(_v0 => _v0.entityType),
      _v3 = (0, _v10.useGlobalStore)(_v0 => _v0.setLeadCaptureProperties),
      _v4 = (0, _v10.useGlobalStore)(_v0 => _v0.setPatchApiStatus),
      _v5 = (0, _v10.useGlobalStore)(_v0 => _v0.recordFormChange),
      _v6 = (0, _v10.useGlobalStore)(_v0 => _v0.clearPendingFormChanges),
      _v7 = (0, _v10.useGlobalStore)(_v0 => _v0.clearHistory),
      _v8 = (0, _v10.useGlobalStore)(_v0 => _v0.setFormSaveHandler),
      _v9 = (0, _v10.useGlobalStore)(_v0 => _v0.patchApiStatus),
      _v10 = (0, _v10.useGlobalStore)(_v0 => _v0.setLeadCapture),
      _v11 = (0, _v10.useGlobalStore)(_v0 => _v0.setCalendarLinks),
      _v12 = (0, _v10.useGlobalStore)(_v0 => _v0.setPresetLoading),
      _v13 = (0, _v10.useGlobalStore)(_v0 => _v0.setParentPreset),
      _v14 = (0, _v10.useGlobalStore)(_v0 => _v0.hasUpsell),
      [_v15, _v16] = (0, _v6.usePatchLeadCaptureResourceIdForm)(),
      _v17 = (0, _v4.useToast)(),
      _v18 = (0, _v3.useRef)(""),
      _v19 = (0, _v3.useRef)(""),
      _v20 = (0, _v3.useRef)(""),
      {
        updateNameUsingCidAsKey: _v21,
        updateIdUsingNameAsKey: _v22,
        burstCache: _v23
      } = _v14(),
      _v24 = (0, _v3.useRef)([]),
      [_v25, _v26] = (0, _v3.useState)(!1),
      _v27 = (0, _v3.useRef)(null),
      _v28 = (0, _v10.useGlobalStore)(_v0 => _v0.setLeadCaptureState),
      {
        initializeIdUsingCidAsKey: _v29
      } = _v14(),
      {
        settings: _v30
      } = (0, _v8.useOrionSettings)(),
      _v31 = _v30.enable_explicit_registration_save;
    (0, _v3.useEffect)(() => {
      let {
        loading: _v0,
        error: _v1,
        called: _v2,
        data: _v3
      } = _v16;
      _v0 || _v1 || !_v2 ? _v1 && (_v19.current && (_v3(_v16.UUID, _v20.current, !0), _v19.current = "", _v20.current = "", _v12(!1)), _v31 && _v1 && (_v24.current = [], _v27.current?.(!1), _v27.current = null), _v14 && _v2 === _v7.ENTITY_TYPE.VIDEO || _v17({
        duration: 0,
        variant: "warning",
        render: _v0 => _v3.default.createElement(_v4.ToastRoot, {
          ..._v0
        }, _v3.default.createElement(_v5.Center, {
          gap: "sm"
        }, _v3.default.createElement(_v4.ToastIcon, null), _v3.default.createElement(_v4.ToastTitle, null, _v17.default.ChangesCouldNotBeSaved), _v3.default.createElement(_v4.ToastButton, {
          onClick: () => _v2.default.reload()
        }, _v17.default.Refresh)))
      })) : (_v31 || _v14 && _v2 === _v7.ENTITY_TYPE.VIDEO || _v17({
        title: _v17.default.ChangesSaved,
        status: "success"
      }), _v3 && Object.entries(_v3).forEach(([_v0, _v1]) => {
        [_v16.RESPONSE_KEYS_MAP.customFields, _v16.RESPONSE_KEYS_MAP.hiddenFields].includes(_v0) && _v22(_v0, _v1), _v0 === _v16.PARENT_FORM && _v13(_v1), (_v0 === _v16.UUID || _v0 === _v16.PRESET_NAME) && _v3(_v0, _v1, !0), "isDefault" === _v0 && _v3(_v0, _v1, !0);
      }), _v31 && _v1 && 0 === _v24.current.length && (_v27.current?.(!0), _v27.current = null));
    }, [_v2, _v16]), (0, _v3.useEffect)(() => {
      let _v0 = setInterval(async () => {
        if (!_v16.loading && !_v10.useGlobalStore.getState().autoSaveMutex) {
          let _v0 = _v24.current.shift();
          if (_v0) {
            let _v0 = !!(_v10.useGlobalStore.getState().leadCapture.isDefault || _v10.useGlobalStore.getState().leadCapture.presetName);
            _v10.useGlobalStore.setState({
              autoSaveMutex: _v0
            });
            try {
              await _v0();
            } catch (_v0) {} finally {
              _v10.useGlobalStore.setState({
                autoSaveMutex: !1
              });
            }
          }
        }
      }, 0);
      return () => {
        clearInterval(_v0);
      };
    }, [_v16.loading]);
    let _v32 = (0, _v3.useCallback)((_v0, _v1) => {
        _v2 && (_v0 === _v16.UUID && (_v19.current = _v1), _v24.current.push(() => new Promise(async (_v0, _v1) => {
          let {
            formattedKey: _v2,
            formattedPayload: _v3
          } = _v20(_v0, _v1);
          [_v16.RESPONSE_KEYS_MAP.customFields, _v16.RESPONSE_KEYS_MAP.hiddenFields].includes(_v0) && (_v23(), _v21(_v0, _v1));
          try {
            await _v15({
              where: {
                resourceId: _v10.useGlobalStore.getState().entityId,
                resourceType: _v7.ENTITY_TO_PATH_MAP[_v2]
              },
              variables: {
                [_v2]: _v3
              },
              select: ((_v0, _v1) => {
                if (_v10.useGlobalStore.getState().leadCapture.isDefault || _v10.useGlobalStore.getState().leadCapture.presetName || _v0 === _v16.UUID) return _v15;
                let _v2 = [_v1, _v16.PRESET_NAME, _v16.UUID, _v16.PARENT_FORM];
                return "placementTimecode" === _v0 && _v2.push("placementTimecode"), _v2;
              })(_v0, _v2)
            }), _v0({
              message: "success"
            });
          } catch (_v0) {
            _v1({
              message: "gctl call failed"
            });
          }
        })));
      }, [_v23, _v2, _v15]),
      _v33 = (0, _v3.useMemo)(() => ({}), [_v15]),
      _v34 = (0, _v3.useCallback)((_v0, _v1, _v2, _v3 = !1, _v4) => {
        let _v5 = _v4 ? _v4.value : _v24(_v10.useGlobalStore.getState().leadCapture, _v0);
        if (_v0 === _v16.UUID && (_v20.current = _v5), _v3(_v0, _v1, _v2, _v3), _v31) return void _v5(_v0, {
          payload: _v1,
          value: _v24(_v10.useGlobalStore.getState().leadCapture, _v0),
          originalValue: _v5
        });
        _v26(!0);
        let _v6 = _v33[_v0];
        _v6 || (_v33[_v0] = (0, _v1.default)((_v0, _v1) => {
          _v32(_v0, _v1), _v26(!1);
        }, _v0), _v6 = _v33[_v0]), _v6?.(_v0, _v1);
      }, [_v0, _v33, _v31, _v32, _v5, _v3]),
      _v35 = (0, _v3.useCallback)((_v0, _v1, _v2) => {
        _v0 === _v16.UUID && (_v20.current = _v10.useGlobalStore.getState().leadCapture.uuid), _v3(_v0, _v1, _v2), _v32(_v0, _v1), _v26(!0);
      }, [_v32, _v3]),
      _v36 = (0, _v3.useRef)(() => Promise.resolve(!0));
    return _v36.current = () => {
      let _v0 = Object.entries(_v10.useGlobalStore.getState().formSavingChanges);
      if (0 === _v0.length) return Promise.resolve(!0);
      if (!_v2) return Promise.resolve(!1);
      let _v1 = new Promise(_v0 => {
        _v27.current = _v0;
      });
      return _v0.forEach(([_v0, _v1]) => _v32(_v0, _v1.payload)), _v26(!0), _v1;
    }, (0, _v3.useEffect)(() => {
      for (_v18.current = _v23(10); _v9[_v18.current];) _v18.current = _v23(10);
      return _v4(_v18.current, null), _v1 && _v8(() => _v36.current()), () => {
        _v4(_v18.current, null), _v1 && (_v8(null), _v27.current?.(!1), _v27.current = null);
      };
    }, [_v1, _v8, _v4]), (0, _v3.useEffect)(() => {
      let _v0 = _v16.loading ? "saving" : _v25 || 0 !== _v24.current.length ? "queued" : null;
      _v4(_v18.current, _v0);
    }, [_v16.loading, _v25, _v4]), (0, _v3.useEffect)(() => {
      _v25 && _v24.current.length > 0 && _v26(!1);
    }, [_v25]), (0, _v3.useEffect)(() => {
      let {
        data: _v0
      } = _v16;
      if (_v0 && _v19.current === _v0.uuid) {
        _v6(), _v7(), _v13(_v0.parentForm);
        let {
            calendarLinks: _v0,
            ..._v1
          } = _v0,
          _v2 = {
            ..._v1
          };
        _v28(_v16), _v0 && _v11(_v0), _v2.logo = _v19("logo", _v2.logo), _v2.background = _v19("background", _v2.background), _v2.customFields = _v21(_v2.customFields), _v2.hiddenFields = _v21(_v2.hiddenFields), _v10(_v2), _v23(), _v29(_v16.RESPONSE_KEYS_MAP.customFields, _v2.customFields), _v29(_v16.RESPONSE_KEYS_MAP.hiddenFields, _v2.hiddenFields), _v19.current = "", _v20.current = "", _v12(!1);
      }
    }, [_v16, _v28, _v10]), (0, _v3.useMemo)(() => ({
      patchLeadCapture: _v34,
      patchLeadCaptureImmediately: _v35
    }), [_v34, _v35]);
  }], 0);
}