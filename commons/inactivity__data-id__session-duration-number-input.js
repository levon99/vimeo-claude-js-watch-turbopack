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
    _v23 = _v0.i(0);
  let _v24 = {
      MINUTE: "m",
      HOUR: "h",
      DAY: "d"
    },
    _v25 = "default",
    _v26 = "inactivity",
    _v27 = ({
      isInvalid: _v0,
      errorMessage: _v1,
      isDisabled: _v2,
      durationValue: _v3,
      durationUnit: _v4,
      handleDurationValueChange: _v5,
      handleDurationUnitChange: _v6
    }) => {
      let _v7 = (0, _v23.getTranslations)(),
        _v8 = (0, _v2.useMemo)(() => [{
          value: _v24.MINUTE,
          label: _v7.DurationUnitLabelMinutes
        }, {
          value: _v24.HOUR,
          label: _v7.DurationUnitLabelHours
        }, {
          value: _v24.DAY,
          label: _v7.DurationUnitLabelDays
        }], [_v7.DurationUnitLabelDays, _v7.DurationUnitLabelHours, _v7.DurationUnitLabelMinutes]);
      return (0, _v1.jsxs)(_v19.FormControl, {
        isInvalid: _v0,
        paddingY: "75",
        paddingLeft: "300",
        children: [(0, _v1.jsxs)(_v3.Flex, {
          gap: "75",
          children: [(0, _v1.jsxs)(_v22.NumberInput, {
            maxWidth: (0, _v13.rem)(80),
            precision: 0,
            step: 1,
            size: "md",
            defaultValue: _v3 ?? void 0,
            onChange: _v0 => _v5(_v0),
            isDisabled: _v2,
            "data-id": "session-duration-number-input",
            children: [(0, _v1.jsx)(_v22.NumberInputField, {}), (0, _v1.jsxs)(_v22.NumberInputStepper, {
              children: [(0, _v1.jsx)(_v22.NumberIncrementStepper, {}), (0, _v1.jsx)(_v22.NumberDecrementStepper, {})]
            })]
          }), (0, _v1.jsx)(_v21.Select, {
            size: "md",
            onValueChange: _v0 => _v6(_v0.value[0]),
            value: [_v4],
            items: _v8,
            disabled: _v2,
            style: {
              minWidth: (0, _v13.rem)(120)
            },
            "data-id": "session-duration-unit-input",
            children: _v0 => (0, _v1.jsx)(_v21.SelectItem, {
              "data-id": `session-duration-select-unit-${_v0.value}`,
              children: (0, _v1.jsx)(_v21.SelectItemText, {
                children: _v0.label
              })
            })
          })]
        }), (0, _v1.jsx)(_v20.FormErrorMessage, {
          "data-id": `session-duration-error-unit-${_v4}`,
          marginTop: "75",
          children: _v1
        })]
      });
    };
  var _v28 = _v0.i(0);
  let _v29 = (_v0, _v1) => _v1 === _v24.DAY ? 0 * _v0 : _v1 === _v24.HOUR ? 0 * _v0 : 60 * _v0,
    _v30 = _v0 => {
      let _v1 = _v0 / 0,
        _v2 = _v0 / 0;
      return _v2 >= 1 ? [Math.ceil(_v2), _v24.DAY] : _v1 >= 1 ? [Math.ceil(_v1), _v24.HOUR] : [Math.ceil(_v0 / 60), _v24.MINUTE];
    },
    _v31 = (_v0, _v1) => {
      let [_v2, _v3] = _v30(_v0);
      return {
        mode: _v1,
        value: _v2,
        unit: _v3
      };
    },
    _v32 = ({
      contextObj: _v0,
      type: _v1
    }) => {
      let _v2 = (0, _v23.getTranslations)(),
        [_v3, _v4] = (0, _v2.useState)(_v26),
        [_v5, _v6] = (0, _v2.useState)(_v24.DAY),
        [_v7, _v8] = (0, _v2.useState)(null),
        [_v9, _v10] = (0, _v2.useState)(_v26),
        [_v11, _v12] = (0, _v2.useState)(_v24.DAY),
        [_v13, _v14] = (0, _v2.useState)(null),
        [_v15, _v16] = (0, _v2.useState)(!1),
        [_v17, _v18] = (0, _v2.useState)(null),
        _v19 = (0, _v2.useRef)(!1),
        _v20 = (0, _v2.useRef)(!1),
        _v21 = (0, _v7.useToast)(),
        [_v22, _v23] = (0, _v2.useState)(!1),
        {
          teamSettingsResult: _v24,
          teamSettingsLoading: _v25,
          teamSettingsUpdateLoading: _v26,
          teamSettingsUpdateError: _v27,
          onUpdateSetting: _v28
        } = (0, _v2.useContext)(_v0),
        _v29 = (0, _v2.useMemo)(() => ({
          [_v24.MINUTE]: _v2.DefaultSessionMinutesCount,
          [_v24.HOUR]: _v2.DefaultSessionHoursCount,
          [_v24.DAY]: _v2.DefaultSessionDaysCount
        }), [_v2.DefaultSessionDaysCount, _v2.DefaultSessionHoursCount, _v2.DefaultSessionMinutesCount]),
        _v30 = (0, _v2.useMemo)(() => ({
          [_v24.MINUTE]: _v2.InactivitySessionMinutesCount,
          [_v24.HOUR]: _v2.InactivitySessionHoursCount,
          [_v24.DAY]: _v2.InactivitySessionDaysCount
        }), [_v2.InactivitySessionDaysCount, _v2.InactivitySessionHoursCount, _v2.InactivitySessionMinutesCount]);
      (0, _v2.useEffect)(() => {
        if (!_v20.current) if (_v24?.sessionDuration || _v24?.inactivityDuration) {
          var _v0, _v1;
          _v20.current = !0;
          let _v0 = (_v0 = _v24?.sessionDuration, _v1 = _v24?.inactivityDuration, _v0 && _v1 ? _v1 <= _v0 ? _v31(_v1, _v26) : _v31(_v0, _v25) : _v1 ? _v31(_v1, _v26) : _v0 ? _v31(_v0, _v25) : null);
          _v0 && (_v10(_v0.mode), _v12(_v0.unit), _v14(_v0.value));
        } else {
          let [_v0, _v1] = _v30(0);
          _v10(_v26), _v12(_v1), _v14(_v0);
        }
      }, [_v24?.inactivityDuration, _v24?.sessionDuration]);
      let _v31 = () => {
        _v23(!1);
      };
      (0, _v2.useEffect)(() => {
        _v19.current && !_v26 && (_v27 ? (_v21({
          title: _v2.SomethingWentWrong,
          duration: 0
        }), _v19.current = !1) : (_v31(), window.location.reload()));
      }, [_v2.SomethingWentWrong, _v27, _v26, _v21]), (0, _v2.useEffect)(() => {
        _v28.object().shape({
          durationValue: _v28.number().nullable(!0).typeError(_v2.InvalidSessionDurationType).transform((_v0, _v1) => "" === _v1 ? void 0 : _v0).when("durationUnit", {
            is: _v24.MINUTE,
            then: _v0 => _v0.min(10, _v2.InvalidSessionDurationMinutes).max(59, _v2.InvalidSessionDurationMinutes)
          }).when("durationUnit", {
            is: _v24.HOUR,
            then: _v0 => _v0.min(1, _v2.InvalidSessionDurationHours).max(23, _v2.InvalidSessionDurationHours)
          }).when("durationUnit", {
            is: _v24.DAY,
            then: _v0 => _v0.min(1, _v2.InvalidSessionDurationDays).max(30, _v2.InvalidSessionDurationDays)
          }),
          durationUnit: _v28.string().oneOf(Object.values(_v24))
        }).validate({
          durationUnit: _v5,
          durationValue: _v7
        }).then(() => {
          _v18(null), _v16((_v13 ? _v29(_v13, _v11) : 0) !== (_v7 ? _v29(_v7, _v5) : 0) || _v9 !== _v3);
        }).catch(_v18);
      }, [_v5, _v7, _v13, _v11, _v9, _v3, _v2]);
      let _v32 = (0, _v2.useCallback)(() => {
          _v17 || (_v28({
            [_v3 === _v25 ? "sessionDuration" : "inactivityDuration"]: _v7 ? _v29(_v7, _v5) : null
          }), _v19.current = !0);
        }, [_v5, _v7, _v17, _v3, _v28]),
        _v33 = _v0 => _v17?.path === _v0;
      if (_v25) return (0, _v1.jsx)(_v15.TeamSettingsPageOptionPlaceholder, {
        dataId: "teamSettingsPageOptionSessionDuration",
        children: (0, _v1.jsx)(_v6.Spinner, {
          marginY: "200"
        })
      });
      let _v34 = _v26 && _v19.current,
        _v35 = {
          isInvalid: _v33("durationValue") || _v33("durationUnit"),
          isDisabled: _v34,
          errorMessage: _v17?.message,
          durationValue: _v7,
          durationUnit: _v5,
          handleDurationValueChange: _v0 => {
            let _v1 = parseInt(_v0);
            _v8(Number.isNaN(_v1) ? _v0 : _v1);
          },
          handleDurationUnitChange: _v6
        };
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v16.TeamSettingsPageOptionCustom, {
          title: _v2.SessionDuration,
          description: "org" === _v1 ? _v2.SessionDurationDescriptionOrgWs : _v2.SessionDurationDescription,
          dataId: "teamSettingsPageOptionSessionDuration",
          displayValue: _v13 && _v11 && _v9 ? (0, _v1.jsxs)(_v3.Flex, {
            alignItems: "center",
            gap: "50",
            marginTop: "50",
            children: [(0, _v1.jsx)(_v14.Clock, {
              boxSize: (0, _v13.rem)(16)
            }), (0, _v1.jsx)(_v12.Text, {
              variant: "body-md",
              children: _v9 === _v25 ? _v29[_v11](_v13) : _v30[_v11](_v13)
            })]
          }) : null,
          children: (0, _v1.jsx)(_v8.Button, {
            variant: "secondary",
            size: "sm",
            isLoading: _v34,
            onClick: () => {
              _v4(_v9), _v6(_v11), _v8(_v13), _v23(!0);
            },
            "data-id": "session-duration-edit-btn",
            children: _v2.Edit
          })
        }), (0, _v1.jsx)(_v17.SessionControlModal, {
          isOpen: _v22,
          onClose: _v31,
          header: (0, _v1.jsx)(_v4.Header, {
            size: "md",
            children: _v2.EditSessionDuration
          }),
          body: (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v5.Paragraph, {
              size: "md",
              color: "text-secondary",
              marginBottom: "200",
              children: _v2.SessionDurationModalDescription
            }), (0, _v1.jsx)(_v12.Text, {
              marginBottom: "200",
              variant: "heading-sm",
              children: _v2.LogOutTeamMembersAfter
            }), (0, _v1.jsx)(_v9.RadioGroup, {
              onChange: _v0 => {
                _v0 === _v9 ? (_v6(_v11), _v8(_v13)) : (_v6(_v24.DAY), _v8(null)), _v4(_v0);
              },
              value: _v3,
              children: (0, _v1.jsxs)(_v10.Stack, {
                children: [(0, _v1.jsx)(_v11.Radio, {
                  value: _v26,
                  paddingBottom: _v3 === _v26 ? "0" : "50",
                  "data-id": "period-of-inactivity-radio",
                  children: _v2.APeriodOfInactivity
                }), _v3 === _v26 && (0, _v1.jsx)(_v27, {
                  ..._v35
                }), (0, _v1.jsx)(_v11.Radio, {
                  value: _v25,
                  "data-id": "set-amount-of-time-radio",
                  children: _v2.ASetAmountOfTime
                }), _v3 === _v25 && (0, _v1.jsx)(_v27, {
                  ..._v35
                })]
              })
            })]
          }),
          footer: (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v8.Button, {
              variant: "tertiary",
              onClick: _v31,
              "data-id": "session-duration-close-btn",
              children: _v2.Cancel
            }), (0, _v1.jsx)(_v8.Button, {
              variant: "destructive",
              onClick: _v32,
              isDisabled: !!_v17 || !_v15,
              isLoading: _v34,
              "data-id": "session-duration-save-btn",
              children: _v2.SessionDurationSave
            })]
          })
        })]
      });
    };
  _v0.s(["TeamSettingsSessionDuration", 0, ({
    type: _v0,
    orgUuid: _v1,
    ownerId: _v2
  }) => "team" === _v0 && _v2 ? (0, _v1.jsx)(_v18.SessionDurationContextProviderTeam, {
    ownerId: _v2,
    children: (0, _v1.jsx)(_v32, {
      contextObj: _v18.SessionDurationContextTeam,
      type: _v0
    })
  }) : "org" === _v0 && _v1 ? (0, _v1.jsx)(_v18.SessionDurationContextProviderOrg, {
    orgUuid: _v1,
    children: (0, _v1.jsx)(_v32, {
      contextObj: _v18.SessionDurationContextOrg,
      type: _v0
    })
  }) : null], 0);
}