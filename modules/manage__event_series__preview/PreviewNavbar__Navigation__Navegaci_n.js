{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  _v0.s(["PreviewNavbar", 0, ({
    name: _v0,
    logo: _v1,
    navConfig: _v2,
    isMobilePreview: _v3,
    isActive: _v4,
    parentRef: _v5,
    onEdit: _v6
  }) => {
    let _v7 = (0, _v4.getNavMenuItems)().filter(_v0 => _v2.includes(_v0.id)).map(({
      id: _v0,
      label: _v1
    }) => ({
      id: _v0,
      label: _v1
    }));
    return (0, _v1.jsx)(_v5.SectionHoverOverlay, {
      _focusWithin: void 0,
      mb: 0,
      mx: 0,
      onEdit: _v6,
      title: (0, _v3.translate)({
        singular: "Navigation",
        dictionary: {
          es: {
            singular: "Navegación"
          },
          "ja-JP": {
            singular: "ナビゲーション"
          },
          "ko-KR": {
            singular: "탐색"
          },
          "pt-BR": {
            singular: "Navegação"
          },
          "zh-CN": {
            singular: "导航"
          }
        }
      }),
      isActive: _v4,
      width: "100%",
      children: (0, _v1.jsx)(_v2.Navbar, {
        logo: _v1,
        menuItems: _v7,
        name: _v0,
        position: "static",
        isMobilePreview: _v3,
        parentRef: _v5
      })
    });
  }], 0);
  var _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0);
  _v0.s(["UpcomingEventsSection", 0, ({
    entries: _v0,
    hasMore: _v1,
    remaining: _v2,
    isMobilePreview: _v3,
    ..._v4
  }) => (0, _v1.jsx)(_v5.SectionHoverOverlay, {
    ..._v4,
    title: (0, _v3.translate)({
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
    children: (0, _v1.jsxs)(_v8.EventsSection, {
      action: _v1 ? (0, _v1.jsx)(_v6.Button, {
        variant: "tertiary",
        children: (0, _v3.translate)({
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
      emptyState: 0 === _v0.length ? (0, _v1.jsx)(_v10.EmptyStatePlaceholder, {
        message: (0, _v3.translate)({
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
      }) : void 0,
      id: "upcoming-events",
      isMobilePreview: _v3,
      title: (0, _v3.translate)({
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
      children: [_v0.map(_v0 => (0, _v1.jsx)(_v7.EventCard, {
        ...(0, _v11.getUpcomingEntryCardProps)(_v0)
      }, _v0.key)), _v1 ? (0, _v1.jsx)(_v9.SeeMoreCard, {
        count: _v2
      }, "see-more") : null]
    })
  })], 0);
}