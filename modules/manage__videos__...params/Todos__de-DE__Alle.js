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
    _v21 = _v0.i(0);
  let _v22 = ({
      teamEntity: _v0,
      onInviteNewMember: _v1
    }) => {
      let {
        totalTeamMembers: _v2,
        isMobile: _v3
      } = (0, _v9.useGlobalStore)((0, _v13.useShallow)(({
        shared: _v0
      }) => ({
        totalTeamMembers: _v0.data.totalTeamMembers,
        isMobile: _v0.data.isMobileOrTab
      })));
      (0, _v9.useGlobalStore)(({
        resourceProps: _v0
      }) => _v0.resourceType);
      let _v4 = (0, _v2.useRef)(null),
        {
          type: _v5
        } = (0, _v11.getTeamEntityDetails)(_v0),
        _v6 = !!_v0.metadata.connections.teamUser && !_v0.metadata.connections.user,
        _v7 = _v5 === _v7.EntityTypes.AllTeam ? (0, _v17.translate)({
          singular: "All",
          dictionary: {
            es: {
              singular: "Todos"
            },
            "de-DE": {
              singular: "Alle"
            },
            "fr-FR": {
              singular: "Tout"
            },
            "ja-JP": {
              singular: "すべて"
            },
            "ko-KR": {
              singular: "모두"
            },
            "pt-BR": {
              singular: "Tudo"
            },
            "zh-CN": {
              singular: "全部"
            }
          }
        }) : _v0.displayName ?? _v0.email,
        _v8 = _v0.metadata.connections.teamUser?.permissionLevel ?? "",
        _v9 = [_v10.PermissionLevel.Uploader, _v10.PermissionLevel.Admin, _v10.PermissionLevel.Owner].includes(_v8),
        _v10 = _v0.pictures?.sizes[1]?.link ?? "https://f.vimeocdn.com/images_v6/avatar_pending.png",
        _v11 = _v8 === _v10.PermissionLevel.Uploader,
        _v12 = _v0 => (0, _v17.translate)({
          singular: "{COUNT} member",
          plural: "{COUNT} members",
          count: _v0,
          replacements: {
            COUNT: _v0
          },
          dictionary: {
            es: {
              singular: "{COUNT} miembro",
              plural: "{COUNT} miembros"
            },
            "de-DE": {
              singular: "{COUNT} Mitglied",
              plural: "{COUNT} Mitglieder"
            },
            "fr-FR": {
              singular: " {COUNT} membre",
              plural: "{COUNT} membres"
            },
            "ja-JP": {
              singular: "{COUNT} 人のメンバー",
              plural: "メンバー{COUNT}人"
            },
            "ko-KR": {
              singular: "회원 {COUNT}명",
              plural: "멤버 {COUNT}명"
            },
            "pt-BR": {
              singular: "{COUNT} membro",
              plural: "{COUNT} membros"
            },
            "zh-CN": {
              singular: "{COUNT} 名成员",
              plural: "{COUNT} 名成员"
            }
          }
        }),
        {
          sublabel: _v13,
          avatar: _v14
        } = (() => {
          switch (_v5) {
            case _v7.EntityTypes.TeamUser:
              return {
                sublabel: _v0.email,
                avatar: (0, _v1.jsx)(_v14.Avatar, {
                  alt: "search member avatar",
                  src: _v10,
                  size: "sm",
                  nameProps: {
                    name: _v7
                  }
                })
              };
            case _v7.EntityTypes.TeamGroup:
              return {
                sublabel: _v12(_v0.metadata.connections.teamGroup?.totalUsers ?? 0),
                avatar: (0, _v1.jsx)(_v19.GroupIcon, {
                  name: _v0.displayName
                })
              };
            case _v7.EntityTypes.AllTeam:
              return {
                sublabel: _v12(_v0.metadata.connections.allTeam?.total ?? _v2 ?? 0),
                avatar: (0, _v1.jsx)(_v15.HStack, {
                  width: (0, _v16.rem)(36),
                  height: (0, _v16.rem)(36),
                  borderRadius: "50%",
                  children: (0, _v1.jsx)(_v20.AllTeamIcon, {})
                })
              };
            default:
              return {
                sublabel: "",
                avatar: null
              };
          }
        })(),
        _v15 = _v3 ? void 0 : (() => {
          if (_v0.currentPermissionPolicy || _v9) return (0, _v1.jsx)(_v18.SearchItemStatus, {
            role: _v8,
            roleDisplayName: _v0.currentPermissionPolicy?.displayName ?? (0, _v11.getRoleDisplayName)(_v8)
          });
        })();
      return (0, _v1.jsx)(_v15.HStack, {
        justifyContent: "space-between",
        alignItems: "center",
        py: (0, _v16.rem)(8),
        px: (0, _v16.rem)(5),
        _hover: {
          cursor: "pointer",
          backgroundColor: "background-blur",
          borderRadius: "sm"
        },
        onClick: () => {
          _v11 || _v1();
        },
        tabIndex: 0,
        onKeyDown: _v0 => {
          _v0.keyCode === _v7.KeyCodes.ENTER ? _v1() : _v4.current && _v4.current.previousElementSibling && _v0.keyCode === _v7.KeyCodes.UP ? _v4.current.previousElementSibling?.focus() : _v4.current && _v4.current.nextElementSibling && _v0.keyCode === _v7.KeyCodes.DOWN && _v4.current.nextElementSibling?.focus();
        },
        ref: _v4,
        w: "100%",
        style: _v11 ? _v24 : _v23,
        children: (0, _v1.jsx)(_v21.ItemBox, {
          iconBox: _v14,
          headerTitle: _v7,
          subHeaderTitle: _v6 ? (0, _v17.translate)({
            singular: "Pending",
            dictionary: {
              es: {
                singular: "Pendiente"
              },
              "de-DE": {
                singular: "ausstehend"
              },
              "fr-FR": {
                singular: "en attente"
              },
              "ja-JP": {
                singular: "保留中"
              },
              "ko-KR": {
                singular: "보류 중"
              },
              "pt-BR": {
                singular: "Pendente"
              },
              "zh-CN": {
                singular: "待定"
              }
            }
          }) : _v13,
          rightTrigger: _v15
        })
      });
    },
    _v23 = {
      cursor: "pointer"
    },
    _v24 = {
      cursor: "auto",
      opacity: .7
    };
  _v0.s(["SearchItem", 0, _v22], 0);
  var _v25 = _v0.i(0),
    _v26 = _v0.i(0);
  let _v27 = () => {
    let _v0 = (0, _v9.useGlobalStore)(({
      shared: _v0
    }) => _v0.data.isMobileOrTab);
    return (0, _v1.jsxs)(_v15.HStack, {
      py: (0, _v16.rem)(8),
      px: (0, _v16.rem)(5),
      justifyContent: "space-between",
      w: "100%",
      children: [(0, _v1.jsxs)(_v15.HStack, {
        children: [(0, _v1.jsx)(_v26.BokehSkeleton, {
          width: 36,
          height: 36,
          borderRadius: "50%"
        }), (0, _v1.jsxs)(_v25.VStack, {
          gap: (0, _v16.rem)(3),
          alignItems: "initial",
          children: [(0, _v1.jsx)(_v26.BokehSkeleton, {
            width: 100,
            height: 17
          }), (0, _v1.jsx)(_v26.BokehSkeleton, {
            width: 150,
            height: 16
          })]
        })]
      }), !_v0 && (0, _v1.jsx)(_v26.BokehSkeleton, {
        width: 70,
        height: 17
      })]
    });
  };
  var _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0);
  let _v32 = ({
    searchQuery: _v0,
    isViewerShareScreen: _v1,
    onInviteNewMember: _v2
  }) => {
    let _v3 = (0, _v9.useGlobalStore)(({
        resourceProps: _v0
      }) => _v0.resourceType),
      _v4 = (0, _v9.useGlobalStore)(({
        capabilities: _v0
      }) => _v0.data.hasTeamInvite),
      {
        canEdit: _v5,
        canViewerShare: _v6
      } = (0, _v9.useGlobalStore)((0, _v13.useShallow)(({
        resourceProps: _v0
      }) => ({
        canEdit: _v0.data.canEdit,
        canViewerShare: _v0.data.canViewerShare
      }))),
      _v7 = (0, _v11.validateEmail)(_v0),
      _v8 = _v7 ? _v0 : "",
      _v9 = _v4 || _v1 && _v6,
      _v10 = () => {
        if (_v7) {
          if (_v9) return (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v17.translate)({
              singular: "Invite",
              dictionary: {
                es: {
                  singular: "Invitar"
                },
                "de-DE": {
                  singular: "Einladen"
                },
                "fr-FR": {
                  singular: "Inviter"
                },
                "ja-JP": {
                  singular: "招待"
                },
                "ko-KR": {
                  singular: "초대"
                },
                "pt-BR": {
                  singular: "Convidar"
                },
                "zh-CN": {
                  singular: "邀请"
                }
              }
            }), " ", (0, _v1.jsx)("strong", {
              children: _v8
            })]
          });
          if (_v5) return (0, _v17.translate)({
            singular: "Contact an admin to invite",
            dictionary: {
              es: {
                singular: "Póngase en contacto con un administrador para invitar a"
              },
              "de-DE": {
                singular: "Kontaktiere einen Admin, um folgende Person einzuladen:"
              },
              "fr-FR": {
                singular: "Contactez un administrateur pour l'inviter"
              },
              "ja-JP": {
                singular: "管理者に問い合わせて招待してもらう"
              },
              "ko-KR": {
                singular: "해당 이메일 주소로 초대장을 보내려면 관리자에게 문의하세요."
              },
              "pt-BR": {
                singular: "Peça para o administrador convidar"
              },
              "zh-CN": {
                singular: "联系管理员发送邀请"
              }
            }
          });
          if (!_v6) return (0, _v17.translate)({
            singular: "This person is not an existing member",
            dictionary: {
              es: {
                singular: "Esta persona no es un miembro existente."
              },
              "de-DE": {
                singular: "Diese Person ist kein bestehendes Mitglied."
              },
              "fr-FR": {
                singular: "Cette personne n'est pas un membre actuel"
              },
              "ja-JP": {
                singular: "このユーザーは既存のメンバーではありません"
              },
              "ko-KR": {
                singular: "이 사람은 기존 회원이 아닙니다."
              },
              "pt-BR": {
                singular: "Essa pessoa não é um membro existente"
              },
              "zh-CN": {
                singular: "此人不是现有成员"
              }
            }
          });
        }
        return _v4 ? (0, _v17.translate)({
          singular: "Type an email to invite someone to the team and {RESOURCE}.",
          replacements: {
            RESOURCE: (() => {
              switch (_v3) {
                case _v10.ResourceType.Video:
                  return (0, _v17.translate)({
                    singular: "video",
                    dictionary: {
                      "de-DE": {
                        singular: "Video"
                      },
                      "fr-FR": {
                        singular: "vidéo"
                      },
                      "ja-JP": {
                        singular: "動画"
                      },
                      "ko-KR": {
                        singular: "동영상"
                      },
                      "pt-BR": {
                        singular: "vídeo"
                      },
                      "zh-CN": {
                        singular: "视频"
                      }
                    }
                  });
                case _v10.ResourceType.Album:
                  return (0, _v17.translate)({
                    singular: "showcase",
                    dictionary: {
                      "zh-CN": {
                        singular: "橱窗"
                      }
                    }
                  });
                default:
                  return (0, _v17.translate)({
                    singular: "folder",
                    dictionary: {
                      es: {
                        singular: "carpeta"
                      },
                      "de-DE": {
                        singular: "ordner"
                      },
                      "fr-FR": {
                        singular: "dossier"
                      },
                      "ja-JP": {
                        singular: "フォルダー"
                      },
                      "ko-KR": {
                        singular: "폴더"
                      },
                      "pt-BR": {
                        singular: "pasta"
                      },
                      "zh-CN": {
                        singular: "文件夹"
                      }
                    }
                  });
              }
            })()
          },
          dictionary: {
            es: {
              singular: "Escribe un correo electrónico para invitar a alguien al equipo y {RESOURCE}."
            },
            "de-DE": {
              singular: "Geben Sie eine E-Mail-Adresse ein, um jemanden zum Team und {RESOURCE} hinzuzufügen."
            },
            "fr-FR": {
              singular: "Saisissez une adresse e-mail pour inviter une personne à rejoindre votre équipe et votre {RESOURCE}."
            },
            "ja-JP": {
              singular: "Eメールを入力して、チームと{RESOURCE}に招待しましょう。"
            },
            "ko-KR": {
              singular: "누군가를 팀과 {RESOURCE}에 초대하려면 이메일을 입력하세요."
            },
            "pt-BR": {
              singular: "Digite um e-mail para convidar alguém para a equipe e para {RESOURCE}."
            },
            "zh-CN": {
              singular: "输入电子邮件邀请某人加入团队，访问 {RESOURCE}。"
            }
          }
        }) : (0, _v17.translate)({
          singular: "Type a name or email to search for existing members",
          dictionary: {
            es: {
              singular: "Escriba un nombre o correo electrónico para buscar miembros actuales"
            },
            "de-DE": {
              singular: "Geben Sie einen Namen oder eine E-Mail-Adresse ein, um nach vorhandenen Mitgliedern zu suchen."
            },
            "fr-FR": {
              singular: "Saisissez un nom ou une adresse e-mail pour rechercher des membres existants"
            },
            "ja-JP": {
              singular: "名前またはメールアドレスを入力して既存のメンバーを検索"
            },
            "ko-KR": {
              singular: "기존 회원을 검색하려면 이름이나 이메일을 입력하세요."
            },
            "pt-BR": {
              singular: "Digite um nome ou e-mail para buscar membros existentes"
            },
            "zh-CN": {
              singular: "键入姓名或电子邮件以搜索现有成员。"
            }
          }
        });
      };
    return _v7 ? (0, _v1.jsxs)(_v29.Flex, {
      cursor: "pointer",
      p: (0, _v16.rem)(18),
      _hover: {
        bg: "background-blur"
      },
      onClick: () => {
        _v9 && _v2();
      },
      children: [_v9 && (0, _v1.jsx)(_v29.Flex, {
        verticalAlign: "middle",
        width: (0, _v16.rem)(20),
        children: (0, _v1.jsx)(_v31.Envelope, {
          boxSize: "xs"
        })
      }), (0, _v1.jsx)(_v33, {
        size: "md",
        pl: "sm",
        alignItems: "center",
        display: "flex",
        children: _v10()
      })]
    }) : (0, _v1.jsx)(_v30.Paragraph, {
      size: "md",
      p: (0, _v16.rem)(18),
      children: _v10()
    });
  };
  var _v33 = (0, _v28.default)(_v30.Paragraph).withConfig({
    displayName: "SearchPrompt___StyledParagraph",
    componentId: "sc-daa84d1a-0"
  })`
          strong {
            padding-left: ${(0, _v16.rem)(4)};
          }
        `;
  _v0.s(["SearchPrompt", 0, _v32], 0);
  let _v34 = {
      gap: 0
    },
    _v35 = (0, _v2.memo)(({
      searchQuery: _v0,
      onInviteNewMember: _v1,
      isSearchInputFocused: _v2,
      hideSearchPromptIfResults: _v3 = !1
    }) => {
      let _v4 = (0, _v9.useGlobalStore)(({
          screen: _v0
        }) => _v0.main),
        _v5 = (0, _v9.useGlobalStore)(({
          resourceProps: _v0
        }) => _v0.data.id),
        _v6 = (0, _v9.useGlobalStore)(({
          resourceProps: _v0
        }) => _v0.resourceType),
        _v7 = (0, _v9.useGlobalStore)(({
          capabilities: _v0
        }) => _v0.data.hasSuggestedSharingRecipients),
        _v8 = (0, _v9.useGlobalStore)(_v0 => _v0.capabilities.data.hasMultiUserSharing),
        {
          isInitLoading: _v9,
          isLoadingMore: _v10,
          teamPermissions: _v11,
          canLoadMore: _v12,
          loadMoreTeamPermissions: _v13,
          revalidateTeamPermissions: _v14
        } = (0, _v8.useGetTeamPermissions)({
          query: {
            query: _v0,
            accessType: _v8.ACCESS_TYPE.ANY
          },
          shouldSkip: () => !_v0 || !_v8 && _v4 === _v10.ShareModalState.Invitation
        }),
        _v15 = (0, _v9.useGlobalStore)(_v0 => _v0.teamPermissions.actions.setRevalidateSearchTeamPermissions),
        {
          data: _v16
        } = (0, _v5.useGetResourceResourceIdSharingSuggestions)(() => _v7 && _v7.ALLOWED_RESOURCE_FOR_SUGGESTIONS.includes(_v6) ? {
          where: {
            resourceId: _v5,
            resourceType: _v7.RESOURCE_TYPE_API_MAP[_v6]
          },
          select: _v7.TEAM_PERMISSIONS_FIELD,
          query: {
            entityTypes: [_v7.EntityTypes.TeamUser]
          }
        } : null);
      (0, _v2.useEffect)(() => {
        _v15(_v14);
      }, [_v14, _v15]);
      let _v17 = (0, _v11.validateEmail)(_v0) ? _v0 : "",
        _v18 = _v11?.data?.find(_v0 => _v17 && _v0.teamEntity.email === _v17),
        _v19 = (_v18?.teamEntity.metadata.connections.teamUser?.permissionLevel ?? "") === _v10.PermissionLevel.Uploader,
        _v20 = !_v0.length && _v2 && _v7,
        _v21 = (0, _v2.useMemo)(() => _v20 ? _v16?.data ?? [] : _v11?.data ?? [], [_v2, _v11, _v16, _v7, _v0]),
        _v22 = (0, _v2.useMemo)(() => _v21?.map(_v0 => (0, _v1.jsx)(_v22, {
          teamEntity: {
            ..._v0.teamEntity,
            currentPermissionPolicy: _v0.currentPermissionPolicies?.[0] ?? null
          },
          onInviteNewMember: () => {
            _v1(_v0);
          }
        }, _v0.teamEntity.uri)), [_v21, _v1]),
        _v23 = (0, _v2.useMemo)(() => {
          let _v0 = [];
          return _v22?.length && _v0.push(..._v22), _v10 && _v0.push((0, _v1.jsx)(_v27, {})), _v0;
        }, [_v22, _v10]);
      if ((0, _v2.useEffect)(() => {
        _v18 && !_v19 && _v1(_v18);
      }, [_v18, _v1, _v19]), _v9 || _v18 && !_v19) return (0, _v1.jsx)(_v12.Loader, {});
      let _v24 = !!_v11?.data?.length && !!_v0 || !!_v21?.length && _v2,
        _v25 = _v3 && _v24;
      return (0, _v1.jsxs)(_v3.Box, {
        children: [!_v19 && !_v20 && !_v25 && (0, _v1.jsx)(_v32, {
          searchQuery: _v0,
          onInviteNewMember: _v1,
          isViewerShareScreen: !1
        }), _v24 && (0, _v1.jsxs)(_v1.Fragment, {
          children: [!_v19 && !_v25 && (0, _v1.jsx)(_v4.Divider, {
            borderColor: "stroke"
          }), (0, _v1.jsx)(_v6.VirtualizedList, {
            listItems: _v23,
            wrapperOverrides: _v36,
            canLoadMore: _v12,
            isFetchingMore: _v10,
            loadMore: _v13,
            virtualizerOptions: _v34
          })]
        })]
      });
    }),
    _v36 = {
      maxH: 300
    };
  _v0.s(["SearchResultContainer", 0, _v35], 0);
}