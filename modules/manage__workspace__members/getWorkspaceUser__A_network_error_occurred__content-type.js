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
    _v24 = _v0.i(0);
  async function _v25({
    baseUrl: _v0,
    select: _v1,
    where: {
      workspaceUuid: _v2,
      workspaceUserId: _v3
    },
    ..._v4
  }) {
    return (0, _v23.measureLatency)("getWorkspaceUser", "GET", async () => {
      let _v0 = await fetch(`${_v0}/workspaces/${_v2}/users/${_v3}?fields=${_v1.map(_v24.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v24.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v24.deepCamelCase)(_v1);
    });
  }
  async function _v26({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      workspaceUuid: _v3,
      workspaceUserId: _v4
    },
    ..._v5
  }) {
    return (0, _v23.measureLatency)("patchWorkspaceUser", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/workspaces/${_v3}/users/${_v4}?fields=${_v1.map(_v24.intoSnakeCase).join(",")}`, {
        ..._v5,
        method: "PATCH",
        body: JSON.stringify((0, _v24.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v24.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v24.deepCamelCase)(_v1);
    });
  }
  var _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0);
  function _v30(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v29.useGctlConfig)();
    return (0, _v27.default)(_v2 ? `/workspaces/${_v2.where.workspaceUuid}/users/${_v2.where.workspaceUserId}${(0, _v22.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v25({
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
  }
  "true" === _v21.default.env.STORYBOOK && (0, _v22.assignMswData)(_v30, {
    endpoint: "/workspaces/:workspaceUuid/users/:workspaceUserId",
    method: "GET"
  }), "true" === _v21.default.env.STORYBOOK && (0, _v22.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v28.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v29.useGctlConfig)(),
      [_v5, _v6] = (0, _v22.useInternalState)();
    return [(0, _v10.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/workspaces/${_v0.where.workspaceUuid}/users/${_v0.where.workspaceUserId}${(0, _v22.serializeQuery)(_v0)}`, _v25({
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
  }, {
    endpoint: "/workspaces/:workspaceUuid/users/:workspaceUserId",
    method: "GET"
  }), "true" === _v21.default.env.STORYBOOK && (0, _v22.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v28.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v29.useGctlConfig)(),
      [_v5, _v6] = (0, _v22.useInternalState)();
    return [(0, _v10.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/workspaces/${_v0.where.workspaceUuid}/users/${_v0.where.workspaceUserId}${(0, _v22.serializeQuery)(_v0)}`, _v26({
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
  }, {
    endpoint: "/workspaces/:workspaceUuid/users/:workspaceUserId",
    method: "PATCH"
  });
  var _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0);
  let _v35 = ({
      children: _v0,
      ..._v1
    }) => (0, _v1.jsx)(_v3.Text, {
      variant: "body-md",
      ..._v1,
      children: _v0
    }),
    _v36 = ({
      onClickShareFolder: _v0,
      onClickViewAccess: _v1,
      onClickViewActivity: _v2,
      onClickRemoveFromWorkspace: _v3,
      isShareFolderDisabled: _v4 = !0,
      isShareFolderVisible: _v5 = !0,
      isViewActivityVisible: _v6 = !1
    }) => {
      let _v7 = (0, _v6.getTranslations)();
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [_v5 && (0, _v1.jsx)(_v33.MenuItem, {
          isDisabled: _v4,
          onClick: _v0,
          children: (0, _v1.jsx)(_v35, {
            children: _v7.ShareFolders
          })
        }), (0, _v1.jsx)(_v33.MenuItem, {
          onClick: _v1,
          children: (0, _v1.jsx)(_v35, {
            children: _v7.ViewAccess
          })
        }), _v6 && (0, _v1.jsx)(_v33.MenuItem, {
          onClick: _v2,
          children: (0, _v1.jsx)(_v35, {
            children: _v7.ViewActivity
          })
        }), (0, _v1.jsx)(_v34.MenuDivider, {}), (0, _v1.jsx)(_v33.MenuItem, {
          onClick: _v3,
          children: (0, _v1.jsx)(_v35, {
            color: "status-destructive-primary",
            children: _v7.RemoveFromWorkspace
          })
        })]
      });
    },
    _v37 = ({
      onClickViewAccess: _v0,
      onClickViewActivity: _v1
    }) => {
      let _v2 = (0, _v6.getTranslations)();
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v33.MenuItem, {
          onClick: _v0,
          children: (0, _v1.jsx)(_v35, {
            children: _v2.ViewAccess
          })
        }), (0, _v1.jsx)(_v33.MenuItem, {
          onClick: _v1,
          children: (0, _v1.jsx)(_v35, {
            children: _v2.ViewActivity
          })
        })]
      });
    },
    _v38 = ({
      onClickResendInvite: _v0,
      onClickCopyInviteLink: _v1,
      onClickShareFolder: _v2,
      onClickRemoveFromWorkspace: _v3,
      isShareFolderDisabled: _v4 = !0,
      isShareFolderVisible: _v5 = !0,
      reminderAlreadySent: _v6 = !1,
      isSendingReminder: _v7 = !1
    }) => {
      let _v8 = (0, _v6.getTranslations)();
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v33.MenuItem, {
          isDisabled: _v6 || _v7,
          onClick: _v0,
          children: (0, _v1.jsx)(_v35, {
            children: _v6 ? _v8.ReminderSent : _v8.ResendInviteOption
          })
        }), (0, _v1.jsx)(_v33.MenuItem, {
          onClick: _v1,
          children: (0, _v1.jsx)(_v35, {
            children: _v8.CopyInviteLinkOption
          })
        }), _v5 && (0, _v1.jsx)(_v33.MenuItem, {
          isDisabled: _v4,
          onClick: _v2,
          children: (0, _v1.jsx)(_v35, {
            children: _v8.ShareFolders
          })
        }), (0, _v1.jsx)(_v34.MenuDivider, {}), (0, _v1.jsx)(_v33.MenuItem, {
          onClick: _v3,
          children: (0, _v1.jsx)(_v35, {
            color: "status-destructive-primary",
            children: _v8.RemoveFromWorkspace
          })
        })]
      });
    };
  var _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0);
  let _v43 = ({
    isOpen: _v0,
    isLoading: _v1,
    selectedMember: _v2,
    workspaceName: _v3,
    onClose: _v4,
    revalidateWorkspaceMembers: _v5,
    revalidateWorkspaceMemberCount: _v6
  }) => {
    let _v7 = (0, _v6.getTranslations)(),
      _v8 = _v2?.user?.name || _v2?.email || "",
      _v9 = _v2?.permissionLevel === _v40.WORKSPACE_ROLES.VIEWER,
      _v10 = (0, _v15.useToast)(),
      [_v11, {
        called: _v12,
        error: _v13,
        loading: _v14
      }] = (0, _v39.useDeleteWorkspaceMember)(),
      _v15 = (0, _v10.useCallback)(() => {
        if (!_v2) return;
        let {
          workspaceMemberId: _v0,
          workspaceUuid: _v1
        } = (0, _v41.parseWorkspaceMemberUri)(_v2?.uri);
        _v11({
          where: {
            workspaceUuid: _v1,
            workspaceMemberId: _v0
          }
        });
      }, [_v11, _v2]),
      _v16 = (0, _v10.useCallback)(() => {
        _v10.isActive("member-removed-failure") || _v10({
          duration: 0,
          title: _v7.MemberRemovedFromWorkspace(_v3),
          variant: "warning",
          id: "member-removed-failure"
        });
      }, [_v7, _v10, _v3]),
      _v17 = (0, _v10.useCallback)(() => {
        _v10.isActive("member-removed") || (_v10({
          duration: 0,
          title: _v7.MemberRemovedFromWorkspace(_v3),
          id: "member-removed"
        }), _v5(), _v6());
      }, [_v5, _v6, _v7, _v10, _v3]);
    return (0, _v10.useEffect)(() => {
      _v12 && !_v14 && (_v13 ? _v16() : _v17(), _v4());
    }, [_v12, _v13, _v14, _v4, _v16, _v17]), (0, _v1.jsx)(_v42.RemovalConfirmationModal, {
      header: _v7.RemoveMemberFromWorkspace(_v3),
      isLoading: _v1 || _v14,
      isOpen: _v0,
      modalProps: {
        closeOnOverlayClick: !1
      },
      onClose: _v4,
      onConfirmAction: _v15,
      width: 400,
      children: (0, _v1.jsx)(_v3.Text, {
        variant: "body-md",
        children: _v9 ? _v7.RemoveMemberFromWorkspaceViewerDescription(_v8, _v3) : _v7.RemoveMemberFromWorkspaceDescription(_v8, _v3)
      })
    });
  };
  var _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0);
  let _v47 = ({
    member: _v0,
    revalidateWorkspaceMembers: _v1,
    revalidateWorkspaceMemberCount: _v2,
    onSuccess: _v3
  }) => {
    let [_v4, {
        data: _v5,
        loading: _v6,
        called: _v7
      }] = (0, _v39.usePatchWorkspaceMember)(),
      _v8 = (0, _v10.useCallback)((_v0, _v1) => {
        if (!_v1) return;
        let {
          workspaceMemberId: _v2,
          workspaceUuid: _v3
        } = (0, _v41.parseWorkspaceMemberUri)(_v1.uri);
        _v4({
          select: ["email", "permissionLevel", "role"],
          where: {
            workspaceUuid: _v3,
            workspaceMemberId: _v2
          },
          variables: {
            role: _v0
          }
        });
      }, [_v4]);
    return (0, _v10.useEffect)(() => {
      _v5 && _v7 && _v5.email === _v0?.email && !_v6 && (_v1(void 0, {
        populateCache: (_v0, _v1) => ({
          ..._v1,
          data: _v1.data.map(_v0 => _v0.uri === _v0?.uri ? {
            ..._v0,
            role: _v5.role,
            permissionLevel: _v5.permissionLevel
          } : _v0)
        }),
        revalidate: !1
      }), _v2(), _v3?.());
    }, [_v5, _v7, _v6, _v0?.email, _v0?.uri]), {
      handleRoleChange: _v8,
      loading: _v6
    };
  };
  var _v48 = _v0.i(0),
    _v49 = _v0.i(0);
  let _v50 = ({
      tooltip: _v0
    }) => (0, _v1.jsx)(_v44.Tooltip, {
      label: _v0,
      shouldWrapChildren: !0,
      maxWidth: (0, _v13.rem)(235),
      placement: "bottom-start",
      children: (0, _v1.jsx)(_v46.InfoCircle, {})
    }),
    _v51 = ({
      member: _v0,
      marginRight: _v1,
      revalidateWorkspaceMembers: _v2,
      revalidateWorkspaceMemberCount: _v3,
      setConfirmationModalOpen: _v4
    }) => {
      let _v5,
        _v6 = (0, _v48.getRolesForRoleSelector)(),
        {
          handleRoleChange: _v7,
          loading: _v8
        } = _v47({
          member: _v0,
          revalidateWorkspaceMembers: _v2,
          revalidateWorkspaceMemberCount: _v3
        }),
        _v9 = _v0.orgPermissionLevel === _v40.ORGANIZATION_ROLES.OWNER || _v0.orgPermissionLevel === _v40.ORGANIZATION_ROLES.ADMIN;
      return _v8 ? (0, _v1.jsx)(_v45.Skeleton, {
        display: "flex",
        width: (0, _v13.rem)(150),
        height: (0, _v13.rem)(40)
      }) : (0, _v1.jsx)(_v49.RoleSelector, {
        allowedRoles: _v6,
        selectedRole: _v40.WS_MEMBER_PERMISSION_LEVEL_TO_ROLE_FOR_INVITE[_v0.permissionLevel],
        onRoleChange: _v0 => {
          _v0 === _v40.ALLOWED_ROLES_FOR_INVITE.ADMIN ? _v4(_v0) : _v7(_v0, _v0);
        },
        variant: "tertiary",
        isDisabled: _v9,
        mr: _v1,
        ...(_v9 ? {
          rightIcon: (0, _v1.jsx)(_v50, {
            tooltip: (_v5 = (0, _v6.getTranslations)(), _v0.orgPermissionLevel === _v40.ORGANIZATION_ROLES.OWNER ? _v5.WorkspaceMemberListOrgOwnerTooltip : _v5.WorkspaceMemberListOrgAdminsTooltip)
          })
        } : {}),
        children: _v0.role
      });
    };
  var _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0);
  let _v57 = _v0 => ["asc", "desc"].includes(_v0 ?? ""),
    _v58 = _v0 => ["name", "role"].includes(_v0 ?? ""),
    _v59 = ({
      workspaceUuid: _v0
    }) => {
      let [_v1, _v2] = (0, _v10.useState)(!1),
        _v3 = (0, _v8.useSearchParams)(),
        _v4 = (0, _v8.usePathname)(),
        {
          push: _v5
        } = (0, _v8.useRouter)(),
        _v6 = _v3.get("page"),
        _v7 = _v3.get("query"),
        _v8 = _v3.get("direction"),
        _v9 = _v3.get("sort"),
        _v10 = _v3.get("roles"),
        _v11 = _v3.get("status"),
        _v12 = (0, _v10.useMemo)(() => {
          let _v0 = _v6 && parseInt(_v6) ? parseInt(_v6) : 1,
            _v1 = _v7 && _v7?.trim() !== "" ? _v7?.trim() : void 0,
            _v2 = _v57(_v8) ? _v8 : "asc",
            _v3 = _v58(_v9) ? _v9 : void 0;
          return {
            page: _v0,
            query: _v1,
            direction: _v2,
            sort: _v3,
            roles: (0, _v41.validateRolesFilterParam)(_v10, _v40.WSP_MEMBERS_ROLES_FILTER_VALUES),
            inviteStatuses: (0, _v41.validateStatusFilterParam)(_v11)
          };
        }, [_v6, _v7, _v8, _v9, _v10, _v11]),
        _v13 = _v3.toString(),
        _v14 = (0, _v10.useCallback)(_v0 => {
          let _v1 = new URLSearchParams(_v13),
            _v2 = _v1.get("query"),
            _v3 = !1;
          (_v2?.trim() ?? "") !== _v0.trim() && (_v1.set("query", _v0), _v3 = !0), "" === _v0.trim() && (_v1.delete("query"), _v3 = !0), _v3 && (_v1.delete("sort"), _v1.delete("direction"), _v1.delete("page")), _v5((0, _v41.buildUrlWithSearchParams)(_v4, _v1));
        }, [_v5, _v13, _v4]),
        _v15 = (0, _v10.useCallback)(_v0 => {
          let _v1 = new URLSearchParams(_v13);
          _v0 > 1 ? _v1.set("page", _v0.toString()) : _v1.delete("page"), _v5((0, _v41.buildUrlWithSearchParams)(_v4, _v1));
        }, [_v5, _v4, _v13]),
        _v16 = (0, _v10.useCallback)(_v0 => {
          let _v1 = new URLSearchParams(_v13);
          if (_v58(_v0)) {
            let _v0 = _v1.get("sort");
            if (_v0 && _v0 === _v0) {
              let _v0 = _v1.get("direction"),
                _v1 = _v57(_v0) && "desc" === _v0 ? "asc" : "desc";
              _v1.set("direction", _v1);
            } else _v1.set("sort", _v0), _v1.set("direction", "asc");
          } else _v1.delete("sort"), _v1.delete("direction");
          _v1.delete("page"), _v5((0, _v41.buildUrlWithSearchParams)(_v4, _v1));
        }, [_v13, _v5, _v4]),
        _v17 = (0, _v10.useCallback)((_v0, _v1) => {
          let _v2 = new URLSearchParams(_v13);
          _v0.includes("roles") && (Array.isArray(_v1.roles) && _v1.roles && 0 !== _v1.roles.length ? _v2.set("roles", _v1.roles.join(",")) : _v2.delete("roles")), _v0.includes("status") && (Array.isArray(_v1.status) && _v1.status && 0 !== _v1.status.length ? _v2.set("status", _v1.status.join(",")) : _v2.delete("status")), _v0.length > 0 && (_v2.delete("page"), _v2.delete("sort"), _v2.delete("direction"), _v2.delete("query")), _v5((0, _v41.buildUrlWithSearchParams)(_v4, _v2));
        }, [_v5, _v4, _v13]),
        _v18 = (0, _v56.useGetWorkspaceMembers)(() => _v0 ? {
          select: ["uri", "inviteUrl", "permissionLevel", "orgPermissionLevel", "role", "email", "status", "user.uri", "user.name", "user.pictures.sizes.link", "recentlyReminded"],
          where: {
            workspaceUuid: _v0
          },
          query: {
            ..._v12,
            perPage: _v40.WORKSPACE_MEMBERS_PER_PAGE_ITEM_COUNT
          }
        } : null, {
          revalidateOnFocus: !1
        });
      return (0, _v10.useEffect)(() => {
        !async function () {
          try {
            let _v0 = _v18.error.res?.body,
              _v1 = new Response(_v0),
              _v2 = await _v1.json();
            _v2(_v2?.error_code === 0);
          } catch {
            _v2(!1);
          }
        }();
      }, [_v18.error]), {
        ..._v18,
        handleQueryBy: _v14,
        handleSetPageTo: _v15,
        toggleSortBy: _v16,
        parsedFilters: _v12,
        isPaginationError: _v1,
        handleFiltersChange: _v17
      };
    };
  var _v60 = _v0.i(0),
    _v61 = _v0.i(0);
  let _v62 = () => {
    let {
        workspaceUuid: _v0
      } = (0, _v55.useCurrentWorkspaceDetails)(),
      _v1 = (0, _v6.getTranslations)(),
      {
        handleFiltersChange: _v2,
        parsedFilters: {
          inviteStatuses: _v3,
          roles: _v4
        }
      } = _v59({
        workspaceUuid: _v0
      }),
      [_v5, _v6] = (0, _v10.useState)({
        status: _v3 ?? [],
        roles: _v4 ?? []
      }),
      {
        sendFilterTeamMembersListEvent: _v7
      } = (0, _v60.useTrackEvents)(),
      _v8 = (0, _v10.useMemo)(() => !_v5.status && !_v3 || [..._v5.status].sort().toString() === [...(_v3 ?? [])].sort().toString(), [_v5.status, _v3]),
      _v9 = (_v4?.length ?? 0) > 0 || (_v3?.length ?? 0) > 0,
      _v10 = (0, _v10.useMemo)(() => {
        if (_v4 && 0 !== _v4.length) {
          if (1 === _v4.length) switch (_v4[0]) {
            case "admin":
              return _v1.AdminRole;
            case "contributor_plus":
              return _v1.ContributorPlusRole;
            case "contributor":
              return _v1.ContributorRole;
            case "viewer":
              return _v1.ViewerRole;
            default:
              return;
          }
          return _v1.RoleFilterWithCount(_v4.length);
        }
      }, [_v1, _v4]),
      _v11 = (0, _v10.useMemo)(() => {
        if (_v3 && 0 !== _v3.length) {
          if (_v3.length > 1) return _v1.StatusFilterWithCount(_v3.length);
          if ("pending" === _v3[0]) return _v1.Pending;
          if ("accepted" === _v3[0]) return _v1.Accepted;
        }
      }, [_v1, _v3]),
      _v12 = (0, _v10.useCallback)(_v0 => {
        switch (_v0.filterKey) {
          case "roles":
            return _v5.roles.length;
          case "status":
            return _v5.status.length;
          default:
            return 0;
        }
      }, [_v5]),
      _v13 = (0, _v10.useMemo)(() => _v5.roles.length === (_v4?.length ?? 0) && [..._v5.roles].sort().toString() === [...(_v4 ?? [])].sort().toString(), [_v5.roles, _v4]),
      _v14 = (0, _v10.useCallback)((_v0 = []) => {
        _v2(_v0, _v5), _v0.includes("roles") && _v5.roles.length > 0 && _v7({
          filter: "role",
          filterValues: _v5.roles
        }), _v0.includes("status") && _v5.status.length > 0 && _v7({
          filter: "status",
          filterValues: _v5.status
        });
      }, [_v5, _v2, _v7]),
      _v15 = (0, _v10.useCallback)((_v0 = []) => {
        let _v1 = {
          ..._v5
        };
        _v0.includes("roles") && (_v1.roles = []), _v0.includes("status") && (_v1.status = []), _v2(_v0, _v1);
      }, [_v5, _v2]),
      _v16 = [{
        filterKey: "roles",
        filterName: _v1.RoleFilter,
        filterDisplayName: _v10,
        popoverContent: (0, _v1.jsx)(_v53.CheckboxGroup, {
          value: _v5.roles,
          onChange: _v0 => _v6(_v0 => ({
            ..._v0,
            roles: _v0.sort()
          })),
          children: (0, _v1.jsxs)(_v2.VStack, {
            align: "start",
            minWidth: (0, _v13.rem)(170),
            gap: "md",
            mx: "sm",
            my: "xs",
            children: [(0, _v1.jsx)(_v54.Checkbox, {
              size: "md",
              id: "admin",
              value: "admin",
              children: (0, _v1.jsx)(_v3.Text, {
                variant: "body-md",
                children: _v1.AdminRole
              })
            }), (0, _v1.jsx)(_v54.Checkbox, {
              size: "md",
              id: "contributor_plus",
              value: "contributor_plus",
              children: (0, _v1.jsx)(_v3.Text, {
                variant: "body-md",
                children: _v1.ContributorPlusRole
              })
            }), (0, _v1.jsx)(_v54.Checkbox, {
              size: "md",
              id: "contributor",
              value: "contributor",
              children: (0, _v1.jsx)(_v3.Text, {
                variant: "body-md",
                children: _v1.ContributorRole
              })
            }), (0, _v1.jsx)(_v54.Checkbox, {
              size: "md",
              id: "viewer",
              value: "viewer",
              children: (0, _v1.jsx)(_v3.Text, {
                variant: "body-md",
                children: _v1.ViewerRole
              })
            })]
          })
        }),
        filterFooterProps: {
          showClearAll: (_v4?.length ?? 0) > 0,
          onClickClearAll: () => {
            _v2(["roles"], {
              roles: []
            });
          },
          onClickApply: () => {
            _v2(["roles"], {
              roles: _v5.roles
            }), _v5.roles.length > 0 && _v7({
              filter: "role",
              filterValues: _v5.roles
            });
          },
          disableApply: _v13
        }
      }, {
        filterKey: "status",
        filterName: _v1.StatusFilter,
        filterDisplayName: _v11,
        popoverContent: (0, _v1.jsx)(_v53.CheckboxGroup, {
          value: _v5.status,
          onChange: _v0 => _v6(_v0 => ({
            ..._v0,
            status: _v0.sort()
          })),
          children: (0, _v1.jsxs)(_v2.VStack, {
            align: "start",
            minW: (0, _v13.rem)(200),
            gap: "md",
            mx: "sm",
            my: "xs",
            children: [(0, _v1.jsx)(_v54.Checkbox, {
              size: "md",
              id: "pending",
              value: "pending",
              children: (0, _v1.jsx)(_v3.Text, {
                variant: "body-md",
                children: _v1.Pending
              })
            }), (0, _v1.jsx)(_v54.Checkbox, {
              size: "md",
              id: "accepted",
              value: "accepted",
              children: (0, _v1.jsx)(_v3.Text, {
                variant: "body-md",
                children: _v1.Accepted
              })
            })]
          })
        }),
        filterFooterProps: {
          showClearAll: !!_v3,
          onClickClearAll: () => _v2(["status"], {
            status: []
          }),
          onClickApply: () => {
            _v2(["status"], {
              status: _v5.status
            }), _v5.status.length > 0 && _v7({
              filter: "status",
              filterValues: _v5.status
            });
          },
          disableApply: _v8
        }
      }];
    return (0, _v1.jsxs)(_v12.HStack, {
      children: [_v9 && (0, _v1.jsx)(_v52.Button, {
        variant: "tertiary",
        size: "sm",
        color: "text-secondary",
        textStyle: "heading-xs",
        onClick: () => _v2(["roles", "status"], {
          roles: [],
          status: []
        }),
        children: _v1.ClearFilters
      }), (0, _v1.jsx)(_v61.ResponsivePopoverFilters, {
        filters: _v16,
        getFilterCount: _v12,
        filterFooterProps: {
          onClickApply: _v14,
          onClickClearAll: _v15
        },
        breakpointConfig: _v40.WORKSPACE_FILTER_BREAKPOINTS
      })]
    });
  };
  var _v63 = _v0.i(0),
    _v64 = _v0.i(0),
    _v65 = _v0.i(0);
  let _v66 = ({
      direction: _v0
    }) => "desc" === _v0 ? (0, _v1.jsx)(_v64.ArrowDown, {}) : (0, _v1.jsx)(_v65.ArrowUp, {}),
    _v67 = () => {
      let {
          workspaceUuid: _v0,
          isLoading: _v1
        } = (0, _v55.useCurrentWorkspaceDetails)(),
        _v2 = (0, _v6.getTranslations)(),
        {
          parsedFilters: {
            sort: _v3,
            direction: _v4
          },
          toggleSortBy: _v5,
          isValidating: _v6
        } = _v59({
          workspaceUuid: _v0
        }),
        _v7 = _v1 || _v6,
        {
          sendSortTeamMembersListEvent: _v8
        } = (0, _v60.useTrackEvents)(),
        _v9 = (0, _v10.useCallback)(() => {
          _v5("name"), _v8({
            field: "name",
            direction: "asc" === _v4 ? "desc" : "asc"
          });
        }, [_v5, _v8, _v4]),
        _v10 = (0, _v10.useCallback)(() => {
          _v5("role"), _v8({
            field: "role",
            direction: "asc" === _v4 ? "desc" : "asc"
          });
        }, [_v5, _v8, _v4]);
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v63.Th, {
          children: (0, _v1.jsx)(_v52.Button, {
            variant: "tertiary",
            size: "sm",
            rightIcon: "role" !== _v3 ? (0, _v1.jsx)(_v66, {
              direction: "name" === _v3 ? _v4 : "asc"
            }) : void 0,
            color: "text-secondary",
            onClick: _v9,
            isDisabled: _v7,
            children: _v2.Name
          })
        }), (0, _v1.jsx)(_v63.Th, {
          children: (0, _v1.jsx)(_v52.Button, {
            variant: "tertiary",
            size: "sm",
            ...("role" === _v3 ? {
              rightIcon: (0, _v1.jsx)(_v66, {
                direction: _v4
              })
            } : {}),
            color: "text-secondary",
            onClick: _v10,
            isDisabled: _v7,
            children: _v2.RoleFilter
          })
        }), (0, _v1.jsx)(_v63.Th, {})]
      });
    };
  var _v68 = _v0.i(0);
  let _v69 = () => {
    let {
        workspaceUuid: _v0,
        isLoading: _v1
      } = (0, _v55.useCurrentWorkspaceDetails)(),
      {
        data: _v2,
        isLoading: _v3,
        parsedFilters: {
          page: _v4
        },
        handleSetPageTo: _v5,
        isPaginationError: _v6
      } = _v59({
        workspaceUuid: _v0
      }),
      _v7 = !_v1 && !_v3 && _v2?.total ? _v2.total : 0,
      _v8 = (0, _v10.useCallback)(_v0 => {
        _v4 !== _v0.page && _v5(_v0.page);
      }, [_v5, _v4]);
    return _v7 ? _v6 ? (0, _v1.jsx)(_v68.PaginationRoot, {
      children: (0, _v1.jsx)(_v68.PaginationItem, {
        type: "page",
        value: 1,
        onClick: () => _v5(1)
      })
    }) : (0, _v1.jsx)(_v68.Pagination, {
      count: _v7,
      pageSize: _v40.WORKSPACE_MEMBERS_PER_PAGE_ITEM_COUNT,
      onPageChange: _v8,
      page: _v4
    }) : null;
  };
  var _v70 = _v0.i(0),
    _v71 = _v0.i(0);
  let _v72 = () => {
    let {
        workspaceUuid: _v0,
        isLoading: _v1
      } = (0, _v55.useCurrentWorkspaceDetails)(),
      _v2 = (0, _v6.getTranslations)(),
      {
        parsedFilters: {
          query: _v3
        },
        handleQueryBy: _v4
      } = _v59({
        workspaceUuid: _v0
      }),
      [_v5, _v6] = (0, _v10.useState)(_v3),
      {
        debouncedCallback: _v7,
        cancel: _v8
      } = (0, _v70.useDebouncedCallback)(_v0 => _v4(_v0), 400);
    return (0, _v10.useEffect)(() => {
      _v3 || _v6("");
    }, [_v3]), (0, _v1.jsx)(_v71.SearchWithLeftIcon, {
      variant: "minimal",
      size: "sm",
      placeholder: _v2.SearchMembers,
      value: _v5,
      onChange: _v0 => {
        _v8(), _v7(_v0.target.value), _v6(_v0.target.value);
      },
      isDisabled: _v1
    });
  };
  var _v73 = _v0.i(0),
    _v74 = _v0.i(0),
    _v75 = _v0.i(0),
    _v76 = _v0.i(0);
  let _v77 = (0, _v7.default)(() => _v0.A(0).then(_v0 => _v0.WorkspaceMemberShareFolderModal), {
      loadableGenerated: {
        modules: [0]
      },
      ssr: !1
    }),
    _v78 = () => {
      let _v0 = (0, _v32.useViewer)(),
        _v1 = _v0?.user,
        _v2 = _v0?.teamUser,
        _v3 = (0, _v9.useRouter)(),
        [_v4, _v5] = (0, _v10.useState)(),
        _v6 = (0, _v8.useSearchParams)(),
        _v7 = (0, _v6.getTranslations)(),
        _v8 = (0, _v15.useToast)(),
        _v9 = (0, _v10.useCallback)((_v0, _v1 = "neutral") => {
          _v8({
            duration: 0,
            title: _v0,
            variant: _v1
          });
        }, [_v8]),
        {
          isOpen: _v10,
          onOpen: _v11,
          onClose: _v12
        } = (0, _v14.useDisclosure)(),
        {
          isOpen: _v13,
          onOpen: _v14,
          onClose: _v15
        } = (0, _v14.useDisclosure)(),
        {
          isOpen: _v16,
          onOpen: _v17,
          onClose: _v18
        } = (0, _v14.useDisclosure)(),
        {
          isLoading: _v19,
          workspaceUuid: _v20
        } = (0, _v55.useCurrentWorkspaceDetails)(),
        {
          data: _v21,
          isLoading: _v22,
          mutate: _v23,
          parsedFilters: {
            query: _v24
          }
        } = _v59({
          workspaceUuid: _v20
        }),
        _v25 = (0, _v18.useGetMePreferences)({
          select: ["toid"]
        }),
        _v26 = _v25.data?.toid ?? 0,
        {
          isLoading: _v27,
          data: _v28
        } = (0, _v19.useGetUserProjects)(() => _v26 ? {
          query: {
            excludePrivateToMeFolder: !0,
            perPage: 1,
            topLevelOnly: !0,
            permissionAction: "folder.view"
          },
          select: ["isPrivateToUser", "name", "privacy", "uri"],
          where: {
            userId: _v26
          }
        } : null),
        _v29 = !_v27 && (_v28?.total ?? 0) > 0,
        _v30 = (0, _v10.useCallback)(_v0 => {
          _v5(_v0), _v17();
        }, [_v17]),
        {
          data: _v31,
          mutate: _v32,
          isLoading: _v33
        } = (0, _v20.useGetWorkspace)(() => _v20 ? {
          select: ["displayName", "membershipCount.admins", "membershipCount.members", "rolesCount"],
          where: {
            workspaceUuid: _v20
          }
        } : null),
        _v34 = (0, _v41.getUserIdFromUri)(_v1?.uri),
        {
          data: _v35
        } = _v30(() => _v20 && _v34 ? {
          select: ["orgPermissionLevel", "permissionLevel"],
          where: {
            workspaceUuid: _v20,
            workspaceUserId: _v34
          }
        } : null),
        _v36 = _v35 ? _v35.orgPermissionLevel : _v40.ORGANIZATION_ROLES.MEMBER,
        _v37 = _v35 ? _v35.permissionLevel : _v40.WORKSPACE_ROLES.VIEWER,
        {
          handleRoleChange: _v38,
          loading: _v39
        } = _v47({
          member: _v4,
          revalidateWorkspaceMembers: _v23,
          revalidateWorkspaceMemberCount: _v32,
          onSuccess: _v15
        }),
        {
          capabilities: {
            hasContentSpaceEnabled: _v40
          },
          ready: _v41
        } = (0, _v17.useCapability)(["hasContentSpaceEnabled"], _v2?.ownerId ?? _v1?.id),
        _v42 = (0, _v10.useCallback)(_v0 => {
          _v5(_v0), _v11();
        }, [_v11]),
        _v43 = (0, _v10.useCallback)(_v0 => {
          if (!_v41) return;
          let {
              workspaceMemberId: _v1
            } = (0, _v41.parseWorkspaceMemberUri)(_v0.uri),
            _v2 = _v40 ? `/manage/workspace/members/${_v1}/team-library` : `/manage/workspace/members/${_v1}/shared-resources`;
          _v3.push(_v2);
        }, [_v40, _v41, _v3]),
        _v44 = (0, _v10.useCallback)(_v0 => !!(_v0.status === _v40.INVITE_STATUS.ACCEPTED && _v0?.user?.uri), []),
        _v45 = (0, _v10.useCallback)(_v0 => {
          _v44(_v0) ? _v3.push(`/analytics/teams/${_v26}${_v0?.user?.uri}`) : _v9(_v7.MemberDoesNotHaveActivityHistory, "warning");
        }, [_v9, _v44, _v3, _v7, _v26]),
        _v46 = (0, _v10.useCallback)(_v0 => {
          _v0 && ((0, _v31.default)(window.location.origin + _v0) ? _v9(_v7.InviteLinkCopied, "neutral") : _v9(_v7.CopyInviteLinkError, "warning"));
        }, [_v9, _v7]),
        {
          triggerReminderEmail: _v47,
          isSending: _v48
        } = (({
          onError: _v0,
          onSuccess: _v1
        }) => {
          let _v2 = (0, _v10.useRef)(!1),
            [_v3, {
              loading: _v4,
              error: _v5,
              data: _v6
            }] = (0, _v39.usePatchWorkspaceMember)(),
            _v7 = (0, _v10.useCallback)(_v0 => {
              let {
                workspaceUuid: _v1,
                workspaceMemberId: _v2
              } = (0, _v41.parseWorkspaceMemberUri)(_v0);
              _v2.current || !_v1 || isNaN(_v2) || (_v3({
                select: ["uri"],
                where: {
                  workspaceUuid: _v1,
                  workspaceMemberId: _v2
                },
                variables: {
                  sendReminderEmail: !0
                }
              }), _v2.current = !0);
            }, [_v3]);
          return (0, _v10.useEffect)(() => {
            _v2.current && !_v4 && (_v5 && _v0 ? _v0() : _v6 && _v1 && _v1(_v6.uri), _v2.current = !1);
          }, [_v0, _v1, _v5, _v4, _v6]), {
            triggerReminderEmail: _v7,
            isSending: _v4
          };
        })({
          onSuccess: (0, _v10.useCallback)(_v0 => {
            _v9(_v7.ReminderEmailSent), _v23(void 0, {
              populateCache: (_v0, _v1) => ({
                ..._v1,
                data: _v1.data.map(_v0 => _v0.uri === _v0 && "pending" === _v0.status ? {
                  ..._v0,
                  recentlyReminded: !0
                } : _v0)
              }),
              revalidate: !1
            });
          }, [_v9, _v7.ReminderEmailSent, _v23]),
          onError: (0, _v10.useCallback)(() => {
            _v9(_v7.ErrorSendingReminderEmail, "warning");
          }, [_v9, _v7])
        }),
        _v49 = (0, _v10.useCallback)(_v0 => "pending" === _v0.status ? (0, _v1.jsx)(_v38, {
          onClickCopyInviteLink: () => _v46(_v0.inviteUrl),
          reminderAlreadySent: _v0.recentlyReminded,
          onClickRemoveFromWorkspace: () => _v42(_v0),
          onClickResendInvite: () => _v47(_v0.uri),
          onClickShareFolder: () => _v30(_v0),
          isShareFolderDisabled: !_v29,
          isShareFolderVisible: _v0.permissionLevel !== _v40.WORKSPACE_ROLES.ADMIN,
          isSendingReminder: _v48
        }) : _v0.orgPermissionLevel === _v40.ORGANIZATION_ROLES.ADMIN ? (0, _v1.jsx)(_v37, {
          onClickViewAccess: () => _v43(_v0),
          onClickViewActivity: () => _v45(_v0)
        }) : (0, _v1.jsx)(_v36, {
          onClickShareFolder: () => _v30(_v0),
          onClickViewAccess: () => _v43(_v0),
          onClickViewActivity: () => _v45(_v0),
          onClickRemoveFromWorkspace: () => _v42(_v0),
          isShareFolderDisabled: !_v29,
          isShareFolderVisible: _v0.permissionLevel !== _v40.WORKSPACE_ROLES.ADMIN,
          isViewActivityVisible: _v44(_v0)
        }), [_v42, _v48, _v30, _v43, _v45, _v44, _v46, _v47, _v29]),
        _v50 = (0, _v10.useCallback)(_v0 => {
          if (_v0.user?.uri === _v1?.uri) return !1;
          let _v1 = _v0.status === _v40.INVITE_STATUS.ACCEPTED,
            _v2 = _v0.orgPermissionLevel,
            _v3 = _v1 && _v2 === _v40.ORGANIZATION_ROLES.ADMIN,
            _v4 = _v2 === _v40.ORGANIZATION_ROLES.MEMBER,
            _v5 = _v3 || _v4;
          switch (_v36) {
            case _v40.ORGANIZATION_ROLES.OWNER:
              return _v1 || _v4;
            case _v40.ORGANIZATION_ROLES.ADMIN:
              return _v5;
            default:
              return _v37 === _v40.WORKSPACE_ROLES.ADMIN && _v5;
          }
        }, [_v36, _v37, _v1?.uri]),
        _v51 = (0, _v10.useCallback)(_v0 => {
          _v5(_v0), _v14();
        }, [_v14]),
        _v52 = (0, _v10.useCallback)(_v0 => (0, _v1.jsx)(_v16.Td, {
          children: (0, _v1.jsx)(_v51, {
            member: _v0,
            revalidateWorkspaceMembers: _v23,
            revalidateWorkspaceMemberCount: _v32,
            setConfirmationModalOpen: _v51
          })
        }), [_v23, _v32, _v51]),
        _v53 = !_v22 && _v21?.data.length === 0;
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsxs)(_v2.VStack, {
          width: "100%",
          gap: 0,
          children: [(0, _v1.jsx)(_v11.Box, {
            width: "100%",
            backgroundColor: "background",
            position: "sticky",
            top: 0,
            zIndex: "docked",
            children: (0, _v1.jsxs)(_v12.HStack, {
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "surface",
              borderTopLeftRadius: "lg",
              borderTopRightRadius: "lg",
              p: "md",
              children: [(0, _v1.jsx)(_v11.Box, {
                maxWidth: (0, _v13.rem)(350),
                children: (0, _v1.jsx)(_v72, {})
              }), (0, _v1.jsx)(_v12.HStack, {
                gap: "md",
                children: (0, _v1.jsx)(_v62, {}, _v6.toString())
              })]
            })
          }), (0, _v1.jsx)(_v73.SelectionProvider, {
            initTotalCount: 0,
            children: _v53 ? (0, _v1.jsx)(_v11.Box, {
              backgroundColor: "surface",
              borderBottomLeftRadius: "lg",
              borderBottomRightRadius: "lg",
              width: "100%",
              children: (0, _v1.jsx)(_v76.NoResults, {
                query: _v24
              })
            }) : (0, _v1.jsx)(_v11.Box, {
              p: "md",
              pt: 0,
              width: "100%",
              backgroundColor: "surface",
              borderBottomLeftRadius: "lg",
              borderBottomRightRadius: "lg",
              children: (0, _v1.jsx)(_v74.MembersList, {
                showCheckboxes: !1,
                members: _v21?.data ?? [],
                shouldShowOptionsMenu: _v50,
                getMemberAdditionalActions: _v52,
                getMenuContent: _v49,
                headerSlot: (0, _v1.jsx)(_v67, {}),
                isLoading: _v19 || _v22,
                loadingMemberSkeletonCount: _v40.WORKSPACE_MEMBERS_PER_PAGE_ITEM_COUNT,
                isHeaderSticky: !0,
                headerHeight: (0, _v13.rem)(64)
              })
            })
          })]
        }), (0, _v1.jsx)(_v69, {}), _v10 && _v4 && (0, _v1.jsx)(_v43, {
          isOpen: _v10,
          isLoading: _v33,
          selectedMember: _v4,
          workspaceName: _v31?.displayName ?? "",
          onClose: _v12,
          revalidateWorkspaceMembers: _v23,
          revalidateWorkspaceMemberCount: _v32
        }), _v13 && (0, _v1.jsx)(_v75.ConfirmationModal, {
          isOpen: _v13,
          modalHeaderContent: (0, _v1.jsx)(_v3.Text, {
            variant: "body-xl",
            fontSize: (0, _v13.rem)(20),
            children: _v7.MakeWorkspaceAdminOption(_v4?.user?.name ?? _v4?.email)
          }),
          onClose: _v15,
          onConfirmAction: () => {
            _v38(_v40.ALLOWED_ROLES_FOR_INVITE.ADMIN, _v4);
          },
          isLoading: _v39,
          children: (0, _v1.jsx)(_v3.Text, {
            variant: "body-md",
            children: _v7.MakeWorkspaceAdminDescription(_v4?.user?.name ?? _v4?.email, _v31?.displayName ?? "")
          })
        }), _v16 && _v4 && (0, _v1.jsx)(_v77, {
          displayToast: _v9,
          isOpen: _v16,
          onClose: _v18,
          workspaceMemberUri: _v4.uri,
          workspaceOwnerId: _v26
        })]
      });
    };
  var _v79 = _v0.i(0);
  async function _v80({
    baseUrl: _v0,
    where: {
      workspaceUuid: _v1
    },
    query: _v2,
    ..._v3
  }) {
    return (0, _v23.measureLatency)("postWorkspaceMembersExport", "POST", async () => {
      let _v0 = await fetch(`${_v0}/workspaces/${_v1}/members/export?${(0, _v24.searchQueryString)(_v2)}`, {
        ..._v3,
        method: "POST"
      });
      if (!_v0.ok) throw new _v24.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v24.deepCamelCase)(_v1);
    });
  }
  function _v81() {
    let {
        mutate: _v0
      } = (0, _v28.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v29.useGctlConfig)(),
      [_v5, _v6] = (0, _v22.useInternalState)();
    return [(0, _v10.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/workspaces/${_v0.where.workspaceUuid}/members/export${(0, _v22.serializeQuery)(_v0)}`, _v80({
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
  "true" === _v21.default.env.STORYBOOK && (0, _v22.assignMswData)(_v81, {
    endpoint: "/workspaces/:workspaceUuid/members/export",
    method: "POST"
  });
  var _v82 = _v0.i(0);
  let _v83 = (0, _v7.default)(() => _v0.A(0).then(_v0 => _v0.ExportCSVModal), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v84 = () => {
      let {
          pathname: _v0
        } = (0, _v9.useRouter)(),
        _v1 = (0, _v32.useViewer)(),
        _v2 = _v1?.user?.email ?? "",
        _v3 = (0, _v6.getTranslations)(),
        {
          sendWorkspaceMemberExportEvent: _v4
        } = (0, _v60.useTrackEvents)(),
        {
          workspaceUuid: _v5
        } = (0, _v55.useCurrentWorkspaceDetails)(),
        [_v6, {
          data: _v7,
          loading: _v8,
          error: _v9
        }] = _v81(),
        {
          parsedFilters: {
            query: _v10,
            sort: _v11,
            direction: _v12,
            roles: _v13,
            inviteStatuses: _v14
          }
        } = _v59({
          workspaceUuid: _v5
        }),
        {
          isOpen: _v15,
          onOpen: _v16,
          onClose: _v17
        } = (0, _v14.useDisclosure)(),
        _v18 = (0, _v15.useToast)();
      return (0, _v10.useEffect)(() => {
        if (!_v9) return;
        let _v0 = _v18({
          variant: "warning",
          title: _v3.ErrorExportingCSV,
          duration: 0
        });
        return () => _v18.close(_v0);
      }, [_v9, _v18, _v3.ErrorExportingCSV]), (0, _v10.useEffect)(() => {
        _v7 && _v16();
      }, [_v7, _v16]), (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v82.ExportCSVButton, {
          onClick: () => {
            _v2 && _v5 && (_v6({
              where: {
                workspaceUuid: _v5
              },
              query: {
                query: _v10,
                sort: _v11,
                ...(_v11 ? {
                  direction: _v12
                } : {}),
                roles: _v13,
                inviteStatuses: _v14.length > 0 ? _v14 : void 0
              }
            }), _v4({
              path: _v0
            }));
          },
          isLoading: _v8,
          disabled: !_v2
        }), !!_v2 && (0, _v1.jsx)(_v83, {
          email: _v2,
          isOpen: _v15,
          onClose: _v17
        })]
      });
    };
  var _v85 = _v0.i(0),
    _v86 = _v0.i(0),
    _v87 = _v0.i(0),
    _v88 = _v0.i(0),
    _v89 = _v0.i(0),
    _v90 = _v0.i(0),
    _v91 = _v0.i(0),
    _v92 = _v0.i(0),
    _v93 = _v0.i(0);
  let _v94 = ({
    emails: _v0,
    handleAddErrorToEmail: _v1,
    handleChangeIsRequestInProgress: _v2,
    handleEmailAddition: _v3,
    handleEmailRemoval: _v4,
    handleErrorChange: _v5,
    workspaceUuid: _v6,
    onEmailAddressHeightChange: _v7
  }) => {
    let [_v8, _v9] = (0, _v10.useState)(""),
      [_v10, {
        called: _v11,
        data: _v12,
        loading: _v13
      }] = (0, _v56.useGetWorkspaceMembersLazy)(),
      _v14 = (0, _v6.getTranslations)(),
      _v15 = () => {
        let _v0 = _v8.trim();
        if (!_v0) return;
        let _v1 = [],
          _v2 = _v14.IsNotAValidEmailAddress(_v0);
        _v92.EMAIL_REGEX.test(_v0) || _v1.push(_v2), _v0.some(_v0 => _v0.value === _v0) && _v1.push(_v14.HasBeenEnteredMultipleTimes(_v0)), _v3({
          errorMessages: _v1,
          id: Date.now(),
          value: _v0
        }), _v9(""), _v1.includes(_v2) || (_v2(!0), _v10({
          select: ["email"],
          query: {
            page: 1,
            perPage: 1,
            query: _v0
          },
          where: {
            workspaceUuid: _v6
          }
        }));
      };
    return (0, _v10.useEffect)(() => {
      _v11 && !_v13 && _v12 && (_v12 && _v12.data.forEach(_v0 => {
        let _v1 = _v0.email;
        if (!_v1) return;
        let _v2 = _v14.IsAlreadyAMember(_v1);
        _v1(_v1, _v2);
      }), _v2(!1));
    }, [_v11, _v12, _v1, _v2, _v13, _v14]), (0, _v1.jsx)(_v93.EmailAddressInput, {
      currentEmail: _v8,
      emails: _v0,
      handleOnBlur: _v15,
      handleEmailChange: _v0 => {
        _v9(_v0.target.value);
      },
      handleEmailRemoval: _v4,
      handleErrorChange: _v5,
      validateAndStoreEmail: _v15,
      onEmailAddressHeightChange: _v7
    });
  };
  var _v95 = _v0.i(0);
  let _v96 = "inviteToWorkspace",
    _v97 = "shareFolders",
    _v98 = {
      applicableFolderPolicies: [],
      currentStep: _v96,
      emails: [],
      hasErrors: !0,
      invitationNote: "",
      invitedWorkspaceMembers: [],
      isReqInProgress: !1,
      selectedFoldersTree: {
        isSelected: !1,
        children: {}
      },
      selectedPermissionPolicy: null,
      selectedRole: _v40.ALLOWED_ROLES_FOR_INVITE.VIEWER
    },
    _v99 = "ADD_EMAIL",
    _v100 = "ADD_ERROR_TO_EMAIL",
    _v101 = "ADD_INVITED_WORKSPACE_MEMBERS",
    _v102 = "CHANGE_SELECTED_FOLDERS_TREE",
    _v103 = "CHANGE_SELECTED_PERMISSION_POLICY",
    _v104 = "REMOVE_EMAIL",
    _v105 = "SET_HAS_ERRORS",
    _v106 = "SET_INVITATION_NOTE",
    _v107 = "SET_IS_REQ_IN_PROGRESS",
    _v108 = "SET_SELECTED_ROLE",
    _v109 = "UPDATE_CURRENT_STEP_TO_NEXT";
  function _v110(_v0, _v1) {
    switch (_v1.type) {
      case _v99:
        return {
          ..._v0,
          emails: [..._v0.emails, _v1.payload]
        };
      case _v100:
        return {
          ..._v0,
          emails: _v0.emails.map(_v0 => _v0.value !== _v1.payload.email || _v0.errorMessages.includes(_v1.payload.errorMessage) ? _v0 : {
            ..._v0,
            errorMessages: [..._v0.errorMessages, _v1.payload.errorMessage]
          })
        };
      case _v101:
        let _v0 = [..._v0.invitedWorkspaceMembers, ..._v1.payload],
          _v1 = (0, _v95.getApplicableFolderPolicies)(_v0),
          _v2 = _v1.length ? _v1[0] : null;
        return {
          ..._v0,
          applicableFolderPolicies: _v1,
          invitedWorkspaceMembers: _v0,
          selectedPermissionPolicy: _v2
        };
      case _v102:
        let _v3 = Object.keys(_v1.payload.children).length > 0;
        return {
          ..._v0,
          selectedFoldersTree: _v1.payload,
          hasErrors: !_v3
        };
      case _v103:
        return {
          ..._v0,
          selectedPermissionPolicy: _v1.payload
        };
      case _v104:
        return {
          ..._v0,
          emails: _v0.emails.filter(_v0 => _v0.id !== _v1.payload)
        };
      case _v105:
        return {
          ..._v0,
          hasErrors: _v1.payload
        };
      case _v106:
        return {
          ..._v0,
          invitationNote: _v1.payload
        };
      case _v107:
        return {
          ..._v0,
          isReqInProgress: _v1.payload
        };
      case _v108:
        return {
          ..._v0,
          selectedRole: _v1.payload
        };
      case _v109:
        return {
          ..._v0,
          currentStep: (_v0 => {
            if (_v0 === _v96) return _v97;
            throw Error(`Unknown step: ${_v0}`);
          })(_v0.currentStep),
          hasErrors: !0
        };
      default:
        return _v0;
    }
  }
  var _v111 = _v0.i(0),
    _v112 = _v0.i(0);
  let _v113 = ({
      handleAddErrorToEmail: _v0,
      handleChangeIsRequestInProgress: _v1,
      handleChangeSelectedFoldersTree: _v2,
      handleChangeSelectedPermissionPolicy: _v3,
      handleEmailAddition: _v4,
      handleEmailRemoval: _v5,
      handleErrorChange: _v6,
      handleInvitationNoteChange: _v7,
      inviteData: _v8,
      onRoleChange: _v9,
      ownerId: _v10,
      workspaceUuid: _v11
    }) => {
      switch (_v8.currentStep) {
        case _v96:
          return (0, _v1.jsx)(_v114, {
            handleAddErrorToEmail: _v0,
            handleChangeIsRequestInProgress: _v1,
            handleEmailAddition: _v4,
            handleEmailRemoval: _v5,
            handleErrorChange: _v6,
            handleInvitationNoteChange: _v7,
            inviteData: _v8,
            onRoleChange: _v9,
            workspaceUuid: _v11
          });
        case _v97:
          return (0, _v1.jsx)(_v115, {
            handleChangeSelectedFoldersTree: _v2,
            handleChangeSelectedPermissionPolicy: _v3,
            inviteData: _v8,
            ownerId: _v10
          });
        default:
          throw Error(`Unknown modal step: ${_v8.currentStep}`);
      }
    },
    _v114 = ({
      handleAddErrorToEmail: _v0,
      handleChangeIsRequestInProgress: _v1,
      handleEmailAddition: _v2,
      handleEmailRemoval: _v3,
      handleErrorChange: _v4,
      handleInvitationNoteChange: _v5,
      inviteData: _v6,
      onRoleChange: _v7,
      workspaceUuid: _v8
    }) => {
      let _v9 = (0, _v48.getRolesForRoleSelector)(),
        [_v10, _v11] = (0, _v10.useState)(40);
      return (0, _v1.jsxs)(_v91.ModalBody, {
        display: "flex",
        flexDirection: "column",
        gap: "md",
        minH: (0, _v13.rem)(132),
        paddingBottom: "0",
        paddingTop: "md",
        px: "sm",
        children: [(0, _v1.jsxs)(_v12.HStack, {
          width: "100%",
          gap: "sm",
          alignItems: "flex-start",
          children: [(0, _v1.jsx)(_v94, {
            emails: _v6.emails,
            handleAddErrorToEmail: _v0,
            handleChangeIsRequestInProgress: _v1,
            handleEmailAddition: _v2,
            handleEmailRemoval: _v3,
            handleErrorChange: _v4,
            onEmailAddressHeightChange: _v11,
            workspaceUuid: _v8
          }), (0, _v1.jsx)(_v11.Box, {
            paddingTop: "lg",
            mt: (0, _v13.rem)(_v10 / 2),
            children: (0, _v1.jsx)(_v49.RoleSelector, {
              allowedRoles: _v9,
              borderRadius: "md",
              height: (0, _v13.rem)(40),
              maxWidth: (0, _v13.rem)(180),
              onRoleChange: _v7,
              selectedRole: _v6.selectedRole
            })
          })]
        }), (0, _v1.jsx)(_v111.AddInvitationNote, {
          handleInvitationNoteChange: _v5,
          invitationNote: _v6.invitationNote
        })]
      });
    },
    _v115 = ({
      handleChangeSelectedFoldersTree: _v0,
      handleChangeSelectedPermissionPolicy: _v1,
      inviteData: _v2,
      ownerId: _v3
    }) => {
      let _v4 = (0, _v6.getTranslations)();
      return (0, _v1.jsx)(_v91.ModalBody, {
        display: "flex",
        flexDirection: "column",
        gap: "md",
        minH: (0, _v13.rem)(132),
        paddingBottom: "0",
        paddingTop: "xs",
        px: "sm",
        children: (0, _v1.jsx)(_v90.AddToFoldersModalBodyContent, {
          applicableFolderPolicies: _v2.applicableFolderPolicies,
          error: null,
          header: (0, _v1.jsx)(_v112.AddToFolderModalBodyHeader, {}),
          ownerId: _v3,
          searchPlaceHolderText: _v4.Search,
          selectedFoldersTree: _v2.selectedFoldersTree,
          selectedPermissionPolicy: _v2.selectedPermissionPolicy,
          setSelectedFoldersTree: _v0,
          setSelectedPermissionPolicy: _v1,
          teamUsers: _v2.invitedWorkspaceMembers
        })
      });
    };
  var _v116 = _v0.i(0);
  let _v117 = ({
      called: _v0,
      closeModal: _v1,
      handlePrimaryButtonClick: _v2,
      inviteData: _v3,
      loading: _v4
    }) => {
      switch (_v3.currentStep) {
        case _v96:
          return (0, _v1.jsx)(_v118, {
            called: _v0,
            closeModal: _v1,
            handlePrimaryButtonClick: _v2,
            hasAnyEmails: _v3.emails.length > 0,
            hasErrors: _v3.hasErrors,
            isReqInProgress: _v3.isReqInProgress,
            loading: _v4
          });
        case _v97:
          return (0, _v1.jsx)(_v119, {
            closeModal: _v1,
            loading: _v4,
            handlePrimaryButtonClick: _v2,
            hasErrors: _v3.hasErrors
          });
        default:
          throw Error(`Unknown modal step: ${_v3.currentStep}`);
      }
    },
    _v118 = ({
      called: _v0,
      closeModal: _v1,
      handlePrimaryButtonClick: _v2,
      hasAnyEmails: _v3,
      hasErrors: _v4,
      isReqInProgress: _v5,
      loading: _v6
    }) => {
      let _v7 = (0, _v6.getTranslations)();
      return (0, _v1.jsxs)(_v116.ModalFooter, {
        p: "sm",
        children: [(0, _v1.jsx)(_v52.Button, {
          size: "md",
          variant: "tertiary",
          onClick: _v1,
          disabled: _v0 || _v6 || _v5,
          children: _v7.Cancel
        }), (0, _v1.jsx)(_v52.Button, {
          size: "md",
          variant: "primary",
          isDisabled: _v4 || !_v3,
          isLoading: _v6 || _v5,
          onClick: _v2,
          children: _v7.Invite
        })]
      });
    },
    _v119 = ({
      closeModal: _v0,
      loading: _v1,
      handlePrimaryButtonClick: _v2,
      hasErrors: _v3
    }) => {
      let _v4 = (0, _v6.getTranslations)();
      return (0, _v1.jsxs)(_v116.ModalFooter, {
        children: [(0, _v1.jsx)(_v52.Button, {
          isDisabled: _v1,
          onClick: _v0,
          size: "md",
          variant: "tertiary",
          children: _v4.Skip
        }), (0, _v1.jsx)(_v52.Button, {
          isDisabled: _v3,
          isLoading: _v1,
          onClick: _v2,
          size: "md",
          variant: "primary",
          children: _v4.Share
        })]
      });
    };
  var _v120 = _v0.i(0);
  let _v121 = ({
      currentModalStep: _v0
    }) => {
      switch (_v0) {
        case _v96:
          return (0, _v1.jsx)(_v122, {});
        case _v97:
          return (0, _v1.jsx)(_v123, {});
        default:
          throw Error(`Unknown modal step: ${_v0}`);
      }
    },
    _v122 = () => {
      let _v0 = (0, _v6.getTranslations)();
      return (0, _v1.jsx)(_v120.ModalHeader, {
        fontSize: "heading-md",
        p: 0,
        children: _v0.InviteMember
      });
    },
    _v123 = () => {
      let _v0 = (0, _v6.getTranslations)();
      return (0, _v1.jsxs)(_v120.ModalHeader, {
        pb: "xs",
        px: "sm",
        children: [(0, _v1.jsx)(_v3.Text, {
          variant: "heading-md",
          children: _v0.ShareFolders
        }), (0, _v1.jsx)(_v3.Text, {
          variant: "body-md",
          children: _v0.ShareFoldersDescription
        })]
      });
    };
  var _v124 = _v0.i(0);
  let _v125 = ["applicablePermissionPolicies.folder.createdOn", "applicablePermissionPolicies.folder.displayDescription", "applicablePermissionPolicies.folder.displayName", "applicablePermissionPolicies.folder.modifiedOn", "applicablePermissionPolicies.folder.name", "applicablePermissionPolicies.folder.permissionActions", "applicablePermissionPolicies.folder.uri", "email", "permissionLevel", "role", "uri"],
    _v126 = ({
      closeModal: _v0,
      isOpen: _v1,
      workspaceUuid: _v2,
      workspaceName: _v3,
      onInviteSuccess: _v4
    }) => {
      let _v5 = (0, _v6.getTranslations)(),
        {
          handleAddErrorToEmail: _v6,
          handleAddInvitedWorkspaceMembers: _v7,
          handleChangeSelectedFoldersTree: _v8,
          handleChangeSelectedPermissionPolicy: _v9,
          handleEmailAddition: _v10,
          handleEmailRemoval: _v11,
          inviteData: _v12,
          setHasErrors: _v13,
          setInvitationNote: _v14,
          setIsReqInProgress: _v15,
          setSelectedRole: _v16,
          updateCurrentStepToNext: _v17
        } = (() => {
          let [_v0, _v1] = (0, _v10.useReducer)(_v110, _v98),
            _v2 = (0, _v10.useCallback)((_v0, _v1) => {
              _v1({
                type: _v100,
                payload: {
                  email: _v0,
                  errorMessage: _v1
                }
              });
            }, []),
            _v3 = (0, _v10.useCallback)(_v0 => {
              _v1({
                type: _v101,
                payload: _v0
              });
            }, []),
            _v4 = (0, _v10.useCallback)(_v0 => {
              _v1({
                type: _v102,
                payload: _v0
              });
            }, []),
            _v5 = (0, _v10.useCallback)(_v0 => {
              _v1({
                type: _v103,
                payload: _v0
              });
            }, []),
            _v6 = (0, _v10.useCallback)(_v0 => {
              _v1({
                type: _v99,
                payload: _v0
              });
            }, []),
            _v7 = (0, _v10.useCallback)(_v0 => {
              _v1({
                type: _v104,
                payload: _v0
              });
            }, []),
            _v8 = (0, _v10.useCallback)(_v0 => {
              _v1({
                type: _v105,
                payload: _v0
              });
            }, []),
            _v9 = (0, _v10.useCallback)(_v0 => {
              _v1({
                type: _v106,
                payload: _v0
              });
            }, []),
            _v10 = (0, _v10.useCallback)(_v0 => {
              _v1({
                type: _v107,
                payload: _v0
              });
            }, []);
          return {
            handleAddErrorToEmail: _v2,
            handleAddInvitedWorkspaceMembers: _v3,
            handleChangeSelectedFoldersTree: _v4,
            handleChangeSelectedPermissionPolicy: _v5,
            handleEmailAddition: _v6,
            handleEmailRemoval: _v7,
            inviteData: _v0,
            setHasErrors: _v8,
            setInvitationNote: _v9,
            setIsReqInProgress: _v10,
            setSelectedRole: (0, _v10.useCallback)(_v0 => {
              _v1({
                type: _v108,
                payload: _v0
              });
            }, []),
            updateCurrentStepToNext: (0, _v10.useCallback)(() => {
              _v1({
                type: _v109
              });
            }, [])
          };
        })(),
        {
          currentStep: _v18,
          emails: _v19,
          invitationNote: _v20,
          selectedRole: _v21
        } = _v12,
        _v22 = _v21 === _v40.ALLOWED_ROLES_FOR_INVITE.ADMIN,
        _v23 = (0, _v10.useRef)(!1),
        _v24 = (0, _v10.useRef)(!1),
        {
          sendInviteMembersToTeamEvent: _v25
        } = (0, _v60.useTrackEvents)(),
        _v26 = (0, _v18.useGetMePreferences)({
          select: ["toid"]
        }),
        _v27 = _v26.data?.toid ?? 0,
        {
          isLoading: _v28,
          data: _v29
        } = (0, _v19.useGetUserProjects)(() => _v27 ? {
          query: {
            excludePrivateToMeFolder: !0,
            perPage: 1,
            topLevelOnly: !0,
            permissionAction: "folder.view"
          },
          select: ["isPrivateToUser", "name", "privacy", "uri"],
          where: {
            userId: _v27
          }
        } : null),
        _v30 = !_v28 && (_v29?.total ?? 0) > 0,
        {
          mutate: _v31
        } = _v59({
          workspaceUuid: _v2
        }),
        [_v32, {
          called: _v33,
          data: _v34,
          error: _v35,
          loading: _v36
        }] = (0, _v56.usePostWorkspaceMembers)(),
        _v37 = (0, _v15.useToast)(),
        _v38 = (0, _v10.useCallback)((_v0, _v1, _v2 = "neutral") => {
          let _v3 = `invite-workspace-${_v1}`;
          _v37.isActive(_v3) || _v37({
            duration: 0,
            id: _v3,
            isClosable: !0,
            title: _v0,
            variant: _v2
          });
        }, [_v37]),
        [_v39, {
          loading: _v40,
          error: _v41,
          complete: _v42
        }] = (0, _v86.usePutBatchFolderTeamPermissions)(),
        _v43 = (0, _v10.useCallback)(() => _v22 ? _v5.InviteSent : _v5.MembersInvitedToWorkspace(_v19.length, _v3), [_v19.length, _v22, _v5, _v3]);
      return (0, _v10.useEffect)(() => {
        !_v24.current || !_v40 && (_v41 || _v42) && (_v42 ? _v38(_v5.FoldersShared, "folders-shared") : _v38(_v5.UnableToShareFolders, "folder-share-failed", "warning"), _v24.current = !1, _v0());
      }, [_v0, _v38, _v5, _v42, _v41, _v40]), (0, _v10.useEffect)(() => {
        _v23.current && _v33 && !_v36 && (_v35 ? (_v38(_v5.ErrorSendingInvites, "error", "warning"), _v0()) : _v34 && (_v38(_v43(), "success"), _v4(), _v31(), _v30 && !_v22 ? (_v7(_v34.data), _v17()) : _v0()), _v23.current = !1);
      }, [_v33, _v34, _v35, _v7, _v22, _v36, _v5, _v43, _v38, _v30]), (0, _v1.jsxs)(_v87.Modal, {
        isOpen: _v1,
        onClose: _v0,
        children: [(0, _v1.jsx)(_v89.ModalOverlay, {}), (0, _v1.jsxs)(_v88.ModalContent, {
          minH: (0, _v13.rem)(264),
          maxW: (0, _v13.rem)(500),
          padding: "md",
          children: [(0, _v1.jsx)(_v121, {
            currentModalStep: _v18
          }), (0, _v1.jsx)(_v113, {
            handleAddErrorToEmail: _v6,
            handleChangeIsRequestInProgress: _v15,
            handleChangeSelectedFoldersTree: _v8,
            handleChangeSelectedPermissionPolicy: _v9,
            handleEmailAddition: _v10,
            handleEmailRemoval: _v11,
            handleErrorChange: _v13,
            handleInvitationNoteChange: _v14,
            inviteData: _v12,
            onRoleChange: _v16,
            ownerId: _v27,
            workspaceUuid: _v2
          }), (0, _v1.jsx)(_v117, {
            called: _v18 === _v96 && _v33,
            closeModal: _v0,
            handlePrimaryButtonClick: () => {
              if (_v18 === _v96) 0 !== _v19.length && (_v32({
                select: _v125,
                variables: {
                  customMessage: _v20,
                  newInviteeEmails: _v19.map(_v0 => _v0.value),
                  role: _v21
                },
                where: {
                  workspaceUuid: _v2
                }
              }), _v25({
                entityId: _v2,
                entityName: _v3,
                entityType: _v124.ENTITY_TYPE.WORKSPACE,
                includesMessage: !!_v20,
                inviteRole: _v21,
                numberOfInvitedMembers: _v19.length
              }), _v23.current = !0);else {
                let _v0, _v1;
                _v18 === _v97 && (_v0 = (0, _v85.getSelectedFolderUrisFromTree)(_v12.selectedFoldersTree), _v1 = _v12.selectedPermissionPolicy, _v27 && _v0.length && _v1?.uri && (_v39(_v12.invitedWorkspaceMembers, _v0, _v27, _v1.uri), _v24.current = !0));
              }
            },
            inviteData: _v12,
            loading: _v36 || _v40
          })]
        })]
      });
    };
  var _v127 = _v0.i(0);
  let _v128 = [40, 105, 65, 50, 40],
    _v129 = () => (0, _v1.jsx)(_v127.SeatCount.Group, {
      children: _v128.map((_v0, _v1) => (0, _v1.jsxs)(_v2.VStack, {
        children: [(0, _v1.jsx)(_v45.Skeleton, {
          minW: (0, _v13.rem)(_v0),
          maxH: (0, _v13.rem)(26)
        }), (0, _v1.jsx)(_v45.Skeleton, {
          minW: (0, _v13.rem)(_v0),
          maxH: (0, _v13.rem)(14)
        })]
      }, _v1))
    }),
    _v130 = () => {
      let [_v0, _v1] = (0, _v10.useState)(!1),
        {
          workspaceUuid: _v2
        } = (0, _v55.useCurrentWorkspaceDetails)(),
        _v3 = (0, _v6.getTranslations)(),
        {
          data: _v4,
          mutate: _v5,
          isLoading: _v6
        } = (0, _v20.useGetWorkspace)(() => _v2 ? {
          select: ["displayName", "membershipCount.admins", "membershipCount.members", "rolesCount"],
          where: {
            workspaceUuid: _v2
          }
        } : null, {
          revalidateOnFocus: !1,
          revalidateIfStale: !1
        }),
        {
          rolesCount: {
            admin: _v7 = 0,
            contributorPlus: _v8 = 0,
            contributor: _v9 = 0,
            viewer: _v10 = 0,
            owner: _v11 = 0
          } = {}
        } = _v4 || {};
      return (0, _v1.jsxs)(_v12.HStack, {
        width: "100%",
        backgroundColor: "surface",
        justify: "space-between",
        borderRadius: "md",
        padding: "md",
        children: [_v2 && _v0 && !_v6 && (0, _v1.jsx)(_v126, {
          workspaceUuid: _v2,
          workspaceName: _v4?.displayName ?? "",
          closeModal: () => _v1(!1),
          isOpen: _v0,
          onInviteSuccess: _v5
        }), (0, _v1.jsx)(_v127.SeatCount.Container, {
          children: _v6 || !_v4 ? (0, _v1.jsx)(_v129, {}) : (0, _v1.jsxs)(_v127.SeatCount.Group, {
            children: [(0, _v1.jsx)(_v127.SeatCount.Tile, {
              label: _v3.AdminRole,
              value: _v7 + _v11
            }), (0, _v1.jsx)(_v127.SeatCount.Tile, {
              label: _v3.ContributorPlusRole,
              value: _v8
            }), (0, _v1.jsx)(_v127.SeatCount.Tile, {
              label: _v3.ContributorRole,
              value: _v9
            }), (0, _v1.jsx)(_v127.SeatCount.Tile, {
              label: _v3.ViewerRole,
              value: _v10
            })]
          })
        }), (0, _v1.jsxs)(_v12.HStack, {
          spacing: 4,
          children: [(0, _v1.jsx)(_v84, {}), (0, _v1.jsx)(_v52.Button, {
            fontWeight: "500",
            leftIcon: (0, _v1.jsx)(_v79.PersonUserAdd, {}),
            variant: "primary",
            onClick: () => _v1(!0),
            children: _v3.Invite
          })]
        })]
      });
    };
  var _v131 = _v0.i(0);
  let _v132 = () => {
    let _v0 = (0, _v6.getTranslations)();
    return (0, _v1.jsxs)(_v2.VStack, {
      spacing: "lg",
      p: "lg",
      pb: "xl",
      children: [(0, _v1.jsx)(_v3.Text, {
        variant: "heading-lg",
        fontWeight: "medium",
        alignSelf: "flex-start",
        children: _v0.Members
      }), (0, _v1.jsx)(_v130, {}), (0, _v1.jsx)(_v78, {})]
    });
  };
  (0, _v4.withPageSetup)(_v131.getWspServerSideProps, {
    requireLogin: !0
  }), _v132.getLayout = (_v0, _v1) => (0, _v5.getLayout)(_v0, _v1), _v0.s(["__N_SSP", 0, !0, "default", 0, _v132], 0);
}