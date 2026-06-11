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
    _v15 = _v0.i(0);
  let _v16 = {
    ASC: "asc",
    DESC: "desc"
  };
  _v0.s(["SortDirection", 0, _v16], 0);
  let _v17 = [{
      ariaLabel: (0, _v12.translate)({
        singular: "Settings",
        dictionary: {
          es: {
            singular: "Configuración"
          },
          "de-DE": {
            singular: "Einstellungen"
          },
          "fr-FR": {
            singular: "Paramètres"
          },
          "ja-JP": {
            singular: "設定"
          },
          "ko-KR": {
            singular: "설정"
          },
          "pt-BR": {
            singular: "Configurações"
          },
          "zh-CN": {
            singular: "设置"
          }
        }
      }),
      Icon: _v10.SettingsGear,
      path: _v15.ShowcaseRouteMap.INFO,
      activePath: [_v15.ShowcaseRouteMap.INFO, _v15.ShowcaseRouteMap.ROKU_TV_APPS, _v15.ShowcaseRouteMap.REGISTRATION, _v15.ShowcaseRouteMap.AMAZON_TV_APPS, _v15.ShowcaseRouteMap.SEO],
      dataId: "showcase-settings",
      visible: !0
    }, {
      ariaLabel: (0, _v12.translate)({
        singular: "Layout",
        dictionary: {
          es: {
            singular: "Diseño"
          },
          "fr-FR": {
            singular: "Mise en page"
          },
          "ja-JP": {
            singular: "レイアウト"
          },
          "ko-KR": {
            singular: "레이아웃"
          },
          "zh-CN": {
            singular: "布局"
          }
        }
      }),
      Icon: _v9.Playlist,
      path: _v15.ShowcaseRouteMap.LAYOUT,
      activePath: [_v15.ShowcaseRouteMap.LAYOUT, _v15.ShowcaseRouteMap.LAYOUT_NAVIGATION, _v15.ShowcaseRouteMap.LAYOUT_FEATURED, _v15.ShowcaseRouteMap.LAYOUT_VIDEO_GRID],
      dataId: "showcase-layout",
      visible: !0
    }, {
      ariaLabel: (0, _v12.translate)({
        singular: "Playback",
        dictionary: {
          es: {
            singular: "Reproducción"
          },
          "de-DE": {
            singular: "Wiedergabe"
          },
          "fr-FR": {
            singular: "Lecture"
          },
          "ja-JP": {
            singular: "再生"
          },
          "ko-KR": {
            singular: "재생"
          },
          "pt-BR": {
            singular: "Reprodução"
          },
          "zh-CN": {
            singular: "回放"
          }
        }
      }),
      Icon: _v8.PlayCircle,
      path: _v15.ShowcaseRouteMap.PLAYBACK,
      activePath: [_v15.ShowcaseRouteMap.PLAYBACK],
      dataId: "showcase-playback",
      visible: !0
    }],
    _v18 = [_v15.ShowcaseRouteMap.ANALYTICS, _v15.ShowcaseRouteMap.WEB_LAYOUT, _v15.ShowcaseRouteMap.LIST],
    _v19 = [{
      path: _v15.ShowcaseRouteMap.INFO,
      Component: (0, _v2.lazy)(() => _v0.A(0))
    }, {
      path: _v15.ShowcaseRouteMap.SEO,
      Component: (0, _v2.lazy)(() => _v0.A(0))
    }, {
      path: _v15.ShowcaseRouteMap.TV_APPS,
      Component: (0, _v2.lazy)(() => _v0.A(0))
    }, {
      path: _v15.ShowcaseRouteMap.CUSTOMIZATION,
      Component: (0, _v2.lazy)(() => _v0.A(0))
    }, {
      path: _v15.ShowcaseRouteMap.REGISTRATION,
      Component: (0, _v2.lazy)(() => _v0.A(0))
    }],
    _v20 = [{
      path: _v15.ShowcaseRouteMap.LAYOUT_FEATURED,
      Component: (0, _v2.lazy)(() => _v0.A(0))
    }, {
      path: _v15.ShowcaseRouteMap.LAYOUT_NAVIGATION,
      Component: (0, _v2.lazy)(() => _v0.A(0))
    }, {
      path: _v15.ShowcaseRouteMap.LAYOUT_VIDEO_GRID,
      Component: (0, _v2.lazy)(() => _v0.A(0))
    }, {
      path: _v15.ShowcaseRouteMap.LAYOUT,
      Component: (0, _v2.lazy)(() => _v0.A(0))
    }, {
      path: _v15.ShowcaseRouteMap.PLAYBACK,
      Component: (0, _v2.lazy)(() => _v0.A(0))
    }],
    _v21 = [{
      path: _v15.ShowcaseRouteMap.MAIN_CONTENT_AB_TEST_NEW_ROUTES,
      Component: (0, _v2.lazy)(() => _v0.A(0))
    }],
    _v22 = [{
      path: _v15.ShowcaseRouteMap.ANALYTICS,
      Component: (0, _v2.lazy)(() => _v0.A(0))
    }],
    _v23 = [{
      path: _v15.ShowcaseRouteMap.INFO,
      Component: (0, _v2.lazy)(() => _v0.A(0))
    }],
    _v24 = {
      [_v15.ShowcaseRouteMap.INFO]: _v0 => _v0 === _v15.ShowcaseRouteMap.INFO ? _v15.ShowcaseRouteMap.WEB_LAYOUT : _v15.ShowcaseRouteMap.INFO,
      [_v15.ShowcaseRouteMap.LAYOUT]: _v0 => _v0 === _v15.ShowcaseRouteMap.LAYOUT ? _v15.ShowcaseRouteMap.WEB_LAYOUT : _v15.ShowcaseRouteMap.LAYOUT,
      [_v15.ShowcaseRouteMap.PLAYBACK]: _v0 => _v0 === _v15.ShowcaseRouteMap.PLAYBACK ? _v15.ShowcaseRouteMap.WEB_LAYOUT : _v15.ShowcaseRouteMap.PLAYBACK
    },
    _v25 = {
      Title: (0, _v12.translate)({
        singular: "Aim for 50–60 characters or less",
        dictionary: {
          es: {
            singular: "Intente escribir entre 50 y 60 caracteres o menos."
          },
          "de-DE": {
            singular: "Abzielen auf 50–60 Zeichen oder weniger"
          },
          "fr-FR": {
            singular: "Visez 50 à 60 caractères ou moins"
          },
          "ja-JP": {
            singular: "50〜60文字以下を目安にします"
          },
          "ko-KR": {
            singular: "50~60자 이하로 작성하세요."
          },
          "pt-BR": {
            singular: "Tente usar no máximo de 50 a 60 caracteres"
          },
          "zh-CN": {
            singular: "目标是 50–60 个字符或更少"
          }
        }
      }),
      Description: (0, _v12.translate)({
        singular: "Aim for 50–160 characters",
        dictionary: {
          es: {
            singular: "Intente escribir entre 50 y 160 caracteres."
          },
          "de-DE": {
            singular: "Abzielen auf 50 bis 160 Zeichen"
          },
          "fr-FR": {
            singular: "Visez 50 à 160 caractères"
          },
          "ja-JP": {
            singular: "50〜160文字を目安にします"
          },
          "ko-KR": {
            singular: "50~160자 이내로 작성하세요."
          },
          "pt-BR": {
            singular: "Almeje entre 50 e 160 caracteres"
          },
          "zh-CN": {
            singular: "目标是 50–160 个字符"
          }
        }
      }),
      Keywords: (0, _v12.translate)({
        singular: "Describe the content of your showcase. Include words people might search for.",
        dictionary: {
          es: {
            singular: "Describa el contenido de su presentación. Incluya palabras que las personas puedan buscar."
          },
          "de-DE": {
            singular: "Beschreiben Sie den Inhalt Ihrer Präsentation. Fügen Sie Wörter ein, nach denen Personen suchen könnten."
          },
          "fr-FR": {
            singular: "Décrivez le contenu de votre présentation. Intégrez des mots que les internautes pourraient rechercher."
          },
          "ja-JP": {
            singular: "ショーケースのコンテンツを説明してください。ユーザーが検索する可能性のある単語を含めてください。"
          },
          "ko-KR": {
            singular: "쇼케이스의 내용을 설명하세요. 사람들이 검색할 만한 단어를 포함하세요."
          },
          "pt-BR": {
            singular: "Descreva o conteúdo da sua vitrine. Inclua palavras que as pessoas possam procurar."
          },
          "zh-CN": {
            singular: "描述您的展示的内容。包含人们可能会搜索的字词。"
          }
        }
      })
    },
    _v26 = [{
      label: (0, _v12.translate)({
        singular: "Action",
        dictionary: {
          es: {
            singular: "Acción"
          },
          "de-DE": {
            singular: "Aktion"
          },
          "ja-JP": {
            singular: "アクション"
          },
          "ko-KR": {
            singular: "액션"
          },
          "pt-BR": {
            singular: "Ação"
          },
          "zh-CN": {
            singular: "操作"
          }
        }
      }),
      value: "action"
    }, {
      label: (0, _v12.translate)({
        singular: "Adventure",
        dictionary: {
          es: {
            singular: "Aventura"
          },
          "de-DE": {
            singular: "Abenteuer"
          },
          "fr-FR": {
            singular: "aventure"
          },
          "ja-JP": {
            singular: "冒険"
          },
          "ko-KR": {
            singular: "어드벤처"
          },
          "pt-BR": {
            singular: "Aventura"
          },
          "zh-CN": {
            singular: "冒险"
          }
        }
      }),
      value: "adventure"
    }, {
      label: (0, _v12.translate)({
        singular: "Animals",
        dictionary: {
          es: {
            singular: "Animales"
          },
          "de-DE": {
            singular: "Tiere"
          },
          "fr-FR": {
            singular: "Animaux "
          },
          "ja-JP": {
            singular: "動物"
          },
          "ko-KR": {
            singular: "동물"
          },
          "pt-BR": {
            singular: "Animais"
          },
          "zh-CN": {
            singular: "动物"
          }
        }
      }),
      value: "animals"
    }, {
      label: (0, _v12.translate)({
        singular: "Animated",
        dictionary: {
          es: {
            singular: "Animación"
          },
          "de-DE": {
            singular: "Trickfilm"
          },
          "fr-FR": {
            singular: "Animation "
          },
          "ja-JP": {
            singular: "アニメ"
          },
          "ko-KR": {
            singular: "애니메이션"
          },
          "zh-CN": {
            singular: "动画"
          }
        }
      }),
      value: "animated"
    }, {
      label: (0, _v12.translate)({
        singular: "Anime",
        dictionary: {
          "fr-FR": {
            singular: "animation"
          },
          "ja-JP": {
            singular: "アニメ"
          },
          "ko-KR": {
            singular: "만화"
          },
          "zh-CN": {
            singular: "动画"
          }
        }
      }),
      value: "anime"
    }, {
      label: (0, _v12.translate)({
        singular: "Children",
        dictionary: {
          es: {
            singular: "Niños"
          },
          "de-DE": {
            singular: "Kinder"
          },
          "fr-FR": {
            singular: "enfants"
          },
          "ja-JP": {
            singular: "子供"
          },
          "ko-KR": {
            singular: "아동"
          },
          "pt-BR": {
            singular: "Infantil"
          },
          "zh-CN": {
            singular: "儿童"
          }
        }
      }),
      value: "children"
    }, {
      label: (0, _v12.translate)({
        singular: "Comedy",
        dictionary: {
          es: {
            singular: "Comedia"
          },
          "de-DE": {
            singular: "Komödie"
          },
          "fr-FR": {
            singular: "Comédie"
          },
          "ja-JP": {
            singular: "コメディ"
          },
          "ko-KR": {
            singular: "코미디"
          },
          "pt-BR": {
            singular: "Comédia"
          },
          "zh-CN": {
            singular: "喜剧"
          }
        }
      }),
      value: "comedy"
    }, {
      label: (0, _v12.translate)({
        singular: "Crime",
        dictionary: {
          es: {
            singular: "Crimen"
          },
          "de-DE": {
            singular: "Krimi"
          },
          "fr-FR": {
            singular: "crime"
          },
          "ja-JP": {
            singular: "犯罪系"
          },
          "ko-KR": {
            singular: "범죄"
          },
          "zh-CN": {
            singular: "犯罪"
          }
        }
      }),
      value: "crime"
    }, {
      label: (0, _v12.translate)({
        singular: "Documentary",
        dictionary: {
          es: {
            singular: "Documentales"
          },
          "de-DE": {
            singular: "Dokumentation"
          },
          "fr-FR": {
            singular: "Documentaire"
          },
          "ja-JP": {
            singular: "ドキュメンタリー"
          },
          "ko-KR": {
            singular: "다큐멘터리"
          },
          "pt-BR": {
            singular: "Documentário"
          },
          "zh-CN": {
            singular: "纪录片"
          }
        }
      }),
      value: "documentary"
    }, {
      label: (0, _v12.translate)({
        singular: "Drama",
        dictionary: {
          "fr-FR": {
            singular: "Drame "
          },
          "ja-JP": {
            singular: "ドラマ"
          },
          "ko-KR": {
            singular: "드라마"
          },
          "zh-CN": {
            singular: "戏剧"
          }
        }
      }),
      value: "drama"
    }, {
      label: (0, _v12.translate)({
        singular: "Educational",
        dictionary: {
          es: {
            singular: "Educativo"
          },
          "de-DE": {
            singular: "Bildung"
          },
          "fr-FR": {
            singular: "Éducation"
          },
          "ja-JP": {
            singular: "教育"
          },
          "ko-KR": {
            singular: "교육"
          },
          "pt-BR": {
            singular: "Educacionais"
          },
          "zh-CN": {
            singular: "教育"
          }
        }
      }),
      value: "educational"
    }, {
      label: (0, _v12.translate)({
        singular: "Fantasy",
        dictionary: {
          es: {
            singular: "Fantasía"
          },
          "fr-FR": {
            singular: "fantastique"
          },
          "ja-JP": {
            singular: "ファンタジー"
          },
          "ko-KR": {
            singular: "판타지"
          },
          "pt-BR": {
            singular: "Fantasia"
          },
          "zh-CN": {
            singular: "奇幻"
          }
        }
      }),
      value: "fantasy"
    }, {
      label: (0, _v12.translate)({
        singular: "Faith",
        dictionary: {
          es: {
            singular: "Fe"
          },
          "de-DE": {
            singular: "Glaube"
          },
          "fr-FR": {
            singular: "Spiritualité"
          },
          "ja-JP": {
            singular: "信仰"
          },
          "ko-KR": {
            singular: "신앙"
          },
          "pt-BR": {
            singular: "Religião"
          },
          "zh-CN": {
            singular: "信仰"
          }
        }
      }),
      value: "faith"
    }, {
      label: (0, _v12.translate)({
        singular: "Food",
        dictionary: {
          es: {
            singular: "Comida"
          },
          "de-DE": {
            singular: "Essen"
          },
          "fr-FR": {
            singular: "Cuisine "
          },
          "ja-JP": {
            singular: "フード"
          },
          "ko-KR": {
            singular: "음식"
          },
          "pt-BR": {
            singular: "Gastronomia"
          },
          "zh-CN": {
            singular: "食品"
          }
        }
      }),
      value: "food"
    }, {
      label: (0, _v12.translate)({
        singular: "Fashion",
        dictionary: {
          es: {
            singular: "Moda"
          },
          "de-DE": {
            singular: "Mode"
          },
          "fr-FR": {
            singular: "Mode"
          },
          "ja-JP": {
            singular: "ファッション"
          },
          "ko-KR": {
            singular: "패션"
          },
          "pt-BR": {
            singular: "Moda"
          },
          "zh-CN": {
            singular: "时尚"
          }
        }
      }),
      value: "fashion"
    }, {
      label: (0, _v12.translate)({
        singular: "Gaming",
        dictionary: {
          es: {
            singular: "Juegos"
          },
          "fr-FR": {
            singular: "jeux"
          },
          "ja-JP": {
            singular: "ゲーム"
          },
          "ko-KR": {
            singular: "게임"
          },
          "pt-BR": {
            singular: "Jogos"
          },
          "zh-CN": {
            singular: "游戏"
          }
        }
      }),
      value: "gaming"
    }, {
      label: (0, _v12.translate)({
        singular: "Health",
        dictionary: {
          es: {
            singular: "Salud"
          },
          "de-DE": {
            singular: "Gesundheit"
          },
          "fr-FR": {
            singular: "santé"
          },
          "ja-JP": {
            singular: "健康"
          },
          "ko-KR": {
            singular: "건강"
          },
          "pt-BR": {
            singular: "Saúde"
          },
          "zh-CN": {
            singular: "健康"
          }
        }
      }),
      value: "health"
    }, {
      label: (0, _v12.translate)({
        singular: "History",
        dictionary: {
          es: {
            singular: "Historial"
          },
          "de-DE": {
            singular: "Verlauf"
          },
          "fr-FR": {
            singular: "Historique"
          },
          "ja-JP": {
            singular: "履歴"
          },
          "ko-KR": {
            singular: "기록"
          },
          "pt-BR": {
            singular: "Histórico"
          },
          "zh-CN": {
            singular: "历史记录"
          }
        }
      }),
      value: "history"
    }, {
      label: (0, _v12.translate)({
        singular: "Horror",
        dictionary: {
          es: {
            singular: "Terror"
          },
          "fr-FR": {
            singular: "Horreur "
          },
          "ja-JP": {
            singular: "ホラー"
          },
          "ko-KR": {
            singular: "호러"
          },
          "pt-BR": {
            singular: "Terror"
          },
          "zh-CN": {
            singular: "恐怖"
          }
        }
      }),
      value: "horror"
    }, {
      label: (0, _v12.translate)({
        singular: "Miniseries",
        dictionary: {
          es: {
            singular: "Miniserie"
          },
          "de-DE": {
            singular: "Miniserien"
          },
          "fr-FR": {
            singular: "mini-séries"
          },
          "ja-JP": {
            singular: "ミニシリーズ"
          },
          "ko-KR": {
            singular: "미니시리즈"
          },
          "pt-BR": {
            singular: "Minissérie"
          },
          "zh-CN": {
            singular: "迷您剧"
          }
        }
      }),
      value: "miniseries"
    }, {
      label: (0, _v12.translate)({
        singular: "Mystery",
        dictionary: {
          es: {
            singular: "Misterio"
          },
          "fr-FR": {
            singular: "mystère"
          },
          "ja-JP": {
            singular: "ミステリー"
          },
          "ko-KR": {
            singular: "미스터리"
          },
          "pt-BR": {
            singular: "Mistério"
          },
          "zh-CN": {
            singular: "神秘"
          }
        }
      }),
      value: "mystery"
    }, {
      label: (0, _v12.translate)({
        singular: "Nature",
        dictionary: {
          es: {
            singular: "Naturaleza"
          },
          "de-DE": {
            singular: "Natur"
          },
          "ja-JP": {
            singular: "ネイチャー"
          },
          "ko-KR": {
            singular: "자연"
          },
          "pt-BR": {
            singular: "Natureza"
          },
          "zh-CN": {
            singular: "自然"
          }
        }
      }),
      value: "nature"
    }, {
      label: (0, _v12.translate)({
        singular: "News",
        dictionary: {
          es: {
            singular: "Noticias"
          },
          "fr-FR": {
            singular: "Actualités"
          },
          "ja-JP": {
            singular: "ニュース"
          },
          "ko-KR": {
            singular: "뉴스"
          },
          "pt-BR": {
            singular: "Notícias"
          },
          "zh-CN": {
            singular: "新闻"
          }
        }
      }),
      value: "news"
    }, {
      label: (0, _v12.translate)({
        singular: "Reality",
        dictionary: {
          es: {
            singular: "Realidad"
          },
          "fr-FR": {
            singular: "réalité"
          },
          "ja-JP": {
            singular: "リアリティー"
          },
          "ko-KR": {
            singular: "리얼리티"
          },
          "pt-BR": {
            singular: "Realidade"
          },
          "zh-CN": {
            singular: "现实"
          }
        }
      }),
      value: "reality"
    }, {
      label: (0, _v12.translate)({
        singular: "Romance",
        dictionary: {
          "de-DE": {
            singular: "Romantik"
          },
          "fr-FR": {
            singular: "Comédie Romantique"
          },
          "ja-JP": {
            singular: "ロマンス"
          },
          "ko-KR": {
            singular: "로맨스"
          },
          "zh-CN": {
            singular: "浪漫"
          }
        }
      }),
      value: "romance"
    }, {
      label: (0, _v12.translate)({
        singular: "Science",
        dictionary: {
          es: {
            singular: "Ciencia"
          },
          "de-DE": {
            singular: "Wissenschaft"
          },
          "ja-JP": {
            singular: "科学"
          },
          "ko-KR": {
            singular: "과학"
          },
          "pt-BR": {
            singular: "Ciências"
          },
          "zh-CN": {
            singular: "科学"
          }
        }
      }),
      value: "science"
    }, {
      label: (0, _v12.translate)({
        singular: "Science Fiction",
        dictionary: {
          es: {
            singular: "Ciencia ficción"
          },
          "de-DE": {
            singular: "Science-Fiction"
          },
          "fr-FR": {
            singular: "science-fiction"
          },
          "ja-JP": {
            singular: "サイエンス フィクション"
          },
          "ko-KR": {
            singular: "공상 과학"
          },
          "pt-BR": {
            singular: "Ficção científica"
          },
          "zh-CN": {
            singular: "科幻"
          }
        }
      }),
      value: "science fiction"
    }, {
      label: (0, _v12.translate)({
        singular: "Sitcom",
        dictionary: {
          es: {
            singular: "Comedia de situación"
          },
          "fr-FR": {
            singular: "séries"
          },
          "ja-JP": {
            singular: "シットコム"
          },
          "ko-KR": {
            singular: "시트콤"
          },
          "pt-BR": {
            singular: "Comédia"
          },
          "zh-CN": {
            singular: "情景喜剧"
          }
        }
      }),
      value: "sitcom"
    }, {
      label: (0, _v12.translate)({
        singular: "Special",
        dictionary: {
          es: {
            singular: "Especial"
          },
          "de-DE": {
            singular: "Besonderes"
          },
          "fr-FR": {
            singular: "événements"
          },
          "ja-JP": {
            singular: "スペシャル"
          },
          "ko-KR": {
            singular: "스페셜"
          },
          "pt-BR": {
            singular: "Especial"
          },
          "zh-CN": {
            singular: "特殊的"
          }
        }
      }),
      value: "special"
    }, {
      label: (0, _v12.translate)({
        singular: "Sports",
        dictionary: {
          es: {
            singular: "Deportes"
          },
          "de-DE": {
            singular: "Sport"
          },
          "ja-JP": {
            singular: "スポーツ"
          },
          "ko-KR": {
            singular: "스포츠"
          },
          "pt-BR": {
            singular: "Esportes"
          },
          "zh-CN": {
            singular: "体育"
          }
        }
      }),
      value: "sports"
    }, {
      label: (0, _v12.translate)({
        singular: "Thriller",
        dictionary: {
          es: {
            singular: "Suspenso"
          },
          "ja-JP": {
            singular: "スリラー"
          },
          "ko-KR": {
            singular: "스릴러"
          },
          "pt-BR": {
            singular: "Suspense"
          },
          "zh-CN": {
            singular: "惊悚"
          }
        }
      }),
      value: "thriller"
    }, {
      label: (0, _v12.translate)({
        singular: "Technology",
        dictionary: {
          es: {
            singular: "Tecnología"
          },
          "de-DE": {
            singular: "Technologie"
          },
          "fr-FR": {
            singular: "Technologie"
          },
          "ja-JP": {
            singular: "技術"
          },
          "ko-KR": {
            singular: "테크놀로지"
          },
          "pt-BR": {
            singular: "Tecnologia"
          },
          "zh-CN": {
            singular: "技术"
          }
        }
      }),
      value: "technology"
    }],
    _v27 = [_v14.ShowcaseSeoActionTypeEnum.SEOSTORE_SEO_ALLOW_INDEXED, _v14.ShowcaseTVAppsActionTypeEnum.TVAPPSSTORE_ROKU_GENRES, _v14.ShowcaseTVAppsActionTypeEnum.TVAPPSSTORE_ROKU_LANGUAGE, _v14.ShowcaseTVAppsActionTypeEnum.TVAPPSSTORE_ROKU_PROVIDER_NAME],
    _v28 = {
      default: (0, _v12.translate)({
        singular: "Upgrade to access more customizations",
        dictionary: {
          es: {
            singular: "Cambie de plan para acceder a más personalizaciones."
          },
          "de-DE": {
            singular: "Upgrade vornehmen, um mehr Anpassungen durchzuführen"
          },
          "fr-FR": {
            singular: "Mettez à niveau pour accéder à davantage de personnalisations"
          },
          "ja-JP": {
            singular: "より多くのカスタマイズ機能を利用するには、アップグレードしてください。"
          },
          "ko-KR": {
            singular: "더 많은 사용자 정의 기능을 이용하려면 업그레이드하세요."
          },
          "pt-BR": {
            singular: "Faça upgrade para acessar mais personalizações"
          },
          "zh-CN": {
            singular: "升级以访问更多自定义选项"
          }
        }
      }),
      [_v13.PLANS.STANDARD]: (0, _v12.translate)({
        singular: "Upgrade to Standard to access more customizations",
        dictionary: {
          es: {
            singular: "Actualice al plan Standard para acceder a más personalizaciones."
          },
          "de-DE": {
            singular: "Auf Standard upgraden, um mehr Anpassungen durchzuführen."
          },
          "fr-FR": {
            singular: "Passez à l'abonnement Standard pour accéder à plus de personnalisations"
          },
          "ja-JP": {
            singular: "より多くのカスタマイズ機能にアクセスするには、Standardプランにアップグレードしてください。"
          },
          "ko-KR": {
            singular: "더 많은 사용자 정의 기능을 이용하려면 Standard로 업그레이드하세요."
          },
          "pt-BR": {
            singular: "Faça upgrade para o plano Standard para acessar mais personalizações"
          },
          "zh-CN": {
            singular: "升级到标准版以访问更多自定义选项"
          }
        }
      }),
      [_v13.PLANS.STARTER]: (0, _v12.translate)({
        singular: "Upgrade to Starter to access more customizations",
        dictionary: {
          es: {
            singular: "Actualice al plan Starter para acceder a más personalizaciones."
          },
          "de-DE": {
            singular: "Auf Starter upgraden, um mehr Anpassungen durchzuführen."
          },
          "fr-FR": {
            singular: "Passez à la version Starter pour accéder à davantage de personnalisations."
          },
          "ja-JP": {
            singular: "より多くのカスタマイズ機能を利用するには、Starterプランにアップグレードしてください。"
          },
          "ko-KR": {
            singular: "더 많은 사용자 정의 기능을 이용하려면 Starter로 업그레이드하세요."
          },
          "pt-BR": {
            singular: "Faça upgrade para o plano Starter para acessar mais personalizações"
          },
          "zh-CN": {
            singular: "升级到入门版以访问更多自定义选项。"
          }
        }
      })
    },
    _v29 = {
      planOverrides: {
        starter: {
          featuresList: [(0, _v12.translate)({
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
          }), (0, _v12.translate)({
            singular: "Custom color and customizations in showcases",
            dictionary: {
              es: {
                singular: "Color personalizado y otras personalizaciones en las presentaciones"
              },
              "de-DE": {
                singular: "Benutzerdefinierte Farben und Anpassungen in Präsentationen"
              },
              "fr-FR": {
                singular: "Couleur personnalisée et personnalisations dans vos présentations"
              },
              "ja-JP": {
                singular: "カスタムカラーとショーケースのカスタマイズ"
              },
              "ko-KR": {
                singular: "쇼케이스의 색상 및 구성 요소 커스텀"
              },
              "pt-BR": {
                singular: "Cores e personalizações sob medida para vitrines"
              },
              "zh-CN": {
                singular: "展示中的自定义颜色和设置"
              }
            }
          }), (0, _v12.translate)({
            singular: "Engagement and SEO controls",
            dictionary: {
              es: {
                singular: "Controles de interacción y SEO"
              },
              "de-DE": {
                singular: "Interaktions- und SEO-Kontrollen"
              },
              "fr-FR": {
                singular: "Engagement et contrôles SEO"
              },
              "ja-JP": {
                singular: "エンゲージメントとSEOの管理"
              },
              "ko-KR": {
                singular: "참여 및 SEO 제어"
              },
              "pt-BR": {
                singular: "Controles de engajamento e SEO"
              },
              "zh-CN": {
                singular: "参与和 SEO 控制"
              }
            }
          })]
        },
        standard: {
          featuresList: [(0, _v12.translate)({
            singular: "White-labeled showcases with custom branding and logo",
            dictionary: {
              es: {
                singular: "Presentaciones de etiqueta blanca con marca y logotipo personalizados"
              },
              "de-DE": {
                singular: "White-Label-Präsentationen mit benutzerdefiniertem Branding und Logo"
              },
              "fr-FR": {
                singular: "Présentations en marque blanche avec identité visuelle et logo personnalisés"
              },
              "ja-JP": {
                singular: "カスタムブランディングとロゴを備えたホワイトラベルのショーケース"
              },
              "ko-KR": {
                singular: "화이트 라벨 쇼케이스에 맞춤형 브랜딩과 로고 적용"
              },
              "pt-BR": {
                singular: "Vitrines com white label e com marca e logotipo customizados"
              },
              "zh-CN": {
                singular: "白标展示，带有自定义品牌和徽标"
              }
            }
          }), (0, _v12.translate)({
            singular: "Lead capture with registration",
            dictionary: {
              es: {
                singular: "Captación de clientes potenciales con el registro"
              },
              "de-DE": {
                singular: "Lead-Erfassung mit Registrierung"
              },
              "fr-FR": {
                singular: "Capture de prospects avec inscription"
              },
              "ja-JP": {
                singular: "登録でリードを取得"
              },
              "ko-KR": {
                singular: "등록을 통한 리드 수집"
              },
              "pt-BR": {
                singular: "Captura de leads com inscrição"
              },
              "zh-CN": {
                singular: "通过注册捕获潜在客户"
              }
            }
          }), (0, _v12.translate)({
            singular: "Review and collaboration tools",
            dictionary: {
              es: {
                singular: "Herramientas de revisión y colaboración"
              },
              "de-DE": {
                singular: "Tools für Prüfung und Zusammenarbeit"
              },
              "fr-FR": {
                singular: "Outils de collaboration et de révision"
              },
              "ja-JP": {
                singular: "レビュー＆共同作業ツール"
              },
              "ko-KR": {
                singular: "리뷰 및 콜라보레이션 도구"
              },
              "pt-BR": {
                singular: "Ferramentas de revisão e colaboração"
              },
              "zh-CN": {
                singular: "审查和协作工具"
              }
            }
          }), (0, _v12.translate)({
            singular: "Subtitle translations with AI",
            dictionary: {
              es: {
                singular: "Traducciones de subtítulos con IA"
              },
              "de-DE": {
                singular: "Untertitelübersetzungen mit KI"
              },
              "fr-FR": {
                singular: "Traductions de sous-titres avec l'IA"
              },
              "ja-JP": {
                singular: "AIによる字幕翻訳"
              },
              "ko-KR": {
                singular: "AI 기반 자막 번역"
              },
              "pt-BR": {
                singular: "Traduções de legendas com IA"
              },
              "zh-CN": {
                singular: "使用 AI 进行字幕翻译"
              }
            }
          })]
        },
        plus: {
          featuresList: [(0, _v12.translate)({
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
          }), (0, _v12.translate)({
            singular: "Custom color and customizations in showcases",
            dictionary: {
              es: {
                singular: "Color personalizado y otras personalizaciones en las presentaciones"
              },
              "de-DE": {
                singular: "Benutzerdefinierte Farben und Anpassungen in Präsentationen"
              },
              "fr-FR": {
                singular: "Couleur personnalisée et personnalisations dans vos présentations"
              },
              "ja-JP": {
                singular: "カスタムカラーとショーケースのカスタマイズ"
              },
              "ko-KR": {
                singular: "쇼케이스의 색상 및 구성 요소 커스텀"
              },
              "pt-BR": {
                singular: "Cores e personalizações sob medida para vitrines"
              },
              "zh-CN": {
                singular: "展示中的自定义颜色和设置"
              }
            }
          }), (0, _v12.translate)({
            singular: "Engagement and SEO controls",
            dictionary: {
              es: {
                singular: "Controles de interacción y SEO"
              },
              "de-DE": {
                singular: "Interaktions- und SEO-Kontrollen"
              },
              "fr-FR": {
                singular: "Engagement et contrôles SEO"
              },
              "ja-JP": {
                singular: "エンゲージメントとSEOの管理"
              },
              "ko-KR": {
                singular: "참여 및 SEO 제어"
              },
              "pt-BR": {
                singular: "Controles de engajamento e SEO"
              },
              "zh-CN": {
                singular: "参与和 SEO 控制"
              }
            }
          })]
        },
        pro: {
          featuresList: [(0, _v12.translate)({
            singular: "White-labeled showcases with custom branding and logo",
            dictionary: {
              es: {
                singular: "Presentaciones de etiqueta blanca con marca y logotipo personalizados"
              },
              "de-DE": {
                singular: "White-Label-Präsentationen mit benutzerdefiniertem Branding und Logo"
              },
              "fr-FR": {
                singular: "Présentations en marque blanche avec identité visuelle et logo personnalisés"
              },
              "ja-JP": {
                singular: "カスタムブランディングとロゴを備えたホワイトラベルのショーケース"
              },
              "ko-KR": {
                singular: "화이트 라벨 쇼케이스에 맞춤형 브랜딩과 로고 적용"
              },
              "pt-BR": {
                singular: "Vitrines com white label e com marca e logotipo customizados"
              },
              "zh-CN": {
                singular: "白标展示，带有自定义品牌和徽标"
              }
            }
          }), (0, _v12.translate)({
            singular: "Lead capture with registration",
            dictionary: {
              es: {
                singular: "Captación de clientes potenciales con el registro"
              },
              "de-DE": {
                singular: "Lead-Erfassung mit Registrierung"
              },
              "fr-FR": {
                singular: "Capture de prospects avec inscription"
              },
              "ja-JP": {
                singular: "登録でリードを取得"
              },
              "ko-KR": {
                singular: "등록을 통한 리드 수집"
              },
              "pt-BR": {
                singular: "Captura de leads com inscrição"
              },
              "zh-CN": {
                singular: "通过注册捕获潜在客户"
              }
            }
          }), (0, _v12.translate)({
            singular: "Review and collaboration tools",
            dictionary: {
              es: {
                singular: "Herramientas de revisión y colaboración"
              },
              "de-DE": {
                singular: "Tools für Prüfung und Zusammenarbeit"
              },
              "fr-FR": {
                singular: "Outils de collaboration et de révision"
              },
              "ja-JP": {
                singular: "レビュー＆共同作業ツール"
              },
              "ko-KR": {
                singular: "리뷰 및 콜라보레이션 도구"
              },
              "pt-BR": {
                singular: "Ferramentas de revisão e colaboração"
              },
              "zh-CN": {
                singular: "审查和协作工具"
              }
            }
          }), (0, _v12.translate)({
            singular: "Subtitle translations with AI",
            dictionary: {
              es: {
                singular: "Traducciones de subtítulos con IA"
              },
              "de-DE": {
                singular: "Untertitelübersetzungen mit KI"
              },
              "fr-FR": {
                singular: "Traductions de sous-titres avec l'IA"
              },
              "ja-JP": {
                singular: "AIによる字幕翻訳"
              },
              "ko-KR": {
                singular: "AI 기반 자막 번역"
              },
              "pt-BR": {
                singular: "Traduções de legendas com IA"
              },
              "zh-CN": {
                singular: "使用 AI 进行字幕翻译"
              }
            }
          })]
        }
      }
    },
    _v30 = {
      IMAGE_UPLOAD: {
        title: "Error",
        description: (0, _v12.translate)({
          singular: "Failed to upload image",
          dictionary: {
            es: {
              singular: "No se pudo subir la imagen"
            },
            "de-DE": {
              singular: "Bild konnte nicht hochgeladen werden"
            },
            "fr-FR": {
              singular: "Échec de la mise en ligne de l'image"
            },
            "ja-JP": {
              singular: "画像のアップロードに失敗しました"
            },
            "ko-KR": {
              singular: "이미지 업로드에 실패했습니다."
            },
            "pt-BR": {
              singular: "Falha ao carregar a imagem"
            },
            "zh-CN": {
              singular: "上传图像失败"
            }
          }
        })
      }
    },
    _v31 = {
      MANUAL: "manual",
      DATE: "date",
      NEWEST: "date_new",
      OLDEST: "date_oldest",
      PLAYS: "plays",
      COMMENTS: "comments",
      LIKES: "likes",
      ADDED_FIRST: "added_first",
      ADDED_LAST: "added_last",
      ALPHABETICAL: "alphabetical",
      ALPHABETICAL_ASC: "alphabetical_asc",
      ALPHABETICAL_DESC: "alphabetical_desc",
      MODIFIED: "modified_time",
      MODIFIED_ASC: "modified_time_asc",
      MODIFIED_DESC: "modified_time_desc"
    };
  (0, _v12.translate)({
    singular: "{B}This is only a preview.{/B} To publish your SEO settings, upgrade your account.",
    replacements: {
      B: _v0 => (0, _v1.jsx)(_v3.Box, {
        as: "span",
        fontWeight: "bold",
        children: _v0
      })
    },
    dictionary: {
      es: {
        singular: "{B}Esto es solo una vista previa.{/B} Para publicar sus ajustes de SEO, actualice su cuenta."
      },
      "de-DE": {
        singular: "{B}Dies ist nur eine Vorschau.{/B} Um Ihre SEO-Einstellungen zu veröffentlichen, führen Sie ein Upgrade Ihres Kontos durch."
      },
      "fr-FR": {
        singular: "{B}Ceci n'est qu'un aperçu.{/B} Pour publier vos paramètres SEO, mettez votre compte à niveau."
      },
      "ja-JP": {
        singular: "{B}これはプレビューに過ぎません。{/B} SEO設定を公開するには、アカウントをアップグレードしてください。"
      },
      "ko-KR": {
        singular: "{B}이것은 미리보기일 뿐입니다.{/B} SEO 설정을 게시하려면 계정을 업그레이드하세요."
      },
      "pt-BR": {
        singular: "{B}Isto é apenas uma prévia.{/B} Para publicar suas configurações de SEO, atualize sua conta."
      },
      "zh-CN": {
        singular: "{B}这只是预览。{/B} 要发布您的 SEO 设置，请升级您的账户。"
      }
    }
  }), (0, _v12.translate)({
    singular: "This is a preview of your customizations. To save them upgrade your account.",
    dictionary: {
      es: {
        singular: "Esta es una vista previa de sus personalizaciones. Para guardarlas, actualice su cuenta."
      },
      "de-DE": {
        singular: "Dies ist eine Vorschau Ihrer Anpassungen. Um sie zu speichern, führen Sie ein Upgrade Ihres Kontos durch."
      },
      "fr-FR": {
        singular: "Ceci est un aperçu de vos personnalisations. Pour les enregistrer, mettez votre compte à niveau."
      },
      "ja-JP": {
        singular: "これはカスタマイズのプレビューです。保存するにはアカウントをアップグレードしてください。"
      },
      "ko-KR": {
        singular: "이것은 맞춤 설정 미리보기입니다. 저장하려면 계정을 업그레이드하세요."
      },
      "pt-BR": {
        singular: "Esta é uma prévia das suas personalizações. Para salvá-las, atualize sua conta."
      },
      "zh-CN": {
        singular: "这是对您自定义设置的预览。要保存它们请升级您的账户。"
      }
    }
  }), (0, _v12.translate)({
    singular: "Upgrade to starter to access more customizations",
    dictionary: {
      es: {
        singular: "Actualice al plan Starter para acceder a más personalizaciones."
      },
      "de-DE": {
        singular: "Auf Starter upgraden, um mehr Anpassungen durchzuführen."
      },
      "fr-FR": {
        singular: "Passez à la version Starter pour accéder à davantage de personnalisations."
      },
      "ja-JP": {
        singular: "より多くのカスタマイズ機能を利用するには、Starterプランにアップグレードしてください。"
      },
      "ko-KR": {
        singular: "더 많은 사용자 정의 기능을 이용하려면 Starter로 업그레이드하세요."
      },
      "pt-BR": {
        singular: "Faça upgrade para o plano Starter para acessar mais personalizações"
      },
      "zh-CN": {
        singular: "升级到入门版以访问更多自定义选项。"
      }
    }
  }), (0, _v12.translate)({
    singular: "Upgrade to standard to access more features",
    dictionary: {
      es: {
        singular: "Actualice a Standard para acceder a más funciones"
      },
      "de-DE": {
        singular: "Wechseln Sie zu Standard, um auf weitere Funktionen zuzugreifen"
      },
      "fr-FR": {
        singular: "Passez à Standard pour accéder à davantage de fonctionnalités"
      },
      "ja-JP": {
        singular: "より多くの機能にアクセスするには、standard にアップグレードしてください"
      },
      "ko-KR": {
        singular: "더 많은 기능에 액세스하려면 standard로 업그레이드하세요"
      },
      "pt-BR": {
        singular: "Atualize para o plano Standard para acessar mais recursos"
      },
      "zh-CN": {
        singular: "升级到标准版以访问更多功能"
      }
    }
  }), (0, _v12.translate)({
    singular: "Unlock more customizations",
    dictionary: {
      es: {
        singular: "Acceda a más personalizaciones"
      },
      "de-DE": {
        singular: "Mehr Anpassungen freischalten"
      },
      "fr-FR": {
        singular: "Débloquez une personnalisation plus poussée"
      },
      "ja-JP": {
        singular: "カスタマイズ機能をさらに活用"
      },
      "ko-KR": {
        singular: "더 많은 커스텀 기능 이용하기"
      },
      "pt-BR": {
        singular: "Desbloqueie mais opções de personalização"
      },
      "zh-CN": {
        singular: "解锁更多自定义选项"
      }
    }
  }), (0, _v12.translate)({
    singular: "Upgrade to starter to access more customizations",
    dictionary: {
      es: {
        singular: "Actualice al plan Starter para acceder a más personalizaciones."
      },
      "de-DE": {
        singular: "Auf Starter upgraden, um mehr Anpassungen durchzuführen."
      },
      "fr-FR": {
        singular: "Passez à la version Starter pour accéder à davantage de personnalisations."
      },
      "ja-JP": {
        singular: "より多くのカスタマイズ機能を利用するには、Starterプランにアップグレードしてください。"
      },
      "ko-KR": {
        singular: "더 많은 사용자 정의 기능을 이용하려면 Starter로 업그레이드하세요."
      },
      "pt-BR": {
        singular: "Faça upgrade para o plano Starter para acessar mais personalizações"
      },
      "zh-CN": {
        singular: "升级到入门版以访问更多自定义选项。"
      }
    }
  });
  let _v32 = (0, _v12.translate)({
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
    }),
    _v33 = (0, _v12.translate)({
      singular: "This is a preview of your customizations. To keep premium features, upgrade your account.",
      dictionary: {
        es: {
          singular: "Esta es una vista previa de sus configuraciones personalizadas. Para mantener las funciones de Premium, actualice su cuenta."
        },
        "de-DE": {
          singular: "Dies ist eine Vorschau deiner Personalisierungen. Um Premium-Funktionen zu behalten, aktualisieren Sie Ihr Konto."
        },
        "fr-FR": {
          singular: "Ceci est un aperçu de vos personnalisations. Pour conserver les fonctionnalités Premium, veuillez mettre à niveau votre compte."
        },
        "ja-JP": {
          singular: "これはカスタマイズした画面のプレビューです。プレミアム機能を維持するには、アカウントをアップグレードしてください。"
        },
        "ko-KR": {
          singular: "커스텀이 적용된 모습입니다. 프리미엄 기능을 반영하려면 계정을 업그레이드하세요."
        },
        "pt-BR": {
          singular: "Esta é uma prévia das suas personalizações. Para manter os recursos Premium, faça upgrade da sua conta."
        },
        "zh-CN": {
          singular: "这是您的自定义项预览。要保留高级功能，请升级您的帐户。"
        }
      }
    }),
    _v34 = (0, _v12.translate)({
      singular: "To keep premium features, upgrade your account.",
      dictionary: {
        es: {
          singular: "Para mantener las funciones de Premium, actualice su cuenta."
        },
        "de-DE": {
          singular: "Um Premium-Funktionen zu behalten, aktualisieren Sie Ihr Konto."
        },
        "fr-FR": {
          singular: "Pour conserver les fonctionnalités Premium, veuillez mettre à niveau votre compte."
        },
        "ja-JP": {
          singular: "プレミアム機能を維持するには、アカウントをアップグレードしてください。"
        },
        "ko-KR": {
          singular: "프리미엄 기능을 반영하려면 계정을 업그레이드하세요."
        },
        "pt-BR": {
          singular: "Para manter os recursos Premium, faça upgrade da sua conta."
        },
        "zh-CN": {
          singular: "要保留高级功能，请升级您的帐户。"
        }
      }
    }),
    _v35 = {
      ARRANGED: "arranged",
      NEWEST: "newest",
      OLDEST: "oldest",
      PLAYS: "plays",
      COMMENTS: "comments",
      LIKES: "likes",
      ADDED_FIRST: "added_first",
      ADDED_LAST: "added_last",
      ALPHABETICAL: "alphabetical",
      ALPHABETICAL_DESC: "alphabetical_desc",
      MODIFIED_ASC: "modified_time_asc",
      MODIFIED_DESC: "modified_time_desc"
    },
    _v36 = [{
      label: (0, _v12.translate)({
        singular: "Title, A to Z",
        dictionary: {
          es: {
            singular: "Título, de A a Z"
          },
          "de-DE": {
            singular: "Titel, A bis Z"
          },
          "fr-FR": {
            singular: "Titre, de A à Z"
          },
          "ja-JP": {
            singular: "タイトル、A〜Z"
          },
          "ko-KR": {
            singular: "제목 (오름차순)"
          },
          "pt-BR": {
            singular: "Título, A a Z"
          },
          "zh-CN": {
            singular: "标题，A 到 Z"
          }
        }
      }),
      value: _v31.ALPHABETICAL_ASC,
      sortValue: _v31.ALPHABETICAL,
      sortDirection: _v16.ASC
    }, {
      label: (0, _v12.translate)({
        singular: "Title, Z to A",
        dictionary: {
          es: {
            singular: "Título, de Z a A"
          },
          "de-DE": {
            singular: "Titel, Z bis A"
          },
          "fr-FR": {
            singular: "Titre, de Z à A"
          },
          "ja-JP": {
            singular: "タイトル、Z〜A"
          },
          "ko-KR": {
            singular: "제목 (내림차순)"
          },
          "pt-BR": {
            singular: "Título, Z a A"
          },
          "zh-CN": {
            singular: "标题，Z 到 A"
          }
        }
      }),
      value: _v31.ALPHABETICAL_DESC,
      sortValue: _v31.ALPHABETICAL,
      sortDirection: _v16.DESC
    }, {
      label: (0, _v12.translate)({
        singular: "Last Added to Vimeo",
        dictionary: {
          es: {
            singular: "Agregado último a Vimeo"
          },
          "de-DE": {
            singular: "Zuletzt zu Vimeo hinzugefügt"
          },
          "fr-FR": {
            singular: "Dernier ajout sur Vimeo"
          },
          "ja-JP": {
            singular: "Vimeoに最後に追加された動画"
          },
          "ko-KR": {
            singular: "Vimeo에 마지막으로 추가되었습니다."
          },
          "pt-BR": {
            singular: "Última adição ao Vimeo"
          },
          "zh-CN": {
            singular: "最后添加到 Vimeo"
          }
        }
      }),
      value: _v31.NEWEST,
      sortValue: _v31.DATE,
      sortDirection: _v16.DESC
    }, {
      label: (0, _v12.translate)({
        singular: "First Added to Vimeo",
        dictionary: {
          es: {
            singular: "Agregado primero a Vimeo"
          },
          "de-DE": {
            singular: "Erstmals zu Vimeo hinzugefügt"
          },
          "fr-FR": {
            singular: "Ajouté pour la première fois sur Vimeo"
          },
          "ja-JP": {
            singular: "Vimeoに最初に追加された動画"
          },
          "ko-KR": {
            singular: "Vimeo에 처음 추가되었습니다."
          },
          "pt-BR": {
            singular: "Adicionado pela primeira vez ao Vimeo"
          },
          "zh-CN": {
            singular: "首先添加到 Vimeo"
          }
        }
      }),
      value: _v31.OLDEST,
      sortValue: _v31.DATE,
      sortDirection: _v16.ASC
    }, {
      label: (0, _v12.translate)({
        singular: "Most likes",
        dictionary: {
          es: {
            singular: "Videos que más han gustado"
          },
          "de-DE": {
            singular: "Die meisten Likes"
          },
          "fr-FR": {
            singular: "Le plus de mentions J'aime"
          },
          "ja-JP": {
            singular: "いいね数最多の動画"
          },
          "ko-KR": {
            singular: "좋아하기가 가장 많은 동영상"
          },
          "pt-BR": {
            singular: "Mais curtidos"
          },
          "zh-CN": {
            singular: "最多点赞"
          }
        }
      }),
      value: _v31.LIKES
    }, {
      label: (0, _v12.translate)({
        singular: "Most plays",
        dictionary: {
          es: {
            singular: "Videos con más reproducciones"
          },
          "de-DE": {
            singular: "Am häufigsten gesehen"
          },
          "fr-FR": {
            singular: "Le plus de lectures"
          },
          "ja-JP": {
            singular: "最も再生された動画"
          },
          "ko-KR": {
            singular: "가장 많이 재생된 동영상"
          },
          "pt-BR": {
            singular: "Mais reproduzidos"
          },
          "zh-CN": {
            singular: "播放次数最多"
          }
        }
      }),
      value: _v31.PLAYS
    }, {
      label: (0, _v12.translate)({
        singular: "Most comments",
        dictionary: {
          es: {
            singular: "Videos con más comentarios"
          },
          "de-DE": {
            singular: "Meiste Kommentare"
          },
          "fr-FR": {
            singular: "Le plus de commentaires"
          },
          "ja-JP": {
            singular: "最もコメントの多い動画"
          },
          "ko-KR": {
            singular: "소감이 가장 많은 동영상"
          },
          "pt-BR": {
            singular: "Mais comentados"
          },
          "zh-CN": {
            singular: "最多评论"
          }
        }
      }),
      value: _v31.COMMENTS
    }, {
      label: (0, _v12.translate)({
        singular: "Custom",
        dictionary: {
          es: {
            singular: "Personalizar"
          },
          "de-DE": {
            singular: "Benutzerdefiniert"
          },
          "fr-FR": {
            singular: "Personnalisé"
          },
          "ja-JP": {
            singular: "カスタム"
          },
          "ko-KR": {
            singular: "커스텀"
          },
          "pt-BR": {
            singular: "Customizado"
          },
          "zh-CN": {
            singular: "自定义"
          }
        }
      }),
      value: _v31.MANUAL
    }, {
      label: (0, _v12.translate)({
        singular: "Last Modified",
        dictionary: {
          es: {
            singular: "Última modificación"
          },
          "de-DE": {
            singular: "Zuletzt geändert"
          },
          "fr-FR": {
            singular: "Dernière modification"
          },
          "ja-JP": {
            singular: "最終変更日"
          },
          "ko-KR": {
            singular: "마지막 수정"
          },
          "pt-BR": {
            singular: "Modificado por último"
          },
          "zh-CN": {
            singular: "最后修改"
          }
        }
      }),
      value: _v31.MODIFIED_DESC,
      sortValue: _v31.MODIFIED,
      sortDirection: _v16.DESC
    }, {
      label: (0, _v12.translate)({
        singular: "First Modified",
        dictionary: {
          es: {
            singular: "Primera modificación"
          },
          "de-DE": {
            singular: "Erstmals geändert"
          },
          "fr-FR": {
            singular: "Modifiées en premier"
          },
          "ja-JP": {
            singular: "初回変更日"
          },
          "ko-KR": {
            singular: "최초 수정"
          },
          "pt-BR": {
            singular: "Modificado primeiro"
          },
          "zh-CN": {
            singular: "首次修改"
          }
        }
      }),
      value: _v31.MODIFIED_ASC,
      sortValue: _v31.MODIFIED,
      sortDirection: _v16.ASC
    }],
    _v37 = [{
      attribute: _v15.PremiumAppearanceFields.APPEARANCESTORE_ALLOW_DOWNLOADS,
      defaultValue: !1
    }, {
      attribute: _v15.PremiumAppearanceFields.APPEARANCESTORE_SHOW_NAV,
      defaultValue: !0
    }, {
      attribute: _v15.PremiumAppearanceFields.APPEARANCESTORE_WEB_BRAND_COLOR,
      defaultValue: !1
    }, {
      attribute: _v15.PremiumAppearanceFields.APPEARANCESTORE_WEB_CUSTOM_LOGO,
      defaultValue: !1
    }, {
      attribute: _v15.PremiumAppearanceFields.APPEARANCESTORE_EMBED_BRAND_COLOR,
      defaultValue: !1
    }, {
      attribute: _v15.PremiumAppearanceFields.APPEARANCESTORE_EMBED_CUSTOM_LOGO,
      defaultValue: !1
    }, {
      attribute: _v15.PremiumAppearanceFields.APPEARANCESTORE_LOOP,
      defaultValue: !1
    }, {
      attribute: _v15.PremiumAppearanceFields.APPEARANCESTORE_CONTINUOUS_PLAY,
      defaultValue: !1
    }, {
      attribute: _v15.PremiumAppearanceFields.APPEARANCESTORE_VIMEO_LOGO,
      defaultValue: !0
    }, {
      attribute: _v15.PremiumAppearanceFields.SEOSTORE_SEO_ALLOW_INDEXED,
      defaultValue: !1
    }],
    _v38 = (0, _v12.translate)({
      singular: "Changes you made may not be saved.",
      dictionary: {
        es: {
          singular: "Los cambios realizados pueden no haberse guardado."
        },
        "de-DE": {
          singular: "Deine Änderungen werden eventuell nicht gespeichert."
        },
        "fr-FR": {
          singular: "Vos modifications ne seront peut-être pas enregistrées."
        },
        "ja-JP": {
          singular: "変更内容は保存されない場合があります。"
        },
        "ko-KR": {
          singular: "변경사항이 저장되지 않을 수 있습니다."
        },
        "pt-BR": {
          singular: "As alterações feitas podem não ser salvas."
        },
        "zh-CN": {
          singular: "您所做的更改可能无法保存。"
        }
      }
    }),
    _v39 = _v11.bokehTheme.breakpoints.sm,
    _v40 = {
      ON: (0, _v12.translate)({
        singular: "On",
        dictionary: {
          es: {
            singular: "No"
          },
          "de-DE": {
            singular: "An"
          },
          "fr-FR": {
            singular: "Actif"
          },
          "ko-KR": {
            singular: "켜기"
          },
          "pt-BR": {
            singular: "Em, Na, No"
          },
          "zh-CN": {
            singular: "开启"
          }
        }
      }),
      OFF: (0, _v12.translate)({
        singular: "Off",
        dictionary: {
          es: {
            singular: "Desactivado"
          },
          "de-DE": {
            singular: "Aus"
          },
          "fr-FR": {
            singular: "Inactif"
          },
          "ja-JP": {
            singular: "オフ"
          },
          "ko-KR": {
            singular: "해제"
          },
          "pt-BR": {
            singular: "Desligar"
          },
          "zh-CN": {
            singular: "关闭"
          }
        }
      })
    },
    _v41 = {
      SETTINGS: (0, _v12.translate)({
        singular: "Settings",
        dictionary: {
          es: {
            singular: "Configuración"
          },
          "de-DE": {
            singular: "Einstellungen"
          },
          "fr-FR": {
            singular: "Paramètres"
          },
          "ja-JP": {
            singular: "設定"
          },
          "ko-KR": {
            singular: "설정"
          },
          "pt-BR": {
            singular: "Configurações"
          },
          "zh-CN": {
            singular: "设置"
          }
        }
      }),
      SEO: (0, _v12.translate)({
        singular: "SEO",
        dictionary: {
          es: {
            singular: "Posicionamiento en buscadores (SEO)"
          },
          "ko-KR": {
            singular: "SEO (검색엔진 최적화)"
          }
        }
      }),
      TV_APPS: (0, _v12.translate)({
        singular: "TV Apps",
        dictionary: {
          es: {
            singular: "Apps para televisores"
          },
          "de-DE": {
            singular: "TV-Apps"
          },
          "fr-FR": {
            singular: "Apps pour TV"
          },
          "ja-JP": {
            singular: "TV アプリ"
          },
          "ko-KR": {
            singular: "TV 앱"
          },
          "pt-BR": {
            singular: "Aplicativos para TV"
          },
          "zh-CN": {
            singular: "电视应用程序"
          }
        }
      }),
      APPEARANCE: (0, _v12.translate)({
        singular: "Appearance",
        dictionary: {
          es: {
            singular: "Apariencia"
          },
          "de-DE": {
            singular: "Auftritt"
          },
          "fr-FR": {
            singular: "Apparence"
          },
          "ja-JP": {
            singular: "スタイル"
          },
          "ko-KR": {
            singular: "디자인"
          },
          "pt-BR": {
            singular: "Aparência"
          },
          "zh-CN": {
            singular: "外观"
          }
        }
      }),
      REGISTRATION: (0, _v12.translate)({
        singular: "Registration",
        dictionary: {
          es: {
            singular: "Registro"
          },
          "de-DE": {
            singular: "Registrierung"
          },
          "fr-FR": {
            singular: "Inscription"
          },
          "ja-JP": {
            singular: "登録"
          },
          "ko-KR": {
            singular: "등록"
          },
          "pt-BR": {
            singular: "Inscrição"
          },
          "zh-CN": {
            singular: "注册"
          }
        }
      }),
      ANALYTICS: (0, _v12.translate)({
        singular: "Analytics",
        dictionary: {
          es: {
            singular: "Análisis"
          },
          "de-DE": {
            singular: "Analytik"
          },
          "fr-FR": {
            singular: "Analyses"
          },
          "ja-JP": {
            singular: "分析"
          },
          "ko-KR": {
            singular: "애널리틱스"
          },
          "pt-BR": {
            singular: "Análises"
          },
          "zh-CN": {
            singular: "分析"
          }
        }
      }),
      VIDEOS: (0, _v12.translate)({
        singular: "Videos",
        dictionary: {
          "fr-FR": {
            singular: "Vidéos"
          },
          "ja-JP": {
            singular: "動画"
          },
          "ko-KR": {
            singular: "동영상"
          },
          "pt-BR": {
            singular: "Vídeos"
          },
          "zh-CN": {
            singular: "视频"
          }
        }
      }),
      BRANDING: (0, _v12.translate)({
        singular: "Branding",
        dictionary: {
          es: {
            singular: "Marca"
          },
          "fr-FR": {
            singular: "Image de marque"
          },
          "ja-JP": {
            singular: "ブランディング"
          },
          "ko-KR": {
            singular: "브랜딩"
          },
          "pt-BR": {
            singular: "Marca"
          },
          "zh-CN": {
            singular: "品牌设计"
          }
        }
      }),
      PLAYBACK: (0, _v12.translate)({
        singular: "Playback",
        dictionary: {
          es: {
            singular: "Reproducción"
          },
          "de-DE": {
            singular: "Wiedergabe"
          },
          "fr-FR": {
            singular: "Lecture"
          },
          "ja-JP": {
            singular: "再生"
          },
          "ko-KR": {
            singular: "재생"
          },
          "pt-BR": {
            singular: "Reprodução"
          },
          "zh-CN": {
            singular: "回放"
          }
        }
      }),
      LAYOUT: (0, _v12.translate)({
        singular: "Layout",
        dictionary: {
          es: {
            singular: "Diseño"
          },
          "fr-FR": {
            singular: "Mise en page"
          },
          "ja-JP": {
            singular: "レイアウト"
          },
          "ko-KR": {
            singular: "레이아웃"
          },
          "zh-CN": {
            singular: "布局"
          }
        }
      }),
      NAVIGATION: (0, _v12.translate)({
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
      FEATURED: (0, _v12.translate)({
        singular: "Featured content",
        dictionary: {
          es: {
            singular: "Contenido destacado"
          },
          "de-DE": {
            singular: "Empfohlene Inhalte"
          },
          "fr-FR": {
            singular: "Contenu à la une"
          },
          "ja-JP": {
            singular: "注目コンテンツ"
          },
          "ko-KR": {
            singular: "추천 콘텐츠"
          },
          "pt-BR": {
            singular: "Conteúdo em destaque"
          },
          "zh-CN": {
            singular: "精选内容"
          }
        }
      }),
      VIDEO_GRID: (0, _v12.translate)({
        singular: "Video grid",
        dictionary: {
          es: {
            singular: "Cuadrícula de video"
          },
          "de-DE": {
            singular: "Videoraster"
          },
          "fr-FR": {
            singular: "Grille vidéo"
          },
          "ja-JP": {
            singular: "動画グリッド"
          },
          "ko-KR": {
            singular: "동영상 그리드"
          },
          "pt-BR": {
            singular: "Grade de vídeo"
          },
          "zh-CN": {
            singular: "视频网格"
          }
        }
      })
    },
    _v42 = {
      layout: _v15.AppearanceLayoutEnum.GRID,
      theme: _v15.AppearanceThemeEnum.LIGHT,
      hideNav: !1,
      hideVimeoLogo: !1,
      customLogo: {},
      pictures: {},
      brandColor: "",
      embedCustomLogo: !1,
      webCustomLogo: !1,
      embedBrandColor: !1,
      webBrandColor: !1,
      allowDownloads: !1,
      allowContinuousPlay: !1,
      autoplay: !1,
      loop: !1,
      allowShare: !1,
      hasChosenThumbnail: !1,
      hasFeaturedContent: !1,
      useCustomDomain: !1,
      embed: {
        html: null
      },
      link: "",
      privacy: {},
      url: null,
      sort: "",
      seoTitle: "",
      seoDescription: "",
      seoAllowIndexed: !1,
      seoKeywords: [],
      name: "",
      description: "",
      rokuProviderName: "",
      rokuLanguage: "",
      rokuGenres: [],
      user: null,
      metadata: {}
    },
    _v43 = {
      SEO_TITLE: (0, _v12.translate)({
        singular: "SEO title is required",
        dictionary: {
          es: {
            singular: "Se requiere el título de SEO"
          },
          "de-DE": {
            singular: "SEO-Titel ist erforderlich"
          },
          "fr-FR": {
            singular: "Le titre SEO est requis"
          },
          "ja-JP": {
            singular: "SEOタイトルは必須です"
          },
          "ko-KR": {
            singular: "SEO 제목은 필수 항목입니다."
          },
          "pt-BR": {
            singular: "É necessário um título para SEO"
          },
          "zh-CN": {
            singular: "SEO 标题为必填"
          }
        }
      }),
      TVAPPS_PROVIDER_NAME: (0, _v12.translate)({
        singular: "Provider name is required",
        dictionary: {
          es: {
            singular: "El nombre del proveedor es obligatorio"
          },
          "de-DE": {
            singular: "Name des Anbieters ist erforderlich"
          },
          "fr-FR": {
            singular: "Le nom du fournisseur est requis"
          },
          "ja-JP": {
            singular: "プロバイダー名は必須です"
          },
          "ko-KR": {
            singular: "공급자 이름은 필수 항목입니다."
          },
          "pt-BR": {
            singular: "O nome do provedor é obrigatório"
          },
          "zh-CN": {
            singular: "提供者名称为必填"
          }
        }
      })
    },
    _v44 = {
      HEADER: (0, _v12.translate)({
        singular: "Supercharge showcases with an enterprise plan",
        dictionary: {
          es: {
            singular: "Potencie las presentaciones con un plan Enterprise"
          },
          "de-DE": {
            singular: "Präsentationen mit einem Enterprise-Tarif optimieren"
          },
          "fr-FR": {
            singular: "Boostez vos présentations avec un forfait Entreprise"
          },
          "ja-JP": {
            singular: "Enterpriseプランでショーケースを強化"
          },
          "ko-KR": {
            singular: "Enterprise 요금제로 쇼케이스를 새롭게 업그레이드하세요."
          },
          "pt-BR": {
            singular: "Impulsione as vitrines com um plano Enterprise"
          },
          "zh-CN": {
            singular: "通过企业套餐增强展示效果"
          }
        }
      }),
      SUB_HEADER: "",
      FEATURE_LIST: [(0, _v12.translate)({
        singular: "Add a live event to a showcase",
        dictionary: {
          es: {
            singular: "Añadir un evento en vivo a una presentación"
          },
          "de-DE": {
            singular: "Hinzufügen eines Live-Events zu einer Präsentation"
          },
          "fr-FR": {
            singular: "Ajouter un événement en direct à une présentation"
          },
          "ja-JP": {
            singular: "ライブイベントをショーケースに追加"
          },
          "ko-KR": {
            singular: "쇼케이스에 라이브 이벤트 추가"
          },
          "pt-BR": {
            singular: "Adicionar um evento ao vivo a uma vitrine"
          },
          "zh-CN": {
            singular: "将现场活动添加到展示"
          }
        }
      }), (0, _v12.translate)({
        singular: "Get deeper insights with viewer-level analytics",
        dictionary: {
          es: {
            singular: "Obtenga información más detallada con análisis a nivel del espectador"
          },
          "de-DE": {
            singular: "Gewinnen Sie tiefere Einblicke mit Analysen auf Zuschauerebene"
          },
          "fr-FR": {
            singular: "Obtenez des informations plus approfondies grâce aux statistiques spectateur."
          },
          "ja-JP": {
            singular: "視聴者レベルの分析でより深いインサイトを獲得"
          },
          "ko-KR": {
            singular: "시청자 수준 분석으로 더 깊이 있는 인사이트를 얻으세요."
          },
          "pt-BR": {
            singular: "Tenha acesso aos detalhes importantes com as análises do público"
          },
          "zh-CN": {
            singular: "通过观众级分析获取更深入的见解"
          }
        }
      }), (0, _v12.translate)({
        singular: "Access Vimeo with single sign-on (SSO)",
        dictionary: {
          es: {
            singular: "Acceda a Vimeo con inicio de sesión único (SSO)"
          },
          "de-DE": {
            singular: "Zugriff auf Vimeo mit Single Sign-On (SSO)"
          },
          "fr-FR": {
            singular: "Accédez à Vimeo avec l'authentification unique (SSO)"
          },
          "ja-JP": {
            singular: "シングルサインオン (SSO) で Vimeo にアクセス"
          },
          "ko-KR": {
            singular: "싱글 사인온(SSO)으로 Vimeo에 액세스"
          },
          "pt-BR": {
            singular: "Acesse o Vimeo com o login único (SSO)"
          },
          "zh-CN": {
            singular: "通过单点登录 (SSO) 访问 Vimeo"
          }
        }
      })]
    },
    _v45 = [_v13.PLANS.ENTERPRISE, _v13.PLANS.PREMIUM, _v13.PLANS.TEAM_LIVE, _v13.PLANS.ADVANCED, _v13.PLANS.CUSTOM_SELF_SERVE];
  (0, _v4.rem)(272), (0, _v4.rem)(320);
  let _v46 = [{
      icon: (0, _v1.jsx)(_v7.GripHorizontalLine, {}),
      label: (0, _v12.translate)({
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
      ariaLabel: (0, _v12.translate)({
        singular: "Layout Navigation",
        dictionary: {
          es: {
            singular: "Diseño: navegación"
          },
          "fr-FR": {
            singular: "Navigation de la mise en page"
          },
          "ja-JP": {
            singular: "ナビゲーションのレイアウト"
          },
          "ko-KR": {
            singular: "레이아웃 내비게이션"
          },
          "pt-BR": {
            singular: "Navegação de layout"
          },
          "zh-CN": {
            singular: "布局导航"
          }
        }
      }),
      dataId: "layout-navigation",
      path: "/navigation"
    }, {
      icon: (0, _v1.jsx)(_v6.EndScreen, {}),
      label: (0, _v12.translate)({
        singular: "Featured content",
        dictionary: {
          es: {
            singular: "Contenido destacado"
          },
          "de-DE": {
            singular: "Empfohlene Inhalte"
          },
          "fr-FR": {
            singular: "Contenu à la une"
          },
          "ja-JP": {
            singular: "注目コンテンツ"
          },
          "ko-KR": {
            singular: "추천 콘텐츠"
          },
          "pt-BR": {
            singular: "Conteúdo em destaque"
          },
          "zh-CN": {
            singular: "精选内容"
          }
        }
      }),
      ariaLabel: (0, _v12.translate)({
        singular: "Layout Featured content",
        dictionary: {
          es: {
            singular: "Diseño: contenido destacado"
          },
          "de-DE": {
            singular: "Layout empfohlene Inhalte"
          },
          "fr-FR": {
            singular: "Contenu à la une de la mise en page"
          },
          "ja-JP": {
            singular: "注目コンテンツのレイアウト"
          },
          "ko-KR": {
            singular: "레이아웃 추천 콘텐츠"
          },
          "pt-BR": {
            singular: "Layout: conteúdo em destaque"
          },
          "zh-CN": {
            singular: "布局特色内容"
          }
        }
      }),
      dataId: "layout-featured-content",
      path: "/featured"
    }, {
      icon: (0, _v1.jsx)(_v5._9GridLayoutTable, {}),
      label: (0, _v12.translate)({
        singular: "Video grid",
        dictionary: {
          es: {
            singular: "Cuadrícula de video"
          },
          "de-DE": {
            singular: "Videoraster"
          },
          "fr-FR": {
            singular: "Grille vidéo"
          },
          "ja-JP": {
            singular: "動画グリッド"
          },
          "ko-KR": {
            singular: "동영상 그리드"
          },
          "pt-BR": {
            singular: "Grade de vídeo"
          },
          "zh-CN": {
            singular: "视频网格"
          }
        }
      }),
      ariaLabel: (0, _v12.translate)({
        singular: "Layout Video grid",
        dictionary: {
          es: {
            singular: "Diseño: cuadrícula de videos"
          },
          "de-DE": {
            singular: "Layout Video-Raster"
          },
          "fr-FR": {
            singular: "Grille vidéo de la mise en page"
          },
          "ja-JP": {
            singular: "動画グリッドのレイアウト"
          },
          "ko-KR": {
            singular: "레이아웃 동영상 그리드"
          },
          "pt-BR": {
            singular: "Layout: grade de vídeos"
          },
          "zh-CN": {
            singular: "布局视频网格"
          }
        }
      }),
      dataId: "layout-video-grid",
      path: "/video-grid"
    }],
    _v47 = [{
      label: (0, _v12.translate)({
        singular: "None",
        dictionary: {
          es: {
            singular: "Ninguno"
          },
          "de-DE": {
            singular: "Kein"
          },
          "fr-FR": {
            singular: "Aucune"
          },
          "ja-JP": {
            singular: "なし"
          },
          "ko-KR": {
            singular: "없음"
          },
          "pt-BR": {
            singular: "Nenhum"
          },
          "zh-CN": {
            singular: "无"
          }
        }
      }),
      value: "None"
    }, {
      label: (0, _v12.translate)({
        singular: "Video thumbnail",
        dictionary: {
          es: {
            singular: "Miniatura de vídeo"
          },
          "de-DE": {
            singular: "Video-Vorschaubild"
          },
          "fr-FR": {
            singular: "Vignette vidéo"
          },
          "ja-JP": {
            singular: "動画サムネイル"
          },
          "ko-KR": {
            singular: "동영상 섬네일"
          },
          "pt-BR": {
            singular: "Miniatura de foto do vídeo"
          },
          "zh-CN": {
            singular: "视频缩略图"
          }
        }
      }),
      value: "Video thumbnail"
    }, {
      label: (0, _v12.translate)({
        singular: "Custom image",
        dictionary: {
          es: {
            singular: "Imagen personalizada"
          },
          "de-DE": {
            singular: "Selbst ausgewähltes Bild "
          },
          "fr-FR": {
            singular: "Image personnalisée"
          },
          "ja-JP": {
            singular: "カスタム画像"
          },
          "ko-KR": {
            singular: "커스텀 이미지"
          },
          "pt-BR": {
            singular: "Imagem customizada"
          },
          "zh-CN": {
            singular: "自定义图片"
          }
        }
      }),
      value: "Custom image"
    }],
    _v48 = {
      engagementHideAll: !1,
      engagementHideAllIsUpgrade: !1,
      nowPlayingHideAll: !1,
      nowPlayingHideAllIsUpgrade: !1,
      videoGridHideAll: !1,
      videoGridHideAllIsUpgrade: !1,
      enableLike: !0,
      enableShare: !0,
      enableComments: !0,
      enableAskAi: !1,
      allowDownloads: !1,
      showPlaybackVideoTitle: !0,
      showPlaybackProfileImage: !0,
      showPlaybackProfileName: !0,
      showPlaybackViews: !0,
      showPlaybackVideoDescription: !0,
      showPlaybackAddedDate: !0,
      showPlaybackGridVideoTitle: !0,
      showPlaybackGridProfileImage: !0,
      showPlaybackGridProfileName: !0,
      showPlaybackGridVideoCard: !1,
      videoGridSelectedValue: _v15.VideoCardsEnum.PLAYER,
      showPlaybackVideoCount: !0
    },
    _v49 = {
      detailsHideAll: !1,
      detailsHideAllUpgrade: !0,
      textCtaAlignment: _v15.TextCtaAlginmentEnum.LEFT,
      showBanner: !0,
      showBannerDescription: !0,
      showBannerHeader: !0,
      showBannerTitle: !0,
      showShowcaseOwnerAvatar: !0,
      showStartWatchingButton: !0,
      isShowBannerPremiumFeature: !1,
      isBannerTitleDisabled: !1,
      isBannerDescriptionDisabled: !1,
      isBannerShowStartWatchingButtonDisabled: !1
    },
    _v50 = {
      videoDetailsHideAll: !1,
      videoDetailsHideAllUpgrade: !1,
      gridSize: _v15.VideoGridEnum.GRID_SIZE_MEDIUM,
      showGridSectionName: !0,
      showGridVideoCount: !0,
      showGridVideoTitles: !0,
      showGridProfileName: !0,
      showGridProfileImage: !0
    },
    _v51 = [{
      value: _v15.VideoGridEnum.GRID_SIZE_SMALL,
      label: "S",
      show: _v0 => !_v0
    }, {
      value: _v15.VideoGridEnum.GRID_SIZE_MEDIUM,
      label: "M",
      show: () => !0
    }, {
      value: _v15.VideoGridEnum.GRID_SIZE_LARGE,
      label: "L",
      show: () => !0
    }, {
      value: _v15.VideoGridEnum.GRID_SIZE_EXTRA_LARGE,
      label: "XL",
      show: () => !0
    }],
    _v52 = new Set([_v15.VideoGridEnum.GRID_SIZE_SMALL, _v15.VideoGridEnum.GRID_SIZE_MEDIUM, _v15.VideoGridEnum.GRID_SIZE_LARGE, _v15.VideoGridEnum.GRID_SIZE_EXTRA_LARGE]),
    _v53 = new Set([_v15.TextCtaAlginmentEnum.CENTER, _v15.TextCtaAlginmentEnum.LEFT, _v15.TextCtaAlginmentEnum.RIGHT]),
    _v54 = [_v13.PLANS.BASIC, _v13.PLANS.PLUS, _v13.PLANS.PRO, _v13.PLANS.BUSINESS, _v13.PLANS.PREMIUM, _v13.PLANS.ENTERPRISE],
    _v55 = {
      [_v15.ShowcaseRouteMap.INFO]: [{
        featureName: "settings",
        listOfUpsell: ["seo_showcases", "tv_apps_showcases", "color_showcases", "custom_logo_showcases", "vimeo_logo_showcases", "premium_features_showcases"]
      }],
      [_v15.ShowcaseRouteMap.SEO]: [{
        featureName: "settings",
        listOfUpsell: ["seo_showcases"]
      }],
      [_v15.ShowcaseRouteMap.PLAYBACK]: [{
        featureName: "playback_engagement",
        listOfUpsell: ["premium_features_showcases"]
      }, {
        featureName: "playback",
        listOfUpsell: ["premium_features_showcases", "continuous_play_showcases", "loop_playlist_showcases", "premium_features_showcases"]
      }, {
        featureName: "playback_grid",
        listOfUpsell: ["premium_features_showcases", "premium_features_showcases", "premium_features_showcases"]
      }],
      [_v15.ShowcaseRouteMap.LAYOUT_NAVIGATION]: [{
        featureName: "layout",
        listOfUpsell: ["vimeo_navigation_showcases", "vimeo_navigation_showcases"]
      }],
      [_v15.ShowcaseRouteMap.LAYOUT_FEATURED]: [{
        featureName: "layout",
        listOfUpsell: ["premium_features_showcases", "premium_features_showcases"]
      }],
      [_v15.ShowcaseRouteMap.LAYOUT_VIDEO_GRID]: [{
        featureName: "layout_grid",
        listOfUpsell: ["premium_features_showcases", "premium_features_showcases", "premium_features_showcases"]
      }]
    },
    _v56 = new Set(["settings_more_customisations", "settings_color", "settings_custom_logo", "settings_registration", "settings_seo", "settings_tv_apps", "layout_navigation", "layout_navigation_search", "layout_featured_content_details", "layout_featured_content_alignment", "layout_video_grid_size", "layout_video_count", "layout_video_details", "playback_more_customisations", "playback_loop_playlist", "playback_engagement", "playback_now_playing", "playback_video_grid_size", "playback_video_count", "playback_video_details", "playback_continuous_play"]);
  _v0.s(["ALBUM_CONFIG_DEFAULTS", 0, {
    showVideoDetails: {
      value: !0,
      isUpgrade: !1
    },
    showVideoPlayerCards: {
      value: !0,
      isUpgrade: !1
    },
    showVideoDescription: {
      value: !0,
      isUpgrade: !1
    },
    showVideoTitle: {
      value: !0,
      isUpgrade: !1
    },
    showAccountName: {
      value: !0,
      isUpgrade: !1
    },
    showAvatar: {
      value: !0,
      isUpgrade: !1
    },
    textCtaAlignment: {
      value: "left",
      isUpgrade: !1
    },
    banner: {
      showBannerTitle: {
        value: !0,
        isUpgrade: !1
      },
      showBannerDescription: {
        value: !0,
        isUpgrade: !1
      },
      showBannerHeader: {
        value: !0,
        isUpgrade: !1
      },
      showShowcaseOwnerAvatar: {
        value: !0,
        isUpgrade: !1
      },
      showBanner: {
        value: !0,
        isUpgrade: !1
      },
      showStartWatchingButton: {
        value: !0,
        isUpgrade: !1
      }
    },
    layout: {
      showGridProfileImage: {
        value: !0,
        isUpgrade: !1
      },
      showGridProfileName: {
        value: !0,
        isUpgrade: !1
      },
      showGridVideoCount: {
        value: !0,
        isUpgrade: !1
      },
      showGridVideoTitles: {
        value: !0,
        isUpgrade: !1
      },
      showGridSectionName: {
        value: !0,
        isUpgrade: !1
      },
      gridSize: {
        value: "m",
        isUpgrade: !1
      }
    },
    navigation: {
      showSearchBar: {
        value: !0,
        isUpgrade: !1
      }
    },
    playback: {
      enableLike: {
        value: !0,
        isUpgrade: !1
      },
      enableShare: {
        value: !0,
        isUpgrade: !1
      },
      enableComments: {
        value: !0,
        isUpgrade: !1
      },
      enableAskAi: {
        value: !1,
        isUpgrade: !1
      },
      showPlaybackProfileImage: {
        value: !0,
        isUpgrade: !1
      },
      showPlaybackProfileName: {
        value: !0,
        isUpgrade: !1
      },
      showPlaybackVideoDescription: {
        value: !0,
        isUpgrade: !1
      },
      showPlaybackVideoTitle: {
        value: !0,
        isUpgrade: !1
      },
      showPlaybackViews: {
        value: !0,
        isUpgrade: !1
      },
      showPlaybackAddedDate: {
        value: !0,
        isUpgrade: !1
      },
      showPlaybackUploadedDate: {
        value: !0,
        isUpgrade: !1
      },
      showPlaybackGridVideoTitle: {
        value: !0,
        isUpgrade: !1
      },
      showPlaybackGridProfileImage: {
        value: !0,
        isUpgrade: !1
      },
      showPlaybackGridProfileName: {
        value: !0,
        isUpgrade: !1
      },
      showPlaybackGridVideoCard: {
        value: !1,
        isUpgrade: !1
      },
      showPlaybackVideoCount: {
        value: !0,
        isUpgrade: !1
      },
      playbackGridSize: {
        value: "m",
        isUpgrade: !1
      }
    }
  }, "ALLOWED_GRID_SIZES", 0, _v52, "ALLOWED_TEXT_CTA_ALIGNMENT", 0, _v53, "BREAKPOINT_LG", 0, 992, "BREAKPOINT_XL", 0, 0, "BackgroundSelectOptions", 0, _v47, "DEBOUNCE_RESIZE_TIME", 0, 500, "DEFAULT_BRAND_COLOR", 0, "#00ADEF", "DEFAULT_FEATURED_CONTENT_STATE", 0, _v49, "DEFAULT_LAYOUT_VIDEO_GRID_STATE", 0, _v50, "DEFAULT_PLAYBACK_STATE", 0, _v48, "DEFAULT_SHOWCASE_PLAYER_EMBED_OVERRIDE_QUERY", 0, {
    like: 0,
    watch_later: 0,
    share: 0,
    ask_ai: 0,
    title: 0,
    byline: 0,
    portrait: 0,
    badge: 0,
    play_button_position: "bottom",
    progress_bar: 1,
    volume: 1,
    quality_selector: 1,
    speed: 1,
    fullscreen: 1,
    vimeo_logo: 0,
    force_embed: 1,
    transparent: 0
  }, "DEFAULT_TEMPLATE_TYPE", 0, "default", "DEFAULT_TEMPLATE_TYPE_EVENT_CREATION", 0, "default", "DeltaMandatoryFields", 0, _v27, "ENTERPRISE_TEMPLATE_TYPE", 0, "enterprise", "ENTERPRISE_UPSELL_MODAL_ACCOUNT_TYPES", 0, _v45, "FETCH_OPTIONS", 0, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest"
    }
  }, "FILE_UPLOAD_ACCEPT_IMAGE_TYPE", 0, "image/png, image/jpeg", "FloatingUpgradeBannerTextDesktop", 0, _v33, "FloatingUpgradeBannerTextMobile", 0, _v34, "FormMandatoryFieldsErrorMsg", 0, _v43, "GRID_SIZES", 0, _v51, "HEX_6DIGIT_REGEX", 0, /^#?[0-9A-Fa-f]{6}$/, "IMPRESSION_UPSELL", 0, _v55, "ITEMS_PER_PAGE_APPEARANCE", 0, 20, "ITEMS_PER_PAGE_DESKTOP", 0, 25, "ITEMS_PER_PAGE_MOBILE", 0, 8, "KNOWN_PLAYER_ORIGINS", 0, ["vimeo.dev", "ci.vimeows.com", "vimeo.com"], "LEGACY_PLANS", 0, _v54, "LIST_OF_DELTA_FIELDS_FOR_UPSERT", 0, ["appearanceStore.hasFeaturedContent", "appearanceStore.thumbnailType"], "LIST_OF_PLAYBACK_UPGRADE_FIELDS", 0, ["isPlaybackEnableLikePremiumFeature", "isPlaybackEnableSharePremiumFeature", "isPlaybackEnableCommentsPremiumFeature", "isPlaybackEnableDownloadPremiumFeature", "isPlaybackShowPlaybackProfileImagePremiumFeature", "isPlaybackShowPlaybackProfileNamePremiumFeature", "isPlaybackShowPlaybackVideoDescriptionPremiumFeature", "isPlaybackShowPlaybackVideoTitlePremiumFeature", "isPlaybackShowPlaybackViewsPremiumFeature", "isPlaybackShowPlaybackAddedDatePremiumFeature", "isPlaybackShowPlaybackUploadedDatePremiumFeature", "isPlaybackShowPlaybackGridVideoTitlePremiumFeature", "isPlaybackShowPlaybackGridProfileImagePremiumFeature", "isPlaybackShowPlaybackGridProfileNamePremiumFeature", "isPlaybackShowPlaybackGridVideoCardPremiumFeature", "isPlaybackPlaybackGridSizePremiumFeature"], "LOGO_EMPTY_BACKGROUND", 0, "https://i.vimeocdn.com/custom_asset/29817f2ec7f8981e67252ccfb87a3f7d", "LayoutMenuItem", 0, _v46, "MENU_LIST_PATH", 0, {
    VIDEO_GRID_PATH: "/video-grid",
    FEATURED_CONTENT_PATH: "/featured",
    NAVIGATION_PATH: "/navigation"
  }, "MODAL_CONFIG_HEADER_TEXT", 0, _v28, "MODAL_CONFIG_PLAN_OVERRIDES", 0, _v29, "NEW_LOGO_EMPTY_BACKGROUND", 0, "https://i.vimeocdn.com/custom_asset/94b5d986038020e7e1b49d23a30652c3", "OVERFLOW_TOOLTIP_MAX_WIDTH", 0, _v39, "PASSWORD_MAX_LENGTH", 0, 32, "PLAYLIST_LOADED_MESSAGE_TYPE", 0, "PLAYLIST_LOADED", "PreventWindowCloseMsg", 0, _v38, "RESTRICT_UPGRADE_FIELDS", 0, ["allowDownloads", "webBrandColor", "webCustomLogo", "loop", "autoplay", "showNav", "showVimeoLogo", "seoAllowIndexed", "embedCustomLogo", "embedBrandColor"], "ResetStoreFields", 0, _v37, "SHOWCASE_DEFAULT_NAME", 0, "Untitled showcase", "SIDEBAR_CONSTRAINTS", 0, {
    MIN_WIDTH: 320,
    MAX_WIDTH_LG: 480,
    MAX_WIDTH: 600,
    DEFAULT_WIDTH: 320
  }, "SettingsSubHeaderStatus", 0, _v40, "SideDrawerHeaderEnum", 0, _v41, "Sort", 0, _v31, "SortPreference", 0, _v35, "THUMBNAIL_SIZE_INDEX", 0, 2, "TOAST_ERROR_OPTIONS", 0, _v30, "TvAppsSupportedGenresList", 0, _v26, "TvAppsSupportedLanguageList", 0, [{
    label: "Deutsch",
    value: "de-DE"
  }, {
    label: "English",
    value: "en"
  }, {
    label: "Español",
    value: "es"
  }, {
    label: "Français",
    value: "fr-FR"
  }, {
    label: "日本語",
    value: "ja-JP"
  }, {
    label: "한국어",
    value: "ko-KR"
  }, {
    label: "Português",
    value: "pt-BR"
  }], "UPGRADE_PLAN_BUTTON_TEXT", 0, _v32, "UPSELL_MODAL_ENTERPRISE", 0, _v44, "UPSELL_MODAL_FEATURE_NAMES", 0, _v56, "VIDEOS_API_VERSION", 0, "3.4.12", "ViewerClipsAllowedPicturesSizes", 0, [640, 295], "albumCustomFields", 0, ["password"], "albumFields", 0, ["layout", "description", "name", "privacy", "rokuGenres", "rokuLanguage", "rokuProviderName", "seoAllowIndexed", "seoDescription", "seoKeywords", "seoTitle", "layout", "theme", "hideNav", "hideVimeoLogo", "hasFeaturedContent", "customLogo", "brandColor", "embedCustomLogo", "webCustomLogo", "embedBrandColor", "webBrandColor", "allowDownloads", "loop", "allowShare", "pictures", "hasChosenThumbnail", "user.uri", "metadata.interactions.delete", "useCustomDomain", "link", "url", "metadata.interactions.addLiveEvents", "metadata.interactions.editLiveEvents", "metadata.interactions.canUpdatePrivacyToPublic", "embed", "metadata.connections.videos.total", "sort", "allowedPrivacies", "allowContinuousPlay", "autoplay", "hideUpcoming", "config", "thumbnailType", "customThumbnail"], "allowedDesktopRoutes", 0, _v18, "allowedMobileRoutes", 0, _v23, "defaultShowcaseConfig", 0, {
    apiUrl: "",
    isEnterpriseSite: void 0,
    jwt: "",
    logoId: 0,
    locale: "",
    recaptchaSiteKey: "",
    showcaseId: 0,
    userId: 0,
    userUri: "",
    xsrft: "",
    teamOwnerId: 0,
    user: null
  }, "extendedRoutingSideDrawerMap", 0, _v20, "fallBackStore", 0, _v42, "initialCapabilitiesConfig", 0, {
    canAddTeamMembers: !1,
    canCreateAlbums: !1,
    canCreateEmbeddedPlaylists: !1,
    canAddLiveEvent: !1,
    canCustomizeAlbums: !1,
    hasVideoLibraryShowcases: !1,
    hasShowcaseSeoPage: !1,
    hasShowcaseTeamPrivacy: !1,
    hasShowcaseStatsPage: !1,
    hasShowcaseLivePublicOnly: !1,
    hasShowcaseUpsellsRollout: !1,
    canSeePerSeatPricingPages: !1,
    hasSunsetHideFromVimeo: !1,
    canContributorAccessShowcase: !1,
    hasShowcaseLiveLayout: !1,
    hasEnterprise: !1,
    canCaptureLeadsShowcase: !1,
    hasShowcasePasswordPrivacyUpsell: !1,
    hasShareLoopTrackingParams: !1,
    canCustomizeShowcaseStandard: !1
  }, "loaderAriaProperties", 0, {
    "aria-busy": !0,
    "aria-live": "polite"
  }, "routingAnalyticsMap", 0, _v22, "routingMainContentMap", 0, _v21, "routingSideDrawerMap", 0, _v19, "seoToolTipInfo", 0, _v25, "sessionStorageKeys", 0, {
    DEFAULT_LAYOUT: "defaultLayout"
  }, "showcaseRegistrationTabCustomStyle", 0, {
    display: "flex",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  }, "sidebarItems", 0, _v17, "sidebarItemsRouteMapping", 0, _v24, "sortOptions", 0, _v36, "videoFields", 0, ["createdTime", "modifiedTime", "description", "duration", "isColdStorage", "isColdPrivacyRestricted", "manageLink", "link", "live.archivedTime", "live.recurringEvent.album", "live.recurringEvent.link", "live.recurringEvent.preferredStreamMethod", "live.recurringEvent.metadata.connections.liveVideo.status", "live.status", "live.archivedTime", "live.scheduledStartTime", "name", "pictures.sizes.link", "pictures.sizes.width", "pictures.defaultPicture", "privacy.download", "privacy.embed", "privacy.view", "privacy.originalView", "resourceKey", "type", "uri", "user.link", "user.name", "user.pictures.sizes.link", "user.pictures.sizes.width", "user.uri", "metadata.interactions.album", "embedPlayerConfigUrl", "playerEmbedUrl"]], 0), _v0.s(["handleRedirection", 0, _v0 => {
    _v0 && window.open(_v0, "_blank", "noopener,noreferrer");
  }, "mapSortPrefToSortParams", 0, _v0 => {
    switch (_v0) {
      case _v35.NEWEST:
        return {
          value: _v31.DATE,
          direction: _v16.DESC,
          sortValue: _v31.NEWEST
        };
      case _v35.OLDEST:
        return {
          value: _v31.DATE,
          direction: _v16.ASC,
          sortValue: _v31.OLDEST
        };
      case _v35.ARRANGED:
        return {
          value: _v31.MANUAL,
          sortValue: _v31.MANUAL
        };
      case _v35.ALPHABETICAL:
        return {
          value: _v31.ALPHABETICAL,
          direction: _v16.ASC,
          sortValue: _v31.ALPHABETICAL_ASC
        };
      case _v35.ALPHABETICAL_DESC:
        return {
          value: _v31.ALPHABETICAL,
          direction: _v16.DESC,
          sortValue: _v31.ALPHABETICAL_DESC
        };
      case _v35.LIKES:
        return {
          value: _v31.LIKES,
          sortValue: _v31.LIKES
        };
      case _v35.PLAYS:
        return {
          value: _v31.PLAYS,
          sortValue: _v31.PLAYS
        };
      case _v35.COMMENTS:
        return {
          value: _v31.COMMENTS,
          sortValue: _v31.COMMENTS
        };
      case _v35.MODIFIED_ASC:
        return {
          value: _v31.MODIFIED,
          direction: _v16.ASC,
          sortValue: _v31.MODIFIED_ASC
        };
      case _v35.MODIFIED_DESC:
        return {
          value: _v31.MODIFIED,
          direction: _v16.DESC,
          sortValue: _v31.MODIFIED_DESC
        };
      default:
        return {
          value: _v31.MANUAL,
          sortValue: _v31.MANUAL
        };
    }
  }, "mapSortToSortPref", 0, _v0 => {
    let {
      value: _v1,
      direction: _v2
    } = _v0;
    switch (_v1) {
      case _v31.DATE:
        return _v2 === _v16.ASC ? _v35.OLDEST : _v35.NEWEST;
      case _v31.ALPHABETICAL:
        return _v2 === _v16.ASC ? _v35.ALPHABETICAL : _v35.ALPHABETICAL_DESC;
      case _v31.MANUAL:
        return _v35.ARRANGED;
      case _v31.MODIFIED:
        return _v2 === _v16.ASC ? _v35.MODIFIED_ASC : _v35.MODIFIED_DESC;
      default:
        return _v1;
    }
  }], 0);
}