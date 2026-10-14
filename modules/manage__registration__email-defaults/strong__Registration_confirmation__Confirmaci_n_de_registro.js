{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = _v0 => (0, _v2.jsx)("strong", {
    children: _v0
  });
  var _v4 = _v0.i(0);
  let _v5 = {
      [_v4.EMAIL_TOGGLE_MAP.CONFIRMATION]: (0, _v1.translate)({
        singular: "Registration confirmation",
        dictionary: {
          es: {
            singular: "Confirmación de registro"
          },
          "de-DE": {
            singular: "Anmeldebestätigung"
          },
          "fr-FR": {
            singular: "Confirmation d'inscription"
          },
          "ja-JP": {
            singular: "登録確認"
          },
          "ko-KR": {
            singular: "등록 확인"
          },
          "pt-BR": {
            singular: "Confirmação de inscrição"
          },
          "zh-CN": {
            singular: "注册确认"
          }
        }
      }),
      [_v4.EMAIL_TOGGLE_MAP.FOLLOWUP]: (0, _v1.translate)({
        singular: "Auto-trigger upon event completion",
        dictionary: {
          es: {
            singular: "Envío automático al finalizar el evento"
          },
          "de-DE": {
            singular: "Automatisch senden bei Event-Abschluss"
          },
          "fr-FR": {
            singular: "Envoi automatique dès la fin de l'événement"
          },
          "ja-JP": {
            singular: "イベント完了時に自動送信する"
          },
          "ko-KR": {
            singular: "이벤트 완료 시 자동 전송"
          },
          "pt-BR": {
            singular: "Envio automático após a conclusão do evento"
          },
          "zh-CN": {
            singular: "活动完成后自动触发"
          }
        }
      })
    },
    _v6 = {
      [_v4.EMAIL_TEXT_STYLE.MIXED]: (0, _v1.translate)({
        singular: "Mixed",
        dictionary: {
          es: {
            singular: "Combinado"
          },
          "de-DE": {
            singular: "Gemischt"
          },
          "fr-FR": {
            singular: "Mixte"
          },
          "ja-JP": {
            singular: "組み合わせ"
          },
          "ko-KR": {
            singular: "혼합"
          },
          "pt-BR": {
            singular: "Combinado"
          },
          "zh-CN": {
            singular: "混合"
          }
        }
      }),
      [_v4.EMAIL_TEXT_STYLE.BOLD]: (0, _v1.translate)({
        singular: "Bold",
        dictionary: {
          es: {
            singular: "Negrita"
          },
          "de-DE": {
            singular: "Fett"
          },
          "fr-FR": {
            singular: "Gras"
          },
          "ja-JP": {
            singular: "太字"
          },
          "ko-KR": {
            singular: "굵게"
          },
          "pt-BR": {
            singular: "Negrito"
          },
          "zh-CN": {
            singular: "粗体"
          }
        }
      }),
      [_v4.EMAIL_TEXT_STYLE.REGULAR]: (0, _v1.translate)({
        singular: "Regular",
        dictionary: {
          "de-DE": {
            singular: "Normal"
          },
          "fr-FR": {
            singular: "Standard"
          },
          "ja-JP": {
            singular: "通常"
          },
          "ko-KR": {
            singular: "일반"
          },
          "pt-BR": {
            singular: "Normal"
          },
          "zh-CN": {
            singular: "常规"
          }
        }
      }),
      [_v4.EMAIL_TEXT_STYLE.ITALIC]: (0, _v1.translate)({
        singular: "Italic",
        dictionary: {
          es: {
            singular: "Cursiva"
          },
          "de-DE": {
            singular: "Kursiv"
          },
          "fr-FR": {
            singular: "Italique"
          },
          "ja-JP": {
            singular: "斜体"
          },
          "ko-KR": {
            singular: "기울임"
          },
          "pt-BR": {
            singular: "Itálico"
          },
          "zh-CN": {
            singular: "斜体"
          }
        }
      }),
      [_v4.EMAIL_TEXT_STYLE.UNDERLINE]: (0, _v1.translate)({
        singular: "Underline",
        dictionary: {
          es: {
            singular: "Subrayado"
          },
          "de-DE": {
            singular: "Unterstrichen"
          },
          "fr-FR": {
            singular: "Souligné"
          },
          "ja-JP": {
            singular: "下線"
          },
          "ko-KR": {
            singular: "밑줄"
          },
          "pt-BR": {
            singular: "Sublinhado"
          },
          "zh-CN": {
            singular: "下划线"
          }
        }
      })
    },
    _v7 = {
      [_v4.EMAIL_TEXT_SIZE.HUGE]: (0, _v1.translate)({
        singular: "Huge",
        dictionary: {
          es: {
            singular: "Gigante"
          },
          "de-DE": {
            singular: "Riesig"
          },
          "fr-FR": {
            singular: "Géant"
          },
          "ja-JP": {
            singular: "巨大"
          },
          "ko-KR": {
            singular: "거대"
          },
          "pt-BR": {
            singular: "Gigante"
          },
          "zh-CN": {
            singular: "巨大"
          }
        }
      }),
      [_v4.EMAIL_TEXT_SIZE.EXTRA_LARGE]: (0, _v1.translate)({
        singular: "Extra Large",
        dictionary: {
          es: {
            singular: "Extragrande"
          },
          "fr-FR": {
            singular: "Très large"
          },
          "ja-JP": {
            singular: "特大"
          },
          "ko-KR": {
            singular: "특대"
          },
          "pt-BR": {
            singular: "Extragrande"
          },
          "zh-CN": {
            singular: "特大"
          }
        }
      }),
      [_v4.EMAIL_TEXT_SIZE.LARGE]: (0, _v1.translate)({
        singular: "Large",
        dictionary: {
          es: {
            singular: "Grande"
          },
          "ja-JP": {
            singular: "大"
          },
          "ko-KR": {
            singular: "대"
          },
          "pt-BR": {
            singular: "Grande"
          },
          "zh-CN": {
            singular: "大"
          }
        }
      }),
      [_v4.EMAIL_TEXT_SIZE.REGULAR]: (0, _v1.translate)({
        singular: "Regular",
        dictionary: {
          "de-DE": {
            singular: "Normal"
          },
          "fr-FR": {
            singular: "Standard"
          },
          "ja-JP": {
            singular: "通常"
          },
          "ko-KR": {
            singular: "일반"
          },
          "pt-BR": {
            singular: "Normal"
          },
          "zh-CN": {
            singular: "常规"
          }
        }
      })
    },
    _v8 = {
      AccentColor: (0, _v1.translate)({
        singular: "Accent color",
        dictionary: {
          es: {
            singular: "Color de contraste"
          },
          "de-DE": {
            singular: "Farbakzent"
          },
          "fr-FR": {
            singular: "Accentuer la couleur"
          },
          "ja-JP": {
            singular: "アクセントカラー"
          },
          "ko-KR": {
            singular: "강조색"
          },
          "pt-BR": {
            singular: "Tom de cor"
          },
          "zh-CN": {
            singular: "强调色"
          }
        }
      }),
      Add: (0, _v1.translate)({
        singular: "Add",
        dictionary: {
          es: {
            singular: "Agregar"
          },
          "de-DE": {
            singular: "Hinzufügen"
          },
          "fr-FR": {
            singular: "Ajouter"
          },
          "ja-JP": {
            singular: "追加"
          },
          "ko-KR": {
            singular: "추가"
          },
          "pt-BR": {
            singular: "Adicionar"
          },
          "zh-CN": {
            singular: "添加"
          }
        }
      }),
      AddCalendar: (0, _v1.translate)({
        singular: "Add to calendar",
        dictionary: {
          es: {
            singular: "Agregar al calendario"
          },
          "de-DE": {
            singular: "Zum Kalender hinzufügen"
          },
          "fr-FR": {
            singular: "Ajouter au calendrier"
          },
          "ja-JP": {
            singular: "カレンダーに追加"
          },
          "ko-KR": {
            singular: "캘린더에 추가"
          },
          "pt-BR": {
            singular: "Adicionar ao calendário"
          },
          "zh-CN": {
            singular: "添加到日历"
          }
        }
      }),
      AddLink: (0, _v1.translate)({
        singular: "Add link",
        dictionary: {
          es: {
            singular: "Agregar enlace"
          },
          "de-DE": {
            singular: "Link hinzufügen"
          },
          "fr-FR": {
            singular: "Ajouter un lien"
          },
          "ja-JP": {
            singular: "リンクを追加"
          },
          "ko-KR": {
            singular: "링크 추가"
          },
          "pt-BR": {
            singular: "Adicionar link"
          },
          "zh-CN": {
            singular: "添加链接"
          }
        }
      }),
      BeginsShortly: (0, _v1.translate)({
        singular: "Begins shortly",
        dictionary: {
          es: {
            singular: "Comienza en breve"
          },
          "de-DE": {
            singular: "Beginnt in Kürze"
          },
          "fr-FR": {
            singular: "Commence sous peu"
          },
          "ja-JP": {
            singular: "まもなく開始します"
          },
          "ko-KR": {
            singular: "곧 시작합니다"
          },
          "pt-BR": {
            singular: "Começa em breve"
          },
          "zh-CN": {
            singular: "即将开始"
          }
        }
      }),
      Button: (0, _v1.translate)({
        singular: "Button",
        dictionary: {
          es: {
            singular: "Botón"
          },
          "fr-FR": {
            singular: "Bouton"
          },
          "ja-JP": {
            singular: "ボタン"
          },
          "ko-KR": {
            singular: "버튼"
          },
          "pt-BR": {
            singular: "Botão"
          },
          "zh-CN": {
            singular: "按钮"
          }
        }
      }),
      Cancel: (0, _v1.translate)({
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
      }),
      Change: (0, _v1.translate)({
        singular: "Change",
        dictionary: {
          es: {
            singular: "Cambiar"
          },
          "de-DE": {
            singular: "Ändern"
          },
          "fr-FR": {
            singular: "Modifier"
          },
          "ja-JP": {
            singular: "変更"
          },
          "ko-KR": {
            singular: "변경"
          },
          "pt-BR": {
            singular: "Alterar"
          },
          "zh-CN": {
            singular: "更改"
          }
        }
      }),
      ChangesCouldNotBeSaved: (0, _v1.translate)({
        singular: "Changes could not be saved",
        dictionary: {
          es: {
            singular: "No se pudieron guardar los cambios"
          },
          "de-DE": {
            singular: "Änderungen konnten nicht gespeichert werden"
          },
          "fr-FR": {
            singular: "Les modifications n'ont pas pu être enregistrées"
          },
          "ja-JP": {
            singular: "変更を保存できませんでした"
          },
          "ko-KR": {
            singular: "변경 사항이 저장되지 않았습니다"
          },
          "pt-BR": {
            singular: "As alterações não puderam ser salvas"
          },
          "zh-CN": {
            singular: "无法保存更改"
          }
        }
      }),
      ChangesSaved: (0, _v1.translate)({
        singular: "Changes saved",
        dictionary: {
          es: {
            singular: "Guardamos los cambios"
          },
          "de-DE": {
            singular: "Änderungen wurden gespeichert"
          },
          "fr-FR": {
            singular: "Changements sauvegardés"
          },
          "ja-JP": {
            singular: "変更内容が保存されました"
          },
          "ko-KR": {
            singular: "변경 사항 저장 완료"
          },
          "pt-BR": {
            singular: "Alterações salvas"
          },
          "zh-CN": {
            singular: "已保存更改"
          }
        }
      }),
      ChooseProperty: (0, _v1.translate)({
        singular: "Choose property",
        dictionary: {
          es: {
            singular: "Elegir la propiedad"
          },
          "de-DE": {
            singular: "Eigenschaft auswählen"
          },
          "fr-FR": {
            singular: "Choisir la propriété"
          },
          "ja-JP": {
            singular: "プロパティを選択"
          },
          "ko-KR": {
            singular: "속성 선택"
          },
          "pt-BR": {
            singular: "Selecione a propriedade"
          },
          "zh-CN": {
            singular: "选择属性"
          }
        }
      }),
      Color: (0, _v1.translate)({
        singular: "Color",
        dictionary: {
          "de-DE": {
            singular: "Farbe"
          },
          "fr-FR": {
            singular: "Couleur"
          },
          "ja-JP": {
            singular: "カラー"
          },
          "ko-KR": {
            singular: "색상"
          },
          "pt-BR": {
            singular: "Cor"
          },
          "zh-CN": {
            singular: "颜色"
          }
        }
      }),
      CustomLink: (0, _v1.translate)({
        singular: "Custom destination",
        dictionary: {
          es: {
            singular: "Destino personalizado"
          },
          "de-DE": {
            singular: "Benutzerdefinierter Zielort"
          },
          "fr-FR": {
            singular: "Destination personnalisée"
          },
          "ja-JP": {
            singular: "カスタム配信先"
          },
          "ko-KR": {
            singular: "커스텀 목적지"
          },
          "pt-BR": {
            singular: "Destino customizado"
          },
          "zh-CN": {
            singular: "自定义目标"
          }
        }
      }),
      CustomLinkSkipsOneClickJoin: (0, _v1.translate)({
        singular: "Registered attendees can join in one click from their email when you use the Vimeo link. A custom destination always asks them to sign in first.",
        dictionary: {
          es: {
            singular: "Los asistentes registrados pueden unirse con un solo clic desde su correo electrónico cuando se utiliza el enlace de Vimeo. Un destino personalizado siempre les solicita que inicien sesión primero."
          },
          "de-DE": {
            singular: "Registrierte Teilnehmende können mit einem Klick direkt aus ihrer E-Mail beitreten, wenn Sie den Vimeo-Link verwenden. Ein benutzerdefiniertes Ziel fordert sie immer zuerst auf, sich anzumelden."
          },
          "fr-FR": {
            singular: "Les participants inscrits peuvent rejoindre en un clic depuis leur e-mail lorsque vous utilisez le lien Vimeo. Une destination personnalisée leur demande toujours de se connecter au préalable."
          },
          "ja-JP": {
            singular: "Vimeoリンクを使用すると、登録済みの参加者はメールからワンクリックで参加できます。カスタム宛先では、常に事前にサインインを求められます。"
          },
          "ko-KR": {
            singular: "등록된 참석자는 Vimeo 링크를 사용할 경우 이메일에서 한 번의 클릭으로 참여할 수 있습니다. 사용자 지정 대상은 항상 먼저 로그인하도록 요청합니다."
          },
          "pt-BR": {
            singular: "Participantes registrados podem entrar com um clique a partir do e-mail quando você usa o link do Vimeo. Um destino personalizado sempre pede que eles façam login primeiro."
          },
          "zh-CN": {
            singular: "使用 Vimeo 链接时，已注册的参会者可在其电子邮件中一键加入。自定义目标始终要求他们先登录。"
          }
        }
      }),
      CustomRange: (0, _v1.translate)({
        singular: "Custom range",
        dictionary: {
          es: {
            singular: "Rango personalizado"
          },
          "de-DE": {
            singular: "Benutzerdefinierter Zeitraum"
          },
          "fr-FR": {
            singular: "Plage personnalisée"
          },
          "ja-JP": {
            singular: "カスタム範囲"
          },
          "ko-KR": {
            singular: "사용자 지정 범위"
          },
          "pt-BR": {
            singular: "Intervalo personalizado"
          },
          "zh-CN": {
            singular: "自定义范围"
          }
        }
      }),
      DuplicateReminder: (0, _v1.translate)({
        singular: "A reminder with this timing already exists.",
        dictionary: {
          es: {
            singular: "Ya existe un recordatorio con este horario."
          },
          "de-DE": {
            singular: "Für diesen Zeitpunkt existiert bereits eine Erinnerung."
          },
          "fr-FR": {
            singular: "Un rappel avec ce délai existe déjà."
          },
          "ja-JP": {
            singular: "このタイミングのリマインダーはすでに存在します。"
          },
          "ko-KR": {
            singular: "동일한 타이밍의 알림이 이미 존재합니다."
          },
          "pt-BR": {
            singular: "Já existe um lembrete com esse horário."
          },
          "zh-CN": {
            singular: "已存在具有此时间设置的提醒。"
          }
        }
      }),
      EmailPreview: (0, _v1.translate)({
        singular: "Email preview",
        dictionary: {
          es: {
            singular: "Previsualizar correo electrónico"
          },
          "de-DE": {
            singular: "E-Mail-Vorschau"
          },
          "fr-FR": {
            singular: "Aperçu de l'e-mail"
          },
          "ja-JP": {
            singular: "Eメールプレビュー"
          },
          "ko-KR": {
            singular: "이메일 미리 보기"
          },
          "pt-BR": {
            singular: "Pré-visualização do e-mail"
          },
          "zh-CN": {
            singular: "通过电子邮件发送预览"
          }
        }
      }),
      EnterValidURL: (0, _v1.translate)({
        singular: "Enter a valid URL",
        dictionary: {
          es: {
            singular: "Ingresar un URL válido"
          },
          "de-DE": {
            singular: "Gib eine gültige URL ein"
          },
          "fr-FR": {
            singular: "Saisissez une URL valide"
          },
          "ja-JP": {
            singular: "正しいURLを入力してください"
          },
          "ko-KR": {
            singular: "유효한 URL을 입력하세요."
          },
          "pt-BR": {
            singular: "Digite um URL válido"
          },
          "zh-CN": {
            singular: "输入有效的 URL"
          }
        }
      }),
      EmailTabName: (_v0, _v1) => {
        switch (_v0) {
          case _v4.EMAIL_TYPES.CONFIRMATION:
            return (0, _v1.translate)({
              count: _v1,
              singular: "Confirmation email",
              plural: "Confirmation emails",
              dictionary: {
                es: {
                  singular: "Correo de confirmación",
                  plural: "Correos electrónicos de confirmación"
                },
                "de-DE": {
                  singular: "Bestätigung",
                  plural: "Bestätigungs-E-Mails"
                },
                "fr-FR": {
                  singular: "E-mail de confirmation",
                  plural: "E-mails de confirmation"
                },
                "ja-JP": {
                  singular: "確認メール",
                  plural: "確認メール"
                },
                "ko-KR": {
                  singular: "확인 이메일",
                  plural: "확인 이메일"
                },
                "pt-BR": {
                  singular: "E-mail de confirmação",
                  plural: "E-mail de confirmação"
                },
                "zh-CN": {
                  singular: "确认电子邮件",
                  plural: "确认电子邮件"
                }
              }
            });
          case _v4.EMAIL_TYPES.REMINDER:
            return (0, _v1.translate)({
              count: _v1,
              singular: "Reminder email",
              plural: "Reminder emails",
              dictionary: {
                es: {
                  singular: "Correo de recordatorio",
                  plural: "Correos electrónicos de recordatorio"
                },
                "de-DE": {
                  singular: "Erinnerungs-E-Mail",
                  plural: "Erinnerungs-E-Mails"
                },
                "fr-FR": {
                  singular: "E-mail de rappel",
                  plural: "E-mails de rappel"
                },
                "ja-JP": {
                  singular: "リマインダーメール",
                  plural: "リマインダーメール"
                },
                "ko-KR": {
                  singular: "알림 이메일",
                  plural: "알림 이메일"
                },
                "pt-BR": {
                  singular: "E-mail de lembrete",
                  plural: "E-mails de lembrete"
                },
                "zh-CN": {
                  singular: "提醒电子邮件",
                  plural: "提醒电子邮件"
                }
              }
            });
          case _v4.EMAIL_TYPES.FOLLOWUP:
            return (0, _v1.translate)({
              count: _v1,
              singular: "Follow-up email",
              plural: "Follow-up emails",
              dictionary: {
                es: {
                  singular: "Correo de seguimiento"
                },
                "de-DE": {
                  singular: "Folge-E-Mail"
                },
                "fr-FR": {
                  singular: "E-mail de suivi"
                },
                "ja-JP": {
                  singular: "フォローアップメール"
                },
                "ko-KR": {
                  singular: "후속 이메일"
                },
                "pt-BR": {
                  singular: "E-mail de acompanhamento"
                },
                "zh-CN": {
                  singular: "跟进邮件"
                }
              }
            });
        }
      },
      EmailTextStyle: _v6,
      EmailTextSize: _v7,
      EmailToggle: _v5,
      EntityTitle: (0, _v1.translate)({
        singular: "Title",
        dictionary: {
          es: {
            singular: "Título"
          },
          "de-DE": {
            singular: "Titel"
          },
          "fr-FR": {
            singular: "Titre"
          },
          "ja-JP": {
            singular: "タイトル"
          },
          "ko-KR": {
            singular: "제목"
          },
          "pt-BR": {
            singular: "Título"
          },
          "zh-CN": {
            singular: "标题"
          }
        }
      }),
      FirstName: (0, _v1.translate)({
        singular: "First name",
        dictionary: {
          es: {
            singular: "Nombre"
          },
          "de-DE": {
            singular: "Vorname"
          },
          "fr-FR": {
            singular: "Prénom"
          },
          "ja-JP": {
            singular: "名"
          },
          "ko-KR": {
            singular: "이름"
          },
          "pt-BR": {
            singular: "Nome"
          },
          "zh-CN": {
            singular: "名字"
          }
        }
      }),
      EmailSent: (0, _v1.translate)({
        singular: "Success! Your email was sent.",
        dictionary: {
          es: {
            singular: "¡Éxito! Su correo electrónico ha sido enviado."
          },
          "de-DE": {
            singular: "Erfolgreich! Ihre E-Mail wurde gesendet."
          },
          "fr-FR": {
            singular: "Succès ! Votre e-mail a été envoyé."
          },
          "ja-JP": {
            singular: "成功！メールが送信されました。"
          },
          "ko-KR": {
            singular: "성공! 이메일이 전송되었습니다."
          },
          "pt-BR": {
            singular: "Sucesso! Seu e-mail foi enviado."
          },
          "zh-CN": {
            singular: "成功！您的邮件已发送。"
          }
        }
      }),
      FollowUpModalDescription: (0, _v1.translate)({
        singular: "Registered attendees will be emailed immediately. This email can only be sent once and cannot be unsent.",
        dictionary: {
          es: {
            singular: "A los asistentes registrados se les enviará un correo electrónico de inmediato. Este correo solo puede enviarse una vez y no puede deshacerse."
          },
          "de-DE": {
            singular: "Angemeldete Teilnehmer werden sofort per E-Mail benachrichtigt. Diese E-Mail kann nur einmal gesendet werden und lässt sich nicht rückgängig machen."
          },
          "fr-FR": {
            singular: "Les participants inscrits recevront immédiatement un e-mail. Cet e-mail ne peut être envoyé qu'une seule fois et ne peut pas être annulé."
          },
          "ja-JP": {
            singular: "登録済みの参加者にただちにメールが送信されます。このメールは一度しか送信できず、取り消すことはできません。"
          },
          "ko-KR": {
            singular: "등록된 참석자에게 즉시 이메일이 발송됩니다. 이 이메일은 한 번만 보낼 수 있으며 전송 취소할 수 없습니다."
          },
          "pt-BR": {
            singular: "Os participantes registrados receberão um e-mail imediatamente. Este e-mail só pode ser enviado uma vez e não pode ser desfeito."
          },
          "zh-CN": {
            singular: "已注册的参与者将会立即收到电子邮件。该邮件只能发送一次，无法撤回。"
          }
        }
      }),
      FollowUpModalHeader: (0, _v1.translate)({
        singular: "Send follow-up email to registered guests?",
        dictionary: {
          es: {
            singular: "¿Enviar correo de seguimiento a los asistentes registrados?"
          },
          "de-DE": {
            singular: "Follow-up-E-Mail an angemeldete Teilnehmer senden?"
          },
          "fr-FR": {
            singular: "Envoyer un e-mail de relance aux invités inscrits ?"
          },
          "ja-JP": {
            singular: "登録済みの参加者にフォローアップメールを送信しますか？"
          },
          "ko-KR": {
            singular: "등록된 참석자에게 후속 이메일을 보내시겠습니까?"
          },
          "pt-BR": {
            singular: "Enviar e-mail de acompanhamento para convidados registrados?"
          },
          "zh-CN": {
            singular: "要向已注册的嘉宾发送跟进邮件吗？"
          }
        }
      }),
      FollowUpNotification: (0, _v1.translate)({
        singular: "Follow-up emails are sent only when the event is completed",
        dictionary: {
          es: {
            singular: "Los correos de seguimiento se envían solo cuando el evento se ha completado"
          },
          "de-DE": {
            singular: "Follow-up-E-Mails werden nur gesendet, wenn die Veranstaltung abgeschlossen ist"
          },
          "fr-FR": {
            singular: "Les e-mails de relance sont envoyés uniquement lorsque l'événement est terminé"
          },
          "ja-JP": {
            singular: "フォローアップメールはイベントが完了したときにのみ送信されます"
          },
          "ko-KR": {
            singular: "후속 이메일은 이벤트가 완료된 경우에만 발송됩니다"
          },
          "pt-BR": {
            singular: "E-mails de acompanhamento são enviados somente quando o evento é concluído"
          },
          "zh-CN": {
            singular: "仅在活动完成后发送跟进邮件"
          }
        }
      }),
      Footer: (0, _v1.translate)({
        singular: "Footer",
        dictionary: {
          es: {
            singular: "Pie de página"
          },
          "de-DE": {
            singular: "Fußzeile"
          },
          "fr-FR": {
            singular: "Pied de page"
          },
          "ja-JP": {
            singular: "フッター"
          },
          "ko-KR": {
            singular: "바닥글"
          },
          "pt-BR": {
            singular: "Rodapé"
          },
          "zh-CN": {
            singular: "页脚"
          }
        }
      }),
      FooterCompanyAddress: (0, _v1.translate)({
        singular: "Company address",
        dictionary: {
          es: {
            singular: "Dirección de la empresa"
          },
          "de-DE": {
            singular: "Unternehmensadresse"
          },
          "fr-FR": {
            singular: "Adresse de l'entreprise"
          },
          "ja-JP": {
            singular: "会社所在地"
          },
          "ko-KR": {
            singular: "회사 주소"
          },
          "pt-BR": {
            singular: "Endereço da empresa"
          },
          "zh-CN": {
            singular: "公司地址"
          }
        }
      }),
      FooterPolicyLink: (0, _v1.translate)({
        singular: "Privacy policy url",
        dictionary: {
          es: {
            singular: "URL de la Política de privacidad"
          },
          "de-DE": {
            singular: "URL für Datenschutzerklärung"
          },
          "fr-FR": {
            singular: "URL de politique de confidentialité"
          },
          "ja-JP": {
            singular: "プライバシーポリシーのURL"
          },
          "ko-KR": {
            singular: "개인정보보호 정책 URL"
          },
          "pt-BR": {
            singular: "URL da Política de Privacidade"
          },
          "zh-CN": {
            singular: "隐私政策 URL"
          }
        }
      }),
      FooterReplayMail: (0, _v1.translate)({
        singular: "Reply email",
        dictionary: {
          es: {
            singular: "Responder correo electrónico"
          },
          "de-DE": {
            singular: "Auf E-Mail antworten"
          },
          "fr-FR": {
            singular: "Réponse – e-mail"
          },
          "ja-JP": {
            singular: "Eメールに返信"
          },
          "ko-KR": {
            singular: "이메일 회신"
          },
          "pt-BR": {
            singular: "Responder e-mail"
          },
          "zh-CN": {
            singular: "回复电子邮件"
          }
        }
      }),
      Format: (0, _v1.translate)({
        singular: "Format",
        dictionary: {
          es: {
            singular: "Formato"
          },
          "ja-JP": {
            singular: "フォーマット"
          },
          "ko-KR": {
            singular: "형식"
          },
          "pt-BR": {
            singular: "Formato"
          },
          "zh-CN": {
            singular: "格式"
          }
        }
      }),
      From: (0, _v1.translate)({
        singular: "From:",
        dictionary: {
          es: {
            singular: "De:"
          },
          "de-DE": {
            singular: "Von"
          },
          "fr-FR": {
            singular: "De :"
          },
          "ja-JP": {
            singular: "送り主："
          },
          "ko-KR": {
            singular: "보내는 사람:"
          },
          "pt-BR": {
            singular: "De:"
          },
          "zh-CN": {
            singular: "发件人："
          }
        }
      }),
      FromGeneral: (0, _v1.translate)({
        singular: "From",
        dictionary: {
          es: {
            singular: "De"
          },
          "de-DE": {
            singular: "Von"
          },
          "fr-FR": {
            singular: "Du"
          },
          "ja-JP": {
            singular: "次より選択"
          },
          "ko-KR": {
            singular: "다음에서 선택"
          },
          "pt-BR": {
            singular: "Do"
          },
          "zh-CN": {
            singular: "来自"
          }
        }
      }),
      FromTooltip: (0, _v1.translate)("This name appears as the sender of your event emails."),
      General: (0, _v1.translate)({
        singular: "General",
        dictionary: {
          "de-DE": {
            singular: "Allgemein"
          },
          "fr-FR": {
            singular: "Général"
          },
          "ja-JP": {
            singular: "一般"
          },
          "ko-KR": {
            singular: "일반"
          },
          "pt-BR": {
            singular: "Geral"
          },
          "zh-CN": {
            singular: "一般"
          }
        }
      }),
      InvalidURL: (0, _v1.translate)({
        singular: "Please enter a valid URL.",
        dictionary: {
          es: {
            singular: "Ingresa un URL válido."
          },
          "de-DE": {
            singular: "Bitte gib eine gültige URL an."
          },
          "fr-FR": {
            singular: "Veuillez saisir une URL valide."
          },
          "ja-JP": {
            singular: "有効なURLを入力してください。"
          },
          "ko-KR": {
            singular: "유효한 URL을 입력하세요."
          },
          "pt-BR": {
            singular: "Por favor digite um URL válido."
          },
          "zh-CN": {
            singular: "请输入有效的 URL。"
          }
        }
      }),
      InvalidInput: (0, _v1.translate)({
        singular: "Invalid input",
        dictionary: {
          es: {
            singular: "Entrada no válida"
          },
          "de-DE": {
            singular: "Ungültige Eingabe"
          },
          "fr-FR": {
            singular: "Entrée non valide"
          },
          "ja-JP": {
            singular: "無効な入力"
          },
          "ko-KR": {
            singular: "입력이 잘못되었습니다."
          },
          "pt-BR": {
            singular: "Entrada inválida"
          },
          "zh-CN": {
            singular: "无效输入"
          }
        }
      }),
      InvalidEmailAddress: (0, _v1.translate)({
        singular: "Invalid email address",
        dictionary: {
          es: {
            singular: "Dirección de correo electrónico inválida. "
          },
          "de-DE": {
            singular: "Ungültige E-Mail-Adresse "
          },
          "fr-FR": {
            singular: "Adresse e-mail non valide."
          },
          "ja-JP": {
            singular: "メールアドレスが無効です"
          },
          "ko-KR": {
            singular: "유효하지 않은 이메일 주소입니다"
          },
          "pt-BR": {
            singular: "Endereço de e-mail inválido. "
          },
          "zh-CN": {
            singular: "无效电子邮件地址"
          }
        }
      }),
      JoinEvent: (0, _v1.translate)({
        singular: "Join event",
        dictionary: {
          es: {
            singular: "Unirse al evento"
          },
          "de-DE": {
            singular: "Event beitreten"
          },
          "fr-FR": {
            singular: "Rejoindre l'événement"
          },
          "ja-JP": {
            singular: "イベントに参加"
          },
          "ko-KR": {
            singular: "이벤트 참여"
          },
          "pt-BR": {
            singular: "Participar do evento"
          },
          "zh-CN": {
            singular: "加入活动"
          }
        }
      }),
      LastName: (0, _v1.translate)({
        singular: "Last name",
        dictionary: {
          es: {
            singular: "Apellidos"
          },
          "de-DE": {
            singular: "Nachname"
          },
          "fr-FR": {
            singular: "Nom"
          },
          "ja-JP": {
            singular: "姓"
          },
          "ko-KR": {
            singular: "성"
          },
          "pt-BR": {
            singular: "Sobrenome"
          },
          "zh-CN": {
            singular: "姓氏"
          }
        }
      }),
      Loading: (0, _v1.translate)({
        singular: "Loading...",
        dictionary: {
          es: {
            singular: "Cargando..."
          },
          "de-DE": {
            singular: "Lädt ..."
          },
          "fr-FR": {
            singular: "Chargement..."
          },
          "ja-JP": {
            singular: "読み込み中..."
          },
          "ko-KR": {
            singular: "로드 중..."
          },
          "pt-BR": {
            singular: "Carregando..."
          },
          "zh-CN": {
            singular: "正在加载..."
          }
        }
      }),
      Logo: (0, _v1.translate)({
        singular: "Logo",
        dictionary: {
          "ja-JP": {
            singular: "ロゴ"
          },
          "ko-KR": {
            singular: "로고"
          },
          "zh-CN": {
            singular: "徽标"
          }
        }
      }),
      LogoOutOf: (_v0, _v1) => (0, _v1.translate)({
        singular: "{CURRENT_INDEX} of {TOTAL}",
        replacements: {
          CURRENT_INDEX: _v0,
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
      LogoFormatHint: (0, _v1.translate)("PNG or JPG"),
      NewReminderEmail: (0, _v1.translate)({
        singular: "New reminder email",
        dictionary: {
          es: {
            singular: "Nuevo correo de recordatorio"
          },
          "de-DE": {
            singular: "Neue Erinnerungs-E-Mail"
          },
          "fr-FR": {
            singular: "Nouvel e-mail de rappel"
          },
          "ja-JP": {
            singular: "新しいリマインダーメール"
          },
          "ko-KR": {
            singular: "새 알림 이메일"
          },
          "pt-BR": {
            singular: "Novo e-mail de lembrete"
          },
          "zh-CN": {
            singular: "新提醒邮件"
          }
        }
      }),
      PersonalizedTags: (0, _v1.translate)({
        singular: "Personalized tags",
        dictionary: {
          es: {
            singular: "Etiquetas personalizadas"
          },
          "de-DE": {
            singular: "Individuelle Tags"
          },
          "fr-FR": {
            singular: "Étiquettes personnalisées"
          },
          "ja-JP": {
            singular: "パーソナライズされたタグ"
          },
          "ko-KR": {
            singular: "개인 태그"
          },
          "pt-BR": {
            singular: "Tags personalizadas"
          },
          "zh-CN": {
            singular: "个性化标签"
          }
        }
      }),
      PersonalizedTagsDescription: (0, _v1.translate)({
        singular: "Click to add a dynamic tag, or information that the recipient provided with their registration.",
        dictionary: {
          es: {
            singular: "Haz clic para agregar una etiqueta dinámica o información que el destinatario proporcionó con su registro."
          },
          "de-DE": {
            singular: "Klicke, um ein dynamisches Tag oder Informationen hinzuzufügen, die die empfangende Person bei ihrer Registrierung angegeben hat."
          },
          "fr-FR": {
            singular: "Cliquez pour ajouter une étiquette dynamique, ou des informations que le destinataire a fournies lors de son inscription."
          },
          "ja-JP": {
            singular: "クリックして動的タグまたは受信者が登録時に提供した情報を追加します。"
          },
          "ko-KR": {
            singular: "동적 태그 또는 수신자가 등록 시 제공한 정보를 추가하려면 클릭하세요."
          },
          "pt-BR": {
            singular: "Clique para adicionar uma tag dinâmica ou informações que o destinatário forneceu com o registro."
          },
          "zh-CN": {
            singular: "点击可添加动态标签，或收件人在注册时提供的信息。"
          }
        }
      }),
      PleaseEnterValidEmail: (0, _v1.translate)({
        singular: "Please enter a valid email.",
        dictionary: {
          "zh-CN": {
            singular: "请输入有效的电子邮件。"
          }
        }
      }),
      PreviouslyUsed: (0, _v1.translate)({
        singular: "Previously used",
        dictionary: {
          es: {
            singular: "Usado anteriormente"
          },
          "de-DE": {
            singular: "Zuletzt verwendet"
          },
          "fr-FR": {
            singular: "Utilisé précédemment"
          },
          "ja-JP": {
            singular: "以前に使用した"
          },
          "ko-KR": {
            singular: "이전에 사용된 항목"
          },
          "pt-BR": {
            singular: "Usado anteriormente"
          },
          "zh-CN": {
            singular: "之前使用过"
          }
        }
      }),
      ReminderAlert: (0, _v1.translate)({
        singular: "Reminder alert",
        dictionary: {
          es: {
            singular: "Alerta de recordatorio"
          },
          "de-DE": {
            singular: "Erinnerungsbenachrichtigung"
          },
          "fr-FR": {
            singular: "Alerte de rappel"
          },
          "ja-JP": {
            singular: "リマインダー通知"
          },
          "ko-KR": {
            singular: "미리 알림 경고"
          },
          "pt-BR": {
            singular: "Alerta de lembrete"
          },
          "zh-CN": {
            singular: "提醒通知"
          }
        }
      }),
      ReminderAmount: (0, _v1.translate)({
        singular: "Reminder amount",
        dictionary: {
          es: {
            singular: "Cantidad del recordatorio"
          },
          "de-DE": {
            singular: "Erinnerungsanzahl"
          },
          "fr-FR": {
            singular: "Valeur du rappel"
          },
          "ja-JP": {
            singular: "リマインダーの数"
          },
          "ko-KR": {
            singular: "알림 수량"
          },
          "pt-BR": {
            singular: "Quantidade do lembrete"
          },
          "zh-CN": {
            singular: "提醒数值"
          }
        }
      }),
      ReminderScheduleDescription: (0, _v1.translate)({
        singular: "Schedule the email to notify registered users at the right time.",
        dictionary: {
          es: {
            singular: "Programa el correo para notificar a los usuarios registrados en el momento adecuado."
          },
          "de-DE": {
            singular: "Planen Sie die E-Mail, um registrierte Nutzer zur richtigen Zeit zu benachrichtigen."
          },
          "fr-FR": {
            singular: "Planifiez l'e-mail pour notifier les utilisateurs enregistrés au bon moment."
          },
          "ja-JP": {
            singular: "メールをスケジュールして、登録ユーザーに適切なタイミングで通知します。"
          },
          "ko-KR": {
            singular: "등록된 사용자에게 적시에 알림 이메일을 발송하도록 일정을 설정하세요."
          },
          "pt-BR": {
            singular: "Agende o e-mail para notificar os usuários registrados no momento certo."
          },
          "zh-CN": {
            singular: "安排该邮件在适当的时间通知已注册用户。"
          }
        }
      }),
      ReminderUnit: (0, _v1.translate)({
        singular: "Reminder unit",
        dictionary: {
          es: {
            singular: "Unidad del recordatorio"
          },
          "de-DE": {
            singular: "Erinnerungseinheit"
          },
          "fr-FR": {
            singular: "Unité du rappel"
          },
          "ja-JP": {
            singular: "リマインダーの単位"
          },
          "ko-KR": {
            singular: "알림 단위"
          },
          "pt-BR": {
            singular: "Unidade do lembrete"
          },
          "zh-CN": {
            singular: "提醒单位"
          }
        }
      }),
      Remove: (0, _v1.translate)({
        singular: "Remove",
        dictionary: {
          es: {
            singular: "Eliminar"
          },
          "de-DE": {
            singular: "Entfernen"
          },
          "fr-FR": {
            singular: "Supprimer"
          },
          "ja-JP": {
            singular: "削除"
          },
          "ko-KR": {
            singular: "제거"
          },
          "pt-BR": {
            singular: "Remover"
          },
          "zh-CN": {
            singular: "移除"
          }
        }
      }),
      Reset: (0, _v1.translate)({
        singular: "Reset",
        dictionary: {
          es: {
            singular: "Restablecer"
          },
          "de-DE": {
            singular: "Zurücksetzen"
          },
          "fr-FR": {
            singular: "Réinitialiser"
          },
          "ja-JP": {
            singular: "リセット"
          },
          "ko-KR": {
            singular: "재설정"
          },
          "pt-BR": {
            singular: "Redefinir"
          },
          "zh-CN": {
            singular: "重置"
          }
        }
      }),
      Save: (0, _v1.translate)({
        singular: "Save",
        dictionary: {
          es: {
            singular: "Guardar"
          },
          "de-DE": {
            singular: "Speichern"
          },
          "fr-FR": {
            singular: "Enregistrer"
          },
          "ja-JP": {
            singular: "保存"
          },
          "ko-KR": {
            singular: "저장"
          },
          "pt-BR": {
            singular: "Salvar"
          },
          "zh-CN": {
            singular: "保存"
          }
        }
      }),
      ScheduledDate: {
        Media: {
          Years: _v0 => (0, _v1.translate)({
            singular: "Starts {STRONG}automatically{/STRONG} in {YEARS} year",
            plural: "Starts {STRONG}automatically{/STRONG} in {YEARS} years",
            count: _v0,
            replacements: {
              YEARS: _v0,
              STRONG: _v3
            },
            dictionary: {
              es: {
                singular: "Comienza {STRONG}automáticamente{/STRONG} en {YEARS} año",
                plural: "Comienza {STRONG}automáticamente{/STRONG} en {YEARS} años"
              },
              "de-DE": {
                singular: "Fängt {STRONG}automatisch{/STRONG} in {YEARS} Jahr an",
                plural: "Fängt {STRONG}automatisch{/STRONG} in {YEARS} Jahren an"
              },
              "fr-FR": {
                singular: "Commence {STRONG}automatiquement{/STRONG} dans {YEARS} an",
                plural: "Commence {STRONG}automatiquement{/STRONG} dans {YEARS} ans"
              },
              "ja-JP": {
                singular: "{STRONG}自動{/STRONG}開始まであと{YEARS}年",
                plural: "{STRONG}自動{/STRONG}開始まであと{YEARS}年"
              },
              "ko-KR": {
                singular: "{YEARS}년 후에 {STRONG}자동으로{/STRONG} 시작",
                plural: "{YEARS}년 후에 {STRONG}자동으로{/STRONG} 시작"
              },
              "pt-BR": {
                singular: "Começará {STRONG}automaticamente{/STRONG} em {YEARS} ano",
                plural: "Começará {STRONG}automaticamente{/STRONG} em {YEARS} anos"
              },
              "zh-CN": {
                singular: "{YEARS} 年后{STRONG}自动{/STRONG}开始",
                plural: "{YEARS} 年后{STRONG}自动{/STRONG}开始"
              }
            }
          }),
          Month: _v0 => (0, _v1.translate)({
            singular: "Starts {STRONG}automatically{/STRONG} in {MONTHS} month",
            plural: "Starts {STRONG}automatically{/STRONG} in {MONTHS} months",
            count: _v0,
            replacements: {
              MONTHS: _v0,
              STRONG: _v3
            },
            dictionary: {
              es: {
                singular: "Comienza {STRONG}automáticamente{/STRONG} en {MONTHS} mes",
                plural: "Comienza {STRONG}automáticamente{/STRONG} en {MONTHS} meses"
              },
              "de-DE": {
                singular: "Fängt {STRONG}automatisch{/STRONG} in {MONTHS} Monat an",
                plural: "Fängt {STRONG}automatisch{/STRONG} in {MONTHS} Monaten an"
              },
              "fr-FR": {
                singular: "Commence {STRONG}automatiquement{/STRONG} dans {MONTHS} mois",
                plural: "Commence {STRONG}automatiquement{/STRONG} dans {MONTHS} mois"
              },
              "ja-JP": {
                singular: "{STRONG}自動{/STRONG}開始まであと{MONTHS}か月",
                plural: "{STRONG}自動{/STRONG}開始まであと{MONTHS}か月"
              },
              "ko-KR": {
                singular: "{MONTHS}개월 후에 {STRONG}자동으로{/STRONG} 시작",
                plural: "{MONTHS}개월 후에 {STRONG}자동으로{/STRONG} 시작"
              },
              "pt-BR": {
                singular: "Começará {STRONG}automaticamente{/STRONG} em {MONTHS} mês",
                plural: "Começará {STRONG}automaticamente{/STRONG} em {MONTHS} meses"
              },
              "zh-CN": {
                singular: "{MONTHS} 个月后{STRONG}自动{/STRONG}开始",
                plural: "{MONTHS} 个月后{STRONG}自动{/STRONG}开始"
              }
            }
          }),
          Minutes: _v0 => (0, _v1.translate)({
            singular: "Starts {STRONG}automatically{/STRONG} in {MINUTE} minute",
            plural: "Starts {STRONG}automatically{/STRONG} in {MINUTE} minutes",
            count: _v0,
            replacements: {
              MINUTE: _v0,
              STRONG: _v3
            },
            dictionary: {
              es: {
                singular: "Comienza {STRONG}automáticamente{/STRONG} en {MINUTE} minuto",
                plural: "Comienza {STRONG}automáticamente{/STRONG} en {MINUTE} minutos"
              },
              "de-DE": {
                singular: "Fängt {STRONG}automatisch{/STRONG} in {MINUTE} Minute an",
                plural: "Fängt {STRONG}automatisch{/STRONG} in {MINUTE} Minuten an"
              },
              "fr-FR": {
                singular: "Commence {STRONG}automatiquement{/STRONG} dans {MINUTE} minute",
                plural: "Commence {STRONG}automatiquement{/STRONG} dans {MINUTE} minutes"
              },
              "ja-JP": {
                singular: "{STRONG}自動{/STRONG}開始まであと{MINUTE}分",
                plural: "{STRONG}自動{/STRONG}開始まであと{MINUTE}分"
              },
              "ko-KR": {
                singular: "{MINUTE}분 후에 {STRONG}자동으로{/STRONG} 시작",
                plural: "{MINUTE}분 후에 {STRONG}자동으로{/STRONG} 시작"
              },
              "pt-BR": {
                singular: "Começará {STRONG}automaticamente{/STRONG} em {MINUTE} minuto",
                plural: "Começará {STRONG}automaticamente{/STRONG} em {MINUTE} minutos"
              },
              "zh-CN": {
                singular: "{MINUTE} 分钟后{STRONG}自动{/STRONG}开始",
                plural: "{MINUTE} 分钟后{STRONG}自动{/STRONG}开始"
              }
            }
          }),
          HoursMinute: (_v0, _v1) => (0, _v1.translate)({
            singular: "Starts {STRONG}automatically{/STRONG} in {HOUR} hour, {MINUTE} minutes",
            plural: "Starts {STRONG}automatically{/STRONG} in {HOUR} hours, {MINUTE} minutes",
            count: _v0,
            replacements: {
              MINUTE: _v1,
              HOUR: _v0,
              STRONG: _v3
            },
            dictionary: {
              es: {
                singular: "Comienza {STRONG}automáticamente{/STRONG} en {HOUR} hora, {MINUTE} minutos",
                plural: "Comienza {STRONG}automáticamente{/STRONG} en {HOUR} horas, {MINUTE} minutos"
              },
              "de-DE": {
                singular: "Fängt {STRONG}automatisch{/STRONG} in {HOUR} Stunde, {MINUTE} Minuten an",
                plural: "Fängt {STRONG}automatisch{/STRONG} in {HOUR} Stunden, {MINUTE} Minuten an"
              },
              "fr-FR": {
                singular: "Commence {STRONG}automatiquement{/STRONG} dans {HOUR} heure et {MINUTE} minutes",
                plural: "Commence {STRONG}automatiquement{/STRONG} dans {HOUR} heures et {MINUTE} minutes"
              },
              "ja-JP": {
                singular: "{STRONG}自動{/STRONG}開始まであと{HOUR}時間{MINUTE}分",
                plural: "{STRONG}自動{/STRONG}開始まであと{HOUR}時間{MINUTE}分"
              },
              "ko-KR": {
                singular: "{HOUR}시간 {MINUTE}분 후에 {STRONG}자동으로{/STRONG} 시작",
                plural: "{HOUR}시간 {MINUTE}분 후에 {STRONG}자동으로{/STRONG} 시작"
              },
              "pt-BR": {
                singular: "Começará {STRONG}automaticamente{/STRONG} em {HOUR} hora e {MINUTE} minutos",
                plural: "Começará {STRONG}automaticamente{/STRONG} em {HOUR} horas e {MINUTE} minutos"
              },
              "zh-CN": {
                singular: "{HOUR} 小时 {MINUTE} 分钟后{STRONG}自动{/STRONG}开始",
                plural: "{HOUR} 小时 {MINUTE} 分钟后{STRONG}自动{/STRONG}开始"
              }
            }
          }),
          HoursMinutes: (_v0, _v1) => (0, _v1.translate)({
            singular: "Starts {STRONG}automatically{/STRONG} in {HOUR} hours, {MINUTE} minute",
            plural: "Starts {STRONG}automatically{/STRONG} in {HOUR} hours, {MINUTE} minutes",
            count: _v1,
            replacements: {
              MINUTE: _v1,
              HOUR: _v0,
              STRONG: _v3
            },
            dictionary: {
              es: {
                singular: "Comienza {STRONG}automáticamente{/STRONG} en {HOUR} horas, {MINUTE} minuto",
                plural: "Comienza {STRONG}automáticamente{/STRONG} en {HOUR} horas, {MINUTE} minutos"
              },
              "de-DE": {
                singular: "Fängt {STRONG}automatisch{/STRONG} in {HOUR} Stunden, {MINUTE} Minute an",
                plural: "Fängt {STRONG}automatisch{/STRONG} in {HOUR} Stunden, {MINUTE} Minuten an"
              },
              "fr-FR": {
                singular: "Commence {STRONG}automatiquement{/STRONG} dans {HOUR} heures et {MINUTE} minute",
                plural: "Commence {STRONG}automatiquement{/STRONG} dans {HOUR} heures et {MINUTE} minutes"
              },
              "ja-JP": {
                singular: "{STRONG}自動{/STRONG}開始まであと{HOUR}時間{MINUTE}分",
                plural: "{STRONG}自動{/STRONG}開始まであと{HOUR}時間{MINUTE}分"
              },
              "ko-KR": {
                singular: "{HOUR}시간 {MINUTE}분 후에 {STRONG}자동으로{/STRONG} 시작",
                plural: "{HOUR}시간 {MINUTE}분 후에 {STRONG}자동으로{/STRONG} 시작"
              },
              "pt-BR": {
                singular: "Começará {STRONG}automaticamente{/STRONG} em {HOUR} horas e {MINUTE} minuto",
                plural: "Começará {STRONG}automaticamente{/STRONG} em {HOUR} horas e {MINUTE} minutos"
              },
              "zh-CN": {
                singular: "{HOUR} 小时 {MINUTE} 分钟后{STRONG}自动{/STRONG}开始",
                plural: "{HOUR} 小时 {MINUTE} 分钟后{STRONG}自动{/STRONG}开始"
              }
            }
          }),
          HourMinute: (_v0, _v1) => (0, _v1.translate)({
            singular: "Starts {STRONG}automatically{/STRONG} in {HOUR} hour, {MINUTE} minute",
            replacements: {
              MINUTE: _v1,
              HOUR: _v0,
              STRONG: _v3
            },
            dictionary: {
              es: {
                singular: "Comienza {STRONG}automáticamente{/STRONG} en {HOUR} hora, {MINUTE} minuto"
              },
              "de-DE": {
                singular: "Fängt {STRONG}automatisch{/STRONG} in {HOUR} Stunde, {MINUTE} Minute an"
              },
              "fr-FR": {
                singular: "Commence {STRONG}automatiquement{/STRONG} dans {HOUR} heure et {MINUTE} minute"
              },
              "ja-JP": {
                singular: "{STRONG}自動{/STRONG}開始まであと{HOUR}時間{MINUTE}分"
              },
              "ko-KR": {
                singular: "{HOUR}시간 {MINUTE}분 후에 {STRONG}자동으로{/STRONG} 시작"
              },
              "pt-BR": {
                singular: "Começará {STRONG}automaticamente{/STRONG} em {HOUR} hora e {MINUTE} minuto"
              },
              "zh-CN": {
                singular: "{HOUR} 小时 {MINUTE} 分钟后{STRONG}自动{/STRONG}开始"
              }
            }
          }),
          DayHours: (_v0, _v1) => (0, _v1.translate)({
            singular: "Starts {STRONG}automatically{/STRONG} in {DAY} day, {HOUR} hours",
            plural: "Starts {STRONG}automatically{/STRONG} in {DAY} days, {HOUR} hours",
            count: _v0,
            replacements: {
              DAY: _v0,
              HOUR: _v1,
              STRONG: _v3
            },
            dictionary: {
              es: {
                singular: "Comienza {STRONG}automáticamente{/STRONG} en {DAY} día, {HOUR} horas",
                plural: "Comienza {STRONG}automáticamente{/STRONG} en {DAY} días, {HOUR} horas"
              },
              "de-DE": {
                singular: "Fängt {STRONG}automatisch{/STRONG} in {DAY} Tag, {HOUR} Stunden an",
                plural: "Fängt {STRONG}automatisch{/STRONG} in {DAY} Tagen, {HOUR} Stunden an"
              },
              "fr-FR": {
                singular: "Commence {STRONG}automatiquement{/STRONG} dans {DAY} jour et {HOUR} heures",
                plural: "Commence {STRONG}automatiquement{/STRONG} dans {DAY} jours et {HOUR} heures"
              },
              "ja-JP": {
                singular: "{STRONG}自動{/STRONG}開始まであと{DAY}日と{HOUR}時間",
                plural: "{STRONG}自動{/STRONG}開始まであと{DAY}日と{HOUR}時間"
              },
              "ko-KR": {
                singular: "{DAY}일 {HOUR}시간 후에 {STRONG}자동으로{/STRONG} 시작",
                plural: "{DAY}일 {HOUR}시간 후에 {STRONG}자동으로{/STRONG} 시작"
              },
              "pt-BR": {
                singular: "Começará {STRONG}automaticamente{/STRONG} em {DAY} dia e {HOUR} horas",
                plural: "Começará {STRONG}automaticamente{/STRONG} em {DAY} dias e {HOUR} horas"
              },
              "zh-CN": {
                singular: "{DAY} 天 {HOUR} 小时后{STRONG}自动{/STRONG}启动",
                plural: "{DAY} 天 {HOUR} 小时后{STRONG}自动{/STRONG}启动"
              }
            }
          }),
          DaysHours: (_v0, _v1) => (0, _v1.translate)({
            singular: "Starts {STRONG}automatically{/STRONG} in {DAY} days, {HOUR} hour",
            plural: "Starts {STRONG}automatically{/STRONG} in {DAY} days, {HOUR} hours",
            count: _v1,
            replacements: {
              DAY: _v0,
              HOUR: _v1,
              STRONG: _v3
            },
            dictionary: {
              es: {
                singular: "Comienza {STRONG}automáticamente{/STRONG} en {DAY} días, {HOUR} hora",
                plural: "Comienza {STRONG}automáticamente{/STRONG} en {DAY} días, {HOUR} horas"
              },
              "de-DE": {
                singular: "Fängt {STRONG}automatisch{/STRONG} in {DAY} Tagen, {HOUR} Stunde an",
                plural: "Fängt {STRONG}automatisch{/STRONG} in {DAY} Tagen, {HOUR} Stunden an"
              },
              "fr-FR": {
                singular: "Commence {STRONG}automatiquement{/STRONG} dans {DAY} jours et {HOUR} heure",
                plural: "Commence {STRONG}automatiquement{/STRONG} dans {DAY} jours et {HOUR} heures"
              },
              "ja-JP": {
                singular: "{STRONG}自動{/STRONG}開始まであと{DAY}日と{HOUR}時間",
                plural: "{STRONG}自動{/STRONG}開始まであと{DAY}日と{HOUR}時間"
              },
              "ko-KR": {
                singular: "{DAY}일 {HOUR}시간 후에 {STRONG}자동으로{/STRONG} 시작",
                plural: "{DAY}일 {HOUR}시간 후에 {STRONG}자동으로{/STRONG} 시작"
              },
              "pt-BR": {
                singular: "Começará {STRONG}automaticamente{/STRONG} em {DAY} dias e {HOUR} hora",
                plural: "Começará {STRONG}automaticamente{/STRONG} em {DAY} dias e {HOUR} horas"
              },
              "zh-CN": {
                singular: "{DAY} 天 {HOUR} 小时后{STRONG}自动{/STRONG}开始",
                plural: "{DAY} 天 {HOUR} 小时后{STRONG}自动{/STRONG}启动"
              }
            }
          }),
          DayHour: (_v0, _v1) => (0, _v1.translate)({
            singular: "Starts {STRONG}automatically{/STRONG} in {DAY} day, {HOUR} hour",
            replacements: {
              DAY: _v0,
              HOUR: _v1,
              STRONG: _v3
            },
            dictionary: {
              es: {
                singular: "Comienza {STRONG}automáticamente{/STRONG} en {DAY} día, {HOUR} hora"
              },
              "de-DE": {
                singular: "Fängt {STRONG}automatisch{/STRONG} in {DAY} Tag, {HOUR} Stunde an"
              },
              "fr-FR": {
                singular: "Commence {STRONG}automatiquement{/STRONG} dans {DAY} jour et {HOUR} heure"
              },
              "ja-JP": {
                singular: "{STRONG}自動{/STRONG}開始まであと{DAY}日と{HOUR}時間"
              },
              "ko-KR": {
                singular: "{DAY}일 {HOUR}시간 후에 {STRONG}자동으로{/STRONG} 시작"
              },
              "pt-BR": {
                singular: "Começará {STRONG}automaticamente{/STRONG} em {DAY} dia e {HOUR} hora"
              },
              "zh-CN": {
                singular: "{DAY} 天 {HOUR} 小时后{STRONG}自动{/STRONG}启动"
              }
            }
          })
        },
        Live: {
          Years: _v0 => (0, _v1.translate)({
            singular: "Starts in {YEARS} year",
            plural: "Starts in {YEARS} years",
            count: _v0,
            replacements: {
              YEARS: _v0
            },
            dictionary: {
              es: {
                singular: "Empieza en {YEARS} año",
                plural: "Empieza en {YEARS} años"
              },
              "de-DE": {
                singular: "Beginnt in {YEARS} Jahr",
                plural: "Beginnt in {YEARS} Jahren"
              },
              "fr-FR": {
                singular: "Démarre dans {YEARS} an",
                plural: "Démarre dans {YEARS} ans"
              },
              "ja-JP": {
                singular: "あと {YEARS}年で開始",
                plural: "あと {YEARS}年で開始"
              },
              "ko-KR": {
                singular: "{YEARS}년 후 시작",
                plural: "{YEARS}년 후 시작"
              },
              "pt-BR": {
                singular: "Começa em {YEARS} ano",
                plural: "Começa em {YEARS} anos"
              },
              "zh-CN": {
                singular: "{YEARS} 年后开始",
                plural: "{YEARS} 年后开始"
              }
            }
          }),
          Month: _v0 => (0, _v1.translate)({
            singular: "Starts in {MONTHS} month",
            plural: "Starts in {MONTHS} months",
            count: _v0,
            replacements: {
              MONTHS: _v0
            },
            dictionary: {
              es: {
                singular: "Empieza en {MONTHS} mes",
                plural: "Empieza en {MONTHS} meses"
              },
              "de-DE": {
                singular: "Beginnt in {MONTHS} Monat",
                plural: "Beginnt in {MONTHS} Monaten"
              },
              "fr-FR": {
                singular: "Démarre dans {MONTHS} mois",
                plural: "Démarre dans {MONTHS} mois"
              },
              "ja-JP": {
                singular: "あと {MONTHS}ヶ月で開始",
                plural: "あと {MONTHS}ヶ月で開始"
              },
              "ko-KR": {
                singular: "{MONTHS}개월 후 시작",
                plural: "{MONTHS}개월 후 시작"
              },
              "pt-BR": {
                singular: "Começa em {MONTHS} mês",
                plural: "Começa em {MONTHS} meses"
              },
              "zh-CN": {
                singular: "{MONTHS} 个月后开始",
                plural: "{MONTHS} 个月后开始"
              }
            }
          }),
          Minutes: _v0 => (0, _v1.translate)({
            singular: "Starts in {MINUTE} minute",
            plural: "Starts in {MINUTE} minutes",
            count: _v0,
            replacements: {
              MINUTE: _v0
            },
            dictionary: {
              es: {
                singular: "Comienza en {MINUTE} minuto",
                plural: "Comienza en {MINUTE} minutos"
              },
              "de-DE": {
                singular: "Fängt in {MINUTE} Minute an",
                plural: "Fängt in {MINUTE} Minuten an"
              },
              "fr-FR": {
                singular: "Commence dans {MINUTE} minute",
                plural: "Commence dans {MINUTE} minutes"
              },
              "ja-JP": {
                singular: "開始まであと {MINUTE}分",
                plural: "開始まであと {MINUTE}分"
              },
              "ko-KR": {
                singular: "{MINUTE}분 후 시작",
                plural: "{MINUTE}분 후 시작"
              },
              "pt-BR": {
                singular: "Começa em {MINUTE} minuto",
                plural: "Começa em {MINUTE} minutos"
              },
              "zh-CN": {
                singular: "{MINUTE} 分钟后开始",
                plural: "{MINUTE} 分钟后开始"
              }
            }
          }),
          HoursMinute: (_v0, _v1) => (0, _v1.translate)({
            singular: "Starts in {HOUR} hour, {MINUTE} minutes",
            plural: "Starts in {HOUR} hours, {MINUTE} minutes",
            count: _v0,
            replacements: {
              MINUTE: _v1,
              HOUR: _v0
            },
            dictionary: {
              es: {
                singular: "Comienza en {HOUR} hora, {MINUTE} minutos",
                plural: "Comienza en {HOUR} horas, {MINUTE} minutos"
              },
              "de-DE": {
                singular: "Fängt in {HOUR} Stunde, {MINUTE} Minuten an",
                plural: "Fängt in {HOUR} Stunden, {MINUTE} Minuten an"
              },
              "fr-FR": {
                singular: "Commence dans {HOUR} heure et {MINUTE} minutes",
                plural: "Commence dans {HOUR} heures et {MINUTE} minutes"
              },
              "ja-JP": {
                singular: "開始まであと {HOUR}時間 {MINUTE}分",
                plural: "開始まであと {HOUR}時間 {MINUTE}分"
              },
              "ko-KR": {
                singular: "{HOUR}시간 {MINUTE}분 후 시작",
                plural: "{HOUR}시간 {MINUTE}분 후 시작"
              },
              "pt-BR": {
                singular: "Começa em {HOUR} hora, {MINUTE} minutos",
                plural: "Começa em {HOUR} horas, {MINUTE} minutos"
              },
              "zh-CN": {
                singular: "{HOUR} 小时 {MINUTE} 分钟后开始",
                plural: "{HOUR} 小时 {MINUTE} 分钟后开始"
              }
            }
          }),
          HoursMinutes: (_v0, _v1) => (0, _v1.translate)({
            singular: "Starts in {HOUR} hours, {MINUTE} minute",
            plural: "Starts in {HOUR} hours, {MINUTE} minutes",
            count: _v1,
            replacements: {
              MINUTE: _v1,
              HOUR: _v0
            },
            dictionary: {
              es: {
                singular: "Comienza en {HOUR} horas, {MINUTE} minuto",
                plural: "Comienza en {HOUR} horas, {MINUTE} minutos"
              },
              "de-DE": {
                singular: "Fängt in {HOUR} Stunden, {MINUTE} Minute an",
                plural: "Fängt in {HOUR} Stunden, {MINUTE} Minuten an"
              },
              "fr-FR": {
                singular: "Commence dans {HOUR} heures et {MINUTE} minute",
                plural: "Commence dans {HOUR} heures et {MINUTE} minutes"
              },
              "ja-JP": {
                singular: "開始まであと {HOUR}時間 {MINUTE}分",
                plural: "開始まであと {HOUR}時間 {MINUTE}分"
              },
              "ko-KR": {
                singular: "{HOUR}시간 {MINUTE}분 후 시작",
                plural: "{HOUR}시간 {MINUTE}분 후 시작"
              },
              "pt-BR": {
                singular: "Começa em {HOUR} horas, {MINUTE} minuto",
                plural: "Começa em {HOUR} horas, {MINUTE} minutos"
              },
              "zh-CN": {
                singular: "{HOUR} 小时 {MINUTE} 分钟后开始",
                plural: "{HOUR} 小时 {MINUTE} 分钟后开始"
              }
            }
          }),
          HourMinute: (_v0, _v1) => (0, _v1.translate)({
            singular: "Starts in {HOUR} hour, {MINUTE} minute",
            replacements: {
              MINUTE: _v1,
              HOUR: _v0
            },
            dictionary: {
              es: {
                singular: "Comienza en {HOUR} hora, {MINUTE} minuto"
              },
              "de-DE": {
                singular: "Fängt in {HOUR} Stunde, {MINUTE} Minute an"
              },
              "fr-FR": {
                singular: "Commence dans {HOUR} heure et {MINUTE} minute"
              },
              "ja-JP": {
                singular: "開始まであと {HOUR}時間 {MINUTE}分"
              },
              "ko-KR": {
                singular: "{HOUR}시간 {MINUTE}분 후 시작"
              },
              "pt-BR": {
                singular: "Começa em {HOUR} hora, {MINUTE} minuto"
              },
              "zh-CN": {
                singular: "{HOUR} 小时 {MINUTE} 分钟后开始"
              }
            }
          }),
          DayHours: (_v0, _v1) => (0, _v1.translate)({
            singular: "Starts in {DAY} day, {HOUR} hours",
            plural: "Starts in {DAY} days, {HOUR} hours",
            count: _v0,
            replacements: {
              DAY: _v0,
              HOUR: _v1
            },
            dictionary: {
              es: {
                singular: "Comienza en {DAY} día, {HOUR} horas",
                plural: "Comienza en {DAY} días, {HOUR} horas"
              },
              "de-DE": {
                singular: "Fängt in {DAY} Tag, {HOUR} Stunden an",
                plural: "Fängt in {DAY} Tagen, {HOUR} Stunden an"
              },
              "fr-FR": {
                singular: "Commence dans {DAY} jour et {HOUR} heures",
                plural: "Commence dans {DAY} jours et {HOUR} heures"
              },
              "ja-JP": {
                singular: "開始まであと {DAY}日・{HOUR}時間",
                plural: "開始まであと {DAY}日・{HOUR}時間"
              },
              "ko-KR": {
                singular: "{DAY}일 {HOUR}시간 후 시작",
                plural: "{DAY}일 {HOUR}시간 후 시작"
              },
              "pt-BR": {
                singular: "Começa em {DAY} dia, {HOUR} horas",
                plural: "Começa em {DAY} dias, {HOUR} horas"
              },
              "zh-CN": {
                singular: "{DAY} 天 {HOUR} 小时后开始",
                plural: "{DAY} 天 {HOUR} 小时后开始"
              }
            }
          }),
          DaysHours: (_v0, _v1) => (0, _v1.translate)({
            singular: "Starts in {DAY} days, {HOUR} hour",
            plural: "Starts in {DAY} days, {HOUR} hours",
            count: _v1,
            replacements: {
              DAY: _v0,
              HOUR: _v1
            },
            dictionary: {
              es: {
                singular: "Comienza en {DAY} días, {HOUR} hora",
                plural: "Comienza en {DAY} días, {HOUR} horas"
              },
              "de-DE": {
                singular: "Fängt in {DAY} Tagen, {HOUR} Stunde an",
                plural: "Fängt in {DAY} Tagen, {HOUR} Stunden an"
              },
              "fr-FR": {
                singular: "Commence dans {DAY} jours et {HOUR} heure",
                plural: "Commence dans {DAY} jours et {HOUR} heures"
              },
              "ja-JP": {
                singular: "開始まであと {DAY}日・{HOUR}時間",
                plural: "開始まであと {DAY}日・{HOUR}時間"
              },
              "ko-KR": {
                singular: "{DAY}일 {HOUR}시간 후 시작",
                plural: "{DAY}일 {HOUR}시간 후 시작"
              },
              "pt-BR": {
                singular: "Começa em {DAY} dias, {HOUR} horas",
                plural: "Começa em {DAY} dias, {HOUR} horas"
              },
              "zh-CN": {
                singular: "{DAY} 天 {HOUR} 小时后开始",
                plural: "{DAY} 天 {HOUR} 小时后开始"
              }
            }
          }),
          DayHour: (_v0, _v1) => (0, _v1.translate)({
            singular: "Starts in {DAY} day, {HOUR} hour",
            replacements: {
              DAY: _v0,
              HOUR: _v1
            },
            dictionary: {
              es: {
                singular: "Comienza en {DAY} día, {HOUR} hora"
              },
              "de-DE": {
                singular: "Fängt in {DAY} Tag, {HOUR} Stunde an"
              },
              "fr-FR": {
                singular: "Commence dans {DAY} jour et {HOUR} heure"
              },
              "ja-JP": {
                singular: "開始まであと {DAY}日・{HOUR}時間"
              },
              "ko-KR": {
                singular: "{DAY}일 {HOUR}시간 후 시작"
              },
              "pt-BR": {
                singular: "Começa em {DAY} dia, {HOUR} hora"
              },
              "zh-CN": {
                singular: "{DAY} 天 {HOUR} 小时后开始"
              }
            }
          })
        }
      },
      SelectLogo: (0, _v1.translate)("Select logo"),
      Send: (0, _v1.translate)({
        singular: "Send",
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
            singular: "전송"
          },
          "pt-BR": {
            singular: "Enviar"
          },
          "zh-CN": {
            singular: "发送"
          }
        }
      }),
      SendTest: (0, _v1.translate)({
        singular: "Send test",
        dictionary: {
          es: {
            singular: "Enviar prueba"
          },
          "de-DE": {
            singular: "Test-E-Mail senden"
          },
          "fr-FR": {
            singular: "Envoyer un test"
          },
          "ja-JP": {
            singular: "テストを送信"
          },
          "ko-KR": {
            singular: "테스트 전송"
          },
          "pt-BR": {
            singular: "Enviar teste"
          },
          "zh-CN": {
            singular: "发送测试"
          }
        }
      }),
      Size: (0, _v1.translate)({
        singular: "Size",
        dictionary: {
          es: {
            singular: "Tamaño"
          },
          "de-DE": {
            singular: "Größe"
          },
          "fr-FR": {
            singular: "Taille"
          },
          "ja-JP": {
            singular: "サイズ"
          },
          "ko-KR": {
            singular: "크기"
          },
          "pt-BR": {
            singular: "Tamanho"
          },
          "zh-CN": {
            singular: "大小"
          }
        }
      }),
      SomethingWentWrong: (0, _v1.translate)({
        singular: "Something Went Wrong.",
        dictionary: {
          es: {
            singular: "Algo salió mal."
          },
          "de-DE": {
            singular: "Hier ist etwas schiefgelaufen."
          },
          "fr-FR": {
            singular: "Une erreur s'est produite."
          },
          "ja-JP": {
            singular: "エラーが発生しました。"
          },
          "ko-KR": {
            singular: "문제가 발생했습니다."
          },
          "pt-BR": {
            singular: "Alguma coisa deu errado."
          },
          "zh-CN": {
            singular: "出错了。"
          }
        }
      }),
      Style: (0, _v1.translate)({
        singular: "Style",
        dictionary: {
          es: {
            singular: "Estilo"
          },
          "de-DE": {
            singular: "Design"
          },
          "ja-JP": {
            singular: "スタイル"
          },
          "ko-KR": {
            singular: "스타일"
          },
          "pt-BR": {
            singular: "Estilo"
          },
          "zh-CN": {
            singular: "样式"
          }
        }
      }),
      Subject: (0, _v1.translate)({
        singular: "Subject:",
        dictionary: {
          es: {
            singular: "Asunto:"
          },
          "de-DE": {
            singular: "Thema:"
          },
          "fr-FR": {
            singular: "Sujet :"
          },
          "ja-JP": {
            singular: "テーマ:"
          },
          "ko-KR": {
            singular: "제목:"
          },
          "pt-BR": {
            singular: "Assunto:"
          },
          "zh-CN": {
            singular: "主题："
          }
        }
      }),
      SubjectGeneral: (0, _v1.translate)({
        singular: "Subject",
        dictionary: {
          es: {
            singular: "Sujeto"
          },
          "de-DE": {
            singular: "Betreff"
          },
          "fr-FR": {
            singular: "Sujet"
          },
          "ja-JP": {
            singular: "テーマ"
          },
          "ko-KR": {
            singular: "주제"
          },
          "pt-BR": {
            singular: "Tema"
          },
          "zh-CN": {
            singular: "主题"
          }
        }
      }),
      TeamName: (0, _v1.translate)({
        singular: "Team Name",
        dictionary: {
          es: {
            singular: "Nombre del equipo"
          },
          "de-DE": {
            singular: "Team-Name"
          },
          "fr-FR": {
            singular: "Nom de l'équipe"
          },
          "ja-JP": {
            singular: "チーム名"
          },
          "ko-KR": {
            singular: "팀 이름"
          },
          "pt-BR": {
            singular: "Nome da equipe"
          },
          "zh-CN": {
            singular: "团队名称"
          }
        }
      }),
      Text: (0, _v1.translate)({
        singular: "Text",
        dictionary: {
          es: {
            singular: "Texto"
          },
          "fr-FR": {
            singular: "Texte"
          },
          "ja-JP": {
            singular: "テキスト"
          },
          "ko-KR": {
            singular: "텍스트"
          },
          "pt-BR": {
            singular: "Texto"
          },
          "zh-CN": {
            singular: "文本"
          }
        }
      }),
      URL: (0, _v1.translate)({
        singular: "URL",
        dictionary: {
          "pt-BR": {
            singular: "customizada"
          }
        }
      }),
      Upload: (0, _v1.translate)({
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
      UploadFailed: (0, _v1.translate)({
        singular: "Upload failed",
        dictionary: {
          es: {
            singular: "Error en la subida"
          },
          "de-DE": {
            singular: "Hochladen ist fehlgeschlagen"
          },
          "fr-FR": {
            singular: "Échec de la mise en ligne"
          },
          "ja-JP": {
            singular: "アップロードが失敗しました"
          },
          "ko-KR": {
            singular: "업로드 실패"
          },
          "pt-BR": {
            singular: "Falha no carregamento"
          },
          "zh-CN": {
            singular: "上传失败"
          }
        }
      }),
      UploadImage: (0, _v1.translate)({
        singular: "Upload image",
        dictionary: {
          es: {
            singular: "Subir imagen"
          },
          "de-DE": {
            singular: "Bild hochladen"
          },
          "fr-FR": {
            singular: "Téléverser une image"
          },
          "ja-JP": {
            singular: "画像をアップロード"
          },
          "ko-KR": {
            singular: "이미지 업로드"
          },
          "pt-BR": {
            singular: "Enviar imagem"
          },
          "zh-CN": {
            singular: "上传图片"
          }
        }
      }),
      VerifyEmail: (0, _v1.translate)({
        singular: "Verify your email address to send a test email",
        dictionary: {
          es: {
            singular: "Verifique su dirección de correo electrónico para enviar un correo electrónico de prueba"
          },
          "de-DE": {
            singular: "Überprüfen Sie Ihre E-Mail-Adresse, um eine Test-E-Mail zu senden"
          },
          "fr-FR": {
            singular: "Vérifiez votre adresse e-mail avant d'envoyer le message test"
          },
          "ja-JP": {
            singular: "テストメール送信のため、メールアドレスをご確認ください"
          },
          "ko-KR": {
            singular: "테스트 이메일을 보내려면 이메일 주소를 확인하세요."
          },
          "pt-BR": {
            singular: "Confirme seu endereço de e-mail para enviar um e-mail de teste"
          },
          "zh-CN": {
            singular: "验证您的电子邮件地址，发送测试电子邮件"
          }
        }
      }),
      VimeoLink: (0, _v1.translate)({
        singular: "Vimeo link (default)",
        dictionary: {
          es: {
            singular: "Enlace de Vimeo (predeterminado)"
          },
          "de-DE": {
            singular: "Vimeo-Link (Standard)"
          },
          "fr-FR": {
            singular: "Lien Vimeo (par défaut)"
          },
          "ja-JP": {
            singular: "Vimeoリンク（デフォルト）"
          },
          "ko-KR": {
            singular: "Vimeo 링크 (기본)"
          },
          "pt-BR": {
            singular: "Link do Vimeo (padrão)"
          },
          "zh-CN": {
            singular: "Vimeo 链接（默认）"
          }
        }
      }),
      WatchNow: (0, _v1.translate)({
        singular: "Watch now",
        dictionary: {
          es: {
            singular: "Ver ahora"
          },
          "de-DE": {
            singular: "Anschauen"
          },
          "fr-FR": {
            singular: "Regarder"
          },
          "ja-JP": {
            singular: "今すぐ再生"
          },
          "ko-KR": {
            singular: "지금 시청하기"
          },
          "pt-BR": {
            singular: "Assistir agora"
          },
          "zh-CN": {
            singular: "立即观看"
          }
        }
      })
    },
    _v9 = {
      from: _v8.From,
      reply_email: _v8.FooterReplayMail,
      sender_policy_url: _v8.FooterPolicyLink,
      sender_address: _v8.FooterCompanyAddress,
      header: (0, _v1.translate)({
        singular: "Title",
        dictionary: {
          es: {
            singular: "Título"
          },
          "de-DE": {
            singular: "Titel"
          },
          "fr-FR": {
            singular: "Titre"
          },
          "ja-JP": {
            singular: "タイトル"
          },
          "ko-KR": {
            singular: "제목"
          },
          "pt-BR": {
            singular: "Título"
          },
          "zh-CN": {
            singular: "标题"
          }
        }
      }),
      body: (0, _v1.translate)({
        singular: "Description",
        dictionary: {
          es: {
            singular: "Descripción"
          },
          "de-DE": {
            singular: "Beschreibung"
          },
          "ja-JP": {
            singular: "説明"
          },
          "ko-KR": {
            singular: "설명"
          },
          "pt-BR": {
            singular: "Descrição"
          },
          "zh-CN": {
            singular: "描述"
          }
        }
      }),
      subject: _v8.SubjectGeneral,
      button_text: _v8.Button,
      button_link: _v8.Button
    },
    _v10 = {
      0: (0, _v1.translate)({
        singular: "Your message was detected as spam. Please try again with different text.",
        dictionary: {
          es: {
            singular: "Tu mensaje se detectó como correo no deseado. Cambia el texto y vuelve a intentarlo."
          },
          "de-DE": {
            singular: "Deine Nachricht wurde als Spam erkannt. Bitte versuche es erneut mit einem anderen Text."
          },
          "fr-FR": {
            singular: "Votre message a été identifié comme spam. Veuillez réessayer avec un autre texte."
          },
          "ja-JP": {
            singular: "あなたのメッセージはスパムとして検出されました。別のテキストでもう一度お試しください。"
          },
          "ko-KR": {
            singular: "회원님의 메시지가 스팸으로 감지되었습니다. 텍스트를 바꾸고 다시 시도해주세요."
          },
          "pt-BR": {
            singular: "Sua mensagem foi detectada como spam. Tente novamente com outro texto."
          },
          "zh-CN": {
            singular: "您的消息被检测为垃圾邮件。请使用不同文本重试。"
          }
        }
      }),
      0: _v8.InvalidInput,
      0: _v8.InvalidURL,
      0: _v8.InvalidEmailAddress,
      0: _v8.InvalidEmailAddress
    },
    _v11 = {
      [_v8.EntityTitle]: {
        label: [_v8.EntityTitle],
        value: "Entity.title"
      },
      [_v8.TeamName]: {
        label: [_v8.TeamName],
        value: "Team.name"
      },
      "First name": {
        label: [_v8.FirstName],
        value: "regForm.first_name"
      },
      "Last name": {
        label: [_v8.LastName],
        value: "regForm.last_name"
      }
    };
  _v0.s(["DYNAMIC_TAGS_MAP", 0, _v11, "ERROR_CODE", 0, _v10, "ERROR_EMAIL_FIELD_MAPPING", 0, _v9, "default", 0, _v8], 0);
  var _v12 = _v0.i(0);
  let _v13 = async (_v0, _v1) => await fetch(_v0, {
    method: "PUT",
    body: _v1,
    headers: {
      "Content-Type": _v1.type
    }
  });
  _v0.s(["findLogoIndex", 0, (_v0 = [], _v1) => _v0.findIndex(({
    uri: _v0
  }) => {
    let _v1 = (0, _v12.getLastIdFromUri)(_v0);
    return _v1 && _v1?.includes(_v1.toString());
  }), "getCustomLogoImagePayload", 0, _v0 => {
    let _v1 = _v0?.sizes?.length ?? 0;
    return {
      url: _v0?.sizes?.[_v1 - 1]?.link,
      id: _v0?.uri?.split("/").pop() || "",
      active: !0,
      response: _v0
    };
  }, "putFileUpload", 0, _v13], 0);
}