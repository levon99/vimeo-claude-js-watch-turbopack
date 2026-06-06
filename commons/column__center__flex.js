{
  "use strict";

  var _v1,
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
  let _v37 = ({
    isMobile: _v0,
    quota: _v1,
    showZeroCreditsMessage: _v2,
    isWorkspaceAdminUser: _v3
  }) => {
    let _v4 = (0, _v34.useLocale)(),
      _v5 = _v1?.remaining ?? null,
      _v6 = _v1?.balances ?? null,
      _v7 = Number.isFinite(Number(_v5)) ? Number(_v5).toLocaleString() : _v5;
    return (0, _v2.jsxs)(_v6.Flex, {
      gap: "sm",
      flexDirection: "column",
      paddingX: "md",
      paddingY: "sm",
      children: [(0, _v2.jsxs)(_v6.Flex, {
        flexDirection: "column",
        justifyContent: "center",
        gap: "sm",
        children: [(0, _v2.jsxs)(_v27.Text, {
          as: "div",
          display: "flex",
          variant: "heading-2xs",
          alignItems: "center",
          children: [(0, _v16.translate)({
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
          }), _v5 && _v5 > 0 ? (0, _v2.jsxs)(_v28.Popover, {
            placement: _v0 ? "top" : "right",
            children: [(0, _v2.jsx)(_v30.PopoverTrigger, {
              children: (0, _v2.jsx)(_v6.Flex, {
                height: "xs",
                width: "xs",
                cursor: "pointer",
                justifyContent: "center",
                alignItems: "center",
                children: (0, _v2.jsx)(_v33.InfoCircle, {
                  height: "2xs",
                  width: "2xs"
                })
              })
            }), (0, _v2.jsx)(_v29.PopoverContent, {
              children: (0, _v2.jsx)(_v5.Box, {
                children: _v1?.resetDate ? _v6?.length ? (0, _v2.jsxs)(_v2.Fragment, {
                  children: [_v6.map((_v0, _v1) => {
                    if (_v0.expirationDate) return (0, _v2.jsxs)(_v31.HStack, {
                      gap: "4px",
                      children: [(0, _v2.jsx)(_v32.VimeoCoin, {
                        h: "16px",
                        w: "16px",
                        color: "text-primary"
                      }), (0, _v2.jsx)(_v27.Text, {
                        variant: "body-md",
                        children: (0, _v36.renderAiCreditsExpirationDate)(_v0.remaining || 0, _v4, new Date(_v0.expirationDate))
                      })]
                    }, `ai-credit-balance-${_v1}`);
                  }), (0, _v2.jsx)(_v5.Box, {
                    margin: "4px 0",
                    children: (0, _v2.jsx)("hr", {})
                  }), (0, _v2.jsx)(_v27.Text, {
                    variant: "body-md",
                    children: (0, _v16.translate)({
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
                }) : (0, _v2.jsx)(_v27.Text, {
                  variant: "body-md",
                  children: (0, _v16.translate)({
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
                }) : (0, _v2.jsx)(_v27.Text, {
                  variant: "body-md",
                  children: (0, _v16.translate)({
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
        }), !_v2 && (0, _v2.jsxs)(_v6.Flex, {
          gap: "xs",
          children: [(0, _v2.jsx)(_v32.VimeoCoin, {
            h: "16px",
            w: "16px",
            color: "text-secondary"
          }), (0, _v2.jsx)(_v27.Text, {
            variant: "body-sm",
            textAlign: "left",
            color: "text-secondary",
            display: "flex",
            alignItems: "center",
            marginBottom: 0,
            children: (0, _v16.translate)({
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
      }), (0, _v2.jsx)(_v5.Box, {
        children: (0, _v2.jsx)(_v27.Text, {
          as: "div",
          variant: "body-xs",
          color: "text-secondary",
          children: (0, _v2.jsx)(_v35.AiCreditsRemainingUpsellMessage, {
            quotaRemaining: _v5,
            location: "side_nav",
            showZeroCreditsMessage: _v2,
            isWorkspaceAdminUser: _v3
          })
        })
      })]
    });
  };
  var _v38 = _v0.i(0),
    _v39 = _v0.i(0);
  function _v40() {
    return (_v40 = Object.assign.bind()).apply(null, arguments);
  }
  let _v41 = function (_v0) {
      return _v3.createElement("svg", _v40({
        width: 14,
        height: 10,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, _v0), _v1 || (_v1 = _v3.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9.416 4.155a3.735 3.735 0 00-6.127 3.26.466.466 0 01-.463.518H.483A.467.467 0 01.018 7.5 7.003 7.003 0 017 0a7.003 7.003 0 016.982 7.5.467.467 0 01-.465.433h-2.343a.468.468 0 01-.464-.518 3.715 3.715 0 00-.484-2.294c-.24.557-.682 1.544-1.114 2.33-.305.554-.618 1.01-.854 1.205a2.102 2.102 0 01-2.957-.281 2.102 2.102 0 01.282-2.957c.237-.195.744-.416 1.346-.61.848-.275 1.894-.521 2.487-.653zm-7.368-.658A6.036 6.036 0 00.933 7h1.4c0-.98.303-1.89.82-2.642l-1.105-.861zM11.667 7h1.4a6.036 6.036 0 00-1.115-3.503l-1.105.861c.517.751.82 1.662.82 2.642zm-.312-4.222A6.053 6.053 0 007.467.95v1.405a4.65 4.65 0 012.776 1.29l1.112-.868zM6.533.95a6.053 6.053 0 00-3.888 1.827l1.112.868a4.65 4.65 0 012.776-1.29V.951zM9.19 5.163c-.574.134-1.331.325-1.973.532-.46.149-.858.294-1.038.443a1.167 1.167 0 001.486 1.799c.18-.15.397-.512.63-.936.325-.59.656-1.3.895-1.838z",
        fill: "#B6C0CC"
      })));
    },
    _v42 = ({
      isMobile: _v0,
      onUpgradeClick: _v1,
      quota: _v2,
      showTotal: _v3,
      showUpgrade: _v4,
      isWorkspaceAdminUser: _v5
    }) => {
      let _v6 = _v2?.used ?? null,
        _v7 = _v2?.available ?? null,
        _v8 = _v2?.remaining ?? null;
      return (0, _v2.jsx)(_v39.QuotaMeter, {
        isMobile: _v0,
        onUpgradeClick: _v1,
        showTotal: _v3,
        showUpgrade: _v4,
        quotaAvailable: null,
        quotaUsed: null,
        totalUsed: _v6,
        totalAvailable: _v7,
        quotaPeriod: null,
        lifetimeUnit: _v38.QUOTA_UNITS.SIZE,
        periodicUnit: null,
        resetDate: _v2?.resetDate ?? "",
        isWorkspaceAdminUser: _v5,
        totalRemaining: _v8,
        showProgressBar: !_v5,
        hideQuotaTooltip: !1,
        showZeroCreditsMessage: !1,
        limitLabel: (0, _v16.translate)({
          singular: "Bandwidth",
          dictionary: {
            es: {
              singular: "Ancho de banda"
            },
            "de-DE": {
              singular: "Bandbreite"
            },
            "fr-FR": {
              singular: "Bande passante"
            },
            "ja-JP": {
              singular: "帯域幅"
            },
            "ko-KR": {
              singular: "대역폭"
            },
            "pt-BR": {
              singular: "Largura de banda"
            },
            "zh-CN": {
              singular: "带宽"
            }
          }
        }),
        showBandwidthVariant: !0,
        icon: (0, _v2.jsx)(_v41, {})
      });
    },
    _v43 = ({
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
      return _v6 && _v6 > 0 ? (0, _v2.jsx)(_v39.QuotaMeter, {
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
  var _v44 = _v0.i(0),
    _v45 = _v0.i(0);
  let _v46 = ({
    isMobile: _v0,
    onUpgradeClick: _v1,
    uploadQuota: _v2,
    aiCreditsQuota: _v3,
    drmLicensesQuota: _v4,
    showTotal: _v5,
    showUpgrade: _v6,
    bandwidthQuota: _v7
  }) => {
    let _v8 = (0, _v25.useViewer)(),
      _v9 = _v8?.user?.account === "enterprise",
      _v10 = (0, _v19.useIsStaff)(),
      {
        capabilities: _v11
      } = (0, _v15.useCapability)(["canViewDrmQuota"]),
      {
        canViewDrmQuota: _v12
      } = _v11,
      {
        isWorkspaceAdminUser: _v13
      } = (() => {
        let _v0 = (0, _v25.useViewer)(),
          {
            data: _v1
          } = (0, _v44.useGetMePreferences)({
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
      _v14 = _v3 && (_v9 || _v13) && (0 === _v3.remaining || void 0 !== _v3.limit && Number.isFinite(_v3.limit) && _v3.used === _v3.limit),
      _v15 = _v8?.user?.id ?? null,
      _v16 = (0, _v24.useStorageLimitLocking)({
        userId: _v15
      }),
      _v17 = _v16.isEnabled,
      _v18 = (0, _v23.shouldFetchColdStorageVideoFallback)(_v8),
      {
        data: _v19
      } = (0, _v22.useGetUserVideos)(() => !_v17 && _v15 && _v18 ? {
        where: {
          userId: _v15
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
      _v20 = _v17 ? _v16.lockedVideoCount > 0 : _v18 && (_v19?.total ?? 0) > 0,
      {
        assignment: _v21,
        isEppoSDKInitialized: _v22
      } = (0, _v21.useEppoAssignment)({
        flagKey: "display-bandwidth-cx-meter",
        subject: {
          key: _v8?.user?.id ?? "",
          keyType: _v20.SubjectKeyTypes.TOGGLE_FOR_ALL_SUBJECTS
        },
        defaultAssignment: !1
      });
    return (0, _v2.jsxs)(_v5.Box, {
      background: "surface",
      borderRadius: "lg",
      paddingY: "sm",
      children: [(0, _v2.jsx)(_v45.UploadQuotaMeter, {
        isMobile: _v0,
        onUpgradeClick: _v1,
        quota: _v2,
        showTotal: _v5,
        showUpgrade: _v6 && !_v10,
        isWorkspaceAdminUser: _v13,
        showColdStorageWarning: _v20
      }), _v7 && _v21 && _v22 && (0, _v2.jsx)(_v42, {
        isMobile: _v0,
        quota: _v7,
        showTotal: _v5,
        showUpgrade: !1,
        isWorkspaceAdminUser: _v13
      }), _v3 ? _v9 || _v13 ? (0, _v2.jsx)(_v26.AiCreditsQuotaMeter, {
        isMobile: _v0,
        onUpgradeClick: _v1,
        quota: _v3,
        showTotal: _v5,
        showUpgrade: _v6 && !_v10,
        showZeroCreditsMessage: _v14,
        isWorkspaceAdminUser: _v13
      }) : (0, _v2.jsx)(_v37, {
        isMobile: _v0,
        quota: _v3,
        showZeroCreditsMessage: _v14,
        isWorkspaceAdminUser: _v13
      }) : null, _v12 && _v4 ? (0, _v2.jsx)(_v43, {
        isMobile: _v0,
        onUpgradeClick: () => void 0,
        quota: _v4,
        showTotal: _v5,
        showUpgrade: !1,
        isWorkspaceAdminUser: _v13
      }) : null]
    });
  };
  var _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0),
    _v52 = _v0.i(0);
  let _v53 = _v0 => (0, _v2.jsx)(_v52.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v2.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M17.351 2.064A1 1 0 0 1 18 3v14a1 1 0 0 1-1.753.658c-.613-.701-1.699-1.375-3.188-1.872A14.56 14.56 0 0 0 11 15.271v3.97a2.76 2.76 0 0 1-5.359.928l-.002-.007-2.01-5.76A5 5 0 0 1 6 5h1.832a18.77 18.77 0 0 0 2.07-.112 15.426 15.426 0 0 0 3.157-.673c1.49-.497 2.575-1.17 3.188-1.872a1 1 0 0 1 1.104-.278ZM9 6.968A21.14 21.14 0 0 1 7.832 7H6a3 3 0 1 0 0 6h1.832c.394 0 .784.01 1.168.032V6.968Zm2 6.275V6.757c.958-.151 1.862-.37 2.692-.646.84-.28 1.62-.626 2.308-1.035v9.848a11.91 11.91 0 0 0-2.308-1.035A16.807 16.807 0 0 0 11 13.243Zm-2 1.793A19.107 19.107 0 0 0 7.832 15H5.955l1.57 4.496v.003A.76.76 0 0 0 9 19.24v-4.204Zm10.057-8.199a1 1 0 0 1 1.276-.61 4.001 4.001 0 0 1 0 7.545 1 1 0 1 1-.666-1.886 2.001 2.001 0 0 0 0-3.772 1 1 0 0 1-.61-1.277Z",
      fill: "currentColor"
    })
  });
  var _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0),
    _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v61 = _v0.i(0),
    _v62 = _v0.i(0),
    _v63 = _v0.i(0),
    _v64 = _v0.i(0),
    _v65 = _v0.i(0);
  let _v66 = () => {
    let _v0 = (0, _v65.usePico)(),
      _v1 = (0, _v3.useCallback)(_v0 => null !== _v0 && (_v0.track("whats_new_modal_opened", {
        whats_new_modal_opened_manually: _v0.whatsNewModalOpenedManually
      }), !0), [_v0]),
      _v2 = (0, _v3.useCallback)(_v0 => null !== _v0 && (_v0.track("whats_new_modal_primary_cta_clicked", {
        whats_new_modal_announcement_name: _v0.whatsNewModalAnnouncementName,
        whats_new_modal_announcement_title: _v0.whatsNewModalAnnouncementTitle,
        whats_new_modal_button_url: _v0.whatsNewModalButtonUrl
      }), !0), [_v0]),
      _v3 = (0, _v3.useCallback)(_v0 => null !== _v0 && (_v0.track("whats_new_modal_secondary_cta_clicked", {
        whats_new_modal_announcement_name: _v0.whatsNewModalAnnouncementName,
        whats_new_modal_announcement_title: _v0.whatsNewModalAnnouncementTitle,
        whats_new_modal_button_url: _v0.whatsNewModalButtonUrl
      }), !0), [_v0]);
    return {
      trackWhatsNewModalOpened: _v1,
      trackWhatsNewModalPrimaryCtaClicked: _v2,
      trackWhatsNewModalSecondaryCtaClicked: _v3,
      trackWhatsNewModalAnnouncementScrolledTo: (0, _v3.useCallback)(_v0 => null !== _v0 && (_v0.track("whats_new_modal_announcement_scrolled_to", {
        whats_new_modal_announcement_name: _v0.whatsNewModalAnnouncementName,
        whats_new_modal_announcement_title: _v0.whatsNewModalAnnouncementTitle
      }), !0), [_v0]),
      trackWhatsNewModalAnnouncementRead: (0, _v3.useCallback)(_v0 => null !== _v0 && (_v0.track("whats_new_modal_announcement_read", {
        whats_new_modal_announcement_name: _v0.whatsNewModalAnnouncementName,
        whats_new_modal_announcement_title: _v0.whatsNewModalAnnouncementTitle
      }), !0), [_v0])
    };
  };
  var _v67 = _v0.i(0),
    _v68 = _v0.i(0),
    _v69 = _v0.i(0),
    _v70 = _v0.i(0),
    _v71 = _v0.i(0),
    _v72 = _v0.i(0);
  let _v73 = ({
    announcement: _v0,
    onPrimaryCtaClick: _v1,
    onSecondaryCtaClick: _v2,
    locale: _v3,
    bodyRef: _v4
  }) => (0, _v2.jsxs)(_v6.Flex, {
    flexDirection: "column",
    gap: "2",
    justifyContent: "center",
    paddingTop: "6",
    paddingBottom: "6",
    borderBottom: "1px solid var(--vimeo-colors-stroke)",
    children: [(0, _v2.jsx)(_v74, {
      announcement: _v0
    }), (0, _v2.jsx)(_v27.Text, {
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
    }), (0, _v2.jsx)(_v71.Header, {
      as: "h3",
      size: "md",
      fontWeight: "semibold",
      children: _v0.title
    }), (0, _v2.jsx)("div", {
      ref: _v4,
      children: (0, _v2.jsx)(_v69.Paragraph, {
        variant: "body-sm",
        children: _v0.description
      })
    }), (0, _v2.jsxs)(_v6.Flex, {
      display: "flex",
      justifyContent: "flex-end",
      gap: "8px",
      children: [_v0.blogPostUrl && (0, _v2.jsx)(_v68.Button, {
        as: "a",
        href: _v0.blogPostUrl,
        target: "_blank",
        variant: "secondary",
        size: "sm",
        onClick: _v2,
        children: (0, _v16.translate)({
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
      }), _v0.ctaUrl && (0, _v2.jsx)(_v68.Button, {
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
  function _v74({
    announcement: _v0
  }) {
    let _v1 = _v0.imageUrl,
      _v2 = _v0.clipId && _v0.clipEmbedUrl;
    return (0, _v2.jsx)(_v2.Fragment, {
      children: _v1 ? (0, _v2.jsx)(_v75, {
        title: _v0.title,
        imageUrl: _v0.imageUrl
      }) : _v2 ? (0, _v2.jsx)(_v76, {
        title: _v0.title,
        clipEmbedUrl: _v0.clipEmbedUrl
      }) : null
    });
  }
  function _v75({
    title: _v0,
    imageUrl: _v1
  }) {
    return (0, _v2.jsx)(_v5.Box, {
      position: "relative",
      width: "100%",
      paddingBottom: "56.25%",
      children: (0, _v2.jsx)(_v70.Image, {
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
  function _v76({
    title: _v0,
    clipEmbedUrl: _v1
  }) {
    return (0, _v2.jsx)(_v6.Flex, {
      aspectRatio: 16 / 9,
      borderRadius: (0, _v9.rem)(12),
      overflow: "hidden",
      children: (0, _v2.jsx)(_v72.EmbedPlayer, {
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
  var _v77 = _v0.i(0),
    _v78 = _v0.i(0),
    _v79 = _v0.i(0),
    _v80 = _v0.i(0),
    _v81 = _v0.i(0),
    _v82 = _v0.i(0);
  let _v83 = (_v0, _v1) => {
      let {
          actionContextOverrides: _v2,
          productAnalyticsContextOverrides: _v3,
          webContextOverrides: _v4
        } = _v1 || {},
        _v5 = (0, _v79.buildActionBpContext)({
          action_type: _v2?.action_type || "click",
          feature: _v2?.feature || null
        }),
        _v6 = (0, _v82.buildThirdPartyIntegrationBpContext)({
          integration_id: null,
          integration_name: null,
          is_partner: !1
        }),
        _v7 = (0, _v78.buildProductAnalyticsBpContext)({
          entity_type: _v3?.entity_type || "modal",
          element: _v3?.element || "button",
          feature: _v3?.feature || "whats_new",
          location: _v3?.location || "modal",
          product: _v3?.product || "web_onboarding",
          copy: _v3?.copy || null,
          device_type: (0, _v77.default)(),
          scrolling_percentage: _v3?.scrolling_percentage || null,
          modal_name: _v3?.modal_name || "whats_new_modal"
        }),
        _v8 = (0, _v81.buildWebBpContext)({
          page_name: _v4?.page_name || "changelog",
          path: (_v4?.path, window.location.pathname)
        }),
        _v9 = (0, _v80.buildTeamBpContextFromTeamUser)(_v0?.teamUser);
      return {
        ..._v5,
        ..._v7,
        ..._v8,
        ..._v9,
        ..._v6
      };
    },
    _v84 = _v0 => {
      if (_v0.current) {
        let _v0 = _v0.current.scrollHeight,
          _v1 = _v0.current.clientHeight,
          _v2 = _v0 && _v1 ? _v0 - _v1 : 0;
        if (_v2 > 0) return Math.round(_v0.current.scrollTop / _v2 * 100);
      }
      return 0;
    };
  function _v85({
    announcement: _v0,
    viewer: _v1,
    scrollRoot: _v2,
    isModalOpen: _v3,
    isFirst: _v4
  }) {
    let _v5 = (0, _v3.useRef)(null),
      _v6 = (0, _v3.useRef)(null),
      {
        trackWhatsNewModalPrimaryCtaClicked: _v7,
        trackWhatsNewModalSecondaryCtaClicked: _v8,
        trackWhatsNewModalAnnouncementScrolledTo: _v9,
        trackWhatsNewModalAnnouncementRead: _v10
      } = _v66(),
      _v11 = (0, _v3.useRef)(!1),
      _v12 = (0, _v67.useOnScreen)(_v5, {
        root: _v2.current,
        threshold: .5
      }),
      _v13 = (0, _v3.useRef)(!1),
      _v14 = (0, _v3.useRef)(!1),
      _v15 = (0, _v67.useOnScreen)(_v6, {
        root: _v2.current,
        threshold: 0
      });
    (0, _v3.useEffect)(() => {
      _v3 || (_v13.current = !1, _v14.current = !1);
    }, [_v3]), (0, _v3.useEffect)(() => {
      if (_v12 && !_v11.current) {
        var _v0, _v1;
        let _v0;
        _v0 = _v83(_v1, {
          productAnalyticsContextOverrides: {
            scrolling_percentage: _v84(_v2)
          }
        }), _v1 = {
          feature_name: _v0.name,
          publish_date: _v0.startDate,
          release_type: _v0.announcementType,
          announcement_header: _v0.title
        }, _v0 = new _v4.Event("vimeo.announcement_impression", 3, _v1), _v4.BigPictureClient.sendEventWithContexts(_v0, {
          ..._v0,
          view_context: new _v4.EventContext("view_context", 7, {
            view_type: "impression",
            is_empty_state: !1,
            feature: null
          })
        }), _v11.current = !0;
      }
    }, [_v12, _v0, _v11, _v2, _v1]), (0, _v3.useEffect)(() => {
      _v15 && !_v13.current && _v3 && !_v4 && _v9({
        whatsNewModalAnnouncementName: _v0.name,
        whatsNewModalAnnouncementTitle: _v0.title
      }) && (_v13.current = !0);
    }, [_v15, _v3, _v4, _v0, _v9]), (0, _v3.useEffect)(() => {
      if (!_v15 || _v14.current || !_v3) return;
      let _v0 = setTimeout(() => {
        _v10({
          whatsNewModalAnnouncementName: _v0.name,
          whatsNewModalAnnouncementTitle: _v0.title
        }) && (_v14.current = !0);
      }, 0);
      return () => clearTimeout(_v0);
    }, [_v15, _v3, _v0, _v10]);
    let _v16 = (0, _v3.useMemo)(() => _v83(_v1, {
        productAnalyticsContextOverrides: {
          location: "modal",
          copy: _v0.ctaText,
          scrolling_percentage: _v84(_v2)
        }
      }), [_v1, _v0.ctaText, _v2]),
      _v17 = (0, _v3.useMemo)(() => _v83(_v1, {
        productAnalyticsContextOverrides: {
          location: "modal",
          copy: "Learn more",
          scrolling_percentage: _v84(_v2)
        }
      }), [_v1, _v2]);
    return (0, _v2.jsx)(_v64.Card, {
      borderRadius: "none",
      boxShadow: "none",
      ref: _v5,
      children: (0, _v2.jsx)(_v73, {
        announcement: _v0,
        onPrimaryCtaClick: () => {
          var _v0;
          let _v1;
          _v0 = {
            feature_name: _v0.name,
            publish_date: _v0.startDate,
            release_type: _v0.announcementType,
            announcemnt_header: _v0.title
          }, _v1 = new _v4.Event("vimeo.select_primary_cta", 1, _v0), _v4.BigPictureClient.sendEventWithContexts(_v1, _v16), _v7({
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
          }, _v1 = new _v4.Event("vimeo.select_secondery_cta", 1, _v0), _v4.BigPictureClient.sendEventWithContexts(_v1, _v17), _v8({
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
  let _v86 = ({
    isLoadingMore: _v0,
    onLoadMore: _v1,
    rootRef: _v2
  }) => {
    let _v3 = (0, _v3.useRef)(null),
      _v4 = (0, _v67.useOnScreen)(_v3, {
        root: _v2?.current,
        threshold: .1
      });
    return (0, _v3.useEffect)(() => {
      _v4 && !_v0 && _v1();
    }, [_v0, _v4, _v1]), (0, _v2.jsx)(_v64.Card, {
      padding: "6",
      borderRadius: "none",
      boxShadow: "none",
      ref: _v3,
      children: (0, _v2.jsx)(_v63.Skeleton, {
        width: "100%",
        aspectRatio: "16/9"
      })
    }, "skeleton");
  };
  function _v87({
    isOpen: _v0,
    onClose: _v1
  }) {
    let _v2 = (0, _v25.useViewer)(),
      {
        isLoadingMore: _v3,
        isDone: _v4,
        size: _v5,
        setSize: _v6,
        setUserLastSeenAnnouncement: _v7,
        announcementsList: _v8
      } = (0, _v12.useChangelog)(),
      _v9 = (0, _v3.useRef)(null);
    (0, _v3.useEffect)(() => {
      let _v0 = new URL(window.location.href),
        _v1 = new URLSearchParams(_v0.search);
      if (_v0 && "true" !== _v1.get("changelog")) {
        _v1.set("changelog", "true");
        let _v0 = `${_v0.pathname}?${_v1.toString()}`;
        window.history.replaceState(null, "", _v0);
      }
    }, [_v0]);
    let _v10 = (0, _v3.useMemo)(() => 0 === _v8.length ? null : new Date(_v8[0].releaseDate), [_v8]),
      _v11 = (0, _v3.useMemo)(() => _v83(_v2, {
        productAnalyticsContextOverrides: {
          location: "modal",
          copy: "x"
        }
      }), [_v2]),
      _v12 = (0, _v3.useCallback)(() => {
        if (_v9.current && (_v9.current.scrollHeight && _v9.current.clientHeight ? _v9.current.scrollHeight - _v9.current.clientHeight : 0) > 0) {
          var _v0;
          let _v0;
          _v0 = _v83(_v2, {
            productAnalyticsContextOverrides: {
              location: "modal",
              copy: null,
              scrolling_percentage: _v84(_v9)
            },
            actionContextOverrides: {
              action_type: "scroll"
            }
          }), _v0 = new _v4.Event("vimeo.scroll_in_modal", 1, {
            announcemnt_header: null,
            publish_date: null,
            release_type: null,
            feature_name: null
          }), _v4.BigPictureClient.sendEventWithContexts(_v0, _v0);
        }
      }, [_v9, _v2]),
      _v13 = (0, _v3.useMemo)(() => (0, _v54.default)(() => _v12(), 100), [_v12]);
    return (0, _v3.useEffect)(() => {
      _v0 && _v8.length > 0 && _v10 && _v7(_v10.toISOString());
    }, [_v0, _v10, _v8, _v7]), (0, _v3.useEffect)(() => {
      let _v0 = new URL(window.location.href),
        _v1 = new URLSearchParams(_v0.search);
      if (_v0 && "true" !== _v1.get("changelog")) {
        _v1.set("changelog", "true");
        let _v0 = `${_v0.pathname}?${_v1.toString()}`;
        window.history.replaceState(null, "", _v0);
      }
    }, [_v0]), (0, _v2.jsxs)(_v55.Modal, {
      isOpen: _v0,
      onClose: () => {
        let _v0;
        _v1(), _v0 = new _v4.Event("vimeo.dismiss_modal", 1, {
          announcemnt_header: null,
          publish_date: null,
          release_type: null,
          feature_name: null
        }), _v4.BigPictureClient.sendEventWithContexts(_v0, _v11);
      },
      scrollBehavior: "inside",
      children: [(0, _v2.jsx)(_v56.ModalOverlay, {}), (0, _v2.jsxs)(_v57.ModalContent, {
        maxWidth: (0, _v9.rem)(660),
        maxHeight: (0, _v9.rem)(560),
        children: [(0, _v2.jsx)(_v58.ModalHeader, {
          children: (0, _v16.translate)({
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
        }), (0, _v2.jsx)(_v61.ModalCloseButton, {}), (0, _v2.jsx)(_v59.ModalBody, {
          ref: _v9,
          onScroll: _v13,
          children: (0, _v2.jsxs)(_v62.Stack, {
            gap: "0",
            children: [0 === _v8.length && (0, _v2.jsx)(_v63.Skeleton, {
              width: (0, _v9.rem)(660),
              aspectRatio: "16/9"
            }), _v8.map((_v0, _v1) => (0, _v2.jsx)(_v85, {
              announcement: _v0,
              viewer: _v2,
              scrollRoot: _v9,
              isModalOpen: _v0,
              isFirst: 0 === _v1
            }, _v1)), !_v4 && _v8.length > 0 && (0, _v2.jsx)(_v86, {
              isLoadingMore: _v3,
              onLoadMore: () => _v6(_v5 + 1),
              rootRef: _v9
            })]
          })
        }), (0, _v2.jsx)(_v60.ModalFooter, {})]
      })]
    });
  }
  let _v88 = ({
    count: _v0,
    showPlus: _v1
  }) => (0, _v2.jsxs)(_v5.Box, {
    as: "span",
    display: "inline-flex",
    alignItems: "center",
    children: [_v0, _v1 && (0, _v2.jsx)(_v5.Box, {
      as: "span",
      display: "inline-flex",
      alignItems: "center",
      marginBottom: "2px",
      children: "+"
    })]
  });
  var _v89 = _v0.i(0);
  let _v90 = () => {
      let _v0 = _v83((0, _v25.useViewer)(), {
          productAnalyticsContextOverrides: {
            copy: "whats new",
            location: "side_nav"
          },
          webContextOverrides: {
            page_name: "logged_in_home_page"
          }
        }),
        {
          trackWhatsNewModalOpened: _v1
        } = _v66(),
        _v2 = new URLSearchParams(window.location.search).get("changelog"),
        _v3 = (0, _v3.useRef)(_v2),
        [_v4, _v5] = (0, _v3.useState)("true" === _v2),
        {
          newAnnouncementsCount: _v6,
          isLoading: _v7
        } = (0, _v12.useChangelog)();
      (0, _v89.usePicoEffect)(() => {
        "true" === _v3.current && _v1({
          whatsNewModalOpenedManually: !1
        });
      }, [], {
        once: !0
      });
      let _v8 = (0, _v8.useColorModeValue)("darkBlueAlpha.200", "lightBlueAlpha.300"),
        _v9 = !!_v6 && parseInt(_v6.count) > 0,
        _v10 = () => {
          _v5(!0), (({
            contexts: _v0
          }) => {
            let _v1 = new _v4.Event("vimeo.content_navigation", -1, {});
            _v4.BigPictureClient.sendEventWithContexts(_v1, _v0);
          })({
            contexts: _v0
          }), _v1({
            whatsNewModalOpenedManually: !0
          });
        };
      return _v7 ? (0, _v2.jsx)(_v14.LoadingBlock, {
        style: {
          borderRadius: (0, _v9.rem)(10),
          height: (0, _v9.rem)(28),
          marginBottom: (0, _v9.rem)(20),
          width: "50%"
        }
      }) : (0, _v2.jsxs)(_v6.Flex, {
        flexDirection: "column",
        gap: 10,
        marginTop: -10,
        children: [(0, _v2.jsxs)(_v6.Flex, {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          _hover: {
            backgroundColor: _v8,
            cursor: "pointer"
          },
          borderRadius: "input-sm",
          paddingRight: 3,
          onClick: _v10,
          onKeyDown: _v0 => {
            ("Enter" === _v0.key || " " === _v0.key) && (_v0.preventDefault(), _v10());
          },
          "aria-haspopup": "dialog",
          "aria-expanded": _v4,
          children: [(0, _v2.jsx)(_v50.MenuItem, {
            icon: (0, _v2.jsx)(_v53, {
              boxSize: "lg"
            }),
            iconSize: "1.5rem",
            label: (0, _v16.translate)({
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
          }), _v9 && (0, _v2.jsx)(_v51.Badge, {
            variant: "new",
            size: "sm",
            borderRadius: "full",
            minWidth: (0, _v9.rem)(20),
            height: (0, _v9.rem)(20),
            textAlign: "center",
            children: (0, _v2.jsx)(_v88, {
              count: _v6.count,
              showPlus: _v6.showPlus
            })
          })]
        }), (0, _v2.jsx)(_v13.ResizableSideNav.Divider, {}), (0, _v2.jsx)(_v87, {
          isOpen: _v4,
          onClose: () => {
            let _v0 = new URLSearchParams(window.location.search);
            _v0.delete("changelog");
            let _v1 = _v0.toString(),
              _v2 = _v1 ? `${window.location.pathname}?${_v1}` : window.location.pathname;
            window.history.replaceState(null, "", _v2), _v5(!1);
          }
        })]
      });
    },
    _v91 = ({
      hide: _v0,
      onClick: _v1,
      loading: _v2
    }) => _v0 ? (0, _v2.jsx)(_v2.Fragment, {}) : _v2 ? (0, _v2.jsx)(_v14.LoadingBlock, {
      style: {
        borderRadius: (0, _v9.rem)(10),
        height: (0, _v9.rem)(28),
        marginBottom: (0, _v9.rem)(20),
        width: "50%"
      }
    }) : (0, _v2.jsxs)(_v6.Flex, {
      flexDirection: "column",
      gap: 10,
      children: [(0, _v2.jsx)(_v50.MenuItem, {
        icon: (0, _v2.jsx)(_v11.WatchPlay, {}),
        label: (0, _v16.translate)({
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
        onClick: _v1
      }), (0, _v2.jsx)(_v13.ResizableSideNav.Divider, {})]
    });
  _v0.s(["WayfinderSideNav", 0, ({
    children: _v0,
    dragConstraint: _v1,
    isOpen: _v2,
    isFixed: _v3,
    isMobile: _v4,
    onClose: _v5,
    onResize: _v6,
    onUpgradeClick: _v7,
    page: _v8 = "",
    showWatchMenuItem: _v9 = !1,
    teamOwnerId: _v10,
    hideQuotaMeter: _v11 = !1,
    hideWhatsNew: _v12 = !1
  }) => {
    let _v13 = (0, _v3.useContext)(_v49.ViewerContext),
      {
        trackSidebarNavClicked: _v14
      } = (0, _v18.useWatchTracking)(),
      {
        capabilities: _v15,
        loading: _v16
      } = (0, _v15.useCapability)(["hasSimplifiedEnterpriseAccount"]),
      {
        capabilities: _v17
      } = (0, _v15.useCapability)(["hasTotalStorageCap", "canUpgrade"], _v13?.teamUser?.ownerId),
      _v18 = _v13?.user?.id === _v10,
      _v19 = _v13?.teamUser?.plainTextPermissionLevel === "Admin",
      {
        uploadQuota: _v20,
        aiCreditsQuota: _v21,
        drmLicensesQuota: _v22,
        isLoading: _v23,
        bandwidthQuota: _v24
      } = (0, _v47.useUserQuotaApi)(),
      _v25 = (_v18 || _v19) && _v20 && !_v11,
      _v26 = (0, _v8.useColorModeValue)("darkBlueAlpha.200", "lightBlueAlpha.300"),
      _v27 = _v13?.isSimplifiedSite ?? !1;
    return (0, _v2.jsxs)(_v13.ResizableSideNav, {
      active: _v2,
      dragConstraint: _v1,
      isFixed: _v3,
      onResize: (_v0, {
        current: _v1
      }) => _v6?.(_v1),
      role: "group",
      children: [(0, _v2.jsx)(_v13.ResizableSideNav.Header, {
        children: (0, _v2.jsxs)(_v5.Box, {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: `${(0, _v9.rem)(16)} ${(0, _v9.rem)(12)} ${(0, _v9.rem)(8)} ${(0, _v9.rem)(28)}`,
          children: [(0, _v2.jsx)(_v48.default, {
            href: _v13?.user ? "/home" : "/",
            width: (0, _v9.rem)(78),
            height: (0, _v9.rem)(27),
            title: _v27 ? (0, _v16.translate)({
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
            }) : (0, _v16.translate)({
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
          }), (0, _v2.jsx)(_v7.IconButton, {
            "aria-label": (0, _v16.translate)({
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
            icon: (0, _v2.jsx)(_v10.ChevronLeft, {}),
            variant: "tertiary",
            size: "sm",
            width: "sm",
            padding: `${(0, _v9.rem)(3)} !important`,
            onClick: () => {
              _v4.BigPictureClient.sendEvent(new _v4.Event("vimeo.click", 148, {
                copy: null,
                feature: "video_library_side_nav",
                location: "sidebar",
                name: "collapse_side_nav",
                page: _v8,
                target: null,
                target_path: null,
                type: "general",
                click_type: null,
                device_type: null,
                path: window.location.pathname,
                third_party_integration: null
              })), _v5();
            },
            backgroundColor: "transparent",
            sx: {
              "*": {
                fill: _v4 ? "text-primary" : "transparent"
              }
            },
            _hover: {
              backgroundColor: _v26
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
        })
      }), (0, _v2.jsx)(_v13.ResizableSideNav.Body, {
        children: _v0
      }), (0, _v2.jsx)(_v13.ResizableSideNav.Footer, {
        children: (0, _v2.jsxs)(_v6.Flex, {
          direction: "column",
          gap: 25,
          padding: "1rem",
          paddingBottom: _v25 ? "1rem" : 0,
          children: [(0, _v2.jsx)(_v91, {
            hide: !_v9 || _v13?.isEnterpriseSite || _v27 || _v15?.hasSimplifiedEnterpriseAccount || !_v17.hasWatchButton,
            loading: _v16,
            onClick: () => {
              _v4.BigPictureClient.sendEvent(new _v4.Event("vimeo.click", 148, {
                copy: "watch",
                feature: "watch",
                location: "sidebar",
                name: "click_watch",
                page: _v8,
                target: null,
                type: "general",
                click_type: null,
                device_type: null,
                path: window.location.pathname,
                third_party_integration: null,
                target_path: null
              })), _v14({
                sidebarNavDestination: "watch",
                sidebarNavContext: (0, _v17.deriveCanonicalPage)(new URL(window.location.href), {
                  is_team_user: _v13?.user?.isTeamUser ?? !1
                })
              });
            }
          }), !_v12 && !_v27 && (0, _v2.jsx)(_v12.ChangelogProvider, {
            children: (0, _v2.jsx)(_v90, {})
          }), _v23 ? (0, _v2.jsx)(_v5.Box, {
            marginBottom: (0, _v9.rem)(15),
            padding: `${(0, _v9.rem)(0)} ${(0, _v9.rem)(5)}`,
            children: (0, _v2.jsx)(_v14.LoadingBlock, {
              style: {
                borderRadius: (0, _v9.rem)(10),
                height: (0, _v9.rem)(60)
              }
            })
          }) : (0, _v2.jsx)(_v2.Fragment, {
            children: _v25 && (0, _v2.jsx)(_v5.Box, {
              marginBottom: (0, _v9.rem)(15),
              padding: `${(0, _v9.rem)(0)} ${(0, _v9.rem)(5)}`,
              children: (0, _v2.jsx)(_v46, {
                isMobile: _v4,
                onUpgradeClick: _v7,
                drmLicensesQuota: _v22,
                uploadQuota: _v20,
                aiCreditsQuota: _v21,
                showTotal: _v17.hasTotalStorageCap,
                showUpgrade: _v17.canUpgrade,
                bandwidthQuota: _v24
              })
            })
          })]
        })
      })]
    });
  }], 0);
}