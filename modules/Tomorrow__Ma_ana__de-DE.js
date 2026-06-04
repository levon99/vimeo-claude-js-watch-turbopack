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
    _v12 = _v0.i(0);
  _v0.i(0);
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
    _v34 = _v0.i(0);
  let _v35 = ({
    dateTime: _v0,
    setDateTime: _v1,
    minDateTime: _v2,
    maxDateTime: _v3,
    isDisabled: _v4 = !1,
    onPresetChange: _v5
  }) => {
    let _v6,
      {
        settings: _v7
      } = (0, _v34.useOrionSettings)(),
      [_v8, _v9] = (0, _v2.useState)(!1),
      [_v10, _v11] = (0, _v2.useState)(0),
      [_v12, _v13] = (0, _v2.useState)(!1),
      _v14 = (0, _v2.useRef)(null),
      _v15 = (0, _v2.useRef)(null),
      _v16 = (0, _v2.useRef)(null),
      _v17 = _v13.DateTime.local(),
      _v18 = _v0 ? _v13.DateTime.fromISO(_v0) : _v17,
      _v19 = _v18 ? [new _v23.BokehDate.CalendarDate(_v18.year, _v18.month, _v18.day)] : [],
      _v20 = _v7?.enable_no_expiration_review_link_option,
      _v21 = {
        tomorrow: _v17.plus({
          days: 1
        }),
        week: _v17.plus({
          weeks: 1
        }),
        month: _v17.plus({
          months: 1
        })
      },
      _v22 = [{
        label: (0, _v15.translate)({
          singular: "Tomorrow",
          dictionary: {
            es: {
              singular: "Mañana"
            },
            "de-DE": {
              singular: "Morgen"
            },
            "fr-FR": {
              singular: "Demain"
            },
            "ja-JP": {
              singular: "明日"
            },
            "ko-KR": {
              singular: "내일"
            },
            "pt-BR": {
              singular: "Amanhã"
            },
            "zh-CN": {
              singular: "明天"
            }
          }
        }),
        value: "tomorrow"
      }, {
        label: (0, _v15.translate)({
          singular: "In 1 week",
          dictionary: {
            es: {
              singular: "En 1 semana"
            },
            "de-DE": {
              singular: "In 1 Woche"
            },
            "fr-FR": {
              singular: "Dans 1 semaine"
            },
            "ja-JP": {
              singular: "1週間後"
            },
            "ko-KR": {
              singular: "1주 후"
            },
            "pt-BR": {
              singular: "Em 1 semana"
            },
            "zh-CN": {
              singular: "1 周后"
            }
          }
        }),
        value: "week"
      }, {
        label: (0, _v15.translate)({
          singular: "In 1 month",
          dictionary: {
            es: {
              singular: "En 1 mes"
            },
            "de-DE": {
              singular: "In einem Monat"
            },
            "fr-FR": {
              singular: "Dans 1 mois"
            },
            "ja-JP": {
              singular: "1ヶ月後"
            },
            "ko-KR": {
              singular: "1개월 후"
            },
            "pt-BR": {
              singular: "Em 1 mês"
            },
            "zh-CN": {
              singular: "1 个月后"
            }
          }
        }),
        value: "month"
      }, ...(_v20 && !_v3 ? [{
        label: (0, _v15.translate)({
          singular: "No expiration",
          dictionary: {
            es: {
              singular: "Sin expiración"
            },
            "de-DE": {
              singular: "Kein Ablaufdatum"
            },
            "fr-FR": {
              singular: "Pas d'expiration"
            },
            "ja-JP": {
              singular: "期限なし"
            },
            "ko-KR": {
              singular: "만료 없음"
            },
            "pt-BR": {
              singular: "Sem expiração"
            },
            "zh-CN": {
              singular: "无限期"
            }
          }
        }),
        value: "never"
      }] : [])].filter(_v0 => {
        if (!_v3 || "never" === _v0.value) return !0;
        let _v1 = _v21[_v0.value];
        return !_v1 || _v1.startOf("day") <= _v3.startOf("day");
      });
    return (0, _v30.useOutsideClick)({
      enabled: _v8,
      ref: _v14,
      handler: _v0 => {
        _v0.target && _v15?.current && (_v15.current == _v0.target || _v15?.current?.contains(_v0.target)) || _v9(!1);
      }
    }), (0, _v30.useOutsideClick)({
      enabled: _v12,
      ref: _v14,
      handler: _v0 => {
        _v0.target && _v16.current && (_v16.current == _v0.target || _v16?.current?.contains(_v0.target)) || _v13(!1);
      }
    }), (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v16.Menu, {
        isOpen: _v8,
        placement: "bottom-start",
        children: [(0, _v1.jsx)(_v17.MenuButton, {
          as: _v18.Button,
          size: "sm",
          variant: "tertiary",
          border: "1px solid",
          borderColor: "input-stroke",
          leftIcon: (0, _v1.jsx)(_v31.Calendar, {
            boxSize: (0, _v10.rem)(20)
          }),
          rightIcon: (0, _v1.jsx)(_v32.ChevronDownSmall, {
            boxSize: (0, _v10.rem)(20)
          }),
          onClick: () => _v9(_v0 => !_v0),
          ref: _v15,
          isDisabled: _v4,
          children: (0, _v1.jsx)(_v7.Text, {
            variant: "heading-xs",
            width: (0, _v10.rem)(84),
            children: (_v6 = "u" > typeof navigator ? navigator.language : "en-US", Intl.DateTimeFormat(_v6, {
              month: "short",
              day: "numeric",
              year: "numeric"
            }).format(new Date(_v0)))
          })
        }), (0, _v1.jsx)(_v19.MenuList, {
          paddingY: "xs",
          width: "auto",
          maxWidth: (0, _v10.rem)(350),
          ref: _v14,
          children: (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v20.MenuOptionGroup, {
              paddingY: "xs",
              paddingX: "sm",
              title: (0, _v15.translate)({
                singular: "Link expires",
                dictionary: {
                  es: {
                    singular: "El enlace expira"
                  },
                  "de-DE": {
                    singular: "Link läuft ab"
                  },
                  "fr-FR": {
                    singular: "Expiration du lien"
                  },
                  "ja-JP": {
                    singular: "リンクの有効期限"
                  },
                  "ko-KR": {
                    singular: "링크 만료"
                  },
                  "pt-BR": {
                    singular: "Link expira"
                  },
                  "zh-CN": {
                    singular: "链接到期"
                  }
                }
              }),
              children: _v22.map(_v0 => (0, _v1.jsx)(_v28.MenuItem, {
                padding: "sm",
                borderRadius: "sm",
                onClick: () => (_v0 => {
                  if ("never" === _v0) {
                    _v5?.("no_expiration"), _v1(""), _v9(!1);
                    return;
                  }
                  let _v1 = _v17;
                  "tomorrow" === _v0 ? _v1 = _v17.plus({
                    days: 1
                  }) : "week" === _v0 ? _v1 = _v17.plus({
                    weeks: 1
                  }) : "month" === _v0 && (_v1 = _v17.plus({
                    months: 1
                  })), _v5?.({
                    tomorrow: "tomorrow",
                    week: "in_1_week",
                    month: "in_1_month"
                  }[_v0] ?? "custom_date"), _v1(_v1.endOf("day").toISO()), _v11(_v0 => _v0 + 1), _v9(!1);
                })(_v0.value),
                children: (0, _v1.jsx)(_v7.Text, {
                  variant: "body-md",
                  children: _v0.label
                })
              }, _v0.label))
            }), (0, _v1.jsx)(_v21.MenuDivider, {
              paddingX: "md"
            }), (0, _v1.jsx)(_v28.MenuItem, {
              padding: "sm",
              as: _v18.Button,
              borderRadius: "sm",
              onClick: () => void (_v11(_v0 => _v0 + 1), _v13(!0), _v9(!1)),
              rightIcon: (0, _v1.jsx)(_v33.ChevronRightSmall, {
                boxSize: (0, _v10.rem)(20)
              }),
              justifyContent: "space-between",
              children: (0, _v15.translate)({
                singular: "Choose custom date",
                dictionary: {
                  es: {
                    singular: "Elegir fecha personalizada"
                  },
                  "de-DE": {
                    singular: "Benutzerdefiniertes Datum wählen"
                  },
                  "fr-FR": {
                    singular: "Choisir une date personnalisée"
                  },
                  "ja-JP": {
                    singular: "カスタム日付を選択"
                  },
                  "ko-KR": {
                    singular: "사용자 지정 날짜 선택"
                  },
                  "pt-BR": {
                    singular: "Escolher data personalizada"
                  },
                  "zh-CN": {
                    singular: "选择自定义日期"
                  }
                }
              })
            })]
          })
        })]
      }), (0, _v1.jsxs)(_v24.Popover, {
        isOpen: _v12,
        placement: "bottom",
        matchWidth: !0,
        children: [(0, _v1.jsx)(_v27.PopoverAnchor, {
          children: (0, _v1.jsx)(_v29.Box, {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0
          })
        }), (0, _v1.jsx)(_v25.PopoverContent, {
          padding: "0px",
          width: (0, _v10.rem)(300),
          maxWidth: (0, _v10.rem)(300),
          ref: _v16,
          sx: {
            '[data-part="table-cell"]': {
              width: "xs",
              height: "xs",
              cursor: "pointer"
            },
            '[data-part="table-cell"][aria-disabled="true"]': {
              pointerEvents: "none"
            },
            '[data-part="table-header"]': {
              width: "xs",
              height: "xs",
              fontSize: "body-md",
              marginBottom: "sm"
            },
            '[data-scope="date-picker"]:disabled': {
              color: "text-secondary",
              pointerEvents: "none"
            }
          },
          children: (0, _v1.jsx)(_v26.PopoverBody, {
            children: (0, _v1.jsx)(_v22.DatePicker, {
              value: _v19,
              onValueChange: _v0 => {
                let {
                    day: _v1,
                    month: _v2,
                    year: _v3
                  } = _v0.value[0],
                  _v4 = new Date(_v3, _v2 - 1, _v1);
                _v4.setHours(23, 59, 0, 0), _v1(_v4.toISOString()), _v5?.("custom_date"), _v11(_v0 => _v0 + 1), _v13(!1);
              },
              open: !0,
              closeOnSelect: !0,
              min: new _v23.BokehDate.CalendarDate(_v2.year, _v2.month, _v2.day),
              ...(_v3 ? {
                max: new _v23.BokehDate.CalendarDate(_v3.year, _v3.month, _v3.day)
              } : {}),
              children: (0, _v1.jsx)(_v22.Calendar, {
                padding: "md",
                width: (0, _v10.rem)(300),
                onClick: _v0 => {
                  let _v1 = _v0.target;
                  if (_v1.matches('[data-part="table-cell"]:not([aria-disabled="true"])')) {
                    let _v0 = _v1.getAttribute("data-value");
                    if (_v0) {
                      let _v0 = _v13.DateTime.fromISO(_v0).startOf("day"),
                        _v1 = _v2.startOf("day"),
                        _v2 = _v18.startOf("day");
                      _v2 < _v0 ? (_v1(_v1.endOf("day").toISO()), _v11(_v0 => _v0 + 1), _v13(!1)) : _v2.equals(_v0) && _v13(!1);
                    }
                  }
                }
              })
            }, _v10)
          })
        })]
      })]
    });
  };
  var _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0);
  function _v40(_v0, _v1) {
    let _v2 = _v0.set({
      hour: 0,
      minute: 0
    });
    if (_v0.startOf("day") <= _v1.startOf("day")) {
      let {
        hour: _v0,
        minute: _v1
      } = function (_v0) {
        let {
            hour: _v1,
            minute: _v2
          } = _v0,
          _v3 = _v39.TIME_INTERVAL_MINUTES;
        return _v2 > 60 - _v3 && _v1++, {
          hour: _v1,
          minute: _v2 = Math.ceil(_v2 / _v3) * _v3 % 60
        };
      }(_v1);
      _v2 = _v0.set({
        hour: _v0,
        minute: _v1
      });
    }
    let _v3 = _v0.set({
      hour: 24,
      minute: 0
    });
    return _v38.Interval.fromDateTimes(_v2, _v3).splitBy({
      minutes: _v39.TIME_INTERVAL_MINUTES
    }).map(_v0 => _v0.start);
  }
  function _v41(_v0) {
    let _v1 = _v0.replace(/ /g, "").match(_v39.TIME_SEARCH_REGEX);
    if (_v1 && _v1[1]) {
      let _v0 = _v1[1],
        _v1 = _v1[2] ? _v1[2].padEnd(2, "0") : "00",
        _v2 = _v1[3] ?? _v13.DateTime.local().toFormat("a");
      return `${_v0}:${_v1} ${_v2}`;
    }
    return null;
  }
  function _v42({
    dateTime: _v0,
    setDateTime: _v1,
    isDisabled: _v2 = !1
  }) {
    let [_v3, _v4] = (0, _v2.useState)(!1),
      [_v5, _v6] = (0, _v2.useState)(null),
      _v7 = _v13.DateTime.local(),
      _v8 = (0, _v2.useRef)(null),
      _v9 = (0, _v2.useRef)(null),
      _v10 = (0, _v2.useRef)(null),
      _v11 = (0, _v2.useRef)(null),
      [_v12, _v13] = (0, _v2.useState)(!1),
      _v14 = _v0?.toFormat("h:mm a").toLowerCase() ?? null,
      _v15 = (0, _v2.useMemo)(() => _v0 && _v7 ? _v40(_v0, _v7) : [], [_v0, _v7]),
      _v16 = (0, _v2.useCallback)(_v0 => {
        _v9?.current?.scroll({
          top: _v0?.offsetTop ?? 0,
          behavior: "auto"
        });
      }, [_v9]),
      _v17 = (0, _v2.useCallback)(_v0 => {
        let {
            hour: _v1,
            minute: _v2
          } = _v13.DateTime.fromFormat(_v0, "h:mm a"),
          _v3 = new Date(_v0.year, _v0.month - 1, _v0.day, _v1, _v2);
        _v3.setSeconds(0), _v3.setMilliseconds(0), _v1(_v3.toISOString()), _v4(!1);
      }, [_v0, _v1]),
      _v18 = (0, _v2.useCallback)(_v0 => {
        let _v1 = _v0.target.value;
        _v6(_v1);
        let _v2 = _v41(_v1);
        if (_v2 && _v9?.current) {
          let _v0 = Array.from(_v9.current.children).find(_v0 => {
            let _v1 = _v0.innerText;
            return _v13.DateTime.fromFormat(_v1, "h:mm a").plus({
              minutes: 30
            }) >= _v13.DateTime.fromFormat(_v2, "h:mm a");
          });
          _v0 && _v16(_v0);
        }
      }, [_v9, _v16]),
      _v19 = () => {
        if (null !== _v5) {
          let _v0 = _v41(_v5);
          _v0 && _v17(_v0), _v6(null);
        }
      };
    return (0, _v2.useEffect)(() => {
      _v3 && _v10?.current && _v16(_v10.current);
    }, [_v3, _v10, _v16]), (0, _v30.useOutsideClick)({
      enabled: _v3,
      ref: _v8,
      handler: _v0 => {
        _v0.target && _v9?.current?.contains(_v0.target) || (_v19(), _v4(!1));
      }
    }), (0, _v30.useOutsideClick)({
      enabled: _v12,
      ref: _v11,
      handler: () => {
        _v19(), _v13(!1);
      }
    }), (0, _v1.jsxs)(_v16.Menu, {
      isOpen: _v3,
      matchWidth: !0,
      children: [(0, _v1.jsx)(_v17.MenuButton, {
        ref: _v8,
        as: _v18.Button,
        variant: "tertiary",
        size: "sm",
        backgroundColor: "transparent !important",
        border: "1px solid",
        borderColor: "input-stroke",
        leftIcon: (0, _v1.jsx)(_v37.Clock, {
          height: (0, _v10.rem)(16),
          width: (0, _v10.rem)(16)
        }),
        isDisabled: _v2,
        onClick: () => {
          if (_v11.current) {
            _v11.current.focus();
            let _v0 = _v11.current.value;
            _v11.current.setSelectionRange(_v0.length, _v0.length);
          }
          _v13(!0);
        },
        rightIcon: (0, _v1.jsx)(_v18.Button, {
          variant: "ghost",
          size: "sm",
          tabIndex: 0,
          "aria-label": (0, _v15.translate)({
            singular: "Toggle time picker",
            dictionary: {
              es: {
                singular: "Activar o desactivar el selector de horario"
              },
              "de-DE": {
                singular: "Zeitauswahl umschalten"
              },
              "fr-FR": {
                singular: "Activer/désactiver le sélecteur de temps"
              },
              "ja-JP": {
                singular: "タイムピッカーの切り替え"
              },
              "ko-KR": {
                singular: "시간 선택기 전환"
              },
              "pt-BR": {
                singular: "Ativar ou desativar o seletor de horário"
              },
              "zh-CN": {
                singular: "切换时间选择器"
              }
            }
          }),
          cursor: _v2 ? "not-allowed" : "pointer",
          onClick: _v0 => {
            _v2 || (_v0.stopPropagation(), _v4(!_v3));
          },
          onKeyDown: _v0 => {
            _v2 || ("Enter" === _v0.key || " " === _v0.key) && (_v0.preventDefault(), _v0.stopPropagation(), _v4(!_v3));
          },
          style: {
            display: "flex",
            alignItems: "center",
            padding: 0,
            background: "none",
            border: "none",
            boxShadow: "none"
          },
          children: (0, _v1.jsx)(_v32.ChevronDownSmall, {})
        }),
        children: (0, _v1.jsx)(_v6.Input, {
          "data-active": _v3,
          value: _v5 ?? _v14 ?? "",
          ref: _v11,
          cursor: "pointer",
          width: (0, _v10.rem)(64),
          fontWeight: "500",
          padding: "0px",
          height: "fit-content",
          fontSize: "body-md",
          backgroundColor: "transparent",
          borderRadius: "0px",
          border: "none !important",
          outline: "none !important",
          placeholder: "hh:mm",
          onChange: _v18,
          onKeyDown: _v0 => {
            "Enter" === _v0.key && (_v19(), _v11.current?.blur(), _v4(!1));
          }
        })
      }), (0, _v1.jsx)(_v19.MenuList, {
        minWidth: "100%",
        paddingY: "xs",
        paddingX: "0px",
        children: (0, _v1.jsx)(_v3.Flex, {
          ref: _v9,
          direction: "column",
          overflowY: "auto",
          overflowX: "hidden",
          height: "100%",
          width: "100%",
          paddingY: "xs",
          paddingX: "sm",
          gap: "sm",
          maxHeight: (0, _v10.rem)(196),
          children: _v15.map(_v0 => {
            let _v1 = _v0.toFormat("HH:mm") === _v0?.toFormat("HH:mm");
            return (0, _v1.jsxs)(_v28.MenuItem, {
              ref: _v1 ? _v10 : null,
              fontSize: (0, _v10.rem)(14),
              alignItems: "center",
              padding: "sm",
              gap: "sm",
              borderRadius: "sm",
              onClick: () => {
                _v17(_v0.toFormat("h:mm a")), _v4(!1);
              },
              children: [(0, _v1.jsx)(_v7.Text, {
                variant: "body-md",
                children: _v0.toFormat("h:mm a").toLowerCase()
              }), _v1 && (0, _v1.jsx)(_v36.CheckSmall, {
                boxSize: (0, _v10.rem)(20)
              })]
            }, _v0.toFormat("HH:mm"));
          })
        })
      })]
    });
  }
  _v0.s(["buildEventTimeInterval", 0, _v40, "checkIsPastDate", 0, _v0 => {
    let _v1 = _v0 ? _v13.DateTime.fromISO(_v0) : null,
      _v2 = _v13.DateTime.local();
    return !!_v1 && !!(_v1 < _v2);
  }, "parseTimeFromInput", 0, _v41], 0);
  let _v43 = ({
    dateTime: _v0,
    onChange: _v1,
    label: _v2,
    showUpsell: _v3,
    isDisabled: _v4,
    isInvalid: _v5,
    errorMessage: _v6,
    openUpsellModal: _v7,
    maxDateTime: _v8,
    isDatePickerEnabled: _v9,
    onPresetChange: _v10
  }) => {
    let [_v11] = (0, _v14.useMediaQuery)("(max-width: 400px)"),
      [_v12, _v13] = (0, _v2.useState)(!!_v0),
      _v14 = (0, _v2.useRef)(_v1);
    _v14.current = _v1;
    let _v15 = (0, _v2.useRef)(_v0);
    _v15.current = _v0;
    let _v16 = _v0 => {
      "" === _v0 && _v13(!1), _v1(_v0, "expiresOn");
    };
    return (0, _v2.useEffect)(() => {
      _v12 ? _v15.current || _v14.current(_v13.DateTime.local().plus({
        days: 30
      }).endOf("day").toISO(), "expiresOn") : _v14.current("", "expiresOn");
    }, [_v12]), (0, _v1.jsxs)(_v3.Flex, {
      gap: "xs",
      direction: "column",
      position: "relative",
      children: [(0, _v1.jsxs)(_v4.FormControl, {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        children: [(0, _v1.jsx)(_v5.FormLabel, {
          margin: "0",
          children: (0, _v1.jsx)(_v7.Text, {
            variant: "body-md",
            color: "text-primary",
            children: _v2
          })
        }), (0, _v1.jsxs)(_v3.Flex, {
          gap: "xs",
          alignItems: "center",
          children: [_v3 && (0, _v1.jsx)(_v12.UpgradeBadge, {
            noMargin: !0,
            onClick: _v7,
            style: {
              height: (0, _v10.rem)(20),
              paddingX: "xs"
            }
          }), (0, _v1.jsx)(_v8.Switch, {
            size: "md",
            paddingX: (0, _v10.rem)(2),
            isChecked: _v12,
            onChange: () => _v13(!_v12),
            isDisabled: _v4
          })]
        })]
      }), _v12 && _v0 && (0, _v1.jsxs)(_v3.Flex, {
        gap: "sm",
        direction: "column",
        children: [(0, _v1.jsxs)(_v3.Flex, {
          gap: "sm",
          alignItems: _v11 ? "start" : "center",
          direction: _v11 ? "column" : "row",
          children: [(0, _v1.jsx)(_v35, {
            dateTime: _v0,
            minDateTime: _v13.DateTime.local(),
            maxDateTime: _v8 ? _v13.DateTime.fromISO(_v8) : void 0,
            setDateTime: _v16,
            isDisabled: _v4 && !_v9,
            onPresetChange: _v10
          }), (0, _v1.jsx)(_v7.Text, {
            variant: "body-md",
            children: (0, _v15.translate)({
              singular: "at",
              dictionary: {
                es: {
                  singular: "a las"
                },
                "de-DE": {
                  singular: "um"
                },
                "fr-FR": {
                  singular: "à"
                },
                "ja-JP": {
                  singular: "："
                },
                "ko-KR": {
                  singular: "시간:"
                },
                "pt-BR": {
                  singular: "às"
                },
                "zh-CN": {
                  singular: "时间："
                }
              }
            })
          }), (0, _v1.jsx)(_v42, {
            dateTime: _v13.DateTime.fromISO(_v0),
            setDateTime: _v16,
            isDisabled: _v4 && !_v9
          })]
        }), _v5 && (0, _v1.jsx)(_v7.Text, {
          color: "status-destructive-primary",
          variant: "body-sm",
          children: _v6
        })]
      })]
    });
  };
  var _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0);
  let _v51 = ({
    label: _v0,
    value: _v1,
    onChange: _v2,
    showUpsell: _v3,
    isDisabled: _v4,
    isInvalid: _v5,
    errorMessage: _v6,
    maxLength: _v7 = 32,
    openUpsellModal: _v8
  }) => {
    let _v9 = (0, _v47.useToast)(),
      _v10 = "copy-password-toast",
      _v11 = (0, _v2.useRef)(null),
      {
        width: _v12
      } = (0, _v46.useSize)(_v11) ?? {
        width: 89
      },
      [_v13, _v14] = (0, _v2.useState)(!1),
      [_v15, _v16] = (0, _v2.useState)(!1),
      [_v17, _v18] = (0, _v2.useState)(!!_v1);
    return (0, _v2.useEffect)(() => {
      _v17 || _v2("", "password");
    }, [_v17]), (0, _v1.jsxs)(_v3.Flex, {
      gap: "xs",
      direction: "column",
      children: [(0, _v1.jsxs)(_v4.FormControl, {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        children: [(0, _v1.jsx)(_v5.FormLabel, {
          margin: "0",
          children: (0, _v1.jsx)(_v7.Text, {
            variant: "body-md",
            color: "text-primary",
            children: _v0
          })
        }), (0, _v1.jsxs)(_v3.Flex, {
          gap: "xs",
          alignItems: "center",
          children: [_v3 && (0, _v1.jsx)(_v12.UpgradeBadge, {
            noMargin: !0,
            onClick: _v8,
            style: {
              height: (0, _v10.rem)(20),
              paddingX: "xs"
            }
          }), (0, _v1.jsx)(_v8.Switch, {
            size: "md",
            paddingX: (0, _v10.rem)(2),
            isChecked: _v17,
            isDisabled: _v4,
            onChange: () => _v18(!_v17),
            cursor: _v4 ? "not-allowed" : "pointer"
          })]
        })]
      }), _v17 && (0, _v1.jsxs)(_v4.FormControl, {
        display: "flex",
        flexDirection: "column",
        gap: "xs",
        children: [(0, _v1.jsxs)(_v44.InputGroup, {
          _hover: {
            "& .copy-password-btn": {
              visibility: "visible",
              pointerEvents: "auto"
            }
          },
          children: [(0, _v1.jsx)(_v6.Input, {
            type: _v13 ? "text" : "password",
            value: _v1,
            onChange: _v0 => {
              _v2(_v0.target.value, "password");
            },
            placeholder: (0, _v15.translate)({
              singular: "Add password",
              dictionary: {
                es: {
                  singular: "Añadir contraseña"
                },
                "de-DE": {
                  singular: "Kennwort hinzufügen"
                },
                "fr-FR": {
                  singular: "Ajouter un mot de passe"
                },
                "ja-JP": {
                  singular: "パスワードを追加"
                },
                "ko-KR": {
                  singular: "비밀번호 추가"
                },
                "pt-BR": {
                  singular: "Adicionar senha"
                },
                "zh-CN": {
                  singular: "添加密码"
                }
              }
            }),
            color: "text-primary",
            size: "sm",
            outlineColor: "input-stroke-hover",
            autoComplete: "off",
            pr: (0, _v10.rem)(_v12 + 8),
            isInvalid: _v5,
            onFocus: () => _v16(!0),
            onBlur: () => _v16(!1)
          }), (0, _v1.jsxs)(_v45.InputRightElement, {
            ref: _v11,
            gap: "sm",
            pr: "3",
            width: "fit-content",
            alignItems: "center",
            height: "100%",
            children: [_v1 && (0, _v1.jsx)(_v18.Button, {
              size: "xs",
              className: "copy-password-btn",
              visibility: "hidden",
              pointerEvents: "none",
              onClick: () => void (navigator.clipboard.writeText(String(_v1)), !_v9.isActive(_v10) && _v9({
                id: _v10,
                title: (0, _v15.translate)({
                  singular: "Password copied",
                  dictionary: {
                    es: {
                      singular: "Contraseña copiada"
                    },
                    "de-DE": {
                      singular: "Passwort kopiert"
                    },
                    "fr-FR": {
                      singular: "Mot de passe copié"
                    },
                    "ja-JP": {
                      singular: "パスワードがコピーされました"
                    },
                    "ko-KR": {
                      singular: "비밀번호 복사 완료"
                    },
                    "pt-BR": {
                      singular: "Senha copiada"
                    },
                    "zh-CN": {
                      singular: "密码已复制"
                    }
                  }
                }),
                duration: _v50.TOAST_DURATION,
                isClosable: !1
              })),
              variant: "tertiary",
              children: (0, _v1.jsx)(_v7.Text, {
                color: "text-primary",
                variant: "heading-2xs",
                children: (0, _v15.translate)({
                  singular: "Copy",
                  dictionary: {
                    es: {
                      singular: "Copiar"
                    },
                    "de-DE": {
                      singular: "Kopieren"
                    },
                    "fr-FR": {
                      singular: "Copier"
                    },
                    "ja-JP": {
                      singular: "コピー"
                    },
                    "ko-KR": {
                      singular: "복사"
                    },
                    "pt-BR": {
                      singular: "Copiar"
                    },
                    "zh-CN": {
                      singular: "复制"
                    }
                  }
                })
              })
            }), (0, _v1.jsx)(_v29.Box, {
              onClick: () => _v14(_v0 => !_v0),
              cursor: "pointer",
              children: _v13 ? (0, _v1.jsx)(_v48.Eye, {
                boxSize: (0, _v10.rem)(14)
              }) : (0, _v1.jsx)(_v49.EyeShut, {
                boxSize: (0, _v10.rem)(14)
              })
            })]
          })]
        }), _v5 && (0, _v1.jsxs)(_v3.Flex, {
          h: (0, _v10.rem)(18),
          align: "center",
          justify: "space-between",
          children: [(0, _v1.jsx)(_v4.FormHelperText, {
            fontWeight: "normal",
            color: "status-destructive-primary",
            children: _v6
          }), _v15 && (0, _v1.jsx)(_v4.FormHelperText, {
            color: "status-destructive-primary",
            paddingRight: "sm",
            children: _v7 - (_v1 || "").length
          })]
        })]
      })]
    });
  };
  _v0.s(["ReviewLinkFormField", 0, ({
    field: _v0,
    value: _v1,
    isInvalid: _v2,
    errorMessage: _v3,
    maxLength: _v4,
    onChange: _v5,
    openUpsellModal: _v6,
    onPresetChange: _v7
  }) => {
    let {
        label: _v8,
        name: _v9,
        type: _v10,
        info: _v11,
        helperText: _v12,
        showUpsell: _v13,
        isDisabled: _v14
      } = _v0,
      [_v15, _v16] = (0, _v2.useState)(!1),
      _v17 = (0, _v2.useRef)(null),
      _v18 = _v0 => {
        _v0.preventDefault();
        let _v1 = "checkbox" === _v0.target.type ? _v0.target.checked : _v0.target.value;
        _v5("hideEndCards" === _v9 && "boolean" == typeof _v1 ? !_v1 : _v1, _v9);
      };
    switch ((0, _v2.useEffect)(() => {
      _v17?.current?.focus(), _v17?.current?.select();
    }, []), _v10) {
      case "switch":
        return (0, _v1.jsxs)(_v4.FormControl, {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          children: [(0, _v1.jsxs)(_v3.Flex, {
            gap: "xs",
            alignItems: "center",
            children: [_v8 && (0, _v1.jsx)(_v5.FormLabel, {
              margin: "0",
              children: (0, _v1.jsx)(_v7.Text, {
                variant: "body-md",
                color: "text-primary",
                children: _v8
              })
            }), _v11 && (0, _v1.jsx)(_v9.Tooltip, {
              label: _v11,
              placement: "top",
              shouldWrapChildren: !0,
              children: (0, _v1.jsx)(_v11.InfoCircle, {
                boxSize: "1rem",
                color: "text-secondary"
              })
            })]
          }), (0, _v1.jsxs)(_v3.Flex, {
            gap: "xs",
            alignItems: "center",
            children: [_v13 && (0, _v1.jsx)(_v12.UpgradeBadge, {
              noMargin: !0,
              onClick: _v6,
              style: {
                height: (0, _v10.rem)(20),
                paddingX: "xs"
              }
            }), (0, _v1.jsx)(_v8.Switch, {
              size: "md",
              paddingX: (0, _v10.rem)(2),
              isChecked: "hideEndCards" === _v9 ? !_v1 : !!_v1,
              onChange: _v18,
              isDisabled: _v14,
              cursor: _v14 ? "not-allowed" : "pointer"
            })]
          })]
        });
      case "dateTime":
        return (0, _v1.jsx)(_v43, {
          showUpsell: _v13,
          openUpsellModal: _v6,
          isDisabled: _v14,
          isDatePickerEnabled: _v0.isDatePickerEnabled,
          onChange: _v5,
          dateTime: String(_v1),
          label: _v8 ?? "",
          isInvalid: _v2,
          errorMessage: _v3,
          maxDateTime: _v0.maxDateTime,
          onPresetChange: _v7
        });
      case "password":
        return (0, _v1.jsx)(_v51, {
          isInvalid: _v2,
          openUpsellModal: _v6,
          label: String(_v8),
          value: String(_v1),
          onChange: _v5,
          errorMessage: _v3,
          maxLength: _v4,
          isDisabled: _v14,
          showUpsell: _v13
        });
      default:
        {
          let _v0 = _v2 && !_v15 ? {
            text: _v3,
            color: "status-destructive-primary",
            fontWeight: "normal"
          } : {
            text: _v12,
            color: "text-secondary",
            fontWeight: "regular"
          };
          return (0, _v1.jsxs)(_v4.FormControl, {
            display: "flex",
            flexDirection: "column",
            gap: "xs",
            children: [_v8 && (0, _v1.jsx)(_v5.FormLabel, {
              margin: "0",
              children: (0, _v1.jsx)(_v7.Text, {
                variant: "heading-xs",
                children: _v8
              })
            }), (0, _v1.jsx)(_v6.Input, {
              size: "sm",
              value: String(_v1),
              ref: _v17,
              onChange: _v18,
              autoComplete: "off",
              isInvalid: _v2,
              onFocus: () => _v16(!0),
              onBlur: () => _v16(!1)
            }), (0, _v1.jsxs)(_v3.Flex, {
              h: (0, _v10.rem)(18),
              align: "center",
              justify: "space-between",
              children: [(0, _v1.jsx)(_v4.FormHelperText, {
                color: _v0.color,
                fontWeight: _v0.fontWeight,
                children: _v0.text
              }), _v2 && _v15 && _v4 && (0, _v1.jsx)(_v4.FormHelperText, {
                color: "status-destructive-primary",
                paddingRight: "sm",
                children: _v4 - (String(_v1) || "").length
              })]
            })]
          });
        }
    }
  }], 0);
}