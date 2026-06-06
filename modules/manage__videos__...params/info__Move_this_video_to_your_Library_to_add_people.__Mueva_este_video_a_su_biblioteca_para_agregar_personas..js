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
    _v25 = _v0.i(0);
  let _v26 = () => {
    let {
        canEdit: _v0,
        canInvite: _v1,
        isPrivateToUser: _v2,
        resourceType: _v3
      } = (0, _v4.useGlobalStore)((0, _v9.useShallow)(({
        resourceProps: _v0
      }) => ({
        canEdit: _v0.data.canEdit,
        canInvite: _v0.data.canInvite,
        isPrivateToUser: _v0.data.isPrivateToUser,
        resourceType: _v0.resourceType
      }))),
      {
        teamPermissions: _v4,
        isLoadingMore: _v5,
        isValidating: _v6,
        isInitLoading: _v7,
        revalidateTeamPermissions: _v8,
        loadMoreTeamPermissions: _v9,
        canLoadMore: _v10
      } = (0, _v22.useGetTeamPermissions)({
        query: {
          accessType: _v22.ACCESS_TYPE.EXPLICIT,
          entityTypes: [_v20.EntityTypes.TeamUser, _v20.EntityTypes.TeamGroup],
          excludeResourceCreator: !0
        },
        shouldSkip: () => !_v1
      }),
      {
        modalFooterRef: _v11
      } = (0, _v2.useContext)(_v24.RefsState),
      {
        contentSpaceEnabled: _v12,
        isCapabilitiesLoaded: _v13
      } = (0, _v4.useGlobalStore)((0, _v9.useShallow)(({
        capabilities: _v0
      }) => ({
        contentSpaceEnabled: _v0.data.contentSpaceEnabled,
        isCapabilitiesLoaded: _v0.isCapabilitiesLoaded
      }))),
      _v14 = (0, _v4.useGlobalStore)(_v0 => _v0.teamPermissions.actions.setTeamPermissionsData),
      _v15 = (0, _v4.useGlobalStore)(_v0 => _v0.teamPermissions.actions.setRevalidateTeamPermissions),
      _v16 = (0, _v4.useGlobalStore)(_v0 => _v0.teamPermissions.actions.setLoadMoreTeamPermissions),
      {
        footer: {
          TeamListFooter: _v17
        }
      } = (0, _v2.useContext)(_v23.ResourceConfigContext),
      _v18 = (0, _v21.useGetCreator)();
    return ((0, _v2.useEffect)(() => {
      let _v0 = !_v5 && _v6,
        _v1 = _v7 || _v0;
      _v14({
        data: _v4,
        isInitTeamPermissionsLoading: _v7,
        isTeamPermissionsLoading: _v1,
        isFetchingMoreTeamPermissions: _v5
      });
    }, [_v7, _v5, _v6, _v14, _v4]), (0, _v2.useEffect)(() => {
      _v15(_v8), _v16(_v9);
    }, [_v9, _v8, _v16, _v15]), _v3 !== _v5.ResourceType.Video || _v0) ? (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v11.Box, {
        sx: _v25.XPaddingStyle,
        children: [(0, _v1.jsx)(_v18.TeamListHeader, {
          isUpsellShowing: !1
        }), (0, _v1.jsx)(_v17.Search, {}), _v13 && _v2 && !_v12 && (0, _v1.jsx)(_v11.Box, {
          pb: (0, _v14.rem)(8),
          children: (0, _v1.jsx)(_v10.Alert, {
            status: "info",
            mb: 0,
            children: (0, _v1.jsx)(_v25.CustomAlertDescription, {
              children: (0, _v15.translate)({
                singular: "Move this video to your Library to add people.",
                dictionary: {
                  es: {
                    singular: "Mueva este video a su biblioteca para agregar personas."
                  },
                  "de-DE": {
                    singular: "Verschieben Sie dieses Video in Ihre Bibliothek, um Personen hinzuzufügen."
                  },
                  "fr-FR": {
                    singular: "Déplacez cette vidéo dans votre bibliothèque pour y ajouter des personnes."
                  },
                  "ja-JP": {
                    singular: "この動画をライブラリに移動して、ユーザーを追加します。"
                  },
                  "ko-KR": {
                    singular: "사용자를 추가하려면 이 동영상을 라이브러리로 이동하세요."
                  },
                  "pt-BR": {
                    singular: "Mova este vídeo para sua Biblioteca para adicionar pessoas."
                  },
                  "zh-CN": {
                    singular: "将此视频移动到视频库才能添加人员。"
                  }
                }
              })
            })
          })
        }), (0, _v1.jsx)(_v12.Header, {
          className: "team-permissions-list-header",
          size: "sm",
          pt: (0, _v14.rem)(8),
          pb: (0, _v14.rem)(12),
          "data-testid": "team-permissions-list-header",
          children: (0, _v15.translate)({
            singular: "People with access",
            dictionary: {
              es: {
                singular: "Personas con acceso"
              },
              "de-DE": {
                singular: "Personen mit Zugriff"
              },
              "fr-FR": {
                singular: "Personnes ayant accès"
              },
              "ja-JP": {
                singular: "アクセスできる人"
              },
              "ko-KR": {
                singular: "접근 권한이 있는 사람"
              },
              "pt-BR": {
                singular: "Pessoas com acesso"
              },
              "zh-CN": {
                singular: "具有访问权限的人"
              }
            }
          })
        }), (0, _v1.jsx)(_v19.TeamPermissionsList, {
          teamPermissions: _v4,
          creator: _v18,
          canInvite: _v1,
          canLoadMorePermissions: _v10
        })]
      }), _v17 && (0, _v1.jsxs)(_v13.Portal, {
        containerRef: _v11,
        children: [(0, _v1.jsx)(_v16.CustomDivider, {}), (0, _v1.jsx)(_v11.Box, {
          sx: _v25.XPaddingStyle,
          children: (0, _v1.jsx)(_v17, {})
        })]
      })]
    }) : _v17 ? (0, _v1.jsx)(_v11.Box, {
      sx: _v25.XPaddingStyle,
      children: (0, _v1.jsx)(_v17, {})
    }) : null;
  };
  var _v27 = _v0.i(0),
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
    _v41 = _v0.i(0);
  let _v42 = ({
    emailInput: _v0,
    onRemove: _v1
  }) => {
    let _v2 = (0, _v41.useIsBokeh)();
    return (0, _v1.jsxs)(_v40.Tag, {
      px: (0, _v14.rem)(10),
      ...(_v2 ? {
        size: "lg"
      } : {}),
      children: [(() => {
        switch (_v0.type) {
          case _v5.EMAIL_INPUT_EMAIL_TYPE:
            return (0, _v1.jsx)(_v40.TagLabel, {
              children: (0, _v1.jsx)(_v39.Text, {
                variant: "heading-xs",
                children: _v0.email
              })
            });
          case _v20.EntityTypes.TeamUser:
            let _v0 = _v0.name ?? _v0.email;
            return (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsx)(_v38.Avatar, {
                size: "xs",
                alt: _v0 ?? "",
                src: _v0.avatarUrl ?? "",
                nameProps: {
                  name: _v0 ?? ""
                }
              }), (0, _v1.jsx)(_v40.TagLabel, {
                children: (0, _v1.jsx)(_v39.Text, {
                  variant: "heading-xs",
                  children: _v0
                })
              })]
            });
          default:
            return (0, _v1.jsx)(_v40.TagLabel, {
              children: (0, _v1.jsx)(_v39.Text, {
                variant: "heading-xs",
                children: _v0.name
              })
            });
        }
      })(), (0, _v1.jsx)(_v40.TagCloseButton, {
        p: 0,
        onClick: _v1
      })]
    }, _v0.email);
  };
  var _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0);
  async function _v48({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v46.measureLatency)("getUserTeamEntities", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/team_entities?${(0, _v47.searchQueryString)(_v3)}&fields=${_v1.map(_v47.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v47.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v47.deepCamelCase)(_v1);
    });
  }
  var _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0);
  function _v54(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v53.useGctlConfig)();
    return (0, _v52.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/users/${_v2.where.userId}/team_entities?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v48({
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
  }
  "true" === _v45.default.env.STORYBOOK && (0, _v51.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v53.useGctlConfig)();
    return (0, _v49.default)(_v2 ? `/users/${_v2.where.userId}/team_entities${(0, _v51.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v48({
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
    endpoint: "/users/:userId/team_entities",
    method: "GET"
  }), "true" === _v45.default.env.STORYBOOK && (0, _v51.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v50.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v53.useGctlConfig)(),
      [_v5, _v6] = (0, _v51.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/team_entities${(0, _v51.serializeQuery)(_v0)}`, _v48({
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
    endpoint: "/users/:userId/team_entities",
    method: "GET"
  }), "true" === _v45.default.env.STORYBOOK && (0, _v51.assignMswData)(_v54, {
    endpoint: "/users/:userId/team_entities",
    method: "GET"
  });
  var _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0),
    _v59 = _v0.i(0);
  let _v60 = {
      gap: 0
    },
    _v61 = (0, _v2.memo)(({
      searchQuery: _v0,
      onInviteNewMember: _v1
    }) => {
      let _v2 = (0, _v4.useGlobalStore)(({
          screen: _v0
        }) => _v0.main),
        {
          isInitLoading: _v3,
          isLoadingMore: _v4,
          teamEntities: _v5,
          canLoadMore: _v6,
          loadMoreTeamEntities: _v7
        } = (({
          query: _v0,
          shouldSkip: _v1
        }) => {
          let _v2 = _v0?.query ?? "",
            _v3 = (0, _v35.useToast)(),
            {
              getAbortSignal: _v4
            } = (0, _v55.useGetAbortSignal)({
              query: _v2
            }),
            _v5 = (0, _v2.useContext)(_v28.ViewerContext),
            _v6 = _v5?.teamUser?.ownerId,
            {
              data: _v7,
              isValidating: _v8,
              isLoading: _v9,
              mutate: _v10,
              size: _v11,
              setSize: _v12,
              error: _v13
            } = _v54(() => _v1 instanceof Function && _v1() || !_v6 ? null : {
              select: _v20.TEAM_ENTITIES_FIELD,
              query: {
                ..._v0
              },
              where: {
                userId: _v6
              },
              headers: {
                Accept: _v20.API_ACCEPT_HEADER
              },
              signal: _v4()
            }, {
              ..._v20.API_REVALIDATE_OPTIONS
            });
          (0, _v2.useEffect)(() => {
            if (_v13?.name !== _v20.ABORT_ERROR && _v13) {
              console.error(_v13);
              let _v0 = "rsm-team-entities-error";
              _v3.isActive(_v0) || _v3({
                title: (0, _v15.translate)({
                  singular: "Oops! Something went wrong!",
                  dictionary: {
                    es: {
                      singular: "¡Ups, algo salió mal!"
                    },
                    "de-DE": {
                      singular: "Hoppla, hier ist was schief gegangen!"
                    },
                    "fr-FR": {
                      singular: "Oups ! Quelque chose a planté !"
                    },
                    "ja-JP": {
                      singular: "エラーが発生しました！"
                    },
                    "ko-KR": {
                      singular: "죄송합니다. 문제가 발생했습니다."
                    },
                    "pt-BR": {
                      singular: "Opa! Alguma coisa deu errado!"
                    },
                    "zh-CN": {
                      singular: "哎呀！出错了！"
                    }
                  }
                }),
                id: _v0
              });
            }
          }, [_v13, _v3]);
          let _v14 = (0, _v2.useCallback)(() => {
              _v12(_v11 + 1);
            }, [_v12, _v11]),
            _v15 = (0, _v2.useMemo)(() => {
              if (_v7) {
                let _v0 = _v7.filter(_v0 => !!_v0).flatMap(_v0 => _v0.data.filter(_v0 => (0, _v56.permissionsBySearchKeywordFilter)(_v0, _v2)).flatMap(_v0 => _v0));
                return {
                  ..._v7[_v7.length - 1],
                  data: _v0 ?? []
                };
              }
            }, [_v7, _v2]),
            _v16 = _v15?.data ?? [],
            _v17 = !_v7?.[_v7?.length - 1]?.paging.next,
            _v18 = !_v7 && !_v13,
            _v19 = _v18 || _v11 > 0 && _v7 && void 0 === _v7[_v11 - 1];
          return {
            teamEntities: _v16,
            isInitLoading: _v9 && (_v18 || _v13),
            canLoadMore: !_v17 && !_v9 && !_v19,
            isValidating: _v8,
            isDone: _v17,
            isLoadingMore: _v19 && !_v13,
            loadMoreTeamEntities: _v14,
            revalidateTeamEntities: _v10,
            page: _v11
          };
        })({
          query: {
            query: _v0
          },
          shouldSkip: () => !_v0 || _v2 === _v5.ShareModalState.Invitation
        }),
        _v8 = (0, _v56.validateEmail)(_v0) ? _v0 : "",
        _v9 = _v5.find(_v0 => _v8 && _v0.email === _v8);
      (0, _v2.useEffect)(() => {
        _v9 && _v1(_v9);
      }, [_v9, _v1]);
      let _v10 = (0, _v2.useMemo)(() => _v5.map((_v0, _v1) => (0, _v1.jsx)(_v58.SearchItem, {
          teamEntity: {
            ..._v0,
            currentPermissionPolicy: null
          },
          onInviteNewMember: () => {
            _v1(_v0);
          }
        }, _v1)), [_v1, _v5]),
        _v11 = (0, _v2.useMemo)(() => {
          let _v0 = [];
          return _v10?.length && _v0.push(..._v10), _v4 && _v0.push((0, _v1.jsx)(_v57.Loader, {})), _v0;
        }, [_v10, _v4]);
      if (_v3 || _v9) return (0, _v1.jsx)(_v57.Loader, {});
      let _v12 = !!_v5.length && !!_v0;
      return (0, _v1.jsxs)(_v11.Box, {
        children: [(0, _v1.jsx)(_v59.SearchPrompt, {
          searchQuery: _v0,
          isViewerShareScreen: !0,
          onInviteNewMember: _v1
        }), _v12 && (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v43.Divider, {
            borderColor: "stroke"
          }), (0, _v1.jsx)(_v44.VirtualizedList, {
            listItems: _v11,
            wrapperOverrides: _v62,
            canLoadMore: _v6,
            isFetchingMore: _v4,
            loadMore: _v7,
            virtualizerOptions: _v60
          })]
        })]
      });
    }),
    _v62 = {
      maxH: 300
    },
    _v63 = "team_share_input",
    _v64 = () => {
      let _v0 = (0, _v2.useRef)(null),
        _v1 = (0, _v2.useContext)(_v28.ViewerContext),
        _v2 = (0, _v2.useContext)(_v24.RefsState),
        [_v3, _v4] = (0, _v2.useState)({
          value: "",
          hasError: !1
        }),
        _v5 = (0, _v35.useToast)(),
        {
          modalWrapperRef: _v6
        } = _v2,
        _v7 = (0, _v4.useGlobalStore)(({
          capabilities: _v0
        }) => _v0.data.hasEnterprise),
        {
          canViewerShare: _v8
        } = (0, _v4.useGlobalStore)((0, _v9.useShallow)(({
          resourceProps: _v0
        }) => ({
          videoId: _v0.data.id,
          canViewerShare: _v0.data.canViewerShare
        }))),
        {
          isMobileOrTab: _v9,
          teamPermissionLevel: _v10
        } = (0, _v4.useGlobalStore)((0, _v9.useShallow)(({
          shared: _v0
        }) => ({
          isMobileOrTab: _v0.data.isMobileOrTab,
          teamPermissionLevel: _v0.data.teamPermissionLevel
        }))),
        _v11 = (0, _v4.useGlobalStore)(({
          invite: _v0
        }) => _v0.data.emailInputs),
        {
          addEmailInputs: _v12,
          removeEmailInput: _v13,
          addEntityMember: _v14
        } = (0, _v4.useGlobalStore)(({
          invite: _v0
        }) => _v0.actions),
        _v15 = _v3.value.trim(),
        _v16 = (0, _v37.useDebouncedValue)(_v15, 500),
        _v17 = (0, _v56.validateEmail)(_v15),
        _v18 = (0, _v2.useRef)(!1),
        _v19 = (0, _v2.useCallback)(_v0 => {
          if (!_v15.length) return;
          let _v1 = _v11.some(_v0 => "email" === _v0.type);
          if (!_v8 && _v1) {
            let _v0 = "rsm-mixed-invitation-box-error";
            _v5.isActive(_v0) || _v5({
              title: (0, _v15.translate)({
                singular: "Contact an Admin to share with someone outside your team",
                dictionary: {
                  es: {
                    singular: "Comuníquese con un administrador para compartir con alguien que no es parte de su equipo"
                  },
                  "de-DE": {
                    singular: "Kontaktieren Sie einen Admin, um Ihre Inhalte mit jemandem außerhalb Ihres Teams zu teilen"
                  },
                  "fr-FR": {
                    singular: "Contactez un administrateur pour partager avec une personne extérieure à votre équipe"
                  },
                  "ja-JP": {
                    singular: "チーム外の人と共有するには管理者に連絡してください"
                  },
                  "ko-KR": {
                    singular: "팀 외부 사람과 공유하려면 관리자에게 문의하세요."
                  },
                  "pt-BR": {
                    singular: "Contate um Administrador para compartilhar com alguém de fora da equipe"
                  },
                  "zh-CN": {
                    singular: "联系管理员以便与团队以外的人分享"
                  }
                }
              }),
              id: _v0
            });
            return;
          }
          if (_v0) {
            if ((0, _v56.hasArrayDuplicates)(_v11.map(_v0 => _v0.name), [_v0.displayName ?? _v0.email])) return;
            _v14(_v0);
          } else if (!(0, _v56.validateEmail)(_v15) && _v15.length > 0) {
            _v4(_v0 => ({
              ..._v0,
              hasError: !0
            }));
            let _v0 = "rsm-mixed-invitation-box-invalid-email";
            _v5.isActive(_v0) || _v5({
              title: (0, _v15.translate)({
                singular: "Please enter a valid email address",
                dictionary: {
                  es: {
                    singular: "Introduce una dirección de correo electrónico válida."
                  },
                  "de-DE": {
                    singular: "Bitte gib eine gültige E-Mail-Adresse an"
                  },
                  "fr-FR": {
                    singular: "Veuillez saisir une adresse e-mail valide"
                  },
                  "ja-JP": {
                    singular: "正しいメールアドレスを入力してください"
                  },
                  "ko-KR": {
                    singular: "올바른 이메일 주소를 입력하세요."
                  },
                  "pt-BR": {
                    singular: "Digite um endereço de e-mail válido"
                  },
                  "zh-CN": {
                    singular: "请输入有效的电子邮件地址"
                  }
                }
              }),
              id: _v0
            });
            return;
          } else {
            if ((0, _v56.hasArrayDuplicates)(_v11.map(_v0 => _v0.name), [_v15])) return;
            if (!_v8) {
              let _v0 = "rsm-mixed-invitation-box-warning";
              _v5.isActive(_v0) || _v5({
                title: (0, _v15.translate)({
                  singular: "Enter an existing member or group name",
                  dictionary: {
                    es: {
                      singular: "Introduzca el nombre de un miembro o grupo existente"
                    },
                    "de-DE": {
                      singular: "Geben Sie einen bestehenden Mitglieds- oder Gruppennamen ein"
                    },
                    "fr-FR": {
                      singular: "Saisissez le nom d'un membre ou d'un groupe existant"
                    },
                    "ja-JP": {
                      singular: "既存のメンバーまたはグループ名を入力してください"
                    },
                    "ko-KR": {
                      singular: "기존 멤버 또는 그룹 이름을 입력하세요."
                    },
                    "pt-BR": {
                      singular: "Informe o nome de um grupo ou membro existente"
                    },
                    "zh-CN": {
                      singular: "请输入现有成员或群组名称"
                    }
                  }
                }),
                id: _v0,
                variant: "warning",
                icon: (0, _v1.jsx)(_v36.CircleExclamationFilled, {})
              });
              return;
            }
            _v12([{
              name: _v15,
              email: _v15,
              type: _v5.EMAIL_INPUT_EMAIL_TYPE
            }]);
          }
          _v4({
            value: "",
            hasError: !1
          }), _v0.current?.focus();
        }, [_v12, _v14, _v8, _v11, _v15, _v5]),
        _v20 = !!_v10 || !!_v1?.teamUser?.ownerId || !!_v1?.team?.ownerId,
        _v21 = _v11.length > 0 ? "" : _v20 ? _v7 ? (0, _v15.translate)({
          singular: "Add name, group or email",
          dictionary: {
            es: {
              singular: "Agregar nombre, grupo o correo electrónico"
            },
            "de-DE": {
              singular: "Name, Gruppe oder E-Mail-Adresse eingeben"
            },
            "fr-FR": {
              singular: "Ajouter un nom, un groupe ou une adresse e-mail"
            },
            "ja-JP": {
              singular: "名前、グループ、またはEメールを追加"
            },
            "ko-KR": {
              singular: "이름, 그룹 또는 이메일 추가"
            },
            "pt-BR": {
              singular: "Adicione nome, grupo ou e-mail"
            },
            "zh-CN": {
              singular: "添加名称、群组或电子邮件"
            }
          }
        }) : (0, _v15.translate)({
          singular: "Add name or email",
          dictionary: {
            es: {
              singular: "Agregar nombre o correo electrónico"
            },
            "de-DE": {
              singular: "Name oder E-Mail eingeben"
            },
            "fr-FR": {
              singular: "Ajouter un nom ou une adresse e-mail"
            },
            "ja-JP": {
              singular: "名前またはメールアドレスを追加"
            },
            "ko-KR": {
              singular: "이름 또는 이메일 추가"
            },
            "pt-BR": {
              singular: "Adicionar nome ou e-mail"
            },
            "zh-CN": {
              singular: "添加名字或电子邮件"
            }
          }
        }) : (0, _v15.translate)({
          singular: "Add email",
          dictionary: {
            es: {
              singular: "Agregar correo electrónico"
            },
            "de-DE": {
              singular: "E-Mail hinzufügen"
            },
            "fr-FR": {
              singular: "Ajouter une adresse e-mail"
            },
            "ja-JP": {
              singular: "メールアドレスを追加"
            },
            "ko-KR": {
              singular: "이메일 추가"
            },
            "pt-BR": {
              singular: "Adicionar e-mail"
            },
            "zh-CN": {
              singular: "添加电子邮件"
            }
          }
        }),
        _v22 = (0, _v2.useCallback)(_v0 => {
          _v13(_v0), _v3.hasError && _v4({
            ..._v3,
            hasError: !1
          }), _v0.current?.focus();
        }, [_v3, _v13]),
        _v23 = (0, _v2.useCallback)(_v0 => {
          (_v0.code === _v20.KEY_CODES.ENTER || _v17 && [_v20.KEY_CODES.SPACE, _v20.KEY_CODES.TAB].includes(_v0.code)) && (_v0.preventDefault(), _v0.stopPropagation(), _v19()), 0 === _v15.length && _v0.code === _v20.KEY_CODES.BACKSPACE && _v11.length > 0 && _v22(_v11[_v11.length - 1]);
        }, [_v19, _v17, _v15, _v11, _v22]);
      return (0, _v1.jsx)(_v11.Box, {
        position: "relative",
        zIndex: 10,
        children: (0, _v1.jsxs)(_v32.Popover, {
          placement: "bottom-start",
          isOpen: (!_v17 || !_v8) && _v20 && _v15.length > 0,
          initialFocusRef: _v0,
          isLazy: !0,
          matchWidth: !0,
          lazyBehavior: "unmount",
          children: [(0, _v1.jsx)(_v34.PopoverTrigger, {
            children: (0, _v1.jsx)("div", {
              children: (0, _v1.jsxs)(_v11.Box, {
                position: "relative",
                zIndex: 10,
                children: [(0, _v1.jsx)(_v29.Flex, {
                  sx: _v65,
                  outlineColor: _v3.hasError ? "status-destructive-primary" : "input-stroke",
                  children: (0, _v1.jsxs)(_v29.Flex, {
                    direction: "row",
                    wrap: "wrap",
                    flex: "1 0 auto",
                    h: "100%",
                    w: "100%",
                    align: "center",
                    justify: "flex-start",
                    gap: (0, _v14.rem)(4),
                    maxH: _v9 ? (0, _v14.rem)(80) : "none",
                    overflowY: "auto",
                    sx: {
                      "& div[data-lastpass-icon-root]": {
                        display: "none !important"
                      }
                    },
                    children: [_v11.map(_v0 => (0, _v1.jsx)(_v42, {
                      emailInput: _v0,
                      onRemove: () => _v22(_v0)
                    }, _v0.email)), (0, _v1.jsx)(_v30.Input, {
                      size: "xs",
                      type: "text",
                      autoComplete: "off",
                      ref: _v0,
                      id: _v63,
                      value: _v3.value,
                      placeholder: _v21,
                      onChange: _v0 => {
                        if (_v11.length >= _v20.MAX_INVITE_EMAIL_LIMIT) return _v18.current = !0, _v4({
                          ..._v3,
                          hasError: !0
                        }), !1;
                        _v18.current && (_v18.current = !1);
                        let _v1 = _v0.currentTarget.value;
                        _v4({
                          ..._v3,
                          hasError: !1,
                          value: _v1
                        });
                      },
                      onKeyDown: _v23,
                      onBlur: () => {
                        _v4({
                          ..._v3,
                          hasError: !1
                        }), _v17 && _v19();
                      },
                      autoFocus: !0,
                      "data-1p-ignore": !0,
                      sx: _v66,
                      fontSize: _v9 ? "text" : (0, _v14.rem)(14),
                      _focus: {
                        border: "none"
                      },
                      _hover: {
                        outline: "none"
                      },
                      "data-testid": _v63
                    })]
                  })
                }), _v3.hasError && _v18.current && (0, _v1.jsx)(_v31.Paragraph, {
                  size: "sm",
                  color: "status-destructive-primary",
                  children: (0, _v15.translate)({
                    singular: "You can share with up to {COUNT} people at a time",
                    replacements: {
                      COUNT: _v20.MAX_INVITE_EMAIL_LIMIT
                    },
                    dictionary: {
                      es: {
                        singular: "Puede compartir con un máximo de {COUNT} personas a la vez"
                      },
                      "de-DE": {
                        singular: "Sie können mit bis zu {COUNT} Personen gleichzeitig teilen"
                      },
                      "fr-FR": {
                        singular: "Vous ne pouvez partager qu'avec {COUNT} personnes à la fois"
                      },
                      "ja-JP": {
                        singular: "一度に最大{COUNT}人と共有できます"
                      },
                      "ko-KR": {
                        singular: "한 번에 최대 {COUNT}명과 공유할 수 있습니다."
                      },
                      "pt-BR": {
                        singular: "Você pode compartilhar com até {COUNT} pessoas por vez"
                      },
                      "zh-CN": {
                        singular: "每次最多可与 {COUNT} 人共享"
                      }
                    }
                  })
                })]
              })
            })
          }), (0, _v1.jsx)(_v13.Portal, {
            containerRef: _v6,
            children: (0, _v1.jsx)(_v33.PopoverContent, {
              children: (0, _v1.jsx)(_v61, {
                searchQuery: _v16,
                onInviteNewMember: _v19
              })
            })
          })]
        })
      });
    },
    _v65 = {
      flexWrap: "nowrap",
      width: "100%",
      height: "auto",
      alignItems: "center",
      minHeight: (0, _v14.rem)(48),
      maxHeight: (0, _v14.rem)(400),
      overflowY: "auto",
      padding: (0, _v14.rem)(8),
      borderRadius: "lg",
      columnGap: (0, _v14.rem)(10),
      outlineWidth: 1,
      outlineStyle: "solid",
      bgColor: "input-fill",
      _hover: {
        outlineColor: "input-stroke-hover"
      },
      _focusWithin: {
        outlineWidth: (0, _v14.rem)(2),
        outlineColor: "focus-alt"
      },
      ..._v25.ScrollbarStyle
    },
    _v66 = {
      flex: 1,
      height: "100%",
      paddingLeft: 1,
      width: (0, _v14.rem)(115),
      border: "none",
      outline: "none",
      paddingY: 0,
      bgColor: "inherit"
    };
  _v0.s(["MixedInvitationBox", 0, _v64], 0);
  var _v67 = _v0.i(0);
  let _v68 = () => {
    let {
        modalFooterRef: _v0
      } = (0, _v2.useContext)(_v24.RefsState),
      {
        footer: {
          TeamListFooter: _v1
        }
      } = (0, _v2.useContext)(_v23.ResourceConfigContext),
      _v2 = (0, _v2.useContext)(_v28.ViewerContext),
      _v3 = (0, _v4.useGlobalStore)(({
        shared: _v0
      }) => _v0.data.teamPermissionLevel),
      _v4 = (0, _v4.useGlobalStore)(({
        invite: _v0
      }) => _v0.actions.setCaptchaToken),
      _v5 = _v2?.recaptchaSiteKey ?? "";
    return (0, _v1.jsxs)(_v11.Box, {
      sx: _v25.XPaddingStyle,
      children: [(0, _v1.jsx)(_v12.Header, {
        size: "sm",
        style: _v25.MarginBottomStyle,
        children: (0, _v15.translate)({
          singular: "Send the link",
          dictionary: {
            es: {
              singular: "Enviar el enlace"
            },
            "de-DE": {
              singular: "Link senden"
            },
            "fr-FR": {
              singular: "Envoyer le lien de réinitialisation"
            },
            "ja-JP": {
              singular: "リンクを送信"
            },
            "ko-KR": {
              singular: "비밀번호 재설정 링크 전송"
            },
            "pt-BR": {
              singular: "Envie o link"
            },
            "zh-CN": {
              singular: "发送链接"
            }
          }
        })
      }), (0, _v1.jsx)(_v64, {}), (0, _v1.jsx)(_v11.Box, {
        pt: (0, _v14.rem)(16),
        children: (0, _v1.jsx)(_v67.InvitationContent, {
          shouldSendEmail: !0,
          existingTeamMember: null,
          hasPerSeatPricingModelTeamMember: !1,
          showPurchaseNotice: !1,
          showViewerNotice: !1,
          showSeatNotice: !1
        })
      }), null !== _v3 && !_v3 && (0, _v1.jsx)(_v11.Box, {
        mt: (0, _v14.rem)(10),
        children: (0, _v1.jsx)(_v27.default, {
          style: {
            width: "100%"
          },
          sitekey: _v5,
          callback: _v4,
          expiredCallback: () => _v4("")
        })
      }), _v1 && (0, _v1.jsx)(_v13.Portal, {
        containerRef: _v0,
        children: (0, _v1.jsx)(_v11.Box, {
          sx: _v25.XPaddingStyle,
          pt: (0, _v14.rem)(24),
          children: (0, _v1.jsx)(_v1, {})
        })
      })]
    });
  };
  _v0.s(["PermissionScreenManager", 0, () => {
    let _v0 = (0, _v4.useGlobalStore)(({
        resourceProps: _v0
      }) => _v0.data.canEdit),
      _v1 = (0, _v4.useGlobalStore)(({
        screen: _v0
      }) => _v0.main),
      _v2 = (0, _v4.useGlobalStore)(({
        screen: _v0
      }) => _v0.actions.setSubScreen),
      {
        hasViewerShare: _v3
      } = (0, _v3.useViewerShareFeature)();
    return (0, _v2.useEffect)(() => {
      _v2(_v5.ModalSubState.Default);
    }, [_v2]), (0, _v2.useCallback)(() => {
      switch (_v1) {
        case _v5.ShareModalState.Default:
          return _v0 || !_v3 ? (0, _v1.jsx)(_v26, {}) : (0, _v1.jsx)(_v68, {});
        case _v5.ShareModalState.Invitation:
          return (0, _v1.jsx)(_v7.InvitationScreen, {});
        case _v5.ShareModalState.Purchase:
          return (0, _v1.jsx)(_v8.PurchaseScreen, {});
        case _v5.ShareModalState.InheritedAccessList:
          return (0, _v1.jsx)(_v6.InheritedAccessListScreen, {});
        default:
          return (0, _v1.jsx)(_v1.Fragment, {});
      }
    }, [_v0, _v3, _v1])();
  }], 0);
}