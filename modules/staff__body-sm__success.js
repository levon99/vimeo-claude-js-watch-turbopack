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
    _v32 = _v0.i(0);
  let _v33 = _v0 => {
      let _v1 = (0, _v3.useMemo)(_v9.default, []);
      return (0, _v1.jsx)(_v32.Badge, {
        variant: "staff",
        size: "sm",
        ..._v0,
        marginRight: (0, _v18.rem)(5),
        children: (0, _v1.jsx)(_v30.ShrinkableText, {
          variant: "body-sm",
          children: _v1.DefaultPolicy
        })
      });
    },
    _v34 = () => {
      let _v0 = (0, _v3.useMemo)(_v9.default, []);
      return (0, _v1.jsx)(_v32.Badge, {
        variant: "success",
        size: "sm",
        marginRight: (0, _v18.rem)(5),
        children: (0, _v1.jsx)(_v30.ShrinkableText, {
          variant: "body-sm",
          children: _v0.HasExtension
        })
      });
    },
    _v35 = ({
      policy: _v0,
      handlePolicyToggle: _v1,
      openDRPModal: _v2,
      editPolicy: _v3
    }) => {
      let _v4 = (0, _v3.useMemo)(_v9.default, []);
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v29.TeamSettingsTableCell, {
          overflow: "hidden",
          children: (0, _v1.jsxs)(_v5.Flex, {
            flexFlow: "row",
            height: "100%",
            justifyContent: "left",
            overflow: "hidden",
            width: "100%",
            children: [_v0.isDefault && (0, _v1.jsx)(_v33, {}), _v0.hasExtension && (0, _v1.jsx)(_v34, {}), (0, _v1.jsx)(_v30.ShrinkableText, {
              variant: "body-md",
              width: "100%",
              children: _v0.title
            })]
          })
        }), (0, _v1.jsx)(_v29.TeamSettingsTableCell, {
          overflow: "hidden",
          children: (0, _v1.jsx)(_v30.ShrinkableText, {
            variant: "body-md",
            children: (0, _v10.translateDuration)((0, _v10.durationUnits)(_v0.duration))
          })
        }), (0, _v1.jsx)(_v29.TeamSettingsTableCell, {
          overflow: "hidden",
          children: (0, _v1.jsx)(_v30.ShrinkableText, {
            variant: "body-md",
            children: (0, _v10.formatDate)(_v0.createdTime)
          })
        }), (0, _v1.jsx)(_v29.TeamSettingsTableCell, {
          children: (0, _v1.jsx)(_v13.Box, {
            minWidth: "lg",
            children: (0, _v1.jsx)(_v27.Switch, {
              onChange: () => _v1(_v0),
              isChecked: _v0.isActive
            })
          })
        }), (0, _v1.jsx)(_v29.TeamSettingsTableCell, {
          children: (0, _v1.jsx)(_v4.Button, {
            className: "policy-details-btn",
            variant: "tertiary",
            onClick: () => _v2(_v0, "details"),
            children: _v4.Details
          })
        }), (0, _v1.jsx)(_v29.TeamSettingsTableCell, {
          children: (0, _v1.jsx)(_v31.ThreeDotsButton, {
            placement: "bottom-end",
            items: [{
              content: (0, _v1.jsx)(_v28.Text, {
                variant: "body-xl",
                fontSize: "header-xs",
                className: "policy-edit-btn",
                children: _v4.Edit
              }),
              callback: () => _v3(_v0.uri),
              idKey: 1,
              type: "button"
            }, {
              type: "divider",
              idKey: 2
            }, {
              content: (0, _v1.jsx)(_v28.Text, {
                variant: "body-xl",
                fontSize: "header-xs",
                color: "status-destructive-primary",
                className: "policy-remove-btn",
                children: _v4.DeletePolicy
              }),
              callback: () => {
                _v2(_v0, "delete");
              },
              idKey: 3,
              type: "button"
            }]
          })
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
  _v0.i(0);
  var _v44 = _v0.i(0);
  let _v45 = ({
    policy: _v0,
    onModalClose: _v1,
    userId: _v2,
    editPolicy: _v3
  }) => {
    let {
        dataRetentionPolicyFolders: _v4,
        dataRetentionPolicyGroups: _v5,
        appliedToLoading: _v6
      } = (({
        policy: _v0,
        userId: _v1
      }) => {
        let [_v2, _v3] = (0, _v42.useGetTeamDataRetentionPolicyFoldersLazy)(),
          _v4 = _v3?.data,
          [_v5, _v6] = (0, _v43.useGetTeamDataRetentionPolicyTeamGroupsLazy)(),
          _v7 = _v6?.data;
        return (0, _v3.useEffect)(() => {
          if (_v0 && _v1) {
            let _v0 = (0, _v10.getIdFromUri)(_v0.uri);
            null !== _v0 && (_v2({
              select: ["name", "uri"],
              where: {
                userId: _v1,
                policyId: _v0
              }
            }), _v5({
              select: ["name", "uri"],
              where: {
                userId: _v1,
                policyId: _v0
              }
            }));
          }
        }, [_v2, _v5, _v0, _v1]), {
          dataRetentionPolicyFolders: _v4?.data,
          dataRetentionPolicyGroups: _v7?.data,
          appliedToLoading: _v3.loading || _v6.loading
        };
      })({
        policy: _v0,
        userId: _v2
      }),
      _v7 = (0, _v3.useMemo)(_v9.default, []);
    if (!_v0) return null;
    let _v8 = (_v4?.length ?? 0) + (_v5?.length ?? 0) > 1,
      _v9 = _v4 && !_v4.length && _v5 && !_v5.length,
      _v10 = _v0 && !_v0.isDefault && !_v0.description?.length && _v9;
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v38.ModalHeader, {
        children: [(0, _v1.jsx)(_v36.Header, {
          variant: "heading-md",
          marginRight: "300",
          size: "xl",
          children: _v0.title
        }), (0, _v1.jsx)(_v40.ModalCloseButton, {
          onClick: _v1
        })]
      }), (0, _v1.jsxs)(_v39.ModalBody, {
        paddingBottom: "300",
        paddingTop: "0",
        children: [_v0.isDefault && (0, _v1.jsx)(_v33, {
          marginBottom: _v0.description?.length ? "75" : 0
        }), (0, _v1.jsx)(_v17.Paragraph, {
          size: "md",
          children: _v0.description
        }), !_v0.isDefault && !_v10 && (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsxs)(_v28.Text, {
            marginTop: _v0.description?.length ? "200" : "75",
            variant: "heading-xs",
            children: [_v7.AppliedTo, ":"]
          }), (0, _v1.jsx)(_v13.Box, {
            overflowY: "auto",
            maxHeight: (0, _v18.rem)(196),
            paddingX: _v8 || _v6 ? "200" : 0,
            paddingTop: _v8 || _v6 ? "75" : 0,
            paddingBottom: (0, _v18.rem)(2),
            marginTop: "50",
            sx: {
              "li:not(:first-child)": {
                marginTop: "50"
              }
            },
            children: _v6 ? (0, _v1.jsx)(_v44.default, {}) : (0, _v1.jsx)(_v1.Fragment, {
              children: _v9 ? (0, _v1.jsx)(_v17.Paragraph, {
                variant: "body-md",
                color: "text-secondary",
                children: _v7.NoPolicyLocations
              }) : (0, _v1.jsxs)(_v13.Box, {
                as: "ul",
                children: [_v5?.map(_v0 => {
                  let _v1 = (0, _v10.getIdFromUri)(_v0.uri);
                  return (0, _v1.jsx)(_v13.Box, {
                    as: "li",
                    children: (0, _v1.jsx)(_v28.Text, {
                      variant: "body-md",
                      children: _v1 ? (0, _v1.jsx)(_v6.Link, {
                        href: `/manage/team/groups?show_group=${_v1}_${_v0.name}`,
                        target: "_blank",
                        fontSize: "inherit",
                        color: "inherit",
                        children: _v0.name
                      }, _v0.uri) : _v0.name
                    })
                  }, _v0.uri);
                }), _v4?.map(_v0 => {
                  let _v1 = (0, _v10.getIdFromUri)(_v0.uri);
                  return (0, _v1.jsx)(_v13.Box, {
                    as: "li",
                    children: (0, _v1.jsx)(_v28.Text, {
                      variant: "body-md",
                      children: _v1 ? (0, _v1.jsx)(_v6.Link, {
                        href: `/manage/folders/${_v1}`,
                        target: "_blank",
                        fontSize: "inherit",
                        color: "inherit",
                        children: _v0.name
                      }, _v0.uri) : _v0.name
                    })
                  }, _v0.uri);
                })]
              })
            })
          }), _v0.hasExtension && (0, _v1.jsx)(_v11.Alert, {
            size: "sm",
            status: "info",
            marginTop: "400",
            children: (0, _v1.jsx)(_v12.AlertDescription, {
              marginTop: "50",
              children: _v7.HasExtensionInfo
            })
          })]
        }), _v10 && (0, _v1.jsxs)(_v37.Center, {
          paddingTop: "500",
          paddingBottom: "300",
          flexDirection: "column",
          children: [(0, _v1.jsx)(_v41.FileSearchAlt, {
            width: (0, _v18.rem)(32),
            height: (0, _v18.rem)(32),
            marginBottom: "50"
          }), (0, _v1.jsx)(_v28.Text, {
            variant: "heading-xs",
            marginBottom: "75",
            children: _v7.NoPolicyInformation
          }), (0, _v1.jsx)(_v4.Button, {
            variant: "secondary",
            size: "xs",
            onClick: () => {
              _v1(), _v3(_v0.uri);
            },
            children: _v7.EditPolicy
          })]
        })]
      })]
    });
  };
  var _v46 = _v0.i(0);
  let _v47 = ({
    isModalOpen: _v0,
    onModalClick: _v1,
    onModalClose: _v2,
    policyRemoveLoading: _v3,
    policy: _v4,
    accountHasDefaultPolicy: _v5
  }) => {
    let _v6 = (0, _v3.useMemo)(_v9.default, []);
    if (!_v4) return null;
    let _v7 = !_v4.isDefault && _v5 ? _v6.DeleteWarningMessageType1 : _v6.DeleteWarningMessageType2;
    return (0, _v1.jsxs)(_v14.Modal, {
      size: "md",
      isOpen: _v0,
      onClose: () => void 0,
      children: [(0, _v1.jsx)(_v16.ModalOverlay, {}), (0, _v1.jsxs)(_v15.ModalContent, {
        children: [(0, _v1.jsxs)(_v38.ModalHeader, {
          position: "relative",
          children: [(0, _v1.jsx)(_v36.Header, {
            size: "md",
            children: _v6.DeletePolicy
          }), (0, _v1.jsx)(_v40.ModalCloseButton, {
            onClick: () => _v2()
          })]
        }), (0, _v1.jsx)(_v39.ModalBody, {
          children: (0, _v1.jsx)(_v17.Paragraph, {
            size: "md",
            children: _v7
          })
        }), (0, _v1.jsxs)(_v46.ModalFooter, {
          children: [(0, _v1.jsx)(_v4.Button, {
            variant: "secondary",
            onClick: () => _v2(),
            children: _v6.Cancel
          }), (0, _v1.jsx)(_v4.Button, {
            isLoading: _v3,
            variant: "destructive",
            onClick: () => _v1(),
            children: _v6.Delete
          })]
        })]
      })]
    });
  };
  var _v48 = _v0.i(0),
    _v49 = _v0.i(0);
  let _v50 = (_v0, _v1, _v2, _v3) => (0, _v1.jsxs)(_v5.Flex, {
      alignItems: "center",
      gap: "50",
      onClick: () => _v3(_v1),
      cursor: "pointer",
      children: [_v0, _v2.type === _v1 && ("asc" === _v2.direction ? (0, _v1.jsx)(_v49.ChevronUpSmall, {}) : (0, _v1.jsx)(_v48.ChevronDownSmall, {}))]
    }),
    _v51 = ({
      userId: _v0,
      toolBar: _v1,
      workspaceUuid: _v2
    }) => {
      let _v3 = (0, _v19.useToast)(),
        _v4 = (0, _v2.useRouter)(),
        _v5 = (0, _v3.useMemo)(_v9.default, []),
        {
          loading: _v6,
          dataRetentionList: _v7,
          setDataRetentionList: _v8,
          sort: _v9,
          toggleSortDirection: _v10,
          listToRenderLength: _v11,
          shouldRenderPagination: _v12,
          pagination: _v13,
          fetchDataRetentionPolices: _v14,
          accountHasDefaultDRP: _v15,
          refetchDefaultDRP: _v16
        } = (({
          userId: _v0
        }) => {
          let [_v1, _v2] = (0, _v26.useGetTeamDataRetentionPoliciesLazy)(),
            [_v3, _v4] = (0, _v3.useState)(1),
            [_v5, _v6] = (0, _v3.useState)(),
            [_v7, _v8] = (0, _v3.useState)({
              type: void 0,
              direction: void 0
            }),
            _v9 = _v2?.data,
            _v10 = (0, _v3.useCallback)(_v0 => {
              "title" !== _v0 && "duration" !== _v0 && "created_time" !== _v0 || (_v8({
                type: _v0,
                direction: _v7.type === _v0 && "asc" === _v7.direction ? "desc" : "asc"
              }), _v4(1));
            }, [_v7]);
          (0, _v3.useEffect)(() => {
            let _v0 = _v9?.data;
            _v0?.length && _v6(_v0);
          }, [_v9?.data]);
          let _v11 = (0, _v3.useCallback)(() => {
            let {
                type: _v0,
                direction: _v1
              } = _v7,
              _v2 = {
                ...(_v0 && _v1 ? {
                  sort: _v0,
                  direction: _v1
                } : {}),
                page: _v3,
                perPage: _v10.DATA_RETENTION_PER_PAGE
              };
            _v0 && _v1({
              select: ["title", "uri", "description", "isActive", "isDefault", "createdTime", "duration", "hasExtension"],
              where: {
                userId: _v0
              },
              query: _v2
            });
          }, [_v1, _v0, _v3, _v7]);
          (0, _v3.useEffect)(_v11, [_v3, _v11]);
          let {
              data: _v12,
              mutate: _v13
            } = (0, _v26.useGetTeamDataRetentionPolicies)(() => _v0 ? {
              select: ["uri"],
              where: {
                userId: _v0
              },
              query: {
                filter: "default_only"
              }
            } : null, {
              revalidateOnFocus: !1
            }),
            _v14 = _v9 ? Math.ceil(_v9.total / _v10.DATA_RETENTION_PER_PAGE) : 0,
            _v15 = _v9?.data?.length || 0,
            _v16 = _v9?.page || 0,
            _v17 = _v15 >= _v10.DATA_RETENTION_PER_PAGE || _v16 > 1;
          return {
            loading: _v2.loading,
            dataRetentionList: _v5,
            setDataRetentionList: _v6,
            setCurrentPage: _v4,
            sort: _v7,
            setSort: _v8,
            toggleSortDirection: _v10,
            listToRenderLength: _v15,
            shouldRenderPagination: _v17,
            pagination: {
              totalPages: _v14,
              page: _v16,
              next: _v9?.paging?.next || "",
              previous: _v9?.paging?.previous || "",
              goToPageNumber: _v4
            },
            fetchDataRetentionPolices: _v11,
            accountHasDefaultDRP: !!_v12?.data.length,
            refetchDefaultDRP: _v13
          };
        })({
          userId: _v0
        }),
        {
          confirmPolicyToggle: _v17,
          handlePolicyToggle: _v18,
          isToggleModalOpen: _v19,
          setIsToggleModalOpen: _v20,
          isErrorNoticeShown: _v21
        } = (({
          setDataRetentionList: _v0,
          userId: _v1,
          dataRetentionList: _v2,
          showNotification: _v3
        }) => {
          let _v4 = (0, _v3.useRef)(0),
            [_v5, {
              loading: _v6,
              error: _v7,
              callCount: _v8
            }] = (0, _v23.usePatchTeamDataRetentionPolicy)(),
            [_v9, _v10] = (0, _v3.useState)(!1),
            [_v11, _v12] = (0, _v3.useState)(null),
            [_v13, _v14] = (0, _v3.useState)(!1),
            _v15 = _v0 => {
              _v0(_v2?.map(_v0 => (_v0.uri === _v0?.uri && (_v0.isActive = !_v0.isActive), _v0)));
            };
          (0, _v3.useEffect)(() => {
            _v7 && (_v10(!0), _v15(_v11));
          }, [_v7]), (0, _v3.useEffect)(() => {
            !(_v4.current < _v8) || _v6 || _v7 || (_v3(), _v4.current = _v8);
          }, [_v8, _v6, _v7, _v3]);
          let _v16 = _v0 => {
            if (!_v1 || !_v0) return;
            let _v1 = (0, _v10.getIdFromUri)(_v0.uri);
            null === _v1 ? _v10(!0) : (_v15(_v0), _v5({
              where: {
                userId: _v1,
                policyId: _v1
              },
              variables: {
                isActive: _v0.isActive
              }
            }));
          };
          return {
            confirmPolicyToggle: () => {
              _v16(_v11), _v14(!1);
            },
            handlePolicyToggle: _v0 => {
              _v12(_v0), _v0.isActive ? _v14(!0) : _v16(_v0);
            },
            isToggleModalOpen: _v13,
            setIsToggleModalOpen: _v14,
            isErrorNoticeShown: _v9,
            patchDataRetentionPolicyStateLoading: _v6
          };
        })({
          setDataRetentionList: _v8,
          userId: _v0,
          dataRetentionList: _v7,
          showNotification: (0, _v3.useCallback)(() => {
            _v3({
              duration: _v21.NOTIFICATION_DURATION,
              title: _v5.Saved
            });
          }, [_v3, _v5.Saved])
        }),
        {
          openModalType: _v22,
          modalPolicy: _v23,
          closeDRPModal: _v24,
          openDRPModal: _v25
        } = (() => {
          let [_v0, _v1] = (0, _v3.useState)(null),
            [_v2, _v3] = (0, _v3.useState)(null);
          return {
            openModalType: _v0,
            modalPolicy: _v2,
            closeDRPModal: () => {
              _v1(null);
            },
            openDRPModal: (_v0, _v1) => {
              _v3(_v0), _v1(_v1);
            }
          };
        })(),
        {
          onDelete: _v26,
          deleteLoading: _v27
        } = (({
          userId: _v0,
          policy: _v1,
          onDeleteSuccess: _v2
        }) => {
          let [_v3, _v4] = (0, _v23.useDeleteTeamDataRetentionPolicy)(),
            _v5 = (0, _v3.useRef)(!1),
            _v6 = (0, _v19.useToast)();
          return (0, _v3.useEffect)(() => {
            _v5.current && !_v4.loading && (_v4.error ? _v6({
              title: _v25.T.SomethingWentWrong,
              duration: 0
            }) : _v2(), _v5.current = !1);
          }, [_v4.error, _v4.loading, _v2, _v6]), {
            onDelete: () => {
              if (_v1) {
                let _v0 = (0, _v24.policyUriToId)(_v1.uri);
                _v0 && (_v0 && _v3({
                  where: {
                    userId: _v0,
                    policyId: _v0
                  }
                }), _v5.current = !0);
              }
            },
            deleteLoading: _v4?.loading
          };
        })({
          userId: _v0,
          policy: _v23,
          onDeleteSuccess: () => {
            _v24(), _v14(), _v16();
          }
        }),
        _v28 = (0, _v3.useCallback)(_v0 => {
          let _v1 = (0, _v10.getIdFromUri)(_v0);
          null === _v1 ? _v3({
            duration: _v21.NOTIFICATION_DURATION,
            title: _v5.SomethingWentWrong,
            status: "error"
          }) : _v4.push(`${_v2 ? _v10.DRP_PATH_WORKSPACE : _v10.DRP_PATH_TEAM}/${_v1}`);
        }, [_v4, _v3, _v5, _v2]),
        _v29 = [{
          title: _v50(_v5.PolicyName, "title", _v9, _v10),
          width: "40%"
        }, {
          title: _v50(_v5.Duration, "duration", _v9, _v10),
          width: "20%"
        }, {
          title: _v50(_v5.CreatedOn, "created_time", _v9, _v10),
          width: "20%"
        }, {
          title: _v5.Status,
          width: (0, _v18.rem)(80)
        }, {
          title: "",
          width: (0, _v18.rem)(112)
        }, {
          title: "",
          width: (0, _v18.rem)(72)
        }],
        _v30 = _v11 > 0 ? null : (0, _v1.jsx)(_v5.Flex, {
          flexDirection: "column",
          alignItems: "center",
          children: (0, _v1.jsx)(_v17.Paragraph, {
            children: _v5.NoPoliciesCreated
          })
        });
      return (0, _v1.jsxs)(_v13.Box, {
        children: [_v21 && (0, _v1.jsx)(_v11.Alert, {
          marginBottom: "200",
          status: "error",
          children: (0, _v1.jsx)(_v12.AlertDescription, {
            marginTop: "50",
            children: _v5.SomethingWentWrong
          })
        }), (0, _v1.jsxs)(_v14.Modal, {
          size: "md",
          isOpen: _v19,
          onClose: () => void 0,
          children: [(0, _v1.jsx)(_v16.ModalOverlay, {}), (0, _v1.jsx)(_v15.ModalContent, {
            children: (({
              setIsToggleModalOpen: _v0,
              confirmPolicyToggle: _v1
            }) => {
              let _v2 = (0, _v3.useMemo)(_v9.default, []);
              return (0, _v1.jsxs)(_v1.Fragment, {
                children: [(0, _v1.jsxs)(_v38.ModalHeader, {
                  position: "relative",
                  children: [(0, _v1.jsx)(_v36.Header, {
                    size: "md",
                    children: _v2.PolicyDisableModalHeader
                  }), (0, _v1.jsx)(_v40.ModalCloseButton, {
                    onClick: () => _v0(!1)
                  })]
                }), (0, _v1.jsx)(_v39.ModalBody, {
                  children: (0, _v1.jsx)(_v17.Paragraph, {
                    size: "md",
                    children: _v2.PolicyDisableModalDescription
                  })
                }), (0, _v1.jsxs)(_v46.ModalFooter, {
                  children: [(0, _v1.jsx)(_v4.Button, {
                    variant: "secondary",
                    onClick: () => _v0(!1),
                    children: _v2.Cancel
                  }), (0, _v1.jsx)(_v4.Button, {
                    variant: "destructive",
                    onClick: _v1,
                    children: _v2.Disable
                  })]
                })]
              });
            })({
              confirmPolicyToggle: _v17,
              setIsToggleModalOpen: _v20
            })
          })]
        }), (0, _v1.jsxs)(_v14.Modal, {
          size: "md",
          isOpen: "details" === _v22,
          onClose: () => void 0,
          children: [(0, _v1.jsx)(_v16.ModalOverlay, {}), (0, _v1.jsx)(_v15.ModalContent, {
            width: "100%",
            maxWidth: (0, _v18.rem)(480),
            children: (0, _v1.jsx)(_v45, {
              userId: _v0,
              policy: _v23,
              onModalClose: _v24,
              editPolicy: _v28
            })
          })]
        }), (0, _v1.jsx)(_v47, {
          isModalOpen: "delete" === _v22,
          onModalClick: _v26,
          onModalClose: _v24,
          policyRemoveLoading: _v27,
          policy: _v23,
          accountHasDefaultPolicy: _v15
        }), (0, _v1.jsx)(_v22.TeamSettingsTable, {
          columns: _v29,
          ...(_v12 ? {
            pagination: _v13
          } : {}),
          rows: _v7,
          renderRow: ({
            row: _v0,
            index: _v1
          }) => (0, _v1.jsx)(_v35, {
            policy: _v0,
            handlePolicyToggle: _v18,
            openDRPModal: _v25,
            editPolicy: _v28
          }, _v1),
          toolBar: _v1,
          placeholder: _v6 ? (0, _v1.jsx)(_v20.LoadSpinner, {}) : _v30
        })]
      });
    };
  var _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0);
  let _v57 = ({
      isOpen: _v0,
      onClose: _v1,
      currentDays: _v2,
      userId: _v3,
      workspaceUuid: _v4
    }) => {
      let _v5 = (0, _v3.useMemo)(_v9.default, []),
        _v6 = (0, _v19.useToast)(),
        [_v7, _v8] = (0, _v3.useState)(_v2),
        [_v9, _v10] = (0, _v3.useState)(null),
        {
          onUpdateSetting: _v11,
          teamSettingsUpdateLoading: _v12
        } = (0, _v56.useUpdateTeamSettings)({
          userId: _v3,
          workspaceUuid: _v4
        }),
        _v13 = _v0 => {
          if ("" === _v0) return _v5.DaysMustBeBetweenSevenAndNinety;
          let _v1 = "string" == typeof _v0 ? parseInt(_v0, 10) : _v0;
          return Number.isNaN(_v1) || _v1 < 7 || _v1 > 90 ? _v5.DaysMustBeBetweenSevenAndNinety : null;
        };
      (0, _v3.useEffect)(() => {
        _v0 && (_v8(_v2), _v10(null));
      }, [_v0, _v2]);
      let _v14 = async () => {
          let _v0 = _v13(_v7);
          if (_v0) return void _v10(_v0);
          try {
            await _v11({
              dataRetentionNotificationDays: Number(_v7)
            }), _v6({
              duration: _v21.NOTIFICATION_DURATION,
              title: _v5.Saved
            }), _v1();
          } catch (_v0) {
            _v6({
              duration: _v21.NOTIFICATION_DURATION,
              title: _v5.SomethingWentWrong,
              status: "error"
            });
          }
        },
        _v15 = !!_v9;
      return (0, _v1.jsxs)(_v14.Modal, {
        isOpen: _v0,
        onClose: _v1,
        size: "md",
        children: [(0, _v1.jsx)(_v16.ModalOverlay, {}), (0, _v1.jsxs)(_v15.ModalContent, {
          children: [(0, _v1.jsx)(_v38.ModalHeader, {
            children: _v5.EditDeletionWarningPeriod
          }), (0, _v1.jsxs)(_v39.ModalBody, {
            children: [(0, _v1.jsx)(_v13.Box, {
              marginBottom: "100",
              children: (0, _v1.jsx)(_v28.Text, {
                color: "text-tertiary",
                variant: "body-md",
                children: _v5.DeletionWarningPeriodDescription
              })
            }), (0, _v1.jsxs)(_v53.FormControl, {
              isInvalid: _v15,
              children: [(0, _v1.jsxs)(_v5.Flex, {
                alignItems: "center",
                gap: "100",
                children: [(0, _v1.jsx)(_v28.Text, {
                  variant: "heading-xs",
                  children: _v5.SendEmail
                }), (0, _v1.jsxs)(_v55.NumberInput, {
                  value: _v7,
                  onChange: (_v0, _v1) => {
                    if ("" === _v0 || isNaN(_v1)) {
                      _v8(""), _v10(_v13(""));
                      return;
                    }
                    _v8(_v1), _v10(_v13(_v1));
                  },
                  min: 7,
                  max: 90,
                  step: 1,
                  width: (0, _v18.rem)(80),
                  isInvalid: _v15,
                  keepWithinRange: !1,
                  clampValueOnBlur: !1,
                  children: [(0, _v1.jsx)(_v55.NumberInputField, {
                    textAlign: "left"
                  }), (0, _v1.jsxs)(_v55.NumberInputStepper, {
                    children: [(0, _v1.jsx)(_v55.NumberIncrementStepper, {}), (0, _v1.jsx)(_v55.NumberDecrementStepper, {})]
                  })]
                }), (0, _v1.jsx)(_v28.Text, {
                  variant: "heading-xs",
                  children: _v5.DaysBeforeDeletion
                })]
              }), (0, _v1.jsx)(_v13.Box, {
                minHeight: (0, _v18.rem)(32),
                marginTop: "50",
                children: _v15 && (0, _v1.jsx)(_v54.FormErrorMessage, {
                  children: _v9
                })
              })]
            })]
          }), (0, _v1.jsx)(_v46.ModalFooter, {
            children: (0, _v1.jsxs)(_v5.Flex, {
              gap: "100",
              justifyContent: "flex-end",
              children: [(0, _v1.jsx)(_v4.Button, {
                variant: "tertiary",
                onClick: _v1,
                disabled: _v12,
                children: _v5.Cancel
              }), (0, _v1.jsx)(_v4.Button, {
                variant: "primary",
                onClick: _v14,
                isLoading: _v12,
                disabled: _v12 || !!_v9 || "" === _v7,
                children: _v5.Save
              })]
            })
          })]
        })]
      });
    },
    _v58 = ({
      userId: _v0,
      workspaceUuid: _v1
    }) => {
      let _v2 = (0, _v3.useMemo)(_v9.default, []),
        [_v3, _v4] = (0, _v3.useState)(!1),
        {
          data: _v5,
          isLoading: _v6,
          mutate: _v7
        } = (0, _v52.useGetTeamSettingsWithMutate)({
          userId: _v1 ? void 0 : _v0,
          workspaceUuid: _v1,
          settings: ["dataRetentionNotificationDays"]
        }),
        _v8 = _v5?.dataRetentionNotificationDays;
      return _v6 || null == _v8 ? (0, _v1.jsx)(_v5.Flex, {}) : (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsxs)(_v5.Flex, {
          alignItems: "center",
          width: "100%",
          gap: "100",
          children: [(0, _v1.jsx)(_v28.Text, {
            variant: "heading-xs",
            children: _v2.DeletionWarningPeriod
          }), (0, _v1.jsx)(_v4.Button, {
            variant: "secondary",
            size: "sm",
            onClick: () => _v4(!0),
            disabled: _v6,
            children: _v2.DaysFormat(_v8)
          })]
        }), (0, _v1.jsx)(_v57, {
          isOpen: _v3,
          onClose: () => {
            _v4(!1), _v7();
          },
          currentDays: _v8,
          userId: _v1 ? void 0 : _v0,
          workspaceUuid: _v1
        })]
      });
    };
  _v0.s(["default", 0, ({
    userId: _v0,
    workspaceUuid: _v1
  } = {}) => {
    let _v2 = (0, _v2.useRouter)(),
      _v3 = (0, _v3.useMemo)(_v9.default, []);
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v8.SettingsPageContentHeader, {
        title: _v3.DataRetention,
        description: (0, _v7.translate)({
          singular: "Create data retention policies to automatically delete videos based on the policy duration after the video has been uploaded. For more information about data retention, {Link1}click here{/Link1}, and to learn how to set up policies, {Link2}click here{/Link2}.",
          replacements: {
            Link1: _v0 => (0, _v1.jsx)(_v6.Link, {
              fontSize: "inherit",
              variant: "inline-secondary",
              href: "https://vimeo.zendesk.com/hc/en-us/articles/6649135424781-Enterprise-Data-Retention-Tool",
              children: _v0
            }, "link1"),
            Link2: _v0 => (0, _v1.jsx)(_v6.Link, {
              fontSize: "inherit",
              variant: "inline-secondary",
              href: "https://vimeo.zendesk.com/hc/en-us/articles/6695333181837-How-to-use-Enterprise-Data-Retention-Tool",
              children: _v0
            }, "link2")
          },
          dictionary: {
            es: {
              singular: "Cree políticas de retención de datos para eliminar automáticamente los videos en función de la duración de la política después de que se haya subido el video. Para obtener más información sobre la retención de datos, {Link1}haga clic aquí{/Link1}, y para conocer cómo establecer políticas, {Link2}haga clic aquí{/Link2}."
            },
            "de-DE": {
              singular: "Definieren Sie Richtlinien zur Datenaufbewahrung, sodass Videos nach dem Upload automatisch entsprechend der Richtliniendauer gelöscht werden. {Link1}Klicken Sie hier{/Link1} für weitere Informationen zur Datenaufbewahrung. Tipps zur Ausarbeitung von Richtlinien {Link2}finden Sie hier{/Link2}."
            },
            "fr-FR": {
              singular: "Créez des politiques de conservation des données pour supprimer automatiquement les vidéos une fois le délai après mise en ligne passé.  {Link1}Pour en savoir plus sur la conservation des données cliquez ici{/Link1} ;  {Link2}pour apprendre à mettre en place une politique, cliquez ici{/Link2}."
            },
            "ja-JP": {
              singular: "動画がアップロードされた後、ポリシー期間に基づいて動画を自動的に削除するデータ保持ポリシーを作成します。データ保持の詳細については、{Link1}ここをクリック{/Link1}してください。ポリシーの設定方法については、{Link2}ここをクリックしてください{/Link2}。"
            },
            "ko-KR": {
              singular: "동영상이 업로드된 후 정책 기간에 따라 동영상을 자동으로 삭제하는 데이터 보존 정책을 만듭니다. 데이터 보존에 대한 자세한 내용을 보려면 {Link1}여기를 클릭{/Link1}하고 정책 설정 방법을 알아보려면 {Link2}여기를 클릭{/Link2} 하세요."
            },
            "pt-BR": {
              singular: "Crie políticas de retenção de dados para excluir vídeos automaticamente com base na duração da política após o carregamento do vídeo. Para obter mais informações sobre retenção de dados, {Link1}clique aqui{/Link1} e, para aprender a configurar políticas, {Link2}clique aqui{/Link2}."
            },
            "zh-CN": {
              singular: "创建数据保留政策，在上传视频后根据政策规定的保留时间自动删除视频。如需有关数据保留的详细信息，请{Link1}点击此处{/Link1}；要了解如何设置政策，请{Link2}点击此处{/Link2}。"
            }
          }
        })
      }), (0, _v1.jsx)(_v51, {
        userId: _v0,
        workspaceUuid: _v1,
        toolBar: (0, _v1.jsxs)(_v5.Flex, {
          justifyContent: "flex-end",
          width: "100%",
          children: [(0, _v1.jsx)(_v58, {
            userId: _v0,
            workspaceUuid: _v1
          }), (0, _v1.jsx)(_v4.Button, {
            onClick: () => _v2.push(_v1 ? `${_v10.DRP_PATH_WORKSPACE}/create` : `${_v10.DRP_PATH_TEAM}/create`),
            id: "create-policy-btn",
            variant: "primary",
            children: _v3.CreatePolicy
          })]
        })
      })]
    });
  }], 0), _v0.s([], 0);
}