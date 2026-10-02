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
    _v16 = _v0.i(0);
  let _v17 = ["agenticSearchTrialExpiresOn"],
    _v18 = (0, _v3.createContext)(!1),
    _v19 = (0, _v3.createContext)(null),
    _v20 = ({
      children: _v0
    }) => {
      let {
          settings: _v1,
          isLoadingResponse: _v2
        } = (0, _v14.useOrionSettings)(),
        {
          acknowledge: _v3,
          isActive: _v4
        } = (0, _v8.useAnnouncement)({
          id: "smart_search_intro",
          isEligible: !_v2 && _v1.enable_smart_search_intro_announcement
        }),
        _v5 = function () {
          let _v0 = (0, _v3.useContext)(_v7.ViewerContext),
            _v1 = _v0?.teamUser?.ownerId ?? _v0?.user?.id,
            {
              data: _v2
            } = (0, _v16.useGetUser)(() => _v1 ? {
              where: {
                userId: _v1
              },
              select: _v17
            } : null);
          return _v2?.agenticSearchTrialExpiresOn ?? void 0;
        }(),
        _v6 = (0, _v15.useViewer)(),
        _v7 = (0, _v3.useRef)(null),
        _v8 = (0, _v12.useBreakpointValue)({
          base: "bottom-end",
          lg: "bottom-start"
        }),
        _v9 = (0, _v3.useCallback)(() => {
          _v3(), _v7.current?.();
        }, [_v3]);
      return (0, _v1.jsx)(_v19.Provider, {
        value: _v7,
        children: (0, _v1.jsx)(_v18.Provider, {
          value: !0,
          children: (0, _v1.jsx)(_v9.AnnouncementPopover, {
            isOpen: _v4,
            trackingId: "smart_search",
            anchorWithinChildren: !0,
            onAcknowledge: _v9,
            placement: _v8,
            acknowledgeLabel: (0, _v13.translate)({
              singular: "Try new smart search",
              dictionary: {
                es: {
                  singular: "Prueba la nueva búsqueda inteligente"
                },
                "de-DE": {
                  singular: "Probieren Sie die neue intelligente Suche aus"
                },
                "fr-FR": {
                  singular: "Essayez la nouvelle recherche intelligente"
                },
                "ja-JP": {
                  singular: "新しいスマート検索を試す"
                },
                "ko-KR": {
                  singular: "새로운 스마트 검색 사용해 보기"
                },
                "pt-BR": {
                  singular: "Experimente a nova busca inteligente"
                },
                "zh-CN": {
                  singular: "试用全新智能搜索"
                }
              }
            }),
            badge: (0, _v1.jsx)(_v10.Badge, {
              variant: "new",
              size: "sm",
              children: (0, _v1.jsx)(_v11.Text, {
                color: "text-primary",
                variant: "heading-2xs",
                children: (0, _v13.translate)({
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
            title: (0, _v13.translate)({
              singular: "Find any video or moment with the new smart search",
              dictionary: {
                es: {
                  singular: "Encuentra cualquier vídeo o momento con la nueva búsqueda inteligente"
                },
                "de-DE": {
                  singular: "Finden Sie jedes Video oder jeden Moment mit der neuen intelligenten Suche"
                },
                "fr-FR": {
                  singular: "Trouvez n'importe quelle vidéo ou moment grâce à la nouvelle recherche intelligente"
                },
                "ja-JP": {
                  singular: "新しいスマート検索で、あらゆる動画や瞬間を見つける"
                },
                "ko-KR": {
                  singular: "새로운 스마트 검색으로 원하는 비디오나 장면을 찾아보세요"
                },
                "pt-BR": {
                  singular: "Encontre qualquer vídeo ou momento com a nova busca inteligente"
                },
                "zh-CN": {
                  singular: "使用全新智能搜索查找任何视频或片段"
                }
              }
            }),
            body: (0, _v13.translate)({
              singular: "The new smart search analyzes visuals, transcripts, titles, and details to take you straight to the exact moment you're looking for.",
              dictionary: {
                es: {
                  singular: "La nueva búsqueda inteligente analiza imágenes, transcripciones, títulos y detalles para llevarte directamente al momento exacto que estás buscando."
                },
                "de-DE": {
                  singular: "Die neue intelligente Suche analysiert visuelle Inhalte, Transkripte, Titel und Details, um Sie direkt zum genauen Moment zu führen, den Sie suchen."
                },
                "fr-FR": {
                  singular: "La nouvelle recherche intelligente analyse les éléments visuels, les transcriptions, les titres et les détails pour vous amener directement au moment exact que vous recherchez."
                },
                "ja-JP": {
                  singular: "新しいスマート検索は映像、トランスクリプト、タイトル、詳細を解析し、探している正確な瞬間へ直接案内します。"
                },
                "ko-KR": {
                  singular: "새로운 스마트 검색은 시각적 요소, 전사, 제목 및 세부 정보를 분석하여 찾고자 하는 정확한 순간으로 바로 안내합니다."
                },
                "pt-BR": {
                  singular: "A nova busca inteligente analisa visuais, transcrições, títulos e detalhes para levá-lo diretamente ao momento exato que você procura."
                },
                "zh-CN": {
                  singular: "全新的智能搜索会分析视频画面、转录文本、标题和详细信息，直接带您定位到所需的确切时刻。"
                }
              }
            }),
            note: _v5 ? (0, _v13.translate)({
              singular: "Complimentary access until {DATE}",
              replacements: {
                DATE: ((_v0, _v1 = "en-US") => {
                  let _v2 = _v0.split("-"),
                    _v3 = Number(_v2[0]),
                    _v4 = Number(_v2[1]) - 1,
                    _v5 = Number(_v2[2]);
                  if (Number.isNaN(_v3) || Number.isNaN(_v4) || Number.isNaN(_v5)) return _v0;
                  let _v6 = new Date(_v3, _v4, _v5);
                  if (_v1.toLowerCase().startsWith("en")) {
                    let _v0 = _v6.toLocaleDateString(_v1, {
                      month: "long"
                    });
                    return `${(_v0 => {
                      let _v1 = _v0 % 100;
                      if (_v1 >= 11 && _v1 <= 13) return `${_v0}th`;
                      switch (_v0 % 10) {
                        case 1:
                          return `${_v0}st`;
                        case 2:
                          return `${_v0}nd`;
                        case 3:
                          return `${_v0}rd`;
                        default:
                          return `${_v0}th`;
                      }
                    })(_v5)} ${_v0} ${_v3}`;
                  }
                  return new Intl.DateTimeFormat(_v1, {
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  }).format(_v6);
                })(_v5, _v6?.locale)
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
            children: _v0
          })
        })
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
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0);
  let _v46 = _v0 => (0, _v1.jsx)(_v45.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsxs)("g", {
      fill: "currentColor",
      children: [(0, _v1.jsx)("path", {
        d: "M11.1 2.5a8 8 0 0 1 6.32 12.905l4.386 4.388a1 1 0 1 1-1.414 1.414l-4.386-4.388a7.968 7.968 0 0 1-5.56 1.652 4.775 4.775 0 0 0 .87-1.977 6 6 0 1 0-6.191-5.463 4.798 4.798 0 0 0-1.856 1.114A8 8 0 0 1 11.1 2.5Z"
      }), (0, _v1.jsx)("path", {
        d: "m7.471 15.935 1.25.434-.004.003c.249.087.38.358.294.605a.463.463 0 0 1-.298.294l-1.244.434c-.55.191-.975.617-1.166 1.167l-.434 1.25a.48.48 0 0 1-.61.292.464.464 0 0 1-.292-.301l-.432-1.244a1.883 1.883 0 0 0-1.166-1.166l-1.25-.434a.476.476 0 0 1 .017-.904l1.237-.43a1.885 1.885 0 0 0 1.164-1.166l.436-1.25a.475.475 0 0 1 .9.009l.432 1.241c.191.55.616.975 1.166 1.166Z"
      })]
    })
  });
  var _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0);
  let _v51 = ["topic", "answer", "visual"],
    _v52 = async ({
      apiUrl: _v0,
      jwt: _v1,
      signal: _v2
    }) => {
      if (!_v0 || !_v1) return [];
      try {
        let _v0 = await fetch(`https://${_v0}/search/agentic/suggestions`, {
          headers: {
            Authorization: `jwt ${_v1}`
          },
          signal: _v2
        });
        if (!_v0.ok) return [];
        let _v1 = await _v0.json();
        if (!_v1 || "object" != typeof _v1) return [];
        let _v2 = _v1.suggestions;
        if (!Array.isArray(_v2)) return [];
        return _v2.flatMap(_v0 => {
          if (!_v0 || "object" != typeof _v0) return [];
          let {
            kind: _v1,
            prompt: _v2
          } = _v0;
          return "string" != typeof _v1 || !_v51.includes(_v1) || "string" != typeof _v2 || 0 === _v2.length || _v2.length > 200 ? [] : [{
            kind: _v1,
            prompt: _v2
          }];
        }).slice(0, 3);
      } catch {
        return [];
      }
    },
    _v53 = "smart_search_recent_searches",
    _v54 = (_v0, _v1) => `${_v1}:${_v0}`,
    _v55 = _v0 => "object" == typeof _v0 && null !== _v0 && "string" == typeof _v0.query && _v0.query.trim().length > 0 && ("library" === _v0.scope || "vimeo" === _v0.scope),
    _v56 = () => {
      try {
        let _v0 = window.localStorage.getItem(_v53);
        if (!_v0) return [];
        let _v1 = JSON.parse(_v0);
        if (!Array.isArray(_v1)) return [];
        return _v1.filter(_v55).slice(0, 5).map(_v0 => ({
          ..._v0,
          id: _v54(_v0.query, _v0.scope)
        }));
      } catch {
        return [];
      }
    },
    _v57 = {
      ask: {
        subtitle: () => (0, _v13.translate)({
          singular: "Ask a question about your videos",
          dictionary: {
            es: {
              singular: "Haz una pregunta sobre tus videos"
            },
            "de-DE": {
              singular: "Stellen Sie eine Frage zu Ihren Videos"
            },
            "fr-FR": {
              singular: "Poser une question sur vos vidéos"
            },
            "ja-JP": {
              singular: "動画について質問する"
            },
            "ko-KR": {
              singular: "동영상에 대해 질문하기"
            },
            "pt-BR": {
              singular: "Faça uma pergunta sobre seus vídeos"
            },
            "zh-CN": {
              singular: "就你的视频提问"
            }
          }
        }),
        titles: [() => (0, _v13.translate)({
          singular: "Which videos mention next steps?",
          dictionary: {
            es: {
              singular: "¿Qué videos mencionan los próximos pasos?"
            },
            "de-DE": {
              singular: "Welche Videos erwähnen die nächsten Schritte?"
            },
            "fr-FR": {
              singular: "Quelles vidéos mentionnent les prochaines étapes ?"
            },
            "ja-JP": {
              singular: "次のステップについて言及している動画はどれですか?"
            },
            "ko-KR": {
              singular: "다음 단계에 대해 언급하는 동영상은 어떤 것들인가요?"
            },
            "pt-BR": {
              singular: "Quais vídeos mencionam os próximos passos?"
            },
            "zh-CN": {
              singular: "哪些视频提到了下一步？"
            }
          }
        }), () => (0, _v13.translate)({
          singular: "Which videos mention a discount?",
          dictionary: {
            es: {
              singular: "¿Qué videos mencionan un descuento?"
            },
            "de-DE": {
              singular: "Welche Videos erwähnen einen Rabatt?"
            },
            "fr-FR": {
              singular: "Quelles vidéos mentionnent une réduction ?"
            },
            "ja-JP": {
              singular: "どの動画が割引について言及していますか？"
            },
            "ko-KR": {
              singular: "어떤 동영상에서 할인을 언급하나요?"
            },
            "pt-BR": {
              singular: "Quais vídeos mencionam um desconto?"
            },
            "zh-CN": {
              singular: "哪些视频提到了折扣？"
            }
          }
        }), () => (0, _v13.translate)({
          singular: "Which videos discuss customer feedback?",
          dictionary: {
            es: {
              singular: "¿Qué videos tratan sobre comentarios de clientes?"
            },
            "de-DE": {
              singular: "Welche Videos behandeln Kundenfeedback?"
            },
            "fr-FR": {
              singular: "Quelles vidéos abordent les retours clients ?"
            },
            "ja-JP": {
              singular: "どの動画が顧客のフィードバックについて取り上げていますか？"
            },
            "ko-KR": {
              singular: "어떤 동영상들이 고객 피드백을 다루고 있나요?"
            },
            "pt-BR": {
              singular: "Quais vídeos abordam o feedback dos clientes?"
            },
            "zh-CN": {
              singular: "哪些视频讨论了客户反馈？"
            }
          }
        }), () => (0, _v13.translate)({
          singular: "Find the moment where the drone takes off",
          dictionary: {
            es: {
              singular: "Encuentra el momento en que el dron despega"
            },
            "de-DE": {
              singular: "Finden Sie den Moment, in dem die Drohne abhebt"
            },
            "fr-FR": {
              singular: "Trouvez le moment où le drone décolle"
            },
            "ja-JP": {
              singular: "ドローンが離陸する瞬間を見つける"
            },
            "ko-KR": {
              singular: "드론이 이륙하는 순간을 찾으세요"
            },
            "pt-BR": {
              singular: "Encontre o momento em que o drone decola"
            },
            "zh-CN": {
              singular: "找到无人机起飞的瞬间"
            }
          }
        }), () => (0, _v13.translate)({
          singular: "What questions were asked in recent videos?",
          dictionary: {
            es: {
              singular: "¿Qué preguntas se hicieron en videos recientes?"
            },
            "de-DE": {
              singular: "Welche Fragen wurden in den letzten Videos gestellt?"
            },
            "fr-FR": {
              singular: "Quelles questions ont été posées dans les vidéos récentes ?"
            },
            "ja-JP": {
              singular: "最近の動画でどのような質問がありましたか？"
            },
            "ko-KR": {
              singular: "최근 동영상에서 어떤 질문들이 있었나요?"
            },
            "pt-BR": {
              singular: "Quais perguntas foram feitas nos vídeos recentes?"
            },
            "zh-CN": {
              singular: "最近的视频中提出了哪些问题？"
            }
          }
        })]
      },
      topic: {
        subtitle: () => (0, _v13.translate)({
          singular: "Explore a topic",
          dictionary: {
            es: {
              singular: "Explorar un tema"
            },
            "de-DE": {
              singular: "Ein Thema erkunden"
            },
            "fr-FR": {
              singular: "Explorer un sujet"
            },
            "ja-JP": {
              singular: "トピックを探索"
            },
            "ko-KR": {
              singular: "주제 탐색"
            },
            "pt-BR": {
              singular: "Explorar um tópico"
            },
            "zh-CN": {
              singular: "探索主题"
            }
          }
        }),
        titles: [() => (0, _v13.translate)({
          singular: "Marketing strategy",
          dictionary: {
            es: {
              singular: "Estrategia de marketing"
            },
            "de-DE": {
              singular: "Marketingstrategie"
            },
            "fr-FR": {
              singular: "Stratégie marketing"
            },
            "ja-JP": {
              singular: "マーケティング戦略"
            },
            "ko-KR": {
              singular: "마케팅 전략"
            },
            "pt-BR": {
              singular: "Estratégia de marketing"
            },
            "zh-CN": {
              singular: "营销策略"
            }
          }
        }), () => (0, _v13.translate)({
          singular: "Product launch highlights",
          dictionary: {
            es: {
              singular: "Momentos destacados del lanzamiento del producto"
            },
            "de-DE": {
              singular: "Highlights zur Produkteinführung"
            },
            "fr-FR": {
              singular: "Points forts du lancement produit"
            },
            "ja-JP": {
              singular: "製品発表のハイライト"
            },
            "ko-KR": {
              singular: "제품 출시 하이라이트"
            },
            "pt-BR": {
              singular: "Destaques do lançamento do produto"
            },
            "zh-CN": {
              singular: "产品发布亮点"
            }
          }
        }), () => (0, _v13.translate)({
          singular: "Customer testimonials",
          dictionary: {
            es: {
              singular: "Testimonios de clientes"
            },
            "de-DE": {
              singular: "Kundenreferenzen"
            },
            "fr-FR": {
              singular: "Témoignages clients"
            },
            "ja-JP": {
              singular: "お客様の声"
            },
            "ko-KR": {
              singular: "고객 추천사"
            },
            "pt-BR": {
              singular: "Depoimentos de clientes"
            },
            "zh-CN": {
              singular: "客户推荐"
            }
          }
        }), () => (0, _v13.translate)({
          singular: "Team all-hands recaps",
          dictionary: {
            es: {
              singular: "Resúmenes de la reunión general del equipo"
            },
            "de-DE": {
              singular: "Zusammenfassungen der Team-All-Hands"
            },
            "fr-FR": {
              singular: "Compte-rendus des réunions générales d'équipe"
            },
            "ja-JP": {
              singular: "オールハンズの振り返り"
            },
            "ko-KR": {
              singular: "팀 전체 회의 요약"
            },
            "pt-BR": {
              singular: "Resumos das reuniões gerais da equipe"
            },
            "zh-CN": {
              singular: "团队全员大会回顾"
            }
          }
        })]
      },
      filter: {
        subtitle: () => (0, _v13.translate)({
          singular: "Filter in words",
          dictionary: {
            es: {
              singular: "Filtrar por palabras"
            },
            "de-DE": {
              singular: "Nach Wörtern filtern"
            },
            "fr-FR": {
              singular: "Filtrer par mots"
            },
            "ja-JP": {
              singular: "語句で絞り込む"
            },
            "ko-KR": {
              singular: "단어로 필터링"
            },
            "pt-BR": {
              singular: "Filtrar por palavras"
            },
            "zh-CN": {
              singular: "按词过滤"
            }
          }
        }),
        titles: [() => (0, _v13.translate)({
          singular: "My unlisted videos over 10 minutes",
          dictionary: {
            es: {
              singular: "Mis videos no listados de más de 10 minutos"
            },
            "de-DE": {
              singular: "Meine nicht gelisteten Videos über 10 Minuten"
            },
            "fr-FR": {
              singular: "Mes vidéos non répertoriées de plus de 10 minutes"
            },
            "ja-JP": {
              singular: "自分の限定公開動画（10分超）"
            },
            "ko-KR": {
              singular: "내 비공개 동영상(10분 초과)"
            },
            "pt-BR": {
              singular: "Meus vídeos não listados com mais de 10 minutos"
            },
            "zh-CN": {
              singular: "我的未列出视频超过10分钟"
            }
          }
        }), () => (0, _v13.translate)({
          singular: "Videos uploaded this month",
          dictionary: {
            es: {
              singular: "Videos subidos este mes"
            },
            "de-DE": {
              singular: "Diesen Monat hochgeladene Videos"
            },
            "fr-FR": {
              singular: "Vidéos téléversées ce mois-ci"
            },
            "ja-JP": {
              singular: "今月アップロードされた動画"
            },
            "ko-KR": {
              singular: "이번 달에 업로드된 동영상"
            },
            "pt-BR": {
              singular: "Vídeos enviados este mês"
            },
            "zh-CN": {
              singular: "本月上传的视频"
            }
          }
        }), () => (0, _v13.translate)({
          singular: "Private videos with captions",
          dictionary: {
            es: {
              singular: "Videos privados con subtítulos"
            },
            "de-DE": {
              singular: "Private Videos mit Untertiteln"
            },
            "fr-FR": {
              singular: "Vidéos privées avec sous-titres"
            },
            "ja-JP": {
              singular: "字幕付きの非公開動画"
            },
            "ko-KR": {
              singular: "자막이 있는 비공개 동영상"
            },
            "pt-BR": {
              singular: "Vídeos privados com legendas"
            },
            "zh-CN": {
              singular: "带字幕的私人视频"
            }
          }
        }), () => (0, _v13.translate)({
          singular: "Videos longer than an hour",
          dictionary: {
            es: {
              singular: "Videos de más de una hora"
            },
            "de-DE": {
              singular: "Videos länger als eine Stunde"
            },
            "fr-FR": {
              singular: "Vidéos de plus d'une heure"
            },
            "ja-JP": {
              singular: "1時間以上の動画"
            },
            "ko-KR": {
              singular: "1시간을 초과하는 동영상"
            },
            "pt-BR": {
              singular: "Vídeos com mais de uma hora"
            },
            "zh-CN": {
              singular: "时长超过一小时的视频"
            }
          }
        })]
      }
    },
    _v58 = Object.keys(_v57);
  var _v59 = _v0.i(0);
  let _v60 = ["type", "video.uri", "video.name", "video.link", "video.manageLink", "video.duration", "video.pictures.sizes", "folder.uri", "folder.name", "folder.metadata.connections.items.total"],
    _v61 = _v0 => _v0.split("/").filter(Boolean).pop() ?? _v0;
  var _v62 = _v0.i(0),
    _v63 = _v0.i(0);
  let _v64 = _v3.useLayoutEffect,
    _v65 = "var(--vimeo-colors-vimeoBlueAlpha-200)",
    _v66 = "fill-component",
    _v67 = ({
      children: _v0,
      paddingX: _v1 = "sm"
    }) => (0, _v1.jsx)(_v11.Text, {
      variant: "heading-xs",
      color: "text-secondary",
      paddingX: _v1,
      children: _v0
    }),
    _v68 = ({
      icon: _v0,
      title: _v1,
      subtitle: _v2,
      scope: _v3,
      hoverBg: _v4,
      href: _v5,
      onSelect: _v6
    }) => (0, _v1.jsxs)(_v4.Box, {
      ...(_v5 ? {
        as: "a",
        href: _v5
      } : {
        as: "button",
        type: "button"
      }),
      onClick: _v6,
      display: "flex",
      width: "100%",
      textAlign: "left",
      alignItems: "center",
      gap: (0, _v5.rem)(10),
      padding: "sm",
      minHeight: (0, _v5.rem)(40),
      borderRadius: "sm",
      textDecoration: "none",
      backgroundColor: "transparent",
      _hover: {
        backgroundColor: _v4
      },
      children: [(0, _v1.jsx)(_v23.Flex, {
        flexShrink: 0,
        alignItems: "center",
        justifyContent: "center",
        boxSize: (0, _v5.rem)(20),
        children: _v0
      }), (0, _v1.jsxs)(_v23.Flex, {
        flexDir: "column",
        flexGrow: 1,
        minWidth: 0,
        justifyContent: "center",
        children: [(0, _v1.jsx)(_v11.Text, {
          variant: "body-md",
          color: "text-primary",
          noOfLines: 1,
          children: _v1
        }), _v2 && (0, _v1.jsx)(_v11.Text, {
          variant: "body-sm",
          color: "text-secondary",
          noOfLines: 1,
          children: _v2
        })]
      }), (0, _v1.jsx)(_v11.Text, {
        variant: "body-sm",
        color: "text-secondary",
        flexShrink: 0,
        whiteSpace: "nowrap",
        children: "vimeo" === _v3 ? (0, _v13.translate)("Vimeo") : (0, _v13.translate)({
          singular: "Library",
          dictionary: {
            es: {
              singular: "Biblioteca"
            },
            "de-DE": {
              singular: "Bibliothek"
            },
            "fr-FR": {
              singular: "Bibliothèque"
            },
            "ja-JP": {
              singular: "ライブラリ"
            },
            "ko-KR": {
              singular: "라이브러리"
            },
            "pt-BR": {
              singular: "Biblioteca"
            },
            "zh-CN": {
              singular: "视频库"
            }
          }
        })
      })]
    }),
    _v69 = ({
      item: _v0,
      onSelect: _v1
    }) => (0, _v1.jsx)(_v4.Box, {
      as: "a",
      href: _v0.link,
      onClick: _v1,
      flex: "1 1 0",
      maxWidth: "25%",
      minWidth: 0,
      padding: (0, _v5.rem)(6),
      borderRadius: "sm",
      textAlign: "left",
      textDecoration: "none",
      backgroundColor: "transparent",
      _hover: {
        backgroundColor: "fill-component-hover"
      },
      children: (0, _v1.jsxs)(_v23.Flex, {
        flexDir: "column",
        gap: (0, _v5.rem)(6),
        children: [(0, _v1.jsx)(_v23.Flex, {
          width: "100%",
          borderRadius: "xs",
          overflow: "hidden",
          backgroundColor: "fill-component",
          alignItems: "center",
          justifyContent: "center",
          sx: {
            aspectRatio: "16 / 9"
          },
          children: _v0.thumbnail ? (0, _v1.jsx)(_v4.Box, {
            as: "img",
            src: _v0.thumbnail,
            alt: "",
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }) : "folder" === _v0.kind ? (0, _v1.jsx)(_v41.FolderFilled, {
            boxSize: (0, _v5.rem)(28),
            color: "text-secondary"
          }) : (0, _v1.jsx)(_v47.Video, {
            boxSize: (0, _v5.rem)(28),
            color: "text-secondary"
          })
        }), (0, _v1.jsxs)(_v4.Box, {
          width: "100%",
          children: [(0, _v1.jsx)(_v11.Text, {
            variant: "body-md",
            color: "text-primary",
            noOfLines: 1,
            children: _v0.title
          }), (0, _v1.jsx)(_v11.Text, {
            variant: "body-sm",
            color: "text-secondary",
            noOfLines: 1,
            children: null !== _v0.itemCount ? (0, _v13.translate)({
              singular: "{count} item",
              plural: "{count} items",
              count: _v0.itemCount,
              replacements: {
                count: _v0.itemCount
              },
              dictionary: {
                es: {
                  singular: "{count} elemento",
                  plural: "{count} elementos"
                },
                "de-DE": {
                  singular: "{count} Element",
                  plural: "{count} Elemente"
                },
                "fr-FR": {
                  singular: "{count} élément",
                  plural: "{count} éléments"
                },
                "ja-JP": {
                  singular: "{count} 件",
                  plural: "{count} 件"
                },
                "ko-KR": {
                  singular: "{count}개 항목",
                  plural: "{count}개 항목"
                },
                "zh-CN": {
                  singular: "{count} 项",
                  plural: "{count} 项"
                }
              }
            }) : _v0.duration
          })]
        })]
      })
    }),
    _v70 = ({
      scope: _v0,
      onChange: _v1
    }) => (0, _v1.jsxs)(_v28.Menu, {
      isLazy: !0,
      autoSelect: !1,
      placement: "bottom-end",
      children: [(0, _v1.jsx)(_v29.MenuButton, {
        type: "button",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        height: (0, _v5.rem)(28),
        paddingX: (0, _v5.rem)(6),
        borderRadius: "sm",
        backgroundColor: "fill-component",
        color: "text-secondary",
        _hover: {
          backgroundColor: "fill-component-hover"
        },
        "aria-label": (0, _v13.translate)({
          singular: "Change search scope",
          dictionary: {
            es: {
              singular: "Cambiar el alcance de búsqueda"
            },
            "de-DE": {
              singular: "Suchbereich ändern"
            },
            "fr-FR": {
              singular: "Modifier la portée de la recherche"
            },
            "ja-JP": {
              singular: "検索範囲を変更"
            },
            "ko-KR": {
              singular: "검색 범위 변경"
            },
            "pt-BR": {
              singular: "Alterar escopo de pesquisa"
            },
            "zh-CN": {
              singular: "更改搜索范围"
            }
          }
        }),
        children: (0, _v1.jsxs)(_v23.Flex, {
          alignItems: "center",
          gap: (0, _v5.rem)(2),
          children: ["library" === _v0 ? (0, _v1.jsx)(_v43.MyLibrary, {
            boxSize: (0, _v5.rem)(18)
          }) : (0, _v1.jsx)(_v42.Globe, {
            boxSize: (0, _v5.rem)(18)
          }), (0, _v1.jsx)(_v40.ChevronDownSmall, {
            boxSize: (0, _v5.rem)(18)
          })]
        })
      }), (0, _v1.jsxs)(_v30.MenuList, {
        minWidth: (0, _v5.rem)(224),
        children: [(0, _v1.jsx)(_v31.MenuItem, {
          icon: (0, _v1.jsx)(_v43.MyLibrary, {
            boxSize: (0, _v5.rem)(20)
          }),
          onClick: () => _v1("library"),
          children: (0, _v1.jsxs)(_v23.Flex, {
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            children: [(0, _v1.jsx)(_v11.Text, {
              as: "span",
              variant: "body-md",
              children: (0, _v13.translate)({
                singular: "Search Library",
                dictionary: {
                  es: {
                    singular: "Buscar en la biblioteca"
                  },
                  "de-DE": {
                    singular: "Bibliothek durchsuchen"
                  },
                  "fr-FR": {
                    singular: "Bibliothèque de recherche"
                  },
                  "ja-JP": {
                    singular: "ライブラリを検索"
                  },
                  "ko-KR": {
                    singular: "라이브러리 검색"
                  },
                  "pt-BR": {
                    singular: "Pesquisar na biblioteca"
                  },
                  "zh-CN": {
                    singular: "搜索视频库"
                  }
                }
              })
            }), "library" === _v0 && (0, _v1.jsx)(_v39.Checkmark, {
              boxSize: (0, _v5.rem)(20)
            })]
          })
        }), (0, _v1.jsx)(_v31.MenuItem, {
          icon: (0, _v1.jsx)(_v42.Globe, {
            boxSize: (0, _v5.rem)(20)
          }),
          onClick: () => _v1("vimeo"),
          children: (0, _v1.jsxs)(_v23.Flex, {
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            children: [(0, _v1.jsx)(_v11.Text, {
              as: "span",
              variant: "body-md",
              children: (0, _v13.translate)({
                singular: "Search all of Vimeo",
                dictionary: {
                  es: {
                    singular: "Buscar en todo Vimeo"
                  },
                  "de-DE": {
                    singular: "Ganz Vimeo durchsuchen"
                  },
                  "fr-FR": {
                    singular: "Rechercher dans tout Vimeo"
                  },
                  "ja-JP": {
                    singular: "Vimeoのすべてを検索"
                  },
                  "ko-KR": {
                    singular: "Vimeo 전체 검색"
                  },
                  "pt-BR": {
                    singular: "Pesquisar tudo no Vimeo"
                  },
                  "zh-CN": {
                    singular: "搜索 Vimeo 的所有内容"
                  }
                }
              })
            }), "vimeo" === _v0 && (0, _v1.jsx)(_v39.Checkmark, {
              boxSize: (0, _v5.rem)(20)
            })]
          })
        })]
      })]
    }),
    _v71 = ({
      width: _v0,
      maxWidth: _v1,
      minimised: _v2 = !1
    }) => {
      let _v3,
        _v4 = (0, _v22.useRouter)(),
        {
          trackAgenticSearchEntryClicked: _v5
        } = (0, _v49.useSearchTracking)(),
        _v6 = (0, _v3.useContext)(_v7.ViewerContext),
        _v7 = (0, _v3.useContext)(_v18),
        _v8 = (0, _v3.useContext)(_v19),
        [_v9, _v10] = (0, _v3.useState)(!1),
        [_v11, _v12] = (0, _v3.useState)(!1),
        [_v13, _v14] = (0, _v3.useState)(""),
        _v15 = (0, _v50.routeSearchScope)(_v4.asPath, _v4.isReady),
        [_v16, _v17] = (0, _v3.useState)(),
        _v18 = _v16 && _v16.from === _v15 ? _v16.scope : _v15 ?? "library",
        _v19 = (0, _v3.useCallback)(_v0 => _v17({
          scope: _v0,
          from: _v15
        }), [_v15]),
        _v20 = (() => {
          let _v0 = (0, _v22.useRouter)(),
            _v1 = (0, _v3.useContext)(_v7.ViewerContext),
            {
              folderName: _v2
            } = (0, _v3.useContext)(_v63.OmnisearchContext),
            {
              contentSpaceEnabled: _v3
            } = (0, _v62.useContentSpaceEnabled)(_v1?.teamUser?.ownerId),
            _v4 = _v0?.pathname ?? "",
            _v5 = _v0?.query ?? {};
          return _v2 ? {
            type: "folder",
            name: _v2,
            folderId: "string" == typeof _v5.folderId ? _v5.folderId : null
          } : ("/library" === _v4 || _v4.startsWith("/library/")) && !_v3 ? {
            type: "library",
            name: (0, _v13.translate)({
              singular: "My library",
              dictionary: {
                es: {
                  singular: "Mi biblioteca"
                },
                "de-DE": {
                  singular: "Meine Bibliothek"
                },
                "fr-FR": {
                  singular: "Ma bibliothèque"
                },
                "ja-JP": {
                  singular: "マイ ライブラリ"
                },
                "ko-KR": {
                  singular: "내 라이브러리"
                },
                "pt-BR": {
                  singular: "Minha Biblioteca"
                },
                "zh-CN": {
                  singular: "我的视频库"
                }
              }
            })
          } : null;
        })(),
        [_v21, _v22] = (0, _v3.useState)(!1),
        _v23 = (0, _v3.useRef)(null),
        [_v24, _v25] = (0, _v3.useState)(0),
        _v26 = (0, _v3.useRef)(null),
        [_v27, _v28] = (0, _v3.useState)("auto"),
        {
          capabilities: {
            hasPublicSearchDisabled: _v29 = !0
          }
        } = (0, _v48.useCapability)(["hasPublicSearchDisabled"], _v6?.teamUser?.ownerId),
        _v30 = (0, _v50.isPublicSearchAvailable)(_v29, _v6),
        [_v31, _v32] = (0, _v3.useState)([]),
        _v33 = _v13.trim().toLowerCase(),
        _v34 = _v33.length > 0,
        _v35 = "vimeo" === _v18,
        _v36 = _v35 ? (0, _v13.translate)({
          singular: "Search all of Vimeo",
          dictionary: {
            es: {
              singular: "Buscar en todo Vimeo"
            },
            "de-DE": {
              singular: "Ganz Vimeo durchsuchen"
            },
            "fr-FR": {
              singular: "Rechercher dans tout Vimeo"
            },
            "ja-JP": {
              singular: "Vimeoのすべてを検索"
            },
            "ko-KR": {
              singular: "Vimeo 전체 검색"
            },
            "pt-BR": {
              singular: "Pesquisar tudo no Vimeo"
            },
            "zh-CN": {
              singular: "搜索 Vimeo 的所有内容"
            }
          }
        }) : _v20 ? (0, _v13.translate)({
          singular: "Search in: {name}…",
          replacements: {
            name: _v20.name
          },
          dictionary: {
            es: {
              singular: "Buscar en: {name}…"
            },
            "de-DE": {
              singular: "Suchen in: {name}…"
            },
            "fr-FR": {
              singular: "Rechercher dans : {name}…"
            },
            "ja-JP": {
              singular: "検索対象: {name}…"
            },
            "ko-KR": {
              singular: "검색 대상: {name}…"
            },
            "pt-BR": {
              singular: "Pesquisar em: {name}…"
            },
            "zh-CN": {
              singular: "搜索于: {name}…"
            }
          }
        }) : (0, _v13.translate)({
          singular: "Search Library",
          dictionary: {
            es: {
              singular: "Buscar en la biblioteca"
            },
            "de-DE": {
              singular: "Bibliothek durchsuchen"
            },
            "fr-FR": {
              singular: "Bibliothèque de recherche"
            },
            "ja-JP": {
              singular: "ライブラリを検索"
            },
            "ko-KR": {
              singular: "라이브러리 검색"
            },
            "pt-BR": {
              singular: "Pesquisar na biblioteca"
            },
            "zh-CN": {
              singular: "搜索视频库"
            }
          }
        }),
        [_v37, _v38] = (0, _v3.useState)([]),
        _v39 = (0, _v3.useRef)(0),
        {
          items: _v40,
          isLoading: _v41
        } = (({
          query: _v0,
          enabled: _v1,
          folderId: _v2
        }) => {
          let _v3 = (0, _v3.useContext)(_v7.ViewerContext),
            _v4 = _v3?.teamUser?.ownerId ?? _v3?.user?.id,
            _v5 = (_v0 => {
              let [_v1, _v2] = (0, _v3.useState)(_v0);
              return (0, _v3.useEffect)(() => {
                let _v0 = setTimeout(() => _v2(_v0), 400 * !!_v0);
                return () => clearTimeout(_v0);
              }, [_v0, 400]), _v1;
            })(_v0),
            _v6 = _v5.length > 0,
            {
              data: _v7,
              isLoading: _v8
            } = (0, _v59.useGetUserItems)(() => _v1 && _v4 ? {
              where: {
                userId: _v4
              },
              query: {
                query: _v5,
                perPage: _v6 ? 5 : 4,
                page: 1,
                sort: _v6 ? "default" : "last_user_action_event_date",
                direction: "desc",
                ...(_v2 ? {
                  includeFolderIds: _v2,
                  filter: "video"
                } : {})
              },
              select: _v60,
              headers: {
                Accept: "application/vnd.vimeo.*; version=3.4.2"
              }
            } : null, {
              revalidateOnFocus: !1,
              keepPreviousData: !0
            });
          return {
            items: (_v7?.data ?? []).flatMap(_v0 => {
              if ("folder" === _v0.type && _v0.folder?.uri) {
                let {
                    folder: _v0
                  } = _v0,
                  _v1 = _v0.metadata?.connections?.items?.total ?? 0;
                return [{
                  id: _v61(_v0.uri),
                  kind: "folder",
                  title: _v0.name ?? "",
                  thumbnail: null,
                  duration: null,
                  itemCount: _v1,
                  link: `/manage/folders/${_v61(_v0.uri)}/`
                }];
              }
              if ("video" === _v0.type && _v0.video?.uri) {
                let {
                    video: _v0
                  } = _v0,
                  _v1 = _v0.pictures?.sizes ?? [];
                return [{
                  id: _v61(_v0.uri),
                  kind: "video",
                  title: _v0.name ?? "",
                  thumbnail: _v1[_v1.length - 1]?.link ?? null,
                  duration: (_v0 => {
                    if (!_v0 || _v0 < 0) return "";
                    let _v1 = Math.floor(_v0 / 60),
                      _v2 = Math.floor(_v0 % 60);
                    return `${_v1}:${String(_v2).padStart(2, "0")}`;
                  })(_v0.duration),
                  itemCount: null,
                  link: _v0.manageLink ?? _v0.link ?? ""
                }];
              }
              return [];
            }),
            isLoading: _v8 || _v5 !== _v0
          };
        })({
          query: _v33,
          enabled: _v9 && !_v35,
          folderId: _v21 && _v20?.type === "folder" ? _v20.folderId : null
        }),
        _v42 = (0, _v3.useMemo)(() => _v31.filter(_v0 => _v0.scope === _v18 && (!_v33 || _v0.query.toLowerCase().includes(_v33))), [_v33, _v31, _v18]),
        _v43 = (0, _v3.useCallback)(() => {
          _v32(_v56());
          let _v0 = (_v0 => {
            let _v1 = [..._v0];
            for (let _v0 = _v1.length - 1; _v0 > 0; _v0 -= 1) {
              let _v0 = Math.floor(Math.random() * (_v0 + 1));
              [_v1[_v0], _v1[_v0]] = [_v1[_v0], _v1[_v0]];
            }
            return _v1;
          })(_v58).slice(0, 3).map(_v0 => {
            let {
              subtitle: _v1,
              titles: _v2
            } = _v57[_v0];
            return {
              id: _v0,
              title: (0, _v2[Math.floor(Math.random() * _v2.length)])(),
              subtitle: _v1(),
              scope: "library"
            };
          });
          _v38(_v0), _v10(!0);
          let _v1 = ++_v39.current;
          _v52({
            apiUrl: _v6?.apiUrl,
            jwt: _v6?.jwt
          }).then(_v0 => {
            _v1 === _v39.current && _v0.length > 0 && _v38(((_v0, _v1) => {
              let _v2 = _v0.slice(0, 3).map(({
                kind: _v0,
                prompt: _v1
              }) => ({
                id: `personalized-${_v0}`,
                title: _v1,
                subtitle: (_v0 => {
                  switch (_v0) {
                    case "topic":
                      return (0, _v13.translate)({
                        singular: "Explore a topic",
                        dictionary: {
                          es: {
                            singular: "Explorar un tema"
                          },
                          "de-DE": {
                            singular: "Ein Thema erkunden"
                          },
                          "fr-FR": {
                            singular: "Explorer un sujet"
                          },
                          "ja-JP": {
                            singular: "トピックを探索"
                          },
                          "ko-KR": {
                            singular: "주제 탐색"
                          },
                          "pt-BR": {
                            singular: "Explorar um tópico"
                          },
                          "zh-CN": {
                            singular: "探索主题"
                          }
                        }
                      });
                    case "answer":
                      return (0, _v13.translate)({
                        singular: "Ask a question about your videos",
                        dictionary: {
                          es: {
                            singular: "Haz una pregunta sobre tus videos"
                          },
                          "de-DE": {
                            singular: "Stellen Sie eine Frage zu Ihren Videos"
                          },
                          "fr-FR": {
                            singular: "Poser une question sur vos vidéos"
                          },
                          "ja-JP": {
                            singular: "動画について質問する"
                          },
                          "ko-KR": {
                            singular: "동영상에 대해 질문하기"
                          },
                          "pt-BR": {
                            singular: "Faça uma pergunta sobre seus vídeos"
                          },
                          "zh-CN": {
                            singular: "就你的视频提问"
                          }
                        }
                      });
                    case "visual":
                      return (0, _v13.translate)({
                        singular: "Find what's on screen",
                        dictionary: {
                          es: {
                            singular: "Encuentra lo que aparece en pantalla"
                          },
                          "de-DE": {
                            singular: "Finde, was auf dem Bildschirm zu sehen ist"
                          },
                          "fr-FR": {
                            singular: "Identifier ce qui est à l’écran"
                          },
                          "ja-JP": {
                            singular: "画面に表示されているものを見つける"
                          },
                          "ko-KR": {
                            singular: "화면에 있는 항목 찾기"
                          },
                          "pt-BR": {
                            singular: "Encontre o que está na tela"
                          },
                          "zh-CN": {
                            singular: "查找屏幕上的内容"
                          }
                        }
                      });
                  }
                })(_v0),
                scope: "library"
              }));
              if (0 === _v2.length) return _v1.slice(0, 3);
              let _v3 = _v1.find(({
                id: _v0
              }) => "filter" === _v0);
              if (!_v3) return [..._v2, ..._v1].slice(0, 3);
              if (3 === _v2.length) {
                let _v0 = Math.floor(3 * Math.random());
                return _v2.map((_v0, _v1) => _v1 === _v0 ? _v3 : _v0);
              }
              return [..._v2, _v3, ..._v1.filter(({
                id: _v0
              }) => _v0 !== _v3.id)].slice(0, 3);
            })(_v0, _v0));
          });
        }, [_v6?.apiUrl, _v6?.jwt]),
        _v44 = (0, _v3.useCallback)(() => {
          _v39.current += 1, _v10(!1), _v28("auto"), _v22(!1);
        }, []);
      (0, _v3.useEffect)(() => {
        if (_v8) return _v8.current = _v43, () => {
          _v8.current = null;
        };
      }, [_v8, _v43]), (0, _v3.useEffect)(() => {
        let _v0 = _v0 => {
          (/mac/i.test(navigator.platform) ? _v0.metaKey : _v0.ctrlKey) && "k" === _v0.key.toLowerCase() && (_v0.preventDefault(), _v9 ? _v44() : _v43());
        };
        return document.addEventListener("keydown", _v0), () => document.removeEventListener("keydown", _v0);
      }, [_v9, _v43, _v44]), _v64(() => {
        let _v0 = _v26.current;
        if (!_v0) return;
        let _v1 = _v0.offsetHeight;
        _v28(_v0 => _v0 === _v1 ? _v0 : _v1);
      }), _v64(() => {
        if (!_v21) return;
        let _v0 = _v23.current?.offsetWidth ?? 0;
        _v25(_v0 => _v0 === _v0 ? _v0 : _v0);
      }, [_v21, _v20?.name]), (0, _v3.useEffect)(() => {
        if (!_v11) return;
        let _v0 = () => {
          _v12(!1), _v44();
        };
        _v4.events.on("routeChangeComplete", _v0), _v4.events.on("routeChangeError", _v0);
        let _v1 = window.setTimeout(_v0, 0);
        return () => {
          _v4.events.off("routeChangeComplete", _v0), _v4.events.off("routeChangeError", _v0), window.clearTimeout(_v1);
        };
      }, [_v11, _v44, _v4.events]);
      let _v45 = (_v0, _v1 = _v18, _v2 = !0) => {
        let _v3 = _v0.trim();
        if (!_v3) return;
        if (_v5({
          location: "global_nav"
        }), _v2 && ((_v0, _v1) => {
          let _v2 = _v0.trim();
          if (!_v2) return _v56();
          let _v3 = {
              id: _v54(_v2, _v1),
              query: _v2,
              scope: _v1
            },
            _v4 = [_v3, ..._v56().filter(_v0 => _v0.id !== _v3.id)].slice(0, 5);
          try {
            window.localStorage.setItem(_v53, JSON.stringify(_v4));
          } catch {}
        })(_v3, _v1), _v12(!0), "vimeo" === _v1) return void _v4.push(`/search?q=${encodeURIComponent(_v3)}`);
        let _v4 = _v21 && _v20?.type === "folder" && _v20.folderId ? `&filter_folder_include=${encodeURIComponent(_v20.folderId)}` : "";
        _v4.push(`/search/library?q=${encodeURIComponent(_v3)}${_v4}`);
      };
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(_v3 = _v2 ? (0, _v1.jsx)(_v36.IconButton, {
          "aria-label": _v36,
          variant: "tertiary",
          icon: (0, _v1.jsx)(_v46, {
            boxSize: "sm",
            color: "text-primary"
          }),
          onClick: _v43,
          "data-testid": "smart-search-trigger"
        }) : (0, _v1.jsxs)(_v4.Box, {
          position: "relative",
          width: _v0 ?? "100%",
          maxWidth: _v1,
          height: (0, _v5.rem)(40),
          borderRadius: "input-md",
          sx: {
            "@keyframes vimeoPulse": {
              "0%": {
                opacity: 0,
                backgroundPosition: "0% 0%"
              },
              "14%": {
                opacity: 1,
                backgroundPosition: "15% 15%"
              },
              "46%": {
                opacity: 1,
                backgroundPosition: "85% 85%"
              },
              "60%": {
                opacity: 0,
                backgroundPosition: "100% 100%"
              },
              "100%": {
                opacity: 0,
                backgroundPosition: "0% 0%"
              }
            },
            "@keyframes vimeoInnerGlow": {
              "0%": {
                boxShadow: "inset 7px 7px 14px -6px rgba(23, 213, 255, 0), inset -7px -7px 14px -6px rgba(135, 91, 229, 0)"
              },
              "14%": {
                boxShadow: "inset 7px 7px 14px -6px rgba(23, 213, 255, 0.15), inset -7px -7px 14px -6px rgba(135, 91, 229, 0.15)"
              },
              "46%": {
                boxShadow: "inset 7px 7px 14px -6px rgba(135, 91, 229, 0.15), inset -7px -7px 14px -6px rgba(23, 213, 255, 0.15)"
              },
              "60%": {
                boxShadow: "inset 7px 7px 14px -6px rgba(135, 91, 229, 0), inset -7px -7px 14px -6px rgba(23, 213, 255, 0)"
              },
              "100%": {
                boxShadow: "inset 7px 7px 14px -6px rgba(23, 213, 255, 0), inset -7px -7px 14px -6px rgba(135, 91, 229, 0)"
              }
            },
            "@media (prefers-reduced-motion: reduce)": {
              "&, & *, &::before, &::after, & *::before, & *::after": {
                animation: "none !important"
              }
            }
          },
          children: [(0, _v1.jsxs)(_v4.Box, {
            as: "button",
            type: "button",
            onClick: _v43,
            "data-testid": "smart-search-trigger",
            position: "relative",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            gap: "sm",
            width: "100%",
            height: (0, _v5.rem)(40),
            paddingX: "md",
            paddingRight: _v30 ? (0, _v5.rem)(48) : void 0,
            borderRadius: "input-md",
            bg: "fill-surface",
            border: "1px solid",
            borderColor: "stroke",
            color: "text-secondary",
            _hover: {
              bg: "fill-component"
            },
            sx: _v35 ? void 0 : {
              "&::before": {
                content: '""',
                position: "absolute",
                inset: 0,
                borderRadius: "inherit",
                backgroundImage: "linear-gradient(120deg, transparent 0%, var(--vimeo-colors-vimeoBlueAlpha-200) 30%, transparent 55%, var(--vimeo-colors-vimeoBlueAlpha-100) 80%, transparent 100%)",
                backgroundSize: "300% 300%",
                opacity: 0,
                animation: "vimeoPulse 10s ease-in-out 3",
                pointerEvents: "none",
                zIndex: 0
              },
              "&::after": {
                content: '""',
                position: "absolute",
                inset: "-1px",
                borderRadius: "inherit",
                padding: "1px",
                backgroundImage: "linear-gradient(120deg, var(--vimeo-colors-grayAlpha-300) 0%, var(--vimeo-colors-vimeoBlue-200) 24%, var(--vimeo-colors-grayAlpha-300) 48%, var(--vimeo-colors-vimeoBlue-300) 68%, var(--vimeo-colors-purple-300) 80%, var(--vimeo-colors-grayAlpha-300) 100%)",
                backgroundSize: "300% 300%",
                opacity: 0,
                animation: "vimeoPulse 10s ease-in-out 3",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                pointerEvents: "none",
                zIndex: 0
              }
            },
            children: [!_v35 && (0, _v1.jsx)(_v4.Box, {
              "aria-hidden": !0,
              position: "absolute",
              inset: 0,
              borderRadius: "inherit",
              pointerEvents: "none",
              zIndex: 0,
              sx: {
                animation: "vimeoInnerGlow 10s ease-in-out 3"
              }
            }), (0, _v1.jsxs)(_v4.Box, {
              as: "span",
              position: "relative",
              zIndex: 1,
              display: "flex",
              alignItems: "center",
              gap: "sm",
              children: [_v35 ? (0, _v1.jsx)(_v44.SearchMagnifier, {
                boxSize: "xs",
                color: "text-secondary"
              }) : (0, _v1.jsx)(_v46, {
                boxSize: "xs",
                color: "text-secondary"
              }), (0, _v1.jsx)(_v11.Text, {
                variant: "body-md",
                color: "text-secondary",
                children: _v36
              })]
            })]
          }), _v30 && (0, _v1.jsx)(_v4.Box, {
            position: "absolute",
            right: (0, _v5.rem)(6),
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            children: (0, _v1.jsx)(_v70, {
              scope: _v18,
              onChange: _v19
            })
          })]
        }), _v7 ? (0, _v1.jsx)(_v37.PopoverAnchor, {
          children: _v3
        }) : _v3), (0, _v1.jsxs)(_v32.Modal, {
          isOpen: _v9,
          onClose: _v44,
          size: "xl",
          scrollBehavior: "inside",
          isCentered: !0,
          children: [(0, _v1.jsx)(_v33.ModalOverlay, {
            backdropFilter: "blur(8px)",
            backgroundColor: "rgba(10, 12, 16, 0.35)",
            _dark: {
              backgroundColor: "rgba(255, 255, 255, 0.12)"
            }
          }), (0, _v1.jsx)(_v34.ModalContent, {
            marginX: "md",
            maxWidth: (0, _v5.rem)(510),
            borderRadius: "lg",
            overflow: "hidden",
            bg: "background",
            boxShadow: "lg",
            children: (0, _v1.jsx)(_v21.motion.div, {
              initial: !1,
              animate: {
                height: _v27
              },
              transition: {
                duration: .24,
                ease: [.4, 0, .2, 1]
              },
              style: {
                overflow: "hidden"
              },
              children: (0, _v1.jsxs)("div", {
                ref: _v26,
                children: [(0, _v1.jsx)(_v4.Box, {
                  paddingX: "sm",
                  paddingY: "sm",
                  children: (0, _v1.jsxs)(_v25.InputGroup, {
                    size: "md",
                    children: [_v21 && _v20 ? (0, _v1.jsx)(_v26.InputLeftElement, {
                      width: "auto",
                      pointerEvents: "none",
                      paddingLeft: (0, _v5.rem)(5),
                      justifyContent: "flex-start",
                      children: (0, _v1.jsx)(_v23.Flex, {
                        ref: _v23,
                        as: "span",
                        display: "inline-flex",
                        align: "center",
                        height: (0, _v5.rem)(32),
                        paddingX: (0, _v5.rem)(8),
                        borderRadius: "sm",
                        bg: "fill-skeleton",
                        color: "text-primary",
                        userSelect: "none",
                        children: (0, _v1.jsx)(_v4.Box, {
                          as: "span",
                          maxWidth: (0, _v5.rem)(120),
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          fontSize: (0, _v5.rem)(14),
                          fontWeight: 700,
                          lineHeight: (0, _v5.rem)(24),
                          children: (0, _v13.translate)({
                            singular: "in: {name}",
                            replacements: {
                              name: _v20.name
                            },
                            dictionary: {
                              es: {
                                singular: "en: {name}"
                              },
                              "fr-FR": {
                                singular: "dans : {name}"
                              },
                              "ja-JP": {
                                singular: "{name}内"
                              },
                              "pt-BR": {
                                singular: "em: {name}"
                              },
                              "zh-CN": {
                                singular: "在: {name}"
                              }
                            }
                          })
                        })
                      })
                    }) : (0, _v1.jsx)(_v26.InputLeftElement, {
                      pointerEvents: "none",
                      children: _v35 ? (0, _v1.jsx)(_v44.SearchMagnifier, {
                        boxSize: (0, _v5.rem)(20),
                        color: "text-secondary"
                      }) : (0, _v1.jsx)(_v46, {
                        boxSize: (0, _v5.rem)(20),
                        color: "text-secondary"
                      })
                    }), (0, _v1.jsx)(_v24.Input, {
                      autoFocus: !0,
                      value: _v13,
                      onChange: _v0 => {
                        _v14(_v0.target.value);
                      },
                      onKeyDown: _v0 => {
                        "Enter" === _v0.key ? _v45(_v13) : _v21 && ("Backspace" === _v0.key || "Delete" === _v0.key) && 0 === _v13.length && (_v0.preventDefault(), _v22(!1));
                      },
                      placeholder: _v21 ? (0, _v13.translate)({
                        singular: "Search…",
                        dictionary: {
                          es: {
                            singular: "Buscar…"
                          },
                          "de-DE": {
                            singular: "Suchen…"
                          },
                          "fr-FR": {
                            singular: "Rechercher…"
                          },
                          "ja-JP": {
                            singular: "検索…"
                          },
                          "ko-KR": {
                            singular: "검색…"
                          },
                          "pt-BR": {
                            singular: "Pesquisar…"
                          },
                          "zh-CN": {
                            singular: "搜索…"
                          }
                        }
                      }) : _v36,
                      "aria-label": _v36,
                      borderRadius: "md",
                      paddingLeft: _v21 ? (0, _v5.rem)(_v24 + 13) : void 0,
                      paddingRight: !_v21 && _v30 ? (0, _v5.rem)(56) : void 0
                    }), !_v21 && _v30 && (0, _v1.jsx)(_v26.InputRightElement, {
                      width: "auto",
                      paddingRight: (0, _v5.rem)(6),
                      height: "100%",
                      children: (0, _v1.jsx)(_v70, {
                        scope: _v18,
                        onChange: _v19
                      })
                    })]
                  })
                }), _v20 && !_v35 && !_v21 && (0, _v1.jsx)(_v4.Box, {
                  paddingX: "sm",
                  children: (0, _v1.jsxs)(_v4.Box, {
                    as: "button",
                    type: "button",
                    onClick: () => _v22(!0),
                    display: "flex",
                    width: "100%",
                    textAlign: "left",
                    alignItems: "center",
                    gap: (0, _v5.rem)(10),
                    padding: "sm",
                    minHeight: (0, _v5.rem)(40),
                    borderRadius: "sm",
                    backgroundColor: "transparent",
                    _hover: {
                      backgroundColor: _v66
                    },
                    children: [(0, _v1.jsx)(_v23.Flex, {
                      flexShrink: 0,
                      alignItems: "center",
                      justifyContent: "center",
                      boxSize: (0, _v5.rem)(20),
                      children: "folder" === _v20.type ? (0, _v1.jsx)(_v41.FolderFilled, {
                        boxSize: (0, _v5.rem)(20),
                        color: "text-secondary"
                      }) : (0, _v1.jsx)(_v43.MyLibrary, {
                        boxSize: (0, _v5.rem)(20),
                        color: "text-secondary"
                      })
                    }), (0, _v1.jsx)(_v11.Text, {
                      variant: "body-md",
                      color: "text-primary",
                      noOfLines: 1,
                      children: (0, _v13.translate)({
                        singular: "Search in {name}…",
                        replacements: {
                          name: _v20.name
                        },
                        dictionary: {
                          es: {
                            singular: "Buscar en {name}…"
                          },
                          "de-DE": {
                            singular: "In {name} suchen…"
                          },
                          "fr-FR": {
                            singular: "Rechercher dans {name}…"
                          },
                          "ja-JP": {
                            singular: "{name}内を検索…"
                          },
                          "ko-KR": {
                            singular: "{name}에서 검색…"
                          },
                          "pt-BR": {
                            singular: "Pesquisar em {name}…"
                          },
                          "zh-CN": {
                            singular: "在 {name} 中搜索…"
                          }
                        }
                      })
                    })]
                  })
                }), (0, _v1.jsxs)(_v4.Box, {
                  maxHeight: "85vh",
                  overflowY: "auto",
                  sx: {
                    scrollbarWidth: "thin"
                  },
                  children: [(_v34 || !_v35 && !_v21 && _v37.length > 0) && (0, _v1.jsxs)(_v23.Flex, {
                    flexDir: "column",
                    gap: "sm",
                    paddingX: "sm",
                    paddingY: "md",
                    children: [!_v35 && !_v21 && (0, _v1.jsx)(_v67, {
                      children: (0, _v13.translate)({
                        singular: "Smart search",
                        dictionary: {
                          es: {
                            singular: "Búsqueda inteligente"
                          },
                          "de-DE": {
                            singular: "Intelligente Suche"
                          },
                          "fr-FR": {
                            singular: "Recherche intelligente"
                          },
                          "ja-JP": {
                            singular: "スマート検索"
                          },
                          "ko-KR": {
                            singular: "스마트 검색"
                          },
                          "pt-BR": {
                            singular: "Pesquisa inteligente"
                          },
                          "zh-CN": {
                            singular: "智能搜索"
                          }
                        }
                      })
                    }), (0, _v1.jsxs)(_v23.Flex, {
                      flexDir: "column",
                      gap: (0, _v5.rem)(2),
                      children: [_v34 && (0, _v1.jsx)(_v68, {
                        icon: _v35 ? (0, _v1.jsx)(_v44.SearchMagnifier, {
                          boxSize: (0, _v5.rem)(20),
                          color: "text-secondary"
                        }) : (0, _v1.jsx)(_v46, {
                          boxSize: (0, _v5.rem)(20),
                          color: "text-secondary"
                        }),
                        title: _v13.trim(),
                        subtitle: _v35 ? (0, _v13.translate)({
                          singular: "Search all of Vimeo",
                          dictionary: {
                            es: {
                              singular: "Buscar en todo Vimeo"
                            },
                            "de-DE": {
                              singular: "Ganz Vimeo durchsuchen"
                            },
                            "fr-FR": {
                              singular: "Rechercher dans tout Vimeo"
                            },
                            "ja-JP": {
                              singular: "Vimeoのすべてを検索"
                            },
                            "ko-KR": {
                              singular: "Vimeo 전체 검색"
                            },
                            "pt-BR": {
                              singular: "Pesquisar tudo no Vimeo"
                            },
                            "zh-CN": {
                              singular: "搜索 Vimeo 的所有内容"
                            }
                          }
                        }) : (0, _v13.translate)({
                          singular: "Search your full Library.",
                          dictionary: {
                            es: {
                              singular: "Buscar en toda tu biblioteca."
                            },
                            "de-DE": {
                              singular: "Durchsuchen Sie Ihre gesamte Bibliothek."
                            },
                            "fr-FR": {
                              singular: "Recherchez dans l'intégralité de votre bibliothèque."
                            },
                            "ja-JP": {
                              singular: "ライブラリ全体を検索する。"
                            },
                            "ko-KR": {
                              singular: "전체 라이브러리를 검색하세요."
                            },
                            "pt-BR": {
                              singular: "Pesquise em toda a sua Biblioteca."
                            },
                            "zh-CN": {
                              singular: "搜索您的整个媒体库。"
                            }
                          }
                        }),
                        scope: _v18,
                        hoverBg: _v35 ? _v66 : _v65,
                        onSelect: () => _v45(_v13.trim())
                      }), !_v35 && !_v21 && !_v34 && _v37.map(_v0 => (0, _v1.jsx)(_v68, {
                        icon: (0, _v1.jsx)(_v38.AiSparkles, {
                          boxSize: (0, _v5.rem)(20),
                          color: "text-primary"
                        }),
                        title: _v0.title,
                        subtitle: _v0.subtitle,
                        scope: _v0.scope,
                        hoverBg: _v65,
                        onSelect: () => _v45(_v0.title, _v0.scope, !1)
                      }, _v0.id))]
                    })]
                  }), !_v35 && _v34 && (0, _v1.jsxs)(_v23.Flex, {
                    flexDir: "column",
                    gap: "sm",
                    paddingX: "sm",
                    paddingY: "md",
                    borderTop: "0.5px solid",
                    borderColor: "stroke",
                    children: [(0, _v1.jsx)(_v67, {
                      children: (0, _v13.translate)({
                        singular: "In your library",
                        dictionary: {
                          es: {
                            singular: "En tu biblioteca"
                          },
                          "de-DE": {
                            singular: "In Ihrer Bibliothek"
                          },
                          "fr-FR": {
                            singular: "Dans votre bibliothèque"
                          },
                          "ja-JP": {
                            singular: "ライブラリ内"
                          },
                          "ko-KR": {
                            singular: "내 라이브러리에"
                          },
                          "pt-BR": {
                            singular: "Na sua biblioteca"
                          },
                          "zh-CN": {
                            singular: "在您的库中"
                          }
                        }
                      })
                    }), _v41 && 0 === _v40.length ? (0, _v1.jsx)(_v23.Flex, {
                      justifyContent: "center",
                      alignItems: "center",
                      paddingY: "md",
                      children: (0, _v1.jsx)(_v35.Spinner, {
                        size: "sm",
                        color: "text-primary"
                      })
                    }) : _v40.length > 0 ? (0, _v1.jsx)(_v23.Flex, {
                      flexDir: "column",
                      gap: (0, _v5.rem)(2),
                      children: _v40.map(_v0 => (0, _v1.jsx)(_v68, {
                        icon: "folder" === _v0.kind ? (0, _v1.jsx)(_v41.FolderFilled, {
                          boxSize: (0, _v5.rem)(20),
                          color: "text-secondary"
                        }) : (0, _v1.jsx)(_v47.Video, {
                          boxSize: (0, _v5.rem)(20),
                          color: "text-secondary"
                        }),
                        title: _v0.title,
                        scope: "library",
                        hoverBg: _v66,
                        href: _v0.link,
                        onSelect: _v44
                      }, `${_v0.kind}-${_v0.id}`))
                    }) : (0, _v1.jsx)(_v11.Text, {
                      variant: "body-sm",
                      color: "text-secondary",
                      paddingX: "sm",
                      children: (0, _v13.translate)({
                        singular: "No matches in your library",
                        dictionary: {
                          es: {
                            singular: "No hay coincidencias en tu biblioteca"
                          },
                          "de-DE": {
                            singular: "Keine Treffer in Ihrer Bibliothek"
                          },
                          "fr-FR": {
                            singular: "Aucun résultat dans votre bibliothèque"
                          },
                          "ja-JP": {
                            singular: "ライブラリに一致する項目はありません"
                          },
                          "ko-KR": {
                            singular: "라이브러리에서 일치하는 항목이 없습니다"
                          },
                          "pt-BR": {
                            singular: "Nenhuma correspondência na sua biblioteca"
                          },
                          "zh-CN": {
                            singular: "您的库中没有匹配项"
                          }
                        }
                      })
                    })]
                  }), _v42.length > 0 && (0, _v1.jsxs)(_v23.Flex, {
                    flexDir: "column",
                    gap: "sm",
                    paddingX: "sm",
                    paddingY: "md",
                    borderTop: "0.5px solid",
                    borderColor: "stroke",
                    children: [(0, _v1.jsxs)(_v23.Flex, {
                      alignItems: "baseline",
                      justifyContent: "space-between",
                      gap: "sm",
                      children: [(0, _v1.jsx)(_v67, {
                        children: (0, _v13.translate)({
                          singular: "Recent",
                          dictionary: {
                            es: {
                              singular: "Reciente"
                            },
                            "de-DE": {
                              singular: "Neu"
                            },
                            "fr-FR": {
                              singular: "Récemment"
                            },
                            "ja-JP": {
                              singular: "直近"
                            },
                            "ko-KR": {
                              singular: "최근"
                            },
                            "pt-BR": {
                              singular: "Recente"
                            },
                            "zh-CN": {
                              singular: "最近"
                            }
                          }
                        })
                      }), (0, _v1.jsx)(_v27.Button, {
                        size: "xs",
                        variant: "tertiary",
                        onClick: () => {
                          try {
                            window.localStorage.removeItem(_v53);
                          } catch {}
                          _v32([]);
                        },
                        children: (0, _v13.translate)({
                          singular: "Clear",
                          dictionary: {
                            es: {
                              singular: "Borrar"
                            },
                            "de-DE": {
                              singular: "Löschen"
                            },
                            "fr-FR": {
                              singular: "Effacer"
                            },
                            "ja-JP": {
                              singular: "クリア"
                            },
                            "ko-KR": {
                              singular: "비우기"
                            },
                            "pt-BR": {
                              singular: "Limpar"
                            },
                            "zh-CN": {
                              singular: "清除"
                            }
                          }
                        })
                      })]
                    }), (0, _v1.jsx)(_v23.Flex, {
                      flexDir: "column",
                      gap: (0, _v5.rem)(2),
                      children: _v42.map(_v0 => (0, _v1.jsx)(_v68, {
                        icon: (0, _v1.jsx)(_v44.SearchMagnifier, {
                          boxSize: (0, _v5.rem)(20),
                          color: "text-secondary"
                        }),
                        title: _v0.query,
                        scope: _v0.scope,
                        hoverBg: _v66,
                        onSelect: () => _v45(_v0.query, _v0.scope)
                      }, _v0.id))
                    })]
                  }), !_v35 && !_v33 && _v40.length > 0 && (0, _v1.jsxs)(_v23.Flex, {
                    flexDir: "column",
                    gap: "sm",
                    paddingY: "md",
                    borderTop: "0.5px solid",
                    borderColor: "stroke",
                    children: [(0, _v1.jsx)(_v67, {
                      paddingX: "md",
                      children: (0, _v13.translate)({
                        singular: "Recently modified",
                        dictionary: {
                          es: {
                            singular: "Modificado recientemente"
                          },
                          "de-DE": {
                            singular: "Kürzlich geändert"
                          },
                          "fr-FR": {
                            singular: "Modifié récemment"
                          },
                          "ja-JP": {
                            singular: "最近変更された"
                          },
                          "ko-KR": {
                            singular: "최근 수정됨"
                          },
                          "pt-BR": {
                            singular: "Modificado recentemente"
                          },
                          "zh-CN": {
                            singular: "最近修改"
                          }
                        }
                      })
                    }), (0, _v1.jsx)(_v23.Flex, {
                      gap: "sm",
                      paddingX: "md",
                      children: _v40.map(_v0 => (0, _v1.jsx)(_v69, {
                        item: _v0,
                        onSelect: _v44
                      }, `${_v0.kind}-${_v0.id}`))
                    })]
                  })]
                })]
              })
            })
          })]
        })]
      });
    },
    _v72 = (0, _v2.default)(async () => {
      let {
        Omnisearch: _v0
      } = await _v0.A(0);
      return {
        default: _v0
      };
    }, {
      loadableGenerated: {
        modules: [0]
      }
    });
  _v0.s(["Search", 0, ({
    updateGlobalNavSearchState: _v0,
    withToggle: _v1,
    ..._v2
  }) => {
    let _v3 = (0, _v3.useContext)(_v7.ViewerContext),
      [, _v4] = (0, _v3.useState)(!1),
      {
        showSmartOverlay: _v5
      } = (() => {
        let _v0 = (0, _v3.useContext)(_v7.ViewerContext),
          {
            capabilities: {
              hasAgenticSearch: _v1 = !1
            }
          } = (0, _v48.useCapability)(["hasAgenticSearch"], _v0?.teamUser?.ownerId);
        return {
          showSmartOverlay: _v1
        };
      })();
    return _v3 && (!_v3.isSimplifiedSite || _v3.user) ? _v5 ? (0, _v1.jsx)(_v20, {
      children: (0, _v1.jsx)(_v4.Box, {
        display: "contents",
        "data-global-nav-search": !0,
        children: (0, _v1.jsx)(_v71, {
          minimised: _v1,
          width: "100%",
          maxWidth: {
            base: "none",
            lg: (0, _v5.rem)(480)
          }
        })
      })
    }) : (0, _v1.jsxs)(_v4.Box, {
      display: "contents",
      "data-global-nav-search": !0,
      children: [(0, _v1.jsx)(_v72, {}), (0, _v1.jsx)(_v6.SearchField, {
        updateGlobalNavSearchState: _v0 || _v4,
        width: "100%",
        maxWidth: (0, _v5.rem)(480),
        withToggle: _v1,
        ...(_v1 && {
          inputStyle: {
            maxWidth: "90vw",
            backgroundColor: "background",
            borderRadius: "input-md"
          }
        }),
        ..._v2
      })]
    }) : (0, _v1.jsx)(_v1.Fragment, {});
  }], 0);
}