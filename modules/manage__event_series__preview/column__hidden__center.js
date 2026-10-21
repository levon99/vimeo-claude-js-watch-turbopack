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
    _v12 = _v0.i(0);
  let _v13 = ({
    item: _v0,
    defaultExpanded: _v1 = !1
  }) => {
    let [_v2, _v3] = (0, _v2.useState)(_v1),
      _v4 = (0, _v12.useResponsiveStylingToken)();
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v5.Flex, {
        direction: "column",
        overflow: "hidden",
        children: [(0, _v1.jsxs)(_v5.Flex, {
          align: "center",
          "aria-expanded": _v2,
          justifyContent: "space-between",
          backgroundColor: "unset",
          as: "button",
          gap: "sm",
          onClick: () => _v3(_v0 => !_v0),
          textAlign: "left",
          alignItems: "flex-start",
          type: "button",
          w: "100%",
          p: "0",
          children: [(0, _v1.jsx)(_v6.Text, {
            color: "text-primary",
            variant: _v4("heading-md", "heading-lg"),
            children: _v0.question
          }), (0, _v1.jsx)(_v5.Flex, {
            "aria-hidden": !0,
            role: "button",
            "aria-label": _v2 ? (0, _v9.translate)({
              singular: "Collapse",
              dictionary: {
                es: {
                  singular: "Contraer"
                },
                "de-DE": {
                  singular: "Ausblenden"
                },
                "fr-FR": {
                  singular: "Réduire"
                },
                "ja-JP": {
                  singular: "折り畳む"
                },
                "ko-KR": {
                  singular: "접기"
                },
                "pt-BR": {
                  singular: "Minimizar"
                },
                "zh-CN": {
                  singular: "折叠"
                }
              }
            }) : (0, _v9.translate)({
              singular: "Expand",
              dictionary: {
                es: {
                  singular: "Expandir"
                },
                "de-DE": {
                  singular: "Vergrößern"
                },
                "fr-FR": {
                  singular: "Agrandir"
                },
                "ja-JP": {
                  singular: "拡大"
                },
                "ko-KR": {
                  singular: "펼치기"
                },
                "pt-BR": {
                  singular: "Expandir"
                },
                "zh-CN": {
                  singular: "展开"
                }
              }
            }),
            color: "text-primary",
            flexShrink: 0,
            transform: _v2 ? "rotate(45deg)" : "none",
            transition: "transform 0.2s ease-out",
            children: (0, _v1.jsx)(_v8.Plus, {
              boxSize: _v11.FAQ_STYLES.ICON_SIZE_24
            })
          })]
        }), (0, _v1.jsx)(_v3.Collapse, {
          in: _v2,
          unmountOnExit: !0,
          children: (0, _v1.jsx)(_v6.Text, {
            color: "text-secondary",
            pt: (0, _v7.rem)(4),
            variant: "body-md",
            whiteSpace: "pre-wrap",
            children: _v0.answer
          })
        })]
      }), (0, _v1.jsx)(_v4.Divider, {
        borderColor: "stroke",
        my: "6"
      })]
    });
  };
  _v0.s(["FaqSection", 0, ({
    items: _v0
  }) => (0, _v1.jsx)(_v5.Flex, {
    direction: "column",
    id: "faq",
    width: "100%",
    children: (0, _v1.jsxs)(_v10.SectionTwoColumnsWrapper, {
      stackedGap: "xl",
      children: [(0, _v1.jsx)(_v10.SectionHeader, {
        children: (0, _v9.translate)({
          singular: "General Info",
          dictionary: {
            es: {
              singular: "Información general"
            },
            "de-DE": {
              singular: "Allgemeine Informationen"
            },
            "fr-FR": {
              singular: "Informations générales"
            },
            "ja-JP": {
              singular: "一般情報"
            },
            "ko-KR": {
              singular: "일반 정보"
            },
            "pt-BR": {
              singular: "Informações gerais"
            },
            "zh-CN": {
              singular: "基本信息"
            }
          }
        })
      }), (0, _v1.jsx)(_v10.SectionContent, {
        gap: 0,
        children: _v0.map((_v0, _v1) => (0, _v1.jsx)(_v13, {
          defaultExpanded: 0 === _v1,
          item: _v0
        }, `${_v0.question}-${_v1}`))
      })]
    })
  })], 0);
  var _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0);
  let _v18 = ({
    icon: _v0,
    label: _v1
  }) => (0, _v1.jsxs)(_v5.Flex, {
    align: "center",
    backdropFilter: "blur(20px)",
    backgroundColor: "rgba(61, 71, 81, 0.64)",
    borderRadius: "sm",
    gap: "sm",
    px: "sm",
    py: "xs",
    children: [_v0, (0, _v1.jsx)(_v6.Text, {
      color: "text-secondary",
      variant: "body-md",
      whiteSpace: "nowrap",
      children: _v1
    })]
  });
  _v0.s(["Hero", 0, ({
    name: _v0,
    description: _v1,
    dateRange: _v2,
    timeZoneLabel: _v3,
    heroImageSrc: _v4
  }) => {
    let _v5 = (0, _v12.useResponsiveStylingToken)(),
      [_v6, _v7] = (0, _v2.useState)(!1),
      [_v8, _v9] = (0, _v2.useState)(!1),
      _v10 = (0, _v2.useRef)(null);
    return (0, _v2.useLayoutEffect)(() => {
      let _v0 = _v10.current;
      if (!_v0 || _v6) return;
      let _v1 = !0,
        _v2 = () => {
          if (!_v1) return;
          let _v0 = _v0.getBoundingClientRect().height,
            _v1 = _v0.style.webkitLineClamp;
          _v0.style.webkitLineClamp = "unset";
          let _v2 = _v0.getBoundingClientRect().height;
          _v0.style.webkitLineClamp = _v1, _v9(_v2 - _v0 > 1);
        };
      _v2();
      let _v3 = new ResizeObserver(_v2);
      _v3.observe(_v0);
      let _v4 = "u" < typeof document ? void 0 : document.fonts;
      return _v4?.ready.then(_v2), _v4?.addEventListener("loadingdone", _v2), () => {
        _v1 = !1, _v3.disconnect(), _v4?.removeEventListener("loadingdone", _v2);
      };
    }, [_v1, _v6]), (0, _v1.jsx)(_v15.DarkMode, {
      children: (0, _v1.jsx)(_v5.Flex, {
        backgroundColor: "fill-surface",
        backgroundImage: _v4 ? `linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 75%), url(${_v4})` : void 0,
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: (0, _v7.rem)(28),
        direction: "column",
        justify: "flex-end",
        minHeight: _v5(_v11.HERO_STYLES.MOBILE_MIN_HEIGHT_AUTO, _v11.HERO_STYLES.DESKTOP_MIN_HEIGHT_480),
        padding: _v5(_v11.HERO_STYLES.MOBILE_PADDING_32, _v11.HERO_STYLES.DESKTOP_PADDING_48),
        width: "100%",
        children: (0, _v1.jsxs)(_v5.Flex, {
          direction: "column",
          gap: "lg",
          maxWidth: (0, _v7.rem)(992),
          children: [(0, _v1.jsxs)(_v5.Flex, {
            direction: "column",
            gap: "sm",
            children: [(0, _v1.jsx)(_v6.Text, {
              color: "white",
              variant: _v5(_v11.HERO_STYLES.MOBILE_TITLE_36, _v11.HERO_STYLES.DESKTOP_TITLE_60),
              children: _v0 || (0, _v9.translate)({
                singular: "Untitled event series",
                dictionary: {
                  es: {
                    singular: "Serie de eventos sin título"
                  },
                  "de-DE": {
                    singular: "Unbenannte Veranstaltungsreihe"
                  },
                  "fr-FR": {
                    singular: "Série d'événements sans titre"
                  },
                  "ja-JP": {
                    singular: "無題のイベントシリーズ"
                  },
                  "ko-KR": {
                    singular: "제목 없는 이벤트 시리즈"
                  },
                  "pt-BR": {
                    singular: "Série de eventos sem título"
                  },
                  "zh-CN": {
                    singular: "未命名的活动系列"
                  }
                }
              })
            }), _v1 ? (0, _v1.jsx)(_v14.Box, {
              display: "flex",
              maxWidth: (0, _v7.rem)(640),
              children: (0, _v1.jsxs)(_v6.Text, {
                ref: _v10,
                color: "white",
                noOfLines: _v6 ? void 0 : _v5(_v11.HERO_STYLES.MOBILE_DESCRIPTION_LINES, _v11.HERO_STYLES.DESKTOP_DESCRIPTION_LINES),
                variant: _v5(_v11.HERO_STYLES.MOBILE_DESCRIPTION_14, _v11.HERO_STYLES.DESKTOP_DESCRIPTION_16),
                _before: _v8 && !_v6 ? {
                  content: '""',
                  float: "right",
                  height: "calc(100% - 1.4em)"
                } : void 0,
                children: [_v8 && !_v6 ? (0, _v1.jsx)(_v6.Text, {
                  as: "button",
                  backgroundColor: "unset",
                  color: "white",
                  float: "right",
                  ml: "xs",
                  onClick: () => _v7(!0),
                  p: "0",
                  sx: {
                    clear: "both",
                    font: "inherit"
                  },
                  children: (0, _v9.translate)({
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
                  })
                }) : null, _v1, _v8 && _v6 ? (0, _v1.jsxs)(_v1.Fragment, {
                  children: [" ", (0, _v1.jsx)(_v6.Text, {
                    as: "button",
                    backgroundColor: "unset",
                    color: "white",
                    onClick: () => _v7(!1),
                    p: "0",
                    sx: {
                      font: "inherit"
                    },
                    children: (0, _v9.translate)({
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
                    })
                  })]
                }) : null]
              })
            }) : null]
          }), (0, _v1.jsxs)(_v5.Flex, {
            align: "flex-start",
            direction: _v5("column", "row"),
            gap: _v5(_v11.HERO_STYLES.MOBILE_PILL_GAP_16, _v11.HERO_STYLES.DESKTOP_PILL_GAP_24),
            wrap: "wrap",
            children: [_v2 ? (0, _v1.jsx)(_v18, {
              icon: (0, _v1.jsx)(_v16.Calendar, {
                boxSize: _v11.HERO_STYLES.PILL_ICON_SIZE_20,
                color: "text-secondary"
              }),
              label: _v2
            }) : null, _v3 ? (0, _v1.jsx)(_v18, {
              icon: (0, _v1.jsx)(_v17.ClockThree, {
                boxSize: _v11.HERO_STYLES.PILL_ICON_SIZE_20,
                color: "text-secondary"
              }),
              label: _v3
            }) : null]
          })]
        })
      })
    });
  }], 0);
}