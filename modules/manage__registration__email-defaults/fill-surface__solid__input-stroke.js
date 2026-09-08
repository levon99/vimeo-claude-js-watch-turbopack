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
  let _v39 = {
      paddingX: (0, _v12.rem)(8),
      paddingY: (0, _v12.rem)(8),
      backgroundColor: "fill-surface",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "input-stroke",
      borderRadius: (0, _v12.rem)(12),
      cursor: "pointer"
    },
    _v40 = {
      boxSize: (0, _v12.rem)(48),
      borderRadius: (0, _v12.rem)(8),
      flexShrink: 0
    },
    _v41 = ({
      title: _v0,
      description: _v1,
      children: _v2
    }) => (0, _v1.jsxs)(_v8.Flex, {
      gap: {
        base: (0, _v12.rem)(12),
        md: (0, _v12.rem)(24)
      },
      alignItems: {
        base: "flex-start",
        md: "center"
      },
      flexDirection: {
        base: "column",
        md: "row"
      },
      children: [(0, _v1.jsxs)(_v17.Box, {
        flex: "1 0 0",
        minWidth: 0,
        children: [(0, _v1.jsx)(_v9.Header, {
          size: "xs",
          children: _v0
        }), (0, _v1.jsx)(_v10.Paragraph, {
          size: "md",
          color: "text-secondary",
          children: _v1
        })]
      }), (0, _v1.jsx)(_v17.Box, {
        flexShrink: 0,
        children: _v2
      })]
    }),
    _v42 = ({
      values: _v0,
      inherited: _v1,
      ownerUserId: _v2,
      canAccessCustomLogo: _v3,
      onChangeDebounced: _v4,
      onChangeImmediate: _v5
    }) => {
      let _v6 = (0, _v37.getEmailDefaultsLogosCacheKey)(_v2),
        {
          logos: _v7,
          selectedIndex: _v8,
          isLoading: _v9,
          errorMessage: _v10
        } = (({
          ownerUserId: _v0,
          selectedLogoUri: _v1,
          canAccessCustomLogo: _v2
        }) => {
          let _v3 = (0, _v34.useCache)(),
            _v4 = (0, _v37.getEmailDefaultsLogosCacheKey)(_v0),
            [_v5, _v6] = (0, _v3.useState)(_v3.get(_v4)),
            [_v7, _v8] = (0, _v3.useState)(_v4);
          _v7 !== _v4 && (_v8(_v4), _v6(_v3.get(_v4)));
          let [_v9, {
              data: _v10,
              error: _v11,
              loading: _v12
            }] = (0, _v36.useGetUserTeamLogosLazy)(),
            [_v13, {
              data: _v14,
              error: _v15,
              loading: _v16
            }] = (0, _v35.useGetUserCustomlogosLazy)(),
            _v17 = (0, _v3.useRef)(_v0);
          (0, _v3.useEffect)(() => {
            _v0 && (_v17.current = _v0, _v9({
              where: {
                userId: _v0
              },
              select: ["uri", "sizes"],
              query: {
                sizes: _v31.logoFetchOptions.sizes
              }
            }), _v2 && _v13({
              where: {
                userId: _v0
              },
              select: ["uri", "sizes"],
              query: {
                sizes: _v31.logoFetchOptions.sizes
              }
            }));
          }, [_v0, _v2, _v9, _v13]), (0, _v3.useEffect)(() => {
            (_v10 || _v14) && _v17.current === _v0 && _v3.set(_v4, {
              items: [...(_v10?.data ?? []), ...(_v14?.data ?? [])].filter(_v0 => _v0?.sizes?.[0])
            });
          }, [_v10, _v14, _v3, _v4, _v0]), (0, _v3.useEffect)(() => _v3.subscribeToKey(_v4, _v6), [_v3, _v4]);
          let _v18 = (0, _v3.useMemo)(() => _v5?.items ?? [], [_v5]),
            _v19 = (0, _v3.useMemo)(() => {
              if (!_v1) return null;
              let _v0 = (0, _v33.getLastIdFromUri)(_v1);
              if (!_v0) return null;
              let _v1 = _v18.findIndex(_v0 => (0, _v33.getLastIdFromUri)(_v0.uri) === _v0);
              return _v1 >= 0 ? _v1 : null;
            }, [_v18, _v1]);
          return {
            logos: _v18,
            selectedIndex: _v19,
            isLoading: _v12 || _v16,
            errorMessage: (_v11 || _v15) && !_v18.length ? _v38.default.SomethingWentWrong : ""
          };
        })({
          ownerUserId: _v2,
          selectedLogoUri: _v0.logoUri,
          canAccessCustomLogo: _v3
        }),
        [_v11, _v12] = (0, _v3.useState)(!1),
        _v13 = (0, _v3.useRef)(null),
        [_v14, _v15] = (0, _v3.useState)(null),
        [_v16, _v17] = (0, _v3.useState)(),
        [_v18, _v19] = (0, _v3.useState)(!1),
        {
          isUploading: _v20
        } = (0, _v32.useTeamLogoUpload)(_v16, _v0 => _v5("logoUri", _v0.uri ?? null), _v6, _v2),
        _v21 = (0, _v3.useRef)(!1);
      (0, _v3.useEffect)(() => {
        _v21.current && !_v20 && (_v15(null), _v17(void 0), _v19(!1)), _v21.current = _v20;
      }, [_v20]);
      let _v22 = () => _v13.current?.click(),
        _v23 = _v1.teamName ?? _v37.DEFAULT_SENDER_NAME,
        _v24 = (0, _v28.withHashPrefix)(_v0.accentColor ?? _v1.teamAccentColor ?? _v37.DEFAULT_ACCENT_COLOR),
        [_v25, _v26] = (0, _v3.useState)(),
        _v27 = _v25 ?? _v24,
        _v28 = null !== _v8 ? _v7[_v8]?.sizes?.[0]?.link : void 0;
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsxs)(_v18.Card, {
          padding: "lg",
          children: [(0, _v1.jsx)(_v9.Header, {
            size: "md",
            marginBottom: "200",
            children: _v38.default.Information
          }), (0, _v1.jsx)(_v41, {
            title: _v38.default.SenderName,
            description: _v38.default.SenderNameDesc,
            children: (0, _v1.jsx)(_v21.Input, {
              width: (0, _v12.rem)(240),
              value: _v0.from ?? "",
              placeholder: _v23,
              maxLength: _v37.EMAIL_DEFAULTS_FROM_MAX_LENGTH,
              "aria-label": _v38.default.SenderName,
              "data-id": "email-defaults-sender-name",
              onChange: _v0 => _v4("from", _v0.target.value || null)
            })
          }), (0, _v1.jsx)(_v19.Divider, {
            borderColor: "stroke",
            marginY: "200"
          }), (0, _v1.jsx)(_v41, {
            title: _v38.default.Logo,
            description: _v38.default.LogoDesc,
            children: (0, _v1.jsxs)(_v22.Popover, {
              placement: "bottom-end",
              isLazy: !0,
              isOpen: _v11,
              onClose: () => _v12(!1),
              children: [(0, _v1.jsx)(_v23.PopoverAnchor, {
                children: (0, _v1.jsxs)(_v8.Flex, {
                  ..._v39,
                  alignItems: "center",
                  gap: (0, _v12.rem)(8),
                  "data-id": "email-defaults-logo",
                  children: [(0, _v1.jsx)(_v8.Flex, {
                    as: "button",
                    type: "button",
                    flexShrink: 0,
                    alignItems: "center",
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    "aria-label": _v38.default.Logo,
                    "data-id": "email-defaults-logo-trigger",
                    onClick: () => _v12(_v0 => !_v0),
                    children: (0, _v1.jsx)(_v8.Flex, {
                      ..._v40,
                      align: "center",
                      justify: "center",
                      overflow: "hidden",
                      backgroundColor: "fill-component",
                      children: _v28 ? (0, _v1.jsx)("img", {
                        src: _v28,
                        alt: "",
                        style: {
                          width: "100%",
                          height: "100%",
                          objectFit: "cover"
                        }
                      }) : (0, _v1.jsx)(_v26.Image, {
                        color: "text-secondary"
                      })
                    })
                  }), _v28 && (0, _v1.jsx)(_v20.IconButton, {
                    size: "sm",
                    variant: "tertiary",
                    icon: (0, _v1.jsx)(_v25.CloseX, {}),
                    "aria-label": _v38.default.NoLogo,
                    "data-id": "email-defaults-logo-clear",
                    onClick: () => _v5("logoUri", null)
                  })]
                })
              }), (0, _v1.jsx)(_v24.PopoverContent, {
                borderRadius: "sm",
                width: "auto",
                children: (0, _v1.jsx)(_v30.LogoPickerContainer, {
                  ownerUserId: _v2,
                  uploadVariant: "image-uploader",
                  availableLogos: _v7,
                  selectedIndex: _v8 ?? -1,
                  originalIndex: _v8 ?? -1,
                  isLoadingLogos: _v9 || _v20,
                  errorMessage: _v10,
                  cacheKey: _v6,
                  onUploadClick: _v22,
                  setUploadFile: _v17,
                  setOriginalIndex: () => void 0,
                  onSelectLogoSource: _v0 => _v5("logoUri", _v0.uri ?? null),
                  onUnsetLogo: () => _v5("logoUri", null),
                  onDelete: _v0 => {
                    let _v1 = (0, _v33.getLastIdFromUri)(_v0);
                    _v0.logoUri && _v1 && (0, _v33.getLastIdFromUri)(_v0.logoUri) === _v1 && _v5("logoUri", null);
                  }
                })
              })]
            })
          }), (0, _v1.jsx)(_v19.Divider, {
            borderColor: "stroke",
            marginY: "200"
          }), (0, _v1.jsx)(_v41, {
            title: _v38.default.AccentColour,
            description: _v38.default.AccentColourDesc,
            children: (0, _v1.jsx)(_v27.ColorPickerBrandKit, {
              color: _v27,
              productName: "registration",
              onChange: _v26,
              onClose: () => {
                _v25 && (0, _v33.isValidHex)(_v25) && _v5("accentColor", (0, _v28.withHashPrefix)(_v25)), _v26(void 0);
              },
              children: (0, _v1.jsx)(_v8.Flex, {
                as: "button",
                type: "button",
                ..._v39,
                alignItems: "center",
                justifyContent: "center",
                "aria-label": _v38.default.AccentColour,
                "data-id": "email-defaults-accent-colour",
                children: (0, _v1.jsx)(_v17.Box, {
                  ..._v40,
                  backgroundColor: _v27
                })
              })
            })
          })]
        }), (0, _v1.jsx)("input", {
          ref: _v13,
          type: "file",
          accept: _v31.SUPPORTED_IMAGE_FILES,
          hidden: !0,
          onChange: _v0 => {
            let _v1 = _v0.target.files?.[0];
            _v0.target.value = "", _v1 && (_v12(!1), _v15(_v1));
          }
        }), (0, _v1.jsx)(_v29.LogoConfirmModal, {
          file: _v14,
          isSaving: _v18,
          onChange: _v22,
          onCancel: () => _v15(null),
          onCloseComplete: () => _v15(null),
          onSave: () => {
            _v14 && (_v19(!0), _v17(_v14));
          }
        })]
      });
    };
  var _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0);
  let _v51 = ({
    confirmation: _v0,
    followUp: _v1,
    reminders: _v2,
    onToggleChange: _v3,
    onRemindersChange: _v4
  }) => {
    let {
        settings: _v5
      } = (0, _v50.useOrionSettings)(),
      _v6 = _v5.enable_configurable_event_reminders,
      [_v7, _v8] = (0, _v3.useState)(!1),
      [_v9, _v10] = (0, _v3.useState)(null),
      _v11 = [..._v2].sort((_v0, _v1) => (0, _v49.offsetToSignedSeconds)(_v0) - (0, _v49.offsetToSignedSeconds)(_v1)),
      _v12 = null === _v9 ? _v11 : _v11.filter((_v0, _v1) => _v1 !== _v9);
    return (0, _v1.jsxs)(_v18.Card, {
      padding: "lg",
      children: [(0, _v1.jsxs)(_v8.Flex, {
        gap: (0, _v12.rem)(32),
        alignItems: {
          base: "flex-start",
          md: "center"
        },
        flexDirection: {
          base: "column",
          md: "row"
        },
        children: [(0, _v1.jsxs)(_v17.Box, {
          flex: "1 0 0",
          minWidth: 0,
          children: [(0, _v1.jsx)(_v9.Header, {
            size: "md",
            children: _v38.default.Reminders
          }), (0, _v1.jsx)(_v10.Paragraph, {
            size: "md",
            color: "text-secondary",
            children: _v38.default.RemindersDesc
          })]
        }), _v6 && (0, _v1.jsx)(_v43.Button, {
          variant: "secondary",
          leftIcon: (0, _v1.jsx)(_v46.PlusCircle, {}),
          flexShrink: 0,
          isDisabled: _v2.length >= _v31.MAX_REMINDERS,
          onClick: () => {
            _v10(null), _v8(!0);
          },
          "data-id": "email-defaults-add-reminder",
          children: _v38.default.AddReminder
        })]
      }), (0, _v1.jsxs)(_v17.Box, {
        pt: (0, _v12.rem)(24),
        children: [(0, _v1.jsxs)(_v8.Flex, {
          gap: (0, _v12.rem)(24),
          alignItems: "center",
          children: [(0, _v1.jsx)(_v17.Box, {
            flex: "1 0 0",
            minWidth: 0,
            children: (0, _v1.jsx)(_v9.Header, {
              size: "xs",
              children: _v38.default.RegistrationConfirmation
            })
          }), (0, _v1.jsx)(_v44.Switch, {
            isChecked: _v0,
            size: "md",
            "aria-label": _v38.default.RegistrationConfirmation,
            onChange: _v0 => _v3("confirmation", _v0.target.checked),
            "data-id": "email-defaults-confirmation-switch"
          })]
        }), (0, _v1.jsx)(_v19.Divider, {
          borderColor: "stroke",
          marginY: "300"
        }), (0, _v1.jsxs)(_v8.Flex, {
          gap: (0, _v12.rem)(24),
          alignItems: "center",
          children: [(0, _v1.jsx)(_v17.Box, {
            flex: "1 0 0",
            minWidth: 0,
            children: (0, _v1.jsx)(_v9.Header, {
              size: "xs",
              children: _v38.default.FollowUpEmail
            })
          }), (0, _v1.jsx)(_v44.Switch, {
            isChecked: _v1,
            size: "md",
            "aria-label": _v38.default.FollowUpEmail,
            onChange: _v0 => _v3("followUp", _v0.target.checked),
            "data-id": "email-defaults-follow-up-switch"
          })]
        }), _v6 && (0, _v1.jsx)(_v19.Divider, {
          borderColor: "stroke",
          marginY: "300"
        }), _v6 && (0, _v1.jsx)(_v8.Flex, {
          flexDirection: "column",
          gap: (0, _v12.rem)(16),
          children: _v11.map((_v0, _v1) => (0, _v1.jsxs)(_v8.Flex, {
            gap: (0, _v12.rem)(24),
            alignItems: {
              base: "flex-start",
              md: "center"
            },
            flexDirection: {
              base: "column",
              md: "row"
            },
            children: [(0, _v1.jsx)(_v17.Box, {
              flex: "1 0 0",
              minWidth: 0,
              children: (0, _v1.jsx)(_v9.Header, {
                size: "xs",
                children: 0 === _v1 ? _v38.default.FirstReminder : 1 === _v1 ? _v38.default.SecondReminder : (0, _v47.translate)({
                  singular: "Reminder {number}",
                  replacements: {
                    number: _v1 + 1
                  },
                  dictionary: {
                    es: {
                      singular: "Recordatorio {number}"
                    },
                    "de-DE": {
                      singular: "Erinnerung {number}"
                    },
                    "fr-FR": {
                      singular: "Rappel {number}"
                    },
                    "ja-JP": {
                      singular: "リマインダー {number}"
                    },
                    "ko-KR": {
                      singular: "알림 {number}"
                    },
                    "pt-BR": {
                      singular: "Lembrete {number}"
                    },
                    "zh-CN": {
                      singular: "提醒 {number}"
                    }
                  }
                })
              })
            }), (0, _v1.jsxs)(_v8.Flex, {
              gap: (0, _v12.rem)(8),
              alignItems: "center",
              width: {
                base: "100%",
                md: "auto"
              },
              children: [(0, _v1.jsx)(_v43.Button, {
                variant: "secondary",
                backgroundColor: "fill-surface",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "input-stroke",
                width: {
                  base: "100%",
                  md: (0, _v12.rem)(240)
                },
                justifyContent: "space-between",
                rightIcon: (0, _v1.jsx)(_v45.ChevronDownSmall, {}),
                onClick: () => {
                  _v10(_v1), _v8(!0);
                },
                "aria-label": `${_v38.default.EditReminder}: ${(0, _v49.getReminderOffsetLabel)(_v0)}`,
                children: (0, _v49.getReminderOffsetLabel)(_v0)
              }), (0, _v1.jsx)(_v20.IconButton, {
                size: "sm",
                variant: "tertiary",
                icon: (0, _v1.jsx)(_v25.CloseX, {}),
                "aria-label": `${_v38.default.DeleteReminder}: ${(0, _v49.getReminderOffsetLabel)(_v0)}`,
                onClick: () => _v4(_v11.filter((_v0, _v1) => _v1 !== _v1))
              })]
            })]
          }, `${_v0.value}_${_v0.unit}_${_v0.direction}`))
        })]
      }), _v6 && (0, _v1.jsx)(_v48.ReminderTimingModal, {
        isOpen: _v7,
        onClose: () => _v8(!1),
        onSave: _v0 => {
          _v4((null === _v9 ? [..._v11, _v0] : _v11.map((_v0, _v1) => _v1 === _v9 ? _v0 : _v0)).sort((_v0, _v1) => (0, _v49.offsetToSignedSeconds)(_v0) - (0, _v49.offsetToSignedSeconds)(_v1)));
        },
        usedOffsets: _v12,
        title: null === _v9 ? void 0 : _v38.default.EditReminder,
        initialOffset: null === _v9 ? void 0 : _v11[_v9]
      }, _v7 ? _v9 ?? "new" : "closed")]
    });
  };
  var _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0);
  _v0.s(["EmailDefaults", 0, ({
    userId: _v0,
    isGateLoading: _v1 = !1,
    workspaceUuid: _v2,
    registrationHref: _v3
  }) => {
    let _v4 = (0, _v2.useRouter)(),
      _v5 = (0, _v55.getValidatedReturnUrl)(_v4?.query),
      _v6 = _v5 ? _v38.default.Event : _v38.default.Registration,
      {
        values: _v7,
        inherited: _v8,
        isLoading: _v9,
        loadError: _v10,
        error: _v11,
        setDebounced: _v12,
        setImmediate: _v13
      } = (({
        userId: _v0,
        workspaceUuid: _v1,
        ownerUserId: _v2
      }) => {
        let _v3 = (0, _v3.useMemo)(() => ({
            userId: _v1 ? void 0 : _v0,
            workspaceUuid: _v1
          }), [_v0, _v1]),
          {
            data: _v4,
            isLoading: _v5,
            error: _v6,
            mutate: _v7
          } = (0, _v54.useGetTeamSettingsWithMutate)({
            ..._v3,
            settings: _v37.EMAIL_DEFAULTS_SETTINGS
          }),
          {
            onUpdateSetting: _v8,
            teamSettingsUpdateError: _v9
          } = (0, _v53.useUpdateTeamSettings)(_v3),
          {
            data: _v10,
            isLoading: _v11
          } = (0, _v52.useGetUserTeam)(() => _v2 ? {
            where: {
              userId: _v2
            },
            select: ["teamName", "accentColor", "logoUri", "pictures.sizes"],
            query: {
              sizes: "500"
            }
          } : null),
          [_v12, _v13] = (0, _v3.useState)({}),
          _v14 = (0, _v3.useMemo)(() => _v4 ? {
            from: _v4.liveEventEmailDefaultFrom ?? null,
            logoUri: _v4.liveEventEmailDefaultLogoUri ?? null,
            accentColor: _v4.liveEventEmailDefaultAccentColor ?? null,
            confirmation: !!_v4.liveEventEmailDefaultConfirmation,
            followUp: !!_v4.liveEventEmailDefaultFollowUp,
            reminders: _v4.liveEventEmailDefaultCadences ?? [{
              ..._v31.DEFAULT_REMINDER_OFFSET
            }],
            ..._v12
          } : null, [_v4, _v12]),
          _v15 = (0, _v3.useRef)([]),
          _v16 = (0, _v3.useRef)(!1),
          _v17 = (0, _v3.useRef)(_v8),
          _v18 = (0, _v3.useRef)(_v7);
        (0, _v3.useEffect)(() => {
          _v17.current = _v8, _v18.current = _v7;
        }, [_v8, _v7]);
        let _v19 = (0, _v3.useCallback)(async () => {
            if (!_v16.current) {
              _v16.current = !0;
              try {
                for (; _v15.current.length;) {
                  let _v0 = _v15.current.shift();
                  if (_v0) {
                    await _v17.current({
                      ...("from" in _v0 ? {
                        liveEventEmailDefaultFrom: _v0.from
                      } : {}),
                      ...("logoUri" in _v0 ? {
                        liveEventEmailDefaultLogoUri: _v0.logoUri
                      } : {}),
                      ...("accentColor" in _v0 ? {
                        liveEventEmailDefaultAccentColor: _v0.accentColor
                      } : {}),
                      ...("confirmation" in _v0 ? {
                        liveEventEmailDefaultConfirmation: _v0.confirmation
                      } : {}),
                      ...("followUp" in _v0 ? {
                        liveEventEmailDefaultFollowUp: _v0.followUp
                      } : {}),
                      ...("reminders" in _v0 ? {
                        liveEventEmailDefaultCadences: _v0.reminders
                      } : {})
                    });
                    try {
                      await _v18.current();
                    } catch {
                      continue;
                    }
                    _v13(_v0 => {
                      let _v1 = Object.keys(_v0).filter(_v0 => !Object.is(_v0[_v0], _v0[_v0])).map(_v0 => [_v0, _v0[_v0]]);
                      return Object.fromEntries(_v1);
                    });
                  }
                }
              } finally {
                _v16.current = !1;
              }
            }
          }, []),
          _v20 = (0, _v3.useCallback)(_v0 => {
            _v15.current.push(_v0), _v19();
          }, [_v19]),
          _v21 = (0, _v3.useRef)({}),
          _v22 = (0, _v3.useRef)(null),
          _v23 = (0, _v3.useCallback)(() => {
            _v22.current && (clearTimeout(_v22.current), _v22.current = null);
            let _v0 = _v21.current;
            _v21.current = {}, Object.keys(_v0).length && _v20(_v0);
          }, [_v20]),
          _v24 = (0, _v3.useRef)(_v23);
        (0, _v3.useEffect)(() => {
          _v24.current = _v23;
        }, [_v23]), (0, _v3.useEffect)(() => () => _v24.current(), []);
        let _v25 = (0, _v3.useCallback)((_v0, _v1) => {
            _v13(_v0 => ({
              ..._v0,
              [_v0]: _v1
            })), _v21.current = {
              ..._v21.current,
              [_v0]: _v1
            }, _v22.current && clearTimeout(_v22.current), _v22.current = setTimeout(() => _v24.current(), _v37.EMAIL_DEFAULTS_AUTOSAVE_DEBOUNCE_MS);
          }, []),
          _v26 = (0, _v3.useCallback)((_v0, _v1) => {
            _v13(_v0 => ({
              ..._v0,
              [_v0]: _v1
            })), _v21.current = {
              ..._v21.current,
              [_v0]: _v1
            }, _v23();
          }, [_v23]);
        return {
          values: _v14,
          inherited: {
            teamName: _v10?.teamName ?? null,
            teamLogoUrl: _v10?.pictures?.sizes?.[0]?.link ?? null,
            teamAccentColor: _v10?.accentColor ?? null
          },
          isLoading: !_v6 && (_v5 || _v11 || !_v4),
          loadError: _v6 ?? null,
          error: _v9,
          setDebounced: _v25,
          setImmediate: _v26,
          refresh: _v7
        };
      })({
        userId: _v0,
        workspaceUuid: _v2,
        ownerUserId: _v0
      }),
      {
        data: _v14,
        error: _v15
      } = (0, _v15.useGetUserCapabilities)(() => _v0 ? {
        where: {
          userId: _v0
        },
        select: ["createLiveEvents", "addPlayerLogo", "extraEmbedOptions"]
      } : null),
      _v16 = void 0 !== _v14 || !!_v15,
      _v17 = !!_v14?.createLiveEvents,
      _v18 = !!_v10 || !!_v15,
      [_v19, _v20] = (0, _v3.useState)(!1),
      [_v21, _v22] = (0, _v3.useState)(_v18);
    _v21 !== _v18 && (_v22(_v18), _v20(!1)), (0, _v3.useEffect)(() => {
      if (!_v18) return;
      let _v0 = setTimeout(() => _v20(!0), 0);
      return () => clearTimeout(_v0);
    }, [_v18]);
    let _v23 = _v18 && _v19,
      _v24 = (0, _v13.useToast)();
    return (0, _v3.useEffect)(() => {
      _v11 && _v24({
        duration: _v16.NOTIFICATION_DURATION,
        title: _v38.default.SomethingWentWrong,
        status: "error"
      });
    }, [_v11, _v24]), (0, _v1.jsxs)(_v8.Flex, {
      flexDirection: "column",
      gap: (0, _v12.rem)(16),
      maxWidth: (0, _v12.rem)(640),
      marginX: "auto",
      children: [(0, _v1.jsxs)(_v6.Breadcrumb, {
        separator: (0, _v1.jsx)(_v14.ChevronRightSmall, {}),
        children: [(0, _v1.jsx)(_v6.BreadcrumbItem, {
          children: (0, _v1.jsx)(_v7.BreadcrumbLink, {
            href: _v5 ?? _v3,
            children: _v6
          })
        }), (0, _v1.jsx)(_v6.BreadcrumbItem, {
          children: (0, _v1.jsx)(_v7.BreadcrumbLink, {
            isCurrentPage: !0,
            children: _v38.default.EmailDefaults
          })
        })]
      }), (0, _v1.jsx)(_v9.Header, {
        variant: "heading-lg",
        size: "xl",
        children: _v38.default.EmailDefaults
      }), (0, _v1.jsx)(_v10.Paragraph, {
        variant: "body-md",
        children: _v38.default.EmailDefaultsPageDesc
      }), (0, _v1.jsx)(_v4.Alert, {
        status: "info",
        marginBottom: "0",
        children: (0, _v1.jsx)(_v5.AlertDescription, {
          children: _v38.default.EmailDefaultsBanner
        })
      }), _v23 ? (0, _v1.jsx)(_v8.Flex, {
        justifyContent: "center",
        paddingY: "2xl",
        children: (0, _v1.jsx)(_v10.Paragraph, {
          size: "md",
          color: "text-secondary",
          role: "alert",
          children: _v38.default.SomethingWentWrong
        })
      }) : _v1 || _v18 || _v9 || !_v7 || !_v16 ? (0, _v1.jsx)(_v8.Flex, {
        justifyContent: "center",
        paddingY: "2xl",
        children: (0, _v1.jsx)(_v11.Spinner, {
          size: "lg"
        })
      }) : _v17 ? (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v42, {
          values: _v7,
          inherited: _v8,
          ownerUserId: _v0,
          canAccessCustomLogo: !!_v14?.addPlayerLogo || !!_v14?.extraEmbedOptions,
          onChangeDebounced: _v12,
          onChangeImmediate: _v13
        }), (0, _v1.jsx)(_v51, {
          confirmation: _v7.confirmation,
          followUp: _v7.followUp,
          reminders: _v7.reminders,
          onToggleChange: (_v0, _v1) => _v13(_v0, _v1),
          onRemindersChange: _v0 => _v13("reminders", _v0)
        })]
      }) : (0, _v1.jsx)(_v8.Flex, {
        justifyContent: "center",
        paddingY: "2xl",
        children: (0, _v1.jsx)(_v10.Paragraph, {
          size: "md",
          color: "text-secondary",
          role: "alert",
          children: _v38.default.EmailDefaultsUnavailable
        })
      })]
    });
  }], 0);
}