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
    _v19 = _v0.i(0);
  let _v20 = (0, _v2.default)(async () => ({
    default: (await _v0.A(0)).ManageLearnersModal
  }), {
    loadableGenerated: {
      modules: [0]
    }
  });
  _v0.s(["LMSTeamSettings", 0, ({
    userId: _v0,
    workspaceUuid: _v1
  }) => {
    let [_v2, _v3] = (0, _v3.useState)(null),
      [_v4, _v5] = (0, _v3.useState)(!1),
      [_v6, _v7] = (0, _v3.useState)(null),
      [_v8, _v9] = (0, _v3.useState)(null),
      [_v10, _v11] = (0, _v13.usePatchTeamSettings)(),
      [_v12, _v13] = (0, _v14.usePatchWorkspaceSettings)(),
      _v14 = (0, _v3.useRef)(!1),
      _v15 = (0, _v3.useRef)(!1),
      _v16 = (0, _v9.useToast)(),
      {
        loading: _v17,
        error: _v18
      } = _v11,
      {
        loading: _v19,
        error: _v20
      } = _v13,
      {
        isLoading: _v21,
        data: _v22
      } = (0, _v13.useGetTeamSettings)(() => !_v0 || _v1 || _v14.current ? null : {
        where: {
          userId: _v0
        },
        select: ["lmsExportPreferences"]
      }),
      {
        isLoading: _v23,
        data: _v24
      } = (0, _v14.useGetWorkspaceSettings)(() => _v1 && !_v14.current ? {
        where: {
          workspaceUuid: _v1
        },
        select: ["lmsExportPreferences"]
      } : null),
      _v25 = _v22 || _v24,
      _v26 = (_v0, _v1) => {
        let _v2 = {
          ..._v2,
          [_v0]: _v1
        };
        _v1 ? _v12({
          where: {
            workspaceUuid: _v1
          },
          variables: {
            lmsExportPreferences: _v2
          }
        }) : _v0 && _v10({
          where: {
            userId: _v0
          },
          variables: {
            lmsExportPreferences: _v2
          }
        }), _v9(_v0), _v7(_v2), _v15.current = !0;
      };
    (0, _v3.useEffect)(() => {
      _v25?.lmsExportPreferences && (_v14.current = !0, _v3(_v25?.lmsExportPreferences));
    }, [_v25]), (0, _v3.useEffect)(() => {
      !_v15.current || _v17 || _v19 || (_v18 || _v20 || !_v6 ? _v16({
        title: _v17.T.SomethingWentWrong,
        duration: 0
      }) : (_v3(_v6), _v7(null)), _v9(null), _v15.current = !1);
    }, [_v6, _v18, _v20, _v17, _v19, _v16]);
    let [_v27, _v28] = (0, _v19.useDebounce)(0, _v2?.[_v16.LMS_OPTIONS_KEYS.COMPLETION_THRESHOLD] || 0, _v0 => {
      (0, _v18.isNumberValid)(_v0, 0, 100) && _v26(_v16.LMS_OPTIONS_KEYS.COMPLETION_THRESHOLD, _v0);
    });
    return _v21 || _v23 || !_v2 ? (0, _v1.jsx)(_v4.Flex, {
      justifyContent: "center",
      paddingY: "300",
      children: (0, _v1.jsx)(_v8.Spinner, {})
    }) : (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v15.TeamSettingsPageOptionCustom, {
        title: _v17.T.LearnerManagementTitle,
        description: _v17.T.LearnerManagementDescription,
        children: (0, _v1.jsx)(_v11.Button, {
          variant: "secondary",
          size: "sm",
          onClick: () => _v5(!0),
          children: _v17.T.Manage
        })
      }), (0, _v1.jsx)(_v15.TeamSettingsPageOptionCustom, {
        title: _v17.T.TechStandardTitle,
        description: _v17.T.TechStandardDescription,
        children: _v8 === _v16.LMS_OPTIONS_KEYS.TECH_STANDARD ? (0, _v1.jsx)(_v10.Skeleton, {
          height: "md",
          width: (0, _v6.rem)(200),
          borderRadius: "input-sm"
        }) : (0, _v1.jsx)(_v12.Box, {
          sx: {
            "& button": {
              minWidth: (0, _v6.rem)(200)
            }
          },
          children: (0, _v1.jsx)(_v7.Select, {
            size: "sm",
            disabled: _v17 || _v19,
            value: [_v2[_v16.LMS_OPTIONS_KEYS.TECH_STANDARD]],
            onValueChange: _v0 => _v26(_v16.LMS_OPTIONS_KEYS.TECH_STANDARD, _v0.value[0]),
            items: _v16.TECH_STANDARD_OPTIONS
          })
        })
      }), (0, _v1.jsx)(_v15.TeamSettingsPageOptionCustom, {
        title: _v17.T.ScoringTitle,
        description: _v17.T.ScoringDescription,
        children: _v8 === _v16.LMS_OPTIONS_KEYS.SCORING_ALGORITHM ? (0, _v1.jsx)(_v10.Skeleton, {
          height: "md",
          width: (0, _v6.rem)(200),
          borderRadius: "input-sm"
        }) : (0, _v1.jsx)(_v12.Box, {
          sx: {
            "& button": {
              minWidth: (0, _v6.rem)(200)
            }
          },
          children: (0, _v1.jsx)(_v7.Select, {
            size: "sm",
            disabled: _v17 || _v19,
            value: [_v2[_v16.LMS_OPTIONS_KEYS.SCORING_ALGORITHM]],
            onValueChange: _v0 => _v26(_v16.LMS_OPTIONS_KEYS.SCORING_ALGORITHM, _v0.value[0]),
            items: _v16.SCORING_ALGORITHM_OPTIONS
          })
        })
      }), (0, _v1.jsx)(_v15.TeamSettingsPageOptionCustom, {
        title: _v17.T.ThresholdTitle,
        description: _v17.T.ThresholdDescription,
        children: _v8 === _v16.LMS_OPTIONS_KEYS.COMPLETION_THRESHOLD ? (0, _v1.jsx)(_v10.Skeleton, {
          height: "md",
          width: (0, _v6.rem)(66),
          borderRadius: "input-sm"
        }) : (0, _v1.jsxs)(_v5.NumberInput, {
          maxWidth: (0, _v6.rem)(66),
          max: 100,
          min: 0,
          precision: 0,
          step: 1,
          size: "sm",
          value: isNaN(_v27) ? 0 : _v27,
          isDisabled: _v17 || _v19,
          onChange: (_v0, _v1) => {
            _v28(_v1);
          },
          children: [(0, _v1.jsx)(_v5.NumberInputField, {}), (0, _v1.jsxs)(_v5.NumberInputStepper, {
            children: [(0, _v1.jsx)(_v5.NumberIncrementStepper, {}), (0, _v1.jsx)(_v5.NumberDecrementStepper, {})]
          })]
        })
      }), _v4 && (0, _v1.jsx)(_v20, {
        onClose: () => _v5(!1),
        ownerId: _v0
      })]
    });
  }]);
}