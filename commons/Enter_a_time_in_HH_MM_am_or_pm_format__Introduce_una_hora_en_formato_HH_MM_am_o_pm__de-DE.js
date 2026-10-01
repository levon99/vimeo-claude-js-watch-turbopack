{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.i(0);
  var _v2 = _v0.i(0),
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
    timeFormatError: {
      text: (0, _v14.translate)({
        singular: "Enter a time in HH:MM am or pm format",
        dictionary: {
          es: {
            singular: "Introduce una hora en formato HH:MM am o pm"
          },
          "de-DE": {
            singular: "Geben Sie eine Uhrzeit im Format HH:MM am oder pm ein"
          },
          "fr-FR": {
            singular: "Saisissez une heure au format HH:MM am ou pm"
          },
          "ja-JP": {
            singular: "時間をHH:MM am/pm形式で入力してください"
          },
          "ko-KR": {
            singular: "HH:MM am/pm 형식으로 시간을 입력하세요"
          },
          "pt-BR": {
            singular: "Insira um horário no formato HH:MM am ou pm"
          },
          "zh-CN": {
            singular: "请输入 HH:MM am/pm 格式的时间"
          }
        }
      })
    },
    endTimeAtLeast: {
      text: (0, _v14.translate)({
        singular: "Select an event time of at least 10 minutes",
        dictionary: {
          es: {
            singular: "Selecciona una duración del evento de al menos 10 minutos"
          },
          "de-DE": {
            singular: "Wählen Sie eine Veranstaltungsdauer von mindestens 10 Minuten"
          },
          "fr-FR": {
            singular: "Sélectionnez une durée d'événement d'au moins 10 minutes"
          },
          "ja-JP": {
            singular: "イベント時間は最低10分を選択してください"
          },
          "ko-KR": {
            singular: "최소 10분 이상의 이벤트 시간을 선택하세요"
          },
          "pt-BR": {
            singular: "Selecione uma duração do evento de pelo menos 10 minutos"
          },
          "zh-CN": {
            singular: "请选择至少 10 分钟的活动时长"
          }
        }
      })
    },
    endTimeLessStartTime: {
      text: (0, _v14.translate)({
        singular: "Select an end time that comes after the start time",
        dictionary: {
          es: {
            singular: "Selecciona una hora de finalización posterior a la hora de inicio"
          },
          "de-DE": {
            singular: "Wählen Sie eine Endzeit, die nach der Startzeit liegt"
          },
          "fr-FR": {
            singular: "Sélectionnez une heure de fin postérieure à l'heure de début"
          },
          "ja-JP": {
            singular: "開始時間より後の終了時間を選択してください"
          },
          "ko-KR": {
            singular: "시작 시간 이후의 종료 시간을 선택하세요"
          },
          "pt-BR": {
            singular: "Selecione um horário de término que seja posterior ao horário de início"
          },
          "zh-CN": {
            singular: "请选择晚于开始时间的结束时间"
          }
        }
      })
    }
  };
  var _v17 = _v0.i(0);
  function _v18(_v0, _v1 = 15) {
    let {
      hour: _v2,
      minute: _v3
    } = _v0;
    return _v3 > 60 - _v1 && _v2++, {
      hour: _v2,
      minute: _v3 = Math.ceil(_v3 / _v1) * _v1 % 60
    };
  }
  function _v19(_v0, _v1 = 15) {
    let {
      hour: _v2,
      minute: _v3
    } = _v0;
    return (_v3 = Math.ceil((_v3 - _v1) / _v1) * _v1 % 60) < 0 && (0 === _v2 ? _v2 = 23 : _v2--, _v3 = 60 - _v1), {
      hour: _v2,
      minute: _v3
    };
  }
  _v0.s(["getNextRoundedTimeByDate", 0, _v18, "getPreviousRoundedTimeByDate", 0, _v19], 0);
  let _v20 = /(1[0-2]|0?[1-9])?:?([0-5][0-9]?)?([aApP][mM])?/;
  function _v21(_v0) {
    let _v1 = _v0.replace(/ /g, "").match(_v20);
    if (_v1 && _v1[1]) {
      let _v0 = _v1[1],
        _v1 = _v1[2] ? _v1[2].padEnd(2, "0") : "00",
        _v2 = _v1[3] ?? _v2.DateTime.local().toFormat("a");
      return `${_v0}:${_v1} ${_v2}`;
    }
    return null;
  }
  _v0.s(["TimePicker", 0, function ({
    isDisabled: _v0,
    isLoading: _v1,
    date: _v2,
    minDateTime: _v3,
    maxDateTime: _v4,
    minDateValidation: _v5 = !1,
    onSelect: _v6,
    onError: _v7,
    size: _v8 = "md"
  }) {
    let _v9 = "sm" === _v8,
      _v10 = (0, _v10.useColorModeValue)("slate.50", "grayscale.800"),
      [_v11, _v12] = (0, _v3.useState)(!1),
      [_v13, _v14] = (0, _v3.useState)(null),
      _v15 = !!(!_v2 || _v0 || _v1),
      _v16 = (0, _v3.useMemo)(() => _v2 && _v3 ? function (_v0, _v1, _v2) {
        let _v3 = _v0.set({
          hour: 0,
          minute: 0
        });
        if (_v0.startOf("day") <= _v1.startOf("day")) {
          let {
            hour: _v0,
            minute: _v1
          } = _v18(_v1);
          _v3 = _v0.set({
            hour: _v0,
            minute: _v1
          });
        }
        let _v4 = _v0.set({
          hour: 24,
          minute: 0
        });
        if (_v2 && _v2.startOf("day") <= _v0.startOf("day")) {
          let {
            hour: _v0,
            minute: _v1
          } = _v19(_v2);
          _v4 = _v0.set({
            hour: _v0,
            minute: _v1
          }).plus({
            minutes: 1
          });
        }
        return _v17.Interval.fromDateTimes(_v3, _v4).splitBy({
          minutes: 15
        }).map(_v0 => _v0.start);
      }(_v2, _v3, _v4) : [], [_v2, _v3, _v4]),
      _v17 = (0, _v3.useRef)(null),
      _v18 = (0, _v3.useRef)(null),
      _v19 = (0, _v3.useRef)(null),
      _v20 = _v2?.toFormat("h:mm a").toLowerCase() ?? null,
      _v21 = (0, _v3.useMemo)(() => {
        if (_v13) {
          let _v0 = _v21(_v13);
          if (_v5 && _v0 && _v3 && _v2) {
            let {
              hour: _v0,
              minute: _v1
            } = _v2.DateTime.fromFormat(_v0, "h:mm a");
            if (_v2.set({
              hour: _v0,
              minute: _v1
            }) < _v3.minus({
              minutes: 10
            })) return _v16.endTimeLessStartTime;
            if (_v2.set({
              hour: _v0,
              minute: _v1
            }) < _v3) return _v16.endTimeAtLeast;
          } else if (!_v0) return _v16.timeFormatError;
        }
        return null;
      }, [_v5, _v3, _v2, _v13]),
      _v22 = (0, _v3.useCallback)(_v0 => {
        _v18?.current?.scroll({
          top: _v0?.offsetTop ?? 0,
          behavior: "auto"
        });
      }, [_v18]),
      _v23 = (0, _v3.useCallback)(_v0 => {
        let _v1 = _v0.target.value;
        _v14(_v1);
        let _v2 = _v21(_v1);
        if (_v2 && _v18?.current) {
          let _v0 = Array.from(_v18.current.children).find(_v0 => {
            let _v1 = _v0.innerText;
            return _v2.DateTime.fromFormat(_v1, "h:mm a").plus({
              minutes: 15
            }) >= _v2.DateTime.fromFormat(_v2, "h:mm a");
          });
          _v0 && _v22(_v0);
        }
      }, [_v18, _v22]);
    (0, _v3.useEffect)(() => {
      if (!_v11 && null !== _v13) {
        let _v0 = _v21(_v13);
        !_v21 && _v0 && _v6(_v2.DateTime.fromFormat(_v0, "h:mm a").toFormat("HH:mm")), _v14(null);
      }
    }, [_v11, _v13, _v20, _v21, _v6]), (0, _v3.useEffect)(() => {
      _v11 && _v19?.current && _v22(_v19.current);
    }, [_v11, _v19, _v22]), (0, _v3.useEffect)(() => {
      _v7 && _v7(_v21);
    }, [_v21, _v7]), (0, _v12.useOutsideClick)({
      enabled: _v11,
      ref: _v17,
      handler: _v0 => {
        _v0.target && _v18?.current?.contains(_v0.target) || _v12(!1);
      }
    });
    let _v24 = (0, _v15.useScrollbarStyles)({
      width: (0, _v4.rem)(8),
      scrollbarColor: "transparent"
    });
    return (0, _v1.jsxs)(_v5.Popover, {
      isOpen: _v11,
      matchWidth: !0,
      children: [(0, _v1.jsx)(_v7.PopoverTrigger, {
        children: (0, _v1.jsxs)(_v8.Flex, {
          ref: _v17,
          position: "relative",
          width: "100%",
          alignItems: "center",
          sx: {
            "& input": {
              cursor: "pointer",
              fontWeight: 400,
              fontSize: (0, _v4.rem)(_v9 ? 14 : 12),
              width: "100%",
              padding: _v9 ? `${(0, _v4.rem)(6)} ${(0, _v4.rem)(32)} ${(0, _v4.rem)(6)} ${(0, _v4.rem)(12)}` : `${(0, _v4.rem)(18)} ${(0, _v4.rem)(10)} ${(0, _v4.rem)(6)} ${(0, _v4.rem)(10)}`,
              background: "surface",
              height: (0, _v4.rem)(_v9 ? 32 : 40),
              minHeight: (0, _v4.rem)(_v9 ? 32 : 40)
            },
            "& input:hover": {
              background: _v10
            }
          },
          children: [_v9 ? null : (0, _v1.jsx)(_v11.Paragraph, {
            position: "absolute",
            left: (0, _v4.rem)(10),
            top: (0, _v4.rem)(6),
            fontWeight: 400,
            fontSize: (0, _v4.rem)(10),
            cursor: _v15 ? "not-allowed" : "pointer",
            color: _v15 ? "text-secondary" : "text-primary",
            children: (0, _v14.translate)({
              singular: "Time",
              dictionary: {
                es: {
                  singular: "Hora"
                },
                "de-DE": {
                  singular: "Uhrzeit"
                },
                "fr-FR": {
                  singular: "Heure"
                },
                "ja-JP": {
                  singular: "時間"
                },
                "ko-KR": {
                  singular: "시간"
                },
                "pt-BR": {
                  singular: "Hora"
                },
                "zh-CN": {
                  singular: "时间"
                }
              }
            })
          }), (0, _v1.jsx)(_v9.Input, {
            "data-active": _v11,
            value: _v13 ?? _v20 ?? "",
            placeholder: (0, _v14.translate)({
              singular: "Choose time",
              dictionary: {
                es: {
                  singular: "Elige la hora"
                },
                "de-DE": {
                  singular: "Uhrzeit wählen"
                },
                "fr-FR": {
                  singular: "Choisir l'heure"
                },
                "ja-JP": {
                  singular: "時間を選択"
                },
                "ko-KR": {
                  singular: "시간 선택"
                },
                "pt-BR": {
                  singular: "Escolher horário"
                },
                "zh-CN": {
                  singular: "选择时间"
                }
              }
            }),
            isInvalid: !!_v21,
            isDisabled: _v15,
            width: "100%",
            background: "surface",
            ...(_v9 ? {
              size: "sm"
            } : {}),
            onChange: _v23,
            onKeyPress: _v0 => {
              "Enter" === _v0.key && _v12(!1);
            },
            onClick: _v0 => {
              _v2 && (_v12(!0), _v0.target.select());
            }
          }), (0, _v1.jsx)(_v13.ChevronDown, {
            position: "absolute",
            cursor: _v15 ? "not-allowed" : "pointer",
            right: (0, _v4.rem)(10),
            top: _v9 ? "50%" : void 0,
            bottom: _v9 ? void 0 : (0, _v4.rem)(10),
            transform: _v9 ? "translateY(-50%)" : void 0,
            height: 20,
            width: 20,
            color: _v15 ? "text-secondary" : "text-primary",
            onClick: () => _v2 && _v12(!_v11)
          })]
        })
      }), (0, _v1.jsx)(_v6.PopoverContent, {
        minWidth: "100%",
        children: (0, _v1.jsx)(_v8.Flex, {
          ref: _v18,
          direction: "column",
          overflowY: "auto",
          overflowX: "hidden",
          height: "100%",
          width: "100%",
          padding: (0, _v4.rem)(4),
          gap: (0, _v4.rem)(8),
          maxHeight: 180,
          sx: _v24,
          children: (0, _v1.jsx)(_v8.Flex, {
            direction: "column",
            gap: (0, _v4.rem)(4),
            children: _v16.map(_v0 => {
              let _v1 = _v0.toFormat("HH:mm") === _v2?.toFormat("HH:mm");
              return (0, _v1.jsx)(_v8.Flex, {
                ref: _v1 ? _v19 : null,
                direction: "column",
                children: (0, _v1.jsx)(_v8.Flex, {
                  direction: "row",
                  justifyContent: "flex-start",
                  fontSize: (0, _v4.rem)(14),
                  alignItems: "center",
                  padding: `${(0, _v4.rem)(8)} ${(0, _v4.rem)(12)}`,
                  gap: (0, _v4.rem)(8),
                  borderRadius: (0, _v4.rem)(8),
                  cursor: "pointer",
                  background: _v1 ? _v10 : "transparent",
                  _hover: {
                    background: _v10
                  },
                  onClick: () => {
                    _v6(_v0.toFormat("HH:mm")), _v12(!1);
                  },
                  children: _v0.toFormat("h:mm a").toLowerCase()
                })
              }, _v0.toFormat("HH:mm"));
            })
          })
        })
      })]
    });
  }], 0);
}