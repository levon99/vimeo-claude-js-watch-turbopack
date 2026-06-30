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
    _v14 = _v0.i(0);
  let _v15 = ({
    avatars: _v0
  }) => {
    let _v1 = _v0.slice(0, 3),
      _v2 = Math.max(0, _v0.length - 3),
      _v3 = (0, _v12.useColorModeValue)("var(--vimeo-colors-gray-200)", "var(--vimeo-colors-gray-650)"),
      _v4 = (0, _v12.useColorModeValue)("1px solid var(--vimeo-colors-blackAlpha-300)", "1px solid var(--vimeo-colors-whiteAlpha-300)");
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [_v1.map((_v0, _v1) => (0, _v1.jsx)(_v9.Avatar, {
        src: _v0.avatarSrc,
        alt: _v0.name,
        size: "sm",
        nameProps: {
          name: _v0.name
        },
        sx: {
          flexShrink: 0,
          position: "relative",
          marginLeft: _v1 > 0 ? (0, _v8.rem)(-8) : 0,
          zIndex: _v1.length - _v1,
          border: "none",
          ...(_v0.isPending ? {
            filter: "saturate(0.4) brightness(0.8)"
          } : {})
        }
      }, `avatar-${_v0.name}-${_v1}`)), _v2 > 0 && (0, _v1.jsx)(_v4.Flex, {
        position: "relative",
        zIndex: 0,
        ml: (0, _v8.rem)(-8),
        align: "center",
        justify: "center",
        borderRadius: "round",
        bgColor: _v3,
        border: _v4,
        w: (0, _v8.rem)(32),
        h: (0, _v8.rem)(32),
        flexShrink: 0,
        children: (0, _v1.jsxs)(_v11.Paragraph, {
          size: "sm",
          color: "text-secondary",
          children: ["+", _v2]
        })
      }), (0, _v1.jsx)(_v10.IconButton, {
        icon: (0, _v1.jsx)(_v13.PlusSmall, {}),
        "aria-label": (0, _v14.translate)({
          singular: "Team members",
          dictionary: {
            es: {
              singular: "Miembros del equipo"
            },
            "de-DE": {
              singular: "Teammitglieder"
            },
            "fr-FR": {
              singular: "Membres de l'équipe"
            },
            "ja-JP": {
              singular: "チームメンバー"
            },
            "ko-KR": {
              singular: "팀 구성원"
            },
            "pt-BR": {
              singular: "Membros da equipe"
            },
            "zh-CN": {
              singular: "团队成员"
            }
          }
        }),
        variant: "secondary",
        size: "sm",
        borderRadius: "round",
        "data-testid": "team-members-preview-add-button",
        position: "relative",
        zIndex: -1,
        ml: (0, _v8.rem)(-8),
        flexShrink: 0
      })]
    });
  };
  var _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0);
  let _v23 = _v0 => (0, _v1.jsx)(_v22.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      d: "M16 20c0-.34-.234-.817-.979-1.264C14.297 18.302 13.232 18 12 18c-1.23 0-2.297.302-3.021.736C8.234 19.183 8 19.661 8 20a1 1 0 1 1-2 0c0-1.318.885-2.34 1.95-2.979C9.035 16.372 10.47 16 12 16c1.53 0 2.965.37 4.05 1.021C17.115 17.662 18 18.683 18 20a1 1 0 1 1-2 0ZM2 17c0-.974.492-1.797 1.169-2.406.674-.607 1.579-1.05 2.577-1.312a1.001 1.001 0 0 1 .508 1.936c-.767.2-1.363.518-1.747.863-.381.343-.507.663-.507.919a1 1 0 1 1-2 0Zm18 0c0-.256-.126-.576-.507-.919-.336-.302-.833-.583-1.467-.783l-.28-.08-.098-.031a1.001 1.001 0 0 1 .505-1.925l.1.02.37.108c.851.268 1.618.673 2.208 1.204C21.508 15.203 22 16.026 22 17a1 1 0 1 1-2 0Zm-6-6a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM4 8a4 4 0 0 1 6.531-3.097l.136.116.072.072a1 1 0 0 1-1.326 1.482l-.08-.064-.138-.113a2 2 0 0 0-2.675 2.95l.147.145.072.072a1 1 0 0 1-1.326 1.483l-.08-.065-.15-.141A3.99 3.99 0 0 1 4 8Zm14 0a2 2 0 0 0-3.333-1.491 1 1 0 0 1-1.334-1.49 4 4 0 0 1 5.334 5.963 1 1 0 0 1-1.334-1.49c.41-.368.667-.9.667-1.492Zm-2 3a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
      fill: "currentColor"
    })
  });
  var _v24 = _v0.i(0),
    _v25 = _v0.i(0);
  let _v26 = ({
      name: _v0,
      avatarSrc: _v1,
      dimmed: _v2 = !1,
      trailing: _v3
    }) => (0, _v1.jsxs)(_v4.Flex, {
      gap: "sm",
      align: "center",
      w: "100%",
      children: [(0, _v1.jsx)(_v9.Avatar, {
        src: _v1,
        alt: _v0,
        size: "sm",
        nameProps: {
          name: _v0
        },
        sx: _v2 ? {
          filter: "saturate(0.4) brightness(0.8)"
        } : void 0
      }), (0, _v1.jsxs)(_v4.Flex, {
        flex: "1 0 0",
        align: "center",
        justify: "space-between",
        minW: 0,
        gap: "sm",
        children: [(0, _v1.jsx)(_v11.Paragraph, {
          size: "sm",
          color: "text-primary",
          flex: "1 0 0",
          minW: 0,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          children: _v0
        }), _v3]
      })]
    }),
    _v27 = ({
      testId: _v0
    }) => (0, _v1.jsx)(_v16.Badge, {
      size: "sm",
      flexShrink: 0,
      borderRadius: "3xl",
      sx: {
        display: "flex",
        height: "24px",
        padding: "0 8px",
        justifyContent: "center",
        alignItems: "center",
        gap: "4px",
        border: "1px solid var(--vimeo-colors-vimeoBlueAlpha-400)",
        background: "var(--vimeo-colors-vimeoBlueAlpha-300)",
        color: "var(--vimeo-colors-text-primary)"
      },
      "data-testid": _v0,
      children: (0, _v14.translate)({
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
      })
    }),
    _v28 = ({
      contentSpaceEnabled: _v0,
      members: _v1,
      pending: _v2,
      memberCount: _v3,
      pendingCount: _v4,
      onManageTeam: _v5,
      onInviteMembers: _v6,
      onStartYourTeam: _v7
    }) => {
      let _v8 = (0, _v14.translate)({
          singular: "{count} member",
          plural: "{count} members",
          replacements: {
            count: _v3
          },
          count: _v3,
          dictionary: {
            es: {
              singular: "{count} miembro",
              plural: "{count} miembros"
            },
            "de-DE": {
              singular: "{count} Mitglied",
              plural: "{count} Mitglieder"
            },
            "fr-FR": {
              singular: "{count} membre",
              plural: "{count} membres"
            },
            "ja-JP": {
              singular: "{count}名のメンバー",
              plural: "{count}名のメンバー"
            },
            "ko-KR": {
              singular: "{count}명 구성원",
              plural: "{count}명 구성원"
            },
            "pt-BR": {
              singular: "{count} membro",
              plural: "{count} membros"
            },
            "zh-CN": {
              singular: "{count} 位成员",
              plural: "{count} 位成员"
            }
          }
        }),
        _v9 = _v4 > 0 ? `${_v8} • ${(0, _v14.translate)({
          singular: "{count} pending",
          plural: "{count} pending",
          replacements: {
            count: _v4
          },
          count: _v4,
          dictionary: {
            es: {
              singular: "{count} pendiente",
              plural: "{count} pendientes"
            },
            "de-DE": {
              singular: "{count} ausstehend",
              plural: "{count} ausstehend"
            },
            "fr-FR": {
              singular: "{count} en attente",
              plural: "{count} en attente"
            },
            "ja-JP": {
              singular: "{count}件が承認待ち",
              plural: "{count}件が承認待ち"
            },
            "ko-KR": {
              singular: "{count}명 대기 중",
              plural: "{count}명 대기 중"
            },
            "pt-BR": {
              singular: "{count} pendente",
              plural: "{count} pendentes"
            },
            "zh-CN": {
              singular: "{count} 个待处理",
              plural: "{count} 个待处理"
            }
          }
        })}` : _v8;
      return (0, _v1.jsx)(_v20.PopoverContent, {
        rootProps: {
          zIndex: "popover"
        },
        w: _v0 ? (0, _v8.rem)(338) : (0, _v8.rem)(309),
        bgColor: "fill-surface",
        borderRadius: "lg",
        boxShadow: "0px 0px 24px -5px rgba(0,0,0,0.16), 0px 0px 4px 0px rgba(0,0,0,0.08)",
        "data-testid": "team-members-popover",
        children: (0, _v1.jsxs)(_v4.Flex, {
          direction: "column",
          overflow: "hidden",
          gap: "sm",
          pb: _v0 ? "md" : (0, _v8.rem)(20),
          children: [(0, _v1.jsxs)(_v4.Flex, {
            direction: "column",
            w: "100%",
            children: [(0, _v1.jsxs)(_v4.Flex, {
              align: _v0 ? "center" : "flex-start",
              gap: "sm",
              w: "100%",
              sx: {
                padding: _v0 ? "var(--md, 16px)" : `${(0, _v8.rem)(16)} ${(0, _v8.rem)(16)} ${(0, _v8.rem)(8)} ${(0, _v8.rem)(20)}`
              },
              children: [(0, _v1.jsxs)(_v4.Flex, {
                direction: "column",
                flex: "1 0 0",
                minW: 0,
                children: [(0, _v1.jsx)(_v19.Header, {
                  size: "sm",
                  color: "text-primary",
                  children: (0, _v14.translate)({
                    singular: "Team",
                    dictionary: {
                      es: {
                        singular: "Equipo"
                      },
                      "fr-FR": {
                        singular: "Équipe"
                      },
                      "ja-JP": {
                        singular: "チーム"
                      },
                      "ko-KR": {
                        singular: "팀"
                      },
                      "pt-BR": {
                        singular: "Equipe"
                      },
                      "zh-CN": {
                        singular: "团队"
                      }
                    }
                  })
                }), (0, _v1.jsx)(_v11.Paragraph, {
                  size: "sm",
                  color: "text-secondary",
                  children: _v9
                })]
              }), _v0 && (0, _v1.jsxs)(_v4.Flex, {
                gap: "xs",
                align: "center",
                flexShrink: 0,
                children: [(0, _v1.jsx)(_v21.Tooltip, {
                  label: (0, _v14.translate)({
                    singular: "Manage team",
                    dictionary: {
                      es: {
                        singular: "Dirija a su equipo"
                      },
                      "de-DE": {
                        singular: "Team verwalten"
                      },
                      "fr-FR": {
                        singular: "Gérer l'équipe"
                      },
                      "ja-JP": {
                        singular: "チームを管理"
                      },
                      "ko-KR": {
                        singular: "팀 관리"
                      },
                      "pt-BR": {
                        singular: "Gerenciar equipe"
                      },
                      "zh-CN": {
                        singular: "管理团队"
                      }
                    }
                  }),
                  children: (0, _v1.jsx)(_v10.IconButton, {
                    icon: (0, _v1.jsx)(_v25.SettingsGear, {}),
                    "aria-label": (0, _v14.translate)({
                      singular: "Manage team",
                      dictionary: {
                        es: {
                          singular: "Dirija a su equipo"
                        },
                        "de-DE": {
                          singular: "Team verwalten"
                        },
                        "fr-FR": {
                          singular: "Gérer l'équipe"
                        },
                        "ja-JP": {
                          singular: "チームを管理"
                        },
                        "ko-KR": {
                          singular: "팀 관리"
                        },
                        "pt-BR": {
                          singular: "Gerenciar equipe"
                        },
                        "zh-CN": {
                          singular: "管理团队"
                        }
                      }
                    }),
                    variant: "tertiary",
                    size: "md",
                    "data-testid": "team-members-popover-manage-button",
                    onClick: _v5
                  })
                }), (0, _v1.jsx)(_v21.Tooltip, {
                  label: (0, _v14.translate)({
                    singular: "Add participants",
                    dictionary: {
                      es: {
                        singular: "Agregar participantes"
                      },
                      "de-DE": {
                        singular: "Teilnehmer hinzufügen"
                      },
                      "fr-FR": {
                        singular: "Ajouter des participants"
                      },
                      "ja-JP": {
                        singular: "参加者を追加"
                      },
                      "ko-KR": {
                        singular: "참가자 추가"
                      },
                      "pt-BR": {
                        singular: "Adicionar participantes"
                      },
                      "zh-CN": {
                        singular: "添加参与者"
                      }
                    }
                  }),
                  children: (0, _v1.jsx)(_v10.IconButton, {
                    icon: (0, _v1.jsx)(_v24.PersonUserAdd, {}),
                    "aria-label": (0, _v14.translate)({
                      singular: "Add participants",
                      dictionary: {
                        es: {
                          singular: "Agregar participantes"
                        },
                        "de-DE": {
                          singular: "Teilnehmer hinzufügen"
                        },
                        "fr-FR": {
                          singular: "Ajouter des participants"
                        },
                        "ja-JP": {
                          singular: "参加者を追加"
                        },
                        "ko-KR": {
                          singular: "참가자 추가"
                        },
                        "pt-BR": {
                          singular: "Adicionar participantes"
                        },
                        "zh-CN": {
                          singular: "添加参与者"
                        }
                      }
                    }),
                    variant: "primary",
                    size: "md",
                    "data-testid": "team-members-popover-invite-button",
                    onClick: _v6
                  })
                })]
              })]
            }), (0, _v1.jsx)(_v17.Box, {
              pt: _v0 ? 0 : "xs",
              pb: "xs",
              children: (0, _v1.jsx)(_v17.Box, {
                h: "1px",
                bgColor: "stroke",
                w: "100%"
              })
            })]
          }), (0, _v1.jsxs)(_v4.Flex, {
            direction: "column",
            gap: "lg",
            px: _v0 ? "md" : (0, _v8.rem)(20),
            maxH: (0, _v8.rem)(360),
            overflowY: "auto",
            children: [(0, _v1.jsxs)(_v4.Flex, {
              direction: "column",
              gap: (0, _v8.rem)(12),
              children: [(0, _v1.jsx)(_v11.Paragraph, {
                size: "sm",
                color: "text-secondary",
                children: (0, _v14.translate)({
                  singular: "Members",
                  dictionary: {
                    es: {
                      singular: "Miembros"
                    },
                    "de-DE": {
                      singular: "Mitglieder"
                    },
                    "fr-FR": {
                      singular: "Membres"
                    },
                    "ja-JP": {
                      singular: "メンバー"
                    },
                    "ko-KR": {
                      singular: "멤버"
                    },
                    "pt-BR": {
                      singular: "Membros"
                    },
                    "zh-CN": {
                      singular: "成员"
                    }
                  }
                })
              }), _v1.map((_v0, _v1) => (0, _v1.jsx)(_v26, {
                name: _v0.name,
                avatarSrc: _v0.avatarSrc,
                trailing: (0, _v1.jsx)(_v11.Paragraph, {
                  size: "sm",
                  color: "text-secondary",
                  flexShrink: 0,
                  children: _v0.role
                })
              }, `member-${_v1}`))]
            }), _v2.length > 0 && (0, _v1.jsxs)(_v4.Flex, {
              direction: "column",
              gap: "md",
              children: [(0, _v1.jsx)(_v11.Paragraph, {
                size: "sm",
                color: "text-secondary",
                children: (0, _v14.translate)({
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
                })
              }), (0, _v1.jsx)(_v4.Flex, {
                direction: "column",
                gap: (0, _v8.rem)(12),
                children: _v2.map((_v0, _v1) => (0, _v1.jsx)(_v26, {
                  name: _v0.email,
                  dimmed: !0,
                  trailing: (0, _v1.jsx)(_v27, {
                    testId: `team-members-popover-pending-${_v1}`
                  })
                }, `pending-${_v1}`))
              })]
            })]
          }), !_v0 && (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v17.Box, {
              py: "sm",
              children: (0, _v1.jsx)(_v17.Box, {
                h: "1px",
                bgColor: "stroke",
                w: "100%"
              })
            }), (0, _v1.jsx)(_v17.Box, {
              px: (0, _v8.rem)(20),
              children: (0, _v1.jsx)(_v18.Button, {
                leftIcon: (0, _v1.jsx)(_v23, {}),
                size: "lg",
                variant: "primary",
                w: "100%",
                "data-testid": "team-members-popover-start-team-button",
                onClick: _v7,
                children: (0, _v14.translate)({
                  singular: "Start your team",
                  dictionary: {
                    es: {
                      singular: "Comience su equipo"
                    },
                    "de-DE": {
                      singular: "Baue dein Team auf"
                    },
                    "fr-FR": {
                      singular: "Lancer votre équipe"
                    },
                    "ja-JP": {
                      singular: "チームを始める"
                    },
                    "ko-KR": {
                      singular: "팀 꾸리기"
                    },
                    "pt-BR": {
                      singular: "Crie sua equipe"
                    },
                    "zh-CN": {
                      singular: "组建团队"
                    }
                  }
                })
              })
            })]
          })]
        })
      });
    };
  var _v29 = _v0.i(0),
    _v30 = _v0.i(0);
  function _v31(_v0) {
    if (!_v0?.pictures?.sizes?.length) return;
    let _v1 = _v0.pictures.sizes[0];
    return _v1?.link;
  }
  function _v32(_v0) {
    return _v0.user?.name ? _v0.user.name : _v0.email;
  }
  _v0.s(["TeamMembersPreview", 0, ({
    ownerId: _v0,
    viewerName: _v1,
    viewerAvatarSrc: _v2,
    viewerUri: _v3,
    contentSpaceEnabled: _v4,
    isSoleTeamMember: _v5,
    onStartYourTeam: _v6,
    onInviteMembers: _v7,
    isLoading: _v8 = !1
  }) => {
    let [_v9, _v10] = (0, _v2.useState)(!1),
      {
        avatars: _v11,
        members: _v12,
        pending: _v13,
        memberCount: _v14,
        pendingCount: _v15
      } = function ({
        ownerId: _v0,
        viewerName: _v1,
        viewerAvatarSrc: _v2,
        viewerUri: _v3,
        contentSpaceEnabled: _v4,
        isSoleTeamMember: _v5
      }) {
        let _v6 = _v4 && !_v5,
          _v7 = _v6 && !!_v0,
          {
            data: _v8
          } = (0, _v29.useGetUserTeammembers)(_v7 && _v0 ? () => ({
            select: ["email", "status", "permissionLevel", "user", "user.name", "user.pictures"],
            where: {
              userId: _v0
            },
            query: {
              perPage: 50
            }
          }) : () => null),
          {
            acceptedMembers: _v9,
            pendingMembers: _v10
          } = (0, _v2.useMemo)(() => {
            if (!_v8?.data) return {
              acceptedMembers: [],
              pendingMembers: []
            };
            let _v0 = _v8.data,
              _v1 = new Set(),
              _v2 = _v0.filter(_v0 => {
                let _v1 = _v0.user?.uri ? `user-${_v0.user.uri}` : `email-${_v0.email}`;
                return !_v1.has(_v1) && (_v1.add(_v1), !0);
              }),
              _v3 = _v0 => _v3 && _v0.user?.uri === _v3 ? 0 : "Owner" === _v0.permissionLevel ? 1 : "Admin" === _v0.permissionLevel ? 2 : 3;
            return {
              acceptedMembers: _v2.filter(_v0 => "accepted" === _v0.status).sort((_v0, _v1) => _v3(_v0) - _v3(_v1)),
              pendingMembers: _v2.filter(_v0 => "pending" === _v0.status)
            };
          }, [_v8, _v3]);
        return (0, _v2.useMemo)(() => {
          let _v0 = [{
              name: _v1,
              avatarSrc: _v2,
              role: (0, _v14.translate)({
                singular: "Owner",
                dictionary: {
                  es: {
                    singular: "Propietario(a)"
                  },
                  "de-DE": {
                    singular: "Inhaber"
                  },
                  "fr-FR": {
                    singular: "Propriétaire"
                  },
                  "ja-JP": {
                    singular: "所有者"
                  },
                  "ko-KR": {
                    singular: "계정 소유자"
                  },
                  "pt-BR": {
                    singular: "Proprietário"
                  },
                  "zh-CN": {
                    singular: "所有者"
                  }
                }
              })
            }],
            _v1 = _v6 ? _v9.map(_v0 => ({
              name: _v32(_v0),
              avatarSrc: _v31(_v0.user),
              role: (0, _v30.getTeamRoleLabel)(_v0.permissionLevel)
            })) : _v0,
            _v2 = _v6 ? _v10.map(_v0 => ({
              email: _v0.email
            })) : [];
          return {
            avatars: _v6 ? [..._v9.map(_v0 => ({
              name: _v32(_v0),
              avatarSrc: _v31(_v0.user),
              isPending: !1
            })), ..._v10.map(_v0 => ({
              name: _v0.email,
              avatarSrc: void 0,
              isPending: !0
            }))] : [{
              name: _v1,
              avatarSrc: _v2,
              isPending: !1
            }],
            members: _v1,
            pending: _v2,
            memberCount: _v9.length || 1,
            pendingCount: _v10.length
          };
        }, [_v6, _v9, _v10, _v1, _v2]);
      }({
        ownerId: _v0,
        viewerName: _v1,
        viewerAvatarSrc: _v2,
        viewerUri: _v3,
        contentSpaceEnabled: _v4,
        isSoleTeamMember: _v5
      });
    return _v8 ? null : (0, _v1.jsxs)(_v4.Flex, {
      gap: "sm",
      align: "center",
      flexShrink: 0,
      children: [(0, _v1.jsxs)(_v5.Popover, {
        isOpen: _v9,
        onOpen: () => _v10(!0),
        onClose: () => _v10(!1),
        placement: "bottom-end",
        gutter: 8,
        isLazy: !0,
        children: [(0, _v1.jsx)(_v6.PopoverTrigger, {
          children: (0, _v1.jsx)(_v4.Flex, {
            align: "center",
            justify: "center",
            flexShrink: 0,
            flexWrap: "nowrap",
            cursor: "pointer",
            "data-testid": "team-members-preview-trigger",
            sx: {
              borderRadius: "var(--full, 999px)",
              background: "var(--fill-component, rgba(190, 227, 248, 0.04))",
              height: "40px",
              padding: "var(--xs, 4px)"
            },
            children: (0, _v1.jsx)(_v15, {
              avatars: _v11
            })
          })
        }), (0, _v1.jsx)(_v7.Portal, {
          children: (0, _v1.jsx)(_v28, {
            contentSpaceEnabled: _v4,
            members: _v12,
            pending: _v13,
            memberCount: _v14,
            pendingCount: _v15,
            onManageTeam: () => {
              _v4 && (window.location.href = "/manage/team/members");
            },
            onInviteMembers: _v7,
            onStartYourTeam: () => {
              _v10(!1), _v6();
            }
          })
        })]
      }), (0, _v1.jsx)(_v3.Divider, {
        orientation: "vertical",
        bgColor: "stroke",
        h: (0, _v8.rem)(24)
      })]
    });
  }], 0);
}