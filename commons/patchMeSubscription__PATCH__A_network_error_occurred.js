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
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0);
  async function _v25({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      subscriptionId: _v3
    },
    ..._v4
  }) {
    return (0, _v23.measureLatency)("patchMeSubscription", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/me/subscriptions/${_v3}?fields=${_v1.map(_v24.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "PATCH",
        body: JSON.stringify((0, _v24.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v24.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v24.deepCamelCase)(_v1);
    });
  }
  _v0.s(["patchMeSubscription", 0, _v25], 0);
  var _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0);
  let _v33 = {
      core: [(0, _v30.translate)({
        singular: "300GB of storage",
        dictionary: {
          es: {
            singular: "300 GB de almacenamiento"
          },
          "de-DE": {
            singular: "300 GB Speicherplatz"
          },
          "fr-FR": {
            singular: "300 Go de stockage"
          },
          "ja-JP": {
            singular: "300GBのストレージ"
          },
          "ko-KR": {
            singular: "300GB 저장 공간"
          },
          "pt-BR": {
            singular: "300GB de armazenamento"
          },
          "zh-CN": {
            singular: "300GB 存储空间"
          }
        }
      }), (0, _v30.translate)({
        singular: "2TB monthly bandwidth",
        dictionary: {
          es: {
            singular: "2TB de ancho de banda mensual"
          },
          "de-DE": {
            singular: "2TB monatliche Bandbreite"
          },
          "fr-FR": {
            singular: "2 To de bande passante par mois"
          },
          "ja-JP": {
            singular: "月間2TBの帯域幅"
          },
          "ko-KR": {
            singular: "월간 2TB 대역폭"
          },
          "pt-BR": {
            singular: "2TB de largura de banda mensal"
          },
          "zh-CN": {
            singular: "每月 2TB 带宽"
          }
        }
      }), (0, _v30.translate)({
        singular: "Brand kit",
        dictionary: {
          es: {
            singular: "Kit de marca"
          },
          "de-DE": {
            singular: "Brand Kit"
          },
          "fr-FR": {
            singular: "Kit de marque"
          },
          "ja-JP": {
            singular: "ブランドキット"
          },
          "ko-KR": {
            singular: "브랜드 키트"
          },
          "pt-BR": {
            singular: "Kit de marca"
          },
          "zh-CN": {
            singular: "品牌工具包"
          }
        }
      }), (0, _v30.translate)({
        singular: "Custom fonts",
        dictionary: {
          es: {
            singular: "Fuentes personalizadas"
          },
          "de-DE": {
            singular: "Benutzerdefinierte Schriftarten"
          },
          "fr-FR": {
            singular: "Polices personnalisées"
          },
          "ja-JP": {
            singular: "カスタムフォント"
          },
          "ko-KR": {
            singular: "사용자 지정 글꼴"
          },
          "pt-BR": {
            singular: "Fontes personalizadas"
          },
          "zh-CN": {
            singular: "自定义字体"
          }
        }
      }), (0, _v30.translate)({
        singular: "Unlisted links for sharing",
        dictionary: {
          es: {
            singular: "Enlaces no listados para compartir"
          },
          "de-DE": {
            singular: "Nicht gelistete Links zum Teilen"
          },
          "fr-FR": {
            singular: "Liens non répertoriés pour le partage"
          },
          "ja-JP": {
            singular: "共有用の非公開リンク"
          },
          "ko-KR": {
            singular: "공유용 비공개 링크"
          },
          "pt-BR": {
            singular: "Links não listados para compartilhamento"
          },
          "zh-CN": {
            singular: "用于共享的未列出链接"
          }
        }
      })],
      professional: [(0, _v30.translate)({
        singular: "7TB of storage",
        dictionary: {
          es: {
            singular: "7TB de almacenamiento"
          },
          "de-DE": {
            singular: "7TB Speicher"
          },
          "fr-FR": {
            singular: "7 To de stockage"
          },
          "ja-JP": {
            singular: "7TB のストレージ"
          },
          "ko-KR": {
            singular: "7TB 저장 용량"
          },
          "pt-BR": {
            singular: "7TB de armazenamento"
          },
          "zh-CN": {
            singular: "7TB 存储"
          }
        }
      }), (0, _v30.translate)({
        singular: "10 seats",
        dictionary: {
          es: {
            singular: "10 plazas"
          },
          "de-DE": {
            singular: "10 Lizenzen"
          },
          "fr-FR": {
            singular: "10 sièges"
          },
          "ja-JP": {
            singular: "10 シート"
          },
          "ko-KR": {
            singular: "좌석 10개"
          },
          "pt-BR": {
            singular: "10 licenças"
          },
          "zh-CN": {
            singular: "10 个席位"
          }
        }
      }), (0, _v30.translate)({
        singular: "Unlimited showcases",
        dictionary: {
          es: {
            singular: "Presentaciones ilimitadas"
          },
          "de-DE": {
            singular: "Unbegrenzte Showcases"
          },
          "fr-FR": {
            singular: "Vitrines illimitées"
          },
          "ja-JP": {
            singular: "無制限のショーケース"
          },
          "ko-KR": {
            singular: "무제한 쇼케이스"
          },
          "pt-BR": {
            singular: "Apresentações ilimitadas"
          },
          "zh-CN": {
            singular: "无限展示"
          }
        }
      }), (0, _v30.translate)({
        singular: "Live events",
        dictionary: {
          es: {
            singular: "Eventos en vivo"
          },
          "de-DE": {
            singular: "Live-Events"
          },
          "fr-FR": {
            singular: "Évènements en direct"
          },
          "ja-JP": {
            singular: "ライブイベント"
          },
          "ko-KR": {
            singular: "라이브 이벤트"
          },
          "pt-BR": {
            singular: "Eventos ao vivo"
          },
          "zh-CN": {
            singular: "直播活动"
          }
        }
      })],
      studio: [(0, _v30.translate)({
        singular: "10TB of storage",
        dictionary: {
          es: {
            singular: "10TB de almacenamiento"
          },
          "de-DE": {
            singular: "10TB Speicher"
          },
          "fr-FR": {
            singular: "10 To de stockage"
          },
          "ja-JP": {
            singular: "10TB のストレージ"
          },
          "ko-KR": {
            singular: "10TB 저장 용량"
          },
          "pt-BR": {
            singular: "10TB de armazenamento"
          },
          "zh-CN": {
            singular: "10TB 存储"
          }
        }
      }), (0, _v30.translate)({
        singular: "3 admin users",
        dictionary: {
          es: {
            singular: "3 usuarios administradores"
          },
          "de-DE": {
            singular: "3 Administratoren"
          },
          "fr-FR": {
            singular: "3 utilisateurs administrateurs"
          },
          "ja-JP": {
            singular: "管理者ユーザー3名"
          },
          "ko-KR": {
            singular: "관리자 사용자 3명"
          },
          "pt-BR": {
            singular: "3 administradores"
          },
          "zh-CN": {
            singular: "3 位管理员"
          }
        }
      }), (0, _v30.translate)({
        singular: "Up to 200 users",
        dictionary: {
          es: {
            singular: "Hasta 200 usuarios"
          },
          "de-DE": {
            singular: "Bis zu 200 Nutzer"
          },
          "fr-FR": {
            singular: "Jusqu'à 200 utilisateurs"
          },
          "ja-JP": {
            singular: "最大200ユーザーまで"
          },
          "ko-KR": {
            singular: "최대 200명의 사용자"
          },
          "pt-BR": {
            singular: "Até 200 usuários"
          },
          "zh-CN": {
            singular: "最多 200 位用户"
          }
        }
      }), (0, _v30.translate)({
        singular: "Custom templates",
        dictionary: {
          es: {
            singular: "Plantillas personalizadas"
          },
          "de-DE": {
            singular: "Benutzerdefinierte Vorlagen"
          },
          "fr-FR": {
            singular: "Modèles personnalisés"
          },
          "ja-JP": {
            singular: "カスタムテンプレート"
          },
          "ko-KR": {
            singular: "맞춤 템플릿"
          },
          "pt-BR": {
            singular: "Modelos personalizados"
          },
          "zh-CN": {
            singular: "自定义模板"
          }
        }
      }), (0, _v30.translate)({
        singular: "36TB yearly bandwidth",
        dictionary: {
          es: {
            singular: "36TB de ancho de banda anual"
          },
          "de-DE": {
            singular: "36TB jährliche Bandbreite"
          },
          "fr-FR": {
            singular: "36 To de bande passante annuelle"
          },
          "ja-JP": {
            singular: "年間36TBの帯域幅"
          },
          "ko-KR": {
            singular: "연간 36TB 대역폭"
          },
          "pt-BR": {
            singular: "36TB de largura de banda anual"
          },
          "zh-CN": {
            singular: "每年36TB带宽"
          }
        }
      })],
      production: [(0, _v30.translate)({
        singular: "25TB of storage",
        dictionary: {
          es: {
            singular: "25TB de almacenamiento"
          },
          "de-DE": {
            singular: "25TB Speicher"
          },
          "fr-FR": {
            singular: "25 To de stockage"
          },
          "ja-JP": {
            singular: "25TB のストレージ"
          },
          "ko-KR": {
            singular: "25TB 저장 용량"
          },
          "pt-BR": {
            singular: "25TB de armazenamento"
          },
          "zh-CN": {
            singular: "25TB 存储"
          }
        }
      }), (0, _v30.translate)({
        singular: "10 admin users",
        dictionary: {
          es: {
            singular: "10 usuarios administradores"
          },
          "de-DE": {
            singular: "10 Administratoren"
          },
          "fr-FR": {
            singular: "10 utilisateurs administrateurs"
          },
          "ja-JP": {
            singular: "管理者ユーザー10名"
          },
          "ko-KR": {
            singular: "관리자 사용자 10명"
          },
          "pt-BR": {
            singular: "10 administradores"
          },
          "zh-CN": {
            singular: "10 位管理员"
          }
        }
      }), (0, _v30.translate)({
        singular: "20 seats",
        dictionary: {
          es: {
            singular: "20 plazas"
          },
          "de-DE": {
            singular: "20 Lizenzen"
          },
          "fr-FR": {
            singular: "20 sièges"
          },
          "ja-JP": {
            singular: "20 シート"
          },
          "ko-KR": {
            singular: "좌석 20개"
          },
          "pt-BR": {
            singular: "20 licenças"
          },
          "zh-CN": {
            singular: "20 个席位"
          }
        }
      }), (0, _v30.translate)({
        singular: "Team level analytics",
        dictionary: {
          es: {
            singular: "Analíticas a nivel de equipo"
          },
          "de-DE": {
            singular: "Analysen auf Team-Ebene"
          },
          "fr-FR": {
            singular: "Analyses au niveau de l'équipe"
          },
          "ja-JP": {
            singular: "チーム単位の分析"
          },
          "ko-KR": {
            singular: "팀 수준 분석"
          },
          "pt-BR": {
            singular: "Análises no nível da equipe"
          },
          "zh-CN": {
            singular: "团队级分析"
          }
        }
      }), (0, _v30.translate)({
        singular: "120TB yearly bandwidth",
        dictionary: {
          es: {
            singular: "120TB de ancho de banda anual"
          },
          "de-DE": {
            singular: "120TB jährliche Bandbreite"
          },
          "fr-FR": {
            singular: "120 To de bande passante par an"
          },
          "ja-JP": {
            singular: "年間120TBの帯域幅"
          },
          "ko-KR": {
            singular: "연간 120TB 대역폭"
          },
          "pt-BR": {
            singular: "120TB de largura de banda anual"
          },
          "zh-CN": {
            singular: "每年 120TB 带宽"
          }
        }
      })],
      standard: [(0, _v30.translate)({
        singular: "Stock photos, videos, and music",
        dictionary: {
          es: {
            singular: "Archivo de fotos, videos y música"
          },
          "de-DE": {
            singular: "Stockfotos, Videos und Musik"
          },
          "fr-FR": {
            singular: "Photos, vidéos et sons sous licence"
          },
          "ja-JP": {
            singular: "ストック写真、動画、音楽"
          },
          "ko-KR": {
            singular: "스톡 사진, 동영상, 음악"
          },
          "pt-BR": {
            singular: "Acervo de fotos, vídeos e músicas"
          },
          "zh-CN": {
            singular: "库存图片、视频和音乐"
          }
        }
      }), (0, _v30.translate)({
        singular: "Teleprompter",
        dictionary: {
          "fr-FR": {
            singular: "Téléprompteur"
          },
          "ja-JP": {
            singular: "テレプロンプター"
          },
          "ko-KR": {
            singular: "텔레프롬프터"
          },
          "zh-CN": {
            singular: "提词器"
          }
        }
      }), (0, _v30.translate)({
        singular: "Brand kit",
        dictionary: {
          es: {
            singular: "Kit de marca"
          },
          "de-DE": {
            singular: "Brand Kit"
          },
          "fr-FR": {
            singular: "Kit de marque"
          },
          "ja-JP": {
            singular: "ブランドキット"
          },
          "ko-KR": {
            singular: "브랜드 키트"
          },
          "pt-BR": {
            singular: "Kit de marca"
          },
          "zh-CN": {
            singular: "品牌工具包"
          }
        }
      }), (0, _v30.translate)({
        singular: "Player branding",
        dictionary: {
          es: {
            singular: "Personalización del reproductor"
          },
          "de-DE": {
            singular: "Player-Branding"
          },
          "fr-FR": {
            singular: "Personnalisation du lecteur"
          },
          "ja-JP": {
            singular: "プレーヤーブランディング"
          },
          "ko-KR": {
            singular: "플레이어 브랜딩"
          },
          "pt-BR": {
            singular: "Personalização do player"
          },
          "zh-CN": {
            singular: "播放器品牌化"
          }
        }
      }), (0, _v30.translate)({
        singular: "AI script generator",
        dictionary: {
          es: {
            singular: "Generador de guiones de IA"
          },
          "de-DE": {
            singular: "KI-Skript-Generator"
          },
          "fr-FR": {
            singular: "Générateur de scripts optimisé par l'IA"
          },
          "ja-JP": {
            singular: "AIスクリプトジェネレーター"
          },
          "ko-KR": {
            singular: "AI 스크립트 작성기"
          },
          "pt-BR": {
            singular: "Gerador de roteiros de IA"
          },
          "zh-CN": {
            singular: "AI 脚本生成器"
          }
        }
      })],
      advanced: [(0, _v30.translate)({
        singular: "Virtual events & webinars",
        dictionary: {
          es: {
            singular: "Eventos virtuales & seminarios web"
          },
          "de-DE": {
            singular: "Virtuelle Events & Webinare"
          },
          "fr-FR": {
            singular: "Événements virtuels et webinaires"
          },
          "ja-JP": {
            singular: "バーチャルイベント & ウェビナー"
          },
          "ko-KR": {
            singular: "가상 이벤트 & 웨비나"
          },
          "pt-BR": {
            singular: "Eventos virtuais e webinars"
          },
          "zh-CN": {
            singular: "虚拟活动与网络研讨会"
          }
        }
      }), (0, _v30.translate)({
        singular: "Event broadcast tools",
        dictionary: {
          es: {
            singular: "Herramientas de transmisión de eventos"
          },
          "de-DE": {
            singular: "Tools für Event-Übertragungen"
          },
          "fr-FR": {
            singular: "Outils de diffusion d'événements"
          },
          "ja-JP": {
            singular: "イベント配信ツール"
          },
          "ko-KR": {
            singular: "이벤트 방송 도구"
          },
          "pt-BR": {
            singular: "Ferramentas de transmissão de eventos"
          },
          "zh-CN": {
            singular: "活动直播工具"
          }
        }
      }), (0, _v30.translate)({
        singular: "Simulcasting",
        dictionary: {
          es: {
            singular: "Transmisión simultánea"
          },
          "fr-FR": {
            singular: "Diffusion simultanée"
          },
          "ja-JP": {
            singular: "同時配信"
          },
          "ko-KR": {
            singular: "동시 방송"
          },
          "pt-BR": {
            singular: "Transmissão simultânea"
          },
          "zh-CN": {
            singular: "联播"
          }
        }
      }), (0, _v30.translate)({
        singular: "Event analytics",
        dictionary: {
          es: {
            singular: "Analítica de eventos"
          },
          "de-DE": {
            singular: "Event-Analysen"
          },
          "fr-FR": {
            singular: "Analyses d'événements"
          },
          "ja-JP": {
            singular: "イベント分析"
          },
          "ko-KR": {
            singular: "이벤트 분석"
          },
          "pt-BR": {
            singular: "Análises de eventos"
          },
          "zh-CN": {
            singular: "活动分析"
          }
        }
      }), (0, _v30.translate)({
        singular: "AI-generated video details and summaries",
        dictionary: {
          es: {
            singular: "Detalles y resúmenes de videos generados por IA"
          },
          "de-DE": {
            singular: "KI-generierte Videodetails und Zusammenfassungen"
          },
          "fr-FR": {
            singular: "Détails et résumés de vidéos générés par l'IA"
          },
          "ja-JP": {
            singular: "AI生成の動画詳細と要約"
          },
          "ko-KR": {
            singular: "AI가 생성한 동영상 세부 정보 및 요약"
          },
          "pt-BR": {
            singular: "Detalhes e resumos de vídeos gerados por IA"
          },
          "zh-CN": {
            singular: "AI 生成的视频详情与摘要"
          }
        }
      })],
      pro: [(0, _v30.translate)({
        singular: "AI script generator",
        dictionary: {
          es: {
            singular: "Generador de guiones de IA"
          },
          "de-DE": {
            singular: "KI-Skript-Generator"
          },
          "fr-FR": {
            singular: "Générateur de scripts optimisé par l'IA"
          },
          "ja-JP": {
            singular: "AIスクリプトジェネレーター"
          },
          "ko-KR": {
            singular: "AI 스크립트 작성기"
          },
          "pt-BR": {
            singular: "Gerador de roteiros de IA"
          },
          "zh-CN": {
            singular: "AI 脚本生成器"
          }
        }
      }), (0, _v30.translate)({
        singular: "Teleprompter",
        dictionary: {
          "fr-FR": {
            singular: "Téléprompteur"
          },
          "ja-JP": {
            singular: "テレプロンプター"
          },
          "ko-KR": {
            singular: "텔레프롬프터"
          },
          "zh-CN": {
            singular: "提词器"
          }
        }
      }), (0, _v30.translate)({
        singular: "Text-based video editing",
        dictionary: {
          es: {
            singular: "Edición de video basada en texto"
          },
          "de-DE": {
            singular: "Textbasierte Videobearbeitung"
          },
          "fr-FR": {
            singular: "Montage vidéo basé sur le texte"
          },
          "ja-JP": {
            singular: "テキストベースの動画編集"
          },
          "ko-KR": {
            singular: "텍스트 기반 동영상 편집"
          },
          "pt-BR": {
            singular: "Edição de vídeo baseada em texto"
          },
          "zh-CN": {
            singular: "基于文本的视频编辑"
          }
        }
      })],
      business: [(0, _v30.translate)({
        singular: "Brand kit",
        dictionary: {
          es: {
            singular: "Kit de marca"
          },
          "de-DE": {
            singular: "Brand Kit"
          },
          "fr-FR": {
            singular: "Kit de marque"
          },
          "ja-JP": {
            singular: "ブランドキット"
          },
          "ko-KR": {
            singular: "브랜드 키트"
          },
          "pt-BR": {
            singular: "Kit de marca"
          },
          "zh-CN": {
            singular: "品牌工具包"
          }
        }
      }), (0, _v30.translate)({
        singular: "Showcase SEO",
        dictionary: {
          es: {
            singular: "SEO de presentación"
          },
          "de-DE": {
            singular: "SEO für Präsentationen"
          },
          "fr-FR": {
            singular: "Optimisation pour les moteurs de recherche des présentations"
          },
          "ja-JP": {
            singular: "ショーケースSEO"
          },
          "ko-KR": {
            singular: "쇼케이스 SEO"
          },
          "pt-BR": {
            singular: "SEO da Vitrine"
          },
          "zh-CN": {
            singular: "橱窗搜索引擎优化"
          }
        }
      }), (0, _v30.translate)({
        singular: "Lead generation",
        dictionary: {
          es: {
            singular: "Generación de oportunidades"
          },
          "de-DE": {
            singular: "Lead-Generierung"
          },
          "fr-FR": {
            singular: "Opportunités commerciales"
          },
          "ja-JP": {
            singular: "リード生成"
          },
          "ko-KR": {
            singular: "리드 생성"
          },
          "pt-BR": {
            singular: "Geração de leads"
          },
          "zh-CN": {
            singular: "潜在客户开发"
          }
        }
      }), (0, _v30.translate)({
        singular: "Player Call-to-action",
        dictionary: {
          es: {
            singular: "Llamada a la acción del reproductor"
          },
          "de-DE": {
            singular: "Player-Call-to-Action"
          },
          "fr-FR": {
            singular: "Appel à l'action du lecteur"
          },
          "ja-JP": {
            singular: "プレーヤーのコールトゥアクション"
          },
          "ko-KR": {
            singular: "플레이어 콜투액션"
          },
          "pt-BR": {
            singular: "Chamada para ação no player"
          },
          "zh-CN": {
            singular: "播放器号召性用语"
          }
        }
      }), (0, _v30.translate)({
        singular: "End cards",
        dictionary: {
          es: {
            singular: "Pantallas finales"
          },
          "de-DE": {
            singular: "Endkarten"
          },
          "fr-FR": {
            singular: "Écrans de fin"
          },
          "ja-JP": {
            singular: "エンドカード"
          },
          "ko-KR": {
            singular: "엔드 카드"
          },
          "pt-BR": {
            singular: "Cartões finais"
          },
          "zh-CN": {
            singular: "结束画面"
          }
        }
      })],
      livePremium: [(0, _v30.translate)({
        singular: "AI-generated chapters and text summaries",
        dictionary: {
          es: {
            singular: "Capítulos y resúmenes de texto generados por IA"
          },
          "de-DE": {
            singular: "KI-generierte Kapitel und Textzusammenfassungen"
          },
          "fr-FR": {
            singular: "Chapitres et résumés de texte générés par l'IA"
          },
          "ja-JP": {
            singular: "AI生成によるチャプターとテキストの概要"
          },
          "ko-KR": {
            singular: "AI가 생성한 챕터 및 텍스트 요약"
          },
          "pt-BR": {
            singular: "Resumos de capítulos e textos gerados por IA"
          },
          "zh-CN": {
            singular: "AI 生成的章节和文本摘要"
          }
        }
      }), (0, _v30.translate)({
        singular: "Enable creators to ask questions on videos",
        dictionary: {
          es: {
            singular: "Permita que los creadores hagan preguntas sobre los videos"
          },
          "de-DE": {
            singular: "Ermöglichen Sie es Erstellern, Fragen zu Videos zu stellen"
          },
          "fr-FR": {
            singular: "Permettez aux créateurs de poser des questions sur les vidéos"
          },
          "ja-JP": {
            singular: "クリエイターが動画上で質問可能"
          },
          "ko-KR": {
            singular: "크리에이터가 동영상에 대해 질문할 수 있도록 지원"
          },
          "pt-BR": {
            singular: "Permita que os criadores façam perguntas sobre os vídeos"
          },
          "zh-CN": {
            singular: "允许创作者在视频上提问"
          }
        }
      }), (0, _v30.translate)({
        singular: "Host live broadcasts and webinars",
        dictionary: {
          es: {
            singular: "Organice transmisiones en vivo y seminarios web"
          },
          "de-DE": {
            singular: "Veranstalten Sie Live-Übertragungen und Webinare"
          },
          "fr-FR": {
            singular: "Organisez des diffusions en direct et des webinaires"
          },
          "ja-JP": {
            singular: "ライブ配信とウェビナーをホスティング"
          },
          "ko-KR": {
            singular: "라이브 방송 및 웨비나 호스팅"
          },
          "pt-BR": {
            singular: "Hospede webinars e transmissões ao vivo"
          },
          "zh-CN": {
            singular: "主持直播和网络研讨会"
          }
        }
      }), (0, _v30.translate)({
        singular: "Stream to multiple destinations",
        dictionary: {
          es: {
            singular: "Transmisión a varios destinos"
          },
          "de-DE": {
            singular: "Stream an mehrere Ziele schicken"
          },
          "fr-FR": {
            singular: "Diffusez des vidéos en streaming vers de multiples destinations"
          },
          "ja-JP": {
            singular: "複数の配信先にストリーム"
          },
          "ko-KR": {
            singular: "여러 목적지로 라이브 스트리밍"
          },
          "pt-BR": {
            singular: "Transmissão ao vivo para vários destinos"
          },
          "zh-CN": {
            singular: "串流至多个目的地"
          }
        }
      }), (0, _v30.translate)({
        singular: "Branded invite and reminder emails",
        dictionary: {
          es: {
            singular: "Correos electrónicos de invitación y recordatorios con presencia de la marca"
          },
          "de-DE": {
            singular: "Markenspezifische Einladungs- und Erinnerungs-E-Mails"
          },
          "fr-FR": {
            singular: "Invitations et e-mails de rappel à l'image de votre marque"
          },
          "ja-JP": {
            singular: "ブランド化された招待状とリマインダーメール"
          },
          "ko-KR": {
            singular: "브랜딩 가능한 초대 및 알림 이메일"
          },
          "pt-BR": {
            singular: "Convites e e-mails de lembrete com sua marca"
          },
          "zh-CN": {
            singular: "品牌邀请和提醒电子邮件"
          }
        }
      })]
    },
    _v34 = [["creator", "core", "professional", "studio", "production"], ["starter", "standard", "advanced"], ["plus", "pro", "business", "livePremium"]],
    _v35 = _v0 => _v0.replace(/_([a-z])/g, (_v0, _v1) => _v1.toUpperCase()),
    _v36 = (_v0, _v1) => {
      let _v2 = _v35(_v1),
        _v3 = _v34.find(_v0 => _v0.includes(_v2));
      if (!_v3) return [];
      let _v4 = _v3.indexOf(_v2),
        _v5 = _v0 ? _v3.indexOf(_v35(_v0)) : -1,
        _v6 = Math.min(_v5 > _v4 ? _v5 : _v4 + 1, _v3.length - 1),
        _v7 = [],
        _v8 = new Set();
      for (let _v0 = _v6; _v0 > _v4; _v0--) for (let _v0 of _v33[_v3[_v0]] ?? []) _v8.has(_v0) || (_v8.add(_v0), _v7.push(_v0));
      return _v7;
    };
  _v0.s(["MAX_LOST_FEATURES", 0, 5, "getLostFeatures", 0, _v36], 0);
  var _v37 = _v0.i(0);
  let _v38 = {
      amex: _v18.AmexNegative,
      discover: _v19.DiscoverNegative,
      mastercard: _v20.MastercardNegative,
      paypal: _v21.PaypalNegative,
      visa: _v22.VisaNegative
    },
    _v39 = ({
      cardBrand: _v0
    }) => {
      let _v1 = _v38[_v0.toLowerCase().replace(/[^a-z]/g, "")] || _v17.CreditCard;
      return (0, _v1.jsx)(_v5.Center, {
        minW: "32px",
        h: "24px",
        color: "text-primary",
        children: (0, _v1.jsx)(_v1, {
          width: "32px",
          height: "20px"
        })
      });
    },
    _v40 = ({
      label: _v0
    }) => (0, _v1.jsxs)(_v7.HStack, {
      gap: "8px",
      align: "flex-start",
      children: [(0, _v1.jsx)(_v14.Text, {
        color: "text-primary",
        fontSize: "13px",
        lineHeight: "1.5",
        flexShrink: 0,
        children: "•"
      }), (0, _v1.jsx)(_v14.Text, {
        variant: "heading-xs",
        color: "text-primary",
        children: _v0
      })]
    }),
    _v41 = ({
      title: _v0,
      description: _v1
    }) => (0, _v1.jsxs)(_v6.Flex, {
      gap: "8px",
      alignItems: "flex-start",
      width: "100%",
      children: [(0, _v1.jsx)(_v14.Text, {
        color: "text-primary",
        fontSize: "13px",
        lineHeight: "1.5",
        flexShrink: 0,
        children: "•"
      }), (0, _v1.jsxs)(_v14.Text, {
        variant: "body-md",
        color: "text-tertiary",
        children: [(0, _v1.jsx)(_v14.Text, {
          as: "span",
          variant: "heading-xs",
          color: "text-primary",
          children: _v0
        }), " ", _v1]
      })]
    });
  _v0.s(["AutoRenewRetentionModal", 0, ({
    isOpen: _v0,
    onClose: _v1,
    onAutoRenewEnabled: _v2,
    onError: _v3,
    subscriptionId: _v4,
    currentPlanName: _v5,
    currentTier: _v6,
    targetTier: _v7,
    endDate: _v8,
    layout: _v9 = "downgrade",
    secondaryLabel: _v10,
    onEnableClick: _v11,
    showCloseButton: _v12 = !1
  }) => {
    let {
        baseUrl: _v13,
        jwt: _v14,
        xVimeoPage: _v15,
        locale: _v16
      } = (0, _v26.useGctlConfig)(),
      [_v17, _v18] = (0, _v2.useState)(!1),
      _v19 = "encouragement" === _v9,
      _v20 = (0, _v32.useViewer)(),
      _v21 = _v20?.user?.id,
      _v22 = _v20?.teamUser?.ownerId ?? _v21,
      {
        data: _v23
      } = (0, _v27.useGetMePaymentMethods)(() => !_v0 || _v19 ? null : {
        select: ["id", "card.brand", "card.lastFourDigits", "type", "isDefault"],
        query: {
          perPage: 1
        }
      }),
      {
        data: _v24
      } = (0, _v28.useGetUser)(() => _v0 && _v19 && null != _v22 ? {
        select: ["uploadQuota.space.max"],
        where: {
          userId: Number(_v22)
        }
      } : null),
      {
        data: _v25
      } = (0, _v29.useGetUserSettingsBillingMembership)(() => _v0 && _v19 && null != _v22 ? {
        select: ["seatCount"],
        where: {
          userId: Number(_v22)
        }
      } : null),
      _v26 = _v23?.data?.[0],
      _v27 = _v26?.id,
      _v28 = _v26?.card?.lastFourDigits,
      _v29 = (0, _v37.getPaymentsServiceCardBrandLabel)(_v26),
      _v30 = _v24?.uploadQuota?.space?.max ? (0, _v31.formatBytes)(_v24.uploadQuota.space.max, !1) : "",
      _v31 = _v25?.seatCount,
      _v32 = _v36(_v6, _v7).slice(0, 3),
      _v33 = (0, _v37.daysUntil)(_v8),
      _v34 = (0, _v37.formatSuspensionDate)(_v8),
      _v35 = "u" > typeof navigator && navigator.language || _v16 || "en-US",
      _v36 = _v8 ? new Date(_v8).toLocaleDateString(_v35, {
        month: "long",
        day: "numeric",
        timeZone: "UTC"
      }) : "",
      _v37 = (0, _v2.useCallback)(async () => {
        _v11?.(), _v18(!0);
        try {
          await _v25({
            select: [],
            where: {
              subscriptionId: _v4
            },
            variables: {
              autoRenew: !0,
              paymentMethodId: _v27
            },
            baseUrl: _v13,
            headers: {
              "Content-Type": "application/json",
              Authorization: _v14 ? `jwt ${_v14}` : "",
              "Vimeo-Page": `${_v15}`,
              "Accept-Language": _v16 ?? "en"
            }
          }), _v2();
        } catch {
          _v3?.();
        } finally {
          _v18(!1);
        }
      }, [_v4, _v27, _v13, _v14, _v15, _v16, _v2, _v3, _v11]);
    return _v0 ? (0, _v1.jsxs)(_v8.Modal, {
      isOpen: !0,
      onClose: _v1,
      size: _v19 ? "md" : ["full", "md"],
      scrollBehavior: "outside",
      closeOnOverlayClick: !_v19,
      closeOnEsc: !_v19,
      children: [(0, _v1.jsx)(_v13.ModalOverlay, {}), (0, _v1.jsxs)(_v11.ModalContent, {
        maxWidth: _v19 ? {
          base: "calc(100vw - 32px)",
          md: "480px"
        } : {
          base: "100vw",
          md: "480px"
        },
        width: _v19 ? {
          base: "calc(100vw - 32px)",
          md: "480px"
        } : {
          base: "100vw",
          md: "480px"
        },
        height: _v19 ? "auto" : {
          base: "100dvh",
          md: "auto"
        },
        minH: _v19 ? "auto" : {
          base: "100dvh",
          md: "auto"
        },
        borderRadius: _v19 ? "20px" : {
          base: "0",
          md: "20px"
        },
        margin: "auto",
        overflow: "hidden",
        children: [_v12 && (0, _v1.jsx)(_v10.ModalCloseButton, {}), (0, _v1.jsxs)(_v3.Box, {
          px: "24px",
          pt: "24px",
          pb: "8px",
          children: [(0, _v1.jsx)(_v14.Text, {
            variant: "heading-md",
            children: (0, _v30.translate)({
              singular: "Turn auto-renew on to keep your access",
              dictionary: {
                es: {
                  singular: "Activa la renovación automática para mantener tu acceso"
                },
                "de-DE": {
                  singular: "Schalten Sie die automatische Verlängerung ein, um Ihren Zugriff zu behalten"
                },
                "fr-FR": {
                  singular: "Activez le renouvellement automatique pour conserver votre accès"
                },
                "ja-JP": {
                  singular: "アクセスを維持するには自動更新をオンにしてください"
                },
                "ko-KR": {
                  singular: "이용을 계속하려면 자동 갱신을 켜세요"
                },
                "pt-BR": {
                  singular: "Ative a renovação automática para manter seu acesso"
                },
                "zh-CN": {
                  singular: "开启自动续订以保持访问权限"
                }
              }
            })
          }), (0, _v1.jsx)(_v14.Text, {
            variant: "body-md",
            color: "text-secondary",
            mt: "4px",
            children: (0, _v30.translate)({
              singular: "Your {PLAN} plan ends {DATE} — one tap keeps it running.",
              replacements: {
                PLAN: _v5,
                DATE: _v36
              },
              dictionary: {
                es: {
                  singular: "Tu plan {PLAN} termina {DATE} — un toque lo mantiene activo."
                },
                "de-DE": {
                  singular: "Ihr {PLAN}-Plan endet am {DATE} — mit einem Tipp bleibt er aktiv."
                },
                "fr-FR": {
                  singular: "Votre forfait {PLAN} se termine le {DATE} — un simple appui suffit pour le maintenir actif."
                },
                "ja-JP": {
                  singular: "お使いの{PLAN}プランは{DATE}に終了します — ワンタップで継続できます."
                },
                "ko-KR": {
                  singular: "귀하의 {PLAN} 요금제는 {DATE}에 종료됩니다 — 탭 한 번으로 계속 이용할 수 있습니다."
                },
                "pt-BR": {
                  singular: "Seu plano {PLAN} termina {DATE} — um toque o mantém ativo."
                },
                "zh-CN": {
                  singular: "您的{PLAN}计划将于{DATE}到期 — 轻触一次即可继续使用."
                }
              }
            })
          })]
        }), (0, _v1.jsx)(_v9.ModalBody, {
          px: "24px",
          pt: "20px",
          pb: "8px",
          children: (0, _v1.jsxs)(_v15.VStack, {
            gap: "16px",
            align: "stretch",
            children: [(0, _v1.jsxs)(_v7.HStack, {
              gap: "10px",
              px: "16px",
              py: "12px",
              bg: "status-caution-secondary",
              borderRadius: "12px",
              alignItems: "center",
              children: [(0, _v1.jsx)(_v5.Center, {
                flexShrink: 0,
                p: "8px",
                borderRadius: "full",
                bg: "status-caution-primary",
                children: (0, _v1.jsx)(_v16.CircleExclamation, {
                  width: "24px",
                  height: "24px",
                  color: "white"
                })
              }), (0, _v1.jsxs)(_v3.Box, {
                flex: "1",
                minW: 0,
                children: [(0, _v1.jsx)(_v14.Text, {
                  variant: "heading-sm",
                  color: "text-primary",
                  children: (0, _v30.translate)({
                    singular: "{DAYS} day until you lose access",
                    plural: "{DAYS} days until you lose access",
                    count: _v33,
                    replacements: {
                      DAYS: _v33
                    },
                    dictionary: {
                      es: {
                        singular: "{DAYS} día hasta que pierdas el acceso",
                        plural: "{DAYS} días hasta que pierdas el acceso"
                      },
                      "de-DE": {
                        singular: "{DAYS} Tag bis zum Verlust des Zugriffs",
                        plural: "{DAYS} Tage bis zum Verlust des Zugriffs"
                      },
                      "fr-FR": {
                        singular: "{DAYS} jour avant de perdre l'accès",
                        plural: "{DAYS} jours avant de perdre l'accès"
                      },
                      "ja-JP": {
                        singular: "{DAYS}日でアクセスを失います",
                        plural: "{DAYS}日でアクセスを失います"
                      },
                      "ko-KR": {
                        singular: "{DAYS}일 후에 이용 권한이 종료됩니다",
                        plural: "{DAYS}일 후에 이용 권한이 종료됩니다"
                      },
                      "pt-BR": {
                        singular: "{DAYS} dia até perder o acesso",
                        plural: "{DAYS} dias até perder o acesso"
                      },
                      "zh-CN": {
                        singular: "{DAYS} 天后您将失去访问权限",
                        plural: "{DAYS} 天后您将失去访问权限"
                      }
                    }
                  })
                }), _v34 && (0, _v1.jsx)(_v14.Text, {
                  variant: "body-sm",
                  color: "text-secondary",
                  mt: "2px",
                  children: _v34
                })]
              })]
            }), _v19 ? (0, _v1.jsxs)(_v15.VStack, {
              gap: "8px",
              align: "stretch",
              children: [(0, _v1.jsx)(_v14.Text, {
                variant: "heading-xs",
                color: "text-primary",
                children: (0, _v30.translate)({
                  singular: "If not resolved, you will lose:",
                  dictionary: {
                    es: {
                      singular: "Si no se resuelve, perderá:"
                    },
                    "de-DE": {
                      singular: "Wenn nicht behoben, verlieren Sie:"
                    },
                    "fr-FR": {
                      singular: "Si cela n'est pas résolu, vous perdrez :"
                    },
                    "ja-JP": {
                      singular: "未解決の場合、以下を失います："
                    },
                    "ko-KR": {
                      singular: "해결되지 않으면 다음을 잃게 됩니다:"
                    },
                    "pt-BR": {
                      singular: "Se não for resolvido, você perderá:"
                    },
                    "zh-CN": {
                      singular: "如果未解决，您将失去:"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v41, {
                title: _v30 ? (0, _v30.translate)({
                  singular: "Access to {STORAGE} of storage",
                  replacements: {
                    STORAGE: _v30
                  },
                  dictionary: {
                    es: {
                      singular: "Acceso a {STORAGE} de almacenamiento"
                    },
                    "de-DE": {
                      singular: "Zugriff auf {STORAGE} Speicherplatz"
                    },
                    "fr-FR": {
                      singular: "Accès à {STORAGE} d'espace de stockage"
                    },
                    "ja-JP": {
                      singular: "{STORAGE} のストレージへのアクセス"
                    },
                    "ko-KR": {
                      singular: "{STORAGE}의 저장 공간 이용 가능"
                    },
                    "pt-BR": {
                      singular: "Acesso a {STORAGE} de armazenamento"
                    },
                    "zh-CN": {
                      singular: "可使用 {STORAGE} 的存储空间"
                    }
                  }
                }) : (0, _v30.translate)({
                  singular: "Access to your storage",
                  dictionary: {
                    es: {
                      singular: "Acceso a su almacenamiento"
                    },
                    "de-DE": {
                      singular: "Zugriff auf Ihren Speicher"
                    },
                    "fr-FR": {
                      singular: "Accès à votre stockage"
                    },
                    "ja-JP": {
                      singular: "ストレージへのアクセス"
                    },
                    "ko-KR": {
                      singular: "저장소 액세스"
                    },
                    "pt-BR": {
                      singular: "Acesso ao seu armazenamento"
                    },
                    "zh-CN": {
                      singular: "访问您的存储空间"
                    }
                  }
                }),
                description: (0, _v30.translate)({
                  singular: "currently in use",
                  dictionary: {
                    es: {
                      singular: "actualmente en uso"
                    },
                    "de-DE": {
                      singular: "derzeit in Verwendung"
                    },
                    "fr-FR": {
                      singular: "actuellement utilisé"
                    },
                    "ja-JP": {
                      singular: "現在使用中"
                    },
                    "ko-KR": {
                      singular: "현재 사용 중"
                    },
                    "pt-BR": {
                      singular: "atualmente em uso"
                    },
                    "zh-CN": {
                      singular: "当前正在使用"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v41, {
                title: (0, _v30.translate)({
                  singular: "Access to all privacy options",
                  dictionary: {
                    es: {
                      singular: "Acceso a todas las opciones de privacidad"
                    },
                    "de-DE": {
                      singular: "Zugriff auf alle Datenschutzeinstellungen"
                    },
                    "fr-FR": {
                      singular: "Accès à toutes les options de confidentialité"
                    },
                    "ja-JP": {
                      singular: "すべてのプライバシーオプションへのアクセス"
                    },
                    "ko-KR": {
                      singular: "모든 개인정보 보호 옵션에 대한 액세스"
                    },
                    "pt-BR": {
                      singular: "Acesso a todas as opções de privacidade"
                    },
                    "zh-CN": {
                      singular: "访问所有隐私选项"
                    }
                  }
                }),
                description: (0, _v30.translate)({
                  singular: "for all your videos",
                  dictionary: {
                    es: {
                      singular: "para todos tus vídeos"
                    },
                    "de-DE": {
                      singular: "für alle Ihre Videos"
                    },
                    "fr-FR": {
                      singular: "pour toutes vos vidéos"
                    },
                    "ja-JP": {
                      singular: "すべての動画に対して"
                    },
                    "ko-KR": {
                      singular: "모든 동영상에 대해"
                    },
                    "pt-BR": {
                      singular: "para todos os seus vídeos"
                    },
                    "zh-CN": {
                      singular: "适用于您所有的视频"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v41, {
                title: "number" == typeof _v31 ? (0, _v30.translate)({
                  singular: "{COUNT} seat",
                  plural: "{COUNT} seats",
                  count: _v31,
                  replacements: {
                    COUNT: `${_v31}`
                  },
                  dictionary: {
                    es: {
                      singular: "{COUNT} asiento",
                      plural: "{COUNT} asientos"
                    },
                    "de-DE": {
                      singular: "{COUNT} Nutzerplatz",
                      plural: "{COUNT} Nutzerplätze"
                    },
                    "fr-FR": {
                      singular: "{COUNT} siège",
                      plural: "{COUNT} sièges"
                    },
                    "ja-JP": {
                      singular: "{COUNT}席",
                      plural: "{COUNT}席"
                    },
                    "ko-KR": {
                      singular: "{COUNT} 좌석",
                      plural: "{COUNT} 좌석"
                    },
                    "pt-BR": {
                      singular: "{COUNT} vaga",
                      plural: "{COUNT} vagas"
                    },
                    "zh-CN": {
                      singular: "{COUNT} 个席位",
                      plural: "{COUNT} 个席位"
                    }
                  }
                }) : (0, _v30.translate)({
                  singular: "Multiple seats",
                  dictionary: {
                    es: {
                      singular: "Múltiples asientos"
                    },
                    "de-DE": {
                      singular: "Mehrere Nutzerplätze"
                    },
                    "fr-FR": {
                      singular: "Plusieurs sièges"
                    },
                    "ja-JP": {
                      singular: "複数のシート"
                    },
                    "ko-KR": {
                      singular: "여러 좌석"
                    },
                    "pt-BR": {
                      singular: "Várias vagas"
                    },
                    "zh-CN": {
                      singular: "多个席位"
                    }
                  }
                }),
                description: (0, _v30.translate)({
                  singular: "to collaborate with your team",
                  dictionary: {
                    es: {
                      singular: "para colaborar con tu equipo"
                    },
                    "de-DE": {
                      singular: "zur Zusammenarbeit mit Ihrem Team"
                    },
                    "fr-FR": {
                      singular: "pour collaborer avec votre équipe"
                    },
                    "ja-JP": {
                      singular: "チームと共同で作業するために"
                    },
                    "ko-KR": {
                      singular: "팀과 협업하기 위해"
                    },
                    "pt-BR": {
                      singular: "para colaborar com sua equipe"
                    },
                    "zh-CN": {
                      singular: "与您的团队协作"
                    }
                  }
                })
              })]
            }) : _v32.length > 0 && (0, _v1.jsxs)(_v15.VStack, {
              gap: "8px",
              align: "stretch",
              children: [(0, _v1.jsx)(_v14.Text, {
                variant: "heading-xs",
                color: "text-primary",
                children: (0, _v30.translate)({
                  singular: "If not resolved, you will lose:",
                  dictionary: {
                    es: {
                      singular: "Si no se resuelve, perderá:"
                    },
                    "de-DE": {
                      singular: "Wenn nicht behoben, verlieren Sie:"
                    },
                    "fr-FR": {
                      singular: "Si cela n'est pas résolu, vous perdrez :"
                    },
                    "ja-JP": {
                      singular: "未解決の場合、以下を失います："
                    },
                    "ko-KR": {
                      singular: "해결되지 않으면 다음을 잃게 됩니다:"
                    },
                    "pt-BR": {
                      singular: "Se não for resolvido, você perderá:"
                    },
                    "zh-CN": {
                      singular: "如果未解决，您将失去:"
                    }
                  }
                })
              }), _v32.map(_v0 => (0, _v1.jsx)(_v40, {
                label: _v0
              }, _v0))]
            }), !_v19 && _v28 && (0, _v1.jsxs)(_v7.HStack, {
              justifyContent: "space-between",
              px: "12px",
              py: "10px",
              bg: "fill-component",
              borderRadius: "8px",
              children: [(0, _v1.jsxs)(_v7.HStack, {
                gap: "8px",
                children: [(0, _v1.jsx)(_v39, {
                  cardBrand: _v29
                }), (0, _v1.jsxs)(_v14.Text, {
                  variant: "body-md",
                  color: "text-tertiary",
                  children: [_v29, " ••••", _v28]
                })]
              }), (0, _v1.jsx)(_v5.Center, {
                bg: "status-caution-primary",
                px: "6px",
                py: "2px",
                borderRadius: "4px",
                children: (0, _v1.jsx)(_v14.Text, {
                  fontSize: "11px",
                  fontWeight: "500",
                  color: "text-button-inverted",
                  whiteSpace: "nowrap",
                  children: (0, _v30.translate)({
                    singular: "Auto-renew off",
                    dictionary: {
                      es: {
                        singular: "Renovación automática desactivada"
                      },
                      "de-DE": {
                        singular: "Automatische Verlängerung deaktiviert"
                      },
                      "fr-FR": {
                        singular: "Renouvellement automatique désactivé"
                      },
                      "ja-JP": {
                        singular: "自動更新オフ"
                      },
                      "ko-KR": {
                        singular: "자동 갱신 꺼짐"
                      },
                      "pt-BR": {
                        singular: "Renovação automática desativada"
                      },
                      "zh-CN": {
                        singular: "自动续订已关闭"
                      }
                    }
                  })
                })
              })]
            })]
          })
        }), (0, _v1.jsx)(_v12.ModalFooter, {
          px: "24px",
          pt: "20px",
          pb: "24px",
          children: _v19 ? (0, _v1.jsxs)(_v6.Flex, {
            direction: {
              base: "column",
              md: "row"
            },
            width: "100%",
            gap: "12px",
            justifyContent: {
              md: "flex-end"
            },
            children: [(0, _v1.jsx)(_v4.Button, {
              variant: "primary",
              size: "md",
              width: {
                base: "100%",
                md: "auto"
              },
              order: {
                base: 0,
                md: 1
              },
              onClick: _v37,
              isLoading: _v17,
              children: (0, _v30.translate)({
                singular: "Enable auto-renew",
                dictionary: {
                  es: {
                    singular: "Habilitar la renovación automática"
                  },
                  "de-DE": {
                    singular: "Automatische Verlängerung aktivieren"
                  },
                  "fr-FR": {
                    singular: "Activer le renouvellement automatique"
                  },
                  "ja-JP": {
                    singular: "自動更新を有効にする"
                  },
                  "ko-KR": {
                    singular: "자동 갱신 활성화"
                  },
                  "pt-BR": {
                    singular: "Ativar renovação automática"
                  },
                  "zh-CN": {
                    singular: "启用自动续订"
                  }
                }
              })
            }), (0, _v1.jsx)(_v4.Button, {
              variant: "destructive",
              size: "md",
              width: {
                base: "100%",
                md: "auto"
              },
              order: {
                base: 1,
                md: 0
              },
              onClick: _v1,
              isDisabled: _v17,
              children: _v10 ?? (0, _v30.translate)({
                singular: "Let it expire",
                dictionary: {
                  es: {
                    singular: "Dejar que caduque"
                  },
                  "de-DE": {
                    singular: "Ablaufen lassen"
                  },
                  "fr-FR": {
                    singular: "Laisser expirer"
                  },
                  "ja-JP": {
                    singular: "期限切れにする"
                  },
                  "ko-KR": {
                    singular: "만료되도록 두기"
                  },
                  "pt-BR": {
                    singular: "Deixar expirar"
                  },
                  "zh-CN": {
                    singular: "让其到期"
                  }
                }
              })
            })]
          }) : (0, _v1.jsxs)(_v7.HStack, {
            width: "100%",
            justifyContent: "flex-end",
            gap: "12px",
            children: [(0, _v1.jsx)(_v4.Button, {
              variant: "destructive",
              size: "md",
              onClick: _v1,
              isDisabled: _v17,
              children: _v10 ?? (0, _v30.translate)({
                singular: "Let it expire",
                dictionary: {
                  es: {
                    singular: "Dejar que caduque"
                  },
                  "de-DE": {
                    singular: "Ablaufen lassen"
                  },
                  "fr-FR": {
                    singular: "Laisser expirer"
                  },
                  "ja-JP": {
                    singular: "期限切れにする"
                  },
                  "ko-KR": {
                    singular: "만료되도록 두기"
                  },
                  "pt-BR": {
                    singular: "Deixar expirar"
                  },
                  "zh-CN": {
                    singular: "让其到期"
                  }
                }
              })
            }), (0, _v1.jsx)(_v4.Button, {
              variant: "primary",
              size: "md",
              onClick: _v37,
              isLoading: _v17,
              children: (0, _v30.translate)({
                singular: "Enable auto-renew",
                dictionary: {
                  es: {
                    singular: "Habilitar la renovación automática"
                  },
                  "de-DE": {
                    singular: "Automatische Verlängerung aktivieren"
                  },
                  "fr-FR": {
                    singular: "Activer le renouvellement automatique"
                  },
                  "ja-JP": {
                    singular: "自動更新を有効にする"
                  },
                  "ko-KR": {
                    singular: "자동 갱신 활성화"
                  },
                  "pt-BR": {
                    singular: "Ativar renovação automática"
                  },
                  "zh-CN": {
                    singular: "启用自动续订"
                  }
                }
              })
            })]
          })
        })]
      })]
    }) : null;
  }], 0);
}