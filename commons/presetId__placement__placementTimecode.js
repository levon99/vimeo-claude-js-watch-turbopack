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
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0);
  let _v15 = (_v0, _v1) => {
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
    _v16 = (_v0, _v1) => {
      let _v2 = _v0 === _v10.RESPONSE_KEYS_MAP.customFields ? _v14.useIdMappingStore.getState().customFields : _v0 === _v10.RESPONSE_KEYS_MAP.hiddenFields ? _v14.useIdMappingStore.getState().hiddenFields : void 0,
        _v3 = _v0.split("."),
        _v4 = _v3.length,
        _v5 = (0, _v13.intoSnakeCase)(_v3[0]);
      if (_v5 === _v10.UUID && (_v5 = (0, _v13.intoSnakeCase)("presetId")), ["placement", "placementTimecode"].includes(_v0)) return _v18(_v0, _v1);
      let _v6 = Object.keys(_v10.PREVIEW_HTML_KEYS);
      if (_v3.some(_v0 => _v6.includes(_v0))) return {
        formattedKey: _v5,
        formattedPayload: _v1
      };
      let _v7 = _v3[_v4 - 1] || "",
        _v8 = _v4 > 1 ? {
          [_v7]: _v1
        } : _v1,
        _v9 = _v8 instanceof Object ? (0, _v13.deepSnakeCase)(_v8) : _v8;
      return [_v10.RESPONSE_KEYS_MAP.customFields, _v10.RESPONSE_KEYS_MAP.hiddenFields].includes(_v0) && _v2 && (_v9 = [..._v9].map(_v0 => ({
        ..._v0,
        id: _v2[_v0.cid]?.id
      }))), {
        formattedKey: _v5,
        formattedPayload: _v9
      };
    },
    _v17 = _v0 => {
      let _v1 = [_v10.CustomFieldTypes.Checkbox, _v10.CustomFieldTypes.Dropdown],
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
    _v18 = (_v0, _v1) => {
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
    _v19 = _v0 => {
      let _v1 = "",
        _v2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        _v3 = _v2.length,
        _v4 = 0;
      for (; _v4 < _v0;) _v1 += _v2.charAt(Math.floor(Math.random() * _v3)), _v4 += 1;
      return _v1;
    };
  _v0.s(["formatCustomFieldPayload", 0, _v0 => {
    let _v1 = [_v10.CustomFieldTypes.Checkbox, _v10.CustomFieldTypes.Dropdown];
    return _v0.map(_v0 => ({
      ..._v0,
      metadata: _v1.includes(_v0.type) ? _v0.metadata : void 0
    }));
  }, "formatFields", 0, _v17, "formatPatchPayload", 0, _v16, "getMarketoFieldName", 0, _v0 => {
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
  }) => !!(_v0 && _v1), "makeId", 0, _v19, "responseTransformer", 0, _v15], 0), _v0.s(["usePatchLeadCapture", 0, (_v0 = _v10.LEAD_CAPTURE_AUTO_SAVE_DEBOUNCED_INTERVAL) => {
    let _v1 = (0, _v11.useGlobalStore)(_v0 => _v0.entityType),
      _v2 = (0, _v11.useGlobalStore)(_v0 => _v0.setLeadCaptureProperties),
      _v3 = (0, _v11.useGlobalStore)(_v0 => _v0.setPatchApiStatus),
      _v4 = (0, _v11.useGlobalStore)(_v0 => _v0.patchApiStatus),
      _v5 = (0, _v11.useGlobalStore)(_v0 => _v0.setLeadCapture),
      _v6 = (0, _v11.useGlobalStore)(_v0 => _v0.setCalendarLinks),
      _v7 = (0, _v11.useGlobalStore)(_v0 => _v0.setPresetLoading),
      _v8 = (0, _v11.useGlobalStore)(_v0 => _v0.setParentPreset),
      _v9 = (0, _v11.useGlobalStore)(_v0 => _v0.hasUpsell),
      [_v10, _v11] = (0, _v6.usePatchLeadCaptureResourceIdForm)(),
      _v12 = (0, _v4.useToast)(),
      _v13 = (0, _v3.useRef)(""),
      _v14 = (0, _v3.useRef)(""),
      {
        updateNameUsingCidAsKey: _v15,
        updateIdUsingNameAsKey: _v16,
        burstCache: _v17
      } = (0, _v8.useCidToIdMapping)(),
      _v18 = (0, _v3.useRef)([]),
      [_v19, _v20] = (0, _v3.useState)(!1),
      _v21 = (0, _v11.useGlobalStore)(_v0 => _v0.setLeadCaptureState),
      {
        initializeIdUsingCidAsKey: _v22
      } = (0, _v8.useCidToIdMapping)();
    (0, _v3.useEffect)(() => {
      let {
        loading: _v0,
        error: _v1,
        called: _v2,
        data: _v3
      } = _v11;
      _v0 || _v1 || !_v2 ? _v1 && !(_v9 && _v1 === _v7.ENTITY_TYPE.VIDEO) && _v12({
        duration: 0,
        variant: "warning",
        render: _v0 => _v3.default.createElement(_v4.ToastRoot, {
          ..._v0
        }, _v3.default.createElement(_v5.Center, {
          gap: "sm"
        }, _v3.default.createElement(_v4.ToastIcon, null), _v3.default.createElement(_v4.ToastTitle, null, _v12.default.ChangesCouldNotBeSaved), _v3.default.createElement(_v4.ToastButton, {
          onClick: () => _v2.default.reload()
        }, _v12.default.Refresh)))
      }) : (_v9 && _v1 === _v7.ENTITY_TYPE.VIDEO || _v12({
        title: _v12.default.ChangesSaved,
        status: "success"
      }), _v3 && Object.entries(_v3).forEach(([_v0, _v1]) => {
        [_v10.RESPONSE_KEYS_MAP.customFields, _v10.RESPONSE_KEYS_MAP.hiddenFields].includes(_v0) && _v16(_v0, _v1), _v0 === _v10.PARENT_FORM && _v8(_v1), (_v0 === _v10.UUID || _v0 === _v10.PRESET_NAME) && _v2(_v0, _v1, !0), "isDefault" === _v0 && _v2(_v0, _v1, !0);
      }));
    }, [_v1, _v11]), (0, _v3.useEffect)(() => {
      let _v0 = setInterval(async () => {
        if (!_v11.loading && !_v11.useGlobalStore.getState().autoSaveMutex) {
          let _v0 = _v18.current.shift();
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
    }, [_v11.loading]);
    let _v23 = (0, _v3.useCallback)((_v0, _v1) => {
        _v1 && (_v0 === _v10.UUID && (_v14.current = _v1), _v18.current.push(() => new Promise(async (_v0, _v1) => {
          let {
            formattedKey: _v2,
            formattedPayload: _v3
          } = _v16(_v0, _v1);
          [_v10.RESPONSE_KEYS_MAP.customFields, _v10.RESPONSE_KEYS_MAP.hiddenFields].includes(_v0) && (_v17(), _v15(_v0, _v1));
          try {
            await _v10({
              where: {
                resourceId: _v11.useGlobalStore.getState().entityId,
                resourceType: _v7.ENTITY_TO_PATH_MAP[_v1]
              },
              variables: {
                [_v2]: _v3
              },
              select: ((_v0, _v1) => {
                if (_v11.useGlobalStore.getState().leadCapture.isDefault || _v11.useGlobalStore.getState().leadCapture.presetName || _v0 === _v10.UUID) return _v9.LEAD_CAPTURE_FORM_FIELDS;
                let _v2 = [_v1, _v10.PRESET_NAME, _v10.UUID, _v10.PARENT_FORM];
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
      }, [_v17, _v1, _v10]),
      _v24 = (0, _v3.useMemo)(() => ({}), [_v10]),
      _v25 = (0, _v3.useCallback)((_v0, _v1, _v2, _v3 = !1) => {
        _v2(_v0, _v1, _v2, _v3), _v20(!0);
        let _v4 = _v24[_v0];
        _v4 || (_v24[_v0] = (0, _v1.default)((_v0, _v1) => {
          _v23(_v0, _v1), _v20(!1);
        }, _v0), _v4 = _v24[_v0]), _v4?.(_v0, _v1);
      }, [_v0, _v24, _v23, _v2]);
    return (0, _v3.useEffect)(() => {
      for (_v13.current = _v19(10); _v4[_v13.current];) _v13.current = _v19(10);
      return _v3(_v13.current, !1), () => {
        _v3(_v13.current, !1);
      };
    }, [_v3]), (0, _v3.useEffect)(() => {
      _v3(_v13.current, _v11.loading || _v19 || 0 !== _v18.current.length);
    }, [_v11.loading, _v19, _v3]), (0, _v3.useEffect)(() => {
      let {
        data: _v0
      } = _v11;
      if (_v0 && _v14.current === _v0.uuid) {
        _v8(_v0.parentForm);
        let {
            calendarLinks: _v0,
            ..._v1
          } = _v0,
          _v2 = {
            ..._v1
          };
        _v21(_v11), _v0 && _v6(_v0), _v2.logo = _v15("logo", _v2.logo), _v2.background = _v15("background", _v2.background), _v2.customFields = _v17(_v2.customFields), _v2.hiddenFields = _v17(_v2.hiddenFields), _v5(_v2), _v17(), _v22(_v10.RESPONSE_KEYS_MAP.customFields, _v2.customFields), _v22(_v10.RESPONSE_KEYS_MAP.hiddenFields, _v2.hiddenFields), _v14.current = "", _v7(!1);
      }
    }, [_v11, _v21, _v5]), (0, _v3.useMemo)(() => ({
      patchLeadCapture: _v25
    }), [_v25]);
  }], 0);
}