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
    _v10 = _v0.i(0);
  let _v11 = `/enterprise/contact-us?mkc=${_v7.MKCCodes.TEAM_SEATS_UPGRADE}`,
    _v12 = `/upgrade?mkc=${_v7.MKCCodes.UPGRADE_ADD_TEAM}`;
  _v0.s(["default", 0, () => {
    let _v0,
      _v1,
      {
        trackUpsellClick: _v2
      } = (0, _v2.useContext)(_v5.ManageTeamAnalytics),
      {
        updateModalToDisplay: _v3,
        updateIsMembershipLoading: _v4,
        fetchTeamInfo: _v5
      } = (0, _v2.useContext)(_v5.ManageTeamDispatchCtx),
      {
        membership: _v6,
        teamInfo: {
          owner: _v7,
          currentTeamSize: _v8,
          teamMembersCount: _v9,
          untranslatedUserRole: _v10
        },
        teamCapabilities: {
          canAddTeamMembers: _v11,
          hasPro: _v12,
          hasBusiness: _v13,
          hasPerSeatPricingModelTeamMember: _v14
        }
      } = (0, _v2.useContext)(_v5.ManageTeamStateCtx),
      _v15 = "",
      _v16 = "",
      _v17 = !1,
      _v18 = !0,
      _v19 = _v7?.account === "custom",
      _v20 = !_v12 && !_v13,
      _v21 = _v6?.gracePeriodType,
      _v22 = () => {
        _v3({
          currentModalInDisplay: _v8.TeamManagementModals.PURCHASE_SEATS_MODAL,
          data: {
            purchaseSeatModalLocation: _v4.PURCHASE_TRIGGERED_FROM.UPSELL_BANNER,
            onPurchaseSuccess: _v0 => {
              _v3({
                currentModalInDisplay: null,
                data: {
                  seatsCount: _v0
                }
              }), _v4(!0), _v5();
            }
          }
        }), _v2();
      },
      _v23 = _v6.tier === _v8.Tier.Creator,
      {
        isBlocked: _v24
      } = (0, _v3.useIsSeatChangeBlocked)({
        tier: _v6.tier
      }),
      _v25 = "/manage/team/members" === window.location.pathname,
      _v26 = _v2;
    if (_v16 = _v9.T.UpgradeButton, "/manage/team/brand-kits" === window.location.pathname && _v6?.tier && [_v8.Tier.Starter, _v8.Tier.Pro, _v8.Tier.Plus, _v8.Tier.Free, _v8.Tier.Basic].includes(_v6.tier)) _v15 = _v9.T.BrandKitsUpsellMessage, _v16 = _v9.T.BrandKitsUpsellButton, _v0 = _v12, _v17 = !0;else if (_v14) {
      if (_v23) _v15 = _v25 && _v23 && !1 === _v11 ? _v9.T.BasicAccountUpgradeMessage : _v9.T.UpgradePlan, _v16 = _v9.T.UpgradeButton, _v0 = _v12;else if (_v8 + _v6.OWNER + _v6.currentUnassignedSeatCount >= _v6.MAX_TEAM_SIZE_ALLOWED_PRICING && !_v6.isFreeTrial) _v15 = `${_v9.T.AccountUpgradeMessage(_v6.MAX_TEAM_SIZE_ALLOWED_PRICING)} ${_v9.T.UpgradeToEnterprise}`, _v16 = _v9.T.ContactUs, _v0 = _v11, _v26 = () => {
        _v2({
          location: _v6.TRACK_UPSELL_LOCATIONS.BILLING_PAGE_HEADER,
          feature: _v6.TRACK_UPSELL_FEATURE
        });
      };else if (_v6.isFreeTrial && !_v6.isReverseFreeTrial && (_v6.seatCount >= _v6.MAX_SEATS_ALLOWED_FOR_FREE_TRIALERS || _v9.viewer >= _v6.MAX_VIEWERS_ALLOWED_FOR_FREE_TRIALERS) || _v6.tier === _v8.Tier.Free) _v15 = _v9.T.UpgradePlan, _v16 = _v9.T.UpgradeButton, _v0 = _v12;else if (_v6.isFreeTrial && !_v6.isReverseFreeTrial && !_v6.currentUnassignedSeatCount && _v6.seatCount < _v6.MAX_SEATS_ALLOWED_FOR_FREE_TRIALERS && _v10 === _v8.TeamRole.Owner) _v24 ? (_v15 = _v9.T.UpgradePlan, _v16 = _v9.T.UpgradeButton, _v0 = _v12) : (_v18 = !1, _v16 = _v9.T.AddSeats, _v15 = _v9.T.AddSeatsToInviteInTrial, _v17 = !0, _v0 = _v11, _v26 = _v22);else {
        if (_v6.isFreeTrial) return null;
        _v24 ? (_v15 = _v9.T.UpgradePlan, _v16 = _v9.T.UpgradeButton, _v0 = _v12) : (_v15 = _v9.T.OutofSeats, _v16 = _v9.T.PurchaseSeats, _v0 = _v11, _v17 = !0, _v18 = !1, _v26 = _v22);
      }
    } else _v15 = _v19 ? _v9.T.ContactAccountManagerForSeats : _v20 ? _v9.T.BasicAccountUpgradeMessage : _v9.T.AccountUpgradeMessage(_v8);
    return _v10 !== _v8.TeamRole.Owner || _v21 || (_v20 || _v14 || (_v15 += _v9.T.UpgradeMessage), _v19 ? _v0 = void 0 : _v13 ? _v0 = _v11 : _v14 || (_v0 = _v12), _v1 = (0, _v1.jsx)(_v10.ContactUsBanner, {
      message: _v15,
      buttonLink: _v0,
      buttonMessage: _v16,
      onClick: _v26,
      isDismissable: _v17,
      openInNewTab: _v18
    })), (0, _v1.jsx)(_v1.Fragment, {
      children: _v1
    });
  }], 0);
  var _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0);
  async function _v16({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      paymentMethodId: _v3
    },
    ..._v4
  }) {
    return (0, _v14.measureLatency)("patchMePaymentMethod", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/me/payment_methods/${_v3}?fields=${_v1.map(_v15.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "PATCH",
        body: JSON.stringify((0, _v15.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v15.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v15.deepCamelCase)(_v1);
    });
  }
  var _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0);
  let _v25 = async (_v0, _v1) => {
    let _v2 = _v0.split("/").slice(-1)[0];
    return await fetch("/settings?action=remind_team_member", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "X-Requested-With": "XMLHttpRequest"
      },
      body: (0, _v24.serialize)({
        team_member_id: _v2,
        token: _v1
      })
    });
  };
  _v0.s(["useManageTeamActions", 0, (_v0, _v1, _v2) => {
    let _v3,
      _v4 = (_v3 = (0, _v23.useViewer)(), (0, _v2.useCallback)(({
        targetUserId: _v0,
        targetUserName: _v1,
        targetUserRole: _v2,
        excludeSso: _v3
      }) => {
        let _v4 = (0, _v17.buildActionBpContext)({
            action_type: "click",
            feature: null
          }),
          _v5 = (0, _v18.buildProductAnalyticsBpContext)({
            flow: "admin_settings",
            modal_name: null,
            entity_type: "setting",
            element: "ellipses",
            location: "page_area",
            feature: "teams",
            product: "collaboration",
            copy: _v3 ? "turn_off_sso" : "turn_on_sso",
            device_type: "desktop"
          }),
          _v6 = (0, _v20.buildWebBpContext)({
            page_name: "team_management_page",
            path: window.location.pathname
          }),
          _v7 = (0, _v19.buildTeamBpContextFromTeamUser)(_v3?.teamUser),
          _v8 = (0, _v21.buildTargetTeamBpContext)({
            is_team_member: !0,
            team_owner_id: _v3?.teamUser?.ownerId || null,
            team_subscription_type: _v3?.teamUser?.accountType || null,
            team_role: _v2?.toLowerCase(),
            team_id: _v3?.teamUser?.teamId || null,
            team_size: _v3?.teamUser?.currentTeamSize || null,
            resource_permission_level: null,
            joined_team_at: null
          });
        (0, _v22.sendBpEventWithContexts)("vimeo.sso_enablement", {
          ..._v4,
          ..._v5,
          ..._v6,
          ..._v7,
          ..._v8
        }, 2, {
          action_name: "edit_sso_enablement",
          action_value: !_v3,
          search_query: _v1,
          search_result_qty: _v0
        });
      }, [_v3])),
      _v5 = async (_v0 = !0) => {
        if (!_v2) throw Error("no viewer");
        _v1({
          type: _v8.ManageTeamActionTypes.FetchTeamInfoInit,
          payload: {
            shouldShowLoading: _v0
          }
        });
        let _v1 = await (0, _v24.requestTeamsInfo)(_v2);
        _v1({
          type: _v8.ManageTeamActionTypes.FetchTeamInfoComplete,
          payload: {
            viewer: _v2,
            teamsInfo: _v1
          }
        }), _v25();
      },
      _v6 = (0, _v2.useRef)(new AbortController()),
      _v7 = async _v0 => {
        if (!_v2) throw Error("no viewer");
        if (_v0.isTeamInfoLoading) return;
        if (!_v0.teamInfo.isSufficientRole) throw Error("Not sufficient permissions");
        _v1({
          type: _v8.ManageTeamActionTypes.FetchTeamMembersInit,
          payload: !0
        }), _v6.current.abort(), _v6.current = new AbortController();
        let _v1 = await (0, _v24.requestTeamMembers)(_v0 || _v2, _v0.teamInfo.owner.uri, _v0.currentPage, _v0.searchQuery, _v0.sort.type, _v0.sort.direction, _v0.rolesFilter, _v0.statusesFilter, _v0.accessFilter, _v6.current.signal);
        _v1({
          type: _v8.ManageTeamActionTypes.FetchTeamMembersComplete,
          payload: {
            teamMembers: _v1
          }
        });
      },
      _v8 = async _v0 => {
        if (_v1({
          type: _v8.ManageTeamActionTypes.FetchTeamMemberInit,
          payload: {
            teamMemberUri: _v0
          }
        }), !_v2) throw Error("no viewer");
        try {
          (await _v25(_v0, _v2?.xsrft)).ok ? _v9(_v9.T.ReminderSent) : _v9(_v9.T.PleaseTryAgain);
        } catch (_v0) {
          _v18(!0);
        }
        await _v10(_v0);
      },
      _v9 = (0, _v2.useCallback)((_v0, _v1) => {
        _v1({
          type: _v8.ManageTeamActionTypes.NotificationForOwnerAdmin,
          payload: {
            content: _v0,
            status: _v1
          }
        }), setTimeout(() => _v1({
          type: _v8.ManageTeamActionTypes.NotificationForOwnerAdmin,
          payload: {
            content: null,
            status: null
          }
        }), 0);
      }, [_v1]),
      _v10 = async _v0 => {
        if (!_v2) throw Error("no viewer");
        let _v1 = await (0, _v24.requestTeamMember)(_v2, _v0);
        _v1({
          type: _v8.ManageTeamActionTypes.FetchTeamMemberComplete,
          payload: {
            teamMember: _v1
          }
        });
      },
      _v11 = _v0 => {
        _v1({
          type: _v8.ManageTeamActionTypes.UpdateSeatCount,
          payload: {
            seatCount: _v0
          }
        });
      },
      _v12 = async _v0 => {
        let _v1 = JSON.stringify(_v0),
          _v2 = {
            apiUrl: _v2?.apiUrl || "",
            jwt: _v2?.jwt || "",
            ownerId: _v0.teamInfo.teamData.ownerId
          },
          _v3 = await (0, _v13.updateTeamInfo)(_v2, _v0.teamInfo.teamData.id, _v1);
        _v1({
          type: _v8.ManageTeamActionTypes.UpdateTeamBrandings,
          payload: {
            teamData: _v3
          }
        });
      },
      _v13 = (0, _v2.useCallback)(async (_v0, _v1) => {
        if (_v2) {
          _v1({
            type: _v8.ManageTeamActionTypes.UpdateTeamMemberInit,
            payload: {
              updatedMemberUri: _v0.uri
            }
          });
          try {
            let _v0 = await (0, _v24.requestUpdateTeamMember)({
              viewer: _v2,
              teamMemberUri: _v0.uri,
              excludeSso: _v1
            });
            _v1({
              type: _v8.ManageTeamActionTypes.UpdateTeamMemberComplete,
              payload: {
                updatedMember: _v0 || _v0,
                viewer: _v2
              }
            }), _v4({
              targetUserId: _v0.user.id,
              targetUserName: _v0.user.name,
              targetUserRole: _v0.role || null,
              excludeSso: _v1
            }), _v9(_v9.T.SSOUpdatedMessage(_v0.user.name, _v1), "success"), _v0.accessFilter.find(_v0 => _v0.applied && [_v8.MemberAccess.LogsInWithSso, _v8.MemberAccess.LogsInWithEmailAndPassword].includes(_v0.value)) && _v1({
              type: _v8.ManageTeamActionTypes.FetchTeamMembersInit,
              payload: !0
            });
          } catch (_v0) {
            _v1({
              type: _v8.ManageTeamActionTypes.UpdateTeamMemberCancel,
              payload: {
                teamMember: _v0.uri
              }
            }), console.error("unable to update team member sso status");
          }
        }
      }, [_v1, _v0.accessFilter, _v9, _v2, _v4]),
      _v14 = (0, _v2.useCallback)(async (_v0, _v1, _v2, _v3) => {
        if (_v2) {
          _v1({
            type: _v8.ManageTeamActionTypes.UpdateTeamMemberInit,
            payload: {
              updatedMemberUri: _v1.uri
            }
          });
          try {
            let _v0 = await (0, _v24.requestUpdateTeamMember)({
              viewer: _v2,
              teamMemberUri: _v1.uri,
              newRole: _v0,
              updatedRegion: _v2,
              policies: _v3
            });
            _v1({
              type: _v8.ManageTeamActionTypes.UpdateTeamMemberComplete,
              payload: {
                updatedMember: _v0 || _v1,
                viewer: _v2
              }
            }), _v0.accessFilter.find(_v0 => _v0.applied && _v0.value === _v8.MemberAccess.CanViewVideosInChina) && _v1({
              type: _v8.ManageTeamActionTypes.FetchTeamMembersInit,
              payload: !0
            });
          } catch (_v0) {
            _v1({
              type: _v8.ManageTeamActionTypes.UpdateTeamMemberCancel,
              payload: {
                teamMember: _v1.uri
              }
            }), console.error("unable to update team member role");
          }
        }
      }, [_v1, _v0.accessFilter, _v2]),
      _v15 = (0, _v2.useCallback)(async _v0 => {
        let _v1 = _v0.teamMembers.find(_v0 => _v0.uri === _v0);
        if (_v2 && _v2.user && _v1 && _v1.permissionLevel !== _v8.TeamRole.Owner && (_v1.status !== _v8.MemberStatus.Accepted || !_v1.user || _v1.user.uri !== _v2.user.uri)) {
          _v1({
            type: _v8.ManageTeamActionTypes.UpdateTeamMemberInit,
            payload: !0
          });
          try {
            await (0, _v24.requestDeleteTeamMember)(_v2, _v0), _v9(_v9.T.Done), _v1({
              type: _v8.ManageTeamActionTypes.DeleteTeamMemberComplete,
              payload: {
                teamMemberUri: _v0
              }
            });
            let _v0 = await (0, _v24.requestTeamMembers)(_v2, _v0.teamInfo.owner.uri, _v0.currentPage, _v0.searchQuery, _v0.sort.type, _v0.sort.direction);
            _v1({
              type: _v8.ManageTeamActionTypes.FetchTeamMembersComplete,
              payload: {
                teamMembers: _v0
              }
            });
          } catch (_v0) {
            _v1({
              type: _v8.ManageTeamActionTypes.UpdateTeamMemberCancel,
              payload: {
                teamMemberUri: _v0
              }
            }), _v18(!0), console.error("unable to delete team member");
          }
        }
      }, [_v2, _v0.teamMembers]),
      _v16 = async () => {
        if (!_v2) throw Error("no viewer");
        if (_v0.isTeamInfoLoading) return;
        let {
          teamInfo: {
            teamData: {
              ownerId: _v0
            }
          }
        } = _v0;
        try {
          let _v0 = (await (0, _v24.requestSSOConnections)(_v2, _v0)).data.some(_v0 => _v0.isActive);
          _v1({
            type: _v8.ManageTeamActionTypes.UpdateIsSSOAvailable,
            payload: {
              isSSOAvailable: _v0
            }
          });
        } catch {
          console.error("unable to check SSO availability");
        }
      },
      _v17 = async () => {
        if (!_v2) throw Error("no viewer");
        if (_v0.isTeamInfoLoading) return;
        let _v0 = _v0.albums.currentPage + 1,
          _v1 = await (0, _v24.requestAlbums)(_v2, _v0.teamInfo.owner.uri, _v0);
        _v1({
          type: _v8.ManageTeamActionTypes.FetchTeamShowcaseComplete,
          payload: {
            albums: _v1,
            currentPage: _v0
          }
        });
      },
      _v18 = _v0 => {
        _v1({
          type: _v8.ManageTeamActionTypes.UpdateHasError,
          payload: {
            hasError: _v0
          }
        });
      },
      _v19 = async _v0 => {
        if (_v2) try {
          let {
            teamInfo: {
              teamData: {
                ownerId: _v0
              }
            },
            teamGroupSort: _v1,
            searchQuery: _v2
          } = _v0;
          if (0 === _v0) return;
          let {
              type: _v3,
              direction: _v4
            } = _v0 || _v1,
            _v5 = "?" + new URLSearchParams({
              fields: "owner_id,name,uri,type,metadata,modified_on,created_on,role",
              ...(_v2 && {
                search_text: _v2
              }),
              ...(_v3 && _v4 ? {
                sort: _v3,
                direction: _v4
              } : {})
            }).toString();
          _v1({
            type: _v8.ManageTeamActionTypes.TeamGroupsLoading,
            payload: {
              isLoading: !0,
              isSearching: !!_v2.length
            }
          });
          let _v6 = await (0, _v24.fetchTeamGroups)(_v2, _v0, _v5);
          _v1({
            type: _v8.ManageTeamActionTypes.FetchTeamGroupsComplete,
            payload: {
              groups: _v6.data,
              groupsInfo: {
                total: _v6.total,
                page: _v6.page
              },
              sort: {
                type: _v3,
                direction: _v4
              }
            }
          }), _v1({
            type: _v8.ManageTeamActionTypes.TeamGroupsLoading,
            payload: {
              isLoading: !1,
              isSearching: !1
            }
          }), _v18(!1);
        } catch (_v0) {
          _v18(!0);
        }
      },
      _v20 = async () => {
        if (!_v2) return;
        let {
          teamInfo: {
            teamData: {
              ownerId: _v0
            }
          }
        } = _v0;
        if (0 === _v0) return;
        let _v1 = await (0, _v24.requestMembershipInfo)(_v2, _v0);
        _v1({
          type: _v8.ManageTeamActionTypes.FetchMembershipInfo,
          payload: {
            membershipInfo: _v1
          }
        });
      },
      _v21 = async () => {
        if (!_v2) return;
        let {
          teamInfo: {
            teamData: {
              ownerId: _v0
            }
          }
        } = _v0;
        if (0 === _v0) return;
        let _v1 = await (0, _v24.requestPaymentMethods)(_v2, _v0);
        _v1({
          type: _v8.ManageTeamActionTypes.FetchPaymentMethods,
          payload: {
            paymentMethods: _v1
          }
        });
      },
      _v22 = async (_v0, _v1 = !0) => {
        if (!_v2) return;
        let {
          teamCapabilities: {
            canUsePaymentsService: _v2
          },
          teamInfo: {
            teamData: {
              ownerId: _v3
            }
          }
        } = _v0;
        if (0 !== _v3) try {
          _v2 ? await _v16({
            baseUrl: `${window.location.protocol}//${_v2.apiUrl}`,
            select: [],
            headers: {
              "Content-Type": "application/json",
              Authorization: `jwt ${_v2.jwt}`,
              "Vimeo-Page": window.location.pathname,
              "Accept-Language": _v2.locale ?? "en"
            },
            where: {
              paymentMethodId: _v0
            },
            variables: {
              isDefault: !0
            }
          }) : await (0, _v24.updatePaymentMethodRequest)(_v2, _v0), _v1({
            type: _v8.ManageTeamActionTypes.UpdatePaymentMethod,
            payload: {
              id: parseInt(_v0)
            }
          }), _v1 && _v23({
            canShow: !0,
            type: "positive",
            text: _v9.T.PaymentMethodUpdated
          });
        } catch (_v0) {
          if (_v1 && _v23({
            canShow: !0,
            type: "negative",
            text: _v9.T.PaymentMethodNotUpdated
          }), !_v1) throw _v0;
        }
      },
      _v23 = _v0 => {
        _v1({
          type: _v8.ManageTeamActionTypes.ShowNotice,
          payload: {
            notice: _v0
          }
        });
      },
      _v24 = (0, _v2.useCallback)(_v0 => {
        _v1({
          type: _v8.ManageTeamActionTypes.ShowBillingPageLinkoutNotice,
          payload: {
            notice: _v0
          }
        });
      }, [_v1]),
      _v25 = _v0 => {
        _v1({
          type: _v8.ManageTeamActionTypes.UpdateInvitesRemaining,
          payload: _v0 ? {
            invitesLeft: _v0
          } : {}
        });
      };
    return {
      fetchMembershipInfo: _v20,
      fetchPaymentMethods: _v21,
      updatePaymentMethods: _v0 => {
        _v1({
          type: _v8.ManageTeamActionTypes.UpdatePaymentMethods,
          payload: {
            paymentMethods: _v0
          }
        });
      },
      updatePaymentMethod: _v22,
      showNotice: _v23,
      showBillingPageLinkoutNotice: _v24,
      fetchTeamInfo: _v5,
      fetchTeamMembers: _v7,
      fetchTeamMember: _v10,
      updateTeamBrandings: _v12,
      updateSearchQuery: _v0 => {
        _v1({
          type: _v8.ManageTeamActionTypes.UpdateSearchQuery,
          payload: {
            searchQuery: _v0
          }
        });
      },
      updateGroupMembersSearchQuery: _v0 => {
        _v1({
          type: _v8.ManageTeamActionTypes.UpdateGroupMembersSearchQuery,
          payload: {
            searchQuery: _v0
          }
        });
      },
      updateSort: _v0 => {
        _v1({
          type: _v8.ManageTeamActionTypes.UpdateSort,
          payload: {
            sort: _v0
          }
        });
      },
      updateDirection: _v0 => {
        _v1({
          type: _v8.ManageTeamActionTypes.UpdateDirection,
          payload: {
            direction: _v0
          }
        });
      },
      updateRolesFilter: _v0 => {
        _v1({
          type: _v8.ManageTeamActionTypes.UpdateRolesFilter,
          payload: {
            rolesFilter: _v0
          }
        });
      },
      updateStatusesFilter: _v0 => {
        _v1({
          type: _v8.ManageTeamActionTypes.UpdateStatusesFilter,
          payload: {
            statusesFilter: _v0
          }
        });
      },
      updateAccessFilter: _v0 => {
        _v1({
          type: _v8.ManageTeamActionTypes.UpdateAccessFilter,
          payload: {
            accessFilter: _v0
          }
        });
      },
      updateCurrentPage: _v0 => {
        _v1({
          type: _v8.ManageTeamActionTypes.UpdateCurrentPage,
          payload: {
            currentPage: _v0
          }
        });
      },
      updateTeamMemberPermission: _v14,
      updateTeamMemberRoleState: (_v0, _v1) => {
        _v1({
          type: _v8.ManageTeamActionTypes.UpdateTeamMemberComplete,
          payload: {
            updatedMember: _v1,
            viewer: _v2
          }
        });
      },
      deleteTeamMember: _v15,
      setHasError: _v18,
      setHasMembershipInfoLoadFailed: _v0 => {
        _v1({
          type: _v8.ManageTeamActionTypes.UpdateHasMembershipInfoLoadFailed,
          payload: {
            hasMembershipInfoLoadFailed: _v0
          }
        });
      },
      setGroupUsersError: _v0 => {
        _v1({
          type: _v8.ManageTeamActionTypes.UpdateGroupUsersError,
          payload: {
            hasError: _v0
          }
        });
      },
      remindTeamMemberAboutInvite: _v8,
      showToastMessage: _v9,
      fetchTeamShowcase: _v17,
      fetchTeamGroupsAction: _v19,
      updateTeamCapabilities: _v0 => {
        _v1({
          type: _v8.ManageTeamActionTypes.UpdateTeamCapabilities,
          payload: {
            capabilities: _v0
          }
        });
      },
      clearTeamGroupUsers: () => {
        _v1({
          type: _v8.ManageTeamActionTypes.ClearTeamGroupUsers,
          payload: null
        });
      },
      updateModalToDisplay: _v0 => {
        _v1({
          type: _v8.ManageTeamActionTypes.UpdateModalToDisplay,
          payload: {
            modalToDisplay: _v0
          }
        });
      },
      updateTeamInfoSeatDetails: _v0 => {
        _v1({
          type: _v8.ManageTeamActionTypes.UpdateTeamSeatDetails,
          payload: {
            seatDetails: _v0
          }
        });
      },
      updateTeamGroupsLoadingSearching: (_v0, _v1) => {
        _v1({
          type: _v8.ManageTeamActionTypes.TeamGroupsLoading,
          payload: {
            isLoading: _v0,
            isSearching: _v1
          }
        });
      },
      updateTeamGroups: (_v0, _v1, _v2, _v3, _v4) => {
        _v1({
          type: _v8.ManageTeamActionTypes.FetchTeamGroupsComplete,
          payload: {
            searchQuery: _v4,
            groups: _v0,
            groupsInfo: {
              page: _v2,
              total: _v1
            },
            sort: _v3
          }
        });
      },
      updateTeamGroupSort: _v0 => {
        _v1({
          type: _v8.ManageTeamActionTypes.UpdateTeamGroupSort,
          payload: _v0
        });
      },
      updateTeamInfoTeamMembersCount: _v0 => {
        _v1({
          type: _v8.ManageTeamActionTypes.UpdateTeamMembersCount,
          payload: {
            teamMembersCount: _v0
          }
        });
      },
      updateMembershipInfo: _v0 => {
        _v1({
          type: _v8.ManageTeamActionTypes.UpdateMembershipInfo,
          payload: {
            membershipInfo: _v0
          }
        });
      },
      updateUploadQuota: _v0 => {
        _v1({
          type: _v8.ManageTeamActionTypes.UpdateUploadQuota,
          payload: {
            uploadQuota: _v0
          }
        });
      },
      updatePlanQuota: _v0 => {
        let {
          videoStorageQuotaCap: _v1,
          videoStoragePeriodicQuota: _v2
        } = _v0?.params;
        _v1({
          type: _v8.ManageTeamActionTypes.UpdatePlanQuota,
          payload: {
            cap: _v1,
            periodic: _v2
          }
        });
      },
      updatePlanData: _v0 => {
        _v1({
          type: _v8.ManageTeamActionTypes.UpdatePlanData,
          payload: _v0
        });
      },
      updateSeatCount: _v11,
      removeUnassignedSeats: _v0 => {
        _v1({
          type: _v8.ManageTeamActionTypes.RemoveUnassignedSeats,
          payload: {
            seatCount: _v0
          }
        }), _v11(0);
      },
      updateTeamsPageNotice: _v0 => {
        _v1({
          type: _v8.ManageTeamActionTypes.UpdateTeamsPageNotice,
          payload: {
            notice: _v0
          }
        });
      },
      updateBillingPageNotice: _v0 => {
        _v1({
          type: _v8.ManageTeamActionTypes.UpdateBillingPageNotice,
          payload: {
            notice: _v0
          }
        });
      },
      updateIsMembershipLoading: _v0 => {
        _v1({
          type: _v8.ManageTeamActionTypes.UpdateIsMembershipLoading,
          payload: {
            isMembershipInfoLoading: _v0
          }
        });
      },
      updateIsRemoveSeatsConfirmation: _v0 => {
        _v1({
          type: _v8.ManageTeamActionTypes.UpdateIsRemoveSeatsConfirmation,
          payload: {
            isRemoveSeatsConfirmation: _v0
          }
        });
      },
      updateIsOperationOngoing: _v0 => {
        _v1({
          type: _v8.ManageTeamActionTypes.UpdateIsOperationOngoing,
          payload: {
            isOperationOngoing: _v0
          }
        });
      },
      updateIsBillingSettingChangeOngoing: _v0 => {
        _v1({
          type: _v8.ManageTeamActionTypes.UpdateIsBillingSettingChangeOngoing,
          payload: {
            isBillingSettingChangeOngoing: _v0
          }
        });
      },
      updateIsInviteModalOpen: _v0 => {
        _v1({
          type: _v8.ManageTeamActionTypes.UpdateIsInviteModalOpen,
          payload: {
            isInviteModalOpen: _v0
          }
        });
      },
      updateIsRoleUpgradeRequestsLoaded: _v0 => {
        _v1({
          type: _v8.ManageTeamActionTypes.UpdateIsRoleUpgradeRequestsLoaded,
          payload: {
            isRoleUpgradeRequestsLoaded: _v0
          }
        });
      },
      updateRoleUpgradeRequests: _v0 => {
        _v1({
          type: _v8.ManageTeamActionTypes.UpdateRoleUpgradeRequests,
          payload: {
            roleUpgradeRequests: _v0
          }
        });
      },
      updateSelectedTeamMembers: _v0 => {
        _v1({
          type: _v8.ManageTeamActionTypes.UpdateSelectedTeamMembers,
          payload: {
            selectedTeamMembers: _v0
          }
        });
      },
      updateInvitesRemaining: _v25,
      updateCancelConfirmationInfo: _v0 => {
        _v1({
          type: _v8.ManageTeamActionTypes.UpdateCancelConfirmationInfo,
          payload: {
            cancelConfirmationInfo: _v0
          }
        });
      },
      toggleTeamMemberSSO: _v13,
      fetchSSOAvailability: _v16
    };
  }], 0);
}