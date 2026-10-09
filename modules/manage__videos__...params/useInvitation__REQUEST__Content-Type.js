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
    _v19 = _v0.i(0);
  _v0.s(["useInvitation", 0, () => {
    let {
        logError: _v0
      } = (0, _v9.useErrorTracking)(),
      [_v1, _v2] = (0, _v1.useState)(!1),
      [_v3] = function () {
        let {
            baseUrl: _v0,
            jwt: _v1,
            xVimeoPage: _v2,
            locale: _v3
          } = (0, _v17.useGctlConfig)(),
          [_v4, _v5] = (0, _v18.useInternalState)();
        return [(0, _v1.useCallback)(async _v0 => (_v5({
          type: "REQUEST"
        }), (0, _v16.postUserTeammembers)({
          ..._v0,
          baseUrl: _v0,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v1 ? `jwt ${_v1}` : "",
            "Vimeo-Page": `${_v2}`,
            "Accept-Language": _v3 ?? "en"
          }
        }).then(_v0 => (_v5({
          type: "SUCCESS",
          payload: _v0
        }), _v0)).catch(_v0 => {
          throw (0, _v19.trackError)(_v0, {
            additionalData: {
              action: "post_user_teammembers",
              userId: _v0.where?.userId
            }
          }), _v5({
            type: "FAILURE",
            payload: _v0
          }), _v0;
        })), [_v0, _v2, _v1, _v3, _v5]), _v4];
      }(),
      [_v4] = (0, _v6.usePostUserSharedResourceNotification)(),
      _v5 = (0, _v4.useToast)(),
      {
        updateTeamPermission: _v6
      } = (0, _v15.useTeamPermissionsActions)(),
      {
        isOwner: _v7,
        totalTeamMembers: _v8,
        isTeamUser: _v9
      } = (0, _v12.useGlobalStore)((0, _v2.useShallow)(({
        shared: _v0
      }) => ({
        isOwner: _v0.data.isOwner,
        totalTeamMembers: _v0.data.totalTeamMembers,
        isTeamUser: _v0.data.teamPermissionLevel
      }))),
      _v10 = (0, _v12.useGlobalStore)(({
        resourceProps: _v0
      }) => _v0.resourceType),
      {
        newEmails: _v11,
        emailInputs: _v12,
        existingTeamMember: _v13,
        newMemberRole: _v14,
        invitesRemaining: _v15,
        captchaToken: _v16,
        customMessage: _v17,
        shouldSendEmail: _v18,
        setShouldSendEmail: _v19
      } = (0, _v12.useGlobalStore)((0, _v2.useShallow)(({
        invite: _v0
      }) => ({
        newEmails: _v0.data.newEmails,
        emailInputs: _v0.data.emailInputs,
        existingTeamMember: _v0.data.existingTeamMember,
        newMemberRole: _v0.data.newMemberRole,
        invitesRemaining: _v0.data.invitesRemaining,
        captchaToken: _v0.data.captchaToken,
        customMessage: _v0.data.customMessage,
        shouldSendEmail: _v0.data.shouldSendEmail,
        setShouldSendEmail: _v0.actions.setShouldSendEmail
      }))),
      {
        clearSelectedTeamMembers: _v20,
        updateCustomMessage: _v21,
        setInviteRemaining: _v22
      } = (0, _v12.useGlobalStore)(({
        invite: _v0
      }) => _v0.actions),
      _v23 = (0, _v12.useGlobalStore)(({
        shared: _v0
      }) => _v0.actions.setSharedData),
      _v24 = (0, _v12.useGlobalStore)(({
        screen: _v0
      }) => _v0.actions.setMainScreen),
      _v25 = (0, _v12.useGlobalStore)(({
        membership: _v0
      }) => _v0.data),
      _v26 = (0, _v12.useGlobalStore)(({
        membership: _v0
      }) => _v0.actions.fetchMembership),
      _v27 = (0, _v12.useGlobalStore)(({
        shared: _v0
      }) => _v0.actions.closeResourceShareModal),
      {
        canEdit: _v28,
        userId: _v29,
        resourceUri: _v30,
        resourceId: _v31
      } = (0, _v12.useGlobalStore)((0, _v2.useShallow)(({
        resourceProps: _v0
      }) => ({
        canEdit: _v0.data.canEdit,
        userId: _v0.data.userId,
        resourceUri: _v0.data.uri,
        resourceId: _v0.data.id
      }))),
      {
        hasPerSeatPricingModelTeamMember: _v32,
        hasEnterprise: _v33,
        hasTeamInvite: _v34
      } = (0, _v12.useGlobalStore)(({
        capabilities: _v0
      }) => _v0.data),
      {
        revalidateAllTeamPermission: _v35,
        revalidateTeamPermissions: _v36
      } = (0, _v12.useGlobalStore)((0, _v2.useShallow)(({
        teamPermissions: _v0
      }) => ({
        revalidateAllTeamPermission: _v0.actions.revalidateAllTeamPermission,
        revalidateTeamPermissions: _v0.actions.revalidateTeamPermissions
      }))),
      {
        trackShareAddPeopleInvited: _v37
      } = (0, _v8.useDistributionTracking)(),
      {
        hooks: {
          useInvitation: _v38
        },
        shareSurface: _v39 = "panel"
      } = (0, _v1.useContext)(_v11.ResourceConfigContext),
      _v40 = _v38?.();
    (0, _v1.useEffect)(() => {
      _v11.length < 1 && !_v13 && _v12.length < 1 && _v24(_v13.ShareModalState.Default);
    }, [_v12.length, _v13, _v11.length, _v24]);
    let [_v41, _v42] = (0, _v14.shouldShowTeamNotice)(_v25, _v8, _v14, _v11),
      _v43 = (0, _v14.getActiveUpsell)(_v32, _v33, _v11, _v8 ?? 0, _v15),
      _v44 = (0, _v14.shouldShowUpsell)(_v43, _v11),
      _v45 = (0, _v14.shouldShowPurchaseNotice)(_v7, _v14, _v25, _v11, _v15 ?? _v25.currentUnassignedSeatCount),
      _v46 = _v44 || _v42 || _v41 || _v1 || !_v28 && _v12.length < 1 || !_v9 && !_v16,
      _v47 = (0, _v1.useCallback)(async (_v0, _v1) => {
        if (!_v34) return null;
        let _v2 = _v14.rawLabel || _v14.label,
          _v3 = _v40?.inviteNewUsers ? _v40.inviteNewUsers(_v0, _v2) : _v0.map(_v0 => {
            let _v1 = {
              email: _v0,
              permissionLevel: _v2.toString().toLowerCase(),
              customMessage: _v17,
              sendEmail: _v1,
              resourcePermissionPolicyUri: _v14.resourcePermissionPolicyUri
            };
            switch (_v10) {
              case _v13.ResourceType.Folder:
                _v1.folderUri = _v30;
                break;
              case _v13.ResourceType.Album:
                _v1.albumUri = _v30;
                break;
              default:
                _v1.videoUri = _v30;
            }
            return _v3({
              select: ["uri", "metadata.connections.owner.totalMembers", "metadata.connections.owner.invitesRemaining"],
              where: {
                userId: _v29
              },
              variables: _v1
            });
          });
        try {
          let {
            newInvitesRemaining: _v0,
            newTotalMembers: _v1
          } = (await Promise.all(_v3)).reduce((_v0, _v1) => {
            let _v2 = _v1.metadata?.connections?.owner?.invitesRemaining,
              _v3 = _v1.metadata?.connections?.owner?.totalMembers;
            return "number" == typeof _v2 && (_v0.newInvitesRemaining = Math.min(_v0.newInvitesRemaining, _v2)), "number" == typeof _v3 && (_v0.newTotalMembers = Math.max(_v0.newTotalMembers, _v3)), _v0;
          }, {
            newInvitesRemaining: 1 / 0,
            newTotalMembers: -1 / 0
          });
          _v23({
            totalTeamMembers: _v1
          }), _v22(_v0), _v10 === _v13.ResourceType.Video && _v37({
            clipId: String(_v31),
            role: _v14.value,
            shareSurface: _v39
          }), _v20(), _v21("");
          let _v2 = "invite-toast";
          _v5.isActive(_v2) || _v5({
            title: (0, _v7.translate)({
              singular: "Invite sent",
              dictionary: {
                es: {
                  singular: "Invitación enviada"
                },
                "de-DE": {
                  singular: "Einladung wurde abgeschickt"
                },
                "fr-FR": {
                  singular: "Invitation envoyée"
                },
                "ja-JP": {
                  singular: "招待を送信しました"
                },
                "ko-KR": {
                  singular: "초대장 전송 완료"
                },
                "pt-BR": {
                  singular: "Convite enviado!"
                },
                "zh-CN": {
                  singular: "邀请已发送"
                }
              }
            }),
            id: _v2
          }), _v36(), _v26(), window.dispatchEvent(new CustomEvent("RSM_PERMISSION_CREATED"));
        } catch (_v0) {
          _v0(_v0, {
            additionalData: {
              action: "invite_users",
              numberOfEmails: _v0.length,
              role: _v14.value
            }
          });
          let _v1 = "invite-error-toast";
          if (!_v5.isActive(_v1)) {
            let _v0 = (0, _v7.translate)({
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
            });
            if (_v0 instanceof _v5.NetworkError) {
              let _v0 = await _v0.res.clone().json().catch(() => null);
              _v0?.error_code === 0 && (_v0 = (0, _v7.translate)({
                singular: "You can't add members while your Team Library is being set up.",
                dictionary: {
                  es: {
                    singular: "No puedes añadir miembros mientras se configura tu Biblioteca del equipo."
                  },
                  "de-DE": {
                    singular: "Sie können keine Mitglieder hinzufügen, während Ihre Team-Bibliothek eingerichtet wird."
                  },
                  "fr-FR": {
                    singular: "Vous ne pouvez pas ajouter de membres pendant que votre bibliothèque d'équipe est en cours de configuration."
                  },
                  "ja-JP": {
                    singular: "Team Library の設定中はメンバーを追加できません。"
                  },
                  "ko-KR": {
                    singular: "팀 라이브러리가 설정되는 동안 멤버를 추가할 수 없습니다."
                  },
                  "pt-BR": {
                    singular: "Você não pode adicionar membros enquanto sua Biblioteca da equipe está sendo configurada."
                  },
                  "zh-CN": {
                    singular: "在团队资料库设置期间，您无法添加成员。"
                  }
                }
              }));
            }
            _v5({
              title: _v0,
              id: _v1
            });
          }
        }
      }, [_v20, _v17, _v26, _v34, _v40, _v3, _v0, _v23, _v22, _v14, _v31, _v10, _v30, _v36, _v5, _v37, _v39, _v21, _v29]),
      _v48 = (0, _v1.useCallback)(async (_v0, _v1) => {
        let _v2 = _v0.applicablePermissionPolicies.find(_v0 => _v10.PERMISSION_POLICY_NAME_TO_PERMISSION_LEVELS[_v0.name].value === _v14.value),
          {
            type: _v3,
            entityUri: _v4
          } = (0, _v14.getTeamEntityDetails)(_v0.teamEntity);
        if (_v40?.inviteTeamMember) await _v40.inviteTeamMember(_v0, _v2);else if (_v0.metadata?.interactions && _v0.metadata.interactions.edit && _v2) try {
          if (!_v3 || !_v4) throw Error("Team entity type or uri is missing");
          await _v6({
            teamEntityType: _v3,
            teamEntityUri: _v4,
            permissionPolicyUri: _v2.uri,
            customMessage: _v17,
            sendEmail: _v1
          }), _v10 === _v13.ResourceType.Video && _v37({
            clipId: String(_v31),
            role: _v14.value,
            shareSurface: _v39
          });
          let _v0 = "invite-toast";
          _v5.isActive(_v0) || _v5({
            title: (0, _v7.translate)({
              singular: "Invite sent",
              dictionary: {
                es: {
                  singular: "Invitación enviada"
                },
                "de-DE": {
                  singular: "Einladung wurde abgeschickt"
                },
                "fr-FR": {
                  singular: "Invitation envoyée"
                },
                "ja-JP": {
                  singular: "招待を送信しました"
                },
                "ko-KR": {
                  singular: "초대장 전송 완료"
                },
                "pt-BR": {
                  singular: "Convite enviado!"
                },
                "zh-CN": {
                  singular: "邀请已发送"
                }
              }
            }),
            id: _v0
          });
        } catch (_v0) {
          _v0(_v0, {
            additionalData: {
              action: "invite_team_member",
              teamEntityType: _v3,
              permissionPolicy: _v2?.name
            }
          });
          let _v1 = "invite-error-toast";
          _v5.isActive(_v1) || _v5({
            title: (0, _v7.translate)({
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
            id: _v1
          });
        } else {
          let _v0 = "invite-error-toast";
          _v5.isActive(_v0) || _v5({
            title: (0, _v7.translate)({
              singular: "Something went wrong! Try again later!",
              dictionary: {
                es: {
                  singular: "¡Se produjo un error! Vuelva a intentarlo más tarde."
                },
                "de-DE": {
                  singular: "Hier ist etwas schiefgelaufen. Versuche es später noch einmal!"
                },
                "fr-FR": {
                  singular: "Une erreur s'est produite. Veuillez réessayer plus tard."
                },
                "ja-JP": {
                  singular: "エラーが発生しました。しばらくしてから、再試行してください。"
                },
                "ko-KR": {
                  singular: "문제가 발생했습니다! 나중에 다시 시도하세요!"
                },
                "pt-BR": {
                  singular: "Algo deu errado. Tente de novo depois."
                },
                "zh-CN": {
                  singular: "出了点问题！请稍后再试！"
                }
              }
            }),
            id: _v0
          });
        }
        _v3 === _v10.EntityTypes.AllTeam ? (await _v35(), _v36()) : (_v36(), window.dispatchEvent(new CustomEvent("RSM_PERMISSION_CREATED"))), _v20(), _v21("");
      }, [_v20, _v17, _v40, _v0, _v14.value, _v10, _v35, _v36, _v5, _v21, _v6, _v31, _v37, _v39]),
      _v49 = (0, _v1.useCallback)(async (_v0, _v1) => {
        let _v2 = [],
          _v3 = [];
        _v0.forEach(_v0 => {
          _v0.uri ? _v2.push(_v0.uri.replace(/^\/users\/(\d+)$/, "/all_team/$1")) : _v0.email && _v3.push(_v0.email);
        });
        try {
          await _v4({
            where: {
              userId: _v29
            },
            variables: {
              resourceUri: _v30,
              inviteeEmails: _v3,
              inviteeUris: _v2,
              gRecaptchaResponse: _v1 ?? "",
              customMessage: _v17 ?? ""
            }
          });
          let _v0 = "link-sent-toast";
          _v5.isActive(_v0) || _v5({
            title: (0, _v7.translate)({
              singular: "Link sent",
              dictionary: {
                es: {
                  singular: "Enlace enviado"
                },
                "de-DE": {
                  singular: "Link gesendet"
                },
                "fr-FR": {
                  singular: "Lien envoyé"
                },
                "ja-JP": {
                  singular: "リンクを送信しました"
                },
                "ko-KR": {
                  singular: "링크 전송 완료"
                },
                "pt-BR": {
                  singular: "Link enviado"
                },
                "zh-CN": {
                  singular: "链接已发送"
                }
              }
            }),
            id: _v0
          }), _v20(), _v21("");
        } catch (_v0) {
          _v0(_v0, {
            additionalData: {
              action: "send_link_email",
              numberOfEmails: _v3.length,
              numberOfUris: _v2.length
            }
          });
          let _v1 = "link-error-toast";
          _v5.isActive(_v1) || _v5({
            title: (0, _v7.translate)({
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
            id: _v1
          });
        }
      }, [_v20, _v17, _v0, _v30, _v4, _v5, _v21, _v29]);
    return {
      isInviting: _v1,
      isInviteButtonDisabled: _v46,
      sendInvites: async () => {
        _v3.FatalAttraction.trackClick({
          container: "folder_share_modal",
          component: "add_team_members",
          keyword: "add_submit"
        }), _v2(!0), _v12.length ? (await _v49(_v12, _v16), _v24(_v13.ShareModalState.Default), _v27()) : _v11.length ? await _v47(_v11, _v18) : _v13 && (await _v48(_v13, _v18)), _v2(!1), _v19(!0);
      },
      shouldSendEmail: _v18,
      showPurchaseNotice: _v45,
      showViewerNotice: _v41,
      showSeatNotice: _v42,
      showUpsell: _v44,
      activeUpsell: _v43
    };
  }], 0);
}