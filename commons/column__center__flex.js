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
    _v33 = _v0.i(0);
  let _v34 = ({
    isMobile: _v0,
    quota: _v1,
    showZeroCreditsMessage: _v2,
    isWorkspaceAdminUser: _v3
  }) => {
    let _v4 = (0, _v31.useLocale)(),
      {
        settings: _v5
      } = (0, _v30.useOrionSettings)(),
      _v6 = _v1?.remaining ?? null,
      _v7 = _v1?.balances ?? null,
      _v8 = Number.isFinite(Number(_v6)) ? Number(_v6).toLocaleString() : _v6;
    return (0, _v1.jsxs)(_v7.Flex, {
      gap: "sm",
      flexDirection: "column",
      paddingX: "md",
      paddingTop: "sm",
      paddingBottom: _v5.enable_new_sidebar ? (0, _v10.rem)(12) : "sm",
      children: [(0, _v1.jsxs)(_v7.Flex, {
        flexDirection: "column",
        justifyContent: "center",
        gap: "sm",
        children: [(0, _v1.jsxs)(_v23.Text, {
          as: "div",
          display: "flex",
          variant: "heading-2xs",
          alignItems: "center",
          children: [(0, _v14.translate)({
            singular: "AI credits",
            dictionary: {
              es: {
                singular: "Créditos de IA"
              },
              "de-DE": {
                singular: "AI-Credits"
              },
              "fr-FR": {
                singular: "Crédits IA"
              },
              "ja-JP": {
                singular: "AIクレジット"
              },
              "ko-KR": {
                singular: "AI 크레딧"
              },
              "pt-BR": {
                singular: "Créditos de IA"
              },
              "zh-CN": {
                singular: "AI 积分"
              }
            }
          }), _v6 && _v6 > 0 ? (0, _v1.jsxs)(_v24.Popover, {
            placement: _v0 ? "top" : "right",
            children: [(0, _v1.jsx)(_v26.PopoverTrigger, {
              children: (0, _v1.jsx)(_v7.Flex, {
                height: "xs",
                width: "xs",
                cursor: "pointer",
                justifyContent: "center",
                alignItems: "center",
                children: (0, _v1.jsx)(_v29.InfoCircle, {
                  height: "2xs",
                  width: "2xs"
                })
              })
            }), (0, _v1.jsx)(_v25.PopoverContent, {
              children: (0, _v1.jsx)(_v17.Box, {
                children: _v1?.resetDate ? _v7?.length ? (0, _v1.jsxs)(_v1.Fragment, {
                  children: [_v7.map((_v0, _v1) => {
                    if (_v0.expirationDate) return (0, _v1.jsxs)(_v27.HStack, {
                      gap: "4px",
                      children: [(0, _v1.jsx)(_v28.VimeoCoin, {
                        h: "16px",
                        w: "16px",
                        color: "text-primary"
                      }), (0, _v1.jsx)(_v23.Text, {
                        variant: "body-md",
                        children: (0, _v33.renderAiCreditsExpirationDate)(_v0.remaining || 0, _v4, new Date(_v0.expirationDate))
                      })]
                    }, `ai-credit-balance-${_v1}`);
                  }), (0, _v1.jsx)(_v17.Box, {
                    margin: "4px 0",
                    children: (0, _v1.jsx)("hr", {})
                  }), (0, _v1.jsx)(_v23.Text, {
                    variant: "body-md",
                    children: (0, _v14.translate)({
                      singular: "Credits will not renew",
                      dictionary: {
                        es: {
                          singular: "Los créditos no se renovarán"
                        },
                        "de-DE": {
                          singular: "Guthaben werden nicht erneuert"
                        },
                        "fr-FR": {
                          singular: "Les crédits ne seront pas renouvelés"
                        },
                        "ja-JP": {
                          singular: "クレジットは更新されません"
                        },
                        "ko-KR": {
                          singular: "크레딧은 갱신되지 않습니다."
                        },
                        "pt-BR": {
                          singular: "Os créditos não serão renovados"
                        },
                        "zh-CN": {
                          singular: "积分将不会续期"
                        }
                      }
                    })
                  })]
                }) : (0, _v1.jsx)(_v23.Text, {
                  variant: "body-md",
                  children: (0, _v14.translate)({
                    singular: "Credits renew on {DATE} at {TIME}",
                    replacements: {
                      DATE: new Intl.DateTimeFormat(_v4, {
                        year: "numeric",
                        month: "short",
                        day: "numeric"
                      }).format(new Date(_v1.resetDate)),
                      TIME: new Intl.DateTimeFormat(_v4, {
                        hour: "numeric",
                        minute: "numeric",
                        timeZoneName: "short"
                      }).format(new Date(_v1.resetDate))
                    },
                    dictionary: {
                      es: {
                        singular: "Los créditos se renuevan el {DATE} a las {TIME}"
                      },
                      "de-DE": {
                        singular: "Credits werden am {DATE} um {TIME} erneuert"
                      },
                      "fr-FR": {
                        singular: "Les crédits sont renouvelés le {DATE} à {TIME}"
                      },
                      "ja-JP": {
                        singular: "クレジットは {DATE} の {TIME} に更新されます"
                      },
                      "ko-KR": {
                        singular: "크레딧은 {DATE} {TIME}에 갱신됩니다"
                      },
                      "pt-BR": {
                        singular: "Os créditos são renovados em {DATE} às {TIME}"
                      },
                      "zh-CN": {
                        singular: "积分将于 {DATE} {TIME} 更新"
                      }
                    }
                  })
                }) : (0, _v1.jsx)(_v23.Text, {
                  variant: "body-md",
                  children: (0, _v14.translate)({
                    singular: "Credits will not renew",
                    dictionary: {
                      es: {
                        singular: "Los créditos no se renovarán"
                      },
                      "de-DE": {
                        singular: "Guthaben werden nicht erneuert"
                      },
                      "fr-FR": {
                        singular: "Les crédits ne seront pas renouvelés"
                      },
                      "ja-JP": {
                        singular: "クレジットは更新されません"
                      },
                      "ko-KR": {
                        singular: "크레딧은 갱신되지 않습니다."
                      },
                      "pt-BR": {
                        singular: "Os créditos não serão renovados"
                      },
                      "zh-CN": {
                        singular: "积分将不会续期"
                      }
                    }
                  })
                })
              })
            })]
          }) : null]
        }), !_v2 && (0, _v1.jsxs)(_v7.Flex, {
          gap: "xs",
          children: [(0, _v1.jsx)(_v28.VimeoCoin, {
            h: "16px",
            w: "16px",
            color: "text-secondary"
          }), (0, _v1.jsx)(_v23.Text, {
            variant: "body-sm",
            textAlign: "left",
            color: "text-secondary",
            display: "flex",
            alignItems: "center",
            marginBottom: 0,
            children: (0, _v14.translate)({
              singular: "{AMOUNT} remaining",
              replacements: {
                AMOUNT: _v8
              },
              dictionary: {
                es: {
                  singular: "Faltan {AMOUNT}"
                },
                "de-DE": {
                  singular: "{AMOUNT} verbleibend"
                },
                "fr-FR": {
                  singular: "{AMOUNT} restantes"
                },
                "ja-JP": {
                  singular: "残り {AMOUNT}"
                },
                "ko-KR": {
                  singular: "남은 시간 {AMOUNT}"
                },
                "pt-BR": {
                  singular: "{AMOUNT} restante"
                },
                "zh-CN": {
                  singular: "剩余 {AMOUNT}"
                }
              }
            })
          })]
        })]
      }), (0, _v1.jsx)(_v17.Box, {
        children: (0, _v1.jsx)(_v23.Text, {
          as: "div",
          variant: "body-xs",
          color: "text-secondary",
          children: (0, _v1.jsx)(_v32.AiCreditsRemainingUpsellMessage, {
            quotaRemaining: _v6,
            location: "side_nav",
            showZeroCreditsMessage: _v2,
            isWorkspaceAdminUser: _v3
          })
        })
      })]
    });
  };
  var _v35 = _v0.i(0);
  let _v36 = ({
    isMobile: _v0,
    onUpgradeClick: _v1,
    quota: _v2,
    showTotal: _v3,
    showUpgrade: _v4,
    isWorkspaceAdminUser: _v5
  }) => {
    let _v6 = _v2?.available ?? null,
      _v7 = _v2?.period ?? null,
      _v8 = _v2?.used ?? null,
      _v9 = _v2?.resetDate ?? "";
    return _v6 && _v6 > 0 ? (0, _v1.jsx)(_v35.QuotaMeter, {
      isMobile: _v0,
      onUpgradeClick: _v1,
      quotaAvailable: _v6,
      quotaPeriod: _v7,
      quotaUsed: _v8,
      resetDate: _v9,
      showTotal: _v3,
      showUpgrade: _v4,
      totalAvailable: null,
      totalUsed: null,
      lifetimeUnit: null,
      periodicUnit: "drm_license",
      hideQuotaTooltip: _v5
    }) : null;
  };
  var _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0);
  let _v40 = ({
    isMobile: _v0,
    onUpgradeClick: _v1,
    uploadQuota: _v2,
    aiCreditsQuota: _v3,
    drmLicensesQuota: _v4,
    showTotal: _v5,
    showUpgrade: _v6
  }) => {
    let _v7 = (0, _v21.useViewer)(),
      _v8 = _v7?.user?.account === "enterprise",
      _v9 = (0, _v18.useIsStaff)(),
      {
        capabilities: _v10
      } = (0, _v4.useCapability)(["canViewDrmQuota"]),
      {
        canViewDrmQuota: _v11
      } = _v10,
      {
        isWorkspaceAdminUser: _v12
      } = (() => {
        let _v0 = (0, _v21.useViewer)(),
          {
            data: _v1
          } = (0, _v37.useGetMePreferences)({
            select: [_v38.USER_PREFERENCE_ID.PREF_WORKSPACE_UUID]
          }, {
            revalidateOnFocus: !1,
            revalidateIfStale: !1
          }),
          _v2 = !!_v1?.[_v38.USER_PREFERENCE_ID.PREF_WORKSPACE_UUID],
          _v3 = _v2 && _v0?.teamUser?.plainTextPermissionLevel === "Admin";
        return {
          isWorkspaceUser: _v2,
          isWorkspaceAdminUser: _v3
        };
      })(),
      _v13 = _v3 && (_v8 || _v12) && (0 === _v3.remaining || void 0 !== _v3.limit && Number.isFinite(_v3.limit) && _v3.used === _v3.limit),
      _v14 = _v7?.user?.id ?? null,
      _v15 = (0, _v20.shouldFetchColdStorageVideoFallback)(_v7),
      {
        data: _v16
      } = (0, _v19.useGetUserVideos)(() => _v14 && _v15 ? {
        where: {
          userId: _v14
        },
        select: ["uri"],
        query: {
          filter: "cold_storage",
          perPage: 1
        },
        headers: {
          Accept: "application/vnd.vimeo.*+json;version=3.4.1"
        }
      } : null, {
        revalidateOnFocus: !1
      }),
      _v17 = _v15 && (_v16?.total ?? 0) > 0;
    return (0, _v1.jsxs)(_v17.Box, {
      background: "surface",
      borderRadius: "lg",
      paddingY: "sm",
      children: [(0, _v1.jsx)(_v39.UploadQuotaMeter, {
        isMobile: _v0,
        onUpgradeClick: _v1,
        quota: _v2,
        showTotal: _v5,
        showUpgrade: _v6 && !_v9,
        isWorkspaceAdminUser: _v12,
        showColdStorageWarning: _v17
      }), _v3 ? _v8 || _v12 ? (0, _v1.jsx)(_v22.AiCreditsQuotaMeter, {
        isMobile: _v0,
        onUpgradeClick: _v1,
        quota: _v3,
        showTotal: _v5,
        showUpgrade: _v6 && !_v9,
        showZeroCreditsMessage: _v13,
        isWorkspaceAdminUser: _v12
      }) : (0, _v1.jsx)(_v34, {
        isMobile: _v0,
        quota: _v3,
        showZeroCreditsMessage: _v13,
        isWorkspaceAdminUser: _v12
      }) : null, _v11 && _v4 ? (0, _v1.jsx)(_v36, {
        isMobile: _v0,
        onUpgradeClick: () => void 0,
        quota: _v4,
        showTotal: _v5,
        showUpgrade: !1,
        isWorkspaceAdminUser: _v12
      }) : null]
    });
  };
  var _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0);
  let _v44 = _v0 => (0, _v1.jsx)(_v43.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      d: "M12 2C8 2 4 3.4 4 6v5.2c0 1.2 3.1 2.9 8 2.9s8-1.7 8-2.9V6c0-2.6-4-4-8-4Zm-4 9.5c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1ZM12 8C8.3 8 6 6.7 6 6s2.3-2 6-2 6 1.3 6 2-2.3 2-6 2Zm0 8c-2.8.1-5.6-.5-8-1.9V18c0 2.6 4 4 8 4s8-1.4 8-4v-3.9c-2.4 1.4-5.2 2-8 1.9Zm-4 3.5c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1Z",
      fill: "currentColor"
    })
  });
  var _v45 = _v0.i(0);
  let _v46 = {
      fontSize: (0, _v10.rem)(24),
      sx: {
        "> svg": {
          width: (0, _v10.rem)(24),
          height: (0, _v10.rem)(24)
        }
      }
    },
    _v47 = ({
      isMobile: _v0,
      uploadQuota: _v1,
      aiCreditsQuota: _v2,
      showUpgrade: _v3,
      onUpgradeClick: _v4
    }) => {
      let _v5 = _v1.restricted ?? (_v1.periodic?.max != null ? _v1.periodic : _v1.lifetime),
        _v6 = _v5?.max ?? null,
        _v7 = _v5?.used ?? null,
        _v8 = _v5?.unit ?? null,
        _v9 = _v6 && null != _v7 && _v7 > 0 ? Math.max(1, Math.min(100, Math.round(_v7 / _v6 * 100))) : 0,
        _v10 = null != _v6 && null != _v7 ? (0, _v14.translate)({
          singular: "{USED} of {LIMIT}",
          replacements: {
            USED: (0, _v33.getQuotaAmount)(_v7, _v8 ?? void 0),
            LIMIT: (0, _v33.getQuotaAmount)(_v6, _v8 ?? void 0)
          },
          dictionary: {
            es: {
              singular: "{USED} de {LIMIT}"
            },
            "de-DE": {
              singular: "{USED} von {LIMIT}"
            },
            "fr-FR": {
              singular: "{USED} sur {LIMIT}"
            },
            "ja-JP": {
              singular: "{USED} / {LIMIT}"
            },
            "ko-KR": {
              singular: "{USED}/{LIMIT}"
            },
            "pt-BR": {
              singular: "{USED} de {LIMIT}"
            },
            "zh-CN": {
              singular: "{USED} / {LIMIT}"
            }
          }
        }) : (0, _v14.translate)({
          singular: "Storage",
          dictionary: {
            es: {
              singular: "Almacenamiento:"
            },
            "de-DE": {
              singular: "Speicherplatz"
            },
            "fr-FR": {
              singular: "Stockage"
            },
            "ja-JP": {
              singular: "ストレージ"
            },
            "ko-KR": {
              singular: "저장 공간"
            },
            "pt-BR": {
              singular: "Armazenamento"
            },
            "zh-CN": {
              singular: "存储"
            }
          }
        }),
        _v11 = _v2?.remaining ?? null,
        _v12 = _v0 ? "top" : "right",
        _v13 = (0, _v42.useColorModeValue)("darkBlueAlpha.200", "lightBlueAlpha.300");
      return (0, _v1.jsxs)(_v7.Flex, {
        flexDirection: "column",
        alignItems: "center",
        gap: "md",
        backgroundColor: "fill-surface",
        borderRadius: "lg",
        width: (0, _v10.rem)(52),
        paddingTop: (0, _v10.rem)(6),
        paddingBottom: "sm",
        children: [(0, _v1.jsxs)(_v7.Flex, {
          flexDirection: "column",
          alignItems: "center",
          children: [(0, _v1.jsx)(_v9.Tooltip, {
            label: _v10,
            placement: _v12,
            children: (0, _v1.jsxs)(_v7.Flex, {
              flexDirection: "column",
              alignItems: "center",
              paddingBottom: (0, _v10.rem)(8),
              borderRadius: "md",
              _hover: {
                backgroundColor: _v13,
                '*:has(> [role="progressbar"])': {
                  bgColor: "fill-component-hover"
                }
              },
              children: [(0, _v1.jsx)(_v8.IconButton, {
                "aria-label": (0, _v14.translate)({
                  singular: "Storage",
                  dictionary: {
                    es: {
                      singular: "Almacenamiento:"
                    },
                    "de-DE": {
                      singular: "Speicherplatz"
                    },
                    "fr-FR": {
                      singular: "Stockage"
                    },
                    "ja-JP": {
                      singular: "ストレージ"
                    },
                    "ko-KR": {
                      singular: "저장 공간"
                    },
                    "pt-BR": {
                      singular: "Armazenamento"
                    },
                    "zh-CN": {
                      singular: "存储"
                    }
                  }
                }),
                icon: (0, _v1.jsx)(_v44, {}),
                variant: "tertiary",
                size: "md",
                color: "text-primary",
                pointerEvents: "none",
                tabIndex: -1,
                ..._v46
              }), (0, _v1.jsx)(_v41.Progress, {
                value: _v9,
                size: "xs",
                width: (0, _v10.rem)(30),
                borderRadius: "full",
                "aria-label": (0, _v14.translate)({
                  singular: "Storage used",
                  dictionary: {
                    es: {
                      singular: "Almacenamiento utilizado"
                    },
                    "de-DE": {
                      singular: "Verwendeter Speicherplatz"
                    },
                    "fr-FR": {
                      singular: "Stockage utilisé"
                    },
                    "ja-JP": {
                      singular: "使用済みストレージ"
                    },
                    "ko-KR": {
                      singular: "사용된 저장 공간"
                    },
                    "pt-BR": {
                      singular: "Armazenamento usado"
                    },
                    "zh-CN": {
                      singular: "已用存储空间"
                    }
                  }
                })
              })]
            })
          }), _v2 && null != _v11 ? (0, _v1.jsx)(_v9.Tooltip, {
            label: (0, _v14.translate)({
              singular: "Available AI credits",
              dictionary: {
                es: {
                  singular: "Créditos de IA disponibles"
                },
                "de-DE": {
                  singular: "Verfügbare KI-Credits"
                },
                "fr-FR": {
                  singular: "Crédits d'IA disponibles"
                },
                "ja-JP": {
                  singular: "利用可能なAIクレジット"
                },
                "ko-KR": {
                  singular: "사용 가능한 AI 크레딧"
                },
                "pt-BR": {
                  singular: "Créditos de IA disponíveis"
                },
                "zh-CN": {
                  singular: "可用 AI 积分"
                }
              }
            }),
            placement: _v12,
            children: (0, _v1.jsxs)(_v7.Flex, {
              flexDirection: "column",
              alignItems: "center",
              paddingBottom: (0, _v10.rem)(6),
              borderRadius: "md",
              _hover: {
                backgroundColor: _v13
              },
              children: [(0, _v1.jsx)(_v8.IconButton, {
                "aria-label": (0, _v14.translate)({
                  singular: "AI credits",
                  dictionary: {
                    es: {
                      singular: "Créditos de IA"
                    },
                    "de-DE": {
                      singular: "AI-Credits"
                    },
                    "fr-FR": {
                      singular: "Crédits IA"
                    },
                    "ja-JP": {
                      singular: "AIクレジット"
                    },
                    "ko-KR": {
                      singular: "AI 크레딧"
                    },
                    "pt-BR": {
                      singular: "Créditos de IA"
                    },
                    "zh-CN": {
                      singular: "AI 积分"
                    }
                  }
                }),
                icon: (0, _v1.jsx)(_v28.VimeoCoin, {}),
                variant: "tertiary",
                size: "md",
                color: "text-secondary",
                pointerEvents: "none",
                tabIndex: -1,
                ..._v46
              }), (0, _v1.jsx)(_v23.Text, {
                variant: "body-xs",
                color: "text-secondary",
                marginBottom: 0,
                children: Number(_v11).toLocaleString()
              })]
            })
          }) : null]
        }), _v3 && _v4 ? (0, _v1.jsx)(_v9.Tooltip, {
          label: (0, _v14.translate)({
            singular: "Upgrade",
            dictionary: {
              es: {
                singular: "Actualizar"
              },
              "de-DE": {
                singular: "Upgraden"
              },
              "fr-FR": {
                singular: "Mettre à niveau"
              },
              "ja-JP": {
                singular: "アップグレード"
              },
              "ko-KR": {
                singular: "업그레이드"
              },
              "zh-CN": {
                singular: "升级"
              }
            }
          }),
          placement: _v12,
          children: (0, _v1.jsx)(_v8.IconButton, {
            "aria-label": (0, _v14.translate)({
              singular: "Upgrade",
              dictionary: {
                es: {
                  singular: "Actualizar"
                },
                "de-DE": {
                  singular: "Upgraden"
                },
                "fr-FR": {
                  singular: "Mettre à niveau"
                },
                "ja-JP": {
                  singular: "アップグレード"
                },
                "ko-KR": {
                  singular: "업그레이드"
                },
                "zh-CN": {
                  singular: "升级"
                }
              }
            }),
            icon: (0, _v1.jsx)(_v45.Diamond, {}),
            variant: "upsell",
            size: "md",
            onClick: () => _v4(_v8, _v9),
            ..._v46
          })
        }) : null]
      });
    };
  var _v48 = _v0.i(0),
    _v49 = _v0.i(0);
  let _v50 = _v0 => (0, _v1.jsx)(_v43.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M17.351 2.064A1 1 0 0 1 18 3v14a1 1 0 0 1-1.753.658c-.613-.701-1.699-1.375-3.188-1.872A14.56 14.56 0 0 0 11 15.271v3.97a2.76 2.76 0 0 1-5.359.928l-.002-.007-2.01-5.76A5 5 0 0 1 6 5h1.832a18.77 18.77 0 0 0 2.07-.112 15.426 15.426 0 0 0 3.157-.673c1.49-.497 2.575-1.17 3.188-1.872a1 1 0 0 1 1.104-.278ZM9 6.968A21.14 21.14 0 0 1 7.832 7H6a3 3 0 1 0 0 6h1.832c.394 0 .784.01 1.168.032V6.968Zm2 6.275V6.757c.958-.151 1.862-.37 2.692-.646.84-.28 1.62-.626 2.308-1.035v9.848a11.91 11.91 0 0 0-2.308-1.035A16.807 16.807 0 0 0 11 13.243Zm-2 1.793A19.107 19.107 0 0 0 7.832 15H5.955l1.57 4.496v.003A.76.76 0 0 0 9 19.24v-4.204Zm10.057-8.199a1 1 0 0 1 1.276-.61 4.001 4.001 0 0 1 0 7.545 1 1 0 1 1-.666-1.886 2.001 2.001 0 0 0 0-3.772 1 1 0 0 1-.61-1.277Z",
      fill: "currentColor"
    })
  });
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
    _v62 = _v0.i(0);
  let _v63 = () => {
    let _v0 = (0, _v62.usePico)(),
      _v1 = (0, _v2.useCallback)(_v0 => null !== _v0 && (_v0.track("whats_new_modal_opened", {
        whats_new_modal_opened_manually: _v0.whatsNewModalOpenedManually
      }), !0), [_v0]),
      _v2 = (0, _v2.useCallback)(_v0 => null !== _v0 && (_v0.track("whats_new_modal_primary_cta_clicked", {
        whats_new_modal_announcement_name: _v0.whatsNewModalAnnouncementName,
        whats_new_modal_announcement_title: _v0.whatsNewModalAnnouncementTitle,
        whats_new_modal_button_url: _v0.whatsNewModalButtonUrl
      }), !0), [_v0]),
      _v3 = (0, _v2.useCallback)(_v0 => null !== _v0 && (_v0.track("whats_new_modal_secondary_cta_clicked", {
        whats_new_modal_announcement_name: _v0.whatsNewModalAnnouncementName,
        whats_new_modal_announcement_title: _v0.whatsNewModalAnnouncementTitle,
        whats_new_modal_button_url: _v0.whatsNewModalButtonUrl
      }), !0), [_v0]);
    return {
      trackWhatsNewModalOpened: _v1,
      trackWhatsNewModalPrimaryCtaClicked: _v2,
      trackWhatsNewModalSecondaryCtaClicked: _v3,
      trackWhatsNewModalAnnouncementScrolledTo: (0, _v2.useCallback)(_v0 => null !== _v0 && (_v0.track("whats_new_modal_announcement_scrolled_to", {
        whats_new_modal_announcement_name: _v0.whatsNewModalAnnouncementName,
        whats_new_modal_announcement_title: _v0.whatsNewModalAnnouncementTitle
      }), !0), [_v0]),
      trackWhatsNewModalAnnouncementRead: (0, _v2.useCallback)(_v0 => null !== _v0 && (_v0.track("whats_new_modal_announcement_read", {
        whats_new_modal_announcement_name: _v0.whatsNewModalAnnouncementName,
        whats_new_modal_announcement_title: _v0.whatsNewModalAnnouncementTitle
      }), !0), [_v0])
    };
  };
  var _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0),
    _v67 = _v0.i(0),
    _v68 = _v0.i(0),
    _v69 = _v0.i(0);
  let _v70 = ({
    announcement: _v0,
    onPrimaryCtaClick: _v1,
    onSecondaryCtaClick: _v2,
    locale: _v3,
    bodyRef: _v4
  }) => (0, _v1.jsxs)(_v7.Flex, {
    flexDirection: "column",
    gap: "2",
    justifyContent: "center",
    paddingTop: "6",
    paddingBottom: "6",
    borderBottom: "1px solid var(--vimeo-colors-stroke)",
    children: [(0, _v1.jsx)(_v71, {
      announcement: _v0
    }), (0, _v1.jsx)(_v23.Text, {
      marginTop: "1",
      variant: "body-sm",
      color: "text-secondary",
      children: ((_v0, _v1) => {
        try {
          let [_v0, _v1, _v2] = _v0.split("-").map(_v0 => parseInt(_v0, 10)),
            _v3 = new Date(_v0, _v1 - 1, _v2);
          return new Intl.DateTimeFormat(_v1, {
            year: "numeric",
            month: "long",
            day: "numeric"
          }).format(_v3);
        } catch (_v0) {
          return _v0;
        }
      })(_v0.releaseDate, _v3)
    }), (0, _v1.jsx)(_v68.Header, {
      as: "h3",
      size: "md",
      fontWeight: "semibold",
      children: _v0.title
    }), (0, _v1.jsx)("div", {
      ref: _v4,
      children: (0, _v1.jsx)(_v66.Paragraph, {
        variant: "body-sm",
        children: _v0.description
      })
    }), (0, _v1.jsxs)(_v7.Flex, {
      display: "flex",
      justifyContent: "flex-end",
      gap: "8px",
      children: [_v0.blogPostUrl && (0, _v1.jsx)(_v65.Button, {
        as: "a",
        href: _v0.blogPostUrl,
        target: "_blank",
        variant: "secondary",
        size: "sm",
        onClick: _v2,
        children: (0, _v14.translate)({
          singular: "Learn more",
          dictionary: {
            es: {
              singular: "Ver más"
            },
            "de-DE": {
              singular: "Mehr dazu"
            },
            "fr-FR": {
              singular: "En savoir plus "
            },
            "ja-JP": {
              singular: "詳細を見る"
            },
            "ko-KR": {
              singular: "자세히 보기"
            },
            "pt-BR": {
              singular: "Saiba mais"
            },
            "zh-CN": {
              singular: "了解更多"
            }
          }
        })
      }), _v0.ctaUrl && (0, _v1.jsx)(_v65.Button, {
        as: "a",
        href: _v0.ctaUrl,
        target: "_blank",
        variant: "primary",
        size: "sm",
        onClick: _v1,
        children: _v0.ctaText
      })]
    })]
  });
  function _v71({
    announcement: _v0
  }) {
    let _v1 = _v0.imageUrl,
      _v2 = _v0.clipId && _v0.clipEmbedUrl;
    return (0, _v1.jsx)(_v1.Fragment, {
      children: _v1 ? (0, _v1.jsx)(_v72, {
        title: _v0.title,
        imageUrl: _v0.imageUrl
      }) : _v2 ? (0, _v1.jsx)(_v73, {
        title: _v0.title,
        clipEmbedUrl: _v0.clipEmbedUrl
      }) : null
    });
  }
  function _v72({
    title: _v0,
    imageUrl: _v1
  }) {
    return (0, _v1.jsx)(_v17.Box, {
      position: "relative",
      width: "100%",
      paddingBottom: "56.25%",
      children: (0, _v1.jsx)(_v67.Image, {
        src: _v1,
        alt: _v0,
        borderRadius: "lg",
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        objectFit: "cover"
      })
    });
  }
  function _v73({
    title: _v0,
    clipEmbedUrl: _v1
  }) {
    return (0, _v1.jsx)(_v7.Flex, {
      aspectRatio: 16 / 9,
      borderRadius: (0, _v10.rem)(12),
      overflow: "hidden",
      children: (0, _v1.jsx)(_v69.EmbedPlayer, {
        title: _v0,
        src: _v1,
        style: {
          width: "100%",
          height: "100%"
        },
        onPlayerAPIReady: _v0 => {
          _v0.on("play", () => {
            console.log("video played");
          }), _v0.on("error", _v0 => {
            console.log("video error", _v0);
          });
        }
      })
    });
  }
  var _v74 = _v0.i(0),
    _v75 = _v0.i(0),
    _v76 = _v0.i(0),
    _v77 = _v0.i(0),
    _v78 = _v0.i(0),
    _v79 = _v0.i(0),
    _v80 = _v0.i(0);
  let _v81 = (_v0, _v1) => {
      let {
          actionContextOverrides: _v2,
          productAnalyticsContextOverrides: _v3,
          webContextOverrides: _v4
        } = _v1 || {},
        _v5 = (0, _v77.buildActionBpContext)({
          action_type: _v2?.action_type || "click",
          feature: _v2?.feature || null
        }),
        _v6 = (0, _v80.buildThirdPartyIntegrationBpContext)({
          integration_id: null,
          integration_name: null,
          is_partner: !1
        }),
        _v7 = (0, _v76.buildProductAnalyticsBpContext)({
          entity_type: _v3?.entity_type || "modal",
          element: _v3?.element || "button",
          feature: _v3?.feature || "whats_new",
          location: _v3?.location || "modal",
          product: _v3?.product || "web_onboarding",
          copy: _v3?.copy || null,
          device_type: (0, _v75.default)(),
          scrolling_percentage: _v3?.scrolling_percentage || null,
          modal_name: _v3?.modal_name || "whats_new_modal"
        }),
        _v8 = (0, _v79.buildWebBpContext)({
          page_name: _v4?.page_name || "changelog",
          path: (_v4?.path, window.location.pathname)
        }),
        _v9 = (0, _v78.buildTeamBpContextFromTeamUser)(_v0?.teamUser);
      return {
        ..._v5,
        ..._v7,
        ..._v8,
        ..._v9,
        ..._v6
      };
    },
    _v82 = _v0 => {
      if (_v0.current) {
        let _v0 = _v0.current.scrollHeight,
          _v1 = _v0.current.clientHeight,
          _v2 = _v0 && _v1 ? _v0 - _v1 : 0;
        if (_v2 > 0) return Math.round(_v0.current.scrollTop / _v2 * 100);
      }
      return 0;
    };
  function _v83({
    announcement: _v0,
    viewer: _v1,
    scrollRoot: _v2,
    isModalOpen: _v3,
    isFirst: _v4
  }) {
    let _v5 = (0, _v2.useRef)(null),
      _v6 = (0, _v2.useRef)(null),
      {
        trackWhatsNewModalPrimaryCtaClicked: _v7,
        trackWhatsNewModalSecondaryCtaClicked: _v8,
        trackWhatsNewModalAnnouncementScrolledTo: _v9,
        trackWhatsNewModalAnnouncementRead: _v10
      } = _v63(),
      _v11 = (0, _v2.useRef)(!1),
      _v12 = (0, _v64.useOnScreen)(_v5, {
        root: _v2.current,
        threshold: .5
      }),
      _v13 = (0, _v2.useRef)(!1),
      _v14 = (0, _v2.useRef)(!1),
      _v15 = (0, _v64.useOnScreen)(_v6, {
        root: _v2.current,
        threshold: 0
      });
    (0, _v2.useEffect)(() => {
      _v3 || (_v13.current = !1, _v14.current = !1);
    }, [_v3]), (0, _v2.useEffect)(() => {
      if (_v12 && !_v11.current) {
        var _v0, _v1;
        let _v0;
        _v0 = _v81(_v1, {
          productAnalyticsContextOverrides: {
            scrolling_percentage: _v82(_v2)
          }
        }), _v1 = {
          feature_name: _v0.name,
          publish_date: _v0.startDate,
          release_type: _v0.announcementType,
          announcement_header: _v0.title
        }, _v0 = new _v74.Event("vimeo.announcement_impression", 3, _v1), _v74.BigPictureClient.sendEventWithContexts(_v0, {
          ..._v0,
          view_context: new _v74.EventContext("view_context", 7, {
            view_type: "impression",
            is_empty_state: !1,
            feature: null
          })
        }), _v11.current = !0;
      }
    }, [_v12, _v0, _v11, _v2, _v1]), (0, _v2.useEffect)(() => {
      _v15 && !_v13.current && _v3 && !_v4 && _v9({
        whatsNewModalAnnouncementName: _v0.name,
        whatsNewModalAnnouncementTitle: _v0.title
      }) && (_v13.current = !0);
    }, [_v15, _v3, _v4, _v0, _v9]), (0, _v2.useEffect)(() => {
      if (!_v15 || _v14.current || !_v3) return;
      let _v0 = setTimeout(() => {
        _v10({
          whatsNewModalAnnouncementName: _v0.name,
          whatsNewModalAnnouncementTitle: _v0.title
        }) && (_v14.current = !0);
      }, 0);
      return () => clearTimeout(_v0);
    }, [_v15, _v3, _v0, _v10]);
    let _v16 = (0, _v2.useMemo)(() => _v81(_v1, {
        productAnalyticsContextOverrides: {
          location: "modal",
          copy: _v0.ctaText,
          scrolling_percentage: _v82(_v2)
        }
      }), [_v1, _v0.ctaText, _v2]),
      _v17 = (0, _v2.useMemo)(() => _v81(_v1, {
        productAnalyticsContextOverrides: {
          location: "modal",
          copy: "Learn more",
          scrolling_percentage: _v82(_v2)
        }
      }), [_v1, _v2]);
    return (0, _v1.jsx)(_v61.Card, {
      borderRadius: "none",
      boxShadow: "none",
      ref: _v5,
      children: (0, _v1.jsx)(_v70, {
        announcement: _v0,
        onPrimaryCtaClick: () => {
          var _v0;
          let _v1;
          _v0 = {
            feature_name: _v0.name,
            publish_date: _v0.startDate,
            release_type: _v0.announcementType,
            announcemnt_header: _v0.title
          }, _v1 = new _v74.Event("vimeo.select_primary_cta", 1, _v0), _v74.BigPictureClient.sendEventWithContexts(_v1, _v16), _v7({
            whatsNewModalAnnouncementName: _v0.name,
            whatsNewModalAnnouncementTitle: _v0.title,
            whatsNewModalButtonUrl: _v0.ctaUrl ?? null
          });
        },
        onSecondaryCtaClick: () => {
          var _v0;
          let _v1;
          _v0 = {
            feature_name: _v0.name,
            publish_date: _v0.startDate,
            release_type: _v0.announcementType,
            announcemnt_header: _v0.title
          }, _v1 = new _v74.Event("vimeo.select_secondery_cta", 1, _v0), _v74.BigPictureClient.sendEventWithContexts(_v1, _v17), _v8({
            whatsNewModalAnnouncementName: _v0.name,
            whatsNewModalAnnouncementTitle: _v0.title,
            whatsNewModalButtonUrl: _v0.blogPostUrl ?? null
          });
        },
        locale: _v1?.locale,
        bodyRef: _v6
      })
    });
  }
  let _v84 = ({
    isLoadingMore: _v0,
    onLoadMore: _v1,
    rootRef: _v2
  }) => {
    let _v3 = (0, _v2.useRef)(null),
      _v4 = (0, _v64.useOnScreen)(_v3, {
        root: _v2?.current,
        threshold: .1
      });
    return (0, _v2.useEffect)(() => {
      _v4 && !_v0 && _v1();
    }, [_v0, _v4, _v1]), (0, _v1.jsx)(_v61.Card, {
      padding: "6",
      borderRadius: "none",
      boxShadow: "none",
      ref: _v3,
      children: (0, _v1.jsx)(_v60.Skeleton, {
        width: "100%",
        aspectRatio: "16/9"
      })
    }, "skeleton");
  };
  function _v85({
    isOpen: _v0,
    onClose: _v1
  }) {
    let _v2 = (0, _v21.useViewer)(),
      {
        isLoadingMore: _v3,
        isDone: _v4,
        size: _v5,
        setSize: _v6,
        setUserLastSeenAnnouncement: _v7,
        announcementsList: _v8
      } = (0, _v12.useChangelog)(),
      _v9 = (0, _v2.useRef)(null);
    (0, _v2.useEffect)(() => {
      let _v0 = new URL(window.location.href),
        _v1 = new URLSearchParams(_v0.search);
      if (_v0 && "true" !== _v1.get("changelog")) {
        _v1.set("changelog", "true");
        let _v0 = `${_v0.pathname}?${_v1.toString()}`;
        window.history.replaceState(null, "", _v0);
      }
    }, [_v0]);
    let _v10 = (0, _v2.useMemo)(() => 0 === _v8.length ? null : new Date(_v8[0].releaseDate), [_v8]),
      _v11 = (0, _v2.useMemo)(() => _v81(_v2 ?? void 0, {
        productAnalyticsContextOverrides: {
          location: "modal",
          copy: "x"
        }
      }), [_v2]),
      _v12 = (0, _v2.useCallback)(() => {
        if (_v9.current && (_v9.current.scrollHeight && _v9.current.clientHeight ? _v9.current.scrollHeight - _v9.current.clientHeight : 0) > 0) {
          var _v0;
          let _v0;
          _v0 = _v81(_v2 ?? void 0, {
            productAnalyticsContextOverrides: {
              location: "modal",
              copy: null,
              scrolling_percentage: _v82(_v9)
            },
            actionContextOverrides: {
              action_type: "scroll"
            }
          }), _v0 = new _v74.Event("vimeo.scroll_in_modal", 1, {
            announcemnt_header: null,
            publish_date: null,
            release_type: null,
            feature_name: null
          }), _v74.BigPictureClient.sendEventWithContexts(_v0, _v0);
        }
      }, [_v9, _v2]),
      _v13 = (0, _v2.useMemo)(() => (0, _v51.default)(() => _v12(), 100), [_v12]);
    return (0, _v2.useEffect)(() => {
      _v0 && _v8.length > 0 && _v10 && _v7(_v10.toISOString());
    }, [_v0, _v10, _v8, _v7]), (0, _v2.useEffect)(() => {
      let _v0 = new URL(window.location.href),
        _v1 = new URLSearchParams(_v0.search);
      if (_v0 && "true" !== _v1.get("changelog")) {
        _v1.set("changelog", "true");
        let _v0 = `${_v0.pathname}?${_v1.toString()}`;
        window.history.replaceState(null, "", _v0);
      }
    }, [_v0]), (0, _v1.jsxs)(_v52.Modal, {
      isOpen: _v0,
      onClose: () => {
        let _v0;
        _v1(), _v0 = new _v74.Event("vimeo.dismiss_modal", 1, {
          announcemnt_header: null,
          publish_date: null,
          release_type: null,
          feature_name: null
        }), _v74.BigPictureClient.sendEventWithContexts(_v0, _v11);
      },
      scrollBehavior: "inside",
      children: [(0, _v1.jsx)(_v53.ModalOverlay, {}), (0, _v1.jsxs)(_v54.ModalContent, {
        maxWidth: (0, _v10.rem)(660),
        maxHeight: (0, _v10.rem)(560),
        children: [(0, _v1.jsx)(_v55.ModalHeader, {
          children: (0, _v14.translate)({
            singular: "What's new",
            dictionary: {
              es: {
                singular: "Novedades"
              },
              "de-DE": {
                singular: "Was gibt es Neues?"
              },
              "fr-FR": {
                singular: "Quoi de neuf ?"
              },
              "ja-JP": {
                singular: "新着情報"
              },
              "ko-KR": {
                singular: "새로운 기능"
              },
              "pt-BR": {
                singular: "Novidades"
              },
              "zh-CN": {
                singular: "新增内容"
              }
            }
          })
        }), (0, _v1.jsx)(_v58.ModalCloseButton, {}), (0, _v1.jsx)(_v56.ModalBody, {
          ref: _v9,
          onScroll: _v13,
          children: (0, _v1.jsxs)(_v59.Stack, {
            gap: "0",
            children: [0 === _v8.length && (0, _v1.jsx)(_v60.Skeleton, {
              width: (0, _v10.rem)(660),
              aspectRatio: "16/9"
            }), _v8.map((_v0, _v1) => (0, _v1.jsx)(_v83, {
              announcement: _v0,
              viewer: _v2 ?? void 0,
              scrollRoot: _v9,
              isModalOpen: _v0,
              isFirst: 0 === _v1
            }, _v1)), !_v4 && _v8.length > 0 && (0, _v1.jsx)(_v84, {
              isLoadingMore: _v3,
              onLoadMore: () => _v6(_v5 + 1),
              rootRef: _v9
            })]
          })
        }), (0, _v1.jsx)(_v57.ModalFooter, {})]
      })]
    });
  }
  let _v86 = ({
    count: _v0,
    showPlus: _v1
  }) => (0, _v1.jsxs)(_v17.Box, {
    as: "span",
    display: "inline-flex",
    alignItems: "center",
    children: [_v0, _v1 && (0, _v1.jsx)(_v17.Box, {
      as: "span",
      display: "inline-flex",
      alignItems: "center",
      marginBottom: "2px",
      children: "+"
    })]
  });
  var _v87 = _v0.i(0);
  let _v88 = ({
      variant: _v0 = "full"
    }) => {
      let _v1 = (0, _v21.useViewer)(),
        {
          settings: _v2
        } = (0, _v30.useOrionSettings)(),
        _v3 = _v81(_v1, {
          productAnalyticsContextOverrides: {
            copy: "whats new",
            location: "side_nav"
          },
          webContextOverrides: {
            page_name: "logged_in_home_page"
          }
        }),
        {
          trackWhatsNewModalOpened: _v4
        } = _v63(),
        _v5 = new URLSearchParams(window.location.search).get("changelog"),
        _v6 = (0, _v2.useRef)(_v5),
        [_v7, _v8] = (0, _v2.useState)("true" === _v5),
        {
          newAnnouncementsCount: _v9,
          isLoading: _v10
        } = (0, _v12.useChangelog)();
      (0, _v87.usePicoEffect)(() => {
        "true" === _v6.current && _v4({
          whatsNewModalOpenedManually: !1
        });
      }, [], {
        once: !0
      });
      let _v11 = (0, _v42.useColorModeValue)("darkBlueAlpha.200", "lightBlueAlpha.300"),
        _v12 = !!_v9 && parseInt(_v9.count) > 0,
        _v13 = () => {
          _v8(!0), (({
            contexts: _v0
          }) => {
            let _v1 = new _v74.Event("vimeo.content_navigation", -1, {});
            _v74.BigPictureClient.sendEventWithContexts(_v1, _v0);
          })({
            contexts: _v3
          }), _v4({
            whatsNewModalOpenedManually: !0
          });
        },
        _v14 = _v0 => {
          ("Enter" === _v0.key || " " === _v0.key) && (_v0.preventDefault(), _v13());
        },
        _v15 = () => {
          let _v0 = new URLSearchParams(window.location.search);
          _v0.delete("changelog");
          let _v1 = _v0.toString(),
            _v2 = _v1 ? `${window.location.pathname}?${_v1}` : window.location.pathname;
          window.history.replaceState(null, "", _v2), _v8(!1);
        };
      return _v10 ? (0, _v1.jsx)(_v13.LoadingBlock, {
        style: {
          borderRadius: (0, _v10.rem)(10),
          height: (0, _v10.rem)(28),
          marginBottom: (0, _v10.rem)(20),
          width: "icons" === _v0 ? (0, _v10.rem)(28) : "50%"
        }
      }) : "icons" === _v0 ? (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v9.Tooltip, {
          label: (0, _v14.translate)({
            singular: "What's new",
            dictionary: {
              es: {
                singular: "Novedades"
              },
              "de-DE": {
                singular: "Was gibt es Neues?"
              },
              "fr-FR": {
                singular: "Quoi de neuf ?"
              },
              "ja-JP": {
                singular: "新着情報"
              },
              "ko-KR": {
                singular: "새로운 기능"
              },
              "pt-BR": {
                singular: "Novidades"
              },
              "zh-CN": {
                singular: "新增内容"
              }
            }
          }),
          placement: "right",
          children: (0, _v1.jsxs)(_v17.Box, {
            position: "relative",
            width: "max-content",
            children: [(0, _v1.jsx)(_v8.IconButton, {
              "aria-label": (0, _v14.translate)({
                singular: "What's new",
                dictionary: {
                  es: {
                    singular: "Novedades"
                  },
                  "de-DE": {
                    singular: "Was gibt es Neues?"
                  },
                  "fr-FR": {
                    singular: "Quoi de neuf ?"
                  },
                  "ja-JP": {
                    singular: "新着情報"
                  },
                  "ko-KR": {
                    singular: "새로운 기능"
                  },
                  "pt-BR": {
                    singular: "Novidades"
                  },
                  "zh-CN": {
                    singular: "新增内容"
                  }
                }
              }),
              icon: (0, _v1.jsx)(_v50, {}),
              variant: "tertiary",
              size: "sm",
              onClick: _v13,
              onKeyDown: _v14,
              "aria-haspopup": "dialog",
              "aria-expanded": _v7
            }), _v12 && (0, _v1.jsx)(_v49.Badge, {
              variant: "new",
              size: "sm",
              borderRadius: "full",
              position: "absolute",
              top: (0, _v10.rem)(-2),
              right: (0, _v10.rem)(-2),
              minWidth: (0, _v10.rem)(16),
              height: (0, _v10.rem)(16),
              textAlign: "center",
              children: (0, _v1.jsx)(_v86, {
                count: _v9.count,
                showPlus: _v9.showPlus
              })
            })]
          })
        }), (0, _v1.jsx)(_v85, {
          isOpen: _v7,
          onClose: _v15
        })]
      }) : (0, _v1.jsxs)(_v7.Flex, {
        flexDirection: "column",
        gap: 10,
        marginTop: -10,
        children: [(0, _v1.jsxs)(_v7.Flex, {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          _hover: {
            backgroundColor: _v11,
            cursor: "pointer"
          },
          borderRadius: "input-sm",
          paddingRight: 3,
          onClick: _v13,
          onKeyDown: _v14,
          "aria-haspopup": "dialog",
          "aria-expanded": _v7,
          children: [(0, _v1.jsx)(_v48.MenuItem, {
            icon: (0, _v1.jsx)(_v50, {
              boxSize: "lg"
            }),
            iconSize: "1.5rem",
            label: (0, _v14.translate)({
              singular: "What's new",
              dictionary: {
                es: {
                  singular: "Novedades"
                },
                "de-DE": {
                  singular: "Was gibt es Neues?"
                },
                "fr-FR": {
                  singular: "Quoi de neuf ?"
                },
                "ja-JP": {
                  singular: "新着情報"
                },
                "ko-KR": {
                  singular: "새로운 기능"
                },
                "pt-BR": {
                  singular: "Novidades"
                },
                "zh-CN": {
                  singular: "新增内容"
                }
              }
            }),
            dataId: "side_nav_whats_new_menu_item",
            hoverBackgroundColor: "none"
          }), _v12 && (0, _v1.jsx)(_v49.Badge, {
            variant: "new",
            size: "sm",
            borderRadius: "full",
            minWidth: (0, _v10.rem)(20),
            height: (0, _v10.rem)(20),
            textAlign: "center",
            children: (0, _v1.jsx)(_v86, {
              count: _v9.count,
              showPlus: _v9.showPlus
            })
          })]
        }), !_v2.enable_new_sidebar && (0, _v1.jsx)(_v3.ResizableSideNav.Divider, {}), (0, _v1.jsx)(_v85, {
          isOpen: _v7,
          onClose: _v15
        })]
      });
    },
    _v89 = ({
      variant: _v0,
      isMobile: _v1,
      showWatchMenuItem: _v2,
      showWhatsNew: _v3,
      showQuota: _v4,
      isLoadingQuota: _v5,
      quota: _v6,
      onUpgradeClick: _v7
    }) => {
      let _v8 = (0, _v2.useContext)(_v6.ViewerContext),
        {
          trackSidebarNavClicked: _v9
        } = (0, _v16.useWatchTracking)(),
        {
          capabilities: _v10,
          loading: _v11
        } = (0, _v4.useCapability)(["hasSimplifiedEnterpriseAccount"]),
        {
          capabilities: _v12
        } = (0, _v4.useCapability)(["hasWatchButton"], _v8?.teamUser?.ownerId),
        _v13 = _v8?.isSimplifiedSite ?? !1,
        _v14 = !!(_v2 && !_v8?.isEnterpriseSite && !_v13 && !_v10?.hasSimplifiedEnterpriseAccount && _v12.hasWatchButton),
        _v15 = () => {
          _v9({
            sidebarNavDestination: "watch",
            sidebarNavContext: (0, _v15.deriveCanonicalPage)(new URL(window.location.href), {
              is_team_user: _v8?.user?.isTeamUser ?? !1
            })
          });
        };
      return "icons" === _v0 ? (0, _v1.jsxs)(_v7.Flex, {
        direction: "column",
        alignItems: "center",
        gap: 12,
        padding: "0.5rem",
        paddingBottom: 0,
        children: [_v14 && !_v11 && (0, _v1.jsx)(_v9.Tooltip, {
          label: (0, _v14.translate)({
            singular: "Watch",
            dictionary: {
              es: {
                singular: "Ver"
              },
              "de-DE": {
                singular: "Anschauen"
              },
              "fr-FR": {
                singular: "Regarder"
              },
              "ja-JP": {
                singular: "鑑賞"
              },
              "ko-KR": {
                singular: "시청하기"
              },
              "pt-BR": {
                singular: "Assistir"
              },
              "zh-CN": {
                singular: "观看"
              }
            }
          }),
          placement: "right",
          children: (0, _v1.jsx)(_v8.IconButton, {
            as: "a",
            href: "/watch",
            onClick: _v15,
            "aria-label": (0, _v14.translate)({
              singular: "Watch",
              dictionary: {
                es: {
                  singular: "Ver"
                },
                "de-DE": {
                  singular: "Anschauen"
                },
                "fr-FR": {
                  singular: "Regarder"
                },
                "ja-JP": {
                  singular: "鑑賞"
                },
                "ko-KR": {
                  singular: "시청하기"
                },
                "pt-BR": {
                  singular: "Assistir"
                },
                "zh-CN": {
                  singular: "观看"
                }
              }
            }),
            icon: (0, _v1.jsx)(_v11.WatchPlay, {}),
            variant: "tertiary",
            size: "sm"
          })
        }), _v3 && (0, _v1.jsx)(_v12.ChangelogProvider, {
          children: (0, _v1.jsx)(_v88, {
            variant: "icons"
          })
        }), _v5 ? (0, _v1.jsx)(_v13.LoadingBlock, {
          style: {
            borderRadius: (0, _v10.rem)(8),
            height: (0, _v10.rem)(40),
            width: (0, _v10.rem)(40)
          }
        }) : _v4 && _v6.uploadQuota ? (0, _v1.jsx)(_v47, {
          isMobile: _v1,
          uploadQuota: _v6.uploadQuota,
          aiCreditsQuota: _v6.aiCreditsQuota,
          showUpgrade: _v6.showUpgrade,
          onUpgradeClick: _v7
        }) : null]
      }) : (0, _v1.jsxs)(_v7.Flex, {
        direction: "column",
        gap: (0, _v10.rem)(16),
        padding: "1rem",
        paddingBottom: _v4 ? "1rem" : 0,
        children: [_v14 && (_v11 ? (0, _v1.jsx)(_v13.LoadingBlock, {
          style: {
            borderRadius: (0, _v10.rem)(10),
            height: (0, _v10.rem)(28),
            marginBottom: (0, _v10.rem)(20),
            width: "50%"
          }
        }) : (0, _v1.jsxs)(_v7.Flex, {
          flexDirection: "column",
          gap: 10,
          children: [(0, _v1.jsx)(_v48.MenuItem, {
            icon: (0, _v1.jsx)(_v11.WatchPlay, {}),
            label: (0, _v14.translate)({
              singular: "Watch",
              dictionary: {
                es: {
                  singular: "Ver"
                },
                "de-DE": {
                  singular: "Anschauen"
                },
                "fr-FR": {
                  singular: "Regarder"
                },
                "ja-JP": {
                  singular: "鑑賞"
                },
                "ko-KR": {
                  singular: "시청하기"
                },
                "pt-BR": {
                  singular: "Assistir"
                },
                "zh-CN": {
                  singular: "观看"
                }
              }
            }),
            href: "/watch",
            "data-id": "side_nav_watch_menu_item",
            onClick: _v15
          }), (0, _v1.jsx)(_v3.ResizableSideNav.Divider, {})]
        })), _v3 && (0, _v1.jsx)(_v12.ChangelogProvider, {
          children: (0, _v1.jsx)(_v88, {})
        }), _v5 ? (0, _v1.jsx)(_v13.LoadingBlock, {
          style: {
            borderRadius: (0, _v10.rem)(10),
            height: (0, _v10.rem)(60)
          }
        }) : _v4 && _v6.uploadQuota && (0, _v1.jsx)(_v40, {
          isMobile: _v1,
          onUpgradeClick: _v7,
          ..._v6,
          uploadQuota: _v6.uploadQuota
        })]
      });
    };
  _v0.s(["SideNavFooter", 0, _v89], 0);
  var _v90 = _v0.i(0),
    _v91 = _v0.i(0);
  let _v92 = ({
    onClose: _v0,
    isMobile: _v1,
    bg: _v2
  }) => {
    let _v3 = (0, _v2.useContext)(_v6.ViewerContext),
      _v4 = _v3?.isSimplifiedSite ?? !1,
      _v5 = (0, _v42.useColorModeValue)("darkBlueAlpha.200", "lightBlueAlpha.300");
    return (0, _v1.jsxs)(_v17.Box, {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: `${(0, _v10.rem)(16)} ${(0, _v10.rem)(12)} ${(0, _v10.rem)(8)} ${(0, _v10.rem)(28)}`,
      bg: _v2,
      children: [(0, _v1.jsx)(_v91.default, {
        href: _v3?.user ? "/home" : "/",
        width: (0, _v10.rem)(78),
        height: (0, _v10.rem)(27),
        title: _v4 ? (0, _v14.translate)({
          singular: "Go to Videoji home page",
          dictionary: {
            es: {
              singular: "Ir a la página de inicio de Videoji"
            },
            "de-DE": {
              singular: "Zur Videoji-Startseite"
            },
            "fr-FR": {
              singular: "Accéder à la page d'accueil de Videoji"
            },
            "ja-JP": {
              singular: "Videojiホームページに移動"
            },
            "ko-KR": {
              singular: "Videoji 홈페이지로 이동"
            },
            "pt-BR": {
              singular: "Ir para a página inicial do Videoji"
            },
            "zh-CN": {
              singular: "前往 Videoji 主页"
            }
          }
        }) : (0, _v14.translate)({
          singular: "Go to Vimeo home page",
          dictionary: {
            es: {
              singular: "Ir a la página de inicio de Vimeo"
            },
            "de-DE": {
              singular: "Zur Startseite von Vimeo"
            },
            "fr-FR": {
              singular: "Aller à la page d'accueil Vimeo"
            },
            "ja-JP": {
              singular: "Vimeoホームページに移動"
            },
            "ko-KR": {
              singular: "Vimeo 홈페이지로 이동"
            },
            "pt-BR": {
              singular: "Ir para a página inicial do Vimeo"
            },
            "zh-CN": {
              singular: "前往 Vimeo 主页"
            }
          }
        })
      }), (0, _v1.jsx)(_v8.IconButton, {
        "aria-label": (0, _v14.translate)({
          singular: "Close side nav",
          dictionary: {
            es: {
              singular: "Cerrar navegación lateral"
            },
            "de-DE": {
              singular: "Seitenleiste schließen"
            },
            "fr-FR": {
              singular: "Fermer le volet latéral"
            },
            "ja-JP": {
              singular: "サイドナビゲーションを閉じる"
            },
            "ko-KR": {
              singular: "사이드바 닫기"
            },
            "pt-BR": {
              singular: "Fechar navegação lateral"
            },
            "zh-CN": {
              singular: "关闭侧边导航"
            }
          }
        }),
        icon: (0, _v1.jsx)(_v90.ChevronLeft, {}),
        variant: "tertiary",
        size: "sm",
        onClick: _v0,
        backgroundColor: "transparent",
        sx: {
          "*": {
            fill: _v1 ? "text-primary" : "transparent"
          }
        },
        _hover: {
          backgroundColor: _v5
        },
        _groupHover: {
          "*": {
            fill: "text-primary"
          }
        },
        _focus: {
          "*": {
            fill: "text-primary"
          }
        }
      })]
    });
  };
  _v0.s(["SideNavHeader", 0, _v92], 0), _v0.s(["WayfinderSideNav", 0, ({
    children: _v0,
    dragConstraint: _v1,
    isOpen: _v2,
    isFixed: _v3,
    isMobile: _v4,
    onClose: _v5,
    onResize: _v6,
    onUpgradeClick: _v7,
    showWatchMenuItem: _v8 = !1,
    teamOwnerId: _v9,
    hideQuotaMeter: _v10 = !1,
    hideWhatsNew: _v11 = !1,
    footerVariant: _v12 = "full"
  }) => {
    let _v13 = (0, _v2.useContext)(_v6.ViewerContext),
      {
        capabilities: _v14
      } = (0, _v4.useCapability)(["hasTotalStorageCap", "canUpgrade"], _v13?.teamUser?.ownerId),
      _v15 = _v13?.user?.id === _v9,
      _v16 = _v13?.teamUser?.plainTextPermissionLevel === "Admin",
      {
        uploadQuota: _v17,
        aiCreditsQuota: _v18,
        drmLicensesQuota: _v19,
        isLoading: _v20
      } = (0, _v5.useUserQuotaApi)(),
      _v21 = !!((_v15 || _v16) && _v17 && !_v10),
      _v22 = _v13?.isSimplifiedSite ?? !1;
    return (0, _v1.jsxs)(_v3.ResizableSideNav, {
      active: _v2,
      dragConstraint: _v1,
      isFixed: _v3,
      onResize: (_v0, {
        current: _v1
      }) => _v6?.(_v1),
      role: "group",
      children: [(0, _v1.jsx)(_v3.ResizableSideNav.Header, {
        children: (0, _v1.jsx)(_v92, {
          onClose: _v5,
          isMobile: _v4
        })
      }), (0, _v1.jsx)(_v3.ResizableSideNav.Body, {
        children: _v0
      }), (0, _v1.jsx)(_v3.ResizableSideNav.Footer, {
        children: (0, _v1.jsx)(_v89, {
          variant: _v12,
          isMobile: _v4,
          showWatchMenuItem: _v8,
          showWhatsNew: !_v11 && !_v22,
          showQuota: _v21,
          isLoadingQuota: _v20,
          quota: {
            uploadQuota: _v17,
            aiCreditsQuota: _v18,
            drmLicensesQuota: _v19,
            showTotal: _v14.hasTotalStorageCap,
            showUpgrade: _v14.canUpgrade
          },
          onUpgradeClick: _v7
        })
      })]
    });
  }], 0);
}