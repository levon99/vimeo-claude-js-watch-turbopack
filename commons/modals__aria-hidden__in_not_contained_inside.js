{
  "use strict";

  var _v1,
    _v2,
    _v3,
    _v4,
    _v5,
    _v6 = Object.defineProperty,
    _v7 = _v0.i(0),
    _v8 = new class {
      constructor() {
        ((_v0, _v1, _v2) => {
          let _v3;
          return (_v3 = "symbol" != typeof _v1 ? _v1 + "" : _v1) in _v0 ? _v6(_v0, _v3, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: _v2
          }) : _v0[_v3] = _v2;
        })(this, "modals"), this.modals = new Map();
      }
      add(_v0) {
        return this.modals.set(_v0, this.modals.size + 1), this.modals.size;
      }
      remove(_v0) {
        this.modals.delete(_v0);
      }
      isTopModal(_v0) {
        return !!_v0 && this.modals.get(_v0) === this.modals.size;
      }
    }();
  function _v9(_v0, _v1) {
    let [_v2, _v3] = (0, _v7.useState)(0);
    return (0, _v7.useEffect)(() => {
      let _v0 = _v0.current;
      if (_v0) return _v1 && _v3(_v8.add(_v0)), () => {
        _v8.remove(_v0), _v3(0);
      };
    }, [_v1, _v0]), _v2;
  }
  var _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = new WeakMap(),
    _v13 = new WeakMap(),
    _v14 = {},
    _v15 = 0,
    _v16 = function (_v0) {
      return _v0 && (_v0.host || _v16(_v0.parentNode));
    },
    _v17 = function (_v0, _v1, _v2, _v3) {
      var _v4 = (Array.isArray(_v0) ? _v0 : [_v0]).map(function (_v0) {
        if (_v1.contains(_v0)) return _v0;
        var _v1 = _v16(_v0);
        return _v1 && _v1.contains(_v1) ? _v1 : (console.error("aria-hidden", _v0, "in not contained inside", _v1, ". Doing nothing"), null);
      }).filter(function (_v0) {
        return !!_v0;
      });
      _v14[_v2] || (_v14[_v2] = new WeakMap());
      var _v5 = _v14[_v2],
        _v6 = [],
        _v7 = new Set(),
        _v8 = new Set(_v4),
        _v9 = function (_v0) {
          !_v0 || _v7.has(_v0) || (_v7.add(_v0), _v9(_v0.parentNode));
        };
      _v4.forEach(_v9);
      var _v10 = function (_v0) {
        !_v0 || _v8.has(_v0) || Array.prototype.forEach.call(_v0.children, function (_v0) {
          if (_v7.has(_v0)) _v10(_v0);else try {
            var _v1 = _v0.getAttribute(_v3),
              _v2 = null !== _v1 && "false" !== _v1,
              _v3 = (_v12.get(_v0) || 0) + 1,
              _v4 = (_v5.get(_v0) || 0) + 1;
            _v12.set(_v0, _v3), _v5.set(_v0, _v4), _v6.push(_v0), 1 === _v3 && _v2 && _v13.set(_v0, !0), 1 === _v4 && _v0.setAttribute(_v2, "true"), _v2 || _v0.setAttribute(_v3, "true");
          } catch (_v0) {
            console.error("aria-hidden: cannot operate on ", _v0, _v0);
          }
        });
      };
      return _v10(_v1), _v7.clear(), _v15++, function () {
        _v6.forEach(function (_v0) {
          var _v1 = _v12.get(_v0) - 1,
            _v2 = _v5.get(_v0) - 1;
          _v12.set(_v0, _v1), _v5.set(_v0, _v2), _v1 || (_v13.has(_v0) || _v0.removeAttribute(_v3), _v13.delete(_v0)), _v2 || _v0.removeAttribute(_v2);
        }), --_v15 || (_v12 = new WeakMap(), _v12 = new WeakMap(), _v13 = new WeakMap(), _v14 = {});
      };
    },
    _v18 = function (_v0, _v1, _v2) {
      void 0 === _v2 && (_v2 = "data-aria-hidden");
      var _v3 = Array.from(Array.isArray(_v0) ? _v0 : [_v0]),
        _v4 = _v1 || ("u" < typeof document ? null : (Array.isArray(_v0) ? _v0[0] : _v0).ownerDocument.body);
      return _v4 ? (_v3.push.apply(_v3, Array.from(_v4.querySelectorAll("[aria-live], script"))), _v17(_v3, _v4, _v2, "aria-hidden")) : function () {
        return null;
      };
    },
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    [_v24, _v25] = (0, _v20.createContext)({
      name: "ModalStylesContext",
      errorMessage: "useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Modal />\" "
    }),
    [_v26, _v27] = (0, _v20.createContext)({
      strict: !0,
      name: "ModalContext",
      errorMessage: "useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"
    }),
    _v28 = _v0 => {
      let _v1 = {
          scrollBehavior: "outside",
          autoFocus: !0,
          trapFocus: !0,
          returnFocusOnClose: !0,
          blockScrollOnMount: !0,
          allowPinchZoom: !1,
          motionPreset: "scale",
          lockFocusAcrossFrames: !0,
          ..._v0
        },
        {
          portalProps: _v2,
          children: _v3,
          autoFocus: _v4,
          trapFocus: _v5,
          initialFocusRef: _v6,
          finalFocusRef: _v7,
          returnFocusOnClose: _v8,
          blockScrollOnMount: _v9,
          allowPinchZoom: _v10,
          preserveScrollBarGap: _v11,
          motionPreset: _v12,
          lockFocusAcrossFrames: _v13,
          onCloseComplete: _v14
        } = _v1,
        _v15 = (0, _v21.useMultiStyleConfig)("Modal", _v1),
        _v16 = {
          ...function (_v0) {
            var _v1, _v2;
            let _v3,
              {
                isOpen: _v4,
                onClose: _v5,
                id: _v6,
                closeOnOverlayClick: _v7 = !0,
                closeOnEsc: _v8 = !0,
                useInert: _v9 = !0,
                onOverlayClick: _v10,
                onEsc: _v11
              } = _v0,
              _v12 = (0, _v7.useRef)(null),
              _v13 = (0, _v7.useRef)(null),
              [_v14, _v15, _v16] = function (_v0, ..._v1) {
                let _v2 = (0, _v7.useId)(),
                  _v3 = _v0 || _v2;
                return (0, _v7.useMemo)(() => _v1.map(_v0 => `${_v0}-${_v3}`), [_v3, _v1]);
              }(_v6, "chakra-modal", "chakra-modal--header", "chakra-modal--body");
            _v1 = _v12, _v2 = _v4 && _v9, _v3 = _v1.current, (0, _v7.useEffect)(() => {
              if (_v1.current && _v2) return _v18(_v1.current);
            }, [_v2, _v1, _v3]);
            let _v17 = _v9(_v12, _v4),
              _v18 = (0, _v7.useRef)(null),
              _v19 = (0, _v7.useCallback)(_v0 => {
                _v18.current = _v0.target;
              }, []),
              _v20 = (0, _v7.useCallback)(_v0 => {
                "Escape" === _v0.key && (_v0.stopPropagation(), _v8 && (null == _v5 || _v5()), null == _v11 || _v11());
              }, [_v8, _v5, _v11]),
              [_v21, _v22] = (0, _v7.useState)(!1),
              [_v23, _v24] = (0, _v7.useState)(!1),
              _v25 = (0, _v7.useCallback)((_v0 = {}, _v1 = null) => ({
                role: "dialog",
                ..._v0,
                ref: (0, _v11.mergeRefs)(_v1, _v12),
                id: _v14,
                tabIndex: -1,
                "aria-modal": !0,
                "aria-labelledby": _v21 ? _v15 : void 0,
                "aria-describedby": _v23 ? _v16 : void 0,
                onClick: (0, _v10.callAllHandlers)(_v0.onClick, _v0 => _v0.stopPropagation())
              }), [_v16, _v23, _v14, _v15, _v21]),
              _v26 = (0, _v7.useCallback)(_v0 => {
                _v0.stopPropagation(), _v18.current !== _v0.target || _v8.isTopModal(_v12.current) && (_v7 && (null == _v5 || _v5()), null == _v10 || _v10());
              }, [_v5, _v7, _v10]),
              _v27 = (0, _v7.useCallback)((_v0 = {}, _v1 = null) => ({
                ..._v0,
                ref: (0, _v11.mergeRefs)(_v1, _v13),
                onClick: (0, _v10.callAllHandlers)(_v0.onClick, _v26),
                onKeyDown: (0, _v10.callAllHandlers)(_v0.onKeyDown, _v20),
                onMouseDown: (0, _v10.callAllHandlers)(_v0.onMouseDown, _v19)
              }), [_v20, _v19, _v26]);
            return {
              isOpen: _v4,
              onClose: _v5,
              headerId: _v15,
              bodyId: _v16,
              setBodyMounted: _v24,
              setHeaderMounted: _v22,
              dialogRef: _v12,
              overlayRef: _v13,
              getDialogProps: _v25,
              getDialogContainerProps: _v27,
              index: _v17
            };
          }(_v1),
          autoFocus: _v4,
          trapFocus: _v5,
          initialFocusRef: _v6,
          finalFocusRef: _v7,
          returnFocusOnClose: _v8,
          blockScrollOnMount: _v9,
          allowPinchZoom: _v10,
          preserveScrollBarGap: _v11,
          motionPreset: _v12,
          lockFocusAcrossFrames: _v13
        };
      return (0, _v23.jsx)(_v26, {
        value: _v16,
        children: (0, _v23.jsx)(_v24, {
          value: _v15,
          children: (0, _v23.jsx)(_v22.AnimatePresence, {
            onExitComplete: _v14,
            children: _v16.isOpen && (0, _v23.jsx)(_v19.Portal, {
              ..._v2,
              children: _v3
            })
          })
        })
      });
    };
  _v28.displayName = "Modal", _v0.s(["Modal", 0, _v28, "useModalContext", 0, _v27, "useModalStyles", 0, _v25], 0), _v0.i(0);
  var _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = "data-focus-lock",
    _v32 = "data-focus-lock-disabled";
  function _v33(_v0, _v1) {
    return "function" == typeof _v0 ? _v0(_v1) : _v0 && (_v0.current = _v1), _v0;
  }
  var _v34 = _v0.i(0),
    _v35 = "u" > typeof window ? _v7.useLayoutEffect : _v7.useEffect,
    _v36 = new WeakMap();
  function _v37(_v0, _v1) {
    var _v2 = (0, _v34.useCallbackRef)(_v1 || null, function (_v0) {
      return _v0.forEach(function (_v0) {
        return _v33(_v0, _v0);
      });
    });
    return _v35(function () {
      var _v0 = _v36.get(_v2);
      if (_v0) {
        var _v1 = new Set(_v0),
          _v2 = new Set(_v0),
          _v3 = _v2.current;
        _v1.forEach(function (_v0) {
          _v2.has(_v0) || _v33(_v0, null);
        }), _v2.forEach(function (_v0) {
          _v1.has(_v0) || _v33(_v0, _v3);
        });
      }
      _v36.set(_v2, _v0);
    }, [_v0]), _v2;
  }
  var _v38 = {
      width: "1px",
      height: "0px",
      padding: 0,
      overflow: "hidden",
      position: "fixed",
      top: "1px",
      left: "1px"
    },
    _v39 = _v0.i(0);
  function _v40(_v0) {
    return _v0;
  }
  function _v41(_v0, _v1) {
    void 0 === _v1 && (_v1 = _v40);
    var _v2 = [],
      _v3 = !1;
    return {
      read: function () {
        if (_v3) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
        return _v2.length ? _v2[_v2.length - 1] : _v0;
      },
      useMedium: function (_v0) {
        var _v1 = _v1(_v0, _v3);
        return _v2.push(_v1), function () {
          _v2 = _v2.filter(function (_v0) {
            return _v0 !== _v1;
          });
        };
      },
      assignSyncMedium: function (_v0) {
        for (_v3 = !0; _v2.length;) {
          var _v1 = _v2;
          _v2 = [], _v1.forEach(_v0);
        }
        _v2 = {
          push: function (_v0) {
            return _v0(_v0);
          },
          filter: function () {
            return _v2;
          }
        };
      },
      assignMedium: function (_v0) {
        _v3 = !0;
        var _v1 = [];
        if (_v2.length) {
          var _v2 = _v2;
          _v2 = [], _v2.forEach(_v0), _v1 = _v2;
        }
        var _v3 = function () {
            var _v0 = _v1;
            _v1 = [], _v0.forEach(_v0);
          },
          _v4 = function () {
            return Promise.resolve().then(_v3);
          };
        _v4(), _v2 = {
          push: function (_v0) {
            _v1.push(_v0), _v4();
          },
          filter: function (_v0) {
            return _v1 = _v1.filter(_v0), _v2;
          }
        };
      }
    };
  }
  function _v42(_v0, _v1) {
    return void 0 === _v1 && (_v1 = _v40), _v41(_v0, _v1);
  }
  function _v43(_v0) {
    void 0 === _v0 && (_v0 = {});
    var _v1 = _v41(null);
    return _v1.options = (0, _v39.__assign)({
      async: !0,
      ssr: !1
    }, _v0), _v1;
  }
  var _v44 = _v42({}, function (_v0) {
      return {
        target: _v0.target,
        currentTarget: _v0.currentTarget
      };
    }),
    _v45 = _v42(),
    _v46 = _v42(),
    _v47 = _v43({
      async: !0,
      ssr: "u" > typeof document
    }),
    _v48 = (0, _v7.createContext)(void 0),
    _v49 = [],
    _v50 = (0, _v7.forwardRef)(function (_v0, _v1) {
      var _v2,
        _v3 = (0, _v7.useState)(),
        _v4 = _v3[0],
        _v5 = _v3[1],
        _v6 = (0, _v7.useRef)(),
        _v7 = (0, _v7.useRef)(!1),
        _v8 = (0, _v7.useRef)(null),
        _v9 = (0, _v7.useState)({})[1],
        _v10 = _v0.children,
        _v11 = _v0.disabled,
        _v12 = void 0 !== _v11 && _v11,
        _v13 = _v0.noFocusGuards,
        _v14 = void 0 !== _v13 && _v13,
        _v15 = _v0.persistentFocus,
        _v16 = _v0.crossFrame,
        _v17 = _v0.autoFocus,
        _v18 = (_v0.allowTextSelection, _v0.group),
        _v19 = _v0.className,
        _v20 = _v0.whiteList,
        _v21 = _v0.hasPositiveIndices,
        _v22 = _v0.shards,
        _v23 = void 0 === _v22 ? _v49 : _v22,
        _v24 = _v0.as,
        _v25 = _v0.lockProps,
        _v26 = _v0.sideCar,
        _v27 = _v0.returnFocus,
        _v28 = void 0 !== _v27 && _v27,
        _v29 = _v0.focusOptions,
        _v30 = _v0.onActivation,
        _v31 = _v0.onDeactivation,
        _v32 = (0, _v7.useState)({})[0],
        _v33 = (0, _v7.useCallback)(function (_v0) {
          var _v1 = _v0.captureFocusRestore;
          if (!_v8.current) {
            var _v2,
              _v3 = null == (_v2 = document) ? void 0 : _v2.activeElement;
            _v8.current = _v3, _v3 !== document.body && (_v8.current = _v1(_v3));
          }
          _v6.current && _v30 && _v30(_v6.current), _v7.current = !0, _v9();
        }, [_v30]),
        _v34 = (0, _v7.useCallback)(function () {
          _v7.current = !1, _v31 && _v31(_v6.current), _v9();
        }, [_v31]),
        _v35 = (0, _v7.useCallback)(function (_v0) {
          var _v1 = _v8.current;
          if (_v1) {
            var _v2 = ("function" == typeof _v1 ? _v1() : _v1) || document.body,
              _v3 = "function" == typeof _v28 ? _v28(_v2) : _v28;
            if (_v3) {
              var _v4 = "object" == typeof _v3 ? _v3 : void 0;
              _v8.current = null, _v0 ? Promise.resolve().then(function () {
                return _v2.focus(_v4);
              }) : _v2.focus(_v4);
            }
          }
        }, [_v28]),
        _v36 = (0, _v7.useCallback)(function (_v0) {
          _v7.current && _v44.useMedium(_v0);
        }, []),
        _v37 = _v45.useMedium,
        _v38 = (0, _v7.useCallback)(function (_v0) {
          _v6.current !== _v0 && (_v6.current = _v0, _v5(_v0));
        }, []),
        _v39 = (0, _v30.default)(((_v2 = {})[_v32] = _v12 && "disabled", _v2[_v31] = _v18, _v2), void 0 === _v25 ? {} : _v25),
        _v40 = !0 !== _v14,
        _v41 = _v40 && "tail" !== _v14,
        _v42 = _v37([_v1, _v38]),
        _v43 = (0, _v7.useMemo)(function () {
          return {
            observed: _v6,
            shards: _v23,
            enabled: !_v12,
            get active() {
              return _v7.current;
            }
          };
        }, [_v12, _v7, _v23, _v6]);
      return _v7.default.createElement(_v7.Fragment, null, _v40 && [_v7.default.createElement("div", {
        key: "guard-first",
        "data-focus-guard": !0,
        tabIndex: _v12 ? -1 : 0,
        style: _v38
      }), _v21 ? _v7.default.createElement("div", {
        key: "guard-nearest",
        "data-focus-guard": !0,
        tabIndex: _v12 ? -1 : 1,
        style: _v38
      }) : null], !_v12 && _v7.default.createElement(_v26, {
        id: _v32,
        sideCar: _v47,
        observed: _v4,
        disabled: _v12,
        persistentFocus: void 0 !== _v15 && _v15,
        crossFrame: void 0 === _v16 || _v16,
        autoFocus: void 0 === _v17 || _v17,
        whiteList: _v20,
        shards: _v23,
        onActivation: _v33,
        onDeactivation: _v34,
        returnFocus: _v35,
        focusOptions: _v29,
        noFocusGuards: _v14
      }), _v7.default.createElement(void 0 === _v24 ? "div" : _v24, (0, _v30.default)({
        ref: _v42
      }, _v39, {
        className: _v19,
        onBlur: _v37,
        onFocus: _v36
      }), _v7.default.createElement(_v48.Provider, {
        value: _v43
      }, _v10)), _v41 && _v7.default.createElement("div", {
        "data-focus-guard": !0,
        tabIndex: _v12 ? -1 : 0,
        style: _v38
      }));
    });
  _v50.propTypes = {};
  var _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = function (_v0, _v1) {
      _v0 && ("focus" in _v0 && _v0.focus(_v1), "contentWindow" in _v0 && _v0.contentWindow && _v0.contentWindow.focus());
    },
    _v54 = function (_v0) {
      if (_v0.nodeType !== Node.ELEMENT_NODE) return !1;
      var _v1 = window.getComputedStyle(_v0, null);
      return !!_v1 && !!_v1.getPropertyValue && ("none" === _v1.getPropertyValue("display") || "hidden" === _v1.getPropertyValue("visibility"));
    },
    _v55 = function (_v0) {
      return _v0.parentNode && _v0.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? _v0.parentNode.host : _v0.parentNode;
    },
    _v56 = function (_v0) {
      return _v0 === document || _v0 && _v0.nodeType === Node.DOCUMENT_NODE;
    },
    _v57 = function (_v0, _v1) {
      var _v2,
        _v3,
        _v4 = _v0.get(_v1);
      if (void 0 !== _v4) return _v4;
      var _v5 = (_v2 = _v1, _v3 = _v57.bind(void 0, _v0), !_v2 || _v56(_v2) || !_v54(_v2) && !_v2.hasAttribute("inert") && _v3(_v55(_v2)));
      return _v0.set(_v1, _v5), _v5;
    },
    _v58 = function (_v0, _v1) {
      var _v2,
        _v3 = _v0.get(_v1);
      if (void 0 !== _v3) return _v3;
      var _v4 = (_v2 = _v58.bind(void 0, _v0), !_v1 || !!_v56(_v1) || !!_v62(_v1) && _v2(_v55(_v1)));
      return _v0.set(_v1, _v4), _v4;
    },
    _v59 = function (_v0) {
      return _v0.dataset;
    },
    _v60 = function (_v0) {
      return "INPUT" === _v0.tagName;
    },
    _v61 = function (_v0) {
      return _v60(_v0) && "radio" === _v0.type;
    },
    _v62 = function (_v0) {
      return ![!0, "true", ""].includes(_v0.getAttribute("data-no-autofocus"));
    },
    _v63 = function (_v0) {
      var _v1;
      return !!(_v0 && (null == (_v1 = _v59(_v0)) ? void 0 : _v1.focusGuard));
    },
    _v64 = function (_v0) {
      return !_v63(_v0);
    },
    _v65 = function (_v0) {
      return !!_v0;
    },
    _v66 = function (_v0, _v1) {
      if (_v61(_v0) && _v0.name) return _v1.filter(_v61).filter(function (_v0) {
        return _v0.name === _v0.name;
      }).filter(function (_v0) {
        return _v0.checked;
      })[0] || _v0;
      return _v0;
    },
    _v67 = function (_v0) {
      var _v1 = new Set();
      return _v0.forEach(function (_v0) {
        return _v1.add(_v66(_v0, _v0));
      }), _v0.filter(function (_v0) {
        return _v1.has(_v0);
      });
    },
    _v68 = function (_v0) {
      return _v0[0] && _v0.length > 1 ? _v66(_v0[0], _v0) : _v0[0];
    },
    _v69 = function (_v0, _v1) {
      return _v0.indexOf(_v66(_v1, _v0));
    },
    _v70 = "NEW_FOCUS",
    _v71 = function (_v0, _v1, _v2, _v3, _v4) {
      var _v5 = _v0.length,
        _v6 = _v0[0],
        _v7 = _v0[_v5 - 1],
        _v8 = _v63(_v3);
      if (!(_v3 && _v0.indexOf(_v3) >= 0)) {
        var _v9 = void 0 !== _v3 ? _v2.indexOf(_v3) : -1,
          _v10 = _v4 ? _v2.indexOf(_v4) : _v9,
          _v11 = _v4 ? _v0.indexOf(_v4) : -1;
        if (-1 === _v9) return -1 !== _v11 ? _v11 : _v70;
        if (-1 === _v11) return _v70;
        var _v12 = _v9 - _v10,
          _v13 = _v2.indexOf(_v6),
          _v14 = _v2.indexOf(_v7),
          _v15 = _v67(_v2),
          _v16 = void 0 !== _v3 ? _v15.indexOf(_v3) : -1,
          _v17 = _v4 ? _v15.indexOf(_v4) : _v16,
          _v18 = _v15.filter(function (_v0) {
            return _v0.tabIndex >= 0;
          }),
          _v19 = void 0 !== _v3 ? _v18.indexOf(_v3) : -1,
          _v20 = _v4 ? _v18.indexOf(_v4) : _v19;
        if (!_v12 && _v11 >= 0 || 0 === _v1.length) return _v11;
        var _v21 = _v69(_v0, _v1[0]),
          _v22 = _v69(_v0, _v1[_v1.length - 1]);
        if (_v9 <= _v13 && _v8 && Math.abs(_v12) > 1) return _v22;
        if (_v9 >= _v14 && _v8 && Math.abs(_v12) > 1) return _v21;
        if (_v12 && Math.abs(_v19 >= 0 && _v20 >= 0 ? _v20 - _v19 : _v17 - _v16) > 1) return _v11;
        if (_v9 <= _v13) return _v22;
        if (_v9 > _v14) return _v21;
        if (_v12) return Math.abs(_v12) > 1 ? _v11 : (_v5 + _v11 + _v12) % _v5;
      }
    },
    _v72 = function (_v0) {
      for (var _v1 = Array(_v0.length), _v2 = 0; _v2 < _v0.length; ++_v2) _v1[_v2] = _v0[_v2];
      return _v1;
    },
    _v73 = function (_v0) {
      return Array.isArray(_v0) ? _v0 : [_v0];
    },
    _v74 = function (_v0) {
      return Array.isArray(_v0) ? _v0[0] : _v0;
    },
    _v75 = function (_v0, _v1) {
      var _v2 = Math.max(0, _v0.tabIndex),
        _v3 = Math.max(0, _v1.tabIndex),
        _v4 = _v2 - _v3,
        _v5 = _v0.index - _v1.index;
      if (_v4) {
        if (!_v2) return 1;
        if (!_v3) return -1;
      }
      return _v4 || _v5;
    },
    _v76 = function (_v0, _v1, _v2) {
      return _v72(_v0).map(function (_v0, _v1) {
        var _v2 = _v0.tabIndex < 0 && !_v0.hasAttribute("tabindex") ? 0 : _v0.tabIndex;
        return {
          node: _v0,
          index: _v1,
          tabIndex: _v2 && -1 === _v2 ? (_v0.dataset || {}).focusGuard ? 0 : -1 : _v2
        };
      }).filter(function (_v0) {
        return !_v1 || _v0.tabIndex >= 0;
      }).sort(_v75);
    },
    _v77 = "button:enabled,select:enabled,textarea:enabled,input:enabled,a[href],area[href],summary,iframe,object,embed,audio[controls],video[controls],[tabindex],[contenteditable],[autofocus]",
    _v78 = "".concat(_v77, ", [data-focus-guard]"),
    _v79 = function (_v0, _v1) {
      return _v72((_v0.shadowRoot || _v0).children).reduce(function (_v0, _v1) {
        return _v0.concat(_v1.matches(_v1 ? _v78 : _v77) ? [_v1] : [], _v79(_v1));
      }, []);
    },
    _v80 = function (_v0, _v1) {
      var _v2;
      return _v0 instanceof HTMLIFrameElement && (null == (_v2 = _v0.contentDocument) ? void 0 : _v2.body) ? _v81([_v0.contentDocument.body], _v1) : [_v0];
    },
    _v81 = function (_v0, _v1) {
      return _v0.reduce(function (_v0, _v1) {
        var _v2,
          _v3 = _v79(_v1, _v1),
          _v4 = (_v2 = []).concat.apply(_v2, _v3.map(function (_v0) {
            return _v80(_v0, _v1);
          }));
        return _v0.concat(_v4, _v1.parentNode ? _v72(_v1.parentNode.querySelectorAll(_v77)).filter(function (_v0) {
          return _v0 === _v1;
        }) : []);
      }, []);
    },
    _v82 = function (_v0, _v1) {
      return _v72(_v0).filter(function (_v0) {
        return _v57(_v1, _v0);
      }).filter(function (_v0) {
        var _v1;
        return !((_v60(_v1 = _v0) || "BUTTON" === _v1.tagName) && ("hidden" === _v1.type || _v1.disabled));
      });
    },
    _v83 = function (_v0, _v1) {
      return void 0 === _v1 && (_v1 = new Map()), _v72(_v0).filter(function (_v0) {
        return _v58(_v1, _v0);
      });
    },
    _v84 = function (_v0, _v1, _v2) {
      return _v76(_v82(_v81(_v0, _v2), _v1), !0, _v2);
    },
    _v85 = function (_v0, _v1) {
      return _v76(_v82(_v81(_v0), _v1), !1);
    },
    _v86 = function (_v0, _v1) {
      return _v0.shadowRoot ? _v86(_v0.shadowRoot, _v1) : !!(void 0 !== Object.getPrototypeOf(_v0).contains && Object.getPrototypeOf(_v0).contains.call(_v0, _v1)) || _v72(_v0.children).some(function (_v0) {
        var _v1;
        if (_v0 instanceof HTMLIFrameElement) {
          var _v2 = null == (_v1 = _v0.contentDocument) ? void 0 : _v1.body;
          return !!_v2 && _v86(_v2, _v1);
        }
        return _v86(_v0, _v1);
      });
    },
    _v87 = function (_v0) {
      for (var _v1 = new Set(), _v2 = _v0.length, _v3 = 0; _v3 < _v2; _v3 += 1) for (var _v4 = _v3 + 1; _v4 < _v2; _v4 += 1) {
        var _v5 = _v0[_v3].compareDocumentPosition(_v0[_v4]);
        (_v5 & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && _v1.add(_v4), (_v5 & Node.DOCUMENT_POSITION_CONTAINS) > 0 && _v1.add(_v3);
      }
      return _v0.filter(function (_v0, _v1) {
        return !_v1.has(_v1);
      });
    },
    _v88 = function (_v0) {
      return _v0.parentNode ? _v88(_v0.parentNode) : _v0;
    },
    _v89 = function (_v0) {
      return _v73(_v0).filter(Boolean).reduce(function (_v0, _v1) {
        var _v2 = _v1.getAttribute(_v31);
        return _v0.push.apply(_v0, _v2 ? _v87(_v72(_v88(_v1).querySelectorAll("[".concat(_v31, '="').concat(_v2, '"]:not([').concat(_v32, '="disabled"])')))) : [_v1]), _v0;
      }, []);
    },
    _v90 = function (_v0, _v1, _v2) {
      var _v3 = _v83(_v0.map(function (_v0) {
        return _v0.node;
      }).filter(function (_v0) {
        var _v1,
          _v2 = null == (_v1 = _v59(_v0)) ? void 0 : _v1.autofocus;
        return _v0.autofocus || void 0 !== _v2 && "false" !== _v2 || _v2.indexOf(_v0) >= 0;
      }));
      return _v3 && _v3.length ? _v68(_v3) : _v68(_v83(_v1));
    },
    _v91 = function (_v0) {
      try {
        return _v0();
      } catch (_v0) {
        return;
      }
    },
    _v92 = function (_v0) {
      if (void 0 === _v0 && (_v0 = document), _v0 && _v0.activeElement) {
        var _v1 = _v0.activeElement;
        return _v1.shadowRoot ? _v92(_v1.shadowRoot) : _v1 instanceof HTMLIFrameElement && _v91(function () {
          return _v1.contentWindow.document;
        }) ? _v92(_v1.contentWindow.document) : _v1;
      }
    },
    _v93 = function (_v0, _v1) {
      return void 0 === _v1 && (_v1 = []), _v1.push(_v0), _v0.parentNode && _v93(_v0.parentNode.host || _v0.parentNode, _v1), _v1;
    },
    _v94 = function (_v0, _v1) {
      for (var _v2 = _v93(_v0), _v3 = _v93(_v1), _v4 = 0; _v4 < _v2.length; _v4 += 1) {
        var _v5 = _v2[_v4];
        if (_v3.indexOf(_v5) >= 0) return _v5;
      }
      return !1;
    },
    _v95 = function (_v0, _v1, _v2) {
      var _v3 = _v73(_v0),
        _v4 = _v73(_v1),
        _v5 = _v3[0],
        _v6 = !1;
      return _v4.filter(Boolean).forEach(function (_v0) {
        _v6 = _v94(_v6 || _v0, _v0) || _v6, _v2.filter(Boolean).forEach(function (_v0) {
          var _v1 = _v94(_v5, _v0);
          _v1 && (_v6 = !_v6 || _v86(_v1, _v6) ? _v1 : _v94(_v1, _v6));
        });
      }), _v6;
    },
    _v96 = function (_v0, _v1) {
      return _v0.reduce(function (_v0, _v1) {
        var _v2, _v3;
        return _v0.concat((_v2 = _v1, _v3 = _v1, _v82(_v72(_v2.querySelectorAll("[".concat("data-autofocus-inside", "]"))).map(function (_v0) {
          return _v81([_v0]);
        }).reduce(function (_v0, _v1) {
          return _v0.concat(_v1);
        }, []), _v3)));
      }, []);
    },
    _v97 = function (_v0, _v1) {
      var _v2 = new Map();
      return _v1.forEach(function (_v0) {
        return _v2.set(_v0.node, _v0);
      }), _v0.map(function (_v0) {
        return _v2.get(_v0);
      }).filter(_v65);
    },
    _v98 = function (_v0, _v1) {
      var _v2 = _v92(_v73(_v0).length > 0 ? document : _v74(_v0).ownerDocument),
        _v3 = _v89(_v0).filter(_v64),
        _v4 = _v95(_v2 || _v0, _v0, _v3),
        _v5 = new Map(),
        _v6 = _v85(_v3, _v5),
        _v7 = _v6.filter(function (_v0) {
          return _v64(_v0.node);
        });
      if (_v7[0]) {
        var _v8 = _v85([_v4], _v5).map(function (_v0) {
            return _v0.node;
          }),
          _v9 = _v97(_v8, _v7),
          _v10 = _v9.map(function (_v0) {
            return _v0.node;
          }),
          _v11 = _v9.filter(function (_v0) {
            return _v0.tabIndex >= 0;
          }).map(function (_v0) {
            return _v0.node;
          }),
          _v12 = _v71(_v10, _v11, _v8, _v2, _v1);
        if (_v12 === _v70) {
          var _v13 = _v90(_v6, _v11, _v96(_v3, _v5)) || _v90(_v6, _v10, _v96(_v3, _v5));
          return _v13 ? {
            node: _v13
          } : void console.warn("focus-lock: cannot find any node to move focus into");
        }
        return void 0 === _v12 ? _v12 : _v9[_v12];
      }
    },
    _v99 = 0,
    _v100 = !1,
    _v101 = function (_v0, _v1, _v2) {
      void 0 === _v2 && (_v2 = {});
      var _v3 = _v98(_v0, _v1);
      if (!_v100 && _v3) {
        if (_v99 > 2) {
          console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), _v100 = !0, setTimeout(function () {
            _v100 = !1;
          }, 1);
          return;
        }
        _v99++, _v53(_v3.node, _v2.focusOptions), _v99--;
      }
    },
    _v102 = function (_v0, _v1) {
      return void 0 === _v1 && (_v1 = _v92(_v74(_v0).ownerDocument)), !!_v1 && (!_v1.dataset || !_v1.dataset.focusGuard) && _v89(_v0).some(function (_v0) {
        var _v1;
        return _v86(_v0, _v1) || (_v1 = _v1, !!_v72(_v0.querySelectorAll("iframe")).some(function (_v0) {
          return _v0 === _v1;
        }));
      });
    },
    _v103 = function (_v0) {
      void 0 === _v0 && (_v0 = document);
      var _v1 = _v92(_v0);
      return !!_v1 && _v72(_v0.querySelectorAll("[".concat("data-no-focus-lock", "]"))).some(function (_v0) {
        return _v86(_v0, _v1);
      });
    },
    _v104 = function (_v0) {
      var _v1 = _v89(_v0).filter(_v64),
        _v2 = _v76(_v81([_v95(_v0, _v0, _v1)], !0), !0, !0),
        _v3 = _v81(_v1, !1);
      return _v2.map(function (_v0) {
        var _v1 = _v0.node;
        return {
          node: _v1,
          index: _v0.index,
          lockItem: _v3.indexOf(_v1) >= 0,
          guard: _v63(_v1)
        };
      });
    },
    _v105 = function (_v0, _v1, _v2) {
      if (!_v0 || !_v1) return console.error("no element or scope given"), {};
      var _v3 = _v73(_v1);
      if (_v3.every(function (_v0) {
        return !_v86(_v0, _v0);
      })) return console.error("Active element is not contained in the scope"), {};
      var _v4 = _v2 ? _v84(_v3, new Map()) : _v85(_v3, new Map()),
        _v5 = _v4.findIndex(function (_v0) {
          return _v0.node === _v0;
        });
      if (-1 !== _v5) return {
        prev: _v4[_v5 - 1],
        next: _v4[_v5 + 1],
        first: _v4[0],
        last: _v4[_v4.length - 1]
      };
    },
    _v106 = function (_v0, _v1) {
      var _v2 = _v1 ? _v84(_v73(_v0), new Map()) : _v85(_v73(_v0), new Map());
      return {
        first: _v2[0],
        last: _v2[_v2.length - 1]
      };
    },
    _v107 = function (_v0, _v1, _v2) {
      void 0 === _v1 && (_v1 = {});
      var _v3,
        _v4 = (_v3 = _v1, Object.assign({
          scope: document.body,
          cycle: !0,
          onlyTabbable: !0
        }, _v3)),
        _v5 = _v105(_v0, _v4.scope, _v4.onlyTabbable);
      if (_v5) {
        var _v6 = _v2(_v5, _v4.cycle);
        _v6 && _v53(_v6.node, _v4.focusOptions);
      }
    },
    _v108 = function (_v0, _v1, _v2) {
      var _v3,
        _v4 = _v106(_v0, null == (_v3 = _v1.onlyTabbable) || _v3)[_v2];
      _v4 && _v53(_v4.node, _v1.focusOptions);
    };
  function _v109(_v0) {
    if (!_v0) return null;
    if ("u" < typeof WeakRef) return function () {
      return _v0 || null;
    };
    var _v1 = _v0 ? new WeakRef(_v0) : null;
    return function () {
      return (null == _v1 ? void 0 : _v1.deref()) || null;
    };
  }
  var _v110 = function (_v0) {
      if (!_v0) return null;
      for (var _v1 = [], _v2 = _v0; _v2 && _v2 !== document.body;) _v1.push({
        current: _v109(_v2),
        parent: _v109(_v2.parentElement),
        left: _v109(_v2.previousElementSibling),
        right: _v109(_v2.nextElementSibling)
      }), _v2 = _v2.parentElement;
      return {
        element: _v109(_v0),
        stack: _v1,
        ownerDocument: _v0.ownerDocument
      };
    },
    _v111 = function (_v0) {
      if (_v0) for (var _v1, _v2, _v3, _v4, _v5, _v6 = _v0.stack, _v7 = _v0.ownerDocument, _v8 = new Map(), _v9 = 0; _v9 < _v6.length; _v9++) {
        var _v10 = _v6[_v9],
          _v11 = null == (_v1 = _v10.parent) ? void 0 : _v1.call(_v10);
        if (_v11 && _v7.contains(_v11)) {
          for (var _v12 = null == (_v2 = _v10.left) ? void 0 : _v2.call(_v10), _v13 = _v10.current(), _v14 = _v11.contains(_v13) ? _v13 : void 0, _v15 = null == (_v3 = _v10.right) ? void 0 : _v3.call(_v10), _v16 = _v84([_v11], _v8), _v17 = null != (_v5 = null != (_v4 = null != _v14 ? _v14 : null == _v12 ? void 0 : _v12.nextElementSibling) ? _v4 : _v15) ? _v5 : _v12; _v17;) {
            for (var _v18 = 0; _v18 < _v16.length; _v18++) {
              var _v19 = _v16[_v18];
              if (null == _v17 ? void 0 : _v17.contains(_v19.node)) return _v19.node;
            }
            _v17 = _v17.nextElementSibling;
          }
          if (_v16.length) return _v16[0].node;
        }
      }
    },
    _v112 = function (_v0) {
      var _v1 = _v110(_v0);
      return function () {
        return _v111(_v1);
      };
    };
  function _v113(_v0) {
    setTimeout(_v0, 1);
  }
  var _v114 = function (_v0) {
      return _v0 && "current" in _v0 ? _v0.current : _v0;
    },
    _v115 = function () {
      return document && document.activeElement === document.body;
    },
    _v116 = null,
    _v117 = null,
    _v118 = function () {
      return null;
    },
    _v119 = null,
    _v120 = !1,
    _v121 = !1,
    _v122 = function (_v0, _v1) {
      _v119 = {
        observerNode: _v0,
        portaledElement: _v1
      };
    };
  function _v123(_v0, _v1, _v2, _v3) {
    var _v4 = null,
      _v5 = _v0;
    do {
      var _v6 = _v3[_v5];
      if (_v6.guard) _v6.node.dataset.focusAutoGuard && (_v4 = _v6);else if (_v6.lockItem) {
        if (_v5 !== _v0) return;
        _v4 = null;
      } else break;
    } while ((_v5 += _v2) !== _v1);
    _v4 && (_v4.node.tabIndex = 0);
  }
  var _v124 = function (_v0) {
      return _v85(_v0, new Map());
    },
    _v125 = function () {
      var _v0 = !1;
      if (_v116) {
        var _v1 = _v116,
          _v2 = _v1.observed,
          _v3 = _v1.persistentFocus,
          _v4 = _v1.autoFocus,
          _v5 = _v1.shards,
          _v6 = _v1.crossFrame,
          _v7 = _v1.focusOptions,
          _v8 = _v1.noFocusGuards,
          _v9 = _v2 || _v119 && _v119.portaledElement;
        if (_v115() && _v117 && _v117 !== document.body && (!document.body.contains(_v117) || !_v124([(_v12 = _v117).parentNode]).some(function (_v0) {
          return _v0.node === _v12;
        }))) {
          var _v10 = _v118();
          _v10 && _v10.focus();
        }
        var _v11 = document && document.activeElement;
        if (_v9) {
          var _v12,
            _v13 = [_v9].concat(_v5.map(_v114).filter(Boolean));
          if ((!_v11 || (_v116.whiteList || function () {
            return !0;
          })(_v11)) && (_v3 || function () {
            if (!(_v6 ? !!_v120 : "meanwhile" === _v120) || !_v8 || !_v117 || _v121) return !1;
            var _v0 = _v124(_v13),
              _v1 = _v0.findIndex(function (_v0) {
                return _v0.node === _v117;
              });
            return 0 === _v1 || _v1 === _v0.length - 1;
          }() || !(_v115() || _v103()) || !_v117 && _v4) && (_v9 && !(_v102(_v13) || _v11 && _v13.some(function (_v0) {
            return function _v0(_v1, _v2, _v3) {
              return _v2 && (_v2.host === _v1 && (!_v2.activeElement || _v3.contains(_v2.activeElement)) || _v2.parentNode && _v0(_v1, _v2.parentNode, _v3));
            }(_v11, _v0, _v0);
          }) || _v119 && _v119.portaledElement === _v11) && (document && !_v117 && _v11 && !_v4 ? (_v11.blur && _v11.blur(), document.body.focus()) : (_v0 = _v101(_v13, _v117, {
            focusOptions: _v7
          }), _v119 = {})), (_v117 = document && document.activeElement) !== document.body && (_v118 = _v112(_v117)), _v120 = !1), document && _v11 !== document.activeElement && document.querySelector("[data-focus-auto-guard]")) {
            var _v14 = document && document.activeElement,
              _v15 = _v104(_v13),
              _v16 = _v15.map(function (_v0) {
                return _v0.node;
              }).indexOf(_v14);
            _v16 > -1 && (_v15.filter(function (_v0) {
              var _v1 = _v0.guard,
                _v2 = _v0.node;
              return _v1 && _v2.dataset.focusAutoGuard;
            }).forEach(function (_v0) {
              return _v0.node.removeAttribute("tabIndex");
            }), _v123(_v16, _v15.length, 1, _v15), _v123(_v16, -1, -1, _v15));
          }
        }
      }
      return _v0;
    },
    _v126 = function (_v0) {
      _v125() && _v0 && (_v0.stopPropagation(), _v0.preventDefault());
    },
    _v127 = function () {
      return _v113(_v125);
    },
    _v128 = function () {
      _v121 = !0;
    },
    _v129 = function () {
      _v121 = !1, _v120 = "just", _v113(function () {
        _v120 = "meanwhile";
      });
    },
    _v130 = function () {
      document.addEventListener("focusin", _v126), document.addEventListener("focusout", _v127), window.addEventListener("focus", _v128), window.addEventListener("blur", _v129);
    },
    _v131 = function () {
      document.removeEventListener("focusin", _v126), document.removeEventListener("focusout", _v127), window.removeEventListener("focus", _v128), window.removeEventListener("blur", _v129);
    },
    _v132 = {
      moveFocusInside: _v101,
      focusInside: _v102,
      focusNextElement: function (_v0, _v1) {
        void 0 === _v1 && (_v1 = {}), _v107(_v0, _v1, function (_v0, _v1) {
          var _v2 = _v0.next,
            _v3 = _v0.first;
          return _v2 || _v1 && _v3;
        });
      },
      focusPrevElement: function (_v0, _v1) {
        void 0 === _v1 && (_v1 = {}), _v107(_v0, _v1, function (_v0, _v1) {
          var _v2 = _v0.prev,
            _v3 = _v0.last;
          return _v2 || _v1 && _v3;
        });
      },
      focusFirstElement: function (_v0, _v1) {
        void 0 === _v1 && (_v1 = {}), _v108(_v0, _v1, "first");
      },
      focusLastElement: function (_v0, _v1) {
        void 0 === _v1 && (_v1 = {}), _v108(_v0, _v1, "last");
      },
      captureFocusRestore: _v112
    };
  _v44.assignSyncMedium(function (_v0) {
    var _v1 = _v0.target,
      _v2 = _v0.currentTarget;
    _v2.contains(_v1) || _v122(_v2, _v1);
  }), _v45.assignMedium(_v127), _v46.assignMedium(function (_v0) {
    return _v0(_v132);
  });
  let _v133 = (_v1 = function (_v0) {
    return _v0.filter(function (_v0) {
      return !_v0.disabled;
    });
  }, _v2 = function (_v0) {
    var _v1 = _v0.slice(-1)[0];
    _v1 && !_v116 && _v130();
    var _v2 = _v116,
      _v3 = _v2 && _v1 && _v1.id === _v2.id;
    _v116 = _v1, _v2 && !_v3 && (_v2.onDeactivation(), _v0.filter(function (_v0) {
      return _v0.id === _v2.id;
    }).length || _v2.returnFocus(!_v1)), _v1 ? (_v117 = null, _v3 && _v2.observed === _v1.observed || _v1.onActivation(_v132), _v125(!0), _v113(_v125)) : (_v131(), _v117 = null);
  }, function (_v0) {
    var _v1,
      _v2 = [];
    function _v3() {
      _v2(_v1 = _v1(_v2.map(function (_v0) {
        return _v0.props;
      })));
    }
    var _v4 = function (_v0) {
      function _v1() {
        return _v0.apply(this, arguments) || this;
      }
      (0, _v51.default)(_v1, _v0), _v1.peek = function () {
        return _v1;
      };
      var _v2 = _v1.prototype;
      return _v2.componentDidMount = function () {
        _v2.push(this), _v3();
      }, _v2.componentDidUpdate = function () {
        _v3();
      }, _v2.componentWillUnmount = function () {
        var _v0 = _v2.indexOf(this);
        _v2.splice(_v0, 1), _v3();
      }, _v2.render = function () {
        return _v7.default.createElement(_v0, this.props);
      }, _v1;
    }(_v7.PureComponent);
    return (0, _v52.default)(_v4, "displayName", "SideEffect(" + (_v0.displayName || _v0.name || "Component") + ")"), _v4;
  })(function () {
    return null;
  });
  var _v134 = (0, _v7.forwardRef)(function (_v0, _v1) {
      return _v7.default.createElement(_v50, (0, _v30.default)({
        sideCar: _v133,
        ref: _v1
      }, _v0));
    }),
    _v135 = _v50.propTypes || {};
  _v135.sideCar, (0, _v29.default)(_v135, ["sideCar"]), _v134.propTypes = {}, _v0.s(["default", 0, _v134], 0);
  var _v136 = _v0.i(0),
    _v137 = null != (_v4 = _v134.default) ? _v4 : _v134,
    _v138 = _v0 => {
      let {
          initialFocusRef: _v1,
          finalFocusRef: _v2,
          contentRef: _v3,
          restoreFocus: _v4,
          children: _v5,
          isDisabled: _v6,
          autoFocus: _v7,
          persistentFocus: _v8,
          lockFocusAcrossFrames: _v9
        } = _v0,
        _v10 = (0, _v7.useCallback)(() => {
          (null == _v1 ? void 0 : _v1.current) ? _v1.current.focus() : (null == _v3 ? void 0 : _v3.current) && 0 === (0, _v136.getAllFocusable)(_v3.current).length && requestAnimationFrame(() => {
            var _v0;
            null == (_v0 = _v3.current) || _v0.focus();
          });
        }, [_v1, _v3]),
        _v11 = (0, _v7.useCallback)(() => {
          var _v0;
          null == (_v0 = null == _v2 ? void 0 : _v2.current) || _v0.focus();
        }, [_v2]),
        _v12 = _v4 && !_v2;
      return (0, _v23.jsx)(_v137, {
        crossFrame: _v9,
        persistentFocus: _v8,
        autoFocus: _v7,
        disabled: _v6,
        onActivation: _v10,
        onDeactivation: _v11,
        returnFocus: _v12,
        children: _v5
      });
    };
  _v138.displayName = "FocusLock";
  var _v139 = _v0.i(0),
    _v140 = "right-scroll-bar-position",
    _v141 = "width-before-scroll-bar",
    _v142 = _v43(),
    _v143 = function () {},
    _v144 = _v7.forwardRef(function (_v0, _v1) {
      var _v2 = _v7.useRef(null),
        _v3 = _v7.useState({
          onScrollCapture: _v143,
          onWheelCapture: _v143,
          onTouchMoveCapture: _v143
        }),
        _v4 = _v3[0],
        _v5 = _v3[1],
        _v6 = _v0.forwardProps,
        _v7 = _v0.children,
        _v8 = _v0.className,
        _v9 = _v0.removeScrollBar,
        _v10 = _v0.enabled,
        _v11 = _v0.shards,
        _v12 = _v0.sideCar,
        _v13 = _v0.noRelative,
        _v14 = _v0.noIsolation,
        _v15 = _v0.inert,
        _v16 = _v0.allowPinchZoom,
        _v17 = _v0.as,
        _v18 = _v0.gapMode,
        _v19 = (0, _v39.__rest)(_v0, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
        _v20 = _v37([_v2, _v1]),
        _v21 = (0, _v39.__assign)((0, _v39.__assign)({}, _v19), _v4);
      return _v7.createElement(_v7.Fragment, null, _v10 && _v7.createElement(_v12, {
        sideCar: _v142,
        removeScrollBar: _v9,
        shards: _v11,
        noRelative: _v13,
        noIsolation: _v14,
        inert: _v15,
        setCallbacks: _v5,
        allowPinchZoom: !!_v16,
        lockRef: _v2,
        gapMode: _v18
      }), _v6 ? _v7.cloneElement(_v7.Children.only(_v7), (0, _v39.__assign)((0, _v39.__assign)({}, _v21), {
        ref: _v20
      })) : _v7.createElement(void 0 === _v17 ? "div" : _v17, (0, _v39.__assign)({}, _v21, {
        className: _v8,
        ref: _v20
      }), _v7));
    });
  _v144.defaultProps = {
    enabled: !0,
    removeScrollBar: !0,
    inert: !1
  }, _v144.classNames = {
    fullWidth: _v141,
    zeroRight: _v140
  };
  var _v145 = function (_v0) {
    var _v1 = _v0.sideCar,
      _v2 = (0, _v39.__rest)(_v0, ["sideCar"]);
    if (!_v1) throw Error("Sidecar: please provide `sideCar` property to import the right car");
    var _v3 = _v1.read();
    if (!_v3) throw Error("Sidecar medium not found");
    return _v7.createElement(_v3, (0, _v39.__assign)({}, _v2));
  };
  _v145.isSideCarExport = !0;
  var _v146 = function () {
      var _v0 = 0,
        _v1 = null;
      return {
        add: function (_v0) {
          if (0 == _v0 && (_v1 = function () {
            if (!document) return null;
            var _v0 = document.createElement("style");
            _v0.type = "text/css";
            var _v1 = _v5 || ("u" > typeof __webpack_nonce__ ? __webpack_nonce__ : void 0);
            return _v1 && _v0.setAttribute("nonce", _v1), _v0;
          }())) {
            var _v1, _v2;
            (_v1 = _v1).styleSheet ? _v1.styleSheet.cssText = _v0 : _v1.appendChild(document.createTextNode(_v0)), _v2 = _v1, (document.head || document.getElementsByTagName("head")[0]).appendChild(_v2);
          }
          _v0++;
        },
        remove: function () {
          --_v0 || !_v1 || (_v1.parentNode && _v1.parentNode.removeChild(_v1), _v1 = null);
        }
      };
    },
    _v147 = function () {
      var _v0 = _v146();
      return function (_v0, _v1) {
        _v7.useEffect(function () {
          return _v0.add(_v0), function () {
            _v0.remove();
          };
        }, [_v0 && _v1]);
      };
    },
    _v148 = function () {
      var _v0 = _v147();
      return function (_v0) {
        return _v0(_v0.styles, _v0.dynamic), null;
      };
    },
    _v149 = {
      left: 0,
      top: 0,
      right: 0,
      gap: 0
    },
    _v150 = function (_v0) {
      return parseInt(_v0 || "", 10) || 0;
    },
    _v151 = function (_v0) {
      var _v1 = window.getComputedStyle(document.body),
        _v2 = _v1["padding" === _v0 ? "paddingLeft" : "marginLeft"],
        _v3 = _v1["padding" === _v0 ? "paddingTop" : "marginTop"],
        _v4 = _v1["padding" === _v0 ? "paddingRight" : "marginRight"];
      return [_v150(_v2), _v150(_v3), _v150(_v4)];
    },
    _v152 = function (_v0) {
      if (void 0 === _v0 && (_v0 = "margin"), "u" < typeof window) return _v149;
      var _v1 = _v151(_v0),
        _v2 = document.documentElement.clientWidth,
        _v3 = window.innerWidth;
      return {
        left: _v1[0],
        top: _v1[1],
        right: _v1[2],
        gap: Math.max(0, _v3 - _v2 + _v1[2] - _v1[0])
      };
    },
    _v153 = _v148(),
    _v154 = "data-scroll-locked",
    _v155 = function (_v0, _v1, _v2, _v3) {
      var _v4 = _v0.left,
        _v5 = _v0.top,
        _v6 = _v0.right,
        _v7 = _v0.gap;
      return void 0 === _v2 && (_v2 = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(_v3, ";\n   padding-right: ").concat(_v7, "px ").concat(_v3, ";\n  }\n  body[").concat(_v154, "] {\n    overflow: hidden ").concat(_v3, ";\n    overscroll-behavior: contain;\n    ").concat([_v1 && "position: relative ".concat(_v3, ";"), "margin" === _v2 && "\n    padding-left: ".concat(_v4, "px;\n    padding-top: ").concat(_v5, "px;\n    padding-right: ").concat(_v6, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(_v7, "px ").concat(_v3, ";\n    "), "padding" === _v2 && "padding-right: ".concat(_v7, "px ").concat(_v3, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(_v140, " {\n    right: ").concat(_v7, "px ").concat(_v3, ";\n  }\n  \n  .").concat(_v141, " {\n    margin-right: ").concat(_v7, "px ").concat(_v3, ";\n  }\n  \n  .").concat(_v140, " .").concat(_v140, " {\n    right: 0 ").concat(_v3, ";\n  }\n  \n  .").concat(_v141, " .").concat(_v141, " {\n    margin-right: 0 ").concat(_v3, ";\n  }\n  \n  body[").concat(_v154, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(_v7, "px;\n  }\n");
    },
    _v156 = function () {
      var _v0 = parseInt(document.body.getAttribute(_v154) || "0", 10);
      return isFinite(_v0) ? _v0 : 0;
    },
    _v157 = function () {
      _v7.useEffect(function () {
        return document.body.setAttribute(_v154, (_v156() + 1).toString()), function () {
          var _v0 = _v156() - 1;
          _v0 <= 0 ? document.body.removeAttribute(_v154) : document.body.setAttribute(_v154, _v0.toString());
        };
      }, []);
    },
    _v158 = function (_v0) {
      var _v1 = _v0.noRelative,
        _v2 = _v0.noImportant,
        _v3 = _v0.gapMode,
        _v4 = void 0 === _v3 ? "margin" : _v3;
      _v157();
      var _v5 = _v7.useMemo(function () {
        return _v152(_v4);
      }, [_v4]);
      return _v7.createElement(_v153, {
        styles: _v155(_v5, !_v1, _v4, _v2 ? "" : "!important")
      });
    },
    _v159 = !1;
  if ("u" > typeof window) try {
    var _v160 = Object.defineProperty({}, "passive", {
      get: function () {
        return _v159 = !0, !0;
      }
    });
    window.addEventListener("test", _v160, _v160), window.removeEventListener("test", _v160, _v160);
  } catch (_v0) {
    _v159 = !1;
  }
  var _v161 = !!_v159 && {
      passive: !1
    },
    _v162 = function (_v0, _v1) {
      if (!(_v0 instanceof Element)) return !1;
      var _v2 = window.getComputedStyle(_v0);
      return "hidden" !== _v2[_v1] && (_v2.overflowY !== _v2.overflowX || "TEXTAREA" === _v0.tagName || "visible" !== _v2[_v1]);
    },
    _v163 = function (_v0, _v1) {
      var _v2 = _v1.ownerDocument,
        _v3 = _v1;
      do {
        if ("u" > typeof ShadowRoot && _v3 instanceof ShadowRoot && (_v3 = _v3.host), _v164(_v0, _v3)) {
          var _v4 = _v165(_v0, _v3);
          if (_v4[1] > _v4[2]) return !0;
        }
        _v3 = _v3.parentNode;
      } while (_v3 && _v3 !== _v2.body);
      return !1;
    },
    _v164 = function (_v0, _v1) {
      return "v" === _v0 ? _v162(_v1, "overflowY") : _v162(_v1, "overflowX");
    },
    _v165 = function (_v0, _v1) {
      return "v" === _v0 ? [_v1.scrollTop, _v1.scrollHeight, _v1.clientHeight] : [_v1.scrollLeft, _v1.scrollWidth, _v1.clientWidth];
    },
    _v166 = function (_v0, _v1, _v2, _v3, _v4) {
      var _v5,
        _v6 = (_v5 = window.getComputedStyle(_v1).direction, "h" === _v0 && "rtl" === _v5 ? -1 : 1),
        _v7 = _v6 * _v3,
        _v8 = _v2.target,
        _v9 = _v1.contains(_v8),
        _v10 = !1,
        _v11 = _v7 > 0,
        _v12 = 0,
        _v13 = 0;
      do {
        if (!_v8) break;
        var _v14 = _v165(_v0, _v8),
          _v15 = _v14[0],
          _v16 = _v14[1] - _v14[2] - _v6 * _v15;
        (_v15 || _v16) && _v164(_v0, _v8) && (_v12 += _v16, _v13 += _v15);
        var _v17 = _v8.parentNode;
        _v8 = _v17 && _v17.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? _v17.host : _v17;
      } while (!_v9 && _v8 !== document.body || _v9 && (_v1.contains(_v8) || _v1 === _v8));
      return _v11 && (_v4 && 1 > Math.abs(_v12) || !_v4 && _v7 > _v12) ? _v10 = !0 : !_v11 && (_v4 && 1 > Math.abs(_v13) || !_v4 && -_v7 > _v13) && (_v10 = !0), _v10;
    },
    _v167 = function (_v0) {
      return "changedTouches" in _v0 ? [_v0.changedTouches[0].clientX, _v0.changedTouches[0].clientY] : [0, 0];
    },
    _v168 = function (_v0) {
      return [_v0.deltaX, _v0.deltaY];
    },
    _v169 = function (_v0) {
      return _v0 && "current" in _v0 ? _v0.current : _v0;
    },
    _v170 = 0,
    _v171 = [];
  let _v172 = (_v3 = function (_v0) {
    var _v1 = _v7.useRef([]),
      _v2 = _v7.useRef([0, 0]),
      _v3 = _v7.useRef(),
      _v4 = _v7.useState(_v170++)[0],
      _v5 = _v7.useState(_v148)[0],
      _v6 = _v7.useRef(_v0);
    _v7.useEffect(function () {
      _v6.current = _v0;
    }, [_v0]), _v7.useEffect(function () {
      if (_v0.inert) {
        document.body.classList.add("block-interactivity-".concat(_v4));
        var _v0 = (0, _v39.__spreadArray)([_v0.lockRef.current], (_v0.shards || []).map(_v169), !0).filter(Boolean);
        return _v0.forEach(function (_v0) {
          return _v0.classList.add("allow-interactivity-".concat(_v4));
        }), function () {
          document.body.classList.remove("block-interactivity-".concat(_v4)), _v0.forEach(function (_v0) {
            return _v0.classList.remove("allow-interactivity-".concat(_v4));
          });
        };
      }
    }, [_v0.inert, _v0.lockRef.current, _v0.shards]);
    var _v7 = _v7.useCallback(function (_v0, _v1) {
        if ("touches" in _v0 && 2 === _v0.touches.length || "wheel" === _v0.type && _v0.ctrlKey) return !_v6.current.allowPinchZoom;
        var _v2,
          _v3 = _v167(_v0),
          _v4 = _v2.current,
          _v5 = "deltaX" in _v0 ? _v0.deltaX : _v4[0] - _v3[0],
          _v6 = "deltaY" in _v0 ? _v0.deltaY : _v4[1] - _v3[1],
          _v7 = _v0.target,
          _v8 = Math.abs(_v5) > Math.abs(_v6) ? "h" : "v";
        if ("touches" in _v0 && "h" === _v8 && "range" === _v7.type) return !1;
        var _v9 = window.getSelection(),
          _v10 = _v9 && _v9.anchorNode;
        if (_v10 && (_v10 === _v7 || _v10.contains(_v7))) return !1;
        var _v11 = _v163(_v8, _v7);
        if (!_v11) return !0;
        if (_v11 ? _v2 = _v8 : (_v2 = "v" === _v8 ? "h" : "v", _v11 = _v163(_v8, _v7)), !_v11) return !1;
        if (!_v3.current && "changedTouches" in _v0 && (_v5 || _v6) && (_v3.current = _v2), !_v2) return !0;
        var _v12 = _v3.current || _v2;
        return _v166(_v12, _v1, _v0, "h" === _v12 ? _v5 : _v6, !0);
      }, []),
      _v8 = _v7.useCallback(function (_v0) {
        if (_v171.length && _v171[_v171.length - 1] === _v5) {
          var _v1 = "deltaY" in _v0 ? _v168(_v0) : _v167(_v0),
            _v2 = _v1.current.filter(function (_v0) {
              var _v1;
              return _v0.name === _v0.type && (_v0.target === _v0.target || _v0.target === _v0.shadowParent) && (_v1 = _v0.delta, _v1[0] === _v1[0] && _v1[1] === _v1[1]);
            })[0];
          if (_v2 && _v2.should) {
            _v0.cancelable && _v0.preventDefault();
            return;
          }
          if (!_v2) {
            var _v3 = (_v6.current.shards || []).map(_v169).filter(Boolean).filter(function (_v0) {
              return _v0.contains(_v0.target);
            });
            (_v3.length > 0 ? _v7(_v0, _v3[0]) : !_v6.current.noIsolation) && _v0.cancelable && _v0.preventDefault();
          }
        }
      }, []),
      _v9 = _v7.useCallback(function (_v0, _v1, _v2, _v3) {
        var _v4 = {
          name: _v0,
          delta: _v1,
          target: _v2,
          should: _v3,
          shadowParent: function (_v0) {
            for (var _v1 = null; null !== _v0;) _v0 instanceof ShadowRoot && (_v1 = _v0.host, _v0 = _v0.host), _v0 = _v0.parentNode;
            return _v1;
          }(_v2)
        };
        _v1.current.push(_v4), setTimeout(function () {
          _v1.current = _v1.current.filter(function (_v0) {
            return _v0 !== _v4;
          });
        }, 1);
      }, []),
      _v10 = _v7.useCallback(function (_v0) {
        _v2.current = _v167(_v0), _v3.current = void 0;
      }, []),
      _v11 = _v7.useCallback(function (_v0) {
        _v9(_v0.type, _v168(_v0), _v0.target, _v7(_v0, _v0.lockRef.current));
      }, []),
      _v12 = _v7.useCallback(function (_v0) {
        _v9(_v0.type, _v167(_v0), _v0.target, _v7(_v0, _v0.lockRef.current));
      }, []);
    _v7.useEffect(function () {
      return _v171.push(_v5), _v0.setCallbacks({
        onScrollCapture: _v11,
        onWheelCapture: _v11,
        onTouchMoveCapture: _v12
      }), document.addEventListener("wheel", _v8, _v161), document.addEventListener("touchmove", _v8, _v161), document.addEventListener("touchstart", _v10, _v161), function () {
        _v171 = _v171.filter(function (_v0) {
          return _v0 !== _v5;
        }), document.removeEventListener("wheel", _v8, _v161), document.removeEventListener("touchmove", _v8, _v161), document.removeEventListener("touchstart", _v10, _v161);
      };
    }, []);
    var _v13 = _v0.removeScrollBar,
      _v14 = _v0.inert;
    return _v7.createElement(_v7.Fragment, null, _v14 ? _v7.createElement(_v5, {
      styles: "\n  .block-interactivity-".concat(_v4, " {pointer-events: none;}\n  .allow-interactivity-").concat(_v4, " {pointer-events: all;}\n")
    }) : null, _v13 ? _v7.createElement(_v158, {
      noRelative: _v0.noRelative,
      gapMode: _v0.gapMode
    }) : null);
  }, _v142.useMedium(_v3), _v145);
  var _v173 = _v7.forwardRef(function (_v0, _v1) {
    return _v7.createElement(_v144, (0, _v39.__assign)({}, _v0, {
      ref: _v1,
      sideCar: _v172
    }));
  });
  _v173.classNames = _v144.classNames, _v0.s(["ModalFocusScope", 0, function (_v0) {
    let {
        autoFocus: _v1,
        trapFocus: _v2,
        dialogRef: _v3,
        initialFocusRef: _v4,
        blockScrollOnMount: _v5,
        allowPinchZoom: _v6,
        finalFocusRef: _v7,
        returnFocusOnClose: _v8,
        preserveScrollBarGap: _v9,
        lockFocusAcrossFrames: _v10,
        isOpen: _v11
      } = _v27(),
      [_v12, _v13] = (0, _v139.usePresence)();
    (0, _v7.useEffect)(() => {
      !_v12 && _v13 && setTimeout(_v13);
    }, [_v12, _v13]);
    let _v14 = _v9(_v3, _v11);
    return (0, _v23.jsx)(_v138, {
      autoFocus: _v1,
      isDisabled: !_v2,
      initialFocusRef: _v4,
      finalFocusRef: _v7,
      restoreFocus: _v8,
      contentRef: _v3,
      lockFocusAcrossFrames: _v10,
      children: (0, _v23.jsx)(_v173, {
        removeScrollBar: !_v9,
        allowPinchZoom: _v6,
        enabled: 1 === _v14 && _v5,
        forwardProps: !0,
        children: _v0.children
      })
    });
  }], 0);
}