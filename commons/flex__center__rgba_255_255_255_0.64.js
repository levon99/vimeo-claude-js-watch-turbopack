{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.i(0);
  var _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.i(0);
  var _v5 = _v0.i(0),
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
    _v22 = _v0.i(0);
  let _v23 = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: (0, _v8.rem)(24),
      paddingLeft: (0, _v8.rem)(8),
      paddingRight: (0, _v8.rem)(8),
      borderRadius: (0, _v8.rem)(6),
      backgroundColor: "rgba(255, 255, 255, 0.64)",
      color: "text-primary",
      fontSize: (0, _v8.rem)(12),
      fontWeight: 500,
      lineHeight: 1.4,
      letterSpacing: "-0.03em",
      textDecoration: "none",
      whiteSpace: "nowrap",
      _hover: {
        textDecoration: "none",
        opacity: .92
      },
      _focusVisible: {
        outline: "2px solid",
        outlineColor: "status-caution-primary",
        outlineOffset: "2px"
      }
    },
    _v24 = {
      border: "none",
      cursor: "pointer",
      fontFamily: "inherit",
      appearance: "none",
      WebkitAppearance: "none",
      ..._v23
    };
  function _v25() {
    let {
        open: _v0,
        upgradeModal: _v1
      } = (0, _v22.useSimultaneousStreamLimitUpgradeModal)(),
      _v2 = (0, _v21.useBreakpointValue)({
        base: !0,
        md: !1
      }, {
        ssr: !1
      });
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v19.AlertRoot, {
        variant: "warning",
        width: "100%",
        alignItems: _v2 ? "flex-start" : "center",
        display: "flex",
        flexDirection: "row",
        gap: (0, _v8.rem)(16),
        paddingY: (0, _v8.rem)(8),
        paddingLeft: (0, _v8.rem)(12),
        paddingRight: (0, _v8.rem)(8),
        borderRadius: (0, _v8.rem)(8),
        "data-testid": "event-schedule-simultaneous-warning",
        children: [(0, _v1.jsx)(_v18.AlertIcon, {
          flexShrink: 0,
          boxSize: (0, _v8.rem)(20),
          marginRight: 0,
          marginTop: _v2 ? (0, _v8.rem)(2) : 0
        }), (0, _v1.jsxs)(_v17.AlertDescription, {
          as: "div",
          display: "flex",
          flexDirection: _v2 ? "column" : "row",
          alignItems: _v2 ? "stretch" : "center",
          flexWrap: "wrap",
          flex: "1 1 auto",
          gap: (0, _v8.rem)(_v2 ? 12 : 16),
          margin: 0,
          minWidth: 0,
          width: "100%",
          children: [(0, _v1.jsx)(_v20.Text, {
            variant: "body-sm",
            color: "text-primary",
            flex: _v2 ? "none" : "1 1 0",
            minWidth: 0,
            width: _v2 ? "100%" : void 0,
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            sx: {
              hyphens: "auto"
            },
            children: (0, _v13.translate)({
              singular: "You may have reached the maximum number of events you can host at the same time.",
              dictionary: {
                es: {
                  singular: "Puede que hayas alcanzado el número máximo de eventos que puedes alojar simultáneamente."
                },
                "de-DE": {
                  singular: "Möglicherweise haben Sie die maximale Anzahl gleichzeitiger Veranstaltungen erreicht, die Sie hosten können."
                },
                "fr-FR": {
                  singular: "Vous avez peut‑être atteint le nombre maximal d'événements que vous pouvez héberger simultanément."
                },
                "ja-JP": {
                  singular: "同時に開催できるイベントの最大数に達している可能性があります。"
                },
                "ko-KR": {
                  singular: "동시에 호스팅할 수 있는 이벤트 수의 최대치에 도달했을 수 있습니다."
                },
                "pt-BR": {
                  singular: "Você pode ter atingido o número máximo de eventos que pode hospedar ao mesmo tempo."
                },
                "zh-CN": {
                  singular: "您可能已达到可同时主办活动的最大数量。"
                }
              }
            })
          }), (0, _v1.jsxs)(_v6.Flex, {
            alignItems: "center",
            flexShrink: 0,
            flexWrap: "wrap",
            gap: (0, _v8.rem)(8),
            width: _v2 ? "100%" : "auto",
            children: [(0, _v1.jsx)(_v11.Box, {
              as: "a",
              href: "/library/events",
              rel: "noopener noreferrer",
              target: "_blank",
              sx: _v23,
              children: (0, _v13.translate)({
                singular: "See Calendar",
                dictionary: {
                  es: {
                    singular: "Ver calendario"
                  },
                  "de-DE": {
                    singular: "Kalender anzeigen"
                  },
                  "fr-FR": {
                    singular: "Voir le calendrier"
                  },
                  "ja-JP": {
                    singular: "カレンダーを見る"
                  },
                  "ko-KR": {
                    singular: "캘린더 보기"
                  },
                  "pt-BR": {
                    singular: "Ver calendário"
                  },
                  "zh-CN": {
                    singular: "查看日历"
                  }
                }
              })
            }), (0, _v1.jsx)(_v11.Box, {
              as: "button",
              type: "button",
              onClick: _v0,
              sx: _v24,
              children: (0, _v13.translate)({
                singular: "Contact Sales",
                dictionary: {
                  es: {
                    singular: "Comunicarse con Ventas"
                  },
                  "de-DE": {
                    singular: "Sales-Team kontaktieren"
                  },
                  "fr-FR": {
                    singular: "Service commercial"
                  },
                  "ja-JP": {
                    singular: "営業チームへ問い合わせる"
                  },
                  "ko-KR": {
                    singular: "영업팀에 문의"
                  },
                  "pt-BR": {
                    singular: "Falar com vendas"
                  },
                  "zh-CN": {
                    singular: "联系销售"
                  }
                }
              })
            })]
          })]
        })]
      }), _v1]
    });
  }
  var _v26 = _v0.i(0),
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
  function _v39(_v0) {
    let _v1 = Math.abs(_v0),
      [_v2, _v3] = [Math.floor(_v1 / 60), _v1 % 60].map(_v0 => _v0.toString().padStart(2, "0")),
      _v4 = `${_v2}:${_v3}`;
    return `${_v0 >= 0 ? "+" : "-"} ${_v4}`;
  }
  function _v40({
    timeZone: _v0,
    attach: _v1 = "bottom",
    onChange: _v2
  }) {
    let _v3 = (0, _v34.useColorModeValue)("slate.50", "grayscale.800"),
      [_v4, _v5] = (0, _v4.useState)(!1),
      [_v6, _v7] = (0, _v4.useState)(""),
      _v8 = (0, _v4.useRef)(null),
      _v9 = (0, _v4.useRef)(null),
      _v10 = (0, _v4.useRef)(null),
      _v11 = (0, _v4.useRef)(null),
      _v12 = (0, _v4.useRef)(null),
      _v13 = (0, _v4.useMemo)(() => (0, _v2.getTimeZones)(), []),
      _v14 = (0, _v4.useMemo)(() => _v13.find(_v0 => _v0 === _v0.name || _v0.group[0] === _v0) ?? _v13.find(_v0 => _v0.group.includes(_v0)), [_v13, _v0]),
      _v15 = (0, _v4.useMemo)(() => _v6 ? _v13.filter(_v0 => _v0.rawFormat.toLowerCase().search(_v6.toLowerCase()) >= 0 || _v0.countryName.toLowerCase().search(_v6.toLowerCase()) >= 0) : _v13, [_v13, _v6]);
    (0, _v4.useEffect)(() => {
      _v4 && (_v11?.current?.scroll({
        top: (_v12?.current?.offsetTop ?? 0) - 120,
        behavior: "auto"
      }), setTimeout(() => {
        _v9.current?.focus();
      }, 100));
    }, [_v4, _v11, _v12]), (0, _v35.useOutsideClick)({
      enabled: _v4,
      ref: _v10,
      handler: _v0 => {
        _v0.target && _v8?.current?.contains(_v0.target) || _v5(!1);
      }
    });
    let _v16 = (0, _v38.useScrollbarStyles)({
      width: (0, _v8.rem)(8),
      scrollbarColor: "transparent"
    });
    return (0, _v1.jsxs)(_v28.Popover, {
      isOpen: _v4,
      placement: _v1,
      matchWidth: !0,
      children: [(0, _v1.jsx)(_v29.PopoverTrigger, {
        children: (0, _v1.jsxs)(_v6.Flex, {
          ref: _v8,
          direction: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          height: (0, _v8.rem)(32),
          borderRadius: "sm",
          padding: `${(0, _v8.rem)(6)} ${(0, _v8.rem)(12)}`,
          cursor: "pointer",
          tabIndex: 0,
          background: "surface",
          outline: _v4 ? "2px solid" : "1px solid",
          outlineColor: _v4 ? "inherit" : "input-stroke",
          sx: {
            "&:hover": {
              background: "fill-component-hover"
            },
            "&:focus, &:active": {
              outline: "2px solid",
              outlineColor: "inherit"
            }
          },
          onClick: () => {
            _v5(_v0 => !_v0), _v7("");
          },
          children: [(0, _v1.jsxs)(_v27.Paragraph, {
            size: "md",
            color: "text-primary",
            letterSpacing: (0, _v8.rem)(-.14),
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
            children: [(0, _v1.jsx)(_v11.Box, {
              as: "span",
              "data-testid": "time-zone-picker-value",
              children: _v14 && `${_v14.mainCities[0]}, ${_v14.countryName}`
            }), (0, _v1.jsx)(_v11.Box, {
              as: "span",
              fontSize: (0, _v8.rem)(14),
              color: "text-secondary",
              whiteSpace: "nowrap",
              children: ` (GMT ${_v39(_v14?.currentTimeOffsetInMinutes ?? 0)})`
            })]
          }), (0, _v1.jsx)(_v36.ChevronDown, {})]
        })
      }), (0, _v1.jsx)(_v30.PopoverContent, {
        minWidth: "100%",
        children: (0, _v1.jsxs)(_v6.Flex, {
          ref: _v10,
          direction: "column",
          children: [(0, _v1.jsx)(_v6.Flex, {
            position: "relative",
            padding: (0, _v8.rem)(8),
            width: "100%",
            children: (0, _v1.jsxs)(_v31.InputGroup, {
              size: "sm",
              children: [(0, _v1.jsx)(_v33.InputLeftElement, {
                children: (0, _v1.jsx)(_v37.SearchMagnifier, {
                  height: 20,
                  width: 20
                })
              }), (0, _v1.jsx)(_v32.Input, {
                ref: _v9,
                placeholder: (0, _v13.translate)({
                  singular: "Search",
                  dictionary: {
                    es: {
                      singular: "Buscar"
                    },
                    "de-DE": {
                      singular: "Suchen"
                    },
                    "fr-FR": {
                      singular: "Chercher"
                    },
                    "ja-JP": {
                      singular: "検索"
                    },
                    "ko-KR": {
                      singular: "검색"
                    },
                    "pt-BR": {
                      singular: "Pesquisar"
                    },
                    "zh-CN": {
                      singular: "搜索"
                    }
                  }
                }),
                value: _v6,
                onChange: _v0 => {
                  _v7(_v0.target.value);
                }
              })]
            })
          }), (0, _v1.jsx)(_v6.Flex, {
            ref: _v11,
            direction: "column",
            gap: (0, _v8.rem)(8),
            padding: `0 ${(0, _v8.rem)(8)} ${(0, _v8.rem)(8)} ${(0, _v8.rem)(8)}`,
            overflowY: "auto",
            overflowX: "hidden",
            height: "100%",
            maxHeight: (0, _v8.rem)(180),
            sx: _v16,
            children: _v15.map(_v0 => (0, _v1.jsx)(_v6.Flex, {
              ref: _v0.name === _v14?.name ? _v12 : null,
              justifyContent: "flex-start",
              alignItems: "center",
              padding: `${(0, _v8.rem)(8)} ${(0, _v8.rem)(12)}`,
              gap: (0, _v8.rem)(8),
              borderRadius: (0, _v8.rem)(8),
              cursor: "pointer",
              width: "100%",
              background: _v0.name === _v14?.name ? _v3 : "transparent",
              _hover: {
                background: _v3
              },
              onClick: () => {
                _v5(!1), _v2(_v0.name);
              },
              children: (0, _v1.jsxs)(_v27.Paragraph, {
                alignItems: "center",
                size: "md",
                whiteSpace: "wrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
                margin: 0,
                gap: (0, _v8.rem)(4),
                width: "100%",
                children: [(0, _v1.jsx)(_v11.Box, {
                  as: "span",
                  children: `${_v0.mainCities[0]}, ${_v0.countryName}`
                }), (0, _v1.jsx)(_v11.Box, {
                  as: "span",
                  fontSize: (0, _v8.rem)(14),
                  color: "text-secondary",
                  whiteSpace: "nowrap",
                  children: ` (GMT ${_v39(_v0.currentTimeOffsetInMinutes)})`
                })]
              })
            }, _v0.name))
          })]
        })
      })]
    });
  }
  var _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0);
  _v0.s(["EventSchedule", 0, function ({
    id: _v0 = "event-schedule",
    className: _v1 = "event-schedule",
    schedule: _v2,
    isMutationAllowed: _v3 = !1,
    isDisabled: _v4,
    isLoading: _v5,
    isRecurringDisabled: _v6 = !1,
    isVertical: _v7 = !1,
    isVerticalDate: _v8 = !1,
    hideRecurring: _v9 = !1,
    trackingHandlers: _v10,
    onChange: _v11,
    showScheduleSimultaneousWarning: _v12 = !1
  }) {
    let _v13 = (0, _v4.useMemo)(() => (0, _v2.getTimeZones)(), []),
      _v14 = (0, _v4.useMemo)(() => {
        let _v0 = _v2?.timeZone ?? Intl.DateTimeFormat().resolvedOptions().timeZone,
          _v1 = _v13.find(_v0 => _v0 === _v0.name || _v0.group[0] === _v0) ?? _v13.find(_v0 => _v0.group.includes(_v0));
        return _v1?.name ?? _v0;
      }, [_v2?.timeZone, _v13]),
      _v15 = (0, _v4.useMemo)(() => {
        if (_v2?.startTime) return _v3.DateTime.fromISO(_v2.startTime).setZone(_v14);
      }, [_v2?.startTime, _v14]),
      _v16 = (0, _v4.useMemo)(() => {
        if (_v2?.endTime) return _v3.DateTime.fromISO(_v2.endTime).setZone(_v14);
      }, [_v2?.endTime, _v14]),
      _v17 = (0, _v4.useMemo)(() => _v15?.plus({
        minutes: 10
      }) ?? _v3.DateTime.utc().setZone(_v14).plus({
        minutes: 10
      }), [_v15, _v14]),
      _v18 = (0, _v4.useMemo)(() => {
        let _v0 = _v3.DateTime.utc().setZone(_v14);
        return _v15 && _v15 < _v0 ? _v15 : _v0;
      }, [_v15, _v14]),
      _v19 = (0, _v4.useCallback)((_v0, _v1) => {
        let _v2 = _v3.DateTime.utc().setZone(_v14),
          _v3 = _v1 && _v1 > _v2 ? _v1 : _v2;
        if (_v16) {
          let {
            hour: _v0,
            minute: _v1
          } = _v16;
          _v0 = _v0.set({
            hour: _v0,
            minute: _v1
          });
        } else {
          let {
            hour: _v0,
            minute: _v1
          } = (0, _v42.getNextRoundedTimeByDate)(_v3.plus({
            hours: 1
          }));
          _v0 = _v0.set({
            hour: _v0,
            minute: _v1
          });
        }
        if (_v0 < _v3.plus({
          minutes: 10
        })) if (_v0.hasSame(_v3.plus({
          hour: 1
        }), "day") || !_v0.hasSame(_v3.plus({
          minutes: 15
        }), "day")) {
          _v0 = _v3.DateTime.fromISO(_v3.toISO()).setZone(_v14).plus({
            hours: 1
          });
          let {
            hour: _v0,
            minute: _v1
          } = (0, _v42.getNextRoundedTimeByDate)(_v0);
          _v0 = _v0.set({
            hour: _v0,
            minute: _v1
          });
        } else {
          let {
            hour: _v0,
            minute: _v1
          } = (0, _v42.getPreviousRoundedTimeByDate)(_v3.set({
            hour: 0,
            minute: 0
          }), 5);
          _v0 = _v0 = _v0.set({
            hour: _v0,
            minute: _v1
          });
        }
        return _v0;
      }, [_v16, _v14]),
      _v20 = (0, _v4.useCallback)(_v0 => {
        let {
            hour: _v1,
            minute: _v2
          } = _v15 ?? (0, _v42.getNextRoundedTimeByDate)(_v3.DateTime.utc().setZone(_v14)),
          _v3 = _v3.DateTime.fromJSDate(_v0).setZone(_v14, {
            keepLocalTime: !0
          }).set({
            hour: _v1,
            minute: _v2
          }),
          _v4 = {
            startTime: _v3.toISO()
          };
        if (_v16 && _v3.plus({
          minutes: 10
        }) >= _v16 && (_v4.endTime = _v19(_v16, _v3).toISO()), _v2?.rrule) {
          let _v0 = _v5.RRule.parseString(_v2.rrule);
          _v0.freq === _v5.RRule.MONTHLY && (_v0.byweekday && (_v0.byweekday = (0, _v43.getNthWeekday)(_v3)), _v0.bymonthday && (_v0.bymonthday = _v3.day), _v4.rrule = _v5.RRule.optionsToString(_v0));
        }
        _v2?.timeZone || (_v4.timeZone = _v14), _v11({
          ..._v2,
          ..._v4
        }), _v10?.trackStartDateChange();
      }, [_v2, _v14, _v15, _v16, _v19, _v11, _v10]),
      _v21 = (0, _v4.useCallback)(() => {
        _v11({
          ..._v2,
          startTime: void 0,
          endTime: void 0,
          rrule: void 0
        });
      }, [_v2, _v11]),
      _v22 = (0, _v4.useCallback)(() => {
        _v11({
          ..._v2,
          endTime: void 0
        });
      }, [_v2, _v11]),
      _v23 = (0, _v4.useCallback)(_v0 => {
        let _v1 = {
          endTime: _v19(_v3.DateTime.fromJSDate(_v0).setZone(_v14, {
            keepLocalTime: !0
          }), _v15).toISO()
        };
        if (_v2?.timeZone || (_v1.timeZone = _v14), !_v2?.startTime) {
          let _v0 = _v3.DateTime.utc().setZone(_v14),
            {
              hour: _v1,
              minute: _v2
            } = (0, _v42.getNextRoundedTimeByDate)(_v0);
          _v1.startTime = _v0.set({
            hour: _v1,
            minute: _v2
          }).toISO();
        }
        _v11({
          ..._v2,
          ..._v1
        }), _v10?.trackEndDateChange();
      }, [_v2, _v15, _v14, _v19, _v11, _v10]),
      _v24 = (0, _v4.useCallback)(_v0 => {
        if (_v15) {
          let [_v0, _v1] = _v0.split(":"),
            _v2 = _v15.set({
              hour: Number(_v0),
              minute: Number(_v1)
            }),
            _v3 = {
              startTime: _v2.toISO()
            };
          _v16 && _v2.plus({
            minutes: 10
          }) >= _v16 && (_v3.endTime = _v19(_v16, _v2).toISO()), _v11({
            ..._v2,
            ..._v3
          }), _v10?.trackStartTimeChange();
        }
      }, [_v2, _v15, _v16, _v19, _v11, _v10]),
      _v25 = (0, _v4.useCallback)(_v0 => {
        if (_v16) {
          let [_v0, _v1] = _v0.split(":"),
            _v2 = _v16.set({
              hour: Number(_v0),
              minute: Number(_v1)
            });
          _v11({
            ..._v2,
            endTime: _v2.toISO()
          }), _v10?.trackEndTimeChange();
        }
      }, [_v2, _v16, _v11, _v10]),
      _v26 = (0, _v4.useCallback)(_v0 => {
        let _v1 = _v15?.setZone(_v0, {
            keepLocalTime: !0
          }),
          _v2 = _v16?.setZone(_v0, {
            keepLocalTime: !0
          });
        _v11({
          ..._v2,
          timeZone: _v0,
          startTime: _v1?.toISO(),
          endTime: _v2?.toISO()
        }), _v10?.trackTimeZoneChange(_v0);
      }, [_v2, _v15, _v16, _v11, _v10]),
      _v27 = (0, _v4.useCallback)(() => {
        if (_v2?.rrule) _v11({
          ..._v2,
          rrule: void 0
        });else {
          let _v0 = _v3.DateTime.utc().setZone(_v14),
            _v1 = (_v15 ? _v15.weekday : _v0.weekday) - 1,
            _v2 = {
              rrule: _v5.RRule.optionsToString({
                freq: _v5.RRule.WEEKLY,
                byweekday: [_v1]
              })
            };
          if (!_v15) {
            let {
              hour: _v0,
              minute: _v1
            } = (0, _v42.getNextRoundedTimeByDate)(_v0);
            _v2.startTime = _v0.set({
              hour: Number(_v0),
              minute: Number(_v1)
            }).toISO();
          }
          _v2?.timeZone || (_v2.timeZone = _v14), _v11({
            ..._v2,
            ..._v2
          });
        }
        _v10?.trackToggleRecurring(_v9);
      }, [_v15, _v14, _v2, _v11, _v9, _v10]),
      _v28 = (0, _v4.useCallback)(_v0 => {
        _v11({
          ..._v2,
          rrule: _v0 ?? void 0
        });
      }, [_v2, _v11]);
    (0, _v4.useEffect)(() => {
      if (_v3 && _v2 && _v2.rrule && !_v2.timeZone) {
        let _v0 = Intl.DateTimeFormat().resolvedOptions().timeZone,
          _v1 = _v5.RRule.parseString(_v2.rrule);
        if (_v2.startTime) switch (_v1.freq) {
          case _v5.RRule.WEEKLY:
            _v1.byweekday && (_v1.byweekday = (0, _v41.convertWeekdaysToTimeZone)(_v1.byweekday, _v3.DateTime.fromISO(_v2.startTime), _v0));
            break;
          case _v5.RRule.MONTHLY:
            _v1.bymonthday && (_v1.bymonthday = (0, _v41.convertMonthDaysToTimeZone)(_v1.bymonthday, _v3.DateTime.fromISO(_v2.startTime), _v0));
        }
        _v11({
          ..._v2,
          timeZone: _v0,
          rrule: _v1 ? _v5.RRule.optionsToString(_v1) : ""
        });
      }
    }, [_v3, _v2, _v11]);
    let _v29 = (0, _v4.useMemo)(() => (0, _v1.jsxs)(_v6.Flex, {
      direction: "column",
      "data-testid": "timezone-picker",
      gap: (0, _v8.rem)(8),
      children: [(0, _v1.jsxs)(_v6.Flex, {
        alignItems: "center",
        gap: (0, _v8.rem)(4),
        children: [(0, _v1.jsx)(_v7.Header, {
          size: "xs",
          color: "text-primary",
          children: (0, _v13.translate)({
            singular: "Time zone",
            dictionary: {
              es: {
                singular: "Zona horaria"
              },
              "de-DE": {
                singular: "Zeitzone"
              },
              "fr-FR": {
                singular: "Fuseau horaire"
              },
              "ja-JP": {
                singular: "タイムゾーン"
              },
              "ko-KR": {
                singular: "시간대"
              },
              "pt-BR": {
                singular: "Fuso horário"
              },
              "zh-CN": {
                singular: "时区"
              }
            }
          })
        }), (0, _v1.jsx)(_v44.BokehTooltip, {
          placement: "bottom",
          maxWidth: (0, _v8.rem)(300),
          label: (0, _v13.translate)({
            singular: "Time zone is for scheduling purposes. Viewers will see the time in their own time zone.",
            dictionary: {
              es: {
                singular: "La zona horaria es para fines de programación. Los espectadores verán la hora en su propia zona horaria."
              },
              "de-DE": {
                singular: "Die Zeitzone dient Planungszwecken. Zuschauer sehen die Zeit in ihrer eigenen Zeitzone."
              },
              "fr-FR": {
                singular: "Le fuseau horaire sert à la planification. Les spectateurs verront l'heure dans leur propre fuseau horaire."
              },
              "ja-JP": {
                singular: "タイムゾーンはスケジュール用です。視聴者は自分のタイムゾーンで時間を表示します。"
              },
              "ko-KR": {
                singular: "시간대는 일정 설정을 위한 것입니다. 시청자는 자신의 시간대에 맞춘 시간을 보게 됩니다."
              },
              "pt-BR": {
                singular: "O fuso horário é para fins de agendamento. Os espectadores verão o horário em seu próprio fuso horário."
              },
              "zh-CN": {
                singular: "时区仅用于排期。观众将以其本地时区看到时间。"
              }
            }
          }),
          shouldWrapChildren: !1,
          children: (0, _v1.jsx)(_v6.Flex, {
            maxHeight: (0, _v8.rem)(16),
            maxWidth: (0, _v8.rem)(16),
            children: (0, _v1.jsx)(_v12.InfoCircle, {
              position: "relative",
              boxSize: (0, _v8.rem)(16),
              color: "text-tertiary",
              cursor: "pointer"
            })
          })
        })]
      }), (0, _v1.jsx)(_v40, {
        timeZone: _v14,
        onChange: _v26,
        attach: _v7 ? "top" : "bottom"
      })]
    }), [_v7, _v14, _v26]);
    return (0, _v1.jsxs)(_v6.Flex, {
      id: _v0,
      className: _v1,
      direction: "column",
      width: "100%",
      gap: (0, _v8.rem)(16),
      children: [(0, _v1.jsxs)(_v6.Flex, {
        direction: "column",
        gap: (0, _v8.rem)(4),
        width: "100%",
        "data-testid": "event-start",
        children: [(0, _v1.jsx)(_v6.Flex, {
          alignItems: "center",
          gap: (0, _v8.rem)(4),
          children: (0, _v1.jsx)(_v7.Header, {
            size: "xs",
            color: "text-primary",
            children: (0, _v13.translate)({
              singular: "Event start",
              dictionary: {
                es: {
                  singular: "Inicio del evento"
                },
                "de-DE": {
                  singular: "Beginn der Veranstaltung"
                },
                "fr-FR": {
                  singular: "Début de l'événement"
                },
                "ja-JP": {
                  singular: "イベント開始"
                },
                "ko-KR": {
                  singular: "이벤트 시작"
                },
                "pt-BR": {
                  singular: "Início do evento"
                },
                "zh-CN": {
                  singular: "活动开始"
                }
              }
            })
          })
        }), (0, _v1.jsxs)(_v6.Flex, {
          direction: _v8 ? "column" : "row",
          width: "100%",
          gap: (0, _v8.rem)(8),
          "data-testid": "date-start",
          sx: {
            "& > div": {
              flex: "1 1 0"
            }
          },
          children: [(0, _v1.jsx)(_v14.DatePicker, {
            id: `${_v0}-date-start`,
            className: `${_v1}-date-start`,
            isDisabled: _v4,
            isLoading: _v5,
            date: _v15,
            minDate: _v18,
            onSelect: _v20,
            onClear: _v6 || _v9 ? void 0 : _v21,
            size: "sm"
          }), (0, _v1.jsx)(_v26.TimePicker, {
            id: `${_v0}-time-start`,
            className: `${_v1}-time-start`,
            isDisabled: _v4,
            isLoading: _v5,
            date: _v15,
            minDateTime: _v18,
            onSelect: _v24,
            size: "sm"
          })]
        })]
      }), (0, _v1.jsxs)(_v6.Flex, {
        direction: "column",
        gap: (0, _v8.rem)(4),
        width: "100%",
        "data-testid": "event-end",
        children: [(0, _v1.jsxs)(_v6.Flex, {
          alignItems: "center",
          gap: (0, _v8.rem)(4),
          children: [(0, _v1.jsx)(_v7.Header, {
            size: "xs",
            color: "text-primary",
            children: (0, _v13.translate)({
              singular: "Event end",
              dictionary: {
                es: {
                  singular: "Fin del evento"
                },
                "de-DE": {
                  singular: "Ende der Veranstaltung"
                },
                "fr-FR": {
                  singular: "Fin de l'événement"
                },
                "ja-JP": {
                  singular: "イベント終了"
                },
                "ko-KR": {
                  singular: "이벤트 종료"
                },
                "pt-BR": {
                  singular: "Fim do evento"
                },
                "zh-CN": {
                  singular: "活动结束"
                }
              }
            })
          }), (0, _v1.jsx)(_v44.BokehTooltip, {
            placement: "bottom",
            maxWidth: (0, _v8.rem)(300),
            label: (0, _v13.translate)({
              singular: "The event won’t be stopped if it runs longer.",
              dictionary: {
                es: {
                  singular: "El evento no se detendrá si dura más tiempo."
                },
                "de-DE": {
                  singular: "Die Veranstaltung wird nicht gestoppt, wenn sie länger läuft."
                },
                "fr-FR": {
                  singular: "L'événement ne sera pas arrêté s'il dure plus longtemps."
                },
                "ja-JP": {
                  singular: "イベントが長引いても停止されません。"
                },
                "ko-KR": {
                  singular: "이벤트가 더 오래 진행되어도 중지되지 않습니다."
                },
                "pt-BR": {
                  singular: "O evento não será interrompido se durar mais tempo."
                },
                "zh-CN": {
                  singular: "如果活动超时，活动不会被强制停止。"
                }
              }
            }),
            shouldWrapChildren: !1,
            children: (0, _v1.jsx)(_v6.Flex, {
              maxHeight: (0, _v8.rem)(16),
              maxWidth: (0, _v8.rem)(16),
              children: (0, _v1.jsx)(_v12.InfoCircle, {
                position: "relative",
                boxSize: (0, _v8.rem)(16),
                color: "text-tertiary",
                cursor: "pointer"
              })
            })
          })]
        }), (0, _v1.jsxs)(_v6.Flex, {
          direction: _v8 ? "column" : "row",
          width: "100%",
          gap: (0, _v8.rem)(8),
          "data-testid": "date-end",
          sx: {
            "& > div": {
              flex: "1 1 0"
            }
          },
          children: [(0, _v1.jsx)(_v14.DatePicker, {
            id: `${_v0}-date-end`,
            className: `${_v1}-date-end`,
            isDisabled: _v4,
            isLoading: _v5,
            date: _v16,
            minDate: _v17,
            onSelect: _v23,
            onClear: _v6 || _v9 ? void 0 : _v22,
            size: "sm"
          }), (0, _v1.jsx)(_v26.TimePicker, {
            id: `${_v0}-time-end`,
            className: `${_v1}-time-end`,
            isDisabled: _v4,
            isLoading: _v5,
            date: _v16,
            minDateTime: _v17,
            minDateValidation: !0,
            onSelect: _v25,
            size: "sm"
          })]
        }), _v12 ? (0, _v1.jsx)(_v11.Box, {
          alignSelf: "stretch",
          width: "100%",
          maxWidth: "100%",
          children: (0, _v1.jsx)(_v25, {})
        }) : null]
      }), !_v9 && (0, _v1.jsxs)(_v6.Flex, {
        direction: "column",
        children: [(0, _v1.jsxs)(_v10.FormLabel, {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: (0, _v8.rem)(8),
          cursor: "pointer",
          htmlFor: "recurring-toggle",
          marginBottom: _v7 ? (0, _v8.rem)(8) : 0,
          width: "100%",
          children: [(0, _v1.jsx)(_v7.Header, {
            size: "xs",
            color: "text-primary",
            children: (0, _v13.translate)({
              singular: "Recurring event",
              dictionary: {
                es: {
                  singular: "Evento recurrente"
                },
                "de-DE": {
                  singular: "Wiederkehrende Veranstaltung"
                },
                "fr-FR": {
                  singular: "Événement récurrent"
                },
                "ja-JP": {
                  singular: "定期イベント"
                },
                "ko-KR": {
                  singular: "반복 이벤트"
                },
                "pt-BR": {
                  singular: "Evento recorrente"
                },
                "zh-CN": {
                  singular: "重复活动"
                }
              }
            })
          }), (0, _v1.jsx)(_v44.BokehTooltip, {
            placement: "bottom",
            isDisabled: !_v6,
            maxWidth: (0, _v8.rem)(300),
            label: (0, _v13.translate)({
              singular: "Events with registration cannot recur",
              dictionary: {
                es: {
                  singular: "Los eventos con registro no pueden repetirse"
                },
                "de-DE": {
                  singular: "Veranstaltungen mit Registrierung können nicht wiederkehren"
                },
                "fr-FR": {
                  singular: "Les événements avec inscription ne peuvent pas être récurrents"
                },
                "ja-JP": {
                  singular: "登録があるイベントは繰り返し設定できません"
                },
                "ko-KR": {
                  singular: "등록이 필요한 이벤트는 반복될 수 없습니다"
                },
                "pt-BR": {
                  singular: "Eventos com registro não podem se repetir"
                },
                "zh-CN": {
                  singular: "带注册的活动不能重复发生"
                }
              }
            }),
            children: (0, _v1.jsx)(_v9.Switch, {
              id: "recurring-toggle",
              isDisabled: _v6,
              size: "sm",
              isChecked: !!_v2?.rrule,
              onChange: _v27
            })
          })]
        }), _v2?.rrule ? (0, _v1.jsxs)(_v6.Flex, {
          direction: "column",
          gap: (0, _v8.rem)(16),
          marginTop: (0, _v8.rem)(16),
          children: [(0, _v1.jsx)(_v11.Box, {
            "data-testid": "recurring-options",
            children: (0, _v1.jsx)(_v16.RecurringOptions, {
              rrule: _v2.rrule,
              startTime: _v15 ?? _v3.DateTime.utc().setZone(_v14),
              isVertical: _v7,
              onChange: _v28
            })
          }), (0, _v1.jsx)(_v15.RecurrenceEnd, {
            rrule: _v2.rrule,
            timeZone: _v14,
            startTime: _v15,
            endTime: _v16,
            isDisabled: _v4,
            isLoading: _v5,
            isVertical: _v7,
            onRruleChange: _v28
          })]
        }) : null]
      }), _v29]
    });
  }], 0);
}