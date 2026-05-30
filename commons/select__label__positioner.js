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
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = (0, _v25.createAnatomy)("select").parts("label", "positioner", "trigger", "indicator", "clearTrigger", "item", "itemText", "itemIndicator", "itemGroup", "itemGroupLabel", "list", "content", "root", "control", "valueText").build(),
    _v33 = _v0 => new _v26.ListCollection(_v0);
  _v33.empty = () => new _v26.ListCollection({
    items: []
  });
  var _v34 = _v0 => _v0.ids?.content ?? `select:${_v0.id}:content`,
    _v35 = _v0 => _v0.ids?.trigger ?? `select:${_v0.id}:trigger`,
    _v36 = _v0 => _v0.ids?.clearTrigger ?? `select:${_v0.id}:clear-trigger`,
    _v37 = _v0 => _v0.ids?.label ?? `select:${_v0.id}:label`,
    _v38 = (_v0, _v1) => _v0.ids?.item?.(_v1) ?? `select:${_v0.id}:option:${_v1}`,
    _v39 = _v0 => _v0.ids?.hiddenSelect ?? `select:${_v0.id}:select`,
    _v40 = _v0 => _v0.ids?.positioner ?? `select:${_v0.id}:positioner`,
    _v41 = (_v0, _v1) => _v0.ids?.itemGroupLabel?.(_v1) ?? `select:${_v0.id}:optgroup-label:${_v1}`,
    _v42 = _v0 => _v0.getById(_v39(_v0)),
    _v43 = _v0 => _v0.getById(_v34(_v0)),
    _v44 = _v0 => _v0.getById(_v35(_v0)),
    _v45 = _v0 => _v0.getById(_v40(_v0)),
    {
      and: _v46,
      not: _v47,
      or: _v48
    } = (0, _v17.createGuards)(),
    _v49 = (0, _v17.createMachine)({
      props: ({
        props: _v0
      }) => ({
        loopFocus: !1,
        closeOnSelect: !_v0.multiple,
        composite: !0,
        defaultValue: [],
        ..._v0,
        collection: _v0.collection ?? _v33.empty(),
        positioning: {
          placement: "bottom-start",
          gutter: 8,
          ..._v0.positioning
        }
      }),
      context: ({
        prop: _v0,
        bindable: _v1
      }) => ({
        value: _v1(() => ({
          defaultValue: _v0("defaultValue"),
          value: _v0("value"),
          isEqual: _v29.isEqual,
          onChange(_v0) {
            let _v1 = _v0("collection").findMany(_v0);
            return _v0("onValueChange")?.({
              value: _v0,
              items: _v1
            });
          }
        })),
        highlightedValue: _v1(() => ({
          defaultValue: _v0("defaultHighlightedValue") || null,
          value: _v0("highlightedValue"),
          onChange(_v0) {
            _v0("onHighlightChange")?.({
              highlightedValue: _v0,
              highlightedItem: _v0("collection").find(_v0),
              highlightedIndex: _v0("collection").indexOf(_v0)
            });
          }
        })),
        currentPlacement: _v1(() => ({
          defaultValue: void 0
        })),
        fieldsetDisabled: _v1(() => ({
          defaultValue: !1
        })),
        highlightedItem: _v1(() => ({
          defaultValue: null
        })),
        selectedItems: _v1(() => {
          let _v0 = _v0("value") ?? _v0("defaultValue") ?? [];
          return {
            defaultValue: _v0("collection").findMany(_v0)
          };
        }),
        valueAsString: _v1(() => {
          let _v0 = _v0("value") ?? _v0("defaultValue") ?? [];
          return {
            defaultValue: _v0("collection").stringifyMany(_v0)
          };
        })
      }),
      refs: () => ({
        typeahead: {
          ..._v27.getByTypeahead.defaultOptions
        }
      }),
      computed: {
        hasSelectedItems: ({
          context: _v0
        }) => _v0.get("value").length > 0,
        isTypingAhead: ({
          refs: _v0
        }) => "" !== _v0.get("typeahead").keysSoFar,
        isDisabled: ({
          prop: _v0,
          context: _v1
        }) => !!_v0("disabled") || !!_v1.get("fieldsetDisabled"),
        isInteractive: ({
          prop: _v0
        }) => !(_v0("disabled") || _v0("readOnly"))
      },
      initialState: ({
        prop: _v0
      }) => _v0("open") || _v0("defaultOpen") ? "open" : "idle",
      entry: ["syncSelectElement"],
      watch({
        context: _v0,
        prop: _v1,
        track: _v2,
        action: _v3
      }) {
        _v2([() => _v0.get("value").toString()], () => {
          _v3(["syncSelectedItems", "syncSelectElement", "dispatchChangeEvent"]);
        }), _v2([() => _v1("open")], () => {
          _v3(["toggleVisibility"]);
        }), _v2([() => _v0.get("highlightedValue")], () => {
          _v3(["syncHighlightedItem"]);
        }), _v2([() => _v1("collection").toString()], () => {
          _v3(["syncCollection"]);
        });
      },
      on: {
        "HIGHLIGHTED_VALUE.SET": {
          actions: ["setHighlightedItem"]
        },
        "ITEM.SELECT": {
          actions: ["selectItem"]
        },
        "ITEM.CLEAR": {
          actions: ["clearItem"]
        },
        "VALUE.SET": {
          actions: ["setSelectedItems"]
        },
        "VALUE.CLEAR": {
          actions: ["clearSelectedItems"]
        },
        "CLEAR.CLICK": {
          actions: ["clearSelectedItems", "focusTriggerEl"]
        }
      },
      effects: ["trackFormControlState"],
      states: {
        idle: {
          tags: ["closed"],
          on: {
            "CONTROLLED.OPEN": [{
              guard: "isTriggerClickEvent",
              target: "open",
              actions: ["setInitialFocus", "highlightFirstSelectedItem"]
            }, {
              target: "open",
              actions: ["setInitialFocus"]
            }],
            "TRIGGER.CLICK": [{
              guard: "isOpenControlled",
              actions: ["invokeOnOpen"]
            }, {
              target: "open",
              actions: ["invokeOnOpen", "setInitialFocus", "highlightFirstSelectedItem"]
            }],
            "TRIGGER.FOCUS": {
              target: "focused"
            },
            OPEN: [{
              guard: "isOpenControlled",
              actions: ["invokeOnOpen"]
            }, {
              target: "open",
              actions: ["setInitialFocus", "invokeOnOpen"]
            }]
          }
        },
        focused: {
          tags: ["closed"],
          on: {
            "CONTROLLED.OPEN": [{
              guard: "isTriggerClickEvent",
              target: "open",
              actions: ["setInitialFocus", "highlightFirstSelectedItem"]
            }, {
              guard: "isTriggerArrowUpEvent",
              target: "open",
              actions: ["setInitialFocus", "highlightComputedLastItem"]
            }, {
              guard: _v48("isTriggerArrowDownEvent", "isTriggerEnterEvent"),
              target: "open",
              actions: ["setInitialFocus", "highlightComputedFirstItem"]
            }, {
              target: "open",
              actions: ["setInitialFocus"]
            }],
            OPEN: [{
              guard: "isOpenControlled",
              actions: ["invokeOnOpen"]
            }, {
              target: "open",
              actions: ["setInitialFocus", "invokeOnOpen"]
            }],
            "TRIGGER.BLUR": {
              target: "idle"
            },
            "TRIGGER.CLICK": [{
              guard: "isOpenControlled",
              actions: ["invokeOnOpen"]
            }, {
              target: "open",
              actions: ["setInitialFocus", "invokeOnOpen", "highlightFirstSelectedItem"]
            }],
            "TRIGGER.ENTER": [{
              guard: "isOpenControlled",
              actions: ["invokeOnOpen"]
            }, {
              target: "open",
              actions: ["setInitialFocus", "invokeOnOpen", "highlightComputedFirstItem"]
            }],
            "TRIGGER.ARROW_UP": [{
              guard: "isOpenControlled",
              actions: ["invokeOnOpen"]
            }, {
              target: "open",
              actions: ["setInitialFocus", "invokeOnOpen", "highlightComputedLastItem"]
            }],
            "TRIGGER.ARROW_DOWN": [{
              guard: "isOpenControlled",
              actions: ["invokeOnOpen"]
            }, {
              target: "open",
              actions: ["setInitialFocus", "invokeOnOpen", "highlightComputedFirstItem"]
            }],
            "TRIGGER.ARROW_LEFT": [{
              guard: _v46(_v47("multiple"), "hasSelectedItems"),
              actions: ["selectPreviousItem"]
            }, {
              guard: _v47("multiple"),
              actions: ["selectLastItem"]
            }],
            "TRIGGER.ARROW_RIGHT": [{
              guard: _v46(_v47("multiple"), "hasSelectedItems"),
              actions: ["selectNextItem"]
            }, {
              guard: _v47("multiple"),
              actions: ["selectFirstItem"]
            }],
            "TRIGGER.HOME": {
              guard: _v47("multiple"),
              actions: ["selectFirstItem"]
            },
            "TRIGGER.END": {
              guard: _v47("multiple"),
              actions: ["selectLastItem"]
            },
            "TRIGGER.TYPEAHEAD": {
              guard: _v47("multiple"),
              actions: ["selectMatchingItem"]
            }
          }
        },
        open: {
          tags: ["open"],
          exit: ["scrollContentToTop"],
          effects: ["trackDismissableElement", "computePlacement", "scrollToHighlightedItem"],
          on: {
            "CONTROLLED.CLOSE": [{
              guard: "restoreFocus",
              target: "focused",
              actions: ["focusTriggerEl", "clearHighlightedItem"]
            }, {
              target: "idle",
              actions: ["clearHighlightedItem"]
            }],
            CLOSE: [{
              guard: "isOpenControlled",
              actions: ["invokeOnClose"]
            }, {
              guard: "restoreFocus",
              target: "focused",
              actions: ["invokeOnClose", "focusTriggerEl", "clearHighlightedItem"]
            }, {
              target: "idle",
              actions: ["invokeOnClose", "clearHighlightedItem"]
            }],
            "TRIGGER.CLICK": [{
              guard: "isOpenControlled",
              actions: ["invokeOnClose"]
            }, {
              target: "focused",
              actions: ["invokeOnClose", "clearHighlightedItem"]
            }],
            "ITEM.CLICK": [{
              guard: _v46("closeOnSelect", "isOpenControlled"),
              actions: ["selectHighlightedItem", "invokeOnClose"]
            }, {
              guard: "closeOnSelect",
              target: "focused",
              actions: ["selectHighlightedItem", "invokeOnClose", "focusTriggerEl", "clearHighlightedItem"]
            }, {
              actions: ["selectHighlightedItem"]
            }],
            "CONTENT.HOME": {
              actions: ["highlightFirstItem"]
            },
            "CONTENT.END": {
              actions: ["highlightLastItem"]
            },
            "CONTENT.ARROW_DOWN": [{
              guard: _v46("hasHighlightedItem", "loop", "isLastItemHighlighted"),
              actions: ["highlightFirstItem"]
            }, {
              guard: "hasHighlightedItem",
              actions: ["highlightNextItem"]
            }, {
              actions: ["highlightFirstItem"]
            }],
            "CONTENT.ARROW_UP": [{
              guard: _v46("hasHighlightedItem", "loop", "isFirstItemHighlighted"),
              actions: ["highlightLastItem"]
            }, {
              guard: "hasHighlightedItem",
              actions: ["highlightPreviousItem"]
            }, {
              actions: ["highlightLastItem"]
            }],
            "CONTENT.TYPEAHEAD": {
              actions: ["highlightMatchingItem"]
            },
            "ITEM.POINTER_MOVE": {
              actions: ["highlightItem"]
            },
            "ITEM.POINTER_LEAVE": {
              actions: ["clearHighlightedItem"]
            },
            "POSITIONING.SET": {
              actions: ["reposition"]
            }
          }
        }
      },
      implementations: {
        guards: {
          loop: ({
            prop: _v0
          }) => !!_v0("loopFocus"),
          multiple: ({
            prop: _v0
          }) => !!_v0("multiple"),
          hasSelectedItems: ({
            computed: _v0
          }) => !!_v0("hasSelectedItems"),
          hasHighlightedItem: ({
            context: _v0
          }) => null != _v0.get("highlightedValue"),
          isFirstItemHighlighted: ({
            context: _v0,
            prop: _v1
          }) => _v0.get("highlightedValue") === _v1("collection").firstValue,
          isLastItemHighlighted: ({
            context: _v0,
            prop: _v1
          }) => _v0.get("highlightedValue") === _v1("collection").lastValue,
          closeOnSelect: ({
            prop: _v0,
            event: _v1
          }) => !!(_v1.closeOnSelect ?? _v0("closeOnSelect")),
          restoreFocus: ({
            event: _v0
          }) => _v50(_v0),
          isOpenControlled: ({
            prop: _v0
          }) => void 0 !== _v0("open"),
          isTriggerClickEvent: ({
            event: _v0
          }) => _v0.previousEvent?.type === "TRIGGER.CLICK",
          isTriggerEnterEvent: ({
            event: _v0
          }) => _v0.previousEvent?.type === "TRIGGER.ENTER",
          isTriggerArrowUpEvent: ({
            event: _v0
          }) => _v0.previousEvent?.type === "TRIGGER.ARROW_UP",
          isTriggerArrowDownEvent: ({
            event: _v0
          }) => _v0.previousEvent?.type === "TRIGGER.ARROW_DOWN"
        },
        effects: {
          trackFormControlState: ({
            context: _v0,
            scope: _v1
          }) => (0, _v27.trackFormControl)(_v42(_v1), {
            onFieldsetDisabledChange(_v0) {
              _v0.set("fieldsetDisabled", _v0);
            },
            onFormReset() {
              let _v0 = _v0.initial("value");
              _v0.set("value", _v0);
            }
          }),
          trackDismissableElement({
            scope: _v0,
            send: _v1,
            prop: _v2
          }) {
            let _v3 = !0;
            return (0, _v30.trackDismissableElement)(() => _v43(_v0), {
              defer: !0,
              exclude: [_v44(_v0), _v0.getById(_v36(_v0))],
              onFocusOutside: _v2("onFocusOutside"),
              onPointerDownOutside: _v2("onPointerDownOutside"),
              onInteractOutside(_v0) {
                _v2("onInteractOutside")?.(_v0), _v3 = !(_v0.detail.focusable || _v0.detail.contextmenu);
              },
              onDismiss() {
                _v1({
                  type: "CLOSE",
                  src: "interact-outside",
                  restoreFocus: _v3
                });
              }
            });
          },
          computePlacement({
            context: _v0,
            prop: _v1,
            scope: _v2
          }) {
            let _v3 = _v1("positioning");
            return _v0.set("currentPlacement", _v3.placement), (0, _v28.getPlacement)(() => _v44(_v2), () => _v45(_v2), {
              defer: !0,
              ..._v3,
              onComplete(_v0) {
                _v0.set("currentPlacement", _v0.placement);
              }
            });
          },
          scrollToHighlightedItem({
            context: _v0,
            prop: _v1,
            scope: _v2,
            event: _v3
          }) {
            let _v4 = _v0 => {
              let _v1 = _v0.get("highlightedValue");
              if (null == _v1 || _v3.current().type.includes("POINTER")) return;
              let _v2 = _v2.getById(_v38(_v2, _v1)),
                _v3 = _v43(_v2),
                _v4 = _v1("scrollToIndexFn");
              if (_v4) {
                let _v0 = _v1("collection").indexOf(_v1);
                _v4?.({
                  index: _v0,
                  immediate: _v0
                });
                return;
              }
              (0, _v27.scrollIntoView)(_v2, {
                rootEl: _v3,
                block: "nearest"
              });
            };
            return (0, _v27.raf)(() => _v4(!0)), (0, _v27.observeAttributes)(() => _v43(_v2), {
              defer: !0,
              attributes: ["data-activedescendant"],
              callback() {
                _v4(!1);
              }
            });
          }
        },
        actions: {
          reposition({
            context: _v0,
            prop: _v1,
            scope: _v2,
            event: _v3
          }) {
            (0, _v28.getPlacement)(_v44(_v2), () => _v45(_v2), {
              ..._v1("positioning"),
              ..._v3.options,
              defer: !0,
              listeners: !1,
              onComplete(_v0) {
                _v0.set("currentPlacement", _v0.placement);
              }
            });
          },
          toggleVisibility({
            send: _v0,
            prop: _v1,
            event: _v2
          }) {
            _v0({
              type: _v1("open") ? "CONTROLLED.OPEN" : "CONTROLLED.CLOSE",
              previousEvent: _v2
            });
          },
          highlightPreviousItem({
            context: _v0,
            prop: _v1
          }) {
            let _v2 = _v0.get("highlightedValue");
            if (null == _v2) return;
            let _v3 = _v1("collection").getPreviousValue(_v2, 1, _v1("loopFocus"));
            null != _v3 && _v0.set("highlightedValue", _v3);
          },
          highlightNextItem({
            context: _v0,
            prop: _v1
          }) {
            let _v2 = _v0.get("highlightedValue");
            if (null == _v2) return;
            let _v3 = _v1("collection").getNextValue(_v2, 1, _v1("loopFocus"));
            null != _v3 && _v0.set("highlightedValue", _v3);
          },
          highlightFirstItem({
            context: _v0,
            prop: _v1
          }) {
            let _v2 = _v1("collection").firstValue;
            _v0.set("highlightedValue", _v2);
          },
          highlightLastItem({
            context: _v0,
            prop: _v1
          }) {
            let _v2 = _v1("collection").lastValue;
            _v0.set("highlightedValue", _v2);
          },
          setInitialFocus({
            scope: _v0
          }) {
            (0, _v27.raf)(() => {
              let _v0 = (0, _v27.getInitialFocus)({
                root: _v43(_v0)
              });
              _v0?.focus({
                preventScroll: !0
              });
            });
          },
          focusTriggerEl({
            event: _v0,
            scope: _v1
          }) {
            _v50(_v0) && (0, _v27.raf)(() => {
              let _v0 = _v44(_v1);
              _v0?.focus({
                preventScroll: !0
              });
            });
          },
          selectHighlightedItem({
            context: _v0,
            prop: _v1,
            event: _v2
          }) {
            let _v3 = _v2.value ?? _v0.get("highlightedValue");
            null == _v3 || (_v1("onSelect")?.({
              value: _v3
            }), _v3 = _v1("deselectable") && !_v1("multiple") && _v0.get("value").includes(_v3) ? null : _v3, _v0.set("value", _v0 => null == _v3 ? [] : _v1("multiple") ? (0, _v29.addOrRemove)(_v0, _v3) : [_v3]));
          },
          highlightComputedFirstItem({
            context: _v0,
            prop: _v1,
            computed: _v2
          }) {
            let _v3 = _v1("collection"),
              _v4 = _v2("hasSelectedItems") ? _v3.sort(_v0.get("value"))[0] : _v3.firstValue;
            _v0.set("highlightedValue", _v4);
          },
          highlightComputedLastItem({
            context: _v0,
            prop: _v1,
            computed: _v2
          }) {
            let _v3 = _v1("collection"),
              _v4 = _v2("hasSelectedItems") ? _v3.sort(_v0.get("value"))[0] : _v3.lastValue;
            _v0.set("highlightedValue", _v4);
          },
          highlightFirstSelectedItem({
            context: _v0,
            prop: _v1,
            computed: _v2
          }) {
            if (!_v2("hasSelectedItems")) return;
            let _v3 = _v1("collection").sort(_v0.get("value"))[0];
            _v0.set("highlightedValue", _v3);
          },
          highlightItem({
            context: _v0,
            event: _v1
          }) {
            _v0.set("highlightedValue", _v1.value);
          },
          highlightMatchingItem({
            context: _v0,
            prop: _v1,
            event: _v2,
            refs: _v3
          }) {
            let _v4 = _v1("collection").search(_v2.key, {
              state: _v3.get("typeahead"),
              currentValue: _v0.get("highlightedValue")
            });
            null != _v4 && _v0.set("highlightedValue", _v4);
          },
          setHighlightedItem({
            context: _v0,
            event: _v1
          }) {
            _v0.set("highlightedValue", _v1.value);
          },
          clearHighlightedItem({
            context: _v0
          }) {
            _v0.set("highlightedValue", null);
          },
          selectItem({
            context: _v0,
            prop: _v1,
            event: _v2
          }) {
            _v1("onSelect")?.({
              value: _v2.value
            });
            let _v3 = _v1("deselectable") && !_v1("multiple") && _v0.get("value").includes(_v2.value) ? null : _v2.value;
            _v0.set("value", _v0 => null == _v3 ? [] : _v1("multiple") ? (0, _v29.addOrRemove)(_v0, _v3) : [_v3]);
          },
          clearItem({
            context: _v0,
            event: _v1
          }) {
            _v0.set("value", _v0 => _v0.filter(_v0 => _v0 !== _v1.value));
          },
          setSelectedItems({
            context: _v0,
            event: _v1
          }) {
            _v0.set("value", _v1.value);
          },
          clearSelectedItems({
            context: _v0
          }) {
            _v0.set("value", []);
          },
          selectPreviousItem({
            context: _v0,
            prop: _v1
          }) {
            let [_v2] = _v0.get("value"),
              _v3 = _v1("collection").getPreviousValue(_v2);
            _v3 && _v0.set("value", [_v3]);
          },
          selectNextItem({
            context: _v0,
            prop: _v1
          }) {
            let [_v2] = _v0.get("value"),
              _v3 = _v1("collection").getNextValue(_v2);
            _v3 && _v0.set("value", [_v3]);
          },
          selectFirstItem({
            context: _v0,
            prop: _v1
          }) {
            let _v2 = _v1("collection").firstValue;
            _v2 && _v0.set("value", [_v2]);
          },
          selectLastItem({
            context: _v0,
            prop: _v1
          }) {
            let _v2 = _v1("collection").lastValue;
            _v2 && _v0.set("value", [_v2]);
          },
          selectMatchingItem({
            context: _v0,
            prop: _v1,
            event: _v2,
            refs: _v3
          }) {
            let _v4 = _v1("collection").search(_v2.key, {
              state: _v3.get("typeahead"),
              currentValue: _v0.get("value")[0]
            });
            null != _v4 && _v0.set("value", [_v4]);
          },
          scrollContentToTop({
            prop: _v0,
            scope: _v1
          }) {
            _v0("scrollToIndexFn") ? _v0("scrollToIndexFn")?.({
              index: 0,
              immediate: !0
            }) : _v43(_v1)?.scrollTo(0, 0);
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
          syncSelectElement({
            context: _v0,
            prop: _v1,
            scope: _v2
          }) {
            let _v3 = _v42(_v2);
            if (_v3) {
              if (0 === _v0.get("value").length && !_v1("multiple")) {
                _v3.selectedIndex = -1;
                return;
              }
              for (let _v0 of _v3.options) _v0.selected = _v0.get("value").includes(_v0.value);
            }
          },
          syncCollection({
            context: _v0,
            prop: _v1
          }) {
            let _v2 = _v1("collection"),
              _v3 = _v2.find(_v0.get("highlightedValue"));
            _v3 && _v0.set("highlightedItem", _v3);
            let _v4 = _v2.findMany(_v0.get("value"));
            _v0.set("selectedItems", _v4);
            let _v5 = _v2.stringifyItems(_v4);
            _v0.set("valueAsString", _v5);
          },
          syncSelectedItems({
            context: _v0,
            prop: _v1
          }) {
            let _v2 = _v1("collection"),
              _v3 = _v0.get("selectedItems"),
              _v4 = _v0.get("value").map(_v0 => _v3.find(_v0 => _v2.getItemValue(_v0) === _v0) || _v2.find(_v0));
            _v0.set("selectedItems", _v4), _v0.set("valueAsString", _v2.stringifyItems(_v4));
          },
          syncHighlightedItem({
            context: _v0,
            prop: _v1
          }) {
            let _v2 = _v1("collection"),
              _v3 = _v0.get("highlightedValue"),
              _v4 = _v3 ? _v2.find(_v3) : null;
            _v0.set("highlightedItem", _v4);
          },
          dispatchChangeEvent({
            scope: _v0
          }) {
            queueMicrotask(() => {
              let _v0 = _v42(_v0);
              if (!_v0) return;
              let _v1 = new (_v0.getWin().Event)("change", {
                bubbles: !0,
                composed: !0
              });
              _v0.dispatchEvent(_v1);
            });
          }
        }
      }
    });
  function _v50(_v0) {
    let _v1 = _v0.restoreFocus ?? _v0.previousEvent?.restoreFocus;
    return null == _v1 || !!_v1;
  }
  var _v51 = (0, _v31.createProps)()(["closeOnSelect", "collection", "composite", "defaultHighlightedValue", "defaultOpen", "defaultValue", "deselectable", "dir", "disabled", "form", "getRootNode", "highlightedValue", "id", "ids", "invalid", "loopFocus", "multiple", "name", "onFocusOutside", "onHighlightChange", "onInteractOutside", "onOpenChange", "onPointerDownOutside", "onSelect", "onValueChange", "open", "positioning", "readOnly", "required", "scrollToIndexFn", "value"]);
  (0, _v29.createSplitProps)(_v51);
  var _v52 = (0, _v31.createProps)()(["item", "persistFocus"]);
  (0, _v29.createSplitProps)(_v52);
  var _v53 = (0, _v31.createProps)()(["id"]);
  (0, _v29.createSplitProps)(_v53);
  var _v54 = (0, _v31.createProps)()(["htmlFor"]);
  (0, _v29.createSplitProps)(_v54);
  var _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0);
  let _v59 = (0, _v18.forwardRef)((_v0, _v1) => {
      let [_v2, _v3] = (0, _v21.splitPresenceProps)(_v0),
        [_v4, _v5] = (0, _v19.createSplitProps)()(_v3, ["closeOnSelect", "collection", "composite", "defaultHighlightedValue", "defaultOpen", "defaultValue", "deselectable", "disabled", "form", "highlightedValue", "id", "ids", "invalid", "loopFocus", "multiple", "name", "onFocusOutside", "onHighlightChange", "onInteractOutside", "onOpenChange", "onPointerDownOutside", "onSelect", "onValueChange", "open", "positioning", "readOnly", "required", "scrollToIndexFn", "value"]),
        _v6 = (_v0 => {
          let _v1 = (0, _v18.useId)(),
            {
              dir: _v2
            } = (0, _v56.useLocaleContext)(),
            {
              getRootNode: _v3
            } = (0, _v55.useEnvironmentContext)(),
            _v4 = (0, _v57.useFieldContext)(),
            _v5 = {
              id: _v1,
              ids: {
                label: _v4?.ids.label,
                hiddenSelect: _v4?.ids.control
              },
              disabled: _v4?.disabled,
              readOnly: _v4?.readOnly,
              invalid: _v4?.invalid,
              required: _v4?.required,
              dir: _v2,
              getRootNode: _v3,
              ..._v0
            };
          return function (_v0, _v1) {
            let {
                context: _v2,
                prop: _v3,
                scope: _v4,
                state: _v5,
                computed: _v6,
                send: _v7
              } = _v0,
              _v8 = _v3("disabled") || _v2.get("fieldsetDisabled"),
              _v9 = _v3("invalid"),
              _v10 = _v3("readOnly"),
              _v11 = _v3("composite"),
              _v12 = _v3("collection"),
              _v13 = _v5.hasTag("open"),
              _v14 = _v5.matches("focused"),
              _v15 = _v2.get("highlightedValue"),
              _v16 = _v2.get("highlightedItem"),
              _v17 = _v2.get("selectedItems"),
              _v18 = _v2.get("currentPlacement"),
              _v19 = _v6("isTypingAhead"),
              _v20 = _v6("isInteractive"),
              _v21 = _v15 ? _v38(_v4, _v15) : void 0;
            function _v22(_v0) {
              let _v1 = _v12.getItemDisabled(_v0.item),
                _v2 = _v12.getItemValue(_v0.item);
              return (0, _v29.ensure)(_v2, () => `[zag-js] No value found for item ${JSON.stringify(_v0.item)}`), {
                value: _v2,
                disabled: !!(_v8 || _v1),
                highlighted: _v15 === _v2,
                selected: _v2.get("value").includes(_v2)
              };
            }
            let _v23 = (0, _v28.getPlacementStyles)({
              ..._v3("positioning"),
              placement: _v18
            });
            return {
              open: _v13,
              focused: _v14,
              empty: 0 === _v2.get("value").length,
              highlightedItem: _v16,
              highlightedValue: _v15,
              selectedItems: _v17,
              hasSelectedItems: _v6("hasSelectedItems"),
              value: _v2.get("value"),
              valueAsString: _v2.get("valueAsString"),
              collection: _v12,
              multiple: !!_v3("multiple"),
              disabled: !!_v8,
              reposition(_v0 = {}) {
                _v7({
                  type: "POSITIONING.SET",
                  options: _v0
                });
              },
              focus() {
                _v44(_v4)?.focus({
                  preventScroll: !0
                });
              },
              setOpen(_v0) {
                _v5.hasTag("open") !== _v0 && _v7({
                  type: _v0 ? "OPEN" : "CLOSE"
                });
              },
              selectValue(_v0) {
                _v7({
                  type: "ITEM.SELECT",
                  value: _v0
                });
              },
              setValue(_v0) {
                _v7({
                  type: "VALUE.SET",
                  value: _v0
                });
              },
              selectAll() {
                _v7({
                  type: "VALUE.SET",
                  value: _v12.getValues()
                });
              },
              highlightValue(_v0) {
                _v7({
                  type: "HIGHLIGHTED_VALUE.SET",
                  value: _v0
                });
              },
              clearValue(_v0) {
                _v0 ? _v7({
                  type: "ITEM.CLEAR",
                  value: _v0
                }) : _v7({
                  type: "VALUE.CLEAR"
                });
              },
              getItemState: _v22,
              getRootProps: () => _v1.element({
                ..._v32.root.attrs,
                dir: _v3("dir"),
                id: _v4.ids?.root ?? `select:${_v4.id}`,
                "data-invalid": (0, _v27.dataAttr)(_v9),
                "data-readonly": (0, _v27.dataAttr)(_v10)
              }),
              getLabelProps: () => _v1.label({
                dir: _v3("dir"),
                id: _v37(_v4),
                ..._v32.label.attrs,
                "data-disabled": (0, _v27.dataAttr)(_v8),
                "data-invalid": (0, _v27.dataAttr)(_v9),
                "data-readonly": (0, _v27.dataAttr)(_v10),
                htmlFor: _v39(_v4),
                onClick(_v0) {
                  _v0.defaultPrevented || _v8 || _v44(_v4)?.focus({
                    preventScroll: !0
                  });
                }
              }),
              getControlProps: () => _v1.element({
                ..._v32.control.attrs,
                dir: _v3("dir"),
                id: _v4.ids?.control ?? `select:${_v4.id}:control`,
                "data-state": _v13 ? "open" : "closed",
                "data-focus": (0, _v27.dataAttr)(_v14),
                "data-disabled": (0, _v27.dataAttr)(_v8),
                "data-invalid": (0, _v27.dataAttr)(_v9)
              }),
              getValueTextProps: () => _v1.element({
                ..._v32.valueText.attrs,
                dir: _v3("dir"),
                "data-disabled": (0, _v27.dataAttr)(_v8),
                "data-invalid": (0, _v27.dataAttr)(_v9),
                "data-focus": (0, _v27.dataAttr)(_v14)
              }),
              getTriggerProps: () => _v1.button({
                id: _v35(_v4),
                disabled: _v8,
                dir: _v3("dir"),
                type: "button",
                role: "combobox",
                "aria-controls": _v34(_v4),
                "aria-expanded": _v13,
                "aria-haspopup": "listbox",
                "data-state": _v13 ? "open" : "closed",
                "aria-invalid": _v9,
                "aria-labelledby": _v37(_v4),
                ..._v32.trigger.attrs,
                "data-disabled": (0, _v27.dataAttr)(_v8),
                "data-invalid": (0, _v27.dataAttr)(_v9),
                "data-readonly": (0, _v27.dataAttr)(_v10),
                "data-placement": _v18,
                "data-placeholder-shown": (0, _v27.dataAttr)(!_v6("hasSelectedItems")),
                onClick(_v0) {
                  !_v20 || _v0.defaultPrevented || _v7({
                    type: "TRIGGER.CLICK"
                  });
                },
                onFocus() {
                  _v7({
                    type: "TRIGGER.FOCUS"
                  });
                },
                onBlur() {
                  _v7({
                    type: "TRIGGER.BLUR"
                  });
                },
                onKeyDown(_v0) {
                  if (_v0.defaultPrevented || !_v20) return;
                  let _v1 = {
                    ArrowUp() {
                      _v7({
                        type: "TRIGGER.ARROW_UP"
                      });
                    },
                    ArrowDown(_v0) {
                      _v7({
                        type: _v0.altKey ? "OPEN" : "TRIGGER.ARROW_DOWN"
                      });
                    },
                    ArrowLeft() {
                      _v7({
                        type: "TRIGGER.ARROW_LEFT"
                      });
                    },
                    ArrowRight() {
                      _v7({
                        type: "TRIGGER.ARROW_RIGHT"
                      });
                    },
                    Home() {
                      _v7({
                        type: "TRIGGER.HOME"
                      });
                    },
                    End() {
                      _v7({
                        type: "TRIGGER.END"
                      });
                    },
                    Enter() {
                      _v7({
                        type: "TRIGGER.ENTER"
                      });
                    },
                    Space(_v0) {
                      _v19 ? _v7({
                        type: "TRIGGER.TYPEAHEAD",
                        key: _v0.key
                      }) : _v7({
                        type: "TRIGGER.ENTER"
                      });
                    }
                  }[(0, _v27.getEventKey)(_v0, {
                    dir: _v3("dir"),
                    orientation: "vertical"
                  })];
                  if (_v1) {
                    _v1(_v0), _v0.preventDefault();
                    return;
                  }
                  _v27.getByTypeahead.isValidEvent(_v0) && (_v7({
                    type: "TRIGGER.TYPEAHEAD",
                    key: _v0.key
                  }), _v0.preventDefault());
                }
              }),
              getIndicatorProps: () => _v1.element({
                ..._v32.indicator.attrs,
                dir: _v3("dir"),
                "aria-hidden": !0,
                "data-state": _v13 ? "open" : "closed",
                "data-disabled": (0, _v27.dataAttr)(_v8),
                "data-invalid": (0, _v27.dataAttr)(_v9),
                "data-readonly": (0, _v27.dataAttr)(_v10)
              }),
              getItemProps(_v0) {
                let _v1 = _v22(_v0);
                return _v1.element({
                  id: _v38(_v4, _v1.value),
                  role: "option",
                  ..._v32.item.attrs,
                  dir: _v3("dir"),
                  "data-value": _v1.value,
                  "aria-selected": _v1.selected,
                  "data-state": _v1.selected ? "checked" : "unchecked",
                  "data-highlighted": (0, _v27.dataAttr)(_v1.highlighted),
                  "data-disabled": (0, _v27.dataAttr)(_v1.disabled),
                  "aria-disabled": (0, _v27.ariaAttr)(_v1.disabled),
                  onPointerMove(_v0) {
                    _v1.disabled || "mouse" !== _v0.pointerType || _v1.value !== _v15 && _v7({
                      type: "ITEM.POINTER_MOVE",
                      value: _v1.value
                    });
                  },
                  onClick(_v0) {
                    _v0.defaultPrevented || _v1.disabled || _v7({
                      type: "ITEM.CLICK",
                      src: "pointerup",
                      value: _v1.value
                    });
                  },
                  onPointerLeave(_v0) {
                    _v1.disabled || _v0.persistFocus || "mouse" !== _v0.pointerType || _v0.event.previous()?.type.includes("POINTER") && _v7({
                      type: "ITEM.POINTER_LEAVE"
                    });
                  }
                });
              },
              getItemTextProps(_v0) {
                let _v1 = _v22(_v0);
                return _v1.element({
                  ..._v32.itemText.attrs,
                  "data-state": _v1.selected ? "checked" : "unchecked",
                  "data-disabled": (0, _v27.dataAttr)(_v1.disabled),
                  "data-highlighted": (0, _v27.dataAttr)(_v1.highlighted)
                });
              },
              getItemIndicatorProps(_v0) {
                let _v1 = _v22(_v0);
                return _v1.element({
                  "aria-hidden": !0,
                  ..._v32.itemIndicator.attrs,
                  "data-state": _v1.selected ? "checked" : "unchecked",
                  hidden: !_v1.selected
                });
              },
              getItemGroupLabelProps(_v0) {
                let {
                  htmlFor: _v1
                } = _v0;
                return _v1.element({
                  ..._v32.itemGroupLabel.attrs,
                  id: _v41(_v4, _v1),
                  dir: _v3("dir"),
                  role: "presentation"
                });
              },
              getItemGroupProps(_v0) {
                let {
                  id: _v1
                } = _v0;
                return _v1.element({
                  ..._v32.itemGroup.attrs,
                  "data-disabled": (0, _v27.dataAttr)(_v8),
                  id: _v4.ids?.itemGroup?.(_v1) ?? `select:${_v4.id}:optgroup:${_v1}`,
                  "aria-labelledby": _v41(_v4, _v1),
                  role: "group",
                  dir: _v3("dir")
                });
              },
              getClearTriggerProps: () => _v1.button({
                ..._v32.clearTrigger.attrs,
                id: _v36(_v4),
                type: "button",
                "aria-label": "Clear value",
                "data-invalid": (0, _v27.dataAttr)(_v9),
                disabled: _v8,
                hidden: !_v6("hasSelectedItems"),
                dir: _v3("dir"),
                onClick(_v0) {
                  _v0.defaultPrevented || _v7({
                    type: "CLEAR.CLICK"
                  });
                }
              }),
              getHiddenSelectProps() {
                let _v0 = _v2.get("value"),
                  _v1 = _v3("multiple") ? _v0 : _v0?.[0];
                return _v1.select({
                  name: _v3("name"),
                  form: _v3("form"),
                  disabled: _v8,
                  multiple: _v3("multiple"),
                  required: _v3("required"),
                  "aria-hidden": !0,
                  id: _v39(_v4),
                  defaultValue: _v1,
                  style: _v27.visuallyHiddenStyle,
                  tabIndex: -1,
                  onFocus() {
                    _v44(_v4)?.focus({
                      preventScroll: !0
                    });
                  },
                  "aria-labelledby": _v37(_v4)
                });
              },
              getPositionerProps: () => _v1.element({
                ..._v32.positioner.attrs,
                dir: _v3("dir"),
                id: _v40(_v4),
                style: _v23.floating
              }),
              getContentProps: () => _v1.element({
                hidden: !_v13,
                dir: _v3("dir"),
                id: _v34(_v4),
                role: _v11 ? "listbox" : "dialog",
                ..._v32.content.attrs,
                "data-state": _v13 ? "open" : "closed",
                "data-placement": _v18,
                "data-activedescendant": _v21,
                "aria-activedescendant": _v11 ? _v21 : void 0,
                "aria-multiselectable": !!_v3("multiple") && !!_v11 || void 0,
                "aria-labelledby": _v37(_v4),
                tabIndex: 0,
                onKeyDown(_v0) {
                  if (!_v20 || !(0, _v27.isSelfTarget)(_v0)) return;
                  if ("Tab" === _v0.key && !(0, _v27.isValidTabEvent)(_v0)) return void _v0.preventDefault();
                  let _v1 = {
                      ArrowUp() {
                        _v7({
                          type: "CONTENT.ARROW_UP"
                        });
                      },
                      ArrowDown() {
                        _v7({
                          type: "CONTENT.ARROW_DOWN"
                        });
                      },
                      Home() {
                        _v7({
                          type: "CONTENT.HOME"
                        });
                      },
                      End() {
                        _v7({
                          type: "CONTENT.END"
                        });
                      },
                      Enter() {
                        _v7({
                          type: "ITEM.CLICK",
                          src: "keydown.enter"
                        });
                      },
                      Space(_v0) {
                        _v19 ? _v7({
                          type: "CONTENT.TYPEAHEAD",
                          key: _v0.key
                        }) : _v1.Enter?.(_v0);
                      }
                    },
                    _v2 = _v1[(0, _v27.getEventKey)(_v0)];
                  if (_v2) {
                    _v2(_v0), _v0.preventDefault();
                    return;
                  }
                  let _v3 = (0, _v27.getEventTarget)(_v0);
                  !(0, _v27.isEditableElement)(_v3) && _v27.getByTypeahead.isValidEvent(_v0) && (_v7({
                    type: "CONTENT.TYPEAHEAD",
                    key: _v0.key
                  }), _v0.preventDefault());
                }
              }),
              getListProps: () => _v1.element({
                ..._v32.list.attrs,
                tabIndex: 0,
                role: _v11 ? void 0 : "listbox",
                "aria-labelledby": _v35(_v4),
                "aria-activedescendant": _v11 ? void 0 : _v21,
                "aria-multiselectable": !!(!_v11 && _v3("multiple")) || void 0
              })
            };
          }((0, _v24.useMachine)(_v49, _v5), _v24.normalizeProps);
        })(_v4),
        _v7 = (0, _v22.usePresence)((0, _v17.mergeProps)({
          present: _v6.open
        }, _v2)),
        _v8 = (0, _v17.mergeProps)(_v6.getRootProps(), _v5);
      return (0, _v1.jsx)(_v58.SelectProvider, {
        value: _v6,
        children: (0, _v1.jsx)(_v23.PresenceProvider, {
          value: _v7,
          children: (0, _v1.jsx)(_v20.ark.div, {
            ..._v8,
            ref: _v1
          })
        })
      });
    }),
    _v60 = (0, _v18.forwardRef)((_v0, _v1) => {
      let [_v2, _v3] = (0, _v21.splitPresenceProps)(_v0),
        [{
          value: _v4
        }, _v5] = (0, _v19.createSplitProps)()(_v3, ["value"]),
        _v6 = (0, _v22.usePresence)((0, _v17.mergeProps)({
          present: _v4.open
        }, _v2)),
        _v7 = (0, _v17.mergeProps)(_v4.getRootProps(), _v5);
      return (0, _v1.jsx)(_v58.SelectProvider, {
        value: _v4,
        children: (0, _v1.jsx)(_v23.PresenceProvider, {
          value: _v6,
          children: (0, _v1.jsx)(_v20.ark.div, {
            ..._v7,
            ref: _v1
          })
        })
      });
    }),
    _v61 = (0, _v18.forwardRef)((_v0, _v1) => {
      let _v2 = (0, _v58.useSelectContext)(),
        _v3 = (0, _v17.mergeProps)(_v2.getTriggerProps(), _v0);
      return (0, _v1.jsx)(_v20.ark.button, {
        ..._v3,
        ref: _v1
      });
    });
  _v61.displayName = "SelectTrigger";
  let _v62 = (0, _v18.forwardRef)((_v0, _v1) => {
    let {
        children: _v2,
        placeholder: _v3,
        ..._v4
      } = _v0,
      _v5 = (0, _v58.useSelectContext)(),
      _v6 = (0, _v17.mergeProps)(_v5.getValueTextProps(), _v4);
    return (0, _v1.jsx)(_v20.ark.span, {
      ..._v6,
      ref: _v1,
      children: _v2 || _v5.valueAsString || _v3
    });
  });
  _v62.displayName = "SelectValueText", _v0.s(["ClearTrigger", () => _v2.SelectClearTrigger, "Content", () => _v3.SelectContent, "Context", () => _v4.SelectContext, "Control", () => _v5.SelectControl, "HiddenSelect", () => _v6.SelectHiddenSelect, "Indicator", () => _v7.SelectIndicator, "Item", () => _v8.SelectItem, "ItemContext", () => _v9.SelectItemContext, "ItemGroup", () => _v10.SelectItemGroup, "ItemGroupLabel", () => _v11.SelectItemGroupLabel, "ItemIndicator", () => _v12.SelectItemIndicator, "ItemText", () => _v13.SelectItemText, "Label", () => _v14.SelectLabel, "List", () => _v15.SelectList, "Positioner", () => _v16.SelectPositioner, "Root", 0, _v59, "RootProvider", 0, _v60, "Trigger", 0, _v61, "ValueText", 0, _v62], 0);
  var _v63 = _v0.i(0),
    _v63 = _v63,
    _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0),
    _v67 = _v0.i(0),
    _v68 = _v0.i(0),
    _v69 = _v0.i(0);
  let {
      Root: _v70,
      Positioner: _v71,
      Trigger: _v72,
      Control: _v73,
      Content: _v74,
      Label: _v75,
      ItemText: _v76,
      Indicator: _v77,
      ItemGroup: _v78,
      ValueText: _v79,
      ClearTrigger: _v80,
      ItemIndicator: _v81,
      ItemGroupLabel: _v82,
      Item: _v83,
      HiddenSelect: _v84
    } = _v63,
    _v85 = (0, _v65.forwardRef)(({
      styles: _v0,
      placeholder: _v1,
      leftIcon: _v2,
      ..._v3
    }, _v4) => (0, _v1.jsxs)(_v67.Box, {
      as: "button",
      __css: _v0.field,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      ref: _v4,
      ..._v3,
      children: [(0, _v1.jsxs)(_v68.Flex, {
        gap: "xs",
        alignItems: "center",
        overflow: "hidden",
        children: [_v2 && _v18.default.cloneElement(_v2, {
          __css: _v0.leftIcon
        }), (0, _v1.jsx)(_v79, {
          placeholder: _v1
        })]
      }), (0, _v1.jsx)(_v77, {
        asChild: !0,
        children: (0, _v1.jsx)(_v69.ChevronDown, {
          __css: _v0.selectIndicator
        })
      })]
    })),
    _v86 = ({
      styles: _v0,
      label: _v1,
      item: _v2,
      children: _v3,
      ..._v4
    }) => (0, _v1.jsx)(_v83, {
      item: _v2,
      asChild: !0,
      children: (0, _v1.jsx)(_v67.Box, {
        __css: _v0,
        ..._v4,
        children: _v3 || (0, _v1.jsx)(_v76, {
          children: _v1
        })
      })
    }),
    _v87 = ({
      listStyle: _v0,
      width: _v1,
      items: _v2,
      itemStyle: _v3,
      childItems: _v4
    }) => (0, _v1.jsx)(_v71, {
      children: (0, _v1.jsx)(_v74, {
        asChild: !0,
        children: (0, _v1.jsx)(_v67.Box, {
          __css: _v0,
          width: _v1,
          children: _v2.map((_v0, _v1) => _v4 ? _v18.default.cloneElement(_v4(_v0), {
            item: _v0,
            label: _v0.label,
            styles: _v3,
            key: _v1
          }) : (0, _v1.jsx)(_v86, {
            styles: _v3,
            label: _v0.label,
            item: _v0
          }, _v1))
        })
      })
    });
  _v0.s(["Select", 0, ({
    size: _v0 = "md",
    items: _v1,
    label: _v2,
    placeholder: _v3,
    leftIcon: _v4,
    withPortal: _v5 = !1,
    variant: _v6,
    onOpenChange: _v7,
    children: _v8,
    ..._v9
  }) => {
    let _v10,
      _v11 = (0, _v66.useMultiStyleConfig)("ArkUiSelect", {
        size: _v0,
        variant: _v6
      }),
      {
        list: _v12,
        item: _v13
      } = (0, _v66.useStyleConfig)("SelectMenu", {
        size: _v0,
        variant: _v6
      }),
      _v14 = (_v10 = {
        items: _v1
      }, new _v26.ListCollection(_v10)),
      _v15 = _v18.default.useRef(null),
      [_v16, _v17] = _v18.default.useState(0),
      _v18 = () => {
        if (_v15.current) {
          let {
            width: _v0
          } = _v15.current.getBoundingClientRect();
          _v0 > 0 && _v17(_v0);
        }
      };
    (0, _v18.useLayoutEffect)(() => {
      let _v0 = new ResizeObserver(() => {
        _v18();
      });
      return _v15.current && _v0.observe(_v15.current), () => {
        _v0.disconnect();
      };
    }, []);
    let _v19 = (0, _v1.jsx)(_v87, {
      listStyle: _v12,
      width: _v16,
      items: _v1,
      childItems: _v8,
      itemStyle: _v13
    });
    return (0, _v1.jsxs)(_v70, {
      collection: _v14,
      onOpenChange: _v0 => {
        _v18(), _v7?.(_v0);
      },
      ..._v9,
      children: [_v2 && (0, _v1.jsx)(_v75, {
        children: _v2
      }), (0, _v1.jsx)(_v73, {
        children: (0, _v1.jsx)(_v72, {
          asChild: !0,
          children: (0, _v1.jsx)(_v85, {
            styles: _v11,
            placeholder: _v3,
            leftIcon: _v4,
            ref: _v15
          })
        })
      }), _v5 ? (0, _v1.jsx)(_v64.Portal, {
        children: (0, _v1.jsx)(_v1.Fragment, {
          children: _v19
        })
      }) : (0, _v1.jsx)(_v1.Fragment, {
        children: _v19
      })]
    });
  }, "SelectContent", 0, _v74, "SelectControl", 0, _v73, "SelectIndicator", 0, _v77, "SelectInput", 0, _v85, "SelectItem", 0, _v86, "SelectItemBase", 0, _v83, "SelectItemGroup", 0, _v78, "SelectItemGroupLabel", 0, _v82, "SelectItemIndicator", 0, _v81, "SelectItemText", 0, _v76, "SelectLabel", 0, _v75, "SelectPositioner", 0, _v71, "SelectRoot", 0, _v70, "SelectTrigger", 0, _v72, "SelectTriggerClear", 0, _v80, "SelectValueText", 0, _v79], 0);
}