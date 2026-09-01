{
  "use strict";

  var _v1,
    _v2,
    _v3,
    _v4,
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0);
  async function _v12({
    baseUrl: _v0,
    select: _v1,
    where: {
      eventId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v10.measureLatency)("getInternalPageEvent", "GET", async () => {
      let _v0 = await fetch(`${_v0}/internal/page/event/${_v2}?${(0, _v11.searchQueryString)(_v3)}&fields=${_v1.map(_v11.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v11.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v11.deepCamelCase)(_v1);
    });
  }
  var _v13 = _v0.i(0),
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
    _v35 = _v0.i(0);
  let _v36 = {
      clipIndexText: (_v0, _v1) => (0, _v35.translate)({
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
      totalClipsCountText: _v0 => (0, _v35.translate)({
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
      embedPlaylistOwnerLabelText: _v0 => (0, _v35.translate)({
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
      eventNotStartedCaption: (0, _v35.translate)({
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
      chatToggleAriaLabel: (0, _v35.translate)({
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
      closeInteractionPanelAriaLabel: (0, _v35.translate)({
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
      openInteractionPanelAriaLabel: (0, _v35.translate)({
        singular: "Open chat",
        dictionary: {
          es: {
            singular: "Abrir chat"
          },
          "de-DE": {
            singular: "Chat öffnen"
          },
          "fr-FR": {
            singular: "Ouvrir le chat"
          },
          "ja-JP": {
            singular: "チャットを開く"
          },
          "ko-KR": {
            singular: "채팅 열기"
          },
          "pt-BR": {
            singular: "Abrir chat"
          },
          "zh-CN": {
            singular: "打开聊天"
          }
        }
      }),
      chatPanelTitle: (0, _v35.translate)({
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
        daily: (0, _v35.translate)({
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
        weekdays: (0, _v35.translate)({
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
        weekends: (0, _v35.translate)({
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
      enterPasswordCaption: (0, _v35.translate)({
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
      incorrectPasswordCaption: (0, _v35.translate)({
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
      joinVimeoCaption: (0, _v35.translate)({
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
      logInCaption: (0, _v35.translate)({
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
      matureContentOverlayCaption: (0, _v35.translate)({
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
      nextClipLabelText: (0, _v35.translate)({
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
      notRatedContentOverlayCaption: (0, _v35.translate)({
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
      passwordPromptMessage: (0, _v35.translate)({
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
      registerToAttend: (0, _v35.translate)({
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
      register: (0, _v35.translate)({
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
      closeRegistration: (0, _v35.translate)({
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
      previewBarText: (0, _v35.translate)({
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
      previewBarButtonText: (0, _v35.translate)({
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
      openChatButtonText: (0, _v35.translate)({
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
      submit: (0, _v35.translate)({
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
      scheduledCaption: (0, _v35.translate)({
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
        unrated: (0, _v35.translate)({
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
        mature: (0, _v35.translate)({
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
      thisVideoContainsAdvertisment: (0, _v35.translate)({
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
      trackViewCountText: _v0 => (0, _v35.translate)({
        singular: "{COUNT} view",
        plural: "{COUNT} views",
        count: _v0 || 0,
        replacements: {
          COUNT: (0, _v35.humanize)(_v0 || 0)
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
      upNextHeaderText: (0, _v35.translate)({
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
      watchLiveCaption: (0, _v35.translate)({
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
      getMoreStorage: (0, _v35.translate)({
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
      upgradeNow: (0, _v35.translate)({
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
    _v37 = _v14.default.form.withConfig({
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
    _v38 = _v14.default.div.withConfig({
      displayName: "PasswordPrompt__Row",
      componentId: "sc-5edd1ae5-1"
    })`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-end;
  padding: 0 ${(0, _v30.rem)(50)};
  width: 100%;
`,
    _v39 = (0, _v14.default)(_v31.Input).withConfig({
      displayName: "PasswordPrompt__PasswordInput",
      componentId: "sc-5edd1ae5-2"
    })`
  min-width: ${(0, _v30.rem)(320)};
`,
    _v40 = (0, _v14.default)(_v33.Button).withConfig({
      displayName: "PasswordPrompt__SubmitButton",
      componentId: "sc-5edd1ae5-3"
    })`
  width: ${(0, _v30.rem)(320)};
  margin: ${(0, _v30.rem)(15)} 0 0;
  @media screen and (min-width: ${(0, _v30.rem)(768)}) {
    margin-left: ${(0, _v30.rem)(15)};
    width: auto;
  }
`,
    _v41 = (0, _v14.default)(_v32.Notice).withConfig({
      displayName: "PasswordPrompt__NoticeStyled",
      componentId: "sc-5edd1ae5-4"
    })`
  width: ${(0, _v30.rem)(320)};
  margin: ${(0, _v30.rem)(25)} 0 0;
  @media screen and (min-width: ${(0, _v30.rem)(768)}) {
    width: auto;
  }
`,
    _v42 = (0, _v14.default)(_v34.Header).attrs({
      size: "1"
    }).withConfig({
      displayName: "PasswordPrompt__PromptMessage",
      componentId: "sc-5edd1ae5-5"
    })`
  max-width: none;
`;
  function _v43({
    eventId: _v0,
    xsrft: _v1,
    onSuccess: _v2
  }) {
    let [_v3, _v4] = (0, _v7.useState)(""),
      [_v5, _v6] = (0, _v7.useState)(!1),
      [_v7, _v8] = (0, _v7.useState)(!1),
      _v9 = (0, _v7.useCallback)(_v0 => {
        _v4(_v0.currentTarget.value);
      }, [_v3, _v4]),
      _v10 = (0, _v7.useCallback)(_v0 => {
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
    return (0, _v5.jsxs)(_v37, {
      onSubmit: _v10,
      children: [(0, _v5.jsx)(_v42, {
        children: _v36.passwordPromptMessage
      }), (0, _v5.jsxs)(_v38, {
        children: [(0, _v5.jsx)(_v39, {
          size: "md",
          type: "password",
          id: `${_v0}`,
          value: _v3,
          onChange: _v9,
          placeholder: _v36.enterPasswordCaption,
          "aria-label": _v36.enterPasswordCaption,
          disabled: _v7
        }), (0, _v5.jsx)(_v40, {
          disabled: _v7,
          size: "md",
          format: "primary",
          children: _v36.submit
        })]
      }), _v5 && (0, _v5.jsx)(_v41, {
        format: "negative",
        role: "alert",
        children: _v36.incorrectPasswordCaption
      })]
    });
  }
  var _v44 = _v0.i(0);
  let _v45 = "unrated",
    _v46 = "safe",
    _v47 = "advertisement",
    _v48 = "streaming",
    _v49 = "anybody",
    _v50 = "unlisted",
    _v51 = "password",
    _v52 = "started",
    _v53 = "ended",
    _v54 = {
      REGISTER: "register",
      SIGNIN: "signin"
    },
    _v55 = {
      EVENT_VIDEO_HASH: "/event/:eventId/videos/:clipId/:eventHash",
      EVENT_VIDEO: "/event/:eventId/videos/:clipId",
      EVENT_REGISTER: `/event/:eventId/${_v54.REGISTER}`,
      EVENT_SIGNIN: `/event/:eventId/${_v54.SIGNIN}`,
      EVENT_HASH_REGISTER: `/event/:eventId/:eventHash/${_v54.REGISTER}`,
      EVENT_HASH_SIGNIN: `/event/:eventId/:eventHash/${_v54.SIGNIN}`,
      EVENT_HASH: "/event/:eventId/:eventHash",
      EVENT: "/event/:eventId(\\d+)"
    },
    _v56 = (_v0, _v1 = !1, _v2 = "", _v3 = !1) => {
      let [_v4, {
          data: _v5,
          loading: _v6,
          called: _v7,
          error: _v8
        }] = (0, _v44.useGetLiveEventLazy)(),
        _v9 = _v5?.status;
      return (0, _v7.useEffect)(() => {
        let _v0;
        if (!_v1 || !_v0 || _v9 === _v53) return;
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
      }, [_v0, _v9, _v3, _v2, _v1, _v4]), (0, _v7.useMemo)(() => ({
        status: _v9,
        loading: _v6,
        called: _v7,
        initialDataLoaded: !!_v5 || !!_v8
      }), [_v6, _v9, _v5, _v8, _v7]);
    };
  var _v57 = _v0.i(0),
    _v58 = _v0.i(0);
  let _v59 = ["chat_enabled", "embed.autoplay", "embed.byline", "embed.loop", "embed.playlist", "embed.portrait", "embed.schedule", "embed.show_latest_archived_clip", "embed.title", "embed.logos", "user.uri", "user.name", "user.account", "title", "uri", "schedule", "stream_description", "lead_uuid", "settings_link", "metadata.connections.team_member", "metadata.interactions.edit", "clip_to_play.name", "clip_to_play.uri", "clip_to_play.embed.speed", "clip_to_play.config_url", "clip_to_play.pictures", "clip_to_play.live.status", "clip_to_play.live.chat.room_id", "clip_to_play.live.chat.database_url", "clip_to_play.privacy.embed", "clip_to_play.privacy.view", "clip_to_play.user.account", "clip_to_play.user.uri", "clip_to_play.app.uri", "clip_to_play.password", "clip_to_play.content_rating", "streamable_clip.name", "streamable_clip.uri", "streamable_clip.config_url", "streamable_clip.pictures", "streamable_clip.live.status", "streamable_clip.live.chat.room_id", "streamable_clip.live.chat.database_url", "streamable_clip.content_rating", "stream_privacy.embed", "stream_privacy.view", "has_registration", "has_forced_lead_capture_form", "can_enable_audience_speaker", "landing_page_logo.type", "landing_page_logo.uri", "landing_page_logo.url"],
    _v60 = ["items", "content_rating", "uri", "name", "config_url", "duration", "stats.plays", "pictures.sizes.link", "live.status"];
  var _v61 = _v0.i(0),
    _v62 = _v0.i(0);
  let _v63 = _v0 => {
      let _v1 = String((0, _v62.default)(_v0.split("/videos/")));
      return Number((0, _v61.default)(_v1.split(":")));
    },
    _v64 = () => null !== (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)),
    _v65 = () => setTimeout(() => window.location.reload(), 0),
    _v66 = (_v0, _v1, _v2, _v3 = !1) => _v0 && _v1 && _v0.uri === _v1.uri ? 4 === _v2 ? "live" : _v3 ? "scheduled_live" : "not_scheduled_live" : "archived_live";
  var _v67 = ((_v1 = {}).OPEN_PLAYLIST = "open_playlist", _v1.CLOSE_PLAYLIST = "close_playlist", _v1.PLAY_ARCHIVED_CLIP = "play_archived_clip", _v1.SWITCH_TO_LIVE_STREAM = "switch_to_live_stream", _v1),
    _v68 = ((_v2 = {}).LIVE_EVENT = "live_event", _v2);
  let _v69 = (0, _v7.createContext)({}),
    _v70 = ({
      eventId: _v0,
      eventHash: _v1,
      path: _v2,
      shouldShowJoinCTA: _v3 = !0,
      children: _v4,
      hasNewLeadCaptureFlow: _v5,
      leadUuid: _v6 = ""
    }) => {
      let _v7 = _v1 ? `${_v0}:${_v1}` : _v0,
        _v8 = (0, _v7.useMemo)(() => {
          switch (_v2) {
            case _v55.EVENT_SIGNIN:
            case _v55.EVENT_HASH_SIGNIN:
              return _v24.PREVIEW_TYPE.LOGIN_SCREEN;
            case _v55.EVENT_REGISTER:
            case _v55.EVENT_HASH_REGISTER:
            default:
              return _v24.PREVIEW_TYPE.FORM;
          }
        }, [_v2]),
        [_v9, _v10] = (0, _v7.useState)(0),
        [_v11, _v12] = (0, _v7.useState)(""),
        [_v13, _v14] = (0, _v7.useState)(null),
        _v15 = (0, _v7.useContext)(_v29.ViewerContext),
        {
          eventData: _v16,
          errorData: _v17,
          revalidate: _v18
        } = function (_v0, _v1, _v2, _v3, _v4, _v5) {
          let _v6 = (0, _v7.useMemo)(() => ({
              variables: {
                fields: _v59,
                password: _v2,
                clip_to_play_id: _v63(_v1?.uri || "").toString(),
                lead_uuid: _v5.leadUuid
              },
              ignoreCache: !0,
              headerOverride: {
                Accept: "application/vnd.vimeo.*+json;version=3.4.9"
              }
            }), [_v2, _v5.leadUuid, _v1]),
            _v7 = (0, _v7.useRef)(""),
            _v8 = (0, _v7.useRef)(_v2),
            _v9 = (0, _v7.useRef)(_v3),
            _v10 = (0, _v7.useRef)(_v5.leadUuid),
            [_v11, {
              data: _v12
            }] = (0, _v57.useLazyQuery)(`/live_events/${_v0}`, _v6),
            _v13 = _v5.hasNewLeadCaptureFlow || !(0, _v23.isErrorResponse)(_v12) && _v12?.hasRegistration,
            _v14 = _v12?.clipToPlay;
          (0, _v7.useEffect)(() => {
            _v1 && !_v1?.configUrl && _v14?.configUrl && _v4(_v14);
          }, [_v14]), (0, _v7.useEffect)(() => {
            _v0 && (_v7.current !== _v0 || _v8.current !== _v2 || _v10.current !== _v5.leadUuid) && (_v7.current = _v0, _v8.current = _v2, _v10.current = _v5.leadUuid, _v11(_v6));
          }, [_v0, _v2, _v6, _v11, _v5.leadUuid]);
          let _v15 = (0, _v7.useCallback)(() => {
            _v11(_v6);
          }, [_v11, _v6]);
          (0, _v7.useEffect)(() => {
            5 === _v3 && _v9.current !== _v3 && (_v9.current = _v3, _v11(_v6));
          }, [_v3, _v6, _v11]);
          let _v16 = _v12?.clipToPlay?.uri;
          return (0, _v7.useEffect)(() => {
            _v12 && !(0, _v23.isErrorResponse)(_v12) && _v1?.uri !== _v12.clipToPlay?.uri && (_v13 ? _v5.leadUuid === _v12.leadUuid && _v4(_v12.clipToPlay) : _v4(_v12.clipToPlay));
          }, [_v16, _v5.leadUuid, _v13]), {
            eventData: (0, _v23.isErrorResponse)(_v12) ? null : _v12,
            errorData: (0, _v23.isErrorResponse)(_v12) ? _v12 : null,
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
          let _v4 = (0, _v7.useMemo)(() => ({
              variables: {
                fields: _v60,
                password: _v2
              },
              ignoreCache: !0
            }), [_v2]),
            _v5 = (0, _v7.useRef)(_v1?.uri),
            _v6 = (0, _v7.useRef)(_v2),
            _v7 = (0, _v7.useRef)(_v3),
            [_v8, {
              data: _v9
            }] = (0, _v57.useLazyQuery)(`/live_events/${_v0}/videos`, _v4);
          return (0, _v7.useEffect)(() => {
            _v1?.uri && (_v5.current !== _v1.uri || _v6.current !== _v2) && (_v5.current = _v1.uri, _v6.current = _v2, _v8(_v4));
          }, [_v1?.uri, _v2, _v4, _v8]), (0, _v7.useEffect)(() => {
            4 === _v3 && _v7.current !== _v3 && (_v7.current = _v3, _v8(_v4));
          }, [_v3, _v4, _v8]), {
            videosData: _v9
          };
        }(_v7, _v16?.streamableClip, _v11, _v9),
        {
          ingestData: _v21
        } = function (_v0, _v1 = !0, _v2 = 0) {
          let [_v3, _v4] = (0, _v7.useState)(_v1),
            [_v5, {
              data: _v6
            }] = (0, _v57.useLazyQuery)(`${_v0}/ingest/status`);
          (0, _v7.useEffect)(() => (_v0 && _v4(!0), () => {
            _v4(!1);
          }), [_v0]), (0, _v7.useEffect)(() => {
            _v6?.ingestStatus === 5 && _v4(!1);
          }, [_v6?.ingestStatus]);
          let _v7 = !!(_v0 && _v3);
          return (0, _v58.usePoll)(() => _v5({
            ignoreCache: !0
          }), _v7, {
            interval: _v2
          }), {
            ingestData: _v6
          };
        }(_v16?.streamableClip?.uri),
        {
          status: _v22
        } = _v56(_v7, _v19, _v11, !0);
      !_v13 && _v16?.clipToPlay && (_v19 && _v22 !== _v53 ? _v6 === _v16?.leadUuid && _v14(_v16.clipToPlay) : _v14(_v16.clipToPlay)), (0, _v7.useEffect)(() => {
        _v21?.ingestStatus && _v10(_v21?.ingestStatus);
      }, [_v21?.ingestStatus]);
      let _v23 = (0, _v7.useCallback)(_v0 => {
          _v13?.uri !== _v0.uri && _v14(_v0);
        }, [_v13]),
        _v24 = (0, _v7.useMemo)(() => {
          if (!_v16) return null;
          {
            let {
              streamableClip: _v0,
              clipToPlay: _v1,
              schedule: _v2
            } = _v16;
            return _v66(_v0, _v1, _v9, !!_v2);
          }
        }, [_v16?.streamableClip, _v16?.clipToPlay, _v16?.schedule, _v9]);
      if (_v17) switch (_v17.errorCode) {
        case 0:
          return (0, _v5.jsx)(_v43, {
            eventId: _v0,
            xsrft: _v15?.xsrft || "",
            onSuccess: _v12
          });
        case 0:
          if (!_v15?.user) return (0, _v5.jsx)(_v25.BrandedLogin, {
            metaUrl: `/sso/live_event/${_v0}/meta`,
            errorConstructor: _v23.UnauthorizedError
          });
          return (0, _v5.jsx)(_v26.ErrorPage, {
            error: new _v23.UnauthorizedError(_v17.error)
          });
        default:
          return (0, _v5.jsx)(_v26.ErrorPage, {
            error: new _v23.ResourceNotFoundError(_v17.error)
          });
      }
      if (!_v15 || !_v16 || !_v13 && !_v19) return (0, _v5.jsx)(_v27.default, {});
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
          video_id: _v13?.uri ? String(_v63(_v13.uri)) : "",
          video_type: _v24,
          ..._v25
        };
      return (0, _v5.jsx)(_v28.AnalyticsEventProvider, {
        eventData: _v26,
        children: (0, _v5.jsx)(_v69.Provider, {
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
    _v71 = () => (0, _v7.useContext)(_v69);
  var _v72 = _v0.i(0),
    _v73 = _v0.i(0);
  async function _v74({
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
    return (0, _v10.measureLatency)("getLeadCaptureResourceIdRegistrant", "GET", async () => {
      let _v0 = await fetch(`${_v0}/lead_capture/${_v2}/${_v3}/registrants/${_v4}?${(0, _v11.searchQueryString)(_v5)}&fields=${_v1.map(_v11.intoSnakeCase).join(",")}`, {
        ..._v6,
        method: "GET"
      });
      if (!_v0.ok) throw new _v11.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v11.deepCamelCase)(_v1);
    });
  }
  var _v75 = _v0.i(0),
    _v76 = _v0.i(0),
    _v77 = _v0.i(0),
    _v78 = _v0.i(0);
  function _v79() {
    let {
        mutate: _v0
      } = (0, _v76.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v78.useGctlConfig)(),
      [_v5, _v6] = (0, _v77.useInternalState)();
    return [(0, _v7.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/lead_capture/${_v0.where.resourceType}/${_v0.where.resourceId}/registrants/${_v0.where.registrantId}${(0, _v77.serializeQuery)(_v0)}`, _v74({
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
  "true" === _v73.default.env.STORYBOOK && (0, _v77.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v78.useGctlConfig)();
    return (0, _v75.default)(_v2 ? `/lead_capture/${_v2.where.resourceType}/${_v2.where.resourceId}/registrants/${_v2.where.registrantId}${(0, _v77.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v74({
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
  }), "true" === _v73.default.env.STORYBOOK && (0, _v77.assignMswData)(_v79, {
    endpoint: "/lead_capture/:resourceType/:resourceId/registrants/:registrantId",
    method: "GET"
  });
  let _v80 = {
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
    _v81 = (0, _v7.createContext)(_v80),
    _v82 = ({
      leadUuid: _v0,
      ..._v1
    }) => {
      let [_v2, _v3] = (0, _v7.useState)(_v80),
        {
          password: _v4,
          apiEventId: _v5,
          hasNewLeadCaptureFlow: _v6,
          revalidate: _v7
        } = _v71(),
        _v8 = _v56(_v5, _v6, _v4),
        _v9 = ((_v0, _v1) => {
          let [_v2, {
              data: _v3,
              loading: _v4,
              called: _v5,
              error: _v6
            }] = _v79(),
            {
              apiEventId: _v7,
              password: _v8
            } = _v71(),
            _v9 = (0, _v7.useRef)({
              loading: _v4,
              called: _v5,
              initialDataLoaded: !1,
              data: {
                isBlocked: !1,
                isValidRegistrant: !1
              }
            }),
            _v10 = !_v7 || !_v0 || _v0.length < 1,
            _v11 = (0, _v7.useCallback)(() => {
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
          return (0, _v58.usePoll)(_v11, _v1 !== _v53, {
            interval: 0
          }), (0, _v7.useEffect)(() => {
            _v11();
          }, [_v11]), (0, _v7.useMemo)(() => {
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
        _v10 = (0, _v72.usePrevious)(_v9.data.isBlocked);
      return (0, _v7.useEffect)(() => {
        _v3(_v0 => ({
          ..._v0,
          registrant: _v9
        }));
      }, [_v9]), (0, _v7.useEffect)(() => {
        _v3(_v0 => ({
          ..._v0,
          liveStatus: {
            ..._v8,
            data: {
              status: _v8.status
            }
          }
        }));
      }, [_v8]), (0, _v7.useEffect)(() => {
        _v10 && !_v9.data.isBlocked && _v7();
      }, [_v7, _v9, _v10]), (0, _v5.jsx)(_v81.Provider, {
        value: _v2,
        children: _v1.children
      });
    },
    _v83 = () => {
      let _v0 = (0, _v7.useContext)(_v81);
      if (void 0 === _v0) throw Error("useGateContext was used outside of GateContextProvider");
      return _v0;
    };
  var _v84 = _v0.i(0),
    _v85 = _v0.i(0),
    _v86 = _v0.i(0),
    _v87 = _v0.i(0),
    _v88 = _v0.i(0),
    _v89 = _v0.i(0),
    _v90 = _v0.i(0),
    _v91 = _v0.i(0),
    _v92 = _v0.i(0),
    _v93 = _v0.i(0);
  let _v94 = ({
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
      let _v11 = (0, _v7.useRef)(_v9),
        _v12 = (0, _v7.useRef)(null),
        [_v13, _v14] = (0, _v7.useState)(!1),
        [_v15, _v16] = (0, _v7.useState)(_v0),
        [_v17, _v18] = (0, _v7.useState)(_v0),
        [_v19, _v20] = (0, _v7.useState)(!1);
      (0, _v7.useEffect)(() => {
        _v12.current && _v11.current && _v12.current.focus();
      }, []);
      let _v21 = () => {
          let _v0 = _v12?.current?.lastChild;
          _v0 && _v96(_v0);
        },
        _v22 = {
          Enter: _v0 => {
            _v4 && (!_v4 || _v0.shiftKey) || (_v0.preventDefault(), _v12.current?.blur());
          }
        },
        _v23 = (!_v2 || !(_v15.length > _v2)) && (!_v3 || _v3(_v15));
      return (0, _v5.jsxs)(_v105, {
        children: [!_v23 && (0, _v5.jsx)(_v100, {}), (0, _v5.jsx)(_v104, {
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
          children: _v13 ? _v17 : _v5 ? (0, _v5.jsx)(_v93.default, {
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
        }), _v2 && _v15.length > _v2 && (0, _v5.jsx)(_v99, {
          children: `${_v15.length}/${_v2}`
        })]
      });
    },
    _v95 = ({
      className: _v0,
      content: _v1 = "",
      placeholder: _v2,
      shouldDisplayLinks: _v3 = !0,
      ..._v4
    }) => (0, _v5.jsx)(_v102, {
      className: _v0,
      ..._v4,
      children: _v3 ? (0, _v5.jsx)(_v93.default, {
        text: _v1
      }) : _v1
    }),
    _v96 = _v0 => {
      let _v1 = document.createRange(),
        _v2 = window.getSelection();
      _v1.selectNode(_v0), _v2 && (!_v2 || "None" !== _v2.type) && (_v2.removeAllRanges(), _v2.addRange(_v1), _v2.collapseToEnd());
    },
    _v97 = ({
      contentEditable: _v0 = !0,
      ..._v1
    }) => _v0 ? (0, _v5.jsx)(_v94, {
      ..._v1
    }) : (0, _v5.jsx)(_v95, {
      ..._v1
    }),
    _v98 = _v90.bokehTheme.colors.red["500"],
    _v99 = (0, _v14.default)(_v92.Text).withConfig({
      displayName: "EditableText__CharacterCount",
      componentId: "sc-7f56c0ca-0"
    })`
  position: absolute;
  bottom: ${(0, _v30.rem)(0)};
  right: ${(0, _v30.rem)(7)};
  font-size: ${(0, _v30.rem)(12)};
  letter-spacing: ${(0, _v30.rem)(-.4)};
  color: ${_v98};
`,
    _v100 = (0, _v14.default)(_v91.CircleInfo).withConfig({
      displayName: "EditableText__ErrorIcon",
      componentId: "sc-7f56c0ca-1"
    })`
  left: ${(0, _v30.rem)(-30)};
  position: absolute;
  height: ${(0, _v30.rem)(20)};
  width: ${(0, _v30.rem)(20)};

  * {
    fill: ${_v98};
  }
`,
    _v101 = _v14.css`
  border: ${(0, _v30.rem)(1)} solid transparent;
  outline: none;
  resize: none;
  padding: ${(0, _v30.rem)(5)};
  border-radius: ${(0, _v30.rem)(4)};
  -ms-overflow-style: none;
  white-space: pre-wrap;
`,
    _v102 = (0, _v14.default)(_v92.Text).withConfig({
      displayName: "EditableText__JustText",
      componentId: "sc-7f56c0ca-2"
    })`
  ${_v101};
  display: block;
  line-height: normal;
  overflow-wrap: break-word;
  -webkit-line-break: after-white-space;
`,
    _v103 = _v14.css`
  border: ${(0, _v30.rem)(1)} solid ${_v98};
`,
    _v104 = _v14.default.div.withConfig({
      displayName: "EditableText__Editor",
      componentId: "sc-7f56c0ca-3"
    })`
  ${_v101};
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
    }) => _v0 && _v103}

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
    _v105 = _v14.default.div.withConfig({
      displayName: "EditableText__EditorWrapper",
      componentId: "sc-7f56c0ca-4"
    })`
  display: inline;
  position: relative;
  width: 100%;
`;
  var _v106 = _v0.i(0),
    _v107 = _v0.i(0);
  let _v108 = {
      ..._v106.nullVideoContextData,
      ..._v106.nullTeamContext,
      ..._v106.nullUploadContextData
    },
    _v109 = ({
      text: _v0,
      onSave: _v1,
      placeholder: _v2,
      contentEditable: _v3 = !0,
      bottomAttachment: _v4 = null,
      ..._v5
    }) => {
      let _v6 = _v2 || (0, _v35.translate)({
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
        [_v7, _v8] = (0, _v7.useState)(_v0 || ""),
        _v9 = (0, _v7.useRef)(null),
        [_v10, _v11] = (0, _v7.useState)(!1),
        [_v12, _v13] = (0, _v7.useState)(!0),
        [_v14, _v15] = (0, _v7.useState)(!1),
        _v16 = (0, _v107.useAnalyticsEvent)();
      return (0, _v7.useEffect)(() => {
        _v9?.current && _v9.current.offsetHeight > 72 ? _v15(!0) : _v15(!1);
      }, [_v10]), (0, _v5.jsxs)(_v110, {
        children: [(0, _v5.jsx)(_v112, {
          ref: _v9,
          collapsed: _v14 && _v12,
          maxCollapsedHeight: 70,
          onClick: () => {
            _v11(_v3);
          },
          children: (0, _v5.jsx)(_v111, {
            content: _v7,
            contentEditable: _v3,
            maxCharacterCount: 0,
            placeholder: _v6,
            handleSave: _v0 => {
              _v11(!1), _v7 !== _v0 && (_v8(_v0), _v1 && _v1(_v0));
            },
            ..._v5
          })
        }), _v10 || _v14 ? null : _v4, !_v10 && _v14 && (0, _v5.jsxs)(_v5.Fragment, {
          children: [_v12 ? null : _v4, (0, _v5.jsx)(_v113, {
            onClick: () => {
              _v16({
                eventName: "workflow.toggle_description_expand",
                version: 2,
                fields: {
                  location: "svv main field",
                  is_expanded: _v12
                },
                defaultEventFields: _v108
              }), _v13(!_v12);
            },
            children: _v12 ? (0, _v35.translate)({
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
            }) : (0, _v35.translate)({
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
    _v110 = _v14.default.div.withConfig({
      displayName: "Description__Container",
      componentId: "sc-b2854a53-0"
    })`
  display: inline-block;
  width: 100%;
`,
    _v111 = (0, _v14.default)(_v97).withConfig({
      displayName: "Description__StyledEditableText",
      componentId: "sc-b2854a53-1"
    })`
  font-size: ${(0, _v30.rem)(16)};
  line-height: ${(0, _v30.rem)(20)};
  font-weight: 400;
  letter-spacing: 0.01rem;
  padding: ${(0, _v30.rem)(5)};
  border-radius: ${(0, _v30.rem)(4)};
  background: ${({
      theme: _v0
    }) => _v0.content.background};
`,
    _v112 = _v14.default.div.withConfig({
      displayName: "Description__TextContainer",
      componentId: "sc-b2854a53-2"
    })`
  position: relative;
  border: ${(0, _v30.rem)(1)} solid transparent;
  white-space: pre-wrap;
  overflow: hidden;
  &:hover ${_v111} {
    &::after {
      background: unset;
    }
  }
  border-radius: ${(0, _v30.rem)(4)};
  ${({
      collapsed: _v0,
      maxCollapsedHeight: _v1,
      theme: _v2
    }) => _v0 && `
    max-height: ${(0, _v30.rem)(_v1)};
    &::after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      content: '';
      background: linear-gradient(${(0, _v30.rgba)(_v2.content.background, 0)}, ${_v2.content.background});
      pointer-events: none;
    }
    `}
`,
    _v113 = _v14.default.span.withConfig({
      displayName: "Description__CollapseToggle",
      componentId: "sc-b2854a53-3"
    })`
  font-size: ${(0, _v30.rem)(14)};
  cursor: pointer;
  margin-left: ${(0, _v30.rem)(5)};
  margin-bottom: ${(0, _v30.rem)(5)};
  color: ${_v90.bokehTheme.colors.blue["500"]};
  display: inline-block;
`;
  var _v114 = _v0.i(0),
    _v114 = _v114,
    _v115 = _v0.i(0),
    _v116 = _v0.i(0),
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
    _v133 = _v0.i(0);
  let _v134 = (0, _v7.memo)(function ({
      id: _v0 = (0, _v131.createInteractionDomName)("detached-sidebar"),
      isHorizontal: _v1 = !1,
      isPanelOpen: _v2 = !0,
      iconSize: _v3 = "md",
      isFloating: _v4 = !1,
      onItemClick: _v5,
      onClosePanel: _v6,
      onActiveModuleChange: _v7
    }) {
      let _v8 = (0, _v128.useScope)(),
        _v9 = (0, _v7.useRef)(!1),
        [_v10, _v11] = (0, _v7.useState)(null),
        {
          items: _v12
        } = (0, _v133.useInteractionSidebarItems)(_v10),
        _v13 = (0, _v7.useCallback)(_v0 => {
          _v8.emitSignal({
            type: _v132.ELiveSignal.LIVE_PANEL_TAB_CHANGE_REQUEST,
            data: _v0
          }), _v11(_v0);
        }, [_v8]);
      (0, _v7.useEffect)(() => {
        if (!_v12.length) return;
        let _v0 = _v12[0].id,
          _v1 = !!(_v10 && _v12.some(_v0 => _v0.id === _v10));
        if (!_v9.current) {
          _v10 !== _v0 && _v13(_v0);
          return;
        }
        _v1 || _v13(_v0);
      }, [_v10, _v12, _v13]), (0, _v7.useEffect)(() => _v8.subscribeToSignals(_v0 => {
        _v0.type === _v132.ELiveSignal.LIVE_PANEL_TAB_CHANGE_REQUEST && _v11(_v0.data);
      }), [_v8]), (0, _v7.useEffect)(() => {
        if (!_v10 || !_v12.length) return;
        let _v0 = _v12.find(_v0 => _v0.id === _v10);
        _v7?.(_v10, _v0?.header ? String(_v0.header) : void 0, _v0?.panelWidth, _v0?.panelAutoHeight);
      }, [_v10, _v12, _v7]);
      let _v14 = (0, _v7.useCallback)(_v0 => {
        if (_v9.current = !0, _v0 === _v10 && _v2) return void _v6?.();
        _v13(_v0);
        let _v1 = _v12.find(_v0 => _v0.id === _v0);
        _v7?.(_v0, _v1?.header ? String(_v1.header) : void 0, _v1?.panelWidth, _v1?.panelAutoHeight), _v5?.(_v0);
      }, [_v10, _v2, _v12, _v7, _v6, _v5, _v13]);
      return _v12.length ? _v1 && _v4 ? (0, _v5.jsx)(_v120.Flex, {
        id: _v0,
        "data-id": "event-interaction-sidebar",
        flexDirection: "row",
        width: "fit-content",
        gap: 1,
        children: _v12.map(_v0 => {
          let _v1 = _v0.id,
            _v2 = _v2 && _v10 === _v1;
          return (0, _v5.jsxs)(_v120.Flex, {
            role: "button",
            tabIndex: 0,
            "aria-label": String(_v0.label ?? _v1),
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: (0, _v122.rem)(2),
            minWidth: (0, _v122.rem)(64),
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
            children: [(0, _v5.jsx)(_v118.Box, {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: _v2 ? "text-primary" : "text-secondary",
              sx: {
                "& svg": {
                  width: (0, _v122.rem)(24),
                  height: (0, _v122.rem)(24)
                }
              },
              children: (0, _v7.isValidElement)(_v0.icon) ? _v0.icon : null
            }), (0, _v5.jsx)(_v130.FormLabel, {
              textAlign: "center",
              textStyle: "body-xs",
              color: _v2 ? "text-primary" : "text-tertiary",
              marginBottom: "0",
              cursor: "pointer",
              children: _v0.label
            })]
          }, _v1);
        })
      }) : _v1 ? (0, _v5.jsx)(_v120.Flex, {
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
          return (0, _v5.jsxs)(_v120.Flex, {
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
            cursor: "pointer",
            onClick: () => _v14(_v1),
            children: [(0, _v5.jsx)(_v121.IconButton, {
              "aria-label": String(_v0.label ?? _v1),
              variant: "secondary",
              size: _v3,
              borderRadius: "round",
              icon: (0, _v7.isValidElement)(_v0.icon) ? _v0.icon : void 0,
              isActive: _v2,
              onClick: _v0 => {
                _v0.stopPropagation(), _v14(_v1);
              }
            }), (0, _v5.jsx)(_v130.FormLabel, {
              textAlign: "center",
              textStyle: "body-xs",
              color: "text-tertiary",
              marginBottom: "0",
              children: _v0.label
            })]
          }, _v1);
        })
      }) : (0, _v5.jsx)(_v120.Flex, {
        id: _v0,
        "data-id": "event-interaction-sidebar",
        width: (0, _v122.rem)(80),
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
          return (0, _v5.jsxs)(_v129.Center, {
            flexDirection: "column",
            children: [(0, _v5.jsx)(_v121.IconButton, {
              "aria-label": String(_v0.label ?? _v1),
              variant: "secondary",
              size: "lg",
              borderRadius: "round",
              icon: (0, _v7.isValidElement)(_v0.icon) ? _v0.icon : void 0,
              isActive: _v2,
              onClick: () => {
                _v14(_v1);
              }
            }), (0, _v5.jsx)(_v130.FormLabel, {
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
    }),
    _v135 = (0, _v7.memo)(function ({
      id: _v0 = (0, _v131.createInteractionDomName)("detached-sidebar-fullscreen"),
      isHorizontal: _v1 = !1,
      isPanelOpen: _v2 = !0,
      isFloating: _v3 = !1,
      onItemClick: _v4,
      onClosePanel: _v5,
      onActiveModuleChange: _v6
    }) {
      let _v7 = (0, _v128.useScope)(),
        _v8 = (0, _v7.useRef)(!1),
        [_v9, _v10] = (0, _v7.useState)(null),
        {
          items: _v11
        } = (0, _v133.useInteractionSidebarItems)(_v9),
        _v12 = (0, _v7.useCallback)(_v0 => {
          _v7.emitSignal({
            type: _v132.ELiveSignal.LIVE_PANEL_TAB_CHANGE_REQUEST,
            data: _v0
          }), _v10(_v0);
        }, [_v7]);
      (0, _v7.useEffect)(() => {
        if (!_v11.length) return;
        let _v0 = _v11[0].id,
          _v1 = !!(_v9 && _v11.some(_v0 => _v0.id === _v9));
        if (!_v8.current) {
          _v9 !== _v0 && _v12(_v0);
          return;
        }
        _v1 || _v12(_v0);
      }, [_v9, _v11, _v12]), (0, _v7.useEffect)(() => _v7.subscribeToSignals(_v0 => {
        _v0.type === _v132.ELiveSignal.LIVE_PANEL_TAB_CHANGE_REQUEST && _v10(_v0.data);
      }), [_v7]), (0, _v7.useEffect)(() => {
        if (!_v9 || !_v11.length) return;
        let _v0 = _v11.find(_v0 => _v0.id === _v9);
        _v6?.(_v9, _v0?.header ? String(_v0.header) : void 0, _v0?.panelWidth, _v0?.panelAutoHeight);
      }, [_v9, _v11, _v6]);
      let _v13 = (0, _v7.useCallback)(_v0 => {
          if (_v8.current = !0, _v0 === _v9 && _v2) return void _v5?.();
          _v12(_v0);
          let _v1 = _v11.find(_v0 => _v0.id === _v0);
          _v6?.(_v0, _v1?.header ? String(_v1.header) : void 0, _v1?.panelWidth, _v1?.panelAutoHeight), _v4?.(_v0);
        }, [_v9, _v2, _v11, _v6, _v5, _v4, _v12]),
        _v14 = (0, _v7.useCallback)(_v0 => (0, _v7.isValidElement)(_v0.icon) ? (0, _v7.cloneElement)(_v0.icon, {
          isActive: !!_v2 && _v9 === _v0.id
        }) : _v0.icon, [_v9, _v2]);
      return _v11.length ? _v1 && _v3 ? (0, _v5.jsx)(_v120.Flex, {
        id: _v0,
        "data-id": "event-interaction-sidebar",
        flexDirection: "row",
        width: "fit-content",
        gap: 8,
        padding: 8,
        children: _v11.map(_v0 => {
          let _v1 = _v0.id,
            _v2 = _v2 && _v9 === _v1;
          return (0, _v5.jsx)(_v120.Flex, {
            role: "button",
            tabIndex: 0,
            "aria-label": String(_v0.label ?? _v1),
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: (0, _v122.rem)(4),
            minWidth: (0, _v122.rem)(64),
            paddingX: 4,
            paddingY: 4,
            borderRadius: "xl",
            cursor: "pointer",
            backgroundColor: _v2 ? "var(--vimeo-colors-fill-component)" : "transparent",
            transition: "background 0.15s",
            _hover: {
              backgroundColor: "var(--vimeo-colors-fill-component)"
            },
            onClick: () => _v13(_v1),
            onKeyDown: _v0 => {
              ("Enter" === _v0.key || " " === _v0.key) && (_v0.preventDefault(), _v13(_v1));
            },
            children: (0, _v5.jsx)(_v118.Box, {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: _v2 ? "text-primary" : "text-secondary",
              sx: {
                "& svg": {
                  width: (0, _v122.rem)(24),
                  height: (0, _v122.rem)(24)
                }
              },
              children: _v14(_v0)
            })
          }, _v1);
        })
      }) : (0, _v5.jsx)(_v120.Flex, {
        id: _v0,
        "data-id": "event-interaction-sidebar",
        width: (0, _v122.rem)(48),
        height: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: (0, _v122.rem)(8),
        padding: (0, _v122.rem)(8),
        flexShrink: 0,
        alignSelf: "stretch",
        children: _v11.map(_v0 => {
          let _v1 = _v0.id,
            _v2 = _v2 && _v9 === _v1;
          return (0, _v5.jsx)(_v118.Box, {
            as: "button",
            type: "button",
            "aria-label": String(_v0.label ?? _v1),
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: (0, _v122.rem)(32),
            height: (0, _v122.rem)(32),
            flexShrink: 0,
            padding: (0, _v122.rem)(4),
            border: "none",
            borderRadius: (0, _v122.rem)(4),
            cursor: "pointer",
            backgroundColor: _v2 ? "rgba(255, 255, 255, 0.90)" : "rgba(255, 255, 255, 0.10)",
            color: _v2 ? "#0e1216" : "text-primary",
            onClick: () => _v13(_v1),
            sx: {
              "& svg": {
                display: "block",
                margin: "auto",
                width: (0, _v122.rem)(24),
                height: (0, _v122.rem)(24)
              }
            },
            children: _v14(_v0)
          }, _v1);
        })
      }) : null;
    });
  var _v136 = _v0.i(0),
    _v137 = _v0.i(0),
    _v138 = _v0.i(0),
    _v139 = _v0.i(0);
  let _v140 = () => "u" > typeof document && !!(document.fullscreenElement || document.webkitFullscreenElement);
  var _v141 = _v0.i(0);
  async function _v142(_v0, _v1) {
    let _v2 = await fetch(`//${_v1.apiUrl}/live_chat/${_v0}/status`, {
      headers: {
        Authorization: `jwt ${_v1.jwt}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
    if (_v2.ok) return (0, _v141.camelize)(await _v2.json()).chatEnabled;
    throw Error("Failed to fetch chat status data.");
  }
  function _v143(_v0) {
    let _v1 = (0, _v22.useViewer)(),
      [_v2, _v3] = (0, _v7.useState)(!1),
      [_v4, _v5] = (0, _v7.useState)(!1),
      _v6 = !!_v0?.live?.chat?.roomId;
    return (0, _v7.useEffect)(() => {
      if (_v6 && _v1) {
        let _v0 = _v0?.live?.chat?.roomId;
        setTimeout(async () => {
          try {
            let _v0 = await _v142(_v0, _v1);
            _v3(_v0);
          } catch (_v0) {
            console.error(_v0);
          }
        });
        let _v1 = setInterval(async () => {
          try {
            _v3(await _v142(_v0, _v1));
          } catch (_v0) {}
        }, 0);
        return () => clearInterval(_v1);
      }
      _v3(!1);
    }, [_v0?.live?.chat?.roomId, _v6, _v1]), (0, _v7.useEffect)(() => {
      _v5(!!(_v6 && _v2));
    }, [_v6, _v2]), _v4;
  }
  function _v144(_v0) {
    let _v1 = _v0?.live?.chat?.roomId,
      _v2 = _v0?.live?.chat?.databaseUrl,
      _v3 = _v1 && _v2 ? `${_v2}/${_v1}` : null,
      [_v4, _v5] = (0, _v7.useState)({
        key: null,
        isEnabled: !1
      });
    return (0, _v7.useEffect)(() => {
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
  }
  var _v145 = _v0.i(0),
    _v146 = _v0.i(0);
  let _v147 = {
      display: "flex",
      flexDirection: "row",
      alignItems: "stretch",
      flexShrink: 0
    },
    _v148 = {
      backgroundColor: "var(--vimeo-colors-surface)",
      color: "text-primary",
      "[class*='widget-login-screen']": {
        backgroundColor: "transparent !important"
      }
    },
    _v149 = (0, _v7.memo)(function ({
      application: _v0,
      isChatSheetView: _v1,
      isFullscreen: _v2,
      isDismissed: _v3,
      onDismiss: _v4,
      onReOpen: _v5,
      renderContent: _v6
    }) {
      if (_v1) return (0, _v5.jsx)(_v118.Box, {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        minHeight: (0, _v122.rem)(320),
        overflow: "hidden",
        sx: _v148,
        border: "0.5px solid var(--vimeo-colors-stroke)",
        borderRadius: "xl",
        children: _v6(_v0)
      });
      let _v7 = _v2 ? {
        position: "relative",
        alignSelf: "stretch",
        height: "100%",
        top: "auto",
        alignItems: "center",
        paddingLeft: _v3 ? 0 : (0, _v122.rem)(8),
        paddingTop: (0, _v122.rem)(8),
        paddingBottom: (0, _v122.rem)(8),
        transition: "width 0.3s linear",
        backgroundColor: "#000000"
      } : {
        position: "sticky",
        top: (0, _v122.rem)(80),
        alignSelf: "flex-start",
        height: `calc(100vh - ${(0, _v122.rem)(96)})`
      };
      return _v3 ? _v2 ? (0, _v5.jsx)(_v120.Flex, {
        className: "event-interaction-tools-desktop",
        sx: {
          ..._v147,
          zIndex: 5,
          width: (0, _v122.rem)(48),
          ..._v7
        },
        children: (0, _v5.jsx)(_v120.Flex, {
          direction: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          gap: 2,
          padding: 1,
          children: (0, _v5.jsx)(_v118.Box, {
            as: "button",
            type: "button",
            "aria-label": _v36.openInteractionPanelAriaLabel,
            onClick: _v5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: (0, _v122.rem)(32),
            height: (0, _v122.rem)(32),
            padding: (0, _v122.rem)(4),
            border: "none",
            borderRadius: (0, _v122.rem)(4),
            cursor: "pointer",
            backgroundColor: "rgba(255, 255, 255, 0.10)",
            color: "text-primary",
            sx: {
              "& svg": {
                display: "block",
                margin: "auto",
                width: (0, _v122.rem)(24),
                height: (0, _v122.rem)(24)
              }
            },
            children: (0, _v5.jsx)(_v145.Chats, {})
          })
        })
      }) : (0, _v5.jsx)(_v120.Flex, {
        className: "event-interaction-tools-desktop",
        sx: {
          ..._v147,
          zIndex: 5,
          width: (0, _v122.rem)(80),
          ..._v7
        },
        children: (0, _v5.jsxs)(_v120.Flex, {
          direction: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          gap: 4,
          marginLeft: 2,
          children: [(0, _v5.jsx)(_v121.IconButton, {
            "aria-label": _v36.openInteractionPanelAriaLabel,
            onClick: _v5,
            icon: (0, _v5.jsx)(_v145.Chats, {}),
            variant: "secondary",
            size: "lg",
            borderRadius: "round"
          }), (0, _v5.jsx)(_v130.FormLabel, {
            textAlign: "center",
            textStyle: "body-xs",
            color: "text-tertiary",
            marginTop: "xs",
            marginBottom: "0",
            children: _v146.T_CHAT
          })]
        })
      }) : (0, _v5.jsx)(_v120.Flex, {
        className: "event-interaction-tools-desktop",
        sx: {
          ..._v147,
          zIndex: 5,
          width: (0, _v122.rem)(272),
          ..._v7
        },
        children: (0, _v5.jsxs)(_v118.Box, {
          display: "flex",
          flexDirection: "column",
          flex: 1,
          minWidth: 0,
          height: "100%",
          overflow: "hidden",
          border: "0.5px solid var(--vimeo-colors-stroke)",
          borderRadius: "lg",
          sx: _v148,
          children: [(0, _v5.jsx)(_v120.Flex, {
            justifyContent: "flex-end",
            flexShrink: 0,
            padding: _v90.bokehTheme.space[2],
            children: (0, _v5.jsx)(_v119.CloseButton, {
              "aria-label": _v36.closeInteractionPanelAriaLabel,
              onClick: _v4,
              size: "sm",
              variant: "tertiary"
            })
          }), _v6(_v0)]
        })
      });
    }),
    _v150 = "0px 8px 24px var(--vimeo-colors-popover-shadow), 0 0 0 0.5px var(--vimeo-colors-popover-border)",
    _v151 = {
      display: "flex",
      flexDirection: "row",
      alignItems: "stretch",
      flexShrink: 0
    },
    _v152 = {
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
    _v153 = (0, _v7.memo)(function ({
      application: _v0,
      isChatSheetView: _v1,
      isFullscreen: _v2,
      isPanelExpanded: _v3,
      onOpen: _v4,
      onClose: _v5,
      onPanelOpenChange: _v6
    }) {
      let [_v7, _v8] = (0, _v7.useState)(!1),
        [_v9, _v10] = (0, _v7.useState)(""),
        [_v11, _v12] = (0, _v7.useState)(272),
        [_v13, _v14] = (0, _v7.useState)(!1),
        [_v15, _v16] = (0, _v7.useState)(void 0),
        [_v17, _v18] = (0, _v7.useState)(!1),
        {
          items: _v19
        } = (0, _v133.useInteractionSidebarItems)(_v15),
        _v20 = _v19.length > 0,
        _v21 = _v15 === _v127.EInteractionModule.REACTIONS,
        {
          isJoined: _v22,
          isRoomInfoLoading: _v23,
          isNewlyAuthenticated: _v24
        } = function () {
          let {
              roomInfo: {
                isLoading: _v0
              },
              roomUser: {
                value: _v1
              }
            } = (0, _v128.useManager)(_v139.InteractionSessionManager),
            {
              connectionStatuses: {
                isInteractionConnected: _v2
              }
            } = (0, _v128.useManager)(_v138.InteractionFirebaseManager),
            _v3 = !!_v1,
            [_v4, _v5] = (0, _v7.useState)(!1),
            _v6 = (0, _v7.useRef)(_v3);
          return (0, _v7.useEffect)(() => {
            !_v6.current && _v3 && _v5(!0), _v6.current = _v3;
          }, [_v3]), {
            isJoined: _v3,
            isRoomInfoLoading: !!_v0,
            isInteractionConnected: _v2,
            isNewlyAuthenticated: _v4
          };
        }(),
        _v25 = !_v22 && !_v23,
        _v26 = _v1 ? _v3 : _v7,
        _v27 = (0, _v7.useRef)(!1);
      _v25 && (_v27.current = !0);
      let _v28 = (0, _v7.useCallback)(() => {
          _v1 ? _v4?.() : (_v8(!0), _v6?.(!0));
        }, [_v1, _v4, _v6]),
        _v29 = (0, _v7.useCallback)(() => {
          _v1 ? _v5?.() : (_v8(!1), _v6?.(!1));
        }, [_v1, _v5, _v6]),
        _v30 = (0, _v7.useCallback)((_v0, _v1, _v2, _v3) => {
          _v16(_v0), _v12(_v2 ?? 272), _v10(_v1 ?? ""), _v14(_v3 ?? !1);
        }, []);
      (0, _v7.useEffect)(() => {
        _v24 && _v27.current && (_v1 ? _v4?.() : (_v8(!0), _v6?.(!0)), _v27.current = !1, _v18(!1));
      }, [_v24, _v1, _v4, _v6]);
      let _v31 = (0, _v7.useCallback)(() => (0, _v5.jsxs)(_v120.Flex, {
          alignItems: "center",
          justifyContent: "space-between",
          flexShrink: 0,
          padding: `${_v90.bokehTheme.space.md} ${_v90.bokehTheme.space.md} ${_v90.bokehTheme.space[3]}`,
          children: [(0, _v5.jsx)(_v123.Text, {
            variant: "heading-sm",
            color: "text-primary",
            children: _v9
          }), (0, _v5.jsx)(_v119.CloseButton, {
            "aria-label": _v36.closeInteractionPanelAriaLabel,
            onClick: _v29
          })]
        }), [_v9, _v29]),
        _v32 = (0, _v7.useCallback)(_v0 => {
          let _v1 = _v13 ? {
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
          return (0, _v5.jsx)(_v118.Box, {
            sx: {
              position: "relative",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              ..._v152,
              ..._v1
            },
            children: _v0
          });
        }, [_v13]),
        _v33 = (0, _v7.useCallback)((_v0, _v1, _v2 = !0) => _v2 ? (0, _v5.jsx)(_v118.Box, {
          display: "flex",
          flexShrink: 0,
          overflow: "hidden",
          width: _v2 ? _v1 ? "100%" : (0, _v122.rem)(_v11) : 0,
          height: _v1 || !_v13 ? "100%" : "auto",
          transition: "width 0.3s linear",
          children: (0, _v5.jsxs)(_v118.Box, {
            display: "flex",
            flexDirection: "column",
            minWidth: _v1 ? 0 : (0, _v122.rem)(_v11),
            width: _v1 ? "100%" : (0, _v122.rem)(_v11),
            height: "100%",
            overflow: "hidden",
            backgroundColor: "var(--vimeo-colors-surface)",
            border: "0.5px solid var(--vimeo-colors-stroke)",
            borderRadius: _v1 ? "xl" : "lg",
            boxShadow: _v1 ? "0 8px 40px var(--vimeo-colors-modal-shadow)" : void 0,
            children: [_v9 ? _v31() : null, _v32(_v0)]
          })
        }) : (0, _v5.jsxs)(_v118.Box, {
          display: _v2 ? "flex" : "none",
          flexDirection: "column",
          flex: !_v1 && _v13 ? "0 0 auto" : "1 1 auto",
          minWidth: 0,
          width: _v1 ? "100%" : (0, _v122.rem)(_v11),
          height: !_v1 && _v13 ? "auto" : "100%",
          overflow: "hidden",
          backgroundColor: "var(--vimeo-colors-surface)",
          border: "0.5px solid var(--vimeo-colors-stroke)",
          borderRadius: _v1 ? "xl" : "lg",
          boxShadow: _v1 ? "0 8px 40px var(--vimeo-colors-modal-shadow)" : void 0,
          children: [_v9 ? _v31() : null, _v32(_v0)]
        }), [_v2, _v9, _v11, _v13, _v32, _v31]);
      if (!_v22) return _v25 ? (0, _v5.jsx)(_v149, {
        application: _v0,
        isChatSheetView: _v1,
        isFullscreen: _v2,
        isDismissed: _v17,
        onDismiss: () => _v18(!0),
        onReOpen: () => _v18(!1),
        renderContent: _v32
      }) : null;
      let _v34 = _v2 ? (0, _v5.jsx)(_v135, {
        isPanelOpen: _v26,
        onItemClick: _v28,
        onClosePanel: _v29,
        onActiveModuleChange: _v30
      }) : (0, _v5.jsx)(_v134, {
        isPanelOpen: _v26,
        onItemClick: _v28,
        onClosePanel: _v29,
        onActiveModuleChange: _v30
      });
      if (_v1) {
        let _v0 = "u" > typeof document ? (0, _v117.createPortal)((0, _v5.jsx)(_v118.Box, {
          sx: {
            position: "fixed",
            left: _v90.bokehTheme.space[3],
            right: _v90.bokehTheme.space[3],
            bottom: `calc(env(safe-area-inset-bottom) + ${_v90.bokehTheme.space[3]})`,
            marginInline: "auto",
            width: "fit-content",
            maxWidth: `calc(100% - ${_v90.bokehTheme.space[3]} * 2)`,
            zIndex: 180,
            display: "flex",
            overflowX: "auto",
            paddingX: _v90.bokehTheme.space[1],
            paddingY: _v90.bokehTheme.space[1],
            backgroundColor: "var(--vimeo-colors-surface)",
            borderRadius: (0, _v122.rem)(24),
            boxShadow: _v150,
            "&::-webkit-scrollbar": {
              display: "none"
            },
            scrollbarWidth: "none"
          },
          children: _v2 ? (0, _v5.jsx)(_v135, {
            isHorizontal: !0,
            isFloating: !0,
            isPanelOpen: _v26,
            onItemClick: _v28,
            onClosePanel: _v29,
            onActiveModuleChange: _v30
          }) : (0, _v5.jsx)(_v134, {
            isHorizontal: !0,
            isFloating: !0,
            isPanelOpen: _v26,
            onItemClick: _v28,
            onClosePanel: _v29,
            onActiveModuleChange: _v30
          })
        }), document.body) : null;
        if (_v21) {
          let _v0 = "u" > typeof document ? (0, _v117.createPortal)((0, _v5.jsxs)(_v5.Fragment, {
            children: [_v26 && (0, _v5.jsx)(_v118.Box, {
              as: "button",
              type: "button",
              "aria-label": _v36.closeInteractionPanelAriaLabel,
              onClick: _v5,
              sx: {
                position: "fixed",
                inset: 0,
                zIndex: 170,
                border: "none",
                padding: 0,
                cursor: "default",
                background: "transparent"
              }
            }), (0, _v5.jsx)(_v118.Box, {
              sx: {
                position: "fixed",
                left: _v90.bokehTheme.space[3],
                right: _v90.bokehTheme.space[3],
                bottom: `calc(env(safe-area-inset-bottom) + ${_v90.bokehTheme.space[3]} + 76px + ${_v90.bokehTheme.space[2]})`,
                marginInline: "auto",
                width: "fit-content",
                maxWidth: `calc(100% - ${_v90.bokehTheme.space[3]} * 2)`,
                zIndex: 185,
                opacity: +!!_v26,
                pointerEvents: _v26 ? "auto" : "none",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                backgroundColor: "var(--vimeo-colors-surface)",
                borderRadius: _v90.bokehTheme.radii.xl,
                boxShadow: _v150
              },
              children: _v32(_v0)
            })]
          }), document.body) : null;
          return (0, _v5.jsxs)(_v5.Fragment, {
            children: [_v0, _v0]
          });
        }
        let _v1 = "u" > typeof document ? (0, _v117.createPortal)((0, _v5.jsxs)(_v5.Fragment, {
          children: [_v26 && (0, _v5.jsx)(_v118.Box, {
            as: "button",
            type: "button",
            "aria-label": _v36.closeInteractionPanelAriaLabel,
            onClick: _v5,
            sx: {
              position: "fixed",
              inset: 0,
              zIndex: 190,
              border: "none",
              padding: 0,
              cursor: "pointer",
              background: "var(--vimeo-colors-fill-page-overlay)"
            }
          }), (0, _v5.jsxs)(_v118.Box, {
            sx: {
              position: "fixed",
              left: 0,
              right: 0,
              bottom: 0,
              height: "60vh",
              zIndex: 201,
              opacity: +!!_v26,
              pointerEvents: _v26 ? "auto" : "none",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              backgroundColor: "var(--vimeo-colors-surface)",
              borderTopLeftRadius: _v90.bokehTheme.radii.xl,
              borderTopRightRadius: _v90.bokehTheme.radii.xl,
              boxShadow: "0px 4px 32px var(--vimeo-colors-popover-shadow), 0 0 0 0.5px var(--vimeo-colors-popover-border)"
            },
            children: [(0, _v5.jsx)(_v120.Flex, {
              justifyContent: "center",
              alignItems: "center",
              flexShrink: 0,
              width: "100%",
              paddingTop: (0, _v122.rem)(6),
              children: (0, _v5.jsx)(_v118.Box, {
                width: (0, _v122.rem)(50),
                height: (0, _v122.rem)(4),
                borderRadius: _v90.bokehTheme.radii["3xl"],
                backgroundColor: "var(--vimeo-colors-stroke)"
              })
            }), _v9 ? (0, _v5.jsxs)(_v120.Flex, {
              alignItems: "center",
              gap: (0, _v122.rem)(4),
              flexShrink: 0,
              paddingTop: _v90.bokehTheme.space.md,
              paddingBottom: _v90.bokehTheme.space.sm,
              paddingX: _v90.bokehTheme.space.lg,
              children: [(0, _v5.jsx)(_v123.Text, {
                variant: "heading-md",
                color: "text-primary",
                sx: {
                  flex: "1 1 auto",
                  minWidth: 0,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap"
                },
                children: _v9
              }), (0, _v5.jsx)(_v121.IconButton, {
                "aria-label": _v36.closeInteractionPanelAriaLabel,
                icon: (0, _v5.jsx)(_v124.CloseX, {}),
                variant: "tertiary",
                size: "md",
                onClick: _v29
              })]
            }) : null, _v32(_v0)]
          })]
        }), document.body) : null;
        return (0, _v5.jsxs)(_v5.Fragment, {
          children: [_v0, _v1]
        });
      }
      let _v35 = _v2 ? {
          position: "relative",
          alignSelf: "stretch",
          height: "100%",
          top: "auto",
          alignItems: "center",
          paddingLeft: _v26 ? (0, _v122.rem)(8) : 0,
          paddingTop: (0, _v122.rem)(8),
          paddingBottom: (0, _v122.rem)(8)
        } : {
          position: "sticky",
          top: (0, _v122.rem)(80),
          alignSelf: "flex-start",
          height: `calc(100vh - ${(0, _v122.rem)(96)})`
        },
        _v36 = _v20 ? _v2 ? 48 : 80 : 0;
      return (0, _v5.jsxs)(_v120.Flex, {
        className: "event-interaction-tools-desktop",
        sx: {
          ..._v151,
          zIndex: 5,
          alignItems: _v13 ? "center" : _v151.alignItems,
          width: (0, _v122.rem)(_v26 ? _v11 + _v36 + 8 * !!_v2 : _v36),
          transition: _v2 ? "width 0.3s linear" : void 0,
          ..._v35
        },
        children: [_v33(_v0, !1, _v26), _v20 && _v34]
      });
    }),
    _v154 = (0, _v7.memo)(function ({
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
        } = _v71(),
        _v10 = _v126.EComposerSessionType.LIVE_EVENT,
        _v11 = !!_v9?.hasRegistration,
        _v12 = function () {
          let [_v0, _v1] = (0, _v7.useState)(_v140);
          return (0, _v7.useEffect)(() => {
            let _v0 = () => {
              _v1(_v140());
            };
            return document.addEventListener("fullscreenchange", _v0), document.addEventListener("webkitfullscreenchange", _v0), () => {
              document.removeEventListener("fullscreenchange", _v0), document.removeEventListener("webkitfullscreenchange", _v0);
            };
          }, []), _v0;
        }(),
        _v13 = (0, _v22.useViewer)(),
        _v14 = !!_v13?.user,
        _v15 = !!_v9?.canEnableAudienceSpeaker,
        _v16 = _v143(_v9?.streamableClip),
        _v17 = _v144(_v9?.streamableClip),
        _v18 = _v16 || _v17,
        _v19 = _v0 && _v14 && _v15 && !_v18;
      (0, _v7.useEffect)(() => {
        let _v0 = _v0 => {
          let _v1 = _v0.target;
          if (!(_v1 instanceof Element) || !_v1.closest("#interaction-widget-login-vimeo-login-button")) return;
          let _v2 = document;
          _v2.fullscreenElement && _v2.exitFullscreen ? _v2.exitFullscreen() : _v2.webkitFullscreenElement && _v2.webkitExitFullscreen && _v2.webkitExitFullscreen();
        };
        return document.addEventListener("click", _v0, !0), () => document.removeEventListener("click", _v0, !0);
      }, []);
      let _v20 = (0, _v7.useMemo)(() => _v2 ? .6 * window.innerHeight : _v12 ? window.innerHeight : window.innerHeight - 96, [_v2, _v12]),
        _v21 = (0, _v7.useCallback)(() => {}, []),
        _v22 = (0, _v7.useCallback)(_v0 => (0, _v5.jsx)(_v153, {
          application: _v0,
          isChatSheetView: _v2,
          isFullscreen: _v12,
          isPanelExpanded: _v1,
          onOpen: _v3,
          onClose: _v4,
          onPanelOpenChange: _v5
        }), [_v2, _v12, _v1, _v3, _v4, _v5]);
      return _v0 && _v18 || _v19 ? (0, _v5.jsx)(_v137.InteractionToolsRegistrantObserver, {
        isActive: _v11,
        sessionId: _v6,
        children: (0, _v5.jsx)(_v136.InteractionToolsEntry, {
          isStandalone: !0,
          isOnsite: !0,
          isAudienceSpeakerEnabled: _v15,
          isAudienceSpeakerOnly: _v19,
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
          toolbarAttachPosition: _v125.ESidebarAttach.TOP,
          toolbarPanelIsFluid: !0,
          toolbarPanelMaxSize: _v20,
          toolbarPanelOnToggleExtend: _v21,
          renderApplicationShell: _v22
        })
      }) : null;
    });
  var _v155 = _v0.i(0),
    _v156 = _v0.i(0),
    _v157 = _v0.i(0),
    _v158 = _v0.i(0),
    _v159 = _v0.i(0),
    _v160 = _v0.i(0),
    _v161 = _v0.i(0),
    _v162 = _v0.i(0),
    _v163 = _v0.i(0),
    _v164 = _v0.i(0),
    _v165 = _v0.i(0),
    _v166 = _v0.i(0);
  let _v167 = {
      ..._v106.nullVideoContextData,
      ..._v106.nullTeamContext,
      ..._v106.nullUploadContextData
    },
    _v168 = (_v0, _v1, _v2 = {}, _v3 = _v167) => ({
      eventName: _v0,
      version: _v1,
      fields: _v2,
      defaultEventFields: _v3
    }),
    _v169 = () => _v168("workflow.click_join_vimeo", 3, {
      location: "svv recipient header"
    }),
    _v170 = () => _v168("workflow.click_join_vimeo", 3, {
      location: "basic header"
    }),
    _v171 = _v0 => {
      _v165.BigPictureClient.sendEvent(new _v165.Event("vimeo.auth_flow_action", 11, {
        event_name: `click_${_v0}`,
        auth_type: _v0,
        action_type: "trigger",
        is_final_action: !1,
        location: "join" === _v0 ? "svv_recipient_live_header" : "svv_recipient_live_player",
        copy: "join" === _v0 ? "join_vimeo" : "log_in",
        target: null,
        target_path: null,
        feature: "reg_flow",
        ...(0, _v166.getCommonAttributesV2)(),
        interface_version: null,
        interface_type: null
      }));
    },
    _v172 = (0, _v155.default)(async () => ({
      default: (await _v0.A(0)).AccountMenuWithModals
    }), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v173 = ({
      setTeamAccentColor: _v0
    }) => {
      let _v1 = (0, _v7.useContext)(_v29.ViewerContext),
        {
          eventData: _v2,
          shouldShowJoinCTA: _v3
        } = _v71(),
        _v4 = _v2?.user,
        _v5 = _v2?.landingPageLogo,
        _v6 = _v4?.account === _v164.AccountType.Basic,
        _v7 = _v4?.uri ? Number(_v4.uri.split("/").pop()) : 0,
        _v8 = (0, _v107.useAnalyticsEvent)(),
        {
          data: _v9,
          isLoading: _v10
        } = (0, _v157.useGetUserTeam)(() => _v7 ? {
          where: {
            userId: _v7
          },
          select: ["accentColor", "pictures.sizes.link", "teamName"]
        } : null);
      if ((0, _v7.useEffect)(() => {
        _v9?.accentColor && _v0 && _v0(_v9.accentColor);
      }, [_v9?.accentColor, _v0]), _v6) return (0, _v5.jsx)(_v175, {
        children: (0, _v5.jsx)(_v161.Header, {
          clickJoinAnalyticsEvent: () => _v8(_v170())
        })
      });
      let _v11 = _v9?.pictures?.sizes,
        _v12 = _v11?.length ? _v11.length - 1 : 0;
      return (0, _v5.jsxs)(_v174, {
        children: [(0, _v5.jsx)(_v163.HeaderLeftContent, {
          children: _v5 ? (0, _v5.jsx)(_v159.Navigation.Logo, {
            customLogoUrl: _v5.url,
            type: _v5.type
          }) : !_v10 && (0, _v5.jsx)(_v162.default, {
            teamLogoUrl: _v9?.pictures?.sizes?.[_v12]?.link,
            teamName: _v9?.teamName
          })
        }), (0, _v5.jsx)(_v163.HeaderRightContent, {
          children: _v1?.user ? (0, _v5.jsx)(_v7.Suspense, {
            fallback: (0, _v5.jsx)(_v156.Spinner, {
              size: "sm"
            }),
            children: (0, _v5.jsx)(_v172, {})
          }) : _v3 ? (0, _v5.jsx)(_v14.ThemeProvider, {
            theme: _v158.themes.light,
            children: (0, _v5.jsx)(_v160.LoginJoinModal, {
              type: "join",
              xsrft: _v1?.xsrft || "",
              onSuccess: _v65,
              children: _v0 => (0, _v5.jsx)(_v163.HeaderButton, {
                id: "join-vimeo",
                color: _v9?.accentColor,
                element: "button",
                onClick: () => {
                  _v0(), _v8(_v169()), _v171("join");
                },
                children: _v36.joinVimeoCaption
              })
            })
          }) : null
        })]
      });
    },
    _v174 = (0, _v14.default)(_v163.HeaderMinimalWrapper).withConfig({
      displayName: "EventRecipientHeader__StyledHeaderContainer",
      componentId: "sc-6000146d-0"
    })`
  z-index: ${({
      isEditingMode: _v0
    }) => _v0 ? "auto" : "15"};
  background: var(--vimeo-colors-background-blur);
  backdrop-filter: blur(${(0, _v122.rem)(50)});
  color: ${({
      theme: _v0
    }) => _v0.additions.content.color};
  position: sticky;
  top: 0;
  border-bottom: none;
`,
    _v175 = _v14.default.div.withConfig({
      displayName: "EventRecipientHeader__AppShellNavContainer",
      componentId: "sc-6000146d-1"
    })`
  position: absolute;
  width: 100%;
  z-index: 3;
  @media screen and (min-width: ${(0, _v122.rem)(769)}) {
    /**
     * The LoginJoinModal is nested inside the Header component which has a z-index of 14.
     * We need to increase the z-index a bit so the player trackbar doesn't sit on top of the modal.
     */
    z-index: 15;
  }
`;
  var _v176 = _v0.i(0),
    _v177 = _v0.i(0),
    _v178 = _v0.i(0);
  let _v179 = (0, _v7.memo)(({
    name: _v0,
    size: _v1 = 64,
    fontSize: _v2 = 28
  }) => {
    let _v3 = (_v0.length > 0 ? _v0[0] : "G").toUpperCase(),
      _v4 = _v178.RANDOMIZED_AVATAR_COLORS[_v3.charCodeAt(0) % _v178.RANDOMIZED_AVATAR_COLORS.length] ?? "#666666";
    return (0, _v5.jsx)(_v120.Flex, {
      width: (0, _v122.rem)(_v1),
      height: (0, _v122.rem)(_v1),
      flexShrink: 0,
      borderRadius: "50%",
      backgroundColor: _v4,
      color: "white",
      alignItems: "center",
      justifyContent: "center",
      userSelect: "none",
      fontSize: (0, _v122.rem)(_v2),
      fontWeight: 600,
      lineHeight: 0,
      children: _v3
    });
  });
  _v179.displayName = "AudienceSpeakerLetterAvatar";
  var _v180 = _v0.i(0),
    _v181 = _v0.i(0);
  let _v182 = _v0 => (0, _v5.jsx)(_v181.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v5.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.201 2.917A3.001 3.001 0 0 1 17 4v.17A3 3 0 0 1 21 7v7.144a8.856 8.856 0 0 1-16.165 5L1.73 14.608a2.981 2.981 0 0 1 4.784-3.551L7 11.66V5.667a3 3 0 0 1 4.201-2.75ZM13 11.167a1 1 0 1 1-2 0v-5.5a1 1 0 1 0-2 0V14.5a1 1 0 0 1-1.78.627l-2.265-2.818a.981.981 0 0 0-1.574 1.169l3.104 4.537A6.856 6.856 0 0 0 19 14.144V7a1 1 0 1 0-2 0v4.167a1 1 0 1 1-2 0V4a1 1 0 1 0-2 0v7.167Z",
      fill: "currentColor"
    })
  });
  function _v183({
    onClick: _v0
  }) {
    return (0, _v5.jsx)(_v180.Button, {
      size: "md",
      variant: "secondary",
      leftIcon: (0, _v5.jsx)(_v182, {}),
      onClick: _v0,
      children: (0, _v35.translate)({
        singular: "Ask to join",
        dictionary: {
          es: {
            singular: "Solicitar unirse"
          },
          "de-DE": {
            singular: "Teilnahme anfragen"
          },
          "fr-FR": {
            singular: "Demander à rejoindre"
          },
          "ja-JP": {
            singular: "参加をリクエスト"
          },
          "ko-KR": {
            singular: "참가 요청"
          },
          "pt-BR": {
            singular: "Pedir para participar"
          },
          "zh-CN": {
            singular: "请求加入"
          }
        }
      })
    });
  }
  var _v184 = _v0.i(0),
    _v185 = _v0.i(0),
    _v186 = _v0.i(0),
    _v187 = _v0.i(0),
    _v188 = _v0.i(0),
    _v189 = _v0.i(0),
    _v190 = _v0.i(0),
    _v191 = _v0.i(0),
    _v192 = _v0.i(0),
    _v193 = _v0.i(0),
    _v194 = _v0.i(0),
    _v195 = _v0.i(0),
    _v196 = _v0.i(0),
    _v197 = _v0.i(0),
    _v198 = _v0.i(0),
    _v199 = _v0.i(0),
    _v200 = _v0.i(0),
    _v201 = _v0.i(0),
    _v202 = _v0.i(0),
    _v203 = _v0.i(0);
  function _v204({
    isOpen: _v0,
    onClose: _v1,
    onSubmit: _v2,
    isCameraEnabled: _v3,
    media: _v4,
    viewerName: _v5
  }) {
    let {
        isAudioMuted: _v6,
        isCameraOn: _v7,
        audioDevices: _v8,
        videoDevices: _v9,
        selectedAudioDeviceId: _v10,
        selectedVideoDeviceId: _v11,
        videoStream: _v12
      } = _v4,
      _v13 = (0, _v7.useRef)(null);
    (0, _v7.useEffect)(() => {
      if (!_v0) return;
      let _v0 = setTimeout(() => {
        _v4.ensureMedia(_v3);
      }, 0);
      return () => clearTimeout(_v0);
    }, [_v0, _v3, _v4]), (0, _v7.useEffect)(() => {
      _v13.current && (_v13.current.srcObject = _v12 && _v7 ? _v12 : null);
    }, [_v12, _v7]);
    let _v14 = (0, _v7.useCallback)(() => {
        _v4.toggleAudio();
      }, [_v4]),
      _v15 = (0, _v7.useCallback)(() => {
        _v4.toggleCamera(_v3);
      }, [_v4, _v3]),
      _v16 = (0, _v7.useCallback)(() => {
        _v4.releaseMedia(), _v1();
      }, [_v4, _v1]),
      _v17 = (0, _v7.useCallback)(() => {
        _v4.keepMedia(), _v2();
      }, [_v4, _v2]);
    return (0, _v5.jsxs)(_v191.Modal, {
      isOpen: _v0,
      onClose: _v16,
      size: "md",
      isCentered: !0,
      scrollBehavior: "inside",
      returnFocusOnClose: !1,
      children: [(0, _v5.jsx)(_v197.ModalOverlay, {}), (0, _v5.jsxs)(_v194.ModalContent, {
        borderRadius: (0, _v122.rem)(20),
        maxWidth: (0, _v122.rem)(560),
        width: "100%",
        children: [(0, _v5.jsx)(_v196.ModalHeader, {
          padding: `${(0, _v122.rem)(24)} ${(0, _v122.rem)(24)} ${(0, _v122.rem)(16)}`,
          children: (0, _v5.jsx)(_v186.Header, {
            variant: "heading-md",
            children: (0, _v35.translate)({
              singular: "Join the live event",
              dictionary: {
                es: {
                  singular: "Unirse al evento en vivo"
                },
                "de-DE": {
                  singular: "Dem Live-Event beitreten"
                },
                "fr-FR": {
                  singular: "Rejoindre l'événement en direct"
                },
                "ja-JP": {
                  singular: "ライブイベントに参加する"
                },
                "ko-KR": {
                  singular: "라이브 이벤트 참가"
                },
                "pt-BR": {
                  singular: "Entrar no evento ao vivo"
                },
                "zh-CN": {
                  singular: "加入直播活动"
                }
              }
            })
          })
        }), (0, _v5.jsx)(_v193.ModalCloseButton, {}), (0, _v5.jsx)(_v192.ModalBody, {
          padding: `0 ${(0, _v122.rem)(24)} ${(0, _v122.rem)(24)}`,
          children: (0, _v5.jsxs)(_v120.Flex, {
            direction: "column",
            gap: (0, _v122.rem)(16),
            children: [(0, _v5.jsx)(_v198.Paragraph, {
              variant: "body-md",
              children: (0, _v35.translate)({
                singular: "You’re requesting to join the live stream.",
                dictionary: {
                  es: {
                    singular: "Está solicitando unirse a la transmisión en vivo."
                  },
                  "de-DE": {
                    singular: "Sie beantragen, dem Livestream beizutreten."
                  },
                  "fr-FR": {
                    singular: "Vous demandez à rejoindre la diffusion en direct."
                  },
                  "ja-JP": {
                    singular: "ライブ配信への参加をリクエストしています。"
                  },
                  "ko-KR": {
                    singular: "라이브 스트림 참가를 요청하고 있습니다."
                  },
                  "pt-BR": {
                    singular: "Você está solicitando participar da transmissão ao vivo."
                  },
                  "zh-CN": {
                    singular: "您正在请求加入直播。"
                  }
                }
              })
            }), (0, _v5.jsxs)(_v120.Flex, {
              direction: "column",
              gap: (0, _v122.rem)(8),
              children: [(0, _v5.jsxs)(_v120.Flex, {
                alignItems: "center",
                gap: (0, _v122.rem)(8),
                children: [(0, _v5.jsx)(_v120.Flex, {
                  alignItems: "center",
                  justifyContent: "center",
                  width: (0, _v122.rem)(24),
                  height: (0, _v122.rem)(24),
                  borderRadius: (0, _v122.rem)(4),
                  backgroundColor: "fill-component",
                  flexShrink: 0,
                  children: (0, _v5.jsx)(_v123.Text, {
                    variant: "heading-xs",
                    children: "1"
                  })
                }), (0, _v5.jsx)(_v123.Text, {
                  variant: "body-md",
                  children: (0, _v35.translate)({
                    singular: "Allow your browser to use your camera and microphone when it asks.",
                    dictionary: {
                      es: {
                        singular: "Permita que su navegador use su cámara y micrófono cuando lo solicite."
                      },
                      "de-DE": {
                        singular: "Erlauben Sie Ihrem Browser die Verwendung von Kamera und Mikrofon, wenn er danach fragt."
                      },
                      "fr-FR": {
                        singular: "Autorisez votre navigateur à utiliser votre caméra et votre microphone lorsqu'il vous le demande."
                      },
                      "ja-JP": {
                        singular: "ブラウザがカメラとマイクの使用を求めたら許可してください。"
                      },
                      "ko-KR": {
                        singular: "브라우저가 카메라와 마이크 사용을 요청하면 허용하세요."
                      },
                      "pt-BR": {
                        singular: "Permita que seu navegador use sua câmera e microfone quando solicitar."
                      },
                      "zh-CN": {
                        singular: "当浏览器提示时，允许其使用您的摄像头和麦克风。"
                      }
                    }
                  })
                })]
              }), (0, _v5.jsxs)(_v120.Flex, {
                alignItems: "center",
                gap: (0, _v122.rem)(8),
                children: [(0, _v5.jsx)(_v120.Flex, {
                  alignItems: "center",
                  justifyContent: "center",
                  width: (0, _v122.rem)(24),
                  height: (0, _v122.rem)(24),
                  borderRadius: (0, _v122.rem)(4),
                  backgroundColor: "fill-component",
                  flexShrink: 0,
                  children: (0, _v5.jsx)(_v123.Text, {
                    variant: "heading-xs",
                    children: "2"
                  })
                }), (0, _v5.jsx)(_v123.Text, {
                  variant: "body-md",
                  children: (0, _v35.translate)({
                    singular: "Click ask to join and we’ll let the host know.",
                    dictionary: {
                      es: {
                        singular: "Haga clic en 'Solicitar unirse' y avisaremos al anfitrión."
                      },
                      "de-DE": {
                        singular: "Klicken Sie auf Teilnahme anfragen und wir informieren den Gastgeber."
                      },
                      "fr-FR": {
                        singular: "Cliquez sur « Demander à rejoindre » et nous informerons l'hôte."
                      },
                      "ja-JP": {
                        singular: "「参加をリクエスト」をクリックするとホストに通知します。"
                      },
                      "ko-KR": {
                        singular: "참가 요청을 클릭하면 호스트에게 알려드립니다."
                      },
                      "pt-BR": {
                        singular: "Clique em Pedir para participar e avisaremos o anfitrião."
                      },
                      "zh-CN": {
                        singular: "点击“请求加入”，我们会通知主持人。"
                      }
                    }
                  })
                })]
              }), (0, _v5.jsxs)(_v120.Flex, {
                alignItems: "center",
                gap: (0, _v122.rem)(8),
                children: [(0, _v5.jsx)(_v120.Flex, {
                  alignItems: "center",
                  justifyContent: "center",
                  width: (0, _v122.rem)(24),
                  height: (0, _v122.rem)(24),
                  borderRadius: (0, _v122.rem)(4),
                  backgroundColor: "fill-component",
                  flexShrink: 0,
                  children: (0, _v5.jsx)(_v123.Text, {
                    variant: "heading-xs",
                    children: "3"
                  })
                }), (0, _v5.jsx)(_v123.Text, {
                  variant: "body-md",
                  children: (0, _v35.translate)({
                    singular: "Once you’re accepted, you’ll go live automatically.",
                    dictionary: {
                      es: {
                        singular: "Una vez aceptado, pasará a transmitir en vivo automáticamente."
                      },
                      "de-DE": {
                        singular: "Sobald Sie akzeptiert werden, gehen Sie automatisch live."
                      },
                      "fr-FR": {
                        singular: "Une fois accepté, vous serez automatiquement en direct."
                      },
                      "ja-JP": {
                        singular: "承認されると、自動的にライブ配信に参加します。"
                      },
                      "ko-KR": {
                        singular: "승인되면 자동으로 라이브로 전환됩니다."
                      },
                      "pt-BR": {
                        singular: "Uma vez aceito, você entrará ao vivo automaticamente."
                      },
                      "zh-CN": {
                        singular: "一旦被接受，您将自动进入直播。"
                      }
                    }
                  })
                })]
              })]
            }), (0, _v5.jsx)(_v184.Alert, {
              status: "info",
              size: "sm",
              borderRadius: (0, _v122.rem)(8),
              alignItems: "center",
              children: (0, _v5.jsx)(_v185.AlertDescription, {
                flex: 1,
                children: (0, _v35.translate)({
                  singular: "Right now, you could see the live stream with a few seconds delay. Once accepted there won’t be any delay between you and the other speakers.",
                  dictionary: {
                    es: {
                      singular: "En este momento, puede ver la transmisión en vivo con unos segundos de retraso. Una vez aceptado, no habrá retraso alguno entre usted y los demás ponentes."
                    },
                    "de-DE": {
                      singular: "Im Moment sehen Sie den Livestream mit einigen Sekunden Verzögerung. Sobald Sie akzeptiert werden, gibt es keine Verzögerung mehr zwischen Ihnen und den anderen Sprechern."
                    },
                    "fr-FR": {
                      singular: "Pour l'instant, vous pouvez voir le flux en direct avec quelques secondes de retard. Une fois accepté, il n'y aura aucun délai entre vous et les autres intervenants."
                    },
                    "ja-JP": {
                      singular: "現在は数秒の遅延を伴ってライブ配信が表示されます。承認されると、あなたと他の出演者との間に遅延はなくなります。"
                    },
                    "ko-KR": {
                      singular: "지금은 라이브 스트림이 몇 초 지연되어 보일 수 있습니다. 승인되면 귀하와 다른 발표자 간에는 지연이 없습니다."
                    },
                    "pt-BR": {
                      singular: "Agora, você pode ver a transmissão ao vivo com alguns segundos de atraso. Uma vez aceito, não haverá atraso entre você e os outros palestrantes."
                    },
                    "zh-CN": {
                      singular: "目前您观看直播可能会有几秒钟的延迟。被接受后，您与其他发言者之间将不会有延迟。"
                    }
                  }
                })
              })
            }), (0, _v5.jsxs)(_v120.Flex, {
              direction: "column",
              gap: (0, _v122.rem)(8),
              width: "100%",
              children: [(0, _v5.jsx)(_v118.Box, {
                width: "100%",
                height: (0, _v122.rem)(288),
                borderRadius: (0, _v122.rem)(12),
                backgroundColor: "var(--vimeo-colors-gray-750, #1d242c)",
                position: "relative",
                overflow: "hidden",
                children: _v0 && _v7 && _v12 ? (0, _v5.jsx)("video", {
                  ref: _v13,
                  autoPlay: !0,
                  playsInline: !0,
                  muted: !0,
                  style: {
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transform: "scaleX(-1)"
                  }
                }) : (0, _v5.jsxs)(_v120.Flex, {
                  width: "100%",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  direction: "column",
                  gap: (0, _v122.rem)(16),
                  children: [_v5 ? (0, _v5.jsx)(_v179, {
                    name: _v5
                  }) : null, (0, _v5.jsx)(_v123.Text, {
                    color: "white",
                    variant: "body-md",
                    children: (0, _v35.translate)({
                      singular: "Camera is off",
                      dictionary: {
                        es: {
                          singular: "Cámara apagada"
                        },
                        "de-DE": {
                          singular: "Kamera ist ausgeschaltet"
                        },
                        "fr-FR": {
                          singular: "Caméra désactivée"
                        },
                        "ja-JP": {
                          singular: "カメラはオフです。"
                        },
                        "ko-KR": {
                          singular: "카메라가 꺼져 있습니다."
                        },
                        "pt-BR": {
                          singular: "Câmera desligada"
                        },
                        "zh-CN": {
                          singular: "摄像头已关闭"
                        }
                      }
                    })
                  })]
                })
              }), (0, _v5.jsxs)(_v120.Flex, {
                alignItems: "center",
                justifyContent: "center",
                gap: (0, _v122.rem)(10),
                width: "100%",
                children: [(0, _v5.jsxs)(_v120.Flex, {
                  backgroundColor: "fill-component",
                  borderRadius: (0, _v122.rem)(12),
                  gap: (0, _v122.rem)(4),
                  alignItems: "center",
                  paddingX: (0, _v122.rem)(8),
                  height: (0, _v122.rem)(40),
                  children: [(0, _v5.jsx)(_v180.Button, {
                    size: "sm",
                    padding: 0,
                    variant: "tertiary",
                    color: _v6 ? "red.400" : "text-primary",
                    "aria-label": _v6 ? (0, _v35.translate)({
                      singular: "Unmute microphone",
                      dictionary: {
                        es: {
                          singular: "Activar micrófono"
                        },
                        "de-DE": {
                          singular: "Stummschaltung des Mikrofons aufheben"
                        },
                        "fr-FR": {
                          singular: "Rétablir le son du micro"
                        },
                        "ja-JP": {
                          singular: "マイクのミュートを解除する"
                        },
                        "ko-KR": {
                          singular: "마이크 음소거 해제"
                        },
                        "pt-BR": {
                          singular: "Ativar o microfone"
                        },
                        "zh-CN": {
                          singular: "取消麦克风静音"
                        }
                      }
                    }) : (0, _v35.translate)({
                      singular: "Mute microphone",
                      dictionary: {
                        es: {
                          singular: "Silenciar micrófono"
                        },
                        "de-DE": {
                          singular: "Mikrofon stummschalten"
                        },
                        "fr-FR": {
                          singular: "Mettre en sourdine le micro"
                        },
                        "ja-JP": {
                          singular: "マイクをミュートする"
                        },
                        "ko-KR": {
                          singular: "마이크 음소거"
                        },
                        "pt-BR": {
                          singular: "Silenciar o microfone"
                        },
                        "zh-CN": {
                          singular: "将麦克风静音"
                        }
                      }
                    }),
                    sx: {
                      _hover: {
                        bgColor: "transparent"
                      }
                    },
                    _dark: {
                      _hover: {
                        bgColor: "transparent"
                      }
                    },
                    onClick: _v14,
                    children: _v6 ? (0, _v5.jsx)(_v202.MicOff, {
                      boxSize: (0, _v122.rem)(24)
                    }) : (0, _v5.jsx)(_v203.MicOn, {
                      boxSize: (0, _v122.rem)(24)
                    })
                  }), (0, _v5.jsxs)(_v187.Menu, {
                    children: [(0, _v5.jsx)(_v188.MenuButton, {
                      as: _v180.Button,
                      size: "sm",
                      variant: "tertiary",
                      color: _v6 ? "red.400" : "text-primary",
                      padding: (0, _v122.rem)(4),
                      "aria-label": (0, _v35.translate)({
                        singular: "Select microphone",
                        dictionary: {
                          es: {
                            singular: "Seleccionar micrófono"
                          },
                          "de-DE": {
                            singular: "Mikrofon auswählen"
                          },
                          "fr-FR": {
                            singular: "Sélectionner le microphone"
                          },
                          "ja-JP": {
                            singular: "マイクを選択"
                          },
                          "ko-KR": {
                            singular: "마이크 선택"
                          },
                          "pt-BR": {
                            singular: "Selecionar microfone"
                          },
                          "zh-CN": {
                            singular: "选择麦克风"
                          }
                        }
                      }),
                      children: (0, _v5.jsx)(_v201.ChevronUp, {
                        boxSize: (0, _v122.rem)(16)
                      })
                    }), (0, _v5.jsx)(_v190.MenuList, {
                      children: _v8.map(_v0 => (0, _v5.jsx)(_v189.MenuItem, {
                        onClick: () => void _v4.selectAudioDevice(_v0.deviceId),
                        children: (0, _v5.jsx)(_v123.Text, {
                          variant: "body-sm",
                          fontWeight: _v0.deviceId === _v10 ? "bold" : "normal",
                          children: _v0.label
                        })
                      }, _v0.deviceId))
                    })]
                  })]
                }), _v3 ? (0, _v5.jsxs)(_v120.Flex, {
                  backgroundColor: "fill-component",
                  borderRadius: (0, _v122.rem)(12),
                  gap: (0, _v122.rem)(4),
                  alignItems: "center",
                  paddingX: (0, _v122.rem)(8),
                  height: (0, _v122.rem)(40),
                  children: [(0, _v5.jsx)(_v180.Button, {
                    size: "sm",
                    padding: 0,
                    variant: "tertiary",
                    color: _v7 ? "text-primary" : "red.400",
                    "aria-label": _v7 ? (0, _v35.translate)({
                      singular: "Turn off camera",
                      dictionary: {
                        es: {
                          singular: "Desactive la cámara"
                        },
                        "de-DE": {
                          singular: "Kamera ausschalten"
                        },
                        "fr-FR": {
                          singular: "Désactiver la caméra"
                        },
                        "ja-JP": {
                          singular: "カメラをオフにする"
                        },
                        "ko-KR": {
                          singular: "카메라 끄기"
                        },
                        "pt-BR": {
                          singular: "Desligar câmera"
                        },
                        "zh-CN": {
                          singular: "关闭摄像头"
                        }
                      }
                    }) : (0, _v35.translate)({
                      singular: "Turn on camera",
                      dictionary: {
                        es: {
                          singular: "Active la cámara"
                        },
                        "de-DE": {
                          singular: "Kamera einschalten"
                        },
                        "fr-FR": {
                          singular: "Activer la caméra"
                        },
                        "ja-JP": {
                          singular: "カメラをオンにする"
                        },
                        "ko-KR": {
                          singular: "카메라 켜기"
                        },
                        "pt-BR": {
                          singular: "Ligar câmera"
                        },
                        "zh-CN": {
                          singular: "打开摄像头"
                        }
                      }
                    }),
                    sx: {
                      _hover: {
                        bgColor: "transparent"
                      }
                    },
                    _dark: {
                      _hover: {
                        bgColor: "transparent"
                      }
                    },
                    onClick: () => void _v15(),
                    children: _v7 ? (0, _v5.jsx)(_v200.CameraOn, {
                      boxSize: (0, _v122.rem)(24)
                    }) : (0, _v5.jsx)(_v199.CameraOff, {
                      boxSize: (0, _v122.rem)(24)
                    })
                  }), (0, _v5.jsxs)(_v187.Menu, {
                    children: [(0, _v5.jsx)(_v188.MenuButton, {
                      as: _v180.Button,
                      size: "sm",
                      variant: "tertiary",
                      color: _v7 ? "text-primary" : "red.400",
                      padding: (0, _v122.rem)(4),
                      "aria-label": (0, _v35.translate)({
                        singular: "Select camera",
                        dictionary: {
                          es: {
                            singular: "Seleccionar cámara"
                          },
                          "de-DE": {
                            singular: "Kamera auswählen"
                          },
                          "fr-FR": {
                            singular: "Sélectionner la caméra"
                          },
                          "ja-JP": {
                            singular: "カメラを選択"
                          },
                          "ko-KR": {
                            singular: "카메라 선택"
                          },
                          "pt-BR": {
                            singular: "Selecionar câmera"
                          },
                          "zh-CN": {
                            singular: "选择摄像头"
                          }
                        }
                      }),
                      children: (0, _v5.jsx)(_v201.ChevronUp, {
                        boxSize: (0, _v122.rem)(16)
                      })
                    }), (0, _v5.jsx)(_v190.MenuList, {
                      children: _v9.map(_v0 => (0, _v5.jsx)(_v189.MenuItem, {
                        onClick: () => void _v4.selectVideoDevice(_v0.deviceId),
                        children: (0, _v5.jsx)(_v123.Text, {
                          variant: "body-sm",
                          fontWeight: _v0.deviceId === _v11 ? "bold" : "normal",
                          children: _v0.label
                        })
                      }, _v0.deviceId))
                    })]
                  })]
                }) : null]
              })]
            })]
          })
        }), (0, _v5.jsx)(_v195.ModalFooter, {
          borderTop: "1px solid",
          borderColor: "stroke",
          padding: `${(0, _v122.rem)(16)} ${(0, _v122.rem)(24)} ${(0, _v122.rem)(24)}`,
          children: (0, _v5.jsxs)(_v120.Flex, {
            justifyContent: "flex-end",
            gap: (0, _v122.rem)(12),
            width: "100%",
            children: [(0, _v5.jsx)(_v180.Button, {
              size: "md",
              variant: "tertiary",
              onClick: _v16,
              children: (0, _v35.translate)({
                singular: "Cancel",
                dictionary: {
                  es: {
                    singular: "Cancelar"
                  },
                  "de-DE": {
                    singular: "Abbrechen"
                  },
                  "fr-FR": {
                    singular: "Annuler"
                  },
                  "ja-JP": {
                    singular: "キャンセル"
                  },
                  "ko-KR": {
                    singular: "취소"
                  },
                  "pt-BR": {
                    singular: "Cancelar"
                  },
                  "zh-CN": {
                    singular: "取消"
                  }
                }
              })
            }), (0, _v5.jsx)(_v180.Button, {
              size: "md",
              variant: "primary",
              onClick: _v17,
              children: (0, _v35.translate)({
                singular: "Ask to join",
                dictionary: {
                  es: {
                    singular: "Solicitar unirse"
                  },
                  "de-DE": {
                    singular: "Teilnahme anfragen"
                  },
                  "fr-FR": {
                    singular: "Demander à rejoindre"
                  },
                  "ja-JP": {
                    singular: "参加をリクエスト"
                  },
                  "ko-KR": {
                    singular: "참가 요청"
                  },
                  "pt-BR": {
                    singular: "Pedir para participar"
                  },
                  "zh-CN": {
                    singular: "请求加入"
                  }
                }
              })
            })]
          })
        })]
      })]
    });
  }
  var _v205 = _v0.i(0),
    _v206 = _v0.i(0),
    _v207 = _v0.i(0),
    _v208 = _v0.i(0);
  function _v209({
    onLeave: _v0,
    isCameraEnabled: _v1,
    media: _v2,
    isPromoted: _v3 = !1
  }) {
    let {
        isAudioMuted: _v4,
        isCameraOn: _v5,
        audioDevices: _v6,
        videoDevices: _v7,
        selectedAudioDeviceId: _v8,
        selectedVideoDeviceId: _v9
      } = _v2,
      _v10 = (0, _v7.useCallback)(() => {
        _v2.toggleAudio();
      }, [_v2]),
      _v11 = (0, _v7.useCallback)(() => {
        _v2.toggleCamera(_v1);
      }, [_v2, _v1]),
      _v12 = _v3 ? (0, _v35.translate)({
        singular: "Stop being a speaker",
        dictionary: {
          es: {
            singular: "Dejar de ser orador"
          },
          "de-DE": {
            singular: "Als Sprecher zurücktreten"
          },
          "fr-FR": {
            singular: "Ne plus être intervenant"
          },
          "ja-JP": {
            singular: "スピーカーをやめる"
          },
          "ko-KR": {
            singular: "스피커 역할을 중지하세요"
          },
          "pt-BR": {
            singular: "Parar de ser orador"
          },
          "zh-CN": {
            singular: "停止作为发言者"
          }
        }
      }) : (0, _v35.translate)({
        singular: "Leave waiting room",
        dictionary: {
          es: {
            singular: "Salir de la sala de espera"
          },
          "de-DE": {
            singular: "Wartezimmer verlassen"
          },
          "fr-FR": {
            singular: "Quitter la salle d'attente"
          },
          "ja-JP": {
            singular: "待機室を離れる"
          },
          "ko-KR": {
            singular: "대기실 나가기"
          },
          "pt-BR": {
            singular: "Sair da sala de espera"
          },
          "zh-CN": {
            singular: "离开等候室"
          }
        }
      }),
      _v13 = _v3 ? (0, _v5.jsx)(_v205.Tooltip, {
        label: (0, _v35.translate)({
          singular: "You're now live! While you're unmuted, everyone can hear you. There's no delay between you and the other speakers.",
          dictionary: {
            es: {
              singular: "¡Ahora estás en directo! Mientras no estés silenciado, todos pueden escucharte. No hay retraso entre tú y los demás oradores."
            },
            "de-DE": {
              singular: "Sie sind jetzt live! Solange Sie nicht stummgeschaltet sind, können alle Sie hören. Zwischen Ihnen und den anderen Sprechern besteht keine Verzögerung."
            },
            "fr-FR": {
              singular: "Vous êtes maintenant en direct ! Tant que votre micro n'est pas coupé, tout le monde peut vous entendre. Il n'y a aucun délai entre vous et les autres intervenants."
            },
            "ja-JP": {
              singular: "ライブ配信を開始しました！ミュートが解除されている間、全員があなたを聞くことができます。他のスピーカーとの間に遅延はありません。"
            },
            "ko-KR": {
              singular: "지금 라이브 중입니다! 음소거가 해제되어 있는 동안에는 모두가 귀하의 목소리를 들을 수 있습니다. 귀하와 다른 스피커 간에는 지연이 없습니다."
            },
            "pt-BR": {
              singular: "Você está ao vivo agora! Enquanto seu microfone estiver ativado, todos podem ouvir você. Não há atraso entre você e os outros oradores."
            },
            "zh-CN": {
              singular: "你现在已开始直播！在你未静音时，所有人都能听到你。你与其他发言者之间没有延迟。"
            }
          }
        }),
        placement: "top",
        children: (0, _v5.jsxs)(_v120.Flex, {
          backgroundColor: "status-destructive-secondary",
          gap: (0, _v122.rem)(8),
          alignItems: "center",
          overflow: "hidden",
          borderRadius: (0, _v122.rem)(8),
          paddingX: (0, _v122.rem)(16),
          height: (0, _v122.rem)(40),
          children: [(0, _v5.jsx)(_v207.RecordFilled, {
            boxSize: (0, _v122.rem)(16),
            color: "status-destructive-primary"
          }), (0, _v5.jsx)(_v123.Text, {
            variant: "body-md",
            color: "text-primary",
            children: (0, _v35.translate)({
              singular: "You're live",
              dictionary: {
                es: {
                  singular: "Estás en directo"
                },
                "de-DE": {
                  singular: "Sie sind live"
                },
                "fr-FR": {
                  singular: "Vous êtes en direct"
                },
                "ja-JP": {
                  singular: "ライブ配信中です"
                },
                "ko-KR": {
                  singular: "라이브 중입니다"
                },
                "pt-BR": {
                  singular: "Você está ao vivo"
                },
                "zh-CN": {
                  singular: "你正在直播"
                }
              }
            })
          })]
        })
      }) : (0, _v5.jsx)(_v205.Tooltip, {
        label: (0, _v35.translate)({
          singular: "You’ve notified the event host. You’ll join the live as soon as you’re accepted.",
          dictionary: {
            es: {
              singular: "Has notificado al anfitrión del evento. Te unirás a la transmisión en vivo tan pronto como seas aceptado."
            },
            "de-DE": {
              singular: "Sie haben den Veranstalter benachrichtigt. Sie nehmen am Live-Stream teil, sobald Sie akzeptiert werden."
            },
            "fr-FR": {
              singular: "Vous avez informé l'hôte de l'événement. Vous rejoindrez la diffusion en direct dès que votre participation sera acceptée."
            },
            "ja-JP": {
              singular: "イベントの主催者に通知しました。承認され次第、ライブに参加します。"
            },
            "ko-KR": {
              singular: "이벤트 호스트에게 알렸습니다. 승인이 완료되는 즉시 라이브에 참여하게 됩니다."
            },
            "pt-BR": {
              singular: "Você notificou o anfitrião do evento. Você entrará na transmissão ao vivo assim que for aceito."
            },
            "zh-CN": {
              singular: "您已通知活动主持人。一旦被接受，您将立即加入直播。"
            }
          }
        }),
        placement: "top",
        children: (0, _v5.jsxs)(_v120.Flex, {
          backgroundColor: "button-secondary-default",
          gap: (0, _v122.rem)(8),
          alignItems: "center",
          overflow: "hidden",
          borderRadius: (0, _v122.rem)(8),
          paddingX: (0, _v122.rem)(16),
          height: (0, _v122.rem)(40),
          children: [(0, _v5.jsx)(_v208.SpeedClockFilled, {
            boxSize: (0, _v122.rem)(16)
          }), (0, _v5.jsx)(_v123.Text, {
            variant: "body-md",
            color: "text-secondary",
            children: (0, _v35.translate)({
              singular: "Waiting approval",
              dictionary: {
                es: {
                  singular: "En espera de aprobación"
                },
                "de-DE": {
                  singular: "Genehmigung ausstehend"
                },
                "fr-FR": {
                  singular: "En attente d'approbation"
                },
                "ja-JP": {
                  singular: "承認待ち"
                },
                "ko-KR": {
                  singular: "승인 대기 중"
                },
                "pt-BR": {
                  singular: "Aguardando aprovação"
                },
                "zh-CN": {
                  singular: "等待审核"
                }
              }
            })
          })]
        })
      });
    return (0, _v5.jsxs)(_v120.Flex, {
      width: "100%",
      gap: (0, _v122.rem)(8),
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "background-blur",
      borderRadius: (0, _v122.rem)(12),
      paddingX: (0, _v122.rem)(4),
      paddingY: (0, _v122.rem)(8),
      children: [_v13, (0, _v5.jsxs)(_v120.Flex, {
        gap: (0, _v122.rem)(4),
        children: [(0, _v5.jsxs)(_v120.Flex, {
          backgroundColor: "button-secondary-default",
          gap: (0, _v122.rem)(4),
          alignItems: "center",
          borderRadius: (0, _v122.rem)(12),
          paddingX: (0, _v122.rem)(8),
          height: (0, _v122.rem)(40),
          children: [(0, _v5.jsx)(_v180.Button, {
            size: "sm",
            padding: 0,
            variant: "tertiary",
            color: _v4 ? "red.400" : "text-primary",
            "aria-label": _v4 ? (0, _v35.translate)({
              singular: "Unmute microphone",
              dictionary: {
                es: {
                  singular: "Activar micrófono"
                },
                "de-DE": {
                  singular: "Stummschaltung des Mikrofons aufheben"
                },
                "fr-FR": {
                  singular: "Rétablir le son du micro"
                },
                "ja-JP": {
                  singular: "マイクのミュートを解除する"
                },
                "ko-KR": {
                  singular: "마이크 음소거 해제"
                },
                "pt-BR": {
                  singular: "Ativar o microfone"
                },
                "zh-CN": {
                  singular: "取消麦克风静音"
                }
              }
            }) : (0, _v35.translate)({
              singular: "Mute microphone",
              dictionary: {
                es: {
                  singular: "Silenciar micrófono"
                },
                "de-DE": {
                  singular: "Mikrofon stummschalten"
                },
                "fr-FR": {
                  singular: "Mettre en sourdine le micro"
                },
                "ja-JP": {
                  singular: "マイクをミュートする"
                },
                "ko-KR": {
                  singular: "마이크 음소거"
                },
                "pt-BR": {
                  singular: "Silenciar o microfone"
                },
                "zh-CN": {
                  singular: "将麦克风静音"
                }
              }
            }),
            sx: {
              _hover: {
                bgColor: "transparent"
              }
            },
            _dark: {
              _hover: {
                bgColor: "transparent"
              }
            },
            onClick: _v10,
            children: _v4 ? (0, _v5.jsx)(_v202.MicOff, {
              boxSize: (0, _v122.rem)(24)
            }) : (0, _v5.jsx)(_v203.MicOn, {
              boxSize: (0, _v122.rem)(24)
            })
          }), (0, _v5.jsxs)(_v187.Menu, {
            children: [(0, _v5.jsx)(_v188.MenuButton, {
              as: _v180.Button,
              size: "sm",
              variant: "tertiary",
              color: _v4 ? "red.400" : "text-primary",
              padding: (0, _v122.rem)(4),
              "aria-label": (0, _v35.translate)({
                singular: "Select microphone",
                dictionary: {
                  es: {
                    singular: "Seleccionar micrófono"
                  },
                  "de-DE": {
                    singular: "Mikrofon auswählen"
                  },
                  "fr-FR": {
                    singular: "Sélectionner le microphone"
                  },
                  "ja-JP": {
                    singular: "マイクを選択"
                  },
                  "ko-KR": {
                    singular: "마이크 선택"
                  },
                  "pt-BR": {
                    singular: "Selecionar microfone"
                  },
                  "zh-CN": {
                    singular: "选择麦克风"
                  }
                }
              }),
              children: (0, _v5.jsx)(_v201.ChevronUp, {
                boxSize: (0, _v122.rem)(16)
              })
            }), (0, _v5.jsx)(_v190.MenuList, {
              children: _v6.map(_v0 => (0, _v5.jsx)(_v189.MenuItem, {
                onClick: () => void _v2.selectAudioDevice(_v0.deviceId),
                children: (0, _v5.jsx)(_v123.Text, {
                  variant: "body-sm",
                  color: _v0.deviceId === _v8 ? "text-primary" : void 0,
                  fontWeight: _v0.deviceId === _v8 ? "bold" : "normal",
                  children: _v0.label
                })
              }, _v0.deviceId))
            })]
          })]
        }), _v1 ? (0, _v5.jsxs)(_v120.Flex, {
          backgroundColor: "button-secondary-default",
          gap: (0, _v122.rem)(4),
          alignItems: "center",
          borderRadius: (0, _v122.rem)(12),
          paddingX: (0, _v122.rem)(8),
          height: (0, _v122.rem)(40),
          children: [(0, _v5.jsx)(_v180.Button, {
            size: "sm",
            padding: 0,
            variant: "tertiary",
            color: _v5 ? "text-primary" : "red.400",
            "aria-label": _v5 ? (0, _v35.translate)({
              singular: "Turn off camera",
              dictionary: {
                es: {
                  singular: "Desactive la cámara"
                },
                "de-DE": {
                  singular: "Kamera ausschalten"
                },
                "fr-FR": {
                  singular: "Désactiver la caméra"
                },
                "ja-JP": {
                  singular: "カメラをオフにする"
                },
                "ko-KR": {
                  singular: "카메라 끄기"
                },
                "pt-BR": {
                  singular: "Desligar câmera"
                },
                "zh-CN": {
                  singular: "关闭摄像头"
                }
              }
            }) : (0, _v35.translate)({
              singular: "Turn on camera",
              dictionary: {
                es: {
                  singular: "Active la cámara"
                },
                "de-DE": {
                  singular: "Kamera einschalten"
                },
                "fr-FR": {
                  singular: "Activer la caméra"
                },
                "ja-JP": {
                  singular: "カメラをオンにする"
                },
                "ko-KR": {
                  singular: "카메라 켜기"
                },
                "pt-BR": {
                  singular: "Ligar câmera"
                },
                "zh-CN": {
                  singular: "打开摄像头"
                }
              }
            }),
            sx: {
              _hover: {
                bgColor: "transparent"
              }
            },
            _dark: {
              _hover: {
                bgColor: "transparent"
              }
            },
            onClick: _v11,
            children: _v5 ? (0, _v5.jsx)(_v200.CameraOn, {
              boxSize: (0, _v122.rem)(24)
            }) : (0, _v5.jsx)(_v199.CameraOff, {
              boxSize: (0, _v122.rem)(24)
            })
          }), (0, _v5.jsxs)(_v187.Menu, {
            children: [(0, _v5.jsx)(_v188.MenuButton, {
              as: _v180.Button,
              size: "sm",
              variant: "tertiary",
              color: _v5 ? "text-primary" : "red.400",
              padding: (0, _v122.rem)(4),
              "aria-label": (0, _v35.translate)({
                singular: "Select camera",
                dictionary: {
                  es: {
                    singular: "Seleccionar cámara"
                  },
                  "de-DE": {
                    singular: "Kamera auswählen"
                  },
                  "fr-FR": {
                    singular: "Sélectionner la caméra"
                  },
                  "ja-JP": {
                    singular: "カメラを選択"
                  },
                  "ko-KR": {
                    singular: "카메라 선택"
                  },
                  "pt-BR": {
                    singular: "Selecionar câmera"
                  },
                  "zh-CN": {
                    singular: "选择摄像头"
                  }
                }
              }),
              children: (0, _v5.jsx)(_v201.ChevronUp, {
                boxSize: (0, _v122.rem)(16)
              })
            }), (0, _v5.jsx)(_v190.MenuList, {
              children: _v7.map(_v0 => (0, _v5.jsx)(_v189.MenuItem, {
                onClick: () => void _v2.selectVideoDevice(_v0.deviceId),
                children: (0, _v5.jsx)(_v123.Text, {
                  variant: "body-sm",
                  color: _v0.deviceId === _v9 ? "text-primary" : void 0,
                  fontWeight: _v0.deviceId === _v9 ? "bold" : "normal",
                  children: _v0.label
                })
              }, _v0.deviceId))
            })]
          })]
        }) : null, (0, _v5.jsx)(_v205.Tooltip, {
          label: _v12,
          placement: "top",
          children: (0, _v5.jsx)(_v180.Button, {
            size: "md",
            variant: "secondary",
            height: (0, _v122.rem)(40),
            borderRadius: (0, _v122.rem)(12),
            "aria-label": _v12,
            onClick: _v0,
            children: (0, _v5.jsx)(_v206.LogOut, {
              boxSize: (0, _v122.rem)(16)
            })
          })
        })]
      })]
    });
  }
  function _v210(_v0, _v1) {
    return !!_v0 && !!_v0.isEnabled && !!_v1 && (_v0.isPromoted || _v0.canRequestToSpeak);
  }
  function _v211({
    audienceSpeakersContext: _v0,
    isViewerAuthenticated: _v1,
    media: _v2,
    viewerName: _v3
  }) {
    let [_v4, _v5] = (0, _v7.useState)(!1),
      _v6 = (0, _v7.useCallback)(() => _v5(!0), []),
      _v7 = (0, _v7.useCallback)(() => _v5(!1), []),
      _v8 = (0, _v7.useCallback)(() => {
        _v2.releaseMedia(), _v0?.audienceSpeakerActions.leaveWaitingRoom();
      }, [_v0, _v2]),
      _v9 = (0, _v7.useCallback)(() => {
        _v0?.audienceSpeakerActions.stopSpeaking();
      }, [_v0]),
      _v10 = (0, _v7.useCallback)(() => {
        if (!_v0) return;
        _v5(!1);
        let _v0 = _v0.currentUser?.displayName === void 0 || "" === _v0.currentUser.displayName ? (0, _v35.translate)({
            singular: "Audience member",
            dictionary: {
              es: {
                singular: "Miembro de la audiencia"
              },
              "de-DE": {
                singular: "Zuschauer"
              },
              "fr-FR": {
                singular: "Membre du public"
              },
              "ja-JP": {
                singular: "視聴者"
              },
              "ko-KR": {
                singular: "시청자"
              },
              "pt-BR": {
                singular: "Membro da audiência"
              },
              "zh-CN": {
                singular: "观众"
              }
            }
          }) : _v0.currentUser.displayName,
          _v1 = _v0.currentUser?.avatarUrl;
        _v0.audienceSpeakerActions.requestToSpeak(_v0, _v1);
      }, [_v0]);
    if (!_v0 || !_v210(_v0, _v1)) return null;
    let {
      isCameraEnabled: _v11,
      isRequestPending: _v12,
      canRequestToSpeak: _v13,
      isPromoted: _v14
    } = _v0;
    return _v14 ? (0, _v5.jsx)(_v209, {
      onLeave: _v9,
      isCameraEnabled: _v11,
      media: _v2,
      isPromoted: !0
    }) : _v13 ? _v12 ? (0, _v5.jsx)(_v209, {
      onLeave: _v8,
      isCameraEnabled: _v11,
      media: _v2
    }) : (0, _v5.jsxs)(_v5.Fragment, {
      children: [(0, _v5.jsx)(_v120.Flex, {
        justifyContent: "center",
        padding: (0, _v122.rem)(8),
        children: (0, _v5.jsx)(_v183, {
          onClick: _v6
        })
      }), (0, _v5.jsx)(_v204, {
        isOpen: _v4,
        onClose: _v7,
        onSubmit: _v10,
        isCameraEnabled: _v11,
        media: _v2,
        viewerName: _v3
      })]
    }) : null;
  }
  var _v212 = _v0.i(0),
    _v213 = _v0.i(0),
    _v214 = _v0.i(0),
    _v215 = _v0.i(0);
  let _v216 = _v14.createGlobalStyle`
  body {
    overflow-y: visible;
  }
`,
    _v217 = _v14.default.div.withConfig({
      displayName: "Layout__PageContainer",
      componentId: "sc-8e9ba6d2-0"
    })`
  background: var(--vimeo-colors-background);
  color: var(--vimeo-colors-text-primary);
  display: flex;
  flex-flow: row nowrap;
  position: relative;
`,
    _v218 = _v14.default.div.withConfig({
      displayName: "Layout__PageContainerContent",
      componentId: "sc-8e9ba6d2-1"
    })`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  min-width: 0;
  min-height: 100vh;
  position: relative;
`,
    _v219 = _v14.default.div.withConfig({
      displayName: "Layout__ContentContainer",
      componentId: "sc-8e9ba6d2-2"
    })`
  display: flex;
  justify-content: center;
  gap: ${_v90.bokehTheme.space.xl};
  padding: ${_v90.bokehTheme.space.md} ${_v90.bokehTheme.space.lg} ${_v90.bokehTheme.space.xl};

  ${({
      isMobile: _v0,
      isPortrait: _v1
    }) => `
      flex-direction: ${_v0 && _v1 ? "column" : "row"};
      ${_v0 ? `height: calc(100vh - ${(0, _v30.rem)(63)}); overflow: auto; padding: 0 0 calc(${(0, _v30.rem)(100)} + env(safe-area-inset-bottom));` : "height: auto;"}
    `}
`,
    _v220 = _v14.default.div.withConfig({
      displayName: "Layout__MainContentContainer",
      componentId: "sc-8e9ba6d2-3"
    })`
  display: flex;
  position: relative;
  gap: ${_v90.bokehTheme.space.xl};

  ${({
      isMobile: _v0,
      isPortrait: _v1,
      isChatOpen: _v2
    }) => _v0 ? _v14.css`
          flex-direction: column;
          justify-content: flex-start;
          flex: 1 0 auto;
          min-height: 100%;
          height: 100%;
          flex-shrink: ${+!_v1};
          overflow: auto;
        ` : _v14.css`
          flex-direction: column;
          flex: 1 1 auto;
          /* With chat open the main column grows with the row; without chat cap width for readability. */
          max-width: ${_v2 ? "none" : (0, _v30.rem)(0)};
          align-items: stretch;
          height: auto;
          overflow: visible;
        `}
`,
    _v221 = _v14.default.div.withConfig({
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
  border-radius: ${_v90.bokehTheme.radii["2xl"]};

  ${({
      isMobile: _v0,
      isPortrait: _v1
    }) => _v0 ? _v14.css`
          margin: ${_v90.bokehTheme.space.md} ${_v90.bokehTheme.space.xs};
          width: calc(100% - ${_v90.bokehTheme.space.xs} * 2);
          height: fit-content;
          max-width: ${_v1 ? `calc(100% - ${_v90.bokehTheme.space.xs} * 2)` : `calc((100vh - ${(0, _v30.rem)(64)}) / 0.5625)`};
          padding: ${_v90.bokehTheme.space["2xl"]} ${_v90.bokehTheme.space.lg} ${_v90.bokehTheme.space.lg};
          gap: ${_v90.bokehTheme.space["2xl"]};
        ` : _v14.css`
          width: 100%;
          padding: ${_v90.bokehTheme.space["2xl"]} ${_v90.bokehTheme.space["3xl"]};
          gap: ${_v90.bokehTheme.space["2xl"]};
        `};
`,
    _v222 = _v14.default.div.withConfig({
      displayName: "Layout__TitleAndDescription",
      componentId: "sc-8e9ba6d2-5"
    })`
  width: ${({
      isFullWidth: _v0
    }) => _v0 ? "100%" : `calc(100% - ${(0, _v30.rem)(80)})`};
  display: flex;
  flex-direction: column;
  gap: ${_v90.bokehTheme.space.lg};

  @media screen and (min-width: ${(0, _v30.rem)(769)}) {
    width: 100%;
    align-self: flex-start;
  }

  @media screen and (max-width: ${(0, _v30.rem)(480)}) {
    width: 100%;
  }
`,
    _v223 = _v14.default.div.withConfig({
      displayName: "Layout__EventTimeRow",
      componentId: "sc-8e9ba6d2-6"
    })`
  display: flex;
  gap: ${_v90.bokehTheme.space.lg};
  align-items: flex-start;
  flex-wrap: wrap;
`,
    _v224 = _v14.default.div.withConfig({
      displayName: "Layout__EventDescription",
      componentId: "sc-8e9ba6d2-7"
    })`
  display: flex;
  flex-direction: column;
  gap: ${_v90.bokehTheme.space.lg};
  width: 100%;

  @media screen and (max-width: ${(0, _v30.rem)(769)}) {
    gap: ${_v90.bokehTheme.space.md};
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
    _v225 = _v14.default.div.withConfig({
      displayName: "Layout__EventTimePill",
      componentId: "sc-8e9ba6d2-8"
    })`
  display: flex;
  align-items: center;
  gap: ${_v90.bokehTheme.space.sm};
  padding: ${_v90.bokehTheme.space.xs} ${_v90.bokehTheme.space.sm};
  border-radius: ${_v90.bokehTheme.radii.sm};
  background-color: var(--vimeo-colors-fill-component);
  color: var(--vimeo-colors-text-secondary);
  white-space: nowrap;

  svg {
    width: ${(0, _v30.rem)(20)};
    height: ${(0, _v30.rem)(20)};
  }
`,
    _v226 = _v14.default.span.withConfig({
      displayName: "Layout__EventTimeLabel",
      componentId: "sc-8e9ba6d2-9"
    })`
  font-family: ${_v90.bokehTheme.fonts.body};
  font-size: ${_v90.bokehTheme.fontSizes["body-md"]};
  font-weight: ${_v90.bokehTheme.fontWeights.regular};
  line-height: ${_v90.bokehTheme.lineHeights["body-md"]};
  letter-spacing: ${_v90.bokehTheme.letterSpacings["body-md"]};
  color: var(--vimeo-colors-text-secondary);
`,
    _v227 = (0, _v14.default)(_v97).withConfig({
      displayName: "Layout__Title",
      componentId: "sc-8e9ba6d2-10"
    })`
  font-family: ${_v90.bokehTheme.fonts.heading};
  font-size: ${_v90.bokehTheme.fontSizes["heading-2xl"]};
  font-weight: ${_v90.bokehTheme.fontWeights.medium};
  line-height: ${_v90.bokehTheme.lineHeights["heading-2xl"]};
  letter-spacing: ${_v90.bokehTheme.letterSpacings["heading-2xl"]};
  color: var(--vimeo-colors-text-primary);
  padding: ${(0, _v30.rem)(5)};
  hyphens: auto;
  background: transparent;

  @media screen and (max-width: ${(0, _v30.rem)(769)}) {
    font-size: ${_v90.bokehTheme.fontSizes["heading-lg"]};
    line-height: ${_v90.bokehTheme.lineHeights["heading-lg"]};
    letter-spacing: ${_v90.bokehTheme.letterSpacings["heading-lg"]};
  }
`,
    _v228 = _v14.default.div.withConfig({
      displayName: "Layout__ContentWrapper",
      componentId: "sc-8e9ba6d2-11"
    })`
  position: relative;
`,
    _v229 = _v14.default.div.withConfig({
      displayName: "Layout__BorderContainer",
      componentId: "sc-8e9ba6d2-12"
    })`
  border: none;
`,
    _v230 = _v14.default.div.withConfig({
      displayName: "Layout__FooterWrapper",
      componentId: "sc-8e9ba6d2-13"
    })`
  width: 100%;

  > div {
    position: static !important;
    bottom: auto !important;
    background: transparent;
  }
`,
    _v231 = _v14.default.div.withConfig({
      displayName: "Layout__Inner",
      componentId: "sc-8e9ba6d2-14"
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
    _v232 = _v14.default.div.withConfig({
      displayName: "Layout__ResponsiveContainer",
      componentId: "sc-8e9ba6d2-15"
    })`
  min-width: ${(0, _v30.rem)(240)};
  width: 100%;
  overflow: hidden;
  height: fit-content;
  flex-shrink: 0;
  ${({
      isMobile: _v0,
      isPortrait: _v1
    }) => _v14.css`
    max-width: ${_v0 && !_v1 ? `calc((100vh - ${(0, _v30.rem)(64)}) / 0.5625)` : "calc(50vh / 0.5625)"};
    margin: 0 auto;

    @media screen and (min-width: ${(0, _v30.rem)(769)}) {
      max-width: calc(
        (100vh - ${(0, _v30.rem)(_v0 ? _v1 ? 264 : 64 : 264)}) /
          ${.5625}
      );
      padding-top: ${_v0 ? _v1 ? (0, _v30.rem)(8) : 0 : (0, _v30.rem)(8)};
    }
  `};

  ${_v231} {
    position: relative;
    background-color: black;
    ${({
      roundedCorners: _v0
    }) => _v0 && _v14.css`
        border-radius: ${_v90.bokehTheme.radii.sm};
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
    _v233 = _v14.default.div.withConfig({
      displayName: "Layout__EventInfoContainer",
      componentId: "sc-8e9ba6d2-16"
    })`
  flex-direction: column;
  display: flex;
  width: 100%;

  ${({
      paddingEnabled: _v0,
      isMobile: _v1,
      isPortrait: _v2
    }) => _v1 ? _v14.css`
          margin-top: 0;
          padding-bottom: ${_v0 ? (0, _v30.rem)(48) : 0};
          max-width: ${!_v2 ? `calc((100vh - ${(0, _v30.rem)(64)}) / 0.5625)` : "calc(50vh / 0.5625)"};

          @media screen and (min-width: ${(0, _v30.rem)(769)}) {
            max-width: calc(
              (100vh - ${(0, _v30.rem)(_v2 ? 264 : 64)}) /
                ${.5625}
            );
          }
        ` : _v14.css`
          margin-top: 0;
          padding-bottom: ${_v0 ? (0, _v30.rem)(48) : 0};
          max-width: none;
        `}
`;
  (0, _v14.default)(_v213.Notification).withConfig({
    displayName: "Layout__Notification",
    componentId: "sc-8e9ba6d2-17"
  })`
  background: ${({
    theme: _v0
  }) => _v0.element.bg2};
`;
  let _v234 = _v14.default.div.withConfig({
      displayName: "Layout__MatureContainer",
      componentId: "sc-8e9ba6d2-18"
    })`
  position: relative;
  background: black;
  width: 100%;
  min-width: ${(0, _v30.rem)(240)};
  max-width: calc(50vh / ${.5625});
  margin: 0 auto;
  height: 0;
  padding-bottom: ${56.25}%;

  @media screen and (min-width: ${(0, _v30.rem)(769)}) {
    width: calc((100vh - ${(0, _v30.rem)(264)}) / ${.5625});
    max-width: 100%;
    padding-top: ${(0, _v30.rem)(8)};
  }
`,
    _v235 = _v14.default.div.withConfig({
      displayName: "Layout__InnerContainer",
      componentId: "sc-8e9ba6d2-19"
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
    font-size: ${(0, _v30.rem)(16)};
  }
`,
    _v236 = (0, _v14.default)(_v215.Paragraph).withConfig({
      displayName: "Layout__Caption",
      componentId: "sc-8e9ba6d2-20"
    })`
  font-size: ${(0, _v30.rem)(16)};
  margin-bottom: ${(0, _v30.rem)(25)};
  color: white;
`,
    _v237 = _v14.default.div.withConfig({
      displayName: "Layout__AdvertisingLabelWrapper",
      componentId: "sc-8e9ba6d2-21"
    })`
  display: flex;
  align-items: center;
  padding: ${(0, _v30.rem)(5)};
`,
    _v238 = _v14.default.span.withConfig({
      displayName: "Layout__AdvertisingLabel",
      componentId: "sc-8e9ba6d2-22"
    })`
  padding-top: ${(0, _v30.rem)(1)};
  font-size: ${(0, _v30.rem)(12)};
  line-height: ${(0, _v30.rem)(15)};
  font-weight: 500;
  color: #496073;
`,
    _v239 = (0, _v14.default)(_v214.CircleInfoSmall).withConfig({
      displayName: "Layout__InfoIcon",
      componentId: "sc-8e9ba6d2-23"
    })`
  width: ${(0, _v30.rem)(24)};
  height: ${(0, _v30.rem)(24)};
`;
  _v14.default.div.withConfig({
    displayName: "Layout__LeadCaptureLoading",
    componentId: "sc-8e9ba6d2-24"
  })`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
  let _v240 = _v14.createGlobalStyle`
  ${_v219}:fullscreen {
    width: 100vw;
    height: 100vh;
    /*
     * Paint the fullscreen surround with the Bokeh white token. Chromium's
     * user-agent stylesheet applies black to the fullscreen element with a
     * higher origin priority than the \`background\` shorthand — set
     * \`background-color\` longhand with \`!important\` to win the cascade.
     */
    background-color: var(--vimeo-colors-white) !important;
    padding: 0;
    gap: 0;
  }

  /*
   * The fullscreen paint layer draws a separate ::backdrop pseudo-element
   * behind the fullscreen root; without overriding it the browser paints
   * pure black through any letterbox strips (top/bottom of a 16:9 player in
   * a wider viewport). Match the element background so the strips read as
   * part of the same surface.
   */
  ${_v219}:fullscreen::backdrop {
    background: var(--vimeo-colors-white);
  }

  ${_v219}:fullscreen ${_v220} {
    max-width: none;
    height: 100%;
  }

  ${_v219}:fullscreen ${_v221} {
    padding: 0;
    border-radius: 0;
    background: transparent;
    height: 100%;
    width: 100%;
    max-width: none;
    margin: 0;
  }

  ${_v219}:fullscreen ${_v232} {
    max-width: none;
    height: 100%;
    margin: 0;
  }

  /* ContentWrapper and BorderContainer sit between ResponsiveContainer and Inner
   * with no intrinsic height. A percentage height only resolves against a parent
   * with a definite height, so without these the Inner height: 100% collapses to
   * auto and the player renders at 0px (black frame, audio still plays). */
  ${_v219}:fullscreen ${_v228},
  ${_v219}:fullscreen ${_v229} {
    height: 100%;
  }

  ${_v219}:fullscreen ${_v231} {
    height: 100%;
    width: 100%;
    padding-bottom: 0;
  }

  /* The base CSS positions the .js-player absolutely inside Inner to fill the
   * 16:9 aspect-ratio box. With Inner's padding-bottom reset to 0 in
   * fullscreen, the absolute child has no box to fill and renders as 0x0.
   * Switch to relative positioning so the player flows with the layout. */
  ${_v219}:fullscreen ${_v231} > div {
    position: relative;
    width: 100%;
    height: 100%;
  }

  ${_v219}:fullscreen ${_v233} {
    display: none;
  }

  ${_v219}:fullscreen ${_v230} {
    display: none;
  }

  /*
   * Force Bokeh dark tokens for the interaction column while the wrapper is
   * fullscreen — Figma spec is a dark chat panel with light icons over the
   * black backdrop, regardless of the site theme preference. Scoped via CSS
   * variables so every Bokeh component (Panel, IconButton, Input, tooltip
   * text) resolves the dark values without a global theme swap.
   */
  ${_v219}:fullscreen .event-interaction-tools-desktop,
  ${_v219}:fullscreen .event-interaction-tools-desktop * {
    --vimeo-colors-surface: #151b21;
    --vimeo-colors-fill-page: #0e1216;
    --vimeo-colors-fill-component: #272a2e;
    --vimeo-colors-fill-component-hover: #3a3f45;
    --vimeo-colors-text-primary: #f9fafb;
    --vimeo-colors-text-secondary: #b6c0cc;
    --vimeo-colors-text-tertiary: #8f9294;
    --vimeo-colors-icon-primary: #f9fafb;
    --vimeo-colors-stroke: rgba(255, 255, 255, 0.08);
    --vimeo-colors-input-fill: #272a2e;
    --vimeo-colors-input-stroke: rgba(255, 255, 255, 0.08);
    --vimeo-colors-background-blur: #1d242b;
    --vimeo-colors-modal-shadow: rgba(0, 0, 0, 0.6);
    /* Neutral slate palette that Bokeh's join gate uses for the chat-icon
     * pill background. Left at its light default the pill renders white on
     * white text-color, hiding the icon; use the same dark chip token so the
     * icon fill (currentColor / text-primary → white) stays visible. */
    --vimeo-colors-slate-50: #272a2e;
    --vimeo-colors-slate-100: #272a2e;
    --vimeo-colors-slate-200: #3a3f45;
    /* Chakra tokens the third-party interaction widget references directly
     * (chakra-input etc.). Overriding at the same scope keeps the inputs on
     * the dark surface without a global color-mode swap. */
    --chakra-colors-white: #151b21;
    --chakra-colors-gray-50: #151b21;
    --chakra-colors-gray-100: #1d242b;
    --chakra-colors-gray-200: #272a2e;
    --chakra-colors-gray-800: #f9fafb;
    --chakra-colors-gray-900: #f9fafb;
    --chakra-colors-blackAlpha-50: rgba(255, 255, 255, 0.04);
    --chakra-colors-blackAlpha-100: rgba(255, 255, 255, 0.06);
    --chakra-colors-blackAlpha-200: rgba(255, 255, 255, 0.08);
    color-scheme: dark;
  }

  /*
   * Set the base text colour on the wrapper only — apply it via inheritance
   * rather than on \`*\`, otherwise every descendant's own \`color\` rule (e.g.
   * the vimeoBlue links for Terms of Service / Privacy Policy) loses to the
   * wildcard's specificity and everything collapses to white.
   */
  ${_v219}:fullscreen .event-interaction-tools-desktop {
    color: #f9fafb;
  }

  /*
   * When the interaction drawer is present, paint the wrapper black and add 8px
   * of space to the left of the player so every side of the player has an
   * 8px black surround (the drawer already carries one on the right). No drawer
   * → no rule → no black, no padding (onsite non-fullscreen is unaffected).
   */
  ${_v219}:fullscreen:has(.event-interaction-tools-desktop) {
    background-color: #000000 !important;
    padding-left: 8px;
  }
`;
  function _v241() {
    return (_v241 = Object.assign.bind()).apply(null, arguments);
  }
  let _v242 = function (_v0) {
    return _v7.createElement("svg", _v241({
      viewBox: "0 0 20 20",
      xmlns: "http://www.w3.org/2000/svg"
    }, _v0), _v3 || (_v3 = _v7.createElement("path", {
      d: "M15 4L7 9.3V4H5v12h2v-5.3l8 5.3z",
      fill: "#fff"
    })));
  };
  function _v243() {
    return (_v243 = Object.assign.bind()).apply(null, arguments);
  }
  let _v244 = function (_v0) {
      return _v7.createElement("svg", _v243({
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24"
      }, _v0), _v4 || (_v4 = _v7.createElement("path", {
        d: "M12 15.5a1 1 0 01-.67-.26l-5-4.5 1.34-1.48L12 13.15l4.33-3.9 1.34 1.49-5 4.5a1 1 0 01-.67.26z",
        fill: "#fff"
      })));
    },
    _v245 = _v14.default.div.withConfig({
      displayName: "PlaylistPlayBar__PlayBarWrapper",
      componentId: "sc-2bc51816-0"
    })`
  padding: ${(0, _v30.rem)(4)};
  height: 36px;
  width: 100%;
  display: flex;
  align-items: center;
`,
    _v246 = (0, _v14.default)(_v34.Header).withConfig({
      displayName: "PlaylistPlayBar__PlayBarText",
      componentId: "sc-2bc51816-1"
    })`
  margin: 0 0 0 ${(0, _v30.rem)(20)};
  font-size: ${(0, _v30.rem)(14)};
  white-space: nowrap;
  font-weight: normal;
  line-height: 1.25;
  letter-spacing: ${(0, _v30.rem)(.2)};
`,
    _v247 = (0, _v14.default)(_v246).withConfig({
      displayName: "PlaylistPlayBar__ClipIndexLabel",
      componentId: "sc-2bc51816-2"
    })`
  color: ${_v90.bokehTheme.colors.gray["300"]};
`,
    _v248 = _v14.default.div.withConfig({
      displayName: "PlaylistPlayBar__TextSection",
      componentId: "sc-2bc51816-3"
    })`
  width: 75%;
  display: flex;
  flex-direction: row;
  align-items: center;
`,
    _v249 = (0, _v14.default)(_v246).withConfig({
      displayName: "PlaylistPlayBar__ClipNameLabel",
      componentId: "sc-2bc51816-4"
    })`
  margin: 0;
  color: rgb(255, 255, 255);
  text-overflow: ellipsis;
  overflow: hidden;
  width: 65%;
`,
    _v250 = (0, _v14.default)(_v33.Button).withConfig({
      displayName: "PlaylistPlayBar__ExpandButton",
      componentId: "sc-2bc51816-5"
    })`
  padding: 0;
  width: ${(0, _v30.rem)(24)};
  height: ${(0, _v30.rem)(24)};
  svg {
    width: 100%;
    height: 100%;
    transition: transform 0.2s ease-in-out;
    transform-origin: center;
    ${_v0 => _v0.isExpanded && "transform: rotate(180deg);"}
  }
`,
    _v251 = _v14.default.div.withConfig({
      displayName: "PlaylistPlayBar__Navigation",
      componentId: "sc-2bc51816-6"
    })`
  display: flex;
  margin-right: ${(0, _v30.rem)(12)};
`,
    _v252 = (0, _v14.default)(_v242).withConfig({
      displayName: "PlaylistPlayBar__RightArrowIcon",
      componentId: "sc-2bc51816-7"
    })`
  transform: rotate(180deg);
`,
    _v253 = (0, _v14.default)(_v33.Button).withConfig({
      displayName: "PlaylistPlayBar__NavigationButton",
      componentId: "sc-2bc51816-8"
    })`
  width: ${(0, _v30.rem)(20)};
  height: ${(0, _v30.rem)(20)};
  padding: 0;
  svg {
    width: 80%;
    height: 80%;
  }
`,
    _v254 = _v14.default.div.withConfig({
      displayName: "PlaylistPlayBar__LiveIndicator",
      componentId: "sc-2bc51816-9"
    })`
  margin: 0 ${(0, _v30.rem)(8)};
  width: ${(0, _v30.rem)(8)};
  height: ${(0, _v30.rem)(8)};
  border-radius: 50%;
  background-color: ${({
      isLive: _v0
    }) => _v0 ? _v90.bokehTheme.colors.red["500"] : "transparent"};
`;
  function _v255({
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
      _v10 = _v36.clipIndexText(_v9, _v0.length),
      _v11 = _v36.totalClipsCountText(_v0.length);
    return (0, _v5.jsxs)(_v245, {
      children: [(0, _v5.jsx)(_v250, {
        isExpanded: _v2,
        variant: "minimalTransparent",
        onClick: _v4,
        format: "secondary",
        size: "xs",
        icon: (0, _v5.jsx)(_v244, {})
      }), (0, _v5.jsxs)(_v248, {
        children: [(0, _v5.jsx)(_v247, {
          children: _v2 ? _v11 : _v10
        }), !_v2 && (0, _v5.jsxs)(_v5.Fragment, {
          children: [(0, _v5.jsx)(_v254, {
            isLive: _v3
          }), (0, _v5.jsx)(_v249, {
            children: _v7
          })]
        })]
      }), (0, _v5.jsxs)(_v251, {
        children: [(0, _v5.jsx)(_v253, {
          size: "xs",
          variant: "minimalTransparent",
          format: "secondary",
          disabled: !_v6 || _v9 < 1,
          onClick: () => _v5(_v0[_v9 - 1]),
          icon: (0, _v5.jsx)(_v242, {})
        }), (0, _v5.jsx)(_v253, {
          size: "xs",
          variant: "minimalTransparent",
          format: "secondary",
          disabled: !_v6 || _v9 + 1 >= _v0.length,
          onClick: () => _v5(_v0[_v9 + 1]),
          icon: (0, _v5.jsx)(_v252, {})
        })]
      })]
    });
  }
  let _v256 = _v14.default.div.withConfig({
      displayName: "ThumbnailGrid__Container",
      componentId: "sc-7c440263-0"
    })`
  width: 100%;
  height: 100%;
  display: flex;
`,
    _v257 = _v14.default.div.withConfig({
      displayName: "ThumbnailGrid__PrimaryWrapper",
      componentId: "sc-7c440263-1"
    })`
  width: 100%;
  height: 100%;
`,
    _v258 = _v14.default.div.withConfig({
      displayName: "ThumbnailGrid__StackContainer",
      componentId: "sc-7c440263-2"
    })`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`,
    _v259 = _v14.default.div.withConfig({
      displayName: "ThumbnailGrid__Thumbnail",
      componentId: "sc-7c440263-3"
    })`
  background-image: url(${_v0 => _v0.src});
  width: 100%;
  height: 100%;
  border: solid ${(0, _v30.rem)(1)} ${_v90.bokehTheme.colors.gray["700"]};
  border-radius: ${(0, _v30.rem)(2)};
  background-position: center;
  background-size: cover;
`;
  function _v260({
    items: _v0
  }) {
    let _v1 = _v0 => {
      let _v1 = (0, _v62.default)(_v0[_v0]?.pictures?.sizes);
      return _v1 || (_v1 = (0, _v61.default)(_v0[0]?.pictures?.sizes)), _v1 ? (0, _v5.jsx)(_v259, {
        src: _v1.link
      }) : null;
    };
    return (0, _v5.jsxs)(_v256, {
      children: [(0, _v5.jsx)(_v257, {
        children: _v1(1)
      }), _v0.length > 1 && (0, _v5.jsxs)(_v258, {
        children: [_v1(2), _v1(3)]
      })]
    });
  }
  let _v261 = _v14.default.span.withConfig({
    displayName: "LiveNowBadge__LiveNowBadgeContainer",
    componentId: "sc-ce84f7b8-0"
  })`
  color: ${_v90.bokehTheme.colors.white};
  background: ${_v90.bokehTheme.colors.red["500"]};
  font-weight: 500;
  vertical-align: top;
  padding: ${(0, _v30.rem)(2)} ${(0, _v30.rem)(8)};
  border-radius: ${(0, _v30.rem)(2)};
  font-size: ${(0, _v30.rem)(14)};

  svg {
    margin-right: ${(0, _v30.rem)(4)};
    fill: ${_v90.bokehTheme.colors.white};
  }
`;
  function _v262() {
    return (0, _v5.jsxs)(_v261, {
      children: [(0, _v5.jsx)("svg", {
        viewBox: "0 0 20 20",
        width: "10",
        height: "10",
        children: (0, _v5.jsx)("circle", {
          cx: "10",
          cy: "10",
          r: "10"
        })
      }), "LIVE NOW"]
    });
  }
  var _v263 = _v0.i(0),
    _v264 = _v0.i(0);
  let _v265 = _v14.default.div.withConfig({
      displayName: "LiveThumbnail__Thumbnail",
      componentId: "sc-9dfd8e69-0"
    })`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${_v0 => _v0.src});
  min-width: ${(0, _v30.rem)(70)};
  height: ${(0, _v30.rem)(44)};
  border-radius: 10%;
  background-color: ${_v90.bokehTheme.colors.gray["700"]};
  background-position: center;
  background-size: cover;
`,
    _v266 = _v14.default.div.withConfig({
      displayName: "LiveThumbnail__PlayIconOverlay",
      componentId: "sc-9dfd8e69-1"
    })`
  display: none;
  align-items: center;
  justify-content: center;
  width: ${(0, _v30.rem)(35)};
  height: ${(0, _v30.rem)(35)};
  border-radius: 50%;
  background: black;
  opacity: 0.7;
  z-index: 14;
`,
    _v267 = (0, _v14.default)(_v263.Play).withConfig({
      displayName: "LiveThumbnail__PlayIcon",
      componentId: "sc-9dfd8e69-2"
    })`
  path {
    fill: ${_v90.bokehTheme.colors.white};
  }
  margin-left: ${(0, _v30.rem)(2)};
  width: ${(0, _v30.rem)(16)};
  height: ${(0, _v30.rem)(16)};
`,
    _v268 = (0, _v14.default)(_v264.Pause).withConfig({
      displayName: "LiveThumbnail__PauseIcon",
      componentId: "sc-9dfd8e69-3"
    })`
  path {
    fill: ${_v90.bokehTheme.colors.white};
  }
  width: ${(0, _v30.rem)(16)};
  height: ${(0, _v30.rem)(16)};
`;
  function _v269({
    src: _v0,
    isPlaying: _v1
  }) {
    return (0, _v5.jsx)(_v265, {
      src: _v0,
      children: (0, _v5.jsx)(_v266, {
        children: _v1 ? (0, _v5.jsx)(_v268, {}) : (0, _v5.jsx)(_v267, {})
      })
    });
  }
  let _v270 = _v14.default.div.withConfig({
      displayName: "TrackList__ItemsContainer",
      componentId: "sc-c7b16db8-0"
    })`
  display: flex;
  flex-direction: column;
`,
    _v271 = _v14.default.div.withConfig({
      displayName: "TrackList__ClipInfo",
      componentId: "sc-c7b16db8-1"
    })`
  margin-left: ${(0, _v30.rem)(12)};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`,
    _v272 = _v14.default.div.withConfig({
      displayName: "TrackList__Item",
      componentId: "sc-c7b16db8-2"
    })`
  padding: ${(0, _v30.rem)(10)};
  height: ${(0, _v30.rem)(64)};
  cursor: pointer;
  width: 100%;
  display: flex;
  opacity: 0.8;
  transition: background 0.25s linear;
  ${({
      isSelected: _v0
    }) => _v0 && `
    background: ${_v90.bokehTheme.colors.gray["800"]};
    opacity: 1;
    p {
      color: ${_v90.bokehTheme.colors.white};
    }
    div {
      display: flex;
    }`}
  &:hover {
    opacity: 1;
    background: ${_v90.bokehTheme.colors.gray["700"]};
    p {
      color: ${_v90.bokehTheme.colors.white};
    }
    div {
      display: flex;
    }
  }
`,
    _v273 = _v14.default.div.withConfig({
      displayName: "TrackList__ClipTitle",
      componentId: "sc-c7b16db8-3"
    })`
  width: ${(0, _v30.rem)(200)};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: ${(0, _v30.rem)(14)};
  color: ${_v90.bokehTheme.colors.gray["100"]};
  margin-bottom: ${(0, _v30.rem)(4)};
  font-weight: 500;
`,
    _v274 = _v14.default.div.withConfig({
      displayName: "TrackList__ClipDetails",
      componentId: "sc-c7b16db8-4"
    })`
  display: flex;
  width: 100%;
`,
    _v275 = _v14.default.span.withConfig({
      displayName: "TrackList__ClipStat",
      componentId: "sc-c7b16db8-5"
    })`
  color: ${_v90.bokehTheme.colors.gray["300"]};
  font-size: ${(0, _v30.rem)(14)};
  font-weight: normal;
`,
    _v276 = (0, _v14.default)(_v275).withConfig({
      displayName: "TrackList__ClipStatDivider",
      componentId: "sc-c7b16db8-6"
    })`
  padding: 0 ${(0, _v30.rem)(4)};
`;
  function _v277({
    items: _v0,
    isPlaying: _v1,
    activeClipUri: _v2,
    onClipSwitch: _v3
  }) {
    return (0, _v5.jsx)(_v270, {
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
          _v10 = _v36.trackViewCountText(_v7),
          _v11 = (0, _v61.default)(_v8)?.link;
        return (0, _v5.jsxs)(_v272, {
          isSelected: _v1,
          onClick: () => _v3(_v0),
          children: [(0, _v5.jsx)(_v269, {
            src: _v11,
            isPlaying: _v1 && _v1
          }), (0, _v5.jsxs)(_v271, {
            children: [(0, _v5.jsx)(_v273, {
              children: _v4
            }), (0, _v5.jsx)(_v274, {
              children: _v9?.status === _v48 ? (0, _v5.jsx)(_v262, {}) : (0, _v5.jsxs)(_v5.Fragment, {
                children: [(0, _v5.jsx)(_v275, {
                  children: (_v2 = String(Math.floor(_v5 / 60)).padStart(2, "0"), _v3 = String(_v5 % 60).padStart(2, "0"), `${_v2}:${_v3}`)
                }), (0, _v5.jsx)(_v276, {
                  children: "•"
                }), (0, _v5.jsx)(_v275, {
                  children: _v10
                })]
              })
            })]
          })]
        }, _v6);
      }(_v0, _v0.uri === _v2))
    });
  }
  let _v278 = _v14.default.div.withConfig({
      displayName: "EmbedPlaylist__EmbedPlaylistContainer",
      componentId: "sc-1d80e40c-0"
    })`
  display: ${_v0 => _v0.isPlaying && !_v0.isHover || _v0.isToastDisplayed ? "none" : "flex"};
  top: ${(0, _v30.rem)(8)};
  left: ${(0, _v30.rem)(8)};
  width: 22%;
  min-width: ${(0, _v30.rem)(348)};
  background-color: rgba(17, 25, 29, 0.85);
  position: absolute;
  flex-direction: column;
  z-index: 4;
  border-radius: ${(0, _v30.rem)(8)};
  transition: all 0.5s ease-in-out;
  ${({
      isExpanded: _v0
    }) => _v0 ? "max-height: 87%" : `height: ${(0, _v30.rem)(92)}`};

  @media screen and (max-width: ${(0, _v30.rem)(953)}) and (min-width: ${(0, _v30.rem)(769)}) {
    display: none;
  }

  @media screen and (max-width: ${(0, _v30.rem)(750)}) {
    display: none;
  }

  @media screen and (max-height: ${(0, _v30.rem)(472)}) {
    display: none;
  }
`,
    _v279 = _v14.default.div.withConfig({
      displayName: "EmbedPlaylist__PlaylistHeader",
      componentId: "sc-1d80e40c-1"
    })`
  padding: ${(0, _v30.rem)(4)};
  display: flex;
  max-height: 70%;
  width: 100%;
`,
    _v280 = _v14.default.div.withConfig({
      displayName: "EmbedPlaylist__ThumbnailSection",
      componentId: "sc-1d80e40c-2"
    })`
  height: ${(0, _v30.rem)(52)};
  width: ${(0, _v30.rem)(88)};
`,
    _v281 = _v14.default.div.withConfig({
      displayName: "EmbedPlaylist__EventDetails",
      componentId: "sc-1d80e40c-3"
    })`
  margin-left: ${(0, _v30.rem)(12)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 65%;
`,
    _v282 = (0, _v14.default)(_v34.Header).withConfig({
      displayName: "EmbedPlaylist__EventTitle",
      componentId: "sc-1d80e40c-4"
    })`
  margin: 0;
  font-size: ${(0, _v30.rem)(16)};
  font-weight: 600;
  line-height: 1.25;
  text-overflow: ellipsis;
  overflow: hidden;
  color: ${_v90.bokehTheme.colors.white};
  letter-spacing: ${(0, _v30.rem)(.2)};
`,
    _v283 = (0, _v14.default)(_v215.Paragraph).withConfig({
      displayName: "EmbedPlaylist__OwnerLabel",
      componentId: "sc-1d80e40c-5"
    })`
  margin: 0;
  font-size: ${(0, _v30.rem)(14)};
  line-height: 1.4;
  color: ${_v90.bokehTheme.colors.gray["300"]};
`,
    _v284 = _v14.default.div.withConfig({
      displayName: "EmbedPlaylist__TrackListContainer",
      componentId: "sc-1d80e40c-6"
    })`
  max-height: ${_v0 => _v0.isExpanded ? "50vh" : "0"};
  transition: all 0.5s ease-in-out;
  width: 100%;
  overflow-y: auto;
`;
  function _v285({
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
      [_v13, _v14] = (0, _v7.useState)(!1),
      _v15 = (0, _v7.useCallback)(() => {
        _v13 ? _v10(_v67.CLOSE_PLAYLIST, "click") : _v10(_v67.OPEN_PLAYLIST, "click");
        let _v0 = !_v13;
        _v14(_v0), _v8(_v0);
      }, [_v13, _v8, _v10]),
      _v16 = _v36.embedPlaylistOwnerLabelText(_v12),
      _v17 = (0, _v7.useCallback)(_v0 => {
        _v9 && _v7(_v0);
      }, [_v9, _v7]);
    return (0, _v5.jsxs)(_v278, {
      isPlaying: _v3,
      isHover: _v4,
      isExpanded: _v13,
      isToastDisplayed: _v6,
      children: [(0, _v5.jsxs)(_v279, {
        children: [(0, _v5.jsx)(_v280, {
          children: (0, _v5.jsx)(_v260, {
            items: _v0
          })
        }), (0, _v5.jsxs)(_v281, {
          children: [(0, _v5.jsx)(_v282, {
            children: _v11
          }), (0, _v5.jsx)(_v283, {
            children: _v16
          })]
        })]
      }), (0, _v5.jsx)(_v255, {
        items: _v0,
        activeClip: _v2,
        isExpanded: _v13,
        onExpandToggled: _v15,
        canSwitchClip: _v9,
        onClipSwitch: _v17,
        isLive: _v5
      }), (0, _v5.jsx)(_v284, {
        isExpanded: _v13,
        children: (0, _v5.jsx)(_v277, {
          activeClipUri: _v2.uri,
          items: _v0,
          isPlaying: _v3,
          onClipSwitch: _v17
        })
      })]
    });
  }
  var _v286 = _v0.i(0);
  let _v287 = _v14.default.div.withConfig({
      displayName: "NextLiveClip__ClipTitle",
      componentId: "sc-eca46192-0"
    })`
  width: ${(0, _v30.rem)(200)};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: ${(0, _v30.rem)(14)};
  color: ${_v90.bokehTheme.colors.gray["100"]};
  font-weight: 500;
  margin: 0;
`,
    _v288 = (0, _v14.default)(_v215.Paragraph).withConfig({
      displayName: "NextLiveClip__ClickToWatch",
      componentId: "sc-eca46192-1"
    })`
  padding-left: ${(0, _v30.rem)(8)};
  color: ${_v90.bokehTheme.colors.gray["100"]};
`,
    _v289 = _v14.default.div.withConfig({
      displayName: "NextLiveClip__ThumbnailWrapper",
      componentId: "sc-eca46192-2"
    })`
  position: relative;
  opacity: 0.75;
  display: flex;
`,
    _v290 = _v14.default.div.withConfig({
      displayName: "NextLiveClip__NextLiveClipContainer",
      componentId: "sc-eca46192-3"
    })`
  max-width: ${(0, _v30.rem)(704)};
  display: flex;
  position: absolute;
  z-index: 3;
  top: ${(0, _v30.rem)(10)};
  right: ${(0, _v30.rem)(10)};
  padding: ${(0, _v30.rem)(10)} ${(0, _v30.rem)(8)};
  border-radius: ${(0, _v30.rem)(5)};
  background: rgba(17, 25, 29, 0.85);
  cursor: pointer;

  &:hover {
    ${_v287} {
      color: ${_v90.bokehTheme.colors.white};
    }
    ${_v288} {
      color: ${_v90.bokehTheme.colors.white};
    }
    ${_v289} div {
      display: flex;
    }
  }
`,
    _v291 = _v14.default.div.withConfig({
      displayName: "NextLiveClip__ClipDetailsWrapper",
      componentId: "sc-eca46192-4"
    })`
  display: flex;
  flex-direction: column;
  margin-left: ${(0, _v30.rem)(12)};
  justify-content: center;
`,
    _v292 = (0, _v14.default)(_v33.Button).withConfig({
      displayName: "NextLiveClip__DismissButton",
      componentId: "sc-eca46192-5"
    })`
  cursor: pointer;
  z-index: 13;
  right: 2.5%;
`,
    _v293 = _v14.default.div.withConfig({
      displayName: "NextLiveClip__TopWrapper",
      componentId: "sc-eca46192-6"
    })`
  display: flex;
  align-items: center;
  margin-bottom: ${(0, _v30.rem)(4)};
`,
    _v294 = _v14.default.div.withConfig({
      displayName: "NextLiveClip__BottomWrapper",
      componentId: "sc-eca46192-7"
    })``;
  function _v295({
    streamableClip: _v0,
    onClipSwitch: _v1,
    onDismiss: _v2
  }) {
    let _v3 = (0, _v7.useCallback)(() => _v1(_v0), [_v1, _v0]),
      {
        name: _v4,
        pictures: _v5
      } = _v0,
      _v6 = (0, _v61.default)(_v5?.sizes)?.link;
    return (0, _v5.jsxs)(_v290, {
      onClick: _v3,
      children: [(0, _v5.jsx)(_v289, {
        children: (0, _v5.jsx)(_v269, {
          src: _v6,
          isPlaying: !1
        })
      }), (0, _v5.jsxs)(_v291, {
        children: [(0, _v5.jsxs)(_v293, {
          children: [(0, _v5.jsx)(_v287, {
            children: _v4
          }), (0, _v5.jsx)(_v292, {
            variant: "minimalTransparent",
            size: "xs",
            icon: (0, _v5.jsx)(_v286.DismissX, {
              color: _v90.bokehTheme.colors.white,
              width: 20,
              height: 20
            }),
            onClick: _v2
          })]
        }), (0, _v5.jsxs)(_v294, {
          children: [(0, _v5.jsx)(_v262, {}), (0, _v5.jsx)(_v288, {
            size: 3,
            children: _v36.nextClipLabelText
          })]
        })]
      })]
    });
  }
  let _v296 = _v14.default.div.withConfig({
      displayName: "NextVideoPreview__NextVideoPreviewContainer",
      componentId: "sc-cb38d70a-0"
    })`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 15vh;
  right: ${(0, _v30.rem)(4)};
  z-index: 10;
  max-width: ${(0, _v30.rem)(260)};
  width: 20%;

  @media screen and (max-width: ${(0, _v30.rem)(0)}) {
    bottom: 10vw;
  }

  @media screen and (max-width: ${(0, _v30.rem)(900)}) {
    display: none;
  }

  @media screen and (max-height: ${(0, _v30.rem)(640)}) {
    display: none;
  }
`,
    _v297 = _v14.default.div.withConfig({
      displayName: "NextVideoPreview__ThumbnailContainer",
      componentId: "sc-cb38d70a-1"
    })`
  width: 100%;
  height: 100%;
  background-color: ${_v90.bokehTheme.colors.gray["900"]};
  &: hover {
    opacity: 0.7;
  }
`,
    _v298 = _v14.default.div.withConfig({
      displayName: "NextVideoPreview__Thumbnail",
      componentId: "sc-cb38d70a-2"
    })`
  background-image: url(${_v0 => _v0.src});
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  border: solid ${(0, _v30.rem)(1)} ${_v90.bokehTheme.colors.gray["700"]};
  border-radius: ${(0, _v30.rem)(2)};
  border: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`,
    _v299 = (0, _v14.default)(_v34.Header).withConfig({
      displayName: "NextVideoPreview__UpNext",
      componentId: "sc-cb38d70a-3"
    })`
  color: ${_v90.bokehTheme.colors.white};
  margin-bottom: ${(0, _v30.rem)(8)};
`,
    _v300 = (0, _v14.default)(_v215.Paragraph).withConfig({
      displayName: "NextVideoPreview__Duration",
      componentId: "sc-cb38d70a-4"
    })`
  border-radius: ${(0, _v30.rem)(4)};
  bottom: 35%;
  right: 10%;
  background-color: black;
  color: ${_v90.bokehTheme.colors.white};
  padding: ${(0, _v30.rem)(4)} ${(0, _v30.rem)(12)};
  margin-bottom: ${(0, _v30.rem)(6)};
  margin-left: 60%;
  opacity: 0.7;
`,
    _v301 = (0, _v14.default)(_v263.Play).withConfig({
      displayName: "NextVideoPreview__PlayIcon",
      componentId: "sc-cb38d70a-5"
    })`
  path {
    fill: ${_v90.bokehTheme.colors.white};
  }
  margin-left: ${(0, _v30.rem)(2)};
  width: ${(0, _v30.rem)(24)};
  height: ${(0, _v30.rem)(24)};
`,
    _v302 = _v14.default.div.withConfig({
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
    _v303 = _v14.default.div.withConfig({
      displayName: "NextVideoPreview__Description",
      componentId: "sc-cb38d70a-7"
    })`
  width: 100%;
  padding: 0 ${(0, _v30.rem)(12)};
  background-color: ${_v90.bokehTheme.colors.gray["900"]};
`,
    _v304 = (0, _v14.default)(_v34.Header).withConfig({
      displayName: "NextVideoPreview__VideoTitle",
      componentId: "sc-cb38d70a-8"
    })`
  color: ${_v90.bokehTheme.colors.white};
  margin: ${(0, _v30.rem)(12)} 0;
  font-weight: 500;
`,
    _v305 = (0, _v14.default)(_v34.Header).withConfig({
      displayName: "NextVideoPreview__Author",
      componentId: "sc-cb38d70a-9"
    })`
  color: ${_v90.bokehTheme.colors.gray["300"]};
  margin: ${(0, _v30.rem)(12)} 0;
`;
  function _v306({
    video: _v0,
    author: _v1,
    onNextVideoToggled: _v2
  }) {
    let {
        pictures: _v3,
        duration: _v4,
        name: _v5
      } = _v0,
      _v6 = String((0, _v62.default)(_v3?.sizes)?.link),
      _v7 = String(Math.floor(_v4 / 60)).padStart(2, "0"),
      _v8 = String(_v4 % 60).padStart(2, "0"),
      _v9 = (0, _v7.useCallback)(() => _v2(_v0, !0), [_v2, _v0]);
    return (0, _v5.jsxs)(_v296, {
      children: [(0, _v5.jsx)(_v299, {
        size: "4",
        children: _v36.upNextHeaderText
      }), (0, _v5.jsx)(_v297, {
        onClick: _v9,
        children: (0, _v5.jsxs)(_v298, {
          src: _v6,
          children: [(0, _v5.jsx)(_v302, {
            children: (0, _v5.jsx)(_v301, {})
          }), (0, _v5.jsx)(_v300, {
            size: "2",
            children: `${_v7}:${_v8}`
          })]
        })
      }), (0, _v5.jsxs)(_v303, {
        children: [(0, _v5.jsx)(_v304, {
          size: "6",
          children: _v5
        }), (0, _v5.jsx)(_v305, {
          size: "6",
          children: _v1
        })]
      })]
    });
  }
  var _v307 = _v0.i(0);
  let _v308 = _v14.default.div.withConfig({
      displayName: "schedule-bubble__ScheduleContainer",
      componentId: "sc-bf18c264-0"
    })`
  position: absolute;
  width: ${(0, _v30.rem)(320)};
  background-color: ${_v90.bokehTheme.colors.gray["900"]};
  padding: ${(0, _v30.rem)(12)} ${(0, _v30.rem)(15)};
  border-radius: ${(0, _v30.rem)(4)};
  color: rgb(255, 255, 255);
  bottom: ${(0, _v30.rem)(56)};
  left: ${(0, _v30.rem)(12)};
  z-index: 4;

  @media screen and (max-width: ${(0, _v30.rem)(500)}) {
    display: none;
  }

  @media screen and (max-height: ${(0, _v30.rem)(524)}) {
    display: none;
  }
`,
    _v309 = _v14.default.div.withConfig({
      displayName: "schedule-bubble__UpperText",
      componentId: "sc-bf18c264-1"
    })`
  font-size: ${(0, _v30.rem)(14)};
  font-weight: 300;
  margin-bottom: ${(0, _v30.rem)(4)};
  color: ${_v90.bokehTheme.colors.white};
`,
    _v310 = _v14.default.div.withConfig({
      displayName: "schedule-bubble__MainText",
      componentId: "sc-bf18c264-2"
    })`
  font-size: ${(0, _v30.rem)(20)};
`;
  function _v311({
    schedule: _v0
  }) {
    return (0, _v5.jsxs)(_v308, {
      children: [(0, _v5.jsx)(_v309, {
        children: (0, _v307.getScheduleAvailability)(_v0)
      }), (0, _v5.jsx)(_v310, {
        children: (0, _v307.getScheduleTime)(_v0)
      })]
    });
  }
  let _v312 = _v14.default.div.withConfig({
      displayName: "EventRecipientPlayer__BackstageFill",
      componentId: "sc-51e55c7f-0"
    })`
  position: absolute;
  inset: 0;
`,
    _v313 = _v14.default.video.withConfig({
      displayName: "EventRecipientPlayer__CameraPreview",
      componentId: "sc-51e55c7f-1"
    })`
  position: absolute;
  right: ${(0, _v30.rem)(12)};
  bottom: ${(0, _v30.rem)(12)};
  width: ${(0, _v30.rem)(219)};
  height: ${(0, _v30.rem)(126)};
  aspect-ratio: 16 / 9;
  border-radius: ${(0, _v30.rem)(8)};
  border: 1px solid var(--vimeo-colors-stroke);
  background: #000;
  object-fit: cover;
  transform: scaleX(-1);
  z-index: ${2};
`,
    _v314 = _v14.default.div.withConfig({
      displayName: "EventRecipientPlayer__CameraPreviewLetter",
      componentId: "sc-51e55c7f-2"
    })`
  position: absolute;
  right: ${(0, _v30.rem)(12)};
  bottom: ${(0, _v30.rem)(12)};
  width: ${(0, _v30.rem)(219)};
  height: ${(0, _v30.rem)(126)};
  aspect-ratio: 16 / 9;
  border-radius: ${(0, _v30.rem)(8)};
  border: 1px solid var(--vimeo-colors-stroke);
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${2};
`,
    _v315 = (0, _v7.lazy)(() => _v0.A(0).then(_v0 => ({
      default: _v0.EmbeddedAudienceSpeakerSession
    }))),
    _v316 = (0, _v7.forwardRef)(function ({
      fullscreenTargetRef: _v0,
      roundedCorners: _v1 = !1
    }, _v2) {
      let {
          eventData: _v3,
          videosData: _v4,
          ingestStatus: _v5,
          onPlayableClipChange: _v6,
          currentClip: _v7,
          eventId: _v8
        } = _v71(),
        {
          PlayerConstructor: _v9
        } = (0, _v7.useContext)(_v212.PlayerContext),
        {
          isPromoted: _v10,
          grant: _v11,
          audienceSpeakersContext: _v12
        } = (0, _v20.useAudienceSpeakerPromotion)(),
        _v13 = !!(_v10 && _v11?.joinToken && _v11?.eventId),
        _v14 = function () {
          let [_v0, _v1] = (0, _v7.useState)(!1),
            [_v2, _v3] = (0, _v7.useState)(!1),
            [_v4, _v5] = (0, _v7.useState)([]),
            [_v6, _v7] = (0, _v7.useState)([]),
            [_v8, _v9] = (0, _v7.useState)(""),
            [_v10, _v11] = (0, _v7.useState)(""),
            [_v12, _v13] = (0, _v7.useState)(null),
            _v14 = (0, _v7.useRef)(!1),
            _v15 = (0, _v7.useRef)(null),
            _v16 = (0, _v7.useRef)(null),
            _v17 = (0, _v7.useCallback)(_v0 => {
              _v0?.getTracks().forEach(_v0 => _v0.stop());
            }, []),
            _v18 = (0, _v7.useCallback)(_v0 => {
              _v17(_v15.current), _v15.current = _v0;
            }, [_v17]),
            _v19 = (0, _v7.useCallback)(_v0 => {
              _v17(_v16.current), _v16.current = _v0, _v13(_v0);
            }, [_v17]),
            _v20 = (0, _v7.useCallback)(async () => {
              try {
                let _v0 = await navigator.mediaDevices.enumerateDevices(),
                  _v1 = [],
                  _v2 = [];
                _v0.forEach(_v0 => {
                  "audioinput" === _v0.kind ? _v1.push({
                    deviceId: _v0.deviceId,
                    label: _v0.label || (0, _v35.translate)({
                      singular: "Microphone {index}",
                      replacements: {
                        index: _v1.length + 1
                      },
                      dictionary: {
                        es: {
                          singular: "Micrófono {index}"
                        },
                        "de-DE": {
                          singular: "Mikrofon {index}"
                        },
                        "ja-JP": {
                          singular: "マイク {index}"
                        },
                        "ko-KR": {
                          singular: "마이크 {index}"
                        },
                        "pt-BR": {
                          singular: "Microfone {index}"
                        },
                        "zh-CN": {
                          singular: "麦克风 {index}"
                        }
                      }
                    })
                  }) : "videoinput" === _v0.kind && _v2.push({
                    deviceId: _v0.deviceId,
                    label: _v0.label || (0, _v35.translate)({
                      singular: "Camera {index}",
                      replacements: {
                        index: _v2.length + 1
                      },
                      dictionary: {
                        es: {
                          singular: "Cámara {index}"
                        },
                        "de-DE": {
                          singular: "Kamera {index}"
                        },
                        "fr-FR": {
                          singular: "Caméra {index}"
                        },
                        "ja-JP": {
                          singular: "カメラ {index}"
                        },
                        "ko-KR": {
                          singular: "카메라 {index}"
                        },
                        "pt-BR": {
                          singular: "Câmera {index}"
                        },
                        "zh-CN": {
                          singular: "摄像机 {index}"
                        }
                      }
                    })
                  });
                }), _v5(_v1), _v7(_v2), _v1.length > 0 && _v9(_v0 => _v0 || _v1[0].deviceId), _v2.length > 0 && _v11(_v0 => _v0 || _v2[0].deviceId);
              } catch {
                _v5([]), _v7([]);
              }
            }, []),
            _v21 = (0, _v7.useCallback)(async _v0 => {
              if (!_v14.current && "u" > typeof navigator && "function" == typeof navigator.mediaDevices?.getUserMedia) {
                _v14.current = !0;
                try {
                  if (_v0) try {
                    let _v0 = await navigator.mediaDevices.getUserMedia({
                        audio: !0,
                        video: !0
                      }),
                      _v1 = _v0.getAudioTracks(),
                      _v2 = _v0.getVideoTracks();
                    _v18(_v1.length > 0 ? new MediaStream(_v1) : null), _v19(_v2.length > 0 ? new MediaStream(_v2) : null), _v3(_v2.length > 0), await _v20();
                    return;
                  } catch {}
                  let _v0 = await navigator.mediaDevices.getUserMedia({
                    audio: !0,
                    video: !1
                  });
                  _v18(_v0), _v3(!1), await _v20();
                } catch {
                  _v14.current = !1, _v18(null), _v19(null), _v5([]), _v7([]);
                }
              }
            }, [_v20, _v18, _v19]),
            _v22 = (0, _v7.useCallback)(() => {
              let _v0 = _v15.current;
              if (!_v0) return;
              let _v1 = !_v0;
              _v0.getAudioTracks().forEach(_v0 => {
                _v0.enabled = !_v1;
              }), _v1(_v1);
            }, [_v0]),
            _v23 = (0, _v7.useCallback)(async _v0 => {
              if (_v0) {
                if (_v2) {
                  _v19(null), _v3(!1);
                  return;
                }
                try {
                  let _v0 = await navigator.mediaDevices.getUserMedia({
                    video: !_v10 || {
                      deviceId: {
                        exact: _v10
                      }
                    }
                  });
                  _v19(_v0), _v3(!0);
                } catch {
                  _v3(!1);
                }
              }
            }, [_v2, _v19, _v10]),
            _v24 = (0, _v7.useCallback)(async _v0 => {
              _v9(_v0);
              try {
                let _v0 = await navigator.mediaDevices.getUserMedia({
                  audio: {
                    deviceId: {
                      exact: _v0
                    }
                  }
                });
                _v0.getAudioTracks().forEach(_v0 => {
                  _v0.enabled = !_v0;
                }), _v18(_v0);
              } catch {}
            }, [_v0, _v18]),
            _v25 = (0, _v7.useCallback)(async _v0 => {
              if (_v11(_v0), _v2) try {
                let _v0 = await navigator.mediaDevices.getUserMedia({
                  video: {
                    deviceId: {
                      exact: _v0
                    }
                  }
                });
                _v19(_v0);
              } catch {}
            }, [_v2, _v19]),
            _v26 = (0, _v7.useCallback)(() => {
              _v18(null), _v19(null), _v14.current = !1;
            }, [_v18, _v19]),
            _v27 = (0, _v7.useCallback)(() => {
              _v14.current = !0;
            }, []);
          return (0, _v7.useEffect)(() => () => {
            _v17(_v15.current), _v17(_v16.current), _v15.current = null, _v16.current = null;
          }, [_v17]), {
            isAudioMuted: _v0,
            isCameraOn: _v2,
            audioDevices: _v4,
            videoDevices: _v6,
            selectedAudioDeviceId: _v8,
            selectedVideoDeviceId: _v10,
            videoStream: _v12,
            ensureMedia: _v21,
            toggleAudio: _v22,
            toggleCamera: _v23,
            selectAudioDevice: _v24,
            selectVideoDevice: _v25,
            releaseMedia: _v26,
            keepMedia: _v27
          };
        }(),
        _v15 = (0, _v7.useCallback)(_v0 => {
          _v0 && (_v0.srcObject = _v14.isCameraOn && _v14.videoStream ? _v14.videoStream : null);
        }, [_v14.isCameraOn, _v14.videoStream]),
        _v16 = (0, _v7.useRef)(!1);
      (0, _v7.useEffect)(() => {
        _v16.current && !_v10 && _v14.releaseMedia(), _v16.current = _v10;
      }, [_v10, _v14]);
      let {
          streamableClip: _v17,
          schedule: _v18,
          embed: {
            playlist: _v19,
            autoplay: _v20,
            loop: _v21,
            showLatestArchivedClip: _v22,
            schedule: _v23,
            logos: {
              custom: _v24
            }
          },
          user: {
            name: _v25,
            account: _v26
          },
          streamPrivacy: _v27
        } = _v3,
        _v28 = (0, _v7.useContext)(_v29.ViewerContext),
        _v29 = _v28?.teamUser,
        _v30 = _v28?.user?.name ?? "",
        [_v31, _v32] = (0, _v7.useState)(!1),
        [_v33, _v34] = (0, _v7.useState)(!1),
        [_v35, _v36] = (0, _v7.useState)(!1),
        [_v37, _v38] = (0, _v7.useState)(null),
        [_v39, _v40] = (0, _v7.useState)(!1),
        [_v41, _v42] = (0, _v7.useState)(!1),
        [_v43, _v44] = (0, _v7.useState)(null),
        [_v45, _v46] = (0, _v7.useState)(!1),
        _v47 = (0, _v7.useRef)(!1),
        _v48 = (0, _v7.useMemo)(() => _v64(), []),
        _v49 = (0, _v115.useIsPortraitScreenOrientation)(),
        _v50 = (0, _v7.useRef)(null),
        [_v51, _v52] = (0, _v7.useState)(null);
      (0, _v177.useLeadFormPrefillParentListener)(_v8 || "", _v176.ENTITY_TYPE.EVENT);
      let _v53 = (0, _v7.useRef)(null);
      null === _v53.current && (_v53.current = {
        getFullscreenElement: () => void 0
      }), _v53.current.getFullscreenElement = () => {
        let _v0 = _v0?.current,
          _v1 = _v50.current;
        if (_v0 && _v1 && _v0.contains(_v1)) return _v0.classList.add("js-player-fullscreen"), _v0;
      }, (0, _v7.useEffect)(() => {
        let _v0 = _v0?.current,
          _v1 = _v50.current;
        _v0 && _v1 && _v0.contains(_v1) && _v0.classList.add("js-player-fullscreen");
      }, [_v0]);
      let _v54 = (0, _v7.useRef)(null),
        _v55 = (0, _v7.useCallback)(_v0 => {
          _v50.current = _v0, _v52(_v0);
        }, []);
      (0, _v7.useEffect)(() => {
        let _v0 = _v7?.configUrl;
        _v51 && _v9 && _v0 && (_v54.current?.node !== _v51 || _v54.current?.configUrl !== _v0) && (_v54.current = {
          node: _v51,
          configUrl: _v0
        }, _v44(new _v9(_v51, _v0, !0, _v53.current ?? void 0)));
      }, [_v9, _v7?.configUrl, _v51]), (0, _v7.useEffect)(() => {
        if (_v24.url && _v24.active && _v41 && _v43?._setEmbedSetting) {
          let _v0 = {
            img: _v24.url,
            url: _v24.link,
            sticky: _v24.sticky
          };
          _v43._setEmbedSetting("custom_logo", _v0);
        }
      }, [_v24.active, _v24.link, _v24.sticky, _v24.url, _v41, _v43, _v43?._setEmbedSetting]);
      let _v56 = (0, _v7.useMemo)(() => _v4?.items?.filter(_v0 => !_v22 || _v0.live?.status === "done" || _v0.live?.status === _v48 || _v0.live?.status === "archiving" || _v0.uri === _v7?.uri), [_v4, _v7, _v22]),
        _v57 = (0, _v7.useCallback)((_v0, _v1, _v2 = null) => {
          let _v3,
            _v4 = _v2 ?? _v7;
          _v4 && (_v3 = {
            is_embed: !1,
            name: _v0,
            event_type: _v1,
            live_event_id: _v8 ?? null,
            live_event_privacy: _v27?.view ?? null,
            video_type: _v66(_v17, _v4, _v5, !!_v18),
            live_event_embed_privacy: _v27?.embed ?? null,
            live_event_type: _v68.LIVE_EVENT,
            team_owner_id: _v29 ? _v29.ownerId.toString() : null,
            team_subscription_type: _v29 ? _v26 : null,
            actor_team_role: null,
            actor_resource_role: null,
            team_size: _v29 && _v29.currentTeamSize ? _v29.currentTeamSize.toString() : null
          }, _v165.BigPictureClient.sendEvent(new _v165.Event("vimeo.live_svvr_player", 2, _v3)));
        }, [_v26, _v7, _v8, _v5, _v18, _v27?.embed, _v27?.view, _v17, _v29]);
      (0, _v7.useEffect)(() => {
        if (_v43) return _v43.ready(() => {
          if (_v43.paused && _v47.current && _v43.play(), _v42(!0), _v0?.current && _v50.current) {
            let _v0 = _v0.current;
            _v0.contains(_v50.current) && (_v0.classList.add("js-player-fullscreen"), _v43.delegate && (_v43.delegate.getFullscreenElement = () => _v0));
          }
        }), () => {
          _v43?.unload && (_v42(!1), _v43.unload());
        };
      }, [_v43]), (0, _v7.useEffect)(() => {
        let _v0 = {
          play: () => {
            _v32(!0), _v38(null);
          },
          pause: () => {
            _v32(!1);
          },
          ended: () => {
            if (_v56) {
              let _v0 = _v56.findIndex(_v0 => _v0.uri === _v7?.uri),
                _v1 = _v0 + 1 === _v56.length ? 0 : _v0 + 1,
                _v2 = 0 !== _v1 || _v21,
                _v3 = _v56[_v1];
              (0 !== _v1 || _v2) && (_v20 ? (_v47.current = _v2, _v6(_v3)) : _v19 && _v38(_v3));
            }
          },
          toastvisibilitychanged: _v0 => {
            _v46(_v0.visible);
          }
        };
        return _v43 && _v43.videoId === _v63(_v7?.uri || "") && Object.keys(_v0).forEach(_v0 => {
          try {
            _v43.on(_v0, _v0[_v0]);
          } catch (_v0) {}
        }), () => {
          _v43 && _v43.off && Object.keys(_v0).forEach(_v0 => {
            try {
              _v43.off(_v0, _v0[_v0]);
            } catch (_v0) {}
          });
        };
      }, [_v43, _v41, _v56, _v7, _v6, _v21, _v20, _v19]);
      let _v58 = (0, _v7.useCallback)((_v0, _v1 = !1) => {
          _v47.current = _v1, _v6(_v0), _v1 || _v38(null);
          let _v2 = _v0.live && _v0.live.status,
            _v3 = _v43 && (_v43.duration > 0 || _v2 === _v48);
          _v17?.uri === _v0.uri && 4 === _v5 ? _v57(_v67.SWITCH_TO_LIVE_STREAM, "click", _v0) : _v57(_v67.PLAY_ARCHIVED_CLIP, "click", _v0), _v3 && _v0.uri === _v7?.uri && (_v43.paused ? _v43.play() : _v43.pause());
        }, [_v6, _v43, _v7?.uri, _v57, _v5, _v17?.uri]),
        _v59 = _v7?.uri === _v17?.uri,
        _v60 = !!(_v5 && 4 === _v5),
        _v61 = _v210(_v12, !!_v28?.user),
        _v62 = _v61 ? (0, _v5.jsx)(_v211, {
          audienceSpeakersContext: _v12,
          isViewerAuthenticated: !!_v28?.user,
          media: _v14,
          viewerName: _v30
        }) : null,
        _v63 = (0, _v5.jsxs)(_v5.Fragment, {
          children: [_v7 && _v19 && _v56 && (0, _v5.jsx)(_v285, {
            canSwitchClip: _v41,
            videos: _v56,
            eventData: _v3,
            activeClip: _v7,
            isPlaying: _v31,
            isHover: _v35,
            isLive: _v60,
            isToastDisplayed: _v45,
            onClipSwitch: _v58,
            onPlaylistExpandedChange: _v34,
            sendLiveSVVRPlayerBPEvent: _v57
          }), !_v59 && _v60 && !_v39 && (0, _v5.jsx)(_v295, {
            streamableClip: _v17,
            onClipSwitch: _v58,
            onDismiss: _v0 => {
              _v0.stopPropagation(), _v40(!0);
            }
          }), _v23 && !_v31 && !_v33 && (0, _v5.jsx)(_v311, {
            schedule: _v18
          })]
        }),
        _v64 = (0, _v5.jsx)(_v229, {
          style: {
            width: "100%"
          },
          children: (0, _v5.jsx)(_v231, {
            scaleup: !1,
            children: _v13 && _v11 ? (0, _v5.jsx)(_v312, {
              children: (0, _v5.jsx)(_v7.Suspense, {
                fallback: null,
                children: (0, _v5.jsx)(_v315, {
                  sessionId: _v11.eventId,
                  sessionCode: _v11.joinToken,
                  isAudioMuted: _v14.isAudioMuted,
                  isCameraOn: _v14.isCameraOn,
                  selectedAudioDeviceId: _v14.selectedAudioDeviceId,
                  selectedVideoDeviceId: _v14.selectedVideoDeviceId
                })
              })
            }) : (0, _v5.jsxs)(_v5.Fragment, {
              children: [(0, _v5.jsx)("div", {
                ref: _v55,
                className: "player js-player"
              }), _v37 && (0, _v5.jsx)(_v306, {
                video: _v37,
                author: _v25,
                onNextVideoToggled: _v58
              }), _v61 && _v12?.isRequestPending ? _v14.isCameraOn && _v14.videoStream ? (0, _v5.jsx)(_v313, {
                ref: _v15,
                autoPlay: !0,
                playsInline: !0,
                muted: !0
              }) : (0, _v5.jsx)(_v314, {
                children: (0, _v5.jsx)(_v179, {
                  name: _v30
                })
              }) : null]
            })
          })
        });
      return (0, _v5.jsx)(_v232, {
        ref: _v2,
        onMouseEnter: () => _v36(!0),
        onMouseLeave: () => _v36(!1),
        isMobile: _v48,
        isPortrait: _v49,
        roundedCorners: _v1,
        children: _v62 ? (0, _v5.jsxs)(_v120.Flex, {
          flexDirection: "column",
          alignSelf: "stretch",
          borderRadius: "md",
          backgroundColor: "fill-component",
          alignItems: "center",
          paddingX: (0, _v30.rem)(4),
          paddingTop: (0, _v30.rem)(4),
          children: [_v63, _v64, _v62]
        }) : (0, _v5.jsxs)(_v228, {
          children: [_v63, _v64]
        })
      });
    }),
    _v317 = ({
      isUnrated: _v0
    }) => {
      let _v1 = (0, _v7.useContext)(_v29.ViewerContext);
      return (0, _v5.jsx)(_v234, {
        children: (0, _v5.jsxs)(_v235, {
          children: [(0, _v5.jsx)(_v236, {
            children: _v0 ? _v36.notRatedContentOverlayCaption : _v36.matureContentOverlayCaption
          }), (0, _v5.jsx)(_v14.ThemeProvider, {
            theme: _v158.themes.light,
            children: (0, _v5.jsx)(_v160.LoginJoinModal, {
              type: "login",
              xsrft: _v1?.xsrft || "",
              onSuccess: _v65,
              children: _v0 => (0, _v5.jsx)(_v33.Button, {
                onClick: () => {
                  _v0(), _v171("login");
                },
                children: _v36.logInCaption
              })
            })
          })]
        })
      });
    },
    _v318 = _v14.default.div.withConfig({
      displayName: "PreviewBar__Container",
      componentId: "sc-f4816654-0"
    })`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  background: ${_v90.bokehTheme.colors.blue["500"]};
  color: ${_v90.bokehTheme.colors.white};
  padding: ${(0, _v30.rem)(8)};
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 3;
  @media screen and (max-width: ${(0, _v30.rem)(769)}) {
    flex-flow: column nowrap;
    padding: ${(0, _v30.rem)(14)};
  }
`,
    _v319 = (0, _v14.default)(_v33.Button).withConfig({
      displayName: "PreviewBar__EditButton",
      componentId: "sc-f4816654-1"
    })`
  text-decoration: none;
  margin-left: ${(0, _v30.rem)(10)};
  @media screen and (max-width: ${(0, _v30.rem)(769)}) {
    margin-left: 0;
    margin-top: ${(0, _v30.rem)(14)};
  }
`,
    _v320 = ({
      href: _v0
    }) => (0, _v5.jsxs)(_v318, {
      id: "preview-banner",
      children: [_v36.previewBarText, (0, _v5.jsx)(_v319, {
        format: "alternative",
        variant: "transparent",
        pill: !0,
        href: _v0,
        element: "a",
        children: _v36.previewBarButtonText
      })]
    });
  var _v321 = _v0.i(0);
  let _v322 = _v14.default.div.withConfig({
      displayName: "styles__BadgeContainer",
      componentId: "sc-83e7baae-0"
    })`
  display: flex;
  margin-left: ${(0, _v30.rem)(10)};
`,
    _v323 = ({
      display: _v0,
      promptRating: _v1 = () => {},
      isUnrated: _v2
    }) => _v0 ? (0, _v5.jsx)(_v322, {
      children: (0, _v5.jsx)(_v321.Badge, {
        onClick: _v1,
        format: _v2 ? "not-yet-rated" : "mature",
        size: "sm",
        children: _v2 ? _v36.ratingsBadgeLabel.unrated : _v36.ratingsBadgeLabel.mature
      })
    }) : null;
  var _v324 = _v0.i(0);
  let _v325 = "#141414",
    _v326 = "56.25%";
  function _v327({
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
      _v14 = _v0 => (0, _v5.jsx)(_v324.LeadCaptureView, {
        previewType: _v4,
        type: _v176.ENTITY_TYPE.EVENT,
        entityId: _v5,
        setLeadUuid: _v6,
        previewSize: _v0,
        onPreviewTypeChanged: _v7,
        onMount: _v8,
        onUnmount: _v9
      }),
      _v15 = (0, _v5.jsx)(_v120.Flex, {
        alignItems: "center",
        height: "100%",
        justifyContent: "center",
        width: "100%",
        children: (0, _v5.jsx)(_v156.Spinner, {})
      }),
      _v16 = _v4 === _v24.PREVIEW_TYPE.CONFIRMATION;
    if (_v0 && _v10 && !_v16) return (0, _v5.jsxs)(_v118.Box, {
      backgroundColor: _v325,
      bottom: 0,
      left: 0,
      overflow: "auto",
      position: "fixed",
      right: 0,
      top: 0,
      zIndex: 0,
      children: [(0, _v5.jsx)(_v121.IconButton, {
        "aria-label": _v36.closeRegistration,
        icon: (0, _v5.jsx)(_v124.CloseX, {
          color: "white"
        }),
        onClick: _v12,
        position: "absolute",
        right: (0, _v122.rem)(16),
        top: (0, _v122.rem)(16),
        variant: "tertiary",
        zIndex: 1
      }), _v2 ? _v15 : _v14()]
    });
    let _v17 = _v0 && !_v16;
    return _v13 = _v2 ? _v15 : _v17 ? (0, _v5.jsxs)(_v120.Flex, {
      alignItems: "center",
      direction: "column",
      gap: "xl",
      height: "100%",
      justifyContent: "center",
      padding: "2xl",
      textAlign: "center",
      width: "100%",
      children: [(0, _v5.jsxs)(_v120.Flex, {
        direction: "column",
        gap: "xs",
        children: [(0, _v5.jsx)(_v123.Text, {
          color: "white",
          variant: "heading-lg",
          children: _v36.registerToAttend
        }), _v3 ? (0, _v5.jsx)(_v123.Text, {
          color: "white",
          variant: "body-xl",
          children: _v3
        }) : null]
      }), (0, _v5.jsx)(_v118.Box, {
        maxWidth: (0, _v122.rem)(360),
        width: "100%",
        children: (0, _v5.jsx)(_v180.Button, {
          onClick: _v11,
          variant: "primary",
          width: "100%",
          children: _v36.register
        })
      })]
    }) : _v14({
      height: "100%",
      width: "100%"
    }), (0, _v5.jsx)(_v232, {
      isMobile: _v0,
      isPortrait: _v1,
      children: (0, _v5.jsx)(_v118.Box, {
        backgroundColor: _v325,
        borderRadius: "2xl",
        overflow: "hidden",
        paddingBottom: _v326,
        position: "relative",
        width: "100%",
        children: (0, _v5.jsx)(_v118.Box, {
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
  var _v328 = _v0.i(0),
    _v329 = _v0.i(0);
  let _v330 = ({
    eventId: _v0
  }) => {
    let {
        data: _v1
      } = (0, _v328.useGetLiveEventSpeakerProfiles)(() => _v0 ? {
        select: ["uri", "personProfile.id", "personProfile.name", "personProfile.role", "personProfile.description", "personProfile.pictures.baseLink"],
        where: {
          liveEventId: Number(_v0)
        }
      } : null, {
        revalidateOnFocus: !1
      }),
      _v2 = _v1?.data ?? [];
    return 0 === _v2.length ? null : (0, _v5.jsxs)(_v120.Flex, {
      flexDirection: "column",
      bgColor: "surface",
      borderRadius: "lg",
      children: [(0, _v5.jsx)(_v123.Text, {
        variant: "heading-lg",
        pl: "lg",
        pr: "md",
        py: "md",
        children: (0, _v35.translate)({
          singular: "Speakers",
          dictionary: {
            es: {
              singular: "Oradores"
            },
            "de-DE": {
              singular: "Redner"
            },
            "fr-FR": {
              singular: "Intervenants"
            },
            "ja-JP": {
              singular: "スピーカー"
            },
            "ko-KR": {
              singular: "발표자"
            },
            "pt-BR": {
              singular: "Palestrantes"
            },
            "zh-CN": {
              singular: "演讲人"
            }
          }
        })
      }), (0, _v5.jsx)(_v120.Flex, {
        px: "md",
        pb: "md",
        flexDirection: "row",
        gap: "md",
        overflow: "auto",
        children: _v2.map(_v0 => (0, _v5.jsx)(_v329.SpeakerProfileCard, {
          name: _v0.personProfile.name,
          role: _v0.personProfile.role,
          description: _v0.personProfile.description,
          thumbnailUrl: _v0.personProfile.pictures?.baseLink
        }, _v0.uri))
      })]
    });
  };
  function _v331({
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
      } = _v71(),
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
      {
        settings: _v18
      } = (0, _v21.useOrionSettings)(),
      _v19 = !!(_v17?.live?.chat?.roomId && _v4),
      _v20 = (0, _v87.useBreakpointValue)({
        base: !0,
        md: !1
      }) ?? !0,
      [_v21, _v22] = (0, _v7.useState)(!1),
      [_v23, _v24] = (0, _v7.useState)(!1),
      [_v25, _v26] = (0, _v7.useState)(!1),
      _v27 = _v19 && (_v20 && _v21 || !_v20 && _v23),
      _v28 = _v16 && "startTime" in _v16 ? _v16.startTime : void 0,
      _v29 = _v16 && "timeZone" in _v16 ? _v16.timeZone : void 0,
      _v30 = _v28 ? _v84.DateTime.fromISO(_v28, _v29 ? {
        zone: _v29
      } : {}) : null,
      _v31 = (0, _v85.useRouter)(),
      _v32 = (0, _v22.useViewer)(),
      _v33 = _v32?.user ?? null,
      _v34 = _v32?.ofcomQualifies,
      _v35 = !!_v12?.interactions?.edit,
      _v36 = (0, _v7.useRef)(null),
      _v37 = (0, _v7.useRef)(null),
      _v38 = (0, _v7.useMemo)(() => _v64(), []),
      _v39 = (0, _v115.useIsPortraitScreenOrientation)(),
      _v40 = (0, _v107.useAnalyticsEvent)(),
      _v41 = _v6?.contentRating,
      _v42 = !!_v41?.includes(_v46),
      _v43 = !!_v41?.includes(_v45),
      _v44 = !!_v41?.includes(_v47),
      _v45 = null === _v33 && _v34 && (_v14?.view === _v49 || _v14?.view === _v50 || _v14?.view === _v51) && !_v42,
      _v46 = _v6 ? `${window.location.origin}/event/${_v4}${_v6.uri}` : window.location.href,
      _v47 = _v1 ? _v24.PREVIEW_TYPE.CONFIRMATION : _v8,
      {
        registrant: _v48,
        liveStatus: {
          data: {
            status: _v49
          },
          initialDataLoaded: _v50
        }
      } = _v83(),
      _v51 = (_v48.data.isBlocked && _v48.called || !_v48.initialDataLoaded) && _v49 !== _v53,
      _v52 = _v49 === _v53 || _v49 === _v52 && _v1 || _v1 && [4, 2].includes(_v5),
      _v53 = _v31.asPath.split("?")[0].replace(/\/+$/, "").split("/").pop() ?? "",
      _v54 = Object.values(_v54).includes(_v53),
      _v55 = _v0 => {
        if (![_v24.PREVIEW_TYPE.FORM, _v24.PREVIEW_TYPE.LOGIN_SCREEN].includes(_v0)) return;
        let _v1 = _v31.asPath.split("?"),
          _v2 = _v1[0].replace(/\/$/, ""),
          _v3 = _v2.split("/").pop(),
          _v4 = void 0 !== _v1[1] ? `?${_v1[1]}` : "",
          _v5 = _v0 === _v24.PREVIEW_TYPE.FORM ? _v54.REGISTER : _v54.SIGNIN;
        if (Object.values(_v54).includes(_v3)) {
          let _v0 = _v2.replace(_v3, _v5);
          _v31.push(`${_v0}${_v4}`);
        } else _v31.push(`${_v2}/${_v5}${_v4}`);
      },
      _v56 = () => {
        let _v0 = _v31.asPath.split("?"),
          _v1 = _v0[0].replace(/\/$/, ""),
          _v2 = _v1.split("/").pop(),
          _v3 = void 0 !== _v0[1] ? `?${_v0[1]}` : "";
        if (Object.values(_v54).includes(_v2)) {
          let _v0 = _v1.replace(_v2, "");
          _v31.push(`${_v0}${_v3}`);
        }
      };
    return (0, _v7.useEffect)(() => {
      !_v48.loading && _v48.called && !_v48.data.isValidRegistrant && (_v0?.(""), _v2 && (0, _v114.deleteCookie)(_v2));
    }, [_v48, _v2]), (0, _v7.useEffect)(() => {
      _v33 && 5 === _v5 && _v86.GoogleTagManager.trackEvent("live_event_ended_for_viewer");
    }, [_v5, _v33]), (0, _v7.useEffect)(() => {
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
    }, []), (0, _v7.useEffect)(() => {
      _v40(_v168("workflow.visit_svv_recipient", 7, {
        customizations: null,
        referer: window.location.href,
        speed_controls_enabled: _v9.embed?.speed || null,
        live_event_id: _v4 || null,
        live_event_privacy: _v3.streamPrivacy?.view || null,
        live_event_embed_privacy: _v3.streamPrivacy?.embed || null,
        is_live_chat_enabled: _v13,
        is_mobile_web: _v38
      }));
    }, [_v13, _v9.embed?.speed, _v3.streamPrivacy?.embed, _v3.streamPrivacy?.view, _v4, _v38, _v40]), (0, _v5.jsxs)(_v5.Fragment, {
      children: [(0, _v5.jsx)(_v216, {}), (0, _v5.jsx)(_v240, {}), _v35 && !_v20 && (0, _v5.jsx)(_v320, {
        href: _v15
      }), (0, _v5.jsx)(_v217, {
        children: (0, _v5.jsxs)(_v218, {
          isMobile: _v20,
          children: [(0, _v5.jsx)(_v173, {}), (0, _v5.jsxs)(_v219, {
            ref: _v37,
            isMobile: _v20,
            isPortrait: _v39,
            children: [(0, _v5.jsxs)(_v220, {
              isMobile: _v20,
              isPortrait: _v39,
              isChatOpen: _v27 && !_v20,
              children: [(0, _v5.jsxs)(_v221, {
                isMobile: _v20,
                isPortrait: _v39,
                children: [(!_v52 || _v51) && _v7 ? (0, _v5.jsx)(_v327, {
                  isSmallScreen: _v20,
                  isPortrait: _v39,
                  isLoading: !_v50,
                  title: _v10,
                  previewType: _v47,
                  entityId: _v2,
                  setLeadUuid: _v0,
                  onPreviewTypeChanged: _v55,
                  onMount: () => {
                    _v55(_v47);
                  },
                  onUnmount: _v56,
                  isMobileFormOpen: _v25 || _v54,
                  onOpenMobileForm: () => _v26(!0),
                  onCloseMobileForm: () => {
                    _v26(!1), _v56();
                  }
                }) : _v45 ? (0, _v5.jsx)(_v317, {
                  isUnrated: _v43,
                  redirectUrl: _v46
                }) : (0, _v5.jsx)(_v316, {
                  ref: _v36,
                  fullscreenTargetRef: _v20 ? void 0 : _v37,
                  roundedCorners: !0
                }), (0, _v5.jsx)(_v233, {
                  isMobile: _v20,
                  isPortrait: _v39,
                  paddingEnabled: !1,
                  children: (0, _v5.jsxs)(_v222, {
                    isFullWidth: !1,
                    children: [_v30 && (0, _v5.jsxs)(_v223, {
                      children: [(0, _v5.jsxs)(_v225, {
                        children: [(0, _v5.jsx)(_v88.Calendar, {}), (0, _v5.jsx)(_v226, {
                          children: _v30.toFormat("LLL d")
                        })]
                      }), (0, _v5.jsxs)(_v225, {
                        children: [(0, _v5.jsx)(_v89.ClockThree, {}), (0, _v5.jsx)(_v226, {
                          children: _v30.toFormat("t ZZZZ")
                        })]
                      })]
                    }), (0, _v5.jsxs)(_v224, {
                      children: [(0, _v5.jsx)(_v227, {
                        content: _v10,
                        allowNewLines: !1,
                        contentEditable: !1,
                        shouldDisplayLinks: !1
                      }), (0, _v5.jsx)(_v323, {
                        display: !_v42 && _v14?.view === _v49,
                        isUnrated: _v43
                      }), _v11 && (0, _v5.jsx)(_v109, {
                        contentEditable: !1,
                        text: _v11
                      })]
                    }), _v44 && (0, _v5.jsxs)(_v237, {
                      children: [(0, _v5.jsx)(_v239, {}), (0, _v5.jsx)(_v238, {
                        children: _v36.thisVideoContainsAdvertisment
                      })]
                    })]
                  })
                }), _v20 && (0, _v5.jsx)(_v154, {
                  isChatAvailable: _v19,
                  isPanelExpanded: _v21,
                  isChatSheetView: !0,
                  onOpen: () => _v22(!0),
                  onClose: () => _v22(!1),
                  onPanelOpenChange: _v24
                })]
              }), _v18.enable_event_series_in_dev_features && _v4 ? (0, _v5.jsx)(_v330, {
                eventId: _v4
              }) : null, _v32 ? (0, _v5.jsx)(_v230, {
                children: (0, _v5.jsx)(_v116.EssentialFooter, {
                  ..._v32,
                  enableQuotaMenu: !1,
                  position: "absolute"
                })
              }) : null]
            }), !_v20 && (0, _v5.jsx)(_v154, {
              isChatAvailable: _v19,
              isPanelExpanded: !1,
              isChatSheetView: !1,
              onOpen: () => _v22(!0),
              onClose: () => _v22(!1),
              onPanelOpenChange: _v24
            })]
          })]
        })
      })]
    });
  }
  var _v114 = _v114,
    _v332 = _v0.i(0),
    _v333 = _v0.i(0),
    _v334 = _v0.i(0);
  let _v335 = _v14.default.div.withConfig({
      displayName: "EventInteractionToolsLegacy__InteractionToolsContainerDesktop",
      componentId: "sc-fcf4bbc4-0"
    })`
  z-index: 5;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  max-width: ${(0, _v30.rem)(420)};
  border-left: 1px solid ${_v332.core.color.stroke};
`,
    _v336 = _v14.default.div.withConfig({
      displayName: "EventInteractionToolsLegacy__InteractionToolsContainerMobile",
      componentId: "sc-fcf4bbc4-1"
    })`
  ${({
      isPortrait: _v0,
      marginLeft: _v1,
      isKeyboardOpened: _v2
    }) => _v0 ? _v14.css`
          position: fixed;
          right: 0;
          bottom: ${_v2 ? (0, _v30.rem)(-72) : 0};
          left: 0;
          z-index: 5;
          border-top: 1px solid ${_v332.core.color.stroke};
        ` : _v14.css`
          position: relative;
          z-index: 5;
          flex-shrink: 0;
          border-left: 1px solid ${_v332.core.color.stroke};
          margin-left: ${_v1};
          transition: margin-left 200ms ease;

          @media screen and (max-width: ${(0, _v30.rem)(660)}) {
            position: absolute;
            top: ${(0, _v30.rem)(64)};
            right: 0;
            bottom: 0;
            margin-left: 0;
          }
        `};
`,
    _v337 = (0, _v7.memo)(function ({
      isPortrait: _v0,
      playerRef: _v1
    }) {
      let [_v2, _v3] = (0, _v7.useState)(420),
        [_v4, _v5] = (0, _v7.useState)(!1),
        {
          eventId: _v6,
          eventHash: _v7,
          password: _v8,
          eventData: _v9
        } = _v71(),
        _v10 = function (_v0 = 300) {
          let [_v1, _v2] = (0, _v7.useState)(!1);
          return (0, _v7.useLayoutEffect)(() => {
            if (_v334.browserConfig.BROWSER?.isMobile && "visualViewport" in window) {
              let _v0 = (0, _v333.default)(() => {
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
        _v11 = (0, _v7.useMemo)(() => _v64(), []),
        _v12 = _v126.EComposerSessionType.LIVE_EVENT,
        _v13 = !!_v9?.hasRegistration,
        _v14 = (0, _v7.useMemo)(() => _v11 ? _v336 : _v335, [_v11]),
        _v15 = (0, _v7.useMemo)(() => (_v0 ? window.visualViewport.height : window.visualViewport.width) * .75, [_v0]),
        _v16 = (0, _v7.useMemo)(() => _v0 ? "0" : _v4 ? `-${(0, _v30.rem)(_v15 - _v2)}` : "0", [_v15, _v4, _v0, _v2]),
        _v17 = _v143(_v9?.streamableClip),
        _v18 = _v144(_v9?.streamableClip),
        _v19 = _v17 || _v18,
        _v20 = _v18 && !_v17,
        _v21 = (0, _v7.useCallback)(_v0 => {
          _v5(_v0);
        }, []);
      return (0, _v7.useEffect)(() => {
        if (_v0) {
          if (_v1 && _v1.current) {
            let {
                bottom: _v0
              } = _v1.current.getBoundingClientRect(),
              _v1 = window.visualViewport.height - _v0;
            _v3(_v1 < _v15 ? _v1 : _v15);
          }
        } else _v3(420 < _v15 ? 420 : _v15);
      }, [_v15, _v0, _v1]), (0, _v5.jsx)(_v14, {
        isPortrait: _v0,
        marginLeft: _v16,
        isKeyboardOpened: _v10,
        children: (0, _v5.jsx)(_v137.InteractionToolsRegistrantObserver, {
          isActive: _v13,
          sessionId: _v6,
          children: _v19 ? (0, _v5.jsx)(_v136.InteractionToolsEntry, {
            isCustomThemeEnabled: !0,
            isOnsite: !0,
            isAudienceSpeakerEnabled: !!_v9?.canEnableAudienceSpeaker,
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
    _v338 = (0, _v155.default)(async () => ({
      default: (await _v0.A(0)).AccountMenuWithModals
    }), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v339 = ({
      setTeamAccentColor: _v0
    }) => {
      let _v1 = (0, _v7.useContext)(_v29.ViewerContext),
        {
          eventData: _v2,
          shouldShowJoinCTA: _v3
        } = _v71(),
        _v4 = _v2?.user,
        _v5 = _v4?.account === _v164.AccountType.Basic,
        _v6 = _v4?.uri ? Number(_v4.uri.split("/").pop()) : 0,
        _v7 = (0, _v107.useAnalyticsEvent)(),
        {
          data: _v8,
          isLoading: _v9
        } = (0, _v157.useGetUserTeam)(() => _v6 ? {
          where: {
            userId: _v6
          },
          select: ["accentColor", "pictures.sizes.link", "teamName"]
        } : null);
      if ((0, _v7.useEffect)(() => {
        _v8?.accentColor && _v0 && _v0(_v8.accentColor);
      }, [_v8?.accentColor, _v0]), _v5) return (0, _v5.jsx)(_v341, {
        children: (0, _v5.jsx)(_v161.Header, {
          clickJoinAnalyticsEvent: () => _v7(_v170())
        })
      });
      let _v10 = _v8?.pictures?.sizes,
        _v11 = _v10?.length ? _v10.length - 1 : 0;
      return (0, _v5.jsxs)(_v340, {
        children: [(0, _v5.jsx)(_v163.HeaderLeftContent, {
          children: !_v9 && (0, _v5.jsx)(_v162.default, {
            teamLogoUrl: _v8?.pictures?.sizes?.[_v11]?.link,
            teamName: _v8?.teamName
          })
        }), (0, _v5.jsx)(_v163.HeaderRightContent, {
          children: _v1?.user ? (0, _v5.jsx)(_v7.Suspense, {
            fallback: (0, _v5.jsx)(_v156.Spinner, {
              size: "sm"
            }),
            children: (0, _v5.jsx)(_v338, {})
          }) : _v3 ? (0, _v5.jsx)(_v14.ThemeProvider, {
            theme: _v158.themes.light,
            children: (0, _v5.jsx)(_v160.LoginJoinModal, {
              type: "join",
              xsrft: _v1?.xsrft || "",
              onSuccess: _v65,
              children: _v0 => (0, _v5.jsx)(_v163.HeaderButton, {
                id: "join-vimeo",
                color: _v8?.accentColor,
                element: "button",
                onClick: () => {
                  _v0(), _v7(_v169()), _v171("join");
                },
                children: _v36.joinVimeoCaption
              })
            })
          }) : null
        })]
      });
    },
    _v340 = (0, _v14.default)(_v163.HeaderMinimalWrapper).withConfig({
      displayName: "EventRecipientHeaderLegacy__StyledHeaderContainer",
      componentId: "sc-caa53fa0-0"
    })`
  z-index: ${({
      isEditingMode: _v0
    }) => _v0 ? "auto" : "15"};
  background: ${({
      theme: _v0
    }) => (0, _v30.rgba)(_v0.content.background, .95)};
  color: ${({
      theme: _v0
    }) => _v0.additions.content.color};
  position: absolute;
  border-bottom: none;
`,
    _v341 = _v14.default.div.withConfig({
      displayName: "EventRecipientHeaderLegacy__AppShellNavContainer",
      componentId: "sc-caa53fa0-1"
    })`
  position: absolute;
  width: 100%;
  z-index: 3;
  @media screen and (min-width: ${(0, _v30.rem)(769)}) {
    /**
     * The LoginJoinModal is nested inside the Header component which has a z-index of 14.
     * We need to increase the z-index a bit so the player trackbar doesn't sit on top of the modal.
     */
    z-index: 15;
  }
`,
    _v342 = _v14.default.div.withConfig({
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
    _v343 = _v14.default.div.withConfig({
      displayName: "LayoutLegacy__PageContainerContent",
      componentId: "sc-a6aba083-1"
    })`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  min-height: 100vh;
  position: relative;
`,
    _v344 = _v14.default.div.withConfig({
      displayName: "LayoutLegacy__ContentContainer",
      componentId: "sc-a6aba083-2"
    })`
  display: flex;
  margin: ${(0, _v30.rem)(63)} 0 0 0;
  border-top: 1px solid ${_v332.core.color.stroke};
  justify-content: flex-end;
  overflow: auto;

  ${({
      isMobile: _v0,
      isPortrait: _v1
    }) => `
      flex-direction: ${_v0 && _v1 ? "column" : "row"};
      height: ${_v0 ? `calc(100vh - ${(0, _v30.rem)(63)})` : "100%"};
    `}
`,
    _v345 = _v14.default.div.withConfig({
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

      ${_v0 && !_v1 ? _v14.css`
              @media screen and (max-width: ${(0, _v30.rem)(660)}) {
                margin-right: ${(0, _v30.rem)(72)};
              }
            ` : ""}
    `}
`,
    _v346 = _v14.default.div.withConfig({
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
    }) => _v0 ? _v14.css`
          margin: 0;
          height: fit-content;
          max-width: ${_v1 ? "100vw" : `calc((100vh - ${(0, _v30.rem)(64)}) / 0.5625)`};
        ` : _v14.css`
          max-width: calc(100vw - ${(0, _v30.rem)(40)});
          margin: ${(0, _v30.rem)(20)} ${(0, _v30.rem)(12)} ${(0, _v30.rem)(20)};

          @media screen and (min-width: ${(0, _v30.rem)(769)}) {
            max-width: calc(100vw - ${(0, _v30.rem)(240)});
          }

          @media screen and (min-width: ${(0, _v30.rem)(0)}) {
            max-width: calc(100vw - ${(0, _v30.rem)(240)});
          }
        `};
`,
    _v347 = _v14.default.div.withConfig({
      displayName: "LayoutLegacy__TitleAndDescription",
      componentId: "sc-a6aba083-5"
    })`
  width: ${({
      isFullWidth: _v0
    }) => _v0 ? "100%" : `calc(100% - ${(0, _v30.rem)(80)})`};
  display: flex;
  flex-direction: column;
  gap: ${(0, _v30.rem)(4)};

  @media screen and (min-width: ${(0, _v30.rem)(769)}) {
    width: 100%;
    align-self: flex-start;
  }

  @media screen and (max-width: ${(0, _v30.rem)(480)}) {
    width: 100%;
    padding-bottom: ${(0, _v30.rem)(72)};
  }
`,
    _v348 = (0, _v14.default)(_v97).withConfig({
      displayName: "LayoutLegacy__Title",
      componentId: "sc-a6aba083-6"
    })`
  font-size: ${(0, _v30.rem)(32)};
  font-weight: 700;
  letter-spacing: ${(0, _v30.rem)(-.8)};
  padding: ${(0, _v30.rem)(5)};
  hyphens: auto;
  color: ${({
      theme: _v0
    }) => _v0.additions.content.color};
  background: ${({
      theme: _v0
    }) => _v0.content.background};
`;
  _v14.default.div.withConfig({
    displayName: "LayoutLegacy__BorderContainer",
    componentId: "sc-a6aba083-7"
  })`
  border: ${({
    theme: _v0
  }) => `${(0, _v30.rem)(1)} solid ${_v0.additions.content.border3}`};
`;
  let _v349 = _v14.default.div.withConfig({
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
  _v14.default.div.withConfig({
    displayName: "LayoutLegacy__ResponsiveContainer",
    componentId: "sc-a6aba083-9"
  })`
  min-width: ${(0, _v30.rem)(240)};
  width: 100%;
  overflow: hidden;
  height: fit-content;
  flex-shrink: 0;
  ${({
    isMobile: _v0,
    isPortrait: _v1
  }) => _v14.css`
    max-width: ${_v0 && !_v1 ? `calc((100vh - ${(0, _v30.rem)(64)}) / 0.5625)` : "calc(50vh / 0.5625)"};
    margin: 0 auto;

    @media screen and (min-width: ${(0, _v30.rem)(769)}) {
      max-width: calc(
        (100vh - ${(0, _v30.rem)(_v0 ? _v1 ? 264 : 64 : 264)}) /
          ${.5625}
      );
      padding-top: ${_v0 ? _v1 ? (0, _v30.rem)(8) : 0 : (0, _v30.rem)(8)};
    }
  `};

  ${_v349} {
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
  let _v350 = _v14.default.div.withConfig({
    displayName: "LayoutLegacy__EventInfoContainer",
    componentId: "sc-a6aba083-10"
  })`
  flex-direction: column;
  display: flex;
  margin-top: ${(0, _v30.rem)(10)};
  width: 100%;

  ${({
    paddingEnabled: _v0,
    isMobile: _v1,
    isPortrait: _v2
  }) => _v14.css`
    padding-bottom: ${_v0 ? (0, _v30.rem)(48) : 0};
    max-width: ${_v1 && !_v2 ? `calc((100vh - ${(0, _v30.rem)(64)}) / 0.5625)` : "calc(50vh / 0.5625)"};

    @media screen and (min-width: ${(0, _v30.rem)(769)}) {
      max-width: calc(
        (100vh - ${(0, _v30.rem)(_v1 ? _v2 ? 264 : 64 : 264)}) /
          ${.5625}
      );
    }
  `}
`;
  (0, _v14.default)(_v213.Notification).withConfig({
    displayName: "LayoutLegacy__Notification",
    componentId: "sc-a6aba083-11"
  })`
  background: ${({
    theme: _v0
  }) => _v0.element.bg2};
`, _v14.default.div.withConfig({
    displayName: "LayoutLegacy__MatureContainer",
    componentId: "sc-a6aba083-12"
  })`
  position: relative;
  background: black;
  width: 100%;
  min-width: ${(0, _v30.rem)(240)};
  max-width: calc(50vh / ${.5625});
  margin: 0 auto;
  height: 0;
  padding-bottom: ${56.25}%;

  @media screen and (min-width: ${(0, _v30.rem)(769)}) {
    width: calc((100vh - ${(0, _v30.rem)(264)}) / ${.5625});
    max-width: 100%;
    padding-top: ${(0, _v30.rem)(8)};
  }
`, _v14.default.div.withConfig({
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
    font-size: ${(0, _v30.rem)(16)};
  }
`, (0, _v14.default)(_v215.Paragraph).withConfig({
    displayName: "LayoutLegacy__Caption",
    componentId: "sc-a6aba083-14"
  })`
  font-size: ${(0, _v30.rem)(16)};
  margin-bottom: ${(0, _v30.rem)(25)};
  color: white;
`;
  let _v351 = _v14.default.div.withConfig({
      displayName: "LayoutLegacy__AdvertisingLabelWrapper",
      componentId: "sc-a6aba083-15"
    })`
  display: flex;
  align-items: center;
  padding: ${(0, _v30.rem)(5)};
`,
    _v352 = _v14.default.span.withConfig({
      displayName: "LayoutLegacy__AdvertisingLabel",
      componentId: "sc-a6aba083-16"
    })`
  padding-top: ${(0, _v30.rem)(1)};
  font-size: ${(0, _v30.rem)(12)};
  line-height: ${(0, _v30.rem)(15)};
  font-weight: 500;
  color: #496073;
`,
    _v353 = (0, _v14.default)(_v214.CircleInfoSmall).withConfig({
      displayName: "LayoutLegacy__InfoIcon",
      componentId: "sc-a6aba083-17"
    })`
  width: ${(0, _v30.rem)(24)};
  height: ${(0, _v30.rem)(24)};
`,
    _v354 = _v14.default.div.withConfig({
      displayName: "LayoutLegacy__LeadCaptureLoading",
      componentId: "sc-a6aba083-18"
    })`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
  function _v355({
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
      } = _v71(),
      {
        clipToPlay: _v9,
        title: _v10,
        streamDescription: _v11,
        metadata: _v12,
        chatEnabled: _v13,
        streamPrivacy: _v14,
        settingsLink: _v15
      } = _v3,
      _v16 = (0, _v85.useRouter)(),
      _v17 = (0, _v22.useViewer)(),
      _v18 = _v17?.user ?? null,
      _v19 = _v17?.ofcomQualifies,
      _v20 = !!_v12?.interactions?.edit,
      _v21 = (0, _v7.useRef)(null),
      _v22 = (0, _v7.useMemo)(() => _v64(), []),
      _v23 = (0, _v115.useIsPortraitScreenOrientation)(),
      _v24 = (0, _v107.useAnalyticsEvent)(),
      _v25 = _v6?.contentRating,
      _v26 = !!_v25?.includes(_v46),
      _v27 = !!_v25?.includes(_v45),
      _v28 = !!_v25?.includes(_v47),
      _v29 = null === _v18 && _v19 && (_v14?.view === _v49 || _v14?.view === _v50 || _v14?.view === _v51) && !_v26,
      _v30 = _v6 ? `${window.location.origin}/event/${_v4}${_v6.uri}` : window.location.href,
      _v31 = _v1 ? _v24.PREVIEW_TYPE.CONFIRMATION : _v8,
      {
        registrant: _v32,
        liveStatus: {
          data: {
            status: _v33
          },
          initialDataLoaded: _v34
        }
      } = _v83(),
      _v35 = (_v32.data.isBlocked && _v32.called || !_v32.initialDataLoaded) && _v33 !== _v53,
      _v36 = _v33 === _v53 || _v33 === _v52 && _v1 || _v1 && [4, 2].includes(_v5),
      _v37 = _v0 => {
        if (![_v24.PREVIEW_TYPE.FORM, _v24.PREVIEW_TYPE.LOGIN_SCREEN].includes(_v0)) return;
        let _v1 = _v16.asPath.split("?"),
          _v2 = _v1[0].replace(/\/$/, ""),
          _v3 = _v2.split("/").pop(),
          _v4 = void 0 !== _v1[1] ? `?${_v1[1]}` : "",
          _v5 = _v0 === _v24.PREVIEW_TYPE.FORM ? _v54.REGISTER : _v54.SIGNIN;
        if (Object.values(_v54).includes(_v3)) {
          let _v0 = _v2.replace(_v3, _v5);
          _v16.push(`${_v0}${_v4}`);
        } else _v16.push(`${_v2}/${_v5}${_v4}`);
      };
    return ((0, _v7.useEffect)(() => {
      !_v32.loading && _v32.called && !_v32.data.isValidRegistrant && (_v0?.(""), _v2 && (0, _v114.deleteCookie)(_v2));
    }, [_v32, _v2]), (0, _v7.useEffect)(() => {
      _v18 && 5 === _v5 && _v86.GoogleTagManager.trackEvent("live_event_ended_for_viewer");
    }, [_v5, _v18]), (0, _v7.useEffect)(() => {
      _v24(_v168("workflow.visit_svv_recipient", 7, {
        customizations: null,
        referer: window.location.href,
        speed_controls_enabled: _v9?.embed?.speed || null,
        live_event_id: _v4 || null,
        live_event_privacy: _v3.streamPrivacy?.view || null,
        live_event_embed_privacy: _v3.streamPrivacy?.embed || null,
        is_live_chat_enabled: _v13,
        is_mobile_web: _v22
      }));
    }, [_v13, _v9?.embed?.speed, _v3.streamPrivacy?.embed, _v3.streamPrivacy?.view, _v4, _v22, _v24]), (!_v36 || _v35) && _v7) ? (0, _v5.jsxs)(_v5.Fragment, {
      children: [_v20 && !_v22 && (0, _v5.jsx)(_v320, {
        href: _v15
      }), _v34 ? (0, _v5.jsx)(_v324.LeadCaptureView, {
        previewType: _v31,
        type: _v176.ENTITY_TYPE.EVENT,
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
          if (Object.values(_v54).includes(_v2)) {
            let _v0 = _v1.replace(_v2, "");
            _v16.push(`${_v0}${_v3}`);
          }
        }
      }) : (0, _v5.jsx)(_v354, {
        children: (0, _v5.jsx)(_v156.Spinner, {})
      })]
    }) : (0, _v5.jsxs)(_v5.Fragment, {
      children: [_v20 && !_v22 && (0, _v5.jsx)(_v320, {
        href: _v15
      }), (0, _v5.jsx)(_v342, {
        children: (0, _v5.jsxs)(_v343, {
          isMobile: _v22,
          children: [(0, _v5.jsx)(_v339, {}), (0, _v5.jsxs)(_v344, {
            isMobile: _v22,
            isPortrait: _v23,
            children: [(0, _v5.jsxs)(_v345, {
              isMobile: _v22,
              isPortrait: _v23,
              children: [(0, _v5.jsxs)(_v346, {
                isMobile: _v22,
                isPortrait: _v23,
                children: [_v29 ? (0, _v5.jsx)(_v317, {
                  isUnrated: _v27,
                  redirectUrl: _v30
                }) : (0, _v5.jsx)(_v316, {
                  ref: _v21
                }), (0, _v5.jsx)(_v350, {
                  isMobile: _v22,
                  isPortrait: _v23,
                  paddingEnabled: !1,
                  children: (0, _v5.jsxs)(_v347, {
                    isFullWidth: !1,
                    children: [(0, _v5.jsx)(_v348, {
                      content: _v10,
                      allowNewLines: !1,
                      contentEditable: !1,
                      shouldDisplayLinks: !1
                    }), (0, _v5.jsx)(_v323, {
                      display: !_v26 && _v14?.view === _v49,
                      isUnrated: _v27
                    }), _v11 && (0, _v5.jsx)(_v109, {
                      contentEditable: !1,
                      text: _v11
                    }), _v28 && (0, _v5.jsxs)(_v351, {
                      children: [(0, _v5.jsx)(_v353, {}), (0, _v5.jsx)(_v352, {
                        children: _v36.thisVideoContainsAdvertisment
                      })]
                    })]
                  })
                })]
              }), _v22 || !_v17 ? null : (0, _v5.jsx)(_v116.EssentialFooter, {
                ..._v17,
                enableQuotaMenu: !1,
                position: "absolute"
              })]
            }), (0, _v5.jsx)(_v337, {
              isPortrait: _v23,
              playerRef: _v21
            })]
          })]
        })
      })]
    });
  }
  let _v356 = _v0 => {
      let {
          eventId: _v1,
          eventHash: _v2
        } = _v0,
        _v3 = _v2 ? `${_v1}:${_v2}` : _v1,
        _v4 = (0, _v19.getLeadCaptureCookie)(_v3),
        [_v5, _v6] = (0, _v7.useState)(_v4),
        _v7 = (0, _v22.useViewer)(),
        _v8 = _v7?.teamUser?.ownerId ?? _v7?.user?.id,
        {
          settings: _v9
        } = (0, _v21.useOrionSettings)(),
        {
          capabilities: _v10,
          ready: _v11
        } = (0, _v18.useCapability)(["hasEventSeriesEnabled"], _v8);
      return ((0, _v7.useEffect)(() => {
        _v6(_v4);
      }, [_v4]), _v9.enable_single_event_new_ux || !_v8 || _v11) ? (0, _v5.jsx)(_v70, {
        ..._v0,
        leadUuid: _v5,
        children: (0, _v5.jsx)(_v82, {
          leadUuid: _v5,
          children: (0, _v5.jsx)(_v20.AudienceSpeakerPromotionProvider, {
            children: _v9.enable_single_event_new_ux || _v10.hasEventSeriesEnabled ? (0, _v5.jsx)(_v331, {
              setLeadUuid: _v6,
              leadUuid: _v5
            }) : (0, _v5.jsx)(_v355, {
              setLeadUuid: _v6,
              leadUuid: _v5
            })
          })
        })
      }) : null;
    },
    _v357 = _v0 => (0, _v5.jsx)(_v14.ThemeProvider, {
      theme: _v15.applyCustomThemeSVV,
      children: (0, _v5.jsx)(_v16.PlayerContextProvider, {
        type: _v17.PlayerType.VimeoPlayer,
        assetUrls: _v0.playerAssetUrls,
        children: (0, _v5.jsx)(_v356, {
          ..._v0
        })
      })
    });
  (0, _v8.withPageSetup)(async _v0 => {
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
      } = (_v1 = _v5.length, _v2 = _v5[0], _v3 = null, _v4 = "", 4 === _v1 && "videos" === _v5[1] ? (_v4 = _v55.EVENT_VIDEO_HASH, _v3 = _v5[3]) : 3 === _v1 ? "videos" === _v5[1] ? _v4 = _v55.EVENT_VIDEO : "register" === _v5[2] ? (_v4 = _v55.EVENT_HASH_REGISTER, _v3 = _v5[1]) : "signin" === _v5[2] && (_v4 = _v55.EVENT_HASH_SIGNIN, _v3 = _v5[1]) : 2 === _v1 ? "register" === _v5[1] ? _v4 = _v55.EVENT_REGISTER : "signin" === _v5[1] ? _v4 = _v55.EVENT_SIGNIN : (_v4 = _v55.EVENT_HASH, _v3 = _v5[1]) : 1 === _v1 && (_v4 = _v55.EVENT), {
        eventId: _v2,
        eventHash: _v3,
        path: _v4
      }),
      _v9 = _v0.req.headers.referer;
    try {
      let _v0 = await _v12({
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
      let _v0 = await (0, _v13.getLiveEvent)({
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
      _v3 = (0, _v7.useContext)(_v29.ViewerContext);
    return (0, _v9.useEnterpriseSiteRedirect)(_v3?.teamUser?.enterpriseSiteDomain), (0, _v5.jsxs)(_v5.Fragment, {
      children: [(0, _v5.jsx)(_v6.default, {
        children: _v1 ? (0, _v5.jsxs)(_v5.Fragment, {
          children: [(0, _v5.jsx)("title", {
            children: _v1.title || "Vimeo"
          }), (0, _v5.jsx)("meta", {
            name: "description",
            content: _v1.description
          }), (0, _v5.jsx)("meta", {
            property: "og:title",
            content: _v1.title
          }), (0, _v5.jsx)("meta", {
            property: "og:description",
            content: _v1.description
          }), _v1.ogImage && (0, _v5.jsxs)(_v5.Fragment, {
            children: [(0, _v5.jsx)("meta", {
              property: "og:image",
              content: _v1.ogImage
            }), (0, _v5.jsx)("meta", {
              property: "og:image:secure_url",
              content: _v1.ogImage
            }), (0, _v5.jsx)("meta", {
              property: "og:image:type",
              content: "image/jpeg"
            })]
          }), _v1.isUnlisted && (0, _v5.jsx)("meta", {
            name: "robots",
            content: "noindex, nofollow"
          }), (0, _v5.jsx)("link", {
            rel: "canonical",
            href: `https://vimeo.com/event/${_v2.eventId}`
          })]
        }) : (0, _v5.jsx)("title", {
          children: "Vimeo"
        })
      }), _v3 && _v2.playerAssetUrls ? (0, _v5.jsx)(_v357, {
        ..._v2
      }) : null]
    });
  }], 0);
}