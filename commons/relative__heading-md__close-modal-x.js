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
    _v20 = _v0.i(0);
  let _v21 = ({
    privacyOptionTitle: _v0,
    isOrgLevel: _v1 = !1,
    onClose: _v2
  }) => {
    let _v3 = (0, _v20.getTranslations)(),
      _v4 = () => _v2(!1);
    if (!_v0) return null;
    let _v5 = _v1 ? _v3.PrivacyRestrictionsModalTitleOrg(_v0) : _v3.PrivacyRestrictionsModalTitle(_v0),
      _v6 = _v1 ? _v3.PrivacyRestrictionsModalDescriptionOrg(_v0, _v3.Private) : _v3.PrivacyRestrictionsModalDescription(_v0, _v3.Private);
    return (0, _v1.jsxs)(_v12.Modal, {
      size: "md",
      isOpen: !!_v0,
      onClose: _v4,
      children: [(0, _v1.jsx)(_v18.ModalOverlay, {}), (0, _v1.jsxs)(_v15.ModalContent, {
        children: [(0, _v1.jsxs)(_v17.ModalHeader, {
          position: "relative",
          children: [(0, _v1.jsx)(_v5.Header, {
            variant: "heading-md",
            size: "xl",
            marginRight: "6",
            children: _v5
          }), (0, _v1.jsx)(_v14.ModalCloseButton, {
            id: "close-modal-x",
            onClick: _v4
          })]
        }), (0, _v1.jsx)(_v13.ModalBody, {
          children: (0, _v1.jsx)(_v19.Paragraph, {
            variant: "body-md",
            color: "text-secondary",
            children: _v6
          })
        }), (0, _v1.jsxs)(_v16.ModalFooter, {
          children: [(0, _v1.jsx)(_v11.Button, {
            variant: "secondary",
            onClick: _v4,
            children: _v3.Cancel
          }), (0, _v1.jsx)(_v11.Button, {
            variant: "destructive",
            onClick: () => {
              _v2(!0);
            },
            children: _v3.Confirm
          })]
        })]
      })]
    });
  };
  var _v22 = _v0.i(0);
  let _v23 = ({
    title: _v0,
    children: _v1,
    hasHeader: _v2 = !0
  }) => (0, _v1.jsxs)(_v4.Flex, {
    padding: "300",
    borderRadius: "md",
    backgroundColor: "fill-surface",
    marginBottom: "300",
    flexDirection: "column",
    children: [_v2 ? (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v5.Header, {
        as: "h4",
        variant: "heading-md",
        size: "xl",
        children: _v0
      }), (0, _v1.jsx)(_v22.Divider, {
        borderColor: "stroke",
        marginY: "200"
      })]
    }) : null, _v1]
  });
  var _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0);
  let _v29 = ({
    title: _v0,
    subtitle: _v1,
    infoTooltip: _v2,
    hasToggle: _v3,
    isDisabled: _v4,
    isLoading: _v5,
    value: _v6,
    onChange: _v7,
    tooltip: _v8,
    hasDivider: _v9 = !1,
    dataId: _v10
  }) => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsxs)(_v4.Flex, {
      justifyContent: "space-between",
      alignItems: "center",
      gap: "200",
      children: [(0, _v1.jsxs)(_v3.Box, {
        children: [(0, _v1.jsxs)(_v4.Flex, {
          alignItems: "center",
          children: [(0, _v1.jsx)(_v26.Text, {
            variant: "heading-xs",
            children: _v0
          }), _v2 && (0, _v1.jsx)(_v27.Tooltip, {
            textAlign: "center",
            label: _v2,
            shouldWrapChildren: !0,
            placement: "top",
            maxWidth: (0, _v24.rem)(300),
            children: (0, _v1.jsx)(_v28.InfoCircle, {
              boxSize: "2xs",
              marginLeft: (0, _v24.rem)(5),
              display: "block"
            })
          })]
        }), _v3 && (0, _v1.jsx)(_v26.Text, {
          variant: "body-md",
          color: "text-secondary",
          marginTop: "50",
          children: _v1
        })]
      }), _v3 ? (0, _v1.jsxs)(_v3.Box, {
        children: [_v4 && _v8 && (0, _v1.jsx)(_v27.Tooltip, {
          textAlign: "center",
          label: _v8,
          shouldWrapChildren: !0,
          placement: "top",
          maxWidth: (0, _v24.rem)(200),
          marginRight: (0, _v24.rem)(50),
          children: (0, _v1.jsx)(_v28.InfoCircle, {
            boxSize: "2xs",
            marginRight: (0, _v24.rem)(5)
          })
        }), (0, _v1.jsx)(_v25.Switch, {
          isChecked: _v6,
          onChange: () => _v7(!_v6),
          isDisabled: _v4 || _v5,
          "data-id": _v10
        })]
      }) : (0, _v1.jsx)(_v26.Text, {
        variant: "body-md",
        color: "text-secondary",
        children: _v1
      })]
    }), _v9 && (0, _v1.jsx)(_v22.Divider, {
      borderColor: "stroke",
      marginY: "200"
    })]
  });
  var _v30 = _v0.i(0),
    _v31 = _v0.i(0);
  let _v32 = (0, _v30.default)(() => _v0.A(0), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v33 = () => {
      let _v0 = (0, _v20.getTranslations)(),
        _v1 = (0, _v2.useContext)(_v31.ViewerContext),
        [_v2, _v3] = (0, _v2.useState)(!1);
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsxs)(_v4.Flex, {
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          backgroundColor: "upsell-secondary",
          paddingY: "75",
          paddingX: "100",
          borderRadius: "sm",
          marginBottom: "300",
          gap: "100",
          children: [(0, _v1.jsx)(_v19.Paragraph, {
            size: "sm",
            children: _v0.PrivacyRestrictionsUpsellText
          }), (0, _v1.jsx)(_v11.Button, {
            variant: "upsell",
            size: "xs",
            onClick: () => _v3(!0),
            children: _v0.PrivacyRestrictionsUpsellButton
          })]
        }), _v2 ? (0, _v1.jsx)(_v32, {
          apiUrl: _v1?.apiUrl,
          userConfig: {
            jwt: _v1?.jwt,
            userId: _v1?.user?.id
          },
          templateType: "enterprise",
          onClose: () => _v3(!1),
          modalConfig: {
            mkcCode: "110025"
          },
          tracking: {
            params: {
              feature: "account_level_privacy",
              location: "team_settings",
              page: "/manage/team/settings/privacy-restrictions",
              upsell_name: "account_level_privacy_upsell"
            },
            paywallTracking: {
              paywallTrigger: "privacy_restrictions_enterprise_upgrade_button",
              paywallLocation: "team_settings_privacy",
              paywallType: "popup",
              paywallFeature: "privacy"
            }
          }
        }) : null]
      });
    };
  var _v34 = _v0.i(0);
  let _v35 = "anybody",
    _v36 = "publishToSocialAllowedContributor";
  _v0.s(["PrivacyRestrictions", 0, _v0 => {
    let _v1 = (0, _v20.getTranslations)(),
      _v2 = (0, _v2.useMemo)(() => [{
        adminKey: "publishToSocialAllowedAdmin",
        contributorKey: _v36,
        orgAdminKey: "orgPublishToSocialAllowedAdmin",
        title: _v1.PublishToThirdParty,
        subtitle: _v1.PublishToThirdPartyDescription,
        hasToggle: !0
      }, {
        adminKey: "embedDomainEditEnabledAdmin",
        contributorKey: "embedDomainEditEnabledContributor",
        orgAdminKey: "orgEmbedDomainEditEnabledAdmin",
        title: _v1.UpdateEmbedSettings,
        subtitle: _v1.UpdateEmbedSettingsDescription,
        hasToggle: !0
      }, {
        adminKey: "videoFileLinkAccessEnabledAdmin",
        contributorKey: "videoFileLinkAccessEnabledContributor",
        orgAdminKey: "orgVideoFileLinkAccessEnabledAdmin",
        title: _v1.VideoFileLink,
        subtitle: _v1.VideoFileLinkDescription,
        infoTooltip: _v1.VideoFileLinkTooltip,
        hasToggle: !0
      }], [_v1]),
      [_v3, _v4] = (0, _v2.useState)(null),
      _v5 = (0, _v6.useToast)(),
      {
        preferencesUserId: _v6,
        hasEnterprise: _v7,
        isTeamInfoLoading: _v8,
        teamSettingsResult: _v9,
        teamSettingsLoading: _v10,
        teamSettingsUpdateError: _v11,
        teamSettingsUpdateLoading: _v12,
        splitByRoles: _v13,
        pageTitle: _v14,
        pageDescription: _v15,
        privacySectionTitle: _v16,
        isOrgLevel: _v17 = !1,
        isWsLevel: _v18 = !1,
        onUpdateSetting: _v19,
        isAdminPrivacyDisabledExtra: _v20,
        getAdminPrivacyTooltipExtra: _v21,
        isAdminSharingOptionDisabledExtra: _v22,
        getAdminSharingOptionTooltipExtra: _v23
      } = _v0,
      _v24 = _v0 => {
        _v5({
          duration: _v34.NOTIFICATION_DURATION,
          title: _v0
        });
      },
      {
        data: _v25
      } = (0, _v7.useGetUserPreferences)(() => _v6 ? {
        select: [_v34.PREF_PUBLIC_PRIVACY_DISABLED],
        where: {
          userId: _v6
        }
      } : null),
      _v26 = [{
        key: "nobody",
        title: _v1.Private,
        subtitle: _v1.PrivateIsAlwaysAvailable,
        hasToggle: !1
      }, {
        key: "team",
        title: _v1.AnyoneAtCompany,
        subtitle: _v1.AnyoneAtCompanyDescription,
        hasToggle: !0
      }, {
        key: "unlisted",
        title: _v1.Unlisted,
        subtitle: _v1.UnlistedDescription,
        hasToggle: !0
      }, {
        key: "password",
        title: _v1.PasswordProtected,
        subtitle: _v1.PasswordProtectedDescription,
        hasToggle: !0
      }, {
        key: "disable",
        title: _v1.HideFromVimeo,
        subtitle: _v1.HideFromVimeoDescription,
        hasToggle: !0
      }, {
        key: _v35,
        title: _v1.Public,
        subtitle: _v1.PublicDescription,
        hasToggle: !0
      }],
      _v27 = _v8 || _v10,
      {
        handleRolePrivacyChangeAdmin: _v28,
        handleRolePrivacyChangeContributor: _v29,
        privacyStateAdmin: _v30,
        privacyStateContributor: _v31
      } = (({
        isLoading: _v0,
        isWsLevel: _v1 = !1,
        teamSettingsUpdateError: _v2,
        teamSettingsResult: _v3,
        showToast: _v4,
        onUpdateSetting: _v5
      }) => {
        let _v6 = (0, _v20.getTranslations)(),
          [_v7, _v8] = (0, _v2.useState)(null),
          [_v9, _v10] = (0, _v2.useState)(null),
          _v11 = (0, _v2.useRef)(null);
        (0, _v2.useEffect)(() => {
          _v2 && _v11.current && (_v4(_v6.SomethingWentWrong), _v11.current.allowedPrivaciesAdmin && _v8(_v11.current.allowedPrivaciesAdmin), _v11.current.allowedPrivaciesContributor && _v10(_v11.current.allowedPrivaciesContributor), _v11.current = null);
        }, [_v2, _v4, _v6.SomethingWentWrong]), (0, _v2.useEffect)(() => {
          !_v0 && _v3 && _v3.allowedPrivaciesAdmin && _v3.allowedPrivaciesContributor && (_v8(_v3.allowedPrivaciesAdmin), _v10(_v3.allowedPrivaciesContributor));
        }, [_v0, _v3]);
        let _v12 = _v7 && _v9;
        return {
          handleRolePrivacyChangeAdmin: (_v0, _v1) => {
            if (!_v12) return;
            let _v2 = _v1 ? _v7.concat(_v0) : _v7.filter(_v0 => _v0 != _v0);
            _v11.current = {
              allowedPrivaciesAdmin: _v7
            };
            let _v3 = {
                allowedPrivaciesAdmin: _v2
              },
              _v4 = null;
            _v1 || (_v3.allowedPrivaciesContributor = _v4 = _v9.filter(_v0 => _v0 != _v0), _v11.current.allowedPrivaciesContributor = _v9), _v5(_v3), _v8(_v2), _v4 && _v10(_v4);
          },
          handleRolePrivacyChangeContributor: (_v0, _v1) => {
            if (!_v12) return;
            if (_v1 && !_v7.includes(_v0)) return void _v4(_v1 ? _v6.PrivacyOptionIsDisabledForWorkspaceAdmins : _v6.PrivacyOptionIsDisabled);
            let _v2 = _v1 ? _v9.concat(_v0) : _v9.filter(_v0 => _v0 != _v0);
            _v11.current = {
              allowedPrivaciesContributor: _v9
            }, _v5({
              allowedPrivaciesContributor: _v2
            }), _v10(_v2);
          },
          privacyStateAdmin: _v7,
          privacyStateContributor: _v9
        };
      })({
        isLoading: _v27,
        isWsLevel: _v18,
        teamSettingsUpdateError: _v11,
        teamSettingsResult: _v9,
        showToast: _v24,
        onUpdateSetting: _v19
      }),
      {
        handleSharingOptionChangeAdmin: _v32,
        handleSharingOptionChangeContributor: _v33,
        sharingState: _v34
      } = (({
        isLoading: _v0,
        teamSettingsUpdateError: _v1,
        teamSettingsResult: _v2,
        showToast: _v3,
        onUpdateSetting: _v4
      }) => {
        let _v5 = (0, _v20.getTranslations)(),
          [_v6, _v7] = (0, _v2.useState)(null),
          _v8 = (0, _v2.useRef)(null);
        (0, _v2.useEffect)(() => {
          if (_v1 && _v8.current && _v6) {
            _v3(_v5.SomethingWentWrong);
            let _v0 = {};
            Object.keys(_v8.current).forEach(_v0 => {
              _v0[_v0] = _v8.current?.[_v0];
            }), _v7({
              ..._v6,
              ..._v0
            }), _v8.current = null;
          }
        }, [_v1, _v3, _v5.SomethingWentWrong, _v6]), (0, _v2.useEffect)(() => {
          !_v0 && _v2 && _v2.hasOwnProperty("publishToSocialAllowedAdmin") && _v2.hasOwnProperty("publishToSocialAllowedContributor") && _v2.hasOwnProperty("embedDomainEditEnabledAdmin") && _v2.hasOwnProperty("embedDomainEditEnabledContributor") && _v7({
            publishToSocialAllowedAdmin: _v2.publishToSocialAllowedAdmin,
            publishToSocialAllowedContributor: _v2.publishToSocialAllowedContributor,
            embedDomainEditEnabledAdmin: _v2.embedDomainEditEnabledAdmin,
            embedDomainEditEnabledContributor: _v2.embedDomainEditEnabledContributor,
            videoFileLinkAccessEnabledAdmin: _v2.videoFileLinkAccessEnabledAdmin,
            videoFileLinkAccessEnabledContributor: _v2.videoFileLinkAccessEnabledContributor
          });
        }, [_v0, _v2]);
        let _v9 = !!_v6;
        return {
          handleSharingOptionChangeAdmin: (_v0, _v1) => {
            if (!_v9) return;
            let _v2 = _v0.adminKey,
              _v3 = _v0.contributorKey;
            _v8.current = {
              [_v2]: _v6[_v2]
            };
            let _v4 = {
              [_v2]: _v1
            };
            _v1 || (_v8.current[_v3] = _v6[_v3], _v4[_v3] = _v1), _v4(_v4), _v7({
              ..._v6,
              ..._v4
            });
          },
          handleSharingOptionChangeContributor: (_v0, _v1) => {
            if (!_v9) return;
            if (_v1 && !_v6[_v0.adminKey]) return void _v3(_v5.SharingOptionIsDisabled);
            let _v2 = _v0.contributorKey;
            _v8.current = {
              [_v2]: _v6[_v2]
            }, _v4({
              [_v2]: _v1
            }), _v7({
              ..._v6,
              [_v2]: _v1
            });
          },
          sharingState: _v6
        };
      })({
        isLoading: _v27,
        teamSettingsUpdateError: _v11,
        teamSettingsResult: _v9,
        showToast: _v24,
        onUpdateSetting: _v19
      }),
      _v35 = !_v27 && _v30 && _v31 && _v34,
      _v36 = _v25?.[_v34.PREF_PUBLIC_PRIVACY_DISABLED],
      _v37 = _v0 => !!(!_v34 || _v22?.(_v0)) || !_v7 && _v0.contributorKey !== _v36 || !_v34[_v0.adminKey];
    return (0, _v1.jsxs)(_v3.Box, {
      maxWidth: _v10.SETTING_PAGES_MAX_WIDTH,
      width: "100%",
      margin: "0 auto",
      marginBottom: "500",
      children: [(0, _v1.jsx)(_v8.SettingsPageContentHeader, {
        title: _v14,
        description: _v15
      }), _v35 ? (0, _v1.jsxs)(_v1.Fragment, {
        children: [!_v7 && (0, _v1.jsx)(_v33, {}), (0, _v1.jsxs)(_v23, {
          title: _v18 ? _v1.WorkspaceAdmins : _v1.AdminsAndOwner,
          hasHeader: _v13,
          children: [(0, _v1.jsxs)(_v3.Box, {
            children: [(0, _v1.jsx)(_v5.Header, {
              as: "h6",
              variant: "heading-sm",
              size: "xl",
              paddingBottom: "75",
              marginBottom: "75",
              children: _v16 ?? _v1.Privacy
            }), (0, _v1.jsx)(_v4.Flex, {
              flexDirection: "column",
              children: _v26.map(_v0 => {
                var _v1, _v2;
                let _v3;
                return (0, _v1.jsx)(_v29, {
                  title: _v0.title,
                  subtitle: _v0.subtitle,
                  hasToggle: _v0.hasToggle,
                  value: _v30.includes(_v0.key),
                  onChange: _v0 => {
                    var _v1, _v2;
                    return _v1 = _v0.key, _v2 = _v0.title, void (_v0 ? _v28(_v1, _v0) : _v4({
                      key: _v1,
                      displayTitle: _v2
                    }));
                  },
                  isDisabled: (_v1 = _v0.key, !!_v20?.(_v1) || !_v7 || _v1 === _v35 && !!_v36),
                  isLoading: _v12,
                  tooltip: (_v2 = _v0.key, (_v3 = _v21?.(_v2)) || (_v2 === _v35 && _v36 ? _v1.PublicPrivacyCantBeUsed(_v34.PUBLIC_PRIVACY_CANT_BE_USED_AT_DOMAIN) : void 0)),
                  hasDivider: !0,
                  dataId: `privacy-restriction-admin-${_v0.key}`
                }, _v0.key);
              })
            })]
          }), (0, _v1.jsxs)(_v3.Box, {
            children: [(0, _v1.jsx)(_v5.Header, {
              as: "h6",
              variant: "heading-sm",
              size: "xl",
              paddingBottom: "75",
              marginBottom: "75",
              children: _v1.Sharing
            }), (0, _v1.jsx)(_v4.Flex, {
              flexDirection: "column",
              gap: "75",
              children: _v2.map((_v0, _v1) => {
                let _v2 = _v1 + 1 === _v2.length;
                return (0, _v1.jsx)(_v29, {
                  title: _v0.title,
                  subtitle: _v0.subtitle,
                  infoTooltip: _v0.infoTooltip,
                  hasToggle: _v0.hasToggle,
                  value: _v34[_v0.adminKey],
                  onChange: _v0 => _v32(_v0, _v0),
                  isDisabled: !_v7 || !!_v22?.(_v0),
                  isLoading: _v12,
                  tooltip: _v23?.(_v0),
                  hasDivider: !_v2,
                  dataId: _v0.adminKey
                }, _v0.adminKey);
              })
            })]
          })]
        }), _v13 ? (0, _v1.jsxs)(_v23, {
          title: _v1.Contributors,
          children: [(0, _v1.jsxs)(_v3.Box, {
            children: [(0, _v1.jsx)(_v5.Header, {
              as: "h6",
              variant: "heading-sm",
              size: "xl",
              paddingBottom: "75",
              marginBottom: "75",
              children: _v16 ?? _v1.Privacy
            }), (0, _v1.jsx)(_v4.Flex, {
              flexDirection: "column",
              children: _v26.map(_v0 => {
                var _v1, _v2;
                return (0, _v1.jsx)(_v29, {
                  title: _v0.title,
                  subtitle: _v0.subtitle,
                  hasToggle: _v0.hasToggle,
                  value: _v31.includes(_v0.key),
                  onChange: _v0 => _v29(_v0.key, _v0),
                  isDisabled: (_v1 = _v0.key, !!(!_v30 || 0 > _v30.indexOf(_v1)) || _v1 === _v35 && !!_v36 || !_v7 && _v1 !== _v35),
                  isLoading: _v12,
                  tooltip: (_v2 = _v0.key) === _v35 && _v36 ? _v1.PublicPrivacyCantBeUsed(_v34.PUBLIC_PRIVACY_CANT_BE_USED_AT_DOMAIN) : _v30 && 0 > _v30.indexOf(_v2) ? _v18 ? _v1.PrivacyOptionIsDisabledForWorkspaceAdmins : _v1.PrivacyOptionIsDisabled : void 0,
                  hasDivider: !0,
                  dataId: `privacy-restriction-contributor-${_v0.key}`
                }, _v0.key);
              })
            })]
          }), (0, _v1.jsxs)(_v3.Box, {
            children: [(0, _v1.jsx)(_v5.Header, {
              as: "h6",
              variant: "heading-sm",
              size: "xl",
              paddingBottom: "75",
              marginBottom: "75",
              children: _v1.Sharing
            }), (0, _v1.jsx)(_v4.Flex, {
              flexDirection: "column",
              gap: "75",
              children: _v2.map((_v0, _v1) => {
                let _v2 = _v1 + 1 === _v2.length;
                return (0, _v1.jsx)(_v29, {
                  title: _v0.title,
                  subtitle: _v0.subtitle,
                  infoTooltip: _v0.infoTooltip,
                  hasToggle: _v0.hasToggle,
                  value: _v34[_v0.contributorKey],
                  onChange: _v0 => _v33(_v0, _v0),
                  isDisabled: _v37(_v0),
                  isLoading: _v12,
                  tooltip: (_v0 => {
                    if (_v7 || _v0.contributorKey === _v36) return _v22?.(_v0) || _v37(_v0) ? _v1.SharingOptionIsDisabled : void 0;
                  })(_v0),
                  hasDivider: !_v2,
                  dataId: _v0.contributorKey
                }, _v0.contributorKey);
              })
            })]
          })]
        }) : null]
      }) : (0, _v1.jsx)(_v9.LoadSpinner, {}), (0, _v1.jsx)(_v21, {
        privacyOptionTitle: _v3?.displayTitle,
        isOrgLevel: _v17,
        onClose: _v0 => {
          _v3 && _v0 && (_v28(_v3.key, !1), _v24(_v1.ChangesSaved)), _v4(null);
        }
      })]
    });
  }], 0);
}