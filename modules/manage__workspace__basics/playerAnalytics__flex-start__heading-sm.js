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
  let _v18 = () => {
    let _v0 = (0, _v16.getTranslations)(),
      _v1 = (0, _v14.useViewer)(),
      _v2 = _v1?.user?.id || 0,
      _v3 = _v0 => {
        _v0.target.select();
      },
      [_v4, _v5] = (0, _v4.useState)(!1),
      [_v6, _v7] = (0, _v4.useState)(!1),
      {
        capabilities: {
          playerAnalytics: _v8
        }
      } = (0, _v13.useCapability)(["playerAnalytics"], _v1?.teamUser?.ownerId);
    return (0, _v1.jsx)(_v17.SettingsPageLayout, {
      maxWidth: (0, _v11.rem)(640),
      children: (0, _v1.jsxs)(_v17.SettingsSection, {
        children: [(0, _v1.jsx)(_v17.SettingSectionHeader, {
          children: _v0.Analytics
        }), (0, _v1.jsx)(_v17.SettingsSubSection, {
          children: (0, _v1.jsxs)(_v6.HStack, {
            alignItems: "flex-start",
            gap: "md",
            pt: "md",
            children: [(0, _v1.jsx)(_v12.Google, {
              boxSize: "lg"
            }), (0, _v1.jsxs)(_v7.VStack, {
              width: "100%",
              alignItems: "flex-start",
              children: [(0, _v1.jsx)(_v5.Text, {
                variant: "heading-sm",
                children: _v0.GoogleAnalytics
              }), (0, _v1.jsx)(_v5.Text, {
                variant: "body-md",
                color: "text-secondary",
                children: _v0.GoogleAnalyticsDescription(_v15.ANALYTICS_LEARN_MORE_LINK)
              }), (0, _v1.jsxs)(_v8.InputGroup, {
                width: "100%",
                flexDirection: "column",
                children: [(0, _v1.jsx)(_v9.Box, {
                  as: "label",
                  mb: "xs",
                  children: (0, _v1.jsx)(_v5.Text, {
                    variant: "heading-xs",
                    children: _v0.GoogleAnalyticsTrackingCode
                  })
                }), (0, _v1.jsx)(_v10.Input, {
                  size: "sm",
                  onFocus: _v0 => {
                    _v5(!0), _v3(_v0);
                  },
                  onMouseUp: _v0 => {
                    _v5(!0), _v3(_v0);
                  },
                  onBlur: () => _v5(!1),
                  disabled: !_v8,
                  value: _v8 ? (0, _v15.GOOGLE_TEXT_4)(_v2) : "",
                  color: "text-secondary",
                  style: _v4 ? {
                    textOverflow: "unset",
                    overflow: "auto"
                  } : {
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    overflow: "hidden"
                  }
                })]
              }), (0, _v1.jsxs)(_v8.InputGroup, {
                width: "100%",
                flexDirection: "column",
                children: [(0, _v1.jsx)(_v9.Box, {
                  as: "label",
                  mb: "xs",
                  children: (0, _v1.jsx)(_v5.Text, {
                    variant: "heading-xs",
                    children: _v0.GoogleAnalyticsTrackingCodeLegacy
                  })
                }), (0, _v1.jsx)(_v10.Input, {
                  size: "sm",
                  onFocus: _v0 => {
                    _v7(!0), _v3(_v0);
                  },
                  onMouseUp: _v0 => {
                    _v7(!0), _v3(_v0);
                  },
                  onBlur: () => _v7(!1),
                  disabled: !_v8,
                  value: _v8 ? (0, _v15.GOOGLE_TEXT_4_LEGACY)(_v2) : "",
                  color: "text-secondary",
                  style: _v6 ? {
                    textOverflow: "unset",
                    overflow: "auto"
                  } : {
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    overflow: "hidden"
                  }
                })]
              })]
            })]
          })
        })]
      })
    });
  };
  var _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0);
  let _v27 = "wsp-defaults-update",
    _v28 = () => {
      let {
          isOpen: _v0,
          onOpen: _v1,
          onClose: _v2
        } = (0, _v20.useDisclosure)(),
        {
          isOpen: _v3,
          onOpen: _v4,
          onClose: _v5
        } = (0, _v20.useDisclosure)(),
        _v6 = (0, _v23.useToast)(),
        _v7 = (0, _v16.getTranslations)(),
        {
          showReviewLinkToggle: _v8,
          isLoadingUploadDefaults: _v9,
          defaults: _v10,
          update: _v11
        } = (0, _v26.useUploadDefaultToggles)(),
        _v12 = (0, _v4.useCallback)(_v0 => {
          _v6.isActive(_v27) || _v6({
            title: _v0 ? _v7.WorkspaceDefaultsUpdateSuccess : _v7.SomethingWentWrong,
            id: _v27
          });
        }, [_v7, _v6]),
        _v13 = async _v0 => {
          try {
            await _v11({
              videos: {
                [_v0]: !_v10[_v0]
              }
            }), _v12(!0);
          } catch (_v0) {
            _v12(!1);
          }
        },
        _v14 = [{
          title: _v7.SaveResolution,
          description: _v7.Storage,
          component: (0, _v1.jsx)(_v22.Switch, {
            disabled: _v9,
            isChecked: _v10.keepSourceFiles,
            onChange: () => _v13("keepSourceFiles")
          })
        }, ...(_v8 ? [{
          title: _v7.ReviewLinks,
          description: _v7.ReviewLinksDescription,
          component: (0, _v1.jsx)(_v22.Switch, {
            disabled: _v9,
            isChecked: _v10.autoGenerateReviewLink,
            onChange: () => _v13("autoGenerateReviewLink")
          })
        }] : []), {
          title: _v7.Privacy,
          description: _v7.ChoosePrivacyDefaults,
          component: (0, _v1.jsx)(_v21.Button, {
            size: "sm",
            variant: "secondary",
            onClick: _v4,
            children: _v7.ManageDefault
          })
        }, {
          title: _v7.ViewerPermissions,
          description: _v7.ChooseRatingAndControls,
          component: (0, _v1.jsx)(_v21.Button, {
            size: "sm",
            variant: "secondary",
            onClick: _v1,
            children: _v7.ManageDefault
          })
        }];
      return (0, _v1.jsxs)(_v17.SettingsPageLayout, {
        maxWidth: (0, _v11.rem)(640),
        children: [(0, _v1.jsxs)(_v17.SettingsSection, {
          children: [(0, _v1.jsx)(_v17.SettingSectionHeader, {
            children: _v7.Defaults
          }), _v14.map(({
            title: _v0,
            description: _v1,
            component: _v2
          }) => (0, _v1.jsx)(_v17.SettingsSubSection, {
            children: (0, _v1.jsxs)(_v6.HStack, {
              w: "100%",
              justify: "space-between",
              children: [(0, _v1.jsxs)(_v9.Box, {
                children: [(0, _v1.jsx)(_v5.Text, {
                  variant: "heading-xs",
                  children: _v0
                }), (0, _v1.jsx)(_v5.Text, {
                  variant: "body-md",
                  color: "text-secondary",
                  children: _v1
                })]
              }), _v2]
            })
          }, _v0))]
        }), (0, _v1.jsx)(_v25.ViewerPermissionsModal, {
          isOpen: _v0,
          onClose: _v2,
          onSaveSuccess: () => _v12(!0),
          onSaveFailure: () => _v12(!1)
        }), (0, _v1.jsx)(_v24.PrivacyDefaultsModal, {
          isOpen: _v3,
          onClose: _v5,
          onSaveSuccess: () => _v12(!0)
        })]
      });
    };
  var _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0);
  let _v32 = ({
    workspaceInternalId: _v0
  }) => {
    let _v1 = (0, _v16.getTranslations)(),
      {
        onCopy: _v2
      } = (0, _v30.useClipboard)(_v0.toString()),
      _v3 = (0, _v23.useToast)();
    return (0, _v1.jsxs)(_v9.Box, {
      marginTop: "md",
      children: [(0, _v1.jsx)(_v5.Text, {
        variant: "heading-xs",
        id: "workspace-internal-id",
        children: _v1.WorkspaceInternalId
      }), (0, _v1.jsxs)(_v6.HStack, {
        role: "group",
        "aria-labelledby": "workspace-internal-id",
        gap: "xs",
        children: [(0, _v1.jsx)(_v5.Text, {
          variant: "body-sm",
          color: "text-secondary",
          children: _v0
        }), (0, _v1.jsx)(_v29.IconButton, {
          onClick: () => {
            _v2(), _v3({
              title: _v1.CopiedToClipboard,
              variant: "neutral"
            });
          },
          sx: {
            opacity: 0
          },
          _groupHover: {
            opacity: 1
          },
          "aria-label": "copy to clipboard",
          icon: (0, _v1.jsx)(_v31.CopyPortrait, {}),
          variant: "tertiary",
          size: "xs"
        })]
      })]
    });
  };
  var _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0);
  async function _v38({
    baseUrl: _v0,
    where: {
      workspaceUuid: _v1,
      pictureUid: _v2
    },
    ..._v3
  }) {
    return (0, _v36.measureLatency)("deleteWorkspacePicture", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/workspaces/${_v1}/pictures/${_v2}`, {
        ..._v3,
        method: "DELETE"
      });
      if (!_v0.ok) throw new _v37.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v37.deepCamelCase)(_v1);
    });
  }
  async function _v39({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      workspaceUuid: _v3
    },
    ..._v4
  }) {
    return (0, _v36.measureLatency)("postWorkspacePictures", "POST", async () => {
      let _v0 = await fetch(`${_v0}/workspaces/${_v3}/pictures?fields=${_v1.map(_v37.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "POST",
        body: JSON.stringify((0, _v37.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v37.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v37.deepCamelCase)(_v1);
    });
  }
  var _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0);
  let _v43 = ({
      assetType: _v0,
      workspaceUuid: _v1,
      onError: _v2,
      onSuccess: _v3
    }) => {
      let _v4 = (0, _v40.useGctlConfig)(),
        [_v5, _v6] = (0, _v4.useState)(!1);
      return [(0, _v4.useCallback)(async _v0 => {
        if (_v1 && _v0) {
          if (!_v15.UPLOAD_FILE_VALID_TYPES.includes(_v0.type)) return void _v2?.(Error("InvalidFileType"));
          if (_v0.size > _v15.UPLOAD_FILE_SIZE_LIMIT_5MB) return void _v2?.(Error("FileSizeExceeded"));
          try {
            let {
              width: _v0,
              height: _v1
            } = await (0, _v42.getUploadedImageDimensions)(_v0);
            if (_v0 > _v42.IMAGE_DIMENSIONS_LIMIT_10K_RESOLUTION.width || _v1 > _v42.IMAGE_DIMENSIONS_LIMIT_10K_RESOLUTION.height) return void _v2?.(Error("ImageDimensionsExceeded"));
          } catch {
            _v2?.(Error(`${(0, _v41.titleCase)(_v0)}UploadFailed`));
            return;
          }
          try {
            _v6(!0);
            let _v0 = await _v39({
              ...(0, _v41.prepareGctlOptions)(_v4),
              where: {
                workspaceUuid: _v1
              },
              variables: {
                assetType: `workspace_${_v0}`
              },
              select: ["link", "uri"]
            });
            if (!_v0 || !_v0.link || !_v0.uri) throw Error(`${(0, _v41.titleCase)(_v0)}CreationFailed`);
            let {
              link: _v1,
              uri: _v2
            } = _v0;
            if (!(await fetch(_v1, {
              method: "PUT",
              headers: {
                "Content-Type": _v0.type
              },
              body: _v0
            })).ok) throw Error(`${(0, _v41.titleCase)(_v0)}UploadFailed`);
            let _v3 = await (0, _v35.patchWorkspace)({
              ...(0, _v41.prepareGctlOptions)(_v4),
              where: {
                workspaceUuid: _v1
              },
              variables: {
                [`${_v0}Uri`]: _v2
              },
              select: [_v0]
            });
            _v3?.(_v3);
          } catch (_v0) {
            _v2?.(_v0);
          } finally {
            _v6(!1);
          }
        }
      }, [_v1, _v2, _v3, _v4, _v0]), _v5];
    },
    _v44 = ({
      workspaceUuid: _v0,
      onError: _v1,
      onSuccess: _v2
    }) => {
      let _v3 = (0, _v40.useGctlConfig)(),
        [_v4, _v5] = (0, _v4.useState)(!1);
      return [(0, _v4.useCallback)(async _v0 => {
        if (_v0 && _v0) try {
          _v5(!0), await _v38({
            ...(0, _v41.prepareGctlOptions)(_v3),
            where: {
              workspaceUuid: _v0,
              pictureUid: _v0
            }
          }), _v2?.();
        } catch (_v0) {
          _v1?.(_v0);
        } finally {
          _v5(!1);
        }
      }, [_v0, _v1, _v2, _v3]), _v4];
    };
  var _v45 = _v0.i(0),
    _v46 = _v0.i(0);
  let _v47 = _v0 => {
      if (!_v0) return null;
      try {
        let {
          pictureUuid: _v0
        } = (0, _v41.parseWorkspacePictureUri)(_v0);
        return _v0;
      } catch {
        return null;
      }
    },
    _v48 = (_v0, _v1) => {
      switch (_v0) {
        case "InvalidFileType":
        case "FileSizeExceeded":
        case "ImageDimensionsExceeded":
        case `${(0, _v41.titleCase)(_v1)}CreationFailed`:
        case `${(0, _v41.titleCase)(_v1)}UploadFailed`:
          return _v0;
        default:
          return `Default${(0, _v41.titleCase)(_v1)}UploadError`;
      }
    },
    _v49 = ({
      workspaceUuid: _v0
    }) => {
      let _v1,
        _v2,
        _v3 = (0, _v16.getTranslations)(),
        _v4 = (0, _v23.useToast)(),
        {
          mutate: _v5
        } = (0, _v33.useGetAllWorkspacesForUser)(),
        {
          sendChangeInAccountSettingsEvent: _v6
        } = (0, _v45.useTrackEvents)(),
        {
          data: _v7,
          isValidating: _v8,
          mutate: _v9
        } = (({
          workspaceUuid: _v0
        }) => (0, _v34.useGetWorkspace)(() => _v0 ? {
          select: ["icon", "logo"],
          where: {
            workspaceUuid: _v0
          }
        } : null, {
          revalidateOnFocus: !1,
          revalidateIfStale: !1
        }))({
          workspaceUuid: _v0
        }),
        [_v10, _v11] = _v43({
          assetType: "logo",
          workspaceUuid: _v0,
          onSuccess: _v0 => {
            _v9(void 0, {
              populateCache: (_v0, _v1) => ({
                ..._v1,
                logo: _v0.logo
              }),
              revalidate: !1
            }), _v4({
              title: _v3.LogoUploadSuccess
            }), _v6({
              location: "card",
              buttonText: null,
              entityType: "workspace",
              tabName: "basics",
              actionName: "workspace logo",
              actionValue: [_v0.logo.resourceKey]
            });
          },
          onError: _v0 => _v4({
            title: _v3[_v48(_v0.message, "logo")],
            variant: "warning"
          })
        }),
        [_v12, _v13] = _v43({
          assetType: "icon",
          workspaceUuid: _v0,
          onSuccess: _v0 => {
            _v9(void 0, {
              populateCache: (_v0, _v1) => ({
                ..._v1,
                icon: _v0.icon
              }),
              revalidate: !1
            }), _v5(), _v4({
              title: _v3.IconUploadSuccess
            }), _v6({
              location: "card",
              buttonText: null,
              entityType: "workspace",
              tabName: "basics",
              actionName: "workspace logo",
              actionValue: [_v0.icon.resourceKey]
            });
          },
          onError: _v0 => _v4({
            title: _v3[_v48(_v0.message, "icon")],
            variant: "warning"
          })
        }),
        _v14 = !!(_v7?.logo && !_v8),
        _v15 = !!(_v7?.icon && !_v8),
        _v16 = (0, _v42.addQueryParam)((_v1 = _v7?.logo, _v1?.sizes?.at(-1)?.link)),
        _v17 = (0, _v42.addQueryParam)((_v2 = _v7?.icon, _v2?.sizes?.find(_v0 => 152 === _v0.width)?.link ?? _v2?.sizes?.at(-1)?.link)),
        [_v18, _v19] = _v44({
          workspaceUuid: _v0,
          onSuccess: () => {
            _v9(void 0, {
              populateCache: (_v0, _v1) => ({
                ..._v1,
                logo: null
              }),
              revalidate: !1
            }), _v5(), _v4({
              title: _v3.LogoDeleteSuccess
            });
          },
          onError: _v0 => console.error("Failed to delete workspace logo:", _v0)
        }),
        [_v20, _v21] = _v44({
          workspaceUuid: _v0,
          onSuccess: () => {
            _v9(void 0, {
              populateCache: (_v0, _v1) => ({
                ..._v1,
                icon: null
              }),
              revalidate: !1
            }), _v5(), _v4({
              title: _v3.IconDeleteSuccess
            });
          },
          onError: _v0 => console.error("Failed to delete workspace icon:", _v0)
        }),
        _v22 = (0, _v4.useCallback)(() => {
          let _v0 = _v47(_v7?.logo?.uri);
          _v0 && _v18(_v0);
        }, [_v7?.logo?.uri, _v18]),
        _v23 = (0, _v4.useCallback)(() => {
          let _v0 = _v47(_v7?.icon?.uri);
          _v0 && _v20(_v0);
        }, [_v7?.icon?.uri, _v20]);
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v5.Text, {
          variant: "heading-xs",
          mt: "md",
          children: _v3.Logo
        }), (0, _v1.jsxs)(_v6.HStack, {
          gap: "md",
          mt: "md",
          children: [(0, _v1.jsx)(_v46.UploadableImage, {
            header: _v3.FullLogo,
            tooltip: _v3.FullLogoUploadTooltip,
            tooltipProps: {
              maxWidth: (0, _v11.rem)(252)
            },
            isLoading: _v8 || _v11 || _v19,
            isImageUploaded: _v14,
            alt: "logo",
            src: _v16,
            px: "lg",
            background: "fill-component",
            objectFit: "contain",
            width: (0, _v11.rem)(200),
            height: (0, _v11.rem)(78),
            borderRadius: "md",
            onChange: _v0 => {
              let _v1 = _v0.target.files?.[0];
              _v1 && _v10(_v1);
            },
            onDelete: _v22
          }), (0, _v1.jsx)(_v46.UploadableImage, {
            header: _v3.Icon,
            tooltip: _v3.IconUploadTooltip,
            tooltipProps: {
              maxWidth: (0, _v11.rem)(252)
            },
            isLoading: _v8 || _v13 || _v21,
            isImageUploaded: _v15,
            alt: "icon",
            src: _v17,
            background: "fill-component",
            width: (0, _v11.rem)(78),
            height: (0, _v11.rem)(78),
            borderRadius: "md",
            onChange: _v0 => {
              let _v1 = _v0.target.files?.[0];
              _v1 && _v12(_v1);
            },
            onDelete: _v23
          })]
        }), (0, _v1.jsx)(_v5.Text, {
          variant: "body-sm",
          mt: "sm",
          color: "text-secondary",
          children: _v3.FileUploadSpecifications
        })]
      });
    };
  var _v50 = _v0.i(0);
  let _v51 = ({
      displayName: _v0,
      onSuccessfulUpdate: _v1,
      onUpdateFailed: _v2,
      workspaceUuid: _v3
    }) => {
      let _v4,
        [_v5, _v6] = (0, _v4.useState)(_v0),
        _v7 = (0, _v16.getTranslations)(),
        {
          mutate: _v8
        } = (0, _v33.useGetAllWorkspacesForUser)(),
        _v9 = (0, _v4.useRef)(!1),
        [_v10, {
          data: _v11,
          loading: _v12
        }] = (0, _v34.usePatchWorkspace)(),
        _v13 = (_v4 = _v5.trim()).length < _v15.MIN_LENGTH_OF_WORKSPACE_NAME ? _v7.WorkspaceNameTooShort : _v4.length > _v15.MAX_LENGTH_OF_WORKSPACE_NAME ? _v7.WorkspaceNameTooLong : "",
        _v14 = _v13.length > 0,
        _v15 = () => {
          if (!_v12 && _v5 !== _v0) {
            if (!_v5 || !_v5.trim() || _v14) return void _v6(_v11?.displayName ?? _v0);
            _v10({
              select: ["displayName"],
              where: {
                workspaceUuid: _v3
              },
              variables: {
                displayName: _v5
              }
            }), _v9.current = !0;
          }
        };
      return (0, _v4.useEffect)(() => {
        !_v12 && _v9.current && (_v11?.displayName ? (_v6(_v11.displayName), _v1(_v11.displayName), _v8()) : (_v6(_v0), _v2()), _v9.current = !1);
      }, [_v0, _v8, _v2, _v1, _v11, _v12]), (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v5.Text, {
          variant: "heading-xs",
          children: _v7.Name
        }), (0, _v1.jsxs)(_v6.HStack, {
          pt: "md",
          children: [(0, _v1.jsx)(_v10.Input, {
            isDisabled: _v12,
            isInvalid: _v14,
            onBlur: _v15,
            onChange: _v0 => _v6(_v0.target.value),
            onKeyDown: _v0 => {
              "Enter" === _v0.key && (_v0.preventDefault(), _v15());
            },
            size: "md",
            value: _v5,
            width: (0, _v11.rem)(305)
          }), _v12 && (0, _v1.jsx)(_v50.Spinner, {
            size: "sm"
          })]
        }), _v14 && (0, _v1.jsx)(_v5.Text, {
          color: "status-destructive-primary",
          mt: "xs",
          variant: "body-md",
          children: _v13
        })]
      });
    },
    _v52 = ({
      displayName: _v0,
      workspaceUuid: _v1,
      workspaceInternalId: _v2
    }) => {
      let [_v3, _v4] = (0, _v4.useState)(_v0),
        _v5 = (0, _v23.useToast)(),
        _v6 = (0, _v16.getTranslations)(),
        {
          sendChangeInAccountSettingsEvent: _v7
        } = (0, _v45.useTrackEvents)(),
        _v8 = (0, _v4.useRef)(_v7),
        _v9 = (0, _v4.useCallback)(_v0 => {
          _v5.isActive("wsp-name-update-success") || _v5({
            title: _v6.WorkspaceNameUpdateSuccessful,
            variant: "neutral",
            id: "wsp-name-update-success"
          }), _v4(_v0), _v8.current?.({
            location: "card",
            buttonText: null,
            entityType: "workspace",
            tabName: "basics",
            actionName: "workspace name",
            actionValue: [_v0]
          });
        }, [_v6, _v5]),
        _v10 = (0, _v4.useCallback)(() => {
          _v5.isActive("wsp-name-update-failed") || _v5({
            title: _v6.WorkspaceNameUpdateFailed,
            variant: "warning",
            id: "wsp-name-update-failed"
          });
        }, [_v6, _v5]);
      return (0, _v1.jsx)(_v17.SettingsPageLayout, {
        header: _v6.BasicInfo,
        maxWidth: (0, _v11.rem)(640),
        children: (0, _v1.jsxs)(_v17.SettingsSection, {
          children: [(0, _v1.jsx)(_v17.SettingSectionHeader, {
            children: _v6.WorkspaceDetails
          }), (0, _v1.jsxs)(_v17.SettingsSubSection, {
            children: [(0, _v1.jsx)(_v51, {
              displayName: _v3 ?? "",
              onSuccessfulUpdate: _v9,
              onUpdateFailed: _v10,
              workspaceUuid: _v1
            }), (0, _v1.jsx)(_v49, {
              workspaceUuid: _v1
            }), (0, _v1.jsx)(_v32, {
              workspaceInternalId: _v2
            })]
          })]
        })
      });
    };
  var _v53 = _v0.i(0);
  let _v54 = ({
    displayName: _v0,
    workspaceUuid: _v1,
    workspaceInternalId: _v2
  }) => {
    let {
      settings: _v3
    } = (0, _v3.useOrionSettings)();
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v52, {
        displayName: _v0,
        workspaceUuid: _v1,
        workspaceInternalId: _v2
      }), !_v3.enable_workspace_defaults_page && (0, _v1.jsx)(_v28, {}), (0, _v1.jsx)(_v18, {})]
    });
  };
  (0, _v2.withPageSetup)(_v53.getWspServerSideProps, {
    requireLogin: !0,
    inlineViewer: !0,
    noIndex: !0
  }), _v54.getLayout = (_v0, _v1) => (0, _v19.getLayout)(_v0, _v1), _v0.s(["__N_SSP", 0, !0, "default", 0, _v54], 0);
}