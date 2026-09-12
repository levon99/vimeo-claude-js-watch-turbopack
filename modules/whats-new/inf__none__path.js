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
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0);
  let _v21 = Promise.resolve(),
    _v22 = (0, _v19.withMiddleware)(_v18.default, _v0 => (_v0, _v1, _v2) => {
      let _v3,
        _v4 = (0, _v4.useRef)(!1),
        {
          cache: _v5,
          initialSize: _v6 = 1,
          revalidateAll: _v7 = !1,
          persistSize: _v8 = !1,
          revalidateFirstPage: _v9 = !0,
          revalidateOnMount: _v10 = !1,
          parallel: _v11 = !1
        } = _v2;
      try {
        (_v3 = (0, _v19.serialize)(_v0 ? _v0(0, null) : null)[0]) && (_v3 = "$inf$" + _v3);
      } catch (_v0) {}
      let [_v12, _v13, _v14] = (0, _v19.createCacheHelper)(_v5, _v3),
        _v15 = (0, _v4.useCallback)(() => (0, _v19.isUndefined)(_v12()._l) ? _v6 : _v12()._l, [_v5, _v3, _v6]);
      (0, _v20.useSyncExternalStore)((0, _v4.useCallback)(_v0 => _v3 ? _v14(_v3, () => {
        _v0();
      }) : () => {}, [_v5, _v3]), _v15, _v15);
      let _v16 = (0, _v4.useCallback)(() => {
          let _v0 = _v12()._l;
          return (0, _v19.isUndefined)(_v0) ? _v6 : _v0;
        }, [_v3, _v6]),
        _v17 = (0, _v4.useRef)(_v16());
      (0, _v19.useIsomorphicLayoutEffect)(() => {
        if (!_v4.current) {
          _v4.current = !0;
          return;
        }
        _v3 && _v13({
          _l: _v8 ? _v17.current : _v16()
        });
      }, [_v3, _v5]);
      let _v18 = _v10 && !_v4.current,
        _v19 = _v0(_v3, async _v0 => {
          let _v1 = _v12()._i,
            _v2 = [],
            _v3 = _v16(),
            [_v4] = (0, _v19.createCacheHelper)(_v5, _v0),
            _v5 = _v4().data,
            _v6 = [],
            _v7 = null;
          for (let _v0 = 0; _v0 < _v3; ++_v0) {
            let [_v0, _v1] = (0, _v19.serialize)(_v0(_v0, _v11 ? null : _v7));
            if (!_v0) break;
            let [_v2, _v3] = (0, _v19.createCacheHelper)(_v5, _v0),
              _v4 = _v2().data,
              _v5 = _v7 || _v1 || (0, _v19.isUndefined)(_v4) || _v9 && !_v0 && !(0, _v19.isUndefined)(_v5) || _v18 || _v5 && !(0, _v19.isUndefined)(_v5[_v0]) && !_v2.compare(_v5[_v0], _v4);
            if (_v1 && _v5) {
              let _v0 = async () => {
                _v3({
                  data: _v4 = await _v1(_v1),
                  _k: _v1
                }), _v2[_v0] = _v4;
              };
              _v11 ? _v6.push(_v0) : await _v0();
            } else _v2[_v0] = _v4;
            _v11 || (_v7 = _v4);
          }
          return _v11 && (await Promise.all(_v6.map(_v0 => _v0()))), _v13({
            _i: _v19.UNDEFINED
          }), _v2;
        }, _v2),
        _v20 = (0, _v4.useCallback)(function (_v0, _v1) {
          let _v2 = "boolean" == typeof _v1 ? {
              revalidate: _v1
            } : _v1 || {},
            _v3 = !1 !== _v2.revalidate;
          return _v3 ? (_v3 && ((0, _v19.isUndefined)(_v0) ? _v13({
            _i: !0
          }) : _v13({
            _i: !1
          })), arguments.length ? _v19.mutate(_v0, {
            ..._v2,
            revalidate: _v3
          }) : _v19.mutate()) : _v21;
        }, [_v3, _v5]),
        _v21 = (0, _v4.useCallback)(_v0 => {
          let _v1;
          if (!_v3) return _v21;
          let [, _v2] = (0, _v19.createCacheHelper)(_v5, _v3);
          if ((0, _v19.isFunction)(_v0) ? _v1 = _v0(_v16()) : "number" == typeof _v0 && (_v1 = _v0), "number" != typeof _v1) return _v21;
          _v2({
            _l: _v1
          }), _v17.current = _v1;
          let _v3 = [],
            [_v4] = (0, _v19.createCacheHelper)(_v5, _v3),
            _v5 = null;
          for (let _v0 = 0; _v0 < _v1; ++_v0) {
            let [_v0] = (0, _v19.serialize)(_v0(_v0, _v5)),
              [_v1] = (0, _v19.createCacheHelper)(_v5, _v0),
              _v2 = _v0 ? _v1().data : _v19.UNDEFINED;
            if ((0, _v19.isUndefined)(_v2)) return _v20(_v4().data);
            _v3.push(_v2), _v5 = _v2;
          }
          return _v20(_v3);
        }, [_v3, _v5, _v20, _v16]);
      return {
        size: _v16(),
        setSize: _v21,
        mutate: _v20,
        get data() {
          return _v19.data;
        },
        get error() {
          return _v19.error;
        },
        get isValidating() {
          return _v19.isValidating;
        },
        get isLoading() {
          return _v19.isLoading;
        }
      };
    });
  var _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0);
  let _v54 = _v0 => (0, _v1.jsx)(_v53.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      d: "M8.46 8.29A1.018 1.018 0 0 0 7 9.71L9.34 12 7 14.29a1 1 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l3-3a1 1 0 0 0 0-1.42l-2.96-3Zm8.5 3-3-3a1.004 1.004 0 0 0-1.42 1.42l2.3 2.29-2.3 2.29a1.002 1.002 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l3-3a1.001 1.001 0 0 0 .04-1.42h-.04Z",
      fill: "currentColor"
    })
  });
  var _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0);
  let _v58 = _v0 => (0, _v1.jsx)(_v53.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      d: "m21.9 7.59-1-3.87a3 3 0 0 0-3.71-2.12l-1.93.52a1 1 0 0 0-.71 1.23l.26 1L4.19 7.16a1 1 0 0 0-.71 1.22l.26 1-1 .26a1.008 1.008 0 1 0 .25 2c.087.01.174.01.26 0l1-.27.26 1a1 1 0 0 0 .46.6 1 1 0 0 0 .5.14.752.752 0 0 0 .26 0L9 12.08v.42c0 .444.104.882.3 1.28l-5 5a1 1 0 1 0 1.41 1.42l5-5 .28.11v6.19a1 1 0 0 0 2 0v-6.18c.1-.034.196-.074.29-.12l5 5a1 1 0 1 0 1.41-1.42l-5-5c.194-.4.3-.836.31-1.28v-2l1.35-.36.25 1a1 1 0 0 0 1 .74h.26l1.93-.52a3.001 3.001 0 0 0 2.11-3.77ZM13 12.5a1 1 0 0 1-.28.69 1 1 0 0 1-.69.28 1 1 0 0 1-.7-.29 1 1 0 0 1-.29-.7v-1L13 11v1.5Zm-6.81-1.74-.52-1.93 9.66-2.59.26 1 .26 1-9.66 2.52Zm13.68-1.9a1 1 0 0 1-.61.47l-1 .26-.78-2.9L17 4.76l-.26-1 1-.26a1 1 0 0 1 1.23.71l1 3.87a1 1 0 0 1-.1.78Z",
      fill: "currentColor"
    })
  });
  var _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v61 = _v0.i(0),
    _v62 = _v0.i(0),
    _v63 = _v0.i(0),
    _v64 = _v0.i(0);
  async function _v65({
    baseUrl: _v0,
    select: _v1,
    ..._v2
  }) {
    return (0, _v63.measureLatency)("postWhatsNewSeen", "POST", async () => {
      let _v0 = await fetch(`${_v0}/whats_new/seen?fields=${_v1.map(_v64.intoSnakeCase).join(",")}`, {
        ..._v2,
        method: "POST"
      });
      if (!_v0.ok) throw new _v64.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v64.deepCamelCase)(_v1);
    });
  }
  var _v66 = _v0.i(0),
    _v67 = _v0.i(0),
    _v68 = _v0.i(0),
    _v69 = _v0.i(0),
    _v70 = _v0.i(0);
  let _v71 = ["entries", "entries.blogPostUrl", "entries.category", "entries.clipEmbedUrl", "entries.clipId", "entries.clipModalEmbedUrl", "entries.clipThumbnailUrl", "entries.ctaText", "entries.ctaUrl", "entries.description", "entries.id", "entries.isNew", "entries.mediaType", "entries.mediaUrl", "entries.name", "entries.productArea", "entries.publishedOn", "entries.title", "entries.vote", "filters", "filters.categories", "filters.productAreas", "filters.productAreas.label", "filters.productAreas.value", "total", "totalReleased", "totalUpNext"],
    _v72 = {
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale"
    },
    _v73 = {
      feature: {
        background: "status-info-secondary",
        color: "status-info-primary"
      },
      improvement: {
        background: "status-positive-secondary",
        color: "status-positive-primary"
      },
      fix: {
        background: "upsell-secondary",
        color: "upsell-primary"
      },
      announcement: {
        background: "vimeoBlue.100",
        color: "vimeoBlue.700"
      },
      default: {
        background: "fill-component-secondary",
        color: "text-tertiary"
      }
    };
  function _v74(_v0) {
    return "string" == typeof _v0 ? _v0 : "";
  }
  let _v75 = ({
      label: _v0,
      value: _v1,
      options: _v2,
      onChange: _v3
    }) => (0, _v1.jsxs)(_v34.Menu, {
      isLazy: !0,
      placement: "bottom-end",
      children: [(0, _v1.jsx)(_v35.MenuButton, {
        as: _v25.Button,
        rightIcon: (0, _v1.jsx)(_v52.ChevronDownSmall, {
          boxSize: "24px"
        }),
        size: "sm",
        variant: "tertiary",
        whiteSpace: "nowrap",
        children: _v2.find(_v0 => _v0.value === _v1)?.label ?? _v0
      }), (0, _v1.jsx)(_v37.MenuList, {
        children: (0, _v1.jsxs)(_v38.MenuOptionGroup, {
          type: "radio",
          value: _v1,
          onChange: _v0 => {
            "string" == typeof _v0 && _v3(_v0);
          },
          children: [(0, _v1.jsx)(_v36.MenuItemOption, {
            value: "",
            children: _v0
          }), _v2.map(_v0 => (0, _v1.jsx)(_v36.MenuItemOption, {
            value: _v0.value,
            children: _v0.label
          }, _v0.value))]
        })
      })]
    }),
    _v76 = ({
      icon: _v0,
      title: _v1,
      body: _v2,
      action: _v3
    }) => (0, _v1.jsx)(_v24.Box, {
      marginTop: "400",
      minHeight: "500px",
      paddingX: "600",
      children: (0, _v1.jsx)(_v31.Flex, {
        align: "center",
        direction: "column",
        justify: "center",
        minHeight: "max(500px, calc(100vh - 400px))",
        padding: "200",
        children: (0, _v1.jsxs)(_v31.Flex, {
          align: "center",
          direction: "column",
          gap: "100",
          textAlign: "center",
          children: [(0, _v1.jsx)(_v24.Box, {
            sx: _v72,
            "aria-hidden": "true",
            children: _v0
          }), (0, _v1.jsx)(_v45.Text, {
            as: "h2",
            variant: "heading-md",
            sx: _v72,
            children: _v1
          }), (0, _v1.jsx)(_v45.Text, {
            color: "text-secondary",
            variant: "body-md",
            sx: _v72,
            children: _v2
          }), _v3 && (0, _v1.jsx)(_v24.Box, {
            marginTop: "200",
            children: _v3
          })]
        })
      })
    }),
    _v77 = () => (0, _v1.jsx)(_v31.Flex, {
      direction: "column",
      gap: "200",
      marginTop: "28px",
      maxWidth: "1036px",
      marginX: "auto",
      children: Array.from({
        length: 4
      }, (_v0, _v1) => (0, _v1.jsx)(_v24.Box, {
        bg: "surface",
        borderRadius: "lg",
        padding: {
          base: "300",
          md: "lg"
        },
        minHeight: {
          base: void 0,
          md: "240px"
        },
        children: (0, _v1.jsxs)(_v31.Flex, {
          direction: {
            base: "column",
            md: "row"
          },
          gap: {
            base: "300",
            md: "xl"
          },
          children: [(0, _v1.jsxs)(_v31.Flex, {
            direction: "column",
            flex: "1",
            gap: "200",
            width: "100%",
            children: [(0, _v1.jsx)(_v43.Skeleton, {
              height: "24px",
              width: "140px"
            }), (0, _v1.jsx)(_v43.Skeleton, {
              height: "24px",
              width: "70%"
            }), (0, _v1.jsx)(_v43.Skeleton, {
              height: "16px",
              width: "100%"
            }), (0, _v1.jsx)(_v43.Skeleton, {
              height: "16px",
              width: "90%"
            })]
          }), (0, _v1.jsx)(_v24.Box, {
            bg: "fill-component",
            borderRadius: "md",
            alignSelf: {
              base: "center",
              md: "stretch"
            },
            width: {
              base: "100%",
              md: "341.33px"
            },
            aspectRatio: {
              base: "16/9"
            },
            flexShrink: "0",
            children: (0, _v1.jsx)(_v43.Skeleton, {
              width: "100%",
              height: "100%"
            })
          })]
        })
      }, _v1))
    }),
    _v78 = ({
      src: _v0,
      title: _v1
    }) => {
      let _v2 = (0, _v4.useRef)(null),
        _v3 = (0, _v15.useInView)(_v2, {
          once: !0
        }),
        [_v4, _v5] = (0, _v4.useState)(!1);
      return (0, _v1.jsx)(_v24.Box, {
        ref: _v2,
        width: "100%",
        height: "100%",
        children: _v3 ? (0, _v1.jsx)(_v24.Box, {
          visibility: _v4 ? "visible" : "hidden",
          height: "100%",
          overflow: "hidden",
          children: (0, _v1.jsx)(_v24.Box, {
            position: "relative",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            aspectRatio: "16/9",
            minWidth: "100%",
            minHeight: "100%",
            children: (0, _v1.jsx)(_v61.EmbedPlayer, {
              disableAPI: !0,
              src: _v0,
              title: _v1,
              onIframeLoad: () => _v5(!0),
              style: {
                colorScheme: "normal"
              }
            })
          })
        }) : null
      });
    },
    _v79 = {
      cursor: "zoom-in",
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "transparent",
      backgroundClip: "padding-box",
      transition: "border-color 150ms ease-out, transform 150ms ease-out",
      _hover: {
        borderColor: "button-tertiary-hover",
        transform: "scale(1.02)"
      }
    },
    _v80 = {
      green: {
        pill: "green.50",
        pillDark: "green.900",
        icon: "green.600",
        iconDark: "green.300",
        accent: "var(--vimeo-colors-green-600)",
        accentDark: "var(--vimeo-colors-green-300)"
      },
      red: {
        pill: "red.50",
        pillDark: "red.900",
        icon: "red.600",
        iconDark: "red.300",
        accent: "var(--vimeo-colors-red-600)",
        accentDark: "var(--vimeo-colors-red-300)"
      }
    },
    _v81 = {
      idle: {
        scale: .6,
        opacity: 0
      },
      active: {
        scale: [.6, 2],
        opacity: [0, .9, 0],
        transition: {
          duration: .5,
          ease: "easeOut",
          times: [0, .15, 1]
        }
      }
    },
    _v82 = _v50.keyframes`
  from { background-color: var(--vote-surface); color: var(--vote-icon-color); }
  to { background-color: transparent; color: var(--vimeo-colors-text-secondary); }
`,
    _v83 = ({
      burstId: _v0,
      color: _v1
    }) => (0, _v1.jsx)(_v13.AnimatePresence, {
      children: Array.from({
        length: 6
      }, (_v0, _v1) => {
        let _v2 = 360 * _v1 / 6;
        return (0, _v1.jsx)(_v14.motion.span, {
          initial: {
            scale: 1,
            opacity: 1
          },
          animate: {
            scale: [1, 1, 0],
            opacity: [1, 1, 0],
            x: 28 * Math.cos(_v2 * Math.PI / 180),
            y: 28 * Math.sin(_v2 * Math.PI / 180)
          },
          transition: {
            duration: .55,
            ease: "easeOut",
            times: [0, .6, 1]
          },
          style: {
            position: "absolute",
            top: "50%",
            left: "50%",
            marginTop: "-1.5px",
            marginLeft: "-1.5px",
            width: "3px",
            height: "3px",
            borderRadius: "9999px",
            background: _v1,
            pointerEvents: "none"
          }
        }, `${_v0}-${_v2}`);
      })
    }),
    _v84 = ({
      label: _v0,
      value: _v1,
      entry: _v2,
      hue: _v3,
      onVote: _v4,
      children: _v5
    }) => {
      let _v6 = _v80[_v3],
        _v7 = _v2.vote === _v1,
        _v8 = (0, _v48.useColorModeValue)(_v6.accent, _v6.accentDark),
        _v9 = (0, _v48.useColorModeValue)(_v6.icon, _v6.iconDark),
        _v10 = (0, _v48.useColorModeValue)(_v6.pill, _v6.pillDark),
        _v11 = function () {
          _v17.hasReducedMotionListener.current || (0, _v16.initPrefersReducedMotion)();
          let [_v0] = (0, _v4.useState)(_v17.prefersReducedMotion.current);
          return _v0;
        }(),
        [_v12, _v13] = (0, _v4.useState)(0),
        [_v14, _v15] = (0, _v4.useState)(!1),
        _v16 = (0, _v4.useRef)(null);
      (0, _v4.useEffect)(() => () => {
        null !== _v16.current && clearTimeout(_v16.current);
      }, []);
      let _v17 = (0, _v4.useCallback)(() => {
        null !== _v16.current && (clearTimeout(_v16.current), _v16.current = null), _v2.vote === _v1 ? !0 !== _v11 && (_v15(!0), _v16.current = setTimeout(() => _v15(!1), 180)) : (!0 !== _v11 && _v13(_v0 => _v0 + 1), _v15(!1)), _v4(_v2, _v1);
      }, [_v2, _v4, _v11, _v1]);
      return (0, _v1.jsxs)(_v24.Box, {
        position: "relative",
        display: "inline-flex",
        children: [!0 !== _v11 && _v12 > 0 && _v7 && (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v14.motion.span, {
            "aria-hidden": "true",
            initial: "idle",
            animate: "active",
            variants: _v81,
            style: {
              position: "absolute",
              top: "50%",
              left: "50%",
              marginTop: "-16px",
              marginLeft: "-16px",
              width: "32px",
              height: "32px",
              borderRadius: "9999px",
              borderStyle: "solid",
              borderWidth: "2px",
              borderColor: _v8,
              background: "transparent",
              pointerEvents: "none"
            }
          }, `ring-${_v12}`), (0, _v1.jsx)(_v83, {
            burstId: _v12,
            color: _v8
          })]
        }), (0, _v1.jsx)(_v32.IconButton, {
          "aria-label": _v0,
          "aria-pressed": _v7,
          icon: (0, _v1.jsx)("span", {
            style: {
              display: "inline-flex"
            },
            children: _v5
          }),
          variant: "tertiary",
          size: "sm",
          color: _v7 ? _v9 : "text-secondary",
          sx: {
            "--vote-surface": _v10,
            "--vote-icon-color": _v9,
            ...(_v7 ? {
              background: _v6.pill,
              _dark: {
                background: _v6.pillDark,
                color: _v6.iconDark
              }
            } : _v14 ? {
              animation: `${_v82} 0.18s ease-out both`,
              "@media (prefers-reduced-motion: reduce)": {
                animation: "none"
              }
            } : void 0)
          },
          onClick: _v17
        })]
      });
    },
    _v85 = ({
      src: _v0,
      title: _v1
    }) => {
      let [_v2, _v3] = (0, _v4.useState)(!1);
      return (0, _v1.jsxs)(_v24.Box, {
        position: "relative",
        width: "100%",
        height: "100%",
        children: [!_v2 && (0, _v1.jsx)(_v31.Flex, {
          position: "absolute",
          inset: "0",
          align: "center",
          justify: "center",
          children: (0, _v1.jsx)(_v44.Spinner, {
            size: "lg"
          })
        }), (0, _v1.jsx)(_v61.EmbedPlayer, {
          disableAPI: !0,
          src: _v0,
          title: _v1,
          onIframeLoad: () => _v3(!0),
          style: {
            colorScheme: "normal"
          }
        })]
      });
    },
    _v86 = ({
      entry: _v0,
      isOpen: _v1,
      onClose: _v2
    }) => (0, _v1.jsxs)(_v40.Modal, {
      isOpen: _v1,
      onClose: _v2,
      isCentered: !0,
      children: [(0, _v1.jsx)(_v42.ModalOverlay, {}), (0, _v1.jsxs)(_v41.ModalContent, {
        position: "relative",
        maxWidth: {
          base: "calc(100vw - 32px)",
          md: "fit-content"
        },
        width: {
          base: "calc(100vw - 32px)",
          md: "auto"
        },
        overflow: "visible",
        background: "transparent",
        boxShadow: "none",
        children: [(0, _v1.jsx)(_v31.Flex, {
          justify: "flex-end",
          marginBottom: "100",
          children: (0, _v1.jsx)(_v39.CloseButton, {
            onClick: _v2,
            "aria-label": (0, _v7.translate)({
              singular: "Close",
              dictionary: {
                es: {
                  singular: "Cerrar"
                },
                "de-DE": {
                  singular: "Schließen"
                },
                "fr-FR": {
                  singular: "Fermer "
                },
                "ja-JP": {
                  singular: "閉じる"
                },
                "ko-KR": {
                  singular: "닫기"
                },
                "pt-BR": {
                  singular: "Fechar"
                },
                "zh-CN": {
                  singular: "关闭"
                }
              }
            }),
            background: "surface",
            borderRadius: "full",
            _hover: {
              background: "fill-component-hover"
            }
          })
        }), (0, _v1.jsx)(_v24.Box, {
          overflow: "hidden",
          borderRadius: "md",
          boxShadow: "shadow-lg",
          background: void 0 !== _v0.mediaUrl ? "surface" : "black",
          children: void 0 !== _v0.mediaUrl ? (0, _v1.jsx)(_v33.Image, {
            src: _v0.mediaUrl,
            alt: _v0.title,
            maxWidth: {
              base: "calc(100vw - 32px)",
              md: "80vw"
            },
            maxHeight: "85dvh",
            width: "auto",
            height: "auto",
            display: "block"
          }) : void 0 !== _v0.clipModalEmbedUrl ? (0, _v1.jsx)(_v24.Box, {
            width: {
              base: "calc(100vw - 32px)",
              md: "min(80vw, 1280px)"
            },
            aspectRatio: "16/9",
            maxHeight: "85dvh",
            children: (0, _v1.jsx)(_v85, {
              src: _v0.clipModalEmbedUrl,
              title: _v0.title
            })
          }) : null
        })]
      })]
    }),
    _v87 = ({
      entry: _v0,
      isUpNext: _v1 = !1
    }) => {
      let [_v2, _v3] = (0, _v4.useState)(!1),
        _v4 = (0, _v47.useDisclosure)(),
        _v5 = void 0 !== _v0.mediaUrl,
        _v6 = !_v1;
      if (_v2 || !_v5 && void 0 === _v0.clipEmbedUrl) return null;
      let _v7 = (0, _v1.jsxs)(_v1.Fragment, {
        children: [_v6 && (0, _v1.jsx)(_v86, {
          entry: _v0,
          isOpen: _v4.isOpen,
          onClose: _v4.onClose
        }), _v5 ? (0, _v1.jsx)(_v33.Image, {
          src: _v0.mediaUrl,
          alt: "",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          loading: "lazy",
          filter: _v1 ? "blur(8px)" : void 0,
          transform: _v1 ? "scale(1.1)" : void 0,
          onError: () => _v3(!0)
        }) : (0, _v1.jsxs)(_v1.Fragment, {
          children: [void 0 !== _v0.clipThumbnailUrl && (0, _v1.jsx)(_v33.Image, {
            src: _v0.clipThumbnailUrl,
            alt: "",
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            loading: "lazy",
            filter: _v1 ? "blur(8px)" : void 0,
            transform: _v1 ? "scale(1.1)" : void 0
          }), (0, _v1.jsx)(_v24.Box, {
            position: "relative",
            zIndex: "1",
            filter: _v1 ? "blur(8px)" : void 0,
            transform: _v1 ? "scale(1.1)" : void 0,
            width: "100%",
            height: "100%",
            children: void 0 !== _v0.clipEmbedUrl && (0, _v1.jsx)(_v78, {
              src: _v0.clipEmbedUrl,
              title: _v0.title
            })
          }), (0, _v1.jsx)(_v24.Box, {
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            zIndex: "2",
            background: "transparent"
          })]
        })]
      });
      return _v6 ? (0, _v1.jsx)(_v24.Box, {
        as: "button",
        type: "button",
        "aria-label": (0, _v7.translate)({
          singular: "Open {title} in full size",
          replacements: {
            title: _v0.title
          },
          dictionary: {
            es: {
              singular: "Abrir {title} en tamaño completo"
            },
            "de-DE": {
              singular: "Öffnen Sie {title} in voller Größe"
            },
            "fr-FR": {
              singular: "Ouvrir {title} en taille réelle"
            },
            "ja-JP": {
              singular: "「{title}」をフルサイズで開く"
            },
            "ko-KR": {
              singular: "{title}을(를) 전체 크기로 열기"
            },
            "pt-BR": {
              singular: "Abrir {title} em tamanho real"
            },
            "zh-CN": {
              singular: "以全尺寸打开 {title}"
            }
          }
        }),
        onClick: _v4.onOpen,
        alignSelf: {
          base: "center",
          md: "stretch"
        },
        flexShrink: "0",
        bg: "fill-component",
        overflow: "hidden",
        borderRadius: "md",
        width: {
          base: "100%",
          md: "341.33px"
        },
        aspectRatio: {
          base: "16/9"
        },
        position: "relative",
        padding: "0",
        textAlign: "left",
        sx: _v79,
        children: _v7
      }) : (0, _v1.jsx)(_v24.Box, {
        alignSelf: {
          base: "center",
          md: "stretch"
        },
        flexShrink: "0",
        bg: "fill-component",
        overflow: "hidden",
        borderRadius: "md",
        width: {
          base: "100%",
          md: "341.33px"
        },
        aspectRatio: {
          base: "16/9"
        },
        position: "relative",
        children: _v7
      });
    },
    _v88 = () => {
      let _v0 = (0, _v3.useRouter)(),
        {
          baseUrl: _v1,
          jwt: _v2
        } = (0, _v66.useGctlConfig)(),
        _v3 = (0, _v70.useLocale)(),
        _v4 = (0, _v12.useViewer)(),
        _v5 = (0, _v68.usePico)(),
        _v6 = (0, _v49.useToast)(),
        _v7 = (0, _v47.useDisclosure)(),
        [_v8, _v9] = (0, _v4.useState)(!1),
        _v10 = (0, _v4.useRef)(!1),
        _v11 = (0, _v4.useRef)(!1),
        _v12 = (0, _v4.useMemo)(() => ({
          feature: (0, _v7.translate)({
            singular: "Feature",
            dictionary: {
              es: {
                singular: "Función"
              },
              "de-DE": {
                singular: "Funktion"
              },
              "fr-FR": {
                singular: "Fonctionnalité"
              },
              "ja-JP": {
                singular: "機能"
              },
              "ko-KR": {
                singular: "기능"
              },
              "pt-BR": {
                singular: "Recurso"
              },
              "zh-CN": {
                singular: "功能"
              }
            }
          }),
          improvement: (0, _v7.translate)({
            singular: "Improvement",
            dictionary: {
              es: {
                singular: "Mejora"
              },
              "de-DE": {
                singular: "Verbesserung"
              },
              "fr-FR": {
                singular: "Amélioration"
              },
              "ja-JP": {
                singular: "改善"
              },
              "ko-KR": {
                singular: "개선"
              },
              "pt-BR": {
                singular: "Melhoria"
              },
              "zh-CN": {
                singular: "改进"
              }
            }
          }),
          fix: (0, _v7.translate)({
            singular: "Fix",
            dictionary: {
              es: {
                singular: "Corrección"
              },
              "de-DE": {
                singular: "Fehlerbehebung"
              },
              "fr-FR": {
                singular: "Correction"
              },
              "ja-JP": {
                singular: "修正"
              },
              "ko-KR": {
                singular: "수정"
              },
              "pt-BR": {
                singular: "Correção"
              },
              "zh-CN": {
                singular: "修复"
              }
            }
          }),
          announcement: (0, _v7.translate)({
            singular: "Announcement",
            dictionary: {
              es: {
                singular: "Anuncio"
              },
              "de-DE": {
                singular: "Ankündigung"
              },
              "fr-FR": {
                singular: "Annonce"
              },
              "ja-JP": {
                singular: "お知らせ"
              },
              "ko-KR": {
                singular: "발표"
              },
              "pt-BR": {
                singular: "Comunicado"
              },
              "zh-CN": {
                singular: "公告"
              }
            }
          })
        }), []),
        _v13 = "up_next" === _v74(_v0.query.tab) ? "up_next" : "released",
        _v14 = _v74(_v0.query.product_area),
        _v15 = _v74(_v0.query.category),
        _v16 = _v74(_v0.query.q),
        _v17 = !!_v2,
        {
          data: _v18,
          error: _v19,
          isLoading: _v20,
          isValidating: _v21,
          size: _v22,
          setSize: _v23,
          mutate: _v24
        } = _v22((0, _v4.useCallback)((_v0, _v1) => !_v17 || _v1 && _v1.total <= 10 * _v0 ? null : {
          tab: _v13,
          page: _v0 + 1,
          perPage: 10,
          ...("" !== _v14 && {
            productArea: _v14
          }),
          ...("" !== _v15 && {
            category: _v15
          }),
          ...("" !== _v16 && {
            q: _v16
          })
        }, [_v15, _v17, _v14, _v16, _v13]), (0, _v4.useCallback)(_v0 => {
          let {
            page: _v1,
            perPage: _v2,
            tab: _v3,
            productArea: _v4,
            category: _v5,
            q: _v6
          } = _v0;
          return (0, _v62.getWhatsNew)({
            baseUrl: _v1,
            headers: {
              Accept: "application/vnd.vimeo.*+json;version=3.4",
              Authorization: _v2 ? `jwt ${_v2}` : ""
            },
            select: _v71,
            query: {
              page: _v1,
              perPage: _v2,
              tab: _v3,
              ...(void 0 !== _v4 && {
                productArea: _v4
              }),
              ...(void 0 !== _v5 && {
                category: _v5
              }),
              ...(void 0 !== _v6 && {
                q: _v6
              })
            }
          });
        }, [_v1, _v2]), {
          revalidateOnFocus: !1,
          revalidateFirstPage: !1
        }),
        _v25 = (0, _v4.useMemo)(() => (_v18 ?? []).flatMap(_v0 => _v0.entries), [_v18]),
        _v26 = void 0 !== _v19 && 0 === _v25.length,
        _v27 = void 0 !== _v19 && _v25.length > 0,
        _v28 = _v18?.[0]?.totalReleased ?? 0,
        _v29 = _v18?.[0]?.totalUpNext ?? 0,
        _v30 = _v18?.[0]?.total ?? 0,
        _v31 = _v18?.[0]?.filters,
        _v32 = "" !== _v14 || "" !== _v15 || "" !== _v16;
      (0, _v4.useEffect)(() => {
        _v20 || void 0 !== _v19 || _v10.current || _v11.current || void 0 !== _v18 && 0 !== _v18.length && (_v11.current = !0, _v65({
          baseUrl: _v1,
          select: ["lastSeenAt"],
          headers: {
            Authorization: _v2 ? `jwt ${_v2}` : ""
          }
        }).catch(() => void 0).finally(() => {
          _v10.current = !0, _v11.current = !1;
        }));
      }, [_v1, _v19, _v20, _v2, _v18]);
      let _v33 = (0, _v4.useMemo)(() => {
          if ("released" !== _v13) return [[void 0, _v25]];
          let _v0 = {};
          for (let _v0 of _v25) {
            let _v0 = function (_v0, _v1) {
              let _v2 = new Date(_v0);
              return Number.isNaN(_v2.getTime()) ? null : new Intl.DateTimeFormat(_v1, {
                month: "long",
                year: "numeric"
              }).format(_v2);
            }(_v0.publishedOn, _v3);
            null !== _v0 && (_v0[_v0] = [...(_v0[_v0] ?? []), _v0]);
          }
          return Object.entries(_v0);
        }, [_v25, _v3, _v13]),
        _v34 = (0, _v4.useCallback)(() => {
          _v23(_v0 => _v0 + 1);
        }, [_v23]),
        _v35 = (0, _v4.useCallback)(_v0 => {
          let _v1 = Object.fromEntries(Object.entries({
            ..._v0.query,
            ..._v0
          }).filter(([, _v0]) => "" !== _v0));
          _v0.replace({
            pathname: _v0.pathname,
            query: _v1
          }, void 0, {
            shallow: !0
          });
        }, [_v0]),
        _v36 = (0, _v4.useCallback)(async (_v0, _v1) => {
          if (!_v1 || !_v2) return;
          let _v2 = _v0.vote === _v1 ? "DELETE" : "PUT",
            _v3 = "DELETE" === _v2 ? null : _v1;
          if (_v24(_v0 => _v0?.map(_v0 => ({
            ..._v0,
            entries: _v0.entries.map(_v0 => _v0.id === _v0.id ? null === _v3 ? {
              ..._v0,
              vote: void 0
            } : {
              ..._v0,
              vote: _v3
            } : _v0)
          })), {
            revalidate: !1
          }), !(await fetch(`${_v1}/whats_new/${_v0.id}/vote`, {
            method: _v2,
            headers: {
              Accept: "application/vnd.vimeo.*+json;version=3.4",
              Authorization: `jwt ${_v2}`,
              "Content-Type": "application/json"
            },
            ...("DELETE" === _v2 ? {} : {
              body: JSON.stringify({
                value: _v1
              })
            })
          })).ok) {
            _v24(_v0 => _v0?.map(_v0 => ({
              ..._v0,
              entries: _v0.entries.map(_v0 => _v0.id === _v0.id ? {
                ..._v0,
                vote: _v0.vote
              } : _v0)
            }))), _v6({
              variant: "warning",
              title: (0, _v7.translate)({
                singular: "Could not save your vote",
                dictionary: {
                  es: {
                    singular: "No se pudo guardar su voto"
                  },
                  "de-DE": {
                    singular: "Ihre Stimme konnte nicht gespeichert werden"
                  },
                  "fr-FR": {
                    singular: "Impossible d'enregistrer votre vote"
                  },
                  "ja-JP": {
                    singular: "投票を保存できませんでした"
                  },
                  "ko-KR": {
                    singular: "투표를 저장할 수 없습니다"
                  },
                  "pt-BR": {
                    singular: "Não foi possível salvar seu voto"
                  },
                  "zh-CN": {
                    singular: "无法保存您的投票"
                  }
                }
              })
            });
            return;
          }
          "PUT" === _v2 && _v6({
            variant: "success",
            title: (0, _v7.translate)({
              singular: "Thanks for your feedback",
              dictionary: {
                es: {
                  singular: "Gracias por tus comentarios"
                },
                "de-DE": {
                  singular: "Vielen Dank für Ihr Feedback"
                },
                "fr-FR": {
                  singular: "Merci pour votre retour"
                },
                "ja-JP": {
                  singular: "フィードバックありがとうございます"
                },
                "ko-KR": {
                  singular: "피드백 감사합니다"
                },
                "pt-BR": {
                  singular: "Obrigado pelo seu feedback"
                },
                "zh-CN": {
                  singular: "感谢您的反馈"
                }
              }
            })
          });
        }, [_v1, _v2, _v24, _v6]),
        _v37 = (0, _v4.useCallback)((_v0, _v1) => {
          let _v2 = _v1.trim().slice(0, 500);
          "" !== _v2 && (_v5.track("whats_new_feedback_submitted", {
            entry_id: _v0,
            comment: _v2
          }), _v6({
            variant: "success",
            title: (0, _v7.translate)({
              singular: "Thanks for your feedback",
              dictionary: {
                es: {
                  singular: "Gracias por tus comentarios"
                },
                "de-DE": {
                  singular: "Vielen Dank für Ihr Feedback"
                },
                "fr-FR": {
                  singular: "Merci pour votre retour"
                },
                "ja-JP": {
                  singular: "フィードバックありがとうございます"
                },
                "ko-KR": {
                  singular: "피드백 감사합니다"
                },
                "pt-BR": {
                  singular: "Obrigado pelo seu feedback"
                },
                "zh-CN": {
                  singular: "感谢您的反馈"
                }
              }
            })
          }));
        }, [_v5, _v6]),
        _v38 = (0, _v4.useMemo)(() => (_v31?.categories ?? []).map(_v0 => ({
          value: _v0,
          label: _v12[_v0] ?? _v0
        })), [_v12, _v31]),
        _v39 = (0, _v4.useMemo)(() => _v31?.productAreas ?? [], [_v31]),
        _v40 = (0, _v1.jsxs)(_v31.Flex, {
          direction: {
            base: "column",
            md: "row"
          },
          gap: "50",
          children: [(0, _v1.jsx)(_v75, {
            label: (0, _v7.translate)({
              singular: "All product areas",
              dictionary: {
                es: {
                  singular: "Todas las áreas de producto"
                },
                "de-DE": {
                  singular: "Alle Produktbereiche"
                },
                "fr-FR": {
                  singular: "Tous les domaines de produit"
                },
                "ja-JP": {
                  singular: "すべての製品領域"
                },
                "ko-KR": {
                  singular: "모든 제품 영역"
                },
                "pt-BR": {
                  singular: "Todas as áreas de produto"
                },
                "zh-CN": {
                  singular: "所有产品领域"
                }
              }
            }),
            value: _v14,
            options: _v39,
            onChange: _v0 => _v35({
              product_area: _v0
            })
          }), (0, _v1.jsx)(_v75, {
            label: (0, _v7.translate)({
              singular: "All categories",
              dictionary: {
                es: {
                  singular: "Todas las categorías"
                },
                "de-DE": {
                  singular: "Alle Kategorien"
                },
                "fr-FR": {
                  singular: "Toutes les catégories"
                },
                "ja-JP": {
                  singular: "全カテゴリー"
                },
                "ko-KR": {
                  singular: "모든 카테고리"
                },
                "pt-BR": {
                  singular: "Todas as categorias"
                },
                "zh-CN": {
                  singular: "所有类别"
                }
              }
            }),
            value: _v15,
            options: _v38,
            onChange: _v0 => _v35({
              category: _v0
            })
          })]
        });
      return (0, _v1.jsxs)(_v24.Box, {
        width: "100%",
        margin: "0",
        padding: "300",
        paddingTop: "0",
        children: [(0, _v1.jsxs)(_v24.Box, {
          position: "sticky",
          top: "4rem",
          background: "background",
          zIndex: "30",
          paddingTop: "300",
          paddingBottom: {
            base: "md",
            md: "lg"
          },
          children: [(0, _v1.jsxs)(_v31.Flex, {
            justify: "space-between",
            align: "center",
            gap: "300",
            children: [(0, _v1.jsx)(_v45.Text, {
              as: "h1",
              variant: "heading-xl",
              children: (0, _v7.translate)({
                singular: "What's new",
                dictionary: {
                  es: {
                    singular: "Novedades"
                  },
                  "de-DE": {
                    singular: "Was gibt es Neues?"
                  },
                  "fr-FR": {
                    singular: "Quoi de neuf ?"
                  },
                  "ja-JP": {
                    singular: "新着情報"
                  },
                  "ko-KR": {
                    singular: "새로운 기능"
                  },
                  "pt-BR": {
                    singular: "Novidades"
                  },
                  "zh-CN": {
                    singular: "新增内容"
                  }
                }
              })
            }), (0, _v1.jsx)(_v25.Button, {
              as: "a",
              "aria-label": (0, _v7.translate)({
                singular: "Provide feedback",
                dictionary: {
                  es: {
                    singular: "Enviar comentarios"
                  },
                  "de-DE": {
                    singular: "Feedback geben"
                  },
                  "fr-FR": {
                    singular: "Donner votre avis"
                  },
                  "ja-JP": {
                    singular: "フィードバックを送信"
                  },
                  "ko-KR": {
                    singular: "피드백 보내기"
                  },
                  "pt-BR": {
                    singular: "Enviar feedback"
                  },
                  "zh-CN": {
                    singular: "提供反馈"
                  }
                }
              }),
              href: `https://ms732111.typeform.com/to/tRkV89rl#vimeo_user_id=${_v4?.user?.id ?? ""}`,
              target: "_blank",
              rel: "noopener",
              paddingX: {
                base: 0,
                md: "200"
              },
              size: "md",
              variant: "secondary",
              width: {
                base: "40px",
                md: "auto"
              },
              children: (0, _v1.jsxs)(_v31.Flex, {
                align: "center",
                gap: {
                  base: 0,
                  md: "6px"
                },
                children: [(0, _v1.jsx)(_v56.ReviewCheck, {
                  boxSize: "24px"
                }), (0, _v1.jsx)(_v45.Text, {
                  display: {
                    base: "none",
                    md: "inline"
                  },
                  as: "span",
                  variant: "heading-xs",
                  sx: _v72,
                  children: (0, _v7.translate)({
                    singular: "Provide feedback",
                    dictionary: {
                      es: {
                        singular: "Enviar comentarios"
                      },
                      "de-DE": {
                        singular: "Feedback geben"
                      },
                      "fr-FR": {
                        singular: "Donner votre avis"
                      },
                      "ja-JP": {
                        singular: "フィードバックを送信"
                      },
                      "ko-KR": {
                        singular: "피드백 보내기"
                      },
                      "pt-BR": {
                        singular: "Enviar feedback"
                      },
                      "zh-CN": {
                        singular: "提供反馈"
                      }
                    }
                  })
                })]
              })
            })]
          }), (0, _v1.jsxs)(_v31.Flex, {
            marginTop: "20px",
            justify: "space-between",
            align: "center",
            gap: {
              base: "50",
              md: "300"
            },
            direction: "row",
            children: [(0, _v1.jsxs)(_v31.Flex, {
              flexShrink: "0",
              gap: "75",
              children: [(0, _v1.jsx)(_v25.Button, {
                "aria-label": (0, _v7.translate)({
                  singular: "Released",
                  dictionary: {
                    es: {
                      singular: "Publicado"
                    },
                    "de-DE": {
                      singular: "Veröffentlicht"
                    },
                    "fr-FR": {
                      singular: "Publié"
                    },
                    "ja-JP": {
                      singular: "リリース済み"
                    },
                    "ko-KR": {
                      singular: "출시됨"
                    },
                    "pt-BR": {
                      singular: "Lançado"
                    },
                    "zh-CN": {
                      singular: "已发布"
                    }
                  }
                }),
                height: "40px",
                paddingLeft: {
                  base: "sm",
                  md: "12px"
                },
                paddingRight: {
                  base: "sm",
                  md: "200"
                },
                transition: "background-color 150ms linear",
                variant: "released" === _v13 ? "primary" : "secondary",
                ...("released" === _v13 ? {} : {
                  background: "transparent",
                  borderColor: "stroke",
                  borderWidth: "1px"
                }),
                onClick: () => _v35({
                  tab: ""
                }),
                children: (0, _v1.jsxs)(_v31.Flex, {
                  align: "center",
                  gap: {
                    base: _v8 ? 0 : "50",
                    md: "50"
                  },
                  children: [(0, _v1.jsx)(_v51.CheckSmall, {
                    boxSize: "24px"
                  }), (0, _v1.jsx)(_v24.Box, {
                    maxWidth: {
                      base: _v8 ? 0 : "160px",
                      md: "160px"
                    },
                    minWidth: "0",
                    opacity: {
                      base: +!_v8,
                      md: 1
                    },
                    overflow: "hidden",
                    transition: "max-width 150ms ease-out, opacity 120ms ease-out",
                    children: (0, _v1.jsxs)(_v31.Flex, {
                      align: "center",
                      gap: "75",
                      whiteSpace: "nowrap",
                      children: [(0, _v1.jsx)(_v45.Text, {
                        as: "span",
                        variant: "heading-xs",
                        sx: _v72,
                        children: (0, _v7.translate)({
                          singular: "Released",
                          dictionary: {
                            es: {
                              singular: "Publicado"
                            },
                            "de-DE": {
                              singular: "Veröffentlicht"
                            },
                            "fr-FR": {
                              singular: "Publié"
                            },
                            "ja-JP": {
                              singular: "リリース済み"
                            },
                            "ko-KR": {
                              singular: "출시됨"
                            },
                            "pt-BR": {
                              singular: "Lançado"
                            },
                            "zh-CN": {
                              singular: "已发布"
                            }
                          }
                        })
                      }), (0, _v1.jsx)(_v45.Text, {
                        as: "span",
                        color: "released" === _v13 ? "text-button-inverted" : "text-tertiary",
                        visibility: void 0 !== _v18 ? "visible" : "hidden",
                        minWidth: "1.5ch",
                        sx: _v72,
                        variant: "body-md",
                        children: _v28
                      })]
                    })
                  })]
                })
              }), (0, _v1.jsx)(_v25.Button, {
                "aria-label": (0, _v7.translate)({
                  singular: "Up next",
                  dictionary: {
                    es: {
                      singular: "A continuación"
                    },
                    "de-DE": {
                      singular: "Direkt danach"
                    },
                    "fr-FR": {
                      singular: "Suivant"
                    },
                    "ja-JP": {
                      singular: "次へ"
                    },
                    "ko-KR": {
                      singular: "다음 동영상"
                    },
                    "pt-BR": {
                      singular: "Próximo"
                    },
                    "zh-CN": {
                      singular: "下一个"
                    }
                  }
                }),
                height: "40px",
                paddingLeft: {
                  base: "sm",
                  md: "12px"
                },
                paddingRight: {
                  base: "sm",
                  md: "200"
                },
                transition: "background-color 150ms linear",
                variant: "up_next" === _v13 ? "primary" : "secondary",
                ...("up_next" === _v13 ? {} : {
                  background: "transparent",
                  borderColor: "stroke",
                  borderWidth: "1px"
                }),
                onClick: () => _v35({
                  tab: "up_next"
                }),
                children: (0, _v1.jsxs)(_v31.Flex, {
                  align: "center",
                  gap: {
                    base: _v8 ? 0 : "50",
                    md: "50"
                  },
                  children: [(0, _v1.jsx)(_v54, {
                    boxSize: "24px"
                  }), (0, _v1.jsx)(_v24.Box, {
                    maxWidth: {
                      base: _v8 ? 0 : "160px",
                      md: "160px"
                    },
                    minWidth: "0",
                    opacity: {
                      base: +!_v8,
                      md: 1
                    },
                    overflow: "hidden",
                    transition: "max-width 150ms ease-out, opacity 120ms ease-out",
                    children: (0, _v1.jsxs)(_v31.Flex, {
                      align: "center",
                      gap: "75",
                      whiteSpace: "nowrap",
                      children: [(0, _v1.jsx)(_v45.Text, {
                        as: "span",
                        variant: "heading-xs",
                        sx: _v72,
                        children: (0, _v7.translate)({
                          singular: "Up next",
                          dictionary: {
                            es: {
                              singular: "A continuación"
                            },
                            "de-DE": {
                              singular: "Direkt danach"
                            },
                            "fr-FR": {
                              singular: "Suivant"
                            },
                            "ja-JP": {
                              singular: "次へ"
                            },
                            "ko-KR": {
                              singular: "다음 동영상"
                            },
                            "pt-BR": {
                              singular: "Próximo"
                            },
                            "zh-CN": {
                              singular: "下一个"
                            }
                          }
                        })
                      }), (0, _v1.jsx)(_v45.Text, {
                        as: "span",
                        color: "up_next" === _v13 ? "text-button-inverted" : "text-tertiary",
                        visibility: void 0 !== _v18 ? "visible" : "hidden",
                        minWidth: "1.5ch",
                        sx: _v72,
                        variant: "body-md",
                        children: _v29
                      })]
                    })
                  })]
                })
              })]
            }), (0, _v1.jsxs)(_v31.Flex, {
              align: "center",
              flexShrink: "0",
              gap: {
                base: 0,
                md: "50"
              },
              justify: "end",
              position: "relative",
              width: {
                base: "84px",
                md: "auto"
              },
              children: [(0, _v1.jsx)(_v24.Box, {
                display: {
                  base: "none",
                  md: "block"
                },
                children: _v40
              }), (0, _v1.jsx)(_v24.Box, {
                position: {
                  base: "absolute",
                  md: "static"
                },
                right: {
                  base: "44px",
                  md: "auto"
                },
                children: (0, _v1.jsx)(_v67.ShowcaseSearchBar, {
                  searchQuery: _v16,
                  onSearchChange: _v0 => _v35({
                    q: _v0
                  }),
                  onOpenChange: _v9,
                  searchLabel: (0, _v7.translate)({
                    singular: "Search updates",
                    dictionary: {
                      es: {
                        singular: "Buscar actualizaciones"
                      },
                      "de-DE": {
                        singular: "Updates durchsuchen"
                      },
                      "fr-FR": {
                        singular: "Rechercher des mises à jour"
                      },
                      "ja-JP": {
                        singular: "更新を検索"
                      },
                      "ko-KR": {
                        singular: "업데이트 검색"
                      },
                      "pt-BR": {
                        singular: "Pesquisar atualizações"
                      },
                      "zh-CN": {
                        singular: "搜索更新"
                      }
                    }
                  }),
                  clearSearchLabel: (0, _v7.translate)({
                    singular: "Clear search",
                    dictionary: {
                      es: {
                        singular: "Borrar búsqueda"
                      },
                      "de-DE": {
                        singular: "Suche löschen"
                      },
                      "fr-FR": {
                        singular: "Effacer la recherche"
                      },
                      "ja-JP": {
                        singular: "検索をクリア"
                      },
                      "ko-KR": {
                        singular: "검색 지우기"
                      },
                      "pt-BR": {
                        singular: "Limpar pesquisa"
                      },
                      "zh-CN": {
                        singular: "清除搜索"
                      }
                    }
                  }),
                  width: "min(220px, calc(100vw - 184px))"
                })
              }), (0, _v1.jsx)(_v32.IconButton, {
                display: {
                  base: "inline-flex",
                  md: "none"
                },
                "aria-label": (0, _v7.translate)({
                  singular: "Open filters",
                  dictionary: {
                    es: {
                      singular: "Abrir filtros"
                    },
                    "de-DE": {
                      singular: "Filter öffnen"
                    },
                    "fr-FR": {
                      singular: "Ouvrir les filtres"
                    },
                    "ja-JP": {
                      singular: "フィルターを開く"
                    },
                    "ko-KR": {
                      singular: "필터 열기"
                    },
                    "pt-BR": {
                      singular: "Abrir filtros"
                    },
                    "zh-CN": {
                      singular: "打开筛选"
                    }
                  }
                }),
                icon: (0, _v1.jsx)(_v55.Filter, {}),
                onClick: _v7.onOpen,
                position: {
                  base: "absolute",
                  md: "static"
                },
                right: {
                  base: 0,
                  md: "auto"
                }
              })]
            })]
          })]
        }), _v26 ? (0, _v1.jsx)(_v24.Box, {
          marginTop: "400",
          minHeight: "500px",
          paddingX: "600",
          children: (0, _v1.jsx)(_v31.Flex, {
            align: "center",
            direction: "column",
            justify: "center",
            minHeight: "max(500px, calc(100vh - 400px))",
            padding: "200",
            children: (0, _v1.jsxs)(_v31.Flex, {
              align: "center",
              direction: "column",
              gap: "100",
              textAlign: "center",
              children: [(0, _v1.jsx)(_v45.Text, {
                as: "h2",
                variant: "heading-md",
                sx: _v72,
                children: (0, _v7.translate)({
                  singular: "Something went wrong",
                  dictionary: {
                    es: {
                      singular: "Se ha producido un error"
                    },
                    "de-DE": {
                      singular: "Hier ist etwas schief gelaufen"
                    },
                    "fr-FR": {
                      singular: "Quelque chose a planté"
                    },
                    "ja-JP": {
                      singular: "エラーが発生しました"
                    },
                    "ko-KR": {
                      singular: "문제가 발생했습니다"
                    },
                    "pt-BR": {
                      singular: "Alguma coisa deu errado"
                    },
                    "zh-CN": {
                      singular: "出错了"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v45.Text, {
                color: "text-secondary",
                variant: "body-md",
                sx: _v72,
                children: (0, _v7.translate)({
                  singular: "We couldn't load updates.",
                  dictionary: {
                    es: {
                      singular: "No pudimos cargar las actualizaciones."
                    },
                    "de-DE": {
                      singular: "Wir konnten Aktualisierungen nicht laden."
                    },
                    "fr-FR": {
                      singular: "Nous n'avons pas pu charger les mises à jour."
                    },
                    "ja-JP": {
                      singular: "更新を読み込めませんでした。"
                    },
                    "ko-KR": {
                      singular: "업데이트를 불러올 수 없습니다."
                    },
                    "pt-BR": {
                      singular: "Não conseguimos carregar atualizações."
                    },
                    "zh-CN": {
                      singular: "我们无法加载更新。"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v25.Button, {
                variant: "secondary",
                onClick: () => {
                  _v24();
                },
                children: (0, _v7.translate)({
                  singular: "Try again",
                  dictionary: {
                    es: {
                      singular: "Intentar de nuevo"
                    },
                    "de-DE": {
                      singular: "Nochmal versuchen"
                    },
                    "fr-FR": {
                      singular: "Veuillez réessayer"
                    },
                    "ja-JP": {
                      singular: "再試行してください"
                    },
                    "ko-KR": {
                      singular: "다시 시도하세요"
                    },
                    "pt-BR": {
                      singular: "Tente de novo"
                    },
                    "zh-CN": {
                      singular: "再试一次"
                    }
                  }
                })
              })]
            })
          })
        }) : _v20 && void 0 === _v18 ? (0, _v1.jsx)(_v77, {}) : 0 === _v25.length ? _v32 ? (0, _v1.jsx)(_v76, {
          icon: (0, _v1.jsx)(_v57.SearchMagnifier, {
            boxSize: "48px",
            shapeRendering: "geometricPrecision"
          }),
          title: (0, _v7.translate)({
            singular: "Nothing here yet",
            dictionary: {
              es: {
                singular: "Todavía no hay nada aquí"
              },
              "de-DE": {
                singular: "Noch keine Inhalte vorhanden"
              },
              "fr-FR": {
                singular: "Rien dans cet espace"
              },
              "ja-JP": {
                singular: "まだ何もありません"
              },
              "ko-KR": {
                singular: "아직 아무것도 없습니다."
              },
              "pt-BR": {
                singular: "Nada aqui ainda"
              },
              "zh-CN": {
                singular: "这里空荡荡的"
              }
            }
          }),
          body: (0, _v7.translate)({
            singular: "No updates match your filters, clear them to see everything.",
            dictionary: {
              es: {
                singular: "Ninguna actualización coincide con tus filtros, bórralos para ver todo."
              },
              "de-DE": {
                singular: "Keine Aktualisierungen entsprechen Ihren Filtern. Setzen Sie die Filter zurück, um alles zu sehen."
              },
              "fr-FR": {
                singular: "Aucune mise à jour ne correspond à vos filtres, effacez-les pour tout voir."
              },
              "ja-JP": {
                singular: "フィルターに一致する更新はありません。フィルターをクリアするとすべて表示されます。"
              },
              "ko-KR": {
                singular: "필터와 일치하는 업데이트가 없습니다, 모두 보려면 필터를 지우세요."
              },
              "pt-BR": {
                singular: "Nenhuma atualização corresponde aos seus filtros, limpe-os para ver tudo."
              },
              "zh-CN": {
                singular: "没有任何更新符合您的筛选条件，清除筛选后可查看全部内容。"
              }
            }
          }),
          action: (0, _v1.jsx)(_v25.Button, {
            variant: "secondary",
            onClick: () => _v35({
              product_area: "",
              category: "",
              q: ""
            }),
            children: (0, _v7.translate)({
              singular: "Clear filters",
              dictionary: {
                es: {
                  singular: "Quitar los filtros"
                },
                "de-DE": {
                  singular: "Filter löschen"
                },
                "fr-FR": {
                  singular: "Supprimer les filtres"
                },
                "ja-JP": {
                  singular: "フィルターを解除"
                },
                "ko-KR": {
                  singular: "필터 지우기"
                },
                "pt-BR": {
                  singular: "Limpar filtros"
                },
                "zh-CN": {
                  singular: "清除过滤器"
                }
              }
            })
          })
        }) : (0, _v1.jsx)(_v76, {
          icon: (0, _v1.jsx)(_v58, {
            boxSize: "48px",
            shapeRendering: "geometricPrecision"
          }),
          title: (0, _v7.translate)({
            singular: "We're working on what's next",
            dictionary: {
              es: {
                singular: "Estamos trabajando en lo que sigue"
              },
              "de-DE": {
                singular: "Wir arbeiten an dem, was als Nächstes kommt"
              },
              "fr-FR": {
                singular: "Nous travaillons sur la suite"
              },
              "ja-JP": {
                singular: "次に向けて取り組んでいます"
              },
              "ko-KR": {
                singular: "다음에 선보일 내용을 준비하고 있습니다"
              },
              "pt-BR": {
                singular: "Estamos trabalhando no que vem a seguir"
              },
              "zh-CN": {
                singular: "我们正在筹备接下来的内容"
              }
            }
          }),
          body: (0, _v7.translate)({
            singular: "No updates to show right now. Check back soon.",
            dictionary: {
              es: {
                singular: "No hay actualizaciones para mostrar ahora mismo. Vuelva a consultar pronto."
              },
              "de-DE": {
                singular: "Zurzeit gibt es keine Aktualisierungen. Schauen Sie bald wieder vorbei."
              },
              "fr-FR": {
                singular: "Aucune mise à jour à afficher pour le moment. Revenez bientôt."
              },
              "ja-JP": {
                singular: "現在表示する更新はありません。後ほどご確認ください。"
              },
              "ko-KR": {
                singular: "현재 표시할 업데이트가 없습니다. 곧 다시 확인해 주세요."
              },
              "pt-BR": {
                singular: "Não há atualizações para mostrar no momento. Volte em breve."
              },
              "zh-CN": {
                singular: "当前暂无可显示的更新。请稍后再来查看。"
              }
            }
          })
        }) : (0, _v1.jsxs)(_v31.Flex, {
          direction: "column",
          gap: "400",
          marginTop: "28px",
          maxWidth: "1036px",
          marginX: "auto",
          children: [_v33.map(([_v0, _v1]) => (0, _v1.jsxs)(_v24.Box, {
            children: [void 0 !== _v0 && (0, _v1.jsx)(_v45.Text, {
              as: "h2",
              variant: "body-md",
              color: "text-secondary",
              marginBottom: "75",
              children: _v0
            }), (0, _v1.jsx)(_v31.Flex, {
              direction: "column",
              gap: "200",
              children: _v1.map(_v0 => (0, _v1.jsx)(_v89, {
                entry: _v0,
                isUpNext: "up_next" === _v13,
                categoryLabels: _v12,
                onVote: _v36,
                onFeedback: _v37
              }, _v0.id))
            })]
          }, _v0 ?? _v13)), _v27 ? (0, _v1.jsxs)(_v31.Flex, {
            align: "center",
            direction: "column",
            gap: "100",
            marginTop: "400",
            children: [(0, _v1.jsx)(_v45.Text, {
              color: "text-secondary",
              variant: "body-md",
              sx: _v72,
              children: (0, _v7.translate)({
                singular: "Couldn't load more updates.",
                dictionary: {
                  es: {
                    singular: "No se pudieron cargar más actualizaciones."
                  },
                  "de-DE": {
                    singular: "Konnte keine weiteren Aktualisierungen laden."
                  },
                  "fr-FR": {
                    singular: "Impossible de charger d'autres mises à jour."
                  },
                  "ja-JP": {
                    singular: "これ以上の更新を読み込めませんでした。"
                  },
                  "ko-KR": {
                    singular: "더 많은 업데이트를 불러올 수 없습니다."
                  },
                  "pt-BR": {
                    singular: "Não foi possível carregar mais atualizações."
                  },
                  "zh-CN": {
                    singular: "无法加载更多更新。"
                  }
                }
              })
            }), (0, _v1.jsx)(_v25.Button, {
              variant: "secondary",
              onClick: () => {
                _v24();
              },
              children: (0, _v7.translate)({
                singular: "Try again",
                dictionary: {
                  es: {
                    singular: "Intentar de nuevo"
                  },
                  "de-DE": {
                    singular: "Nochmal versuchen"
                  },
                  "fr-FR": {
                    singular: "Veuillez réessayer"
                  },
                  "ja-JP": {
                    singular: "再試行してください"
                  },
                  "ko-KR": {
                    singular: "다시 시도하세요"
                  },
                  "pt-BR": {
                    singular: "Tente de novo"
                  },
                  "zh-CN": {
                    singular: "再试一次"
                  }
                }
              })
            })]
          }) : (0, _v1.jsx)(_v69.InfiniteScrollTrigger, {
            isLoading: _v21 || 10 * _v22 >= _v30,
            onLoadMore: _v34
          })]
        }), (0, _v1.jsxs)(_v26.Drawer, {
          isOpen: _v7.isOpen,
          placement: "bottom",
          onClose: _v7.onClose,
          children: [(0, _v1.jsx)(_v30.DrawerOverlay, {}), (0, _v1.jsxs)(_v28.DrawerContent, {
            children: [(0, _v1.jsxs)(_v29.DrawerHeader, {
              children: [(0, _v7.translate)({
                singular: "Filters",
                dictionary: {
                  es: {
                    singular: "Filtros"
                  },
                  "de-DE": {
                    singular: "Filter"
                  },
                  "fr-FR": {
                    singular: "Filtres"
                  },
                  "ja-JP": {
                    singular: "フィルター"
                  },
                  "ko-KR": {
                    singular: "필터"
                  },
                  "pt-BR": {
                    singular: "Filtros"
                  },
                  "zh-CN": {
                    singular: "过滤器"
                  }
                }
              }), (0, _v1.jsx)(_v28.DrawerCloseButton, {})]
            }), (0, _v1.jsx)(_v27.DrawerBody, {
              paddingBottom: "400",
              children: _v40
            })]
          })]
        })]
      });
    },
    _v89 = ({
      entry: _v0,
      isUpNext: _v1 = !1,
      categoryLabels: _v2,
      onVote: _v3,
      onFeedback: _v4
    }) => {
      let [_v5, _v6] = (0, _v4.useState)(""),
        [_v7, _v8] = (0, _v4.useState)(!1),
        _v9 = _v0.category?.toLocaleLowerCase(),
        _v10 = _v73[_v9 ?? ""] ?? _v73.default,
        _v11 = _v9 ? _v2[_v9] ?? _v0.category : "",
        _v12 = void 0 !== _v0.mediaUrl || void 0 !== _v0.clipEmbedUrl;
      return (0, _v1.jsxs)(_v31.Flex, {
        borderRadius: "lg",
        direction: "column",
        overflow: "hidden",
        bg: "surface",
        minHeight: {
          base: _v12 ? _v7 ? "669px" : "507px" : "auto",
          md: _v12 ? "240px" : "207px"
        },
        padding: {
          base: "300",
          md: "lg"
        },
        children: [(0, _v1.jsxs)(_v31.Flex, {
          align: "stretch",
          direction: {
            base: "column",
            md: "row"
          },
          flex: "1",
          gap: {
            base: "300",
            md: "xl"
          },
          children: [(0, _v1.jsxs)(_v31.Flex, {
            direction: "column",
            flex: {
              base: "0 0 auto",
              md: "1"
            },
            minWidth: "0",
            gap: "300",
            children: [(0, _v1.jsxs)(_v31.Flex, {
              direction: "column",
              gap: "100",
              children: [(0, _v1.jsxs)(_v31.Flex, {
                align: "center",
                justify: "space-between",
                minHeight: "32px",
                children: [(0, _v1.jsxs)(_v31.Flex, {
                  align: "center",
                  gap: "75",
                  wrap: "wrap",
                  children: [_v0.isNew && (0, _v1.jsx)(_v23.Badge, {
                    variant: "new",
                    size: "sm",
                    children: (0, _v7.translate)({
                      singular: "New",
                      dictionary: {
                        es: {
                          singular: "Nuevo"
                        },
                        "de-DE": {
                          singular: "Neu"
                        },
                        "fr-FR": {
                          singular: "Nouveau"
                        },
                        "ja-JP": {
                          singular: "新規作成"
                        },
                        "ko-KR": {
                          singular: "신규"
                        },
                        "pt-BR": {
                          singular: "Novo"
                        },
                        "zh-CN": {
                          singular: "新"
                        }
                      }
                    })
                  }), _v1 ? (0, _v1.jsx)(_v23.Badge, {
                    background: "status-caution-secondary",
                    color: "status-caution-primary",
                    border: "0",
                    size: "sm",
                    children: (0, _v7.translate)({
                      singular: "Exploring concept",
                      dictionary: {
                        es: {
                          singular: "Explorando el concepto"
                        },
                        "de-DE": {
                          singular: "Konzept erkunden"
                        },
                        "fr-FR": {
                          singular: "Exploration du concept"
                        },
                        "ja-JP": {
                          singular: "コンセプトの探求"
                        },
                        "ko-KR": {
                          singular: "개념 탐색"
                        },
                        "pt-BR": {
                          singular: "Explorando o conceito"
                        },
                        "zh-CN": {
                          singular: "探索概念"
                        }
                      }
                    })
                  }) : _v0.category && (0, _v1.jsx)(_v23.Badge, {
                    ..._v10,
                    border: "0",
                    size: "sm",
                    children: _v11
                  }), _v0.productArea && (0, _v1.jsx)(_v23.Badge, {
                    background: "fill-component-secondary",
                    border: "0",
                    color: "text-tertiary",
                    display: {
                      base: "none",
                      md: "inline-flex"
                    },
                    size: "sm",
                    children: _v0.productArea
                  })]
                }), (0, _v1.jsxs)(_v31.Flex, {
                  gap: "50",
                  flexShrink: "0",
                  children: [(0, _v1.jsx)(_v84, {
                    label: (0, _v7.translate)({
                      singular: "Vote up for {title}",
                      replacements: {
                        title: _v0.title
                      },
                      dictionary: {
                        es: {
                          singular: "Votar a favor de {title}"
                        },
                        "de-DE": {
                          singular: "Für {title} stimmen"
                        },
                        "fr-FR": {
                          singular: "Votez pour {title}"
                        },
                        "ja-JP": {
                          singular: "「{title}」に賛成票を投じる"
                        },
                        "ko-KR": {
                          singular: "{title}에 찬성"
                        },
                        "pt-BR": {
                          singular: "Votar a favor de {title}"
                        },
                        "zh-CN": {
                          singular: "为 {title} 投赞成票"
                        }
                      }
                    }),
                    value: 1,
                    entry: _v0,
                    hue: "green",
                    onVote: _v3,
                    children: (0, _v1.jsx)(_v60.ThumbUp, {})
                  }), (0, _v1.jsx)(_v84, {
                    label: (0, _v7.translate)({
                      singular: "Vote down for {title}",
                      replacements: {
                        title: _v0.title
                      },
                      dictionary: {
                        es: {
                          singular: "Votar en contra de {title}"
                        },
                        "de-DE": {
                          singular: "Gegen {title} stimmen"
                        },
                        "fr-FR": {
                          singular: "Votez contre {title}"
                        },
                        "ja-JP": {
                          singular: "「{title}」に反対票を投じる"
                        },
                        "ko-KR": {
                          singular: "{title}에 반대"
                        },
                        "pt-BR": {
                          singular: "Votar contra {title}"
                        },
                        "zh-CN": {
                          singular: "为 {title} 投反对票"
                        }
                      }
                    }),
                    value: -1,
                    entry: _v0,
                    hue: "red",
                    onVote: _v3,
                    children: (0, _v1.jsx)(_v59.ThumbDown, {})
                  })]
                })]
              }), (0, _v1.jsxs)(_v31.Flex, {
                direction: "column",
                gap: "75",
                children: [(0, _v1.jsx)(_v45.Text, {
                  as: "h3",
                  fontFamily: "heading",
                  fontSize: "18px",
                  fontWeight: "medium",
                  letterSpacing: "-0.54px",
                  lineHeight: "1.4",
                  children: _v0.title
                }), (0, _v1.jsx)(_v45.Text, {
                  color: "text-secondary",
                  variant: "body-md",
                  children: _v0.description
                })]
              })]
            }), (0, _v1.jsxs)(_v31.Flex, {
              align: "center",
              justify: "space-between",
              gap: "200",
              marginTop: "auto",
              children: [(0, _v1.jsxs)(_v31.Flex, {
                gap: "0",
                align: "center",
                children: [void 0 !== _v0.ctaText && "" !== _v0.ctaText && void 0 !== _v0.ctaUrl && "" !== _v0.ctaUrl && (0, _v1.jsx)(_v25.Button, {
                  as: "a",
                  href: _v0.ctaUrl,
                  target: "_blank",
                  rel: "noopener",
                  variant: "secondary",
                  size: "sm",
                  children: _v0.ctaText
                }), void 0 !== _v0.blogPostUrl && "" !== _v0.blogPostUrl && (0, _v1.jsx)(_v25.Button, {
                  as: "a",
                  href: _v0.blogPostUrl,
                  target: "_blank",
                  rel: "noopener",
                  size: "sm",
                  textDecoration: "underline",
                  variant: "tertiary",
                  _hover: {
                    background: "transparent",
                    color: "text-secondary"
                  },
                  children: (0, _v7.translate)({
                    singular: "Learn more",
                    dictionary: {
                      es: {
                        singular: "Ver más"
                      },
                      "de-DE": {
                        singular: "Mehr dazu"
                      },
                      "fr-FR": {
                        singular: "En savoir plus "
                      },
                      "ja-JP": {
                        singular: "詳細を見る"
                      },
                      "ko-KR": {
                        singular: "자세히 보기"
                      },
                      "pt-BR": {
                        singular: "Saiba mais"
                      },
                      "zh-CN": {
                        singular: "了解更多"
                      }
                    }
                  })
                })]
              }), (0, _v1.jsx)(_v25.Button, {
                "aria-label": (0, _v7.translate)({
                  singular: "Feedback",
                  dictionary: {
                    es: {
                      singular: "Comentarios"
                    },
                    "fr-FR": {
                      singular: "Commentaires"
                    },
                    "ja-JP": {
                      singular: "フィードバック"
                    },
                    "ko-KR": {
                      singular: "피드백"
                    },
                    "zh-CN": {
                      singular: "反馈"
                    }
                  }
                }),
                color: "text-tertiary",
                paddingX: {
                  base: 0,
                  md: "100"
                },
                variant: "tertiary",
                size: "sm",
                fontFamily: "body",
                leftIcon: (0, _v1.jsx)(_v56.ReviewCheck, {}),
                onClick: () => _v8(_v0 => !_v0),
                width: {
                  base: "32px",
                  md: "auto"
                },
                children: (0, _v1.jsx)(_v24.Box, {
                  as: "span",
                  display: {
                    base: "none",
                    md: "inline"
                  },
                  children: (0, _v7.translate)({
                    singular: "Feedback",
                    dictionary: {
                      es: {
                        singular: "Comentarios"
                      },
                      "fr-FR": {
                        singular: "Commentaires"
                      },
                      "ja-JP": {
                        singular: "フィードバック"
                      },
                      "ko-KR": {
                        singular: "피드백"
                      },
                      "zh-CN": {
                        singular: "反馈"
                      }
                    }
                  })
                })
              })]
            })]
          }), _v12 && (0, _v1.jsx)(_v87, {
            entry: _v0,
            isUpNext: _v1
          })]
        }), _v7 && (0, _v1.jsxs)(_v24.Box, {
          borderTopWidth: "1px",
          borderColor: "stroke",
          marginTop: {
            base: "200",
            md: "20px"
          },
          paddingTop: {
            base: "200",
            md: "20px"
          },
          children: [(0, _v1.jsx)(_v46.Textarea, {
            value: _v5,
            maxLength: 500,
            onChange: _v0 => _v6(_v0.target.value),
            placeholder: (0, _v7.translate)({
              singular: "Tell us what you think",
              dictionary: {
                es: {
                  singular: "Cuéntanos qué piensas"
                },
                "de-DE": {
                  singular: "Teilen Sie uns Ihre Meinung mit"
                },
                "fr-FR": {
                  singular: "Dites-nous ce que vous en pensez"
                },
                "ja-JP": {
                  singular: "ご意見をお聞かせください"
                },
                "ko-KR": {
                  singular: "의견을 들려주세요"
                },
                "pt-BR": {
                  singular: "Diga-nos o que você acha"
                },
                "zh-CN": {
                  singular: "告诉我们您的想法"
                }
              }
            }),
            resize: "none",
            height: "80px",
            borderColor: "text-primary",
            borderWidth: "2px",
            borderRadius: "md",
            background: "fill-component"
          }), (0, _v1.jsxs)(_v31.Flex, {
            gap: "0",
            marginTop: "200",
            children: [(0, _v1.jsx)(_v25.Button, {
              variant: "secondary",
              height: "40px",
              paddingX: "200",
              isDisabled: "" === _v5.trim(),
              onClick: () => {
                _v4(_v0.id, _v5), _v6(""), _v8(!1);
              },
              children: (0, _v7.translate)({
                singular: "Submit",
                dictionary: {
                  es: {
                    singular: "Enviar"
                  },
                  "de-DE": {
                    singular: "Senden"
                  },
                  "fr-FR": {
                    singular: "Envoyer"
                  },
                  "ja-JP": {
                    singular: "送信"
                  },
                  "ko-KR": {
                    singular: "제출"
                  },
                  "pt-BR": {
                    singular: "Enviar"
                  },
                  "zh-CN": {
                    singular: "提交"
                  }
                }
              })
            }), (0, _v1.jsx)(_v25.Button, {
              variant: "tertiary",
              height: "40px",
              paddingX: "200",
              onClick: () => {
                _v6(""), _v8(!1);
              },
              children: (0, _v7.translate)({
                singular: "Cancel",
                dictionary: {
                  es: {
                    singular: "Cancelar"
                  },
                  "de-DE": {
                    singular: "Abbrechen"
                  },
                  "fr-FR": {
                    singular: "Annuler"
                  },
                  "ja-JP": {
                    singular: "キャンセル"
                  },
                  "ko-KR": {
                    singular: "취소"
                  },
                  "pt-BR": {
                    singular: "Cancelar"
                  },
                  "zh-CN": {
                    singular: "取消"
                  }
                }
              })
            })]
          })]
        })]
      });
    },
    _v90 = () => {
      let _v0 = (0, _v3.useRouter)(),
        _v1 = (0, _v12.useViewer)(),
        {
          settings: _v2,
          isLoadingResponse: _v3
        } = (0, _v8.useOrionSettings)();
      return ((0, _v4.useEffect)(() => {
        if ("true" === _v0.query.changelog) {
          let _v0 = {
            ..._v0.query
          };
          delete _v0.changelog, _v0.replace({
            pathname: _v0.pathname,
            query: _v0
          }, void 0, {
            shallow: !0
          });
        }
      }, [_v0]), _v3 || !_v1) ? null : _v2.enable_whats_new_page ? (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v2.default, {
          children: (0, _v1.jsx)("title", {
            children: (0, _v7.translate)({
              singular: "What's new",
              dictionary: {
                es: {
                  singular: "Novedades"
                },
                "de-DE": {
                  singular: "Was gibt es Neues?"
                },
                "fr-FR": {
                  singular: "Quoi de neuf ?"
                },
                "ja-JP": {
                  singular: "新着情報"
                },
                "ko-KR": {
                  singular: "새로운 기능"
                },
                "pt-BR": {
                  singular: "Novidades"
                },
                "zh-CN": {
                  singular: "新增内容"
                }
              }
            })
          })
        }), (0, _v1.jsx)(_v88, {})]
      }) : (0, _v1.jsx)(_v9.ErrorPage, {
        error: new _v5.ResourceNotFoundError()
      });
    };
  _v90.getLayout = (_v0, _v1) => (0, _v1.jsx)(_v11.VideoLibraryLayout, {
    hasSideNav: !0,
    sideNavSurface: "home",
    hideWhatsNewAnnouncementCount: !0,
    hasUploader: _v1.hasUploader,
    sideNavContent: (0, _v1.jsx)(_v10.SideNavContent, {
      surface: "home"
    }),
    children: _v0
  }), (0, _v6.withPageSetup)(() => ({
    props: {
      hasThemeSupport: !0,
      hasUploader: !0
    }
  }), {
    requireLogin: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v90], 0);
}