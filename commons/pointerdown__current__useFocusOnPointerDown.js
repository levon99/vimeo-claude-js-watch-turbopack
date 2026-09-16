{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  function _v3(_v0) {
    let {
        ref: _v1,
        elements: _v2,
        enabled: _v3
      } = _v0,
      _v4 = () => {
        var _v0, _v1;
        return null != (_v1 = null == (_v0 = _v1.current) ? void 0 : _v0.ownerDocument) ? _v1 : document;
      };
    (0, _v2.useEventListener)(_v4, "pointerdown", _v0 => {
      var _v1, _v2;
      let _v3, _v4;
      if (_v1 = /mac|iphone|ipad|ipod/i, !("u" > typeof window && _v1.test(null != (_v2 = null == (_v3 = navigator.userAgentData) ? void 0 : _v3.platform) ? _v2 : navigator.platform) && (_v4 = /apple/i, "u" > typeof window && _v4.test(navigator.vendor))) || !_v3) return;
      let _v5 = _v0.target,
        _v6 = (null != _v2 ? _v2 : [_v1]).some(_v0 => {
          let _v1 = "current" in _v0 ? _v0.current : _v0;
          return (null == _v1 ? void 0 : _v1.contains(_v5)) || _v1 === _v5;
        });
      _v4().activeElement !== _v5 && _v6 && (_v0.preventDefault(), _v5.focus());
    });
  }
  _v0.s(["useFocusOnPointerDown", 0, _v3], 0);
  var _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = "click",
    _v13 = "hover";
  function _v14(_v0, _v1) {
    return _v0 === _v1 || (null == _v0 ? void 0 : _v0.contains(_v1));
  }
  function _v15(_v0) {
    var _v1;
    let _v2 = _v0.currentTarget.ownerDocument.activeElement;
    return null != (_v1 = _v0.relatedTarget) ? _v1 : _v2;
  }
  var _v16 = _v0.i(0),
    [_v17, _v18] = (0, _v16.createContext)({
      name: "PopoverContext",
      errorMessage: "usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"
    }),
    [_v19, _v20] = (0, _v16.createContext)({
      name: "PopoverStylesContext",
      errorMessage: "usePopoverStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Popover />\" "
    });
  _v0.s(["PopoverProvider", 0, _v17, "PopoverStylesProvider", 0, _v19, "usePopoverContext", 0, _v18, "usePopoverStyles", 0, _v20], 0);
  var _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0);
  function _v25(_v0) {
    let _v1 = (0, _v22.useMultiStyleConfig)("Popover", _v0),
      {
        children: _v2,
        ..._v3
      } = (0, _v21.omitThemingProps)(_v0),
      _v4 = (0, _v23.useTheme)(),
      _v5 = function (_v0 = {}) {
        let {
            closeOnBlur: _v1 = !0,
            closeOnEsc: _v2 = !0,
            initialFocusRef: _v3,
            id: _v4,
            returnFocusOnClose: _v5 = !0,
            autoFocus: _v6 = !0,
            arrowSize: _v7,
            arrowShadowColor: _v8,
            trigger: _v9 = _v12,
            openDelay: _v10 = 200,
            closeDelay: _v11 = 200,
            isLazy: _v12,
            lazyBehavior: _v13 = "unmount",
            computePositionOnMount: _v14,
            ..._v15
          } = _v0,
          {
            isOpen: _v16,
            onClose: _v17,
            onOpen: _v18,
            onToggle: _v19
          } = (0, _v5.useDisclosure)(_v0),
          _v20 = (0, _v11.useRef)(null),
          _v21 = (0, _v11.useRef)(null),
          _v22 = (0, _v11.useRef)(null),
          _v23 = (0, _v11.useRef)(!1),
          _v24 = (0, _v11.useRef)(!1);
        _v16 && (_v24.current = !0);
        let [_v25, _v26] = (0, _v11.useState)(!1),
          [_v27, _v28] = (0, _v11.useState)(!1),
          _v29 = (0, _v11.useId)(),
          _v30 = null != _v4 ? _v4 : _v29,
          [_v31, _v32, _v33, _v34] = ["popover-trigger", "popover-content", "popover-header", "popover-body"].map(_v0 => `${_v0}-${_v30}`),
          {
            referenceRef: _v35,
            getArrowProps: _v36,
            getPopperProps: _v37,
            getArrowInnerProps: _v38,
            forceUpdate: _v39
          } = (0, _v7.usePopper)({
            ..._v15,
            enabled: _v16 || !!_v14
          }),
          _v40 = (0, _v1.useAnimationState)({
            isOpen: _v16,
            ref: _v22
          });
        _v3({
          enabled: _v16,
          ref: _v21
        }), (0, _v4.useFocusOnHide)(_v22, {
          focusRef: _v21,
          visible: _v16,
          shouldFocus: _v5 && _v9 === _v12
        }), (0, _v4.useFocusOnShow)(_v22, {
          focusRef: _v3,
          visible: _v16,
          shouldFocus: _v6 && _v9 === _v12
        });
        let _v41 = (0, _v10.lazyDisclosure)({
            wasSelected: _v24.current,
            enabled: _v12,
            mode: _v13,
            isSelected: _v40.present
          }),
          _v42 = (0, _v11.useCallback)((_v0 = {}, _v1 = null) => {
            let _v2 = {
              ..._v0,
              style: {
                ..._v0.style,
                transformOrigin: _v6.popperCSSVars.transformOrigin.varRef,
                [_v6.popperCSSVars.arrowSize.var]: _v7 ? `${_v7}px` : void 0,
                [_v6.popperCSSVars.arrowShadowColor.var]: _v8
              },
              ref: (0, _v8.mergeRefs)(_v22, _v1),
              children: _v41 ? _v0.children : null,
              id: _v32,
              tabIndex: -1,
              role: "dialog",
              onKeyDown: (0, _v9.callAllHandlers)(_v0.onKeyDown, _v0 => {
                _v2 && "Escape" === _v0.key && _v17();
              }),
              onBlur: (0, _v9.callAllHandlers)(_v0.onBlur, _v0 => {
                let _v1 = _v15(_v0),
                  _v2 = _v14(_v22.current, _v1),
                  _v3 = _v14(_v21.current, _v1);
                _v16 && _v1 && !_v2 && !_v3 && _v17();
              }),
              "aria-labelledby": _v25 ? _v33 : void 0,
              "aria-describedby": _v27 ? _v34 : void 0
            };
            return _v9 === _v13 && (_v2.role = "tooltip", _v2.onMouseEnter = (0, _v9.callAllHandlers)(_v0.onMouseEnter, () => {
              _v23.current = !0;
            }), _v2.onMouseLeave = (0, _v9.callAllHandlers)(_v0.onMouseLeave, _v0 => {
              null !== _v0.nativeEvent.relatedTarget && (_v23.current = !1, setTimeout(() => _v17(), _v11));
            })), _v2;
          }, [_v41, _v32, _v25, _v33, _v27, _v34, _v9, _v2, _v17, _v16, _v1, _v11, _v8, _v7]),
          _v43 = (0, _v11.useCallback)((_v0 = {}, _v1 = null) => _v37({
            ..._v0,
            style: {
              visibility: _v16 ? "visible" : "hidden",
              ..._v0.style
            }
          }, _v1), [_v16, _v37]),
          _v44 = (0, _v11.useCallback)((_v0, _v1 = null) => ({
            ..._v0,
            ref: (0, _v8.mergeRefs)(_v1, _v20, _v35)
          }), [_v20, _v35]),
          _v45 = (0, _v11.useRef)(),
          _v46 = (0, _v11.useRef)(),
          _v47 = (0, _v11.useCallback)(_v0 => {
            null == _v20.current && _v35(_v0);
          }, [_v35]),
          _v48 = (0, _v11.useCallback)((_v0 = {}, _v1 = null) => {
            let _v2 = {
              ..._v0,
              ref: (0, _v8.mergeRefs)(_v21, _v1, _v47),
              id: _v31,
              "aria-haspopup": "dialog",
              "aria-expanded": _v16,
              "aria-controls": _v32
            };
            return _v9 === _v12 && (_v2.onClick = (0, _v9.callAllHandlers)(_v0.onClick, _v19)), _v9 === _v13 && (_v2.onFocus = (0, _v9.callAllHandlers)(_v0.onFocus, () => {
              void 0 === _v45.current && _v18();
            }), _v2.onBlur = (0, _v9.callAllHandlers)(_v0.onBlur, _v0 => {
              let _v1 = _v15(_v0),
                _v2 = !_v14(_v22.current, _v1);
              _v16 && _v1 && _v2 && _v17();
            }), _v2.onKeyDown = (0, _v9.callAllHandlers)(_v0.onKeyDown, _v0 => {
              "Escape" === _v0.key && _v17();
            }), _v2.onMouseEnter = (0, _v9.callAllHandlers)(_v0.onMouseEnter, () => {
              _v23.current = !0, _v45.current = window.setTimeout(() => _v18(), _v10);
            }), _v2.onMouseLeave = (0, _v9.callAllHandlers)(_v0.onMouseLeave, () => {
              _v23.current = !1, _v45.current && (clearTimeout(_v45.current), _v45.current = void 0), _v46.current = window.setTimeout(() => {
                !1 === _v23.current && _v17();
              }, _v11);
            })), _v2;
          }, [_v31, _v16, _v32, _v9, _v47, _v19, _v18, _v1, _v17, _v10, _v11]);
        (0, _v11.useEffect)(() => () => {
          _v45.current && clearTimeout(_v45.current), _v46.current && clearTimeout(_v46.current);
        }, []);
        let _v49 = (0, _v11.useCallback)((_v0 = {}, _v1 = null) => ({
            ..._v0,
            id: _v33,
            ref: (0, _v8.mergeRefs)(_v1, _v0 => {
              _v26(!!_v0);
            })
          }), [_v33]),
          _v50 = (0, _v11.useCallback)((_v0 = {}, _v1 = null) => ({
            ..._v0,
            id: _v34,
            ref: (0, _v8.mergeRefs)(_v1, _v0 => {
              _v28(!!_v0);
            })
          }), [_v34]);
        return {
          forceUpdate: _v39,
          isOpen: _v16,
          onAnimationComplete: _v40.onComplete,
          onClose: _v17,
          getAnchorProps: _v44,
          getArrowProps: _v36,
          getArrowInnerProps: _v38,
          getPopoverPositionerProps: _v43,
          getPopoverProps: _v42,
          getTriggerProps: _v48,
          getHeaderProps: _v49,
          getBodyProps: _v50
        };
      }({
        ..._v3,
        direction: _v4.direction
      });
    return (0, _v24.jsx)(_v17, {
      value: _v5,
      children: (0, _v24.jsx)(_v19, {
        value: _v1,
        children: (0, _v9.runIfFn)(_v2, {
          isOpen: _v5.isOpen,
          onClose: _v5.onClose,
          forceUpdate: _v5.forceUpdate
        })
      })
    });
  }
  function _v26(_v0) {
    let _v1 = _v11.Children.only(_v0.children),
      {
        getTriggerProps: _v2
      } = _v18();
    return (0, _v11.cloneElement)(_v1, _v2(_v1.props, _v1.ref));
  }
  _v25.displayName = "Popover", _v0.s(["Popover", 0, _v25], 0), _v26.displayName = "PopoverTrigger", _v0.s(["PopoverTrigger", 0, _v26], 0);
}