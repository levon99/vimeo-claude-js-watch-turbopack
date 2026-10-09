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
    _v11 = _v0.i(0),
    _v12 = _v0.i(0);
  let _v13 = (_v0, _v1) => {
      let _v2 = {};
      for (let _v0 in _v0) _v1.includes(_v0) && (_v2[_v0] = _v0[_v0]);
      return _v2;
    },
    _v14 = (0, _v12.createImmerStore)((_v0, _v1) => ({
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
        customFields: _v13(_v1().customFields, _v0)
      })),
      burstHiddenFieldsMappingCache: _v0 => _v0(() => ({
        hiddenFields: _v13(_v1().hiddenFields, _v0)
      }))
    }), "idMappingStore"),
    _v15 = () => {
      let _v0 = _v14(_v0 => _v0.setHiddenFieldsMapping),
        _v1 = _v14(_v0 => _v0.setCustomFieldsMapping),
        _v2 = _v14(_v0 => _v0.burstCustomFieldsMappingCache),
        _v3 = _v14(_v0 => _v0.burstHiddenFieldsMappingCache),
        _v4 = (0, _v4.useCallback)((_v0, _v1) => {
          if (![_v10.RESPONSE_KEYS_MAP.customFields, _v10.RESPONSE_KEYS_MAP.hiddenFields].includes(_v0)) throw Error(`initializeIdUsingCidAsKey called with an invalid key: ${_v0}`);
          _v1.forEach(_v0 => {
            (_v0 === _v10.RESPONSE_KEYS_MAP.customFields ? _v1 : _v0)(_v0.id, {
              name: _v0.name,
              id: _v0.id
            });
          });
        }, [_v1, _v0]),
        _v5 = (0, _v4.useCallback)((_v0, _v1) => {
          if (![_v10.RESPONSE_KEYS_MAP.customFields, _v10.RESPONSE_KEYS_MAP.hiddenFields].includes(_v0)) throw Error(`updateNameUsingCidAsKey called with an invalid key: ${_v0}`);
          let _v2 = _v14.getState().customFields,
            _v3 = _v14.getState().hiddenFields;
          _v1.forEach(_v0 => {
            let _v1 = Object.entries(_v0 === _v10.RESPONSE_KEYS_MAP.customFields ? _v2 : _v3).find(_v0 => {
                let [_v1] = _v0;
                return _v0.cid.toString() === _v1;
              }),
              _v2 = _v1?.[1];
            (_v0 === _v10.RESPONSE_KEYS_MAP.customFields ? _v1 : _v0)(_v0.cid, {
              name: _v0.name,
              id: _v2?.id
            });
          });
        }, [_v1, _v0]),
        _v6 = (0, _v4.useCallback)((_v0, _v1) => {
          let _v2 = _v14.getState().customFields,
            _v3 = _v14.getState().hiddenFields;
          if (![_v10.RESPONSE_KEYS_MAP.customFields, _v10.RESPONSE_KEYS_MAP.hiddenFields].includes(_v0)) throw Error(`updateIdUsingName called with an invalid key: ${_v0}`);
          _v1.forEach(_v0 => {
            let _v1 = Object.entries(_v0 === _v10.RESPONSE_KEYS_MAP.customFields ? _v2 : _v3).find(_v0 => {
                let [, _v1] = _v0;
                return _v0.name === _v1.name;
              }),
              _v2 = _v1?.[0];
            _v2 && (_v0 === _v10.RESPONSE_KEYS_MAP.customFields ? _v1 : _v0)(_v2, {
              name: _v0.name,
              id: _v0.id
            });
          });
        }, [_v1, _v0]),
        _v7 = (0, _v4.useCallback)(() => {
          let _v0 = _v11.useGlobalStore.getState().leadCapture,
            _v1 = _v0.customFields.map(_v0 => _v0.cid.toString());
          _v3(_v0.hiddenFields.map(_v0 => _v0.cid.toString())), _v2(_v1);
        }, [_v2, _v3]);
      return (0, _v4.useMemo)(() => ({
        burstCache: _v7,
        updateIdUsingNameAsKey: _v6,
        initializeIdUsingCidAsKey: _v4,
        updateNameUsingCidAsKey: _v5
      }), [_v7, _v6, _v4, _v5]);
    };
  _v0.s(["useCidToIdMapping", 0, _v15], 0);
  let _v16 = ["alignment", "background", "secondaryButtonStyle", "confirmationPageDescription", "confirmationPageTitle", "primaryButtonStyle", "isEventDateSetToCalendar", "isEventDateVisible", "isSkippable", "joinPageTitle", "layout", "loginPageTitle", "logo", "metadata", "placement", "placementTimecode", "presetName", "privacyPolicyUrl", "uri", "customFields", "defaultLocale", "hiddenFields", "enabledLocales", "htmlLocalizations", "buttonLocalizations", "localizationSyncStatus", "emailLists.name", "emailLists.providerId", "emailLists.listId", "emailLists.numberOfRegistrants", "emailLists.type", "emailLists.connectionOwnerName", "calendarLinks", "uuid", "isDefault", "isApproved", "parentForm", "nonEditableTextStyle", "privacyPolicyVersion", "hasActiveCrmExportConnection", "memberConnections"];
  _v0.s(["CRM_IMPORT_FIELDS", 0, ["uri", "status", "errorDetails", "emailProviderList.provider"], "ESP_API_FIELDS", 0, ["service_id", "service_type", "user_id", "name", "icon", "dark_icon", "connected", "lists.id", "lists.name"], "LEAD_CAPTURE_FORM_FIELDS", 0, _v16], 0);
  var _v17 = _v10,
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0);
  let _v22 = (_v0, _v1) => {
      if (_v0 === _v10.RESPONSE_KEYS_MAP.logo) {
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
      if (_v0 === _v10.RESPONSE_KEYS_MAP.background) {
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
    _v23 = "htmlLocalizations",
    _v24 = (_v0, _v1) => {
      if (_v0 === _v10.BATCH_PATCH_KEY) return {
        formattedKey: _v0,
        formattedPayload: Object.fromEntries(Object.entries(_v1).map(([_v0, _v1]) => {
          let _v2 = _v24(_v0, _v1);
          return [_v2.formattedKey, _v2.formattedPayload];
        }))
      };
      let _v2 = _v0 === _v10.RESPONSE_KEYS_MAP.customFields ? _v14.getState().customFields : _v0 === _v10.RESPONSE_KEYS_MAP.hiddenFields ? _v14.getState().hiddenFields : void 0,
        _v3 = _v0.split("."),
        _v4 = _v3.length,
        _v5 = (0, _v21.intoSnakeCase)(_v3[0]);
      if (_v5 === _v10.UUID && (_v5 = (0, _v21.intoSnakeCase)("presetId")), ["placement", "placementTimecode"].includes(_v0)) return _v26(_v0, _v1);
      let _v6 = Object.keys(_v10.PREVIEW_HTML_KEYS);
      if (_v3.some(_v0 => _v6.includes(_v0))) return {
        formattedKey: _v5,
        formattedPayload: "string" == typeof _v1.tagsUnresolved ? _v1.tagsUnresolved : "string" == typeof _v1.tagsResolved ? _v1.tagsResolved : _v1
      };
      if (_v0 === _v23) return {
        formattedKey: _v5,
        formattedPayload: (0, _v21.deepSnakeCase)((0, _v18.flattenHtmlLocalizations)(_v1))
      };
      let _v7 = _v3[_v4 - 1] || "",
        _v8 = _v4 > 1 ? {
          [_v7]: _v1
        } : _v1,
        _v9 = _v8 instanceof Object ? (0, _v21.deepSnakeCase)(_v8) : _v8;
      return [_v10.RESPONSE_KEYS_MAP.customFields, _v10.RESPONSE_KEYS_MAP.hiddenFields].includes(_v0) && _v2 && (_v9 = [..._v9].map(_v0 => ({
        ..._v0,
        id: _v2[_v0.cid]?.id
      }))), {
        formattedKey: _v5,
        formattedPayload: _v9
      };
    },
    _v25 = _v0 => {
      let _v1 = [_v10.CustomFieldTypes.Checkbox, _v10.CustomFieldTypes.Dropdown],
        _v2 = _v0.length > 0 ? Math.max(..._v0.map(_v0 => _v0.id || 0)) : 1;
      return _v0.map((_v0, _v1) => {
        let _v2 = _v1.includes(_v0.type) ? {
          description: _v0.metadata?.description,
          color: _v0.metadata?.color,
          options: _v0.metadata?.options ? _v0.metadata.options.map(_v0 => ({
            ..._v0,
            optionCid: _v0.optionCid ?? _v28(),
            cid: _v0.optionPosition
          })).sort((_v0, _v1) => _v0.optionPosition - _v1.optionPosition) : void 0
        } : _v0.metadata;
        return {
          ..._v0,
          cid: _v0.id ?? _v2 + 1 + _v1,
          metadata: _v2,
          ...(_v0.localizations ? {
            localizations: (0, _v18.canonicalizeLocaleKeys)(_v0.localizations)
          } : {})
        };
      }).sort((_v0, _v1) => _v0.position - _v1.position);
    },
    _v26 = (_v0, _v1) => {
      let _v2 = _v11.useGlobalStore.getState().leadCapture.placementTimecode,
        _v3 = "placement";
      if ("placementTimecode" === _v0) return {
        formattedKey: _v3,
        formattedPayload: {
          key: _v10.VIDEO_PLACEMENT.DURING,
          timecode: _v1
        }
      };
      {
        let _v0 = {
          key: _v1
        };
        return _v1 === _v10.VIDEO_PLACEMENT.DURING && (_v0.timecode = _v2), {
          formattedKey: _v3,
          formattedPayload: _v0
        };
      }
    },
    _v27 = _v0 => {
      let _v1 = "",
        _v2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        _v3 = _v2.length,
        _v4 = 0;
      for (; _v4 < _v0;) _v1 += _v2.charAt(Math.floor(Math.random() * _v3)), _v4 += 1;
      return _v1;
    },
    _v28 = () => `oc_${(0, _v20.v4)().replaceAll("-", "").slice(0, 16)}`;
  _v0.s(["BUTTON_LOCALIZATIONS_KEY", 0, "buttonLocalizations", "HTML_LOCALIZATIONS_KEY", 0, _v23, "createOptionCid", 0, _v28, "formatCustomFieldPayload", 0, _v0 => {
    let _v1 = [_v10.CustomFieldTypes.Checkbox, _v10.CustomFieldTypes.Dropdown];
    return _v0.map(_v0 => {
      if (_v0.type === _v10.CustomFieldTypes.Dropdown && _v0.metadata?.description === "") {
        let {
          description: _v0,
          ..._v1
        } = _v0.metadata;
        return {
          ..._v0,
          metadata: _v1
        };
      }
      return {
        ..._v0,
        metadata: _v1.includes(_v0.type) ? _v0.metadata : void 0
      };
    });
  }, "formatFields", 0, _v25, "formatPatchPayload", 0, _v24, "getMarketoFieldName", 0, _v0 => {
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
  }) => !!(_v0 && _v1), "makeId", 0, _v27, "responseTransformer", 0, _v22], 0);
  let _v29 = (_v0, _v1) => _v1.split(".").reduce((_v0, _v1) => _v0[_v1], _v0),
    _v30 = (_v0, _v1, _v2) => _v1 === _v17.BATCH_PATCH_KEY && "object" == typeof _v2 && null !== _v2 ? Object.fromEntries(Object.keys(_v2).map(_v0 => [_v0, _v29(_v0, _v0)])) : _v29(_v0, _v1),
    _v31 = new Set(["joinPageTitle", "loginPageTitle", "confirmationPageTitle", "confirmationPageDescription", "primaryButtonStyle", "secondaryButtonStyle", "customFields", "hiddenFields"]),
    _v32 = ["joinPageTitle", "loginPageTitle", "confirmationPageTitle", "confirmationPageDescription", "primaryButtonStyle", "secondaryButtonStyle"];
  _v0.s(["usePatchLeadCapture", 0, (_v0 = _v17.LEAD_CAPTURE_AUTO_SAVE_DEBOUNCED_INTERVAL, _v1 = !1) => {
    let _v2 = (0, _v11.useGlobalStore)(_v0 => _v0.entityType),
      _v3 = (0, _v11.useGlobalStore)(_v0 => _v0.setLeadCaptureProperties),
      _v4 = (0, _v11.useGlobalStore)(_v0 => _v0.setPatchApiStatus),
      _v5 = (0, _v11.useGlobalStore)(_v0 => _v0.recordFormChange),
      _v6 = (0, _v11.useGlobalStore)(_v0 => _v0.clearPendingFormChanges),
      _v7 = (0, _v11.useGlobalStore)(_v0 => _v0.clearHistory),
      _v8 = (0, _v11.useGlobalStore)(_v0 => _v0.setFormSaveHandler),
      _v9 = (0, _v11.useGlobalStore)(_v0 => _v0.patchApiStatus),
      _v10 = (0, _v11.useGlobalStore)(_v0 => _v0.setLeadCapture),
      _v11 = (0, _v11.useGlobalStore)(_v0 => _v0.setCalendarLinks),
      _v12 = (0, _v11.useGlobalStore)(_v0 => _v0.setPresetLoading),
      _v13 = (0, _v11.useGlobalStore)(_v0 => _v0.setParentPreset),
      _v14 = (0, _v11.useGlobalStore)(_v0 => _v0.setLanguages),
      _v15 = (0, _v11.useGlobalStore)(_v0 => _v0.setSelectedLanguage),
      _v16 = (0, _v11.useGlobalStore)(_v0 => _v0.hasUpsell),
      [_v17, _v18] = (0, _v7.usePatchLeadCaptureResourceIdForm)(),
      _v19 = (0, _v5.useToast)(),
      _v20 = (0, _v4.useRef)(""),
      _v21 = (0, _v4.useRef)(""),
      _v22 = (0, _v4.useRef)(""),
      {
        updateNameUsingCidAsKey: _v23,
        updateIdUsingNameAsKey: _v24,
        burstCache: _v25
      } = _v15(),
      _v26 = (0, _v4.useRef)([]),
      [_v27, _v28] = (0, _v4.useState)(!1),
      _v29 = (0, _v4.useRef)(null),
      _v30 = (0, _v4.useRef)(null),
      _v31 = (0, _v4.useRef)(""),
      _v32 = (0, _v4.useRef)(""),
      _v33 = (0, _v11.useGlobalStore)(_v0 => _v0.setLeadCaptureState),
      {
        initializeIdUsingCidAsKey: _v34
      } = _v15(),
      _v35 = (0, _v9.useOrionSettingsFields)(["enable_explicit_registration_save"]).enable_explicit_registration_save;
    (0, _v4.useEffect)(() => {
      let {
        loading: _v0,
        error: _v1,
        called: _v2,
        data: _v3
      } = _v18;
      _v0 || _v1 || !_v2 ? _v1 && ("" !== _v31.current && (_v30.current?.(!1), _v30.current = null, _v31.current = ""), _v21.current && (_v3(_v17.UUID, _v22.current, !0), _v21.current = "", _v22.current = "", _v12(!1)), _v35 && _v1 && (_v26.current = [], _v29.current?.(!1), _v29.current = null, _v28(!1)), _v16 && _v2 === _v8.ENTITY_TYPE.VIDEO || _v19({
        duration: 0,
        variant: "warning",
        render: _v0 => _v4.default.createElement(_v5.ToastRoot, {
          ..._v0
        }, _v4.default.createElement(_v6.Center, {
          gap: "sm"
        }, _v4.default.createElement(_v5.ToastIcon, null), _v4.default.createElement(_v5.ToastTitle, null, _v19.default.ChangesCouldNotBeSaved), _v4.default.createElement(_v5.ToastButton, {
          onClick: () => _v3.default.reload()
        }, _v19.default.Refresh)))
      })) : (_v35 || _v16 && _v2 === _v8.ENTITY_TYPE.VIDEO || _v19({
        title: _v19.default.ChangesSaved,
        status: "success"
      }), _v3 && (void 0 !== _v3.defaultLocale && (_v3("defaultLocale", _v3.defaultLocale, !0), "defaultLocale" === _v32.current && (_v11.useGlobalStore.getState().invalidateTranslations(), _v15(_v3.defaultLocale))), Object.entries(_v3).forEach(([_v0, _v1]) => {
        "defaultLocale" !== _v0 && ([_v17.RESPONSE_KEYS_MAP.customFields, _v17.RESPONSE_KEYS_MAP.hiddenFields].includes(_v0) && _v24(_v0, _v1), _v0 === _v17.PARENT_FORM && _v13(_v1), (_v0 === _v17.UUID || _v0 === _v17.PRESET_NAME) && _v3(_v0, _v1, !0), "isDefault" === _v0 && _v3(_v0, _v1, !0), ("localizationSyncStatus" === _v0 || "htmlLocalizations" === _v0 || "buttonLocalizations" === _v0) && _v3(_v0, (0, _v18.canonicalizeLocaleKeys)(_v1), !0), _v0 === _v17.ENABLED_LOCALES && _v3(_v0, _v1, !0), _v32.includes(_v0) && _v3(_v0, _v1, !0), [_v17.RESPONSE_KEYS_MAP.customFields, _v17.RESPONSE_KEYS_MAP.hiddenFields].includes(_v0) && _v3(_v0, _v25(_v1), !0));
      }), "" !== _v31.current && _v31.current in _v3 && (_v30.current?.(!0), _v30.current = null, _v31.current = "")), _v35 && _v1 && 0 === _v26.current.length && (_v29.current?.(!0), _v29.current = null, _v28(!1)));
    }, [_v2, _v18]), (0, _v4.useEffect)(() => {
      let _v0 = setInterval(async () => {
        if (!_v18.loading && !_v11.useGlobalStore.getState().autoSaveMutex) {
          let _v0 = _v26.current.shift();
          if (_v0) {
            let _v0 = !!(_v11.useGlobalStore.getState().leadCapture.isDefault || _v11.useGlobalStore.getState().leadCapture.presetName);
            _v11.useGlobalStore.setState({
              autoSaveMutex: _v0
            });
            try {
              await _v0();
            } catch (_v0) {} finally {
              _v11.useGlobalStore.setState({
                autoSaveMutex: !1
              });
            }
          }
        }
      }, 0);
      return () => {
        clearInterval(_v0);
      };
    }, [_v18.loading]);
    let _v36 = (0, _v4.useCallback)((_v0, _v1) => _v2 ? (_v0 === _v17.UUID && (_v21.current = _v1), new Promise(_v0 => {
        let _v1 = async () => {
          let {
            formattedKey: _v0,
            formattedPayload: _v1
          } = _v24(_v0, _v1);
          _v32.current = _v0, [_v17.RESPONSE_KEYS_MAP.customFields, _v17.RESPONSE_KEYS_MAP.hiddenFields].includes(_v0) ? (_v25(), _v23(_v0, _v1)) : _v0 === _v17.BATCH_PATCH_KEY && "object" == typeof _v1 && null !== _v1 && (_v17.RESPONSE_KEYS_MAP.customFields in _v1 && (_v25(), _v23(_v17.RESPONSE_KEYS_MAP.customFields, _v1[_v17.RESPONSE_KEYS_MAP.customFields])), _v17.RESPONSE_KEYS_MAP.hiddenFields in _v1 && (_v25(), _v23(_v17.RESPONSE_KEYS_MAP.hiddenFields, _v1[_v17.RESPONSE_KEYS_MAP.hiddenFields])));
          try {
            await _v17({
              where: {
                resourceId: _v11.useGlobalStore.getState().entityId,
                resourceType: _v8.ENTITY_TO_PATH_MAP[_v2]
              },
              variables: _v0 === _v17.BATCH_PATCH_KEY ? _v1 : {
                [_v0]: _v1
              },
              select: ((_v0, _v1) => {
                if (_v0 === _v17.BATCH_PATCH_KEY || _v35 || _v11.useGlobalStore.getState().leadCapture.isDefault || _v11.useGlobalStore.getState().leadCapture.presetName || _v0 === _v17.UUID) return _v16;
                let _v2 = [_v1, _v17.PRESET_NAME, _v17.UUID, _v17.PARENT_FORM, "localizationSyncStatus"];
                return "placementTimecode" === _v0 && _v2.push("placementTimecode"), _v0 === _v17.ENABLED_LOCALES && _v2.push("htmlLocalizations", "buttonLocalizations"), "defaultLocale" === _v0 && _v2.push("defaultLocale", _v17.ENABLED_LOCALES, "localizationSyncStatus", "htmlLocalizations", "buttonLocalizations", "customFields", "hiddenFields", ..._v32), _v2;
              })(_v0, _v0)
            }), _v0(!0);
          } catch {
            _v0(!1);
          }
        };
        _v26.current.push(_v1);
      })) : Promise.resolve(!1), [_v25, _v2, _v17]),
      _v37 = (0, _v4.useMemo)(() => ({}), [_v17]),
      _v38 = (0, _v4.useCallback)((_v0, _v1, _v2, _v3 = !1, _v4) => {
        let _v5 = _v11.useGlobalStore.getState().leadCapture,
          _v6 = _v4 ? _v4.value : _v30(_v5, _v0, _v1),
          _v7 = _v31.has(_v0.split(".")[0]) ? (0, _v18.buildTranslationStrings)(_v5) : null;
        if (_v0 === _v17.UUID && (_v22.current = _v6), _v3(_v0, _v1, _v2, _v3), null !== _v7 && !(0, _v1.default)(_v7, (0, _v18.buildTranslationStrings)(_v11.useGlobalStore.getState().leadCapture))) {
          _v11.useGlobalStore.getState().bumpTranslationRevision();
          let {
            enabledLocales: _v0
          } = _v11.useGlobalStore.getState().leadCapture;
          _v3("localizationSyncStatus", Object.fromEntries((_v0 ?? []).map(_v0 => [_v0, !1])), !0);
        }
        if (_v35) return void _v5(_v0, {
          payload: _v1,
          value: _v30(_v11.useGlobalStore.getState().leadCapture, _v0, _v1),
          originalValue: _v6
        });
        if (_v0 === _v17.ENABLED_LOCALES) return void _v36(_v0, _v1);
        _v28(!0);
        let _v8 = _v37[_v0];
        _v8 || (_v37[_v0] = (0, _v2.default)((_v0, _v1) => {
          _v36(_v0, _v1), _v28(!1);
        }, _v0), _v8 = _v37[_v0]), _v8?.(_v0, _v1);
      }, [_v0, _v37, _v35, _v36, _v5, _v3]),
      _v39 = (0, _v4.useCallback)((_v0, _v1, _v2) => {
        _v0 === _v17.UUID && (_v22.current = _v11.useGlobalStore.getState().leadCapture.uuid), "defaultLocale" !== _v0 && _v3(_v0, _v1, _v2);
        let _v3 = new Promise(_v0 => {
          _v31.current = _v0, _v30.current = _v0;
        });
        return _v36(_v0, _v1), _v28(!0), _v3;
      }, [_v36, _v3]),
      _v40 = (0, _v4.useRef)(() => Promise.resolve(!0));
    return _v40.current = () => {
      let _v0 = Object.entries(_v11.useGlobalStore.getState().formSavingChanges);
      if (0 === _v0.length) return Promise.resolve(!0);
      if (!_v2) return Promise.resolve(!1);
      let _v1 = new Promise(_v0 => {
        _v29.current = _v0;
      });
      if (1 === _v0.length && _v0[0][0] !== _v17.BATCH_PATCH_KEY) {
        let [_v0, _v1] = _v0[0];
        _v36(_v0, _v1.payload);
      } else {
        let _v0 = {};
        _v0.forEach(([_v0, _v1]) => {
          _v0 === _v17.BATCH_PATCH_KEY && _v1.payload && "object" == typeof _v1.payload ? Object.assign(_v0, _v1.payload) : _v0[_v0] = _v1.payload;
        }), _v36(_v17.BATCH_PATCH_KEY, _v0);
      }
      return _v28(!0), _v1;
    }, (0, _v4.useEffect)(() => {
      for (_v20.current = _v27(10); _v9[_v20.current];) _v20.current = _v27(10);
      return _v4(_v20.current, null), _v1 && _v8(() => _v40.current()), () => {
        _v4(_v20.current, null), _v30.current?.(!1), _v30.current = null, _v31.current = "", _v1 && (_v8(null), _v29.current?.(!1), _v29.current = null);
      };
    }, [_v1, _v8, _v4]), (0, _v4.useEffect)(() => {
      let _v0 = _v18.loading ? "saving" : _v27 || 0 !== _v26.current.length ? "queued" : null;
      _v4(_v20.current, _v0);
    }, [_v18.loading, _v27, _v4]), (0, _v4.useEffect)(() => {
      _v27 && _v26.current.length > 0 && _v28(!1);
    }, [_v27]), (0, _v4.useEffect)(() => {
      let {
        data: _v0
      } = _v18;
      if (_v0 && _v21.current === _v0.uuid) {
        _v11.useGlobalStore.getState().invalidateTranslations(), _v6(), _v7(), _v13(_v0.parentForm);
        let {
            calendarLinks: _v0,
            ..._v1
          } = _v0,
          _v2 = {
            ..._v1
          };
        _v33(_v18), _v0 && _v11(_v0), _v2.logo = _v22("logo", _v2.logo), _v2.background = _v22("background", _v2.background), _v2.customFields = _v25(_v2.customFields), _v2.hiddenFields = _v25(_v2.hiddenFields), _v2.htmlLocalizations = (0, _v18.canonicalizeLocaleKeys)(_v2.htmlLocalizations), _v2.buttonLocalizations = (0, _v18.canonicalizeLocaleKeys)(_v2.buttonLocalizations), _v2.localizationSyncStatus = (0, _v18.canonicalizeLocaleKeys)(_v2.localizationSyncStatus), _v10(_v2), _v14(_v2.enabledLocales ?? []), _v15(_v2.defaultLocale), _v25(), _v34(_v17.RESPONSE_KEYS_MAP.customFields, _v2.customFields), _v34(_v17.RESPONSE_KEYS_MAP.hiddenFields, _v2.hiddenFields), _v21.current = "", _v22.current = "", _v12(!1);
      }
    }, [_v18, _v33, _v10]), (0, _v4.useMemo)(() => ({
      patchLeadCapture: _v38,
      patchLeadCaptureImmediately: _v39
    }), [_v38, _v39]);
  }], 0);
}