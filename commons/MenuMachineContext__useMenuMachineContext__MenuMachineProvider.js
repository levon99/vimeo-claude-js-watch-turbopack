{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.i(0);
  var _v2 = _v0.i(0),
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
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0);
  let [_v28, _v29] = (0, _v27.createContext)({
      name: "MenuMachineContext",
      hookName: "useMenuMachineContext",
      providerName: "<MenuMachineProvider />",
      strict: !1
    }),
    [_v30, _v31] = (0, _v27.createContext)({
      name: "MenuMachineContext",
      hookName: "useMenuMachineContext",
      providerName: "<MenuMachineProvider />",
      strict: !1
    });
  var _v32 = _v0.i(0);
  let _v33 = (0, _v19.forwardRef)((_v0, _v1) => {
    let _v2 = (0, _v26.useMenuContext)(),
      _v3 = (0, _v18.mergeProps)(_v2.getSeparatorProps(), _v0);
    return (0, _v1.jsx)(_v32.ark.hr, {
      ..._v3,
      ref: _v1
    });
  });
  _v33.displayName = "MenuSeparator";
  let _v34 = (0, _v19.forwardRef)((_v0, _v1) => {
    let _v2 = (0, _v26.useMenuContext)(),
      _v3 = (0, _v24.usePresenceContext)(),
      _v4 = (0, _v18.mergeProps)({
        ..._v2.getTriggerProps(),
        "aria-controls": _v3.unmounted ? void 0 : _v2.getTriggerProps()["aria-controls"]
      }, _v0);
    return (0, _v1.jsx)(_v32.ark.button, {
      ..._v4,
      ref: _v1
    });
  });
  _v34.displayName = "MenuTrigger";
  let _v35 = (0, _v19.forwardRef)((_v0, _v1) => {
    let _v2 = _v31(),
      _v3 = (0, _v18.mergeProps)(_v2?.() ?? {}, _v0);
    return (0, _v1.jsx)(_v32.ark.div, {
      ..._v3,
      ref: _v1
    });
  });
  _v35.displayName = "MenuTriggerItem", _v0.s(["Arrow", () => _v2.MenuArrow, "ArrowTip", () => _v3.MenuArrowTip, "CheckboxItem", () => _v4.MenuCheckboxItem, "Content", () => _v5.MenuContent, "Context", () => _v6.MenuContext, "ContextTrigger", () => _v7.MenuContextTrigger, "Indicator", () => _v8.MenuIndicator, "Item", () => _v9.MenuItem, "ItemContext", () => _v10.MenuItemContext, "ItemGroup", () => _v11.MenuItemGroup, "ItemGroupLabel", () => _v12.MenuItemGroupLabel, "ItemIndicator", () => _v13.MenuItemIndicator, "ItemText", () => _v14.MenuItemText, "Positioner", () => _v15.MenuPositioner, "RadioItem", () => _v16.MenuRadioItem, "RadioItemGroup", () => _v17.MenuRadioItemGroup, "Root", 0, _v0 => {
    let [_v1, _v2] = (0, _v22.splitPresenceProps)(_v0),
      [_v3, _v4] = (0, _v20.createSplitProps)()(_v2, ["anchorPoint", "aria-label", "closeOnSelect", "composite", "defaultHighlightedValue", "defaultOpen", "highlightedValue", "id", "ids", "loopFocus", "navigate", "onEscapeKeyDown", "onFocusOutside", "onHighlightChange", "onInteractOutside", "onOpenChange", "onPointerDownOutside", "onSelect", "open", "positioning", "typeahead"]),
      _v5 = (0, _v26.useMenuContext)(),
      _v6 = _v29(),
      {
        api: _v7,
        service: _v8
      } = (0, _v25.useMenu)(_v3),
      _v9 = (0, _v23.usePresence)((0, _v18.mergeProps)({
        present: _v7.open
      }, _v1));
    (0, _v21.useEffectOnce)(() => {
      !_v6 || _v5 && (_v5.setChild(_v8), _v7.setParent(_v6));
    });
    let _v10 = (0, _v19.useCallback)(() => _v5?.getTriggerItemProps(_v7), [_v7, _v5]);
    return (0, _v1.jsx)(_v30, {
      value: _v10,
      children: (0, _v1.jsx)(_v28, {
        value: _v8,
        children: (0, _v1.jsx)(_v26.MenuProvider, {
          value: _v7,
          children: (0, _v1.jsx)(_v24.PresenceProvider, {
            value: _v9,
            ..._v4
          })
        })
      })
    });
  }, "RootProvider", 0, _v0 => {
    let _v1 = (0, _v26.useMenuContext)(),
      _v2 = _v29(),
      [_v3, {
        value: _v4,
        children: _v5
      }] = (0, _v22.splitPresenceProps)(_v0),
      {
        api: _v6,
        service: _v7
      } = _v4,
      _v8 = (0, _v23.usePresence)((0, _v18.mergeProps)({
        present: _v6.open
      }, _v3));
    (0, _v21.useEffectOnce)(() => {
      !_v2 || _v1 && (_v1.setChild(_v7), _v6.setParent(_v2));
    });
    let _v9 = (0, _v19.useCallback)(() => _v1?.getTriggerItemProps(_v6), [_v6, _v1]);
    return (0, _v1.jsx)(_v30, {
      value: _v9,
      children: (0, _v1.jsx)(_v28, {
        value: _v7,
        children: (0, _v1.jsx)(_v26.MenuProvider, {
          value: _v6,
          children: (0, _v1.jsx)(_v24.PresenceProvider, {
            value: _v8,
            children: _v5
          })
        })
      })
    });
  }, "Separator", 0, _v33, "Trigger", 0, _v34, "TriggerItem", 0, _v35], 0);
  var _v36 = _v0.i(0),
    _v36 = _v36,
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0);
  let {
      Positioner: _v42,
      ContextTrigger: _v43,
      RootProvider: _v44
    } = _v36,
    [_v45, _v46] = (0, _v38.createStylesContext)("Menu");
  _v0.s(["NestedMenu", 0, ({
    children: _v0,
    ..._v1
  }) => {
    let _v2 = (0, _v37.useMultiStyleConfig)("Menu", {});
    return (0, _v1.jsx)(_v45, {
      value: _v2,
      children: (0, _v1.jsx)(_v36.Root, {
        ..._v1,
        children: _v0
      })
    });
  }, "NestedMenuContent", 0, ({
    children: _v0,
    ..._v1
  }) => (0, _v1.jsx)(_v36.Content, {
    ..._v1,
    asChild: !0,
    children: (0, _v1.jsx)(_v39.Box, {
      __css: _v46().list,
      children: _v0
    })
  }), "NestedMenuContextTrigger", 0, _v43, "NestedMenuDivider", 0, ({
    ..._v0
  }) => (0, _v1.jsx)(_v36.Separator, {
    ..._v0,
    asChild: !0,
    children: (0, _v1.jsx)(_v39.Box, {
      as: "hr",
      __css: _v46().divider
    })
  }), "NestedMenuItem", 0, ({
    children: _v0,
    ..._v1
  }) => (0, _v1.jsx)(_v36.Item, {
    ..._v1,
    asChild: !0,
    children: (0, _v1.jsx)(_v39.Box, {
      __css: _v46().item,
      children: _v0
    })
  }), "NestedMenuItemGroup", 0, ({
    children: _v0,
    ..._v1
  }) => (0, _v1.jsx)(_v36.ItemGroup, {
    ..._v1,
    asChild: !0,
    children: (0, _v1.jsx)(_v39.Box, {
      children: _v0
    })
  }), "NestedMenuItemGroupLabel", 0, ({
    children: _v0,
    ..._v1
  }) => (0, _v1.jsx)(_v36.ItemGroupLabel, {
    ..._v1,
    asChild: !0,
    children: (0, _v1.jsx)(_v39.Box, {
      __css: _v46().groupTitle,
      children: _v0
    })
  }), "NestedMenuItemLink", 0, ({
    children: _v0,
    ..._v1
  }) => {
    let {
        item: _v2
      } = _v46(),
      {
        value: _v3,
        closeOnSelect: _v4,
        disabled: _v5,
        onSelect: _v6,
        valueText: _v7,
        ..._v8
      } = _v1;
    return (0, _v1.jsx)(_v36.Item, {
      ...{
        value: _v3,
        closeOnSelect: _v4,
        disabled: _v5,
        onSelect: _v6,
        valueText: _v7
      },
      asChild: !0,
      children: _v19.default.isValidElement(_v0) && ("a" === _v0.type || _v0.type?.displayName === "Link") ? _v19.default.cloneElement(_v0, {
        sx: {
          ..._v2
        },
        ..._v8
      }) : _v0
    });
  }, "NestedMenuPositioner", 0, _v42, "NestedMenuRootProvider", 0, _v44, "NestedMenuTrigger", 0, ({
    children: _v0,
    icon: _v1,
    ..._v2
  }) => (0, _v1.jsx)(_v36.Trigger, {
    asChild: !0,
    children: _v1 ? (0, _v1.jsx)(_v40.IconButton, {
      icon: _v1,
      ..._v2
    }) : (0, _v1.jsx)(_v41.Button, {
      ..._v2,
      children: _v0
    })
  }), "NestedMenuTriggerItem", 0, ({
    children: _v0,
    ..._v1
  }) => (0, _v1.jsx)(_v36.TriggerItem, {
    ..._v1,
    asChild: !0,
    children: (0, _v1.jsx)(_v39.Box, {
      __css: _v46().item,
      children: _v0
    })
  })], 0);
}