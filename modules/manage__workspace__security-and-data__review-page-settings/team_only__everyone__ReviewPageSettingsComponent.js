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
    _v15 = _v0.i(0);
  let _v16 = (_v0, _v1) => _v1?.privacy === "team_only" && "everyone" === _v0,
    _v17 = [{
      value: "team_only",
      label: _v15.T.TeamOnly,
      description: _v15.T.TeamOnlyPrivacyDescription
    }, {
      value: "everyone",
      label: _v15.T.Everyone,
      description: _v15.T.EveryonePrivacyDescription
    }];
  _v0.s(["ReviewPageSettingsComponent", 0, ({
    redirectPath: _v0,
    teamSettingsResult: _v1,
    teamSettingsUpdateError: _v2,
    teamSettingsUpdateLoading: _v3,
    onUpdateSetting: _v4,
    showApplyToAll: _v5 = !0
  }) => {
    let _v6 = _v1?.reviewPagePreferences?.privacy || "team_only",
      _v7 = _v1?.orgReviewPagePreferences,
      [_v8, _v9] = (0, _v3.useState)(!1),
      [_v10, _v11] = (0, _v3.useState)(!1),
      [_v12, _v13] = (0, _v3.useState)(!1),
      [_v14, _v15] = (0, _v3.useState)(!1),
      [_v16, _v17] = (0, _v3.useState)(_v6),
      _v18 = (0, _v11.useToast)(),
      _v19 = (0, _v2.useRouter)();
    return (0, _v3.useEffect)(() => {
      _v14 && !_v3 && _v18({
        duration: 0,
        title: _v2 ? _v15.T.SomethingWentWrong : _v15.T.Saved,
        status: _v2 ? "error" : "success",
        onCloseComplete: () => {
          _v15(!1), _v13(!1), _v2 || _v19.push(_v0);
        }
      });
    }, [_v2, _v3, _v14, _v18, _v19, _v0]), (0, _v1.jsxs)(_v4.Box, {
      children: [(0, _v1.jsx)(_v4.Box, {
        paddingBottom: "300",
        children: (0, _v1.jsx)(_v5.Header, {
          size: "xl",
          children: _v15.T.ReviewPageSettings
        })
      }), (0, _v1.jsxs)(_v4.Box, {
        children: [(0, _v1.jsxs)(_v12.Paragraph, {
          size: "md",
          children: [_v0.includes("organization") ? _v15.T.OrganizationReviewPageSettingsDescription : _v15.T.WorkspaceReviewPageSettingsDescription, (0, _v1.jsx)(_v4.Box, {
            as: "a",
            marginLeft: "50",
            color: "blue.500",
            href: "https://help.vimeo.com/hc/en-us/articles/12426192100113-Video-review-page",
            target: "_blank",
            rel: "noopener noreferrer",
            children: _v15.T.ReviewPages
          })]
        }), (0, _v1.jsx)(_v4.Box, {
          mt: 8,
          width: "327px",
          children: (0, _v1.jsx)(_v13.Select, {
            value: [_v16],
            onValueChange: _v0 => {
              let _v1 = _v0.value[0];
              _v17(_v1), _v9(_v1 !== _v6);
            },
            items: _v17,
            children: _v0 => (0, _v1.jsx)(_v13.SelectItem, {
              disabled: _v16(_v0.value, _v7),
              children: (0, _v1.jsxs)(_v4.Box, {
                children: [(0, _v1.jsxs)(_v6.Text, {
                  variant: "body-xl",
                  fontSize: (0, _v14.rem)(14),
                  fontWeight: "bold",
                  lineHeight: "17.64px",
                  letterSpacing: "-0.2px",
                  align: "left",
                  children: [_v0.label, _v16(_v0.value, _v7) && " (" + _v15.T.RestrictedByOrg + ")"]
                }), (0, _v1.jsx)(_v6.Text, {
                  variant: "body-xl",
                  fontWeight: "regular",
                  lineHeight: (0, _v14.rem)(20),
                  children: _v0.description
                })]
              })
            }, _v0.value)
          })
        }), _v8 && (0, _v1.jsxs)(_v1.Fragment, {
          children: [_v5 && (0, _v1.jsx)(_v9.Flex, {
            mt: 16,
            children: (0, _v1.jsx)(_v8.Checkbox, {
              id: "review-page-privacy-settings-checkbox",
              checked: _v10,
              onChange: _v0 => _v11(_v0.target.checked),
              children: (0, _v1.jsx)(_v6.Text, {
                variant: "body-xl",
                fontSize: "14px",
                children: _v15.T.ApplyToAllExistingVideos
              })
            })
          }), (0, _v1.jsxs)(_v7.HStack, {
            mt: 16,
            children: [(0, _v1.jsx)(_v10.Button, {
              variant: "secondary",
              size: "sm",
              onClick: () => {
                _v17(_v6), _v9(!1), _v11(!1), _v15(!1);
              },
              children: _v15.T.Cancel
            }), (0, _v1.jsx)(_v10.Button, {
              type: "submit",
              isLoading: _v12,
              size: "sm",
              onClick: () => {
                _v13(!0), _v15(!0), _v4({
                  reviewPagePreferences: {
                    privacy: _v16,
                    applyToAll: !!_v5 && _v10
                  }
                });
              },
              children: _v15.T.SaveEdit
            })]
          })]
        })]
      })]
    });
  }], 0);
}