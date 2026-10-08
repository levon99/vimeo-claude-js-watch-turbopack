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
  let _v20 = "https://help.vimeo.com/hc/en-us/articles/12426192100113-Video-review-page";
  var _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0);
  function _v28({
    selectedPrivacy: _v0,
    setSelectedPrivacy: _v1,
    setShowActionButtons: _v2,
    isEligibleForUpsell: _v3
  }) {
    let _v4 = [{
        label: _v21.T.TeamOnly,
        value: "team_only",
        description: _v21.T.TeamOnlyPrivacyDescription
      }, {
        label: _v21.T.Everyone,
        value: "everyone",
        description: _v21.T.EveryonePrivacyDescription
      }],
      _v5 = _v0 => _v3 && _v0 == _v4[1].value;
    return (0, _v1.jsx)(_v23.Select, {
      "data-testid": "testid",
      items: _v4,
      value: [_v0],
      onValueChange: _v0 => {
        var _v1;
        let _v2;
        _v5(_v1 = _v0.value[0]) && (_v2 = (0, _v26.buildUpgradePlanUrl)({
          paywallTrigger: "team_review_privacy_upgrade_button",
          paywallLocation: "team_settings",
          paywallFeature: "privacy"
        }, {
          paywall: "1"
        }), (0, _v27.launchLateStagePaywallFromUpgradePlanUrl)(_v2) || window.open(_v2, "_blank", "noopener,noreferrer")), _v3 || (_v1(_v1), _v2(!0));
      },
      placeholder: _v0,
      style: {
        marginTop: "8px"
      },
      size: "sm",
      children: _v0 => {
        let _v1 = _v5(_v0.value);
        return (0, _v1.jsx)(_v23.SelectItem, {
          borderRadius: "subtle",
          height: 68,
          marginTop: 8,
          marginBottom: 8,
          style: {
            width: "327px",
            padding: "8px 8px 8px 16px",
            alignContent: "center",
            maxWidth: "100%",
            overflow: "hidden"
          },
          children: (0, _v1.jsxs)(_v10.Box, {
            children: [(0, _v1.jsxs)(_v12.Text, {
              variant: "body-xl",
              fontSize: (0, _v24.rem)(14),
              fontWeight: "bold",
              lineHeight: "17.64px",
              letterSpacing: "-0.2px",
              align: "left",
              children: [_v0.label, _v1 && (0, _v1.jsx)(_v25.UpgradeBadge, {
                name: "team_review_privacy_upgrade_button",
                location: "team_settings",
                children: _v21.T.Upgrade
              })]
            }), (0, _v1.jsx)(_v12.Text, {
              variant: "body-xl",
              fontWeight: "regular",
              lineHeight: (0, _v24.rem)(20),
              children: _v0.description
            })]
          })
        });
      }
    }, _v0);
  }
  var _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0);
  let _v36 = ({
      isOpen: _v0,
      onClose: _v1,
      onChangePrivacy: _v2,
      privacy: _v3,
      isUpdateLoading: _v4
    }) => (0, _v1.jsxs)(_v29.Modal, {
      isOpen: _v0,
      onClose: _v1,
      children: [(0, _v1.jsx)(_v30.ModalOverlay, {}), (0, _v1.jsxs)(_v31.ModalContent, {
        borderRadius: "button",
        children: [(0, _v1.jsx)(_v33.ModalHeader, {
          fontSize: 18,
          fontWeight: "bold",
          width: 440,
          height: 186,
          padding: "200",
          marginBottom: "0",
          children: _v21.T.ChangePrivacyForAll
        }), (0, _v1.jsx)(_v32.ModalCloseButton, {
          paddingTop: "50"
        }), (0, _v1.jsxs)(_v34.ModalBody, {
          fontSize: "14px",
          textAlign: "left",
          paddingLeft: "1rem",
          children: [_v21.T.ChangePrivacyModalText(_v3), (0, _v1.jsx)(_v10.Box, {
            as: "a",
            href: _v20,
            color: "blue.500",
            target: "_blank",
            rel: "noopener noreferrer",
            marginLeft: "50",
            paddingTop: "0",
            children: _v21.T.LearnMore
          })]
        }), (0, _v1.jsxs)(_v35.ModalFooter, {
          paddingTop: "0",
          paddingBottom: "200",
          sx: {
            border: "none"
          },
          children: [(0, _v1.jsx)(_v16.Button, {
            variant: "secondary",
            onClick: _v1,
            children: _v21.T.Cancel
          }), (0, _v1.jsx)(_v16.Button, {
            isLoading: _v4,
            type: "submit",
            onClick: _v2,
            children: _v21.T.changePrivacy
          })]
        })]
      })]
    }),
    _v37 = ({
      ownerId: _v0,
      initialPrivacy: _v1,
      isEligibleForUpsell: _v2
    }) => {
      let [_v3, _v4] = (0, _v2.useState)(!1),
        [_v5, _v6] = (0, _v2.useState)(!1),
        [_v7, _v8] = (0, _v2.useState)(!1),
        [_v9, _v10] = (0, _v2.useState)(!1),
        [_v11, _v12] = (0, _v2.useState)(!1),
        _v13 = (0, _v17.useToast)(),
        _v14 = (0, _v9.useRouter)(),
        [_v15, _v16] = (0, _v2.useState)(_v1),
        {
          teamSettingsUpdateError: _v17,
          teamSettingsUpdateLoading: _v18,
          onUpdateSetting: _v19
        } = (0, _v19.useUpdateTeamSettings)({
          userId: _v0
        }),
        _v20 = () => {
          _v19({
            reviewPagePreferences: {
              privacy: _v15,
              applyToAll: _v9
            }
          }), _v8(!0);
        },
        _v21 = () => {
          _v6(!1);
        };
      return (0, _v2.useEffect)(() => {
        let _v0;
        _v17 ? _v0 = _v21.T.SomethingWentWrong : !_v18 && _v7 && (_v0 = _v21.T.Saved), _v7 && !_v18 && _v13({
          duration: 0,
          title: _v0,
          status: _v17 ? "error" : "success",
          onCloseComplete: () => {
            _v8(!1), _v12(!1), _v17 || _v14.push("/manage/team/settings"), _v21();
          }
        });
      }, [_v14, _v8, _v17, _v18, _v13, _v7]), (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsxs)(_v10.Box, {
          children: [(0, _v1.jsx)(_v10.Box, {
            paddingBottom: "300",
            children: (0, _v1.jsx)(_v11.Header, {
              size: "xl",
              children: _v21.T.ReviewPagePrivacy
            })
          }), (0, _v1.jsxs)(_v10.Box, {
            children: [(0, _v1.jsxs)(_v18.Paragraph, {
              size: "md",
              children: [_v21.T.SetTheDefaultPrivacyOfYour, (0, _v1.jsx)(_v10.Box, {
                as: "a",
                marginLeft: "50",
                color: "blue.500",
                href: _v20,
                target: "_blank",
                rel: "noopener noreferrer",
                children: _v21.T.ReviewPages
              })]
            }), (0, _v1.jsx)(_v10.Box, {
              mt: 8,
              width: "327px",
              children: (0, _v1.jsx)(_v28, {
                selectedPrivacy: (0, _v22.getPrivacyText)(_v15),
                setSelectedPrivacy: _v16,
                setShowActionButtons: _v4,
                isEligibleForUpsell: _v2
              })
            }), _v3 && (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsx)(_v15.Flex, {
                mt: 16,
                children: (0, _v1.jsx)(_v14.Checkbox, {
                  id: "review-page-privacy-settings-checkbox",
                  checked: _v9,
                  onChange: () => {
                    _v10(_v0 => !_v0);
                  },
                  children: (0, _v1.jsx)(_v12.Text, {
                    variant: "body-xl",
                    fontSize: "14px",
                    children: _v21.T.ApplyToAllExistingVideos
                  })
                })
              }), (0, _v1.jsxs)(_v13.HStack, {
                mt: 16,
                children: [(0, _v1.jsx)(_v16.Button, {
                  variant: "secondary",
                  size: "sm",
                  onClick: () => {
                    _v16(_v1), _v4(!1), _v10(!1);
                  },
                  children: _v21.T.Cancel
                }), (0, _v1.jsx)(_v16.Button, {
                  type: "submit",
                  isLoading: _v11,
                  size: "sm",
                  onClick: () => {
                    _v9 ? _v6(!0) : (_v12(!0), _v20());
                  },
                  children: _v21.T.SaveEdit
                })]
              })]
            })]
          })]
        }), (0, _v1.jsx)(_v36, {
          isOpen: _v5,
          onClose: _v21,
          privacy: (0, _v22.getPrivacyText)(_v15),
          onChangePrivacy: _v20,
          isUpdateLoading: _v18
        })]
      });
    },
    _v38 = () => {
      let _v0 = (0, _v8.useViewer)(),
        {
          fetchTeamInfo: _v1
        } = (0, _v2.useContext)(_v6.ManageTeamDispatchCtx),
        {
          teamInfo: _v2,
          isTeamInfoLoading: _v3
        } = (0, _v2.useContext)(_v6.ManageTeamStateCtx),
        _v4 = (0, _v22.isAccountEligibleForUpsell)(_v2.owner.account),
        _v5 = _v2.teamData.ownerId;
      (0, _v2.useEffect)(() => {
        _v0?.user && _v3 && (async () => {
          _v1(!0);
        })();
      }, [_v0?.user, _v3]);
      let {
          teamSettingsResult: _v6
        } = (0, _v5.useGetTeamSettings)({
          userId: _v5,
          settings: ["reviewPagePreferences"]
        }),
        _v7 = _v6?.reviewPagePreferences?.privacy;
      return _v3 || !_v7 ? (0, _v1.jsx)(_v4.LoadSpinner, {}) : (0, _v1.jsx)(_v37, {
        ownerId: _v5,
        initialPrivacy: _v7,
        isEligibleForUpsell: _v4
      });
    };
  (0, _v3.withPageSetup)(() => ({
    props: {
      hasThemeSupport: !0
    }
  }), {
    requireLogin: !0,
    inlineViewer: !0,
    noIndex: !0
  }), _v38.getLayout = _v7.getTeamSettingsPageLayout, _v0.s(["__N_SSP", 0, !0, "default", 0, _v38], 0);
}