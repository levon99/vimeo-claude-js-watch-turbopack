{
  "use strict";

  let [_v1, _v2] = (0, _v0.i(0).createContext)({
    name: "PresenceContext",
    hookName: "usePresenceContext",
    providerName: "<PresenceProvider />"
  });
  _v0.s(["PresenceProvider", 0, _v1, "usePresenceContext", 0, _v2], 0);
  var _v3 = _v0.i(0);
  _v0.s(["splitPresenceProps", 0, _v0 => (0, _v3.createSplitProps)()(_v0, ["immediate", "lazyMount", "onExitComplete", "present", "skipAnimationOnMount", "unmountOnExit"])], 0);
  var _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = (0, _v5.createMachine)({
      props: ({
        props: _v0
      }) => ({
        ..._v0,
        present: !!_v0.present
      }),
      initialState: ({
        prop: _v0
      }) => _v0("present") ? "mounted" : "unmounted",
      refs: () => ({
        node: null,
        styles: null
      }),
      context: ({
        bindable: _v0
      }) => ({
        unmountAnimationName: _v0(() => ({
          defaultValue: null
        })),
        prevAnimationName: _v0(() => ({
          defaultValue: null
        })),
        present: _v0(() => ({
          defaultValue: !1
        })),
        initial: _v0(() => ({
          sync: !0,
          defaultValue: !1
        }))
      }),
      exit: ["clearInitial", "cleanupNode"],
      watch({
        track: _v0,
        action: _v1,
        prop: _v2
      }) {
        _v0([() => _v2("present")], () => {
          _v1(["setInitial", "syncPresence"]);
        });
      },
      on: {
        "NODE.SET": {
          actions: ["setNode", "setStyles"]
        }
      },
      states: {
        mounted: {
          on: {
            UNMOUNT: {
              target: "unmounted",
              actions: ["clearPrevAnimationName", "invokeOnExitComplete"]
            },
            "UNMOUNT.SUSPEND": {
              target: "unmountSuspended"
            }
          }
        },
        unmountSuspended: {
          effects: ["trackAnimationEvents"],
          on: {
            MOUNT: {
              target: "mounted",
              actions: ["setPrevAnimationName"]
            },
            UNMOUNT: {
              target: "unmounted",
              actions: ["clearPrevAnimationName", "invokeOnExitComplete"]
            }
          }
        },
        unmounted: {
          on: {
            MOUNT: {
              target: "mounted",
              actions: ["setPrevAnimationName"]
            }
          }
        }
      },
      implementations: {
        actions: {
          setInitial: ({
            context: _v0
          }) => {
            _v0.get("initial") || queueMicrotask(() => {
              _v0.set("initial", !0);
            });
          },
          clearInitial: ({
            context: _v0
          }) => {
            _v0.set("initial", !1);
          },
          cleanupNode: ({
            refs: _v0
          }) => {
            _v0.set("node", null), _v0.set("styles", null);
          },
          invokeOnExitComplete: ({
            prop: _v0
          }) => {
            _v0("onExitComplete")?.();
          },
          setNode: ({
            refs: _v0,
            event: _v1
          }) => {
            _v0.set("node", _v1.node);
          },
          setStyles: ({
            refs: _v0,
            event: _v1
          }) => {
            _v0.set("styles", (0, _v4.getComputedStyle)(_v1.node));
          },
          syncPresence: ({
            context: _v0,
            refs: _v1,
            send: _v2,
            prop: _v3
          }) => {
            let _v4 = _v3("present");
            if (_v4) return _v2({
              type: "MOUNT",
              src: "presence.changed"
            });
            let _v5 = _v1.get("node");
            if (!_v4 && _v5?.ownerDocument.visibilityState === "hidden") return _v2({
              type: "UNMOUNT",
              src: "visibilitychange"
            });
            (0, _v4.raf)(() => {
              let _v0 = _v8(_v1.get("styles"));
              _v0.set("unmountAnimationName", _v0), "none" === _v0 || _v0 === _v0.get("prevAnimationName") || _v1.get("styles")?.display === "none" || _v1.get("styles")?.animationDuration === "0s" ? _v2({
                type: "UNMOUNT",
                src: "presence.changed"
              }) : _v2({
                type: "UNMOUNT.SUSPEND"
              });
            });
          },
          setPrevAnimationName: ({
            context: _v0,
            refs: _v1
          }) => {
            (0, _v4.raf)(() => {
              _v0.set("prevAnimationName", _v8(_v1.get("styles")));
            });
          },
          clearPrevAnimationName: ({
            context: _v0
          }) => {
            _v0.set("prevAnimationName", null);
          }
        },
        effects: {
          trackAnimationEvents: ({
            context: _v0,
            refs: _v1,
            send: _v2
          }) => {
            let _v3 = _v1.get("node");
            if (!_v3) return;
            let _v4 = _v0 => {
                (_v0.composedPath?.()?.[0] ?? _v0.target) === _v3 && _v0.set("prevAnimationName", _v8(_v1.get("styles")));
              },
              _v5 = _v0 => {
                let _v1 = _v8(_v1.get("styles"));
                (0, _v4.getEventTarget)(_v0) === _v3 && _v1 === _v0.get("unmountAnimationName") && _v2({
                  type: "UNMOUNT",
                  src: "animationend"
                });
              };
            _v3.addEventListener("animationstart", _v4), _v3.addEventListener("animationcancel", _v5), _v3.addEventListener("animationend", _v5);
            let _v6 = (0, _v4.setStyle)(_v3, {
              animationFillMode: "forwards"
            });
            return () => {
              _v3.removeEventListener("animationstart", _v4), _v3.removeEventListener("animationcancel", _v5), _v3.removeEventListener("animationend", _v5), (0, _v4.nextTick)(() => _v6());
            };
          }
        }
      }
    });
  function _v8(_v0) {
    return _v0?.animationName || "none";
  }
  (0, _v6.createProps)()(["onExitComplete", "present", "immediate"]);
  var _v9 = _v0.i(0),
    _v10 = _v0.i(0);
  _v0.s(["usePresence", 0, (_v0 = {}) => {
    let {
        lazyMount: _v1,
        unmountOnExit: _v2,
        present: _v3,
        skipAnimationOnMount: _v4 = !1,
        ..._v5
      } = _v0,
      _v6 = (0, _v10.useRef)(!1),
      _v7 = {
        ..._v5,
        present: _v3,
        onExitComplete: function (_v0, _v1 = {}) {
          var _v2;
          let _v3,
            {
              sync: _v4 = !1
            } = _v1,
            _v5 = (_v2 = _v0, (_v3 = (0, _v10.useRef)(_v2)).current = _v2, _v3);
          return (0, _v10.useCallback)((..._v0) => _v4 ? queueMicrotask(() => _v5.current?.(..._v0)) : _v5.current?.(..._v0), [_v4, _v5]);
        }(_v0.onExitComplete)
      },
      _v8 = function (_v0, _v1) {
        let {
            state: _v2,
            send: _v3,
            context: _v4
          } = _v0,
          _v5 = _v2.matches("mounted", "unmountSuspended");
        return {
          skip: !_v4.get("initial"),
          present: _v5,
          setNode(_v0) {
            _v0 && _v3({
              type: "NODE.SET",
              node: _v0
            });
          },
          unmount() {
            _v3({
              type: "UNMOUNT"
            });
          }
        };
      }((0, _v9.useMachine)(_v7, _v7), _v9.normalizeProps);
    _v8.present && (_v6.current = !0);
    let _v9 = !_v8.present && !_v6.current && _v1 || _v2 && !_v8.present && _v6.current;
    return {
      ref: _v8.setNode,
      getPresenceProps: () => ({
        "data-state": _v8.skip && _v4 ? void 0 : _v3 ? "open" : "closed",
        hidden: !_v8.present
      }),
      present: _v8.present,
      unmounted: _v9
    };
  }], 0);
}