{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  let _v8 = () => (0, _v1.jsxs)(_v4.Flex, {
    align: "center",
    backgroundColor: "fill-component",
    borderRadius: "lg",
    direction: "column",
    gap: "sm",
    justify: "center",
    minHeight: (0, _v5.rem)(200),
    padding: "xl",
    width: "100%",
    children: [(0, _v1.jsx)(_v7.Text, {
      color: "text-primary",
      variant: "heading-sm",
      children: (0, _v6.translate)({
        singular: "No events scheduled",
        dictionary: {
          es: {
            singular: "No hay eventos programados"
          },
          "de-DE": {
            singular: "Keine Veranstaltungen geplant"
          },
          "fr-FR": {
            singular: "Aucun événement prévu"
          },
          "ja-JP": {
            singular: "予定されているイベントはありません"
          },
          "ko-KR": {
            singular: "예정된 이벤트가 없습니다"
          },
          "pt-BR": {
            singular: "Nenhum evento agendado"
          },
          "zh-CN": {
            singular: "暂无活动安排"
          }
        }
      })
    }), (0, _v1.jsx)(_v7.Text, {
      color: "text-secondary",
      textAlign: "center",
      variant: "body-md",
      children: (0, _v6.translate)({
        singular: "Check back soon for upcoming and on-demand events.",
        dictionary: {
          es: {
            singular: "Vuelve pronto para los próximos eventos y los disponibles bajo demanda."
          },
          "de-DE": {
            singular: "Schauen Sie bald wieder vorbei für bevorstehende und auf Abruf verfügbare Veranstaltungen."
          },
          "fr-FR": {
            singular: "Revenez bientôt pour les événements à venir et à la demande."
          },
          "ja-JP": {
            singular: "近日中に開催予定およびオンデマンドのイベント情報を掲載します。しばらくしてから再度ご確認ください。"
          },
          "ko-KR": {
            singular: "예정된 이벤트 및 주문형 이벤트는 곧 확인하실 수 있습니다. 잠시 후 다시 확인해 주세요."
          },
          "pt-BR": {
            singular: "Volte em breve para conferir os eventos futuros e sob demanda."
          },
          "zh-CN": {
            singular: "请稍后查看即将举行和点播的活动。"
          }
        }
      })
    })]
  });
  var _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0);
  let _v13 = ({
      src: _v0,
      borderRadius: _v1 = "sm"
    }) => (0, _v1.jsx)(_v10.Box, {
      backgroundColor: "gray.400",
      border: "0.5px solid",
      borderColor: "stroke",
      borderRadius: _v1,
      overflow: "hidden",
      paddingBottom: "56.25%",
      position: "relative",
      width: "100%",
      children: _v0 ? (0, _v1.jsx)(_v12.Image, {
        alt: "",
        height: "100%",
        left: 0,
        objectFit: "cover",
        position: "absolute",
        src: _v0,
        top: 0,
        width: "100%"
      }) : null
    }),
    _v14 = _v0 => {
      let _v1 = _v0.pictures?.sizes;
      if (_v1 && 0 !== _v1.length) return _v1[_v1.length - 1]?.link ?? void 0;
    },
    _v15 = _v0 => _v0.title?.trim() || (0, _v6.translate)({
      singular: "Untitled event",
      dictionary: {
        es: {
          singular: "Evento sin título"
        },
        "de-DE": {
          singular: "Unbenannte Veranstaltung"
        },
        "fr-FR": {
          singular: "Événement sans titre"
        },
        "ja-JP": {
          singular: "タイトル未設定のイベント"
        },
        "ko-KR": {
          singular: "제목 없는 이벤트"
        },
        "pt-BR": {
          singular: "Evento sem título"
        },
        "zh-CN": {
          singular: "未命名活动"
        }
      }
    }),
    _v16 = _v0 => {
      if (!_v0) return null;
      let _v1 = new Date(_v0).getTime();
      return Number.isNaN(_v1) ? null : _v1;
    },
    _v17 = _v0 => {
      if (!_v0) return null;
      let _v1 = new Date(`${_v0.slice(0, 10)}T00:00:00`);
      return Number.isNaN(_v1.getTime()) ? null : _v1;
    },
    _v18 = _v0 => new Intl.DateTimeFormat("en", {
      month: "short",
      day: "numeric",
      year: "numeric"
    }).format(_v0),
    _v19 = ({
      event: _v0
    }) => {
      let _v1 = (_v0 => {
          let _v1 = _v16(_v0.nextOccurrenceTime);
          if (null === _v1) return null;
          let _v2 = new Date(_v1),
            _v3 = new Intl.DateTimeFormat("en", {
              month: "short",
              day: "numeric",
              year: "numeric"
            }).format(_v2),
            _v4 = new Intl.DateTimeFormat("en", {
              hour: "numeric",
              minute: "2-digit"
            }).format(_v2);
          return `${_v3} \xb7 ${_v4}`;
        })(_v0),
        _v2 = _v0.description?.trim(),
        _v3 = (_v0.speakers ?? []).filter(_v0 => !!_v0?.name).slice(0, 3);
      return (0, _v1.jsxs)(_v4.Flex, {
        as: "a",
        backgroundColor: "fill-component",
        borderRadius: "lg",
        direction: "column",
        flex: "1 0 0",
        gap: "md",
        href: _v0.link ?? void 0,
        minWidth: (0, _v5.rem)(320),
        overflow: "hidden",
        pb: "md",
        pt: "sm",
        px: "sm",
        _hover: {
          backgroundColor: "fill-component-hover"
        },
        children: [(0, _v1.jsx)(_v13, {
          src: _v14(_v0)
        }), (0, _v1.jsxs)(_v4.Flex, {
          direction: "column",
          gap: "sm",
          pl: "sm",
          children: [_v1 ? (0, _v1.jsxs)(_v4.Flex, {
            align: "center",
            gap: "sm",
            children: [(0, _v1.jsx)(_v11.Calendar, {
              color: "var(--vimeo-colors-text-secondary)"
            }), (0, _v1.jsx)(_v7.Text, {
              color: "text-secondary",
              variant: "body-md",
              whiteSpace: "nowrap",
              children: _v1
            })]
          }) : null, (0, _v1.jsxs)(_v4.Flex, {
            direction: "column",
            gap: "xs",
            children: [(0, _v1.jsx)(_v7.Text, {
              color: "text-primary",
              noOfLines: 1,
              variant: "heading-md",
              children: _v15(_v0)
            }), _v2 ? (0, _v1.jsx)(_v7.Text, {
              color: "text-secondary",
              noOfLines: 2,
              variant: "body-md",
              children: _v2
            }) : null]
          }), _v3.length > 0 ? (0, _v1.jsx)(_v4.Flex, {
            align: "center",
            children: _v3.map((_v0, _v1) => (0, _v1.jsx)(_v10.Box, {
              ml: 0 === _v1 ? 0 : (0, _v5.rem)(-4),
              children: (0, _v1.jsx)(_v9.Avatar, {
                alt: _v0.name ?? "",
                nameProps: {
                  name: _v0.name ?? ""
                },
                size: "xs",
                src: _v0.avatar ?? void 0
              })
            }, `${_v0.name}-${_v1}`))
          }) : null]
        })]
      });
    },
    _v20 = ({
      id: _v0,
      title: _v1,
      children: _v2
    }) => (0, _v1.jsxs)(_v4.Flex, {
      direction: "column",
      id: _v0,
      width: "100%",
      children: [(0, _v1.jsx)(_v4.Flex, {
        align: "center",
        gap: "sm",
        pb: "md",
        pt: "lg",
        px: "md",
        children: (0, _v1.jsx)(_v7.Text, {
          color: "text-primary",
          variant: "heading-lg",
          children: _v1
        })
      }), (0, _v1.jsx)(_v4.Flex, {
        align: "flex-start",
        gap: "md",
        pb: "md",
        wrap: "wrap",
        children: _v2
      })]
    });
  var _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0);
  let _v24 = ({
      icon: _v0,
      label: _v1
    }) => (0, _v1.jsxs)(_v4.Flex, {
      align: "center",
      backdropFilter: "blur(20px)",
      backgroundColor: "rgba(61, 71, 81, 0.64)",
      borderRadius: "sm",
      gap: "sm",
      px: "sm",
      py: "xs",
      children: [_v0, (0, _v1.jsx)(_v7.Text, {
        color: "whiteAlpha.800",
        variant: "body-md",
        whiteSpace: "nowrap",
        children: _v1
      })]
    }),
    _v25 = ({
      name: _v0,
      description: _v1,
      dateRange: _v2,
      timeZoneLabel: _v3
    }) => {
      let [_v4, _v5] = (0, _v21.useState)(!1);
      return (0, _v1.jsx)(_v4.Flex, {
        backgroundColor: "gray.900",
        borderRadius: (0, _v5.rem)(28),
        direction: "column",
        justify: "flex-end",
        minHeight: (0, _v5.rem)(480),
        padding: {
          base: "lg",
          md: (0, _v5.rem)(48)
        },
        width: "100%",
        children: (0, _v1.jsxs)(_v4.Flex, {
          direction: "column",
          gap: "lg",
          maxWidth: (0, _v5.rem)(992),
          children: [(0, _v1.jsxs)(_v4.Flex, {
            direction: "column",
            gap: "sm",
            children: [(0, _v1.jsx)(_v7.Text, {
              color: "white",
              variant: "heading-3xl",
              children: _v0 || (0, _v6.translate)({
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
                    singular: "タイトル未設定のイベントシリーズ"
                  },
                  "ko-KR": {
                    singular: "제목 없는 이벤트 시리즈"
                  },
                  "pt-BR": {
                    singular: "Série de eventos sem título"
                  },
                  "zh-CN": {
                    singular: "未命名活动系列"
                  }
                }
              })
            }), _v1 ? (0, _v1.jsxs)(_v10.Box, {
              maxWidth: (0, _v5.rem)(640),
              children: [(0, _v1.jsx)(_v7.Text, {
                color: "whiteAlpha.800",
                noOfLines: _v4 ? void 0 : 2,
                variant: "body-lg",
                children: _v1
              }), _v1.length > 120 ? (0, _v1.jsx)(_v7.Text, {
                as: "button",
                color: "white",
                onClick: () => _v5(_v0 => !_v0),
                textDecoration: "underline",
                variant: "body-md",
                children: _v4 ? (0, _v6.translate)({
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
                }) : (0, _v6.translate)({
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
          }), (0, _v1.jsxs)(_v4.Flex, {
            gap: "md",
            wrap: "wrap",
            children: [_v2 ? (0, _v1.jsx)(_v24, {
              icon: (0, _v1.jsx)(_v11.Calendar, {
                color: "white"
              }),
              label: _v2
            }) : null, _v3 ? (0, _v1.jsx)(_v24, {
              icon: (0, _v1.jsx)(_v22.ClockThree, {
                color: "white"
              }),
              label: _v3
            }) : null, (0, _v1.jsx)(_v24, {
              icon: (0, _v1.jsx)(_v23.InfoCircle, {
                color: "white"
              }),
              label: (0, _v6.translate)({
                singular: "Virtual event",
                dictionary: {
                  es: {
                    singular: "Evento virtual"
                  },
                  "de-DE": {
                    singular: "Virtuelle Veranstaltung"
                  },
                  "fr-FR": {
                    singular: "Événement virtuel"
                  },
                  "ja-JP": {
                    singular: "オンラインイベント"
                  },
                  "ko-KR": {
                    singular: "가상 이벤트"
                  },
                  "pt-BR": {
                    singular: "Evento virtual"
                  },
                  "zh-CN": {
                    singular: "线上活动"
                  }
                }
              })
            })]
          })]
        })
      });
    };
  var _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0);
  let _v29 = _v0 => {
      "u" > typeof document && document.getElementById(_v0)?.scrollIntoView({
        behavior: "smooth"
      });
    },
    _v30 = ({
      name: _v0,
      hasUpcoming: _v1,
      hasOnDemand: _v2,
      logo: _v3
    }) => {
      let _v4 = "vimeo" === _v3.type || "custom" === _v3.type && !!_v3.url;
      return (0, _v1.jsx)(_v10.Box, {
        backdropFilter: "blur(50px)",
        backgroundColor: "rgba(244, 246, 248, 0.64)",
        position: "sticky",
        top: 0,
        width: "100%",
        zIndex: 2,
        children: (0, _v1.jsxs)(_v4.Flex, {
          align: "center",
          gap: "md",
          justify: "center",
          px: "lg",
          py: (0, _v5.rem)(12),
          children: [(0, _v1.jsx)(_v28.Navigation.Logo, {
            customLogoUrl: _v3.url,
            type: _v3.type
          }), _v4 ? (0, _v1.jsx)(_v27.Divider, {
            height: (0, _v5.rem)(16),
            orientation: "vertical"
          }) : null, (0, _v1.jsx)(_v7.Text, {
            color: "text-primary",
            noOfLines: 1,
            variant: "heading-md",
            children: _v0 || (0, _v6.translate)({
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
                  singular: "タイトル未設定のイベントシリーズ"
                },
                "ko-KR": {
                  singular: "제목 없는 이벤트 시리즈"
                },
                "pt-BR": {
                  singular: "Série de eventos sem título"
                },
                "zh-CN": {
                  singular: "未命名活动系列"
                }
              }
            })
          }), (0, _v1.jsxs)(_v4.Flex, {
            display: {
              base: "none",
              md: "flex"
            },
            flex: "1",
            gap: "md",
            justify: "flex-end",
            children: [_v1 ? (0, _v1.jsx)(_v26.Button, {
              onClick: () => _v29("upcoming-events"),
              variant: "tertiary",
              children: (0, _v6.translate)({
                singular: "Upcoming events",
                dictionary: {
                  es: {
                    singular: "Próximos eventos"
                  },
                  "de-DE": {
                    singular: "Bevorstehende Veranstaltungen"
                  },
                  "fr-FR": {
                    singular: "Événements à venir"
                  },
                  "ja-JP": {
                    singular: "今後のイベント"
                  },
                  "ko-KR": {
                    singular: "다가오는 이벤트"
                  },
                  "pt-BR": {
                    singular: "Próximos eventos"
                  },
                  "zh-CN": {
                    singular: "即将举行的活动"
                  }
                }
              })
            }) : null, _v2 ? (0, _v1.jsx)(_v26.Button, {
              onClick: () => _v29("on-demand"),
              variant: "tertiary",
              children: (0, _v6.translate)({
                singular: "On demand",
                dictionary: {
                  es: {
                    singular: "Bajo demanda"
                  },
                  "de-DE": {
                    singular: "Auf Abruf"
                  },
                  "fr-FR": {
                    singular: "À la demande"
                  },
                  "ja-JP": {
                    singular: "オンデマンド"
                  },
                  "ko-KR": {
                    singular: "주문형"
                  },
                  "pt-BR": {
                    singular: "Sob demanda"
                  },
                  "zh-CN": {
                    singular: "点播"
                  }
                }
              })
            }) : null]
          })]
        })
      });
    },
    _v31 = ({
      event: _v0
    }) => {
      let _v1,
        _v2 = null === (_v1 = _v16(_v0.nextOccurrenceTime)) ? null : new Intl.DateTimeFormat("en", {
          month: "short",
          day: "numeric",
          year: "numeric"
        }).format(new Date(_v1));
      return (0, _v1.jsxs)(_v4.Flex, {
        as: "a",
        borderRadius: "xl",
        direction: "column",
        flex: "1 0 0",
        gap: "sm",
        href: _v0.link ?? void 0,
        minWidth: (0, _v5.rem)(320),
        overflow: "hidden",
        p: "sm",
        _hover: {
          backgroundColor: "fill-container-hover"
        },
        children: [(0, _v1.jsx)(_v13, {
          borderRadius: "md",
          src: _v14(_v0)
        }), (0, _v1.jsxs)(_v4.Flex, {
          direction: "column",
          gap: "xs",
          pl: "sm",
          children: [(0, _v1.jsx)(_v7.Text, {
            color: "text-primary",
            noOfLines: 1,
            variant: "heading-sm",
            children: _v15(_v0)
          }), _v2 ? (0, _v1.jsx)(_v7.Text, {
            color: "text-secondary",
            noOfLines: 1,
            variant: "body-sm",
            children: _v2
          }) : null]
        })]
      });
    },
    _v32 = ({
      series: _v0
    }) => {
      var _v1;
      let _v2,
        _v3,
        _v4,
        _v5 = _v0.name?.trim() ?? "",
        _v6 = _v0.description?.trim() ?? "",
        {
          upcoming: _v7,
          onDemand: _v8
        } = (_v1 = _v0.events, _v2 = Date.now(), _v3 = [], _v4 = [], _v1.forEach(_v0 => {
          let _v1 = _v16(_v0.nextOccurrenceTime);
          null !== _v1 && _v1 >= _v2 ? _v3.push(_v0) : _v4.push(_v0);
        }), {
          upcoming: _v3,
          onDemand: _v4
        }),
        _v9 = ((_v0, _v1) => {
          let _v2 = _v17(_v0),
            _v3 = _v17(_v1);
          if (!_v2 && !_v3) return null;
          if (_v2 && !_v3) return _v18(_v2);
          if (!_v2 && _v3) return _v18(_v3);
          if (_v2 && _v3) {
            if (_v2.getFullYear() === _v3.getFullYear()) return `${new Intl.DateTimeFormat("en", {
              month: "short",
              day: "numeric"
            }).format(_v2)} — ${_v18(_v3)}`;
            return `${_v18(_v2)} — ${_v18(_v3)}`;
          }
          return null;
        })(_v0.landingPageConfig?.startDate, _v0.landingPageConfig?.endDate) ?? (_v0 => {
          let _v1 = _v0.map(_v0 => _v16(_v0.nextOccurrenceTime)).filter(_v0 => null !== _v0).sort((_v0, _v1) => _v0 - _v1);
          if (0 === _v1.length) return null;
          let _v2 = new Date(_v1[0]),
            _v3 = new Date(_v1[_v1.length - 1]),
            _v4 = new Intl.DateTimeFormat("en", {
              year: "numeric"
            }).format(_v3),
            _v5 = _v0 => new Intl.DateTimeFormat("en", {
              month: "short",
              day: "numeric"
            }).format(_v0);
          return _v1[0] === _v1[_v1.length - 1] ? `${_v5(_v2)}, ${_v4}` : `${_v5(_v2)} — ${_v5(_v3)}, ${_v4}`;
        })(_v0.events),
        _v10 = (_v0 => {
          if (!_v0) return null;
          let _v1 = _v0 => {
              try {
                return new Intl.DateTimeFormat("en-US", {
                  timeZone: _v0,
                  timeZoneName: _v0
                }).formatToParts(new Date()).find(_v0 => "timeZoneName" === _v0.type)?.value;
              } catch {
                return;
              }
            },
            _v2 = _v1("longGeneric"),
            _v3 = _v1("short");
          return _v2 ? _v3 && _v3 !== _v2 ? `${_v2} (${_v3})` : _v2 : _v0;
        })(_v0.landingPageConfig?.timeZone),
        _v11 = _v0.events.length > 0,
        _v12 = {
          type: _v0.landingPageConfig?.logo?.type ?? "vimeo",
          url: _v0.landingPageConfig?.logo?.url ?? null
        };
      return (0, _v1.jsxs)(_v4.Flex, {
        backgroundColor: "background",
        direction: "column",
        align: "center",
        minHeight: "100vh",
        width: "100%",
        children: [(0, _v1.jsx)(_v30, {
          hasOnDemand: _v8.length > 0,
          hasUpcoming: _v7.length > 0,
          logo: _v12,
          name: _v5
        }), (0, _v1.jsxs)(_v4.Flex, {
          direction: "column",
          gap: "xl",
          maxWidth: (0, _v5.rem)(0),
          p: "md",
          width: "100%",
          children: [(0, _v1.jsx)(_v25, {
            dateRange: _v9,
            description: _v6,
            name: _v5,
            timeZoneLabel: _v10
          }), _v11 ? (0, _v1.jsxs)(_v1.Fragment, {
            children: [_v7.length > 0 ? (0, _v1.jsx)(_v20, {
              id: "upcoming-events",
              title: (0, _v6.translate)({
                singular: "Upcoming events",
                dictionary: {
                  es: {
                    singular: "Próximos eventos"
                  },
                  "de-DE": {
                    singular: "Bevorstehende Veranstaltungen"
                  },
                  "fr-FR": {
                    singular: "Événements à venir"
                  },
                  "ja-JP": {
                    singular: "今後のイベント"
                  },
                  "ko-KR": {
                    singular: "다가오는 이벤트"
                  },
                  "pt-BR": {
                    singular: "Próximos eventos"
                  },
                  "zh-CN": {
                    singular: "即将举行的活动"
                  }
                }
              }),
              children: _v7.map(_v0 => (0, _v1.jsx)(_v19, {
                event: _v0
              }, _v0.uri))
            }) : null, _v8.length > 0 ? (0, _v1.jsx)(_v20, {
              id: "on-demand",
              title: (0, _v6.translate)({
                singular: "On demand",
                dictionary: {
                  es: {
                    singular: "Bajo demanda"
                  },
                  "de-DE": {
                    singular: "Auf Abruf"
                  },
                  "fr-FR": {
                    singular: "À la demande"
                  },
                  "ja-JP": {
                    singular: "オンデマンド"
                  },
                  "ko-KR": {
                    singular: "주문형"
                  },
                  "pt-BR": {
                    singular: "Sob demanda"
                  },
                  "zh-CN": {
                    singular: "点播"
                  }
                }
              }),
              children: _v8.map(_v0 => (0, _v1.jsx)(_v31, {
                event: _v0
              }, _v0.uri))
            }) : null]
          }) : (0, _v1.jsx)(_v8, {})]
        })]
      });
    };
  var _v33 = _v0.i(0),
    _v34 = _v0.i(0);
  async function _v35({
    baseUrl: _v0,
    select: _v1,
    where: {
      eventSeriesId: _v2
    },
    ..._v3
  }) {
    return (0, _v33.measureLatency)("getEventSery", "GET", async () => {
      let _v0 = await fetch(`${_v0}/event_series/${_v2}?fields=${_v1.map(_v34.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "GET"
      });
      if (!_v0.ok) throw new _v34.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v34.deepCamelCase)(_v1);
    });
  }
  let _v36 = ["id", "name", "description", "link", "status", "landingPageConfig", "landingPageConfig.startDate", "landingPageConfig.endDate", "landingPageConfig.timeZone", "landingPageConfig.logo", "landingPageConfig.logo.type", "landingPageConfig.logo.uri", "landingPageConfig.logo.url", "events", "events.uri", "events.title", "events.link", "events.description", "events.nextOccurrenceTime", "events.pictures", "events.pictures.sizes", "events.pictures.sizes.link", "events.pictures.sizes.width", "events.speakers", "events.speakers.name", "events.speakers.avatar"];
  (0, _v3.withPageSetup)(async _v0 => {
    let _v1 = _v0.params?.params,
      _v2 = Number.parseInt((Array.isArray(_v1) ? _v1[0] : _v1) ?? "", 10);
    if (!Number.isFinite(_v2)) return {
      notFound: !0
    };
    try {
      return {
        props: {
          series: await (({
            baseUrl: _v0,
            headers: _v1,
            seriesId: _v2,
            signal: _v3
          }) => _v35({
            baseUrl: _v0,
            headers: _v1,
            signal: _v3,
            select: _v36,
            where: {
              eventSeriesId: _v2
            }
          }))({
            seriesId: _v2,
            headers: _v0.headers,
            baseUrl: _v0.baseUrl
          }),
          hasThemeSupport: !0,
          omitEsi: !0
        }
      };
    } catch {
      return {
        notFound: !0
      };
    }
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, ({
    series: _v0
  }) => {
    let _v1 = _v0.name?.trim() || "Event series",
      _v2 = (_v0.description ?? "").replace(/\s+/g, " ").trim().slice(0, 200);
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v2.default, {
        children: [(0, _v1.jsx)("title", {
          children: _v1
        }), _v2 ? (0, _v1.jsx)("meta", {
          content: _v2,
          name: "description"
        }) : null, (0, _v1.jsx)("meta", {
          content: _v1,
          property: "og:title"
        }), _v2 ? (0, _v1.jsx)("meta", {
          content: _v2,
          property: "og:description"
        }) : null, (0, _v1.jsx)("meta", {
          content: "website",
          property: "og:type"
        }), _v0.link ? (0, _v1.jsx)("meta", {
          content: _v0.link,
          property: "og:url"
        }) : null, _v0.link ? (0, _v1.jsx)("link", {
          href: _v0.link,
          rel: "canonical"
        }) : null]
      }), (0, _v1.jsx)(_v32, {
        series: _v0
      })]
    });
  }], 0);
}