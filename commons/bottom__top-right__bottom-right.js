{
  "use strict";

  let _v1, _v2, _v3;
  var _v4,
    _v5 = (_v0, _v1) => _v0.find(_v0 => _v0.id === _v1);
  function _v6(_v0, _v1) {
    let _v2 = _v7(_v0, _v1),
      _v3 = _v2 ? _v0[_v2].findIndex(_v0 => _v0.id === _v1) : -1;
    return {
      position: _v2,
      index: _v3
    };
  }
  function _v7(_v0, _v1) {
    for (let [_v0, _v1] of Object.entries(_v0)) if (_v5(_v1, _v1)) return _v0;
  }
  var _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = {
      initial: _v0 => {
        let {
            position: _v1
          } = _v0,
          _v2 = ["top", "bottom"].includes(_v1) ? "y" : "x",
          _v3 = ["top-right", "bottom-right"].includes(_v1) ? 1 : -1;
        return "bottom" === _v1 && (_v3 = 1), {
          opacity: 0,
          [_v2]: 24 * _v3
        };
      },
      animate: {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        transition: {
          duration: .4,
          ease: [.4, 0, .2, 1]
        }
      },
      exit: {
        opacity: 0,
        scale: .85,
        transition: {
          duration: .2,
          ease: [.4, 0, 1, 1]
        }
      }
    },
    _v17 = (0, _v8.memo)(_v0 => {
      let _v1,
        {
          id: _v2,
          message: _v3,
          onCloseComplete: _v4,
          onRequestRemove: _v5,
          requestClose: _v6 = !1,
          position: _v7 = "bottom",
          duration: _v8 = 0,
          containerStyle: _v9,
          motionVariants: _v10 = _v16,
          toastSpacing: _v11 = "0.5rem"
        } = _v0,
        [_v12, _v13] = (0, _v8.useState)(_v8),
        _v14 = (0, _v13.useIsPresent)();
      (0, _v10.useUpdateEffect)(() => {
        _v14 || null == _v4 || _v4();
      }, [_v14]), (0, _v10.useUpdateEffect)(() => {
        _v13(_v8);
      }, [_v8]);
      let _v15 = () => {
        _v14 && _v5();
      };
      (0, _v8.useEffect)(() => {
        _v14 && _v6 && _v5();
      }, [_v14, _v6, _v5]), _v1 = (0, _v9.useCallbackRef)(_v15), (0, _v8.useEffect)(() => {
        if (null == _v12) return;
        let _v0 = null;
        return _v0 = window.setTimeout(() => {
          _v1();
        }, _v12), () => {
          _v0 && window.clearTimeout(_v0);
        };
      }, [_v12, _v1]);
      let _v16 = (0, _v8.useMemo)(() => ({
          pointerEvents: "auto",
          maxWidth: 560,
          minWidth: 300,
          margin: _v11,
          ..._v9
        }), [_v9, _v11]),
        _v17 = (0, _v8.useMemo)(() => {
          let _v0, _v1, _v2;
          return _v0 = _v7.includes("right"), _v1 = _v7.includes("left"), _v2 = "center", _v0 && (_v2 = "flex-end"), _v1 && (_v2 = "flex-start"), {
            display: "flex",
            flexDirection: "column",
            alignItems: _v2
          };
        }, [_v7]);
      return (0, _v15.jsx)(_v12.motion.div, {
        layout: !0,
        className: "chakra-toast",
        variants: _v10,
        initial: "initial",
        animate: "animate",
        exit: "exit",
        onHoverStart: () => _v13(null),
        onHoverEnd: () => _v13(_v8),
        custom: {
          position: _v7
        },
        style: _v17,
        children: (0, _v15.jsx)(_v14.chakra.div, {
          role: "status",
          "aria-atomic": "true",
          className: "chakra-toast__inner",
          __css: _v16,
          children: (0, _v11.runIfFn)(_v3, {
            id: _v2,
            onClose: _v15
          })
        })
      });
    });
  _v17.displayName = "ToastComponent";
  var _v18 = _v0.i(0);
  function _v19(_v0) {
    return (0, _v15.jsx)(_v18.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      children: (0, _v15.jsx)("path", {
        fill: "currentColor",
        d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
      })
    });
  }
  var _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    [_v22, _v23] = (0, _v20.createContext)({
      name: "AlertContext",
      hookName: "useAlertContext",
      providerName: "<Alert />"
    }),
    [_v24, _v25] = (0, _v20.createContext)({
      name: "AlertStylesContext",
      hookName: "useAlertStyles",
      providerName: "<Alert />"
    }),
    _v26 = {
      info: {
        icon: function (_v0) {
          return (0, _v15.jsx)(_v18.Icon, {
            viewBox: "0 0 24 24",
            ..._v0,
            children: (0, _v15.jsx)("path", {
              fill: "currentColor",
              d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"
            })
          });
        },
        colorScheme: "blue"
      },
      warning: {
        icon: _v19,
        colorScheme: "orange"
      },
      success: {
        icon: function (_v0) {
          return (0, _v15.jsx)(_v18.Icon, {
            viewBox: "0 0 24 24",
            ..._v0,
            children: (0, _v15.jsx)("path", {
              fill: "currentColor",
              d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
            })
          });
        },
        colorScheme: "green"
      },
      error: {
        icon: _v19,
        colorScheme: "red"
      },
      loading: {
        icon: _v21.Spinner,
        colorScheme: "blue"
      }
    },
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = (0, _v27.forwardRef)(function (_v0, _v1) {
      var _v2;
      let {
          status: _v3 = "info",
          addRole: _v4 = !0,
          ..._v5
        } = (0, _v28.omitThemingProps)(_v0),
        _v6 = null != (_v2 = _v0.colorScheme) ? _v2 : _v26[_v3].colorScheme,
        _v7 = (0, _v29.useMultiStyleConfig)("Alert", {
          ..._v0,
          colorScheme: _v6
        }),
        _v8 = {
          width: "100%",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          ..._v7.container
        };
      return (0, _v15.jsx)(_v22, {
        value: {
          status: _v3
        },
        children: (0, _v15.jsx)(_v24, {
          value: _v7,
          children: (0, _v15.jsx)(_v14.chakra.div, {
            "data-status": _v3,
            role: _v4 ? "alert" : void 0,
            ref: _v1,
            ..._v5,
            className: (0, _v11.cx)("chakra-alert", _v0.className),
            __css: _v8
          })
        })
      });
    });
  _v30.displayName = "Alert";
  var _v31 = (0, _v27.forwardRef)(function (_v0, _v1) {
    let _v2 = _v25(),
      {
        status: _v3
      } = _v23(),
      _v4 = {
        display: "inline",
        ..._v2.description
      };
    return (0, _v15.jsx)(_v14.chakra.div, {
      ref: _v1,
      "data-status": _v3,
      ..._v0,
      className: (0, _v11.cx)("chakra-alert__desc", _v0.className),
      __css: _v4
    });
  });
  function _v32(_v0) {
    let {
        status: _v1
      } = _v23(),
      _v2 = _v26[_v1].icon,
      _v3 = _v25(),
      _v4 = "loading" === _v1 ? _v3.spinner : _v3.icon;
    return (0, _v15.jsx)(_v14.chakra.span, {
      display: "inherit",
      "data-status": _v1,
      ..._v0,
      className: (0, _v11.cx)("chakra-alert__icon", _v0.className),
      __css: _v4,
      children: _v0.children || (0, _v15.jsx)(_v2, {
        h: "100%",
        w: "100%"
      })
    });
  }
  _v31.displayName = "AlertDescription", _v32.displayName = "AlertIcon";
  var _v33 = (0, _v27.forwardRef)(function (_v0, _v1) {
    let _v2 = _v25(),
      {
        status: _v3
      } = _v23();
    return (0, _v15.jsx)(_v14.chakra.div, {
      ref: _v1,
      "data-status": _v3,
      ..._v0,
      className: (0, _v11.cx)("chakra-alert__title", _v0.className),
      __css: _v2.title
    });
  });
  _v33.displayName = "AlertTitle";
  var _v34 = _v0.i(0),
    _v35 = (_v1 = _v4 = {
      top: [],
      "top-left": [],
      "top-right": [],
      "bottom-left": [],
      bottom: [],
      "bottom-right": []
    }, _v2 = new Set(), _v3 = _v0 => {
      _v1 = _v0(_v1), _v2.forEach(_v0 => _v0());
    }, {
      getState: () => _v1,
      subscribe: _v0 => (_v2.add(_v0), () => {
        _v3(() => _v4), _v2.delete(_v0);
      }),
      removeToast: (_v0, _v1) => {
        _v3(_v0 => ({
          ..._v0,
          [_v1]: _v0[_v1].filter(_v0 => _v0.id != _v0)
        }));
      },
      notify: (_v0, _v1) => {
        let _v2 = function (_v0, _v1 = {}) {
            var _v2, _v3;
            _v36 += 1;
            let _v4 = null != (_v2 = _v1.id) ? _v2 : _v36,
              _v5 = null != (_v3 = _v1.position) ? _v3 : "bottom";
            return {
              id: _v4,
              message: _v0,
              position: _v5,
              duration: _v1.duration,
              onCloseComplete: _v1.onCloseComplete,
              onRequestRemove: () => _v35.removeToast(String(_v4), _v5),
              status: _v1.status,
              requestClose: !1,
              containerStyle: _v1.containerStyle
            };
          }(_v0, _v1),
          {
            position: _v3,
            id: _v4
          } = _v2;
        return _v3(_v0 => {
          var _v1, _v2;
          let _v3 = _v3.includes("top") ? [_v2, ...(null != (_v1 = _v0[_v3]) ? _v1 : [])] : [...(null != (_v2 = _v0[_v3]) ? _v2 : []), _v2];
          return {
            ..._v0,
            [_v3]: _v3
          };
        }), _v4;
      },
      update: (_v0, _v1) => {
        _v0 && _v3(_v0 => {
          let _v1 = {
              ..._v0
            },
            {
              position: _v2,
              index: _v3
            } = _v6(_v1, _v0);
          return _v2 && -1 !== _v3 && (_v1[_v2][_v3] = {
            ..._v1[_v2][_v3],
            ..._v1,
            message: _v38(_v1)
          }), _v1;
        });
      },
      closeAll: ({
        positions: _v0
      } = {}) => {
        _v3(_v0 => (null != _v0 ? _v0 : ["bottom", "bottom-right", "bottom-left", "top", "top-left", "top-right"]).reduce((_v0, _v1) => (_v0[_v1] = _v0[_v1].map(_v0 => ({
          ..._v0,
          requestClose: !0
        })), _v0), {
          ..._v0
        }));
      },
      close: _v0 => {
        _v3(_v0 => {
          let _v1 = _v7(_v0, _v0);
          return _v1 ? {
            ..._v0,
            [_v1]: _v0[_v1].map(_v0 => _v0.id == _v0 ? {
              ..._v0,
              requestClose: !0
            } : _v0)
          } : _v0;
        });
      },
      isActive: _v0 => !!_v6(_v35.getState(), _v0).position
    }),
    _v36 = 0,
    _v37 = _v0 => {
      let {
          status: _v1,
          variant: _v2 = "solid",
          id: _v3,
          title: _v4,
          isClosable: _v5,
          onClose: _v6,
          description: _v7,
          colorScheme: _v8,
          icon: _v9
        } = _v0,
        _v10 = _v3 ? {
          root: `toast-${_v3}`,
          title: `toast-${_v3}-title`,
          description: `toast-${_v3}-description`
        } : void 0;
      return (0, _v15.jsxs)(_v30, {
        addRole: !1,
        status: _v1,
        variant: _v2,
        id: null == _v10 ? void 0 : _v10.root,
        alignItems: "start",
        borderRadius: "md",
        boxShadow: "lg",
        paddingEnd: 8,
        textAlign: "start",
        width: "auto",
        colorScheme: _v8,
        children: [(0, _v15.jsx)(_v32, {
          children: _v9
        }), (0, _v15.jsxs)(_v14.chakra.div, {
          flex: "1",
          maxWidth: "100%",
          children: [_v4 && (0, _v15.jsx)(_v33, {
            id: null == _v10 ? void 0 : _v10.title,
            children: _v4
          }), _v7 && (0, _v15.jsx)(_v31, {
            id: null == _v10 ? void 0 : _v10.description,
            display: "block",
            children: _v7
          })]
        }), _v5 && (0, _v15.jsx)(_v34.CloseButton, {
          size: "sm",
          onClick: _v6,
          position: "absolute",
          insetEnd: 1,
          top: 1
        })]
      });
    };
  function _v38(_v0 = {}) {
    let {
      render: _v1,
      toastComponent: _v2 = _v37
    } = _v0;
    return _v0 => "function" == typeof _v1 ? _v1({
      ..._v0,
      ..._v0
    }) : (0, _v15.jsx)(_v2, {
      ..._v0,
      ..._v0
    });
  }
  _v0.s(["createToastFn", 0, function (_v0, _v1) {
    let _v2 = _v0 => {
        var _v1, _v2, _v3;
        let _v4, _v5;
        return {
          ..._v1,
          ..._v0,
          position: (_v2 = null != (_v1 = null == _v0 ? void 0 : _v0.position) ? _v1 : null == _v1 ? void 0 : _v1.position, null != (_v3 = null == (_v5 = {
            "top-start": {
              ltr: "top-left",
              rtl: "top-right"
            },
            "top-end": {
              ltr: "top-right",
              rtl: "top-left"
            },
            "bottom-start": {
              ltr: "bottom-left",
              rtl: "bottom-right"
            },
            "bottom-end": {
              ltr: "bottom-right",
              rtl: "bottom-left"
            }
          }[_v4 = null != _v2 ? _v2 : "bottom"]) ? void 0 : _v5[_v0]) ? _v3 : _v4)
        };
      },
      _v3 = _v0 => {
        let _v1 = _v2(_v0),
          _v2 = _v38(_v1);
        return _v35.notify(_v2, _v1);
      };
    return _v3.update = (_v0, _v1) => {
      _v35.update(_v0, _v2(_v1));
    }, _v3.promise = (_v0, _v1) => {
      let _v2 = _v3({
        ..._v1.loading,
        status: "loading",
        duration: null
      });
      _v0.then(_v0 => _v3.update(_v2, {
        status: "success",
        duration: 0,
        ...(0, _v11.runIfFn)(_v1.success, _v0)
      })).catch(_v0 => _v3.update(_v2, {
        status: "error",
        duration: 0,
        ...(0, _v11.runIfFn)(_v1.error, _v0)
      }));
    }, _v3.closeAll = _v35.closeAll, _v3.close = _v35.close, _v3.isActive = _v35.isActive, _v3;
  }, "toastStore", 0, _v35], 0);
  var _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    [_v41, _v42] = (0, _v20.createContext)({
      name: "ToastOptionsContext",
      strict: !1
    });
  _v0.s(["ToastOptionProvider", 0, _v41, "ToastProvider", 0, _v0 => {
    let _v1 = (0, _v8.useSyncExternalStore)(_v35.subscribe, _v35.getState, _v35.getState),
      {
        motionVariants: _v2,
        component: _v3 = _v17,
        portalProps: _v4
      } = _v0,
      _v5 = Object.keys(_v1).map(_v0 => {
        let _v1,
          _v2,
          _v3,
          _v4 = _v1[_v0];
        return (0, _v15.jsx)("div", {
          role: "region",
          "aria-live": "polite",
          "aria-label": `Notifications-${_v0}`,
          id: `chakra-toast-manager-${_v0}`,
          style: (_v1 = "top" === _v0 || "bottom" === _v0, _v2 = _v0.includes("top") ? "env(safe-area-inset-top, 0px)" : void 0, _v3 = _v0.includes("bottom") ? "env(safe-area-inset-bottom, 0px)" : void 0, {
            position: "fixed",
            zIndex: "var(--toast-z-index, 5500)",
            pointerEvents: "none",
            display: "flex",
            flexDirection: "column",
            margin: _v1 ? "0 auto" : void 0,
            top: _v2,
            bottom: _v3,
            right: _v0.includes("left") ? void 0 : "env(safe-area-inset-right, 0px)",
            left: _v0.includes("right") ? void 0 : "env(safe-area-inset-left, 0px)"
          }),
          children: (0, _v15.jsx)(_v39.AnimatePresence, {
            initial: !1,
            children: _v4.map(_v0 => (0, _v15.jsx)(_v3, {
              motionVariants: _v2,
              ..._v0
            }, _v0.id))
          })
        }, _v0);
      });
    return (0, _v15.jsx)(_v40.Portal, {
      ..._v4,
      children: _v5
    });
  }, "useToastOptionContext", 0, _v42], 0);
}