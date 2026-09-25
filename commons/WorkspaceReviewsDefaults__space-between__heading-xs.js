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
    _v9 = _v0.i(0);
  _v0.s(["WorkspaceReviewsDefaults", 0, ({
    onDidUpdate: _v0
  }) => {
    let _v1 = (0, _v8.getTranslations)(),
      {
        showReviewLinkToggle: _v2,
        isLoadingUploadDefaults: _v3,
        defaults: _v4,
        update: _v5
      } = (0, _v7.useUploadDefaultToggles)(),
      _v6 = (0, _v2.useCallback)(async () => {
        try {
          await _v5({
            videos: {
              autoGenerateReviewLink: !_v4.autoGenerateReviewLink
            }
          }), _v0(!0);
        } catch {
          _v0(!1);
        }
      }, [_v5, _v4.autoGenerateReviewLink, _v0]);
    return _v2 ? (0, _v1.jsxs)(_v9.SettingsSection, {
      children: [(0, _v1.jsx)(_v9.SettingSectionHeader, {
        children: _v1.Reviews
      }), (0, _v1.jsx)(_v9.SettingsSubSection, {
        children: (0, _v1.jsxs)(_v4.HStack, {
          w: "100%",
          justify: "space-between",
          children: [(0, _v1.jsxs)(_v3.Box, {
            children: [(0, _v1.jsx)(_v6.Text, {
              variant: "heading-xs",
              children: _v1.ReviewLinks
            }), (0, _v1.jsx)(_v6.Text, {
              variant: "body-md",
              color: "text-secondary",
              children: _v1.ReviewLinksDescription
            })]
          }), (0, _v1.jsx)(_v5.Switch, {
            disabled: _v3,
            isChecked: _v4.autoGenerateReviewLink,
            onChange: _v6
          })]
        })
      })]
    }) : null;
  }], 0);
  var _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0);
  _v0.s(["WorkspaceVideoUploadsDefaults", 0, ({
    onDidUpdate: _v0
  }) => {
    let {
        isOpen: _v1,
        onOpen: _v2,
        onClose: _v3
      } = (0, _v10.useDisclosure)(),
      _v4 = (0, _v8.getTranslations)(),
      {
        isLoadingUploadDefaults: _v5,
        defaults: _v6,
        update: _v7
      } = (0, _v7.useUploadDefaultToggles)(),
      _v8 = (0, _v2.useCallback)(async () => {
        try {
          await _v7({
            videos: {
              keepSourceFiles: !_v6.keepSourceFiles
            }
          }), _v0(!0);
        } catch {
          _v0(!1);
        }
      }, [_v7, _v6.keepSourceFiles, _v0]);
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v9.SettingsSection, {
        children: [(0, _v1.jsx)(_v9.SettingSectionHeader, {
          children: _v4.VideoUploads
        }), (0, _v1.jsx)(_v9.SettingsSubSection, {
          children: (0, _v1.jsxs)(_v4.HStack, {
            w: "100%",
            justify: "space-between",
            children: [(0, _v1.jsxs)(_v3.Box, {
              children: [(0, _v1.jsx)(_v6.Text, {
                variant: "heading-xs",
                children: _v4.SaveResolution
              }), (0, _v1.jsx)(_v6.Text, {
                variant: "body-md",
                color: "text-secondary",
                children: _v4.Storage
              })]
            }), (0, _v1.jsx)(_v5.Switch, {
              disabled: _v5,
              isChecked: _v6.keepSourceFiles,
              onChange: _v8
            })]
          })
        }), (0, _v1.jsx)(_v9.SettingsSubSection, {
          children: (0, _v1.jsxs)(_v4.HStack, {
            w: "100%",
            justify: "space-between",
            children: [(0, _v1.jsxs)(_v3.Box, {
              children: [(0, _v1.jsx)(_v6.Text, {
                variant: "heading-xs",
                children: _v4.PrivacyDefaults
              }), (0, _v1.jsx)(_v6.Text, {
                variant: "body-md",
                color: "text-secondary",
                children: _v4.ChoosePrivacyDefaults
              })]
            }), (0, _v1.jsx)(_v11.Button, {
              size: "sm",
              variant: "secondary",
              onClick: _v2,
              children: _v4.ManageDefault
            })]
          })
        })]
      }), (0, _v1.jsx)(_v12.PrivacyDefaultsModal, {
        isOpen: _v1,
        onClose: _v3,
        onSaveSuccess: () => _v0(!0)
      })]
    });
  }], 0);
  var _v13 = _v0.i(0);
  _v0.s(["WorkspaceViewerPermissions", 0, ({
    onDidUpdate: _v0
  }) => {
    let {
        isOpen: _v1,
        onOpen: _v2,
        onClose: _v3
      } = (0, _v10.useDisclosure)(),
      _v4 = (0, _v8.getTranslations)();
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v9.SettingsSection, {
        children: [(0, _v1.jsx)(_v9.SettingSectionHeader, {
          children: _v4.ViewerPermissions
        }), (0, _v1.jsx)(_v9.SettingsSubSection, {
          children: (0, _v1.jsxs)(_v4.HStack, {
            w: "100%",
            justify: "space-between",
            children: [(0, _v1.jsxs)(_v3.Box, {
              children: [(0, _v1.jsx)(_v6.Text, {
                variant: "heading-xs",
                children: _v4.ViewerPermissions
              }), (0, _v1.jsx)(_v6.Text, {
                variant: "body-md",
                color: "text-secondary",
                children: _v4.ChooseRatingAndControls
              })]
            }), (0, _v1.jsx)(_v11.Button, {
              size: "sm",
              variant: "secondary",
              onClick: _v2,
              children: _v4.ManageDefault
            })]
          })
        })]
      }), (0, _v1.jsx)(_v13.ViewerPermissionsModal, {
        isOpen: _v1,
        onClose: _v3,
        onSaveSuccess: () => _v0(!0),
        onSaveFailure: () => _v0(!1)
      })]
    });
  }], 0);
}