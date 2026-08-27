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
    _v20 = _v20,
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
    _v34 = _v0.i(0);
  let _v35 = ({
    isOpen: _v0,
    userId: _v1,
    presetId: _v2,
    mode: _v3,
    onClose: _v4,
    onSuccess: _v5
  }) => {
    let _v6 = (0, _v34.getTranslations)(),
      _v7 = (0, _v31.useToast)(),
      {
        baseUrl: _v8,
        jwt: _v9,
        xVimeoPage: _v10
      } = (0, _v33.useGctlConfig)(),
      [_v11, _v12] = (0, _v9.useState)(!1),
      _v13 = "approve" === _v3,
      _v14 = _v13 ? _v6.ApprovePreset : _v6.RemovePresetApproval,
      _v15 = _v13 ? _v6.ApprovePresetDescriptionFirstLine : _v6.RemovePresetApprovalDescriptionFirstLine,
      _v16 = _v13 ? _v6.ApprovePresetDescriptionSecondLine : _v6.RemovePresetApprovalDescriptionSecondLine,
      _v17 = _v13 ? _v6.Approve : _v6.Remove,
      _v18 = async () => {
        if (_v2) {
          _v12(!0);
          try {
            if (!(await fetch(`${_v8}/users/${_v1}/lead_capture_forms/${_v2}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
                Authorization: _v9 ? `jwt ${_v9}` : "",
                "Vimeo-Page": `${_v10}`
              },
              body: JSON.stringify({
                is_approved: _v13
              })
            })).ok) return void _v7({
              title: _v6.SomethingWentWrong,
              variant: "warning"
            });
            _v5(), _v4();
          } catch {
            _v7({
              title: _v6.SomethingWentWrong,
              variant: "warning"
            });
          } finally {
            _v12(!1);
          }
        }
      };
    return (0, _v1.jsxs)(_v25.Modal, {
      isOpen: _v0,
      size: "lg",
      onClose: _v4,
      children: [(0, _v1.jsx)(_v30.ModalOverlay, {}), (0, _v1.jsxs)(_v27.ModalContent, {
        children: [(0, _v1.jsx)(_v29.ModalHeader, {
          children: (0, _v1.jsx)(_v12.Header, {
            size: "lg",
            children: _v14
          })
        }), (0, _v1.jsx)(_v26.ModalBody, {
          paddingBottom: 16,
          children: (0, _v1.jsxs)(_v32.VStack, {
            align: "stretch",
            spacing: "md",
            children: [(0, _v1.jsx)(_v16.Text, {
              variant: "body-md",
              children: _v15
            }), (0, _v1.jsx)(_v16.Text, {
              variant: "body-md",
              children: _v16
            })]
          })
        }), (0, _v1.jsxs)(_v28.ModalFooter, {
          borderTop: 0,
          children: [(0, _v1.jsx)(_v24.Button, {
            isDisabled: _v11,
            variant: "secondary",
            minW: 100,
            onClick: _v4,
            children: _v6.Cancel
          }), (0, _v1.jsx)(_v24.Button, {
            isLoading: _v11,
            isDisabled: _v11,
            variant: _v13 ? "primary" : "destructive",
            minW: 100,
            onClick: _v18,
            children: _v17
          })]
        })]
      })]
    });
  };
  var _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0);
  let _v39 = ({
    isOpen: _v0,
    userId: _v1,
    preset: _v2,
    approvedPresets: _v3,
    onClose: _v4,
    onSuccess: _v5
  }) => {
    let _v6 = (0, _v34.getTranslations)(),
      _v7 = (0, _v31.useToast)(),
      [_v8, _v9] = (0, _v9.useState)(""),
      [_v10, _v11] = (0, _v9.useState)(!1),
      [_v12, _v13] = (0, _v38.usePutUserLeadCaptureFormReplace)(),
      [_v14, _v15] = (0, _v37.useDeleteUserLeadCaptureForm)(),
      _v16 = (0, _v9.useRef)(null),
      _v17 = (0, _v9.useRef)(0),
      _v18 = (0, _v9.useRef)(0);
    (0, _v9.useEffect)(() => {
      _v0 || (_v9(""), _v11(!1), _v16.current = null);
    }, [_v0]), (0, _v9.useEffect)(() => {
      _v16.current && _v13.callCount === _v17.current && _v13.called && !_v13.loading && (_v13.error ? (_v11(!1), _v16.current = null, _v7({
        title: _v6.SomethingWentWrong,
        variant: "warning"
      })) : (_v18.current = _v15.callCount + 1, _v14({
        where: {
          userId: _v1,
          leadCaptureFormId: _v16.current
        }
      })));
    }, [_v13.callCount, _v13.called, _v13.loading, _v13.error]), (0, _v9.useEffect)(() => {
      _v16.current && _v15.callCount === _v18.current && _v15.called && !_v15.loading && (_v11(!1), _v16.current = null, _v15.error ? _v7({
        title: _v6.SomethingWentWrong,
        variant: "warning"
      }) : (_v5(), _v4()));
    }, [_v15.callCount, _v15.called, _v15.loading, _v15.error]);
    let _v19 = _v2?.metadata?.connections?.video?.total ?? 0,
      _v20 = _v2?.metadata?.connections?.event?.total ?? 0,
      _v21 = _v2?.metadata?.connections?.showcase?.total ?? 0,
      _v22 = _v19 + _v20 + _v21,
      _v23 = !!_v2?.isApproved,
      _v24 = _v23 || _v22 > 0,
      _v25 = _v3.filter(_v0 => _v0.uuid !== _v2?.uuid).map(_v0 => ({
        label: _v0.presetName ?? "-",
        value: _v0.uuid
      }));
    return (0, _v1.jsxs)(_v25.Modal, {
      isOpen: _v0,
      size: "lg",
      onClose: _v4,
      children: [(0, _v1.jsx)(_v30.ModalOverlay, {}), (0, _v1.jsxs)(_v27.ModalContent, {
        children: [(0, _v1.jsx)(_v29.ModalHeader, {
          children: (0, _v1.jsx)(_v12.Header, {
            size: "lg",
            children: _v6.DeletePreset
          })
        }), (0, _v1.jsx)(_v26.ModalBody, {
          paddingTop: "xl",
          paddingBottom: "xl",
          children: (0, _v1.jsxs)(_v32.VStack, {
            align: "stretch",
            spacing: "md",
            children: [_v22 > 0 && (0, _v1.jsx)(_v16.Text, {
              variant: "body-md",
              children: _v6.DeletePresetUsageDescription(_v19, _v20, _v21)
            }), _v23 && (0, _v1.jsx)(_v16.Text, {
              variant: "body-md",
              children: _v6.DeletePresetApprovalWarning
            }), !_v24 && (0, _v1.jsx)(_v16.Text, {
              variant: "body-md",
              children: _v6.DeletePresetConfirmation
            }), _v24 && (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsx)(_v16.Text, {
                variant: "body-md",
                children: _v6.DeletePresetReplacementHint
              }), (0, _v1.jsxs)(_v2.Box, {
                children: [(0, _v1.jsx)(_v16.Text, {
                  variant: "heading-sm",
                  marginBottom: "50",
                  children: _v6.ReplacePreset
                }), (0, _v1.jsx)(_v36.Select, {
                  items: _v25,
                  placeholder: _v6.SelectPreset,
                  value: _v8 ? [_v8] : [],
                  onValueChange: _v0 => _v9(_v0.value[0] ?? ""),
                  size: "md"
                })]
              })]
            })]
          })
        }), (0, _v1.jsxs)(_v28.ModalFooter, {
          borderTop: 0,
          children: [(0, _v1.jsx)(_v24.Button, {
            isDisabled: _v10,
            variant: "secondary",
            minW: 100,
            onClick: _v4,
            children: _v6.Cancel
          }), (0, _v1.jsx)(_v24.Button, {
            isLoading: _v10,
            isDisabled: _v10 || _v24 && !_v8,
            variant: "destructive",
            minW: 100,
            onClick: () => {
              _v2?.uuid && (!_v24 || _v8) && (_v16.current = _v2.uuid, _v11(!0), _v24 ? (_v17.current = _v13.callCount + 1, _v12({
                select: [],
                where: {
                  userId: _v1,
                  leadCaptureFormId: _v2.uuid
                },
                variables: {
                  replacementLeadCaptureFormId: _v8
                }
              })) : (_v18.current = _v15.callCount + 1, _v14({
                where: {
                  userId: _v1,
                  leadCaptureFormId: _v2.uuid
                }
              })));
            },
            children: _v24 ? _v6.DeletePresetAndReplaceBySelected : _v6.DeletePreset
          })]
        })]
      })]
    });
  };
  var _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0);
  let _v44 = ["uuid", "presetName", "formCreatedOn", "isDefault", "isApproved", "metadata.connections.video.total", "metadata.connections.event.total", "metadata.connections.showcase.total"],
    _v45 = {
      month: "short",
      day: "2-digit",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: !0
    },
    _v46 = ({
      presets: _v0,
      locale: _v1,
      onApprove: _v2,
      onDelete: _v3
    }) => {
      let _v4 = (0, _v34.getTranslations)(),
        _v5 = new Intl.DateTimeFormat(_v1 || "en-US", _v45),
        _v6 = _v0.filter(_v0 => _v0.isApproved).length;
      return (0, _v1.jsxs)(_v2.Box, {
        marginTop: "md",
        children: [(0, _v1.jsx)(_v2.Box, {
          paddingY: "100",
          paddingX: "50",
          children: (0, _v1.jsx)(_v16.Text, {
            variant: "heading-sm",
            fontWeight: "medium",
            children: _v4.Name
          })
        }), _v0.map(_v0 => {
          let _v1 = _v0.isApproved && 1 === _v6;
          return (0, _v1.jsxs)(_v9.Fragment, {
            children: [(0, _v1.jsx)(_v40.Divider, {
              borderColor: "stroke"
            }), (0, _v1.jsxs)(_v11.Flex, {
              paddingY: "200",
              paddingX: "50",
              alignItems: "center",
              gap: "md",
              _hover: {
                backgroundColor: "#436B990D"
              },
              children: [(0, _v1.jsxs)(_v2.Box, {
                flex: 1,
                minWidth: 0,
                children: [(0, _v1.jsx)(_v16.Text, {
                  variant: "body-md",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  children: _v0.presetName
                }), (0, _v1.jsx)(_v16.Text, {
                  variant: "body-sm",
                  color: "text-secondary",
                  children: _v5.format(new Date(_v0.formCreatedOn))
                })]
              }), _v0.isApproved && (0, _v1.jsx)(_v41.Tooltip, {
                label: _v4.ApprovedPresetTooltip,
                placement: "top",
                shouldWrapChildren: !0,
                children: (0, _v1.jsxs)(_v11.Flex, {
                  alignItems: "center",
                  gap: "50",
                  paddingX: "100",
                  paddingY: "50",
                  backgroundColor: "gray.500",
                  color: "white",
                  borderRadius: "md",
                  children: [(0, _v1.jsx)(_v42.CheckSmall, {
                    boxSize: "xs"
                  }), (0, _v1.jsx)(_v16.Text, {
                    variant: "body-sm",
                    children: _v4.Approved
                  })]
                })
              }), (0, _v1.jsx)(_v43.ThreeDotsButton, {
                "aria-label": "Preset actions",
                items: [{
                  type: "button",
                  idKey: `approve-${_v0.uuid}`,
                  content: (0, _v1.jsx)(_v1.Fragment, {
                    children: _v0.isApproved ? _v4.RemoveApproval : _v4.ApprovePreset
                  }),
                  callback: () => _v2(_v0),
                  isDisabled: _v1,
                  tooltip: _v4.LastApprovedRemoveApprovalTooltip
                }, {
                  type: "button",
                  idKey: `delete-${_v0.uuid}`,
                  content: (0, _v1.jsx)(_v1.Fragment, {
                    children: _v4.DeletePreset
                  }),
                  callback: () => _v3(_v0),
                  isDisabled: _v1,
                  tooltip: _v4.LastApprovedDeleteTooltip
                }]
              })]
            })]
          }, _v0.uuid);
        })]
      });
    },
    _v47 = ({
      isOpen: _v0,
      userId: _v1,
      preset: _v2,
      approvedPresets: _v3,
      onClose: _v4,
      onSuccess: _v5
    }) => {
      let _v6 = (0, _v34.getTranslations)(),
        _v7 = (0, _v31.useToast)(),
        [_v8, _v9] = (0, _v9.useState)(""),
        [_v10, _v11] = (0, _v9.useState)(!1),
        [_v12, _v13] = (0, _v38.usePutUserLeadCaptureFormReplace)(),
        [_v14, _v15] = (0, _v37.usePatchUserLeadCaptureForm)(),
        _v16 = (0, _v9.useRef)(null),
        _v17 = (0, _v9.useRef)(0),
        _v18 = (0, _v9.useRef)(0);
      (0, _v9.useEffect)(() => {
        _v0 || (_v9(""), _v11(!1), _v16.current = null);
      }, [_v0]), (0, _v9.useEffect)(() => {
        _v16.current && _v13.callCount === _v17.current && _v13.called && !_v13.loading && (_v13.error ? (_v11(!1), _v16.current = null, _v7({
          title: _v6.SomethingWentWrong,
          variant: "warning"
        })) : (_v18.current = _v15.callCount + 1, _v14({
          select: [],
          where: {
            userId: _v1,
            leadCaptureFormId: _v16.current
          },
          variables: {
            isApproved: !1
          }
        })));
      }, [_v13.callCount, _v13.called, _v13.loading, _v13.error]), (0, _v9.useEffect)(() => {
        _v16.current && _v15.callCount === _v18.current && _v15.called && !_v15.loading && (_v11(!1), _v16.current = null, _v15.error ? _v7({
          title: _v6.SomethingWentWrong,
          variant: "warning"
        }) : (_v5(), _v4()));
      }, [_v15.callCount, _v15.called, _v15.loading, _v15.error]);
      let _v19 = _v2?.metadata?.connections?.video?.total ?? 0,
        _v20 = _v2?.metadata?.connections?.event?.total ?? 0,
        _v21 = _v2?.metadata?.connections?.showcase?.total ?? 0,
        _v22 = _v3.filter(_v0 => _v0.uuid !== _v2?.uuid).map(_v0 => ({
          label: _v0.presetName ?? "-",
          value: _v0.uuid
        }));
      return (0, _v1.jsxs)(_v25.Modal, {
        isOpen: _v0,
        size: "lg",
        onClose: _v4,
        children: [(0, _v1.jsx)(_v30.ModalOverlay, {}), (0, _v1.jsxs)(_v27.ModalContent, {
          children: [(0, _v1.jsx)(_v29.ModalHeader, {
            children: (0, _v1.jsx)(_v12.Header, {
              size: "lg",
              children: _v6.RemoveApproval
            })
          }), (0, _v1.jsx)(_v26.ModalBody, {
            paddingTop: "xl",
            paddingBottom: "xl",
            children: (0, _v1.jsxs)(_v32.VStack, {
              align: "stretch",
              spacing: "md",
              children: [(0, _v1.jsx)(_v16.Text, {
                variant: "body-md",
                children: _v6.DeletePresetUsageDescription(_v19, _v20, _v21)
              }), (0, _v1.jsx)(_v16.Text, {
                variant: "body-md",
                children: _v6.RemoveApprovalWithReplacementWarning
              }), (0, _v1.jsx)(_v16.Text, {
                variant: "body-md",
                children: _v6.RemoveApprovalReplacementHint
              }), (0, _v1.jsxs)(_v2.Box, {
                children: [(0, _v1.jsx)(_v16.Text, {
                  variant: "heading-sm",
                  marginBottom: "50",
                  children: _v6.ReplacePreset
                }), (0, _v1.jsx)(_v36.Select, {
                  items: _v22,
                  placeholder: _v6.SelectPreset,
                  value: _v8 ? [_v8] : [],
                  onValueChange: _v0 => _v9(_v0.value[0] ?? ""),
                  size: "md"
                })]
              })]
            })
          }), (0, _v1.jsxs)(_v28.ModalFooter, {
            borderTop: 0,
            children: [(0, _v1.jsx)(_v24.Button, {
              isDisabled: _v10,
              variant: "secondary",
              minW: 100,
              onClick: _v4,
              children: _v6.Cancel
            }), (0, _v1.jsx)(_v24.Button, {
              isLoading: _v10,
              isDisabled: _v10 || !_v8,
              variant: "destructive",
              minW: 100,
              onClick: () => {
                _v2?.uuid && _v8 && (_v16.current = _v2.uuid, _v17.current = _v13.callCount + 1, _v11(!0), _v12({
                  select: [],
                  where: {
                    userId: _v1,
                    leadCaptureFormId: _v2.uuid
                  },
                  variables: {
                    replacementLeadCaptureFormId: _v8
                  }
                }));
              },
              children: _v6.ReplacePresetAndRemoveApproval
            })]
          })]
        })]
      });
    },
    _v48 = ({
      workspaceInternalId: _v0
    }) => {
      let _v1 = (0, _v34.getTranslations)(),
        _v2 = (0, _v23.useLocale)(),
        _v3 = _v1.RegistrationPresetsDescription("/library", "/library/events"),
        {
          data: _v4,
          mutate: _v5,
          isLoading: _v6,
          isValidating: _v7
        } = (0, _v19.useGetUserLeadCaptureForms)(() => _v0 ? {
          where: {
            userId: _v0
          },
          select: _v44,
          query: {
            perPage: 100,
            page: 1,
            filter: "preset"
          }
        } : null),
        _v8 = (_v4?.data ?? []).filter(_v0 => !_v0.isDefault),
        _v9 = _v8.filter(_v0 => _v0.isApproved),
        _v10 = _v9.length > 0,
        [_v11, _v12] = (0, _v9.useState)(null),
        [_v13, _v14] = (0, _v9.useState)(null),
        [_v15, _v16] = (0, _v9.useState)(null);
      return (0, _v1.jsxs)(_v2.Box, {
        maxW: _v22.SETTING_PAGES_MAX_WIDTH,
        width: "100%",
        margin: "0 auto",
        children: [(0, _v1.jsx)(_v20.Header, {}), (0, _v1.jsx)(_v21.RegistrationInfo, {}), (0, _v1.jsxs)(_v10.Card, {
          padding: "xl",
          marginBottom: "lg",
          children: [(0, _v1.jsx)(_v16.Text, {
            variant: "heading-md",
            fontSize: (0, _v14.rem)(20),
            children: _v1.RegistrationPresets
          }), (0, _v1.jsx)(_v16.Text, {
            color: "text-secondary",
            variant: "body-md",
            marginTop: "sm",
            children: _v3
          }), _v6 || _v7 ? (0, _v1.jsx)(_v11.Flex, {
            alignItems: "center",
            justifyContent: "center",
            paddingY: (0, _v14.rem)(60),
            children: (0, _v1.jsx)(_v15.Spinner, {})
          }) : 0 === _v8.length ? (0, _v1.jsxs)(_v11.Flex, {
            direction: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingY: (0, _v14.rem)(60),
            gap: (0, _v14.rem)(8),
            children: [(0, _v1.jsx)(_v18.Registration, {
              boxSize: "48px"
            }), (0, _v1.jsx)(_v12.Header, {
              variant: "heading-md",
              size: "xl",
              children: _v1.NoPresetAvailable
            }), (0, _v1.jsx)(_v13.Paragraph, {
              variant: "body-md",
              color: "text-secondary",
              textAlign: "center",
              children: _v3
            })]
          }) : (0, _v1.jsxs)(_v1.Fragment, {
            children: [!_v10 && (0, _v1.jsxs)(_v11.Flex, {
              alignItems: "flex-start",
              gap: "md",
              padding: "md",
              marginTop: "md",
              borderRadius: "md",
              backgroundColor: "status-caution-secondary",
              children: [(0, _v1.jsx)(_v17.CircleExclamationFilled, {
                color: "status-caution-primary",
                boxSize: "md"
              }), (0, _v1.jsx)(_v16.Text, {
                variant: "body-md",
                children: _v1.NoApprovedPresetNotification
              })]
            }), (0, _v1.jsx)(_v46, {
              presets: _v8,
              locale: _v2,
              onApprove: _v0 => {
                let _v1 = (_v0.metadata?.connections?.video?.total ?? 0) + (_v0.metadata?.connections?.event?.total ?? 0) + (_v0.metadata?.connections?.showcase?.total ?? 0);
                _v0.isApproved && _v1 > 0 ? _v14(_v0) : _v12(_v0);
              },
              onDelete: _v16
            })]
          })]
        }), (0, _v1.jsx)(_v35, {
          isOpen: null !== _v11,
          userId: _v0,
          presetId: _v11?.uuid ?? null,
          mode: _v11?.isApproved ? "revoke" : "approve",
          onClose: () => _v12(null),
          onSuccess: () => _v5()
        }), (0, _v1.jsx)(_v39, {
          isOpen: null !== _v15,
          userId: _v0,
          preset: _v15,
          approvedPresets: _v9,
          onClose: () => _v16(null),
          onSuccess: () => _v5()
        }), (0, _v1.jsx)(_v47, {
          isOpen: null !== _v13,
          userId: _v0,
          preset: _v13,
          approvedPresets: _v9,
          onClose: () => _v14(null),
          onSuccess: () => _v5()
        })]
      });
    };
  var _v49 = _v0.i(0);
  let _v50 = ({
    workspaceUuid: _v0,
    workspaceInternalId: _v1
  }) => {
    let {
        settings: _v2
      } = (0, _v7.useOrionSettings)(),
      {
        data: _v3,
        isLoading: _v4
      } = (0, _v5.useGetUserCapabilities)(() => _v1 ? {
        where: {
          userId: _v1
        },
        select: ["adminForcedPreset"]
      } : null);
    if (_v4) return (0, _v1.jsx)(_v6.Spinner, {});
    if (_v3?.adminForcedPreset === !1 && !_v2.enable_admin_forced_preset) throw new _v3.UnauthorizedError();
    return (0, _v1.jsx)(_v2.Box, {
      paddingTop: "lg",
      children: (0, _v1.jsx)(_v48, {
        workspaceInternalId: _v1,
        workspaceUuid: _v0
      })
    });
  };
  (0, _v4.withPageSetup)(_v49.getWspServerSideProps, {
    requireLogin: !0
  }), _v50.getLayout = (_v0, _v1) => (0, _v8.getLayout)(_v0, _v1, _v8.WORKSPACE_COMPACT_SETTINGS_LAYOUT), _v0.s(["__N_SSP", 0, !0, "default", 0, _v50], 0);
}