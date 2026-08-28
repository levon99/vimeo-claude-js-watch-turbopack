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
    _v18 = _v0.i(0);
  let _v19 = ({
      value: _v0,
      unit: _v1,
      direction: _v2
    }) => `${_v0}_${_v1}_${_v2}`,
    _v20 = (_v0, _v1) => _v19(_v0) === _v19(_v1),
    _v21 = {
      [_v17.REMINDER_OFFSET_UNITS.MINUTES]: 60,
      [_v17.REMINDER_OFFSET_UNITS.HOURS]: 0,
      [_v17.REMINDER_OFFSET_UNITS.DAYS]: 0
    },
    _v22 = ({
      value: _v0,
      unit: _v1,
      direction: _v2
    }) => {
      let _v3 = _v2 === _v17.REMINDER_DIRECTIONS.BEFORE;
      switch (_v1) {
        case _v17.REMINDER_OFFSET_UNITS.MINUTES:
          return _v3 ? (0, _v16.translate)({
            count: _v0,
            singular: "{value} minute before event",
            plural: "{value} minutes before event",
            replacements: {
              value: _v0
            },
            dictionary: {
              es: {
                singular: "{value} minuto antes del evento",
                plural: "{value} minutos antes del evento"
              },
              "de-DE": {
                singular: "{value} Minute vor dem Ereignis",
                plural: "{value} Minuten vor dem Ereignis"
              },
              "fr-FR": {
                singular: "{value} minute avant l'événement",
                plural: "{value} minutes avant l'événement"
              },
              "ja-JP": {
                singular: "イベントの{value}分前",
                plural: "イベントの{value}分前"
              },
              "ko-KR": {
                singular: "{value}분 전 이벤트",
                plural: "{value}분 전 이벤트"
              },
              "pt-BR": {
                singular: "{value} minuto antes do evento",
                plural: "{value} minutos antes do evento"
              },
              "zh-CN": {
                singular: "{value} 分钟前（活动）",
                plural: "{value} 分钟前（活动）"
              }
            }
          }) : (0, _v16.translate)({
            count: _v0,
            singular: "{value} minute after event",
            plural: "{value} minutes after event",
            replacements: {
              value: _v0
            },
            dictionary: {
              es: {
                singular: "{value} minuto después del evento",
                plural: "{value} minutos después del evento"
              },
              "de-DE": {
                singular: "{value} Minute nach dem Ereignis",
                plural: "{value} Minuten nach dem Ereignis"
              },
              "fr-FR": {
                singular: "{value} minute après l'événement",
                plural: "{value} minutes après l'événement"
              },
              "ja-JP": {
                singular: "イベントの{value}分後",
                plural: "イベントの{value}分後"
              },
              "ko-KR": {
                singular: "{value}분 후 이벤트",
                plural: "{value}분 후 이벤트"
              },
              "pt-BR": {
                singular: "{value} minuto após o evento",
                plural: "{value} minutos após o evento"
              },
              "zh-CN": {
                singular: "{value} 分钟后（活动）",
                plural: "{value} 分钟后（活动）"
              }
            }
          });
        case _v17.REMINDER_OFFSET_UNITS.HOURS:
          return _v3 ? (0, _v16.translate)({
            count: _v0,
            singular: "{value} hour before event",
            plural: "{value} hours before event",
            replacements: {
              value: _v0
            },
            dictionary: {
              es: {
                singular: "{value} hora antes del evento",
                plural: "{value} horas antes del evento"
              },
              "de-DE": {
                singular: "{value} Stunde vor dem Ereignis",
                plural: "{value} Stunden vor dem Ereignis"
              },
              "fr-FR": {
                singular: "{value} heure avant l'événement",
                plural: "{value} heures avant l'événement"
              },
              "ja-JP": {
                singular: "イベントの{value}時間前",
                plural: "イベントの{value}時間前"
              },
              "ko-KR": {
                singular: "{value}시간 전 이벤트",
                plural: "{value}시간 전 이벤트"
              },
              "pt-BR": {
                singular: "{value} hora antes do evento",
                plural: "{value} horas antes do evento"
              },
              "zh-CN": {
                singular: "{value} 小时前（活动）",
                plural: "{value} 小时前（活动）"
              }
            }
          }) : (0, _v16.translate)({
            count: _v0,
            singular: "{value} hour after event",
            plural: "{value} hours after event",
            replacements: {
              value: _v0
            },
            dictionary: {
              es: {
                singular: "{value} hora después del evento",
                plural: "{value} horas después del evento"
              },
              "de-DE": {
                singular: "{value} Stunde nach dem Ereignis",
                plural: "{value} Stunden nach dem Ereignis"
              },
              "fr-FR": {
                singular: "{value} heure après l'événement",
                plural: "{value} heures après l'événement"
              },
              "ja-JP": {
                singular: "イベントの{value}時間後",
                plural: "イベントの{value}時間後"
              },
              "ko-KR": {
                singular: "{value}시간 후 이벤트",
                plural: "{value}시간 후 이벤트"
              },
              "pt-BR": {
                singular: "{value} hora após o evento",
                plural: "{value} horas após o evento"
              },
              "zh-CN": {
                singular: "{value} 小时后（活动）",
                plural: "{value} 小时后（活动）"
              }
            }
          });
        case _v17.REMINDER_OFFSET_UNITS.DAYS:
          return _v3 ? (0, _v16.translate)({
            count: _v0,
            singular: "{value} day before event",
            plural: "{value} days before event",
            replacements: {
              value: _v0
            },
            dictionary: {
              es: {
                singular: "{value} día antes del evento",
                plural: "{value} días antes del evento"
              },
              "de-DE": {
                singular: "{value} Tag vor dem Ereignis",
                plural: "{value} Tage vor dem Ereignis"
              },
              "fr-FR": {
                singular: "{value} jour avant l'événement",
                plural: "{value} jours avant l'événement"
              },
              "ja-JP": {
                singular: "イベントの{value}日前",
                plural: "イベントの{value}日前"
              },
              "ko-KR": {
                singular: "{value}일 전 이벤트",
                plural: "{value}일 전 이벤트"
              },
              "pt-BR": {
                singular: "{value} dia antes do evento",
                plural: "{value} dias antes do evento"
              },
              "zh-CN": {
                singular: "{value} 天前（活动）",
                plural: "{value} 天前（活动）"
              }
            }
          }) : (0, _v16.translate)({
            count: _v0,
            singular: "{value} day after event",
            plural: "{value} days after event",
            replacements: {
              value: _v0
            },
            dictionary: {
              es: {
                singular: "{value} día después del evento",
                plural: "{value} días después del evento"
              },
              "de-DE": {
                singular: "{value} Tag nach dem Ereignis",
                plural: "{value} Tage nach dem Ereignis"
              },
              "fr-FR": {
                singular: "{value} jour après l'événement",
                plural: "{value} jours après l'événement"
              },
              "ja-JP": {
                singular: "イベントの{value}日後",
                plural: "イベントの{value}日後"
              },
              "ko-KR": {
                singular: "{value}일 후 이벤트",
                plural: "{value}일 후 이벤트"
              },
              "pt-BR": {
                singular: "{value} dia após o evento",
                plural: "{value} dias após o evento"
              },
              "zh-CN": {
                singular: "{value} 天后（活动）",
                plural: "{value} 天后（活动）"
              }
            }
          });
      }
    },
    _v23 = [{
      unit: _v17.REMINDER_OFFSET_UNITS.MINUTES,
      direction: _v17.REMINDER_DIRECTIONS.BEFORE
    }, {
      unit: _v17.REMINDER_OFFSET_UNITS.HOURS,
      direction: _v17.REMINDER_DIRECTIONS.BEFORE
    }, {
      unit: _v17.REMINDER_OFFSET_UNITS.DAYS,
      direction: _v17.REMINDER_DIRECTIONS.BEFORE
    }],
    _v24 = (_v0, _v1) => `${_v0}_${_v1}`,
    _v25 = _v0 => {
      let [_v1, _v2] = _v0.split("_");
      return {
        unit: _v1,
        direction: _v2
      };
    },
    _v26 = (_v0, _v1, _v2) => {
      let _v3 = _v1 === _v17.REMINDER_DIRECTIONS.BEFORE;
      switch (_v0) {
        case _v17.REMINDER_OFFSET_UNITS.MINUTES:
          return _v3 ? (0, _v16.translate)({
            count: _v2,
            singular: "minute before",
            plural: "minutes before",
            dictionary: {
              es: {
                singular: "minuto antes",
                plural: "minutos antes"
              },
              "de-DE": {
                singular: "Minute vorher",
                plural: "Minuten vorher"
              },
              "fr-FR": {
                singular: "minute avant",
                plural: "minutes avant"
              },
              "ja-JP": {
                singular: "分前",
                plural: "分前"
              },
              "ko-KR": {
                singular: "한 분 전",
                plural: "분 전"
              },
              "pt-BR": {
                singular: "minuto antes",
                plural: "minutos antes"
              },
              "zh-CN": {
                singular: "分钟前",
                plural: "分钟前"
              }
            }
          }) : (0, _v16.translate)({
            count: _v2,
            singular: "minute after",
            plural: "minutes after",
            dictionary: {
              es: {
                singular: "minuto después",
                plural: "minutos después"
              },
              "de-DE": {
                singular: "Minute später",
                plural: "Minuten später"
              },
              "fr-FR": {
                singular: "minute après",
                plural: "minutes après"
              },
              "ja-JP": {
                singular: "分後",
                plural: "分後"
              },
              "ko-KR": {
                singular: "한 분 후",
                plural: "분 후"
              },
              "pt-BR": {
                singular: "minuto depois",
                plural: "minutos depois"
              },
              "zh-CN": {
                singular: "分钟后",
                plural: "分钟后"
              }
            }
          });
        case _v17.REMINDER_OFFSET_UNITS.HOURS:
          return _v3 ? (0, _v16.translate)({
            count: _v2,
            singular: "hour before",
            plural: "hours before",
            dictionary: {
              es: {
                singular: "hora antes",
                plural: "horas antes"
              },
              "de-DE": {
                singular: "Stunde vorher",
                plural: "Stunden vorher"
              },
              "fr-FR": {
                singular: "heure avant",
                plural: "heures avant"
              },
              "ja-JP": {
                singular: "時間前",
                plural: "時間前"
              },
              "ko-KR": {
                singular: "한 시간 전",
                plural: "시간 전"
              },
              "pt-BR": {
                singular: "hora antes",
                plural: "horas antes"
              },
              "zh-CN": {
                singular: "小时前",
                plural: "小时前"
              }
            }
          }) : (0, _v16.translate)({
            count: _v2,
            singular: "hour after",
            plural: "hours after",
            dictionary: {
              es: {
                singular: "hora después",
                plural: "horas después"
              },
              "de-DE": {
                singular: "Stunde später",
                plural: "Stunden später"
              },
              "fr-FR": {
                singular: "heure après",
                plural: "heures après"
              },
              "ja-JP": {
                singular: "時間後",
                plural: "時間後"
              },
              "ko-KR": {
                singular: "한 시간 후",
                plural: "시간 후"
              },
              "pt-BR": {
                singular: "hora depois",
                plural: "horas depois"
              },
              "zh-CN": {
                singular: "小时后",
                plural: "小时后"
              }
            }
          });
        case _v17.REMINDER_OFFSET_UNITS.DAYS:
          return _v3 ? (0, _v16.translate)({
            count: _v2,
            singular: "day before",
            plural: "days before",
            dictionary: {
              es: {
                singular: "día antes",
                plural: "días antes"
              },
              "de-DE": {
                singular: "Tag davor",
                plural: "Tage davor"
              },
              "fr-FR": {
                singular: "jour avant",
                plural: "jours avant"
              },
              "ja-JP": {
                singular: "日前",
                plural: "日前"
              },
              "ko-KR": {
                singular: "하루 전",
                plural: "일 전"
              },
              "pt-BR": {
                singular: "dia antes",
                plural: "dias antes"
              },
              "zh-CN": {
                singular: "天前",
                plural: "天前"
              }
            }
          }) : (0, _v16.translate)({
            count: _v2,
            singular: "day after",
            plural: "days after",
            dictionary: {
              es: {
                singular: "día después",
                plural: "días después"
              },
              "de-DE": {
                singular: "Tag danach",
                plural: "Tage danach"
              },
              "fr-FR": {
                singular: "jour après",
                plural: "jours après"
              },
              "ja-JP": {
                singular: "日後",
                plural: "日後"
              },
              "ko-KR": {
                singular: "하루 후",
                plural: "일 후"
              },
              "pt-BR": {
                singular: "dia depois",
                plural: "dias depois"
              },
              "zh-CN": {
                singular: "天后",
                plural: "天后"
              }
            }
          });
      }
    };
  _v0.s(["UNIT_DIRECTION_OPTIONS", 0, _v23, "getReminderOffsetLabel", 0, _v22, "getUnitDirectionLabel", 0, _v26, "offsetToSignedSeconds", 0, ({
    value: _v0,
    unit: _v1,
    direction: _v2
  }) => {
    let _v3 = _v0 * _v21[_v1];
    return _v2 === _v17.REMINDER_DIRECTIONS.BEFORE ? -_v3 : _v3;
  }, "offsetsEqual", 0, _v20, "parseUnitDirection", 0, _v25, "serializeReminderOffset", 0, _v19, "serializeUnitDirection", 0, _v24], 0), _v0.s(["ReminderTimingModal", 0, ({
    isOpen: _v0,
    onClose: _v1,
    onSave: _v2,
    usedOffsets: _v3,
    title: _v4,
    initialOffset: _v5
  }) => {
    let _v6 = (0, _v2.useMemo)(() => _v17.REMINDER_OFFSET_PRESETS.filter(_v0 => !!(null != _v5 && _v20(_v0, _v5)) || !_v3.some(_v0 => _v20(_v0, _v0))), [_v3, _v5]),
      _v7 = !!_v5 && _v17.REMINDER_OFFSET_PRESETS.some(_v0 => _v20(_v0, _v5)),
      [_v8, _v9] = (0, _v2.useState)(_v5 ? _v7 ? _v19(_v5) : _v17.CUSTOM_RANGE_OPTION : null),
      [_v10, _v11] = (0, _v2.useState)(_v5 && !_v7 ? _v5.value : _v17.DEFAULT_REMINDER_OFFSET.value),
      [_v12, _v13] = (0, _v2.useState)(_v5 && !_v7 ? _v24(_v5.unit, _v5.direction) : _v24(_v17.DEFAULT_REMINDER_OFFSET.unit, _v17.DEFAULT_REMINDER_OFFSET.direction)),
      _v14 = (0, _v2.useMemo)(() => _v6.map(_v0 => ({
        label: _v22(_v0),
        value: _v19(_v0)
      })), [_v6]),
      _v15 = (0, _v2.useMemo)(() => [..._v14, {
        label: (0, _v16.translate)({
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
        value: _v17.CUSTOM_RANGE_OPTION
      }], [_v14]),
      _v16 = _v8 ?? (_v6[0] ? _v19(_v6[0]) : _v17.CUSTOM_RANGE_OPTION),
      _v17 = _v16 === _v17.CUSTOM_RANGE_OPTION,
      {
        unit: _v18,
        direction: _v19
      } = _v25(_v12),
      _v20 = _v17.CUSTOM_RANGE_VALUE_MAX[_v18],
      _v21 = Math.min(_v10, _v20),
      _v22 = (0, _v2.useMemo)(() => Array.from({
        length: _v20
      }, (_v0, _v1) => ({
        label: String(_v1 + 1),
        value: String(_v1 + 1)
      })), [_v20]),
      _v23 = (0, _v2.useMemo)(() => _v23.map(_v0 => ({
        label: _v26(_v0.unit, _v0.direction, _v21),
        value: _v24(_v0.unit, _v0.direction)
      })), [_v21]),
      _v24 = _v17 ? {
        value: _v21,
        unit: _v18,
        direction: _v19
      } : _v6.find(_v0 => _v19(_v0) === _v16) ?? _v6[0],
      _v25 = !!_v24 && _v3.some(_v0 => _v20(_v0, _v24)),
      _v26 = !!_v5 && !!_v24 && _v20(_v24, _v5);
    return (0, _v1.jsxs)(_v6.Modal, {
      isOpen: _v0,
      onClose: _v1,
      size: "md",
      children: [(0, _v1.jsx)(_v12.ModalOverlay, {}), (0, _v1.jsxs)(_v9.ModalContent, {
        children: [(0, _v1.jsx)(_v11.ModalHeader, {
          children: _v4 ?? (0, _v16.translate)({
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
          })
        }), (0, _v1.jsx)(_v8.ModalCloseButton, {}), (0, _v1.jsxs)(_v7.ModalBody, {
          children: [(0, _v1.jsx)(_v13.Paragraph, {
            size: "md",
            color: "text-secondary",
            mb: "md",
            children: (0, _v16.translate)({
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
            })
          }), (0, _v1.jsx)(_v15.Select, {
            label: (0, _v16.translate)({
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
            size: "md",
            items: _v15,
            withPortal: !1,
            value: [_v16],
            onValueChange: _v0 => _v9(_v0.value[0] ?? null),
            children: ({
              label: _v0
            }) => (0, _v1.jsx)(_v15.SelectItem, {
              color: "text-primary",
              children: (0, _v1.jsx)(_v15.SelectItemText, {
                children: _v0
              })
            })
          }), _v17 && (0, _v1.jsxs)(_v5.Flex, {
            mt: "md",
            gap: (0, _v14.rem)(16),
            children: [(0, _v1.jsx)(_v3.Box, {
              flex: 1,
              children: (0, _v1.jsx)(_v15.Select, {
                "aria-label": (0, _v16.translate)({
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
                size: "md",
                items: _v22,
                withPortal: !1,
                value: [String(_v21)],
                onValueChange: _v0 => _v11(Number(_v0.value[0] ?? "1")),
                children: ({
                  label: _v0
                }) => (0, _v1.jsx)(_v15.SelectItem, {
                  color: "text-primary",
                  children: (0, _v1.jsx)(_v15.SelectItemText, {
                    children: _v0
                  })
                })
              })
            }), (0, _v1.jsx)(_v3.Box, {
              flex: 1,
              children: (0, _v1.jsx)(_v15.Select, {
                "aria-label": (0, _v16.translate)({
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
                size: "md",
                items: _v23,
                withPortal: !1,
                value: [_v12],
                onValueChange: _v0 => {
                  var _v1;
                  let _v2;
                  return _v13(_v1 = _v0.value[0] ?? _v12), void (_v10 > (_v2 = _v17.CUSTOM_RANGE_VALUE_MAX[_v25(_v1).unit]) && _v11(_v2));
                },
                children: ({
                  label: _v0
                }) => (0, _v1.jsx)(_v15.SelectItem, {
                  color: "text-primary",
                  children: (0, _v1.jsx)(_v15.SelectItemText, {
                    children: _v0
                  })
                })
              })
            })]
          }), _v25 && (0, _v1.jsx)(_v13.Paragraph, {
            size: "sm",
            color: "red.500",
            mt: "sm",
            role: "alert",
            children: (0, _v16.translate)({
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
            })
          })]
        }), (0, _v1.jsxs)(_v10.ModalFooter, {
          justifyContent: "flex-end",
          borderTopWidth: "1px",
          borderStyle: "solid",
          borderColor: "stroke",
          children: [(0, _v1.jsx)(_v4.Button, {
            variant: "tertiary",
            onClick: _v1,
            children: _v18.default.Cancel
          }), (0, _v1.jsx)(_v4.Button, {
            onClick: () => {
              !_v24 || _v25 || _v26 || _v2(_v24), _v1();
            },
            isDisabled: !_v24 || _v25 || _v26,
            children: (0, _v16.translate)({
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
            })
          })]
        })]
      })]
    });
  }], 0);
}