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
    _v19 = _v0.i(0);
  let _v20 = (0, _v5.rem)(393),
    _v21 = (0, _v5.rem)(0),
    _v22 = ({
      sections: _v0,
      activeSection: _v1,
      colorMode: _v2 = "light",
      name: _v3,
      navConfig: _v4,
      logo: _v5,
      description: _v6,
      heroImageSrc: _v7,
      startDate: _v8,
      endDate: _v9,
      timeZone: _v10,
      events: _v11,
      previewOnDemandRecordings: _v12,
      faqItems: _v13,
      previewMode: _v14,
      onEdit: _v15,
      onRequestRemoveSection: _v16
    }) => {
      let {
          settings: _v17
        } = (0, _v12.useOrionSettings)(),
        _v18 = "dark" === _v2 ? _v8.DarkMode : _v8.LightMode,
        _v19 = (0, _v2.useRef)(null),
        {
          upcoming: _v20
        } = (0, _v17.splitSeriesEvents)(_v11),
        _v21 = (0, _v17.expandUpcomingEntries)(_v20),
        _v22 = _v21.slice(0, 5),
        _v23 = _v21.length > _v22.length,
        _v24 = _v12.slice(0, 5),
        _v25 = _v12.length > _v24.length;
      return (0, _v1.jsx)(_v3.Box, {
        height: "100vh",
        overflowY: "auto",
        ref: _v19,
        children: (0, _v1.jsx)(_v18, {
          children: (0, _v1.jsxs)(_v4.Flex, {
            align: "center",
            backgroundColor: "background",
            direction: "column",
            marginX: "auto",
            maxWidth: "mobile" === _v14 ? _v20 : "100%",
            minHeight: "100%",
            transition: "max-width 0.2s linear",
            width: "100%",
            children: [(0, _v1.jsx)(_v15.PreviewNavbar, {
              isMobilePreview: "mobile" === _v14,
              isActive: "navigation" === _v1,
              logo: _v5,
              name: _v3,
              navConfig: _v4,
              onEdit: () => _v15("navigation"),
              parentRef: _v19
            }), (0, _v1.jsx)(_v4.Flex, {
              direction: "column",
              gap: "xl",
              maxWidth: _v21,
              p: "md",
              width: "100%",
              children: _v0.map((_v0, _v1) => ((_v0, _v1) => {
                let _v2 = {
                    key: `${_v0}-${_v1}`,
                    isActive: _v1 === _v0,
                    onEdit: ("on-demand" !== _v0 || _v17.release_event_series_v1) && "agenda" !== _v0 ? () => _v15(_v0) : void 0,
                    onRemove: () => _v16(_v0)
                  },
                  _v3 = "mobile" === _v14;
                switch (_v0) {
                  case "banner":
                    return (0, _v1.jsx)(_v19.SectionHoverOverlay, {
                      ..._v2,
                      title: (0, _v6.translate)({
                        singular: "Hero banner",
                        dictionary: {
                          es: {
                            singular: "Banner principal"
                          },
                          "de-DE": {
                            singular: "Hero-Banner"
                          },
                          "fr-FR": {
                            singular: "Bannière principale"
                          },
                          "ja-JP": {
                            singular: "ヒーローバナー"
                          },
                          "ko-KR": {
                            singular: "히어로 배너"
                          },
                          "pt-BR": {
                            singular: "Banner principal"
                          },
                          "zh-CN": {
                            singular: "主横幅"
                          }
                        }
                      }),
                      children: (0, _v1.jsx)(_v11.Hero, {
                        dateRange: (0, _v18.formatHeroDateRange)(_v8, _v9),
                        description: _v6,
                        heroImageSrc: _v7,
                        name: _v3,
                        timeZoneLabel: (0, _v18.formatTimeZoneLabel)(_v10)
                      })
                    });
                  case "upcoming":
                    return (0, _v1.jsx)(_v16.UpcomingEventsSection, {
                      ..._v2,
                      entries: _v22,
                      hasMore: _v23,
                      isMobilePreview: _v3,
                      remaining: _v21.length - _v22.length
                    });
                  case "on-demand":
                    return (0, _v1.jsx)(_v14.OnDemandEventsSection, {
                      ..._v2,
                      title: (0, _v6.translate)({
                        singular: "On demand videos",
                        dictionary: {
                          es: {
                            singular: "Vídeos bajo demanda"
                          },
                          "de-DE": {
                            singular: "On-Demand-Videos"
                          },
                          "fr-FR": {
                            singular: "Vidéos à la demande"
                          },
                          "ja-JP": {
                            singular: "オンデマンド動画"
                          },
                          "ko-KR": {
                            singular: "주문형 비디오"
                          },
                          "pt-BR": {
                            singular: "Vídeos sob demanda"
                          },
                          "zh-CN": {
                            singular: "点播视频"
                          }
                        }
                      }),
                      hasMore: _v25,
                      recordings: _v24,
                      remaining: _v12.length - _v24.length,
                      isMobilePreview: _v3
                    });
                  case "agenda":
                    return (0, _v1.jsx)(_v19.SectionHoverOverlay, {
                      ..._v2,
                      title: (0, _v6.translate)({
                        singular: "Agenda",
                        dictionary: {
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
                      }),
                      children: (0, _v1.jsx)(_v9.AgendaSection, {
                        emptyState: (0, _v1.jsx)(_v13.EmptyStatePlaceholder, {
                          message: (0, _v6.translate)({
                            singular: "No upcoming events found.",
                            dictionary: {
                              es: {
                                singular: "No se han encontrado eventos próximos."
                              },
                              "de-DE": {
                                singular: "Keine bevorstehenden Veranstaltungen gefunden."
                              },
                              "fr-FR": {
                                singular: "Aucun événement à venir n'a été trouvé."
                              },
                              "ja-JP": {
                                singular: "今後のイベントは見つかりませんでした。"
                              },
                              "ko-KR": {
                                singular: "다가오는 이벤트가 없습니다."
                              },
                              "pt-BR": {
                                singular: "Nenhum evento futuro encontrado."
                              },
                              "zh-CN": {
                                singular: "未找到即将举行的活动。"
                              }
                            }
                          })
                        }),
                        groups: (0, _v17.groupEventsByDay)(_v21),
                        isMobilePreview: _v3
                      })
                    });
                  case "faq":
                    return (0, _v1.jsx)(_v19.SectionHoverOverlay, {
                      ..._v2,
                      title: (0, _v6.translate)({
                        singular: "FAQ",
                        dictionary: {
                          es: {
                            singular: "Preguntas frecuentes"
                          },
                          "ja-JP": {
                            singular: "よくある質問"
                          },
                          "pt-BR": {
                            singular: "Perguntas frequentes"
                          },
                          "zh-CN": {
                            singular: "常见问题解答"
                          }
                        }
                      }),
                      children: (0, _v1.jsx)(_v10.FaqSection, {
                        isMobilePreview: _v3,
                        items: _v13
                      })
                    });
                  default:
                    return null;
                }
              })(_v0, _v1))
            })]
          })
        })
      });
    };
  _v0.s(["SeriesLandingPreview", 0, ({
    name: _v0,
    description: _v1,
    events: _v2,
    previewOnDemandRecordings: _v3,
    sections: _v4,
    activeSection: _v5,
    faqItems: _v6,
    heroImageSrc: _v7,
    startDate: _v8,
    endDate: _v9,
    timeZone: _v10,
    viewUrl: _v11,
    colorMode: _v12,
    logo: _v13,
    navConfig: _v14,
    previewLocale: _v15,
    onPreviewLocaleChange: _v16,
    onEdit: _v17,
    onRequestRemoveSection: _v18
  }) => {
    let [_v19, _v20] = (0, _v2.useState)("web"),
      _v21 = (0, _v2.useRef)(null),
      _v22 = (0, _v2.useMemo)(() => ({
        activeSection: _v5,
        sections: _v4,
        colorMode: _v12,
        name: _v0,
        navConfig: _v14,
        logo: _v13,
        description: _v1,
        heroImageSrc: _v7,
        startDate: _v8,
        endDate: _v9,
        timeZone: _v10,
        events: _v2,
        previewOnDemandRecordings: _v3,
        faqItems: _v6
      }), [_v5, _v4, _v12, _v0, _v14, _v13, _v1, _v7, _v8, _v9, _v10, _v2, _v3, _v6]),
      _v23 = (0, _v2.useMemo)(() => ({
        type: "event-series-preview:update",
        locale: _v15,
        previewMode: _v19,
        data: _v22
      }), [_v22, _v15, _v19]),
      _v24 = (0, _v2.useRef)(_v23),
      _v25 = (0, _v2.useCallback)((_v0 = _v24.current) => {
        _v21.current?.contentWindow?.postMessage(_v0, window.location.origin);
      }, []);
    return (0, _v2.useEffect)(() => {
      _v24.current = _v23, _v25(_v23);
    }, [_v23, _v25]), (0, _v2.useEffect)(() => {
      let _v0 = _v0 => {
        let _v1;
        _v0.origin === window.location.origin && _v0.source === _v21.current?.contentWindow && "object" == typeof (_v1 = _v0.data) && null !== _v1 && "type" in _v1 && ("event-series-preview:ready" === _v1.type || "event-series-preview:edit" === _v1.type || "event-series-preview:remove" === _v1.type) && ("event-series-preview:ready" === _v0.data.type ? _v25() : "event-series-preview:edit" === _v0.data.type ? _v17(_v0.data.sectionId) : _v18(_v0.data.sectionId));
      };
      return window.addEventListener("message", _v0), () => window.removeEventListener("message", _v0);
    }, [_v17, _v18, _v25]), (0, _v1.jsx)(_v4.Flex, {
      direction: "column",
      flex: "1",
      minW: 0,
      overflow: "hidden",
      padding: "md",
      children: (0, _v1.jsxs)(_v4.Flex, {
        backgroundColor: "background",
        border: "1px solid",
        borderColor: "stroke",
        borderRadius: "lg",
        direction: "column",
        flex: "1",
        minH: 0,
        overflow: "hidden",
        ...("mobile" === _v19 && {
          mx: "auto",
          minWidth: (0, _v5.rem)(360)
        }),
        children: [(0, _v1.jsx)(_v7.PreviewControlBar, {
          onPreviewLocaleChange: _v16,
          onPreviewModeChange: _v20,
          previewLocale: _v15,
          previewMode: _v19,
          viewUrl: _v11
        }), (0, _v1.jsx)(_v3.Box, {
          as: "iframe",
          border: 0,
          flex: "1",
          onLoad: () => _v25(),
          ref: _v21,
          src: "/manage/event_series/preview",
          title: (0, _v6.translate)({
            singular: "Event series landing page preview",
            dictionary: {
              es: {
                singular: "Vista previa de la página de destino de la serie de eventos"
              },
              "de-DE": {
                singular: "Vorschau der Landingpage der Veranstaltungsserie"
              },
              "fr-FR": {
                singular: "Aperçu de la page de destination de la série d'événements"
              },
              "ja-JP": {
                singular: "イベントシリーズのランディングページのプレビュー"
              },
              "ko-KR": {
                singular: "이벤트 시리즈 랜딩 페이지 미리보기"
              },
              "pt-BR": {
                singular: "Pré-visualização da página de destino da série de eventos"
              },
              "zh-CN": {
                singular: "活动系列落地页预览"
              }
            }
          }),
          width: "100%"
        })]
      })
    });
  }, "SeriesLandingPreviewFrame", 0, () => {
    let [_v0, _v1] = (0, _v2.useState)(null);
    if ((0, _v2.useEffect)(() => {
      let _v0 = _v0 => {
        let _v1;
        _v0.origin === window.location.origin && _v0.source === window.parent && "object" == typeof (_v1 = _v0.data) && null !== _v1 && "type" in _v1 && "event-series-preview:update" === _v1.type && _v1(_v0.data);
      };
      return window.addEventListener("message", _v0), window.parent.postMessage({
        type: "event-series-preview:ready"
      }, window.location.origin), () => window.removeEventListener("message", _v0);
    }, []), null === _v0) return null;
    (0, _v6.setLocale)(_v0.locale);
    let _v2 = _v0 => {
      window.parent.postMessage(_v0, window.location.origin);
    };
    return (0, _v1.jsx)(_v22, {
      ..._v0.data,
      onEdit: _v0 => _v2({
        type: "event-series-preview:edit",
        sectionId: _v0
      }),
      onRequestRemoveSection: _v0 => _v2({
        type: "event-series-preview:remove",
        sectionId: _v0
      }),
      previewMode: _v0.previewMode
    });
  }], 0);
}