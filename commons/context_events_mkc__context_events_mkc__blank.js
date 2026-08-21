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
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0);
  let _v51 = {
      header: _v28.default.UpgradeForAttendees,
      description: _v28.default.UpgradeForAttendeesDesc,
      info: [{
        icon: (0, _v1.jsx)(_v49.Stats, {
          boxSize: (0, _v7.rem)(20)
        }),
        text: _v28.default.AdvancedUserAnalytics
      }, {
        icon: (0, _v1.jsx)(_v50.VideosStack, {
          boxSize: (0, _v7.rem)(20)
        }),
        text: _v28.default.BackUpStreams
      }, {
        icon: (0, _v1.jsx)(_v47.PersonUser, {
          boxSize: (0, _v7.rem)(20)
        }),
        text: _v28.default.CRMIntegrations
      }],
      buttonText: _v28.default.Contactus
    },
    _v52 = ({
      popOverContentRef: _v0,
      isUpsell: _v1,
      type: _v2
    }) => {
      let {
          header: _v3,
          description: _v4,
          info: _v5,
          buttonText: _v6
        } = _v1 ? {
          header: _v28.default.UpgradeToUpload[_v2],
          description: _v28.default.UpgradeToUploadDesc[_v2],
          info: [{
            icon: (0, _v1.jsx)(_v46.CameraOn, {
              boxSize: (0, _v7.rem)(20)
            }),
            text: _v28.default.AccessVirtualEvents
          }, {
            icon: (0, _v1.jsx)(_v49.Stats, {
              boxSize: (0, _v7.rem)(20)
            }),
            text: _v28.default.AdvancedUserAnalytics
          }, {
            icon: (0, _v1.jsx)(_v48.SettingsGear, {
              boxSize: (0, _v7.rem)(20)
            }),
            text: _v28.default.PostEventEngagement
          }],
          buttonText: _v28.default.SeePlans
        } : _v51,
        {
          openPricingPage: _v7,
          openUpsellEmail: _v8
        } = (() => {
          let {
            registrantCapLowerWatermark: _v0,
            hasEnterprise: _v1,
            hasAttendeeUpsell: _v2
          } = (0, _v19.useEventCapability)();
          return {
            openPricingPage: () => {
              let _v0 = _v26.UPSELL_LINK.includes("?") ? "&context=events&mkc=" : "?context=events&mkc=";
              window.open(_v26.UPSELL_LINK + _v0 + (_v2 ? _v26.MKC_CODES.PREMIUM_ATTENDEE_UPSELL_BADGE : _v26.MKC_CODES.UPSELL_BANNER), "_blank");
            },
            openContactUsPage: () => {
              let _v0 = _v26.ENTERPRISE_CONTACT_US_LINK.includes("?") ? "&mkc=" : "?mkc=";
              window.open(_v26.ENTERPRISE_CONTACT_US_LINK + _v0 + _v26.MKC_CODES.ENTERPRISE_DEMO, "_blank");
            },
            openUpsellEmail: () => {
              let _v0 = _v0 && _v1,
                _v1 = _v0 ? _v26.REGISTRANT_UPSELL_EMAIL_BODY : _v26.UPSELL_EMAIL_BODY,
                _v2 = _v0 ? _v26.REGISTRANT_UPSELL_EMAIL_SUBJECT : _v26.UPSELL_EMAIL_SUBJECT,
                _v3 = encodeURIComponent(_v1);
              window.location.href = `mailto:${_v26.UPSELL_EMAIL_ID}?subject=${_v2}&body=${_v3}`;
            }
          };
        })(),
        {
          hasAttendeeUpsell: _v9,
          enterpriseHasUpsell: _v10
        } = (0, _v19.useEventCapability)(),
        _v11 = ({
          icon: _v0,
          text: _v1
        }) => (0, _v1.jsxs)(_v5.Flex, {
          alignItems: "center",
          my: (0, _v7.rem)(15),
          children: [_v0, (0, _v1.jsx)(_v31.Paragraph, {
            ml: (0, _v7.rem)(10),
            size: "md",
            children: _v1
          })]
        });
      return (0, _v1.jsxs)(_v3.Box, {
        width: (0, _v7.rem)(350),
        px: (0, _v7.rem)(25),
        py: "5",
        ref: _v0,
        children: [(0, _v1.jsx)(_v6.Header, {
          pb: "sm",
          size: "lg",
          children: _v3
        }), (0, _v1.jsx)(_v31.Paragraph, {
          size: "md",
          children: _v4
        }), _v5.map(({
          icon: _v0,
          text: _v1
        }, _v2) => (0, _v1.jsx)(_v11, {
          icon: _v0,
          text: _v1
        }, `${_v2}-${_v1}`)), (0, _v1.jsx)(_v4.Button, {
          variant: "upsell",
          width: "100%",
          onClick: () => {
            _v1 && !_v10 || _v9 ? _v7() : _v8();
          },
          children: _v9 ? _v28.default.Upgrade : _v10 ? _v28.default.Contactus : _v6
        })]
      });
    };
  var _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0);
  let _v56 = ({
    showCRMDisconnectModal: _v0,
    setShowDisconnectModal: _v1,
    dispatch: _v2,
    providerID: _v3,
    list: _v4,
    userId: _v5
  }) => {
    let [_v6, {
        loading: _v7,
        error: _v8,
        called: _v9,
        data: _v10
      }] = (0, _v43.usePutLeadCaptureResourceIdRegistrantsImport)(),
      _v11 = (0, _v38.useToast)(),
      {
        entityId: _v12,
        entityType: _v13
      } = (0, _v27.useConfigStore)(),
      _v14 = (0, _v42.useIsBokeh)();
    return (0, _v2.useEffect)(() => {
      !_v7 && _v9 && (_v10 && (_v1(!1), _v2({
        type: _v24.ACTION_TYPE.SET_CRM_CONNECTION,
        payload: []
      }), _v11({
        title: (0, _v11.translate)({
          singular: "Successfully disconnected List {ListName}",
          replacements: {
            ListName: _v4.name
          },
          dictionary: {
            es: {
              singular: "La lista {ListName} se desconectó correctamente"
            },
            "de-DE": {
              singular: "Die Verbindung von Liste {ListName} wurde erfolgreich aufgehoben"
            },
            "fr-FR": {
              singular: "La liste {ListName} a bien été déconnectée"
            },
            "ja-JP": {
              singular: "リスト{ListName}の接続が正常に解除されました"
            },
            "ko-KR": {
              singular: "{ListName} 목록 연결을 성공적으로 해제했습니다."
            },
            "pt-BR": {
              singular: "Lista {ListName} desconectada com sucesso"
            },
            "zh-CN": {
              singular: "已成功与列表 {ListName} 断开连接"
            }
          }
        }),
        status: "info"
      })), _v8 && _v11({
        title: _v28.default.SomethingWentWrong,
        status: "error"
      }), _v2({
        type: _v24.ACTION_TYPE.LOADING_CRM,
        payload: !1
      }));
    }, [_v8, _v7, _v9, _v10]), (0, _v1.jsxs)(_v53.Modal, {
      isOpen: _v0,
      onClose: () => _v1(!1),
      size: "lg",
      children: [(0, _v1.jsx)(_v55.ModalOverlay, {
        zIndex: "modal"
      }), (0, _v1.jsx)(_v54.ModalContent, {
        color: "text-primary",
        width: (0, _v7.rem)(480),
        children: (0, _v1.jsxs)(_v3.Box, {
          px: "md",
          py: "lg",
          borderRadius: "xl",
          background: "fill-surface",
          children: [(0, _v1.jsx)(_v6.Header, {
            variant: "heading-md",
            size: "xl",
            children: _v28.default.DisconnectModalHeader
          }), (0, _v1.jsx)(_v31.Paragraph, {
            py: "sm",
            variant: "body-md",
            children: _v28.default.DisconnectModalDesc
          }), (0, _v1.jsxs)(_v5.Flex, {
            pt: "md",
            justifyContent: "right",
            children: [(0, _v1.jsx)(_v4.Button, {
              variant: "tertiary",
              onClick: () => {
                _v1(!1);
              },
              _first: {
                mr: (0, _v7.rem)(10)
              },
              children: _v28.default.Cancel
            }), (0, _v1.jsx)(_v4.Button, {
              variant: _v14 ? "destructive" : "negative",
              onClick: () => {
                _v12 && _v13 && (_v2({
                  type: _v24.ACTION_TYPE.LOADING_CRM,
                  payload: !0
                }), _v6({
                  where: {
                    resourceType: _v14.ENTITY_TO_PATH_MAP[_v13],
                    resourceId: _v12
                  },
                  variables: {
                    registrantSource: _v26.CRM_REGISTRANT_SOURCE,
                    emailProviderList: [{
                      listId: `${_v4.id}`,
                      providerId: _v3,
                      isActive: !1,
                      userId: _v5
                    }]
                  }
                }));
              },
              isLoading: _v7,
              children: _v28.default.Disconnect
            })]
          })]
        })
      })]
    });
  };
  var _v57 = _v0.i(0),
    _v58 = _v0.i(0);
  let _v59 = _v0 => _v0 ? {
      opacity: .5,
      pointerEvents: "none"
    } : {},
    _v60 = _v57.keyframes`
  from {
    background-position: 100% 0;
  }
  to {
    background-position: -100% 0;
  }
`,
    _v61 = (_v0 = "80px") => ({
      background: "slate.100",
      width: _v0,
      height: (0, _v7.rem)(8),
      margin: `${(0, _v7.rem)(16)} 0`,
      bgGradient: "linear(to-r, text-secondary, stroke)",
      bgSize: "200%",
      animation: `${_v60} 1s ease-out infinite`
    }),
    _v62 = ({
      src: _v0,
      darkSrc: _v1,
      key: _v2,
      ..._v3
    }) => {
      let {
        colorMode: _v4
      } = (0, _v58.useColorMode)();
      return (0, _v2.createElement)(_v3.Box, {
        ..._v3,
        key: _v2,
        h: (0, _v7.rem)(24),
        w: (0, _v7.rem)(24),
        mr: (0, _v7.rem)(6),
        background: `url(${"dark" === _v4 ? _v1 : _v0}) center/cover no-repeat`
      });
    };
  _v0.s(["ItemImage", 0, _v62, "PlaceholderStyles", 0, _v61, "isDisabled", 0, _v59], 0);
  var _v63 = _v0.i(0),
    _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0);
  let _v67 = ({
    status: _v0,
    title: _v1,
    isClosable: _v2,
    toastId: _v3,
    onCloseComplete: _v4
  }) => (0, _v1.jsxs)(_v5.Flex, {
    px: 8,
    py: 0,
    bg: "success" === _v0 ? "green.100" : "blue.100",
    height: (0, _v7.rem)(48),
    align: "center",
    borderRadius: "sm",
    color: "gray.900",
    gap: "sm",
    mb: "md",
    children: [(0, _v1.jsxs)(_v1.Fragment, {
      children: ["success" === _v0 ? (0, _v1.jsx)(_v64.CircleCheckFilled, {
        color: "green.400"
      }) : (0, _v1.jsx)(_v66.InfoCircleFilled, {
        color: "blue.400"
      }), (0, _v1.jsx)(_v31.Paragraph, {
        size: "md",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        children: _v1
      })]
    }), _v2 && (0, _v1.jsx)(_v63.IconButton, {
      icon: (0, _v1.jsx)(_v65.CloseX, {
        color: "gray.900"
      }),
      "aria-label": "Close",
      onClick: () => _v4?.(_v3),
      cursor: "pointer",
      variant: "tertiary",
      size: "xs"
    })]
  });
  _v0.s(["ToastMessage", 0, _v67], 0);
  let _v68 = ({
      disabled: _v0,
      location: _v1,
      dispatch: _v2,
      importRegistrantState: _v3,
      handleOnClick: _v4,
      loading: _v5,
      fetchStatus: _v6
    }) => {
      let _v7 = (0, _v18.useViewer)(),
        {
          isOpen: _v8,
          onOpen: _v9,
          onClose: _v10
        } = (0, _v37.useDisclosure)(),
        {
          hasUpsell: _v11,
          registrantCapUpperWatermark: _v12
        } = (0, _v19.useEventCapability)(),
        {
          processingCRM: _v13,
          importCRMConnection: _v14,
          showUpgradeType: _v15,
          showCRMDisconnectModal: _v16,
          importCRMStatus: _v17
        } = _v3,
        _v18 = (0, _v42.useIsBokeh)(),
        [_v19, {
          data: _v20,
          loading: _v21,
          error: _v22
        }] = (0, _v43.usePutLeadCaptureResourceIdRegistrantsImport)(),
        {
          entityId: _v23,
          entityType: _v24
        } = (0, _v27.useConfigStore)(),
        _v25 = (0, _v38.useToast)(),
        _v26 = (0, _v2.useMemo)(() => {
          let {
            PROCESSING: _v0,
            PENDING: _v1
          } = _v26.CRM_CSV_STATUS;
          if (!_v13) return null;
          let _v2 = _v17?.filter(({
            status: _v0,
            type: _v1
          }) => _v1 === _v26.SYNC_TYPE.IMPORT && [_v1, _v0].includes(_v0));
          return _v2?.[0]?.emailProviderList;
        }, [_v17, _v13]),
        {
          provider: _v27,
          list: _v28,
          lastImportTime: _v29,
          connectionOwnerId: _v30
        } = _v14?.filter(_v0 => _v0.isActive)[0] || _v26 || {
          provider: null,
          list: null,
          lastImportTime: "",
          connectionOwnerId: null
        };
      (0, _v2.useEffect)(() => {
        !_v21 && (_v22 && (_v25({
          title: _v28.default.SomethingWentWrong,
          status: "error"
        }), _v2({
          type: _v24.ACTION_TYPE.LOADING_CRM,
          payload: !1
        })), _v20 && _v6());
      }, [_v22, _v21, _v20, _v2]);
      let _v31 = (0, _v44.useEscapeKey)(_v8, _v10),
        _v32 = (0, _v44.useEscapeKey)(_v15 === _v26.IMPORT_TYPE.CRM, _v4),
        _v33 = _v30 && _v30 === _v7?.user?.id;
      return _v28 && _v27 ? (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsxs)(_v5.Flex, {
          pr: "xs",
          pl: (0, _v7.rem)(10),
          align: "center",
          boxSizing: "border-box",
          mx: (0, _v7.rem)(7),
          my: (0, _v7.rem)(10),
          border: "1px solid",
          borderColor: "stroke",
          borderRadius: "sm",
          minW: (0, _v7.rem)(150),
          justifyContent: "space-between",
          children: [(0, _v1.jsx)(_v36.Tooltip, {
            label: _v28.name,
            fontSize: "header-xs",
            minWidth: (0, _v7.rem)(250),
            children: (0, _v1.jsxs)(_v5.Flex, {
              align: "center",
              children: [(0, _v1.jsx)(_v62, {
                src: _v27?.icon,
                darkSrc: _v27.darkIcon
              }, _v27.id), (0, _v1.jsx)(_v6.Header, {
                size: "xs",
                isTruncated: !0,
                maxWidth: (0, _v7.rem)(140),
                children: _v28.name
              })]
            })
          }), (0, _v1.jsx)(_v5.Flex, {
            ml: (0, _v7.rem)(10),
            p: (0, _v7.rem)(6),
            children: _v13 || _v21 ? (0, _v1.jsx)(_v35.Spinner, {
              size: _v18 ? "sm" : "md"
            }) : (0, _v1.jsxs)(_v1.Fragment, {
              children: [_v12 && (0, _v1.jsx)(_v36.Tooltip, {
                label: _v28.default.ImportStopped,
                fontSize: "header-xs",
                children: (0, _v1.jsx)("span", {
                  onClick: _v0 => _v0.preventDefault(),
                  children: (0, _v1.jsx)(_v39.CircleExclamation, {
                    color: "red.500",
                    mr: "xs",
                    boxSize: (0, _v7.rem)(20)
                  })
                })
              }), (0, _v1.jsxs)(_v32.Popover, {
                isOpen: _v8 && !_v0 && !_v13,
                onOpen: _v9,
                onClose: _v10,
                children: [(0, _v1.jsx)(_v34.PopoverTrigger, {
                  children: (0, _v1.jsx)(_v3.Box, {
                    onMouseEnter: _v9,
                    onMouseLeave: _v10,
                    children: (0, _v1.jsx)(_v40.EllipsisH, {
                      boxSize: (0, _v7.rem)(20),
                      onClick: _v9,
                      color: _v0 || _v13 ? "text-secondary" : "text-primary",
                      cursor: _v0 || _v13 ? "not-allowed" : "pointer"
                    })
                  })
                }), (0, _v1.jsx)(_v33.PopoverContent, {
                  onMouseEnter: _v9,
                  onMouseLeave: _v10,
                  onKeyDown: _v31,
                  children: (0, _v1.jsxs)("div", {
                    children: [(0, _v1.jsx)(_v3.Box, {
                      sx: _v69(_v12),
                      onClick: () => {
                        _v33 && _v23 && _v24 && (_v2({
                          type: _v24.ACTION_TYPE.LOADING_CRM,
                          payload: !0
                        }), _v27 && _v28 && _v19({
                          where: {
                            resourceType: _v14.ENTITY_TO_PATH_MAP[_v24],
                            resourceId: _v23
                          },
                          variables: {
                            registrantSource: _v26.CRM_REGISTRANT_SOURCE,
                            emailProviderList: [{
                              listId: `${_v28.id}`,
                              providerId: _v27.id,
                              isActive: !0,
                              userId: _v30 || _v7?.user?.id
                            }]
                          }
                        }), _v10(), _v25({
                          render: () => (0, _v1.jsx)(_v67, {
                            status: "info",
                            title: (0, _v11.translate)({
                              singular: 'Syncing registrants from "{NAME}"...',
                              replacements: {
                                NAME: _v28?.name
                              },
                              dictionary: {
                                es: {
                                  singular: 'Sincronizando inscritos de "{NAME}"...'
                                },
                                "de-DE": {
                                  singular: 'Registranten aus "{NAME}" werden synchronisiert...'
                                },
                                "fr-FR": {
                                  singular: "Synchronisation des participants depuis « {NAME} »..."
                                },
                                "ja-JP": {
                                  singular: "「{NAME}」からの登録者を同期しています..."
                                },
                                "ko-KR": {
                                  singular: '"{NAME}"의 등록자를 동기화하는 중입니다...'
                                },
                                "pt-BR": {
                                  singular: 'Sincronizando inscritos de "{NAME}"...'
                                },
                                "zh-CN": {
                                  singular: "正在同步“{NAME}”中的注册者..."
                                }
                              }
                            })
                          }),
                          id: `processing_${_v26.IMPORT}_${_v28?.name}`,
                          duration: null
                        }));
                      },
                      children: (0, _v1.jsx)(_v31.Paragraph, {
                        size: "md",
                        color: _v33 ? "text-primary" : "text-secondary",
                        children: (0, _v1.jsx)(_v36.Tooltip, {
                          label: _v28.default.TooltipImportText,
                          fontSize: "header-xs",
                          isDisabled: !!_v33,
                          children: _v28.default.ImportNow
                        })
                      })
                    }), _v29 && (0, _v1.jsx)(_v3.Box, {
                      sx: _v69(_v12),
                      pointerEvents: "none",
                      children: (0, _v1.jsx)(_v31.Paragraph, {
                        size: "md",
                        pl: "xs",
                        color: "slate.400",
                        children: (0, _v45.getSyncTime)(_v29)
                      })
                    }), (0, _v1.jsx)(_v3.Box, {
                      sx: _v69(),
                      onClick: () => {
                        _v2({
                          type: _v24.ACTION_TYPE.SHOW_DISCONNECT_MODAL,
                          payload: !0
                        }), _v10();
                      },
                      children: (0, _v1.jsx)(_v31.Paragraph, {
                        size: "md",
                        color: "red.500",
                        children: _v28.default.DisconnectList
                      })
                    })]
                  })
                })]
              })]
            })
          })]
        }), (0, _v1.jsx)(_v56, {
          showCRMDisconnectModal: _v16,
          setShowDisconnectModal: _v0 => {
            _v2({
              type: _v24.ACTION_TYPE.SHOW_DISCONNECT_MODAL,
              payload: _v0
            });
          },
          dispatch: _v2,
          providerID: _v27.id,
          list: _v28,
          userId: _v30 || _v7?.user?.id
        })]
      }) : (0, _v1.jsxs)(_v32.Popover, {
        isOpen: _v15 === _v26.IMPORT_TYPE.CRM,
        onClose: _v4,
        children: [(0, _v1.jsx)(_v34.PopoverTrigger, {
          children: (0, _v1.jsx)(_v3.Box, {
            children: (0, _v1.jsx)(_v4.Button, {
              leftIcon: (0, _v1.jsx)(_v41.PopIn, {
                boxSize: (0, _v7.rem)(20)
              }),
              mx: (0, _v7.rem)(10),
              my: (0, _v7.rem)(7),
              variant: "secondary",
              onClick: () => _v4(_v26.IMPORT_TYPE.CRM),
              isDisabled: _v0 || _v5 || _v13,
              children: _v28.default.ImportFromList
            })
          })
        }), (0, _v1.jsx)(_v33.PopoverContent, {
          onKeyDown: _v32,
          children: (0, _v1.jsx)(_v52, {
            isUpsell: _v11,
            location: _v1,
            type: _v26.IMPORT_TYPE.CRM
          })
        })]
      });
    },
    _v69 = _v0 => ({
      py: (0, _v7.rem)(8),
      px: (0, _v7.rem)(12),
      cursor: "pointer",
      "&:last-child": {
        borderTop: `${(0, _v7.rem)(1)} solid`,
        borderColor: "stroke"
      },
      ..._v59(_v0),
      _hover: {
        backgroundColor: "background-blur"
      }
    });
  var _v70 = _v0.i(0);
  let _v71 = ({
    disabled: _v0,
    handleOnClick: _v1,
    location: _v2,
    importRegistrantState: _v3
  }) => {
    let {
        hasUpsell: _v4
      } = (0, _v19.useEventCapability)(),
      {
        showUpgradeType: _v5
      } = _v3,
      _v6 = (0, _v44.useEscapeKey)(_v5 === _v26.IMPORT_TYPE.CSV, _v1);
    return (0, _v1.jsxs)(_v32.Popover, {
      isOpen: _v5 === _v26.IMPORT_TYPE.CSV,
      onClose: _v1,
      children: [(0, _v1.jsx)(_v34.PopoverTrigger, {
        children: (0, _v1.jsx)(_v4.Button, {
          leftIcon: (0, _v1.jsx)(_v70.FileUpload, {}),
          variant: "secondary",
          onClick: () => _v1(_v26.IMPORT_TYPE.CSV),
          isDisabled: _v0,
          my: (0, _v7.rem)(7),
          children: _v28.default.UploadCSV
        })
      }), (0, _v1.jsx)(_v33.PopoverContent, {
        onKeyDown: _v6,
        children: (0, _v1.jsx)(_v52, {
          isUpsell: _v4,
          location: _v2,
          type: _v26.IMPORT_TYPE.CSV
        })
      })]
    });
  };
  _v6.Header, _v0.s(["AttendeeHeader", 0, ({
    response: _v0,
    isLoading: _v1,
    registrationData: _v2,
    importRegistrantState: _v3,
    dispatch: _v4,
    crmInfo: _v5,
    isCsvProcessing: _v6
  }) => {
    let _v7 = (0, _v27.useConfigStore)(_v0 => _v0.entityType),
      _v8 = (0, _v27.useConfigStore)(_v0 => _v0.isRegistrationOn),
      _v9 = _v7 === _v14.ENTITY_TYPE.VIDEO,
      {
        sendRegistrationActionBP: _v10
      } = (0, _v20.useAnalytics)(),
      {
        sendUpsellEvent: _v11
      } = (0, _v13.useUpsellAnalytics)(),
      {
        onRegistrantsActionClicked: _v12
      } = (0, _v12.useCallbackContext)(),
      {
        trackLiveStreamRegistrantsActionClicked: _v13
      } = (0, _v16.useLiveStreamBroadcasterTracking)(),
      {
        processingCRM: _v14
      } = _v3,
      [_v15, _v16] = (0, _v2.useState)(!1),
      [_v17, {
        data: _v18,
        loading: _v19,
        called: _v20
      }] = (0, _v9.useGetLeadCaptureResourceIdFormLazy)(),
      _v21 = (0, _v18.useViewer)(),
      _v22 = _v21?.user,
      [_v23, _v24] = (0, _v2.useState)(!1),
      [_v25, {
        data: _v26,
        loading: _v27,
        called: _v28
      }] = (0, _v10.useGetLeadCaptureResourceIdRegistrantsExportLazy)(),
      {
        download: _v29
      } = (0, _v22.useRegistrantDownload)(),
      {
        CRMCalled: _v30,
        importCRMData: _v31,
        isCRMLoading: _v32,
        isCRMStatusLoading: _v33,
        fetchCRMStatus: _v34
      } = _v5,
      {
        canGoLive: _v35
      } = (0, _v23.useTeamStore)(),
      {
        hasAttendeeUpsell: _v36,
        hasUpsell: _v37,
        loading: _v38
      } = (0, _v19.useEventCapability)(),
      {
        uri: _v39,
        status: _v40
      } = (0, _v21.useEntityStore)(),
      _v41 = _v22?.email,
      _v42 = !_v35 || _v40 === _v26.EVENT_STATUS.ENDED || _v38 || _v6 || !_v8,
      _v43 = _v0 => {
        _v12?.(_v0 === _v26.IMPORT_TYPE.CSV ? "upload_csv" : "sync_from_email_list"), _v37 || _v2 && !_v2.isUnlimited && _v2.capping === _v0.total ? _v4({
          type: _v24.ACTION_TYPE.SHOW_UPGRADE_POPOVER,
          payload: _v0 || null
        }) : (_v4({
          type: _v24.ACTION_TYPE.SET_SHOW_MODAL,
          payload: _v0 || null
        }), _v4({
          type: _v24.ACTION_TYPE.SHOW_UPGRADE_POPOVER,
          payload: null
        })), _v10({
          eventName: _v0 === _v26.IMPORT_TYPE.CSV ? _v25.BP_EVENT_NAME.REGISTRANTS_UPLOAD_CSV_MODAL : _v25.BP_EVENT_NAME.REGISTRANTS_SYNC_EMAIL_PROVIDER,
          location: _v25.BP_LOCATION.TOP_ACTION_BAR,
          copy: _v0 === _v26.IMPORT_TYPE.CSV ? _v25.BP_COPY.UPLOAD_CSV : _v25.BP_COPY.SYNC_FROM_EMAIL_LIST,
          actionName: _v0 === _v26.IMPORT_TYPE.CSV ? _v25.BP_VALUES.OPEN_UPLOAD_CSV_MODAL : _v25.BP_VALUES.OPEN_EMAIL_PROVIDER_MODAL
        }), _v7 === _v14.ENTITY_TYPE.EVENT && (_v0 === _v26.IMPORT_TYPE.CSV ? _v13({
          liveStreamRegistrantsAction: "upload_csv"
        }) : _v13({
          liveStreamRegistrantsAction: "sync_from_email_list"
        }));
      },
      _v44 = (0, _v2.useCallback)(() => {
        _v7 && _v25({
          where: {
            resourceType: _v14.ENTITY_TO_PATH_MAP[_v7],
            resourceId: String((0, _v15.getLastIdFromUri)(_v39))
          },
          query: {
            downloadAsyncSupported: !0
          }
        });
      }, [_v7, _v39, _v25]);
    return (0, _v2.useEffect)(() => {
      let _v0 = !_v19 && _v20;
      _v15 && _v0 && null !== _v18 && (_v18?.registrationData?.downloadCsvAsynchronously ? _v44() : _v29(), _v16(!1));
    }, [_v20, _v18, _v19, _v29, _v15, _v44]), (0, _v2.useEffect)(() => {
      !_v27 && _v28 && null !== _v26 && _v24(!0);
    }, [_v28, _v26, _v27]), (0, _v2.useEffect)(() => {
      _v30 && !_v32 && _v31?.emailProviderList && _v4({
        type: _v24.ACTION_TYPE.SET_CRM_CONNECTION,
        payload: _v31?.emailProviderList
      });
    }, [_v31, _v32, _v30, _v4]), (0, _v1.jsx)(_v3.Box, {
      mb: "md",
      children: (0, _v1.jsxs)(_v5.Flex, {
        justifyContent: "space-between",
        alignItems: "center",
        children: [(0, _v1.jsxs)(_v5.Flex, {
          children: [(0, _v1.jsx)(_v6.Header, {
            variant: "heading-md",
            size: "xl",
            children: _v2 ? _v2.isUnlimited ? (0, _v11.translate)({
              singular: "Registrants {COUNT}",
              replacements: {
                COUNT: (0, _v11.humanize)(_v0.total)
              },
              dictionary: {
                es: {
                  singular: "Inscritos {COUNT}"
                },
                "de-DE": {
                  singular: "Registrierte Teilnehmer {COUNT}"
                },
                "fr-FR": {
                  singular: "{COUNT} inscrit(e)s"
                },
                "ja-JP": {
                  singular: "登録者：{COUNT}人"
                },
                "ko-KR": {
                  singular: "등록자 {COUNT}"
                },
                "pt-BR": {
                  singular: "{COUNT} inscritos"
                },
                "zh-CN": {
                  singular: "注册者 {COUNT} 人"
                }
              }
            }) : (0, _v11.translate)({
              singular: "Registrants {COUNT} of {MAX}",
              replacements: {
                COUNT: (0, _v11.humanize)(_v0.total),
                MAX: _v2?.capping
              },
              dictionary: {
                es: {
                  singular: "Inscritos {COUNT} de {MAX}"
                },
                "de-DE": {
                  singular: "Registrierte Teilnehmer {COUNT} von {MAX}"
                },
                "fr-FR": {
                  singular: "{COUNT} inscrit(e)s sur {MAX}"
                },
                "ja-JP": {
                  singular: "登録者：{COUNT}人（全{MAX}人中）"
                },
                "ko-KR": {
                  singular: "{MAX}중 등록자 {COUNT}"
                },
                "pt-BR": {
                  singular: "{COUNT} de {MAX} inscritos"
                },
                "zh-CN": {
                  singular: "注册人，{COUNT}/{MAX}"
                }
              }
            }) : _v28.default.Registrants
          }), _v36 && (0, _v1.jsx)(_v3.Box, {
            pl: "sm",
            children: !_v9 && (0, _v1.jsx)(_v29.UpsellBadge, {
              onClick: () => {
                _v11({
                  pageName: _v25.BP_PAGE.EVENT_REGISTRATION_PAGE,
                  target: _v25.BP_TARGET.UPGRADE_PAGE,
                  targetPath: window.location.pathname,
                  upsellName: "add_registrants",
                  interfaceType: "page",
                  product: "events",
                  feature: "registration",
                  location: _v25.BP_LOCATION.HEADER,
                  entityType: _v7,
                  copy: _v25.BP_COPY.UPGRADE,
                  flow: _v25.BP_FLOW.REGISTRANTS_TAB
                });
              }
            })
          })]
        }), (0, _v1.jsxs)(_v5.Flex, {
          children: [(0, _v1.jsx)(_v68, {
            disabled: _v42,
            handleOnClick: _v43,
            location: _v17.BP_CLICK_EVENT_FIELDS.LOCATION.ATTENDEES_IMPORT_CRM_POPOVER,
            loading: _v33,
            importRegistrantState: _v3,
            dispatch: _v4,
            fetchStatus: _v34
          }), (0, _v1.jsx)(_v71, {
            disabled: _v42 || _v14,
            handleOnClick: _v43,
            importRegistrantState: _v3,
            location: _v17.BP_CLICK_EVENT_FIELDS.LOCATION.ATTENDEES_UPLOAD_CSV_POPOVER
          }), (0, _v1.jsx)(_v4.Button, {
            leftIcon: (0, _v1.jsx)(_v8.DownloadImport, {}),
            isDisabled: !_v35 || _v1 || 0 === _v0.total || _v15,
            isLoading: _v15,
            onClick: () => {
              _v16(!0), _v7 && (_v12?.("export_csv"), _v17({
                where: {
                  resourceType: _v14.ENTITY_TO_PATH_MAP[_v7],
                  resourceId: `${(0, _v15.getLastIdFromUri)(_v39)}`
                },
                select: ["registrationData.downloadCsvAsynchronously"]
              }), _v10({
                eventName: _v25.BP_EVENT_NAME.REGISTRANTS_EXPORT_CSV,
                location: _v25.BP_LOCATION.TOP_ACTION_BAR,
                copy: _v25.BP_COPY.EXPORT_CSV,
                actionName: _v25.BP_VALUES.EXPORT_REGISTRANTS_CSV
              }), _v7 === _v14.ENTITY_TYPE.EVENT && _v13({
                liveStreamRegistrantsAction: "export_csv"
              }));
            },
            size: "md",
            variant: "primary",
            m: `${(0, _v7.rem)(7)} ${(0, _v7.rem)(13)}`,
            children: _v28.default.ExportCSV
          })]
        }), (0, _v1.jsx)(_v30.DownloadRequestedInfoModal, {
          email: _v41,
          onClose: () => {
            _v24(!1);
          },
          open: _v23
        })]
      })
    });
  }], 0);
  var _v72 = _v0.i(0),
    _v73 = _v0.i(0),
    _v74 = _v0.i(0),
    _v75 = _v0.i(0),
    _v76 = _v0.i(0),
    _v77 = _v0.i(0),
    _v78 = _v0.i(0),
    _v79 = _v0.i(0),
    _v80 = _v0.i(0),
    _v81 = _v0.i(0),
    _v82 = _v0.i(0),
    _v83 = _v0.i(0),
    _v84 = _v0.i(0);
  let _v85 = " ... ",
    _v86 = ({
      text: _v0 = "",
      endChars: _v1 = 5,
      ..._v2
    }) => {
      let [_v3, _v4] = (0, _v2.useState)(0),
        _v5 = (0, _v2.useRef)(null),
        _v6 = (0, _v2.useRef)(null),
        _v7 = (0, _v2.useMemo)(() => {
          if (!_v3 || !_v6.current) return _v0;
          let _v0 = _v0 => _v6.current ? (_v6.current.innerText = _v0, _v6.current.offsetWidth) : 0;
          if (_v0(_v0) <= _v3) return _v0;
          let _v1 = _v0.slice(-_v1),
            _v2 = 0,
            _v3 = _v0.length - _v1,
            _v4 = 0;
          for (; _v2 <= _v3;) {
            let _v0 = Math.floor((_v2 + _v3) / 2);
            _v0(`${_v0.slice(0, _v0)}${_v85}${_v1}`) <= _v3 ? (_v4 = _v0, _v2 = _v0 + 1) : _v3 = _v0 - 1;
          }
          return `${_v0.slice(0, _v4)}${_v85}${_v1}`;
        }, [_v0, _v3, _v1]);
      return (0, _v2.useEffect)(() => {
        if (!_v5.current) return;
        let _v0 = new ResizeObserver(_v0 => {
          let _v1 = _v0[0]?.contentRect.width;
          _v1 && _v4(Math.ceil(_v1));
        });
        return _v0.observe(_v5.current), () => _v0.disconnect();
      }, []), (0, _v1.jsxs)(_v3.Box, {
        ref: _v5,
        position: "relative",
        w: "100%",
        overflow: "hidden",
        whiteSpace: "nowrap",
        children: [(0, _v1.jsx)(_v36.Tooltip, {
          label: (0, _v1.jsx)(_v3.Box, {
            maxW: (0, _v7.rem)(350),
            children: _v0
          }),
          placement: "top",
          closeOnScroll: !0,
          fontSize: "body-md",
          isDisabled: !_v7?.includes(_v85),
          children: (0, _v1.jsx)(_v84.Text, {
            as: "span",
            variant: "body-xl",
            ..._v2,
            children: _v7
          })
        }), (0, _v1.jsx)(_v84.Text, {
          as: "span",
          variant: "body-xl",
          ref: _v6,
          ..._v2,
          position: "absolute",
          top: 0,
          left: 0,
          visibility: "hidden",
          whiteSpace: "nowrap",
          pointerEvents: "none"
        })]
      });
    };
  _v0.s(["MiddleEllipsis", 0, _v86], 0);
  let _v87 = ({
      dropInOut: _v0,
      totalDuration: _v1,
      hasAttendeeUpsell: _v2
    }) => {
      let _v3 = (0, _v58.useColorModeValue)("green.100", "green.700"),
        _v4 = {
          sec: 0,
          min: 0,
          percentage: 0
        },
        [_v5, _v6] = (0, _v2.useState)([]),
        [_v7, _v8] = (0, _v2.useState)(_v4),
        {
          sendUpsellEvent: _v9
        } = (0, _v13.useUpsellAnalytics)(),
        _v10 = (0, _v27.useConfigStore)(_v0 => _v0.entityType);
      return (0, _v2.useEffect)(() => {
        if (_v1 > 0 && _v0.length > 0) {
          let _v0, _v1;
          _v6((_v0 = 0, _v1 = _v0.map(_v0 => {
            _v0 += _v0.endTime - _v0.startTime;
            let _v1 = _v0.startTime / _v1 * 100,
              _v2 = _v0.endTime / _v1 * 100,
              _v3 = `${(0, _v45.getDurationString)(_v0.startTime)} — ${(0, _v45.getDurationString)(_v0.endTime)}`;
            return {
              ..._v0,
              width: _v2 - _v1,
              left: _v1,
              range: _v3
            };
          }), _v8({
            sec: _v0,
            min: Math.round(_v0 / 60),
            percentage: Math.round(_v0 / _v1 * 100)
          }), _v1));
        } else _v6([]), _v8(_v4);
      }, [_v1, _v0]), (0, _v1.jsxs)(_v1.Fragment, {
        children: [_v2 ? (0, _v1.jsxs)(_v5.Flex, {
          alignItems: "center",
          pb: "sm",
          children: [(0, _v1.jsx)(_v6.Header, {
            size: "xs",
            children: _v28.default.WatchTime
          }), (0, _v1.jsx)(_v3.Box, {
            ml: (0, _v7.rem)(5),
            children: (0, _v1.jsx)(_v29.UpsellBadge, {
              onClick: () => {
                _v9({
                  pageName: _v10 === _v14.ENTITY_TYPE.EVENT ? _v25.BP_PAGE_NAME.EVENT_REGISTRATION_PAGE : _v25.BP_PAGE_NAME.VIDEO_REGISTRATION_PAGE,
                  target: _v25.BP_TARGET.UPGRADE_PAGE,
                  targetPath: window.location.pathname,
                  upsellName: "watch_time_analytics",
                  interfaceType: "page",
                  product: _v10 === _v14.ENTITY_TYPE.EVENT ? "events" : "gates",
                  feature: "watch_time_analytics",
                  modalName: _v25.BP_MODAL.ATTENDEES_MODAL,
                  location: _v25.BP_LOCATION.MODAL,
                  entityType: _v10,
                  copy: _v25.BP_COPY.WATCH_TIME,
                  flow: null
                });
              }
            })
          })]
        }) : (0, _v1.jsxs)(_v5.Flex, {
          justifyContent: "space-between",
          alignItems: "center",
          pb: "sm",
          children: [(0, _v1.jsxs)(_v5.Flex, {
            alignItems: "center",
            children: [(0, _v1.jsx)(_v6.Header, {
              size: "xs",
              color: "text-primary",
              children: (0, _v11.translate)({
                singular: "Watch time {PERCENTAGE}",
                replacements: {
                  PERCENTAGE: () => (0, _v1.jsx)(_v3.Box, {
                    as: "span",
                    color: _v7.sec > 0 ? "green.500" : "slate.500",
                    children: `${_v7.percentage || 0}%`
                  })
                },
                dictionary: {
                  "fr-FR": {
                    singular: "Temps de visionnage {PERCENTAGE}"
                  },
                  "ja-JP": {
                    singular: "視聴時間 {PERCENTAGE}"
                  },
                  "ko-KR": {
                    singular: "시청 시간 {PERCENTAGE}"
                  },
                  "zh-CN": {
                    singular: "观看时间 {PERCENTAGE}"
                  }
                }
              })
            }), (0, _v1.jsx)(_v36.Tooltip, {
              label: _v28.default.LatencyWatch,
              fontSize: "body-md",
              children: (0, _v1.jsx)(_v5.Flex, {
                pl: "sm",
                children: (0, _v1.jsx)(_v39.CircleExclamation, {
                  boxSize: (0, _v7.rem)(16)
                })
              })
            })]
          }), (0, _v1.jsx)(_v6.Header, {
            size: "xs",
            children: (0, _v11.translate)({
              singular: "{SPAN}Total{/SPAN} {TIME} min",
              plural: "{SPAN}Total{/SPAN} {TIME} mins",
              count: _v7.min,
              replacements: {
                SPAN: _v0 => (0, _v1.jsx)(_v3.Box, {
                  display: "inline",
                  color: "text-secondary",
                  children: _v0
                }),
                TIME: _v7.min
              },
              dictionary: {
                "fr-FR": {
                  singular: "{SPAN}Total{/SPAN} {TIME} min",
                  plural: "{SPAN}Total{/SPAN} {TIME} min"
                },
                "ja-JP": {
                  singular: "{SPAN}合計{/SPAN} {TIME} 分",
                  plural: "{SPAN}合計{/SPAN} {TIME} 分"
                },
                "ko-KR": {
                  singular: "{SPAN}총{/SPAN} {TIME}분",
                  plural: "{SPAN}총{/SPAN} {TIME}분"
                },
                "zh-CN": {
                  singular: "{SPAN}总共{/SPAN} {TIME} 分钟",
                  plural: "{SPAN}总共{/SPAN} {TIME} 分钟"
                }
              }
            })
          })]
        }), (0, _v1.jsx)(_v3.Box, {
          height: (0, _v7.rem)(16),
          position: "relative",
          overflow: "hidden",
          mb: _v2 ? "xl" : "sm",
          bg: _v7.sec > 0 || _v2 ? _v3 : "grayscale.100",
          borderRadius: "xs",
          boxSizing: "content-box",
          transform: "matrix(1, 0, 0, 1, 0, 0)",
          filter: _v2 ? "blur(4px)" : "",
          children: _v5.length > 0 && _v5.map(_v0 => {
            let _v1 = Math.round((_v0.endTime - _v0.startTime) / 60);
            return (0, _v1.jsx)(_v36.Tooltip, {
              isDisabled: _v2,
              hasArrow: !0,
              label: (0, _v1.jsx)(_v6.Header, {
                size: "2xs",
                children: (0, _v11.translate)({
                  singular: "{TIME} min {RANGE}",
                  plural: "{TIME} mins {RANGE}",
                  count: _v1,
                  replacements: {
                    TIME: _v1,
                    RANGE: (0, _v1.jsx)(_v3.Box, {
                      children: _v0.range
                    })
                  },
                  dictionary: {
                    "fr-FR": {
                      singular: "{TIME} min {RANGE}",
                      plural: "{TIME} min {RANGE}"
                    },
                    "ja-JP": {
                      singular: "{TIME} 分 {RANGE}",
                      plural: "{TIME} 分 {RANGE}"
                    },
                    "ko-KR": {
                      singular: "{TIME}분 {RANGE}",
                      plural: "{TIME}분 {RANGE}"
                    },
                    "zh-CN": {
                      singular: "{TIME} 分钟 {RANGE}",
                      plural: "{TIME} 分钟 {RANGE}"
                    }
                  }
                })
              }),
              children: (0, _v1.jsx)(_v3.Box, {
                h: "100%",
                width: _v2 ? "100%" : `${_v0.width}%`,
                left: _v2 ? 0 : `${_v0.left}%`,
                pos: "absolute",
                borderRadius: "xs",
                children: (0, _v1.jsx)(_v3.Box, {
                  height: "100%",
                  borderLeft: "2px solid",
                  borderRight: "2px solid",
                  borderColor: "surface",
                  backgroundColor: "status-positive-primary",
                  transform: "matrix(1, 0, 0, 1, 0, 0)",
                  overflow: "hidden",
                  position: "relative",
                  zIndex: "2",
                  boxSizing: "content-box",
                  sx: {
                    perspective: "1000px",
                    backfaceVisibility: "hidden",
                    animation: `${_v88} ${.03 * _v0.width}s ease-in-out`,
                    animationFillMode: "both"
                  }
                })
              })
            }, `${_v1}_drop_in_out`);
          })
        }), _v2 ? (0, _v1.jsx)(_v1.Fragment, {}) : (0, _v1.jsxs)(_v5.Flex, {
          justifyContent: "space-between",
          children: [(0, _v1.jsx)(_v31.Paragraph, {
            color: "text-primary",
            size: "sm",
            children: (0, _v45.getDurationString)(0)
          }), (0, _v1.jsx)(_v31.Paragraph, {
            color: "text-primary",
            size: "sm",
            children: (0, _v45.getDurationString)(_v1)
          })]
        })]
      });
    },
    _v88 = _v57.keyframes`
    0% { width: 0; }
    100% { width: 100%; }
`;
  var _v89 = _v0.i(0);
  let _v90 = ({
      isActive: _v0,
      handleRetry: _v1
    }) => (0, _v1.jsxs)(_v89.Center, {
      flexDirection: "column",
      mb: (0, _v7.rem)(15),
      children: [(0, _v1.jsx)(_v39.CircleExclamation, {
        boxSize: (0, _v7.rem)(24)
      }), (0, _v1.jsx)(_v84.Text, {
        variant: "body-xl",
        mt: "sm",
        color: "text-secondary",
        fontSize: "header-xs",
        children: (0, _v11.translate)({
          singular: "Unable to load data. Please {A}try again.{/A}",
          replacements: {
            A: _v0 => (0, _v1.jsx)(_v3.Box, {
              as: "a",
              onClick: _v1,
              onKeyDown: _v0 => {
                _v0.key === _v26.KEY_CODES.ENTER && _v1();
              },
              tabIndex: _v0 ? 0 : -1,
              color: "blue.500",
              cursor: "pointer",
              textDecorationLine: "underline",
              children: _v0
            })
          },
          dictionary: {
            es: {
              singular: "No se pudieron cargar los datos. {A}Vuelve a intentarlo{/A}."
            },
            "de-DE": {
              singular: "Daten konnten nicht geladen werden. Bitte {A}versuche es erneut{/A}."
            },
            "fr-FR": {
              singular: "Impossible de charger les données. Veuillez {A}réessayer{/A}."
            },
            "ja-JP": {
              singular: "データを読み込めません。{A}再試行{/A}してください。"
            },
            "ko-KR": {
              singular: "데이터를 로드할 수 없습니다. {A}다시 시도{/A}해주세요."
            },
            "pt-BR": {
              singular: "Não foi possível carregar os dados. Por favor, {A}tente novamente.{/A}"
            },
            "zh-CN": {
              singular: "无法加载数据。请{A}重试{/A}。"
            }
          }
        })
      })]
    }),
    _v91 = ({
      refreshEngagementData: _v0,
      error: _v1,
      loading: _v2,
      dropInOut: _v3,
      totalDuration: _v4
    }) => {
      let {
        hasAttendeeUpsell: _v5
      } = (0, _v19.useEventCapability)();
      return (0, _v1.jsx)(_v3.Box, {
        borderRadius: "sm",
        mb: "sm",
        p: `${(0, _v7.rem)(30)} ${(0, _v7.rem)(24)} ${(0, _v7.rem)(12)}`,
        overflow: "hidden",
        background: "fill-component",
        children: _v2 ? (0, _v1.jsx)(_v5.Flex, {
          flexDirection: "column",
          children: (0, _v1.jsx)(_v3.Box, {
            sx: _v61("100%")
          })
        }) : _v1 ? (0, _v1.jsx)(_v90, {
          handleRetry: () => {
            _v0();
          }
        }) : (0, _v1.jsx)(_v87, {
          dropInOut: _v3,
          totalDuration: _v4,
          hasAttendeeUpsell: _v5
        })
      });
    };
  var _v92 = _v0.i(0),
    _v93 = _v0.i(0),
    _v94 = _v0.i(0),
    _v95 = _v0.i(0),
    _v96 = _v0.i(0),
    _v97 = _v0.i(0),
    _v98 = _v0.i(0),
    _v99 = _v0.i(0),
    _v100 = _v0.i(0),
    _v101 = _v0.i(0);
  async function _v102({
    baseUrl: _v0,
    select: _v1,
    where: {
      liveEventId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v100.measureLatency)("getLiveEventVideos", "GET", async () => {
      let _v0 = await fetch(`${_v0}/live_events/${_v2}/videos?${(0, _v101.searchQueryString)(_v3)}&fields=${_v1.map(_v101.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v101.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v101.deepCamelCase)(_v1);
    });
  }
  async function _v103({
    baseUrl: _v0,
    variables: _v1,
    where: {
      liveEventId: _v2
    },
    ..._v3
  }) {
    return (0, _v100.measureLatency)("postLiveEventVideos", "POST", async () => {
      let _v0 = await fetch(`${_v0}/live_events/${_v2}/videos`, {
        ..._v3,
        method: "POST",
        body: JSON.stringify((0, _v101.deepSnakeCase)(_v1))
      });
      if (!_v0.ok) throw new _v101.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v101.deepCamelCase)(_v1);
    });
  }
  async function _v104({
    baseUrl: _v0,
    variables: _v1,
    where: {
      liveEventId: _v2
    },
    ..._v3
  }) {
    return (0, _v100.measureLatency)("deleteLiveEventVideos", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/live_events/${_v2}/videos`, {
        ..._v3,
        method: "DELETE",
        body: JSON.stringify((0, _v101.deepSnakeCase)(_v1))
      });
      if (!_v0.ok) throw new _v101.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v101.deepCamelCase)(_v1);
    });
  }
  var _v105 = _v0.i(0),
    _v106 = _v0.i(0),
    _v107 = _v0.i(0),
    _v108 = _v0.i(0);
  function _v109() {
    let {
        mutate: _v0
      } = (0, _v106.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v108.useGctlConfig)(),
      [_v5, _v6] = (0, _v99.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/live_events/${_v0.where.liveEventId}/videos${(0, _v99.serializeQuery)(_v0)}`, _v102({
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
  "true" === _v98.default.env.STORYBOOK && (0, _v99.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v108.useGctlConfig)();
    return (0, _v105.default)(_v2 ? `/live_events/${_v2.where.liveEventId}/videos${(0, _v99.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v102({
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
    endpoint: "/live_events/:liveEventId/videos",
    method: "GET"
  }), "true" === _v98.default.env.STORYBOOK && (0, _v99.assignMswData)(_v109, {
    endpoint: "/live_events/:liveEventId/videos",
    method: "GET"
  }), "true" === _v98.default.env.STORYBOOK && (0, _v99.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v108.useGctlConfig)();
    return (0, _v107.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/live_events/${_v2.where.liveEventId}/videos?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v102({
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
    endpoint: "/live_events/:liveEventId/videos",
    method: "GET"
  }), "true" === _v98.default.env.STORYBOOK && (0, _v99.assignMswData)(function () {
    let {
        baseUrl: _v0,
        jwt: _v1,
        xVimeoPage: _v2,
        locale: _v3
      } = (0, _v108.useGctlConfig)(),
      [_v4, _v5] = (0, _v99.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v5({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v103({
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
  }, {
    endpoint: "/live_events/:liveEventId/videos",
    method: "POST"
  }), "true" === _v98.default.env.STORYBOOK && (0, _v99.assignMswData)(function () {
    let {
        baseUrl: _v0,
        jwt: _v1,
        xVimeoPage: _v2,
        locale: _v3
      } = (0, _v108.useGctlConfig)(),
      [_v4, _v5] = (0, _v99.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v5({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v104({
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
  }, {
    endpoint: "/live_events/:liveEventId/videos",
    method: "DELETE"
  });
  let _v110 = ["analytics", "analytics.viewPercentage", "createdOn", "data", "email", "firstName", "hasAttended", "isBlocked", "lastName", "referrer", "sourceDetails", "sourceType", "uri", "views"],
    _v111 = ["uri", "duration", "live.status", "created_time"],
    _v112 = ["service_id", "service_type", "name", "icon", "user_id", "dark_icon", "connected", "lists.id", "lists.name", "lists.count", "lists.has_more", "can_import_from_crm"];
  _v0.s(["ATTENDEES_API_FIELDS", 0, ["uri", "analytics.view_percentage", "created_on", "data", "email", "first_name", "is_blocked", "last_name", "has_attended", "views", "source_type", "source_details"], "CLIP_COLLECTION_FIELDS", 0, _v111, "CRM_IMPORT_FIELDS", 0, ["uri", "status", "type", "errorDetails", "pendingUserAction", "createdOn", "emailProviderList.isActive", "emailProviderList.lastImportTime", "emailProviderList.provider", "emailProviderList.list", "emailProviderList.connectionOwnerId"], "ESP_API_FIELDS", 0, _v112, "EVENT_API_FIELDS_FOR_ATTENDEE_PAGE", 0, ["uri", "title", "user", "schedule", "metadata", "link", "status", "streamPrivacy"], "FORM_FIELDS_FOR_ATTENDEE_PAGE", 0, ["hasLeadsFromLegacyForm", "createdOn", "registrationData.isUnlimited", "registrationData.capping", "registrationData.downloadCsvAsynchronously", "registrationData.lowerLimit", "registrationData.total", "registrationData.upperLimit"], "LeadResponseFields", 0, _v110, "SHOWCASE_API_FIELDS", 0, ["uri", "user.uri", "name", "privacy", "metadata.interactions.edit", "pictures", "link", "metadata.connections.videos.total", "seoAllowIndexed"], "VIDEO_API_FIELDS", 0, ["uri", "duration", "user.uri", "privacy", "metadata.interactions.edit", "name", "pictures", "link", "isPlayable"]], 0);
  let _v113 = (0, _v2.createContext)({
      videos: [],
      fetchVideos: () => null
    }),
    _v114 = () => (0, _v2.useContext)(_v113);
  _v0.s(["default", 0, function ({
    children: _v0,
    entityLink: _v1
  }) {
    let _v2 = (0, _v15.getLastIdFromUri)(_v1),
      [_v3, {
        loading: _v4,
        data: _v5
      }] = _v109(),
      _v6 = (0, _v27.useConfigStore)(_v0 => _v0.entityType),
      [_v7, _v8] = (0, _v2.useState)([]),
      _v9 = (0, _v2.useCallback)(() => {
        _v6 === _v14.ENTITY_TYPE.EVENT && _v2 && _v3({
          where: {
            liveEventId: _v2
          },
          headers: {
            Accept: "application/vnd.vimeo.*;version=3.4.1"
          },
          select: _v111
        });
      }, [_v6, _v2, _v3]);
    return (0, _v2.useEffect)(() => {
      _v9();
    }, [_v9]), (0, _v2.useEffect)(() => {
      !_v4 && _v5?.data && _v8(_v5.data);
    }, [_v5, _v4]), (0, _v1.jsx)(_v113.Provider, {
      value: {
        videos: _v7,
        fetchVideos: _v9
      },
      children: _v0
    });
  }, "useVideos", 0, _v114], 0);
  let _v115 = ({
    selectedClip: _v0,
    setSelectedClip: _v1,
    loading: _v2
  }) => {
    let {
        videos: _v3
      } = _v114(),
      {
        status: _v4
      } = (0, _v21.useEntityStore)(),
      _v5 = navigator.language || "en-US",
      _v6 = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "numeric",
        hour12: !1
      },
      _v7 = (0, _v45.getIntlDate)(_v0?.createdTime, _v6, _v5),
      _v8 = _v3.filter(_v0 => {
        let _v1;
        return _v1 = _v0.duration, _v0?.live?.status === _v26.EVENT_CLIP_STATUS.DONE && _v1 > 0 && _v4 === _v26.EVENT_STATUS.ENDED;
      });
    return (0, _v2.useEffect)(() => {
      _v1(_v8[0]);
    }, [_v3]), (0, _v1.jsx)(_v3.Box, {
      mt: "lg",
      mb: "sm",
      children: (_v8.length ?? 0) > 1 ? (0, _v1.jsxs)(_v5.Flex, {
        justifyContent: "space-between",
        children: [(0, _v1.jsx)(_v6.Header, {
          variant: "heading-md",
          size: "xl",
          children: _v28.default.ClipEngagement
        }), (0, _v1.jsxs)(_v92.Menu, {
          isLazy: !0,
          children: [(0, _v1.jsx)(_v93.MenuButton, {
            children: (0, _v1.jsxs)(_v5.Flex, {
              children: [_v7, " ", (0, _v1.jsx)(_v97.ChevronDown, {})]
            })
          }), (0, _v1.jsx)(_v95.MenuList, {
            children: (0, _v1.jsx)(_v96.MenuOptionGroup, {
              defaultValue: _v7,
              type: "radio",
              children: _v8.map(_v0 => {
                let _v1 = (0, _v45.getIntlDate)(_v0.createdTime, _v6, _v5);
                return (0, _v1.jsx)(_v94.MenuItemOption, {
                  isDisabled: _v2,
                  value: _v1,
                  onClick: () => _v1(_v0),
                  icon: (0, _v1.jsx)(_v80.CheckSmall, {
                    color: "blue.500"
                  }),
                  children: _v1
                }, _v0.uri);
              })
            })
          })]
        })]
      }) : (0, _v1.jsx)(_v6.Header, {
        variant: "heading-md",
        size: "xl",
        children: _v28.default.Engagement
      })
    });
  };
  var _v116 = _v0.i(0);
  let _v117 = ({
    isChosen: _v0,
    value: _v1,
    title: _v2
  }) => {
    let _v3 = (0, _v58.useColorModeValue)("blue.100", "blue.700"),
      _v4 = (0, _v58.useColorModeValue)("grayscale.100", "grayscale.600"),
      _v5 = (0, _v58.useColorModeValue)("grayscale.300", "grayscale.200");
    return (0, _v1.jsxs)(_v3.Box, {
      mt: (0, _v7.rem)(15),
      children: [(0, _v1.jsxs)(_v5.Flex, {
        justifyContent: "space-between",
        pb: "xs",
        children: [(0, _v1.jsxs)(_v5.Flex, {
          alignItems: "center",
          children: [(0, _v1.jsxs)(_v84.Text, {
            variant: "body-xl",
            mr: "sm",
            color: _v0 ? "blue.500" : "text-secondary",
            fontSize: "header-xs",
            children: [_v2, " answer"]
          }), _v0 ? (0, _v1.jsx)(_v116.Checkmark, {
            boxSize: (0, _v7.rem)(22),
            color: "blue.500"
          }) : null]
        }), (0, _v1.jsxs)(_v84.Text, {
          variant: "body-xl",
          mr: "sm",
          color: "text-secondary",
          fontSize: "header-xs",
          children: [Math.round(_v1), "%"]
        })]
      }), (0, _v1.jsx)(_v3.Box, {
        h: (0, _v7.rem)(8),
        borderRadius: (0, _v7.rem)(50),
        bgColor: _v0 ? _v3 : _v4,
        children: (0, _v1.jsx)(_v3.Box, {
          h: (0, _v7.rem)(8),
          borderRadius: (0, _v7.rem)(50),
          width: `${_v1}%`,
          bgColor: _v0 ? "blue.500" : _v5
        })
      })]
    });
  };
  async function _v118({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2,
      liveEventId: _v3
    },
    query: _v4,
    ..._v5
  }) {
    return (0, _v100.measureLatency)("getUserLiveEventPolls", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/live_events/${_v3}/polls?${(0, _v101.searchQueryString)(_v4)}&fields=${_v1.map(_v101.intoSnakeCase).join(",")}`, {
        ..._v5,
        method: "GET"
      });
      if (!_v0.ok) throw new _v101.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v101.deepCamelCase)(_v1);
    });
  }
  function _v119() {
    let {
        mutate: _v0
      } = (0, _v106.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v108.useGctlConfig)(),
      [_v5, _v6] = (0, _v99.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/live_events/${_v0.where.liveEventId}/polls${(0, _v99.serializeQuery)(_v0)}`, _v118({
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
  "true" === _v98.default.env.STORYBOOK && (0, _v99.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v108.useGctlConfig)();
    return (0, _v105.default)(_v2 ? `/users/${_v2.where.userId}/live_events/${_v2.where.liveEventId}/polls${(0, _v99.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v118({
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
    endpoint: "/users/:userId/live_events/:liveEventId/polls",
    method: "GET"
  }), "true" === _v98.default.env.STORYBOOK && (0, _v99.assignMswData)(_v119, {
    endpoint: "/users/:userId/live_events/:liveEventId/polls",
    method: "GET"
  }), "true" === _v98.default.env.STORYBOOK && (0, _v99.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v108.useGctlConfig)();
    return (0, _v107.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/users/${_v2.where.userId}/live_events/${_v2.where.liveEventId}/polls?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v118({
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
    endpoint: "/users/:userId/live_events/:liveEventId/polls",
    method: "GET"
  });
  var _v120 = _v0.i(0);
  function _v121() {
    let _v0 = (0, _v120.useCache)(),
      _v1 = (0, _v2.useCallback)(() => _v0.get(_v26.ATTENDEE_URL_CACHE_KEY) || [], [_v0]),
      _v2 = (0, _v2.useCallback)(_v0 => _v0.get(_v0), [_v0]),
      _v3 = (0, _v2.useCallback)(_v0 => {
        _v1().forEach(_v0 => {
          let _v1 = _v0.get(_v0),
            _v2 = _v1?.data?.map(_v0 => _v0.uri === _v0.uri ? _v0 : _v0);
          _v0.set(_v0, {
            ..._v1,
            data: _v2
          });
        });
      }, [_v0, _v1]),
      _v4 = (0, _v2.useCallback)(_v0 => {
        _v0.delete(_v0), _v0.set(_v26.ATTENDEE_URL_CACHE_KEY, _v1().filter(_v0 => _v0 !== _v0));
      }, [_v0, _v1]),
      _v5 = (0, _v2.useCallback)((_v0, _v1, _v2) => {
        _v2 && _v4(_v0), _v0.set(_v0, _v1), _v0.set(_v26.ATTENDEE_URL_CACHE_KEY, [..._v1(), _v0]);
      }, [_v0, _v4, _v1]),
      _v6 = (0, _v2.useCallback)(_v0 => {
        _v1().forEach(_v0 => {
          let _v1 = _v0.get(_v0);
          _v1?.page && _v1?.page != _v0 && _v4(_v0);
        });
      }, [_v0, _v4, _v1]);
    return {
      getFromCache: _v2,
      updateCache: _v3,
      addToCache: _v5,
      deleteFromCache: _v4,
      deletePagesFromCache: _v6,
      deleteAllCache: (0, _v2.useCallback)(() => {
        _v1().forEach(_v0 => {
          _v0.delete(_v0);
        }), _v0.set(_v26.ATTENDEE_URL_CACHE_KEY, []);
      }, [_v0, _v1])
    };
  }
  _v0.s(["useAttendeeCache", 0, _v121], 0);
  let _v122 = ({
    record: _v0,
    videoUrl: _v1,
    isActive: _v2 = !1
  }) => {
    let {
      loading: _v3,
      error: _v4,
      pollsData: _v5,
      hasPolls: _v6,
      refreshPollsData: _v7
    } = (({
      record: _v0,
      videoUrl: _v1,
      isActive: _v2
    }) => {
      let [_v3, {
          loading: _v4,
          error: _v5,
          data: _v6
        }] = _v119(),
        {
          getFromCache: _v7,
          addToCache: _v8
        } = _v121(),
        [_v9, _v10] = (0, _v2.useState)(),
        {
          hasPolls: _v11,
          loading: _v12,
          error: _v13
        } = (_v0 => {
          let _v1 = (0, _v27.useConfigStore)(_v0 => _v0.entityType),
            _v2 = (0, _v27.useConfigStore)(_v0 => _v0.entityId),
            _v3 = (0, _v120.useCache)(),
            {
              user: _v4
            } = (0, _v21.useEntityStore)(),
            [_v5, _v6] = (0, _v2.useState)(!1),
            _v7 = `hasPolls_${_v0}`,
            [_v8, {
              loading: _v9,
              error: _v10,
              data: _v11
            }] = _v119();
          return (0, _v2.useEffect)(() => {
            if (_v1 !== _v14.ENTITY_TYPE.EVENT || !_v0) return;
            let _v0 = _v3.get(_v7);
            void 0 === _v0 && _v2 ? _v8({
              where: {
                userId: (0, _v15.getLastIdFromUri)(_v4?.uri),
                liveEventId: parseInt(_v2)
              },
              select: [],
              query: {
                filterClip: (0, _v15.getLastIdFromUri)(_v0)
              }
            }) : _v6(_v0);
          }, [_v1, _v2, _v7, _v4, _v0, _v3, _v8]), (0, _v2.useEffect)(() => {
            if (_v11) {
              let _v0 = _v11.data?.length > 0;
              _v6(_v0), _v3.set(_v7, _v0);
            }
          }, [_v11, _v3, _v7]), (0, _v2.useMemo)(() => ({
            hasPolls: _v5,
            loading: _v9,
            error: _v10
          }), [_v5, _v9, _v10]);
        })(_v1),
        _v14 = `${_v0?.uri}${_v1}/polls`,
        _v15 = (0, _v27.useConfigStore)(_v0 => _v0.entityId),
        {
          user: _v16
        } = (0, _v21.useEntityStore)(),
        _v17 = (0, _v2.useCallback)(() => {
          _v15 && _v1 && _v3({
            where: {
              userId: (0, _v15.getLastIdFromUri)(_v16?.uri),
              liveEventId: parseInt(_v15)
            },
            select: [],
            query: {
              filterClip: (0, _v15.getLastIdFromUri)(_v1),
              filterRegistrant: `${(0, _v15.getLastUuidFromUri)(_v0?.uri)}`
            }
          });
        }, [_v15, _v3, _v0, _v1, _v16]),
        _v18 = (0, _v2.useMemo)(() => ({
          loading: _v4 || _v12,
          error: _v5 || _v13
        }), [_v4, _v5, _v12, _v13]);
      return (0, _v2.useEffect)(() => {
        if (_v2 && _v0?.uri && _v11) {
          let _v0 = _v7(_v14);
          if (_v0) return void _v10(_v0);
          _v17();
        }
      }, [_v0, _v2, _v1]), (0, _v2.useEffect)(() => {
        let _v0 = _v6?.data;
        _v0 && (_v8(_v14, _v0), _v10(_v0));
      }, [_v6, _v8, _v10, _v14]), {
        pollsData: _v9,
        hasPolls: _v11,
        refreshPollsData: _v17,
        ..._v18
      };
    })({
      record: _v0,
      videoUrl: _v1,
      isActive: _v2
    });
    return _v3 ? (0, _v1.jsx)(_v5.Flex, {
      flexDirection: "column",
      children: (0, _v1.jsxs)(_v5.Flex, {
        flexDirection: "column",
        children: [(0, _v1.jsx)(_v3.Box, {
          sx: _v61()
        }), (0, _v1.jsx)(_v3.Box, {
          sx: _v61("100%")
        }), (0, _v1.jsx)(_v3.Box, {
          sx: _v61("100%")
        })]
      })
    }) : _v4 && !_v5 ? (0, _v1.jsx)(_v90, {
      handleRetry: () => {
        _v7();
      },
      isActive: _v2
    }) : (0, _v1.jsx)(_v5.Flex, {
      flexDirection: "column",
      children: _v6 ? _v5?.length ? (0, _v1.jsx)(_v1.Fragment, {
        children: _v5.map(({
          question: _v0,
          options: _v1
        }, _v2) => (0, _v1.jsxs)(_v3.Box, {
          pb: (0, _v7.rem)(30),
          children: [(0, _v1.jsx)(_v6.Header, {
            size: "xs",
            children: _v0
          }), _v1.map(({
            text: _v0,
            votesPercentage: _v1,
            voted: _v2
          }, _v3) => (0, _v1.jsx)(_v117, {
            title: _v0,
            value: _v1,
            isChosen: _v2 || !1
          }, _v3))]
        }, _v2))
      }) : (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v84.Text, {
          variant: "body-xl",
          fontSize: "header-xs",
          color: "text-secondary",
          children: _v28.default.NoUserPolls
        }), (0, _v1.jsx)(_v78.Link, {
          tabIndex: _v2 ? 0 : -1,
          target: "_blank",
          href: _v26.LEARN_MORE_ABOUT_POLLS,
          children: _v28.default.PollsLearnMore
        })]
      }) : (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v84.Text, {
          variant: "heading-xs",
          children: _v28.default.NoEventPolls
        }), (0, _v1.jsx)(_v84.Text, {
          variant: "body-sm",
          color: "text-secondary",
          children: _v28.default.PollsLearnMore
        })]
      })
    });
  };
  async function _v123({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2,
      liveEventId: _v3
    },
    query: _v4,
    ..._v5
  }) {
    return (0, _v100.measureLatency)("getUserLiveEventQna", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/live_events/${_v3}/qna?${(0, _v101.searchQueryString)(_v4)}&fields=${_v1.map(_v101.intoSnakeCase).join(",")}`, {
        ..._v5,
        method: "GET"
      });
      if (!_v0.ok) throw new _v101.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v101.deepCamelCase)(_v1);
    });
  }
  function _v124() {
    let {
        mutate: _v0
      } = (0, _v106.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v108.useGctlConfig)(),
      [_v5, _v6] = (0, _v99.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/live_events/${_v0.where.liveEventId}/qna${(0, _v99.serializeQuery)(_v0)}`, _v123({
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
  "true" === _v98.default.env.STORYBOOK && (0, _v99.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v108.useGctlConfig)();
    return (0, _v105.default)(_v2 ? `/users/${_v2.where.userId}/live_events/${_v2.where.liveEventId}/qna${(0, _v99.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v123({
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
    endpoint: "/users/:userId/live_events/:liveEventId/qna",
    method: "GET"
  }), "true" === _v98.default.env.STORYBOOK && (0, _v99.assignMswData)(_v124, {
    endpoint: "/users/:userId/live_events/:liveEventId/qna",
    method: "GET"
  }), "true" === _v98.default.env.STORYBOOK && (0, _v99.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v108.useGctlConfig)();
    return (0, _v107.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/users/${_v2.where.userId}/live_events/${_v2.where.liveEventId}/qna?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v123({
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
    endpoint: "/users/:userId/live_events/:liveEventId/qna",
    method: "GET"
  });
  var _v125 = _v0.i(0);
  let _v126 = ({
      hasMargin: _v0,
      time: _v1,
      text: _v2,
      likes: _v3
    }) => (0, _v1.jsxs)(_v5.Flex, {
      justifyContent: "space-between",
      my: (0, _v7.rem)(15 * !!_v0),
      children: [(0, _v1.jsxs)(_v5.Flex, {
        alignItems: "flex-start",
        mr: (0, _v7.rem)(5),
        pt: (0, _v7.rem)(5),
        children: [(0, _v1.jsx)(_v84.Text, {
          variant: "body-xl",
          fontSize: "header-xs",
          color: "text-secondary",
          minWidth: (0, _v7.rem)(75),
          children: _v1 || null
        }), (0, _v1.jsx)(_v84.Text, {
          variant: "body-xl",
          fontSize: "header-xs",
          color: "text-primary",
          children: _v2 || null
        })]
      }), _v3 && _v3 > 0 ? (0, _v1.jsxs)(_v5.Flex, {
        display: {
          base: "none",
          md: "flex"
        },
        alignItems: "center",
        h: (0, _v7.rem)(30),
        px: (0, _v7.rem)(10),
        borderRadius: "xs",
        children: [(0, _v1.jsx)(_v84.Text, {
          variant: "body-xl",
          fontSize: "header-xs",
          color: "text-secondary",
          mr: "sm",
          children: _v3
        }), (0, _v1.jsx)(_v125.ThumbUp, {
          boxSize: (0, _v7.rem)(22),
          color: "text-secondary"
        })]
      }) : null]
    }),
    _v127 = ({
      time: _v0,
      text: _v1
    }) => (0, _v1.jsxs)(_v5.Flex, {
      alignItems: "center",
      mt: (0, _v7.rem)(15),
      children: [(0, _v1.jsx)(_v84.Text, {
        variant: "body-xl",
        fontSize: "header-xs",
        color: "text-secondary",
        minWidth: (0, _v7.rem)(75),
        children: _v0
      }), (0, _v1.jsx)(_v84.Text, {
        variant: "body-xl",
        fontSize: "header-xs",
        color: "text-secondary",
        children: _v1
      })]
    }),
    _v128 = ({
      record: _v0,
      videoUrl: _v1,
      isActive: _v2 = !1
    }) => {
      let {
          qnaData: _v3,
          loading: _v4,
          error: _v5,
          refreshQnAData: _v6
        } = (({
          record: _v0,
          videoUrl: _v1,
          isActive: _v2
        }) => {
          let [_v3, _v4] = (0, _v2.useState)(),
            _v5 = `${_v0?.uri}${_v1}/qna`,
            {
              getFromCache: _v6,
              addToCache: _v7
            } = _v121(),
            [_v8, {
              loading: _v9,
              error: _v10,
              data: _v11
            }] = _v124(),
            {
              status: _v12,
              user: _v13
            } = (0, _v21.useEntityStore)(),
            _v14 = (0, _v27.useConfigStore)(_v0 => _v0.entityId),
            _v15 = () => {
              _v14 && _v8({
                where: {
                  liveEventId: parseInt(_v14),
                  userId: (0, _v15.getLastIdFromUri)(_v13?.uri)
                },
                select: [],
                query: {
                  filterClip: (0, _v15.getLastIdFromUri)(_v1),
                  filterRegistrant: `${(0, _v15.getLastUuidFromUri)(_v0?.uri)}`
                }
              });
            },
            _v16 = (0, _v2.useMemo)(() => ({
              loading: _v9,
              error: _v10
            }), [_v9, _v10]);
          return (0, _v2.useEffect)(() => {
            if (_v2 && _v0?.uri && _v12 === _v26.EVENT_STATUS.ENDED) {
              let _v0 = _v6(_v5);
              if (_v0) return void _v4(_v0);
              _v15();
            }
          }, [_v0, _v2, _v1]), (0, _v2.useEffect)(() => {
            let _v0 = _v11?.data;
            _v0 && (_v7(_v5, _v0), _v4(_v0));
          }, [_v7, _v11, _v4, _v5]), {
            qnaData: _v3,
            refreshQnAData: _v15,
            ..._v16
          };
        })({
          record: _v0,
          videoUrl: _v1,
          isActive: _v2
        }),
        {
          status: _v7
        } = (0, _v21.useEntityStore)(),
        _v8 = (0, _v2.useMemo)(() => _v3?.filter(_v0 => _v0.asked) || [], [_v3]),
        _v9 = (0, _v2.useMemo)(() => _v3?.filter(_v0 => _v0.voted) || [], [_v3]);
      return _v4 ? (0, _v1.jsx)(_v5.Flex, {
        flexDirection: "column",
        children: (0, _v1.jsxs)(_v5.Flex, {
          flexDirection: "column",
          children: [(0, _v1.jsxs)(_v3.Box, {
            pb: (0, _v7.rem)(15),
            children: [(0, _v1.jsx)(_v3.Box, {
              sx: _v61()
            }), (0, _v1.jsx)(_v3.Box, {
              sx: _v61("100%")
            })]
          }), (0, _v1.jsxs)(_v3.Box, {
            pb: (0, _v7.rem)(15),
            children: [(0, _v1.jsx)(_v3.Box, {
              sx: _v61()
            }), (0, _v1.jsx)(_v3.Box, {
              sx: _v61("100%")
            })]
          })]
        })
      }) : _v5 && !_v3 ? (0, _v1.jsx)(_v90, {
        handleRetry: () => {
          _v6();
        },
        isActive: _v2
      }) : (0, _v1.jsxs)(_v5.Flex, {
        flexDirection: "column",
        children: [(0, _v1.jsxs)(_v3.Box, {
          pb: (0, _v7.rem)(15),
          children: [(0, _v1.jsx)(_v6.Header, {
            size: "xs",
            children: `${_v0?.firstName} ${_v28.default.Asked}`
          }), _v7 === _v26.EVENT_STATUS.ENDED && _v8?.length ? _v8.map(({
            text: _v0,
            askedOn: _v1,
            upvotes: _v2
          }, _v3) => (0, _v1.jsx)(_v126, {
            hasMargin: !0,
            time: (0, _v45.secondsToTime)(_v1),
            text: _v0,
            likes: _v2
          }, _v3)) : (0, _v1.jsx)(_v84.Text, {
            variant: "body-xl",
            fontSize: "header-xs",
            color: "text-secondary",
            children: _v28.default.NoQuestionsAsked
          })]
        }), (0, _v1.jsxs)(_v3.Box, {
          pb: (0, _v7.rem)(15),
          children: [(0, _v1.jsx)(_v6.Header, {
            size: "xs",
            children: `${_v0?.firstName} ${_v28.default.Liked}`
          }), _v7 === _v26.EVENT_STATUS.ENDED && _v9?.length ? _v9.map(({
            text: _v0,
            askedBy: _v1,
            askedOn: _v2,
            upvotes: _v3
          }, _v4) => (0, _v1.jsxs)("div", {
            children: [(0, _v1.jsx)(_v127, {
              text: _v1,
              time: (0, _v45.secondsToTime)(_v2)
            }), (0, _v1.jsx)(_v126, {
              text: _v0,
              likes: _v3
            })]
          }, _v4)) : (0, _v1.jsx)(_v84.Text, {
            variant: "body-xl",
            fontSize: "header-xs",
            color: "text-secondary",
            children: _v28.default.NoQuestionsAsked
          })]
        })]
      });
    };
  var _v129 = _v0.i(0);
  let _v130 = _v0 => (0, _v1.jsx)(_v129.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsxs)("g", {
      fill: "currentColor",
      children: [(0, _v1.jsx)("path", {
        d: "M20 8.94a1.307 1.307 0 0 0-.06-.27v-.09a1.07 1.07 0 0 0-.19-.28l-6-6a1.071 1.071 0 0 0-.28-.19h-.09L13.06 2H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8.94Zm-6-3.53L16.59 8H14V5.41ZM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v5a1 1 0 0 0 1 1h5v9Z"
      }), (0, _v1.jsx)("path", {
        d: "M9.497 15.528c-.253 0-.447-.207-.494-.456a.904.904 0 0 0-.086-.263c-.076-.153-.218-.23-.427-.23a.433.433 0 0 0-.286.096.606.606 0 0 0-.172.3 2.507 2.507 0 0 0-.09.54c-.016.221-.025.493-.025.816 0 .344.01.622.032.834.026.213.062.378.108.497a.494.494 0 0 0 .185.236.576.576 0 0 0 .261.057.63.63 0 0 0 .223-.038.402.402 0 0 0 .185-.166c.05-.085.091-.202.12-.35a1.95 1.95 0 0 0 .023-.141c.03-.252.228-.458.481-.458s.462.206.435.458a3.75 3.75 0 0 1-.034.243c-.038.22-.11.414-.216.58a1.034 1.034 0 0 1-.44.388c-.187.093-.43.14-.732.14-.344 0-.618-.055-.822-.166-.204-.11-.36-.27-.471-.477a2.198 2.198 0 0 1-.21-.745A9.377 9.377 0 0 1 7 16.267c0-.344.015-.66.045-.949.034-.293.104-.543.21-.752.11-.208.267-.369.471-.484.204-.119.478-.178.822-.178.327 0 .584.053.77.16.192.105.334.241.427.407.094.161.151.338.172.529l.01.07c.03.252-.177.458-.43.458ZM10.903 17.12c.253 0 .423.212.489.457a.474.474 0 0 0 .275.327c.081.034.18.051.3.051.14 0 .265-.045.375-.134.115-.093.172-.235.172-.427a.685.685 0 0 0-.044-.26.488.488 0 0 0-.134-.204.907.907 0 0 0-.255-.16 2.963 2.963 0 0 0-.382-.153 3.294 3.294 0 0 1-.528-.223 1.52 1.52 0 0 1-.376-.28 1.073 1.073 0 0 1-.217-.376 1.614 1.614 0 0 1-.07-.496c0-.45.125-.786.376-1.007.25-.22.594-.33 1.032-.33.204 0 .39.022.56.07.174.042.323.114.446.216a.942.942 0 0 1 .293.382c.037.079.062.16.078.244.046.238-.166.437-.41.437-.242 0-.412-.21-.515-.429a.52.52 0 0 0-.038-.067c-.077-.12-.204-.179-.382-.179a.638.638 0 0 0-.255.045.442.442 0 0 0-.166.12.435.435 0 0 0-.083.166c-.012.064-.019.13-.019.198 0 .14.03.259.09.357.059.093.186.18.382.26l.707.306c.174.077.316.158.426.242.11.081.198.17.262.268a.833.833 0 0 1 .14.312c.025.115.038.242.038.382 0 .48-.14.83-.42 1.051-.277.217-.663.325-1.16.325-.518 0-.89-.113-1.114-.338-.193-.196-.274-.439-.308-.695-.033-.25.182-.457.435-.457ZM14.324 13.993c.226 0 .42.16.463.383l.57 2.98h.019l.601-2.995a.457.457 0 1 1 .894.192l-.784 3.414a.74.74 0 0 1-1.442 0l-.78-3.397a.471.471 0 0 1 .459-.577Z"
      })]
    })
  });
  var _v131 = _v0.i(0);
  let _v132 = ({
    attendee: _v0,
    formSource: _v1
  }) => {
    let _v2 = _v0.sourceDetails,
      _v3 = _v0.sourceType;
    return _v2 || _v3 === _v26.ATTENDEE_SOURCE_TYPE.FORM ? (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v31.Paragraph, {
        variant: "body-sm",
        color: "text-secondary",
        mt: "sm",
        children: _v28.default.Source
      }), _v3 === _v26.ATTENDEE_SOURCE_TYPE.CSV ? (0, _v1.jsxs)(_v5.Flex, {
        alignItems: "center",
        children: [(0, _v1.jsx)(_v3.Box, {
          mr: "sm",
          children: (0, _v1.jsx)(_v130, {
            height: 24,
            width: 24
          })
        }), (0, _v1.jsx)(_v6.Header, {
          size: "xs",
          children: _v2.filename
        })]
      }) : _v3 === _v26.ATTENDEE_SOURCE_TYPE.API ? (0, _v1.jsx)(_v6.Header, {
        size: "xs",
        children: _v2.appName ? _v3 + " - " + _v2.appName : _v3
      }) : _v3 === _v26.ATTENDEE_SOURCE_TYPE.CRM ? (0, _v1.jsxs)(_v5.Flex, {
        alignItems: "center",
        children: [(0, _v1.jsx)(_v62, {
          src: _v2.provider?.icon || "",
          darkSrc: _v2.provider?.darkIcon
        }, _v2.provider?.id), (0, _v1.jsx)(_v6.Header, {
          size: "xs",
          children: _v2.listName
        })]
      }) : _v3 === _v26.ATTENDEE_SOURCE_TYPE.FORM ? (0, _v1.jsxs)(_v3.Box, {
        children: [(0, _v1.jsxs)(_v5.Flex, {
          pb: "8",
          alignItems: "center",
          children: [(0, _v1.jsx)(_v3.Box, {
            h: (0, _v7.rem)(24),
            w: (0, _v7.rem)(24),
            mr: (0, _v7.rem)(6),
            children: (0, _v1.jsx)(_v131.VimeoV, {
              color: "blue.500"
            })
          }), (0, _v1.jsx)(_v6.Header, {
            variant: "heading-sm",
            size: "xl",
            children: _v1
          })]
        }), _v2 && Object.entries(_v2).map(([_v0, _v1]) => (0, _v1.jsx)(_v3.Box, {
          children: (0, _v1.jsx)(_v6.Header, {
            size: "xs",
            pb: "2",
            children: (0, _v1.jsxs)(_v1.Fragment, {
              children: [_v0, "=", _v1]
            })
          })
        }, _v0))]
      }) : (0, _v1.jsx)(_v1.Fragment, {})]
    }) : (0, _v1.jsx)(_v1.Fragment, {});
  };
  async function _v133({
    baseUrl: _v0,
    select: _v1,
    where: {
      resourceType: _v2,
      resourceId: _v3
    },
    query: _v4,
    ..._v5
  }) {
    return (0, _v100.measureLatency)("getLeadCaptureResourceIdEngagement", "GET", async () => {
      let _v0 = await fetch(`${_v0}/lead_capture/${_v2}/${_v3}/engagement?${(0, _v101.searchQueryString)(_v4)}&fields=${_v1.map(_v101.intoSnakeCase).join(",")}`, {
        ..._v5,
        method: "GET"
      });
      if (!_v0.ok) throw new _v101.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v101.deepCamelCase)(_v1);
    });
  }
  function _v134() {
    let {
        mutate: _v0
      } = (0, _v106.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v108.useGctlConfig)(),
      [_v5, _v6] = (0, _v99.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/lead_capture/${_v0.where.resourceType}/${_v0.where.resourceId}/engagement${(0, _v99.serializeQuery)(_v0)}`, _v133({
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
  "true" === _v98.default.env.STORYBOOK && (0, _v99.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v108.useGctlConfig)();
    return (0, _v105.default)(_v2 ? `/lead_capture/${_v2.where.resourceType}/${_v2.where.resourceId}/engagement${(0, _v99.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v133({
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
    endpoint: "/lead_capture/:resourceType/:resourceId/engagement",
    method: "GET"
  }), "true" === _v98.default.env.STORYBOOK && (0, _v99.assignMswData)(_v134, {
    endpoint: "/lead_capture/:resourceType/:resourceId/engagement",
    method: "GET"
  });
  let _v135 = ({
    hasUpsell: _v0,
    title: _v1,
    children: _v2,
    ..._v3
  }) => (0, _v1.jsx)(_v72.Accordion, {
    ..._v3,
    children: (0, _v1.jsx)(_v74.AccordionItem, {
      borderRadius: "sm",
      children: ({
        isExpanded: _v0
      }) => (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsxs)(_v73.AccordionButton, {
          background: "fill-component",
          p: "lg",
          borderRadius: "sm",
          children: [(0, _v1.jsxs)(_v5.Flex, {
            flex: "1",
            textAlign: "left",
            children: [(0, _v1.jsx)(_v6.Header, {
              variant: "heading-md",
              size: "xl",
              children: _v1
            }), _v0 && (0, _v1.jsx)(_v29.UpsellBadge, {})]
          }), (0, _v1.jsx)(_v3.Box, {
            transition: "transform 0.3s",
            transform: `rotate(${_v0 ? "0deg" : "-90deg"})`,
            children: _v0 ? (0, _v1.jsx)(_v81.Minus, {
              boxSize: (0, _v7.rem)(24)
            }) : (0, _v1.jsx)(_v82.Plus, {
              boxSize: (0, _v7.rem)(24)
            })
          })]
        }), (0, _v1.jsx)(_v75.AccordionPanel, {
          background: "fill-component",
          p: "lg",
          pt: 0,
          children: (0, _v2.isValidElement)(_v2) && (0, _v2.cloneElement)(_v2, {
            isActive: _v0
          })
        })]
      })
    })
  });
  async function _v136({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v100.measureLatency)("getUserEmailServiceProviders", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/email_service_providers?${(0, _v101.searchQueryString)(_v3)}&fields=${_v1.map(_v101.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v101.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v101.deepCamelCase)(_v1);
    });
  }
  function _v137() {
    let {
        mutate: _v0
      } = (0, _v106.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v108.useGctlConfig)(),
      [_v5, _v6] = (0, _v99.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/email_service_providers${(0, _v99.serializeQuery)(_v0)}`, _v136({
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
  _v0.s(["AttendeesInfoModal", 0, ({
    record: _v0,
    onClose: _v1,
    updateData: _v2
  }) => {
    let _v3 = (0, _v27.useConfigStore)(_v0 => _v0.entityType),
      _v4 = _v3 === _v14.ENTITY_TYPE.EVENT,
      {
        status: _v5,
        title: _v6,
        user: _v7
      } = (0, _v21.useEntityStore)(),
      {
        updateCache: _v8
      } = _v121(),
      [_v9, _v10] = (0, _v2.useState)(_v0?.isBlocked),
      {
        colorMode: _v11
      } = (0, _v58.useColorMode)(),
      _v12 = (0, _v38.useToast)(),
      _v13 = (0, _v18.useViewer)(),
      _v14 = _v13?.viewmasterCdnUrl,
      {
        canEdit: _v15
      } = (0, _v23.useTeamStore)(),
      [_v16, _v17] = (0, _v2.useState)(),
      _v18 = navigator.language || "en-US",
      _v19 = `${_v0?.firstName || ""} ${_v0?.lastName || ""}`,
      _v20 = _v0?.analytics.viewPercentage ?? null,
      {
        refreshEngagementData: _v21,
        loading: _v22,
        error: _v23,
        dropInOut: _v24,
        totalDuration: _v25
      } = (({
        selectedClip: _v0,
        record: _v1
      }) => {
        let {
            uri: _v2
          } = _v0 || {
            uri: ""
          },
          [_v3, {
            loading: _v4,
            error: _v5,
            data: _v6
          }] = _v134(),
          [_v7, _v8] = (0, _v2.useState)([]),
          [_v9, _v10] = (0, _v2.useState)(0),
          _v11 = (0, _v2.useRef)(void 0),
          _v12 = (0, _v2.useRef)(""),
          {
            hasAttendeeUpsell: _v13
          } = (0, _v19.useEventCapability)(),
          _v14 = `${_v1?.uri}${_v2}/engagement`,
          _v15 = `${_v2}?duration`,
          {
            getFromCache: _v16,
            addToCache: _v17
          } = _v121(),
          _v18 = (0, _v27.useConfigStore)(_v0 => _v0.entityType),
          _v19 = (0, _v27.useConfigStore)(_v0 => _v0.entityId),
          _v20 = (0, _v2.useCallback)(() => {
            !(!_v2 && [_v14.ENTITY_TYPE.EVENT].includes(_v18) || !_v1?.uri || _v13 || !_v19) && _v18 && (_v11.current = _v1?.uri, _v12.current = _v2, _v3({
              where: {
                resourceId: _v19,
                resourceType: _v14.ENTITY_TO_PATH_MAP[_v18]
              },
              query: {
                filterRegistrant: (0, _v15.getLastUuidFromUri)(_v1?.uri),
                filterClip: (0, _v15.getLastIdFromUri)(_v2)
              },
              select: []
            }));
          }, [_v18, _v3, _v1, _v13, _v2, _v19]),
          _v21 = (0, _v2.useMemo)(() => ({
            loading: _v4,
            error: _v5
          }), [_v4, _v5]);
        return (0, _v2.useEffect)(() => {
          _v8([]), _v10(0);
          let _v0 = _v16(_v14),
            _v1 = _v16(_v15);
          if (_v0 && (_v1 || _v18 !== _v14.ENTITY_TYPE.EVENT)) {
            _v8(_v0), _v10(_v1 || 0);
            return;
          }
          _v20();
        }, [_v1, _v2, _v14, _v15, _v18]), (0, _v2.useEffect)(() => {
          if (_v6) {
            if (_v11.current !== _v1?.uri || _v12.current !== _v2) return;
            let _v0 = (0, _v101.deepCamelCase)(_v6.data);
            _v17(_v14, _v0), _v8(_v0);
            let _v1 = _v6.filteredTotal;
            _v17(_v15, _v1), _v10(_v1);
          }
        }, [_v6, _v17, _v1?.uri, _v2, _v14, _v15]), {
          dropInOut: _v7,
          totalDuration: _v9,
          refreshEngagementData: _v20,
          ..._v21
        };
      })({
        record: _v0,
        selectedClip: _v16
      }),
      [_v26, {
        called: _v27,
        data: _v28,
        error: _v29,
        loading: _v30
      }] = (0, _v83.usePatchLeadCaptureRegistrant)(),
      _v31 = _v26.ENTITIES_WITH_ENGAGEMENT_SEGMENT.includes(_v3),
      {
        hasAttendeeUpsell: _v32
      } = (0, _v19.useEventCapability)(),
      _v33 = () => {
        _v0?.uri && _v7?.uri && _v26({
          where: {
            registrantId: (0, _v15.getLastUuidFromUri)(_v0?.uri) || ""
          },
          variables: {
            isBlocked: !_v9
          },
          select: _v110
        });
      },
      _v34 = _v0 => {
        let _v1;
        return _v1 = "dark" === _v11 ? "polls" === _v0 ? _v26.IMAGES_ID.POLLS_DARK : "qa" === _v0 ? _v26.IMAGES_ID.QA_DARK : _v26.IMAGES_ID.AMOUNT_WATCHED_DARK : "polls" === _v0 ? _v26.IMAGES_ID.POLLS_LIGHT : "qa" === _v0 ? _v26.IMAGES_ID.QA_LIGHT : _v26.IMAGES_ID.AMOUNT_WATCHED_LIGHT, `${!_v14 || _v14.includes("devi") ? _v26.MASTER_CDN_URL : _v14}/custom_asset/${_v1}`;
      };
    return (0, _v2.useEffect)(() => {
      if (_v27 && !_v30) {
        if (_v29) return void _v12({
          title: _v28.default.ChangesCouldNotBeSaved,
          status: "error"
        });
        _v28 && (_v8(_v28), _v2(), _v10(_v28.isBlocked), _v12({
          title: _v28.isBlocked ? _v28.default.AttendeeBlocked : _v28.default.AttendeeUnblocked,
          status: "info"
        }));
      }
    }, [_v28, _v29, _v30, _v27]), (0, _v2.useEffect)(() => {
      _v10(_v0?.isBlocked);
    }, [_v0?.isBlocked]), (0, _v1.jsxs)(_v53.Modal, {
      isOpen: !!_v0,
      onClose: _v1,
      children: [(0, _v1.jsx)(_v55.ModalOverlay, {
        zIndex: "modal"
      }), (0, _v1.jsx)(_v54.ModalContent, {
        width: "90vw",
        maxW: (0, _v7.rem)(660),
        maxH: (0, _v7.rem)(750),
        color: "text-primary",
        background: "fill-surface",
        overflow: "auto",
        children: (0, _v1.jsxs)(_v3.Box, {
          p: "2xl",
          children: [(0, _v1.jsx)(_v79.ModalCloseButton, {}), _v0 && (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsxs)(_v5.Flex, {
              pb: "sm",
              width: "fit-content",
              placeItems: "center",
              maxW: "100%",
              children: [(0, _v1.jsx)(_v86, {
                text: _v19,
                variant: "heading-lg",
                marginRight: "sm"
              }), _v9 && (0, _v1.jsx)(_v76.Badge, {
                variant: "live",
                size: "sm",
                children: _v28.default.BLOCKED
              })]
            }), (0, _v1.jsxs)(_v5.Flex, {
              pb: (0, _v7.rem)(32),
              alignItems: "center",
              children: [(0, _v1.jsx)(_v5.Flex, {
                maxW: "60%",
                as: _v78.Link,
                href: `mailto:${_v0.email}`,
                pr: (0, _v7.rem)(6),
                textUnderlineOffset: (0, _v7.rem)(1),
                color: "blue.500",
                variant: "inline-primary",
                fontSize: (0, _v7.rem)(14),
                children: (0, _v1.jsx)(_v86, {
                  text: _v0?.email,
                  endChars: (() => {
                    if (!_v0?.email) return;
                    let _v0 = _v0?.email.lastIndexOf("@");
                    return _v0?.email.length - _v0;
                  })()
                })
              }), _v4 && (0, _v1.jsxs)(_v5.Flex, {
                children: [(0, _v1.jsx)(_v77.Divider, {
                  orientation: "vertical",
                  h: (0, _v7.rem)(14),
                  borderColor: "text-secondary",
                  alignSelf: "center"
                }), (0, _v1.jsx)(_v31.Paragraph, {
                  tabIndex: 0,
                  px: (0, _v7.rem)(6),
                  pt: (0, _v7.rem)(3),
                  onKeyDown: _v0 => {
                    _v0.key === _v26.KEY_CODES.ENTER && _v33();
                  },
                  textDecoration: "underline",
                  size: "md",
                  color: _v9 ? "text-primary" : "status-destructive-primary",
                  _hover: {
                    color: _v9 ? "text-primary" : "red.400",
                    cursor: "pointer"
                  },
                  onClick: _v33,
                  sx: {
                    ..._v59(_v5 === _v26.EVENT_STATUS.ENDED || !_v15 || _v30)
                  },
                  children: _v9 ? _v28.default.UnblockAttendee : _v28.default.BlockAttendee
                }), (0, _v1.jsx)(_v36.Tooltip, {
                  label: _v9 ? _v28.default.UnblockMsg : _v28.default.BlockMsg,
                  fontSize: "body-md",
                  maxW: (0, _v7.rem)(350),
                  placement: "top",
                  children: (0, _v1.jsx)(_v3.Box, {
                    children: (0, _v1.jsx)(_v39.CircleExclamation, {
                      boxSize: (0, _v7.rem)(16)
                    })
                  })
                })]
              }), _v30 && (0, _v1.jsx)(_v35.Spinner, {
                size: "sm",
                ml: (0, _v7.rem)(4)
              })]
            }), (0, _v1.jsx)(_v6.Header, {
              variant: "heading-md",
              size: "xl",
              children: _v6
            }), (0, _v1.jsx)(_v3.Box, {
              pb: "lg",
              children: (0, _v1.jsx)(_v6.Header, {
                variant: "heading-sm",
                size: "xl",
                children: (0, _v11.translate)({
                  singular: "Watch time {PERCENTAGE}",
                  replacements: {
                    PERCENTAGE: () => (0, _v1.jsx)(_v3.Box, {
                      pl: "xs",
                      as: "span",
                      color: _v20 ? "green.500" : "slate.500",
                      children: null !== _v20 ? `${_v20}%` : "—"
                    })
                  },
                  dictionary: {
                    "fr-FR": {
                      singular: "Temps de visionnage {PERCENTAGE}"
                    },
                    "ja-JP": {
                      singular: "視聴時間 {PERCENTAGE}"
                    },
                    "ko-KR": {
                      singular: "시청 시간 {PERCENTAGE}"
                    },
                    "zh-CN": {
                      singular: "观看时间 {PERCENTAGE}"
                    }
                  }
                })
              })
            }), (0, _v1.jsx)(_v135, {
              title: _v28.default.RegistrationDetails,
              defaultIndex: [0],
              allowToggle: !0,
              children: (0, _v1.jsxs)(_v5.Flex, {
                flexDirection: "column",
                children: [(0, _v1.jsx)(_v31.Paragraph, {
                  size: "sm",
                  color: "text-secondary",
                  mb: "xs",
                  children: _v28.default.RegistrationDate
                }), (0, _v1.jsx)(_v6.Header, {
                  variant: "heading-sm",
                  size: "xl",
                  children: new Intl.DateTimeFormat(_v18, {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: !0
                  }).format(new Date(_v0.createdOn))
                }), _v0 && (0, _v1.jsx)(_v132, {
                  attendee: _v0,
                  formSource: _v6
                }), _v0.data && Object.entries(_v0.data).map(([_v0, _v1]) => (0, _v1.jsxs)(_v3.Box, {
                  children: [(0, _v1.jsx)(_v31.Paragraph, {
                    size: "md",
                    children: _v0
                  }), (0, _v1.jsxs)(_v6.Header, {
                    size: "xs",
                    children: [String(_v1).replace("true", "True").replace("false", "False"), !0 === _v1 && (0, _v1.jsx)(_v80.CheckSmall, {
                      marginLeft: (0, _v7.rem)(4)
                    })]
                  })]
                }, _v0))]
              })
            }), _v31 && (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsx)(_v115, {
                selectedClip: _v16,
                setSelectedClip: _v17,
                loading: _v22
              }), (0, _v1.jsx)(_v91, {
                refreshEngagementData: _v21,
                error: _v23,
                loading: _v22,
                dropInOut: _v24,
                totalDuration: _v25
              }), _v3 !== _v14.ENTITY_TYPE.VIDEO && (0, _v1.jsxs)(_v1.Fragment, {
                children: [(0, _v1.jsx)(_v135, {
                  hasUpsell: _v32,
                  title: _v28.default.Polls,
                  allowToggle: !0,
                  children: _v32 ? (0, _v1.jsx)(_v5.Flex, {
                    flexDirection: "column",
                    children: (0, _v1.jsx)(_v3.Box, {
                      as: "img",
                      w: "100%",
                      alt: "upsell-poll",
                      src: _v34("polls")
                    })
                  }) : (0, _v1.jsx)(_v122, {
                    record: _v0,
                    videoUrl: _v16?.uri
                  })
                }), (0, _v1.jsx)(_v135, {
                  hasUpsell: _v32,
                  title: _v28.default.QA,
                  allowToggle: !0,
                  mt: "sm",
                  children: _v32 ? (0, _v1.jsx)(_v5.Flex, {
                    flexDirection: "column",
                    children: (0, _v1.jsx)(_v3.Box, {
                      as: "img",
                      w: "100%",
                      alt: "upsell-qna",
                      src: _v34("qa")
                    })
                  }) : (0, _v1.jsx)(_v128, {
                    record: _v0,
                    videoUrl: _v16?.uri
                  })
                })]
              })]
            })]
          })]
        })
      })]
    });
  }], 0), "true" === _v98.default.env.STORYBOOK && (0, _v99.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v108.useGctlConfig)();
    return (0, _v105.default)(_v2 ? `/users/${_v2.where.userId}/email_service_providers${(0, _v99.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v136({
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
    endpoint: "/users/:userId/email_service_providers",
    method: "GET"
  }), "true" === _v98.default.env.STORYBOOK && (0, _v99.assignMswData)(_v137, {
    endpoint: "/users/:userId/email_service_providers",
    method: "GET"
  }), "true" === _v98.default.env.STORYBOOK && (0, _v99.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v108.useGctlConfig)();
    return (0, _v107.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/users/${_v2.where.userId}/email_service_providers?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v136({
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
    endpoint: "/users/:userId/email_service_providers",
    method: "GET"
  }), _v0.s(["useGetUserEmailServiceProvidersLazy", 0, _v137], 0);
  var _v138 = _v0.i(0),
    _v139 = _v0.i(0),
    _v140 = _v0.i(0),
    _v141 = _v0.i(0),
    _v142 = _v0.i(0),
    _v143 = _v0.i(0),
    _v144 = _v0.i(0),
    _v145 = _v0.i(0),
    _v146 = _v0.i(0),
    _v147 = _v0.i(0),
    _v148 = _v0.i(0);
  let _v149 = ({
      type: _v0
    }) => (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v6.Header, {
        size: "sm",
        children: _v28.default.ImportFAQ[_v0].Header
      }), (0, _v1.jsxs)(_v3.Box, {
        mt: (0, _v7.rem)(20),
        children: [(0, _v1.jsxs)(_v5.Flex, {
          flexDir: "column",
          mb: "md",
          children: [(0, _v1.jsx)(_v151, {
            children: _v28.default.ImportFAQ[_v0].Para1Header
          }), (0, _v1.jsx)(_v150, {
            children: _v28.default.ImportFAQ[_v0].Para1Description
          })]
        }), (0, _v1.jsxs)(_v5.Flex, {
          flexDir: "column",
          mb: "md",
          children: [(0, _v1.jsx)(_v151, {
            children: _v28.default.ImportFAQ[_v0].Para2Header
          }), (0, _v1.jsx)(_v150, {
            children: _v28.default.ImportFAQ[_v0].Para2Description
          })]
        }), _v0 === _v26.IMPORT_TYPE.CRM && (0, _v1.jsxs)(_v5.Flex, {
          flexDir: "column",
          mb: "md",
          children: [(0, _v1.jsx)(_v151, {
            children: _v28.default.ImportFAQ[_v0].Para3Header
          }), (0, _v1.jsx)(_v150, {
            children: _v28.default.ImportFAQ[_v0].Para3Description
          })]
        }), (0, _v1.jsx)(_v5.Flex, {
          flexDir: "column",
          mb: "md",
          children: (0, _v1.jsx)(_v150, {
            children: (0, _v1.jsx)(_v78.Link, {
              target: "_blank",
              href: _v26.IMPORT_TYPE.CRM ? _v26.UPLOAD_CRM_HELP_ARTICLE : _v26.UPLOAD_CSV_HELP_ARTICLE,
              children: (0, _v11.translate)({
                singular: "Learn more about marketing integrations",
                dictionary: {
                  es: {
                    singular: "Obtenga más información sobre las integraciones de marketing"
                  },
                  "de-DE": {
                    singular: "Mehr über Marketing-Integrationen erfahren"
                  },
                  "fr-FR": {
                    singular: "En savoir plus sur les intégrations marketing"
                  },
                  "ja-JP": {
                    singular: "マーケティングの統合に関する詳細を見る"
                  },
                  "ko-KR": {
                    singular: "마케팅 통합에 대해 자세히 알아보기"
                  },
                  "pt-BR": {
                    singular: "Saiba mais sobre integrações de marketing"
                  },
                  "zh-CN": {
                    singular: "进一步了解营销集成"
                  }
                }
              })
            })
          })
        })]
      })]
    }),
    _v150 = ({
      children: _v0,
      ..._v1
    }) => (0, _v1.jsx)(_v31.Paragraph, {
      size: "md",
      mb: (0, _v7.rem)(3),
      color: "text-secondary",
      ..._v1,
      children: _v0
    }),
    _v151 = ({
      children: _v0,
      ..._v1
    }) => (0, _v1.jsx)(_v6.Header, {
      size: "xs",
      mb: (0, _v7.rem)(3),
      ..._v1,
      children: _v0
    });
  var _v152 = _v0.i(0),
    _v153 = _v0.i(0),
    _v154 = _v0.i(0),
    _v155 = _v0.i(0),
    _v156 = _v0.i(0);
  let _v157 = _v0 => _v0 ? _v0.length > _v26.MAX_CSV_FILE_NAME_CHAR ? `${_v0.substring(0, _v26.MAX_CSV_FILE_NAME_CHAR)}...` : _v0 : "",
    _v158 = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
    _v159 = _v0 => {
      let _v1 = _v0.target;
      return 10 > Math.abs(_v1.scrollHeight - _v1.scrollTop - _v1.clientHeight);
    };
  _v0.s(["customCrmSyncSort", 0, _v0 => _v0.filter(_v0 => _v26.ProvidersWithCRMExport.includes(_v0.emailProviderList.provider.id) || _v0.type === _v26.SYNC_TYPE.IMPORT).sort((_v0, _v1) => {
    let _v2 = _v0 => _v0.errorDetails?.category === _v26.ERROR_CATEGORY.AUTHENTICATION ? 0 : _v0.type === _v26.IMPORT ? 1 : _v0.type === _v26.EXPORT ? 2 : 3,
      _v3 = _v2(_v0),
      _v4 = _v2(_v1);
    return _v3 !== _v4 ? _v3 - _v4 : new Date(_v0.createdOn).getTime() - new Date(_v1.createdOn).getTime();
  }), "getFileName", 0, _v157, "isSafari", 0, _v158, "isScrollBottom", 0, _v159], 0);
  let _v160 = [[195, 23], [150, 30], [180, 43], [190, 20], [185, 25], [192, 43], [140, 23], [170, 33]],
    _v161 = () => (0, _v1.jsx)(_v1.Fragment, {
      children: _v160.map(_v0 => (0, _v1.jsxs)(_v5.Flex, {
        justifyContent: "space-between",
        mt: (0, _v7.rem)(15),
        mb: (0, _v7.rem)(10),
        children: [(0, _v1.jsx)(_v156.BokehSkeleton, {
          width: _v0[0],
          height: (0, _v7.rem)(24)
        }), (0, _v1.jsx)(_v156.BokehSkeleton, {
          width: _v0[1],
          height: (0, _v7.rem)(24)
        })]
      }, _v0[0]))
    }),
    _v162 = ({
      lists: _v0,
      selectedLists: _v1,
      onSelect: _v2,
      loading: _v3,
      hasNextPage: _v4,
      loadNextPage: _v5,
      isLoadingMore: _v6,
      noData: _v7,
      multiSelect: _v8
    }) => {
      let _v9 = _v0 => _v1?.some(_v0 => _v0.listId === _v0),
        _v10 = (0, _v2.useRef)(null),
        _v11 = (0, _v2.useRef)(!1),
        _v12 = _v0 => {
          _v0.key === _v26.KEY_CODES.ENTER && _v0.target?.click();
        },
        _v13 = () => _v0 ? [..._v0].sort((_v0, _v1) => {
          let _v2 = _v9(_v0.listId),
            _v3 = _v9(_v1.listId);
          return _v2 && !_v3 ? -1 : !_v2 && _v3 ? 1 : 0;
        }) : [];
      return _v7 ? (0, _v1.jsx)(_v89.Center, {
        mt: (0, _v7.rem)(25),
        mb: (0, _v7.rem)(15),
        children: (0, _v1.jsx)(_v31.Paragraph, {
          size: "md",
          children: _v28.default.NoResults
        })
      }) : _v3 && !_v6 ? (0, _v1.jsx)(_v3.Box, {
        maxH: "22vh",
        overflowY: "auto",
        ref: _v10,
        px: "md",
        children: (0, _v1.jsx)(_v161, {})
      }) : (0, _v1.jsxs)(_v3.Box, {
        maxH: "22vh",
        overflowY: "auto",
        onScroll: _v0 => {
          _v10.current && (_v159(_v0) ? (!_v4 || _v3 || _v11.current || _v5(), _v11.current = !0) : _v11.current = !1);
        },
        ref: _v10,
        children: [_v13()?.length > 0 && _v13()?.map(_v0 => (0, _v1.jsxs)(_v5.Flex, {
          justifyContent: "space-between",
          alignItems: "center",
          height: (0, _v7.rem)(40),
          py: (0, _v7.rem)(2),
          px: "md",
          tabIndex: 0,
          cursor: "pointer",
          onClick: () => _v2?.(_v0),
          onKeyDown: _v12,
          _hover: {
            bgColor: "stroke"
          },
          children: [(0, _v1.jsxs)(_v5.Flex, {
            alignItems: "center",
            flexGrow: 1,
            maxW: (0, _v7.rem)(240),
            children: [_v8 && (0, _v1.jsx)(_v142.Checkbox, {
              mr: (0, _v7.rem)(12),
              isChecked: _v9(_v0.listId),
              pointerEvents: "none"
            }), (0, _v1.jsx)(_v86, {
              text: _v0?.name,
              variant: "body-md"
            })]
          }), (0, _v1.jsx)(_v5.Flex, {
            alignItems: "center",
            flexShrink: 0,
            children: _v0?.numberOfRegistrants !== void 0 && _v0?.numberOfRegistrants !== null && (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsx)(_v31.Paragraph, {
                size: "md",
                children: (0, _v11.humanize)(_v0.numberOfRegistrants)
              }), (0, _v1.jsx)(_v155.PersonUserFilled, {
                boxSize: (0, _v7.rem)(16),
                ml: "xs"
              })]
            })
          })]
        }, _v0.id)), _v6 ? (0, _v1.jsx)(_v5.Flex, {
          justifyContent: "center",
          children: (0, _v1.jsx)(_v35.Spinner, {})
        }) : null]
      });
    };
  var _v163 = _v0.i(0);
  async function _v164({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2,
      emailServiceProviderName: _v3
    },
    query: _v4,
    ..._v5
  }) {
    return (0, _v100.measureLatency)("getUserEmailServiceProviderLists", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/email_service_providers/${_v3}/lists?${(0, _v101.searchQueryString)(_v4)}&fields=${_v1.map(_v101.intoSnakeCase).join(",")}`, {
        ..._v5,
        method: "GET"
      });
      if (!_v0.ok) throw new _v101.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v101.deepCamelCase)(_v1);
    });
  }
  function _v165() {
    let {
        mutate: _v0
      } = (0, _v106.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v108.useGctlConfig)(),
      [_v5, _v6] = (0, _v99.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/email_service_providers/${_v0.where.emailServiceProviderName}/lists${(0, _v99.serializeQuery)(_v0)}`, _v164({
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
  "true" === _v98.default.env.STORYBOOK && (0, _v99.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v108.useGctlConfig)();
    return (0, _v105.default)(_v2 ? `/users/${_v2.where.userId}/email_service_providers/${_v2.where.emailServiceProviderName}/lists${(0, _v99.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v164({
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
    endpoint: "/users/:userId/email_service_providers/:emailServiceProviderName/lists",
    method: "GET"
  }), "true" === _v98.default.env.STORYBOOK && (0, _v99.assignMswData)(_v165, {
    endpoint: "/users/:userId/email_service_providers/:emailServiceProviderName/lists",
    method: "GET"
  }), "true" === _v98.default.env.STORYBOOK && (0, _v99.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v108.useGctlConfig)();
    return (0, _v107.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/users/${_v2.where.userId}/email_service_providers/${_v2.where.emailServiceProviderName}/lists?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v164({
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
    endpoint: "/users/:userId/email_service_providers/:emailServiceProviderName/lists",
    method: "GET"
  });
  let _v166 = ["id", "name"],
    _v167 = [..._v166, "numberOfRegistrants"],
    _v168 = ({
      provider: _v0,
      onSubmit: _v1,
      onCancel: _v2,
      preSelectedLists: _v3,
      multiSelect: _v4,
      onSelect: _v5,
      width: _v6,
      ownerId: _v7
    }) => {
      let {
          debouncedFetchList: _v8,
          fetchList: _v9,
          listData: _v10,
          loading: _v11,
          hasNextPage: _v12,
          loadNextPage: _v13,
          isLoadingMore: _v14
        } = ((_v0, _v1) => {
          let [_v2, {
              data: _v3,
              callCount: _v4,
              loading: _v5,
              error: _v6
            }] = _v165(),
            [_v7, _v8] = (0, _v2.useState)(!1),
            [_v9, _v10] = (0, _v2.useState)([]),
            {
              user: _v11
            } = (0, _v21.useEntityStore)(),
            _v12 = _v1 ?? (0, _v15.getLastIdFromUri)(_v11?.uri),
            _v13 = (0, _v2.useRef)(!1),
            _v14 = (0, _v2.useRef)(1),
            _v15 = (0, _v2.useRef)(void 0),
            _v16 = (0, _v2.useRef)(""),
            _v17 = (0, _v2.useCallback)(_v0 => {
              _v10([...(_v13.current ? [..._v9] : []), ..._v0.map(_v0 => ({
                numberOfRegistrants: _v0.numberOfRegistrants,
                listId: _v0.id,
                name: _v0.name
              }))]), _v13.current = !1;
            }, [_v9]),
            _v18 = (0, _v2.useCallback)((_v0, _v1, _v2) => {
              if (_v16.current = _v0 || "", _v15.current = _v1, _v2 && (_v10([]), _v14.current = 1), !_v12 || _v0 && _v0.length > 0 && _v0.length < 3) return;
              let _v3 = _v27.useConfigStore.getState().entityType;
              _v2({
                where: {
                  userId: _v12,
                  emailServiceProviderName: _v0
                },
                query: _v0 ? {
                  filterName: _v0,
                  page: _v14.current,
                  filterType: _v1,
                  entityType: _v3
                } : {
                  page: _v14.current,
                  filterType: _v1,
                  entityType: _v3
                },
                select: _v0 === _v26.ProvidersServiceId.Marketo ? _v166 : _v167
              });
            }, [_v12, _v0, _v2]),
            _v19 = (0, _v2.useCallback)((0, _v163.default)(_v18, 500), []);
          return (0, _v2.useEffect)(() => {
            if (!_v5) {
              if (_v6) {
                _v13.current = !1;
                return;
              }
              _v3?.data && (_v8(!!_v3.paging?.next), _v17(_v3?.data));
            }
          }, [_v3, _v6, _v5]), {
            debouncedFetchList: _v19,
            fetchList: _v18,
            listData: _v9,
            loading: _v5 || 0 === _v4,
            hasNextPage: _v7,
            loadNextPage: () => {
              _v7 && (_v14.current = _v14.current + 1, _v13.current = !0, _v18(_v16.current, _v15.current));
            },
            isLoadingMore: _v13.current
          };
        })(_v0.serviceId.toLocaleLowerCase(), _v7),
        [_v15, _v16] = (0, _v2.useState)([]),
        [_v17, _v18] = (0, _v2.useState)(""),
        [_v19, _v20] = (0, _v2.useState)(""),
        [_v21, _v22] = (0, _v2.useState)(_v3),
        _v23 = [_v26.HUBSPOT_LIST_NAMES.DYNAMIC_LIST, _v26.HUBSPOT_LIST_NAMES.STATIC_LIST],
        _v24 = (0, _v2.useCallback)(_v0 => _v0?.focus(), []),
        _v25 = (0, _v2.useRef)(null),
        _v26 = _v0 => {
          _v20(_v0 || ""), _v9(_v17.trim(), _v0 ? _v26.HUBSPOT_LIST_NAME_TYPE_MAPPING[_v0] : void 0, !0);
        };
      (0, _v2.useEffect)(() => {
        _v9();
      }, []), (0, _v2.useEffect)(() => {
        _v3.length && _v22(_v3);
      }, [_v3]);
      let _v27 = !_v11 && !_v15.length,
        _v28 = (0, _v2.useMemo)(() => !!_v3.some(_v0 => parseInt(_v0.providerId || "0") === _v0.serviceType), [_v3, _v0.serviceType]),
        _v29 = (0, _v2.useMemo)(() => !!_v21.some(_v0 => parseInt(_v0.providerId || "0") === _v0.serviceType), [_v21, _v0.serviceType]),
        _v30 = (0, _v2.useMemo)(() => {
          if (_v17.length) return _v15;
          let _v0 = _v3.filter(_v0 => parseInt(_v0.providerId || "0") === _v0.serviceType);
          return _v19 && (_v0 = _v0.filter(_v0 => _v0.type === _v19)), _v15.forEach(_v0 => {
            _v0.some(_v0 => _v0.listId === _v0.listId) || _v0.push(_v0);
          }), _v0;
        }, [_v15, _v0.serviceType, _v17, _v19]);
      return (0, _v2.useEffect)(() => {
        _v16(_v10?.map(_v0 => ({
          providerId: _v0.serviceType?.toString(),
          listId: _v0.listId,
          name: _v0.name,
          numberOfRegistrants: _v0.numberOfRegistrants,
          userId: _v0.userId || _v7
        })) ?? []);
      }, [_v10, _v0.serviceType, _v7]), (0, _v1.jsxs)(_v3.Box, {
        py: (0, _v7.rem)(10),
        borderRadius: "sm",
        width: _v6,
        children: [(0, _v1.jsx)(_v5.Flex, {
          mb: (0, _v7.rem)(6),
          px: "md",
          children: (0, _v1.jsxs)(_v152.InputGroup, {
            children: [_v19 && (0, _v1.jsx)(_v153.InputLeftElement, {
              ref: _v25,
              width: "fit-content",
              children: (0, _v1.jsx)(_v4.Button, {
                ml: "sm",
                size: "xs",
                variant: "secondary",
                children: _v19
              })
            }), (0, _v1.jsx)(_v154.Search, {
              placeholder: _v0.serviceId === _v26.ProvidersServiceId.SalesCloud ? _v28.default.SearchCampaign : _v28.default.SearchList,
              ref: _v24,
              onChange: _v0 => {
                let _v1 = _v0.currentTarget.value;
                _v18(_v1), _v8(_v1.trim(), _v26.HUBSPOT_LIST_NAME_TYPE_MAPPING[_v19], !0);
              },
              onKeyDown: _v0 => {
                _v0.key === _v26.KEY_CODES.BACKSPACE && 0 === _v17.length && _v26();
              },
              variant: "minimal",
              pl: (0, _v7.rem)((_v25.current ? _v25.current.offsetWidth : 0) + 10)
            })]
          })
        }), !_v19 && (0, _v1.jsxs)(_v1.Fragment, {
          children: [_v0.serviceId === _v26.ProvidersServiceId.HubSpot && !_v11 && (0, _v1.jsxs)(_v3.Box, {
            px: "md",
            children: [(0, _v1.jsx)(_v6.Header, {
              size: "2xs",
              my: (0, _v7.rem)(10),
              children: _v28.default.SearchFor
            }), (0, _v1.jsx)(_v5.Flex, {
              gap: (0, _v7.rem)(6),
              children: _v23.map(_v0 => (0, _v1.jsx)(_v4.Button, {
                variant: "secondary",
                px: "sm",
                onClick: () => _v26(_v0),
                children: _v0
              }, _v0))
            })]
          }), (0, _v1.jsx)(_v77.Divider, {
            my: (0, _v7.rem)(12)
          })]
        }), (0, _v1.jsx)(_v162, {
          lists: _v30,
          onSelect: _v0 => {
            if (_v4) {
              let _v0;
              (_v0 = _v0.listId, _v21.some(_v0 => _v0.listId === _v0)) ? _v22(_v0 => _v0.filter(_v0 => _v0.listId !== _v0.listId)) : _v22(_v0 => [..._v0, _v0]);
            } else _v5?.(_v0);
          },
          selectedLists: _v21,
          loading: _v11,
          hasNextPage: _v12,
          loadNextPage: _v13,
          isLoadingMore: _v14,
          multiSelect: _v4,
          noData: _v27
        }), (_v28 || _v29) && !_v27 && !_v11 && _v1 && (0, _v1.jsxs)(_v89.Center, {
          gap: "sm",
          mt: "sm",
          children: [(0, _v1.jsx)(_v4.Button, {
            minW: (0, _v7.rem)(120),
            variant: "secondary",
            onClick: _v2,
            children: _v28.default.Cancel
          }), (0, _v1.jsx)(_v4.Button, {
            minW: (0, _v7.rem)(120),
            onClick: () => _v1(_v21),
            variant: "primary",
            children: _v28.default.Save
          })]
        })]
      });
    };
  _v0.s(["SearchBox", 0, _v168], 0);
  let _v169 = (0, _v2.forwardRef)(({
      dispatch: _v0,
      importRegistrantState: _v1,
      refreshProvider: _v2,
      fetchCRMInfo: _v3,
      fetchCRMStatus: _v4,
      portalRef: _v5
    }, _v6) => {
      let _v7 = (0, _v18.useViewer)(),
        {
          providers: _v8,
          selectedList: _v9,
          selectedProvider: _v10,
          loadingProvider: _v11,
          checkBoxSelected: _v12,
          connectEmailProvidersClicked: _v13
        } = _v1,
        {
          isOpen: _v14,
          onOpen: _v15,
          onClose: _v16
        } = (0, _v37.useDisclosure)(),
        {
          isOpen: _v17,
          onOpen: _v18,
          onClose: _v19
        } = (0, _v37.useDisclosure)(),
        _v20 = (0, _v139.useHistory)(),
        _v21 = _v20?.location?.pathname,
        _v22 = (0, _v38.useToast)(),
        {
          schedule: _v23
        } = (0, _v21.useEntityStore)(),
        _v24 = _v8.filter(_v0 => _v0.connected),
        _v25 = (0, _v2.useRef)(null),
        [_v26, {
          loading: _v27,
          data: _v28,
          error: _v29
        }] = (0, _v43.usePutLeadCaptureResourceIdRegistrantsImport)(),
        _v30 = (0, _v27.useConfigStore)(_v0 => _v0.entityId),
        _v31 = (0, _v27.useConfigStore)(_v0 => _v0.entityType),
        {
          sendRegistrationActionBP: _v32
        } = (0, _v20.useAnalytics)(),
        {
          capabilities: _v33
        } = (0, _v148.useCapability)(["hasIntegrationCenter"]),
        _v34 = (0, _v2.useMemo)(() => _v31 === _v14.ENTITY_TYPE.EVENT && !_v23?.startTime, [_v23, _v31]),
        _v35 = (0, _v2.useMemo)(() => _v31 === _v14.ENTITY_TYPE.EVENT && !_v23?.startTime, [_v23, _v31]),
        _v36 = () => {
          _v30 && _v31 && (_v0({
            type: _v24.ACTION_TYPE.LOADING_CRM,
            payload: !0
          }), _v26({
            where: {
              resourceType: _v14.ENTITY_TO_PATH_MAP[_v31],
              resourceId: _v30
            },
            variables: {
              registrantSource: _v26.CRM_REGISTRANT_SOURCE,
              emailProviderList: [{
                listId: `${_v9?.id}`,
                providerId: _v10?.serviceId,
                isActive: !0,
                userId: _v10?.userId || _v7?.user?.id
              }]
            }
          }), _v32({
            eventName: _v25.BP_EVENT_NAME.REGISTRANTS_SYNC_EMAIL_PROVIDER,
            location: _v25.BP_LOCATION.MODAL,
            modalName: _v25.BP_MODAL.REGISTRANT_EMAIL_PROVIDER_MODAL,
            copy: _v25.BP_COPY.SYNC,
            actionName: _v25.BP_VALUES.REGISTRANT_SYNC_EMAIL_PROVIDER,
            providerName: _v10?.name,
            providerListId: [_v9?.id],
            isIntegration: !0,
            integrationId: _v10?.serviceType,
            integrationName: _v10?.name,
            integrationType: _v25.BP_INTEGRATION_TYPE.CORE_CONNECT,
            partnerBucket: _v25.BP_PARTNET_BUCKET.MARKETING,
            isPartner: !0
          }));
        },
        _v37 = () => {
          _v0({
            type: _v24.ACTION_TYPE.SET_SHOW_MODAL,
            payload: null
          }), setTimeout(() => {
            (() => {
              if (!_v21) return;
              let _v0 = _v21?.split("/");
              _v0.pop(), _v20.replace(`${_v0?.join("/")}#schedule`);
            })();
          }, 200);
        };
      (0, _v2.useImperativeHandle)(_v6, () => ({
        handleCRMSubmit: _v36
      })), (0, _v2.useEffect)(() => {
        !_v27 && (_v0({
          type: _v24.ACTION_TYPE.LOADING_CRM,
          payload: !1
        }), _v29 && _v22({
          title: _v28.default.SomethingWentWrong,
          status: "error"
        }), _v28 && (_v0({
          type: _v24.ACTION_TYPE.SHOW_SUCCESS,
          payload: !0
        }), _v3(), _v4()));
      }, [_v29, _v27, _v28]);
      let _v38 = (0, _v44.useEscapeKey)(_v17, _v19);
      return (0, _v1.jsxs)(_v5.Flex, {
        flex: 1,
        children: [(0, _v1.jsx)(_v3.Box, {
          flex: .6,
          px: "2xl",
          pt: "3xl",
          pb: (0, _v7.rem)(30),
          children: (0, _v1.jsxs)(_v5.Flex, {
            flexDir: "column",
            ref: _v25,
            children: [(0, _v1.jsx)(_v6.Header, {
              size: "xl",
              mb: "sm",
              children: _v28.default.CRMModalHeader
            }), (0, _v1.jsx)(_v31.Paragraph, {
              mb: "5",
              color: "text-secondary",
              size: "md",
              children: _v28.default.CRMModalDescription[_v31]
            }), _v11 ? (0, _v1.jsx)(_v35.Spinner, {
              size: "md",
              h: (0, _v7.rem)(150),
              width: "100%"
            }) : (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsxs)(_v5.Flex, {
                justifyContent: "space-between",
                pb: _v24.length > 0 ? "xs" : (0, _v7.rem)(12),
                children: [(0, _v1.jsx)(_v6.Header, {
                  size: "xs",
                  children: _v28.default.EmailProvider
                }), 0 === _v24.length && (0, _v1.jsx)(_v5.Flex, {
                  children: _v8.map(_v0 => (0, _v1.jsx)(_v62, {
                    src: _v0?.icon,
                    darkSrc: _v0.darkIcon
                  }, _v0.serviceId))
                })]
              }), (0, _v1.jsxs)(_v3.Box, {
                mb: "lg",
                children: [_v24.length > 0 ? (0, _v1.jsxs)(_v92.Menu, {
                  isOpen: _v14,
                  onOpen: _v15,
                  onClose: _v16,
                  children: [(0, _v1.jsx)(_v93.MenuButton, {
                    ..._v170,
                    onClick: _v16,
                    sx: {
                      ..._v59(_v34)
                    },
                    children: (0, _v1.jsxs)(_v5.Flex, {
                      justifyContent: "space-between",
                      alignItems: "center",
                      children: [_v10 ? (0, _v1.jsxs)(_v5.Flex, {
                        justifyContent: "space-between",
                        alignItems: "center",
                        children: [(0, _v1.jsx)(_v62, {
                          src: _v10.icon,
                          darkSrc: _v10.darkIcon
                        }, _v10.serviceId), (0, _v1.jsx)(_v6.Header, {
                          size: "xs",
                          children: _v10.name
                        })]
                      }) : (0, _v1.jsx)(_v31.Paragraph, {
                        size: "md",
                        color: "text-secondary",
                        children: _v28.default.ChooseProvider
                      }), (0, _v1.jsx)(_v146.ChevronDownSmall, {})]
                    })
                  }), (0, _v1.jsxs)(_v95.MenuList, {
                    children: [_v24.map(_v0 => (0, _v1.jsxs)(_v144.MenuItem, {
                      minWidth: (0, _v7.rem)(_v25.current?.offsetWidth || 200),
                      isDisabled: !_v0.canImportFromCrm,
                      onClick: () => {
                        _v0({
                          type: _v24.ACTION_TYPE.SET_PROVIDER,
                          payload: _v0
                        }), _v16();
                      },
                      children: [(0, _v1.jsxs)(_v5.Flex, {
                        children: [(0, _v1.jsx)(_v62, {
                          src: _v0.icon,
                          darkSrc: _v0.darkIcon
                        }, _v0.serviceId), (0, _v1.jsxs)(_v31.Paragraph, {
                          size: "md",
                          children: [_v0.name, " "]
                        })]
                      }), !_v0.canImportFromCrm && (0, _v1.jsx)(_v31.Paragraph, {
                        size: "md",
                        color: "text-secondary",
                        pl: "sm",
                        children: _v28.default.ComingSoon
                      })]
                    }, _v0.serviceId)), (0, _v1.jsx)(_v143.MenuDivider, {}), (0, _v1.jsx)(_v144.MenuItem, {
                      minWidth: (0, _v7.rem)(_v25.current?.offsetWidth || 200),
                      onClick: () => {
                        _v0({
                          type: _v24.ACTION_TYPE.CONNECT_CLICK,
                          payload: !0
                        }), window.open(_v33?.hasIntegrationCenter ? _v26.INTEGRATIONS_CENTER_MARKETING : _v26.MARKETING_PAGE, "_BLANK"), _v16();
                      },
                      children: (0, _v1.jsxs)(_v31.Paragraph, {
                        size: "md",
                        display: "flex",
                        as: "span",
                        children: [(0, _v1.jsx)(_v147.PopOut, {}), (0, _v1.jsx)(_v3.Box, {
                          pl: "sm",
                          children: _v28.default.ManageProviders
                        })]
                      })
                    })]
                  })]
                }) : (0, _v1.jsx)(_v1.Fragment, {
                  children: (0, _v1.jsx)(_v4.Button, {
                    rightIcon: (0, _v1.jsx)(_v147.PopOut, {}),
                    onClick: () => {
                      _v0({
                        type: _v24.ACTION_TYPE.CONNECT_CLICK,
                        payload: !0
                      }), window.open(_v33?.hasIntegrationCenter ? _v26.INTEGRATIONS_CENTER_MARKETING : _v26.MARKETING_PAGE, "_BLANK"), _v32({
                        eventName: _v25.BP_EVENT_NAME.CONNECT_EMAIL_PROVIDERS,
                        actionName: _v25.BP_VALUES.CONNECT_EMAIL_PROVIDERS,
                        copy: _v25.BP_COPY.CONNECT_PROVIDERS,
                        target: _v25.BP_TARGET.USER_SETTINGS,
                        flow: _v25.BP_FLOW.REGISTRANTS_TAB,
                        referrerPage: _v31 === _v14.ENTITY_TYPE.VIDEO ? _v25.BP_REFERRER_PAGE_NAME.SVVM : null
                      }), _v19();
                    },
                    width: "100%",
                    variant: "primary",
                    mb: "sm",
                    children: _v28.default.ConnectProviders
                  })
                }), _v35 && (0, _v1.jsx)(_v140.Alert, {
                  status: "info",
                  children: (0, _v1.jsx)(_v141.AlertDescription, {
                    children: (0, _v11.translate)({
                      singular: "Add a start time to import from CRM or MAP {A}Open schedule.{/A}",
                      replacements: {
                        A: _v0 => (0, _v1.jsx)(_v78.Link, {
                          onClick: _v37,
                          children: _v0
                        })
                      },
                      dictionary: {
                        es: {
                          singular: "Agrega una hora de inicio para importar desde CRM o MAPA {A}Abrir cronograma.{/A}"
                        },
                        "de-DE": {
                          singular: "Füge eine Startzeit für den Import aus CRM oder MAP hinzu {A}Zeitplan öffnen.{/A}"
                        },
                        "fr-FR": {
                          singular: "Ajouter une heure de début pour l'importation depuis votre CRM ou MAP. {A}Ouvrir le calendrier{/A}"
                        },
                        "ja-JP": {
                          singular: "CRMまたはMAPからインポートする開始時刻を追加します。{A}スケジュールを開く{/A}"
                        },
                        "ko-KR": {
                          singular: "CRM 또는 MAP에서 가져올 시작 시간을 추가하세요. {A}일정 열기{/A}"
                        },
                        "pt-BR": {
                          singular: "Adicione um horário de início para importar do CRM ou do MAP {A}Abrir agenda.{/A}"
                        },
                        "zh-CN": {
                          singular: "添加从 CRM 或 MAP 导入的开始时间 {A}打开时间表。{/A}"
                        }
                      }
                    })
                  })
                }), _v13 && (0, _v1.jsx)(_v140.Alert, {
                  status: "info",
                  children: (0, _v1.jsx)(_v141.AlertDescription, {
                    children: (0, _v11.translate)({
                      singular: "{LINK}Refresh{/LINK} to see recently connected providers.",
                      replacements: {
                        LINK: _v0 => (0, _v1.jsx)(_v78.Link, {
                          onClick: _v2,
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
                })]
              }), (0, _v1.jsx)(_v6.Header, {
                size: "xs",
                mb: "xs",
                children: _v28.default.List
              }), (0, _v1.jsxs)(_v32.Popover, {
                isOpen: _v17,
                onOpen: _v18,
                onClose: _v19,
                isLazy: !0,
                children: [(0, _v1.jsx)(_v34.PopoverTrigger, {
                  children: (0, _v1.jsxs)(_v5.Flex, {
                    ..._v170,
                    as: "button",
                    onClick: _v18,
                    justifyContent: "space-between",
                    sx: {
                      ..._v59(!_v10?.lists.length || _v34)
                    },
                    children: [_v9 ? (0, _v1.jsx)(_v5.Flex, {
                      justifyContent: "space-between",
                      children: (0, _v1.jsx)(_v31.Paragraph, {
                        size: "md",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxW: (0, _v7.rem)(380),
                        children: _v9.name
                      })
                    }) : (0, _v1.jsx)(_v31.Paragraph, {
                      size: "md",
                      color: "text-secondary",
                      children: _v10 ? _v10.serviceId === _v26.ProvidersServiceId.SalesCloud ? _v10?.lists.length ? _v28.default.SearchCampaign : _v28.default.NoCampaignsYet : _v10?.lists.length ? _v28.default.SearchList : _v28.default.NoListsYet : _v28.default.NoListsYet
                    }), (0, _v1.jsx)(_v146.ChevronDownSmall, {})]
                  })
                }), (0, _v1.jsx)(_v145.Portal, {
                  containerRef: _v5,
                  children: (0, _v1.jsx)(_v33.PopoverContent, {
                    overflowX: "hidden",
                    onKeyDown: _v38,
                    children: _v10 && (0, _v1.jsx)(_v168, {
                      preSelectedLists: [],
                      provider: _v10,
                      width: _v25.current?.offsetWidth || 200,
                      onSelect: _v0 => {
                        _v0({
                          type: _v24.ACTION_TYPE.SET_LIST,
                          payload: {
                            ..._v0,
                            id: _v0.listId || "",
                            name: _v0.name || ""
                          }
                        }), _v19();
                      }
                    })
                  })
                })]
              })]
            }), (0, _v1.jsx)(_v3.Box, {
              maxWidth: "97%",
              pt: (0, _v7.rem)(10),
              children: (0, _v1.jsx)(_v142.Checkbox, {
                isRequired: !0,
                color: "text-tertiary",
                mt: (0, _v7.rem)(3),
                alignItems: "flex-start",
                onChange: () => _v0({
                  type: _v24.ACTION_TYPE.SET_CHECKBOX_SELECTED,
                  payload: !_v12
                }),
                children: (0, _v1.jsxs)(_v31.Paragraph, {
                  size: "md",
                  as: "span",
                  children: [_v28.default.CSV_CRM_TC[_v31], (0, _v1.jsx)(_v3.Box, {
                    as: "span",
                    color: "red.600",
                    children: "*"
                  })]
                })
              })
            })]
          })
        }), (0, _v1.jsx)(_v3.Box, {
          flex: "0.4",
          px: "2xl",
          py: "3xl",
          backgroundColor: (0, _v58.useColorModeValue)("gray.50", "gray.900"),
          children: (0, _v1.jsx)(_v149, {
            type: _v26.IMPORT_TYPE.CRM
          })
        })]
      });
    }),
    _v170 = {
      width: "100%",
      height: (0, _v7.rem)(48),
      border: "2px solid",
      borderRadius: "input-lg",
      cursor: "pointer",
      mb: (0, _v7.rem)(8),
      py: (0, _v7.rem)(8),
      px: (0, _v7.rem)(10),
      _active: {
        transform: "1"
      },
      alignItems: "center",
      borderColor: "input-stroke",
      background: "input-fill"
    };
  var _v171 = _v0.i(0),
    _v172 = _v0.i(0);
  let _v173 = _v0 => (0, _v1.jsx)(_v129.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v1.jsx)("path", {
        d: "M20 8.94a1.307 1.307 0 0 0-.06-.27v-.09a1.07 1.07 0 0 0-.19-.28l-6-6a1.071 1.071 0 0 0-.28-.19.32.32 0 0 0-.09 0 .88.88 0 0 0-.33-.11H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8.94Zm-6-3.53L16.59 8H15a1 1 0 0 1-1-1V5.41ZM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h3v9Zm-3.71-6.71L11 15.59l-1.29-1.3a1.004 1.004 0 1 0-1.42 1.42l2 2a1.002 1.002 0 0 0 1.42 0l4-4a1.004 1.004 0 1 0-1.42-1.42Z",
        fill: "currentColor"
      })
    }),
    _v174 = ({
      stepCount: _v0,
      uploadedCsv: _v1,
      checkBoxSelected: _v2,
      csvError: _v3,
      dispatch: _v4,
      showCsvError: _v5
    }) => {
      let _v6,
        {
          sendRegistrationActionBP: _v7
        } = (0, _v20.useAnalytics)(),
        _v8 = (0, _v27.useConfigStore)(_v0 => _v0.entityType);
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsxs)(_v5.Flex, {
          flex: "0.6",
          p: "2xl",
          flexDir: "column",
          justifyContent: "space-between",
          children: [(0, _v1.jsxs)("div", {
            children: [(0, _v1.jsx)(_v31.Paragraph, {
              size: "md",
              children: (0, _v11.translate)({
                singular: "Step {STEP} of {STEPS}",
                replacements: {
                  STEP: _v0,
                  STEPS: _v26.UPLOAD_CSV_MODAL_STEPS[1]
                },
                dictionary: {
                  es: {
                    singular: "Paso {STEP} de {STEPS}"
                  },
                  "de-DE": {
                    singular: "Schritt {STEP} von {STEPS}"
                  },
                  "fr-FR": {
                    singular: "Étape {STEP} de {STEPS}"
                  },
                  "ja-JP": {
                    singular: "ステップ {STEP} / {STEPS}"
                  },
                  "ko-KR": {
                    singular: "{STEP} / {STEPS} 페이지"
                  },
                  "pt-BR": {
                    singular: "Passo {STEP} de {STEPS}"
                  },
                  "zh-CN": {
                    singular: "步骤 {STEP} / {STEPS}"
                  }
                }
              })
            }), (0, _v1.jsx)(_v6.Header, {
              size: "xl",
              my: (0, _v7.rem)(10),
              children: _v28.default.AddRegistrants
            }), (0, _v1.jsx)(_v3.Box, {
              maxW: "95%",
              mb: "5",
              children: (0, _v1.jsx)(_v31.Paragraph, {
                size: "md",
                children: (0, _v11.translate)({
                  singular: "Format your CSV with the following columns to match the Registrants table in Vimeo:{br}• First name{br}\n• Last name{br}\n• Email address",
                  replacements: {
                    br: () => (0, _v1.jsx)("br", {}),
                    A: _v0 => (0, _v1.jsx)("b", {
                      children: _v0
                    })
                  },
                  dictionary: {
                    es: {
                      singular: "Formatee su CSV con las siguientes columnas para que coincidan con la tabla Inscritos de Vimeo:{br}• Nombre{br}\n• Apellido{br}\n• Dirección de correo electrónico"
                    },
                    "de-DE": {
                      singular: "Formatieren Sie Ihre CSV-Datei mit den folgenden Spalten so, dass sie mit der Registranten-Tabelle in Vimeo übereinstimmt:{br}• Vorname{br}\n• Nachname{br}\n•E-Mail-Adresse"
                    },
                    "fr-FR": {
                      singular: "Formatez votre fichier CSV avec les colonnes suivantes pour qu'il corresponde au tableau des participants dans Vimeo :{br}• Prénom{br}\n• Nom{br}\n• Adresse e-mail"
                    },
                    "ja-JP": {
                      singular: "Vimeoの登録者表と一致するように次の列でCSVをフォーマットします。{br} • 名{br}\n• 姓{br}\n• メールアドレス"
                    },
                    "ko-KR": {
                      singular: "Vimeo의 등록자 표와 일치하도록 다음 열로 CSV 형식을 지정합니다.{br}• 이름{br}\n• 성{br}\n• 이메일 주소"
                    },
                    "pt-BR": {
                      singular: "Formate o arquivo CSV com as seguintes colunas para que correspondam à tabela de inscritos no Vimeo:{br}• Nome{br}\n• Sobrenome{br}\n• Endereço de e-mail"
                    },
                    "zh-CN": {
                      singular: "使用以下列设置 CSV 格式，以匹配 Vimeo 中的注册者表：{br}• 名字{br}\n• 姓氏{br}\n• 电子邮件地址"
                    }
                  }
                })
              })
            }), _v1 ? (0, _v1.jsx)(_v3.Box, {
              onMouseEnter: () => {
                _v1?.name && !_v158 && clearInterval(_v6);
              },
              children: (0, _v1.jsx)(_v36.Tooltip, {
                fontSize: "body-md",
                label: _v1.name,
                children: (0, _v1.jsx)(_v4.Button, {
                  maxW: (0, _v7.rem)(350),
                  variant: "secondary",
                  leftIcon: (0, _v1.jsx)(_v173, {}),
                  rightIcon: (0, _v1.jsx)(_v172.CloseXSmall, {
                    onClick: () => {
                      _v4({
                        type: _v24.ACTION_TYPE.SET_UPLOADED_CSV,
                        payload: null
                      }), _v5(null);
                    }
                  }),
                  children: (0, _v1.jsx)(_v3.Box, {
                    as: "span",
                    maxW: "80%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    children: _v1.name
                  })
                })
              })
            }) : (0, _v1.jsx)(_v3.Box, {
              width: "fit-content",
              children: (0, _v1.jsx)(_v171.FileInput, {
                variant: "primary",
                multiple: !1,
                accept: ".csv",
                onChange: _v0 => {
                  if (_v0.target.files && _v0.target.files[0]) {
                    var _v1;
                    (_v1 = _v0.target.files[0]).name.length > _v26.MAX_CSV_FILE_NAME_ALLOWED ? _v5((0, _v11.translate)({
                      singular: "{FILE_NAME} name is longer than 240 characters. Please re-upload with shorter name.",
                      replacements: {
                        FILE_NAME: () => (0, _v1.jsx)("strong", {
                          children: _v157(_v1.name)
                        })
                      },
                      dictionary: {
                        "fr-FR": {
                          singular: "Le nom du fichier {FILE_NAME} est supérieur à 240 caractères. Veuillez le réimporter avec un nom plus court."
                        },
                        "ja-JP": {
                          singular: "{FILE_NAME}の名前が240文字を超えています。名前を短くして再度アップロードしてください。"
                        },
                        "ko-KR": {
                          singular: "{FILE_NAME} 파일 이름이 240자를 초과합니다. 짧은 이름으로 다시 업로드해주세요."
                        },
                        "zh-CN": {
                          singular: "{FILE_NAME} 名称超过 240 个字符。请使用较短的名称重新上传。"
                        }
                      }
                    })) : _v1.size > _v26.MAX_CSV_UPLOAD_SIZE ? _v5((0, _v11.translate)({
                      singular: "{FILE_NAME} is too big. Please upload a file under 10MB.",
                      replacements: {
                        FILE_NAME: () => (0, _v1.jsx)("strong", {
                          children: _v157(_v1.name)
                        })
                      },
                      dictionary: {
                        "fr-FR": {
                          singular: "Le fichier {FILE_NAME} est trop volumineux. Veuillez importer un fichier de moins de 10 Mo."
                        },
                        "ja-JP": {
                          singular: "{FILE_NAME} は大きすぎます。10MB以下のファイルをアップロードしてください。"
                        },
                        "ko-KR": {
                          singular: "{FILE_NAME} 파일이 너무 큽니다. 10MB 미만의 파일을 업로드하세요."
                        },
                        "zh-CN": {
                          singular: "{FILE_NAME} 太大了。请上传不超过 10MB 的文件。"
                        }
                      }
                    })) : (_v5(null), _v4({
                      type: _v24.ACTION_TYPE.SET_UPLOADED_CSV,
                      payload: _v1
                    })), _v7({
                      eventName: _v25.BP_EVENT_NAME.REGISTRANTS_UPLOAD_CSV_MODAL,
                      location: _v25.BP_LOCATION.MODAL,
                      modalName: _v25.BP_MODAL.REGISTRANT_UPLOAD_CSV_MODAL,
                      flow: _v25.BP_FLOW.ADD_ATTENDEES,
                      copy: _v25.BP_COPY.UPLOAD_CSV,
                      actionName: _v25.BP_VALUES.UPLOAD_ATTENDEE_CSV_FILE
                    });
                  }
                },
                label: _v28.default.UploadCSV
              })
            }), _v3 && (0, _v1.jsx)(_v140.Alert, {
              status: "error",
              mt: "sm",
              children: (0, _v1.jsx)(_v141.AlertDescription, {
                children: (0, _v1.jsx)(_v31.Paragraph, {
                  size: "md",
                  children: _v3
                })
              })
            })]
          }), (0, _v1.jsx)(_v142.Checkbox, {
            isRequired: !0,
            color: "text-tertiary",
            isChecked: _v2,
            mt: (0, _v7.rem)(3),
            alignItems: "flex-start",
            onChange: () => _v4({
              type: _v24.ACTION_TYPE.SET_CHECKBOX_SELECTED,
              payload: !_v2
            }),
            children: (0, _v1.jsxs)(_v31.Paragraph, {
              size: "md",
              as: "span",
              children: [_v28.default.CSV_CRM_TC[_v8], (0, _v1.jsx)(_v3.Box, {
                as: "span",
                color: "red.600",
                children: "*"
              })]
            })
          })]
        }), (0, _v1.jsx)(_v3.Box, {
          flex: "0.4",
          py: "3xl",
          px: "2xl",
          backgroundColor: (0, _v58.useColorModeValue)("gray.50", "gray.900"),
          children: (0, _v1.jsx)(_v149, {
            type: _v26.IMPORT_TYPE.CSV
          })
        })]
      });
    };
  var _v175 = _v0.i(0);
  let _v176 = {
      firstName: _v28.default.FirstName,
      lastName: _v28.default.LastName,
      emailAddress: _v28.default.EmailAddress
    },
    _v177 = ({
      stepCount: _v0,
      columnsMap: _v1,
      columnHeaders: _v2,
      dispatch: _v3,
      apiError: _v4,
      portalRef: _v5
    }) => {
      let _v6,
        [_v7, _v8] = (0, _v2.useState)(-1),
        _v9 = (0, _v27.useConfigStore)(_v0 => _v0.entityType);
      return (0, _v1.jsxs)(_v3.Box, {
        w: "100%",
        px: "2xl",
        pt: "3xl",
        pb: (0, _v7.rem)(10),
        children: [(0, _v1.jsx)(_v31.Paragraph, {
          size: "md",
          children: (0, _v11.translate)({
            singular: "Step {STEP} of {STEPS}",
            replacements: {
              STEP: _v0,
              STEPS: _v26.UPLOAD_CSV_MODAL_STEPS[1]
            },
            dictionary: {
              es: {
                singular: "Paso {STEP} de {STEPS}"
              },
              "de-DE": {
                singular: "Schritt {STEP} von {STEPS}"
              },
              "fr-FR": {
                singular: "Étape {STEP} de {STEPS}"
              },
              "ja-JP": {
                singular: "ステップ {STEP} / {STEPS}"
              },
              "ko-KR": {
                singular: "{STEP} / {STEPS} 페이지"
              },
              "pt-BR": {
                singular: "Passo {STEP} de {STEPS}"
              },
              "zh-CN": {
                singular: "步骤 {STEP} / {STEPS}"
              }
            }
          })
        }), (0, _v1.jsx)(_v6.Header, {
          size: "xl",
          my: (0, _v7.rem)(10),
          children: _v28.default.MapAttendees[_v9]
        }), (0, _v1.jsx)(_v31.Paragraph, {
          size: "md",
          maxW: "60%",
          pb: "5",
          children: _v28.default.MapAttendeesDesc[_v9]
        }), (_v6 = Object.keys(_v1), (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsxs)(_v5.Flex, {
            pt: (0, _v7.rem)(25),
            pb: (0, _v7.rem)(5),
            children: [(0, _v1.jsx)(_v5.Flex, {
              flex: "0.6",
              justifyContent: "space-between",
              mr: (0, _v7.rem)(30),
              children: (0, _v1.jsx)(_v6.Header, {
                size: "xs",
                mb: "sm",
                children: _v28.default.VimeoAttendeeTableColumns[_v9]
              })
            }), (0, _v1.jsx)(_v6.Header, {
              size: "xs",
              flex: "0.4",
              children: _v28.default.CSVColumnHeader
            })]
          }), _v6.map((_v0, _v1) => (0, _v1.jsxs)(_v5.Flex, {
            alignItems: "center",
            py: (0, _v7.rem)(10),
            borderTop: "1px solid",
            borderColor: "stroke",
            children: [(0, _v1.jsxs)(_v5.Flex, {
              flex: "0.6",
              justifyContent: "space-between",
              mr: (0, _v7.rem)(30),
              children: [(0, _v1.jsxs)(_v6.Header, {
                display: "flex",
                size: "xs",
                children: [_v176[_v0], 2 === _v1 && (0, _v1.jsx)(_v31.Paragraph, {
                  color: "red.500",
                  children: "*"
                })]
              }), (0, _v1.jsx)(_v175.ArrowRight, {
                color: "text-secondary"
              })]
            }), (0, _v1.jsx)(_v3.Box, {
              flex: "0.4",
              children: (0, _v1.jsxs)(_v92.Menu, {
                isOpen: _v7 === _v1,
                onOpen: () => _v8(_v1),
                onClose: () => _v8(-1),
                placement: "bottom-end",
                children: [(0, _v1.jsx)(_v93.MenuButton, {
                  onClick: () => _v8(_v1),
                  border: "2px solid",
                  transition: "120ms ease-in-out",
                  py: "sm",
                  px: (0, _v7.rem)(12),
                  width: "100%",
                  borderColor: "input-stroke",
                  background: "input-fill",
                  borderRadius: "input-lg",
                  _active: {
                    transform: "1"
                  },
                  children: (0, _v1.jsxs)(_v5.Flex, {
                    justifyContent: "space-between",
                    children: [_v1[_v0] ? (0, _v1.jsx)(_v31.Paragraph, {
                      size: "md",
                      children: _v1[_v0]
                    }) : (0, _v1.jsx)(_v31.Paragraph, {
                      color: "text-secondary",
                      size: "md",
                      children: _v28.default.ChooseProperty
                    }), (0, _v1.jsx)(_v97.ChevronDown, {})]
                  })
                }), (0, _v1.jsx)(_v145.Portal, {
                  containerRef: _v5,
                  children: (0, _v1.jsx)(_v95.MenuList, {
                    maxH: "30vh",
                    w: "315px",
                    overflow: "scroll",
                    children: _v2.map((_v0, _v1) => {
                      let _v2 = _v6.some(_v0 => _v1[_v0] === _v0) || _v0 === _v28.default.ChooseProperty && !_v1[_v0],
                        _v3 = _v0 === _v28.default.ChooseProperty,
                        _v4 = `${_v1}-${_v1}-${_v0}`,
                        _v5 = _v2 && _v1[_v0] !== _v0;
                      return (0, _v1.jsxs)(_v144.MenuItem, {
                        onClick: () => {
                          if (_v3 && _v1[_v0]) {
                            _v3({
                              type: _v24.ACTION_TYPE.SET_COLUMNS_MAP,
                              payload: {
                                ..._v1,
                                [_v0]: null
                              }
                            }), _v8(-1);
                            return;
                          }
                          _v2 || (_v3({
                            type: _v24.ACTION_TYPE.SET_COLUMNS_MAP,
                            payload: {
                              ..._v1,
                              [_v0]: _v0
                            }
                          }), _v8(-1));
                        },
                        id: _v4,
                        isDisabled: _v5,
                        cursor: "pointer",
                        children: [(0, _v1.jsx)(_v3.Box, {
                          minW: (0, _v7.rem)(24),
                          mr: (0, _v7.rem)(5),
                          children: _v1[_v0] === _v0 && !_v3 && (0, _v1.jsx)(_v116.Checkmark, {
                            color: "blue.500",
                            w: (0, _v7.rem)(24)
                          })
                        }), (0, _v1.jsx)(_v31.Paragraph, {
                          size: "md",
                          children: _v0
                        })]
                      }, _v4);
                    })
                  })
                })]
              })
            })]
          }, _v0))]
        })), _v4?.length ? (0, _v1.jsx)(_v140.Alert, {
          status: "error",
          mt: (0, _v7.rem)(10),
          mb: 0,
          children: (0, _v1.jsx)(_v141.AlertDescription, {
            children: (0, _v1.jsx)(_v31.Paragraph, {
              size: "md",
              children: _v4
            })
          })
        }) : null]
      });
    };
  async function _v178({
    baseUrl: _v0,
    where: {
      uploadId: _v1
    },
    ..._v2
  }) {
    return (0, _v100.measureLatency)("postLeadCaptureRegistrantsUploadActivate", "POST", async () => {
      let _v0 = await fetch(`${_v0}/lead_capture/registrants/uploads/${_v1}/activate`, {
        ..._v2,
        method: "POST"
      });
      if (!_v0.ok) throw new _v101.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v101.deepCamelCase)(_v1);
    });
  }
  function _v179() {
    let {
        mutate: _v0
      } = (0, _v106.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v108.useGctlConfig)(),
      [_v5, _v6] = (0, _v99.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/lead_capture/registrants/uploads/${_v0.where.uploadId}/activate${(0, _v99.serializeQuery)(_v0)}`, _v178({
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
  async function _v180({
    baseUrl: _v0,
    select: _v1,
    where: {
      resourceType: _v2,
      resourceId: _v3
    },
    query: _v4,
    ..._v5
  }) {
    return (0, _v100.measureLatency)("getLeadCaptureResourceIdRegistrantsUploads", "GET", async () => {
      let _v0 = await fetch(`${_v0}/lead_capture/${_v2}/${_v3}/registrants/uploads?${(0, _v101.searchQueryString)(_v4)}&fields=${_v1.map(_v101.intoSnakeCase).join(",")}`, {
        ..._v5,
        method: "GET"
      });
      if (!_v0.ok) throw new _v101.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v101.deepCamelCase)(_v1);
    });
  }
  async function _v181({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      resourceType: _v3,
      resourceId: _v4
    },
    ..._v5
  }) {
    return (0, _v100.measureLatency)("postLeadCaptureResourceIdRegistrantsUploads", "POST", async () => {
      let _v0 = await fetch(`${_v0}/lead_capture/${_v3}/${_v4}/registrants/uploads?fields=${_v1.map(_v101.intoSnakeCase).join(",")}`, {
        ..._v5,
        method: "POST",
        body: JSON.stringify((0, _v101.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v101.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v101.deepCamelCase)(_v1);
    });
  }
  function _v182() {
    let {
        mutate: _v0
      } = (0, _v106.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v108.useGctlConfig)(),
      [_v5, _v6] = (0, _v99.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/lead_capture/${_v0.where.resourceType}/${_v0.where.resourceId}/registrants/uploads${(0, _v99.serializeQuery)(_v0)}`, _v180({
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
  function _v183() {
    let {
        baseUrl: _v0,
        jwt: _v1,
        xVimeoPage: _v2,
        locale: _v3
      } = (0, _v108.useGctlConfig)(),
      [_v4, _v5] = (0, _v99.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v5({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v181({
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
  "true" === _v98.default.env.STORYBOOK && (0, _v99.assignMswData)(_v179, {
    endpoint: "/lead_capture/registrants/uploads/:uploadId/activate",
    method: "POST"
  }), "true" === _v98.default.env.STORYBOOK && (0, _v99.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v108.useGctlConfig)();
    return (0, _v105.default)(_v2 ? `/lead_capture/${_v2.where.resourceType}/${_v2.where.resourceId}/registrants/uploads${(0, _v99.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v180({
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
    endpoint: "/lead_capture/:resourceType/:resourceId/registrants/uploads",
    method: "GET"
  }), "true" === _v98.default.env.STORYBOOK && (0, _v99.assignMswData)(_v182, {
    endpoint: "/lead_capture/:resourceType/:resourceId/registrants/uploads",
    method: "GET"
  }), "true" === _v98.default.env.STORYBOOK && (0, _v99.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v108.useGctlConfig)();
    return (0, _v107.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/lead_capture/${_v2.where.resourceType}/${_v2.where.resourceId}/registrants/uploads?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v180({
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
    endpoint: "/lead_capture/:resourceType/:resourceId/registrants/uploads",
    method: "GET"
  }), "true" === _v98.default.env.STORYBOOK && (0, _v99.assignMswData)(_v183, {
    endpoint: "/lead_capture/:resourceType/:resourceId/registrants/uploads",
    method: "POST"
  }), _v0.s(["useGetLeadCaptureResourceIdRegistrantsUploadsLazy", 0, _v182, "usePostLeadCaptureResourceIdRegistrantsUploads", 0, _v183], 0);
  let _v184 = _v0 => {
    let {
        entityType: _v1,
        entityId: _v2
      } = (0, _v27.useConfigStore)(),
      [_v3, {
        error: _v4,
        data: _v5,
        loading: _v6
      }] = _v183(),
      [_v7, {
        error: _v8,
        data: _v9,
        loading: _v10
      }] = _v179(),
      _v11 = (0, _v2.useRef)(void 0),
      _v12 = _v11.current,
      {
        error: _v13,
        data: _v14,
        loading: _v15
      } = (0, _v2.useMemo)(() => ({
        error: _v4,
        data: _v5,
        loading: _v6
      }), [_v4, _v5, _v6]),
      {
        error: _v16,
        data: _v17,
        loading: _v18
      } = (0, _v2.useMemo)(() => ({
        error: _v8,
        data: _v9,
        loading: _v10
      }), [_v8, _v9, _v10]);
    return (0, _v2.useEffect)(() => {
      if (!_v15) if (_v13) _v0({
        type: _v24.ACTION_TYPE.SET_API_ERROR,
        payload: _v28.default.CSVUploadFailed
      });else {
        var _v0;
        let _v0;
        _v14?.signedUrl && (_v0 = _v14.signedUrl, (_v0 = new Headers()).append("Content-Type", "application/octet-stream"), fetch(_v0, {
          method: "PUT",
          headers: _v0,
          body: _v12
        }).then(_v0 => {
          if (200 === _v0.status) _v7({
            where: {
              uploadId: `${(0, _v15.getLastUuidFromUri)(_v14?.uri)}`
            }
          });else throw Error(_v0.statusText);
        }).catch(_v0 => {
          _v0({
            type: _v24.ACTION_TYPE.SET_API_ERROR,
            payload: _v28.default.CSVUploadFailed
          });
        }));
      }
    }, [_v14, _v13, _v15]), (0, _v2.useEffect)(() => {
      if (!_v18) {
        if (_v16) _v0({
          type: _v24.ACTION_TYPE.SET_API_ERROR,
          payload: _v28.default.CSVUploadFailed
        });else if (_v17) {
          _v0({
            type: _v24.ACTION_TYPE.SET_API_SUCCESS
          });
          let _v0 = {
            status: _v26.CRM_CSV_STATUS.UPLOADED,
            fileName: `${_v12?.name}`,
            uri: `${_v14?.uri}`
          };
          _v0({
            type: _v24.ACTION_TYPE.NEW_UPLOAD,
            payload: _v0
          });
        }
      }
    }, [_v17, _v16, _v18]), {
      uploadCSV: (_v0, _v1) => {
        _v11.current = _v0, _v2 && _v1 && _v3({
          where: {
            resourceType: _v14.ENTITY_TO_PATH_MAP[_v1],
            resourceId: _v2
          },
          select: ["signedUrl", "uri"],
          variables: {
            fileName: `${_v0?.name}`,
            mappedColumns: {
              firstName: _v1.firstName?.trim(),
              lastName: _v1.lastName?.trim(),
              email: _v1.emailAddress?.trim() || ""
            }
          }
        });
      }
    };
  };
  _v0.s(["useCSV", 0, _v184, "useCSVUploadError", 0, _v0 => {
    let _v1 = (0, _v18.useViewer)(),
      _v2 = _v1?.jwt,
      _v3 = _v1?.locale,
      _v4 = _v1?.apiUrl;
    return {
      downloadUri: _v4 && _v2 && _v3 ? `//${_v4}/lead_capture/registrants/uploads/${_v0}/errors/export?jwt_token=${_v2}&format=csv&locale=${_v3}` : ""
    };
  }], 0);
  let _v185 = ["email", "e-mail", "mail"],
    _v186 = ["first name", "firstname", "first", "name", "fname"],
    _v187 = ["last name", "lastname", "last", "surname", "lname"],
    _v188 = (0, _v2.forwardRef)(({
      totalAttendees: _v0,
      dispatch: _v1,
      importRegistrantState: _v2,
      portalRef: _v3
    }, _v4) => {
      let {
          stepCount: _v5,
          uploadedCsv: _v6,
          checkBoxSelected: _v7,
          columnHeaders: _v8,
          columnsMap: _v9,
          csvError: _v10,
          apiError: _v11
        } = _v2,
        {
          registrationData: _v12
        } = (0, _v21.useEntityStore)(),
        {
          uploadCSV: _v13
        } = _v184(_v1),
        {
          sendRegistrationActionBP: _v14
        } = (0, _v20.useAnalytics)(),
        _v15 = _v0 => {
          _v1({
            type: _v24.ACTION_TYPE.SET_CSV_ERROR,
            payload: _v0
          });
        },
        _v16 = _v0 => {
          _v1({
            type: _v24.ACTION_TYPE.SET_API_PENDING,
            payload: !0
          }), _v13(_v6, _v0), _v14({
            eventName: _v25.BP_EVENT_NAME.REGISTRANTS_UPLOAD_CSV_MODAL,
            location: _v25.BP_LOCATION.MODAL,
            modalName: _v25.BP_MODAL.REGISTRANT_UPLOAD_CSV_MODAL,
            flow: _v25.BP_FLOW.MAP_ATTENDEES,
            copy: _v25.BP_COPY.SUBMIT,
            actionName: _v25.BP_VALUES.FINISH_UPLOAD_CSV_MODAL
          });
        };
      return (0, _v2.useImperativeHandle)(_v4, () => ({
        handleNext: () => {
          if (_v1({
            type: _v24.ACTION_TYPE.SET_PROCESSING_CSV,
            payload: !0
          }), _v6) {
            let _v0 = new FileReader();
            _v0.onload = function (_v0) {
              (_v0 => {
                let _v1,
                  _v2 = _v0.split(/\r\n|\n/);
                if (_v2.length <= 1) return _v15((0, _v11.translate)({
                  singular: "{FILE_NAME} is empty. Please try again.",
                  replacements: {
                    FILE_NAME: () => (0, _v1.jsx)("strong", {
                      children: _v157(_v6?.name)
                    })
                  },
                  dictionary: {
                    "fr-FR": {
                      singular: "Le fichier {FILE_NAME} est vide. Veuillez réessayer."
                    },
                    "ja-JP": {
                      singular: "{FILE_NAME}は空です。再度お試しください。"
                    },
                    "ko-KR": {
                      singular: "{FILE_NAME} 파일이 비어 있습니다. 다시 시도해 주세요."
                    },
                    "zh-CN": {
                      singular: "{FILE_NAME} 为空。请重试。"
                    }
                  }
                }));
                let _v3 = _v2[0].replaceAll('"', "").split(",").filter(_v0 => _v0.trim().length > 0);
                _v1({
                  type: _v24.ACTION_TYPE.SET_COLUMN_HEADERS,
                  payload: [_v28.default.ChooseProperty, ..._v3]
                });
                let _v4 = (_v1 = {
                  firstName: null,
                  lastName: null,
                  emailAddress: null
                }, _v3.forEach(_v0 => {
                  let _v1 = _v0.toLowerCase();
                  if (!_v1.emailAddress) {
                    for (let _v0 of _v185) if (_v1.includes(_v0)) {
                      _v1.emailAddress = _v0;
                      break;
                    }
                  }
                  if (!_v1.firstName) {
                    for (let _v0 of _v186) if (_v1.includes(_v0) && !_v1.includes("last")) {
                      _v1.firstName = _v0;
                      break;
                    }
                  }
                  if (!_v1.lastName && _v1.firstName !== _v0) {
                    for (let _v0 of _v187) if (_v1.includes(_v0)) {
                      _v1.lastName = _v0;
                      break;
                    }
                  }
                }), _v1);
                _v1({
                  type: _v24.ACTION_TYPE.SET_COLUMNS_MAP,
                  payload: {
                    ..._v4
                  }
                });
                let _v5 = _v2.length - 1;
                for (let _v0 = _v2.length - 1; _v0 >= 1; _v0--) {
                  let _v0 = _v2[_v0].split(","),
                    _v1 = 0;
                  for (let _v0 = 0; _v0 < _v0.length; _v0++) _v1 += _v0[_v0].length;
                  _v1 < 10 && _v5--;
                }
                _v12 && !_v12.isUnlimited && _v5 > _v12.capping - _v0 ? _v15((0, _v11.translate)({
                  singular: "{FILE_NAME} exceeds the max number of attendees.",
                  replacements: {
                    FILE_NAME: () => (0, _v1.jsx)("strong", {
                      children: _v157(_v6?.name)
                    })
                  },
                  dictionary: {
                    "fr-FR": {
                      singular: "Le fichier {FILE_NAME} dépasse le nombre maximum de participants."
                    },
                    "ja-JP": {
                      singular: "{FILE_NAME} は参加者の最大数を超えています。"
                    },
                    "ko-KR": {
                      singular: "{FILE_NAME} 파일은 최대 참석자 수를 초과합니다."
                    },
                    "zh-CN": {
                      singular: "{FILE_NAME} 超过了最大出席者人数。"
                    }
                  }
                })) : _v5 > _v26.MAX_REGISTRANTS_ALLOWED ? _v15((0, _v11.translate)({
                  singular: "{FILE_NAME} exceeds the max allowed number of rows. Please upload a file under {MAX_REGISTRANTS} rows.",
                  replacements: {
                    FILE_NAME: () => (0, _v1.jsx)("strong", {
                      children: _v157(_v6?.name)
                    }),
                    MAX_REGISTRANTS: _v26.MAX_REGISTRANTS_ALLOWED.toLocaleString()
                  },
                  dictionary: {
                    "fr-FR": {
                      singular: "Le fichier {FILE_NAME} dépasse le nombre maximum de lignes. Veuillez importer un fichier contenant moins de {MAX_REGISTRANTS} lignes."
                    },
                    "ja-JP": {
                      singular: "{FILE_NAME} はアップロード可能な最大の行数を超えています。{MAX_REGISTRANTS} 列以下のファイルをアップロードしてください。"
                    },
                    "ko-KR": {
                      singular: "{FILE_NAME} 파일은 허용되는 최대 행 수를 초과합니다. {MAX_REGISTRANTS}행 미만의 파일을 업로드하세요."
                    },
                    "zh-CN": {
                      singular: "{FILE_NAME} 超过允许的最大行数。请上传不超过 {MAX_REGISTRANTS} 行的文件。"
                    }
                  }
                })) : _v1({
                  type: _v24.ACTION_TYPE.SET_PROCESSING_CSV_SUCCESS,
                  payload: {
                    csvEntries: _v5,
                    stepCount: _v26.UPLOAD_CSV_MODAL_STEPS[1]
                  }
                });
              })(_v0?.target?.result);
            }, _v0.onerror = function () {
              _v15((0, _v11.translate)({
                singular: "{FILE_NAME} is corrupted. Please try again.",
                replacements: {
                  FILE_NAME: () => (0, _v1.jsx)("strong", {
                    children: _v157(_v6?.name)
                  })
                },
                dictionary: {
                  "fr-FR": {
                    singular: "Le fichier {FILE_NAME} est corrompu. Veuillez réessayer."
                  },
                  "ja-JP": {
                    singular: "{FILE_NAME}が破損しています。再度お試しください。"
                  },
                  "ko-KR": {
                    singular: "{FILE_NAME} 파일이 손상되었습니다. 다시 시도해 주세요."
                  },
                  "zh-CN": {
                    singular: "{FILE_NAME} 已损坏。请重试。"
                  }
                }
              }));
            }, _v0.readAsText(_v6);
          }
          _v14({
            eventName: _v25.BP_EVENT_NAME.REGISTRANTS_UPLOAD_CSV_MODAL,
            location: _v25.BP_LOCATION.MODAL,
            modalName: _v25.BP_MODAL.REGISTRANT_UPLOAD_CSV_MODAL,
            flow: _v25.BP_FLOW.ADD_ATTENDEES,
            copy: _v25.BP_COPY.NEXT,
            actionName: _v25.BP_VALUES.UPLOAD_CSV_MODAL_NEXT
          });
        },
        handleCSVSubmit: _v16,
        handlePrevious: () => {
          _v1({
            type: _v24.ACTION_TYPE.SET_STEP_COUNT,
            payload: _v26.UPLOAD_CSV_MODAL_STEPS[0]
          });
        }
      })), (0, _v1.jsx)(_v1.Fragment, {
        children: _v5 === _v26.UPLOAD_CSV_MODAL_STEPS[0] ? (0, _v1.jsx)(_v5.Flex, {
          flex: "1",
          children: (0, _v1.jsx)(_v174, {
            stepCount: _v5,
            uploadedCsv: _v6,
            checkBoxSelected: _v7,
            csvError: _v10,
            dispatch: _v1,
            showCsvError: _v15
          })
        }) : _v5 === _v26.UPLOAD_CSV_MODAL_STEPS[1] ? (0, _v1.jsx)(_v5.Flex, {
          flex: "1",
          children: (0, _v1.jsx)(_v177, {
            stepCount: _v5,
            columnsMap: _v9,
            columnHeaders: _v8,
            dispatch: _v1,
            apiError: _v11,
            portalRef: _v3
          })
        }) : null
      });
    }),
    _v189 = ({
      onClose: _v0,
      totalAttendees: _v1,
      importRegistrantState: _v2,
      contentRef: _v3,
      onUpsellClick: _v4
    }) => {
      let {
          hasUpsell: _v5,
          hasAttendeeUpsell: _v6
        } = (0, _v19.useEventCapability)(),
        {
          registrationData: _v7
        } = (0, _v21.useEntityStore)(),
        {
          sendUpsellEvent: _v8
        } = (0, _v13.useUpsellAnalytics)(),
        _v9 = (0, _v27.useConfigStore)(_v0 => _v0.entityType),
        {
          selectedProvider: _v10,
          uploadedCsv: _v11,
          selectedList: _v12,
          checkBoxSelected: _v13,
          processingCsv: _v14,
          csvError: _v15,
          stepCount: _v16,
          apiPending: _v17,
          columnsMap: _v18,
          apiError: _v19,
          showModalType: _v20,
          showSuccessScreen: _v21,
          loadingCRM: _v22
        } = _v2,
        _v23 = _v7 && !_v7.isUnlimited,
        _v24 = _v9 === _v14.ENTITY_TYPE.VIDEO,
        _v25 = !_v21 && _v16 === _v26.UPLOAD_CSV_MODAL_STEPS[0] && (_v5 || _v23);
      return (0, _v2.useEffect)(() => {
        _v23 && _v16 === _v26.UPLOAD_CSV_MODAL_STEPS[0] && !_v21 && _v8({
          eventName: _v25.BP_EVENT_NAME.UPSELL_TRIGGER_IMPRESSION,
          pageName: _v25.BP_PAGE_NAME.EVENT_REGISTRATION_PAGE,
          target: null,
          targetPath: null,
          upsellName: "add_registrants",
          interfaceType: "page",
          product: "events",
          feature: "registration",
          location: _v25.BP_LOCATION.MODAL_BOTTOM_BANNER,
          entityType: _v9,
          copy: _v25.BP_COPY.UPGRADE,
          modalName: _v20 === _v26.IMPORT_TYPE.CSV ? _v25.BP_MODAL.REGISTRANT_UPLOAD_CSV_MODAL : _v25.BP_MODAL.REGISTRANT_EMAIL_PROVIDER_MODAL,
          flow: _v20 === _v26.IMPORT_TYPE.CSV ? _v25.BP_FLOW.UPLOAD_CSV : _v25.BP_FLOW.SYNC_FROM_EMAIL
        });
      }, []), (0, _v1.jsx)(_v5.Flex, {
        align: "stretch",
        p: (0, _v7.rem)(12),
        borderTop: "1px solid",
        borderColor: "stroke",
        height: (0, _v7.rem)(80),
        alignItems: "center",
        justifyContent: _v25 ? "space-between" : "flex-end",
        children: _v16 === _v26.UPLOAD_CSV_MODAL_STEPS[0] ? (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v3.Box, {
            pl: (0, _v7.rem)(26),
            children: _v23 ? (0, _v1.jsxs)(_v5.Flex, {
              alignItems: "center",
              children: [(0, _v1.jsx)(_v31.Paragraph, {
                fontWeight: "medium",
                size: "md",
                children: (0, _v11.translate)({
                  singular: "You have {ATTENDEES} available attendees left. Upgrade to add more.",
                  replacements: {
                    ATTENDEES: _v7?.capping - _v1
                  },
                  dictionary: {
                    "fr-FR": {
                      singular: "Vous pouvez encore ajouter {ATTENDEES} participants. Passez au niveau supérieur pour en ajouter davantage."
                    },
                    "ja-JP": {
                      singular: "残り {ATTENDEES}人の参加者を追加できます。さらに追加するにはアップグレードしてください。"
                    },
                    "ko-KR": {
                      singular: "앞으로 {ATTENDEES}명의 참석자를 더 추가할 수 있습니다. 한도를 늘리려면 업그레이드하세요."
                    },
                    "zh-CN": {
                      singular: "您还剩余 {ATTENDEES} 位出席者。升级即可添加更多团队成员。"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v4.Button, {
                variant: "upsell",
                mx: (0, _v7.rem)(10),
                size: "xs",
                onClick: _v4,
                children: _v6 ? _v28.default.Upgrade : _v28.default.Contactus
              })]
            }) : null
          }), (0, _v1.jsxs)(_v5.Flex, {
            children: [(0, _v1.jsx)(_v4.Button, {
              minW: (0, _v7.rem)(120),
              variant: "secondary",
              isDisabled: _v22,
              onClick: () => _v0(),
              _first: {
                mr: (0, _v7.rem)(10)
              },
              children: _v28.default.Cancel
            }), _v20 === _v26.IMPORT_TYPE.CSV && (0, _v1.jsx)(_v4.Button, {
              minW: (0, _v7.rem)(120),
              variant: "primary",
              isLoading: _v14,
              isDisabled: !_v11 || !_v13 || !!_v15 && _v15.length > 0,
              onClick: () => {
                _v3.current?.handleNext();
              },
              children: _v28.default.Next
            }), _v20 === _v26.IMPORT_TYPE.CRM && (0, _v1.jsx)(_v4.Button, {
              minW: (0, _v7.rem)(120),
              variant: "primary",
              isLoading: _v22,
              isDisabled: !(_v13 && _v10 && _v12),
              onClick: () => {
                _v3.current?.handleCRMSubmit();
              },
              children: _v24 ? _v28.default.Sync : _v28.default.Next
            })]
          })]
        }) : _v16 === _v26.UPLOAD_CSV_MODAL_STEPS[1] ? (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v4.Button, {
            minW: (0, _v7.rem)(120),
            variant: "secondary",
            isDisabled: _v17,
            onClick: _v3.current?.handlePrevious,
            _first: {
              mr: (0, _v7.rem)(10)
            },
            children: _v28.default.Back
          }), (0, _v1.jsx)(_v4.Button, {
            minW: (0, _v7.rem)(120),
            variant: "primary",
            isDisabled: !_v18.emailAddress,
            isLoading: _v17,
            onClick: () => _v3.current?.handleCSVSubmit(_v18),
            children: _v19?.length ? _v28.default.Retry : _v28.default.Submit
          })]
        }) : null
      });
    };
  var _v190 = _v0.i(0);
  let _v191 = _v0 => (0, _v1.jsx)(_v129.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      d: "M15 12.5a1 1 0 0 0-.91.6 4 4 0 1 0 .55 6.4 1.002 1.002 0 0 0 .123-1.44.999.999 0 0 0-1.443-.06 2 2 0 0 1-1.32.5 2.001 2.001 0 1 1 1-3.75h-.22a1 1 0 0 0 0 2H15a1 1 0 0 0 1-1V13.5a1 1 0 0 0-1-1Zm3.42-4.78A7 7 0 0 0 5.06 9.61a4 4 0 0 0-.38 7.66c.104.032.212.049.32.05a1.013 1.013 0 1 0 .32-2A2 2 0 0 1 4 13.5a2 2 0 0 1 2-2 1 1 0 0 0 1-1 5 5 0 0 1 9.73-1.61 1 1 0 0 0 .78.67 3 3 0 0 1 1 5.53 1.003 1.003 0 0 0 1 1.74A5 5 0 0 0 22 12.5a5 5 0 0 0-3.58-4.78Z",
      fill: "currentColor"
    })
  });
  var _v192 = _v0.i(0),
    _v193 = _v0.i(0);
  let _v194 = ({
      handleModalClose: _v0
    }) => {
      let {
          eventsUri: _v1
        } = (0, _v21.useEntityStore)(),
        _v2 = (0, _v27.useConfigStore)(_v0 => _v0.entityType),
        _v3 = (0, _v27.useConfigStore)(_v0 => _v0.setSelectedSection),
        {
          onClose: _v4
        } = (0, _v12.useCallbackContext)();
      return (0, _v2.useMemo)(() => {
        if (_v2 === _v14.ENTITY_TYPE.EVENT) {
          let _v0 = (0, _v15.getLastUuidFromUri)(_v1);
          return `${_v26.EVENT_REGISTRATION_URL}/${_v0}/form`;
        }
      }, [_v1, _v2]), (0, _v1.jsxs)(_v5.Flex, {
        flexDirection: "column",
        flex: "1",
        children: [(0, _v1.jsx)(_v3.Box, {
          px: (0, _v7.rem)(150),
          pt: "3xl",
          pb: (0, _v7.rem)(28),
          children: (0, _v1.jsxs)(_v5.Flex, {
            align: "center",
            flexDirection: "column",
            children: [(0, _v1.jsx)(_v191, {
              boxSize: (0, _v7.rem)(60),
              mt: (0, _v7.rem)(20)
            }), (0, _v1.jsx)(_v6.Header, {
              size: "2xl",
              mb: "lg",
              children: _v28.default.DataImport[_v2]
            }), (0, _v1.jsx)(_v31.Paragraph, {
              size: "md",
              mb: "md",
              children: _v28.default.DataImportDesc[_v2]
            })]
          })
        }), (0, _v1.jsxs)(_v3.Box, {
          flex: "auto",
          textAlign: "center",
          backgroundColor: (0, _v58.useColorModeValue)("gray.50", "gray.900"),
          px: (0, _v7.rem)(115),
          pt: "2xl",
          pb: (0, _v7.rem)(60),
          children: [(0, _v1.jsx)(_v6.Header, {
            size: "xs",
            mb: "sm",
            children: _v28.default.DataImportDesc2
          }), (0, _v1.jsxs)(_v5.Flex, {
            pt: "sm",
            children: [(0, _v1.jsx)(_v195, {
              icon: (0, _v1.jsx)(_v193.Registration, {
                boxSize: (0, _v7.rem)(20)
              }),
              header: _v28.default.InviteSpeakers,
              description: _v28.default.InviteSpeakerDesc,
              onClick: () => {
                _v3?.(_v26.SECTION_TYPES.FORM), _v0();
              }
            }), (0, _v1.jsx)(_v195, {
              ml: "sm",
              icon: (0, _v1.jsx)(_v192.EditPencil, {
                boxSize: (0, _v7.rem)(20)
              }),
              header: _v28.default.CreateVideo[_v2] || "",
              description: _v28.default.CreateVideoDesc[_v2] || "",
              onClick: () => {
                _v2 === _v14.ENTITY_TYPE.EVENT ? window.open(_v26.CREATE_VIDEO, "_BLANK") : (_v0(), _v4?.());
              }
            })]
          })]
        })]
      });
    },
    _v195 = ({
      icon: _v0,
      header: _v1,
      description: _v2,
      onClick: _v3,
      ml: _v4
    }) => (0, _v1.jsx)(_v190.Card, {
      onClick: _v3,
      ml: _v4,
      p: "md",
      cursor: "pointer",
      children: (0, _v1.jsxs)(_v5.Flex, {
        children: [(0, _v1.jsx)(_v5.Flex, {
          justifyContent: "center",
          align: "center",
          alignSelf: "center",
          boxSize: (0, _v7.rem)(42),
          borderRadius: "round",
          mr: "md",
          flexShrink: 0,
          backgroundColor: "background-blur",
          children: _v0
        }), (0, _v1.jsxs)(_v3.Box, {
          textAlign: "left",
          children: [(0, _v1.jsx)(_v6.Header, {
            size: "xs",
            mb: "sm",
            children: _v1
          }), (0, _v1.jsx)(_v31.Paragraph, {
            size: "md",
            mb: "sm",
            color: "text-secondary",
            children: _v2
          })]
        })]
      })
    }),
    _v196 = ({
      dispatch: _v0,
      onClose: _v1,
      ..._v2
    }) => {
      let {
          showModalType: _v3,
          providers: _v4,
          showSuccessScreen: _v5,
          stepCount: _v6,
          apiPending: _v7
        } = _v2.importRegistrantState,
        {
          user: _v8
        } = (0, _v21.useEntityStore)(),
        [_v9, _v10] = (0, _v2.useState)(!1),
        _v11 = (0, _v2.useRef)(null),
        _v12 = (0, _v2.useRef)(null),
        _v13 = (0, _v15.getLastIdFromUri)(_v8?.uri),
        [_v14, {
          data: _v15
        }] = _v137(),
        {
          sendUpsellEvent: _v16
        } = (0, _v13.useUpsellAnalytics)(),
        _v17 = async () => {
          await _v14({
            where: {
              userId: _v13
            },
            select: _v112
          });
        },
        {
          hasLiveSubscription: _v18
        } = (0, _v19.useEventCapability)(),
        _v19 = (0, _v27.useConfigStore)(_v0 => _v0.entityType),
        _v20 = _v3 === _v26.IMPORT_TYPE.CSV && _v6 == _v26.UPLOAD_CSV_MODAL_STEPS[1] && _v7;
      return (0, _v2.useEffect)(() => {
        _v0({
          type: _v24.ACTION_TYPE.SET_LOADING_PROVIDER,
          payload: !1
        }), _v0({
          type: _v24.ACTION_TYPE.CONNECT_CLICK,
          payload: !1
        }), _v15 && _v0({
          type: _v24.ACTION_TYPE.SET_PROVIDERS,
          payload: (0, _v101.deepCamelCase)(_v15.data)
        });
      }, [_v15, _v0]), (0, _v2.useEffect)(() => {
        _v3 === _v26.IMPORT_TYPE.CRM && 0 === _v4.length && (_v0({
          type: _v24.ACTION_TYPE.SET_LOADING_PROVIDER,
          payload: !0
        }), _v17());
      }, [_v14, _v13, _v4, _v3]), (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsxs)(_v5.Flex, {
          flexDirection: "column",
          minH: (0, _v7.rem)(570),
          borderRadius: "xs",
          clipPath: "inset(0 round 16px)",
          children: [(0, _v1.jsx)(_v79.ModalCloseButton, {
            isDisabled: _v20
          }), _v5 ? (0, _v1.jsx)(_v194, {
            type: _v3,
            handleModalClose: _v1
          }) : (0, _v1.jsxs)(_v1.Fragment, {
            children: [_v3 === _v26.IMPORT_TYPE.CRM && (0, _v1.jsx)(_v169, {
              ..._v2,
              dispatch: _v0,
              refreshProvider: _v17,
              ref: _v12
            }), _v3 === _v26.IMPORT_TYPE.CSV && (0, _v1.jsx)(_v188, {
              ..._v2,
              dispatch: _v0,
              ref: _v11
            }), _v5 ? null : (0, _v1.jsx)(_v189, {
              ..._v2,
              onClose: _v1,
              onUpsellClick: () => {
                _v10(!0), _v16({
                  pageName: _v25.BP_PAGE_NAME.EVENT_REGISTRATION_PAGE,
                  target: _v25.BP_TARGET.UPGRADE_PAGE,
                  targetPath: window.location.pathname,
                  upsellName: "add_registrants",
                  interfaceType: "page",
                  product: "events",
                  feature: "registration",
                  location: _v25.BP_LOCATION.MODAL_BOTTOM_BANNER,
                  entityType: "events",
                  copy: _v25.BP_COPY.UPGRADE,
                  modalName: _v3 === _v26.IMPORT_TYPE.CSV ? _v25.BP_MODAL.REGISTRANT_UPLOAD_CSV_MODAL : _v25.BP_MODAL.REGISTRANT_EMAIL_PROVIDER_MODAL,
                  flow: _v3 === _v26.IMPORT_TYPE.CSV ? _v25.BP_FLOW.UPLOAD_CSV : _v25.BP_FLOW.SYNC_FROM_EMAIL
                });
              },
              dispatch: _v0,
              contentRef: _v3 === _v26.IMPORT_TYPE.CSV ? _v11 : _v12
            })]
          })]
        }), _v9 && (0, _v1.jsx)(_v138.UpsellModal, {
          hasLiveSubscription: _v18,
          hideModal: () => _v10(!1),
          entityType: _v19
        })]
      });
    };
  async function _v197({
    baseUrl: _v0,
    select: _v1,
    where: {
      uploadId: _v2
    },
    ..._v3
  }) {
    return (0, _v100.measureLatency)("getLeadCaptureRegistrantsUpload", "GET", async () => {
      let _v0 = await fetch(`${_v0}/lead_capture/registrants/uploads/${_v2}?fields=${_v1.map(_v101.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "GET"
      });
      if (!_v0.ok) throw new _v101.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v101.deepCamelCase)(_v1);
    });
  }
  async function _v198({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      uploadId: _v3
    },
    ..._v4
  }) {
    return (0, _v100.measureLatency)("patchLeadCaptureRegistrantsUpload", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/lead_capture/registrants/uploads/${_v3}?fields=${_v1.map(_v101.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "PATCH",
        body: JSON.stringify((0, _v101.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v101.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v101.deepCamelCase)(_v1);
    });
  }
  function _v199() {
    let {
        mutate: _v0
      } = (0, _v106.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v108.useGctlConfig)(),
      [_v5, _v6] = (0, _v99.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/lead_capture/registrants/uploads/${_v0.where.uploadId}${(0, _v99.serializeQuery)(_v0)}`, _v197({
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
  function _v200() {
    let {
        mutate: _v0
      } = (0, _v106.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v108.useGctlConfig)(),
      [_v5, _v6] = (0, _v99.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/lead_capture/registrants/uploads/${_v0.where.uploadId}${(0, _v99.serializeQuery)(_v0)}`, _v198({
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
  _v0.s(["ImportRegistrant", 0, ({
    dispatch: _v0,
    importRegistrantState: _v1,
    ..._v2
  }) => {
    let {
        newUpload: _v3,
        uploadCSVBanners: _v4,
        showModalType: _v5
      } = _v1,
      _v6 = (0, _v2.useRef)(null),
      _v7 = () => {
        if (_v3) {
          if (_v4) {
            let _v0 = [..._v4];
            _v4.length === _v26.MAX_IMPORT_STATUS_BANNERS && _v0.pop(), _v0({
              type: _v24.ACTION_TYPE.SET_CSV_BANNERS,
              payload: [_v3, ..._v0]
            });
          } else _v0({
            type: _v24.ACTION_TYPE.SET_CSV_BANNERS,
            payload: [_v3]
          });
          _v0({
            type: _v24.ACTION_TYPE.NEW_UPLOAD,
            payload: null
          });
        }
        _v0({
          type: _v24.ACTION_TYPE.CLOSE_MODAL
        });
      };
    return (0, _v1.jsxs)(_v53.Modal, {
      isOpen: !!_v5,
      onClose: _v7,
      children: [(0, _v1.jsx)(_v55.ModalOverlay, {
        zIndex: "modal"
      }), (0, _v1.jsxs)(_v54.ModalContent, {
        width: "90vw",
        maxWidth: (0, _v7.rem)(898),
        maxHeight: "80vh",
        color: "text-primary",
        children: [(0, _v1.jsx)(_v3.Box, {
          ref: _v6
        }), (0, _v1.jsx)(_v196, {
          ..._v2,
          importRegistrantState: _v1,
          dispatch: _v0,
          portalRef: _v6,
          onClose: _v7
        })]
      })]
    });
  }], 0), "true" === _v98.default.env.STORYBOOK && (0, _v99.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v108.useGctlConfig)();
    return (0, _v105.default)(_v2 ? `/lead_capture/registrants/uploads/${_v2.where.uploadId}${(0, _v99.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v197({
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
    endpoint: "/lead_capture/registrants/uploads/:uploadId",
    method: "GET"
  }), "true" === _v98.default.env.STORYBOOK && (0, _v99.assignMswData)(_v199, {
    endpoint: "/lead_capture/registrants/uploads/:uploadId",
    method: "GET"
  }), "true" === _v98.default.env.STORYBOOK && (0, _v99.assignMswData)(_v200, {
    endpoint: "/lead_capture/registrants/uploads/:uploadId",
    method: "PATCH"
  }), _v0.s(["useGetLeadCaptureRegistrantsUploadLazy", 0, _v199, "usePatchLeadCaptureRegistrantsUpload", 0, _v200], 0);
}