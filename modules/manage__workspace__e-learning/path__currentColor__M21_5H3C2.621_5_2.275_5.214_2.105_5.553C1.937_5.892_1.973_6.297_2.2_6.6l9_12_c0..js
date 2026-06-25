{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0 => (0, _v2.jsx)(_v1.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      children: (0, _v2.jsx)("path", {
        fill: "currentColor",
        d: "M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z"
      })
    }),
    _v4 = _v0 => (0, _v2.jsx)(_v1.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      children: (0, _v2.jsx)("path", {
        fill: "currentColor",
        d: "M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z"
      })
    }),
    _v5 = _v0.i(0);
  function _v6(_v0, _v1, _v2, _v3) {
    (0, _v5.useEffect)(() => {
      var _v0;
      if (!_v0.current || !_v3) return;
      let _v1 = null != (_v0 = _v0.current.ownerDocument.defaultView) ? _v0 : window,
        _v2 = Array.isArray(_v1) ? _v1 : [_v1],
        _v3 = new _v1.MutationObserver(_v0 => {
          for (let _v0 of _v0) "attributes" === _v0.type && _v0.attributeName && _v2.includes(_v0.attributeName) && _v2(_v0);
        });
      return _v3.observe(_v0.current, {
        attributes: !0,
        attributeFilter: _v2
      }), () => _v3.disconnect();
    });
  }
  var _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  function _v9(_v0) {
    return parseFloat(_v0.toString().replace(/[^\w.-]+/g, ""));
  }
  function _v10(_v0, _v1) {
    return Math.max((0, _v8.countDecimalPlaces)(_v1), (0, _v8.countDecimalPlaces)(_v0));
  }
  function _v11(_v0, _v1, _v2) {
    let _v3 = _v9(_v0);
    if (Number.isNaN(_v3)) return;
    let _v4 = _v10(_v3, _v1);
    return (0, _v8.toPrecision)(_v3, null != _v2 ? _v2 : _v4);
  }
  var _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = /^[Ee0-9+\-.]$/;
  function _v18(_v0) {
    return _v17.test(_v0);
  }
  function _v19(_v0 = {}) {
    let {
        focusInputOnChange: _v1 = !0,
        clampValueOnBlur: _v2 = !0,
        keepWithinRange: _v3 = !0,
        min: _v4 = Number.MIN_SAFE_INTEGER,
        max: _v5 = Number.MAX_SAFE_INTEGER,
        step: _v6 = 1,
        isReadOnly: _v7,
        isDisabled: _v8,
        isRequired: _v9,
        isInvalid: _v10,
        pattern: _v11 = "[0-9]*(.[0-9]+)?",
        inputMode: _v12 = "decimal",
        allowMouseWheel: _v13,
        id: _v14,
        onChange: _v15,
        precision: _v16,
        name: _v17,
        "aria-describedby": _v18,
        "aria-label": _v19,
        "aria-labelledby": _v20,
        onFocus: _v21,
        onBlur: _v22,
        onInvalid: _v23,
        getAriaValueText: _v24,
        isValidCharacter: _v25,
        format: _v26,
        parse: _v27,
        ..._v28
      } = _v0,
      _v29 = (0, _v7.useCallbackRef)(_v21),
      _v30 = (0, _v7.useCallbackRef)(_v22),
      _v31 = (0, _v7.useCallbackRef)(_v23),
      _v32 = (0, _v7.useCallbackRef)(null != _v25 ? _v25 : _v18),
      _v33 = (0, _v7.useCallbackRef)(_v24),
      _v34 = function (_v0 = {}) {
        let {
            onChange: _v1,
            precision: _v2,
            defaultValue: _v3,
            value: _v4,
            step: _v5 = 1,
            min: _v6 = Number.MIN_SAFE_INTEGER,
            max: _v7 = Number.MAX_SAFE_INTEGER,
            keepWithinRange: _v8 = !0
          } = _v0,
          _v9 = (0, _v7.useCallbackRef)(_v1),
          [_v10, _v11] = (0, _v5.useState)(() => {
            var _v0;
            return null == _v3 ? "" : null != (_v0 = _v11(_v3, _v5, _v2)) ? _v0 : "";
          }),
          _v12 = void 0 !== _v4,
          _v13 = _v12 ? _v4 : _v10,
          _v14 = _v10(_v9(_v13), _v5),
          _v15 = null != _v2 ? _v2 : _v14,
          _v16 = (0, _v5.useCallback)(_v0 => {
            _v0 !== _v13 && (_v12 || _v11(_v0.toString()), null == _v9 || _v9(_v0.toString(), _v9(_v0)));
          }, [_v9, _v12, _v13]),
          _v17 = (0, _v5.useCallback)(_v0 => {
            let _v1 = _v0;
            return _v8 && (_v1 = (0, _v8.clampValue)(_v1, _v6, _v7)), (0, _v8.toPrecision)(_v1, _v15);
          }, [_v15, _v8, _v7, _v6]),
          _v18 = (0, _v5.useCallback)((_v0 = _v5) => {
            _v16(_v17("" === _v13 ? _v9(_v0) : _v9(_v13) + _v0));
          }, [_v17, _v5, _v16, _v13]),
          _v19 = (0, _v5.useCallback)((_v0 = _v5) => {
            _v16(_v17("" === _v13 ? _v9(-_v0) : _v9(_v13) - _v0));
          }, [_v17, _v5, _v16, _v13]),
          _v20 = (0, _v5.useCallback)(() => {
            var _v0;
            _v16(null == _v3 ? "" : null != (_v0 = _v11(_v3, _v5, _v2)) ? _v0 : _v6);
          }, [_v3, _v2, _v5, _v16, _v6]),
          _v21 = (0, _v5.useCallback)(_v0 => {
            var _v1;
            _v16(null != (_v1 = _v11(_v0, _v5, _v15)) ? _v1 : _v6);
          }, [_v15, _v5, _v16, _v6]),
          _v22 = _v9(_v13),
          _v23 = _v22 > _v7 || _v22 < _v6;
        return {
          isOutOfRange: _v23,
          isAtMax: _v22 === _v7,
          isAtMin: _v22 === _v6,
          precision: _v15,
          value: _v13,
          valueAsNumber: _v22,
          update: _v16,
          reset: _v20,
          increment: _v18,
          decrement: _v19,
          clamp: _v17,
          cast: _v21,
          setValue: _v11
        };
      }(_v0),
      {
        update: _v35,
        increment: _v36,
        decrement: _v37
      } = _v34,
      [_v38, _v39] = (0, _v5.useState)(!1),
      _v40 = !(_v7 || _v8),
      _v41 = (0, _v5.useRef)(null),
      _v42 = (0, _v5.useRef)(null),
      _v43 = (0, _v5.useRef)(null),
      _v44 = (0, _v5.useRef)(null),
      _v45 = (0, _v5.useCallback)(_v0 => _v0.split("").filter(_v32).join(""), [_v32]),
      _v46 = (0, _v5.useCallback)(_v0 => {
        var _v1;
        return null != (_v1 = null == _v27 ? void 0 : _v27(_v0)) ? _v1 : _v0;
      }, [_v27]),
      _v47 = (0, _v5.useCallback)(_v0 => {
        var _v1;
        return (null != (_v1 = null == _v26 ? void 0 : _v26(_v0)) ? _v1 : _v0).toString();
      }, [_v26]);
    (0, _v13.useUpdateEffect)(() => {
      _v34.valueAsNumber > _v5 ? null == _v31 || _v31("rangeOverflow", _v47(_v34.value), _v34.valueAsNumber) : _v34.valueAsNumber < _v4 && (null == _v31 || _v31("rangeOverflow", _v47(_v34.value), _v34.valueAsNumber));
    }, [_v34.valueAsNumber, _v34.value, _v47, _v31]), (0, _v14.useSafeLayoutEffect)(() => {
      if (_v41.current && _v41.current.value != _v34.value) {
        let _v0 = _v46(_v41.current.value);
        _v34.setValue(_v45(_v0));
      }
    }, [_v46, _v45]);
    let _v48 = (0, _v5.useCallback)((_v0 = _v6) => {
        _v40 && _v36(_v0);
      }, [_v36, _v40, _v6]),
      _v49 = (0, _v5.useCallback)((_v0 = _v6) => {
        _v40 && _v37(_v0);
      }, [_v37, _v40, _v6]),
      _v50 = function (_v0, _v1) {
        var _v2;
        let _v3,
          [_v4, _v5] = (0, _v5.useState)(!1),
          [_v6, _v7] = (0, _v5.useState)(null),
          [_v8, _v9] = (0, _v5.useState)(!0),
          _v10 = (0, _v5.useRef)(null);
        _v2 = _v4 ? 50 : null, _v3 = (0, _v7.useCallbackRef)(() => {
          "increment" === _v6 && _v0(), "decrement" === _v6 && _v1();
        }), (0, _v5.useEffect)(() => {
          let _v0 = null;
          return null !== _v2 && (_v0 = window.setInterval(() => _v3(), _v2)), () => {
            _v0 && window.clearInterval(_v0);
          };
        }, [_v2, _v3]);
        let _v11 = (0, _v5.useCallback)(() => {
            _v8 && _v0(), _v10.current = setTimeout(() => {
              _v9(!1), _v5(!0), _v7("increment");
            }, 300);
          }, [_v0, _v8]),
          _v12 = (0, _v5.useCallback)(() => {
            _v8 && _v1(), _v10.current = setTimeout(() => {
              _v9(!1), _v5(!0), _v7("decrement");
            }, 300);
          }, [_v1, _v8]),
          _v13 = (0, _v5.useCallback)(() => {
            _v9(!0), _v5(!1), clearTimeout(_v10.current);
          }, []);
        return (0, _v5.useEffect)(() => () => clearTimeout(_v10.current), []), {
          up: _v11,
          down: _v12,
          stop: _v13,
          isSpinning: _v4
        };
      }(_v48, _v49);
    _v6(_v43, "disabled", _v50.stop, _v50.isSpinning), _v6(_v44, "disabled", _v50.stop, _v50.isSpinning);
    let _v51 = (0, _v5.useCallback)(_v0 => {
        _v0.nativeEvent.isComposing || (_v35(_v45(_v46(_v0.currentTarget.value))), _v42.current = {
          start: _v0.currentTarget.selectionStart,
          end: _v0.currentTarget.selectionEnd
        });
      }, [_v35, _v45, _v46]),
      _v52 = (0, _v5.useCallback)(_v0 => {
        var _v1, _v2, _v3;
        null == _v29 || _v29(_v0), _v42.current && (_v0.target.selectionStart = null != (_v2 = _v42.current.start) ? _v2 : null == (_v1 = _v0.currentTarget.value) ? void 0 : _v1.length, _v0.currentTarget.selectionEnd = null != (_v3 = _v42.current.end) ? _v3 : _v0.currentTarget.selectionStart);
      }, [_v29]),
      _v53 = (0, _v5.useCallback)(_v0 => {
        if (_v0.nativeEvent.isComposing) return;
        !function (_v0, _v1) {
          if (null == _v0.key) return !0;
          let _v2 = _v0.ctrlKey || _v0.altKey || _v0.metaKey;
          return 1 !== _v0.key.length || !!_v2 || _v1(_v0.key);
        }(_v0, _v32) && _v0.preventDefault();
        let _v1 = _v54(_v0) * _v6,
          _v2 = {
            ArrowUp: () => _v48(_v1),
            ArrowDown: () => _v49(_v1),
            Home: () => _v35(_v4),
            End: () => _v35(_v5)
          }[_v0.key];
        _v2 && (_v0.preventDefault(), _v2(_v0));
      }, [_v32, _v6, _v48, _v49, _v35, _v4, _v5]),
      _v54 = _v0 => {
        let _v1 = 1;
        return (_v0.metaKey || _v0.ctrlKey) && (_v1 = .1), _v0.shiftKey && (_v1 = 10), _v1;
      },
      _v55 = (0, _v5.useMemo)(() => {
        let _v0 = null == _v33 ? void 0 : _v33(_v34.value);
        return null != _v0 ? _v0 : _v34.value.toString() || void 0;
      }, [_v34.value, _v33]),
      _v56 = (0, _v5.useCallback)(() => {
        let _v0 = _v34.value;
        "" === _v34.value || (/^[eE]/.test(_v34.value.toString()) ? _v34.setValue("") : (_v34.valueAsNumber < _v4 && (_v0 = _v4), _v34.valueAsNumber > _v5 && (_v0 = _v5), _v34.cast(_v0)));
      }, [_v34, _v5, _v4]),
      _v57 = (0, _v5.useCallback)(() => {
        _v39(!1), _v2 && _v56();
      }, [_v2, _v39, _v56]),
      _v58 = (0, _v5.useCallback)(() => {
        _v1 && requestAnimationFrame(() => {
          var _v0;
          null == (_v0 = _v41.current) || _v0.focus();
        });
      }, [_v1]),
      _v59 = (0, _v5.useCallback)(_v0 => {
        _v0.preventDefault(), _v50.up(), _v58();
      }, [_v58, _v50]),
      _v60 = (0, _v5.useCallback)(_v0 => {
        _v0.preventDefault(), _v50.down(), _v58();
      }, [_v58, _v50]);
    (0, _v12.useEventListener)(() => _v41.current, "wheel", _v0 => {
      var _v1, _v2;
      let _v3 = (null != (_v2 = null == (_v1 = _v41.current) ? void 0 : _v1.ownerDocument) ? _v2 : document).activeElement === _v41.current;
      if (!_v13 || !_v3) return;
      _v0.preventDefault();
      let _v4 = _v54(_v0) * _v6,
        _v5 = Math.sign(_v0.deltaY);
      -1 === _v5 ? _v48(_v4) : 1 === _v5 && _v49(_v4);
    }, {
      passive: !1
    });
    let _v61 = (0, _v5.useCallback)((_v0 = {}, _v1 = null) => {
        let _v2 = _v8 || _v3 && _v34.isAtMax;
        return {
          ..._v0,
          ref: (0, _v15.mergeRefs)(_v1, _v43),
          role: "button",
          tabIndex: -1,
          onPointerDown: (0, _v16.callAllHandlers)(_v0.onPointerDown, _v0 => {
            0 !== _v0.button || _v2 || _v59(_v0);
          }),
          onPointerLeave: (0, _v16.callAllHandlers)(_v0.onPointerLeave, _v50.stop),
          onPointerUp: (0, _v16.callAllHandlers)(_v0.onPointerUp, _v50.stop),
          disabled: _v2,
          "aria-disabled": (0, _v16.ariaAttr)(_v2)
        };
      }, [_v34.isAtMax, _v3, _v59, _v50.stop, _v8]),
      _v62 = (0, _v5.useCallback)((_v0 = {}, _v1 = null) => {
        let _v2 = _v8 || _v3 && _v34.isAtMin;
        return {
          ..._v0,
          ref: (0, _v15.mergeRefs)(_v1, _v44),
          role: "button",
          tabIndex: -1,
          onPointerDown: (0, _v16.callAllHandlers)(_v0.onPointerDown, _v0 => {
            0 !== _v0.button || _v2 || _v60(_v0);
          }),
          onPointerLeave: (0, _v16.callAllHandlers)(_v0.onPointerLeave, _v50.stop),
          onPointerUp: (0, _v16.callAllHandlers)(_v0.onPointerUp, _v50.stop),
          disabled: _v2,
          "aria-disabled": (0, _v16.ariaAttr)(_v2)
        };
      }, [_v34.isAtMin, _v3, _v60, _v50.stop, _v8]),
      _v63 = (0, _v5.useCallback)((_v0 = {}, _v1 = null) => {
        var _v2, _v3, _v4, _v5;
        return {
          name: _v17,
          inputMode: _v12,
          type: "text",
          pattern: _v11,
          "aria-labelledby": _v20,
          "aria-label": _v19,
          "aria-describedby": _v18,
          id: _v14,
          disabled: _v8,
          ..._v0,
          readOnly: null != (_v2 = _v0.readOnly) ? _v2 : _v7,
          "aria-readonly": null != (_v3 = _v0.readOnly) ? _v3 : _v7,
          "aria-required": null != (_v4 = _v0.required) ? _v4 : _v9,
          required: null != (_v5 = _v0.required) ? _v5 : _v9,
          ref: (0, _v15.mergeRefs)(_v41, _v1),
          value: _v47(_v34.value),
          role: "spinbutton",
          "aria-valuemin": _v4,
          "aria-valuemax": _v5,
          "aria-valuenow": Number.isNaN(_v34.valueAsNumber) ? void 0 : _v34.valueAsNumber,
          "aria-invalid": (0, _v16.ariaAttr)(null != _v10 ? _v10 : _v34.isOutOfRange),
          "aria-valuetext": _v55,
          autoComplete: "off",
          autoCorrect: "off",
          onChange: (0, _v16.callAllHandlers)(_v0.onChange, _v51),
          onKeyDown: (0, _v16.callAllHandlers)(_v0.onKeyDown, _v53),
          onFocus: (0, _v16.callAllHandlers)(_v0.onFocus, _v52, () => _v39(!0)),
          onBlur: (0, _v16.callAllHandlers)(_v0.onBlur, _v30, _v57)
        };
      }, [_v17, _v12, _v11, _v20, _v19, _v47, _v18, _v14, _v8, _v9, _v7, _v10, _v34.value, _v34.valueAsNumber, _v34.isOutOfRange, _v4, _v5, _v55, _v51, _v53, _v52, _v30, _v57]);
    return {
      value: _v47(_v34.value),
      valueAsNumber: _v34.valueAsNumber,
      isFocused: _v38,
      isDisabled: _v8,
      isReadOnly: _v7,
      getIncrementButtonProps: _v61,
      getDecrementButtonProps: _v62,
      getInputProps: _v63,
      htmlProps: _v28
    };
  }
  _v0.s(["useNumberInput", 0, _v19], 0);
  var _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    [_v26, _v27] = (0, _v21.createContext)({
      name: "NumberInputStylesContext",
      errorMessage: "useNumberInputStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<NumberInput />\" "
    }),
    [_v28, _v29] = (0, _v21.createContext)({
      name: "NumberInputContext",
      errorMessage: "useNumberInputContext: `context` is undefined. Seems you forgot to wrap number-input's components within <NumberInput />"
    }),
    _v30 = (0, _v23.forwardRef)(function (_v0, _v1) {
      let _v2 = (0, _v25.useMultiStyleConfig)("NumberInput", _v0),
        _v3 = (0, _v24.omitThemingProps)(_v0),
        {
          htmlProps: _v4,
          ..._v5
        } = _v19((0, _v20.useFormControlProps)(_v3)),
        _v6 = (0, _v5.useMemo)(() => _v5, [_v5]);
      return (0, _v2.jsx)(_v28, {
        value: _v6,
        children: (0, _v2.jsx)(_v26, {
          value: _v2,
          children: (0, _v2.jsx)(_v22.chakra.div, {
            ..._v4,
            ref: _v1,
            className: (0, _v16.cx)("chakra-numberinput", _v0.className),
            __css: {
              position: "relative",
              zIndex: 0,
              ..._v2.root
            }
          })
        })
      });
    });
  _v30.displayName = "NumberInput";
  var _v31 = (0, _v23.forwardRef)(function (_v0, _v1) {
    let _v2 = _v27();
    return (0, _v2.jsx)(_v22.chakra.div, {
      "aria-hidden": !0,
      ref: _v1,
      ..._v0,
      __css: {
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        top: "0",
        insetEnd: "0px",
        margin: "1px",
        height: "calc(100% - 2px)",
        zIndex: 1,
        ..._v2.stepperGroup
      }
    });
  });
  _v31.displayName = "NumberInputStepper";
  var _v32 = (0, _v23.forwardRef)(function (_v0, _v1) {
    let {
        getInputProps: _v2
      } = _v29(),
      _v3 = _v2(_v0, _v1),
      _v4 = _v27();
    return (0, _v2.jsx)(_v22.chakra.input, {
      ..._v3,
      className: (0, _v16.cx)("chakra-numberinput__field", _v0.className),
      __css: {
        width: "100%",
        ..._v4.field
      }
    });
  });
  _v32.displayName = "NumberInputField";
  var _v33 = (0, _v22.chakra)("div", {
      baseStyle: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        transitionProperty: "common",
        transitionDuration: "normal",
        userSelect: "none",
        cursor: "pointer",
        lineHeight: "normal"
      }
    }),
    _v34 = (0, _v23.forwardRef)(function (_v0, _v1) {
      var _v2;
      let _v3 = _v27(),
        {
          getDecrementButtonProps: _v4
        } = _v29(),
        _v5 = _v4(_v0, _v1);
      return (0, _v2.jsx)(_v33, {
        ..._v5,
        __css: _v3.stepper,
        children: null != (_v2 = _v0.children) ? _v2 : (0, _v2.jsx)(_v3, {})
      });
    });
  _v34.displayName = "NumberDecrementStepper";
  var _v35 = (0, _v23.forwardRef)(function (_v0, _v1) {
    var _v2;
    let {
        getIncrementButtonProps: _v3
      } = _v29(),
      _v4 = _v3(_v0, _v1),
      _v5 = _v27();
    return (0, _v2.jsx)(_v33, {
      ..._v4,
      __css: _v5.stepper,
      children: null != (_v2 = _v0.children) ? _v2 : (0, _v2.jsx)(_v4, {})
    });
  });
  _v35.displayName = "NumberIncrementStepper", _v0.s(["NumberDecrementStepper", 0, _v34, "NumberIncrementStepper", 0, _v35, "NumberInput", 0, _v30, "NumberInputField", 0, _v32, "NumberInputStepper", 0, _v31], 0);
}