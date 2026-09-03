{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  _v0.s(["EventsSection", 0, ({
    id: _v0,
    title: _v1,
    titleAccessory: _v2,
    action: _v3,
    isMobilePreview: _v4 = !1,
    emptyState: _v5,
    children: _v6
  }) => (0, _v1.jsxs)(_v3.Flex, {
    direction: "column",
    id: _v0,
    width: "100%",
    children: [(0, _v1.jsxs)(_v5.SectionOneColumnWrapper, {
      children: [(0, _v1.jsx)(_v5.SectionHeader, {
        accessory: _v2,
        inline: !0,
        isMobilePreview: _v4,
        children: _v1
      }), _v3]
    }), (0, _v1.jsx)(_v2.Box, {
      pb: "md",
      px: "md",
      children: _v5 ?? (0, _v1.jsx)(_v4.EventsGrid, {
        isMobilePreview: _v4,
        children: _v6
      })
    })]
  })], 0);
  var _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0);
  let _v13 = ({
    item: _v0,
    isMobilePreview: _v1 = !1
  }) => {
    let [_v2, _v3] = (0, _v6.useState)(!1);
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v3.Flex, {
        direction: "column",
        overflow: "hidden",
        children: [(0, _v1.jsxs)(_v3.Flex, {
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
          children: [(0, _v1.jsx)(_v10.Text, {
            color: "text-primary",
            variant: _v1 ? "heading-md" : {
              base: "heading-md",
              md: "heading-lg"
            },
            children: _v0.question
          }), (0, _v1.jsx)(_v9.IconButton, {
            "aria-label": _v2 ? (0, _v12.translate)({
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
            }) : (0, _v12.translate)({
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
            icon: (0, _v1.jsx)(_v11.Plus, {}),
            onClick: _v0 => {
              _v0.stopPropagation(), _v3(_v0 => !_v0);
            },
            sx: {
              svg: {
                transform: _v2 ? "rotate(45deg)" : "none",
                transition: "transform 0.2s ease-out"
              }
            },
            variant: "tertiary"
          })]
        }), (0, _v1.jsx)(_v7.Collapse, {
          in: _v2,
          unmountOnExit: !0,
          children: (0, _v1.jsx)(_v10.Text, {
            color: "text-secondary",
            pt: "sm",
            variant: "body-md",
            whiteSpace: "pre-wrap",
            children: _v0.answer
          })
        })]
      }), (0, _v1.jsx)(_v8.Divider, {
        borderColor: "stroke",
        my: "6"
      })]
    });
  };
  _v0.s(["FaqSection", 0, ({
    items: _v0,
    isMobilePreview: _v1 = !1
  }) => (0, _v1.jsx)(_v3.Flex, {
    direction: "column",
    id: "faq",
    width: "100%",
    children: (0, _v1.jsxs)(_v5.SectionTwoColumnsWrapper, {
      isMobilePreview: _v1,
      children: [(0, _v1.jsx)(_v5.SectionHeader, {
        color: "text-tertiary",
        isMobilePreview: _v1,
        children: (0, _v12.translate)({
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
      }), (0, _v1.jsx)(_v5.SectionContent, {
        children: _v0.map((_v0, _v1) => (0, _v1.jsx)(_v13, {
          item: _v0,
          isMobilePreview: _v1
        }, `${_v0.question}-${_v1}`))
      })]
    })
  })], 0);
  var _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0);
  let _v17 = ({
    icon: _v0,
    label: _v1
  }) => (0, _v1.jsxs)(_v3.Flex, {
    align: "center",
    backdropFilter: "blur(20px)",
    backgroundColor: "rgba(61, 71, 81, 0.64)",
    borderRadius: "sm",
    gap: "sm",
    px: "sm",
    py: "xs",
    children: [_v0, (0, _v1.jsx)(_v10.Text, {
      color: "whiteAlpha.800",
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
    let [_v5, _v6] = (0, _v6.useState)(!1);
    return (0, _v1.jsx)(_v3.Flex, {
      backgroundColor: "gray.900",
      backgroundImage: _v4 ? `linear-gradient(90deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 75%), url(${_v4})` : void 0,
      backgroundPosition: "center",
      backgroundSize: "cover",
      borderRadius: (0, _v14.rem)(28),
      direction: "column",
      justify: "flex-end",
      minHeight: (0, _v14.rem)(480),
      padding: {
        base: "lg",
        md: (0, _v14.rem)(48)
      },
      width: "100%",
      children: (0, _v1.jsxs)(_v3.Flex, {
        direction: "column",
        gap: "lg",
        maxWidth: (0, _v14.rem)(992),
        children: [(0, _v1.jsxs)(_v3.Flex, {
          direction: "column",
          gap: "sm",
          children: [(0, _v1.jsx)(_v10.Text, {
            color: "white",
            variant: "heading-3xl",
            children: _v0 || (0, _v12.translate)({
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
          }), _v1 ? (0, _v1.jsxs)(_v2.Box, {
            maxWidth: (0, _v14.rem)(640),
            children: [(0, _v1.jsx)(_v10.Text, {
              color: "white",
              noOfLines: _v5 ? void 0 : 2,
              variant: "body-lg",
              children: _v1
            }), _v1.length > 120 ? (0, _v1.jsx)(_v10.Text, {
              as: "button",
              color: "white",
              onClick: () => _v6(_v0 => !_v0),
              variant: "body-lg",
              backgroundColor: "unset",
              p: "0",
              children: _v5 ? (0, _v12.translate)({
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
              }) : (0, _v12.translate)({
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
            }) : null]
          }) : null]
        }), (0, _v1.jsxs)(_v3.Flex, {
          gap: "md",
          wrap: "wrap",
          children: [_v2 ? (0, _v1.jsx)(_v17, {
            icon: (0, _v1.jsx)(_v15.Calendar, {
              color: "white"
            }),
            label: _v2
          }) : null, _v3 ? (0, _v1.jsx)(_v17, {
            icon: (0, _v1.jsx)(_v16.ClockThree, {
              color: "white"
            }),
            label: _v3
          }) : null]
        })]
      })
    });
  }], 0);
}