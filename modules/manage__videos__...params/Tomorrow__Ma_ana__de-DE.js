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
    _v36 = _v0.i(0);
  let _v37 = (_v0, _v1) => !_v1 || null === _v0 || _v0 <= 0 ? null : _v0,
    _v38 = [{
      label: () => (0, _v31.translate)({
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
      days: 1
    }, {
      label: () => (0, _v31.translate)({
        singular: "1 week",
        dictionary: {
          es: {
            singular: "1 semana"
          },
          "de-DE": {
            singular: "1 Woche"
          },
          "fr-FR": {
            singular: "1 semaine"
          },
          "ja-JP": {
            singular: "1週間"
          },
          "ko-KR": {
            singular: "1주일"
          },
          "pt-BR": {
            singular: "1 semana"
          },
          "zh-CN": {
            singular: "1 周"
          }
        }
      }),
      days: 7
    }, {
      label: () => (0, _v31.translate)({
        singular: "30 days",
        dictionary: {
          es: {
            singular: "30 días"
          },
          "de-DE": {
            singular: "30 Tage"
          },
          "fr-FR": {
            singular: "30 jours"
          },
          "ja-JP": {
            singular: "30日間"
          },
          "ko-KR": {
            singular: "30일"
          },
          "pt-BR": {
            singular: "30 dias"
          },
          "zh-CN": {
            singular: "30 天"
          }
        }
      }),
      days: 30
    }],
    _v39 = {
      width: 55,
      height: 20,
      fontSize: 10
    };
  _v0.s(["SharingLinkExpiryPicker", 0, ({
    intervalDays: _v0,
    expiresOn: _v1,
    hasExpiration: _v2,
    onIntervalChange: _v3,
    onNoExpiration: _v4,
    onReset: _v5,
    isResetLoading: _v6,
    defaultIntervalDays: _v7,
    hasLink: _v8,
    isDisabled: _v9 = !1,
    isPatchLoading: _v10 = !1,
    manageDefaultsUrl: _v11,
    canManageDefaults: _v12 = !1,
    hasWorkspace: _v13 = !1,
    videoId: _v14,
    entryPoint: _v15,
    freeTierExpiryDays: _v16,
    isExpiryLocked: _v17 = !1,
    onLockedOptionClick: _v18
  }) => {
    let [_v19, _v20] = (0, _v2.useState)(!1),
      [_v21, _v22] = (0, _v2.useState)(!1),
      [_v23, _v24] = (0, _v2.useState)(0),
      _v25 = (0, _v2.useRef)(null),
      _v26 = (0, _v2.useRef)(null),
      _v27 = (0, _v2.useRef)(null),
      {
        trackSharingLinkExpirationValueChanged: _v28
      } = (0, _v33.useDistributionTracking)(),
      _v29 = _v37(_v0, _v2),
      _v30 = _v37(_v7 && _v7 > 0 ? _v7 : null, null != _v7 && _v7 > 0),
      _v31 = (0, _v2.useMemo)(() => {
        let _v0 = new Date();
        return _v0.setDate(_v0.getDate() + 1), _v0.setHours(0, 0, 0, 0), _v0;
      }, []),
      _v32 = (0, _v2.useMemo)(() => {
        let _v0 = new Date();
        return _v0.setDate(_v0.getDate() + _v36.MAX_EXPIRY_DAYS), _v0.setHours(0, 0, 0, 0), _v0;
      }, []),
      _v33 = (0, _v2.useMemo)(() => !!_v1 && new Date(_v1).getTime() < Date.now(), [_v1]),
      _v34 = (0, _v2.useMemo)(() => _v1 ? (0, _v36.getRemainingDays)(_v1) : null, [_v1]),
      _v35 = !_v33 && null !== _v34 && _v34 <= _v36.EXPIRY_SOON_DAYS,
      _v36 = (0, _v2.useMemo)(() => _v2 && null !== _v34 ? _v33 ? (0, _v31.translate)({
        singular: "Expired",
        dictionary: {
          es: {
            singular: "Expirado"
          },
          "de-DE": {
            singular: "Abgelaufen"
          },
          "fr-FR": {
            singular: "Expiré"
          },
          "ja-JP": {
            singular: "期限切れ"
          },
          "ko-KR": {
            singular: "만료됨"
          },
          "pt-BR": {
            singular: "Expirado"
          },
          "zh-CN": {
            singular: "已过期"
          }
        }
      }) : 0 === _v34 ? (0, _v31.translate)({
        singular: "Expires today",
        dictionary: {
          es: {
            singular: "Expira hoy"
          },
          "de-DE": {
            singular: "Läuft heute ab"
          },
          "fr-FR": {
            singular: "Expire aujourd'hui"
          },
          "ja-JP": {
            singular: "本日が有効期限です"
          },
          "ko-KR": {
            singular: "오늘 만료"
          },
          "pt-BR": {
            singular: "Expira hoje"
          },
          "zh-CN": {
            singular: "今天到期"
          }
        }
      }) : 1 === _v34 ? (0, _v31.translate)({
        singular: "Expires tomorrow",
        dictionary: {
          es: {
            singular: "Expira mañana"
          },
          "de-DE": {
            singular: "Läuft morgen ab"
          },
          "fr-FR": {
            singular: "Expire demain"
          },
          "ja-JP": {
            singular: "明日が有効期限です"
          },
          "ko-KR": {
            singular: "내일 만료"
          },
          "pt-BR": {
            singular: "Expira amanhã"
          },
          "zh-CN": {
            singular: "明天到期"
          }
        }
      }) : (0, _v31.translate)({
        singular: "Expires in {count} day",
        plural: "Expires in {count} days",
        count: _v34,
        replacements: {
          count: String(_v34)
        },
        dictionary: {
          es: {
            singular: "Expira en {count} día",
            plural: "Expira en {count} días"
          },
          "de-DE": {
            singular: "Läuft in {count} Tag ab",
            plural: "Läuft in {count} Tagen ab"
          },
          "fr-FR": {
            singular: "Expire dans {count} jour",
            plural: "Expire dans {count} jours"
          },
          "ja-JP": {
            singular: "あと{count}日で有効期限が切れます",
            plural: "あと{count}日で有効期限が切れます"
          },
          "ko-KR": {
            singular: "{count}일 후 만료됩니다",
            plural: "{count}일 후 만료됩니다"
          },
          "pt-BR": {
            singular: "Expira em {count} dia",
            plural: "Expira em {count} dias"
          },
          "zh-CN": {
            singular: "{count} 天后到期",
            plural: "{count} 天后到期"
          }
        }
      }) : null, [_v2, _v34, _v33]),
      _v37 = void 0 !== _v16 && _v16 > 0 ? _v16 : null,
      _v38 = null !== _v37,
      _v39 = _v38 || _v17,
      _v40 = _v17 || _v38 && !_v33,
      _v41 = (0, _v2.useMemo)(() => _v2 ? null !== _v37 ? (0, _v31.translate)({
        singular: "{count} day",
        plural: "{count} days",
        count: _v37,
        replacements: {
          count: String(_v37)
        },
        dictionary: {
          es: {
            singular: "{count} día",
            plural: "{count} días"
          },
          "de-DE": {
            singular: "{count} Tag",
            plural: "{count} Tage"
          },
          "fr-FR": {
            singular: "{count} jour",
            plural: "{count} jours"
          },
          "ja-JP": {
            singular: "{count}日",
            plural: "{count}日"
          },
          "ko-KR": {
            singular: "{count}일",
            plural: "{count}일"
          },
          "pt-BR": {
            singular: "{count} dia",
            plural: "{count} dias"
          },
          "zh-CN": {
            singular: "{count} 天",
            plural: "{count} 天"
          }
        }
      }) : null !== _v0 ? (0, _v35.formatIntervalLabel)(_v0) : _v7 && _v7 > 0 ? (0, _v35.formatIntervalLabel)(_v7) : (0, _v31.translate)({
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
      }) : (0, _v31.translate)({
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
      }), [_v2, _v0, _v7, _v37]),
      _v42 = (0, _v2.useCallback)(_v0 => new Date(Date.now() + _v0 * _v36.MS_PER_DAY).toISOString(), []),
      _v43 = (0, _v2.useCallback)(_v0 => {
        _v14 && _v15 && _v29 !== _v0 && _v28({
          videoId: _v14,
          fromValue: _v29,
          toValue: _v0,
          defaultValueShown: _v30,
          entryPoint: _v15,
          isFirstLinkValue: !_v8
        });
      }, [_v14, _v29, _v30, _v15, _v8, _v28]),
      _v44 = (0, _v2.useCallback)(() => {
        _v4(), _v43(null), _v20(!1);
      }, [_v4, _v43]),
      _v45 = (0, _v2.useCallback)(_v0 => {
        _v3(_v0, _v42(_v0)), _v20(!1), _v43(_v0);
      }, [_v3, _v42, _v43]),
      _v46 = (0, _v2.useCallback)(() => {
        _v24(_v0 => _v0 + 1), _v22(!0), _v20(!1);
      }, []),
      _v47 = (0, _v2.useCallback)(_v0 => {
        if (!_v0.value.length) return;
        let {
            day: _v1,
            month: _v2,
            year: _v3
          } = _v0.value[0],
          _v4 = new Date();
        _v4.setHours(0, 0, 0, 0);
        let _v5 = new Date(_v3, _v2 - 1, _v1);
        _v5.setHours(0, 0, 0, 0);
        let _v6 = Math.round((_v5.getTime() - _v4.getTime()) / _v36.MS_PER_DAY);
        _v6 > 0 && _v6 <= _v36.MAX_EXPIRY_DAYS && (_v3(_v6, _v42(_v6)), _v43(_v6)), _v24(_v0 => _v0 + 1), _v22(!1);
      }, [_v3, _v42, _v43]);
    (0, _v24.useOutsideClick)({
      enabled: _v19,
      ref: _v25,
      handler: _v0 => {
        _v0.target && _v26?.current && (_v26.current === _v0.target || _v26.current.contains(_v0.target)) || _v20(!1);
      }
    }), (0, _v24.useOutsideClick)({
      enabled: _v21,
      ref: _v27,
      handler: () => {
        _v22(!1);
      }
    });
    let _v48 = null !== _v37 ? (0, _v31.translate)({
      singular: "{count} day",
      plural: "{count} days",
      count: _v37,
      replacements: {
        count: String(_v37)
      },
      dictionary: {
        es: {
          singular: "{count} día",
          plural: "{count} días"
        },
        "de-DE": {
          singular: "{count} Tag",
          plural: "{count} Tage"
        },
        "fr-FR": {
          singular: "{count} jour",
          plural: "{count} jours"
        },
        "ja-JP": {
          singular: "{count}日",
          plural: "{count}日"
        },
        "ko-KR": {
          singular: "{count}일",
          plural: "{count}일"
        },
        "pt-BR": {
          singular: "{count} dia",
          plural: "{count} dias"
        },
        "zh-CN": {
          singular: "{count} 天",
          plural: "{count} 天"
        }
      }
    }) : null;
    return (0, _v1.jsxs)(_v20.Flex, {
      flexDirection: "column",
      gap: "sm",
      children: [_v8 && (0, _v1.jsxs)(_v20.Flex, {
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: (0, _v17.rem)(24),
        visibility: _v36 ? "visible" : "hidden",
        "aria-hidden": !_v36,
        children: [(0, _v1.jsx)(_v3.Badge, {
          size: "xs",
          variant: _v33 ? "error" : _v35 ? "staff" : "default",
          children: (0, _v1.jsx)(_v10.Text, {
            variant: "heading-2xs",
            whiteSpace: "nowrap",
            children: _v36 ?? " "
          })
        }), (0, _v1.jsxs)(_v20.Flex, {
          as: "button",
          type: "button",
          alignItems: "center",
          gap: "xs",
          onClick: _v40 ? _v18 : _v5,
          disabled: _v9 || !_v36 || _v6,
          color: "text-secondary",
          background: "transparent",
          border: "none",
          padding: 0,
          cursor: "pointer",
          _hover: {
            opacity: .7
          },
          _disabled: {
            opacity: .4,
            cursor: "not-allowed"
          },
          "aria-label": (0, _v31.translate)({
            singular: "Reset",
            dictionary: {
              es: {
                singular: "Restablecer"
              },
              "de-DE": {
                singular: "Zurücksetzen"
              },
              "fr-FR": {
                singular: "Réinitialiser"
              },
              "ja-JP": {
                singular: "リセット"
              },
              "ko-KR": {
                singular: "재설정"
              },
              "pt-BR": {
                singular: "Redefinir"
              },
              "zh-CN": {
                singular: "重置"
              }
            }
          }),
          children: [_v40 && (0, _v1.jsx)(_v32.UpgradeBadge, {
            style: _v39,
            noMargin: !0
          }), _v6 ? (0, _v1.jsx)(_v22.Spinner, {
            size: "xs"
          }) : (0, _v1.jsx)(_v30.Reset, {
            boxSize: (0, _v17.rem)(16)
          }), (0, _v1.jsx)(_v10.Text, {
            variant: "heading-2xs",
            children: (0, _v31.translate)({
              singular: "Reset",
              dictionary: {
                es: {
                  singular: "Restablecer"
                },
                "de-DE": {
                  singular: "Zurücksetzen"
                },
                "fr-FR": {
                  singular: "Réinitialiser"
                },
                "ja-JP": {
                  singular: "リセット"
                },
                "ko-KR": {
                  singular: "재설정"
                },
                "pt-BR": {
                  singular: "Redefinir"
                },
                "zh-CN": {
                  singular: "重置"
                }
              }
            })
          })]
        })]
      }), (0, _v1.jsxs)(_v20.Flex, {
        alignItems: "center",
        justifyContent: "space-between",
        children: [(0, _v1.jsxs)(_v20.Flex, {
          alignItems: "center",
          gap: "xs",
          children: [(0, _v1.jsx)(_v10.Text, {
            variant: "body-md",
            color: "text-primary",
            children: (0, _v31.translate)({
              singular: "Expiration",
              dictionary: {
                es: {
                  singular: "Expiración"
                },
                "de-DE": {
                  singular: "Ablaufdatum"
                },
                "ja-JP": {
                  singular: "有効期限"
                },
                "ko-KR": {
                  singular: "만료"
                },
                "pt-BR": {
                  singular: "Expiração"
                },
                "zh-CN": {
                  singular: "到期"
                }
              }
            })
          }), (0, _v1.jsx)(_v23.Tooltip, {
            label: (0, _v31.translate)({
              singular: "Set an expiration date for your link.",
              dictionary: {
                es: {
                  singular: "Establece una fecha de expiración para tu enlace."
                },
                "de-DE": {
                  singular: "Legen Sie ein Ablaufdatum für Ihren Link fest."
                },
                "fr-FR": {
                  singular: "Définissez une date d'expiration pour votre lien."
                },
                "ja-JP": {
                  singular: "リンクの有効期限を設定してください。"
                },
                "ko-KR": {
                  singular: "링크의 만료일을 설정하세요."
                },
                "pt-BR": {
                  singular: "Defina uma data de expiração para seu link."
                },
                "zh-CN": {
                  singular: "为您的链接设置到期日期。"
                }
              }
            }),
            placement: "top",
            children: (0, _v1.jsx)(_v19.Box, {
              as: "span",
              display: "inline-flex",
              color: "text-secondary",
              role: "img",
              "aria-label": (0, _v31.translate)({
                singular: "Set an expiration date for your link.",
                dictionary: {
                  es: {
                    singular: "Establece una fecha de expiración para tu enlace."
                  },
                  "de-DE": {
                    singular: "Legen Sie ein Ablaufdatum für Ihren Link fest."
                  },
                  "fr-FR": {
                    singular: "Définissez une date d'expiration pour votre lien."
                  },
                  "ja-JP": {
                    singular: "リンクの有効期限を設定してください。"
                  },
                  "ko-KR": {
                    singular: "링크의 만료일을 설정하세요."
                  },
                  "pt-BR": {
                    singular: "Defina uma data de expiração para seu link."
                  },
                  "zh-CN": {
                    singular: "为您的链接设置到期日期。"
                  }
                }
              }),
              children: (0, _v1.jsx)(_v29.InfoCircle, {
                boxSize: (0, _v17.rem)(16)
              })
            })
          })]
        }), (0, _v1.jsxs)(_v19.Box, {
          position: "relative",
          zIndex: "dropdown",
          children: [(0, _v1.jsxs)(_v4.Menu, {
            isOpen: _v19,
            onClose: () => _v20(!1),
            placement: "bottom-end",
            isLazy: !0,
            children: [(0, _v1.jsx)(_v5.MenuButton, {
              as: _v6.Button,
              size: "xs",
              variant: "tertiary",
              leftIcon: (0, _v1.jsx)(_v25.Calendar, {
                boxSize: (0, _v17.rem)(16)
              }),
              rightIcon: (0, _v1.jsx)(_v27.ChevronDownSmall, {
                boxSize: (0, _v17.rem)(16)
              }),
              onClick: () => _v20(_v0 => !_v0),
              ref: _v26,
              isDisabled: _v9 || _v10,
              children: (0, _v1.jsx)(_v10.Text, {
                variant: "heading-2xs",
                whiteSpace: "nowrap",
                children: _v41
              })
            }), (0, _v1.jsx)(_v7.MenuList, {
              paddingY: "xs",
              width: "auto",
              maxWidth: (0, _v17.rem)(350),
              ref: _v25,
              children: (0, _v1.jsxs)(_v9.MenuGroup, {
                title: (0, _v31.translate)({
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
                children: [(0, _v1.jsx)(_v18.MenuItem, {
                  padding: "sm",
                  borderRadius: "sm",
                  icon: (0, _v1.jsx)(_v26.Checkmark, {
                    boxSize: (0, _v17.rem)(16),
                    visibility: _v2 ? "hidden" : "visible"
                  }),
                  iconSpacing: (0, _v17.rem)(8),
                  flexDirection: "row-reverse",
                  justifyContent: "space-between",
                  isDisabled: !_v8,
                  onClick: _v39 ? _v18 : _v44,
                  "aria-current": _v39 || _v2 ? void 0 : "true",
                  children: (0, _v1.jsxs)(_v20.Flex, {
                    alignItems: "center",
                    gap: "2",
                    children: [(0, _v1.jsx)(_v10.Text, {
                      variant: "body-md",
                      children: (0, _v31.translate)({
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
                      })
                    }), _v39 && (0, _v1.jsx)(_v32.UpgradeBadge, {
                      style: _v39,
                      noMargin: !0
                    })]
                  })
                }), _v38.map(_v0 => {
                  let _v1 = 7 === _v0.days && null !== _v37 ? _v37 : _v0.days,
                    _v2 = _v17 || null !== _v37 && _v1 !== _v37,
                    _v3 = _v2 && _v0 === _v1,
                    _v4 = 7 === _v0.days && null !== _v37 ? _v48 : _v0.label();
                  return (0, _v1.jsx)(_v18.MenuItem, {
                    padding: "sm",
                    borderRadius: "sm",
                    icon: (0, _v1.jsx)(_v26.Checkmark, {
                      boxSize: (0, _v17.rem)(16),
                      visibility: !_v2 && _v3 ? "visible" : "hidden"
                    }),
                    iconSpacing: (0, _v17.rem)(8),
                    flexDirection: "row-reverse",
                    justifyContent: "space-between",
                    onClick: () => {
                      _v2 ? _v18?.() : _v38 ? _v20(!1) : _v45(_v1);
                    },
                    "aria-current": !_v2 && _v3 ? "true" : void 0,
                    children: (0, _v1.jsxs)(_v20.Flex, {
                      alignItems: "center",
                      gap: "2",
                      children: [(0, _v1.jsx)(_v10.Text, {
                        variant: "body-md",
                        children: _v4
                      }), _v2 && (0, _v1.jsx)(_v32.UpgradeBadge, {
                        style: _v39,
                        noMargin: !0
                      })]
                    })
                  }, _v0.days);
                }), (0, _v1.jsx)(_v8.MenuDivider, {
                  paddingX: "md"
                }), (0, _v1.jsx)(_v18.MenuItem, {
                  padding: "sm",
                  borderRadius: "sm",
                  icon: (0, _v1.jsx)(_v28.ChevronRightSmall, {
                    boxSize: (0, _v17.rem)(16)
                  }),
                  iconSpacing: (0, _v17.rem)(8),
                  flexDirection: "row-reverse",
                  justifyContent: "space-between",
                  onClick: _v39 ? _v18 : _v46,
                  children: (0, _v1.jsxs)(_v20.Flex, {
                    alignItems: "center",
                    gap: "2",
                    children: [(0, _v1.jsx)(_v10.Text, {
                      variant: "body-md",
                      children: (0, _v31.translate)({
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
                    }), _v39 && (0, _v1.jsx)(_v32.UpgradeBadge, {
                      style: _v39,
                      noMargin: !0
                    })]
                  })
                })]
              })
            })]
          }), (0, _v1.jsxs)(_v13.Popover, {
            isOpen: _v21,
            onClose: () => _v22(!1),
            placement: "bottom-end",
            flip: !0,
            preventOverflow: !0,
            gutter: 4,
            isLazy: !0,
            children: [(0, _v1.jsx)(_v16.PopoverAnchor, {
              children: (0, _v1.jsx)(_v19.Box, {
                position: "absolute",
                top: "100%",
                right: 0
              })
            }), (0, _v1.jsx)(_v14.PopoverContent, {
              padding: "0px",
              width: (0, _v17.rem)(300),
              maxWidth: (0, _v17.rem)(300),
              ref: _v27,
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
              children: (0, _v1.jsxs)(_v15.PopoverBody, {
                children: [(0, _v1.jsx)(_v19.Box, {
                  opacity: _v2 ? 1 : .5,
                  pointerEvents: _v2 ? "auto" : "none",
                  "aria-disabled": !_v2,
                  inert: !_v2 || void 0,
                  children: (0, _v1.jsx)(_v11.DatePicker, {
                    onValueChange: _v47,
                    open: !0,
                    closeOnSelect: !0,
                    min: new _v12.BokehDate.CalendarDate(_v31.getFullYear(), _v31.getMonth() + 1, _v31.getDate()),
                    max: new _v12.BokehDate.CalendarDate(_v32.getFullYear(), _v32.getMonth() + 1, _v32.getDate()),
                    children: (0, _v1.jsx)(_v11.Calendar, {
                      padding: "md",
                      width: (0, _v17.rem)(300)
                    })
                  }, _v23)
                }), (0, _v1.jsx)(_v19.Box, {
                  paddingTop: "sm",
                  paddingX: "md",
                  paddingBottom: "md",
                  children: (0, _v1.jsx)(_v10.Text, {
                    variant: "caption",
                    color: "text-secondary",
                    children: _v11 ? _v12 ? _v11 === _v34.WORKSPACE_BASICS_URL ? (0, _v31.translate)({
                      singular: 'Go to the "Privacy" tab in {LINK}Manage Defaults{/LINK} to change the default link expiration.',
                      replacements: {
                        LINK: _v0 => (0, _v1.jsx)(_v21.Link, {
                          href: _v11,
                          textDecoration: "underline",
                          color: "inherit",
                          children: _v0
                        })
                      },
                      dictionary: {
                        es: {
                          singular: 'Vaya a la pestaña "Privacidad" en {LINK}Administrar valores predeterminados{/LINK} para cambiar la expiración predeterminada del enlace.'
                        },
                        "de-DE": {
                          singular: 'Gehen Sie zur Registerkarte "Datenschutz" in {LINK}Standardeinstellungen verwalten{/LINK}, um die standardmäßige Ablaufzeit für Links zu ändern.'
                        },
                        "fr-FR": {
                          singular: "Allez dans l'onglet \"Confidentialité\" de {LINK}Manage Defaults{/LINK} pour modifier l'expiration par défaut des liens."
                        },
                        "ja-JP": {
                          singular: '{LINK}Manage Defaults{/LINK} の "Privacy" タブに移動して、デフォルトのリンク有効期限を変更してください。'
                        },
                        "ko-KR": {
                          singular: '기본 링크 만료 기간을 변경하려면 {LINK}기본값 관리{/LINK}의 "개인정보" 탭으로 이동하세요.'
                        },
                        "pt-BR": {
                          singular: 'Acesse a aba "Privacidade" em {LINK}Gerenciar padrões{/LINK} para alterar a expiração padrão do link.'
                        },
                        "zh-CN": {
                          singular: '转到 "隐私" 选项卡，在 {LINK}管理默认值{/LINK} 中更改默认链接过期时间。'
                        }
                      }
                    }) : (0, _v31.translate)({
                      singular: "Go to {LINK}Manage Defaults{/LINK} to change the default link expiration.",
                      replacements: {
                        LINK: _v0 => (0, _v1.jsx)(_v21.Link, {
                          href: _v11,
                          textDecoration: "underline",
                          color: "inherit",
                          children: _v0
                        })
                      },
                      dictionary: {
                        es: {
                          singular: "Ve a {LINK}Administrar valores predeterminados{/LINK} para cambiar la expiración predeterminada del enlace."
                        },
                        "de-DE": {
                          singular: "Gehen Sie zu {LINK}Standardeinstellungen verwalten{/LINK}, um die Standard-Ablaufzeit für Links zu ändern."
                        },
                        "fr-FR": {
                          singular: "Allez dans {LINK}Gérer les paramètres par défaut{/LINK} pour modifier l'expiration par défaut du lien."
                        },
                        "ja-JP": {
                          singular: "デフォルトのリンク有効期限を変更するには、{LINK}デフォルトを管理{/LINK}してください。"
                        },
                        "ko-KR": {
                          singular: "기본 링크 만료를 변경하려면 {LINK}기본값 관리{/LINK}로 이동하세요."
                        },
                        "pt-BR": {
                          singular: "Vá para {LINK}Gerenciar Padrões{/LINK} para alterar a expiração padrão do link."
                        },
                        "zh-CN": {
                          singular: "前往 {LINK}管理默认设置{/LINK} 以更改链接的默认到期时间。"
                        }
                      }
                    }) : _v13 ? (0, _v31.translate)({
                      singular: "Workspace admins can change the default link expiration.",
                      dictionary: {
                        es: {
                          singular: "Los administradores del espacio de trabajo pueden cambiar la expiración predeterminada del enlace."
                        },
                        "de-DE": {
                          singular: "Administratoren des Arbeitsbereichs können die standardmäßige Ablaufzeit für Links ändern."
                        },
                        "fr-FR": {
                          singular: "Les administrateurs de l'espace de travail peuvent modifier l'expiration par défaut des liens."
                        },
                        "ja-JP": {
                          singular: "ワークスペース管理者はデフォルトのリンク有効期限を変更できます。"
                        },
                        "ko-KR": {
                          singular: "워크스페이스 관리자는 기본 링크 만료 기간을 변경할 수 있습니다."
                        },
                        "pt-BR": {
                          singular: "Os administradores do espaço de trabalho podem alterar a expiração padrão do link."
                        },
                        "zh-CN": {
                          singular: "工作区管理员可以更改默认链接过期时间。"
                        }
                      }
                    }) : (0, _v31.translate)({
                      singular: "Team owners can change the default link expiration.",
                      dictionary: {
                        es: {
                          singular: "Los propietarios del equipo pueden cambiar la expiración predeterminada del enlace."
                        },
                        "de-DE": {
                          singular: "Teaminhaber können die standardmäßige Ablaufzeit für Links ändern."
                        },
                        "fr-FR": {
                          singular: "Les propriétaires d'équipe peuvent modifier la durée d'expiration par défaut des liens."
                        },
                        "ja-JP": {
                          singular: "チームの所有者はデフォルトのリンクの有効期限を変更できます。"
                        },
                        "ko-KR": {
                          singular: "팀 소유자는 기본 링크 만료 기간을 변경할 수 있습니다."
                        },
                        "pt-BR": {
                          singular: "Os proprietários da equipe podem alterar a expiração padrão do link."
                        },
                        "zh-CN": {
                          singular: "团队所有者可以更改默认链接的过期时间。"
                        }
                      }
                    }) : (0, _v31.translate)({
                      singular: "Set an expiration date for your link.",
                      dictionary: {
                        es: {
                          singular: "Establece una fecha de expiración para tu enlace."
                        },
                        "de-DE": {
                          singular: "Legen Sie ein Ablaufdatum für Ihren Link fest."
                        },
                        "fr-FR": {
                          singular: "Définissez une date d'expiration pour votre lien."
                        },
                        "ja-JP": {
                          singular: "リンクの有効期限を設定してください。"
                        },
                        "ko-KR": {
                          singular: "링크의 만료일을 설정하세요."
                        },
                        "pt-BR": {
                          singular: "Defina uma data de expiração para seu link."
                        },
                        "zh-CN": {
                          singular: "为您的链接设置到期日期。"
                        }
                      }
                    })
                  })
                })]
              })
            })]
          })]
        })]
      })]
    });
  }]);
}