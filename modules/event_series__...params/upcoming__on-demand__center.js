{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = "upcoming",
    _v6 = "on-demand",
    _v7 = _v0 => {
      let _v1 = _v0.link ?? "";
      try {
        return new URL(_v1).pathname;
      } catch {
        return _v1;
      }
    },
    _v8 = _v0 => `${_v7(_v0)}/${_v5}`,
    _v9 = _v0 => `${_v7(_v0)}/${_v6}`;
  var _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0);
  let _v17 = () => (0, _v1.jsxs)(_v13.Flex, {
    align: "center",
    backgroundColor: "fill-component",
    borderRadius: "lg",
    direction: "column",
    gap: "sm",
    justify: "center",
    minHeight: (0, _v16.rem)(200),
    padding: "xl",
    width: "100%",
    children: [(0, _v1.jsx)(_v14.Text, {
      color: "text-primary",
      variant: "heading-sm",
      children: (0, _v15.translate)({
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
    }), (0, _v1.jsx)(_v14.Text, {
      color: "text-secondary",
      textAlign: "center",
      variant: "body-md",
      children: (0, _v15.translate)({
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
  var _v18 = _v0.i(0);
  let _v19 = ({
    children: _v0
  }) => (0, _v1.jsx)(_v18.SimpleGrid, {
    columns: {
      base: 1,
      sm: 2,
      lg: 3
    },
    spacing: "md",
    width: "100%",
    children: _v0
  });
  var _v20 = _v0.i(0);
  let _v21 = ({
    label: _v0
  }) => (0, _v1.jsx)(_v11.Box, {
    alignItems: "center",
    backdropFilter: "blur(20px)",
    backgroundColor: "rgba(14, 18, 22, 0.48)",
    borderRadius: (0, _v16.rem)(4),
    bottom: (0, _v16.rem)(7.5),
    display: "flex",
    height: (0, _v16.rem)(20),
    justifyContent: "center",
    position: "absolute",
    px: (0, _v16.rem)(4),
    right: (0, _v16.rem)(7.5),
    children: (0, _v1.jsx)(_v14.Text, {
      color: "white",
      fontWeight: "medium",
      variant: "body-sm",
      whiteSpace: "nowrap",
      children: _v0
    })
  });
  var _v22 = _v0.i(0);
  let _v23 = ({
      src: _v0,
      borderRadius: _v1 = "sm",
      children: _v2
    }) => (0, _v1.jsxs)(_v11.Box, {
      backgroundColor: "gray.400",
      border: "0.5px solid",
      borderColor: "stroke",
      borderRadius: _v1,
      overflow: "hidden",
      paddingBottom: "56.25%",
      position: "relative",
      width: "100%",
      children: [_v0 ? (0, _v1.jsx)(_v22.Image, {
        alt: "",
        height: "100%",
        left: 0,
        objectFit: "cover",
        position: "absolute",
        src: _v0,
        top: 0,
        width: "100%"
      }) : null, _v2]
    }),
    _v24 = _v0 => {
      let _v1 = _v0.pictures?.sizes;
      if (_v1 && 0 !== _v1.length) return _v1[_v1.length - 1]?.link ?? void 0;
    },
    _v25 = _v0 => _v0.title?.trim() || (0, _v15.translate)({
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
    _v26 = _v0 => {
      if (!_v0) return null;
      let _v1 = new Date(_v0).getTime();
      return Number.isNaN(_v1) ? null : _v1;
    },
    _v27 = _v0 => {
      let _v1 = Date.now(),
        _v2 = [],
        _v3 = [];
      return _v0.forEach(_v0 => {
        let _v1 = _v26(_v0.nextOccurrenceTime);
        _v0.isLive || null !== _v1 && _v1 >= _v1 ? _v2.push(_v0) : _v3.push(_v0);
      }), _v2.sort((_v0, _v1) => _v0.isLive !== _v1.isLive ? _v0.isLive ? -1 : 1 : (_v26(_v0.nextOccurrenceTime) ?? 0) - (_v26(_v1.nextOccurrenceTime) ?? 0)), {
        upcoming: _v2,
        onDemand: _v3
      };
    },
    _v28 = _v0 => _v0.flatMap(_v0 => _v0.recordings ?? []).sort((_v0, _v1) => {
      let _v2 = _v0.streamedOn ? new Date(_v0.streamedOn).getTime() : 0;
      return (_v1.streamedOn ? new Date(_v1.streamedOn).getTime() : 0) - _v2;
    }),
    _v29 = (_v0, _v1) => {
      let _v2 = (0, _v15.getCurrentLocale)();
      if (_v1) try {
        return new Intl.DateTimeFormat(_v2, {
          ..._v0,
          timeZone: _v1
        });
      } catch {}
      return new Intl.DateTimeFormat(_v2, _v0);
    },
    _v30 = _v0 => {
      if (!_v0) return null;
      let _v1 = new Date(`${_v0.slice(0, 10)}T00:00:00`);
      return Number.isNaN(_v1.getTime()) ? null : _v1;
    },
    _v31 = _v0 => new Intl.DateTimeFormat("en", {
      month: "short",
      day: "numeric",
      year: "numeric"
    }).format(_v0),
    _v32 = ({
      recording: _v0
    }) => {
      let _v1 = (_v0 => {
          if (!_v0.streamedOn) return null;
          let _v1 = new Date(_v0.streamedOn).getTime();
          return Number.isNaN(_v1) ? null : new Intl.DateTimeFormat("en", {
            month: "short",
            day: "numeric",
            year: "numeric"
          }).format(new Date(_v1));
        })(_v0),
        _v2 = (_v0 => {
          if (null == _v0 || !Number.isFinite(_v0) || _v0 < 0) return null;
          let _v1 = Math.floor(_v0),
            _v2 = Math.floor(_v1 / 0),
            _v3 = Math.floor(_v1 % 0 / 60),
            _v4 = String(_v1 % 60).padStart(2, "0");
          return _v2 > 0 ? `${_v2}:${String(_v3).padStart(2, "0")}:${_v4}` : `${_v3}:${_v4}`;
        })(_v0.duration);
      return (0, _v1.jsxs)(_v13.Flex, {
        as: "a",
        borderRadius: "xl",
        direction: "column",
        gap: "sm",
        height: "100%",
        href: _v0.link,
        overflow: "hidden",
        p: "sm",
        role: "group",
        width: "100%",
        _hover: {
          backgroundColor: "fill-component-hover"
        },
        children: [(0, _v1.jsx)(_v23, {
          borderRadius: "md",
          src: (_v0 => {
            let _v1 = _v0.pictures?.sizes;
            if (_v1 && 0 !== _v1.length) return _v1[_v1.length - 1]?.link ?? void 0;
          })(_v0),
          children: _v2 ? (0, _v1.jsx)(_v21, {
            label: _v2
          }) : null
        }), (0, _v1.jsxs)(_v13.Flex, {
          align: "center",
          gap: "sm",
          pl: "xs",
          width: "100%",
          children: [(0, _v1.jsxs)(_v13.Flex, {
            direction: "column",
            flex: "1 0 0",
            gap: "xs",
            minWidth: 0,
            children: [(0, _v1.jsx)(_v14.Text, {
              color: "text-primary",
              noOfLines: 1,
              variant: "heading-sm",
              children: _v0.title?.trim() || (0, _v15.translate)({
                singular: "Untitled video",
                dictionary: {
                  es: {
                    singular: "Vídeo sin título"
                  },
                  "de-DE": {
                    singular: "Unbenanntes Video"
                  },
                  "fr-FR": {
                    singular: "Vidéo sans titre"
                  },
                  "ja-JP": {
                    singular: "タイトル未設定の動画"
                  },
                  "ko-KR": {
                    singular: "제목 없는 동영상"
                  },
                  "pt-BR": {
                    singular: "Vídeo sem título"
                  },
                  "zh-CN": {
                    singular: "未命名视频"
                  }
                }
              })
            }), _v1 ? (0, _v1.jsx)(_v14.Text, {
              color: "text-secondary",
              noOfLines: 1,
              variant: "body-sm",
              children: _v1
            }) : null]
          }), (0, _v1.jsx)(_v13.Flex, {
            align: "center",
            "aria-hidden": !0,
            color: "text-primary",
            flexShrink: 0,
            justify: "center",
            opacity: 0,
            transition: "opacity 0.15s ease",
            _groupHover: {
              opacity: 1
            },
            children: (0, _v1.jsx)(_v20.ArrowRight, {})
          })]
        })]
      });
    };
  var _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0);
  let _v37 = ({
      name: _v0,
      logo: _v1,
      series: _v2
    }) => {
      let _v3 = "vimeo" === _v1.type || "custom" === _v1.type && !!_v1.url,
        _v4 = (0, _v35.useColorModeValue)("rgba(244, 246, 248, 0.64)", "rgba(20, 24, 28, 0.64)"),
        _v5 = _v2.landingPageConfig?.navConfig ?? ["upcoming", "on-demand"],
        _v6 = [{
          id: "upcoming",
          label: (0, _v15.translate)({
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
          href: _v8(_v2)
        }, {
          id: "on-demand",
          label: (0, _v15.translate)({
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
          href: _v9(_v2)
        }].filter(_v0 => _v5.includes(_v0.id));
      return (0, _v1.jsx)(_v11.Box, {
        backdropFilter: "blur(50px)",
        backgroundColor: _v4,
        position: "sticky",
        top: 0,
        width: "100%",
        zIndex: 2,
        children: (0, _v1.jsxs)(_v13.Flex, {
          align: "center",
          gap: "md",
          justify: "space-between",
          px: "lg",
          py: (0, _v16.rem)(12),
          children: [(0, _v1.jsxs)(_v13.Flex, {
            align: "center",
            gap: "md",
            minWidth: 0,
            children: [(0, _v1.jsx)(_v36.Navigation.Logo, {
              customLogoUrl: _v1.url,
              type: _v1.type
            }), _v3 ? (0, _v1.jsx)(_v34.Divider, {
              height: (0, _v16.rem)(16),
              orientation: "vertical"
            }) : null, (0, _v1.jsx)(_v14.Text, {
              color: "text-primary",
              noOfLines: 1,
              variant: "heading-md",
              children: _v0 || (0, _v15.translate)({
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
            })]
          }), (0, _v1.jsx)(_v13.Flex, {
            align: "center",
            display: {
              base: "none",
              md: "flex"
            },
            flexShrink: 0,
            gap: "sm",
            children: _v6.map(_v0 => (0, _v1.jsx)(_v12.Button, {
              as: _v10.default,
              href: _v0.href,
              size: "md",
              variant: "tertiary",
              children: _v0.label
            }, _v0.id))
          })]
        })
      });
    },
    _v38 = ({
      series: _v0,
      children: _v1
    }) => {
      let _v2 = _v0.name?.trim() ?? "",
        _v3 = {
          type: _v0.landingPageConfig?.logo?.type ?? "vimeo",
          url: _v0.landingPageConfig?.logo?.url ?? null
        },
        _v4 = _v0.landingPageConfig?.theme === "dark" ? _v33.DarkMode : _v33.LightMode;
      return (0, _v1.jsx)(_v4, {
        children: (0, _v1.jsxs)(_v13.Flex, {
          backgroundColor: "background",
          direction: "column",
          align: "center",
          minHeight: "100vh",
          width: "100%",
          children: [(0, _v1.jsx)(_v37, {
            logo: _v3,
            name: _v2,
            series: _v0
          }), (0, _v1.jsx)(_v13.Flex, {
            direction: "column",
            gap: "xl",
            maxWidth: (0, _v16.rem)(0),
            p: "md",
            width: "100%",
            children: _v1
          })]
        })
      });
    },
    _v39 = ({
      series: _v0
    }) => {
      let _v1 = _v28(_v0.events),
        _v2 = _v7(_v0),
        _v3 = (0, _v15.translate)({
          singular: "Back to overview",
          dictionary: {
            es: {
              singular: "Volver a la visión general"
            },
            "de-DE": {
              singular: "Zurück zur Übersicht"
            },
            "fr-FR": {
              singular: "Retour à l'aperçu"
            },
            "ja-JP": {
              singular: "概要に戻る"
            },
            "ko-KR": {
              singular: "개요로 돌아가기"
            },
            "pt-BR": {
              singular: "Voltar à visão geral"
            },
            "zh-CN": {
              singular: "返回概览"
            }
          }
        });
      return (0, _v1.jsxs)(_v38, {
        series: _v0,
        children: [(0, _v1.jsxs)(_v13.Flex, {
          align: "flex-start",
          direction: "column",
          gap: "lg",
          width: "100%",
          children: [(0, _v1.jsx)(_v12.Button, {
            as: _v10.default,
            href: _v2,
            size: "sm",
            variant: "tertiary",
            children: _v3
          }), (0, _v1.jsx)(_v13.Flex, {
            align: "center",
            pb: "md",
            pl: "xs",
            pr: "md",
            pt: "lg",
            width: "100%",
            children: (0, _v1.jsx)(_v14.Text, {
              color: "text-primary",
              variant: "heading-2xl",
              children: (0, _v15.translate)({
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
            })
          }), _v1.length > 0 ? (0, _v1.jsx)(_v11.Box, {
            pb: "md",
            width: "100%",
            children: (0, _v1.jsx)(_v19, {
              children: _v1.map(_v0 => (0, _v1.jsx)(_v32, {
                recording: _v0
              }, _v0.uri))
            })
          }) : (0, _v1.jsx)(_v17, {})]
        }), (0, _v1.jsx)(_v13.Flex, {
          justify: "center",
          width: "100%",
          children: (0, _v1.jsx)(_v12.Button, {
            as: _v10.default,
            href: _v2,
            size: "lg",
            variant: "secondary",
            children: _v3
          })
        })]
      });
    };
  var _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0);
  let _v43 = ({
      src: _v0,
      isLive: _v1
    }) => (0, _v1.jsxs)(_v11.Box, {
      backgroundColor: "gray.400",
      border: "0.5px solid",
      borderColor: "stroke",
      borderRadius: "sm",
      flexShrink: 0,
      height: (0, _v16.rem)(80),
      overflow: "hidden",
      position: "relative",
      width: (0, _v16.rem)(142),
      children: [_v0 ? (0, _v1.jsx)(_v22.Image, {
        alt: "",
        height: "100%",
        objectFit: "cover",
        src: _v0,
        width: "100%"
      }) : null, _v1 ? (0, _v1.jsx)(_v11.Box, {
        left: "xs",
        position: "absolute",
        top: "xs",
        zIndex: 2,
        children: (0, _v1.jsx)(_v42.CardBadge, {
          format: "live",
          size: "sm",
          children: (0, _v15.translate)({
            singular: "Live",
            dictionary: {
              es: {
                singular: "En vivo"
              },
              "fr-FR": {
                singular: "Direct"
              },
              "ja-JP": {
                singular: "ライブ"
              },
              "ko-KR": {
                singular: "라이브"
              },
              "pt-BR": {
                singular: "Ao vivo"
              },
              "zh-CN": {
                singular: "直播"
              }
            }
          })
        })
      }) : null]
    }),
    _v44 = ({
      event: _v0,
      timeZone: _v1
    }) => {
      let _v2 = _v25(_v0),
        _v3 = _v0.nextOccurrenceTime ?? _v0.startTime,
        _v4 = _v3 ? ((_v0, _v1) => {
          let _v2 = _v26(_v0);
          if (null === _v2) return null;
          let _v3 = new Date(_v2),
            _v4 = _v29({
              hour: "numeric",
              minute: "2-digit"
            }, _v1).format(_v3),
            _v5 = _v1 ? ((_v0, _v1) => {
              try {
                return new Intl.DateTimeFormat((0, _v15.getCurrentLocale)(), {
                  timeZone: _v1,
                  timeZoneName: "short"
                }).formatToParts(_v0).find(_v0 => "timeZoneName" === _v0.type)?.value ?? null;
              } catch {
                return null;
              }
            })(_v3, _v1) : null;
          return _v5 ? `${_v4} ${_v5}` : _v4;
        })(_v3, _v1) : null,
        _v5 = _v0.description?.trim();
      return (0, _v1.jsxs)(_v13.Flex, {
        align: "center",
        borderRadius: "md",
        gap: "md",
        p: "sm",
        position: "relative",
        role: "group",
        _hover: {
          backgroundColor: "fill-component-hover"
        },
        children: [(0, _v1.jsx)(_v43, {
          isLive: _v0.isLive,
          src: _v24(_v0)
        }), (0, _v1.jsxs)(_v13.Flex, {
          direction: "column",
          flex: "1",
          gap: "xs",
          minW: 0,
          children: [(0, _v1.jsx)(_v14.Text, {
            color: "text-primary",
            noOfLines: 1,
            variant: "heading-sm",
            children: _v2
          }), _v4 ? (0, _v1.jsx)(_v14.Text, {
            color: "text-secondary",
            noOfLines: 1,
            variant: "body-sm",
            children: _v4
          }) : null, _v5 ? (0, _v1.jsx)(_v14.Text, {
            color: "text-secondary",
            noOfLines: 2,
            variant: "body-sm",
            children: _v5
          }) : null]
        }), _v0.link ? (0, _v1.jsx)(_v11.Box, {
          "aria-label": _v2,
          as: "a",
          href: _v0.link,
          inset: 0,
          position: "absolute",
          zIndex: 1
        }) : null]
      });
    },
    _v45 = ({
      label: _v0,
      events: _v1,
      timeZone: _v2
    }) => {
      let [_v3, _v4] = (0, _v3.useState)(!1);
      return (0, _v1.jsxs)(_v11.Box, {
        backgroundColor: "fill-component",
        borderRadius: "lg",
        overflow: "hidden",
        children: [(0, _v1.jsxs)(_v13.Flex, {
          align: "center",
          as: "button",
          justify: "space-between",
          onClick: () => _v4(_v0 => !_v0),
          px: "md",
          py: "md",
          textAlign: "left",
          type: "button",
          w: "100%",
          children: [(0, _v1.jsx)(_v14.Text, {
            color: "text-primary",
            variant: "heading-md",
            children: _v0
          }), (0, _v1.jsx)(_v13.Flex, {
            align: "center",
            color: "text-primary",
            justify: "center",
            children: _v3 ? (0, _v1.jsx)(_v41.ChevronUp, {}) : (0, _v1.jsx)(_v40.ChevronDown, {})
          })]
        }), _v3 ? (0, _v1.jsx)(_v13.Flex, {
          direction: "column",
          gap: "xs",
          pb: "sm",
          px: "sm",
          children: _v1.map(_v0 => (0, _v1.jsx)(_v44, {
            event: _v0,
            timeZone: _v2
          }, _v0.uri))
        }) : null]
      });
    },
    _v46 = ({
      events: _v0,
      timeZone: _v1
    }) => {
      let _v2,
        _v3,
        _v4,
        _v5 = (_v2 = [], _v3 = new Map(), _v4 = new Date().toISOString(), _v0.forEach(_v0 => {
          let _v1 = _v0.nextOccurrenceTime ?? _v0.startTime,
            _v2 = _v1 && null !== _v26(_v1) ? _v1 : _v0.isLive ? _v4 : null;
          if (null === _v2) return;
          let _v3 = _v29({
              year: "numeric",
              month: "2-digit",
              day: "2-digit"
            }, _v1).format(new Date(_v2)),
            _v4 = _v3.get(_v3);
          _v4 || (_v4 = {
            key: _v3,
            label: ((_v0, _v1) => {
              let _v2 = _v26(_v0);
              if (null === _v2) return null;
              let _v3 = new Date(_v2),
                _v4 = _v29({
                  month: "short",
                  day: "numeric"
                }, _v1);
              if (!(0, _v15.getCurrentLocale)().startsWith("en")) return _v4.format(_v3);
              let _v5 = _v4.formatToParts(_v3),
                _v6 = _v5.find(_v0 => "month" === _v0.type)?.value ?? "",
                _v7 = _v5.find(_v0 => "day" === _v0.type)?.value ?? "",
                _v8 = Number(_v7);
              return `${_v6} ${_v7}${Number.isNaN(_v8) ? "" : (_v0 => {
                let _v1 = _v0 % 100;
                if (_v1 >= 11 && _v1 <= 13) return "th";
                switch (_v0 % 10) {
                  case 1:
                    return "st";
                  case 2:
                    return "nd";
                  case 3:
                    return "rd";
                  default:
                    return "th";
                }
              })(_v8)}`;
            })(_v2, _v1) ?? "",
            events: []
          }, _v3.set(_v3, _v4), _v2.push(_v4)), _v4.events.push(_v0);
        }), _v2);
      return 0 === _v5.length ? null : (0, _v1.jsx)(_v13.Flex, {
        direction: "column",
        id: "agenda",
        width: "100%",
        children: (0, _v1.jsxs)(_v13.Flex, {
          direction: {
            base: "column",
            md: "row"
          },
          gap: {
            base: "md",
            md: "xl"
          },
          pb: "md",
          pt: "lg",
          px: "md",
          children: [(0, _v1.jsx)(_v11.Box, {
            flexShrink: 0,
            width: {
              base: "100%",
              md: (0, _v16.rem)(240)
            },
            children: (0, _v1.jsx)(_v14.Text, {
              color: "text-primary",
              variant: "heading-lg",
              children: (0, _v15.translate)({
                singular: "Agenda",
                dictionary: {
                  "de-DE": {
                    singular: "Tagesordnung"
                  },
                  "ja-JP": {
                    singular: "アジェンダ"
                  },
                  "ko-KR": {
                    singular: "일정"
                  },
                  "zh-CN": {
                    singular: "议程"
                  }
                }
              })
            })
          }), (0, _v1.jsx)(_v13.Flex, {
            direction: "column",
            flex: "1",
            gap: "md",
            minW: 0,
            children: _v5.map(_v0 => (0, _v1.jsx)(_v45, {
              events: _v0.events,
              label: _v0.label,
              timeZone: _v1
            }, _v0.key))
          })]
        })
      });
    };
  var _v47 = _v0.i(0),
    _v48 = _v0.i(0);
  let _v49 = ({
      event: _v0
    }) => {
      let _v1 = _v0.isLive,
        _v2 = (_v0 => {
          let _v1 = _v26(_v0.nextOccurrenceTime ?? _v0.startTime);
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
        _v3 = _v0.description?.trim(),
        _v4 = (_v0.speakers ?? []).filter(_v0 => !!_v0?.name).slice(0, 3),
        _v5 = _v25(_v0);
      return (0, _v1.jsxs)(_v13.Flex, {
        backgroundColor: "fill-component",
        borderRadius: "lg",
        direction: "column",
        gap: "md",
        height: "100%",
        overflow: "hidden",
        pb: "md",
        position: "relative",
        pt: "sm",
        px: "sm",
        role: "group",
        width: "100%",
        _hover: {
          backgroundColor: "fill-component-hover"
        },
        children: [(0, _v1.jsxs)(_v11.Box, {
          position: "relative",
          children: [(0, _v1.jsx)(_v23, {
            src: _v24(_v0)
          }), _v1 ? (0, _v1.jsx)(_v11.Box, {
            left: "sm",
            position: "absolute",
            top: "sm",
            zIndex: 2,
            children: (0, _v1.jsx)(_v42.CardBadge, {
              format: "live",
              size: "sm",
              children: (0, _v15.translate)({
                singular: "Live",
                dictionary: {
                  es: {
                    singular: "En vivo"
                  },
                  "fr-FR": {
                    singular: "Direct"
                  },
                  "ja-JP": {
                    singular: "ライブ"
                  },
                  "ko-KR": {
                    singular: "라이브"
                  },
                  "pt-BR": {
                    singular: "Ao vivo"
                  },
                  "zh-CN": {
                    singular: "直播"
                  }
                }
              })
            })
          }) : null]
        }), (0, _v1.jsxs)(_v13.Flex, {
          direction: "column",
          gap: "sm",
          pl: "sm",
          children: [_v2 ? (0, _v1.jsxs)(_v13.Flex, {
            align: "center",
            gap: "sm",
            children: [(0, _v1.jsx)(_v48.Calendar, {
              boxSize: "2xs",
              color: "var(--vimeo-colors-text-secondary)"
            }), (0, _v1.jsx)(_v14.Text, {
              color: "text-secondary",
              lineHeight: (0, _v16.rem)(16),
              variant: "body-md",
              whiteSpace: "nowrap",
              children: _v2
            })]
          }) : null, (0, _v1.jsxs)(_v13.Flex, {
            direction: "column",
            gap: "xs",
            children: [(0, _v1.jsx)(_v14.Text, {
              color: "text-primary",
              noOfLines: 1,
              variant: "heading-md",
              children: _v5
            }), (0, _v1.jsx)(_v11.Box, {
              minHeight: (0, _v16.rem)(40),
              children: _v3 ? (0, _v1.jsx)(_v14.Text, {
                color: "text-secondary",
                noOfLines: 2,
                variant: "body-md",
                children: _v3
              }) : null
            })]
          }), (0, _v1.jsx)(_v13.Flex, {
            align: "center",
            minHeight: (0, _v16.rem)(28),
            children: _v4.map((_v0, _v1) => (0, _v1.jsx)(_v11.Box, {
              ml: 0 === _v1 ? 0 : (0, _v16.rem)(-4),
              children: (0, _v1.jsx)(_v47.Avatar, {
                alt: _v0.name ?? "",
                nameProps: {
                  name: _v0.name ?? ""
                },
                size: "xs",
                src: _v0.avatar ?? void 0
              })
            }, `${_v0.name}-${_v1}`))
          })]
        }), _v0.link ? (0, _v1.jsx)(_v11.Box, {
          "aria-label": _v5,
          as: "a",
          href: _v0.link,
          inset: 0,
          position: "absolute",
          zIndex: 1
        }) : null]
      });
    },
    _v50 = ({
      id: _v0,
      title: _v1,
      action: _v2,
      children: _v3
    }) => (0, _v1.jsxs)(_v13.Flex, {
      direction: "column",
      id: _v0,
      width: "100%",
      children: [(0, _v1.jsxs)(_v13.Flex, {
        align: "center",
        gap: "sm",
        justify: "space-between",
        pb: "md",
        pt: "lg",
        px: "md",
        children: [(0, _v1.jsx)(_v14.Text, {
          color: "text-primary",
          variant: "heading-lg",
          children: _v1
        }), _v2]
      }), (0, _v1.jsx)(_v11.Box, {
        pb: "md",
        px: "md",
        children: (0, _v1.jsx)(_v19, {
          children: _v3
        })
      })]
    });
  var _v51 = _v0.i(0),
    _v52 = _v0.i(0);
  let _v53 = ({
      item: _v0
    }) => {
      let [_v1, _v2] = (0, _v3.useState)(!1);
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsxs)(_v13.Flex, {
          direction: "column",
          gap: "sm",
          overflow: "hidden",
          children: [(0, _v1.jsxs)(_v13.Flex, {
            align: "center",
            "aria-expanded": _v1,
            as: "button",
            backgroundColor: "unset",
            gap: "sm",
            justify: "space-between",
            onClick: () => _v2(_v0 => !_v0),
            p: "0",
            textAlign: "left",
            type: "button",
            w: "100%",
            children: [(0, _v1.jsx)(_v14.Text, {
              color: "text-primary",
              variant: "heading-lg",
              children: _v0.question
            }), (0, _v1.jsx)(_v13.Flex, {
              align: "center",
              color: "text-primary",
              flexShrink: 0,
              justify: "center",
              children: _v1 ? (0, _v1.jsx)(_v51.Minus, {}) : (0, _v1.jsx)(_v52.Plus, {})
            })]
          }), _v1 ? (0, _v1.jsx)(_v14.Text, {
            color: "text-secondary",
            variant: "body-md",
            whiteSpace: "pre-wrap",
            children: _v0.answer
          }) : null]
        }), (0, _v1.jsx)(_v34.Divider, {
          borderColor: "stroke",
          my: "6"
        })]
      });
    },
    _v54 = ({
      items: _v0
    }) => (0, _v1.jsx)(_v13.Flex, {
      direction: "column",
      id: "faq",
      width: "100%",
      children: (0, _v1.jsxs)(_v13.Flex, {
        direction: {
          base: "column",
          md: "row"
        },
        gap: {
          base: "md",
          md: "xl"
        },
        pb: "md",
        pt: "lg",
        px: "md",
        children: [(0, _v1.jsx)(_v11.Box, {
          flexShrink: 0,
          width: {
            base: "100%",
            md: (0, _v16.rem)(240)
          },
          children: (0, _v1.jsx)(_v14.Text, {
            color: "text-tertiary",
            variant: "heading-lg",
            children: (0, _v15.translate)({
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
                  singular: "常规信息"
                }
              }
            })
          })
        }), (0, _v1.jsx)(_v13.Flex, {
          direction: "column",
          flex: "1",
          gap: "md",
          minW: 0,
          children: _v0.map((_v0, _v1) => (0, _v1.jsx)(_v53, {
            item: _v0
          }, _v1))
        })]
      })
    });
  var _v55 = _v0.i(0);
  let _v56 = ({
      icon: _v0,
      label: _v1
    }) => (0, _v1.jsxs)(_v13.Flex, {
      align: "center",
      backdropFilter: "blur(20px)",
      backgroundColor: "rgba(61, 71, 81, 0.64)",
      borderRadius: "sm",
      gap: "sm",
      px: "sm",
      py: "xs",
      children: [_v0, (0, _v1.jsx)(_v14.Text, {
        color: "whiteAlpha.800",
        variant: "body-md",
        whiteSpace: "nowrap",
        children: _v1
      })]
    }),
    _v57 = ({
      name: _v0,
      description: _v1,
      dateRange: _v2,
      timeZoneLabel: _v3,
      heroImageSrc: _v4
    }) => {
      let [_v5, _v6] = (0, _v3.useState)(!1);
      return (0, _v1.jsx)(_v13.Flex, {
        backgroundColor: "gray.900",
        backgroundImage: _v4 ? `linear-gradient(90deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 75%), url(${_v4})` : void 0,
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: (0, _v16.rem)(28),
        direction: "column",
        justify: "flex-end",
        minHeight: (0, _v16.rem)(480),
        padding: {
          base: "lg",
          md: (0, _v16.rem)(48)
        },
        width: "100%",
        children: (0, _v1.jsxs)(_v13.Flex, {
          direction: "column",
          gap: "lg",
          maxWidth: (0, _v16.rem)(992),
          children: [(0, _v1.jsxs)(_v13.Flex, {
            direction: "column",
            gap: "sm",
            children: [(0, _v1.jsx)(_v14.Text, {
              color: "white",
              variant: "heading-3xl",
              children: _v0 || (0, _v15.translate)({
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
            }), _v1 ? (0, _v1.jsxs)(_v11.Box, {
              maxWidth: (0, _v16.rem)(640),
              children: [(0, _v1.jsx)(_v14.Text, {
                color: "whiteAlpha.800",
                noOfLines: _v5 ? void 0 : 2,
                variant: "body-lg",
                children: _v1
              }), _v1.length > 120 ? (0, _v1.jsx)(_v14.Text, {
                as: "button",
                color: "white",
                onClick: () => _v6(_v0 => !_v0),
                textDecoration: "underline",
                variant: "body-md",
                children: _v5 ? (0, _v15.translate)({
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
                }) : (0, _v15.translate)({
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
          }), (0, _v1.jsxs)(_v13.Flex, {
            gap: "md",
            wrap: "wrap",
            children: [_v2 ? (0, _v1.jsx)(_v56, {
              icon: (0, _v1.jsx)(_v48.Calendar, {
                color: "white"
              }),
              label: _v2
            }) : null, _v3 ? (0, _v1.jsx)(_v56, {
              icon: (0, _v1.jsx)(_v55.ClockThree, {
                color: "white"
              }),
              label: _v3
            }) : null]
          })]
        })
      });
    },
    _v58 = ({
      count: _v0,
      href: _v1
    }) => (0, _v1.jsxs)(_v13.Flex, {
      align: "center",
      backgroundColor: "fill-component",
      borderRadius: "lg",
      direction: "column",
      gap: "md",
      height: "100%",
      justify: "center",
      minHeight: 0,
      p: "xl",
      width: "100%",
      children: [(0, _v1.jsx)(_v14.Text, {
        color: "text-primary",
        variant: "heading-2xl",
        children: `+${_v0}`
      }), (0, _v1.jsx)(_v12.Button, {
        as: _v10.default,
        href: _v1,
        size: "lg",
        variant: "secondary",
        children: (0, _v15.translate)({
          singular: "See all",
          dictionary: {
            es: {
              singular: "Ver todo"
            },
            "de-DE": {
              singular: "Alle anzeigen"
            },
            "fr-FR": {
              singular: "Voir tout"
            },
            "ja-JP": {
              singular: "すべて表示"
            },
            "ko-KR": {
              singular: "모두 보기"
            },
            "pt-BR": {
              singular: "Ver todos"
            },
            "zh-CN": {
              singular: "查看全部"
            }
          }
        })
      })]
    }),
    _v59 = ["banner", "upcoming"],
    _v60 = ({
      series: _v0
    }) => {
      let _v1 = _v0.description?.trim() ?? "",
        {
          upcoming: _v2
        } = _v27(_v0.events),
        _v3 = _v2.slice(0, 5),
        _v4 = _v2.length > _v3.length,
        _v5 = _v28(_v0.events),
        _v6 = _v5.slice(0, 5),
        _v7 = _v5.length > _v6.length,
        _v8 = ((_v0, _v1) => {
          let _v2 = _v30(_v0),
            _v3 = _v30(_v1);
          if (!_v2 && !_v3) return null;
          if (_v2 && !_v3) return _v31(_v2);
          if (!_v2 && _v3) return _v31(_v3);
          if (_v2 && _v3) {
            if (_v2.getFullYear() === _v3.getFullYear()) return `${new Intl.DateTimeFormat("en", {
              month: "short",
              day: "numeric"
            }).format(_v2)} — ${_v31(_v3)}`;
            return `${_v31(_v2)} — ${_v31(_v3)}`;
          }
          return null;
        })(_v0.landingPageConfig?.startDate, _v0.landingPageConfig?.endDate) ?? (_v0 => {
          let _v1 = _v0.map(_v0 => _v26(_v0.nextOccurrenceTime)).filter(_v0 => null !== _v0).sort((_v0, _v1) => _v0 - _v1);
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
        _v9 = (_v0 => {
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
        _v10 = (_v0 => {
          let _v1 = _v0?.sizes;
          if (!_v1 || 0 === _v1.length) return _v0?.baseLink ?? null;
          let _v2 = [..._v1].sort((_v0, _v1) => (_v1.width ?? 0) - (_v0.width ?? 0));
          return _v2[0]?.link ?? _v0?.baseLink ?? null;
        })(_v0.pictures),
        _v11 = _v0.landingPageConfig?.contentConfig ?? _v59,
        _v12 = _v0.landingPageConfig?.timeZone,
        _v13 = _v0.landingPageConfig?.faqConfig ?? [],
        _v14 = _v11.includes("upcoming") || _v11.includes("on-demand") || _v11.includes("agenda"),
        _v15 = (_v11.includes("upcoming") || _v11.includes("agenda")) && _v2.length > 0 || _v11.includes("on-demand") && _v5.length > 0,
        _v16 = _v11.map(_v0 => "banner" === _v0 ? (0, _v1.jsx)(_v57, {
          dateRange: _v8,
          description: _v1,
          heroImageSrc: _v10,
          name: _v0.name?.trim() ?? "",
          timeZoneLabel: _v9
        }, _v0) : "upcoming" === _v0 && _v3.length > 0 ? (0, _v1.jsxs)(_v50, {
          action: _v4 ? (0, _v1.jsx)(_v12.Button, {
            as: _v10.default,
            href: _v8(_v0),
            size: "lg",
            variant: "tertiary",
            children: (0, _v15.translate)({
              singular: "Explore all",
              dictionary: {
                es: {
                  singular: "Explorar todo"
                },
                "de-DE": {
                  singular: "Alle entdecken"
                },
                "fr-FR": {
                  singular: "Explorer tout"
                },
                "ja-JP": {
                  singular: "すべて表示"
                },
                "ko-KR": {
                  singular: "전체 둘러보기"
                },
                "pt-BR": {
                  singular: "Explorar tudo"
                },
                "zh-CN": {
                  singular: "查看全部"
                }
              }
            })
          }) : null,
          id: "upcoming-events",
          title: (0, _v15.translate)({
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
          children: [_v3.map(_v0 => (0, _v1.jsx)(_v49, {
            event: _v0
          }, _v0.uri)), _v4 ? (0, _v1.jsx)(_v58, {
            count: _v2.length - _v3.length,
            href: _v8(_v0)
          }, "see-more") : null]
        }, _v0) : "agenda" === _v0 && _v2.length > 0 ? (0, _v1.jsx)(_v46, {
          events: _v2,
          timeZone: _v12
        }, _v0) : "faq" === _v0 && _v13.length > 0 ? (0, _v1.jsx)(_v54, {
          items: _v13
        }, _v0) : "on-demand" === _v0 && _v6.length > 0 ? (0, _v1.jsxs)(_v50, {
          action: _v7 ? (0, _v1.jsx)(_v12.Button, {
            as: _v10.default,
            href: _v9(_v0),
            size: "lg",
            variant: "tertiary",
            children: (0, _v15.translate)({
              singular: "Explore all",
              dictionary: {
                es: {
                  singular: "Explorar todo"
                },
                "de-DE": {
                  singular: "Alle entdecken"
                },
                "fr-FR": {
                  singular: "Explorer tout"
                },
                "ja-JP": {
                  singular: "すべて表示"
                },
                "ko-KR": {
                  singular: "전체 둘러보기"
                },
                "pt-BR": {
                  singular: "Explorar tudo"
                },
                "zh-CN": {
                  singular: "查看全部"
                }
              }
            })
          }) : null,
          id: "on-demand",
          title: (0, _v15.translate)({
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
          children: [_v6.map(_v0 => (0, _v1.jsx)(_v32, {
            recording: _v0
          }, _v0.uri)), _v7 ? (0, _v1.jsx)(_v58, {
            count: _v5.length - _v6.length,
            href: _v9(_v0)
          }, "see-more") : null]
        }, _v0) : null).filter(Boolean);
      return (0, _v1.jsxs)(_v38, {
        series: _v0,
        children: [_v16, _v14 && !_v15 ? (0, _v1.jsx)(_v17, {}) : null]
      });
    };
  var _v61 = _v0.i(0),
    _v62 = _v0.i(0),
    _v63 = _v0.i(0),
    _v64 = _v0.i(0);
  let _v65 = _v0 => "object" == typeof _v0 && null !== _v0 ? _v0 : null,
    _v66 = async _v0 => {
      let _v1 = _v65(_v0);
      if (_v1?.status !== 403 || !_v1.res) return !1;
      try {
        let _v0 = await _v1.res.json();
        return _v0?.error_code === 0;
      } catch {
        return !1;
      }
    };
  var _v67 = _v0.i(0),
    _v68 = _v0.i(0);
  async function _v69({
    baseUrl: _v0,
    select: _v1,
    where: {
      eventSeriesId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v67.measureLatency)("getEventSery", "GET", async () => {
      let _v0 = await fetch(`${_v0}/event_series/${_v2}?${(0, _v68.searchQueryString)(_v3)}&fields=${_v1.map(_v68.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v68.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v68.deepCamelCase)(_v1);
    });
  }
  let _v70 = ["id", "name", "description", "link", "status", "landingPageConfig", "landingPageConfig.theme", "landingPageConfig.startDate", "landingPageConfig.endDate", "landingPageConfig.timeZone", "landingPageConfig.logo", "landingPageConfig.logo.type", "landingPageConfig.logo.uri", "landingPageConfig.logo.url", "landingPageConfig.contentConfig", "landingPageConfig.navConfig", "landingPageConfig.faqConfig", "pictures", "pictures.sizes", "pictures.sizes.link", "pictures.sizes.width", "pictures.baseLink", "events.uri", "events.title", "events.link", "events.description", "events.nextOccurrenceTime", "events.startTime", "events.isLive", "events.pictures", "events.pictures.sizes", "events.pictures.sizes.link", "events.pictures.sizes.width", "events.speakers", "events.speakers.name", "events.speakers.avatar"],
    _v71 = [..._v70, "events.recordings", "events.recordings.uri", "events.recordings.link", "events.recordings.title", "events.recordings.duration", "events.recordings.streamedOn", "events.recordings.pictures", "events.recordings.pictures.sizes", "events.recordings.pictures.sizes.link", "events.recordings.pictures.sizes.width"],
    _v72 = async ({
      baseUrl: _v0,
      headers: _v1,
      seriesId: _v2,
      password: _v3,
      credentials: _v4,
      signal: _v5
    }) => {
      let _v6 = {
          baseUrl: _v0,
          headers: _v1,
          credentials: _v4,
          signal: _v5,
          where: {
            eventSeriesId: _v2
          },
          ...(_v3 ? {
            query: {
              password: _v3
            }
          } : {})
        },
        _v7 = await _v69({
          ..._v6,
          select: _v70
        });
      if (!_v7.landingPageConfig?.contentConfig?.includes("on-demand")) return _v7;
      try {
        return await _v69({
          ..._v6,
          select: _v71
        });
      } catch {
        return _v7;
      }
    },
    _v73 = async () => {
      let _v0 = await fetch("/_next/jwt", {
        headers: {
          "X-Requested-With": "XMLHttpRequest"
        }
      });
      if (!_v0.ok) throw Error("Unable to obtain an API token");
      let {
        token: _v1
      } = await _v0.json();
      return _v1;
    },
    _v74 = ({
      seriesId: _v0,
      baseUrl: _v1,
      onUnlock: _v2
    }) => {
      let [_v3, _v4] = (0, _v3.useState)(""),
        [_v5, _v6] = (0, _v3.useState)(null),
        [_v7, _v8] = (0, _v3.useState)(!1),
        _v9 = async _v0 => {
          if (_v0.preventDefault(), _v3.trim() && !_v7) {
            _v8(!0), _v6(null);
            try {
              let _v0 = await _v73(),
                _v1 = await _v72({
                  baseUrl: _v1,
                  seriesId: _v0,
                  password: _v3,
                  headers: {
                    Authorization: `jwt ${_v0}`
                  },
                  credentials: "include"
                });
              _v2(_v1);
            } catch (_v0) {
              _v65(_v0)?.status === 403 ? _v6((0, _v15.translate)({
                singular: "Sorry, that password was incorrect. Please try again.",
                dictionary: {
                  es: {
                    singular: "Lo sentimos, pero esta contraseña es incorrecta. Inténtalo de nuevo."
                  },
                  "de-DE": {
                    singular: "Leider ist das Kennwort falsch. Bitte noch einmal versuchen."
                  },
                  "fr-FR": {
                    singular: "Désolé, ce mot de passe est incorrect. Veuillez réessayer."
                  },
                  "ja-JP": {
                    singular: "パスワードが間違っています。再度お試しください。"
                  },
                  "ko-KR": {
                    singular: "죄송합니다, 잘못된 비밀번호입니다. 올바른 비밀번호로 다시 시도해주세요."
                  },
                  "pt-BR": {
                    singular: "Desculpe, mas a senha estava incorreta. Tente de novo."
                  },
                  "zh-CN": {
                    singular: "抱歉，密码不正确。请重试。"
                  }
                }
              })) : _v6((0, _v15.translate)({
                singular: "Something went wrong. Please try again.",
                dictionary: {
                  es: {
                    singular: "Algo salió mal. Inténtalo de nuevo."
                  },
                  "de-DE": {
                    singular: "Hier ist etwas schiefgelaufen. Bitte nochmal versuchen"
                  },
                  "fr-FR": {
                    singular: "Une erreur s'est produite. Veuillez essayer à nouveau."
                  },
                  "ja-JP": {
                    singular: "エラーが発生しました。 再度お試しください。"
                  },
                  "ko-KR": {
                    singular: "문제가 발생했습니다. 다시 시도해주세요."
                  },
                  "pt-BR": {
                    singular: "Alguma coisa deu errado. Por favor, tente novamente."
                  },
                  "zh-CN": {
                    singular: "出错了。请重试。"
                  }
                }
              })), _v8(!1);
            }
          }
        };
      return (0, _v1.jsx)(_v33.LightMode, {
        children: (0, _v1.jsx)(_v13.Flex, {
          align: "center",
          backgroundColor: "background",
          justify: "center",
          minHeight: "100vh",
          p: "md",
          width: "100%",
          children: (0, _v1.jsx)("form", {
            onSubmit: _v9,
            style: {
              maxWidth: (0, _v16.rem)(420),
              width: "100%"
            },
            children: (0, _v1.jsxs)(_v13.Flex, {
              backgroundColor: "fill-component",
              borderRadius: "lg",
              direction: "column",
              gap: "lg",
              p: (0, _v16.rem)(32),
              width: "100%",
              children: [(0, _v1.jsxs)(_v13.Flex, {
                align: "center",
                gap: "sm",
                children: [(0, _v1.jsx)(_v64.Lock, {}), (0, _v1.jsx)(_v14.Text, {
                  color: "text-primary",
                  variant: "heading-md",
                  children: (0, _v15.translate)({
                    singular: "This event series is password protected",
                    dictionary: {
                      es: {
                        singular: "Esta serie de eventos está protegida por contraseña"
                      },
                      "de-DE": {
                        singular: "Diese Veranstaltungsreihe ist passwortgeschützt"
                      },
                      "fr-FR": {
                        singular: "Cette série d'événements est protégée par un mot de passe"
                      },
                      "ja-JP": {
                        singular: "このイベントシリーズはパスワードで保護されています"
                      },
                      "ko-KR": {
                        singular: "이 이벤트 시리즈는 비밀번호로 보호되어 있습니다."
                      },
                      "pt-BR": {
                        singular: "Esta série de eventos está protegida por senha"
                      },
                      "zh-CN": {
                        singular: "此活动系列受密码保护"
                      }
                    }
                  })
                })]
              }), (0, _v1.jsx)(_v14.Text, {
                color: "text-secondary",
                variant: "body-md",
                children: (0, _v15.translate)({
                  singular: "Enter the password to view the landing page.",
                  dictionary: {
                    es: {
                      singular: "Introduzca la contraseña para ver la página de destino."
                    },
                    "de-DE": {
                      singular: "Geben Sie das Passwort ein, um die Landingpage anzuzeigen."
                    },
                    "fr-FR": {
                      singular: "Saisissez le mot de passe pour afficher la page de destination."
                    },
                    "ja-JP": {
                      singular: "ランディングページを表示するにはパスワードを入力してください。"
                    },
                    "ko-KR": {
                      singular: "랜딩 페이지를 보려면 비밀번호를 입력하세요."
                    },
                    "pt-BR": {
                      singular: "Digite a senha para visualizar a página de destino."
                    },
                    "zh-CN": {
                      singular: "请输入密码以查看着陆页。"
                    }
                  }
                })
              }), (0, _v1.jsxs)(_v61.FormControl, {
                isInvalid: !!_v5,
                children: [(0, _v1.jsx)(_v62.FormLabel, {
                  children: (0, _v15.translate)({
                    singular: "Password",
                    dictionary: {
                      es: {
                        singular: "Contraseña"
                      },
                      "de-DE": {
                        singular: "Kennwort"
                      },
                      "fr-FR": {
                        singular: "Mot de passe "
                      },
                      "ja-JP": {
                        singular: "パスワード"
                      },
                      "ko-KR": {
                        singular: "비밀번호"
                      },
                      "pt-BR": {
                        singular: "Senha"
                      },
                      "zh-CN": {
                        singular: "密码"
                      }
                    }
                  })
                }), (0, _v1.jsx)(_v63.Input, {
                  autoComplete: "current-password",
                  autoFocus: !0,
                  onChange: _v0 => {
                    _v4(_v0.target.value), _v5 && _v6(null);
                  },
                  placeholder: (0, _v15.translate)({
                    singular: "Enter a password",
                    dictionary: {
                      es: {
                        singular: "Introduzca una contraseña"
                      },
                      "de-DE": {
                        singular: "Passwort eingeben"
                      },
                      "fr-FR": {
                        singular: "Saisissez un mot de passe"
                      },
                      "ja-JP": {
                        singular: "パスワードを入力してください"
                      },
                      "ko-KR": {
                        singular: "비밀번호를 입력하세요."
                      },
                      "pt-BR": {
                        singular: "Digite uma senha"
                      },
                      "zh-CN": {
                        singular: "请输入密码"
                      }
                    }
                  }),
                  type: "password",
                  value: _v3
                }), _v5 ? (0, _v1.jsx)(_v14.Text, {
                  color: "text-error",
                  mt: "xs",
                  variant: "body-sm",
                  children: _v5
                }) : null]
              }), (0, _v1.jsx)(_v12.Button, {
                isDisabled: !_v3.trim(),
                isLoading: _v7,
                type: "submit",
                variant: "primary",
                children: (0, _v15.translate)({
                  singular: "Continue",
                  dictionary: {
                    es: {
                      singular: "Continuar"
                    },
                    "de-DE": {
                      singular: "Weiter"
                    },
                    "fr-FR": {
                      singular: "Continuer"
                    },
                    "ja-JP": {
                      singular: "次へ"
                    },
                    "ko-KR": {
                      singular: "계속"
                    },
                    "pt-BR": {
                      singular: "Continuar"
                    },
                    "zh-CN": {
                      singular: "继续"
                    }
                  }
                })
              })]
            })
          })
        })
      });
    },
    _v75 = ({
      series: _v0
    }) => {
      let {
          upcoming: _v1
        } = _v27(_v0.events),
        _v2 = _v7(_v0),
        _v3 = (0, _v15.translate)({
          singular: "Back to overview",
          dictionary: {
            es: {
              singular: "Volver a la visión general"
            },
            "de-DE": {
              singular: "Zurück zur Übersicht"
            },
            "fr-FR": {
              singular: "Retour à l'aperçu"
            },
            "ja-JP": {
              singular: "概要に戻る"
            },
            "ko-KR": {
              singular: "개요로 돌아가기"
            },
            "pt-BR": {
              singular: "Voltar à visão geral"
            },
            "zh-CN": {
              singular: "返回概览"
            }
          }
        });
      return (0, _v1.jsxs)(_v38, {
        series: _v0,
        children: [(0, _v1.jsxs)(_v13.Flex, {
          align: "flex-start",
          direction: "column",
          gap: "lg",
          width: "100%",
          children: [(0, _v1.jsx)(_v12.Button, {
            as: _v10.default,
            href: _v2,
            size: "sm",
            variant: "tertiary",
            children: _v3
          }), (0, _v1.jsx)(_v13.Flex, {
            align: "center",
            pb: "md",
            pl: "xs",
            pr: "md",
            pt: "lg",
            width: "100%",
            children: (0, _v1.jsx)(_v14.Text, {
              color: "text-primary",
              variant: "heading-2xl",
              children: (0, _v15.translate)({
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
            })
          }), _v1.length > 0 ? (0, _v1.jsx)(_v11.Box, {
            pb: "md",
            width: "100%",
            children: (0, _v1.jsx)(_v19, {
              children: _v1.map(_v0 => (0, _v1.jsx)(_v49, {
                event: _v0
              }, _v0.uri))
            })
          }) : (0, _v1.jsx)(_v17, {})]
        }), (0, _v1.jsx)(_v13.Flex, {
          justify: "center",
          width: "100%",
          children: (0, _v1.jsx)(_v12.Button, {
            as: _v10.default,
            href: _v2,
            size: "lg",
            variant: "secondary",
            children: _v3
          })
        })]
      });
    };
  var _v76 = _v0.i(0),
    _v77 = _v0.i(0),
    _v78 = _v0.i(0);
  (0, _v4.withPageSetup)(async _v0 => {
    let _v1 = _v0.params?.params,
      _v2 = Array.isArray(_v1) ? _v1 : _v1 ? [_v1] : [],
      _v3 = Number.parseInt(_v2[0] ?? "", 10);
    if (!Number.isFinite(_v3)) return {
      notFound: !0
    };
    let _v4 = _v2[_v2.length - 1],
      _v5 = _v2.length >= 3 && _v4 === _v5 ? "upcoming" : _v2.length >= 3 && _v4 === _v6 ? "on-demand" : "landing",
      _v6 = _v0.req.headers.cookie,
      _v7 = _v6 ? {
        ..._v0.headers,
        cookie: _v6
      } : _v0.headers;
    try {
      return {
        props: {
          series: await _v72({
            seriesId: _v3,
            headers: _v7,
            baseUrl: _v0.baseUrl
          }),
          seriesId: _v3,
          view: _v5,
          baseUrl: _v0.baseUrl,
          hasThemeSupport: !0
        }
      };
    } catch (_v0) {
      if (await _v66(_v0)) return {
        props: {
          series: null,
          seriesId: _v3,
          view: _v5,
          baseUrl: _v0.baseUrl,
          hasThemeSupport: !0
        }
      };
      return {
        notFound: !0
      };
    }
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, ({
    series: _v0,
    seriesId: _v1,
    view: _v2,
    baseUrl: _v3
  }) => {
    let [_v4, _v5] = (0, _v3.useState)(_v0),
      _v6 = (0, _v78.useViewer)(),
      {
        trackEventSeriesLandingPageDisplayed: _v7
      } = (0, _v76.useEventSeriesTracking)(),
      _v8 = (0, _v3.useRef)(null);
    if ((0, _v3.useEffect)(() => {
      if (!_v4 || !_v6) return;
      let _v0 = `${_v1}:${_v2}`;
      _v8.current !== _v0 && (_v8.current = _v0, _v7({
        eventSeriesId: String(_v1),
        landingPage: (0, _v76.deriveEventSeriesLandingPage)(_v2),
        viewerAuthStatus: (0, _v77.deriveViewerAuthStatus)(_v6)
      }));
    }, [_v4, _v1, _v2, _v6, _v7]), !_v4) return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v2.default, {
        children: (0, _v1.jsx)("title", {
          children: "Event series"
        })
      }), (0, _v1.jsx)(_v74, {
        baseUrl: _v3,
        onUnlock: _v5,
        seriesId: _v1
      })]
    });
    let _v9 = _v4.name?.trim() || "Event series",
      _v10 = "upcoming" === _v2 ? "Upcoming events" : "on-demand" === _v2 ? "On demand" : null,
      _v11 = _v10 ? `${_v10} \xb7 ${_v9}` : _v9,
      _v12 = (_v4.description ?? "").replace(/\s+/g, " ").trim().slice(0, 200),
      _v13 = null == _v4.link ? null : "upcoming" === _v2 ? `${_v4.link}/${_v5}` : "on-demand" === _v2 ? `${_v4.link}/${_v6}` : _v4.link;
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v2.default, {
        children: [(0, _v1.jsx)("title", {
          children: _v11
        }), _v12 ? (0, _v1.jsx)("meta", {
          content: _v12,
          name: "description"
        }) : null, (0, _v1.jsx)("meta", {
          content: _v11,
          property: "og:title"
        }), _v12 ? (0, _v1.jsx)("meta", {
          content: _v12,
          property: "og:description"
        }) : null, (0, _v1.jsx)("meta", {
          content: "website",
          property: "og:type"
        }), _v13 ? (0, _v1.jsx)("meta", {
          content: _v13,
          property: "og:url"
        }) : null, _v13 ? (0, _v1.jsx)("link", {
          href: _v13,
          rel: "canonical"
        }) : null]
      }), "upcoming" === _v2 ? (0, _v1.jsx)(_v75, {
        series: _v4
      }) : "on-demand" === _v2 ? (0, _v1.jsx)(_v39, {
        series: _v4
      }) : (0, _v1.jsx)(_v60, {
        series: _v4
      })]
    });
  }], 0);
}