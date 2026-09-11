{
  "use strict";

  _v0.s(["leadCaptureStore", () => _v17], 0), _v0.s(["cleanUndoRedoHistory", () => _v14, "getLocationState", () => _v15], 0);
  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["createImmerStore", 0, (_v0, _v1) => (0, _v1.create)((0, _v3.immer)((0, _v2.devtools)(_v0, {
    name: _v1,
    enabled: !1
  })))], 0);
  var _v4 = _v0.i(0);
  _v0.s(["entityStore", 0, _v0 => {
    var _v1;
    let _v2,
      {
        set: _v3,
        get: _v4
      } = _v0,
      _v5 = (_v1 = _v4, (_v2 = _v1()?.entity) || {});
    return {
      entityState: _v4.defaultState,
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
  }], 0);
  var _v5 = _v0.i(0),
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
  }, "getValidator", 0, (_v0, _v1, _v2) => _v0 === _v4.FORM_FIELD_NAME_VALUES.EMAIL ? _v0 => _v10.test(_v0) ? void 0 : _v1.InvalidEmailAddress : _v2 ? _v0 => "string" == typeof _v0 ? _v0.length > 0 ? void 0 : _v1.ThisFieldIsRequired : "boolean" == typeof _v0 ? _v0 ? void 0 : _v1.ThisFieldIsRequired : void 0 : () => void 0, "hasAutoFilled", 0, _v0 => {
    try {
      return !_v0.nativeEvent?.inputType;
    } catch (_v0) {
      return !0;
    }
  }, "hasValidPresetNameCharacters", 0, _v9, "htmlToText", 0, _v0 => new DOMParser().parseFromString(_v0, "text/html").body.textContent || "", "isNumber", 0, _v0 => !isNaN(Number(_v0)), "isPresetNameValid", 0, (_v0, _v1) => {
    let _v2 = _v0.trim();
    return _v2.length > 0 && _v2.length <= _v4.MAX_PRESET_NAME_LENGTH && _v9(_v0) && !_v1.includes(_v2);
  }, "isScrollBottom", 0, function (_v0) {
    let _v1 = _v0.target;
    return 10 > Math.abs(_v1.scrollHeight - _v1.scrollTop - _v1.clientHeight);
  }, "setNestedObject", 0, _v7], 0);
  var _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0);
  let _v14 = _v0 => {
      let _v1 = _v13.useGlobalStore.getState().past,
        _v2 = _v13.useGlobalStore.getState().future,
        _v3 = _v0 => (!["logo", "background"].includes(_v0.key) || _v0.value.uri !== _v0?.uri) && !0,
        _v4 = _v1.filter(_v3),
        _v5 = _v2.filter(_v3);
      _v13.useGlobalStore.setState({
        past: _v4,
        future: _v5
      });
    },
    _v15 = () => ({
      [_v11.LOCATION_STATE.TAB]: (0, _v12.parseLocationQuery)(_v11.LOCATION_STATE.TAB),
      [_v11.LOCATION_STATE.SIDE_MENU]: (0, _v12.parseLocationQuery)(_v11.LOCATION_STATE.SIDE_MENU),
      [_v11.LOCATION_STATE.PREVIEW_TYPE]: (0, _v12.parseLocationQuery)(_v11.LOCATION_STATE.PREVIEW_TYPE),
      [_v11.LOCATION_STATE.SECTION]: (0, _v12.parseLocationQuery)(_v11.LOCATION_STATE.SECTION)
    }),
    _v16 = {
      past: [],
      future: []
    },
    _v17 = _v0 => {
      let {
          get: _v1,
          set: _v2
        } = _v0,
        _v3 = (_v0, _v1, _v2, _v3 = !1) => {
          let _v4,
            _v5,
            {
              leadCapture: _v6
            } = _v1(),
            _v7 = (0, _v5.default)(_v6),
            _v8 = _v0 === _v4.BATCH_PATCH_KEY ? _v1 : {
              [_v0]: _v1
            },
            _v9 = Object.fromEntries(Object.entries(_v8).map(([_v0, _v1]) => [_v0, _v7(_v7, _v0, _v1)])),
            _v10 = _v0 === _v4.BATCH_PATCH_KEY ? _v9 : _v9[_v0],
            _v11 = _v8.enabledLocales,
            _v12 = _v8.defaultLocale ?? _v7.defaultLocale,
            _v13 = void 0 !== _v11 ? (_v4 = _v11.filter(_v0 => _v0 !== _v12), {
              languages: _v4,
              selectedLanguage: (_v5 = _v1().selectedLanguage) === _v12 || _v4.includes(_v5) ? _v5 : _v12
            }) : {};
          if (!(!_v3 && (0, _v6.default)(_v6, _v7))) {
            if (_v2) _v2({
              leadCapture: _v7,
              ..._v13
            });else {
              let _v0 = _v15();
              _v2(_v0 => {
                _v0.leadCapture = _v7, Object.assign(_v0, _v13), _v0.past.push({
                  key: _v0,
                  value: _v10,
                  locationState: _v0
                }), _v0.future = [];
              });
            }
            return _v10;
          }
        },
        _v4 = _v1()?.leadCapture || {};
      return {
        ..._v16,
        leadCaptureState: _v4.defaultState,
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
    };
}