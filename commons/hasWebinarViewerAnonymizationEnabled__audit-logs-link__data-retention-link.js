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
    _v17 = _v0.i(0);
  let _v18 = ({
    isWorkspaceSettingsPage: _v0,
    workspaceInternalId: _v1
  }) => {
    let _v2 = (0, _v17.getTranslations)(),
      {
        capabilities: _v3
      } = (0, _v13.useCapability)(["hasWebinarViewerAnonymizationEnabled"], _v0 && _v1 ? _v1 : void 0),
      _v4 = [{
        title: _v2.AuditLogs,
        description: _v2.AuditLogsMenuDescription,
        href: _v0 ? _v16.WORKSPACE_SETTINGS_ROUTES.AUDIT_LOGS : _v16.ORGANIZATION_SETTINGS_ROUTES.AUDIT_LOGS,
        testId: "audit-logs-link"
      }, ...(_v0 ? [{
        title: _v2.DataRetentionPolicies,
        description: _v2.DataRetentionPoliciesDescription,
        href: _v16.WORKSPACE_SETTINGS_ROUTES.DATA_RETENTION,
        testId: "data-retention-link"
      }, {
        title: _v2.ClipExtension,
        description: _v2.ClipExtensionDescription,
        href: _v16.WORKSPACE_SETTINGS_ROUTES.CLIP_EXTENSION,
        testId: "clip-extension-link"
      }, {
        title: _v2.HistoryAndRecovery,
        description: _v2.HistoryAndRecoveryDescription,
        href: _v16.WORKSPACE_SETTINGS_ROUTES.HISTORY_AND_RECOVERY,
        testId: "history-recovery-link"
      }, {
        title: _v2.LegalHolds,
        description: _v2.LegalHoldsDescription,
        href: _v16.WORKSPACE_SETTINGS_ROUTES.LEGAL_HOLDS,
        testId: "legal-holds-link"
      }, {
        title: _v2.DeactivatedFolders,
        description: _v2.DeactivatedFoldersMenuDescription,
        href: _v16.WORKSPACE_SETTINGS_ROUTES.DEACTIVATED_FOLDERS,
        testId: "deactivated-folders-link"
      }, ...(_v3?.hasWebinarViewerAnonymizationEnabled ? [{
        title: _v2.WebinarViewerAnonymization,
        description: _v2.WebinarViewerAnonymizationDescription,
        href: _v16.WORKSPACE_SETTINGS_ROUTES.WEBINAR_VIEWER_ANONYMIZATION,
        testId: "webinar-viewer-anonymization-link"
      }] : [])] : [])];
    return (0, _v1.jsx)(_v14.TeamSettingsPageCategory, {
      title: _v2.ActivityAndDataRetention,
      children: _v4.map(({
        title: _v0,
        description: _v1,
        href: _v2,
        testId: _v3
      }) => (0, _v1.jsx)(_v15.TeamSettingsPageOptionContainer, {
        children: (0, _v1.jsxs)(_v8.Flex, {
          gap: "xl",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          children: [(0, _v1.jsxs)(_v3.Box, {
            children: [(0, _v1.jsx)(_v9.Header, {
              variant: "heading-xs",
              size: "xl",
              children: _v0
            }), (0, _v1.jsx)(_v11.Paragraph, {
              variant: "body-md",
              color: "text-secondary",
              children: _v1
            })]
          }), (0, _v1.jsx)(_v7.default, {
            "data-testid": _v3,
            href: _v2,
            children: (0, _v1.jsx)(_v10.IconButton, {
              as: "span",
              "aria-label": _v1,
              size: "sm",
              variant: "secondary",
              icon: (0, _v1.jsx)(_v12.ChevronRightSmall, {})
            })
          })]
        })
      }, _v0))
    });
  };
  var _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0);
  let _v30 = ({
    isOwner: _v0
  }) => {
    let _v1,
      _v2,
      {
        sendOpenFederatedSearchManageEvent: _v3
      } = (_v1 = (0, _v29.useViewer)(), _v2 = (0, _v2.useMemo)(() => (0, _v26.buildTeamBpContextFromTeamUser)(_v1?.teamUser), [_v1?.teamUser]), {
        sendOpenFederatedSearchManageEvent: () => {
          let _v0 = (0, _v23.default)();
          (0, _v28.sendBpEventWithContexts)("vimeo.open_federated_search_manage", {
            ...(0, _v24.buildActionBpContext)({
              action_type: "click",
              feature: null
            }),
            ...(0, _v25.buildProductAnalyticsBpContext)({
              entity_type: null,
              element: "button",
              location: "workspace",
              feature: "settings",
              product: "collaboration",
              copy: "manage",
              device_type: _v0
            }),
            ...(0, _v27.buildWebBpContext)({
              page_name: "team_management_page",
              path: window.location.pathname
            }),
            ..._v2
          }, 2);
        }
      }),
      _v4 = (0, _v17.getTranslations)();
    return (0, _v1.jsx)(_v14.TeamSettingsPageCategory, {
      title: _v4.API,
      children: (0, _v1.jsxs)(_v15.TeamSettingsPageOptionContainer, {
        children: [(0, _v1.jsxs)(_v8.Flex, {
          justifyContent: "space-between",
          alignItems: "center",
          gap: "75",
          children: [(0, _v1.jsxs)(_v3.Box, {
            children: [(0, _v1.jsx)(_v9.Header, {
              variant: "heading-xs",
              size: "xl",
              as: "h6",
              marginBottom: "50",
              children: _v4.FederatedSearch
            }), (0, _v1.jsx)(_v11.Paragraph, {
              color: "text-secondary",
              variant: "body-md",
              children: _v4.MakeContentOnThisAccountSearchable
            })]
          }), (0, _v1.jsx)(_v21.Button, {
            variant: "secondary",
            size: "sm",
            leftIcon: (0, _v1.jsx)(_v22.PopOut, {}),
            isDisabled: !_v0,
            onClick: () => {
              _v0 && (_v3(), window.open("https://developer.vimeo.com/apps", "_blank"));
            },
            children: _v4.ManageFederatedSearchLabel
          })]
        }), !_v0 && (0, _v1.jsx)(_v19.Alert, {
          size: "sm",
          marginTop: "200",
          children: (0, _v1.jsx)(_v20.AlertDescription, {
            marginTop: "50",
            children: _v4.OnlyTheOrganizationOwnerCanSetUpFederatedSearch
          })
        })]
      })
    });
  };
  var _v31 = _v0.i(0),
    _v32 = _v0.i(0);
  let _v33 = ({
      organizationUuid: _v0,
      organizationInternalId: _v1,
      isWorkspaceSettingsPage: _v2,
      currentUserId: _v3
    }) => !_v2 && _v1 ? (0, _v1.jsx)(_v35, {
      organizationUuid: _v0,
      organizationInternalId: _v1
    }) : (0, _v1.jsx)(_v34, {
      currentUserId: _v3
    }),
    _v34 = ({
      currentUserId: _v0
    }) => {
      let _v1 = (0, _v17.getTranslations)(),
        {
          capabilities: {
            canAccessOrganizationSettings: _v2
          }
        } = (0, _v13.useCapability)(["canAccessOrganizationSettings"], _v0);
      return _v2 ? (0, _v1.jsx)(_v19.Alert, {
        size: "sm",
        marginBottom: 15,
        children: (0, _v1.jsx)(_v20.AlertDescription, {
          mt: "1",
          children: _v1.SecurityFeaturesLikeSSO(_v16.ORGANIZATION_SETTINGS_ROUTES.SECURITY_AND_DATA)
        })
      }) : null;
    },
    _v35 = ({
      organizationUuid: _v0,
      organizationInternalId: _v1
    }) => {
      let _v2 = (0, _v17.getTranslations)(),
        {
          capabilities: {
            teamAllowedIpsEnabled: _v3
          }
        } = (0, _v13.useCapability)(["teamAllowedIpsEnabled"], _v1),
        _v4 = (0, _v2.useMemo)(() => [{
          title: _v2.SingleSignOn,
          description: _v2.ManageYourOrganizationSSO,
          url: _v16.ORGANIZATION_SETTINGS_ROUTES.SSO,
          isEnabled: !0
        }, {
          title: _v2.Allowlist,
          description: _v2.AllowlistDescription,
          url: _v16.ORGANIZATION_SETTINGS_ROUTES.ALLOWLIST,
          isEnabled: !!_v3
        }], [_v2.Allowlist, _v2.AllowlistDescription, _v2.ManageYourOrganizationSSO, _v2.SingleSignOn, _v3]);
      return (0, _v1.jsxs)(_v14.TeamSettingsPageCategory, {
        title: _v2.Authentication,
        children: [_v4.map(_v0 => _v0.isEnabled && (0, _v1.jsx)(_v15.TeamSettingsPageOptionContainer, {
          children: (0, _v1.jsxs)(_v8.Flex, {
            gap: "xl",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            children: [(0, _v1.jsxs)(_v3.Box, {
              children: [(0, _v1.jsx)(_v9.Header, {
                variant: "heading-xs",
                size: "xl",
                children: _v0.title
              }), (0, _v1.jsx)(_v11.Paragraph, {
                variant: "body-md",
                color: "text-secondary",
                children: _v0.description
              })]
            }), (0, _v1.jsx)(_v7.default, {
              href: _v0.url,
              children: (0, _v1.jsx)(_v10.IconButton, {
                as: "span",
                "aria-label": _v0.description,
                size: "sm",
                variant: "secondary",
                icon: (0, _v1.jsx)(_v12.ChevronRightSmall, {})
              })
            })]
          })
        }, _v0.title)), (0, _v1.jsx)(_v31.TeamSettingsSessionDuration, {
          orgUuid: _v0,
          type: "org"
        }), (0, _v1.jsx)(_v32.TeamSettingsForceLogout, {
          orgUuid: _v0,
          type: "org"
        })]
      });
    };
  var _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0);
  let _v44 = ({
    workspaceUuid: _v0
  }) => {
    let [_v1, _v2] = (0, _v2.useState)(!1),
      [_v3, _v4] = (0, _v2.useState)(void 0),
      [_v5, _v6] = (0, _v2.useState)(void 0),
      {
        presets: _v7,
        isLoading: _v8,
        deletePreset: _v9,
        refreshPresets: _v10
      } = (0, _v43.useWatermarkingPresets)({
        ownerId: _v0,
        isModalOpen: _v1,
        sortBy: _v3,
        sortOrder: _v5
      });
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v8.Flex, {
        justifyContent: "space-between",
        alignItems: "center",
        gap: "75",
        children: [(0, _v1.jsxs)(_v3.Box, {
          children: [(0, _v1.jsx)(_v9.Header, {
            variant: "heading-xs",
            size: "xl",
            as: "h6",
            marginBottom: "50",
            children: (0, _v41.translate)({
              singular: "Manage presets",
              dictionary: {
                es: {
                  singular: "Gestionar ajustes predeterminados"
                },
                "de-DE": {
                  singular: "Voreinstellungen verwalten"
                },
                "fr-FR": {
                  singular: "Gérez les préréglages"
                },
                "ja-JP": {
                  singular: "プリセットを管理"
                },
                "ko-KR": {
                  singular: "사전 설정 관리"
                },
                "pt-BR": {
                  singular: "Gerenciar predefinições"
                },
                "zh-CN": {
                  singular: "管理预设"
                }
              }
            })
          }), (0, _v1.jsx)(_v11.Paragraph, {
            color: "text-secondary",
            variant: "body-md",
            children: (0, _v41.translate)({
              singular: "Create and manage watermark presets for your videos",
              dictionary: {
                es: {
                  singular: "Cree y gestione configuraciones predeterminadas de marcas de agua para sus videos."
                },
                "de-DE": {
                  singular: "Erstellen und verwalten Sie die Voreinstellungen für Wasserzeichen für Ihre Videos"
                },
                "fr-FR": {
                  singular: "Créez et gérez des préréglages de filigrane pour vos vidéos"
                },
                "ja-JP": {
                  singular: "動画用のウォーターマークのプリセットを作成・管理"
                },
                "ko-KR": {
                  singular: "동영상의 워터마크 사전 설정 생성 및 관리"
                },
                "pt-BR": {
                  singular: "Crie e gerencie predefinições de marca d'água para seus vídeos"
                },
                "zh-CN": {
                  singular: "为您的视频创建和管理水印预设"
                }
              }
            })
          })]
        }), (0, _v1.jsx)(_v21.Button, {
          variant: "secondary",
          size: "sm",
          onClick: () => _v2(!0),
          children: (0, _v41.translate)({
            singular: "Manage Watermark Presets",
            dictionary: {
              es: {
                singular: "Gestionar configuraciones predeterminadas de marca de agua"
              },
              "de-DE": {
                singular: "Wasserzeichenvoreinstellungen verwalten"
              },
              "fr-FR": {
                singular: "Gérer les préréglages de filigrane"
              },
              "ja-JP": {
                singular: "ウォーターマークのプリセットを管理"
              },
              "ko-KR": {
                singular: "워터마크 사전 설정 관리"
              },
              "pt-BR": {
                singular: "Gerenciar predefinições de marca d'água"
              },
              "zh-CN": {
                singular: "管理水印预设"
              }
            }
          })
        })]
      }), (0, _v1.jsx)(_v42.PresetListModal, {
        isOpen: _v1,
        onClose: () => _v2(!1),
        presets: _v7,
        isLoading: _v8,
        ownerOrWorkspaceId: _v0,
        onDeletePreset: _v9,
        onRefresh: _v10,
        sortBy: _v3,
        sortOrder: _v5,
        onSortChange: (_v0, _v1) => {
          void 0 === _v1 ? (_v4(void 0), _v6(void 0)) : (_v4(_v0), _v6(_v1));
        }
      })]
    });
  };
  var _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0);
  let _v49 = ({
    isWorkspaceSettingsPage: _v0,
    organizationUuid: _v1,
    organizationInternalId: _v2,
    workspaceUuid: _v3
  }) => {
    let _v4 = (0, _v17.getTranslations)(),
      _v5 = (0, _v29.useViewer)(),
      _v6 = _v5?.teamUser,
      _v7 = _v6?.ownerId ?? _v5?.user?.id ?? null,
      {
        capabilities: {
          hasMultipleReviewLinks: _v8,
          hasEnterprise: _v9,
          hasCanUseOverlayWatermarking: _v10
        }
      } = (0, _v13.useCapability)(["hasMultipleReviewLinks", "hasEnterprise", "hasCanUseOverlayWatermarking"], _v7),
      {
        data: _v11
      } = (({
        isWorkspacePage: _v0,
        workspaceUuid: _v1,
        organizationUuid: _v2
      }) => {
        let _v3 = (0, _v45.useGetOrganizationSettings)(() => !_v2 || _v0 ? null : {
            where: {
              orgUuid: _v2
            },
            select: ["prohibitMultipleReviewLinks", "orgProhibitMultipleReviewLinks"]
          }),
          _v4 = (0, _v46.useGetWorkspaceSettings)(() => _v1 ? {
            where: {
              workspaceUuid: _v1
            },
            select: ["prohibitMultipleReviewLinks", "orgProhibitMultipleReviewLinks"]
          } : null);
        return _v0 ? _v4 : _v3;
      })({
        isWorkspacePage: _v0 ?? !0,
        workspaceUuid: _v3,
        organizationUuid: _v1
      }),
      {
        teamSettingsUpdateLoading: _v12,
        onUpdateSetting: _v13
      } = (({
        isWorkspacePage: _v0,
        workspaceUuid: _v1,
        organizationUuid: _v2
      }) => (_v0 ? _v0 => (0, _v48.useUpdateWsSettings)({
        wsUuid: _v0
      }) : _v0 => (0, _v47.useUpdateOrgSettings)({
        orgUuid: _v0
      }))((_v0 ? _v1 : _v2) ?? ""))({
        isWorkspacePage: _v0 ?? !0,
        workspaceUuid: _v3,
        organizationUuid: _v1
      }),
      [_v14, _v15] = (0, _v2.useState)(!1),
      [_v16, _v17] = (0, _v2.useState)(_v11?.prohibitMultipleReviewLinks);
    return (0, _v2.useEffect)(() => {
      _v17(_v11?.prohibitMultipleReviewLinks);
    }, [_v11]), (0, _v1.jsxs)(_v14.TeamSettingsPageCategory, {
      title: _v4.PrivacyAndAccess,
      children: [_v8 && _v9 && (0, _v1.jsx)(_v15.TeamSettingsPageOptionContainer, {
        children: (0, _v1.jsxs)(_v8.Flex, {
          gap: "xl",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          children: [(0, _v1.jsxs)(_v3.Box, {
            children: [(0, _v1.jsx)(_v9.Header, {
              variant: "heading-xs",
              size: "xl",
              children: _v4.ProhibitReviewLinks
            }), (0, _v1.jsx)(_v11.Paragraph, {
              variant: "body-md",
              color: "text-secondary",
              children: _v4.ProhibitReviewLinksDescription
            })]
          }), (0, _v1.jsxs)(_v3.Box, {
            display: "flex",
            alignItems: "center",
            gap: "sm",
            children: [_v0 && _v11?.orgProhibitMultipleReviewLinks && (0, _v1.jsx)(_v38.Tooltip, {
              placement: "top",
              label: _v4.ManagedByOrganization,
              children: (0, _v1.jsx)(_v10.IconButton, {
                "aria-label": _v4.ManagedByOrganization,
                size: "md",
                variant: "tertiary",
                icon: (0, _v1.jsx)(_v39.InfoCircle, {}),
                _hover: {
                  backgroundColor: "transparent !important"
                },
                sx: {
                  svg: {
                    width: (0, _v36.rem)(18),
                    height: (0, _v36.rem)(18)
                  }
                }
              })
            }), (0, _v1.jsx)(_v37.Switch, {
              isChecked: _v16,
              onChange: () => {
                _v16 ? (_v17(!1), _v13({
                  prohibitMultipleReviewLinks: !_v11?.prohibitMultipleReviewLinks
                })) : _v15(!0);
              },
              isDisabled: _v12 || _v0 && _v11?.orgProhibitMultipleReviewLinks
            })]
          })]
        })
      }), (0, _v1.jsx)(_v15.TeamSettingsPageOptionContainer, {
        children: (0, _v1.jsxs)(_v8.Flex, {
          gap: "xl",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          children: [(0, _v1.jsxs)(_v3.Box, {
            children: [(0, _v1.jsx)(_v9.Header, {
              variant: "heading-xs",
              size: "xl",
              children: _v4.PrivacyRestrictions
            }), (0, _v1.jsx)(_v11.Paragraph, {
              variant: "body-md",
              color: "text-secondary",
              children: _v4.PrivacyRestrictionsDescription
            })]
          }), (0, _v1.jsx)(_v7.default, {
            href: _v0 ? _v16.WORKSPACE_SETTINGS_ROUTES.PRIVACY_RESTRICTIONS : _v16.ORGANIZATION_SETTINGS_ROUTES.PRIVACY_RESTRICTIONS,
            children: (0, _v1.jsx)(_v10.IconButton, {
              as: "span",
              "aria-label": _v4.PrivacyRestrictionsDescription,
              size: "sm",
              variant: "secondary",
              icon: (0, _v1.jsx)(_v12.ChevronRightSmall, {})
            })
          })]
        })
      }), !_v8 && (0, _v1.jsx)(_v15.TeamSettingsPageOptionContainer, {
        children: (0, _v1.jsxs)(_v8.Flex, {
          gap: "xl",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          children: [(0, _v1.jsxs)(_v3.Box, {
            children: [(0, _v1.jsx)(_v9.Header, {
              size: "xl",
              variant: "heading-xs",
              children: _v4.ReviewPageSettings
            }), (0, _v1.jsx)(_v11.Paragraph, {
              variant: "body-md",
              color: "text-secondary",
              children: _v4.ReviewPageSettingsDescription
            })]
          }), (0, _v1.jsx)(_v7.default, {
            href: _v0 ? _v16.WORKSPACE_SETTINGS_ROUTES.REVIEW_PAGE_SETTINGS : _v16.ORGANIZATION_SETTINGS_ROUTES.REVIEW_PAGE_SETTINGS,
            children: (0, _v1.jsx)(_v10.IconButton, {
              as: "span",
              "aria-label": _v4.ReviewPageSettingsDescription,
              size: "sm",
              variant: "secondary",
              icon: (0, _v1.jsx)(_v12.ChevronRightSmall, {})
            })
          })]
        })
      }), _v3 && _v10 && (0, _v1.jsx)(_v15.TeamSettingsPageOptionContainer, {
        children: (0, _v1.jsx)(_v44, {
          workspaceUuid: _v3
        })
      }), (0, _v1.jsx)(_v40.ReviewLinkConfirmationModal, {
        isOpen: _v14,
        close: () => {
          _v15(!1), _v17(!1);
        },
        onConfirm: () => {
          _v13({
            prohibitMultipleReviewLinks: !_v11?.prohibitMultipleReviewLinks
          }).then(() => {
            _v17(_v0 => !_v0), _v15(!1);
          });
        },
        confirmationLoading: !!_v12
      })]
    });
  };
  var _v50 = _v0.i(0),
    _v51 = _v0.i(0),
    _v52 = _v0.i(0);
  let _v53 = () => {
    let {
        isOpen: _v0,
        onOpen: _v1,
        onClose: _v2
      } = (0, _v50.useDisclosure)(),
      _v3 = (0, _v17.getTranslations)();
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v14.TeamSettingsPageCategory, {
        title: _v3.Registration,
        children: (0, _v1.jsx)(_v15.TeamSettingsPageOptionContainer, {
          children: (0, _v1.jsxs)(_v8.Flex, {
            gap: "xl",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            children: [(0, _v1.jsxs)(_v3.Box, {
              children: [(0, _v1.jsx)(_v9.Header, {
                variant: "heading-xs",
                size: "xl",
                children: _v3.ExportAllRegistrantData
              }), (0, _v1.jsx)(_v11.Paragraph, {
                variant: "body-md",
                color: "text-secondary",
                children: _v3.ExportAllRegistrantDataDescription
              })]
            }), (0, _v1.jsx)(_v21.Button, {
              size: "sm",
              variant: "secondary",
              leftIcon: (0, _v1.jsx)(_v51.FileExport, {}),
              onClick: _v1,
              children: _v3.ExportData
            })]
          })
        })
      }), (0, _v1.jsx)(_v52.DownloadRegistrantModal, {
        isOpen: _v0,
        onClose: _v2
      })]
    });
  };
  _v0.s(["SecurityAndData", 0, ({
    isWorkspaceSettingsPage: _v0,
    organizationUuid: _v1,
    organizationInternalId: _v2,
    workspaceUuid: _v3,
    workspaceInternalId: _v4
  }) => {
    let _v5 = (0, _v17.getTranslations)(),
      _v6 = (0, _v2.useContext)(_v6.ViewerContext),
      _v7 = _v6?.user?.id === _v6?.teamUser?.ownerId || _v6?.teamUser?.permissionLevel === _v16.PERMISSION_LEVELS.OWNER;
    return (0, _v1.jsxs)(_v3.Box, {
      maxW: _v5.SETTING_PAGES_MAX_WIDTH,
      width: "100%",
      margin: "0 auto",
      children: [(0, _v1.jsx)(_v4.SettingsPageContentHeader, {
        title: _v5.SecurityAndData
      }), (0, _v1.jsx)(_v33, {
        organizationUuid: _v1,
        organizationInternalId: _v2,
        isWorkspaceSettingsPage: _v0,
        currentUserId: _v6?.user?.id
      }), (0, _v1.jsx)(_v18, {
        isWorkspaceSettingsPage: _v0,
        workspaceInternalId: _v4
      }), (0, _v1.jsx)(_v49, {
        isWorkspaceSettingsPage: _v0,
        organizationUuid: _v1,
        organizationInternalId: _v2,
        workspaceUuid: _v3
      }), _v0 && (0, _v1.jsx)(_v30, {
        isOwner: _v7
      }), _v0 && (0, _v1.jsx)(_v53, {})]
    });
  }], 0);
}