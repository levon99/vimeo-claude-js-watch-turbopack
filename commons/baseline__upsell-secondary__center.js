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
  let _v16 = ({
    hasEnterprise: _v0,
    entityType: _v1,
    hasLiveSubscription: _v2 = !1,
    showUpsell: _v3,
    message: _v4
  }) => {
    let [_v5, _v6] = (0, _v4.useState)(!1);
    return _v3 ? (0, _v1.jsxs)(_v5.Box, {
      height: 48,
      children: [(0, _v1.jsxs)(_v6.Flex, {
        alignItems: "baseline",
        background: "upsell-secondary",
        gap: 16,
        justifyContent: "center",
        p: "sm lg",
        children: [(0, _v1.jsx)(_v13.Header, {
          size: "xs",
          as: "h6",
          color: "text-primary",
          children: _v4 || _v15.default.UpgradeBannerText
        }), (0, _v1.jsx)(_v12.Button, {
          height: 32,
          variant: "upsell",
          onClick: () => {
            _v6(!0);
          },
          children: _v0 ? _v15.default.ContactUs : _v15.default.Upgrade
        })]
      }), _v5 && (0, _v1.jsx)(_v14.UpsellModal, {
        templateType: _v0 ? "enterprise" : "default",
        hasLiveSubscription: _v2,
        hideModal: () => {
          _v6(!1);
        },
        entityType: _v1 || ""
      })]
    }) : null;
  };
  var _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0);
  let _v24 = () => {
    let _v0 = (0, _v23.useGlobalStore)(_v0 => _v0.patchApiStatus),
      _v1 = (0, _v23.useGlobalStore)(_v0 => _v0.isAutoSavingEmail),
      _v2 = Object.values(_v0);
    return {
      isAutoSaving: _v2.length > 0 || _v1,
      isActivelySaving: _v2.includes("saving") || _v1
    };
  };
  var _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0);
  let _v33 = () => {
    let _v0 = (0, _v23.useGlobalStore)(_v0 => _v0.entityType),
      _v1 = (0, _v23.useGlobalStore)(_v0 => _v0.entityId),
      {
        data: _v2
      } = (0, _v30.useGetLeadCaptureResourceIdRegistrantStatuses)({
        where: {
          resourceType: _v18.ENTITY_TO_PATH_MAP[_v0],
          resourceId: _v1
        },
        select: _v32.CRM_IMPORT_FIELDS
      }),
      _v3 = _v0 => {
        window.open(_v0, "_blank");
      };
    return (0, _v1.jsx)(_v1.Fragment, {
      children: _v2?.data?.map(({
        errorDetails: _v0,
        emailProviderList: _v1,
        uri: _v2
      }) => _v0?.category === _v26.AUTH_ERROR && _v1?.provider.name ? (0, _v1.jsx)(_v5.Box, {
        position: "relative",
        m: (0, _v7.rem)(10),
        children: (0, _v1.jsx)(_v31.ErrorAlertBanner, {
          message: _v28.default.UnableToConnect(_v1.provider.name),
          buttonText: _v28.default.ManageIntegrations,
          secondaryMsg: _v28.default.GetTroubleshootingTips,
          buttonIcon: (0, _v1.jsx)(_v29.PopOut, {}),
          onButtonClick: () => _v3("/settings/marketing/integrations"),
          secondaryMsgClick: () => _v3(_v18.GET_TROUBLESHOOTING_TIPS)
        })
      }, _v2) : null)
    });
  };
  var _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0);
  let _v40 = ({
    onCancel: _v0,
    onDiscard: _v1
  }) => (0, _v1.jsxs)(_v34.Modal, {
    isOpen: !0,
    onClose: _v0,
    children: [(0, _v1.jsx)(_v39.ModalOverlay, {}), (0, _v1.jsxs)(_v36.ModalContent, {
      children: [(0, _v1.jsx)(_v38.ModalHeader, {
        children: _v28.default.DiscardUnsavedChanges
      }), (0, _v1.jsx)(_v35.ModalBody, {
        children: _v28.default.DiscardChangesBody
      }), (0, _v1.jsxs)(_v37.ModalFooter, {
        children: [(0, _v1.jsx)(_v12.Button, {
          variant: "tertiary",
          onClick: _v0,
          children: _v28.default.KeepEditing
        }), (0, _v1.jsx)(_v12.Button, {
          variant: "destructive",
          onClick: _v1,
          children: _v28.default.DiscardChanges
        })]
      })]
    })]
  });
  var _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0);
  let _v57 = ({
    isOpen: _v0,
    userId: _v1,
    preset: _v2,
    approvedPresets: _v3,
    onClose: _v4,
    onSuccess: _v5,
    onError: _v6
  }) => {
    let [_v7, _v8] = (0, _v4.useState)(""),
      [_v9, _v10] = (0, _v4.useState)(!1),
      [_v11, _v12] = (0, _v56.usePutUserLeadCaptureFormReplace)(),
      [_v13, _v14] = (0, _v53.usePatchUserLeadCaptureForm)(),
      _v15 = (0, _v4.useRef)(null);
    (0, _v4.useEffect)(() => {
      _v0 || (_v8(""), _v15.current = null);
    }, [_v0]), (0, _v4.useEffect)(() => {
      _v15.current && _v12.called && !_v12.loading && (_v12.error ? (_v10(!1), _v15.current = null, _v6()) : _v13({
        select: [],
        where: {
          userId: _v1,
          leadCaptureFormId: _v15.current
        },
        variables: {
          isApproved: !1
        }
      }));
    }, [_v12.called, _v12.loading, _v12.error]), (0, _v4.useEffect)(() => {
      _v15.current && _v14.called && !_v14.loading && (_v10(!1), _v15.current = null, _v14.error ? _v6() : (_v5(), _v4()));
    }, [_v14.called, _v14.loading, _v14.error]);
    let _v16 = _v2?.metadata?.connections?.video?.total ?? 0,
      _v17 = _v2?.metadata?.connections?.event?.total ?? 0,
      _v18 = _v2?.metadata?.connections?.showcase?.total ?? 0,
      _v19 = _v16 + _v17 + _v18,
      _v20 = _v3.filter(_v0 => _v0.uuid !== _v2?.uuid).map(_v0 => ({
        label: _v0.presetName ?? "-",
        value: _v0.uuid
      }));
    return (0, _v1.jsxs)(_v34.Modal, {
      isOpen: _v0,
      size: "lg",
      onClose: _v4,
      children: [(0, _v1.jsx)(_v39.ModalOverlay, {}), (0, _v1.jsxs)(_v36.ModalContent, {
        children: [(0, _v1.jsx)(_v38.ModalHeader, {
          fontSize: "heading-md",
          children: _v28.default.RemoveApproval
        }), (0, _v1.jsx)(_v35.ModalBody, {
          paddingTop: "xl",
          paddingBottom: "xl",
          children: (0, _v1.jsxs)(_v55.VStack, {
            align: "stretch",
            spacing: "md",
            children: [_v19 > 1 && (0, _v1.jsx)(_v45.Text, {
              variant: "body-md",
              children: _v28.default.PresetUsageDescription(_v16, _v17, _v18)
            }), (0, _v1.jsx)(_v45.Text, {
              variant: "body-md",
              children: _v28.default.RemovePresetApprovalDescriptionFirstLine
            }), (0, _v1.jsx)(_v45.Text, {
              variant: "body-md",
              children: _v28.default.RemovePresetApprovalDescriptionSecondLine
            }), (0, _v1.jsxs)(_v5.Box, {
              children: [(0, _v1.jsx)(_v45.Text, {
                variant: "heading-sm",
                marginBottom: "50",
                children: _v28.default.ReplacePreset
              }), (0, _v1.jsx)(_v54.Select, {
                items: _v20,
                placeholder: _v28.default.SelectPreset,
                value: _v7 ? [_v7] : [],
                onValueChange: _v0 => _v8(_v0.value[0] ?? ""),
                size: "md"
              })]
            })]
          })
        }), (0, _v1.jsxs)(_v37.ModalFooter, {
          borderTop: 0,
          children: [(0, _v1.jsx)(_v12.Button, {
            isDisabled: _v9,
            variant: "secondary",
            minW: 100,
            onClick: _v4,
            children: _v28.default.Cancel
          }), (0, _v1.jsx)(_v12.Button, {
            isLoading: _v9,
            isDisabled: _v9 || !_v7,
            variant: "destructive",
            minW: 100,
            onClick: () => {
              _v2?.uuid && _v7 && (_v15.current = _v2.uuid, _v10(!0), _v11({
                select: [],
                where: {
                  userId: _v1,
                  leadCaptureFormId: _v2.uuid
                },
                variables: {
                  replacementLeadCaptureFormId: _v7
                }
              }));
            },
            children: _v28.default.RemoveApproval
          })]
        })]
      })]
    });
  };
  var _v58 = _v0.i(0),
    _v59 = _v0.i(0);
  let _v60 = () => {
      let [_v0, {
          data: _v1,
          error: _v2,
          loading: _v3
        }] = (0, _v59.useGetUserLeadCaptureFormsLazy)(),
        [_v4, _v5] = (0, _v53.useDeleteUserLeadCaptureForm)(),
        [_v6, _v7] = (0, _v4.useState)([]),
        _v8 = (0, _v23.useGlobalStore)(_v0 => _v0.entityOwnerId),
        _v9 = (0, _v23.useGlobalStore)(_v0 => _v0.setPresets),
        _v10 = (0, _v23.useGlobalStore)(_v0 => _v0.setTotalPresets);
      (0, _v4.useEffect)(() => {
        _v8 && _v0 && _v0({
          where: {
            userId: _v8
          },
          query: {
            perPage: _v26.PRESET_RESULT_PER_PAGE,
            filter: "preset"
          },
          select: [_v26.PRESET_NAME, _v26.UUID, "isDefault", "sourceEntityType", "isApproved", "metadata.connections.video.total", "metadata.connections.event.total", "metadata.connections.showcase.total"]
        });
      }, [_v8]), (0, _v4.useEffect)(() => {
        null == _v1 || (_v9(_v1.data.filter(_v0 => !_v0?.isDefault)), _v10(_v1.total));
      }, [_v1, _v7]);
      let _v11 = (0, _v4.useCallback)(_v0 => {
        _v8 && _v4({
          where: {
            userId: _v8,
            leadCaptureFormId: _v0
          }
        });
      }, [_v4, _v8]);
      return {
        loading: _v3,
        presetList: _v6,
        error: _v2,
        refresh: (0, _v4.useCallback)(() => {
          _v8 && _v0({
            where: {
              userId: _v8
            },
            query: {
              perPage: _v26.PRESET_RESULT_PER_PAGE,
              filter: "preset"
            },
            select: [_v26.PRESET_NAME, _v26.UUID, "isDefault", "sourceEntityType", "isApproved", "metadata.connections.video.total", "metadata.connections.event.total", "metadata.connections.showcase.total"]
          });
        }, [_v8, _v0]),
        deletePresetById: _v11,
        deletePresetState: _v5
      };
    },
    _v61 = () => {
      if (void 0 === window.BroadcastChannel) return;
      let _v0 = new window.BroadcastChannel(_v26.LC_BROADCAST_CHANNEL);
      _v0.postMessage({
        code: _v26.LC_BROADCAST_CODE_FORCED_LEAD_CAPTURE_FORM_CHANGED
      }), _v0.close();
    },
    _v62 = ({
      isOpen: _v0,
      headerText: _v1,
      bodyText: _v2,
      primaryButtonText: _v3,
      secondaryButtonText: _v4,
      onSubmit: _v5,
      onClose: _v6,
      onSecondary: _v7,
      primaryDisabled: _v8 = !1,
      secondaryDisabled: _v9 = !1,
      primaryButtonVariant: _v10 = "primary",
      loading: _v11,
      children: _v12
    }) => (0, _v1.jsxs)(_v34.Modal, {
      isOpen: _v0,
      onClose: _v6,
      closeOnEsc: !_v11,
      closeOnOverlayClick: !_v11,
      children: [(0, _v1.jsx)(_v39.ModalOverlay, {}), (0, _v1.jsxs)(_v36.ModalContent, {
        maxW: (0, _v7.rem)(540),
        children: [(0, _v1.jsx)(_v38.ModalHeader, {
          children: _v1
        }), (0, _v1.jsx)(_v35.ModalBody, {
          children: (0, _v1.jsxs)(_v51.Stack, {
            spacing: "md",
            children: [null != _v2 && (0, _v1.jsx)(_v45.Text, {
              variant: "body-md",
              children: _v2
            }), _v12]
          })
        }), (0, _v1.jsxs)(_v37.ModalFooter, {
          children: [(0, _v1.jsx)(_v12.Button, {
            variant: "secondary",
            onClick: _v7 ?? _v6,
            isDisabled: _v9 || _v11,
            children: _v4
          }), (0, _v1.jsx)(_v12.Button, {
            variant: _v10,
            onClick: _v5,
            isLoading: _v11,
            isDisabled: _v8 || _v11,
            children: _v3
          })]
        })]
      })]
    }),
    _v63 = () => {
      let {
          isOwnerOrAdmin: _v0
        } = (0, _v58.usePermissionStore)(),
        _v1 = (0, _v23.useGlobalStore)(_v0 => _v0.entityOwnerId),
        _v2 = (0, _v23.useGlobalStore)(_v0 => _v0.leadCapture),
        _v3 = (0, _v23.useGlobalStore)(_v0 => _v0.leadCaptureState),
        _v4 = (0, _v23.useGlobalStore)(_v0 => _v0.presetLoading),
        _v5 = (0, _v23.useGlobalStore)(_v0 => _v0.presets),
        _v6 = (0, _v23.useGlobalStore)(_v0 => _v0.setLeadCaptureProperties),
        _v7 = (0, _v23.useGlobalStore)(_v0 => _v0.refreshLeadCaptureData),
        _v8 = (0, _v23.useGlobalStore)(_v0 => _v0.setPresetLoading),
        _v9 = (0, _v23.useGlobalStore)(_v0 => _v0.entityType),
        {
          capabilities: _v10
        } = (0, _v9.useCapability)(["hasAdminForcedPreset"], _v1),
        {
          settings: _v11
        } = (0, _v20.useOrionSettings)(),
        _v12 = _v10?.hasAdminForcedPreset || _v11.enable_admin_forced_preset,
        _v13 = (0, _v8.useToast)(),
        {
          refresh: _v14
        } = _v60(),
        [_v15, _v16] = (0, _v53.usePatchUserLeadCaptureForm)(),
        [_v17, _v18] = (0, _v4.useState)(!1),
        [_v19, _v20] = (0, _v4.useState)(!1),
        _v21 = (0, _v4.useRef)(null),
        _v22 = (0, _v4.useRef)(null),
        _v23 = _v2?.uuid,
        _v24 = !!_v2?.isApproved,
        _v25 = (_v5 ?? []).some(_v0 => _v0.isApproved && _v0.uuid !== _v23);
      if ((0, _v4.useEffect)(() => {
        _v16.loading || null === _v21.current || (_v16.error ? _v13({
          title: _v28.default.ApprovalUpdateError,
          status: "error"
        }) : (_v6("isApproved", _v21.current, !0), _v14(), _v9 === _v18.ENTITY_TYPE.EVENT && _v61()), _v21.current = null, _v18(!1));
      }, [_v16.loading, _v16.callCount]), (0, _v4.useEffect)(() => {
        null !== _v22.current && (_v3?.callCount ?? 0) > _v22.current && !_v3?.loading && (_v22.current = null, _v8(!1));
      }, [_v3?.loading, _v3?.callCount]), !_v0 || !_v12) return null;
      if (_v3?.loading || !_v3?.called || _v4 || !_v23) return (0, _v1.jsx)(_v44.Spinner, {
        size: "sm",
        ml: "sm"
      });
      if (!_v1) return null;
      if (!_v24) return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v12.Button, {
          variant: "secondary",
          ml: "sm",
          onClick: () => _v18(!0),
          children: _v28.default.ApprovePreset
        }), (0, _v1.jsx)(_v62, {
          isOpen: _v17,
          onClose: () => _v18(!1),
          headerText: _v28.default.ApprovePreset,
          onSubmit: () => {
            _v21.current = !0, _v15({
              select: ["isApproved"],
              where: {
                userId: _v1,
                leadCaptureFormId: _v23
              },
              variables: {
                isApproved: !0
              }
            });
          },
          loading: _v16.loading,
          primaryButtonText: _v28.default.Approve,
          secondaryButtonText: _v28.default.Cancel,
          children: (0, _v1.jsxs)(_v51.Stack, {
            spacing: "md",
            children: [(0, _v1.jsx)(_v45.Text, {
              variant: "body-lg",
              m: 0,
              children: _v28.default.ApprovePresetModalScopeLine
            }), (0, _v1.jsx)(_v45.Text, {
              variant: "body-lg",
              m: 0,
              children: _v28.default.ApprovePresetModalVisibilityLine
            }), (0, _v1.jsx)(_v45.Text, {
              variant: "body-lg",
              m: 0,
              children: _v28.default.ApprovePresetModalProceedLine
            })]
          })
        })]
      });
      if (_v25) {
        let _v0 = (_v5 ?? []).find(_v0 => _v0.uuid === _v23) ?? {
            uuid: _v23
          },
          _v1 = (_v5 ?? []).filter(_v0 => _v0.isApproved && _v0.uuid !== _v23);
        return (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v12.Button, {
            variant: "secondary",
            ml: "sm",
            onClick: () => _v20(!0),
            children: _v28.default.RemoveApprovalToPreset
          }), (0, _v1.jsx)(_v57, {
            isOpen: _v19,
            userId: _v1,
            preset: _v0,
            approvedPresets: _v1,
            onClose: () => _v20(!1),
            onSuccess: () => {
              _v14(), _v22.current = _v3?.callCount ?? 0, _v8(!0), _v7(), _v9 === _v18.ENTITY_TYPE.EVENT && _v61();
            },
            onError: () => _v13({
              title: _v28.default.ApprovalUpdateError,
              status: "error"
            })
          })]
        });
      }
      return (0, _v1.jsx)(_v52.Tooltip, {
        label: _v28.default.LastApprovedRemoveApprovalTooltip,
        placement: "bottom",
        shouldWrapChildren: !0,
        closeOnScroll: !0,
        children: (0, _v1.jsx)(_v12.Button, {
          variant: "secondary",
          ml: "sm",
          isDisabled: !0,
          children: _v28.default.RemoveApprovalToPreset
        })
      });
    };
  var _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0),
    _v67 = _v0.i(0),
    _v68 = _v0.i(0),
    _v69 = _v0.i(0);
  let _v70 = _v0 => (0, _v1.jsx)(_v69.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      d: "m20.71 9.29-6-6a1 1 0 0 0-.32-.21A1.09 1.09 0 0 0 14 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-8a1 1 0 0 0-.29-.71ZM9 5h4v2H9V5Zm6 14H9v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3Zm4-1a1 1 0 0 1-1 1h-1v-3a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v3H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.41l4 4V18Z",
      fill: "currentColor"
    })
  });
  var _v71 = _v0.i(0);
  let _v72 = () => () => void 0,
    _v73 = () => "Ctrl+S",
    _v74 = () => /Mac|iPhone|iPad|iPod/i.test(navigator.userAgent) ? "⌘S" : "Ctrl+S",
    _v75 = () => (0, _v4.useSyncExternalStore)(_v72, _v74, _v73);
  var _v76 = _v0.i(0),
    _v77 = _v0.i(0),
    _v78 = _v0.i(0),
    _v79 = _v0.i(0),
    _v80 = _v0.i(0),
    _v81 = _v0.i(0),
    _v82 = _v0.i(0),
    _v83 = _v0.i(0),
    _v84 = _v0.i(0),
    _v85 = _v0.i(0),
    _v86 = _v0.i(0),
    _v87 = _v0.i(0),
    _v88 = _v0.i(0),
    _v89 = _v0.i(0),
    _v90 = _v0.i(0);
  let _v91 = "live_event",
    _v92 = _v0 => {
      let _v1 = (0, _v23.useGlobalStore)(_v0 => _v0.entityType),
        _v2 = (0, _v23.useGlobalStore)(_v0 => _v0.entityId),
        _v3 = (0, _v23.useGlobalStore)(_v0 => _v0.entityOwnerId),
        _v4 = (0, _v23.useGlobalStore)(_v0 => _v0.providers),
        _v5 = (0, _v23.useGlobalStore)(_v0 => _v0.leadCapture.uuid),
        _v6 = (0, _v23.useGlobalStore)(_v0 => _v0.entity?.privacy?.view),
        _v7 = (0, _v23.useGlobalStore)(_v0 => _v0.entity?.numberOfVideos),
        _v8 = (0, _v23.useGlobalStore)(_v0 => _v0.entity?.seoAllowIndexed),
        _v9 = (0, _v23.useGlobalStore)(_v0 => _v0.leadCapture.emailLists || []),
        _v10 = (0, _v23.useGlobalStore)(_v0 => _v0.leadCapture.customFields || []),
        _v11 = (0, _v23.useGlobalStore)(_v0 => _v0.leadCapture.hiddenFields || []),
        _v12 = (0, _v23.useGlobalStore)(_v0 => _v0.leadCapture.logo?.isActive),
        _v13 = (0, _v23.useGlobalStore)(_v0 => _v0.leadCapture.logo?.isLinkActive),
        _v14 = (0, _v23.useGlobalStore)(_v0 => _v0.leadCapture.background?.isActive),
        _v15 = (0, _v23.useGlobalStore)(_v0 => _v0.leadCapture.isEventDateVisible),
        _v16 = (0, _v23.useGlobalStore)(_v0 => _v0.leadCapture.isEventDateSetToCalendar),
        _v17 = (0, _v23.useGlobalStore)(_v0 => _v0.leadCapture.layout),
        _v18 = (0, _v23.useGlobalStore)(_v0 => _v0.leadCapture.presetName),
        _v19 = (0, _v21.useViewer)()?.teamUser,
        {
          dropdownFieldsCount: _v20,
          textFieldsCount: _v21,
          customFieldNames: _v22
        } = (0, _v4.useMemo)(() => {
          let _v0 = _v10.filter(_v0 => _v0.type === _v26.CustomFieldTypes.Dropdown).length || 0;
          return {
            dropdownFieldsCount: _v0,
            textFieldsCount: _v10.filter(_v0 => _v0.type === _v26.CustomFieldTypes.Text).length || 0,
            customFieldNames: _v10.map(_v0 => `${_v0.isRequired ? "r:" : ""}${_v0.name}`)
          };
        }, [_v10]),
        _v23 = _v11.length,
        {
          providerNames: _v24,
          providerListIds: _v25
        } = (0, _v4.useMemo)(() => ({
          providerNames: _v4.filter(_v0 => _v0.connected).map(_v0 => _v0.name),
          providerListIds: _v9.map(_v0 => _v0.listId)
        }), [_v4, _v9]),
        [_v26, _v27] = (0, _v4.useMemo)(() => {
          let _v0 = [],
            _v1 = [];
          for (let [_v0, _v1] of Object.entries({
            logo: _v12,
            background: _v14,
            EventDate: _v15,
            addToCalender: _v16,
            linkLogo: _v13
          })) _v1 ? _v0.push(_v0) : _v1.push(_v0);
          return [_v0, _v1];
        }, [_v15, _v16, _v14, _v13, _v12]),
        _v28 = (0, _v4.useMemo)(() => ({
          location: _v0 || _v90.BP_LOCATION.LIVE_EVENT_REGISTRATION_DRAWER,
          product: "Distribution",
          preset: _v18,
          dropdownFieldsCount: _v20,
          textFieldsCount: _v21,
          path: window.location.pathname,
          teamOwnerId: _v3?.toString(),
          resourceType: _v1,
          resourceId: _v2,
          resourcePrivacy: _v6,
          hiddenFieldsCount: _v23,
          providerNames: _v24.length > 0 ? _v24 : null,
          providerListIds: _v25.length > 0 ? _v25 : null,
          togglesOn: _v26.length > 0 ? _v26 : null,
          togglesOff: _v27.length > 0 ? _v27 : null,
          customFieldNames: _v22.length > 0 ? _v22 : null,
          layout: _v17
        }), [_v0, _v20, _v21, _v3, _v1, _v2, _v23, _v24, _v25, _v26, _v27, _v22, _v17, _v18, _v6]),
        _v29 = (0, _v4.useCallback)((_v0, _v1, _v2) => {
          let _v3 = _v0 ?? _v90.BP_EVENT_NAMES.UPDATE_REGISTRATION_FORM,
            _v4 = _v2 ?? _v90.DEFAULT_SCHEMA_VERSION,
            _v5 = (0, _v77.deepSnakeCase)({
              ..._v28,
              ..._v1
            });
          _v76.BigPictureClient.sendEvent(new _v76.Event(_v3, _v4, _v5));
        }, [_v28]),
        _v30 = (0, _v4.useCallback)(async (_v0 = _v90.DEFAULT_SCHEMA_VERSION) => {
          await _v76.BigPictureClient.sendEvent(new _v76.Event(_v90.BP_EVENT_NAMES.UPDATE_REGISTRATION_FORM, _v0, (0, _v77.deepSnakeCase)({
            ..._v28
          })));
        }, [_v28]),
        _v31 = (0, _v4.useMemo)(() => _v1 === _v18.ENTITY_TYPE.EVENT ? window.location.pathname.includes("rtmp") ? "live_event_rtmp_page" : "live_browser_studio" : null, [_v1]),
        _v32 = (0, _v4.useMemo)(() => _v1 === _v18.ENTITY_TYPE.EVENT ? window.location.pathname.includes("rtmp") ? "stream_management" : "browser_studio" : null, [_v1]),
        _v33 = (0, _v4.useMemo)(() => {
          switch (_v1) {
            case _v18.ENTITY_TYPE.EVENT:
            case _v18.ENTITY_TYPE.VIDEO:
              return window.location.href ?? null;
          }
          return null;
        }, [_v1]),
        _v34 = (0, _v4.useMemo)(() => {
          if (_v1 === _v18.ENTITY_TYPE.EVENT) switch (_v6) {
            case "anybody":
              return "public";
            case "nobody":
              return "private";
            case "password":
              return "password";
            case "unlisted":
              return "unlisted";
            case "embed_only":
              return "hide_from_vimeo";
          }
          return null;
        }, [_v1, _v6]);
      return {
        sendEvent: _v29,
        sendGenericEvent: _v30,
        sendRegistrationActionBP: ({
          eventName: _v0 = _v90.BP_EVENT_NAMES.UPDATE_REGISTRATION_FORM,
          copy: _v1 = null,
          actionName: _v2,
          pageName: _v3,
          location: _v4 = _v90.BP_LOCATION.DRAWER,
          providerName: _v5 = null,
          providerListId: _v6 = null,
          actionValue: _v7 = null,
          version: _v8 = _v90.BP_CURRENT_SCHEMA_VERSION,
          target: _v9 = null,
          element: _v10 = _v90.BP_ELEMENT.BUTTON,
          flow: _v11 = null,
          liveFeature: _v12 = "registration_form",
          isIntegration: _v13 = !1,
          integrationId: _v14 = null,
          integrationName: _v15 = null,
          integrationType: _v16 = null,
          partnerBucket: _v17 = null,
          isPartner: _v18 = null,
          referrerPage: _v19 = _v31,
          type: _v20 = null
        }) => {
          if (!_v3) switch (_v1) {
            case _v18.ENTITY_TYPE.EVENT:
              _v3 = _v90.BP_PAGE.EVENT_REGISTRATION_PAGE;
              break;
            case _v18.ENTITY_TYPE.VIDEO:
              _v3 = _v90.BP_PAGE.SINGLE_VIDEO_VIEW_MANAGE;
              break;
            case _v18.ENTITY_TYPE.SHOWCASE:
              _v3 = _v90.BP_PAGE.SHOWCASE_MANAGER;
          }
          let _v21 = {
            ...(0, _v80.buildActionBpContext)({
              action_type: "click",
              feature: null
            }),
            ...(0, _v88.buildWebBpContext)({
              page_name: _v3 ?? _v90.BP_PAGE.EVENT_REGISTRATION_PAGE,
              referrer_page_name: _v19,
              referrer: _v33,
              path: window.location.pathname,
              target: _v9,
              copy: null,
              location: null
            }),
            ...(0, _v84.buildTeamBpContextFromTeamUser)(_v19 ?? void 0),
            ...(0, _v83.buildProductAnalyticsBpContext)({
              feature: "registration",
              product: "gates",
              element: _v10,
              location: _v4,
              copy: _v1,
              modal_name: null,
              device_type: (0, _v79.default)(),
              flow: _v11,
              entity_type: (0, _v78.getFormattedEntityType)(_v1)
            }),
            ...(0, _v85.buildThirdPartyIntegrationBpContext)({
              is_integration: _v13,
              integration_id: _v14,
              integration_name: _v15,
              integration_type: _v16,
              partner_bucket: _v17,
              is_partner: _v18
            }),
            ...(_v1 === _v18.ENTITY_TYPE.VIDEO && (0, _v86.buildVideoBpContext)({
              video_id: Number(_v2)
            })),
            ...(_v1 === _v18.ENTITY_TYPE.EVENT && (0, _v82.buildLiveBpContext)({
              live_feature: _v12,
              live_event_id: _v2,
              live_event_type: _v91,
              recurring_live_event_id: _v2,
              live_production_method: _v32
            })),
            ...(_v1 === _v18.ENTITY_TYPE.SHOWCASE && (0, _v81.buildCollectionBpContext)({
              collection_privacy: null,
              entity_id: parseInt(_v2),
              number_of_videos: _v7 ?? null,
              collection_embed_privacy: _v6 ?? null,
              is_seo_on: _v8 ?? null
            }))
          };
          (0, _v89.sendBpEventWithContexts)(_v0, _v21, _v8, {
            action_name: _v2,
            form_id: _v5,
            provider_list_id: _v6,
            provider_name: _v5,
            action_value: _v7,
            type: _v20
          });
        },
        sendGatesManagerBP: ({
          eventName: _v0 = _v90.BP_EVENT_NAMES.UPDATE_PRESET,
          location: _v1,
          copy: _v2,
          pageName: _v3,
          path: _v4 = window.location.pathname,
          actionName: _v5,
          element: _v6 = _v90.BP_ELEMENT.BUTTON,
          flow: _v7 = null,
          notificationName: _v8 = null,
          version: _v9 = _v90.BP_CURRENT_VERSION_PRESET
        }) => {
          if (!_v3) switch (_v1) {
            case _v18.ENTITY_TYPE.VIDEO:
              _v3 = _v90.BP_PAGE.SINGLE_VIDEO_VIEW_MANAGE;
              break;
            case _v18.ENTITY_TYPE.EVENT:
              _v3 = _v90.BP_PAGE.EVENT_REGISTRATION_PAGE;
              break;
            case _v18.ENTITY_TYPE.SHOWCASE:
            default:
              _v3 = _v90.BP_PAGE.SHOWCASE_MANAGER;
          }
          let _v10 = {
              ...(_v0 === _v90.BP_EVENT_NAMES.UPDATE_PRESET && (0, _v80.buildActionBpContext)({
                action_type: "click",
                feature: null
              })),
              ...(_v0 !== _v90.BP_EVENT_NAMES.UPDATE_PRESET && (0, _v87.buildViewBpContext)({
                view_type: "impression",
                feature: null
              })),
              ...(0, _v88.buildWebBpContext)({
                page_name: _v3,
                path: _v4,
                target: null,
                copy: _v2,
                location: null
              }),
              ...(0, _v84.buildTeamBpContextFromTeamUser)(_v19 ?? void 0),
              ...(0, _v83.buildProductAnalyticsBpContext)({
                feature: "preset",
                product: "gates",
                element: _v6,
                location: _v1,
                copy: _v2,
                modal_name: null,
                device_type: (0, _v79.default)(),
                flow: _v7,
                entity_type: (0, _v78.getFormattedEntityType)(_v1)
              }),
              ...(_v1 === _v18.ENTITY_TYPE.VIDEO && _v0 === _v90.BP_EVENT_NAMES.UPDATE_PRESET && (0, _v86.buildVideoBpContext)({
                video_id: parseInt(_v2),
                video_privacy: _v6 ?? null
              })),
              ...(_v1 === _v18.ENTITY_TYPE.EVENT && (0, _v82.buildLiveBpContext)({
                audience_type: _v91,
                recurring_live_event_id: _v2,
                live_feature: "registration",
                live_event_id: _v2,
                event_privacy: _v34,
                live_event_type: _v91
              })),
              ...(_v1 === _v18.ENTITY_TYPE.SHOWCASE && (0, _v81.buildCollectionBpContext)({
                collection_privacy: null,
                entity_id: parseInt(_v2),
                number_of_videos: _v7 ?? null,
                collection_embed_privacy: _v6 ?? null,
                is_seo_on: _v8 ?? null
              })),
              ...(0, _v85.buildThirdPartyIntegrationBpContext)({
                is_integration: !1,
                integration_id: null,
                integration_name: null,
                is_partner: null
              })
            },
            _v11 = _v0 === _v90.BP_EVENT_NAMES.UPDATE_PRESET ? {
              action_name: _v5,
              form_id: _v5,
              provider_name: null,
              provider_list_id: null
            } : _v0 === _v90.BP_EVENT_NAMES.IMPRESSION_INITIAL_STATE || _v0 === _v90.BP_EVENT_NAMES.IMPRESSION_PRESET_CHANGED ? {
              form_id: _v5
            } : {
              notification_name: _v8,
              error_id: null,
              error_name: null,
              checkbox_copy: null,
              notification_copy: null
            };
          (0, _v89.sendBpEventWithContexts)(_v0, _v10, _v9, _v11);
        }
      };
    };
  var _v93 = _v0.i(0),
    _v94 = _v0.i(0);
  let _v95 = () => {
    let {
        baseUrl: _v0,
        jwt: _v1,
        locale: _v2,
        xVimeoPage: _v3
      } = (0, _v94.useGctlConfig)(),
      _v4 = (0, _v8.useToast)(),
      _v5 = (0, _v23.useGlobalStore)(_v0 => _v0.entityOwnerId),
      _v6 = (0, _v23.useGlobalStore)(_v0 => _v0.entityType),
      _v7 = (0, _v23.useGlobalStore)(_v0 => _v0.entityId),
      _v8 = (0, _v23.useGlobalStore)(_v0 => _v0.saveFormChanges),
      _v9 = (0, _v23.useGlobalStore)(_v0 => _v0.setPresetLoading),
      _v10 = (0, _v23.useGlobalStore)(_v0 => _v0.isSavingPreset),
      _v11 = (0, _v23.useGlobalStore)(_v0 => _v0.setIsSavingPreset),
      {
        settings: _v12
      } = (0, _v20.useOrionSettings)(),
      {
        patchLeadCapture: _v13,
        patchLeadCaptureImmediately: _v14
      } = (0, _v25.usePatchLeadCapture)(),
      _v15 = (0, _v4.useCallback)(_v0 => !!_v0 && (!_v12.enable_explicit_registration_save || !(Object.keys(_v23.useGlobalStore.getState().formPendingChanges).length > 0) && !(Object.keys(_v23.useGlobalStore.getState().formSavingChanges).length > 0)) && (_v9(!0), _v12.enable_explicit_registration_save ? _v14(_v26.UUID, _v0, !0) : _v13(_v26.UUID, _v0, !0), !0), [_v13, _v14, _v9, _v12.enable_explicit_registration_save]),
      _v16 = (0, _v4.useCallback)(async (_v0, _v1 = !1) => {
        if (!_v5) return !1;
        _v11(!0);
        try {
          if (!(await _v8())) return _v4({
            title: _v28.default.ChangesCouldNotBeSaved,
            status: "error"
          }), !1;
          let _v0 = await (0, _v93.putUserLeadCaptureForms)({
            baseUrl: _v0,
            headers: {
              Authorization: _v1 ? `jwt ${_v1}` : "",
              Accept: "application/vnd.vimeo.*+json;version=3.4.9",
              "Content-Type": "application/json",
              "Vimeo-Page": `${_v3}`,
              "Accept-Language": _v2 ?? "en"
            },
            select: [_v26.PRESET_NAME, _v26.UUID],
            where: {
              userId: _v5
            },
            variables: {
              presetName: _v0,
              sourceId: _v23.useGlobalStore.getState().leadCapture.uuid,
              entityType: "" !== _v6 ? _v6 : "event",
              entityId: parseInt(_v7),
              isApproved: _v1
            }
          });
          if (!_v0?.uuid) return _v4({
            title: _v28.default.ChangesCouldNotBeSaved,
            status: "error"
          }), !1;
          return _v15(_v0.uuid), !0;
        } catch {
          return _v4({
            title: _v28.default.ChangesCouldNotBeSaved,
            status: "error"
          }), !1;
        } finally {
          _v11(!1);
        }
      }, [_v15, _v0, _v7, _v5, _v6, _v1, _v2, _v8, _v11, _v4, _v3]),
      _v17 = (0, _v4.useCallback)(async (_v0, _v1) => {
        if (!_v5) return !1;
        _v11(!0);
        try {
          if (!(await _v8())) return _v4({
            title: _v28.default.ChangesCouldNotBeSaved,
            status: "error"
          }), !1;
          let _v0 = _v23.useGlobalStore.getState().leadCapture.uuid;
          return await (0, _v93.putUserLeadCaptureForms)({
            baseUrl: _v0,
            headers: {
              Authorization: _v1 ? `jwt ${_v1}` : "",
              Accept: "application/vnd.vimeo.*+json;version=3.4.9",
              "Content-Type": "application/json",
              "Vimeo-Page": `${_v3}`,
              "Accept-Language": _v2 ?? "en"
            },
            select: [_v26.PRESET_NAME, _v26.UUID],
            where: {
              userId: _v5
            },
            variables: {
              ...{
                id: _v0,
                presetName: _v1
              },
              sourceId: _v0,
              entityType: "" !== _v6 ? _v6 : "event",
              entityId: parseInt(_v7)
            }
          }), _v15(_v0), !0;
        } catch {
          return _v4({
            title: _v28.default.ChangesCouldNotBeSaved,
            status: "error"
          }), !1;
        } finally {
          _v11(!1);
        }
      }, [_v15, _v0, _v7, _v5, _v6, _v1, _v2, _v8, _v11, _v4, _v3]);
    return {
      attachPresetToForm: _v15,
      createPreset: _v16,
      renamePreset: (0, _v4.useCallback)(async (_v0, _v1) => {
        if (!_v5 || !_v6) return !1;
        _v11(!0);
        try {
          return await (0, _v93.putUserLeadCaptureForms)({
            baseUrl: _v0,
            headers: {
              Authorization: _v1 ? `jwt ${_v1}` : "",
              Accept: "application/vnd.vimeo.*+json;version=3.4.9",
              "Content-Type": "application/json",
              "Vimeo-Page": `${_v3}`,
              "Accept-Language": _v2 ?? "en"
            },
            select: [_v26.PRESET_NAME, _v26.UUID],
            where: {
              userId: _v5
            },
            variables: {
              id: _v0,
              presetName: _v1,
              entityType: _v6,
              entityId: parseInt(_v7)
            }
          }), !0;
        } catch {
          return !1;
        } finally {
          _v11(!1);
        }
      }, [_v0, _v7, _v5, _v6, _v1, _v2, _v11, _v3]),
      updatePreset: _v17,
      isSavingPreset: _v10
    };
  };
  var _v96 = _v0.i(0),
    _v97 = _v0.i(0),
    _v98 = _v0.i(0);
  let _v99 = () => {
      let _v0 = (0, _v23.useGlobalStore)(_v0 => _v0.totalPresets),
        _v1 = (0, _v23.useGlobalStore)(_v0 => _v0.entityOwnerId),
        {
          isOwnerOrAdmin: _v2
        } = (0, _v58.usePermissionStore)(),
        {
          capabilities: _v3
        } = (0, _v9.useCapability)(["hasAdminForcedPreset"], _v1),
        {
          settings: _v4
        } = (0, _v20.useOrionSettings)(),
        _v5 = _v3?.hasAdminForcedPreset || _v4.enable_admin_forced_preset;
      return {
        isOwnerOrAdmin: _v2,
        shouldUseApprovedPresetOnly: _v5,
        addNewPresetProhibited: _v5 && !_v2 || _v0 >= _v26.PRESET_LIMIT
      };
    },
    _v100 = ({
      existingPresetNames: _v0,
      isOpen: _v1,
      onClose: _v2,
      onCreated: _v3,
      requiresApproval: _v4
    }) => {
      let [_v5, _v6] = (0, _v4.useState)(""),
        [_v7, _v8] = (0, _v4.useState)(!1),
        _v9 = (0, _v4.useRef)(null),
        {
          createPreset: _v10,
          isSavingPreset: _v11
        } = _v95(),
        {
          sendGatesManagerBP: _v12
        } = _v92(),
        {
          onFormPresetChanged: _v13
        } = (0, _v97.useCallbackContext)(),
        _v14 = () => {
          _v11 || (_v6(""), _v8(!1), _v2());
        },
        _v15 = () => {
          _v6(""), _v8(!1), _v2(), _v3?.();
        },
        _v16 = async () => {
          _v13?.("save_new_preset"), _v12({
            eventName: _v90.BP_EVENT_NAMES.UPDATE_PRESET,
            location: _v90.BP_LOCATION.NOTIFICATION,
            copy: _v90.BP_COPY.SAVE,
            actionName: "save_new_preset"
          });
          let _v0 = _v5.trim();
          _v4 ? _v8(!0) : (await _v10(_v0, !1)) && _v15();
        },
        _v17 = async _v0 => {
          (await _v10(_v5.trim(), _v0)) && _v15();
        },
        _v18 = _v0.includes(_v5.trim());
      return (0, _v4.useEffect)(() => {
        _v1 && !_v7 && _v9.current?.focus();
      }, [_v1, _v7]), (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v62, {
          isOpen: _v1 && !_v7,
          onClose: _v14,
          headerText: _v28.default.SaveNewPreset,
          bodyText: _v28.default.SavePresetSettings,
          onSubmit: _v16,
          primaryDisabled: !(0, _v98.isPresetNameValid)(_v5, _v0),
          secondaryDisabled: _v11,
          loading: _v11,
          primaryButtonText: _v28.default.Save,
          secondaryButtonText: _v28.default.Cancel,
          children: (0, _v1.jsxs)(_v51.Stack, {
            spacing: "xs",
            children: [(0, _v1.jsx)(_v13.Header, {
              size: "xs",
              children: _v28.default.PresetName
            }), (0, _v1.jsx)(_v96.Input, {
              isInvalid: _v18,
              minLength: 1,
              maxLength: _v26.MAX_PRESET_NAME_LENGTH,
              ref: _v9,
              value: _v5,
              onChange: _v0 => {
                var _v1;
                return _v1 = _v0.target.value, void ((0, _v98.hasValidPresetNameCharacters)(_v1) && _v6(_v1));
              }
            }), _v5.length > _v26.SHOW_PRESET_CHAR_LIMIT_LENGTH ? (0, _v1.jsx)(_v6.Flex, {
              justify: "flex-end",
              children: (0, _v1.jsxs)(_v45.Text, {
                variant: "body-sm",
                color: "text-secondary",
                children: [_v5.length, "/", _v26.MAX_PRESET_NAME_LENGTH]
              })
            }) : _v18 ? (0, _v1.jsx)(_v45.Text, {
              variant: "body-sm",
              color: "red.500",
              children: _v28.default.EnterUniquePreset
            }) : null]
          })
        }), (0, _v1.jsx)(_v62, {
          isOpen: _v1 && _v7,
          onClose: _v14,
          headerText: _v28.default.ApprovePreset,
          bodyText: _v28.default.ApprovePresetConfirmation,
          onSubmit: () => _v17(!0),
          onSecondary: () => _v17(!1),
          secondaryDisabled: _v11,
          loading: _v11,
          primaryButtonText: _v28.default.Approve,
          secondaryButtonText: _v28.default.Cancel
        })]
      });
    },
    _v101 = ({
      title: _v0,
      description: _v1
    }) => (0, _v1.jsxs)(_v6.Flex, {
      direction: "column",
      gap: "xs",
      children: [(0, _v1.jsx)(_v45.Text, {
        variant: "heading-xs",
        color: "text-primary",
        children: _v0
      }), (0, _v1.jsx)(_v45.Text, {
        variant: "body-md",
        color: "text-secondary",
        children: _v1
      })]
    }),
    _v102 = ({
      onSave: _v0,
      isDirty: _v1,
      isSaving: _v2
    }) => {
      let _v3 = _v75(),
        [_v4, _v5] = (0, _v4.useState)(!1),
        [_v6, _v7] = (0, _v4.useState)(null),
        _v8 = (0, _v23.useGlobalStore)(_v0 => _v0.leadCapture.uuid),
        _v9 = (0, _v23.useGlobalStore)(_v0 => _v0.presets),
        _v10 = (0, _v23.useGlobalStore)(_v0 => _v0.parentPreset),
        _v11 = (0, _v23.useGlobalStore)(_v0 => _v0.presetLoading),
        _v12 = _v9.find(_v0 => _v0.uuid === _v8),
        _v13 = _v9.find(_v0 => _v0.uuid === _v10?.uuid),
        _v14 = _v12 ?? _v13,
        {
          addNewPresetProhibited: _v15,
          isOwnerOrAdmin: _v16,
          shouldUseApprovedPresetOnly: _v17
        } = _v99(),
        {
          refresh: _v18
        } = _v60(),
        {
          isSavingPreset: _v19,
          updatePreset: _v20
        } = _v95(),
        {
          sendGatesManagerBP: _v21
        } = _v92(),
        _v22 = async () => {
          _v6 && (_v21({
            eventName: _v90.BP_EVENT_NAMES.UPDATE_PRESET,
            location: _v90.BP_LOCATION.TOP_ACTION_BAR,
            copy: _v90.BP_COPY.SAVE,
            actionName: "apply_to_all_registration_forms"
          }), (await _v20(_v6.uuid, _v6.presetName)) && _v7(null));
        },
        _v23 = _v2 || _v19 || _v11,
        _v24 = !_v1 || _v23;
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsxs)(_v67.SplitButton, {
          variant: "primary",
          size: "md",
          ml: "sm",
          mr: "sm",
          children: [(0, _v1.jsx)(_v52.Tooltip, {
            label: _v28.default.getSaveShortcut(_v3),
            placement: "bottom",
            children: (0, _v1.jsx)(_v67.SplitButtonPrimary, {
              onClick: _v0,
              isDisabled: _v24,
              isLoading: _v2,
              children: _v28.default.Save
            })
          }), (0, _v1.jsxs)(_v64.Menu, {
            placement: "bottom-end",
            children: [(0, _v1.jsx)(_v67.SplitButtonSecondaryMenu, {
              "aria-label": _v28.default.RegistrationFormSaveOptions,
              isDisabled: _v24
            }), (0, _v1.jsxs)(_v66.MenuList, {
              minWidth: (0, _v7.rem)(360),
              children: [(0, _v1.jsx)(_v65.MenuItem, {
                icon: (0, _v1.jsx)(_v70, {}),
                onClick: _v0,
                isDisabled: _v24,
                py: "3",
                children: (0, _v1.jsx)(_v101, {
                  title: _v28.default.getSaveForThisRegistrationShortcut(_v3),
                  description: _v28.default.ChangesApplyOnlyToThisRegistration
                })
              }), null != _v14 && (0, _v1.jsx)(_v65.MenuItem, {
                icon: (0, _v1.jsx)(_v71.Users, {}),
                onClick: () => {
                  _v14?.uuid && _v14.presetName && _v7({
                    uuid: _v14.uuid,
                    presetName: _v14.presetName
                  });
                },
                isDisabled: _v23,
                py: "3",
                children: (0, _v1.jsx)(_v101, {
                  title: _v28.default.ApplyToPreset,
                  description: _v28.default.UpdateEveryRegistrationUsingPreset
                })
              }), (0, _v1.jsx)(_v65.MenuItem, {
                icon: (0, _v1.jsx)(_v68.Duplicate, {}),
                onClick: () => _v5(!0),
                isDisabled: _v15 || _v23,
                py: "3",
                children: (0, _v1.jsx)(_v101, {
                  title: _v28.default.SaveAsANewPreset,
                  description: _v28.default.CreateReusablePresetForOtherRegistrations
                })
              })]
            })]
          })]
        }), (0, _v1.jsx)(_v62, {
          isOpen: null !== _v6,
          onClose: () => _v7(null),
          headerText: _v28.default.ApplyToAllRegistrationForms,
          bodyText: _v28.default.ApplyToAllRegistrationFormsConfirmation,
          onSubmit: _v22,
          primaryDisabled: _v19,
          secondaryDisabled: _v19,
          loading: _v19,
          primaryButtonText: _v28.default.SaveChanges,
          secondaryButtonText: _v28.default.Cancel
        }), (0, _v1.jsx)(_v100, {
          existingPresetNames: _v9.flatMap(_v0 => null == _v0.presetName ? [] : [_v0.presetName]),
          isOpen: _v4,
          onClose: () => _v5(!1),
          onCreated: _v18,
          requiresApproval: _v17 && _v16
        })]
      });
    };
  var _v103 = _v0.i(0),
    _v104 = _v0.i(0),
    _v105 = _v0.i(0),
    _v106 = _v0.i(0);
  let _v107 = "rfsip",
    _v108 = ({
      children: _v0
    }) => {
      let _v1 = (0, _v21.useViewer)(),
        _v2 = _v1?.user?.id,
        {
          data: _v3,
          mutate: _v4
        } = (0, _v106.useGetUserPreferences)(() => null != _v2 ? {
          where: {
            userId: _v2
          },
          select: [_v107]
        } : null),
        [_v5] = (0, _v106.usePatchUserPreferences)(),
        _v6 = void 0 !== _v3 && !_v3?.[_v107],
        _v7 = (0, _v4.useCallback)(() => {
          null != _v2 && (_v4({
            [_v107]: !0
          }, {
            revalidate: !1
          }), _v5({
            where: {
              userId: _v2
            },
            select: [_v107],
            variables: {
              [_v107]: 1
            }
          }).then(() => _v4()));
        }, [_v4, _v5, _v2]);
      return (0, _v1.jsx)(_v103.AnnouncementPopover, {
        isOpen: _v6,
        anchorWithinChildren: !0,
        placement: "bottom-end",
        onAcknowledge: _v7,
        badge: (0, _v1.jsx)(_v104.Badge, {
          variant: "new",
          size: "sm",
          children: (0, _v1.jsx)(_v45.Text, {
            color: "text-primary",
            variant: "heading-2xs",
            children: _v28.default.New
          })
        }),
        title: _v28.default.MeetTheNewSave,
        body: _v28.default.NewSaveAnnouncementDescription,
        children: (0, _v1.jsx)(_v105.PopoverAnchor, {
          children: (0, _v1.jsx)(_v5.Box, {
            display: "inline-flex",
            children: _v0
          })
        })
      });
    },
    _v109 = ({
      onSave: _v0,
      isDirty: _v1,
      isSaving: _v2
    }) => {
      let _v3 = _v75();
      return (0, _v1.jsx)(_v52.Tooltip, {
        label: _v28.default.getSaveShortcut(_v3),
        placement: "bottom",
        children: (0, _v1.jsx)(_v12.Button, {
          variant: "primary",
          size: "md",
          ml: "sm",
          mr: "sm",
          onClick: _v0,
          isDisabled: !_v1 || _v2,
          isLoading: _v2,
          children: _v28.default.Save
        })
      });
    };
  var _v110 = _v0.i(0),
    _v111 = _v0.i(0),
    _v112 = _v0.i(0);
  let _v113 = () => {
      let _v0 = (0, _v23.useGlobalStore)(_v0 => _v0.canUndo()),
        _v1 = (0, _v23.useGlobalStore)(_v0 => _v0.canRedo()),
        _v2 = (0, _v23.useGlobalStore)(_v0 => _v0.undo),
        _v3 = (0, _v23.useGlobalStore)(_v0 => _v0.redo),
        _v4 = (0, _v23.useGlobalStore)(_v0 => _v0.setSideMenuType),
        _v5 = (0, _v23.useGlobalStore)(_v0 => _v0.canRedoEmail),
        _v6 = (0, _v23.useGlobalStore)(_v0 => _v0.canUndoEmail),
        _v7 = (0, _v23.useGlobalStore)(_v0 => _v0.setSelectedSettingsTab),
        {
          setPreviewType: _v8
        } = (0, _v4.useContext)(_v112.PreviewContext),
        {
          selectedSection: _v9
        } = (0, _v27.useSectionStore)(_v0 => _v0),
        {
          patchLeadCapture: _v10
        } = (0, _v25.usePatchLeadCapture)(),
        {
          emitMessage: _v11
        } = (0, _v19.useBroadcastChannel)(_v10.BROADCAST_CHANNEL_NAME, () => ({})),
        _v12 = _v0 => {
          let _v1 = _v0[_v18.LOCATION_STATE.PREVIEW_TYPE],
            _v2 = _v0[_v18.LOCATION_STATE.SIDE_MENU],
            _v3 = _v0[_v18.LOCATION_STATE.TAB];
          _v1 && _v8(_v1), _v2 && [_v26.SIDE_MENU_CONTENT.BACKGROUND, _v26.SIDE_MENU_CONTENT.LOGO, _v26.SIDE_MENU_CONTENT.SETTINGS].includes(_v2) && _v4(_v2), _v3 && _v7(_v3);
        };
      return (0, _v1.jsxs)(_v6.Flex, {
        children: [(0, _v1.jsx)(_v52.Tooltip, {
          label: _v28.default.Undo,
          placement: "bottom",
          children: (0, _v1.jsx)(_v42.IconButton, {
            "aria-label": _v28.default.Undo,
            icon: (0, _v1.jsx)(_v111.Undo, {}),
            isDisabled: !(() => {
              switch (_v9) {
                case _v26.SECTION_TYPES.FORM:
                  return _v0;
                case _v26.SECTION_TYPES.EMAILS:
                  return _v6;
              }
              return !1;
            })(),
            size: "md",
            variant: "tertiary",
            onClick: () => {
              switch (_v9) {
                case _v26.SECTION_TYPES.FORM:
                  return (() => {
                    let _v0 = _v2();
                    if (_v0) {
                      let [_v0, _v1, _v2, _v3] = _v0;
                      _v10(_v0, _v1, void 0, !1, {
                        value: _v3
                      }), _v12(_v2);
                    }
                  })();
                case _v26.SECTION_TYPES.EMAILS:
                  return _v11({
                    type: _v10.BROADCAST_ACTIONS.UNDO
                  });
              }
            }
          })
        }), (0, _v1.jsx)(_v52.Tooltip, {
          label: _v28.default.Redo,
          placement: "bottom",
          children: (0, _v1.jsx)(_v42.IconButton, {
            "aria-label": _v28.default.Redo,
            icon: (0, _v1.jsx)(_v110.Redo, {}),
            isDisabled: !(() => {
              switch (_v9) {
                case _v26.SECTION_TYPES.FORM:
                  return _v1;
                case _v26.SECTION_TYPES.EMAILS:
                  return _v5;
              }
              return !1;
            })(),
            size: "md",
            variant: "tertiary",
            onClick: () => {
              switch (_v9) {
                case _v26.SECTION_TYPES.FORM:
                  return (() => {
                    let _v0 = _v3();
                    if (_v0) {
                      let [_v0, _v1, _v2, _v3] = _v0;
                      _v10(_v0, _v1, void 0, !1, {
                        value: _v3
                      }), _v12(_v2);
                    }
                  })();
                case _v26.SECTION_TYPES.EMAILS:
                  return _v11({
                    type: _v10.BROADCAST_ACTIONS.REDO
                  });
              }
            }
          })
        })]
      });
    },
    _v114 = ({
      onClose: _v0,
      getBreadCrumb: _v1,
      isManualSaveRequired: _v2,
      isDirty: _v3,
      isSaving: _v4,
      onSave: _v5,
      requestExit: _v6
    }) => {
      let _v7 = (0, _v23.useGlobalStore)(_v0 => _v0.setCurrentSelectedFieldIndex),
        {
          isAutoSaving: _v8,
          isActivelySaving: _v9
        } = _v24(),
        _v10 = (0, _v23.useGlobalStore)(_v0 => _v0.presetLoading),
        _v11 = (0, _v23.useGlobalStore)(_v0 => _v0.entityType),
        _v12 = (0, _v23.useGlobalStore)(_v0 => _v0.entity.title),
        _v13 = (0, _v27.useSectionStore)(_v0 => _v0.selectedSection),
        {
          settings: _v14
        } = (0, _v20.useOrionSettings)(),
        _v15 = (0, _v49.useIsBokeh)(),
        {
          sendGenericEvent: _v16
        } = _v92(),
        _v17 = (0, _v46.useColorModeValue)("slate.50", "grayscale.700"),
        _v18 = [_v26.SECTION_TYPES.FORM, _v26.SECTION_TYPES.EMAILS].includes(_v13),
        _v19 = _v26.SECTION_TYPES.FORM === _v13,
        _v20 = _v2 && _v14.enable_registration_preset_editing && _v13 === _v26.SECTION_TYPES.FORM,
        _v21 = (0, _v41.useHistory)(),
        _v22 = () => {
          _v6(() => {
            _v16().finally(() => {
              _v0?.();
              let _v0 = new URLSearchParams(_v21.location.search);
              _v0.delete("section"), _v21.replace({
                search: _v0.toString()
              }), _v7(0), _v11 === _v18.ENTITY_TYPE.EVENT && window.opener && !window.opener.closed && window.opener.focus();
            });
          });
        },
        _v23 = _v13 === _v26.SECTION_TYPES.EMAILS ? (0, _v50.translate)({
          singular: 'Email preview for "{TITLE}"',
          replacements: {
            TITLE: _v12
          },
          dictionary: {
            es: {
              singular: 'Vista previa de correo electrónico para "{TITLE}"'
            },
            "de-DE": {
              singular: "E-Mail-Vorschau für „{TITLE}“"
            },
            "fr-FR": {
              singular: "Aperçu de l'e-mail pour « {TITLE} »"
            },
            "ja-JP": {
              singular: "「{TITLE}」のメールプレビュー"
            },
            "ko-KR": {
              singular: "'{TITLE}'에 대한 이메일 미리보기"
            },
            "pt-BR": {
              singular: 'Pré-visualização por e-mail de "{TITLE}"'
            },
            "zh-CN": {
              singular: "通过电子邮件发送”{TITLE}“的预览"
            }
          }
        }) : (0, _v50.translate)({
          singular: 'Registration for "{TITLE}"',
          replacements: {
            TITLE: _v12
          },
          dictionary: {
            es: {
              singular: 'Registro para "{TITLE}"'
            },
            "de-DE": {
              singular: "Registrierung für „{TITLE}“"
            },
            "fr-FR": {
              singular: "Inscription à « {TITLE} »"
            },
            "ja-JP": {
              singular: "「{TITLE}」の登録"
            },
            "ko-KR": {
              singular: "'{TITLE}'에 대한 등록"
            },
            "pt-BR": {
              singular: 'Inscrição para "{TITLE}"'
            },
            "zh-CN": {
              singular: "注册“{TITLE}”"
            }
          }
        });
      return (0, _v1.jsxs)(_v6.Flex, {
        justifyContent: "space-between",
        alignItems: "center",
        height: (0, _v7.rem)(_v26.TOP_NAV_BAR_HEIGHT),
        p: `0 ${(0, _v7.rem)(13)} 0 ${(0, _v7.rem)(24)}`,
        borderBottom: _v15 ? "" : `${(0, _v7.rem)(1)} solid`,
        borderBottomColor: "stroke",
        background: "background",
        onClickCapture: _v0 => {
          if (!_v2 || !_v3 || _v0.metaKey || _v0.ctrlKey || _v0.shiftKey || _v0.altKey) return;
          let _v1 = _v0.target.closest("a");
          _v1?.href && "_blank" !== _v1.target && (_v0.preventDefault(), _v6(() => window.location.assign(_v1.href)));
        },
        children: [(0, _v1.jsxs)(_v6.Flex, {
          flex: 1,
          alignItems: "center",
          children: [(0, _v1.jsx)(_v43.Link, {
            href: "/",
            children: (0, _v1.jsx)(_v42.IconButton, {
              "aria-label": "logo",
              variant: "tertiary",
              icon: (0, _v1.jsx)(_v48.VimeoV, {}),
              mr: "sm"
            })
          }), _v9 || !_v2 && _v10 ? (0, _v1.jsx)(_v42.IconButton, {
            "aria-label": "loading",
            variant: "secondary",
            cursor: "not-allowed",
            icon: (0, _v1.jsx)(_v44.Spinner, {
              width: (0, _v7.rem)(24)
            })
          }) : _v15 ? (0, _v1.jsx)(_v42.IconButton, {
            "aria-label": "back",
            variant: "secondary",
            onClick: _v22,
            icon: (0, _v1.jsx)(_v47.ArrowLeft, {})
          }) : (0, _v1.jsx)(_v6.Flex, {
            p: "sm",
            borderRadius: "sm",
            justifyContent: "center",
            _hover: {
              background: _v17
            },
            onClick: _v22,
            children: (0, _v1.jsx)(_v47.ArrowLeft, {
              color: "text-primary"
            })
          }), _v1 ? (0, _v1.jsx)(_v5.Box, {
            sx: {
              "& > *": {
                pointerEvents: _v8 ? "none" : "auto"
              }
            },
            children: _v1(_v23)
          }) : (0, _v1.jsx)(_v5.Box, {
            ml: "md",
            children: (0, _v1.jsx)(_v45.Text, {
              variant: "body-xl",
              m: 0,
              fontSize: "body-md",
              color: "text-primary",
              children: _v23
            })
          })]
        }), (0, _v1.jsxs)(_v6.Flex, {
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
          children: [_v18 && (0, _v1.jsx)(_v113, {}), _v19 && (0, _v1.jsx)(_v63, {}), _v2 && (0, _v1.jsx)(_v108, {
            children: _v20 ? (0, _v1.jsx)(_v102, {
              onSave: _v5,
              isDirty: _v3,
              isSaving: _v4
            }) : (0, _v1.jsx)(_v109, {
              onSave: _v5,
              isDirty: _v3,
              isSaving: _v4
            })
          })]
        })]
      });
    };
  var _v115 = _v0.i(0),
    _v116 = _v0.i(0),
    _v117 = _v0.i(0);
  let _v118 = ({
    showUpgradeNotice: _v0
  }) => {
    let _v1 = (0, _v23.useGlobalStore)(_v0 => _v0.entityType),
      _v2 = (0, _v23.useGlobalStore)(_v0 => _v0.entityId),
      _v3 = (0, _v23.useGlobalStore)(_v0 => _v0.entityOwnerId),
      _v4 = (0, _v23.useGlobalStore)(_v0 => _v0.isRegistrationOn),
      _v5 = (0, _v23.useGlobalStore)(_v0 => _v0.canCompleteEvent),
      _v6 = (0, _v27.useSectionStore)(_v0 => _v0.setSelectedSection);
    return (0, _v1.jsxs)(_v5.Box, {
      position: "relative",
      boxSize: "100%",
      pt: "md",
      px: "md",
      background: "background",
      children: [_v0 && (0, _v1.jsx)(_v115.Alert, {
        status: "info",
        children: (0, _v1.jsx)(_v116.AlertDescription, {
          children: _v28.default.UpgradeInfoForTeamUsers
        })
      }), (0, _v1.jsx)(_v117.LeadCaptureDashboard, {
        entityId: _v2,
        entityOwnerId: _v3,
        entityType: _v1,
        isRegistrationOn: _v4,
        canCompleteEvent: _v5,
        setSelectedSection: _v6
      })]
    });
  };
  var _v119 = _v0.i(0),
    _v120 = _v0.i(0),
    _v121 = _v0.i(0),
    _v122 = _v0.i(0),
    _v123 = _v0.i(0),
    _v124 = _v0.i(0);
  let _v125 = () => {
      let {
          setPreviewMode: _v0,
          previewMode: _v1
        } = (0, _v4.useContext)(_v112.PreviewContext),
        {
          onFormPreviewDeviceChanged: _v2
        } = (0, _v97.useCallbackContext)();
      return (0, _v1.jsxs)(_v6.Flex, {
        gap: (0, _v7.rem)(8),
        children: [(0, _v1.jsx)(_v52.Tooltip, {
          fontSize: "body-md",
          label: _v28.default.PreviewDesktop,
          children: (0, _v1.jsx)(_v42.IconButton, {
            icon: (0, _v1.jsx)(_v123.Desktop, {}),
            variant: _v1 === _v26.PREVIEW_MODE.WEB ? "secondary" : "tertiary",
            onClick: () => {
              _v1 !== _v26.PREVIEW_MODE.WEB && _v2?.("desktop"), _v0(_v26.PREVIEW_MODE.WEB);
            },
            "aria-label": "Desktop",
            size: "sm"
          })
        }), (0, _v1.jsx)(_v52.Tooltip, {
          fontSize: "body-md",
          label: _v28.default.PreviewMobile,
          children: (0, _v1.jsx)(_v42.IconButton, {
            icon: (0, _v1.jsx)(_v124.MobilePhone, {}),
            variant: _v1 === _v26.PREVIEW_MODE.MOBILE ? "secondary" : "tertiary",
            onClick: () => {
              _v1 !== _v26.PREVIEW_MODE.MOBILE && _v2?.("mobile"), _v0(_v26.PREVIEW_MODE.MOBILE);
            },
            "aria-label": "Mobile",
            size: "sm"
          })
        })]
      });
    },
    _v126 = () => {
      let _v0 = (0, _v23.useGlobalStore)(_v0 => _v0.sideMenuType),
        _v1 = (0, _v23.useGlobalStore)(_v0 => _v0.setSideMenuType),
        _v2 = (0, _v23.useGlobalStore)(_v0 => _v0.presetLoading),
        _v3 = (0, _v23.useGlobalStore)(_v0 => _v0.entityType),
        _v4 = (0, _v49.useIsBokeh)(),
        _v5 = (0, _v121.useFeatureFlow)(_v26.FEATURES.CONFIRMATION_VIEW),
        {
          previewType: _v6,
          setPreviewType: _v7
        } = (0, _v4.useContext)(_v112.PreviewContext),
        _v8 = (0, _v122.getLocationState)(),
        {
          sendRegistrationActionBP: _v9
        } = _v92(),
        {
          onFormPreviewTypeChanged: _v10
        } = (0, _v97.useCallbackContext)(),
        _v11 = {
          [_v26.PREVIEW_TYPE.FORM]: "form",
          [_v26.PREVIEW_TYPE.CONFIRMATION]: "confirmation",
          [_v26.PREVIEW_TYPE.LOGIN_SCREEN]: "sign_in_screen"
        };
      return (0, _v4.useEffect)(() => {
        [_v26.SIDE_MENU_CONTENT.TEXT_RTF_STYLING, _v26.SIDE_MENU_CONTENT.BUTTON_RTF_STYLING].includes(_v0) && _v1(_v26.SIDE_MENU_CONTENT.SETTINGS);
      }, [_v6]), (0, _v4.useEffect)(() => {
        _v8?.preview_type && _v8.preview_type !== _v6 && _v7(_v8.preview_type);
      }, []), (0, _v1.jsx)(_v5.Box, {
        backgroundColor: _v4 ? "fill-blur" : "#F4F6F8CC",
        _dark: {
          backgroundColor: _v4 ? "fill-blur" : "#3D4751A3"
        },
        backdropFilter: "blur(20px)",
        zIndex: 1,
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        paddingY: "sm",
        paddingX: "md",
        children: (0, _v1.jsxs)(_v120.HStack, {
          "data-id": _v3 === _v18.ENTITY_TYPE.VIDEO ? _v26.PENDO_DATA_ID.PREVIEW_TYPE_VIDEO : _v26.PENDO_DATA_ID.PREVIEW_TYPE_EVENTS,
          children: [(0, _v1.jsx)(_v5.Box, {
            width: (0, _v7.rem)(168),
            background: "background",
            borderRadius: (0, _v7.rem)(_v4 ? 8 : 4),
            children: (0, _v1.jsx)(_v54.Select, {
              "data-testid": "preview-type-select",
              size: "sm",
              items: _v26.PREVIEW_TYPE_MAP.filter(_v0 => _v0.value !== _v26.PREVIEW_TYPE.CONFIRMATION || _v5),
              defaultValue: [_v6],
              value: [_v6],
              disabled: _v2,
              onValueChange: _v0 => {
                var _v1;
                let _v2;
                return _v1 = _v0.value[0], _v10?.(_v11[_v1] || _v1), _v7(_v1), _v2 = (() => {
                  switch (_v1) {
                    case _v26.PREVIEW_TYPE.FORM:
                      return _v90.BP_COPY.FORM;
                    case _v26.PREVIEW_TYPE.LOGIN_SCREEN:
                      return _v90.BP_COPY.SIGN_IN_SCREEN;
                    case _v26.PREVIEW_TYPE.CONFIRMATION:
                      return _v90.BP_COPY.CONFIRMATION;
                    default:
                      return "";
                  }
                })(), void _v9({
                  eventName: _v90.BP_EVENT_NAMES.REGISTRATION_FROM_ACTION,
                  location: _v90.BP_LOCATION.TOP_ACTION_BAR,
                  actionName: _v90.BP_ACTION_NAME.SELECT_PREVIEW_OPTION,
                  element: _v90.BP_ELEMENT.DROPDOWN,
                  copy: _v2
                });
              }
            })
          }), (0, _v1.jsx)(_v125, {})]
        })
      });
    };
  var _v127 = _v0.i(0),
    _v128 = _v0.i(0),
    _v129 = _v26,
    _v130 = _v0.i(0),
    _v131 = _v0.i(0),
    _v132 = _v0.i(0),
    _v133 = _v0.i(0),
    _v134 = _v0.i(0),
    _v135 = _v0.i(0);
  let _v136 = ({
    title: _v0
  }) => {
    let {
        patchLeadCapture: _v1
      } = (0, _v25.usePatchLeadCapture)(),
      {
        onFormAppearanceChanged: _v2
      } = (0, _v97.useCallbackContext)(),
      _v3 = (0, _v23.useGlobalStore)(_v0 => _v0.entityType),
      {
        trackLiveStreamRegistrationAppearanceChanged: _v4
      } = (0, _v135.useLiveStreamBroadcasterTracking)(),
      {
        hexCode: _v5,
        opacity: _v6
      } = (0, _v23.useGlobalStore)(_v0 => _v0.leadCapture.background),
      _v7 = (0, _v23.useGlobalStore)(_v0 => _v0.backgroundColorLivePreview),
      [_v8, _v9] = (0, _v4.useState)(!1),
      _v10 = _v7.hexCode || _v5,
      _v11 = (0, _v23.useGlobalStore)(_v0 => _v0.setBackgroundColorLivePreview),
      _v12 = (0, _v4.useRef)(_v5),
      _v13 = (0, _v4.useRef)(_v7),
      _v14 = (0, _v4.useRef)(null),
      _v15 = (0, _v4.useRef)(null);
    return (0, _v4.useEffect)(() => {
      _v7.opacity !== _v6 && _v11({
        opacity: _v6
      }), _v7.hexCode !== _v5 && _v11({
        hexCode: _v5
      });
    }, [_v6, _v5]), (0, _v4.useEffect)(() => {
      _v12.current = _v5, _v13.current = _v7;
    }, [_v5, _v7]), (0, _v1.jsxs)(_v6.Flex, {
      justifyContent: "space-between",
      alignItems: "baseline",
      height: (0, _v7.rem)(32),
      verticalAlign: "text-top",
      width: "100%",
      children: [(0, _v1.jsx)(_v13.Header, {
        color: "text-primary",
        size: "xs",
        children: _v0
      }), (0, _v1.jsxs)(_v6.Flex, {
        textAlign: "right",
        alignItems: "center",
        cursor: "pointer",
        children: [(0, _v1.jsx)(_v45.Text, {
          variant: "body-xl",
          color: "text-secondary",
          fontSize: "body-md",
          onClick: () => _v14.current?.click(),
          mr: "xs",
          children: _v10?.toUpperCase()
        }), (0, _v1.jsx)(_v96.Input, {
          ref: _v15,
          max: 100,
          min: 0,
          type: _v8 ? "number" : "text",
          value: _v8 ? _v7.opacity : `${_v7.opacity}%`,
          outlineColor: _v8 ? "stroke" : "transparent",
          onChange: _v0 => {
            let _v1 = _v0.target.value;
            if ((0, _v98.isNumber)(_v1)) {
              let _v0 = Number(_v1);
              _v0 >= 0 && _v0 <= 100 && _v11({
                opacity: _v0
              });
            }
          },
          onFocus: () => _v9(!0),
          onBlur: () => {
            void 0 !== _v7.opacity && _v7.opacity !== _v6 && _v7.opacity >= 0 && _v7.opacity <= 100 && (_v1("background.opacity", _v7.opacity), _v3 === _v18.ENTITY_TYPE.EVENT && _v4({
              liveStreamAppearanceSetting: "overlay"
            })), _v9(!1);
          },
          size: "sm",
          width: "2xl",
          border: "none",
          color: "text-secondary",
          fontSize: "body-md",
          mr: "xs",
          justifyItems: "center"
        }), (0, _v1.jsx)(_v134.ColorPickerBrandKit, {
          productName: "registration",
          onChange: _v0 => {
            _v11({
              hexCode: _v0
            });
          },
          color: _v10,
          onClose: _v0 => {
            let _v1 = _v13.current.hexCode,
              _v2 = _v12.current;
            _v0 && _v0 !== _v2 ? (_v2?.("overlay"), _v1("background.hexCode", _v0), _v3 === _v18.ENTITY_TYPE.EVENT && _v4({
              liveStreamAppearanceSetting: "overlay"
            })) : _v2 && _v1 !== _v2 && (_v2?.("overlay"), _v1("background.hexCode", _v2), _v3 === _v18.ENTITY_TYPE.EVENT && _v4({
              liveStreamAppearanceSetting: "overlay"
            }));
          },
          children: (0, _v1.jsx)(_v5.Box, {
            ref: _v14,
            background: _v10,
            border: "1px solid",
            borderColor: "grayscale.700",
            boxSize: (0, _v7.rem)(24),
            borderRadius: "100%",
            tabIndex: 0,
            onKeyDown: _v0 => _v0.key === _v26.KEY_CODES.ENTER && _v14.current?.click()
          })
        })]
      })]
    });
  };
  var _v137 = _v0.i(0);
  let _v138 = ({
    selected: _v0,
    onClick: _v1,
    src: _v2,
    alt: _v3
  }) => {
    let [_v4, _v5] = (0, _v4.useState)(!0);
    return (0, _v1.jsxs)(_v6.Flex, {
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      mb: (0, _v7.rem)(20),
      borderRadius: "sm",
      outline: !_v4 && _v0 ? `${(0, _v7.rem)(4)} solid` : "0px solid",
      outlineColor: "vimeoBlue.500",
      cursor: "pointer",
      height: _v4 ? (0, _v7.rem)(30) : "",
      background: `repeating-conic-gradient(#dee4e9 0% 25%, transparent 0% 50%) 50% / ${(0, _v7.rem)(18)} ${(0, _v7.rem)(18)}`,
      _hover: {
        outline: `${(0, _v7.rem)(4)} solid`,
        outlineColor: "vimeoBlue.500"
      },
      children: [(0, _v1.jsx)("img", {
        tabIndex: 0,
        onClick: _v1,
        src: _v2,
        alt: _v3,
        onLoad: () => _v5(!1),
        onKeyDown: _v0 => {
          _v0.key === _v26.KEY_CODES.ENTER && _v1();
        },
        style: {
          width: "100%",
          borderRadius: (0, _v7.rem)(8),
          background: `repeating-conic-gradient(#dee4e9 0% 25%, transparent 0% 50%) 50% / ${(0, _v7.rem)(18)}${(0, _v7.rem)(18)}`
        }
      }), _v4 && (0, _v1.jsx)(_v6.Flex, {
        width: "100%",
        height: "100%",
        overflow: "hidden",
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        children: (0, _v1.jsx)(_v44.Spinner, {})
      })]
    });
  };
  var _v139 = _v0.i(0);
  let _v140 = ({
      title: _v0,
      description: _v1,
      active: _v2,
      deleteInProgress: _v3,
      handleDelete: _v4,
      setShowDeleteModal: _v5
    }) => {
      let _v6 = (0, _v4.useRef)(null);
      return (0, _v4.useEffect)(() => {
        _v6.current?.focus();
      }), (0, _v1.jsxs)(_v34.Modal, {
        size: "md",
        isOpen: _v2,
        onClose: () => _v5(!1),
        closeOnEsc: !_v3,
        closeOnOverlayClick: !_v3,
        children: [(0, _v1.jsx)(_v39.ModalOverlay, {
          zIndex: "modal"
        }), (0, _v1.jsxs)(_v36.ModalContent, {
          position: "relative",
          maxWidth: (0, _v7.rem)(480),
          children: [(0, _v1.jsx)(_v139.CloseButton, {
            "aria-label": _v28.default.Close,
            position: "absolute",
            top: (0, _v7.rem)(16),
            right: (0, _v7.rem)(16),
            isDisabled: _v3,
            size: "sm",
            variant: "tertiary",
            onClick: () => _v5(!1)
          }), (0, _v1.jsx)(_v38.ModalHeader, {
            fontSize: "heading-md",
            children: _v0
          }), (0, _v1.jsx)(_v35.ModalBody, {
            pb: "lg",
            children: (0, _v1.jsx)(_v45.Text, {
              variant: "body-xl",
              fontSize: "body-md",
              children: _v1
            })
          }), (0, _v1.jsxs)(_v37.ModalFooter, {
            borderTop: "none",
            pt: 0,
            children: [(0, _v1.jsx)(_v12.Button, {
              ref: _v6,
              variant: "secondary",
              isDisabled: _v3,
              onClick: () => _v5(!1),
              children: _v28.default.Cancel
            }), (0, _v1.jsx)(_v12.Button, {
              variant: "destructive",
              isLoading: _v3,
              onClick: _v4,
              children: _v28.default.LogoDeleteModalButton
            })]
          })]
        })]
      });
    },
    _v141 = ({
      background: _v0,
      deleteBackground: _v1,
      onSelect: _v2,
      deleteInProgress: _v3 = !1
    }) => {
      let [_v4, _v5] = (0, _v4.useState)(!1),
        [_v6, _v7] = (0, _v4.useState)(!1),
        {
          hasBackgroundPermission: _v8
        } = (0, _v58.usePermissionStore)(),
        _v9 = (0, _v23.useGlobalStore)(_v0 => _v0.leadCapture.background),
        _v10 = (0, _v23.useGlobalStore)(_v0 => _v0.leadCapture.background.uri),
        _v11 = (0, _v4.useRef)(null),
        [_v12, _v13] = (0, _v4.useState)(!1);
      return (0, _v4.useEffect)(() => {
        _v12 && !_v3 && (_v7(!1), _v13(!1));
      }, [_v3, _v12]), (0, _v4.useEffect)(() => {
        _v11.current?.focus();
      }), (0, _v1.jsxs)(_v5.Box, {
        display: "inline-block",
        m: "xs",
        position: "relative",
        onMouseEnter: () => _v5(!0),
        onMouseLeave: () => _v5(!1),
        children: [(0, _v1.jsx)(_v138, {
          selected: _v10 === _v0.uri && !_v9.useThumbnail,
          onClick: () => {
            (_v9.uri !== _v0.uri || _v9.useThumbnail) && _v2({
              ..._v9,
              isActive: !0,
              urlLow: _v0.linkLow || _v0.link,
              urlHigh: _v0.linkHigh || _v0.link,
              uri: _v0.uri,
              useThumbnail: !1
            });
          },
          src: _v0.link,
          alt: _v0.link
        }, _v0.link), _v8 && _v4 && (0, _v1.jsx)(_v42.IconButton, {
          onClick: () => _v7(!0),
          variant: "destructive",
          size: "xs",
          "aria-label": _v28.default.Delete,
          icon: (0, _v1.jsx)(_v137.CloseXSmall, {}),
          position: "absolute",
          top: (0, _v7.rem)(8),
          right: (0, _v7.rem)(8),
          isDisabled: _v3,
          isLoading: _v3,
          background: "rgba(0, 0, 0, 0.4)"
        }), (0, _v1.jsx)(_v140, {
          active: _v6,
          title: _v28.default.ImageDeleteHeader,
          description: _v28.default.BackgroundDeleteModalDesc,
          handleDelete: () => {
            _v1 && !_v3 && (_v1((0, _v78.getLastUuidFromUri)(_v0.uri)), _v13(!0), _v9.uri === _v0.uri && _v2({
              ..._v9,
              isActive: !1,
              urlLow: "",
              urlHigh: "",
              uri: "",
              type: ""
            }));
          },
          deleteInProgress: _v3,
          setShowDeleteModal: _v7
        })]
      });
    },
    _v142 = ({
      backgroundList: _v0,
      loading: _v1,
      onScrollBottom: _v2,
      deleteBackground: _v3,
      deleteInProgress: _v4,
      uploading: _v5 = !1
    }) => {
      let _v6 = (0, _v4.useRef)(!1),
        {
          patchLeadCapture: _v7
        } = (0, _v25.usePatchLeadCapture)(),
        _v8 = _v0 => {
          _v7("background", _v0);
        };
      return (0, _v1.jsx)(_v6.Flex, {
        height: "100%",
        flexDir: "column",
        pt: "sm",
        overflow: "auto",
        onScroll: _v0 => {
          (0, _v98.isScrollBottom)(_v0) ? _v6.current || (_v2?.(), _v6.current = !0) : _v6.current = !1;
        },
        children: (_v1 || _v5) && 0 === _v0.length ? (0, _v1.jsx)(_v6.Flex, {
          justifyContent: "center",
          flexDir: "column",
          alignItems: "center",
          width: "100%",
          height: "100%",
          children: (0, _v1.jsx)(_v44.Spinner, {})
        }) : (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v5.Box, {
            columnGap: (0, _v7.rem)(20),
            px: "xs",
            style: {
              columnCount: 2
            },
            children: _v0.map(_v0 => (0, _v1.jsx)(_v141, {
              onSelect: _v8,
              background: _v0,
              deleteBackground: _v3,
              deleteInProgress: _v4
            }, _v0.uri))
          }), (0, _v1.jsx)(_v6.Flex, {
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            py: (0, _v7.rem)(10),
            visibility: _v1 ? "visible" : "hidden",
            children: (0, _v1.jsx)(_v44.Spinner, {})
          })]
        })
      });
    };
  var _v143 = _v0.i(0),
    _v144 = _v0.i(0),
    _v145 = _v0.i(0),
    _v146 = _v0.i(0),
    _v147 = _v0.i(0),
    _v148 = _v0.i(0),
    _v149 = _v0.i(0),
    _v150 = _v0.i(0),
    _v151 = _v0.i(0),
    _v152 = _v0.i(0);
  let _v153 = {
      Back: (0, _v50.translate)({
        singular: "Back",
        dictionary: {
          es: {
            singular: "Atrás"
          },
          "de-DE": {
            singular: "Zurück"
          },
          "fr-FR": {
            singular: "Retour"
          },
          "ja-JP": {
            singular: "戻る"
          },
          "ko-KR": {
            singular: "뒤로"
          },
          "pt-BR": {
            singular: "Voltar"
          },
          "zh-CN": {
            singular: "返回"
          }
        }
      }),
      Cancel: (0, _v50.translate)({
        singular: "Cancel",
        dictionary: {
          es: {
            singular: "Cancelar"
          },
          "de-DE": {
            singular: "Abbrechen"
          },
          "fr-FR": {
            singular: "Annuler"
          },
          "ja-JP": {
            singular: "キャンセル"
          },
          "ko-KR": {
            singular: "취소"
          },
          "pt-BR": {
            singular: "Cancelar"
          },
          "zh-CN": {
            singular: "取消"
          }
        }
      }),
      Next: (0, _v50.translate)({
        singular: "Next",
        dictionary: {
          es: {
            singular: "Siguiente"
          },
          "de-DE": {
            singular: "Weiter"
          },
          "fr-FR": {
            singular: "Suivant"
          },
          "ja-JP": {
            singular: "次へ"
          },
          "ko-KR": {
            singular: "다음"
          },
          "pt-BR": {
            singular: "Próxima"
          },
          "zh-CN": {
            singular: "下一步"
          }
        }
      }),
      NoVideosYet: (0, _v50.translate)({
        singular: "You don't have any videos yet!",
        dictionary: {
          es: {
            singular: "Aún no tienes ningún video."
          },
          "de-DE": {
            singular: "Du hast noch keine Videos!"
          },
          "fr-FR": {
            singular: "Vous n'avez pas encore ajouté de vidéos !"
          },
          "ja-JP": {
            singular: "まだ動画がありません。"
          },
          "ko-KR": {
            singular: "아직 동영상이 없군요!"
          },
          "pt-BR": {
            singular: "Você ainda não tem nenhum vídeo!"
          },
          "zh-CN": {
            singular: "您还没有任何视频！"
          }
        }
      }),
      Modified: (0, _v50.translate)({
        singular: "Modified",
        dictionary: {
          es: {
            singular: "Modificado"
          },
          "de-DE": {
            singular: "Modifiziert"
          },
          "fr-FR": {
            singular: "Modifiée"
          },
          "ja-JP": {
            singular: "変更日"
          },
          "ko-KR": {
            singular: "수정됨"
          },
          "pt-BR": {
            singular: "Modificado"
          },
          "zh-CN": {
            singular: "修改于"
          }
        }
      }),
      PlayThisVideo: (0, _v50.translate)({
        singular: "Play the video to select a frame",
        dictionary: {
          es: {
            singular: "Reproduzca el video para seleccionar un fotograma"
          },
          "de-DE": {
            singular: "Spiel das Video ab, um ein Frame auszuwählen"
          },
          "fr-FR": {
            singular: "Lisez la vidéo pour sélectionner une image"
          },
          "ja-JP": {
            singular: "動画を再生してフレームを選択"
          },
          "ko-KR": {
            singular: "프레임을 선택하려면 동영상을 재생하세요."
          },
          "pt-BR": {
            singular: "Reproduza o vídeo para selecionar um quadro"
          },
          "zh-CN": {
            singular: "播放视频，选择一帧画面"
          }
        }
      }),
      SearchVideos: (0, _v50.translate)({
        singular: "Search videos",
        dictionary: {
          es: {
            singular: "Buscar videos"
          },
          "de-DE": {
            singular: "Nach Videos suchen"
          },
          "fr-FR": {
            singular: "Rechercher des vidéos"
          },
          "ja-JP": {
            singular: "動画を検索"
          },
          "ko-KR": {
            singular: "동영상 검색"
          },
          "pt-BR": {
            singular: "Pesquisar vídeos"
          },
          "zh-CN": {
            singular: "搜索视频"
          }
        }
      }),
      TryAgain: (0, _v50.translate)({
        singular: "No results. Try again?",
        dictionary: {
          es: {
            singular: "Sin resultados. Vuelve a intentarlo."
          },
          "de-DE": {
            singular: "Keine Ergebnisse. Nochmal versuchen?"
          },
          "fr-FR": {
            singular: "Aucun résultat. Souhaitez-vous réessayer ?"
          },
          "ja-JP": {
            singular: "結果がありません。再試行しますか？"
          },
          "ko-KR": {
            singular: "결과가 없습니다. 다시 시도할까요?"
          },
          "pt-BR": {
            singular: "Nenhum resultado. Tente novamente."
          },
          "zh-CN": {
            singular: "无结果。再试一次？"
          }
        }
      }),
      UseThisFrame: (0, _v50.translate)({
        singular: "Use this frame",
        dictionary: {
          es: {
            singular: "Usar este fotograma"
          },
          "de-DE": {
            singular: "Dieses Bild verwenden"
          },
          "fr-FR": {
            singular: "Utiliser cette image"
          },
          "ja-JP": {
            singular: "このフレームを使用"
          },
          "ko-KR": {
            singular: "이 프레임 사용"
          },
          "pt-BR": {
            singular: "Usar este quadro"
          },
          "zh-CN": {
            singular: "使用这一帧"
          }
        }
      })
    },
    _v154 = ({
      configUrl: _v0,
      videoId: _v1,
      showPlayButton: _v2,
      setPlayButton: _v3,
      primaryButtonText: _v4,
      secondaryButtonText: _v5,
      disablePrimary: _v6,
      onSubmit: _v7,
      onCancel: _v8
    }) => {
      let [_v9, _v10] = (0, _v4.useState)(!1);
      return (0, _v1.jsx)(_v149.PlayerManager, {
        configUrl: _v0,
        playerAssetUrls: (0, _v152.getPlayerAssetUrls)() ?? _v151.EMPTY_PLAYER_ASSET_URLS,
        type: _v149.PlayerType.Default,
        children: (0, _v1.jsx)(_v149.Player, {
          clipId: _v1 || 0,
          playerId: "select-frame-player",
          children: ({
            element: _v0,
            api: _v1
          }) => (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsxs)(_v130.Center, {
              pos: "relative",
              _after: {
                content: '" "',
                pb: "56.2%",
                display: "block"
              },
              children: [(0, _v1.jsx)(_v5.Box, {
                sx: _v155,
                zIndex: 1,
                children: _v0
              }), _v2 && _v1 && (0, _v1.jsxs)(_v130.Center, {
                zIndex: 10,
                sx: _v155,
                flexDir: "column",
                _before: {
                  ..._v155,
                  content: '" "',
                  background: "linear-gradient(180deg, rgba(20, 21, 22, 0.4) 0%, rgba(20, 21, 22, 0.9) 50%, #141516 100%)",
                  pointerEvents: "none",
                  zIndex: -1
                },
                children: [(0, _v1.jsx)(_v13.Header, {
                  size: "md",
                  color: "white",
                  children: _v153.PlayThisVideo
                }), (0, _v1.jsx)(_v130.Center, {
                  w: (0, _v7.rem)(66),
                  h: (0, _v7.rem)(40),
                  textAlign: "center",
                  mt: (0, _v7.rem)(10),
                  borderRadius: "sm",
                  py: (0, _v7.rem)(10),
                  cursor: "pointer",
                  backgroundColor: "blackAlpha.900",
                  _hover: {
                    backgroundColor: "blue.500"
                  },
                  onClick: () => {
                    _v3(!1), _v1.play();
                  },
                  children: (0, _v1.jsx)(_v150.PlayFilled, {
                    color: "white"
                  })
                })]
              })]
            }), (0, _v1.jsxs)(_v6.Flex, {
              justifyContent: "flex-end",
              pt: (0, _v7.rem)(20),
              children: [(0, _v1.jsx)(_v12.Button, {
                isDisabled: _v9,
                variant: "secondary",
                onClick: _v8,
                mr: (0, _v7.rem)(15),
                minW: (0, _v7.rem)(150),
                children: _v5
              }), (0, _v1.jsx)(_v12.Button, {
                isDisabled: _v6,
                isLoading: _v6,
                onClick: () => {
                  _v1 && (_v1.pause(), _v10(!0), _v7(_v1.currentTime));
                },
                minW: (0, _v7.rem)(150),
                children: _v4
              })]
            })]
          })
        })
      });
    },
    _v155 = {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    },
    _v156 = async _v0 => {
      let _v1 = `https://${window.location.hostname}/${_v0}/clip_action?action=load_minimal_player_config`;
      return await fetch(_v1, {
        headers: {
          "X-Requested-With": "XMLHttpRequest"
        }
      }).then(_v0 => _v0.json()).then(_v0 => _v0.config_url);
    };
  var _v157 = _v0.i(0);
  let _v158 = ({
    query: _v0,
    setQuery: _v1
  }) => (0, _v1.jsx)(_v157.Search, {
    placeholder: _v153.SearchVideos,
    value: _v0,
    onChange: _v0 => _v1(_v0.target.value),
    variant: "minimal"
  });
  var _v159 = _v0.i(0);
  let _v160 = (0, _v4.forwardRef)((_v0, _v1) => {
      let _v2 = (0, _v46.useColorModeValue)("#1A2E3B", "#ECF0F1"),
        _v3 = (0, _v46.useColorModeValue)("#D6D6D6", "#95A5A6"),
        _v4 = (0, _v46.useColorModeValue)("#2E2E2E", "#7F8C8D"),
        _v5 = (0, _v46.useColorModeValue)("#EDF9FE", "#282828"),
        _v6 = (0, _v46.useColorModeValue)("#EEF1F2", "#3D3D3D");
      return (0, _v1.jsx)("svg", {
        ref: _v1,
        width: "180",
        height: "138",
        ..._v0,
        children: (0, _v1.jsxs)("g", {
          fill: "none",
          fillRule: "evenodd",
          children: [(0, _v1.jsxs)("g", {
            transform: "translate(16)",
            children: [(0, _v1.jsx)("circle", {
              fill: _v5,
              fillRule: "nonzero",
              cx: "69",
              cy: "69",
              r: "69"
            }), (0, _v1.jsxs)("g", {
              transform: "translate(43 43)",
              stroke: _v2,
              strokeWidth: "4",
              children: [(0, _v1.jsx)("circle", {
                fill: _v6,
                cx: "21.176",
                cy: "21.418",
                r: "21.062"
              }), (0, _v1.jsx)("path", {
                d: "M36.182 36.182l15.3 15.3"
              })]
            })]
          }), (0, _v1.jsx)("path", {
            d: "M0 79.329C0 77.49 1.5 76 3.349 76c1.85 0 3.349 1.491 3.349 3.329 0 1.839-1.5 3.329-3.349 3.329C1.5 82.658 0 81.168 0 79.328",
            fill: _v2
          }), (0, _v1.jsx)("path", {
            d: "M173 61.329c0-1.838 1.5-3.329 3.349-3.329 1.85 0 3.349 1.491 3.349 3.329 0 1.839-1.5 3.329-3.349 3.329-1.849 0-3.349-1.49-3.349-3.33M139 44.664c0-.918.75-1.664 1.674-1.664a1.67 1.67 0 0 1 1.675 1.664c0 .92-.75 1.665-1.675 1.665A1.67 1.67 0 0 1 139 44.664",
            fill: _v3
          }), (0, _v1.jsx)("path", {
            d: "M113.349 28.658c0-1.833-1.504-3.329-3.349-3.329 1.845 0 3.349-1.495 3.349-3.329 0 1.834 1.505 3.33 3.349 3.33-1.844 0-3.349 1.495-3.349 3.328zM28.349 87.658c0-1.833-1.504-3.329-3.349-3.329 1.845 0 3.349-1.495 3.349-3.329 0 1.834 1.505 3.33 3.349 3.33-1.844 0-3.349 1.495-3.349 3.328z",
            fill: _v4
          }), (0, _v1.jsx)("path", {
            fill: _v3,
            d: "M32 51l1.5 4.5L38 57l-4.5 1.501L32 63l-1.5-4.499-4.5-1.5 4.5-1.501zM174.598 41.256c-.405-2.518-1.839-4.039-4.506-4.478a.104.104 0 0 1 0-.208c2.76-.454 4.101-1.96 4.506-4.478a.105.105 0 0 1 .207 0c.404 2.517 1.7 4.072 4.507 4.478.123.019.121.186 0 .208-2.737.439-4.103 1.96-4.507 4.478a.105.105 0 0 1-.207 0"
          }), (0, _v1.jsx)("path", {
            d: "M31.521 119.066c0-3.597-2.93-6.533-6.521-6.533 3.592 0 6.521-2.935 6.521-6.533 0 3.598 2.93 6.533 6.521 6.533-3.591 0-6.52 2.936-6.52 6.533zM151.521 67.066c0-3.597-2.93-6.533-6.521-6.533 3.592 0 6.521-2.935 6.521-6.533 0 3.598 2.93 6.533 6.521 6.533-3.591 0-6.52 2.936-6.52 6.533z",
            stroke: _v2,
            strokeWidth: "1.296"
          }), (0, _v1.jsx)("path", {
            d: "M5 49.451l1.404.466c.282.092.502.31.595.59l.468 1.395.468-1.394a.93.93 0 0 1 .595-.59l1.403-.467-1.403-.466a.933.933 0 0 1-.595-.59L7.467 47 7 48.395a.935.935 0 0 1-.595.59L5 49.451zM149.1 25l1.45 2.633 2.648 1.442-2.649 1.44-1.45 2.633-1.449-2.633-2.65-1.44 2.65-1.442z",
            fill: _v4
          }), (0, _v1.jsx)("path", {
            d: "M32.851 65.315c.423.421.423 1.103 0 1.525a1.09 1.09 0 0 1-1.534 0 1.074 1.074 0 0 1 0-1.525 1.09 1.09 0 0 1 1.534 0",
            fill: _v3
          }), (0, _v1.jsx)("path", {
            d: "M152.851 71.315c.423.421.423 1.103 0 1.525a1.09 1.09 0 0 1-1.534 0 1.074 1.074 0 0 1 0-1.525 1.09 1.09 0 0 1 1.534 0M18.851 96.315c.423.421.423 1.103 0 1.525a1.09 1.09 0 0 1-1.534 0 1.074 1.074 0 0 1 0-1.525 1.09 1.09 0 0 1 1.534 0",
            fill: _v4
          })]
        })
      });
    }),
    _v161 = (0, _v4.forwardRef)((_v0, _v1) => {
      let _v2 = (0, _v46.useColorModeValue)("#1A2E3B", "#ECF0F1"),
        _v3 = (0, _v46.useColorModeValue)("#D6D6D6", "#95A5A6"),
        _v4 = (0, _v46.useColorModeValue)("#E8EAEB", "#141414"),
        _v5 = (0, _v46.useColorModeValue)("#E5F5FD", "#282828"),
        _v6 = (0, _v46.useColorModeValue)("#EEF1F2", "#282828");
      return (0, _v1.jsx)("svg", {
        ref: _v1,
        width: "160",
        height: "138",
        ..._v0,
        children: (0, _v1.jsxs)("g", {
          fill: "none",
          fillRule: "evenodd",
          children: [(0, _v1.jsx)("circle", {
            fill: _v5,
            fillRule: "nonzero",
            cx: "80",
            cy: "69",
            r: "69"
          }), (0, _v1.jsx)("path", {
            fill: _v3,
            d: "M153.522 36.084l-3.886 1.299 3.886 1.298 1.296 3.893 1.295-3.893L160 37.383l-3.886-1.299-1.295-3.893zM131.171 28.947c0-1.075.87-1.947 1.943-1.947 1.074 0 1.944.872 1.944 1.947 0 1.075-.87 1.947-1.944 1.947a1.945 1.945 0 0 1-1.943-1.947"
          }), (0, _v1.jsx)("path", {
            d: "M142.554 54.992c0-3.598-2.93-6.533-6.522-6.533 3.592 0 6.522-2.935 6.522-6.534 0 3.599 2.93 6.534 6.52 6.534-3.59 0-6.52 2.935-6.52 6.533z",
            stroke: _v2,
            strokeWidth: "1.296"
          }), (0, _v1.jsx)("path", {
            fill: _v2,
            d: "M115.105 30.368l.79 2.374 2.368.79-2.369.792-.79 2.373-.789-2.373-2.369-.791 2.37-.791zM137.763 69.18l.841 1.54 1.538.844-1.538.842-.841 1.54-.84-1.54-1.539-.842 1.538-.843zM138.402 75.171a.629.629 0 1 1-.89.894.629.629 0 0 1 .89-.894"
          }), (0, _v1.jsx)("path", {
            d: "M33.463 33.025a.63.63 0 1 1-.89.894.63.63 0 0 1 .89-.894",
            fill: _v2
          }), (0, _v1.jsx)("path", {
            fill: _v3,
            d: "M3.886 47.116L0 48.415l3.886 1.298 1.296 3.893 1.296-3.893 3.886-1.298-3.886-1.299-1.296-3.893z"
          }), (0, _v1.jsx)("path", {
            d: "M22.024 40.628c0-1.075.87-1.947 1.944-1.947 1.073 0 1.943.872 1.943 1.947 0 1.075-.87 1.946-1.943 1.946a1.945 1.945 0 0 1-1.944-1.946",
            fill: _v2
          }), (0, _v1.jsx)("path", {
            d: "M24.011 66.672c0-3.597-2.93-6.532-6.521-6.532 3.592 0 6.521-2.935 6.521-6.534 0 3.599 2.93 6.534 6.521 6.534-3.591 0-6.521 2.935-6.521 6.532z",
            stroke: _v2,
            strokeWidth: "1.296"
          }), (0, _v1.jsx)("path", {
            fill: _v2,
            d: "M32.824 27l.841 1.54 1.538.843-1.538.842-.841 1.54-.84-1.54-1.539-.842 1.538-.843z"
          }), (0, _v1.jsxs)("g", {
            children: [(0, _v1.jsx)("path", {
              stroke: _v2,
              strokeWidth: "2.592",
              fill: _v6,
              d: "M38.198 102.351h83.563V46.543H38.198z"
            }), (0, _v1.jsx)("path", {
              d: "M60.222 91.32h53.118-53.118z",
              fill: _v4
            }), (0, _v1.jsx)("path", {
              d: "M113.34 91.32H60.222",
              stroke: _v2,
              strokeWidth: "2.592"
            }), (0, _v1.jsx)("path", {
              fill: _v2,
              d: "M55.04 90.344l-8.42-4.865v9.734z"
            })]
          })]
        })
      });
    });
  var _v162 = _v0.i(0);
  let _v163 = () => (0, _v1.jsxs)(_v6.Flex, {
    py: "sm",
    alignItems: "center",
    children: [(0, _v1.jsx)(_v162.Skeleton, {
      variant: "circle",
      h: (0, _v7.rem)(20),
      w: (0, _v7.rem)(20),
      mr: (0, _v7.rem)(10)
    }), (0, _v1.jsx)(_v162.Skeleton, {
      h: (0, _v7.rem)(60),
      w: (0, _v7.rem)(100),
      mr: (0, _v7.rem)(10)
    }), (0, _v1.jsxs)("div", {
      children: [(0, _v1.jsx)(_v162.Skeleton, {
        variant: "text",
        h: (0, _v7.rem)(16),
        w: (0, _v7.rem)(160),
        mb: (0, _v7.rem)(10)
      }), (0, _v1.jsx)(_v162.Skeleton, {
        variant: "text",
        h: (0, _v7.rem)(16),
        w: (0, _v7.rem)(130)
      })]
    })]
  });
  var _v164 = _v0.i(0);
  let _v165 = ({
      width: _v0 = 105,
      height: _v1 = 59,
      duration: _v2,
      src: _v3
    }) => (0, _v1.jsxs)(_v164.Card, {
      w: (0, _v7.rem)(_v0),
      h: (0, _v7.rem)(_v1),
      position: "relative",
      children: [(0, _v1.jsx)(_v5.Box, {
        as: "img",
        src: _v3,
        objectFit: "cover",
        w: _v0,
        h: _v1
      }), _v2 && (0, _v1.jsx)(_v45.Text, {
        variant: "body-xl",
        fontSize: "body-xs",
        position: "absolute",
        color: "white",
        fontWeight: "bold",
        bottom: 0,
        left: (0, _v7.rem)(4),
        textShadow: "0 0 4px rgba(0, 0, 0, 0.4)",
        children: _v166(_v2)
      })]
    }),
    _v166 = _v0 => {
      let _v1 = new Date(0 * _v0),
        _v2 = String(_v1.getUTCHours()).padStart(2, "0"),
        _v3 = String(_v1.getUTCMinutes()).padStart(2, "0"),
        _v4 = String(_v1.getUTCSeconds()).padStart(2, "0");
      return "00" !== _v2 ? `${Number(_v2)}:${_v3}:${_v4}` : "00" !== _v3 ? `${Number(_v3)}:${_v4}` : `0:${_v4}`;
    };
  var _v167 = _v0.i(0),
    _v168 = _v0.i(0),
    _v169 = _v0.i(0);
  let _v170 = _v0 => {
      let _v1 = _v0 && _v0.match(/\d+$/);
      return _v1 ? parseInt(_v1[0], 10) : -1;
    },
    _v171 = {
      sort: "last_user_action_event_date",
      direction: "desc",
      filter: "nolive",
      select: ["uri", "name", "pictures", "modifiedTime", "duration", "isPlayable"]
    },
    _v172 = ({
      video: _v0,
      tempSelected: _v1,
      setTempSelected: _v2
    }) => {
      let _v3 = navigator.language || "en-US",
        _v4 = new Date(_v0.modifiedTime),
        _v5 = `${_v153.Modified} ${_v4.toLocaleDateString(_v3, {
          year: "numeric",
          month: "short",
          day: "numeric"
        })}`,
        _v6 = !_v0.isPlayable;
      return (0, _v1.jsx)(_v5.Box, {
        pl: "sm",
        width: "100%",
        onClick: () => {
          _v6 || _v2(_v170(_v0.uri));
        },
        pointerEvents: _v6 ? "none" : "auto",
        children: (0, _v1.jsx)(_v159.Radio, {
          id: _v0.uri,
          name: "videoPicker",
          value: _v0.uri,
          isChecked: _v1 === _v170(_v0.uri),
          isDisabled: _v6,
          children: (0, _v1.jsxs)(_v6.Flex, {
            h: (0, _v7.rem)(60),
            pl: (0, _v7.rem)(20),
            my: (0, _v7.rem)(20),
            children: [_v0.pictures && (0, _v1.jsx)(_v165, {
              src: _v0.pictures.sizes[0]?.link,
              duration: _v0.duration
            }), (0, _v1.jsxs)(_v5.Box, {
              pl: "md",
              alignContent: "center",
              maxW: (0, _v7.rem)(380),
              children: [(0, _v1.jsx)(_v13.Header, {
                size: "sm",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
                children: _v0.name
              }), (0, _v1.jsx)(_v146.Paragraph, {
                size: "md",
                children: _v5
              })]
            })]
          })
        })
      });
    },
    _v173 = ({
      query: _v0,
      setTempSelected: _v1,
      tempSelected: _v2,
      ownerId: _v3,
      setIsLoading: _v4
    }) => {
      let {
          videos: _v5,
          hasNextPage: _v6,
          loadNextPage: _v7,
          isLoading: _v8,
          isLoadingMore: _v9
        } = ((_v0, _v1, _v2) => {
          let _v3 = (0, _v4.useRef)(1),
            [_v4, _v5] = (0, _v169.useGetUserVideosLazy)(),
            [_v6, _v7] = (0, _v4.useState)(!1),
            [_v8, _v9] = (0, _v4.useState)([]),
            _v10 = (0, _v4.useRef)(!1),
            _v11 = (_v0, _v1) => {
              if (!_v2) {
                _v10.current = !1;
                return;
              }
              _v1 && _v9([]);
              let _v2 = _v0.trim().length > 0 ? _v0 : void 0;
              _v4({
                where: {
                  userId: Number(_v2)
                },
                query: {
                  query: _v2,
                  page: _v3.current,
                  sort: _v1.sort,
                  direction: _v1.direction,
                  filter: _v1.filter
                },
                select: _v1.select,
                headers: {
                  Accept: (0, _v168.buildAcceptHeader)()
                }
              });
            },
            _v12 = (0, _v4.useCallback)((0, _v167.default)(_v11, 500), [_v2, _v5.loading, _v10.current, _v4, _v3.current, _v1, _v9]);
          return (0, _v4.useEffect)(() => {
            _v7(!1), _v3.current = 1, "" === _v0 ? (_v9([]), _v11(_v0), _v12.cancel()) : _v12(_v0, !0);
          }, [_v0]), (0, _v4.useEffect)(() => {
            if (!_v5.loading) {
              if (_v5.error) {
                _v10.current = !1;
                return;
              }
              if (_v5.data?.data) {
                var _v0;
                let _v0, _v1, _v2;
                _v7(!!_v5?.data.paging?.next), _v0 = _v5.data?.data, _v0 = _v10.current, _v10.current = !1, _v1 = [], _v2 = _v0 ? [..._v8] : [], _v1.push(..._v2, ..._v0), _v9(_v1);
              }
            }
          }, [_v5]), {
            videos: _v8,
            isLoading: _v5.loading,
            hasNextPage: _v6,
            loadNextPage: () => {
              _v6 && (_v3.current = _v3.current + 1, _v10.current = !0, _v11(_v0));
            },
            isLoadingMore: _v10.current
          };
        })(_v0, _v171, _v3),
        _v10 = (0, _v4.useRef)(!1);
      (0, _v4.useEffect)(() => {
        _v4(_v8);
      }, [_v8, _v4]);
      let _v11 = (0, _v4.useRef)(null);
      return (0, _v4.useEffect)(() => {
        _v4(_v8);
      }, [_v8, _v4]), (0, _v1.jsxs)(_v6.Flex, {
        onScroll: _v0 => {
          if (_v11.current) {
            let _v0;
            10 > Math.abs((_v0 = _v0.target).scrollHeight - _v0.scrollTop - _v0.clientHeight) ? (!_v6 || _v8 || _v10.current || _v7(), _v10.current = !0) : _v10.current = !1;
          }
        },
        ref: _v11,
        minH: (0, _v7.rem)(400),
        maxH: (0, _v7.rem)(500),
        overflowY: "auto",
        flexDir: "column",
        children: [_v5.map(_v0 => (0, _v1.jsx)("ul", {
          children: (0, _v1.jsx)(_v172, {
            video: _v0,
            setTempSelected: _v1,
            tempSelected: _v2,
            isLoading: _v8
          })
        }, _v0.uri)), (0, _v1.jsx)(_v130.Center, {
          py: (0, _v7.rem)(10),
          children: _v9 && (0, _v1.jsx)(_v44.Spinner, {})
        }), _v5?.length === 0 && _v8 && [...Array(6)].map((_v0, _v1) => (0, _v1.jsx)(_v163, {}, _v1)), !_v5?.length && !_v8 && (_v0.length > 0 ? (0, _v1.jsxs)(_v130.Center, {
          flexDir: "column",
          flexGrow: 1,
          children: [(0, _v1.jsx)(_v160, {}), (0, _v1.jsx)(_v146.Paragraph, {
            size: "lg",
            mt: (0, _v7.rem)(20),
            children: _v153.TryAgain
          })]
        }) : (0, _v1.jsxs)(_v130.Center, {
          flexDir: "column",
          flexGrow: 1,
          children: [(0, _v1.jsx)(_v161, {}), (0, _v1.jsx)(_v146.Paragraph, {
            size: "lg",
            mt: (0, _v7.rem)(20),
            children: _v153.NoVideosYet
          })]
        }))]
      });
    },
    _v174 = ({
      onSubmit: _v0,
      onClose: _v1,
      videoModalTitle: _v2,
      videoModalSubTitle: _v3,
      selectFromClipTitle: _v4,
      selectFromClipSubTitle: _v5 = ""
    }) => {
      let [_v6, _v7] = (0, _v4.useState)(1),
        [_v8, _v9] = (0, _v4.useState)(null),
        [_v10, _v11] = (0, _v4.useState)(!1),
        [_v12, _v13] = (0, _v4.useState)(""),
        [_v14, _v15] = (0, _v4.useState)(""),
        [_v16, _v17] = (0, _v4.useState)(!0),
        _v18 = (0, _v148.useDebouncedValue)(_v12, 50),
        _v19 = (0, _v21.useViewer)(),
        _v20 = _v19?.teamUser,
        _v21 = _v19?.user,
        _v22 = _v20?.ownerId || _v21?.id,
        _v23 = 1 === _v6 ? _v2 : _v4,
        _v24 = 1 === _v6 ? _v3 : _v5,
        [_v25, _v26] = (0, _v147.usePostVideoPictures)(),
        _v27 = () => {
          _v7(0), _v1();
        };
      (0, _v4.useEffect)(() => {
        _v26.data && (_v7(0), _v0());
      }, [_v26]);
      let _v28 = (0, _v4.useMemo)(() => 1 === _v6 ? _v10 || !_v8 : 2 === _v6 && (!_v14 || _v26?.loading), [_v14, _v26, _v6, _v10, _v8]);
      return (0, _v4.useEffect)(() => {
        _v8 && _v156(_v8).then(_v0 => _v15(_v0));
      }, [_v8]), (0, _v1.jsxs)(_v34.Modal, {
        isOpen: _v6 > 0,
        onClose: _v27,
        size: "lg",
        children: [(0, _v1.jsx)(_v39.ModalOverlay, {}), (0, _v1.jsxs)(_v36.ModalContent, {
          p: "lg",
          maxW: (0, _v7.rem)(612),
          color: "text-primary",
          children: [(0, _v1.jsx)(_v145.ModalCloseButton, {}), (0, _v1.jsx)(_v13.Header, {
            size: "md",
            mb: (0, _v7.rem)(14),
            children: "string" == typeof _v23 ? _v23 : (0, _v1.jsx)(_v23, {})
          }), (0, _v1.jsx)(_v146.Paragraph, {
            mb: "sm",
            children: "string" == typeof _v24 ? _v24 : (0, _v1.jsx)(_v24, {})
          }), 1 === _v6 ? (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v158, {
              query: _v12,
              setQuery: _v13
            }), (0, _v1.jsx)(_v173, {
              query: _v18,
              setTempSelected: _v9,
              tempSelected: _v8,
              ownerId: _v22,
              setIsLoading: _v11
            })]
          }) : _v14 ? (0, _v1.jsx)(_v154, {
            configUrl: _v14,
            videoId: _v8 || 0,
            showPlayButton: _v16,
            setPlayButton: _v17,
            primaryButtonText: _v153.UseThisFrame,
            secondaryButtonText: _v153.Back,
            disablePrimary: _v28,
            onSubmit: _v0 => {
              _v25({
                select: ["sizes", "baseLink"],
                where: {
                  videoId: _v8 || 0
                },
                variables: {
                  time: _v0,
                  assetType: "lead_capture_form"
                }
              });
            },
            onCancel: () => _v7(1)
          }) : (0, _v1.jsx)(_v130.Center, {
            _after: {
              pb: "56.2%",
              content: '" "'
            },
            children: (0, _v1.jsx)(_v44.Spinner, {})
          }), 2 !== _v6 && (0, _v1.jsxs)(_v6.Flex, {
            justifyContent: "flex-end",
            pt: (0, _v7.rem)(20),
            children: [(0, _v1.jsx)(_v12.Button, {
              variant: "secondary",
              onClick: _v27,
              mr: "sm",
              minW: (0, _v7.rem)(150),
              children: _v153.Cancel
            }), (0, _v1.jsx)(_v12.Button, {
              variant: "primary",
              onClick: () => _v7(2),
              mr: "sm",
              minW: (0, _v7.rem)(150),
              isDisabled: _v28,
              children: _v153.Next
            })]
          })]
        })]
      });
    },
    _v175 = () => (0, _v1.jsx)(_v45.Text, {
      variant: "body-md",
      mb: (0, _v7.rem)(10),
      children: (0, _v50.translate)({
        singular: "You can also {LINK}upload a new video{/LINK} before selecting it here.",
        replacements: {
          LINK: _v0 => (0, _v1.jsx)(_v43.Link, {
            variant: "minimal",
            href: "/upload/videos",
            target: "_blank",
            children: _v0
          })
        },
        dictionary: {
          es: {
            singular: "También puede {LINK}subir un nuevo video{/LINK} antes de seleccionarlo aquí."
          },
          "de-DE": {
            singular: "Du kannst auch {LINK}ein neues Video hochladen{/LINK}, bevor du es hier auswählst."
          },
          "fr-FR": {
            singular: "Vous pouvez également {LINK}mettre en ligne une nouvelle vidéo{/LINK} avant de la sélectionner ici."
          },
          "ja-JP": {
            singular: "ここで選択する前に、{LINK}新しい動画をアップロード{/LINK}することもできます。"
          },
          "ko-KR": {
            singular: "여기서 선택하기 전에 {LINK}새 동영상을 업로드{/LINK}할 수도 있습니다."
          },
          "pt-BR": {
            singular: "Você também pode {LINK}carregar um novo vídeo{/LINK} antes de selecioná-lo aqui."
          },
          "zh-CN": {
            singular: "您也可以先{LINK}上传新视频{/LINK}，然后再在此处选择该视频。"
          }
        }
      })
    });
  var _v176 = _v0.i(0),
    _v177 = _v0.i(0),
    _v178 = _v0.i(0),
    _v179 = _v7,
    _v180 = _v0.i(0);
  let _v181 = ({
      options: _v0,
      selectedValue: _v1,
      onSelect: _v2,
      width: _v3,
      minWidth: _v4,
      height: _v5,
      hideSelected: _v6,
      nonSelectable: _v7 = [],
      textSize: _v8 = 14,
      onScrollBottom: _v9,
      focusButton: _v10,
      noHorizontalPadding: _v11
    }) => {
      let _v12 = (0, _v4.useRef)(!1),
        _v13 = (0, _v46.useColorModeValue)("blackAlpha.50", "whiteAlpha.600"),
        _v14 = {
          onKeyDown: _v0 => {
            _v0.key === _v26.KEY_CODES.ENTER && (_v0.target?.click(), _v10?.());
          }
        };
      return (0, _v1.jsx)(_v5.Box, {
        minWidth: _v4,
        width: _v3,
        height: _v5,
        onScroll: _v0 => {
          (0, _v98.isScrollBottom)(_v0) ? _v12.current || (_v9?.(), _v12.current = !0) : _v12.current = !1;
        },
        px: (0, _v179.rem)(12 * !_v11),
        py: (0, _v179.rem)(12),
        children: (0, _v1.jsx)(_v5.Box, {
          children: _v0.map((_v0, _v1) => {
            let _v2 = _v0.icon || null;
            return (0, _v1.jsxs)(_v1.Fragment, {
              children: [_v0.divider && (0, _v1.jsx)(_v131.Divider, {}), (0, _v1.jsx)(_v6.Flex, {
                pr: "lg",
                pl: _v6 ? "lg" : (0, _v179.rem)(2),
                py: "sm",
                borderRadius: "xs",
                cursor: "pointer",
                tabIndex: 0,
                onClick: _v2.bind(null, _v0),
                _hover: {
                  background: _v13
                },
                ..._v14,
                children: (0, _v1.jsxs)(_v6.Flex, {
                  alignItems: "center",
                  opacity: _v7.includes(_v0.name) ? .5 : 1,
                  children: [_v2 && (0, _v1.jsx)(_v6.Flex, {
                    mr: "sm",
                    children: (0, _v1.jsx)(_v2, {
                      width: (0, _v179.rem)(20)
                    })
                  }), !_v6 && (0, _v1.jsx)(_v180.CheckSmallFilled, {
                    visibility: _v0.value === _v1?.value ? "visible" : "hidden",
                    width: (0, _v179.rem)(20),
                    mr: "xs",
                    color: "blue.300"
                  }), (0, _v1.jsx)(_v45.Text, {
                    variant: "body-xl",
                    fontSize: (0, _v179.rem)(_v8),
                    children: _v0.name
                  })]
                })
              }, _v0.name + _v1)]
            });
          })
        })
      });
    },
    _v182 = ({
      options: _v0,
      selectedValue: _v1,
      width: _v2 = "100%",
      buttonHeight: _v3 = (0, _v179.rem)(48),
      height: _v4,
      onSelect: _v5,
      children: _v6,
      hideSelected: _v7,
      disabled: _v8 = !1,
      nonSelectable: _v9 = [],
      textSize: _v10 = 14,
      onScrollBottom: _v11,
      noHorizontalPadding: _v12
    }) => {
      let _v13 = (0, _v4.useRef)(null),
        {
          isOpen: _v14,
          onOpen: _v15,
          onClose: _v16
        } = (0, _v143.useDisclosure)(),
        _v17 = (0, _v46.useColorModeValue)("white", "#282828"),
        _v18 = (0, _v46.useColorModeValue)("#BFBFBF", "#4E4E4E"),
        _v19 = (0, _v46.useColorModeValue)("#666666", "rgba(255, 255, 255, 0.6)");
      return (0, _v1.jsx)(_v5.Box, {
        onKeyDown: _v0 => {
          _v0.key === _v26.KEY_CODES.ESCAPE && _v14 && (_v0.preventDefault(), _v0.stopPropagation(), _v13.current?.click());
        },
        children: (0, _v1.jsxs)(_v176.Popover, {
          isLazy: !0,
          strategy: "fixed",
          returnFocusOnClose: !0,
          onOpen: _v15,
          onClose: _v16,
          children: [(0, _v1.jsx)(_v5.Box, {
            width: "100%",
            pointerEvents: _v8 ? "none" : "auto",
            opacity: _v8 ? "none" : "auto",
            children: (0, _v1.jsx)(_v178.PopoverTrigger, {
              children: (0, _v1.jsx)(_v5.Box, {
                py: (0, _v179.rem)(2),
                pl: (0, _v179.rem)(1),
                children: _v6 ? (0, _v1.jsx)(_v6.Flex, {
                  ref: _v13,
                  justifyContent: "right",
                  cursor: _v8 ? "not-allowed" : "cursor",
                  tabIndex: 0,
                  children: _v6
                }) : (0, _v1.jsx)(_v12.Button, {
                  width: _v2,
                  height: _v3,
                  variant: "ternary",
                  rightIcon: (0, _v1.jsx)(_v144.ChevronDown, {
                    boxSize: (0, _v179.rem)(10)
                  }),
                  isDisabled: _v8,
                  ref: _v13,
                  border: `${(0, _v179.rem)(1)} solid`,
                  sx: {
                    borderColor: _v18,
                    background: _v17
                  },
                  _hover: {
                    borderColor: _v19,
                    background: _v17
                  },
                  children: (0, _v1.jsx)(_v6.Flex, {
                    justifyContent: "space-between",
                    width: "100%",
                    children: (0, _v1.jsx)(_v45.Text, {
                      variant: "body-xl",
                      fontSize: (0, _v179.rem)(_v10),
                      children: _v1?.name
                    })
                  })
                })
              })
            })
          }), (0, _v1.jsx)(_v177.PopoverContent, {
            zIndex: "popover",
            children: (0, _v1.jsx)("div", {
              tabIndex: 0,
              children: (0, _v1.jsx)(_v181, {
                nonSelectable: _v9,
                hideSelected: _v7,
                options: _v0,
                selectedValue: _v1,
                onSelect: _v0 => {
                  _v9.includes(_v0.name) || (_v5(_v0), _v13.current?.click());
                },
                width: _v2,
                minWidth: _v13.current?.clientWidth,
                height: _v4,
                textSize: _v10,
                onScrollBottom: _v11,
                focusButton: () => {
                  setTimeout(() => {
                    _v13.current?.focus();
                  }, 100);
                },
                noHorizontalPadding: _v12
              })
            })
          })]
        })
      });
    },
    _v183 = ({
      uploadBackground: _v0,
      isUploadingBackground: _v1,
      disabled: _v2,
      refresh: _v3,
      message: _v4,
      btnFormat: _v5
    }) => {
      let _v6 = (0, _v23.useGlobalStore)(_v0 => _v0.uploadOption),
        _v7 = (0, _v23.useGlobalStore)(_v0 => _v0.entityType),
        _v8 = (0, _v23.useGlobalStore)(_v0 => _v0.setUploadOption),
        {
          trackLiveStreamRegistrationBackgroundAdded: _v9
        } = (0, _v135.useLiveStreamBroadcasterTracking)(),
        [_v10, _v11] = (0, _v4.useState)(""),
        _v12 = (0, _v8.useToast)(),
        _v13 = _v26.BACKGROUND_UPLOAD_MAP.find(_v0 => _v0.value === _v6),
        _v14 = (0, _v4.useRef)(null),
        {
          isOpen: _v15,
          onClose: _v16,
          onOpen: _v17
        } = (0, _v143.useDisclosure)(),
        [_v18, _v19] = (0, _v4.useState)(""),
        _v20 = async _v0 => {
          let _v1 = _v0.target.files?.[0];
          if (!_v1) return;
          if (!_v26.ACCEPTED_FILE_TYPES.includes(_v1.type)) return void _v12({
            title: _v28.default.ValidFileType,
            status: "error"
          });
          _v19(_v1.name);
          let {
            height: _v2,
            width: _v3
          } = await (0, _v98.getImageResolution)(_v1);
          if (_v2 > _v26.MAX_BG_IMG_HEIGHT || _v3 > _v26.MAX_BG_IMG_WIDTH || _v1.size > _v26.BACKGROUND_UPLOAD_LIMIT) {
            _v17(), _v0.target.value = "";
            return;
          }
          _v0(_v1), _v0.target.value = "";
        };
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v182, {
          hideSelected: !0,
          selectedValue: _v13,
          options: _v26.BACKGROUND_UPLOAD_MAP,
          onSelect: _v0 => {
            switch (_v8(_v0.value), _v11(""), _v0.value) {
              case _v26.ADD_BACKGROUND_TYPE.upload:
                _v14.current?.click();
                break;
              case _v26.ADD_BACKGROUND_TYPE.thumbnail:
                _v11(_v26.ADD_BACKGROUND_TYPE.thumbnail);
            }
          },
          disabled: _v2,
          width: 200,
          noHorizontalPadding: !0,
          children: (0, _v1.jsx)(_v12.Button, {
            isDisabled: _v2,
            variant: _v5 ?? "secondary",
            width: "100%",
            isLoading: _v1,
            cursor: _v1 ? "not-allowed" : "pointer",
            ...(!_v1 && {
              rightIcon: (0, _v1.jsx)(_v144.ChevronDown, {})
            }),
            children: (0, _v1.jsx)(_v13.Header, {
              size: "xs",
              children: _v4 ?? _v28.default.AddBackground
            })
          })
        }), (0, _v1.jsx)("input", {
          ref: _v14,
          accept: _v26.ACCEPT_FILE_TYPE_IMAGE,
          type: "file",
          hidden: !0,
          onChange: _v20
        }), _v10 === _v26.ADD_BACKGROUND_TYPE.thumbnail && (0, _v1.jsx)(_v174, {
          videoModalTitle: _v28.default.ChooseVideo,
          videoModalSubTitle: _v175,
          onSubmit: () => {
            _v7 === _v18.ENTITY_TYPE.EVENT && _v9({
              liveStreamBackgroundSource: "select_from_video"
            }), _v3(), _v11("");
          },
          selectFromClipTitle: _v28.default.SelectBackground,
          onClose: () => _v11("")
        }), (0, _v1.jsxs)(_v34.Modal, {
          isOpen: _v15,
          onClose: _v16,
          children: [(0, _v1.jsx)(_v39.ModalOverlay, {
            zIndex: "modal"
          }), (0, _v1.jsxs)(_v36.ModalContent, {
            minHeight: (0, _v7.rem)(192),
            minWidth: (0, _v7.rem)(540),
            p: "lg",
            children: [(0, _v1.jsx)(_v38.ModalHeader, {
              fontSize: "heading-md",
              p: 0,
              children: _v28.default.UploadTooLarge(_v18)
            }), (0, _v1.jsx)(_v35.ModalBody, {
              fontSize: "body-lg",
              p: 0,
              children: _v28.default.UploadError(`${_v26.MAX_BG_IMG_WIDTH.toLocaleString()} x ${_v26.MAX_BG_IMG_HEIGHT.toLocaleString()} px`, `${(_v26.BACKGROUND_UPLOAD_LIMIT / 0).toLocaleString()} MB`)
            }), (0, _v1.jsxs)(_v51.Stack, {
              direction: "row-reverse",
              children: [(0, _v1.jsx)(_v12.Button, {
                variant: "primary",
                onClick: () => {
                  _v14.current?.click(), _v16();
                },
                children: _v28.default.UploadAnotherImg
              }), (0, _v1.jsx)(_v12.Button, {
                variant: "secondary",
                onClick: _v16,
                children: _v28.default.Cancel
              })]
            })]
          })]
        })]
      });
    };
  var _v184 = _v0.i(0),
    _v185 = _v0.i(0),
    _v186 = _v0.i(0);
  async function _v187({
    baseUrl: _v0,
    where: {
      userId: _v1,
      pictureId: _v2
    },
    ..._v3
  }) {
    return (0, _v186.measureLatency)("deleteUserLeadCapturePicture", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v1}/lead_capture/pictures/${_v2}`, {
        ..._v3,
        method: "DELETE"
      });
      if (!_v0.ok) throw new _v77.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v77.deepCamelCase)(_v1);
    });
  }
  var _v188 = _v0.i(0);
  function _v189() {
    let {
        mutate: _v0
      } = (0, _v188.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v94.useGctlConfig)(),
      [_v5, _v6] = (0, _v185.useInternalState)();
    return [(0, _v4.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/lead_capture/pictures/${_v0.where.pictureId}${(0, _v185.serializeQuery)(_v0)}`, _v187({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }), !1);
        _v6({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v6({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v1, _v3, _v2, _v4, _v6]), _v5];
  }
  async function _v190({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v186.measureLatency)("getUserLeadCapturePictures", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/lead_capture/pictures?${(0, _v77.searchQueryString)(_v3)}&fields=${_v1.map(_v77.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v77.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v77.deepCamelCase)(_v1);
    });
  }
  async function _v191({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2
    },
    ..._v3
  }) {
    return (0, _v186.measureLatency)("postUserLeadCapturePictures", "POST", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/lead_capture/pictures?fields=${_v1.map(_v77.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "POST"
      });
      if (!_v0.ok) throw new _v77.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v77.deepCamelCase)(_v1);
    });
  }
  "true" === _v184.default.env.STORYBOOK && (0, _v185.assignMswData)(_v189, {
    endpoint: "/users/:userId/lead_capture/pictures/:pictureId",
    method: "DELETE"
  });
  var _v192 = _v0.i(0),
    _v193 = _v0.i(0);
  function _v194() {
    let {
        mutate: _v0
      } = (0, _v188.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v94.useGctlConfig)(),
      [_v5, _v6] = (0, _v185.useInternalState)();
    return [(0, _v4.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/lead_capture/pictures${(0, _v185.serializeQuery)(_v0)}`, _v190({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }));
        _v6({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v6({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v1, _v3, _v2, _v4, _v6]), _v5];
  }
  function _v195() {
    let {
        baseUrl: _v0,
        jwt: _v1,
        xVimeoPage: _v2,
        locale: _v3
      } = (0, _v94.useGctlConfig)(),
      [_v4, _v5] = (0, _v185.useInternalState)();
    return [(0, _v4.useCallback)(async _v0 => {
      _v5({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v191({
          ..._v0,
          baseUrl: _v0,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v1 ? `jwt ${_v1}` : "",
            "Vimeo-Page": `${_v2}`,
            "Accept-Language": _v3 ?? "en"
          }
        });
        _v5({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v5({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v0, _v2, _v1, _v3, _v5]), _v4];
  }
  "true" === _v184.default.env.STORYBOOK && (0, _v185.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v94.useGctlConfig)();
    return (0, _v192.default)(_v2 ? `/users/${_v2.where.userId}/lead_capture/pictures${(0, _v185.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v190({
      ..._v2,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      baseUrl: _v3
    }) : null, _v1);
  }, {
    endpoint: "/users/:userId/lead_capture/pictures",
    method: "GET"
  }), "true" === _v184.default.env.STORYBOOK && (0, _v185.assignMswData)(_v194, {
    endpoint: "/users/:userId/lead_capture/pictures",
    method: "GET"
  }), "true" === _v184.default.env.STORYBOOK && (0, _v185.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v94.useGctlConfig)();
    return (0, _v193.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/users/${_v2.where.userId}/lead_capture/pictures?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v190({
      ..._v2,
      baseUrl: _v3,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      query: {
        ..._v2.query,
        page: _v1 + 1
      }
    }) : null, _v1);
  }, {
    endpoint: "/users/:userId/lead_capture/pictures",
    method: "GET"
  }), "true" === _v184.default.env.STORYBOOK && (0, _v185.assignMswData)(_v195, {
    endpoint: "/users/:userId/lead_capture/pictures",
    method: "POST"
  });
  var _v196 = _v0.i(0);
  let _v197 = _v0 => {
      let [_v1, _v2] = (0, _v196.usePostUserTeamLogos)(),
        [_v3, _v4] = _v195(),
        [_v5, _v6] = (0, _v4.useState)(),
        [_v7, _v8] = (0, _v4.useState)(!1),
        _v9 = (0, _v4.useCallback)((_v0, _v1) => {
          _v8(_v1), _v6(_v0);
        }, []),
        _v10 = (0, _v4.useCallback)((_v0, _v1, _v2) => {
          switch (_v9(_v2, !0), _v0) {
            case _v26.THUMBNAIL_UPLOAD_TYPE.LOGO:
              _v1({
                where: {
                  userId: _v1.ownerId
                },
                select: []
              });
              break;
            case _v26.THUMBNAIL_UPLOAD_TYPE.BACKGROUND:
              _v3({
                where: {
                  userId: _v1.ownerId
                },
                select: []
              });
              break;
            default:
              throw _v9(void 0, !1), Error(`Type ${_v0} is not supported`);
          }
        }, [_v9, _v3, _v1]),
        _v11 = (0, _v4.useCallback)(async _v0 => {
          if (!_v5) return;
          let {
              error: _v1,
              data: _v2,
              loading: _v3
            } = _v0,
            {
              link: _v4,
              sizes: _v5
            } = _v2 || {};
          if (_v1) {
            _v9(void 0, !1), _v0?.(Error("Upload POST Failed"));
            return;
          }
          if (!_v3 && _v4) try {
            if (!(await fetch(_v4, {
              method: "PUT",
              body: _v5,
              headers: {
                "Content-Type": _v5.type
              }
            })).ok) return void _v0?.(Error("Upload to CDN Failed"));
            let _v0 = _v5?.[0]?.link;
            _v0 ? _v0?.(_v0) : _v0?.(Error("Upload Post Failed"));
          } catch (_v0) {
            _v0?.(Error("Upload to CDN Failed"));
          } finally {
            _v9(void 0, !1);
          }
        }, [_v9, _v0, _v5]);
      return (0, _v4.useEffect)(() => {
        _v11(_v2);
      }, [_v2]), (0, _v4.useEffect)(() => {
        _v11(_v4);
      }, [_v4]), [_v10, {
        uploading: _v7
      }];
    },
    _v198 = () => {
      let {
          backgroundList: _v0,
          loading: _v1,
          uploadBackground: _v2,
          uploading: _v3,
          getMoreBackground: _v4,
          refresh: _v5,
          deleteBackground: _v6,
          deleteInProgress: _v7
        } = (() => {
          let _v0 = (0, _v4.useRef)(0),
            _v1 = (0, _v4.useRef)(!1),
            _v2 = (0, _v4.useRef)(!1),
            [_v3, _v4] = (0, _v4.useState)(),
            _v5 = (0, _v4.useRef)(!1),
            _v6 = (0, _v4.useRef)(!1),
            [_v7, {
              data: _v8,
              error: _v9,
              loading: _v10
            }] = _v194(),
            [_v11, {
              error: _v12,
              loading: _v13
            }] = _v189(),
            [_v14, _v15] = (0, _v4.useState)([]),
            {
              patchLeadCapture: _v16
            } = (0, _v25.usePatchLeadCapture)(),
            _v17 = (0, _v4.useRef)(_v16);
          _v17.current = _v16;
          let _v18 = (0, _v23.useGlobalStore)(_v0 => _v0.leadCapture.background),
            _v19 = (0, _v23.useGlobalStore)(_v0 => _v0.entityOwnerId),
            _v20 = (0, _v23.useGlobalStore)(_v0 => _v0.entityType),
            {
              trackLiveStreamRegistrationBackgroundAdded: _v21
            } = (0, _v135.useLiveStreamBroadcasterTracking)(),
            [_v22, {
              uploading: _v23
            }] = _v197((0, _v4.useCallback)(_v0 => {
              _v0 instanceof Error || (_v20 === _v18.ENTITY_TYPE.EVENT && _v21({
                liveStreamBackgroundSource: "upload"
              }), _v19 && (_v6.current = !0, _v7({
                where: {
                  userId: _v19
                },
                select: ["uri", "sizes"],
                query: {
                  sizes: _v26.DEFAULT_BACKGROUND_SIZE,
                  perPage: _v26.BACKGROUND_RESULT_PER_PAGE,
                  page: 1
                }
              }), _v1.current = !0));
            }, [_v19, _v20, _v7, _v21]));
          (0, _v4.useEffect)(() => {
            if (null == _v8) return;
            _v6.current && (_v15([]), _v6.current = !1);
            let _v0 = _v8.data?.map(_v0 => ({
                ..._v0.sizes[0],
                uri: _v0.uri,
                linkLow: _v0.sizes[0]?.link,
                linkHigh: _v0.sizes[1]?.link || _v0.sizes[0]?.link
              })).filter(_v0 => _v0 && _v0.link),
              _v1 = [];
            _v2.current ? (_v1 = [..._v14, ..._v0], _v2.current = !1) : _v1 = _v0, _v15(_v1), _v0.current = _v8.page, _v5.current = null == _v8.paging.next, _v1.current && (_v17.current("background", {
              ..._v18,
              isActive: !0,
              url: _v0[0]?.link,
              urlHigh: _v0[0]?.linkHigh,
              urlLow: _v0[0]?.linkLow,
              uri: _v0[0]?.uri,
              useThumbnail: !1
            }), _v1.current = !1);
          }, [_v8, _v15]), (0, _v4.useEffect)(() => {
            _v19 && _v7 && _v7({
              where: {
                userId: _v19
              },
              select: ["uri", "sizes"],
              query: {
                sizes: _v26.DEFAULT_BACKGROUND_SIZE,
                perPage: _v26.BACKGROUND_RESULT_PER_PAGE
              }
            });
          }, [_v19]);
          let _v24 = (0, _v4.useCallback)((_v0 = !1) => {
              _v19 && (_v1.current = _v0, _v7({
                where: {
                  userId: _v19
                },
                select: ["uri", "sizes"],
                query: {
                  sizes: _v26.DEFAULT_BACKGROUND_SIZE,
                  perPage: _v26.BACKGROUND_RESULT_PER_PAGE,
                  page: 1
                }
              }), _v0.current = 1);
            }, [_v19, _v7]),
            _v25 = (0, _v4.useCallback)(_v0 => {
              _v19 && (_v4(_v0), _v18 && _v18.uri && _v0 === (0, _v78.getLastUuidFromUri)(_v18.uri) && _v17.current("background", {
                isActive: !1,
                url: "",
                urlHigh: "",
                urlLow: "",
                uri: "",
                style: _v18.style,
                hexCode: _v18.hexCode,
                opacity: _v18.opacity,
                useThumbnail: _v18.useThumbnail
              }), _v11({
                where: {
                  userId: _v19,
                  pictureId: _v0
                }
              }));
            }, [_v18, _v11, _v19]);
          return (0, _v4.useEffect)(() => {
            if (!_v12 && _v3 && !_v13) {
              let _v0 = _v14.filter(_v0 => _v3 !== (0, _v78.getLastUuidFromUri)(_v0.uri)),
                _v1 = _v14.find(_v0 => _v3 === (0, _v78.getLastUuidFromUri)(_v0.uri));
              (0, _v122.cleanUndoRedoHistory)(_v1), _v15(_v0), _v4(void 0), _v24();
            }
          }, [_v3, _v12, _v13]), {
            loading: _v10,
            backgroundList: _v14,
            uploading: _v23,
            error: _v9,
            uploadBackground: _v0 => {
              _v19 && _v22(_v26.THUMBNAIL_UPLOAD_TYPE.BACKGROUND, {
                ownerId: _v19
              }, _v0);
            },
            getMoreBackground: () => {
              _v5.current || _v19 && (_v2.current = !0, _v7({
                where: {
                  userId: _v19
                },
                select: ["uri", "sizes"],
                query: {
                  sizes: _v26.DEFAULT_BACKGROUND_SIZE,
                  perPage: _v26.BACKGROUND_RESULT_PER_PAGE,
                  page: _v0.current + 1
                }
              }));
            },
            refresh: _v24,
            deleteBackground: _v25,
            deleteInProgress: _v13
          };
        })(),
        {
          useThumbnail: _v8,
          uri: _v9
        } = (0, _v23.useGlobalStore)(_v0 => _v0.leadCapture.background),
        _v10 = (0, _v23.useGlobalStore)(_v0 => _v0.entityType),
        _v11 = (0, _v23.useGlobalStore)(_v0 => _v0.entity),
        {
          patchLeadCapture: _v12
        } = (0, _v25.usePatchLeadCapture)(),
        {
          hasBackgroundPermission: _v13
        } = (0, _v58.usePermissionStore)(),
        _v14 = _v0.length,
        _v15 = _v3 || _v1 || !_v13;
      return (0, _v1.jsxs)(_v6.Flex, {
        h: "100%",
        flexDir: "column",
        pb: "lg",
        px: "lg",
        children: [(0, _v1.jsx)(_v5.Box, {
          overflowY: "auto",
          h: "80%",
          mb: (0, _v7.rem)(20),
          children: 0 !== _v0.length || _v3 || _v1 ? (0, _v1.jsx)(_v142, {
            backgroundList: _v0,
            loading: _v1,
            onScrollBottom: () => {
              _v1 || _v4();
            },
            deleteBackground: _v6,
            deleteInProgress: _v7,
            uploading: _v3
          }) : (0, _v1.jsx)(_v130.Center, {
            height: "100%",
            width: "100%",
            children: (0, _v1.jsxs)(_v51.Stack, {
              direction: "column",
              alignItems: "center",
              mt: "2xl",
              children: [(0, _v1.jsx)(_v133.Images, {
                boxSize: (0, _v7.rem)(48)
              }), (0, _v1.jsx)(_v45.Text, {
                mt: (0, _v7.rem)(12),
                variant: "body-md",
                color: "text-secondary",
                children: _v13 ? _v28.default.CustomizeBg : _v28.default.NoLogoOrBackgroundPermission
              }), (0, _v1.jsx)(_v5.Box, {
                width: (0, _v7.rem)(200),
                mt: (0, _v7.rem)(10),
                children: (0, _v1.jsx)(_v183, {
                  uploadBackground: _v2,
                  isUploadingBackground: _v3,
                  disabled: _v15,
                  refresh: () => _v5(!0),
                  message: _v28.default.AddBackground,
                  btnFormat: "primary",
                  attach: "bottom"
                })
              })]
            })
          })
        }), (0, _v1.jsx)(_v131.Divider, {
          ml: (0, _v7.rem)(-24),
          width: `calc(100% + ${(0, _v7.rem)(48)})`,
          borderBottomWidth: (0, _v7.rem)(1),
          color: "stroke"
        }), (0, _v1.jsxs)(_v6.Flex, {
          height: _v14 ? "20%" : "16%",
          flexDir: "column",
          justify: "space-evenly",
          children: [(0, _v1.jsx)(_v5.Box, {
            mt: (0, _v7.rem)(20),
            mb: "sm",
            children: (0, _v1.jsx)(_v136, {
              title: _v28.default.Overlay
            })
          }), _v10 === _v18.ENTITY_TYPE.VIDEO && (0, _v1.jsx)(_v51.Stack, {
            direction: "row",
            justifyContent: "space-between",
            mb: "sm",
            children: (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsx)(_v13.Header, {
                color: "text-primary",
                size: "xs",
                children: _v28.default.useThumbnail
              }), (0, _v1.jsx)(_v132.Switch, {
                isDisabled: _v10 === _v18.ENTITY_TYPE.VIDEO && !_v11.pictures?.sizes.length || !_v13,
                size: "sm",
                onChange: () => {
                  _v12("background.useThumbnail", !_v8), _v8 ? null !== _v9 && _v9.length || _v12("background.isActive", !1) : _v12("background.isActive", !0);
                },
                isChecked: _v8
              })]
            })
          }), _v14 ? (0, _v1.jsx)(_v183, {
            uploadBackground: _v2,
            isUploadingBackground: _v3,
            disabled: _v15,
            refresh: () => _v5(!0),
            btnFormat: "primary"
          }) : null]
        })]
      });
    };
  var _v199 = _v0.i(0),
    _v200 = _v0.i(0),
    _v201 = _v0.i(0),
    _v202 = _v0.i(0);
  let _v203 = ({
    logo: _v0,
    onDelete: _v1,
    onSelectLogo: _v2
  }) => {
    let _v3 = (0, _v23.useGlobalStore)(_v0 => _v0.leadCapture.logo.url),
      _v4 = (0, _v23.useGlobalStore)(_v0 => _v0.leadCapture.logo),
      [_v5, _v6] = (0, _v4.useState)(!1),
      [_v7, _v8] = (0, _v4.useState)(!1),
      {
        hasLogoPermission: _v9
      } = (0, _v58.usePermissionStore)(),
      _v10 = (0, _v4.useRef)(null);
    return (0, _v4.useEffect)(() => {
      _v10.current?.focus();
    }), (0, _v1.jsxs)(_v5.Box, {
      m: "xs",
      position: "relative",
      onMouseEnter: () => _v6(!0),
      onMouseLeave: () => _v6(!1),
      children: [(0, _v1.jsx)(_v138, {
        selected: _v3 === _v0.link,
        onClick: () => {
          _v0.uri !== _v4.uri && _v2({
            ..._v4,
            isActive: !0,
            uri: _v0.uri,
            url: _v0.link
          });
        },
        src: _v0.link,
        alt: _v0.link
      }, _v0.link), _v9 && _v5 && (0, _v1.jsx)(_v42.IconButton, {
        onClick: () => _v8(!0),
        variant: "destructive",
        size: "xs",
        "aria-label": _v28.default.Delete,
        icon: (0, _v1.jsx)(_v137.CloseXSmall, {}),
        position: "absolute",
        top: (0, _v7.rem)(8),
        right: (0, _v7.rem)(8),
        background: "rgba(0, 0, 0, 0.4)",
        isDisabled: _v0.isDeleting,
        isLoading: _v0.isDeleting
      }), (0, _v1.jsx)(_v140, {
        active: _v7,
        title: _v28.default.LogoDeleteHeader,
        description: _v28.default.LogoDeleteModalDesc,
        handleDelete: () => {
          let _v0 = _v0.uri.split("/");
          _v1(parseInt(_v0[_v0.length - 1])), _v0.uri === _v4.uri && _v2({
            ..._v4,
            isActive: !1,
            uri: "",
            url: "",
            isLinkActive: !1,
            pictures: null
          });
        },
        deleteInProgress: _v0.isDeleting,
        setShowDeleteModal: _v8
      })]
    });
  };
  async function _v204({
    baseUrl: _v0,
    where: {
      userId: _v1,
      logoId: _v2
    },
    ..._v3
  }) {
    return (0, _v186.measureLatency)("deleteUserTeamLogo", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v1}/team_logos/${_v2}`, {
        ..._v3,
        method: "DELETE"
      });
      if (!_v0.ok) throw new _v77.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v77.deepCamelCase)(_v1);
    });
  }
  function _v205() {
    let {
        mutate: _v0
      } = (0, _v188.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v94.useGctlConfig)(),
      [_v5, _v6] = (0, _v185.useInternalState)();
    return [(0, _v4.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/team_logos/${_v0.where.logoId}${(0, _v185.serializeQuery)(_v0)}`, _v204({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }), !1);
        _v6({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v6({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v1, _v3, _v2, _v4, _v6]), _v5];
  }
  "true" === _v184.default.env.STORYBOOK && (0, _v185.assignMswData)(_v205, {
    endpoint: "/users/:userId/team_logos/:logoId",
    method: "DELETE"
  });
  let _v206 = () => {
    let {
        logoList: _v0,
        loading: _v1,
        uploadLogo: _v2,
        error: _v3,
        uploading: _v4,
        deleteLogo: _v5
      } = (() => {
        let _v0 = (0, _v4.useRef)(!1),
          [_v1, _v2] = (0, _v4.useState)([]),
          [_v3, {
            data: _v4,
            error: _v5,
            loading: _v6
          }] = (0, _v196.useGetUserTeamLogosLazy)(),
          [_v7, {
            loading: _v8
          }] = _v205(),
          {
            patchLeadCapture: _v9
          } = (0, _v25.usePatchLeadCapture)(),
          _v10 = (0, _v23.useGlobalStore)(_v0 => _v0.leadCapture.logo),
          _v11 = (0, _v23.useGlobalStore)(_v0 => _v0.entityOwnerId),
          _v12 = (0, _v8.useToast)(),
          {
            hasLogoPermission: _v13
          } = (0, _v58.usePermissionStore)(),
          [_v14, {
            uploading: _v15
          }] = _v197(_v0 => {
            _v0 instanceof Error ? _v12({
              title: _v28.default.CouldNotUploadLogo,
              status: "error"
            }) : _v11 && (_v3({
              where: {
                userId: _v11
              },
              select: ["uri", "sizes"],
              query: {
                sizes: _v26.DEFAULT_LOGO_SIZE
              }
            }), _v0.current = !0);
          }),
          _v16 = (0, _v4.useCallback)(async _v0 => {
            _v11 && _v14(_v26.THUMBNAIL_UPLOAD_TYPE.LOGO, {
              ownerId: _v11
            }, _v0);
          }, [_v11, _v14]),
          _v17 = (0, _v4.useCallback)(_v0 => {
            _v11 && (_v2(_v1.map(_v0 => (_v0.uri && parseInt(_v0.uri.split("/")[_v0.uri.split("/").length - 1])) === _v0 ? {
              ..._v0,
              isDeleting: !0
            } : _v0)), _v7({
              where: {
                userId: _v11,
                logoId: _v0
              }
            }));
          }, [_v11, _v1, _v2, _v7]);
        return (0, _v4.useEffect)(() => {
          if (_v11 && !_v8) {
            let _v0 = _v1.filter(_v0 => !_v0.isDeleting),
              _v1 = _v1.find(_v0 => _v0.isDeleting);
            (0, _v122.cleanUndoRedoHistory)(_v1), _v2(_v0);
          }
        }, [_v8]), (0, _v4.useEffect)(() => {
          _v11 && _v13 && _v3({
            where: {
              userId: _v11
            },
            select: ["uri", "sizes"],
            query: {
              sizes: _v26.DEFAULT_LOGO_SIZE
            }
          });
        }, [_v11, _v13]), (0, _v4.useEffect)(() => {
          if (null == _v4) return;
          let _v0 = _v4?.data?.map(_v0 => ({
            ..._v0.sizes[0],
            uri: _v0.uri
          })).filter(_v0 => _v0 && _v0.link).map(_v0 => ({
            ..._v0,
            link: _v0.link
          }));
          _v2(_v0), _v0.current && (_v9("logo", {
            isActive: !0,
            uri: _v0[0].uri,
            url: _v0[0].link,
            isLinkActive: _v10.isLinkActive,
            customLink: _v10.customLink
          }), _v0.current = !1);
        }, [_v4, _v9]), {
          loading: _v6,
          uploading: _v15,
          deletingInProgress: _v8,
          error: _v5,
          logoList: _v1,
          uploadLogo: _v16,
          deleteLogo: _v17
        };
      })(),
      {
        patchLeadCapture: _v6
      } = (0, _v25.usePatchLeadCapture)(),
      _v7 = (0, _v23.useGlobalStore)(_v0 => _v0.leadCapture.logo.customLink),
      _v8 = (0, _v23.useGlobalStore)(_v0 => _v0.leadCapture.logo.isLinkActive),
      _v9 = (0, _v23.useGlobalStore)(_v0 => _v0.leadCapture.logo.url),
      _v10 = (0, _v4.useRef)(null),
      _v11 = (0, _v4.useRef)(null),
      [_v12, _v13] = (0, _v4.useState)(!0),
      {
        hasLogoPermission: _v14
      } = (0, _v58.usePermissionStore)(),
      [_v15, _v16] = (0, _v4.useState)(_v7),
      _v17 = (0, _v8.useToast)(),
      {
        isOpen: _v18,
        onClose: _v19,
        onOpen: _v20
      } = (0, _v143.useDisclosure)(),
      [_v21, _v22] = (0, _v4.useState)("");
    (0, _v4.useEffect)(() => {
      _v13(!0), _v10.current && _v7 && (_v10.current.value = _v7);
    }, [_v7, _v8]), (0, _v4.useEffect)(() => {
      _v3 && _v17({
        title: _v28.default.CouldNotUploadLogo,
        status: "error"
      });
    }, [_v3]);
    let _v23 = async _v0 => {
        let _v1 = _v0.target.files && _v0.target.files[0];
        if (!_v1) return;
        if (!_v26.ACCEPTED_FILE_TYPES.includes(_v1.type)) {
          _v0.target.value = "";
          return;
        }
        _v22(_v1.name);
        let {
          height: _v2,
          width: _v3
        } = await (0, _v98.getImageResolution)(_v1);
        if (_v2 > _v26.MAX_LOGO_IMG_HEIGHT || _v3 > _v26.MAX_LOGO_IMG_WIDTH || _v1.size > _v26.LOGO_UPLOAD_LIMIT) {
          _v20(), _v0.target.value = "";
          return;
        }
        _v2(_v1), _v0.target.value = "";
      },
      _v24 = _v0 => {
        _v0.target.value?.length === 0 || (0, _v128.isValidUrl)(_v0.target.value) ? (_v13(!0), _v6("logo.customLink", _v0.target.value)) : _v13(!1);
      },
      _v25 = _v0 => {
        _v6("logo", _v0);
      };
    return (0, _v1.jsxs)(_v6.Flex, {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      pb: "lg",
      px: "lg",
      children: [(0, _v1.jsxs)(_v5.Box, {
        height: "100%",
        overflowY: "auto",
        children: [_v1 && (0, _v1.jsx)(_v130.Center, {
          width: "100%",
          height: "100%",
          children: (0, _v1.jsx)(_v44.Spinner, {})
        }), !_v1 && (0, _v1.jsxs)(_v1.Fragment, {
          children: [_v0.map(_v0 => (0, _v1.jsx)(_v203, {
            onSelectLogo: _v25,
            logo: _v0,
            onDelete: _v5
          }, _v0.link)), _v0?.length < 1 && (0, _v1.jsx)(_v130.Center, {
            width: "100%",
            height: "100%",
            children: (0, _v1.jsxs)(_v5.Box, {
              textAlign: "center",
              children: [(0, _v1.jsx)(_v202.LogoBrand, {
                boxSize: (0, _v7.rem)(48)
              }), (0, _v1.jsxs)(_v5.Box, {
                mt: (0, _v7.rem)(12),
                children: [(0, _v1.jsx)(_v45.Text, {
                  variant: "body-sm",
                  color: "text-secondary",
                  children: _v14 ? _v28.default.IncreaseBrandRecognition : _v28.default.NoLogoOrBackgroundPermission
                }), (0, _v1.jsx)(_v6.Flex, {
                  width: "100%",
                  justifyContent: "center",
                  pt: "md",
                  children: (0, _v1.jsx)(_v199.FileInput, {
                    isDisabled: _v4 || !_v14,
                    isLoading: _v4,
                    onChange: _v23,
                    accept: _v26.ACCEPT_FILE_TYPE_IMAGE,
                    size: "md",
                    variant: "primary",
                    label: (0, _v1.jsx)(_v13.Header, {
                      width: (0, _v7.rem)(167),
                      size: "xs",
                      children: _v28.default.AddALogo
                    })
                  })
                })]
              })]
            })
          })]
        })]
      }), (0, _v1.jsx)(_v131.Divider, {
        borderColor: "stroke",
        my: "md",
        mx: (0, _v7.rem)(-24),
        width: "130%"
      }), (0, _v1.jsxs)(_v5.Box, {
        pt: "md",
        children: [(0, _v1.jsxs)(_v6.Flex, {
          width: "100%",
          justifyContent: "space-between",
          children: [(0, _v1.jsx)(_v45.Text, {
            variant: "heading-xs",
            children: _v28.default.LinkThisLogo
          }), (0, _v1.jsx)(_v6.Flex, {
            tabIndex: _v14 && _v9?.length > 0 ? 0 : -1,
            onKeyDown: _v0 => _v0.key === _v26.KEY_CODES.ENTER && _v6("logo.isLinkActive", !_v8),
            children: (0, _v1.jsx)(_v132.Switch, {
              size: "sm",
              isDisabled: !(_v14 && _v9?.length > 0),
              isChecked: _v8 && _v9?.length > 0,
              tabIndex: -1,
              onChange: _v0 => {
                _v6("logo.isLinkActive", _v0.target.checked);
              }
            })
          })]
        }), _v8 && _v9?.length > 0 && (0, _v1.jsxs)(_v200.FormControl, {
          pt: "md",
          isInvalid: !_v12,
          children: [(0, _v1.jsx)(_v13.Header, {
            size: "xs",
            children: "URL"
          }), (0, _v1.jsx)(_v96.Input, {
            isDisabled: !_v14,
            ref: _v10,
            value: _v15 || "",
            onBlur: _v24,
            onKeyDown: _v0 => {
              _v0.key === _v26.KEY_CODES.ENTER && _v24(_v0);
            },
            placeholder: _v28.default.LinkURL,
            onChange: _v0 => {
              let _v1 = _v0.target.value,
                _v2 = (0, _v128.appendProtocol)(_v1);
              _v16((0, _v128.isValidUrl)(_v2) ? _v2 : _v1);
            }
          }), !_v12 && (0, _v1.jsx)(_v201.FormErrorMessage, {
            children: _v28.default.InvalidURL
          })]
        }), _v0?.length >= 1 && (0, _v1.jsxs)(_v5.Box, {
          children: [(0, _v1.jsx)(_v12.Button, {
            mt: "md",
            width: "100%",
            isDisabled: _v4 || !_v14,
            onClick: () => _v11.current?.click(),
            isLoading: _v4,
            children: _v28.default.AddLogo
          }), (0, _v1.jsx)("input", {
            ref: _v11,
            accept: _v26.ACCEPT_FILE_TYPE_IMAGE,
            type: "file",
            hidden: !0,
            onChange: _v23
          })]
        })]
      }), (0, _v1.jsxs)(_v34.Modal, {
        isOpen: _v18,
        onClose: _v19,
        children: [(0, _v1.jsx)(_v39.ModalOverlay, {
          zIndex: "modal"
        }), (0, _v1.jsxs)(_v36.ModalContent, {
          minHeight: (0, _v7.rem)(192),
          minWidth: (0, _v7.rem)(540),
          p: "lg",
          children: [(0, _v1.jsx)(_v38.ModalHeader, {
            fontSize: "heading-md",
            p: 0,
            children: _v28.default.UploadTooLarge(_v21)
          }), (0, _v1.jsx)(_v35.ModalBody, {
            fontSize: "body-lg",
            p: 0,
            children: _v28.default.UploadError(`${_v26.MAX_LOGO_IMG_WIDTH.toLocaleString()} x ${_v26.MAX_LOGO_IMG_HEIGHT.toLocaleString()} px`, `${(_v26.LOGO_UPLOAD_LIMIT / 0).toLocaleString()} MB`)
          }), (0, _v1.jsxs)(_v51.Stack, {
            direction: "row-reverse",
            children: [(0, _v1.jsx)(_v12.Button, {
              variant: "primary",
              onClick: () => {
                _v11.current?.click(), _v19();
              },
              children: _v28.default.UploadAnotherImg
            }), (0, _v1.jsx)(_v12.Button, {
              variant: "secondary",
              onClick: _v19,
              children: _v28.default.Cancel
            })]
          })]
        })]
      })]
    });
  };
  var _v207 = _v0.i(0),
    _v208 = _v0.i(0),
    _v209 = _v0.i(0),
    _v210 = _v0.i(0),
    _v211 = _v26;
  let _v212 = ({
    children: _v0,
    show: _v1,
    title: _v2,
    hasBackgroundDropdown: _v3,
    showBackButton: _v4,
    animate: _v5,
    onBackButtonClick: _v6 = () => void 0,
    position: _v7 = _v211.PANEL_POSITION.LEFT
  }) => {
    let _v8 = _v211.SETTING_PANEL_SLIDE_ANIMATION_DURATION,
      [_v9, _v10] = (0, _v4.useState)(!0),
      _v11 = (0, _v208.useSpring)({
        ...(_v7 === _v211.PANEL_POSITION.LEFT && {
          left: _v1 ? 0 : -_v211.SETTING_PANEL_WIDTH
        }),
        ...(_v7 === _v211.PANEL_POSITION.RIGHT && {
          right: _v1 ? 0 : -_v211.SETTING_PANEL_WIDTH
        }),
        config: {
          duration: _v8
        }
      }),
      {
        style: _v12
      } = (0, _v23.useGlobalStore)(_v0 => _v0.leadCapture.background),
      {
        patchLeadCapture: _v13
      } = (0, _v25.usePatchLeadCapture)(),
      _v14 = (0, _v23.useGlobalStore)(_v0 => _v0.leadCapture.background.urlLow),
      _v15 = (0, _v23.useGlobalStore)(_v0 => _v0.leadCapture.background.useThumbnail),
      _v16 = _v211.BACKGROUND_STYLE_MAP.find(_v0 => _v0.value === _v12),
      _v17 = (0, _v49.useIsBokeh)(),
      _v18 = (0, _v4.useRef)(void 0),
      _v19 = 0 == _v14.length && !_v15;
    return (0, _v4.useEffect)(() => {
      clearTimeout(_v18.current), _v1 ? _v10(!0) : _v18.current = setTimeout(() => {
        _v10(!1);
      }, _v8);
    }, [_v1]), (0, _v1.jsxs)(_v6.Flex, {
      as: _v207.animated.div,
      position: "absolute",
      background: _v17 ? "surface" : "background",
      height: "100%",
      flexDir: "column",
      width: (0, _v7.rem)(_v211.SETTING_PANEL_WIDTH),
      zIndex: 2,
      visibility: _v9 ? "visible" : "hidden",
      style: _v5 ? {
        ..._v11
      } : {},
      children: [(_v2 || _v4) && (0, _v1.jsxs)(_v6.Flex, {
        alignItems: "center",
        justifyContent: "space-between",
        p: "lg",
        children: [(0, _v1.jsx)(_v6.Flex, {
          flex: 1,
          children: _v4 && (0, _v1.jsx)(_v42.IconButton, {
            "aria-label": "back",
            variant: "tertiary",
            icon: (0, _v1.jsx)(_v210.ChevronLeftSmall, {}),
            onClick: _v6
          })
        }), (0, _v1.jsx)(_v6.Flex, {
          flex: 6,
          alignItems: "center",
          justifyContent: "flex-start",
          children: (0, _v1.jsx)(_v13.Header, {
            size: "md",
            children: _v2
          })
        }), (0, _v1.jsx)(_v6.Flex, {
          flex: 1,
          children: _v3 && _v16 && (0, _v1.jsx)(_v182, {
            disabled: _v19,
            selectedValue: _v16,
            options: _v211.BACKGROUND_STYLE_MAP,
            width: "auto",
            onSelect: _v0 => _v13("background.style", _v0.value),
            children: (0, _v1.jsx)(_v12.Button, {
              pr: "xs",
              isDisabled: _v19,
              variant: "tertiary",
              rightIcon: (0, _v1.jsx)(_v209.ChevronDownSmall, {}),
              children: (0, _v1.jsx)(_v13.Header, {
                size: "xs",
                children: _v16.name
              })
            })
          })
        })]
      }), (0, _v1.jsx)(_v5.Box, {
        width: "100%",
        overflowX: "hidden",
        overflowY: "auto",
        flex: 1,
        children: _v0
      })]
    });
  };
  var _v213 = _v0.i(0),
    _v214 = _v0.i(0),
    _v215 = _v0.i(0),
    _v216 = _v0.i(0),
    _v217 = _v0.i(0);
  let _v218 = _v0 => (0, _v1.jsx)(_v5.Box, {
      fontSize: "body-md",
      mr: (0, _v7.rem)(12),
      border: `${(0, _v7.rem)(1)} solid`,
      borderColor: "transparent",
      color: "text-secondary",
      _hover: {
        borderColor: "blue.500"
      },
      ..._v0,
      children: _v0.children
    }),
    _v219 = ({
      color: _v0,
      ..._v1
    }) => (0, _v1.jsx)(_v5.Box, {
      borderRadius: "round",
      border: `${(0, _v7.rem)(1)} solid`,
      borderColor: "slate.100",
      background: _v0,
      height: (0, _v7.rem)(24),
      width: (0, _v7.rem)(24),
      cursor: "pointer",
      _hover: {
        borderColor: "blue.500"
      },
      ..._v1,
      children: _v1.children
    }),
    _v220 = _v0 => (0, _v1.jsx)(_v6.Flex, {
      alignItems: "center",
      ..._v0,
      children: _v0.children
    }),
    _v221 = ({
      showCloseButton: _v0,
      onCloseButtonClick: _v1 = () => void 0
    }) => {
      let [_v2, _v3] = (0, _v4.useState)("#FFFFFF"),
        [_v4, _v5] = (0, _v4.useState)("#FFFFFF"),
        [_v6, _v7] = (0, _v4.useState)(""),
        _v8 = (0, _v23.useGlobalStore)(_v0 => _v0.leadCapture.primaryButtonStyle),
        _v9 = (0, _v23.useGlobalStore)(_v0 => _v0.leadCapture.secondaryButtonStyle),
        {
          patchLeadCapture: _v10
        } = (0, _v25.usePatchLeadCapture)(),
        _v11 = (0, _v217.useRtfStore)(_v0 => _v0.buttonRole),
        _v12 = (0, _v217.useRtfStore)(_v0 => _v0.buttonTextType),
        _v13 = (0, _v217.useRtfStore)(_v0 => _v0.setButtonLivePreview),
        _v14 = (0, _v217.useRtfStore)(_v0 => _v0.clearButtonLivePreview),
        _v15 = _v11 === _v26.BUTTON_ROLES.PRIMARY ? _v8 : _v9,
        _v16 = _v0 => {
          _v14(), _v11 === _v26.BUTTON_ROLES.PRIMARY ? _v10("primaryButtonStyle", {
            ..._v8,
            ..._v0
          }) : _v10("secondaryButtonStyle", {
            ..._v9,
            ..._v0
          });
        },
        _v17 = () => {
          switch (_v12) {
            case _v26.BUTTON_TEXT_TYPE.BACK:
              return _v15?.backButtonText;
            case _v26.BUTTON_TEXT_TYPE.NEXT:
              return _v15?.nextButtonText;
            case _v26.BUTTON_TEXT_TYPE.REGISTER:
              return _v15?.registerButtonText;
            case _v26.BUTTON_TEXT_TYPE.LOGIN:
              return _v15?.loginButtonText;
          }
        },
        _v18 = _v0 => {
          let _v1 = _v15?.style?.length ? [..._v15?.style] : [];
          _v1.includes(_v0) ? _v1 = _v1.filter(_v0 => _v0 !== _v0) : _v1.push(_v0), _v16({
            style: _v1
          });
        };
      return (0, _v4.useEffect)(() => {
        let _v0 = _v11 === _v26.BUTTON_ROLES.PRIMARY ? _v8 : _v9;
        _v5(_v0.buttonColor || "#FFFFFF"), _v3(_v0.textColor || "#FFFFFF"), _v7(_v17() || "");
      }, [_v11, _v12]), (0, _v4.useEffect)(() => {
        _v7(_v17() || "");
      }, [_v17()]), (0, _v1.jsxs)(_v5.Box, {
        p: "lg",
        height: "100%",
        children: [(0, _v1.jsxs)(_v6.Flex, {
          width: "100%",
          mb: "lg",
          alignItems: "center",
          children: [(0, _v1.jsx)(_v6.Flex, {
            flex: 1,
            alignItems: "center",
            textAlign: "left",
            height: (0, _v7.rem)(40),
            children: (0, _v1.jsx)(_v13.Header, {
              size: "md",
              children: (() => {
                switch (_v12) {
                  case _v26.BUTTON_TEXT_TYPE.BACK:
                    return _v28.default.SecondaryButton;
                  case _v26.BUTTON_TEXT_TYPE.NEXT:
                    return _v28.default.PrimaryButton;
                  case _v26.BUTTON_TEXT_TYPE.REGISTER:
                    return _v28.default.SubmitButton;
                  case _v26.BUTTON_TEXT_TYPE.LOGIN:
                    return _v28.default.SignInButton;
                }
              })()
            })
          }), (0, _v1.jsx)(_v6.Flex, {
            alignItems: "center",
            textAlign: "right",
            children: _v0 && (0, _v1.jsx)(_v42.IconButton, {
              "aria-label": "Close",
              "data-testid": "button-toolbar-close-button",
              icon: (0, _v1.jsx)(_v214.CloseX, {}),
              size: "sm",
              variant: "tertiary",
              onClick: _v1
            })
          })]
        }), (0, _v1.jsxs)(_v5.Box, {
          mb: (0, _v7.rem)(10),
          children: [(0, _v1.jsx)(_v13.Header, {
            mb: "xs",
            size: "xs",
            children: _v28.default.Text
          }), (0, _v1.jsx)(_v96.Input, {
            fontSize: "body-md",
            value: _v6,
            maxLength: 20,
            onChange: _v0 => {
              let {
                value: _v1
              } = _v0.currentTarget;
              _v7(_v1), _v13({
                buttonColor: _v4,
                textColor: _v2,
                selectedButton: {
                  role: _v11,
                  textType: _v12
                },
                text: _v1
              });
            },
            onBlur: _v0 => {
              let {
                value: _v1
              } = _v0.currentTarget;
              _v1.length < 1 ? _v7(_v17() || "") : _v16({
                [_v12]: _v1
              });
            }
          }), (0, _v1.jsx)(_v45.Text, {
            mb: (0, _v7.rem)(12),
            variant: "body-sm",
            color: "text-secondary",
            children: _v28.default.CharacterLimit20
          })]
        }), (0, _v1.jsxs)(_v6.Flex, {
          alignItems: "center",
          width: "100%",
          mb: "lg",
          children: [(0, _v1.jsx)(_v13.Header, {
            size: "xs",
            children: _v28.default.Style
          }), (0, _v1.jsxs)(_v6.Flex, {
            ml: (0, _v7.rem)(45),
            width: (0, _v7.rem)(235),
            gap: (0, _v7.rem)(8),
            children: [(0, _v1.jsx)(_v42.IconButton, {
              variant: _v15?.style?.includes(_v26.RTF_BUTTON_TEXT_STYLE_VALUE.BOLD) ? "blur" : "tertiary",
              onClick: () => {
                _v18(_v26.RTF_BUTTON_TEXT_STYLE_VALUE.BOLD);
              },
              "aria-label": "Bold",
              icon: (0, _v1.jsx)(_v213.Bold, {})
            }), (0, _v1.jsx)(_v42.IconButton, {
              variant: _v15?.style?.includes(_v26.RTF_BUTTON_TEXT_STYLE_VALUE.ITALIC) ? "blur" : "tertiary",
              onClick: () => {
                _v18(_v26.RTF_BUTTON_TEXT_STYLE_VALUE.ITALIC);
              },
              "aria-label": "Italic",
              icon: (0, _v1.jsx)(_v215.Italic, {})
            }), (0, _v1.jsx)(_v42.IconButton, {
              variant: _v15?.style?.includes(_v26.RTF_BUTTON_TEXT_STYLE_VALUE.UNDERLINE) ? "blur" : "tertiary",
              onClick: () => {
                _v18(_v26.RTF_BUTTON_TEXT_STYLE_VALUE.UNDERLINE);
              },
              "aria-label": "Underline",
              icon: (0, _v1.jsx)(_v216.Underline, {})
            })]
          })]
        }), (0, _v1.jsxs)(_v222, {
          width: "100%",
          mb: "lg",
          alignItems: "center",
          justifyContent: "space-between",
          children: [(0, _v1.jsx)(_v13.Header, {
            size: "xs",
            children: _v28.default.Type
          }), (0, _v1.jsx)(_v6.Flex, {
            children: (0, _v1.jsx)(_v182, {
              width: 241,
              buttonHeight: 40,
              selectedValue: _v26.RTF_BUTTON_TYPES.find(_v0 => _v0.value === _v15?.type) || _v26.RTF_BUTTON_TYPES[0],
              options: _v26.RTF_BUTTON_TYPES,
              onSelect: _v0 => _v16({
                type: _v0.value
              })
            })
          })]
        }), (0, _v1.jsxs)(_v222, {
          children: [(0, _v1.jsx)(_v13.Header, {
            size: "xs",
            children: _v28.default.TextColor
          }), (0, _v1.jsx)(_v6.Flex, {
            children: (0, _v1.jsx)(_v134.ColorPickerBrandKit, {
              productName: "registration",
              onChange: _v0 => {
                _v3(_v0), _v13({
                  textColor: _v0,
                  buttonColor: _v4,
                  selectedButton: {
                    role: _v11,
                    textType: _v12
                  },
                  text: _v17() || ""
                });
              },
              color: _v15?.textColor || _v2,
              onClose: () => _v16({
                textColor: _v2
              }),
              children: (0, _v1.jsxs)(_v220, {
                children: [(0, _v1.jsx)(_v218, {
                  className: "background_hexcode",
                  size: "1",
                  children: _v15?.textColor?.toUpperCase()
                }), (0, _v1.jsx)(_v219, {
                  color: _v15?.textColor || "#FFFFFF"
                })]
              })
            })
          })]
        }), (0, _v1.jsxs)(_v222, {
          children: [(0, _v1.jsx)(_v13.Header, {
            size: "xs",
            children: _v28.default.ButtonColor
          }), (0, _v1.jsx)(_v6.Flex, {
            children: (0, _v1.jsx)(_v134.ColorPickerBrandKit, {
              productName: "registration",
              onChange: _v0 => {
                _v5(_v0), _v13({
                  buttonColor: _v0,
                  textColor: _v2,
                  selectedButton: {
                    role: _v11,
                    textType: _v12
                  },
                  text: _v17() || ""
                });
              },
              color: _v15?.buttonColor || _v4,
              onClose: () => _v16({
                buttonColor: _v4
              }),
              children: (0, _v1.jsxs)(_v220, {
                children: [(0, _v1.jsx)(_v218, {
                  className: "background_hexcode",
                  size: "1",
                  children: _v15?.buttonColor?.toUpperCase()
                }), (0, _v1.jsx)(_v219, {
                  color: _v15?.buttonColor || "#FFFFFF"
                })]
              })
            })
          })]
        })]
      });
    },
    _v222 = _v0 => (0, _v1.jsx)(_v6.Flex, {
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
      mb: "lg",
      ..._v0,
      children: _v0.children
    });
  var _v223 = _v0.i(0);
  let _v224 = ({
      onCloseButtonClick: _v0 = () => void 0
    }) => {
      let _v1 = (0, _v23.useGlobalStore)((0, _v127.useShallow)(_v0 => _v0.leadCapture.customFields)),
        [_v2, _v3] = (0, _v4.useState)(""),
        [_v4, _v5] = (0, _v4.useState)([]),
        _v6 = (0, _v217.useRtfStore)((0, _v127.useShallow)(_v0 => _v0.setSelectedFieldLivePreview)),
        _v7 = (0, _v217.useRtfStore)((0, _v127.useShallow)(_v0 => _v0.clearSelectedFieldLivePreview)),
        _v8 = (0, _v23.useGlobalStore)((0, _v127.useShallow)(_v0 => _v0.currentSelectedFieldIndex)),
        {
          patchLeadCapture: _v9
        } = (0, _v25.usePatchLeadCapture)();
      return (0, _v4.useEffect)(() => {
        _v3(_v1[_v8]?.metadata?.color || _v26.COLORS.WHITE);
      }, [_v8]), (0, _v4.useEffect)(() => {
        _v5(_v1.map(_v0 => _v0.isRequired));
      }, [_v1]), (0, _v4.useEffect)(() => {
        let _v0 = _v1.map(() => _v1[_v8].isRequired);
        _v6({
          color: _v2,
          index: _v8
        }), _v5(_v0);
      }, [_v2, _v8]), (0, _v1.jsxs)(_v5.Box, {
        padding: (0, _v7.rem)(24),
        height: "100%",
        children: [(0, _v1.jsxs)(_v6.Flex, {
          marginBottom: (0, _v7.rem)(24),
          alignItems: "center",
          width: "100%",
          children: [(0, _v1.jsx)(_v6.Flex, {
            flex: 1,
            alignItems: "center",
            textAlign: "left",
            height: (0, _v7.rem)(40),
            children: (0, _v1.jsx)(_v13.Header, {
              size: "md",
              children: _v28.default.CustomCheckbox
            })
          }), (0, _v1.jsx)(_v6.Flex, {
            alignItems: "center",
            textAlign: "right",
            children: (0, _v1.jsx)(_v42.IconButton, {
              "aria-label": "Close",
              "data-testid": "checkbox-toolbar-close-button",
              icon: (0, _v1.jsx)(_v214.CloseX, {}),
              size: "sm",
              variant: "tertiary",
              onClick: _v0
            })
          })]
        }), (0, _v1.jsxs)(_v225, {
          children: [(0, _v1.jsx)(_v13.Header, {
            size: "xs",
            children: _v28.default.Required
          }), (0, _v1.jsx)(_v6.Flex, {
            children: (0, _v1.jsx)(_v132.Switch, {
              size: "sm",
              isChecked: _v4[_v8],
              onChange: () => {
                let _v0 = [..._v4];
                _v0[_v8] = !_v0[_v8], _v5(_v0);
                let _v1 = [..._v1];
                _v1[_v8] = {
                  ..._v1[_v8],
                  isRequired: _v0[_v8]
                }, _v9("customFields", (0, _v223.formatCustomFieldPayload)(_v1)), _v7();
              },
              paddingLeft: (0, _v7.rem)(5),
              alignItems: "center"
            })
          })]
        }), (0, _v1.jsxs)(_v225, {
          children: [(0, _v1.jsx)(_v13.Header, {
            size: "xs",
            children: _v28.default.Color
          }), (0, _v1.jsx)(_v6.Flex, {
            children: (0, _v1.jsx)(_v134.ColorPickerBrandKit, {
              productName: "registration",
              onChange: _v0 => _v3(_v0),
              color: _v2,
              onClose: () => {
                let _v0 = [..._v1];
                _v0[_v8] = {
                  ..._v0[_v8],
                  metadata: {
                    ..._v0[_v8]?.metadata,
                    color: _v2
                  }
                }, _v9("customFields", (0, _v223.formatCustomFieldPayload)(_v0)), _v7();
              },
              children: (0, _v1.jsxs)(_v220, {
                children: [(0, _v1.jsx)(_v218, {
                  className: "background_hexcode",
                  size: "1",
                  children: _v2.toUpperCase()
                }), (0, _v1.jsx)(_v219, {
                  color: _v2
                })]
              })
            })
          })]
        })]
      });
    },
    _v225 = _v0 => (0, _v1.jsx)(_v6.Flex, {
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: (0, _v7.rem)(24),
      ..._v0,
      children: _v0.children
    });
  var _v226 = _v0.i(0),
    _v227 = _v0.i(0);
  let _v228 = () => {
      let {
        isOpen: _v0,
        onClose: _v1,
        onToggle: _v2
      } = (0, _v143.useDisclosure)();
      return (0, _v1.jsxs)(_v6.Flex, {
        children: [(0, _v1.jsx)(_v227.InfoCircle, {
          w: (0, _v7.rem)(14),
          ml: "sm",
          onClick: _v2,
          cursor: "pointer"
        }), (0, _v1.jsxs)(_v34.Modal, {
          isOpen: _v0,
          onClose: _v1,
          children: [(0, _v1.jsx)(_v39.ModalOverlay, {
            zIndex: "modal"
          }), (0, _v1.jsx)(_v36.ModalContent, {
            color: "text-primary",
            children: (0, _v1.jsxs)(_v5.Box, {
              p: "lg",
              children: [(0, _v1.jsxs)(_v5.Box, {
                pb: "md",
                children: [(0, _v1.jsx)(_v13.Header, {
                  size: "lg",
                  pb: "md",
                  children: _v28.default.PrivacyPolicyURL
                }), (0, _v1.jsx)(_v146.Paragraph, {
                  size: "md",
                  children: _v28.default.PrivacyPolicyModalDesc
                })]
              }), (0, _v1.jsx)(_v6.Flex, {
                justifyContent: "flex-end",
                children: (0, _v1.jsx)(_v12.Button, {
                  onClick: _v1,
                  children: _v28.default.Close
                })
              })]
            })
          })]
        })]
      });
    },
    _v229 = () => {
      let _v0 = (0, _v23.useGlobalStore)(_v0 => _v0.leadCapture.privacyPolicyUrl),
        _v1 = (0, _v4.useRef)(null),
        [_v2, _v3] = (0, _v4.useState)(!0),
        [_v4, _v5] = (0, _v4.useState)(!1),
        {
          patchLeadCapture: _v6
        } = (0, _v25.usePatchLeadCapture)(),
        {
          onPrivacyPolicyChanged: _v7
        } = (0, _v97.useCallbackContext)(),
        {
          isOwnerOrAdmin: _v8
        } = (0, _v58.usePermissionStore)(),
        _v9 = (0, _v23.useGlobalStore)(_v0 => _v0.entityOwnerId),
        {
          capabilities: _v10,
          ready: _v11
        } = (0, _v9.useCapability)(["hasAdminForcedPreset"], _v9),
        {
          settings: _v12
        } = (0, _v20.useOrionSettings)(),
        _v13 = (_v11 && !!_v10?.hasAdminForcedPreset || _v12.enable_admin_forced_preset) && !_v8;
      return (0, _v4.useEffect)(() => {
        _v3(!0), _v1.current && (_v1.current.value = _v0?.length ? _v0 : "");
      }, [_v0]), (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsxs)(_v6.Flex, {
          mt: (0, _v7.rem)(26),
          color: "text-primary",
          alignItems: "center",
          pb: (0, _v7.rem)(6),
          children: [(0, _v1.jsx)(_v13.Header, {
            size: "xs",
            children: _v28.default.PrivacyPolicyURL
          }), (0, _v1.jsx)(_v228, {})]
        }), (0, _v1.jsxs)(_v200.FormControl, {
          isInvalid: !_v2,
          children: [(0, _v1.jsx)(_v96.Input, {
            name: "privacyPolicyUrl",
            ref: _v1,
            size: "sm",
            height: (0, _v7.rem)(40),
            placeholder: _v28.default.LinkURL,
            isDisabled: _v13,
            onBlur: _v0 => {
              let _v1 = _v0.target.value,
                _v2 = (0, _v128.appendProtocol)(_v1);
              _v1?.length === 0 || (0, _v128.isValidUrl)(_v2) ? (_v3(!0), _v7?.(), _v6("privacyPolicyUrl", _v2)) : _v3(!1), _v5(!1);
            },
            onFocus: () => _v5(!0)
          }), _v13 && (0, _v1.jsx)(_v200.FormHelperText, {
            color: "text-secondary",
            fontSize: "body-sm",
            mt: (0, _v7.rem)(4),
            children: _v28.default.PrivacyPolicyAdminOnly
          }), !_v2 && !_v4 && (0, _v1.jsx)(_v201.FormErrorMessage, {
            children: _v28.default.InvalidURL
          })]
        })]
      });
    },
    _v230 = ({
      showCloseButton: _v0,
      onCloseButtonClick: _v1 = () => void 0
    }) => {
      let [_v2, _v3] = (0, _v4.useState)(""),
        {
          patchLeadCapture: _v4
        } = (0, _v25.usePatchLeadCapture)(),
        _v5 = (0, _v23.useGlobalStore)((0, _v127.useShallow)(_v0 => _v0.leadCapture.nonEditableTextStyle)),
        _v6 = (0, _v217.useRtfStore)((0, _v127.useShallow)(_v0 => _v0.setNonEditTextLivePreview)),
        _v7 = (0, _v217.useRtfStore)((0, _v127.useShallow)(_v0 => _v0.clearNonEditTextLivePreview)),
        _v8 = (0, _v23.useGlobalStore)((0, _v127.useShallow)(_v0 => _v0.selectedNonEditableField));
      (0, _v4.useEffect)(() => {
        _v3(_v5?.[_v8]?.color || _v26.COLORS.WHITE);
      }, [_v8]), (0, _v4.useEffect)(() => {
        _v6({
          color: _v2,
          selectedField: _v8
        });
      }, [_v2, _v8]);
      let {
        version: _v9
      } = (0, _v226.usePrivacyPolicy)();
      return (0, _v1.jsxs)(_v5.Box, {
        p: "lg",
        height: "100%",
        children: [(0, _v1.jsxs)(_v6.Flex, {
          mb: "lg",
          alignItems: "center",
          width: "100%",
          children: [(0, _v1.jsx)(_v6.Flex, {
            flex: 1,
            alignItems: "center",
            textAlign: "left",
            height: (0, _v7.rem)(40),
            children: (0, _v1.jsx)(_v13.Header, {
              size: "md",
              children: _v28.default.Text
            })
          }), (0, _v1.jsx)(_v6.Flex, {
            alignItems: "center",
            textAlign: "right",
            children: _v0 && (0, _v1.jsx)(_v42.IconButton, {
              "aria-label": "Close",
              "data-testid": "non-edit-text-toolbar-close-button",
              icon: (0, _v1.jsx)(_v214.CloseX, {}),
              size: "sm",
              variant: "tertiary",
              onClick: _v1
            })
          })]
        }), (0, _v1.jsxs)(_v231, {
          children: [(0, _v1.jsx)(_v13.Header, {
            size: "xs",
            children: _v28.default.Color
          }), (0, _v1.jsx)(_v6.Flex, {
            children: (0, _v1.jsx)(_v134.ColorPickerBrandKit, {
              onChange: _v0 => _v3(_v0),
              color: _v2,
              onClose: () => {
                _v4("nonEditableTextStyle", {
                  ..._v5,
                  [_v8]: {
                    color: _v2
                  }
                }), _v7();
              },
              productName: "registration",
              children: (0, _v1.jsxs)(_v220, {
                children: [(0, _v1.jsx)(_v218, {
                  className: "background_hexcode",
                  size: "1",
                  children: _v2.toUpperCase()
                }), (0, _v1.jsx)(_v219, {
                  color: _v2
                })]
              })
            })
          })]
        }), _v8 === _v26.NON_EDIT_FIELDS.PRIVACY_POLICY && (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v131.Divider, {
            my: "lg"
          }), 1 === _v9 && (0, _v1.jsx)(_v5.Box, {
            children: (0, _v1.jsxs)(_v6.Flex, {
              flexDir: "column",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "flex-start",
              children: [(0, _v1.jsx)(_v13.Header, {
                size: "xs",
                children: _v28.default.TermsOfService
              }), (0, _v1.jsx)(_v96.Input, {
                mt: (0, _v7.rem)(10),
                fontSize: "body-md",
                value: _v26.VIMEO_TERMS_OF_SERVICE_LINK,
                isDisabled: !0
              })]
            })
          }), (0, _v1.jsx)(_v5.Box, {
            mt: "lg",
            children: (0, _v1.jsx)(_v229, {})
          })]
        })]
      });
    },
    _v231 = _v0 => (0, _v1.jsx)(_v6.Flex, {
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
      mb: "lg",
      ..._v0,
      children: _v0.children
    });
  var _v232 = _v0.i(0),
    _v233 = _v0.i(0),
    _v234 = _v0.i(0),
    _v235 = _v0.i(0),
    _v236 = _v0.i(0),
    _v237 = _v0.i(0),
    _v238 = _v0.i(0);
  let _v239 = _v0 => {
      let _v1 = _v0?.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)$/)?.slice(1).map((_v0, _v1) => (3 === _v1 ? Math.round(255 * parseFloat(_v0)) : parseFloat(_v0)).toString(16).padStart(2, "0").replace("NaN", "")).join("");
      return _v1 ? `#${_v1}` : "";
    },
    _v240 = ({
      showCloseButton: _v0,
      onCloseButtonClick: _v1 = () => void 0
    }) => {
      let _v2,
        {
          editor: _v3
        } = (0, _v238.useRichTextContext)(),
        _v4 = (0, _v217.useRtfStore)(_v0 => _v0.onPersonalisedTag),
        _v5 = (0, _v217.useRtfStore)(_v0 => _v0.onSizeChange),
        _v6 = (0, _v217.useRtfStore)(_v0 => _v0.onStyleChange),
        _v7 = (0, _v217.useRtfStore)(_v0 => _v0.onAlignChange),
        _v8 = (0, _v217.useRtfStore)(_v0 => _v0.onBulletedList),
        _v9 = (0, _v217.useRtfStore)(_v0 => _v0.onNumberedList),
        _v10 = (0, _v217.useRtfStore)(_v0 => _v0.onTextColorChange),
        [, _v11] = (0, _v4.useReducer)(_v0 => _v0 + 1, 0),
        _v12 = (0, _v23.useGlobalStore)(_v0 => _v0.leadCapture.customFields),
        _v13 = (0, _v23.useGlobalStore)(_v0 => _v0.entityType),
        {
          previewType: _v14
        } = (0, _v4.useContext)(_v112.PreviewContext),
        [_v15, _v16] = (0, _v4.useState)("rgb(255, 255, 255"),
        _v17 = (0, _v4.useRef)(null),
        {
          sendRegistrationActionBP: _v18
        } = _v92(),
        _v19 = [..._v26.DEFAULT_PERSONALISED_TAGS];
      _v13 === _v18.ENTITY_TYPE.EVENT ? _v19.push(..._v26.EVENT_PERSONALISED_TAGS) : _v13 === _v18.ENTITY_TYPE.VIDEO && _v19.push(..._v26.VIDEO_PERSONALISED_TAGS), _v14 === _v26.PREVIEW_TYPE.CONFIRMATION && _v19.push(..._v12.filter(_v0 => _v0.type !== _v26.CustomFieldTypes.Checkbox && _v0.type !== _v26.CustomFieldTypes.Description).map(_v0 => _v0.name));
      let _v20 = () => {
          let _v0 = _v3?.getAttributes("textStyle").color;
          return _v0 && _v0.startsWith("rgb") ? _v0 : "rgb(255,255,255)";
        },
        _v21 = () => {
          let {
            left: _v0,
            right: _v1,
            center: _v2
          } = _v26.RTF_TEXT_ALIGN;
          return _v3?.isActive({
            textAlign: _v0
          }) ? _v0 : _v3?.isActive({
            textAlign: _v2
          }) ? _v2 : _v3?.isActive({
            textAlign: _v1
          }) ? _v1 : null;
        },
        _v22 = _v0 => {
          _v3?.chain().setTextAlign(_v0).focus().run(), _v7?.(_v0);
        };
      return (0, _v4.useEffect)(() => {
        _v3?.on("transaction", () => {
          _v11();
        });
      }, [_v3]), (0, _v1.jsxs)(_v5.Box, {
        p: "lg",
        height: "100%",
        children: [(0, _v1.jsxs)(_v6.Flex, {
          mb: "lg",
          width: "100%",
          alignItems: "center",
          children: [(0, _v1.jsx)(_v6.Flex, {
            flex: 1,
            alignItems: "center",
            textAlign: "left",
            height: (0, _v7.rem)(40),
            children: (0, _v1.jsx)(_v13.Header, {
              size: "md",
              children: _v28.default.Text
            })
          }), (0, _v1.jsx)(_v6.Flex, {
            alignItems: "center",
            textAlign: "right",
            children: _v0 && (0, _v1.jsx)(_v42.IconButton, {
              "aria-label": "Close",
              ref: _v17,
              "data-testid": "text-toolbar-close-button",
              icon: (0, _v1.jsx)(_v214.CloseX, {}),
              variant: "tertiary",
              size: "sm",
              onClick: _v1
            })
          })]
        }), (0, _v1.jsxs)(_v241, {
          children: [(0, _v1.jsx)(_v13.Header, {
            size: "xs",
            children: _v28.default.Size
          }), (0, _v1.jsx)(_v6.Flex, {
            children: (0, _v1.jsx)(_v182, {
              width: 241,
              buttonHeight: 40,
              selectedValue: (_v2 = _v3?.getAttributes("textStyle").fontSize, _v26.RTF_TEXT_SIZES.find(_v0 => _v0.value === _v2) || _v26.RTF_TEXT_SIZES[0]),
              options: _v26.RTF_TEXT_SIZES,
              onSelect: _v0 => {
                _v3?.chain().setFontSize(_v0.value).focus().run(), _v5?.(_v0.value);
              }
            })
          })]
        }), (0, _v1.jsxs)(_v241, {
          children: [(0, _v1.jsx)(_v13.Header, {
            size: "xs",
            children: _v28.default.Style
          }), (0, _v1.jsxs)(_v6.Flex, {
            width: (0, _v7.rem)(235),
            gap: (0, _v7.rem)(8),
            children: [(0, _v1.jsx)(_v42.IconButton, {
              variant: _v3?.isActive("bold") ? "secondary" : "tertiary",
              onClick: () => {
                _v3?.chain().focus().toggleBold().run(), _v6?.(_v26.RTF_TEXT_STYLE_KEYS.bold);
              },
              "aria-label": "Bold",
              icon: (0, _v1.jsx)(_v213.Bold, {})
            }), (0, _v1.jsx)(_v42.IconButton, {
              variant: _v3?.isActive("italic") ? "secondary" : "tertiary",
              onClick: () => {
                _v3?.chain().focus().toggleItalic().run(), _v6?.(_v26.RTF_TEXT_STYLE_KEYS.italic);
              },
              "aria-label": "Italic",
              icon: (0, _v1.jsx)(_v215.Italic, {})
            }), (0, _v1.jsx)(_v42.IconButton, {
              variant: _v3?.isActive("underline") ? "secondary" : "tertiary",
              onClick: () => {
                _v3?.chain().focus().toggleUnderline().run(), _v6?.(_v26.RTF_TEXT_STYLE_KEYS.underline);
              },
              "aria-label": "Underline",
              icon: (0, _v1.jsx)(_v216.Underline, {})
            })]
          })]
        }), (0, _v1.jsxs)(_v241, {
          children: [(0, _v1.jsx)(_v13.Header, {
            size: "xs",
            children: _v28.default.Format
          }), (0, _v1.jsxs)(_v6.Flex, {
            justifyContent: "space-between",
            width: (0, _v7.rem)(235),
            children: [(0, _v1.jsx)(_v42.IconButton, {
              "aria-label": "Align Left",
              icon: (0, _v1.jsx)(_v234.AlignLeft, {}),
              variant: _v21() === _v26.RTF_TEXT_ALIGN.left ? "secondary" : "tertiary",
              onClick: () => _v22(_v26.RTF_TEXT_ALIGN.left)
            }), (0, _v1.jsx)(_v42.IconButton, {
              "aria-label": "Align Center",
              icon: (0, _v1.jsx)(_v233.AlignCenter, {}),
              variant: _v21() === _v26.RTF_TEXT_ALIGN.center ? "secondary" : "tertiary",
              onClick: () => _v22(_v26.RTF_TEXT_ALIGN.center)
            }), (0, _v1.jsx)(_v42.IconButton, {
              "aria-label": "Align Right",
              icon: (0, _v1.jsx)(_v235.AlignRight, {}),
              variant: _v21() === _v26.RTF_TEXT_ALIGN.right ? "secondary" : "tertiary",
              onClick: () => _v22(_v26.RTF_TEXT_ALIGN.right)
            }), (0, _v1.jsx)(_v131.Divider, {
              orientation: "vertical",
              height: (0, _v7.rem)(32)
            }), (0, _v1.jsx)(_v42.IconButton, {
              "aria-label": "Bulleted List",
              icon: (0, _v1.jsx)(_v236.ListUl, {}),
              variant: _v3?.isActive("bulletList") ? "secondary" : "tertiary",
              onClick: () => void (_v3?.chain().focus().toggleBulletList().focus().run(), _v8?.())
            }), (0, _v1.jsx)(_v42.IconButton, {
              "aria-label": "Numbered List",
              icon: (0, _v1.jsx)(_v237.NumberedList, {}),
              variant: _v3?.isActive("orderedList") ? "secondary" : "tertiary",
              onClick: () => void (_v3?.chain().focus().toggleOrderedList().focus().run(), _v9?.())
            })]
          })]
        }), (0, _v1.jsxs)(_v241, {
          children: [(0, _v1.jsx)(_v13.Header, {
            size: "xs",
            pt: "sm",
            children: _v28.default.Color
          }), (0, _v1.jsx)(_v6.Flex, {
            children: (0, _v1.jsx)(_v134.ColorPickerBrandKit, {
              onChange: _v0 => {
                _v3?.chain().setColor(_v0).run(), _v16(_v0);
              },
              color: _v3?.getAttributes("textStyle").color || "#FFFFFF",
              onClose: () => {
                _v3?.chain().focus().setColor(_v15).focus().run(), _v10?.(_v15);
              },
              productName: "registration",
              children: (0, _v1.jsxs)(_v220, {
                children: [(0, _v1.jsx)(_v218, {
                  className: "background_hexcode",
                  size: "1",
                  children: _v239(_v20()).toUpperCase()
                }), (0, _v1.jsx)(_v219, {
                  color: _v239(_v20()) || "#FFFFFF"
                })]
              })
            })
          })]
        }), (0, _v1.jsx)(_v131.Divider, {
          my: "lg"
        }), (0, _v1.jsx)(_v13.Header, {
          size: "xs",
          mb: (0, _v7.rem)(14),
          children: _v28.default.PersonalizedTags
        }), (0, _v1.jsx)(_v146.Paragraph, {
          color: "text-secondary",
          size: "md",
          children: _v28.default.PersonalizedTagsDescription
        }), (0, _v1.jsx)(_v6.Flex, {
          mt: "md",
          width: "100%",
          flexWrap: "wrap",
          gap: (0, _v7.rem)(8),
          children: _v19.map((_v0, _v1) => (0, _v1.jsx)(_v232.Tag, {
            onClick: () => {
              _v4?.(`{{${_v0}}}`), _v18({
                actionName: _v90.BP_ACTION_NAME.ADD_DYNAMIC_ELEMENT
              });
            },
            size: "md",
            children: (0, _v1.jsx)(_v146.Paragraph, {
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden",
              fontSize: "body-md",
              cursor: "pointer",
              children: `{{${_v0}}}`
            })
          }, _v1))
        })]
      });
    },
    _v241 = _v0 => (0, _v1.jsx)(_v6.Flex, {
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
      mb: "lg",
      ..._v0,
      children: _v0.children
    });
  var _v242 = _v0.i(0),
    _v243 = _v0.i(0),
    _v244 = _v0.i(0),
    _v245 = _v0.i(0),
    _v246 = _v0.i(0),
    _v247 = _v0.i(0),
    _v248 = _v0.i(0),
    _v249 = _v0.i(0);
  let _v250 = () => {
    let _v0 = (0, _v23.useGlobalStore)(_v0 => _v0.entityType),
      _v1 = (0, _v23.useGlobalStore)(_v0 => _v0.leadCapture.isEventDateVisible),
      _v2 = (0, _v23.useGlobalStore)(_v0 => _v0.leadCapture.isEventDateSetToCalendar),
      _v3 = (0, _v23.useGlobalStore)(_v0 => _v0.entity.schedule),
      {
        patchLeadCapture: _v4
      } = (0, _v25.usePatchLeadCapture)(),
      {
        setPreviewType: _v5
      } = (0, _v4.useContext)(_v112.PreviewContext),
      {
        sendRegistrationActionBP: _v6
      } = _v92(),
      {
        trackLiveStreamRegistrationAppearanceChanged: _v7
      } = (0, _v135.useLiveStreamBroadcasterTracking)();
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v13.Header, {
        size: "xs",
        color: "text-primary",
        pb: "md",
        children: _v28.default.EventDetails
      }), (0, _v1.jsx)(_v52.Tooltip, {
        isDisabled: null !== _v3,
        label: _v28.default.EventNotScheduled,
        closeOnScroll: !0,
        children: (0, _v1.jsxs)("div", {
          children: [(0, _v1.jsxs)(_v6.Flex, {
            justifyContent: "space-between",
            alignItems: "center",
            pb: 14,
            children: [(0, _v1.jsx)("label", {
              htmlFor: "date-toggle",
              children: (0, _v1.jsx)(_v45.Text, {
                variant: "body-xl",
                color: "text-primary",
                fontSize: "body-md",
                children: _v28.default.Date
              })
            }), (0, _v1.jsx)(_v132.Switch, {
              size: "sm",
              isChecked: _v1 && null !== _v3,
              onChange: _v0 => {
                _v4("isEventDateVisible", _v0.target.checked), _v6({
                  actionName: _v90.BP_ACTION_NAME.TOGGLE_DATE,
                  element: _v90.BP_ELEMENT.TOGGLE,
                  copy: _v0.target.checked ? _v90.BP_COPY.ON : _v90.BP_COPY.OFF
                }), _v0 === _v18.ENTITY_TYPE.EVENT && _v7({
                  liveStreamAppearanceSetting: "date_toggle"
                });
              },
              isDisabled: null === _v3,
              id: "date-toggle"
            })]
          }), (0, _v1.jsxs)(_v6.Flex, {
            justifyContent: "space-between",
            alignItems: "center",
            color: "text-primary",
            children: [(0, _v1.jsx)("label", {
              htmlFor: "add-to-calendar-toggle",
              children: (0, _v1.jsx)(_v45.Text, {
                variant: "body-xl",
                color: "text-primary",
                fontSize: "body-md",
                children: _v28.default.AddToCalendar
              })
            }), (0, _v1.jsx)(_v132.Switch, {
              size: "sm",
              isChecked: _v2 && null !== _v3,
              onChange: _v0 => {
                _v4("isEventDateSetToCalendar", _v0.target.checked), _v5(_v26.PREVIEW_TYPE.CONFIRMATION), _v6({
                  actionName: _v90.BP_ACTION_NAME.TOGGLE_ADD_TO_CALENDAR,
                  element: _v90.BP_ELEMENT.TOGGLE,
                  copy: _v0.target.checked ? _v90.BP_COPY.ON : _v90.BP_COPY.OFF
                }), _v0 === _v18.ENTITY_TYPE.EVENT && _v7({
                  liveStreamAppearanceSetting: "add_to_calendar_toggle"
                });
              },
              isDisabled: null === _v3,
              id: "add-to-calendar-toggle"
            })]
          })]
        })
      })]
    });
  };
  var _v251 = _v0.i(0);
  let _v252 = () => {
      let _v0 = (0, _v23.useGlobalStore)(_v0 => _v0.leadCapture.placement),
        _v1 = (0, _v23.useGlobalStore)(_v0 => _v0.leadCapture.placementTimecode),
        _v2 = (0, _v23.useGlobalStore)(_v0 => _v0.leadCapture.isSkippable),
        _v3 = (0, _v23.useGlobalStore)(_v0 => _v0.entity.duration) || 0,
        _v4 = (0, _v23.useGlobalStore)(_v0 => _v0.entityState.loading),
        {
          patchLeadCapture: _v5
        } = (0, _v25.usePatchLeadCapture)(),
        [_v6, _v7] = (0, _v4.useState)((0, _v251.secondsToTime)(_v1)),
        [_v8, _v9] = (0, _v4.useState)(!0),
        {
          sendRegistrationActionBP: _v10
        } = _v92(),
        {
          onFormPlacementChanged: _v11,
          onFormSettingToggled: _v12
        } = (0, _v97.useCallbackContext)(),
        _v13 = _v26.VIDEO_PLACEMENT_MAP.find(_v0 => _v0.value === _v0);
      return (0, _v4.useEffect)(() => {
        _v7((0, _v251.secondsToTime)(_v1)), _v9(!0);
      }, [_v1]), (0, _v1.jsxs)(_v1.Fragment, {
        children: [_v13 && (0, _v1.jsx)(_v182, {
          selectedValue: _v13,
          options: _v26.VIDEO_PLACEMENT_MAP,
          onSelect: _v0 => {
            String(_v0.value) !== _v0 && (_v11?.(String(_v0.value)), _v5("placement", _v0.value), _v10({
              eventName: _v90.BP_EVENT_NAMES.UPDATE_REGISTRATION_FORM,
              copy: (() => {
                switch (_v0.value) {
                  case _v26.VIDEO_PLACEMENT.BEFORE:
                    return _v90.BP_COPY.BEFORE_VIDEO;
                  case _v26.VIDEO_PLACEMENT.DURING:
                    return _v90.BP_COPY.DURING_VIDEO;
                  case _v26.VIDEO_PLACEMENT.AFTER:
                    return _v90.BP_COPY.AFTER_VIDEO;
                }
              })(),
              actionName: _v90.BP_ACTION_NAME.SELECT_PLACEMENT,
              element: _v90.BP_ELEMENT.DROPDOWN
            }));
          }
        }), _v13?.value === _v26.VIDEO_PLACEMENT.DURING && (0, _v1.jsxs)(_v5.Box, {
          pt: "md",
          children: [(0, _v1.jsx)(_v13.Header, {
            color: "text-primary",
            size: "xs",
            pb: "sm",
            children: _v28.default.StartTime
          }), _v4 ? (0, _v1.jsx)(_v130.Center, {
            children: (0, _v1.jsx)(_v44.Spinner, {})
          }) : (0, _v1.jsx)(_v96.Input, {
            value: _v6,
            defaultValue: (0, _v251.secondsToTime)(_v1),
            onChange: _v0 => {
              let _v1 = _v0.target.value,
                _v2 = _v26.TIMECODE_REGEX.test(_v1) && _v3 >= (0, _v251.timeToSeconds)(_v1);
              _v7(_v1), _v9(_v2), _v2 && _v5("placementTimecode", (0, _v251.timeToSeconds)(_v1));
            },
            onBlur: () => {
              !_v8 && _v3 <= (0, _v251.timeToSeconds)(_v6) && (_v5("placementTimecode", _v3), _v7((0, _v251.secondsToTime)(_v3)), _v9(!0)), _v8 || _v7((0, _v251.secondsToTime)(_v1));
            },
            size: "lg",
            fontSize: "body-md",
            placeholder: "00:00"
          })]
        }), (0, _v1.jsx)(_v5.Box, {
          mt: (0, _v7.rem)(20),
          mb: "md",
          children: (0, _v1.jsxs)(_v6.Flex, {
            justifyContent: "space-between",
            alignItems: "center",
            color: "text-primary",
            children: [(0, _v1.jsx)("label", {
              htmlFor: "skip-form-toggle",
              children: (0, _v1.jsx)(_v13.Header, {
                size: "xs",
                children: _v28.default.LetViewersSkipTheForm
              })
            }), (0, _v1.jsx)(_v132.Switch, {
              size: "sm",
              isChecked: _v2,
              onChange: () => {
                let _v0 = !_v2;
                _v12?.("let_viewers_skip", _v0), _v5("isSkippable", _v0), _v10({
                  eventName: _v90.BP_EVENT_NAMES.UPDATE_REGISTRATION_FORM,
                  copy: _v0 ? _v90.BP_COPY.ON : _v90.BP_COPY.OFF,
                  actionName: _v90.BP_ACTION_NAME.TOGGLE_SKIP_FORM
                });
              },
              id: "skip-form-toggle"
            })]
          })
        })]
      });
    },
    _v253 = {
      [_v26.FORM_ALIGNMENT.LEFT]: 0,
      [_v26.FORM_ALIGNMENT.CENTER]: 1,
      [_v26.FORM_ALIGNMENT.RIGHT]: 2
    },
    _v254 = {
      0: _v26.FORM_ALIGNMENT.LEFT,
      1: _v26.FORM_ALIGNMENT.CENTER,
      2: _v26.FORM_ALIGNMENT.RIGHT
    },
    _v255 = () => {
      let _v0 = (0, _v23.useGlobalStore)(_v0 => _v0.leadCapture.alignment),
        _v1 = (0, _v23.useGlobalStore)(_v0 => _v0.entityType),
        {
          sendRegistrationActionBP: _v2
        } = _v92(),
        {
          patchLeadCapture: _v3
        } = (0, _v25.usePatchLeadCapture)(),
        {
          onFormAppearanceChanged: _v4
        } = (0, _v97.useCallbackContext)(),
        {
          trackLiveStreamRegistrationAppearanceChanged: _v5
        } = (0, _v135.useLiveStreamBroadcasterTracking)();
      return (0, _v1.jsx)(_v51.Stack, {
        direction: "column",
        mt: "md",
        mb: "lg",
        children: (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v13.Header, {
            color: "text-primary",
            size: "xs",
            mb: "sm",
            children: _v28.default.Layout
          }), (0, _v1.jsx)(_v243.Tabs, {
            variant: "inlay",
            onChange: _v0 => {
              _v4?.("layout"), _v3("alignment", _v254[_v0]), _v2({
                actionName: _v90.BP_ACTION_NAME.SELECT_LAYOUT,
                element: _v90.BP_ELEMENT.TAB
              }), _v1 === _v18.ENTITY_TYPE.EVENT && _v5({
                liveStreamAppearanceSetting: "layout"
              });
            },
            index: _v253[_v0],
            children: (0, _v1.jsxs)(_v244.TabList, {
              borderRadius: "md",
              children: [(0, _v1.jsx)(_v242.Tab, {
                children: (0, _v1.jsx)(_v234.AlignLeft, {
                  boxSize: (0, _v7.rem)(24)
                })
              }), (0, _v1.jsx)(_v242.Tab, {
                children: (0, _v1.jsx)(_v233.AlignCenter, {
                  boxSize: (0, _v7.rem)(24)
                })
              }), (0, _v1.jsx)(_v242.Tab, {
                children: (0, _v1.jsx)(_v235.AlignRight, {
                  boxSize: (0, _v7.rem)(24)
                })
              }), (0, _v1.jsx)(_v243.TabIndicator, {})]
            })
          })]
        })
      });
    };
  var _v256 = _v0.i(0),
    _v257 = (_v0.i(0), _v0.i(0)),
    _v258 = _v0.i(0),
    _v259 = _v0.i(0);
  let _v260 = ({
    children: _v0,
    disabled: _v1,
    onRenamed: _v2,
    options: _v3,
    preset: _v4
  }) => {
    let [_v5, _v6] = (0, _v4.useState)(""),
      [_v7, _v8] = (0, _v4.useState)(!1),
      {
        isSavingPreset: _v9,
        renamePreset: _v10
      } = _v95(),
      _v11 = (0, _v8.useToast)(),
      _v12 = _v3.flatMap(_v0 => _v0.value === _v4?.uuid ? [] : [_v0.name]),
      _v13 = null != _v4 && _v5.trim() !== _v4.presetName && (0, _v98.isPresetNameValid)(_v5, _v12),
      _v14 = () => {
        _v6(""), _v8(!1);
      },
      _v15 = async () => {
        if (_v4 && _v13) {
          if (await _v10(_v4.uuid, _v5.trim())) {
            _v14(), _v2();
            return;
          }
          _v11({
            title: _v28.default.RenamePresetError,
            status: "error"
          });
        }
      };
    if (!_v4) return _v0;
    if (!_v7) return (0, _v1.jsxs)(_v51.Stack, {
      direction: "row",
      alignItems: "center",
      width: "100%",
      children: [_v0, (0, _v1.jsx)(_v52.Tooltip, {
        label: _v28.default.RenamePreset,
        placement: "top",
        closeOnScroll: !0,
        children: (0, _v1.jsx)(_v42.IconButton, {
          "aria-label": _v28.default.RenamePreset,
          icon: (0, _v1.jsx)(_v259.EditPencil, {}),
          size: "sm",
          variant: "tertiary",
          onClick: _v0 => {
            _v0.stopPropagation(), _v6(_v4.presetName), _v8(!0);
          },
          isDisabled: _v1
        })
      })]
    });
    let _v16 = _v12.includes(_v5.trim());
    return (0, _v1.jsxs)(_v51.Stack, {
      width: "100%",
      onClick: _v0 => _v0.stopPropagation(),
      onKeyDown: _v0 => {
        _v0.stopPropagation(), "Escape" === _v0.key && _v14();
      },
      children: [(0, _v1.jsxs)(_v51.Stack, {
        direction: "row",
        alignItems: "center",
        width: "100%",
        children: [(0, _v1.jsx)(_v96.Input, {
          autoFocus: !0,
          value: _v5,
          maxLength: _v26.MAX_PRESET_NAME_LENGTH,
          onChange: _v0 => {
            (0, _v98.hasValidPresetNameCharacters)(_v0.target.value) && _v6(_v0.target.value);
          },
          isInvalid: _v16,
          isDisabled: _v9
        }), (0, _v1.jsx)(_v42.IconButton, {
          "aria-label": _v28.default.ConfirmPresetRename,
          icon: (0, _v1.jsx)(_v258.Checkmark, {}),
          size: "sm",
          variant: "secondary",
          onClick: _v15,
          isDisabled: !_v13 || _v9,
          isLoading: _v9
        }), (0, _v1.jsx)(_v42.IconButton, {
          "aria-label": _v28.default.CancelPresetRename,
          icon: (0, _v1.jsx)(_v214.CloseX, {}),
          size: "sm",
          variant: "tertiary",
          onClick: _v14,
          isDisabled: _v9
        })]
      }), _v16 && (0, _v1.jsx)(_v45.Text, {
        variant: "body-sm",
        color: "red.500",
        children: _v28.default.EnterUniquePreset
      })]
    });
  };
  var _v261 = _v0.i(0),
    _v262 = _v0.i(0);
  let _v263 = ({
      options: _v0,
      selectedValue: _v1,
      onSelect: _v2,
      width: _v3,
      height: _v4,
      onAddClick: _v5,
      disableAdd: _v6,
      disableReset: _v7,
      disableAddTooltip: _v8,
      disableResetTooltip: _v9,
      onDelete: _v10,
      setShowResetModal: _v11,
      CloseDropdown: _v12
    }) => {
      let {
          hasLogoPermission: _v13
        } = (0, _v58.usePermissionStore)(),
        _v14 = (0, _v23.useGlobalStore)(_v0 => _v0.defaultPreset),
        _v15 = (0, _v23.useGlobalStore)(_v0 => _v0.leadCapture.uuid);
      return (0, _v1.jsxs)(_v5.Box, {
        borderRadius: "sm",
        width: _v3 || "100%",
        children: [(0, _v1.jsxs)(_v5.Box, {
          maxHeight: _v4 ? (0, _v7.rem)(_v4) : "",
          overflowY: "auto",
          overflowX: "hidden",
          children: [_v14?.uuid !== _v15 && (0, _v1.jsxs)(_v5.Box, {
            children: [(0, _v1.jsx)(_v52.Tooltip, {
              isDisabled: !_v7,
              label: _v9 || "",
              closeOnScroll: !0,
              fontSize: 14,
              children: (0, _v1.jsx)(_v12.Button, {
                alignItems: "center",
                width: `calc(100% - ${(0, _v7.rem)(16)})`,
                justifyContent: "flex-start",
                m: "sm",
                variant: "tertiary",
                fontWeight: "normal",
                pl: (0, _v7.rem)(35),
                onClick: () => {
                  _v14 && (_v11(!0), _v12?.());
                },
                isDisabled: _v7,
                children: _v26.RESET_DEFAULT.name
              })
            }), (0, _v1.jsx)(_v131.Divider, {})]
          }), (0, _v1.jsx)(_v5.Box, {
            mt: _v0?.length ? "sm" : 0,
            children: _v0.map((_v0, _v1) => (0, _v1.jsxs)(_v6.Flex, {
              mx: "sm",
              borderRadius: "input-xs",
              height: (0, _v7.rem)(40),
              p: "xs",
              cursor: "pointer",
              alignItems: "center",
              _hover: {
                background: "fill-component"
              },
              onClick: _v2.bind(null, _v0),
              "data-group": !0,
              children: [(0, _v1.jsx)(_v258.Checkmark, {
                ml: "sm",
                mr: (0, _v7.rem)(12),
                boxSize: (0, _v7.rem)(14),
                visibility: _v0.value === _v1?.value ? "visible" : "hidden"
              }), (0, _v1.jsxs)(_v6.Flex, {
                justifyContent: "space-between",
                alignItems: "center",
                width: "90%",
                borderRadius: "sm",
                children: [(0, _v1.jsx)(_v257.MiddleEllipsis, {
                  color: "inherit",
                  text: _v0.name,
                  variant: "body-md"
                }), (0, _v1.jsx)(_v52.Tooltip, {
                  label: _v7 ? _v28.default.DeletePresetProhibited : _v28.default.DeletePreset,
                  children: (0, _v1.jsx)(_v42.IconButton, {
                    "aria-label": "delete",
                    variant: "tertiary",
                    size: "sm",
                    visibility: "hidden",
                    _groupHover: {
                      visibility: _v13 ? "visible" : "hidden"
                    },
                    isDisabled: _v7,
                    icon: (0, _v1.jsx)(_v262.TrashBin, {}),
                    onClick: _v0 => {
                      _v0.stopPropagation(), _v10?.(_v0);
                    }
                  })
                })]
              })]
            }, _v0.name + _v1))
          })]
        }), _v0?.length > 0 && (0, _v1.jsx)(_v131.Divider, {
          mt: "sm"
        }), (0, _v1.jsx)(_v52.Tooltip, {
          isDisabled: !_v6,
          label: _v8 || _v28.default.PresetLimitReached,
          closeOnScroll: !0,
          fontSize: 14,
          children: (0, _v1.jsx)(_v6.Flex, {
            borderBottomRadius: (0, _v7.rem)(8),
            children: (0, _v1.jsx)(_v12.Button, {
              leftIcon: (0, _v1.jsx)(_v261.PlusFilled, {
                boxSize: `${(0, _v7.rem)(20)} !important`
              }),
              m: "sm",
              isDisabled: _v6,
              variant: "tertiary",
              width: "100%",
              justifyContent: "flex-start",
              pl: "sm",
              onClick: () => {
                _v6 || _v5();
              },
              children: _v28.default.NewPreset
            })
          })
        })]
      });
    },
    _v264 = ({
      options: _v0,
      selectedValue: _v1,
      width: _v2,
      height: _v3,
      onSelect: _v4,
      children: _v5,
      active: _v6 = !1,
      disabled: _v7 = !1,
      textSize: _v8 = 200,
      onAddClick: _v9,
      disableAdd: _v10,
      disableReset: _v11,
      disableAddTooltip: _v12,
      disableResetTooltip: _v13,
      setShowResetModal: _v14,
      emptyStateTooltip: _v15,
      onDeleteSelectedPreset: _v16
    }) => {
      let _v17 = (0, _v23.useGlobalStore)(_v0 => _v0.entityType),
        [_v18, _v19] = (0, _v4.useState)(_v6),
        _v20 = (0, _v4.useRef)(null),
        [_v21, _v22] = (0, _v4.useState)(void 0),
        [_v23, _v24] = (0, _v4.useState)(!1),
        [_v25, _v26] = (0, _v4.useState)(),
        [_v27, _v28] = (0, _v4.useState)(!1),
        [_v29, _v30] = (0, _v4.useState)(!1),
        [_v31, _v32] = (0, _v4.useState)(),
        _v33 = (0, _v23.useGlobalStore)(_v0 => _v0.defaultPreset),
        {
          sendGatesManagerBP: _v34
        } = _v92(),
        {
          deletePresetById: _v35,
          deletePresetState: {
            loading: _v36
          },
          refresh: _v37
        } = _v60(),
        {
          attachPresetToForm: _v38
        } = _v95(),
        _v39 = _v31?.entityType !== _v17,
        _v40 = (0, _v22.useEscapeKey)(_v18, () => _v19(!1)),
        _v41 = 0 === _v0.length && _v10 && _v11 && _v15;
      return (0, _v4.useEffect)(() => {
        _v39 && _v29 && _v34({
          eventName: _v90.BP_EVENT_NAMES.NOTIFICATION_VIEW,
          element: null,
          location: _v90.BP_LOCATION.WIDGET,
          copy: null,
          notificationName: "preset_different_entity_apply",
          version: 3
        });
      }, [_v39, _v29]), (0, _v4.useEffect)(() => {
        _v28(!1), _v37(), _v36 || _v24(!1);
      }, [_v27, _v36, _v37, _v28]), (0, _v4.useEffect)(() => {
        _v18 && _v20.current && _v22(_v20.current.offsetWidth);
      }, [_v18]), (0, _v1.jsxs)(_v5.Box, {
        children: [(0, _v1.jsxs)(_v176.Popover, {
          isOpen: _v18,
          children: [(0, _v1.jsx)(_v5.Box, {
            cursor: _v7 ? "not-allowed" : "pointer",
            children: (0, _v1.jsx)(_v5.Box, {
              pointerEvents: _v7 ? "none" : "auto",
              ref: _v20,
              mt: (0, _v7.rem)(2),
              mb: (0, _v7.rem)(2),
              ml: (0, _v7.rem)(1),
              children: (0, _v1.jsx)(_v178.PopoverTrigger, {
                children: (0, _v1.jsx)(_v6.Flex, {
                  justifyContent: "right",
                  borderRadius: "sm",
                  onClick: () => {
                    _v18 || _v7 || _v34({
                      eventName: _v90.BP_EVENT_NAMES.UPDATE_PRESET,
                      location: _v90.BP_LOCATION.DRAWER,
                      flow: _v90.BP_FLOW.REGISTRATION_DRAWER,
                      copy: null,
                      element: _v90.BP_ELEMENT.DROPDOWN,
                      actionName: "open_preset_dropdown"
                    }), _v19(!_v18);
                  },
                  children: _v5
                })
              })
            })
          }), (0, _v1.jsx)(_v177.PopoverContent, {
            borderRadius: "sm",
            p: 0,
            onKeyDown: _v40,
            children: _v41 ? (0, _v1.jsx)(_v6.Flex, {
              mx: "sm",
              borderRadius: "input-xs",
              p: "xs",
              cursor: "pointer",
              alignItems: "center",
              _hover: {
                background: "fill-component"
              },
              children: (0, _v1.jsx)(_v6.Flex, {
                justifyContent: "space-between",
                alignItems: "center",
                width: _v2 || _v21,
                borderRadius: "sm",
                gap: 20,
                children: _v15
              })
            }) : (0, _v1.jsx)(_v263, {
              options: _v0,
              selectedValue: _v1,
              onSelect: _v0 => {
                _v32(_v0), _v19(!1), _v0.entityType !== _v17 || _v1 === _v26.NONE_APPLIED ? _v30(!0) : _v4(_v0);
              },
              width: _v2 || _v21,
              height: _v3,
              textSize: _v8,
              onAddClick: () => {
                _v19(!1), _v9();
              },
              disableAdd: _v10,
              disableReset: _v11,
              disableAddTooltip: _v12,
              disableResetTooltip: _v13,
              onDelete: _v0 => {
                _v19(!1), _v26(_v0), _v24(!0);
              },
              setShowResetModal: _v14,
              CloseDropdown: () => _v19(!1)
            })
          })]
        }), (0, _v1.jsx)(_v62, {
          isOpen: _v23,
          onClose: () => _v24(!1),
          headerText: _v28.default.DeletePreset,
          bodyText: _v28.default.DeletePresetDesc(_v25?.name || ""),
          onSubmit: () => {
            let _v0 = () => {
              _v34({
                eventName: _v90.BP_EVENT_NAMES.UPDATE_PRESET,
                location: _v90.BP_LOCATION.NOTIFICATION,
                copy: _v90.BP_COPY.DELETE,
                actionName: "delete_preset"
              }), _v35(_v25?.value), _v28(!0);
            };
            _v25?.value === _v1?.value && _v16 ? _v16(_v0) : (_v0(), _v25?.value === _v1?.value && _v38(_v33?.uuid));
          },
          secondaryDisabled: _v36,
          loading: _v36,
          primaryButtonVariant: "destructive",
          primaryButtonText: _v28.default.Delete,
          secondaryButtonText: _v28.default.Cancel
        }), (0, _v1.jsx)(_v62, {
          isOpen: _v29,
          onClose: () => _v30(!1),
          headerText: _v28.default.ApplyPreset(_v31?.name || ""),
          bodyText: _v28.default.ApplyPresetDesc,
          onSubmit: () => {
            _v34({
              eventName: _v90.BP_EVENT_NAMES.UPDATE_PRESET,
              location: _v90.BP_LOCATION.NOTIFICATION,
              copy: _v90.BP_COPY.APPLY,
              actionName: "apply_preset"
            }), _v31 && (_v4(_v31), _v30(!1));
          },
          secondaryDisabled: _v36,
          loading: _v36,
          primaryButtonText: _v28.default.Apply,
          secondaryButtonText: _v28.default.Cancel,
          children: _v39 && (0, _v1.jsx)(_v45.Text, {
            variant: "body-md",
            children: _v17 === _v18.ENTITY_TYPE.VIDEO ? _v28.default.ApplyPresetDiffEntityVideo : _v28.default.ApplyPresetDiffEntityEvent
          })
        })]
      });
    },
    _v265 = ({
      showApplyButton: _v0,
      options: _v1,
      selectedPreset: _v2,
      onSelect: _v3,
      loading: _v4,
      disabled: _v5,
      onResetToDefault: _v6,
      onDeleteSelectedPreset: _v7,
      renamablePreset: _v8
    }) => {
      let [_v9, _v10] = (0, _v4.useState)(!1),
        [_v11, _v12] = (0, _v4.useState)(!1),
        _v13 = (0, _v23.useGlobalStore)(_v0 => _v0.presetLoading),
        _v14 = (0, _v23.useGlobalStore)(_v0 => _v0.defaultPreset),
        {
          sendGatesManagerBP: _v15
        } = _v92(),
        {
          onFormPresetChanged: _v16
        } = (0, _v97.useCallbackContext)(),
        _v17 = (0, _v46.useColorModeValue)("white", "#282828"),
        _v18 = (0, _v46.useColorModeValue)("#BFBFBF", "#4E4E4E"),
        _v19 = (0, _v46.useColorModeValue)("#666666", "rgba(255, 255, 255, 0.6)"),
        {
          isOwnerOrAdmin: _v20,
          shouldUseApprovedPresetOnly: _v21,
          addNewPresetProhibited: _v22
        } = _v99(),
        _v23 = _v21 || !1,
        {
          refresh: _v24
        } = _v60();
      return (0, _v4.useEffect)(() => {
        _v2 === _v26.NONE_APPLIED.name && _v15({
          eventName: _v90.BP_EVENT_NAMES.IMPRESSION_PRESET_CHANGED,
          element: null,
          location: _v90.BP_LOCATION.DRAWER,
          copy: _v90.BP_COPY.NONE_APPLIED,
          version: 1
        });
      }, [_v2]), (0, _v4.useEffect)(() => {
        _v2 === _v26.NONE_APPLIED.name && _v15({
          eventName: _v90.BP_EVENT_NAMES.IMPRESSION_INITIAL_STATE,
          element: null,
          location: _v90.BP_LOCATION.DRAWER,
          copy: _v90.BP_COPY.NONE_APPLIED,
          version: 1
        });
      }, []), (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v264, {
          height: 386,
          options: _v1,
          selectedValue: _v1.find(_v0 => _v0.name === _v2) || _v26.NONE_APPLIED,
          onSelect: _v0 => {
            _v3(_v0, () => _v16?.("select_saved"));
          },
          onDeleteSelectedPreset: _v7,
          onAddClick: () => {
            _v10(!0);
          },
          disableAdd: _v22,
          disableReset: _v23,
          disableAddTooltip: _v21 ? _v28.default.PresetAddOnlyAdminAllowed : null,
          disableResetTooltip: _v21 && !_v20 ? _v28.default.PresetResetToDefaultProhibited : null,
          setShowResetModal: _v12,
          disabled: _v5,
          emptyStateTooltip: _v21 && _v23 && _v22 && 0 === _v1.length ? _v28.default.NoApprovedPreset : "",
          children: (0, _v1.jsx)(_v260, {
            preset: _v8,
            options: _v1,
            disabled: _v5,
            onRenamed: _v24,
            children: (0, _v1.jsxs)(_v12.Button, {
              variant: "tertiary",
              flex: "1",
              size: "lg",
              textAlign: "left",
              isDisabled: _v13 || _v5,
              rightIcon: (0, _v1.jsx)(_v209.ChevronDownSmall, {}),
              border: `${(0, _v7.rem)(1)} solid`,
              sx: {
                borderColor: _v18,
                background: _v17
              },
              _hover: {
                borderColor: _v19,
                background: _v17
              },
              px: (0, _v7.rem)(12),
              children: [_v0 && !1, (0, _v1.jsxs)(_v51.Stack, {
                direction: "row",
                alignItems: "center",
                width: "90%",
                children: [_v13 && (0, _v1.jsx)(_v44.Spinner, {
                  size: "sm"
                }), (0, _v1.jsx)(_v257.MiddleEllipsis, {
                  text: _v2,
                  variant: "body-md",
                  marginLeft: 0
                })]
              })]
            })
          })
        }), (0, _v1.jsx)(_v100, {
          existingPresetNames: _v1.map(_v0 => _v0.name),
          isOpen: _v9,
          onClose: () => _v10(!1),
          onCreated: _v24,
          requiresApproval: _v21 && _v20
        }), (0, _v1.jsx)(_v62, {
          isOpen: _v11,
          onClose: () => _v12(!1),
          headerText: _v28.default.ResetToDefaultSettings,
          bodyText: _v28.default.RemoveAndResetToDefaultState,
          onSubmit: () => {
            _v14 && (_v12(!1), _v6(_v14.uuid, () => {
              _v16?.("reset_to_default"), _v15({
                eventName: _v90.BP_EVENT_NAMES.UPDATE_PRESET,
                location: _v90.BP_LOCATION.NOTIFICATION,
                copy: "reset",
                actionName: "reset_to_default"
              });
            }));
          },
          secondaryDisabled: _v13,
          loading: _v13,
          primaryButtonVariant: "destructive",
          primaryButtonText: _v28.default.Reset,
          secondaryButtonText: _v28.default.Cancel
        })]
      });
    },
    _v266 = ({
      useApprovedOnly: _v0 = !1
    }) => {
      let {
          loading: _v1
        } = _v60(),
        {
          attachPresetToForm: _v2
        } = _v95(),
        {
          loading: _v3
        } = (() => {
          let [_v0, {
              data: _v1,
              loading: _v2
            }] = (0, _v59.useGetUserLeadCaptureFormsLazy)(),
            _v3 = (0, _v23.useGlobalStore)(_v0 => _v0.entityOwnerId),
            _v4 = (0, _v23.useGlobalStore)(_v0 => _v0.setDefaultPreset),
            _v5 = (0, _v23.useGlobalStore)(_v0 => _v0.entityType);
          return (0, _v4.useEffect)(() => {
            _v3 && _v0 && _v0({
              where: {
                userId: _v3
              },
              query: {
                perPage: _v26.PRESET_RESULT_PER_PAGE,
                filter: "default_preset"
              },
              select: [_v26.PRESET_NAME, _v26.UUID, "sourceEntityType", "isApproved"]
            });
          }, [_v3]), (0, _v4.useEffect)(() => {
            null == _v1 || _v4(_v1.data.find(_v0 => _v0?.sourceEntityType === _v5));
          }, [_v1, _v5, _v4]), {
            loading: _v2
          };
        })(),
        _v4 = (0, _v23.useGlobalStore)(_v0 => _v0.leadCapture.uuid),
        _v5 = (0, _v23.useGlobalStore)(_v0 => _v0.leadCapture.presetName),
        _v6 = (0, _v23.useGlobalStore)(_v0 => _v0.presets),
        _v7 = (0, _v23.useGlobalStore)(_v0 => _v0.defaultPreset),
        _v8 = (0, _v23.useGlobalStore)(_v0 => _v0.parentPreset),
        _v9 = (0, _v23.useGlobalStore)(_v0 => _v0.presetLoading),
        _v10 = (0, _v23.useGlobalStore)(_v0 => _v0.entityType),
        _v11 = (0, _v23.useGlobalStore)(_v0 => Object.keys(_v0.formPendingChanges).length > 0),
        _v12 = (0, _v23.useGlobalStore)(_v0 => _v0.discardRegistrationChanges),
        [_v13, _v14] = (0, _v4.useState)(),
        {
          settings: _v15
        } = (0, _v20.useOrionSettings)(),
        _v16 = _v15.enable_explicit_registration_save,
        {
          trackLiveStreamRegistrationPresetChanged: _v17
        } = (0, _v135.useLiveStreamBroadcasterTracking)(),
        {
          isAutoSaving: _v18
        } = _v24(),
        _v19 = (0, _v4.useRef)(!1),
        _v20 = _v0 ? _v10 === _v18.ENTITY_TYPE.EVENT ? _v28.default.CreatePresetDescForUseOnlyApprovedWithEventType : _v28.default.CreatePresetDescForUseOnlyApprovedWithOtherType : _v28.default.CreatePresetDesc,
        _v21 = _v6?.find(_v0 => _v0.uuid === _v4),
        _v22 = _v6?.find(_v0 => _v0.uuid === _v8?.uuid),
        _v23 = _v22?.presetName,
        _v24 = _v21 ?? _v22,
        _v25 = (_v0, _v1) => {
          _v2(_v0) && _v1();
        },
        _v26 = (_v0, _v1) => {
          _v16 && _v11 ? _v14({
            presetId: _v0,
            onApplied: _v1
          }) : _v25(_v0, _v1);
        },
        _v27 = () => !(_v1 || (0, _v256.default)(_v6) || !(0, _v256.default)(_v5) || (0, _v256.default)(_v23));
      (0, _v4.useEffect)(() => {
        !_v9 && _v19.current && (_v19.current = !1, _v61());
      }, [_v9]);
      let _v28 = _v4 === _v7?.uuid || _v27() || _v3 ? _v28.default.NoneApplied : _v21?.presetName ? _v21?.presetName : (0, _v256.default)(_v5) ? (0, _v256.default)(_v23) ? _v28.default.NoneApplied : _v23 : _v5,
        _v29 = _v24?.presetName,
        _v30 = _v15.enable_registration_preset_editing && null != _v24 && null != _v29 && _v29 === _v28 ? {
          uuid: _v24.uuid,
          presetName: _v29
        } : void 0;
      return (0, _v1.jsxs)(_v5.Box, {
        mb: "lg",
        children: [(0, _v1.jsx)(_v5.Box, {
          mb: "sm",
          children: (0, _v1.jsx)(_v51.Stack, {
            direction: "row",
            alignItems: "center",
            mb: (0, _v7.rem)(2),
            mt: (0, _v7.rem)(10),
            children: (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsxs)(_v13.Header, {
                color: "text-primary",
                size: "xs",
                children: [_v28.default.Preset, _v0 && (0, _v1.jsx)(_v5.Box, {
                  color: "red",
                  as: "span",
                  ml: "2",
                  children: "*"
                })]
              }), (0, _v1.jsx)(_v52.Tooltip, {
                placement: "top",
                maxW: (0, _v7.rem)(350),
                label: _v20,
                variant: "simple",
                closeOnScroll: !0,
                fontSize: "body-md",
                children: (0, _v1.jsx)(_v5.Box, {
                  display: "flex",
                  alignItems: "center",
                  children: (0, _v1.jsx)(_v227.InfoCircle, {
                    color: "text-secondary",
                    boxSize: (0, _v7.rem)(16)
                  })
                })
              })]
            })
          })
        }), (0, _v1.jsx)(_v265, {
          showApplyButton: _v27(),
          options: _v6 ? _v6.map(_v0 => ({
            name: _v0.presetName,
            value: _v0.uuid,
            entityType: _v0.sourceEntityType || ""
          })) : [],
          selectedPreset: _v28 || "",
          onSelect: (_v0, _v1) => {
            _v26(_v0.value.toString(), () => {
              _v1(), _v10 === _v18.ENTITY_TYPE.EVENT && (_v17(), _v19.current = !0);
            });
          },
          onResetToDefault: _v26,
          onDeleteSelectedPreset: _v0 => {
            _v7 ? _v26(_v7.uuid, _v0) : _v0();
          },
          loading: _v1 || _v3,
          disabled: _v18 || _v9 || _v3,
          renamablePreset: _v30
        }), _v13 && (0, _v1.jsx)(_v40, {
          onCancel: () => _v14(void 0),
          onDiscard: () => {
            _v12(!1), _v25(_v13.presetId, _v13.onApplied), _v14(void 0);
          }
        }), !_v1 && !_v3 && _v0 && !_v21?.isApproved && (0, _v1.jsx)(_v45.Text, {
          variant: "body-xl",
          fontSize: "0.8rem",
          color: "text-tertiary",
          textAlign: "left",
          mt: (0, _v7.rem)(5),
          children: _v28.default.PresetMandatoryWarning
        })]
      });
    };
  var _v267 = _v0.i(0);
  let _v268 = ({
      heading: _v0,
      onButtonClick: _v1 = () => void 0,
      image: _v2,
      isToggleChecked: _v3 = !1,
      onToggle: _v4 = () => void 0,
      imagePadding: _v5 = 0,
      hasPermission: _v6 = !0,
      permissionText: _v7,
      renderLogoPicker: _v8
    }) => (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v6.Flex, {
        alignItems: "center",
        children: [(0, _v1.jsx)(_v6.Flex, {
          alignItems: "center",
          flex: 1,
          children: (0, _v1.jsx)(_v13.Header, {
            color: "text-primary",
            size: "xs",
            children: _v0
          })
        }), (0, _v1.jsx)(_v6.Flex, {
          justifyContent: "right",
          alignItems: "center",
          flex: 1,
          children: _v2 ? (0, _v1.jsx)("div", {
            tabIndex: 0,
            onKeyDown: _v0 => {
              _v0.key === _v26.KEY_CODES.ENTER && _v4(!_v3);
            },
            children: (0, _v1.jsx)(_v132.Switch, {
              tabIndex: -1,
              isChecked: _v3,
              onChange: _v0 => _v4(_v0.target.checked),
              size: "sm"
            })
          }) : (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v12.Button, {
              onClick: _v1,
              size: "md",
              rightIcon: (0, _v1.jsx)(_v267.PlusCircle, {}),
              variant: "tertiary",
              fontWeight: "normal",
              iconSpacing: 4,
              children: _v28.default.Add
            }), _v8?.()]
          })
        })]
      }), _v3 && _v2 && (0, _v1.jsxs)(_v6.Flex, {
        alignItems: "center",
        pt: "md",
        children: [(0, _v1.jsx)(_v6.Flex, {
          alignItems: "center",
          flex: 1,
          children: (0, _v1.jsx)(_v6.Flex, {
            m: _v5,
            sx: _v269,
            children: (0, _v1.jsx)("img", {
              alt: "Nothing Selected",
              src: _v2,
              style: {
                maxHeight: (0, _v7.rem)(56),
                maxWidth: (0, _v7.rem)(104)
              }
            })
          })
        }), (0, _v1.jsxs)(_v6.Flex, {
          justifyContent: "right",
          alignItems: "center",
          flex: 1,
          children: [(0, _v1.jsx)(_v52.Tooltip, {
            label: _v7,
            placement: "top",
            isDisabled: _v6,
            children: (0, _v1.jsx)(_v12.Button, {
              onClick: _v1,
              variant: "secondary",
              isDisabled: !_v6,
              children: _v28.default.Change
            })
          }), _v8?.()]
        })]
      })]
    }),
    _v269 = {
      borderRadius: (0, _v7.rem)(8),
      overflow: "hidden",
      background: `repeating-conic-gradient(#dee4e9 0% 25%, transparent 0% 50%) 50% / ${(0, _v7.rem)(18)} ${(0, _v7.rem)(18)}`
    };
  var _v270 = _v0.i(0),
    _v271 = _v0.i(0),
    _v272 = _v0.i(0);
  let _v273 = ({
      userId: _v0,
      providerId: _v1,
      connectionOwnerName: _v2,
      listCount: _v3,
      onConfirmRemove: _v4
    }) => {
      let {
          isOpen: _v5,
          onOpen: _v6,
          onClose: _v7
        } = (0, _v143.useDisclosure)(),
        _v8 = (0, _v4.useMemo)(() => _v28.default.ConnectedBy(_v2), [_v2]),
        _v9 = (0, _v4.useCallback)(() => {
          _v3 > 0 && _v6();
        }, [_v3, _v6]),
        _v10 = (0, _v4.useCallback)(() => {
          _v7(), _v4?.(_v0, _v1);
        }, [_v4, _v1, _v0, _v7]),
        _v11 = 0 === _v3;
      return (0, _v1.jsxs)(_v64.Menu, {
        placement: "bottom-end",
        size: "lg",
        children: [(0, _v1.jsx)(_v271.MenuButton, {
          as: _v42.IconButton,
          "aria-label": "More actions",
          icon: (0, _v1.jsx)(_v272.EllipsisV, {
            boxSize: "2xs"
          }),
          variant: "secondary"
        }), (0, _v1.jsx)(_v66.MenuList, {
          borderRadius: "md",
          p: "2",
          backgroundColor: "fill-blur",
          children: (0, _v1.jsx)(_v65.MenuItem, {
            onClick: _v9,
            alignItems: "flex-start",
            width: (0, _v7.rem)(240),
            children: (0, _v1.jsxs)(_v120.HStack, {
              alignItems: "start",
              gap: "xs",
              flexDirection: "column",
              children: [_v11 ? (0, _v1.jsx)(_v52.Tooltip, {
                label: _v28.default.NoListsSynced,
                hasArrow: !0,
                placement: "top",
                children: (0, _v1.jsx)(_v45.Text, {
                  variant: "body-xl",
                  fontSize: "header-xs",
                  color: "text-tertiary",
                  children: _v28.default.Remove
                })
              }) : (0, _v1.jsx)(_v45.Text, {
                variant: "body-xl",
                fontSize: "header-xs",
                children: _v28.default.Remove
              }), (0, _v1.jsx)(_v146.Paragraph, {
                size: "md",
                color: "text-tertiary",
                children: _v8
              })]
            })
          })
        }), (0, _v1.jsxs)(_v34.Modal, {
          size: "lg",
          isOpen: _v5,
          onClose: _v7,
          closeOnOverlayClick: !1,
          children: [(0, _v1.jsx)(_v39.ModalOverlay, {}), (0, _v1.jsxs)(_v36.ModalContent, {
            borderRadius: "md",
            maxW: (0, _v7.rem)(480),
            children: [(0, _v1.jsx)(_v38.ModalHeader, {
              children: _v28.default.RemoveMailingLists
            }), (0, _v1.jsx)(_v35.ModalBody, {
              children: (0, _v1.jsx)(_v146.Paragraph, {
                size: "lg",
                children: _v28.default.RemoveListDesc
              })
            }), (0, _v1.jsxs)(_v37.ModalFooter, {
              children: [(0, _v1.jsx)(_v12.Button, {
                variant: "secondary",
                onClick: _v7,
                children: _v28.default.Cancel
              }), (0, _v1.jsx)(_v12.Button, {
                variant: "destructive",
                onClick: _v10,
                disabled: _v11,
                children: _v28.default.Remove
              })]
            })]
          })]
        })]
      });
    },
    _v274 = ({
      memberConnections: _v0
    }) => {
      let {
          patchLeadCapture: _v1
        } = (0, _v25.usePatchLeadCapture)(),
        _v2 = (0, _v4.useCallback)((_v0, _v1) => {
          _v1("memberConnections", _v0.map(_v0 => _v0.userId === _v0 ? {
            ..._v0,
            providers: _v0.providers.filter(_v0 => _v0.providerId !== _v1)
          } : _v0), !0);
        }, [_v0, _v1]),
        _v3 = (0, _v4.useMemo)(() => _v0?.length ? _v0.flatMap(({
          userId: _v0,
          providers: _v1 = [],
          connectionOwnerName: _v2
        }) => _v1.map(_v0 => ({
          userId: _v0,
          provider: _v0,
          connectionOwnerName: _v2
        }))) : [], [_v0]);
      return (0, _v1.jsx)(_v1.Fragment, {
        children: _v3.map(({
          userId: _v0,
          provider: _v1,
          connectionOwnerName: _v2
        }) => (0, _v1.jsx)(_v275, {
          userId: _v0,
          provider: _v1,
          connectionOwnerName: _v2,
          onConfirmRemove: _v2
        }, `${_v0}-${_v1.providerId}`))
      });
    },
    _v275 = (0, _v4.memo)(function ({
      userId: _v0,
      provider: _v1,
      connectionOwnerName: _v2,
      onConfirmRemove: _v3
    }) {
      let {
          colorMode: _v4
        } = (0, _v46.useColorMode)(),
        {
          icon: _v5,
          darkIcon: _v6,
          providerName: _v7,
          providerId: _v8,
          listCount: _v9
        } = _v1,
        _v10 = (0, _v4.useMemo)(() => `url(${"dark" === _v4 ? _v6 : _v5}) center/cover no-repeat`, [_v4, _v6, _v5]),
        _v11 = (0, _v4.useMemo)(() => _v28.default.ListCount(_v9), [_v9]);
      return (0, _v1.jsx)(_v5.Box, {
        pointerEvents: "unset",
        width: "100%",
        children: (0, _v1.jsxs)(_v120.HStack, {
          children: [(0, _v1.jsxs)(_v6.Flex, {
            tabIndex: 0,
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            height: (0, _v7.rem)(48),
            pl: "sm",
            borderRadius: "sm",
            border: `${(0, _v7.rem)(1)} solid`,
            borderColor: "stroke",
            cursor: "default",
            children: [(0, _v1.jsxs)(_v6.Flex, {
              alignItems: "center",
              children: [(0, _v1.jsx)(_v5.Box, {
                boxSize: (0, _v7.rem)(24),
                mr: (0, _v7.rem)(6),
                background: _v10
              }), (0, _v1.jsx)(_v146.Paragraph, {
                size: "md",
                ml: "sm",
                children: _v7
              })]
            }), (0, _v1.jsx)(_v52.Tooltip, {
              label: _v28.default.OwnerOnlyManage,
              hasArrow: !0,
              placement: "top",
              children: (0, _v1.jsxs)(_v130.Center, {
                mx: "sm",
                flexGrow: 1,
                textAlign: "right",
                maxW: (0, _v7.rem)(200),
                cursor: "pointer",
                children: [!!_v11 && (0, _v1.jsx)(_v257.MiddleEllipsis, {
                  text: _v11,
                  variant: "body-md"
                }), (0, _v1.jsx)(_v209.ChevronDownSmall, {})]
              })
            })]
          }), (0, _v1.jsx)(_v273, {
            userId: _v0,
            providerId: _v8,
            connectionOwnerName: _v2,
            listCount: _v9,
            onConfirmRemove: _v3
          })]
        })
      });
    });
  var _v276 = _v0.i(0),
    _v277 = _v0.i(0);
  let _v278 = () => {
      let [_v0, {
          data: _v1,
          loading: _v2
        }] = (0, _v277.useGetUserEmailServiceProvidersLazy)(),
        _v3 = (0, _v23.useGlobalStore)(_v0 => _v0.providers),
        _v4 = (0, _v23.useGlobalStore)(_v0 => _v0.entityOwnerId),
        _v5 = (0, _v23.useGlobalStore)(_v0 => _v0.setProviders);
      (0, _v4.useEffect)(() => {
        _v1 && _v5(_v1.data);
      }, [_v1, _v5]);
      let _v6 = (0, _v4.useCallback)(_v0 => {
        let _v1 = _v4 && 0 === _v3.length;
        _v0 && _v5([]), (_v0 || _v1) && _v4 && _v0({
          where: {
            userId: _v4
          },
          select: _v32.ESP_API_FIELDS
        });
      }, [_v4, _v0, _v3.length]);
      return (0, _v4.useEffect)(() => {
        _v6();
      }, [_v6]), {
        fetchAllESPData: _v6,
        loading: _v2
      };
    },
    _v279 = ({
      providers: _v0,
      isOwner: _v1
    }) => {
      let _v2 = _v0?.filter(_v0 => _v0.connected),
        [_v3, _v4] = (0, _v4.useState)(!1),
        {
          sendRegistrationActionBP: _v5
        } = _v92(),
        {
          fetchAllESPData: _v6,
          loading: _v7
        } = _v278(),
        {
          onConnectProvidersClicked: _v8
        } = (0, _v97.useCallbackContext)(),
        [_v9, _v10] = (0, _v4.useState)(!1),
        _v11 = (0, _v46.useColorModeValue)("#00adef26", "#00ADEF4C"),
        _v12 = (0, _v46.useColorModeValue)("#00adef", "#00ADEF66"),
        {
          colorMode: _v13
        } = (0, _v46.useColorMode)(),
        _v14 = (0, _v23.useGlobalStore)(_v0 => _v0.entityType),
        {
          capabilities: _v15
        } = (0, _v9.useCapability)(["hasIntegrationCenter"]),
        _v16 = () => {
          _v6(!0);
        };
      (0, _v4.useEffect)(() => {
        _v7 || _v4(!1);
      }, [_v7]), (0, _v4.useEffect)(() => {
        setTimeout(() => {
          _v10(_v7);
        }, 200);
      }, [_v7]);
      let _v17 = (0, _v1.jsx)(_v12.Button, {
        height: (0, _v7.rem)(40),
        size: "sm",
        leftIcon: (0, _v1.jsx)(_v29.PopOut, {
          boxSize: (0, _v7.rem)(14),
          minWidth: "unset"
        }),
        variant: "secondary",
        width: "100%",
        onClick: () => _v4(!0),
        children: _v2?.length ? _v28.default.ManageConnections : _v28.default.ConnectProviders
      });
      return (0, _v1.jsxs)("div", {
        children: [_v2?.length === 0 && (0, _v1.jsx)(_v6.Flex, {
          gap: "lg",
          minW: (0, _v7.rem)(200),
          my: "md",
          children: _v0?.map(_v0 => (0, _v1.jsx)(_v5.Box, {
            as: "img",
            boxSize: (0, _v7.rem)(24),
            src: "light" === _v13 ? _v0.icon : _v0.darkIcon
          }, _v0.serviceId))
        }), (0, _v1.jsx)(_v276.RemoveConnectionSharingNotificationForNonOwners, {
          shouldShow: !_v1,
          from: "CRM",
          marginY: (0, _v7.rem)(12)
        }), _v3 && (0, _v1.jsx)(_v5.Box, {
          pl: 0,
          height: (0, _v7.rem)(72),
          mb: "xs",
          cursor: "pointer",
          "aria-disabled": "true",
          tabIndex: 0,
          role: "button",
          border: "none",
          children: _v9 ? (0, _v1.jsx)(_v6.Flex, {
            h: (0, _v7.rem)(48),
            bgColor: _v11,
            borderColor: _v12,
            borderWidth: (0, _v7.rem)(1),
            borderRadius: "xs",
            align: "center",
            justify: "center",
            children: (0, _v1.jsx)(_v44.Spinner, {})
          }) : (0, _v1.jsx)(_v115.Alert, {
            children: (0, _v1.jsx)(_v116.AlertDescription, {
              children: (0, _v50.translate)({
                singular: "{LINK}Refresh{/LINK} to see recently connected providers.",
                replacements: {
                  LINK: _v0 => (0, _v1.jsx)(_v5.Box, {
                    as: "a",
                    color: "blue.500",
                    fontWeight: "medium",
                    textDecoration: "underline",
                    onClick: _v16,
                    children: _v0
                  })
                },
                dictionary: {
                  es: {
                    singular: "{LINK}Actualiza{/LINK} para ver los proveedores conectados recientemente."
                  },
                  "de-DE": {
                    singular: "{LINK}Aktualisiere{/LINK}, um zuletzt verbundene Anbieter anzuzeigen."
                  },
                  "fr-FR": {
                    singular: "{LINK}Actualiser{/LINK} pour afficher les fournisseurs récemment connectés."
                  },
                  "ja-JP": {
                    singular: "最近接続したプロバイダーを表示するには、{LINK}更新{/LINK}してください。"
                  },
                  "ko-KR": {
                    singular: "최근 연결된 공급자를 확인하려면 {LINK}새로고침{/LINK}하세요."
                  },
                  "pt-BR": {
                    singular: "{LINK}Atualizar{/LINK} para ver os provedores conectados recentemente."
                  },
                  "zh-CN": {
                    singular: "{LINK}刷新{/LINK}页面，查看最近关联的提供商。"
                  }
                }
              })
            })
          })
        }), _v2.length < _v0.length && (0, _v1.jsx)(_v5.Box, {
          as: "a",
          textDecoration: "none",
          href: _v15?.hasIntegrationCenter ? _v26.URLs.VimeoIntegrationCenterMarketing : _v26.URLs.VimeoSettingsMarketing,
          target: "_blank",
          onClick: () => {
            _v8?.(), _v5({
              eventName: _v90.BP_EVENT_NAMES.CONNECT_EMAIL_PROVIDERS,
              actionName: _v90.BP_ACTION_NAME.CONNECT_EMAIL_PROVIDERS,
              copy: _v2?.length ? _v90.BP_COPY.MANAGE_PROVIDERS : _v90.BP_COPY.CONNECT_PROVIDERS,
              target: _v90.BP_TARGET.USER_SETTINGS,
              flow: _v90.BP_FLOW.FORM_FIELDS_TAB,
              referrerPage: _v14 === _v18.ENTITY_TYPE.VIDEO ? _v90.BP_REFERRER_PAGE_NAME.SVVM : null
            });
          },
          children: _v17
        })]
      });
    },
    _v280 = ({
      provider: _v0,
      isOwner: _v1
    }) => {
      let _v2 = !_v0.lists?.length,
        _v3 = _v0.serviceId;
      return _v2 || _v3 === _v26.ProvidersServiceId.Infusionsoft || _v3 === _v26.ProvidersServiceId.ConstantContact ? (0, _v1.jsx)(_v5.Box, {
        mt: (0, _v7.rem)(10),
        children: (0, _v1.jsx)(_v115.Alert, {
          children: (0, _v1.jsx)(_v116.AlertDescription, {
            children: _v2 ? (0, _v1.jsx)(_v1.Fragment, {
              children: (() => {
                switch (_v3) {
                  case _v26.ProvidersServiceId.Marketo:
                    let _v0;
                    return _v0 = _v0.name, (0, _v50.translate)({
                      singular: "Create a program in {PROVIDER_NAME} to select it here.",
                      replacements: {
                        PROVIDER_NAME: _v0
                      },
                      dictionary: {
                        es: {
                          singular: "Crea un programa en {PROVIDER_NAME} para seleccionarlo aquí."
                        },
                        "de-DE": {
                          singular: "Erstelle ein Programm in {PROVIDER_NAME}, um es hier auszuwählen."
                        },
                        "fr-FR": {
                          singular: "Créez un programme dans {PROVIDER_NAME} afin de le sélectionner ici."
                        },
                        "ja-JP": {
                          singular: "ここで選択するには、{PROVIDER_NAME}でプログラムを作成してください。"
                        },
                        "ko-KR": {
                          singular: "여기에서 선택하려면 {PROVIDER_NAME}에서 프로그램을 만드세요."
                        },
                        "pt-BR": {
                          singular: "Crie um programa em {PROVIDER_NAME} para selecioná-lo aqui."
                        },
                        "zh-CN": {
                          singular: "在 {PROVIDER_NAME} 中创建一个程序，然后在此处选择该程序。"
                        }
                      }
                    });
                  case _v26.ProvidersServiceId.Infusionsoft:
                    let _v1;
                    return _v1 = _v0.name, (0, _v50.translate)({
                      singular: "Create a tag in {PROVIDER_NAME} to select it here.",
                      replacements: {
                        PROVIDER_NAME: _v1
                      },
                      dictionary: {
                        es: {
                          singular: "Crea una etiqueta en {PROVIDER_NAME} para seleccionarla aquí."
                        },
                        "de-DE": {
                          singular: "Erstelle ein Tag in {PROVIDER_NAME}, um es hier auszuwählen."
                        },
                        "fr-FR": {
                          singular: "Créez une balise dans {PROVIDER_NAME} afin de la sélectionner ici."
                        },
                        "ja-JP": {
                          singular: "ここで選択するには、{PROVIDER_NAME}でタグを作成してください。"
                        },
                        "ko-KR": {
                          singular: "여기에서 선택하려면 {PROVIDER_NAME}에서 태그를 만드세요."
                        },
                        "pt-BR": {
                          singular: "Crie uma tag em {PROVIDER_NAME} para selecioná-la aqui."
                        },
                        "zh-CN": {
                          singular: "在 {PROVIDER_NAME} 中创建一个标签，然后在此处选择该标签。"
                        }
                      }
                    });
                  default:
                    let _v2;
                    return _v2 = _v0.name, (0, _v50.translate)({
                      singular: "Create a list in {PROVIDER_NAME} to select it here.",
                      replacements: {
                        PROVIDER_NAME: _v2
                      },
                      dictionary: {
                        es: {
                          singular: "Crea una lista en {PROVIDER_NAME} para seleccionarla aquí."
                        },
                        "de-DE": {
                          singular: "Erstelle eine Liste in {PROVIDER_NAME}, um sie hier auszuwählen."
                        },
                        "fr-FR": {
                          singular: "Créez une liste dans {PROVIDER_NAME} afin de la sélectionner ici."
                        },
                        "ja-JP": {
                          singular: "ここで選択するには、{PROVIDER_NAME}でリストを作成してください。"
                        },
                        "ko-KR": {
                          singular: "여기에서 선택하려면 {PROVIDER_NAME}에서 목록을 만드세요."
                        },
                        "pt-BR": {
                          singular: "Crie uma lista em {PROVIDER_NAME} para selecioná-la aqui."
                        },
                        "zh-CN": {
                          singular: "在 {PROVIDER_NAME} 中创建一个列表，然后在此处选择该列表。"
                        }
                      }
                    });
                }
              })()
            }) : (0, _v1.jsx)(_v1.Fragment, {
              children: (() => {
                switch (_v3) {
                  case _v26.ProvidersServiceId.ConstantContact:
                    return (0, _v50.translate)({
                      singular: "Your current integration with {PROVIDER_NAME} only syncs email and name fields. To sync your custom fields to {PROVIDER_NAME}, disconnect and reconnect your {PROVIDER_NAME} account in {LINK}marketing settings{/LINK}.",
                      replacements: {
                        LINK: _v0 => _v1 ? (0, _v1.jsx)(_v43.Link, {
                          textDecoration: "none",
                          target: "_blank",
                          href: _v26.URLs.VimeoSettingsMarketing,
                          children: _v0
                        }) : (0, _v1.jsx)(_v1.Fragment, {
                          children: _v0
                        }),
                        PROVIDER_NAME: _v0.name
                      },
                      dictionary: {
                        es: {
                          singular: "Tu integración actual con {PROVIDER_NAME} solo permite sincronizar el correo electrónico y los campos de nombre. Si quieres sincronizar tus campos personalizados con {PROVIDER_NAME}, desconecta tu cuenta de {PROVIDER_NAME} y vuelve a conectarla desde la {LINK}configuración de marketing{/LINK}."
                        },
                        "de-DE": {
                          singular: "Deine aktuelle Integration mit {PROVIDER_NAME} synchronisiert nur die Felder „E-Mail-Adresse“ und „Name“. Um deine benutzerdefinierten Felder mit {PROVIDER_NAME} zu synchronisieren, trenne die Verbindung zu deinem {PROVIDER_NAME}-Konto in den {LINK}Marketingeinstellungen{/LINK} und stelle sie dann wieder her."
                        },
                        "fr-FR": {
                          singular: "Votre intégration {PROVIDER_NAME} actuelle synchronise uniquement les champs d'e-mail et de nom. Pour synchroniser vos champs personnalisés vers {PROVIDER_NAME}, déconnectez et reconnectez votre compte {PROVIDER_NAME} depuis les {LINK}paramètres marketing{/LINK}."
                        },
                        "ja-JP": {
                          singular: "現在の {PROVIDER_NAME} との統合ではEメールと名前欄のみ同期されます。カスタム項目を {PROVIDER_NAME} に同期するには、{LINK}マーケティング設定{/LINK}で {PROVIDER_NAME} のアカウント接続を解除し、再接続してください。"
                        },
                        "ko-KR": {
                          singular: "현재 {PROVIDER_NAME} 통합은 이메일과 이름 항목만 동기화합니다. 커스텀 항목을 {PROVIDER_NAME}에 동기화하려면 {LINK}마케팅 설정{/LINK}에서 {PROVIDER_NAME} 계정 연결을 해제했다가 다시 연결하세요."
                        },
                        "pt-BR": {
                          singular: "Sua integração atual com {PROVIDER_NAME} sincroniza apenas os campos de email e nome. Para sincronizar seus campos personalizados no(a) {PROVIDER_NAME}, desconecte e reconecte sua conta do(a) {PROVIDER_NAME} nas {LINK}configurações de marketing{/LINK}."
                        },
                        "zh-CN": {
                          singular: "您当前与 {PROVIDER_NAME} 的集成仅同步电子邮件和名称字段。要同步您的自定义字段到 {PROVIDER_NAME}，请在{LINK}市场营销设置{/LINK}中断开连接并重新连接您的 {PROVIDER_NAME} 帐户。"
                        }
                      }
                    });
                  case _v26.ProvidersServiceId.Infusionsoft:
                    let _v0;
                    return _v0 = _v0.name, (0, _v50.translate)({
                      singular: "{PROVIDER_NAME} only sends email and name fields.",
                      replacements: {
                        PROVIDER_NAME: _v0
                      },
                      dictionary: {
                        es: {
                          singular: "{PROVIDER_NAME} solo envía campos de correo electrónico y nombre."
                        },
                        "de-DE": {
                          singular: "{PROVIDER_NAME} sendet nur die Felder „E-Mail-Adresse“ und „Name“."
                        },
                        "fr-FR": {
                          singular: "{PROVIDER_NAME} envoie uniquement des champs d'e-mail et de nom."
                        },
                        "ja-JP": {
                          singular: "{PROVIDER_NAME} はEメールと名前欄のみ送信します。"
                        },
                        "ko-KR": {
                          singular: "{PROVIDER_NAME}에서는 이메일 및 이름 필드만 전송합니다."
                        },
                        "pt-BR": {
                          singular: "{PROVIDER_NAME} envia apenas os campos e-mail e nome."
                        },
                        "zh-CN": {
                          singular: "{PROVIDER_NAME} 只发送电子邮件和姓名字段。"
                        }
                      }
                    });
                  default:
                    return "";
                }
              })()
            })
          })
        })
      }) : null;
    },
    _v281 = (_v0, _v1) => {
      let _v2 = _v0.filter(_v0 => parseInt(_v0.providerId || "0") === _v1.serviceType);
      if (null !== _v1.lists) {
        if (0 === _v2.length) switch (_v1.serviceId) {
          case _v26.ProvidersServiceId.Marketo:
            return _v28.default.SelectProgram;
          case _v26.ProvidersServiceId.Infusionsoft:
            return _v28.default.SelectTag;
          case _v26.ProvidersServiceId.SalesCloud:
            return _v28.default.SelectCampaign;
          default:
            return _v28.default.SelectList;
        }
        if (_v2.length > 1) switch (_v1.serviceId) {
          case _v26.ProvidersServiceId.Marketo:
            let _v0;
            return _v0 = _v2.length, (0, _v50.translate)({
              singular: "{NUMBER_OF_PROGRAMS} programs selected",
              replacements: {
                NUMBER_OF_PROGRAMS: _v0
              },
              dictionary: {
                es: {
                  singular: "{NUMBER_OF_PROGRAMS} programas seleccionados"
                },
                "de-DE": {
                  singular: "{NUMBER_OF_PROGRAMS} Programme ausgewählt"
                },
                "fr-FR": {
                  singular: "{NUMBER_OF_PROGRAMS} programmes sélectionnés"
                },
                "ja-JP": {
                  singular: "{NUMBER_OF_PROGRAMS} 件のプログラムが選択されました"
                },
                "ko-KR": {
                  singular: "프로그램 {NUMBER_OF_PROGRAMS}개 선택됨"
                },
                "pt-BR": {
                  singular: "{NUMBER_OF_PROGRAMS} programas selecionados"
                },
                "zh-CN": {
                  singular: "已选择 {NUMBER_OF_PROGRAMS} 个程序"
                }
              }
            });
          case _v26.ProvidersServiceId.Infusionsoft:
            let _v1;
            return _v1 = _v2.length, (0, _v50.translate)({
              singular: "{NUMBER_OF_TAGS} tags selected",
              replacements: {
                NUMBER_OF_TAGS: _v1
              },
              dictionary: {
                es: {
                  singular: "{NUMBER_OF_TAGS} etiquetas seleccionadas"
                },
                "de-DE": {
                  singular: "{NUMBER_OF_TAGS} Tags ausgewählt"
                },
                "fr-FR": {
                  singular: "{NUMBER_OF_TAGS} mots-clés sélectionnés"
                },
                "ja-JP": {
                  singular: "{NUMBER_OF_TAGS} 個のタグが選択されました"
                },
                "ko-KR": {
                  singular: "태그 {NUMBER_OF_TAGS}개 선택됨"
                },
                "pt-BR": {
                  singular: "{NUMBER_OF_TAGS} etiquetas selecionadas"
                },
                "zh-CN": {
                  singular: "选择了 {NUMBER_OF_TAGS} 个标记"
                }
              }
            });
          default:
            let _v2;
            return _v2 = _v2.length, (0, _v50.translate)({
              singular: "{NUMBER_OF_LISTS} lists selected",
              replacements: {
                NUMBER_OF_LISTS: _v2
              },
              dictionary: {
                es: {
                  singular: "{NUMBER_OF_LISTS} listas seleccionadas"
                },
                "de-DE": {
                  singular: "{NUMBER_OF_LISTS} Listen ausgewählt"
                },
                "fr-FR": {
                  singular: "{NUMBER_OF_LISTS} listes sélectionnées"
                },
                "ja-JP": {
                  singular: "{NUMBER_OF_LISTS} 件が選択されました"
                },
                "ko-KR": {
                  singular: "리스트 {NUMBER_OF_LISTS}개 선택됨"
                },
                "pt-BR": {
                  singular: "{NUMBER_OF_LISTS} listas selecionadas"
                },
                "zh-CN": {
                  singular: "已选择 {NUMBER_OF_LISTS} 个列表"
                }
              }
            });
        }
        return _v1.lists.filter(_v0 => _v0.id.toString() === _v2[0].listId.toString())[0]?.name || _v2[0].name;
      }
      return "";
    },
    _v282 = ({
      provider: _v0
    }) => {
      let _v1 = (0, _v23.useGlobalStore)(_v0 => _v0.entityOwnerId),
        {
          isOpen: _v2,
          onOpen: _v3,
          onClose: _v4
        } = (0, _v143.useDisclosure)(),
        _v5 = (0, _v23.useGlobalStore)(_v0 => _v0.leadCapture.emailLists),
        {
          patchLeadCapture: _v6
        } = (0, _v25.usePatchLeadCapture)(),
        _v7 = (0, _v23.useGlobalStore)(_v0 => _v0.setLeadCaptureProperties),
        {
          sendRegistrationActionBP: _v8
        } = _v92(),
        _v9 = (0, _v21.useViewer)(),
        _v10 = _v1 === _v9?.user?.id,
        {
          colorMode: _v11
        } = (0, _v46.useColorMode)(),
        _v12 = _v9?.teamUser ? "enterprise" === _v9.teamUser.accountType : !!_v9?.user && "enterprise" === _v9.user.account,
        _v13 = [7, 8].includes(_v0.serviceType) && !_v12,
        _v14 = (0, _v4.useCallback)(_v0 => {
          let _v1, _v2;
          _v1 = _v5.map(_v0 => _v0.listId), _v2 = _v0.filter(_v0 => _v0.listId && !_v1.includes(_v0.listId)).map(_v0 => _v0.listId), _v8({
            actionName: _v90.BP_ACTION_NAME.ADD_EMAIL_LIST_PROVIDER,
            providerName: _v0.name,
            providerListId: _v2,
            isIntegration: !0,
            integrationId: _v0.serviceType,
            integrationName: _v0.name,
            integrationType: _v90.BP_INTEGRATION_TYPE.CORE_CONNECT,
            partnerBucket: _v90.BP_PARTNER_BUCKET.MARKETING,
            isPartner: !0
          }), _v6("emailLists", _v0), _v7("hasActiveCrmExportConnection", _v0.length > 0, !0), _v4();
        }, [_v6, _v5]),
        _v15 = (0, _v4.useCallback)((_v0, _v1) => {
          let _v2 = _v9?.user?.id;
          if (!_v2 || _v2 !== _v0) return;
          let _v3 = Number(_v1);
          _v14(_v5?.filter(_v0 => Number(_v0?.providerId) !== _v3) ?? []);
        }, [_v5, _v14, _v9?.user?.id]),
        _v16 = (0, _v22.useEscapeKey)(_v2, _v4),
        _v17 = _v0.lists?.length > 0,
        _v18 = _v5.length > 0;
      return (0, _v1.jsxs)(_v5.Box, {
        pointerEvents: "unset",
        width: "100%",
        children: [(0, _v1.jsxs)(_v120.HStack, {
          children: [_v13 ? (0, _v1.jsx)(_v52.Tooltip, {
            label: _v13 ? _v28.default.EnterpriseOnly : "",
            hasArrow: !0,
            placement: "top",
            children: (0, _v1.jsxs)(_v6.Flex, {
              tabIndex: 0,
              justifyContent: "space-between",
              width: "100%",
              maxWidth: (0, _v7.rem)(272),
              alignItems: "center",
              cursor: "pointer",
              height: (0, _v7.rem)(48),
              pl: "sm",
              borderRadius: "sm",
              border: `${(0, _v7.rem)(1)} solid `,
              borderColor: "stroke",
              onClick: _v3,
              opacity: !_v13 && _v17 ? 1 : .6,
              children: [(0, _v1.jsxs)(_v6.Flex, {
                alignItems: "center",
                children: [(0, _v1.jsx)(_v5.Box, {
                  boxSize: (0, _v7.rem)(24),
                  mr: (0, _v7.rem)(6),
                  background: `url(${"dark" === _v11 ? _v0.darkIcon : _v0.icon}) center/cover no-repeat`
                }), (0, _v1.jsx)(_v146.Paragraph, {
                  size: "md",
                  ml: "sm",
                  children: _v0.name
                })]
              }), (_v17 || _v18) && (0, _v1.jsxs)(_v130.Center, {
                mx: "sm",
                flexGrow: 1,
                textAlign: "right",
                maxW: (0, _v7.rem)(180),
                children: [(0, _v1.jsx)(_v257.MiddleEllipsis, {
                  text: _v281(_v5, _v0),
                  variant: "body-md"
                }), (0, _v1.jsx)(_v209.ChevronDownSmall, {})]
              })]
            })
          }) : (0, _v1.jsxs)(_v176.Popover, {
            isOpen: _v2,
            onOpen: _v3,
            onClose: _v4,
            closeOnBlur: !0,
            children: [(0, _v1.jsx)(_v178.PopoverTrigger, {
              children: (0, _v1.jsxs)(_v6.Flex, {
                tabIndex: 0,
                justifyContent: "space-between",
                width: "100%",
                maxWidth: (0, _v7.rem)(272),
                alignItems: "center",
                cursor: "pointer",
                height: (0, _v7.rem)(48),
                pl: "sm",
                borderRadius: "sm",
                border: `${(0, _v7.rem)(1)} solid `,
                borderColor: "stroke",
                onClick: _v3,
                opacity: !_v13 && _v17 ? 1 : .6,
                children: [(0, _v1.jsxs)(_v6.Flex, {
                  alignItems: "center",
                  children: [(0, _v1.jsx)(_v5.Box, {
                    boxSize: (0, _v7.rem)(24),
                    mr: (0, _v7.rem)(6),
                    background: `url(${"dark" === _v11 ? _v0.darkIcon : _v0.icon}) center/cover no-repeat`
                  }), (0, _v1.jsx)(_v146.Paragraph, {
                    size: "md",
                    ml: "sm",
                    children: _v0.name
                  })]
                }), (_v17 || _v18) && (0, _v1.jsxs)(_v130.Center, {
                  mx: "sm",
                  flexGrow: 1,
                  textAlign: "right",
                  maxW: (0, _v7.rem)(180),
                  children: [(0, _v1.jsx)(_v257.MiddleEllipsis, {
                    text: _v281(_v5, _v0),
                    variant: "body-md"
                  }), (0, _v1.jsx)(_v209.ChevronDownSmall, {})]
                })]
              })
            }), (0, _v1.jsx)(_v177.PopoverContent, {
              overflowX: "hidden",
              onKeyDown: _v16,
              children: (0, _v1.jsx)(_v270.SearchBox, {
                multiSelect: !0,
                preSelectedLists: _v5,
                provider: _v0,
                onSubmit: _v14,
                onCancel: _v4,
                width: (0, _v7.rem)(320),
                ownerId: _v9?.user?.id || 0
              })
            })]
          }), (0, _v1.jsx)(_v273, {
            userId: _v9?.user?.id || 0,
            providerId: Number(_v0.serviceType),
            listCount: _v5?.length || 0,
            connectionOwnerName: _v9?.user?.name || "",
            onConfirmRemove: _v15
          })]
        }), (0, _v1.jsx)(_v280, {
          provider: _v0,
          isOwner: _v10
        })]
      }, _v0.serviceId);
    },
    _v283 = () => {
      let _v0 = (0, _v23.useGlobalStore)(_v0 => _v0.providers),
        _v1 = (0, _v23.useGlobalStore)(_v0 => _v0.leadCapture.memberConnections),
        _v2 = (0, _v23.useGlobalStore)(_v0 => _v0.entityOwnerId),
        _v3 = (0, _v21.useViewer)(),
        _v4 = _v2 === _v3?.user?.id,
        _v5 = (0, _v4.useMemo)(() => {
          let _v0 = new Set();
          return _v1?.forEach(({
            providers: _v0
          }) => {
            _v0.forEach(_v0 => {
              _v0.add(_v0.providerId);
            });
          }), _v0;
        }, [_v1]),
        _v6 = (0, _v4.useMemo)(() => _v0?.filter(_v0 => _v0.connected && !_v5.has(_v0.serviceType)), [_v0, _v5]);
      return (0, _v1.jsxs)(_v5.Box, {
        mt: (0, _v7.rem)(10),
        children: [(0, _v1.jsx)(_v51.Stack, {
          direction: "row",
          mb: (0, _v7.rem)(6),
          mt: (0, _v7.rem)(10),
          alignItems: "center",
          children: (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v13.Header, {
              color: "text-primary",
              size: "xs",
              children: _v28.default.ESPHeader
            }), (0, _v1.jsx)(_v52.Tooltip, {
              placement: "top",
              maxW: (0, _v7.rem)(350),
              fontSize: "body-md",
              label: _v28.default.SyncToolTipInfo,
              variant: "simple",
              closeOnScroll: !0,
              children: (0, _v1.jsx)(_v5.Box, {
                display: "flex",
                alignItems: "center",
                children: (0, _v1.jsx)(_v227.InfoCircle, {
                  color: "text-secondary",
                  boxSize: (0, _v7.rem)(16)
                })
              })
            })]
          })
        }), _v0?.length === 0 ? (0, _v1.jsxs)(_v55.VStack, {
          pt: "md",
          pb: "lg",
          children: [(0, _v1.jsx)(_v162.Skeleton, {
            borderRadius: "sm",
            height: (0, _v7.rem)(40)
          }), (0, _v1.jsx)(_v162.Skeleton, {
            borderRadius: "sm",
            height: (0, _v7.rem)(40)
          }), (0, _v1.jsx)(_v162.Skeleton, {
            borderRadius: "sm",
            height: (0, _v7.rem)(40)
          })]
        }) : (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v5.Box, {
            mt: "sm",
            mb: "3",
            children: (0, _v1.jsxs)(_v55.VStack, {
              width: "100%",
              children: [(0, _v1.jsx)(_v274, {
                memberConnections: _v1
              }), _v6.map(_v0 => (0, _v1.jsx)(_v282, {
                provider: _v0
              }, _v0.serviceId))]
            })
          }), (0, _v1.jsx)(_v279, {
            providers: _v0,
            isOwner: _v4
          })]
        })]
      });
    };
  var _v284 = _v0.i(0),
    _v285 = _v0.i(0);
  let _v286 = _v0 => (0, _v1.jsx)(_v69.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v1.jsx)("path", {
        d: "M7 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm14.71 5.78-9.48-9.46A1 1 0 0 0 11.5 2h-6a1 1 0 0 0-.71.29l-2.5 2.49a1 1 0 0 0-.29.71v6c.004.265.107.518.29.71l9.49 9.5c.192.183.445.286.71.29a.998.998 0 0 0 .71-.29l8.51-8.51a1 1 0 0 0 .29-.71 1.05 1.05 0 0 0-.29-.7Zm-9.22 7.81L4 11.09V5.9L5.9 4h5.18l8.5 8.49-7.09 7.1Z",
        fill: "currentColor"
      })
    }),
    _v287 = _v0 => (0, _v1.jsx)(_v69.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v1.jsx)("path", {
        d: "m21.7 11.8-9.5-9.5c-.2-.2-.4-.3-.7-.3H5.9c-.5 0-1 .2-1.4.6L2.6 4.5c-.4.4-.6.9-.6 1.4v5.2c0 .5.2 1 .6 1.4l9.2 9.2c.4.4 1 .4 1.4 0l8.5-8.5c.4-.4.4-1 0-1.4ZM7 8c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1Z",
        fill: "currentColor"
      })
    });
  var _v288 = _v0.i(0);
  let _v289 = ({
    onDelete: _v0 = () => void 0
  }) => {
    var _v1;
    let {
      isOpen: _v2,
      onOpen: _v3,
      onClose: _v4
    } = (0, _v143.useDisclosure)();
    _v1 = () => {
      _v4();
    }, (0, _v4.useEffect)(() => {
      function _v0(_v0) {
        _v0.target, _v1?.();
      }
      return document.addEventListener("scroll", _v0, !0), () => {
        document.removeEventListener("scroll", _v0);
      };
    }, [null]);
    let _v5 = (0, _v22.useEscapeKey)(_v2, _v4);
    return (0, _v1.jsxs)(_v64.Menu, {
      isOpen: _v2,
      onOpen: _v3,
      onClose: _v4,
      children: [(0, _v1.jsx)(_v271.MenuButton, {
        "aria-label": "menu",
        as: _v42.IconButton,
        icon: (0, _v1.jsx)(_v288.EllipsisH, {}),
        variant: "tertiary",
        sx: {
          minWidth: "0 !important",
          width: "0",
          clipPath: "inset(100%)",
          padding: "4px !important"
        },
        _groupHover: {
          minWidth: "max-content ",
          width: "unset",
          clipPath: "unset",
          padding: (0, _v7.rem)(8)
        }
      }), (0, _v1.jsx)(_v66.MenuList, {
        color: "text-primary",
        minWidth: (0, _v7.rem)(200),
        onKeyDown: _v5,
        children: (0, _v1.jsxs)(_v65.MenuItem, {
          py: (0, _v7.rem)(11),
          px: "14",
          onClick: _v0,
          children: [(0, _v1.jsx)(_v262.TrashBin, {
            mr: (0, _v7.rem)(10)
          }), " ", (0, _v1.jsx)(_v45.Text, {
            variant: "body-md",
            children: _v28.default.Delete
          })]
        })
      })]
    });
  };
  var _v290 = _v0.i(0);
  let _v291 = ({
    value: _v0,
    editable: _v1 = !0,
    maxLength: _v2 = 100,
    autoFocus: _v3 = !0,
    required: _v4 = !1,
    blockedText: _v5 = [],
    onBlur: _v6 = () => void 0
  }) => {
    let [_v7, _v8] = (0, _v4.useState)(!1),
      [_v9, _v10] = (0, _v4.useState)(_v0),
      _v11 = (0, _v4.useRef)(null),
      _v12 = (0, _v49.useIsBokeh)();
    return (0, _v4.useEffect)(() => {
      _v10(_v0);
    }, [_v0, _v7]), (0, _v1.jsxs)(_v6.Flex, {
      fontSize: "body-md",
      position: "relative",
      flex: 1,
      justifyContent: "space-between",
      alignItems: "center",
      borderRadius: (0, _v7.rem)(3),
      border: _v1 ? `${(0, _v7.rem)(1)} solid` : "none",
      borderColor: _v5.includes(_v9) ? "red.300" : _v7 ? "lightskyblue" : "transparent",
      _hover: {
        border: _v1 ? `${(0, _v7.rem)(1)} solid` : "none",
        borderColor: _v5.includes(_v9) ? "red.300" : "input-stroke"
      },
      _focusWithin: {
        border: _v1 ? `${(0, _v7.rem)(2)} solid` : "none",
        borderColor: _v5.includes(_v9) ? "red.300" : "input-fill"
      },
      "data-testid": "editable-text-container",
      children: [(0, _v1.jsx)(_v96.Input, {
        ref: _v11,
        maxLength: _v2,
        style: {
          pointerEvents: _v1 ? "auto" : "none"
        },
        value: (0, _v28.translateFieldName)(_v9),
        onFocus: _v0 => {
          _v0?.target.select(), _v8(!0);
        },
        onBlur: _v0 => {
          _v8(!1), _v6(_v0);
        },
        onChange: _v0 => {
          _v10(_v0.target.value);
        },
        backgroundColor: "transparent",
        autoFocus: _v3,
        size: "sm",
        borderStyle: "none",
        outline: "none",
        borderRadius: "xs",
        height: (0, _v7.rem)(24),
        _hover: {
          borderStyle: "none",
          outline: "none"
        },
        _focus: {
          borderStyle: "none",
          outline: "none"
        },
        _disabled: {
          borderStyle: "none",
          outline: "none"
        },
        "data-testid": "editable-text-input"
      }), _v7 && (0, _v1.jsxs)(_v6.Flex, {
        color: "slate.500",
        textAlign: "right",
        pr: (0, _v7.rem)(6),
        "data-testid": "editable-text-length",
        children: [_v9.length, "/", _v2]
      }), _v4 && !_v7 && (0, _v1.jsxs)(_v6.Flex, {
        position: "absolute",
        cursor: "text",
        onClick: () => _v1 && _v11.current?.focus(),
        maxWidth: "100%",
        "data-testid": "editable-text-required",
        children: [(0, _v1.jsx)(_v5.Box, {
          ml: "3",
          overflow: "hidden",
          whiteSpace: "nowrap",
          visibility: "hidden",
          "data-testid": "editable-text-required-hidden-content",
          children: _v9
        }), (0, _v1.jsx)(_v290.Asterisk, {
          ml: _v12 ? "xs" : "sm",
          color: "red.500",
          boxSize: (0, _v7.rem)(10),
          _groupHover: {
            display: _v1 ? "none" : "block"
          },
          "data-testid": "editable-text-required-asterisk"
        })]
      })]
    });
  };
  var _v292 = _v0.i(0),
    _v293 = _v0.i(0);
  let _v294 = ({
    errors: _v0
  }) => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v293.CircleExclamation, {
      boxSize: (0, _v7.rem)(24)
    }), (0, _v1.jsx)(_v5.Box, {
      mt: "md",
      children: _v0.find(_v0 => _v0.code === _v26.PROVIDER_FIELDS_ACCESS_DENIED_ERROR_MARKETO) ? (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v146.Paragraph, {
          children: _v28.default.Marketo603Error
        }), (0, _v1.jsxs)(_v5.Box, {
          as: "ul",
          listStyleType: "'-- '",
          listStylePosition: "inside",
          my: "sm",
          mx: "auto",
          children: [(0, _v1.jsx)(_v5.Box, {
            as: "li",
            children: (0, _v1.jsx)(_v45.Text, {
              variant: "body-md",
              children: "Read-Write Schema Custom Field"
            })
          }), (0, _v1.jsx)(_v5.Box, {
            as: "li",
            children: (0, _v1.jsx)(_v45.Text, {
              variant: "body-md",
              children: "Read-Write Schema Standard Field"
            })
          })]
        }), (0, _v1.jsx)(_v146.Paragraph, {
          children: (0, _v50.translate)({
            singular: "Learn more on changing Marketo permissions {A}here{/A}.",
            replacements: {
              A: _v0 => (0, _v1.jsx)(_v43.Link, {
                href: "https://developers.marketo.com/rest-api/custom-services/",
                target: "_blank",
                rel: "noreferrer",
                textDecor: "none",
                children: _v0
              })
            },
            dictionary: {
              es: {
                singular: "Obtenga más información sobre cómo cambiar los permisos de Marketo {A}aquí{/A}."
              },
              "de-DE": {
                singular: "Weitere Informationen zum Ändern von Marketo-Berechtigungen {A}finden Sie hier{/A}."
              },
              "fr-FR": {
                singular: "Pour en savoir plus sur la modification des autorisations Marketo, rendez-vous {A}ici{/A}."
              },
              "ja-JP": {
                singular: "Marketoの権限変更の詳細については、{A}こちら{/A}をご覧ください。"
              },
              "ko-KR": {
                singular: "Marketo 권한 변경에 대한 자세한 내용은 {A}여기{/A}에서 확인하세요."
              },
              "pt-BR": {
                singular: "Saiba mais sobre como alterar as permissões do Marketo {A}aqui{/A}."
              },
              "zh-CN": {
                singular: "点击{A}此处{/A}了解有关更改 Marketo 权限的更多信息。"
              }
            }
          })
        })]
      }) : (0, _v1.jsx)(_v45.Text, {
        variant: "body-xl",
        children: _v28.default.CouldNotLoadMarketoFields
      })
    })]
  });
  var _v295 = _v26;
  let _v296 = ({
      providerType: _v0 = _v295.ProviderTypes.TYPE_MARKETO,
      item: _v1,
      addProviderField: _v2,
      removeProviderField: _v3,
      onClose: _v4
    }) => {
      let _v5 = (0, _v23.useGlobalStore)(_v0 => _v0.providerFields.marketo),
        _v6 = (0, _v23.useGlobalStore)(_v0 => _v0.leadCapture.hiddenFields),
        _v7 = (0, _v23.useGlobalStore)(_v0 => _v0.leadCapture.customFields),
        _v8 = (0, _v23.useGlobalStore)(_v0 => _v0.setProviderFields),
        [_v9, _v10] = (0, _v4.useState)(!1),
        [_v11, _v12] = (0, _v4.useState)(!1),
        [_v13, _v14] = (0, _v4.useState)(),
        [_v15, _v16] = (0, _v4.useState)(_v1.connectedFields.find(_v0 => _v0.emailServiceProviderType === _v0)),
        _v17 = [..._v6, ..._v7].filter(_v0 => _v0 !== _v1).flatMap(_v0 => _v0.connectedFields.map(_v0 => _v0.emailServiceProviderFieldId)),
        [_v18, _v19] = (0, _v4.useState)(1),
        {
          fields: _v20,
          errors: _v21,
          nextPageToken: _v22
        } = _v5 || {},
        _v23 = async () => {
          try {
            _v10(!0);
            let {
              fields: _v0,
              nextPageToken: _v1,
              errors: _v2
            } = await (0, _v223.getMarketoFields)(_v22);
            _v8(_v295.ProviderTypeToZustandMapping[_v295.ProviderTypes.TYPE_MARKETO], {
              fields: [..._v20, ..._v0],
              nextPageToken: _v1,
              errors: _v2
            });
          } catch (_v0) {} finally {
            _v10(!1);
          }
        },
        _v24 = () => _v0 === _v295.ProviderTypes.TYPE_MARKETO ? _v295.PROVIDER_FIELDS_MARKETO_MAX_ITEMS_PER_PAGE : 300,
        _v25 = _v0 => {
          let {
            value: _v1
          } = _v0.target;
          _v16({
            ..._v15,
            emailServiceProviderFieldId: _v1,
            emailServiceProviderType: _v0,
            leadCaptureFormFieldId: _v1.id || 0
          }), _v14(_v20.find(_v0 => _v0.key === _v1)?.value);
        },
        _v26 = (0, _v4.useCallback)(async () => {
          if (_v15?.emailServiceProviderFieldId) try {
            _v12(!0);
            let _v0 = _v20.find(_v0 => _v0.key === _v15.emailServiceProviderFieldId)?.value;
            _v0 || (_v0 = await (0, _v223.getMarketoFieldName)(_v15.emailServiceProviderFieldId)), _v14(_v0);
          } catch (_v0) {} finally {
            _v12(!1);
          }
        }, [_v15, _v20]);
      return (0, _v4.useEffect)(() => {
        _v20.length <= 0 && _v23();
      }, []), (0, _v4.useEffect)(() => {
        _v26();
      }, [_v26]), (0, _v1.jsxs)(_v6.Flex, {
        flexDir: "column",
        height: "100%",
        children: [(0, _v1.jsx)(_v13.Header, {
          p: "md",
          size: "sm",
          children: _v28.default.MarketoFields
        }), (0, _v1.jsx)(_v131.Divider, {}), (0, _v1.jsxs)(_v6.Flex, {
          p: "md",
          children: [(0, _v1.jsxs)(_v6.Flex, {
            flex: 1,
            flexDir: "column",
            children: [(0, _v1.jsx)(_v13.Header, {
              mb: "sm",
              size: "xs",
              children: _v28.default.SelectedField
            }), _v11 ? (0, _v1.jsx)(_v44.Spinner, {
              size: "sm"
            }) : (0, _v1.jsx)(_v45.Text, {
              variant: "body-md",
              children: _v13 || _v28.default.None
            })]
          }), _v15 && (0, _v1.jsx)(_v130.Center, {
            children: (0, _v1.jsx)(_v12.Button, {
              onClick: () => {
                _v16(void 0), _v14(void 0);
              },
              variant: "tertiary",
              size: "sm",
              children: _v28.default.Clear
            })
          })]
        }), (0, _v1.jsx)(_v131.Divider, {}), (0, _v1.jsx)(_v6.Flex, {
          overflow: "auto",
          p: "md",
          flex: 1,
          children: _v9 ? (0, _v1.jsx)(_v130.Center, {
            flexDir: "column",
            boxSize: "100%",
            children: (0, _v1.jsx)(_v44.Spinner, {})
          }) : (0, _v1.jsx)(_v1.Fragment, {
            children: _v21?.length > 0 ? (0, _v1.jsx)(_v130.Center, {
              flexDir: "column",
              boxSize: "100%",
              children: (0, _v1.jsx)(_v294, {
                errors: _v21
              })
            }) : _v20?.length > 0 ? (0, _v1.jsx)(_v6.Flex, {
              flexDir: "column",
              children: _v20.slice((_v18 - 1) * _v24(), _v18 * _v24()).map(_v0 => {
                let _v1 = _v15 && _v15.emailServiceProviderFieldId === _v0.key && void 0 !== _v13;
                return (0, _v1.jsx)(_v159.Radio, {
                  isDisabled: _v17.includes(_v0.key),
                  isChecked: _v1,
                  value: _v0.key,
                  onChange: _v25,
                  p: "sm",
                  mb: (0, _v7.rem)(10),
                  children: (0, _v1.jsx)(_v45.Text, {
                    variant: "body-md",
                    ml: (0, _v7.rem)(10),
                    children: _v0.value
                  })
                }, _v0.key);
              })
            }) : (0, _v1.jsxs)(_v130.Center, {
              flexDir: "column",
              boxSize: "100%",
              children: [(0, _v1.jsx)(_v293.CircleExclamation, {
                width: (0, _v7.rem)(24)
              }), (0, _v1.jsx)(_v5.Box, {
                mt: "md",
                children: (0, _v1.jsx)(_v45.Text, {
                  variant: "body-xl",
                  children: _v28.default.CouldNotLoadMarketoFields
                })
              })]
            })
          })
        }), (0, _v1.jsx)(_v131.Divider, {}), (0, _v1.jsxs)(_v5.Box, {
          p: "md",
          children: [(0, _v1.jsxs)(_v6.Flex, {
            justifyContent: "center",
            gap: (0, _v7.rem)(8),
            mb: (0, _v7.rem)(12),
            children: [(0, _v1.jsx)(_v42.IconButton, {
              "aria-label": "previous",
              onClick: () => _v19(_v18 - 1),
              isDisabled: 1 === _v18 || _v9,
              variant: "tertiary",
              icon: (0, _v1.jsx)(_v210.ChevronLeftSmall, {})
            }), (0, _v1.jsx)(_v42.IconButton, {
              "aria-label": "next",
              onClick: () => {
                _v20.length <= _v18 * _v24() && _v23(), _v19(_v18 + 1);
              },
              isDisabled: !_v22 && _v20.length <= _v18 * _v24() || _v9,
              variant: "tertiary",
              icon: (0, _v1.jsx)(_v292.ChevronRightSmall, {})
            })]
          }), (0, _v1.jsxs)(_v6.Flex, {
            gap: (0, _v7.rem)(8),
            children: [(0, _v1.jsx)(_v12.Button, {
              flex: 1,
              isDisabled: _v9,
              onClick: _v4,
              variant: "secondary",
              children: _v28.default.Cancel
            }), (0, _v1.jsx)(_v12.Button, {
              flex: 1,
              onClick: () => {
                _v15 ? _v2(_v15) : _v3(_v0), _v4();
              },
              isDisabled: _v9,
              children: _v28.default.Add
            })]
          })]
        })]
      });
    },
    _v297 = ({
      item: _v0,
      index: _v1,
      autoFocus: _v2 = !1,
      existingNames: _v3 = [],
      popoverPortalRef: _v4,
      setItemField: _v5 = () => void 0,
      deleteItem: _v6 = () => void 0,
      addProviderField: _v7,
      removeProviderField: _v8
    }) => {
      let _v9 = _v0.connectedFields?.find(_v0 => _v0.emailServiceProviderType === _v26.ProviderTypes.TYPE_MARKETO) != void 0,
        _v10 = (0, _v23.useGlobalStore)(_v0 => _v0.providers).find(_v0 => _v0.serviceId === _v26.ProviderTypeToServiceIdMapping[_v26.ProviderTypes.TYPE_MARKETO])?.connected,
        {
          isOpen: _v11,
          onOpen: _v12,
          onClose: _v13
        } = (0, _v143.useDisclosure)(),
        {
          sendRegistrationActionBP: _v14
        } = _v92(),
        _v15 = (0, _v22.useEscapeKey)(_v11, _v13);
      return (0, _v1.jsx)(_v5.Box, {
        border: `${(0, _v7.rem)(1)} solid`,
        px: "sm",
        borderColor: "input-stroke",
        borderRadius: "sm",
        background: "surface",
        role: "group",
        children: (0, _v1.jsxs)(_v6.Flex, {
          height: (0, _v7.rem)(40),
          py: "sm",
          borderRadius: "sm",
          alignItems: "center",
          children: [!0 == _v0.isLocked && (0, _v1.jsx)(_v284.Checkbox, {
            isChecked: _v0.isRequired,
            onChange: _v0 => {
              _v5("isRequired", _v1, _v0.target.checked), _v14({
                actionName: _v90.BP_ACTION_NAME.CHECK_HIDDEN_FIELD,
                element: _v90.BP_ELEMENT.CHECKBOX
              });
            },
            ml: "xs",
            mr: "sm"
          }), (0, _v1.jsx)(_v291, {
            autoFocus: _v2,
            blockedText: _v3,
            maxLength: _v26.MAX_FIELD_NAME_LENGTH,
            value: _v0.name,
            editable: !_v0.isLocked,
            onBlur: _v0 => {
              let _v1 = _v0.target.value;
              _v1.length < 1 || _v0.name === _v1 || _v3.includes(_v1) || _v5("name", _v1, _v1);
            }
          }), _v10 && (0, _v1.jsxs)(_v176.Popover, {
            isLazy: !0,
            strategy: "fixed",
            placement: "right",
            isOpen: _v11,
            onOpen: _v12,
            onClose: _v13,
            children: [(0, _v1.jsx)(_v178.PopoverTrigger, {
              children: (0, _v1.jsx)(_v12.Button, {
                variant: "tertiary",
                size: "sm",
                rightIcon: _v9 ? (0, _v1.jsx)(_v287, {}) : (0, _v1.jsx)(_v286, {}),
                iconSpacing: 0,
                px: "sm",
                ml: "xs",
                sx: {
                  padding: "0",
                  width: "0",
                  clipPath: "inset(100%)"
                },
                _groupHover: {
                  padding: (0, _v7.rem)(8),
                  width: "unset",
                  clipPath: "unset"
                },
                children: !_v9 && (0, _v1.jsx)(_v45.Text, {
                  variant: "body-md",
                  color: "text-secondary",
                  mr: "sm",
                  children: _v28.default.MapField
                })
              })
            }), (0, _v1.jsx)(_v285.Portal, {
              containerRef: _v4,
              children: (0, _v1.jsx)(_v177.PopoverContent, {
                height: "94vh",
                w: (0, _v7.rem)(320),
                mb: "3vh",
                onKeyDown: _v15,
                children: (0, _v1.jsx)(_v296, {
                  providerType: _v26.ProviderTypes.TYPE_MARKETO,
                  item: _v0,
                  onClose: _v13,
                  addProviderField: _v0 => _v7(_v0, _v1),
                  removeProviderField: _v0 => _v8(_v0, _v1)
                })
              })
            })]
          }), !_v0.isLocked && (0, _v1.jsx)(_v289, {
            onDelete: () => _v6(_v1)
          })]
        })
      });
    },
    _v298 = () => {
      let _v0 = (0, _v23.useGlobalStore)(_v0 => _v0.leadCapture.hiddenFields),
        _v1 = (0, _v23.useGlobalStore)(_v0 => _v0.entityType),
        {
          patchLeadCapture: _v2
        } = (0, _v25.usePatchLeadCapture)(0),
        [_v3, _v4] = (0, _v4.useState)(!1),
        _v5 = (0, _v4.useRef)(null),
        [, _v6] = (0, _v4.useReducer)(_v0 => _v0 + 1, 0),
        _v7 = _v0.map(_v0 => _v0.name),
        {
          sendRegistrationActionBP: _v8
        } = _v92(),
        {
          onFormHiddenFieldAdded: _v9
        } = (0, _v97.useCallbackContext)(),
        {
          trackLiveStreamRegistrationFieldAdded: _v10
        } = (0, _v135.useLiveStreamBroadcasterTracking)(),
        _v11 = (0, _v4.useCallback)((_v0, _v1) => {
          _v2("hiddenFields", (0, _v223.formatCustomFieldPayload)(_v0), _v1), _v6();
        }, [_v2]),
        _v12 = (_v0, _v1, _v2) => {
          let _v3 = [..._v0];
          _v3[_v1] = {
            ..._v0[_v1],
            [_v0]: _v2
          }, _v11(_v3);
        },
        _v13 = _v0 => {
          let _v1 = [..._v0];
          _v1.splice(_v0, 1), _v11(_v1);
        },
        _v14 = (_v0, _v1) => {
          _v11((0, _v98.getUpdatedItemsAddProvider)([..._v0], _v0, _v1));
        },
        _v15 = (_v0, _v1) => {
          _v11((0, _v98.getUpdatedItemsRemoveProvider)([..._v0], _v0, _v1));
        };
      return (0, _v1.jsxs)("div", {
        children: [(0, _v1.jsxs)(_v6.Flex, {
          pb: (0, _v7.rem)(6),
          alignItems: "center",
          children: [(0, _v1.jsx)(_v13.Header, {
            size: "xs",
            color: "text-primary",
            pb: 0,
            children: _v28.default.HiddenFields
          }), (0, _v1.jsx)(_v52.Tooltip, {
            placement: "top",
            maxW: (0, _v7.rem)(350),
            fontSize: "body-md",
            label: _v28.default.HiddenFieldsAnnotation,
            variant: "simple",
            closeOnScroll: !0,
            children: (0, _v1.jsx)(_v5.Box, {
              display: "flex",
              alignItems: "center",
              children: (0, _v1.jsx)(_v227.InfoCircle, {
                color: "text-secondary",
                ml: "sm",
                boxSize: (0, _v7.rem)(16)
              })
            })
          })]
        }), (0, _v1.jsxs)(_v6.Flex, {
          width: "100%",
          flexDirection: "column",
          position: "relative",
          gap: (0, _v7.rem)(8),
          children: [_v0.map((_v0, _v1) => (0, _v1.jsx)(_v297, {
            existingNames: _v7.filter((_v0, _v1) => _v1 !== _v1),
            item: _v0,
            index: _v1,
            autoFocus: _v3,
            popoverPortalRef: _v5,
            setItemField: _v12,
            deleteItem: _v13,
            addProviderField: _v14,
            removeProviderField: _v15
          }, _v0.cid)), (0, _v1.jsx)(_v52.Tooltip, {
            label: _v28.default.HiddenFieldsLimit10,
            isDisabled: _v0.length < 10,
            children: (0, _v1.jsx)(_v5.Box, {
              children: (0, _v1.jsx)(_v12.Button, {
                onClick: () => {
                  let _v0 = _v0.length > 0 ? Math.max(..._v0.map(_v0 => _v0.cid)) + 1 : 1,
                    _v1 = [..._v0],
                    _v2 = _v1.map(_v0 => _v0.name),
                    _v3 = `${_v26.DEFAULT_HIDDEN_FIELD_VALUES.name} ${_v1.length + 1}`,
                    _v4 = 0;
                  for (; _v2.includes(_v3);) _v4++, _v3 = `${_v26.DEFAULT_HIDDEN_FIELD_VALUES.name} ${_v1.length + 1 + _v4}`;
                  _v1.push({
                    ..._v26.DEFAULT_HIDDEN_FIELD_VALUES,
                    name: _v3,
                    position: _v1.length + 1,
                    cid: _v0
                  }), _v11(_v1), _v4(!0), _v9?.("custom"), _v8({
                    actionName: _v90.BP_ACTION_NAME.CREATE_HIDDEN_FIELD
                  }), _v1 === _v18.ENTITY_TYPE.EVENT && _v10({
                    liveStreamFieldCategory: "hidden_field"
                  });
                },
                variant: "tertiary",
                leftIcon: (0, _v1.jsx)(_v267.PlusCircle, {
                  color: "text-secondary"
                }),
                color: "text-secondary",
                borderColor: "text-secondary",
                iconSpacing: (0, _v7.rem)(8),
                isDisabled: _v0.length >= 10,
                width: "100%",
                children: _v28.default.NewHiddenField
              })
            })
          })]
        }), (0, _v1.jsx)("div", {
          ref: _v5
        })]
      });
    };
  var _v299 = _v0.i(0);
  let _v300 = _v0 => (0, _v1.jsx)(_v69.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm5.793-1.707a1 1 0 0 1 1.414 0L12 13.086l2.793-2.793a1 1 0 1 1 1.414 1.414l-3.5 3.5a1 1 0 0 1-1.414 0l-3.5-3.5a1 1 0 0 1 0-1.414Z",
      fill: "currentColor"
    })
  });
  var _v301 = _v0.i(0),
    _v302 = _v0.i(0),
    _v303 = _v0.i(0),
    _v304 = _v0.i(0),
    _v305 = _v0.i(0);
  let _v306 = ({
      label: _v0,
      tooltip: _v1,
      tooltipPortalRef: _v2
    }) => (0, _v1.jsxs)(_v6.Flex, {
      alignItems: "center",
      children: [(0, _v1.jsx)(_v45.Text, {
        variant: "body-md",
        children: _v0
      }), (0, _v1.jsx)(_v52.Tooltip, {
        placement: "top",
        maxW: (0, _v7.rem)(240),
        fontSize: "body-md",
        label: _v1,
        variant: "simple",
        closeOnScroll: !0,
        portalProps: {
          containerRef: _v2
        },
        children: (0, _v1.jsx)("span", {
          children: (0, _v1.jsx)(_v227.InfoCircle, {
            color: "text-secondary",
            ml: "sm",
            boxSize: (0, _v7.rem)(16)
          })
        })
      })]
    }),
    _v307 = ({
      item: _v0,
      popoverPortalRef: _v1,
      onRequiredChange: _v2 = () => void 0,
      onLockedChange: _v3 = () => void 0,
      onStaticChange: _v4 = () => void 0,
      onDelete: _v5 = () => void 0,
      addProviderField: _v6,
      removeProviderField: _v7
    }) => {
      let {
          isOpen: _v8,
          onOpen: _v9,
          onClose: _v10
        } = (0, _v143.useDisclosure)(),
        {
          isOpen: _v11,
          onOpen: _v12,
          onClose: _v13
        } = (0, _v143.useDisclosure)(),
        _v14 = (0, _v4.useRef)(null),
        _v15 = _v0.connectedFields?.find(_v0 => _v0.emailServiceProviderType === _v26.ProviderTypes.TYPE_MARKETO) != void 0,
        _v16 = (0, _v23.useGlobalStore)(_v0 => _v0.providers).find(_v0 => _v0.serviceType === _v26.ProviderTypes.TYPE_MARKETO)?.connected,
        _v17 = (0, _v22.useEscapeKey)(_v8, _v10),
        _v18 = _v0.isLocked && !_v0.isStatic,
        _v19 = _v0.isLocked || _v0.isStatic,
        {
          isOwnerOrAdmin: _v20
        } = (0, _v58.usePermissionStore)(),
        _v21 = (0, _v23.useGlobalStore)(_v0 => _v0.entityOwnerId),
        {
          capabilities: _v22,
          ready: _v23
        } = (0, _v9.useCapability)(["hasAdminForcedPreset"], _v21),
        {
          settings: _v24
        } = (0, _v20.useOrionSettings)(),
        _v25 = _v23 && !!_v22?.hasAdminForcedPreset || _v24.enable_admin_forced_preset,
        _v26 = _v20 && _v25,
        _v27 = _v25 && !_v20,
        _v28 = !_v20 && _v0.isStatic;
      return (0, _v1.jsxs)(_v130.Center, {
        ml: (0, _v7.rem)(4),
        children: [(0, _v1.jsxs)(_v64.Menu, {
          closeOnSelect: !1,
          isOpen: _v11,
          onOpen: _v12,
          onClose: _v13,
          placement: "right",
          children: [(0, _v1.jsx)(_v271.MenuButton, {
            "aria-label": "menu",
            as: _v42.IconButton,
            icon: (0, _v1.jsx)(_v272.EllipsisV, {}),
            variant: "tertiary",
            size: "xs",
            sx: {
              minWidth: "0 !important",
              width: "0",
              clipPath: "inset(100%)"
            },
            _groupHover: {
              minWidth: "max-content ",
              width: "unset",
              clipPath: "unset"
            }
          }), (0, _v1.jsx)(_v285.Portal, {
            children: (0, _v1.jsxs)(_v66.MenuList, {
              color: "text-primary",
              minWidth: (0, _v7.rem)(200),
              zIndex: 0,
              tabIndex: 0,
              children: [(0, _v1.jsxs)(_v305.MenuGroup, {
                children: [(0, _v1.jsxs)(_v65.MenuItem, {
                  justifyContent: "space-between",
                  py: (0, _v7.rem)(11),
                  px: (0, _v7.rem)(14),
                  isDisabled: _v27,
                  onClick: _v0 => 0 == _v0.detail && _v2(!_v0.isRequired),
                  children: [(0, _v1.jsx)(_v306, {
                    label: _v28.default.Required,
                    tooltip: _v28.default.RequiredTooltip,
                    tooltipPortalRef: _v14
                  }), (0, _v1.jsx)(_v132.Switch, {
                    isDisabled: _v27 || _v18,
                    onChange: _v0 => _v2(_v0.target.checked),
                    isChecked: _v0.isRequired,
                    size: "sm"
                  })]
                }), _v26 && (0, _v1.jsxs)(_v65.MenuItem, {
                  justifyContent: "space-between",
                  py: (0, _v7.rem)(11),
                  px: (0, _v7.rem)(14),
                  onClick: _v0 => 0 == _v0.detail && _v3(_v0.isLocked),
                  children: [(0, _v1.jsx)(_v306, {
                    label: _v28.default.Editable,
                    tooltip: _v28.default.EditableTooltip,
                    tooltipPortalRef: _v14
                  }), (0, _v1.jsx)(_v132.Switch, {
                    onChange: _v0 => _v3(!_v0.target.checked),
                    isChecked: !_v0.isLocked,
                    size: "sm"
                  })]
                }), _v26 && (0, _v1.jsxs)(_v65.MenuItem, {
                  justifyContent: "space-between",
                  py: (0, _v7.rem)(11),
                  px: (0, _v7.rem)(14),
                  onClick: _v0 => 0 == _v0.detail && _v4(_v0.isStatic),
                  children: [(0, _v1.jsx)(_v306, {
                    label: _v28.default.Removable,
                    tooltip: _v28.default.RemovableTooltip,
                    tooltipPortalRef: _v14
                  }), (0, _v1.jsx)(_v132.Switch, {
                    onChange: _v0 => _v4(!_v0.target.checked),
                    isChecked: !_v0.isStatic,
                    size: "sm"
                  })]
                })]
              }), (!_v28 || _v16) && (0, _v1.jsx)(_v304.MenuDivider, {}), _v16 ? (0, _v1.jsxs)(_v65.MenuItem, {
                onClick: _v9,
                py: (0, _v7.rem)(11),
                px: (0, _v7.rem)(14),
                closeOnSelect: !0,
                children: [_v15 ? (0, _v1.jsx)(_v287, {}) : (0, _v1.jsx)(_v286, {}), (0, _v1.jsx)(_v45.Text, {
                  ml: "10",
                  variant: "body-md",
                  children: _v28.default.AddMarketoField
                })]
              }) : _v18 && (0, _v1.jsx)(_v65.MenuItem, {
                p: "0"
              }), !_v28 && (0, _v1.jsxs)(_v65.MenuItem, {
                onClick: _v5,
                onKeyDown: _v0 => _v0.key === _v26.KEY_CODES.ENTER && !_v0.isStatic && !_v0.isLocked && _v5(),
                isDisabled: _v19,
                py: (0, _v7.rem)(11),
                px: (0, _v7.rem)(14),
                children: [(0, _v1.jsx)(_v262.TrashBin, {
                  mr: "10"
                }), " ", (0, _v1.jsx)(_v45.Text, {
                  variant: "body-md",
                  children: _v28.default.Delete
                })]
              })]
            })
          })]
        }), (0, _v1.jsx)(_v285.Portal, {
          children: (0, _v1.jsx)(_v5.Box, {
            ref: _v14,
            position: "fixed",
            inset: 0,
            zIndex: 0,
            pointerEvents: "none"
          })
        }), (0, _v1.jsxs)(_v176.Popover, {
          isLazy: !0,
          strategy: "fixed",
          placement: "right",
          isOpen: _v8,
          onOpen: _v9,
          onClose: _v10,
          children: [(0, _v1.jsx)(_v178.PopoverTrigger, {
            children: (0, _v1.jsx)("div", {})
          }), (0, _v1.jsx)(_v285.Portal, {
            containerRef: _v1,
            children: (0, _v1.jsx)(_v177.PopoverContent, {
              height: "94vh",
              w: (0, _v7.rem)(320),
              mb: "3vh",
              onKeyDown: _v17,
              children: (0, _v1.jsx)(_v296, {
                providerType: _v26.ProviderTypes.TYPE_MARKETO,
                item: _v0,
                onClose: _v10,
                addProviderField: _v6,
                removeProviderField: _v7
              })
            })
          })]
        })]
      });
    };
  var _v308 = _v26;
  let _v309 = ({
    option: _v0,
    index: _v1,
    moveSteps: _v2 = 0,
    itemsGap: _v3 = _v308.DEFAULT_LIST_ITEM_GAP,
    draggedItemRef: _v4,
    disableDelete: _v5 = !1,
    autoFocus: _v6 = !1,
    onDragStart: _v7 = () => void 0,
    onDrag: _v8 = () => void 0,
    onDragEnd: _v9 = () => void 0,
    updateOptionName: _v10 = () => void 0,
    deleteOption: _v11 = () => void 0
  }) => {
    let [_v12, _v13] = (0, _v4.useState)(!1),
      _v14 = (0, _v4.useRef)(null),
      _v15 = (0, _v4.useRef)(null),
      _v16 = (0, _v208.useSpring)({
        from: {
          transform: "translateY(0px)"
        },
        to: {
          transform: `translateY(${(_v2 || 0) * ((_v4?.current?.offsetHeight || 38) + _v3)}px)`
        }
      }),
      _v17 = _v0 => {
        _v15.current && (_v15.current.style.opacity = 1 === _v0.buttons ? "0" : "100");
      };
    return (0, _v1.jsxs)(_v6.Flex, {
      ref: _v15,
      as: _v207.animated.div,
      p: "sm",
      alignItems: "center",
      borderRadius: "sm",
      position: "relative",
      zIndex: 1,
      height: (0, _v7.rem)(40),
      background: "surface",
      border: "1px solid",
      borderColor: "input-stroke",
      style: _v16,
      draggable: _v12,
      onDrag: _v0 => {
        _v0.stopPropagation(), _v0.preventDefault(), _v8(_v0), _v17(_v0);
      },
      onDragEnd: _v0 => {
        _v0.stopPropagation(), _v9(), document.body.ondragover = _v14.current, _v17(_v0);
      },
      onDragStart: _v0 => {
        _v0.stopPropagation(), _v7(_v1, _v15), _v14.current = document.body.ondragover, document.body.ondragover = _v0 => {
          _v0.preventDefault();
        };
      },
      "data-group": "dropdown",
      children: [(0, _v1.jsx)(_v6.Flex, {
        mr: (0, _v7.rem)(12),
        cursor: "move",
        display: "none",
        sx: {
          '[data-group="dropdown"]:hover &': {
            display: "flex"
          }
        },
        children: (0, _v1.jsx)(_v301.DragV, {
          color: "text-secondary",
          boxSize: (0, _v7.rem)(20),
          onMouseEnter: () => _v13(!0),
          onMouseLeave: () => _v13(!1)
        })
      }), (0, _v1.jsx)(_v291, {
        value: _v0.optionLabel,
        maxLength: _v308.MAX_FIELD_NAME_LENGTH,
        onBlur: _v0 => {
          !(_v0.target.value.length < 1) && _v10 && _v10(_v0.target?.value, _v1);
        },
        autoFocus: _v6
      }), (0, _v1.jsx)(_v6.Flex, {
        justifyContent: "center",
        mx: "sm",
        cursor: "pointer",
        tabIndex: 0,
        onKeyDown: _v0 => _v0.key === _v308.KEY_CODES.ENTER && _v11(_v1),
        onClick: () => _v11(_v1),
        display: "none",
        sx: {
          '[data-group="dropdown"]:hover &': {
            display: _v5 ? "none" : "flex"
          }
        },
        children: (0, _v1.jsx)(_v262.TrashBin, {
          boxSize: (0, _v7.rem)(16),
          color: "InfoText"
        })
      })]
    });
  };
  var _v310 = _v26;
  let _v311 = ({
    options: _v0 = [],
    itemsGap: _v1 = _v310.DEFAULT_LIST_ITEM_GAP,
    updateOptions: _v2 = () => void 0
  }) => {
    let [_v3, _v4] = (0, _v4.useState)(!1),
      [_v5, _v6] = (0, _v4.useState)(!1),
      _v7 = (0, _v4.useRef)(-1),
      _v8 = (0, _v4.useRef)(-1),
      [_v9, _v10] = (0, _v4.useState)(_v0.map(() => 0)),
      _v11 = (0, _v4.useRef)(void 0),
      _v12 = (_v0, _v1) => {
        _v7.current = _v0, _v11.current = _v1;
      },
      _v13 = () => {
        _v4(!0);
      },
      _v14 = () => {
        let _v0 = [..._v0],
          _v1 = _v0.splice(_v7.current, 1)[0];
        _v0.splice(_v8.current, 0, _v1), _v0 = _v0.map((_v0, _v1) => ({
          ..._v0,
          optionPosition: _v1 + 1
        })), _v2?.(_v0), _v10(_v0.map(() => 0)), _v4(!1);
      },
      _v15 = (_v0, _v1) => {
        let _v2 = [..._v0];
        _v2[_v1] = {
          ..._v2[_v1],
          optionLabel: _v0
        }, _v2?.(_v2);
      },
      _v16 = _v0 => {
        if (_v0.length < 3) return;
        let _v1 = [..._v0];
        _v1.splice(_v0, 1), _v10((_v1 = _v1.map((_v0, _v1) => ({
          ..._v0,
          optionPosition: _v1 + 1
        }))).map(() => 0)), _v2?.(_v1);
      };
    return (0, _v1.jsxs)(_v6.Flex, {
      width: "100%",
      flexDirection: "column",
      position: "relative",
      zIndex: 1,
      p: (0, _v7.rem)(15),
      gap: (0, _v7.rem)(_v1),
      children: [(0, _v1.jsx)(_v13.Header, {
        color: "text-primary",
        size: "xs",
        pb: "sm",
        children: _v28.default.DropdownOptions
      }), _v0.map((_v0, _v1) => (0, _v1.jsxs)(_v5.Box, {
        position: "relative",
        children: [(0, _v1.jsx)(_v309, {
          index: _v1,
          option: _v0,
          itemsGap: _v1,
          draggedItemRef: _v11.current ?? void 0,
          moveSteps: _v9[_v1],
          onDragStart: _v12,
          onDrag: _v13,
          onDragEnd: _v14,
          updateOptionName: _v15,
          deleteOption: _v16,
          disableDelete: _v0.length < 3,
          autoFocus: _v5
        }, _v0.cid), (0, _v1.jsx)(_v5.Box, {
          width: "100%",
          height: (0, _v7.rem)(33),
          position: "absolute",
          border: 0,
          zIndex: 10 * !!_v3,
          pointerEvents: _v3 ? "auto" : "none",
          onDragEnter: () => (_v0 => {
            _v8.current = _v0;
            let _v1 = _v7.current,
              _v2 = _v9.map(() => 0);
            if (_v1 === _v0) return void _v10(_v2);
            if (_v1 < _v0) for (let _v0 = _v1 + 1; _v0 <= _v0; _v0++) _v2[_v0] = -1;else for (let _v0 = _v0; _v0 < _v1; _v0++) _v2[_v0] = 1;
            _v10(_v2);
          })(_v1)
        })]
      }, _v1)), _v0.length < _v310.MAX_NUMBER_OF_OPTIONS && (0, _v1.jsx)(_v12.Button, {
        onClick: () => {
          let _v0 = _v0.length > 0 ? Math.max(..._v0.map(_v0 => _v0.cid)) + 1 : 1,
            _v1 = [..._v0, {
              optionLabel: `Option ${_v0.length + 1}`,
              optionPosition: _v0.length + 1,
              cid: _v0
            }].map((_v0, _v1) => ({
              ..._v0,
              optionPosition: _v1 + 1
            }));
          _v10(_v1.map(() => 0)), _v2?.(_v1), _v6(!0);
        },
        leftIcon: (0, _v1.jsx)(_v267.PlusCircle, {
          color: "text-secondary"
        }),
        variant: "tertiary",
        color: "text-secondary",
        borderColor: "text-secondary",
        iconSpacing: 8,
        children: _v28.default.NewOption
      })]
    });
  };
  var _v312 = _v26,
    _v313 = _v0.i(0),
    _v314 = _v0.i(0),
    _v315 = _v0.i(0);
  let _v316 = (0, _v4.forwardRef)(({
      content: _v0,
      maxCharacter: _v1 = 0,
      autoFocus: _v2 = !1,
      isRequired: _v3 = !1,
      resetOnEmpty: _v4 = !1,
      resetOnBlockedText: _v5 = !1,
      blockedText: _v6,
      onBlur: _v7,
      onFocus: _v8,
      ..._v9
    }) => {
      let [_v10, _v11] = (0, _v4.useState)(0),
        _v12 = (0, _v4.useRef)(null),
        _v13 = (0, _v4.useRef)(null),
        _v14 = (0, _v4.useRef)(null),
        _v15 = (0, _v4.useRef)(null),
        _v16 = (_v0 => {
          let [_v1, _v2] = (0, _v4.useState)(!1);
          return (0, _v4.useEffect)(() => {
            let _v0 = () => _v2(!0),
              _v1 = () => _v2(!1),
              _v2 = _v0.current;
            return _v2 && (_v2.addEventListener("focusin", _v0), _v2.addEventListener("focusout", _v1)), () => {
              _v2 && (_v2.removeEventListener("focusin", _v0), _v2.removeEventListener("focusout", _v1));
            };
          }, [_v0]), _v1;
        })(_v15),
        _v17 = (0, _v49.useIsBokeh)(),
        _v18 = _v12.current?.getEditor(),
        _v19 = _v18?.getAttributes("link").href,
        [_v20, _v21] = (0, _v4.useState)(_v19),
        [_v22, _v23] = (0, _v4.useState)(!1),
        [_v24, _v25] = (0, _v4.useState)(!1),
        [_v26, _v27] = (0, _v4.useState)(_v6?.includes(_v12.current?.getText() || ""));
      return (0, _v4.useEffect)(() => {
        setTimeout(() => {
          _v2 && _v12.current?.focus();
        }, 0);
      }, []), (0, _v4.useEffect)(() => {
        let _v0 = _v12.current?.getHTML();
        _v0 && _v0 && _v0 !== _v0 && _v12.current?.setHTML(_v0);
      }, [_v0]), (0, _v4.useEffect)(() => {
        _v27(_v6?.includes(_v12.current?.getText() || ""));
      }, [_v6]), (0, _v1.jsxs)(_v6.Flex, {
        flex: 1,
        flexDirection: "column",
        ref: _v15,
        "data-group": !0,
        children: [(0, _v1.jsxs)(_v6.Flex, {
          flex: 1,
          borderRadius: "xs",
          flexDirection: "column",
          border: `${(0, _v7.rem)(1)} solid`,
          borderColor: _v26 ? "red.300" : "transparent",
          _hover: {
            borderColor: _v26 ? "red.300" : "input-stroke"
          },
          _focusWithin: {
            border: `${(0, _v7.rem)(2)} solid`,
            borderColor: _v26 ? "red.300" : "input-fill"
          },
          ..._v9,
          "data-group": !0,
          "data-peer": !0,
          children: [(0, _v1.jsx)(_v6.Flex, {
            height: _v16 ? "auto" : 0,
            overflow: "hidden",
            children: (0, _v1.jsxs)(_v176.Popover, {
              placement: "top",
              onOpen: () => {
                _v21(_v19), setTimeout(() => {
                  _v14.current?.focus();
                }, 10);
              },
              isLazy: !0,
              children: [(0, _v1.jsx)(_v52.Tooltip, {
                placement: "top",
                label: _v28.default.Hyperlink,
                children: (0, _v1.jsx)(_v5.Box, {
                  children: (0, _v1.jsx)(_v178.PopoverTrigger, {
                    children: (0, _v1.jsx)(_v42.IconButton, {
                      ref: _v13,
                      "aria-label": "Link",
                      size: "xs",
                      mt: "xs",
                      mb: "sm",
                      variant: "tertiary",
                      isDisabled: !_v22 || _v26,
                      icon: (0, _v1.jsx)(_v313.Link, {})
                    })
                  })
                })
              }), (0, _v1.jsx)(_v177.PopoverContent, {
                children: (0, _v1.jsxs)(_v6.Flex, {
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderRadius: (0, _v7.rem)(8),
                  children: [(0, _v1.jsx)(_v96.Input, {
                    ref: _v14,
                    marginRight: (0, _v7.rem)(8),
                    fontSize: (0, _v7.rem)(16),
                    onChange: _v0 => {
                      let _v1 = _v0.target.value;
                      _v21((0, _v128.isValidUrl)((0, _v128.appendProtocol)(_v1)) ? (0, _v128.appendProtocol)(_v1) : _v1);
                    },
                    value: _v20,
                    placeholder: _v28.default.AddALink,
                    size: "sm",
                    onFocus: () => _v25(!0),
                    onBlur: () => _v25(!1),
                    isInvalid: _v20?.length && !(0, _v128.isValidUrl)(_v20) && !_v24,
                    autoFocus: !0
                  }), _v19 !== _v20 || void 0 == _v19 ? (0, _v1.jsxs)(_v1.Fragment, {
                    children: [(0, _v1.jsx)(_v42.IconButton, {
                      onClick: () => _v13.current?.click(),
                      size: "sm",
                      variant: "tertiary",
                      icon: (0, _v1.jsx)(_v137.CloseXSmall, {}),
                      "aria-label": "Close"
                    }), (0, _v1.jsx)(_v42.IconButton, {
                      onClick: () => _v12.current?.addLink(_v20),
                      isDisabled: !(0, _v128.isValidUrl)(_v20),
                      size: "sm",
                      variant: "tertiary",
                      icon: (0, _v1.jsx)(_v258.Checkmark, {}),
                      "aria-label": "Link"
                    })]
                  }) : (0, _v1.jsxs)(_v1.Fragment, {
                    children: [(0, _v1.jsx)(_v42.IconButton, {
                      variant: "tertiary",
                      onClick: () => {
                        _v12.current?.removeLink(), _v21("");
                      },
                      size: "sm",
                      "aria-label": "Unlink",
                      icon: (0, _v1.jsx)(_v314.LinkBroken, {})
                    }), (0, _v1.jsx)(_v42.IconButton, {
                      onClick: () => window.open(_v19, "_blank"),
                      size: "sm",
                      "aria-label": "Open",
                      variant: "tertiary",
                      icon: (0, _v1.jsx)(_v29.PopOut, {})
                    })]
                  })]
                })
              })]
            })
          }), (0, _v1.jsxs)(_v6.Flex, {
            flexDir: "column",
            position: "relative",
            "data-peer": !0,
            children: [(0, _v1.jsx)(_v315.EditableTextWithRTF, {
              ref: _v12,
              content: _v0,
              editable: !0,
              maxCharacter: _v1,
              onBlur: () => {
                _v4 && !_v12.current?.getText() && _v12.current?.setHTML(_v0), _v5 && _v26 && _v12.current?.setHTML(_v0), _v7?.(_v12.current?.getHTML()), _v27(_v6?.includes(_v12.current?.getText() || ""));
              },
              onFocus: _v8,
              noOfLines: _v16 ? 8 : 1,
              onKeyDown: () => _v11(_v18?.getText().length || 0),
              onUpdate: () => _v27(_v6?.includes(_v12.current?.getText() || "")),
              onSelectionUpdate: () => {
                let _v0 = _v18?.view.state.selection,
                  _v1 = _v18?.state.doc.textBetween(_v0?.from || 0, _v0?.to || 0, "");
                _v23(!!(_v1 && _v1.trim().length > 0));
              },
              width: "100%",
              overflowY: _v16 ? "auto" : "hidden",
              scrollTopOnBlur: !0
            }), !_v16 && _v3 && (0, _v1.jsxs)(_v6.Flex, {
              pointerEvents: "none",
              position: "absolute",
              top: (0, _v7.rem)(-2),
              children: [(0, _v1.jsx)(_v6.Flex, {
                height: 0,
                overflow: "hidden",
                children: (0, _v1.jsx)(_v315.EditableTextWithRTF, {
                  content: _v0
                })
              }), (0, _v1.jsx)(_v290.Asterisk, {
                ml: (0, _v7.rem)(4 * !_v17),
                color: "red.500",
                boxSize: (0, _v7.rem)(10),
                _groupHover: {
                  display: "none"
                }
              })]
            })]
          })]
        }), _v10 > _v1 / 2 && (0, _v1.jsx)(_v5.Box, {
          display: "none",
          _peerFocusWithin: {
            display: "block"
          },
          textAlign: "right",
          width: "100%",
          marginTop: "xs",
          children: (0, _v1.jsxs)(_v45.Text, {
            variant: "body-xs",
            color: "text-secondary",
            children: [_v10, " / ", _v1]
          })
        })]
      });
    }),
    _v317 = ({
      existingNames: _v0,
      item: _v1,
      index: _v2,
      moveSteps: _v3 = 0,
      showOptions: _v4 = !1,
      itemsGap: _v5 = _v312.DEFAULT_LIST_ITEM_GAP,
      draggedItemRef: _v6,
      autoFocus: _v7 = !1,
      popoverPortalRef: _v8,
      onDragStart: _v9 = () => void 0,
      onDrag: _v10 = () => void 0,
      onDragEnd: _v11 = () => void 0,
      updateFieldName: _v12 = () => void 0,
      updateRequired: _v13 = () => void 0,
      updateLocked: _v14 = () => void 0,
      updateStatic: _v15 = () => void 0,
      updateOptions: _v16 = () => void 0,
      deleteField: _v17 = () => void 0,
      addProviderField: _v18,
      removeProviderField: _v19,
      allowLargeNames: _v20 = !1
    }) => {
      let [_v21, _v22] = (0, _v4.useState)(!1),
        _v23 = _v20 ? _v312.MAX_CHECKBOX_FIELD_NAME_LENGTH_LARGE : _v312.MAX_CHECKBOX_FIELD_NAME_LENGTH,
        _v24 = _v20 ? _v312.MAX_DESCRIPTION_FIELD_NAME_LENGTH_LARGE : _v312.MAX_DESCRIPTION_FIELD_NAME_LENGTH,
        _v25 = _v1.type === _v312.CustomFieldTypes.Description ? _v24 : _v312.MAX_FIELD_NAME_LENGTH,
        {
          isOwnerOrAdmin: _v26
        } = (0, _v58.usePermissionStore)(),
        _v27 = (0, _v23.useGlobalStore)(_v0 => _v0.setCurrentSelectedFieldIndex),
        _v28 = _v26 ? _v1.isLocked || _v1.isStatic : _v1.isLocked,
        _v29 = !_v26 && _v1.isLocked,
        _v30 = _v1.isLocked && _v1.isStatic ? _v28.default.NonEditableNonRemovable : _v1.isLocked ? _v28.default.NonEditable : _v28.default.NonRemovable,
        _v31 = (0, _v4.useRef)(null),
        _v32 = (0, _v4.useRef)(null),
        _v33 = (0, _v4.useRef)(null),
        _v34 = (0, _v4.useMemo)(() => {
          let {
            y: _v0
          } = (0, _v98.getTranslateValues)(_v32.current);
          return _v299.keyframes`
      0%{
        transform: translateY(${_v0}px);
      }
      100%{
        transform: translateY(${(_v3 || 0) * ((_v6?.current?.offsetHeight || 38) + _v5)}px);
      }
    `;
        }, [_v3, _v6, _v5]),
        _v35 = _v0 => {
          _v32.current && (_v32.current.style.opacity = 1 === _v0.buttons ? "0" : "100");
        };
      return (0, _v1.jsxs)(_v5.Box, {
        ref: _v32,
        borderRadius: "sm",
        position: "relative",
        background: "surface",
        border: "1px solid",
        borderColor: "input-stroke",
        animation: `${_v34} 500ms ease forwards`,
        draggable: !_v29 && _v21,
        onClick: () => _v27(_v2),
        onDrag: _v0 => {
          _v0.preventDefault(), _v10(_v0), _v35(_v0);
        },
        onDragEnd: _v0 => {
          _v11(), document.body.ondragover = _v31.current, _v35(_v0);
        },
        onDragStart: () => {
          _v9(_v2, _v32), _v31.current = document.body.ondragover, document.body.ondragover = _v0 => {
            _v0.preventDefault();
          };
        },
        role: "group",
        padding: "xs",
        minHeight: (0, _v7.rem)(32),
        opacity: _v29 ? .5 : void 0,
        pointerEvents: _v29 ? "none" : void 0,
        children: [(0, _v1.jsxs)(_v6.Flex, {
          children: [(0, _v1.jsxs)(_v130.Center, {
            ml: "sm",
            boxSize: (0, _v7.rem)(24),
            children: [(0, _v1.jsx)(_v6.Flex, {
              cursor: "move",
              display: "none",
              _groupHover: {
                display: "flex"
              },
              children: (0, _v1.jsx)(_v301.DragV, {
                color: "text-secondary",
                boxSize: (0, _v7.rem)(20),
                onMouseEnter: () => _v22(!0),
                onMouseLeave: () => _v22(!1)
              })
            }), (0, _v1.jsx)(_v5.Box, {
              _groupHover: {
                display: "none"
              },
              children: _v28 ? (0, _v1.jsx)(_v52.Tooltip, {
                label: _v30,
                placement: "top",
                closeOnScroll: !0,
                children: (0, _v1.jsx)(_v302.Lock, {
                  width: (0, _v7.rem)(18),
                  color: "text-secondary",
                  mr: "xs"
                })
              }) : (0, _v1.jsxs)(_v1.Fragment, {
                children: [_v1.type === _v312.CustomFieldTypes.Text && (0, _v1.jsx)(_v303.Text, {
                  width: (0, _v7.rem)(18),
                  color: "text-secondary",
                  mr: "xs"
                }), _v1.type === _v312.CustomFieldTypes.Checkbox && (0, _v1.jsx)(_v258.Checkmark, {
                  width: (0, _v7.rem)(18),
                  mr: "xs",
                  color: "text-secondary"
                }), _v1.type === _v312.CustomFieldTypes.Dropdown && (0, _v1.jsx)(_v300, {
                  width: (0, _v7.rem)(20),
                  mr: "xs",
                  color: "text-secondary",
                  borderColor: "text-secondary",
                  borderRadius: "100%"
                })]
              })
            })]
          }), (0, _v1.jsx)(_v130.Center, {
            flex: 1,
            minHeight: (0, _v7.rem)(24),
            "data-peer": !0,
            children: _v1.type === _v312.CustomFieldTypes.Checkbox ? (0, _v1.jsx)(_v316, {
              ref: _v33,
              content: _v1.metadata?.description || "",
              maxCharacter: _v23,
              onBlur: _v0 => {
                _v0 && _v1.metadata?.description !== _v0 && _v12?.(_v0 + "", _v2);
              },
              isRequired: _v1.isRequired,
              autoFocus: _v7,
              pl: (0, _v7.rem)(6),
              overflow: "hidden",
              wordBreak: "break-word",
              blockedText: _v0,
              resetOnEmpty: !0,
              resetOnBlockedText: !0
            }, _v1.cid + _v23) : (0, _v1.jsx)(_v291, {
              autoFocus: _v7,
              value: _v1.name,
              onBlur: _v0 => {
                var _v1;
                (_v1 = _v0.target.value) && _v12?.(_v1, _v2);
              },
              maxLength: _v25,
              editable: !_v1.isLocked,
              required: _v1.isRequired,
              blockedText: _v0
            }, _v1.cid + _v25)
          }), (0, _v1.jsx)(_v130.Center, {
            height: (0, _v7.rem)(24),
            _peerFocusWithin: {
              display: "none"
            },
            children: (0, _v1.jsx)(_v307, {
              item: _v1,
              popoverPortalRef: _v8,
              onRequiredChange: _v0 => {
                _v13?.(_v0, _v2);
              },
              onLockedChange: _v0 => {
                _v14?.(_v0, _v2);
              },
              onStaticChange: _v0 => {
                _v15?.(_v0, _v2);
              },
              onDelete: () => {
                _v1.isLocked || _v17?.(_v2);
              },
              addProviderField: _v0 => {
                _v18(_v0, _v2);
              },
              removeProviderField: _v0 => {
                _v19(_v0, _v2);
              }
            })
          })]
        }), _v1.type === _v312.CustomFieldTypes.Dropdown && _v4 && (0, _v1.jsx)(_v311, {
          options: _v1.metadata?.options,
          updateOptions: _v0 => {
            _v16?.(_v0, _v2);
          }
        })]
      });
    },
    _v318 = ({
      item: _v0,
      popoverPortalRef: _v1,
      onRequiredChange: _v2 = () => void 0,
      onDelete: _v3 = () => void 0,
      addProviderField: _v4,
      removeProviderField: _v5
    }) => {
      let {
          isOpen: _v6,
          onOpen: _v7,
          onClose: _v8
        } = (0, _v143.useDisclosure)(),
        {
          isOpen: _v9,
          onOpen: _v10,
          onClose: _v11
        } = (0, _v143.useDisclosure)(),
        _v12 = _v0.connectedFields?.find(_v0 => _v0.emailServiceProviderType === _v26.ProviderTypes.TYPE_MARKETO) != void 0,
        _v13 = (0, _v23.useGlobalStore)(_v0 => _v0.providers).find(_v0 => _v0.serviceType === _v26.ProviderTypes.TYPE_MARKETO)?.connected,
        _v14 = (0, _v22.useEscapeKey)(_v6, _v8),
        _v15 = _v0.isLocked && !_v0.isStatic,
        _v16 = _v0.isLocked || _v0.isStatic;
      return (0, _v1.jsxs)(_v130.Center, {
        ml: (0, _v7.rem)(4),
        children: [(0, _v1.jsxs)(_v64.Menu, {
          closeOnSelect: !1,
          isOpen: _v9,
          onOpen: _v10,
          onClose: _v11,
          placement: "right",
          children: [(0, _v1.jsx)(_v271.MenuButton, {
            "aria-label": "menu",
            as: _v42.IconButton,
            icon: (0, _v1.jsx)(_v272.EllipsisV, {}),
            variant: "tertiary",
            size: "xs",
            sx: {
              minWidth: "0 !important",
              width: "0",
              clipPath: "inset(100%)"
            },
            _groupHover: {
              minWidth: "max-content ",
              width: "unset",
              clipPath: "unset"
            }
          }), (0, _v1.jsx)(_v285.Portal, {
            children: (0, _v1.jsxs)(_v66.MenuList, {
              color: "text-primary",
              minWidth: (0, _v7.rem)(200),
              zIndex: 0,
              tabIndex: 0,
              children: [(0, _v1.jsx)(_v305.MenuGroup, {
                children: (0, _v1.jsxs)(_v65.MenuItem, {
                  justifyContent: "space-between",
                  py: (0, _v7.rem)(11),
                  px: (0, _v7.rem)(14),
                  isDisabled: _v15,
                  onClick: _v0 => 0 == _v0.detail && _v2(!_v0.isRequired),
                  children: [(0, _v1.jsx)(_v45.Text, {
                    variant: "body-md",
                    children: _v28.default.Required
                  }), (0, _v1.jsx)(_v132.Switch, {
                    isDisabled: _v15,
                    onChange: _v0 => _v2(_v0.target.checked),
                    isChecked: _v0.isRequired,
                    size: "sm"
                  })]
                })
              }), (0, _v1.jsx)(_v304.MenuDivider, {}), _v13 ? (0, _v1.jsxs)(_v65.MenuItem, {
                onClick: _v7,
                py: (0, _v7.rem)(11),
                px: (0, _v7.rem)(14),
                closeOnSelect: !0,
                children: [_v12 ? (0, _v1.jsx)(_v287, {}) : (0, _v1.jsx)(_v286, {}), (0, _v1.jsx)(_v45.Text, {
                  ml: "10",
                  variant: "body-md",
                  children: _v28.default.AddMarketoField
                })]
              }) : _v15 && (0, _v1.jsx)(_v65.MenuItem, {
                p: "0"
              }), (0, _v1.jsxs)(_v65.MenuItem, {
                onClick: _v3,
                onKeyDown: _v0 => _v0.key === _v26.KEY_CODES.ENTER && !_v0.isStatic && !_v0.isLocked && _v3(),
                isDisabled: _v16,
                py: (0, _v7.rem)(11),
                px: (0, _v7.rem)(14),
                children: [(0, _v1.jsx)(_v262.TrashBin, {
                  mr: "10"
                }), " ", (0, _v1.jsx)(_v45.Text, {
                  variant: "body-md",
                  children: _v28.default.Delete
                })]
              })]
            })
          })]
        }), (0, _v1.jsxs)(_v176.Popover, {
          isLazy: !0,
          strategy: "fixed",
          placement: "right",
          isOpen: _v6,
          onOpen: _v7,
          onClose: _v8,
          children: [(0, _v1.jsx)(_v178.PopoverTrigger, {
            children: (0, _v1.jsx)("div", {})
          }), (0, _v1.jsx)(_v285.Portal, {
            containerRef: _v1,
            children: (0, _v1.jsx)(_v177.PopoverContent, {
              height: "94vh",
              w: (0, _v7.rem)(320),
              mb: "3vh",
              onKeyDown: _v14,
              children: (0, _v1.jsx)(_v296, {
                providerType: _v26.ProviderTypes.TYPE_MARKETO,
                item: _v0,
                onClose: _v8,
                addProviderField: _v4,
                removeProviderField: _v5
              })
            })
          })]
        })]
      });
    };
  var _v319 = _v26;
  let _v320 = ({
    existingNames: _v0,
    item: _v1,
    index: _v2,
    moveSteps: _v3 = 0,
    showOptions: _v4 = !1,
    itemsGap: _v5 = _v319.DEFAULT_LIST_ITEM_GAP,
    draggedItemRef: _v6,
    autoFocus: _v7 = !1,
    popoverPortalRef: _v8,
    onDragStart: _v9 = () => void 0,
    onDrag: _v10 = () => void 0,
    onDragEnd: _v11 = () => void 0,
    updateFieldName: _v12 = () => void 0,
    updateRequired: _v13 = () => void 0,
    updateOptions: _v14 = () => void 0,
    deleteField: _v15 = () => void 0,
    addProviderField: _v16,
    removeProviderField: _v17,
    allowLargeNames: _v18 = !1
  }) => {
    let [_v19, _v20] = (0, _v4.useState)(!1),
      _v21 = _v18 ? _v319.MAX_CHECKBOX_FIELD_NAME_LENGTH_LARGE : _v319.MAX_CHECKBOX_FIELD_NAME_LENGTH,
      _v22 = _v18 ? _v319.MAX_DESCRIPTION_FIELD_NAME_LENGTH_LARGE : _v319.MAX_DESCRIPTION_FIELD_NAME_LENGTH,
      _v23 = _v1.type === _v319.CustomFieldTypes.Description ? _v22 : _v319.MAX_FIELD_NAME_LENGTH,
      _v24 = (0, _v23.useGlobalStore)(_v0 => _v0.setCurrentSelectedFieldIndex),
      _v25 = (0, _v4.useRef)(null),
      _v26 = (0, _v4.useRef)(null),
      _v27 = (0, _v4.useRef)(null),
      _v28 = (0, _v4.useMemo)(() => {
        let {
          y: _v0
        } = (0, _v98.getTranslateValues)(_v26.current);
        return _v299.keyframes`
      0%{
        transform: translateY(${_v0}px);
      }
      100%{
        transform: translateY(${(_v3 || 0) * ((_v6?.current?.offsetHeight || 38) + _v5)}px);
      }
    `;
      }, [_v3, _v6, _v5]),
      _v29 = _v0 => {
        _v26.current && (_v26.current.style.opacity = 1 === _v0.buttons ? "0" : "100");
      };
    return (0, _v1.jsxs)(_v5.Box, {
      ref: _v26,
      borderRadius: "sm",
      position: "relative",
      background: "surface",
      border: "1px solid",
      borderColor: "input-stroke",
      animation: `${_v28} 500ms ease forwards`,
      draggable: _v19,
      onClick: () => _v24(_v2),
      onDrag: _v0 => {
        _v0.preventDefault(), _v10(_v0), _v29(_v0);
      },
      onDragEnd: _v0 => {
        _v11(), document.body.ondragover = _v25.current, _v29(_v0);
      },
      onDragStart: () => {
        _v9(_v2, _v26), _v25.current = document.body.ondragover, document.body.ondragover = _v0 => {
          _v0.preventDefault();
        };
      },
      role: "group",
      padding: "xs",
      minHeight: (0, _v7.rem)(32),
      children: [(0, _v1.jsxs)(_v6.Flex, {
        children: [(0, _v1.jsxs)(_v130.Center, {
          ml: "sm",
          boxSize: (0, _v7.rem)(24),
          children: [(0, _v1.jsx)(_v6.Flex, {
            cursor: "move",
            display: "none",
            _groupHover: {
              display: "flex"
            },
            children: (0, _v1.jsx)(_v301.DragV, {
              color: "text-secondary",
              boxSize: (0, _v7.rem)(20),
              onMouseEnter: () => _v20(!0),
              onMouseLeave: () => _v20(!1)
            })
          }), (0, _v1.jsxs)(_v5.Box, {
            _groupHover: {
              display: "none"
            },
            children: [_v1.type === _v319.CustomFieldTypes.Text && (0, _v1.jsx)(_v303.Text, {
              width: (0, _v7.rem)(18),
              color: "text-secondary",
              mr: "xs"
            }), _v1.type === _v319.CustomFieldTypes.Checkbox && (0, _v1.jsx)(_v258.Checkmark, {
              width: (0, _v7.rem)(18),
              mr: "xs",
              color: "text-secondary"
            }), _v1.type === _v319.CustomFieldTypes.Dropdown && (0, _v1.jsx)(_v300, {
              width: (0, _v7.rem)(20),
              mr: "xs",
              color: "text-secondary",
              borderColor: "text-secondary",
              borderRadius: "100%"
            }), _v1.type === _v319.CustomFieldTypes.Description && (0, _v1.jsx)(_v234.AlignLeft, {
              width: (0, _v7.rem)(18),
              color: "text-secondary",
              mr: "xs"
            })]
          })]
        }), (0, _v1.jsx)(_v130.Center, {
          flex: 1,
          minHeight: (0, _v7.rem)(24),
          "data-peer": !0,
          children: _v1.type !== _v319.CustomFieldTypes.Checkbox ? (0, _v1.jsx)(_v291, {
            autoFocus: _v7,
            value: _v1.name,
            onBlur: _v0 => {
              var _v1;
              (_v1 = _v0.target.value) && _v12?.(_v1, _v2);
            },
            maxLength: _v23,
            editable: !_v1.isLocked && !_v1.isStatic,
            required: _v1.isRequired,
            blockedText: _v0
          }, _v1.cid + _v23) : (0, _v1.jsx)(_v316, {
            ref: _v27,
            content: _v1.metadata?.description || "",
            maxCharacter: _v21,
            onBlur: _v0 => {
              _v0 && _v1.metadata?.description !== _v0 && _v12?.(_v0 + "", _v2);
            },
            isRequired: _v1.isRequired,
            autoFocus: _v7,
            pl: (0, _v7.rem)(6),
            overflow: "hidden",
            wordBreak: "break-word",
            blockedText: _v0,
            resetOnEmpty: !0,
            resetOnBlockedText: !0
          }, _v1.cid + _v21)
        }), (0, _v1.jsx)(_v130.Center, {
          height: (0, _v7.rem)(24),
          _peerFocusWithin: {
            display: "none"
          },
          children: (0, _v1.jsx)(_v318, {
            item: _v1,
            popoverPortalRef: _v8,
            onRequiredChange: _v0 => {
              _v13?.(_v0, _v2);
            },
            onDelete: () => {
              _v1.isLocked || _v15?.(_v2);
            },
            addProviderField: _v0 => {
              _v16(_v0, _v2);
            },
            removeProviderField: _v0 => {
              _v17(_v0, _v2);
            }
          })
        })]
      }), _v1.type === _v319.CustomFieldTypes.Dropdown && _v4 && (0, _v1.jsx)(_v311, {
        options: _v1.metadata?.options,
        updateOptions: _v0 => {
          _v14?.(_v0, _v2);
        }
      })]
    });
  };
  var _v321 = _v26;
  let _v322 = {
      [_v321.CustomFieldTypes.Text]: "text_input",
      [_v321.CustomFieldTypes.Dropdown]: "dropdown",
      [_v321.CustomFieldTypes.Checkbox]: "checkbox",
      [_v321.CustomFieldTypes.Description]: "description"
    },
    _v323 = ({
      items: _v0 = [],
      itemsGap: _v1 = _v321.DEFAULT_LIST_ITEM_GAP,
      updateItems: _v2
    }) => {
      let [_v3, _v4] = (0, _v4.useState)(!1),
        [_v5, _v6] = (0, _v4.useState)(!1),
        [_v7, _v8] = (0, _v4.useState)(-1),
        _v9 = (0, _v4.useRef)(-1),
        _v10 = (0, _v4.useRef)(-1),
        [_v11, _v12] = (0, _v4.useState)(_v0.map(() => 0)),
        _v13 = (0, _v4.useRef)(void 0),
        {
          sendRegistrationActionBP: _v14
        } = _v92(),
        {
          onFormFieldAdded: _v15
        } = (0, _v97.useCallbackContext)(),
        {
          trackLiveStreamRegistrationFieldAdded: _v16
        } = (0, _v135.useLiveStreamBroadcasterTracking)(),
        _v17 = (0, _v23.useGlobalStore)(_v0 => _v0.entityType),
        _v18 = (0, _v23.useGlobalStore)(_v0 => _v0.entityOwnerId),
        _v19 = (0, _v4.useRef)(null),
        {
          capabilities: _v20,
          ready: _v21
        } = (0, _v9.useCapability)(["hasAdminForcedPreset", "hasAllowLargeLeadCaptureNames"], _v18),
        {
          settings: _v22
        } = (0, _v20.useOrionSettings)(),
        _v23 = _v22.enable_large_lead_capture_form_field_names || _v21 && !!_v20?.hasAllowLargeLeadCaptureNames,
        _v24 = _v21 && !!_v20?.hasAdminForcedPreset || _v22.enable_admin_forced_preset,
        _v25 = _v0.map(_v0 => _v0.name),
        _v26 = (_v0, _v1) => {
          _v9.current = _v0, _v13.current = _v1, _v6(!1);
        },
        _v27 = () => {
          _v4(!0);
        },
        _v28 = () => {
          let _v0 = [..._v0],
            _v1 = _v0.splice(_v9.current, 1)[0];
          _v0.splice(_v10.current, 0, _v1), _v0 = _v0.map((_v0, _v1) => ({
            ..._v0,
            position: _v1 + 1
          })), _v2?.(_v0), _v12(_v0.map(() => 0)), _v4(!1), _v8(_v10.current);
        },
        _v29 = (_v0, _v1) => {
          let _v2 = [..._v0];
          _v2[_v1] = {
            ..._v2[_v1],
            metadata: {
              ..._v2[_v1].metadata,
              options: [..._v0]
            }
          }, _v2?.(_v2), _v8(_v1);
        },
        _v30 = (_v0, _v1, _v2) => {
          let _v3 = [..._v0],
            _v4 = _v3[_v2].metadata,
            _v5 = _v3[_v2].type;
          "type" === _v0 ? _v4 = _v1 === _v321.CustomFieldTypes.Dropdown ? _v4?.options ? _v4 : {
            options: [{
              optionLabel: "Option 1",
              optionPosition: 1,
              cid: 1
            }, {
              optionLabel: "Option 2",
              optionPosition: 2,
              cid: 2
            }]
          } : void 0 : "name" === _v0 && _v5 === _v321.CustomFieldTypes.Checkbox && "string" == typeof _v1 && (_v4 = {
            ..._v4,
            description: _v1
          }, _v1 = (0, _v98.htmlToText)(_v1)), _v3[_v2] = {
            ..._v3[_v2],
            [_v0]: _v1,
            metadata: _v4
          }, _v2?.(_v3);
        },
        _v31 = _v0 => {
          let _v1 = [..._v0],
            _v2 = _v90.FIELD_TO_TYPE_MAPPING[_v1[_v0].type];
          _v1.splice(_v0, 1), _v1 = _v1.map((_v0, _v1) => ({
            ..._v0,
            position: _v1 + 1
          })), _v2?.(_v1), _v14({
            actionName: _v90.BP_ACTION_NAME.DELETE_REGISTRATION_FIELD,
            type: _v2
          });
        },
        _v32 = (_v0, _v1) => {
          let _v2 = (0, _v98.getUpdatedItemsAddProvider)([..._v0], _v0, _v1);
          _v2?.(_v2);
        },
        _v33 = (_v0, _v1) => {
          let _v2 = (0, _v98.getUpdatedItemsRemoveProvider)([..._v0], _v0, _v1);
          _v2?.(_v2);
        },
        _v34 = (_v0, _v1) => {
          _v0.find(_v0 => _v0.name === _v0) || _v30("name", _v0, _v1);
        };
      return (0, _v1.jsxs)(_v6.Flex, {
        width: "100%",
        flexDirection: "column",
        position: "relative",
        gap: (0, _v7.rem)(_v1),
        children: [_v0.map((_v0, _v1) => (0, _v1.jsxs)(_v5.Box, {
          position: "relative",
          onFocus: () => _v8(_v1),
          onClick: () => _v8(_v1),
          children: [_v24 ? (0, _v1.jsx)(_v317, {
            existingNames: _v25.filter((_v0, _v1) => _v1 !== _v1),
            index: _v1,
            item: _v0,
            itemsGap: _v1,
            draggedItemRef: _v13.current ?? void 0,
            moveSteps: _v11[_v1],
            onDragStart: _v26,
            onDrag: _v27,
            onDragEnd: _v28,
            showOptions: _v7 === _v1,
            autoFocus: _v5,
            popoverPortalRef: _v19,
            updateOptions: _v29,
            updateFieldName: _v34,
            updateRequired: (_v0, _v1) => _v30("isRequired", _v0, _v1),
            updateLocked: (_v0, _v1) => _v30("isLocked", _v0, _v1),
            updateStatic: (_v0, _v1) => _v30("isStatic", _v0, _v1),
            deleteField: _v31,
            addProviderField: _v32,
            removeProviderField: _v33,
            allowLargeNames: _v23
          }, _v0.cid) : (0, _v1.jsx)(_v320, {
            existingNames: _v25.filter((_v0, _v1) => _v1 !== _v1),
            index: _v1,
            item: _v0,
            itemsGap: _v1,
            draggedItemRef: _v13.current ?? void 0,
            moveSteps: _v11[_v1],
            onDragStart: _v26,
            onDrag: _v27,
            onDragEnd: _v28,
            showOptions: _v7 === _v1,
            autoFocus: _v5,
            popoverPortalRef: _v19,
            updateOptions: _v29,
            updateFieldName: _v34,
            updateRequired: (_v0, _v1) => _v30("isRequired", _v0, _v1),
            deleteField: _v31,
            addProviderField: _v32,
            removeProviderField: _v33,
            allowLargeNames: _v23
          }, _v0.cid), (0, _v1.jsx)(_v5.Box, {
            width: "100%",
            height: (0, _v7.rem)(33),
            position: "absolute",
            bottom: 0,
            zIndex: 10 * !!_v3,
            pointerEvents: _v3 ? "auto" : "none",
            onDragEnter: () => (_v0 => {
              _v10.current = _v0;
              let _v1 = _v9.current,
                _v2 = _v11.map(() => 0);
              if (_v1 === _v0) return void _v12(_v2);
              if (_v1 < _v0) for (let _v0 = _v1 + 1; _v0 <= _v0; _v0++) _v2[_v0] = -1;else for (let _v0 = _v0; _v0 < _v1; _v0++) _v2[_v0] = 1;
              _v12(_v2);
            })(_v1)
          })]
        }, _v1)), (0, _v1.jsx)(_v324, {
          isDisabled: _v0.length >= 20,
          addField: _v0 => {
            let _v1 = _v0.length > 0 ? Math.max(..._v0.map(_v0 => _v0.cid)) + 1 : 1,
              _v2 = [..._v0],
              _v3 = _v2.map(_v0 => _v0.name),
              _v4 = `${_v321.DEFAULT_CUSTOM_FIELD_VALUES.name} ${_v2.length + 1}`,
              _v5 = 0;
            for (; _v3.includes(_v4);) _v5++, _v4 = `${_v321.DEFAULT_CUSTOM_FIELD_VALUES.name} ${_v2.length + 1 + _v5}`;
            let _v6 = {
              ..._v321.DEFAULT_CUSTOM_FIELD_VALUES,
              name: _v4,
              cid: _v1,
              position: _v2.length + 1,
              type: _v0,
              isStatic: !1,
              metadata: _v0 === _v321.CustomFieldTypes.Dropdown ? {
                options: [{
                  optionLabel: "Option 1",
                  optionPosition: 1,
                  cid: 1
                }, {
                  optionLabel: "Option 2",
                  optionPosition: 2,
                  cid: 2
                }]
              } : _v0 === _v321.CustomFieldTypes.Checkbox ? {
                description: `<p style="text-align: inherit">${_v4}</p>`
              } : void 0
            };
            _v2.push(_v6), _v12((_v2 = _v2.map((_v0, _v1) => ({
              ..._v0,
              position: _v1 + 1
            }))).map(() => 0)), _v2?.(_v2), _v8(_v2.length - 1), _v6(!0), _v15?.(_v322[_v0] || _v0), _v14({
              actionName: _v90.FIELD_TYPE_TO_ACTION_MAPPING[_v0]
            }), _v17 === _v18.ENTITY_TYPE.EVENT && _v16({
              liveStreamFieldCategory: "registration_field"
            });
          },
          showDescriptionField: _v23
        }), (0, _v1.jsx)("div", {
          ref: _v19
        })]
      });
    },
    _v324 = ({
      isDisabled: _v0 = !1,
      addField: _v1 = () => void 0,
      showDescriptionField: _v2 = !1
    }) => {
      let {
          isOpen: _v3,
          onOpen: _v4,
          onClose: _v5,
          onToggle: _v6
        } = (0, _v143.useDisclosure)(),
        _v7 = (0, _v4.useRef)(null),
        _v8 = _v0 => {
          _v1(_v0);
        },
        _v9 = (0, _v22.useEscapeKey)(_v3, _v5);
      return (0, _v1.jsxs)(_v176.Popover, {
        isLazy: !0,
        isOpen: _v3,
        onOpen: _v4,
        onClose: _v5,
        children: [(0, _v1.jsx)(_v178.PopoverTrigger, {
          children: _v0 ? (0, _v1.jsx)(_v52.Tooltip, {
            label: _v28.default.ContactFormLimit20,
            children: (0, _v1.jsx)(_v5.Box, {
              children: (0, _v1.jsx)(_v12.Button, {
                isDisabled: !0,
                leftIcon: (0, _v1.jsx)(_v267.PlusCircle, {
                  color: "text-secondary"
                }),
                variant: "tertiary",
                color: "text-secondary",
                borderColor: "text-secondary",
                iconSpacing: (0, _v7.rem)(8),
                width: "100%",
                children: _v28.default.NewField
              })
            })
          }) : (0, _v1.jsx)(_v12.Button, {
            leftIcon: (0, _v1.jsx)(_v267.PlusCircle, {
              color: "text-secondary"
            }),
            variant: "tertiary",
            color: "text-secondary",
            borderColor: "text-secondary",
            iconSpacing: (0, _v7.rem)(8),
            children: _v28.default.NewField
          })
        }), (0, _v1.jsx)(_v177.PopoverContent, {
          borderRadius: "md",
          onKeyDown: _v9,
          children: (0, _v1.jsxs)(_v55.VStack, {
            ref: _v7,
            tabIndex: 0,
            minWidth: (0, _v7.rem)(300),
            p: "sm",
            children: [(0, _v1.jsx)(_v12.Button, {
              variant: "tertiary",
              width: "100%",
              fontWeight: "normal",
              justifyContent: "flex-start",
              onClick: () => _v8(_v321.CustomFieldTypes.Text),
              children: _v28.default.TextInput
            }), (0, _v1.jsx)(_v12.Button, {
              variant: "tertiary",
              width: "100%",
              fontWeight: "normal",
              justifyContent: "flex-start",
              onClick: () => _v8(_v321.CustomFieldTypes.Dropdown),
              children: _v28.default.Dropdown
            }), (0, _v1.jsx)(_v12.Button, {
              variant: "tertiary",
              width: "100%",
              fontWeight: "normal",
              justifyContent: "flex-start",
              onClick: () => _v8(_v321.CustomFieldTypes.Checkbox),
              children: _v28.default.Checkbox
            }), _v2 && (0, _v1.jsx)(_v12.Button, {
              variant: "tertiary",
              width: "100%",
              fontWeight: "normal",
              justifyContent: "flex-start",
              onClick: () => _v8(_v321.CustomFieldTypes.Description),
              children: _v28.default.Description
            })]
          })
        })]
      });
    },
    _v325 = () => {
      let _v0 = (0, _v23.useGlobalStore)(_v0 => _v0.leadCapture.customFields),
        {
          patchLeadCapture: _v1
        } = (0, _v25.usePatchLeadCapture)(0),
        [, _v2] = (0, _v4.useReducer)(_v0 => _v0 + 1, 0),
        _v3 = (0, _v4.useCallback)((_v0, _v1) => {
          _v1("customFields", (0, _v223.formatCustomFieldPayload)(_v0), _v1), _v2();
        }, [_v1]);
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v13.Header, {
          size: "xs",
          color: "text-primary",
          pb: "sm",
          children: _v28.default.RegistrationFields
        }), (0, _v1.jsx)(_v323, {
          items: _v0,
          updateItems: _v3
        })]
      });
    };
  var _v326 = _v0.i(0);
  let _v327 = () => {
      let _v0 = (0, _v23.useGlobalStore)(_v0 => _v0.leadCapture.logo.uri),
        _v1 = (0, _v23.useGlobalStore)(_v0 => _v0.leadCapture.logo.url),
        _v2 = (0, _v23.useGlobalStore)(_v0 => _v0.leadCapture.background.urlLow),
        _v3 = (0, _v23.useGlobalStore)(_v0 => _v0.leadCapture.logo.isActive),
        _v4 = (0, _v23.useGlobalStore)(_v0 => _v0.leadCapture.layout),
        _v5 = (0, _v23.useGlobalStore)(_v0 => _v0.entityType),
        _v6 = (0, _v23.useGlobalStore)(_v0 => _v0.entityOwnerId),
        {
          isActive: _v7,
          useThumbnail: _v8
        } = (0, _v23.useGlobalStore)(_v0 => _v0.leadCapture.background),
        {
          patchLeadCapture: _v9
        } = (0, _v25.usePatchLeadCapture)(),
        {
          hasBackgroundPermission: _v10,
          hasLogoPermission: _v11
        } = (0, _v58.usePermissionStore)(),
        _v12 = (0, _v23.useGlobalStore)(_v0 => _v0.setSideMenuType),
        _v13 = (0, _v23.useGlobalStore)(_v0 => _v0.setSelectedSettingsTab),
        [_v14, _v15] = (0, _v4.useState)(!1),
        {
          sendRegistrationActionBP: _v16
        } = _v92(),
        {
          sendUpsellEvent: _v17
        } = (0, _v248.useUpsellAnalytics)(),
        {
          onFormSectionSwitched: _v18,
          onFormSettingToggled: _v19,
          onFormAppearanceChanged: _v20
        } = (0, _v97.useCallbackContext)(),
        {
          trackLiveStreamRegistrationFormTabChanged: _v21,
          trackLiveStreamRegistrationAppearanceChanged: _v22
        } = (0, _v135.useLiveStreamBroadcasterTracking)(),
        _v23 = (0, _v23.useGlobalStore)(_v0 => _v0.entity),
        {
          loading: _v24
        } = _v60(),
        _v25 = (0, _v23.useGlobalStore)(_v0 => _v0.presetLoading) || _v24,
        [_v26, _v27] = (0, _v247.useIsVisible)({
          threshold: 1
        }),
        {
          capabilities: _v28,
          loading: _v29
        } = (0, _v9.useCapability)(["hasUpsellsForFlatRateTiers", "canCaptureEmails", "hasLiveSubscription", "hasEnterprise", "canCaptureLeadsShowcase", "hasAdminForcedPreset"], _v6),
        {
          settings: _v30
        } = (0, _v20.useOrionSettings)(),
        _v31 = _v28.hasEnterprise,
        _v32 = _v5 === _v18.ENTITY_TYPE.VIDEO && !_v28.canCaptureEmails,
        _v33 = _v5 === _v18.ENTITY_TYPE.SHOWCASE && !_v28.canCaptureLeadsShowcase,
        _v34 = !_v28.hasLiveSubscription,
        [_v35, _v36] = (0, _v4.useState)(!1),
        _v37 = ({
          logoUri: _v0,
          logoUrl: _v1
        }) => {
          _v9("logo", {
            uri: _v0,
            url: _v1,
            isActive: !0
          }), _v5 === _v18.ENTITY_TYPE.EVENT && _v22({
            liveStreamAppearanceSetting: "logo"
          }), _v36(!1);
        };
      if ((0, _v4.useEffect)(() => {
        (_v32 || _v33) && !_v29 && _v27 && _v17({
          eventName: _v90.BP_EVENT_NAMES.UPSELL_TRIGGER_IMPRESSION,
          pageName: _v5 === _v18.ENTITY_TYPE.VIDEO ? _v90.BP_PAGE.SINGLE_VIDEO_VIEW_MANAGE : _v90.BP_PAGE.SHOWCASE_MANAGER,
          target: null,
          targetPath: null,
          upsellName: _v5 === _v18.ENTITY_TYPE.VIDEO ? _v90.UPSELL_NAME.ADD_VIDEO_REG_CAPABILITY : _v90.UPSELL_NAME.ADD_SHOWCASE_REG_CAPABILITY,
          interfaceType: "page",
          product: _v90.BP_PRODUCT.GATES,
          feature: _v90.BP_FEATURE.REGISTRATION,
          location: _v90.BP_LOCATION.BANNER,
          entityType: _v5,
          copy: _v90.BP_COPY.UPGRADE,
          flow: _v90.BP_FLOW.FORM_TAB,
          element: _v90.BP_ELEMENT.BUTTON
        });
      }, [_v27]), (0, _v4.useEffect)(() => {
        _v13((0, _v128.parseLocationQuery)(_v18.LOCATION_STATE.TAB) || _v26.FORM_TAB_OPTIONS.FIELDS), _v15(!0);
      }, []), !_v14) return (0, _v1.jsx)(_v1.Fragment, {});
      let _v38 = _v8 && _v5 === _v18.ENTITY_TYPE.VIDEO ? _v23?.pictures?.sizes[0].link || "" : _v2,
        _v39 = _v28?.hasAdminForcedPreset || _v30.enable_admin_forced_preset;
      return (0, _v1.jsx)(_v6.Flex, {
        height: "100%",
        flexDirection: "column",
        children: (0, _v1.jsxs)(_v5.Box, {
          p: "lg",
          pointerEvents: _v25 ? "none" : "auto",
          opacity: _v25 ? .6 : 1,
          "aria-busy": _v25,
          inert: _v25 || void 0,
          children: [(0, _v1.jsxs)(_v51.Stack, {
            direction: "row",
            justifyContent: "space-between",
            mb: "lg",
            children: [(0, _v1.jsx)(_v13.Header, {
              color: "text-primary",
              size: "md",
              children: _v28.default.Form
            }), (0, _v1.jsx)(_v139.CloseButton, {
              "aria-label": "close button",
              size: "sm",
              variant: "tertiary",
              onClick: () => _v12(null),
              isDisabled: _v25
            })]
          }), (_v32 || _v33) && !_v29 && (0, _v1.jsx)("div", {
            ref: _v26,
            children: (0, _v1.jsx)(_v326.SmallUpgradeBanner, {
              cta: _v28.default.Upgrade,
              hasLiveSubscription: _v34,
              hasEnterprise: _v31,
              message: _v33 ? _v28.default.UpgradeBannerTextShowcase : _v28.default.UpgradeBannerText,
              onUpsellClick: () => {
                _v17({
                  pageName: _v5 === _v18.ENTITY_TYPE.VIDEO ? _v90.BP_PAGE.SINGLE_VIDEO_VIEW_MANAGE : _v90.BP_PAGE.SHOWCASE_MANAGER,
                  target: _v90.BP_TARGET.UPGRADE_PAGE,
                  targetPath: window.location.pathname,
                  upsellName: _v5 === _v18.ENTITY_TYPE.VIDEO ? _v90.UPSELL_NAME.ADD_VIDEO_REG_CAPABILITY : _v90.UPSELL_NAME.ADD_SHOWCASE_REG_CAPABILITY,
                  interfaceType: "page",
                  product: _v90.BP_PRODUCT.GATES,
                  feature: _v90.BP_FEATURE.REGISTRATION,
                  location: _v90.BP_LOCATION.BANNER,
                  entityType: _v5,
                  copy: _v90.BP_COPY.UPGRADE,
                  flow: _v90.BP_FLOW.FORM_TAB,
                  element: _v90.BP_ELEMENT.BUTTON
                });
              },
              tracking: {
                params: {
                  feature: "registration",
                  location: window.location.href,
                  page: "registration",
                  upsell_name: "interaction_tools_registration"
                },
                paywallTracking: {
                  paywallTrigger: "lead_capture_settings_registration_toggle_button",
                  paywallLocation: "lead_capture_settings",
                  paywallType: "popup",
                  paywallFeature: "interactivity"
                }
              }
            })
          }), (0, _v1.jsx)(_v266, {
            useApprovedOnly: _v39
          }), (0, _v1.jsx)(_v283, {}), _v5 === _v18.ENTITY_TYPE.VIDEO && (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsxs)(_v51.Stack, {
              direction: "row",
              alignItems: "center",
              mb: "sm",
              mt: (0, _v7.rem)(10),
              children: [(0, _v1.jsx)(_v13.Header, {
                color: "text-primary",
                size: "xs",
                children: _v28.default.Placement
              }), _v31 && !_v29 && (0, _v1.jsx)(_v52.Tooltip, {
                placement: "top",
                fontSize: "body-md",
                label: _v28.default.PlacementInfo,
                variant: "simple",
                closeOnScroll: !0,
                children: (0, _v1.jsx)(_v5.Box, {
                  display: "flex",
                  alignItems: "center",
                  children: (0, _v1.jsx)(_v227.InfoCircle, {
                    color: "text-secondary",
                    boxSize: (0, _v7.rem)(16)
                  })
                })
              })]
            }), (0, _v1.jsx)(_v252, {})]
          }), (0, _v1.jsxs)(_v51.Stack, {
            direction: "row",
            mb: "lg",
            mt: (0, _v7.rem)(10),
            justifyContent: "space-between",
            children: [(0, _v1.jsx)(_v13.Header, {
              size: "xs",
              color: "text-primary",
              children: _v28.default.SingleStep
            }), (0, _v1.jsx)(_v132.Switch, {
              size: "sm",
              isChecked: _v4 === _v26.FORM_LAYOUT_OPTIONS.SINGLE_STEP_FORM,
              onChange: () => {
                let _v0 = _v4 === _v26.FORM_LAYOUT_OPTIONS.SINGLE_STEP_FORM ? _v26.FORM_LAYOUT_OPTIONS.MULTI_STEP_FORM : _v26.FORM_LAYOUT_OPTIONS.SINGLE_STEP_FORM,
                  _v1 = _v0 === _v26.FORM_LAYOUT_OPTIONS.SINGLE_STEP_FORM;
                _v19?.("single_step_form", _v1), _v9("layout", _v0), _v16({
                  actionName: _v90.BP_ACTION_NAME.TOGGLE_SINGLE_STEP_FORM,
                  element: _v90.BP_ELEMENT.TOGGLE,
                  copy: _v1 ? _v90.BP_COPY.ON : _v90.BP_COPY.OFF
                }), _v5 === _v18.ENTITY_TYPE.EVENT && _v22({
                  liveStreamAppearanceSetting: "layout"
                });
              }
            })]
          }), (0, _v1.jsxs)(_v243.Tabs, {
            variant: "inlay",
            onChange: _v0 => 0 === _v0 ? void (_v18?.("fields"), _v16({
              eventName: _v90.BP_EVENT_NAMES.REGISTRATION_FROM_ACTION,
              actionName: _v90.BP_ACTION_NAME.SELECT_FORM_TAB,
              copy: _v90.BP_COPY.FIELDS,
              element: _v90.BP_ELEMENT.CARD
            }), _v5 === _v18.ENTITY_TYPE.EVENT && _v21({
              liveStreamFormTab: "fields"
            }), _v13(_v26.FORM_TAB_OPTIONS.FIELDS), setTimeout(() => {
              (0, _v128.setLocationQuery)(_v18.LOCATION_STATE.TAB, _v26.FORM_TAB_OPTIONS.FIELDS);
            }, 0)) : void (_v18?.("appearance"), _v16({
              eventName: _v90.BP_EVENT_NAMES.REGISTRATION_FROM_ACTION,
              actionName: _v90.BP_ACTION_NAME.SELECT_APPEARANCE_TAB,
              copy: _v90.BP_COPY.APPEARANCE,
              element: _v90.BP_ELEMENT.CARD
            }), _v5 === _v18.ENTITY_TYPE.EVENT && _v21({
              liveStreamFormTab: "appearance"
            }), _v13(_v26.FORM_TAB_OPTIONS.APPEARANCE), setTimeout(() => {
              (0, _v128.setLocationQuery)(_v18.LOCATION_STATE.TAB, _v26.FORM_TAB_OPTIONS.APPEARANCE);
            }, 0)),
            children: [(0, _v1.jsxs)(_v244.TabList, {
              borderRadius: "sm",
              children: [(0, _v1.jsx)(_v242.Tab, {
                fontSize: "body-md",
                children: _v28.default.Fields
              }), (0, _v1.jsx)(_v242.Tab, {
                fontSize: "body-md",
                "data-id": _v5 === _v18.ENTITY_TYPE.VIDEO ? _v26.PENDO_DATA_ID.APPEARANCE_TAB_VIDEO : _v26.PENDO_DATA_ID.APPEARANCE_TAB_EVENTS,
                children: _v28.default.Appearance
              }), (0, _v1.jsx)(_v243.TabIndicator, {})]
            }), (0, _v1.jsxs)(_v246.TabPanels, {
              children: [(0, _v1.jsxs)(_v245.TabPanel, {
                children: [(0, _v1.jsx)(_v325, {}), (0, _v1.jsx)(_v5.Box, {
                  pt: (0, _v7.rem)(26)
                }), (0, _v1.jsx)(_v298, {}), (0, _v1.jsx)(_v229, {})]
              }), (0, _v1.jsxs)(_v245.TabPanel, {
                children: [(0, _v1.jsx)(_v255, {}), (0, _v1.jsxs)(_v5.Box, {
                  ml: (0, _v7.rem)(2),
                  mr: "xs",
                  children: [(0, _v1.jsx)(_v268, {
                    isToggleChecked: _v3,
                    onToggle: _v0 => {
                      _v20?.("logo"), _v9("logo.isActive", _v0), _v16({
                        actionName: _v90.BP_ACTION_NAME.LOGO_UPDATE,
                        element: "toggle"
                      }), _v5 === _v18.ENTITY_TYPE.EVENT && _v22({
                        liveStreamAppearanceSetting: "logo"
                      });
                    },
                    image: _v1,
                    heading: _v28.default.Logo,
                    onButtonClick: () => {
                      _v20?.("logo"), _v36(!0), _v16({
                        actionName: _v90.BP_ACTION_NAME.LOGO_UPDATE,
                        element: "button"
                      }), _v5 === _v18.ENTITY_TYPE.EVENT && _v22({
                        liveStreamAppearanceSetting: "logo"
                      });
                    },
                    imagePadding: 4,
                    permissionText: _v28.default.NoLogoOrBackgroundPermission,
                    hasPermission: _v11,
                    renderLogoPicker: () => (0, _v1.jsx)(_v249.LogoPickerBrandKit, {
                      productName: "registration",
                      onLogoSelect: _v37,
                      onClose: () => {
                        _v36(!1);
                      },
                      initialLogo: {
                        uri: _v0 || void 0
                      },
                      popoverPlacement: "right",
                      isPickerOpen: _v35
                    })
                  }), (0, _v1.jsx)(_v131.Divider, {
                    my: "lg"
                  }), (0, _v1.jsx)(_v268, {
                    isToggleChecked: _v7,
                    onToggle: _v0 => {
                      _v20?.("background"), _v9("background.isActive", _v0), _v16({
                        actionName: _v90.BP_ACTION_NAME.BACKGROUND_UPDATE,
                        element: "toggle"
                      }), _v5 === _v18.ENTITY_TYPE.EVENT && _v22({
                        liveStreamAppearanceSetting: "background"
                      });
                    },
                    image: _v38,
                    heading: _v28.default.Background,
                    onButtonClick: () => {
                      _v20?.("background"), _v12(_v26.SIDE_MENU_CONTENT.BACKGROUND), _v16({
                        actionName: _v90.BP_ACTION_NAME.BACKGROUND_UPDATE,
                        element: "button"
                      }), _v5 === _v18.ENTITY_TYPE.EVENT && _v22({
                        liveStreamAppearanceSetting: "background"
                      });
                    },
                    hasPermission: _v10,
                    permissionText: _v28.default.NoLogoOrBackgroundPermission
                  }), (0, _v1.jsx)(_v5.Box, {
                    mt: (0, _v7.rem)(34),
                    children: (0, _v1.jsx)(_v136, {
                      title: _v28.default.Overlay
                    })
                  }), _v5 === _v18.ENTITY_TYPE.EVENT && (0, _v1.jsxs)(_v1.Fragment, {
                    children: [(0, _v1.jsx)(_v131.Divider, {
                      my: "lg"
                    }), (0, _v1.jsx)(_v250, {})]
                  }), (0, _v1.jsx)(_v5.Box, {
                    pt: "lg"
                  })]
                })]
              })]
            })]
          })]
        })
      });
    },
    _v328 = ({
      position: _v0 = _v129.PANEL_POSITION.LEFT
    }) => {
      let _v1 = (0, _v23.useGlobalStore)((0, _v127.useShallow)(_v0 => _v0.sideMenuType)),
        _v2 = (0, _v23.useGlobalStore)((0, _v127.useShallow)(_v0 => _v0.setSideMenuType)),
        _v3 = (0, _v49.useIsBokeh)(),
        _v4 = () => {
          _v2(_v129.SIDE_MENU_CONTENT.SETTINGS);
        };
      return (0, _v4.useEffect)(() => {
        setTimeout(() => {
          (0, _v128.setLocationQuery)(_v18.LOCATION_STATE.SIDE_MENU, _v1);
        }, 0);
      }, [_v1]), (0, _v1.jsxs)(_v5.Box, {
        overflow: "hidden",
        position: "relative",
        display: {
          base: "none",
          sm: "block"
        },
        width: _v1 ? (0, _v7.rem)(_v129.SETTING_PANEL_WIDTH) : 0,
        sx: {
          "-webkit-transition": `width ${_v129.SETTING_PANEL_SLIDE_ANIMATION_DURATION}ms ease-in-out`,
          "-moz-transition": `width ${_v129.SETTING_PANEL_SLIDE_ANIMATION_DURATION}ms ease-in-out`,
          "-o-transition": `width ${_v129.SETTING_PANEL_SLIDE_ANIMATION_DURATION}ms ease-in-out`,
          transition: `width ${_v129.SETTING_PANEL_SLIDE_ANIMATION_DURATION}ms ease-in-out`
        },
        height: _v3 ? `calc(100% - ${(0, _v7.rem)(32)})` : "100%",
        marginY: _v3 ? (0, _v7.rem)(16) : "",
        borderRadius: _v3 ? "xl" : "",
        children: [(0, _v1.jsx)(_v212, {
          show: _v1 === _v129.SIDE_MENU_CONTENT.SETTINGS,
          position: _v0,
          children: (0, _v1.jsx)(_v327, {})
        }), (0, _v1.jsx)(_v212, {
          animate: !0,
          hasBackgroundDropdown: !0,
          title: _v28.default.Background,
          showBackButton: !0,
          onBackButtonClick: _v4,
          show: _v1 === _v129.SIDE_MENU_CONTENT.BACKGROUND,
          position: _v0,
          children: (0, _v1.jsx)(_v198, {})
        }), (0, _v1.jsx)(_v212, {
          animate: !0,
          title: _v28.default.Logo,
          showBackButton: !0,
          onBackButtonClick: _v4,
          show: _v1 === _v129.SIDE_MENU_CONTENT.LOGO,
          position: _v0,
          children: (0, _v1.jsx)(_v206, {})
        }), (0, _v1.jsx)(_v212, {
          animate: !0,
          show: _v1 === _v129.SIDE_MENU_CONTENT.TEXT_RTF_STYLING,
          position: _v0,
          children: (0, _v1.jsx)(_v240, {
            showCloseButton: !0,
            onCloseButtonClick: _v4
          })
        }), (0, _v1.jsx)(_v212, {
          animate: !0,
          show: _v1 === _v129.SIDE_MENU_CONTENT.BUTTON_RTF_STYLING,
          position: _v0,
          children: (0, _v1.jsx)(_v221, {
            showCloseButton: !0,
            onCloseButtonClick: _v4
          })
        }), (0, _v1.jsx)(_v212, {
          animate: !0,
          show: _v1 === _v129.SIDE_MENU_CONTENT.NON_EDIT_TEXT_STYLING,
          position: _v0,
          children: (0, _v1.jsx)(_v230, {
            showCloseButton: !0,
            onCloseButtonClick: _v4
          })
        }), (0, _v1.jsx)(_v212, {
          animate: !0,
          show: _v1 === _v129.SIDE_MENU_CONTENT.CHECKBOX_STYLING,
          position: _v0,
          children: (0, _v1.jsx)(_v224, {
            onCloseButtonClick: _v4
          })
        })]
      });
    },
    _v329 = ({
      position: _v0,
      showUpgradeNotice: _v1
    }) => {
      let _v2 = (0, _v23.useGlobalStore)(_v0 => _v0.isRegistrationOn),
        _v3 = (0, _v23.useGlobalStore)(_v0 => _v0.hasUpsell),
        _v4 = (0, _v23.useGlobalStore)(_v0 => _v0.entity.status),
        {
          onClickRegistration: _v5
        } = (0, _v97.useCallbackContext)(),
        _v6 = (0, _v23.useGlobalStore)(_v0 => _v0.entityType),
        _v7 = (0, _v23.useGlobalStore)(_v0 => _v0.entity.title),
        _v8 = (0, _v23.useGlobalStore)(_v0 => _v0.entity.isPlayable),
        _v9 = _v0 === _v26.PANEL_POSITION.RIGHT,
        _v10 = _v0 === _v26.PANEL_POSITION.LEFT,
        _v11 = (0, _v49.useIsBokeh)(),
        _v12 = !1 === _v2 && !_v3 && void 0 !== _v3 && _v6 === _v18.ENTITY_TYPE.EVENT && !_v4 && _v5,
        _v13 = !1 === _v2 && _v6 === _v18.ENTITY_TYPE.VIDEO && _v5 && !_v3 && _v8,
        _v14 = !1 === _v2 && _v6 === _v18.ENTITY_TYPE.SHOWCASE && _v5 && !_v3;
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [_v10 && (0, _v1.jsx)(_v328, {
          position: _v0
        }), (0, _v1.jsxs)(_v6.Flex, {
          height: "100%",
          flex: 1,
          overflowY: "auto",
          borderRight: _v11 ? "" : `${(0, _v7.rem)(1)} solid`,
          borderLeft: _v11 ? "" : `${(0, _v7.rem)(1)} solid`,
          borderColor: "stroke",
          alignItems: "center",
          flexDirection: "column",
          p: "lg",
          children: [_v1 && (0, _v1.jsx)(_v115.Alert, {
            variant: "info",
            mb: "md",
            children: (0, _v1.jsx)(_v116.AlertDescription, {
              fontSize: "body-md",
              children: _v28.default.UpgradeInfoForTeamUsers
            }, "upgrade-info")
          }), (_v12 || _v13 || _v14) && (0, _v1.jsx)(_v115.Alert, {
            variant: "info",
            mb: "md",
            children: (0, _v1.jsx)(_v116.AlertDescription, {
              fontSize: "body-md",
              children: _v6 === _v18.ENTITY_TYPE.EVENT ? (0, _v50.translate)({
                singular: "To add your custom form and emails to “{TITLE},” {A}turn on registration{/A}",
                replacements: {
                  A: _v0 => (0, _v1.jsx)(_v43.Link, {
                    variant: "inline-primary",
                    fontSize: "body-md",
                    onClick: _v5,
                    children: _v0
                  }),
                  TITLE: _v7
                },
                dictionary: {
                  es: {
                    singular: 'Para agregar su formulario personalizado y correos electrónicos a "{TITLE}", {A}active el registro{/A}.'
                  },
                  "de-DE": {
                    singular: "Um Ihr benutzerdefiniertes Formular und Ihre E-Mails zu „{TITLE}“ hinzuzufügen, {A}aktivieren Sie die Registrierung{/A}."
                  },
                  "fr-FR": {
                    singular: "Pour ajouter votre formulaire personnalisé et vos e-mails à « {TITLE} », {A}activez l'inscription{/A}."
                  },
                  "ja-JP": {
                    singular: "カスタムフォームとメールを「{TITLE}」に追加するには、{A}登録をオン{/A}にしてください"
                  },
                  "ko-KR": {
                    singular: "{TITLE}에 커스텀 양식과 이메일을 추가하려면 {A}등록 기능을 켜세요{/A}"
                  },
                  "pt-BR": {
                    singular: "Para adicionar seu formulário customizado e e-mails a “{TITLE}”, {A}ative o registro{/A}"
                  },
                  "zh-CN": {
                    singular: "要将自定义表单和电子邮件添加到“{TITLE}”中，请{A}开启注册{/A}"
                  }
                }
              }) : (0, _v50.translate)({
                singular: "To add your custom form to “{TITLE},” {A}turn on registration{/A}",
                replacements: {
                  A: _v0 => (0, _v1.jsx)(_v43.Link, {
                    variant: "inline-primary",
                    fontSize: "body-md",
                    onClick: _v5,
                    children: _v0
                  }),
                  TITLE: _v7
                },
                dictionary: {
                  es: {
                    singular: 'Para agregar su formulario personalizado a "{TITLE}", {A}active el registro{/A}.'
                  },
                  "de-DE": {
                    singular: "Um Ihr benutzerdefiniertes Formular zu „{TITLE}“ hinzuzufügen, {A}aktivieren Sie die Registrierung{/A}."
                  },
                  "fr-FR": {
                    singular: "Pour ajouter votre formulaire personnalisé à « {TITLE} », {A}activez l'inscription{/A}."
                  },
                  "ja-JP": {
                    singular: "カスタムフォームを「{TITLE}」に追加するには、{A}登録をオン{/A}にしてください"
                  },
                  "ko-KR": {
                    singular: "'{TITLE}'에 커스텀 양식을 추가하려면 {A}등록 기능을 켜세요{/A}"
                  },
                  "pt-BR": {
                    singular: "Para adicionar seu formulário personalizado a “{TITLE}”, {A}ative o registro{/A}"
                  },
                  "zh-CN": {
                    singular: "要将自定义表单添加到“{TITLE}”中，请{A}开启注册{/A}"
                  }
                }
              })
            }, "reg-on-info")
          }), (0, _v1.jsxs)(_v6.Flex, {
            borderRadius: "xl",
            overflow: "auto",
            height: "100%",
            width: "100%",
            flexDirection: "column",
            position: "relative",
            border: `${(0, _v7.rem)(1)} solid`,
            borderColor: "stroke",
            children: [(0, _v1.jsx)(_v126, {}), (0, _v1.jsx)(_v6.Flex, {
              borderTopRadius: "2xl",
              boxSize: "100%",
              overflowY: "auto",
              children: (0, _v1.jsx)(_v119.Preview, {})
            })]
          })]
        }), _v9 && (0, _v1.jsx)(_v328, {
          position: _v0
        })]
      });
    };
  var _v330 = _v0.i(0);
  let _v331 = _v0 => (0, _v1.jsx)(_v69.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      d: "M14 10.006h2.42a1 1 0 0 0 .71-.29l4.58-4.58a1.001 1.001 0 0 0 0-1.42l-2.42-2.42a1 1 0 0 0-1.42 0l-4.58 4.58a1.05 1.05 0 0 0-.29.71v2.42a1 1 0 0 0 1 1Zm1-3 3.58-3.58 1 1L16 8.006h-1v-1Zm6 2a1 1 0 0 0-1 1v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9.61l5.88 5.89a3 3 0 0 0 4.27 0 1 1 0 1 0-1.43-1.4 1 1 0 0 1-1.4 0l-5.91-5.9H10a1 1 0 1 0 0-2H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-7a1 1 0 0 0-1-1v.02Z",
      fill: "currentColor"
    })
  });
  var _v332 = _v0.i(0),
    _v333 = _v0.i(0),
    _v334 = _v0.i(0);
  let _v335 = () => {
      let _v0 = (0, _v4.useContext)(_v334.ViewerContext),
        _v1 = (0, _v49.useIsBokeh)();
      return (0, _v1.jsx)(_v333.EssentialFooterMenu, {
        impressumQualifies: _v0?.impressumQualifies,
        locale: _v0?.locale ?? "en",
        locales: _v0?.locales,
        localeLabels: _v0?.localeLabels,
        token: _v0?.xsrft,
        isDoNotSellReady: !1,
        contentViewingPrefs: _v0?.contentViewingPrefs,
        children: (0, _v1.jsx)(_v52.Tooltip, {
          label: (0, _v50.translate)({
            singular: "Help and preferences",
            dictionary: {
              es: {
                singular: "Ayuda y preferencias"
              },
              "de-DE": {
                singular: "Hilfe und Einstellungen"
              },
              "fr-FR": {
                singular: "Aide et préférences"
              },
              "ja-JP": {
                singular: "ヘルプと詳細設定"
              },
              "ko-KR": {
                singular: "도움말 및 환경설정"
              },
              "pt-BR": {
                singular: "Ajuda e preferências"
              },
              "zh-CN": {
                singular: "帮助和首选项"
              }
            }
          }),
          placement: "right",
          children: _v1 ? (0, _v1.jsx)(_v271.MenuButton, {
            as: _v42.IconButton,
            icon: (0, _v1.jsx)(_v332.QuestionCircle, {}),
            size: "lg",
            "aria-label": (0, _v50.translate)({
              singular: "Help and preferences",
              dictionary: {
                es: {
                  singular: "Ayuda y preferencias"
                },
                "de-DE": {
                  singular: "Hilfe und Einstellungen"
                },
                "fr-FR": {
                  singular: "Aide et préférences"
                },
                "ja-JP": {
                  singular: "ヘルプと詳細設定"
                },
                "ko-KR": {
                  singular: "도움말 및 환경설정"
                },
                "pt-BR": {
                  singular: "Ajuda e preferências"
                },
                "zh-CN": {
                  singular: "帮助和首选项"
                }
              }
            }),
            variant: "secondary",
            background: "surface",
            borderRadius: "round"
          }) : (0, _v1.jsx)(_v271.MenuButton, {
            as: _v42.IconButton,
            icon: (0, _v1.jsx)(_v332.QuestionCircle, {
              boxSize: (0, _v7.rem)(24)
            }),
            "aria-label": (0, _v50.translate)({
              singular: "Help and preferences",
              dictionary: {
                es: {
                  singular: "Ayuda y preferencias"
                },
                "de-DE": {
                  singular: "Hilfe und Einstellungen"
                },
                "fr-FR": {
                  singular: "Aide et préférences"
                },
                "ja-JP": {
                  singular: "ヘルプと詳細設定"
                },
                "ko-KR": {
                  singular: "도움말 및 환경설정"
                },
                "pt-BR": {
                  singular: "Ajuda e preferências"
                },
                "zh-CN": {
                  singular: "帮助和首选项"
                }
              }
            }),
            variant: "tertiary",
            borderRadius: "round !important",
            m: "0 6px",
            _hover: {
              bg: "gray.700",
              color: "gray.100",
              boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
              transform: "translateY(-1px) scale(1.001)"
            }
          })
        })
      });
    },
    _v336 = _v0 => (0, _v1.jsx)(_v69.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v1.jsx)("path", {
        d: "M20.83 7.32a10.11 10.11 0 0 0-3.44-3.73A10 10 0 1 0 12 22h.29a10 10 0 0 0 8.54-14.68ZM11 19.93a8 8 0 0 1 0-15.86v15.86Zm2-15.86a8.07 8.07 0 0 1 2.49.74L13 9.12V4.07Zm0 9 4.17-7.17a8.14 8.14 0 0 1 1.58 1.83L13 17.69v-4.62Zm1.15 6.58L19.74 10a8.16 8.16 0 0 1 .26 2 8 8 0 0 1-5.85 7.7v-.05Z",
        fill: "currentColor"
      })
    });
  var _v337 = _v0.i(0);
  let _v338 = () => {
      let {
          colorMode: _v0,
          setColorMode: _v1
        } = (0, _v46.useColorMode)(),
        {
          toggleTheme: _v2
        } = (0, _v4.useContext)(_v337.ThemeDispatchContext),
        _v3 = "dark" === _v0 ? (0, _v50.translate)({
          singular: "Switch to light mode",
          dictionary: {
            es: {
              singular: "Cambiar a modo claro"
            },
            "de-DE": {
              singular: "Zum Light-Modus wechseln"
            },
            "fr-FR": {
              singular: "Passer en mode clair"
            },
            "ja-JP": {
              singular: "ライトモードに切り替える"
            },
            "ko-KR": {
              singular: "라이트 모드로 전환"
            },
            "pt-BR": {
              singular: "Mudar para o modo claro"
            },
            "zh-CN": {
              singular: "切换到浅色模式"
            }
          }
        }) : (0, _v50.translate)({
          singular: "Switch to dark mode",
          dictionary: {
            es: {
              singular: "Cambiar a modo oscuro"
            },
            "de-DE": {
              singular: "Zum Dark-Modus wechseln"
            },
            "fr-FR": {
              singular: "Passer en mode sombre"
            },
            "ja-JP": {
              singular: "ダークモードに切り替える"
            },
            "ko-KR": {
              singular: "다크 모드로 전환"
            },
            "pt-BR": {
              singular: "Mudar para o modo escuro"
            },
            "zh-CN": {
              singular: "切换到深色模式"
            }
          }
        });
      return (0, _v1.jsx)(_v52.Tooltip, {
        label: _v3,
        placement: "right",
        children: (0, _v1.jsx)(_v42.IconButton, {
          icon: (0, _v1.jsx)(_v336, {
            boxSize: `${(0, _v7.rem)(20)} !important`
          }),
          onClick: () => {
            let _v0 = "dark" === _v0 ? "light" : "dark";
            _v2(_v0), _v1?.(_v0);
          },
          id: "essential-footer-theme-button",
          variant: "tertiary",
          "aria-label": "theme switcher",
          p: "xs",
          borderRadius: "round !important"
        })
      });
    },
    _v339 = () => (0, _v1.jsxs)(_v55.VStack, {
      gap: (0, _v7.rem)(8),
      children: [(0, _v1.jsx)(_v338, {}), (0, _v1.jsx)(_v335, {})]
    }),
    _v340 = () => {
      let _v0 = (0, _v8.useToast)(),
        {
          selectedSection: _v1,
          setSelectedSection: _v2
        } = (0, _v27.useSectionStore)(_v0 => _v0),
        _v3 = (0, _v23.useGlobalStore)(_v0 => _v0.entityType),
        _v4 = (0, _v23.useGlobalStore)(_v0 => _v0.setSideMenuType),
        _v5 = (0, _v23.useGlobalStore)(_v0 => _v0.sideMenuType),
        {
          sendRegistrationActionBP: _v6
        } = _v92(),
        {
          onFormTabSwitched: _v7
        } = (0, _v97.useCallbackContext)(),
        {
          trackLiveStreamRegistrationSectionClicked: _v8
        } = (0, _v135.useLiveStreamBroadcasterTracking)(),
        _v9 = {
          [_v26.SECTION_TYPES.ATTENDEES]: "registrants",
          [_v26.SECTION_TYPES.FORM]: "form"
        },
        _v10 = (0, _v23.useGlobalStore)(_v0 => _v0.presetLoading),
        _v11 = (0, _v46.useColorModeValue)("slate.50", "grayscale.800"),
        _v12 = (0, _v49.useIsBokeh)(),
        _v13 = _v0 => {
          let _v1 = _v9[_v0];
          _v1 && _v7?.(_v1), _v3 === _v18.ENTITY_TYPE.EVENT && (_v0 === _v26.SECTION_TYPES.ATTENDEES ? _v8({
            liveStreamRegistrationSection: "registrants"
          }) : _v0 === _v26.SECTION_TYPES.FORM ? _v8({
            liveStreamRegistrationSection: "form"
          }) : _v0 === _v26.SECTION_TYPES.EMAILS && _v8({
            liveStreamRegistrationSection: "email"
          })), (0, _v128.setLocationQuery)(_v18.LOCATION_STATE.SECTION, _v0), _v0.closeAll(), _v6({
            eventName: _v90.BP_EVENT_NAMES.OPEN_REGISTRATION_MANAGEMENT_PAGE,
            actionName: _v0,
            location: _v90.BP_LOCATION.SIDE_NAV
          }), _v2(_v0), _v4(_v26.SIDE_MENU_CONTENT.SETTINGS);
        },
        _v14 = _v3 !== _v18.ENTITY_TYPE.EVENT,
        _v15 = [{
          sectionType: _v26.SECTION_TYPES.ATTENDEES,
          Icon: _v71.Users,
          name: _v28.default.Registrants,
          isSelected: _v1 === _v26.SECTION_TYPES.ATTENDEES
        }, {
          sectionType: _v26.SECTION_TYPES.FORM,
          Icon: _v330.ClipboardNotes,
          name: _v28.default.Form,
          isSelected: _v1 === _v26.SECTION_TYPES.FORM && null !== _v5
        }, ...(_v14 ? [] : [{
          sectionType: _v26.SECTION_TYPES.EMAILS,
          Icon: _v331,
          name: _v28.default.Email,
          isSelected: _v1 === _v26.SECTION_TYPES.EMAILS
        }])];
      return _v12 ? (0, _v1.jsxs)(_v6.Flex, {
        height: "100%",
        flexDir: "column",
        p: "lg",
        children: [(0, _v1.jsx)(_v130.Center, {
          gap: (0, _v7.rem)(16),
          flex: 1,
          flexDir: "column",
          children: _v15.map(({
            sectionType: _v0,
            Icon: _v1,
            name: _v2,
            isSelected: _v3
          }) => (0, _v1.jsxs)(_v130.Center, {
            flexDir: "column",
            children: [(0, _v1.jsx)(_v42.IconButton, {
              onClick: () => _v13(_v0),
              isDisabled: _v10,
              borderRadius: "round",
              size: "lg",
              variant: _v3 ? "primary" : "secondary",
              background: _v3 ? "primary" : "surface",
              icon: (0, _v1.jsx)(_v1, {}),
              "aria-label": _v2
            }), (0, _v1.jsx)(_v45.Text, {
              mt: "xs",
              textAlign: "center",
              variant: "body-xs",
              color: "text-tertiary",
              children: _v2
            })]
          }, _v0))
        }), (0, _v1.jsx)(_v130.Center, {
          children: (0, _v1.jsx)(_v335, {})
        })]
      }) : (0, _v1.jsxs)(_v6.Flex, {
        flexDirection: "column",
        alignItems: "center",
        h: "100%",
        p: (0, _v7.rem)(12),
        pt: "md",
        borderRight: (0, _v7.rem)(1),
        borderColor: "stroke",
        borderEndStyle: "solid",
        justifyContent: "space-between",
        background: "background",
        width: (0, _v7.rem)(81),
        children: [(0, _v1.jsx)(_v5.Box, {
          children: _v15.map(({
            sectionType: _v0,
            Icon: _v1,
            name: _v2,
            isSelected: _v3
          }) => (0, _v1.jsxs)(_v12.Button, {
            onClick: () => _v13(_v0),
            isDisabled: _v10,
            variant: "tertiary",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            outline: "none",
            border: "none",
            cursor: _v10 ? "not-allowed" : "pointer",
            borderRadius: "md",
            width: (0, _v7.rem)(64),
            height: (0, _v7.rem)(64),
            p: "xs",
            mt: (0, _v7.rem)(2),
            background: _v3 ? _v11 : "transparent",
            _hover: {
              background: _v11
            },
            children: [(0, _v1.jsx)(_v1, {
              width: (0, _v7.rem)(24),
              color: "text-primary"
            }), (0, _v1.jsx)(_v45.Text, {
              variant: "body-xl",
              textAlign: "center",
              fontSize: "body-xs",
              color: "text-primary",
              lineHeight: (0, _v7.rem)(12),
              children: _v2
            })]
          }, _v0))
        }), (0, _v1.jsx)(_v5.Box, {
          children: (0, _v1.jsx)(_v339, {})
        })]
      });
    },
    _v341 = (0, _v2.default)(async () => {
      let {
        EmailLayout: _v0
      } = await _v0.A(0);
      return {
        default: _v0
      };
    }, {
      loadableGenerated: {
        modules: [0]
      },
      ssr: !1,
      loading: _v11.FullScreenLoader
    }),
    _v342 = ({
      onClose: _v0,
      showUpgradeNotice: _v1,
      position: _v2 = _v26.PANEL_POSITION.LEFT,
      getBreadCrumb: _v3
    }) => {
      let _v4 = (0, _v8.useToast)(),
        {
          settings: _v5
        } = (0, _v20.useOrionSettings)(),
        _v6 = (0, _v3.useRouter)(),
        _v7 = _v5.enable_explicit_registration_save,
        {
          save: _v8,
          isDirty: _v9,
          isSaving: _v10
        } = (() => {
          (0, _v25.usePatchLeadCapture)(void 0, !0);
          let _v0 = (0, _v23.useGlobalStore)(_v0 => _v0.formPendingChanges),
            _v1 = (0, _v23.useGlobalStore)(_v0 => _v0.emailSaveState),
            _v2 = (0, _v23.useGlobalStore)(_v0 => _v0.saveRegistrationChanges),
            {
              isAutoSaving: _v3
            } = _v24();
          return {
            save: _v2,
            isDirty: Object.keys(_v0).length > 0 || !!_v1?.isDirty,
            isSaving: _v3 || !!_v1?.isSaving
          };
        })(),
        [_v11, _v12] = (0, _v4.useState)(null),
        _v13 = (0, _v4.useRef)(!1),
        _v14 = (0, _v27.useSectionStore)(_v0 => _v0.selectedSection),
        _v15 = (0, _v23.useGlobalStore)(_v0 => _v0.entityType),
        _v16 = (0, _v23.useGlobalStore)(_v0 => _v0.entityOwnerId),
        _v17 = (0, _v23.useGlobalStore)(_v0 => _v0.presetLoading),
        _v18 = (0, _v23.useGlobalStore)(_v0 => _v0.discardRegistrationChanges),
        _v19 = (0, _v23.useGlobalStore)(_v0 => _v0.clearHistory),
        {
          emitMessage: _v20
        } = (0, _v19.useBroadcastChannel)(_v10.BROADCAST_CHANNEL_NAME, () => ({})),
        {
          message: _v21
        } = (0, _v17.useUpsellContext)(),
        _v22 = _v15 === _v18.ENTITY_TYPE.VIDEO,
        _v23 = (0, _v21.useViewer)(),
        {
          capabilities: _v24,
          ready: _v25
        } = (0, _v9.useCapability)(["hasEnterprise", "hasLiveSubscription", "hasLiveEventLeadUpsell", "canCaptureEmails", "canCaptureLeadsShowcase"], _v16),
        _v26 = _v24?.hasEnterprise,
        _v27 = _v24?.hasLiveSubscription,
        _v28 = _v24?.hasLiveEventLeadUpsell,
        _v29 = _v22 && !_v24?.canCaptureEmails,
        _v30 = _v15 === _v18.ENTITY_TYPE.SHOWCASE && !_v24?.canCaptureLeadsShowcase,
        _v31 = (0, _v4.useMemo)(() => {
          switch (_v15) {
            case _v18.ENTITY_TYPE.EVENT:
              return _v25 && void 0 !== _v27 && void 0 !== _v28 && (!_v27 || _v28);
            case _v18.ENTITY_TYPE.VIDEO:
              return _v25 && _v29;
            case _v18.ENTITY_TYPE.SHOWCASE:
              return _v25 && _v30;
          }
          return !1;
        }, [_v15, _v25, _v27, _v28, _v29, _v30]),
        _v32 = _v23?.user?.id === _v16,
        _v33 = !!_v21 || _v32 && _v31,
        _v34 = () => {
          _v4.closeAll(), _v0?.();
        },
        {
          onKeyDownEscape: _v35,
          requestExit: _v36
        } = (({
          isManualSaveRequired: _v0,
          isDirty: _v1,
          isSaving: _v2,
          presetLoading: _v3,
          save: _v4,
          onChangesSaved: _v5,
          onClose: _v6,
          router: _v7,
          confirmedExit: _v8,
          setPendingExit: _v9
        }) => {
          let _v10 = (0, _v4.useRef)(!1),
            _v11 = (0, _v4.useCallback)(_v0 => {
              _v2 || !_v0 && _v3 || (_v0 && _v1 ? _v9(_v0) : _v0());
            }, [_v1, _v0, _v2, _v3, _v9]),
            _v12 = (0, _v4.useEffectEvent)(_v0 => {
              let _v1 = (_v0.metaKey || _v0.ctrlKey) && !_v0.altKey && !_v0.shiftKey && "s" === _v0.key.toLowerCase();
              _v0 && _v1 && (_v0.preventDefault(), _v1 && !_v2 && _v4());
            });
          (0, _v4.useEffect)(() => (document.addEventListener("keydown", _v12), () => document.removeEventListener("keydown", _v12)), []);
          let _v13 = (0, _v4.useEffectEvent)(_v5);
          (0, _v4.useEffect)(() => {
            _v0 && (_v2 ? _v10.current = !0 : _v10.current && (_v10.current = !1, _v1 || _v13()));
          }, [_v1, _v0, _v2]);
          let _v14 = (0, _v22.useEscapeKey)(_v2 || !_v0 && _v3 || _v0 && _v1, _v0 && _v1 ? () => _v11(_v6) : void 0);
          return (0, _v4.useEffect)(() => {
            if (_v0 && _v1) return _v7.beforePopState(({
              url: _v0,
              as: _v1,
              options: _v2
            }) => (_v7.replace(_v7.asPath), _v11(() => void _v7.replace(_v0, _v1, _v2)), !1)), () => _v7.beforePopState(() => !0);
          }, [_v1, _v0, _v11, _v7, _v7.asPath]), (0, _v4.useEffect)(() => {
            if (!_v0 || !_v1 && !_v2) return;
            let _v0 = _v0 => {
              _v8.current || _v0.preventDefault();
            };
            return window.addEventListener("beforeunload", _v0), () => window.removeEventListener("beforeunload", _v0);
          }, [_v8, _v1, _v0, _v2]), {
            onKeyDownEscape: _v14,
            requestExit: _v11
          };
        })({
          isManualSaveRequired: _v7,
          isDirty: _v9,
          isSaving: _v10,
          presetLoading: _v17,
          save: _v8,
          onChangesSaved: () => {
            _v19(), _v20({
              type: _v10.BROADCAST_ACTIONS.RESET
            }), _v4({
              title: _v28.default.ChangesSaved,
              status: "success"
            });
          },
          onClose: _v34,
          router: _v6,
          confirmedExit: _v13,
          setPendingExit: _v0 => _v12(() => _v0)
        });
      return (0, _v1.jsxs)(_v5.Box, {
        height: "100vh",
        tabIndex: 0,
        onKeyDown: _v35,
        children: [_v11 && (0, _v1.jsx)(_v40, {
          onCancel: () => _v12(null),
          onDiscard: () => {
            _v13.current = !0, _v18(), _v11(), _v12(null);
          }
        }), (0, _v1.jsx)(_v16, {
          hasEnterprise: _v26,
          hasLiveSubscription: _v27,
          showUpsell: _v33,
          message: _v21,
          entityType: _v15
        }), (0, _v1.jsx)(_v114, {
          onClose: _v34,
          getBreadCrumb: _v3,
          isManualSaveRequired: _v7,
          isDirty: _v9,
          isSaving: _v10,
          onSave: _v8,
          requestExit: _v36
        }), _v14 === _v26.SECTION_TYPES.FORM && (0, _v1.jsx)(_v33, {}), (0, _v1.jsxs)(_v6.Flex, {
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          height: `calc(100% - ${(0, _v7.rem)(_v26.TOP_NAV_BAR_HEIGHT + 48 * !!_v33)})`,
          children: [(0, _v1.jsx)(_v340, {}), (0, _v1.jsx)(_v343, {
            show: _v14 === _v26.SECTION_TYPES.FORM,
            children: (0, _v1.jsx)(_v329, {
              position: _v2,
              showUpgradeNotice: _v1
            })
          }), _v15 === _v18.ENTITY_TYPE.EVENT && (0, _v1.jsx)(_v343, {
            show: _v14 === _v26.SECTION_TYPES.EMAILS,
            children: (0, _v1.jsx)(_v341, {
              showUpgradeNotice: _v1
            })
          }), (0, _v1.jsx)(_v343, {
            show: _v14 === _v26.SECTION_TYPES.ATTENDEES,
            children: (0, _v1.jsx)(_v118, {
              showUpgradeNotice: _v1
            })
          })]
        })]
      });
    },
    _v343 = ({
      children: _v0,
      ..._v1
    }) => (0, _v1.jsx)(_v5.Box, {
      display: _v1.show ? "flex" : "none",
      height: "100%",
      width: "100%",
      overflow: "auto",
      ..._v1,
      children: _v0
    });
  var _v344 = _v0.i(0),
    _v345 = _v0.i(0),
    _v346 = _v0.i(0);
  let _v347 = (0, _v345.default)((0, _v346.default)((0, _v344.default)(_v0 => (_v278(), (0, _v1.jsx)(_v342, {
    ..._v0
  })), _v26.PAGE_TYPES.ADMIN), _v26.PAGE_TYPES.ADMIN), _v26.PAGE_TYPES.ADMIN);
  _v0.s(["default", 0, _v347], 0);
}