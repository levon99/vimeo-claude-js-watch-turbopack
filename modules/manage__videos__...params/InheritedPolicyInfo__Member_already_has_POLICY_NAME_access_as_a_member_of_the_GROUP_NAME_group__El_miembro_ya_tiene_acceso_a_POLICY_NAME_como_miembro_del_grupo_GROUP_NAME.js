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
    _v9 = _v0.i(0);
  _v0.s(["InheritedPolicyInfo", 0, ({
    teamResourcePermission: _v0,
    showPolicyName: _v1 = !1,
    ..._v2
  }) => {
    let _v3 = _v0.currentPermissionPolicies?.[0],
      _v4 = _v0.assignedPermissionPolicy,
      _v5 = _v0.inheritanceSource,
      _v6 = _v0.teamEntity.metadata.connections.teamUser?.permissionLevel,
      {
        type: _v7,
        entityName: _v8,
        policyName: _v9
      } = _v5 || {},
      _v10 = (0, _v6.useGlobalStore)(({
        capabilities: _v0
      }) => _v0.data.hasMultiUserSharing),
      _v11 = (0, _v6.useGlobalStore)(({
        resourceProps: _v0
      }) => _v0.resourceType),
      _v12 = (0, _v2.useMemo)(() => {
        if (_v5) switch (_v7) {
          case "group":
            return _v1 ? (0, _v5.translate)({
              singular: "Member already has {POLICY_NAME} access as a member of the {GROUP_NAME} group",
              replacements: {
                POLICY_NAME: _v9,
                GROUP_NAME: _v8
              },
              dictionary: {
                es: {
                  singular: "El miembro ya tiene acceso a {POLICY_NAME} como miembro del grupo {GROUP_NAME}"
                },
                "de-DE": {
                  singular: "Das Mitglied hat bereits {POLICY_NAME}-Zugriff als Mitglied der {GROUP_NAME}-Gruppe."
                },
                "fr-FR": {
                  singular: "Le membre a déjà {POLICY_NAME} accès en tant que membre du groupe {GROUP_NAME}"
                },
                "ja-JP": {
                  singular: "メンバーはすでに「{GROUP_NAME}」グループのメンバーとして「{POLICY_NAME}」アクセス権を持っています。"
                },
                "ko-KR": {
                  singular: "멤버는 {GROUP_NAME} 그룹의 멤버로서 이미 {POLICY_NAME} 액세스 권한을 가지고 있습니다."
                },
                "pt-BR": {
                  singular: "Como integrante do grupo {GROUP_NAME}, o membro já tem o seguinte acesso: {POLICY_NAME}"
                },
                "zh-CN": {
                  singular: "{GROUP_NAME} 群组的成员已经拥有 {POLICY_NAME} 访问权限"
                }
              }
            }) : (0, _v5.translate)({
              singular: "Member also has access via the {GROUP_NAME} group",
              replacements: {
                GROUP_NAME: _v8
              },
              dictionary: {
                es: {
                  singular: "El miembro también tiene acceso a través del grupo {GROUP_NAME}"
                },
                "de-DE": {
                  singular: "Das Mitglied hat auch Zugriff über die {GROUP_NAME}-Gruppe."
                },
                "fr-FR": {
                  singular: "Le membre dispose également d'un accès par le biais du groupe {GROUP_NAME}"
                },
                "ja-JP": {
                  singular: "メンバーは「{GROUP_NAME}」グループ経由でもアクセス権を持っています"
                },
                "ko-KR": {
                  singular: "멤버는 {GROUP_NAME} 그룹을 통해서도 액세스할 수 있습니다."
                },
                "pt-BR": {
                  singular: "O membro também tem acesso por meio do grupo {GROUP_NAME}."
                },
                "zh-CN": {
                  singular: "成员也可以通过 {GROUP_NAME} 群组访问"
                }
              }
            });
          case "all_team":
            return _v1 ? (0, _v5.translate)({
              singular: "Member already has {POLICY_NAME} as a member of the All group",
              replacements: {
                POLICY_NAME: _v9
              },
              dictionary: {
                es: {
                  singular: "El miembro ya tiene {POLICY_NAME} como miembro del grupo Todos"
                },
                "de-DE": {
                  singular: "Mitglied hat bereits {POLICY_NAME} als Mitglied der Gruppe „Alle“"
                },
                "fr-FR": {
                  singular: "Le membre dispose déjà de {POLICY_NAME} en tant que membre du groupe Tout"
                },
                "ja-JP": {
                  singular: "メンバーはすでに「すべて」グループのメンバーとして「{POLICY_NAME}」を持っています。"
                },
                "ko-KR": {
                  singular: "멤버는 모든 그룹의 멤버로서 이미 {POLICY_NAME}을(를) 가지고 있습니다."
                },
                "pt-BR": {
                  singular: "Como integrante do grupo Todos, o membro já tem o seguinte acesso: {POLICY_NAME}"
                },
                "zh-CN": {
                  singular: "该成员已经将 {POLICY_NAME} 作为“所有”群组的成员"
                }
              }
            }) : (0, _v5.translate)({
              singular: "Member also has access via the All group",
              dictionary: {
                es: {
                  singular: "El miembro también tiene acceso a través del grupo Todos"
                },
                "de-DE": {
                  singular: "Das Mitglied hat auch Zugriff über die Gruppe „Alle“"
                },
                "fr-FR": {
                  singular: "Le membre dispose également d'un accès par le biais du groupe Tous"
                },
                "ja-JP": {
                  singular: "メンバーは「すべて」グループ経由でもアクセス権を持っています"
                },
                "ko-KR": {
                  singular: "멤버는 모든 그룹을 통해서도 액세스할 수 있습니다."
                },
                "pt-BR": {
                  singular: "O membro também tem acesso por meio do grupo Todos"
                },
                "zh-CN": {
                  singular: "成员也可以通过“所有”组进行访问"
                }
              }
            });
          case "folder":
            return _v1 ? (0, _v5.translate)({
              singular: "Member already has {POLICY_NAME} access via the parent folder",
              replacements: {
                POLICY_NAME: _v9
              },
              dictionary: {
                es: {
                  singular: "El miembro ya tiene acceso a {POLICY_NAME} a través de la carpeta principal"
                },
                "de-DE": {
                  singular: "Das Mitglied hat bereits {POLICY_NAME}-Zugriff über den übergeordneten Ordner."
                },
                "fr-FR": {
                  singular: "Le membre dispose déjà d'un accès par le biais du dossier parent : {POLICY_NAME}"
                },
                "ja-JP": {
                  singular: "メンバーはすでに親フォルダーを通じて「{POLICY_NAME}」のアクセス権を持っています。"
                },
                "ko-KR": {
                  singular: "멤버는 이미 상위 폴더를 통해 {POLICY_NAME} 액세스 권한을 가지고 있습니다."
                },
                "pt-BR": {
                  singular: "O membro já tem o seguinte acesso por meio da pasta principal: {POLICY_NAME}"
                },
                "zh-CN": {
                  singular: "成员已经通过父文件夹拥有 {POLICY_NAME} 访问权限"
                }
              }
            }) : (0, _v5.translate)({
              singular: "Member also has access via the parent folder",
              dictionary: {
                es: {
                  singular: "El miembro también tiene acceso a través de la carpeta principal"
                },
                "de-DE": {
                  singular: "Das Mitglied hat auch Zugriff über den übergeordneten Ordner."
                },
                "fr-FR": {
                  singular: "Le membre dispose également d'un accès par le biais du dossier parent"
                },
                "ja-JP": {
                  singular: "メンバーは親フォルダー経由でもアクセス権を持っています"
                },
                "ko-KR": {
                  singular: "멤버는 상위 폴더를 통해서도 액세스할 수 있습니다"
                },
                "pt-BR": {
                  singular: "O membro também tem acesso por meio da pasta principal"
                },
                "zh-CN": {
                  singular: "成员还可以通过父文件夹进行访问"
                }
              }
            });
          case "admin":
            return _v1 ? (0, _v5.translate)({
              singular: "Member already has Can manage access as an admin",
              dictionary: {
                es: {
                  singular: "El miembro ya puede administrar el acceso como administrador"
                },
                "de-DE": {
                  singular: "Das Mitglied hat bereits die Berechtigung, den Zugriff als Administrator zu verwalten."
                },
                "fr-FR": {
                  singular: "Le membre dispose déjà d'un droit de modification en tant qu'administrateur"
                },
                "ja-JP": {
                  singular: "メンバーはすでに管理者として「管理可能」アクセス権を持っています"
                },
                "ko-KR": {
                  singular: "멤버는 이미 관리자의 액세스 관리 권한을 가지고 있습니다."
                },
                "pt-BR": {
                  singular: "O membro já tem acesso de gerenciamento como administrador"
                },
                "zh-CN": {
                  singular: "成员已经具有以管理员身份管理访问权限的权限"
                }
              }
            }) : (0, _v5.translate)({
              singular: "Member also has access as an admin",
              dictionary: {
                es: {
                  singular: "El miembro también tiene acceso como administrador"
                },
                "de-DE": {
                  singular: "Das Mitglied hat auch als Administrator-Zugriff"
                },
                "fr-FR": {
                  singular: "Le membre dispose également d'un accès en tant qu'administrateur"
                },
                "ja-JP": {
                  singular: "メンバーは管理者としてのアクセス権も持っています"
                },
                "ko-KR": {
                  singular: "멤버는 관리자 권한으로도 액세스할 수 있습니다."
                },
                "pt-BR": {
                  singular: "O membro também tem acesso como administrador"
                },
                "zh-CN": {
                  singular: "成员还可以作为管理员进行访问"
                }
              }
            });
        }
        return "";
      }, [_v7, _v8, _v9, _v5, _v1]),
      _v13 = (0, _v2.useMemo)(() => _v6 !== _v7.PermissionLevel.Admin || !_v4 || _v7.PERMISSION_POLICY_GROUPS.EDIT.includes(_v4.name) || _v7.PERMISSION_POLICY_GROUPS.MANAGE.includes(_v4.name) ? "" : (0, _v5.translate)({
        singular: "This member can still edit because they’re an admin",
        dictionary: {
          es: {
            singular: "Este miembro aún puede editar porque es un administrador."
          },
          "de-DE": {
            singular: "Dieses Mitglied kann weiterhin bearbeiten, da es Admin ist."
          },
          "fr-FR": {
            singular: "Ce membre peut toujours modifier le contenu car il est administrateur"
          },
          "ja-JP": {
            singular: "このメンバーは管理者であるため、引き続き編集できます"
          },
          "ko-KR": {
            singular: "이 멤버는 관리자이므로 편집할 수 있습니다."
          },
          "pt-BR": {
            singular: "Este membro ainda pode editar porque é administrador"
          },
          "zh-CN": {
            singular: "该成员仍然可以编辑，因为其角色为管理员"
          }
        }
      }), [_v4, _v6]),
      _v14 = (0, _v2.useMemo)(() => {
        if (![_v7.PermissionLevel.Contributor, _v7.PermissionLevel.ContributorPlus].includes(_v6) || !_v3 || !_v4) return "";
        if ((0, _v9.weightOf)(_v4) === (0, _v9.weightOf)(_v3)) {
          switch (_v5?.type) {
            case "all_team":
              return (0, _v5.translate)({
                singular: "This member also has access via the All group",
                dictionary: {
                  es: {
                    singular: "Este miembro también tiene acceso a través del grupo Todos."
                  },
                  "de-DE": {
                    singular: "Dieses Mitglied hat auch Zugriff über die Gruppe „Alle“."
                  },
                  "fr-FR": {
                    singular: "Ce membre dispose également d'un accès par le biais du groupe Tous"
                  },
                  "ja-JP": {
                    singular: "このメンバーも「すべて」グループ経由でアクセス権を持っています"
                  },
                  "ko-KR": {
                    singular: "이 멤버는 모든 그룹을 통해서도 액세스할 수 있습니다."
                  },
                  "pt-BR": {
                    singular: "Este membro também tem acesso por meio do grupo Todos"
                  },
                  "zh-CN": {
                    singular: "该成员还可以通过“全部”群组访问"
                  }
                }
              });
            case "group":
              return (0, _v5.translate)({
                singular: "This member also has access via the {GROUP_NAME} group",
                replacements: {
                  GROUP_NAME: _v5.entityName
                },
                dictionary: {
                  es: {
                    singular: "Este miembro también tiene acceso a través del grupo {GROUP_NAME}."
                  },
                  "de-DE": {
                    singular: "Dieses Mitglied hat auch Zugriff über die Gruppe „{GROUP_NAME}“."
                  },
                  "fr-FR": {
                    singular: "Ce membre dispose également d'un accès par le biais du groupe {GROUP_NAME}"
                  },
                  "ja-JP": {
                    singular: "このメンバーも「{GROUP_NAME}」グループ経由でアクセス権を持っています"
                  },
                  "ko-KR": {
                    singular: "이 멤버는 {GROUP_NAME} 그룹을 통해서도 액세스할 수 있습니다."
                  },
                  "pt-BR": {
                    singular: "Este membro também tem acesso por meio do grupo {GROUP_NAME}"
                  },
                  "zh-CN": {
                    singular: "该成员还可以通过 {GROUP_NAME} 群组进行访问"
                  }
                }
              });
            case "folder":
              return (0, _v5.translate)({
                singular: "This member also has access via the parent folder",
                dictionary: {
                  es: {
                    singular: "Este miembro también tiene acceso a través de la carpeta principal."
                  },
                  "de-DE": {
                    singular: "Dieses Mitglied hat auch Zugriff über den übergeordneten Ordner."
                  },
                  "fr-FR": {
                    singular: "Ce membre dispose également d'un accès par le biais du dossier parent"
                  },
                  "ja-JP": {
                    singular: "このメンバーは親フォルダー経由でもアクセス権を持っています"
                  },
                  "ko-KR": {
                    singular: "이 멤버는 상위 폴더를 통해서도 액세스할 수 있습니다."
                  },
                  "pt-BR": {
                    singular: "Este membro também tem acesso por meio da pasta principal"
                  },
                  "zh-CN": {
                    singular: "该成员还可以通过父文件夹进行访问"
                  }
                }
              });
          }
          return "";
        }
        if (!((0, _v9.weightOf)(_v4) < (0, _v9.weightOf)(_v3))) return "";
        switch (_v5?.type) {
          case "all_team":
            if ("manage" === _v7.PERMISSION_TO_ACTION_MAP[_v3.name]) return (0, _v5.translate)({
              singular: "This member can still manage because they are part of the All group",
              dictionary: {
                es: {
                  singular: "Este miembro aún puede gestionar porque forma parte del grupo Todos."
                },
                "de-DE": {
                  singular: "Dieses Mitglied kann weiterhin verwalten, weil es Teil der Gruppe „Alle“ ist."
                },
                "fr-FR": {
                  singular: "Ce membre peut toujours gérer le contenu car il fait partie du groupe Tous"
                },
                "ja-JP": {
                  singular: "このメンバーは「すべて」グループに属しているため、引き続き管理できます。"
                },
                "ko-KR": {
                  singular: "이 멤버는 전체 그룹에 속해 있으므로 관리할 수 있습니다."
                },
                "pt-BR": {
                  singular: "Este membro ainda pode gerenciar porque está no grupo Todos"
                },
                "zh-CN": {
                  singular: "此成员仍然可以管理，因为他们是“全部”群组的一员"
                }
              }
            });
            if ("edit" === _v7.PERMISSION_TO_ACTION_MAP[_v3.name]) return (0, _v5.translate)({
              singular: "This member can still edit because they are part of the All group",
              dictionary: {
                es: {
                  singular: "Este miembro aún puede editar porque forma parte del grupo Todos."
                },
                "de-DE": {
                  singular: "Dieses Mitglied kann immer noch bearbeiten, weil es Teil der Gruppe „Alle“ ist"
                },
                "fr-FR": {
                  singular: "Ce membre peut toujours modifier le contenu car il fait partie du groupe Tous"
                },
                "ja-JP": {
                  singular: "このメンバーは「すべて」グループに属しているため、引き続き編集できます。"
                },
                "ko-KR": {
                  singular: "이 멤버는 전체 그룹에 속해 있으므로 편집할 수 있습니다"
                },
                "pt-BR": {
                  singular: "Este membro ainda pode editar porque está no grupo Todos"
                },
                "zh-CN": {
                  singular: "此成员仍然可以编辑，因为他们是“全部”群组的一员"
                }
              }
            });
            return (0, _v5.translate)({
              singular: "This member can still comment because they are part of the All group",
              dictionary: {
                es: {
                  singular: "Este miembro aún puede comentar porque forma parte del grupo Todos."
                },
                "de-DE": {
                  singular: "Dieses Mitglied kann weiterhin Kommentare abgeben, da es Teil der Gruppe „Alle“ ist."
                },
                "fr-FR": {
                  singular: "Ce membre peut toujours commenter le contenu car il fait partie du groupe Tous"
                },
                "ja-JP": {
                  singular: "このメンバーは「すべて」グループに属しているため、引き続きコメントできます。"
                },
                "ko-KR": {
                  singular: "이 멤버는 All 그룹에 속해 있으므로 댓글을 작성할 수 있습니다."
                },
                "pt-BR": {
                  singular: "Este membro ainda pode comentar porque faz parte do grupo Todos"
                },
                "zh-CN": {
                  singular: "该成员仍然可以发表评论，因为他们是“全部”群组的一员"
                }
              }
            });
          case "group":
            if ("manage" === _v7.PERMISSION_TO_ACTION_MAP[_v3.name]) return (0, _v5.translate)({
              singular: "This member can still manage because they are in the {GROUP} group",
              replacements: {
                GROUP: _v5.entityName
              },
              dictionary: {
                es: {
                  singular: "Este miembro aún puede gestionar porque está en el grupo {GROUP}."
                },
                "de-DE": {
                  singular: "Dieses Mitglied kann weiterhin verwalten, weil es in der Gruppe „{GROUP}“ ist."
                },
                "fr-FR": {
                  singular: "Ce membre peut toujours gérer le contenu car il appartient au groupe {GROUP}"
                },
                "ja-JP": {
                  singular: "このメンバーは「{GROUP}」グループに属しているため、引き続き管理できます。"
                },
                "ko-KR": {
                  singular: "이 멤버는 {GROUP} 그룹에 속해 있으므로 관리할 수 있습니다."
                },
                "pt-BR": {
                  singular: "Este membro ainda pode gerenciar porque está no grupo {GROUP}"
                },
                "zh-CN": {
                  singular: "此成员仍然可以管理，因为他们属于 {GROUP} 群组"
                }
              }
            });
            if ("edit" === _v7.PERMISSION_TO_ACTION_MAP[_v3.name]) return (0, _v5.translate)({
              singular: "This member can still edit because they are in the {GROUP} group",
              replacements: {
                GROUP: _v5.entityName
              },
              dictionary: {
                es: {
                  singular: "Este miembro aún puede editar porque está en el grupo {GROUP}."
                },
                "de-DE": {
                  singular: "Dieses Mitglied kann weiterhin bearbeiten, da es sich in der Gruppe „{GROUP}“ befindet"
                },
                "fr-FR": {
                  singular: "Ce membre peut toujours modifier le contenu car il fait partie du groupe {GROUP}"
                },
                "ja-JP": {
                  singular: "このメンバーは「{GROUP}」グループに属しているため、引き続き編集できます。"
                },
                "ko-KR": {
                  singular: "이 멤버는 {GROUP} 그룹에 속해 있으므로 댓글을 작성할 수 있습니다."
                },
                "pt-BR": {
                  singular: "Este membro ainda pode editar porque está no grupo {GROUP}"
                },
                "zh-CN": {
                  singular: "该成员仍然可以编辑，因为他们属于 {GROUP} 群组"
                }
              }
            });
            return (0, _v5.translate)({
              singular: "This member can still comment because they are in the {GROUP} group",
              replacements: {
                GROUP: _v5.entityName
              },
              dictionary: {
                es: {
                  singular: "Este miembro aún puede comentar porque está en el grupo {GROUP}."
                },
                "de-DE": {
                  singular: "Dieses Mitglied kann weiterhin kommentieren, weil es zur Gruppe „{GROUP}“ Gruppe gehört."
                },
                "fr-FR": {
                  singular: "Ce membre peut toujours commenter le contenu car il appartient au groupe {GROUP}"
                },
                "ja-JP": {
                  singular: "このメンバーは「{GROUP}」グループに属しているため、引き続きコメントできます。"
                },
                "ko-KR": {
                  singular: "이 멤버는 {GROUP} 그룹에 속해 있으므로 댓글을 작성할 수 있습니다."
                },
                "pt-BR": {
                  singular: "Este membro ainda pode comentar porque está no grupo {GROUP}"
                },
                "zh-CN": {
                  singular: "该成员仍然可以评论，因为他们属于 {GROUP} 群组"
                }
              }
            });
          case "folder":
            if ("manage" === _v7.PERMISSION_TO_ACTION_MAP[_v3.name]) return (0, _v5.translate)({
              singular: "This member can still manage because they have manage access to the parent folder",
              dictionary: {
                es: {
                  singular: "Este miembro aún puede gestionar porque tiene acceso para gestionar en la carpeta principal."
                },
                "de-DE": {
                  singular: "Dieses Mitglied kann weiterhin verwalten, da es Verwaltungszugriff auf den übergeordneten Ordner hat."
                },
                "fr-FR": {
                  singular: "Ce membre peut toujours gérer le contenu car il dispose des droits de gestion sur le dossier parent"
                },
                "ja-JP": {
                  singular: "このメンバーは親フォルダーへの管理アクセス権を持っているため、引き続き管理できます"
                },
                "ko-KR": {
                  singular: "이 멤버는 상위 폴더에 대한 관리 권한이 있으므로 관리할 수 있습니다."
                },
                "pt-BR": {
                  singular: "Este membro ainda pode gerenciar porque tem acesso de administrador à pasta principal"
                },
                "zh-CN": {
                  singular: "此成员仍然可以管理，因为他们对父文件夹具有管理权限"
                }
              }
            });
            if ("edit" === _v7.PERMISSION_TO_ACTION_MAP[_v3.name]) return (0, _v5.translate)({
              singular: "This member can still edit because they have edit access to the parent folder",
              dictionary: {
                es: {
                  singular: "Este miembro aún puede editar porque tiene acceso para editar en la carpeta principal."
                },
                "de-DE": {
                  singular: "Dieses Mitglied kann weiterhin bearbeiten, weil es Bearbeitungszugriff auf den übergeordneten Ordner hat"
                },
                "fr-FR": {
                  singular: "Ce membre peut toujours modifier le contenu car il dispose des droits de modification sur le dossier parent"
                },
                "ja-JP": {
                  singular: "このメンバーは親フォルダーへの編集アクセス権を持っているため、引き続き編集できます"
                },
                "ko-KR": {
                  singular: "이 멤버는 상위 폴더에 대한 편집 권한이 있으므로 편집할 수 있습니다."
                },
                "pt-BR": {
                  singular: "Este membro ainda pode editar porque tem acesso de edição à pasta principal"
                },
                "zh-CN": {
                  singular: "该成员仍然可以编辑，因为他们拥有父文件夹的编辑权限"
                }
              }
            });
            return (0, _v5.translate)({
              singular: "This member can still comment because they have comment access to the parent folder",
              dictionary: {
                es: {
                  singular: "Este miembro aún puede comentar porque tiene acceso para comentar en la carpeta principal."
                },
                "de-DE": {
                  singular: "Dieses Mitglied kann weiterhin kommentieren, da es Zugriff auf den übergeordneten Ordner hat."
                },
                "fr-FR": {
                  singular: "Ce membre peut toujours commenter le contenu car il dispose des droits de commentaire sur le dossier parent"
                },
                "ja-JP": {
                  singular: "このメンバーは親フォルダーへのコメントアクセス権を持っているため、引き続きコメントできます"
                },
                "ko-KR": {
                  singular: "이 멤버는 상위 폴더에 대한 댓글 권한이 있으므로 댓글을 작성할 수 있습니다."
                },
                "pt-BR": {
                  singular: "Este membro ainda pode comentar porque tem acesso de comentário à pasta principal"
                },
                "zh-CN": {
                  singular: "该成员仍然可以发表评论，因为他们拥有父文件夹的评论权限"
                }
              }
            });
        }
        return "";
      }, [_v4, _v5, _v3, _v6]),
      _v15 = (0, _v2.useMemo)(() => {
        if (_v6 !== _v7.PermissionLevel.Viewer || !_v4 || !_v3) return "";
        if ((0, _v9.weightOf)(_v4) === (0, _v9.weightOf)(_v3)) {
          switch (_v5?.type) {
            case "all_team":
              return (0, _v5.translate)({
                singular: "This member also has access via the All group",
                dictionary: {
                  es: {
                    singular: "Este miembro también tiene acceso a través del grupo Todos."
                  },
                  "de-DE": {
                    singular: "Dieses Mitglied hat auch Zugriff über die Gruppe „Alle“."
                  },
                  "fr-FR": {
                    singular: "Ce membre dispose également d'un accès par le biais du groupe Tous"
                  },
                  "ja-JP": {
                    singular: "このメンバーも「すべて」グループ経由でアクセス権を持っています"
                  },
                  "ko-KR": {
                    singular: "이 멤버는 모든 그룹을 통해서도 액세스할 수 있습니다."
                  },
                  "pt-BR": {
                    singular: "Este membro também tem acesso por meio do grupo Todos"
                  },
                  "zh-CN": {
                    singular: "该成员还可以通过“全部”群组访问"
                  }
                }
              });
            case "group":
              return (0, _v5.translate)({
                singular: "This member also has access via the {GROUP_NAME} group",
                replacements: {
                  GROUP_NAME: _v5.entityName
                },
                dictionary: {
                  es: {
                    singular: "Este miembro también tiene acceso a través del grupo {GROUP_NAME}."
                  },
                  "de-DE": {
                    singular: "Dieses Mitglied hat auch Zugriff über die Gruppe „{GROUP_NAME}“."
                  },
                  "fr-FR": {
                    singular: "Ce membre dispose également d'un accès par le biais du groupe {GROUP_NAME}"
                  },
                  "ja-JP": {
                    singular: "このメンバーも「{GROUP_NAME}」グループ経由でアクセス権を持っています"
                  },
                  "ko-KR": {
                    singular: "이 멤버는 {GROUP_NAME} 그룹을 통해서도 액세스할 수 있습니다."
                  },
                  "pt-BR": {
                    singular: "Este membro também tem acesso por meio do grupo {GROUP_NAME}"
                  },
                  "zh-CN": {
                    singular: "该成员还可以通过 {GROUP_NAME} 群组进行访问"
                  }
                }
              });
            case "folder":
              return (0, _v5.translate)({
                singular: "This member also has access via the parent folder",
                dictionary: {
                  es: {
                    singular: "Este miembro también tiene acceso a través de la carpeta principal."
                  },
                  "de-DE": {
                    singular: "Dieses Mitglied hat auch Zugriff über den übergeordneten Ordner."
                  },
                  "fr-FR": {
                    singular: "Ce membre dispose également d'un accès par le biais du dossier parent"
                  },
                  "ja-JP": {
                    singular: "このメンバーは親フォルダー経由でもアクセス権を持っています"
                  },
                  "ko-KR": {
                    singular: "이 멤버는 상위 폴더를 통해서도 액세스할 수 있습니다."
                  },
                  "pt-BR": {
                    singular: "Este membro também tem acesso por meio da pasta principal"
                  },
                  "zh-CN": {
                    singular: "该成员还可以通过父文件夹进行访问"
                  }
                }
              });
          }
          return "";
        }
        if ((0, _v9.weightOf)(_v4) < (0, _v9.weightOf)(_v3)) {
          switch (_v5?.type) {
            case "all_team":
              return (0, _v5.translate)({
                singular: "This member can still comment because they are part of the All group",
                dictionary: {
                  es: {
                    singular: "Este miembro aún puede comentar porque forma parte del grupo Todos."
                  },
                  "de-DE": {
                    singular: "Dieses Mitglied kann weiterhin Kommentare abgeben, da es Teil der Gruppe „Alle“ ist."
                  },
                  "fr-FR": {
                    singular: "Ce membre peut toujours commenter le contenu car il fait partie du groupe Tous"
                  },
                  "ja-JP": {
                    singular: "このメンバーは「すべて」グループに属しているため、引き続きコメントできます。"
                  },
                  "ko-KR": {
                    singular: "이 멤버는 All 그룹에 속해 있으므로 댓글을 작성할 수 있습니다."
                  },
                  "pt-BR": {
                    singular: "Este membro ainda pode comentar porque faz parte do grupo Todos"
                  },
                  "zh-CN": {
                    singular: "该成员仍然可以发表评论，因为他们是“全部”群组的一员"
                  }
                }
              });
            case "group":
              return (0, _v5.translate)({
                singular: "This member can still comment because they are in the {GROUP} group",
                replacements: {
                  GROUP: _v5.entityName
                },
                dictionary: {
                  es: {
                    singular: "Este miembro aún puede comentar porque está en el grupo {GROUP}."
                  },
                  "de-DE": {
                    singular: "Dieses Mitglied kann weiterhin kommentieren, weil es zur Gruppe „{GROUP}“ Gruppe gehört."
                  },
                  "fr-FR": {
                    singular: "Ce membre peut toujours commenter le contenu car il appartient au groupe {GROUP}"
                  },
                  "ja-JP": {
                    singular: "このメンバーは「{GROUP}」グループに属しているため、引き続きコメントできます。"
                  },
                  "ko-KR": {
                    singular: "이 멤버는 {GROUP} 그룹에 속해 있으므로 댓글을 작성할 수 있습니다."
                  },
                  "pt-BR": {
                    singular: "Este membro ainda pode comentar porque está no grupo {GROUP}"
                  },
                  "zh-CN": {
                    singular: "该成员仍然可以评论，因为他们属于 {GROUP} 群组"
                  }
                }
              });
            case "folder":
              return (0, _v5.translate)({
                singular: "This member can still comment because they have comment access to the parent folder",
                dictionary: {
                  es: {
                    singular: "Este miembro aún puede comentar porque tiene acceso para comentar en la carpeta principal."
                  },
                  "de-DE": {
                    singular: "Dieses Mitglied kann weiterhin kommentieren, da es Zugriff auf den übergeordneten Ordner hat."
                  },
                  "fr-FR": {
                    singular: "Ce membre peut toujours commenter le contenu car il dispose des droits de commentaire sur le dossier parent"
                  },
                  "ja-JP": {
                    singular: "このメンバーは親フォルダーへのコメントアクセス権を持っているため、引き続きコメントできます"
                  },
                  "ko-KR": {
                    singular: "이 멤버는 상위 폴더에 대한 댓글 권한이 있으므로 댓글을 작성할 수 있습니다."
                  },
                  "pt-BR": {
                    singular: "Este membro ainda pode comentar porque tem acesso de comentário à pasta principal"
                  },
                  "zh-CN": {
                    singular: "该成员仍然可以发表评论，因为他们拥有父文件夹的评论权限"
                  }
                }
              });
          }
          return "";
        }
        return _v11 === _v7.ResourceType.Album ? (0, _v5.translate)({
          singular: "This member can only view because their role is set to Viewer",
          dictionary: {
            es: {
              singular: "Este miembro solo puede ver porque su rol está configurado en Espectador."
            },
            "de-DE": {
              singular: "Dieses Mitglied kann nur zusehen, da seine Rolle auf „Betrachter“ eingestellt ist."
            },
            "fr-FR": {
              singular: "Ce membre ne peut que consulter le contenu car son rôle défini est celui de Spectateur"
            },
            "ja-JP": {
              singular: "役割が「視聴者」に設定されているため、このメンバーは視聴のみ可能です。"
            },
            "ko-KR": {
              singular: "이 멤버는 역할이 뷰어로 설정되어 있기 때문에 보기만 가능합니다."
            },
            "pt-BR": {
              singular: "Este membro só pode visualizar porque sua função está definida como Espectador"
            },
            "zh-CN": {
              singular: "此成员只能查看，因为其角色设置为观众"
            }
          }
        }) : (0, _v5.translate)({
          singular: "This member can only view and comment because their role is set to Viewer",
          dictionary: {
            es: {
              singular: "Este miembro solo puede ver y comentar porque su rol está configurado en Espectador."
            },
            "de-DE": {
              singular: "Dieses Mitglied kann nur ansehen und kommentieren, weil seine Rolle auf „Betrachter“ gesetzt ist."
            },
            "fr-FR": {
              singular: "Ce membre ne peut que consulter et commenter le contenu car son rôle défini est celui de Spectateur"
            },
            "ja-JP": {
              singular: "役割が「視聴者」に設定されているため、このメンバーは視聴とコメントのみ可能です。"
            },
            "ko-KR": {
              singular: "이 멤버는 역할이 뷰어로 설정되어 있으므로 보기 및 댓글 작성만 가능합니다."
            },
            "pt-BR": {
              singular: "Este membro só pode visualizar e comentar porque sua função está definida como Espectador"
            },
            "zh-CN": {
              singular: "此成员只能查看和评论，因为其角色设置为观众"
            }
          }
        });
      }, [_v4, _v3, _v5, _v6, _v11]),
      _v16 = (0, _v2.useMemo)(() => {
        switch (_v6) {
          case _v7.PermissionLevel.Admin:
          case _v7.PermissionLevel.Owner:
            return _v13;
          case _v7.PermissionLevel.Contributor:
          case _v7.PermissionLevel.ContributorPlus:
            return _v14;
          case _v7.PermissionLevel.Viewer:
            return _v15;
        }
        return "";
      }, [_v13, _v14, _v15, _v6]),
      _v17 = (0, _v2.useMemo)(() => _v10 ? _v16 || "" : _v12 || "", [_v12, _v16, _v10]);
    return _v17 ? (0, _v1.jsx)(_v3.Center, {
      "data-testid": "inherited-policy-info",
      ..._v2,
      children: (0, _v1.jsx)(_v8.Annotation, {
        label: _v17,
        maxW: (0, _v4.rem)(238)
      })
    }) : null;
  }]);
}