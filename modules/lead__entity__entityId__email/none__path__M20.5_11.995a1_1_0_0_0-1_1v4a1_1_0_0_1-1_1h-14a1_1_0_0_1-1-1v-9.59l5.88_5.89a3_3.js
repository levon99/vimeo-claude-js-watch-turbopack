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
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0);
  let _v39 = _v0 => (0, _v1.jsx)(_v38.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      d: "M20.5 11.995a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1h-14a1 1 0 0 1-1-1v-9.59l5.88 5.89a3 3 0 0 0 4.24 0l1.64-1.64a1.004 1.004 0 1 0-1.42-1.42l-1.64 1.64a1 1 0 0 1-1.4 0l-5.89-5.88h6.59a1 1 0 1 0 0-2h-7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4a1 1 0 0 0-1-1Zm1.71-8.71-3-3a1 1 0 0 0-.33-.21 1 1 0 0 0-.76 0 1 1 0 0 0-.33.21l-3 3a1.004 1.004 0 0 0 1.42 1.42l1.29-1.3v5.59a1 1 0 0 0 2 0v-5.59l1.29 1.3a1 1 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095Z",
      fill: "currentColor"
    })
  });
  var _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0);
  async function _v45({
    baseUrl: _v0,
    variables: _v1,
    where: {
      userId: _v2,
      liveEventId: _v3
    },
    ..._v4
  }) {
    return (0, _v43.measureLatency)("postUserLiveEventEmail", "POST", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/live_events/${_v3}/email`, {
        ..._v4,
        method: "POST",
        body: JSON.stringify((0, _v44.deepSnakeCase)(_v1))
      });
      if (!_v0.ok) throw new _v44.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v44.deepCamelCase)(_v1);
    });
  }
  var _v46 = _v0.i(0),
    _v47 = _v0.i(0);
  function _v48() {
    let {
        mutate: _v0
      } = (0, _v46.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v47.useGctlConfig)(),
      [_v5, _v6] = (0, _v42.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/live_events/${_v0.where.liveEventId}/email${(0, _v42.serializeQuery)(_v0)}`, _v45({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }), !1);
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
  "true" === _v41.default.env.STORYBOOK && (0, _v42.assignMswData)(_v48, {
    endpoint: "/users/:userId/live_events/:liveEventId/email",
    method: "POST"
  });
  var _v49 = _v0.i(0);
  let _v50 = ({
    clearAllTextSelections: _v0
  }) => {
    let _v1 = (0, _v21.useViewer)(),
      _v2 = _v1?.user,
      {
        emailState: _v3,
        dispatch: _v4,
        activeContentKey: _v5,
        isReminderSaved: _v6
      } = (0, _v23.useEmailCustomization)(),
      _v7 = (0, _v37.useToast)(),
      [_v8, {
        data: _v9
      }] = (0, _v40.useGetUserLazy)(),
      _v10 = (0, _v33.useConfigStore)(_v0 => _v0.entityId),
      [_v11, {
        loading: _v12,
        error: _v13,
        data: _v14
      }] = _v48(),
      {
        sentRegistrationEmailActionEvent: _v15,
        sentRegistrationEmailLayoutChangeEvent: _v16
      } = (0, _v29.useAnalytics)();
    (0, _v2.useEffect)(() => {
      _v8({
        where: {
          userId: (0, _v49.getUserIdFromUri)(_v2?.uri)
        },
        select: ["email"]
      });
    }, [_v2?.uri]);
    let _v17 = _v3.emailTemplateType === _v27.EMAIL_TYPES.REMINDER && _v3.selectedReminderId !== _v27.LEGACY_REMINDER_ID,
      _v18 = _v17 && !_v6(_v3.selectedReminderId);
    return (0, _v2.useEffect)(() => {
      !_v12 && (_v13 ? _v7({
        title: _v34.default.SomethingWentWrong,
        status: "error"
      }) : _v14 && _v7({
        status: "success",
        title: (0, _v15.translate)({
          singular: "Successfully sent to {EMAIL}",
          replacements: {
            EMAIL: _v9?.email
          },
          dictionary: {
            "fr-FR": {
              singular: "Envoi réussi à {EMAIL}"
            },
            "ja-JP": {
              singular: "{EMAIL}に正常に送信されました"
            },
            "ko-KR": {
              singular: "{EMAIL}(으)로 성공적으로 전송되었습니다."
            },
            "zh-CN": {
              singular: "已成功发送至 {EMAIL}"
            }
          }
        })
      }));
    }, [_v12, _v13, _v14]), (0, _v1.jsxs)(_v7.Flex, {
      children: [(0, _v1.jsx)(_v36.Button, {
        size: "sm",
        variant: "tertiary",
        mr: (0, _v13.rem)(10),
        isDisabled: !_v3.isContentModified?.[_v5],
        onClick: () => {
          _v4({
            type: _v32.ACTION_TYPE.RESET,
            payload: _v5
          }), _v16({
            actionName: _v31.BP_ACTION_NAMES.RESET,
            type: _v31.BP_TYPE[_v3.emailTemplateType]
          });
        },
        children: _v34.default.Reset
      }), (0, _v1.jsx)(_v12.Tooltip, {
        fontSize: "body-md",
        label: _v9?.email?.length ? (0, _v15.translate)({
          singular: "Test email will be sent to the email associated with your account {EMAIL}",
          replacements: {
            EMAIL: _v9?.email
          },
          dictionary: {
            "fr-FR": {
              singular: "Le message test sera envoyé à l'adresse e-mail associée à votre compte : {EMAIL}"
            },
            "ja-JP": {
              singular: "テストメールがアカウントに登録されたメールアドレス {EMAIL} に送信されます"
            },
            "ko-KR": {
              singular: "테스트 이메일이 {EMAIL} 계정과 연결된 이메일로 전송됩니다."
            },
            "zh-CN": {
              singular: "测试电子邮件将发送至与您的帐户关联的电子邮件地址 {EMAIL}"
            }
          }
        }) : _v34.default.VerifyEmail,
        children: (0, _v1.jsx)("div", {
          children: (0, _v1.jsx)(_v36.Button, {
            size: "sm",
            variant: "secondary",
            leftIcon: (0, _v1.jsx)(_v39, {}),
            onClick: () => {
              _v10 && (_v0(), _v11({
                where: {
                  userId: (0, _v49.getUserIdFromUri)(_v2?.uri),
                  liveEventId: parseInt(_v10)
                },
                variables: _v17 ? {
                  type: _v27.CONFIGURABLE_REMINDER_EMAIL_TYPE,
                  reminderId: _v3.selectedReminderId,
                  test: !0
                } : {
                  type: _v27.TEST_EMAIL_TEMPLATE[_v3.emailTemplateType],
                  test: !0
                }
              }), _v15({
                actionName: "trigger_test",
                type: _v31.BP_TYPE[_v3.emailTemplateType]
              }));
            },
            isLoading: _v12,
            isDisabled: _v12 || _v18,
            children: _v34.default.SendTest
          })
        })
      })]
    });
  };
  var _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0),
    _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v61 = _v0.i(0),
    _v62 = _v0.i(0),
    _v63 = _v0.i(0),
    _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0),
    _v67 = _v0.i(0),
    _v68 = _v0.i(0),
    _v69 = _v0.i(0),
    _v70 = _v0.i(0),
    _v71 = _v0.i(0),
    _v72 = _v0.i(0),
    _v73 = _v0.i(0),
    _v74 = _v0.i(0),
    _v75 = _v0.i(0);
  let _v76 = ({
      value: _v0,
      unit: _v1,
      direction: _v2
    }) => `${_v0}_${_v1}_${_v2}`,
    _v77 = (_v0, _v1) => _v76(_v0) === _v76(_v1),
    _v78 = {
      [_v27.REMINDER_OFFSET_UNITS.MINUTES]: 60,
      [_v27.REMINDER_OFFSET_UNITS.HOURS]: 0,
      [_v27.REMINDER_OFFSET_UNITS.DAYS]: 0
    },
    _v79 = ({
      value: _v0,
      unit: _v1,
      direction: _v2
    }) => {
      let _v3 = _v0 * _v78[_v1];
      return _v2 === _v27.REMINDER_DIRECTIONS.BEFORE ? -_v3 : _v3;
    },
    _v80 = ({
      value: _v0,
      unit: _v1,
      direction: _v2
    }) => {
      let _v3 = _v2 === _v27.REMINDER_DIRECTIONS.BEFORE;
      switch (_v1) {
        case _v27.REMINDER_OFFSET_UNITS.MINUTES:
          return _v3 ? (0, _v15.translate)({
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
          }) : (0, _v15.translate)({
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
        case _v27.REMINDER_OFFSET_UNITS.HOURS:
          return _v3 ? (0, _v15.translate)({
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
          }) : (0, _v15.translate)({
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
        case _v27.REMINDER_OFFSET_UNITS.DAYS:
          return _v3 ? (0, _v15.translate)({
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
          }) : (0, _v15.translate)({
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
    _v81 = [{
      unit: _v27.REMINDER_OFFSET_UNITS.MINUTES,
      direction: _v27.REMINDER_DIRECTIONS.BEFORE
    }, {
      unit: _v27.REMINDER_OFFSET_UNITS.HOURS,
      direction: _v27.REMINDER_DIRECTIONS.BEFORE
    }, {
      unit: _v27.REMINDER_OFFSET_UNITS.DAYS,
      direction: _v27.REMINDER_DIRECTIONS.BEFORE
    }],
    _v82 = (_v0, _v1) => `${_v0}_${_v1}`,
    _v83 = _v0 => {
      let [_v1, _v2] = _v0.split("_");
      return {
        unit: _v1,
        direction: _v2
      };
    },
    _v84 = ({
      isOpen: _v0,
      onClose: _v1,
      onSave: _v2,
      usedOffsets: _v3,
      title: _v4,
      initialOffset: _v5
    }) => {
      let _v6 = (0, _v2.useMemo)(() => _v27.REMINDER_OFFSET_PRESETS.filter(_v0 => !_v3.some(_v0 => _v77(_v0, _v0))), [_v3]),
        _v7 = !!_v5 && _v27.REMINDER_OFFSET_PRESETS.some(_v0 => _v77(_v0, _v5)),
        [_v8, _v9] = (0, _v2.useState)(_v5 ? _v7 ? _v76(_v5) : _v27.CUSTOM_RANGE_OPTION : null),
        [_v10, _v11] = (0, _v2.useState)(_v5 && !_v7 ? _v5.value : _v27.DEFAULT_REMINDER_OFFSET.value),
        [_v12, _v13] = (0, _v2.useState)(_v5 && !_v7 ? _v82(_v5.unit, _v5.direction) : _v82(_v27.DEFAULT_REMINDER_OFFSET.unit, _v27.DEFAULT_REMINDER_OFFSET.direction)),
        _v14 = (0, _v2.useMemo)(() => _v6.map(_v0 => ({
          label: _v80(_v0),
          value: _v76(_v0)
        })), [_v6]),
        _v15 = (0, _v2.useMemo)(() => [..._v14, {
          label: (0, _v15.translate)({
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
          value: _v27.CUSTOM_RANGE_OPTION
        }], [_v14]),
        _v16 = _v8 ?? (_v6[0] ? _v76(_v6[0]) : _v27.CUSTOM_RANGE_OPTION),
        _v17 = _v16 === _v27.CUSTOM_RANGE_OPTION,
        {
          unit: _v18,
          direction: _v19
        } = _v83(_v12),
        _v20 = _v27.CUSTOM_RANGE_VALUE_MAX[_v18],
        _v21 = Math.min(_v10, _v20),
        _v22 = (0, _v2.useMemo)(() => Array.from({
          length: _v20
        }, (_v0, _v1) => ({
          label: String(_v1 + 1),
          value: String(_v1 + 1)
        })), [_v20]),
        _v23 = (0, _v2.useMemo)(() => _v81.map(_v0 => ({
          label: ((_v0, _v1, _v2) => {
            let _v3 = _v1 === _v27.REMINDER_DIRECTIONS.BEFORE;
            switch (_v0) {
              case _v27.REMINDER_OFFSET_UNITS.MINUTES:
                return _v3 ? (0, _v15.translate)({
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
                }) : (0, _v15.translate)({
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
              case _v27.REMINDER_OFFSET_UNITS.HOURS:
                return _v3 ? (0, _v15.translate)({
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
                }) : (0, _v15.translate)({
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
              case _v27.REMINDER_OFFSET_UNITS.DAYS:
                return _v3 ? (0, _v15.translate)({
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
                }) : (0, _v15.translate)({
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
          })(_v0.unit, _v0.direction, _v21),
          value: _v82(_v0.unit, _v0.direction)
        })), [_v21]),
        _v24 = _v17 ? {
          value: _v21,
          unit: _v18,
          direction: _v19
        } : _v6.find(_v0 => _v76(_v0) === _v16) ?? _v6[0],
        _v25 = !!_v24 && _v3.some(_v0 => _v77(_v0, _v24)),
        _v26 = !!_v5 && !!_v24 && _v77(_v24, _v5);
      return (0, _v1.jsxs)(_v58.Modal, {
        isOpen: _v0,
        onClose: _v1,
        size: "md",
        children: [(0, _v1.jsx)(_v63.ModalOverlay, {}), (0, _v1.jsxs)(_v60.ModalContent, {
          children: [(0, _v1.jsx)(_v62.ModalHeader, {
            children: _v4 ?? (0, _v15.translate)({
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
          }), (0, _v1.jsx)(_v74.ModalCloseButton, {}), (0, _v1.jsxs)(_v59.ModalBody, {
            children: [(0, _v1.jsx)(_v11.Paragraph, {
              size: "md",
              color: "text-secondary",
              mb: "md",
              children: (0, _v15.translate)({
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
            }), (0, _v1.jsx)(_v75.Select, {
              label: (0, _v15.translate)({
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
              }) => (0, _v1.jsx)(_v75.SelectItem, {
                color: "text-primary",
                children: (0, _v1.jsx)(_v75.SelectItemText, {
                  children: _v0
                })
              })
            }), _v17 && (0, _v1.jsxs)(_v7.Flex, {
              mt: "md",
              gap: (0, _v13.rem)(16),
              children: [(0, _v1.jsx)(_v5.Box, {
                flex: 1,
                children: (0, _v1.jsx)(_v75.Select, {
                  "aria-label": (0, _v15.translate)({
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
                  }) => (0, _v1.jsx)(_v75.SelectItem, {
                    color: "text-primary",
                    children: (0, _v1.jsx)(_v75.SelectItemText, {
                      children: _v0
                    })
                  })
                })
              }), (0, _v1.jsx)(_v5.Box, {
                flex: 1,
                children: (0, _v1.jsx)(_v75.Select, {
                  "aria-label": (0, _v15.translate)({
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
                    return _v13(_v1 = _v0.value[0] ?? _v12), void (_v10 > (_v2 = _v27.CUSTOM_RANGE_VALUE_MAX[_v83(_v1).unit]) && _v11(_v2));
                  },
                  children: ({
                    label: _v0
                  }) => (0, _v1.jsx)(_v75.SelectItem, {
                    color: "text-primary",
                    children: (0, _v1.jsx)(_v75.SelectItemText, {
                      children: _v0
                    })
                  })
                })
              })]
            }), _v25 && (0, _v1.jsx)(_v11.Paragraph, {
              size: "sm",
              color: "red.500",
              mt: "sm",
              children: (0, _v15.translate)({
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
          }), (0, _v1.jsxs)(_v61.ModalFooter, {
            justifyContent: "flex-end",
            borderTopWidth: "1px",
            borderStyle: "solid",
            borderColor: "stroke",
            children: [(0, _v1.jsx)(_v36.Button, {
              variant: "tertiary",
              onClick: _v1,
              children: _v34.default.Cancel
            }), (0, _v1.jsx)(_v36.Button, {
              onClick: () => {
                !_v24 || _v25 || _v26 || _v2(_v24), _v1();
              },
              isDisabled: !_v24 || _v25 || _v26,
              children: (0, _v15.translate)({
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
    },
    _v85 = ({
      isOpen: _v0,
      onClose: _v1,
      onConfirm: _v2,
      isLoading: _v3
    }) => (0, _v1.jsxs)(_v58.Modal, {
      isOpen: _v0,
      onClose: _v1,
      isCentered: !0,
      size: "md",
      children: [(0, _v1.jsx)(_v63.ModalOverlay, {}), (0, _v1.jsxs)(_v60.ModalContent, {
        children: [(0, _v1.jsx)(_v74.ModalCloseButton, {}), (0, _v1.jsx)(_v62.ModalHeader, {
          children: (0, _v15.translate)({
            singular: "Remove reminder email",
            dictionary: {
              es: {
                singular: "Eliminar correo de recordatorio"
              },
              "de-DE": {
                singular: "Erinnerungs-E-Mail entfernen"
              },
              "fr-FR": {
                singular: "Supprimer l'e-mail de rappel"
              },
              "ja-JP": {
                singular: "リマインダーメールを削除"
              },
              "ko-KR": {
                singular: "알림 이메일 제거"
              },
              "pt-BR": {
                singular: "Remover e-mail de lembrete"
              },
              "zh-CN": {
                singular: "移除提醒邮件"
              }
            }
          })
        }), (0, _v1.jsx)(_v59.ModalBody, {
          children: (0, _v1.jsx)(_v11.Paragraph, {
            size: "md",
            children: (0, _v15.translate)({
              singular: "This reminder is scheduled to send soon. Once removed, attendees won't receive it.",
              dictionary: {
                es: {
                  singular: "Este recordatorio está programado para enviarse pronto. Una vez eliminado, los asistentes no lo recibirán."
                },
                "de-DE": {
                  singular: "Diese Erinnerung ist für den baldigen Versand geplant. Wird sie entfernt, erhalten die Teilnehmenden sie nicht."
                },
                "fr-FR": {
                  singular: "Ce rappel doit être envoyé prochainement. Une fois supprimé, les participants ne le recevront pas."
                },
                "ja-JP": {
                  singular: "このリマインダーはまもなく送信される予定です。削除すると、参加者には届きません。"
                },
                "ko-KR": {
                  singular: "이 알림은 곧 발송될 예정입니다. 삭제하면 참석자들에게 전송되지 않습니다."
                },
                "pt-BR": {
                  singular: "Este lembrete está agendado para envio em breve. Uma vez removido, os participantes não o receberão."
                },
                "zh-CN": {
                  singular: "该提醒即将发送。移除后，与会者将不会收到该提醒。"
                }
              }
            })
          })
        }), (0, _v1.jsx)(_v61.ModalFooter, {
          borderTop: "1px solid",
          borderColor: "stroke",
          children: (0, _v1.jsxs)(_v52.HStack, {
            children: [(0, _v1.jsx)(_v36.Button, {
              variant: "tertiary",
              isLoading: _v3,
              onClick: _v2,
              children: (0, _v15.translate)({
                singular: "Remove reminder",
                dictionary: {
                  es: {
                    singular: "Eliminar recordatorio"
                  },
                  "de-DE": {
                    singular: "Erinnerung entfernen"
                  },
                  "fr-FR": {
                    singular: "Supprimer le rappel"
                  },
                  "ja-JP": {
                    singular: "リマインダーを削除"
                  },
                  "ko-KR": {
                    singular: "알림 제거"
                  },
                  "pt-BR": {
                    singular: "Remover lembrete"
                  },
                  "zh-CN": {
                    singular: "移除提醒"
                  }
                }
              })
            }), (0, _v1.jsx)(_v36.Button, {
              variant: "primary",
              onClick: _v1,
              children: (0, _v15.translate)({
                singular: "Keep reminder",
                dictionary: {
                  es: {
                    singular: "Mantener recordatorio"
                  },
                  "de-DE": {
                    singular: "Erinnerung behalten"
                  },
                  "fr-FR": {
                    singular: "Conserver le rappel"
                  },
                  "ja-JP": {
                    singular: "リマインダーを保持"
                  },
                  "ko-KR": {
                    singular: "알림 유지"
                  },
                  "pt-BR": {
                    singular: "Manter lembrete"
                  },
                  "zh-CN": {
                    singular: "保留提醒"
                  }
                }
              })
            })]
          })
        })]
      })]
    });
  function _v86({
    children: _v0,
    onOpen: _v1,
    ..._v2
  }) {
    return (0, _v2.useEffect)(() => _v1?.(), []), (0, _v1.jsx)(_v5.Box, {
      position: "relative",
      py: "sm",
      ..._v2,
      children: _v0
    });
  }
  function _v87({
    index: _v0,
    children: _v1,
    selected: _v2,
    onKeyUp: _v3,
    ..._v4
  }) {
    return (0, _v1.jsx)(_v5.Box, {
      color: "slate.800",
      boxSizing: "border-box",
      borderRadius: "sm",
      backgroundColor: _v2 ? "fill-component-hover" : "transparent",
      _hover: {
        backgroundColor: "fill-component-hover"
      },
      height: "auto",
      pl: (0, _v13.rem)(12),
      pr: (0, _v13.rem)(8),
      py: (0, _v13.rem)(8),
      cursor: "pointer",
      onClick: _v0 => _v0.preventDefault(),
      id: "tab" + _v0,
      onKeyUp: _v3,
      ..._v4,
      children: _v1
    });
  }
  let _v88 = ({
      children: _v0,
      forwardRef: _v1,
      ..._v2
    }) => {
      let [_v3, _v4] = (0, _v2.useState)(0);
      function _v5({
        key: _v0
      }) {
        let {
          length: _v1
        } = _v0;
        "ArrowDown" === _v0 && _v4(_v3 === _v1 - 1 ? 0 : _v3 + 1), "ArrowUp" === _v0 && _v4(0 === _v3 ? _v1 - 1 : _v3 - 1);
      }
      (0, _v2.useLayoutEffect)(() => {
        let _v0 = _v0.map(({
          props: {
            active: _v0
          }
        }, _v1) => _v0 && _v1).filter(_v0 => "number" == typeof _v0 && _v0 >= 0);
        return 0 === _v0.length ? _v4(0) : 1 === _v0.length ? _v4(_v0[0] || 0) : void _v4(_v0[_v0.length - 1] || 0);
      }, [_v0]);
      let _v6 = _v0.map(({
          props: _v0
        }, _v1) => (0, _v1.jsx)(_v5.Box, {
          as: "li",
          display: "block",
          onClick: _v0 => {
            _v0.stopPropagation(), _v4(_v1);
          },
          children: (0, _v1.jsx)(_v87, {
            onKeyUp: _v5,
            index: _v1,
            selected: _v3 === _v1,
            children: _v0.label
          })
        }, _v1)),
        _v7 = _v0.map((_v0, _v1) => _v3 === _v1 && (0, _v2.cloneElement)(_v0, {
          id: `#tab-${_v1}`,
          key: _v1
        }));
      return (0, _v1.jsxs)(_v7.Flex, {
        ref: _v1,
        ..._v2,
        children: [(0, _v1.jsx)(_v7.Flex, {
          as: "ol",
          listStyleType: "none",
          flexDirection: "column",
          width: "100%",
          gap: (0, _v13.rem)(12),
          px: "lg",
          children: _v6
        }), (0, _v1.jsx)("div", {
          children: _v7
        })]
      });
    },
    _v89 = () => {
      let {
          emailState: _v0,
          dispatch: _v1,
          isReminderSaved: _v2,
          isManualSaveRequired: _v3
        } = (0, _v23.useEmailCustomization)(),
        {
          status: _v4,
          completedOn: _v5,
          user: _v6
        } = (0, _v25.useEntityStore)(),
        _v7 = (0, _v37.useToast)(),
        [_v8, _v9] = (0, _v2.useState)(!1),
        [_v10, _v11] = (0, _v2.useState)(!1),
        [_v12, _v13] = _v48(),
        {
          entityId: _v14
        } = (0, _v33.useConfigStore)(_v0 => _v0),
        _v15 = (0, _v33.useConfigStore)(_v0 => _v0.entityType),
        {
          trackLiveStreamRegistrationEmailToggled: _v16,
          trackLiveStreamRegistrationReminderConfigured: _v17
        } = (0, _v72.useLiveStreamBroadcasterTracking)(),
        {
          getEmailData: _v18
        } = (0, _v2.useContext)(_v73.EmailContext),
        {
          sentChangeRegistrationEmailConfigEvent: _v19,
          sentRegistrationEmailPreviewEvent: _v20
        } = (0, _v29.useAnalytics)(),
        {
          settings: _v21
        } = (0, _v19.useOrionSettings)(),
        _v22 = _v21.enable_configurable_event_reminders,
        [_v23, _v24] = (0, _v2.useState)(!1),
        [_v25, _v26] = (0, _v2.useState)(null),
        [_v27, _v28] = (0, _v2.useState)(null),
        [_v29, _v30] = (0, _v70.useDeleteUserLiveEventEmailReminder)(),
        _v31 = (0, _v2.useRef)(null),
        _v32 = _v4 === _v27.ENTITY_STATUS.ENDED,
        _v33 = (_v0, _v1) => {
          _v15 === _v17.ENTITY_TYPE.EVENT && _v17({
            liveStreamReminderAction: _v0,
            liveStreamReminderOffsetValue: _v1.value,
            liveStreamReminderOffsetUnit: _v1.unit,
            liveStreamReminderOffsetDirection: _v1.direction
          });
        },
        _v34 = (_v0 = _v25) => {
          if (!_v14 || !_v0) return;
          let _v1 = _v0.reminders.find(_v0 => _v0.id === _v0);
          _v1({
            type: _v32.ACTION_TYPE.DELETE_REMINDER,
            payload: _v0
          }), _v26(null), _v1 && _v33("deleted", _v1.offset), !_v3 && _v2(_v0) && (_v31.current = _v0, _v29({
            where: {
              userId: (0, _v49.getUserIdFromUri)(_v6?.uri),
              liveEventId: parseInt(_v14, 10),
              reminderId: _v0
            }
          }));
        };
      (0, _v2.useEffect)(() => {
        let {
          loading: _v0,
          error: _v1
        } = _v30;
        _v31.current && !_v0 && (_v31.current = null, _v1 ? (_v7({
          title: _v34.default.SomethingWentWrong,
          status: "error"
        }), _v18?.()) : _v7({
          title: (0, _v15.translate)({
            singular: "Reminder removed",
            dictionary: {
              es: {
                singular: "Recordatorio eliminado"
              },
              "de-DE": {
                singular: "Erinnerung entfernt"
              },
              "fr-FR": {
                singular: "Rappel supprimé"
              },
              "ja-JP": {
                singular: "リマインダーが削除されました"
              },
              "ko-KR": {
                singular: "알림이 제거되었습니다"
              },
              "pt-BR": {
                singular: "Lembrete removido"
              },
              "zh-CN": {
                singular: "提醒已移除"
              }
            }
          }),
          status: "success"
        }));
      }, [_v30]);
      let _v35 = navigator.language || "en-US",
        _v36 = {
          year: "numeric",
          month: "2-digit",
          day: "2-digit"
        },
        _v37 = (_v0, _v1) => {
          _v1(_v1), _v20({
            actionName: _v31.BP_ACTION_NAMES.PREVIEW_BY_TYPE,
            type: _v31.BP_TYPE[_v0],
            copy: _v31.BP_COPY[_v0]
          });
        },
        _v38 = (_v0, _v1, _v2, _v3) => {
          _v15 === _v17.ENTITY_TYPE.EVENT && _v16({
            liveStreamEmailType: _v1,
            liveStreamNewStatus: !_v2
          }), _v1(_v3), _v19({
            actionName: _v31.BP_ACTION_NAMES.ENABLE,
            actionValue: _v2 ? _v31.BP_ACTION_VALUES.OFF : _v31.BP_ACTION_VALUES.ON,
            type: _v31.BP_TYPE[_v0],
            copy: _v31.BP_COPY[_v0]
          });
        },
        _v39 = (0, _v2.useEffectEvent)(_v0 => {
          _v0 ? _v7({
            title: _v34.default.SomethingWentWrong,
            status: "error"
          }) : (_v18?.(), _v11(!0), _v7({
            title: _v34.default.EmailSent,
            status: "success"
          })), _v9(!1);
        });
      (0, _v2.useEffect)(() => {
        let {
          loading: _v0,
          error: _v1,
          data: _v2
        } = _v13;
        !_v0 && (_v1 || _v2) && _v39(_v1);
      }, [_v13.data, _v13.error, _v13.loading]);
      let _v40 = !!_v0.followUp,
        _v41 = _v32 && !_v40 && !_v10 && !_v0.followUpSender,
        _v42 = _v40 ? _v32 && (0, _v1.jsx)(_v11.Paragraph, {
          pl: (0, _v13.rem)(36),
          size: "md",
          children: (0, _v15.translate)({
            singular: "Sent automatically on {DATE}",
            replacements: {
              DATE: (0, _v71.getIntlDate)(_v0.followUpSendOn || _v5 || void 0, _v36, _v35)
            },
            dictionary: {
              "fr-FR": {
                singular: "Envoyé automatiquement le {DATE}"
              },
              "ja-JP": {
                singular: "{DATE}に自動送信されました"
              },
              "ko-KR": {
                singular: "{DATE}에 자동 전송됨"
              },
              "zh-CN": {
                singular: "在 {DATE} 自动发送"
              }
            }
          })
        }) : _v32 && _v0.followUpSender ? (0, _v1.jsx)(_v11.Paragraph, {
          pl: (0, _v13.rem)(36),
          size: "md",
          children: (0, _v15.translate)({
            singular: "Sent manually on {DATE} by {NAME}",
            replacements: {
              DATE: (0, _v71.getIntlDate)(_v0.followUpSendOn, _v36, _v35),
              NAME: _v0.followUpSender.name || ""
            },
            dictionary: {
              "fr-FR": {
                singular: "Envoyé manuellement le {DATE} par {NAME}"
              },
              "ja-JP": {
                singular: "{NAME}さんが{DATE}にマニュアル送信しました"
              },
              "ko-KR": {
                singular: "{NAME} 님이 {DATE}에 수동으로 전송함"
              },
              "zh-CN": {
                singular: "由 {NAME} 在 {DATE} 手动发送"
              }
            }
          })
        }) : null,
        _v43 = [{
          key: _v27.EMAIL_TYPES.CONFIRMATION,
          kind: _v27.EMAIL_TYPES.CONFIRMATION,
          label: _v34.default.EmailToggle[_v27.EMAIL_TOGGLE_MAP.CONFIRMATION],
          enabled: !!_v0.confirmation,
          active: _v0.emailTemplateType === _v27.EMAIL_TYPES.CONFIRMATION,
          pico: "confirmation",
          onSelect: () => _v37(_v27.EMAIL_TYPES.CONFIRMATION, {
            type: _v32.ACTION_TYPE.EMAIL_TEMPLATE_TYPE,
            payload: _v27.EMAIL_TYPES.CONFIRMATION
          }),
          onToggle: () => _v38(_v27.EMAIL_TYPES.CONFIRMATION, "confirmation", !!_v0.confirmation, {
            type: _v32.ACTION_TYPE.TOGGLE_SETTING_EMAIL,
            payload: _v27.EMAIL_TOGGLE_MAP.CONFIRMATION
          })
        }, {
          key: _v27.EMAIL_TYPES.FOLLOWUP,
          kind: _v27.EMAIL_TYPES.FOLLOWUP,
          label: _v34.default.EmailTabName(_v27.EMAIL_TYPES.FOLLOWUP, 1),
          enabled: _v40 || !!_v0.followUpSender,
          active: _v0.emailTemplateType === _v27.EMAIL_TYPES.FOLLOWUP,
          pico: "follow_up",
          tooltip: _v32 ? void 0 : _v34.default.FollowUpNotification,
          onSelect: () => _v37(_v27.EMAIL_TYPES.FOLLOWUP, {
            type: _v32.ACTION_TYPE.EMAIL_TEMPLATE_TYPE,
            payload: _v27.EMAIL_TYPES.FOLLOWUP
          }),
          onToggle: () => {
            if (_v32) {
              _v41 && _v9(!0);
              return;
            }
            _v38(_v27.EMAIL_TYPES.FOLLOWUP, "follow_up", _v40, {
              type: _v32.ACTION_TYPE.TOGGLE_SETTING_EMAIL,
              payload: _v27.EMAIL_TOGGLE_MAP.FOLLOWUP
            });
          },
          extra: _v42
        }, ...[..._v0.reminders].sort((_v0, _v1) => _v79(_v0.offset) - _v79(_v1.offset)).map(_v0 => {
          let _v1 = _v0.id === _v27.LEGACY_REMINDER_ID;
          return {
            key: _v0.id,
            kind: _v27.EMAIL_TYPES.REMINDER,
            label: _v34.default.EmailTabName(_v27.EMAIL_TYPES.REMINDER, 1),
            sublabel: _v80(_v0.offset),
            enabled: _v0.enabled,
            active: _v0.emailTemplateType === _v27.EMAIL_TYPES.REMINDER && _v0.selectedReminderId === _v0.id,
            pico: "reminder",
            onSelect: () => _v37(_v27.EMAIL_TYPES.REMINDER, {
              type: _v32.ACTION_TYPE.SELECT_REMINDER,
              payload: _v0.id
            }),
            onToggle: () => _v38(_v27.EMAIL_TYPES.REMINDER, "reminder", _v0.enabled, {
              type: _v32.ACTION_TYPE.TOGGLE_REMINDER,
              payload: _v0.id
            }),
            onEdit: _v22 && !_v1 ? () => _v28(_v0) : void 0,
            onDelete: _v22 && !_v1 ? () => _v0.enabled ? _v26(_v0.id) : _v34(_v0.id) : void 0
          };
        })];
      return (0, _v1.jsxs)(_v5.Box, {
        children: [(0, _v1.jsxs)(_v7.Flex, {
          px: "lg",
          pt: "lg",
          pb: "sm",
          alignItems: "center",
          justifyContent: "space-between",
          children: [(0, _v1.jsx)(_v51.Header, {
            size: "md",
            children: (0, _v15.translate)({
              singular: "Email",
              dictionary: {
                es: {
                  singular: "Correo electrónico"
                },
                "de-DE": {
                  singular: "E-Mail-Adresse"
                },
                "fr-FR": {
                  singular: "E-mail"
                },
                "ja-JP": {
                  singular: "E メール"
                },
                "ko-KR": {
                  singular: "이메일"
                },
                "pt-BR": {
                  singular: "E-mail"
                },
                "zh-CN": {
                  singular: "电子邮件"
                }
              }
            })
          }), _v22 && (0, _v1.jsxs)(_v7.Flex, {
            alignItems: "center",
            gap: (0, _v13.rem)(8),
            children: [(0, _v1.jsx)(_v11.Paragraph, {
              size: "sm",
              color: "text-secondary",
              children: (0, _v15.translate)({
                singular: "{count}/{max}",
                replacements: {
                  count: _v0.reminders.length,
                  max: _v27.MAX_REMINDERS
                }
              })
            }), (0, _v1.jsx)(_v12.Tooltip, {
              label: _v0.reminders.length >= _v27.MAX_REMINDERS ? (0, _v15.translate)({
                singular: "Maximum of {max} reminders reached",
                replacements: {
                  max: _v27.MAX_REMINDERS
                },
                dictionary: {
                  es: {
                    singular: "Se alcanzó el máximo de {max} recordatorios"
                  },
                  "de-DE": {
                    singular: "Die maximale Anzahl von {max} Erinnerungen wurde erreicht"
                  },
                  "fr-FR": {
                    singular: "Nombre maximal de {max} rappels atteint"
                  },
                  "ja-JP": {
                    singular: "リマインダーは最大{max}件に達しました"
                  },
                  "ko-KR": {
                    singular: "최대 {max}개의 알림에 도달했습니다"
                  },
                  "pt-BR": {
                    singular: "Máximo de {max} lembretes atingido"
                  },
                  "zh-CN": {
                    singular: "已达到 {max} 个提醒的上限"
                  }
                }
              }) : (0, _v15.translate)({
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
              children: (0, _v1.jsx)(_v53.IconButton, {
                size: "sm",
                variant: "tertiary",
                "aria-label": (0, _v15.translate)({
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
                icon: (0, _v1.jsx)(_v68.Plus, {}),
                isDisabled: _v32 || _v0.reminders.length >= _v27.MAX_REMINDERS,
                onClick: () => _v24(!0)
              })
            })]
          })]
        }), (0, _v1.jsx)(_v11.Paragraph, {
          px: "lg",
          pb: "sm",
          size: "md",
          color: "text-secondary",
          children: (0, _v15.translate)({
            singular: "Select an email to preview it.",
            dictionary: {
              es: {
                singular: "Selecciona un correo para previsualizarlo."
              },
              "de-DE": {
                singular: "Wählen Sie eine E-Mail, um sie in der Vorschau anzuzeigen."
              },
              "fr-FR": {
                singular: "Sélectionnez un e-mail pour le prévisualiser."
              },
              "ja-JP": {
                singular: "プレビューするメールを選択してください。"
              },
              "ko-KR": {
                singular: "미리보기를 위해 이메일을 선택하세요."
              },
              "pt-BR": {
                singular: "Selecione um e-mail para visualizá-lo."
              },
              "zh-CN": {
                singular: "选择一封邮件以预览。"
              }
            }
          })
        }), (0, _v1.jsx)(_v88, {
          children: _v43.map(_v0 => (0, _v1.jsx)(_v86, {
            active: _v0.active,
            onOpen: _v0.onSelect,
            label: (0, _v1.jsxs)(_v5.Box, {
              color: "text-primary",
              children: [(0, _v1.jsxs)(_v7.Flex, {
                alignItems: "center",
                justifyContent: "space-between",
                children: [(0, _v1.jsxs)(_v7.Flex, {
                  alignItems: "center",
                  gap: (0, _v13.rem)(8),
                  flex: 1,
                  minWidth: 0,
                  children: [_v0.enabled ? (0, _v1.jsx)(_v64.CircleCheck, {
                    boxSize: (0, _v13.rem)(24),
                    color: "status-positive-primary",
                    flexShrink: 0
                  }) : (0, _v1.jsx)(_v67.MinusCircle, {
                    boxSize: (0, _v13.rem)(24),
                    color: "text-primary",
                    flexShrink: 0
                  }), (0, _v1.jsxs)(_v5.Box, {
                    flex: 1,
                    minWidth: 0,
                    children: [(0, _v1.jsxs)(_v7.Flex, {
                      alignItems: "center",
                      gap: (0, _v13.rem)(4),
                      maxWidth: "100%",
                      children: [(0, _v1.jsx)(_v51.Header, {
                        size: "xs",
                        noOfLines: 1,
                        minWidth: 0,
                        children: _v0.label
                      }), _v0.tooltip && (0, _v1.jsx)(_v12.Tooltip, {
                        label: _v0.tooltip,
                        placement: "top",
                        shouldWrapChildren: !0,
                        children: (0, _v1.jsx)(_v5.Box, {
                          display: "flex",
                          alignItems: "center",
                          flexShrink: 0,
                          children: (0, _v1.jsx)(_v14.InfoCircle, {
                            "aria-label": _v0.tooltip,
                            boxSize: "2xs",
                            color: "text-tertiary",
                            cursor: "help",
                            tabIndex: 0
                          })
                        })
                      })]
                    }), _v0.sublabel && (0, _v1.jsx)(_v11.Paragraph, {
                      size: "sm",
                      color: "text-secondary",
                      noOfLines: 1,
                      children: _v0.sublabel
                    })]
                  })]
                }), (0, _v1.jsxs)(_v54.Menu, {
                  children: [(0, _v1.jsx)(_v55.MenuButton, {
                    as: _v53.IconButton,
                    "aria-label": (0, _v15.translate)({
                      singular: "Email options",
                      dictionary: {
                        es: {
                          singular: "Opciones de correo electrónico"
                        },
                        "de-DE": {
                          singular: "E-Mail-Optionen"
                        },
                        "fr-FR": {
                          singular: "Options E-mail"
                        },
                        "ja-JP": {
                          singular: "メール設定"
                        },
                        "ko-KR": {
                          singular: "이메일 옵션"
                        },
                        "pt-BR": {
                          singular: "Opções de e-mail"
                        },
                        "zh-CN": {
                          singular: "电子邮件选项"
                        }
                      }
                    }),
                    icon: (0, _v1.jsx)(_v66.EllipsisH, {
                      w: "xs",
                      fontSize: "text"
                    }),
                    variant: "tertiary",
                    size: "xs",
                    onClick: _v0 => _v0.stopPropagation()
                  }), (0, _v1.jsxs)(_v57.MenuList, {
                    children: [_v0.onEdit && (0, _v1.jsx)(_v56.MenuItem, {
                      icon: (0, _v1.jsx)(_v65.EditPencil, {}),
                      onClick: _v0 => {
                        _v0.stopPropagation(), _v0.onEdit?.();
                      },
                      children: (0, _v15.translate)({
                        singular: "Edit timing",
                        dictionary: {
                          es: {
                            singular: "Editar tiempo"
                          },
                          "de-DE": {
                            singular: "Timing bearbeiten"
                          },
                          "fr-FR": {
                            singular: "Modifier le timing"
                          },
                          "ja-JP": {
                            singular: "タイミングを編集"
                          },
                          "ko-KR": {
                            singular: "타이밍 수정"
                          },
                          "pt-BR": {
                            singular: "Editar tempo"
                          },
                          "zh-CN": {
                            singular: "编辑时间"
                          }
                        }
                      })
                    }), (0, _v1.jsx)(_v56.MenuItem, {
                      icon: _v0.enabled ? (0, _v1.jsx)(_v67.MinusCircle, {}) : (0, _v1.jsx)(_v64.CircleCheck, {}),
                      isDisabled: _v32 && !(_v0.kind === _v27.EMAIL_TYPES.FOLLOWUP && _v41),
                      onClick: _v0 => {
                        _v0.stopPropagation(), _v0.onToggle();
                      },
                      children: _v0.enabled ? (0, _v15.translate)({
                        singular: "Deactivate",
                        dictionary: {
                          es: {
                            singular: "Desactivar"
                          },
                          "de-DE": {
                            singular: "Deaktivieren"
                          },
                          "fr-FR": {
                            singular: "Désactiver"
                          },
                          "ja-JP": {
                            singular: "無効化"
                          },
                          "ko-KR": {
                            singular: "비활성화"
                          },
                          "pt-BR": {
                            singular: "Desativar"
                          },
                          "zh-CN": {
                            singular: "停用"
                          }
                        }
                      }) : (0, _v15.translate)({
                        singular: "Activate",
                        dictionary: {
                          es: {
                            singular: "Activar"
                          },
                          "de-DE": {
                            singular: "Aktivieren"
                          },
                          "fr-FR": {
                            singular: "Activer"
                          },
                          "ja-JP": {
                            singular: "有効化"
                          },
                          "ko-KR": {
                            singular: "활성화"
                          },
                          "pt-BR": {
                            singular: "Ativar"
                          },
                          "zh-CN": {
                            singular: "启用"
                          }
                        }
                      })
                    }), _v0.onDelete && (0, _v1.jsx)(_v56.MenuItem, {
                      icon: (0, _v1.jsx)(_v69.TrashBin, {}),
                      onClick: _v0 => {
                        _v0.stopPropagation(), _v0.onDelete?.();
                      },
                      children: (0, _v15.translate)({
                        singular: "Remove reminder email",
                        dictionary: {
                          es: {
                            singular: "Eliminar correo de recordatorio"
                          },
                          "de-DE": {
                            singular: "Erinnerungs-E-Mail entfernen"
                          },
                          "fr-FR": {
                            singular: "Supprimer l'e-mail de rappel"
                          },
                          "ja-JP": {
                            singular: "リマインダーメールを削除"
                          },
                          "ko-KR": {
                            singular: "알림 이메일 제거"
                          },
                          "pt-BR": {
                            singular: "Remover e-mail de lembrete"
                          },
                          "zh-CN": {
                            singular: "移除提醒邮件"
                          }
                        }
                      })
                    })]
                  })]
                })]
              }), _v0.extra]
            })
          }, _v0.key))
        }), _v41 && (0, _v1.jsxs)(_v58.Modal, {
          isOpen: _v8,
          onClose: () => _v9(!1),
          isCentered: !0,
          size: "md",
          children: [(0, _v1.jsx)(_v63.ModalOverlay, {}), (0, _v1.jsxs)(_v60.ModalContent, {
            children: [(0, _v1.jsx)(_v62.ModalHeader, {
              children: _v34.default.FollowUpModalHeader
            }), (0, _v1.jsx)(_v59.ModalBody, {
              children: (0, _v1.jsx)(_v11.Paragraph, {
                size: "md",
                children: _v34.default.FollowUpModalDescription
              })
            }), (0, _v1.jsx)(_v61.ModalFooter, {
              borderTop: "1px solid",
              borderColor: "stroke",
              children: (0, _v1.jsxs)(_v52.HStack, {
                children: [(0, _v1.jsx)(_v36.Button, {
                  variant: "tertiary",
                  onClick: () => _v9(!1),
                  children: _v34.default.Cancel
                }), (0, _v1.jsx)(_v36.Button, {
                  variant: "primary",
                  onClick: () => {
                    _v14 && _v12({
                      where: {
                        userId: (0, _v49.getUserIdFromUri)(_v6?.uri),
                        liveEventId: parseInt(_v14, 10)
                      },
                      variables: {
                        type: "follow_up"
                      }
                    });
                  },
                  isLoading: _v13.loading,
                  children: _v34.default.Send
                })]
              })
            })]
          })]
        }), _v22 && (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v84, {
            isOpen: _v23,
            onClose: () => _v24(!1),
            onSave: _v0 => {
              let _v1 = `reminder_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;
              _v1({
                type: _v32.ACTION_TYPE.ADD_REMINDER,
                payload: {
                  id: _v1,
                  offset: _v0
                }
              }), _v33("created", _v0);
            },
            usedOffsets: _v0.reminders.map(_v0 => _v0.offset)
          }, _v23 ? "add-timing-open" : "add-timing-closed"), (0, _v1.jsx)(_v85, {
            isOpen: !!_v25,
            onClose: () => _v26(null),
            onConfirm: () => _v34(),
            isLoading: _v30.loading
          }), (0, _v1.jsx)(_v84, {
            isOpen: !!_v27,
            title: (0, _v15.translate)({
              singular: "Edit timing",
              dictionary: {
                es: {
                  singular: "Editar tiempo"
                },
                "de-DE": {
                  singular: "Timing bearbeiten"
                },
                "fr-FR": {
                  singular: "Modifier le timing"
                },
                "ja-JP": {
                  singular: "タイミングを編集"
                },
                "ko-KR": {
                  singular: "타이밍 수정"
                },
                "pt-BR": {
                  singular: "Editar tempo"
                },
                "zh-CN": {
                  singular: "编辑时间"
                }
              }
            }),
            initialOffset: _v27?.offset,
            onClose: () => _v28(null),
            onSave: _v0 => {
              _v27 && (_v1({
                type: _v32.ACTION_TYPE.UPDATE_REMINDER_OFFSET,
                payload: {
                  id: _v27.id,
                  offset: _v0
                }
              }), _v33("timing_changed", _v0));
            },
            usedOffsets: _v0.reminders.filter(_v0 => _v0.id !== _v27?.id).map(_v0 => _v0.offset)
          }, _v27?.id ?? "edit-timing")]
        })]
      });
    };
  var _v90 = _v0.i(0);
  let _v91 = () => {
    let {
        emailState: _v0
      } = (0, _v23.useEmailCustomization)(),
      {
        teamName: _v1,
        isLoading: _v2
      } = (0, _v28.useTeamStore)(),
      _v3 = (0, _v21.useViewer)(),
      _v4 = _v3?.user;
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v7.Flex, {
        p: "sm",
        justifyContent: "center",
        children: (0, _v1.jsx)("strong", {
          children: "View this email in your browser."
        })
      }), (0, _v1.jsxs)(_v7.Flex, {
        p: "sm",
        justifyContent: "center",
        children: [`This email was sent to you by ${_v1 && !_v2 ? _v1 : _v4?.name}.`, _v0.useReplyEmail && _v0?.replyEmail && `You can respond to the sender at ${_v0?.replyEmail}.`]
      }), _v0.useSenderAddress && _v0?.senderAddress && (0, _v1.jsx)(_v7.Flex, {
        p: "sm",
        justifyContent: "center",
        children: _v0?.senderAddress
      }), (0, _v1.jsx)(_v7.Flex, {
        p: "sm",
        justifyContent: "center",
        children: (0, _v1.jsx)("strong", {
          children: _v0.useSenderPolicyUrl && _v0?.senderPolicyUrl ? "Privacy | Report Abuse" : "Report Abuse"
        })
      })]
    });
  };
  var _v92 = _v0.i(0),
    _v93 = _v0.i(0),
    _v94 = _v0.i(0),
    _v95 = _v0.i(0),
    _v96 = _v0.i(0);
  let _v97 = () => {
    let {
        emailState: _v0,
        dispatch: _v1,
        activeContentKey: _v2
      } = (0, _v23.useEmailCustomization)(),
      {
        sentRegistrationEmailLayoutChangeEvent: _v3
      } = (0, _v29.useAnalytics)(),
      {
        entityType: _v4
      } = (0, _v33.useConfigStore)(_v0 => _v0),
      [_v5, _v6] = (0, _v2.useState)(!1),
      _v7 = (0, _v2.useMemo)(() => _v0.buttonInfo[_v2], [_v0, _v2]),
      {
        isCustomLink: _v8,
        text: _v9
      } = _v7,
      [_v10, _v11] = (0, _v2.useState)(_v7.customLink),
      {
        user: _v12,
        watchEventUri: _v13,
        privacy: _v14,
        link: _v15
      } = (0, _v25.useEntityStore)(),
      {
        hasUpsell: _v16,
        hasEmailEditAccess: _v17
      } = (0, _v22.useEntityCapability)(),
      _v18 = !(_v27.TRAIL_STATUS === _v12?.membership?.subscription?.trial?.status || _v16 || !_v17),
      _v19 = (0, _v2.useMemo)(() => !_v8 || (0, _v96.isValidUrl)(_v10 || ""), [_v8, _v10]),
      _v20 = _v0 => {
        _v1({
          type: _v32.ACTION_TYPE.SET_BUTTON_INFO,
          payload: {
            info: _v0,
            emailTab: _v2
          }
        });
      },
      _v21 = () => {
        _v18 && (_v20({
          ..._v7,
          isCustomLink: !_v8
        }), _v8 && _v3({
          actionName: _v31.BP_ACTION_NAMES.BUTTON_DEFAULT_LINK_CHANGED
        }));
      };
    return (0, _v2.useEffect)(() => {
      _v19 && _v8 && !_v5 && _v20({
        text: _v9,
        isCustomLink: !0,
        customLink: _v10
      });
    }, [_v19, _v10, _v9, _v8, _v5]), (0, _v1.jsxs)(_v5.Box, {
      children: [(0, _v1.jsx)(_v51.Header, {
        size: "md",
        mb: (0, _v13.rem)(30),
        children: _v34.default.Button
      }), (0, _v1.jsx)(_v51.Header, {
        size: "xs",
        mb: "sm",
        children: _v34.default.Text
      }), (0, _v1.jsxs)(_v8.FormControl, {
        children: [(0, _v1.jsx)(_v9.Input, {
          isDisabled: !_v17,
          maxLength: _v27.EMAIL_MAX_LENGTH.BUTTON_TEXT,
          value: _v9,
          onChange: _v0 => {
            let _v1 = _v0.target.value;
            _v20({
              ..._v7,
              text: _v1
            });
          }
        }), (0, _v1.jsx)(_v8.FormHelperText, {
          py: (0, _v13.rem)(12),
          children: (0, _v1.jsx)(_v35.CharCount, {
            value: _v9,
            maxCharacters: _v27.EMAIL_MAX_LENGTH.BUTTON_TEXT
          })
        })]
      }), (0, _v1.jsxs)(_v5.Box, {
        pt: (0, _v13.rem)(20),
        pb: "md",
        children: [(0, _v1.jsx)(_v51.Header, {
          size: "xs",
          mb: "md",
          children: _v34.default.URL
        }), (0, _v1.jsxs)(_v95.Stack, {
          spacing: (0, _v13.rem)(16),
          children: [(0, _v1.jsx)(_v94.Radio, {
            name: "link",
            isChecked: !_v8,
            onChange: _v21,
            children: _v34.default.VimeoLink
          }), (0, _v1.jsx)(_v94.Radio, {
            name: "link",
            isChecked: !!_v8,
            onChange: _v21,
            isDisabled: !_v18,
            children: _v34.default.CustomLink
          })]
        })]
      }), (0, _v1.jsxs)(_v8.FormControl, {
        isInvalid: !_v19,
        children: [(0, _v1.jsx)(_v9.Input, {
          placeholder: _v34.default.EnterValidURL,
          isDisabled: !_v8,
          onChange: _v0 => {
            let _v1 = _v0.target.value;
            _v11((0, _v96.isValidUrl)((0, _v96.appendProtocol)(_v1)) ? (0, _v96.appendProtocol)(_v1) : _v1);
          },
          maxLength: _v27.EMAIL_MAX_LENGTH.LINK,
          value: _v8 ? _v10 || "" : (() => {
            switch (_v4) {
              case _v17.ENTITY_TYPE.EVENT:
                let _v0 = _v14 && "unlistedHash" in _v14 ? _v14.unlistedHash : "";
                return `${window.location.origin}${_v13}${_v0 ? `/${_v0}` : ""}`;
              case _v17.ENTITY_TYPE.VIDEO:
                return _v15;
              default:
                return "";
            }
          })(),
          onFocus: () => _v6(!0),
          onBlur: () => _v6(!1)
        }), !_v19 && (0, _v1.jsx)(_v93.FormErrorMessage, {
          py: (0, _v13.rem)(12),
          children: _v34.default.InvalidURL
        })]
      })]
    });
  };
  var _v98 = _v0.i(0),
    _v99 = _v0.i(0),
    _v100 = _v0.i(0),
    _v101 = _v0.i(0),
    _v102 = _v0.i(0),
    _v103 = _v0.i(0),
    _v104 = _v0.i(0),
    _v105 = _v0.i(0),
    _v106 = _v0.i(0),
    _v107 = _v0.i(0),
    _v108 = _v0.i(0);
  let _v109 = _v0 => {
    let _v1 = (0, _v105.useCache)(),
      {
        canAccessCustomLogo: _v2
      } = (0, _v22.useEntityCapability)(),
      _v3 = _v1.get(_v27.EMAIL_LOGOS_CACHE_KEY),
      {
        user: _v4
      } = (0, _v25.useEntityStore)(),
      {
        canAddPlayerLogo: _v5
      } = (0, _v28.useTeamStore)(),
      [_v6, _v7] = (0, _v2.useState)(),
      [_v8, _v9] = (0, _v2.useState)(_v3),
      [_v10, _v11] = (0, _v2.useState)(),
      _v12 = _v0.customLogo?.url,
      [_v13, {
        data: _v14,
        error: _v15,
        loading: _v16
      }] = (0, _v107.useGetUserTeamLogosLazy)(),
      [_v17, {
        data: _v18,
        error: _v19,
        loading: _v20
      }] = (0, _v106.useGetUserCustomlogosLazy)();
    return (0, _v2.useEffect)(() => {
      if (!_v5) return;
      let _v0 = (0, _v49.getUserIdFromUri)(_v4?.uri);
      _v13({
        where: {
          userId: _v0
        },
        select: ["uri", "sizes"],
        query: {
          sizes: _v27.logoFetchOptions.sizes
        }
      }), _v2 && _v17({
        where: {
          userId: _v0
        },
        select: ["uri", "sizes"],
        query: {
          sizes: _v27.logoFetchOptions.sizes
        }
      });
    }, [_v5, _v2, _v4?.uri]), (0, _v2.useEffect)(() => {
      if (_v14 || _v18) {
        let _v0 = _v14?.data || [],
          _v1 = _v18?.data || [],
          _v2 = _v14?.total || 0,
          _v3 = _v18?.total || 0,
          _v4 = {
            items: [..._v0, ..._v1].filter(_v0 => _v0?.sizes?.[0]),
            total: _v2 + _v3
          };
        _v1.set(_v27.EMAIL_LOGOS_CACHE_KEY, _v4);
      }
    }, [_v14, _v18, _v1]), (0, _v2.useEffect)(() => {
      if (_v8?.items) if (_v12 && _v12 !== _v27.FALLBACK_PLAYER_CUSTOM_LOGO) {
        let _v0 = (0, _v108.findLogoIndex)(_v8.items, _v12);
        _v7(_v0), _v10 && _v10 < 0 && _v11(_v0);
      } else _v7(0);
    }, [_v12, _v10, _v8]), (0, _v2.useEffect)(() => {
      let _v0 = _v1.subscribeToKey(_v27.EMAIL_LOGOS_CACHE_KEY, _v0 => {
        _v9(_v0);
      });
      return () => {
        _v0();
      };
    }, [_v1]), {
      isLoadingLogos: _v16 || _v20,
      originalIndex: _v10,
      setOriginalIndex: _v11,
      selectedLogoIndex: _v6,
      customLogoResponseError: (_v15 || _v19) && !_v8?.items ? _v34.default.SomethingWentWrong : "",
      customLogoResponse: _v8
    };
  };
  function _v110(_v0) {
    let _v1 = (0, _v105.useCache)(),
      _v2 = _v1.get(_v0) || [];
    return {
      removeLogoFromCache: (0, _v2.useCallback)(_v0 => {
        _v1.set(_v0, {
          ..._v2,
          ...{
            total: _v2.total - 1,
            items: _v2.items.filter(({
              uri: _v0
            }) => !_v0?.includes(_v0))
          }
        });
      }, [_v2]),
      addLogoToCache: (0, _v2.useCallback)(_v0 => {
        _v2.items.some(({
          uri: _v0
        }) => _v0 === _v0?.uri) || _v1.set(_v0, {
          ..._v2,
          ...{
            total: _v2.total + 1,
            items: [..._v2.items, _v0]
          }
        });
      }, [_v2])
    };
  }
  function _v111(_v0, _v1, _v2) {
    let [_v3, _v4] = (0, _v2.useState)(!1),
      [_v5, {
        data: _v6,
        error: _v7
      }] = (0, _v107.usePostUserTeamLogos)(),
      [_v8, {
        data: _v9
      }] = (0, _v107.useGetUserTeamLogosLazy)(),
      {
        addLogoToCache: _v10
      } = _v110(_v2),
      _v11 = (0, _v37.useToast)(),
      {
        user: _v12
      } = (0, _v25.useEntityStore)(),
      _v13 = (0, _v49.getUserIdFromUri)(_v12?.uri);
    return (0, _v2.useEffect)(() => {
      _v0 && (_v4(!0), _v5({
        where: {
          userId: _v13
        },
        select: ["link"]
      }));
    }, [_v0]), (0, _v2.useEffect)(() => {
      _v7 && (_v4(!1), _v11({
        title: _v34.default.UploadFailed,
        status: "error"
      }));
    }, [_v7]), (0, _v2.useEffect)(() => {
      _v6?.link && _v0 && (_v4(!0), (0, _v108.putFileUpload)(_v6.link, _v0).then(() => {
        _v8({
          where: {
            userId: _v13
          },
          select: ["uri", "sizes"],
          query: {
            sizes: _v27.logoFetchOptions.sizes
          }
        });
      }).catch(() => {
        _v4(!1), _v11({
          title: _v34.default.UploadFailed,
          status: "error"
        });
      }));
    }, [_v6?.link]), (0, _v2.useEffect)(() => {
      if (_v9?.data) {
        _v4(!1);
        let _v0 = (0, _v108.findLogoIndex)(_v9.data, _v6?.link),
          _v1 = _v9.data[_v0];
        _v1?.sizes.length > 0 && (_v10(_v1), _v1 && _v1(_v1));
      }
    }, [_v9]), {
      isUploading: _v3
    };
  }
  var _v112 = _v0.i(0),
    _v113 = _v0.i(0);
  let _v114 = (0, _v13.rem)(20),
    _v115 = (0, _v13.rem)(16),
    _v116 = (0, _v13.rem)(544),
    _v117 = `repeating-conic-gradient(#dee4e9 0% 25%, transparent 0% 50%) 50% / ${(0, _v13.rem)(16)} ${(0, _v13.rem)(16)}`,
    _v118 = ({
      file: _v0,
      isSaving: _v1,
      onChange: _v2,
      onCancel: _v3,
      onSave: _v4,
      onCloseComplete: _v5
    }) => {
      let [_v6, _v7] = (0, _v2.useState)(null);
      return (0, _v2.useEffect)(() => {
        let _v0 = _v0 ? URL.createObjectURL(_v0) : null;
        return _v7(_v0), () => {
          _v0 && URL.revokeObjectURL(_v0);
        };
      }, [_v0]), (0, _v1.jsxs)(_v58.Modal, {
        isOpen: null !== _v0,
        onClose: _v3,
        onCloseComplete: _v5,
        closeOnEsc: !_v1,
        closeOnOverlayClick: !_v1,
        isCentered: !0,
        size: "lg",
        children: [(0, _v1.jsx)(_v63.ModalOverlay, {}), (0, _v1.jsxs)(_v60.ModalContent, {
          maxWidth: _v116,
          borderRadius: _v114,
          children: [(0, _v1.jsx)(_v59.ModalBody, {
            padding: (0, _v13.rem)(8),
            children: (0, _v1.jsx)(_v112.AspectRatio, {
              ratio: 1.5,
              width: "100%",
              borderRadius: _v115,
              overflow: "hidden",
              sx: {
                background: _v117
              },
              children: _v6 ? (0, _v1.jsx)(_v98.Image, {
                src: _v6,
                alt: _v34.default.Logo,
                width: "100%",
                height: "100%",
                objectFit: "contain"
              }) : (0, _v1.jsx)(_v5.Box, {
                width: "100%",
                height: "100%"
              })
            })
          }), (0, _v1.jsx)(_v61.ModalFooter, {
            paddingTop: (0, _v13.rem)(16),
            paddingBottom: (0, _v13.rem)(24),
            paddingX: (0, _v13.rem)(24),
            children: (0, _v1.jsxs)(_v7.Flex, {
              align: "center",
              gap: (0, _v13.rem)(12),
              width: "100%",
              children: [(0, _v1.jsx)(_v36.Button, {
                variant: "secondary",
                size: "md",
                leftIcon: (0, _v1.jsx)(_v113.Redo, {}),
                onClick: _v2,
                isDisabled: _v1,
                children: _v34.default.Change
              }), (0, _v1.jsxs)(_v7.Flex, {
                flex: "1",
                justify: "flex-end",
                align: "center",
                gap: (0, _v13.rem)(12),
                minWidth: 0,
                children: [(0, _v1.jsx)(_v36.Button, {
                  variant: "tertiary",
                  size: "md",
                  onClick: _v3,
                  isDisabled: _v1,
                  children: _v34.default.Cancel
                }), (0, _v1.jsx)(_v36.Button, {
                  variant: "primary",
                  size: "md",
                  onClick: _v4,
                  isLoading: _v1,
                  children: _v34.default.Save
                })]
              })]
            })
          })]
        })]
      });
    };
  var _v119 = _v0.i(0),
    _v120 = _v0.i(0),
    _v121 = _v0.i(0),
    _v122 = _v0.i(0),
    _v123 = _v0.i(0),
    _v124 = _v0.i(0);
  let _v125 = ({
    errorMessage: _v0
  }) => (0, _v1.jsxs)(_v6.Center, {
    width: {
      base: (0, _v13.rem)(131),
      md: (0, _v13.rem)(256)
    },
    height: {
      base: (0, _v13.rem)(59),
      md: (0, _v13.rem)(129)
    },
    shadow: "shadow-lg",
    my: (0, _v13.rem)(12),
    border: `${(0, _v13.rem)(1)} solid`,
    borderColor: "red.500",
    flexDir: "column",
    p: (0, _v13.rem)(30),
    textAlign: "center",
    borderRadius: (0, _v13.rem)(3),
    children: [(0, _v1.jsx)(_v124.CircleExclamation, {
      color: "red.500",
      height: (0, _v13.rem)(24),
      width: (0, _v13.rem)(24)
    }), (0, _v1.jsx)(_v102.Text, {
      variant: "body-xl",
      color: "red.500",
      children: _v0
    })]
  });
  var _v126 = _v0.i(0);
  let _v127 = () => (0, _v1.jsx)(_v6.Center, {
    width: {
      base: (0, _v13.rem)(131),
      md: (0, _v13.rem)(256)
    },
    height: {
      base: (0, _v13.rem)(59),
      md: (0, _v13.rem)(129)
    },
    shadow: "shadow-lg",
    my: (0, _v13.rem)(12),
    border: `${(0, _v13.rem)(1)} solid`,
    borderColor: "blue.500",
    borderRadius: (0, _v13.rem)(3),
    children: (0, _v1.jsx)(_v126.Spinner, {})
  });
  var _v128 = _v0.i(0);
  let _v129 = ({
      isCurrent: _v0,
      isRemovable: _v1,
      onDelete: _v2,
      src: _v3,
      onClick: _v4
    }) => (0, _v1.jsx)(_v5.Box, {
      p: (0, _v13.rem)(10),
      position: "relative",
      display: "inline-block",
      m: `${(0, _v13.rem)(12)} ${(0, _v13.rem)(10)} ${(0, _v13.rem)(12)} 0`,
      height: {
        base: (0, _v13.rem)(59),
        md: (0, _v13.rem)(129)
      },
      width: {
        base: (0, _v13.rem)(131),
        md: (0, _v13.rem)(256)
      },
      cursor: "pointer",
      borderRadius: (0, _v13.rem)(3),
      shadow: "shadow-sm",
      transition: "border 0.3s ease-out",
      border: `${(0, _v13.rem)(1)} solid`,
      borderColor: _v0 ? "blue.500" : "transparent",
      background: `url(${_v3}) center/contain no-repeat content-box`,
      onClick: _v4,
      children: _v0 && _v1 && (0, _v1.jsx)(_v12.Tooltip, {
        content: _v34.default.Remove,
        children: (0, _v1.jsx)(_v53.IconButton, {
          "aria-label": "Delete",
          position: "absolute",
          top: (0, _v13.rem)(-14),
          right: (0, _v13.rem)(-15),
          variant: "secondary",
          icon: (0, _v1.jsx)(_v128.CloseXSmall, {}),
          size: "xs",
          onClick: _v0 => {
            _v0.stopPropagation(), _v2();
          }
        })
      })
    }),
    _v130 = ({
      availableLogos: _v0,
      currentLogoIndex: _v1,
      originalIndex: _v2,
      errorMessage: _v3,
      isLoading: _v4,
      shouldAnimate: _v5 = !0,
      setCurrentLogoIndex: _v6,
      onLogoDelete: _v7
    }) => {
      let [_v8] = (0, _v123.useDeleteUserCustomlogo)(),
        {
          user: _v9
        } = (0, _v25.useEntityStore)(),
        _v10 = _v0.map((_v0, _v1) => {
          let _v2 = _v0.sizes[0]?.link.replace(/(mw=([^&]*))|(&mh=([^&]*))/g, "");
          return (0, _v1.jsx)(_v129, {
            onClick: () => _v6(_v1),
            src: _v2,
            isRemovable: _v0.uri.indexOf("customlogos") > -1 && _v1 !== _v2,
            logoData: _v0,
            isCurrent: _v1 === _v1,
            onDelete: () => {
              _v7(_v0.uri), _v8({
                where: {
                  userId: (0, _v49.getUserIdFromUri)(_v9?.uri),
                  logoId: (0, _v49.getLastIdFromUri)(_v0.uri)
                }
              });
            }
          }, _v0.uri);
        });
      _v4 && (_v10 = [(0, _v1.jsx)(_v127, {}, "loading-state")]), _v3 && (_v10 = [(0, _v1.jsx)(_v125, {
        errorMessage: _v3
      }, "error-state")]);
      let _v11 = !_v4 && !_v3;
      return (0, _v1.jsxs)(_v5.Box, {
        position: "relative",
        height: {
          base: (0, _v13.rem)(86),
          md: (0, _v13.rem)(153)
        },
        children: [(0, _v1.jsx)(_v5.Box, {
          display: "inline-block",
          whiteSpace: "nowrap",
          position: "absolute",
          transition: _v11 && _v5 ? "left 0.3s ease-out" : "none",
          left: {
            base: (0, _v13.rem)(12 - (_v11 ? _v1 : 0) * 140),
            md: (0, _v13.rem)(26 - (_v11 ? _v1 : 0) * 266)
          },
          height: {
            base: (0, _v13.rem)(70),
            md: (0, _v13.rem)(153)
          },
          children: _v10
        }), (0, _v1.jsx)(_v53.IconButton, {
          borderRadius: "50% !important",
          position: "absolute",
          top: "50%",
          left: (0, _v13.rem)(-15),
          transform: "translateY(-50%)",
          _active: {
            transform: "translateY(-50%)"
          },
          variant: "secondary",
          "aria-label": "Previous",
          display: _v11 && _v1 > 0 ? "flex" : "none",
          icon: (0, _v1.jsx)(_v121.ChevronLeftSmall, {}),
          onClick: () => {
            _v6(_v1 - 1);
          }
        }), (0, _v1.jsx)(_v53.IconButton, {
          borderRadius: "50% !important",
          position: "absolute",
          top: "50%",
          right: (0, _v13.rem)(-15),
          transform: "translateY(-50%)",
          _active: {
            transform: "translateY(-50%)"
          },
          variant: "secondary",
          "aria-label": "Previous",
          display: _v11 && _v1 < _v0.length - 1 ? "flex" : "none",
          icon: (0, _v1.jsx)(_v122.ChevronRightSmall, {}),
          onClick: () => {
            _v6(_v1 + 1);
          }
        })]
      });
    },
    _v131 = (0, _v13.rem)(8),
    _v132 = (0, _v13.rem)(8),
    _v133 = ({
      availableLogos: _v0,
      currentLogoIndex: _v1,
      originalIndex: _v2,
      isLoading: _v3,
      errorMessage: _v4,
      setCurrentLogoIndex: _v5,
      onLogoDelete: _v6
    }) => {
      let [_v7] = (0, _v123.useDeleteUserCustomlogo)(),
        {
          user: _v8
        } = (0, _v25.useEntityStore)();
      return _v4 ? (0, _v1.jsx)(_v125, {
        errorMessage: _v4
      }) : _v3 ? (0, _v1.jsx)(_v5.Box, {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: _v132,
        width: "100%",
        children: Array.from({
          length: 4
        }).map((_v0, _v1) => (0, _v1.jsx)(_v112.AspectRatio, {
          ratio: 1.5,
          width: "100%",
          children: (0, _v1.jsx)(_v5.Box, {
            borderRadius: _v131,
            background: "fill-component"
          })
        }, _v1))
      }) : (0, _v1.jsx)(_v5.Box, {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: _v132,
        width: "100%",
        children: _v0.map((_v0, _v1) => {
          let _v2 = _v0.sizes[0]?.link.replace(/(mw=([^&]*))|(&mh=([^&]*))/g, ""),
            _v3 = _v1 === _v1,
            _v4 = _v3 && _v0.uri.indexOf("customlogos") > -1 && _v1 !== _v2;
          return (0, _v1.jsxs)(_v5.Box, {
            position: "relative",
            children: [(0, _v1.jsx)(_v112.AspectRatio, {
              ratio: 1.5,
              width: "100%",
              children: (0, _v1.jsx)(_v5.Box, {
                as: "button",
                type: "button",
                borderRadius: _v131,
                borderWidth: "2px",
                borderStyle: "solid",
                borderColor: _v3 ? "stroke-focus" : "stroke",
                background: "fill-surface",
                cursor: "pointer",
                onClick: () => _v5(_v1),
                sx: {
                  backgroundImage: `url(${_v2})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundOrigin: "content-box",
                  padding: (0, _v13.rem)(8)
                }
              })
            }), _v4 && (0, _v1.jsx)(_v12.Tooltip, {
              content: _v34.default.Remove,
              children: (0, _v1.jsx)(_v53.IconButton, {
                "aria-label": _v34.default.Remove,
                position: "absolute",
                top: (0, _v13.rem)(-8),
                right: (0, _v13.rem)(-8),
                variant: "secondary",
                icon: (0, _v1.jsx)(_v128.CloseXSmall, {}),
                size: "xs",
                onClick: _v0 => {
                  _v0.stopPropagation(), _v6(_v0.uri), _v7({
                    where: {
                      userId: (0, _v49.getUserIdFromUri)(_v8?.uri),
                      logoId: (0, _v49.getLastIdFromUri)(_v0.uri)
                    }
                  });
                }
              })
            })]
          }, _v0.uri);
        })
      });
    },
    _v134 = ({
      availableLogos: _v0 = [],
      currentLogoIndex: _v1,
      originalIndex: _v2,
      onLogoDelete: _v3,
      handleImageUpload: _v4,
      errorMessage: _v5 = "",
      isLoadingLogos: _v6,
      setCurrentLogoIndex: _v7,
      shouldAnimate: _v8 = !0,
      uploadVariant: _v9 = "file-input",
      onUploadClick: _v10
    }) => {
      if ("image-uploader" === _v9) {
        let _v0 = _v6 || _v0.length > 0 || !!_v5;
        return (0, _v1.jsxs)(_v7.Flex, {
          flexDir: "column",
          gap: (0, _v13.rem)(16),
          p: (0, _v13.rem)(8),
          width: (0, _v13.rem)(260),
          maxHeight: (0, _v13.rem)(320),
          overflow: "hidden",
          children: [(0, _v1.jsx)(_v36.Button, {
            variant: "secondary",
            size: "md",
            width: "100%",
            flexShrink: 0,
            leftIcon: (0, _v1.jsx)(_v120.Upload, {}),
            isDisabled: _v6,
            onClick: _v10,
            children: _v34.default.UploadImage
          }), _v0 && (0, _v1.jsxs)(_v7.Flex, {
            flexDir: "column",
            gap: (0, _v13.rem)(8),
            flex: "1",
            minHeight: 0,
            children: [(0, _v1.jsx)(_v102.Text, {
              variant: "body-sm",
              color: "text-tertiary",
              children: _v34.default.PreviouslyUsed
            }), (0, _v1.jsx)(_v5.Box, {
              flex: "1",
              minHeight: 0,
              overflowY: "auto",
              children: (0, _v1.jsx)(_v133, {
                availableLogos: _v0,
                currentLogoIndex: _v1,
                originalIndex: _v2,
                isLoading: _v6,
                errorMessage: _v5,
                setCurrentLogoIndex: _v7,
                onLogoDelete: _v3
              })
            })]
          })]
        });
      }
      return (0, _v1.jsxs)(_v7.Flex, {
        flexDir: "column",
        overflow: "hidden",
        p: (0, _v13.rem)(20),
        width: {
          base: (0, _v13.rem)(250),
          md: (0, _v13.rem)(350)
        },
        children: [(0, _v1.jsxs)(_v7.Flex, {
          mb: "sm",
          justifyContent: "space-between",
          children: [(0, _v1.jsx)(_v51.Header, {
            size: "xs",
            children: _v34.default.Logo
          }), (0, _v1.jsx)(_v51.Header, {
            size: "xs",
            children: _v0.length > 0 && (0, _v1.jsx)("span", {
              children: _v34.default.LogoOutOf(_v1 + 1, _v0.length)
            })
          })]
        }), (0, _v1.jsxs)(_v7.Flex, {
          position: "relative",
          flexDirection: "column",
          children: [_v6 || _v0.length || _v5 ? (0, _v1.jsx)(_v130, {
            availableLogos: _v0,
            currentLogoIndex: _v1,
            originalIndex: _v2,
            onLogoDelete: _v3,
            errorMessage: _v5,
            isLoading: _v6,
            setCurrentLogoIndex: _v7,
            shouldAnimate: _v8
          }) : (0, _v1.jsx)(_v135, {}), (0, _v1.jsx)(_v119.FileInput, {
            variant: "secondary",
            accept: _v27.SUPPORTED_IMAGE_FILES,
            onChange: _v0 => {
              _v0.target?.files?.length && _v4(_v0.target.files[0]);
            },
            isDisabled: _v6,
            label: (0, _v1.jsxs)(_v6.Center, {
              width: {
                base: (0, _v13.rem)(180),
                md: (0, _v13.rem)(280)
              },
              gap: (0, _v13.rem)(8),
              children: [(0, _v1.jsx)(_v104.Image, {}), (0, _v1.jsx)(_v51.Header, {
                size: "xs",
                children: _v34.default.Upload
              })]
            })
          })]
        })]
      });
    },
    _v135 = () => (0, _v1.jsx)(_v7.Flex, {
      mb: (0, _v13.rem)(14),
      height: {
        base: (0, _v13.rem)(63),
        md: (0, _v13.rem)(139)
      },
      width: "100%",
      backgroundSize: `${(0, _v13.rem)(16)} ${(0, _v13.rem)(16)}`,
      backgroundPosition: `0 0, 0 ${(0, _v13.rem)(8)}, ${(0, _v13.rem)(8)} ${(0, _v13.rem)(-8)}, ${(0, _v13.rem)(-8)} 0`,
      justifyContent: "center",
      background: `repeating-conic-gradient(#dee4e9 0% 25%, transparent 0% 50%) 50% / ${(0, _v13.rem)(18)} ${(0, _v13.rem)(18)}`
    }),
    _v136 = ({
      onSelectLogoSource: _v0,
      onUnsetLogo: _v1,
      setUploadFile: _v2,
      setOriginalIndex: _v3,
      selectedIndex: _v4,
      originalIndex: _v5,
      availableLogos: _v6,
      isLoadingLogos: _v7,
      errorMessage: _v8,
      cacheKey: _v9,
      onDelete: _v10,
      uploadVariant: _v11,
      onUploadClick: _v12
    }) => {
      let _v13 = (0, _v2.useRef)(_v6.length),
        [_v14, _v15] = (0, _v2.useState)(!1);
      (0, _v2.useEffect)(() => {
        _v7 || _v14 || setTimeout(() => {
          _v15(!0);
        }, 500);
      }, [_v4]);
      let _v16 = (0, _v2.useCallback)(_v0 => {
        if (null !== _v0) {
          let _v0 = _v6[_v0];
          _v0 && _v0(_v0);
        }
      }, [_v6]);
      (0, _v2.useEffect)(() => {
        _v13.current ? _v6.length ? _v13.current > _v6.length && (_v4 < _v5 && _v3(_v5 - 1), _v16(_v4 < _v6.length ? _v4 : _v4 - 1)) : _v1() : 1 === _v6.length && (_v3(-1), _v16(0)), _v13.current = _v6.length;
      }, [_v6.length, _v1, _v5, _v16, _v4, _v3]);
      let {
        removeLogoFromCache: _v17
      } = _v110(_v9);
      return (0, _v1.jsx)(_v134, {
        errorMessage: _v8,
        isLoadingLogos: _v7,
        onLogoDelete: _v0 => {
          _v17(_v0), _v10?.(_v0);
        },
        availableLogos: _v6,
        originalIndex: _v5,
        currentLogoIndex: _v4,
        setCurrentLogoIndex: _v16,
        handleImageUpload: _v0 => {
          _v2(_v0), _v15(!1);
        },
        shouldAnimate: _v14,
        uploadVariant: _v11,
        onUploadClick: _v12
      });
    };
  var _v137 = _v0.i(0),
    _v138 = _v0.i(0),
    _v139 = _v0.i(0),
    _v140 = _v0.i(0);
  function _v141() {
    let {
      innerWidth: _v0,
      innerHeight: _v1
    } = window;
    return {
      width: _v0,
      height: _v1,
      isMobileOrTablet: _v0 <= _v27.TABLET_SIZE || document.body.clientWidth <= _v27.TABLET_SIZE
    };
  }
  function _v142() {
    let [_v0, _v1] = (0, _v2.useState)(_v141());
    return (0, _v2.useEffect)(() => {
      let _v0 = () => {
        _v1(_v141());
      };
      return window.addEventListener("resize", _v0), () => window.removeEventListener("resize", _v0);
    }, []), {
      windowDimensions: _v0,
      canShowOverlay: () => !0
    };
  }
  let _v143 = ({
      selectedColor: _v0,
      handleOnChange: _v1,
      title: _v2,
      onSubmit: _v3
    }) => (0, _v1.jsxs)(_v7.Flex, {
      justifyContent: "space-between",
      alignItems: "center",
      mt: (0, _v13.rem)(25),
      children: [(0, _v1.jsx)(_v51.Header, {
        size: "xs",
        children: _v2
      }), (0, _v1.jsxs)(_v7.Flex, {
        alignItems: "center",
        children: [(0, _v1.jsx)(_v11.Paragraph, {
          pr: (0, _v13.rem)(10),
          size: "md",
          children: _v0?.toUpperCase()
        }), (0, _v1.jsx)(_v139.ColorPickerBrandKit, {
          onChange: _v1,
          color: _v0,
          onClose: () => _v3?.(_v0),
          productName: "registration",
          children: (0, _v1.jsx)(_v146, {
            color: _v0
          })
        })]
      })]
    }),
    _v144 = ({
      emailTemplate: _v0,
      emailToolBar: _v1,
      handleOnClick: _v2,
      dynamicTagRef: _v3
    }) => {
      let {
        dynamicTags: _v4,
        unTranslatedDynamicTags: _v5
      } = (() => {
        let [_v0, _v1] = (0, _v2.useState)([]),
          [_v2, _v3] = (0, _v2.useState)([]),
          {
            entityId: _v4,
            entityType: _v5
          } = (0, _v33.useConfigStore)(_v0 => _v0),
          [_v6, {
            data: _v7
          }] = (0, _v140.useGetLeadCaptureResourceIdFormLazy)();
        return (0, _v2.useEffect)(() => {
          _v4 && _v5 && _v6({
            where: {
              resourceId: _v4,
              resourceType: _v17.ENTITY_TO_PATH_MAP[_v5]
            },
            select: ["uuid", "customFields"]
          });
        }, [_v4, _v5, _v6]), (0, _v2.useEffect)(() => {
          let _v0 = _v7?.customFields?.filter(({
            name: _v0
          }) => _v0 !== _v27.EMAIL_ADDRESS).map(({
            name: _v0
          }) => _v0 in _v34.DYNAMIC_TAGS_MAP ? `${_v34.DYNAMIC_TAGS_MAP[_v0].label}` : `${_v0}`) || [];
          _v1([_v34.default.EntityTitle, _v34.default.TeamName, ..._v0]), _v3(["Webinar Title", "Team name", ...(_v7?.customFields?.filter(({
            name: _v0
          }) => _v0 !== _v27.EMAIL_ADDRESS).map(({
            name: _v0
          }) => _v0) || [])]);
        }, [_v7]), {
          dynamicTags: _v0,
          unTranslatedDynamicTags: _v2
        };
      })();
      return (0, _v1.jsxs)(_v5.Box, {
        mt: (0, _v13.rem)(30),
        children: [(0, _v1.jsx)(_v51.Header, {
          mb: (0, _v13.rem)(5),
          size: "xs",
          children: _v34.default.PersonalizedTags
        }), (0, _v1.jsx)(_v11.Paragraph, {
          color: "text-secondary",
          size: "md",
          children: _v34.default.PersonalizedTagsDescription
        }), (0, _v1.jsx)(_v7.Flex, {
          gap: (0, _v13.rem)(8),
          flexWrap: "wrap",
          mt: (0, _v13.rem)(20),
          ref: _v3,
          children: _v4.map((_v0, _v1) => (0, _v1.jsx)(_v137.Tag, {
            size: "md",
            onClick: () => (_v5[_v1], void _v2(_v0)),
            children: (0, _v1.jsx)(_v11.Paragraph, {
              fontSize: "body-md",
              cursor: "pointer",
              children: `{{${_v0}}}`
            })
          }, `${_v1}-${_v0}`))
        })]
      });
    },
    _v145 = ({
      title: _v0,
      values: _v1,
      selectedValue: _v2,
      handleSelect: _v3,
      addHTML: _v4 = !1
    }) => {
      let {
        windowDimensions: {
          width: _v5
        }
      } = _v142();
      return (0, _v1.jsxs)(_v7.Flex, {
        justifyContent: "space-between",
        alignItems: "center",
        mt: (0, _v13.rem)(25),
        children: [(0, _v1.jsx)(_v51.Header, {
          size: "xs",
          minW: (0, _v13.rem)(61),
          children: _v0
        }), (0, _v1.jsx)(_v7.Flex, {
          flex: 1,
          children: (0, _v1.jsx)(_v5.Box, {
            width: "100%",
            children: (0, _v1.jsx)(_v75.Select, {
              size: "md",
              value: _v2 ? [_v2] : [],
              items: _v1.map(_v0 => ({
                value: _v0,
                label: _v0
              })),
              onValueChange: _v0 => _v3(_v0.value[0]),
              children: _v0 => {
                let _v1;
                return (0, _v1.jsx)(_v75.SelectItem, {
                  display: "flex",
                  pointerEvents: _v0.value === _v27.EMAIL_TEXT_STYLE.MIXED ? "none" : "all",
                  opacity: _v0.value === _v27.EMAIL_TEXT_STYLE.MIXED ? .5 : 1,
                  children: (0, _v1.jsxs)(_v7.Flex, {
                    alignItems: "center",
                    children: [(0, _v1.jsx)(_v138.CheckmarkFilled, {
                      boxSize: (0, _v13.rem)(14),
                      mr: (0, _v13.rem)(10),
                      color: "blue.500",
                      visibility: _v2 === _v0.value ? "visible" : "hidden"
                    }), (0, _v1.jsx)(_v75.SelectItemText, {
                      children: (_v1 = _v0.label, _v4 ? (0, _v2.createElement)(_v27.EMAIL_TEXT_STYLE_VALUES[_v1], null, _v34.default.EmailTextStyle[_v1]) : _v34.default.EmailTextSize[_v1])
                    })]
                  })
                });
              }
            })
          })
        })]
      });
    },
    _v146 = ({
      color: _v0,
      ..._v1
    }) => (0, _v1.jsx)(_v5.Box, {
      borderRadius: "round",
      border: `${(0, _v13.rem)(1)} solid`,
      borderColor: "slate.100",
      background: _v0,
      boxSize: (0, _v13.rem)(24),
      cursor: "pointer",
      _hover: {
        borderColor: "blue.500"
      },
      ..._v1,
      children: _v1.children
    });
  var _v147 = _v0.i(0),
    _v148 = _v0.i(0);
  let _v149 = ({
      inline: _v0 = !1
    } = {}) => {
      let {
          emailState: _v1,
          dispatch: _v2
        } = (0, _v23.useEmailCustomization)(),
        [_v3, _v4] = (0, _v2.useState)(!1),
        [_v5, _v6] = (0, _v2.useState)(!0),
        [_v7, _v8] = (0, _v2.useState)(!0),
        {
          senderPolicyUrl: _v9,
          useReplyEmail: _v10,
          replyEmail: _v11,
          useSenderAddress: _v12,
          senderAddress: _v13 = "",
          useSenderPolicyUrl: _v14,
          emailToolbar: _v15
        } = _v1,
        [_v16, _v17] = (0, _v2.useState)(_v9),
        [_v18, _v19] = (0, _v2.useState)(_v11),
        _v20 = (0, _v2.useRef)(null),
        {
          hasEmailEditAccess: _v21
        } = (0, _v22.useEntityCapability)(),
        {
          sentRegistrationEmailLayoutChangeEvent: _v22
        } = (0, _v29.useAnalytics)(),
        _v23 = _v0 => () => {
          _v2({
            type: _v32.ACTION_TYPE.TOGGLE_SETTING_EMAIL,
            payload: _v0
          });
        },
        _v24 = (0, _v2.useCallback)(() => {
          let _v0 = !_v18 || (0, _v49.validateEmail)(_v18);
          _v8(_v0), (_v0 || !_v18) && (_v2({
            type: _v32.ACTION_TYPE.SET_FOOTER_EMAIL,
            payload: _v18 || ""
          }), _v22({
            actionName: _v31.BP_ACTION_NAMES.FOOTER_REPLY_EMAIL_ADDED
          }));
        }, [_v2, _v18]),
        _v25 = (0, _v2.useCallback)(() => {
          let _v0 = !_v16 || (0, _v96.isValidUrl)(_v16);
          if (_v6(_v0), _v0 || !_v16) {
            let _v0 = _v16 ? (0, _v96.appendProtocol)(_v16) : "";
            _v17(_v0), _v2({
              type: _v32.ACTION_TYPE.SET_FOOTER_POLICY,
              payload: _v0
            }), _v22({
              actionName: _v31.BP_ACTION_NAMES.FOOTER_PRIVACY_POLICY_ADDED
            });
          }
        }, [_v2, _v16]),
        _v26 = _v0 => {
          let _v1 = _v0.target.value;
          _v2({
            type: _v32.ACTION_TYPE.SET_FOOTER_ADDRESS,
            payload: _v1
          });
        };
      (0, _v20.default)(_v20, () => {
        _v3 && (_v24(), _v25(), _v4(!1));
      }, null, [_v24, _v25, _v3]), (0, _v2.useEffect)(() => {
        _v17(_v9), _v19(_v11), _v6(!0), _v8(!0);
      }, [_v15, _v3]);
      let _v27 = () => (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsxs)(_v150, {
          children: [(0, _v1.jsx)(_v102.Text, {
            variant: "body-md",
            children: _v34.default.FooterReplayMail
          }), (0, _v1.jsx)(_v148.Switch, {
            onChange: _v23(_v27.EMAIL_TOGGLE_MAP.FOOTER_REPLY_MAIL),
            size: "sm",
            isChecked: _v10,
            isDisabled: !_v21
          })]
        }), _v10 && (0, _v1.jsxs)(_v8.FormControl, {
          isInvalid: !_v7,
          children: [(0, _v1.jsx)(_v9.Input, {
            isDisabled: !_v21,
            onChange: _v0 => _v19(_v0.target.value),
            onBlur: _v24,
            placeholder: "email@address.com",
            maxLength: _v27.EMAIL_MAX_LENGTH.LINK,
            value: _v18 || ""
          }, "email-field"), (0, _v1.jsx)(_v93.FormErrorMessage, {
            children: _v34.default.PleaseEnterValidEmail
          })]
        }), (0, _v1.jsxs)(_v150, {
          children: [(0, _v1.jsx)(_v102.Text, {
            variant: "body-md",
            children: _v34.default.FooterCompanyAddress
          }), (0, _v1.jsx)(_v148.Switch, {
            onChange: _v23(_v27.EMAIL_TOGGLE_MAP.FOOTER_COMPANY_ADDRESS),
            size: "sm",
            isChecked: _v12,
            isDisabled: !_v21
          })]
        }), _v12 && (0, _v1.jsxs)(_v8.FormControl, {
          children: [(0, _v1.jsx)(_v9.Input, {
            isDisabled: !_v21,
            onChange: _v26,
            onBlur: () => {
              _v22({
                actionName: _v31.BP_ACTION_NAMES.FOOTER_COMPANY_ADDRESS_ADDED
              });
            },
            defaultValue: _v13 || "",
            value: _v13 || "",
            maxLength: _v27.EMAIL_MAX_LENGTH.FOOTER_ADDRESS
          }, "address-field"), (0, _v1.jsx)(_v8.FormHelperText, {
            children: (0, _v1.jsx)(_v35.CharCount, {
              value: _v13 || "",
              maxCharacters: _v27.EMAIL_MAX_LENGTH.FOOTER_ADDRESS
            })
          })]
        }), (0, _v1.jsxs)(_v150, {
          children: [(0, _v1.jsx)(_v102.Text, {
            variant: "body-md",
            children: _v34.default.FooterPolicyLink
          }), (0, _v1.jsx)(_v148.Switch, {
            onChange: _v23(_v27.EMAIL_TOGGLE_MAP.FOOTER_POLICY_LINK),
            size: "sm",
            isChecked: _v14,
            isDisabled: !_v21
          })]
        }), _v14 && (0, _v1.jsxs)(_v8.FormControl, {
          isInvalid: !_v5,
          children: [(0, _v1.jsx)(_v9.Input, {
            isDisabled: !_v21,
            onChange: _v0 => _v17(_v0.target.value),
            onBlur: _v25,
            placeholder: _v34.default.EnterValidURL,
            maxLength: _v27.EMAIL_MAX_LENGTH.LINK,
            value: _v16 || ""
          }, "link-field"), (0, _v1.jsx)(_v93.FormErrorMessage, {
            children: _v34.default.InvalidURL
          })]
        })]
      });
      return _v0 ? (0, _v1.jsxs)(_v5.Box, {
        mt: (0, _v13.rem)(25),
        ref: _v20,
        children: [(0, _v1.jsx)(_v51.Header, {
          size: "xs",
          mb: (0, _v13.rem)(10),
          children: _v34.default.Footer
        }), _v27()]
      }) : (0, _v1.jsxs)(_v99.Popover, {
        isOpen: _v3,
        children: [(0, _v1.jsx)(_v147.PopoverTrigger, {
          children: (0, _v1.jsxs)(_v7.Flex, {
            cursor: "pointer",
            mt: (0, _v13.rem)(25),
            justifyContent: "space-between",
            alignItems: "center",
            onClick: () => _v4(!_v3),
            children: [(0, _v1.jsx)(_v51.Header, {
              size: "xs",
              children: _v34.default.Footer
            }), (0, _v1.jsx)(_v7.Flex, {
              borderRadius: "input-xs",
              p: "xs",
              background: _v3 ? "stroke" : "",
              children: (0, _v1.jsx)(_v65.EditPencil, {})
            })]
          })
        }), (0, _v1.jsx)(_v101.PopoverContent, {
          children: (0, _v1.jsxs)(_v5.Box, {
            width: (0, _v13.rem)(320),
            pt: "px",
            pr: "lg",
            pb: "lg",
            ref: _v20,
            children: [(0, _v1.jsx)(_v150, {
              children: (0, _v1.jsx)(_v51.Header, {
                size: "xs",
                children: _v34.default.Footer
              })
            }), _v27()]
          })
        })]
      });
    },
    _v150 = _v0 => (0, _v1.jsx)(_v7.Flex, {
      justifyContent: "space-between",
      mb: (0, _v13.rem)(10),
      alignItems: "center",
      mt: (0, _v13.rem)(25),
      ..._v0,
      children: _v0.children
    }),
    _v151 = () => {
      let {
          emailState: _v0,
          dispatch: _v1
        } = (0, _v23.useEmailCustomization)(),
        {
          canAddPlayerLogo: _v2
        } = (0, _v28.useTeamStore)(),
        {
          hasEmailEditAccess: _v3
        } = (0, _v22.useEntityCapability)(),
        {
          sentRegistrationEmailLayoutChangeEvent: _v4
        } = (0, _v29.useAnalytics)(),
        _v5 = (0, _v33.useConfigStore)(_v0 => _v0.onNavigateToAttendeePage),
        [_v6, _v7] = (0, _v2.useState)(!1),
        [_v8, _v9] = (0, _v2.useState)(!1),
        {
          customLogoResponse: _v10,
          customLogoResponseError: _v11,
          originalIndex: _v12,
          setOriginalIndex: _v13,
          selectedLogoIndex: _v14,
          isLoadingLogos: _v15
        } = _v109(_v0),
        _v16 = (0, _v2.useCallback)(_v0 => {
          _v1({
            type: _v32.ACTION_TYPE.SET_CUSTOM_LOGO_IMAGE,
            payload: (0, _v108.getCustomLogoImagePayload)(_v0)
          }), _v4({
            actionName: _v31.BP_ACTION_NAMES.LOGO_ADDED
          });
        }, [_v1]),
        [_v17, _v18] = (0, _v2.useState)(),
        {
          isUploading: _v19
        } = _v111(_v17, _v16, _v27.EMAIL_LOGOS_CACHE_KEY),
        _v20 = () => _v1({
          type: _v32.ACTION_TYPE.SET_CUSTOM_LOGO_IMAGE,
          payload: {
            url: ""
          }
        }),
        _v21 = !!_v0.customLogo?.url,
        _v22 = () => {
          _v2 && _v7(!0);
        },
        _v23 = (0, _v2.useRef)(null),
        [_v24, _v25] = (0, _v2.useState)(null),
        [_v26, _v27] = (0, _v2.useState)(!1),
        _v28 = () => _v23.current?.click(),
        _v29 = () => _v25(null),
        _v30 = (0, _v2.useRef)(!1);
      return (0, _v2.useEffect)(() => {
        _v30.current && !_v19 && (_v25(null), _v27(!1)), _v30.current = _v19;
      }, [_v19]), (0, _v1.jsxs)(_v92.Panel, {
        isVisible: !0,
        background: "fill-surface",
        borderRadius: "md",
        overflow: "hidden",
        width: "100%",
        maxWidth: (0, _v13.rem)(320),
        sx: {
          minHeight: "100%"
        },
        children: [(0, _v1.jsx)(_v92.PanelHeader, {
          px: (0, _v13.rem)(16),
          pt: (0, _v13.rem)(24),
          pb: (0, _v13.rem)(4),
          children: (0, _v1.jsx)(_v51.Header, {
            size: "md",
            children: _v34.default.General
          })
        }), (0, _v1.jsxs)(_v92.PanelBody, {
          px: (0, _v13.rem)(16),
          pt: 0,
          pb: (0, _v13.rem)(24),
          children: [(0, _v1.jsx)(_v143, {
            handleOnChange: _v0 => {
              (0, _v49.isValidHex)(_v0) && _v1({
                type: _v32.ACTION_TYPE.SET_COLOR,
                payload: _v0
              });
            },
            selectedColor: _v0.accentColor || "",
            title: _v34.default.AccentColor,
            onSubmit: () => _v4({
              actionName: _v31.BP_ACTION_NAMES.ACCENT_COLOR_CHANGED
            })
          }), (0, _v1.jsxs)(_v5.Box, {
            mt: (0, _v13.rem)(12),
            children: [(0, _v1.jsx)(_v51.Header, {
              size: "xs",
              mb: (0, _v13.rem)(10),
              children: _v34.default.Logo
            }), (0, _v1.jsxs)(_v99.Popover, {
              placement: "bottom-start",
              isLazy: !0,
              isOpen: _v6,
              onClose: () => _v7(!1),
              children: [(0, _v1.jsx)(_v100.PopoverAnchor, {
                children: _v21 ? (0, _v1.jsxs)(_v7.Flex, {
                  align: "center",
                  gap: (0, _v13.rem)(12),
                  py: (0, _v13.rem)(8),
                  pl: (0, _v13.rem)(8),
                  pr: (0, _v13.rem)(12),
                  width: "100%",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: "input-stroke",
                  borderRadius: (0, _v13.rem)(12),
                  backgroundColor: "fill-surface",
                  cursor: _v2 ? "pointer" : "default",
                  onClick: _v22,
                  children: [(0, _v1.jsx)(_v98.Image, {
                    src: _v0.customLogo?.url ?? void 0,
                    alt: _v34.default.Logo,
                    boxSize: (0, _v13.rem)(48),
                    objectFit: "contain",
                    borderRadius: (0, _v13.rem)(8),
                    backgroundColor: "background",
                    flexShrink: 0
                  }), (0, _v1.jsx)(_v5.Box, {
                    flex: "1",
                    minW: 0
                  }), (0, _v1.jsx)(_v53.IconButton, {
                    "aria-label": _v34.default.Remove,
                    icon: (0, _v1.jsx)(_v103.CloseX, {}),
                    variant: "tertiary",
                    size: "sm",
                    isDisabled: !_v2,
                    onClick: _v0 => {
                      _v0.stopPropagation(), _v2 && _v20();
                    }
                  })]
                }) : (0, _v1.jsxs)(_v5.Box, {
                  as: "button",
                  type: "button",
                  display: "flex",
                  alignItems: "center",
                  gap: (0, _v13.rem)(12),
                  py: (0, _v13.rem)(8),
                  pl: (0, _v13.rem)(8),
                  pr: (0, _v13.rem)(12),
                  width: "100%",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: "input-stroke",
                  borderRadius: (0, _v13.rem)(12),
                  backgroundColor: "fill-surface",
                  textAlign: "left",
                  cursor: _v2 ? "pointer" : "not-allowed",
                  opacity: _v2 ? 1 : .6,
                  disabled: !_v2,
                  onClick: _v22,
                  children: [(0, _v1.jsx)(_v7.Flex, {
                    align: "center",
                    justify: "center",
                    boxSize: (0, _v13.rem)(48),
                    borderRadius: (0, _v13.rem)(8),
                    backgroundColor: "fill-component",
                    flexShrink: 0,
                    children: (0, _v1.jsx)(_v104.Image, {
                      color: "text-secondary"
                    })
                  }), (0, _v1.jsxs)(_v7.Flex, {
                    direction: "column",
                    gap: (0, _v13.rem)(2),
                    children: [(0, _v1.jsx)(_v102.Text, {
                      variant: "body-md",
                      fontFamily: "heading",
                      color: "text-primary",
                      children: _v34.default.SelectLogo
                    }), (0, _v1.jsx)(_v102.Text, {
                      variant: "body-sm",
                      color: "text-secondary",
                      children: _v34.default.LogoFormatHint
                    })]
                  })]
                })
              }), (0, _v1.jsx)(_v101.PopoverContent, {
                borderRadius: "sm",
                children: (0, _v1.jsx)(_v136, {
                  uploadVariant: "image-uploader",
                  onUploadClick: _v28,
                  onUnsetLogo: _v20,
                  onSelectLogoSource: _v16,
                  selectedIndex: _v14 || 0,
                  originalIndex: void 0 === _v12 ? -1 : _v12,
                  setOriginalIndex: _v13,
                  availableLogos: void 0 === _v14 || _v15 ? [] : _v10?.items,
                  isLoadingLogos: _v15 || void 0 === _v14 || _v19,
                  setUploadFile: _v18,
                  errorMessage: _v11,
                  cacheKey: _v27.EMAIL_LOGOS_CACHE_KEY
                })
              })]
            }), (0, _v1.jsx)("input", {
              ref: _v23,
              type: "file",
              accept: _v27.SUPPORTED_IMAGE_FILES,
              hidden: !0,
              onChange: _v0 => {
                let _v1 = _v0.target.files?.[0];
                _v0.target.value = "", _v1 && (_v7(!1), _v25(_v1));
              }
            }), (0, _v1.jsx)(_v118, {
              file: _v24,
              isSaving: _v26,
              onChange: _v28,
              onCancel: _v29,
              onSave: () => {
                _v24 && (_v27(!0), _v18(_v24));
              },
              onCloseComplete: _v29
            }), (0, _v1.jsx)(_v11.Paragraph, {
              size: "sm",
              color: "text-secondary",
              mt: (0, _v13.rem)(12),
              children: (0, _v15.translate)("Set the default accent color and logo for new events in registration settings. Changes here apply to this event only.")
            })]
          }), _v3 && (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v5.Box, {
              borderTop: `${(0, _v13.rem)(1)} solid`,
              borderColor: "stroke",
              mt: (0, _v13.rem)(24)
            }), (0, _v1.jsx)(_v149, {
              inline: !0
            })]
          }), !_v3 && !_v8 && (0, _v1.jsx)(_v3.Alert, {
            mt: (0, _v13.rem)(20),
            onClose: () => _v9(!0),
            children: (0, _v1.jsx)(_v4.AlertDescription, {
              children: (0, _v15.translate)({
                singular: "Text customization is currently unavailable. If you prefer to send an email on your own, you can {LINK}export the list of attendees{/LINK}.",
                replacements: {
                  LINK: _v0 => (0, _v1.jsx)(_v10.Link, {
                    onClick: _v5,
                    children: _v0
                  })
                },
                dictionary: {
                  es: {
                    singular: "La personalización del texto no está disponible actualmente. Si prefiere enviar un correo electrónico por su cuenta, puede {LINK}exportar la lista de asistentes{/LINK}."
                  },
                  "de-DE": {
                    singular: "Die Textanpassung ist derzeit nicht verfügbar. Wenn du lieber selbst eine E-Mail versenden möchtest, kannst du die {LINK}Teilnehmerliste exportieren{/LINK}."
                  },
                  "fr-FR": {
                    singular: "La personnalisation du texte n'est pas disponible actuellement. Si vous préférez envoyer vous-même un e-mail, vous pouvez {LINK}exporter la liste des participants{/LINK}."
                  },
                  "ja-JP": {
                    singular: "現在、テキストのカスタマイズはできません。自分でメールを送信したい場合は、{LINK}参加者リストをエクスポート{/LINK}できます。"
                  },
                  "ko-KR": {
                    singular: "커스텀 텍스트는 현재 이용할 수 없습니다.이메일을 직접 보내려면 {LINK}참석자 목록 내보내기{/LINK}가 가능합니다."
                  },
                  "pt-BR": {
                    singular: "A personalização de texto não está disponível no momento. Se preferir enviar um e-mail por conta própria, você pode {LINK}exportar a lista de participantes{/LINK}."
                  },
                  "zh-CN": {
                    singular: "文本定制功能目前不可用。如果您希望自行发送电子邮件，可以{LINK}导出出席者列表{/LINK}。"
                  }
                }
              })
            })
          })]
        })]
      });
    };
  var _v152 = _v0.i(0);
  let _v153 = () => {
      let {
          emailState: _v0,
          dispatch: _v1
        } = (0, _v23.useEmailCustomization)(),
        {
          teamName: _v2,
          canAddPlayerLogo: _v3,
          isLoading: _v4
        } = (0, _v28.useTeamStore)(),
        [_v5, _v6] = (0, _v2.useState)(!1),
        [_v7, _v8] = (0, _v2.useState)(!1),
        _v9 = (0, _v2.useRef)(null),
        _v10 = (0, _v2.useRef)(null),
        {
          hasEmailEditAccess: _v11
        } = (0, _v22.useEntityCapability)(),
        [_v12, _v13] = (0, _v2.useState)(!_v11),
        _v14 = (0, _v33.useConfigStore)(_v0 => _v0.onNavigateToAttendeePage),
        {
          sentRegistrationEmailLayoutChangeEvent: _v15
        } = (0, _v29.useAnalytics)();
      (0, _v20.default)([_v9, _v10], () => _v8(!1));
      let {
          customLogoResponse: _v16,
          customLogoResponseError: _v17,
          originalIndex: _v18,
          setOriginalIndex: _v19,
          selectedLogoIndex: _v20,
          isLoadingLogos: _v21
        } = _v109(_v0),
        _v22 = (0, _v2.useCallback)(_v0 => {
          _v1({
            type: _v32.ACTION_TYPE.SET_CUSTOM_LOGO_IMAGE,
            payload: (0, _v108.getCustomLogoImagePayload)(_v0)
          }), _v15({
            actionName: _v31.BP_ACTION_NAMES.LOGO_ADDED
          });
        }, [_v1]),
        [_v23, _v24] = (0, _v2.useState)(),
        {
          isUploading: _v25
        } = _v111(_v23, _v22, _v27.EMAIL_LOGOS_CACHE_KEY);
      return (0, _v2.useEffect)(() => {
        _v13(!_v11);
      }, [_v11]), (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v51.Header, {
          mb: (0, _v13.rem)(30),
          size: "md",
          children: _v34.default.General
        }), _v11 && (0, _v1.jsxs)(_v5.Box, {
          mb: (0, _v13.rem)(0),
          children: [(0, _v1.jsx)(_v51.Header, {
            mb: "sm",
            size: "xs",
            children: _v34.default.FromGeneral
          }), (0, _v1.jsxs)(_v8.FormControl, {
            position: "relative",
            children: [(0, _v1.jsx)(_v9.Input, {
              isDisabled: !_v11,
              maxLength: _v27.EMAIL_MAX_LENGTH.FROM,
              value: _v0.from,
              placeholder: _v4 ? _v34.default.Loading : "",
              onFocus: () => {
                _v6(!0);
              },
              onBlur: () => {
                _v6(!1), _v0.from || _v1({
                  type: _v32.ACTION_TYPE.SET_FROM,
                  payload: _v2 || _v27.VIMEO
                }), _v15({
                  actionName: _v31.BP_ACTION_NAMES.FROM_TEXT_CHANGED
                });
              },
              size: "md",
              onChange: _v0 => {
                _v1({
                  type: _v32.ACTION_TYPE.SET_FROM,
                  payload: _v0.target.value
                });
              }
            }), (0, _v1.jsx)(_v8.FormHelperText, {
              position: "absolute",
              bottom: (0, _v13.rem)(-20),
              visibility: _v5 ? "visible" : "hidden",
              children: (0, _v1.jsx)(_v35.CharCount, {
                value: _v0.from,
                maxCharacters: _v27.EMAIL_MAX_LENGTH.FROM
              })
            })]
          })]
        }), (0, _v1.jsx)(_v143, {
          handleOnChange: _v0 => {
            (0, _v49.isValidHex)(_v0) && _v1 && _v1({
              type: _v32.ACTION_TYPE.SET_COLOR,
              payload: _v0
            });
          },
          selectedColor: _v0.accentColor || "",
          title: _v34.default.AccentColor,
          onSubmit: () => {
            _v15({
              actionName: _v31.BP_ACTION_NAMES.ACCENT_COLOR_CHANGED
            });
          }
        }), (0, _v1.jsxs)(_v7.Flex, {
          onKeyDown: _v0 => {
            _v0.key === _v27.KEY_CODES.ESCAPE && (_v0.preventDefault(), _v0.stopPropagation(), _v8(!1));
          },
          justifyContent: "space-between",
          alignItems: "center",
          mt: (0, _v13.rem)(25),
          children: [(0, _v1.jsx)(_v51.Header, {
            size: "xs",
            children: _v34.default.Logo
          }), (0, _v1.jsxs)(_v99.Popover, {
            placement: "bottom-start",
            isLazy: !0,
            isOpen: _v7,
            children: [(0, _v1.jsx)(_v147.PopoverTrigger, {
              children: (0, _v1.jsx)("div", {
                ref: _v9,
                children: _v0.customLogo?.url ? (0, _v1.jsx)(_v5.Box, {
                  border: `${(0, _v13.rem)(1)} solid`,
                  borderColor: "stroke",
                  borderRadius: "xs",
                  overflow: "hidden",
                  height: (0, _v13.rem)(32),
                  cursor: _v3 ? "pointer" : "not-allowed",
                  opacity: _v3 ? 1 : .8,
                  onClick: () => _v3 && _v8(!_v7),
                  children: (0, _v1.jsx)(_v5.Box, {
                    as: "img",
                    objectFit: "contain",
                    src: _v0.customLogo.url,
                    height: (0, _v13.rem)(32),
                    width: (0, _v13.rem)(56),
                    alt: _v34.default.Logo
                  })
                }) : (0, _v1.jsxs)(_v7.Flex, {
                  alignItems: "center",
                  cursor: _v3 ? "pointer" : "not-allowed",
                  opacity: _v3 ? 1 : .5,
                  ref: _v9,
                  onClick: () => _v3 && _v8(!_v7),
                  children: [(0, _v1.jsx)(_v11.Paragraph, {
                    mr: (0, _v13.rem)(10),
                    size: "md",
                    children: _v34.default.Add
                  }), (0, _v1.jsx)(_v152.PlusCircle, {
                    boxSize: (0, _v13.rem)(28)
                  })]
                })
              })
            }), (0, _v1.jsx)(_v101.PopoverContent, {
              borderRadius: "sm",
              children: (0, _v1.jsx)("div", {
                ref: _v10,
                children: (0, _v1.jsx)(_v136, {
                  onUnsetLogo: () => _v1({
                    type: _v32.ACTION_TYPE.SET_CUSTOM_LOGO_IMAGE,
                    payload: {
                      url: ""
                    }
                  }),
                  onSelectLogoSource: _v22,
                  selectedIndex: _v20 || 0,
                  originalIndex: void 0 === _v18 ? -1 : _v18,
                  setOriginalIndex: _v19,
                  availableLogos: void 0 === _v20 || _v21 ? [] : _v16?.items,
                  isLoadingLogos: _v21 || void 0 === _v20 || _v25,
                  setUploadFile: _v24,
                  errorMessage: _v17,
                  cacheKey: _v27.EMAIL_LOGOS_CACHE_KEY
                })
              })
            })]
          })]
        }), _v11 && (0, _v1.jsx)(_v149, {}), _v12 && (0, _v1.jsx)(_v3.Alert, {
          mt: (0, _v13.rem)(20),
          onClose: () => _v13(!1),
          children: (0, _v1.jsx)(_v4.AlertDescription, {
            children: (0, _v15.translate)({
              singular: "Text customization is currently unavailable. If you prefer to send an email on your own, you can {LINK}export the list of attendees{/LINK}.",
              replacements: {
                LINK: _v0 => (0, _v1.jsx)(_v10.Link, {
                  onClick: _v14,
                  children: _v0
                })
              },
              dictionary: {
                es: {
                  singular: "La personalización del texto no está disponible actualmente. Si prefiere enviar un correo electrónico por su cuenta, puede {LINK}exportar la lista de asistentes{/LINK}."
                },
                "de-DE": {
                  singular: "Die Textanpassung ist derzeit nicht verfügbar. Wenn du lieber selbst eine E-Mail versenden möchtest, kannst du die {LINK}Teilnehmerliste exportieren{/LINK}."
                },
                "fr-FR": {
                  singular: "La personnalisation du texte n'est pas disponible actuellement. Si vous préférez envoyer vous-même un e-mail, vous pouvez {LINK}exporter la liste des participants{/LINK}."
                },
                "ja-JP": {
                  singular: "現在、テキストのカスタマイズはできません。自分でメールを送信したい場合は、{LINK}参加者リストをエクスポート{/LINK}できます。"
                },
                "ko-KR": {
                  singular: "커스텀 텍스트는 현재 이용할 수 없습니다.이메일을 직접 보내려면 {LINK}참석자 목록 내보내기{/LINK}가 가능합니다."
                },
                "pt-BR": {
                  singular: "A personalização de texto não está disponível no momento. Se preferir enviar um e-mail por conta própria, você pode {LINK}exportar a lista de participantes{/LINK}."
                },
                "zh-CN": {
                  singular: "文本定制功能目前不可用。如果您希望自行发送电子邮件，可以{LINK}导出出席者列表{/LINK}。"
                }
              }
            })
          })
        })]
      });
    },
    _v154 = ({
      dynamicTagRef: _v0
    }) => {
      let {
          emailState: _v1,
          dispatch: _v2,
          activeContentKey: _v3
        } = (0, _v23.useEmailCustomization)(),
        {
          sentRegistrationEmailLayoutChangeEvent: _v4
        } = (0, _v29.useAnalytics)();
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v51.Header, {
          size: "md",
          mb: (0, _v13.rem)(5),
          children: _v34.default.SubjectGeneral
        }), (0, _v1.jsx)(_v144, {
          emailTemplate: _v1.emailTemplateType,
          emailToolBar: _v27.EMAIL_TOOLBAR_TYPES.SUBJECT,
          handleOnClick: _v0 => {
            let _v1 = document.getElementById(`${_v1.emailTemplateType.toLowerCase()}-email-subject`),
              _v2 = `{{${_v0}}}`,
              _v3 = "",
              _v4 = 0;
            if (_v1.selectionStart || 0 == _v1.selectionStart) {
              let _v0 = _v1.selectionStart;
              _v4 = _v1.selectionEnd || 0, _v3 = _v1.value.substring(0, _v0) + _v2 + _v1.value.substring(_v4, _v1.value.length);
            } else _v3 += _v2;
            _v3.length <= _v27.EMAIL_MAX_LENGTH.SUBJECT && (_v2({
              type: _v32.ACTION_TYPE.SET_SUBJECT,
              payload: {
                text: _v3,
                emailTab: _v3
              }
            }), _v4({
              actionName: _v31.BP_ACTION_NAMES.DYNAMIC_TAGS_ADDED_TO_SUBJECT,
              type: _v31.BP_TYPE[_v1.emailTemplateType]
            }), _v1.focus(), _v4 === _v1.value.length && setTimeout(() => {
              _v1.scrollLeft = _v3.length;
            }, 100));
          },
          dynamicTagRef: _v0
        })]
      });
    };
  var _v155 = _v0.i(0),
    _v156 = _v0.i(0),
    _v157 = _v0.i(0),
    _v158 = _v0.i(0),
    _v159 = _v0.i(0),
    _v160 = _v0.i(0),
    _v161 = _v0.i(0);
  let _v162 = _v0 => {
      let {
        LEFT: _v1,
        CENTER: _v2,
        RIGHT: _v3
      } = _v27.EMAIL_TEXT_FORMAT;
      return _v0?.isActive({
        textAlign: _v1
      }) ? _v1 : _v0?.isActive({
        textAlign: _v2
      }) ? _v2 : _v0?.isActive({
        textAlign: _v3
      }) ? _v3 : null;
    },
    _v163 = ({
      editorStates: _v0
    }) => {
      let {
          emailState: _v1,
          dispatch: _v2,
          activeContentKey: _v3
        } = (0, _v23.useEmailCustomization)(),
        {
          emailToolbar: _v4,
          emailTemplateType: _v5
        } = _v1,
        {
          sentRegistrationEmailLayoutChangeEvent: _v6,
          sentTriggerHelpAction: _v7
        } = (0, _v29.useAnalytics)(),
        _v8 = _v4 === _v27.EMAIL_TOOLBAR_TYPES.BODY || _v4 === _v27.EMAIL_TOOLBAR_TYPES.TITLE,
        _v9 = _v8 ? _v0[_v5][_v4] : null,
        _v10 = _v162(_v9),
        _v11 = (_v0 => {
          let {
            NUMBERED: _v1,
            BULLETED: _v2
          } = _v27.EMAIL_LIST_FORMAT;
          return _v0?.isActive(_v1) ? _v1 : _v0?.isActive(_v2) ? _v2 : null;
        })(_v9),
        _v12 = _v9?.getAttributes("textStyle").color || "#000000",
        _v13 = _v9?.state.selection.empty,
        [_v14, _v15] = (0, _v2.useState)({
          from: 0,
          to: 0
        }),
        [_v16, _v17] = (0, _v2.useState)(!1),
        _v18 = (0, _v2.useRef)(null),
        _v19 = (0, _v2.useRef)(null),
        _v20 = (_v0 => {
          let {
              BOLD: _v1,
              ITALIC: _v2,
              UNDERLINE: _v3,
              MIXED: _v4,
              REGULAR: _v5
            } = _v27.EMAIL_TEXT_STYLE,
            _v6 = _v0?.isActive(_v1.toLowerCase()),
            _v7 = _v0?.isActive(_v2.toLowerCase()),
            _v8 = _v0?.isActive(_v3.toLowerCase());
          return (_v6 ? _v7 || _v8 : _v7 && _v8) ? _v4 : _v6 ? _v1 : _v7 ? _v2 : _v8 ? _v3 : _v5;
        })(_v9);
      (0, _v20.default)([_v18, _v19], () => _v17(!1));
      let [_v21, _v22] = (0, _v2.useState)(!1),
        _v23 = (0, _v2.useRef)(null),
        _v24 = (0, _v2.useRef)(null),
        _v25 = (_v0 => {
          let {
            HUGE: _v1,
            EXTRA_LARGE: _v2,
            LARGE: _v3,
            REGULAR: _v4
          } = _v27.EMAIL_TEXT_SIZE;
          switch (_v0?.getAttributes("textStyle").fontSize) {
            case _v27.EMAIL_TEXT_SIZE_VALUES[_v1]:
              return _v1;
            case _v27.EMAIL_TEXT_SIZE_VALUES[_v2]:
              return _v2;
            case _v27.EMAIL_TEXT_SIZE_VALUES[_v3]:
              return _v3;
            default:
              return _v4;
          }
        })(_v9);
      (0, _v20.default)([_v23, _v24], () => _v22(!1));
      let {
        windowDimensions: {
          width: _v26
        }
      } = _v142();
      (0, _v2.useEffect)(() => {
        _v17(!1), _v22(!1);
      }, [_v26]);
      let _v27 = _v0 => () => {
          let _v0 = "",
            _v1 = _v13 ? _v9?.chain().selectAll().focus() : _v9?.chain().focus();
          _v162(_v9) === _v0 ? _v1?.unsetTextAlign().run() : (_v0 = _v0, _v1?.setTextAlign(_v0).run()), _v2({
            type: _v4 === _v27.EMAIL_TOOLBAR_TYPES.TITLE ? _v32.ACTION_TYPE.SET_HEADER_TEXT_ALIGN : _v32.ACTION_TYPE.SET_BODY_TEXT_ALIGN,
            payload: {
              text: _v0,
              emailTab: _v3
            }
          });
        },
        _v28 = _v0 => () => {
          _v2({
            type: _v4 === _v27.EMAIL_TOOLBAR_TYPES.TITLE ? _v32.ACTION_TYPE.SET_HEADER_TEXT_FORMAT : _v32.ACTION_TYPE.SET_BODY_TEXT_FORMAT,
            payload: {
              text: _v0,
              emailTab: _v3
            }
          }), _v0 === _v27.EMAIL_LIST_FORMAT.NUMBERED ? _v9?.chain().focus().toggleOrderedList().run() : _v9?.chain().focus().toggleBulletList().run();
        };
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v51.Header, {
          size: "md",
          mb: "md",
          children: _v34.default.Text
        }), (0, _v1.jsx)(_v11.Paragraph, {
          size: "md",
          color: "text-secondary",
          children: (0, _v15.translate)({
            singular: "Tip: Keep your email simple, short, and non-promotional. {LINK}Learn more{/LINK}",
            replacements: {
              LINK: _v0 => (0, _v1.jsx)(_v10.Link, {
                color: "text-secondary",
                target: "_blank",
                href: _v27.EMAIL_TEXT_TIP_LINK,
                onClick: () => {
                  _v7();
                },
                children: _v0
              })
            },
            dictionary: {
              "fr-FR": {
                singular: "Conseil : créez une adresse e-mail simple, courte et non publicitaire. {LINK}En savoir plus{/LINK}"
              },
              "ja-JP": {
                singular: "ヒント：Eメールは短くシンプルに、プロモーション目的な内容にならないようにしましょう。{LINK}詳細はこちら{/LINK}"
              },
              "ko-KR": {
                singular: "팁: 이메일을 홍보성 메시지 없이 짧고 간결하게 유지하세요. {LINK}자세히 보기{/LINK}"
              },
              "zh-CN": {
                singular: "提示：保持电子邮件简单、简短且不包含促销内容。{LINK}了解更多{/LINK}"
              }
            }
          })
        }), (0, _v1.jsx)(_v145, {
          title: _v34.default.Size,
          isActive: _v21,
          handleDropDownClick: () => _v22(!_v21),
          dropDownRef: _v23,
          dropDownContentRef: _v24,
          values: Object.keys(_v27.EMAIL_TEXT_SIZE_VALUES),
          selectedValue: _v25,
          handleSelect: _v0 => {
            _v2({
              type: _v4 === _v27.EMAIL_TOOLBAR_TYPES.TITLE ? _v32.ACTION_TYPE.SET_HEADER_TEXT_SIZE : _v32.ACTION_TYPE.SET_BODY_TEXT_SIZE,
              payload: {
                text: _v0,
                emailTab: _v3
              }
            });
            let _v1 = _v13 ? _v9?.chain().selectAll().focus() : _v9?.chain().focus();
            _v1?.setFontSize(_v27.EMAIL_TEXT_SIZE_VALUES[_v0]).run(), _v22(!1);
          }
        }), (0, _v1.jsx)(_v145, {
          title: _v34.default.Style,
          isActive: _v16,
          handleDropDownClick: () => _v17(!_v16),
          dropDownRef: _v18,
          dropDownContentRef: _v19,
          values: Object.keys(_v27.EMAIL_TEXT_STYLE_VALUES),
          selectedValue: _v20,
          handleSelect: _v0 => {
            _v2({
              type: _v4 === _v27.EMAIL_TOOLBAR_TYPES.TITLE ? _v32.ACTION_TYPE.SET_HEADER_TEXT_STYLE : _v32.ACTION_TYPE.SET_BODY_TEXT_STYLE,
              payload: {
                text: _v0,
                emailTab: _v3
              }
            });
            let _v1 = _v13 ? _v9?.chain().selectAll().focus() : _v9?.chain().focus();
            if (_v0 === _v27.EMAIL_TEXT_STYLE.BOLD) _v1?.setBold().run();else if (_v0 === _v27.EMAIL_TEXT_STYLE.ITALIC) _v1?.setItalic().run();else if (_v0 === _v27.EMAIL_TEXT_STYLE.UNDERLINE) _v1?.setUnderline().run();else _v0 === _v27.EMAIL_TEXT_STYLE.REGULAR && _v1?.unsetUnderline()?.unsetItalic()?.unsetBold().run();
            _v17(!1);
          },
          addHTML: !0
        }), (0, _v1.jsxs)(_v7.Flex, {
          justifyContent: "space-between",
          mt: (0, _v13.rem)(25),
          children: [(0, _v1.jsx)(_v51.Header, {
            mt: (0, _v13.rem)(10),
            size: "xs",
            children: _v34.default.Format
          }), (0, _v1.jsxs)(_v7.Flex, {
            flex: .65,
            cursor: "pointer",
            alignItems: {
              base: "flex-end",
              "2xl": "center"
            },
            flexDir: {
              base: "column",
              "2xl": "row"
            },
            children: [(0, _v1.jsxs)(_v7.Flex, {
              gap: (0, _v13.rem)(4),
              children: [(0, _v1.jsx)(_v53.IconButton, {
                "aria-label": "align left",
                variant: _v10 === _v27.EMAIL_TEXT_FORMAT.LEFT ? "secondary" : "tertiary",
                onClick: _v27(_v27.EMAIL_TEXT_FORMAT.LEFT),
                icon: (0, _v1.jsx)(_v157.AlignLeft, {})
              }), (0, _v1.jsx)(_v53.IconButton, {
                "aria-label": "align center",
                variant: _v10 === _v27.EMAIL_TEXT_FORMAT.CENTER ? "secondary" : "tertiary",
                onClick: _v27(_v27.EMAIL_TEXT_FORMAT.CENTER),
                icon: (0, _v1.jsx)(_v156.AlignCenter, {})
              }), (0, _v1.jsx)(_v53.IconButton, {
                "aria-label": "align right",
                variant: _v10 === _v27.EMAIL_TEXT_FORMAT.RIGHT ? "secondary" : "tertiary",
                onClick: _v27(_v27.EMAIL_TEXT_FORMAT.RIGHT),
                icon: (0, _v1.jsx)(_v158.AlignRight, {})
              }), (0, _v1.jsx)(_v155.Divider, {
                display: {
                  base: "none",
                  "2xl": "block"
                },
                height: (0, _v13.rem)(40),
                orientation: "vertical",
                mx: (0, _v13.rem)(10)
              })]
            }), (0, _v1.jsxs)(_v7.Flex, {
              gap: (0, _v13.rem)(4),
              children: [(0, _v1.jsx)(_v53.IconButton, {
                "aria-label": "bullet points",
                variant: _v11 === _v27.EMAIL_LIST_FORMAT.BULLETED ? "secondary" : "tertiary",
                onClick: _v28(_v27.EMAIL_LIST_FORMAT.BULLETED),
                icon: (0, _v1.jsx)(_v159.ListUl, {})
              }), (0, _v1.jsx)(_v53.IconButton, {
                "aria-label": "number points",
                variant: _v11 === _v27.EMAIL_LIST_FORMAT.NUMBERED ? "secondary" : "tertiary",
                onClick: _v28(_v27.EMAIL_LIST_FORMAT.NUMBERED),
                icon: (0, _v1.jsx)(_v160.NumberedList, {})
              })]
            })]
          })]
        }), (0, _v1.jsx)(_v143, {
          handleOnChange: _v0 => {
            let _v1 = _v8 ? _v0[_v5][_v4] : null;
            if (_v1) {
              let _v0 = _v1.chain().setColor(_v0);
              _v1.state.selection.empty && _v14.from !== _v14.to && _v0.setTextSelection(_v14), _v0.run();
            }
          },
          selectedColor: (0, _v161.convertColorToHex)(_v12),
          title: _v34.default.Color,
          onSubmit: _v0 => {
            _v2({
              type: _v4 === _v27.EMAIL_TOOLBAR_TYPES.TITLE ? _v32.ACTION_TYPE.SET_HEADER_TEXT_COLOR : _v32.ACTION_TYPE.SET_BODY_TEXT_COLOR,
              payload: {
                text: _v0,
                emailTab: _v3
              }
            });
          }
        }), (0, _v1.jsx)(_v155.Divider, {
          mt: (0, _v13.rem)(30)
        }), (0, _v1.jsx)(_v144, {
          emailTemplate: _v5,
          emailToolBar: _v4,
          handleOnClick: _v0 => {
            _v9?.commands.insertContent(`<strong>{{${_v0}}}</strong>`), _v9?.commands.focus(), _v6({
              actionName: _v4 === _v27.EMAIL_TOOLBAR_TYPES.TITLE ? _v31.BP_ACTION_NAMES.HEADING_TAGS_ADDED : _v31.BP_ACTION_NAMES.BODY_TAGS_ADDED,
              type: _v31.BP_TYPE[_v5]
            });
          }
        })]
      });
    },
    _v164 = ({
      editorStates: _v0,
      dynamicTagRef: _v1
    }) => {
      let {
          emailState: _v2
        } = (0, _v23.useEmailCustomization)(),
        {
          settings: _v3
        } = (0, _v19.useOrionSettings)(),
        _v4 = _v3.enable_email_section_redesign,
        _v5 = _v0 => _v4 ? (0, _v1.jsx)(_v92.Panel, {
          isVisible: !0,
          background: "fill-surface",
          borderRadius: "md",
          overflow: "visible",
          width: "100%",
          maxWidth: (0, _v13.rem)(320),
          sx: {
            minHeight: "100%"
          },
          children: (0, _v1.jsx)(_v92.PanelBody, {
            px: (0, _v13.rem)(16),
            pt: (0, _v13.rem)(24),
            pb: (0, _v13.rem)(24),
            children: _v0
          })
        }) : _v0;
      return (0, _v1.jsx)(_v5.Box, {
        height: _v4 ? "100%" : void 0,
        p: _v4 ? `${(0, _v13.rem)(8)} 0` : {
          base: `${(0, _v13.rem)(26)} ${(0, _v13.rem)(18)}`,
          md: `${(0, _v13.rem)(26)}`
        },
        children: {
          [_v27.EMAIL_TOOLBAR_TYPES.GENERAL]: _v4 ? (0, _v1.jsx)(_v151, {}) : (0, _v1.jsx)(_v153, {}),
          [_v27.EMAIL_TOOLBAR_TYPES.BUTTON]: _v5((0, _v1.jsx)(_v97, {})),
          [_v27.EMAIL_TOOLBAR_TYPES.TITLE]: _v5((0, _v1.jsx)(_v163, {
            editorStates: _v0
          })),
          [_v27.EMAIL_TOOLBAR_TYPES.BODY]: _v5((0, _v1.jsx)(_v163, {
            editorStates: _v0
          })),
          [_v27.EMAIL_TOOLBAR_TYPES.SUBJECT]: _v5((0, _v1.jsx)(_v154, {
            dynamicTagRef: _v1
          }))
        }[_v2.emailToolbar]
      });
    };
  var _v165 = _v0.i(0),
    _v166 = _v0.i(0);
  let _v167 = ({
      clearAllTextSelections: _v0
    }) => {
      let {
          emailState: _v1,
          dispatch: _v2
        } = (0, _v23.useEmailCustomization)(),
        {
          sentRegistrationEmailPreviewEvent: _v3
        } = (0, _v29.useAnalytics)(),
        _v4 = _v0 => {
          _v1.previewMode !== _v0 && (_v0(), _v2({
            type: _v32.ACTION_TYPE.SET_PREVIEW,
            payload: _v0
          }), _v3({
            actionName: _v31.BP_ACTION_NAMES.PREVIEW_BY_DEVICE,
            type: _v31.BP_TYPE[_v1.emailTemplateType],
            actionValue: _v0 === _v27.EMAIL_PREVIEW_MODE.WEB ? _v31.BP_ACTION_VALUES.DESKTOP_VIEW : _v31.BP_ACTION_VALUES.MOBILE_VIEW,
            element: _v31.BP_ELEMENT.ICON
          }));
        };
      return (0, _v1.jsxs)(_v7.Flex, {
        gap: (0, _v13.rem)(4),
        children: [(0, _v1.jsx)(_v53.IconButton, {
          icon: (0, _v1.jsx)(_v165.Desktop, {}),
          "aria-label": (0, _v15.translate)({
            singular: "Desktop preview",
            dictionary: {
              es: {
                singular: "Vista previa de escritorio"
              },
              "de-DE": {
                singular: "Desktop-Vorschau"
              },
              "fr-FR": {
                singular: "Aperçu du bureau"
              },
              "ja-JP": {
                singular: "デスクトッププレビュー"
              },
              "ko-KR": {
                singular: "데스크톱 미리보기"
              },
              "pt-BR": {
                singular: "Pré-visualização de desktop"
              },
              "zh-CN": {
                singular: "桌面预览"
              }
            }
          }),
          size: "sm",
          variant: _v1.previewMode === _v27.EMAIL_PREVIEW_MODE.WEB ? "secondary" : "tertiary",
          onClick: () => _v4(_v27.EMAIL_PREVIEW_MODE.WEB)
        }), (0, _v1.jsx)(_v53.IconButton, {
          icon: (0, _v1.jsx)(_v166.MobilePhone, {}),
          "aria-label": (0, _v15.translate)({
            singular: "Mobile preview",
            dictionary: {
              es: {
                singular: "Vista previa móvil"
              },
              "de-DE": {
                singular: "Mobile Vorschau"
              },
              "fr-FR": {
                singular: "Aperçu mobile"
              },
              "ja-JP": {
                singular: "モバイルプレビュー"
              },
              "ko-KR": {
                singular: "모바일 미리보기"
              },
              "pt-BR": {
                singular: "Pré-visualização móvel"
              },
              "zh-CN": {
                singular: "移动预览"
              }
            }
          }),
          size: "sm",
          variant: _v1.previewMode === _v27.EMAIL_PREVIEW_MODE.MOBILE ? "secondary" : "tertiary",
          onClick: () => _v4(_v27.EMAIL_PREVIEW_MODE.MOBILE)
        })]
      });
    },
    _v168 = () => {
      let [_v0, _v1] = (0, _v2.useState)(!1),
        {
          emailState: _v2,
          dispatch: _v3,
          undoRedoDispatch: _v4,
          activeContentKey: _v5
        } = (0, _v23.useEmailCustomization)(),
        _v6 = (0, _v24.useEmailTextEditor)(_v2, _v3),
        _v7 = _v2.subject[_v5],
        [_v8, _v9] = (0, _v2.useState)(_v7),
        {
          hasEmailEditAccess: _v10
        } = (0, _v22.useEntityCapability)(),
        _v11 = (0, _v33.useConfigStore)(_v0 => _v0.isRegistrationOn),
        _v12 = (0, _v33.useConfigStore)(_v0 => _v0.hasUpsell),
        {
          settings: _v13
        } = (0, _v19.useOrionSettings)(),
        _v14 = _v13.enable_email_section_redesign,
        {
          teamName: _v15,
          isLoading: _v16
        } = (0, _v28.useTeamStore)(),
        {
          sentRegistrationEmailLayoutChangeEvent: _v17
        } = (0, _v29.useAnalytics)(),
        {
          status: _v18,
          title: _v19,
          privacy: _v20
        } = (0, _v25.useEntityStore)(),
        {
          entityType: _v21,
          entityId: _v22
        } = (0, _v33.useConfigStore)(_v0 => _v0);
      (0, _v21.useViewer)();
      let _v23 = (0, _v33.useConfigStore)(_v0 => _v0.setCanRedo),
        _v24 = (0, _v33.useConfigStore)(_v0 => _v0.setCanUndo),
        {
          canUndo: _v25,
          canRedo: _v26
        } = _v2,
        {
          onClickRegistration: _v27
        } = (0, _v16.useCallbackContext)(),
        _v28 = (0, _v2.useRef)(_v8),
        _v29 = (0, _v2.useRef)(null),
        _v30 = (0, _v2.useRef)(null),
        _v31 = (0, _v2.useRef)(null);
      (0, _v18.useBroadcastChannel)(_v27.BROADCAST_CHANNEL_NAME, _v0 => {
        _v0?.type === _v27.BROADCAST_ACTIONS.UNDO && _v4({
          type: _v30.ACTION_TYPE.UNDO
        }), _v0?.type === _v27.BROADCAST_ACTIONS.REDO && _v4({
          type: _v30.ACTION_TYPE.REDO
        }), _v0?.type === _v27.BROADCAST_ACTIONS.RESET && _v4({
          type: _v30.ACTION_TYPE.RESET,
          payload: _v2
        });
      });
      let _v32 = !_v12 && !1 === _v11 && !_v18 && _v21 === _v17.ENTITY_TYPE.EVENT && _v27;
      (0, _v20.default)([_v30, _v29], () => {
        if (_v1(!1), !_v8) {
          let _v0 = _v2.defaultConfig.subject[_v2.emailTemplateType];
          _v9(_v0), _v3({
            type: _v32.ACTION_TYPE.SET_SUBJECT,
            payload: {
              text: _v0,
              emailTab: _v5
            }
          });
        }
      }, null, [_v8, _v2]);
      let _v33 = (0, _v2.useCallback)(() => {
          _v3({
            type: _v32.ACTION_TYPE.SET_EMAIL_TOOL_BAR,
            payload: _v27.EMAIL_TOOLBAR_TYPES.GENERAL
          });
        }, [_v3]),
        _v34 = () => {
          if (_v2.emailToolbar === _v27.EMAIL_TOOLBAR_TYPES.BODY || _v2.emailToolbar === _v27.EMAIL_TOOLBAR_TYPES.TITLE) {
            let _v0 = _v6[_v2.emailTemplateType][_v2.emailToolbar];
            _v0?.commands.setTextSelection(0);
          }
          window?.getSelection()?.empty(), window?.getSelection()?.removeAllRanges();
        };
      (0, _v2.useEffect)(() => {
        _v34(), _v3({
          type: _v32.ACTION_TYPE.EMAIL_TEMPLATE_TYPE,
          payload: _v27.EMAIL_TYPES.CONFIRMATION
        });
      }, []), (0, _v2.useEffect)(() => {
        _v2.canRedo || _v33();
      }, [_v2.emailTemplateType, _v2.canRedo, _v33]);
      let _v35 = (0, _v2.useRef)(null),
        _v36 = (0, _v2.useRef)(null);
      return !function (_v0, _v1, _v2 = _v27.EMAIL_PREVIEW_MODE.WEB, _v3 = !0) {
        let [_v4, _v5] = (0, _v2.useState)({
            width: 0,
            height: 0
          }),
          _v6 = (0, _v26.useDebouncedValue)(_v4, 100),
          _v7 = (0, _v2.useCallback)(() => {
            if (_v1.current) {
              let {
                width: _v0,
                height: _v1
              } = _v1.current.getBoundingClientRect();
              _v5({
                width: _v0,
                height: _v1
              });
            }
          }, [_v1]);
        (0, _v2.useLayoutEffect)(() => {
          if (_v3 && _v0.current) {
            let _v0 = _v27.PREVIEW_WIDTH[_v27.EMAIL_PREVIEW_MODE.WEB],
              _v1 = 1 / (_v6.width ? _v0 / _v6.width : 1),
              _v2 = _v2 === _v27.EMAIL_PREVIEW_MODE.WEB ? 0 : ((_v0 - _v27.PREVIEW_WIDTH[_v2]) / 2).toFixed(2);
            _v0.current.style.transform = `scale(${_v1}) translateX(${_v2}px)`, _v0.current.style.transformOrigin = "top left";
            let _v3 = _v6.height / _v1;
            _v0.current.style.height = `${_v3}px`;
          }
        }, [_v6, _v0, _v2, _v3]), (0, _v2.useEffect)(() => {
          if (!_v3) return;
          let _v0 = new ResizeObserver(() => {
              _v7();
            }),
            _v1 = _v1.current;
          return _v1 && _v0.observe(_v1), () => {
            _v1 && _v0.unobserve(_v1);
          };
        }, [_v1, _v7, _v3]);
      }(_v36, _v35, _v2.previewMode), (0, _v2.useEffect)(() => {
        _v23?.(_v26), _v24?.(_v25);
      }, [_v25, _v26]), (0, _v2.useEffect)(() => {
        _v9(_v7);
      }, [_v7, _v2.emailToolbar]), (0, _v1.jsx)(_v7.Flex, {
        flexDir: "column",
        height: "100%",
        width: "100%",
        overflow: "auto",
        background: "background",
        ref: _v31,
        children: (0, _v1.jsxs)(_v7.Flex, {
          flexDir: "row",
          alignItems: "flex-start",
          justifyContent: "center",
          flex: 1,
          gap: "2xl",
          p: (0, _v13.rem)(16),
          children: [(0, _v1.jsx)(_v5.Box, {
            flex: 2,
            minWidth: (0, _v13.rem)(200),
            overflowY: "auto",
            height: "100%",
            maxWidth: (0, _v13.rem)(400),
            background: "fill-surface",
            borderRadius: "xl",
            children: (0, _v1.jsx)(_v89, {})
          }), (0, _v1.jsx)(_v5.Box, {
            flex: 5,
            maxWidth: (0, _v13.rem)(0),
            height: "100%",
            overflowY: "auto",
            borderRadius: "xl",
            boxSizing: "border-box",
            children: (0, _v1.jsxs)(_v5.Box, {
              width: "100%",
              maxWidth: (0, _v13.rem)(0),
              background: "surface",
              height: "100%",
              p: (0, _v13.rem)(26),
              overflow: "auto",
              children: [(0, _v1.jsxs)(_v5.Box, {
                background: "fill-skeleton",
                mx: (0, _v13.rem)(-26),
                mt: (0, _v13.rem)(-26),
                mb: "lg",
                px: (0, _v13.rem)(26),
                pt: (0, _v13.rem)(16),
                borderTopRadius: "xl",
                children: [(0, _v1.jsxs)(_v7.Flex, {
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: "lg",
                  children: [(0, _v1.jsx)(_v167, {
                    clearAllTextSelections: _v34
                  }), (0, _v1.jsx)(_v50, {
                    clearAllTextSelections: _v34
                  })]
                }), (0, _v1.jsx)(_v7.Flex, {
                  alignItems: "flex-start",
                  mb: _v10 ? "md" : 0,
                  children: _v10 ? (0, _v1.jsxs)(_v7.Flex, {
                    alignItems: "center",
                    flex: 1,
                    children: [(0, _v1.jsx)(_v11.Paragraph, {
                      lineHeight: (0, _v13.rem)(16),
                      minWidth: (0, _v13.rem)(60),
                      color: "text-secondary",
                      size: "md",
                      children: _v34.default.Subject
                    }), (0, _v1.jsx)(_v5.Box, {
                      pl: (0, _v13.rem)(18),
                      width: "100%",
                      height: (0, _v13.rem)(40),
                      children: (0, _v1.jsxs)(_v8.FormControl, {
                        children: [(0, _v1.jsx)(_v9.Input, {
                          ref: _v29,
                          id: `${_v2.emailTemplateType.toLowerCase()}-email-subject`,
                          maxLength: _v27.EMAIL_MAX_LENGTH.SUBJECT,
                          value: _v8,
                          onChange: _v0 => {
                            let _v1 = _v0.target.value;
                            _v9(_v1), _v1.length && _v3({
                              type: _v32.ACTION_TYPE.SET_SUBJECT,
                              payload: {
                                text: _v0.target.value,
                                emailTab: _v5
                              }
                            });
                          },
                          onFocus: () => {
                            _v1(!0), _v3({
                              type: _v32.ACTION_TYPE.SET_EMAIL_TOOL_BAR,
                              payload: _v27.EMAIL_TOOLBAR_TYPES.SUBJECT
                            }), _v28.current = _v8;
                          }
                        }), (0, _v1.jsx)(_v8.FormHelperText, {
                          mt: (0, _v13.rem)(2),
                          children: _v0 && (0, _v1.jsx)(_v35.CharCount, {
                            value: _v8,
                            maxCharacters: _v27.EMAIL_MAX_LENGTH.SUBJECT
                          })
                        })]
                      })
                    })]
                  }) : (0, _v1.jsxs)(_v7.Flex, {
                    alignItems: "center",
                    children: [(0, _v1.jsx)(_v11.Paragraph, {
                      lineHeight: (0, _v13.rem)(16),
                      minWidth: (0, _v13.rem)(60),
                      color: "text-secondary",
                      size: "md",
                      children: _v34.default.Subject
                    }), (0, _v1.jsx)(_v169, {
                      isDisabled: !_v10,
                      showHoverState: !!_v10,
                      children: _v8
                    })]
                  })
                }), (0, _v1.jsx)(_v7.Flex, {
                  pb: "lg",
                  alignItems: "center",
                  children: _v14 ? (0, _v1.jsxs)(_v7.Flex, {
                    alignItems: "center",
                    flex: 1,
                    children: [(0, _v1.jsxs)(_v7.Flex, {
                      alignItems: "center",
                      minWidth: (0, _v13.rem)(60),
                      children: [(0, _v1.jsx)(_v11.Paragraph, {
                        lineHeight: (0, _v13.rem)(16),
                        color: "text-secondary",
                        size: "md",
                        children: _v34.default.From
                      }), (0, _v1.jsx)(_v12.Tooltip, {
                        label: _v34.default.FromTooltip,
                        children: (0, _v1.jsx)(_v5.Box, {
                          as: "span",
                          display: "inline-flex",
                          ml: (0, _v13.rem)(4),
                          color: "text-secondary",
                          children: (0, _v1.jsx)(_v14.InfoCircle, {
                            width: (0, _v13.rem)(14),
                            height: (0, _v13.rem)(14)
                          })
                        })
                      })]
                    }), (0, _v1.jsx)(_v5.Box, {
                      pl: (0, _v13.rem)(18),
                      width: "100%",
                      height: (0, _v13.rem)(40),
                      children: (0, _v1.jsx)(_v8.FormControl, {
                        children: (0, _v1.jsx)(_v9.Input, {
                          isDisabled: !_v10,
                          maxLength: _v27.EMAIL_MAX_LENGTH.FROM,
                          value: _v2.from,
                          placeholder: _v16 ? _v34.default.Loading : "",
                          onBlur: () => {
                            _v2.from || _v3({
                              type: _v32.ACTION_TYPE.SET_FROM,
                              payload: _v15 || _v27.VIMEO
                            }), _v17({
                              actionName: _v31.BP_ACTION_NAMES.FROM_TEXT_CHANGED
                            });
                          },
                          onChange: _v0 => _v3({
                            type: _v32.ACTION_TYPE.SET_FROM,
                            payload: _v0.target.value
                          })
                        })
                      })
                    })]
                  }) : (0, _v1.jsxs)(_v1.Fragment, {
                    children: [(0, _v1.jsx)(_v11.Paragraph, {
                      lineHeight: (0, _v13.rem)(16),
                      minWidth: (0, _v13.rem)(60),
                      color: "text-secondary",
                      size: "md",
                      children: _v34.default.From
                    }), (0, _v1.jsx)(_v169, {
                      isDisabled: !_v10,
                      showHoverState: !!_v10,
                      onClick: () => {
                        _v3({
                          type: _v32.ACTION_TYPE.SET_EMAIL_TOOL_BAR,
                          payload: _v27.EMAIL_TOOLBAR_TYPES.GENERAL
                        });
                      },
                      children: _v2.from
                    })]
                  })
                })]
              }), _v32 && (0, _v1.jsx)(_v3.Alert, {
                variant: "info",
                marginBottom: (0, _v13.rem)(16),
                children: (0, _v1.jsx)(_v4.AlertDescription, {
                  children: (0, _v15.translate)({
                    singular: "To add your custom form and emails to “{TITLE},” {A}turn on registration{/A}.",
                    replacements: {
                      A: _v0 => (0, _v1.jsx)(_v10.Link, {
                        onClick: _v27,
                        children: _v0
                      }),
                      TITLE: _v19
                    },
                    dictionary: {
                      es: {
                        singular: "Para agregar su formulario personalizado y correos electrónicos a “{TITLE}”, {A}active el registro{/A}."
                      },
                      "de-DE": {
                        singular: "Um Ihr benutzerdefiniertes Formular und Ihre E-Mails zu „{TITLE}“ hinzuzufügen, {A}aktivieren Sie die Registrierung{/A}."
                      },
                      "fr-FR": {
                        singular: "Pour ajouter votre vos e-mails et votre formulaire personnalisé à « {TITLE} », {A}activez l'inscription{/A}."
                      },
                      "ja-JP": {
                        singular: "カスタムフォームとメールを「{TITLE}」に追加するには、{A}登録をオン{/A}にしてください。"
                      },
                      "ko-KR": {
                        singular: "{TITLE}에 커스텀 양식과 이메일을 추가하려면 {A}등록 기능을 켜세요{/A}."
                      },
                      "pt-BR": {
                        singular: "Para adicionar seu formulário customizado e e-mails a “{TITLE}”, {A}ative o registro{/A}."
                      },
                      "zh-CN": {
                        singular: "要将自定义表单和电子邮件添加到“{TITLE}”中，请{A}开启注册{/A}。"
                      }
                    }
                  })
                })
              }), (0, _v1.jsx)(_v5.Box, {
                position: "relative",
                width: "100%",
                pb: (0, _v13.rem)(26),
                height: (_v31.current?.clientHeight || 230) + 65 - 230,
                ref: _v35,
                children: (0, _v1.jsxs)(_v5.Box, {
                  width: (0, _v13.rem)(_v27.PREVIEW_WIDTH[_v2.previewMode]),
                  alignItems: "center",
                  height: "100%",
                  transition: "transform 0.5s, width 0.5s, transform-origin 0.25s",
                  overflowY: "scroll",
                  sx: {
                    msOverflowStyle: "none",
                    scrollbarWidth: "none",
                    WebkitOverflowScrolling: "touch",
                    "&::-webkit-scrollbar": {
                      display: "none"
                    }
                  },
                  ref: _v36,
                  children: [(0, _v1.jsx)(_v5.Box, {
                    background: _v2.accentColor,
                    height: (0, _v13.rem)(1.5),
                    cursor: "pointer",
                    _hover: {
                      background: "blue.50",
                      borderRadius: (0, _v13.rem)(4)
                    },
                    onClick: () => _v3({
                      type: _v32.ACTION_TYPE.SET_EMAIL_TOOL_BAR,
                      payload: _v27.EMAIL_TOOLBAR_TYPES.GENERAL
                    })
                  }), (0, _v1.jsxs)(_v6.Center, {
                    background: "gray.50",
                    pt: (0, _v13.rem)(38),
                    flexFlow: "column",
                    border: `${(0, _v13.rem)(1)} solid`,
                    borderColor: "stroke",
                    boxSizing: "border-box",
                    children: [_v2.customLogo?.url && (0, _v1.jsx)(_v5.Box, {
                      p: "sm",
                      mb: (0, _v13.rem)(20),
                      cursor: "pointer",
                      _hover: {
                        background: "blue.50",
                        borderRadius: (0, _v13.rem)(4)
                      },
                      onClick: () => _v3({
                        type: _v32.ACTION_TYPE.SET_EMAIL_TOOL_BAR,
                        payload: _v27.EMAIL_TOOLBAR_TYPES.GENERAL
                      }),
                      children: (0, _v1.jsx)(_v5.Box, {
                        pointerEvents: "none",
                        px: "3xl",
                        children: (0, _v1.jsx)("img", {
                          src: _v2.customLogo.url,
                          height: 40,
                          alt: "email-logo"
                        })
                      })
                    }), (0, _v1.jsx)(_v7.Flex, {
                      background: "white",
                      color: "slate.800",
                      maxWidth: (0, _v13.rem)(590),
                      flexDirection: "column",
                      transition: "0.5s",
                      p: _v2.previewMode === _v27.EMAIL_PREVIEW_MODE.WEB ? `${(0, _v13.rem)(22)} ${(0, _v13.rem)(95)} ${(0, _v13.rem)(45)}` : `${(0, _v13.rem)(22)} ${(0, _v13.rem)(20)} ${(0, _v13.rem)(45)}`,
                      width: _v2.previewMode === _v27.EMAIL_PREVIEW_MODE.WEB ? "90%" : "100%",
                      children: (0, _v1.jsx)(_v90.EmailTemplate, {
                        editorStates: _v6,
                        canEdit: _v10
                      })
                    }), (0, _v1.jsx)(_v5.Box, {
                      fontSize: "body-xs",
                      lineHeight: (0, _v13.rem)(14),
                      textAlign: "center",
                      color: "#445566",
                      m: `${(0, _v13.rem)(24)} 0 ${(0, _v13.rem)(37)}`,
                      maxWidth: (0, _v13.rem)(350),
                      cursor: "pointer",
                      _hover: {
                        background: "blue.50",
                        borderRadius: (0, _v13.rem)(4)
                      },
                      onClick: () => _v3({
                        type: _v32.ACTION_TYPE.SET_EMAIL_TOOL_BAR,
                        payload: _v27.EMAIL_TOOLBAR_TYPES.GENERAL
                      }),
                      children: (0, _v1.jsx)(_v91, {})
                    })]
                  })]
                })
              })]
            })
          }), (0, _v1.jsx)(_v5.Box, {
            flex: 2,
            minWidth: (0, _v13.rem)(200),
            overflowY: "auto",
            height: "100%",
            maxWidth: (0, _v13.rem)(400),
            background: "fill-surface",
            borderRadius: "xl",
            children: (0, _v1.jsx)(_v164, {
              editorStates: _v6,
              dynamicTagRef: _v30
            })
          })]
        })
      });
    },
    _v169 = _v0 => (0, _v1.jsx)(_v5.Box, {
      ml: (0, _v13.rem)(18),
      wordBreak: "break-all",
      fontSize: "body-md",
      width: "100%",
      color: "text-primary",
      _hover: _v0.showHoverState ? {
        cursor: "pointer",
        color: "black",
        backgroundColor: "blue.50",
        borderRadius: (0, _v13.rem)(4)
      } : {},
      ..._v0,
      children: _v0.children
    });
  var _v170 = _v0.i(0);
  _v0.s(["LeadEmail", 0, ({
    entityId: _v0,
    entityType: _v1,
    onAutoSave: _v2,
    onNavigateToAttendeePage: _v3,
    isRegistrationOn: _v4,
    hasUpsell: _v5,
    canCompleteEvent: _v6,
    setCanRedo: _v7,
    setCanUndo: _v8,
    onSaveStateChange: _v9
  }) => {
    let _v10 = (0, _v2.useCallback)(_v0 => {
        _v2 && _v2(_v0);
      }, [_v0, _v1]),
      _v11 = (0, _v2.useCallback)(() => {
        _v3 && _v3();
      }, [_v0, _v1]);
    return ((0, _v2.useEffect)(() => {
      _v33.useConfigStore.setState({
        entityId: _v0,
        entityType: _v1,
        isRegistrationOn: _v4,
        hasUpsell: _v5,
        canCompleteEvent: _v6,
        onAutoSave: _v10,
        onNavigateToAttendeePage: _v11,
        setCanRedo: _v7,
        setCanUndo: _v8
      });
    }, [_v0, _v1, _v4, _v5, _v6, _v10, _v11, _v7, _v8]), _v0 && _v1) ? (0, _v1.jsx)(_v25.default, {
      children: (0, _v1.jsx)(_v28.default, {
        children: (0, _v1.jsx)(_v22.default, {
          children: (0, _v1.jsx)(_v73.default, {
            onSaveStateChange: _v9,
            children: (0, _v1.jsx)(_v170.UndoRedoContextProvider, {
              children: (0, _v1.jsx)(_v168, {})
            })
          })
        })
      })
    }) : null;
  }], 0);
}