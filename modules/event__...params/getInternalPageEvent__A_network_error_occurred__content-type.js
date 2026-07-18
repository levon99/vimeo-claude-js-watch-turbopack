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
    _v34 = _v0.i(0);
  let _v35 = {
      clipIndexText: (_v0, _v1) => (0, _v34.translate)({
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
      totalClipsCountText: _v0 => (0, _v34.translate)({
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
      embedPlaylistOwnerLabelText: _v0 => (0, _v34.translate)({
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
      eventNotStartedCaption: (0, _v34.translate)({
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
      chatToggleAriaLabel: (0, _v34.translate)({
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
      closeInteractionPanelAriaLabel: (0, _v34.translate)({
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
      chatPanelTitle: (0, _v34.translate)({
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
        daily: (0, _v34.translate)({
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
        weekdays: (0, _v34.translate)({
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
        weekends: (0, _v34.translate)({
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
      enterPasswordCaption: (0, _v34.translate)({
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
      incorrectPasswordCaption: (0, _v34.translate)({
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
      joinVimeoCaption: (0, _v34.translate)({
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
      logInCaption: (0, _v34.translate)({
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
      matureContentOverlayCaption: (0, _v34.translate)({
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
      nextClipLabelText: (0, _v34.translate)({
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
      notRatedContentOverlayCaption: (0, _v34.translate)({
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
      passwordPromptMessage: (0, _v34.translate)({
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
      registerToAttend: (0, _v34.translate)({
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
      register: (0, _v34.translate)({
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
      closeRegistration: (0, _v34.translate)({
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
      previewBarText: (0, _v34.translate)({
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
      previewBarButtonText: (0, _v34.translate)({
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
      openChatButtonText: (0, _v34.translate)({
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
      submit: (0, _v34.translate)({
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
      scheduledCaption: (0, _v34.translate)({
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
        unrated: (0, _v34.translate)({
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
        mature: (0, _v34.translate)({
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
      thisVideoContainsAdvertisment: (0, _v34.translate)({
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
      trackViewCountText: _v0 => (0, _v34.translate)({
        singular: "{COUNT} view",
        plural: "{COUNT} views",
        count: _v0 || 0,
        replacements: {
          COUNT: (0, _v34.humanize)(_v0 || 0)
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
      upNextHeaderText: (0, _v34.translate)({
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
      watchLiveCaption: (0, _v34.translate)({
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
      getMoreStorage: (0, _v34.translate)({
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
      upgradeNow: (0, _v34.translate)({
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
    _v36 = _v16.default.form.withConfig({
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
    _v37 = _v16.default.div.withConfig({
      displayName: "PasswordPrompt__Row",
      componentId: "sc-5edd1ae5-1"
    })`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-end;
  padding: 0 ${(0, _v29.rem)(50)};
  width: 100%;
`,
    _v38 = (0, _v16.default)(_v30.Input).withConfig({
      displayName: "PasswordPrompt__PasswordInput",
      componentId: "sc-5edd1ae5-2"
    })`
  min-width: ${(0, _v29.rem)(320)};
`,
    _v39 = (0, _v16.default)(_v32.Button).withConfig({
      displayName: "PasswordPrompt__SubmitButton",
      componentId: "sc-5edd1ae5-3"
    })`
  width: ${(0, _v29.rem)(320)};
  margin: ${(0, _v29.rem)(15)} 0 0;
  @media screen and (min-width: ${(0, _v29.rem)(768)}) {
    margin-left: ${(0, _v29.rem)(15)};
    width: auto;
  }
`,
    _v40 = (0, _v16.default)(_v31.Notice).withConfig({
      displayName: "PasswordPrompt__NoticeStyled",
      componentId: "sc-5edd1ae5-4"
    })`
  width: ${(0, _v29.rem)(320)};
  margin: ${(0, _v29.rem)(25)} 0 0;
  @media screen and (min-width: ${(0, _v29.rem)(768)}) {
    width: auto;
  }
`,
    _v41 = (0, _v16.default)(_v33.Header).attrs({
      size: "1"
    }).withConfig({
      displayName: "PasswordPrompt__PromptMessage",
      componentId: "sc-5edd1ae5-5"
    })`
  max-width: none;
`;
  function _v42({
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
    return (0, _v7.jsxs)(_v36, {
      onSubmit: _v10,
      children: [(0, _v7.jsx)(_v41, {
        children: _v35.passwordPromptMessage
      }), (0, _v7.jsxs)(_v37, {
        children: [(0, _v7.jsx)(_v38, {
          size: "md",
          type: "password",
          id: `${_v0}`,
          value: _v3,
          onChange: _v9,
          placeholder: _v35.enterPasswordCaption,
          "aria-label": _v35.enterPasswordCaption,
          disabled: _v7
        }), (0, _v7.jsx)(_v39, {
          disabled: _v7,
          size: "md",
          format: "primary",
          children: _v35.submit
        })]
      }), _v5 && (0, _v7.jsx)(_v40, {
        format: "negative",
        role: "alert",
        children: _v35.incorrectPasswordCaption
      })]
    });
  }
  var _v43 = _v0.i(0);
  let _v44 = "unrated",
    _v45 = "safe",
    _v46 = "advertisement",
    _v47 = "streaming",
    _v48 = "anybody",
    _v49 = "unlisted",
    _v50 = "password",
    _v51 = "started",
    _v52 = "ended",
    _v53 = {
      REGISTER: "register",
      SIGNIN: "signin"
    },
    _v54 = {
      EVENT_VIDEO_HASH: "/event/:eventId/videos/:clipId/:eventHash",
      EVENT_VIDEO: "/event/:eventId/videos/:clipId",
      EVENT_REGISTER: `/event/:eventId/${_v53.REGISTER}`,
      EVENT_SIGNIN: `/event/:eventId/${_v53.SIGNIN}`,
      EVENT_HASH_REGISTER: `/event/:eventId/:eventHash/${_v53.REGISTER}`,
      EVENT_HASH_SIGNIN: `/event/:eventId/:eventHash/${_v53.SIGNIN}`,
      EVENT_HASH: "/event/:eventId/:eventHash",
      EVENT: "/event/:eventId(\\d+)"
    },
    _v55 = (_v0, _v1 = !1, _v2 = "", _v3 = !1) => {
      let [_v4, {
          data: _v5,
          loading: _v6,
          called: _v7,
          error: _v8
        }] = (0, _v43.useGetLiveEventLazy)(),
        _v9 = _v5?.status;
      return (0, _v9.useEffect)(() => {
        let _v0;
        if (!_v1 || !_v0 || _v9 === _v52) return;
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
  var _v56 = _v0.i(0),
    _v57 = _v0.i(0);
  let _v58 = ["chat_enabled", "embed.autoplay", "embed.byline", "embed.loop", "embed.playlist", "embed.portrait", "embed.schedule", "embed.show_latest_archived_clip", "embed.title", "embed.logos", "user.uri", "user.name", "user.account", "title", "uri", "schedule", "stream_description", "lead_uuid", "settings_link", "metadata.connections.team_member", "metadata.interactions.edit", "clip_to_play.name", "clip_to_play.uri", "clip_to_play.embed.speed", "clip_to_play.config_url", "clip_to_play.pictures", "clip_to_play.live.status", "clip_to_play.live.chat.room_id", "clip_to_play.privacy.embed", "clip_to_play.privacy.view", "clip_to_play.user.account", "clip_to_play.user.uri", "clip_to_play.app.uri", "clip_to_play.password", "clip_to_play.content_rating", "streamable_clip.name", "streamable_clip.uri", "streamable_clip.config_url", "streamable_clip.pictures", "streamable_clip.live.status", "streamable_clip.live.chat.room_id", "streamable_clip.content_rating", "stream_privacy.embed", "stream_privacy.view", "has_registration", "has_forced_lead_capture_form"],
    _v59 = ["items", "content_rating", "uri", "name", "config_url", "duration", "stats.plays", "pictures.sizes.link", "live.status"],
    _v60 = ["accent_color", "pictures.sizes.link", "team_name"];
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
  let _v69 = (0, _v9.createContext)({}),
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
        _v8 = (0, _v9.useMemo)(() => {
          switch (_v2) {
            case _v54.EVENT_SIGNIN:
            case _v54.EVENT_HASH_SIGNIN:
              return _v23.PREVIEW_TYPE.LOGIN_SCREEN;
            case _v54.EVENT_REGISTER:
            case _v54.EVENT_HASH_REGISTER:
            default:
              return _v23.PREVIEW_TYPE.FORM;
          }
        }, [_v2]),
        [_v9, _v10] = (0, _v9.useState)(0),
        [_v11, _v12] = (0, _v9.useState)(""),
        [_v13, _v14] = (0, _v9.useState)(null),
        _v15 = (0, _v9.useContext)(_v28.ViewerContext),
        {
          eventData: _v16,
          errorData: _v17,
          revalidate: _v18
        } = function (_v0, _v1, _v2, _v3, _v4, _v5) {
          let _v6 = (0, _v9.useMemo)(() => ({
              variables: {
                fields: _v58,
                password: _v2,
                clip_to_play_id: _v63(_v1?.uri || "").toString(),
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
            }] = (0, _v56.useLazyQuery)(`/live_events/${_v0}`, _v6),
            _v13 = _v5.hasNewLeadCaptureFlow || !(0, _v22.isErrorResponse)(_v12) && _v12?.hasRegistration,
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
            _v12 && !(0, _v22.isErrorResponse)(_v12) && _v1?.uri !== _v12.clipToPlay?.uri && (_v13 ? _v5.leadUuid === _v12.leadUuid && _v4(_v12.clipToPlay) : _v4(_v12.clipToPlay));
          }, [_v16, _v5.leadUuid, _v13]), {
            eventData: (0, _v22.isErrorResponse)(_v12) ? null : _v12,
            errorData: (0, _v22.isErrorResponse)(_v12) ? _v12 : null,
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
                fields: _v59,
                password: _v2
              },
              ignoreCache: !0
            }), [_v2]),
            _v5 = (0, _v9.useRef)(_v1?.uri),
            _v6 = (0, _v9.useRef)(_v2),
            _v7 = (0, _v9.useRef)(_v3),
            [_v8, {
              data: _v9
            }] = (0, _v56.useLazyQuery)(`/live_events/${_v0}/videos`, _v4);
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
            }] = (0, _v56.useLazyQuery)(`${_v0}/ingest/status`);
          (0, _v9.useEffect)(() => (_v0 && _v4(!0), () => {
            _v4(!1);
          }), [_v0]), (0, _v9.useEffect)(() => {
            _v6?.ingestStatus === 5 && _v4(!1);
          }, [_v6?.ingestStatus]);
          let _v7 = !!(_v0 && _v3);
          return (0, _v57.usePoll)(() => _v5({
            ignoreCache: !0
          }), _v7, {
            interval: _v2
          }), {
            ingestData: _v6
          };
        }(_v16?.streamableClip?.uri),
        {
          status: _v22
        } = _v55(_v7, _v19, _v11, !0);
      !_v13 && _v16?.clipToPlay && (_v19 && _v22 !== _v52 ? _v6 === _v16?.leadUuid && _v14(_v16.clipToPlay) : _v14(_v16.clipToPlay)), (0, _v9.useEffect)(() => {
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
            return _v66(_v0, _v1, _v9, !!_v2);
          }
        }, [_v16?.streamableClip, _v16?.clipToPlay, _v16?.schedule, _v9]);
      if (_v17) switch (_v17.errorCode) {
        case 0:
          return (0, _v7.jsx)(_v42, {
            eventId: _v0,
            xsrft: _v15?.xsrft || "",
            onSuccess: _v12
          });
        case 0:
          if (!_v15?.user) return (0, _v7.jsx)(_v24.BrandedLogin, {
            metaUrl: `/sso/live_event/${_v0}/meta`,
            errorConstructor: _v22.UnauthorizedError
          });
          return (0, _v7.jsx)(_v25.ErrorPage, {
            error: new _v22.UnauthorizedError(_v17.error)
          });
        default:
          return (0, _v7.jsx)(_v25.ErrorPage, {
            error: new _v22.ResourceNotFoundError(_v17.error)
          });
      }
      if (!_v15 || !_v16 || !_v13 && !_v19) return (0, _v7.jsx)(_v26.default, {});
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
      return (0, _v7.jsx)(_v27.AnalyticsEventProvider, {
        eventData: _v26,
        children: (0, _v7.jsx)(_v69.Provider, {
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
    _v71 = () => (0, _v9.useContext)(_v69);
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
    return [(0, _v9.useCallback)(async _v0 => {
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
    _v81 = (0, _v9.createContext)(_v80),
    _v82 = ({
      leadUuid: _v0,
      ..._v1
    }) => {
      let [_v2, _v3] = (0, _v9.useState)(_v80),
        {
          password: _v4,
          apiEventId: _v5,
          hasNewLeadCaptureFlow: _v6,
          revalidate: _v7
        } = _v71(),
        _v8 = _v55(_v5, _v6, _v4),
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
          return (0, _v57.usePoll)(_v11, _v1 !== _v52, {
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
        _v10 = (0, _v72.usePrevious)(_v9.data.isBlocked);
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
      }, [_v7, _v9, _v10]), (0, _v7.jsx)(_v81.Provider, {
        value: _v2,
        children: _v1.children
      });
    },
    _v83 = () => {
      let _v0 = (0, _v9.useContext)(_v81);
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
          _v0 && _v96(_v0);
        },
        _v22 = {
          Enter: _v0 => {
            _v4 && (!_v4 || _v0.shiftKey) || (_v0.preventDefault(), _v12.current?.blur());
          }
        },
        _v23 = (!_v2 || !(_v15.length > _v2)) && (!_v3 || _v3(_v15));
      return (0, _v7.jsxs)(_v105, {
        children: [!_v23 && (0, _v7.jsx)(_v100, {}), (0, _v7.jsx)(_v104, {
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
          children: _v13 ? _v17 : _v5 ? (0, _v7.jsx)(_v93.default, {
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
        }), _v2 && _v15.length > _v2 && (0, _v7.jsx)(_v99, {
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
    }) => (0, _v7.jsx)(_v102, {
      className: _v0,
      ..._v4,
      children: _v3 ? (0, _v7.jsx)(_v93.default, {
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
    }) => _v0 ? (0, _v7.jsx)(_v94, {
      ..._v1
    }) : (0, _v7.jsx)(_v95, {
      ..._v1
    }),
    _v98 = _v90.bokehTheme.colors.red["500"],
    _v99 = (0, _v16.default)(_v92.Text).withConfig({
      displayName: "EditableText__CharacterCount",
      componentId: "sc-7f56c0ca-0"
    })`
  position: absolute;
  bottom: ${(0, _v29.rem)(0)};
  right: ${(0, _v29.rem)(7)};
  font-size: ${(0, _v29.rem)(12)};
  letter-spacing: ${(0, _v29.rem)(-.4)};
  color: ${_v98};
`,
    _v100 = (0, _v16.default)(_v91.CircleInfo).withConfig({
      displayName: "EditableText__ErrorIcon",
      componentId: "sc-7f56c0ca-1"
    })`
  left: ${(0, _v29.rem)(-30)};
  position: absolute;
  height: ${(0, _v29.rem)(20)};
  width: ${(0, _v29.rem)(20)};

  * {
    fill: ${_v98};
  }
`,
    _v101 = _v16.css`
  border: ${(0, _v29.rem)(1)} solid transparent;
  outline: none;
  resize: none;
  padding: ${(0, _v29.rem)(5)};
  border-radius: ${(0, _v29.rem)(4)};
  -ms-overflow-style: none;
  white-space: pre-wrap;
`,
    _v102 = (0, _v16.default)(_v92.Text).withConfig({
      displayName: "EditableText__JustText",
      componentId: "sc-7f56c0ca-2"
    })`
  ${_v101};
  display: block;
  line-height: normal;
  overflow-wrap: break-word;
  -webkit-line-break: after-white-space;
`,
    _v103 = _v16.css`
  border: ${(0, _v29.rem)(1)} solid ${_v98};
`,
    _v104 = _v16.default.div.withConfig({
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
    _v105 = _v16.default.div.withConfig({
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
      let _v6 = _v2 || (0, _v34.translate)({
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
        _v16 = (0, _v107.useAnalyticsEvent)();
      return (0, _v9.useEffect)(() => {
        _v9?.current && _v9.current.offsetHeight > 72 ? _v15(!0) : _v15(!1);
      }, [_v10]), (0, _v7.jsxs)(_v110, {
        children: [(0, _v7.jsx)(_v112, {
          ref: _v9,
          collapsed: _v14 && _v12,
          maxCollapsedHeight: 70,
          onClick: () => {
            _v11(_v3);
          },
          children: (0, _v7.jsx)(_v111, {
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
          children: [_v12 ? null : _v4, (0, _v7.jsx)(_v113, {
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
            children: _v12 ? (0, _v34.translate)({
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
            }) : (0, _v34.translate)({
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
    _v110 = _v16.default.div.withConfig({
      displayName: "Description__Container",
      componentId: "sc-b2854a53-0"
    })`
  display: inline-block;
  width: 100%;
`,
    _v111 = (0, _v16.default)(_v97).withConfig({
      displayName: "Description__StyledEditableText",
      componentId: "sc-b2854a53-1"
    })`
  font-size: ${(0, _v29.rem)(16)};
  line-height: ${(0, _v29.rem)(20)};
  font-weight: 400;
  letter-spacing: 0.01rem;
  padding: ${(0, _v29.rem)(5)};
  border-radius: ${(0, _v29.rem)(4)};
  background: ${({
      theme: _v0
    }) => _v0.content.background};
`,
    _v112 = _v16.default.div.withConfig({
      displayName: "Description__TextContainer",
      componentId: "sc-b2854a53-2"
    })`
  position: relative;
  border: ${(0, _v29.rem)(1)} solid transparent;
  white-space: pre-wrap;
  overflow: hidden;
  &:hover ${_v111} {
    &::after {
      background: unset;
    }
  }
  border-radius: ${(0, _v29.rem)(4)};
  ${({
      collapsed: _v0,
      maxCollapsedHeight: _v1,
      theme: _v2
    }) => _v0 && `
    max-height: ${(0, _v29.rem)(_v1)};
    &::after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      content: '';
      background: linear-gradient(${(0, _v29.rgba)(_v2.content.background, 0)}, ${_v2.content.background});
      pointer-events: none;
    }
    `}
`,
    _v113 = _v16.default.span.withConfig({
      displayName: "Description__CollapseToggle",
      componentId: "sc-b2854a53-3"
    })`
  font-size: ${(0, _v29.rem)(14)};
  cursor: pointer;
  margin-left: ${(0, _v29.rem)(5)};
  margin-bottom: ${(0, _v29.rem)(5)};
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
    _v132 = _v0.i(0);
  let _v133 = (0, _v9.memo)(function ({
    id: _v0 = (0, _v130.createInteractionDomName)("detached-sidebar"),
    isHorizontal: _v1 = !1,
    isPanelOpen: _v2 = !0,
    onItemClick: _v3,
    onClosePanel: _v4,
    onActiveModuleChange: _v5
  }) {
    let _v6 = (0, _v126.useScope)(),
      _v7 = (0, _v9.useRef)(!1),
      [_v8, _v9] = (0, _v9.useState)(null),
      {
        items: _v10
      } = (0, _v132.useInteractionSidebarItems)(_v8),
      _v11 = (0, _v9.useCallback)(_v0 => {
        _v6.emitSignal({
          type: _v131.ELiveSignal.LIVE_PANEL_TAB_CHANGE_REQUEST,
          data: _v0
        }), _v9(_v0);
      }, [_v6]);
    (0, _v9.useEffect)(() => {
      if (!_v10.length) return;
      let _v0 = _v10[0].id,
        _v1 = !!(_v8 && _v10.some(_v0 => _v0.id === _v8));
      if (!_v7.current) {
        _v8 !== _v0 && _v11(_v0);
        return;
      }
      _v1 || _v11(_v0);
    }, [_v8, _v10, _v11]), (0, _v9.useEffect)(() => _v6.subscribeToSignals(_v0 => {
      _v0.type === _v131.ELiveSignal.LIVE_PANEL_TAB_CHANGE_REQUEST && _v9(_v0.data);
    }), [_v6]), (0, _v9.useEffect)(() => {
      if (!_v8 || !_v10.length) return;
      let _v0 = _v10.find(_v0 => _v0.id === _v8);
      _v5?.(_v8, _v0?.header ? String(_v0.header) : void 0);
    }, [_v8, _v10, _v5]);
    let _v12 = (0, _v9.useCallback)(_v0 => {
      (_v7.current = !0, _v0 === _v8 && _v2) ? _v4?.() : (_v11(_v0), _v3?.(_v0));
    }, [_v8, _v2, _v4, _v3, _v11]);
    return _v10.length ? _v1 ? (0, _v7.jsx)(_v121.Flex, {
      id: _v0,
      "data-id": "event-interaction-sidebar",
      flexDirection: "row",
      width: "100%",
      borderTopWidth: "0.5px",
      borderTopStyle: "solid",
      borderTopColor: "stroke",
      paddingTop: 3,
      children: _v10.map(_v0 => {
        let _v1 = _v0.id,
          _v2 = _v2 && _v8 === _v1;
        return (0, _v7.jsxs)(_v121.Flex, {
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
          cursor: "pointer",
          onClick: () => _v12(_v1),
          children: [(0, _v7.jsx)(_v129.IconButton, {
            "aria-label": String(_v0.label ?? _v1),
            variant: "secondary",
            size: "md",
            borderRadius: "round",
            icon: (0, _v9.isValidElement)(_v0.icon) ? _v0.icon : void 0,
            isActive: _v2,
            onClick: _v0 => {
              _v0.stopPropagation(), _v12(_v1);
            }
          }), (0, _v7.jsx)(_v128.FormLabel, {
            textAlign: "center",
            textStyle: "body-xs",
            color: "text-tertiary",
            marginBottom: "0",
            children: _v0.label
          })]
        }, _v1);
      })
    }) : (0, _v7.jsx)(_v121.Flex, {
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
      children: _v10.map(_v0 => {
        let _v1 = _v0.id,
          _v2 = _v2 && _v8 === _v1;
        return (0, _v7.jsxs)(_v127.Center, {
          flexDirection: "column",
          children: [(0, _v7.jsx)(_v129.IconButton, {
            "aria-label": String(_v0.label ?? _v1),
            variant: "secondary",
            size: "lg",
            borderRadius: "round",
            icon: (0, _v9.isValidElement)(_v0.icon) ? _v0.icon : void 0,
            isActive: _v2,
            onClick: () => {
              _v12(_v1);
            }
          }), (0, _v7.jsx)(_v128.FormLabel, {
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
  var _v134 = _v0.i(0),
    _v135 = _v0.i(0),
    _v136 = _v0.i(0);
  let _v137 = {
      display: "flex",
      flexDirection: "row",
      alignItems: "stretch",
      flexShrink: 0
    },
    _v138 = {
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
    _v139 = (0, _v9.memo)(function ({
      application: _v0,
      isChatSheetView: _v1,
      isPanelExpanded: _v2,
      onOpen: _v3,
      onClose: _v4,
      onPanelOpenChange: _v5
    }) {
      let [_v6, _v7] = (0, _v9.useState)(!1),
        [_v8, _v9] = (0, _v9.useState)(""),
        {
          isJoined: _v10,
          isRoomInfoLoading: _v11
        } = function () {
          let {
            roomInfo: {
              isLoading: _v0
            },
            roomUser: {
              value: _v1
            }
          } = (0, _v126.useManager)(_v136.InteractionSessionManager);
          return {
            isJoined: !!_v1,
            isRoomInfoLoading: !!_v0
          };
        }(),
        _v12 = !_v10 && !_v11,
        _v13 = _v1 ? _v2 : _v6,
        _v14 = (0, _v9.useRef)(!1);
      _v12 && (_v14.current = !0);
      let _v15 = (0, _v9.useCallback)(() => {
          _v1 ? _v3?.() : (_v7(!0), _v5?.(!0));
        }, [_v1, _v3, _v5]),
        _v16 = (0, _v9.useCallback)(() => {
          _v1 ? _v4?.() : (_v7(!1), _v5?.(!1));
        }, [_v1, _v4, _v5]),
        _v17 = (0, _v9.useCallback)((_v0, _v1) => {
          _v1 && _v9(_v1);
        }, []),
        _v18 = (0, _v9.useRef)(_v10);
      (0, _v9.useEffect)(() => {
        !_v18.current && _v10 && _v14.current && (_v1 ? _v3?.() : (_v7(!0), _v5?.(!0)), _v14.current = !1), _v18.current = _v10;
      }, [_v10, _v1, _v3, _v5]);
      let _v19 = (0, _v9.useCallback)(() => (0, _v7.jsxs)(_v121.Flex, {
          alignItems: "center",
          justifyContent: "space-between",
          flexShrink: 0,
          padding: `${_v90.bokehTheme.space.md} ${_v90.bokehTheme.space.md} ${_v90.bokehTheme.space[3]}`,
          children: [(0, _v7.jsx)(_v123.Text, {
            variant: "heading-sm",
            color: "text-primary",
            children: _v8
          }), (0, _v7.jsx)(_v120.CloseButton, {
            "aria-label": _v35.closeInteractionPanelAriaLabel,
            onClick: _v16
          })]
        }), [_v8, _v16]),
        _v20 = (0, _v9.useCallback)(_v0 => (0, _v7.jsx)(_v119.Box, {
          sx: {
            position: "relative",
            flex: "1 1 auto",
            minHeight: 0,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            ..._v138,
            "& > div": {
              flex: "1 1 auto",
              minHeight: 0,
              width: "100%",
              height: "100%"
            }
          },
          children: _v0
        }), []),
        _v21 = (0, _v9.useCallback)((_v0, _v1, _v2 = !0) => (0, _v7.jsxs)(_v119.Box, {
          display: _v2 ? "flex" : "none",
          flexDirection: "column",
          flex: "1 1 auto",
          minWidth: 0,
          width: _v1 ? "100%" : (0, _v122.rem)(272),
          height: "100%",
          overflow: "hidden",
          backgroundColor: "var(--vimeo-colors-surface)",
          border: "0.5px solid var(--vimeo-colors-stroke)",
          borderRadius: _v1 ? "xl" : "lg",
          boxShadow: _v1 ? "0 8px 40px var(--vimeo-colors-modal-shadow)" : void 0,
          children: [_v8 ? _v19() : null, _v20(_v0)]
        }), [_v8, _v20, _v19]),
        _v22 = (0, _v9.useCallback)(_v0 => _v1 ? (0, _v7.jsx)(_v119.Box, {
          display: "flex",
          flexDirection: "column",
          width: "100%",
          minHeight: (0, _v122.rem)(320),
          overflow: "hidden",
          backgroundColor: "var(--vimeo-colors-surface)",
          border: "0.5px solid var(--vimeo-colors-stroke)",
          borderRadius: "xl",
          children: _v20(_v0)
        }) : (0, _v7.jsx)(_v121.Flex, {
          sx: {
            ..._v137,
            zIndex: 5,
            position: "sticky",
            top: (0, _v122.rem)(80),
            alignSelf: "flex-start",
            width: (0, _v122.rem)(272),
            height: `calc(100vh - ${(0, _v122.rem)(96)})`
          },
          children: _v21(_v0, !1, !0)
        }), [_v1, _v20, _v21]);
      if (!_v10) return _v12 ? (0, _v7.jsx)(_v7.Fragment, {
        children: _v22(_v0)
      }) : null;
      let _v23 = (0, _v7.jsx)(_v133, {
        isPanelOpen: _v13,
        onItemClick: _v15,
        onClosePanel: _v16,
        onActiveModuleChange: _v17
      });
      if (_v1) {
        let _v0 = "u" > typeof document ? (0, _v118.createPortal)((0, _v7.jsxs)(_v7.Fragment, {
          children: [_v13 && (0, _v7.jsx)(_v119.Box, {
            as: "button",
            type: "button",
            "aria-label": _v35.closeInteractionPanelAriaLabel,
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
          }), (0, _v7.jsxs)(_v119.Box, {
            sx: {
              position: "fixed",
              left: _v90.bokehTheme.space[3],
              right: _v90.bokehTheme.space[3],
              bottom: _v90.bokehTheme.space[3],
              height: "60vh",
              zIndex: 201,
              opacity: +!!_v13,
              pointerEvents: _v13 ? "auto" : "none",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              backgroundColor: "var(--vimeo-colors-surface)",
              border: "0.5px solid var(--vimeo-colors-stroke)",
              borderRadius: "xl",
              boxShadow: "0 8px 40px var(--vimeo-colors-modal-shadow)"
            },
            children: [_v8 ? _v19() : null, _v20(_v0)]
          })]
        }), document.body) : null;
        return (0, _v7.jsxs)(_v7.Fragment, {
          children: [(0, _v7.jsx)(_v133, {
            isHorizontal: !0,
            isPanelOpen: _v13,
            onItemClick: _v15,
            onClosePanel: _v16,
            onActiveModuleChange: _v17
          }), _v0]
        });
      }
      return (0, _v7.jsxs)(_v121.Flex, {
        sx: {
          ..._v137,
          zIndex: 5,
          position: "sticky",
          top: (0, _v122.rem)(80),
          alignSelf: "flex-start",
          width: (0, _v122.rem)(_v13 ? 352 : 80),
          height: `calc(100vh - ${(0, _v122.rem)(96)})`
        },
        children: [_v21(_v0, !1, _v13), _v23]
      });
    }),
    _v140 = (0, _v9.memo)(function ({
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
        _v10 = _v125.EComposerSessionType.LIVE_EVENT,
        _v11 = !!_v9?.hasRegistration,
        _v12 = (0, _v9.useMemo)(() => {
          let _v0 = window.innerHeight - 96;
          return _v2 ? .6 * window.innerHeight : _v0;
        }, [_v2]),
        _v13 = (0, _v9.useCallback)(() => {}, []),
        _v14 = (0, _v9.useCallback)(_v0 => (0, _v7.jsx)(_v139, {
          application: _v0,
          isChatSheetView: _v2,
          isPanelExpanded: _v1,
          onOpen: _v3,
          onClose: _v4,
          onPanelOpenChange: _v5
        }), [_v2, _v1, _v3, _v4, _v5]);
      return _v0 ? (0, _v7.jsx)(_v135.InteractionToolsRegistrantObserver, {
        isActive: _v11,
        sessionId: _v6,
        children: (0, _v7.jsx)(_v134.InteractionToolsEntry, {
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
          toolbarAttachPosition: _v124.ESidebarAttach.TOP,
          toolbarPanelIsFluid: !0,
          toolbarPanelMaxSize: _v12,
          toolbarPanelOnToggleExtend: _v13,
          renderApplicationShell: _v14
        })
      }) : null;
    });
  var _v141 = _v0.i(0),
    _v142 = _v0.i(0),
    _v143 = _v0.i(0),
    _v144 = _v0.i(0),
    _v145 = _v0.i(0),
    _v146 = _v0.i(0),
    _v147 = _v0.i(0),
    _v148 = _v0.i(0),
    _v149 = _v0.i(0),
    _v150 = _v0.i(0),
    _v151 = _v0.i(0);
  (_v3 = {}).VISIT_SVV_RECIPIENT = "workflow.visit_svv_recipient", _v3.CLICK_JOIN_VIMEO = "workflow.click_join_vimeo", _v3.LIVE_SVVR_PLAYER = "vimeo.live_svvr_player", (_v4 = {}).SVV_RECIPIENT_HEADER = "svv recipient header", _v4.BASIC_HEADER = "basic header";
  let _v152 = {
      ..._v106.nullVideoContextData,
      ..._v106.nullTeamContext,
      ..._v106.nullUploadContextData
    },
    _v153 = (_v0, _v1, _v2 = {}, _v3 = _v152) => ({
      eventName: _v0,
      version: _v1,
      fields: _v2,
      defaultEventFields: _v3
    }),
    _v154 = () => _v153("workflow.click_join_vimeo", 3, {
      location: "svv recipient header"
    }),
    _v155 = () => _v153("workflow.click_join_vimeo", 3, {
      location: "basic header"
    }),
    _v156 = _v0 => {
      _v150.BigPictureClient.sendEvent(new _v150.Event("vimeo.auth_flow_action", 11, {
        event_name: `click_${_v0}`,
        auth_type: _v0,
        action_type: "trigger",
        is_final_action: !1,
        location: "join" === _v0 ? "svv_recipient_live_header" : "svv_recipient_live_player",
        copy: "join" === _v0 ? "join_vimeo" : "log_in",
        target: null,
        target_path: null,
        feature: "reg_flow",
        ...(0, _v151.getCommonAttributesV2)(),
        interface_version: null,
        interface_type: null
      }));
    },
    _v157 = (0, _v141.default)(async () => ({
      default: (await _v0.A(0)).AccountMenuWithModals
    }), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v158 = ({
      setTeamAccentColor: _v0
    }) => {
      let _v1 = (0, _v9.useContext)(_v28.ViewerContext),
        {
          eventData: _v2,
          shouldShowJoinCTA: _v3
        } = _v71(),
        {
          user: _v4
        } = _v2,
        _v5 = _v4.account === _v149.AccountType.Basic,
        _v6 = _v4.uri,
        _v7 = (0, _v107.useAnalyticsEvent)(),
        {
          data: _v8,
          loading: _v9
        } = (0, _v143.useQuery)(`${_v6}/team`, {
          variables: {
            fields: _v60
          }
        });
      if ((0, _v9.useEffect)(() => {
        _v8?.accentColor && _v0 && _v0(_v8.accentColor);
      }, [_v8?.accentColor, _v0]), _v5) return (0, _v7.jsx)(_v160, {
        children: (0, _v7.jsx)(_v146.Header, {
          clickJoinAnalyticsEvent: () => _v7(_v155())
        })
      });
      let _v10 = _v8?.pictures?.sizes,
        _v11 = _v10?.length ? _v10.length - 1 : 0;
      return (0, _v7.jsxs)(_v159, {
        children: [(0, _v7.jsx)(_v148.HeaderLeftContent, {
          children: !_v9 && (0, _v7.jsx)(_v147.default, {
            teamLogoUrl: _v8?.pictures?.sizes?.[_v11]?.link,
            teamName: _v8?.teamName
          })
        }), (0, _v7.jsx)(_v148.HeaderRightContent, {
          children: _v1?.user ? (0, _v7.jsx)(_v9.Suspense, {
            fallback: (0, _v7.jsx)(_v142.Spinner, {
              size: "sm"
            }),
            children: (0, _v7.jsx)(_v157, {})
          }) : _v3 ? (0, _v7.jsx)(_v16.ThemeProvider, {
            theme: _v144.themes.light,
            children: (0, _v7.jsx)(_v145.LoginJoinModal, {
              type: "join",
              xsrft: _v1?.xsrft || "",
              onSuccess: _v65,
              children: _v0 => (0, _v7.jsx)(_v148.HeaderButton, {
                id: "join-vimeo",
                color: _v8?.accentColor,
                element: "button",
                onClick: () => {
                  _v0(), _v7(_v154()), _v156("join");
                },
                children: _v35.joinVimeoCaption
              })
            })
          }) : null
        })]
      });
    },
    _v159 = (0, _v16.default)(_v148.HeaderMinimalWrapper).withConfig({
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
    _v160 = _v16.default.div.withConfig({
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
  var _v161 = _v0.i(0),
    _v162 = _v0.i(0),
    _v163 = _v0.i(0),
    _v164 = _v0.i(0),
    _v165 = _v0.i(0),
    _v166 = _v0.i(0);
  let _v167 = _v16.createGlobalStyle`
  body {
    overflow-y: visible;
  }
`,
    _v168 = _v16.default.div.withConfig({
      displayName: "Layout__PageContainer",
      componentId: "sc-8e9ba6d2-0"
    })`
  background: var(--vimeo-colors-background);
  color: var(--vimeo-colors-text-primary);
  display: flex;
  flex-flow: row nowrap;
  position: relative;
`,
    _v169 = _v16.default.div.withConfig({
      displayName: "Layout__PageContainerContent",
      componentId: "sc-8e9ba6d2-1"
    })`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  min-height: 100vh;
  position: relative;
`,
    _v170 = _v16.default.div.withConfig({
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
      ${_v0 ? `height: calc(100vh - ${(0, _v29.rem)(63)}); overflow: auto; padding: 0;` : "height: auto;"}
    `}
`,
    _v171 = _v16.default.div.withConfig({
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
          justify-content: center;
          flex: 1 0 auto;
          min-height: 100%;
          height: 100%;
          flex-shrink: ${+!_v1};
          overflow: auto;
        ` : _v16.css`
          flex-direction: column;
          flex: 1 1 auto;
          /* With chat open the main column grows with the row; without chat cap width for readability. */
          max-width: ${_v2 ? "none" : (0, _v29.rem)(0)};
          align-items: stretch;
          height: auto;
          overflow: visible;
        `}
`,
    _v172 = _v16.default.div.withConfig({
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
    }) => _v0 ? _v16.css`
          margin: ${_v90.bokehTheme.space.md};
          width: calc(100% - ${_v90.bokehTheme.space.md} * 2);
          height: fit-content;
          max-width: ${_v1 ? `calc(100% - ${_v90.bokehTheme.space.md} * 2)` : `calc((100vh - ${(0, _v29.rem)(64)}) / 0.5625)`};
          padding: ${_v90.bokehTheme.space.md};
          gap: ${_v90.bokehTheme.space.lg};
        ` : _v16.css`
          width: 100%;
          padding: ${_v90.bokehTheme.space["2xl"]} ${_v90.bokehTheme.space["3xl"]};
          gap: ${_v90.bokehTheme.space["2xl"]};
        `};
`,
    _v173 = _v16.default.div.withConfig({
      displayName: "Layout__TitleAndDescription",
      componentId: "sc-8e9ba6d2-5"
    })`
  width: ${({
      isFullWidth: _v0
    }) => _v0 ? "100%" : `calc(100% - ${(0, _v29.rem)(80)})`};
  display: flex;
  flex-direction: column;
  gap: ${_v90.bokehTheme.space.lg};

  @media screen and (min-width: ${(0, _v29.rem)(769)}) {
    width: 100%;
    align-self: flex-start;
  }

  @media screen and (max-width: ${(0, _v29.rem)(480)}) {
    width: 100%;
    padding-bottom: ${(0, _v29.rem)(72)};
  }
`,
    _v174 = _v16.default.div.withConfig({
      displayName: "Layout__EventTimeRow",
      componentId: "sc-8e9ba6d2-6"
    })`
  display: flex;
  gap: ${_v90.bokehTheme.space.lg};
  align-items: flex-start;
  flex-wrap: wrap;
`,
    _v175 = _v16.default.div.withConfig({
      displayName: "Layout__EventDescription",
      componentId: "sc-8e9ba6d2-7"
    })`
  display: flex;
  flex-direction: column;
  gap: ${_v90.bokehTheme.space.lg};
  width: 100%;

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
    _v176 = _v16.default.div.withConfig({
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
    width: ${(0, _v29.rem)(20)};
    height: ${(0, _v29.rem)(20)};
  }
`,
    _v177 = _v16.default.span.withConfig({
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
    _v178 = (0, _v16.default)(_v97).withConfig({
      displayName: "Layout__Title",
      componentId: "sc-8e9ba6d2-10"
    })`
  font-family: ${_v90.bokehTheme.fonts.heading};
  font-size: ${_v90.bokehTheme.fontSizes["heading-2xl"]};
  font-weight: ${_v90.bokehTheme.fontWeights.medium};
  line-height: ${_v90.bokehTheme.lineHeights["heading-2xl"]};
  letter-spacing: ${_v90.bokehTheme.letterSpacings["heading-2xl"]};
  color: var(--vimeo-colors-text-primary);
  padding: ${(0, _v29.rem)(5)};
  hyphens: auto;
  background: transparent;
`,
    _v179 = _v16.default.div.withConfig({
      displayName: "Layout__BorderContainer",
      componentId: "sc-8e9ba6d2-11"
    })`
  border: none;
`,
    _v180 = _v16.default.div.withConfig({
      displayName: "Layout__FooterWrapper",
      componentId: "sc-8e9ba6d2-12"
    })`
  margin-top: ${_v90.bokehTheme.space.xl};
  width: 100%;

  > div {
    position: static !important;
    bottom: auto !important;
    background: transparent;
  }
`,
    _v181 = _v16.default.div.withConfig({
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
    _v182 = _v16.default.div.withConfig({
      displayName: "Layout__ResponsiveContainer",
      componentId: "sc-8e9ba6d2-14"
    })`
  min-width: ${(0, _v29.rem)(240)};
  width: 100%;
  overflow: hidden;
  height: fit-content;
  flex-shrink: 0;
  ${({
      isMobile: _v0,
      isPortrait: _v1
    }) => _v16.css`
    max-width: ${_v0 && !_v1 ? `calc((100vh - ${(0, _v29.rem)(64)}) / 0.5625)` : "calc(50vh / 0.5625)"};
    margin: 0 auto;

    @media screen and (min-width: ${(0, _v29.rem)(769)}) {
      max-width: calc(
        (100vh - ${(0, _v29.rem)(_v0 ? _v1 ? 264 : 64 : 264)}) /
          ${.5625}
      );
      padding-top: ${_v0 ? _v1 ? (0, _v29.rem)(8) : 0 : (0, _v29.rem)(8)};
    }
  `};

  ${_v181} {
    position: relative;
    background-color: black;
    > div {
      position: absolute;
    }
    height: 0;
    width: 100%;
    padding-bottom: ${56.25}%;
  }
`,
    _v183 = _v16.default.div.withConfig({
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
          margin-top: ${(0, _v29.rem)(10)};
          padding-bottom: ${_v0 ? (0, _v29.rem)(48) : 0};
          max-width: ${!_v2 ? `calc((100vh - ${(0, _v29.rem)(64)}) / 0.5625)` : "calc(50vh / 0.5625)"};

          @media screen and (min-width: ${(0, _v29.rem)(769)}) {
            max-width: calc(
              (100vh - ${(0, _v29.rem)(_v2 ? 264 : 64)}) /
                ${.5625}
            );
          }
        ` : _v16.css`
          margin-top: 0;
          padding-bottom: ${_v0 ? (0, _v29.rem)(48) : 0};
          max-width: none;
        `}
`;
  (0, _v16.default)(_v164.Notification).withConfig({
    displayName: "Layout__Notification",
    componentId: "sc-8e9ba6d2-16"
  })`
  background: ${({
    theme: _v0
  }) => _v0.element.bg2};
`;
  let _v184 = _v16.default.div.withConfig({
      displayName: "Layout__MatureContainer",
      componentId: "sc-8e9ba6d2-17"
    })`
  position: relative;
  background: black;
  width: 100%;
  min-width: ${(0, _v29.rem)(240)};
  max-width: calc(50vh / ${.5625});
  margin: 0 auto;
  height: 0;
  padding-bottom: ${56.25}%;

  @media screen and (min-width: ${(0, _v29.rem)(769)}) {
    width: calc((100vh - ${(0, _v29.rem)(264)}) / ${.5625});
    max-width: 100%;
    padding-top: ${(0, _v29.rem)(8)};
  }
`,
    _v185 = _v16.default.div.withConfig({
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
    font-size: ${(0, _v29.rem)(16)};
  }
`,
    _v186 = (0, _v16.default)(_v166.Paragraph).withConfig({
      displayName: "Layout__Caption",
      componentId: "sc-8e9ba6d2-19"
    })`
  font-size: ${(0, _v29.rem)(16)};
  margin-bottom: ${(0, _v29.rem)(25)};
  color: white;
`,
    _v187 = _v16.default.div.withConfig({
      displayName: "Layout__AdvertisingLabelWrapper",
      componentId: "sc-8e9ba6d2-20"
    })`
  display: flex;
  align-items: center;
  padding: ${(0, _v29.rem)(5)};
`,
    _v188 = _v16.default.span.withConfig({
      displayName: "Layout__AdvertisingLabel",
      componentId: "sc-8e9ba6d2-21"
    })`
  padding-top: ${(0, _v29.rem)(1)};
  font-size: ${(0, _v29.rem)(12)};
  line-height: ${(0, _v29.rem)(15)};
  font-weight: 500;
  color: #496073;
`,
    _v189 = (0, _v16.default)(_v165.CircleInfoSmall).withConfig({
      displayName: "Layout__InfoIcon",
      componentId: "sc-8e9ba6d2-22"
    })`
  width: ${(0, _v29.rem)(24)};
  height: ${(0, _v29.rem)(24)};
`;
  function _v190() {
    return (_v190 = Object.assign.bind()).apply(null, arguments);
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
  let _v191 = function (_v0) {
    return _v9.createElement("svg", _v190({
      viewBox: "0 0 20 20",
      xmlns: "http://www.w3.org/2000/svg"
    }, _v0), _v5 || (_v5 = _v9.createElement("path", {
      d: "M15 4L7 9.3V4H5v12h2v-5.3l8 5.3z",
      fill: "#fff"
    })));
  };
  function _v192() {
    return (_v192 = Object.assign.bind()).apply(null, arguments);
  }
  let _v193 = function (_v0) {
      return _v9.createElement("svg", _v192({
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24"
      }, _v0), _v6 || (_v6 = _v9.createElement("path", {
        d: "M12 15.5a1 1 0 01-.67-.26l-5-4.5 1.34-1.48L12 13.15l4.33-3.9 1.34 1.49-5 4.5a1 1 0 01-.67.26z",
        fill: "#fff"
      })));
    },
    _v194 = _v16.default.div.withConfig({
      displayName: "PlaylistPlayBar__PlayBarWrapper",
      componentId: "sc-2bc51816-0"
    })`
  padding: ${(0, _v29.rem)(4)};
  height: 36px;
  width: 100%;
  display: flex;
  align-items: center;
`,
    _v195 = (0, _v16.default)(_v33.Header).withConfig({
      displayName: "PlaylistPlayBar__PlayBarText",
      componentId: "sc-2bc51816-1"
    })`
  margin: 0 0 0 ${(0, _v29.rem)(20)};
  font-size: ${(0, _v29.rem)(14)};
  white-space: nowrap;
  font-weight: normal;
  line-height: 1.25;
  letter-spacing: ${(0, _v29.rem)(.2)};
`,
    _v196 = (0, _v16.default)(_v195).withConfig({
      displayName: "PlaylistPlayBar__ClipIndexLabel",
      componentId: "sc-2bc51816-2"
    })`
  color: ${_v90.bokehTheme.colors.gray["300"]};
`,
    _v197 = _v16.default.div.withConfig({
      displayName: "PlaylistPlayBar__TextSection",
      componentId: "sc-2bc51816-3"
    })`
  width: 75%;
  display: flex;
  flex-direction: row;
  align-items: center;
`,
    _v198 = (0, _v16.default)(_v195).withConfig({
      displayName: "PlaylistPlayBar__ClipNameLabel",
      componentId: "sc-2bc51816-4"
    })`
  margin: 0;
  color: rgb(255, 255, 255);
  text-overflow: ellipsis;
  overflow: hidden;
  width: 65%;
`,
    _v199 = (0, _v16.default)(_v32.Button).withConfig({
      displayName: "PlaylistPlayBar__ExpandButton",
      componentId: "sc-2bc51816-5"
    })`
  padding: 0;
  width: ${(0, _v29.rem)(24)};
  height: ${(0, _v29.rem)(24)};
  svg {
    width: 100%;
    height: 100%;
    transition: transform 0.2s ease-in-out;
    transform-origin: center;
    ${_v0 => _v0.isExpanded && "transform: rotate(180deg);"}
  }
`,
    _v200 = _v16.default.div.withConfig({
      displayName: "PlaylistPlayBar__Navigation",
      componentId: "sc-2bc51816-6"
    })`
  display: flex;
  margin-right: ${(0, _v29.rem)(12)};
`,
    _v201 = (0, _v16.default)(_v191).withConfig({
      displayName: "PlaylistPlayBar__RightArrowIcon",
      componentId: "sc-2bc51816-7"
    })`
  transform: rotate(180deg);
`,
    _v202 = (0, _v16.default)(_v32.Button).withConfig({
      displayName: "PlaylistPlayBar__NavigationButton",
      componentId: "sc-2bc51816-8"
    })`
  width: ${(0, _v29.rem)(20)};
  height: ${(0, _v29.rem)(20)};
  padding: 0;
  svg {
    width: 80%;
    height: 80%;
  }
`,
    _v203 = _v16.default.div.withConfig({
      displayName: "PlaylistPlayBar__LiveIndicator",
      componentId: "sc-2bc51816-9"
    })`
  margin: 0 ${(0, _v29.rem)(8)};
  width: ${(0, _v29.rem)(8)};
  height: ${(0, _v29.rem)(8)};
  border-radius: 50%;
  background-color: ${({
      isLive: _v0
    }) => _v0 ? _v90.bokehTheme.colors.red["500"] : "transparent"};
`;
  function _v204({
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
      _v10 = _v35.clipIndexText(_v9, _v0.length),
      _v11 = _v35.totalClipsCountText(_v0.length);
    return (0, _v7.jsxs)(_v194, {
      children: [(0, _v7.jsx)(_v199, {
        isExpanded: _v2,
        variant: "minimalTransparent",
        onClick: _v4,
        format: "secondary",
        size: "xs",
        icon: (0, _v7.jsx)(_v193, {})
      }), (0, _v7.jsxs)(_v197, {
        children: [(0, _v7.jsx)(_v196, {
          children: _v2 ? _v11 : _v10
        }), !_v2 && (0, _v7.jsxs)(_v7.Fragment, {
          children: [(0, _v7.jsx)(_v203, {
            isLive: _v3
          }), (0, _v7.jsx)(_v198, {
            children: _v7
          })]
        })]
      }), (0, _v7.jsxs)(_v200, {
        children: [(0, _v7.jsx)(_v202, {
          size: "xs",
          variant: "minimalTransparent",
          format: "secondary",
          disabled: !_v6 || _v9 < 1,
          onClick: () => _v5(_v0[_v9 - 1]),
          icon: (0, _v7.jsx)(_v191, {})
        }), (0, _v7.jsx)(_v202, {
          size: "xs",
          variant: "minimalTransparent",
          format: "secondary",
          disabled: !_v6 || _v9 + 1 >= _v0.length,
          onClick: () => _v5(_v0[_v9 + 1]),
          icon: (0, _v7.jsx)(_v201, {})
        })]
      })]
    });
  }
  let _v205 = _v16.default.div.withConfig({
      displayName: "ThumbnailGrid__Container",
      componentId: "sc-7c440263-0"
    })`
  width: 100%;
  height: 100%;
  display: flex;
`,
    _v206 = _v16.default.div.withConfig({
      displayName: "ThumbnailGrid__PrimaryWrapper",
      componentId: "sc-7c440263-1"
    })`
  width: 100%;
  height: 100%;
`,
    _v207 = _v16.default.div.withConfig({
      displayName: "ThumbnailGrid__StackContainer",
      componentId: "sc-7c440263-2"
    })`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`,
    _v208 = _v16.default.div.withConfig({
      displayName: "ThumbnailGrid__Thumbnail",
      componentId: "sc-7c440263-3"
    })`
  background-image: url(${_v0 => _v0.src});
  width: 100%;
  height: 100%;
  border: solid ${(0, _v29.rem)(1)} ${_v90.bokehTheme.colors.gray["700"]};
  border-radius: ${(0, _v29.rem)(2)};
  background-position: center;
  background-size: cover;
`;
  function _v209({
    items: _v0
  }) {
    let _v1 = _v0 => {
      let _v1 = (0, _v62.default)(_v0[_v0]?.pictures?.sizes);
      return _v1 || (_v1 = (0, _v61.default)(_v0[0]?.pictures?.sizes)), _v1 ? (0, _v7.jsx)(_v208, {
        src: _v1.link
      }) : null;
    };
    return (0, _v7.jsxs)(_v205, {
      children: [(0, _v7.jsx)(_v206, {
        children: _v1(1)
      }), _v0.length > 1 && (0, _v7.jsxs)(_v207, {
        children: [_v1(2), _v1(3)]
      })]
    });
  }
  let _v210 = _v16.default.span.withConfig({
    displayName: "LiveNowBadge__LiveNowBadgeContainer",
    componentId: "sc-ce84f7b8-0"
  })`
  color: ${_v90.bokehTheme.colors.white};
  background: ${_v90.bokehTheme.colors.red["500"]};
  font-weight: 500;
  vertical-align: top;
  padding: ${(0, _v29.rem)(2)} ${(0, _v29.rem)(8)};
  border-radius: ${(0, _v29.rem)(2)};
  font-size: ${(0, _v29.rem)(14)};

  svg {
    margin-right: ${(0, _v29.rem)(4)};
    fill: ${_v90.bokehTheme.colors.white};
  }
`;
  function _v211() {
    return (0, _v7.jsxs)(_v210, {
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
  var _v212 = _v0.i(0),
    _v213 = _v0.i(0);
  let _v214 = _v16.default.div.withConfig({
      displayName: "LiveThumbnail__Thumbnail",
      componentId: "sc-9dfd8e69-0"
    })`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${_v0 => _v0.src});
  min-width: ${(0, _v29.rem)(70)};
  height: ${(0, _v29.rem)(44)};
  border-radius: 10%;
  background-color: ${_v90.bokehTheme.colors.gray["700"]};
  background-position: center;
  background-size: cover;
`,
    _v215 = _v16.default.div.withConfig({
      displayName: "LiveThumbnail__PlayIconOverlay",
      componentId: "sc-9dfd8e69-1"
    })`
  display: none;
  align-items: center;
  justify-content: center;
  width: ${(0, _v29.rem)(35)};
  height: ${(0, _v29.rem)(35)};
  border-radius: 50%;
  background: black;
  opacity: 0.7;
  z-index: 14;
`,
    _v216 = (0, _v16.default)(_v212.Play).withConfig({
      displayName: "LiveThumbnail__PlayIcon",
      componentId: "sc-9dfd8e69-2"
    })`
  path {
    fill: ${_v90.bokehTheme.colors.white};
  }
  margin-left: ${(0, _v29.rem)(2)};
  width: ${(0, _v29.rem)(16)};
  height: ${(0, _v29.rem)(16)};
`,
    _v217 = (0, _v16.default)(_v213.Pause).withConfig({
      displayName: "LiveThumbnail__PauseIcon",
      componentId: "sc-9dfd8e69-3"
    })`
  path {
    fill: ${_v90.bokehTheme.colors.white};
  }
  width: ${(0, _v29.rem)(16)};
  height: ${(0, _v29.rem)(16)};
`;
  function _v218({
    src: _v0,
    isPlaying: _v1
  }) {
    return (0, _v7.jsx)(_v214, {
      src: _v0,
      children: (0, _v7.jsx)(_v215, {
        children: _v1 ? (0, _v7.jsx)(_v217, {}) : (0, _v7.jsx)(_v216, {})
      })
    });
  }
  let _v219 = _v16.default.div.withConfig({
      displayName: "TrackList__ItemsContainer",
      componentId: "sc-c7b16db8-0"
    })`
  display: flex;
  flex-direction: column;
`,
    _v220 = _v16.default.div.withConfig({
      displayName: "TrackList__ClipInfo",
      componentId: "sc-c7b16db8-1"
    })`
  margin-left: ${(0, _v29.rem)(12)};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`,
    _v221 = _v16.default.div.withConfig({
      displayName: "TrackList__Item",
      componentId: "sc-c7b16db8-2"
    })`
  padding: ${(0, _v29.rem)(10)};
  height: ${(0, _v29.rem)(64)};
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
    _v222 = _v16.default.div.withConfig({
      displayName: "TrackList__ClipTitle",
      componentId: "sc-c7b16db8-3"
    })`
  width: ${(0, _v29.rem)(200)};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: ${(0, _v29.rem)(14)};
  color: ${_v90.bokehTheme.colors.gray["100"]};
  margin-bottom: ${(0, _v29.rem)(4)};
  font-weight: 500;
`,
    _v223 = _v16.default.div.withConfig({
      displayName: "TrackList__ClipDetails",
      componentId: "sc-c7b16db8-4"
    })`
  display: flex;
  width: 100%;
`,
    _v224 = _v16.default.span.withConfig({
      displayName: "TrackList__ClipStat",
      componentId: "sc-c7b16db8-5"
    })`
  color: ${_v90.bokehTheme.colors.gray["300"]};
  font-size: ${(0, _v29.rem)(14)};
  font-weight: normal;
`,
    _v225 = (0, _v16.default)(_v224).withConfig({
      displayName: "TrackList__ClipStatDivider",
      componentId: "sc-c7b16db8-6"
    })`
  padding: 0 ${(0, _v29.rem)(4)};
`;
  function _v226({
    items: _v0,
    isPlaying: _v1,
    activeClipUri: _v2,
    onClipSwitch: _v3
  }) {
    return (0, _v7.jsx)(_v219, {
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
          _v10 = _v35.trackViewCountText(_v7),
          _v11 = (0, _v61.default)(_v8)?.link;
        return (0, _v7.jsxs)(_v221, {
          isSelected: _v1,
          onClick: () => _v3(_v0),
          children: [(0, _v7.jsx)(_v218, {
            src: _v11,
            isPlaying: _v1 && _v1
          }), (0, _v7.jsxs)(_v220, {
            children: [(0, _v7.jsx)(_v222, {
              children: _v4
            }), (0, _v7.jsx)(_v223, {
              children: _v9?.status === _v47 ? (0, _v7.jsx)(_v211, {}) : (0, _v7.jsxs)(_v7.Fragment, {
                children: [(0, _v7.jsx)(_v224, {
                  children: (_v2 = String(Math.floor(_v5 / 60)).padStart(2, "0"), _v3 = String(_v5 % 60).padStart(2, "0"), `${_v2}:${_v3}`)
                }), (0, _v7.jsx)(_v225, {
                  children: "•"
                }), (0, _v7.jsx)(_v224, {
                  children: _v10
                })]
              })
            })]
          })]
        }, _v6);
      }(_v0, _v0.uri === _v2))
    });
  }
  let _v227 = _v16.default.div.withConfig({
      displayName: "EmbedPlaylist__EmbedPlaylistContainer",
      componentId: "sc-1d80e40c-0"
    })`
  display: ${_v0 => _v0.isPlaying && !_v0.isHover || _v0.isToastDisplayed ? "none" : "flex"};
  top: ${(0, _v29.rem)(8)};
  left: ${(0, _v29.rem)(8)};
  width: 22%;
  min-width: ${(0, _v29.rem)(348)};
  background-color: rgba(17, 25, 29, 0.85);
  position: absolute;
  flex-direction: column;
  z-index: 4;
  border-radius: ${(0, _v29.rem)(8)};
  transition: all 0.5s ease-in-out;
  ${({
      isExpanded: _v0
    }) => _v0 ? "max-height: 87%" : `height: ${(0, _v29.rem)(92)}`};

  @media screen and (max-width: ${(0, _v29.rem)(953)}) and (min-width: ${(0, _v29.rem)(769)}) {
    display: none;
  }

  @media screen and (max-width: ${(0, _v29.rem)(750)}) {
    display: none;
  }

  @media screen and (max-height: ${(0, _v29.rem)(472)}) {
    display: none;
  }
`,
    _v228 = _v16.default.div.withConfig({
      displayName: "EmbedPlaylist__PlaylistHeader",
      componentId: "sc-1d80e40c-1"
    })`
  padding: ${(0, _v29.rem)(4)};
  display: flex;
  max-height: 70%;
  width: 100%;
`,
    _v229 = _v16.default.div.withConfig({
      displayName: "EmbedPlaylist__ThumbnailSection",
      componentId: "sc-1d80e40c-2"
    })`
  height: ${(0, _v29.rem)(52)};
  width: ${(0, _v29.rem)(88)};
`,
    _v230 = _v16.default.div.withConfig({
      displayName: "EmbedPlaylist__EventDetails",
      componentId: "sc-1d80e40c-3"
    })`
  margin-left: ${(0, _v29.rem)(12)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 65%;
`,
    _v231 = (0, _v16.default)(_v33.Header).withConfig({
      displayName: "EmbedPlaylist__EventTitle",
      componentId: "sc-1d80e40c-4"
    })`
  margin: 0;
  font-size: ${(0, _v29.rem)(16)};
  font-weight: 600;
  line-height: 1.25;
  text-overflow: ellipsis;
  overflow: hidden;
  color: ${_v90.bokehTheme.colors.white};
  letter-spacing: ${(0, _v29.rem)(.2)};
`,
    _v232 = (0, _v16.default)(_v166.Paragraph).withConfig({
      displayName: "EmbedPlaylist__OwnerLabel",
      componentId: "sc-1d80e40c-5"
    })`
  margin: 0;
  font-size: ${(0, _v29.rem)(14)};
  line-height: 1.4;
  color: ${_v90.bokehTheme.colors.gray["300"]};
`,
    _v233 = _v16.default.div.withConfig({
      displayName: "EmbedPlaylist__TrackListContainer",
      componentId: "sc-1d80e40c-6"
    })`
  max-height: ${_v0 => _v0.isExpanded ? "50vh" : "0"};
  transition: all 0.5s ease-in-out;
  width: 100%;
  overflow-y: auto;
`;
  function _v234({
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
        _v13 ? _v10(_v67.CLOSE_PLAYLIST, "click") : _v10(_v67.OPEN_PLAYLIST, "click");
        let _v0 = !_v13;
        _v14(_v0), _v8(_v0);
      }, [_v13, _v8, _v10]),
      _v16 = _v35.embedPlaylistOwnerLabelText(_v12),
      _v17 = (0, _v9.useCallback)(_v0 => {
        _v9 && _v7(_v0);
      }, [_v9, _v7]);
    return (0, _v7.jsxs)(_v227, {
      isPlaying: _v3,
      isHover: _v4,
      isExpanded: _v13,
      isToastDisplayed: _v6,
      children: [(0, _v7.jsxs)(_v228, {
        children: [(0, _v7.jsx)(_v229, {
          children: (0, _v7.jsx)(_v209, {
            items: _v0
          })
        }), (0, _v7.jsxs)(_v230, {
          children: [(0, _v7.jsx)(_v231, {
            children: _v11
          }), (0, _v7.jsx)(_v232, {
            children: _v16
          })]
        })]
      }), (0, _v7.jsx)(_v204, {
        items: _v0,
        activeClip: _v2,
        isExpanded: _v13,
        onExpandToggled: _v15,
        canSwitchClip: _v9,
        onClipSwitch: _v17,
        isLive: _v5
      }), (0, _v7.jsx)(_v233, {
        isExpanded: _v13,
        children: (0, _v7.jsx)(_v226, {
          activeClipUri: _v2.uri,
          items: _v0,
          isPlaying: _v3,
          onClipSwitch: _v17
        })
      })]
    });
  }
  var _v235 = _v0.i(0);
  let _v236 = _v16.default.div.withConfig({
      displayName: "NextLiveClip__ClipTitle",
      componentId: "sc-eca46192-0"
    })`
  width: ${(0, _v29.rem)(200)};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: ${(0, _v29.rem)(14)};
  color: ${_v90.bokehTheme.colors.gray["100"]};
  font-weight: 500;
  margin: 0;
`,
    _v237 = (0, _v16.default)(_v166.Paragraph).withConfig({
      displayName: "NextLiveClip__ClickToWatch",
      componentId: "sc-eca46192-1"
    })`
  padding-left: ${(0, _v29.rem)(8)};
  color: ${_v90.bokehTheme.colors.gray["100"]};
`,
    _v238 = _v16.default.div.withConfig({
      displayName: "NextLiveClip__ThumbnailWrapper",
      componentId: "sc-eca46192-2"
    })`
  position: relative;
  opacity: 0.75;
  display: flex;
`,
    _v239 = _v16.default.div.withConfig({
      displayName: "NextLiveClip__NextLiveClipContainer",
      componentId: "sc-eca46192-3"
    })`
  max-width: ${(0, _v29.rem)(704)};
  display: flex;
  position: absolute;
  z-index: 3;
  top: ${(0, _v29.rem)(10)};
  right: ${(0, _v29.rem)(10)};
  padding: ${(0, _v29.rem)(10)} ${(0, _v29.rem)(8)};
  border-radius: ${(0, _v29.rem)(5)};
  background: rgba(17, 25, 29, 0.85);
  cursor: pointer;

  &:hover {
    ${_v236} {
      color: ${_v90.bokehTheme.colors.white};
    }
    ${_v237} {
      color: ${_v90.bokehTheme.colors.white};
    }
    ${_v238} div {
      display: flex;
    }
  }
`,
    _v240 = _v16.default.div.withConfig({
      displayName: "NextLiveClip__ClipDetailsWrapper",
      componentId: "sc-eca46192-4"
    })`
  display: flex;
  flex-direction: column;
  margin-left: ${(0, _v29.rem)(12)};
  justify-content: center;
`,
    _v241 = (0, _v16.default)(_v32.Button).withConfig({
      displayName: "NextLiveClip__DismissButton",
      componentId: "sc-eca46192-5"
    })`
  cursor: pointer;
  z-index: 13;
  right: 2.5%;
`,
    _v242 = _v16.default.div.withConfig({
      displayName: "NextLiveClip__TopWrapper",
      componentId: "sc-eca46192-6"
    })`
  display: flex;
  align-items: center;
  margin-bottom: ${(0, _v29.rem)(4)};
`,
    _v243 = _v16.default.div.withConfig({
      displayName: "NextLiveClip__BottomWrapper",
      componentId: "sc-eca46192-7"
    })``;
  function _v244({
    streamableClip: _v0,
    onClipSwitch: _v1,
    onDismiss: _v2
  }) {
    let _v3 = (0, _v9.useCallback)(() => _v1(_v0), [_v1, _v0]),
      {
        name: _v4,
        pictures: _v5
      } = _v0,
      _v6 = (0, _v61.default)(_v5?.sizes)?.link;
    return (0, _v7.jsxs)(_v239, {
      onClick: _v3,
      children: [(0, _v7.jsx)(_v238, {
        children: (0, _v7.jsx)(_v218, {
          src: _v6,
          isPlaying: !1
        })
      }), (0, _v7.jsxs)(_v240, {
        children: [(0, _v7.jsxs)(_v242, {
          children: [(0, _v7.jsx)(_v236, {
            children: _v4
          }), (0, _v7.jsx)(_v241, {
            variant: "minimalTransparent",
            size: "xs",
            icon: (0, _v7.jsx)(_v235.DismissX, {
              color: _v90.bokehTheme.colors.white,
              width: 20,
              height: 20
            }),
            onClick: _v2
          })]
        }), (0, _v7.jsxs)(_v243, {
          children: [(0, _v7.jsx)(_v211, {}), (0, _v7.jsx)(_v237, {
            size: 3,
            children: _v35.nextClipLabelText
          })]
        })]
      })]
    });
  }
  let _v245 = _v16.default.div.withConfig({
      displayName: "NextVideoPreview__NextVideoPreviewContainer",
      componentId: "sc-cb38d70a-0"
    })`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 15vh;
  right: ${(0, _v29.rem)(4)};
  z-index: 10;
  max-width: ${(0, _v29.rem)(260)};
  width: 20%;

  @media screen and (max-width: ${(0, _v29.rem)(0)}) {
    bottom: 10vw;
  }

  @media screen and (max-width: ${(0, _v29.rem)(900)}) {
    display: none;
  }

  @media screen and (max-height: ${(0, _v29.rem)(640)}) {
    display: none;
  }
`,
    _v246 = _v16.default.div.withConfig({
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
    _v247 = _v16.default.div.withConfig({
      displayName: "NextVideoPreview__Thumbnail",
      componentId: "sc-cb38d70a-2"
    })`
  background-image: url(${_v0 => _v0.src});
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  border: solid ${(0, _v29.rem)(1)} ${_v90.bokehTheme.colors.gray["700"]};
  border-radius: ${(0, _v29.rem)(2)};
  border: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`,
    _v248 = (0, _v16.default)(_v33.Header).withConfig({
      displayName: "NextVideoPreview__UpNext",
      componentId: "sc-cb38d70a-3"
    })`
  color: ${_v90.bokehTheme.colors.white};
  margin-bottom: ${(0, _v29.rem)(8)};
`,
    _v249 = (0, _v16.default)(_v166.Paragraph).withConfig({
      displayName: "NextVideoPreview__Duration",
      componentId: "sc-cb38d70a-4"
    })`
  border-radius: ${(0, _v29.rem)(4)};
  bottom: 35%;
  right: 10%;
  background-color: black;
  color: ${_v90.bokehTheme.colors.white};
  padding: ${(0, _v29.rem)(4)} ${(0, _v29.rem)(12)};
  margin-bottom: ${(0, _v29.rem)(6)};
  margin-left: 60%;
  opacity: 0.7;
`,
    _v250 = (0, _v16.default)(_v212.Play).withConfig({
      displayName: "NextVideoPreview__PlayIcon",
      componentId: "sc-cb38d70a-5"
    })`
  path {
    fill: ${_v90.bokehTheme.colors.white};
  }
  margin-left: ${(0, _v29.rem)(2)};
  width: ${(0, _v29.rem)(24)};
  height: ${(0, _v29.rem)(24)};
`,
    _v251 = _v16.default.div.withConfig({
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
    _v252 = _v16.default.div.withConfig({
      displayName: "NextVideoPreview__Description",
      componentId: "sc-cb38d70a-7"
    })`
  width: 100%;
  padding: 0 ${(0, _v29.rem)(12)};
  background-color: ${_v90.bokehTheme.colors.gray["900"]};
`,
    _v253 = (0, _v16.default)(_v33.Header).withConfig({
      displayName: "NextVideoPreview__VideoTitle",
      componentId: "sc-cb38d70a-8"
    })`
  color: ${_v90.bokehTheme.colors.white};
  margin: ${(0, _v29.rem)(12)} 0;
  font-weight: 500;
`,
    _v254 = (0, _v16.default)(_v33.Header).withConfig({
      displayName: "NextVideoPreview__Author",
      componentId: "sc-cb38d70a-9"
    })`
  color: ${_v90.bokehTheme.colors.gray["300"]};
  margin: ${(0, _v29.rem)(12)} 0;
`;
  function _v255({
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
      _v9 = (0, _v9.useCallback)(() => _v2(_v0, !0), [_v2, _v0]);
    return (0, _v7.jsxs)(_v245, {
      children: [(0, _v7.jsx)(_v248, {
        size: "4",
        children: _v35.upNextHeaderText
      }), (0, _v7.jsx)(_v246, {
        onClick: _v9,
        children: (0, _v7.jsxs)(_v247, {
          src: _v6,
          children: [(0, _v7.jsx)(_v251, {
            children: (0, _v7.jsx)(_v250, {})
          }), (0, _v7.jsx)(_v249, {
            size: "2",
            children: `${_v7}:${_v8}`
          })]
        })
      }), (0, _v7.jsxs)(_v252, {
        children: [(0, _v7.jsx)(_v253, {
          size: "6",
          children: _v5
        }), (0, _v7.jsx)(_v254, {
          size: "6",
          children: _v1
        })]
      })]
    });
  }
  var _v256 = _v0.i(0);
  let _v257 = _v16.default.div.withConfig({
      displayName: "schedule-bubble__ScheduleContainer",
      componentId: "sc-bf18c264-0"
    })`
  position: absolute;
  width: ${(0, _v29.rem)(320)};
  background-color: ${_v90.bokehTheme.colors.gray["900"]};
  padding: ${(0, _v29.rem)(12)} ${(0, _v29.rem)(15)};
  border-radius: ${(0, _v29.rem)(4)};
  color: rgb(255, 255, 255);
  bottom: ${(0, _v29.rem)(56)};
  left: ${(0, _v29.rem)(12)};
  z-index: 4;

  @media screen and (max-width: ${(0, _v29.rem)(500)}) {
    display: none;
  }

  @media screen and (max-height: ${(0, _v29.rem)(524)}) {
    display: none;
  }
`,
    _v258 = _v16.default.div.withConfig({
      displayName: "schedule-bubble__UpperText",
      componentId: "sc-bf18c264-1"
    })`
  font-size: ${(0, _v29.rem)(14)};
  font-weight: 300;
  margin-bottom: ${(0, _v29.rem)(4)};
  color: ${_v90.bokehTheme.colors.white};
`,
    _v259 = _v16.default.div.withConfig({
      displayName: "schedule-bubble__MainText",
      componentId: "sc-bf18c264-2"
    })`
  font-size: ${(0, _v29.rem)(20)};
`;
  function _v260({
    schedule: _v0
  }) {
    return (0, _v7.jsxs)(_v257, {
      children: [(0, _v7.jsx)(_v258, {
        children: (0, _v256.getScheduleAvailability)(_v0)
      }), (0, _v7.jsx)(_v259, {
        children: (0, _v256.getScheduleTime)(_v0)
      })]
    });
  }
  let _v261 = _v16.default.div.withConfig({
      displayName: "EventRecipientPlayer__ContentWrapper",
      componentId: "sc-51e55c7f-0"
    })`
  position: relative;
`,
    _v262 = (0, _v9.forwardRef)(function (_v0, _v1) {
      let {
          eventData: _v2,
          videosData: _v3,
          ingestStatus: _v4,
          onPlayableClipChange: _v5,
          currentClip: _v6,
          eventId: _v7
        } = _v71(),
        {
          PlayerConstructor: _v8
        } = (0, _v9.useContext)(_v163.PlayerContext),
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
        _v20 = (0, _v9.useContext)(_v28.ViewerContext),
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
        _v39 = (0, _v9.useMemo)(() => _v64(), []),
        _v40 = (0, _v115.useIsPortraitScreenOrientation)();
      (0, _v162.useLeadFormPrefillParentListener)(_v7 || "", _v161.ENTITY_TYPE.EVENT);
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
      let _v42 = (0, _v9.useMemo)(() => _v3?.items?.filter(_v0 => !_v14 || _v0.live?.status === "done" || _v0.live?.status === _v47 || _v0.live?.status === "archiving" || _v0.uri === _v6?.uri), [_v3, _v6, _v14]),
        _v43 = (0, _v9.useCallback)((_v0, _v1, _v2 = null) => {
          let _v3,
            _v4 = _v2 ?? _v6;
          _v4 && (_v3 = {
            is_embed: !1,
            name: _v0,
            event_type: _v1,
            live_event_id: _v7 ?? null,
            live_event_privacy: _v19?.view ?? null,
            video_type: _v66(_v9, _v4, _v4, !!_v10),
            live_event_embed_privacy: _v19?.embed ?? null,
            live_event_type: _v68.LIVE_EVENT,
            team_owner_id: _v21 ? _v21.ownerId.toString() : null,
            team_subscription_type: _v21 ? _v18 : null,
            actor_team_role: null,
            actor_resource_role: null,
            team_size: _v21 && _v21.currentTeamSize ? _v21.currentTeamSize.toString() : null
          }, _v150.BigPictureClient.sendEvent(new _v150.Event("vimeo.live_svvr_player", 2, _v3)));
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
        return _v34 && _v34.videoId === _v63(_v6?.uri || "") && Object.keys(_v0).forEach(_v0 => {
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
            _v3 = _v34 && (_v34.duration > 0 || _v2 === _v47);
          _v9?.uri === _v0.uri && 4 === _v4 ? _v43(_v67.SWITCH_TO_LIVE_STREAM, "click", _v0) : _v43(_v67.PLAY_ARCHIVED_CLIP, "click", _v0), _v3 && _v0.uri === _v6?.uri && (_v34.paused ? _v34.play() : _v34.pause());
        }, [_v5, _v34, _v6?.uri, _v43, _v4, _v9?.uri]),
        _v45 = _v6?.uri === _v9?.uri,
        _v46 = !!(_v4 && 4 === _v4),
        _v47 = !_v45 && _v46 && !_v30;
      return (0, _v7.jsx)(_v182, {
        ref: _v1,
        onMouseEnter: () => _v27(!0),
        onMouseLeave: () => _v27(!1),
        isMobile: _v39,
        isPortrait: _v40,
        children: (0, _v7.jsxs)(_v261, {
          children: [_v6 && _v11 && _v42 && (0, _v7.jsx)(_v234, {
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
          }), _v47 && (0, _v7.jsx)(_v244, {
            streamableClip: _v9,
            onClipSwitch: _v44,
            onDismiss: _v0 => {
              _v0.stopPropagation(), _v31(!0);
            }
          }), _v15 && !_v22 && !_v24 && (0, _v7.jsx)(_v260, {
            schedule: _v10
          }), (0, _v7.jsx)(_v179, {
            children: (0, _v7.jsxs)(_v181, {
              scaleup: !1,
              children: [(0, _v7.jsx)("div", {
                ref: _v41,
                className: "player js-player"
              }), _v28 && (0, _v7.jsx)(_v255, {
                video: _v28,
                author: _v17,
                onNextVideoToggled: _v44
              })]
            })
          })]
        })
      });
    }),
    _v263 = ({
      isUnrated: _v0
    }) => {
      let _v1 = (0, _v9.useContext)(_v28.ViewerContext);
      return (0, _v7.jsx)(_v184, {
        children: (0, _v7.jsxs)(_v185, {
          children: [(0, _v7.jsx)(_v186, {
            children: _v0 ? _v35.notRatedContentOverlayCaption : _v35.matureContentOverlayCaption
          }), (0, _v7.jsx)(_v16.ThemeProvider, {
            theme: _v144.themes.light,
            children: (0, _v7.jsx)(_v145.LoginJoinModal, {
              type: "login",
              xsrft: _v1?.xsrft || "",
              onSuccess: _v65,
              children: _v0 => (0, _v7.jsx)(_v32.Button, {
                onClick: () => {
                  _v0(), _v156("login");
                },
                children: _v35.logInCaption
              })
            })
          })]
        })
      });
    },
    _v264 = _v16.default.div.withConfig({
      displayName: "PreviewBar__Container",
      componentId: "sc-f4816654-0"
    })`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  background: ${_v90.bokehTheme.colors.blue["500"]};
  color: ${_v90.bokehTheme.colors.white};
  padding: ${(0, _v29.rem)(8)};
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 3;
  @media screen and (max-width: ${(0, _v29.rem)(769)}) {
    flex-flow: column nowrap;
    padding: ${(0, _v29.rem)(14)};
  }
`,
    _v265 = (0, _v16.default)(_v32.Button).withConfig({
      displayName: "PreviewBar__EditButton",
      componentId: "sc-f4816654-1"
    })`
  text-decoration: none;
  margin-left: ${(0, _v29.rem)(10)};
  @media screen and (max-width: ${(0, _v29.rem)(769)}) {
    margin-left: 0;
    margin-top: ${(0, _v29.rem)(14)};
  }
`,
    _v266 = ({
      href: _v0
    }) => (0, _v7.jsxs)(_v264, {
      id: "preview-banner",
      children: [_v35.previewBarText, (0, _v7.jsx)(_v265, {
        format: "alternative",
        variant: "transparent",
        pill: !0,
        href: _v0,
        element: "a",
        children: _v35.previewBarButtonText
      })]
    });
  var _v267 = _v0.i(0);
  let _v268 = _v16.default.div.withConfig({
      displayName: "styles__BadgeContainer",
      componentId: "sc-83e7baae-0"
    })`
  display: flex;
  margin-left: ${(0, _v29.rem)(10)};
`,
    _v269 = ({
      display: _v0,
      promptRating: _v1 = () => {},
      isUnrated: _v2
    }) => _v0 ? (0, _v7.jsx)(_v268, {
      children: (0, _v7.jsx)(_v267.Badge, {
        onClick: _v1,
        format: _v2 ? "not-yet-rated" : "mature",
        size: "sm",
        children: _v2 ? _v35.ratingsBadgeLabel.unrated : _v35.ratingsBadgeLabel.mature
      })
    }) : null;
  var _v270 = _v0.i(0),
    _v271 = _v0.i(0),
    _v272 = _v0.i(0);
  let _v273 = "#141414",
    _v274 = "56.25%";
  function _v275({
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
      _v14 = _v0 => (0, _v7.jsx)(_v272.LeadCaptureView, {
        previewType: _v4,
        type: _v161.ENTITY_TYPE.EVENT,
        entityId: _v5,
        setLeadUuid: _v6,
        previewSize: _v0,
        onPreviewTypeChanged: _v7,
        onMount: _v8,
        onUnmount: _v9
      }),
      _v15 = (0, _v7.jsx)(_v121.Flex, {
        alignItems: "center",
        height: "100%",
        justifyContent: "center",
        width: "100%",
        children: (0, _v7.jsx)(_v142.Spinner, {})
      }),
      _v16 = _v4 === _v23.PREVIEW_TYPE.CONFIRMATION;
    if (_v0 && _v10 && !_v16) return (0, _v7.jsxs)(_v119.Box, {
      backgroundColor: _v273,
      bottom: 0,
      left: 0,
      overflow: "auto",
      position: "fixed",
      right: 0,
      top: 0,
      zIndex: 0,
      children: [(0, _v7.jsx)(_v129.IconButton, {
        "aria-label": _v35.closeRegistration,
        icon: (0, _v7.jsx)(_v271.CloseX, {
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
    return _v13 = _v2 ? _v15 : _v17 ? (0, _v7.jsxs)(_v121.Flex, {
      alignItems: "center",
      direction: "column",
      gap: "xl",
      height: "100%",
      justifyContent: "center",
      padding: "2xl",
      textAlign: "center",
      width: "100%",
      children: [(0, _v7.jsxs)(_v121.Flex, {
        direction: "column",
        gap: "xs",
        children: [(0, _v7.jsx)(_v123.Text, {
          color: "white",
          variant: "heading-lg",
          children: _v35.registerToAttend
        }), _v3 ? (0, _v7.jsx)(_v123.Text, {
          color: "white",
          variant: "body-xl",
          children: _v3
        }) : null]
      }), (0, _v7.jsx)(_v119.Box, {
        maxWidth: (0, _v122.rem)(360),
        width: "100%",
        children: (0, _v7.jsx)(_v270.Button, {
          onClick: _v11,
          variant: "primary",
          width: "100%",
          children: _v35.register
        })
      })]
    }) : _v14({
      height: "100%",
      width: "100%"
    }), (0, _v7.jsx)(_v182, {
      isMobile: _v0,
      isPortrait: _v1,
      children: (0, _v7.jsx)(_v119.Box, {
        backgroundColor: _v273,
        borderRadius: "2xl",
        overflow: "hidden",
        paddingBottom: _v274,
        position: "relative",
        width: "100%",
        children: (0, _v7.jsx)(_v119.Box, {
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
  var _v276 = _v0.i(0),
    _v277 = _v0.i(0);
  function _v278({
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
      _v18 = function (_v0, _v1) {
        let _v2 = !!(_v0?.live?.chat?.roomId && _v1),
          {
            data: _v3
          } = (0, _v276.useGetInteractionRoomRoomIdStatus)(() => _v2 && _v1 ? {
            where: {
              roomType: _v125.EComposerSessionType.LIVE_EVENT,
              roomId: String(_v1)
            },
            select: ["status.enabled"]
          } : null, {
            refreshInterval: _v277.interactionToolsConfig.INTERACTION_ROOM_STATUS_POLLING_INTERVAL,
            refreshWhenHidden: !0
          });
        return (0, _v9.useMemo)(() => _v2 && !!_v3?.status?.enabled, [_v2, _v3?.status?.enabled]);
      }(_v17, _v4),
      _v19 = (0, _v87.useBreakpointValue)({
        base: !0,
        md: !1
      }) ?? !0,
      [_v20, _v21] = (0, _v9.useState)(!1),
      [_v22, _v23] = (0, _v9.useState)(!1),
      [_v24, _v25] = (0, _v9.useState)(!1),
      _v26 = _v18 && (_v19 && _v20 || !_v19 && _v22),
      _v27 = _v16 && "startTime" in _v16 ? _v16.startTime : void 0,
      _v28 = _v16 && "timeZone" in _v16 ? _v16.timeZone : void 0,
      _v29 = _v27 ? _v84.DateTime.fromISO(_v27, _v28 ? {
        zone: _v28
      } : {}) : null,
      _v30 = (0, _v85.useRouter)(),
      _v31 = (0, _v117.useViewer)(),
      _v32 = _v31?.user ?? null,
      _v33 = _v31?.ofcomQualifies,
      _v34 = !!_v12?.interactions?.edit,
      _v35 = (0, _v9.useRef)(null),
      _v36 = (0, _v9.useMemo)(() => _v64(), []),
      _v37 = (0, _v115.useIsPortraitScreenOrientation)(),
      _v38 = (0, _v107.useAnalyticsEvent)(),
      _v39 = _v6?.contentRating,
      _v40 = !!_v39?.includes(_v45),
      _v41 = !!_v39?.includes(_v44),
      _v42 = !!_v39?.includes(_v46),
      _v43 = null === _v32 && _v33 && (_v14?.view === _v48 || _v14?.view === _v49 || _v14?.view === _v50) && !_v40,
      _v44 = _v6 ? `${window.location.origin}/event/${_v4}${_v6.uri}` : window.location.href,
      _v45 = _v1 ? _v23.PREVIEW_TYPE.CONFIRMATION : _v8,
      {
        registrant: _v46,
        liveStatus: {
          data: {
            status: _v47
          },
          initialDataLoaded: _v48
        }
      } = _v83(),
      _v49 = (_v46.data.isBlocked && _v46.called || !_v46.initialDataLoaded) && _v47 !== _v52,
      _v50 = _v47 === _v52 || _v47 === _v51 && _v1 || _v1 && [4, 2].includes(_v5),
      _v51 = _v30.asPath.split("?")[0].replace(/\/+$/, "").split("/").pop() ?? "",
      _v52 = Object.values(_v53).includes(_v51),
      _v53 = _v0 => {
        if (![_v23.PREVIEW_TYPE.FORM, _v23.PREVIEW_TYPE.LOGIN_SCREEN].includes(_v0)) return;
        let _v1 = _v30.asPath.split("?"),
          _v2 = _v1[0].replace(/\/$/, ""),
          _v3 = _v2.split("/").pop(),
          _v4 = void 0 !== _v1[1] ? `?${_v1[1]}` : "",
          _v5 = _v0 === _v23.PREVIEW_TYPE.FORM ? _v53.REGISTER : _v53.SIGNIN;
        if (Object.values(_v53).includes(_v3)) {
          let _v0 = _v2.replace(_v3, _v5);
          _v30.push(`${_v0}${_v4}`);
        } else _v30.push(`${_v2}/${_v5}${_v4}`);
      },
      _v54 = () => {
        let _v0 = _v30.asPath.split("?"),
          _v1 = _v0[0].replace(/\/$/, ""),
          _v2 = _v1.split("/").pop(),
          _v3 = void 0 !== _v0[1] ? `?${_v0[1]}` : "";
        if (Object.values(_v53).includes(_v2)) {
          let _v0 = _v1.replace(_v2, "");
          _v30.push(`${_v0}${_v3}`);
        }
      };
    return (0, _v9.useEffect)(() => {
      !_v46.loading && _v46.called && !_v46.data.isValidRegistrant && (_v0?.(""), _v2 && (0, _v114.deleteCookie)(_v2));
    }, [_v46, _v2]), (0, _v9.useEffect)(() => {
      _v32 && 5 === _v5 && _v86.GoogleTagManager.trackEvent("live_event_ended_for_viewer");
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
      _v38(_v153("workflow.visit_svv_recipient", 7, {
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
      children: [(0, _v7.jsx)(_v167, {}), _v34 && !_v19 && (0, _v7.jsx)(_v266, {
        href: _v15
      }), (0, _v7.jsx)(_v168, {
        children: (0, _v7.jsxs)(_v169, {
          isMobile: _v19,
          children: [(0, _v7.jsx)(_v158, {}), (0, _v7.jsxs)(_v170, {
            isMobile: _v19,
            isPortrait: _v37,
            children: [(0, _v7.jsxs)(_v171, {
              isMobile: _v19,
              isPortrait: _v37,
              isChatOpen: _v26 && !_v19,
              children: [(0, _v7.jsxs)(_v172, {
                isMobile: _v19,
                isPortrait: _v37,
                children: [(!_v50 || _v49) && _v7 ? (0, _v7.jsx)(_v275, {
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
                }) : _v43 ? (0, _v7.jsx)(_v263, {
                  isUnrated: _v41,
                  redirectUrl: _v44
                }) : (0, _v7.jsx)(_v262, {
                  ref: _v35
                }), (0, _v7.jsx)(_v183, {
                  isMobile: _v19,
                  isPortrait: _v37,
                  paddingEnabled: !1,
                  children: (0, _v7.jsxs)(_v173, {
                    isFullWidth: !1,
                    children: [_v29 && (0, _v7.jsxs)(_v174, {
                      children: [(0, _v7.jsxs)(_v176, {
                        children: [(0, _v7.jsx)(_v88.Calendar, {}), (0, _v7.jsx)(_v177, {
                          children: _v29.toFormat("LLL d")
                        })]
                      }), (0, _v7.jsxs)(_v176, {
                        children: [(0, _v7.jsx)(_v89.ClockThree, {}), (0, _v7.jsx)(_v177, {
                          children: _v29.toFormat("t ZZZZ")
                        })]
                      })]
                    }), (0, _v7.jsxs)(_v175, {
                      children: [(0, _v7.jsx)(_v178, {
                        content: _v10,
                        allowNewLines: !1,
                        contentEditable: !1,
                        shouldDisplayLinks: !1
                      }), (0, _v7.jsx)(_v269, {
                        display: !_v40 && _v14?.view === _v48,
                        isUnrated: _v41
                      }), _v11 && (0, _v7.jsx)(_v109, {
                        contentEditable: !1,
                        text: _v11
                      })]
                    }), _v42 && (0, _v7.jsxs)(_v187, {
                      children: [(0, _v7.jsx)(_v189, {}), (0, _v7.jsx)(_v188, {
                        children: _v35.thisVideoContainsAdvertisment
                      })]
                    })]
                  })
                }), _v19 && (0, _v7.jsx)(_v140, {
                  isChatAvailable: _v18,
                  isPanelExpanded: _v20,
                  isChatSheetView: !0,
                  onOpen: () => _v21(!0),
                  onClose: () => _v21(!1),
                  onPanelOpenChange: _v23
                })]
              }), _v19 || !_v31 ? null : (0, _v7.jsx)(_v180, {
                children: (0, _v7.jsx)(_v116.EssentialFooter, {
                  ..._v31,
                  enableQuotaMenu: !1,
                  position: "absolute"
                })
              })]
            }), !_v19 && (0, _v7.jsx)(_v140, {
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
  var _v114 = _v114,
    _v279 = _v0.i(0),
    _v280 = _v0.i(0),
    _v281 = _v0.i(0),
    _v282 = _v0.i(0);
  async function _v283(_v0, _v1) {
    let _v2 = await fetch(`//${_v1.apiUrl}/live_chat/${_v0}/status`, {
      headers: {
        Authorization: `jwt ${_v1.jwt}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
    if (_v2.ok) return (0, _v282.camelize)(await _v2.json()).chatEnabled;
    throw Error("Failed to fetch chat status data.");
  }
  let _v284 = _v16.default.div.withConfig({
      displayName: "EventInteractionToolsLegacy__InteractionToolsContainerDesktop",
      componentId: "sc-fcf4bbc4-0"
    })`
  z-index: 5;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  max-width: ${(0, _v29.rem)(420)};
  border-left: 1px solid ${_v279.core.color.stroke};
`,
    _v285 = _v16.default.div.withConfig({
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
          bottom: ${_v2 ? (0, _v29.rem)(-72) : 0};
          left: 0;
          z-index: 5;
          border-top: 1px solid ${_v279.core.color.stroke};
        ` : _v16.css`
          position: relative;
          z-index: 5;
          flex-shrink: 0;
          border-left: 1px solid ${_v279.core.color.stroke};
          margin-left: ${_v1};
          transition: margin-left 200ms ease;

          @media screen and (max-width: ${(0, _v29.rem)(660)}) {
            position: absolute;
            top: ${(0, _v29.rem)(64)};
            right: 0;
            bottom: 0;
            margin-left: 0;
          }
        `};
`,
    _v286 = (0, _v9.memo)(function ({
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
        } = _v71(),
        _v10 = function (_v0 = 300) {
          let [_v1, _v2] = (0, _v9.useState)(!1);
          return (0, _v9.useLayoutEffect)(() => {
            if (_v281.browserConfig.BROWSER?.isMobile && "visualViewport" in window) {
              let _v0 = (0, _v280.default)(() => {
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
        _v11 = (0, _v9.useMemo)(() => _v64(), []),
        _v12 = _v125.EComposerSessionType.LIVE_EVENT,
        _v13 = !!_v9?.hasRegistration,
        _v14 = (0, _v9.useMemo)(() => _v11 ? _v285 : _v284, [_v11]),
        _v15 = (0, _v9.useMemo)(() => (_v0 ? window.visualViewport.height : window.visualViewport.width) * .75, [_v0]),
        _v16 = (0, _v9.useMemo)(() => _v0 ? "0" : _v4 ? `-${(0, _v29.rem)(_v15 - _v2)}` : "0", [_v15, _v4, _v0, _v2]),
        _v17 = function (_v0) {
          let _v1 = (0, _v117.useViewer)(),
            [_v2, _v3] = (0, _v9.useState)(!1),
            [_v4, _v5] = (0, _v9.useState)(!1),
            _v6 = !!_v0?.live?.chat?.roomId;
          return (0, _v9.useEffect)(() => {
            if (_v6 && _v1) {
              let _v0 = _v0?.live?.chat?.roomId;
              setTimeout(async () => {
                try {
                  let _v0 = await _v283(_v0, _v1);
                  _v3(_v0);
                } catch (_v0) {
                  console.error(_v0);
                }
              });
              let _v1 = setInterval(async () => {
                try {
                  _v3(await _v283(_v0, _v1));
                } catch (_v0) {}
              }, 0);
              return () => clearInterval(_v1);
            }
            _v3(!1);
          }, [_v0?.live?.chat?.roomId, _v6, _v1]), (0, _v9.useEffect)(() => {
            _v5(!!(_v6 && _v2));
          }, [_v6, _v2]), _v4;
        }(_v9?.streamableClip),
        _v18 = (0, _v9.useCallback)(_v0 => {
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
        children: (0, _v7.jsx)(_v135.InteractionToolsRegistrantObserver, {
          isActive: _v13,
          sessionId: _v6,
          children: _v17 ? (0, _v7.jsx)(_v134.InteractionToolsEntry, {
            isCustomThemeEnabled: !0,
            isFooterEnabled: !1,
            isManagementDisabled: !0,
            isCollapsibleSignIn: !0,
            isActiveStatusObservingEnabled: !1,
            isBypassStatusObservingEnabled: !0,
            sessionType: _v12,
            sessionId: _v6,
            roomHashedPassword: _v8,
            roomUnlistedHash: _v7,
            toolbarPanelMaxSize: _v2,
            toolbarPanelOnToggleExtend: _v18
          }) : null
        })
      });
    }),
    _v287 = (0, _v141.default)(async () => ({
      default: (await _v0.A(0)).AccountMenuWithModals
    }), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v288 = ({
      setTeamAccentColor: _v0
    }) => {
      let _v1 = (0, _v9.useContext)(_v28.ViewerContext),
        {
          eventData: _v2,
          shouldShowJoinCTA: _v3
        } = _v71(),
        {
          user: _v4
        } = _v2,
        _v5 = _v4.account === _v149.AccountType.Basic,
        _v6 = _v4.uri,
        _v7 = (0, _v107.useAnalyticsEvent)(),
        {
          data: _v8,
          loading: _v9
        } = (0, _v143.useQuery)(`${_v6}/team`, {
          variables: {
            fields: _v60
          }
        });
      if ((0, _v9.useEffect)(() => {
        _v8?.accentColor && _v0 && _v0(_v8.accentColor);
      }, [_v8?.accentColor, _v0]), _v5) return (0, _v7.jsx)(_v290, {
        children: (0, _v7.jsx)(_v146.Header, {
          clickJoinAnalyticsEvent: () => _v7(_v155())
        })
      });
      let _v10 = _v8?.pictures?.sizes,
        _v11 = _v10?.length ? _v10.length - 1 : 0;
      return (0, _v7.jsxs)(_v289, {
        children: [(0, _v7.jsx)(_v148.HeaderLeftContent, {
          children: !_v9 && (0, _v7.jsx)(_v147.default, {
            teamLogoUrl: _v8?.pictures?.sizes?.[_v11]?.link,
            teamName: _v8?.teamName
          })
        }), (0, _v7.jsx)(_v148.HeaderRightContent, {
          children: _v1?.user ? (0, _v7.jsx)(_v9.Suspense, {
            fallback: (0, _v7.jsx)(_v142.Spinner, {
              size: "sm"
            }),
            children: (0, _v7.jsx)(_v287, {})
          }) : _v3 ? (0, _v7.jsx)(_v16.ThemeProvider, {
            theme: _v144.themes.light,
            children: (0, _v7.jsx)(_v145.LoginJoinModal, {
              type: "join",
              xsrft: _v1?.xsrft || "",
              onSuccess: _v65,
              children: _v0 => (0, _v7.jsx)(_v148.HeaderButton, {
                id: "join-vimeo",
                color: _v8?.accentColor,
                element: "button",
                onClick: () => {
                  _v0(), _v7(_v154()), _v156("join");
                },
                children: _v35.joinVimeoCaption
              })
            })
          }) : null
        })]
      });
    },
    _v289 = (0, _v16.default)(_v148.HeaderMinimalWrapper).withConfig({
      displayName: "EventRecipientHeaderLegacy__StyledHeaderContainer",
      componentId: "sc-caa53fa0-0"
    })`
  z-index: ${({
      isEditingMode: _v0
    }) => _v0 ? "auto" : "15"};
  background: ${({
      theme: _v0
    }) => (0, _v29.rgba)(_v0.content.background, .95)};
  color: ${({
      theme: _v0
    }) => _v0.additions.content.color};
  position: absolute;
  border-bottom: none;
`,
    _v290 = _v16.default.div.withConfig({
      displayName: "EventRecipientHeaderLegacy__AppShellNavContainer",
      componentId: "sc-caa53fa0-1"
    })`
  position: absolute;
  width: 100%;
  z-index: 3;
  @media screen and (min-width: ${(0, _v29.rem)(769)}) {
    /**
     * The LoginJoinModal is nested inside the Header component which has a z-index of 14.
     * We need to increase the z-index a bit so the player trackbar doesn't sit on top of the modal.
     */
    z-index: 15;
  }
`,
    _v291 = _v16.default.div.withConfig({
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
    _v292 = _v16.default.div.withConfig({
      displayName: "LayoutLegacy__PageContainerContent",
      componentId: "sc-a6aba083-1"
    })`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  min-height: 100vh;
  position: relative;
`,
    _v293 = _v16.default.div.withConfig({
      displayName: "LayoutLegacy__ContentContainer",
      componentId: "sc-a6aba083-2"
    })`
  display: flex;
  margin: ${(0, _v29.rem)(63)} 0 0 0;
  border-top: 1px solid ${_v279.core.color.stroke};
  justify-content: flex-end;
  overflow: auto;

  ${({
      isMobile: _v0,
      isPortrait: _v1
    }) => `
      flex-direction: ${_v0 && _v1 ? "column" : "row"};
      height: ${_v0 ? `calc(100vh - ${(0, _v29.rem)(63)})` : "100%"};
    `}
`,
    _v294 = _v16.default.div.withConfig({
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
              @media screen and (max-width: ${(0, _v29.rem)(660)}) {
                margin-right: ${(0, _v29.rem)(72)};
              }
            ` : ""}
    `}
`,
    _v295 = _v16.default.div.withConfig({
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
          max-width: ${_v1 ? "100vw" : `calc((100vh - ${(0, _v29.rem)(64)}) / 0.5625)`};
        ` : _v16.css`
          max-width: calc(100vw - ${(0, _v29.rem)(40)});
          margin: ${(0, _v29.rem)(20)} ${(0, _v29.rem)(12)} ${(0, _v29.rem)(20)};

          @media screen and (min-width: ${(0, _v29.rem)(769)}) {
            max-width: calc(100vw - ${(0, _v29.rem)(240)});
          }

          @media screen and (min-width: ${(0, _v29.rem)(0)}) {
            max-width: calc(100vw - ${(0, _v29.rem)(240)});
          }
        `};
`,
    _v296 = _v16.default.div.withConfig({
      displayName: "LayoutLegacy__TitleAndDescription",
      componentId: "sc-a6aba083-5"
    })`
  width: ${({
      isFullWidth: _v0
    }) => _v0 ? "100%" : `calc(100% - ${(0, _v29.rem)(80)})`};
  display: flex;
  flex-direction: column;
  gap: ${(0, _v29.rem)(4)};

  @media screen and (min-width: ${(0, _v29.rem)(769)}) {
    width: 100%;
    align-self: flex-start;
  }

  @media screen and (max-width: ${(0, _v29.rem)(480)}) {
    width: 100%;
    padding-bottom: ${(0, _v29.rem)(72)};
  }
`,
    _v297 = (0, _v16.default)(_v97).withConfig({
      displayName: "LayoutLegacy__Title",
      componentId: "sc-a6aba083-6"
    })`
  font-size: ${(0, _v29.rem)(32)};
  font-weight: 700;
  letter-spacing: ${(0, _v29.rem)(-.8)};
  padding: ${(0, _v29.rem)(5)};
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
  }) => `${(0, _v29.rem)(1)} solid ${_v0.additions.content.border3}`};
`;
  let _v298 = _v16.default.div.withConfig({
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
  min-width: ${(0, _v29.rem)(240)};
  width: 100%;
  overflow: hidden;
  height: fit-content;
  flex-shrink: 0;
  ${({
    isMobile: _v0,
    isPortrait: _v1
  }) => _v16.css`
    max-width: ${_v0 && !_v1 ? `calc((100vh - ${(0, _v29.rem)(64)}) / 0.5625)` : "calc(50vh / 0.5625)"};
    margin: 0 auto;

    @media screen and (min-width: ${(0, _v29.rem)(769)}) {
      max-width: calc(
        (100vh - ${(0, _v29.rem)(_v0 ? _v1 ? 264 : 64 : 264)}) /
          ${.5625}
      );
      padding-top: ${_v0 ? _v1 ? (0, _v29.rem)(8) : 0 : (0, _v29.rem)(8)};
    }
  `};

  ${_v298} {
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
  let _v299 = _v16.default.div.withConfig({
    displayName: "LayoutLegacy__EventInfoContainer",
    componentId: "sc-a6aba083-10"
  })`
  flex-direction: column;
  display: flex;
  margin-top: ${(0, _v29.rem)(10)};
  width: 100%;

  ${({
    paddingEnabled: _v0,
    isMobile: _v1,
    isPortrait: _v2
  }) => _v16.css`
    padding-bottom: ${_v0 ? (0, _v29.rem)(48) : 0};
    max-width: ${_v1 && !_v2 ? `calc((100vh - ${(0, _v29.rem)(64)}) / 0.5625)` : "calc(50vh / 0.5625)"};

    @media screen and (min-width: ${(0, _v29.rem)(769)}) {
      max-width: calc(
        (100vh - ${(0, _v29.rem)(_v1 ? _v2 ? 264 : 64 : 264)}) /
          ${.5625}
      );
    }
  `}
`;
  (0, _v16.default)(_v164.Notification).withConfig({
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
  min-width: ${(0, _v29.rem)(240)};
  max-width: calc(50vh / ${.5625});
  margin: 0 auto;
  height: 0;
  padding-bottom: ${56.25}%;

  @media screen and (min-width: ${(0, _v29.rem)(769)}) {
    width: calc((100vh - ${(0, _v29.rem)(264)}) / ${.5625});
    max-width: 100%;
    padding-top: ${(0, _v29.rem)(8)};
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
    font-size: ${(0, _v29.rem)(16)};
  }
`, (0, _v16.default)(_v166.Paragraph).withConfig({
    displayName: "LayoutLegacy__Caption",
    componentId: "sc-a6aba083-14"
  })`
  font-size: ${(0, _v29.rem)(16)};
  margin-bottom: ${(0, _v29.rem)(25)};
  color: white;
`;
  let _v300 = _v16.default.div.withConfig({
      displayName: "LayoutLegacy__AdvertisingLabelWrapper",
      componentId: "sc-a6aba083-15"
    })`
  display: flex;
  align-items: center;
  padding: ${(0, _v29.rem)(5)};
`,
    _v301 = _v16.default.span.withConfig({
      displayName: "LayoutLegacy__AdvertisingLabel",
      componentId: "sc-a6aba083-16"
    })`
  padding-top: ${(0, _v29.rem)(1)};
  font-size: ${(0, _v29.rem)(12)};
  line-height: ${(0, _v29.rem)(15)};
  font-weight: 500;
  color: #496073;
`,
    _v302 = (0, _v16.default)(_v165.CircleInfoSmall).withConfig({
      displayName: "LayoutLegacy__InfoIcon",
      componentId: "sc-a6aba083-17"
    })`
  width: ${(0, _v29.rem)(24)};
  height: ${(0, _v29.rem)(24)};
`,
    _v303 = _v16.default.div.withConfig({
      displayName: "LayoutLegacy__LeadCaptureLoading",
      componentId: "sc-a6aba083-18"
    })`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
  function _v304({
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
      _v17 = (0, _v117.useViewer)(),
      _v18 = _v17?.user ?? null,
      _v19 = _v17?.ofcomQualifies,
      _v20 = !!_v12?.interactions?.edit,
      _v21 = (0, _v9.useRef)(null),
      _v22 = (0, _v9.useMemo)(() => _v64(), []),
      _v23 = (0, _v115.useIsPortraitScreenOrientation)(),
      _v24 = (0, _v107.useAnalyticsEvent)(),
      _v25 = _v6?.contentRating,
      _v26 = !!_v25?.includes(_v45),
      _v27 = !!_v25?.includes(_v44),
      _v28 = !!_v25?.includes(_v46),
      _v29 = null === _v18 && _v19 && (_v14?.view === _v48 || _v14?.view === _v49 || _v14?.view === _v50) && !_v26,
      _v30 = _v6 ? `${window.location.origin}/event/${_v4}${_v6.uri}` : window.location.href,
      _v31 = _v1 ? _v23.PREVIEW_TYPE.CONFIRMATION : _v8,
      {
        registrant: _v32,
        liveStatus: {
          data: {
            status: _v33
          },
          initialDataLoaded: _v34
        }
      } = _v83(),
      _v35 = (_v32.data.isBlocked && _v32.called || !_v32.initialDataLoaded) && _v33 !== _v52,
      _v36 = _v33 === _v52 || _v33 === _v51 && _v1 || _v1 && [4, 2].includes(_v5),
      _v37 = _v0 => {
        if (![_v23.PREVIEW_TYPE.FORM, _v23.PREVIEW_TYPE.LOGIN_SCREEN].includes(_v0)) return;
        let _v1 = _v16.asPath.split("?"),
          _v2 = _v1[0].replace(/\/$/, ""),
          _v3 = _v2.split("/").pop(),
          _v4 = void 0 !== _v1[1] ? `?${_v1[1]}` : "",
          _v5 = _v0 === _v23.PREVIEW_TYPE.FORM ? _v53.REGISTER : _v53.SIGNIN;
        if (Object.values(_v53).includes(_v3)) {
          let _v0 = _v2.replace(_v3, _v5);
          _v16.push(`${_v0}${_v4}`);
        } else _v16.push(`${_v2}/${_v5}${_v4}`);
      };
    return ((0, _v9.useEffect)(() => {
      !_v32.loading && _v32.called && !_v32.data.isValidRegistrant && (_v0?.(""), _v2 && (0, _v114.deleteCookie)(_v2));
    }, [_v32, _v2]), (0, _v9.useEffect)(() => {
      _v18 && 5 === _v5 && _v86.GoogleTagManager.trackEvent("live_event_ended_for_viewer");
    }, [_v5, _v18]), (0, _v9.useEffect)(() => {
      _v24(_v153("workflow.visit_svv_recipient", 7, {
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
      children: [_v20 && !_v22 && (0, _v7.jsx)(_v266, {
        href: _v15
      }), _v34 ? (0, _v7.jsx)(_v272.LeadCaptureView, {
        previewType: _v31,
        type: _v161.ENTITY_TYPE.EVENT,
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
          if (Object.values(_v53).includes(_v2)) {
            let _v0 = _v1.replace(_v2, "");
            _v16.push(`${_v0}${_v3}`);
          }
        }
      }) : (0, _v7.jsx)(_v303, {
        children: (0, _v7.jsx)(_v142.Spinner, {})
      })]
    }) : (0, _v7.jsxs)(_v7.Fragment, {
      children: [_v20 && !_v22 && (0, _v7.jsx)(_v266, {
        href: _v15
      }), (0, _v7.jsx)(_v291, {
        children: (0, _v7.jsxs)(_v292, {
          isMobile: _v22,
          children: [(0, _v7.jsx)(_v288, {}), (0, _v7.jsxs)(_v293, {
            isMobile: _v22,
            isPortrait: _v23,
            children: [(0, _v7.jsxs)(_v294, {
              isMobile: _v22,
              isPortrait: _v23,
              children: [(0, _v7.jsxs)(_v295, {
                isMobile: _v22,
                isPortrait: _v23,
                children: [_v29 ? (0, _v7.jsx)(_v263, {
                  isUnrated: _v27,
                  redirectUrl: _v30
                }) : (0, _v7.jsx)(_v262, {
                  ref: _v21
                }), (0, _v7.jsx)(_v299, {
                  isMobile: _v22,
                  isPortrait: _v23,
                  paddingEnabled: !1,
                  children: (0, _v7.jsxs)(_v296, {
                    isFullWidth: !1,
                    children: [(0, _v7.jsx)(_v297, {
                      content: _v10,
                      allowNewLines: !1,
                      contentEditable: !1,
                      shouldDisplayLinks: !1
                    }), (0, _v7.jsx)(_v269, {
                      display: !_v26 && _v14?.view === _v48,
                      isUnrated: _v27
                    }), _v11 && (0, _v7.jsx)(_v109, {
                      contentEditable: !1,
                      text: _v11
                    }), _v28 && (0, _v7.jsxs)(_v300, {
                      children: [(0, _v7.jsx)(_v302, {}), (0, _v7.jsx)(_v301, {
                        children: _v35.thisVideoContainsAdvertisment
                      })]
                    })]
                  })
                })]
              }), _v22 || !_v17 ? null : (0, _v7.jsx)(_v116.EssentialFooter, {
                ..._v17,
                enableQuotaMenu: !1,
                position: "absolute"
              })]
            }), (0, _v7.jsx)(_v286, {
              isPortrait: _v23,
              playerRef: _v21
            })]
          })]
        })
      })]
    });
  }
  let _v305 = _v0 => {
      let {
          eventId: _v1,
          eventHash: _v2
        } = _v0,
        _v3 = _v2 ? `${_v1}:${_v2}` : _v1,
        _v4 = (0, _v20.getLeadCaptureCookie)(_v3),
        [_v5, _v6] = (0, _v9.useState)(_v4),
        {
          settings: _v7
        } = (0, _v21.useOrionSettings)();
      return (0, _v9.useEffect)(() => {
        _v6(_v4);
      }, [_v4]), (0, _v7.jsx)(_v70, {
        ..._v0,
        leadUuid: _v5,
        children: (0, _v7.jsx)(_v82, {
          leadUuid: _v5,
          children: _v7.enable_event_series ? (0, _v7.jsx)(_v278, {
            setLeadUuid: _v6,
            leadUuid: _v5
          }) : (0, _v7.jsx)(_v304, {
            setLeadUuid: _v6,
            leadUuid: _v5
          })
        })
      });
    },
    _v306 = _v0 => (0, _v7.jsx)(_v16.ThemeProvider, {
      theme: _v17.applyCustomThemeSVV,
      children: (0, _v7.jsx)(_v18.PlayerContextProvider, {
        type: _v19.PlayerType.VimeoPlayer,
        assetUrls: _v0.playerAssetUrls,
        children: (0, _v7.jsx)(_v305, {
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
      } = (_v1 = _v5.length, _v2 = _v5[0], _v3 = null, _v4 = "", 4 === _v1 && "videos" === _v5[1] ? (_v4 = _v54.EVENT_VIDEO_HASH, _v3 = _v5[3]) : 3 === _v1 ? "videos" === _v5[1] ? _v4 = _v54.EVENT_VIDEO : "register" === _v5[2] ? (_v4 = _v54.EVENT_HASH_REGISTER, _v3 = _v5[1]) : "signin" === _v5[2] && (_v4 = _v54.EVENT_HASH_SIGNIN, _v3 = _v5[1]) : 2 === _v1 ? "register" === _v5[1] ? _v4 = _v54.EVENT_REGISTER : "signin" === _v5[1] ? _v4 = _v54.EVENT_SIGNIN : (_v4 = _v54.EVENT_HASH, _v3 = _v5[1]) : 1 === _v1 && (_v4 = _v54.EVENT), {
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
      _v3 = (0, _v9.useContext)(_v28.ViewerContext);
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
      }), _v3 && _v2.playerAssetUrls ? (0, _v7.jsx)(_v306, {
        ..._v2
      }) : null]
    });
  }], 0);
}