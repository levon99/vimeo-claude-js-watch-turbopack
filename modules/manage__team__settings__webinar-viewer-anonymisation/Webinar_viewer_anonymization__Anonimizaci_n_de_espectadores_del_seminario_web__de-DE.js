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
  let _v35 = () => ({
      Title: (0, _v34.translate)({
        singular: "Webinar viewer anonymization",
        dictionary: {
          es: {
            singular: "Anonimización de espectadores del seminario web"
          },
          "de-DE": {
            singular: "Anonymisierung von Webinar-Zuschauern"
          },
          "fr-FR": {
            singular: "Anonymisation des spectateurs du webinaire"
          },
          "ja-JP": {
            singular: "ウェビナー視聴者の匿名化"
          },
          "ko-KR": {
            singular: "웨비나 시청자 익명화"
          },
          "pt-BR": {
            singular: "Anonimização de visualizadores do webinar"
          },
          "zh-CN": {
            singular: "网络研讨会观看者匿名化"
          }
        }
      }),
      Description: (0, _v34.translate)({
        singular: "Automatically anonymize webinar registrant personal data (name, email, custom fields) a set number of days after an event ends. Engagement analytics are kept; only the identity is removed.",
        dictionary: {
          es: {
            singular: "Anonimizar automáticamente los datos personales de los inscritos en el seminario web (nombre, correo electrónico, campos personalizados) un número determinado de días después de que termine el evento. Se conservan las analíticas de participación; solo se elimina la identidad."
          },
          "de-DE": {
            singular: "Persönliche Daten von Webinar-Registranten (Name, E-Mail, benutzerdefinierte Felder) automatisch eine festgelegte Anzahl von Tagen nach Ende einer Veranstaltung anonymisieren. Engagement-Analysen werden beibehalten; nur die Identität wird entfernt."
          },
          "fr-FR": {
            singular: "Anonymiser automatiquement les données personnelles des inscrits au webinaire (nom, e-mail, champs personnalisés) un nombre de jours défini après la fin d'un événement. Les analyses d'engagement sont conservées ; seule l'identité est supprimée."
          },
          "ja-JP": {
            singular: "イベント終了後、指定した日数が経過すると、ウェビナーの登録者の個人データ（氏名、メールアドレス、カスタムフィールド）を自動的に匿名化します。エンゲージメント分析は保持され、本人の識別情報のみが削除されます。"
          },
          "ko-KR": {
            singular: "이벤트 종료 후 설정한 일정 일수 이후에 웨비나 등록자의 개인 정보(이름, 이메일, 사용자 정의 필드)를 자동으로 익명화합니다. 참여 분석은 유지되며 신원 정보만 제거됩니다."
          },
          "pt-BR": {
            singular: "Anonimize automaticamente os dados pessoais dos inscritos no webinar (nome, e-mail, campos personalizados) após um número determinado de dias do término do evento. As análises de engajamento são mantidas; apenas a identidade é removida."
          },
          "zh-CN": {
            singular: "在活动结束后一定天数，自动对网络研讨会注册者的个人数据（姓名、电子邮件、自定义字段）进行匿名化。保留参与度分析，仅移除身份信息。"
          }
        }
      }),
      AnonymizationPeriod: (0, _v34.translate)({
        singular: "Anonymization period",
        dictionary: {
          es: {
            singular: "Período de anonimización"
          },
          "de-DE": {
            singular: "Anonymisierungszeitraum"
          },
          "fr-FR": {
            singular: "Période d'anonymisation"
          },
          "ja-JP": {
            singular: "匿名化期間"
          },
          "ko-KR": {
            singular: "익명화 기간"
          },
          "pt-BR": {
            singular: "Período de anonimização"
          },
          "zh-CN": {
            singular: "匿名化期限"
          }
        }
      }),
      NoAnonymization: (0, _v34.translate)({
        singular: "No anonymization",
        dictionary: {
          es: {
            singular: "Sin anonimización"
          },
          "de-DE": {
            singular: "Keine Anonymisierung"
          },
          "fr-FR": {
            singular: "Aucune anonymisation"
          },
          "ja-JP": {
            singular: "匿名化なし"
          },
          "ko-KR": {
            singular: "익명화 안 함"
          },
          "pt-BR": {
            singular: "Sem anonimização"
          },
          "zh-CN": {
            singular: "不进行匿名化"
          }
        }
      }),
      Edit: (0, _v34.translate)({
        singular: "Edit",
        dictionary: {
          es: {
            singular: "Editar"
          },
          "de-DE": {
            singular: "Bearbeiten"
          },
          "fr-FR": {
            singular: "Modifier"
          },
          "ja-JP": {
            singular: "編集"
          },
          "ko-KR": {
            singular: "편집"
          },
          "pt-BR": {
            singular: "Editar"
          },
          "zh-CN": {
            singular: "编辑"
          }
        }
      }),
      DaysFormat: _v0 => (0, _v34.translate)({
        singular: "{COUNT} day",
        plural: "{COUNT} days",
        count: _v0,
        replacements: {
          COUNT: _v0
        },
        dictionary: {
          es: {
            singular: "{COUNT} día",
            plural: "{COUNT} días"
          },
          "de-DE": {
            singular: "{COUNT} Tag",
            plural: "{COUNT} Tage"
          },
          "fr-FR": {
            singular: "{COUNT} jour",
            plural: "{COUNT} jours"
          },
          "ja-JP": {
            singular: "{COUNT} 日",
            plural: "{COUNT}日"
          },
          "ko-KR": {
            singular: "{COUNT}일",
            plural: "{COUNT}일"
          },
          "pt-BR": {
            singular: "{COUNT} dia",
            plural: "{COUNT} dias"
          },
          "zh-CN": {
            singular: "{COUNT} 天",
            plural: "{COUNT} 天"
          }
        }
      }),
      EditTitle: (0, _v34.translate)({
        singular: "Edit anonymization period",
        dictionary: {
          es: {
            singular: "Editar período de anonimización"
          },
          "de-DE": {
            singular: "Anonymisierungszeitraum bearbeiten"
          },
          "fr-FR": {
            singular: "Modifier la période d'anonymisation"
          },
          "ja-JP": {
            singular: "匿名化期間を編集"
          },
          "ko-KR": {
            singular: "익명화 기간 수정"
          },
          "pt-BR": {
            singular: "Editar período de anonimização"
          },
          "zh-CN": {
            singular: "编辑匿名化期限"
          }
        }
      }),
      EnableAnonymization: (0, _v34.translate)({
        singular: "Anonymize registrant data after an event ends",
        dictionary: {
          es: {
            singular: "Anonimizar los datos de los inscritos después de que termine un evento"
          },
          "de-DE": {
            singular: "Registrantendaten nach Veranstaltungsende anonymisieren"
          },
          "fr-FR": {
            singular: "Anonymiser les données des inscrits après la fin d'un événement"
          },
          "ja-JP": {
            singular: "イベント終了後に登録者データを匿名化する"
          },
          "ko-KR": {
            singular: "이벤트 종료 후 등록자 데이터를 익명화"
          },
          "pt-BR": {
            singular: "Anonimizar dados dos inscritos após o término de um evento"
          },
          "zh-CN": {
            singular: "在活动结束后对注册者数据进行匿名化"
          }
        }
      }),
      Anonymize: (0, _v34.translate)({
        singular: "Anonymize after",
        dictionary: {
          es: {
            singular: "Anonimizar después de"
          },
          "de-DE": {
            singular: "Anonymisieren nach"
          },
          "fr-FR": {
            singular: "Anonymiser après"
          },
          "ja-JP": {
            singular: "匿名化するまでの日数"
          },
          "ko-KR": {
            singular: "익명화 후"
          },
          "pt-BR": {
            singular: "Anonimizar após"
          },
          "zh-CN": {
            singular: "匿名化延迟"
          }
        }
      }),
      DaysAfterEvent: (0, _v34.translate)({
        singular: "days after the event ends",
        dictionary: {
          es: {
            singular: "días después de que termine el evento"
          },
          "de-DE": {
            singular: "Tage nach Veranstaltungsende"
          },
          "fr-FR": {
            singular: "jours après la fin de l'événement"
          },
          "ja-JP": {
            singular: "イベント終了後の日数"
          },
          "ko-KR": {
            singular: "이벤트 종료 후"
          },
          "pt-BR": {
            singular: "dias após o término do evento"
          },
          "zh-CN": {
            singular: "活动结束后天数"
          }
        }
      }),
      DaysMustBeBetween: (0, _v34.translate)({
        singular: "Enter a number of days between 1 and 90",
        dictionary: {
          es: {
            singular: "Introduzca un número de días entre 1 y 90"
          },
          "de-DE": {
            singular: "Geben Sie eine Anzahl von Tagen zwischen 1 und 90 ein"
          },
          "fr-FR": {
            singular: "Saisissez un nombre de jours compris entre 1 et 90"
          },
          "ja-JP": {
            singular: "1から90の間の日数を入力してください"
          },
          "ko-KR": {
            singular: "1~90일 사이의 일수를 입력하세요"
          },
          "pt-BR": {
            singular: "Insira um número de dias entre 1 e 90"
          },
          "zh-CN": {
            singular: "请输入介于 1 到 90 之间的天数"
          }
        }
      }),
      Warning: (0, _v34.translate)({
        singular: "This applies to all past and future events and overrides any previously set anonymization period. Already anonymized data cannot be reverted.",
        dictionary: {
          es: {
            singular: "Esto se aplica a todos los eventos pasados y futuros y sustituye cualquier período de anonimización establecido anteriormente. Los datos ya anonimizados no se pueden revertir."
          },
          "de-DE": {
            singular: "Dies gilt für alle vergangenen und zukünftigen Veranstaltungen und überschreibt zuvor festgelegte Anonymisierungszeiträume. Bereits anonymisierte Daten können nicht rückgängig gemacht werden."
          },
          "fr-FR": {
            singular: "Cela s'applique à tous les événements passés et futurs et remplace toute période d'anonymisation précédemment définie. Les données déjà anonymisées ne peuvent pas être restaurées."
          },
          "ja-JP": {
            singular: "これは過去および今後のすべてのイベントに適用され、以前に設定された匿名化期間を上書きします。既に匿名化されたデータは元に戻せません。"
          },
          "ko-KR": {
            singular: "이 설정은 과거 및 향후 모든 이벤트에 적용되며 이전에 설정된 익명화 기간을 재정의합니다. 이미 익명화된 데이터는 복구할 수 없습니다."
          },
          "pt-BR": {
            singular: "Isso se aplica a todos os eventos passados e futuros e substitui qualquer período de anonimização definido anteriormente. Dados já anonimizados não podem ser revertidos."
          },
          "zh-CN": {
            singular: "此设置适用于所有过去和未来的活动，并会覆盖之前设置的任何匿名化期限。已匿名化的数据无法恢复。"
          }
        }
      }),
      CompletedEventsNote: (0, _v34.translate)({
        singular: "Only events you've marked as complete are anonymized; registrants of events that were never completed are left untouched. Completing an event is only possible once registration is turned on for it. To complete one: open your event, then go to Registration > Manage registrants > Complete your event.",
        dictionary: {
          es: {
            singular: "Solo los eventos que hayas marcado como completados se anonimizan; los inscritos de eventos que nunca se completaron quedan intactos. Completar un evento solo es posible una vez que la inscripción esté activada para el evento. Para completarlo: abre tu evento, luego ve a Registration > Manage registrants > Complete your event."
          },
          "de-DE": {
            singular: "Nur Veranstaltungen, die Sie als abgeschlossen markiert haben, werden anonymisiert; registrierte Teilnehmerinnen und Teilnehmer von Veranstaltungen, die nie abgeschlossen wurden, bleiben unberührt. Das Abschließen einer Veranstaltung ist nur möglich, wenn die Registrierung dafür aktiviert ist. Um eine Veranstaltung abzuschließen: Öffnen Sie Ihre Veranstaltung, dann gehen Sie zu Registration > Manage registrants > Complete your event."
          },
          "fr-FR": {
            singular: "Seuls les événements que vous avez marqués comme terminés sont anonymisés ; les inscrits aux événements qui n'ont jamais été terminés restent inchangés. La complétion d'un événement n'est possible que si l'inscription est activée pour celui‑ci. Pour en marquer un comme terminé : ouvrez votre événement, puis allez dans Inscription > Gérer les inscrits > Terminer votre événement."
          },
          "ja-JP": {
            singular: "完了としてマークしたイベントのみが匿名化されます。完了していないイベントの登録者はそのまま残ります。イベントを完了にするには、そのイベントで登録がオンになっている必要があります。完了するには: イベントを開き、Registration > Manage registrants > Complete your event に移動してください。"
          },
          "ko-KR": {
            singular: "완료로 표시한 이벤트만 익명 처리됩니다; 전혀 완료되지 않은 이벤트의 등록자는 그대로 유지됩니다. 해당 이벤트는 등록이 활성화되어 있어야만 완료할 수 있습니다. 이벤트를 완료하려면 해당 이벤트를 열고 Registration > Manage registrants > Complete your event로 이동하세요."
          },
          "pt-BR": {
            singular: "Apenas os eventos que você marcou como concluídos são anonimizados; os inscritos em eventos que nunca foram concluídos permanecem intactos. Concluir um evento só é possível depois que as inscrições estiverem ativadas para ele. Para concluir um: abra seu evento, depois vá para Inscrições > Gerenciar inscritos > Concluir seu evento."
          },
          "zh-CN": {
            singular: "只有你标记为已完成的活动会被匿名化；从未完成的活动的注册者将保持不变。只有在为该活动启用注册后，才可以将其标记为已完成。要完成一项活动：打开该活动，然后转到 注册 > 管理注册者 > 完成该活动。"
          }
        }
      }),
      CompletedEventsLinkText: (0, _v34.translate)({
        singular: "Manage your events",
        dictionary: {
          es: {
            singular: "Gestiona tus eventos"
          },
          "de-DE": {
            singular: "Verwalten Sie Ihre Veranstaltungen"
          },
          "fr-FR": {
            singular: "Gérer vos événements"
          },
          "ja-JP": {
            singular: "イベントを管理する"
          },
          "ko-KR": {
            singular: "이벤트 관리"
          },
          "pt-BR": {
            singular: "Gerenciar seus eventos"
          },
          "zh-CN": {
            singular: "管理您的活动"
          }
        }
      }),
      Save: (0, _v34.translate)({
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
      Cancel: (0, _v34.translate)({
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
      Saved: (0, _v34.translate)({
        singular: "Saved",
        dictionary: {
          es: {
            singular: "Guardado"
          },
          "de-DE": {
            singular: "Gespeichert"
          },
          "fr-FR": {
            singular: "Enregistrée"
          },
          "ja-JP": {
            singular: "保存しました"
          },
          "ko-KR": {
            singular: "저장됨"
          },
          "pt-BR": {
            singular: "Salvo"
          },
          "zh-CN": {
            singular: "已保存"
          }
        }
      }),
      SomethingWentWrong: (0, _v34.translate)({
        singular: "Something went wrong",
        dictionary: {
          es: {
            singular: "Se ha producido un error"
          },
          "de-DE": {
            singular: "Hier ist etwas schief gelaufen"
          },
          "fr-FR": {
            singular: "Quelque chose a planté"
          },
          "ja-JP": {
            singular: "エラーが発生しました"
          },
          "ko-KR": {
            singular: "문제가 발생했습니다"
          },
          "pt-BR": {
            singular: "Alguma coisa deu errado"
          },
          "zh-CN": {
            singular: "出错了"
          }
        }
      })
    }),
    _v36 = ({
      userId: _v0
    }) => {
      let _v1 = (0, _v2.useMemo)(() => _v35(), []),
        [_v2, _v3] = (0, _v2.useState)(!1),
        {
          data: _v4,
          isLoading: _v5,
          mutate: _v6
        } = (0, _v33.useGetTeamSettingsWithMutate)({
          userId: _v0,
          settings: ["webinarViewerAnonymizationDays"]
        }),
        _v7 = _v4?.webinarViewerAnonymizationDays ?? null;
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v31.SettingsPageContentHeader, {
          title: _v1.Title,
          description: _v1.Description
        }), (0, _v1.jsxs)(_v15.Flex, {
          alignItems: "center",
          gap: "100",
          children: [(0, _v1.jsx)(_v27.Text, {
            variant: "heading-xs",
            children: _v1.AnonymizationPeriod
          }), _v5 ? (0, _v1.jsx)(_v26.Spinner, {
            size: "sm"
          }) : (0, _v1.jsx)(_v27.Text, {
            variant: "body-md",
            color: "text-secondary",
            children: null == _v7 ? _v1.NoAnonymization : _v1.DaysFormat(_v7)
          }), (0, _v1.jsx)(_v13.Button, {
            variant: "secondary",
            size: "sm",
            onClick: () => _v3(!0),
            disabled: _v5,
            children: _v1.Edit
          })]
        }), (0, _v1.jsxs)(_v27.Text, {
          variant: "body-sm",
          color: "text-secondary",
          marginTop: "100",
          children: [_v1.CompletedEventsNote, " ", (0, _v1.jsx)(_v18.Link, {
            variant: "inline-primary",
            href: "/library/events",
            target: "_blank",
            rel: "noopener noreferrer",
            cursor: "pointer",
            children: _v1.CompletedEventsLinkText
          })]
        }), _v2 && (0, _v1.jsx)(_v37, {
          onClose: () => {
            _v3(!1), _v6();
          },
          currentDays: _v7,
          userId: _v0
        })]
      });
    },
    _v37 = ({
      onClose: _v0,
      currentDays: _v1,
      userId: _v2
    }) => {
      let _v3 = (0, _v2.useMemo)(() => _v35(), []),
        _v4 = (0, _v28.useToast)(),
        [_v5, _v6] = (0, _v2.useState)(null != _v1),
        [_v7, _v8] = (0, _v2.useState)(_v1 ?? 30),
        [_v9, _v10] = (0, _v2.useState)(null),
        {
          onUpdateSetting: _v11,
          teamSettingsUpdateLoading: _v12,
          teamSettingsUpdateError: _v13
        } = (0, _v32.useUpdateTeamSettings)({
          userId: _v2
        }),
        [_v14, _v15] = (0, _v2.useState)(!1);
      (0, _v2.useEffect)(() => {
        _v14 && !_v12 && (_v13 ? _v4({
          duration: _v30.NOTIFICATION_DURATION,
          title: _v3.SomethingWentWrong,
          status: "error",
          onCloseComplete: () => _v15(!1)
        }) : (_v4({
          duration: _v30.NOTIFICATION_DURATION,
          title: _v3.Saved
        }), _v0()));
      }, [_v14, _v12, _v13, _v4, _v0, _v3]);
      let _v16 = _v0 => {
          let _v1 = "string" == typeof _v0 ? parseInt(_v0, 10) : _v0;
          return Number.isNaN(_v1) || _v1 < 1 || _v1 > 90 ? _v3.DaysMustBeBetween : null;
        },
        _v17 = async () => {
          if (_v5) {
            let _v0 = _v16(_v7);
            if (_v0) return void _v10(_v0);
          }
          _v15(!0), await _v11({
            webinarViewerAnonymizationDays: _v5 ? Number(_v7) : null
          });
        },
        _v18 = _v5 && !!_v9,
        _v19 = _v5 ? Number(_v7) === _v1 : null === _v1;
      return (0, _v1.jsxs)(_v19.Modal, {
        isOpen: !0,
        onClose: _v0,
        size: "md",
        children: [(0, _v1.jsx)(_v24.ModalOverlay, {}), (0, _v1.jsxs)(_v21.ModalContent, {
          children: [(0, _v1.jsx)(_v23.ModalHeader, {
            children: _v3.EditTitle
          }), (0, _v1.jsxs)(_v20.ModalBody, {
            children: [(0, _v1.jsx)(_v14.Checkbox, {
              isChecked: _v5,
              onChange: _v0 => _v6(_v0.target.checked),
              marginBottom: "200",
              children: _v3.EnableAnonymization
            }), _v5 && (0, _v1.jsxs)(_v16.FormControl, {
              isInvalid: _v18,
              children: [(0, _v1.jsxs)(_v15.Flex, {
                alignItems: "center",
                gap: "100",
                children: [(0, _v1.jsx)(_v27.Text, {
                  variant: "heading-xs",
                  children: _v3.Anonymize
                }), (0, _v1.jsxs)(_v25.NumberInput, {
                  value: _v7,
                  onChange: (_v0, _v1) => {
                    if ("" === _v0 || isNaN(_v1)) {
                      _v8(""), _v10(_v16(""));
                      return;
                    }
                    _v8(_v1), _v10(_v16(_v1));
                  },
                  min: 1,
                  max: 90,
                  step: 1,
                  width: (0, _v29.rem)(80),
                  isInvalid: _v18,
                  keepWithinRange: !1,
                  clampValueOnBlur: !1,
                  children: [(0, _v1.jsx)(_v25.NumberInputField, {
                    textAlign: "left"
                  }), (0, _v1.jsxs)(_v25.NumberInputStepper, {
                    children: [(0, _v1.jsx)(_v25.NumberIncrementStepper, {}), (0, _v1.jsx)(_v25.NumberDecrementStepper, {})]
                  })]
                }), (0, _v1.jsx)(_v27.Text, {
                  variant: "heading-xs",
                  children: _v3.DaysAfterEvent
                })]
              }), (0, _v1.jsx)(_v12.Box, {
                minHeight: (0, _v29.rem)(32),
                marginTop: "50",
                children: _v18 && (0, _v1.jsx)(_v17.FormErrorMessage, {
                  children: _v9
                })
              })]
            }), (0, _v1.jsx)(_v10.Alert, {
              status: "warning",
              marginTop: "200",
              children: (0, _v1.jsx)(_v11.AlertDescription, {
                children: _v3.Warning
              })
            })]
          }), (0, _v1.jsx)(_v22.ModalFooter, {
            children: (0, _v1.jsxs)(_v15.Flex, {
              gap: "100",
              justifyContent: "flex-end",
              children: [(0, _v1.jsx)(_v13.Button, {
                variant: "tertiary",
                onClick: _v0,
                disabled: _v12,
                children: _v3.Cancel
              }), (0, _v1.jsx)(_v13.Button, {
                variant: "primary",
                onClick: _v17,
                isLoading: _v12,
                disabled: _v12 || _v18 || _v19 || _v5 && "" === _v7,
                children: _v3.Save
              })]
            })
          })]
        })]
      });
    },
    _v38 = () => {
      let {
          teamInfo: {
            teamData: {
              ownerId: _v0
            }
          },
          isTeamInfoLoading: _v1
        } = (0, _v2.useContext)(_v9.ManageTeamStateCtx),
        {
          loading: _v2,
          capabilities: _v3
        } = (0, _v3.useCapability)(["createLiveEvents", "hasEnterprise"], _v0),
        {
          settings: _v4,
          isLoadingResponse: _v5
        } = (0, _v7.useOrionSettings)();
      if (_v2 || _v1 || _v5 || !_v0) return (0, _v1.jsx)(_v6.Spinner, {});
      if (!_v4.enable_webinar_viewer_anonymization || _v3?.hasEnterprise === !1 || _v3?.createLiveEvents === !1) throw new _v4.UnauthorizedError();
      return (0, _v1.jsx)(_v36, {
        userId: _v0
      });
    };
  (0, _v5.withPageSetup)(() => ({
    props: {
      hasThemeSupport: !0
    }
  }), {
    requireLogin: !0,
    inlineViewer: !0,
    noIndex: !0
  }), _v38.getLayout = _v8.getTeamSettingsPageLayout, _v0.s(["__N_SSP", 0, !0, "default", 0, _v38], 0);
}