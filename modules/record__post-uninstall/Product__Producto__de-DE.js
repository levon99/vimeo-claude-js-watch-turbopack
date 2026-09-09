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
  let _v10 = {
      PRODUCTS: (0, _v9.translate)({
        singular: "Product",
        dictionary: {
          es: {
            singular: "Producto"
          },
          "de-DE": {
            singular: "Produkt"
          },
          "fr-FR": {
            singular: "Produit"
          },
          "ja-JP": {
            singular: "プロダクト"
          },
          "ko-KR": {
            singular: "제품"
          },
          "pt-BR": {
            singular: "Produtos"
          },
          "zh-CN": {
            singular: "产品"
          }
        }
      }),
      RESOURCES: (0, _v9.translate)({
        singular: "Resources",
        dictionary: {
          es: {
            singular: "Recursos"
          },
          "de-DE": {
            singular: "Ressourcen"
          },
          "fr-FR": {
            singular: "Ressources"
          },
          "ja-JP": {
            singular: "リソース"
          },
          "ko-KR": {
            singular: "리소스"
          },
          "pt-BR": {
            singular: "Recursos"
          },
          "zh-CN": {
            singular: "资源"
          }
        }
      }),
      VIDEO: (0, _v9.translate)({
        singular: "Video",
        dictionary: {
          "fr-FR": {
            singular: "Vidéo"
          },
          "ja-JP": {
            singular: "動画"
          },
          "ko-KR": {
            singular: "동영상"
          },
          "pt-BR": {
            singular: "Vídeo"
          },
          "zh-CN": {
            singular: "视频"
          }
        }
      })
    },
    _v11 = {
      HEADER: (0, _v9.translate)({
        singular: "Features",
        dictionary: {
          es: {
            singular: "Funciones"
          },
          "fr-FR": {
            singular: "Fonctionnalités"
          },
          "ja-JP": {
            singular: "機能"
          },
          "ko-KR": {
            singular: "기능"
          },
          "pt-BR": {
            singular: "Funções"
          },
          "zh-CN": {
            singular: "功能"
          }
        }
      }),
      LINKS: [{
        text: (0, _v9.translate)({
          singular: "Video Hosting",
          dictionary: {
            es: {
              singular: "Alojamiento de videos"
            },
            "de-DE": {
              singular: "Video-Hosting"
            },
            "fr-FR": {
              singular: "Hébergement vidéo"
            },
            "ja-JP": {
              singular: "動画ホスティング"
            },
            "ko-KR": {
              singular: "동영상 호스팅"
            },
            "pt-BR": {
              singular: "Hospedagem de Vídeos"
            },
            "zh-CN": {
              singular: "视频托管"
            }
          }
        }),
        url: "/features/online-video-hosting"
      }, {
        text: (0, _v9.translate)({
          singular: "Video Editor",
          dictionary: {
            es: {
              singular: "Editor de videos"
            },
            "de-DE": {
              singular: "Video-Editor"
            },
            "fr-FR": {
              singular: "Monteur vidéo"
            },
            "ja-JP": {
              singular: "ビデオエディター"
            },
            "ko-KR": {
              singular: "동영상 편집자"
            },
            "pt-BR": {
              singular: "Editor de vídeo"
            },
            "zh-CN": {
              singular: "视频编辑"
            }
          }
        }),
        url: "/features/video-editor"
      }, {
        text: (0, _v9.translate)({
          singular: "Send Videos",
          dictionary: {
            es: {
              singular: "Enviar videos"
            },
            "de-DE": {
              singular: "Videos senden"
            },
            "fr-FR": {
              singular: "Envoyer des vidéos"
            },
            "ja-JP": {
              singular: "動画を送信"
            },
            "ko-KR": {
              singular: "동영상 전송"
            },
            "pt-BR": {
              singular: "Enviar vídeos"
            },
            "zh-CN": {
              singular: "发送视频"
            }
          }
        }),
        url: "/features/send-videos"
      }, {
        text: (0, _v9.translate)({
          singular: "Live Streaming",
          dictionary: {
            es: {
              singular: "Transmisión en vivo"
            },
            "de-DE": {
              singular: "Livestreaming"
            },
            "fr-FR": {
              singular: "Streaming en direct"
            },
            "ja-JP": {
              singular: "ライブストリーミング"
            },
            "ko-KR": {
              singular: "라이브 스트리밍"
            },
            "pt-BR": {
              singular: "Transmissão ao vivo"
            },
            "zh-CN": {
              singular: "直播"
            }
          }
        }),
        url: "/features/livestreaming"
      }, {
        text: (0, _v9.translate)({
          singular: "Video Player",
          dictionary: {
            es: {
              singular: "Reproductor de video"
            },
            "de-DE": {
              singular: "Video-Player"
            },
            "fr-FR": {
              singular: "Player vidéo"
            },
            "ja-JP": {
              singular: "動画プレーヤー"
            },
            "ko-KR": {
              singular: "동영상 플레이어"
            },
            "pt-BR": {
              singular: "Reprodutor de vídeo"
            },
            "zh-CN": {
              singular: "视频播放器"
            }
          }
        }),
        url: "/features/video-player"
      }, {
        text: (0, _v9.translate)({
          singular: "Vimeo AI",
          dictionary: {
            "fr-FR": {
              singular: "IA Vimeo"
            }
          }
        }),
        url: "/features/vimeo-ai"
      }, {
        text: (0, _v9.translate)({
          singular: "Video Analytics",
          dictionary: {
            es: {
              singular: "Estadísticas del video"
            },
            "de-DE": {
              singular: "Video-Analytik"
            },
            "fr-FR": {
              singular: "Analyses vidéo"
            },
            "ja-JP": {
              singular: "動画分析"
            },
            "ko-KR": {
              singular: "동영상 분석"
            },
            "pt-BR": {
              singular: "Análise de vídeos"
            },
            "zh-CN": {
              singular: "视频分析"
            }
          }
        }),
        url: "/features/video-analytics"
      }, {
        text: (0, _v9.translate)({
          singular: "Video Privacy",
          dictionary: {
            es: {
              singular: "Privacidad de Vimeo"
            },
            "de-DE": {
              singular: "Video-Datenschutz"
            },
            "fr-FR": {
              singular: "Confidentialité de la vidéo"
            },
            "ja-JP": {
              singular: "動画プライバシー"
            },
            "ko-KR": {
              singular: "동영상 프라이버시"
            },
            "pt-BR": {
              singular: "Privacidade do vídeo"
            },
            "zh-CN": {
              singular: "视频隐私"
            }
          }
        }),
        url: "/features/video-privacy"
      }, {
        text: (0, _v9.translate)({
          singular: "Video Library",
          dictionary: {
            es: {
              singular: "Videoteca"
            },
            "ja-JP": {
              singular: "動画ライブラリ"
            },
            "ko-KR": {
              singular: "동영상 라이브러리"
            },
            "pt-BR": {
              singular: "Biblioteca de Vídeos"
            },
            "zh-CN": {
              singular: "视频库"
            }
          }
        }),
        url: "/features/video-library"
      }, {
        text: (0, _v9.translate)({
          singular: "Interactive Video",
          dictionary: {
            es: {
              singular: "Video interactivo"
            },
            "de-DE": {
              singular: "Interaktives Video"
            },
            "fr-FR": {
              singular: "Vidéo interactive"
            },
            "ja-JP": {
              singular: "インタラクティブ動画"
            },
            "ko-KR": {
              singular: "인터랙티브 동영상"
            },
            "pt-BR": {
              singular: "Vídeo interativo"
            },
            "zh-CN": {
              singular: "交互式视频"
            }
          }
        }),
        url: "/features/interactive-video"
      }, {
        text: (0, _v9.translate)({
          singular: "Virtual Events",
          dictionary: {
            es: {
              singular: "Eventos virtuales"
            },
            "de-DE": {
              singular: "Virtuelle Events"
            },
            "fr-FR": {
              singular: "Événements virtuels"
            },
            "ja-JP": {
              singular: "バーチャルイベント"
            },
            "ko-KR": {
              singular: "가상 이벤트"
            },
            "pt-BR": {
              singular: "Eventos virtuais"
            },
            "zh-CN": {
              singular: "虚拟活动"
            }
          }
        }),
        url: "/features/virtual-events"
      }, {
        text: (0, _v9.translate)({
          singular: "Video Collaboration",
          dictionary: {
            es: {
              singular: "Colaboración de video"
            },
            "de-DE": {
              singular: "Video-Zusammenarbeit"
            },
            "fr-FR": {
              singular: "Collaboration vidéo"
            },
            "ja-JP": {
              singular: "動画で共同作業"
            },
            "ko-KR": {
              singular: "동영상 콜라보레이션"
            },
            "pt-BR": {
              singular: "Colaboração de Vídeo"
            },
            "zh-CN": {
              singular: "视频协作"
            }
          }
        }),
        url: "/features/video-collaboration"
      }, {
        text: (0, _v9.translate)({
          singular: "Webinars",
          dictionary: {
            es: {
              singular: "Seminarios web"
            },
            "de-DE": {
              singular: "Webinare"
            },
            "fr-FR": {
              singular: "Webinaires"
            },
            "ja-JP": {
              singular: "ウェビナー"
            },
            "ko-KR": {
              singular: "웨비나"
            },
            "zh-CN": {
              singular: "网络研讨会"
            }
          }
        }),
        url: "/features/webinar"
      }, {
        text: (0, _v9.translate)({
          singular: "Video SEO",
          dictionary: {
            es: {
              singular: "SEO de videos"
            },
            "de-DE": {
              singular: "Video-SEO"
            },
            "fr-FR": {
              singular: "Référencement des vidéos"
            },
            "ja-JP": {
              singular: "動画SEO"
            },
            "ko-KR": {
              singular: "동영상 SEO"
            },
            "pt-BR": {
              singular: "SEO de vídeo"
            },
            "zh-CN": {
              singular: "视频 SEO"
            }
          }
        }),
        url: "/features/video-seo"
      }]
    },
    _v12 = {
      HEADER: (0, _v9.translate)({
        singular: "Solutions",
        dictionary: {
          es: {
            singular: "Soluciones"
          },
          "de-DE": {
            singular: "Lösungen"
          },
          "ja-JP": {
            singular: "ソリューション"
          },
          "ko-KR": {
            singular: "솔루션"
          },
          "pt-BR": {
            singular: "Soluções"
          },
          "zh-CN": {
            singular: "解决方案"
          }
        }
      }),
      LINKS: [{
        text: (0, _v9.translate)({
          singular: "Streaming",
          dictionary: {
            es: {
              singular: "Emisión en continuo"
            },
            "ja-JP": {
              singular: "ストリーミング"
            },
            "ko-KR": {
              singular: "스트리밍"
            },
            "pt-BR": {
              singular: "Transmitindo"
            },
            "zh-CN": {
              singular: "流"
            }
          }
        }),
        url: "/solutions/vimeo-streaming"
      }, {
        text: (0, _v9.translate)({
          singular: "Marketing",
          dictionary: {
            "ja-JP": {
              singular: "マーケティング"
            },
            "ko-KR": {
              singular: "마케팅"
            },
            "zh-CN": {
              singular: "营销"
            }
          }
        }),
        url: "/solutions/marketing"
      }, {
        text: (0, _v9.translate)({
          singular: "Monetization",
          dictionary: {
            es: {
              singular: "Monetización"
            },
            "de-DE": {
              singular: "Monetarisierung"
            },
            "fr-FR": {
              singular: "Commercialisation"
            },
            "ja-JP": {
              singular: "収益化"
            },
            "ko-KR": {
              singular: "수익화"
            },
            "pt-BR": {
              singular: "Monetização"
            },
            "zh-CN": {
              singular: "变现"
            }
          }
        }),
        url: "/solutions/video-monetization"
      }, {
        text: (0, _v9.translate)({
          singular: "Communications",
          dictionary: {
            es: {
              singular: "Comunicaciones"
            },
            "de-DE": {
              singular: "Kommunikation"
            },
            "ja-JP": {
              singular: "コミュニケーション"
            },
            "ko-KR": {
              singular: "커뮤니케이션"
            },
            "pt-BR": {
              singular: "Comunicações"
            },
            "zh-CN": {
              singular: "通信"
            }
          }
        }),
        url: "/solutions/communications"
      }, {
        text: (0, _v9.translate)({
          singular: "Learning & Development",
          dictionary: {
            es: {
              singular: "Aprendizaje y desarrollo"
            },
            "de-DE": {
              singular: "Lernen und Entwicklung"
            },
            "fr-FR": {
              singular: "Formation et développement"
            },
            "ja-JP": {
              singular: "学習と人材育成"
            },
            "ko-KR": {
              singular: "학습 및 개발"
            },
            "pt-BR": {
              singular: "Aprendizagem e desenvolvimento"
            },
            "zh-CN": {
              singular: "学习与发展"
            }
          }
        }),
        url: "/solutions/learning-and-development"
      }]
    },
    _v13 = {
      LINKS: [{
        text: (0, _v9.translate)({
          singular: "Help Center",
          dictionary: {
            es: {
              singular: "Centro de ayuda"
            },
            "de-DE": {
              singular: "Hilfecenter"
            },
            "fr-FR": {
              singular: "Centre d'aide "
            },
            "ja-JP": {
              singular: "ヘルプセンター"
            },
            "ko-KR": {
              singular: "도움말 센터"
            },
            "pt-BR": {
              singular: "Central de Ajuda"
            },
            "zh-CN": {
              singular: "帮助中心"
            }
          }
        }),
        url: "https://help.vimeo.com/"
      }, {
        text: (0, _v9.translate)({
          singular: "Blog",
          dictionary: {
            "fr-FR": {
              singular: "Blog "
            },
            "ja-JP": {
              singular: "ブログ"
            },
            "ko-KR": {
              singular: "블로그"
            },
            "zh-CN": {
              singular: "博客"
            }
          }
        }),
        url: "/blog"
      }, {
        text: (0, _v9.translate)({
          singular: "Media Kit",
          dictionary: {
            es: {
              singular: "Kit de medios"
            },
            "de-DE": {
              singular: "Medienpaket"
            },
            "fr-FR": {
              singular: "Dossier de presse"
            },
            "ja-JP": {
              singular: "メディアキット"
            },
            "ko-KR": {
              singular: "미디어 키트"
            },
            "pt-BR": {
              singular: "Kit de mídia"
            },
            "zh-CN": {
              singular: "媒体工具包"
            }
          }
        }),
        url: "/press/media-kit"
      }, {
        text: (0, _v9.translate)({
          singular: "About",
          dictionary: {
            es: {
              singular: "Acerca de"
            },
            "de-DE": {
              singular: "Über uns"
            },
            "fr-FR": {
              singular: "À propos"
            },
            "ko-KR": {
              singular: "소개"
            },
            "pt-BR": {
              singular: "Sobre"
            },
            "zh-CN": {
              singular: "关于"
            }
          }
        }),
        url: "/about"
      }, {
        text: (0, _v9.translate)({
          singular: "Careers",
          dictionary: {
            es: {
              singular: "Carreras"
            },
            "de-DE": {
              singular: "Karriere"
            },
            "fr-FR": {
              singular: "Carrières"
            },
            "ja-JP": {
              singular: "キャリア"
            },
            "ko-KR": {
              singular: "채용"
            },
            "pt-BR": {
              singular: "Carreiras"
            },
            "zh-CN": {
              singular: "职业生涯"
            }
          }
        }),
        url: "/careers"
      }, {
        text: (0, _v9.translate)({
          singular: "Sitemap",
          dictionary: {
            es: {
              singular: "Mapa del sitio"
            },
            "fr-FR": {
              singular: "Plan du site"
            },
            "ja-JP": {
              singular: "サイトマップ"
            },
            "ko-KR": {
              singular: "사이트맵"
            },
            "pt-BR": {
              singular: "Mapa do Site"
            },
            "zh-CN": {
              singular: "网站地图"
            }
          }
        }),
        url: "/site_map"
      }]
    },
    _v14 = {
      LINKS: [{
        text: (0, _v9.translate)({
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
        url: "/channels/bestofstaffpicks"
      }, {
        text: (0, _v9.translate)({
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
        url: "/watch"
      }, {
        text: (0, _v9.translate)({
          singular: "Categories",
          dictionary: {
            es: {
              singular: "Categorías"
            },
            "de-DE": {
              singular: "Kategorien"
            },
            "fr-FR": {
              singular: "Catégories"
            },
            "ja-JP": {
              singular: "カテゴリー"
            },
            "ko-KR": {
              singular: "카테고리"
            },
            "pt-BR": {
              singular: "Categorias"
            },
            "zh-CN": {
              singular: "类别"
            }
          }
        }),
        url: "/categories"
      }, {
        text: (0, _v9.translate)({
          singular: "Channels",
          dictionary: {
            es: {
              singular: "Canales"
            },
            "de-DE": {
              singular: "Kanäle"
            },
            "fr-FR": {
              singular: "Chaînes"
            },
            "ja-JP": {
              singular: "チャンネル"
            },
            "ko-KR": {
              singular: "채널"
            },
            "pt-BR": {
              singular: "Canais"
            },
            "zh-CN": {
              singular: "频道"
            }
          }
        }),
        url: "/channels"
      }, {
        text: (0, _v9.translate)({
          singular: "On Demand",
          dictionary: {
            "ja-JP": {
              singular: "オンデマンド"
            },
            "ko-KR": {
              singular: "온디맨드"
            }
          }
        }),
        url: "/ondemand"
      }]
    },
    _v15 = {
      TERMS: {
        text: (0, _v9.translate)({
          singular: "Terms",
          dictionary: {
            es: {
              singular: "Condiciones"
            },
            "de-DE": {
              singular: "Nutzungsbedingungen"
            },
            "fr-FR": {
              singular: "Conditions"
            },
            "ja-JP": {
              singular: "利用規約"
            },
            "ko-KR": {
              singular: "이용 약관"
            },
            "pt-BR": {
              singular: "Termos"
            },
            "zh-CN": {
              singular: "条款"
            }
          }
        }),
        url: "/terms"
      },
      PRIVACY: {
        text: (0, _v9.translate)({
          singular: "Privacy",
          dictionary: {
            es: {
              singular: "Privacidad"
            },
            "de-DE": {
              singular: "Datenschutz"
            },
            "fr-FR": {
              singular: "Confidentialité "
            },
            "ja-JP": {
              singular: "プライバシー"
            },
            "ko-KR": {
              singular: "프라이버시"
            },
            "pt-BR": {
              singular: "Privacidade"
            },
            "zh-CN": {
              singular: "隐私"
            }
          }
        }),
        url: "/privacy"
      },
      CA_PRIVACY: {
        text: (0, _v9.translate)({
          singular: "U.S State Privacy",
          dictionary: {
            "de-DE": {
              singular: "Datenschutz in US-Bundesstaaten"
            }
          }
        }),
        url: "/privacy/us-state-privacy"
      },
      IMPRESSUM: {
        text: "Impressum",
        url: "/leo/guidelines/impressum"
      },
      COPYRIGHT: {
        text: (0, _v9.translate)({
          singular: "Copyright",
          dictionary: {
            es: {
              singular: "Derechos de autor"
            },
            "de-DE": {
              singular: "Urheberrecht"
            },
            "fr-FR": {
              singular: "Droit d'auteur"
            },
            "ja-JP": {
              singular: "著作権"
            },
            "ko-KR": {
              singular: "저작권"
            },
            "pt-BR": {
              singular: "Direitos Autorais"
            },
            "zh-CN": {
              singular: "版权"
            }
          }
        }),
        url: "/dmca"
      },
      COOKIES: {
        text: (0, _v9.translate)({
          singular: "Cookies",
          dictionary: {
            "ko-KR": {
              singular: "쿠키"
            },
            "zh-CN": {
              singular: "Cookie"
            }
          }
        }),
        url: "/cookie_policy"
      },
      TERMINATE: {
        text: (0, _v9.translate)({
          singular: "Terminate contracts here",
          dictionary: {
            es: {
              singular: "Rescindir contratos aquí"
            },
            "de-DE": {
              singular: "Verträge hier kündigen"
            },
            "fr-FR": {
              singular: "Résilier les contrats ici"
            },
            "ja-JP": {
              singular: "ここから契約を解除"
            },
            "ko-KR": {
              singular: "계약 해지"
            },
            "pt-BR": {
              singular: "Rescindir contratos aqui"
            },
            "zh-CN": {
              singular: "在这里终止合同"
            }
          }
        }),
        url: "/settings/billing/membership_plan/optout"
      }
    },
    _v16 = {
      [_v10.PRODUCTS]: {
        FEATURES: _v11,
        SOLUTIONS: _v12
      },
      [_v10.VIDEO]: {
        VIDEO: _v14
      },
      [_v10.RESOURCES]: {
        RESOURCES: _v13
      }
    };
  var _v17 = _v0.i(0);
  let _v18 = ({
    children: _v0,
    color: _v1,
    ..._v2
  }) => (0, _v1.jsx)(_v17.Link, {
    color: _v1,
    ..._v2,
    children: _v0
  });
  _v0.s(["FooterLink", 0, _v18], 0);
  let _v19 = ({
      header: _v0,
      links: _v1,
      blockList: _v2,
      ..._v3
    }) => {
      let _v4 = _v2 && _v2.length > 0 ? _v1.filter(_v0 => !_v2.includes(_v0.text)) : _v1;
      return (0, _v1.jsxs)(_v3.VStack, {
        align: "flex-start",
        spacing: 200,
        ..._v3,
        children: [_v0 ? (0, _v1.jsx)(_v8.Header, {
          as: "h3",
          variant: "heading-sm",
          textAlign: "center",
          size: "xl",
          children: _v0
        }) : null, (0, _v1.jsx)(_v3.VStack, {
          align: "flex-start",
          as: "ul",
          spacing: 75,
          children: _v4.map((_v0, _v1) => (0, _v1.jsx)("li", {
            children: (0, _v1.jsx)(_v18, {
              href: _v0.url,
              target: "_blank",
              color: "text-secondary",
              children: _v0.text
            })
          }, _v1))
        })]
      });
    },
    _v20 = ({
      blockList: _v0
    }) => {
      let _v1 = _v16[_v10.PRODUCTS],
        _v2 = _v1.FEATURES.LINKS,
        _v3 = _v1.SOLUTIONS.LINKS,
        _v4 = _v16[_v10.VIDEO].VIDEO.LINKS,
        _v5 = _v16[_v10.RESOURCES].RESOURCES.LINKS;
      return (0, _v1.jsxs)(_v2.Grid, {
        w: "100%",
        gridTemplateColumns: "2fr 1fr 1fr",
        columnGap: 100,
        children: [(0, _v1.jsxs)(_v7.Stack, {
          direction: "column",
          gap: 100,
          children: [(0, _v1.jsx)(_v8.Header, {
            as: "h2",
            variant: "heading-md",
            casing: "capitalize",
            textAlign: "left",
            size: "xl",
            children: _v10.PRODUCTS
          }), (0, _v1.jsxs)(_v2.Grid, {
            w: "100%",
            gridTemplateColumns: "1fr 1fr 1fr",
            columnGap: 25,
            children: [(0, _v1.jsxs)(_v7.Stack, {
              direction: "column",
              gap: 100,
              children: [(0, _v1.jsx)(_v7.Stack, {
                direction: "row",
                justifyContent: "start",
                gap: 200,
                children: (0, _v1.jsx)(_v8.Header, {
                  as: "h3",
                  variant: "heading-sm",
                  casing: "capitalize",
                  size: "xl",
                  children: _v1.FEATURES.HEADER
                })
              }), (0, _v1.jsxs)(_v7.Stack, {
                direction: "row",
                gap: 100,
                children: [(0, _v1.jsx)(_v7.Stack, {
                  width: "max-content",
                  children: (0, _v1.jsx)(_v19, {
                    links: _v2.slice(0, 6),
                    blockList: _v0
                  })
                }), (0, _v1.jsx)(_v7.Stack, {
                  width: "max-content",
                  children: (0, _v1.jsx)(_v19, {
                    links: _v2.slice(6, 12),
                    blockList: _v0
                  })
                })]
              })]
            }), (0, _v1.jsxs)(_v7.Stack, {
              direction: "column",
              gap: 100,
              children: [(0, _v1.jsx)(_v8.Header, {
                as: "h3",
                variant: "heading-sm",
                casing: "capitalize",
                size: "xl",
                children: _v1.SOLUTIONS.HEADER
              }), (0, _v1.jsx)(_v19, {
                links: _v3.slice(0, 4),
                blockList: _v0
              })]
            })]
          })]
        }), (0, _v1.jsxs)(_v7.Stack, {
          direction: "column",
          gap: 200,
          children: [(0, _v1.jsx)(_v8.Header, {
            as: "h2",
            variant: "heading-md",
            casing: "capitalize",
            size: "xl",
            children: _v10.VIDEO
          }), (0, _v1.jsx)(_v19, {
            links: _v4,
            blockList: _v0
          })]
        }), (0, _v1.jsxs)(_v7.Stack, {
          direction: "column",
          gap: 200,
          children: [(0, _v1.jsx)(_v8.Header, {
            as: "h2",
            variant: "heading-md",
            casing: "capitalize",
            size: "xl",
            children: _v10.RESOURCES
          }), (0, _v1.jsx)(_v19, {
            links: _v5,
            blockList: _v0
          })]
        })]
      });
    };
  var _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0);
  let _v33 = ({
    blockList: _v0
  }) => (0, _v1.jsx)(_v27.Accordion, {
    allowMultiple: !0,
    w: "100%",
    children: Object.keys(_v16).map(_v0 => (0, _v1.jsx)(_v29.AccordionItem, {
      children: ({
        isExpanded: _v0
      }) => (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsxs)(_v28.AccordionButton, {
          p: "200",
          children: [(0, _v1.jsx)(_v26.Text, {
            as: "span",
            variant: "heading-md",
            children: _v0
          }), _v0 ? (0, _v1.jsx)(_v31.Minus, {
            boxSize: "xs"
          }) : (0, _v1.jsx)(_v32.Plus, {
            boxSize: "xs"
          })]
        }), (0, _v1.jsx)(_v30.AccordionPanel, {
          pt: "0",
          children: (0, _v1.jsx)(_v3.VStack, {
            align: "stretch",
            spacing: "300",
            children: Object.keys(_v16[_v0]).map(_v0 => (0, _v1.jsx)(_v19, {
              header: _v16[_v0][_v0].HEADER,
              links: _v16[_v0][_v0].LINKS,
              blockList: _v0
            }, _v0))
          })
        })]
      })
    }, _v0))
  });
  var _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0);
  let _v37 = ({
      onSignUpCtaClick: _v0,
      ..._v1
    }) => (0, _v1.jsxs)(_v3.VStack, {
      display: "inline-flex",
      align: "flex-start",
      spacing: 200,
      ..._v1,
      children: [(0, _v1.jsx)(_v26.Text, {
        variant: "heading-xl",
        children: (0, _v9.translate)({
          singular: "Get started for free",
          dictionary: {
            es: {
              singular: "Probar gratis"
            },
            "de-DE": {
              singular: "Gratis nutzen"
            },
            "fr-FR": {
              singular: "Essayez"
            },
            "ja-JP": {
              singular: "無料で始める"
            },
            "ko-KR": {
              singular: "무료 시작"
            },
            "pt-BR": {
              singular: "Comece grátis"
            }
          }
        })
      }), (0, _v1.jsxs)(_v3.VStack, {
        as: "ul",
        align: "flex-start",
        spacing: 75,
        children: [(0, _v1.jsx)(_v18, {
          href: (0, _v36.buildUpgradePlanUrl)({
            paywallTrigger: "footer_sign_up_widget_pricing_link",
            paywallLocation: "footer",
            paywallFeature: "general"
          }),
          children: (0, _v9.translate)({
            singular: "Pricing",
            dictionary: {
              es: {
                singular: "Precio"
              },
              "de-DE": {
                singular: "Preise"
              },
              "fr-FR": {
                singular: "Tarifs"
              },
              "ja-JP": {
                singular: "料金"
              },
              "ko-KR": {
                singular: "가격 책정"
              },
              "pt-BR": {
                singular: "Preços"
              },
              "zh-CN": {
                singular: "定价"
              }
            }
          })
        }), (0, _v1.jsx)(_v18, {
          href: "/enterprise/contact-us",
          children: (0, _v9.translate)({
            singular: "Contact sales",
            dictionary: {
              es: {
                singular: "Comunicarse con Ventas"
              },
              "de-DE": {
                singular: "Sales-Team kontaktieren"
              },
              "fr-FR": {
                singular: "Service commercial"
              },
              "ja-JP": {
                singular: "営業チームへ問い合わせる"
              },
              "ko-KR": {
                singular: "영업팀에 문의"
              },
              "pt-BR": {
                singular: "Falar com vendas"
              },
              "zh-CN": {
                singular: "联系销售"
              }
            }
          })
        }), (0, _v1.jsx)(_v18, {
          href: "/watch-demo",
          children: (0, _v9.translate)({
            singular: "Watch demos",
            dictionary: {
              es: {
                singular: "Ver demostraciones"
              },
              "de-DE": {
                singular: "Demos ansehen"
              },
              "fr-FR": {
                singular: "Regarder les démos"
              },
              "ja-JP": {
                singular: "デモ版を視聴"
              },
              "ko-KR": {
                singular: "데모 보기"
              },
              "pt-BR": {
                singular: "Ver demonstrações"
              },
              "zh-CN": {
                singular: "观看演示"
              }
            }
          })
        })]
      }), (0, _v1.jsx)(_v34.Button, {
        size: "lg",
        rightIcon: (0, _v1.jsx)(_v35.ArrowRight, {}),
        onClick: _v0,
        children: (0, _v9.translate)({
          singular: "Join",
          dictionary: {
            es: {
              singular: "Unirse"
            },
            "de-DE": {
              singular: "Registrieren"
            },
            "fr-FR": {
              singular: "S'inscrire"
            },
            "ja-JP": {
              singular: "登録"
            },
            "ko-KR": {
              singular: "가입"
            },
            "pt-BR": {
              singular: "Inscrever-se"
            },
            "zh-CN": {
              singular: "加入"
            }
          }
        })
      })]
    }),
    _v38 = _v0 => (0, _v1.jsxs)(_v3.VStack, {
      display: "inline-flex",
      align: "flex-start",
      spacing: 200,
      ..._v0,
      children: [(0, _v1.jsx)(_v26.Text, {
        variant: "heading-md",
        children: (0, _v9.translate)({
          singular: "24/7 customer support",
          dictionary: {
            es: {
              singular: "Atención al cliente 24x7"
            },
            "de-DE": {
              singular: "Wir sind 24/7 für Sie da"
            },
            "fr-FR": {
              singular: "Assistance client 24 h/24 et 7 j/7"
            },
            "ja-JP": {
              singular: "24時間年中無休のサポート"
            },
            "ko-KR": {
              singular: "연중무휴 24시간 지원"
            },
            "pt-BR": {
              singular: "Suporte ao cliente 24/7"
            },
            "zh-CN": {
              singular: "全天候客户支持"
            }
          }
        })
      }), (0, _v1.jsx)(_v26.Text, {
        variant: "body-lg",
        children: (0, _v9.translate)({
          singular: "Our customer support team is available to help 24/7. Enterprise members also receive dedicated account managers and a guaranteed uptime SLA.",
          dictionary: {
            es: {
              singular: "Nuestro equipo de asistencia al cliente está disponible las 24 horas, los 7 días de la semana. Los miembros Enterprise también reciben gerentes de cuenta especializados y un SLA de tiempo de actividad garantizado."
            },
            "de-DE": {
              singular: "Unser Kundensupport steht Ihnen rund um die Uhr zur Seite. Enterprise-Mitglieder profitieren außerdem von der Unterstützung durch dedizierte Kundenbetreuer und einem SLA für garantierte Verfügbarkeit."
            },
            "fr-FR": {
              singular: "Notre équipe d'assistance client est disponible 24 h/24 et 7 j/7. Les membres Entreprise bénéficient également de l'aide d'un responsable de compte attitré et d'une disponibilité garantie."
            },
            "ja-JP": {
              singular: "Vimeoのカスタマーサポートチームが24時間年中無休で対応します。Enterpriseメンバーには、専用のアカウントマネージャーがつき、保証された稼働時間SLAが提供されます。"
            },
            "ko-KR": {
              singular: "연중무휴 24시간 고객 지원이 제공됩니다. Enterprise 회원에게는 전담 계정 관리자와 보장된 가동 시간 SLA 또한 제공합니다."
            },
            "pt-BR": {
              singular: "Nossa equipe de suporte ao cliente está disponível para ajudar 24 horas por dia, 7 dias da semana. Quem assina o Enterprise também pode contar com uma equipe de gerentes de conta dedicada e um SLA de tempo de atividade garantido."
            },
            "zh-CN": {
              singular: "我们的客户支持团队全天候提供帮助。我们还会向 Enterprise 计划用户提供专职客户经理以及保证正常运行时间的服务级别协议。"
            }
          }
        })
      }), (0, _v1.jsx)(_v34.Button, {
        variant: "secondary",
        size: "lg",
        rightIcon: (0, _v1.jsx)(_v35.ArrowRight, {}),
        children: (0, _v9.translate)({
          singular: "Contact support",
          dictionary: {
            es: {
              singular: "Contactar al equipo de asistencia"
            },
            "de-DE": {
              singular: "Support kontaktieren"
            },
            "fr-FR": {
              singular: "Contacter l'assistance"
            },
            "ja-JP": {
              singular: "サポートへのお問い合わせ"
            },
            "ko-KR": {
              singular: "지원팀에 문의"
            },
            "pt-BR": {
              singular: "Entre em contato com o suporte"
            },
            "zh-CN": {
              singular: "联系支持团队"
            }
          }
        })
      })]
    }),
    _v39 = _v0 => (0, _v1.jsx)(_v5.Center, {
      w: "100%",
      backgroundColor: "fill-surface",
      p: {
        base: 200,
        lg: 300
      },
      mt: "auto",
      children: (0, _v1.jsx)(_v3.VStack, {
        maxW: "1536px",
        w: "100%",
        spacing: {
          base: 400,
          md: (0, _v4.rem)(80)
        },
        sx: {
          "& > :first-child:not(:last-child)": {
            mt: {
              base: 200,
              lg: 300
            }
          }
        },
        ..._v0
      })
    });
  _v39.Widgets = ({
    onSignUpCtaClick: _v0
  }) => (0, _v1.jsxs)(_v2.Grid, {
    gridTemplateColumns: {
      base: "1fr",
      md: "repeat(6, 1fr)"
    },
    gap: {
      base: "500",
      md: "0"
    },
    children: [(0, _v1.jsx)(_v37, {
      onSignUpCtaClick: _v0,
      gridColumn: {
        base: "",
        md: "1 / span 2"
      }
    }), (0, _v1.jsx)(_v38, {
      gridColumn: {
        base: "",
        md: "5 / span 2"
      }
    })]
  }), _v39.Links = ({
    blockList: _v0
  }) => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v6.Show, {
      below: "md",
      children: (0, _v1.jsx)(_v33, {
        blockList: _v0
      })
    }), (0, _v1.jsx)(_v6.Show, {
      above: "md",
      children: (0, _v1.jsx)(_v20, {
        blockList: _v0
      })
    })]
  }), _v39.Legal = ({
    impressumQualifies: _v0,
    terminateContractQualifies: _v1,
    previewMode: _v2 = !1
  }) => {
    let _v3 = (0, _v21.useRef)(!1);
    (0, _v21.useEffect)(() => {
      let {
        airgap: _v0
      } = window;
      window.onload = () => {
        _v0?.ready(() => {
          _v3.current = !0;
        });
      };
    });
    let _v4 = "javascript:void(0)",
      _v5 = [(0, _v1.jsx)(_v26.Text, {
        color: "text-secondary",
        variant: "body-lg",
        children: (0, _v9.translate)({
          singular: "© {YEAR} Vimeo.com, Inc. All rights reserved.",
          replacements: {
            YEAR: new Date().getFullYear().toString()
          },
          dictionary: {
            es: {
              singular: "© {YEAR} Vimeo.com, Inc. Todos los derechos reservados."
            },
            "de-DE": {
              singular: "© {YEAR} Vimeo.com, Inc. Alle Rechte vorbehalten."
            },
            "fr-FR": {
              singular: "© {YEAR} Vimeo.com, Inc. Tous droits réservés."
            },
            "ja-JP": {
              singular: "© {YEAR} Vimeo.com,Inc.All rights reserved.（不許複製・禁無断転載）"
            },
            "ko-KR": {
              singular: "© {YEAR} Vimeo.com, Inc. 모든 권리 보유."
            },
            "pt-BR": {
              singular: "© {YEAR} Vimeo.com, Inc. Todos os direitos reservados."
            },
            "zh-CN": {
              singular: "© {YEAR} Vimeo.com, Inc. 保留所有权利。"
            }
          }
        })
      }, "vimeo"), (0, _v1.jsx)(_v18, {
        color: "text-secondary",
        href: _v2 ? _v4 : _v15.TERMS.url,
        children: _v15.TERMS.text
      }, _v15.TERMS.text), (0, _v1.jsx)(_v18, {
        color: "text-secondary",
        href: _v2 ? _v4 : _v15.PRIVACY.url,
        children: _v15.PRIVACY.text
      }, _v15.PRIVACY.text), !_v0 && _v3 ? (0, _v1.jsx)(_v18, {
        color: "text-secondary",
        onClick: _v2 ? void 0 : () => {
          _v22.BigPictureClient.sendEvent(new _v22.Event("vimeo.click", 75, {
            page: "footer",
            location: "footer",
            target: "transcend_dialogue_box",
            name: "do_not_sell",
            copy: "do_not_sell_my_personal_information",
            feature: "do_not_sell",
            type: "general"
          })), window.transcend?.showConsentManager({
            viewState: "DoNotSellExplainer"
          });
        },
        cursor: "pointer",
        children: (0, _v9.translate)({
          singular: "Your Privacy Choices",
          dictionary: {
            es: {
              singular: "Tus opciones de privacidad"
            },
            "de-DE": {
              singular: "Ihre Datenschutzoptionen"
            },
            "fr-FR": {
              singular: "Vos choix en matière de confidentialité"
            },
            "ja-JP": {
              singular: "お客様のプライバシー選択"
            },
            "ko-KR": {
              singular: "귀하의 개인정보 선택"
            },
            "pt-BR": {
              singular: "Suas opções de privacidade"
            },
            "zh-CN": {
              singular: "您的隐私选择"
            }
          }
        })
      }) : null, (0, _v1.jsx)(_v18, {
        color: "text-secondary",
        href: _v2 ? _v4 : _v15.CA_PRIVACY.url,
        children: _v15.CA_PRIVACY.text
      }, _v15.CA_PRIVACY.text), _v0 ? (0, _v1.jsx)(_v18, {
        color: "text-secondary",
        href: _v2 ? _v4 : _v15.IMPRESSUM.url,
        children: _v15.IMPRESSUM.text
      }, _v15.IMPRESSUM.text) : null, (0, _v1.jsx)(_v18, {
        color: "text-secondary",
        href: _v2 ? _v4 : _v15.COPYRIGHT.url,
        children: _v15.COPYRIGHT.text
      }, _v15.COPYRIGHT.text), (0, _v1.jsx)(_v18, {
        color: "text-secondary",
        href: _v2 ? _v4 : _v15.COOKIES.url,
        children: _v15.COOKIES.text
      }, _v15.COOKIES.text), _v1 ? (0, _v1.jsx)(_v18, {
        color: "text-secondary",
        href: _v2 ? _v4 : _v15.TERMINATE.url,
        children: _v15.TERMINATE.text
      }) : null],
      _v6 = _v21.default.Children.toArray(_v5).filter(Boolean);
    return (0, _v1.jsx)(_v23.Flex, {
      justify: "flex-end",
      w: "100%",
      children: (0, _v1.jsx)(_v24.HStack, {
        divider: (0, _v1.jsx)(_v25.Box, {
          borderColor: "text-secondary",
          w: (0, _v4.rem)(5),
          h: (0, _v4.rem)(14)
        }),
        flexWrap: "wrap",
        children: _v6
      })
    });
  }, _v0.s(["Footer", 0, _v39], 0);
}