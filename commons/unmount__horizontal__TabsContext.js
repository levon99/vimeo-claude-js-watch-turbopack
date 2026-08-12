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
    [_v11, _v12, _v13, _v14] = (0, _v2.createDescendantContext)();
  function _v15(_v0) {
    var _v1;
    let {
        defaultIndex: _v2,
        onChange: _v3,
        index: _v4,
        isManual: _v5,
        isLazy: _v6,
        lazyBehavior: _v7 = "unmount",
        orientation: _v8 = "horizontal",
        direction: _v9 = "ltr",
        ..._v10
      } = _v0,
      [_v11, _v12] = (0, _v10.useState)(null != _v2 ? _v2 : 0),
      [_v13, _v14] = (0, _v5.useControllableState)({
        defaultValue: null != _v2 ? _v2 : 0,
        value: _v4,
        onChange: _v3
      });
    (0, _v10.useEffect)(() => {
      null != _v4 && _v12(_v4);
    }, [_v4]);
    let _v15 = _v13(),
      _v16 = (0, _v10.useId)(),
      _v17 = null != (_v1 = _v0.id) ? _v1 : _v16;
    return {
      id: `tabs-${_v17}`,
      selectedIndex: _v13,
      focusedIndex: _v11,
      setSelectedIndex: _v14,
      setFocusedIndex: _v12,
      isManual: _v5,
      isLazy: _v6,
      lazyBehavior: _v7,
      orientation: _v8,
      descendants: _v15,
      direction: _v9,
      htmlProps: _v10
    };
  }
  var [_v16, _v17] = (0, _v3.createContext)({
      name: "TabsContext",
      errorMessage: "useTabsContext: `context` is undefined. Seems you forgot to wrap all tabs components within <Tabs />"
    }),
    [_v18, _v19] = (0, _v3.createContext)({});
  function _v20(_v0, _v1) {
    return `${_v0}--tab-${_v1}`;
  }
  function _v21(_v0, _v1) {
    return `${_v0}--tabpanel-${_v1}`;
  }
  _v0.s(["TabsDescendantsProvider", 0, _v11, "TabsProvider", 0, _v16, "useTab", 0, function (_v0) {
    let {
        isDisabled: _v1 = !1,
        isFocusable: _v2 = !1,
        ..._v3
      } = _v0,
      {
        setSelectedIndex: _v4,
        isManual: _v5,
        id: _v6,
        setFocusedIndex: _v7,
        selectedIndex: _v8
      } = _v17(),
      {
        index: _v9,
        register: _v10
      } = _v14({
        disabled: _v1 && !_v2
      }),
      _v11 = _v9 === _v8;
    return {
      ...(0, _v1.useClickable)({
        ..._v3,
        ref: (0, _v7.mergeRefs)(_v10, _v0.ref),
        isDisabled: _v1,
        isFocusable: _v2,
        onClick: (0, _v9.callAllHandlers)(_v0.onClick, () => {
          _v4(_v9);
        })
      }),
      id: _v20(_v6, _v9),
      role: "tab",
      tabIndex: _v11 ? 0 : -1,
      type: "button",
      "aria-selected": _v11,
      "aria-controls": _v21(_v6, _v9),
      onFocus: _v1 ? void 0 : (0, _v9.callAllHandlers)(_v0.onFocus, () => {
        _v7(_v9);
        let _v0 = _v1 && _v2;
        _v5 || _v0 || _v4(_v9);
      })
    };
  }, "useTabIndicator", 0, function () {
    let _v0 = _v17(),
      _v1 = _v12(),
      {
        selectedIndex: _v2,
        orientation: _v3
      } = _v0,
      _v4 = "horizontal" === _v3,
      _v5 = "vertical" === _v3,
      [_v6, _v7] = (0, _v10.useState)(() => _v4 ? {
        left: 0,
        width: 0
      } : _v5 ? {
        top: 0,
        height: 0
      } : void 0),
      [_v8, _v9] = (0, _v10.useState)(!1);
    return (0, _v4.useSafeLayoutEffect)(() => {
      if (null == _v2) return;
      let _v0 = _v1.item(_v2);
      if (null == _v0) return;
      _v4 && _v7({
        left: _v0.node.offsetLeft,
        width: _v0.node.offsetWidth
      }), _v5 && _v7({
        top: _v0.node.offsetTop,
        height: _v0.node.offsetHeight
      });
      let _v1 = requestAnimationFrame(() => {
        _v9(!0);
      });
      return () => {
        _v1 && cancelAnimationFrame(_v1);
      };
    }, [_v2, _v4, _v5, _v1]), {
      position: "absolute",
      transitionProperty: "left, right, top, bottom, height, width",
      transitionDuration: _v8 ? "200ms" : "0ms",
      transitionTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
      ..._v6
    };
  }, "useTabList", 0, function (_v0) {
    let {
        focusedIndex: _v1,
        orientation: _v2,
        direction: _v3
      } = _v17(),
      _v4 = _v12(),
      _v5 = (0, _v10.useCallback)(_v0 => {
        let _v1 = () => {
            var _v0;
            let _v1 = _v4.nextEnabled(_v1);
            _v1 && (null == (_v0 = _v1.node) || _v0.focus());
          },
          _v2 = () => {
            var _v0;
            let _v1 = _v4.prevEnabled(_v1);
            _v1 && (null == (_v0 = _v1.node) || _v0.focus());
          },
          _v3 = "horizontal" === _v2,
          _v4 = "vertical" === _v2,
          _v5 = {
            ["ltr" === _v3 ? "ArrowLeft" : "ArrowRight"]: () => _v3 && _v2(),
            ["ltr" === _v3 ? "ArrowRight" : "ArrowLeft"]: () => _v3 && _v1(),
            ArrowDown: () => _v4 && _v1(),
            ArrowUp: () => _v4 && _v2(),
            Home: () => {
              var _v0;
              let _v1 = _v4.firstEnabled();
              _v1 && (null == (_v0 = _v1.node) || _v0.focus());
            },
            End: () => {
              var _v0;
              let _v1 = _v4.lastEnabled();
              _v1 && (null == (_v0 = _v1.node) || _v0.focus());
            }
          }[_v0.key];
        _v5 && (_v0.preventDefault(), _v5(_v0));
      }, [_v4, _v1, _v2, _v3]);
    return {
      ..._v0,
      role: "tablist",
      "aria-orientation": _v2,
      onKeyDown: (0, _v9.callAllHandlers)(_v0.onKeyDown, _v5)
    };
  }, "useTabPanel", 0, function (_v0) {
    let {
        children: _v1,
        ..._v2
      } = _v0,
      {
        isLazy: _v3,
        lazyBehavior: _v4
      } = _v17(),
      {
        isSelected: _v5,
        id: _v6,
        tabId: _v7
      } = _v19(),
      _v8 = (0, _v10.useRef)(!1);
    _v5 && (_v8.current = !0);
    let _v9 = (0, _v8.lazyDisclosure)({
      wasSelected: _v8.current,
      isSelected: _v5,
      enabled: _v3,
      mode: _v4
    });
    return {
      tabIndex: 0,
      ..._v2,
      children: _v9 ? _v1 : null,
      role: "tabpanel",
      "aria-labelledby": _v7,
      hidden: !_v5,
      id: _v6
    };
  }, "useTabPanels", 0, function (_v0) {
    let {
        id: _v1,
        selectedIndex: _v2
      } = _v17(),
      _v3 = (0, _v6.getValidChildren)(_v0.children).map((_v0, _v1) => (0, _v10.createElement)(_v18, {
        key: _v1,
        value: {
          isSelected: _v1 === _v2,
          id: _v21(_v1, _v1),
          tabId: _v20(_v1, _v1),
          selectedIndex: _v2
        }
      }, _v0));
    return {
      ..._v0,
      children: _v3
    };
  }, "useTabs", 0, _v15], 0);
  var _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    [_v27, _v28] = (0, _v3.createContext)({
      name: "TabsStylesContext",
      errorMessage: "useTabsStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Tabs />\" "
    }),
    _v29 = (0, _v23.forwardRef)(function (_v0, _v1) {
      let _v2 = (0, _v25.useMultiStyleConfig)("Tabs", _v0),
        {
          children: _v3,
          className: _v4,
          ..._v5
        } = (0, _v24.omitThemingProps)(_v0),
        {
          htmlProps: _v6,
          descendants: _v7,
          ..._v8
        } = _v15(_v5),
        _v9 = (0, _v10.useMemo)(() => _v8, [_v8]),
        {
          isFitted: _v10,
          ..._v11
        } = _v6,
        _v12 = {
          position: "relative",
          ..._v2.root
        };
      return (0, _v26.jsx)(_v11, {
        value: _v7,
        children: (0, _v26.jsx)(_v16, {
          value: _v9,
          children: (0, _v26.jsx)(_v27, {
            value: _v2,
            children: (0, _v26.jsx)(_v22.chakra.div, {
              className: (0, _v9.cx)("chakra-tabs", _v4),
              ref: _v1,
              ..._v11,
              __css: _v12,
              children: _v3
            })
          })
        })
      });
    });
  _v29.displayName = "Tabs", _v0.s(["Tabs", 0, _v29, "useTabsStyles", 0, _v28], 0);
}