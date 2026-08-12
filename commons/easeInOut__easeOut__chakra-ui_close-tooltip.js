{
  "use strict";

  var _v1 = {
      exit: {
        scale: .85,
        opacity: 0,
        transition: {
          opacity: {
            duration: .15,
            easings: "easeInOut"
          },
          scale: {
            duration: .2,
            easings: "easeInOut"
          }
        }
      },
      enter: {
        scale: 1,
        opacity: 1,
        transition: {
          opacity: {
            easings: "easeOut",
            duration: .2
          },
          scale: {
            duration: .2,
            ease: [.175, .885, .4, 1.1]
          }
        }
      }
    },
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0 => {
      var _v1;
      return (null == (_v1 = _v0.current) ? void 0 : _v1.ownerDocument) || document;
    },
    _v11 = _v0 => {
      var _v1, _v2;
      return (null == (_v2 = null == (_v1 = _v0.current) ? void 0 : _v1.ownerDocument) ? void 0 : _v2.defaultView) || window;
    },
    _v12 = "chakra-ui:close-tooltip",
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = (0, _v14.chakra)(_v20.motion.div),
    _v23 = (0, _v15.forwardRef)((_v0, _v1) => {
      var _v2, _v3;
      let _v4,
        _v5 = (0, _v17.useStyleConfig)("Tooltip", _v0),
        _v6 = (0, _v16.omitThemingProps)(_v0),
        _v7 = (0, _v18.useTheme)(),
        {
          children: _v8,
          label: _v9,
          shouldWrapChildren: _v10,
          "aria-label": _v11,
          hasArrow: _v12,
          bg: _v13,
          portalProps: _v14,
          background: _v15,
          backgroundColor: _v16,
          bgColor: _v17,
          motionProps: _v18,
          ..._v19
        } = _v6,
        _v20 = null != (_v3 = null != (_v2 = null != _v15 ? _v15 : _v16) ? _v2 : _v13) ? _v3 : _v17;
      if (_v20) {
        _v5.bg = _v20;
        let _v0 = (0, _v16.getCSSVar)(_v7, "colors", _v20);
        _v5[_v3.popperCSSVars.arrowBg.var] = _v0;
      }
      let _v21 = function (_v0 = {}) {
        var _v1, _v2;
        let {
            openDelay: _v3 = 0,
            closeDelay: _v4 = 0,
            closeOnClick: _v5 = !0,
            closeOnMouseDown: _v6,
            closeOnScroll: _v7,
            closeOnPointerDown: _v8 = _v6,
            closeOnEsc: _v9 = !0,
            onOpen: _v10,
            onClose: _v11,
            placement: _v12,
            id: _v13,
            isOpen: _v14,
            defaultIsOpen: _v15,
            arrowSize: _v16 = 10,
            arrowShadowColor: _v17,
            arrowPadding: _v18,
            modifiers: _v19,
            isDisabled: _v20,
            gutter: _v21,
            offset: _v22,
            direction: _v23,
            ..._v24
          } = _v0,
          {
            isOpen: _v25,
            onOpen: _v26,
            onClose: _v27
          } = (0, _v5.useDisclosure)({
            isOpen: _v14,
            defaultIsOpen: _v15,
            onOpen: _v10,
            onClose: _v11
          }),
          {
            referenceRef: _v28,
            getPopperProps: _v29,
            getArrowInnerProps: _v30,
            getArrowProps: _v31
          } = (0, _v4.usePopper)({
            enabled: _v25,
            placement: _v12,
            arrowPadding: _v18,
            modifiers: _v19,
            gutter: _v21,
            offset: _v22,
            direction: _v23
          }),
          _v32 = (0, _v9.useId)(),
          _v33 = `tooltip-${null != _v13 ? _v13 : _v32}`,
          _v34 = (0, _v9.useRef)(null),
          _v35 = (0, _v9.useRef)(),
          _v36 = (0, _v9.useCallback)(() => {
            _v35.current && (clearTimeout(_v35.current), _v35.current = void 0);
          }, []),
          _v37 = (0, _v9.useRef)(),
          _v38 = (0, _v9.useCallback)(() => {
            _v37.current && (clearTimeout(_v37.current), _v37.current = void 0);
          }, []),
          _v39 = (0, _v9.useCallback)(() => {
            _v38(), _v27();
          }, [_v27, _v38]),
          _v40 = (_v1 = _v34, _v2 = _v39, (0, _v9.useEffect)(() => {
            let _v0 = _v10(_v1);
            return _v0.addEventListener(_v12, _v2), () => _v0.removeEventListener(_v12, _v2);
          }, [_v2, _v1]), () => {
            let _v0 = _v10(_v1),
              _v1 = _v11(_v1);
            _v0.dispatchEvent(new _v1.CustomEvent(_v12));
          }),
          _v41 = (0, _v9.useCallback)(() => {
            _v20 || _v35.current || (_v25 && _v40(), _v35.current = _v11(_v34).setTimeout(_v26, _v3));
          }, [_v40, _v20, _v25, _v26, _v3]),
          _v42 = (0, _v9.useCallback)(() => {
            _v36(), _v37.current = _v11(_v34).setTimeout(_v39, _v4);
          }, [_v4, _v39, _v36]),
          _v43 = (0, _v9.useCallback)(() => {
            _v25 && _v5 && _v42();
          }, [_v5, _v42, _v25]),
          _v44 = (0, _v9.useCallback)(() => {
            _v25 && _v8 && _v42();
          }, [_v8, _v42, _v25]),
          _v45 = (0, _v9.useCallback)(_v0 => {
            _v25 && "Escape" === _v0.key && _v42();
          }, [_v25, _v42]);
        (0, _v6.useEventListener)(() => _v10(_v34), "keydown", _v9 ? _v45 : void 0), (0, _v6.useEventListener)(() => {
          let _v0 = _v34.current;
          if (!_v0) return null;
          let _v1 = (0, _v2.getScrollParent)(_v0);
          return "body" === _v1.localName ? _v11(_v34) : _v1;
        }, "scroll", () => {
          _v25 && _v7 && _v39();
        }, {
          passive: !0,
          capture: !0
        }), (0, _v9.useEffect)(() => {
          _v20 && (_v36(), _v25 && _v27());
        }, [_v20, _v25, _v27, _v36]), (0, _v9.useEffect)(() => () => {
          _v36(), _v38();
        }, [_v36, _v38]), (0, _v6.useEventListener)(() => _v34.current, "pointerleave", _v42);
        let _v46 = (0, _v9.useCallback)((_v0 = {}, _v1 = null) => ({
            ..._v0,
            ref: (0, _v7.mergeRefs)(_v34, _v1, _v28),
            onPointerEnter: (0, _v8.callAllHandlers)(_v0.onPointerEnter, _v0 => {
              "touch" !== _v0.pointerType && _v41();
            }),
            onClick: (0, _v8.callAllHandlers)(_v0.onClick, _v43),
            onPointerDown: (0, _v8.callAllHandlers)(_v0.onPointerDown, _v44),
            onFocus: (0, _v8.callAllHandlers)(_v0.onFocus, _v41),
            onBlur: (0, _v8.callAllHandlers)(_v0.onBlur, _v42),
            "aria-describedby": _v25 ? _v33 : void 0
          }), [_v41, _v42, _v44, _v25, _v33, _v43, _v28]),
          _v47 = (0, _v9.useCallback)((_v0 = {}, _v1 = null) => _v29({
            ..._v0,
            style: {
              ..._v0.style,
              [_v3.popperCSSVars.arrowSize.var]: _v16 ? `${_v16}px` : void 0,
              [_v3.popperCSSVars.arrowShadowColor.var]: _v17
            }
          }, _v1), [_v29, _v16, _v17]);
        return {
          isOpen: _v25,
          show: _v41,
          hide: _v42,
          getTriggerProps: _v46,
          getTooltipProps: (0, _v9.useCallback)((_v0 = {}, _v1 = null) => {
            let _v2 = {
              ..._v0.style,
              position: "relative",
              transformOrigin: _v3.popperCSSVars.transformOrigin.varRef
            };
            return {
              ref: _v1,
              ..._v24,
              ..._v0,
              id: _v33,
              role: "tooltip",
              style: _v2
            };
          }, [_v24, _v33]),
          getTooltipPositionerProps: _v47,
          getArrowProps: _v31,
          getArrowInnerProps: _v30
        };
      }({
        ..._v19,
        direction: _v7.direction
      });
      if ("string" == typeof _v8 || _v10) _v4 = (0, _v21.jsx)(_v14.chakra.span, {
        display: "inline-block",
        tabIndex: 0,
        ..._v21.getTriggerProps(),
        children: _v8
      });else {
        let _v0 = _v9.Children.only(_v8);
        _v4 = (0, _v9.cloneElement)(_v0, _v21.getTriggerProps(_v0.props, _v0.ref));
      }
      let _v22 = !!_v11,
        _v23 = _v21.getTooltipProps({}, _v1),
        _v24 = _v22 ? function (_v0, _v1 = []) {
          let _v2 = Object.assign({}, _v0);
          for (let _v0 of _v1) _v0 in _v2 && delete _v2[_v0];
          return _v2;
        }(_v23, ["role", "id"]) : _v23,
        _v25 = function (_v0, _v1) {
          let _v2 = {};
          for (let _v0 of _v1) _v0 in _v0 && (_v2[_v0] = _v0[_v0]);
          return _v2;
        }(_v23, ["role", "id"]);
      return _v9 ? (0, _v21.jsxs)(_v21.Fragment, {
        children: [_v4, (0, _v21.jsx)(_v19.AnimatePresence, {
          children: _v21.isOpen && (0, _v21.jsx)(_v13.Portal, {
            ..._v14,
            children: (0, _v21.jsx)(_v14.chakra.div, {
              ..._v21.getTooltipPositionerProps(),
              __css: {
                zIndex: _v5.zIndex,
                pointerEvents: "none"
              },
              children: (0, _v21.jsxs)(_v22, {
                variants: _v1,
                initial: "exit",
                animate: "enter",
                exit: "exit",
                ..._v18,
                ..._v24,
                __css: _v5,
                children: [_v9, _v22 && (0, _v21.jsx)(_v14.chakra.span, {
                  srOnly: !0,
                  ..._v25,
                  children: _v11
                }), _v12 && (0, _v21.jsx)(_v14.chakra.div, {
                  "data-popper-arrow": !0,
                  className: "chakra-tooltip__arrow-wrapper",
                  children: (0, _v21.jsx)(_v14.chakra.div, {
                    "data-popper-arrow-inner": !0,
                    className: "chakra-tooltip__arrow",
                    __css: {
                      bg: _v5.bg
                    }
                  })
                })]
              })
            })
          })
        })]
      }) : (0, _v21.jsx)(_v21.Fragment, {
        children: _v8
      });
    });
  _v23.displayName = "Tooltip", _v0.s(["Tooltip", 0, _v23], 0);
}