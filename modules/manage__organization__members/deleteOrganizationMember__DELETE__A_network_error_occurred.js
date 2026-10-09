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
    _v26 = _v0.i(0);
  async function _v27({
    baseUrl: _v0,
    where: {
      orgUuid: _v1,
      orgMemberId: _v2
    },
    ..._v3
  }) {
    return (0, _v25.measureLatency)("deleteOrganizationMember", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/organizations/${_v1}/members/${_v2}`, {
        ..._v3,
        method: "DELETE"
      });
      if (!_v0.ok) throw new _v26.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v26.deepCamelCase)(_v1);
    });
  }
  async function _v28({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      orgUuid: _v3,
      orgMemberId: _v4
    },
    ..._v5
  }) {
    return (0, _v25.measureLatency)("patchOrganizationMember", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/organizations/${_v3}/members/${_v4}?fields=${_v1.map(_v26.intoSnakeCase).join(",")}`, {
        ..._v5,
        method: "PATCH",
        body: JSON.stringify((0, _v26.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v26.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v26.deepCamelCase)(_v1);
    });
  }
  _v0.i(0);
  var _v29 = _v0.i(0),
    _v30 = _v0.i(0);
  function _v31() {
    let {
        mutate: _v0
      } = (0, _v29.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v30.useGctlConfig)(),
      [_v5, _v6] = (0, _v24.useInternalState)();
    return [(0, _v11.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/organizations/${_v0.where.orgUuid}/members/${_v0.where.orgMemberId}${(0, _v24.serializeQuery)(_v0)}`, _v28({
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
  var _v32 = _v0.i(0),
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
    _v50 = _v0.i(0),
    _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0);
  let _v58 = "selectWorkspaceRoleAndInvitationNote",
    _v59 = "shareFolders",
    _v60 = {
      applicableFolderPolicies: [],
      currentStep: _v58,
      invitationNote: "",
      invitedWorkspaceMembers: [],
      isDataValid: !1,
      listOfWorkspaces: [],
      selectedFoldersTree: {
        isSelected: !1,
        children: {}
      },
      selectedPermissionPolicy: null,
      selectedRole: _v20.ALLOWED_ROLES_FOR_INVITE.VIEWER,
      selectedWorkspace: {
        displayName: "",
        icon: null,
        internalId: 0,
        uri: ""
      }
    },
    _v61 = "ADD_INVITED_WORKSPACE_MEMBERS",
    _v62 = "SET_INVITATION_NOTE",
    _v63 = "SET_LIST_OF_WORKSPACES",
    _v64 = "SET_SELECTED_FOLDERS_TREE",
    _v65 = "SET_SELECTED_PERMISSION_POLICY",
    _v66 = "SET_SELECTED_ROLE",
    _v67 = "SET_SELECTED_WORKSPACE",
    _v68 = "UPDATE_CURRENT_STEP_TO_NEXT";
  function _v69(_v0, _v1) {
    switch (_v1.type) {
      case _v61:
        let _v0 = [..._v0.invitedWorkspaceMembers, ..._v1.payload],
          _v1 = (0, _v57.getApplicableFolderPolicies)(_v0),
          _v2 = _v1.length ? _v1[0] : null;
        return {
          ..._v0,
          applicableFolderPolicies: _v1,
          invitedWorkspaceMembers: _v0,
          selectedPermissionPolicy: _v2
        };
      case _v62:
        return {
          ..._v0,
          invitationNote: _v1.payload
        };
      case "SET_IS_DATA_VALID":
        return {
          ..._v0,
          isDataValid: _v1.payload
        };
      case _v63:
        return {
          ..._v0,
          listOfWorkspaces: [..._v0.listOfWorkspaces, ..._v1.payload]
        };
      case _v64:
        let _v3 = Object.keys(_v1.payload.children).length > 0;
        return {
          ..._v0,
          selectedFoldersTree: _v1.payload,
          isDataValid: _v3
        };
      case _v65:
        return {
          ..._v0,
          selectedPermissionPolicy: _v1.payload
        };
      case _v66:
        return {
          ..._v0,
          selectedRole: _v1.payload
        };
      case _v67:
        let _v4 = !!_v1.payload.uri;
        return {
          ..._v0,
          selectedWorkspace: _v1.payload,
          isDataValid: _v4
        };
      case _v68:
        return {
          ..._v0,
          currentStep: (_v0 => {
            if (_v0 === _v58) return _v59;
            throw Error(`Unknown step: ${_v0}`);
          })(_v0.currentStep),
          isDataValid: !1
        };
      default:
        return _v0;
    }
  }
  var _v70 = _v0.i(0),
    _v71 = _v0.i(0),
    _v72 = _v0.i(0);
  let _v73 = ({
      addToWorkspaceAndShareModalData: _v0,
      members: _v1,
      onChangeSelectedFoldersTree: _v2,
      onChangeSelectedPermissionPolicy: _v3,
      onInvitationNoteChange: _v4,
      onListOfWorkspacesChange: _v5,
      onSelectedRoleChange: _v6,
      onSelectedWorkspaceChange: _v7,
      organizationUuid: _v8
    }) => {
      let {
        selectedWorkspace: _v9
      } = _v0;
      switch (_v0.currentStep) {
        case _v58:
          return (0, _v1.jsx)(_v74, {
            invitationNote: _v0.invitationNote,
            listOfWorkspaces: _v0.listOfWorkspaces,
            members: _v1,
            onInvitationNoteChange: _v4,
            onListOfWorkspacesChange: _v5,
            onSelectedRoleChange: _v6,
            onSelectedWorkspaceChange: _v7,
            organizationUuid: _v8,
            selectedRole: _v0.selectedRole,
            selectedWorkspaceUri: _v9.uri
          });
        case _v59:
          return (0, _v1.jsx)(_v75, {
            applicableFolderPolicies: _v0.applicableFolderPolicies,
            handleChangeSelectedFoldersTree: _v2,
            handleChangeSelectedPermissionPolicy: _v3,
            selectedFoldersTree: _v0.selectedFoldersTree,
            selectedPermissionPolicy: _v0.selectedPermissionPolicy,
            selectedWorkspace: _v9
          });
        default:
          return null;
      }
    },
    _v74 = ({
      invitationNote: _v0,
      listOfWorkspaces: _v1,
      members: _v2,
      onInvitationNoteChange: _v3,
      onListOfWorkspacesChange: _v4,
      onSelectedRoleChange: _v5,
      onSelectedWorkspaceChange: _v6,
      organizationUuid: _v7,
      selectedRole: _v8,
      selectedWorkspaceUri: _v9
    }) => {
      let _v10 = (0, _v8.getTranslations)(),
        [_v11] = (0, _v56.useToken)("colors", ["fill-surface"]),
        _v12 = _v2.slice(0, 3).map(_v0 => (0, _v32.getMemberAvatarLink)(_v0));
      return (0, _v1.jsxs)(_v55.ModalBody, {
        display: "flex",
        flexDirection: "column",
        gap: "md",
        minH: (0, _v14.rem)(132),
        paddingBottom: "0",
        paddingTop: "md",
        px: "lg",
        children: [(0, _v1.jsxs)(_v13.HStack, {
          alignItems: "center",
          gap: "xs",
          children: [(0, _v1.jsx)(_v12.Box, {
            display: "flex",
            alignItems: "center",
            children: _v12.map((_v0, _v1) => (0, _v1.jsx)(_v76, {
              alt: "org member",
              size: "xs",
              src: _v0,
              nameProps: {
                name: _v2[_v1]?.user?.name ?? ""
              },
              $_css: _v1 !== _v12.length - 1 ? (0, _v14.rem)(-6) : void 0,
              $_css2: _v12.length - _v1,
              $_css3: `0 0 0 ${(0, _v14.rem)(2)} ${_v11}`,
              $_css4: `0 0 0 ${(0, _v14.rem)(2)} ${_v11}`,
              $_css5: _v11
            }, _v1))
          }), (0, _v1.jsx)(_v12.Box, {
            children: (0, _v1.jsx)(_v3.Text, {
              variant: "body-md",
              children: (() => {
                let _v0 = _v2.slice(0, 3).map(_v0 => _v0.user?.name ?? _v0.email);
                switch (_v0.length) {
                  case 1:
                    return _v0[0];
                  case 2:
                    return _v10.XandYMembersSelected(_v0[0], _v0[1]);
                  default:
                    let _v0 = _v0.slice(0, 2).join(", ");
                    return _v10.XandYMembersSelectedWithCount(_v0, _v2.length - 2);
                }
              })()
            })
          })]
        }), (0, _v1.jsx)(_v70.SelectWorkspaceAndRole, {
          handleSelectedRoleChange: _v5,
          handleSelectedWorkspaceUriChange: _v0 => {
            let _v1 = _v1.find(_v0 => _v0.uri === _v0);
            _v1 && _v6(_v1);
          },
          handleWorkspacesAddition: _v4,
          listOfWorkspaces: _v1,
          orgUuid: _v7,
          selectedRole: _v8,
          selectedWorkspaceUri: _v9
        }), (0, _v1.jsx)(_v71.AddInvitationNote, {
          handleInvitationNoteChange: _v3,
          invitationNote: _v0
        })]
      });
    },
    _v75 = ({
      applicableFolderPolicies: _v0,
      handleChangeSelectedFoldersTree: _v1,
      handleChangeSelectedPermissionPolicy: _v2,
      selectedFoldersTree: _v3,
      selectedPermissionPolicy: _v4,
      selectedWorkspace: _v5
    }) => {
      let _v6 = (0, _v8.getTranslations)();
      return (0, _v1.jsx)(_v55.ModalBody, {
        pt: 0,
        children: (0, _v1.jsx)(_v53.AddToFoldersModalBodyContent, {
          applicableFolderPolicies: _v0,
          error: null,
          header: (0, _v1.jsx)(_v72.AddToFolderModalBodyHeader, {}),
          ownerId: _v5?.internalId,
          searchPlaceHolderText: _v6.Search,
          selectedFoldersTree: _v3,
          selectedPermissionPolicy: _v4,
          setSelectedFoldersTree: _v1,
          setSelectedPermissionPolicy: _v2
        })
      });
    };
  var _v76 = (0, _v52.default)(_v54.Avatar).withConfig({
      displayName: "ModalBodySection___StyledAvatar",
      componentId: "sc-af3cd8e6-0"
    })(_v0 => ({
      "& > div,img": {
        marginRight: _v0.$_css
      },
      display: "inline-block",
      position: "relative",
      zIndex: _v0.$_css2,
      svg: {
        boxShadow: _v0.$_css3,
        borderRadius: "50%"
      },
      img: {
        boxShadow: _v0.$_css4,
        backgroundColor: _v0.$_css5
      }
    })),
    _v77 = _v0.i(0);
  let _v78 = ({
      currentStep: _v0,
      disabled: _v1,
      handlePrimaryButtonClick: _v2,
      loading: _v3,
      onClose: _v4
    }) => {
      switch (_v0) {
        case _v58:
          return (0, _v1.jsx)(_v79, {
            disabled: _v1,
            handlePrimaryButtonClick: _v2,
            loading: _v3,
            onClose: _v4
          });
        case _v59:
          return (0, _v1.jsx)(_v80, {
            disabled: _v1,
            loading: _v3,
            onClose: _v4,
            handlePrimaryButtonClick: _v2
          });
        default:
          return null;
      }
    },
    _v79 = ({
      disabled: _v0,
      handlePrimaryButtonClick: _v1,
      loading: _v2,
      onClose: _v3
    }) => {
      let _v4 = (0, _v8.getTranslations)();
      return (0, _v1.jsxs)(_v77.ModalFooter, {
        px: "lg",
        pb: 0,
        children: [(0, _v1.jsx)(_v40.Button, {
          isDisabled: !1,
          onClick: _v3,
          variant: "tertiary",
          children: _v4.Cancel
        }), (0, _v1.jsx)(_v40.Button, {
          isDisabled: _v0,
          isLoading: _v2,
          onClick: _v1,
          variant: "primary",
          children: _v4.Add
        })]
      });
    },
    _v80 = ({
      disabled: _v0,
      loading: _v1,
      onClose: _v2,
      handlePrimaryButtonClick: _v3
    }) => {
      let _v4 = (0, _v8.getTranslations)();
      return (0, _v1.jsxs)(_v77.ModalFooter, {
        children: [(0, _v1.jsx)(_v40.Button, {
          isDisabled: _v1,
          onClick: _v2,
          size: "md",
          variant: "tertiary",
          children: _v4.Skip
        }), (0, _v1.jsx)(_v40.Button, {
          isDisabled: _v0,
          isLoading: _v1,
          onClick: _v3,
          size: "md",
          variant: "primary",
          children: _v4.Share
        })]
      });
    };
  var _v81 = _v0.i(0);
  let _v82 = ({
      currentStep: _v0,
      selectedMembersCount: _v1
    }) => {
      switch (_v0) {
        case _v58:
          return (0, _v1.jsx)(_v83, {
            selectedMembersCount: _v1
          });
        case _v59:
          return (0, _v1.jsx)(_v84, {});
        default:
          return null;
      }
    },
    _v83 = ({
      selectedMembersCount: _v0
    }) => {
      let _v1 = (0, _v8.getTranslations)();
      return (0, _v1.jsx)(_v81.ModalHeader, {
        fontSize: "heading-md",
        p: 0,
        px: "lg",
        children: _v1.AddXMembers(_v0)
      });
    },
    _v84 = () => {
      let _v0 = (0, _v8.getTranslations)();
      return (0, _v1.jsxs)(_v81.ModalHeader, {
        px: "lg",
        children: [(0, _v1.jsx)(_v3.Text, {
          variant: "heading-md",
          children: _v0.ShareFolders
        }), (0, _v1.jsx)(_v3.Text, {
          variant: "body-md",
          children: _v0.ShareFoldersDescription
        })]
      });
    },
    _v85 = ["applicablePermissionPolicies.folder.createdOn", "applicablePermissionPolicies.folder.displayDescription", "applicablePermissionPolicies.folder.displayName", "applicablePermissionPolicies.folder.modifiedOn", "applicablePermissionPolicies.folder.name", "applicablePermissionPolicies.folder.permissionActions", "applicablePermissionPolicies.folder.uri", "email", "permissionLevel", "role", "uri"],
    _v86 = ({
      isOpen: _v0,
      onClose: _v1,
      onAdd: _v2,
      organizationUuid: _v3,
      selectedMembers: _v4 = []
    }) => {
      let {
          addToWorkspaceAndShareModalData: _v5,
          handleAddInvitedWorkspaceMembers: _v6,
          onChangeSelectedFoldersTree: _v7,
          onChangeSelectedPermissionPolicy: _v8,
          onChangeStepToNext: _v9,
          onInvitationNoteChange: _v10,
          onSelectedRoleChange: _v11,
          onSelectedWorkspaceChange: _v12,
          onListOfWorkspacesChange: _v13
        } = (() => {
          let [_v0, _v1] = (0, _v11.useReducer)(_v69, _v60),
            _v2 = (0, _v11.useCallback)(_v0 => {
              _v1({
                type: _v61,
                payload: _v0
              });
            }, []),
            _v3 = (0, _v11.useCallback)(_v0 => {
              _v1({
                type: _v64,
                payload: _v0
              });
            }, []),
            _v4 = (0, _v11.useCallback)(_v0 => {
              _v1({
                type: _v65,
                payload: _v0
              });
            }, []),
            _v5 = (0, _v11.useCallback)(() => {
              _v1({
                type: _v68
              });
            }, []),
            _v6 = (0, _v11.useCallback)(_v0 => {
              _v1({
                type: _v62,
                payload: _v0
              });
            }, []),
            _v7 = (0, _v11.useCallback)(_v0 => {
              _v1({
                type: _v63,
                payload: _v0
              });
            }, []);
          return {
            addToWorkspaceAndShareModalData: _v0,
            handleAddInvitedWorkspaceMembers: _v2,
            onChangeSelectedFoldersTree: _v3,
            onChangeSelectedPermissionPolicy: _v4,
            onChangeStepToNext: _v5,
            onInvitationNoteChange: _v6,
            onSelectedRoleChange: (0, _v11.useCallback)(_v0 => {
              _v1({
                type: _v66,
                payload: _v0
              });
            }, []),
            onSelectedWorkspaceChange: (0, _v11.useCallback)(_v0 => {
              _v1({
                type: _v67,
                payload: _v0
              });
            }, []),
            onListOfWorkspacesChange: _v7
          };
        })(),
        _v14 = (0, _v8.getTranslations)(),
        {
          currentStep: _v15,
          selectedRole: _v16,
          selectedWorkspace: _v17
        } = _v5,
        _v18 = _v16 !== _v20.ALLOWED_ROLES_FOR_INVITE.ADMIN,
        [_v19, {
          called: _v20,
          data: _v21,
          error: _v22,
          loading: _v23
        }] = (0, _v51.usePostWorkspaceMembers)(),
        [_v24, {
          called: _v25,
          data: _v26,
          loading: _v27
        }] = (0, _v50.useGetUserProjectsLazy)(),
        [_v28, {
          loading: _v29,
          error: _v30,
          complete: _v31
        }] = (0, _v46.usePutBatchFolderTeamPermissions)(),
        _v32 = (0, _v16.useToast)(),
        _v33 = (0, _v11.useRef)(!1),
        _v34 = (0, _v11.useMemo)(() => {
          if (_v18) {
            let _v0 = _v17.displayName;
            return _v14.MembersInvitedToWorkspace(_v4.length, _v0);
          }
          return _v14.InviteSent;
        }, [_v18, _v4.length, _v17, _v14]);
      return (0, _v11.useEffect)(() => {
        !_v33.current || !_v20 || _v18 && !_v25 || _v23 || _v18 && _v27 || (_v22 ? (_v32.isActive("invite-error") || _v32({
          title: _v14.ErrorSendingInvites,
          variant: "warning",
          id: "invite-error"
        }), _v1()) : _v21 && (_v32.isActive("invite-success") || _v32({
          title: _v34,
          id: "invite-success"
        }), _v6(_v21.data), _v18 && (_v26?.total ?? 0) > 0 ? _v9() : _v1()), _v2(), _v33.current = !1);
      }, [_v25, _v20, _v6, _v18, _v2, _v9, _v1, _v16, _v14, _v32, _v34, _v26, _v27, _v21, _v22, _v23]), (0, _v11.useEffect)(() => {
        !_v29 && (_v30 || _v31) && (_v31 ? _v32.isActive("share-folder-success") || _v32({
          title: _v14.FoldersShared,
          id: "share-folder-success"
        }) : _v32.isActive("share-folder-error") || _v32({
          title: _v14.UnableToShareFolders,
          variant: "warning",
          id: "share-folder-error"
        }), _v1());
      }, [_v1, _v14, _v32, _v31, _v30, _v29]), (0, _v1.jsxs)(_v47.Modal, {
        closeOnOverlayClick: !1,
        isOpen: _v0,
        onClose: _v1,
        children: [(0, _v1.jsx)(_v49.ModalOverlay, {}), (0, _v1.jsxs)(_v48.ModalContent, {
          minH: (0, _v14.rem)(264),
          maxW: (0, _v14.rem)(500),
          py: "md",
          children: [(0, _v1.jsx)(_v82, {
            currentStep: _v15,
            selectedMembersCount: _v4.length
          }), (0, _v1.jsx)(_v73, {
            addToWorkspaceAndShareModalData: _v5,
            members: _v4,
            onChangeSelectedFoldersTree: _v7,
            onChangeSelectedPermissionPolicy: _v8,
            onInvitationNoteChange: _v10,
            onSelectedRoleChange: _v11,
            onSelectedWorkspaceChange: _v12,
            organizationUuid: _v3,
            onListOfWorkspacesChange: _v13
          }), (0, _v1.jsx)(_v78, {
            currentStep: _v15,
            disabled: !_v5.isDataValid,
            handlePrimaryButtonClick: () => {
              _v15 === _v58 ? (_v33.current = !0, _v19({
                select: _v85,
                variables: {
                  customMessage: _v5.invitationNote,
                  existingOrgMemberUris: _v4.map(_v0 => _v0.uri),
                  role: _v16
                },
                where: {
                  workspaceUuid: (0, _v32.getWorkspaceUuid)(_v17.uri)
                }
              }), _v18 && _v17?.internalId && _v24({
                query: {
                  excludePrivateToMeFolder: !0,
                  perPage: 1,
                  topLevelOnly: !0,
                  permissionAction: "folder.view"
                },
                select: ["isPrivateToUser", "name", "privacy", "uri"],
                where: {
                  userId: _v17.internalId
                }
              })) : _v15 === _v59 && _v28(_v5.invitedWorkspaceMembers, (0, _v45.getSelectedFolderUrisFromTree)(_v5.selectedFoldersTree), _v17?.internalId, _v5.selectedPermissionPolicy?.uri);
            },
            loading: _v23 || _v29,
            onClose: _v1
          })]
        })]
      });
    };
  var _v87 = _v0.i(0);
  let _v88 = ({
      isOpen: _v0,
      onClose: _v1,
      orgName: _v2,
      orgUuid: _v3,
      selectedMembers: _v4,
      onRemoval: _v5
    }) => {
      let _v6 = (0, _v11.useRef)(!1),
        _v7 = (0, _v16.useToast)(),
        _v8 = (0, _v8.getTranslations)(),
        [_v9, {
          loading: _v10,
          error: _v11,
          called: _v12
        }] = (0, _v87.useDeleteOrganizationMembers)(),
        _v13 = (0, _v11.useCallback)(() => {
          _v7.isActive("remove-success") || _v7({
            title: _v8.XMembersRemoved(_v4.length),
            variant: "neutral",
            id: "remove-success"
          }), _v1(), _v5();
        }, [_v1, _v4.length, _v5, _v8, _v7]),
        _v14 = (0, _v11.useCallback)(() => {
          _v3 && _v9({
            where: {
              orgUuid: _v3
            },
            variables: {
              existingOrgMemberUris: _v4.map(_v0 => _v0.uri)
            }
          });
        }, [_v9, _v3, _v4]);
      return (0, _v11.useEffect)(() => {
        if (_v10 && _v12) {
          _v6.current = !0;
          return;
        }
        !_v11 && _v6.current && _v13(), _v6.current = !1;
      }, [_v12, _v11, _v10, _v13]), (0, _v1.jsx)(_v38.RemovalConfirmationModal, {
        isOpen: _v0,
        onClose: _v1,
        header: _v8.RemoveXMembersFromWorkspace(_v4.length, _v2),
        onConfirmAction: _v14,
        isLoading: _v10,
        width: 400,
        children: (0, _v1.jsx)(_v3.Text, {
          variant: "body-md",
          children: _v8.RemoveFromOrgBulkActionConfirmation({
            member: 1 === _v4.length ? _v4[0]?.user?.name ?? _v4[0]?.email : void 0,
            orgName: _v2
          })
        })
      });
    },
    _v89 = ({
      organizationUuid: _v0,
      organizationMembers: _v1,
      revalidateOrgMembers: _v2
    }) => {
      let {
          selectedItems: _v3,
          resetSelection: _v4
        } = (0, _v34.useSelectionContext)(),
        _v5 = (0, _v8.getTranslations)(),
        _v6 = (0, _v11.useMemo)(() => _v1.filter(_v0 => _v3.has(_v0.uri)), [_v1, _v3]),
        _v7 = _v6.some(_v0 => _v0.permissionLevel === _v20.ORGANIZATION_ROLES.ADMIN),
        {
          data: _v8
        } = (0, _v21.useGetCurrentOrganizationNameAndIcon)({
          organizationUuid: _v0
        }),
        {
          mutate: _v9
        } = (0, _v21.useGetCurrentOrganizationSeatDetails)({
          organizationUuid: _v0
        }),
        {
          isOpen: _v10,
          onClose: _v11,
          onOpen: _v12
        } = (0, _v23.useDisclosure)(),
        {
          isOpen: _v13,
          onClose: _v14,
          onOpen: _v15
        } = (0, _v23.useDisclosure)(),
        _v16 = (0, _v11.useCallback)(() => {
          _v4(), _v9();
        }, [_v4, _v9]),
        _v17 = (0, _v11.useCallback)(() => {
          _v2(), _v9(), _v4();
        }, [_v4, _v2, _v9]);
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [!!_v3.size && !_v13 && !_v10 && (0, _v1.jsx)(_v42.Portal, {
          children: (0, _v1.jsx)(_v12.Box, {
            pos: "fixed",
            left: "50%",
            bottom: {
              base: "0",
              sm: (0, _v14.rem)(60)
            },
            transform: "translateX(-50%)",
            children: (0, _v1.jsxs)(_v39.ActionBar, {
              children: [(0, _v1.jsx)(_v39.ActionBarText, {
                variant: "heading-xs",
                children: _v5.XMembersSelected(_v3.size)
              }), (0, _v1.jsx)(_v39.ActionBarButtonGroup, {
                children: [(0, _v1.jsx)(_v40.Button, {
                  size: "sm",
                  leftIcon: (0, _v1.jsx)(_v43.PlusSmall, {}),
                  onClick: () => _v15(),
                  children: _v5.AddToWorkspace
                }, "bulk-action-add-to-workspace"), (0, _v1.jsx)(_v40.Button, {
                  leftIcon: (0, _v1.jsx)(_v44.UserMinus, {}),
                  size: "sm",
                  onClick: () => _v12(),
                  children: _v5.Remove
                }, "bulk-action-remove-from-workspace"), (0, _v1.jsx)(_v41.CloseButton, {
                  "aria-label": "close button",
                  size: "sm",
                  variant: "tertiary",
                  onClick: () => _v4()
                }, "close-action-bar")].filter((_v0, _v1) => !_v7 || 0 !== _v1)
              })]
            })
          })
        }), _v10 && (0, _v1.jsx)(_v88, {
          isOpen: _v10,
          onClose: _v11,
          orgName: _v8?.displayName ?? "",
          selectedMembers: _v6,
          orgUuid: _v0 ?? "",
          onRemoval: _v17
        }), _v13 && (0, _v1.jsx)(_v86, {
          isOpen: _v13,
          onClose: _v14,
          organizationUuid: _v0 ?? "",
          selectedMembers: _v6,
          onAdd: _v16
        })]
      });
    };
  var _v90 = _v0.i(0),
    _v91 = _v0.i(0),
    _v92 = _v0.i(0),
    _v93 = _v0.i(0),
    _v94 = _v0.i(0),
    _v95 = _v0.i(0);
  let _v96 = (0, _v11.memo)(() => {
    let _v0 = (0, _v8.getTranslations)(),
      {
        organizationUuid: _v1
      } = (0, _v94.useCurrentWorkspaceDetails)(),
      {
        data: _v2,
        isLoading: _v3,
        setSize: _v4,
        size: _v5
      } = (0, _v92.useGetOrganizationWorkspacesInfinite)(() => _v1 ? {
        select: ["uri", "displayName"],
        where: {
          orgUuid: _v1
        }
      } : null);
    (0, _v95.useInfiniteAutoFetching)(_v2, _v3, _v5, _v4);
    let _v6 = (0, _v11.useMemo)(() => _v2?.flatMap(_v0 => _v0.data) ?? [], [_v2]),
      {
        handleFiltersChange: _v7,
        parsedFilters: {
          workspaceUris: _v8,
          inviteStatus: _v9,
          roles: _v10
        }
      } = (0, _v22.useOrganizationMembersWithFilters)({
        organizationUuid: _v1
      }),
      [_v11, _v12] = (0, _v11.useState)({
        workspaces: _v8 ?? [],
        status: _v9 ?? [],
        roles: _v10 ?? []
      }),
      _v13 = (0, _v11.useCallback)((_v0 = []) => {
        _v7(_v0, _v11);
      }, [_v11, _v7]),
      _v14 = (0, _v11.useCallback)((_v0 = []) => {
        let _v1 = {
          ..._v11
        };
        _v0.includes("workspaces") && (_v1.workspaces = []), _v0.includes("roles") && (_v1.roles = []), _v0.includes("status") && (_v1.status = []), _v7(_v0, _v1);
      }, [_v11, _v7]),
      _v15 = (0, _v11.useMemo)(() => {
        if (!_v8?.length || 0 === _v8.length) return _v0.WorkspacesFilter;
        if (1 === _v8.length) {
          if ("none" === _v8[0]) return _v0.NoWorkspace;
          let _v0 = _v6.find(_v0 => _v0.uri === _v8[0]);
          return _v0 ? _v0.displayName : _v0.WorkspacesFilterWithCount(1);
        }
        return _v0.WorkspacesFilterWithCount(_v8.length);
      }, [_v8, _v6, _v0]),
      _v16 = (0, _v11.useMemo)(() => {
        if (_v10 && 0 !== _v10.length) {
          if (1 === _v10.length) switch (_v10[0]) {
            case "admin":
              return _v0.OrganizationAdminRole;
            case "workspace_admin":
              return _v0.AdminRole;
            case "contributor_plus":
              return _v0.ContributorPlusRole;
            case "contributor":
              return _v0.ContributorRole;
            case "viewer":
              return _v0.ViewerRole;
            default:
              return;
          }
          return _v0.RoleFilterWithCount(_v10.length);
        }
      }, [_v10, _v0]),
      _v17 = (0, _v11.useMemo)(() => {
        if (_v9 && 0 !== _v9.length) {
          if (_v9.length > 1) return _v0.StatusFilterWithCount(_v9.length);
          if ("pending" === _v9[0]) return _v0.Pending;
          if ("accepted" === _v9[0]) return _v0.Accepted;
        }
      }, [_v9, _v0]),
      _v18 = (_v8?.length ?? 0) > 0 || (_v10?.length ?? 0) > 0 || (_v9.length ?? 0) > 0,
      _v19 = (0, _v11.useCallback)(_v0 => {
        switch (_v0.filterKey) {
          case "workspaces":
            return _v11.workspaces.length;
          case "roles":
            return _v11.roles.length;
          case "status":
            return _v11.status.length;
          default:
            return 0;
        }
      }, [_v11]),
      _v20 = (0, _v11.useMemo)(() => _v11.workspaces.length === (_v8?.length ?? 0) && [..._v11.workspaces].sort().toString() === [...(_v8 ?? [])].sort().toString(), [_v11.workspaces, _v8]),
      _v21 = (0, _v11.useMemo)(() => _v11.roles.length === (_v10?.length ?? 0) && [..._v11.roles].sort().toString() === [...(_v10 ?? [])].sort().toString(), [_v11.roles, _v10]),
      _v22 = (0, _v11.useMemo)(() => _v11.status.length === (_v9?.length ?? 0) && [..._v11.status].sort().toString() === [...(_v9 ?? [])].sort().toString(), [_v11.status, _v9]),
      _v23 = [{
        filterKey: "workspaces",
        filterName: _v0.WorkspacesFilter,
        filterDisplayName: _v15,
        popoverContent: (0, _v1.jsx)(_v91.CheckboxGroup, {
          value: _v11.workspaces,
          onChange: _v0 => _v12(_v0 => ({
            ..._v0,
            workspaces: _v0.sort()
          })),
          children: (0, _v1.jsxs)(_v2.VStack, {
            align: "start",
            minW: (0, _v14.rem)(200),
            gap: "md",
            m: "sm",
            children: [(0, _v1.jsx)(_v90.Checkbox, {
              size: "md",
              id: "none",
              value: "none",
              children: (0, _v1.jsx)(_v3.Text, {
                variant: "body-md",
                children: _v0.NoWorkspace
              })
            }), _v6.map(_v0 => (0, _v1.jsx)(_v90.Checkbox, {
              size: "md",
              id: _v0.uri,
              value: _v0.uri,
              children: (0, _v1.jsx)(_v3.Text, {
                variant: "body-md",
                children: _v0.displayName
              })
            }, _v0.uri))]
          })
        }),
        filterFooterProps: {
          showClearAll: (_v8?.length ?? 0) > 0,
          onClickClearAll: () => _v7(["workspaces"], {
            workspaces: []
          }),
          onClickApply: () => {
            _v7(["workspaces"], {
              workspaces: _v11.workspaces
            });
          },
          disableApply: _v20
        }
      }, {
        filterKey: "roles",
        filterName: _v0.RoleFilter,
        filterDisplayName: _v16,
        popoverContent: (0, _v1.jsx)(_v91.CheckboxGroup, {
          value: _v11.roles,
          onChange: _v0 => _v12(_v0 => ({
            ..._v0,
            roles: _v0.sort()
          })),
          children: (0, _v1.jsxs)(_v2.VStack, {
            align: "start",
            minW: (0, _v14.rem)(200),
            gap: "md",
            mx: "sm",
            my: "xs",
            children: [(0, _v1.jsx)(_v3.Text, {
              variant: "heading-xs",
              children: _v0.Organization
            }), (0, _v1.jsx)(_v2.VStack, {
              align: "start",
              gap: "md",
              children: (0, _v1.jsx)(_v90.Checkbox, {
                size: "md",
                id: "admin",
                value: "admin",
                children: (0, _v1.jsx)(_v3.Text, {
                  variant: "body-md",
                  children: _v0.OrganizationAdminRole
                })
              })
            }), (0, _v1.jsx)(_v3.Text, {
              variant: "heading-xs",
              children: _v0.Workspace
            }), (0, _v1.jsxs)(_v2.VStack, {
              align: "start",
              gap: "md",
              children: [(0, _v1.jsx)(_v90.Checkbox, {
                size: "md",
                id: "workspace_admin",
                value: "workspace_admin",
                children: (0, _v1.jsx)(_v3.Text, {
                  variant: "body-md",
                  children: _v0.AdminRole
                })
              }), (0, _v1.jsx)(_v90.Checkbox, {
                size: "md",
                id: "contributor_plus",
                value: "contributor_plus",
                children: (0, _v1.jsx)(_v3.Text, {
                  variant: "body-md",
                  children: _v0.ContributorPlusRole
                })
              }), (0, _v1.jsx)(_v90.Checkbox, {
                size: "md",
                id: "contributor",
                value: "contributor",
                children: (0, _v1.jsx)(_v3.Text, {
                  variant: "body-md",
                  children: _v0.ContributorRole
                })
              }), (0, _v1.jsx)(_v90.Checkbox, {
                size: "md",
                id: "viewer",
                value: "viewer",
                children: (0, _v1.jsx)(_v3.Text, {
                  variant: "body-md",
                  children: _v0.ViewerRole
                })
              })]
            })]
          })
        }),
        filterFooterProps: {
          showClearAll: (_v10?.length ?? 0) > 0,
          onClickClearAll: () => _v7(["roles"], {
            roles: []
          }),
          onClickApply: () => {
            _v7(["roles"], {
              roles: _v11.roles
            });
          },
          disableApply: _v21
        }
      }, {
        filterKey: "status",
        filterName: _v0.StatusFilter,
        filterDisplayName: _v17,
        popoverContent: (0, _v1.jsx)(_v91.CheckboxGroup, {
          value: _v11.status,
          onChange: _v0 => _v12(_v0 => ({
            ..._v0,
            status: _v0.sort()
          })),
          children: (0, _v1.jsxs)(_v2.VStack, {
            align: "start",
            minW: (0, _v14.rem)(200),
            gap: "md",
            mx: "sm",
            my: "xs",
            children: [(0, _v1.jsx)(_v90.Checkbox, {
              size: "md",
              id: "pending",
              value: "pending",
              children: (0, _v1.jsx)(_v3.Text, {
                variant: "body-md",
                children: _v0.Pending
              })
            }), (0, _v1.jsx)(_v90.Checkbox, {
              size: "md",
              id: "accepted",
              value: "accepted",
              children: (0, _v1.jsx)(_v3.Text, {
                variant: "body-md",
                children: _v0.Accepted
              })
            })]
          })
        }),
        filterFooterProps: {
          showClearAll: (_v9?.length ?? 0) > 0,
          onClickClearAll: () => _v7(["status"], {
            status: []
          }),
          onClickApply: () => {
            _v7(["status"], {
              status: _v11.status
            });
          },
          disableApply: _v22
        }
      }];
    return (0, _v1.jsxs)(_v13.HStack, {
      children: [_v18 && (0, _v1.jsx)(_v40.Button, {
        variant: "tertiary",
        size: "sm",
        color: "text-secondary",
        textStyle: "heading-xs",
        onClick: () => _v7(["workspaces", "roles", "status"], {
          workspaces: [],
          roles: [],
          status: []
        }),
        children: _v0.ClearFilters
      }), (0, _v1.jsx)(_v93.ResponsivePopoverFilters, {
        filters: _v23,
        getFilterCount: _v19,
        filterFooterProps: {
          onClickApply: _v13,
          onClickClearAll: _v14
        }
      })]
    });
  });
  var _v97 = _v0.i(0),
    _v98 = _v0.i(0),
    _v99 = _v0.i(0);
  let _v100 = ({
      direction: _v0
    }) => "desc" === _v0 ? (0, _v1.jsx)(_v98.ArrowDown, {}) : (0, _v1.jsx)(_v99.ArrowUp, {}),
    _v101 = () => {
      let {
          organizationUuid: _v0,
          isLoading: _v1
        } = (0, _v94.useCurrentWorkspaceDetails)(),
        {
          parsedFilters: _v2,
          toggleSortBy: _v3,
          isValidating: _v4
        } = (0, _v22.useOrganizationMembersWithFilters)({
          organizationUuid: _v0
        }),
        _v5 = (0, _v8.getTranslations)(),
        {
          sort: _v6,
          direction: _v7
        } = _v2,
        _v8 = (0, _v11.useCallback)(() => {
          _v3("name");
        }, [_v3]);
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v97.Th, {
          children: (0, _v1.jsx)(_v40.Button, {
            variant: "tertiary",
            size: "sm",
            paddingInline: "md",
            onClick: _v8,
            rightIcon: (0, _v1.jsx)(_v100, {
              direction: "name" === _v6 ? _v7 : "asc"
            }),
            isDisabled: _v1 || _v4,
            children: (0, _v1.jsx)(_v3.Text, {
              variant: "heading-xs",
              children: _v5.Name
            })
          })
        }), (0, _v1.jsx)(_v97.Th, {})]
      });
    };
  var _v102 = _v0.i(0);
  let _v103 = () => {
    let {
        organizationUuid: _v0,
        isLoading: _v1
      } = (0, _v94.useCurrentWorkspaceDetails)(),
      {
        data: _v2,
        isLoading: _v3,
        parsedFilters: _v4,
        handleSetPageTo: _v5
      } = (0, _v22.useOrganizationMembersWithFilters)({
        organizationUuid: _v0
      }),
      {
        page: _v6
      } = _v4,
      _v7 = (0, _v11.useMemo)(() => {
        if (!_v1 && !_v3 && _v2?.total) return _v2?.total ?? 0;
      }, [_v1, _v3, _v2?.total]),
      _v8 = (0, _v11.useCallback)(_v0 => {
        _v6 !== _v0.page && _v5(_v0.page);
      }, [_v5, _v6]);
    return _v7 ? (0, _v1.jsx)(_v102.Pagination, {
      count: _v7,
      pageSize: _v20.ORG_MEMBERS_PER_PAGE_ITEM_COUNT,
      onPageChange: _v8,
      page: _v6
    }) : null;
  };
  var _v104 = _v0.i(0),
    _v105 = _v0.i(0);
  let _v106 = () => {
      let {
          organizationUuid: _v0
        } = (0, _v94.useCurrentWorkspaceDetails)(),
        {
          handleQueryBy: _v1,
          parsedFilters: _v2
        } = (0, _v22.useOrganizationMembersWithFilters)({
          organizationUuid: _v0
        }),
        _v3 = (0, _v8.getTranslations)(),
        {
          query: _v4
        } = _v2,
        [_v5, _v6] = (0, _v11.useState)(_v4),
        {
          debouncedCallback: _v7,
          cancel: _v8
        } = (0, _v104.useDebouncedCallback)(_v0 => _v1(_v0), 400);
      return (0, _v11.useEffect)(() => {
        _v4 || _v6("");
      }, [_v4]), (0, _v1.jsx)(_v105.SearchWithLeftIcon, {
        variant: "minimal",
        size: "md",
        placeholder: _v3.SearchMembers,
        value: _v5,
        onChange: _v0 => {
          _v8(), _v7(_v0.target.value), _v6(_v0.target.value);
        }
      });
    },
    _v107 = (0, _v9.default)(() => _v0.A(0).then(_v0 => _v0.OrganizationPendingMemberOptions), {
      loadableGenerated: {
        modules: [0]
      },
      loading: () => (0, _v1.jsx)(_v15.Spinner, {}),
      ssr: !1
    }),
    _v108 = (0, _v9.default)(() => _v0.A(0).then(_v0 => _v0.OrganizationPendingAdminOptions), {
      loadableGenerated: {
        modules: [0]
      },
      loading: () => (0, _v1.jsx)(_v15.Spinner, {}),
      ssr: !1
    }),
    _v109 = (0, _v9.default)(() => _v0.A(0).then(_v0 => _v0.OrganizationMemberOptions), {
      loadableGenerated: {
        modules: [0]
      },
      loading: () => (0, _v1.jsx)(_v15.Spinner, {}),
      ssr: !1
    }),
    _v110 = (0, _v9.default)(() => _v0.A(0).then(_v0 => _v0.OrganizationAdminOptions), {
      loadableGenerated: {
        modules: [0]
      },
      loading: () => (0, _v1.jsx)(_v15.Spinner, {}),
      ssr: !1
    }),
    _v111 = (0, _v9.default)(() => _v0.A(0).then(_v0 => _v0.WorkspaceAccessModal), {
      loadableGenerated: {
        modules: [0]
      },
      loading: () => (0, _v1.jsx)(_v15.Spinner, {}),
      ssr: !1
    }),
    _v112 = _v0 => [_v20.ORGANIZATION_ROLES.OWNER, _v20.ORGANIZATION_ROLES.ADMIN].some(_v0 => _v0.permissionLevel === _v0),
    _v113 = ({
      organizationUuid: _v0
    }) => {
      let _v1 = (0, _v16.useToast)(),
        _v2 = (0, _v8.getTranslations)(),
        _v3 = (0, _v33.getDisplayRoleMapping)(),
        _v4 = (0, _v10.useSearchParams)(),
        [_v5, _v6] = (0, _v11.useState)({
          isOpen: !1
        }),
        {
          data: _v7
        } = (0, _v21.useGetCurrentOrganizationInternalId)({
          organizationUuid: _v0
        }),
        {
          mutate: _v8
        } = (0, _v21.useGetCurrentOrganizationSize)({
          organizationUuid: _v0
        }),
        _v9 = (0, _v6.useViewer)(),
        _v10 = _v9?.user,
        {
          data: _v11
        } = (0, _v17.useGetSsoConnections)(() => _v7?.internalId ? {
          where: {
            userId: _v7.internalId
          },
          select: ["isActive"]
        } : null),
        _v12 = (0, _v11.useMemo)(() => !!_v11?.data.some(_v0 => _v0.isActive), [_v11?.data]),
        {
          data: _v13,
          mutate: _v14,
          isValidating: _v15,
          parsedFilters: _v16
        } = (0, _v22.useOrganizationMembersWithFilters)({
          organizationUuid: _v0
        }),
        _v17 = (0, _v11.useCallback)((_v0, _v1 = "neutral") => {
          _v1({
            duration: 0,
            title: _v0,
            variant: _v1
          });
        }, [_v1]),
        {
          triggerReminderEmail: _v18,
          isSendingReminder: _v19
        } = (({
          onError: _v0,
          onSuccess: _v1
        }) => {
          let _v2 = (0, _v11.useRef)(!1),
            [_v3, {
              loading: _v4,
              error: _v5,
              data: _v6
            }] = _v31(),
            _v7 = (0, _v11.useCallback)(_v0 => {
              let {
                orgUuid: _v1,
                orgMemberId: _v2
              } = (0, _v32.parseOrganizationMemberUri)(_v0);
              _v2.current || !_v1 || isNaN(_v2) || (_v3({
                select: ["uri"],
                where: {
                  orgUuid: _v1,
                  orgMemberId: _v2
                },
                variables: {
                  sendReminderEmail: !0
                }
              }), _v2.current = !0);
            }, [_v3]);
          return (0, _v11.useEffect)(() => {
            _v2.current && !_v4 && (_v5 && _v0 ? _v0() : _v6 && _v1 && _v1(_v6.uri), _v2.current = !1);
          }, [_v0, _v1, _v5, _v4, _v6]), {
            triggerReminderEmail: _v7,
            isSendingReminder: _v4
          };
        })({
          onSuccess: (0, _v11.useCallback)(_v0 => {
            _v17(_v2.ReminderEmailSent), _v14(void 0, {
              populateCache: (_v0, _v1) => ({
                ..._v1,
                data: _v1.data.map(_v0 => _v0.uri === _v0 && "pending" === _v0.status ? {
                  ..._v0,
                  recentlyReminded: !0
                } : _v0)
              }),
              revalidate: !1
            });
          }, [_v17, _v2.ReminderEmailSent, _v14]),
          onError: (0, _v11.useCallback)(() => {
            _v17(_v2.ErrorSendingReminderEmail, "warning");
          }, [_v17, _v2])
        }),
        _v20 = (0, _v11.useCallback)(_v0 => {
          _v0 && ((0, _v19.default)(window.location.origin + _v0) ? _v17(_v2.InviteLinkCopied, "neutral") : _v17(_v2.CopyInviteLinkError, "warning"));
        }, [_v17, _v2]),
        {
          mutate: _v21
        } = (0, _v21.useGetCurrentOrganizationSeatDetails)({
          organizationUuid: _v0
        }),
        {
          openRoleChangeModalForMemberAndRole: _v22,
          confirmationModalProps: _v23
        } = ((_v0, _v1) => {
          let {
              isOpen: _v2,
              onOpen: _v3,
              onClose: _v4
            } = (0, _v23.useDisclosure)(),
            {
              onRoleChangeSuccess: _v5,
              onRoleChangeFailure: _v6
            } = _v1 ?? {},
            _v7 = (0, _v11.useRef)(!1),
            [_v8, {
              loading: _v9,
              error: _v10,
              data: _v11
            }] = _v31(),
            {
              data: _v12
            } = (0, _v21.useGetCurrentOrganizationNameAndIcon)({
              organizationUuid: _v0
            }),
            [{
              selectedMember: _v13,
              newRole: _v14
            }, _v15] = (0, _v11.useState)({
              selectedMember: null,
              newRole: null
            });
          (0, _v11.useEffect)(() => {
            !_v9 && _v7.current && (_v10 ? _v6?.() : _v11 && _v5?.(_v11), _v4(), _v7.current = !1);
          }, [_v10, _v9, _v11, _v4, _v5, _v6, _v13]);
          let _v16 = (({
            selectedMember: _v0,
            newRole: _v1,
            orgName: _v2
          }) => {
            let _v3 = (0, _v8.getTranslations)();
            return _v0 && _v1 ? _v1 === _v20.ORGANIZATION_ROLE_CHANGE_OPTIONS.ADMIN ? {
              header: _v3.MakeOrganizationAdminOption,
              description: (0, _v1.jsx)(_v3.Text, {
                variant: "body-md",
                children: _v3.MakeOrganizationAdminDescription(_v0?.user?.name ?? _v0.email, _v2)
              })
            } : _v1 === _v20.ORGANIZATION_ROLE_CHANGE_OPTIONS.ORGANIZATION_MEMBER ? {
              header: _v3.RemoveFromOrganizationAdminsOption,
              description: (0, _v1.jsx)(_v3.Text, {
                variant: "body-md",
                children: _v3.RemoveFromOrganizationAdminsDescription(_v0?.user?.name ?? _v0.email)
              })
            } : {} : {};
          })({
            selectedMember: _v13,
            newRole: _v14,
            orgName: _v12?.displayName
          });
          return {
            openRoleChangeModalForMemberAndRole: (_v0, _v1) => {
              _v15({
                selectedMember: _v0,
                newRole: _v1
              }), _v3();
            },
            confirmationModalProps: {
              isOpen: _v2,
              onClose: _v4,
              onConfirmAction: () => {
                if (!_v13?.uri || !_v14 || !_v13?.permissionLevel || _v13?.permissionLevel === _v20.ORGANIZATION_ROLES.OWNER || _v14 === _v20.ORGANIZATION_ROLE_CHANGE_OPTIONS.ADMIN && _v13.permissionLevel === _v20.ORGANIZATION_ROLES.ADMIN || _v14 === _v20.ORGANIZATION_ROLE_CHANGE_OPTIONS.ORGANIZATION_MEMBER && _v13.permissionLevel === _v20.ORGANIZATION_ROLES.MEMBER) return;
                let {
                  orgUuid: _v0,
                  orgMemberId: _v1
                } = (0, _v32.parseOrganizationMemberUri)(_v13.uri);
                !_v0 || isNaN(_v1) || (_v7.current = !0, _v8({
                  select: ["uri", "permissionLevel", "role"],
                  where: {
                    orgUuid: _v0,
                    orgMemberId: _v1
                  },
                  variables: {
                    role: _v14
                  }
                }));
              },
              isLoading: _v9,
              header: _v16.header,
              children: _v16.description
            }
          };
        })(_v0, {
          onRoleChangeSuccess: _v0 => {
            (_v21(), !_v16.roles?.length || (_v0.permissionLevel !== _v20.ORGANIZATION_ROLES.MEMBER || _v16.roles.includes(_v20.ALLOWED_ROLES_FOR_INVITE.VIEWER)) && (_v0.permissionLevel !== _v20.ORGANIZATION_ROLES.ADMIN || _v16.roles.includes(_v20.ALLOWED_ROLES_FOR_INVITE.ADMIN))) ? (_v14(void 0, {
              populateCache: (_v0, _v1) => ({
                ..._v1,
                data: _v1.data.map(_v0 => _v0.uri === _v0.uri ? {
                  ..._v0,
                  permissionLevel: _v0.permissionLevel,
                  role: _v0.role
                } : _v0)
              }),
              revalidate: !1
            }), _v1({
              title: _v2.RoleUpdated,
              variant: "neutral",
              isClosable: !0
            })) : _v14();
          }
        }),
        {
          openRemoveMemberConfirmationModal: _v24,
          removalConfirmationModalProps: _v25
        } = ((_v0, _v1) => {
          let {
              isOpen: _v2,
              onOpen: _v3,
              onClose: _v4
            } = (0, _v23.useDisclosure)(),
            {
              onMemberDeleteSuccess: _v5,
              onMemberDeleteFailure: _v6
            } = _v1 || {},
            _v7 = (0, _v11.useRef)(!1),
            [_v8, _v9] = (0, _v11.useState)(null),
            {
              data: _v10
            } = (0, _v21.useGetCurrentOrganizationNameAndIcon)({
              organizationUuid: _v0
            }),
            [_v11, {
              loading: _v12,
              error: _v13
            }] = function () {
              let {
                  mutate: _v0
                } = (0, _v29.useSWRConfig)(),
                {
                  baseUrl: _v1,
                  jwt: _v2,
                  xVimeoPage: _v3,
                  locale: _v4
                } = (0, _v30.useGctlConfig)(),
                [_v5, _v6] = (0, _v24.useInternalState)();
              return [(0, _v11.useCallback)(async _v0 => {
                _v6({
                  type: "REQUEST"
                });
                try {
                  let _v0 = await _v0(`/organizations/${_v0.where.orgUuid}/members/${_v0.where.orgMemberId}${(0, _v24.serializeQuery)(_v0)}`, _v27({
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
            }(),
            _v14 = (0, _v11.useCallback)(_v0 => {
              _v9(_v0), _v3();
            }, [_v3]);
          (0, _v11.useEffect)(() => {
            !_v12 && _v7.current && (_v13 ? _v6?.() : _v5?.(), _v4(), _v7.current = !1);
          }, [_v13, _v12, _v4, _v6, _v5]);
          let _v15 = (({
              selectedMembers: _v0,
              organizationName: _v1
            }) => {
              let _v2 = (0, _v8.getTranslations)();
              if (!_v0 || !_v1) return {};
              if (1 === _v0.length) {
                let _v0 = _v0.at(0),
                  _v1 = _v0?.user?.name ?? _v0?.email;
                return {
                  header: _v2.RemoveMemberFromOrganization(_v1),
                  description: (0, _v1.jsx)(_v3.Text, {
                    variant: "body-md",
                    children: _v2.RemoveMemberFromOrganizationDescription(_v1, _v1)
                  })
                };
              }
            })({
              selectedMembers: _v8,
              organizationName: _v10?.displayName
            }),
            _v16 = (0, _v11.useCallback)(() => {
              if (_v8 && 1 === _v8.length) {
                let _v0 = _v8.at(0),
                  _v1 = _v0?.uri,
                  {
                    orgUuid: _v2,
                    orgMemberId: _v3
                  } = (0, _v32.parseOrganizationMemberUri)(_v1);
                _v11({
                  where: {
                    orgUuid: _v2,
                    orgMemberId: _v3
                  }
                }), _v7.current = !0;
              }
            }, [_v11, _v8]);
          return {
            openRemoveMemberConfirmationModal: _v14,
            removalConfirmationModalProps: {
              isOpen: _v2,
              onClose: _v4,
              header: _v15?.header,
              children: _v15?.description,
              isLoading: _v12,
              onConfirmAction: _v16
            }
          };
        })(_v0, {
          onMemberDeleteSuccess: () => {
            _v21(), _v8(), _v14(), _v1({
              title: _v2.MemberRemoved,
              variant: "neutral",
              isClosable: !0
            });
          }
        }),
        _v26 = (0, _v11.useCallback)(_v0 => {
          _v6({
            isOpen: !0,
            member: _v0
          });
        }, []),
        {
          switchSSO: _v27,
          switchSSOLoading: _v28
        } = ((_v0, _v1, _v2) => {
          let _v3 = (0, _v11.useRef)(!1),
            _v4 = (0, _v11.useRef)(null),
            _v5 = (0, _v11.useRef)(null),
            [_v6, {
              loading: _v7,
              error: _v8
            }] = _v31(),
            _v9 = (0, _v11.useCallback)(async (_v0, _v1) => {
              try {
                _v6({
                  where: {
                    orgUuid: _v0,
                    orgMemberId: (0, _v32.parseOrganizationMemberUri)(_v0.uri).orgMemberId
                  },
                  variables: {
                    excludeSso: _v1
                  },
                  select: ["uri", "excludeSso"]
                });
              } catch {
                _v2();
              }
              _v4.current = _v1, _v5.current = _v0, _v3.current = !0;
            }, [_v2, _v0, _v6]);
          return (0, _v11.useEffect)(() => {
            _v3.current && !_v7 && (_v3.current = !1, _v8 ? _v2() : null !== _v4.current && null !== _v5.current && _v1(_v5.current, _v4.current));
          }, [_v8, _v7, _v2, _v1]), {
            switchSSO: _v9,
            switchSSOLoading: _v7
          };
        })(_v0, (0, _v11.useCallback)((_v0, _v1) => {
          _v14(void 0, {
            populateCache: (_v0, _v1) => ({
              ..._v1,
              data: _v1.data.map(_v0 => _v0.uri === _v0.uri ? {
                ..._v0,
                excludeSso: _v1
              } : _v0)
            }),
            revalidate: !1
          }), _v1({
            title: _v2.SSOUpdatedMessage(_v0.user?.name ?? "", _v1),
            variant: "neutral"
          });
        }, [_v14, _v1, _v2]), (0, _v11.useCallback)(() => {
          _v1({
            title: _v2.SomethingWentWrong,
            variant: "warning"
          });
        }, [_v1, _v2])),
        {
          onClickManageWorkspaces: _v29,
          ..._v30
        } = (() => {
          let [_v0, _v1] = (0, _v11.useState)(null),
            {
              isOpen: _v2,
              onOpen: _v3,
              onClose: _v4
            } = (0, _v23.useDisclosure)(),
            _v5 = (0, _v11.useCallback)(_v0 => {
              _v1(_v0), _v3();
            }, [_v3]),
            _v6 = (0, _v11.useCallback)(() => {
              _v1(null), _v4();
            }, [_v4]);
          return {
            ...(0, _v11.useMemo)(() => ({
              isOpen: _v2,
              onClose: _v6
            }), [_v2, _v6]),
            member: _v0,
            onClickManageWorkspaces: _v5
          };
        })(),
        _v31 = !_v15 && _v13?.data?.length === 0,
        {
          query: _v32
        } = _v16,
        _v33 = (0, _v11.useCallback)(_v0 => _v0.permissionLevel !== _v20.ORGANIZATION_ROLES.OWNER && _v0.user?.uri !== _v10?.uri, [_v10?.uri]),
        _v34 = (0, _v11.useCallback)(_v0 => _v0.permissionLevel !== _v20.ORGANIZATION_ROLES.OWNER && _v0.user?.uri !== _v10?.uri, [_v10?.uri]),
        _v35 = _v13?.data?.filter(_v33).length ?? 0,
        _v36 = (0, _v11.useCallback)(_v0 => {
          let _v1 = {
              onClickManageWorkspaces: () => {
                _v29(_v0);
              },
              onClickMakeOrganizationAdmin: () => {
                _v22(_v0, _v20.ORGANIZATION_ROLE_CHANGE_OPTIONS.ADMIN);
              },
              onClickRemoveFromOrganization: () => {
                _v24([_v0]);
              },
              onClickManageGroups: () => _v26(_v0),
              onToggleSSO: () => _v27(_v0, !_v0.excludeSso),
              isSSOEnabled: !_v0.excludeSso,
              isSSOAvailable: _v12,
              isSSOSwitchLoading: _v28
            },
            _v2 = {
              onClickRemoveFromOrganizationAdmins: () => {
                _v22(_v0, _v20.ORGANIZATION_ROLE_CHANGE_OPTIONS.ORGANIZATION_MEMBER);
              },
              onClickRemoveFromOrganization: () => {
                _v24([_v0]);
              },
              onClickManageGroups: () => _v26(_v0),
              onToggleSSO: () => _v27(_v0, !_v0.excludeSso),
              isSSOEnabled: !_v0.excludeSso,
              isSSOAvailable: _v12,
              isSSOSwitchLoading: _v28
            },
            _v3 = {
              onClickCopyInviteLink: () => {
                _v20(_v0.inviteUrl);
              },
              onClickResendInvite: () => {
                _v18(_v0.uri);
              },
              isSendingReminder: _v19,
              reminderAlreadySent: _v0.recentlyReminded
            };
          return _v0.permissionLevel === _v20.ORGANIZATION_ROLES.MEMBER && "pending" === _v0.status ? (0, _v1.jsx)(_v107, {
            ..._v1,
            ..._v3
          }) : _v0.permissionLevel === _v20.ORGANIZATION_ROLES.ADMIN && "pending" === _v0.status ? (0, _v1.jsx)(_v108, {
            ..._v2,
            ..._v3
          }) : _v0.permissionLevel === _v20.ORGANIZATION_ROLES.MEMBER && "accepted" === _v0.status ? (0, _v1.jsx)(_v109, {
            ..._v1
          }) : _v0.permissionLevel === _v20.ORGANIZATION_ROLES.ADMIN && "accepted" === _v0.status ? (0, _v1.jsx)(_v110, {
            ..._v2
          }) : null;
        }, [_v29, _v26, _v20, _v24, _v22, _v18, _v19, _v27, _v12, _v28]);
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsxs)(_v34.SelectionProvider, {
          initTotalCount: _v35,
          children: [(0, _v1.jsxs)(_v2.VStack, {
            width: "100%",
            p: "md",
            backgroundColor: "surface",
            borderRadius: "lg",
            gap: "md",
            children: [(0, _v1.jsxs)(_v13.HStack, {
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              children: [(0, _v1.jsx)(_v12.Box, {
                maxWidth: (0, _v14.rem)(350),
                children: (0, _v1.jsx)(_v106, {})
              }), (0, _v1.jsx)(_v13.HStack, {
                gap: "md",
                children: (0, _v1.jsx)(_v96, {}, _v4.toString())
              })]
            }), (0, _v1.jsx)(_v89, {
              organizationMembers: _v13?.data ?? [],
              organizationUuid: _v0,
              revalidateOrgMembers: _v14
            }), _v31 ? (0, _v1.jsx)(_v37.NoResults, {
              query: _v32
            }) : (0, _v1.jsx)(_v35.MembersList, {
              members: _v13?.data ?? [],
              showCheckboxes: !0,
              shouldShowBadge: _v112,
              getBadge: _v0 => _v3[_v0.permissionLevel] ?? null,
              shouldBeSelectable: _v33,
              shouldShowOptionsMenu: _v34,
              getMenuContent: _v36,
              isLoading: _v15,
              headerSlot: (0, _v1.jsx)(_v101, {})
            })]
          }), (0, _v1.jsx)(_v103, {})]
        }), (0, _v1.jsx)(_v36.ConfirmationModal, {
          ..._v23
        }), (0, _v1.jsx)(_v38.RemovalConfirmationModal, {
          ..._v25
        }), null != _v30.member && (0, _v1.jsx)(_v111, {
          displayToast: _v17,
          ..._v30,
          member: _v30.member
        }), _v5.isOpen && _v5.member?.user && _v7?.internalId && (0, _v1.jsx)(_v18.UserGroupsModal, {
          teamMemberUri: _v5.member?.uri,
          ownerId: _v7.internalId,
          onClose: () => _v6({
            isOpen: !1
          }),
          userAvatar: _v5.member?.user.pictures?.sizes?.[1].link ?? "https://i.vimeocdn.com/portrait/defaults-blue_72x72.png",
          userTitle: _v5.member?.user.name ?? _v5.member?.email
        })]
      });
    };
  var _v114 = _v0.i(0),
    _v115 = _v0.i(0),
    _v116 = _v0.i(0);
  async function _v117({
    baseUrl: _v0,
    select: _v1,
    where: {
      orgUuid: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v25.measureLatency)("postOrganizationMembersExport", "POST", async () => {
      let _v0 = await fetch(`${_v0}/organizations/${_v2}/members/export?${(0, _v26.searchQueryString)(_v3)}&fields=${_v1.map(_v26.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "POST"
      });
      if (!_v0.ok) throw new _v26.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v26.deepCamelCase)(_v1);
    });
  }
  var _v118 = _v0.i(0);
  let _v119 = (0, _v9.default)(() => _v0.A(0).then(_v0 => _v0.ExportCSVModal), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v120 = () => {
      let _v0 = (0, _v6.useViewer)(),
        _v1 = _v0?.user?.email ?? "",
        _v2 = (0, _v8.getTranslations)(),
        {
          organizationUuid: _v3
        } = (0, _v94.useCurrentWorkspaceDetails)(),
        [_v4, {
          data: _v5,
          loading: _v6,
          error: _v7
        }] = function () {
          let {
              mutate: _v0
            } = (0, _v29.useSWRConfig)(),
            {
              baseUrl: _v1,
              jwt: _v2,
              xVimeoPage: _v3,
              locale: _v4
            } = (0, _v30.useGctlConfig)(),
            [_v5, _v6] = (0, _v24.useInternalState)();
          return [(0, _v11.useCallback)(async _v0 => {
            _v6({
              type: "REQUEST"
            });
            try {
              let _v0 = await _v0(`/organizations/${_v0.where.orgUuid}/members/export${(0, _v24.serializeQuery)(_v0)}`, _v117({
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
        }(),
        {
          parsedFilters: {
            query: _v8,
            sort: _v9,
            direction: _v10,
            roles: _v11,
            workspaceUris: _v12,
            inviteStatus: _v13
          }
        } = (0, _v22.useOrganizationMembersWithFilters)({
          organizationUuid: _v3
        }),
        {
          isOpen: _v14,
          onOpen: _v15,
          onClose: _v16
        } = (0, _v23.useDisclosure)(),
        _v17 = (0, _v16.useToast)();
      return (0, _v11.useEffect)(() => {
        if (!_v7) return;
        let _v0 = _v17({
          variant: "warning",
          title: _v2.ErrorExportingCSV,
          duration: 0
        });
        return () => _v17.close(_v0);
      }, [_v7, _v17, _v2.ErrorExportingCSV]), (0, _v11.useEffect)(() => {
        _v5 && _v15();
      }, [_v5, _v15]), (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v118.ExportCSVButton, {
          onClick: () => {
            _v1 && _v3 && _v4({
              select: [],
              where: {
                orgUuid: _v3
              },
              query: {
                query: _v8,
                sort: _v9,
                ...(_v9 ? {
                  direction: _v10
                } : {}),
                roles: _v11,
                workspaceUris: _v12,
                inviteStatus: 1 === _v13.length ? _v13[0] : void 0
              }
            });
          },
          isLoading: _v6,
          disabled: !_v1
        }), !!_v1 && (0, _v1.jsx)(_v119, {
          email: _v1,
          isOpen: _v14,
          onClose: _v16
        })]
      });
    };
  var _v121 = _v0.i(0);
  let _v122 = (0, _v9.default)(() => _v0.A(0).then(_v0 => _v0.InviteModal), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v123 = "org-invite-toast-msg",
    _v124 = ({
      standardAssigned: _v0,
      standardUnassigned: _v1,
      adminAssigned: _v2,
      adminUnassigned: _v3
    }) => {
      let _v4 = (0, _v8.getTranslations)();
      return (0, _v1.jsxs)(_v121.SeatCount.Container, {
        children: [(0, _v1.jsxs)(_v121.SeatCount.Group, {
          title: _v4.AdminSeats,
          tooltip: _v4.AdminSeatsTooltip,
          tooltipProps: {
            maxWidth: (0, _v14.rem)(235)
          },
          children: [(0, _v1.jsx)(_v121.SeatCount.Tile, {
            label: _v4.Assigned,
            value: _v2
          }), (0, _v1.jsx)(_v121.SeatCount.Tile, {
            label: _v4.Unassigned,
            value: _v3
          })]
        }), (0, _v1.jsxs)(_v121.SeatCount.Group, {
          title: _v4.StandardSeats,
          tooltip: _v4.StandardSeatsTooltip,
          tooltipProps: {
            maxWidth: (0, _v14.rem)(225)
          },
          children: [(0, _v1.jsx)(_v121.SeatCount.Tile, {
            label: _v4.Assigned,
            value: _v0
          }), (0, _v1.jsx)(_v121.SeatCount.Tile, {
            label: _v4.Unassigned,
            value: _v1
          })]
        })]
      });
    },
    _v125 = ({
      organizationUuid: _v0
    }) => {
      let [_v1, _v2] = (0, _v11.useState)(!1),
        _v3 = (0, _v8.getTranslations)(),
        {
          mutate: _v4
        } = (0, _v22.useOrganizationMembersWithFilters)({
          organizationUuid: _v0
        }),
        {
          mutate: _v5
        } = (0, _v21.useGetCurrentOrganizationSize)({
          organizationUuid: _v0
        }),
        {
          data: _v6,
          isValidating: _v7,
          mutate: _v8
        } = (0, _v21.useGetCurrentOrganizationSeatDetails)({
          organizationUuid: _v0
        }),
        _v9 = (0, _v6.useViewer)(),
        _v10 = _v6?.seatDetails?.[(0, _v114.default)(_v9?.teamUser?.ownerTeamSeatsMode ?? "admin_and_authenticated")] ?? {
          admin: {
            assigned: 0,
            unassigned: 0
          },
          authenticated: {
            assigned: 0,
            unassigned: 0
          }
        },
        _v11 = (0, _v16.useToast)(),
        _v12 = (0, _v11.useCallback)(() => {
          _v4(), _v5(), _v8();
        }, [_v4, _v5, _v8]);
      return (0, _v1.jsxs)(_v13.HStack, {
        width: "100%",
        backgroundColor: "surface",
        justify: "space-between",
        borderRadius: "md",
        paddingBlock: 4,
        paddingInline: 6,
        children: [_v1 && _v0 && (0, _v1.jsx)(_v122, {
          closeModal: () => _v2(!1),
          displayToast: (_v0, _v1 = "neutral") => {
            _v11.isActive(_v123) || _v11({
              title: _v0,
              variant: _v1,
              duration: 0,
              isClosable: !0,
              id: _v123
            });
          },
          isOpen: _v1,
          organizationUuid: _v0,
          onInviteSuccess: _v12
        }), _v7 ? (0, _v1.jsx)(_v126, {}) : (0, _v1.jsx)(_v124, {
          adminAssigned: _v10?.admin.assigned,
          adminUnassigned: _v10?.admin.unassigned,
          standardAssigned: _v10?.authenticated.assigned,
          standardUnassigned: _v10?.authenticated.unassigned
        }), (0, _v1.jsxs)(_v13.HStack, {
          spacing: 4,
          children: [(0, _v1.jsx)(_v120, {}), (0, _v1.jsx)(_v40.Button, {
            isDisabled: !_v0,
            fontWeight: "medium",
            leftIcon: (0, _v1.jsx)(_v116.PersonUserAdd, {}),
            onClick: () => {
              _v2(!0);
            },
            variant: "primary",
            children: _v3.Invite
          })]
        })]
      });
    },
    _v126 = () => (0, _v1.jsxs)(_v121.SeatCount.Container, {
      children: [(0, _v1.jsxs)(_v2.VStack, {
        children: [(0, _v1.jsx)(_v115.Skeleton, {
          minW: (0, _v14.rem)(150),
          maxH: "xs"
        }), (0, _v1.jsx)(_v115.Skeleton, {
          minW: (0, _v14.rem)(150),
          maxH: "lg"
        })]
      }), (0, _v1.jsxs)(_v2.VStack, {
        children: [(0, _v1.jsx)(_v115.Skeleton, {
          minW: (0, _v14.rem)(150),
          maxH: "xs"
        }), (0, _v1.jsx)(_v115.Skeleton, {
          minW: (0, _v14.rem)(150),
          maxH: "lg"
        })]
      })]
    });
  var _v127 = _v0.i(0);
  let _v128 = ({
    organizationUuid: _v0
  }) => {
    let _v1 = (0, _v8.getTranslations)();
    return (0, _v6.useViewer)() ? (0, _v1.jsxs)(_v2.VStack, {
      spacing: "lg",
      p: "lg",
      pb: "xl",
      children: [(0, _v1.jsx)(_v3.Text, {
        variant: "heading-lg",
        fontWeight: "medium",
        alignSelf: "flex-start",
        children: _v1.Members
      }), (0, _v1.jsx)(_v125, {
        organizationUuid: _v0
      }), (0, _v1.jsx)(_v113, {
        organizationUuid: _v0
      })]
    }) : (0, _v1.jsx)(_v5.default, {});
  };
  (0, _v4.withPageSetup)(_v127.getOrgUuidServerSideProps, {
    requireLogin: !0,
    inlineViewer: !0,
    noIndex: !0
  }), _v128.getLayout = (_v0, _v1) => (0, _v7.getLayout)(_v0, _v1), _v0.s(["__N_SSP", 0, !0, "default", 0, _v128], 0);
}