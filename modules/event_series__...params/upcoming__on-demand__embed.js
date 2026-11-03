{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = "upcoming",
    _v8 = "on-demand",
    _v9 = "embed",
    _v10 = _v0 => {
      let _v1,
        _v2 = _v0.link ?? "";
      try {
        _v1 = new URL(_v2).pathname;
      } catch {
        return _v2;
      }
      let [, _v3] = _v1.split("/"),
        [, _v4] = window.location.pathname.split("/");
      return _v4 === _v3 ? _v1 : "/";
    },
    _v11 = _v0 => `/event_series/${_v0}/${_v9}`;
  var _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0);
  let _v20 = ({
    title: _v0,
    message: _v1
  }) => (0, _v2.jsxs)(_v15.Flex, {
    align: "center",
    backgroundColor: "fill-component",
    borderRadius: "lg",
    direction: "column",
    gap: "sm",
    justify: "center",
    minHeight: (0, _v19.rem)(200),
    padding: "xl",
    width: "100%",
    children: [(0, _v2.jsx)(_v18.Text, {
      color: "text-primary",
      variant: "heading-sm",
      children: _v0
    }), (0, _v2.jsx)(_v18.Text, {
      color: "text-secondary",
      textAlign: "center",
      variant: "body-md",
      children: _v1
    })]
  });
  var _v21 = _v0.i(0);
  let _v22 = ({
    title: _v0,
    landingPath: _v1
  }) => {
    let _v2 = (0, _v17.translate)({
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
    return (0, _v2.jsxs)(_v2.Fragment, {
      children: [(0, _v2.jsx)(_v14.Button, {
        as: _v12.default,
        display: {
          base: "none",
          md: "inline-flex"
        },
        href: _v1,
        size: "sm",
        variant: "tertiary",
        children: _v2
      }), (0, _v2.jsxs)(_v15.Flex, {
        align: "center",
        pb: {
          base: "sm",
          md: "md"
        },
        pl: {
          base: "sm",
          md: "xs"
        },
        pr: "md",
        pt: "lg",
        width: "100%",
        children: [(0, _v2.jsx)(_v14.Button, {
          "aria-label": _v2,
          as: _v12.default,
          display: {
            base: "inline-flex",
            md: "none"
          },
          gap: "sm",
          href: _v1,
          leftIcon: (0, _v2.jsx)(_v21.ChevronLeft, {}),
          px: "sm",
          variant: "tertiary",
          children: (0, _v2.jsx)(_v18.Text, {
            as: "span",
            color: "text-primary",
            variant: "heading-lg",
            children: _v0
          })
        }), (0, _v2.jsx)(_v18.Text, {
          color: "text-primary",
          display: {
            base: "none",
            md: "block"
          },
          variant: "heading-2xl",
          children: _v0
        })]
      })]
    });
  };
  var _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0);
  let _v27 = _v0 => {
      let _v1 = _v0.pictures?.sizes;
      if (_v1 && 0 !== _v1.length) return _v1[_v1.length - 1]?.link ?? void 0;
    },
    _v28 = _v0 => _v0.title?.trim() || (0, _v17.translate)({
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
    _v29 = _v0 => {
      if (!_v0) return null;
      let _v1 = new Date(_v0).getTime();
      return Number.isNaN(_v1) ? null : _v1;
    },
    _v30 = (_v0, _v1) => {
      let _v2 = _v29(_v1 ?? _v0.nextOccurrenceTime ?? _v0.startTime);
      if (null === _v2) return null;
      let _v3 = new Date(_v2),
        _v4 = new Intl.DateTimeFormat("en", {
          month: "short",
          day: "numeric",
          year: "numeric"
        }).format(_v3),
        _v5 = new Intl.DateTimeFormat("en", {
          hour: "numeric",
          minute: "2-digit"
        }).format(_v3);
      return `${_v4} \xb7 ${_v5}`;
    },
    _v31 = _v0 => {
      let _v1 = Date.now(),
        _v2 = [];
      return _v0.forEach(_v0 => {
        let _v1 = (_v0.upcomingOccurrences ?? []).filter(_v0 => {
          let _v1 = _v29(_v0);
          return null !== _v1 && _v1 >= _v1;
        });
        (_v1.length > 0 ? _v1 : [_v0.nextOccurrenceTime ?? null]).forEach((_v0, _v1) => {
          _v2.push({
            key: `${_v0.uri}#${_v0 ?? "live"}`,
            event: _v0,
            occurrenceTime: _v0,
            isLive: 0 === _v1 && _v0.isLive
          });
        });
      }), _v2.sort((_v0, _v1) => _v0.isLive !== _v1.isLive ? _v0.isLive ? -1 : 1 : (_v29(_v0.occurrenceTime) ?? 0) - (_v29(_v1.occurrenceTime) ?? 0)), _v2;
    },
    _v32 = _v0 => {
      let _v1;
      return {
        ...{
          title: _v28(_v1 = _v0.event),
          description: _v1.description,
          date: _v30(_v1),
          isLive: _v1.isLive,
          link: _v1.link,
          thumbnailSrc: _v27(_v1),
          speakers: (_v1.speakers ?? []).filter(_v0 => !!_v0?.name)
        },
        date: _v30(_v0.event, _v0.occurrenceTime),
        isLive: _v0.isLive
      };
    },
    _v33 = _v0 => {
      let _v1 = Date.now(),
        _v2 = [],
        _v3 = [];
      return _v0.forEach(_v0 => {
        let _v1 = _v29(_v0.nextOccurrenceTime);
        _v0.isLive || null !== _v1 && _v1 >= _v1 ? _v2.push(_v0) : _v3.push(_v0);
      }), _v2.sort((_v0, _v1) => _v0.isLive !== _v1.isLive ? _v0.isLive ? -1 : 1 : (_v29(_v0.nextOccurrenceTime) ?? 0) - (_v29(_v1.nextOccurrenceTime) ?? 0)), {
        upcoming: _v2,
        onDemand: _v3
      };
    },
    _v34 = (_v0, _v1) => {
      let _v2 = (0, _v17.getCurrentLocale)();
      if (_v1) try {
        return new Intl.DateTimeFormat(_v2, {
          ..._v0,
          timeZone: _v1
        });
      } catch {}
      return new Intl.DateTimeFormat(_v2, _v0);
    },
    _v35 = _v0 => {
      if (!_v0) return null;
      let _v1 = new Date(`${_v0.slice(0, 10)}T00:00:00`);
      return Number.isNaN(_v1.getTime()) ? null : _v1;
    },
    _v36 = _v0 => new Intl.DateTimeFormat("en", {
      month: "short",
      day: "numeric",
      year: "numeric"
    }).format(_v0),
    _v37 = ({
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
      return (0, _v2.jsxs)(_v15.Flex, {
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
        children: [(0, _v2.jsx)(_v24.EventThumbnail, {
          borderRadius: "md",
          src: (_v0 => {
            let _v1 = _v0.pictures?.sizes;
            if (_v1 && 0 !== _v1.length) return _v1[_v1.length - 1]?.link ?? void 0;
          })(_v0),
          children: _v2 ? (0, _v2.jsx)(_v25.DurationBadge, {
            label: _v2
          }) : null
        }), (0, _v2.jsxs)(_v15.Flex, {
          align: "flex-start",
          gap: "sm",
          pl: (0, _v19.rem)(8),
          width: "100%",
          children: [(0, _v2.jsxs)(_v15.Flex, {
            direction: "column",
            flex: "1 0 0",
            gap: "xs",
            minWidth: 0,
            children: [(0, _v2.jsx)(_v18.Text, {
              color: "text-primary",
              noOfLines: 1,
              variant: "heading-sm",
              children: _v0.name?.trim() || (0, _v17.translate)({
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
            }), _v1 ? (0, _v2.jsx)(_v18.Text, {
              color: "text-secondary",
              noOfLines: 1,
              variant: "body-sm",
              children: _v1
            }) : null]
          }), (0, _v2.jsx)(_v15.Flex, {
            align: "center",
            "aria-hidden": !0,
            color: "text-primary",
            flexShrink: 0,
            height: (0, _v19.rem)(32),
            justify: "center",
            opacity: 0,
            px: (0, _v19.rem)(6),
            transition: "opacity 0.15s ease",
            _groupHover: {
              opacity: 1
            },
            children: (0, _v2.jsx)(_v23.ArrowRight, {
              boxSize: (0, _v19.rem)(20)
            })
          })]
        })]
      });
    };
  var _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0);
  let _v41 = (0, _v4.createContext)(null),
    _v42 = ({
      landingPath: _v0,
      children: _v1
    }) => (0, _v2.jsx)(_v41.Provider, {
      value: _v0,
      children: _v1
    }),
    _v43 = (_v0, _v1) => `${_v0.replace(/\/+$/, "")}/${_v1}`,
    _v44 = _v0 => {
      let _v1 = (0, _v4.useContext)(_v41) ?? _v10(_v0);
      return {
        landingPath: _v1,
        upcomingPath: _v43(_v1, _v7),
        onDemandPath: _v43(_v1, _v8)
      };
    },
    _v45 = ({
      series: _v0,
      children: _v1
    }) => {
      let {
          upcomingPath: _v2,
          onDemandPath: _v3
        } = _v44(_v0),
        _v4 = _v0.name?.trim() ?? "",
        _v5 = {
          type: _v0.landingPageConfig?.logo?.type ?? "vimeo",
          url: _v0.landingPageConfig?.logo?.url ?? null
        },
        _v6 = _v0.landingPageConfig?.theme === "dark" ? _v38.DarkMode : _v38.LightMode,
        _v7 = _v0.landingPageConfig?.navConfig ?? ["upcoming", "on-demand"],
        _v8 = [{
          id: "upcoming",
          label: (0, _v17.translate)({
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
          href: _v2
        }, {
          id: "on-demand",
          label: (0, _v17.translate)({
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
          href: _v3
        }].filter(_v0 => _v7.includes(_v0.id));
      return (0, _v2.jsx)(_v6, {
        children: (0, _v2.jsxs)(_v15.Flex, {
          backgroundColor: "background",
          direction: "column",
          align: "center",
          minHeight: "100vh",
          width: "100%",
          children: [(0, _v2.jsx)(_v39.Navbar, {
            logo: _v5,
            menuItems: _v8,
            name: _v4
          }), (0, _v2.jsx)(_v40.PageContainer, {
            children: _v1
          })]
        })
      });
    },
    _v46 = ({
      series: _v0,
      recordings: _v1
    }) => {
      let {
          landingPath: _v2
        } = _v44(_v0),
        _v3 = (0, _v17.translate)({
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
      return (0, _v2.jsxs)(_v45, {
        series: _v0,
        children: [(0, _v2.jsxs)(_v15.Flex, {
          align: "flex-start",
          direction: "column",
          gap: "lg",
          width: "100%",
          children: [(0, _v2.jsx)(_v22, {
            landingPath: _v2,
            title: (0, _v17.translate)({
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
          }), _v1.length > 0 ? (0, _v2.jsx)(_v13.Box, {
            pb: "md",
            width: "100%",
            children: (0, _v2.jsx)(_v16.EventsGrid, {
              children: _v1.map(_v0 => (0, _v2.jsx)(_v37, {
                recording: _v0
              }, _v0.uri))
            })
          }) : (0, _v2.jsx)(_v20, {
            title: (0, _v17.translate)({
              singular: "No on-demand videos available",
              dictionary: {
                es: {
                  singular: "No hay vídeos bajo demanda disponibles"
                },
                "de-DE": {
                  singular: "Keine Videos auf Abruf verfügbar"
                },
                "fr-FR": {
                  singular: "Aucune vidéo à la demande disponible"
                },
                "ja-JP": {
                  singular: "利用可能なオンデマンド動画はありません"
                },
                "ko-KR": {
                  singular: "사용 가능한 온디맨드 비디오가 없습니다"
                },
                "pt-BR": {
                  singular: "Nenhum vídeo sob demanda disponível"
                },
                "zh-CN": {
                  singular: "暂无可用的点播视频"
                }
              }
            }),
            message: (0, _v17.translate)({
              singular: "No past stream recordings yet",
              dictionary: {
                es: {
                  singular: "Aún no hay grabaciones de transmisiones pasadas"
                },
                "de-DE": {
                  singular: "Noch keine Aufzeichnungen vergangener Streams"
                },
                "fr-FR": {
                  singular: "Pas encore d'enregistrements de streams"
                },
                "ja-JP": {
                  singular: "過去の配信録画はまだありません"
                },
                "ko-KR": {
                  singular: "지난 스트림 녹화본이 아직 없습니다"
                },
                "pt-BR": {
                  singular: "Ainda não há gravações de transmissões anteriores"
                },
                "zh-CN": {
                  singular: "尚无往期直播录制"
                }
              }
            })
          })]
        }), _v1.length > 8 && (0, _v2.jsx)(_v15.Flex, {
          justify: "center",
          width: "100%",
          children: (0, _v2.jsx)(_v14.Button, {
            as: _v12.default,
            href: _v2,
            size: "lg",
            variant: "secondary",
            children: _v3
          })
        })]
      });
    };
  var _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0);
  let _v55 = ["banner", "upcoming"],
    _v56 = ({
      series: _v0,
      recordings: _v1,
      recordingsTotal: _v2
    }) => {
      let _v3 = (0, _v54.useViewer)(),
        {
          upcomingPath: _v4,
          onDemandPath: _v5
        } = _v44(_v0),
        _v6 = _v0.description?.trim() ?? "",
        {
          upcoming: _v7
        } = _v33(_v0.events),
        _v8 = _v31(_v7),
        _v9 = _v8.slice(0, 5),
        _v10 = _v8.length > _v9.length,
        _v11 = ((_v0, _v1) => {
          let _v2 = _v35(_v0),
            _v3 = _v35(_v1);
          if (!_v2 && !_v3) return null;
          if (_v2 && !_v3) return _v36(_v2);
          if (!_v2 && _v3) return _v36(_v3);
          if (_v2 && _v3) {
            if (_v2.getFullYear() === _v3.getFullYear()) return `${new Intl.DateTimeFormat("en", {
              month: "short",
              day: "numeric"
            }).format(_v2)} — ${_v36(_v3)}`;
            return `${_v36(_v2)} — ${_v36(_v3)}`;
          }
          return null;
        })(_v0.landingPageConfig?.startDate, _v0.landingPageConfig?.endDate),
        _v12 = (_v0 => {
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
        _v13 = (_v0 => {
          let _v1 = _v0?.sizes;
          if (!_v1 || 0 === _v1.length) return _v0?.baseLink ?? null;
          let _v2 = [..._v1].sort((_v0, _v1) => (_v1.width ?? 0) - (_v0.width ?? 0));
          return _v2[0]?.link ?? _v0?.baseLink ?? null;
        })(_v0.pictures),
        _v14 = _v0.landingPageConfig?.contentConfig ?? _v55,
        _v15 = _v0.landingPageConfig?.timeZone,
        _v16 = _v0.landingPageConfig?.faqConfig ?? [],
        _v17 = _v14.includes("on-demand"),
        _v18 = _v2 > _v1.length,
        _v19 = _v14.includes("upcoming") || _v17 || _v14.includes("agenda"),
        _v20 = (_v14.includes("upcoming") || _v14.includes("agenda")) && _v7.length > 0 || _v17 && _v1.length > 0,
        _v21 = _v14.map(_v0 => {
          if ("banner" === _v0) return (0, _v2.jsx)(_v52.Hero, {
            dateRange: _v11,
            description: _v6,
            heroImageSrc: _v13,
            name: _v0.name?.trim() ?? "",
            timeZoneLabel: _v12
          }, _v0);
          if ("upcoming" === _v0 && _v9.length > 0) return (0, _v2.jsx)(_v50.EventsSection, {
            action: _v10 ? (0, _v2.jsx)(_v14.Button, {
              as: _v12.default,
              href: _v4,
              size: "lg",
              variant: "tertiary",
              children: (0, _v17.translate)({
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
            pb: _v48.EVENTS_SECTION_STYLES.BOTTOM_PADDING_16,
            px: {
              base: _v48.EVENTS_SECTION_STYLES.MOBILE_UPCOMING_X_PADDING_0,
              sm: _v48.EVENTS_SECTION_STYLES.DESKTOP_UPCOMING_X_PADDING_0
            },
            sx: _v9.length > 0 ? {
              "& > * > :first-child": {
                marginLeft: {
                  base: (0, _v19.rem)(8),
                  sm: 0
                }
              }
            } : void 0,
            title: (0, _v17.translate)({
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
            children: _v9.map(_v0 => (0, _v2.jsx)(_v49.EventCard, {
              ..._v32(_v0)
            }, _v0.key))
          }, _v0);
          if ("agenda" === _v0 && _v7.length > 0) {
            let _v0, _v1, _v2;
            return (0, _v2.jsx)(_v47.AgendaSection, {
              groups: (_v0 = [], _v1 = new Map(), _v2 = new Date().toISOString(), _v8.forEach(_v0 => {
                let {
                    event: _v1
                  } = _v0,
                  _v2 = _v0.occurrenceTime ?? _v1.startTime,
                  _v3 = _v2 ? _v29(_v2) : null,
                  _v4 = _v0.isLive && (null === _v3 || _v3 < Date.now()),
                  _v5 = _v4 ? _v2 : null !== _v3 ? _v2 : null;
                if (null === _v5) return;
                let _v6 = _v34({
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit"
                  }, _v15).format(new Date(_v5)),
                  _v7 = _v1.get(_v6);
                if (!_v7) {
                  let _v0 = (0, _v26.formatAgendaDayLabel)(_v5, _v15);
                  _v7 = {
                    key: _v6,
                    label: _v0?.label ?? "",
                    ordinal: _v0?.ordinal ?? null,
                    events: []
                  }, _v1.set(_v6, _v7), _v0.push(_v7);
                }
                _v7.events.push({
                  key: _v0.key,
                  title: _v28(_v1),
                  time: _v4 ? null : ((_v0, _v1) => {
                    let _v2 = _v29(_v0);
                    if (null === _v2) return null;
                    let _v3 = new Date(_v2),
                      _v4 = _v34({
                        hour: "numeric",
                        minute: "2-digit"
                      }, _v1).format(_v3),
                      _v5 = _v1 ? ((_v0, _v1) => {
                        try {
                          return new Intl.DateTimeFormat((0, _v17.getCurrentLocale)(), {
                            timeZone: _v1,
                            timeZoneName: "short"
                          }).formatToParts(_v0).find(_v0 => "timeZoneName" === _v0.type)?.value ?? null;
                        } catch {
                          return null;
                        }
                      })(_v3, _v1) : null;
                    return _v5 ? `${_v4} ${_v5}` : _v4;
                  })(_v2, _v15),
                  description: _v1.description,
                  thumbnailSrc: _v27(_v1),
                  isLive: _v0.isLive,
                  link: _v1.link
                });
              }), _v0)
            }, _v0);
          }
          return "faq" === _v0 && _v16.length > 0 ? (0, _v2.jsx)(_v51.FaqSection, {
            items: _v16
          }, _v0) : "on-demand" === _v0 && _v1.length > 0 ? (0, _v2.jsx)(_v50.EventsSection, {
            action: _v18 ? (0, _v2.jsx)(_v14.Button, {
              as: _v12.default,
              href: _v5,
              size: "lg",
              variant: "tertiary",
              children: (0, _v17.translate)({
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
            pb: _v48.EVENTS_SECTION_STYLES.BOTTOM_PADDING_16,
            px: _v48.EVENTS_SECTION_STYLES.ON_DEMAND_X_PADDING_0,
            title: (0, _v17.translate)({
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
            children: _v1.map(_v0 => (0, _v2.jsx)(_v37, {
              recording: _v0
            }, _v0.uri))
          }, _v0) : null;
        }).filter(Boolean);
      return (0, _v2.jsxs)(_v45, {
        series: _v0,
        children: [_v21, _v19 && !_v20 ? (0, _v2.jsx)(_v20, {
          title: (0, _v17.translate)({
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
          }),
          message: (0, _v17.translate)({
            singular: "Check back soon for upcoming events and on-demand videos.",
            dictionary: {
              es: {
                singular: "Vuelve pronto para ver los próximos eventos y los vídeos bajo demanda."
              },
              "de-DE": {
                singular: "Schauen Sie bald wieder vorbei für bevorstehende Veranstaltungen und Videos auf Abruf."
              },
              "fr-FR": {
                singular: "Revenez bientôt pour les événements à venir et les vidéos à la demande."
              },
              "ja-JP": {
                singular: "近日中に開催予定のイベントとオンデマンド動画をチェックしてください。"
              },
              "ko-KR": {
                singular: "예정된 이벤트 및 온디맨드 비디오를 확인하려면 나중에 다시 방문해 주세요."
              },
              "pt-BR": {
                singular: "Volte em breve para eventos futuros e vídeos sob demanda."
              },
              "zh-CN": {
                singular: "请稍后回来查看即将举行的活动和点播视频。"
              }
            }
          })
        }) : null, _v3 ? (0, _v2.jsx)(_v15.Flex, {
          as: "footer",
          justify: "flex-end",
          width: "100%",
          children: (0, _v2.jsx)(_v53.EssentialFooterMenu, {
            contentViewingPrefs: _v3.contentViewingPrefs,
            impressumQualifies: _v3.impressumQualifies,
            locale: _v3.locale,
            locales: _v3.locales,
            localeLabels: _v3.localeLabels,
            token: _v3.xsrft
          })
        }) : null]
      });
    };
  var _v57 = _v0.i(0),
    _v58 = _v0.i(0),
    _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v61 = _v0.i(0);
  let _v62 = _v0 => "object" == typeof _v0 && null !== _v0 ? _v0 : null,
    _v63 = async _v0 => {
      let _v1,
        _v2 = _v62(_v0);
      if (_v2?.status === 404) return "not-found";
      if (_v2?.status !== 403 || !_v2.res) return "transient";
      try {
        let _v0 = await _v2.res.json();
        _v1 = _v0?.error_code;
      } catch {
        return "transient";
      }
      return 0 === _v1 ? "password-required" : "number" == typeof _v1 ? "not-found" : "transient";
    };
  var _v64 = _v0.i(0),
    _v65 = _v0.i(0);
  async function _v66({
    baseUrl: _v0,
    select: _v1,
    where: {
      eventSeriesId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v64.measureLatency)("getEventSery", "GET", async () => {
      let _v0 = await fetch(`${_v0}/event_series/${_v2}?${(0, _v65.searchQueryString)(_v3)}&fields=${_v1.map(_v65.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v65.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v65.deepCamelCase)(_v1);
    });
  }
  let _v67 = ["id", "name", "description", "link", "status", "privacy", "landingPageConfig", "landingPageConfig.theme", "landingPageConfig.startDate", "landingPageConfig.endDate", "landingPageConfig.timeZone", "landingPageConfig.logo", "landingPageConfig.logo.type", "landingPageConfig.logo.uri", "landingPageConfig.logo.url", "landingPageConfig.contentConfig", "landingPageConfig.navConfig", "landingPageConfig.faqConfig", "pictures", "pictures.sizes", "pictures.sizes.link", "pictures.sizes.width", "pictures.baseLink", "pictures.uri", "events.uri", "events.title", "events.link", "events.description", "events.nextOccurrenceTime", "events.startTime", "events.upcomingOccurrences", "events.isLive", "events.pictures", "events.pictures.sizes", "events.pictures.sizes.link", "events.pictures.sizes.width", "events.speakers", "events.speakers.name", "events.speakers.avatar"],
    _v68 = async ({
      baseUrl: _v0,
      headers: _v1,
      seriesIdOrUrl: _v2,
      password: _v3,
      contentLocale: _v4,
      credentials: _v5,
      signal: _v6
    }) => _v66({
      baseUrl: _v0,
      headers: _v1,
      credentials: _v5,
      signal: _v6,
      where: {
        eventSeriesId: _v2
      },
      query: {
        password: _v3,
        contentLocale: _v4 ?? void 0
      },
      select: _v67
    });
  var _v69 = _v0.i(0);
  let _v70 = ["uri", "name", "link", "duration", "streamedOn", "pictures.sizes.link"],
    _v71 = () => ({
      recordings: [],
      total: 0
    }),
    _v72 = async ({
      baseUrl: _v0,
      headers: _v1,
      series: _v2,
      view: _v3,
      password: _v4,
      credentials: _v5,
      signal: _v6
    }) => {
      if ("upcoming" === _v3 || !_v2.landingPageConfig?.contentConfig?.includes("on-demand")) return _v71();
      try {
        let {
          data: _v0,
          total: _v1
        } = await (0, _v69.getEventSeryVideos)({
          baseUrl: _v0,
          headers: _v1,
          credentials: _v5,
          signal: _v6,
          where: {
            eventSeriesId: _v2.id
          },
          select: _v70,
          query: {
            sort: "newest",
            perPage: "on-demand" === _v3 ? 100 : 8,
            ...(void 0 === _v4 ? {} : {
              password: _v4
            })
          }
        });
        return {
          recordings: _v0,
          total: _v1
        };
      } catch {
        return _v71();
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
      seriesIdOrUrl: _v0,
      baseUrl: _v1,
      view: _v2,
      contentLocale: _v3,
      onUnlock: _v4,
      fetchSeries: _v5
    }) => {
      let [_v6, _v7] = (0, _v4.useState)(""),
        [_v8, _v9] = (0, _v4.useState)(null),
        [_v10, _v11] = (0, _v4.useState)(!1),
        _v12 = async _v0 => {
          if (_v0.preventDefault(), _v6.trim() && !_v10) {
            _v11(!0), _v9(null);
            try {
              if (_v5) {
                let _v0 = await _v5(_v6);
                _v4(_v0, {
                  recordings: [],
                  total: 0
                });
              } else {
                let _v0 = await _v73(),
                  _v1 = {
                    Authorization: `jwt ${_v0}`
                  },
                  _v2 = await _v68({
                    baseUrl: _v1,
                    seriesIdOrUrl: _v0,
                    password: _v6,
                    contentLocale: _v3,
                    headers: _v1,
                    credentials: "include"
                  }),
                  _v3 = await _v72({
                    baseUrl: _v1,
                    headers: _v1,
                    series: _v2,
                    view: _v2,
                    password: _v6,
                    credentials: "include"
                  });
                _v4(_v2, _v3);
              }
            } catch (_v0) {
              _v62(_v0)?.status === 403 ? _v9((0, _v17.translate)({
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
              })) : _v9((0, _v17.translate)({
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
              })), _v11(!1);
            }
          }
        };
      return (0, _v2.jsx)(_v38.LightMode, {
        children: (0, _v2.jsx)(_v15.Flex, {
          align: "center",
          backgroundColor: "background",
          justify: "center",
          minHeight: "100vh",
          p: "md",
          width: "100%",
          children: (0, _v2.jsx)("form", {
            onSubmit: _v12,
            style: {
              maxWidth: (0, _v19.rem)(420),
              width: "100%"
            },
            children: (0, _v2.jsxs)(_v15.Flex, {
              backgroundColor: "fill-component",
              borderRadius: "lg",
              direction: "column",
              gap: "lg",
              p: (0, _v19.rem)(32),
              width: "100%",
              children: [(0, _v2.jsxs)(_v15.Flex, {
                align: "center",
                gap: "sm",
                children: [(0, _v2.jsx)(_v61.Lock, {
                  color: "text-primary"
                }), (0, _v2.jsx)(_v18.Text, {
                  color: "text-primary",
                  variant: "heading-md",
                  children: (0, _v17.translate)({
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
              }), (0, _v2.jsx)(_v18.Text, {
                color: "text-secondary",
                variant: "body-md",
                children: (0, _v17.translate)({
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
              }), (0, _v2.jsxs)(_v57.FormControl, {
                isInvalid: !!_v8,
                children: [(0, _v2.jsx)(_v58.FormLabel, {
                  size: "sm",
                  children: (0, _v17.translate)({
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
                }), (0, _v2.jsx)(_v60.Input, {
                  autoComplete: "current-password",
                  autoFocus: !0,
                  onChange: _v0 => {
                    _v7(_v0.target.value), _v8 && _v9(null);
                  },
                  placeholder: (0, _v17.translate)({
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
                  value: _v6
                }), _v8 ? (0, _v2.jsx)(_v59.FormErrorMessage, {
                  children: _v8
                }) : null]
              }), (0, _v2.jsx)(_v14.Button, {
                isDisabled: !_v6.trim(),
                isLoading: _v10,
                type: "submit",
                variant: "primary",
                children: (0, _v17.translate)({
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
      let _v1 = _v31(_v33(_v0.events).upcoming),
        {
          landingPath: _v2
        } = _v44(_v0),
        _v3 = (0, _v17.translate)({
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
      return (0, _v2.jsxs)(_v45, {
        series: _v0,
        children: [(0, _v2.jsxs)(_v15.Flex, {
          align: "flex-start",
          direction: "column",
          gap: "lg",
          width: "100%",
          children: [(0, _v2.jsx)(_v22, {
            landingPath: _v2,
            title: (0, _v17.translate)({
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
          }), _v1.length > 0 ? (0, _v2.jsx)(_v13.Box, {
            pb: "md",
            width: "100%",
            children: (0, _v2.jsx)(_v16.EventsGrid, {
              children: _v1.map(_v0 => (0, _v2.jsx)(_v49.EventCard, {
                ..._v32(_v0)
              }, _v0.key))
            })
          }) : (0, _v2.jsx)(_v20, {
            title: (0, _v17.translate)({
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
            }),
            message: (0, _v17.translate)({
              singular: "No upcoming events",
              dictionary: {
                es: {
                  singular: "No hay eventos próximos"
                },
                "de-DE": {
                  singular: "Keine bevorstehenden Veranstaltungen"
                },
                "fr-FR": {
                  singular: "Aucun événement à venir"
                },
                "ja-JP": {
                  singular: "今後のイベントはありません"
                },
                "ko-KR": {
                  singular: "예정된 이벤트가 없습니다"
                },
                "pt-BR": {
                  singular: "Nenhum evento futuro"
                },
                "zh-CN": {
                  singular: "暂无即将举行的活动"
                }
              }
            })
          })]
        }), _v1.length > 8 && (0, _v2.jsx)(_v15.Flex, {
          justify: "center",
          width: "100%",
          children: (0, _v2.jsx)(_v14.Button, {
            as: _v12.default,
            href: _v2,
            size: "lg",
            variant: "secondary",
            children: _v3
          })
        })]
      });
    };
  var _v76 = _v0.i(0),
    _v77 = _v0.i(0);
  let _v78 = /^[A-Za-z0-9-]{1,128}$/,
    _v79 = [12],
    _v80 = [40];
  (0, _v6.withPageSetup)(async _v0 => {
    let _v1,
      _v2 = _v0.params?.params,
      _v3 = Array.isArray(_v2) ? _v2 : _v2 ? [_v2] : [],
      _v4 = _v3[0] ?? "",
      _v5 = /^\d+$/.test(_v4);
    if (!_v5 && !_v78.test(_v4)) return {
      notFound: !0
    };
    let _v6 = _v5 ? Number.parseInt(_v4, 10) : _v4,
      _v7 = _v3[1] === _v9,
      _v8 = _v3[2],
      _v9 = _v7 && _v5 && (2 === _v3.length || 3 === _v3.length && (_v8 === _v7 || _v8 === _v8));
    if (_v7 && !_v9 || _v9 && ("number" != typeof _v6 || (_v1 = _v1.default.env.ENVIRONMENT?.startsWith("ci-") ?? !1, !("production" === (0, _v5.default)() && !_v1 ? _v79 : _v80).includes(_v6)))) return {
      notFound: !0
    };
    let _v10 = _v9 ? {
      isEmbed: !0,
      isIframe: !0,
      isThemePersistent: !1,
      layoutOptions: {
        hideGlobalBanners: !0
      }
    } : {};
    _v9 && _v0.res.removeHeader("X-Frame-Options");
    let _v11 = _v3[_v3.length - 1],
      _v12 = _v9 ? 3 === _v3.length : _v5 ? _v3.length >= 3 : 2 === _v3.length,
      _v13 = _v12 && _v11 === _v7 ? "upcoming" : _v12 && _v11 === _v8 ? "on-demand" : "landing",
      _v14 = _v0.req.headers.cookie,
      _v15 = _v14 ? {
        ..._v0.headers,
        cookie: _v14
      } : _v0.headers,
      _v16 = _v0.req.headers["crossroads-language"],
      _v17 = ("string" == typeof _v16 && "" !== _v16 ? _v16 : _v0.locale) ?? null;
    try {
      let _v0 = await _v68({
        seriesIdOrUrl: _v6,
        headers: _v15,
        baseUrl: _v0.baseUrl,
        contentLocale: _v17
      });
      if (_v9 && "anybody" !== _v0.privacy) return {
        notFound: !0
      };
      let _v1 = _v10(_v0);
      if (!_v9 && _v5 && 1 === _v3.length && _v1.startsWith("/") && !_v1.startsWith("//") && _v1 !== `/event_series/${_v6}` && ("number" != typeof _v6 || _v1 !== _v11(_v6))) {
        let _v0 = _v0.resolvedUrl.split("?")[1];
        return {
          redirect: {
            destination: _v0 ? `${_v1}?${_v0}` : _v1,
            permanent: !1
          }
        };
      }
      if (!_v9 && _v5 && _v3.length >= 2) {
        let [, _v0, _v1, _v2] = _v1.split("/");
        if ("event_series" === _v0 && _v1 === String(_v6) && (_v2 ?? null) !== _v3[1]) return {
          notFound: !0
        };
      }
      let {
        recordings: _v2,
        total: _v3
      } = await _v72({
        series: _v0,
        view: _v13,
        headers: _v15,
        baseUrl: _v0.baseUrl
      });
      return {
        props: {
          series: _v0,
          recordings: _v2,
          recordingsTotal: _v3,
          seriesIdOrUrl: _v6,
          view: _v13,
          baseUrl: _v0.baseUrl,
          contentLocale: _v17,
          hasThemeSupport: !0,
          ..._v10
        }
      };
    } catch (_v0) {
      let _v1 = await _v63(_v0);
      if ("password-required" === _v1) {
        if (_v9) return {
          notFound: !0
        };
        return {
          props: {
            series: null,
            recordings: [],
            recordingsTotal: 0,
            seriesIdOrUrl: _v6,
            view: _v13,
            baseUrl: _v0.baseUrl,
            contentLocale: _v17,
            hasThemeSupport: !0,
            ..._v10
          }
        };
      }
      if ("not-found" === _v1) return {
        notFound: !0
      };
      throw _v0;
    }
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, ({
    series: _v0,
    recordings: _v1,
    recordingsTotal: _v2,
    seriesIdOrUrl: _v3,
    view: _v4,
    baseUrl: _v5,
    contentLocale: _v6,
    isEmbed: _v7 = !1
  }) => {
    let [_v8, _v9] = (0, _v4.useState)(null),
      _v10 = _v0 ? {
        series: _v0,
        recordings: _v1,
        recordingsTotal: _v2
      } : _v8,
      _v11 = (0, _v54.useViewer)(),
      {
        trackEventSeriesLandingPageDisplayed: _v12
      } = (0, _v76.useEventSeriesTracking)(),
      _v13 = (0, _v4.useRef)(null),
      _v14 = _v10?.series.id;
    (0, _v4.useEffect)(() => {
      if (null == _v14 || !_v11) return;
      let _v0 = `${_v14}:${_v4}`;
      _v13.current !== _v0 && (_v13.current = _v0, _v12({
        eventSeriesId: String(_v14),
        landingPage: (0, _v76.deriveEventSeriesLandingPage)(_v4),
        viewerAuthStatus: (0, _v77.deriveViewerAuthStatus)(_v11)
      }));
    }, [_v14, _v4, _v11, _v12]);
    let _v15 = _v7 ? (0, _v2.jsx)(_v3.default, {
      children: (0, _v2.jsx)("base", {
        target: "_blank"
      })
    }) : null;
    if (!_v10) return (0, _v2.jsxs)(_v2.Fragment, {
      children: [(0, _v2.jsx)(_v3.default, {
        children: (0, _v2.jsx)("title", {
          children: "Event series"
        })
      }), _v15, (0, _v2.jsx)(_v74, {
        baseUrl: _v5,
        contentLocale: _v6,
        onUnlock: (_v0, _v1) => _v9({
          series: _v0,
          recordings: _v1.recordings,
          recordingsTotal: _v1.total
        }),
        seriesIdOrUrl: _v3,
        view: _v4
      })]
    });
    let {
        series: _v16,
        recordings: _v17,
        recordingsTotal: _v18
      } = _v10,
      _v19 = _v16.name?.trim() || "Event series",
      _v20 = "upcoming" === _v4 ? "Upcoming events" : "on-demand" === _v4 ? "On demand" : null,
      _v21 = _v20 ? `${_v20} \xb7 ${_v19}` : _v19,
      _v22 = (_v16.description ?? "").replace(/\s+/g, " ").trim().slice(0, 200),
      _v23 = null == _v16.link ? null : `${_v16.link}${"upcoming" === _v4 ? `/${_v7}` : "on-demand" === _v4 ? `/${_v8}` : ""}`;
    return (0, _v2.jsxs)(_v2.Fragment, {
      children: [(0, _v2.jsxs)(_v3.default, {
        children: [(0, _v2.jsx)("title", {
          children: _v21
        }), _v22 ? (0, _v2.jsx)("meta", {
          content: _v22,
          name: "description"
        }) : null, (0, _v2.jsx)("meta", {
          content: _v21,
          property: "og:title"
        }), _v22 ? (0, _v2.jsx)("meta", {
          content: _v22,
          property: "og:description"
        }) : null, (0, _v2.jsx)("meta", {
          content: "website",
          property: "og:type"
        }), _v23 ? (0, _v2.jsx)("meta", {
          content: _v23,
          property: "og:url"
        }) : null, _v23 ? (0, _v2.jsx)("link", {
          href: _v23,
          rel: "canonical"
        }) : null]
      }), _v15, (0, _v2.jsx)(_v42, {
        landingPath: _v7 ? _v11(_v16.id) : null,
        children: "upcoming" === _v4 ? (0, _v2.jsx)(_v75, {
          series: _v16
        }) : "on-demand" === _v4 ? (0, _v2.jsx)(_v46, {
          recordings: _v17,
          series: _v16
        }) : (0, _v2.jsx)(_v56, {
          recordings: _v17,
          recordingsTotal: _v18,
          series: _v16
        })
      })]
    });
  }], 0);
}