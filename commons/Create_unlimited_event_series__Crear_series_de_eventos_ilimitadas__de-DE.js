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
    _v9 = _v0.i(0);
  let _v10 = (0, _v2.default)(() => _v0.A(0), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v11 = [{
      Icon: _v5.BrowserWindow,
      text: (0, _v8.translate)({
        singular: "Create unlimited event series",
        dictionary: {
          es: {
            singular: "Crear series de eventos ilimitadas"
          },
          "de-DE": {
            singular: "Erstellen Sie unbegrenzte Veranstaltungsserien"
          },
          "fr-FR": {
            singular: "Créez un nombre illimité de séries d'événements"
          },
          "ja-JP": {
            singular: "無制限のイベントシリーズを作成する"
          },
          "ko-KR": {
            singular: "무제한 이벤트 시리즈 생성"
          },
          "pt-BR": {
            singular: "Crie séries de eventos ilimitadas"
          },
          "zh-CN": {
            singular: "创建无限活动系列"
          }
        }
      })
    }, {
      Icon: _v6._3GridTopLayout,
      text: (0, _v8.translate)({
        singular: "Customize with your branding, FAQs, and daily agendas",
        dictionary: {
          es: {
            singular: "Personaliza con tu identidad de marca, preguntas frecuentes y agendas diarias"
          },
          "de-DE": {
            singular: "Passen Sie sie mit Ihrem Branding, Ihren FAQs und täglichen Programmen an"
          },
          "fr-FR": {
            singular: "Personnalisez avec votre image de marque, vos FAQ et vos agendas quotidiens"
          },
          "ja-JP": {
            singular: "ブランド、よくある質問、日別のアジェンダでカスタマイズする"
          },
          "ko-KR": {
            singular: "브랜딩, 자주 묻는 질문 및 일일 일정으로 맞춤 설정"
          },
          "pt-BR": {
            singular: "Personalize com sua identidade visual, perguntas frequentes e agendas diárias"
          },
          "zh-CN": {
            singular: "使用您的品牌、常见问题与每日议程进行自定义"
          }
        }
      })
    }, {
      Icon: _v7.Translate,
      text: (0, _v8.translate)({
        singular: "Localize your series in up to 7 languages",
        dictionary: {
          es: {
            singular: "Localiza tus series en hasta 7 idiomas"
          },
          "de-DE": {
            singular: "Lokalisieren Sie Ihre Serien in bis zu 7 Sprachen"
          },
          "fr-FR": {
            singular: "Localisez vos séries en jusqu'à 7 langues"
          },
          "ja-JP": {
            singular: "シリーズを最大7言語でローカライズする"
          },
          "ko-KR": {
            singular: "시리즈를 최대 7개 언어로 현지화"
          },
          "pt-BR": {
            singular: "Localize suas séries em até 7 idiomas"
          },
          "zh-CN": {
            singular: "将您的系列本地化为多达 7 种语言"
          }
        }
      })
    }],
    _v12 = () => (0, _v1.jsx)(_v3.Flex, {
      direction: "column",
      gap: "2",
      children: _v11.map(({
        Icon: _v0,
        text: _v1
      }) => (0, _v1.jsxs)(_v3.Flex, {
        alignItems: "center",
        gap: "3",
        paddingX: "4",
        paddingY: "3",
        borderRadius: "lg",
        backgroundColor: "whiteAlpha.100",
        children: [(0, _v1.jsx)(_v0, {
          boxSize: "sm",
          color: "white",
          flexShrink: 0,
          "aria-hidden": "true"
        }), (0, _v1.jsx)(_v4.Text, {
          variant: "body-md",
          color: "white",
          children: _v1
        })]
      }, _v1))
    }),
    _v13 = {
      sidebar: {
        upsellName: "event_series_sidebar",
        location: "sidebar",
        paywallTrigger: "event_series_sidebar_contact_sales",
        paywallLocation: "side_nav"
      },
      trial_banner: {
        upsellName: "event_series_trial_banner",
        location: "trial_banner",
        paywallTrigger: "event_series_trial_banner_contact_sales",
        paywallLocation: "event_series_library"
      }
    };
  _v0.s(["EventSeriesContactSalesModal", 0, ({
    onClose: _v0,
    source: _v1
  }) => {
    let _v2 = (0, _v9.useViewer)(),
      {
        upsellName: _v3,
        location: _v4,
        paywallTrigger: _v5,
        paywallLocation: _v6
      } = _v13[_v1];
    return (0, _v1.jsx)(_v10, {
      apiUrl: _v2?.apiUrl,
      userConfig: {
        jwt: _v2?.jwt,
        userId: _v2?.user?.id
      },
      templateType: "enterprise",
      onClose: _v0,
      tracking: {
        params: {
          upsell_name: _v3,
          feature: "event_series",
          location: _v4,
          page: window.location.pathname
        },
        paywallTracking: {
          paywallTrigger: _v5,
          paywallLocation: _v6,
          paywallType: "popup",
          paywallFeature: "event_series"
        }
      },
      modalConfig: {
        mkcCode: "event-series",
        enterpriseTitle: (0, _v8.translate)({
          singular: "Showcase your events in one page",
          dictionary: {
            es: {
              singular: "Muestra tus eventos en una sola página"
            },
            "de-DE": {
              singular: "Präsentieren Sie Ihre Veranstaltungen auf einer Seite"
            },
            "fr-FR": {
              singular: "Mettez en valeur vos événements sur une seule page"
            },
            "ja-JP": {
              singular: "イベントを1ページで紹介する"
            },
            "ko-KR": {
              singular: "이벤트를 한 페이지에 전시"
            },
            "pt-BR": {
              singular: "Exiba seus eventos em uma única página"
            },
            "zh-CN": {
              singular: "在一页中展示您的活动"
            }
          }
        }),
        enterpriseSubtitle: (0, _v8.translate)({
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
        customFeaturesList: (0, _v1.jsx)(_v12, {})
      }
    });
  }]);
}