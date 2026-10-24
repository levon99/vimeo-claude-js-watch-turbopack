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
    _v14 = _v0.i(0);
  let _v15 = ({
    animate: _v0 = !1,
    interval: _v1 = 0,
    ..._v2
  }) => {
    let _v3 = (0, _v14.useRef)(null),
      _v4 = (0, _v14.useRef)(null),
      [_v5, _v6] = (0, _v14.useState)(null),
      {
        colorMode: _v7
      } = (0, _v8.useColorMode)();
    return ((0, _v14.useEffect)(() => {
      let _v0 = !1;
      return (async () => {
        try {
          let _v0 = await fetch(`https://f.vimeocdn.com/motion/bokeh_sparks_${_v7}.json`);
          if (!_v0.ok) throw Error(`Failed to load animation: ${_v0.status}`);
          let _v1 = await _v0.json();
          _v0 || null === _v1 || "object" != typeof _v1 || _v6(_v1);
        } catch {
          _v0 || _v6(null);
        }
      })(), () => {
        _v0 = !0;
      };
    }, [_v7]), (0, _v14.useEffect)(() => {
      let _v0 = _v3.current;
      if (null === _v5 || null === _v0) return;
      let _v1 = !1;
      return _v0.A(0).then(({
        default: _v0
      }) => {
        _v1 || (_v4.current?.destroy(), _v4.current = _v0.loadAnimation({
          renderer: "svg",
          loop: !1,
          autoplay: !1,
          animationData: _v5,
          container: _v0
        }));
      }).catch(() => {
        _v1 || _v6(null);
      }), () => {
        _v1 = !0, _v4.current?.destroy(), _v4.current = null;
      };
    }, [_v5]), (0, _v14.useEffect)(() => {
      if (!_v0) return void _v4.current?.stop();
      let _v0 = () => {
        _v4.current?.goToAndStop(0, !0), _v4.current?.play();
      };
      _v0();
      let _v1 = setInterval(_v0, _v1);
      return () => {
        clearInterval(_v1);
      };
    }, [_v0, _v1, _v5]), null === _v5) ? (0, _v1.jsx)(_v9.AiSparkles, {
      ..._v2
    }) : (0, _v1.jsx)(_v2.Box, {
      ref: _v3,
      ..._v2
    });
  };
  _v0.s(["CardShell", 0, ({
    actions: _v0,
    children: _v1,
    fill: _v2 = !1,
    infoLabel: _v3,
    isCollapsed: _v4 = !1,
    isLoading: _v5 = !1,
    onToggleCollapse: _v6,
    title: _v7 = (0, _v13.translate)({
      singular: "AI overview",
      dictionary: {
        es: {
          singular: "Descripción general de la IA"
        },
        "de-DE": {
          singular: "KI-Überblick"
        },
        "fr-FR": {
          singular: "Aperçu de l'IA"
        },
        "ja-JP": {
          singular: "AIの概要"
        },
        "ko-KR": {
          singular: "AI 개요"
        },
        "pt-BR": {
          singular: "Visão geral da IA"
        },
        "zh-CN": {
          singular: "AI 概览"
        }
      }
    }),
    variant: _v8 = "default"
  }) => {
    let _v9 = (0, _v8.useColorModeValue)("var(--vimeo-colors-lightBlueAlpha-200)", "var(--vimeo-colors-darkBlueAlpha-200)"),
      _v10 = "panel" === _v8;
    return (0, _v1.jsxs)(_v2.Box, {
      width: "100%",
      flexShrink: 0,
      display: _v2 ? "flex" : void 0,
      flexDirection: _v2 ? "column" : void 0,
      height: _v2 ? "100%" : void 0,
      minHeight: _v2 ? 0 : void 0,
      border: _v10 ? void 0 : "1px solid",
      borderColor: _v10 ? void 0 : _v9,
      borderRadius: "lg",
      backgroundColor: _v10 ? "background" : "fill-surface",
      overflow: "hidden",
      position: "relative",
      zIndex: 1,
      children: [(0, _v1.jsxs)(_v3.Flex, {
        alignItems: "center",
        justifyContent: "space-between",
        gap: "sm",
        paddingTop: "md",
        paddingBottom: _v4 ? "md" : void 0,
        paddingX: "5",
        flexShrink: 0,
        children: [(0, _v1.jsxs)(_v3.Flex, {
          alignItems: "center",
          gap: (0, _v7.rem)(9),
          minWidth: 0,
          children: [_v5 ? (0, _v1.jsx)(_v15, {
            animate: !0,
            interval: 0,
            boxSize: (0, _v7.rem)(22),
            color: "text-primary"
          }) : (0, _v1.jsx)(_v9.AiSparkles, {
            boxSize: (0, _v7.rem)(22),
            color: "text-primary"
          }), (0, _v1.jsx)(_v5.Text, {
            variant: "heading-sm",
            children: _v7
          }), void 0 !== _v3 && (0, _v1.jsx)(_v6.Tooltip, {
            label: _v3,
            placement: "top",
            children: (0, _v1.jsx)(_v2.Box, {
              as: "span",
              tabIndex: 0,
              display: "inline-flex",
              flexShrink: 0,
              color: "text-secondary",
              "aria-label": _v3,
              alignItems: "center",
              children: (0, _v1.jsx)(_v12.InfoCircle, {
                boxSize: (0, _v7.rem)(16)
              })
            })
          })]
        }), (0, _v1.jsxs)(_v3.Flex, {
          alignItems: "center",
          gap: "md",
          flexShrink: 0,
          children: [null != _v0 && (0, _v1.jsxs)(_v3.Flex, {
            alignItems: "center",
            gap: "md",
            "aria-hidden": _v4 || void 0,
            pointerEvents: _v4 ? "none" : "auto",
            sx: {
              opacity: +!_v4,
              visibility: _v4 ? "hidden" : "visible",
              transition: _v4 ? "opacity 150ms ease, visibility 0s linear 150ms" : "opacity 150ms ease, visibility 0s linear 0s"
            },
            children: [(0, _v1.jsx)(_v3.Flex, {
              alignItems: "center",
              gap: "xs",
              children: _v0
            }), _v6 && (0, _v1.jsx)(_v2.Box, {
              height: (0, _v7.rem)(20),
              width: "1px",
              backgroundColor: "stroke",
              flexShrink: 0
            })]
          }), _v6 && (0, _v1.jsx)(_v4.IconButton, {
            size: "sm",
            variant: "tertiary",
            "aria-label": _v4 ? (0, _v13.translate)({
              singular: "Show more",
              dictionary: {
                es: {
                  singular: "Mostrar más"
                },
                "de-DE": {
                  singular: "Mehr anzeigen"
                },
                "fr-FR": {
                  singular: "Afficher plus"
                },
                "ja-JP": {
                  singular: "その他を表示する"
                },
                "ko-KR": {
                  singular: "더 보기"
                },
                "pt-BR": {
                  singular: "Mostar mais"
                },
                "zh-CN": {
                  singular: "显示更多"
                }
              }
            }) : (0, _v13.translate)({
              singular: "Show less",
              dictionary: {
                es: {
                  singular: "Mostrar menos"
                },
                "de-DE": {
                  singular: "Weniger anzeigen"
                },
                "fr-FR": {
                  singular: "Afficher moins"
                },
                "ja-JP": {
                  singular: "表示件数を減らす"
                },
                "ko-KR": {
                  singular: "줄이기"
                },
                "pt-BR": {
                  singular: "Mostrar menos"
                },
                "zh-CN": {
                  singular: "收起"
                }
              }
            }),
            "aria-expanded": !_v4,
            onClick: _v6,
            icon: _v4 ? (0, _v1.jsx)(_v10.ChevronDown, {
              boxSize: "sm"
            }) : (0, _v1.jsx)(_v11.ChevronUp, {
              boxSize: "sm"
            })
          })]
        })]
      }), (0, _v1.jsx)(_v2.Box, {
        display: "grid",
        gridTemplateRows: _v4 ? "0fr" : "1fr",
        opacity: +!_v4,
        "aria-hidden": _v4 || void 0,
        pointerEvents: _v4 ? "none" : "auto",
        sx: {
          transition: _v4 ? "grid-template-rows 240ms ease, opacity 240ms ease, visibility 0s linear 240ms" : "grid-template-rows 240ms ease, opacity 240ms ease, visibility 0s linear 0s",
          visibility: _v4 ? "hidden" : "visible"
        },
        children: (0, _v1.jsx)(_v2.Box, {
          minHeight: 0,
          overflow: "hidden",
          children: (0, _v1.jsx)(_v2.Box, {
            paddingX: "5",
            paddingTop: "md",
            paddingBottom: "5",
            display: _v2 ? "flex" : void 0,
            flexDirection: _v2 ? "column" : void 0,
            height: _v2 ? "100%" : void 0,
            minHeight: _v2 ? 0 : void 0,
            children: _v1
          })
        })
      })]
    });
  }], 0);
}