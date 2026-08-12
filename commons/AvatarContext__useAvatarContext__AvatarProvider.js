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
  let _v32 = Object.freeze(["vimeo-blue-1", "vimeo-blue-2", "vimeo-blue-3", "vimeo-blue-4", "yellow-1", "yellow-2", "yellow-3", "yellow-4", "orange-1", "orange-2", "orange-3", "orange-4", "green-1", "green-2", "green-3", "green-4", "red-1", "red-2", "red-3", "red-4", "purple-1", "purple-2", "purple-3", "purple-4", "blue-1", "blue-2", "blue-3", "blue-4"]),
    _v33 = {
      "vimeo-blue-1": {
        background: "vimeoBlue.100",
        foreground: "vimeoBlue.300"
      },
      "vimeo-blue-2": {
        background: "vimeoBlue.200",
        foreground: "vimeoBlue.600"
      },
      "vimeo-blue-3": {
        background: "vimeoBlue.300",
        foreground: "vimeoBlue.700"
      },
      "vimeo-blue-4": {
        background: "vimeoBlue.400",
        foreground: "vimeoBlue.800"
      },
      "yellow-1": {
        background: "yellow.100",
        foreground: "yellow.500"
      },
      "yellow-2": {
        background: "yellow.200",
        foreground: "yellow.600"
      },
      "yellow-3": {
        background: "yellow.300",
        foreground: "yellow.700"
      },
      "yellow-4": {
        background: "yellow.400",
        foreground: "yellow.800"
      },
      "orange-1": {
        background: "orange.100",
        foreground: "orange.500"
      },
      "orange-2": {
        background: "orange.200",
        foreground: "orange.600"
      },
      "orange-3": {
        background: "orange.300",
        foreground: "orange.700"
      },
      "orange-4": {
        background: "orange.400",
        foreground: "orange.800"
      },
      "green-1": {
        background: "green.100",
        foreground: "green.500"
      },
      "green-2": {
        background: "green.200",
        foreground: "green.600"
      },
      "green-3": {
        background: "green.300",
        foreground: "green.700"
      },
      "green-4": {
        background: "green.400",
        foreground: "green.800"
      },
      "red-1": {
        background: "red.100",
        foreground: "red.500"
      },
      "red-2": {
        background: "red.200",
        foreground: "red.600"
      },
      "red-3": {
        background: "red.300",
        foreground: "red.700"
      },
      "red-4": {
        background: "red.400",
        foreground: "red.800"
      },
      "purple-1": {
        background: "purple.100",
        foreground: "purple.400"
      },
      "purple-2": {
        background: "purple.200",
        foreground: "purple.500"
      },
      "purple-3": {
        background: "purple.300",
        foreground: "purple.700"
      },
      "purple-4": {
        background: "purple.400",
        foreground: "purple.800"
      },
      "blue-1": {
        background: "blue.100",
        foreground: "blue.300"
      },
      "blue-2": {
        background: "blue.200",
        foreground: "blue.400"
      },
      "blue-3": {
        background: "blue.300",
        foreground: "blue.500"
      },
      "blue-4": {
        background: "blue.400",
        foreground: "blue.800"
      }
    };
  function _v34(_v0) {
    return "string" == typeof _v0 && _v32.includes(_v0);
  }
  function _v35(_v0) {
    let _v1 = 0;
    for (let _v0 = 0; _v0 < _v0.length; _v0++) _v1 = (_v1 << 5) - _v1 + _v0.charCodeAt(_v0) | 0;
    return _v32[Math.abs(_v1) % _v32.length];
  }
  _v0.s(["AVATAR_COLOR_PAIRS", 0, _v33, "AVATAR_COLOR_VARIANTS", 0, _v32, "getAvatarColorVariantForName", 0, _v35, "isAvatarColorVariant", 0, _v34], 0);
  let _v36 = (0, _v5.createContext)({
      useInitialsFallback: !1
    }),
    _v37 = _v36.Provider,
    _v38 = {
      xs: "22px",
      sm: "28px",
      md: "36px",
      lg: "42px",
      xl: "56px",
      "2xl": "82px",
      "3xl": "110px",
      auto: "100%"
    },
    _v39 = ({
      size: _v0 = "md"
    }) => (0, _v1.jsx)(_v28.Icon, {
      viewBox: "0 0 110 110",
      fill: "none",
      height: _v38[_v0],
      width: _v38[_v0],
      children: (0, _v1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M55 100.176C30.0497 100.176 9.82351 79.9503 9.82351 55C9.82351 30.0497 30.0497 9.82354 55 9.82354C79.9503 9.82354 100.176 30.0497 100.176 55C100.176 79.9503 79.9503 100.176 55 100.176ZM0.411743 55C0.411743 24.8518 24.8517 0.411774 55 0.411774C85.1482 0.411774 109.588 24.8518 109.588 55C109.588 85.1483 85.1482 109.588 55 109.588C24.8517 109.588 0.411743 85.1483 0.411743 55ZM55.0014 91.1414C64.681 91.1414 73.1418 85.699 77.7235 77.5884H32.2794C36.8611 85.699 45.3218 91.1414 55.0014 91.1414ZM85.4926 63.4706C85.4926 67.1092 82.543 70.0588 78.9044 70.0588C75.2658 70.0588 72.3162 67.1092 72.3162 63.4706C72.3162 59.832 75.2658 56.8824 78.9044 56.8824C82.543 56.8824 85.4926 59.832 85.4926 63.4706ZM30.7206 70.0588C34.3591 70.0588 37.3088 67.1092 37.3088 63.4706C37.3088 59.832 34.3591 56.8824 30.7206 56.8824C27.082 56.8824 24.1323 59.832 24.1323 63.4706C24.1323 67.1092 27.082 70.0588 30.7206 70.0588Z",
        fill: "#03C1EB"
      })
    }),
    _v40 = {
      xs: ".75rem",
      sm: "1rem",
      md: "1rem",
      lg: "1.5rem",
      xl: "2rem",
      "2xl": "3rem",
      "3xl": "4rem",
      auto: "100%"
    },
    _v41 = {
      xs: "0.375rem",
      sm: "0.5rem",
      md: "0.5rem",
      lg: "0.75rem",
      xl: "1rem",
      "2xl": "1rem",
      "3xl": "1.25rem",
      auto: "25%"
    },
    _v42 = {
      xs: "0.0625rem",
      sm: "0.0625rem",
      md: "0.0625rem",
      lg: "0.125rem",
      xl: "0.125rem",
      "2xl": "0.1875rem",
      "3xl": "0.1875rem",
      auto: "0.125rem"
    },
    _v43 = (_v0, _v1) => Array.isArray(_v0) ? _v0.map(_v0 => null == _v0 ? _v0 : _v1[_v0]) : _v0 && "object" == typeof _v0 ? Object.fromEntries(Object.entries(_v0).map(([_v0, _v1]) => [_v0, null == _v1 ? _v1 : _v1[_v1]])) : _v1[_v0 ?? "md"],
    _v44 = ({
      size: _v0 = "md",
      shape: _v1 = "full",
      zIndex: _v2
    }) => {
      let _v3 = "full" === _v1,
        _v4 = _v3 ? "14.64%" : "0";
      return (0, _v1.jsx)(_v27.Box, {
        "data-testid": "avatar-badge",
        "aria-hidden": !0,
        position: "absolute",
        zIndex: _v2,
        bottom: _v4,
        insetInlineEnd: _v4,
        transform: _v3 ? "translate(50%, 50%)" : "translate(25%, 25%)",
        boxSizing: "content-box",
        width: _v43(_v0, _v41),
        height: _v43(_v0, _v41),
        borderRadius: "100%",
        bg: "green.500",
        borderStyle: "solid",
        borderWidth: _v43(_v0, _v42),
        borderColor: "surface"
      });
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
    hasBadge: _v8,
    ..._v9
  }) => {
    let _v10 = (0, _v26.useStyleConfig)("Avatar", {
        size: _v0
      }),
      {
        useInitialsFallback: _v11
      } = (0, _v5.useContext)(_v36),
      _v12 = "full" === _v7 ? "100%" : {
        xs: "6px",
        sm: "6px",
        md: "8px",
        lg: "10px",
        xl: "10px",
        "2xl": "12px",
        "3xl": "12px",
        auto: "10px"
      }[_v0],
      _v13 = _v11 && !!_v1 && /\/portrait\/defaults?-(blue|gray)/.test(_v1),
      _v14 = _v4?.color || null,
      _v15 = _v4?.colorVariant,
      _v16 = _v34(_v15) ? _v15 : null,
      _v17 = _v4 && _v4.name.length > 0 && (_v11 || _v14 || _v16) ? _v4 : null,
      _v18 = _v17 && !_v14 ? _v16 ?? (_v11 ? _v35(_v17.name) : null) : null,
      _v19 = _v18 ? _v33[_v18] : null,
      _v20 = _v14 ?? _v19?.background,
      _v21 = _v14 && (({
        theme: _v0,
        color: _v1,
        colorMode: _v2
      }) => {
        let _v3 = (0, _v30.default)(_v0, `colors.${_v1}`, _v1),
          _v4 = (0, _v30.default)(_v0, `semanticTokens.colors.${_v1}`, _v1);
        return _v3 === _v4 ? (0, _v29.toRgba)(_v1) : "object" == typeof _v4 ? "light" === _v2 ? String(_v4.default) : String(_v4._dark) : String(_v3);
      })({
        theme: _v31.bokehTheme,
        color: _v14,
        colorMode: "light"
      }),
      _v22 = _v17 && _v20 ? (0, _v1.jsx)(_v27.Box, {
        __css: _v10,
        sx: _v6,
        borderRadius: _v12,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bg: _v20,
        color: _v19?.foreground ?? (0, _v29.readableColor)(_v21 ?? ""),
        fontSize: _v40[_v0],
        children: _v17.name.charAt(0).toUpperCase()
      }) : (0, _v1.jsx)(_v27.Box, {
        __css: _v10,
        sx: _v6,
        borderRadius: _v12,
        bg: "#C4F4FF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        children: (0, _v1.jsx)(_v39, {
          size: _v0
        })
      }),
      _v23 = _v17 && _v20 && _v13;
    return (0, _v1.jsxs)(_v25.Root, {
      style: {
        display: "inline-block",
        position: "relative"
      },
      ..._v9,
      children: [(0, _v1.jsx)(_v25.Fallback, {
        asChild: !0,
        children: _v22
      }), (0, _v1.jsx)(_v25.Image, {
        asChild: !0,
        children: (0, _v1.jsx)(_v27.Box, {
          as: "img",
          position: !_v1 || _v23 ? "absolute" : "relative",
          src: _v23 ? void 0 : _v1,
          srcSet: _v23 ? void 0 : _v2,
          alt: _v3,
          loading: _v5,
          __css: _v10,
          sx: _v6,
          borderRadius: _v12
        })
      }), _v8 && (0, _v1.jsx)(_v44, {
        size: _v0,
        shape: _v7,
        zIndex: _v6?.zIndex
      })]
    });
  }, "AvatarConfigProvider", 0, _v37], 0);
}