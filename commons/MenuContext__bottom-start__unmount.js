{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  function _v8(_v0, _v1) {
    var _v2;
    let _v3 = _v0.target;
    return (!_v3 || !!_v9(_v3).contains(_v3)) && !(null == (_v2 = _v1.current) ? void 0 : _v2.contains(_v3));
  }
  function _v9(_v0) {
    var _v1;
    return null != (_v1 = null == _v0 ? void 0 : _v0.ownerDocument) ? _v1 : document;
  }
  var _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    [_v18, _v19, _v20, _v21] = (0, _v3.createDescendantContext)(),
    [_v22, _v23] = (0, _v11.createContext)({
      strict: !1,
      name: "MenuContext"
    });
  function _v24(_v0) {
    var _v1;
    return null != (_v1 = null == _v0 ? void 0 : _v0.ownerDocument) ? _v1 : document;
  }
  function _v25(_v0) {
    return _v24(_v0).activeElement === _v0;
  }
  function _v26(_v0 = {}) {
    let {
        id: _v1,
        closeOnSelect: _v2 = !0,
        closeOnBlur: _v3 = !0,
        initialFocusRef: _v4,
        autoSelect: _v5 = !0,
        isLazy: _v6,
        isOpen: _v7,
        defaultIsOpen: _v8,
        onClose: _v9,
        onOpen: _v10,
        placement: _v11 = "bottom-start",
        lazyBehavior: _v12 = "unmount",
        direction: _v13,
        computePositionOnMount: _v14 = !1,
        ..._v15
      } = _v0,
      _v16 = (0, _v1.useRef)(null),
      _v17 = (0, _v1.useRef)(null),
      _v18 = _v20(),
      _v19 = (0, _v1.useCallback)(() => {
        requestAnimationFrame(() => {
          var _v0;
          null == (_v0 = _v16.current) || _v0.focus({
            preventScroll: !1
          });
        });
      }, []),
      _v20 = (0, _v1.useCallback)(() => {
        let _v0 = setTimeout(() => {
          var _v0;
          if (_v4) null == (_v0 = _v4.current) || _v0.focus();else {
            let _v0 = _v18.firstEnabled();
            _v0 && _v29(_v0.index);
          }
        });
        _v34.current.add(_v0);
      }, [_v18, _v4]),
      _v21 = (0, _v1.useCallback)(() => {
        let _v0 = setTimeout(() => {
          let _v0 = _v18.lastEnabled();
          _v0 && _v29(_v0.index);
        });
        _v34.current.add(_v0);
      }, [_v18]),
      _v22 = (0, _v1.useCallback)(() => {
        null == _v10 || _v10(), _v5 ? _v20() : _v19();
      }, [_v5, _v20, _v19, _v10]),
      {
        isOpen: _v23,
        onOpen: _v24,
        onClose: _v25,
        onToggle: _v26
      } = (0, _v6.useDisclosure)({
        isOpen: _v7,
        defaultIsOpen: _v8,
        onClose: _v9,
        onOpen: _v22
      });
    !function (_v0) {
      let {
          ref: _v1,
          handler: _v2,
          enabled: _v3 = !0
        } = _v0,
        _v4 = (0, _v7.useCallbackRef)(_v2),
        _v5 = (0, _v1.useRef)({
          isPointerDown: !1,
          ignoreEmulatedMouseEvents: !1
        }).current;
      (0, _v1.useEffect)(() => {
        if (!_v3) return;
        let _v0 = _v0 => {
            _v8(_v0, _v1) && (_v5.isPointerDown = !0);
          },
          _v1 = _v0 => {
            if (_v5.ignoreEmulatedMouseEvents) {
              _v5.ignoreEmulatedMouseEvents = !1;
              return;
            }
            _v5.isPointerDown && _v2 && _v8(_v0, _v1) && (_v5.isPointerDown = !1, _v4(_v0));
          },
          _v2 = _v0 => {
            _v5.ignoreEmulatedMouseEvents = !0, _v2 && _v5.isPointerDown && _v8(_v0, _v1) && (_v5.isPointerDown = !1, _v4(_v0));
          },
          _v3 = _v9(_v1.current);
        return _v3.addEventListener("mousedown", _v0, !0), _v3.addEventListener("mouseup", _v1, !0), _v3.addEventListener("touchstart", _v0, !0), _v3.addEventListener("touchend", _v2, !0), () => {
          _v3.removeEventListener("mousedown", _v0, !0), _v3.removeEventListener("mouseup", _v1, !0), _v3.removeEventListener("touchstart", _v0, !0), _v3.removeEventListener("touchend", _v2, !0);
        };
      }, [_v2, _v1, _v4, _v5, _v3]);
    }({
      enabled: _v23 && _v3,
      ref: _v16,
      handler: _v0 => {
        var _v1;
        (null == (_v1 = _v17.current) ? void 0 : _v1.contains(_v0.target)) || _v25();
      }
    });
    let _v27 = (0, _v5.usePopper)({
        ..._v15,
        enabled: _v23 || _v14,
        placement: _v11,
        direction: _v13
      }),
      [_v28, _v29] = (0, _v1.useState)(-1);
    (0, _v14.useUpdateEffect)(() => {
      _v23 || _v29(-1);
    }, [_v23]), (0, _v4.useFocusOnHide)(_v16, {
      focusRef: _v17,
      visible: _v23,
      shouldFocus: !0
    });
    let _v30 = (0, _v10.useAnimationState)({
        isOpen: _v23,
        ref: _v16
      }),
      [_v31, _v32] = function (_v0, ..._v1) {
        let _v2 = (0, _v1.useId)(),
          _v3 = _v0 || _v2;
        return (0, _v1.useMemo)(() => _v1.map(_v0 => `${_v0}-${_v3}`), [_v3, _v1]);
      }(_v1, "menu-button", "menu-list"),
      _v33 = (0, _v1.useCallback)(() => {
        _v24(), _v19();
      }, [_v24, _v19]),
      _v34 = (0, _v1.useRef)(new Set([]));
    (0, _v1.useEffect)(() => {
      let _v0 = _v34.current;
      return () => {
        _v0.forEach(_v0 => clearTimeout(_v0)), _v0.clear();
      };
    }, []);
    let _v35 = (0, _v1.useCallback)(() => {
        _v24(), _v20();
      }, [_v20, _v24]),
      _v36 = (0, _v1.useCallback)(() => {
        _v24(), _v21();
      }, [_v24, _v21]),
      _v37 = (0, _v1.useCallback)(() => {
        var _v0, _v1;
        let _v2 = _v24(_v16.current),
          _v3 = null == (_v0 = _v16.current) ? void 0 : _v0.contains(_v2.activeElement);
        if (!(_v23 && !_v3)) return;
        let _v4 = null == (_v1 = _v18.item(_v28)) ? void 0 : _v1.node;
        null == _v4 || _v4.focus({
          preventScroll: !0
        });
      }, [_v23, _v28, _v18]),
      _v38 = (0, _v1.useRef)(null);
    return {
      openAndFocusMenu: _v33,
      openAndFocusFirstItem: _v35,
      openAndFocusLastItem: _v36,
      onTransitionEnd: _v37,
      unstable__animationState: _v30,
      descendants: _v18,
      popper: _v27,
      buttonId: _v31,
      menuId: _v32,
      forceUpdate: _v27.forceUpdate,
      orientation: "vertical",
      isOpen: _v23,
      onToggle: _v26,
      onOpen: _v24,
      onClose: _v25,
      menuRef: _v16,
      buttonRef: _v17,
      focusedIndex: _v28,
      closeOnSelect: _v2,
      closeOnBlur: _v3,
      autoSelect: _v5,
      setFocusedIndex: _v29,
      isLazy: _v6,
      lazyBehavior: _v12,
      initialFocusRef: _v4,
      rafId: _v38
    };
  }
  function _v27(_v0) {
    var _v1;
    return function (_v0) {
      var _v1, _v2;
      if (!(null != (_v2 = _v0) && "object" == typeof _v2 && "nodeType" in _v2 && _v2.nodeType === Node.ELEMENT_NODE)) return !1;
      let _v3 = null != (_v1 = _v0.ownerDocument.defaultView) ? _v1 : window;
      return _v0 instanceof _v3.HTMLElement;
    }(_v0) && !!(null == (_v1 = null == _v0 ? void 0 : _v0.getAttribute("role")) ? void 0 : _v1.startsWith("menuitem"));
  }
  function _v28(_v0 = {}, _v1 = null) {
    let {
        onMouseEnter: _v2,
        onMouseMove: _v3,
        onMouseLeave: _v4,
        onClick: _v5,
        onFocus: _v6,
        isDisabled: _v7,
        isFocusable: _v8,
        closeOnSelect: _v9,
        type: _v10,
        ..._v11
      } = _v0,
      {
        setFocusedIndex: _v12,
        focusedIndex: _v13,
        closeOnSelect: _v14,
        onClose: _v15,
        menuRef: _v16,
        isOpen: _v17,
        menuId: _v18,
        rafId: _v19
      } = _v23(),
      _v20 = (0, _v1.useRef)(null),
      _v21 = `${_v18}-menuitem-${(0, _v1.useId)()}`,
      {
        index: _v22,
        register: _v23
      } = _v21({
        disabled: _v7 && !_v8
      }),
      _v24 = (0, _v1.useCallback)(_v0 => {
        null == _v2 || _v2(_v0), _v7 || _v12(_v22);
      }, [_v12, _v22, _v7, _v2]),
      _v25 = (0, _v1.useCallback)(_v0 => {
        null == _v3 || _v3(_v0), _v20.current && !_v25(_v20.current) && _v24(_v0);
      }, [_v24, _v3]),
      _v26 = (0, _v1.useCallback)(_v0 => {
        null == _v4 || _v4(_v0), _v7 || _v12(-1);
      }, [_v12, _v7, _v4]),
      _v27 = (0, _v1.useCallback)(_v0 => {
        null == _v5 || _v5(_v0), _v27(_v0.currentTarget) && (null != _v9 ? _v9 : _v14) && _v15();
      }, [_v15, _v5, _v14, _v9]),
      _v28 = (0, _v1.useCallback)(_v0 => {
        null == _v6 || _v6(_v0), _v12(_v22);
      }, [_v12, _v6, _v22]),
      _v29 = _v22 === _v13,
      _v30 = _v7 && !_v8;
    (0, _v14.useUpdateEffect)(() => {
      if (_v17) return _v29 && !_v30 && _v20.current ? (_v19.current && cancelAnimationFrame(_v19.current), _v19.current = requestAnimationFrame(() => {
        var _v0;
        null == (_v0 = _v20.current) || _v0.focus({
          preventScroll: !0
        }), _v19.current = null;
      })) : _v16.current && !_v25(_v16.current) && _v16.current.focus({
        preventScroll: !0
      }), () => {
        _v19.current && cancelAnimationFrame(_v19.current);
      };
    }, [_v29, _v30, _v16, _v17]);
    let _v31 = (0, _v2.useClickable)({
      onClick: _v27,
      onFocus: _v28,
      onMouseEnter: _v24,
      onMouseMove: _v25,
      onMouseLeave: _v26,
      ref: (0, _v15.mergeRefs)(_v23, _v20, _v1),
      isDisabled: _v7,
      isFocusable: _v8
    });
    return {
      ..._v11,
      ..._v31,
      type: null != _v10 ? _v10 : _v31.type,
      id: _v21,
      role: "menuitem",
      tabIndex: _v29 ? 0 : -1
    };
  }
  _v0.s(["MenuDescendantsProvider", 0, _v18, "MenuProvider", 0, _v22, "useMenu", 0, _v26, "useMenuButton", 0, function (_v0 = {}, _v1 = null) {
    let _v2 = _v23(),
      {
        onToggle: _v3,
        popper: _v4,
        openAndFocusFirstItem: _v5,
        openAndFocusLastItem: _v6
      } = _v2,
      _v7 = (0, _v1.useCallback)(_v0 => {
        let _v1 = {
          Enter: _v5,
          ArrowDown: _v5,
          ArrowUp: _v6
        }[_v0.key];
        _v1 && (_v0.preventDefault(), _v0.stopPropagation(), _v1(_v0));
      }, [_v5, _v6]);
    return {
      ..._v0,
      ref: (0, _v15.mergeRefs)(_v2.buttonRef, _v1, _v4.referenceRef),
      id: _v2.buttonId,
      "data-active": (0, _v16.dataAttr)(_v2.isOpen),
      "aria-expanded": _v2.isOpen,
      "aria-haspopup": "menu",
      "aria-controls": _v2.menuId,
      onClick: (0, _v16.callAllHandlers)(_v0.onClick, _v3),
      onKeyDown: (0, _v16.callAllHandlers)(_v0.onKeyDown, _v7)
    };
  }, "useMenuContext", 0, _v23, "useMenuItem", 0, _v28, "useMenuList", 0, function (_v0 = {}, _v1 = null) {
    let _v2 = _v23();
    if (!_v2) throw Error("useMenuContext: context is undefined. Seems you forgot to wrap component within <Menu>");
    let {
        focusedIndex: _v3,
        setFocusedIndex: _v4,
        menuRef: _v5,
        isOpen: _v6,
        onClose: _v7,
        menuId: _v8,
        isLazy: _v9,
        lazyBehavior: _v10,
        unstable__animationState: _v11
      } = _v2,
      _v12 = _v19(),
      _v13 = function (_v0 = {}) {
        let {
            timeout: _v1 = 300,
            preventDefault: _v2 = () => !0
          } = _v0,
          [_v3, _v4] = (0, _v1.useState)([]),
          _v5 = (0, _v1.useRef)(),
          _v6 = () => {
            _v5.current && (clearTimeout(_v5.current), _v5.current = null);
          };
        return (0, _v1.useEffect)(() => _v6, []), function (_v0) {
          return _v0 => {
            if ("Backspace" === _v0.key) {
              let _v0 = [..._v3];
              _v0.pop(), _v4(_v0);
              return;
            }
            if (function (_v0) {
              let {
                key: _v1
              } = _v0;
              return 1 === _v1.length || _v1.length > 1 && /[^a-zA-Z0-9]/.test(_v1);
            }(_v0)) {
              let _v0 = _v3.concat(_v0.key);
              _v2(_v0) && (_v0.preventDefault(), _v0.stopPropagation()), _v4(_v0), _v0(_v0.join("")), _v6(), _v5.current = setTimeout(() => {
                _v4([]), _v5.current = null;
              }, _v1);
            }
          };
        };
      }({
        preventDefault: _v0 => " " !== _v0.key && _v27(_v0.target)
      }),
      _v14 = (0, _v1.useCallback)(_v0 => {
        if (!_v0.currentTarget.contains(_v0.target)) return;
        let _v1 = {
          Tab: _v0 => _v0.preventDefault(),
          Escape: _v7,
          ArrowDown: () => {
            let _v0 = _v12.nextEnabled(_v3);
            _v0 && _v4(_v0.index);
          },
          ArrowUp: () => {
            let _v0 = _v12.prevEnabled(_v3);
            _v0 && _v4(_v0.index);
          }
        }[_v0.key];
        if (_v1) {
          _v0.preventDefault(), _v1(_v0);
          return;
        }
        let _v2 = _v13(_v0 => {
          let _v1 = function (_v0, _v1, _v2, _v3) {
            if (null == _v1) return _v3;
            if (!_v3) return _v0.find(_v0 => _v2(_v0).toLowerCase().startsWith(_v1.toLowerCase()));
            let _v4 = _v0.filter(_v0 => _v2(_v0).toLowerCase().startsWith(_v1.toLowerCase()));
            if (_v4.length > 0) {
              let _v0;
              return _v4.includes(_v3) ? ((_v0 = _v4.indexOf(_v3) + 1) === _v4.length && (_v0 = 0), _v4[_v0]) : (_v0 = _v0.indexOf(_v4[0]), _v0[_v0]);
            }
            return _v3;
          }(_v12.values(), _v0, _v0 => {
            var _v1, _v2;
            return null != (_v2 = null == (_v1 = null == _v0 ? void 0 : _v0.node) ? void 0 : _v1.textContent) ? _v2 : "";
          }, _v12.item(_v3));
          _v1 && _v4(_v12.indexOf(_v1.node));
        });
        _v27(_v0.target) && _v2(_v0);
      }, [_v12, _v3, _v13, _v7, _v4]),
      _v15 = (0, _v1.useRef)(!1);
    _v6 && (_v15.current = !0);
    let _v16 = (0, _v17.lazyDisclosure)({
      wasSelected: _v15.current,
      enabled: _v9,
      mode: _v10,
      isSelected: _v11.present
    });
    return {
      ..._v0,
      ref: (0, _v15.mergeRefs)(_v5, _v1),
      children: _v16 ? _v0.children : null,
      tabIndex: -1,
      role: "menu",
      id: _v8,
      style: {
        ..._v0.style,
        transformOrigin: "var(--popper-transform-origin)"
      },
      "aria-orientation": "vertical",
      onKeyDown: (0, _v16.callAllHandlers)(_v0.onKeyDown, _v14)
    };
  }, "useMenuOption", 0, function (_v0 = {}, _v1 = null) {
    let {
      type: _v2 = "radio",
      isChecked: _v3,
      ..._v4
    } = _v0;
    return {
      ..._v28(_v4, _v1),
      role: `menuitem${_v2}`,
      "aria-checked": _v3
    };
  }, "useMenuOptionGroup", 0, function (_v0 = {}) {
    let {
        children: _v1,
        type: _v2 = "radio",
        value: _v3,
        defaultValue: _v4,
        onChange: _v5,
        ..._v6
      } = _v0,
      _v7 = "radio" === _v2,
      [_v8, _v9] = (0, _v13.useControllableState)({
        defaultValue: null != _v4 ? _v4 : _v7 ? "" : [],
        value: _v3,
        onChange: _v5
      }),
      _v10 = (0, _v1.useCallback)(_v0 => {
        "radio" === _v2 && "string" == typeof _v8 && _v9(_v0), "checkbox" === _v2 && Array.isArray(_v8) && _v9(_v8.includes(_v0) ? _v8.filter(_v0 => _v0 !== _v0) : _v8.concat(_v0));
      }, [_v8, _v9, _v2]),
      _v11 = (0, _v12.getValidChildren)(_v1).map(_v0 => {
        if ("MenuItemOption" !== _v0.type.id) return _v0;
        let _v1 = "radio" === _v2 ? _v0.props.value === _v8 : _v8.includes(_v0.props.value);
        return (0, _v1.cloneElement)(_v0, {
          type: _v2,
          onClick: _v0 => {
            var _v1, _v2;
            _v10(_v0.props.value), null == (_v2 = (_v1 = _v0.props).onClick) || _v2.call(_v1, _v0);
          },
          isChecked: _v1
        });
      });
    return {
      ..._v6,
      children: _v11
    };
  }, "useMenuPositioner", 0, function (_v0 = {}) {
    let {
      popper: _v1,
      isOpen: _v2
    } = _v23();
    return _v1.getPopperProps({
      ..._v0,
      style: {
        visibility: _v2 ? "visible" : "hidden",
        ..._v0.style
      }
    });
  }], 0);
  var _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    [_v33, _v34] = (0, _v11.createContext)({
      name: "MenuStylesContext",
      errorMessage: "useMenuStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Menu />\" "
    }),
    _v35 = _v0 => {
      let {
          children: _v1
        } = _v0,
        _v2 = (0, _v30.useMultiStyleConfig)("Menu", _v0),
        _v3 = (0, _v29.omitThemingProps)(_v0),
        {
          direction: _v4
        } = (0, _v31.useTheme)(),
        {
          descendants: _v5,
          ..._v6
        } = _v26({
          ..._v3,
          direction: _v4
        }),
        _v7 = (0, _v1.useMemo)(() => _v6, [_v6]),
        {
          isOpen: _v8,
          onClose: _v9,
          forceUpdate: _v10
        } = _v7;
      return (0, _v32.jsx)(_v18, {
        value: _v5,
        children: (0, _v32.jsx)(_v22, {
          value: _v7,
          children: (0, _v32.jsx)(_v33, {
            value: _v2,
            children: (0, _v16.runIfFn)(_v1, {
              isOpen: _v8,
              onClose: _v9,
              forceUpdate: _v10
            })
          })
        })
      });
    };
  _v35.displayName = "Menu", _v0.s(["Menu", 0, _v35, "useMenuStyles", 0, _v34], 0);
  var _v36 = _v0.i(0),
    _v37 = (0, _v0.i(0).forwardRef)((_v0, _v1) => {
      let {
          type: _v2,
          ..._v3
        } = _v0,
        _v4 = _v34(),
        _v5 = _v3.as || _v2 ? null != _v2 ? _v2 : void 0 : "button",
        _v6 = (0, _v1.useMemo)(() => ({
          textDecoration: "none",
          color: "inherit",
          userSelect: "none",
          display: "flex",
          width: "100%",
          alignItems: "center",
          textAlign: "start",
          flex: "0 0 auto",
          outline: 0,
          ..._v4.item
        }), [_v4.item]);
      return (0, _v32.jsx)(_v36.chakra.button, {
        ref: _v1,
        type: _v5,
        ..._v3,
        __css: _v6
      });
    });
  _v0.s(["StyledMenuItem", 0, _v37], 0);
  var _v38 = _v0 => {
    let {
        className: _v1,
        children: _v2,
        ..._v3
      } = _v0,
      _v4 = _v34(),
      _v5 = _v1.Children.only(_v2),
      _v6 = (0, _v1.isValidElement)(_v5) ? (0, _v1.cloneElement)(_v5, {
        focusable: "false",
        "aria-hidden": !0,
        className: (0, _v16.cx)("chakra-menu__icon", _v5.props.className)
      }) : null,
      _v7 = (0, _v16.cx)("chakra-menu__icon-wrapper", _v1);
    return (0, _v32.jsx)(_v36.chakra.span, {
      className: _v7,
      ..._v3,
      __css: _v4.icon,
      children: _v6
    });
  };
  _v38.displayName = "MenuIcon", _v0.s(["MenuIcon", 0, _v38], 0);
}