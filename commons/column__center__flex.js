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
    _v31 = _v0.i(0);
  let _v32 = ({
    isMobile: _v0,
    quota: _v1,
    showZeroCreditsMessage: _v2,
    isWorkspaceAdminUser: _v3
  }) => {
    let _v4 = (0, _v29.useLocale)(),
      _v5 = _v1?.remaining ?? null,
      _v6 = _v1?.balances ?? null,
      _v7 = Number.isFinite(Number(_v5)) ? Number(_v5).toLocaleString() : _v5;
    return (0, _v1.jsxs)(_v3.Flex, {
      gap: "sm",
      flexDirection: "column",
      paddingX: "md",
      paddingTop: "sm",
      paddingBottom: (0, _v6.rem)(12),
      children: [(0, _v1.jsxs)(_v3.Flex, {
        flexDirection: "column",
        justifyContent: "center",
        gap: "sm",
        children: [(0, _v1.jsxs)(_v22.Text, {
          as: "div",
          display: "flex",
          variant: "heading-2xs",
          alignItems: "center",
          children: [(0, _v12.translate)({
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
          }), _v5 && _v5 > 0 ? (0, _v1.jsxs)(_v23.Popover, {
            placement: _v0 ? "top" : "right",
            children: [(0, _v1.jsx)(_v25.PopoverTrigger, {
              children: (0, _v1.jsx)(_v3.Flex, {
                height: "xs",
                width: "xs",
                cursor: "pointer",
                justifyContent: "center",
                alignItems: "center",
                children: (0, _v1.jsx)(_v28.InfoCircle, {
                  height: "2xs",
                  width: "2xs"
                })
              })
            }), (0, _v1.jsx)(_v24.PopoverContent, {
              children: (0, _v1.jsx)(_v16.Box, {
                children: _v1?.resetDate ? _v6?.length ? (0, _v1.jsxs)(_v1.Fragment, {
                  children: [_v6.map((_v0, _v1) => {
                    if (_v0.expirationDate) return (0, _v1.jsxs)(_v26.HStack, {
                      gap: "4px",
                      children: [(0, _v1.jsx)(_v27.VimeoCoin, {
                        h: "16px",
                        w: "16px",
                        color: "text-primary"
                      }), (0, _v1.jsx)(_v22.Text, {
                        variant: "body-md",
                        children: (0, _v31.renderAiCreditsExpirationDate)(_v0.remaining || 0, _v4, new Date(_v0.expirationDate))
                      })]
                    }, `ai-credit-balance-${_v1}`);
                  }), (0, _v1.jsx)(_v16.Box, {
                    margin: "4px 0",
                    children: (0, _v1.jsx)("hr", {})
                  }), (0, _v1.jsx)(_v22.Text, {
                    variant: "body-md",
                    children: (0, _v12.translate)({
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
                }) : (0, _v1.jsx)(_v22.Text, {
                  variant: "body-md",
                  children: (0, _v12.translate)({
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
                }) : (0, _v1.jsx)(_v22.Text, {
                  variant: "body-md",
                  children: (0, _v12.translate)({
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
        }), !_v2 && (0, _v1.jsxs)(_v3.Flex, {
          gap: "xs",
          children: [(0, _v1.jsx)(_v27.VimeoCoin, {
            h: "16px",
            w: "16px",
            color: "text-secondary"
          }), (0, _v1.jsx)(_v22.Text, {
            variant: "body-sm",
            textAlign: "left",
            color: "text-secondary",
            display: "flex",
            alignItems: "center",
            marginBottom: 0,
            children: (0, _v12.translate)({
              singular: "{AMOUNT} remaining",
              replacements: {
                AMOUNT: _v7
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
      }), (0, _v1.jsx)(_v16.Box, {
        children: (0, _v1.jsx)(_v22.Text, {
          as: "div",
          variant: "body-xs",
          color: "text-secondary",
          children: (0, _v1.jsx)(_v30.AiCreditsRemainingUpsellMessage, {
            quotaRemaining: _v5,
            location: "side_nav",
            showZeroCreditsMessage: _v2,
            isWorkspaceAdminUser: _v3
          })
        })
      })]
    });
  };
  var _v33 = _v0.i(0);
  let _v34 = ({
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
    return _v6 && _v6 > 0 ? (0, _v1.jsx)(_v33.QuotaMeter, {
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
  var _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0);
  let _v41 = () => (0, _v1.jsx)(_v40.AlertRoot, {
    status: "info",
    variant: "info",
    size: "sm",
    mx: "md",
    width: "auto",
    children: (0, _v1.jsx)(_v39.AlertDescription, {
      children: (0, _v1.jsx)(_v22.Text, {
        variant: "body-sm",
        children: (0, _v12.translate)({
          singular: "Public videos with embedding off are now excluded from storage count.",
          dictionary: {
            es: {
              singular: "Los vídeos públicos con la incrustación desactivada ahora están excluidos del recuento de almacenamiento."
            },
            "de-DE": {
              singular: "Öffentliche Videos mit deaktivierter Einbettung werden nun nicht mehr in der Speicherberechnung berücksichtigt."
            },
            "fr-FR": {
              singular: "Les vidéos publiques dont l'intégration est désactivée sont désormais exclues du quota de stockage."
            },
            "ja-JP": {
              singular: "埋め込みをオフにした公開動画は、現在ストレージ使用量の集計から除外されています。"
            },
            "ko-KR": {
              singular: "임베딩이 꺼진 공개 동영상은 이제 저장 용량 계산에서 제외됩니다."
            },
            "pt-BR": {
              singular: "Vídeos públicos com a incorporação desativada agora são excluídos da contagem de armazenamento."
            },
            "zh-CN": {
              singular: "嵌入已关闭的公开视频现在不再计入存储统计。"
            }
          }
        })
      })
    })
  });
  var _v42 = _v0.i(0);
  let _v43 = ({
    isMobile: _v0,
    onUpgradeClick: _v1,
    uploadQuota: _v2,
    aiCreditsQuota: _v3,
    drmLicensesQuota: _v4,
    showTotal: _v5,
    showUpgrade: _v6,
    showAutoRenewBadge: _v7
  }) => {
    let _v8 = (0, _v20.useViewer)(),
      _v9 = _v8?.user?.account === "enterprise",
      _v10 = (0, _v17.useIsStaff)(),
      {
        capabilities: _v11
      } = (0, _v11.useCapability)(["canViewDrmQuota"]),
      {
        canViewDrmQuota: _v12
      } = _v11,
      {
        isWorkspaceAdminUser: _v13
      } = (() => {
        let _v0 = (0, _v20.useViewer)(),
          {
            data: _v1
          } = (0, _v35.useGetMePreferences)({
            select: [_v36.USER_PREFERENCE_ID.PREF_WORKSPACE_UUID]
          }, {
            revalidateOnFocus: !1,
            revalidateIfStale: !1
          }),
          _v2 = !!_v1?.[_v36.USER_PREFERENCE_ID.PREF_WORKSPACE_UUID],
          _v3 = _v2 && _v0?.teamUser?.plainTextPermissionLevel === "Admin";
        return {
          isWorkspaceUser: _v2,
          isWorkspaceAdminUser: _v3
        };
      })(),
      _v14 = (0, _v37.useSidebarStorageVariant)(),
      {
        membershipType: _v15
      } = (0, _v38.useUserQuotaApi)(),
      _v16 = _v15 ? (0, _v31.formatTierForDisplay)(_v15) : null,
      _v17 = _v3 && (_v9 || _v13) && (0 === _v3.remaining || void 0 !== _v3.limit && Number.isFinite(_v3.limit) && _v3.used === _v3.limit),
      _v18 = _v8?.user?.id ?? null,
      _v19 = (0, _v19.shouldFetchColdStorageVideoFallback)(_v8),
      {
        data: _v20
      } = (0, _v18.useGetUserVideos)(() => _v18 && _v19 ? {
        where: {
          userId: _v18
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
      _v21 = _v19 && (_v20?.total ?? 0) > 0,
      _v22 = null != _v2.restricted;
    return (0, _v1.jsxs)(_v16.Box, {
      background: "surface",
      borderRadius: "lg",
      paddingY: "sm",
      children: [(0, _v1.jsx)(_v42.UploadQuotaMeter, {
        isMobile: _v0,
        onUpgradeClick: _v1,
        quota: _v2,
        showTotal: _v5,
        showUpgrade: _v6 && !_v10,
        isWorkspaceAdminUser: _v13,
        showColdStorageWarning: _v21,
        showAutoRenewBadge: _v7,
        sidebarStorageVariant: _v14,
        planName: _v16
      }), _v22 && (0, _v1.jsx)(_v41, {}), _v3 ? _v9 || _v13 ? (0, _v1.jsx)(_v21.AiCreditsQuotaMeter, {
        isMobile: _v0,
        onUpgradeClick: _v1,
        quota: _v3,
        showTotal: _v5,
        showUpgrade: _v6 && !_v10,
        showZeroCreditsMessage: _v17,
        isWorkspaceAdminUser: _v13
      }) : (0, _v1.jsx)(_v32, {
        isMobile: _v0,
        quota: _v3,
        showZeroCreditsMessage: _v17,
        isWorkspaceAdminUser: _v13
      }) : null, _v12 && _v4 ? (0, _v1.jsx)(_v34, {
        isMobile: _v0,
        onUpgradeClick: () => void 0,
        quota: _v4,
        showTotal: _v5,
        showUpgrade: !1,
        isWorkspaceAdminUser: _v13
      }) : null]
    });
  };
  var _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0);
  let _v47 = _v0 => (0, _v1.jsx)(_v46.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      d: "M12 2C8 2 4 3.4 4 6v5.2c0 1.2 3.1 2.9 8 2.9s8-1.7 8-2.9V6c0-2.6-4-4-8-4Zm-4 9.5c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1ZM12 8C8.3 8 6 6.7 6 6s2.3-2 6-2 6 1.3 6 2-2.3 2-6 2Zm0 8c-2.8.1-5.6-.5-8-1.9V18c0 2.6 4 4 8 4s8-1.4 8-4v-3.9c-2.4 1.4-5.2 2-8 1.9Zm-4 3.5c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1Z",
      fill: "currentColor"
    })
  });
  var _v48 = _v0.i(0),
    _v49 = _v0.i(0);
  let _v50 = {
      fontSize: (0, _v6.rem)(24),
      sx: {
        "> svg": {
          width: (0, _v6.rem)(24),
          height: (0, _v6.rem)(24)
        }
      }
    },
    _v51 = ({
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
        _v9 = null === _v6,
        _v10 = null != _v6 && _v6 > 0 && null != _v7 && _v7 > 0 ? Math.max(1, Math.min(100, Math.round(_v7 / _v6 * 100))) : 0,
        _v11 = null != _v6 && null != _v7 ? (0, _v12.translate)({
          singular: "{USED} of {LIMIT}",
          replacements: {
            USED: (0, _v31.getQuotaAmount)(_v7, _v8 ?? void 0),
            LIMIT: (0, _v31.getQuotaAmount)(_v6, _v8 ?? void 0)
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
        }) : _v9 && null != _v7 ? (0, _v12.translate)({
          singular: "{USED} used",
          replacements: {
            USED: (0, _v31.getQuotaAmount)(_v7, _v8 ?? void 0)
          },
          dictionary: {
            es: {
              singular: "{USED} usados"
            },
            "de-DE": {
              singular: "{USED} genutzt"
            },
            "fr-FR": {
              singular: "{USED} utilisé"
            },
            "ja-JP": {
              singular: "{USED} 使用済み"
            },
            "ko-KR": {
              singular: "{USED} 사용됨"
            },
            "pt-BR": {
              singular: "{USED} usados"
            },
            "zh-CN": {
              singular: "{USED} 已使用"
            }
          }
        }) : (0, _v12.translate)({
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
        _v12 = _v2?.remaining ?? null,
        _v13 = _v0 ? "top" : "right",
        _v14 = _v10 >= 100,
        _v15 = (0, _v49.buildUpgradePlanUrl)({
          paywallTrigger: "quota_meter_upgrade_button",
          paywallLocation: "quota_meter",
          paywallFeature: "quota"
        }, {
          upsell: "quota_meter",
          integration: "none",
          feature: _v14 ? "Storage_at_limit" : "Storage_general",
          paywall: "1",
          upsellFeatureCategory: "Storage",
          upsellSpecificFeature: _v14 ? "Storage_at_limit" : "Storage_general"
        }),
        _v16 = (0, _v45.useColorModeValue)("darkBlueAlpha.200", "lightBlueAlpha.300");
      return (0, _v1.jsxs)(_v3.Flex, {
        flexDirection: "column",
        alignItems: "center",
        gap: "md",
        backgroundColor: "fill-surface",
        borderRadius: "lg",
        width: (0, _v6.rem)(52),
        paddingTop: (0, _v6.rem)(6),
        paddingBottom: "sm",
        children: [(0, _v1.jsxs)(_v3.Flex, {
          flexDirection: "column",
          alignItems: "center",
          children: [(0, _v1.jsx)(_v5.Tooltip, {
            label: _v11,
            placement: _v13,
            children: (0, _v1.jsxs)(_v3.Flex, {
              flexDirection: "column",
              alignItems: "center",
              paddingBottom: (0, _v6.rem)(8),
              borderRadius: "md",
              sx: {
                '*:has(> [role="progressbar"])': {
                  bgColor: "fill-component-hover"
                }
              },
              _hover: {
                backgroundColor: _v16
              },
              children: [(0, _v1.jsx)(_v4.IconButton, {
                "aria-label": (0, _v12.translate)({
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
                icon: (0, _v1.jsx)(_v47, {}),
                variant: "tertiary",
                size: "md",
                color: "text-primary",
                pointerEvents: "none",
                tabIndex: -1,
                ..._v50
              }), (0, _v1.jsx)(_v44.Progress, {
                value: _v10,
                size: "xs",
                width: (0, _v6.rem)(30),
                borderRadius: "full",
                "aria-label": (0, _v12.translate)({
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
          }), _v2 && null != _v12 ? (0, _v1.jsx)(_v5.Tooltip, {
            label: (0, _v12.translate)({
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
            placement: _v13,
            children: (0, _v1.jsxs)(_v3.Flex, {
              flexDirection: "column",
              alignItems: "center",
              paddingBottom: (0, _v6.rem)(6),
              borderRadius: "md",
              _hover: {
                backgroundColor: _v16
              },
              children: [(0, _v1.jsx)(_v4.IconButton, {
                "aria-label": (0, _v12.translate)({
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
                icon: (0, _v1.jsx)(_v27.VimeoCoin, {}),
                variant: "tertiary",
                size: "md",
                color: "text-secondary",
                pointerEvents: "none",
                tabIndex: -1,
                ..._v50
              }), (0, _v1.jsx)(_v22.Text, {
                variant: "body-xs",
                color: "text-secondary",
                marginBottom: 0,
                children: Number(_v12).toLocaleString()
              })]
            })
          }) : null]
        }), _v3 ? (0, _v1.jsx)(_v5.Tooltip, {
          label: (0, _v12.translate)({
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
          placement: _v13,
          children: (0, _v1.jsx)(_v4.IconButton, {
            "aria-label": (0, _v12.translate)({
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
            icon: (0, _v1.jsx)(_v48.Diamond, {}),
            variant: "upsell",
            size: "md",
            ...(_v4 ? {
              onClick: () => _v4(_v8, _v10)
            } : {
              as: "a",
              href: _v15
            }),
            ..._v50
          })
        }) : null]
      });
    };
  var _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0);
  let _v57 = _v0 => (0, _v1.jsx)(_v46.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M17.351 2.064A1 1 0 0 1 18 3v14a1 1 0 0 1-1.753.658c-.613-.701-1.699-1.375-3.188-1.872A14.56 14.56 0 0 0 11 15.271v3.97a2.76 2.76 0 0 1-5.359.928l-.002-.007-2.01-5.76A5 5 0 0 1 6 5h1.832a18.77 18.77 0 0 0 2.07-.112 15.426 15.426 0 0 0 3.157-.673c1.49-.497 2.575-1.17 3.188-1.872a1 1 0 0 1 1.104-.278ZM9 6.968A21.14 21.14 0 0 1 7.832 7H6a3 3 0 1 0 0 6h1.832c.394 0 .784.01 1.168.032V6.968Zm2 6.275V6.757c.958-.151 1.862-.37 2.692-.646.84-.28 1.62-.626 2.308-1.035v9.848a11.91 11.91 0 0 0-2.308-1.035A16.807 16.807 0 0 0 11 13.243Zm-2 1.793A19.107 19.107 0 0 0 7.832 15H5.955l1.57 4.496v.003A.76.76 0 0 0 9 19.24v-4.204Zm10.057-8.199a1 1 0 0 1 1.276-.61 4.001 4.001 0 0 1 0 7.545 1 1 0 1 1-.666-1.886 2.001 2.001 0 0 0 0-3.772 1 1 0 0 1-.61-1.277Z",
        fill: "currentColor"
      })
    }),
    _v58 = _v0 => (0, _v1.jsx)(_v46.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M17.351 2.064A1 1 0 0 1 18 3v14a1 1 0 0 1-1.753.658c-.613-.701-1.699-1.375-3.188-1.872A14.56 14.56 0 0 0 11 15.271v3.97a2.76 2.76 0 0 1-5.359.928l-.002-.007-2.01-5.76A5 5 0 0 1 6 5h1.832a18.77 18.77 0 0 0 2.07-.112 15.426 15.426 0 0 0 3.157-.673c1.49-.497 2.575-1.17 3.188-1.872a1 1 0 0 1 1.104-.278Zm2.072 4.29a1 1 0 0 1 .91-.126 4.001 4.001 0 0 1 0 7.544A1 1 0 0 1 19 12.83V7.171a1 1 0 0 1 .423-.817Z",
        fill: "currentColor"
      })
    });
  var _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v61 = _v0.i(0),
    _v62 = _v0.i(0),
    _v63 = _v0.i(0),
    _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0),
    _v67 = _v0.i(0),
    _v68 = _v0.i(0),
    _v69 = _v0.i(0);
  let _v70 = () => {
    let _v0 = (0, _v69.usePico)(),
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
  var _v71 = _v0.i(0),
    _v72 = _v0.i(0),
    _v73 = _v0.i(0),
    _v74 = _v0.i(0),
    _v75 = _v0.i(0),
    _v76 = _v0.i(0);
  let _v77 = ({
    announcement: _v0,
    onPrimaryCtaClick: _v1,
    onSecondaryCtaClick: _v2,
    locale: _v3,
    bodyRef: _v4
  }) => (0, _v1.jsxs)(_v3.Flex, {
    flexDirection: "column",
    gap: "2",
    justifyContent: "center",
    paddingTop: "6",
    paddingBottom: "6",
    borderBottom: "1px solid var(--vimeo-colors-stroke)",
    children: [(0, _v1.jsx)(_v78, {
      announcement: _v0
    }), (0, _v1.jsx)(_v22.Text, {
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
    }), (0, _v1.jsx)(_v75.Header, {
      as: "h3",
      size: "md",
      fontWeight: "semibold",
      children: _v0.title
    }), (0, _v1.jsx)("div", {
      ref: _v4,
      children: (0, _v1.jsx)(_v73.Paragraph, {
        variant: "body-sm",
        children: _v0.description
      })
    }), (0, _v1.jsxs)(_v3.Flex, {
      display: "flex",
      justifyContent: "flex-end",
      gap: "8px",
      children: [_v0.blogPostUrl && (0, _v1.jsx)(_v72.Button, {
        as: "a",
        href: _v0.blogPostUrl,
        target: "_blank",
        variant: "secondary",
        size: "sm",
        onClick: _v2,
        children: (0, _v12.translate)({
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
      }), _v0.ctaUrl && (0, _v1.jsx)(_v72.Button, {
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
  function _v78({
    announcement: _v0
  }) {
    let _v1 = _v0.imageUrl,
      _v2 = _v0.clipId && _v0.clipEmbedUrl;
    return (0, _v1.jsx)(_v1.Fragment, {
      children: _v1 ? (0, _v1.jsx)(_v79, {
        title: _v0.title,
        imageUrl: _v0.imageUrl
      }) : _v2 ? (0, _v1.jsx)(_v80, {
        title: _v0.title,
        clipEmbedUrl: _v0.clipEmbedUrl
      }) : null
    });
  }
  function _v79({
    title: _v0,
    imageUrl: _v1
  }) {
    return (0, _v1.jsx)(_v16.Box, {
      position: "relative",
      width: "100%",
      paddingBottom: "56.25%",
      children: (0, _v1.jsx)(_v74.Image, {
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
  function _v80({
    title: _v0,
    clipEmbedUrl: _v1
  }) {
    return (0, _v1.jsx)(_v3.Flex, {
      aspectRatio: 16 / 9,
      borderRadius: (0, _v6.rem)(12),
      overflow: "hidden",
      children: (0, _v1.jsx)(_v76.EmbedPlayer, {
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
  function _v81({
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
      } = _v70(),
      _v11 = (0, _v2.useRef)(!1),
      _v12 = (0, _v2.useRef)(!1),
      _v13 = (0, _v71.useOnScreen)(_v6, {
        root: _v2.current,
        threshold: 0
      });
    return (0, _v2.useEffect)(() => {
      _v3 || (_v11.current = !1, _v12.current = !1);
    }, [_v3]), (0, _v2.useEffect)(() => {
      _v13 && !_v11.current && _v3 && !_v4 && _v9({
        whatsNewModalAnnouncementName: _v0.name,
        whatsNewModalAnnouncementTitle: _v0.title
      }) && (_v11.current = !0);
    }, [_v13, _v3, _v4, _v0, _v9]), (0, _v2.useEffect)(() => {
      if (!_v13 || _v12.current || !_v3) return;
      let _v0 = setTimeout(() => {
        _v10({
          whatsNewModalAnnouncementName: _v0.name,
          whatsNewModalAnnouncementTitle: _v0.title
        }) && (_v12.current = !0);
      }, 0);
      return () => clearTimeout(_v0);
    }, [_v13, _v3, _v0, _v10]), (0, _v1.jsx)(_v68.Card, {
      borderRadius: "none",
      boxShadow: "none",
      ref: _v5,
      children: (0, _v1.jsx)(_v77, {
        announcement: _v0,
        onPrimaryCtaClick: () => {
          _v7({
            whatsNewModalAnnouncementName: _v0.name,
            whatsNewModalAnnouncementTitle: _v0.title,
            whatsNewModalButtonUrl: _v0.ctaUrl ?? null
          });
        },
        onSecondaryCtaClick: () => {
          _v8({
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
  let _v82 = ({
    isLoadingMore: _v0,
    onLoadMore: _v1,
    rootRef: _v2
  }) => {
    let _v3 = (0, _v2.useRef)(null),
      _v4 = (0, _v71.useOnScreen)(_v3, {
        root: _v2?.current,
        threshold: .1
      });
    return (0, _v2.useEffect)(() => {
      _v4 && !_v0 && _v1();
    }, [_v0, _v4, _v1]), (0, _v1.jsx)(_v68.Card, {
      padding: "6",
      borderRadius: "none",
      boxShadow: "none",
      ref: _v3,
      children: (0, _v1.jsx)(_v67.Skeleton, {
        width: "100%",
        aspectRatio: "16/9"
      })
    }, "skeleton");
  };
  function _v83({
    isOpen: _v0,
    onClose: _v1
  }) {
    let _v2 = (0, _v20.useViewer)(),
      {
        isLoadingMore: _v3,
        isDone: _v4,
        size: _v5,
        setSize: _v6,
        setUserLastSeenAnnouncement: _v7,
        announcementsList: _v8
      } = (0, _v8.useChangelog)(),
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
    let _v10 = (0, _v2.useMemo)(() => 0 === _v8.length ? null : new Date(_v8[0].releaseDate), [_v8]);
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
    }, [_v0]), (0, _v1.jsxs)(_v59.Modal, {
      isOpen: _v0,
      onClose: () => {
        _v1();
      },
      scrollBehavior: "inside",
      children: [(0, _v1.jsx)(_v60.ModalOverlay, {}), (0, _v1.jsxs)(_v61.ModalContent, {
        maxWidth: (0, _v6.rem)(660),
        maxHeight: (0, _v6.rem)(560),
        children: [(0, _v1.jsx)(_v62.ModalHeader, {
          children: (0, _v12.translate)({
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
        }), (0, _v1.jsx)(_v65.ModalCloseButton, {}), (0, _v1.jsx)(_v63.ModalBody, {
          ref: _v9,
          children: (0, _v1.jsxs)(_v66.Stack, {
            gap: "0",
            children: [0 === _v8.length && (0, _v1.jsx)(_v67.Skeleton, {
              width: (0, _v6.rem)(660),
              aspectRatio: "16/9"
            }), _v8.map((_v0, _v1) => (0, _v1.jsx)(_v81, {
              announcement: _v0,
              viewer: _v2 ?? void 0,
              scrollRoot: _v9,
              isModalOpen: _v0,
              isFirst: 0 === _v1
            }, _v1)), !_v4 && _v8.length > 0 && (0, _v1.jsx)(_v82, {
              isLoadingMore: _v3,
              onLoadMore: () => _v6(_v5 + 1),
              rootRef: _v9
            })]
          })
        }), (0, _v1.jsx)(_v64.ModalFooter, {})]
      })]
    });
  }
  let _v84 = ({
    count: _v0,
    showPlus: _v1
  }) => (0, _v1.jsxs)(_v16.Box, {
    as: "span",
    display: "inline-flex",
    alignItems: "center",
    children: [_v0, _v1 && (0, _v1.jsx)(_v16.Box, {
      as: "span",
      display: "inline-flex",
      alignItems: "center",
      marginBottom: "2px",
      children: "+"
    })]
  });
  var _v85 = _v0.i(0),
    _v86 = _v0.i(0);
  let _v87 = (0, _v2.createContext)(!1);
  var _v88 = _v0.i(0);
  function _v89({
    isOpen: _v0,
    onAcknowledge: _v1,
    children: _v2
  }) {
    return _v0 ? (0, _v1.jsx)(_v87.Provider, {
      value: !0,
      children: (0, _v1.jsx)(_v88.AnnouncementPopover, {
        isOpen: _v0,
        anchorWithinChildren: !0,
        onAcknowledge: _v1,
        placement: "top-start",
        offset: [0, 8],
        badge: (0, _v1.jsx)(_v56.Badge, {
          variant: "new",
          size: "sm",
          children: (0, _v1.jsx)(_v22.Text, {
            color: "text-primary",
            variant: "heading-2xs",
            children: (0, _v12.translate)({
              singular: "New",
              dictionary: {
                es: {
                  singular: "Nuevo"
                },
                "de-DE": {
                  singular: "Neu"
                },
                "fr-FR": {
                  singular: "Nouveau"
                },
                "ja-JP": {
                  singular: "新規作成"
                },
                "ko-KR": {
                  singular: "신규"
                },
                "pt-BR": {
                  singular: "Novo"
                },
                "zh-CN": {
                  singular: "新"
                }
              }
            })
          })
        }),
        title: (0, _v12.translate)({
          singular: "All your updates, in one place",
          dictionary: {
            es: {
              singular: "Todas tus actualizaciones, en un solo lugar"
            },
            "de-DE": {
              singular: "Alle Ihre Aktualisierungen an einem Ort"
            },
            "fr-FR": {
              singular: "Toutes vos mises à jour, au même endroit"
            },
            "ja-JP": {
              singular: "すべての更新情報を一か所で"
            },
            "ko-KR": {
              singular: "모든 업데이트를 한곳에서 확인하세요"
            },
            "pt-BR": {
              singular: "Todas as suas atualizações, em um só lugar"
            },
            "zh-CN": {
              singular: "所有更新，尽在一处"
            }
          }
        }),
        body: (0, _v12.translate)({
          singular: "See what's new and what's landing next, all filtered by product area.",
          dictionary: {
            es: {
              singular: "Vea qué hay de nuevo y qué llegará a continuación, todo filtrado por área de producto."
            },
            "de-DE": {
              singular: "Sehen Sie, was neu ist und was als Nächstes kommt, gefiltert nach Produktbereich."
            },
            "fr-FR": {
              singular: "Découvrez ce qui est nouveau et ce qui arrive ensuite, le tout filtré par domaine produit."
            },
            "ja-JP": {
              singular: "新着と今後導入予定の項目を、製品領域ごとにフィルタリングしてご覧ください。"
            },
            "ko-KR": {
              singular: "제품 영역별로 필터링된 새로운 소식과 다음 출시 예정 항목을 확인하세요."
            },
            "pt-BR": {
              singular: "Veja o que há de novo e o que será lançado a seguir, tudo filtrado por área de produto."
            },
            "zh-CN": {
              singular: "查看有哪些新内容以及即将推出的功能，全部可按产品领域筛选。"
            }
          }
        }),
        children: _v2
      })
    }) : (0, _v1.jsx)(_v1.Fragment, {
      children: _v2
    });
  }
  let _v90 = () => () => void 0,
    _v91 = () => new URLSearchParams(window.location.search).get("changelog"),
    _v92 = ({
      children: _v0
    }) => (0, _v2.useContext)(_v87) ? (0, _v1.jsx)(_v55.PopoverAnchor, {
      children: _v0
    }) : (0, _v1.jsx)(_v1.Fragment, {
      children: _v0
    }),
    _v93 = ({
      variant: _v0 = "full",
      hideAnnouncementCount: _v1 = !1,
      isMobile: _v2 = !1,
      hideIntroPopover: _v3 = !1
    }) => {
      (0, _v20.useViewer)();
      let _v4 = (0, _v54.useRouter)(),
        {
          acknowledge: _v5,
          showIntro: _v6
        } = function ({
          isMobile: _v0 = !1,
          hideIntroPopover: _v1 = !1
        } = {}) {
          let _v2 = (0, _v54.useRouter)(),
            _v3 = (0, _v13.useOrionSetting)("enable_whats_new_page"),
            _v4 = "/whats-new" === _v2.pathname,
            _v5 = (0, _v86.useIsAnnouncementAcknowledged)("whats_new_intro"),
            {
              acknowledge: _v6,
              isActive: _v7,
              isLoaded: _v8
            } = (0, _v86.useAnnouncement)({
              id: "whats_new_intro",
              isEligible: _v3 && !_v4 && !_v0 && !_v1
            }),
            _v9 = (0, _v2.useRef)(!1);
          return (0, _v2.useEffect)(() => {
            _v3 && _v4 && _v8 && !_v5 && !_v9.current && (_v9.current = !0, _v6());
          }, [_v6, _v5, _v8, _v4, _v3]), {
            acknowledge: _v6,
            showIntro: _v7
          };
        }({
          isMobile: _v2,
          hideIntroPopover: _v3
        }),
        _v7 = _v6 && !_v2 && !_v3,
        _v8 = (0, _v13.useOrionSetting)("enable_whats_new_page"),
        {
          trackWhatsNewModalOpened: _v9
        } = _v70(),
        [_v10, _v11] = (0, _v2.useState)(!1),
        _v12 = (0, _v2.useSyncExternalStore)(_v90, _v91, () => null),
        {
          newAnnouncementsCount: _v13,
          isLoading: _v14
        } = (0, _v8.useChangelog)(),
        _v15 = _v10 || "true" === _v12,
        _v16 = _v8 && "/whats-new" === _v4.pathname;
      (0, _v85.usePicoEffect)(() => "true" === _v12 && (_v9({
        whatsNewModalOpenedManually: !1
      }), !0), [_v12], {
        once: !0
      });
      let _v17 = (0, _v45.useColorModeValue)("darkBlueAlpha.200", "lightBlueAlpha.300"),
        _v18 = !_v1 && !!_v13 && parseInt(_v13.count) > 0,
        _v19 = () => {
          _v11(!0), _v9({
            whatsNewModalOpenedManually: !0
          });
        },
        _v20 = _v0 => {
          ("Enter" === _v0.key || " " === _v0.key) && (_v0.preventDefault(), _v19());
        },
        _v21 = () => {
          let _v0 = new URLSearchParams(window.location.search);
          _v0.delete("changelog");
          let _v1 = _v0.toString(),
            _v2 = _v1 ? `${window.location.pathname}?${_v1}` : window.location.pathname;
          window.history.replaceState(null, "", _v2), _v11(!1);
        },
        _v22 = () => {
          _v6 && _v5(), _v9({
            whatsNewModalOpenedManually: !0
          });
        },
        _v23 = _v0 => _v7 ? (0, _v1.jsx)(_v89, {
          isOpen: !0,
          onAcknowledge: _v5,
          children: _v0
        }) : _v0;
      if (_v14) return (0, _v1.jsx)(_v9.LoadingBlock, {
        style: {
          borderRadius: (0, _v6.rem)(10),
          height: (0, _v6.rem)(28),
          marginBottom: (0, _v6.rem)(20),
          width: "icons" === _v0 ? (0, _v6.rem)(28) : "50%"
        }
      });
      if ("icons" === _v0) {
        let _v0 = (0, _v1.jsx)(_v5.Tooltip, {
          label: (0, _v12.translate)({
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
          children: (0, _v1.jsxs)(_v16.Box, {
            position: "relative",
            width: "max-content",
            children: [(0, _v1.jsx)(_v92, {
              children: (0, _v1.jsx)(_v4.IconButton, {
                "aria-label": (0, _v12.translate)({
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
                icon: _v16 ? (0, _v1.jsx)(_v58, {}) : (0, _v1.jsx)(_v57, {}),
                variant: "tertiary",
                size: "md",
                fontSize: (0, _v6.rem)(24),
                sx: {
                  "> svg": {
                    width: (0, _v6.rem)(24),
                    height: (0, _v6.rem)(24)
                  },
                  ...(_v16 ? {
                    backgroundColor: "button-tertiary-hover",
                    _dark: {
                      backgroundColor: "button-tertiary-hover"
                    }
                  } : {})
                },
                ...(_v8 ? {
                  onClick: () => {
                    _v22(), _v4.push("/whats-new");
                  }
                } : {
                  onClick: _v19,
                  onKeyDown: _v20,
                  "aria-haspopup": "dialog",
                  "aria-expanded": _v15
                })
              })
            }), _v18 && (0, _v1.jsx)(_v56.Badge, {
              variant: "new",
              size: "sm",
              borderRadius: "full",
              position: "absolute",
              top: (0, _v6.rem)(-2),
              right: (0, _v6.rem)(-2),
              minWidth: (0, _v6.rem)(16),
              height: (0, _v6.rem)(16),
              textAlign: "center",
              pointerEvents: "none",
              children: (0, _v1.jsx)(_v84, {
                count: _v13.count,
                showPlus: _v13.showPlus
              })
            })]
          })
        });
        return (0, _v1.jsxs)(_v1.Fragment, {
          children: [_v23(_v0), !_v8 && (0, _v1.jsx)(_v83, {
            isOpen: _v15,
            onClose: _v21
          })]
        });
      }
      let _v24 = _v16 ? (0, _v1.jsx)(_v58, {
        boxSize: "lg"
      }) : (0, _v1.jsx)(_v57, {
        boxSize: "lg"
      });
      return (0, _v1.jsxs)(_v3.Flex, {
        flexDirection: "column",
        gap: 10,
        marginTop: -10,
        children: [_v8 ? _v23((0, _v1.jsx)(_v53.MenuItem, {
          icon: (0, _v1.jsx)(_v92, {
            children: _v24
          }),
          iconSize: "1.5rem",
          label: (0, _v12.translate)({
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
          href: "/whats-new",
          onClick: _v22,
          dataId: "side_nav_whats_new_menu_item",
          active: _v16,
          borderRadius: (0, _v6.rem)(12),
          action: _v18 ? (0, _v1.jsx)(_v56.Badge, {
            variant: "new",
            size: "sm",
            borderRadius: "full",
            minWidth: (0, _v6.rem)(20),
            height: (0, _v6.rem)(20),
            textAlign: "center",
            children: (0, _v1.jsx)(_v84, {
              count: _v13.count,
              showPlus: _v13.showPlus
            })
          }) : void 0
        })) : (0, _v1.jsxs)(_v3.Flex, {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          _hover: {
            backgroundColor: _v17,
            cursor: "pointer"
          },
          borderRadius: "input-sm",
          paddingRight: 3,
          onClick: _v19,
          onKeyDown: _v20,
          "aria-haspopup": "dialog",
          "aria-expanded": _v15,
          children: [(0, _v1.jsx)(_v53.MenuItem, {
            icon: (0, _v1.jsx)(_v57, {
              boxSize: "lg"
            }),
            iconSize: "1.5rem",
            label: (0, _v12.translate)({
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
          }), _v18 && (0, _v1.jsx)(_v56.Badge, {
            variant: "new",
            size: "sm",
            borderRadius: "full",
            minWidth: (0, _v6.rem)(20),
            height: (0, _v6.rem)(20),
            textAlign: "center",
            children: (0, _v1.jsx)(_v84, {
              count: _v13.count,
              showPlus: _v13.showPlus
            })
          })]
        }), !_v8 && (0, _v1.jsx)(_v83, {
          isOpen: _v15,
          onClose: _v21
        })]
      });
    };
  _v0.s(["SideNavFooter", 0, ({
    variant: _v0,
    isMobile: _v1,
    showWatchMenuItem: _v2,
    showWhatsNew: _v3,
    showQuota: _v4,
    isLoadingQuota: _v5,
    quota: _v6,
    onUpgradeClick: _v7,
    hideWhatsNewAnnouncementCount: _v8 = !1,
    hideWhatsNewIntroPopover: _v9 = !1,
    bundlePromo: _v10
  }) => {
    let _v11 = (0, _v2.useContext)(_v52.ViewerContext),
      _v12 = (0, _v13.useOrionSetting)("enable_whats_new_page"),
      {
        trackSidebarNavClicked: _v13
      } = (0, _v15.useWatchTracking)(),
      {
        capabilities: _v14,
        loading: _v15
      } = (0, _v11.useCapability)(["hasSimplifiedEnterpriseAccount"]),
      {
        capabilities: _v16
      } = (0, _v11.useCapability)(["hasWatchButton"], _v11?.teamUser?.ownerId),
      _v17 = _v11?.isSimplifiedSite ?? !1,
      _v18 = !!(_v2 && !_v11?.isEnterpriseSite && !_v17 && !_v14?.hasSimplifiedEnterpriseAccount && _v16.hasWatchButton),
      _v19 = _v12 ? "server" : "local",
      _v20 = _v5 || _v4 && !!_v6.uploadQuota,
      _v21 = _v3 && !_v20,
      _v22 = () => {
        _v13({
          sidebarNavDestination: "watch",
          sidebarNavContext: (0, _v14.deriveCanonicalPage)(new URL(window.location.href), {
            is_team_user: _v11?.user?.isTeamUser ?? !1
          }),
          version: "2"
        });
      };
    return "icons" === _v0 ? (0, _v1.jsxs)(_v3.Flex, {
      direction: "column",
      alignItems: "center",
      gap: 12,
      padding: "0.5rem",
      paddingBottom: 0,
      children: [_v18 && !_v15 && (0, _v1.jsx)(_v5.Tooltip, {
        label: (0, _v12.translate)({
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
        children: (0, _v1.jsx)(_v4.IconButton, {
          as: "a",
          href: "/watch",
          onClick: _v22,
          "aria-label": (0, _v12.translate)({
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
          icon: (0, _v1.jsx)(_v7.WatchPlay, {}),
          variant: "tertiary",
          size: "md",
          fontSize: (0, _v6.rem)(24),
          sx: {
            "> svg": {
              width: (0, _v6.rem)(24),
              height: (0, _v6.rem)(24)
            }
          }
        })
      }), null != _v10 && (0, _v1.jsx)(_v2.Fragment, {
        children: _v10
      }, "bundle-promo"), _v3 && (0, _v1.jsx)(_v8.ChangelogProvider, {
        lastSeenSource: _v19,
        children: (0, _v1.jsx)(_v93, {
          variant: "icons",
          hideAnnouncementCount: _v8,
          isMobile: _v1,
          hideIntroPopover: _v9
        })
      }), _v5 ? (0, _v1.jsx)(_v9.LoadingBlock, {
        style: {
          borderRadius: (0, _v6.rem)(8),
          height: (0, _v6.rem)(40),
          width: (0, _v6.rem)(40)
        }
      }) : _v4 && _v6.uploadQuota ? (0, _v1.jsx)(_v51, {
        isMobile: _v1,
        uploadQuota: _v6.uploadQuota,
        aiCreditsQuota: _v6.aiCreditsQuota,
        showUpgrade: _v6.showUpgrade,
        onUpgradeClick: _v7
      }) : null]
    }) : (0, _v1.jsxs)(_v3.Flex, {
      direction: "column",
      gap: (0, _v6.rem)(16),
      padding: "1rem",
      paddingBottom: _v4 ? "1rem" : _v21 ? (0, _v6.rem)(10) : 0,
      children: [_v18 && (_v15 ? (0, _v1.jsx)(_v9.LoadingBlock, {
        style: {
          borderRadius: (0, _v6.rem)(10),
          height: (0, _v6.rem)(28),
          marginBottom: (0, _v6.rem)(20),
          width: "50%"
        }
      }) : (0, _v1.jsxs)(_v3.Flex, {
        flexDirection: "column",
        gap: 10,
        children: [(0, _v1.jsx)(_v53.MenuItem, {
          icon: (0, _v1.jsx)(_v7.WatchPlay, {}),
          iconSize: (0, _v6.rem)(24),
          label: (0, _v12.translate)({
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
          onClick: _v22
        }), (0, _v1.jsx)(_v10.ResizableSideNav.Divider, {})]
      })), null != _v10 && (0, _v1.jsx)(_v2.Fragment, {
        children: _v10
      }, "bundle-promo"), _v3 && (0, _v1.jsx)(_v8.ChangelogProvider, {
        lastSeenSource: _v19,
        children: (0, _v1.jsx)(_v93, {
          hideAnnouncementCount: _v8,
          isMobile: _v1,
          hideIntroPopover: _v9
        })
      }), _v5 ? (0, _v1.jsx)(_v9.LoadingBlock, {
        style: {
          borderRadius: (0, _v6.rem)(10),
          height: (0, _v6.rem)(60)
        }
      }) : _v4 && _v6.uploadQuota && (0, _v1.jsx)(_v43, {
        isMobile: _v1,
        onUpgradeClick: _v7,
        ..._v6,
        uploadQuota: _v6.uploadQuota,
        showAutoRenewBadge: !0
      })]
    });
  }], 0), _v0.s(["CollapseDrawer", 0, _v0 => (0, _v1.jsx)(_v46.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsxs)("g", {
      fill: "currentColor",
      children: [(0, _v1.jsx)("path", {
        d: "M16.5 9.707a1 1 0 0 0-1.414-1.414l-2.647 2.646a1.5 1.5 0 0 0 0 2.122l2.647 2.646a1 1 0 0 0 1.414-1.414L14.207 12 16.5 9.707Z"
      }), (0, _v1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 3a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4H7Zm10 2h-7v14h7a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2ZM7 5h1v14H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
      })]
    })
  })], 0), _v0.s(["ExpandDrawer", 0, _v0 => (0, _v1.jsx)(_v46.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsxs)("g", {
      fill: "currentColor",
      children: [(0, _v1.jsx)("path", {
        d: "M12.5 9.707a1 1 0 0 1 1.414-1.414l2.647 2.646a1.5 1.5 0 0 1 0 2.122l-2.647 2.646a1 1 0 0 1-1.414-1.414L14.793 12 12.5 9.707Z"
      }), (0, _v1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 3a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4H7Zm10 2h-7v14h7a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2ZM7 5h1v14H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
      })]
    })
  })], 0);
}