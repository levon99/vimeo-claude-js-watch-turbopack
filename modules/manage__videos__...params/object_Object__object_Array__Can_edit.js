{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = (_v0, _v1) => {
      let _v2,
        _v3 = [];
      for (let _v0 in _v0) if (_v0.hasOwnProperty(_v0)) {
        let _v0 = _v0[_v0];
        switch (_v1 && (_v0 = _v1 + "[" + _v0 + "]"), Object.prototype.toString.call(_v0)) {
          case "[object Object]":
            _v2 = _v5(_v0, _v0);
            break;
          case "[object Array]":
            let _v0 = {};
            if (0 === _v0.length) _v0 = null;else {
              for (let _v0 = 0, _v1 = _v0.length; _v0 < _v1; _v0++) _v0[_v0] = _v0[_v0];
              _v2 = _v5(_v0, _v0);
            }
            break;
          default:
            _v2 = _v0 + "=" + encodeURIComponent(_v0);
        }
        null !== _v0 && _v3.push(_v2);
      }
      return _v3.join("&");
    },
    _v6 = _v0 => {
      let _v1 = _v0.split("/");
      return parseInt(_v1[_v1.length - 1]);
    },
    _v7 = _v0 => {
      switch (_v0) {
        case _v4.PermissionLevel.Contributor:
          return (0, _v2.translate)({
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
        case _v4.ApplicablePermissionPolicyTypes.folderAdmin:
        case _v4.ApplicablePermissionPolicyTypes.clipAdmin:
        case _v4.ApplicablePermissionPolicyTypes.albumAdmin:
        case _v4.ApplicablePermissionPolicyTypes.albumCreator:
        case _v4.PermissionLevel.Owner:
        case _v4.PermissionLevel.Admin:
          return (0, _v2.translate)({
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
        case _v4.PermissionLevel.Viewer:
          return (0, _v2.translate)({
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
        case _v4.PermissionLevel.Uploader:
          return (0, _v2.translate)({
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
        case _v4.ApplicablePermissionPolicyTypes.clipCommenter:
        case _v4.ApplicablePermissionPolicyTypes.folderCommenter:
          return (0, _v2.translate)({
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
    _v8 = (_v0, _v1 = !1) => ({
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
    _v9 = (_v0, _v1, _v2, _v3) => {
      let _v4 = _v1.length;
      return (_v0 ? _v3.MAX_TEAM_SIZE_FOR_PRICING_PLAN - (_v2 + _v3.OWNER) : _v3 ?? 0) - _v4;
    },
    _v10 = _v0 => {
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
        userId: _v6 ? _v6(_v6) : null,
        email: _v0.email,
        totalUsers: _v4
      };
    },
    _v11 = _v0 => _v0.toLowerCase().replace(/[^0-9A-Z\u0400-\u04FF]+/gi, "");
  _v0.s(["getActiveUpsell", 0, (_v0, _v1, _v2, _v3, _v4) => {
    let _v5 = _v9(_v0, _v2, _v3 ?? 0, _v4),
      _v6 = ((_v0, _v1, _v2, _v3) => {
        if (_v2) return _v4.Upsells.None;
        let _v4 = _v0 + _v1;
        return _v3 ? _v4.Upsells.ToPricingPlan : _v4 < 3 ? _v4.Upsells.ToPro : _v4 < 10 ? _v4.Upsells.ToBusiness : _v4.Upsells.ToCustom;
      })(_v3 ?? 0, _v4, _v1, _v0);
    return _v5 < 0 ? _v6 : _v4.Upsells.None;
  }, "getCurrentInvitesRemaining", 0, _v9, "getMaxTeamSize", 0, _v0 => _v0 == _v4.Upsells.ToPricingPlan ? 200 : _v0 === _v4.Upsells.ToCustom ? 10 : 3 * (_v0 === _v4.Upsells.ToBusiness), "getMemberIdFromUri", 0, _v6, "getMultiUserSharePermissionLevels", 0, (_v0, _v1) => {
    let _v2 = (_v0, _v1, _v2) => ({
      label: _v0,
      value: _v1,
      rawLabel: _v2
    });
    switch (_v0) {
      case _v4.ResourceType.Video:
        return [_v2((0, _v2.translate)({
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
        }), _v4.PermissionActions.clipView, _v4.PermissionLevel.Viewer), _v2((0, _v2.translate)({
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
        }), _v4.PermissionActions.clipCommenter, _v4.PermissionLevel.Viewer), _v2((0, _v2.translate)({
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
        }), _v4.PermissionActions.clipEdit, _v4.PermissionLevel.Contributor)];
      case _v4.ResourceType.Album:
        return [_v2((0, _v2.translate)({
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
        }), _v4.PermissionActions.albumView, _v4.PermissionLevel.Viewer), _v2((0, _v2.translate)({
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
        }), _v4.PermissionActions.albumEdit, _v4.PermissionLevel.Contributor)];
      case _v4.ResourceType.Folder:
        return [_v2((0, _v2.translate)({
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
        }), _v4.PermissionActions.folderView, _v4.PermissionLevel.Viewer), _v2((0, _v2.translate)({
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
        }), _v4.PermissionActions.folderComment, _v4.PermissionLevel.Viewer), _v2((0, _v2.translate)({
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
        }), _v4.PermissionActions.folderEdit, _v4.PermissionLevel.Contributor), ...(_v1 ? [_v2((0, _v2.translate)({
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
        }), _v4.PermissionActions.folderAdmin, _v4.PermissionLevel.Admin)] : [])];
    }
    return [];
  }, "getNewMemberRole", 0, (_v0, _v1, _v2) => _v2 && _v3.ALLOWED_RESOURCE_FOR_COMMENT_POLICY.includes(_v1) && _v0.find(_v0 => [_v4.PermissionActions.folderComment, _v4.PermissionActions.clipCommenter].includes(_v0.value)) || _v0[0], "getOutsideEmails", 0, _v0 => {
    let _v1 = [];
    return _v0.forEach(_v0 => {
      "email" === _v0.type && _v0.email && _v1.push(_v0.email);
    }), _v1;
  }, "getPermissionLevelDescriptions", 0, (_v0, _v1) => _v1 ? _v1.applicablePermissionPolicies.map(_v0 => ({
    label: _v0.displayName,
    description: _v3.PERMISSION_POLICY_NAME_TO_PERMISSION_LEVELS[_v0.name].description
  })) : _v0 === _v4.ResourceType.Album ? _v3.PERMISSION_LEVEL_DESCRIPTIONS_ALBUM : _v3.PERMISSION_LEVEL_DESCRIPTIONS, "getPermissionLevels", 0, (_v0, _v1) => {
    if (!_v0) return [{
      label: "",
      rawLabel: "",
      value: ""
    }];
    let _v2 = _v0 => {
      let _v1;
      switch (_v0) {
        case _v4.ResourceType.Folder:
          _v1 = "edit" === _v0 ? _v4.PermissionActions.folderEdit : "comment" === _v0 ? _v4.PermissionActions.folderComment : _v4.PermissionActions.folderView;
          break;
        case _v4.ResourceType.Video:
          _v1 = "edit" === _v0 ? _v4.PermissionActions.clipEdit : "comment" === _v0 ? _v4.PermissionActions.clipCommenter : _v4.PermissionActions.clipView;
          break;
        default:
          _v1 = "edit" === _v0 ? _v4.PermissionActions.albumEdit : _v4.PermissionActions.albumView;
      }
      return _v1;
    };
    if (!_v1) {
      let _v0 = [{
          label: _v7("Contributor"),
          rawLabel: "Contributor",
          value: _v2("edit")
        }, {
          label: _v7("Viewer"),
          rawLabel: "Viewer",
          value: _v2("view")
        }],
        _v1 = null;
      switch (_v0) {
        case _v4.ResourceType.Video:
          _v1 = {
            label: _v7("Clip Commenter"),
            rawLabel: "Viewer",
            value: _v2("comment"),
            resourcePermissionPolicyUri: _v3.CLIP_COMMENT_POLICY_URI
          };
          break;
        case _v4.ResourceType.Folder:
          _v1 = {
            label: _v7("Folder Commenter"),
            rawLabel: "Viewer",
            value: _v2("comment"),
            resourcePermissionPolicyUri: _v3.FOLDER_COMMENT_POLICY_URI
          };
      }
      return _v1 && (_v0 = [{
        label: _v7("Viewer"),
        rawLabel: "Viewer",
        value: _v2("view")
      }, _v1, {
        label: _v7("Contributor"),
        rawLabel: "Contributor",
        value: _v2("edit")
      }]), _v0;
    }
    return _v1.applicablePermissionPolicies.map(_v0 => ({
      label: _v0.displayName,
      rawLabel: _v0.displayName,
      value: _v3.PERMISSION_POLICY_NAME_TO_PERMISSION_LEVELS[_v0.name].value
    }));
  }, "getResourceIdFromUri", 0, _v0 => {
    let _v1 = _v0.split("/");
    return parseInt(_v1[_v1.length - 1].split(":")[0]);
  }, "getResourceTypeFromUri", 0, _v0 => /video/.test(_v0) ? _v4.ResourceType.Video : /showcase/.test(_v0) ? _v4.ResourceType.Album : _v4.ResourceType.Folder, "getRoleDisplayName", 0, _v7, "getSelectedRole", 0, _v0 => _v0 ? {
    value: _v3.PERMISSION_POLICY_NAME_TO_PERMISSION_LEVELS[_v0.name].value,
    label: _v0.displayName
  } : {
    value: "",
    label: ""
  }, "getShareModalHeight", 0, _v0 => {
    switch (_v0) {
      case _v4.ShareModalState.Purchase:
        return _v3.SHARE_MODAL_PURCHASE_HEIGHT;
      case _v4.ShareModalState.Upsell:
        return _v3.SHARE_MODAL_UPSELL_HEIGHT;
      default:
        return _v3.SHARE_MODAL_HEIGHT;
    }
  }, "getTeamEntityDetails", 0, _v10, "hasArrayDuplicates", 0, (_v0, _v1) => [..._v0, ..._v1].filter((_v0, _v1, _v2) => _v2.indexOf(_v0) === _v1).length === _v0.length, "isOnlyViewerAccess", 0, _v0 => 1 === _v0.applicablePermissionPolicies.length && _v3.ApplicableViewerPermissionPolicies.includes(_v0.applicablePermissionPolicies[0].name), "mapMembershipResponse", 0, _v0 => {
    let _v1;
    return {
      status: _v4.AccountStatus[String(_v0.status)],
      tier: _v4.Tier[String(_v0?.tier)],
      billingPeriod: _v4.UserPlanType[String(_v0?.billingPeriod || "")],
      productId: _v0?.productId,
      isFreeTrial: _v0?.isFreeTrial,
      paymentMethod: _v8(_v0?.paymentMethod),
      suggestedPaymentMethod: _v8(_v0?.suggestedPaymentMethod, !0),
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
        tier: _v4.Tier[String(_v1?.tier)],
        billingPeriod: _v4.UserPlanType[String(_v1?.billingPeriod)],
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
    } = _v10(_v0);
    if (_v2 === _v3.EntityTypes.AllTeam) return !0;
    let _v3 = _v11(_v0.email ?? ""),
      _v4 = _v11(_v0.displayName ?? ""),
      _v5 = !1,
      _v6 = _v11(_v1);
    return _v3 && -1 !== _v3.indexOf(_v6) && (_v5 = !0), _v4 && -1 !== _v4.indexOf(_v6) && (_v5 = !0), _v5;
  }, "serialize", 0, _v5, "shouldShowPurchaseNotice", 0, (_v0, _v1, _v2, _v3, _v4) => {
    if (!_v0) return !1;
    let _v5 = _v1.rawLabel || _v1.label,
      _v6 = !_v2?.isFreeTrial || _v2.seatCount < _v3.MAX_SEATS_ALLOWED_FOR_FREE_TRIALERS,
      _v7 = _v4 - _v3.length < 0 && !!_v2?.productId && _v5 !== _v4.PermissionLevel.Viewer;
    return _v6 && _v7;
  }, "shouldShowTeamNotice", 0, (_v0, _v1, _v2, _v3) => {
    if (!_v0?.isFreeTrial) return [!1, !1];
    let _v4 = (_v1 ?? 0) + _v3.OWNER,
      _v5 = _v0.seatCount - _v0.currentUnassignedSeatCount,
      _v6 = (_v2.rawLabel || _v2.label) === _v4.PermissionLevel.Viewer,
      _v7 = _v4 - _v5 + (_v6 ? _v3.length : 0),
      _v8 = _v0.currentUnassignedSeatCount - (_v6 ? 0 : _v3.length),
      _v9 = _v0.seatCount >= _v3.MAX_SEATS_ALLOWED_FOR_FREE_TRIALERS && _v8 < 0,
      _v10 = _v0.seatCount >= _v3.MAX_SEATS_ALLOWED_FOR_FREE_TRIALERS && _v0.currentUnassignedSeatCount <= 0,
      _v11 = _v7 >= _v3.MAX_VIEWERS_ALLOWED_FOR_FREE_TRIALERS,
      _v12 = _v7 > _v3.MAX_VIEWERS_ALLOWED_FOR_FREE_TRIALERS;
    return [_v10 && _v11 || _v12 && _v6, _v10 && _v11 || _v9 && !_v6];
  }, "shouldShowUpsell", 0, (_v0, _v1) => _v0 !== _v4.Upsells.None && _v1.length > 0, "validateEmail", 0, _v0 => !!_v0 && _v3.EMAIL_REGEX.test(_v0.trim()), "weightOf", 0, _v0 => {
    if (!_v0) return -1;
    for (let _v0 = 0; _v0 < _v4.PERMISSION_HEIRARCHY.length; _v0++) if (_v4.PERMISSION_HEIRARCHY[_v0].includes(_v0.name)) return _v0;
    return -1;
  }], 0);
  let _v12 = async (_v0, _v1) => {
      let _v2 = _v0.split("/").slice(-1)[0];
      return await fetch("/settings?action=remind_team_member", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          "X-Requested-With": "XMLHttpRequest"
        },
        body: _v5({
          team_member_id: _v2,
          token: _v1
        })
      });
    },
    _v13 = async (_v0, _v1) => await (0, _v1.getUserCapabilities)({
      capabilities: ["canAddCustomUrl", "canCustomizeAlbums", "canUsePaymentsService", "hasPerSeatPricingModelTeamMember", "hasEnterprise", "canAllowDownloads", "hasTeamInvite", "canUnlistVideo", "hasPrivateModeOff", "hasVideoPasswordPrivacyUpsell", "canHideVideos", "hasRestrictedPrivacyOptions", "hasSunsetHideFromVimeo", "hasExtraEmbedOptions", "hasUpsellsForFlatRateTiers", "regionalDeliveryPublishContentToChina", "canSeeUpsellModalOnShare", "canCreateEmbeddedPlaylists", "hasShowcaseTeamPrivacy", "contentSpaceEnabled", "hasShowcasePasswordPrivacyUpsell", "hasSuggestedSharingRecipients", "hasMultipleReviewLinks", "hasMultiUserSharing"],
      userId: _v0,
      jwt: _v1.jwt,
      apiUrl: _v1.apiUrl
    });
  _v0.s(["getTeamCapabilities", 0, _v13, "getVimeoHeaders", 0, function ({
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
  }, "makeReminderRequest", 0, _v12], 0);
}