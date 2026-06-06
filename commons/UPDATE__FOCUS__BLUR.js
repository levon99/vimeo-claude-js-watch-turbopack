{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = Symbol();
  function _v4(_v0, _v1) {
    switch (_v1.type) {
      case "UPDATE":
        {
          let {
              name: _v0,
              value: _v1
            } = _v1.payload,
            _v2 = _v0.dirty.get(_v0),
            _v3 = _v0.committed[_v0] !== _v1,
            _v4 = _v2 !== _v3 ? _v0.dirty.set(_v0, _v3) : _v0.dirty,
            _v5 = {
              ..._v0.draft,
              [_v0]: _v1
            };
          return {
            ..._v0,
            dirty: _v4,
            draft: _v5
          };
        }
      case "FOCUS":
        return {
          ..._v0,
          focused: _v0.focused.set(_v1.payload.name, !0)
        };
      case "BLUR":
        return {
          ..._v0,
          focused: _v0.focused.set(_v1.payload.name, !1),
          touched: !0 === _v0.touched.get(name) ? _v0.touched : _v0.touched.set(_v1.payload.name, !0)
        };
      case "VALIDATE":
        if ("error" === _v1.payload.state) return {
          ..._v0,
          errors: _v1.payload.errors
        };
        if (0 === _v0.errors.size) return _v0;
        return {
          ..._v0,
          errors: new Map()
        };
      case "COMMIT":
        return {
          ..._v0,
          committed: {
            ..._v0.draft
          },
          submitting: !1,
          dirty: new Map(),
          touched: new Map(),
          focused: new Map(),
          errors: new Map()
        };
      case "RESET":
        return {
          ..._v0,
          draft: {
            ..._v0.committed
          },
          dirty: new Map(),
          touched: new Map(),
          focused: new Map(),
          errors: new Map()
        };
      case "SUBMIT":
        return {
          ..._v0,
          submitting: !0
        };
      default:
        return _v0;
    }
  }
  _v0.s(["CONTROLLER", 0, _v3, "useField", 0, function ({
    [_v3]: {
      state: _v0,
      dispatch: _v1
    }
  }, _v2) {
    let _v3 = (0, _v1.useCallback)(() => _v1({
        type: "BLUR",
        payload: {
          name: _v2
        }
      }), [_v1, _v2]),
      _v4 = (0, _v1.useCallback)(_v0 => {
        _v1({
          type: "UPDATE",
          payload: {
            name: _v2,
            value: _v0.currentTarget.value
          }
        });
      }, [_v1, _v2]),
      _v5 = (0, _v1.useCallback)(() => _v1({
        type: "FOCUS",
        payload: {
          name: _v2
        }
      }), [_v1, _v2]),
      _v6 = (0, _v1.useMemo)(() => ({
        onBlur: _v3,
        onChange: _v4,
        onFocus: _v5,
        value: _v0.draft[_v2]
      }), [_v0.draft[_v2]]),
      _v7 = (0, _v1.useMemo)(() => ({
        dirty: _v0.dirty.get(_v2),
        errors: _v0.errors.get(_v2),
        focused: _v0.focused.get(_v2),
        touched: _v0.touched.get(_v2)
      }), [_v0.dirty.get(_v2), _v0.touched.get(_v2), _v0.errors.get(_v2), _v0.focused.get(_v2)]),
      _v8 = (0, _v1.useMemo)(() => {
        let _v0 = _v0.errors.get(_v2),
          _v1 = _v0.dirty.get(_v2);
        return {
          ..._v6,
          format: _v1 && _v0 ? "negative" : "neutral",
          errorMsg: _v1 && _v0 ? _v0 : void 0
        };
      }, [_v6, _v7]),
      _v9 = (0, _v1.useMemo)(() => ({
        setValue: _v0 => _v1({
          type: "UPDATE",
          payload: {
            name: _v2,
            value: _v0
          }
        })
      }), []);
    return (0, _v1.useMemo)(() => ({
      input: _v6,
      meta: _v7,
      handlers: _v9,
      iris: _v8
    }), [_v6, _v8, _v7]);
  }, "useForm", 0, function ({
    initialValues: _v0,
    validationSchema: _v1,
    onSubmit: _v2,
    validateOnBlur: _v3 = !0,
    validateOnChange: _v4 = !0,
    validateOnFirstRun: _v5 = !0
  }) {
    let [_v6, _v7] = (0, _v1.useReducer)(_v4, {
      committed: _v0,
      draft: _v0,
      submitting: !1,
      dirty: new Map(),
      errors: new Map(),
      focused: new Map(),
      touched: new Map()
    });
    function _v8() {
      if (_v1) try {
        _v1.validateSync(_v6.draft, {
          abortEarly: !1
        }), _v7({
          type: "VALIDATE",
          payload: {
            state: "ok"
          }
        });
      } catch (_v0) {
        if (_v0 instanceof _v2.ValidationError) if (_v0.inner && _v0.inner.length > 0) _v7({
          type: "VALIDATE",
          payload: {
            errors: new Map(_v0.inner.map(({
              path: _v0,
              errors: _v1
            }) => [_v0, _v1])),
            state: "error"
          }
        });else {
          let {
            path: _v0,
            message: _v1
          } = _v0;
          _v7({
            type: "VALIDATE",
            payload: {
              errors: new Map().set(_v0, _v1),
              state: "error"
            }
          });
        }
      }
    }
    let _v9 = (0, _v1.useCallback)(() => _v7({
        type: "RESET"
      }), [_v7]),
      _v10 = (0, _v1.useCallback)(async _v0 => {
        _v0.preventDefault(), _v7({
          type: "SUBMIT"
        });
        let _v1 = _v2(_v6.draft);
        if (_v1 && ("object" == typeof _v1 || "function" == typeof _v1) && "function" == typeof _v1.then) try {
          await _v1, _v7({
            type: "COMMIT"
          });
        } catch (_v0) {} else _v7({
          type: "COMMIT"
        });
      }, [_v2, _v7]);
    return (0, _v1.useEffect)(() => {
      _v5 && _v8();
    }, []), (0, _v1.useEffect)(() => {
      _v4 && _v8();
    }, [_v6.draft]), (0, _v1.useEffect)(() => {
      _v3 && _v8();
    }, [_v6.touched]), (0, _v1.useMemo)(() => ({
      handleReset: _v9,
      handleSubmit: _v10,
      dirty: _v6.dirty.size > 0,
      valid: 0 === _v6.errors.size,
      submitting: _v6.submitting,
      [_v3]: {
        state: _v6,
        dispatch: _v7
      }
    }), [_v6, _v7]);
  }]);
}