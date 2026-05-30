{
  "use strict";

  let _v1;
  var _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  let _v9 = !!_v1 && /iphone|ipod|ipad/i.test(_v1.userAgent.toLowerCase()),
    _v10 = !!_v1 && /android/i.test(_v1.userAgent.toLowerCase()),
    _v11 = !!_v1 && /mac/i.test(_v1.userAgent.toLowerCase()),
    _v12 = _v4.default.a.withConfig({
      displayName: "Links__Link",
      componentId: "sc-632e0c0b-0"
    })`
  color: ${_v6.bokehTheme.colors.gray["200"]};
  text-decoration: none;
  padding: ${(0, _v3.rem)(12)} 0;
  display: block;
  &:hover {
    color: ${_v6.bokehTheme.colors.gray["500"]};
  }
`;
  _v0.s(["Help", 0, function () {
    return (0, _v2.jsx)(_v12, {
      href: "/help",
      onClick: () => {
        _v5.FatalAttraction.trackClick({
          container: "footer",
          component: "help"
        });
      },
      children: (0, _v7.translate)({
        singular: "Help",
        dictionary: {
          es: {
            singular: "Ayuda"
          },
          "de-DE": {
            singular: "Hilfe"
          },
          "fr-FR": {
            singular: "Aide "
          },
          "ja-JP": {
            singular: "ヘルプ"
          },
          "ko-KR": {
            singular: "도움말"
          },
          "pt-BR": {
            singular: "Ajuda"
          },
          "zh-CN": {
            singular: "帮助"
          }
        }
      })
    });
  }, "Link", 0, _v12, "Upgrade", 0, function () {
    return (0, _v2.jsx)(_v12, {
      href: (0, _v8.buildUpgradePlanUrl)({
        paywallTrigger: "footer_upgrade_link",
        paywallLocation: "footer",
        paywallFeature: "general"
      }),
      onClick: () => {
        _v5.FatalAttraction.trackClick({
          container: "footer",
          component: "upgrade"
        });
      },
      children: (0, _v7.translate)({
        singular: "Upgrade",
        dictionary: {
          es: {
            singular: "Actualizar"
          },
          "de-DE": {
            singular: "Upgraden"
          },
          "fr-FR": {
            singular: "Mettre à niveau"
          },
          "ja-JP": {
            singular: "アップグレード"
          },
          "ko-KR": {
            singular: "업그레이드"
          },
          "zh-CN": {
            singular: "升级"
          }
        }
      })
    });
  }, "getAbsoluteUrl", 0, _v0 => _v0.startsWith("https://") ? _v0 : "https://vimeo.com" + _v0, "getLegalLinks", 0, () => [{
    label: (0, _v7.translate)({
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
    "aria-label": (0, _v7.translate)({
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
    href: "/terms",
    title: (0, _v7.translate)({
      singular: "Terms & Conditions",
      dictionary: {
        es: {
          singular: "Términos y condiciones"
        },
        "de-DE": {
          singular: "Nutzungsbedingungen"
        },
        "fr-FR": {
          singular: "Conditions générales"
        },
        "ja-JP": {
          singular: "諸条件"
        },
        "ko-KR": {
          singular: "이용 약관"
        },
        "pt-BR": {
          singular: "Termos e Condições"
        },
        "zh-CN": {
          singular: "条款和条件"
        }
      }
    }),
    forSimplifiedSite: !0
  }, {
    label: (0, _v7.translate)({
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
    "aria-label": (0, _v7.translate)({
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
    href: "/privacy",
    title: (0, _v7.translate)({
      singular: "Privacy Policy",
      dictionary: {
        es: {
          singular: "Política de privacidad"
        },
        "de-DE": {
          singular: "Datenschutzerklärung"
        },
        "fr-FR": {
          singular: "Politique de confidentialité "
        },
        "ja-JP": {
          singular: "プライバシーポリシー"
        },
        "ko-KR": {
          singular: "개인정보보호 정책"
        },
        "pt-BR": {
          singular: "Política de Privacidade"
        },
        "zh-CN": {
          singular: "隐私政策"
        }
      }
    }),
    forSimplifiedSite: !0
  }, {
    label: (0, _v7.translate)({
      singular: "U.S. State Privacy",
      dictionary: {
        es: {
          singular: "Privacidad de los estados de EE. UU."
        },
        "de-DE": {
          singular: "Datenschutz US-Bundesstaaten"
        },
        "fr-FR": {
          singular: "Confidentialité des États américains"
        },
        "ja-JP": {
          singular: "米国プライバシー"
        },
        "ko-KR": {
          singular: "미국 주 개인정보 보호"
        },
        "pt-BR": {
          singular: "Leis estaduais de privacidade dos EUA"
        },
        "zh-CN": {
          singular: "美国州隐私"
        }
      }
    }),
    "aria-label": (0, _v7.translate)({
      singular: "U.S. State Privacy",
      dictionary: {
        es: {
          singular: "Privacidad de los estados de EE. UU."
        },
        "de-DE": {
          singular: "Datenschutz US-Bundesstaaten"
        },
        "fr-FR": {
          singular: "Confidentialité des États américains"
        },
        "ja-JP": {
          singular: "米国プライバシー"
        },
        "ko-KR": {
          singular: "미국 주 개인정보 보호"
        },
        "pt-BR": {
          singular: "Leis estaduais de privacidade dos EUA"
        },
        "zh-CN": {
          singular: "美国州隐私"
        }
      }
    }),
    href: "/privacy/us-state-privacy",
    title: (0, _v7.translate)({
      singular: "U.S. State Privacy",
      dictionary: {
        es: {
          singular: "Privacidad de los estados de EE. UU."
        },
        "de-DE": {
          singular: "Datenschutz US-Bundesstaaten"
        },
        "fr-FR": {
          singular: "Confidentialité des États américains"
        },
        "ja-JP": {
          singular: "米国プライバシー"
        },
        "ko-KR": {
          singular: "미국 주 개인정보 보호"
        },
        "pt-BR": {
          singular: "Leis estaduais de privacidade dos EUA"
        },
        "zh-CN": {
          singular: "美国州隐私"
        }
      }
    }),
    forSimplifiedSite: !1
  }, {
    label: "Impressum",
    "aria-label": "Impressum",
    href: "/leo/guidelines/impressum",
    title: "Impressum",
    forSimplifiedSite: !1
  }, {
    label: (0, _v7.translate)({
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
    "aria-label": (0, _v7.translate)({
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
    href: "/dmca",
    title: (0, _v7.translate)({
      singular: "Copyright Information",
      dictionary: {
        es: {
          singular: "Información sobre derechos de autor"
        },
        "de-DE": {
          singular: "Infos zum Urheberrecht"
        },
        "fr-FR": {
          singular: "Informations sur le droit d'auteur"
        },
        "ja-JP": {
          singular: "著作権情報"
        },
        "ko-KR": {
          singular: "저작권 정보"
        },
        "pt-BR": {
          singular: "Informações de Direitos Autorais"
        },
        "zh-CN": {
          singular: "版权信息"
        }
      }
    }),
    forSimplifiedSite: !1
  }, {
    label: (0, _v7.translate)({
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
    "aria-label": (0, _v7.translate)({
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
    href: "/cookie_policy",
    title: (0, _v7.translate)({
      singular: "Learn how Vimeo uses cookies",
      dictionary: {
        es: {
          singular: "Entérate de cómo Vimeo usa las cookies"
        },
        "de-DE": {
          singular: "Vimeo Cookie-Richtlinie"
        },
        "fr-FR": {
          singular: "En savoir plus sur la façon dont Vimeo utilise les cookies"
        },
        "ja-JP": {
          singular: "Vimeo の Cookie 使用法について見る"
        },
        "ko-KR": {
          singular: "Vimeo에서 쿠키가 어떻게 사용되는지 알아보세요"
        },
        "pt-BR": {
          singular: "Saiba como o Vimeo usa os cookies"
        },
        "zh-CN": {
          singular: "了解 Vimeo 如何使用 cookie"
        }
      }
    }),
    forSimplifiedSite: !1
  }], "getSiteMapLinks", 0, _v0 => {
    let _v1, _v2, _v3, _v4, _v5, _v6, _v7;
    return [{
      header: (0, _v7.translate)({
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
      links: [{
        label: (0, _v7.translate)({
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
        href: "/features/interactive-video",
        fa: {
          container: "footer",
          component: "features",
          keyword: "interactive_video",
          target: "/features/interactive-video"
        }
      }, {
        label: (0, _v7.translate)({
          singular: "Online Video Editor",
          dictionary: {
            es: {
              singular: "Editor de videos en línea"
            },
            "de-DE": {
              singular: "Online-Video-Editor"
            },
            "fr-FR": {
              singular: "monteur vidéo en ligne"
            },
            "ja-JP": {
              singular: "オンライン動画エディタ"
            },
            "ko-KR": {
              singular: "온라인 동영상 편집기"
            },
            "pt-BR": {
              singular: "Editor de vídeo online"
            },
            "zh-CN": {
              singular: "在线视频编辑器"
            }
          }
        }),
        href: "/video-editor",
        fa: {
          container: "footer",
          component: "video_editor",
          keyword: "video_editor",
          target: "/video-editor"
        }
      }, {
        label: (0, _v7.translate)({
          singular: "Auto Captioning",
          dictionary: {
            es: {
              singular: "Subtítulos automáticos"
            },
            "de-DE": {
              singular: "Automatisch generierte Untertitel"
            },
            "fr-FR": {
              singular: "Sous-titrage automatique"
            },
            "ja-JP": {
              singular: "自動キャプション"
            },
            "ko-KR": {
              singular: "자동 캡션"
            },
            "pt-BR": {
              singular: "Legendagem automática"
            },
            "zh-CN": {
              singular: "自动字幕"
            }
          }
        }),
        href: "/features/auto-caption",
        fa: {
          container: "footer",
          component: "features",
          keyword: "auto_cc",
          target: "/features/auto-caption"
        }
      }, {
        label: (0, _v7.translate)({
          singular: "Webinar Software",
          dictionary: {
            es: {
              singular: "Software para seminarios web"
            },
            "de-DE": {
              singular: "Webinar-Software"
            },
            "fr-FR": {
              singular: "Logiciel de webinaire"
            },
            "ja-JP": {
              singular: "ウェビナーソフトウェア"
            },
            "ko-KR": {
              singular: "웨비나 소프트웨어"
            },
            "pt-BR": {
              singular: "Software para webinars"
            },
            "zh-CN": {
              singular: "网络研讨会软件"
            }
          }
        }),
        href: "/features/webinar",
        fa: {
          container: "footer",
          component: "features",
          keyword: "webinar",
          target: "/features/webinar"
        }
      }, {
        label: (0, _v7.translate)({
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
        href: "/features/virtual-events",
        fa: {
          container: "footer",
          component: "features",
          keyword: "live_events",
          target: "/features/virtual-events"
        }
      }, {
        label: (0, _v7.translate)({
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
        href: "/features/video-player"
      }, {
        label: (0, _v7.translate)({
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
        href: "/features/video-library",
        fa: {
          container: "footer",
          component: "features",
          keyword: "video_library"
        }
      }, {
        label: (0, _v7.translate)({
          singular: "Create Video Maker",
          dictionary: {
            es: {
              singular: "Herramienta de creación de videos Create"
            },
            "de-DE": {
              singular: "Videomacher erstellen"
            },
            "fr-FR": {
              singular: "Outil de création vidéo Create"
            },
            "ja-JP": {
              singular: "ビデオメーカーの作成"
            },
            "ko-KR": {
              singular: "동영상 메이커 생성"
            },
            "pt-BR": {
              singular: "Criador de vídeos Create"
            },
            "zh-CN": {
              singular: "创建视频制作人"
            }
          }
        }),
        href: "/create",
        fa: {
          container: "footer",
          component: "solutions",
          keyword: "create"
        }
      }, {
        label: (0, _v7.translate)({
          singular: "Live streaming",
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
        href: "/features/livestreaming"
      }, {
        label: (0, _v7.translate)({
          singular: "Screen Recorder",
          dictionary: {
            es: {
              singular: "Grabadora de pantalla"
            },
            "de-DE": {
              singular: "Bildschirmaufnahme"
            },
            "fr-FR": {
              singular: "Enregistreur d'écran"
            },
            "ja-JP": {
              singular: "スクリーンレコーダー"
            },
            "ko-KR": {
              singular: "화면 녹화기"
            },
            "pt-BR": {
              singular: "Gravador de tela"
            },
            "zh-CN": {
              singular: "屏幕录制器"
            }
          }
        }),
        href: "/features/screen-recorder"
      }, {
        label: (0, _v7.translate)({
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
        href: "/features/video-privacy"
      }, {
        label: (0, _v7.translate)({
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
        href: "/features/video-collaboration"
      }, {
        label: (0, _v7.translate)({
          singular: "Video Marketing",
          dictionary: {
            es: {
              singular: "Marketing de video"
            },
            "de-DE": {
              singular: "Video-Marketing"
            },
            "fr-FR": {
              singular: "marketing vidéo"
            },
            "ja-JP": {
              singular: "動画マーケティング"
            },
            "ko-KR": {
              singular: "동영상 마케팅"
            },
            "pt-BR": {
              singular: "Marketing de vídeo"
            },
            "zh-CN": {
              singular: "视频营销"
            }
          }
        }),
        href: "/features/video-marketing"
      }, {
        label: (0, _v7.translate)({
          singular: "OTT Video Monetization",
          dictionary: {
            es: {
              singular: "Monetización de videos de OTT"
            },
            "de-DE": {
              singular: "OTT-Videomonetarisierung"
            },
            "fr-FR": {
              singular: "Monétisation vidéo et OTT"
            },
            "ja-JP": {
              singular: "OTT動画の収益化"
            },
            "ko-KR": {
              singular: "OTT 동영상 수익화"
            },
            "pt-BR": {
              singular: "Monetização de vídeos OTT"
            },
            "zh-CN": {
              singular: "OTT 视频获利"
            }
          }
        }),
        href: "/ott?mkc=entprsb"
      }, {
        label: (0, _v7.translate)({
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
        href: "/features/video-analytics"
      }, {
        label: (0, _v7.translate)({
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
        href: "/features/online-video-hosting"
      }]
    }, {
      header: (0, _v7.translate)({
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
      links: [{
        label: (0, _v7.translate)({
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
        href: "/help"
      }, {
        label: (0, _v7.translate)({
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
        href: "/blog"
      }, {
        label: (0, _v7.translate)({
          singular: "Our Customers",
          dictionary: {
            es: {
              singular: "Nuestros clientes"
            },
            "de-DE": {
              singular: "Unsere Kunden"
            },
            "fr-FR": {
              singular: "Nos clients"
            },
            "ja-JP": {
              singular: "Vimeoユーザー"
            },
            "ko-KR": {
              singular: "Vimeo의 고객"
            },
            "pt-BR": {
              singular: "Nossos clientes"
            },
            "zh-CN": {
              singular: "我们的客户"
            }
          }
        }),
        href: "/customers",
        fa: {
          container: "footer",
          component: "resources",
          keyword: "customer_logos",
          target: "/customers"
        }
      }, {
        label: (0, _v7.translate)({
          singular: "Video School",
          dictionary: {
            es: {
              singular: "Escuela de video"
            },
            "de-DE": {
              singular: "Videoschule"
            },
            "fr-FR": {
              singular: "École de Vidéo"
            },
            "ja-JP": {
              singular: "映像スクール"
            },
            "ko-KR": {
              singular: "비디오 스쿨"
            },
            "pt-BR": {
              singular: "Escola de Vídeos"
            },
            "zh-CN": {
              singular: "视频学院"
            }
          }
        }),
        href: "/blog/video-school"
      }, {
        label: (0, _v7.translate)({
          singular: "OTT Resources",
          dictionary: {
            es: {
              singular: "Recursos OTT"
            },
            "de-DE": {
              singular: "OTT-Ressourcen"
            },
            "fr-FR": {
              singular: "Ressources OTT"
            },
            "ja-JP": {
              singular: "OTTリソース"
            },
            "ko-KR": {
              singular: "OTT 리소스"
            },
            "pt-BR": {
              singular: "Recursos de OTT"
            },
            "zh-CN": {
              singular: "OTT 资源"
            }
          }
        }),
        href: "https://ott.vimeo.com/resources/"
      }, {
        label: (0, _v7.translate)({
          singular: "Developers",
          dictionary: {
            es: {
              singular: "Desarrolladores"
            },
            "de-DE": {
              singular: "Entwickler"
            },
            "fr-FR": {
              singular: "Développeurs "
            },
            "ja-JP": {
              singular: "デベロッパー"
            },
            "ko-KR": {
              singular: "개발자"
            },
            "pt-BR": {
              singular: "Desenvolvedores"
            },
            "zh-CN": {
              singular: "开发者"
            }
          }
        }),
        href: "https://developer.vimeo.com/"
      }, {
        label: (0, _v7.translate)({
          singular: "Become a Partner",
          dictionary: {
            es: {
              singular: "Conviértete en socio"
            },
            "de-DE": {
              singular: "Partner werden"
            },
            "fr-FR": {
              singular: "Devenir Partner"
            },
            "ja-JP": {
              singular: "パートナーになる"
            },
            "ko-KR": {
              singular: "파트너 맺기"
            },
            "pt-BR": {
              singular: "Seja um Parceiro"
            },
            "zh-CN": {
              singular: "成为合作伙伴"
            }
          }
        }),
        href: "/partners"
      }, {
        label: (0, _v7.translate)({
          singular: "Join Vimeo Experts",
          dictionary: {
            es: {
              singular: "Únete a Vimeo Experts"
            },
            "de-DE": {
              singular: "Vimeo Experts beitreten"
            },
            "fr-FR": {
              singular: "S'inscrire à Vimeo Experts"
            },
            "ja-JP": {
              singular: "Vimeo エキスパートに登録"
            },
            "ko-KR": {
              singular: "Vimeo 엑스퍼트 가입"
            },
            "pt-BR": {
              singular: "Se inscreva no Vimeo Experts"
            },
            "zh-CN": {
              singular: "加入 Vimeo Experts"
            }
          }
        }),
        href: "/experts"
      }, {
        label: (0, _v7.translate)({
          singular: "Guidelines",
          dictionary: {
            es: {
              singular: "Directrices"
            },
            "de-DE": {
              singular: "Leitlinien"
            },
            "fr-FR": {
              singular: "Règles"
            },
            "ja-JP": {
              singular: "ガイドライン"
            },
            "ko-KR": {
              singular: "지침"
            },
            "pt-BR": {
              singular: "Regras"
            },
            "zh-CN": {
              singular: "指南"
            }
          }
        }),
        href: "/help/guidelines"
      }]
    }, {
      header: (0, _v7.translate)({
        singular: "Apps",
        dictionary: {
          es: {
            singular: "Aplicaciones"
          },
          "ja-JP": {
            singular: "アプリ"
          },
          "ko-KR": {
            singular: "앱"
          },
          "pt-BR": {
            singular: "Aplicativos"
          },
          "zh-CN": {
            singular: "应用"
          }
        }
      }),
      links: [(_v1 = {
        label: (0, _v7.translate)({
          singular: "Vimeo for {MACOS}",
          replacements: {
            MACOS: "macOS"
          },
          dictionary: {
            es: {
              singular: "Vimeo para {MACOS}"
            },
            "de-DE": {
              singular: "Vimeo für {MACOS}"
            },
            "fr-FR": {
              singular: "Vimeo pour {MACOS}"
            },
            "ja-JP": {
              singular: "{MACOS}用 Vimeo"
            },
            "ko-KR": {
              singular: "{MACOS}용 Vimeo"
            },
            "pt-BR": {
              singular: "Vimeo para {MACOS}"
            },
            "zh-CN": {
              singular: "面向 {MACOS} 的 Vimeo"
            }
          }
        }),
        href: "https://apps.apple.com/app/apple-store/id1356686763?pt=417731&ct=lohp&mt=8"
      }, _v9 || _v10 ? null : _v11 ? Object.assign({}, _v1, {
        href: "macappstore://apple.com/app/apple-store/id1356686763?pt=417731&ct=LOHP&mt=8"
      }) : _v1), (_v2 = {
        label: (0, _v7.translate)({
          singular: "Vimeo for {IOS}",
          replacements: {
            IOS: "iOS"
          },
          dictionary: {
            es: {
              singular: "Vimeo para {IOS}"
            },
            "de-DE": {
              singular: "Vimeo für {IOS}"
            },
            "fr-FR": {
              singular: "Vimeo pour {IOS}"
            },
            "ja-JP": {
              singular: "{IOS}用 Vimeo"
            },
            "ko-KR": {
              singular: "{IOS}용 Vimeo"
            },
            "pt-BR": {
              singular: "Vimeo para {IOS}"
            },
            "zh-CN": {
              singular: "面向 {IOS} 的 Vimeo"
            }
          }
        }),
        href: "https://apps.apple.com/app/apple-store/id425194759?pt=417731&ct=enterprise_mobile_comms_LP&mt=8"
      }, _v10 ? null : _v2), (_v3 = {
        label: (0, _v7.translate)({
          singular: "Vimeo for {ANDROID}",
          replacements: {
            ANDROID: "Android"
          },
          dictionary: {
            es: {
              singular: "Vimeo para {ANDROID}"
            },
            "de-DE": {
              singular: "Vimeo für {ANDROID}"
            },
            "fr-FR": {
              singular: "Vimeo pour {ANDROID}"
            },
            "ja-JP": {
              singular: "{ANDROID}用 Vimeo"
            },
            "ko-KR": {
              singular: "{ANDROID}용 Vimeo"
            },
            "pt-BR": {
              singular: "Vimeo para {ANDROID}"
            },
            "zh-CN": {
              singular: "面向 {ANDROID} 的 Vimeo"
            }
          }
        }),
        href: "https://play.google.com/store/apps/details?id=com.vimeo.android.videoapp&hl=en_US&gl=US&pli=1"
      }, _v9 ? null : _v3), (_v4 = {
        label: (0, _v7.translate)({
          singular: "Vimeo Create for {IOS}",
          replacements: {
            IOS: "iOS"
          },
          dictionary: {
            es: {
              singular: "Vimeo Create para {IOS}"
            },
            "de-DE": {
              singular: "Vimeo Create für {IOS}"
            },
            "fr-FR": {
              singular: "Vimeo Create pour {IOS}"
            },
            "ja-JP": {
              singular: "{IOS}用 Vimeo Create"
            },
            "ko-KR": {
              singular: "{IOS}용 Vimeo Create"
            },
            "pt-BR": {
              singular: "Vimeo Create para {IOS}"
            }
          }
        }),
        href: "https://apps.apple.com/us/app/vimeo/id425194759"
      }, _v10 ? null : _v4), (_v5 = {
        label: (0, _v7.translate)({
          singular: "Vimeo Create for {ANDROID}",
          replacements: {
            ANDROID: "Android"
          },
          dictionary: {
            es: {
              singular: "Vimeo Create para {ANDROID}"
            },
            "de-DE": {
              singular: "Vimeo Create für {ANDROID}"
            },
            "fr-FR": {
              singular: "Vimeo Create pour {ANDROID}"
            },
            "ja-JP": {
              singular: "{ANDROID}用 Vimeo Create"
            },
            "ko-KR": {
              singular: "{ANDROID}용 Vimeo Create"
            },
            "pt-BR": {
              singular: "Vimeo Create para {ANDROID}"
            }
          }
        }),
        href: "https://play.google.com/store/apps/details?id=com.vimeo.android.videoapp"
      }, _v9 ? null : _v5), {
        label: "Magisto",
        href: "https://www.magisto.com/"
      }, {
        label: (0, _v7.translate)({
          singular: "Vimeo for {SHOPIFY}",
          replacements: {
            SHOPIFY: "Shopify"
          },
          dictionary: {
            es: {
              singular: "Vimeo para {SHOPIFY}"
            },
            "de-DE": {
              singular: "Vimeo für {SHOPIFY}"
            },
            "fr-FR": {
              singular: "Vimeo pour {SHOPIFY}"
            },
            "ja-JP": {
              singular: "{SHOPIFY}用 Vimeo"
            },
            "ko-KR": {
              singular: "{SHOPIFY}용 Vimeo"
            },
            "pt-BR": {
              singular: "Vimeo para {SHOPIFY}"
            },
            "zh-CN": {
              singular: "面向 {SHOPIFY} 的 Vimeo"
            }
          }
        }),
        href: "https://apps.shopify.com/vimeo_product_video_maker"
      }, {
        label: (0, _v7.translate)({
          singular: "Vimeo for {ZOOM}",
          replacements: {
            ZOOM: "Zoom"
          },
          dictionary: {
            es: {
              singular: "Vimeo para {ZOOM}"
            },
            "de-DE": {
              singular: "Vimeo für {ZOOM}"
            },
            "fr-FR": {
              singular: "Vimeo pour {ZOOM}"
            },
            "ja-JP": {
              singular: "{ZOOM}用 Vimeo"
            },
            "ko-KR": {
              singular: "{ZOOM}용 Vimeo"
            },
            "pt-BR": {
              singular: "Vimeo para {ZOOM}"
            },
            "zh-CN": {
              singular: "面向 {ZOOM} 的 Vimeo"
            }
          }
        }),
        href: "/integrations/zoom",
        fa: {
          type: "click",
          component: "apps",
          container: "footer",
          keyword: "vimeo_for_zoom"
        }
      }]
    }, {
      header: "Vimeo",
      links: (_v6 = {
        label: (0, _v7.translate)({
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
        href: "/settings/billing/membership_plan/optout",
        fa: {
          container: "footer",
          component: "logged_in",
          keyword: "terminate_here",
          target: "/settings/billing/membership_plan/optout"
        }
      }, _v7 = [{
        label: (0, _v7.translate)({
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
        }),
        href: (0, _v8.buildUpgradePlanUrl)({
          paywallTrigger: "footer_pricing_link",
          paywallLocation: "footer",
          paywallFeature: "general"
        })
      }, {
        label: (0, _v7.translate)({
          singular: "Upload",
          dictionary: {
            es: {
              singular: "Subir"
            },
            "de-DE": {
              singular: "Hochladen"
            },
            "fr-FR": {
              singular: "Importer"
            },
            "ja-JP": {
              singular: "アップロード"
            },
            "ko-KR": {
              singular: "업로드"
            },
            "pt-BR": {
              singular: "Carregar"
            },
            "zh-CN": {
              singular: "上传"
            }
          }
        }),
        href: "/upload"
      }, {
        label: (0, _v7.translate)({
          singular: "Staff Picks",
          dictionary: {
            "ja-JP": {
              singular: "スタッフピック"
            },
            "ko-KR": {
              singular: "스태프 픽"
            }
          }
        }),
        href: "/channels/staffpicks"
      }, {
        label: (0, _v7.translate)({
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
        href: "/ondemand"
      }, {
        label: (0, _v7.translate)({
          singular: "Vimeo OTT",
          dictionary: {
            es: {
              singular: "Vimeo de transmisión libre (OTT)"
            }
          }
        }),
        href: "/ott"
      }, {
        label: (0, _v7.translate)({
          singular: "Site map",
          dictionary: {
            es: {
              singular: "Mapa del sitio"
            },
            "de-DE": {
              singular: "Sitemap"
            },
            "fr-FR": {
              singular: "Plan du site "
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
        href: "/site_map"
      }, {
        label: (0, _v7.translate)({
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
        href: "/about"
      }, {
        label: (0, _v7.translate)({
          singular: "Investor Relations",
          dictionary: {
            es: {
              singular: "Relaciones con los inversores"
            },
            "fr-FR": {
              singular: "Relations avec les investisseurs"
            },
            "ja-JP": {
              singular: "インベスター・リレーションズ"
            },
            "ko-KR": {
              singular: "기업설명회(IR)"
            },
            "pt-BR": {
              singular: "Relações com Investidores"
            },
            "zh-CN": {
              singular: "投资者关系"
            }
          }
        }),
        href: "https://investors.vimeo.com",
        fa: {
          container: "footer",
          component: "vimeo",
          keyword: "investor_relations"
        }
      }, {
        label: (0, _v7.translate)({
          singular: "Press",
          dictionary: {
            es: {
              singular: "Prensa"
            },
            "de-DE": {
              singular: "Presse"
            },
            "fr-FR": {
              singular: "Presse"
            },
            "ja-JP": {
              singular: "メディア"
            },
            "ko-KR": {
              singular: "보도 자료"
            },
            "pt-BR": {
              singular: "Imprensa"
            },
            "zh-CN": {
              singular: "新闻"
            }
          }
        }),
        href: "https://press.vimeo.com/",
        fa: {
          container: "footer",
          component: "vimeo",
          keyword: "press"
        }
      }, {
        label: (0, _v7.translate)({
          singular: "Jobs",
          dictionary: {
            es: {
              singular: "Empleo"
            },
            "ja-JP": {
              singular: "採用情報"
            },
            "ko-KR": {
              singular: "채용 정보"
            },
            "pt-BR": {
              singular: "Trabalhe Conosco"
            },
            "zh-CN": {
              singular: "工作机会"
            }
          }
        }),
        href: "/careers"
      }], _v0 ? [_v6, ..._v7] : _v7)
    }];
  }], 0);
}