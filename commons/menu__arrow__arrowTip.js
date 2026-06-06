{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = (_v0, _v1) => ({
      x: _v0,
      y: _v1
    }),
    {
      min: _v8,
      max: _v9
    } = Math,
    {
      sign: _v10,
      abs: _v11,
      min: _v12
    } = Math,
    _v13 = _v0.i(0),
    _v14 = (0, _v1.createAnatomy)("menu").parts("arrow", "arrowTip", "content", "contextTrigger", "indicator", "item", "itemGroup", "itemGroupLabel", "itemIndicator", "itemText", "positioner", "separator", "trigger", "triggerItem").build(),
    _v15 = _v0 => _v0.ids?.trigger ?? `menu:${_v0.id}:trigger`,
    _v16 = _v0 => _v0.ids?.contextTrigger ?? `menu:${_v0.id}:ctx-trigger`,
    _v17 = _v0 => _v0.ids?.content ?? `menu:${_v0.id}:content`,
    _v18 = _v0 => _v0.ids?.positioner ?? `menu:${_v0.id}:popper`,
    _v19 = (_v0, _v1) => `${_v0.id}/${_v1}`,
    _v20 = _v0 => _v0?.dataset.value ?? null,
    _v21 = (_v0, _v1) => _v0.ids?.groupLabel?.(_v1) ?? `menu:${_v0.id}:group-label:${_v1}`,
    _v22 = _v0 => _v0.getById(_v17(_v0)),
    _v23 = _v0 => _v0.getById(_v18(_v0)),
    _v24 = _v0 => _v0.getById(_v15(_v0)),
    _v25 = (_v0, _v1) => _v1 ? _v0.getById(_v19(_v0, _v1)) : null,
    _v26 = _v0 => _v0.getById(_v16(_v0)),
    _v27 = _v0 => {
      let _v1 = CSS.escape(_v17(_v0)),
        _v2 = `[role^="menuitem"][data-ownedby=${_v1}]:not([data-disabled])`;
      return (0, _v3.queryAll)(_v22(_v0), _v2);
    },
    _v28 = (_v0, _v1) => !!_v1 && (_v0.id === _v1 || _v0.dataset.value === _v1),
    _v29 = _v0 => (0, _v3.isHTMLElement)(_v0) && ("" === _v0.dataset.disabled || _v0.hasAttribute("disabled")),
    _v30 = "menu:select",
    {
      not: _v31,
      and: _v32,
      or: _v33
    } = (0, _v2.createGuards)(),
    _v34 = (0, _v2.createMachine)({
      props: ({
        props: _v0
      }) => ({
        closeOnSelect: !0,
        typeahead: !0,
        composite: !0,
        loopFocus: !1,
        navigate(_v0) {
          (0, _v3.clickIfLink)(_v0.node);
        },
        ..._v0,
        positioning: {
          placement: "bottom-start",
          gutter: 8,
          ..._v0.positioning
        }
      }),
      initialState: ({
        prop: _v0
      }) => _v0("open") || _v0("defaultOpen") ? "open" : "idle",
      context: ({
        bindable: _v0,
        prop: _v1
      }) => ({
        suspendPointer: _v0(() => ({
          defaultValue: !1
        })),
        highlightedValue: _v0(() => ({
          defaultValue: _v1("defaultHighlightedValue") || null,
          value: _v1("highlightedValue"),
          onChange(_v0) {
            _v1("onHighlightChange")?.({
              highlightedValue: _v0
            });
          }
        })),
        lastHighlightedValue: _v0(() => ({
          defaultValue: null
        })),
        currentPlacement: _v0(() => ({
          defaultValue: void 0
        })),
        intentPolygon: _v0(() => ({
          defaultValue: null
        })),
        anchorPoint: _v0(() => ({
          defaultValue: null,
          hash: _v0 => `x: ${_v0?.x}, y: ${_v0?.y}`
        }))
      }),
      refs: () => ({
        parent: null,
        children: {},
        typeaheadState: {
          ..._v3.getByTypeahead.defaultOptions
        },
        positioningOverride: {}
      }),
      computed: {
        isSubmenu: ({
          refs: _v0
        }) => null != _v0.get("parent"),
        isRtl: ({
          prop: _v0
        }) => "rtl" === _v0("dir"),
        isTypingAhead: ({
          refs: _v0
        }) => "" !== _v0.get("typeaheadState").keysSoFar,
        highlightedId: ({
          context: _v0,
          scope: _v1,
          refs: _v2
        }) => function (_v0, _v1, _v2) {
          let _v3 = Object.keys(_v0).length > 0;
          if (!_v1) return null;
          if (!_v3) return _v19(_v2, _v1);
          for (let _v0 in _v0) {
            let _v0 = _v15(_v0[_v0].scope);
            if (_v0 === _v1) return _v0;
          }
          return _v19(_v2, _v1);
        }(_v2.get("children"), _v0.get("highlightedValue"), _v1)
      },
      watch({
        track: _v0,
        action: _v1,
        context: _v2,
        computed: _v3,
        prop: _v4
      }) {
        _v0([() => _v3("isSubmenu")], () => {
          _v1(["setSubmenuPlacement"]);
        }), _v0([() => _v2.hash("anchorPoint")], () => {
          _v1(["reposition"]);
        }), _v0([() => _v4("open")], () => {
          _v1(["toggleVisibility"]);
        });
      },
      on: {
        "PARENT.SET": {
          actions: ["setParentMenu"]
        },
        "CHILD.SET": {
          actions: ["setChildMenu"]
        },
        OPEN: [{
          guard: "isOpenControlled",
          actions: ["invokeOnOpen"]
        }, {
          target: "open",
          actions: ["invokeOnOpen"]
        }],
        OPEN_AUTOFOCUS: [{
          guard: "isOpenControlled",
          actions: ["invokeOnOpen"]
        }, {
          target: "open",
          actions: ["highlightFirstItem", "invokeOnOpen"]
        }],
        CLOSE: [{
          guard: "isOpenControlled",
          actions: ["invokeOnClose"]
        }, {
          target: "closed",
          actions: ["invokeOnClose"]
        }],
        "HIGHLIGHTED.RESTORE": {
          actions: ["restoreHighlightedItem"]
        },
        "HIGHLIGHTED.SET": {
          actions: ["setHighlightedItem"]
        }
      },
      states: {
        idle: {
          tags: ["closed"],
          on: {
            "CONTROLLED.OPEN": {
              target: "open"
            },
            "CONTROLLED.CLOSE": {
              target: "closed"
            },
            CONTEXT_MENU_START: {
              target: "opening:contextmenu",
              actions: ["setAnchorPoint"]
            },
            CONTEXT_MENU: [{
              guard: "isOpenControlled",
              actions: ["setAnchorPoint", "invokeOnOpen"]
            }, {
              target: "open",
              actions: ["setAnchorPoint", "invokeOnOpen"]
            }],
            TRIGGER_CLICK: [{
              guard: "isOpenControlled",
              actions: ["invokeOnOpen"]
            }, {
              target: "open",
              actions: ["invokeOnOpen"]
            }],
            TRIGGER_FOCUS: {
              guard: _v31("isSubmenu"),
              target: "closed"
            },
            TRIGGER_POINTERMOVE: {
              guard: "isSubmenu",
              target: "opening"
            }
          }
        },
        "opening:contextmenu": {
          tags: ["closed"],
          effects: ["waitForLongPress"],
          on: {
            "CONTROLLED.OPEN": {
              target: "open"
            },
            "CONTROLLED.CLOSE": {
              target: "closed"
            },
            CONTEXT_MENU_CANCEL: [{
              guard: "isOpenControlled",
              actions: ["invokeOnClose"]
            }, {
              target: "closed",
              actions: ["invokeOnClose"]
            }],
            "LONG_PRESS.OPEN": [{
              guard: "isOpenControlled",
              actions: ["invokeOnOpen"]
            }, {
              target: "open",
              actions: ["invokeOnOpen"]
            }]
          }
        },
        opening: {
          tags: ["closed"],
          effects: ["waitForOpenDelay"],
          on: {
            "CONTROLLED.OPEN": {
              target: "open"
            },
            "CONTROLLED.CLOSE": {
              target: "closed"
            },
            BLUR: [{
              guard: "isOpenControlled",
              actions: ["invokeOnClose"]
            }, {
              target: "closed",
              actions: ["invokeOnClose"]
            }],
            TRIGGER_POINTERLEAVE: [{
              guard: "isOpenControlled",
              actions: ["invokeOnClose"]
            }, {
              target: "closed",
              actions: ["invokeOnClose"]
            }],
            "DELAY.OPEN": [{
              guard: "isOpenControlled",
              actions: ["invokeOnOpen"]
            }, {
              target: "open",
              actions: ["invokeOnOpen"]
            }]
          }
        },
        closing: {
          tags: ["open"],
          effects: ["trackPointerMove", "trackInteractOutside", "waitForCloseDelay"],
          on: {
            "CONTROLLED.OPEN": {
              target: "open"
            },
            "CONTROLLED.CLOSE": {
              target: "closed",
              actions: ["focusParentMenu", "restoreParentHighlightedItem"]
            },
            MENU_POINTERENTER: {
              target: "open",
              actions: ["clearIntentPolygon"]
            },
            POINTER_MOVED_AWAY_FROM_SUBMENU: [{
              guard: "isOpenControlled",
              actions: ["invokeOnClose"]
            }, {
              target: "closed",
              actions: ["focusParentMenu", "restoreParentHighlightedItem"]
            }],
            "DELAY.CLOSE": [{
              guard: "isOpenControlled",
              actions: ["invokeOnClose"]
            }, {
              target: "closed",
              actions: ["focusParentMenu", "restoreParentHighlightedItem", "invokeOnClose"]
            }]
          }
        },
        closed: {
          tags: ["closed"],
          entry: ["clearHighlightedItem", "focusTrigger", "resumePointer"],
          on: {
            "CONTROLLED.OPEN": [{
              guard: _v33("isOpenAutoFocusEvent", "isArrowDownEvent"),
              target: "open",
              actions: ["highlightFirstItem"]
            }, {
              guard: "isArrowUpEvent",
              target: "open",
              actions: ["highlightLastItem"]
            }, {
              target: "open"
            }],
            CONTEXT_MENU_START: {
              target: "opening:contextmenu",
              actions: ["setAnchorPoint"]
            },
            CONTEXT_MENU: [{
              guard: "isOpenControlled",
              actions: ["setAnchorPoint", "invokeOnOpen"]
            }, {
              target: "open",
              actions: ["setAnchorPoint", "invokeOnOpen"]
            }],
            TRIGGER_CLICK: [{
              guard: "isOpenControlled",
              actions: ["invokeOnOpen"]
            }, {
              target: "open",
              actions: ["invokeOnOpen"]
            }],
            TRIGGER_POINTERMOVE: {
              guard: "isTriggerItem",
              target: "opening"
            },
            TRIGGER_BLUR: {
              target: "idle"
            },
            ARROW_DOWN: [{
              guard: "isOpenControlled",
              actions: ["invokeOnOpen"]
            }, {
              target: "open",
              actions: ["highlightFirstItem", "invokeOnOpen"]
            }],
            ARROW_UP: [{
              guard: "isOpenControlled",
              actions: ["invokeOnOpen"]
            }, {
              target: "open",
              actions: ["highlightLastItem", "invokeOnOpen"]
            }]
          }
        },
        open: {
          tags: ["open"],
          effects: ["trackInteractOutside", "trackPositioning", "scrollToHighlightedItem"],
          entry: ["focusMenu", "resumePointer"],
          on: {
            "CONTROLLED.CLOSE": [{
              target: "closed",
              guard: "isArrowLeftEvent",
              actions: ["focusParentMenu"]
            }, {
              target: "closed"
            }],
            TRIGGER_CLICK: [{
              guard: _v32(_v31("isTriggerItem"), "isOpenControlled"),
              actions: ["invokeOnClose"]
            }, {
              guard: _v31("isTriggerItem"),
              target: "closed",
              actions: ["invokeOnClose"]
            }],
            CONTEXT_MENU: {
              actions: ["setAnchorPoint", "focusMenu"]
            },
            ARROW_UP: {
              actions: ["highlightPrevItem", "focusMenu"]
            },
            ARROW_DOWN: {
              actions: ["highlightNextItem", "focusMenu"]
            },
            ARROW_LEFT: [{
              guard: _v32("isSubmenu", "isOpenControlled"),
              actions: ["invokeOnClose"]
            }, {
              guard: "isSubmenu",
              target: "closed",
              actions: ["focusParentMenu", "invokeOnClose"]
            }],
            HOME: {
              actions: ["highlightFirstItem", "focusMenu"]
            },
            END: {
              actions: ["highlightLastItem", "focusMenu"]
            },
            ARROW_RIGHT: {
              guard: "isTriggerItemHighlighted",
              actions: ["openSubmenu"]
            },
            ENTER: [{
              guard: "isTriggerItemHighlighted",
              actions: ["openSubmenu"]
            }, {
              actions: ["clickHighlightedItem"]
            }],
            ITEM_POINTERMOVE: [{
              guard: _v31("isPointerSuspended"),
              actions: ["setHighlightedItem", "focusMenu"]
            }, {
              actions: ["setLastHighlightedItem"]
            }],
            ITEM_POINTERLEAVE: {
              guard: _v32(_v31("isPointerSuspended"), _v31("isTriggerItem")),
              actions: ["clearHighlightedItem"]
            },
            ITEM_CLICK: [{
              guard: _v32(_v31("isTriggerItemHighlighted"), _v31("isHighlightedItemEditable"), "closeOnSelect", "isOpenControlled"),
              actions: ["invokeOnSelect", "setOptionState", "closeRootMenu", "invokeOnClose"]
            }, {
              guard: _v32(_v31("isTriggerItemHighlighted"), _v31("isHighlightedItemEditable"), "closeOnSelect"),
              target: "closed",
              actions: ["invokeOnSelect", "setOptionState", "closeRootMenu", "invokeOnClose"]
            }, {
              guard: _v32(_v31("isTriggerItemHighlighted"), _v31("isHighlightedItemEditable")),
              actions: ["invokeOnSelect", "setOptionState"]
            }, {
              actions: ["setHighlightedItem"]
            }],
            TRIGGER_POINTERMOVE: {
              guard: "isTriggerItem",
              actions: ["setIntentPolygon"]
            },
            TRIGGER_POINTERLEAVE: {
              target: "closing"
            },
            ITEM_POINTERDOWN: {
              actions: ["setHighlightedItem"]
            },
            TYPEAHEAD: {
              actions: ["highlightMatchedItem"]
            },
            FOCUS_MENU: {
              actions: ["focusMenu"]
            },
            "POSITIONING.SET": {
              actions: ["reposition"]
            }
          }
        }
      },
      implementations: {
        guards: {
          closeOnSelect: ({
            prop: _v0,
            event: _v1
          }) => !!(_v1?.closeOnSelect ?? _v0("closeOnSelect")),
          isTriggerItem: ({
            event: _v0
          }) => {
            let _v1;
            return _v1 = _v0.target, !!_v1?.getAttribute("role")?.startsWith("menuitem") && !!_v1?.hasAttribute("aria-controls");
          },
          isTriggerItemHighlighted: ({
            event: _v0,
            scope: _v1,
            computed: _v2
          }) => {
            let _v3 = _v0.target ?? _v1.getById(_v2("highlightedId"));
            return !!_v3?.hasAttribute("aria-controls");
          },
          isSubmenu: ({
            computed: _v0
          }) => _v0("isSubmenu"),
          isPointerSuspended: ({
            context: _v0
          }) => _v0.get("suspendPointer"),
          isHighlightedItemEditable: ({
            scope: _v0,
            computed: _v1
          }) => (0, _v3.isEditableElement)(_v0.getById(_v1("highlightedId"))),
          isOpenControlled: ({
            prop: _v0
          }) => void 0 !== _v0("open"),
          isArrowLeftEvent: ({
            event: _v0
          }) => _v0.previousEvent?.type === "ARROW_LEFT",
          isArrowUpEvent: ({
            event: _v0
          }) => _v0.previousEvent?.type === "ARROW_UP",
          isArrowDownEvent: ({
            event: _v0
          }) => _v0.previousEvent?.type === "ARROW_DOWN",
          isOpenAutoFocusEvent: ({
            event: _v0
          }) => _v0.previousEvent?.type === "OPEN_AUTOFOCUS"
        },
        effects: {
          waitForOpenDelay({
            send: _v0
          }) {
            let _v1 = setTimeout(() => {
              _v0({
                type: "DELAY.OPEN"
              });
            }, 100);
            return () => clearTimeout(_v1);
          },
          waitForCloseDelay({
            send: _v0
          }) {
            let _v1 = setTimeout(() => {
              _v0({
                type: "DELAY.CLOSE"
              });
            }, 300);
            return () => clearTimeout(_v1);
          },
          waitForLongPress({
            send: _v0
          }) {
            let _v1 = setTimeout(() => {
              _v0({
                type: "LONG_PRESS.OPEN"
              });
            }, 700);
            return () => clearTimeout(_v1);
          },
          trackPositioning({
            context: _v0,
            prop: _v1,
            scope: _v2,
            refs: _v3
          }) {
            if (_v26(_v2)) return;
            let _v4 = {
              ..._v1("positioning"),
              ..._v3.get("positioningOverride")
            };
            return _v0.set("currentPlacement", _v4.placement), (0, _v4.getPlacement)(_v24(_v2), () => _v23(_v2), {
              ..._v4,
              defer: !0,
              onComplete(_v0) {
                _v0.set("currentPlacement", _v0.placement);
              }
            });
          },
          trackInteractOutside({
            refs: _v0,
            scope: _v1,
            prop: _v2,
            computed: _v3,
            send: _v4
          }) {
            let _v5 = !0;
            return (0, _v6.trackDismissableElement)(() => _v22(_v1), {
              defer: !0,
              exclude: [_v24(_v1)],
              onInteractOutside: _v2("onInteractOutside"),
              onFocusOutside: _v2("onFocusOutside"),
              onEscapeKeyDown(_v0) {
                _v2("onEscapeKeyDown")?.(_v0), _v3("isSubmenu") && _v0.preventDefault(), _v35({
                  parent: _v0.get("parent")
                });
              },
              onPointerDownOutside(_v0) {
                let _v1 = (0, _v3.getEventTarget)(_v0.detail.originalEvent);
                (0, _v3.contains)(_v26(_v1), _v1) && _v0.detail.contextmenu ? _v0.preventDefault() : (_v5 = !_v0.detail.focusable, _v2("onPointerDownOutside")?.(_v0));
              },
              onDismiss() {
                _v4({
                  type: "CLOSE",
                  src: "interact-outside",
                  restoreFocus: _v5
                });
              }
            });
          },
          trackPointerMove({
            context: _v0,
            scope: _v1,
            send: _v2,
            refs: _v3,
            flush: _v4
          }) {
            let _v5 = _v3.get("parent");
            _v4(() => {
              _v5.context.set("suspendPointer", !0);
            });
            let _v6 = _v1.getDoc();
            return (0, _v3.addDomEvent)(_v6, "pointermove", _v0 => {
              var _v1, _v2;
              _v1 = _v0.get("intentPolygon"), _v2 = {
                x: _v0.clientX,
                y: _v0.clientY
              }, _v1 && function (_v0, _v1) {
                let {
                    x: _v2,
                    y: _v3
                  } = _v1,
                  _v4 = !1;
                for (let _v0 = 0, _v1 = _v0.length - 1; _v0 < _v0.length; _v1 = _v0++) {
                  let _v0 = _v0[_v0].x,
                    _v1 = _v0[_v0].y,
                    _v2 = _v0[_v1].x,
                    _v3 = _v0[_v1].y;
                  _v1 > _v3 != _v3 > _v3 && _v2 < (_v2 - _v0) * (_v3 - _v1) / (_v3 - _v1) + _v0 && (_v4 = !_v4);
                }
                return _v4;
              }(_v1, _v2) || (_v2({
                type: "POINTER_MOVED_AWAY_FROM_SUBMENU"
              }), _v5.context.set("suspendPointer", !1));
            });
          },
          scrollToHighlightedItem({
            event: _v0,
            scope: _v1,
            computed: _v2
          }) {
            let _v3 = () => {
              if (_v0.type.startsWith("ITEM_POINTER")) return;
              let _v0 = _v1.getById(_v2("highlightedId")),
                _v1 = _v22(_v1);
              (0, _v3.scrollIntoView)(_v0, {
                rootEl: _v1,
                block: "nearest"
              });
            };
            return (0, _v3.raf)(() => _v3()), (0, _v3.observeAttributes)(() => _v22(_v1), {
              defer: !0,
              attributes: ["aria-activedescendant"],
              callback: _v3
            });
          }
        },
        actions: {
          setAnchorPoint({
            context: _v0,
            event: _v1
          }) {
            _v0.set("anchorPoint", _v1.point);
          },
          setSubmenuPlacement({
            computed: _v0,
            refs: _v1
          }) {
            if (!_v0("isSubmenu")) return;
            let _v2 = _v0("isRtl") ? "left-start" : "right-start";
            _v1.set("positioningOverride", {
              placement: _v2,
              gutter: 0
            });
          },
          reposition({
            context: _v0,
            scope: _v1,
            prop: _v2,
            event: _v3,
            refs: _v4
          }) {
            let _v5 = _v0.get("anchorPoint"),
              _v6 = {
                ..._v2("positioning"),
                ..._v4.get("positioningOverride")
              };
            (0, _v4.getPlacement)(_v24(_v1), () => _v23(_v1), {
              ..._v6,
              defer: !0,
              getAnchorRect: _v5 ? () => ({
                width: 0,
                height: 0,
                ..._v5
              }) : void 0,
              ...(_v3.options ?? {}),
              listeners: !1,
              onComplete(_v0) {
                _v0.set("currentPlacement", _v0.placement);
              }
            });
          },
          setOptionState({
            event: _v0
          }) {
            if (!_v0.option) return;
            let {
              checked: _v1,
              onCheckedChange: _v2,
              type: _v3
            } = _v0.option;
            "radio" === _v3 ? _v2?.(!0) : "checkbox" === _v3 && _v2?.(!_v1);
          },
          clickHighlightedItem({
            scope: _v0,
            computed: _v1
          }) {
            let _v2 = _v0.getById(_v1("highlightedId"));
            _v2 && !_v2.dataset.disabled && queueMicrotask(() => _v2.click());
          },
          setIntentPolygon({
            context: _v0,
            scope: _v1,
            event: _v2
          }) {
            let _v3 = _v22(_v1),
              _v4 = _v0.get("currentPlacement");
            if (!_v3 || !_v4) return;
            let _v5 = function (_v0, _v1) {
              let _v2,
                _v3,
                _v4 = function (_v0) {
                  let {
                      x: _v1,
                      y: _v2,
                      width: _v3,
                      height: _v4
                    } = _v0,
                    _v5 = _v1 + _v3 / 2,
                    _v6 = _v2 + _v4 / 2;
                  return {
                    x: _v1,
                    y: _v2,
                    width: _v3,
                    height: _v4,
                    minX: _v1,
                    minY: _v2,
                    maxX: _v1 + _v3,
                    maxY: _v2 + _v4,
                    midX: _v5,
                    midY: _v6,
                    center: _v7(_v5, _v6)
                  };
                }(_v0),
                {
                  top: _v5,
                  right: _v6,
                  left: _v7,
                  bottom: _v8
                } = (_v2 = _v7(_v4.minX, _v4.minY), _v3 = _v7(_v4.maxX, _v4.minY), {
                  top: _v2,
                  right: _v3,
                  bottom: _v7(_v4.maxX, _v4.maxY),
                  left: _v7(_v4.minX, _v4.maxY)
                }),
                [_v9] = _v1.split("-");
              return {
                top: [_v7, _v5, _v6, _v8],
                right: [_v5, _v6, _v8, _v7],
                bottom: [_v5, _v7, _v8, _v6],
                left: [_v6, _v5, _v7, _v8]
              }[_v9];
            }(_v3.getBoundingClientRect(), _v4);
            if (!_v5) return;
            let _v6 = "right" === (0, _v4.getPlacementSide)(_v4);
            _v0.set("intentPolygon", [{
              ..._v2.point,
              x: _v2.point.x + (_v6 ? -5 : 5)
            }, ..._v5]);
          },
          clearIntentPolygon({
            context: _v0
          }) {
            _v0.set("intentPolygon", null);
          },
          resumePointer({
            refs: _v0,
            flush: _v1
          }) {
            let _v2 = _v0.get("parent");
            _v2 && _v1(() => {
              _v2.context.set("suspendPointer", !1);
            });
          },
          setHighlightedItem({
            context: _v0,
            event: _v1
          }) {
            let _v2 = _v1.value || _v20(_v1.target);
            _v0.set("highlightedValue", _v2);
          },
          clearHighlightedItem({
            context: _v0
          }) {
            _v0.set("highlightedValue", null);
          },
          focusMenu({
            scope: _v0
          }) {
            (0, _v3.raf)(() => {
              let _v0 = _v22(_v0),
                _v1 = (0, _v3.getInitialFocus)({
                  root: _v0,
                  enabled: !(0, _v3.contains)(_v0, _v0.getActiveElement()),
                  filter: _v0 => !_v0.role?.startsWith("menuitem")
                });
              _v1?.focus({
                preventScroll: !0
              });
            });
          },
          highlightFirstItem({
            context: _v0,
            scope: _v1
          }) {
            (_v22(_v1) ? queueMicrotask : _v3.raf)(() => {
              let _v0 = (0, _v5.first)(_v27(_v1));
              _v0 && _v0.set("highlightedValue", _v20(_v0));
            });
          },
          highlightLastItem({
            context: _v0,
            scope: _v1
          }) {
            (_v22(_v1) ? queueMicrotask : _v3.raf)(() => {
              let _v0 = (0, _v5.last)(_v27(_v1));
              _v0 && _v0.set("highlightedValue", _v20(_v0));
            });
          },
          highlightNextItem({
            context: _v0,
            scope: _v1,
            event: _v2,
            prop: _v3
          }) {
            var _v4;
            let _v5,
              _v6,
              _v7 = (_v4 = {
                loop: _v2.loop,
                value: _v0.get("highlightedValue"),
                loopFocus: _v3("loopFocus")
              }, _v6 = (_v5 = _v27(_v1)).findIndex(_v0 => _v28(_v0, _v4.value)), (0, _v5.next)(_v5, _v6, {
                loop: _v4.loop ?? _v4.loopFocus
              }));
            _v0.set("highlightedValue", _v20(_v7));
          },
          highlightPrevItem({
            context: _v0,
            scope: _v1,
            event: _v2,
            prop: _v3
          }) {
            var _v4;
            let _v5,
              _v6,
              _v7 = (_v4 = {
                loop: _v2.loop,
                value: _v0.get("highlightedValue"),
                loopFocus: _v3("loopFocus")
              }, _v6 = (_v5 = _v27(_v1)).findIndex(_v0 => _v28(_v0, _v4.value)), (0, _v5.prev)(_v5, _v6, {
                loop: _v4.loop ?? _v4.loopFocus
              }));
            _v0.set("highlightedValue", _v20(_v7));
          },
          invokeOnSelect({
            context: _v0,
            prop: _v1,
            scope: _v2
          }) {
            let _v3 = _v0.get("highlightedValue");
            null == _v3 || (!function (_v0, _v1) {
              if (!_v0) return;
              let _v2 = new ((0, _v3.getWindow)(_v0).CustomEvent)(_v30, {
                detail: {
                  value: _v1
                }
              });
              _v0.dispatchEvent(_v2);
            }(_v25(_v2, _v3), _v3), _v1("onSelect")?.({
              value: _v3
            }));
          },
          focusTrigger({
            scope: _v0,
            context: _v1,
            event: _v2,
            computed: _v3
          }) {
            _v3("isSubmenu") || _v1.get("anchorPoint") || !1 === _v2.restoreFocus || queueMicrotask(() => _v24(_v0)?.focus({
              preventScroll: !0
            }));
          },
          highlightMatchedItem({
            scope: _v0,
            context: _v1,
            event: _v2,
            refs: _v3
          }) {
            var _v4;
            let _v5,
              _v6,
              _v7 = (_v4 = {
                key: _v2.key,
                value: _v1.get("highlightedValue"),
                typeaheadState: _v3.get("typeaheadState")
              }, _v6 = (_v5 = _v27(_v0)).find(_v0 => _v28(_v0, _v4.value)), (0, _v3.getByTypeahead)(_v5, {
                state: _v4.typeaheadState,
                key: _v4.key,
                activeId: _v6?.id ?? null
              }));
            _v7 && _v1.set("highlightedValue", _v20(_v7));
          },
          setParentMenu({
            refs: _v0,
            event: _v1
          }) {
            _v0.set("parent", _v1.value);
          },
          setChildMenu({
            refs: _v0,
            event: _v1
          }) {
            let _v2 = _v0.get("children");
            _v2[_v1.id] = _v1.value, _v0.set("children", _v2);
          },
          closeRootMenu({
            refs: _v0
          }) {
            _v35({
              parent: _v0.get("parent")
            });
          },
          openSubmenu({
            refs: _v0,
            scope: _v1,
            computed: _v2
          }) {
            let _v3 = _v1.getById(_v2("highlightedId")),
              _v4 = _v3?.getAttribute("data-uid"),
              _v5 = _v0.get("children"),
              _v6 = _v4 ? _v5[_v4] : null;
            _v6?.send({
              type: "OPEN_AUTOFOCUS"
            });
          },
          focusParentMenu({
            refs: _v0
          }) {
            _v0.get("parent")?.send({
              type: "FOCUS_MENU"
            });
          },
          setLastHighlightedItem({
            context: _v0,
            event: _v1
          }) {
            _v0.set("lastHighlightedValue", _v20(_v1.target));
          },
          restoreHighlightedItem({
            context: _v0
          }) {
            _v0.get("lastHighlightedValue") && (_v0.set("highlightedValue", _v0.get("lastHighlightedValue")), _v0.set("lastHighlightedValue", null));
          },
          restoreParentHighlightedItem({
            refs: _v0
          }) {
            _v0.get("parent")?.send({
              type: "HIGHLIGHTED.RESTORE"
            });
          },
          invokeOnOpen({
            prop: _v0
          }) {
            _v0("onOpenChange")?.({
              open: !0
            });
          },
          invokeOnClose({
            prop: _v0
          }) {
            _v0("onOpenChange")?.({
              open: !1
            });
          },
          toggleVisibility({
            prop: _v0,
            event: _v1,
            send: _v2
          }) {
            _v2({
              type: _v0("open") ? "CONTROLLED.OPEN" : "CONTROLLED.CLOSE",
              previousEvent: _v1
            });
          }
        }
      }
    });
  function _v35(_v0) {
    let _v1 = _v0.parent;
    for (; _v1 && _v1.computed("isSubmenu");) _v1 = _v1.refs.get("parent");
    _v1?.send({
      type: "CLOSE"
    });
  }
  var _v36 = (0, _v13.createProps)()(["anchorPoint", "aria-label", "closeOnSelect", "composite", "defaultHighlightedValue", "defaultOpen", "dir", "getRootNode", "highlightedValue", "id", "ids", "loopFocus", "navigate", "onEscapeKeyDown", "onFocusOutside", "onHighlightChange", "onInteractOutside", "onOpenChange", "onPointerDownOutside", "onSelect", "open", "positioning", "typeahead"]);
  (0, _v5.createSplitProps)(_v36);
  var _v37 = (0, _v13.createProps)()(["closeOnSelect", "disabled", "value", "valueText"]);
  (0, _v5.createSplitProps)(_v37);
  var _v38 = (0, _v13.createProps)()(["htmlFor"]);
  (0, _v5.createSplitProps)(_v38);
  var _v39 = (0, _v13.createProps)()(["id"]);
  (0, _v5.createSplitProps)(_v39);
  var _v40 = (0, _v13.createProps)()(["checked", "closeOnSelect", "disabled", "onCheckedChange", "type", "value", "valueText"]);
  (0, _v5.createSplitProps)(_v40);
  var _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0);
  _v0.s(["useMenu", 0, _v0 => {
    let _v1 = (0, _v42.useId)(),
      {
        getRootNode: _v2
      } = (0, _v43.useEnvironmentContext)(),
      {
        dir: _v3
      } = (0, _v44.useLocaleContext)(),
      _v4 = {
        id: _v1,
        dir: _v3,
        getRootNode: _v2,
        ..._v0
      },
      _v5 = (0, _v41.useMachine)(_v34, _v4);
    return {
      api: function (_v0, _v1) {
        let {
            context: _v2,
            send: _v3,
            state: _v4,
            computed: _v5,
            prop: _v6,
            scope: _v7
          } = _v0,
          _v8 = _v4.hasTag("open"),
          _v9 = _v5("isSubmenu"),
          _v10 = _v5("isTypingAhead"),
          _v11 = _v6("composite"),
          _v12 = _v2.get("currentPlacement"),
          _v13 = _v2.get("anchorPoint"),
          _v14 = _v2.get("highlightedValue"),
          _v15 = (0, _v4.getPlacementStyles)({
            ..._v6("positioning"),
            placement: _v13 ? "bottom" : _v12
          });
        function _v16(_v0) {
          return {
            id: _v19(_v7, _v0.value),
            disabled: !!_v0.disabled,
            highlighted: _v14 === _v0.value
          };
        }
        function _v17(_v0) {
          let _v1 = _v0.valueText ?? _v0.value;
          return {
            ..._v0,
            id: _v0.value,
            valueText: _v1
          };
        }
        function _v18(_v0) {
          return {
            ..._v16(_v17(_v0)),
            checked: !!_v0.checked
          };
        }
        function _v19(_v0) {
          let {
              closeOnSelect: _v1,
              valueText: _v2,
              value: _v3
            } = _v0,
            _v4 = _v16(_v0),
            _v5 = _v19(_v7, _v3);
          return _v1.element({
            ..._v14.item.attrs,
            id: _v5,
            role: "menuitem",
            "aria-disabled": (0, _v3.ariaAttr)(_v4.disabled),
            "data-disabled": (0, _v3.dataAttr)(_v4.disabled),
            "data-ownedby": _v17(_v7),
            "data-highlighted": (0, _v3.dataAttr)(_v4.highlighted),
            "data-value": _v3,
            "data-valuetext": _v2,
            onDragStart(_v0) {
              _v0.currentTarget.matches("a[href]") && _v0.preventDefault();
            },
            onPointerMove(_v0) {
              if (_v4.disabled || "mouse" !== _v0.pointerType) return;
              let _v1 = _v0.currentTarget;
              _v4.highlighted || _v3({
                type: "ITEM_POINTERMOVE",
                id: _v5,
                target: _v1,
                closeOnSelect: _v1
              });
            },
            onPointerLeave(_v0) {
              _v4.disabled || "mouse" !== _v0.pointerType || !_v0.event.previous()?.type.includes("POINTER") || _v3({
                type: "ITEM_POINTERLEAVE",
                id: _v5,
                target: _v0.currentTarget,
                closeOnSelect: _v1
              });
            },
            onPointerDown(_v0) {
              _v4.disabled || _v3({
                type: "ITEM_POINTERDOWN",
                target: _v0.currentTarget,
                id: _v5,
                closeOnSelect: _v1
              });
            },
            onClick(_v0) {
              (0, _v3.isDownloadingEvent)(_v0) || (0, _v3.isOpeningInNewTab)(_v0) || _v4.disabled || _v3({
                type: "ITEM_CLICK",
                target: _v0.currentTarget,
                id: _v5,
                closeOnSelect: _v1
              });
            }
          });
        }
        return {
          highlightedValue: _v14,
          open: _v8,
          setOpen(_v0) {
            _v4.hasTag("open") !== _v0 && _v3({
              type: _v0 ? "OPEN" : "CLOSE"
            });
          },
          setHighlightedValue(_v0) {
            _v3({
              type: "HIGHLIGHTED.SET",
              value: _v0
            });
          },
          setParent(_v0) {
            _v3({
              type: "PARENT.SET",
              value: _v0,
              id: _v0.prop("id")
            });
          },
          setChild(_v0) {
            _v3({
              type: "CHILD.SET",
              value: _v0,
              id: _v0.prop("id")
            });
          },
          reposition(_v0 = {}) {
            _v3({
              type: "POSITIONING.SET",
              options: _v0
            });
          },
          addItemListener(_v0) {
            let _v1 = _v7.getById(_v0.id);
            if (!_v1) return;
            let _v2 = () => _v0.onSelect?.();
            return _v1.addEventListener(_v30, _v2), () => _v1.removeEventListener(_v30, _v2);
          },
          getContextTriggerProps: () => _v1.element({
            ..._v14.contextTrigger.attrs,
            dir: _v6("dir"),
            id: _v16(_v7),
            onPointerDown(_v0) {
              "mouse" === _v0.pointerType || _v3({
                type: "CONTEXT_MENU_START",
                point: (0, _v3.getEventPoint)(_v0)
              });
            },
            onPointerCancel(_v0) {
              "mouse" !== _v0.pointerType && _v3({
                type: "CONTEXT_MENU_CANCEL"
              });
            },
            onPointerMove(_v0) {
              "mouse" !== _v0.pointerType && _v3({
                type: "CONTEXT_MENU_CANCEL"
              });
            },
            onPointerUp(_v0) {
              "mouse" !== _v0.pointerType && _v3({
                type: "CONTEXT_MENU_CANCEL"
              });
            },
            onContextMenu(_v0) {
              _v3({
                type: "CONTEXT_MENU",
                point: (0, _v3.getEventPoint)(_v0)
              }), _v0.preventDefault();
            },
            style: {
              WebkitTouchCallout: "none",
              WebkitUserSelect: "none",
              userSelect: "none"
            }
          }),
          getTriggerItemProps(_v0) {
            let _v1 = _v0.getTriggerProps();
            return (0, _v2.mergeProps)(_v19({
              value: _v1.id
            }), _v1);
          },
          getTriggerProps: () => _v1.button({
            ...(_v9 ? _v14.triggerItem.attrs : _v14.trigger.attrs),
            "data-placement": _v2.get("currentPlacement"),
            type: "button",
            dir: _v6("dir"),
            id: _v15(_v7),
            "data-uid": _v6("id"),
            "aria-haspopup": _v11 ? "menu" : "dialog",
            "aria-controls": _v17(_v7),
            "aria-expanded": _v8 || void 0,
            "data-state": _v8 ? "open" : "closed",
            onPointerMove(_v0) {
              if ("mouse" !== _v0.pointerType || _v29(_v0.currentTarget) || !_v9) return;
              let _v1 = (0, _v3.getEventPoint)(_v0);
              _v3({
                type: "TRIGGER_POINTERMOVE",
                target: _v0.currentTarget,
                point: _v1
              });
            },
            onPointerLeave(_v0) {
              if (_v29(_v0.currentTarget) || "mouse" !== _v0.pointerType || !_v9) return;
              let _v1 = (0, _v3.getEventPoint)(_v0);
              _v3({
                type: "TRIGGER_POINTERLEAVE",
                target: _v0.currentTarget,
                point: _v1
              });
            },
            onPointerDown(_v0) {
              _v29(_v0.currentTarget) || (0, _v3.isContextMenuEvent)(_v0) || _v0.preventDefault();
            },
            onClick(_v0) {
              _v0.defaultPrevented || _v29(_v0.currentTarget) || _v3({
                type: "TRIGGER_CLICK",
                target: _v0.currentTarget
              });
            },
            onBlur() {
              _v3({
                type: "TRIGGER_BLUR"
              });
            },
            onFocus() {
              _v3({
                type: "TRIGGER_FOCUS"
              });
            },
            onKeyDown(_v0) {
              if (_v0.defaultPrevented) return;
              let _v1 = {
                ArrowDown() {
                  _v3({
                    type: "ARROW_DOWN"
                  });
                },
                ArrowUp() {
                  _v3({
                    type: "ARROW_UP"
                  });
                },
                Enter() {
                  _v3({
                    type: "ARROW_DOWN",
                    src: "enter"
                  });
                },
                Space() {
                  _v3({
                    type: "ARROW_DOWN",
                    src: "space"
                  });
                }
              }[(0, _v3.getEventKey)(_v0, {
                orientation: "vertical",
                dir: _v6("dir")
              })];
              _v1 && (_v0.preventDefault(), _v1(_v0));
            }
          }),
          getIndicatorProps: () => _v1.element({
            ..._v14.indicator.attrs,
            dir: _v6("dir"),
            "data-state": _v8 ? "open" : "closed"
          }),
          getPositionerProps: () => _v1.element({
            ..._v14.positioner.attrs,
            dir: _v6("dir"),
            id: _v18(_v7),
            style: _v15.floating
          }),
          getArrowProps: () => _v1.element({
            id: _v7.ids?.arrow ?? `menu:${_v7.id}:arrow`,
            ..._v14.arrow.attrs,
            dir: _v6("dir"),
            style: _v15.arrow
          }),
          getArrowTipProps: () => _v1.element({
            ..._v14.arrowTip.attrs,
            dir: _v6("dir"),
            style: _v15.arrowTip
          }),
          getContentProps: () => _v1.element({
            ..._v14.content.attrs,
            id: _v17(_v7),
            "aria-label": _v6("aria-label"),
            hidden: !_v8,
            "data-state": _v8 ? "open" : "closed",
            role: _v11 ? "menu" : "dialog",
            tabIndex: 0,
            dir: _v6("dir"),
            "aria-activedescendant": _v5("highlightedId") || void 0,
            "aria-labelledby": _v15(_v7),
            "data-placement": _v12,
            onPointerEnter(_v0) {
              "mouse" === _v0.pointerType && _v3({
                type: "MENU_POINTERENTER"
              });
            },
            onKeyDown(_v0) {
              if (_v0.defaultPrevented || !(0, _v3.isSelfTarget)(_v0)) return;
              let _v1 = (0, _v3.getEventTarget)(_v0);
              if (_v1?.closest("[role=menu]") !== _v0.currentTarget && _v1 !== _v0.currentTarget) return;
              if ("Tab" === _v0.key && !(0, _v3.isValidTabEvent)(_v0)) return void _v0.preventDefault();
              let _v2 = _v25(_v7, _v14),
                _v3 = {
                  ArrowDown() {
                    _v3({
                      type: "ARROW_DOWN"
                    });
                  },
                  ArrowUp() {
                    _v3({
                      type: "ARROW_UP"
                    });
                  },
                  ArrowLeft() {
                    _v3({
                      type: "ARROW_LEFT"
                    });
                  },
                  ArrowRight() {
                    _v3({
                      type: "ARROW_RIGHT"
                    });
                  },
                  Enter() {
                    _v3({
                      type: "ENTER"
                    }), null != _v14 && (0, _v3.isAnchorElement)(_v2) && _v6("navigate")?.({
                      value: _v14,
                      node: _v2,
                      href: _v2.href
                    });
                  },
                  Space(_v0) {
                    _v10 ? _v3({
                      type: "TYPEAHEAD",
                      key: _v0.key
                    }) : _v3.Enter?.(_v0);
                  },
                  Home() {
                    _v3({
                      type: "HOME"
                    });
                  },
                  End() {
                    _v3({
                      type: "END"
                    });
                  }
                },
                _v4 = _v3[(0, _v3.getEventKey)(_v0, {
                  dir: _v6("dir")
                })];
              if (_v4) {
                _v4(_v0), _v0.stopPropagation(), _v0.preventDefault();
                return;
              }
              !_v6("typeahead") || !(0, _v3.isPrintableKey)(_v0) || (0, _v3.isModifierKey)(_v0) || (0, _v3.isEditableElement)(_v1) || (_v3({
                type: "TYPEAHEAD",
                key: _v0.key
              }), _v0.preventDefault());
            }
          }),
          getSeparatorProps: () => _v1.element({
            ..._v14.separator.attrs,
            role: "separator",
            dir: _v6("dir"),
            "aria-orientation": "horizontal"
          }),
          getItemState: _v16,
          getItemProps: _v19,
          getOptionItemState: _v18,
          getOptionItemProps(_v0) {
            let {
                type: _v1,
                disabled: _v2,
                onCheckedChange: _v3,
                closeOnSelect: _v4
              } = _v0,
              _v5 = _v17(_v0),
              _v6 = _v18(_v0);
            return {
              ..._v19(_v5),
              ..._v1.element({
                "data-type": _v1,
                ..._v14.item.attrs,
                dir: _v6("dir"),
                "data-value": _v5.value,
                role: `menuitem${_v1}`,
                "aria-checked": !!_v6.checked,
                "data-state": _v6.checked ? "checked" : "unchecked",
                onClick(_v0) {
                  _v2 || (0, _v3.isDownloadingEvent)(_v0) || (0, _v3.isOpeningInNewTab)(_v0) || (_v3({
                    type: "ITEM_CLICK",
                    target: _v0.currentTarget,
                    option: _v5,
                    closeOnSelect: _v4
                  }), _v3?.(!_v6.checked));
                }
              })
            };
          },
          getItemIndicatorProps(_v0) {
            let _v1 = _v18((0, _v5.cast)(_v0)),
              _v2 = _v1.checked ? "checked" : "unchecked";
            return _v1.element({
              ..._v14.itemIndicator.attrs,
              dir: _v6("dir"),
              "data-disabled": (0, _v3.dataAttr)(_v1.disabled),
              "data-highlighted": (0, _v3.dataAttr)(_v1.highlighted),
              "data-state": (0, _v5.hasProp)(_v0, "checked") ? _v2 : void 0,
              hidden: (0, _v5.hasProp)(_v0, "checked") ? !_v1.checked : void 0
            });
          },
          getItemTextProps(_v0) {
            let _v1 = _v18((0, _v5.cast)(_v0)),
              _v2 = _v1.checked ? "checked" : "unchecked";
            return _v1.element({
              ..._v14.itemText.attrs,
              dir: _v6("dir"),
              "data-disabled": (0, _v3.dataAttr)(_v1.disabled),
              "data-highlighted": (0, _v3.dataAttr)(_v1.highlighted),
              "data-state": (0, _v5.hasProp)(_v0, "checked") ? _v2 : void 0
            });
          },
          getItemGroupLabelProps: _v0 => _v1.element({
            ..._v14.itemGroupLabel.attrs,
            id: _v21(_v7, _v0.htmlFor),
            dir: _v6("dir")
          }),
          getItemGroupProps: _v0 => {
            let _v1;
            return _v1.element({
              id: (_v1 = _v0.id, _v7.ids?.group?.(_v1) ?? `menu:${_v7.id}:group:${_v1}`),
              ..._v14.itemGroup.attrs,
              dir: _v6("dir"),
              "aria-labelledby": _v21(_v7, _v0.id),
              role: "group"
            });
          }
        };
      }(_v5, _v41.normalizeProps),
      service: _v5
    };
  }], 0);
}