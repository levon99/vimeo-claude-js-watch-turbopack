{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s([], 0), _v0.i(0);
  var _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let [_v5, _v6] = (0, _v0.i(0).createContext)({
      name: "CarouselContext",
      hookName: "useCarouselContext",
      providerName: "<CarouselProvider />"
    }),
    _v7 = (0, _v3.forwardRef)((_v0, _v1) => {
      let _v2 = _v6(),
        _v3 = (0, _v2.mergeProps)(_v2.getAutoplayTriggerProps(), _v0);
      return (0, _v1.jsx)(_v4.ark.button, {
        ..._v3,
        ref: _v1
      });
    });
  _v7.displayName = "CarouselAutoplayTrigger";
  let _v8 = (0, _v3.forwardRef)((_v0, _v1) => {
    let _v2 = _v6(),
      _v3 = (0, _v2.mergeProps)(_v2.getControlProps(), _v0);
    return (0, _v1.jsx)(_v4.ark.div, {
      ..._v3,
      ..._v0,
      ref: _v1
    });
  });
  _v8.displayName = "CarouselControl";
  var _v9 = _v0.i(0);
  let _v10 = (0, _v3.forwardRef)((_v0, _v1) => {
    let [_v2, _v3] = (0, _v9.createSplitProps)()(_v0, ["readOnly", "index"]),
      _v4 = _v6(),
      _v5 = (0, _v2.mergeProps)(_v4.getIndicatorProps(_v2), _v3);
    return (0, _v1.jsx)(_v4.ark.button, {
      ..._v5,
      ref: _v1
    });
  });
  _v10.displayName = "CarouselIndicator";
  let _v11 = (0, _v3.forwardRef)((_v0, _v1) => {
    let _v2 = _v6(),
      _v3 = (0, _v2.mergeProps)(_v2.getIndicatorGroupProps(), _v0);
    return (0, _v1.jsx)(_v4.ark.div, {
      ..._v3,
      ref: _v1
    });
  });
  _v11.displayName = "CarouselIndicatorGroup";
  let _v12 = (0, _v3.forwardRef)((_v0, _v1) => {
    let [_v2, _v3] = (0, _v9.createSplitProps)()(_v0, ["index", "snapAlign"]),
      _v4 = _v6(),
      _v5 = (0, _v2.mergeProps)(_v4.getItemProps(_v2), _v3);
    return (0, _v1.jsx)(_v4.ark.div, {
      ..._v5,
      ref: _v1
    });
  });
  _v12.displayName = "CarouselItem";
  let _v13 = (0, _v3.forwardRef)((_v0, _v1) => {
    let _v2 = _v6(),
      _v3 = (0, _v2.mergeProps)(_v2.getItemGroupProps(), _v0);
    return (0, _v1.jsx)(_v4.ark.div, {
      ..._v3,
      ref: _v1
    });
  });
  _v13.displayName = "CarouselItemGroup";
  let _v14 = (0, _v3.forwardRef)((_v0, _v1) => {
    let _v2 = _v6(),
      _v3 = (0, _v2.mergeProps)(_v2.getNextTriggerProps(), _v0);
    return (0, _v1.jsx)(_v4.ark.button, {
      ..._v3,
      ref: _v1
    });
  });
  _v14.displayName = "CarouselNextTrigger";
  let _v15 = (0, _v3.forwardRef)((_v0, _v1) => {
    let _v2 = _v6(),
      _v3 = (0, _v2.mergeProps)(_v2.getPrevTriggerProps(), _v0);
    return (0, _v1.jsx)(_v4.ark.button, {
      ..._v3,
      ref: _v1
    });
  });
  _v15.displayName = "CarouselPrevTrigger";
  var _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0);
  function _v19(_v0, _v1 = !1) {
    let _v2 = _v0.getBoundingClientRect(),
      _v3 = {
        x: {
          start: [],
          center: [],
          end: []
        },
        y: {
          start: [],
          center: [],
          end: []
        }
      },
      _v4 = _v1 ? function _v0(_v1) {
        let _v2 = [];
        for (let _v0 of _v1.children) _v2 = _v2.concat(_v0, _v0(_v0));
        return _v2;
      }(_v0) : _v0.children;
    for (let _v0 of ["x", "y"]) {
      let _v0 = "x" === _v0 ? "y" : "x",
        _v1 = "x" === _v0 ? "left" : "top",
        _v2 = "x" === _v0 ? "width" : "height",
        _v3 = "x" === _v0 ? "scrollLeft" : "scrollTop";
      for (let _v0 of _v4) {
        let _v0 = _v0.getBoundingClientRect();
        if (!function (_v0, _v1, _v2 = "both") {
          return "x" === _v2 && _v0.right >= _v1.left && _v0.left <= _v1.right || "y" === _v2 && _v0.bottom >= _v1.top && _v0.top <= _v1.bottom || "both" === _v2 && _v0.right >= _v1.left && _v0.left <= _v1.right && _v0.bottom >= _v1.top && _v0.top <= _v1.bottom;
        }(_v2, _v0, _v0)) continue;
        let [_v1, _v2] = (0, _v17.getComputedStyle)(_v0).getPropertyValue("scroll-snap-align").split(" ");
        void 0 === _v2 && (_v2 = _v1);
        let _v3 = "x" === _v0 ? _v2 : _v1,
          _v4 = _v0[_v1] - _v2[_v1] + _v0[_v3];
        switch (_v3) {
          case "none":
            break;
          case "start":
            _v3[_v0].start.push({
              node: _v0,
              position: _v4
            });
            break;
          case "center":
            _v3[_v0].center.push({
              node: _v0,
              position: _v4 + _v0[_v2] / 2
            });
            break;
          case "end":
            _v3[_v0].end.push({
              node: _v0,
              position: _v4 + _v0[_v2]
            });
        }
      }
    }
    return _v3;
  }
  function _v20(_v0) {
    let _v1 = _v0.getBoundingClientRect(),
      _v2 = function (_v0) {
        let _v1 = (0, _v17.getComputedStyle)(_v0),
          _v2 = _v0.getBoundingClientRect(),
          _v3 = _v1.getPropertyValue("scroll-padding-left").replace("auto", "0px"),
          _v4 = _v1.getPropertyValue("scroll-padding-top").replace("auto", "0px"),
          _v5 = _v1.getPropertyValue("scroll-padding-right").replace("auto", "0px"),
          _v6 = _v1.getPropertyValue("scroll-padding-bottom").replace("auto", "0px");
        function _v7(_v0, _v1) {
          let _v2 = parseFloat(_v0);
          return /%/.test(_v0) && (_v2 /= 100, _v2 *= _v1), Number.isNaN(_v2) ? 0 : _v2;
        }
        let _v8 = _v7(_v3, _v2.width),
          _v9 = _v7(_v4, _v2.height);
        return {
          x: {
            before: _v8,
            after: _v7(_v5, _v2.width)
          },
          y: {
            before: _v9,
            after: _v7(_v6, _v2.height)
          }
        };
      }(_v0),
      _v3 = _v19(_v0),
      _v4 = {
        x: _v0.scrollWidth - _v0.offsetWidth,
        y: _v0.scrollHeight - _v0.offsetHeight
      };
    return {
      x: _v21([..._v3.x.start.map(_v0 => _v0.position - _v2.x.before), ..._v3.x.center.map(_v0 => _v0.position - _v1.width / 2), ..._v3.x.end.map(_v0 => _v0.position - _v1.width + _v2.x.after)].map(_v22(0, _v4.x))),
      y: _v21([..._v3.y.start.map(_v0 => _v0.position - _v2.y.before), ..._v3.y.center.map(_v0 => _v0.position - _v1.height / 2), ..._v3.y.end.map(_v0 => _v0.position - _v1.height + _v2.y.after)].map(_v22(0, _v4.y)))
    };
  }
  var _v21 = _v0 => [...new Set(_v0)],
    _v22 = (_v0, _v1) => _v0 => Math.max(_v0, Math.min(_v1, _v0)),
    _v23 = _v0.i(0),
    _v24 = (0, _v16.createAnatomy)("carousel").parts("root", "itemGroup", "item", "control", "nextTrigger", "prevTrigger", "indicatorGroup", "indicator", "autoplayTrigger").build(),
    _v25 = _v0 => _v0.ids?.itemGroup ?? `carousel:${_v0.id}:item-group`,
    _v26 = (_v0, _v1) => _v0.ids?.indicator?.(_v1) ?? `carousel:${_v0.id}:indicator:${_v1}`,
    _v27 = _v0 => _v0.getById(_v25(_v0)),
    _v28 = _v0 => (0, _v17.queryAll)(_v27(_v0), "[data-part=item]"),
    _v29 = _v0 => {
      let _v1 = _v27(_v0);
      if (!_v1) return;
      let _v2 = (0, _v17.getTabbables)(_v1);
      _v1.setAttribute("tabindex", _v2.length > 0 ? "-1" : "0");
    },
    _v30 = (0, _v2.createMachine)({
      props: ({
        props: _v0
      }) => ((0, _v18.ensureProps)(_v0, ["slideCount"], "carousel"), {
        dir: "ltr",
        defaultPage: 0,
        orientation: "horizontal",
        snapType: "mandatory",
        loop: !!_v0.autoplay,
        slidesPerPage: 1,
        slidesPerMove: "auto",
        spacing: "0px",
        autoplay: !1,
        allowMouseDrag: !1,
        inViewThreshold: .6,
        ..._v0,
        translations: {
          nextTrigger: "Next slide",
          prevTrigger: "Previous slide",
          indicator: _v0 => `Go to slide ${_v0 + 1}`,
          item: (_v0, _v1) => `${_v0 + 1} of ${_v1}`,
          autoplayStart: "Start slide rotation",
          autoplayStop: "Stop slide rotation",
          ..._v0.translations
        }
      }),
      refs: () => ({
        timeoutRef: void 0
      }),
      initialState: ({
        prop: _v0
      }) => _v0("autoplay") ? "autoplay" : "idle",
      context: ({
        prop: _v0,
        bindable: _v1,
        getContext: _v2
      }) => ({
        page: _v1(() => ({
          defaultValue: _v0("defaultPage"),
          value: _v0("page"),
          onChange(_v0) {
            let _v1 = _v2().get("pageSnapPoints");
            _v0("onPageChange")?.({
              page: _v0,
              pageSnapPoint: _v1[_v0]
            });
          }
        })),
        pageSnapPoints: _v1(() => ({
          defaultValue: function (_v0, _v1, _v2) {
            if (null == _v0 || _v2 <= 0) return [];
            let _v3 = [],
              _v4 = "auto" === _v1 ? Math.floor(_v2) : _v1;
            if (_v4 <= 0) return [];
            for (let _v0 = 0; _v0 < _v0 - 1; _v0 += _v4) _v3.push(_v0);
            return _v3;
          }(_v0("slideCount"), _v0("slidesPerMove"), _v0("slidesPerPage"))
        })),
        slidesInView: _v1(() => ({
          defaultValue: []
        }))
      }),
      computed: {
        isRtl: ({
          prop: _v0
        }) => "rtl" === _v0("dir"),
        isHorizontal: ({
          prop: _v0
        }) => "horizontal" === _v0("orientation"),
        canScrollNext: ({
          prop: _v0,
          context: _v1
        }) => _v0("loop") || _v1.get("page") < _v1.get("pageSnapPoints").length - 1,
        canScrollPrev: ({
          prop: _v0,
          context: _v1
        }) => _v0("loop") || _v1.get("page") > 0,
        autoplayInterval: ({
          prop: _v0
        }) => {
          let _v1 = _v0("autoplay");
          return (0, _v18.isObject)(_v1) ? _v1.delay : 0;
        }
      },
      watch({
        track: _v0,
        action: _v1,
        context: _v2,
        prop: _v3
      }) {
        _v0([() => _v3("slidesPerPage"), () => _v3("slidesPerMove")], () => {
          _v1(["setSnapPoints"]);
        }), _v0([() => _v2.get("page")], () => {
          _v1(["scrollToPage", "focusIndicatorEl"]);
        }), _v0([() => _v3("orientation")], () => {
          _v1(["setSnapPoints", "scrollToPage"]);
        });
      },
      on: {
        "PAGE.NEXT": {
          target: "idle",
          actions: ["clearScrollEndTimer", "setNextPage"]
        },
        "PAGE.PREV": {
          target: "idle",
          actions: ["clearScrollEndTimer", "setPrevPage"]
        },
        "PAGE.SET": {
          target: "idle",
          actions: ["clearScrollEndTimer", "setPage"]
        },
        "INDEX.SET": {
          target: "idle",
          actions: ["clearScrollEndTimer", "setMatchingPage"]
        },
        "SNAP.REFRESH": {
          actions: ["setSnapPoints", "clampPage"]
        },
        "PAGE.SCROLL": {
          actions: ["scrollToPage"]
        }
      },
      effects: ["trackSlideMutation", "trackSlideIntersections", "trackSlideResize"],
      entry: ["setSnapPoints", "setPage"],
      exit: ["clearScrollEndTimer"],
      states: {
        idle: {
          on: {
            "DRAGGING.START": {
              target: "dragging",
              actions: ["invokeDragStart"]
            },
            "AUTOPLAY.START": {
              target: "autoplay",
              actions: ["invokeAutoplayStart"]
            },
            "USER.SCROLL": {
              target: "userScroll"
            },
            "VIEWPORT.FOCUS": {
              target: "focus"
            }
          }
        },
        focus: {
          effects: ["trackKeyboardScroll"],
          on: {
            "VIEWPORT.BLUR": {
              target: "idle"
            },
            "PAGE.NEXT": {
              actions: ["clearScrollEndTimer", "setNextPage"]
            },
            "PAGE.PREV": {
              actions: ["clearScrollEndTimer", "setPrevPage"]
            },
            "PAGE.SET": {
              actions: ["clearScrollEndTimer", "setPage"]
            },
            "INDEX.SET": {
              actions: ["clearScrollEndTimer", "setMatchingPage"]
            },
            "USER.SCROLL": {
              target: "userScroll"
            }
          }
        },
        dragging: {
          effects: ["trackPointerMove"],
          entry: ["disableScrollSnap"],
          on: {
            DRAGGING: {
              actions: ["scrollSlides", "invokeDragging"]
            },
            "DRAGGING.END": {
              target: "idle",
              actions: ["endDragging", "invokeDraggingEnd"]
            }
          }
        },
        userScroll: {
          effects: ["trackScroll"],
          on: {
            "SCROLL.END": [{
              guard: "isFocused",
              target: "focus",
              actions: ["setClosestPage"]
            }, {
              target: "idle",
              actions: ["setClosestPage"]
            }]
          }
        },
        autoplay: {
          effects: ["trackDocumentVisibility", "trackScroll", "autoUpdateSlide"],
          exit: ["invokeAutoplayEnd"],
          on: {
            "AUTOPLAY.TICK": {
              actions: ["setNextPage", "invokeAutoplay"]
            },
            "DRAGGING.START": {
              target: "dragging",
              actions: ["invokeDragStart"]
            },
            "AUTOPLAY.PAUSE": {
              target: "idle"
            }
          }
        }
      },
      implementations: {
        guards: {
          isFocused: ({
            scope: _v0
          }) => _v0.isActiveElement(_v27(_v0))
        },
        effects: {
          autoUpdateSlide({
            computed: _v0,
            send: _v1
          }) {
            let _v2 = setInterval(() => {
              _v1({
                type: "AUTOPLAY.TICK",
                src: "autoplay.interval"
              });
            }, _v0("autoplayInterval"));
            return () => clearInterval(_v2);
          },
          trackSlideMutation({
            scope: _v0,
            send: _v1
          }) {
            let _v2 = _v27(_v0);
            if (!_v2) return;
            let _v3 = new (_v0.getWin().MutationObserver)(() => {
              _v1({
                type: "SNAP.REFRESH",
                src: "slide.mutation"
              }), _v29(_v0);
            });
            return _v29(_v0), _v3.observe(_v2, {
              childList: !0,
              subtree: !0
            }), () => _v3.disconnect();
          },
          trackSlideResize({
            scope: _v0,
            send: _v1
          }) {
            if (!_v27(_v0)) return;
            let _v2 = _v0.getWin(),
              _v3 = () => {
                _v1({
                  type: "SNAP.REFRESH",
                  src: "slide.resize"
                });
              };
            (0, _v17.raf)(() => {
              _v3(), (0, _v17.raf)(() => {
                _v1({
                  type: "PAGE.SCROLL",
                  instant: !0
                });
              });
            });
            let _v4 = new _v2.ResizeObserver(_v3);
            return _v28(_v0).forEach(_v0 => _v4.observe(_v0)), () => _v4.disconnect();
          },
          trackSlideIntersections({
            scope: _v0,
            prop: _v1,
            context: _v2
          }) {
            let _v3 = _v27(_v0),
              _v4 = new (_v0.getWin().IntersectionObserver)(_v0 => {
                let _v1 = _v0.reduce((_v0, _v1) => {
                  let _v2 = Number(_v1.target.dataset.index ?? "-1");
                  return null == _v2 || Number.isNaN(_v2) || -1 === _v2 ? _v0 : _v1.isIntersecting ? (0, _v18.add)(_v0, _v2) : (0, _v18.remove)(_v0, _v2);
                }, _v2.get("slidesInView"));
                _v2.set("slidesInView", (0, _v18.uniq)(_v1));
              }, {
                root: _v3,
                threshold: _v1("inViewThreshold")
              });
            return _v28(_v0).forEach(_v0 => _v4.observe(_v0)), () => _v4.disconnect();
          },
          trackScroll({
            send: _v0,
            refs: _v1,
            scope: _v2
          }) {
            let _v3 = _v27(_v2);
            if (_v3) return (0, _v17.addDomEvent)(_v3, "scroll", () => {
              clearTimeout(_v1.get("timeoutRef")), _v1.set("timeoutRef", void 0), _v1.set("timeoutRef", setTimeout(() => {
                _v0({
                  type: "SCROLL.END"
                });
              }, 150));
            }, {
              passive: !0
            });
          },
          trackDocumentVisibility({
            scope: _v0,
            send: _v1
          }) {
            let _v2 = _v0.getDoc();
            return (0, _v17.addDomEvent)(_v2, "visibilitychange", () => {
              "visible" !== _v2.visibilityState && _v1({
                type: "AUTOPLAY.PAUSE",
                src: "doc.hidden"
              });
            });
          },
          trackPointerMove({
            scope: _v0,
            send: _v1
          }) {
            let _v2 = _v0.getDoc();
            return (0, _v17.trackPointerMove)(_v2, {
              onPointerMove({
                event: _v0
              }) {
                _v1({
                  type: "DRAGGING",
                  left: -_v0.movementX,
                  top: -_v0.movementY
                });
              },
              onPointerUp() {
                _v1({
                  type: "DRAGGING.END"
                });
              }
            });
          },
          trackKeyboardScroll({
            scope: _v0,
            send: _v1,
            context: _v2
          }) {
            let _v3 = _v0.getWin();
            return (0, _v17.addDomEvent)(_v3, "keydown", _v0 => {
              switch (_v0.key) {
                case "ArrowRight":
                  _v0.preventDefault(), _v1({
                    type: "PAGE.NEXT"
                  });
                  break;
                case "ArrowLeft":
                  _v0.preventDefault(), _v1({
                    type: "PAGE.PREV"
                  });
                  break;
                case "Home":
                  _v0.preventDefault(), _v1({
                    type: "PAGE.SET",
                    index: 0
                  });
                  break;
                case "End":
                  _v0.preventDefault(), _v1({
                    type: "PAGE.SET",
                    index: _v2.get("pageSnapPoints").length - 1
                  });
              }
            }, {
              capture: !0
            });
          }
        },
        actions: {
          clearScrollEndTimer({
            refs: _v0
          }) {
            null != _v0.get("timeoutRef") && (clearTimeout(_v0.get("timeoutRef")), _v0.set("timeoutRef", void 0));
          },
          scrollToPage({
            context: _v0,
            event: _v1,
            scope: _v2,
            computed: _v3,
            flush: _v4
          }) {
            let _v5 = _v1.instant ? "instant" : "smooth",
              _v6 = (0, _v18.clampValue)(_v1.index ?? _v0.get("page"), 0, _v0.get("pageSnapPoints").length - 1),
              _v7 = _v27(_v2);
            if (!_v7) return;
            let _v8 = _v3("isHorizontal") ? "left" : "top";
            _v4(() => {
              _v7.scrollTo({
                [_v8]: _v0.get("pageSnapPoints")[_v6],
                behavior: _v5
              });
            });
          },
          setClosestPage({
            context: _v0,
            scope: _v1,
            computed: _v2
          }) {
            let _v3 = _v27(_v1);
            if (!_v3) return;
            let _v4 = _v2("isHorizontal") ? _v3.scrollLeft : _v3.scrollTop,
              _v5 = _v0.get("pageSnapPoints").findIndex(_v0 => 1 > Math.abs(_v0 - _v4));
            -1 !== _v5 && _v0.set("page", _v5);
          },
          setNextPage({
            context: _v0,
            prop: _v1,
            state: _v2
          }) {
            let _v3 = _v2.matches("autoplay") || _v1("loop"),
              _v4 = (0, _v18.nextIndex)(_v0.get("pageSnapPoints"), _v0.get("page"), {
                loop: _v3
              });
            _v0.set("page", _v4);
          },
          setPrevPage({
            context: _v0,
            prop: _v1,
            state: _v2
          }) {
            let _v3 = _v2.matches("autoplay") || _v1("loop"),
              _v4 = (0, _v18.prevIndex)(_v0.get("pageSnapPoints"), _v0.get("page"), {
                loop: _v3
              });
            _v0.set("page", _v4);
          },
          setMatchingPage({
            context: _v0,
            event: _v1,
            computed: _v2,
            scope: _v3
          }) {
            let _v4 = _v27(_v3);
            if (!_v4) return;
            let _v5 = function (_v0, _v1, _v2) {
              let _v3 = _v19(_v0);
              for (let _v0 of [..._v3[_v1].start, ..._v3[_v1].center, ..._v3[_v1].end]) if (_v2(_v0.node)) return _v0.position;
            }(_v4, _v2("isHorizontal") ? "x" : "y", _v0 => _v0.dataset.index === _v1.index.toString());
            if (null == _v5) return;
            let _v6 = _v0.get("pageSnapPoints").findIndex(_v0 => 1 > Math.abs(_v0 - _v5));
            _v0.set("page", _v6);
          },
          setPage({
            context: _v0,
            event: _v1
          }) {
            let _v2 = _v1.index ?? _v0.get("page");
            _v0.set("page", _v2);
          },
          clampPage({
            context: _v0
          }) {
            let _v1 = (0, _v18.clampValue)(_v0.get("page"), 0, _v0.get("pageSnapPoints").length - 1);
            _v0.set("page", _v1);
          },
          setSnapPoints({
            context: _v0,
            computed: _v1,
            scope: _v2
          }) {
            let _v3 = _v27(_v2);
            if (!_v3) return;
            let _v4 = _v20(_v3);
            _v0.set("pageSnapPoints", _v1("isHorizontal") ? _v4.x : _v4.y);
          },
          disableScrollSnap({
            scope: _v0
          }) {
            let _v1 = _v27(_v0);
            if (!_v1) return;
            let _v2 = getComputedStyle(_v1);
            _v1.dataset.scrollSnapType = _v2.getPropertyValue("scroll-snap-type"), _v1.style.setProperty("scroll-snap-type", "none");
          },
          scrollSlides({
            scope: _v0,
            event: _v1
          }) {
            let _v2 = _v27(_v0);
            _v2?.scrollBy({
              left: _v1.left,
              top: _v1.top,
              behavior: "instant"
            });
          },
          endDragging({
            scope: _v0,
            context: _v1,
            computed: _v2
          }) {
            let _v3 = _v27(_v0);
            if (!_v3) return;
            let _v4 = _v3.scrollLeft,
              _v5 = _v3.scrollTop,
              _v6 = _v20(_v3),
              _v7 = _v6.x.reduce((_v0, _v1) => Math.abs(_v1 - _v4) < Math.abs(_v0 - _v4) ? _v1 : _v0, _v6.x[0]),
              _v8 = _v6.y.reduce((_v0, _v1) => Math.abs(_v1 - _v5) < Math.abs(_v0 - _v5) ? _v1 : _v0, _v6.y[0]);
            (0, _v17.raf)(() => {
              _v3.scrollTo({
                left: _v7,
                top: _v8,
                behavior: "smooth"
              });
              let _v0 = _v2("isHorizontal") ? _v7 : _v8;
              _v1.set("page", _v1.get("pageSnapPoints").indexOf(_v0));
              let _v1 = _v3.dataset.scrollSnapType;
              _v1 && (_v3.style.setProperty("scroll-snap-type", _v1), delete _v3.dataset.scrollSnapType);
            });
          },
          focusIndicatorEl({
            context: _v0,
            event: _v1,
            scope: _v2
          }) {
            let _v3;
            if ("indicator" !== _v1.src) return;
            let _v4 = (_v3 = _v0.get("page"), _v2.getById(_v26(_v2, _v3)));
            _v4 && (0, _v17.raf)(() => _v4.focus({
              preventScroll: !0
            }));
          },
          invokeDragStart({
            context: _v0,
            prop: _v1
          }) {
            _v1("onDragStatusChange")?.({
              type: "dragging.start",
              isDragging: !0,
              page: _v0.get("page")
            });
          },
          invokeDragging({
            context: _v0,
            prop: _v1
          }) {
            _v1("onDragStatusChange")?.({
              type: "dragging",
              isDragging: !0,
              page: _v0.get("page")
            });
          },
          invokeDraggingEnd({
            context: _v0,
            prop: _v1
          }) {
            _v1("onDragStatusChange")?.({
              type: "dragging.end",
              isDragging: !1,
              page: _v0.get("page")
            });
          },
          invokeAutoplay({
            context: _v0,
            prop: _v1
          }) {
            _v1("onAutoplayStatusChange")?.({
              type: "autoplay",
              isPlaying: !0,
              page: _v0.get("page")
            });
          },
          invokeAutoplayStart({
            context: _v0,
            prop: _v1
          }) {
            _v1("onAutoplayStatusChange")?.({
              type: "autoplay.start",
              isPlaying: !0,
              page: _v0.get("page")
            });
          },
          invokeAutoplayEnd({
            context: _v0,
            prop: _v1
          }) {
            _v1("onAutoplayStatusChange")?.({
              type: "autoplay.stop",
              isPlaying: !1,
              page: _v0.get("page")
            });
          }
        }
      }
    }),
    _v31 = (0, _v23.createProps)()(["dir", "getRootNode", "id", "ids", "loop", "page", "defaultPage", "onPageChange", "orientation", "slideCount", "slidesPerPage", "slidesPerMove", "spacing", "padding", "autoplay", "allowMouseDrag", "inViewThreshold", "translations", "snapType", "onDragStatusChange", "onAutoplayStatusChange"]);
  (0, _v18.createSplitProps)(_v31);
  var _v32 = (0, _v23.createProps)()(["index", "readOnly"]);
  (0, _v18.createSplitProps)(_v32);
  var _v33 = (0, _v23.createProps)()(["index", "snapAlign"]);
  (0, _v18.createSplitProps)(_v33);
  var _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0);
  let _v37 = _v0 => {
    let _v1 = (0, _v3.useId)(),
      {
        getRootNode: _v2
      } = (0, _v35.useEnvironmentContext)(),
      {
        dir: _v3
      } = (0, _v36.useLocaleContext)(),
      _v4 = {
        id: _v1,
        dir: _v3,
        getRootNode: _v2,
        ..._v0
      };
    return function (_v0, _v1) {
      let {
          state: _v2,
          context: _v3,
          computed: _v4,
          send: _v5,
          scope: _v6,
          prop: _v7
        } = _v0,
        _v8 = _v2.matches("autoplay"),
        _v9 = _v2.matches("dragging"),
        _v10 = _v4("canScrollNext"),
        _v11 = _v4("canScrollPrev"),
        _v12 = _v4("isHorizontal"),
        _v13 = Array.from(_v3.get("pageSnapPoints")),
        _v14 = _v3.get("page"),
        _v15 = _v7("slidesPerPage"),
        _v16 = _v7("padding"),
        _v17 = _v7("translations");
      return {
        isPlaying: _v8,
        isDragging: _v9,
        page: _v14,
        pageSnapPoints: _v13,
        canScrollNext: _v10,
        canScrollPrev: _v11,
        getProgress: () => _v14 / _v13.length,
        scrollToIndex(_v0, _v1) {
          _v5({
            type: "INDEX.SET",
            index: _v0,
            instant: _v1
          });
        },
        scrollTo(_v0, _v1) {
          _v5({
            type: "PAGE.SET",
            index: _v0,
            instant: _v1
          });
        },
        scrollNext(_v0) {
          _v5({
            type: "PAGE.NEXT",
            instant: _v0
          });
        },
        scrollPrev(_v0) {
          _v5({
            type: "PAGE.PREV",
            instant: _v0
          });
        },
        play() {
          _v5({
            type: "AUTOPLAY.START"
          });
        },
        pause() {
          _v5({
            type: "AUTOPLAY.PAUSE"
          });
        },
        isInView: _v0 => Array.from(_v3.get("slidesInView")).includes(_v0),
        refresh() {
          _v5({
            type: "SNAP.REFRESH"
          });
        },
        getRootProps: () => _v1.element({
          ..._v24.root.attrs,
          id: _v6.ids?.root ?? `carousel:${_v6.id}`,
          role: "region",
          "aria-roledescription": "carousel",
          "data-orientation": _v7("orientation"),
          dir: _v7("dir"),
          style: {
            "--slides-per-page": _v15,
            "--slide-spacing": _v7("spacing"),
            "--slide-item-size": "calc(100% / var(--slides-per-page) - var(--slide-spacing) * (var(--slides-per-page) - 1) / var(--slides-per-page))"
          }
        }),
        getItemGroupProps: () => _v1.element({
          ..._v24.itemGroup.attrs,
          id: _v25(_v6),
          "data-orientation": _v7("orientation"),
          "data-dragging": (0, _v17.dataAttr)(_v9),
          dir: _v7("dir"),
          "aria-live": _v8 ? "off" : "polite",
          onFocus(_v0) {
            (0, _v17.isSelfTarget)(_v0) && _v5({
              type: "VIEWPORT.FOCUS"
            });
          },
          onBlur(_v0) {
            (0, _v17.contains)(_v0.currentTarget, _v0.relatedTarget) || _v5({
              type: "VIEWPORT.BLUR"
            });
          },
          onMouseDown(_v0) {
            if (!_v7("allowMouseDrag") || 0 !== _v0.button || _v0.defaultPrevented) return;
            let _v1 = (0, _v17.getEventTarget)(_v0);
            (0, _v17.isFocusable)(_v1) && _v1 !== _v0.currentTarget || (_v0.preventDefault(), _v5({
              type: "DRAGGING.START"
            }));
          },
          onWheel: (0, _v18.throttle)(_v0 => {
            let _v1 = "horizontal" === _v7("orientation") ? "deltaX" : "deltaY";
            _v0[_v1] < 0 && !_v4("canScrollPrev") || (!(_v0[_v1] > 0) || _v4("canScrollNext")) && _v5({
              type: "USER.SCROLL"
            });
          }, 150),
          onTouchStart() {
            _v5({
              type: "USER.SCROLL"
            });
          },
          style: {
            display: "grid",
            gap: "var(--slide-spacing)",
            scrollSnapType: [_v12 ? "x" : "y", _v7("snapType")].join(" "),
            gridAutoFlow: _v12 ? "column" : "row",
            scrollbarWidth: "none",
            overscrollBehavior: "contain",
            [_v12 ? "gridAutoColumns" : "gridAutoRows"]: "var(--slide-item-size)",
            [_v12 ? "scrollPaddingInline" : "scrollPaddingBlock"]: _v16,
            [_v12 ? "paddingInline" : "paddingBlock"]: _v16,
            [_v12 ? "overflowX" : "overflowY"]: "auto"
          }
        }),
        getItemProps(_v0) {
          let _v1,
            _v2,
            _v3,
            _v4,
            _v5 = _v3.get("slidesInView").includes(_v0.index);
          return _v1.element({
            ..._v24.item.attrs,
            id: (_v1 = _v0.index, _v6.ids?.item?.(_v1) ?? `carousel:${_v6.id}:item:${_v1}`),
            dir: _v7("dir"),
            role: "group",
            "data-index": _v0.index,
            "data-inview": (0, _v17.dataAttr)(_v5),
            "aria-roledescription": "slide",
            "data-orientation": _v7("orientation"),
            "aria-label": _v17.item(_v0.index, _v7("slideCount")),
            "aria-hidden": (0, _v17.ariaAttr)(!_v5),
            style: {
              scrollSnapAlign: (_v2 = _v0.snapAlign ?? "start", _v4 = "auto" === (_v3 = _v7("slidesPerMove")) ? Math.floor(_v7("slidesPerPage")) : _v3, (_v0.index + _v4) % _v4 == 0 ? _v2 : void 0)
            }
          });
        },
        getControlProps: () => _v1.element({
          ..._v24.control.attrs,
          "data-orientation": _v7("orientation")
        }),
        getPrevTriggerProps: () => _v1.button({
          ..._v24.prevTrigger.attrs,
          id: _v6.ids?.prevTrigger ?? `carousel:${_v6.id}:prev-trigger`,
          type: "button",
          disabled: !_v11,
          dir: _v7("dir"),
          "aria-label": _v17.prevTrigger,
          "data-orientation": _v7("orientation"),
          "aria-controls": _v25(_v6),
          onClick(_v0) {
            _v0.defaultPrevented || _v5({
              type: "PAGE.PREV",
              src: "trigger"
            });
          }
        }),
        getNextTriggerProps: () => _v1.button({
          ..._v24.nextTrigger.attrs,
          dir: _v7("dir"),
          id: _v6.ids?.nextTrigger ?? `carousel:${_v6.id}:next-trigger`,
          type: "button",
          "aria-label": _v17.nextTrigger,
          "data-orientation": _v7("orientation"),
          "aria-controls": _v25(_v6),
          disabled: !_v10,
          onClick(_v0) {
            _v0.defaultPrevented || _v5({
              type: "PAGE.NEXT",
              src: "trigger"
            });
          }
        }),
        getIndicatorGroupProps: () => _v1.element({
          ..._v24.indicatorGroup.attrs,
          dir: _v7("dir"),
          id: _v6.ids?.indicatorGroup ?? `carousel:${_v6.id}:indicator-group`,
          "data-orientation": _v7("orientation"),
          onKeyDown(_v0) {
            if (_v0.defaultPrevented) return;
            let _v1 = "indicator",
              _v2 = {
                ArrowDown(_v0) {
                  _v12 || (_v5({
                    type: "PAGE.NEXT",
                    src: _v1
                  }), _v0.preventDefault());
                },
                ArrowUp(_v0) {
                  _v12 || (_v5({
                    type: "PAGE.PREV",
                    src: _v1
                  }), _v0.preventDefault());
                },
                ArrowRight(_v0) {
                  _v12 && (_v5({
                    type: "PAGE.NEXT",
                    src: _v1
                  }), _v0.preventDefault());
                },
                ArrowLeft(_v0) {
                  _v12 && (_v5({
                    type: "PAGE.PREV",
                    src: _v1
                  }), _v0.preventDefault());
                },
                Home(_v0) {
                  _v5({
                    type: "PAGE.SET",
                    index: 0,
                    src: _v1
                  }), _v0.preventDefault();
                },
                End(_v0) {
                  _v5({
                    type: "PAGE.SET",
                    index: _v13.length - 1,
                    src: _v1
                  }), _v0.preventDefault();
                }
              }[(0, _v17.getEventKey)(_v0, {
                dir: _v7("dir"),
                orientation: _v7("orientation")
              })];
            _v2?.(_v0);
          }
        }),
        getIndicatorProps: _v0 => _v1.button({
          ..._v24.indicator.attrs,
          dir: _v7("dir"),
          id: _v26(_v6, _v0.index),
          type: "button",
          "data-orientation": _v7("orientation"),
          "data-index": _v0.index,
          "data-readonly": (0, _v17.dataAttr)(_v0.readOnly),
          "data-current": (0, _v17.dataAttr)(_v0.index === _v14),
          "aria-label": _v17.indicator(_v0.index),
          onClick(_v0) {
            _v0.defaultPrevented || _v0.readOnly || _v5({
              type: "PAGE.SET",
              index: _v0.index,
              src: "indicator"
            });
          }
        }),
        getAutoplayTriggerProps: () => _v1.button({
          ..._v24.autoplayTrigger.attrs,
          type: "button",
          "data-orientation": _v7("orientation"),
          "data-pressed": (0, _v17.dataAttr)(_v8),
          "aria-label": _v8 ? _v17.autoplayStop : _v17.autoplayStart,
          onClick(_v0) {
            _v0.defaultPrevented || _v5({
              type: _v8 ? "AUTOPLAY.PAUSE" : "AUTOPLAY.START"
            });
          }
        })
      };
    }((0, _v34.useMachine)(_v30, _v4), _v34.normalizeProps);
  };
  _v0.s(["useCarousel", 0, _v37], 0);
  let _v38 = (0, _v3.forwardRef)((_v0, _v1) => {
    let [_v2, _v3] = (0, _v9.createSplitProps)()(_v0, ["allowMouseDrag", "autoplay", "defaultPage", "id", "ids", "inViewThreshold", "loop", "onAutoplayStatusChange", "onDragStatusChange", "onPageChange", "orientation", "padding", "page", "slideCount", "slidesPerMove", "slidesPerPage", "snapType", "spacing", "translations"]),
      _v4 = _v37(_v2),
      _v5 = (0, _v2.mergeProps)(_v4.getRootProps(), _v3);
    return (0, _v1.jsx)(_v5, {
      value: _v4,
      children: (0, _v1.jsx)(_v4.ark.div, {
        ..._v5,
        ref: _v1
      })
    });
  });
  _v38.displayName = "CarouselRoot";
  let _v39 = (0, _v3.forwardRef)((_v0, _v1) => {
    let [{
        value: _v2
      }, _v3] = (0, _v9.createSplitProps)()(_v0, ["value"]),
      _v4 = (0, _v2.mergeProps)(_v2.getRootProps(), _v3);
    return (0, _v1.jsx)(_v5, {
      value: _v2,
      children: (0, _v1.jsx)(_v4.ark.div, {
        ..._v4,
        ref: _v1
      })
    });
  });
  _v39.displayName = "CarouselRootProvider", _v0.s(["AutoplayTrigger", 0, _v7, "Context", 0, _v0 => _v0.children(_v6()), "Control", 0, _v8, "Indicator", 0, _v10, "IndicatorGroup", 0, _v11, "Item", 0, _v12, "ItemGroup", 0, _v13, "NextTrigger", 0, _v14, "PrevTrigger", 0, _v15, "Root", 0, _v38, "RootProvider", 0, _v39], 0);
  var _v40 = _v0.i(0),
    _v40 = _v40,
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0);
  let {
      Root: _v46,
      AutoplayTrigger: _v47,
      Control: _v48,
      IndicatorGroup: _v49,
      Indicator: _v50,
      ItemGroup: _v51,
      Item: _v52,
      NextTrigger: _v53,
      PrevTrigger: _v54,
      RootProvider: _v55
    } = _v40,
    [_v56, _v57] = (0, _v42.createStylesContext)("Carousel");
  _v0.s(["Carousel", 0, ({
    children: _v0,
    size: _v1,
    ..._v2
  }) => {
    let {
        slideCount: _v3,
        allowMouseDrag: _v4,
        autoplay: _v5,
        defaultPage: _v6,
        ids: _v7,
        inViewThreshold: _v8,
        loop: _v9,
        onAutoplayStatusChange: _v10,
        onDragStatusChange: _v11,
        onPageChange: _v12,
        orientation: _v13,
        padding: _v14,
        page: _v15,
        slidesPerMove: _v16,
        slidesPerPage: _v17,
        snapType: _v18,
        spacing: _v19,
        translations: _v20,
        ..._v21
      } = _v2,
      _v22 = (0, _v41.useMultiStyleConfig)("Carousel", {
        size: _v1
      });
    return (0, _v1.jsx)(_v56, {
      value: _v22,
      children: (0, _v1.jsx)(_v46, {
        asChild: !0,
        ...{
          autoplay: _v5,
          defaultPage: _v6,
          ids: _v7,
          inViewThreshold: _v8,
          loop: _v9,
          onAutoplayStatusChange: _v10,
          onDragStatusChange: _v11,
          onPageChange: _v12,
          orientation: _v13,
          padding: _v14,
          page: _v15,
          slidesPerMove: _v16,
          slidesPerPage: _v17,
          snapType: _v18,
          spacing: _v19,
          translations: _v20,
          slideCount: _v3,
          allowMouseDrag: _v4
        },
        children: (0, _v1.jsx)(_v43.Box, {
          __css: _v22.root,
          ..._v21,
          children: _v0
        })
      })
    });
  }, "CarouselAutoplayTrigger", 0, _v47, "CarouselControl", 0, ({
    children: _v0,
    ..._v1
  }) => {
    let _v2 = _v57();
    return (0, _v1.jsx)(_v48, {
      asChild: !0,
      children: (0, _v1.jsx)(_v43.Box, {
        __css: _v2.control,
        ..._v1,
        children: _v0
      })
    });
  }, "CarouselControlBase", 0, _v48, "CarouselIndicator", 0, ({
    children: _v0,
    index: _v1,
    readOnly: _v2,
    size: _v3,
    ..._v4
  }) => {
    let _v5 = _v57(),
      _v6 = (0, _v41.useMultiStyleConfig)("Carousel", {
        size: _v3
      }),
      _v7 = _v3 ? _v6 : _v5;
    return (0, _v1.jsx)(_v50, {
      asChild: !0,
      index: _v1,
      readOnly: _v2,
      children: (0, _v1.jsx)(_v43.Box, {
        as: "button",
        __css: _v7.indicator,
        ..._v4,
        children: _v0
      })
    });
  }, "CarouselIndicatorBase", 0, _v50, "CarouselIndicatorGroup", 0, ({
    children: _v0,
    ..._v1
  }) => {
    let _v2 = _v57();
    return (0, _v1.jsx)(_v49, {
      asChild: !0,
      children: (0, _v1.jsx)(_v43.Box, {
        __css: _v2.indicatorGroup,
        ..._v1,
        children: _v0
      })
    });
  }, "CarouselIndicatorGroupBase", 0, _v49, "CarouselItem", 0, ({
    index: _v0,
    children: _v1,
    ..._v2
  }) => {
    let _v3 = _v57();
    return (0, _v1.jsx)(_v52, {
      index: _v0,
      asChild: !0,
      children: (0, _v1.jsx)(_v43.Box, {
        __css: _v3.item,
        ..._v2,
        children: _v1
      })
    });
  }, "CarouselItemBase", 0, _v52, "CarouselItemGroup", 0, ({
    children: _v0,
    ..._v1
  }) => {
    let _v2 = _v57();
    return (0, _v1.jsx)(_v51, {
      asChild: !0,
      children: (0, _v1.jsx)(_v43.Box, {
        __css: _v2.itemGroup,
        ..._v1,
        children: _v0
      })
    });
  }, "CarouselNextTrigger", 0, ({
    children: _v0,
    size: _v1,
    ..._v2
  }) => {
    let _v3 = _v57(),
      _v4 = (0, _v41.useMultiStyleConfig)("Carousel", {
        size: _v1
      }),
      _v5 = _v1 ? _v4 : _v3;
    return (0, _v1.jsx)(_v53, {
      asChild: !0,
      children: (0, _v1.jsx)(_v43.Box, {
        as: "button",
        "data-type": "icon-button",
        right: "0",
        __css: _v5.trigger,
        ..._v2,
        children: _v0 || (0, _v1.jsx)(_v44.ChevronRight, {})
      })
    });
  }, "CarouselNextTriggerBase", 0, _v53, "CarouselPrevTrigger", 0, ({
    children: _v0,
    size: _v1,
    ..._v2
  }) => {
    let _v3 = _v57(),
      _v4 = (0, _v41.useMultiStyleConfig)("Carousel", {
        size: _v1
      }),
      _v5 = _v1 ? _v4 : _v3;
    return (0, _v1.jsx)(_v54, {
      asChild: !0,
      children: (0, _v1.jsx)(_v43.Box, {
        as: "button",
        "data-type": "icon-button",
        left: "0",
        __css: _v5.trigger,
        ..._v2,
        children: _v0 || (0, _v1.jsx)(_v45.ChevronLeft, {})
      })
    });
  }, "CarouselPrevTriggerBase", 0, _v54, "CarouselRootBase", 0, _v46, "CarouselRootProvider", 0, _v55], 0);
}