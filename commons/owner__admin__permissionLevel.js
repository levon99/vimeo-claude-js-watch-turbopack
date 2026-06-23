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
    _v18 = _v0.i(0);
  let _v19 = ({
    onRevalidate: _v0,
    teamUserId: _v1
  }) => {
    let _v2 = (0, _v16.useViewer)(),
      _v3 = _v2?.teamUser?.ownerId ?? _v2?.user?.id,
      _v4 = _v2?.teamUser?.permissionLevel,
      {
        userId: _v5,
        email: _v6,
        permissionLevel: _v7
      } = (0, _v5.useContext)(_v11.TeamUserInfoState),
      _v8 = _v4 === _v15.TEAM_PERMISSION.ADMIN,
      _v9 = _v4 === _v15.TEAM_PERMISSION.OWNER,
      _v10 = _v9 ? "owner" : "admin",
      _v11 = {
        apiUrl: _v2?.apiUrl || "",
        jwt: _v2?.jwt || "",
        ownerUri: _v3 ? `/users/${_v3}` : "",
        ownerId: _v3 || 0
      },
      {
        updateSelectedTeamMembers: _v12
      } = (0, _v5.useContext)(_v13.ManageTeamDispatchCtx),
      [_v13, _v14] = (0, _v5.useState)(!1),
      {
        data: _v15
      } = (0, _v9.useGetUserTeamUser)(() => _v3 && _v1 && (_v8 || _v9) ? {
        where: {
          userId: _v3,
          teamUserId: parseInt(_v1, 10)
        },
        select: ["uri", "permissionLevel", "email", "status", "metadata", "applicablePermissionPolicies.folder.name", "applicablePermissionPolicies.folder.displayName", "applicablePermissionPolicies.folder.displayDescription", "applicablePermissionPolicies.folder.uri", "applicablePermissionPolicies.folder.permissionActions", "user", "role", "region", "inviteUrl"]
      } : null);
    if (!_v8 && !_v9) return (0, _v1.jsx)(_v7.Box, {
      padding: "20%",
      children: (0, _v1.jsx)(_v8.Header, {
        variant: "heading-lg",
        textAlign: "center",
        children: (0, _v10.translate)({
          singular: "This page can only be used by team owners or admins.",
          dictionary: {
            es: {
              singular: "Esta página solo puede ser utilizada por los propietarios o administradores del equipo."
            },
            "de-DE": {
              singular: "Diese Seite kann nur von Team-Eigentümern oder Administratoren verwendet werden."
            },
            "fr-FR": {
              singular: "Cette page ne peut être utilisée que par les propriétaires ou les administrateurs de l’équipe."
            },
            "ja-JP": {
              singular: "このページはチームのオーナーまたは管理者のみが使用できます。"
            },
            "ko-KR": {
              singular: "이 페이지는 팀 소유자 또는 관리자만 사용할 수 있습니다."
            },
            "pt-BR": {
              singular: "Esta página só pode ser usada por proprietários ou administradores da equipe."
            },
            "zh-CN": {
              singular: "此页面仅限团队所有者或管理员使用。"
            }
          }
        })
      })
    });
    let _v16 = _v15 ? [{
      uri: _v15.uri,
      permissionLevel: _v15.permissionLevel,
      email: _v15.email,
      status: "pending" === _v15.status ? _v14.MemberStatus.Pending : _v14.MemberStatus.Accepted,
      metadata: _v15.metadata,
      role: _v15.role,
      region: _v15.region,
      inviteUrl: _v15.inviteUrl,
      isLoading: !1,
      currentTeamPermissionPolicies: [],
      permissionActions: {},
      user: {
        name: _v15.user?.name || "",
        uri: _v15.user?.uri || "",
        link: _v15.user?.link || "",
        createdTime: _v15.user?.createdTime || "",
        id: _v15.user?.uri ? Number(_v15.user.uri.split("/").pop()) : 0,
        pictures: _v15.user?.pictures || {
          sizes: []
        }
      },
      applicablePermissionPolicies: {
        folder: _v15.applicablePermissionPolicies?.folder || [],
        regionalDelivery: []
      }
    }] : [];
    return "number" != typeof _v3 ? null : (0, _v1.jsxs)(_v12.TeamApiConfigCtx.Provider, {
      value: _v11,
      children: [(0, _v1.jsx)(_v17.EmptyStateBase, {
        description: (0, _v10.translate)({
          singular: "Share folders with this team member to grant access to Team library content",
          dictionary: {
            es: {
              singular: "Comparta carpetas con este miembro del equipo para otorgarle acceso al contenido de la biblioteca del equipo."
            },
            "de-DE": {
              singular: "Teilen Sie Ordner mit diesem Teammitglied, um Zugriff auf Inhalte der Teambibliothek zu gewähren"
            },
            "fr-FR": {
              singular: "Partagez des dossiers avec ce collaborateur pour lui accorder l'accès au contenu de la bibliothèque de l'équipe"
            },
            "ja-JP": {
              singular: "このチームメンバーとフォルダーを共有して、チームライブラリのコンテンツへのアクセスを許可します。"
            },
            "ko-KR": {
              singular: "이 팀원에게 팀 라이브러리 콘텐츠에 대한 액세스 권한을 부여하려면 폴더를 공유하세요."
            },
            "pt-BR": {
              singular: "Compartilhe pastas com este integrante da equipe para conceder acesso ao conteúdo da biblioteca da equipe"
            },
            "zh-CN": {
              singular: "与该团队成员共享文件夹以授予其对团队视频库内容的访问权限"
            }
          }
        }),
        buttonText: (0, _v10.translate)({
          singular: "Share folders",
          dictionary: {
            es: {
              singular: "Compartir carpetas"
            },
            "de-DE": {
              singular: "Ordner teilen"
            },
            "fr-FR": {
              singular: "Partage de dossiers"
            },
            "ja-JP": {
              singular: "フォルダーを共有"
            },
            "ko-KR": {
              singular: "폴더 공유"
            },
            "pt-BR": {
              singular: "Compartilhar pastas"
            },
            "zh-CN": {
              singular: "分享文件夹"
            }
          }
        }),
        onButtonClick: () => {
          if (_v5 && _v7 && _v6 && "number" == typeof _v3) {
            _v12(_v16), _v14(!0);
            try {
              (0, _v18.sendClickUserAccessEmptyStateEvent)({
                teamOwnerId: _v3,
                currentTeamUserRole: _v10,
                member: {
                  userId: _v5,
                  email: _v6,
                  role: _v7
                }
              });
            } catch (_v0) {
              console.warn("Analytics event error:", _v0);
            }
          } else console.warn("Missing required info:", {
            userId: _v5,
            permissionLevel: _v7,
            email: _v6,
            teamOwnerId: _v3
          });
        }
      }), (0, _v1.jsx)(_v6.AddToFoldersModal, {
        isOpen: _v13 && !!_v1,
        teamOwnerId: _v3,
        selectedTeamMembers: _v16,
        onSuccess: () => {
          _v14(!1), _v0 && _v0();
        },
        closeModal: () => {
          _v14(!1), _v12([]);
        }
      })]
    });
  };
  var _v20 = _v0.i(0),
    _v21 = _v0.i(0);
  _v0.s(["PermissionsListRoot", 0, function ({
    teamUserId: _v0,
    ownerId: _v1
  }) {
    let {
        data: _v2,
        error: _v3,
        size: _v4,
        setSize: _v5,
        isLoading: _v6,
        mutate: _v7
      } = (0, _v2.useGetUserFoldersRootInfinite)(() => _v1 ? {
        where: {
          userId: _v1
        },
        select: _v3.ITEM_FIELDS,
        query: {
          perPage: _v3.ITEMS_PER_PAGE,
          excludePersonalTeamFolder: !0,
          inspectedTeamUserUri: `/users/${_v1}/team_users/${_v0}`,
          sort: "alphabetical"
        },
        headers: {
          Accept: "application/vnd.vimeo.*+json;version=3.4"
        }
      } : null),
      {
        isLoadingMore: _v8,
        isDone: _v9
      } = (0, _v4.getLoadMoreStates)(_v2, _v4, _v3),
      _v10 = (0, _v4.useFlattenedResponse)(_v2)?.map((0, _v4.itemsAdapter)(_v0)) ?? [];
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v21.StateManager, {
        items: _v10,
        isLoading: _v6,
        error: _v3,
        emptyState: (0, _v1.jsx)(_v19, {
          onRevalidate: _v7,
          teamUserId: _v0
        })
      }), (0, _v1.jsx)(_v20.LoadMore, {
        canLoadMore: !_v9,
        isLoadingMore: !!_v8,
        onClick: () => {
          _v5(_v4 + 1);
        }
      })]
    });
  }], 0);
}