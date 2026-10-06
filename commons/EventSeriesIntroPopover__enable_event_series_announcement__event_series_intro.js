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
    _v13 = _v0.i(0);
  _v0.s(["EventSeriesIntroPopover", 0, ({
    children: _v0,
    isEligible: _v1
  }) => {
    let _v2 = (0, _v2.useRouter)(),
      {
        expiresOn: _v3,
        isTrialExpired: _v4,
        isTrialing: _v5
      } = (0, _v12.useAccessEventSeriesEditor)(),
      _v6 = (0, _v11.useOrionSetting)("enable_event_series_announcement"),
      _v7 = (0, _v10.useOrionLoading)(),
      {
        acknowledge: _v8,
        isActive: _v9,
        isLoaded: _v10
      } = (0, _v3.useAnnouncement)({
        id: "event_series_intro",
        isEligible: !_v7 && _v6 && !_v4 && _v1
      });
    return (0, _v1.jsx)(_v4.AnnouncementPopover, {
      isOpen: _v10 && _v9,
      trackingId: "event_series",
      anchorWithinChildren: !0,
      placement: "right-start",
      onAcknowledge: () => {
        _v8(), _v2.push(_v13.Path.EventSeries);
      },
      onClose: _v8,
      showCloseButton: !0,
      badge: (0, _v1.jsx)(_v5.Badge, {
        variant: "new",
        size: "sm",
        children: (0, _v1.jsx)(_v8.Text, {
          variant: "heading-2xs",
          children: (0, _v9.translate)({
            singular: "New",
            dictionary: {
              es: {
                singular: "Nuevo"
              },
              "de-DE": {
                singular: "Neu"
              },
              "fr-FR": {
                singular: "Nouveau"
              },
              "ja-JP": {
                singular: "新規作成"
              },
              "ko-KR": {
                singular: "신규"
              },
              "pt-BR": {
                singular: "Novo"
              },
              "zh-CN": {
                singular: "新"
              }
            }
          })
        })
      }),
      acknowledgeLabel: (0, _v9.translate)({
        singular: "Explore event series",
        dictionary: {
          es: {
            singular: "Explorar series de eventos"
          },
          "de-DE": {
            singular: "Eventreihen entdecken"
          },
          "fr-FR": {
            singular: "Explorez les séries d'événements"
          },
          "ja-JP": {
            singular: "イベントシリーズを詳しく見る"
          },
          "ko-KR": {
            singular: "이벤트 시리즈 둘러보기"
          },
          "pt-BR": {
            singular: "Explore séries de eventos"
          },
          "zh-CN": {
            singular: "查看系列活动"
          }
        }
      }),
      title: (0, _v9.translate)({
        singular: "Showcase your events in one branded webpage",
        dictionary: {
          es: {
            singular: "Muestra tus eventos en una única página web de marca"
          },
          "de-DE": {
            singular: "Präsentieren Sie Ihre Veranstaltungen auf einer gebrandeten Webseite"
          },
          "fr-FR": {
            singular: "Présentez vos événements sur une page web de marque"
          },
          "ja-JP": {
            singular: "1つのブランド化されたウェブページでイベントを紹介します"
          },
          "ko-KR": {
            singular: "하나의 브랜드화된 웹페이지에서 이벤트를 소개하세요"
          },
          "pt-BR": {
            singular: "Apresente seus eventos em uma única página da web com identidade de marca"
          },
          "zh-CN": {
            singular: "在统一的品牌网页上展示您的活动"
          }
        }
      }),
      body: (0, _v9.translate)({
        singular: "Create branded event series that bring together your upcoming events and on-demand videos.",
        dictionary: {
          es: {
            singular: "Crea series de eventos de marca que reúnan tus próximos eventos y vídeos bajo demanda."
          },
          "de-DE": {
            singular: "Erstellen Sie gebrandete Veranstaltungsreihen, die Ihre bevorstehenden Veranstaltungen und On-Demand-Videos zusammenführen."
          },
          "fr-FR": {
            singular: "Créez des séries d'événements de marque qui rassemblent vos événements à venir et vos vidéos à la demande."
          },
          "ja-JP": {
            singular: "今後のイベントとオンデマンド動画を一つにまとめるブランド化されたイベントシリーズを作成します."
          },
          "ko-KR": {
            singular: "다가오는 이벤트와 주문형 비디오 VOD를 한데 모으는 브랜드화된 이벤트 시리즈를 만드세요."
          },
          "pt-BR": {
            singular: "Crie séries de eventos de marca que reúnam seus próximos eventos e vídeos sob demanda."
          },
          "zh-CN": {
            singular: "创建品牌活动系列，将您的即将举行的活动和点播视频汇集在一起。"
          }
        }
      }),
      note: _v5 && _v3 ? (0, _v9.translate)({
        singular: "Complimentary access until {DATE}",
        replacements: {
          DATE: new Intl.DateTimeFormat((0, _v9.getCurrentLocale)(), {
            day: "numeric",
            month: "long",
            timeZone: "UTC",
            year: "numeric"
          }).format(new Date(`${_v3}T00:00:00Z`))
        },
        dictionary: {
          es: {
            singular: "Acceso de cortesía hasta {DATE}"
          },
          "de-DE": {
            singular: "Kostenfreier Zugang bis {DATE}"
          },
          "fr-FR": {
            singular: "Accès gratuit jusqu'au {DATE}"
          },
          "ja-JP": {
            singular: "無料でご利用いただけます {DATE}まで"
          },
          "ko-KR": {
            singular: "무료 이용 가능: {DATE}까지"
          },
          "pt-BR": {
            singular: "Acesso gratuito até {DATE}"
          },
          "zh-CN": {
            singular: "免费访问至 {DATE}"
          }
        }
      }) : void 0,
      children: (0, _v1.jsx)(_v7.PopoverAnchor, {
        children: (0, _v1.jsx)(_v6.Box, {
          children: _v0
        })
      })
    });
  }], 0);
  var _v14 = _v0.i(0);
  let _v15 = _v0 => (0, _v1.jsx)(_v14.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsxs)("g", {
      fill: "currentColor",
      children: [(0, _v1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12.495 6.99v10.012h1.433v-4.29h1.432c.788 0 1.433-.637 1.433-1.432V8.422c0-.787-.638-1.432-1.433-1.432h-2.865Zm1.433 4.297h1.432V8.43h-1.432v2.857ZM11.543 9.855V8.422c0-.787-.638-1.432-1.433-1.432H8.677c-.787 0-1.432.637-1.432 1.432v2.858c0 .787.637 1.432 1.432 1.432h1.433v2.858H8.677v-1.433H7.245v1.433c0 .787.637 1.432 1.432 1.432h1.433c.788 0 1.433-.637 1.433-1.432v-2.858c0-.787-.638-1.432-1.433-1.432H8.677V8.422h1.433v1.433h1.433Z"
      }), (0, _v1.jsx)("path", {
        d: "M3.885 11.19a7.74 7.74 0 0 0-1.035.96 9.076 9.076 0 0 1-.953-1.155c.075-.78.24-1.545.495-2.288.188.48.405.93.66 1.343a8.06 8.06 0 0 1 1.23-.698 8.03 8.03 0 0 0-.397 1.838Z"
      }), (0, _v1.jsx)("path", {
        d: "M4.05 13.815a7.574 7.574 0 0 0-.683 1.237 8.11 8.11 0 0 1-1.267-.795 10.567 10.567 0 0 1-.255-2.325c.337.39.682.75 1.057 1.065a9.12 9.12 0 0 1 .945-1.05c0 .63.068 1.26.203 1.868Z"
      }), (0, _v1.jsx)("path", {
        d: "M5.04 16.245c-.12.442-.203.907-.248 1.387a8.697 8.697 0 0 1-1.455-.345 10.122 10.122 0 0 1-.99-2.122c.443.27.885.487 1.343.667.157-.457.345-.892.562-1.297.195.592.465 1.17.795 1.702l-.007.008Z"
      }), (0, _v1.jsx)("path", {
        d: "M6.75 18.24c.03.457.097.922.202 1.402a8.707 8.707 0 0 1-1.492.128 9.862 9.862 0 0 1-1.605-1.703c.502.113.997.18 1.477.21 0-.487.038-.952.12-1.41.375.503.81.968 1.29 1.373h.008ZM4.56 8.655a8.51 8.51 0 0 0-1.29.577 9.101 9.101 0 0 1-.533-1.395c.323-.712.728-1.387 1.2-2.01.023.51.09 1.005.195 1.485.465-.135.93-.225 1.388-.262a8.358 8.358 0 0 0-.968 1.612l.008-.007Z"
      }), (0, _v1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5.265 4.942a9.305 9.305 0 0 0-.66 1.658c.48-.323.99-.578 1.485-.788.232-.495.517-.975.862-1.447a10.02 10.02 0 0 0-1.687.585v-.008Z"
      }), (0, _v1.jsx)("path", {
        d: "M22.102 10.995c-.285.42-.614.81-.952 1.155a8.267 8.267 0 0 0-1.035-.96 8.118 8.118 0 0 0-.397-1.838c.412.188.832.42 1.23.698a8.27 8.27 0 0 0 .66-1.343c.255.743.42 1.508.494 2.288Z"
      }), (0, _v1.jsx)("path", {
        d: "M21.9 14.257a8.71 8.71 0 0 1-1.267.795 7.574 7.574 0 0 0-.683-1.237 7.83 7.83 0 0 0 .203-1.868c.33.315.652.66.945 1.05.375-.315.72-.667 1.057-1.065 0 .78-.082 1.56-.255 2.325Z"
      }), (0, _v1.jsx)("path", {
        d: "M20.663 17.287a8.697 8.697 0 0 1-1.456.345 8.247 8.247 0 0 0-.247-1.387c.33-.533.592-1.11.795-1.703.21.398.405.833.563 1.298.45-.18.892-.405 1.342-.668a10.122 10.122 0 0 1-.99 2.123l-.008-.008Z"
      }), (0, _v1.jsx)("path", {
        d: "M18.532 19.77a9.611 9.611 0 0 1-1.492-.128c.105-.48.172-.945.203-1.402.48-.405.915-.863 1.29-1.373.082.45.12.923.12 1.41.48-.03.982-.097 1.477-.21a9.862 9.862 0 0 1-1.605 1.703h.008ZM21.262 7.837c-.142.495-.322.96-.532 1.395a8.51 8.51 0 0 0-1.29-.577 7.997 7.997 0 0 0-.968-1.613c.458.045.923.135 1.388.263.105-.473.172-.975.195-1.485.473.622.878 1.297 1.2 2.01l.008.007Z"
      }), (0, _v1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M17.902 5.812c.503.21 1.005.473 1.485.788a9.305 9.305 0 0 0-.66-1.658 10.02 10.02 0 0 0-1.687-.585c.338.473.63.96.863 1.448v.007Z"
      })]
    })
  });
  _v0.s(["StaffPicks", 0, _v15], 0);
  let _v16 = _v0 => (0, _v1.jsx)(_v14.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsxs)("g", {
      fill: "currentColor",
      children: [(0, _v1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12.495 6.99v10.012h1.433v-4.29h1.432c.788 0 1.433-.637 1.433-1.432V8.422c0-.787-.638-1.432-1.433-1.432h-2.865Zm1.433 4.297h1.432V8.43h-1.432v2.857ZM11.543 9.855V8.422c0-.787-.638-1.432-1.433-1.432H8.677c-.787 0-1.432.637-1.432 1.432v2.858c0 .787.637 1.432 1.432 1.432h1.433v2.858H8.677v-1.433H7.245v1.433c0 .787.637 1.432 1.432 1.432h1.433c.788 0 1.433-.637 1.433-1.432v-2.858c0-.787-.638-1.432-1.433-1.432H8.677V8.422h1.433v1.433h1.433Z"
      }), (0, _v1.jsx)("path", {
        d: "M3.885 11.19a7.74 7.74 0 0 0-1.035.96 9.076 9.076 0 0 1-.953-1.155c.075-.78.24-1.545.495-2.288.188.48.405.93.66 1.343a8.06 8.06 0 0 1 1.23-.698 8.03 8.03 0 0 0-.397 1.838Z"
      }), (0, _v1.jsx)("path", {
        d: "M4.05 13.815a7.574 7.574 0 0 0-.683 1.237 8.11 8.11 0 0 1-1.267-.795 10.567 10.567 0 0 1-.255-2.325c.337.39.682.75 1.057 1.065a9.12 9.12 0 0 1 .945-1.05c0 .63.068 1.26.203 1.868Z"
      }), (0, _v1.jsx)("path", {
        d: "M5.04 16.245c-.12.442-.203.907-.248 1.387a8.697 8.697 0 0 1-1.455-.345 10.122 10.122 0 0 1-.99-2.122c.443.27.885.487 1.343.667.157-.457.345-.892.562-1.297.195.592.465 1.17.795 1.702l-.007.008Z"
      }), (0, _v1.jsx)("path", {
        d: "M6.75 18.24c.03.457.097.922.202 1.402a8.707 8.707 0 0 1-1.492.128 9.862 9.862 0 0 1-1.605-1.703c.502.113.997.18 1.477.21 0-.487.038-.952.12-1.41.375.503.81.968 1.29 1.373h.008ZM4.56 8.655a8.51 8.51 0 0 0-1.29.577 9.101 9.101 0 0 1-.533-1.395c.323-.712.728-1.387 1.2-2.01.023.51.09 1.005.195 1.485.465-.135.93-.225 1.388-.262a8.358 8.358 0 0 0-.968 1.612l.008-.007Z"
      }), (0, _v1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5.265 4.942a9.305 9.305 0 0 0-.66 1.658c.48-.323.99-.578 1.485-.788.232-.495.517-.975.862-1.447a10.02 10.02 0 0 0-1.687.585v-.008Z"
      }), (0, _v1.jsx)("path", {
        d: "M22.102 10.995c-.285.42-.614.81-.952 1.155a8.267 8.267 0 0 0-1.035-.96 8.118 8.118 0 0 0-.397-1.838c.412.188.832.42 1.23.698a8.27 8.27 0 0 0 .66-1.343c.255.743.42 1.508.494 2.288Z"
      }), (0, _v1.jsx)("path", {
        d: "M21.9 14.257a8.71 8.71 0 0 1-1.267.795 7.574 7.574 0 0 0-.683-1.237 7.83 7.83 0 0 0 .203-1.868c.33.315.652.66.945 1.05.375-.315.72-.667 1.057-1.065 0 .78-.082 1.56-.255 2.325Z"
      }), (0, _v1.jsx)("path", {
        d: "M20.663 17.287a8.697 8.697 0 0 1-1.456.345 8.247 8.247 0 0 0-.247-1.387c.33-.533.592-1.11.795-1.703.21.398.405.833.563 1.298.45-.18.892-.405 1.342-.668a10.122 10.122 0 0 1-.99 2.123l-.008-.008Z"
      }), (0, _v1.jsx)("path", {
        d: "M18.532 19.77a9.611 9.611 0 0 1-1.492-.128c.105-.48.172-.945.203-1.402.48-.405.915-.863 1.29-1.373.082.45.12.923.12 1.41.48-.03.982-.097 1.477-.21a9.862 9.862 0 0 1-1.605 1.703h.008ZM21.262 7.837c-.142.495-.322.96-.532 1.395a8.51 8.51 0 0 0-1.29-.577 7.997 7.997 0 0 0-.968-1.613c.458.045.923.135 1.388.263.105-.473.172-.975.195-1.485.473.622.878 1.297 1.2 2.01l.008.007Z"
      }), (0, _v1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M17.902 5.812c.503.21 1.005.473 1.485.788a9.305 9.305 0 0 0-.66-1.658 10.02 10.02 0 0 0-1.687-.585c.338.473.63.96.863 1.448v.007Z"
      })]
    })
  });
  _v0.s(["StaffPicksFilled", 0, _v16], 0);
  var _v17 = _v0.i(0);
  let _v18 = _v0 => (0, _v1.jsx)(_v14.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsxs)("g", {
      fill: "currentColor",
      children: [(0, _v1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2 7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V7Zm9.08.108c-.475-.3-1.08.06-1.08.643v4.497c0 .583.605.944 1.08.645l3.569-2.243c.468-.294.468-1.006 0-1.3L11.08 7.108Z"
      }), (0, _v1.jsx)("path", {
        d: "M5 20a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Z"
      })]
    })
  });
  _v0.s(["getWatchSectionItems", 0, () => [{
    key: "watch",
    label: (0, _v9.translate)({
      singular: "Watch",
      dictionary: {
        es: {
          singular: "Ver"
        },
        "de-DE": {
          singular: "Anschauen"
        },
        "fr-FR": {
          singular: "Regarder"
        },
        "ja-JP": {
          singular: "鑑賞"
        },
        "ko-KR": {
          singular: "시청하기"
        },
        "pt-BR": {
          singular: "Assistir"
        },
        "zh-CN": {
          singular: "观看"
        }
      }
    }),
    href: "/watch",
    icon: (0, _v1.jsx)(_v17.WatchPlay, {}),
    iconActive: (0, _v1.jsx)(_v18, {}),
    destination: "watch",
    isActive: _v0 => "/watch" === _v0
  }, {
    key: "staff_picks",
    label: (0, _v9.translate)({
      singular: "Staff Picks",
      dictionary: {
        es: {
          singular: "Selecciones del equipo"
        },
        "de-DE": {
          singular: "Empfehlungen des Teams"
        },
        "fr-FR": {
          singular: "Sélections de l'équipe"
        },
        "ja-JP": {
          singular: "スタッフのおすすめ"
        },
        "ko-KR": {
          singular: "스태프 픽"
        },
        "pt-BR": {
          singular: "Escolhas da Equipe"
        },
        "zh-CN": {
          singular: "编辑精选"
        }
      }
    }),
    href: "/channels/staffpicks",
    icon: (0, _v1.jsx)(_v15, {}),
    iconActive: (0, _v1.jsx)(_v16, {}),
    destination: "staff_picks",
    isActive: _v0 => _v0.startsWith("/channels/staffpicks")
  }]], 0);
}