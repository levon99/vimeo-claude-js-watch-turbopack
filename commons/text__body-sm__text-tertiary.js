{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = (0, _v5.rem)(12),
    _v7 = (0, _v5.rem)(5),
    _v8 = [{
      id: "1",
      width: "100%"
    }, {
      id: "2",
      width: "64%"
    }, {
      id: "3",
      width: "85%"
    }, {
      id: "4",
      width: "100%"
    }, {
      id: "5",
      width: "85%"
    }, {
      id: "6",
      width: "64%"
    }],
    _v9 = ({
      width: _v0
    }) => (0, _v1.jsx)(_v3.Skeleton, {
      variant: "text",
      width: _v0,
      height: _v6,
      borderRadius: _v7,
      flexShrink: 0
    }),
    _v10 = ({
      caption: _v0
    }) => (0, _v1.jsx)(_v4.Text, {
      variant: "body-sm",
      color: "text-tertiary",
      marginTop: (0, _v5.rem)(18),
      flexShrink: 0,
      children: _v0
    });
  _v0.s(["CardLoading", 0, ({
    caption: _v0,
    fill: _v1 = !1
  }) => _v1 ? (0, _v1.jsxs)(_v2.Flex, {
    flexDir: "column",
    flex: "1",
    minHeight: 0,
    paddingTop: (0, _v5.rem)(9),
    children: [(0, _v1.jsx)(_v2.Flex, {
      flexDir: "column",
      flex: "1",
      minHeight: 0,
      overflow: "hidden",
      gap: "3",
      sx: {
        maskImage: "linear-gradient(to bottom, #000 76%, transparent)",
        WebkitMaskImage: "linear-gradient(to bottom, #000 76%, transparent)"
      },
      children: Array.from({
        length: 18
      }, (_v0, _v1) => (0, _v1.jsx)(_v9, {
        width: _v8[_v1 % _v8.length].width
      }, _v1))
    }), void 0 !== _v0 && (0, _v1.jsx)(_v10, {
      caption: _v0
    })]
  }) : (0, _v1.jsxs)(_v2.Flex, {
    flexDir: "column",
    paddingTop: (0, _v5.rem)(9),
    children: [(0, _v1.jsx)(_v2.Flex, {
      flexDir: "column",
      gap: "3",
      children: _v8.map(_v0 => (0, _v1.jsx)(_v9, {
        width: _v0.width
      }, _v0.id))
    }), void 0 !== _v0 && (0, _v1.jsx)(_v10, {
      caption: _v0
    })]
  })], 0);
  var _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0);
  let _v21 = ({
    animate: _v0 = !1,
    interval: _v1 = 0,
    ..._v2
  }) => {
    let _v3 = (0, _v20.useRef)(null),
      _v4 = (0, _v20.useRef)(null),
      [_v5, _v6] = (0, _v20.useState)(null),
      {
        colorMode: _v7
      } = (0, _v14.useColorMode)();
    return ((0, _v20.useEffect)(() => {
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
    }, [_v7]), (0, _v20.useEffect)(() => {
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
    }, [_v5]), (0, _v20.useEffect)(() => {
      if (!_v0) return void _v4.current?.stop();
      let _v0 = () => {
        _v4.current?.goToAndStop(0, !0), _v4.current?.play();
      };
      _v0();
      let _v1 = setInterval(_v0, _v1);
      return () => {
        clearInterval(_v1);
      };
    }, [_v0, _v1, _v5]), null === _v5) ? (0, _v1.jsx)(_v15.AiSparkles, {
      ..._v2
    }) : (0, _v1.jsx)(_v11.Box, {
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
    title: _v7 = (0, _v19.translate)({
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
    let _v9 = (0, _v14.useColorModeValue)("var(--vimeo-colors-lightBlueAlpha-200)", "var(--vimeo-colors-darkBlueAlpha-200)"),
      _v10 = "panel" === _v8;
    return (0, _v1.jsxs)(_v11.Box, {
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
      children: [(0, _v1.jsxs)(_v2.Flex, {
        alignItems: "center",
        justifyContent: "space-between",
        gap: "sm",
        paddingTop: "md",
        paddingBottom: _v4 ? "md" : void 0,
        paddingX: "5",
        flexShrink: 0,
        children: [(0, _v1.jsxs)(_v2.Flex, {
          alignItems: "center",
          gap: (0, _v5.rem)(9),
          minWidth: 0,
          children: [_v5 ? (0, _v1.jsx)(_v21, {
            animate: !0,
            interval: 0,
            boxSize: (0, _v5.rem)(22),
            color: "text-primary"
          }) : (0, _v1.jsx)(_v15.AiSparkles, {
            boxSize: (0, _v5.rem)(22),
            color: "text-primary"
          }), (0, _v1.jsx)(_v4.Text, {
            variant: "heading-sm",
            children: _v7
          }), void 0 !== _v3 && (0, _v1.jsx)(_v13.Tooltip, {
            label: _v3,
            placement: "top",
            children: (0, _v1.jsx)(_v11.Box, {
              as: "span",
              tabIndex: 0,
              display: "inline-flex",
              flexShrink: 0,
              color: "text-secondary",
              "aria-label": _v3,
              alignItems: "center",
              children: (0, _v1.jsx)(_v18.InfoCircle, {
                boxSize: (0, _v5.rem)(16)
              })
            })
          })]
        }), (0, _v1.jsxs)(_v2.Flex, {
          alignItems: "center",
          gap: "md",
          flexShrink: 0,
          children: [null != _v0 && (0, _v1.jsxs)(_v2.Flex, {
            alignItems: "center",
            gap: "md",
            "aria-hidden": _v4 || void 0,
            pointerEvents: _v4 ? "none" : "auto",
            sx: {
              opacity: +!_v4,
              visibility: _v4 ? "hidden" : "visible",
              transition: _v4 ? "opacity 150ms ease, visibility 0s linear 150ms" : "opacity 150ms ease, visibility 0s linear 0s"
            },
            children: [(0, _v1.jsx)(_v2.Flex, {
              alignItems: "center",
              gap: "xs",
              children: _v0
            }), _v6 && (0, _v1.jsx)(_v11.Box, {
              height: (0, _v5.rem)(20),
              width: "1px",
              backgroundColor: "stroke",
              flexShrink: 0
            })]
          }), _v6 && (0, _v1.jsx)(_v12.IconButton, {
            size: "sm",
            variant: "tertiary",
            "aria-label": _v4 ? (0, _v19.translate)({
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
            }) : (0, _v19.translate)({
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
            icon: _v4 ? (0, _v1.jsx)(_v16.ChevronDown, {
              boxSize: "sm"
            }) : (0, _v1.jsx)(_v17.ChevronUp, {
              boxSize: "sm"
            })
          })]
        })]
      }), (0, _v1.jsx)(_v11.Box, {
        display: "grid",
        gridTemplateRows: _v4 ? "0fr" : "1fr",
        opacity: +!_v4,
        "aria-hidden": _v4 || void 0,
        pointerEvents: _v4 ? "none" : "auto",
        sx: {
          transition: _v4 ? "grid-template-rows 240ms ease, opacity 240ms ease, visibility 0s linear 240ms" : "grid-template-rows 240ms ease, opacity 240ms ease, visibility 0s linear 0s",
          visibility: _v4 ? "hidden" : "visible"
        },
        children: (0, _v1.jsx)(_v11.Box, {
          minHeight: 0,
          overflow: "hidden",
          children: (0, _v1.jsx)(_v11.Box, {
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
  var _v22 = _v0.i(0);
  let _v23 = /^\s*(\d+)[.)]\s+(.*)$/,
    _v24 = /^\s*[-*•]\s+(.*)$/,
    _v25 = /^\s*(#{1,6})\s+(.*)$/,
    _v26 = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*(.+?)\*\*/g,
    _v27 = /^(https?:|mailto:|\/)/i,
    _v28 = _v0 => {
      let _v1,
        _v2 = [],
        _v3 = new RegExp(_v26),
        _v4 = 0;
      for (; null !== (_v1 = _v3.exec(_v0));) _v1.index > _v4 && _v2.push({
        type: "text",
        text: _v0.slice(_v4, _v1.index)
      }), void 0 !== _v1[2] ? _v2.push({
        type: "link",
        href: _v1[2],
        parts: _v28(_v1[1])
      }) : _v2.push({
        type: "bold",
        parts: _v28(_v1[3])
      }), _v4 = _v3.lastIndex;
      return _v4 < _v0.length && _v2.push({
        type: "text",
        text: _v0.slice(_v4)
      }), _v2.length > 0 ? _v2 : [{
        type: "text",
        text: _v0
      }];
    },
    _v29 = (0, _v5.rem)(12),
    _v30 = (0, _v5.rem)(21),
    _v31 = (0, _v5.rem)(5),
    _v32 = (0, _v5.rem)(3),
    _v33 = (_v0, _v1) => {
      let _v2 = new Map();
      return _v0.map(_v0 => {
        let _v1 = _v1(_v0),
          _v2 = _v2.get(_v1) ?? 0;
        return _v2.set(_v1, _v2 + 1), {
          item: _v0,
          key: `${_v1}#${_v2}`
        };
      });
    },
    _v34 = _v0 => "text" === _v0.type ? `text:${_v0.text}` : "bold" === _v0.type ? `bold:${JSON.stringify(_v0.parts)}` : `link:${_v0.href}:${JSON.stringify(_v0.parts)}`,
    _v35 = _v0 => {
      switch (_v0.type) {
        case "paragraph":
          return `paragraph:${_v0.text}`;
        case "heading":
          return `heading:${_v0.level}:${_v0.text}`;
        case "ordered-list":
          return `ordered-list:${_v0.items.join("\n")}`;
        case "unordered-list":
          return `unordered-list:${_v0.items.join("\n")}`;
        default:
          throw Error(`Unhandled help answer block: ${_v0.type}`);
      }
    },
    _v36 = {
      1: "h1",
      2: "h2",
      3: "h3",
      4: "h4",
      5: "h5",
      6: "h6"
    },
    _v37 = {
      1: "heading-md",
      2: "heading-sm",
      3: "heading-xs",
      4: "heading-2xs",
      5: "heading-2xs",
      6: "heading-2xs"
    },
    _v38 = _v0 => _v33(_v0, _v34).map(({
      item: _v0,
      key: _v1
    }) => {
      let _v2;
      return "text" === _v0.type ? _v0.text : "bold" === _v0.type ? (0, _v1.jsx)(_v4.Text, {
        as: "span",
        fontFamily: "heading",
        children: _v38(_v0.parts)
      }, _v1) : (_v2 = _v0.href, _v27.test(_v2.trim())) ? (0, _v1.jsx)(_v4.Text, {
        as: "a",
        href: _v0.href,
        target: "_blank",
        rel: "noopener noreferrer",
        textDecoration: "underline",
        wordBreak: "break-word",
        _focusVisible: {
          outline: "2px solid",
          outlineOffset: "2px",
          outlineColor: "currentColor"
        },
        children: _v38(_v0.parts)
      }, _v1) : (0, _v1.jsx)(_v20.default.Fragment, {
        children: _v38(_v0.parts)
      }, _v1);
    }),
    _v39 = ({
      items: _v0
    }) => (0, _v1.jsx)(_v1.Fragment, {
      children: _v33(_v0, _v0 => _v0).map(({
        item: _v0,
        key: _v1
      }) => (0, _v1.jsx)(_v4.Text, {
        as: "li",
        variant: "body-md",
        lineHeight: "1.5",
        whiteSpace: "pre-wrap",
        marginY: _v31,
        paddingLeft: _v32,
        children: _v38(_v28(_v0))
      }, _v1))
    }),
    _v40 = ({
      answer: _v0
    }) => {
      let _v1 = _v33((_v0 => {
        let _v1 = [],
          _v2 = [],
          _v3 = null,
          _v4 = () => {
            _v2.length > 0 && (_v1.push({
              type: "paragraph",
              text: _v2.join("\n")
            }), _v2 = []);
          },
          _v5 = () => {
            _v3 && (_v1.push(_v3), _v3 = null);
          };
        for (let _v0 of _v0.replace(/\r\n?/g, "\n").split("\n")) {
          if ("" === _v0.trim()) {
            _v4(), _v5();
            continue;
          }
          let _v0 = _v25.exec(_v0);
          if (_v0) {
            _v4(), _v5(), _v1.push({
              type: "heading",
              level: _v0[1].length,
              text: _v0[2].trim()
            });
            continue;
          }
          let _v1 = _v23.exec(_v0);
          if (_v1) {
            _v4(), _v3?.type !== "ordered-list" && (_v5(), _v3 = {
              type: "ordered-list",
              start: Number(_v1[1]),
              items: []
            }), _v3.items.push(_v1[2]);
            continue;
          }
          let _v2 = _v24.exec(_v0);
          if (_v2) {
            _v4(), _v3?.type !== "unordered-list" && (_v5(), _v3 = {
              type: "unordered-list",
              items: []
            }), _v3.items.push(_v2[1]);
            continue;
          }
          if (_v3) {
            let _v0 = _v3.items.length - 1;
            _v3.items[_v0] = `${_v3.items[_v0]}
${_v0.trim()}`;
            continue;
          }
          _v2.push(_v0);
        }
        return _v4(), _v5(), _v1;
      })(_v0), _v35);
      return (0, _v1.jsx)(_v11.Box, {
        children: _v1.map(({
          item: _v0,
          key: _v1
        }, _v2) => {
          let _v3 = _v2 < _v1.length - 1 ? _v29 : void 0;
          if ("heading" === _v0.type) {
            let _v0 = Math.min(_v0.level, 6);
            return (0, _v1.jsx)(_v4.Text, {
              as: _v36[_v0],
              variant: _v37[_v0],
              marginBottom: _v3,
              children: _v38(_v28(_v0.text))
            }, _v1);
          }
          return "paragraph" === _v0.type ? (0, _v1.jsx)(_v4.Text, {
            variant: "body-md",
            lineHeight: "1.5",
            whiteSpace: "pre-wrap",
            marginBottom: _v3,
            children: _v38(_v28(_v0.text))
          }, _v1) : "ordered-list" === _v0.type ? (0, _v1.jsx)(_v11.Box, {
            as: "ol",
            start: _v0.start,
            paddingLeft: _v30,
            marginBottom: _v3,
            sx: {
              listStyleType: "decimal"
            },
            children: (0, _v1.jsx)(_v39, {
              items: _v0.items
            })
          }, _v1) : (0, _v1.jsx)(_v11.Box, {
            as: "ul",
            paddingLeft: _v30,
            marginBottom: _v3,
            sx: {
              listStyleType: "disc"
            },
            children: (0, _v1.jsx)(_v39, {
              items: _v0.items
            })
          }, _v1);
        })
      });
    };
  _v0.s(["HelpBody", 0, ({
    result: _v0,
    footer: _v1,
    sourceCaption: _v2,
    hideContactSupport: _v3
  }) => _v0.refused ? (0, _v1.jsx)(_v4.Text, {
    variant: "body-md",
    color: "text-secondary",
    children: _v0.answer
  }) : (0, _v1.jsxs)(_v2.Flex, {
    flexDir: "column",
    alignItems: "flex-start",
    children: [(0, _v1.jsx)(_v40, {
      answer: _v0.answer
    }), void 0 !== _v2 && !_v0.escalate && (0, _v1.jsx)(_v4.Text, {
      variant: "body-sm",
      color: "text-tertiary",
      marginTop: (0, _v5.rem)(13),
      children: _v2
    }), _v0.escalate && !0 !== _v3 && (0, _v1.jsx)(_v22.Button, {
      as: "a",
      href: "https://help.vimeo.com/",
      target: "_blank",
      rel: "noopener noreferrer",
      size: "sm",
      variant: "primary",
      marginTop: "sm",
      children: (0, _v19.translate)({
        singular: "Contact Vimeo Support",
        dictionary: {
          es: {
            singular: "Contactar con el soporte de Vimeo"
          },
          "de-DE": {
            singular: "Vimeo-Support kontaktieren"
          },
          "fr-FR": {
            singular: "Contacter le support Vimeo"
          },
          "ja-JP": {
            singular: "Vimeo サポートにお問い合わせください"
          },
          "ko-KR": {
            singular: "Vimeo 지원팀에 문의"
          },
          "pt-BR": {
            singular: "Entrar em contato com o Suporte do Vimeo"
          },
          "zh-CN": {
            singular: "联系 Vimeo 支持"
          }
        }
      })
    }), null != _v1 ? (0, _v1.jsx)(_v11.Box, {
      marginTop: "sm",
      children: _v1
    }) : null]
  })], 0);
}