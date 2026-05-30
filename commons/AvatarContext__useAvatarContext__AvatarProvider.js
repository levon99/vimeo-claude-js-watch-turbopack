{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s([], 0), _v0.i(0);
  let [_v2, _v3] = (0, _v0.i(0).createContext)({
    name: "AvatarContext",
    hookName: "useAvatarContext",
    providerName: "<AvatarProvider />"
  });
  var _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = (0, _v5.forwardRef)((_v0, _v1) => {
    let _v2 = _v3(),
      _v3 = (0, _v4.mergeProps)(_v2.getFallbackProps(), _v0);
    return (0, _v1.jsx)(_v6.ark.span, {
      ..._v3,
      ref: _v1
    });
  });
  _v7.displayName = "AvatarFallback";
  let _v8 = (0, _v5.forwardRef)((_v0, _v1) => {
    let _v2 = _v3(),
      _v3 = (0, _v4.mergeProps)(_v2.getImageProps(), _v0);
    return (0, _v1.jsx)(_v6.ark.img, {
      ..._v3,
      ref: _v1
    });
  });
  _v8.displayName = "AvatarImage";
  var _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = (0, _v10.createAnatomy)("avatar").parts("root", "image", "fallback").build(),
    _v15 = _v0 => _v0.ids?.root ?? `avatar:${_v0.id}`,
    _v16 = _v0 => _v0.ids?.image ?? `avatar:${_v0.id}:image`,
    _v17 = _v0 => _v0.getById(_v16(_v0)),
    _v18 = (0, _v4.createMachine)({
      initialState: () => "loading",
      effects: ["trackImageRemoval", "trackSrcChange"],
      on: {
        "src.change": {
          target: "loading"
        },
        "img.unmount": {
          target: "error"
        }
      },
      states: {
        loading: {
          entry: ["checkImageStatus"],
          on: {
            "img.loaded": {
              target: "loaded",
              actions: ["invokeOnLoad"]
            },
            "img.error": {
              target: "error",
              actions: ["invokeOnError"]
            }
          }
        },
        error: {
          on: {
            "img.loaded": {
              target: "loaded",
              actions: ["invokeOnLoad"]
            }
          }
        },
        loaded: {
          on: {
            "img.error": {
              target: "error",
              actions: ["invokeOnError"]
            }
          }
        }
      },
      implementations: {
        actions: {
          invokeOnLoad({
            prop: _v0
          }) {
            _v0("onStatusChange")?.({
              status: "loaded"
            });
          },
          invokeOnError({
            prop: _v0
          }) {
            _v0("onStatusChange")?.({
              status: "error"
            });
          },
          checkImageStatus({
            send: _v0,
            scope: _v1
          }) {
            var _v2;
            let _v3 = _v17(_v1);
            _v3?.complete && _v0({
              type: (_v2 = _v3).complete && 0 !== _v2.naturalWidth && 0 !== _v2.naturalHeight ? "img.loaded" : "img.error",
              src: "ssr"
            });
          }
        },
        effects: {
          trackImageRemoval({
            send: _v0,
            scope: _v1
          }) {
            let _v2 = _v1.getById(_v15(_v1));
            return (0, _v11.observeChildren)(_v2, {
              callback(_v0) {
                Array.from(_v0[0].removedNodes).find(_v0 => _v0.nodeType === Node.ELEMENT_NODE && _v0.matches("[data-scope=avatar][data-part=image]")) && _v0({
                  type: "img.unmount"
                });
              }
            });
          },
          trackSrcChange({
            send: _v0,
            scope: _v1
          }) {
            let _v2 = _v17(_v1);
            return (0, _v11.observeAttributes)(_v2, {
              attributes: ["src", "srcset"],
              callback() {
                _v0({
                  type: "src.change"
                });
              }
            });
          }
        }
      }
    }),
    _v19 = (0, _v12.createProps)()(["dir", "id", "ids", "onStatusChange", "getRootNode"]);
  (0, _v13.createSplitProps)(_v19);
  var _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0);
  let _v23 = (0, _v5.forwardRef)((_v0, _v1) => {
    let [_v2, _v3] = (0, _v9.createSplitProps)()(_v0, ["id", "ids", "onStatusChange"]),
      _v4 = (_v0 => {
        let _v1 = (0, _v5.useId)(),
          {
            getRootNode: _v2
          } = (0, _v21.useEnvironmentContext)(),
          {
            dir: _v3
          } = (0, _v22.useLocaleContext)(),
          _v4 = {
            id: _v1,
            dir: _v3,
            getRootNode: _v2,
            ..._v0
          };
        return function (_v0, _v1) {
          let {
              state: _v2,
              send: _v3,
              prop: _v4,
              scope: _v5
            } = _v0,
            _v6 = _v2.matches("loaded");
          return {
            loaded: _v6,
            setSrc(_v0) {
              let _v1 = _v17(_v5);
              _v1?.setAttribute("src", _v0);
            },
            setLoaded() {
              _v3({
                type: "img.loaded",
                src: "api"
              });
            },
            setError() {
              _v3({
                type: "img.error",
                src: "api"
              });
            },
            getRootProps: () => _v1.element({
              ..._v14.root.attrs,
              dir: _v4("dir"),
              id: _v15(_v5)
            }),
            getImageProps: () => _v1.img({
              ..._v14.image.attrs,
              hidden: !_v6,
              dir: _v4("dir"),
              id: _v16(_v5),
              "data-state": _v6 ? "visible" : "hidden",
              onLoad() {
                _v3({
                  type: "img.loaded",
                  src: "element"
                });
              },
              onError() {
                _v3({
                  type: "img.error",
                  src: "element"
                });
              }
            }),
            getFallbackProps: () => _v1.element({
              ..._v14.fallback.attrs,
              dir: _v4("dir"),
              id: _v5.ids?.fallback ?? `avatar:${_v5.id}:fallback`,
              hidden: _v6,
              "data-state": _v6 ? "hidden" : "visible"
            })
          };
        }((0, _v20.useMachine)(_v18, _v4), _v20.normalizeProps);
      })(_v2),
      _v5 = (0, _v4.mergeProps)(_v4.getRootProps(), _v3);
    return (0, _v1.jsx)(_v2, {
      value: _v4,
      children: (0, _v1.jsx)(_v6.ark.div, {
        ..._v5,
        ref: _v1
      })
    });
  });
  _v23.displayName = "AvatarRoot";
  let _v24 = (0, _v5.forwardRef)((_v0, _v1) => {
    let [{
        value: _v2
      }, _v3] = (0, _v9.createSplitProps)()(_v0, ["value"]),
      _v4 = (0, _v4.mergeProps)(_v2.getRootProps(), _v3);
    return (0, _v1.jsx)(_v2, {
      value: _v2,
      children: (0, _v1.jsx)(_v6.ark.div, {
        ..._v4,
        ref: _v1
      })
    });
  });
  _v24.displayName = "AvatarRootProvider", _v0.s(["Context", 0, _v0 => _v0.children(_v3()), "Fallback", 0, _v7, "Image", 0, _v8, "Root", 0, _v23, "RootProvider", 0, _v24], 0);
  var _v25 = _v0.i(0),
    _v25 = _v25,
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0);
  let _v32 = ["yellow.400", "orange.400", "red.400", "purple.400", "blue.400", "green.400", "yellow.500", "orange.500", "red.500", "purple.500", "blue.500", "green.500", "yellow.600", "orange.600", "red.600", "purple.600", "blue.600", "green.600"],
    _v33 = (0, _v5.createContext)({
      useInitialsFallback: !1
    }),
    _v34 = _v33.Provider,
    _v35 = {
      xs: "22px",
      sm: "28px",
      md: "36px",
      lg: "42px",
      xl: "56px",
      "2xl": "82px",
      "3xl": "110px",
      auto: "100%"
    },
    _v36 = ({
      size: _v0 = "md"
    }) => (0, _v1.jsx)(_v28.Icon, {
      viewBox: "0 0 110 110",
      fill: "none",
      height: _v35[_v0],
      width: _v35[_v0],
      children: (0, _v1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M55 100.176C30.0497 100.176 9.82351 79.9503 9.82351 55C9.82351 30.0497 30.0497 9.82354 55 9.82354C79.9503 9.82354 100.176 30.0497 100.176 55C100.176 79.9503 79.9503 100.176 55 100.176ZM0.411743 55C0.411743 24.8518 24.8517 0.411774 55 0.411774C85.1482 0.411774 109.588 24.8518 109.588 55C109.588 85.1483 85.1482 109.588 55 109.588C24.8517 109.588 0.411743 85.1483 0.411743 55ZM55.0014 91.1414C64.681 91.1414 73.1418 85.699 77.7235 77.5884H32.2794C36.8611 85.699 45.3218 91.1414 55.0014 91.1414ZM85.4926 63.4706C85.4926 67.1092 82.543 70.0588 78.9044 70.0588C75.2658 70.0588 72.3162 67.1092 72.3162 63.4706C72.3162 59.832 75.2658 56.8824 78.9044 56.8824C82.543 56.8824 85.4926 59.832 85.4926 63.4706ZM30.7206 70.0588C34.3591 70.0588 37.3088 67.1092 37.3088 63.4706C37.3088 59.832 34.3591 56.8824 30.7206 56.8824C27.082 56.8824 24.1323 59.832 24.1323 63.4706C24.1323 67.1092 27.082 70.0588 30.7206 70.0588Z",
        fill: "#03C1EB"
      })
    }),
    _v37 = {
      xs: ".75rem",
      sm: "1rem",
      md: "1rem",
      lg: "1.5rem",
      xl: "2rem",
      "2xl": "3rem",
      "3xl": "4rem",
      auto: "100%"
    };
  _v0.s(["Avatar", 0, ({
    size: _v0 = "md",
    src: _v1,
    srcSet: _v2,
    alt: _v3,
    nameProps: _v4,
    loading: _v5,
    sx: _v6,
    shape: _v7 = "full",
    ..._v8
  }) => {
    let _v9 = (0, _v26.useStyleConfig)("Avatar", {
        size: _v0
      }),
      {
        useInitialsFallback: _v10
      } = (0, _v5.useContext)(_v33),
      _v11 = "full" === _v7 ? "100%" : {
        xs: "6px",
        sm: "6px",
        md: "8px",
        lg: "10px",
        xl: "10px",
        "2xl": "12px",
        "3xl": "12px",
        auto: "10px"
      }[_v0],
      _v12 = _v10 && !!_v1 && /\/portrait\/defaults?-(blue|gray)/.test(_v1),
      _v13 = _v4 && _v4.name.length > 0 && (_v10 || _v4.color) ? _v4 : null,
      _v14 = _v13 ? {
        name: _v13.name,
        color: _v13.color ?? function (_v0) {
          let _v1 = 0;
          for (let _v0 = 0; _v0 < _v0.length; _v0++) _v1 = (_v1 << 5) - _v1 + _v0.charCodeAt(_v0) | 0;
          return _v32[Math.abs(_v1) % _v32.length];
        }(_v13.name)
      } : null,
      _v15 = _v14 && (({
        theme: _v0,
        color: _v1,
        colorMode: _v2
      }) => {
        let _v3 = (0, _v30.default)(_v0, `colors.${_v1}`, _v1),
          _v4 = (0, _v30.default)(_v0, `semanticTokens.colors.${_v1}`, _v1);
        return _v3 === _v4 ? (0, _v29.toRgba)(_v1) : "object" == typeof _v4 ? "light" === _v2 ? String(_v4.default) : String(_v4._dark) : String(_v3);
      })({
        theme: _v31.bokehTheme,
        color: _v14.color,
        colorMode: "light"
      }),
      _v16 = _v14 ? (0, _v1.jsx)(_v27.Box, {
        __css: _v9,
        sx: _v6,
        borderRadius: _v11,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bg: _v14.color,
        color: (0, _v29.readableColor)(_v15 ?? ""),
        fontSize: _v37[_v0],
        children: _v14.name.charAt(0).toUpperCase()
      }) : (0, _v1.jsx)(_v27.Box, {
        __css: _v9,
        sx: _v6,
        borderRadius: _v11,
        bg: "#C4F4FF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        children: (0, _v1.jsx)(_v36, {
          size: _v0
        })
      }),
      _v17 = _v14 && _v12;
    return (0, _v1.jsxs)(_v25.Root, {
      style: {
        display: "unset",
        position: "relative"
      },
      ..._v8,
      children: [(0, _v1.jsx)(_v25.Fallback, {
        asChild: !0,
        children: _v16
      }), (0, _v1.jsx)(_v25.Image, {
        asChild: !0,
        children: (0, _v1.jsx)(_v27.Box, {
          as: "img",
          position: !_v1 || _v17 ? "absolute" : "relative",
          src: _v17 ? void 0 : _v1,
          srcSet: _v17 ? void 0 : _v2,
          alt: _v3,
          loading: _v5,
          __css: _v9,
          sx: _v6,
          borderRadius: _v11
        })
      })]
    });
  }, "AvatarConfigProvider", 0, _v34], 0);
}