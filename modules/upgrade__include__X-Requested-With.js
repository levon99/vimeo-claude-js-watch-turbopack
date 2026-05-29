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
  let _v20 = async _v0 => {
      let _v1 = await fetch("/upgrade", {
        method: "get",
        credentials: "include",
        headers: {
          "X-Requested-With": "XMLHttpRequest"
        }
      });
      for (let _v0 of Object.values(await _v1.json())) if (Object.values(_v0?.store_url).includes(_v0)) return _v0?.is_allowed_to_purchase;
      return !1;
    },
    _v21 = (_v0 = "") => {
      let [_v1, _v2] = (0, _v4.useState)(!1),
        [_v3, _v4] = (0, _v4.useState)(!1),
        _v5 = (0, _v9.deepDecodeURIComponent)(_v0),
        _v6 = !!(_v5?.match(/^\/cart\/.*/) || _v5?.match(/^\/store\/.*/));
      return (0, _v4.useEffect)(() => {
        _v6 && (_v4(!0), _v20(_v0.split("?")[0]).then(_v0 => {
          _v2(_v0), _v4(!1);
        }));
      }, [_v6, _v0]), {
        checkingCanUpgrade: _v3,
        canUpgrade: _v1,
        isStoreUri: _v6
      };
    };
  var _v22 = _v0.i(0);
  let _v23 = _v5.default.div.withConfig({
      displayName: "production__Layout",
      componentId: "sc-8c6a2b44-0"
    })`
  margin: 0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  a {
    text-decoration: none;
  }
`,
    _v24 = _v5.default.div.withConfig({
      displayName: "production__InterstitialContainer",
      componentId: "sc-8c6a2b44-1"
    })`
  width: 100%;
  text-align: center;
  background-color: ${_v0 => _v0.upgrade ? "none" : (0, _v11.blue)(50)};
  ${_v0 => _v0.fullHeight && "height: 100vh"};
`,
    _v25 = _v5.default.div.withConfig({
      displayName: "production__InterstitialContent",
      componentId: "sc-8c6a2b44-2"
    })`
  max-width: ${(0, _v3.rem)(720)};
  margin: auto;
  padding: ${(0, _v3.rem)(60)} ${(0, _v3.rem)(20)};
`,
    _v26 = (0, _v5.default)(_v13.VimeoLogo).withConfig({
      displayName: "production__Logo",
      componentId: "sc-8c6a2b44-3"
    })`
  width: ${(0, _v3.rem)(80)};
  margin-bottom: ${(0, _v3.rem)(40)};
`,
    _v27 = (0, _v5.default)(_v15.Header).withConfig({
      displayName: "production__InterstitialHeader",
      componentId: "sc-8c6a2b44-4"
    })`
  margin-bottom: ${(0, _v3.rem)(30)};
`,
    _v28 = (0, _v5.default)(_v14.Paragraph).withConfig({
      displayName: "production__InterstitialSubheading",
      componentId: "sc-8c6a2b44-5"
    })`
  display: block;
  margin-bottom: ${(0, _v3.rem)(20)};
`,
    _v29 = _v5.default.div.withConfig({
      displayName: "production__UpsellContainer",
      componentId: "sc-8c6a2b44-6"
    })`
  width: 100%;
  padding: 0 ${(0, _v3.rem)(20)} ${(0, _v3.rem)(60)} ${(0, _v3.rem)(20)};
`,
    _v30 = (0, _v5.default)(_v14.Paragraph).withConfig({
      displayName: "production__UpsellPrompt",
      componentId: "sc-8c6a2b44-7"
    })`
  display: block;
  max-width: ${(0, _v3.rem)(660)};
  margin: auto auto ${(0, _v3.rem)(60)} auto;
  text-align: center;
  line-height: ${(0, _v3.rem)(26)};
  padding-top: ${(0, _v3.rem)(60)};
`,
    _v31 = _v5.default.span.withConfig({
      displayName: "production__UpsellEmphasis",
      componentId: "sc-8c6a2b44-8"
    })`
  font-weight: 700;
`,
    _v32 = _v5.default.div.withConfig({
      displayName: "production__UpsellPlans",
      componentId: "sc-8c6a2b44-9"
    })`
  display: flex;
  flex-wrap: wrap;
  max-width: ${(0, _v3.rem)(0)};
  margin: 0 auto;
`,
    _v33 = _v5.default.div.withConfig({
      displayName: "production__UpsellPlan",
      componentId: "sc-8c6a2b44-10"
    })`
  flex: 0 1 calc(25% - ${(0, _v3.rem)(16)});
  box-shadow:
    rgba(0, 0, 0, 0.15) 0px 0px 0.0625rem 0px,
    rgba(0, 0, 0, 0.15) 0px 0.25rem 0.5rem 0px;
  margin: 0 ${(0, _v3.rem)(8)};
  padding: ${(0, _v3.rem)(20)};
  position: relative;
  min-height: ${(0, _v3.rem)(400)};

  ${_v0 => {
      if (!_v0.showContent) return _v5.css`
        background: ${(0, _v11.slate)(100)};
      `;
    }}

  @media screen and (max-width: ${(0, _v3.rem)(850)}) {
    flex: 0 1 calc(50% - ${(0, _v3.rem)(16)});
    margin: ${(0, _v3.rem)(8)};
  }

  @media screen and (max-width: ${(0, _v3.rem)(500)}) {
    flex: 0 1 100%;
    margin: ${(0, _v3.rem)(8)} 0;
  }
`,
    _v34 = _v5.default.div.withConfig({
      displayName: "production__PlanContent",
      componentId: "sc-8c6a2b44-11"
    })`
  width: 100%;
  text-align: left;
`,
    _v35 = (0, _v5.default)(_v15.Header).withConfig({
      displayName: "production__PlanHeader",
      componentId: "sc-8c6a2b44-12"
    })``,
    _v36 = (0, _v5.default)(_v15.Header).attrs({
      size: "4"
    }).withConfig({
      displayName: "production__PlanPrice",
      componentId: "sc-8c6a2b44-13"
    })``,
    _v37 = (0, _v5.default)(_v14.Paragraph).attrs({
      size: "2"
    }).withConfig({
      displayName: "production__PlanSubscriptionDuration",
      componentId: "sc-8c6a2b44-14"
    })`
  color: ${(0, _v11.slate)(400)};
  display: block;
`,
    _v38 = _v5.default.div.withConfig({
      displayName: "production__PlanPurchaseWrapper",
      componentId: "sc-8c6a2b44-15"
    })`
  margin: ${(0, _v3.rem)(20)} 0;
`,
    _v39 = (0, _v5.default)(_v14.Paragraph).attrs({
      size: "2"
    }).withConfig({
      displayName: "production__PlanHighlightFeature",
      componentId: "sc-8c6a2b44-16"
    })`
  font-weight: 500;
  display: block;
  margin-bottom: ${(0, _v3.rem)(3)};
`,
    _v40 = (0, _v5.default)(_v14.Paragraph).attrs({
      size: "2"
    }).withConfig({
      displayName: "production__PlanDescriptionHeader",
      componentId: "sc-8c6a2b44-17"
    })`
  color: ${(0, _v11.slate)(400)};
  display: block;
  margin: ${(0, _v3.rem)(12)} 0 ${(0, _v3.rem)(4)};
`,
    _v41 = _v5.default.ul.withConfig({
      displayName: "production__PlanDescription",
      componentId: "sc-8c6a2b44-18"
    })`
  list-style-type: disc;
  margin-left: ${(0, _v3.rem)(20)};
`,
    _v42 = ["plus", "pro", "business", "livePremium"];
  function _v43() {
    let _v0 = (0, _v16.useGetSubscriptionPlansData)(_v42),
      _v1 = {
        plus: {
          size: (0, _v10.translate)({
            singular: "250GB every year",
            dictionary: {
              es: {
                singular: "250 GB al año"
              },
              "de-DE": {
                singular: "250 GB pro Jahr"
              },
              "fr-FR": {
                singular: "250 Go chaque année"
              },
              "ja-JP": {
                singular: "年間 250GB"
              },
              "ko-KR": {
                singular: "매년 250GB"
              },
              "pt-BR": {
                singular: "250 GB por ano"
              },
              "zh-CN": {
                singular: "每年 250GB"
              }
            }
          }),
          users: (0, _v10.translate)({
            singular: "Single user",
            dictionary: {
              es: {
                singular: "Individual"
              },
              "de-DE": {
                singular: "Einzelner Benutzer"
              },
              "fr-FR": {
                singular: "Utilisateur unique"
              },
              "ja-JP": {
                singular: "シングルユーザー"
              },
              "ko-KR": {
                singular: "단일 사용자"
              },
              "pt-BR": {
                singular: "Individual"
              },
              "zh-CN": {
                singular: "单用户"
              }
            }
          }),
          description: [(0, _v10.translate)({
            singular: "Player customization",
            dictionary: {
              es: {
                singular: "Reproductor personalizable"
              },
              "de-DE": {
                singular: "Individuelle Anpassung des Players"
              },
              "fr-FR": {
                singular: "Personnalisation du player"
              },
              "ja-JP": {
                singular: "プレーヤー カスタマイズ"
              },
              "ko-KR": {
                singular: "커스텀 플레이어"
              },
              "pt-BR": {
                singular: "Customização do player"
              },
              "zh-CN": {
                singular: "播放器定制"
              }
            }
          }), (0, _v10.translate)({
            singular: "Privacy controls",
            dictionary: {
              es: {
                singular: "Controles de privacidad"
              },
              "de-DE": {
                singular: "Datenschutzsteuerungen"
              },
              "fr-FR": {
                singular: "Contrôle de la confidentialité"
              },
              "ja-JP": {
                singular: "プライバシーコントロール"
              },
              "ko-KR": {
                singular: "프라이버시 제어"
              },
              "pt-BR": {
                singular: "Controles de Privacidade"
              },
              "zh-CN": {
                singular: "隐私控制"
              }
            }
          }), (0, _v10.translate)({
            singular: "No ads on your videos",
            dictionary: {
              es: {
                singular: "Sin anuncios en tus videos"
              },
              "de-DE": {
                singular: "Deine Videos ohne Werbung"
              },
              "fr-FR": {
                singular: "Aucune publicité sur vos vidéos"
              },
              "ja-JP": {
                singular: "動画に広告表示なし"
              },
              "ko-KR": {
                singular: "광고 없는 동영상"
              },
              "pt-BR": {
                singular: "Sem anúncios em seus vídeos"
              },
              "zh-CN": {
                singular: "您的视频上没有广告"
              }
            }
          })]
        },
        pro: {
          size: (0, _v10.translate)({
            singular: "1TB every year",
            dictionary: {
              es: {
                singular: "1 TB al año"
              },
              "de-DE": {
                singular: "1 TB pro Jahr"
              },
              "fr-FR": {
                singular: "1 To chaque année"
              },
              "ja-JP": {
                singular: "年間 1TB"
              },
              "ko-KR": {
                singular: "매년 1TB"
              },
              "pt-BR": {
                singular: "1 TB por ano"
              },
              "zh-CN": {
                singular: "每年 1TB"
              }
            }
          }),
          users: (0, _v10.translate)({
            singular: "3 team members",
            dictionary: {
              es: {
                singular: "3 colaboradores"
              },
              "de-DE": {
                singular: "3 Teammitglieder"
              },
              "fr-FR": {
                singular: "3 membres d'équipe"
              },
              "ja-JP": {
                singular: "3人のチームメンバー"
              },
              "ko-KR": {
                singular: "팀원 3명 추가"
              },
              "pt-BR": {
                singular: "3 colaboradores"
              },
              "zh-CN": {
                singular: "3 名团队成员"
              }
            }
          }),
          descriptionTitle: (0, _v10.translate)({
            singular: "Everything in Plus +",
            dictionary: {
              es: {
                singular: "Todo lo de Plus, más"
              },
              "de-DE": {
                singular: "Alle Features von Plus und zusätzlich"
              },
              "fr-FR": {
                singular: "Tout Vimeo Plus inclus +"
              },
              "ja-JP": {
                singular: "Plusプランに含まれている全機能 + 以下の機能"
              },
              "ko-KR": {
                singular: "Plus의 모든 기능 +"
              },
              "pt-BR": {
                singular: "Tudo do Plus +"
              },
              "zh-CN": {
                singular: "Plus 中的所有权益 +"
              }
            }
          }),
          description: [(0, _v10.translate)({
            singular: "Video creation",
            dictionary: {
              es: {
                singular: "Creación de videos"
              },
              "de-DE": {
                singular: "Videoerstellung"
              },
              "fr-FR": {
                singular: "Création de vidéos"
              },
              "ja-JP": {
                singular: "動画作成"
              },
              "ko-KR": {
                singular: "동영상 제작"
              },
              "pt-BR": {
                singular: "Criação de vídeo"
              },
              "zh-CN": {
                singular: "视频制作"
              }
            }
          }), (0, _v10.translate)({
            singular: "Review and approval",
            dictionary: {
              es: {
                singular: "Revisión y aprobación"
              },
              "de-DE": {
                singular: "Review und Genehmigung"
              },
              "fr-FR": {
                singular: "Avis et validation"
              },
              "ja-JP": {
                singular: "レビューと承認機能"
              },
              "ko-KR": {
                singular: "리뷰 및 승인"
              },
              "pt-BR": {
                singular: "Revisão e aprovação"
              },
              "zh-CN": {
                singular: "审查和批准"
              }
            }
          }), (0, _v10.translate)({
            singular: "Private team projects",
            dictionary: {
              es: {
                singular: "Proyectos privados por equipos"
              },
              "de-DE": {
                singular: "Projekte von privaten Teams"
              },
              "fr-FR": {
                singular: "Projets d'équipe privés"
              },
              "ja-JP": {
                singular: "非公開のチームプロジェクト"
              },
              "ko-KR": {
                singular: "비공개 팀 프로젝트"
              },
              "pt-BR": {
                singular: "Projetos privados em equipe"
              },
              "zh-CN": {
                singular: "私密团队项目"
              }
            }
          }), (0, _v10.translate)({
            singular: "Customizable Showcase sites",
            dictionary: {
              es: {
                singular: "Sitios de presentaciones personalizables"
              },
              "de-DE": {
                singular: "Individuell anpassbare Seiten mit Präsentationen"
              },
              "fr-FR": {
                singular: "Sites de présentations personnalisables"
              },
              "ja-JP": {
                singular: "カスタム可能なショーケースサイト"
              },
              "ko-KR": {
                singular: "커스텀 가능한 쇼케이스 사이트"
              },
              "pt-BR": {
                singular: "Sites de Vitrines Customizáveis"
              },
              "zh-CN": {
                singular: "可定制的展示网站"
              }
            }
          })]
        },
        business: {
          size: (0, _v10.translate)({
            singular: "5TB total storage",
            dictionary: {
              es: {
                singular: "5 TB de almacenamiento en total"
              },
              "de-DE": {
                singular: "5TB Video-Gesamtspeicher"
              },
              "fr-FR": {
                singular: "5 To de stockage en tout"
              },
              "ja-JP": {
                singular: "合計 5TB のストレージ"
              },
              "ko-KR": {
                singular: "총 5TB 저장공간"
              },
              "pt-BR": {
                singular: "5 TB de armazenamento total"
              },
              "zh-CN": {
                singular: "5TB 总存储空间"
              }
            }
          }),
          users: (0, _v10.translate)({
            singular: "10 team members",
            dictionary: {
              es: {
                singular: "10 colaboradores"
              },
              "de-DE": {
                singular: "10 Teammitglieder"
              },
              "fr-FR": {
                singular: "10 membres d'équipes"
              },
              "ja-JP": {
                singular: "10人のチームメンバー"
              },
              "ko-KR": {
                singular: "팀원 10명 추가"
              },
              "pt-BR": {
                singular: "10 colaboradores"
              },
              "zh-CN": {
                singular: "10 名团队成员"
              }
            }
          }),
          descriptionTitle: (0, _v10.translate)({
            singular: "Everything in Pro +",
            dictionary: {
              es: {
                singular: "Todo lo de Pro, más"
              },
              "de-DE": {
                singular: "Alle Features von Pro und zusätzlich"
              },
              "fr-FR": {
                singular: "Tout Vimeo Pro inclus +"
              },
              "ja-JP": {
                singular: "Proプランに含まれている全機能 + 以下の機能"
              },
              "ko-KR": {
                singular: "Pro의 모든 기능 +"
              },
              "pt-BR": {
                singular: "Tudo do Pro +"
              },
              "zh-CN": {
                singular: "Pro 中的所有功能 + "
              }
            }
          }),
          description: [(0, _v10.translate)({
            singular: "Video creation with custom branding",
            dictionary: {
              es: {
                singular: "Creación de videos con imagen de marca personalizada"
              },
              "de-DE": {
                singular: "Videoerstellung mit individuellem Branding"
              },
              "fr-FR": {
                singular: "Création de vidéos avec votre marque personnalisée"
              },
              "ja-JP": {
                singular: "カスタムブランドで動画作成"
              },
              "ko-KR": {
                singular: "커스텀 브랜딩으로 동영상 제작"
              },
              "pt-BR": {
                singular: "Criação de vídeo com personalização da marca"
              },
              "zh-CN": {
                singular: "使用自定义品牌设计创建视频"
              }
            }
          }), (0, _v10.translate)({
            singular: "Player calls-to-action",
            dictionary: {
              es: {
                singular: "Llamadas a la acción en el reproductor"
              },
              "de-DE": {
                singular: "Handelsaufrufe im Player"
              },
              "fr-FR": {
                singular: "Appels à l'action du player"
              },
              "ja-JP": {
                singular: "プレーヤーのCTA機能"
              },
              "ko-KR": {
                singular: "플레이어 콜 투 액션"
              },
              "pt-BR": {
                singular: "Chamadas para a ação no player"
              },
              "zh-CN": {
                singular: "播放器行动号召"
              }
            }
          }), (0, _v10.translate)({
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
          }), (0, _v10.translate)({
            singular: "Engagement graphs",
            dictionary: {
              es: {
                singular: "Gráficas de interacción"
              },
              "de-DE": {
                singular: "Bindungsdiagramme"
              },
              "fr-FR": {
                singular: "Graphique d'implication"
              },
              "ja-JP": {
                singular: "エンゲージメントグラフ"
              },
              "ko-KR": {
                singular: "참여도 그래프"
              },
              "pt-BR": {
                singular: "Gráficos de engajamento"
              },
              "zh-CN": {
                singular: "参与图"
              }
            }
          }), (0, _v10.translate)("Google Analytics")]
        },
        livePremium: {
          size: (0, _v10.translate)({
            singular: "7TB total storage",
            dictionary: {
              es: {
                singular: "7 TB de almacenamiento en total"
              },
              "de-DE": {
                singular: "7TB Gesamtspeicher"
              },
              "fr-FR": {
                singular: "7 To d'espace de stockage vidéo total"
              },
              "ja-JP": {
                singular: "合計 7TB のストレージ"
              },
              "ko-KR": {
                singular: "총 7TB 저장공간"
              },
              "pt-BR": {
                singular: "Armazenamento total de 7 TB"
              },
              "zh-CN": {
                singular: "7TB 总存储空间"
              }
            }
          }),
          users: (0, _v10.translate)({
            singular: "Unlimited live viewers",
            dictionary: {
              es: {
                singular: "Espectadores ilimitados"
              },
              "de-DE": {
                singular: "Unbegrenzt viele Live-Viewers"
              },
              "fr-FR": {
                singular: "Nombre de spectateurs illimités"
              },
              "ja-JP": {
                singular: "無制限のライブ視聴者数"
              },
              "ko-KR": {
                singular: "무제한 라이브 시청자"
              },
              "pt-BR": {
                singular: "Público ao vivo ilimitado"
              },
              "zh-CN": {
                singular: "无限直播观众"
              }
            }
          }),
          descriptionTitle: (0, _v10.translate)({
            singular: "Everything in Business +",
            dictionary: {
              es: {
                singular: "Todo lo de Business, más"
              },
              "de-DE": {
                singular: "Das hat Business anzubieten"
              },
              "fr-FR": {
                singular: "Tout Vimeo Business inclus +"
              },
              "ja-JP": {
                singular: "Businessプランに含まれている全機能 + 以下の機能"
              },
              "ko-KR": {
                singular: "Business의 모든 기능 +"
              },
              "pt-BR": {
                singular: "Tudo do Business +"
              },
              "zh-CN": {
                singular: "Business 中的所有权益 +"
              }
            }
          }),
          description: [(0, _v10.translate)({
            singular: "Unlimited live events",
            dictionary: {
              es: {
                singular: "Eventos en vivo ilimitados"
              },
              "de-DE": {
                singular: "Unbegrenzt viele Live-Events"
              },
              "fr-FR": {
                singular: "Évènements live illimités"
              },
              "ja-JP": {
                singular: "無制限のライブイベント"
              },
              "ko-KR": {
                singular: "무제한 라이브 이벤트"
              },
              "pt-BR": {
                singular: "Eventos ao vivo ilimitados"
              },
              "zh-CN": {
                singular: "无限直播活动"
              }
            }
          }), (0, _v10.translate)({
            singular: "Live stream to multiple destinations",
            dictionary: {
              es: {
                singular: "Transmisión a varios destinos"
              },
              "de-DE": {
                singular: "Live-Stream an mehrere Ziele schicken"
              },
              "fr-FR": {
                singular: "Streaming en live vers de multiples destinations"
              },
              "ja-JP": {
                singular: "複数のサイトにライブ配信"
              },
              "ko-KR": {
                singular: "여러 목적지로 라이브 스트리밍"
              },
              "pt-BR": {
                singular: "Transmissão ao vivo para vários destinos"
              },
              "zh-CN": {
                singular: "流式传输到多个目的地"
              }
            }
          }), (0, _v10.translate)({
            singular: "Live Q&A, graphics and polls",
            dictionary: {
              es: {
                singular: "Q&A, gráficos y encuestas en vivo"
              },
              "de-DE": {
                singular: "Live-Fragerunden, -Grafiken und -Umfragen"
              },
              "fr-FR": {
                singular: "Questions-réponses, graphiques et sondages en direct"
              },
              "ja-JP": {
                singular: "Live 質問セッション、グラフィック、アンケート投票"
              },
              "ko-KR": {
                singular: "실시간 Q/A, 그래픽 및 투표"
              },
              "pt-BR": {
                singular: "Sessão de perguntas e respostas ao vivo, gráficos e enquetes"
              },
              "zh-CN": {
                singular: "在线问答、图形和投票"
              }
            }
          }), (0, _v10.translate)({
            singular: "Audience chat",
            dictionary: {
              es: {
                singular: "Chat para los espectadores"
              },
              "de-DE": {
                singular: "Publikum-Chat"
              },
              "fr-FR": {
                singular: "Fenêtre de discussion"
              },
              "ja-JP": {
                singular: "視聴者チャット"
              },
              "ko-KR": {
                singular: "시청자 채팅"
              },
              "pt-BR": {
                singular: "Chat com o público"
              },
              "zh-CN": {
                singular: "观众聊天"
              }
            }
          })]
        }
      },
      _v2 = (0, _v4.useContext)(_v17.ViewerContext),
      _v3 = _v2?.user,
      _v4 = (0, _v2.useRouter)(),
      _v5 = _v4.query,
      _v6 = _v5?.auth_action,
      {
        appId: _v7 = "0",
        link: _v8,
        redirect_uri: _v9 = "",
        transfer_status: _v10 = _v19.TransferStatus.TRANSFER_NOT_REQUESTED,
        managed_user_id: _v11 = "0",
        managed_user: _v12 = "",
        token: _v13,
        code: _v14,
        state: _v15,
        via: _v16,
        third_party_integration: _v17
      } = _v5,
      _v18 = window?.location?.search ?? "",
      {
        data: _v19,
        loading: _v20
      } = (0, _v8.useQuery)(`/apps/${_v7}?fields=callbacks`),
      _v21 = (0, _v4.useMemo)(() => {
        if (!_v20 && _v19 && _v9) {
          let _v0 = _v19.callbacks.some(_v0 => _v0 === _v9 || _v0 === _v9.split("?")[0] || _v9.startsWith(_v0) || _v0.endsWith("/") && _v9.startsWith(_v0.slice(0, -1)));
          if (!_v0) throw Error("Redirect URI is invalid.");
          return _v0;
        }
      }, [_v19, _v20, _v9]),
      _v22 = "vimeo_create" === _v16,
      _v23 = null;
    void 0 === _v17 && ("godaddy_create" === _v16 || "godaddy_upload" === _v16) && (_v23 = "godaddy"), null === _v2 || _v2.user || _v4.push({
      pathname: _v6 ? _v18.RequiredOAuthPaths[_v6] : _v18.RequiredOAuthPaths.join,
      query: _v4.query
    });
    let [_v24, _v25] = (0, _v4.useState)(!1),
      {
        transferStatus: _v26
      } = (0, _v19.useManagedUserTransferStatus)(_v7, _v11, _v12, _v24 ? void 0 : 0),
      _v27 = "0" === _v11 ? _v10 : _v26,
      _v28 = _v27 !== _v19.TransferStatus.TRANSFER_COMPLETED && _v27 !== _v19.TransferStatus.TRANSFER_FAILED && !_v24,
      _v29 = _v27 === _v19.TransferStatus.TRANSFER_COMPLETED || _v27 === _v19.TransferStatus.TRANSFER_FAILED || _v24,
      _v30 = "0" === _v11 || _v10 === _v19.TransferStatus.TRANSFER_COMPLETED || _v10 === _v19.TransferStatus.TRANSFER_FAILED,
      {
        checkingCanUpgrade: _v31,
        canUpgrade: _v32,
        isStoreUri: _v33
      } = _v21(_v8),
      _v34 = (0, _v4.useMemo)(() => {
        let _v0 = _v8 && (0, _v9.deepDecodeURIComponent)(_v8);
        if (_v0?.match(/^videos\/\d+/)) return (0, _v1.jsx)("a", {
          href: (0, _v22.transformLink)(_v0, _v5),
          children: (0, _v1.jsx)(_v12.Button, {
            format: "alternative",
            style: {
              margin: "auto"
            },
            children: (0, _v10.translate)({
              singular: "Continue to settings",
              dictionary: {
                es: {
                  singular: "Ir a la configuración"
                },
                "de-DE": {
                  singular: "Weiter zu Einstellungen"
                },
                "fr-FR": {
                  singular: "Continuer vers les paramètres"
                },
                "ja-JP": {
                  singular: "設定に進む"
                },
                "ko-KR": {
                  singular: "설정 계속하기"
                },
                "pt-BR": {
                  singular: "Continuar para as configurações"
                },
                "zh-CN": {
                  singular: "继续设置"
                }
              }
            })
          })
        });
        if (_v0?.match(/^\/apps\/([0-9]+)\/create\/templates.*/)) return (0, _v1.jsx)("a", {
          href: (0, _v22.transformLink)(_v0, _v5),
          children: (0, _v1.jsx)(_v12.Button, {
            format: "alternative",
            style: {
              margin: "auto"
            },
            children: (0, _v10.translate)({
              singular: "Continue to Vimeo Create",
              dictionary: {
                es: {
                  singular: "Ir a Vimeo Create"
                },
                "de-DE": {
                  singular: "Weiter zu Vimeo Create"
                },
                "fr-FR": {
                  singular: "Continuer vers Vimeo Create"
                },
                "ja-JP": {
                  singular: "Vimeo Create に進む"
                },
                "ko-KR": {
                  singular: "Vimeo Create로 계속하기"
                },
                "pt-BR": {
                  singular: "Continuar para o Vimeo Create"
                },
                "zh-CN": {
                  singular: "继续使用 Vimeo Create"
                }
              }
            })
          })
        });
        let _v1 = (0, _v9.deepDecodeURIComponent)(_v9),
          _v2 = (0, _v22.httpBuildQuery)({
            state: _v15,
            code: _v14,
            token: _v13
          }),
          _v3 = _v1 + (_v1.includes("?") ? "&" : "?") + _v2;
        return (0, _v1.jsx)("a", {
          href: _v3,
          children: (0, _v1.jsx)(_v12.Button, {
            format: "alternative",
            style: {
              margin: "auto"
            },
            onClick: function () {
              _v6.BigPictureClient.sendEvent(new _v6.Event("vimeo_com.account_connection", 3, {
                component: "upgrade",
                type: "app_redirect_click",
                account_type: null,
                managed_user_id: _v11,
                user_id: _v3?.id ? `${_v3.id}` : null,
                product: _v16 ?? "",
                device_id: _v2?.vuid ?? null,
                third_party_integration: _v23
              }));
            },
            children: _v22 ? (0, _v10.translate)({
              singular: "Back to Vimeo Create",
              dictionary: {
                es: {
                  singular: "Volver a Vimeo Create"
                },
                "de-DE": {
                  singular: "Zurück zu Vimeo Create"
                },
                "fr-FR": {
                  singular: "Revenir à Vimeo Create"
                },
                "ja-JP": {
                  singular: "Vimeo Createに戻る"
                },
                "ko-KR": {
                  singular: "Vimeo Create로 돌아가기"
                },
                "pt-BR": {
                  singular: "Voltar para o Vimeo Create"
                },
                "zh-CN": {
                  singular: "返回 Vimeo Create"
                }
              }
            }) : (0, _v10.translate)({
              singular: "Back to GoDaddy",
              dictionary: {
                es: {
                  singular: "Volver a GoDaddy"
                },
                "de-DE": {
                  singular: "Zurück zu GoDaddy"
                },
                "fr-FR": {
                  singular: "Revenir à GoDaddy"
                },
                "ja-JP": {
                  singular: "GoDaddyに戻る"
                },
                "ko-KR": {
                  singular: "GoDaddy로 돌아가기"
                },
                "pt-BR": {
                  singular: "Voltar para o GoDaddy"
                },
                "zh-CN": {
                  singular: "返回 GoDaddy"
                }
              }
            })
          })
        });
      }, [_v8, _v9, _v15, _v14, _v13, _v22, _v5, _v11, _v3?.id, _v16, _v2?.vuid, _v23]),
      [_v35, _v36] = (0, _v4.useState)(0);
    function _v37(_v0, _v1 = !1) {
      return () => {
        _v6.BigPictureClient.sendEvent(new _v6.Event("vimeo_com.account_connection", 3, {
          component: "upgrade",
          type: _v1 ? "upgrade_trial" : "upgrade_click",
          account_type: _v0,
          managed_user_id: _v11,
          user_id: _v3?.id ? `${_v3.id}` : null,
          product: _v16 ?? "",
          device_id: _v2?.vuid ?? null,
          third_party_integration: _v23
        }));
      };
    }
    return (0, _v4.useEffect)(() => {
      if (_v29) return;
      60 === _v35 && _v25(!0);
      let _v0 = setInterval(() => {
        _v36(_v0 => _v0 + 1);
      }, 0);
      return () => clearInterval(_v0);
    }, [_v29, _v35]), (0, _v4.useEffect)(() => {
      if (_v22 && (_v29 || _v30) && _v8 && !_v31) {
        let _v0 = decodeURIComponent(_v8);
        if (_v33) if (_v32) {
          let _v0 = (0, _v22.tryTransformLink)(_v0, _v5);
          _v0 ? window.location.replace(_v0) : _v21 && window.location.replace(_v9);
        } else _v21 && window.location.replace(_v9);
      }
    }, [_v30, _v32, _v31, _v33, _v8, _v29, _v5, _v9, _v22]), (0, _v4.useEffect)(() => {
      _v6.BigPictureClient.sendEvent(new _v6.Event("vimeo_com.account_connection", 3, {
        component: "upgrade",
        type: "landing",
        account_type: null,
        managed_user_id: _v11,
        user_id: _v3?.id ? `${_v3.id}` : null,
        product: _v16 ?? "",
        device_id: _v2?.vuid ?? null,
        third_party_integration: _v23
      }));
    }, [_v11, _v23, _v16, _v2?.vuid, _v3?.id]), (0, _v1.jsx)(_v23, {
      children: (0, _v1.jsxs)("div", {
        children: [(0, _v1.jsx)(_v24, {
          upgrade: _v30,
          fullHeight: _v22,
          children: (0, _v1.jsxs)(_v25, {
            children: [(0, _v1.jsx)(_v26, {}), (0, _v1.jsxs)(_v27, {
              size: "2",
              children: [_v30 && (0, _v10.translate)({
                singular: "Do more with Vimeo and GoDaddy",
                dictionary: {
                  es: {
                    singular: "Sé más productivo con Vimeo y GoDaddy"
                  },
                  "de-DE": {
                    singular: "Mit Vimeo und GoDaddy kannst du mehr"
                  },
                  "fr-FR": {
                    singular: "Allez plus loin avec Vimeo et GoDaddy"
                  },
                  "ja-JP": {
                    singular: "VimeoとGoDaddyでさらに活用しましょう"
                  },
                  "ko-KR": {
                    singular: "Vimeo와 GoDaddy로 더 많은 기능을 활용하세요"
                  },
                  "pt-BR": {
                    singular: "Faça mais com o Vimeo e o GoDaddy"
                  },
                  "zh-CN": {
                    singular: "利用 Vimeo 和 GoDaddy 完成更多任务"
                  }
                }
              }), _v28 && !_v30 && (0, _v10.translate)({
                singular: "Connecting your Vimeo and GoDaddy accounts…",
                dictionary: {
                  es: {
                    singular: "Conectando tus cuentas de Vimeo y GoDaddy…"
                  },
                  "de-DE": {
                    singular: "Deine Konten bei Vimeo und GoDaddy werden verknüpft ..."
                  },
                  "fr-FR": {
                    singular: "Vos comptes Vimeo et GoDaddy sont en cours de connexion..."
                  },
                  "ja-JP": {
                    singular: "VimeoアカウントとGoDaddyアカウントを接続しています..."
                  },
                  "ko-KR": {
                    singular: "Vimeo 계정을 GoDaddy 계정에 연결하는 중..."
                  },
                  "pt-BR": {
                    singular: "Conectando suas contas do Vimeo e GoDaddy..."
                  },
                  "zh-CN": {
                    singular: "正在连接您的 Vimeo 和 GoDaddy 账户..."
                  }
                }
              }), _v29 && !_v30 && (0, _v10.translate)({
                singular: "Your accounts are connected",
                dictionary: {
                  es: {
                    singular: "Tus cuentas están conectadas"
                  },
                  "de-DE": {
                    singular: "Deine Konten sind verknüpft"
                  },
                  "fr-FR": {
                    singular: "Vos comptes sont connectés"
                  },
                  "ja-JP": {
                    singular: "アカウントは接続されています"
                  },
                  "ko-KR": {
                    singular: "계정이 연결되었습니다"
                  },
                  "pt-BR": {
                    singular: "Suas contas estão conectadas"
                  },
                  "zh-CN": {
                    singular: "您的帐户已连接"
                  }
                }
              })]
            }), !_v30 && (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsxs)(_v28, {
                size: "2",
                children: [_v28 && (0, _v10.translate)({
                  singular: "Depending on how many videos you have, this may take a few minutes.",
                  dictionary: {
                    es: {
                      singular: "Según la cantidad de videos que tengas, es posible que este proceso demore unos minutos."
                    },
                    "de-DE": {
                      singular: "Je nachdem, wie viele Videos du hast, kann das ein paar Minuten dauern."
                    },
                    "fr-FR": {
                      singular: "En fonction de votre nombre de vidéos, cela peut prendre quelques minutes."
                    },
                    "ja-JP": {
                      singular: "動画の数によっては、数分かかる場合があります。"
                    },
                    "ko-KR": {
                      singular: "동영상의 개수에 따라 몇 분 정도 소요될 수 있습니다."
                    },
                    "pt-BR": {
                      singular: "Dependendo de quantos vídeos você tem, isso pode levar alguns minutos."
                    },
                    "zh-CN": {
                      singular: "这可能需要几分钟时间，具体取决于您的视频数量。"
                    }
                  }
                }), _v29 && (0, _v10.translate)({
                  singular: "Videos are now available on both GoDaddy and Vimeo.",
                  dictionary: {
                    es: {
                      singular: "Los videos ahora están disponibles en GoDaddy y Vimeo."
                    },
                    "de-DE": {
                      singular: "Videos sind jetzt auf GoDaddy und Vimeo verfügbar."
                    },
                    "fr-FR": {
                      singular: "Vos vidéos sont désormais disponibles sur GoDaddy et Vimeo."
                    },
                    "ja-JP": {
                      singular: "動画はGoDaddyとVimeoの両方で利用可能になりました。"
                    },
                    "ko-KR": {
                      singular: "이제 GoDaddy와 Vimeo 두 곳 모두에서 동영상을 확인할 수 있습니다."
                    },
                    "pt-BR": {
                      singular: "Agora os vídeos estão disponíveis no GoDaddy e no Vimeo."
                    },
                    "zh-CN": {
                      singular: "视频现已在 GoDaddy 和 Vimeo 上线。"
                    }
                  }
                })]
              }), _v28 && (0, _v1.jsx)(_v7.Progress, {
                value: 100,
                colorScheme: "vimeoBlue",
                size: "md",
                maxW: (0, _v3.rem)(440),
                mx: "auto"
              }), !_v22 && _v29 && _v34]
            })]
          })
        }), !_v22 && (0, _v1.jsxs)(_v29, {
          children: [!_v30 && (0, _v1.jsx)(_v30, {
            size: "1",
            children: (0, _v10.translate)({
              singular: "It’s easy to get more storage, faster video conversion, advanced customization, and speedier support. {EMPHASIS}Try risk-free for 30 days.{EMPHASIS}",
              replacements: {
                EMPHASIS: _v0 => (0, _v1.jsx)(_v31, {
                  children: _v0
                })
              },
              dictionary: {
                es: {
                  singular: "Es muy fácil obtener más almacenamiento, personalización avanzada, y asistencia y conversión de video más rápidas. {EMPHASIS}Pruébalo sin riesgos durante 30 días.{EMPHASIS}"
                },
                "de-DE": {
                  singular: "Du kannst dir ganz einfach noch mehr Speicherplatz, noch schnellere Video-Konvertierung, erweiterte Personalisierungsmöglichkeiten und noch schnelleren Support sichern. {EMPHASIS}Ohne Risiko 30 Tage lang testen.{EMPHASIS}"
                },
                "fr-FR": {
                  singular: "Vous pouvez facilement obtenir plus d'espace de stockage, convertir vos vidéos plus rapidement, utiliser des outils de personnalisation avancés et bénéficier d'une assistance technique de pointe. {EMPHASIS}Essayez pendant 30 jours sans risque.{EMPHASIS}"
                },
                "ja-JP": {
                  singular: "大容量のストレージ、高速動画変換、高度なカスタマイズ機能や迅速なサポート機能をご利用ください。{EMPHASIS}30日間全額返金保証付きでお試しください。{EMPHASIS}"
                },
                "ko-KR": {
                  singular: "더 넉넉한 저장 공간과 더 빠른 동영상 변환, 고급 커스텀 옵션 및 더 신속한 지원 등의 혜택을 쉽게 누릴 수 있습니다. {EMPHASIS}위험 부담 없이 30일간 체험해보세요.{EMPHASIS}"
                },
                "pt-BR": {
                  singular: "É fácil conseguir mais espaço de armazenamento, conversão de vídeo mais rápida, personalização avançada e suporte mais rápido. {EMPHASIS}Experimente sem riscos por 30 dias.{EMPHASIS}"
                },
                "zh-CN": {
                  singular: "要获得更多存储空间、更快的视频转换速度、高级定制和更快的支持，此事轻而易举。{EMPHASIS}零风险试用 30 天。{EMPHASIS}"
                }
              }
            })
          }), (0, _v1.jsx)(_v32, {
            children: _v0 && _v0.map((_v0, _v1) => {
              let _v2 = _v30 || _v29,
                _v3 = _v1[_v0.tier];
              return (0, _v1.jsx)(_v33, {
                showContent: _v2,
                children: _v2 && (0, _v1.jsxs)(_v34, {
                  children: [(0, _v1.jsx)(_v35, {
                    size: "2",
                    children: _v0.name
                  }), (0, _v1.jsxs)(_v36, {
                    children: ["$", _v0.price?.annualMonthly, " ", (0, _v10.translate)({
                      singular: "/month",
                      dictionary: {
                        es: {
                          singular: "/mes"
                        },
                        "de-DE": {
                          singular: "/Monat"
                        },
                        "fr-FR": {
                          singular: "/mois"
                        },
                        "ja-JP": {
                          singular: "/月"
                        },
                        "ko-KR": {
                          singular: "/월"
                        },
                        "pt-BR": {
                          singular: "/mês"
                        },
                        "zh-CN": {
                          singular: "/月"
                        }
                      }
                    })]
                  }), (0, _v1.jsx)(_v37, {
                    children: (0, _v10.translate)({
                      singular: "billed annually",
                      dictionary: {
                        es: {
                          singular: "facturados anualmente"
                        },
                        "de-DE": {
                          singular: "Jährliche Abrechnung"
                        },
                        "fr-FR": {
                          singular: "facturé annuellement"
                        },
                        "ja-JP": {
                          singular: "年払い"
                        },
                        "ko-KR": {
                          singular: "연간 청구"
                        },
                        "pt-BR": {
                          singular: "fatura enviada anualmente"
                        },
                        "zh-CN": {
                          singular: "按年计费"
                        }
                      }
                    })
                  }), !!_v18 && (0, _v1.jsx)(_v38, {
                    children: _v0.metadata.interactions?.purchase?.uri?.freeTrial ? (0, _v1.jsxs)(_v1.Fragment, {
                      children: [(0, _v1.jsx)(_v12.Button, {
                        element: "a",
                        fluid: !0,
                        href: _v0.metadata.interactions.purchase.uri.freeTrial,
                        onClick: _v37(_v0.tier, !0),
                        children: (0, _v10.translate)({
                          singular: "Start free trial",
                          dictionary: {
                            es: {
                              singular: "Iniciar prueba gratuita"
                            },
                            "de-DE": {
                              singular: "Kostenloses Probeabo starten"
                            },
                            "fr-FR": {
                              singular: "Commencez l'essai gratuit"
                            },
                            "ja-JP": {
                              singular: "無料トライアルを始める"
                            },
                            "ko-KR": {
                              singular: "무료 체험 시작"
                            },
                            "pt-BR": {
                              singular: "Faça um teste grátis"
                            },
                            "zh-CN": {
                              singular: "开始免费试用"
                            }
                          }
                        })
                      }), (0, _v1.jsx)(_v12.Button, {
                        element: "a",
                        variant: "hyperminimal",
                        fluid: !0,
                        size: "xs",
                        href: _v0.metadata.interactions.purchase.uri.annual ?? void 0,
                        onClick: _v37(_v0.tier),
                        children: (0, _v10.translate)({
                          singular: "or purchase now",
                          dictionary: {
                            es: {
                              singular: "o cómprelo ahora"
                            },
                            "de-DE": {
                              singular: "oder jetzt kaufen"
                            },
                            "fr-FR": {
                              singular: "ou bien achetez maintenant"
                            },
                            "ja-JP": {
                              singular: "または今すぐ購入"
                            },
                            "ko-KR": {
                              singular: "또는 지금 구매하세요"
                            },
                            "pt-BR": {
                              singular: "ou compre agora"
                            },
                            "zh-CN": {
                              singular: "或立即购买"
                            }
                          }
                        })
                      })]
                    }) : (0, _v1.jsx)(_v12.Button, {
                      format: "alternative",
                      fluid: !0,
                      element: "a",
                      href: _v0.metadata.interactions?.purchase?.uri?.annual ?? void 0,
                      onClick: _v37(_v0.tier),
                      children: (0, _v10.translate)({
                        singular: "Purchase now",
                        dictionary: {
                          es: {
                            singular: "Cómprelo ya"
                          },
                          "de-DE": {
                            singular: "Jetzt kaufen"
                          },
                          "fr-FR": {
                            singular: "Acheter maintenant"
                          },
                          "ja-JP": {
                            singular: "今すぐ購入"
                          },
                          "ko-KR": {
                            singular: "지금 구매하기"
                          },
                          "pt-BR": {
                            singular: "Compre agora mesmo"
                          },
                          "zh-CN": {
                            singular: "立即购买"
                          }
                        }
                      })
                    })
                  }), _v3 && (0, _v1.jsxs)(_v1.Fragment, {
                    children: [(0, _v1.jsx)(_v39, {
                      children: _v3.size
                    }), (0, _v1.jsx)(_v39, {
                      children: _v3.users
                    }), (0, _v1.jsx)(_v40, {
                      children: _v3.descriptionTitle
                    }), (0, _v1.jsx)(_v41, {
                      children: _v3.description.map((_v0, _v1) => (0, _v1.jsx)("li", {
                        children: (0, _v1.jsx)(_v14.Paragraph, {
                          size: "2",
                          children: _v0
                        })
                      }, _v1))
                    })]
                  })]
                })
              }, `plan-${_v0.tier}-${_v1}`);
            })
          })]
        })]
      })
    });
  }
  var _v44 = _v0.i(0);
  let _v45 = _v5.default.div.withConfig({
      displayName: "ExtensionUpsell__ExtensionUpsellContainer",
      componentId: "sc-92e1237f-0"
    })`
  padding-top: 68px;
  text-align: center;
`,
    _v46 = (0, _v5.default)(_v15.Header).attrs({
      size: "4"
    }).withConfig({
      displayName: "ExtensionUpsell__ExtensionUpsellHeader",
      componentId: "sc-92e1237f-1"
    })`
  line-height: ${(0, _v3.rem)(24)});
`,
    _v47 = (0, _v5.default)(_v14.Paragraph).attrs({
      size: "1"
    }).withConfig({
      displayName: "ExtensionUpsell__ExtensionUpsellSubHeader",
      componentId: "sc-92e1237f-2"
    })`
  margin-top: ${(0, _v3.rem)(10)};
  line-height: ${(0, _v3.rem)(26)};
`,
    _v48 = _v5.default.div.withConfig({
      displayName: "ExtensionUpsell__ExtensionUpsellBodyContainer",
      componentId: "sc-92e1237f-3"
    })`
  max-width: ${(0, _v3.rem)(760)};
  margin: 0 auto;
  margin-top: ${(0, _v3.rem)(60)};
  img {
    max-width: 100%;
  }
`,
    _v49 = _v5.default.div.withConfig({
      displayName: "ExtensionUpsell__ExtensionUpsellButtonContainer",
      componentId: "sc-92e1237f-4"
    })`
  margin-top: ${(0, _v3.rem)(27)};
  a {
    width: ${(0, _v3.rem)(134)};
    margin: 0 auto;
  }
`,
    _v50 = function ({
      extensionLink: _v0,
      onClick: _v1
    }) {
      return _v0 ? (0, _v1.jsxs)(_v45, {
        children: [(0, _v1.jsx)(_v46, {
          children: (0, _v10.translate)({
            singular: "Get the Chrome extension to record & share unlimited videos",
            dictionary: {
              es: {
                singular: "Obtén la extensión de Chrome para grabar y compartir un número ilimitado de videos."
              },
              "de-DE": {
                singular: "Richte dir die Chrome-Erweiterung ein, um Videos unbegrenzt aufzunehmen und zu teilen"
              },
              "fr-FR": {
                singular: "Téléchargez l'extension Chrome pour enregistrer et partager un nombre illimité de vidéos"
              },
              "ja-JP": {
                singular: "Chrome拡張機能を入手すれば、動画を無制限に録画して共有できます"
              },
              "ko-KR": {
                singular: "Chrome 확장 프로그램을 다운로드하여 동영상을 무제한으로 녹화하고 공유하세요."
              },
              "pt-BR": {
                singular: "Tenha a extensão do Chrome para gravar e compartilhar vídeos ilimitados"
              },
              "zh-CN": {
                singular: "下载 Chrome 扩展程序，录制和分享无限数量的视频"
              }
            }
          })
        }), (0, _v1.jsx)(_v47, {
          children: (0, _v10.translate)({
            singular: "Share anywhere and manage your videos securely in Vimeo — for free.",
            dictionary: {
              es: {
                singular: "Comparte en cualquier lugar y gestiona tus videos de forma segura y gratuita en Vimeo."
              },
              "de-DE": {
                singular: "Teile deine Videos überall und verwalte sie sicher auf Vimeo – kostenlos."
              },
              "fr-FR": {
                singular: "Partagez vos vidéos partout et gérez-les en toute sécurité sur Vimeo, et ce gratuitement."
              },
              "ja-JP": {
                singular: "好きなところで共有し、Vimeoで動画を安全に管理できます — すべて無料。"
              },
              "ko-KR": {
                singular: "Vimeo를 통해 무료로 원하는 모든 곳에 동영상을 공유하고 안전하게 관리하세요."
              },
              "pt-BR": {
                singular: "Compartilhe em qualquer lugar e gerencie seus vídeos com segurança no Vimeo — gratuitamente."
              },
              "zh-CN": {
                singular: "随时随地在 Vimeo 中安全地分享和管理视频，无需任何费用。"
              }
            }
          })
        }), (0, _v1.jsx)(_v49, {
          children: (0, _v1.jsx)(_v12.Button, {
            element: "a",
            format: "soft",
            href: _v0,
            onClick: _v1,
            children: (0, _v10.translate)({
              singular: "Add To Chrome",
              dictionary: {
                es: {
                  singular: "Agregar a Chrome"
                },
                "de-DE": {
                  singular: "Zu Chrome hinzufügen"
                },
                "fr-FR": {
                  singular: "Ajouter à Chrome"
                },
                "ja-JP": {
                  singular: "Chromeに追加"
                },
                "ko-KR": {
                  singular: "Chrome에 추가"
                },
                "pt-BR": {
                  singular: "Adicionar ao Chrome"
                },
                "zh-CN": {
                  singular: "添加到 Chrome"
                }
              }
            })
          })
        }), (0, _v1.jsx)(_v48, {
          children: (0, _v1.jsx)("img", {
            alt: (0, _v10.translate)({
              singular: "Example of the Vimeo Record Chrome extension displayed on a sample third party website.",
              dictionary: {
                es: {
                  singular: "Extensión de Vimeo Record para Chrome que se muestra en un sitio web de terceros como ejemplo."
                },
                "de-DE": {
                  singular: "Beispiel für die Chrome-Erweiterung „Vimeo Record“, die auf einer Beispiel-Website eines Drittanbieters angezeigt wird."
                },
                "fr-FR": {
                  singular: "Extension Vimeo Record pour Chrome affichée à titre d'exemple sur un site Web tiers."
                },
                "ja-JP": {
                  singular: "サンプルの第三者ウェブサイトに表示されるVimeo Record Chrome拡張機能の例。"
                },
                "ko-KR": {
                  singular: "샘플 타사 웹사이트에 보이는 Vimeo Record Chrome 확장 프로그램 예시"
                },
                "pt-BR": {
                  singular: "Exemplo da extensão do Vimeo Record Chrome exibida como um exemplo em site de terceiros."
                },
                "zh-CN": {
                  singular: "示例第三方网站上显示的 Vimeo Record Chrome 扩展程序示例。"
                }
              }
            }),
            src: "https://i.vimeocdn.com/custom_asset/2336"
          })
        })]
      }) : null;
    };
  var _v51 = _v0.i(0),
    _v52 = _v0.i(0);
  let _v53 = _v5.default.div.withConfig({
      displayName: "staging__Layout",
      componentId: "sc-30d2e11d-0"
    })`
  margin: 0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${_v0 => _v0.bgColor};
  a {
    text-decoration: none;
  }
`,
    _v54 = _v5.default.div.withConfig({
      displayName: "staging__InterstitialContainer",
      componentId: "sc-30d2e11d-1"
    })`
  width: 100%;
  text-align: center;
  background-color: ${_v0 => _v0.upgrade ? "none" : (0, _v11.blue)(50)};
`,
    _v55 = _v5.default.div.withConfig({
      displayName: "staging__InterstitialContent",
      componentId: "sc-30d2e11d-2"
    })`
  max-width: ${(0, _v3.rem)(720)};
  margin: auto;
  padding: ${(0, _v3.rem)(60)} ${(0, _v3.rem)(20)};
`,
    _v56 = (0, _v5.default)(_v14.Paragraph).withConfig({
      displayName: "staging__InterstitialRedirectMessage",
      componentId: "sc-30d2e11d-3"
    })`
  display: block;
  margin-top: ${(0, _v3.rem)(8)};
`,
    _v57 = (0, _v5.default)(_v13.VimeoLogo).withConfig({
      displayName: "staging__Logo",
      componentId: "sc-30d2e11d-4"
    })`
  width: ${(0, _v3.rem)(80)};
  margin-bottom: ${(0, _v3.rem)(40)};
`,
    _v58 = (0, _v5.default)(_v15.Header).withConfig({
      displayName: "staging__InterstitialHeader",
      componentId: "sc-30d2e11d-5"
    })`
  margin-bottom: ${(0, _v3.rem)(30)};
`,
    _v59 = (0, _v5.default)(_v14.Paragraph).withConfig({
      displayName: "staging__InterstitialSubheading",
      componentId: "sc-30d2e11d-6"
    })`
  display: block;
  margin-bottom: ${(0, _v3.rem)(20)};
`,
    _v60 = _v5.default.div.withConfig({
      displayName: "staging__UpsellContainer",
      componentId: "sc-30d2e11d-7"
    })`
  width: 100%;
  padding: 0 ${(0, _v3.rem)(20)} ${(0, _v3.rem)(60)} ${(0, _v3.rem)(20)};
`,
    _v61 = (0, _v5.default)(_v14.Paragraph).withConfig({
      displayName: "staging__UpsellPrompt",
      componentId: "sc-30d2e11d-8"
    })`
  display: block;
  max-width: ${(0, _v3.rem)(660)};
  margin: auto auto ${(0, _v3.rem)(60)} auto;
  text-align: center;
  line-height: ${(0, _v3.rem)(26)};
  padding-top: ${(0, _v3.rem)(60)};
`,
    _v62 = _v5.default.span.withConfig({
      displayName: "staging__UpsellEmphasis",
      componentId: "sc-30d2e11d-9"
    })`
  font-weight: 700;
`,
    _v63 = _v5.default.div.withConfig({
      displayName: "staging__UpsellPlans",
      componentId: "sc-30d2e11d-10"
    })`
  display: flex;
  flex-wrap: wrap;
  max-width: ${(0, _v3.rem)(0)};
  margin: 0 auto;
`,
    _v64 = _v5.default.div.withConfig({
      displayName: "staging__UpsellPlan",
      componentId: "sc-30d2e11d-11"
    })`
  flex: 0 1 calc(25% - ${(0, _v3.rem)(16)});
  box-shadow:
    rgba(0, 0, 0, 0.15) 0px 0px 0.0625rem 0px,
    rgba(0, 0, 0, 0.15) 0px 0.25rem 0.5rem 0px;
  margin: 0 ${(0, _v3.rem)(8)};
  padding: ${(0, _v3.rem)(20)};
  position: relative;
  min-height: ${(0, _v3.rem)(400)};

  ${_v0 => {
      if (!_v0.showContent) return _v5.css`
        background: ${(0, _v11.slate)(100)};
      `;
    }}

  @media screen and (max-width: ${(0, _v3.rem)(850)}) {
    flex: 0 1 calc(50% - ${(0, _v3.rem)(16)});
    margin: ${(0, _v3.rem)(8)};
  }

  @media screen and (max-width: ${(0, _v3.rem)(500)}) {
    flex: 0 1 100%;
    margin: ${(0, _v3.rem)(8)} 0;
  }
`,
    _v65 = _v5.default.div.withConfig({
      displayName: "staging__PlanContent",
      componentId: "sc-30d2e11d-12"
    })`
  width: 100%;
  text-align: left;
`,
    _v66 = (0, _v5.default)(_v15.Header).withConfig({
      displayName: "staging__PlanHeader",
      componentId: "sc-30d2e11d-13"
    })``,
    _v67 = (0, _v5.default)(_v15.Header).attrs({
      size: "4"
    }).withConfig({
      displayName: "staging__PlanPrice",
      componentId: "sc-30d2e11d-14"
    })``,
    _v68 = (0, _v5.default)(_v14.Paragraph).attrs({
      size: "2"
    }).withConfig({
      displayName: "staging__PlanSubscriptionDuration",
      componentId: "sc-30d2e11d-15"
    })`
  color: ${(0, _v11.slate)(400)};
  display: block;
`,
    _v69 = _v5.default.div.withConfig({
      displayName: "staging__PlanPurchaseWrapper",
      componentId: "sc-30d2e11d-16"
    })`
  margin: ${(0, _v3.rem)(20)} 0;
`,
    _v70 = (0, _v5.default)(_v14.Paragraph).attrs({
      size: "2"
    }).withConfig({
      displayName: "staging__PlanHighlightFeature",
      componentId: "sc-30d2e11d-17"
    })`
  font-weight: 500;
  display: block;
  margin-bottom: ${(0, _v3.rem)(3)};
`,
    _v71 = (0, _v5.default)(_v14.Paragraph).attrs({
      size: "2"
    }).withConfig({
      displayName: "staging__PlanDescriptionHeader",
      componentId: "sc-30d2e11d-18"
    })`
  color: ${(0, _v11.slate)(400)};
  display: block;
  margin: ${(0, _v3.rem)(12)} 0 ${(0, _v3.rem)(4)};
`,
    _v72 = _v5.default.ul.withConfig({
      displayName: "staging__PlanDescription",
      componentId: "sc-30d2e11d-19"
    })`
  list-style-type: disc;
  margin-left: ${(0, _v3.rem)(20)};
`,
    _v73 = _v5.default.span.withConfig({
      displayName: "staging__ButtonAlignedContent",
      componentId: "sc-30d2e11d-20"
    })`
  display: flex;
  align-items: center;
`,
    _v74 = ["plus", "pro", "business", "livePremium"];
  function _v75({
    userInfo: _v0
  }) {
    let _v1 = (0, _v51.usePremiumWebinarCappingExperiment)(),
      _v2 = (0, _v16.useGetSubscriptionPlansData)(_v74),
      _v3 = {
        plus: {
          size: (0, _v10.translate)({
            singular: "250GB every year",
            dictionary: {
              es: {
                singular: "250 GB al año"
              },
              "de-DE": {
                singular: "250 GB pro Jahr"
              },
              "fr-FR": {
                singular: "250 Go chaque année"
              },
              "ja-JP": {
                singular: "年間 250GB"
              },
              "ko-KR": {
                singular: "매년 250GB"
              },
              "pt-BR": {
                singular: "250 GB por ano"
              },
              "zh-CN": {
                singular: "每年 250GB"
              }
            }
          }),
          users: (0, _v10.translate)({
            singular: "Single user",
            dictionary: {
              es: {
                singular: "Individual"
              },
              "de-DE": {
                singular: "Einzelner Benutzer"
              },
              "fr-FR": {
                singular: "Utilisateur unique"
              },
              "ja-JP": {
                singular: "シングルユーザー"
              },
              "ko-KR": {
                singular: "단일 사용자"
              },
              "pt-BR": {
                singular: "Individual"
              },
              "zh-CN": {
                singular: "单用户"
              }
            }
          }),
          description: [(0, _v10.translate)({
            singular: "Player customization",
            dictionary: {
              es: {
                singular: "Reproductor personalizable"
              },
              "de-DE": {
                singular: "Individuelle Anpassung des Players"
              },
              "fr-FR": {
                singular: "Personnalisation du player"
              },
              "ja-JP": {
                singular: "プレーヤー カスタマイズ"
              },
              "ko-KR": {
                singular: "커스텀 플레이어"
              },
              "pt-BR": {
                singular: "Customização do player"
              },
              "zh-CN": {
                singular: "播放器定制"
              }
            }
          }), (0, _v10.translate)({
            singular: "Privacy controls",
            dictionary: {
              es: {
                singular: "Controles de privacidad"
              },
              "de-DE": {
                singular: "Datenschutzsteuerungen"
              },
              "fr-FR": {
                singular: "Contrôle de la confidentialité"
              },
              "ja-JP": {
                singular: "プライバシーコントロール"
              },
              "ko-KR": {
                singular: "프라이버시 제어"
              },
              "pt-BR": {
                singular: "Controles de Privacidade"
              },
              "zh-CN": {
                singular: "隐私控制"
              }
            }
          }), (0, _v10.translate)({
            singular: "No ads on your videos",
            dictionary: {
              es: {
                singular: "Sin anuncios en tus videos"
              },
              "de-DE": {
                singular: "Deine Videos ohne Werbung"
              },
              "fr-FR": {
                singular: "Aucune publicité sur vos vidéos"
              },
              "ja-JP": {
                singular: "動画に広告表示なし"
              },
              "ko-KR": {
                singular: "광고 없는 동영상"
              },
              "pt-BR": {
                singular: "Sem anúncios em seus vídeos"
              },
              "zh-CN": {
                singular: "您的视频上没有广告"
              }
            }
          })]
        },
        pro: {
          size: (0, _v10.translate)({
            singular: "1TB every year",
            dictionary: {
              es: {
                singular: "1 TB al año"
              },
              "de-DE": {
                singular: "1 TB pro Jahr"
              },
              "fr-FR": {
                singular: "1 To chaque année"
              },
              "ja-JP": {
                singular: "年間 1TB"
              },
              "ko-KR": {
                singular: "매년 1TB"
              },
              "pt-BR": {
                singular: "1 TB por ano"
              },
              "zh-CN": {
                singular: "每年 1TB"
              }
            }
          }),
          users: (0, _v10.translate)({
            singular: "3 team members",
            dictionary: {
              es: {
                singular: "3 colaboradores"
              },
              "de-DE": {
                singular: "3 Teammitglieder"
              },
              "fr-FR": {
                singular: "3 membres d'équipe"
              },
              "ja-JP": {
                singular: "3人のチームメンバー"
              },
              "ko-KR": {
                singular: "팀원 3명 추가"
              },
              "pt-BR": {
                singular: "3 colaboradores"
              },
              "zh-CN": {
                singular: "3 名团队成员"
              }
            }
          }),
          descriptionTitle: (0, _v10.translate)({
            singular: "Everything in Plus +",
            dictionary: {
              es: {
                singular: "Todo lo de Plus, más"
              },
              "de-DE": {
                singular: "Alle Features von Plus und zusätzlich"
              },
              "fr-FR": {
                singular: "Tout Vimeo Plus inclus +"
              },
              "ja-JP": {
                singular: "Plusプランに含まれている全機能 + 以下の機能"
              },
              "ko-KR": {
                singular: "Plus의 모든 기능 +"
              },
              "pt-BR": {
                singular: "Tudo do Plus +"
              },
              "zh-CN": {
                singular: "Plus 中的所有权益 +"
              }
            }
          }),
          description: [(0, _v10.translate)({
            singular: "Video creation",
            dictionary: {
              es: {
                singular: "Creación de videos"
              },
              "de-DE": {
                singular: "Videoerstellung"
              },
              "fr-FR": {
                singular: "Création de vidéos"
              },
              "ja-JP": {
                singular: "動画作成"
              },
              "ko-KR": {
                singular: "동영상 제작"
              },
              "pt-BR": {
                singular: "Criação de vídeo"
              },
              "zh-CN": {
                singular: "视频制作"
              }
            }
          }), (0, _v10.translate)({
            singular: "Review and approval",
            dictionary: {
              es: {
                singular: "Revisión y aprobación"
              },
              "de-DE": {
                singular: "Review und Genehmigung"
              },
              "fr-FR": {
                singular: "Avis et validation"
              },
              "ja-JP": {
                singular: "レビューと承認機能"
              },
              "ko-KR": {
                singular: "리뷰 및 승인"
              },
              "pt-BR": {
                singular: "Revisão e aprovação"
              },
              "zh-CN": {
                singular: "审查和批准"
              }
            }
          }), (0, _v10.translate)({
            singular: "Private team projects",
            dictionary: {
              es: {
                singular: "Proyectos privados por equipos"
              },
              "de-DE": {
                singular: "Projekte von privaten Teams"
              },
              "fr-FR": {
                singular: "Projets d'équipe privés"
              },
              "ja-JP": {
                singular: "非公開のチームプロジェクト"
              },
              "ko-KR": {
                singular: "비공개 팀 프로젝트"
              },
              "pt-BR": {
                singular: "Projetos privados em equipe"
              },
              "zh-CN": {
                singular: "私密团队项目"
              }
            }
          }), (0, _v10.translate)({
            singular: "Customizable Showcase sites",
            dictionary: {
              es: {
                singular: "Sitios de presentaciones personalizables"
              },
              "de-DE": {
                singular: "Individuell anpassbare Seiten mit Präsentationen"
              },
              "fr-FR": {
                singular: "Sites de présentations personnalisables"
              },
              "ja-JP": {
                singular: "カスタム可能なショーケースサイト"
              },
              "ko-KR": {
                singular: "커스텀 가능한 쇼케이스 사이트"
              },
              "pt-BR": {
                singular: "Sites de Vitrines Customizáveis"
              },
              "zh-CN": {
                singular: "可定制的展示网站"
              }
            }
          })]
        },
        business: {
          size: (0, _v10.translate)({
            singular: "5TB total storage",
            dictionary: {
              es: {
                singular: "5 TB de almacenamiento en total"
              },
              "de-DE": {
                singular: "5TB Video-Gesamtspeicher"
              },
              "fr-FR": {
                singular: "5 To de stockage en tout"
              },
              "ja-JP": {
                singular: "合計 5TB のストレージ"
              },
              "ko-KR": {
                singular: "총 5TB 저장공간"
              },
              "pt-BR": {
                singular: "5 TB de armazenamento total"
              },
              "zh-CN": {
                singular: "5TB 总存储空间"
              }
            }
          }),
          users: (0, _v10.translate)({
            singular: "10 team members",
            dictionary: {
              es: {
                singular: "10 colaboradores"
              },
              "de-DE": {
                singular: "10 Teammitglieder"
              },
              "fr-FR": {
                singular: "10 membres d'équipes"
              },
              "ja-JP": {
                singular: "10人のチームメンバー"
              },
              "ko-KR": {
                singular: "팀원 10명 추가"
              },
              "pt-BR": {
                singular: "10 colaboradores"
              },
              "zh-CN": {
                singular: "10 名团队成员"
              }
            }
          }),
          descriptionTitle: (0, _v10.translate)({
            singular: "Everything in Pro +",
            dictionary: {
              es: {
                singular: "Todo lo de Pro, más"
              },
              "de-DE": {
                singular: "Alle Features von Pro und zusätzlich"
              },
              "fr-FR": {
                singular: "Tout Vimeo Pro inclus +"
              },
              "ja-JP": {
                singular: "Proプランに含まれている全機能 + 以下の機能"
              },
              "ko-KR": {
                singular: "Pro의 모든 기능 +"
              },
              "pt-BR": {
                singular: "Tudo do Pro +"
              },
              "zh-CN": {
                singular: "Pro 中的所有功能 + "
              }
            }
          }),
          description: [(0, _v10.translate)({
            singular: "Video creation with custom branding",
            dictionary: {
              es: {
                singular: "Creación de videos con imagen de marca personalizada"
              },
              "de-DE": {
                singular: "Videoerstellung mit individuellem Branding"
              },
              "fr-FR": {
                singular: "Création de vidéos avec votre marque personnalisée"
              },
              "ja-JP": {
                singular: "カスタムブランドで動画作成"
              },
              "ko-KR": {
                singular: "커스텀 브랜딩으로 동영상 제작"
              },
              "pt-BR": {
                singular: "Criação de vídeo com personalização da marca"
              },
              "zh-CN": {
                singular: "使用自定义品牌设计创建视频"
              }
            }
          }), (0, _v10.translate)({
            singular: "Player calls-to-action",
            dictionary: {
              es: {
                singular: "Llamadas a la acción en el reproductor"
              },
              "de-DE": {
                singular: "Handelsaufrufe im Player"
              },
              "fr-FR": {
                singular: "Appels à l'action du player"
              },
              "ja-JP": {
                singular: "プレーヤーのCTA機能"
              },
              "ko-KR": {
                singular: "플레이어 콜 투 액션"
              },
              "pt-BR": {
                singular: "Chamadas para a ação no player"
              },
              "zh-CN": {
                singular: "播放器行动号召"
              }
            }
          }), (0, _v10.translate)({
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
          }), (0, _v10.translate)({
            singular: "Engagement graphs",
            dictionary: {
              es: {
                singular: "Gráficas de interacción"
              },
              "de-DE": {
                singular: "Bindungsdiagramme"
              },
              "fr-FR": {
                singular: "Graphique d'implication"
              },
              "ja-JP": {
                singular: "エンゲージメントグラフ"
              },
              "ko-KR": {
                singular: "참여도 그래프"
              },
              "pt-BR": {
                singular: "Gráficos de engajamento"
              },
              "zh-CN": {
                singular: "参与图"
              }
            }
          }), (0, _v10.translate)("Google Analytics")]
        },
        livePremium: {
          size: (0, _v10.translate)({
            singular: "7TB total storage",
            dictionary: {
              es: {
                singular: "7 TB de almacenamiento en total"
              },
              "de-DE": {
                singular: "7TB Gesamtspeicher"
              },
              "fr-FR": {
                singular: "7 To d'espace de stockage vidéo total"
              },
              "ja-JP": {
                singular: "合計 7TB のストレージ"
              },
              "ko-KR": {
                singular: "총 7TB 저장공간"
              },
              "pt-BR": {
                singular: "Armazenamento total de 7 TB"
              },
              "zh-CN": {
                singular: "7TB 总存储空间"
              }
            }
          }),
          users: (0, _v10.translate)({
            singular: "Unlimited live events & webinars",
            dictionary: {
              es: {
                singular: "Eventos en vivo y seminarios web ilimitados"
              },
              "de-DE": {
                singular: "Unbegrenzte Anzahl von Live-Events und Webinaren"
              },
              "fr-FR": {
                singular: "Évènements live et webinaires illimités"
              },
              "ja-JP": {
                singular: "無制限のライブイベントとウェビナー"
              },
              "ko-KR": {
                singular: "라이브 이벤트 및 웨비나 무제한"
              },
              "pt-BR": {
                singular: "Número ilimitado de eventos ao vivo e webinars"
              },
              "zh-CN": {
                singular: "无限直播活动和网络研讨会"
              }
            }
          }),
          descriptionTitle: (0, _v10.translate)({
            singular: "Everything in Business +",
            dictionary: {
              es: {
                singular: "Todo lo de Business, más"
              },
              "de-DE": {
                singular: "Das hat Business anzubieten"
              },
              "fr-FR": {
                singular: "Tout Vimeo Business inclus +"
              },
              "ja-JP": {
                singular: "Businessプランに含まれている全機能 + 以下の機能"
              },
              "ko-KR": {
                singular: "Business의 모든 기능 +"
              },
              "pt-BR": {
                singular: "Tudo do Business +"
              },
              "zh-CN": {
                singular: "Business 中的所有权益 +"
              }
            }
          }),
          description: [(0, _v10.translate)({
            singular: "Unlimited live events & webinars",
            dictionary: {
              es: {
                singular: "Eventos en vivo y seminarios web ilimitados"
              },
              "de-DE": {
                singular: "Unbegrenzte Anzahl von Live-Events und Webinaren"
              },
              "fr-FR": {
                singular: "Évènements live et webinaires illimités"
              },
              "ja-JP": {
                singular: "無制限のライブイベントとウェビナー"
              },
              "ko-KR": {
                singular: "라이브 이벤트 및 웨비나 무제한"
              },
              "pt-BR": {
                singular: "Número ilimitado de eventos ao vivo e webinars"
              },
              "zh-CN": {
                singular: "无限直播活动和网络研讨会"
              }
            }
          }), (0, _v10.translate)({
            singular: "Webinar registration (up to {COUNT} registrants per event)",
            replacements: {
              COUNT: _v1
            },
            dictionary: {
              es: {
                singular: "Inscripción en seminarios web (hasta {COUNT} inscritos por evento)"
              },
              "de-DE": {
                singular: "Webinar-Registrierung (bis zu {COUNT} Teilnehmer pro Event)"
              },
              "fr-FR": {
                singular: "Inscription au webinaire (jusqu'à {COUNT} inscrits par événement)"
              },
              "ja-JP": {
                singular: "ウェビナー登録（イベントごとの登録者枠は最大 {COUNT}人）"
              },
              "ko-KR": {
                singular: "웨비나 등록 (이벤트당 등록자 최대 {COUNT}명)"
              },
              "pt-BR": {
                singular: "Inscrições no webinar (até {COUNT} inscritos por evento)"
              },
              "zh-CN": {
                singular: "网络研讨会注册（每个活动最多 {COUNT} 名注册者）"
              }
            }
          }), (0, _v10.translate)({
            singular: "Browser-based production tools",
            dictionary: {
              es: {
                singular: "Herramientas de producción basadas en el navegador"
              },
              "de-DE": {
                singular: "Browserbasierte Produktionstools"
              },
              "fr-FR": {
                singular: "Outils de production sur navigateur"
              },
              "ja-JP": {
                singular: "ブラウザベースのプロダクションツール"
              },
              "ko-KR": {
                singular: "브라우저 기반 제작 도구"
              },
              "pt-BR": {
                singular: "Ferramentas de produção baseadas no navegador"
              },
              "zh-CN": {
                singular: "基于浏览器的制作工具"
              }
            }
          }), (0, _v10.translate)({
            singular: "Live stream to multiple destinations",
            dictionary: {
              es: {
                singular: "Transmisión a varios destinos"
              },
              "de-DE": {
                singular: "Live-Stream an mehrere Ziele schicken"
              },
              "fr-FR": {
                singular: "Streaming en live vers de multiples destinations"
              },
              "ja-JP": {
                singular: "複数のサイトにライブ配信"
              },
              "ko-KR": {
                singular: "여러 목적지로 라이브 스트리밍"
              },
              "pt-BR": {
                singular: "Transmissão ao vivo para vários destinos"
              },
              "zh-CN": {
                singular: "流式传输到多个目的地"
              }
            }
          }), (0, _v10.translate)({
            singular: "Live audience chat, Q&A, polls and graphics",
            dictionary: {
              es: {
                singular: "Chat para audiencia en vivo, sesiones de preguntas y respuestas, encuestas y gráficos"
              },
              "de-DE": {
                singular: "Live-Publikumschat, Frag-Antwort-Runden, Abstimmungen und Grafiken"
              },
              "fr-FR": {
                singular: "Discussion, questions-réponses, sondages et graphismes en direct"
              },
              "ja-JP": {
                singular: "ライブ視聴者チャット、質問セッション、アンケート投票、グラフィック"
              },
              "ko-KR": {
                singular: "실시간 시청자 채팅, Q/A, 투표 및 그래픽"
              },
              "pt-BR": {
                singular: "Chat ao vivo com o público, sessão de perguntas e respostas, enquetes e gráficos"
              },
              "zh-CN": {
                singular: "在线观众聊天、问答、投票和图形"
              }
            }
          }), (0, _v10.translate)({
            singular: "Basic viewer-level analytics for webinars",
            dictionary: {
              es: {
                singular: "Análisis básico a nivel del espectador de los seminarios web"
              },
              "de-DE": {
                singular: "Grundlegende Analysen auf Zuschauer-Ebene für Webinare"
              },
              "fr-FR": {
                singular: "Analyse de base des spectateurs pour les webinaires"
              },
              "ja-JP": {
                singular: "ウェビナーの基本的な視聴者レベルの分析"
              },
              "ko-KR": {
                singular: "웨비나용 기본 시청자 수준 애널리틱스"
              },
              "pt-BR": {
                singular: "Análises básicas para webinars no nível do espectador"
              },
              "zh-CN": {
                singular: "网络研讨会的基本观众级分析"
              }
            }
          })]
        }
      },
      _v4 = (0, _v4.useContext)(_v17.ViewerContext),
      _v5 = _v4?.user,
      _v6 = (0, _v2.useRouter)(),
      _v7 = _v6.query,
      _v8 = _v7?.auth_action,
      _v9 = _v0.app_id ?? "0",
      _v10 = _v0?.managed_user?.transfer_status ?? _v19.TransferStatus.TRANSFER_NOT_REQUESTED,
      _v11 = _v0.managed_user?.id?.toString() ?? "0",
      {
        link: _v12,
        redirect_uri: _v13 = "",
        managed_user: _v14 = "",
        token: _v15,
        code: _v16,
        state: _v17,
        via: _v18,
        third_party_integration: _v19
      } = _v7,
      _v20 = _v19 ?? (0, _v52.getTrackingName)(_v0?.app_id, _v18 ?? ""),
      _v21 = _v18 ?? _v20,
      _v22 = window?.location?.search ?? "";
    null === _v4 || _v4.user || _v6.push({
      pathname: _v8 ? _v18.RequiredOAuthPaths[_v8] : _v18.RequiredOAuthPaths.join,
      query: _v6.query
    });
    let _v23 = (0, _v52.getCopyForApp)(_v9),
      [_v24, _v25] = (0, _v4.useState)(!1),
      {
        transferStatus: _v26
      } = (0, _v19.useManagedUserTransferStatus)(_v9.toString(), _v11.toString(), _v14, _v24 ? void 0 : 0),
      _v27 = "0" === _v11 ? _v10 : _v26,
      _v28 = _v27 !== _v19.TransferStatus.TRANSFER_COMPLETED && _v27 !== _v19.TransferStatus.TRANSFER_FAILED && !_v24,
      _v29 = _v27 === _v19.TransferStatus.TRANSFER_COMPLETED || _v27 === _v19.TransferStatus.TRANSFER_FAILED || _v24,
      _v30 = "0" === _v11 || _v10 === _v19.TransferStatus.TRANSFER_COMPLETED || _v10 === _v19.TransferStatus.TRANSFER_FAILED,
      _v31 = _v12 && (0, _v9.deepDecodeURIComponent)(_v12),
      _v32 = !!_v31?.match("upgrade"),
      _v33 = !!_v31?.match(/^videos\/\d+/),
      _v34 = !!_v31?.match(/^\/apps\/\d+\/create\/templates/),
      _v35 = _v33 || _v34,
      {
        data: _v36,
        loading: _v37
      } = (0, _v8.useQuery)(`/apps/${_v0.app_id}?fields=callbacks`),
      _v38 = (0, _v4.useMemo)(() => {
        if (!_v37 && _v36 && _v13) {
          if (_v13.match(/\/apps\/[0-9]+\/create.*/)?.index === 0 || _v13.match(/\/apps\/[0-9]+\/preview.*/)?.index === 0) return !0;
          let _v0 = _v36.callbacks.some(_v0 => _v0 === _v13 || _v0 === _v13.split("?")[0]);
          if (!_v0) throw Error("Redirect URI is invalid.");
          return _v0;
        }
      }, [_v36, _v37, _v13]),
      _v39 = (0, _v4.useMemo)(() => {
        let _v0 = (0, _v9.deepDecodeURIComponent)(_v13),
          _v1 = (0, _v22.httpBuildQuery)({
            state: _v17,
            code: _v16,
            token: _v15
          }),
          _v2 = _v0 + (_v0.includes("?") ? "&" : "?") + _v1;
        if (!_v23?.hasReturnPromptLink()) return (0, _v1.jsxs)(_v14.Paragraph, {
          size: "1",
          children: [_v23?.getReturnPrompt(), " "]
        });
        function _v3() {
          _v6.BigPictureClient.sendEvent(new _v6.Event("vimeo_com.account_connection", 3, {
            component: "upgrade",
            type: "app_redirect_click",
            account_type: null,
            managed_user_id: _v11,
            user_id: _v5?.id ? `${_v5.id}` : null,
            product: _v21,
            device_id: _v4?.vuid ?? null,
            third_party_integration: _v20
          }));
        }
        return _v32 ? (0, _v1.jsx)("a", {
          href: _v2,
          children: (0, _v1.jsx)(_v12.Button, {
            variant: "minimalTransparent",
            style: {
              margin: "auto"
            },
            onClick: _v3,
            children: (0, _v1.jsxs)(_v73, {
              children: [(0, _v1.jsx)(_v44.ArrowLeft, {}), _v23?.getReturnPrompt()]
            })
          })
        }) : (0, _v1.jsx)("a", {
          href: _v2,
          children: (0, _v1.jsx)(_v12.Button, {
            format: "alternative",
            style: {
              margin: "auto"
            },
            onClick: _v3,
            children: "vimeo_create" === _v18 ? (0, _v10.translate)({
              singular: "Back to Vimeo Create",
              dictionary: {
                es: {
                  singular: "Volver a Vimeo Create"
                },
                "de-DE": {
                  singular: "Zurück zu Vimeo Create"
                },
                "fr-FR": {
                  singular: "Revenir à Vimeo Create"
                },
                "ja-JP": {
                  singular: "Vimeo Createに戻る"
                },
                "ko-KR": {
                  singular: "Vimeo Create로 돌아가기"
                },
                "pt-BR": {
                  singular: "Voltar para o Vimeo Create"
                },
                "zh-CN": {
                  singular: "返回 Vimeo Create"
                }
              }
            }) : _v23?.getReturnPrompt()
          })
        });
      }, [_v13, _v17, _v16, _v15, _v23, _v32, _v18, _v11, _v5?.id, _v21, _v4?.vuid, _v20]),
      [_v40, _v41] = (0, _v4.useState)(0);
    function _v42(_v0, _v1 = !1) {
      return () => {
        _v6.BigPictureClient.sendEvent(new _v6.Event("vimeo_com.account_connection", 3, {
          component: "upgrade",
          type: _v1 ? "upgrade_trial" : "upgrade_click",
          account_type: _v0,
          managed_user_id: _v11,
          user_id: _v5?.id ? `${_v5.id}` : null,
          product: _v21,
          device_id: _v4?.vuid ?? null,
          third_party_integration: _v20
        }));
      };
    }
    (0, _v4.useEffect)(() => {
      if (_v29) return;
      60 === _v40 && _v25(!0);
      let _v0 = setInterval(() => {
        _v41(_v0 => _v0 + 1);
      }, 0);
      return () => clearInterval(_v0);
    }, [_v40, _v29]), (0, _v4.useEffect)(() => {
      let _v0 = 0;
      return _v35 && _v31 && _v29 && !_v30 && (_v0 = window.setTimeout(() => {
        let _v0 = (0, _v22.tryTransformLink)(_v31, _v7);
        _v0 && window.location.replace(_v0);
      }, 0)), () => {
        _v0 && clearTimeout(_v0);
      };
    }, [_v30, _v31, _v35, _v7, _v29]), (0, _v4.useEffect)(() => {
      _v6.BigPictureClient.sendEvent(new _v6.Event("vimeo_com.account_connection", 3, {
        component: "upgrade",
        type: "landing",
        account_type: null,
        managed_user_id: _v11,
        user_id: _v5?.id ? `${_v5.id}` : null,
        product: _v21,
        device_id: _v4?.vuid ?? null,
        third_party_integration: _v20
      }));
    }, [_v11, _v20, _v18, _v4?.vuid, _v5?.id, _v21]);
    let _v43 = [_v52.PartnerAppIds.AsanaDevelopmentApp, _v52.PartnerAppIds.AsanaProductionApp, _v52.PartnerAppIds.AsanaTestApp].includes(_v9);
    return (0, _v1.jsx)(_v53, {
      bgColor: _v35 ? (0, _v11.blue)(50) : "none",
      children: (0, _v1.jsxs)("div", {
        children: [(0, _v1.jsx)(_v54, {
          upgrade: _v30,
          children: (0, _v1.jsxs)(_v55, {
            children: [(0, _v1.jsx)(_v57, {}), (0, _v1.jsxs)(_v58, {
              size: "2",
              children: [_v30 && _v23?.getUploadAlreadyConnected(), _v28 && !_v30 && _v23?.getUploadConnecting(), _v29 && !_v30 && (0, _v10.translate)({
                singular: "Your accounts are connected",
                dictionary: {
                  es: {
                    singular: "Tus cuentas están conectadas"
                  },
                  "de-DE": {
                    singular: "Deine Konten sind verknüpft"
                  },
                  "fr-FR": {
                    singular: "Vos comptes sont connectés"
                  },
                  "ja-JP": {
                    singular: "アカウントは接続されています"
                  },
                  "ko-KR": {
                    singular: "계정이 연결되었습니다"
                  },
                  "pt-BR": {
                    singular: "Suas contas estão conectadas"
                  },
                  "zh-CN": {
                    singular: "您的帐户已连接"
                  }
                }
              })]
            }), !_v30 && (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsxs)(_v59, {
                size: "2",
                children: [_v28 && (0, _v10.translate)({
                  singular: "Depending on how many videos you have, this may take a few minutes.",
                  dictionary: {
                    es: {
                      singular: "Según la cantidad de videos que tengas, es posible que este proceso demore unos minutos."
                    },
                    "de-DE": {
                      singular: "Je nachdem, wie viele Videos du hast, kann das ein paar Minuten dauern."
                    },
                    "fr-FR": {
                      singular: "En fonction de votre nombre de vidéos, cela peut prendre quelques minutes."
                    },
                    "ja-JP": {
                      singular: "動画の数によっては、数分かかる場合があります。"
                    },
                    "ko-KR": {
                      singular: "동영상의 개수에 따라 몇 분 정도 소요될 수 있습니다."
                    },
                    "pt-BR": {
                      singular: "Dependendo de quantos vídeos você tem, isso pode levar alguns minutos."
                    },
                    "zh-CN": {
                      singular: "这可能需要几分钟时间，具体取决于您的视频数量。"
                    }
                  }
                }), _v29 && _v23?.getUploadTransferComplete()]
              }), (_v28 || _v35) && (0, _v1.jsx)(_v7.Progress, {
                value: 100,
                colorScheme: "vimeoBlue",
                size: "md",
                hasStripe: !0,
                isAnimated: !0,
                maxW: (0, _v3.rem)(440),
                mx: "auto"
              }), !_v32 && !_v35 && _v29 && _v38 && _v39, _v35 && _v29 && !_v28 && (0, _v1.jsx)(_v56, {
                size: "3",
                format: "alternative",
                children: _v33 ? (0, _v10.translate)({
                  singular: "Redirecting to your video settings…",
                  dictionary: {
                    es: {
                      singular: "Redireccionando a tu configuración de video…"
                    },
                    "de-DE": {
                      singular: "Weiterleitung zu deinen Videoeinstellungen …"
                    },
                    "fr-FR": {
                      singular: "Redirection vers vos paramètres vidéo..."
                    },
                    "ja-JP": {
                      singular: "動画設定にリダイレクトしています..."
                    },
                    "ko-KR": {
                      singular: "동영상 설정으로 이동하는 중..."
                    },
                    "pt-BR": {
                      singular: "Redirecionando para suas configurações de vídeo..."
                    },
                    "zh-CN": {
                      singular: "正在重定向到您的视频设置..."
                    }
                  }
                }) : (0, _v10.translate)({
                  singular: "Redirecting to Vimeo Create…",
                  dictionary: {
                    es: {
                      singular: "Redireccionándote a Vimeo Create…"
                    },
                    "de-DE": {
                      singular: "Weiterleitung zu Vimeo Create …"
                    },
                    "fr-FR": {
                      singular: "Redirection vers Vimeo Create..."
                    },
                    "ja-JP": {
                      singular: "Vimeo Createにリダイレクトしています…"
                    },
                    "ko-KR": {
                      singular: "Vimeo Create로 이동 중..."
                    },
                    "pt-BR": {
                      singular: "Redirecionando para o Vimeo Create..."
                    },
                    "zh-CN": {
                      singular: "正在重定向至 Vimeo Create…"
                    }
                  }
                })
              })]
            })]
          })
        }), _v43 && (_v30 || _v29) && _v23?.extensionUpsellLink && (0, _v1.jsx)(_v50, {
          extensionLink: _v23?.extensionUpsellLink,
          onClick: function () {
            _v6.BigPictureClient.sendEvent(new _v6.Event("vimeo_com.account_connection", 3, {
              component: "upgrade",
              type: "extension_download_click",
              account_type: null,
              managed_user_id: _v11,
              user_id: _v5?.id ? `${_v5.id}` : null,
              product: _v21,
              device_id: _v4?.vuid ?? null,
              third_party_integration: _v20
            }));
          }
        }), !_v35 && !_v43 && (0, _v1.jsxs)(_v60, {
          children: [!_v30 && (0, _v1.jsx)(_v61, {
            size: "1",
            children: (0, _v10.translate)({
              singular: "It’s easy to get more storage, faster video conversion, advanced customization, and speedier support. {EMPHASIS}Try risk-free for 30 days.{EMPHASIS}",
              replacements: {
                EMPHASIS: _v0 => (0, _v1.jsx)(_v62, {
                  children: _v0
                })
              },
              dictionary: {
                es: {
                  singular: "Es muy fácil obtener más almacenamiento, personalización avanzada, y asistencia y conversión de video más rápidas. {EMPHASIS}Pruébalo sin riesgos durante 30 días.{EMPHASIS}"
                },
                "de-DE": {
                  singular: "Du kannst dir ganz einfach noch mehr Speicherplatz, noch schnellere Video-Konvertierung, erweiterte Personalisierungsmöglichkeiten und noch schnelleren Support sichern. {EMPHASIS}Ohne Risiko 30 Tage lang testen.{EMPHASIS}"
                },
                "fr-FR": {
                  singular: "Vous pouvez facilement obtenir plus d'espace de stockage, convertir vos vidéos plus rapidement, utiliser des outils de personnalisation avancés et bénéficier d'une assistance technique de pointe. {EMPHASIS}Essayez pendant 30 jours sans risque.{EMPHASIS}"
                },
                "ja-JP": {
                  singular: "大容量のストレージ、高速動画変換、高度なカスタマイズ機能や迅速なサポート機能をご利用ください。{EMPHASIS}30日間全額返金保証付きでお試しください。{EMPHASIS}"
                },
                "ko-KR": {
                  singular: "더 넉넉한 저장 공간과 더 빠른 동영상 변환, 고급 커스텀 옵션 및 더 신속한 지원 등의 혜택을 쉽게 누릴 수 있습니다. {EMPHASIS}위험 부담 없이 30일간 체험해보세요.{EMPHASIS}"
                },
                "pt-BR": {
                  singular: "É fácil conseguir mais espaço de armazenamento, conversão de vídeo mais rápida, personalização avançada e suporte mais rápido. {EMPHASIS}Experimente sem riscos por 30 dias.{EMPHASIS}"
                },
                "zh-CN": {
                  singular: "要获得更多存储空间、更快的视频转换速度、高级定制和更快的支持，此事轻而易举。{EMPHASIS}零风险试用 30 天。{EMPHASIS}"
                }
              }
            })
          }), (0, _v1.jsx)(_v63, {
            children: _v2 && _v2.map((_v0, _v1) => {
              let _v2 = _v30 || _v29,
                _v3 = _v3[_v0.tier];
              return (0, _v1.jsx)(_v64, {
                showContent: _v2,
                children: _v2 && (0, _v1.jsxs)(_v65, {
                  children: [(0, _v1.jsx)(_v66, {
                    size: "2",
                    children: _v0.name
                  }), (0, _v1.jsxs)(_v67, {
                    children: ["$", _v0.price?.annualMonthly, " ", (0, _v10.translate)({
                      singular: "/month",
                      dictionary: {
                        es: {
                          singular: "/mes"
                        },
                        "de-DE": {
                          singular: "/Monat"
                        },
                        "fr-FR": {
                          singular: "/mois"
                        },
                        "ja-JP": {
                          singular: "/月"
                        },
                        "ko-KR": {
                          singular: "/월"
                        },
                        "pt-BR": {
                          singular: "/mês"
                        },
                        "zh-CN": {
                          singular: "/月"
                        }
                      }
                    })]
                  }), (0, _v1.jsx)(_v68, {
                    children: (0, _v10.translate)({
                      singular: "billed annually",
                      dictionary: {
                        es: {
                          singular: "facturados anualmente"
                        },
                        "de-DE": {
                          singular: "Jährliche Abrechnung"
                        },
                        "fr-FR": {
                          singular: "facturé annuellement"
                        },
                        "ja-JP": {
                          singular: "年払い"
                        },
                        "ko-KR": {
                          singular: "연간 청구"
                        },
                        "pt-BR": {
                          singular: "fatura enviada anualmente"
                        },
                        "zh-CN": {
                          singular: "按年计费"
                        }
                      }
                    })
                  }), !!_v22 && (0, _v1.jsx)(_v69, {
                    children: _v0.metadata.interactions?.purchase?.uri?.freeTrial ? (0, _v1.jsxs)(_v1.Fragment, {
                      children: [(0, _v1.jsx)(_v12.Button, {
                        element: "a",
                        fluid: !0,
                        href: _v0.metadata.interactions.purchase.uri.freeTrial,
                        onClick: _v42(_v0.tier, !0),
                        children: (0, _v10.translate)({
                          singular: "Start free trial",
                          dictionary: {
                            es: {
                              singular: "Iniciar prueba gratuita"
                            },
                            "de-DE": {
                              singular: "Kostenloses Probeabo starten"
                            },
                            "fr-FR": {
                              singular: "Commencez l'essai gratuit"
                            },
                            "ja-JP": {
                              singular: "無料トライアルを始める"
                            },
                            "ko-KR": {
                              singular: "무료 체험 시작"
                            },
                            "pt-BR": {
                              singular: "Faça um teste grátis"
                            },
                            "zh-CN": {
                              singular: "开始免费试用"
                            }
                          }
                        })
                      }), (0, _v1.jsx)(_v12.Button, {
                        element: "a",
                        variant: "hyperminimal",
                        fluid: !0,
                        size: "xs",
                        href: _v0.metadata.interactions.purchase.uri.annual ?? void 0,
                        onClick: _v42(_v0.tier),
                        children: (0, _v10.translate)({
                          singular: "or purchase now",
                          dictionary: {
                            es: {
                              singular: "o cómprelo ahora"
                            },
                            "de-DE": {
                              singular: "oder jetzt kaufen"
                            },
                            "fr-FR": {
                              singular: "ou bien achetez maintenant"
                            },
                            "ja-JP": {
                              singular: "または今すぐ購入"
                            },
                            "ko-KR": {
                              singular: "또는 지금 구매하세요"
                            },
                            "pt-BR": {
                              singular: "ou compre agora"
                            },
                            "zh-CN": {
                              singular: "或立即购买"
                            }
                          }
                        })
                      })]
                    }) : (0, _v1.jsx)(_v12.Button, {
                      format: "alternative",
                      fluid: !0,
                      element: "a",
                      href: _v0.metadata.interactions?.purchase?.uri?.annual ?? void 0,
                      onClick: _v42(_v0.tier),
                      children: (0, _v10.translate)({
                        singular: "Purchase now",
                        dictionary: {
                          es: {
                            singular: "Cómprelo ya"
                          },
                          "de-DE": {
                            singular: "Jetzt kaufen"
                          },
                          "fr-FR": {
                            singular: "Acheter maintenant"
                          },
                          "ja-JP": {
                            singular: "今すぐ購入"
                          },
                          "ko-KR": {
                            singular: "지금 구매하기"
                          },
                          "pt-BR": {
                            singular: "Compre agora mesmo"
                          },
                          "zh-CN": {
                            singular: "立即购买"
                          }
                        }
                      })
                    })
                  }), _v3 && (0, _v1.jsxs)(_v1.Fragment, {
                    children: [(0, _v1.jsx)(_v70, {
                      children: _v3.size
                    }), (0, _v1.jsx)(_v70, {
                      children: _v3.users
                    }), (0, _v1.jsx)(_v71, {
                      children: _v3.descriptionTitle
                    }), (0, _v1.jsx)(_v72, {
                      children: _v3.description.map((_v0, _v1) => (0, _v1.jsx)("li", {
                        children: (0, _v1.jsx)(_v14.Paragraph, {
                          size: "2",
                          children: _v0
                        })
                      }, _v1))
                    })]
                  })]
                })
              }, `plan-${_v0.tier}-${_v1}`);
            })
          })]
        }), _v32 && (_v29 || _v30) && _v39]
      })
    });
  }
  let _v76 = _v5.default.div.withConfig({
      displayName: "wixProduction__Layout",
      componentId: "sc-339eb819-0"
    })`
  margin: 0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${_v0 => _v0.bgColor};
  a {
    text-decoration: none;
  }
`,
    _v77 = _v5.default.div.withConfig({
      displayName: "wixProduction__InterstitialContainer",
      componentId: "sc-339eb819-1"
    })`
  width: 100%;
  text-align: center;
  background-color: ${_v0 => _v0.upgrade ? "none" : (0, _v11.blue)(50)};
`,
    _v78 = _v5.default.div.withConfig({
      displayName: "wixProduction__InterstitialContent",
      componentId: "sc-339eb819-2"
    })`
  max-width: ${(0, _v3.rem)(720)};
  margin: auto;
  padding: ${(0, _v3.rem)(60)} ${(0, _v3.rem)(20)};
`,
    _v79 = (0, _v5.default)(_v13.VimeoLogo).withConfig({
      displayName: "wixProduction__Logo",
      componentId: "sc-339eb819-3"
    })`
  width: ${(0, _v3.rem)(80)};
  margin-bottom: ${(0, _v3.rem)(40)};
`,
    _v80 = (0, _v5.default)(_v15.Header).withConfig({
      displayName: "wixProduction__InterstitialHeader",
      componentId: "sc-339eb819-4"
    })`
  margin-bottom: ${(0, _v3.rem)(30)};
`,
    _v81 = (0, _v5.default)(_v14.Paragraph).withConfig({
      displayName: "wixProduction__InterstitialSubheading",
      componentId: "sc-339eb819-5"
    })`
  display: block;
  margin-bottom: ${(0, _v3.rem)(20)};
`;
  function _v82({
    userInfo: _v0
  }) {
    let _v1 = (0, _v4.useContext)(_v17.ViewerContext),
      _v2 = _v1?.user,
      _v3 = (0, _v2.useRouter)(),
      _v4 = _v3.query,
      _v5 = _v4?.auth_action,
      _v6 = _v0.app_id ?? "0",
      _v7 = _v0?.managed_user?.transfer_status ?? _v19.TransferStatus.TRANSFER_NOT_REQUESTED,
      _v8 = _v0.managed_user?.id?.toString() ?? "0",
      {
        link: _v9,
        redirect_uri: _v10 = "",
        managed_user: _v11 = "",
        via: _v12,
        third_party_integration: _v13,
        state: _v14,
        code: _v15,
        token: _v16
      } = _v4,
      _v17 = _v13 ?? (0, _v52.getTrackingName)(_v0?.app_id, _v12 ?? ""),
      _v18 = _v12 ?? _v17;
    null === _v1 || _v1.user || _v3.push({
      pathname: _v5 ? _v18.RequiredOAuthPaths[_v5] : _v18.RequiredOAuthPaths.join,
      query: _v3.query
    });
    let _v19 = (0, _v52.getCopyForApp)(_v6),
      [_v20, _v21] = (0, _v4.useState)(!1),
      {
        transferStatus: _v22
      } = (0, _v19.useManagedUserTransferStatus)(_v6.toString(), _v8.toString(), _v11, _v20 ? void 0 : 0),
      _v23 = "0" === _v8 ? _v7 : _v19.TransferStatus.TRANSFER_COMPLETED,
      _v24 = _v23 !== _v19.TransferStatus.TRANSFER_COMPLETED && _v23 !== _v19.TransferStatus.TRANSFER_FAILED,
      _v25 = _v23 === _v19.TransferStatus.TRANSFER_COMPLETED || _v23 === _v19.TransferStatus.TRANSFER_FAILED,
      _v26 = "0" === _v8 || _v7 === _v19.TransferStatus.TRANSFER_COMPLETED || _v7 === _v19.TransferStatus.TRANSFER_FAILED,
      _v27 = _v9 && (0, _v9.deepDecodeURIComponent)(_v9),
      {
        checkingCanUpgrade: _v28,
        canUpgrade: _v29,
        isStoreUri: _v30
      } = _v21(_v9),
      [_v31, _v32] = (0, _v4.useState)(0);
    return (0, _v4.useEffect)(() => {
      if (!_v25 || _v27 || !_v24) return;
      2 === _v31 && _v21(!0);
      let _v0 = setInterval(() => {
        _v32(_v0 => _v0 + 1);
      }, 0);
      return () => clearInterval(_v0);
    }, [_v31, _v25, _v27, _v24]), (0, _v4.useEffect)(() => {
      let _v0 = 0;
      if (_v27 && _v25 && !_v26 && !_v24 && !_v28) {
        let _v0 = (0, _v22.tryTransformLink)(_v27, _v4);
        _v30 && !_v29 && (_v0 = _v10), _v0 || (_v0 = _v10), _v0 = window.setTimeout(() => {
          window.location.replace(_v0);
        }, 0);
      }
      return () => {
        _v0 && clearTimeout(_v0);
      };
    }, [_v26, _v27, _v4, _v25, _v24, _v10, _v28, _v30, _v29]), (0, _v4.useEffect)(() => {
      let _v0 = 0;
      if (!_v27 && _v25 && !_v26 && !_v24 && !_v28) {
        let _v0 = (0, _v9.deepDecodeURIComponent)(_v10),
          _v1 = (0, _v22.httpBuildQuery)({
            state: _v14,
            code: _v15,
            token: _v16
          }),
          _v2 = _v0 + (_v0.includes("?") ? "&" : "?") + _v1;
        _v0 = window.setTimeout(() => {
          window.location.href = _v2;
        }, 0);
      }
      return () => {
        _v0 && clearTimeout(_v0);
      };
    }, [_v26, _v27, _v25, _v24, _v10, _v14, _v15, _v16, _v28]), (0, _v4.useEffect)(() => {
      _v6.BigPictureClient.sendEvent(new _v6.Event("vimeo_com.account_connection", 3, {
        component: "upgrade",
        type: "landing",
        account_type: null,
        managed_user_id: _v8,
        user_id: _v2?.id ? `${_v2.id}` : null,
        product: _v18,
        device_id: _v1?.vuid ?? null,
        third_party_integration: _v17
      }));
    }, [_v8, _v17, _v12, _v1?.vuid, _v2?.id, _v18]), (0, _v1.jsx)(_v76, {
      bgColor: (0, _v11.blue)(50),
      children: (0, _v1.jsx)(_v77, {
        upgrade: _v26,
        children: (0, _v1.jsxs)(_v78, {
          children: [(0, _v1.jsx)(_v79, {}), (0, _v1.jsxs)(_v80, {
            size: "2",
            children: [_v24 && !_v26 && _v19?.getUploadConnecting(), _v25 && !_v26 && (0, _v10.translate)({
              singular: "Your accounts are connected",
              dictionary: {
                es: {
                  singular: "Tus cuentas están conectadas"
                },
                "de-DE": {
                  singular: "Deine Konten sind verknüpft"
                },
                "fr-FR": {
                  singular: "Vos comptes sont connectés"
                },
                "ja-JP": {
                  singular: "アカウントは接続されています"
                },
                "ko-KR": {
                  singular: "계정이 연결되었습니다"
                },
                "pt-BR": {
                  singular: "Suas contas estão conectadas"
                },
                "zh-CN": {
                  singular: "您的帐户已连接"
                }
              }
            })]
          }), !_v26 && (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsxs)(_v81, {
              size: "2",
              children: [_v24 && (0, _v10.translate)({
                singular: "Depending on how many videos you have, this may take a few minutes.",
                dictionary: {
                  es: {
                    singular: "Según la cantidad de videos que tengas, es posible que este proceso demore unos minutos."
                  },
                  "de-DE": {
                    singular: "Je nachdem, wie viele Videos du hast, kann das ein paar Minuten dauern."
                  },
                  "fr-FR": {
                    singular: "En fonction de votre nombre de vidéos, cela peut prendre quelques minutes."
                  },
                  "ja-JP": {
                    singular: "動画の数によっては、数分かかる場合があります。"
                  },
                  "ko-KR": {
                    singular: "동영상의 개수에 따라 몇 분 정도 소요될 수 있습니다."
                  },
                  "pt-BR": {
                    singular: "Dependendo de quantos vídeos você tem, isso pode levar alguns minutos."
                  },
                  "zh-CN": {
                    singular: "这可能需要几分钟时间，具体取决于您的视频数量。"
                  }
                }
              }), _v25 && _v19?.getUploadTransferComplete()]
            }), _v24 && (0, _v1.jsx)(_v7.Progress, {
              value: 100,
              colorScheme: "vimeoBlue",
              size: "md",
              hasStripe: !0,
              isAnimated: !0,
              maxW: (0, _v3.rem)(440),
              mx: "auto"
            })]
          })]
        })
      })
    });
  }
  var _v83 = _v0.i(0),
    _v84 = _v0.i(0);
  _v0.s(["default", 0, function () {
    let _v0 = (0, _v2.useRouter)(),
      {
        appId: _v1 = "0"
      } = _v0.query,
      {
        isLoading: _v2,
        userInfo: _v3
      } = (0, _v84.useManagedUserOauthInfo)((0, _v84.decodeOAuthQuery)(_v0.query)),
      {
        app_id: _v4
      } = _v3 || {},
      _v5 = Object.values(_v52.PartnerAppIds).includes(_v4);
    return parseInt(_v1, 10) === _v52.PartnerAppIds.GoDaddyProductionApp ? (0, _v1.jsx)(_v43, {}) : parseInt(_v1, 10) === _v52.PartnerAppIds.WixProductionApp ? (0, _v1.jsx)(_v82, {
      userInfo: _v3
    }) : !_v2 && _v5 ? (0, _v1.jsx)(_v75, {
      userInfo: _v3
    }) : (0, _v1.jsx)(_v83.Layout, {
      children: (0, _v1.jsx)(_v83.Loader, {})
    });
  }], 0);
}