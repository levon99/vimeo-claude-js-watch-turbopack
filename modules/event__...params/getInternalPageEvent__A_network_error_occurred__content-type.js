{
  "use strict";

  var _v1,
    _v2,
    _v3,
    _v4,
    _v5,
    _v6,
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0);
  async function _v14({
    baseUrl: _v0,
    select: _v1,
    where: {
      eventId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v12.measureLatency)("getInternalPageEvent", "GET", async () => {
      let _v0 = await fetch(`${_v0}/internal/page/event/${_v2}?${(0, _v13.searchQueryString)(_v3)}&fields=${_v1.map(_v13.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v13.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v13.deepCamelCase)(_v1);
    });
  }
  var _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
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
    _v36 = _v0.i(0);
  let _v37 = {
      clipIndexText: (_v0, _v1) => (0, _v36.translate)({
        singular: "{CURRENT_INDEX} of {TOTAL}",
        replacements: {
          CURRENT_INDEX: _v0 + 1,
          TOTAL: _v1
        },
        dictionary: {
          es: {
            singular: "{CURRENT_INDEX} de {TOTAL}"
          },
          "de-DE": {
            singular: "{CURRENT_INDEX} von {TOTAL}"
          },
          "fr-FR": {
            singular: "{CURRENT_INDEX} sur {TOTAL}"
          },
          "ja-JP": {
            singular: "{CURRENT_INDEX} / {TOTAL}"
          },
          "ko-KR": {
            singular: "{CURRENT_INDEX}/{TOTAL}"
          },
          "pt-BR": {
            singular: "{CURRENT_INDEX} de {TOTAL}"
          },
          "zh-CN": {
            singular: "{CURRENT_INDEX} / {TOTAL}"
          }
        }
      }),
      totalClipsCountText: _v0 => (0, _v36.translate)({
        singular: "{COUNT} video",
        plural: "{COUNT} videos",
        count: _v0,
        replacements: {
          COUNT: _v0
        },
        dictionary: {
          "de-DE": {
            singular: "{COUNT} Video",
            plural: "{COUNT} Videos"
          },
          "fr-FR": {
            singular: "{COUNT} vidéo",
            plural: "{COUNT} vidéos"
          },
          "ja-JP": {
            singular: "{COUNT} 件の動画",
            plural: "{COUNT}件の動画"
          },
          "ko-KR": {
            singular: "동영상 {COUNT}개",
            plural: "동영상 {COUNT}개"
          },
          "pt-BR": {
            singular: "{COUNT} vídeo",
            plural: "{COUNT} vídeos"
          },
          "zh-CN": {
            singular: "{COUNT} 个视频",
            plural: "{COUNT} 个视频"
          }
        }
      }),
      embedPlaylistOwnerLabelText: _v0 => (0, _v36.translate)({
        singular: "from {USERNAME}",
        replacements: {
          USERNAME: _v0
        },
        dictionary: {
          es: {
            singular: "de {USERNAME}"
          },
          "de-DE": {
            singular: "von {USERNAME}"
          },
          "fr-FR": {
            singular: "de {USERNAME}"
          },
          "ko-KR": {
            singular: "창작가: {USERNAME}"
          },
          "pt-BR": {
            singular: "de {USERNAME}"
          },
          "zh-CN": {
            singular: "来自 {USERNAME}"
          }
        }
      }),
      eventNotStartedCaption: (0, _v36.translate)({
        singular: "This live event has not started yet",
        dictionary: {
          es: {
            singular: "Este evento en vivo aún no empieza"
          },
          "de-DE": {
            singular: "Dieses Live-Event hat noch nicht begonnen."
          },
          "fr-FR": {
            singular: "Cet évènement live n'a pas encore commencé"
          },
          "ja-JP": {
            singular: "このライブイベントはまだ開始されていません"
          },
          "ko-KR": {
            singular: "이 라이브 이벤트는 아직 시작하지 않았습니다"
          },
          "pt-BR": {
            singular: "Este evento ao vivo ainda não começou"
          },
          "zh-CN": {
            singular: "此直播活动尚未开始"
          }
        }
      }),
      chatToggleAriaLabel: (0, _v36.translate)({
        singular: "Toggle chat",
        dictionary: {
          es: {
            singular: "Alternar chat"
          },
          "de-DE": {
            singular: "Chat umschalten"
          },
          "fr-FR": {
            singular: "Afficher/masquer le chat"
          },
          "ja-JP": {
            singular: "チャットを切り替え"
          },
          "ko-KR": {
            singular: "채팅 켜기/끄기"
          },
          "pt-BR": {
            singular: "Alternar chat"
          },
          "zh-CN": {
            singular: "切换聊天"
          }
        }
      }),
      closeInteractionPanelAriaLabel: (0, _v36.translate)({
        singular: "Close panel",
        dictionary: {
          es: {
            singular: "Cerrar el panel"
          },
          "de-DE": {
            singular: "Panel schließen"
          },
          "fr-FR": {
            singular: "Fermer le panneau"
          },
          "ja-JP": {
            singular: "パネルを閉じる"
          },
          "ko-KR": {
            singular: "패널 닫기"
          },
          "pt-BR": {
            singular: "Fechar painel"
          },
          "zh-CN": {
            singular: "关闭面板"
          }
        }
      }),
      chatPanelTitle: (0, _v36.translate)({
        singular: "Chat",
        dictionary: {
          "fr-FR": {
            singular: "Discussion"
          },
          "ja-JP": {
            singular: "チャット"
          },
          "ko-KR": {
            singular: "채팅"
          },
          "zh-CN": {
            singular: "聊天"
          }
        }
      }),
      scheduleCaption: {
        daily: (0, _v36.translate)({
          singular: "Daily",
          dictionary: {
            es: {
              singular: "Todos los días"
            },
            "de-DE": {
              singular: "Jeden Tag"
            },
            "fr-FR": {
              singular: "Quotidiennement"
            },
            "ja-JP": {
              singular: "デイリー"
            },
            "ko-KR": {
              singular: "일일"
            },
            "pt-BR": {
              singular: "Diariamente"
            },
            "zh-CN": {
              singular: "每日"
            }
          }
        }),
        weekdays: (0, _v36.translate)({
          singular: "Weekdays",
          dictionary: {
            es: {
              singular: "Entre semana"
            },
            "de-DE": {
              singular: "An Wochentagen"
            },
            "fr-FR": {
              singular: "Les jours de semaine"
            },
            "ja-JP": {
              singular: "平日"
            },
            "ko-KR": {
              singular: "주간"
            },
            "pt-BR": {
              singular: "Dias úteis"
            },
            "zh-CN": {
              singular: "工作日"
            }
          }
        }),
        weekends: (0, _v36.translate)({
          singular: "Weekends",
          dictionary: {
            es: {
              singular: "Los fines de semana"
            },
            "de-DE": {
              singular: "An Wochenenden"
            },
            "fr-FR": {
              singular: "Les week-ends"
            },
            "ja-JP": {
              singular: "週末"
            },
            "ko-KR": {
              singular: "주말"
            },
            "pt-BR": {
              singular: "Fins de Semana"
            },
            "zh-CN": {
              singular: "周末"
            }
          }
        })
      },
      enterPasswordCaption: (0, _v36.translate)({
        singular: "Enter password",
        dictionary: {
          es: {
            singular: "Ingresar la contraseña"
          },
          "de-DE": {
            singular: "Bitte Kennwort eingeben"
          },
          "fr-FR": {
            singular: "Saisir mot de passe"
          },
          "ja-JP": {
            singular: "パスワードを入力"
          },
          "ko-KR": {
            singular: "비밀번호 입력"
          },
          "pt-BR": {
            singular: "Digite a senha"
          },
          "zh-CN": {
            singular: "输入密码"
          }
        }
      }),
      incorrectPasswordCaption: (0, _v36.translate)({
        singular: "Sorry, that password was incorrect. Please try again.",
        dictionary: {
          es: {
            singular: "Lo sentimos, pero esta contraseña es incorrecta. Inténtalo de nuevo."
          },
          "de-DE": {
            singular: "Leider ist das Kennwort falsch. Bitte noch einmal versuchen."
          },
          "fr-FR": {
            singular: "Désolé, ce mot de passe est incorrect. Veuillez réessayer."
          },
          "ja-JP": {
            singular: "パスワードが間違っています。再度お試しください。"
          },
          "ko-KR": {
            singular: "죄송합니다, 잘못된 비밀번호입니다. 올바른 비밀번호로 다시 시도해주세요."
          },
          "pt-BR": {
            singular: "Desculpe, mas a senha estava incorreta. Tente de novo."
          },
          "zh-CN": {
            singular: "抱歉，密码不正确。请重试。"
          }
        }
      }),
      joinVimeoCaption: (0, _v36.translate)({
        singular: "Join Vimeo",
        dictionary: {
          es: {
            singular: "Unirse a Vimeo"
          },
          "de-DE": {
            singular: "Registriere dich bei Vimeo"
          },
          "fr-FR": {
            singular: "S'inscrire à Vimeo"
          },
          "ja-JP": {
            singular: "Vimeoに登録"
          },
          "ko-KR": {
            singular: "Vimeo 가입"
          },
          "pt-BR": {
            singular: "Cadastre-se no Vimeo"
          },
          "zh-CN": {
            singular: "加入 Vimeo"
          }
        }
      }),
      logInCaption: (0, _v36.translate)({
        singular: "Log in",
        dictionary: {
          es: {
            singular: "Iniciar sesión"
          },
          "de-DE": {
            singular: "Anmelden"
          },
          "fr-FR": {
            singular: "Se connecter"
          },
          "ja-JP": {
            singular: "ログイン"
          },
          "ko-KR": {
            singular: "로그인"
          },
          "pt-BR": {
            singular: "Entrar"
          },
          "zh-CN": {
            singular: "登录"
          }
        }
      }),
      matureContentOverlayCaption: (0, _v36.translate)({
        singular: "This video contains mature content. Log in to watch.",
        dictionary: {
          es: {
            singular: "Este video incluye contenido para adultos.  Inicia sesión para verlo."
          },
          "de-DE": {
            singular: "Dieses Video enthält nicht jugendfreie Inhalte.  Melde dich an, um das Video anschauen zu können."
          },
          "fr-FR": {
            singular: "Cette vidéo comporte du contenu réservé aux adultes.  Connectez-vous pour la regarder."
          },
          "ja-JP": {
            singular: "この動画には成人向けコンテンツが含まれます。ログインして視聴してください。"
          },
          "ko-KR": {
            singular: "이 동영상은 성인 콘텐츠를 포함하고 있습니다.  시청하려면 로그인하세요."
          },
          "pt-BR": {
            singular: "Este vídeo contém conteúdo adulto.  Faça o login para assistir."
          },
          "zh-CN": {
            singular: "此视频包含成人内容。请登录后再观看。"
          }
        }
      }),
      nextClipLabelText: (0, _v36.translate)({
        singular: "Click to watch",
        dictionary: {
          es: {
            singular: "Haz clic para ver"
          },
          "de-DE": {
            singular: "Zum Ansehen klicken"
          },
          "fr-FR": {
            singular: "Cliquez pour regarder"
          },
          "ja-JP": {
            singular: "クリックして視聴"
          },
          "ko-KR": {
            singular: "시청하려면 클릭하세요"
          },
          "pt-BR": {
            singular: "Clique para assistir"
          },
          "zh-CN": {
            singular: "点击即可观看"
          }
        }
      }),
      notRatedContentOverlayCaption: (0, _v36.translate)({
        singular: "Video is not rated. Log in to watch.",
        dictionary: {
          es: {
            singular: "El video no está calificado. Inicie sesión para verlo."
          },
          "de-DE": {
            singular: "Dieses Video wurde nicht bewertet. Melde dich an, um das Video anschauen zu können."
          },
          "fr-FR": {
            singular: "La vidéo n'a aucune classification. Connectez-vous pour la regarder."
          },
          "ja-JP": {
            singular: "動画がレーティングされていません。視聴するにはログインしてください。"
          },
          "ko-KR": {
            singular: "동영상 등급이 지정되지 않았습니다. 시청하려면 로그인하세요."
          },
          "pt-BR": {
            singular: "O vídeo não tem classificação. Faça o login para assistir."
          },
          "zh-CN": {
            singular: "视频未分级。请登录后再观看。"
          }
        }
      }),
      passwordPromptMessage: (0, _v36.translate)({
        singular: "This event is private",
        dictionary: {
          es: {
            singular: "Este evento es privado"
          },
          "de-DE": {
            singular: "Dieses Event ist privat"
          },
          "fr-FR": {
            singular: "Cet évènement est privé"
          },
          "ja-JP": {
            singular: "このイベントはプライベート/非公開です"
          },
          "ko-KR": {
            singular: "이 이벤트는 비공개입니다."
          },
          "pt-BR": {
            singular: "Este evento é privado"
          },
          "zh-CN": {
            singular: "此活动为私密"
          }
        }
      }),
      registerToAttend: (0, _v36.translate)({
        singular: "Register to attend",
        dictionary: {
          es: {
            singular: "Registrarse para asistir"
          },
          "de-DE": {
            singular: "Für die Teilnahme registrieren"
          },
          "fr-FR": {
            singular: "S'inscrire pour assister à l'événement"
          },
          "ja-JP": {
            singular: "参加登録"
          },
          "ko-KR": {
            singular: "참석 등록"
          },
          "pt-BR": {
            singular: "Inscrever-se para participar"
          },
          "zh-CN": {
            singular: "报名参加"
          }
        }
      }),
      register: (0, _v36.translate)({
        singular: "Register",
        dictionary: {
          es: {
            singular: "Registrarse"
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
            singular: "등록"
          },
          "pt-BR": {
            singular: "Inscrever-se"
          },
          "zh-CN": {
            singular: "报名"
          }
        }
      }),
      closeRegistration: (0, _v36.translate)({
        singular: "Close registration form",
        dictionary: {
          es: {
            singular: "Cerrar el formulario de registro"
          },
          "de-DE": {
            singular: "Registrierungsformular schließen"
          },
          "fr-FR": {
            singular: "Fermer le formulaire d'inscription"
          },
          "ja-JP": {
            singular: "登録フォームを閉じる"
          },
          "ko-KR": {
            singular: "등록 양식 닫기"
          },
          "pt-BR": {
            singular: "Fechar formulário de inscrição"
          },
          "zh-CN": {
            singular: "关闭报名表单"
          }
        }
      }),
      previewBarText: (0, _v36.translate)({
        singular: "This is how other people will see your event page.",
        dictionary: {
          es: {
            singular: "Así es como los demás verán la página de tu evento."
          },
          "de-DE": {
            singular: "So wird deine Eventseite für andere Benutzer dargestellt."
          },
          "fr-FR": {
            singular: "Voici comment votre page d'événement s'affichera pour les autres utilisateurs."
          },
          "ja-JP": {
            singular: "これは他のユーザーに表示されるあなたのイベントページです。"
          },
          "ko-KR": {
            singular: "이벤트 페이지가 다른 사람에게 이렇게 나타납니다."
          },
          "pt-BR": {
            singular: "É assim que outras pessoas verão sua página do evento."
          },
          "zh-CN": {
            singular: "这就是您的活动页面呈现给他人的样子。"
          }
        }
      }),
      previewBarButtonText: (0, _v36.translate)({
        singular: "Manage event page",
        dictionary: {
          es: {
            singular: "Administrar página de evento"
          },
          "de-DE": {
            singular: "Eventseite verwalten"
          },
          "fr-FR": {
            singular: "Gérer une page d'événement"
          },
          "ja-JP": {
            singular: "イベントページを管理"
          },
          "ko-KR": {
            singular: "이벤트 페이지 관리"
          },
          "pt-BR": {
            singular: "Gerenciar página do evento"
          },
          "zh-CN": {
            singular: "管理活动页面"
          }
        }
      }),
      openChatButtonText: (0, _v36.translate)({
        singular: "Chat",
        dictionary: {
          "fr-FR": {
            singular: "Discussion"
          },
          "ja-JP": {
            singular: "チャット"
          },
          "ko-KR": {
            singular: "채팅"
          },
          "zh-CN": {
            singular: "聊天"
          }
        }
      }),
      submit: (0, _v36.translate)({
        singular: "Submit",
        dictionary: {
          es: {
            singular: "Enviar"
          },
          "de-DE": {
            singular: "Senden"
          },
          "fr-FR": {
            singular: "Envoyer"
          },
          "ja-JP": {
            singular: "送信"
          },
          "ko-KR": {
            singular: "제출"
          },
          "pt-BR": {
            singular: "Enviar"
          },
          "zh-CN": {
            singular: "提交"
          }
        }
      }),
      scheduledCaption: (0, _v36.translate)({
        singular: "Scheduled",
        dictionary: {
          es: {
            singular: "Programado"
          },
          "de-DE": {
            singular: "Auf den Zeitplan gesetzt"
          },
          "fr-FR": {
            singular: "Programmé"
          },
          "ja-JP": {
            singular: "ライブ予定"
          },
          "ko-KR": {
            singular: "예정"
          },
          "pt-BR": {
            singular: "Agendado"
          },
          "zh-CN": {
            singular: "已安排"
          }
        }
      }),
      ratingsBadgeLabel: {
        unrated: (0, _v36.translate)({
          singular: "Not Yet Rated",
          dictionary: {
            es: {
              singular: "Aún sin calificación"
            },
            "de-DE": {
              singular: "Noch nicht bewertet"
            },
            "fr-FR": {
              singular: "Pas de classification"
            },
            "ja-JP": {
              singular: "レーティングなし"
            },
            "ko-KR": {
              singular: "등급 미정"
            },
            "pt-BR": {
              singular: "Ainda Não Classificado"
            },
            "zh-CN": {
              singular: "尚未分级"
            }
          }
        }),
        mature: (0, _v36.translate)({
          singular: "Mature",
          dictionary: {
            es: {
              singular: "Para adultos"
            },
            "de-DE": {
              singular: "Nicht jugendfrei"
            },
            "fr-FR": {
              singular: "Adulte"
            },
            "ja-JP": {
              singular: "成人向け"
            },
            "ko-KR": {
              singular: "성인"
            },
            "pt-BR": {
              singular: "Adulto"
            },
            "zh-CN": {
              singular: "成人"
            }
          }
        })
      },
      thisVideoContainsAdvertisment: (0, _v36.translate)({
        singular: "This video contains an advertisement.",
        dictionary: {
          es: {
            singular: "Este video contiene un anuncio."
          },
          "de-DE": {
            singular: "Dieses Video enthält Werbung."
          },
          "fr-FR": {
            singular: "Cette vidéo contient une publicité."
          },
          "ja-JP": {
            singular: "この動画には広告が含まれています。"
          },
          "ko-KR": {
            singular: "이 동영상은 광고를 포함하고 있습니다."
          },
          "pt-BR": {
            singular: "Este vídeo contém um anúncio."
          },
          "zh-CN": {
            singular: "本视频包含广告。"
          }
        }
      }),
      trackViewCountText: _v0 => (0, _v36.translate)({
        singular: "{COUNT} view",
        plural: "{COUNT} views",
        count: _v0 || 0,
        replacements: {
          COUNT: (0, _v36.humanize)(_v0 || 0)
        },
        dictionary: {
          es: {
            singular: "{COUNT} vista",
            plural: "{COUNT} vistas"
          },
          "de-DE": {
            singular: "{COUNT} Ansicht",
            plural: "{COUNT} Ansichten"
          },
          "fr-FR": {
            singular: "{COUNT} vue",
            plural: "{COUNT} vues"
          },
          "ja-JP": {
            singular: "視聴回数: {COUNT}",
            plural: "視聴回数: {COUNT}"
          },
          "ko-KR": {
            singular: "{COUNT}회",
            plural: "{COUNT}회"
          },
          "pt-BR": {
            singular: "{COUNT} visualização",
            plural: "{COUNT} visualizações"
          },
          "zh-CN": {
            singular: "{COUNT} 观看",
            plural: "{COUNT} 次观看"
          }
        }
      }),
      upNextHeaderText: (0, _v36.translate)({
        singular: "Up Next",
        dictionary: {
          es: {
            singular: "A continuación"
          },
          "de-DE": {
            singular: "Als nächstes"
          },
          "fr-FR": {
            singular: "Suivant"
          },
          "ja-JP": {
            singular: "次へ"
          },
          "ko-KR": {
            singular: "다음 동영상"
          },
          "pt-BR": {
            singular: "Próximo"
          },
          "zh-CN": {
            singular: "下一个"
          }
        }
      }),
      watchLiveCaption: (0, _v36.translate)({
        singular: "Watch live",
        dictionary: {
          es: {
            singular: "Ver en vivo"
          },
          "de-DE": {
            singular: "Live zuschauen"
          },
          "fr-FR": {
            singular: "Regardez en live"
          },
          "ja-JP": {
            singular: "ライブを鑑賞"
          },
          "ko-KR": {
            singular: "라이브 시청"
          },
          "pt-BR": {
            singular: "Assistir ao vivo"
          },
          "zh-CN": {
            singular: "观看直播"
          }
        }
      }),
      getMoreStorage: (0, _v36.translate)({
        singular: "Get more storage, unlimited video creation, collaboration tools, and much more.",
        dictionary: {
          es: {
            singular: "Obtén más almacenamiento, creación ilimitada de videos, herramientas de colaboración y mucho más."
          },
          "de-DE": {
            singular: "Hol dir mehr Speicherplatz, unbegrenzte Videoerstellung, Tools für Zusammenarbeit und vieles mehr."
          },
          "fr-FR": {
            singular: "Bénéficiez d'un plus grand espace de stockage, de la création vidéo illimitée, d'outils de collaboration et bien plus."
          },
          "ja-JP": {
            singular: "より大きなストレージ、無制限の動画作成、コラボレーションツールなど豊富な機能を取得。"
          },
          "ko-KR": {
            singular: "더 많은 저장 공간, 동영상 무제한 제작, 협업 도구 등 다양한 기능을 이용하세요."
          },
          "pt-BR": {
            singular: "Tenha mais espaço de armazenamento, criação de vídeo ilimitada, ferramentas de colaboração e muito mais."
          },
          "zh-CN": {
            singular: "获得更多存储空间、无限制视频制作、协作工具等。"
          }
        }
      }),
      upgradeNow: (0, _v36.translate)({
        singular: "Upgrade now",
        dictionary: {
          es: {
            singular: "Actualizar ahora"
          },
          "de-DE": {
            singular: "Jetzt Upgrade vornehmen"
          },
          "fr-FR": {
            singular: "Mettre à niveau"
          },
          "ja-JP": {
            singular: "今すぐアップグレード"
          },
          "ko-KR": {
            singular: "지금 업그레이드"
          },
          "pt-BR": {
            singular: "Faça o upgrade agora"
          },
          "zh-CN": {
            singular: "立即升级"
          }
        }
      })
    },
    _v38 = _v16.default.form.withConfig({
      displayName: "PasswordPrompt__Form",
      componentId: "sc-5edd1ae5-0"
    })`
  width: 100%;
  text-align: center;
  flex: 1;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`,
    _v39 = _v16.default.div.withConfig({
      displayName: "PasswordPrompt__Row",
      componentId: "sc-5edd1ae5-1"
    })`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-end;
  padding: 0 ${(0, _v31.rem)(50)};
  width: 100%;
`,
    _v40 = (0, _v16.default)(_v32.Input).withConfig({
      displayName: "PasswordPrompt__PasswordInput",
      componentId: "sc-5edd1ae5-2"
    })`
  min-width: ${(0, _v31.rem)(320)};
`,
    _v41 = (0, _v16.default)(_v34.Button).withConfig({
      displayName: "PasswordPrompt__SubmitButton",
      componentId: "sc-5edd1ae5-3"
    })`
  width: ${(0, _v31.rem)(320)};
  margin: ${(0, _v31.rem)(15)} 0 0;
  @media screen and (min-width: ${(0, _v31.rem)(768)}) {
    margin-left: ${(0, _v31.rem)(15)};
    width: auto;
  }
`,
    _v42 = (0, _v16.default)(_v33.Notice).withConfig({
      displayName: "PasswordPrompt__NoticeStyled",
      componentId: "sc-5edd1ae5-4"
    })`
  width: ${(0, _v31.rem)(320)};
  margin: ${(0, _v31.rem)(25)} 0 0;
  @media screen and (min-width: ${(0, _v31.rem)(768)}) {
    width: auto;
  }
`,
    _v43 = (0, _v16.default)(_v35.Header).attrs({
      size: "1"
    }).withConfig({
      displayName: "PasswordPrompt__PromptMessage",
      componentId: "sc-5edd1ae5-5"
    })`
  max-width: none;
`;
  function _v44({
    eventId: _v0,
    xsrft: _v1,
    onSuccess: _v2
  }) {
    let [_v3, _v4] = (0, _v9.useState)(""),
      [_v5, _v6] = (0, _v9.useState)(!1),
      [_v7, _v8] = (0, _v9.useState)(!1),
      _v9 = (0, _v9.useCallback)(_v0 => {
        _v4(_v0.currentTarget.value);
      }, [_v3, _v4]),
      _v10 = (0, _v9.useCallback)(_v0 => {
        _v0.preventDefault(), _v8(!0);
        let _v1 = {
            password: _v3,
            token: _v1,
            referer_url: `/event/${_v0}`
          },
          _v2 = new FormData();
        for (let [_v0, _v1] of Object.entries(_v1)) _v2.append(_v0, _v1);
        fetch(`/event/${_v0}/password`, {
          method: "POST",
          credentials: "include",
          headers: {
            "X-Requested-With": "XMLHttpRequest"
          },
          body: _v2
        }).then(_v0 => (_v0.ok || _v6(!0), _v0.json())).then(_v0 => {
          if (!_v0.error && _v0.hashed_pass) {
            if (_v0.redirect_uri) {
              window.location = _v0.redirect_uri;
              return;
            }
            _v2(_v0.hashed_pass);
          }
          _v8(!1);
        });
      }, [_v3, _v5, _v6]);
    return (0, _v7.jsxs)(_v38, {
      onSubmit: _v10,
      children: [(0, _v7.jsx)(_v43, {
        children: _v37.passwordPromptMessage
      }), (0, _v7.jsxs)(_v39, {
        children: [(0, _v7.jsx)(_v40, {
          size: "md",
          type: "password",
          id: `${_v0}`,
          value: _v3,
          onChange: _v9,
          placeholder: _v37.enterPasswordCaption,
          "aria-label": _v37.enterPasswordCaption,
          disabled: _v7
        }), (0, _v7.jsx)(_v41, {
          disabled: _v7,
          size: "md",
          format: "primary",
          children: _v37.submit
        })]
      }), _v5 && (0, _v7.jsx)(_v42, {
        format: "negative",
        role: "alert",
        children: _v37.incorrectPasswordCaption
      })]
    });
  }
  var _v45 = _v0.i(0);
  let _v46 = "unrated",
    _v47 = "safe",
    _v48 = "advertisement",
    _v49 = "streaming",
    _v50 = "anybody",
    _v51 = "unlisted",
    _v52 = "password",
    _v53 = "started",
    _v54 = "ended",
    _v55 = {
      REGISTER: "register",
      SIGNIN: "signin"
    },
    _v56 = {
      EVENT_VIDEO_HASH: "/event/:eventId/videos/:clipId/:eventHash",
      EVENT_VIDEO: "/event/:eventId/videos/:clipId",
      EVENT_REGISTER: `/event/:eventId/${_v55.REGISTER}`,
      EVENT_SIGNIN: `/event/:eventId/${_v55.SIGNIN}`,
      EVENT_HASH_REGISTER: `/event/:eventId/:eventHash/${_v55.REGISTER}`,
      EVENT_HASH_SIGNIN: `/event/:eventId/:eventHash/${_v55.SIGNIN}`,
      EVENT_HASH: "/event/:eventId/:eventHash",
      EVENT: "/event/:eventId(\\d+)"
    },
    _v57 = (_v0, _v1 = !1, _v2 = "", _v3 = !1) => {
      let [_v4, {
          data: _v5,
          loading: _v6,
          called: _v7,
          error: _v8
        }] = (0, _v45.useGetLiveEventLazy)(),
        _v9 = _v5?.status;
      return (0, _v9.useEffect)(() => {
        let _v0;
        if (!_v1 || !_v0 || _v9 === _v54) return;
        let _v1 = () => {
          _v4({
            where: {
              liveEventId: _v0
            },
            select: ["status"],
            query: {
              password: _v2
            }
          });
        };
        return _v3 || (_v0 = setInterval(_v1, 0)), _v1(), () => {
          _v0 && clearInterval(_v0);
        };
      }, [_v0, _v9, _v3, _v2, _v1, _v4]), (0, _v9.useMemo)(() => ({
        status: _v9,
        loading: _v6,
        called: _v7,
        initialDataLoaded: !!_v5 || !!_v8
      }), [_v6, _v9, _v5, _v8, _v7]);
    };
  var _v58 = _v0.i(0),
    _v59 = _v0.i(0);
  let _v60 = ["chat_enabled", "embed.autoplay", "embed.byline", "embed.loop", "embed.playlist", "embed.portrait", "embed.schedule", "embed.show_latest_archived_clip", "embed.title", "embed.logos", "user.uri", "user.name", "user.account", "title", "uri", "schedule", "stream_description", "lead_uuid", "settings_link", "metadata.connections.team_member", "metadata.interactions.edit", "clip_to_play.name", "clip_to_play.uri", "clip_to_play.embed.speed", "clip_to_play.config_url", "clip_to_play.pictures", "clip_to_play.live.status", "clip_to_play.live.chat.room_id", "clip_to_play.live.chat.database_url", "clip_to_play.privacy.embed", "clip_to_play.privacy.view", "clip_to_play.user.account", "clip_to_play.user.uri", "clip_to_play.app.uri", "clip_to_play.password", "clip_to_play.content_rating", "streamable_clip.name", "streamable_clip.uri", "streamable_clip.config_url", "streamable_clip.pictures", "streamable_clip.live.status", "streamable_clip.live.chat.room_id", "streamable_clip.live.chat.database_url", "streamable_clip.content_rating", "stream_privacy.embed", "stream_privacy.view", "has_registration", "has_forced_lead_capture_form", "landing_page_logo.type", "landing_page_logo.uri", "landing_page_logo.url"],
    _v61 = ["items", "content_rating", "uri", "name", "config_url", "duration", "stats.plays", "pictures.sizes.link", "live.status"],
    _v62 = ["accent_color", "pictures.sizes.link", "team_name"];
  var _v63 = _v0.i(0),
    _v64 = _v0.i(0);
  let _v65 = _v0 => {
      let _v1 = String((0, _v64.default)(_v0.split("/videos/")));
      return Number((0, _v63.default)(_v1.split(":")));
    },
    _v66 = () => null !== (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)),
    _v67 = () => setTimeout(() => window.location.reload(), 0),
    _v68 = (_v0, _v1, _v2, _v3 = !1) => _v0 && _v1 && _v0.uri === _v1.uri ? 4 === _v2 ? "live" : _v3 ? "scheduled_live" : "not_scheduled_live" : "archived_live";
  var _v69 = ((_v1 = {}).OPEN_PLAYLIST = "open_playlist", _v1.CLOSE_PLAYLIST = "close_playlist", _v1.PLAY_ARCHIVED_CLIP = "play_archived_clip", _v1.SWITCH_TO_LIVE_STREAM = "switch_to_live_stream", _v1),
    _v70 = ((_v2 = {}).LIVE_EVENT = "live_event", _v2);
  let _v71 = (0, _v9.createContext)({}),
    _v72 = ({
      eventId: _v0,
      eventHash: _v1,
      path: _v2,
      shouldShowJoinCTA: _v3 = !0,
      children: _v4,
      hasNewLeadCaptureFlow: _v5,
      leadUuid: _v6 = ""
    }) => {
      let _v7 = _v1 ? `${_v0}:${_v1}` : _v0,
        _v8 = (0, _v9.useMemo)(() => {
          switch (_v2) {
            case _v56.EVENT_SIGNIN:
            case _v56.EVENT_HASH_SIGNIN:
              return _v25.PREVIEW_TYPE.LOGIN_SCREEN;
            case _v56.EVENT_REGISTER:
            case _v56.EVENT_HASH_REGISTER:
            default:
              return _v25.PREVIEW_TYPE.FORM;
          }
        }, [_v2]),
        [_v9, _v10] = (0, _v9.useState)(0),
        [_v11, _v12] = (0, _v9.useState)(""),
        [_v13, _v14] = (0, _v9.useState)(null),
        _v15 = (0, _v9.useContext)(_v30.ViewerContext),
        {
          eventData: _v16,
          errorData: _v17,
          revalidate: _v18
        } = function (_v0, _v1, _v2, _v3, _v4, _v5) {
          let _v6 = (0, _v9.useMemo)(() => ({
              variables: {
                fields: _v60,
                password: _v2,
                clip_to_play_id: _v65(_v1?.uri || "").toString(),
                lead_uuid: _v5.leadUuid
              },
              ignoreCache: !0,
              headerOverride: {
                Accept: "application/vnd.vimeo.*+json;version=3.4.9"
              }
            }), [_v2, _v5.leadUuid, _v1]),
            _v7 = (0, _v9.useRef)(""),
            _v8 = (0, _v9.useRef)(_v2),
            _v9 = (0, _v9.useRef)(_v3),
            _v10 = (0, _v9.useRef)(_v5.leadUuid),
            [_v11, {
              data: _v12
            }] = (0, _v58.useLazyQuery)(`/live_events/${_v0}`, _v6),
            _v13 = _v5.hasNewLeadCaptureFlow || !(0, _v24.isErrorResponse)(_v12) && _v12?.hasRegistration,
            _v14 = _v12?.clipToPlay;
          (0, _v9.useEffect)(() => {
            _v1 && !_v1?.configUrl && _v14?.configUrl && _v4(_v14);
          }, [_v14]), (0, _v9.useEffect)(() => {
            _v0 && (_v7.current !== _v0 || _v8.current !== _v2 || _v10.current !== _v5.leadUuid) && (_v7.current = _v0, _v8.current = _v2, _v10.current = _v5.leadUuid, _v11(_v6));
          }, [_v0, _v2, _v6, _v11, _v5.leadUuid]);
          let _v15 = (0, _v9.useCallback)(() => {
            _v11(_v6);
          }, [_v11, _v6]);
          (0, _v9.useEffect)(() => {
            5 === _v3 && _v9.current !== _v3 && (_v9.current = _v3, _v11(_v6));
          }, [_v3, _v6, _v11]);
          let _v16 = _v12?.clipToPlay?.uri;
          return (0, _v9.useEffect)(() => {
            _v12 && !(0, _v24.isErrorResponse)(_v12) && _v1?.uri !== _v12.clipToPlay?.uri && (_v13 ? _v5.leadUuid === _v12.leadUuid && _v4(_v12.clipToPlay) : _v4(_v12.clipToPlay));
          }, [_v16, _v5.leadUuid, _v13]), {
            eventData: (0, _v24.isErrorResponse)(_v12) ? null : _v12,
            errorData: (0, _v24.isErrorResponse)(_v12) ? _v12 : null,
            revalidate: _v15
          };
        }(_v7, _v13, _v11, _v9, _v14, {
          leadUuid: _v6,
          hasNewLeadCaptureFlow: _v5
        }),
        _v19 = _v5 || _v16?.hasRegistration,
        {
          videosData: _v20
        } = function (_v0, _v1, _v2, _v3) {
          let _v4 = (0, _v9.useMemo)(() => ({
              variables: {
                fields: _v61,
                password: _v2
              },
              ignoreCache: !0
            }), [_v2]),
            _v5 = (0, _v9.useRef)(_v1?.uri),
            _v6 = (0, _v9.useRef)(_v2),
            _v7 = (0, _v9.useRef)(_v3),
            [_v8, {
              data: _v9
            }] = (0, _v58.useLazyQuery)(`/live_events/${_v0}/videos`, _v4);
          return (0, _v9.useEffect)(() => {
            _v1?.uri && (_v5.current !== _v1.uri || _v6.current !== _v2) && (_v5.current = _v1.uri, _v6.current = _v2, _v8(_v4));
          }, [_v1?.uri, _v2, _v4, _v8]), (0, _v9.useEffect)(() => {
            4 === _v3 && _v7.current !== _v3 && (_v7.current = _v3, _v8(_v4));
          }, [_v3, _v4, _v8]), {
            videosData: _v9
          };
        }(_v7, _v16?.streamableClip, _v11, _v9),
        {
          ingestData: _v21
        } = function (_v0, _v1 = !0, _v2 = 0) {
          let [_v3, _v4] = (0, _v9.useState)(_v1),
            [_v5, {
              data: _v6
            }] = (0, _v58.useLazyQuery)(`${_v0}/ingest/status`);
          (0, _v9.useEffect)(() => (_v0 && _v4(!0), () => {
            _v4(!1);
          }), [_v0]), (0, _v9.useEffect)(() => {
            _v6?.ingestStatus === 5 && _v4(!1);
          }, [_v6?.ingestStatus]);
          let _v7 = !!(_v0 && _v3);
          return (0, _v59.usePoll)(() => _v5({
            ignoreCache: !0
          }), _v7, {
            interval: _v2
          }), {
            ingestData: _v6
          };
        }(_v16?.streamableClip?.uri),
        {
          status: _v22
        } = _v57(_v7, _v19, _v11, !0);
      !_v13 && _v16?.clipToPlay && (_v19 && _v22 !== _v54 ? _v6 === _v16?.leadUuid && _v14(_v16.clipToPlay) : _v14(_v16.clipToPlay)), (0, _v9.useEffect)(() => {
        _v21?.ingestStatus && _v10(_v21?.ingestStatus);
      }, [_v21?.ingestStatus]);
      let _v23 = (0, _v9.useCallback)(_v0 => {
          _v13?.uri !== _v0.uri && _v14(_v0);
        }, [_v13]),
        _v24 = (0, _v9.useMemo)(() => {
          if (!_v16) return null;
          {
            let {
              streamableClip: _v0,
              clipToPlay: _v1,
              schedule: _v2
            } = _v16;
            return _v68(_v0, _v1, _v9, !!_v2);
          }
        }, [_v16?.streamableClip, _v16?.clipToPlay, _v16?.schedule, _v9]);
      if (_v17) switch (_v17.errorCode) {
        case 0:
          return (0, _v7.jsx)(_v44, {
            eventId: _v0,
            xsrft: _v15?.xsrft || "",
            onSuccess: _v12
          });
        case 0:
          if (!_v15?.user) return (0, _v7.jsx)(_v26.BrandedLogin, {
            metaUrl: `/sso/live_event/${_v0}/meta`,
            errorConstructor: _v24.UnauthorizedError
          });
          return (0, _v7.jsx)(_v27.ErrorPage, {
            error: new _v24.UnauthorizedError(_v17.error)
          });
        default:
          return (0, _v7.jsx)(_v27.ErrorPage, {
            error: new _v24.ResourceNotFoundError(_v17.error)
          });
      }
      if (!_v15 || !_v16 || !_v13 && !_v19) return (0, _v7.jsx)(_v28.default, {});
      let _v25 = {
          video_privacy: _v13?.privacy?.view || null,
          video_app_id: _v13?.app?.uri || null,
          is_video_password_protected: !!_v13?.password,
          video_embed_privacy: _v13?.privacy?.embed || null,
          team_owner_id: _v13?.user?.uri ? _v13.user?.uri.split("/")[2] : null,
          team_subscription_type: _v13?.user?.account || null
        },
        _v26 = {
          product: "workflow",
          video_id: _v13?.uri ? String(_v65(_v13.uri)) : "",
          video_type: _v24,
          ..._v25
        };
      return (0, _v7.jsx)(_v29.AnalyticsEventProvider, {
        eventData: _v26,
        children: (0, _v7.jsx)(_v71.Provider, {
          value: {
            eventData: _v16,
            videosData: _v20,
            onPlayableClipChange: _v23,
            currentClip: _v13,
            eventId: _v0,
            password: _v11,
            apiEventId: _v7,
            eventHash: _v1,
            shouldShowJoinCTA: _v3,
            ingestStatus: _v9,
            hasNewLeadCaptureFlow: _v19,
            cgPreviewType: _v8,
            revalidate: _v18
          },
          children: _v4
        })
      });
    },
    _v73 = () => (0, _v9.useContext)(_v71);
  var _v74 = _v0.i(0),
    _v75 = _v0.i(0);
  async function _v76({
    baseUrl: _v0,
    select: _v1,
    where: {
      resourceType: _v2,
      resourceId: _v3,
      registrantId: _v4
    },
    query: _v5,
    ..._v6
  }) {
    return (0, _v12.measureLatency)("getLeadCaptureResourceIdRegistrant", "GET", async () => {
      let _v0 = await fetch(`${_v0}/lead_capture/${_v2}/${_v3}/registrants/${_v4}?${(0, _v13.searchQueryString)(_v5)}&fields=${_v1.map(_v13.intoSnakeCase).join(",")}`, {
        ..._v6,
        method: "GET"
      });
      if (!_v0.ok) throw new _v13.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v13.deepCamelCase)(_v1);
    });
  }
  var _v77 = _v0.i(0),
    _v78 = _v0.i(0),
    _v79 = _v0.i(0),
    _v80 = _v0.i(0);
  function _v81() {
    let {
        mutate: _v0
      } = (0, _v78.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v80.useGctlConfig)(),
      [_v5, _v6] = (0, _v79.useInternalState)();
    return [(0, _v9.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/lead_capture/${_v0.where.resourceType}/${_v0.where.resourceId}/registrants/${_v0.where.registrantId}${(0, _v79.serializeQuery)(_v0)}`, _v76({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }));
        _v6({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v6({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v1, _v3, _v2, _v4, _v6]), _v5];
  }
  "true" === _v75.default.env.STORYBOOK && (0, _v79.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v80.useGctlConfig)();
    return (0, _v77.default)(_v2 ? `/lead_capture/${_v2.where.resourceType}/${_v2.where.resourceId}/registrants/${_v2.where.registrantId}${(0, _v79.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v76({
      ..._v2,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      baseUrl: _v3
    }) : null, _v1);
  }, {
    endpoint: "/lead_capture/:resourceType/:resourceId/registrants/:registrantId",
    method: "GET"
  }), "true" === _v75.default.env.STORYBOOK && (0, _v79.assignMswData)(_v81, {
    endpoint: "/lead_capture/:resourceType/:resourceId/registrants/:registrantId",
    method: "GET"
  });
  let _v82 = {
      registrant: {
        loading: !1,
        called: !1,
        initialDataLoaded: !1,
        data: {
          isBlocked: !1,
          isValidRegistrant: !1
        }
      },
      liveStatus: {
        loading: !1,
        called: !1,
        initialDataLoaded: !1,
        data: {
          status: null
        }
      }
    },
    _v83 = (0, _v9.createContext)(_v82),
    _v84 = ({
      leadUuid: _v0,
      ..._v1
    }) => {
      let [_v2, _v3] = (0, _v9.useState)(_v82),
        {
          password: _v4,
          apiEventId: _v5,
          hasNewLeadCaptureFlow: _v6,
          revalidate: _v7
        } = _v73(),
        _v8 = _v57(_v5, _v6, _v4),
        _v9 = ((_v0, _v1) => {
          let [_v2, {
              data: _v3,
              loading: _v4,
              called: _v5,
              error: _v6
            }] = _v81(),
            {
              apiEventId: _v7,
              password: _v8
            } = _v73(),
            _v9 = (0, _v9.useRef)({
              loading: _v4,
              called: _v5,
              initialDataLoaded: !1,
              data: {
                isBlocked: !1,
                isValidRegistrant: !1
              }
            }),
            _v10 = !_v7 || !_v0 || _v0.length < 1,
            _v11 = (0, _v9.useCallback)(() => {
              _v10 || _v2({
                where: {
                  registrantId: _v0,
                  resourceId: _v7,
                  resourceType: "live_events"
                },
                select: ["isBlocked", "uri"],
                query: {
                  password: _v8
                }
              });
            }, [_v7, _v10, _v0, _v2, _v8]);
          return (0, _v59.usePoll)(_v11, _v1 !== _v54, {
            interval: 0
          }), (0, _v9.useEffect)(() => {
            _v11();
          }, [_v11]), (0, _v9.useMemo)(() => {
            if (_v6 && _v6?.status !== 404) return {
              ..._v9.current
            };
            let _v0 = {
              loading: _v4,
              called: _v5,
              initialDataLoaded: !!_v3 || !!_v6,
              data: {
                isBlocked: !!_v3?.isBlocked,
                isValidRegistrant: !!_v3?.uri && _v6?.status !== 404
              }
            };
            return _v9.current = {
              ..._v0
            }, _v0;
          }, [_v5, _v3, _v6, _v4]);
        })(_v0, _v8.status),
        _v10 = (0, _v74.usePrevious)(_v9.data.isBlocked);
      return (0, _v9.useEffect)(() => {
        _v3(_v0 => ({
          ..._v0,
          registrant: _v9
        }));
      }, [_v9]), (0, _v9.useEffect)(() => {
        _v3(_v0 => ({
          ..._v0,
          liveStatus: {
            ..._v8,
            data: {
              status: _v8.status
            }
          }
        }));
      }, [_v8]), (0, _v9.useEffect)(() => {
        _v10 && !_v9.data.isBlocked && _v7();
      }, [_v7, _v9, _v10]), (0, _v7.jsx)(_v83.Provider, {
        value: _v2,
        children: _v1.children
      });
    },
    _v85 = () => {
      let _v0 = (0, _v9.useContext)(_v83);
      if (void 0 === _v0) throw Error("useGateContext was used outside of GateContextProvider");
      return _v0;
    };
  var _v86 = _v0.i(0),
    _v87 = _v0.i(0),
    _v88 = _v0.i(0),
    _v89 = _v0.i(0),
    _v90 = _v0.i(0),
    _v91 = _v0.i(0),
    _v92 = _v0.i(0),
    _v93 = _v0.i(0),
    _v94 = _v0.i(0),
    _v95 = _v0.i(0);
  let _v96 = ({
      content: _v0 = "",
      handleSave: _v1,
      maxCharacterCount: _v2,
      validate: _v3,
      allowNewLines: _v4 = !0,
      shouldDisplayLinks: _v5 = !0,
      resetOnEmpty: _v6,
      className: _v7,
      placeholder: _v8,
      autoFocus: _v9 = !1,
      ..._v10
    }) => {
      let _v11 = (0, _v9.useRef)(_v9),
        _v12 = (0, _v9.useRef)(null),
        [_v13, _v14] = (0, _v9.useState)(!1),
        [_v15, _v16] = (0, _v9.useState)(_v0),
        [_v17, _v18] = (0, _v9.useState)(_v0),
        [_v19, _v20] = (0, _v9.useState)(!1);
      (0, _v9.useEffect)(() => {
        _v12.current && _v11.current && _v12.current.focus();
      }, []);
      let _v21 = () => {
          let _v0 = _v12?.current?.lastChild;
          _v0 && _v98(_v0);
        },
        _v22 = {
          Enter: _v0 => {
            _v4 && (!_v4 || _v0.shiftKey) || (_v0.preventDefault(), _v12.current?.blur());
          }
        },
        _v23 = (!_v2 || !(_v15.length > _v2)) && (!_v3 || _v3(_v15));
      return (0, _v7.jsxs)(_v107, {
        children: [!_v23 && (0, _v7.jsx)(_v102, {}), (0, _v7.jsx)(_v106, {
          onBlur: () => {
            let _v0 = _v15 !== _v17;
            _v14(!1), _v0 && _v23 && (0 === _v15.trim().length && _v6 ? (_v16(_v17), _v12.current && (_v12.current.innerHTML = _v17)) : _v1 && (_v1(_v15.trim()), _v18(_v15.trim())));
          },
          onFocus: () => {
            _v19 || _v14(!0), _v11.current && (setTimeout(_v21, 0), _v11.current = !1);
          },
          onInput: _v0 => {
            _v16(_v0?.currentTarget?.innerText || "");
          },
          onKeyDown: _v0 => {
            let {
              key: _v1
            } = _v0;
            _v22[_v1] && _v22[_v1](_v0);
          },
          onPaste: _v0 => {
            _v0.preventDefault();
            let _v1 = _v0.clipboardData.getData("Text"),
              _v2 = _v4 ? _v1 : _v1.replace(/[\r\n\v]+/g, " ");
            document.execCommand("insertHTML", !1, _v2);
          },
          ref: _v12,
          error: !_v23,
          className: _v7,
          placeholder: _v8,
          suppressContentEditableWarning: !0,
          contentEditable: !0,
          ..._v10,
          children: _v13 ? _v17 : _v5 ? (0, _v7.jsx)(_v95.default, {
            onMouseEnter: () => {
              _v20(!0);
            },
            onMouseLeave: () => {
              _v20(!1);
            },
            onClick: _v0 => {
              _v0.stopPropagation();
            },
            text: _v15,
            linkWordBreakStyle: "normal"
          }) : _v15
        }), _v2 && _v15.length > _v2 && (0, _v7.jsx)(_v101, {
          children: `${_v15.length}/${_v2}`
        })]
      });
    },
    _v97 = ({
      className: _v0,
      content: _v1 = "",
      placeholder: _v2,
      shouldDisplayLinks: _v3 = !0,
      ..._v4
    }) => (0, _v7.jsx)(_v104, {
      className: _v0,
      ..._v4,
      children: _v3 ? (0, _v7.jsx)(_v95.default, {
        text: _v1
      }) : _v1
    }),
    _v98 = _v0 => {
      let _v1 = document.createRange(),
        _v2 = window.getSelection();
      _v1.selectNode(_v0), _v2 && (!_v2 || "None" !== _v2.type) && (_v2.removeAllRanges(), _v2.addRange(_v1), _v2.collapseToEnd());
    },
    _v99 = ({
      contentEditable: _v0 = !0,
      ..._v1
    }) => _v0 ? (0, _v7.jsx)(_v96, {
      ..._v1
    }) : (0, _v7.jsx)(_v97, {
      ..._v1
    }),
    _v100 = _v92.bokehTheme.colors.red["500"],
    _v101 = (0, _v16.default)(_v94.Text).withConfig({
      displayName: "EditableText__CharacterCount",
      componentId: "sc-7f56c0ca-0"
    })`
  position: absolute;
  bottom: ${(0, _v31.rem)(0)};
  right: ${(0, _v31.rem)(7)};
  font-size: ${(0, _v31.rem)(12)};
  letter-spacing: ${(0, _v31.rem)(-.4)};
  color: ${_v100};
`,
    _v102 = (0, _v16.default)(_v93.CircleInfo).withConfig({
      displayName: "EditableText__ErrorIcon",
      componentId: "sc-7f56c0ca-1"
    })`
  left: ${(0, _v31.rem)(-30)};
  position: absolute;
  height: ${(0, _v31.rem)(20)};
  width: ${(0, _v31.rem)(20)};

  * {
    fill: ${_v100};
  }
`,
    _v103 = _v16.css`
  border: ${(0, _v31.rem)(1)} solid transparent;
  outline: none;
  resize: none;
  padding: ${(0, _v31.rem)(5)};
  border-radius: ${(0, _v31.rem)(4)};
  -ms-overflow-style: none;
  white-space: pre-wrap;
`,
    _v104 = (0, _v16.default)(_v94.Text).withConfig({
      displayName: "EditableText__JustText",
      componentId: "sc-7f56c0ca-2"
    })`
  ${_v103};
  display: block;
  line-height: normal;
  overflow-wrap: break-word;
  -webkit-line-break: after-white-space;
`,
    _v105 = _v16.css`
  border: ${(0, _v31.rem)(1)} solid ${_v100};
`,
    _v106 = _v16.default.div.withConfig({
      displayName: "EditableText__Editor",
      componentId: "sc-7f56c0ca-3"
    })`
  ${_v103};
  font-family: Arial, system-ui, sans-serif;
  // Temporary fix, this causes a weird delay for the title
  // transition: background 0.25s;
  margin: 0;
  overflow: hidden;
  width: 100%;
  color: ${({
      theme: _v0
    }) => _v0.content.color};

  ${({
      error: _v0
    }) => _v0 && _v105}

  &:hover {
    background: ${({
      theme: _v0
    }) => _v0.additions.item.highlight};
  }

  &:empty:before {
    content: attr(placeholder);
    pointer-events: none;
    color: ${({
      theme: _v0
    }) => _v0.additions.content.color2};
  }
`,
    _v107 = _v16.default.div.withConfig({
      displayName: "EditableText__EditorWrapper",
      componentId: "sc-7f56c0ca-4"
    })`
  display: inline;
  position: relative;
  width: 100%;
`;
  var _v108 = _v0.i(0),
    _v109 = _v0.i(0);
  let _v110 = {
      ..._v108.nullVideoContextData,
      ..._v108.nullTeamContext,
      ..._v108.nullUploadContextData
    },
    _v111 = ({
      text: _v0,
      onSave: _v1,
      placeholder: _v2,
      contentEditable: _v3 = !0,
      bottomAttachment: _v4 = null,
      ..._v5
    }) => {
      let _v6 = _v2 || (0, _v36.translate)({
          singular: "Click to add a description",
          dictionary: {
            es: {
              singular: "Haz clic para agregar una descripción"
            },
            "de-DE": {
              singular: "Klicken, um Beschreibung hinzuzufügen"
            },
            "fr-FR": {
              singular: "Cliquez pour ajouter une description"
            },
            "ja-JP": {
              singular: "クリックして説明を追加"
            },
            "ko-KR": {
              singular: "설명을 추가하려면 클릭하세요"
            },
            "pt-BR": {
              singular: "Clique para adicionar uma descrição"
            },
            "zh-CN": {
              singular: "点击即可添加描述"
            }
          }
        }),
        [_v7, _v8] = (0, _v9.useState)(_v0 || ""),
        _v9 = (0, _v9.useRef)(null),
        [_v10, _v11] = (0, _v9.useState)(!1),
        [_v12, _v13] = (0, _v9.useState)(!0),
        [_v14, _v15] = (0, _v9.useState)(!1),
        _v16 = (0, _v109.useAnalyticsEvent)();
      return (0, _v9.useEffect)(() => {
        _v9?.current && _v9.current.offsetHeight > 72 ? _v15(!0) : _v15(!1);
      }, [_v10]), (0, _v7.jsxs)(_v112, {
        children: [(0, _v7.jsx)(_v114, {
          ref: _v9,
          collapsed: _v14 && _v12,
          maxCollapsedHeight: 70,
          onClick: () => {
            _v11(_v3);
          },
          children: (0, _v7.jsx)(_v113, {
            content: _v7,
            contentEditable: _v3,
            maxCharacterCount: 0,
            placeholder: _v6,
            handleSave: _v0 => {
              _v11(!1), _v7 !== _v0 && (_v8(_v0), _v1 && _v1(_v0));
            },
            ..._v5
          })
        }), _v10 || _v14 ? null : _v4, !_v10 && _v14 && (0, _v7.jsxs)(_v7.Fragment, {
          children: [_v12 ? null : _v4, (0, _v7.jsx)(_v115, {
            onClick: () => {
              _v16({
                eventName: "workflow.toggle_description_expand",
                version: 2,
                fields: {
                  location: "svv main field",
                  is_expanded: _v12
                },
                defaultEventFields: _v110
              }), _v13(!_v12);
            },
            children: _v12 ? (0, _v36.translate)({
              singular: "Show more",
              dictionary: {
                es: {
                  singular: "Mostrar más"
                },
                "de-DE": {
                  singular: "Mehr anzeigen"
                },
                "fr-FR": {
                  singular: "Afficher plus"
                },
                "ja-JP": {
                  singular: "その他を表示する"
                },
                "ko-KR": {
                  singular: "더 보기"
                },
                "pt-BR": {
                  singular: "Mostar mais"
                },
                "zh-CN": {
                  singular: "显示更多"
                }
              }
            }) : (0, _v36.translate)({
              singular: "Show less",
              dictionary: {
                es: {
                  singular: "Mostrar menos"
                },
                "de-DE": {
                  singular: "Weniger anzeigen"
                },
                "fr-FR": {
                  singular: "Afficher moins"
                },
                "ja-JP": {
                  singular: "表示件数を減らす"
                },
                "ko-KR": {
                  singular: "줄이기"
                },
                "pt-BR": {
                  singular: "Mostrar menos"
                },
                "zh-CN": {
                  singular: "收起"
                }
              }
            })
          })]
        })]
      });
    },
    _v112 = _v16.default.div.withConfig({
      displayName: "Description__Container",
      componentId: "sc-b2854a53-0"
    })`
  display: inline-block;
  width: 100%;
`,
    _v113 = (0, _v16.default)(_v99).withConfig({
      displayName: "Description__StyledEditableText",
      componentId: "sc-b2854a53-1"
    })`
  font-size: ${(0, _v31.rem)(16)};
  line-height: ${(0, _v31.rem)(20)};
  font-weight: 400;
  letter-spacing: 0.01rem;
  padding: ${(0, _v31.rem)(5)};
  border-radius: ${(0, _v31.rem)(4)};
  background: ${({
      theme: _v0
    }) => _v0.content.background};
`,
    _v114 = _v16.default.div.withConfig({
      displayName: "Description__TextContainer",
      componentId: "sc-b2854a53-2"
    })`
  position: relative;
  border: ${(0, _v31.rem)(1)} solid transparent;
  white-space: pre-wrap;
  overflow: hidden;
  &:hover ${_v113} {
    &::after {
      background: unset;
    }
  }
  border-radius: ${(0, _v31.rem)(4)};
  ${({
      collapsed: _v0,
      maxCollapsedHeight: _v1,
      theme: _v2
    }) => _v0 && `
    max-height: ${(0, _v31.rem)(_v1)};
    &::after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      content: '';
      background: linear-gradient(${(0, _v31.rgba)(_v2.content.background, 0)}, ${_v2.content.background});
      pointer-events: none;
    }
    `}
`,
    _v115 = _v16.default.span.withConfig({
      displayName: "Description__CollapseToggle",
      componentId: "sc-b2854a53-3"
    })`
  font-size: ${(0, _v31.rem)(14)};
  cursor: pointer;
  margin-left: ${(0, _v31.rem)(5)};
  margin-bottom: ${(0, _v31.rem)(5)};
  color: ${_v92.bokehTheme.colors.blue["500"]};
  display: inline-block;
`;
  var _v116 = _v0.i(0),
    _v116 = _v116,
    _v117 = _v0.i(0),
    _v118 = _v0.i(0),
    _v119 = _v0.i(0),
    _v120 = _v0.i(0),
    _v121 = _v0.i(0),
    _v122 = _v0.i(0),
    _v123 = _v0.i(0),
    _v124 = _v0.i(0),
    _v125 = _v0.i(0),
    _v126 = _v0.i(0),
    _v127 = _v0.i(0),
    _v128 = _v0.i(0),
    _v129 = _v0.i(0),
    _v130 = _v0.i(0),
    _v131 = _v0.i(0),
    _v132 = _v0.i(0),
    _v133 = _v0.i(0),
    _v134 = _v0.i(0),
    _v135 = _v0.i(0);
  let _v136 = (0, _v9.memo)(function ({
    id: _v0 = (0, _v133.createInteractionDomName)("detached-sidebar"),
    isHorizontal: _v1 = !1,
    isPanelOpen: _v2 = !0,
    iconSize: _v3 = "md",
    isFloating: _v4 = !1,
    onItemClick: _v5,
    onClosePanel: _v6,
    onActiveModuleChange: _v7
  }) {
    let _v8 = (0, _v130.useScope)(),
      _v9 = (0, _v9.useRef)(!1),
      [_v10, _v11] = (0, _v9.useState)(null),
      {
        items: _v12
      } = (0, _v135.useInteractionSidebarItems)(_v10),
      _v13 = (0, _v9.useCallback)(_v0 => {
        _v8.emitSignal({
          type: _v134.ELiveSignal.LIVE_PANEL_TAB_CHANGE_REQUEST,
          data: _v0
        }), _v11(_v0);
      }, [_v8]);
    (0, _v9.useEffect)(() => {
      if (!_v12.length) return;
      let _v0 = _v12[0].id,
        _v1 = !!(_v10 && _v12.some(_v0 => _v0.id === _v10));
      if (!_v9.current) {
        _v10 !== _v0 && _v13(_v0);
        return;
      }
      _v1 || _v13(_v0);
    }, [_v10, _v12, _v13]), (0, _v9.useEffect)(() => _v8.subscribeToSignals(_v0 => {
      _v0.type === _v134.ELiveSignal.LIVE_PANEL_TAB_CHANGE_REQUEST && _v11(_v0.data);
    }), [_v8]), (0, _v9.useEffect)(() => {
      if (!_v10 || !_v12.length) return;
      let _v0 = _v12.find(_v0 => _v0.id === _v10);
      _v7?.(_v10, _v0?.header ? String(_v0.header) : void 0, _v0?.panelWidth, _v0?.panelAutoHeight);
    }, [_v10, _v12, _v7]);
    let _v14 = (0, _v9.useCallback)(_v0 => {
      if (_v9.current = !0, _v0 === _v10 && _v2) return void _v6?.();
      _v13(_v0);
      let _v1 = _v12.find(_v0 => _v0.id === _v0);
      _v7?.(_v0, _v1?.header ? String(_v1.header) : void 0, _v1?.panelWidth, _v1?.panelAutoHeight), _v5?.(_v0);
    }, [_v10, _v2, _v12, _v7, _v6, _v5, _v13]);
    return _v12.length ? _v1 && _v4 ? (0, _v7.jsx)(_v122.Flex, {
      id: _v0,
      "data-id": "event-interaction-sidebar",
      flexDirection: "row",
      width: "fit-content",
      gap: 1,
      children: _v12.map(_v0 => {
        let _v1 = _v0.id,
          _v2 = _v2 && _v10 === _v1;
        return (0, _v7.jsxs)(_v122.Flex, {
          role: "button",
          tabIndex: 0,
          "aria-label": String(_v0.label ?? _v1),
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: (0, _v124.rem)(2),
          minWidth: (0, _v124.rem)(64),
          paddingX: 3,
          paddingY: 2,
          borderRadius: "xl",
          cursor: "pointer",
          backgroundColor: _v2 ? "var(--vimeo-colors-fill-component)" : "transparent",
          transition: "background 0.15s",
          _hover: {
            backgroundColor: "var(--vimeo-colors-fill-component)"
          },
          onClick: () => _v14(_v1),
          onKeyDown: _v0 => {
            ("Enter" === _v0.key || " " === _v0.key) && (_v0.preventDefault(), _v14(_v1));
          },
          children: [(0, _v7.jsx)(_v120.Box, {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: _v2 ? "text-primary" : "text-secondary",
            sx: {
              "& svg": {
                width: (0, _v124.rem)(24),
                height: (0, _v124.rem)(24)
              }
            },
            children: (0, _v9.isValidElement)(_v0.icon) ? _v0.icon : null
          }), (0, _v7.jsx)(_v132.FormLabel, {
            textAlign: "center",
            textStyle: "body-xs",
            color: _v2 ? "text-primary" : "text-tertiary",
            marginBottom: "0",
            cursor: "pointer",
            children: _v0.label
          })]
        }, _v1);
      })
    }) : _v1 ? (0, _v7.jsx)(_v122.Flex, {
      id: _v0,
      "data-id": "event-interaction-sidebar",
      flexDirection: "row",
      width: "100%",
      borderTopWidth: "0.5px",
      borderTopStyle: "solid",
      borderTopColor: "stroke",
      paddingTop: 3,
      children: _v12.map(_v0 => {
        let _v1 = _v0.id,
          _v2 = _v2 && _v10 === _v1;
        return (0, _v7.jsxs)(_v122.Flex, {
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
          cursor: "pointer",
          onClick: () => _v14(_v1),
          children: [(0, _v7.jsx)(_v123.IconButton, {
            "aria-label": String(_v0.label ?? _v1),
            variant: "secondary",
            size: _v3,
            borderRadius: "round",
            icon: (0, _v9.isValidElement)(_v0.icon) ? _v0.icon : void 0,
            isActive: _v2,
            onClick: _v0 => {
              _v0.stopPropagation(), _v14(_v1);
            }
          }), (0, _v7.jsx)(_v132.FormLabel, {
            textAlign: "center",
            textStyle: "body-xs",
            color: "text-tertiary",
            marginBottom: "0",
            children: _v0.label
          })]
        }, _v1);
      })
    }) : (0, _v7.jsx)(_v122.Flex, {
      id: _v0,
      "data-id": "event-interaction-sidebar",
      width: (0, _v124.rem)(80),
      height: "100%",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 4,
      flexShrink: 0,
      marginLeft: 2,
      alignSelf: "stretch",
      children: _v12.map(_v0 => {
        let _v1 = _v0.id,
          _v2 = _v2 && _v10 === _v1;
        return (0, _v7.jsxs)(_v131.Center, {
          flexDirection: "column",
          children: [(0, _v7.jsx)(_v123.IconButton, {
            "aria-label": String(_v0.label ?? _v1),
            variant: "secondary",
            size: "lg",
            borderRadius: "round",
            icon: (0, _v9.isValidElement)(_v0.icon) ? _v0.icon : void 0,
            isActive: _v2,
            onClick: () => {
              _v14(_v1);
            }
          }), (0, _v7.jsx)(_v132.FormLabel, {
            textAlign: "center",
            textStyle: "body-xs",
            color: "text-tertiary",
            marginTop: "xs",
            marginBottom: "0",
            children: _v0.label
          })]
        }, _v1);
      })
    }) : null;
  });
  var _v137 = _v0.i(0),
    _v138 = _v0.i(0),
    _v139 = _v0.i(0);
  let _v140 = "0px 8px 24px var(--vimeo-colors-popover-shadow), 0 0 0 0.5px var(--vimeo-colors-popover-border)",
    _v141 = {
      display: "flex",
      flexDirection: "row",
      alignItems: "stretch",
      flexShrink: 0
    },
    _v142 = {
      "[class*='sidebar-panel'], [class*='panel-scroller'], [class*='panel-break']": {
        display: "none !important"
      },
      "[class*='widget-auto'], [class*='widget-auto-main']": {
        width: "100% !important",
        height: "100% !important",
        maxWidth: "100% !important"
      },
      "[class*='sidebar']": {
        width: "100% !important",
        height: "100% !important",
        maxWidth: "100% !important",
        flexDirection: "column !important",
        justifyContent: "flex-start !important",
        alignItems: "stretch !important"
      },
      "[class*='sidebar-content']:not([class*='content-header']):not([class*='content-wrapper']):not([class*='content-grip'])": {
        position: "relative !important",
        flex: "1 1 auto !important",
        minHeight: "0 !important",
        height: "100% !important",
        maxWidth: "100% !important",
        display: "flex !important",
        flexDirection: "column !important",
        overflow: "hidden !important"
      },
      "[class*='content-wrapper']": {
        position: "relative !important",
        inset: "auto !important",
        width: "100% !important",
        height: "100% !important",
        maxWidth: "100% !important",
        flex: "1 1 auto !important",
        minHeight: "0 !important",
        display: "flex !important",
        flexDirection: "column !important",
        overflow: "hidden !important"
      },
      "[class*='content-header']": {
        display: "none !important"
      },
      "[class*='item-content']": {
        flex: "1 1 auto !important",
        minHeight: "0 !important",
        height: "100% !important",
        display: "flex !important",
        flexDirection: "column !important",
        overflow: "hidden !important"
      },
      "[class*='chat-view']": {
        flex: "1 1 auto !important",
        minHeight: "0 !important",
        height: "100% !important",
        display: "flex !important",
        flexDirection: "column !important",
        overflow: "hidden !important"
      },
      "[class*='chat-view-content']": {
        flex: "1 1 auto !important",
        minHeight: "0 !important",
        display: "flex !important",
        flexDirection: "column !important",
        overflow: "hidden !important"
      },
      "[class*='chat-history']": {
        flex: "1 1 auto !important",
        minHeight: "0 !important",
        width: "100% !important",
        overflow: "hidden !important"
      },
      "[class*='chat-history'] ul": {
        flex: "1 1 auto !important",
        minHeight: "0 !important",
        overflowY: "auto !important",
        width: "100% !important"
      },
      "[class*='qna-view']": {
        flex: "1 1 auto !important",
        minHeight: "0 !important",
        height: "100% !important",
        display: "flex !important",
        flexDirection: "column !important",
        overflow: "hidden !important"
      },
      "[class*='questions-panel']": {
        flex: "1 1 auto !important",
        minHeight: "0 !important",
        overflow: "hidden !important",
        display: "flex !important",
        flexDirection: "column !important"
      },
      "[class*='questions-list-sorting']": {
        flexShrink: "0 !important"
      },
      "[class*='questions-list-scroll']": {
        flex: "1 1 auto !important",
        minHeight: "0 !important",
        height: "0 !important",
        overflowX: "hidden !important",
        overflowY: "auto !important",
        display: "flex !important",
        flexDirection: "column !important"
      },
      "[class*='input-wrapper']": {
        flexShrink: "0 !important"
      },
      "[class*='poll-view']": {
        flex: "1 1 auto !important",
        minHeight: "0 !important",
        height: "100% !important",
        overflow: "auto !important",
        alignSelf: "flex-start !important"
      },
      "[class*='poll-view'] > div:only-child": {
        margin: "0 !important",
        alignSelf: "flex-start !important",
        height: "auto !important"
      }
    },
    _v143 = (0, _v9.memo)(function ({
      application: _v0,
      isChatSheetView: _v1,
      isPanelExpanded: _v2,
      onOpen: _v3,
      onClose: _v4,
      onPanelOpenChange: _v5
    }) {
      let [_v6, _v7] = (0, _v9.useState)(!1),
        [_v8, _v9] = (0, _v9.useState)(""),
        [_v10, _v11] = (0, _v9.useState)(272),
        [_v12, _v13] = (0, _v9.useState)(!1),
        [_v14, _v15] = (0, _v9.useState)(void 0),
        _v16 = _v14 === _v129.EInteractionModule.REACTIONS,
        {
          isJoined: _v17,
          isRoomInfoLoading: _v18
        } = function () {
          let {
            roomInfo: {
              isLoading: _v0
            },
            roomUser: {
              value: _v1
            }
          } = (0, _v130.useManager)(_v139.InteractionSessionManager);
          return {
            isJoined: !!_v1,
            isRoomInfoLoading: !!_v0
          };
        }(),
        _v19 = !_v17 && !_v18,
        _v20 = _v1 ? _v2 : _v6,
        _v21 = (0, _v9.useRef)(!1);
      _v19 && (_v21.current = !0);
      let _v22 = (0, _v9.useCallback)(() => {
          _v1 ? _v3?.() : (_v7(!0), _v5?.(!0));
        }, [_v1, _v3, _v5]),
        _v23 = (0, _v9.useCallback)(() => {
          _v1 ? _v4?.() : (_v7(!1), _v5?.(!1));
        }, [_v1, _v4, _v5]),
        _v24 = (0, _v9.useCallback)((_v0, _v1, _v2, _v3) => {
          _v15(_v0), _v11(_v2 ?? 272), _v9(_v1 ?? ""), _v13(_v3 ?? !1);
        }, []),
        _v25 = (0, _v9.useRef)(_v17);
      (0, _v9.useEffect)(() => {
        !_v25.current && _v17 && _v21.current && (_v1 ? _v3?.() : (_v7(!0), _v5?.(!0)), _v21.current = !1), _v25.current = _v17;
      }, [_v17, _v1, _v3, _v5]);
      let _v26 = (0, _v9.useCallback)(() => (0, _v7.jsxs)(_v122.Flex, {
          alignItems: "center",
          justifyContent: "space-between",
          flexShrink: 0,
          padding: `${_v92.bokehTheme.space.md} ${_v92.bokehTheme.space.md} ${_v92.bokehTheme.space[3]}`,
          children: [(0, _v7.jsx)(_v125.Text, {
            variant: "heading-sm",
            color: "text-primary",
            children: _v8
          }), (0, _v7.jsx)(_v121.CloseButton, {
            "aria-label": _v37.closeInteractionPanelAriaLabel,
            onClick: _v23
          })]
        }), [_v8, _v23]),
        _v27 = (0, _v9.useCallback)(_v0 => {
          let _v1 = _v12 ? {
            "[class*='widget-auto'], [class*='widget-auto-main'], [class*='sidebar'], [class*='content-wrapper']": {
              width: "fit-content !important",
              maxWidth: "100% !important"
            }
          } : {
            flex: "1 1 auto",
            minHeight: 0,
            "& > div": {
              flex: "1 1 auto",
              minHeight: 0,
              width: "100%",
              height: "100%"
            }
          };
          return (0, _v7.jsx)(_v120.Box, {
            sx: {
              position: "relative",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              ..._v142,
              ..._v1
            },
            children: _v0
          });
        }, [_v12]),
        _v28 = (0, _v9.useCallback)((_v0, _v1, _v2 = !0) => (0, _v7.jsxs)(_v120.Box, {
          display: _v2 ? "flex" : "none",
          flexDirection: "column",
          flex: !_v1 && _v12 ? "0 0 auto" : "1 1 auto",
          minWidth: 0,
          width: _v1 ? "100%" : (0, _v124.rem)(_v10),
          height: !_v1 && _v12 ? "auto" : "100%",
          overflow: "hidden",
          backgroundColor: "var(--vimeo-colors-surface)",
          border: "0.5px solid var(--vimeo-colors-stroke)",
          borderRadius: _v1 ? "xl" : "lg",
          boxShadow: _v1 ? "0 8px 40px var(--vimeo-colors-modal-shadow)" : void 0,
          children: [_v8 ? _v26() : null, _v27(_v0)]
        }), [_v8, _v10, _v12, _v27, _v26]),
        _v29 = (0, _v9.useCallback)(_v0 => _v1 ? (0, _v7.jsx)(_v120.Box, {
          display: "flex",
          flexDirection: "column",
          width: "100%",
          minHeight: (0, _v124.rem)(320),
          overflow: "hidden",
          backgroundColor: "var(--vimeo-colors-surface)",
          border: "0.5px solid var(--vimeo-colors-stroke)",
          borderRadius: "xl",
          children: _v27(_v0)
        }) : (0, _v7.jsx)(_v122.Flex, {
          sx: {
            ..._v141,
            zIndex: 5,
            position: "sticky",
            top: (0, _v124.rem)(80),
            alignSelf: "flex-start",
            width: (0, _v124.rem)(272),
            height: `calc(100vh - ${(0, _v124.rem)(96)})`
          },
          children: _v28(_v0, !1, !0)
        }), [_v1, _v27, _v28]);
      if (!_v17) return _v19 ? (0, _v7.jsx)(_v7.Fragment, {
        children: _v29(_v0)
      }) : null;
      let _v30 = (0, _v7.jsx)(_v136, {
        isPanelOpen: _v20,
        onItemClick: _v22,
        onClosePanel: _v23,
        onActiveModuleChange: _v24
      });
      if (_v1) {
        let _v0 = "u" > typeof document ? (0, _v119.createPortal)((0, _v7.jsx)(_v120.Box, {
          sx: {
            position: "fixed",
            left: _v92.bokehTheme.space[3],
            right: _v92.bokehTheme.space[3],
            bottom: `calc(env(safe-area-inset-bottom) + ${_v92.bokehTheme.space[3]})`,
            marginInline: "auto",
            width: "fit-content",
            maxWidth: `calc(100% - ${_v92.bokehTheme.space[3]} * 2)`,
            zIndex: 180,
            display: "flex",
            overflowX: "auto",
            paddingX: _v92.bokehTheme.space[1],
            paddingY: _v92.bokehTheme.space[1],
            backgroundColor: "var(--vimeo-colors-surface)",
            borderRadius: (0, _v124.rem)(24),
            boxShadow: _v140,
            "&::-webkit-scrollbar": {
              display: "none"
            },
            scrollbarWidth: "none"
          },
          children: (0, _v7.jsx)(_v136, {
            isHorizontal: !0,
            isFloating: !0,
            isPanelOpen: _v20,
            onItemClick: _v22,
            onClosePanel: _v23,
            onActiveModuleChange: _v24
          })
        }), document.body) : null;
        if (_v16) {
          let _v0 = "u" > typeof document ? (0, _v119.createPortal)((0, _v7.jsxs)(_v7.Fragment, {
            children: [_v20 && (0, _v7.jsx)(_v120.Box, {
              as: "button",
              type: "button",
              "aria-label": _v37.closeInteractionPanelAriaLabel,
              onClick: _v4,
              sx: {
                position: "fixed",
                inset: 0,
                zIndex: 170,
                border: "none",
                padding: 0,
                cursor: "default",
                background: "transparent"
              }
            }), (0, _v7.jsx)(_v120.Box, {
              sx: {
                position: "fixed",
                left: _v92.bokehTheme.space[3],
                right: _v92.bokehTheme.space[3],
                bottom: `calc(env(safe-area-inset-bottom) + ${_v92.bokehTheme.space[3]} + 76px + ${_v92.bokehTheme.space[2]})`,
                marginInline: "auto",
                width: "fit-content",
                maxWidth: `calc(100% - ${_v92.bokehTheme.space[3]} * 2)`,
                zIndex: 185,
                opacity: +!!_v20,
                pointerEvents: _v20 ? "auto" : "none",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                backgroundColor: "var(--vimeo-colors-surface)",
                borderRadius: _v92.bokehTheme.radii.xl,
                boxShadow: _v140
              },
              children: _v27(_v0)
            })]
          }), document.body) : null;
          return (0, _v7.jsxs)(_v7.Fragment, {
            children: [_v0, _v0]
          });
        }
        let _v1 = "u" > typeof document ? (0, _v119.createPortal)((0, _v7.jsxs)(_v7.Fragment, {
          children: [_v20 && (0, _v7.jsx)(_v120.Box, {
            as: "button",
            type: "button",
            "aria-label": _v37.closeInteractionPanelAriaLabel,
            onClick: _v4,
            sx: {
              position: "fixed",
              inset: 0,
              zIndex: 190,
              border: "none",
              padding: 0,
              cursor: "pointer",
              background: "var(--vimeo-colors-fill-page-overlay)"
            }
          }), (0, _v7.jsxs)(_v120.Box, {
            sx: {
              position: "fixed",
              left: 0,
              right: 0,
              bottom: 0,
              height: "60vh",
              zIndex: 201,
              opacity: +!!_v20,
              pointerEvents: _v20 ? "auto" : "none",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              backgroundColor: "var(--vimeo-colors-surface)",
              borderTopLeftRadius: _v92.bokehTheme.radii.xl,
              borderTopRightRadius: _v92.bokehTheme.radii.xl,
              boxShadow: "0px 4px 32px var(--vimeo-colors-popover-shadow), 0 0 0 0.5px var(--vimeo-colors-popover-border)"
            },
            children: [(0, _v7.jsx)(_v122.Flex, {
              justifyContent: "center",
              alignItems: "center",
              flexShrink: 0,
              width: "100%",
              paddingTop: (0, _v124.rem)(6),
              children: (0, _v7.jsx)(_v120.Box, {
                width: (0, _v124.rem)(50),
                height: (0, _v124.rem)(4),
                borderRadius: _v92.bokehTheme.radii["3xl"],
                backgroundColor: "var(--vimeo-colors-stroke)"
              })
            }), _v8 ? (0, _v7.jsxs)(_v122.Flex, {
              alignItems: "center",
              gap: (0, _v124.rem)(4),
              flexShrink: 0,
              paddingTop: _v92.bokehTheme.space.md,
              paddingBottom: _v92.bokehTheme.space.sm,
              paddingX: _v92.bokehTheme.space.lg,
              children: [(0, _v7.jsx)(_v125.Text, {
                variant: "heading-md",
                color: "text-primary",
                sx: {
                  flex: "1 1 auto",
                  minWidth: 0,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap"
                },
                children: _v8
              }), (0, _v7.jsx)(_v123.IconButton, {
                "aria-label": _v37.closeInteractionPanelAriaLabel,
                icon: (0, _v7.jsx)(_v126.CloseX, {}),
                variant: "tertiary",
                size: "md",
                onClick: _v23
              })]
            }) : null, _v27(_v0)]
          })]
        }), document.body) : null;
        return (0, _v7.jsxs)(_v7.Fragment, {
          children: [_v0, _v1]
        });
      }
      return (0, _v7.jsxs)(_v122.Flex, {
        sx: {
          ..._v141,
          zIndex: 5,
          position: "sticky",
          top: (0, _v124.rem)(80),
          alignSelf: "flex-start",
          alignItems: _v12 ? "center" : _v141.alignItems,
          width: (0, _v124.rem)(_v20 ? _v10 + 80 : 80),
          height: `calc(100vh - ${(0, _v124.rem)(96)})`
        },
        children: [_v28(_v0, !1, _v20), _v30]
      });
    }),
    _v144 = (0, _v9.memo)(function ({
      isChatAvailable: _v0 = !1,
      isPanelExpanded: _v1 = !1,
      isChatSheetView: _v2 = !1,
      onOpen: _v3,
      onClose: _v4,
      onPanelOpenChange: _v5
    }) {
      let {
          eventId: _v6,
          eventHash: _v7,
          password: _v8,
          eventData: _v9
        } = _v73(),
        _v10 = _v128.EComposerSessionType.LIVE_EVENT,
        _v11 = !!_v9?.hasRegistration,
        _v12 = (0, _v9.useMemo)(() => {
          let _v0 = window.innerHeight - 96;
          return _v2 ? .6 * window.innerHeight : _v0;
        }, [_v2]),
        _v13 = (0, _v9.useCallback)(() => {}, []),
        _v14 = (0, _v9.useCallback)(_v0 => (0, _v7.jsx)(_v143, {
          application: _v0,
          isChatSheetView: _v2,
          isPanelExpanded: _v1,
          onOpen: _v3,
          onClose: _v4,
          onPanelOpenChange: _v5
        }), [_v2, _v1, _v3, _v4, _v5]);
      return _v0 ? (0, _v7.jsx)(_v138.InteractionToolsRegistrantObserver, {
        isActive: _v11,
        sessionId: _v6,
        children: (0, _v7.jsx)(_v137.InteractionToolsEntry, {
          isStandalone: !0,
          isCustomThemeEnabled: !0,
          isFooterEnabled: !1,
          isManagementDisabled: !0,
          isCollapsibleSignIn: !1,
          isActiveStatusObservingEnabled: !1,
          isBypassStatusObservingEnabled: !0,
          sessionType: _v10,
          sessionId: _v6,
          roomHashedPassword: _v8,
          roomUnlistedHash: _v7,
          backgroundColor: "surface",
          toolbarAttachPosition: _v127.ESidebarAttach.TOP,
          toolbarPanelIsFluid: !0,
          toolbarPanelMaxSize: _v12,
          toolbarPanelOnToggleExtend: _v13,
          renderApplicationShell: _v14
        })
      }) : null;
    });
  var _v145 = _v0.i(0),
    _v146 = _v0.i(0),
    _v147 = _v0.i(0),
    _v148 = _v0.i(0),
    _v149 = _v0.i(0),
    _v150 = _v0.i(0),
    _v151 = _v0.i(0),
    _v152 = _v0.i(0),
    _v153 = _v0.i(0),
    _v154 = _v0.i(0),
    _v155 = _v0.i(0),
    _v156 = _v0.i(0);
  (_v3 = {}).VISIT_SVV_RECIPIENT = "workflow.visit_svv_recipient", _v3.CLICK_JOIN_VIMEO = "workflow.click_join_vimeo", _v3.LIVE_SVVR_PLAYER = "vimeo.live_svvr_player", (_v4 = {}).SVV_RECIPIENT_HEADER = "svv recipient header", _v4.BASIC_HEADER = "basic header";
  let _v157 = {
      ..._v108.nullVideoContextData,
      ..._v108.nullTeamContext,
      ..._v108.nullUploadContextData
    },
    _v158 = (_v0, _v1, _v2 = {}, _v3 = _v157) => ({
      eventName: _v0,
      version: _v1,
      fields: _v2,
      defaultEventFields: _v3
    }),
    _v159 = () => _v158("workflow.click_join_vimeo", 3, {
      location: "svv recipient header"
    }),
    _v160 = () => _v158("workflow.click_join_vimeo", 3, {
      location: "basic header"
    }),
    _v161 = _v0 => {
      _v155.BigPictureClient.sendEvent(new _v155.Event("vimeo.auth_flow_action", 11, {
        event_name: `click_${_v0}`,
        auth_type: _v0,
        action_type: "trigger",
        is_final_action: !1,
        location: "join" === _v0 ? "svv_recipient_live_header" : "svv_recipient_live_player",
        copy: "join" === _v0 ? "join_vimeo" : "log_in",
        target: null,
        target_path: null,
        feature: "reg_flow",
        ...(0, _v156.getCommonAttributesV2)(),
        interface_version: null,
        interface_type: null
      }));
    },
    _v162 = (0, _v145.default)(async () => ({
      default: (await _v0.A(0)).AccountMenuWithModals
    }), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v163 = ({
      setTeamAccentColor: _v0
    }) => {
      let _v1 = (0, _v9.useContext)(_v30.ViewerContext),
        {
          eventData: _v2,
          shouldShowJoinCTA: _v3
        } = _v73(),
        {
          user: _v4,
          landingPageLogo: _v5
        } = _v2,
        _v6 = _v4.account === _v154.AccountType.Basic,
        _v7 = _v4.uri,
        _v8 = (0, _v109.useAnalyticsEvent)(),
        {
          data: _v9,
          loading: _v10
        } = (0, _v147.useQuery)(`${_v7}/team`, {
          variables: {
            fields: _v62
          }
        });
      if ((0, _v9.useEffect)(() => {
        _v9?.accentColor && _v0 && _v0(_v9.accentColor);
      }, [_v9?.accentColor, _v0]), _v6) return (0, _v7.jsx)(_v165, {
        children: (0, _v7.jsx)(_v151.Header, {
          clickJoinAnalyticsEvent: () => _v8(_v160())
        })
      });
      let _v11 = _v9?.pictures?.sizes,
        _v12 = _v11?.length ? _v11.length - 1 : 0;
      return (0, _v7.jsxs)(_v164, {
        children: [(0, _v7.jsx)(_v153.HeaderLeftContent, {
          children: _v5 ? (0, _v7.jsx)(_v149.Navigation.Logo, {
            customLogoUrl: _v5.url,
            type: _v5.type
          }) : !_v10 && (0, _v7.jsx)(_v152.default, {
            teamLogoUrl: _v9?.pictures?.sizes?.[_v12]?.link,
            teamName: _v9?.teamName
          })
        }), (0, _v7.jsx)(_v153.HeaderRightContent, {
          children: _v1?.user ? (0, _v7.jsx)(_v9.Suspense, {
            fallback: (0, _v7.jsx)(_v146.Spinner, {
              size: "sm"
            }),
            children: (0, _v7.jsx)(_v162, {})
          }) : _v3 ? (0, _v7.jsx)(_v16.ThemeProvider, {
            theme: _v148.themes.light,
            children: (0, _v7.jsx)(_v150.LoginJoinModal, {
              type: "join",
              xsrft: _v1?.xsrft || "",
              onSuccess: _v67,
              children: _v0 => (0, _v7.jsx)(_v153.HeaderButton, {
                id: "join-vimeo",
                color: _v9?.accentColor,
                element: "button",
                onClick: () => {
                  _v0(), _v8(_v159()), _v161("join");
                },
                children: _v37.joinVimeoCaption
              })
            })
          }) : null
        })]
      });
    },
    _v164 = (0, _v16.default)(_v153.HeaderMinimalWrapper).withConfig({
      displayName: "EventRecipientHeader__StyledHeaderContainer",
      componentId: "sc-6000146d-0"
    })`
  z-index: ${({
      isEditingMode: _v0
    }) => _v0 ? "auto" : "15"};
  background: var(--vimeo-colors-background-blur);
  backdrop-filter: blur(${(0, _v124.rem)(50)});
  color: ${({
      theme: _v0
    }) => _v0.additions.content.color};
  position: sticky;
  top: 0;
  border-bottom: none;
`,
    _v165 = _v16.default.div.withConfig({
      displayName: "EventRecipientHeader__AppShellNavContainer",
      componentId: "sc-6000146d-1"
    })`
  position: absolute;
  width: 100%;
  z-index: 3;
  @media screen and (min-width: ${(0, _v124.rem)(769)}) {
    /**
     * The LoginJoinModal is nested inside the Header component which has a z-index of 14.
     * We need to increase the z-index a bit so the player trackbar doesn't sit on top of the modal.
     */
    z-index: 15;
  }
`;
  var _v166 = _v0.i(0),
    _v167 = _v0.i(0),
    _v168 = _v0.i(0),
    _v169 = _v0.i(0),
    _v170 = _v0.i(0),
    _v171 = _v0.i(0);
  let _v172 = _v16.createGlobalStyle`
  body {
    overflow-y: visible;
  }
`,
    _v173 = _v16.default.div.withConfig({
      displayName: "Layout__PageContainer",
      componentId: "sc-8e9ba6d2-0"
    })`
  background: var(--vimeo-colors-background);
  color: var(--vimeo-colors-text-primary);
  display: flex;
  flex-flow: row nowrap;
  position: relative;
`,
    _v174 = _v16.default.div.withConfig({
      displayName: "Layout__PageContainerContent",
      componentId: "sc-8e9ba6d2-1"
    })`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  min-height: 100vh;
  position: relative;
`,
    _v175 = _v16.default.div.withConfig({
      displayName: "Layout__ContentContainer",
      componentId: "sc-8e9ba6d2-2"
    })`
  display: flex;
  justify-content: center;
  gap: ${_v92.bokehTheme.space.xl};
  padding: ${_v92.bokehTheme.space.md} ${_v92.bokehTheme.space.lg} ${_v92.bokehTheme.space.xl};

  ${({
      isMobile: _v0,
      isPortrait: _v1
    }) => `
      flex-direction: ${_v0 && _v1 ? "column" : "row"};
      ${_v0 ? `height: calc(100vh - ${(0, _v31.rem)(63)}); overflow: auto; padding: 0 0 calc(${(0, _v31.rem)(100)} + env(safe-area-inset-bottom));` : "height: auto;"}
    `}
`,
    _v176 = _v16.default.div.withConfig({
      displayName: "Layout__MainContentContainer",
      componentId: "sc-8e9ba6d2-3"
    })`
  display: flex;
  position: relative;

  ${({
      isMobile: _v0,
      isPortrait: _v1,
      isChatOpen: _v2
    }) => _v0 ? _v16.css`
          flex-direction: column;
          justify-content: flex-start;
          flex: 1 0 auto;
          min-height: 100%;
          height: 100%;
          flex-shrink: ${+!_v1};
          overflow: auto;
        ` : _v16.css`
          flex-direction: column;
          flex: 1 1 auto;
          /* With chat open the main column grows with the row; without chat cap width for readability. */
          max-width: ${_v2 ? "none" : (0, _v31.rem)(0)};
          align-items: stretch;
          height: auto;
          overflow: visible;
        `}
`,
    _v177 = _v16.default.div.withConfig({
      displayName: "Layout__EmbedContainer",
      componentId: "sc-8e9ba6d2-4"
    })`
  display: flex;
  flex-flow: column nowrap;
  flex: 0 1 auto;
  align-items: center;
  width: 100%;
  transition: max-width 0.2s ease-out;

  background-color: var(--vimeo-colors-surface);
  border-radius: ${_v92.bokehTheme.radii["2xl"]};

  ${({
      isMobile: _v0,
      isPortrait: _v1
    }) => _v0 ? _v16.css`
          margin: ${_v92.bokehTheme.space.md} ${_v92.bokehTheme.space.xs};
          width: calc(100% - ${_v92.bokehTheme.space.xs} * 2);
          height: fit-content;
          max-width: ${_v1 ? `calc(100% - ${_v92.bokehTheme.space.xs} * 2)` : `calc((100vh - ${(0, _v31.rem)(64)}) / 0.5625)`};
          padding: ${_v92.bokehTheme.space["2xl"]} ${_v92.bokehTheme.space.lg} ${_v92.bokehTheme.space.lg};
          gap: ${_v92.bokehTheme.space["2xl"]};
        ` : _v16.css`
          width: 100%;
          padding: ${_v92.bokehTheme.space["2xl"]} ${_v92.bokehTheme.space["3xl"]};
          gap: ${_v92.bokehTheme.space["2xl"]};
        `};
`,
    _v178 = _v16.default.div.withConfig({
      displayName: "Layout__TitleAndDescription",
      componentId: "sc-8e9ba6d2-5"
    })`
  width: ${({
      isFullWidth: _v0
    }) => _v0 ? "100%" : `calc(100% - ${(0, _v31.rem)(80)})`};
  display: flex;
  flex-direction: column;
  gap: ${_v92.bokehTheme.space.lg};

  @media screen and (min-width: ${(0, _v31.rem)(769)}) {
    width: 100%;
    align-self: flex-start;
  }

  @media screen and (max-width: ${(0, _v31.rem)(480)}) {
    width: 100%;
  }
`,
    _v179 = _v16.default.div.withConfig({
      displayName: "Layout__EventTimeRow",
      componentId: "sc-8e9ba6d2-6"
    })`
  display: flex;
  gap: ${_v92.bokehTheme.space.lg};
  align-items: flex-start;
  flex-wrap: wrap;
`,
    _v180 = _v16.default.div.withConfig({
      displayName: "Layout__EventDescription",
      componentId: "sc-8e9ba6d2-7"
    })`
  display: flex;
  flex-direction: column;
  gap: ${_v92.bokehTheme.space.lg};
  width: 100%;

  @media screen and (max-width: ${(0, _v31.rem)(769)}) {
    gap: ${_v92.bokehTheme.space.md};
  }

  /*
   * Title and Description render via EditableText, which paints its own
   * background (content.background) for the editable state. These are read-only
   * here and sit on the banner surface, so the background must be transparent —
   * otherwise it shows as a mismatched rectangle (most visible in dark mode).
   */
  [class*='EditableText__JustText'] {
    background: transparent;
  }
`,
    _v181 = _v16.default.div.withConfig({
      displayName: "Layout__EventTimePill",
      componentId: "sc-8e9ba6d2-8"
    })`
  display: flex;
  align-items: center;
  gap: ${_v92.bokehTheme.space.sm};
  padding: ${_v92.bokehTheme.space.xs} ${_v92.bokehTheme.space.sm};
  border-radius: ${_v92.bokehTheme.radii.sm};
  background-color: var(--vimeo-colors-fill-component);
  color: var(--vimeo-colors-text-secondary);
  white-space: nowrap;

  svg {
    width: ${(0, _v31.rem)(20)};
    height: ${(0, _v31.rem)(20)};
  }
`,
    _v182 = _v16.default.span.withConfig({
      displayName: "Layout__EventTimeLabel",
      componentId: "sc-8e9ba6d2-9"
    })`
  font-family: ${_v92.bokehTheme.fonts.body};
  font-size: ${_v92.bokehTheme.fontSizes["body-md"]};
  font-weight: ${_v92.bokehTheme.fontWeights.regular};
  line-height: ${_v92.bokehTheme.lineHeights["body-md"]};
  letter-spacing: ${_v92.bokehTheme.letterSpacings["body-md"]};
  color: var(--vimeo-colors-text-secondary);
`,
    _v183 = (0, _v16.default)(_v99).withConfig({
      displayName: "Layout__Title",
      componentId: "sc-8e9ba6d2-10"
    })`
  font-family: ${_v92.bokehTheme.fonts.heading};
  font-size: ${_v92.bokehTheme.fontSizes["heading-2xl"]};
  font-weight: ${_v92.bokehTheme.fontWeights.medium};
  line-height: ${_v92.bokehTheme.lineHeights["heading-2xl"]};
  letter-spacing: ${_v92.bokehTheme.letterSpacings["heading-2xl"]};
  color: var(--vimeo-colors-text-primary);
  padding: ${(0, _v31.rem)(5)};
  hyphens: auto;
  background: transparent;

  @media screen and (max-width: ${(0, _v31.rem)(769)}) {
    font-size: ${_v92.bokehTheme.fontSizes["heading-lg"]};
    line-height: ${_v92.bokehTheme.lineHeights["heading-lg"]};
    letter-spacing: ${_v92.bokehTheme.letterSpacings["heading-lg"]};
  }
`,
    _v184 = _v16.default.div.withConfig({
      displayName: "Layout__BorderContainer",
      componentId: "sc-8e9ba6d2-11"
    })`
  border: none;
`,
    _v185 = _v16.default.div.withConfig({
      displayName: "Layout__FooterWrapper",
      componentId: "sc-8e9ba6d2-12"
    })`
  margin-top: ${_v92.bokehTheme.space.xl};
  width: 100%;

  > div {
    position: static !important;
    bottom: auto !important;
    background: transparent;
  }
`,
    _v186 = _v16.default.div.withConfig({
      displayName: "Layout__Inner",
      componentId: "sc-8e9ba6d2-13"
    })`
  z-index: ${({
      isCommentsShowing: _v0
    }) => _v0 ? "auto" : 2};
  transition: transform 300ms;
  transform-origin: top;
  ${({
      scaleup: _v0
    }) => _v0 && "transform: scale(1.05)"};
`,
    _v187 = _v16.default.div.withConfig({
      displayName: "Layout__ResponsiveContainer",
      componentId: "sc-8e9ba6d2-14"
    })`
  min-width: ${(0, _v31.rem)(240)};
  width: 100%;
  overflow: hidden;
  height: fit-content;
  flex-shrink: 0;
  ${({
      isMobile: _v0,
      isPortrait: _v1
    }) => _v16.css`
    max-width: ${_v0 && !_v1 ? `calc((100vh - ${(0, _v31.rem)(64)}) / 0.5625)` : "calc(50vh / 0.5625)"};
    margin: 0 auto;

    @media screen and (min-width: ${(0, _v31.rem)(769)}) {
      max-width: calc(
        (100vh - ${(0, _v31.rem)(_v0 ? _v1 ? 264 : 64 : 264)}) /
          ${.5625}
      );
      padding-top: ${_v0 ? _v1 ? (0, _v31.rem)(8) : 0 : (0, _v31.rem)(8)};
    }
  `};

  ${_v186} {
    position: relative;
    background-color: black;
    ${({
      roundedCorners: _v0
    }) => _v0 && _v16.css`
        border-radius: ${_v92.bokehTheme.radii.sm};
        overflow: hidden;
        /* iframes don't always honor a parent's border-radius + overflow alone,
         * so round the player container and the iframe itself too. */
        > div,
        iframe {
          border-radius: inherit;
        }
      `}
    > div {
      position: absolute;
    }
    height: 0;
    width: 100%;
    padding-bottom: ${56.25}%;
  }
`,
    _v188 = _v16.default.div.withConfig({
      displayName: "Layout__EventInfoContainer",
      componentId: "sc-8e9ba6d2-15"
    })`
  flex-direction: column;
  display: flex;
  width: 100%;

  ${({
      paddingEnabled: _v0,
      isMobile: _v1,
      isPortrait: _v2
    }) => _v1 ? _v16.css`
          margin-top: 0;
          padding-bottom: ${_v0 ? (0, _v31.rem)(48) : 0};
          max-width: ${!_v2 ? `calc((100vh - ${(0, _v31.rem)(64)}) / 0.5625)` : "calc(50vh / 0.5625)"};

          @media screen and (min-width: ${(0, _v31.rem)(769)}) {
            max-width: calc(
              (100vh - ${(0, _v31.rem)(_v2 ? 264 : 64)}) /
                ${.5625}
            );
          }
        ` : _v16.css`
          margin-top: 0;
          padding-bottom: ${_v0 ? (0, _v31.rem)(48) : 0};
          max-width: none;
        `}
`;
  (0, _v16.default)(_v169.Notification).withConfig({
    displayName: "Layout__Notification",
    componentId: "sc-8e9ba6d2-16"
  })`
  background: ${({
    theme: _v0
  }) => _v0.element.bg2};
`;
  let _v189 = _v16.default.div.withConfig({
      displayName: "Layout__MatureContainer",
      componentId: "sc-8e9ba6d2-17"
    })`
  position: relative;
  background: black;
  width: 100%;
  min-width: ${(0, _v31.rem)(240)};
  max-width: calc(50vh / ${.5625});
  margin: 0 auto;
  height: 0;
  padding-bottom: ${56.25}%;

  @media screen and (min-width: ${(0, _v31.rem)(769)}) {
    width: calc((100vh - ${(0, _v31.rem)(264)}) / ${.5625});
    max-width: 100%;
    padding-top: ${(0, _v31.rem)(8)};
  }
`,
    _v190 = _v16.default.div.withConfig({
      displayName: "Layout__InnerContainer",
      componentId: "sc-8e9ba6d2-18"
    })`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;

  button {
    font-size: ${(0, _v31.rem)(16)};
  }
`,
    _v191 = (0, _v16.default)(_v171.Paragraph).withConfig({
      displayName: "Layout__Caption",
      componentId: "sc-8e9ba6d2-19"
    })`
  font-size: ${(0, _v31.rem)(16)};
  margin-bottom: ${(0, _v31.rem)(25)};
  color: white;
`,
    _v192 = _v16.default.div.withConfig({
      displayName: "Layout__AdvertisingLabelWrapper",
      componentId: "sc-8e9ba6d2-20"
    })`
  display: flex;
  align-items: center;
  padding: ${(0, _v31.rem)(5)};
`,
    _v193 = _v16.default.span.withConfig({
      displayName: "Layout__AdvertisingLabel",
      componentId: "sc-8e9ba6d2-21"
    })`
  padding-top: ${(0, _v31.rem)(1)};
  font-size: ${(0, _v31.rem)(12)};
  line-height: ${(0, _v31.rem)(15)};
  font-weight: 500;
  color: #496073;
`,
    _v194 = (0, _v16.default)(_v170.CircleInfoSmall).withConfig({
      displayName: "Layout__InfoIcon",
      componentId: "sc-8e9ba6d2-22"
    })`
  width: ${(0, _v31.rem)(24)};
  height: ${(0, _v31.rem)(24)};
`;
  function _v195() {
    return (_v195 = Object.assign.bind()).apply(null, arguments);
  }
  _v16.default.div.withConfig({
    displayName: "Layout__LeadCaptureLoading",
    componentId: "sc-8e9ba6d2-23"
  })`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
  let _v196 = function (_v0) {
    return _v9.createElement("svg", _v195({
      viewBox: "0 0 20 20",
      xmlns: "http://www.w3.org/2000/svg"
    }, _v0), _v5 || (_v5 = _v9.createElement("path", {
      d: "M15 4L7 9.3V4H5v12h2v-5.3l8 5.3z",
      fill: "#fff"
    })));
  };
  function _v197() {
    return (_v197 = Object.assign.bind()).apply(null, arguments);
  }
  let _v198 = function (_v0) {
      return _v9.createElement("svg", _v197({
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24"
      }, _v0), _v6 || (_v6 = _v9.createElement("path", {
        d: "M12 15.5a1 1 0 01-.67-.26l-5-4.5 1.34-1.48L12 13.15l4.33-3.9 1.34 1.49-5 4.5a1 1 0 01-.67.26z",
        fill: "#fff"
      })));
    },
    _v199 = _v16.default.div.withConfig({
      displayName: "PlaylistPlayBar__PlayBarWrapper",
      componentId: "sc-2bc51816-0"
    })`
  padding: ${(0, _v31.rem)(4)};
  height: 36px;
  width: 100%;
  display: flex;
  align-items: center;
`,
    _v200 = (0, _v16.default)(_v35.Header).withConfig({
      displayName: "PlaylistPlayBar__PlayBarText",
      componentId: "sc-2bc51816-1"
    })`
  margin: 0 0 0 ${(0, _v31.rem)(20)};
  font-size: ${(0, _v31.rem)(14)};
  white-space: nowrap;
  font-weight: normal;
  line-height: 1.25;
  letter-spacing: ${(0, _v31.rem)(.2)};
`,
    _v201 = (0, _v16.default)(_v200).withConfig({
      displayName: "PlaylistPlayBar__ClipIndexLabel",
      componentId: "sc-2bc51816-2"
    })`
  color: ${_v92.bokehTheme.colors.gray["300"]};
`,
    _v202 = _v16.default.div.withConfig({
      displayName: "PlaylistPlayBar__TextSection",
      componentId: "sc-2bc51816-3"
    })`
  width: 75%;
  display: flex;
  flex-direction: row;
  align-items: center;
`,
    _v203 = (0, _v16.default)(_v200).withConfig({
      displayName: "PlaylistPlayBar__ClipNameLabel",
      componentId: "sc-2bc51816-4"
    })`
  margin: 0;
  color: rgb(255, 255, 255);
  text-overflow: ellipsis;
  overflow: hidden;
  width: 65%;
`,
    _v204 = (0, _v16.default)(_v34.Button).withConfig({
      displayName: "PlaylistPlayBar__ExpandButton",
      componentId: "sc-2bc51816-5"
    })`
  padding: 0;
  width: ${(0, _v31.rem)(24)};
  height: ${(0, _v31.rem)(24)};
  svg {
    width: 100%;
    height: 100%;
    transition: transform 0.2s ease-in-out;
    transform-origin: center;
    ${_v0 => _v0.isExpanded && "transform: rotate(180deg);"}
  }
`,
    _v205 = _v16.default.div.withConfig({
      displayName: "PlaylistPlayBar__Navigation",
      componentId: "sc-2bc51816-6"
    })`
  display: flex;
  margin-right: ${(0, _v31.rem)(12)};
`,
    _v206 = (0, _v16.default)(_v196).withConfig({
      displayName: "PlaylistPlayBar__RightArrowIcon",
      componentId: "sc-2bc51816-7"
    })`
  transform: rotate(180deg);
`,
    _v207 = (0, _v16.default)(_v34.Button).withConfig({
      displayName: "PlaylistPlayBar__NavigationButton",
      componentId: "sc-2bc51816-8"
    })`
  width: ${(0, _v31.rem)(20)};
  height: ${(0, _v31.rem)(20)};
  padding: 0;
  svg {
    width: 80%;
    height: 80%;
  }
`,
    _v208 = _v16.default.div.withConfig({
      displayName: "PlaylistPlayBar__LiveIndicator",
      componentId: "sc-2bc51816-9"
    })`
  margin: 0 ${(0, _v31.rem)(8)};
  width: ${(0, _v31.rem)(8)};
  height: ${(0, _v31.rem)(8)};
  border-radius: 50%;
  background-color: ${({
      isLive: _v0
    }) => _v0 ? _v92.bokehTheme.colors.red["500"] : "transparent"};
`;
  function _v209({
    items: _v0,
    activeClip: _v1,
    isExpanded: _v2,
    isLive: _v3,
    onExpandToggled: _v4,
    onClipSwitch: _v5,
    canSwitchClip: _v6
  }) {
    let {
        name: _v7,
        uri: _v8
      } = _v1,
      _v9 = _v0.findIndex(_v0 => _v0.uri === _v8),
      _v10 = _v37.clipIndexText(_v9, _v0.length),
      _v11 = _v37.totalClipsCountText(_v0.length);
    return (0, _v7.jsxs)(_v199, {
      children: [(0, _v7.jsx)(_v204, {
        isExpanded: _v2,
        variant: "minimalTransparent",
        onClick: _v4,
        format: "secondary",
        size: "xs",
        icon: (0, _v7.jsx)(_v198, {})
      }), (0, _v7.jsxs)(_v202, {
        children: [(0, _v7.jsx)(_v201, {
          children: _v2 ? _v11 : _v10
        }), !_v2 && (0, _v7.jsxs)(_v7.Fragment, {
          children: [(0, _v7.jsx)(_v208, {
            isLive: _v3
          }), (0, _v7.jsx)(_v203, {
            children: _v7
          })]
        })]
      }), (0, _v7.jsxs)(_v205, {
        children: [(0, _v7.jsx)(_v207, {
          size: "xs",
          variant: "minimalTransparent",
          format: "secondary",
          disabled: !_v6 || _v9 < 1,
          onClick: () => _v5(_v0[_v9 - 1]),
          icon: (0, _v7.jsx)(_v196, {})
        }), (0, _v7.jsx)(_v207, {
          size: "xs",
          variant: "minimalTransparent",
          format: "secondary",
          disabled: !_v6 || _v9 + 1 >= _v0.length,
          onClick: () => _v5(_v0[_v9 + 1]),
          icon: (0, _v7.jsx)(_v206, {})
        })]
      })]
    });
  }
  let _v210 = _v16.default.div.withConfig({
      displayName: "ThumbnailGrid__Container",
      componentId: "sc-7c440263-0"
    })`
  width: 100%;
  height: 100%;
  display: flex;
`,
    _v211 = _v16.default.div.withConfig({
      displayName: "ThumbnailGrid__PrimaryWrapper",
      componentId: "sc-7c440263-1"
    })`
  width: 100%;
  height: 100%;
`,
    _v212 = _v16.default.div.withConfig({
      displayName: "ThumbnailGrid__StackContainer",
      componentId: "sc-7c440263-2"
    })`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`,
    _v213 = _v16.default.div.withConfig({
      displayName: "ThumbnailGrid__Thumbnail",
      componentId: "sc-7c440263-3"
    })`
  background-image: url(${_v0 => _v0.src});
  width: 100%;
  height: 100%;
  border: solid ${(0, _v31.rem)(1)} ${_v92.bokehTheme.colors.gray["700"]};
  border-radius: ${(0, _v31.rem)(2)};
  background-position: center;
  background-size: cover;
`;
  function _v214({
    items: _v0
  }) {
    let _v1 = _v0 => {
      let _v1 = (0, _v64.default)(_v0[_v0]?.pictures?.sizes);
      return _v1 || (_v1 = (0, _v63.default)(_v0[0]?.pictures?.sizes)), _v1 ? (0, _v7.jsx)(_v213, {
        src: _v1.link
      }) : null;
    };
    return (0, _v7.jsxs)(_v210, {
      children: [(0, _v7.jsx)(_v211, {
        children: _v1(1)
      }), _v0.length > 1 && (0, _v7.jsxs)(_v212, {
        children: [_v1(2), _v1(3)]
      })]
    });
  }
  let _v215 = _v16.default.span.withConfig({
    displayName: "LiveNowBadge__LiveNowBadgeContainer",
    componentId: "sc-ce84f7b8-0"
  })`
  color: ${_v92.bokehTheme.colors.white};
  background: ${_v92.bokehTheme.colors.red["500"]};
  font-weight: 500;
  vertical-align: top;
  padding: ${(0, _v31.rem)(2)} ${(0, _v31.rem)(8)};
  border-radius: ${(0, _v31.rem)(2)};
  font-size: ${(0, _v31.rem)(14)};

  svg {
    margin-right: ${(0, _v31.rem)(4)};
    fill: ${_v92.bokehTheme.colors.white};
  }
`;
  function _v216() {
    return (0, _v7.jsxs)(_v215, {
      children: [(0, _v7.jsx)("svg", {
        viewBox: "0 0 20 20",
        width: "10",
        height: "10",
        children: (0, _v7.jsx)("circle", {
          cx: "10",
          cy: "10",
          r: "10"
        })
      }), "LIVE NOW"]
    });
  }
  var _v217 = _v0.i(0),
    _v218 = _v0.i(0);
  let _v219 = _v16.default.div.withConfig({
      displayName: "LiveThumbnail__Thumbnail",
      componentId: "sc-9dfd8e69-0"
    })`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${_v0 => _v0.src});
  min-width: ${(0, _v31.rem)(70)};
  height: ${(0, _v31.rem)(44)};
  border-radius: 10%;
  background-color: ${_v92.bokehTheme.colors.gray["700"]};
  background-position: center;
  background-size: cover;
`,
    _v220 = _v16.default.div.withConfig({
      displayName: "LiveThumbnail__PlayIconOverlay",
      componentId: "sc-9dfd8e69-1"
    })`
  display: none;
  align-items: center;
  justify-content: center;
  width: ${(0, _v31.rem)(35)};
  height: ${(0, _v31.rem)(35)};
  border-radius: 50%;
  background: black;
  opacity: 0.7;
  z-index: 14;
`,
    _v221 = (0, _v16.default)(_v217.Play).withConfig({
      displayName: "LiveThumbnail__PlayIcon",
      componentId: "sc-9dfd8e69-2"
    })`
  path {
    fill: ${_v92.bokehTheme.colors.white};
  }
  margin-left: ${(0, _v31.rem)(2)};
  width: ${(0, _v31.rem)(16)};
  height: ${(0, _v31.rem)(16)};
`,
    _v222 = (0, _v16.default)(_v218.Pause).withConfig({
      displayName: "LiveThumbnail__PauseIcon",
      componentId: "sc-9dfd8e69-3"
    })`
  path {
    fill: ${_v92.bokehTheme.colors.white};
  }
  width: ${(0, _v31.rem)(16)};
  height: ${(0, _v31.rem)(16)};
`;
  function _v223({
    src: _v0,
    isPlaying: _v1
  }) {
    return (0, _v7.jsx)(_v219, {
      src: _v0,
      children: (0, _v7.jsx)(_v220, {
        children: _v1 ? (0, _v7.jsx)(_v222, {}) : (0, _v7.jsx)(_v221, {})
      })
    });
  }
  let _v224 = _v16.default.div.withConfig({
      displayName: "TrackList__ItemsContainer",
      componentId: "sc-c7b16db8-0"
    })`
  display: flex;
  flex-direction: column;
`,
    _v225 = _v16.default.div.withConfig({
      displayName: "TrackList__ClipInfo",
      componentId: "sc-c7b16db8-1"
    })`
  margin-left: ${(0, _v31.rem)(12)};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`,
    _v226 = _v16.default.div.withConfig({
      displayName: "TrackList__Item",
      componentId: "sc-c7b16db8-2"
    })`
  padding: ${(0, _v31.rem)(10)};
  height: ${(0, _v31.rem)(64)};
  cursor: pointer;
  width: 100%;
  display: flex;
  opacity: 0.8;
  transition: background 0.25s linear;
  ${({
      isSelected: _v0
    }) => _v0 && `
    background: ${_v92.bokehTheme.colors.gray["800"]};
    opacity: 1;
    p {
      color: ${_v92.bokehTheme.colors.white};
    }
    div {
      display: flex;
    }`}
  &:hover {
    opacity: 1;
    background: ${_v92.bokehTheme.colors.gray["700"]};
    p {
      color: ${_v92.bokehTheme.colors.white};
    }
    div {
      display: flex;
    }
  }
`,
    _v227 = _v16.default.div.withConfig({
      displayName: "TrackList__ClipTitle",
      componentId: "sc-c7b16db8-3"
    })`
  width: ${(0, _v31.rem)(200)};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: ${(0, _v31.rem)(14)};
  color: ${_v92.bokehTheme.colors.gray["100"]};
  margin-bottom: ${(0, _v31.rem)(4)};
  font-weight: 500;
`,
    _v228 = _v16.default.div.withConfig({
      displayName: "TrackList__ClipDetails",
      componentId: "sc-c7b16db8-4"
    })`
  display: flex;
  width: 100%;
`,
    _v229 = _v16.default.span.withConfig({
      displayName: "TrackList__ClipStat",
      componentId: "sc-c7b16db8-5"
    })`
  color: ${_v92.bokehTheme.colors.gray["300"]};
  font-size: ${(0, _v31.rem)(14)};
  font-weight: normal;
`,
    _v230 = (0, _v16.default)(_v229).withConfig({
      displayName: "TrackList__ClipStatDivider",
      componentId: "sc-c7b16db8-6"
    })`
  padding: 0 ${(0, _v31.rem)(4)};
`;
  function _v231({
    items: _v0,
    isPlaying: _v1,
    activeClipUri: _v2,
    onClipSwitch: _v3
  }) {
    return (0, _v7.jsx)(_v224, {
      children: _v0.map(_v0 => function (_v0, _v1) {
        let _v2,
          _v3,
          {
            name: _v4,
            duration: _v5,
            uri: _v6,
            stats: {
              plays: _v7
            },
            pictures: {
              sizes: _v8
            },
            live: _v9
          } = _v0,
          _v10 = _v37.trackViewCountText(_v7),
          _v11 = (0, _v63.default)(_v8)?.link;
        return (0, _v7.jsxs)(_v226, {
          isSelected: _v1,
          onClick: () => _v3(_v0),
          children: [(0, _v7.jsx)(_v223, {
            src: _v11,
            isPlaying: _v1 && _v1
          }), (0, _v7.jsxs)(_v225, {
            children: [(0, _v7.jsx)(_v227, {
              children: _v4
            }), (0, _v7.jsx)(_v228, {
              children: _v9?.status === _v49 ? (0, _v7.jsx)(_v216, {}) : (0, _v7.jsxs)(_v7.Fragment, {
                children: [(0, _v7.jsx)(_v229, {
                  children: (_v2 = String(Math.floor(_v5 / 60)).padStart(2, "0"), _v3 = String(_v5 % 60).padStart(2, "0"), `${_v2}:${_v3}`)
                }), (0, _v7.jsx)(_v230, {
                  children: "•"
                }), (0, _v7.jsx)(_v229, {
                  children: _v10
                })]
              })
            })]
          })]
        }, _v6);
      }(_v0, _v0.uri === _v2))
    });
  }
  let _v232 = _v16.default.div.withConfig({
      displayName: "EmbedPlaylist__EmbedPlaylistContainer",
      componentId: "sc-1d80e40c-0"
    })`
  display: ${_v0 => _v0.isPlaying && !_v0.isHover || _v0.isToastDisplayed ? "none" : "flex"};
  top: ${(0, _v31.rem)(8)};
  left: ${(0, _v31.rem)(8)};
  width: 22%;
  min-width: ${(0, _v31.rem)(348)};
  background-color: rgba(17, 25, 29, 0.85);
  position: absolute;
  flex-direction: column;
  z-index: 4;
  border-radius: ${(0, _v31.rem)(8)};
  transition: all 0.5s ease-in-out;
  ${({
      isExpanded: _v0
    }) => _v0 ? "max-height: 87%" : `height: ${(0, _v31.rem)(92)}`};

  @media screen and (max-width: ${(0, _v31.rem)(953)}) and (min-width: ${(0, _v31.rem)(769)}) {
    display: none;
  }

  @media screen and (max-width: ${(0, _v31.rem)(750)}) {
    display: none;
  }

  @media screen and (max-height: ${(0, _v31.rem)(472)}) {
    display: none;
  }
`,
    _v233 = _v16.default.div.withConfig({
      displayName: "EmbedPlaylist__PlaylistHeader",
      componentId: "sc-1d80e40c-1"
    })`
  padding: ${(0, _v31.rem)(4)};
  display: flex;
  max-height: 70%;
  width: 100%;
`,
    _v234 = _v16.default.div.withConfig({
      displayName: "EmbedPlaylist__ThumbnailSection",
      componentId: "sc-1d80e40c-2"
    })`
  height: ${(0, _v31.rem)(52)};
  width: ${(0, _v31.rem)(88)};
`,
    _v235 = _v16.default.div.withConfig({
      displayName: "EmbedPlaylist__EventDetails",
      componentId: "sc-1d80e40c-3"
    })`
  margin-left: ${(0, _v31.rem)(12)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 65%;
`,
    _v236 = (0, _v16.default)(_v35.Header).withConfig({
      displayName: "EmbedPlaylist__EventTitle",
      componentId: "sc-1d80e40c-4"
    })`
  margin: 0;
  font-size: ${(0, _v31.rem)(16)};
  font-weight: 600;
  line-height: 1.25;
  text-overflow: ellipsis;
  overflow: hidden;
  color: ${_v92.bokehTheme.colors.white};
  letter-spacing: ${(0, _v31.rem)(.2)};
`,
    _v237 = (0, _v16.default)(_v171.Paragraph).withConfig({
      displayName: "EmbedPlaylist__OwnerLabel",
      componentId: "sc-1d80e40c-5"
    })`
  margin: 0;
  font-size: ${(0, _v31.rem)(14)};
  line-height: 1.4;
  color: ${_v92.bokehTheme.colors.gray["300"]};
`,
    _v238 = _v16.default.div.withConfig({
      displayName: "EmbedPlaylist__TrackListContainer",
      componentId: "sc-1d80e40c-6"
    })`
  max-height: ${_v0 => _v0.isExpanded ? "50vh" : "0"};
  transition: all 0.5s ease-in-out;
  width: 100%;
  overflow-y: auto;
`;
  function _v239({
    videos: _v0,
    eventData: _v1,
    activeClip: _v2,
    isPlaying: _v3,
    isHover: _v4,
    isLive: _v5,
    isToastDisplayed: _v6,
    onClipSwitch: _v7,
    onPlaylistExpandedChange: _v8,
    canSwitchClip: _v9,
    sendLiveSVVRPlayerBPEvent: _v10
  }) {
    let {
        title: _v11,
        user: {
          name: _v12
        }
      } = _v1,
      [_v13, _v14] = (0, _v9.useState)(!1),
      _v15 = (0, _v9.useCallback)(() => {
        _v13 ? _v10(_v69.CLOSE_PLAYLIST, "click") : _v10(_v69.OPEN_PLAYLIST, "click");
        let _v0 = !_v13;
        _v14(_v0), _v8(_v0);
      }, [_v13, _v8, _v10]),
      _v16 = _v37.embedPlaylistOwnerLabelText(_v12),
      _v17 = (0, _v9.useCallback)(_v0 => {
        _v9 && _v7(_v0);
      }, [_v9, _v7]);
    return (0, _v7.jsxs)(_v232, {
      isPlaying: _v3,
      isHover: _v4,
      isExpanded: _v13,
      isToastDisplayed: _v6,
      children: [(0, _v7.jsxs)(_v233, {
        children: [(0, _v7.jsx)(_v234, {
          children: (0, _v7.jsx)(_v214, {
            items: _v0
          })
        }), (0, _v7.jsxs)(_v235, {
          children: [(0, _v7.jsx)(_v236, {
            children: _v11
          }), (0, _v7.jsx)(_v237, {
            children: _v16
          })]
        })]
      }), (0, _v7.jsx)(_v209, {
        items: _v0,
        activeClip: _v2,
        isExpanded: _v13,
        onExpandToggled: _v15,
        canSwitchClip: _v9,
        onClipSwitch: _v17,
        isLive: _v5
      }), (0, _v7.jsx)(_v238, {
        isExpanded: _v13,
        children: (0, _v7.jsx)(_v231, {
          activeClipUri: _v2.uri,
          items: _v0,
          isPlaying: _v3,
          onClipSwitch: _v17
        })
      })]
    });
  }
  var _v240 = _v0.i(0);
  let _v241 = _v16.default.div.withConfig({
      displayName: "NextLiveClip__ClipTitle",
      componentId: "sc-eca46192-0"
    })`
  width: ${(0, _v31.rem)(200)};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: ${(0, _v31.rem)(14)};
  color: ${_v92.bokehTheme.colors.gray["100"]};
  font-weight: 500;
  margin: 0;
`,
    _v242 = (0, _v16.default)(_v171.Paragraph).withConfig({
      displayName: "NextLiveClip__ClickToWatch",
      componentId: "sc-eca46192-1"
    })`
  padding-left: ${(0, _v31.rem)(8)};
  color: ${_v92.bokehTheme.colors.gray["100"]};
`,
    _v243 = _v16.default.div.withConfig({
      displayName: "NextLiveClip__ThumbnailWrapper",
      componentId: "sc-eca46192-2"
    })`
  position: relative;
  opacity: 0.75;
  display: flex;
`,
    _v244 = _v16.default.div.withConfig({
      displayName: "NextLiveClip__NextLiveClipContainer",
      componentId: "sc-eca46192-3"
    })`
  max-width: ${(0, _v31.rem)(704)};
  display: flex;
  position: absolute;
  z-index: 3;
  top: ${(0, _v31.rem)(10)};
  right: ${(0, _v31.rem)(10)};
  padding: ${(0, _v31.rem)(10)} ${(0, _v31.rem)(8)};
  border-radius: ${(0, _v31.rem)(5)};
  background: rgba(17, 25, 29, 0.85);
  cursor: pointer;

  &:hover {
    ${_v241} {
      color: ${_v92.bokehTheme.colors.white};
    }
    ${_v242} {
      color: ${_v92.bokehTheme.colors.white};
    }
    ${_v243} div {
      display: flex;
    }
  }
`,
    _v245 = _v16.default.div.withConfig({
      displayName: "NextLiveClip__ClipDetailsWrapper",
      componentId: "sc-eca46192-4"
    })`
  display: flex;
  flex-direction: column;
  margin-left: ${(0, _v31.rem)(12)};
  justify-content: center;
`,
    _v246 = (0, _v16.default)(_v34.Button).withConfig({
      displayName: "NextLiveClip__DismissButton",
      componentId: "sc-eca46192-5"
    })`
  cursor: pointer;
  z-index: 13;
  right: 2.5%;
`,
    _v247 = _v16.default.div.withConfig({
      displayName: "NextLiveClip__TopWrapper",
      componentId: "sc-eca46192-6"
    })`
  display: flex;
  align-items: center;
  margin-bottom: ${(0, _v31.rem)(4)};
`,
    _v248 = _v16.default.div.withConfig({
      displayName: "NextLiveClip__BottomWrapper",
      componentId: "sc-eca46192-7"
    })``;
  function _v249({
    streamableClip: _v0,
    onClipSwitch: _v1,
    onDismiss: _v2
  }) {
    let _v3 = (0, _v9.useCallback)(() => _v1(_v0), [_v1, _v0]),
      {
        name: _v4,
        pictures: _v5
      } = _v0,
      _v6 = (0, _v63.default)(_v5?.sizes)?.link;
    return (0, _v7.jsxs)(_v244, {
      onClick: _v3,
      children: [(0, _v7.jsx)(_v243, {
        children: (0, _v7.jsx)(_v223, {
          src: _v6,
          isPlaying: !1
        })
      }), (0, _v7.jsxs)(_v245, {
        children: [(0, _v7.jsxs)(_v247, {
          children: [(0, _v7.jsx)(_v241, {
            children: _v4
          }), (0, _v7.jsx)(_v246, {
            variant: "minimalTransparent",
            size: "xs",
            icon: (0, _v7.jsx)(_v240.DismissX, {
              color: _v92.bokehTheme.colors.white,
              width: 20,
              height: 20
            }),
            onClick: _v2
          })]
        }), (0, _v7.jsxs)(_v248, {
          children: [(0, _v7.jsx)(_v216, {}), (0, _v7.jsx)(_v242, {
            size: 3,
            children: _v37.nextClipLabelText
          })]
        })]
      })]
    });
  }
  let _v250 = _v16.default.div.withConfig({
      displayName: "NextVideoPreview__NextVideoPreviewContainer",
      componentId: "sc-cb38d70a-0"
    })`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 15vh;
  right: ${(0, _v31.rem)(4)};
  z-index: 10;
  max-width: ${(0, _v31.rem)(260)};
  width: 20%;

  @media screen and (max-width: ${(0, _v31.rem)(0)}) {
    bottom: 10vw;
  }

  @media screen and (max-width: ${(0, _v31.rem)(900)}) {
    display: none;
  }

  @media screen and (max-height: ${(0, _v31.rem)(640)}) {
    display: none;
  }
`,
    _v251 = _v16.default.div.withConfig({
      displayName: "NextVideoPreview__ThumbnailContainer",
      componentId: "sc-cb38d70a-1"
    })`
  width: 100%;
  height: 100%;
  background-color: ${_v92.bokehTheme.colors.gray["900"]};
  &: hover {
    opacity: 0.7;
  }
`,
    _v252 = _v16.default.div.withConfig({
      displayName: "NextVideoPreview__Thumbnail",
      componentId: "sc-cb38d70a-2"
    })`
  background-image: url(${_v0 => _v0.src});
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  border: solid ${(0, _v31.rem)(1)} ${_v92.bokehTheme.colors.gray["700"]};
  border-radius: ${(0, _v31.rem)(2)};
  border: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`,
    _v253 = (0, _v16.default)(_v35.Header).withConfig({
      displayName: "NextVideoPreview__UpNext",
      componentId: "sc-cb38d70a-3"
    })`
  color: ${_v92.bokehTheme.colors.white};
  margin-bottom: ${(0, _v31.rem)(8)};
`,
    _v254 = (0, _v16.default)(_v171.Paragraph).withConfig({
      displayName: "NextVideoPreview__Duration",
      componentId: "sc-cb38d70a-4"
    })`
  border-radius: ${(0, _v31.rem)(4)};
  bottom: 35%;
  right: 10%;
  background-color: black;
  color: ${_v92.bokehTheme.colors.white};
  padding: ${(0, _v31.rem)(4)} ${(0, _v31.rem)(12)};
  margin-bottom: ${(0, _v31.rem)(6)};
  margin-left: 60%;
  opacity: 0.7;
`,
    _v255 = (0, _v16.default)(_v217.Play).withConfig({
      displayName: "NextVideoPreview__PlayIcon",
      componentId: "sc-cb38d70a-5"
    })`
  path {
    fill: ${_v92.bokehTheme.colors.white};
  }
  margin-left: ${(0, _v31.rem)(2)};
  width: ${(0, _v31.rem)(24)};
  height: ${(0, _v31.rem)(24)};
`,
    _v256 = _v16.default.div.withConfig({
      displayName: "NextVideoPreview__PlayIconContainer",
      componentId: "sc-cb38d70a-6"
    })`
  align-items: center;
  justify-content: center;
  width: 3.5vw;
  height: 3.5vw;
  margin-top: 20%;
  margin-bottom: 5%;
  border-radius: 50%;
  background: black;
  opacity: 0.7;
  z-index: 14;
  display: flex;
`,
    _v257 = _v16.default.div.withConfig({
      displayName: "NextVideoPreview__Description",
      componentId: "sc-cb38d70a-7"
    })`
  width: 100%;
  padding: 0 ${(0, _v31.rem)(12)};
  background-color: ${_v92.bokehTheme.colors.gray["900"]};
`,
    _v258 = (0, _v16.default)(_v35.Header).withConfig({
      displayName: "NextVideoPreview__VideoTitle",
      componentId: "sc-cb38d70a-8"
    })`
  color: ${_v92.bokehTheme.colors.white};
  margin: ${(0, _v31.rem)(12)} 0;
  font-weight: 500;
`,
    _v259 = (0, _v16.default)(_v35.Header).withConfig({
      displayName: "NextVideoPreview__Author",
      componentId: "sc-cb38d70a-9"
    })`
  color: ${_v92.bokehTheme.colors.gray["300"]};
  margin: ${(0, _v31.rem)(12)} 0;
`;
  function _v260({
    video: _v0,
    author: _v1,
    onNextVideoToggled: _v2
  }) {
    let {
        pictures: _v3,
        duration: _v4,
        name: _v5
      } = _v0,
      _v6 = String((0, _v64.default)(_v3?.sizes)?.link),
      _v7 = String(Math.floor(_v4 / 60)).padStart(2, "0"),
      _v8 = String(_v4 % 60).padStart(2, "0"),
      _v9 = (0, _v9.useCallback)(() => _v2(_v0, !0), [_v2, _v0]);
    return (0, _v7.jsxs)(_v250, {
      children: [(0, _v7.jsx)(_v253, {
        size: "4",
        children: _v37.upNextHeaderText
      }), (0, _v7.jsx)(_v251, {
        onClick: _v9,
        children: (0, _v7.jsxs)(_v252, {
          src: _v6,
          children: [(0, _v7.jsx)(_v256, {
            children: (0, _v7.jsx)(_v255, {})
          }), (0, _v7.jsx)(_v254, {
            size: "2",
            children: `${_v7}:${_v8}`
          })]
        })
      }), (0, _v7.jsxs)(_v257, {
        children: [(0, _v7.jsx)(_v258, {
          size: "6",
          children: _v5
        }), (0, _v7.jsx)(_v259, {
          size: "6",
          children: _v1
        })]
      })]
    });
  }
  var _v261 = _v0.i(0);
  let _v262 = _v16.default.div.withConfig({
      displayName: "schedule-bubble__ScheduleContainer",
      componentId: "sc-bf18c264-0"
    })`
  position: absolute;
  width: ${(0, _v31.rem)(320)};
  background-color: ${_v92.bokehTheme.colors.gray["900"]};
  padding: ${(0, _v31.rem)(12)} ${(0, _v31.rem)(15)};
  border-radius: ${(0, _v31.rem)(4)};
  color: rgb(255, 255, 255);
  bottom: ${(0, _v31.rem)(56)};
  left: ${(0, _v31.rem)(12)};
  z-index: 4;

  @media screen and (max-width: ${(0, _v31.rem)(500)}) {
    display: none;
  }

  @media screen and (max-height: ${(0, _v31.rem)(524)}) {
    display: none;
  }
`,
    _v263 = _v16.default.div.withConfig({
      displayName: "schedule-bubble__UpperText",
      componentId: "sc-bf18c264-1"
    })`
  font-size: ${(0, _v31.rem)(14)};
  font-weight: 300;
  margin-bottom: ${(0, _v31.rem)(4)};
  color: ${_v92.bokehTheme.colors.white};
`,
    _v264 = _v16.default.div.withConfig({
      displayName: "schedule-bubble__MainText",
      componentId: "sc-bf18c264-2"
    })`
  font-size: ${(0, _v31.rem)(20)};
`;
  function _v265({
    schedule: _v0
  }) {
    return (0, _v7.jsxs)(_v262, {
      children: [(0, _v7.jsx)(_v263, {
        children: (0, _v261.getScheduleAvailability)(_v0)
      }), (0, _v7.jsx)(_v264, {
        children: (0, _v261.getScheduleTime)(_v0)
      })]
    });
  }
  let _v266 = _v16.default.div.withConfig({
      displayName: "EventRecipientPlayer__ContentWrapper",
      componentId: "sc-51e55c7f-0"
    })`
  position: relative;
`,
    _v267 = (0, _v9.forwardRef)(function ({
      roundedCorners: _v0 = !1
    }, _v1) {
      let {
          eventData: _v2,
          videosData: _v3,
          ingestStatus: _v4,
          onPlayableClipChange: _v5,
          currentClip: _v6,
          eventId: _v7
        } = _v73(),
        {
          PlayerConstructor: _v8
        } = (0, _v9.useContext)(_v168.PlayerContext),
        {
          streamableClip: _v9,
          schedule: _v10,
          embed: {
            playlist: _v11,
            autoplay: _v12,
            loop: _v13,
            showLatestArchivedClip: _v14,
            schedule: _v15,
            logos: {
              custom: _v16
            }
          },
          user: {
            name: _v17,
            account: _v18
          },
          streamPrivacy: _v19
        } = _v2,
        _v20 = (0, _v9.useContext)(_v30.ViewerContext),
        _v21 = _v20?.teamUser,
        [_v22, _v23] = (0, _v9.useState)(!1),
        [_v24, _v25] = (0, _v9.useState)(!1),
        [_v26, _v27] = (0, _v9.useState)(!1),
        [_v28, _v29] = (0, _v9.useState)(null),
        [_v30, _v31] = (0, _v9.useState)(!1),
        [_v32, _v33] = (0, _v9.useState)(!1),
        [_v34, _v35] = (0, _v9.useState)(null),
        [_v36, _v37] = (0, _v9.useState)(!1),
        _v38 = (0, _v9.useRef)(!1),
        _v39 = (0, _v9.useMemo)(() => _v66(), []),
        _v40 = (0, _v117.useIsPortraitScreenOrientation)();
      (0, _v167.useLeadFormPrefillParentListener)(_v7 || "", _v166.ENTITY_TYPE.EVENT);
      let _v41 = (0, _v9.useCallback)(_v0 => {
        null !== _v0 && _v8 && _v6?.configUrl && _v35(new _v8(_v0, _v6.configUrl, !0, {}));
      }, [_v8, _v6]);
      (0, _v9.useEffect)(() => {
        if (_v16.url && _v16.active && _v32 && _v34?._setEmbedSetting) {
          let _v0 = {
            img: _v16.url,
            url: _v16.link,
            sticky: _v16.sticky
          };
          _v34._setEmbedSetting("custom_logo", _v0);
        }
      }, [_v16.active, _v16.link, _v16.sticky, _v16.url, _v32, _v34, _v34?._setEmbedSetting]);
      let _v42 = (0, _v9.useMemo)(() => _v3?.items?.filter(_v0 => !_v14 || _v0.live?.status === "done" || _v0.live?.status === _v49 || _v0.live?.status === "archiving" || _v0.uri === _v6?.uri), [_v3, _v6, _v14]),
        _v43 = (0, _v9.useCallback)((_v0, _v1, _v2 = null) => {
          let _v3,
            _v4 = _v2 ?? _v6;
          _v4 && (_v3 = {
            is_embed: !1,
            name: _v0,
            event_type: _v1,
            live_event_id: _v7 ?? null,
            live_event_privacy: _v19?.view ?? null,
            video_type: _v68(_v9, _v4, _v4, !!_v10),
            live_event_embed_privacy: _v19?.embed ?? null,
            live_event_type: _v70.LIVE_EVENT,
            team_owner_id: _v21 ? _v21.ownerId.toString() : null,
            team_subscription_type: _v21 ? _v18 : null,
            actor_team_role: null,
            actor_resource_role: null,
            team_size: _v21 && _v21.currentTeamSize ? _v21.currentTeamSize.toString() : null
          }, _v155.BigPictureClient.sendEvent(new _v155.Event("vimeo.live_svvr_player", 2, _v3)));
        }, [_v18, _v6, _v7, _v4, _v10, _v19?.embed, _v19?.view, _v9, _v21]);
      (0, _v9.useEffect)(() => (_v34?.ready(() => {
        _v34.paused && _v38.current && _v34.play(), _v33(!0);
      }), () => {
        _v34?.unload && (_v33(!1), _v34.unload());
      }), [_v34]), (0, _v9.useEffect)(() => {
        let _v0 = {
          play: () => {
            _v23(!0), _v29(null);
          },
          pause: () => {
            _v23(!1);
          },
          ended: () => {
            if (_v42) {
              let _v0 = _v42.findIndex(_v0 => _v0.uri === _v6?.uri),
                _v1 = _v0 + 1 === _v42.length ? 0 : _v0 + 1,
                _v2 = 0 !== _v1 || _v13,
                _v3 = _v42[_v1];
              (0 !== _v1 || _v2) && (_v12 ? (_v38.current = _v2, _v5(_v3)) : _v11 && _v29(_v3));
            }
          },
          toastvisibilitychanged: _v0 => {
            _v37(_v0.visible);
          }
        };
        return _v34 && _v34.videoId === _v65(_v6?.uri || "") && Object.keys(_v0).forEach(_v0 => {
          try {
            _v34.on(_v0, _v0[_v0]);
          } catch (_v0) {}
        }), () => {
          _v34 && _v34.off && Object.keys(_v0).forEach(_v0 => {
            try {
              _v34.off(_v0, _v0[_v0]);
            } catch (_v0) {}
          });
        };
      }, [_v34, _v32, _v42, _v6, _v5, _v13, _v12, _v11]);
      let _v44 = (0, _v9.useCallback)((_v0, _v1 = !1) => {
          _v38.current = _v1, _v5(_v0), _v1 || _v29(null);
          let _v2 = _v0.live && _v0.live.status,
            _v3 = _v34 && (_v34.duration > 0 || _v2 === _v49);
          _v9?.uri === _v0.uri && 4 === _v4 ? _v43(_v69.SWITCH_TO_LIVE_STREAM, "click", _v0) : _v43(_v69.PLAY_ARCHIVED_CLIP, "click", _v0), _v3 && _v0.uri === _v6?.uri && (_v34.paused ? _v34.play() : _v34.pause());
        }, [_v5, _v34, _v6?.uri, _v43, _v4, _v9?.uri]),
        _v45 = _v6?.uri === _v9?.uri,
        _v46 = !!(_v4 && 4 === _v4),
        _v47 = !_v45 && _v46 && !_v30;
      return (0, _v7.jsx)(_v187, {
        ref: _v1,
        onMouseEnter: () => _v27(!0),
        onMouseLeave: () => _v27(!1),
        isMobile: _v39,
        isPortrait: _v40,
        roundedCorners: _v0,
        children: (0, _v7.jsxs)(_v266, {
          children: [_v6 && _v11 && _v42 && (0, _v7.jsx)(_v239, {
            canSwitchClip: _v32,
            videos: _v42,
            eventData: _v2,
            activeClip: _v6,
            isPlaying: _v22,
            isHover: _v26,
            isLive: _v46,
            isToastDisplayed: _v36,
            onClipSwitch: _v44,
            onPlaylistExpandedChange: _v25,
            sendLiveSVVRPlayerBPEvent: _v43
          }), _v47 && (0, _v7.jsx)(_v249, {
            streamableClip: _v9,
            onClipSwitch: _v44,
            onDismiss: _v0 => {
              _v0.stopPropagation(), _v31(!0);
            }
          }), _v15 && !_v22 && !_v24 && (0, _v7.jsx)(_v265, {
            schedule: _v10
          }), (0, _v7.jsx)(_v184, {
            children: (0, _v7.jsxs)(_v186, {
              scaleup: !1,
              children: [(0, _v7.jsx)("div", {
                ref: _v41,
                className: "player js-player"
              }), _v28 && (0, _v7.jsx)(_v260, {
                video: _v28,
                author: _v17,
                onNextVideoToggled: _v44
              })]
            })
          })]
        })
      });
    }),
    _v268 = ({
      isUnrated: _v0
    }) => {
      let _v1 = (0, _v9.useContext)(_v30.ViewerContext);
      return (0, _v7.jsx)(_v189, {
        children: (0, _v7.jsxs)(_v190, {
          children: [(0, _v7.jsx)(_v191, {
            children: _v0 ? _v37.notRatedContentOverlayCaption : _v37.matureContentOverlayCaption
          }), (0, _v7.jsx)(_v16.ThemeProvider, {
            theme: _v148.themes.light,
            children: (0, _v7.jsx)(_v150.LoginJoinModal, {
              type: "login",
              xsrft: _v1?.xsrft || "",
              onSuccess: _v67,
              children: _v0 => (0, _v7.jsx)(_v34.Button, {
                onClick: () => {
                  _v0(), _v161("login");
                },
                children: _v37.logInCaption
              })
            })
          })]
        })
      });
    },
    _v269 = _v16.default.div.withConfig({
      displayName: "PreviewBar__Container",
      componentId: "sc-f4816654-0"
    })`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  background: ${_v92.bokehTheme.colors.blue["500"]};
  color: ${_v92.bokehTheme.colors.white};
  padding: ${(0, _v31.rem)(8)};
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 3;
  @media screen and (max-width: ${(0, _v31.rem)(769)}) {
    flex-flow: column nowrap;
    padding: ${(0, _v31.rem)(14)};
  }
`,
    _v270 = (0, _v16.default)(_v34.Button).withConfig({
      displayName: "PreviewBar__EditButton",
      componentId: "sc-f4816654-1"
    })`
  text-decoration: none;
  margin-left: ${(0, _v31.rem)(10)};
  @media screen and (max-width: ${(0, _v31.rem)(769)}) {
    margin-left: 0;
    margin-top: ${(0, _v31.rem)(14)};
  }
`,
    _v271 = ({
      href: _v0
    }) => (0, _v7.jsxs)(_v269, {
      id: "preview-banner",
      children: [_v37.previewBarText, (0, _v7.jsx)(_v270, {
        format: "alternative",
        variant: "transparent",
        pill: !0,
        href: _v0,
        element: "a",
        children: _v37.previewBarButtonText
      })]
    });
  var _v272 = _v0.i(0);
  let _v273 = _v16.default.div.withConfig({
      displayName: "styles__BadgeContainer",
      componentId: "sc-83e7baae-0"
    })`
  display: flex;
  margin-left: ${(0, _v31.rem)(10)};
`,
    _v274 = ({
      display: _v0,
      promptRating: _v1 = () => {},
      isUnrated: _v2
    }) => _v0 ? (0, _v7.jsx)(_v273, {
      children: (0, _v7.jsx)(_v272.Badge, {
        onClick: _v1,
        format: _v2 ? "not-yet-rated" : "mature",
        size: "sm",
        children: _v2 ? _v37.ratingsBadgeLabel.unrated : _v37.ratingsBadgeLabel.mature
      })
    }) : null;
  var _v275 = _v0.i(0),
    _v276 = _v0.i(0);
  let _v277 = "#141414",
    _v278 = "56.25%";
  function _v279({
    isSmallScreen: _v0,
    isPortrait: _v1,
    isLoading: _v2,
    title: _v3,
    previewType: _v4,
    entityId: _v5,
    setLeadUuid: _v6,
    onPreviewTypeChanged: _v7,
    onMount: _v8,
    onUnmount: _v9,
    isMobileFormOpen: _v10,
    onOpenMobileForm: _v11,
    onCloseMobileForm: _v12
  }) {
    let _v13,
      _v14 = _v0 => (0, _v7.jsx)(_v276.LeadCaptureView, {
        previewType: _v4,
        type: _v166.ENTITY_TYPE.EVENT,
        entityId: _v5,
        setLeadUuid: _v6,
        previewSize: _v0,
        onPreviewTypeChanged: _v7,
        onMount: _v8,
        onUnmount: _v9
      }),
      _v15 = (0, _v7.jsx)(_v122.Flex, {
        alignItems: "center",
        height: "100%",
        justifyContent: "center",
        width: "100%",
        children: (0, _v7.jsx)(_v146.Spinner, {})
      }),
      _v16 = _v4 === _v25.PREVIEW_TYPE.CONFIRMATION;
    if (_v0 && _v10 && !_v16) return (0, _v7.jsxs)(_v120.Box, {
      backgroundColor: _v277,
      bottom: 0,
      left: 0,
      overflow: "auto",
      position: "fixed",
      right: 0,
      top: 0,
      zIndex: 0,
      children: [(0, _v7.jsx)(_v123.IconButton, {
        "aria-label": _v37.closeRegistration,
        icon: (0, _v7.jsx)(_v126.CloseX, {
          color: "white"
        }),
        onClick: _v12,
        position: "absolute",
        right: (0, _v124.rem)(16),
        top: (0, _v124.rem)(16),
        variant: "tertiary",
        zIndex: 1
      }), _v2 ? _v15 : _v14()]
    });
    let _v17 = _v0 && !_v16;
    return _v13 = _v2 ? _v15 : _v17 ? (0, _v7.jsxs)(_v122.Flex, {
      alignItems: "center",
      direction: "column",
      gap: "xl",
      height: "100%",
      justifyContent: "center",
      padding: "2xl",
      textAlign: "center",
      width: "100%",
      children: [(0, _v7.jsxs)(_v122.Flex, {
        direction: "column",
        gap: "xs",
        children: [(0, _v7.jsx)(_v125.Text, {
          color: "white",
          variant: "heading-lg",
          children: _v37.registerToAttend
        }), _v3 ? (0, _v7.jsx)(_v125.Text, {
          color: "white",
          variant: "body-xl",
          children: _v3
        }) : null]
      }), (0, _v7.jsx)(_v120.Box, {
        maxWidth: (0, _v124.rem)(360),
        width: "100%",
        children: (0, _v7.jsx)(_v275.Button, {
          onClick: _v11,
          variant: "primary",
          width: "100%",
          children: _v37.register
        })
      })]
    }) : _v14({
      height: "100%",
      width: "100%"
    }), (0, _v7.jsx)(_v187, {
      isMobile: _v0,
      isPortrait: _v1,
      children: (0, _v7.jsx)(_v120.Box, {
        backgroundColor: _v277,
        borderRadius: "2xl",
        overflow: "hidden",
        paddingBottom: _v278,
        position: "relative",
        width: "100%",
        children: (0, _v7.jsx)(_v120.Box, {
          bottom: 0,
          left: 0,
          position: "absolute",
          right: 0,
          top: 0,
          children: _v13
        })
      })
    });
  }
  function _v280({
    setLeadUuid: _v0,
    leadUuid: _v1
  }) {
    let {
        apiEventId: _v2,
        eventData: _v3,
        eventId: _v4,
        ingestStatus: _v5,
        currentClip: _v6,
        hasNewLeadCaptureFlow: _v7,
        cgPreviewType: _v8
      } = _v73(),
      {
        clipToPlay: _v9,
        title: _v10,
        streamDescription: _v11,
        metadata: _v12,
        chatEnabled: _v13,
        streamPrivacy: _v14,
        settingsLink: _v15,
        schedule: _v16,
        streamableClip: _v17
      } = _v3,
      _v18 = !!(_v17?.live?.chat?.roomId && _v4),
      _v19 = (0, _v89.useBreakpointValue)({
        base: !0,
        md: !1
      }) ?? !0,
      [_v20, _v21] = (0, _v9.useState)(!1),
      [_v22, _v23] = (0, _v9.useState)(!1),
      [_v24, _v25] = (0, _v9.useState)(!1),
      _v26 = _v18 && (_v19 && _v20 || !_v19 && _v22),
      _v27 = _v16 && "startTime" in _v16 ? _v16.startTime : void 0,
      _v28 = _v16 && "timeZone" in _v16 ? _v16.timeZone : void 0,
      _v29 = _v27 ? _v86.DateTime.fromISO(_v27, _v28 ? {
        zone: _v28
      } : {}) : null,
      _v30 = (0, _v87.useRouter)(),
      _v31 = (0, _v23.useViewer)(),
      _v32 = _v31?.user ?? null,
      _v33 = _v31?.ofcomQualifies,
      _v34 = !!_v12?.interactions?.edit,
      _v35 = (0, _v9.useRef)(null),
      _v36 = (0, _v9.useMemo)(() => _v66(), []),
      _v37 = (0, _v117.useIsPortraitScreenOrientation)(),
      _v38 = (0, _v109.useAnalyticsEvent)(),
      _v39 = _v6?.contentRating,
      _v40 = !!_v39?.includes(_v47),
      _v41 = !!_v39?.includes(_v46),
      _v42 = !!_v39?.includes(_v48),
      _v43 = null === _v32 && _v33 && (_v14?.view === _v50 || _v14?.view === _v51 || _v14?.view === _v52) && !_v40,
      _v44 = _v6 ? `${window.location.origin}/event/${_v4}${_v6.uri}` : window.location.href,
      _v45 = _v1 ? _v25.PREVIEW_TYPE.CONFIRMATION : _v8,
      {
        registrant: _v46,
        liveStatus: {
          data: {
            status: _v47
          },
          initialDataLoaded: _v48
        }
      } = _v85(),
      _v49 = (_v46.data.isBlocked && _v46.called || !_v46.initialDataLoaded) && _v47 !== _v54,
      _v50 = _v47 === _v54 || _v47 === _v53 && _v1 || _v1 && [4, 2].includes(_v5),
      _v51 = _v30.asPath.split("?")[0].replace(/\/+$/, "").split("/").pop() ?? "",
      _v52 = Object.values(_v55).includes(_v51),
      _v53 = _v0 => {
        if (![_v25.PREVIEW_TYPE.FORM, _v25.PREVIEW_TYPE.LOGIN_SCREEN].includes(_v0)) return;
        let _v1 = _v30.asPath.split("?"),
          _v2 = _v1[0].replace(/\/$/, ""),
          _v3 = _v2.split("/").pop(),
          _v4 = void 0 !== _v1[1] ? `?${_v1[1]}` : "",
          _v5 = _v0 === _v25.PREVIEW_TYPE.FORM ? _v55.REGISTER : _v55.SIGNIN;
        if (Object.values(_v55).includes(_v3)) {
          let _v0 = _v2.replace(_v3, _v5);
          _v30.push(`${_v0}${_v4}`);
        } else _v30.push(`${_v2}/${_v5}${_v4}`);
      },
      _v54 = () => {
        let _v0 = _v30.asPath.split("?"),
          _v1 = _v0[0].replace(/\/$/, ""),
          _v2 = _v1.split("/").pop(),
          _v3 = void 0 !== _v0[1] ? `?${_v0[1]}` : "";
        if (Object.values(_v55).includes(_v2)) {
          let _v0 = _v1.replace(_v2, "");
          _v30.push(`${_v0}${_v3}`);
        }
      };
    return (0, _v9.useEffect)(() => {
      !_v46.loading && _v46.called && !_v46.data.isValidRegistrant && (_v0?.(""), _v2 && (0, _v116.deleteCookie)(_v2));
    }, [_v46, _v2]), (0, _v9.useEffect)(() => {
      _v32 && 5 === _v5 && _v88.GoogleTagManager.trackEvent("live_event_ended_for_viewer");
    }, [_v5, _v32]), (0, _v9.useEffect)(() => {
      let {
          body: _v0
        } = document,
        _v1 = () => {
          "hidden" !== _v0.style.overflow && "hidden" !== _v0.style.overflowY && ("auto" === _v0.style.overflow || "auto" === _v0.style.overflowY) && (_v0.style.overflow = "");
        };
      _v1();
      let _v2 = new MutationObserver(_v1);
      return _v2.observe(_v0, {
        attributes: !0,
        attributeFilter: ["style"]
      }), () => _v2.disconnect();
    }, []), (0, _v9.useEffect)(() => {
      _v38(_v158("workflow.visit_svv_recipient", 7, {
        customizations: null,
        referer: window.location.href,
        speed_controls_enabled: _v9.embed?.speed || null,
        live_event_id: _v4 || null,
        live_event_privacy: _v3.streamPrivacy?.view || null,
        live_event_embed_privacy: _v3.streamPrivacy?.embed || null,
        is_live_chat_enabled: _v13,
        is_mobile_web: _v36
      }));
    }, [_v13, _v9.embed?.speed, _v3.streamPrivacy?.embed, _v3.streamPrivacy?.view, _v4, _v36, _v38]), (0, _v7.jsxs)(_v7.Fragment, {
      children: [(0, _v7.jsx)(_v172, {}), _v34 && !_v19 && (0, _v7.jsx)(_v271, {
        href: _v15
      }), (0, _v7.jsx)(_v173, {
        children: (0, _v7.jsxs)(_v174, {
          isMobile: _v19,
          children: [(0, _v7.jsx)(_v163, {}), (0, _v7.jsxs)(_v175, {
            isMobile: _v19,
            isPortrait: _v37,
            children: [(0, _v7.jsxs)(_v176, {
              isMobile: _v19,
              isPortrait: _v37,
              isChatOpen: _v26 && !_v19,
              children: [(0, _v7.jsxs)(_v177, {
                isMobile: _v19,
                isPortrait: _v37,
                children: [(!_v50 || _v49) && _v7 ? (0, _v7.jsx)(_v279, {
                  isSmallScreen: _v19,
                  isPortrait: _v37,
                  isLoading: !_v48,
                  title: _v10,
                  previewType: _v45,
                  entityId: _v2,
                  setLeadUuid: _v0,
                  onPreviewTypeChanged: _v53,
                  onMount: () => {
                    _v53(_v45);
                  },
                  onUnmount: _v54,
                  isMobileFormOpen: _v24 || _v52,
                  onOpenMobileForm: () => _v25(!0),
                  onCloseMobileForm: () => {
                    _v25(!1), _v54();
                  }
                }) : _v43 ? (0, _v7.jsx)(_v268, {
                  isUnrated: _v41,
                  redirectUrl: _v44
                }) : (0, _v7.jsx)(_v267, {
                  ref: _v35,
                  roundedCorners: !0
                }), (0, _v7.jsx)(_v188, {
                  isMobile: _v19,
                  isPortrait: _v37,
                  paddingEnabled: !1,
                  children: (0, _v7.jsxs)(_v178, {
                    isFullWidth: !1,
                    children: [_v29 && (0, _v7.jsxs)(_v179, {
                      children: [(0, _v7.jsxs)(_v181, {
                        children: [(0, _v7.jsx)(_v90.Calendar, {}), (0, _v7.jsx)(_v182, {
                          children: _v29.toFormat("LLL d")
                        })]
                      }), (0, _v7.jsxs)(_v181, {
                        children: [(0, _v7.jsx)(_v91.ClockThree, {}), (0, _v7.jsx)(_v182, {
                          children: _v29.toFormat("t ZZZZ")
                        })]
                      })]
                    }), (0, _v7.jsxs)(_v180, {
                      children: [(0, _v7.jsx)(_v183, {
                        content: _v10,
                        allowNewLines: !1,
                        contentEditable: !1,
                        shouldDisplayLinks: !1
                      }), (0, _v7.jsx)(_v274, {
                        display: !_v40 && _v14?.view === _v50,
                        isUnrated: _v41
                      }), _v11 && (0, _v7.jsx)(_v111, {
                        contentEditable: !1,
                        text: _v11
                      })]
                    }), _v42 && (0, _v7.jsxs)(_v192, {
                      children: [(0, _v7.jsx)(_v194, {}), (0, _v7.jsx)(_v193, {
                        children: _v37.thisVideoContainsAdvertisment
                      })]
                    })]
                  })
                }), _v19 && (0, _v7.jsx)(_v144, {
                  isChatAvailable: _v18,
                  isPanelExpanded: _v20,
                  isChatSheetView: !0,
                  onOpen: () => _v21(!0),
                  onClose: () => _v21(!1),
                  onPanelOpenChange: _v23
                })]
              }), _v31 ? (0, _v7.jsx)(_v185, {
                children: (0, _v7.jsx)(_v118.EssentialFooter, {
                  ..._v31,
                  enableQuotaMenu: !1,
                  position: "absolute"
                })
              }) : null]
            }), !_v19 && (0, _v7.jsx)(_v144, {
              isChatAvailable: _v18,
              isPanelExpanded: !1,
              isChatSheetView: !1,
              onOpen: () => _v21(!0),
              onClose: () => _v21(!1),
              onPanelOpenChange: _v23
            })]
          })]
        })
      })]
    });
  }
  var _v116 = _v116,
    _v281 = _v0.i(0),
    _v282 = _v0.i(0),
    _v283 = _v0.i(0),
    _v284 = _v0.i(0);
  async function _v285(_v0, _v1) {
    let _v2 = await fetch(`//${_v1.apiUrl}/live_chat/${_v0}/status`, {
      headers: {
        Authorization: `jwt ${_v1.jwt}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
    if (_v2.ok) return (0, _v284.camelize)(await _v2.json()).chatEnabled;
    throw Error("Failed to fetch chat status data.");
  }
  let _v286 = _v16.default.div.withConfig({
      displayName: "EventInteractionToolsLegacy__InteractionToolsContainerDesktop",
      componentId: "sc-fcf4bbc4-0"
    })`
  z-index: 5;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  max-width: ${(0, _v31.rem)(420)};
  border-left: 1px solid ${_v281.core.color.stroke};
`,
    _v287 = _v16.default.div.withConfig({
      displayName: "EventInteractionToolsLegacy__InteractionToolsContainerMobile",
      componentId: "sc-fcf4bbc4-1"
    })`
  ${({
      isPortrait: _v0,
      marginLeft: _v1,
      isKeyboardOpened: _v2
    }) => _v0 ? _v16.css`
          position: fixed;
          right: 0;
          bottom: ${_v2 ? (0, _v31.rem)(-72) : 0};
          left: 0;
          z-index: 5;
          border-top: 1px solid ${_v281.core.color.stroke};
        ` : _v16.css`
          position: relative;
          z-index: 5;
          flex-shrink: 0;
          border-left: 1px solid ${_v281.core.color.stroke};
          margin-left: ${_v1};
          transition: margin-left 200ms ease;

          @media screen and (max-width: ${(0, _v31.rem)(660)}) {
            position: absolute;
            top: ${(0, _v31.rem)(64)};
            right: 0;
            bottom: 0;
            margin-left: 0;
          }
        `};
`,
    _v288 = (0, _v9.memo)(function ({
      isPortrait: _v0,
      playerRef: _v1
    }) {
      let [_v2, _v3] = (0, _v9.useState)(420),
        [_v4, _v5] = (0, _v9.useState)(!1),
        {
          eventId: _v6,
          eventHash: _v7,
          password: _v8,
          eventData: _v9
        } = _v73(),
        _v10 = function (_v0 = 300) {
          let [_v1, _v2] = (0, _v9.useState)(!1);
          return (0, _v9.useLayoutEffect)(() => {
            if (_v283.browserConfig.BROWSER?.isMobile && "visualViewport" in window) {
              let _v0 = (0, _v282.default)(() => {
                _v2(_v0 => {
                  let _v1 = window.screen.height - _v0 > window.visualViewport.height;
                  return _v0 !== _v1 ? _v1 : _v0;
                });
              }, 100);
              return window.visualViewport.addEventListener("resize", _v0), () => {
                window.visualViewport.removeEventListener("resize", _v0);
              };
            }
          }), _v1;
        }(),
        _v11 = (0, _v9.useMemo)(() => _v66(), []),
        _v12 = _v128.EComposerSessionType.LIVE_EVENT,
        _v13 = !!_v9?.hasRegistration,
        _v14 = (0, _v9.useMemo)(() => _v11 ? _v287 : _v286, [_v11]),
        _v15 = (0, _v9.useMemo)(() => (_v0 ? window.visualViewport.height : window.visualViewport.width) * .75, [_v0]),
        _v16 = (0, _v9.useMemo)(() => _v0 ? "0" : _v4 ? `-${(0, _v31.rem)(_v15 - _v2)}` : "0", [_v15, _v4, _v0, _v2]),
        _v17 = function (_v0) {
          let _v1 = (0, _v23.useViewer)(),
            [_v2, _v3] = (0, _v9.useState)(!1),
            [_v4, _v5] = (0, _v9.useState)(!1),
            _v6 = !!_v0?.live?.chat?.roomId;
          return (0, _v9.useEffect)(() => {
            if (_v6 && _v1) {
              let _v0 = _v0?.live?.chat?.roomId;
              setTimeout(async () => {
                try {
                  let _v0 = await _v285(_v0, _v1);
                  _v3(_v0);
                } catch (_v0) {
                  console.error(_v0);
                }
              });
              let _v1 = setInterval(async () => {
                try {
                  _v3(await _v285(_v0, _v1));
                } catch (_v0) {}
              }, 0);
              return () => clearInterval(_v1);
            }
            _v3(!1);
          }, [_v0?.live?.chat?.roomId, _v6, _v1]), (0, _v9.useEffect)(() => {
            _v5(!!(_v6 && _v2));
          }, [_v6, _v2]), _v4;
        }(_v9?.streamableClip),
        _v18 = function (_v0) {
          let _v1 = _v0?.live?.chat?.roomId,
            _v2 = _v0?.live?.chat?.databaseUrl,
            _v3 = _v1 && _v2 ? `${_v2}/${_v1}` : null,
            [_v4, _v5] = (0, _v9.useState)({
              key: null,
              isEnabled: !1
            });
          return (0, _v9.useEffect)(() => {
            if (!_v1 || !_v2) return;
            let _v0 = new EventSource(`${_v2}/chats/${_v1}/meta/reactionsEnabled.json`),
              _v1 = _v0 => {
                try {
                  let {
                    data: _v0
                  } = JSON.parse(_v0.data);
                  _v5({
                    key: _v3,
                    isEnabled: !0 === _v0
                  });
                } catch {}
              };
            return _v0.addEventListener("put", _v1), _v0.addEventListener("patch", _v1), () => _v0.close();
          }, [_v1, _v2, _v3]), _v4.key === _v3 && null !== _v3 && _v4.isEnabled;
        }(_v9?.streamableClip),
        _v19 = _v17 || _v18,
        _v20 = _v18 && !_v17,
        _v21 = (0, _v9.useCallback)(_v0 => {
          _v5(_v0);
        }, []);
      return (0, _v9.useEffect)(() => {
        if (_v0) {
          if (_v1 && _v1.current) {
            let {
                bottom: _v0
              } = _v1.current.getBoundingClientRect(),
              _v1 = window.visualViewport.height - _v0;
            _v3(_v1 < _v15 ? _v1 : _v15);
          }
        } else _v3(420 < _v15 ? 420 : _v15);
      }, [_v15, _v0, _v1]), (0, _v7.jsx)(_v14, {
        isPortrait: _v0,
        marginLeft: _v16,
        isKeyboardOpened: _v10,
        children: (0, _v7.jsx)(_v138.InteractionToolsRegistrantObserver, {
          isActive: _v13,
          sessionId: _v6,
          children: _v19 ? (0, _v7.jsx)(_v137.InteractionToolsEntry, {
            isCustomThemeEnabled: !0,
            isFooterEnabled: !1,
            isManagementDisabled: !0,
            isReactionsOnly: _v20,
            isCollapsibleSignIn: _v19,
            isActiveStatusObservingEnabled: !1,
            isBypassStatusObservingEnabled: !0,
            sessionType: _v12,
            sessionId: _v6,
            roomHashedPassword: _v8,
            roomUnlistedHash: _v7,
            toolbarPanelMaxSize: _v2,
            toolbarPanelOnToggleExtend: _v21
          }) : null
        })
      });
    }),
    _v289 = (0, _v145.default)(async () => ({
      default: (await _v0.A(0)).AccountMenuWithModals
    }), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v290 = ({
      setTeamAccentColor: _v0
    }) => {
      let _v1 = (0, _v9.useContext)(_v30.ViewerContext),
        {
          eventData: _v2,
          shouldShowJoinCTA: _v3
        } = _v73(),
        {
          user: _v4
        } = _v2,
        _v5 = _v4.account === _v154.AccountType.Basic,
        _v6 = _v4.uri,
        _v7 = (0, _v109.useAnalyticsEvent)(),
        {
          data: _v8,
          loading: _v9
        } = (0, _v147.useQuery)(`${_v6}/team`, {
          variables: {
            fields: _v62
          }
        });
      if ((0, _v9.useEffect)(() => {
        _v8?.accentColor && _v0 && _v0(_v8.accentColor);
      }, [_v8?.accentColor, _v0]), _v5) return (0, _v7.jsx)(_v292, {
        children: (0, _v7.jsx)(_v151.Header, {
          clickJoinAnalyticsEvent: () => _v7(_v160())
        })
      });
      let _v10 = _v8?.pictures?.sizes,
        _v11 = _v10?.length ? _v10.length - 1 : 0;
      return (0, _v7.jsxs)(_v291, {
        children: [(0, _v7.jsx)(_v153.HeaderLeftContent, {
          children: !_v9 && (0, _v7.jsx)(_v152.default, {
            teamLogoUrl: _v8?.pictures?.sizes?.[_v11]?.link,
            teamName: _v8?.teamName
          })
        }), (0, _v7.jsx)(_v153.HeaderRightContent, {
          children: _v1?.user ? (0, _v7.jsx)(_v9.Suspense, {
            fallback: (0, _v7.jsx)(_v146.Spinner, {
              size: "sm"
            }),
            children: (0, _v7.jsx)(_v289, {})
          }) : _v3 ? (0, _v7.jsx)(_v16.ThemeProvider, {
            theme: _v148.themes.light,
            children: (0, _v7.jsx)(_v150.LoginJoinModal, {
              type: "join",
              xsrft: _v1?.xsrft || "",
              onSuccess: _v67,
              children: _v0 => (0, _v7.jsx)(_v153.HeaderButton, {
                id: "join-vimeo",
                color: _v8?.accentColor,
                element: "button",
                onClick: () => {
                  _v0(), _v7(_v159()), _v161("join");
                },
                children: _v37.joinVimeoCaption
              })
            })
          }) : null
        })]
      });
    },
    _v291 = (0, _v16.default)(_v153.HeaderMinimalWrapper).withConfig({
      displayName: "EventRecipientHeaderLegacy__StyledHeaderContainer",
      componentId: "sc-caa53fa0-0"
    })`
  z-index: ${({
      isEditingMode: _v0
    }) => _v0 ? "auto" : "15"};
  background: ${({
      theme: _v0
    }) => (0, _v31.rgba)(_v0.content.background, .95)};
  color: ${({
      theme: _v0
    }) => _v0.additions.content.color};
  position: absolute;
  border-bottom: none;
`,
    _v292 = _v16.default.div.withConfig({
      displayName: "EventRecipientHeaderLegacy__AppShellNavContainer",
      componentId: "sc-caa53fa0-1"
    })`
  position: absolute;
  width: 100%;
  z-index: 3;
  @media screen and (min-width: ${(0, _v31.rem)(769)}) {
    /**
     * The LoginJoinModal is nested inside the Header component which has a z-index of 14.
     * We need to increase the z-index a bit so the player trackbar doesn't sit on top of the modal.
     */
    z-index: 15;
  }
`,
    _v293 = _v16.default.div.withConfig({
      displayName: "LayoutLegacy__PageContainer",
      componentId: "sc-a6aba083-0"
    })`
  background: ${({
      theme: _v0
    }) => _v0.content.background};
  color: ${({
      theme: _v0
    }) => _v0.additions.content.color};
  display: flex;
  flex-flow: row nowrap;
  position: relative;
`,
    _v294 = _v16.default.div.withConfig({
      displayName: "LayoutLegacy__PageContainerContent",
      componentId: "sc-a6aba083-1"
    })`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  min-height: 100vh;
  position: relative;
`,
    _v295 = _v16.default.div.withConfig({
      displayName: "LayoutLegacy__ContentContainer",
      componentId: "sc-a6aba083-2"
    })`
  display: flex;
  margin: ${(0, _v31.rem)(63)} 0 0 0;
  border-top: 1px solid ${_v281.core.color.stroke};
  justify-content: flex-end;
  overflow: auto;

  ${({
      isMobile: _v0,
      isPortrait: _v1
    }) => `
      flex-direction: ${_v0 && _v1 ? "column" : "row"};
      height: ${_v0 ? `calc(100vh - ${(0, _v31.rem)(63)})` : "100%"};
    `}
`,
    _v296 = _v16.default.div.withConfig({
      displayName: "LayoutLegacy__MainContentContainer",
      componentId: "sc-a6aba083-3"
    })`
  display: flex;
  justify-content: center;
  flex: 1 0 auto;
  position: relative;
  min-height: 100%;
  height: fit-content;
  overflow: auto;

  ${({
      isMobile: _v0,
      isPortrait: _v1
    }) => `
      flex-shrink: ${_v0 && _v1 ? 0 : 1};
      height: ${_v0 ? "100%" : "auto"};

      ${_v0 && !_v1 ? _v16.css`
              @media screen and (max-width: ${(0, _v31.rem)(660)}) {
                margin-right: ${(0, _v31.rem)(72)};
              }
            ` : ""}
    `}
`,
    _v297 = _v16.default.div.withConfig({
      displayName: "LayoutLegacy__EmbedContainer",
      componentId: "sc-a6aba083-4"
    })`
  display: flex;
  flex-flow: column nowrap;
  flex: 0 1 auto;
  align-items: center;
  width: 100%;
  transition: max-width 0.2s ease-out;

  ${({
      isMobile: _v0,
      isPortrait: _v1
    }) => _v0 ? _v16.css`
          margin: 0;
          height: fit-content;
          max-width: ${_v1 ? "100vw" : `calc((100vh - ${(0, _v31.rem)(64)}) / 0.5625)`};
        ` : _v16.css`
          max-width: calc(100vw - ${(0, _v31.rem)(40)});
          margin: ${(0, _v31.rem)(20)} ${(0, _v31.rem)(12)} ${(0, _v31.rem)(20)};

          @media screen and (min-width: ${(0, _v31.rem)(769)}) {
            max-width: calc(100vw - ${(0, _v31.rem)(240)});
          }

          @media screen and (min-width: ${(0, _v31.rem)(0)}) {
            max-width: calc(100vw - ${(0, _v31.rem)(240)});
          }
        `};
`,
    _v298 = _v16.default.div.withConfig({
      displayName: "LayoutLegacy__TitleAndDescription",
      componentId: "sc-a6aba083-5"
    })`
  width: ${({
      isFullWidth: _v0
    }) => _v0 ? "100%" : `calc(100% - ${(0, _v31.rem)(80)})`};
  display: flex;
  flex-direction: column;
  gap: ${(0, _v31.rem)(4)};

  @media screen and (min-width: ${(0, _v31.rem)(769)}) {
    width: 100%;
    align-self: flex-start;
  }

  @media screen and (max-width: ${(0, _v31.rem)(480)}) {
    width: 100%;
    padding-bottom: ${(0, _v31.rem)(72)};
  }
`,
    _v299 = (0, _v16.default)(_v99).withConfig({
      displayName: "LayoutLegacy__Title",
      componentId: "sc-a6aba083-6"
    })`
  font-size: ${(0, _v31.rem)(32)};
  font-weight: 700;
  letter-spacing: ${(0, _v31.rem)(-.8)};
  padding: ${(0, _v31.rem)(5)};
  hyphens: auto;
  color: ${({
      theme: _v0
    }) => _v0.additions.content.color};
  background: ${({
      theme: _v0
    }) => _v0.content.background};
`;
  _v16.default.div.withConfig({
    displayName: "LayoutLegacy__BorderContainer",
    componentId: "sc-a6aba083-7"
  })`
  border: ${({
    theme: _v0
  }) => `${(0, _v31.rem)(1)} solid ${_v0.additions.content.border3}`};
`;
  let _v300 = _v16.default.div.withConfig({
    displayName: "LayoutLegacy__Inner",
    componentId: "sc-a6aba083-8"
  })`
  z-index: ${({
    isCommentsShowing: _v0
  }) => _v0 ? "auto" : 2};
  transition: transform 300ms;
  transform-origin: top;
  ${({
    scaleup: _v0
  }) => _v0 && "transform: scale(1.05)"};
`;
  _v16.default.div.withConfig({
    displayName: "LayoutLegacy__ResponsiveContainer",
    componentId: "sc-a6aba083-9"
  })`
  min-width: ${(0, _v31.rem)(240)};
  width: 100%;
  overflow: hidden;
  height: fit-content;
  flex-shrink: 0;
  ${({
    isMobile: _v0,
    isPortrait: _v1
  }) => _v16.css`
    max-width: ${_v0 && !_v1 ? `calc((100vh - ${(0, _v31.rem)(64)}) / 0.5625)` : "calc(50vh / 0.5625)"};
    margin: 0 auto;

    @media screen and (min-width: ${(0, _v31.rem)(769)}) {
      max-width: calc(
        (100vh - ${(0, _v31.rem)(_v0 ? _v1 ? 264 : 64 : 264)}) /
          ${.5625}
      );
      padding-top: ${_v0 ? _v1 ? (0, _v31.rem)(8) : 0 : (0, _v31.rem)(8)};
    }
  `};

  ${_v300} {
    position: relative;
    background-color: black;
    > div {
      position: absolute;
    }
    height: 0;
    width: 100%;
    padding-bottom: ${56.25}%;
  }
`;
  let _v301 = _v16.default.div.withConfig({
    displayName: "LayoutLegacy__EventInfoContainer",
    componentId: "sc-a6aba083-10"
  })`
  flex-direction: column;
  display: flex;
  margin-top: ${(0, _v31.rem)(10)};
  width: 100%;

  ${({
    paddingEnabled: _v0,
    isMobile: _v1,
    isPortrait: _v2
  }) => _v16.css`
    padding-bottom: ${_v0 ? (0, _v31.rem)(48) : 0};
    max-width: ${_v1 && !_v2 ? `calc((100vh - ${(0, _v31.rem)(64)}) / 0.5625)` : "calc(50vh / 0.5625)"};

    @media screen and (min-width: ${(0, _v31.rem)(769)}) {
      max-width: calc(
        (100vh - ${(0, _v31.rem)(_v1 ? _v2 ? 264 : 64 : 264)}) /
          ${.5625}
      );
    }
  `}
`;
  (0, _v16.default)(_v169.Notification).withConfig({
    displayName: "LayoutLegacy__Notification",
    componentId: "sc-a6aba083-11"
  })`
  background: ${({
    theme: _v0
  }) => _v0.element.bg2};
`, _v16.default.div.withConfig({
    displayName: "LayoutLegacy__MatureContainer",
    componentId: "sc-a6aba083-12"
  })`
  position: relative;
  background: black;
  width: 100%;
  min-width: ${(0, _v31.rem)(240)};
  max-width: calc(50vh / ${.5625});
  margin: 0 auto;
  height: 0;
  padding-bottom: ${56.25}%;

  @media screen and (min-width: ${(0, _v31.rem)(769)}) {
    width: calc((100vh - ${(0, _v31.rem)(264)}) / ${.5625});
    max-width: 100%;
    padding-top: ${(0, _v31.rem)(8)};
  }
`, _v16.default.div.withConfig({
    displayName: "LayoutLegacy__InnerContainer",
    componentId: "sc-a6aba083-13"
  })`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;

  button {
    font-size: ${(0, _v31.rem)(16)};
  }
`, (0, _v16.default)(_v171.Paragraph).withConfig({
    displayName: "LayoutLegacy__Caption",
    componentId: "sc-a6aba083-14"
  })`
  font-size: ${(0, _v31.rem)(16)};
  margin-bottom: ${(0, _v31.rem)(25)};
  color: white;
`;
  let _v302 = _v16.default.div.withConfig({
      displayName: "LayoutLegacy__AdvertisingLabelWrapper",
      componentId: "sc-a6aba083-15"
    })`
  display: flex;
  align-items: center;
  padding: ${(0, _v31.rem)(5)};
`,
    _v303 = _v16.default.span.withConfig({
      displayName: "LayoutLegacy__AdvertisingLabel",
      componentId: "sc-a6aba083-16"
    })`
  padding-top: ${(0, _v31.rem)(1)};
  font-size: ${(0, _v31.rem)(12)};
  line-height: ${(0, _v31.rem)(15)};
  font-weight: 500;
  color: #496073;
`,
    _v304 = (0, _v16.default)(_v170.CircleInfoSmall).withConfig({
      displayName: "LayoutLegacy__InfoIcon",
      componentId: "sc-a6aba083-17"
    })`
  width: ${(0, _v31.rem)(24)};
  height: ${(0, _v31.rem)(24)};
`,
    _v305 = _v16.default.div.withConfig({
      displayName: "LayoutLegacy__LeadCaptureLoading",
      componentId: "sc-a6aba083-18"
    })`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
  function _v306({
    setLeadUuid: _v0,
    leadUuid: _v1
  }) {
    let {
        apiEventId: _v2,
        eventData: _v3,
        eventId: _v4,
        ingestStatus: _v5,
        currentClip: _v6,
        hasNewLeadCaptureFlow: _v7,
        cgPreviewType: _v8
      } = _v73(),
      {
        clipToPlay: _v9,
        title: _v10,
        streamDescription: _v11,
        metadata: _v12,
        chatEnabled: _v13,
        streamPrivacy: _v14,
        settingsLink: _v15
      } = _v3,
      _v16 = (0, _v87.useRouter)(),
      _v17 = (0, _v23.useViewer)(),
      _v18 = _v17?.user ?? null,
      _v19 = _v17?.ofcomQualifies,
      _v20 = !!_v12?.interactions?.edit,
      _v21 = (0, _v9.useRef)(null),
      _v22 = (0, _v9.useMemo)(() => _v66(), []),
      _v23 = (0, _v117.useIsPortraitScreenOrientation)(),
      _v24 = (0, _v109.useAnalyticsEvent)(),
      _v25 = _v6?.contentRating,
      _v26 = !!_v25?.includes(_v47),
      _v27 = !!_v25?.includes(_v46),
      _v28 = !!_v25?.includes(_v48),
      _v29 = null === _v18 && _v19 && (_v14?.view === _v50 || _v14?.view === _v51 || _v14?.view === _v52) && !_v26,
      _v30 = _v6 ? `${window.location.origin}/event/${_v4}${_v6.uri}` : window.location.href,
      _v31 = _v1 ? _v25.PREVIEW_TYPE.CONFIRMATION : _v8,
      {
        registrant: _v32,
        liveStatus: {
          data: {
            status: _v33
          },
          initialDataLoaded: _v34
        }
      } = _v85(),
      _v35 = (_v32.data.isBlocked && _v32.called || !_v32.initialDataLoaded) && _v33 !== _v54,
      _v36 = _v33 === _v54 || _v33 === _v53 && _v1 || _v1 && [4, 2].includes(_v5),
      _v37 = _v0 => {
        if (![_v25.PREVIEW_TYPE.FORM, _v25.PREVIEW_TYPE.LOGIN_SCREEN].includes(_v0)) return;
        let _v1 = _v16.asPath.split("?"),
          _v2 = _v1[0].replace(/\/$/, ""),
          _v3 = _v2.split("/").pop(),
          _v4 = void 0 !== _v1[1] ? `?${_v1[1]}` : "",
          _v5 = _v0 === _v25.PREVIEW_TYPE.FORM ? _v55.REGISTER : _v55.SIGNIN;
        if (Object.values(_v55).includes(_v3)) {
          let _v0 = _v2.replace(_v3, _v5);
          _v16.push(`${_v0}${_v4}`);
        } else _v16.push(`${_v2}/${_v5}${_v4}`);
      };
    return ((0, _v9.useEffect)(() => {
      !_v32.loading && _v32.called && !_v32.data.isValidRegistrant && (_v0?.(""), _v2 && (0, _v116.deleteCookie)(_v2));
    }, [_v32, _v2]), (0, _v9.useEffect)(() => {
      _v18 && 5 === _v5 && _v88.GoogleTagManager.trackEvent("live_event_ended_for_viewer");
    }, [_v5, _v18]), (0, _v9.useEffect)(() => {
      _v24(_v158("workflow.visit_svv_recipient", 7, {
        customizations: null,
        referer: window.location.href,
        speed_controls_enabled: _v9?.embed?.speed || null,
        live_event_id: _v4 || null,
        live_event_privacy: _v3.streamPrivacy?.view || null,
        live_event_embed_privacy: _v3.streamPrivacy?.embed || null,
        is_live_chat_enabled: _v13,
        is_mobile_web: _v22
      }));
    }, [_v13, _v9?.embed?.speed, _v3.streamPrivacy?.embed, _v3.streamPrivacy?.view, _v4, _v22, _v24]), (!_v36 || _v35) && _v7) ? (0, _v7.jsxs)(_v7.Fragment, {
      children: [_v20 && !_v22 && (0, _v7.jsx)(_v271, {
        href: _v15
      }), _v34 ? (0, _v7.jsx)(_v276.LeadCaptureView, {
        previewType: _v31,
        type: _v166.ENTITY_TYPE.EVENT,
        entityId: _v2,
        setLeadUuid: _v0,
        onPreviewTypeChanged: _v37,
        onMount: () => {
          _v37(_v31);
        },
        onUnmount: () => {
          let _v0 = _v16.asPath.split("?"),
            _v1 = _v0[0].replace(/\/$/, ""),
            _v2 = _v1.split("/").pop(),
            _v3 = void 0 !== _v0[1] ? `?${_v0[1]}` : "";
          if (Object.values(_v55).includes(_v2)) {
            let _v0 = _v1.replace(_v2, "");
            _v16.push(`${_v0}${_v3}`);
          }
        }
      }) : (0, _v7.jsx)(_v305, {
        children: (0, _v7.jsx)(_v146.Spinner, {})
      })]
    }) : (0, _v7.jsxs)(_v7.Fragment, {
      children: [_v20 && !_v22 && (0, _v7.jsx)(_v271, {
        href: _v15
      }), (0, _v7.jsx)(_v293, {
        children: (0, _v7.jsxs)(_v294, {
          isMobile: _v22,
          children: [(0, _v7.jsx)(_v290, {}), (0, _v7.jsxs)(_v295, {
            isMobile: _v22,
            isPortrait: _v23,
            children: [(0, _v7.jsxs)(_v296, {
              isMobile: _v22,
              isPortrait: _v23,
              children: [(0, _v7.jsxs)(_v297, {
                isMobile: _v22,
                isPortrait: _v23,
                children: [_v29 ? (0, _v7.jsx)(_v268, {
                  isUnrated: _v27,
                  redirectUrl: _v30
                }) : (0, _v7.jsx)(_v267, {
                  ref: _v21
                }), (0, _v7.jsx)(_v301, {
                  isMobile: _v22,
                  isPortrait: _v23,
                  paddingEnabled: !1,
                  children: (0, _v7.jsxs)(_v298, {
                    isFullWidth: !1,
                    children: [(0, _v7.jsx)(_v299, {
                      content: _v10,
                      allowNewLines: !1,
                      contentEditable: !1,
                      shouldDisplayLinks: !1
                    }), (0, _v7.jsx)(_v274, {
                      display: !_v26 && _v14?.view === _v50,
                      isUnrated: _v27
                    }), _v11 && (0, _v7.jsx)(_v111, {
                      contentEditable: !1,
                      text: _v11
                    }), _v28 && (0, _v7.jsxs)(_v302, {
                      children: [(0, _v7.jsx)(_v304, {}), (0, _v7.jsx)(_v303, {
                        children: _v37.thisVideoContainsAdvertisment
                      })]
                    })]
                  })
                })]
              }), _v22 || !_v17 ? null : (0, _v7.jsx)(_v118.EssentialFooter, {
                ..._v17,
                enableQuotaMenu: !1,
                position: "absolute"
              })]
            }), (0, _v7.jsx)(_v288, {
              isPortrait: _v23,
              playerRef: _v21
            })]
          })]
        })
      })]
    });
  }
  let _v307 = _v0 => {
      let {
          eventId: _v1,
          eventHash: _v2
        } = _v0,
        _v3 = _v2 ? `${_v1}:${_v2}` : _v1,
        _v4 = (0, _v21.getLeadCaptureCookie)(_v3),
        [_v5, _v6] = (0, _v9.useState)(_v4),
        _v7 = (0, _v23.useViewer)(),
        _v8 = _v7?.teamUser?.ownerId ?? _v7?.user?.id,
        {
          settings: _v9
        } = (0, _v22.useOrionSettings)(),
        {
          capabilities: _v10,
          error: _v11,
          ready: _v12
        } = (0, _v20.useCapability)(["hasEventSeriesEnabled"], _v8);
      return ((0, _v9.useEffect)(() => {
        _v6(_v4);
      }, [_v4]), _v9.enable_event_series || !_v8 || _v12 || _v11) ? (0, _v7.jsx)(_v72, {
        ..._v0,
        leadUuid: _v5,
        children: (0, _v7.jsx)(_v84, {
          leadUuid: _v5,
          children: _v9.enable_event_series || _v10.hasEventSeriesEnabled ? (0, _v7.jsx)(_v280, {
            setLeadUuid: _v6,
            leadUuid: _v5
          }) : (0, _v7.jsx)(_v306, {
            setLeadUuid: _v6,
            leadUuid: _v5
          })
        })
      }) : null;
    },
    _v308 = _v0 => (0, _v7.jsx)(_v16.ThemeProvider, {
      theme: _v17.applyCustomThemeSVV,
      children: (0, _v7.jsx)(_v18.PlayerContextProvider, {
        type: _v19.PlayerType.VimeoPlayer,
        assetUrls: _v0.playerAssetUrls,
        children: (0, _v7.jsx)(_v307, {
          ..._v0
        })
      })
    });
  (0, _v10.withPageSetup)(async _v0 => {
    let _v1,
      _v2,
      _v3,
      _v4,
      _v5 = _v0.params?.params;
    if (!_v5 || "string" == typeof _v5) return {
      notFound: !0
    };
    let {
        eventId: _v6,
        eventHash: _v7,
        path: _v8
      } = (_v1 = _v5.length, _v2 = _v5[0], _v3 = null, _v4 = "", 4 === _v1 && "videos" === _v5[1] ? (_v4 = _v56.EVENT_VIDEO_HASH, _v3 = _v5[3]) : 3 === _v1 ? "videos" === _v5[1] ? _v4 = _v56.EVENT_VIDEO : "register" === _v5[2] ? (_v4 = _v56.EVENT_HASH_REGISTER, _v3 = _v5[1]) : "signin" === _v5[2] && (_v4 = _v56.EVENT_HASH_SIGNIN, _v3 = _v5[1]) : 2 === _v1 ? "register" === _v5[1] ? _v4 = _v56.EVENT_REGISTER : "signin" === _v5[1] ? _v4 = _v56.EVENT_SIGNIN : (_v4 = _v56.EVENT_HASH, _v3 = _v5[1]) : 1 === _v1 && (_v4 = _v56.EVENT), {
        eventId: _v2,
        eventHash: _v3,
        path: _v4
      }),
      _v9 = _v0.req.headers.referer;
    try {
      let _v0 = await _v14({
        where: {
          eventId: parseInt(_v6, 10)
        },
        query: {
          ...(_v7 && {
            eventHash: _v7
          }),
          ...(_v9 && {
            referrer: _v9
          })
        },
        select: ["redirectUrl"],
        headers: _v0.headers,
        baseUrl: _v0.baseUrl
      });
      if (_v0.redirectUrl) return {
        redirect: {
          destination: _v0.redirectUrl,
          permanent: !1
        }
      };
    } catch {
      return {
        notFound: !0
      };
    }
    let _v10 = _v7 ? `${_v6}:${_v7}` : _v6,
      _v11 = null;
    try {
      let _v0 = await (0, _v15.getLiveEvent)({
        where: {
          liveEventId: _v10
        },
        select: ["title", "streamDescription", "streamPrivacy", "pictures.baseLink", "pictures.defaultPicture"],
        headers: _v0.headers,
        baseUrl: _v0.baseUrl
      });
      _v11 = {
        title: _v0.title ?? "",
        description: function (_v0) {
          if (!_v0) return "";
          let _v1 = 160;
          !/[a-z]/.test(_v0) && /[A-Z]/.test(_v0) && (_v1 = Math.floor(_v1 / 2));
          let _v2 = _v0;
          return _v0.length > _v1 && (_v2 = `${_v0.slice(0, _v1).replace(/\s+\S*$/, "")}…`), _v2.replace(/[\r\n]+/g, " ").trim();
        }(_v0.streamDescription),
        isUnlisted: _v0.streamPrivacy?.view === "unlisted",
        ogImage: _v0.pictures && !_v0.pictures.defaultPicture ? _v0.pictures.baseLink : null
      };
    } catch {
      _v11 = null;
    }
    return {
      props: {
        eventId: _v6,
        eventHash: _v7,
        path: _v8,
        hasThemeSupport: !0,
        eventMetadata: _v11
      }
    };
  }, {
    inlineViewer: "all",
    inlinePlayerAssets: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v0 => {
    let {
        eventMetadata: _v1,
        ..._v2
      } = _v0,
      _v3 = (0, _v9.useContext)(_v30.ViewerContext);
    return (0, _v11.useEnterpriseSiteRedirect)(_v3?.teamUser?.enterpriseSiteDomain), (0, _v7.jsxs)(_v7.Fragment, {
      children: [(0, _v7.jsx)(_v8.default, {
        children: _v1 ? (0, _v7.jsxs)(_v7.Fragment, {
          children: [(0, _v7.jsx)("title", {
            children: _v1.title || "Vimeo"
          }), (0, _v7.jsx)("meta", {
            name: "description",
            content: _v1.description
          }), (0, _v7.jsx)("meta", {
            property: "og:title",
            content: _v1.title
          }), (0, _v7.jsx)("meta", {
            property: "og:description",
            content: _v1.description
          }), _v1.ogImage && (0, _v7.jsxs)(_v7.Fragment, {
            children: [(0, _v7.jsx)("meta", {
              property: "og:image",
              content: _v1.ogImage
            }), (0, _v7.jsx)("meta", {
              property: "og:image:secure_url",
              content: _v1.ogImage
            }), (0, _v7.jsx)("meta", {
              property: "og:image:type",
              content: "image/jpeg"
            })]
          }), _v1.isUnlisted && (0, _v7.jsx)("meta", {
            name: "robots",
            content: "noindex, nofollow"
          }), (0, _v7.jsx)("link", {
            rel: "canonical",
            href: `https://vimeo.com/event/${_v2.eventId}`
          })]
        }) : (0, _v7.jsx)("title", {
          children: "Vimeo"
        })
      }), _v3 && _v2.playerAssetUrls ? (0, _v7.jsx)(_v308, {
        ..._v2
      }) : null]
    });
  }], 0);
}