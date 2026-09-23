{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = (_v0, _v1) => {
      let _v2,
        _v3 = [];
      for (let _v0 in _v0) if (_v0.hasOwnProperty(_v0)) {
        let _v0 = _v0[_v0];
        switch (_v1 && (_v0 = _v1 + "[" + _v0 + "]"), Object.prototype.toString.call(_v0)) {
          case "[object Object]":
            _v2 = _v6(_v0, _v0);
            break;
          case "[object Array]":
            let _v0 = {};
            if (0 === _v0.length) _v0 = null;else {
              for (let _v0 = 0, _v1 = _v0.length; _v0 < _v1; _v0++) _v0[_v0] = _v0[_v0];
              _v2 = _v6(_v0, _v0);
            }
            break;
          default:
            _v2 = _v0 + "=" + encodeURIComponent(_v0);
        }
        null !== _v0 && _v3.push(_v2);
      }
      return _v3.join("&");
    },
    _v7 = _v0 => {
      let _v1 = _v0.split("/");
      return parseInt(_v1[_v1.length - 1]);
    },
    _v8 = _v0 => {
      switch (_v0) {
        case _v5.PermissionLevel.Contributor:
          return (0, _v3.translate)({
            singular: "Can edit",
            dictionary: {
              es: {
                singular: "Puede editar"
              },
              "de-DE": {
                singular: "Kann bearbeiten"
              },
              "fr-FR": {
                singular: "Peut modifier"
              },
              "ja-JP": {
                singular: "編集可能"
              },
              "ko-KR": {
                singular: "편집 가능"
              },
              "pt-BR": {
                singular: "Pode editar"
              },
              "zh-CN": {
                singular: "可以编辑"
              }
            }
          });
        case _v5.ApplicablePermissionPolicyTypes.folderAdmin:
        case _v5.ApplicablePermissionPolicyTypes.clipAdmin:
        case _v5.ApplicablePermissionPolicyTypes.albumAdmin:
        case _v5.ApplicablePermissionPolicyTypes.albumCreator:
        case _v5.PermissionLevel.Owner:
        case _v5.PermissionLevel.Admin:
          return (0, _v3.translate)({
            singular: "Can manage",
            dictionary: {
              es: {
                singular: "Puede administrar"
              },
              "de-DE": {
                singular: "Kann verwalten"
              },
              "fr-FR": {
                singular: "Peut gérer"
              },
              "ja-JP": {
                singular: "管理可能"
              },
              "ko-KR": {
                singular: "관리 가능"
              },
              "pt-BR": {
                singular: "Pode gerenciar"
              },
              "zh-CN": {
                singular: "可以管理"
              }
            }
          });
        case _v5.PermissionLevel.Viewer:
          return (0, _v3.translate)({
            singular: "Can view",
            dictionary: {
              es: {
                singular: "Puede ver"
              },
              "de-DE": {
                singular: "Kann anschauen"
              },
              "fr-FR": {
                singular: "Peut regarder"
              },
              "ja-JP": {
                singular: "視聴可能"
              },
              "ko-KR": {
                singular: "시청 가능"
              },
              "pt-BR": {
                singular: "Pode visualizar"
              },
              "zh-CN": {
                singular: "可以查看"
              }
            }
          });
        case _v5.PermissionLevel.Uploader:
          return (0, _v3.translate)({
            singular: "Can upload",
            dictionary: {
              es: {
                singular: "Puede subir"
              },
              "de-DE": {
                singular: "Kann hochladen"
              },
              "fr-FR": {
                singular: "Peut mettre en ligne"
              },
              "ja-JP": {
                singular: "アップロード可能"
              },
              "ko-KR": {
                singular: "업로드 가능"
              },
              "pt-BR": {
                singular: "Pode carregar"
              },
              "zh-CN": {
                singular: "可以上传"
              }
            }
          });
        case _v5.ApplicablePermissionPolicyTypes.clipCommenter:
        case _v5.ApplicablePermissionPolicyTypes.folderCommenter:
          return (0, _v3.translate)({
            singular: "Can comment",
            dictionary: {
              es: {
                singular: "Puede comentar"
              },
              "de-DE": {
                singular: "Kann kommentieren"
              },
              "fr-FR": {
                singular: "Peut commenter"
              },
              "ja-JP": {
                singular: "コメント可能"
              },
              "ko-KR": {
                singular: "댓글 달기 가능"
              },
              "pt-BR": {
                singular: "Pode comentar"
              },
              "zh-CN": {
                singular: "可以评论"
              }
            }
          });
        default:
          return "";
      }
    },
    _v9 = (_v0, _v1 = !1) => ({
      uri: _v0?.uri,
      type: _v0?.type,
      expirationMonth: _v0?.expirationMonth,
      expirationYear: _v0?.expirationYear,
      isInstantPurchase: _v0?.isInstantPurchase,
      lastFour: _v0?.lastFour,
      inUse: _v1 || _v0?.inUse,
      textType: _v0?.textType,
      canUseToOptin: _v0?.canUseToOptin
    }),
    _v10 = (_v0, _v1, _v2, _v3) => {
      let _v4 = _v1.length;
      return (_v0 ? _v4.MAX_TEAM_SIZE_FOR_PRICING_PLAN - (_v2 + _v4.OWNER) : _v3 ?? 0) - _v4;
    },
    _v11 = (_v0, _v1, _v2, _v3, _v4) => {
      let _v5 = _v10(_v0, _v2, _v3 ?? 0, _v4),
        _v6 = ((_v0, _v1, _v2, _v3) => {
          if (_v2) return _v5.Upsells.None;
          let _v4 = _v0 + _v1;
          return _v3 ? _v5.Upsells.ToPricingPlan : _v4 < 3 ? _v5.Upsells.ToPro : _v4 < 10 ? _v5.Upsells.ToBusiness : _v5.Upsells.ToCustom;
        })(_v3 ?? 0, _v4, _v1, _v0);
      return _v5 < 0 ? _v6 : _v5.Upsells.None;
    },
    _v12 = _v0 => {
      let _v1 = _v0.uri.split("/"),
        _v2 = _v1.length,
        _v3 = "",
        _v4 = 0;
      _v0.metadata.connections.teamUser ? (_v3 = _v0.metadata.connections.teamUser.uri ?? "", _v4 = 1) : _v0.metadata.connections.teamGroup ? (_v3 = _v0.metadata.connections.teamGroup.uri ?? "", _v4 = _v0.metadata.connections.teamGroup.totalUsers ?? 0) : _v0.metadata.connections.allTeam && (_v3 = _v0.metadata.connections.allTeam.uri ?? "", _v4 = _v0.metadata.connections.allTeam.total ?? 0);
      let _v5 = _v0.metadata.connections.teamUser?.permissionLevel?.toLowerCase(),
        _v6 = _v0.metadata.connections.user?.uri;
      return {
        type: _v1[_v2 - 2],
        id: Number(_v1[_v2 - 1]),
        entityUri: _v3,
        role: _v5,
        userId: _v6 ? _v7(_v6) : null,
        email: _v0.email,
        totalUsers: _v4
      };
    },
    _v13 = _v0 => _v0.toLowerCase().replace(/[^0-9A-Z\u0400-\u04FF]+/gi, "");
  _v0.s(["camelToSnakeCase", 0, _v0 => _v0.replace(/[A-Z]/g, _v0 => `_${_v0.toLowerCase()}`), "getActiveUpsell", 0, _v11, "getCurrentInvitesRemaining", 0, _v10, "getMaxTeamSize", 0, _v0 => _v0 == _v5.Upsells.ToPricingPlan ? 200 : _v0 === _v5.Upsells.ToCustom ? 10 : 3 * (_v0 === _v5.Upsells.ToBusiness), "getMemberIdFromUri", 0, _v7, "getMultiUserSharePermissionLevels", 0, (_v0, _v1) => {
    let _v2 = (_v0, _v1, _v2) => ({
      label: _v0,
      value: _v1,
      rawLabel: _v2
    });
    switch (_v0) {
      case _v5.ResourceType.Video:
        return [_v2((0, _v3.translate)({
          singular: "Can view",
          dictionary: {
            es: {
              singular: "Puede ver"
            },
            "de-DE": {
              singular: "Kann anschauen"
            },
            "fr-FR": {
              singular: "Peut regarder"
            },
            "ja-JP": {
              singular: "視聴可能"
            },
            "ko-KR": {
              singular: "시청 가능"
            },
            "pt-BR": {
              singular: "Pode visualizar"
            },
            "zh-CN": {
              singular: "可以查看"
            }
          }
        }), _v5.PermissionActions.clipView, _v5.PermissionLevel.Viewer), _v2((0, _v3.translate)({
          singular: "Can comment",
          dictionary: {
            es: {
              singular: "Puede comentar"
            },
            "de-DE": {
              singular: "Kann kommentieren"
            },
            "fr-FR": {
              singular: "Peut commenter"
            },
            "ja-JP": {
              singular: "コメント可能"
            },
            "ko-KR": {
              singular: "댓글 달기 가능"
            },
            "pt-BR": {
              singular: "Pode comentar"
            },
            "zh-CN": {
              singular: "可以评论"
            }
          }
        }), _v5.PermissionActions.clipCommenter, _v5.PermissionLevel.Viewer), _v2((0, _v3.translate)({
          singular: "Can edit",
          dictionary: {
            es: {
              singular: "Puede editar"
            },
            "de-DE": {
              singular: "Kann bearbeiten"
            },
            "fr-FR": {
              singular: "Peut modifier"
            },
            "ja-JP": {
              singular: "編集可能"
            },
            "ko-KR": {
              singular: "편집 가능"
            },
            "pt-BR": {
              singular: "Pode editar"
            },
            "zh-CN": {
              singular: "可以编辑"
            }
          }
        }), _v5.PermissionActions.clipEdit, _v5.PermissionLevel.Contributor)];
      case _v5.ResourceType.Album:
        return [_v2((0, _v3.translate)({
          singular: "Can view",
          dictionary: {
            es: {
              singular: "Puede ver"
            },
            "de-DE": {
              singular: "Kann anschauen"
            },
            "fr-FR": {
              singular: "Peut regarder"
            },
            "ja-JP": {
              singular: "視聴可能"
            },
            "ko-KR": {
              singular: "시청 가능"
            },
            "pt-BR": {
              singular: "Pode visualizar"
            },
            "zh-CN": {
              singular: "可以查看"
            }
          }
        }), _v5.PermissionActions.albumView, _v5.PermissionLevel.Viewer), _v2((0, _v3.translate)({
          singular: "Can edit",
          dictionary: {
            es: {
              singular: "Puede editar"
            },
            "de-DE": {
              singular: "Kann bearbeiten"
            },
            "fr-FR": {
              singular: "Peut modifier"
            },
            "ja-JP": {
              singular: "編集可能"
            },
            "ko-KR": {
              singular: "편집 가능"
            },
            "pt-BR": {
              singular: "Pode editar"
            },
            "zh-CN": {
              singular: "可以编辑"
            }
          }
        }), _v5.PermissionActions.albumEdit, _v5.PermissionLevel.Contributor)];
      case _v5.ResourceType.Folder:
        return [_v2((0, _v3.translate)({
          singular: "Can view",
          dictionary: {
            es: {
              singular: "Puede ver"
            },
            "de-DE": {
              singular: "Kann anschauen"
            },
            "fr-FR": {
              singular: "Peut regarder"
            },
            "ja-JP": {
              singular: "視聴可能"
            },
            "ko-KR": {
              singular: "시청 가능"
            },
            "pt-BR": {
              singular: "Pode visualizar"
            },
            "zh-CN": {
              singular: "可以查看"
            }
          }
        }), _v5.PermissionActions.folderView, _v5.PermissionLevel.Viewer), _v2((0, _v3.translate)({
          singular: "Can comment",
          dictionary: {
            es: {
              singular: "Puede comentar"
            },
            "de-DE": {
              singular: "Kann kommentieren"
            },
            "fr-FR": {
              singular: "Peut commenter"
            },
            "ja-JP": {
              singular: "コメント可能"
            },
            "ko-KR": {
              singular: "댓글 달기 가능"
            },
            "pt-BR": {
              singular: "Pode comentar"
            },
            "zh-CN": {
              singular: "可以评论"
            }
          }
        }), _v5.PermissionActions.folderComment, _v5.PermissionLevel.Viewer), _v2((0, _v3.translate)({
          singular: "Can edit",
          dictionary: {
            es: {
              singular: "Puede editar"
            },
            "de-DE": {
              singular: "Kann bearbeiten"
            },
            "fr-FR": {
              singular: "Peut modifier"
            },
            "ja-JP": {
              singular: "編集可能"
            },
            "ko-KR": {
              singular: "편집 가능"
            },
            "pt-BR": {
              singular: "Pode editar"
            },
            "zh-CN": {
              singular: "可以编辑"
            }
          }
        }), _v5.PermissionActions.folderEdit, _v5.PermissionLevel.Contributor), ...(_v1 ? [_v2((0, _v3.translate)({
          singular: "Can manage",
          dictionary: {
            es: {
              singular: "Puede administrar"
            },
            "de-DE": {
              singular: "Kann verwalten"
            },
            "fr-FR": {
              singular: "Peut gérer"
            },
            "ja-JP": {
              singular: "管理可能"
            },
            "ko-KR": {
              singular: "관리 가능"
            },
            "pt-BR": {
              singular: "Pode gerenciar"
            },
            "zh-CN": {
              singular: "可以管理"
            }
          }
        }), _v5.PermissionActions.folderAdmin, _v5.PermissionLevel.Admin)] : [])];
    }
    return [];
  }, "getNewMemberRole", 0, (_v0, _v1, _v2) => _v2 && _v4.ALLOWED_RESOURCE_FOR_COMMENT_POLICY.includes(_v1) && _v0.find(_v0 => [_v5.PermissionActions.folderComment, _v5.PermissionActions.clipCommenter].includes(_v0.value)) || _v0[0], "getOutsideEmails", 0, _v0 => {
    let _v1 = [];
    return _v0.forEach(_v0 => {
      "email" === _v0.type && _v0.email && _v1.push(_v0.email);
    }), _v1;
  }, "getPermissionChangeSummaryForMember", 0, (_v0, _v1) => {
    let _v2 = _v0.currentPermissionPolicies?.[0]?.name,
      _v3 = _v2 && _v2 in _v5.PERMISSION_TYPES_TO_DISPLAY_NAME ? _v5.PERMISSION_TYPES_TO_DISPLAY_NAME[_v2] : null,
      _v4 = _v1.name && _v1.name in _v5.PERMISSION_TYPES_TO_DISPLAY_NAME ? _v5.PERMISSION_TYPES_TO_DISPLAY_NAME[_v1.name] : null;
    return {
      oldPermission: _v3,
      newPermission: _v4,
      targetUserId: parseInt(_v0?.teamEntity?.metadata?.connections?.user?.uri?.split("/").filter(Boolean).pop() || "0", 10) || null,
      permissionLevel: _v0.teamEntity.metadata.connections.teamUser?.permissionLevel?.toLowerCase()
    };
  }, "getPermissionLevelDescriptions", 0, (_v0, _v1) => _v1 ? _v1.applicablePermissionPolicies.map(_v0 => ({
    label: _v0.displayName,
    description: _v4.PERMISSION_POLICY_NAME_TO_PERMISSION_LEVELS[_v0.name].description
  })) : _v0 === _v5.ResourceType.Album ? _v4.PERMISSION_LEVEL_DESCRIPTIONS_ALBUM : _v4.PERMISSION_LEVEL_DESCRIPTIONS, "getPermissionLevels", 0, (_v0, _v1) => {
    if (!_v0) return [{
      label: "",
      rawLabel: "",
      value: ""
    }];
    let _v2 = _v0 => {
      let _v1;
      switch (_v0) {
        case _v5.ResourceType.Folder:
          _v1 = "edit" === _v0 ? _v5.PermissionActions.folderEdit : "comment" === _v0 ? _v5.PermissionActions.folderComment : _v5.PermissionActions.folderView;
          break;
        case _v5.ResourceType.Video:
          _v1 = "edit" === _v0 ? _v5.PermissionActions.clipEdit : "comment" === _v0 ? _v5.PermissionActions.clipCommenter : _v5.PermissionActions.clipView;
          break;
        default:
          _v1 = "edit" === _v0 ? _v5.PermissionActions.albumEdit : _v5.PermissionActions.albumView;
      }
      return _v1;
    };
    if (!_v1) {
      let _v0 = [{
          label: _v8("Contributor"),
          rawLabel: "Contributor",
          value: _v2("edit")
        }, {
          label: _v8("Viewer"),
          rawLabel: "Viewer",
          value: _v2("view")
        }],
        _v1 = null;
      switch (_v0) {
        case _v5.ResourceType.Video:
          _v1 = {
            label: _v8("Clip Commenter"),
            rawLabel: "Viewer",
            value: _v2("comment"),
            resourcePermissionPolicyUri: _v4.CLIP_COMMENT_POLICY_URI
          };
          break;
        case _v5.ResourceType.Folder:
          _v1 = {
            label: _v8("Folder Commenter"),
            rawLabel: "Viewer",
            value: _v2("comment"),
            resourcePermissionPolicyUri: _v4.FOLDER_COMMENT_POLICY_URI
          };
      }
      return _v1 && (_v0 = [{
        label: _v8("Viewer"),
        rawLabel: "Viewer",
        value: _v2("view")
      }, _v1, {
        label: _v8("Contributor"),
        rawLabel: "Contributor",
        value: _v2("edit")
      }]), _v0;
    }
    return _v1.applicablePermissionPolicies.map(_v0 => ({
      label: _v0.displayName,
      rawLabel: _v0.displayName,
      value: _v4.PERMISSION_POLICY_NAME_TO_PERMISSION_LEVELS[_v0.name].value
    }));
  }, "getResourceIdFromUri", 0, _v0 => {
    let _v1 = _v0.split("/");
    return parseInt(_v1[_v1.length - 1].split(":")[0]);
  }, "getResourceTypeFromUri", 0, _v0 => /video/.test(_v0) ? _v5.ResourceType.Video : /showcase/.test(_v0) ? _v5.ResourceType.Album : _v5.ResourceType.Folder, "getRoleDisplayName", 0, _v8, "getSelectedRole", 0, _v0 => _v0 ? {
    value: _v4.PERMISSION_POLICY_NAME_TO_PERMISSION_LEVELS[_v0.name].value,
    label: _v0.displayName
  } : {
    value: "",
    label: ""
  }, "getShareModalHeight", 0, _v0 => {
    switch (_v0) {
      case _v5.ShareModalState.Purchase:
        return _v4.SHARE_MODAL_PURCHASE_HEIGHT;
      case _v5.ShareModalState.Upsell:
        return _v4.SHARE_MODAL_UPSELL_HEIGHT;
      default:
        return _v4.SHARE_MODAL_HEIGHT;
    }
  }, "getTeamEntityDetails", 0, _v12, "hasArrayDuplicates", 0, (_v0, _v1) => [..._v0, ..._v1].filter((_v0, _v1, _v2) => _v2.indexOf(_v0) === _v1).length === _v0.length, "isOnlyViewerAccess", 0, _v0 => 1 === _v0.applicablePermissionPolicies.length && _v4.ApplicableViewerPermissionPolicies.includes(_v0.applicablePermissionPolicies[0].name), "mapMembershipResponse", 0, _v0 => {
    let _v1;
    return {
      status: _v5.AccountStatus[String(_v0.status)],
      tier: _v5.Tier[String(_v0?.tier)],
      billingPeriod: _v5.UserPlanType[String(_v0?.billingPeriod || "")],
      productId: _v0?.productId,
      isFreeTrial: _v0?.isFreeTrial,
      paymentMethod: _v9(_v0?.paymentMethod),
      suggestedPaymentMethod: _v9(_v0?.suggestedPaymentMethod, !0),
      hasAutorenew: _v0?.hasAutorenew,
      renewalDate: _v0?.renewalDate,
      startDate: _v0?.startDate,
      endDate: _v0?.endDate,
      totalPrice: _v0?.totalPrice,
      totalPriceForDisplay: _v0?.totalPriceForDisplay,
      pricePerSeat: _v0?.pricePerSeat,
      pricePerSeatForDisplay: _v0?.pricePerSeatForDisplay,
      currency: _v0?.currency,
      currentUnassignedSeatCount: _v0?.currentUnassignedSeatCount,
      nextCycle: (_v1 = _v0?.nextCycle, {
        tier: _v5.Tier[String(_v1?.tier)],
        billingPeriod: _v5.UserPlanType[String(_v1?.billingPeriod)],
        seatCount: _v1?.seatCount,
        productId: _v1?.productId,
        totalRenewalPrice: _v1?.totalRenewalPrice,
        totalRenewalPriceForDisplay: _v1?.totalRenewalPriceForDisplay
      }),
      seatCount: _v0?.seatCount
    };
  }, "permissionsBySearchKeywordFilter", 0, (_v0, _v1) => {
    let {
      type: _v2
    } = _v12(_v0);
    if (_v2 === _v4.EntityTypes.AllTeam) return !0;
    let _v3 = _v13(_v0.email ?? ""),
      _v4 = _v13(_v0.displayName ?? ""),
      _v5 = !1,
      _v6 = _v13(_v1);
    return _v3 && -1 !== _v3.indexOf(_v6) && (_v5 = !0), _v4 && -1 !== _v4.indexOf(_v6) && (_v5 = !0), _v5;
  }, "serialize", 0, _v6, "shouldShowPurchaseNotice", 0, (_v0, _v1, _v2, _v3, _v4) => {
    if (!_v0) return !1;
    let _v5 = _v1.rawLabel || _v1.label,
      _v6 = !_v2?.isFreeTrial || _v2.seatCount < _v4.MAX_SEATS_ALLOWED_FOR_FREE_TRIALERS,
      _v7 = _v4 - _v3.length < 0 && !!_v2?.productId && _v5 !== _v5.PermissionLevel.Viewer;
    return _v6 && _v7;
  }, "shouldShowTeamNotice", 0, (_v0, _v1, _v2, _v3) => {
    if (!_v0?.isFreeTrial) return [!1, !1];
    let _v4 = (_v1 ?? 0) + _v4.OWNER,
      _v5 = _v0.seatCount - _v0.currentUnassignedSeatCount,
      _v6 = (_v2.rawLabel || _v2.label) === _v5.PermissionLevel.Viewer,
      _v7 = _v4 - _v5 + (_v6 ? _v3.length : 0),
      _v8 = _v0.currentUnassignedSeatCount - (_v6 ? 0 : _v3.length),
      _v9 = _v0.seatCount >= _v4.MAX_SEATS_ALLOWED_FOR_FREE_TRIALERS && _v8 < 0,
      _v10 = _v0.seatCount >= _v4.MAX_SEATS_ALLOWED_FOR_FREE_TRIALERS && _v0.currentUnassignedSeatCount <= 0,
      _v11 = _v7 >= _v4.MAX_VIEWERS_ALLOWED_FOR_FREE_TRIALERS,
      _v12 = _v7 > _v4.MAX_VIEWERS_ALLOWED_FOR_FREE_TRIALERS;
    return [_v10 && _v11 || _v12 && _v6, _v10 && _v11 || _v9 && !_v6];
  }, "shouldShowUpsell", 0, (_v0, _v1) => _v0 !== _v5.Upsells.None && _v1.length > 0, "validateEmail", 0, _v0 => !!_v0 && _v4.EMAIL_REGEX.test(_v0.trim()), "weightOf", 0, _v0 => {
    if (!_v0) return -1;
    for (let _v0 = 0; _v0 < _v5.PERMISSION_HEIRARCHY.length; _v0++) if (_v5.PERMISSION_HEIRARCHY[_v0].includes(_v0.name)) return _v0;
    return -1;
  }], 0);
  let _v14 = async (_v0, _v1) => {
      let _v2 = _v0.split("/").slice(-1)[0];
      return await fetch("/settings?action=remind_team_member", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          "X-Requested-With": "XMLHttpRequest"
        },
        body: _v6({
          team_member_id: _v2,
          token: _v1
        })
      });
    },
    _v15 = async (_v0, _v1) => await (0, _v2.getUserCapabilities)({
      capabilities: ["canAddCustomUrl", "canCustomizeAlbums", "canUsePaymentsService", "hasPerSeatPricingModelTeamMember", "hasEnterprise", "canAllowDownloads", "hasTeamInvite", "canUnlistVideo", "hasPrivateModeOff", "hasVideoPasswordPrivacyUpsell", "canHideVideos", "hasRestrictedPrivacyOptions", "hasSunsetHideFromVimeo", "hasExtraEmbedOptions", "hasUpsellsForFlatRateTiers", "regionalDeliveryPublishContentToChina", "canSeeUpsellModalOnShare", "canCreateEmbeddedPlaylists", "hasShowcaseTeamPrivacy", "contentSpaceEnabled", "hasShowcasePasswordPrivacyUpsell", "hasSuggestedSharingRecipients", "hasMultipleReviewLinks", "hasMultiUserSharing"],
      userId: _v0,
      jwt: _v1.jwt,
      apiUrl: _v1.apiUrl
    });
  _v0.s(["getTeamCapabilities", 0, _v15, "getVimeoHeaders", 0, function ({
    jwt: _v0,
    xVimeoPage: _v1,
    locale: _v2
  }, _v3) {
    return {
      ..._v3,
      "Content-Type": "application/json",
      Authorization: _v0 ? `jwt ${_v0}` : "",
      "Vimeo-Page": `${_v1}`,
      "Accept-Language": _v2 ?? "en"
    };
  }, "makeReminderRequest", 0, _v14], 0);
  let _v16 = {
    RESOURCE_TYPE: "uninitialized",
    RESOURCE_ID: null,
    USER_ID: null,
    USER_LOCALE: null,
    LOG_ERRORS_TRACKED: 0,
    LOG_ERRORS_LIMIT: 50,
    PAGE_NAME: null
  };
  function _v17() {
    return {
      ..._v18()
    };
  }
  function _v18() {
    return {
      resourceType: _v16.RESOURCE_TYPE,
      resourceId: _v16.RESOURCE_ID,
      userId: _v16.USER_ID,
      userLocale: _v16.USER_LOCALE,
      pageName: _v16.PAGE_NAME
    };
  }
  _v0.s(["ERROR_SEVERITY_LEVELS", 0, {
    LOW: "low",
    MEDIUM: "medium",
    HIGH: "high",
    CRITICAL: "critical"
  }, "TRACKED_ERRORS", 0, {
    API_ERROR: "api_error",
    VALIDATION_ERROR: "validation_error",
    PERMISSION_ERROR: "permission_error",
    NETWORK_ERROR: "network_error",
    UI_ERROR: "ui_error",
    SHARE_ERROR: "share_error",
    UPLOAD_ERROR: "upload_error",
    UNKNOWN_ERROR: "unknown_error"
  }, "trackingConfig", 0, _v16], 0), _v0.s(["getApplicationGlobals", 0, _v18, "getApplicationInfo", 0, _v17, "updateDatadogGlobals", 0, function (_v0) {
    window.DD_RUM && window.DD_RUM.onReady(() => {
      for (let _v0 in _v0) window.DD_RUM.setViewContextProperty(_v0, String(_v0[_v0]));
    });
  }, "updateTrackingConfig", 0, function (_v0) {
    for (let _v0 in _v0) _v16[_v0] = _v0[_v0];
  }], 0);
  let _v19 = location.host.endsWith("vimeo.com");
  function _v20(_v0, _v1) {
    if (!(_v16.LOG_ERRORS_TRACKED <= _v16.LOG_ERRORS_LIMIT)) return console.debug("Skipping error tracking, session facing limit");
    _v16.LOG_ERRORS_TRACKED += 1;
    let _v2 = {
      ..._v1,
      ..._v17()
    };
    _v19 && window.DD_RUM && window.DD_RUM.onReady(() => {
      window.DD_RUM.getUser(), window.DD_RUM.addError(_v0, _v2);
    });
  }
  _v0.s(["trackError", 0, _v20], 0);
  let _v21 = {
    canAddCustomUrl: !1,
    canAllowDownloads: !1,
    canCustomizeAlbums: !1,
    canHideVideos: !1,
    canSeeUpsellModalOnShare: !1,
    canUnlistVideo: !1,
    canUsePaymentsService: !1,
    hasEnterprise: !1,
    hasExtraEmbedOptions: !1,
    hasPerSeatPricingModelTeamMember: !1,
    hasPrivateModeOff: !1,
    hasRestrictedPrivacyOptions: !1,
    hasSunsetHideFromVimeo: !1,
    hasTeamInvite: !1,
    hasUpsellsForFlatRateTiers: !1,
    hasVideoPasswordPrivacyUpsell: !1,
    regionalDeliveryPublishContentToChina: !1,
    canCreateEmbeddedPlaylists: !1,
    hasShowcaseTeamPrivacy: !1,
    contentSpaceEnabled: !1,
    hasShowcasePasswordPrivacyUpsell: !1,
    hasCommentPolicyByDefault: !1,
    hasSuggestedSharingRecipients: !1,
    hasMultipleReviewLinks: !1,
    hasMultiUserSharing: !1
  };
  var _v22 = _v0.i(0);
  let _v23 = {
      allowedPrivacies: void 0,
      idHash: "",
      id: -1,
      uri: "",
      name: "",
      hasParent: !1,
      isPrivateToUser: !1,
      canEdit: !1,
      canInvite: !1,
      showViewerEmbed: !1,
      resourceCreatorTeamUserUri: null,
      userId: -1,
      user: {
        uri: "",
        name: "",
        email: "",
        pictures: null,
        link: "",
        metadata: {
          connections: void 0
        },
        membership: {
          type: ""
        }
      },
      viewPrivacy: !1,
      canViewerShare: !1,
      showSocialTab: !1
    },
    _v24 = {
      page: "",
      entryPoint: "",
      isOwner: !1,
      totalTeamMembers: null,
      teamPermissionLevel: "",
      isMobileOrTab: !1,
      totalItems: 0
    },
    _v25 = {
      captchaToken: "",
      newEmails: [],
      emailInputs: [],
      existingTeamMember: null,
      invitesRemaining: 0,
      newMemberRole: {
        label: "",
        rawLabel: "",
        value: ""
      },
      customMessage: "",
      purchaseInviteNotice: null,
      shouldSendEmail: !1
    },
    _v26 = {
      status: _v5.AccountStatus.Active,
      tier: _v5.Tier.starter,
      productId: 0,
      billingPeriod: _v5.UserPlanType.month,
      isFreeTrial: !1,
      seatCount: 0,
      paymentMethod: {
        uri: "",
        type: "",
        expirationMonth: 0,
        expirationYear: 0,
        isInstantPurchase: !1,
        lastFour: "",
        inUse: !1,
        textType: "",
        canUseToOptin: !1
      },
      suggestedPaymentMethod: {
        uri: "",
        type: "",
        expirationMonth: 0,
        expirationYear: 0,
        isInstantPurchase: !1,
        lastFour: "",
        inUse: !1,
        textType: "",
        canUseToOptin: !1
      },
      hasAutorenew: !1,
      renewalDate: "",
      startDate: "",
      endDate: "",
      totalPrice: 0,
      totalPriceForDisplay: "",
      pricePerSeat: 0,
      pricePerSeatForDisplay: "",
      currency: "",
      currentUnassignedSeatCount: 0,
      nextCycle: {
        tier: _v5.Tier.starter,
        productId: 0,
        billingPeriod: _v5.UserPlanType.month,
        seatCount: 0,
        totalRenewalPrice: 0,
        totalRenewalPriceForDisplay: ""
      }
    },
    _v27 = (0, _v1.createStore)((_v0, _v1) => {
      let _v2 = {
        set: _v0,
        get: _v1
      };
      return {
        teamPermissions: (_v0 => {
          let {
            set: _v1,
            get: _v2
          } = _v0;
          return {
            data: _v2()?.teamPermissions.data,
            isInitTeamPermissionsLoading: _v2()?.teamPermissions.isInitTeamPermissionsLoading ?? !1,
            isTeamPermissionsLoading: _v2()?.teamPermissions.isTeamPermissionsLoading ?? !1,
            isFetchingMoreTeamPermissions: _v2()?.teamPermissions.isFetchingMoreTeamPermissions ?? !1,
            actions: {
              revalidateTeamPermissions: _v2()?.teamPermissions.actions.revalidateTeamPermissions,
              revalidateSearchTeamPermissions: _v2()?.teamPermissions.actions.revalidateSearchTeamPermissions,
              revalidateAllTeamPermission: _v2()?.teamPermissions.actions.revalidateAllTeamPermission,
              loadMoreTeamPermissions: _v2()?.teamPermissions.actions.loadMoreTeamPermissions,
              setTeamPermissionsData: ({
                data: _v0,
                isInitTeamPermissionsLoading: _v1,
                isTeamPermissionsLoading: _v2,
                isFetchingMoreTeamPermissions: _v3
              }) => {
                _v1(({
                  teamPermissions: _v0
                }) => {
                  _v0.data = _v0, _v0.isInitTeamPermissionsLoading = _v1, _v0.isTeamPermissionsLoading = _v2, _v0.isFetchingMoreTeamPermissions = _v3;
                });
              },
              setRevalidateTeamPermissions: _v0 => {
                _v1(({
                  teamPermissions: _v0
                }) => {
                  _v0.actions.revalidateTeamPermissions = _v0;
                });
              },
              setRevalidateSearchTeamPermissions: _v0 => {
                _v1(({
                  teamPermissions: _v0
                }) => {
                  _v0.actions.revalidateSearchTeamPermissions = _v0;
                });
              },
              setRevalidateAllTeamPermission: _v0 => {
                _v1(({
                  teamPermissions: _v0
                }) => {
                  _v0.actions.revalidateAllTeamPermission = _v0;
                });
              },
              setLoadMoreTeamPermissions: _v0 => {
                _v1(({
                  teamPermissions: _v0
                }) => {
                  _v0.actions.loadMoreTeamPermissions = _v0;
                });
              },
              resetTeamPermissions: () => _v1(({
                teamPermissions: _v0
              }) => {
                _v0.data = void 0, _v0.isInitTeamPermissionsLoading = !1, _v0.isTeamPermissionsLoading = !1, _v0.isFetchingMoreTeamPermissions = !1;
              })
            }
          };
        })(_v2),
        capabilities: (_v0 => {
          let {
            set: _v1,
            get: _v2
          } = _v0;
          return {
            data: _v2()?.capabilities.data ?? _v21,
            isCapabilitiesLoaded: _v2()?.capabilities.isCapabilitiesLoaded ?? !1,
            actions: {
              setCapabilities: async (_v0, _v1) => {
                if (!_v2()?.capabilities.isCapabilitiesLoaded) try {
                  let _v0 = await _v15(_v0, _v1);
                  _v1(({
                    capabilities: _v0
                  }) => {
                    _v0.data = _v0, _v0.isCapabilitiesLoaded = !0;
                  });
                } catch (_v0) {
                  _v20(_v0, {
                    additionalData: {
                      action: "set_capabilities",
                      userId: _v0
                    }
                  }), _v1(({
                    capabilities: _v0
                  }) => {
                    _v0.data = _v21, _v0.isCapabilitiesLoaded = !1;
                  });
                }
              },
              addCapabilities: _v0 => {
                _v1(({
                  capabilities: _v0
                }) => {
                  _v0.data = {
                    ..._v0.data,
                    ..._v0
                  };
                });
              },
              resetCapabilities: () => _v1(({
                capabilities: _v0
              }) => {
                _v0.data = _v21, _v0.isCapabilitiesLoaded = !1;
              })
            }
          };
        })(_v2),
        resourceProps: (_v0 => {
          let {
            set: _v1,
            get: _v2
          } = _v0;
          return {
            data: _v2()?.resourceProps.data ?? _v23,
            resourceType: _v2()?.resourceProps.resourceType ?? _v5.ResourceType.Uninitialized,
            isResourcePropsLoaded: _v2()?.resourceProps.isResourcePropsLoaded ?? !1,
            actions: {
              setResourceProps: _v0 => {
                if (_v2()?.resourceProps.isResourcePropsLoaded && (0, _v22.default)(_v0, _v2()?.resourceProps.data)) return;
                _v1(({
                  resourceProps: _v0
                }) => {
                  _v0.data = _v0, _v0.isResourcePropsLoaded = !0;
                });
                let _v1 = _v0.user.metadata?.connections,
                  _v2 = _v1?.teamMembers?.total ?? 0,
                  _v3 = _v1?.teamMembers?.invitesRemaining ?? 0;
                _v2().shared.actions.setSharedData({
                  totalTeamMembers: _v2
                }), _v2().invite.actions.setInviteRemaining(_v3);
              },
              setResourceType: _v0 => _v1(({
                resourceProps: _v0
              }) => {
                _v0.resourceType = _v0;
              }),
              resetResourceProps: () => _v1(({
                resourceProps: _v0
              }) => {
                _v0.data = _v23, _v0.resourceType = _v5.ResourceType.Uninitialized, _v0.isResourcePropsLoaded = !1;
              })
            }
          };
        })(_v2),
        shared: (_v0 => {
          let {
            set: _v1,
            get: _v2
          } = _v0;
          return {
            data: _v2()?.shared.data ?? _v24,
            actions: {
              onPrivacyChange: _v2()?.shared.actions.onPrivacyChange ?? (() => null),
              onEmbedPrivacyChange: _v2()?.shared.actions.onEmbedPrivacyChange ?? (() => null),
              closeResourceShareModal: _v2()?.shared.actions.closeResourceShareModal ?? (() => null),
              getPlayerCurrentTime: _v2()?.shared.actions.getPlayerCurrentTime ?? (() => 0),
              onLoginRequired: _v2()?.shared.actions.onLoginRequired ?? (() => null),
              setSharedData: _v0 => _v1(({
                shared: _v0
              }) => {
                _v0.data = {
                  ..._v0.data,
                  ..._v0
                };
              }),
              resetSharedData: () => _v1(({
                shared: _v0
              }) => {
                _v0.data = _v24;
              }),
              setOnPrivacyChangeFunc: _v0 => {
                _v1(({
                  shared: _v0
                }) => {
                  _v0.actions.onPrivacyChange = _v0;
                });
              },
              setOnEmbedPrivacyChange: _v0 => {
                _v1(({
                  shared: _v0
                }) => {
                  _v0.actions.onEmbedPrivacyChange = _v0;
                });
              },
              setCloseResourceShareModalFunc: _v0 => {
                _v1(({
                  shared: _v0
                }) => {
                  _v0.actions.closeResourceShareModal = _v0;
                });
              },
              setPlayerCurrentTimeFunc: _v0 => {
                _v1(({
                  shared: _v0
                }) => {
                  _v0.actions.getPlayerCurrentTime = _v0;
                });
              },
              sendReminder: async (_v0, _v1) => {
                if (!_v1) return null;
                if (!_v0) return {
                  title: (0, _v3.translate)({
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
                  })
                };
                try {
                  return await _v14(_v0, _v1.xsrft), {
                    title: (0, _v3.translate)({
                      singular: "Reminder sent",
                      dictionary: {
                        es: {
                          singular: "Se envió el recordatorio"
                        },
                        "de-DE": {
                          singular: "Erinnerungs-E-Mail gesendet!"
                        },
                        "fr-FR": {
                          singular: "Rappel envoyé"
                        },
                        "ja-JP": {
                          singular: "リマインダーを送信しました"
                        },
                        "ko-KR": {
                          singular: "알림이 전송되었습니다"
                        },
                        "pt-BR": {
                          singular: "Lembrete enviado"
                        },
                        "zh-CN": {
                          singular: "提醒已发送"
                        }
                      }
                    })
                  };
                } catch (_v0) {
                  return console.error(_v0), {
                    title: (0, _v3.translate)({
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
                    })
                  };
                }
              },
              setOnLoginRequired: _v0 => {
                _v1(({
                  shared: _v0
                }) => {
                  _v0.actions.onLoginRequired = _v0;
                });
              }
            }
          };
        })(_v2),
        invite: (_v0 => {
          let {
            set: _v1,
            get: _v2
          } = _v0;
          return {
            data: _v2()?.invite.data ?? _v25,
            actions: {
              addEntityMember: _v0 => {
                let {
                    type: _v1,
                    entityUri: _v2
                  } = _v12(_v0),
                  _v3 = {
                    type: _v1,
                    uri: _v2,
                    name: _v0.displayName ?? _v0.email ?? "",
                    email: _v0.email,
                    avatarUrl: _v0.pictures?.sizes[1].link
                  };
                _v1(({
                  invite: _v0
                }) => {
                  _v0.data.emailInputs.push(_v3);
                });
              },
              addNewMember: (_v0, _v1) => {
                let _v2 = _v0.currentPermissionPolicies?.[0];
                if (_v2?.displayName) {
                  let _v0 = _v1.find(_v0 => _v2.displayName === _v0.label);
                  _v1(({
                    invite: _v0
                  }) => {
                    _v0.data.newMemberRole = _v0 ?? _v0.data.newMemberRole;
                  });
                }
                _v1(({
                  invite: _v0
                }) => {
                  _v0.data.existingTeamMember = _v0;
                });
              },
              removeEmailInput: _v0 => _v1(({
                invite: _v0
              }) => {
                _v0.data.emailInputs = _v0.data.emailInputs.filter(_v0 => _v0.email !== _v0.email);
              }),
              addEmailInputs: _v0 => {
                _v1(({
                  invite: _v0
                }) => {
                  _v0.data.emailInputs = [..._v0.data.emailInputs, ..._v0];
                });
              },
              addNewEmailAddress: _v0 => {
                let {
                    hasPerSeatPricingModelTeamMember: _v1,
                    hasEnterprise: _v2
                  } = _v2().capabilities.data,
                  _v3 = _v2().shared.data.totalTeamMembers;
                _v11(_v1, _v2, _v2().invite.data.newEmails, _v3 ?? 0, _v2().invite.data.invitesRemaining) === _v5.Upsells.None && _v1(({
                  invite: _v0
                }) => {
                  _v0.data.newEmails = [..._v0.data.newEmails, ..._v0];
                });
              },
              removeSelectedUser: _v0 => _v1(({
                invite: _v0
              }) => {
                _v0.data.newEmails = _v0.data.newEmails.filter(_v0 => _v0 !== _v0);
              }),
              clearSelectedTeamMembers: () => _v1(({
                invite: _v0
              }) => {
                _v0.data.newEmails = [], _v0.data.emailInputs = [], _v0.data.existingTeamMember = null;
              }),
              setCaptchaToken: _v0 => _v1(({
                invite: _v0
              }) => {
                _v0.data.captchaToken = _v0;
              }),
              togglePurchaseInviteNotice: _v0 => _v1(({
                invite: _v0
              }) => {
                _v0.data.purchaseInviteNotice = _v0;
              }),
              setNewMemberRole: _v0 => _v1(({
                invite: _v0
              }) => {
                _v0.data.newMemberRole = _v0;
              }),
              updateCustomMessage: _v0 => _v1(({
                invite: _v0
              }) => {
                _v0.data.customMessage = _v0;
              }),
              setInviteRemaining: _v0 => _v1(({
                invite: _v0
              }) => {
                _v0.data.invitesRemaining = _v0;
              }),
              resetInviteData: () => _v1(({
                invite: _v0
              }) => {
                _v0.data = _v25;
              }),
              setShouldSendEmail: _v0 => _v1(({
                invite: _v0
              }) => {
                _v0.data.shouldSendEmail = _v0;
              })
            }
          };
        })(_v2),
        screen: (_v0 => {
          let {
            set: _v1,
            get: _v2
          } = _v0;
          return {
            main: _v2()?.screen.main ?? _v5.ShareModalState.Default,
            sub: _v2()?.screen.sub ?? _v5.ModalSubState.Default,
            actions: {
              setMainScreen: _v0 => _v1(({
                screen: _v0
              }) => {
                _v0.main = _v0;
              }),
              setSubScreen: _v0 => _v1(({
                screen: _v0
              }) => {
                _v0.sub = _v0;
              }),
              resetScreens: () => _v1(({
                screen: _v0
              }) => {
                _v0.main = _v5.ShareModalState.Default, _v0.sub = _v5.ModalSubState.Default;
              })
            }
          };
        })(_v2),
        membership: (_v0 => {
          let {
            set: _v1,
            get: _v2
          } = _v0;
          return {
            data: _v2()?.membership.data ?? _v26,
            actions: {
              setMembership: _v0 => _v1(({
                membership: _v0
              }) => {
                _v0.data = _v0;
              }),
              fetchMembership: _v2()?.membership.actions.fetchMembership ?? (() => null),
              setFetchMembershipFunc: _v0 => _v1(({
                membership: _v0
              }) => {
                _v0.actions.fetchMembership = () => {
                  let _v0 = _v2().resourceProps.data.userId;
                  _v2().capabilities.data.hasPerSeatPricingModelTeamMember && _v0 && _v0({
                    select: [],
                    where: {
                      userId: _v0
                    }
                  });
                };
              }),
              resetMembership: () => _v1(({
                membership: _v0
              }) => {
                _v0.data = _v26;
              })
            }
          };
        })(_v2),
        reviewLink: (_v0 => {
          let {
            set: _v1,
            get: _v2
          } = _v0;
          return {
            data: _v2()?.reviewLink.data,
            mode: _v2()?.reviewLink.mode ?? "create",
            actions: {
              setReviewLinkData: _v0 => _v1(({
                reviewLink: _v0
              }) => {
                _v0.data = _v0;
              }),
              setReviewLinkModalMode: _v0 => {
                _v1(({
                  reviewLink: _v0
                }) => {
                  _v0.mode = _v0;
                });
              },
              resetReviewLink: () => {
                _v1(({
                  reviewLink: _v0
                }) => {
                  _v0.data = void 0, _v0.mode = "create";
                });
              }
            }
          };
        })(_v2),
        actions: {
          resetStore: () => {
            _v1().teamPermissions.actions.resetTeamPermissions(), _v1().capabilities.actions.resetCapabilities(), _v1().resourceProps.actions.resetResourceProps(), _v1().shared.actions.resetSharedData(), _v1().invite.actions.resetInviteData(), _v1().screen.actions.resetScreens(), _v1().membership.actions.resetMembership(), _v1().reviewLink.actions.resetReviewLink();
          }
        }
      };
    });
  _v0.s(["useGlobalStore", 0, _v27], 0);
}