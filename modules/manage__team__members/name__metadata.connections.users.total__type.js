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
    _v42 = _v0.i(0);
  let _v43 = ({
      ownerId: _v0,
      groupsToFilter: _v1,
      addGroup: _v2,
      createGroup: _v3,
      ..._v4
    }) => {
      let [_v5, _v6] = (0, _v2.useState)(""),
        _v7 = (0, _v42.useDebouncedValue)(_v5, 500),
        _v8 = (0, _v2.useRef)(null),
        _v9 = (0, _v2.useRef)(null),
        _v10 = (0, _v32.getTranslations)(),
        [_v11, {
          data: _v12,
          loading: _v13
        }] = (0, _v25.useGetUserTeamGroupsLazy)();
      (0, _v2.useEffect)(() => {
        _v8.current = _v11;
      }, [_v11]), (0, _v2.useEffect)(() => {
        _v0 && _v7.trim().length && _v8.current?.({
          where: {
            userId: _v0
          },
          query: {
            searchText: _v7,
            perPage: 100,
            page: 1
          },
          select: ["uri", "name", "metadata.connections.users.total", "type"]
        });
      }, [_v7, _v0]);
      let {
          searchResults: _v14,
          canGroupBeCreated: _v15
        } = (0, _v2.useMemo)(() => {
          let _v0 = !!_v7.trim().length,
            _v1 = [];
          return _v12?.data.length && _v7.trim().length && (_v1 = _v12?.data?.filter(_v0 => {
            let _v1 = !!_v1?.find(_v0 => _v0.uri === _v0.uri);
            return _v0 = _v0 && _v7.trim().toLowerCase() !== _v0.name.trim().toLowerCase(), !_v1;
          })), {
            searchResults: _v1,
            canGroupBeCreated: _v0
          };
        }, [_v7, _v1, _v12?.data]),
        _v16 = (0, _v2.useCallback)(_v0 => {
          _v2(_v0), _v6("");
        }, [_v2]),
        _v17 = (0, _v2.useCallback)(_v0 => {
          _v3(_v0), _v6("");
        }, [_v3]);
      return (0, _v1.jsxs)(_v17.Box, {
        ..._v4,
        children: [(0, _v1.jsxs)(_v34.InputGroup, {
          children: [(0, _v1.jsx)(_v33.Input, {
            value: _v5,
            placeholder: _v10.AddGroup,
            onChange: _v0 => _v6(_v0.currentTarget.value),
            ref: _v9
          }), (0, _v1.jsx)(_v35.InputRightElement, {
            children: _v13 && (0, _v1.jsx)(_v40.Spinner, {
              size: "xs"
            })
          })]
        }), (0, _v1.jsxs)(_v36.Menu, {
          isOpen: (!!_v14.length || _v15) && !_v13,
          placement: "bottom-start",
          autoSelect: !1,
          matchWidth: !0,
          children: [(0, _v1.jsx)(_v37.MenuButton, {
            as: _v17.Box,
            width: "100%",
            height: "0"
          }), (0, _v1.jsxs)(_v39.MenuList, {
            maxHeight: (0, _v11.rem)(294),
            onFocus: _v0 => {
              _v0.preventDefault(), _v9.current?.focus();
            },
            children: [_v14.map(_v0 => (0, _v1.jsx)(_v38.MenuItem, {
              onClick: () => _v16(_v0.uri),
              isDisabled: "sso" === _v0.type,
              children: (0, _v1.jsxs)(_v7.Flex, {
                alignItems: "center",
                gap: "75",
                overflow: "hidden",
                children: [(0, _v1.jsx)(_v27.GroupIcon, {}), (0, _v1.jsxs)(_v17.Box, {
                  overflow: "hidden",
                  children: [(0, _v1.jsx)(_v26.ShrinkableText, {
                    variant: "heading-xs",
                    children: _v0.name
                  }), (0, _v1.jsx)(_v26.ShrinkableText, {
                    variant: "body-md",
                    color: "text-secondary",
                    children: (0, _v1.jsxs)(_v1.Fragment, {
                      children: [_v10.MembersCount(_v0?.metadata?.connections?.users?.total || 0), "sso" === _v0.type ? (0, _v1.jsxs)(_v1.Fragment, {
                        children: [" · ", _v10.SSO]
                      }) : null]
                    })
                  })]
                })]
              })
            }, _v0.uri)), _v15 && !_v13 && (0, _v1.jsx)(_v38.MenuItem, {
              onClick: () => _v17(_v7),
              children: (0, _v1.jsxs)(_v7.Flex, {
                alignItems: "center",
                gap: "75",
                overflow: "hidden",
                children: [(0, _v1.jsx)(_v21.Center, {
                  backgroundColor: "button-secondary-default",
                  borderRadius: "sm",
                  width: "sm",
                  minW: "sm",
                  height: "sm",
                  children: (0, _v1.jsx)(_v41.Plus, {
                    width: (0, _v11.rem)(20),
                    height: (0, _v11.rem)(20)
                  })
                }), (0, _v1.jsx)(_v17.Box, {
                  overflow: "hidden",
                  children: (0, _v1.jsx)(_v26.ShrinkableText, {
                    variant: "heading-xs",
                    children: _v10.CreateGroupNameGroup(_v7)
                  })
                })]
              })
            })]
          })]
        })]
      });
    },
    _v44 = ({
      listItemsCount: _v0
    }) => (0, _v1.jsx)("div", {
      children: [...Array(_v0)].map((_v0, _v1) => (0, _v1.jsxs)(_v2.default.Fragment, {
        children: [(0, _v1.jsx)(_v7.Flex, {
          justifyContent: "space-between",
          alignItems: "center",
          padding: "75",
          paddingLeft: "0",
          gap: "75",
          children: (0, _v1.jsxs)(_v10.Stack, {
            direction: "row",
            gap: "0",
            alignItems: "center",
            children: [(0, _v1.jsx)(_v20.Skeleton, {
              width: (0, _v11.rem)(32),
              height: (0, _v11.rem)(32),
              borderRadius: "sm"
            }), (0, _v1.jsxs)(_v17.Box, {
              marginLeft: "75",
              children: [(0, _v1.jsx)(_v20.Skeleton, {
                variant: "text",
                width: (0, _v11.rem)(180),
                height: (0, _v11.rem)(18)
              }), (0, _v1.jsx)(_v20.Skeleton, {
                variant: "text",
                width: (0, _v11.rem)(80),
                height: (0, _v11.rem)(17),
                marginTop: "50"
              })]
            })]
          })
        }), _v1 < _v0 - 1 && (0, _v1.jsx)(_v18.Divider, {
          borderColor: "stroke"
        })]
      }, _v1))
    });
  _v0.s(["UserGroupsModal", 0, ({
    ownerId: _v0,
    teamMemberUri: _v1,
    onClose: _v2,
    userAvatar: _v3,
    userTitle: _v4
  }) => {
    let _v5 = (0, _v16.useToast)(),
      [_v6, _v7] = (0, _v2.useState)([]),
      [_v8, _v9] = (0, _v2.useState)(void 0),
      [_v10, _v11] = (0, _v2.useState)(null),
      [_v12, _v13] = (0, _v2.useState)(!1),
      _v14 = (0, _v32.getTranslations)(),
      [_v15, _v16] = (0, _v28.useInfiniteScroll)(!0),
      {
        data: _v17,
        size: _v18,
        setSize: _v19,
        isValidating: _v20,
        isLoading: _v21,
        mutate: _v22
      } = (0, _v25.useGetUserTeamGroupsInfinite)({
        where: {
          userId: _v0
        },
        query: {
          perPage: 15,
          inspectedTeamUserUri: _v1
        },
        select: ["metadata.connections.users.total", "uri", "name", "type"]
      }),
      _v23 = () => {
        _v11(null), _v13(!1), _v5({
          title: _v14.RequestError,
          duration: 0
        });
      },
      {
        onUpdateTeamGroupUser: _v24
      } = (({
        userId: _v0,
        onSuccess: _v1,
        onError: _v2
      }) => {
        let [_v3, {
          loading: _v4
        }] = (0, _v30.usePatchUserTeamGroupUsers)();
        return {
          onUpdateTeamGroupUser: (_v0, _v1 = [], _v2 = []) => {
            let _v3 = (0, _v31.getIdFromUri)(_v0);
            if (_v3) return _v3({
              where: {
                userId: _v0,
                teamGroupId: _v3
              },
              variables: {
                add: _v1,
                remove: _v2
              },
              select: []
            }).then(() => _v1({
              add: _v1,
              remove: _v2
            })).catch(() => _v2(_v0));
          },
          updateLoading: _v4
        };
      })({
        userId: _v0,
        onSuccess: _v0 => {
          _v5({
            title: _v0?.add?.length ? _v14.GroupAdded : _v14.GroupRemoved,
            duration: 0
          }), _v22();
        },
        onError: _v23
      }),
      {
        createGroup: _v25
      } = (0, _v29.useCreateTeamGroup)({
        userId: _v0,
        handleError: _v23,
        handleSuccess: _v0 => {
          _v24(_v0.uri, [{
            uri: _v1,
            type: "team_user"
          }], []);
        }
      });
    (0, _v2.useEffect)(() => {
      let _v0 = !_v17?.[0].total || 15 * _v18 >= _v17[0].total;
      _v21 || _v20 || _v0 || _v19(_v18 + 1);
    }, [_v15]), (0, _v2.useEffect)(() => {
      _v7(_v17?.flatMap(_v0 => _v0.data)), _v9(_v17?.[0].total), _v11(null), _v13(!1);
    }, [_v17]);
    let _v26 = !_v17?.[0].total || 15 * _v18 < _v17[0].total;
    return (0, _v1.jsxs)(_v3.Modal, {
      isOpen: !0,
      onClose: () => _v2?.(),
      children: [(0, _v1.jsx)(_v4.ModalOverlay, {}), (0, _v1.jsxs)(_v5.ModalContent, {
        maxWidth: (0, _v11.rem)(480),
        width: "100%",
        children: [(0, _v1.jsxs)(_v6.ModalHeader, {
          children: [(0, _v1.jsxs)(_v7.Flex, {
            gap: "75",
            children: [(0, _v1.jsx)(_v14.Avatar, {
              alt: _v4 || "",
              size: "sm",
              src: _v3,
              nameProps: {
                name: _v4 ?? ""
              }
            }), (0, _v1.jsxs)(_v10.Stack, {
              direction: "column",
              gap: "50",
              children: [(0, _v1.jsx)(_v8.Header, {
                variant: "heading-md",
                size: "xl",
                children: _v4
              }), (0, _v1.jsx)(_v12.Paragraph, {
                variant: "body-md",
                children: _v14.GroupsCount(_v8 ?? 0)
              })]
            })]
          }), (0, _v1.jsx)(_v13.ModalCloseButton, {})]
        }), (0, _v1.jsxs)(_v9.ModalBody, {
          paddingTop: "300",
          paddingBottom: "200",
          children: [(0, _v1.jsx)(_v43, {
            ownerId: _v0,
            groupsToFilter: _v6,
            addGroup: _v0 => {
              _v13(!0), _v24(_v0, [{
                uri: _v1,
                type: "team_user"
              }], []);
            },
            createGroup: _v0 => {
              _v13(!0), _v25(_v0);
            },
            marginBottom: "200"
          }), (0, _v1.jsxs)(_v17.Box, {
            maxHeight: (0, _v11.rem)(280),
            overflowY: "auto",
            children: [_v12 && (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsx)(_v44, {
                listItemsCount: 1
              }), !!_v6?.length && (0, _v1.jsx)(_v18.Divider, {
                borderColor: "stroke"
              })]
            }), _v6?.map((_v0, _v1) => (0, _v1.jsxs)(_v2.default.Fragment, {
              children: [(0, _v1.jsxs)(_v7.Flex, {
                ref: _v1 === _v6.length - 1 && _v26 && !(_v21 || _v20) ? _v16 : null,
                justifyContent: "space-between",
                alignItems: "center",
                padding: "75",
                paddingLeft: "0",
                _hover: {
                  "& button": {
                    opacity: 1
                  }
                },
                gap: "75",
                children: [(0, _v1.jsxs)(_v10.Stack, {
                  direction: "row",
                  "data-group": !0,
                  gap: "0",
                  overflow: "hidden",
                  children: [(0, _v1.jsx)(_v7.Flex, {
                    width: (0, _v11.rem)(32),
                    minWidth: (0, _v11.rem)(32),
                    alignItems: "center",
                    children: (0, _v1.jsx)(_v27.GroupIcon, {
                      "data-id": "modal-groupIcon",
                      name: _v0.name
                    })
                  }), (0, _v1.jsxs)(_v17.Box, {
                    marginLeft: "75",
                    overflow: "hidden",
                    children: [(0, _v1.jsx)(_v26.ShrinkableText, {
                      variant: "heading-xs",
                      "data-id": "modal-groupName",
                      children: _v0.name
                    }), (0, _v1.jsxs)(_v12.Paragraph, {
                      variant: "body-md",
                      color: "text-secondary",
                      children: [_v14.MembersCount(_v0.metadata?.connections?.users?.total || 0), "sso" === _v0.type ? (0, _v1.jsxs)(_v1.Fragment, {
                        children: [" · ", _v14.SSO, " ", (0, _v1.jsx)(_v19.Tooltip, {
                          label: _v14.ThisGroupIsManagedBy,
                          shouldWrapChildren: !0,
                          maxW: (0, _v11.rem)(190),
                          children: (0, _v1.jsx)(_v23.InfoCircle, {
                            width: (0, _v11.rem)(13),
                            height: (0, _v11.rem)(13),
                            marginBottom: (0, _v11.rem)(2)
                          })
                        })]
                      }) : null]
                    })]
                  })]
                }), "custom" === _v0.type && (0, _v1.jsx)(_v15.Button, {
                  variant: "secondary",
                  opacity: "0",
                  transition: "opacity 0.3s ease",
                  size: "sm",
                  isLoading: _v10 === _v0.uri,
                  onClick: () => {
                    _v11(_v0.uri), _v24(_v0.uri, [], [{
                      uri: _v1,
                      type: "team_user"
                    }]);
                  },
                  children: _v14.Remove
                })]
              }), _v1 < _v6.length - 1 && (0, _v1.jsx)(_v18.Divider, {
                borderColor: "stroke"
              })]
            }, _v0.uri)), _v21 && !_v6?.length && (0, _v1.jsx)(_v44, {
              listItemsCount: 15
            }), !_v21 && !_v6?.length && !_v12 && (0, _v1.jsxs)(_v21.Center, {
              flexFlow: "column",
              gap: "50",
              paddingY: "500",
              children: [(0, _v1.jsx)(_v24.Users, {
                width: "sm",
                height: "sm"
              }), (0, _v1.jsx)(_v22.Text, {
                variant: "heading-xs",
                children: _v14.NoGroupsYet
              })]
            })]
          })]
        })]
      })]
    });
  }], 0);
}