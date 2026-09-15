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
    _v16 = _v0.i(0),
    _v17 = _v0.i(0);
  let _v18 = ({
    title: _v0,
    message: _v1
  }) => (0, _v1.jsxs)(_v13.Flex, {
    align: "center",
    backgroundColor: "fill-component",
    borderRadius: "lg",
    direction: "column",
    gap: "sm",
    justify: "center",
    minHeight: (0, _v17.rem)(200),
    padding: "xl",
    width: "100%",
    children: [(0, _v1.jsx)(_v14.Text, {
      color: "text-primary",
      variant: "heading-sm",
      children: _v0
    }), (0, _v1.jsx)(_v14.Text, {
      color: "text-secondary",
      textAlign: "center",
      variant: "body-md",
      children: _v1
    })]
  });
  var _v19 = _v0.i(0),
    _v20 = _v0.i(0);
  let _v21 = ({
      label: _v0
    }) => (0, _v1.jsx)(_v11.Box, {
      alignItems: "center",
      backdropFilter: "blur(20px)",
      backgroundColor: "rgba(14, 18, 22, 0.48)",
      borderRadius: (0, _v17.rem)(4),
      bottom: (0, _v17.rem)(7.5),
      display: "flex",
      height: (0, _v17.rem)(20),
      justifyContent: "center",
      position: "absolute",
      px: (0, _v17.rem)(4),
      right: (0, _v17.rem)(7.5),
      children: (0, _v1.jsx)(_v14.Text, {
        color: "white",
        fontWeight: "medium",
        variant: "body-sm",
        whiteSpace: "nowrap",
        children: _v0
      })
    }),
    _v22 = _v0 => {
      let _v1 = _v0.pictures?.sizes;
      if (_v1 && 0 !== _v1.length) return _v1[_v1.length - 1]?.link ?? void 0;
    },
    _v23 = _v0 => _v0.title?.trim() || (0, _v16.translate)({
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
    _v24 = _v0 => {
      if (!_v0) return null;
      let _v1 = new Date(_v0).getTime();
      return Number.isNaN(_v1) ? null : _v1;
    },
    _v25 = (_v0, _v1) => {
      let _v2 = _v24(_v1 ?? _v0.nextOccurrenceTime ?? _v0.startTime);
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
    _v26 = _v0 => {
      let _v1 = Date.now(),
        _v2 = [];
      return _v0.forEach(_v0 => {
        let _v1 = (_v0.upcomingOccurrences ?? []).filter(_v0 => {
          let _v1 = _v24(_v0);
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
      }), _v2.sort((_v0, _v1) => _v0.isLive !== _v1.isLive ? _v0.isLive ? -1 : 1 : (_v24(_v0.occurrenceTime) ?? 0) - (_v24(_v1.occurrenceTime) ?? 0)), _v2;
    },
    _v27 = _v0 => {
      let _v1;
      return {
        ...{
          title: _v23(_v1 = _v0.event),
          description: _v1.description,
          date: _v25(_v1),
          isLive: _v1.isLive,
          link: _v1.link,
          thumbnailSrc: _v22(_v1),
          speakers: (_v1.speakers ?? []).filter(_v0 => !!_v0?.name)
        },
        date: _v25(_v0.event, _v0.occurrenceTime),
        isLive: _v0.isLive
      };
    },
    _v28 = _v0 => {
      let _v1 = Date.now(),
        _v2 = [],
        _v3 = [];
      return _v0.forEach(_v0 => {
        let _v1 = _v24(_v0.nextOccurrenceTime);
        _v0.isLive || null !== _v1 && _v1 >= _v1 ? _v2.push(_v0) : _v3.push(_v0);
      }), _v2.sort((_v0, _v1) => _v0.isLive !== _v1.isLive ? _v0.isLive ? -1 : 1 : (_v24(_v0.nextOccurrenceTime) ?? 0) - (_v24(_v1.nextOccurrenceTime) ?? 0)), {
        upcoming: _v2,
        onDemand: _v3
      };
    },
    _v29 = (_v0, _v1) => {
      let _v2 = (0, _v16.getCurrentLocale)();
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
        children: [(0, _v1.jsx)(_v20.EventThumbnail, {
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
              children: _v0.name?.trim() || (0, _v16.translate)({
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
            children: (0, _v1.jsx)(_v19.ArrowRight, {})
          })]
        })]
      });
    };
  var _v33 = _v0.i(0),
    _v34 = _v0.i(0);
  let _v35 = ({
      series: _v0,
      children: _v1
    }) => {
      let _v2 = _v0.name?.trim() ?? "",
        _v3 = {
          type: _v0.landingPageConfig?.logo?.type ?? "vimeo",
          url: _v0.landingPageConfig?.logo?.url ?? null
        },
        _v4 = _v0.landingPageConfig?.theme === "dark" ? _v33.DarkMode : _v33.LightMode,
        _v5 = _v0.landingPageConfig?.navConfig ?? ["upcoming", "on-demand"],
        _v6 = [{
          id: "upcoming",
          label: (0, _v16.translate)({
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
          href: _v8(_v0)
        }, {
          id: "on-demand",
          label: (0, _v16.translate)({
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
          href: _v9(_v0)
        }].filter(_v0 => _v5.includes(_v0.id));
      return (0, _v1.jsx)(_v4, {
        children: (0, _v1.jsxs)(_v13.Flex, {
          backgroundColor: "background",
          direction: "column",
          align: "center",
          minHeight: "100vh",
          width: "100%",
          children: [(0, _v1.jsx)(_v34.Navbar, {
            logo: _v3,
            menuItems: _v6,
            name: _v2
          }), (0, _v1.jsx)(_v13.Flex, {
            direction: "column",
            gap: "xl",
            maxWidth: (0, _v17.rem)(0),
            p: "md",
            width: "100%",
            children: _v1
          })]
        })
      });
    },
    _v36 = ({
      series: _v0,
      recordings: _v1
    }) => {
      let _v2 = _v7(_v0),
        _v3 = (0, _v16.translate)({
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
      return (0, _v1.jsxs)(_v35, {
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
              children: (0, _v16.translate)({
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
            children: (0, _v1.jsx)(_v15.EventsGrid, {
              children: _v1.map(_v0 => (0, _v1.jsx)(_v32, {
                recording: _v0
              }, _v0.uri))
            })
          }) : (0, _v1.jsx)(_v18, {
            title: (0, _v16.translate)({
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
            message: (0, _v16.translate)({
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
        }), _v1.length > 8 && (0, _v1.jsx)(_v13.Flex, {
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
  var _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0);
  let _v42 = ({
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
        children: (0, _v16.translate)({
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
    _v43 = ["banner", "upcoming"],
    _v44 = ({
      series: _v0,
      recordings: _v1,
      recordingsTotal: _v2
    }) => {
      let _v3 = _v0.description?.trim() ?? "",
        {
          upcoming: _v4
        } = _v28(_v0.events),
        _v5 = _v26(_v4),
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
        })(_v0.landingPageConfig?.startDate, _v0.landingPageConfig?.endDate),
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
        _v11 = _v0.landingPageConfig?.contentConfig ?? _v43,
        _v12 = _v0.landingPageConfig?.timeZone,
        _v13 = _v0.landingPageConfig?.faqConfig ?? [],
        _v14 = _v11.includes("on-demand"),
        _v15 = _v2 > _v1.length,
        _v16 = _v11.includes("upcoming") || _v14 || _v11.includes("agenda"),
        _v17 = (_v11.includes("upcoming") || _v11.includes("agenda")) && _v4.length > 0 || _v14 && _v1.length > 0,
        _v18 = _v11.map(_v0 => {
          if ("banner" === _v0) return (0, _v1.jsx)(_v41.Hero, {
            dateRange: _v8,
            description: _v3,
            heroImageSrc: _v10,
            name: _v0.name?.trim() ?? "",
            timeZoneLabel: _v9
          }, _v0);
          if ("upcoming" === _v0 && _v6.length > 0) return (0, _v1.jsxs)(_v39.EventsSection, {
            action: _v7 ? (0, _v1.jsx)(_v12.Button, {
              as: _v10.default,
              href: _v8(_v0),
              size: "lg",
              variant: "tertiary",
              children: (0, _v16.translate)({
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
            title: (0, _v16.translate)({
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
            children: [_v6.map(_v0 => (0, _v1.jsx)(_v38.EventCard, {
              ..._v27(_v0)
            }, _v0.key)), _v7 ? (0, _v1.jsx)(_v42, {
              count: _v5.length - _v6.length,
              href: _v8(_v0)
            }, "see-more") : null]
          }, _v0);
          if ("agenda" === _v0 && _v4.length > 0) {
            let _v0, _v1, _v2;
            return (0, _v1.jsx)(_v37.AgendaSection, {
              groups: (_v0 = [], _v1 = new Map(), _v2 = new Date().toISOString(), _v5.forEach(_v0 => {
                let {
                    event: _v1
                  } = _v0,
                  _v2 = _v0.occurrenceTime ?? _v1.startTime,
                  _v3 = _v2 ? _v24(_v2) : null,
                  _v4 = _v0.isLive && (null === _v3 || _v3 < Date.now()),
                  _v5 = _v4 ? _v2 : null !== _v3 ? _v2 : null;
                if (null === _v5) return;
                let _v6 = _v29({
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit"
                  }, _v12).format(new Date(_v5)),
                  _v7 = _v1.get(_v6);
                _v7 || (_v7 = {
                  key: _v6,
                  label: ((_v0, _v1) => {
                    let _v2 = _v24(_v0);
                    if (null === _v2) return null;
                    let _v3 = new Date(_v2),
                      _v4 = _v29({
                        month: "short",
                        day: "numeric"
                      }, _v1);
                    if (!(0, _v16.getCurrentLocale)().startsWith("en")) return _v4.format(_v3);
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
                  })(_v5, _v12) ?? "",
                  events: []
                }, _v1.set(_v6, _v7), _v0.push(_v7)), _v7.events.push({
                  key: _v0.key,
                  title: _v23(_v1),
                  time: _v4 ? null : ((_v0, _v1) => {
                    let _v2 = _v24(_v0);
                    if (null === _v2) return null;
                    let _v3 = new Date(_v2),
                      _v4 = _v29({
                        hour: "numeric",
                        minute: "2-digit"
                      }, _v1).format(_v3),
                      _v5 = _v1 ? ((_v0, _v1) => {
                        try {
                          return new Intl.DateTimeFormat((0, _v16.getCurrentLocale)(), {
                            timeZone: _v1,
                            timeZoneName: "short"
                          }).formatToParts(_v0).find(_v0 => "timeZoneName" === _v0.type)?.value ?? null;
                        } catch {
                          return null;
                        }
                      })(_v3, _v1) : null;
                    return _v5 ? `${_v4} ${_v5}` : _v4;
                  })(_v2, _v12),
                  description: _v1.description,
                  thumbnailSrc: _v22(_v1),
                  isLive: _v0.isLive,
                  link: _v1.link
                });
              }), _v0)
            }, _v0);
          }
          return "faq" === _v0 && _v13.length > 0 ? (0, _v1.jsx)(_v40.FaqSection, {
            items: _v13
          }, _v0) : "on-demand" === _v0 && _v1.length > 0 ? (0, _v1.jsxs)(_v39.EventsSection, {
            action: _v15 ? (0, _v1.jsx)(_v12.Button, {
              as: _v10.default,
              href: _v9(_v0),
              size: "lg",
              variant: "tertiary",
              children: (0, _v16.translate)({
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
            title: (0, _v16.translate)({
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
            children: [_v1.map(_v0 => (0, _v1.jsx)(_v32, {
              recording: _v0
            }, _v0.uri)), _v15 ? (0, _v1.jsx)(_v42, {
              count: _v2 - _v1.length,
              href: _v9(_v0)
            }, "see-more") : null]
          }, _v0) : null;
        }).filter(Boolean);
      return (0, _v1.jsxs)(_v35, {
        series: _v0,
        children: [_v18, _v16 && !_v17 ? (0, _v1.jsx)(_v18, {
          title: (0, _v16.translate)({
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
          message: (0, _v16.translate)({
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
        }) : null]
      });
    };
  var _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0);
  let _v50 = _v0 => "object" == typeof _v0 && null !== _v0 ? _v0 : null,
    _v51 = async _v0 => {
      let _v1,
        _v2 = _v50(_v0);
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
  var _v52 = _v0.i(0),
    _v53 = _v0.i(0);
  async function _v54({
    baseUrl: _v0,
    select: _v1,
    where: {
      eventSeriesId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v52.measureLatency)("getEventSery", "GET", async () => {
      let _v0 = await fetch(`${_v0}/event_series/${_v2}?${(0, _v53.searchQueryString)(_v3)}&fields=${_v1.map(_v53.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v53.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v53.deepCamelCase)(_v1);
    });
  }
  let _v55 = ["id", "name", "description", "link", "status", "landingPageConfig", "landingPageConfig.theme", "landingPageConfig.startDate", "landingPageConfig.endDate", "landingPageConfig.timeZone", "landingPageConfig.logo", "landingPageConfig.logo.type", "landingPageConfig.logo.uri", "landingPageConfig.logo.url", "landingPageConfig.contentConfig", "landingPageConfig.navConfig", "landingPageConfig.faqConfig", "pictures", "pictures.sizes", "pictures.sizes.link", "pictures.sizes.width", "pictures.baseLink", "pictures.uri", "events.uri", "events.title", "events.link", "events.description", "events.nextOccurrenceTime", "events.startTime", "events.upcomingOccurrences", "events.isLive", "events.pictures", "events.pictures.sizes", "events.pictures.sizes.link", "events.pictures.sizes.width", "events.speakers", "events.speakers.name", "events.speakers.avatar"],
    _v56 = async ({
      baseUrl: _v0,
      headers: _v1,
      seriesIdOrUrl: _v2,
      password: _v3,
      credentials: _v4,
      signal: _v5
    }) => _v54({
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
      } : {}),
      select: _v55
    });
  var _v57 = _v0.i(0);
  let _v58 = ["uri", "name", "link", "duration", "streamedOn", "pictures.sizes.link"],
    _v59 = () => ({
      recordings: [],
      total: 0
    }),
    _v60 = async ({
      baseUrl: _v0,
      headers: _v1,
      series: _v2,
      view: _v3,
      password: _v4,
      credentials: _v5,
      signal: _v6
    }) => {
      if ("upcoming" === _v3 || !_v2.landingPageConfig?.contentConfig?.includes("on-demand")) return _v59();
      try {
        let {
          data: _v0,
          total: _v1
        } = await (0, _v57.getEventSeryVideos)({
          baseUrl: _v0,
          headers: _v1,
          credentials: _v5,
          signal: _v6,
          where: {
            eventSeriesId: _v2.id
          },
          select: _v58,
          query: {
            sort: "newest",
            perPage: "on-demand" === _v3 ? 100 : 5,
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
        return _v59();
      }
    },
    _v61 = async () => {
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
    _v62 = ({
      seriesIdOrUrl: _v0,
      baseUrl: _v1,
      view: _v2,
      onUnlock: _v3
    }) => {
      let [_v4, _v5] = (0, _v3.useState)(""),
        [_v6, _v7] = (0, _v3.useState)(null),
        [_v8, _v9] = (0, _v3.useState)(!1),
        _v10 = async _v0 => {
          if (_v0.preventDefault(), _v4.trim() && !_v8) {
            _v9(!0), _v7(null);
            try {
              let _v0 = await _v61(),
                _v1 = {
                  Authorization: `jwt ${_v0}`
                },
                _v2 = await _v56({
                  baseUrl: _v1,
                  seriesIdOrUrl: _v0,
                  password: _v4,
                  headers: _v1,
                  credentials: "include"
                }),
                _v3 = await _v60({
                  baseUrl: _v1,
                  headers: _v1,
                  series: _v2,
                  view: _v2,
                  password: _v4,
                  credentials: "include"
                });
              _v3(_v2, _v3);
            } catch (_v0) {
              _v50(_v0)?.status === 403 ? _v7((0, _v16.translate)({
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
              })) : _v7((0, _v16.translate)({
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
              })), _v9(!1);
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
            onSubmit: _v10,
            style: {
              maxWidth: (0, _v17.rem)(420),
              width: "100%"
            },
            children: (0, _v1.jsxs)(_v13.Flex, {
              backgroundColor: "fill-component",
              borderRadius: "lg",
              direction: "column",
              gap: "lg",
              p: (0, _v17.rem)(32),
              width: "100%",
              children: [(0, _v1.jsxs)(_v13.Flex, {
                align: "center",
                gap: "sm",
                children: [(0, _v1.jsx)(_v49.Lock, {
                  color: "text-primary"
                }), (0, _v1.jsx)(_v14.Text, {
                  color: "text-primary",
                  variant: "heading-md",
                  children: (0, _v16.translate)({
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
                children: (0, _v16.translate)({
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
              }), (0, _v1.jsxs)(_v45.FormControl, {
                isInvalid: !!_v6,
                children: [(0, _v1.jsx)(_v46.FormLabel, {
                  size: "sm",
                  children: (0, _v16.translate)({
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
                }), (0, _v1.jsx)(_v48.Input, {
                  autoComplete: "current-password",
                  autoFocus: !0,
                  onChange: _v0 => {
                    _v5(_v0.target.value), _v6 && _v7(null);
                  },
                  placeholder: (0, _v16.translate)({
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
                  value: _v4
                }), _v6 ? (0, _v1.jsx)(_v47.FormErrorMessage, {
                  children: _v6
                }) : null]
              }), (0, _v1.jsx)(_v12.Button, {
                isDisabled: !_v4.trim(),
                isLoading: _v8,
                type: "submit",
                variant: "primary",
                children: (0, _v16.translate)({
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
    _v63 = ({
      series: _v0
    }) => {
      let _v1 = _v26(_v28(_v0.events).upcoming),
        _v2 = _v7(_v0),
        _v3 = (0, _v16.translate)({
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
      return (0, _v1.jsxs)(_v35, {
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
              children: (0, _v16.translate)({
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
            children: (0, _v1.jsx)(_v15.EventsGrid, {
              children: _v1.map(_v0 => (0, _v1.jsx)(_v38.EventCard, {
                ..._v27(_v0)
              }, _v0.key))
            })
          }) : (0, _v1.jsx)(_v18, {
            title: (0, _v16.translate)({
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
            message: (0, _v16.translate)({
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
        }), _v1.length > 8 && (0, _v1.jsx)(_v13.Flex, {
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
  var _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0);
  let _v67 = /^[A-Za-z0-9-]{1,128}$/;
  (0, _v4.withPageSetup)(async _v0 => {
    let _v1 = _v0.params?.params,
      _v2 = Array.isArray(_v1) ? _v1 : _v1 ? [_v1] : [],
      _v3 = _v2[0] ?? "",
      _v4 = /^\d+$/.test(_v3);
    if (!_v4 && !_v67.test(_v3)) return {
      notFound: !0
    };
    let _v5 = _v4 ? Number.parseInt(_v3, 10) : _v3,
      _v6 = _v2[_v2.length - 1],
      _v7 = _v4 ? _v2.length >= 3 : 2 === _v2.length,
      _v8 = _v7 && _v6 === _v5 ? "upcoming" : _v7 && _v6 === _v6 ? "on-demand" : "landing",
      _v9 = _v0.req.headers.cookie,
      _v10 = _v9 ? {
        ..._v0.headers,
        cookie: _v9
      } : _v0.headers;
    try {
      let _v0 = await _v56({
          seriesIdOrUrl: _v5,
          headers: _v10,
          baseUrl: _v0.baseUrl
        }),
        _v1 = _v7(_v0);
      if (_v4 && 1 === _v2.length && _v1.startsWith("/") && !_v1.startsWith("//") && _v1 !== `/event_series/${_v5}`) {
        let _v0 = _v0.resolvedUrl.split("?")[1];
        return {
          redirect: {
            destination: _v0 ? `${_v1}?${_v0}` : _v1,
            permanent: !1
          }
        };
      }
      if (_v4 && _v2.length >= 2) {
        let [, _v0, _v1, _v2] = _v1.split("/");
        if ("event_series" === _v0 && _v1 === String(_v5) && (_v2 ?? null) !== _v2[1]) return {
          notFound: !0
        };
      }
      let {
        recordings: _v2,
        total: _v3
      } = await _v60({
        series: _v0,
        view: _v8,
        headers: _v10,
        baseUrl: _v0.baseUrl
      });
      return {
        props: {
          series: _v0,
          recordings: _v2,
          recordingsTotal: _v3,
          seriesIdOrUrl: _v5,
          view: _v8,
          baseUrl: _v0.baseUrl,
          hasThemeSupport: !0
        }
      };
    } catch (_v0) {
      let _v1 = await _v51(_v0);
      if ("password-required" === _v1) return {
        props: {
          series: null,
          recordings: [],
          recordingsTotal: 0,
          seriesIdOrUrl: _v5,
          view: _v8,
          baseUrl: _v0.baseUrl,
          hasThemeSupport: !0
        }
      };
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
    baseUrl: _v5
  }) => {
    let [_v6, _v7] = (0, _v3.useState)(null),
      _v8 = _v0 ? {
        series: _v0,
        recordings: _v1,
        recordingsTotal: _v2
      } : _v6,
      _v9 = (0, _v66.useViewer)(),
      {
        trackEventSeriesLandingPageDisplayed: _v10
      } = (0, _v64.useEventSeriesTracking)(),
      _v11 = (0, _v3.useRef)(null),
      _v12 = _v8?.series.id;
    if ((0, _v3.useEffect)(() => {
      if (null == _v12 || !_v9) return;
      let _v0 = `${_v12}:${_v4}`;
      _v11.current !== _v0 && (_v11.current = _v0, _v10({
        eventSeriesId: String(_v12),
        landingPage: (0, _v64.deriveEventSeriesLandingPage)(_v4),
        viewerAuthStatus: (0, _v65.deriveViewerAuthStatus)(_v9)
      }));
    }, [_v12, _v4, _v9, _v10]), !_v8) return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v2.default, {
        children: (0, _v1.jsx)("title", {
          children: "Event series"
        })
      }), (0, _v1.jsx)(_v62, {
        baseUrl: _v5,
        onUnlock: (_v0, _v1) => _v7({
          series: _v0,
          recordings: _v1.recordings,
          recordingsTotal: _v1.total
        }),
        seriesIdOrUrl: _v3,
        view: _v4
      })]
    });
    let {
        series: _v13,
        recordings: _v14,
        recordingsTotal: _v15
      } = _v8,
      _v16 = _v13.name?.trim() || "Event series",
      _v17 = "upcoming" === _v4 ? "Upcoming events" : "on-demand" === _v4 ? "On demand" : null,
      _v18 = _v17 ? `${_v17} \xb7 ${_v16}` : _v16,
      _v19 = (_v13.description ?? "").replace(/\s+/g, " ").trim().slice(0, 200),
      _v20 = null == _v13.link ? null : `${_v13.link}${"upcoming" === _v4 ? `/${_v5}` : "on-demand" === _v4 ? `/${_v6}` : ""}`;
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v2.default, {
        children: [(0, _v1.jsx)("title", {
          children: _v18
        }), _v19 ? (0, _v1.jsx)("meta", {
          content: _v19,
          name: "description"
        }) : null, (0, _v1.jsx)("meta", {
          content: _v18,
          property: "og:title"
        }), _v19 ? (0, _v1.jsx)("meta", {
          content: _v19,
          property: "og:description"
        }) : null, (0, _v1.jsx)("meta", {
          content: "website",
          property: "og:type"
        }), _v20 ? (0, _v1.jsx)("meta", {
          content: _v20,
          property: "og:url"
        }) : null, _v20 ? (0, _v1.jsx)("link", {
          href: _v20,
          rel: "canonical"
        }) : null]
      }), "upcoming" === _v4 ? (0, _v1.jsx)(_v63, {
        series: _v13
      }) : "on-demand" === _v4 ? (0, _v1.jsx)(_v36, {
        recordings: _v14,
        series: _v13
      }) : (0, _v1.jsx)(_v44, {
        recordings: _v14,
        recordingsTotal: _v15,
        series: _v13
      })]
    });
  }], 0);
}