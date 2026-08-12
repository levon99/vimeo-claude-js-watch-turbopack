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
  let _v13 = (0, _v12.translate)({
      singular: "Apply",
      dictionary: {
        es: {
          singular: "Aplicar"
        },
        "de-DE": {
          singular: "Anwenden"
        },
        "fr-FR": {
          singular: "Appliquer"
        },
        "ja-JP": {
          singular: "適用する"
        },
        "ko-KR": {
          singular: "적용"
        },
        "pt-BR": {
          singular: "Aplicar"
        },
        "zh-CN": {
          singular: "应用"
        }
      }
    }),
    _v14 = (0, _v12.translate)({
      singular: "Clear",
      dictionary: {
        es: {
          singular: "Borrar"
        },
        "de-DE": {
          singular: "Löschen"
        },
        "fr-FR": {
          singular: "Effacer"
        },
        "ja-JP": {
          singular: "クリア"
        },
        "ko-KR": {
          singular: "비우기"
        },
        "pt-BR": {
          singular: "Limpar"
        },
        "zh-CN": {
          singular: "清除"
        }
      }
    }),
    _v15 = (0, _v12.translate)({
      singular: "Start",
      dictionary: {
        es: {
          singular: "Comenzar"
        },
        "fr-FR": {
          singular: "Pour commencer"
        },
        "ja-JP": {
          singular: "スタート"
        },
        "ko-KR": {
          singular: "시작"
        },
        "pt-BR": {
          singular: "Iniciar"
        },
        "zh-CN": {
          singular: "开始"
        }
      }
    }),
    _v16 = (0, _v12.translate)({
      singular: "End",
      dictionary: {
        es: {
          singular: "Expira"
        },
        "de-DE": {
          singular: "Ende"
        },
        "fr-FR": {
          singular: "Fin de validité"
        },
        "ja-JP": {
          singular: "終了"
        },
        "ko-KR": {
          singular: "종료"
        },
        "pt-BR": {
          singular: "Fim"
        },
        "zh-CN": {
          singular: "结束"
        }
      }
    }),
    _v17 = (0, _v12.translate)({
      singular: "Start date",
      dictionary: {
        es: {
          singular: "Fecha de inicio"
        },
        "de-DE": {
          singular: "Anfangsdatum"
        },
        "fr-FR": {
          singular: "Date de départ"
        },
        "ja-JP": {
          singular: "開始日"
        },
        "ko-KR": {
          singular: "시작 날짜"
        },
        "pt-BR": {
          singular: "Data de início"
        },
        "zh-CN": {
          singular: "开始日期"
        }
      }
    }),
    _v18 = (0, _v12.translate)({
      singular: "End date",
      dictionary: {
        es: {
          singular: "Fecha de finalización"
        },
        "de-DE": {
          singular: "Enddatum"
        },
        "fr-FR": {
          singular: "Date de fin"
        },
        "ja-JP": {
          singular: "終了日"
        },
        "ko-KR": {
          singular: "종료 날짜"
        },
        "pt-BR": {
          singular: "Data de término:"
        },
        "zh-CN": {
          singular: "结束日期"
        }
      }
    }),
    _v19 = (0, _v12.translate)({
      singular: "Exact days",
      dictionary: {
        es: {
          singular: "Días exactos"
        },
        "de-DE": {
          singular: "Genaue Tage"
        },
        "fr-FR": {
          singular: "Jours précis"
        },
        "ja-JP": {
          singular: "正確な日数"
        },
        "ko-KR": {
          singular: "정확한 일수"
        },
        "pt-BR": {
          singular: "Dias exatos"
        },
        "zh-CN": {
          singular: "确切天数"
        }
      }
    }),
    _v20 = (0, _v12.translate)({
      singular: "You can't start before your account was created.",
      dictionary: {
        es: {
          singular: "Para empezar, debe crearse una cuenta."
        },
        "de-DE": {
          singular: "Sie können nicht beginnen, bevor Ihr Konto erstellt wurde."
        },
        "fr-FR": {
          singular: "Vous ne pouvez pas commencer avant que votre compte ne soit créé."
        },
        "ja-JP": {
          singular: "アカウントが作成されるまで開始することはできません。"
        },
        "ko-KR": {
          singular: "계정이 생성되기 전에는 시작할 수 없습니다."
        },
        "pt-BR": {
          singular: "Você não pode começar antes de a conta ter sido criada."
        },
        "zh-CN": {
          singular: "在您的帐户创建之前，您无法开始。"
        }
      }
    }),
    _v21 = (0, _v12.translate)({
      singular: "Dates can't be in the future.",
      dictionary: {
        es: {
          singular: "Las fechas no pueden ser futuras."
        },
        "de-DE": {
          singular: "Daten dürfen nicht in der Zukunft liegen."
        },
        "fr-FR": {
          singular: "Les dates ne doivent pas être dans le futur."
        },
        "ja-JP": {
          singular: "日付は将来の日付にはできません。"
        },
        "ko-KR": {
          singular: "날짜는 미래일 수 없습니다."
        },
        "pt-BR": {
          singular: "As datas não podem estar no futuro."
        },
        "zh-CN": {
          singular: "日期不能是将来的日期。"
        }
      }
    }),
    _v22 = (0, _v12.translate)({
      singular: "Make sure the start comes before the end.",
      dictionary: {
        es: {
          singular: "Asegúrese de que el inicio sea en una fecha anterior a la finalización."
        },
        "de-DE": {
          singular: "Stellen Sie sicher, dass der Beginn vor dem Ende liegt."
        },
        "fr-FR": {
          singular: "Assurez-vous que le début précède la fin."
        },
        "ja-JP": {
          singular: "開始が終了より前であることを確認してください。"
        },
        "ko-KR": {
          singular: "시작이 종료보다 먼저 와야 합니다."
        },
        "pt-BR": {
          singular: "O início deve vir antes do fim."
        },
        "zh-CN": {
          singular: "请确保开始在结束之前。"
        }
      }
    }),
    _v23 = (0, _v12.translate)({
      singular: "Select date",
      dictionary: {
        es: {
          singular: "Seleccionar fecha"
        },
        "de-DE": {
          singular: "Datum auswählen"
        },
        "fr-FR": {
          singular: "Sélectionner la date"
        },
        "ja-JP": {
          singular: "日付を選択"
        },
        "ko-KR": {
          singular: "날짜 선택"
        },
        "pt-BR": {
          singular: "Selecione a data"
        },
        "zh-CN": {
          singular: "选择日期"
        }
      }
    }),
    _v24 = ({
      isApplyDisabled: _v0,
      onApply: _v1,
      onClear: _v2
    }) => {
      let _v3 = (0, _v11.useDatePickerContext)(),
        _v4 = _v0 || _v3?.value?.length < 2,
        _v5 = _v3?.value;
      return (0, _v1.jsx)(_v6.Flex, {
        justifyContent: "flex-end",
        marginTop: "1rem",
        children: (0, _v1.jsxs)(_v4.Box, {
          children: [(0, _v1.jsx)(_v5.DatePickerClearTrigger, {
            asChild: !0,
            children: (0, _v1.jsx)(_v10.Button, {
              variant: "tertiary",
              marginRight: "0.5rem",
              onClick: _v2,
              children: _v14
            })
          }), (0, _v1.jsx)(_v10.Button, {
            isDisabled: _v4,
            variant: "primary",
            onClick: () => _v1(_v5),
            children: _v13
          })]
        })
      });
    };
  var _v25 = _v0.i(0);
  let _v26 = "start",
    _v27 = ({
      type: _v0,
      isMobile: _v1,
      ..._v2
    }) => {
      let _v3 = (0, _v11.useDatePickerContext)();
      return (0, _v1.jsx)(_v4.Box, {
        display: "inline-block",
        textAlign: "center",
        width: "100%",
        ..._v2,
        children: (0, _v1.jsx)(_v25.Text, {
          variant: _v1 ? {
            base: "heading-sm",
            sm: "heading-xs"
          } : "heading-sm",
          marginLeft: _v1 || _v0 !== _v26 ? void 0 : "-2rem",
          marginRight: "end" === _v0 ? "-2rem" : void 0,
          children: _v0 ? _v3?.visibleRangeText?.[_v0] : null
        })
      });
    };
  var _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0);
  _v0.i(0);
  var _v32 = _v0.i(0);
  let _v33 = (_v0, _v1) => _v0 ? new _v3.BokehDate.DateFormatter(_v1, {
      month: "short",
      day: "numeric",
      year: "numeric"
    })?.format(_v0?.toDate(_v3.BokehDate?.getLocalTimeZone())) : "",
    _v34 = (_v0, _v1) => {
      if (!_v0 || !_v1) return null;
      let _v2 = _v32.DateTime?.fromFormat(_v0, _v1)?.toUTC();
      return _v2?.isValid ? _v3.BokehDate?.parseDate(_v2?.toISODate()) : null;
    },
    _v35 = ({
      error: _v0,
      type: _v1,
      onInputBlur: _v2,
      onInputChange: _v3,
      ..._v4
    }) => {
      let _v5 = (0, _v11.useDatePickerContext)(),
        _v6 = _v5?.value?.[0],
        _v7 = _v5?.value?.[1],
        _v8 = (_v0, _v1, _v2) => _v0 === _v26 ? _v34(_v1, _v2) : _v6,
        _v9 = (_v0, _v1, _v2) => "end" === _v0 ? _v34(_v1, _v2) : _v7;
      return (0, _v1.jsxs)(_v28.FormControl, {
        isInvalid: !!_v0,
        maxWidth: "16.5rem",
        flexGrow: "1",
        flexBasis: "0",
        whiteSpace: "nowrap",
        overflow: "visible",
        ..._v4,
        children: [(0, _v1.jsx)(_v30.FormLabel, {
          fontSize: "heading-xs",
          textTransform: "capitalize",
          fontWeight: 500,
          children: "start" === _v1 ? _v17 : _v18
        }), (0, _v1.jsx)(_v5.DatePickerInputBase, {
          asChild: !0,
          disabled: !_v6 && "end" === _v1,
          index: +(_v1 !== _v26),
          onBlur: _v0 => {
            let _v1 = _v0?.target?.placeholder?.replace("mm", "MM");
            _v2({
              field: _v1,
              format: _v1,
              startDate: _v8(_v1, _v0?.target?.value, _v1),
              endDate: _v9(_v1, _v0?.target?.value, _v1)
            });
          },
          onInput: _v0 => {
            let _v1 = _v0?.currentTarget?.placeholder.replace("mm", "MM");
            _v3({
              field: _v1,
              format: _v1,
              startDate: _v8(_v1, _v0?.currentTarget?.value, _v1),
              endDate: _v9(_v1, _v0?.currentTarget?.value, _v1)
            });
          },
          children: (0, _v1.jsx)(_v31.Input, {})
        }), !!_v0 && (0, _v1.jsx)(_v29.FormErrorMessage, {
          fontSize: "body-sm",
          children: _v0
        })]
      });
    };
  var _v36 = _v0.i(0),
    _v37 = _v0.i(0);
  let _v38 = {
      "button[aria-selected=true][data-outside-range]::before": {
        bg: "transparent !important"
      },
      "button[data-outside-range]": {
        color: "transparent !important",
        background: "none !important",
        "&:hover": {
          border: "2px solid transparent !important"
        }
      },
      "button[data-disabled]": {
        background: "transparent !important",
        color: "text-secondary",
        _before: {
          width: "0 !important"
        },
        "&:hover": {
          color: "text-secondary",
          border: "2px solid transparent !important"
        }
      },
      "button[data-disabled][data-unavailable]:not([data-outside-range])": {
        color: "text-secondary !important",
        "&:hover": {
          color: "text-secondary",
          border: "2px solid transparent !important"
        }
      },
      "button[data-disabled] + button[data-in-range]:not([data-outside-range]):not([data-range-start])": {
        borderTopLeftRadius: "8px",
        borderBottomLeftRadius: "8px",
        _before: {
          width: 0
        }
      },
      "button[data-in-range]:not([data-outside-range]):has(+ button[data-disabled]):not([data-range-end])": {
        borderTopRightRadius: "8px",
        borderBottomRightRadius: "8px",
        _before: {
          width: 0
        }
      },
      "button[data-range-start], button[data-range-end]": {
        border: "none",
        _before: {
          width: 0
        }
      },
      "button[data-in-range]:not([data-outside-range]) div[data-f]": {
        position: "absolute",
        left: -37,
        backgroundColor: "var(--cell-bg-color)",
        width: "37px",
        aspectRatio: "2/7",
        mask: "radial-gradient(30px 17% at left,#0000 calc(100% - 1px),#000)",
        zIndex: {
          base: -20,
          md: "unset"
        }
      },
      "button[data-in-range]:not([data-outside-range]):not([data-unavailable]) div[data-b]": {
        position: "absolute",
        right: -39,
        backgroundColor: "var(--cell-bg-color)",
        width: "39.5px",
        aspectRatio: "2/7",
        mask: "radial-gradient(33px 17% at right,#0000 calc(100% - 1px),#000)",
        zIndex: {
          base: -20,
          md: "unset"
        }
      },
      "button[data-focus]": {
        border: "none !important"
      }
    },
    _v39 = ({
      offset: _v0,
      onClick: _v1,
      isErrors: _v2,
      isMobile: _v3
    }) => {
      let _v4 = (0, _v11.useDatePickerContext)(),
        _v5 = _v4?.getOffset({
          months: _v0
        }),
        [_v6, _v7] = _v4?.value,
        [_v8, _v9] = _v4?.valueAsString,
        _v10 = _v6 && _v7 && _v8 !== _v9 && !_v2,
        _v11 = (0, _v2.useCallback)(_v0 => !_v7 && _v6 && _v0?.compare(_v6) > 0, [_v7, _v6]);
      return (0, _v1.jsx)(_v4.Box, {
        children: (0, _v1.jsxs)(_v5.DatePickerTable, {
          width: "100%",
          children: [(0, _v1.jsx)(_v5.DatePickerTableHead, {
            children: (0, _v1.jsx)(_v5.DatePickerTableRow, {
              asChild: !0,
              children: (0, _v1.jsx)(_v4.Box, {
                borderRadius: "sm",
                display: "grid",
                gridTemplateColumns: "repeat(7, 1fr)",
                boxSize: _v3 ? "sm" : void 0,
                overflow: "hidden",
                width: "100%",
                children: _v4?.weekDays?.map((_v0, _v1) => (0, _v1.jsx)(_v36.Grid, {
                  as: _v5.DatePickerTableHeader,
                  placeItems: "center",
                  children: _v0?.narrow
                }, _v1))
              })
            })
          }), (0, _v1.jsx)(_v5.DatePickerTableBody, {
            children: _v5?.weeks?.map((_v0, _v1) => (0, _v1.jsx)(_v5.DatePickerTableRow, {
              asChild: !0,
              children: (0, _v1.jsx)(_v4.Box, {
                borderRadius: "sm",
                display: "grid",
                gridTemplateColumns: "repeat(7, 1fr)",
                overflow: "hidden",
                width: "100%",
                mb: "xs",
                sx: _v38,
                children: _v0.map((_v0, _v1) => (0, _v1.jsxs)(_v4.Box, {
                  as: _v5.DatePickerCell,
                  value: _v0,
                  visibleRange: _v5.visibleRange,
                  onClick: _v1,
                  height: _v3 ? {
                    base: (0, _v37.rem)(32),
                    md: (0, _v37.rem)(24)
                  } : void 0,
                  sx: {
                    "&[data-selected][data-range-start]": {
                      borderRadius: _v10 ? "9999px 0 0 9999px" : "9999px"
                    },
                    "&[data-selected][data-range-end]": {
                      borderRadius: _v10 ? "0 9999px 9999px 0" : "9999px"
                    },
                    "&[data-focus][data-in-range]:not([data-range-start]):not([data-range-end])": {
                      borderRadius: _v2 ? "0px" : _v11(_v0) ? "0 8px 8px 0" : "8px 0 0 8px",
                      _before: {
                        width: 0
                      }
                    }
                  },
                  children: [_v0?.day === _v6?.day + 1 && _v0?.month === _v6?.month && (0, _v1.jsx)(_v4.Box, {
                    "data-f": !0
                  }), _v0?.day === _v6?.day - 1 && _v0?.month === _v6?.month && (0, _v1.jsx)(_v4.Box, {
                    "data-b": !0
                  }), _v0?.day === _v7?.day - 1 && _v0?.month === _v7?.month && (0, _v1.jsx)(_v4.Box, {
                    "data-b": !0
                  }), _v0?.day]
                }, _v1))
              })
            }, _v1))
          })]
        })
      });
    };
  var _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0);
  let _v44 = ({
      locale: _v0
    }) => {
      let [_v1, _v2] = (0, _v2.useState)(0),
        _v3 = (0, _v11.useDatePickerContext)(),
        _v4 = _v33(_v3?.value?.[0], _v0),
        _v5 = _v33(_v3?.value?.[1], _v0);
      return (0, _v2.useEffect)(() => {
        _v4 && !_v5 ? _v2(1) : _v4 || _v2(0);
      }, [_v4, _v5]), (0, _v1.jsx)(_v41.Tabs, {
        variant: "inlay",
        size: "lg",
        width: "100%",
        index: _v1,
        defaultIndex: 1,
        onChange: _v0 => {
          _v2(_v0);
        },
        mb: "sm",
        children: (0, _v1.jsxs)(_v42.TabList, {
          children: [(0, _v1.jsxs)(_v45, {
            children: [(0, _v1.jsx)(_v25.Text, {
              variant: "heading-xs",
              children: _v15
            }), (0, _v1.jsx)(_v25.Text, {
              variant: "body-xl",
              fontSize: "body-sm",
              fontWeight: "regular",
              color: "text-secondary",
              children: _v4 || _v23
            }), _v4 && 0 === _v1 ? (0, _v1.jsx)(_v43.CloseXCircleFilled, {
              position: "absolute",
              alignSelf: "end",
              boxSize: "1rem",
              onClick: () => _v3?.clearValue()
            }) : null]
          }), (0, _v1.jsxs)(_v45, {
            children: [(0, _v1.jsx)(_v25.Text, {
              variant: "heading-xs",
              children: _v16
            }), (0, _v1.jsx)(_v25.Text, {
              variant: "body-xl",
              fontSize: "body-sm",
              fontWeight: "regular",
              color: "text-secondary",
              children: _v5 || _v23
            }), _v5 && 1 === _v1 ? (0, _v1.jsx)(_v43.CloseXCircleFilled, {
              position: "absolute",
              alignSelf: "end",
              boxSize: "1rem",
              onClick: () => _v3?.clearValue()
            }) : null]
          }), (0, _v1.jsx)(_v41.TabIndicator, {
            sx: {
              "&&": {
                borderRadius: "input-md"
              }
            }
          })]
        })
      });
    },
    _v45 = _v0 => (0, _v1.jsx)(_v40.Tab, {
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      textAlign: "left",
      position: "relative",
      py: "xs",
      px: "sm",
      gap: "xs",
      borderRadius: "input-md",
      ..._v0
    });
  var _v46 = _v0.i(0);
  let _v47 = ({
      activePreset: _v0,
      isMobile: _v1,
      presetValues: _v2,
      onPresetClick: _v3,
      presetsMultiline: _v4
    }) => {
      let _v5,
        _v6,
        _v7 = (_v5 = (0, _v2.useMemo)(() => _v3.BokehDate?.today("UTC"), []), _v6 = (0, _v2.useMemo)(() => _v5?.subtract({
          days: 1
        }), [_v5]), (0, _v2.useMemo)(() => _v2.map(_v0 => {
          var _v1;
          let _v2 = _v0?.value ? "today" === (_v1 = _v0?.value) ? [_v5, _v5] : "yesterday" === _v1 ? [_v6, _v6] : _v1?.division === "past" ? [_v5.subtract({
            [_v1?.group]: _v1?.count
          }), _v5] : [_v5.add({
            [_v1?.group]: _v1?.count
          }), _v5] : _v0?.range;
          return {
            label: _v0?.label,
            value: _v2
          };
        }), [_v2, _v5, _v6])),
        _v8 = (0, _v11.useDatePickerContext)(),
        _v9 = !!_v8?.value?.length,
        _v10 = {
          size: _v1 ? {
            base: "md",
            md: "sm"
          } : "sm",
          variant: "secondary",
          minWidth: "0",
          sx: _v1 ? {
            "&": {
              px: "sm"
            }
          } : void 0
        };
      return (0, _v1.jsxs)(_v6.Flex, {
        mb: "sm",
        gap: _v1 ? {
          base: (0, _v37.rem)(6),
          md: "xs"
        } : "sm",
        display: _v1 ? "grid" : "flex",
        gridTemplateColumns: _v1 ? {
          base: "1fr 1fr",
          sm: "repeat(3, 1fr)",
          md: "1fr 1fr"
        } : "none",
        marginBottom: "1rem",
        flexWrap: _v4 ? "wrap" : "unset",
        children: [_v7?.map(_v0 => (0, _v1.jsx)(_v5.DatePickerPresetTriggerBase, {
          value: _v0?.value,
          asChild: !0,
          children: (0, _v1.jsx)(_v10.Button, {
            onClick: () => _v3?.(_v0),
            isActive: _v9 && _v0?.value === _v0?.value,
            ..._v10,
            children: (0, _v1.jsx)(_v46.OverflowToolTip, {
              labelToolTip: _v0?.label,
              children: (0, _v1.jsx)(_v25.Text, {
                variant: "heading-xs",
                isTruncated: !0,
                children: _v0?.label
              })
            })
          })
        }, _v0?.label)), _v1 && (0, _v1.jsx)(_v46.OverflowToolTip, {
          labelToolTip: _v19,
          children: (0, _v1.jsx)(_v10.Button, {
            isActive: !_v0?.value && _v9,
            onClick: () => _v3?.(null),
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "inline-block",
            ..._v10,
            children: _v19
          })
        })]
      });
    },
    _v48 = [_v26, "end"],
    _v49 = {
      isApplyDisabled: !1,
      start: "",
      end: ""
    };
  _v0.s(["DateRangePicker", 0, ({
    defaultRange: _v0,
    maxDate: _v1,
    minDate: _v2,
    isMobile: _v3 = !1,
    isOpen: _v4 = !0,
    locale: _v5 = "en-US",
    onApply: _v6,
    presetValues: _v7,
    presetsMultiline: _v8 = !1,
    onValueChange: _v9,
    value: _v10,
    ..._v11
  }) => {
    let [_v12, _v13] = (0, _v2.useState)(_v49),
      [_v14, _v15] = (0, _v2.useState)(null),
      [_v16, _v17] = (0, _v2.useState)(null),
      [_v18, _v19] = (0, _v2.useState)([]),
      _v20 = !!(_v12?.start || _v12?.end),
      _v21 = (0, _v2.useMemo)(() => _v3.BokehDate?.today("UTC"), []),
      _v22 = {
        '&[aria-disabled="true"], &[data-disabled], &[data-disabled="true"]': {
          pointerEvents: "none",
          cursor: "not-allowed"
        }
      },
      _v23 = ({
        field: _v0,
        startDate: _v1,
        endDate: _v2
      }) => {
        if (_v1 && _v2) {
          _v12.isApplyDisabled = !1;
          let _v0 = _v1 < _v2,
            _v1 = _v21 < _v2,
            _v2 = _v2 < _v1;
          _v0 || _v0 || (_v12.start = ""), _v1 || _v2 || (_v12.end = ""), _v0 && (_v12.isApplyDisabled = !0, _v12.start = _v20), _v1 && (_v12.isApplyDisabled = !0, _v12.end = _v21), (_v1 > _v2 || _v2) && (_v12.isApplyDisabled = !0, _v12[_v0] = _v22);
        } else _v12[_v0] = "", _v12.isApplyDisabled = !0;
        _v13({
          ..._v12,
          ..._v12
        });
      },
      _v24 = () => {
        _v15(null), _v19(null), _v13(_v49);
      },
      _v25 = _v0 => {
        if (_v17(_v0), !_v18?.length) return;
        let [_v1, _v2] = _v18;
        _v23({
          ..._v0,
          startDate: _v1,
          endDate: _v2
        });
      },
      _v26 = _v0 => {
        _v15(null), _v23(_v0);
      },
      _v27 = _v10?.[0]?.toString() ?? "",
      _v28 = _v10?.[1]?.toString() ?? "",
      [_v29, _v30] = (0, _v2.useState)(_v27),
      [_v31, _v32] = (0, _v2.useState)(_v28);
    return (_v29 !== _v27 || _v31 !== _v28) && (_v30(_v27), _v32(_v28), _v15(null), _v19(null), _v13(_v49)), (0, _v1.jsx)(_v4.Box, {
      borderRadius: "lg",
      bg: "fill-blur",
      padding: "lg",
      backdropFilter: "blur-lg",
      boxShadow: "md",
      width: _v3 ? "100%" : "37.5rem",
      ..._v11,
      children: (0, _v1.jsx)(_v5.DatePicker, {
        open: _v4,
        numOfMonths: _v3 ? 1 : 2,
        selectionMode: "range",
        max: _v1,
        min: _v2,
        locale: _v5,
        defaultValue: _v0,
        onValueChange: ({
          valueAsString: [_v0, _v1],
          value: _v2
        }) => {
          if (_v16) {
            let _v0 = _v34(_v0, _v16?.format),
              _v1 = _v34(_v1, _v16?.format),
              _v2 = {
                ..._v16,
                startDate: _v0,
                endDate: _v1
              };
            _v19([_v0, _v1]), _v23(_v2);
          }
          _v9 && _v9(_v2, _v14);
        },
        value: _v10,
        children: (0, _v1.jsxs)(_v5.DatePickerContent, {
          children: [_v7?.length ? (0, _v1.jsx)(_v47, {
            isMobile: _v3,
            presetValues: _v7,
            onPresetClick: _v0 => {
              _v13(_v49), _v15(_v0);
            },
            activePreset: _v14,
            presetsMultiline: _v8
          }) : null, (0, _v1.jsx)(_v4.Box, {
            children: (0, _v1.jsxs)(_v5.DatePickerView, {
              view: "day",
              children: [(0, _v1.jsx)(_v5.DatePickerControl, {
                style: {
                  display: "flex",
                  gap: "var(--vimeo-space-lg)"
                },
                children: _v3 ? (0, _v1.jsx)(_v44, {
                  locale: _v5
                }) : (0, _v1.jsx)(_v1.Fragment, {
                  children: _v48.map(_v0 => (0, _v1.jsx)(_v35, {
                    error: _v12?.[_v0],
                    onInputBlur: _v25,
                    onInputChange: _v26,
                    type: _v0
                  }, _v0))
                })
              }), (0, _v1.jsxs)(_v6.Flex, {
                gap: "lg",
                children: [(0, _v1.jsxs)(_v4.Box, {
                  flexGrow: "1",
                  children: [(0, _v1.jsxs)(_v6.Flex, {
                    alignItems: "center",
                    pt: "sm",
                    pb: "md",
                    justifyContent: _v3 ? "space-between" : "",
                    children: [(0, _v1.jsx)(_v5.DatePickerPrevTriggerBase, {
                      asChild: !0,
                      children: (0, _v1.jsx)(_v7.IconButton, {
                        variant: "tertiary",
                        "aria-label": "previous month",
                        size: "sm",
                        icon: (0, _v1.jsx)(_v8.ChevronLeft, {}),
                        sx: _v22
                      })
                    }), (0, _v1.jsx)(_v27, {
                      type: "start",
                      isMobile: _v3
                    }), _v3 ? (0, _v1.jsx)(_v5.DatePickerNextTriggerBase, {
                      asChild: !0,
                      children: (0, _v1.jsx)(_v7.IconButton, {
                        variant: "tertiary",
                        "aria-label": "next month",
                        size: "sm",
                        icon: (0, _v1.jsx)(_v9.ChevronRight, {}),
                        sx: _v22
                      })
                    }) : null]
                  }), (0, _v1.jsx)(_v39, {
                    offset: 0,
                    onClick: _v24,
                    isErrors: _v20,
                    isMobile: _v3
                  })]
                }), _v3 ? null : (0, _v1.jsxs)(_v4.Box, {
                  flexGrow: "1",
                  children: [(0, _v1.jsxs)(_v6.Flex, {
                    alignItems: "center",
                    pt: "sm",
                    pb: "md",
                    justifyContent: "space-between",
                    children: [(0, _v1.jsx)(_v27, {
                      type: "end"
                    }), (0, _v1.jsx)(_v5.DatePickerNextTriggerBase, {
                      asChild: !0,
                      children: (0, _v1.jsx)(_v7.IconButton, {
                        variant: "tertiary",
                        "aria-label": "next month",
                        size: "sm",
                        icon: (0, _v1.jsx)(_v9.ChevronRight, {}),
                        sx: _v22
                      })
                    })]
                  }), (0, _v1.jsx)(_v39, {
                    offset: 1,
                    onClick: _v24,
                    isErrors: _v20
                  })]
                })]
              })]
            })
          }), !_v3 && _v6 ? (0, _v1.jsx)(_v24, {
            isApplyDisabled: _v12?.isApplyDisabled,
            onApply: _v0 => _v6 && _v6(_v0, _v14),
            onClear: _v24
          }) : null]
        })
      })
    });
  }], 0);
}