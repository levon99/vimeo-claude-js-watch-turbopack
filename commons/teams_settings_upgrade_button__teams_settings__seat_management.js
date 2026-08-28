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
    _v12 = _v0.i(0);
  let _v13 = `/enterprise/contact-us?mkc=${_v9.MKCCodes.TEAM_SEATS_UPGRADE}`,
    _v14 = (0, _v4.buildUpgradePlanUrl)({
      paywallTrigger: "teams_settings_upgrade_button",
      paywallLocation: "teams_settings",
      paywallFeature: "seat_management"
    }, {
      mkc: _v9.MKCCodes.UPGRADE_ADD_TEAM
    });
  _v0.s(["default", 0, () => {
    let _v0,
      _v1,
      {
        trackUpsellClick: _v2
      } = (0, _v2.useContext)(_v6.ManageTeamAnalytics),
      {
        updateModalToDisplay: _v3,
        updateIsMembershipLoading: _v4,
        fetchTeamInfo: _v5
      } = (0, _v2.useContext)(_v6.ManageTeamDispatchCtx),
      {
        membership: _v6,
        teamInfo: {
          owner: _v7,
          currentTeamSize: _v8,
          seatDetails: _v9,
          teamMembersCount: _v10,
          untranslatedUserRole: _v11
        },
        teamCapabilities: {
          canAddTeamMembers: _v12,
          hasPro: _v13,
          hasBusiness: _v14,
          hasPerSeatPricingModelTeamMember: _v15
        }
      } = (0, _v2.useContext)(_v6.ManageTeamStateCtx),
      _v16 = "",
      _v17 = "",
      _v18 = !1,
      _v19 = !0,
      _v20 = _v7?.account === "custom",
      _v21 = !_v13 && !_v14,
      _v22 = _v6?.gracePeriodType,
      _v23 = _v11.T.AccountUpgradeMessage,
      _v24 = () => {
        _v3({
          currentModalInDisplay: _v10.TeamManagementModals.PURCHASE_SEATS_MODAL,
          data: {
            purchaseSeatModalLocation: _v5.PURCHASE_TRIGGERED_FROM.UPSELL_BANNER,
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
      _v25 = _v6.tier === _v10.Tier.Creator,
      {
        hasScheduledDowngrade: _v26,
        isScheduledOrderLoading: _v27
      } = (0, _v7.useScheduledOrder)(_v6.subscriptionId, _v6.tier, _v6.hasAutorenew),
      {
        isBlocked: _v28
      } = (0, _v3.useIsSeatChangeBlocked)({
        tier: _v6.tier,
        hasScheduledDowngrade: _v26
      }),
      _v29 = _v27 || _v28,
      _v30 = _v26 ? _v11.T.AddSeatsDowngradeTooltip : _v11.T.UpgradePlan,
      _v31 = !_v6.isFreeTrial && _v6.seatCapPaid > 0 && Math.max(_v6.seatCount, _v9?.totalPurchasedCount ?? 0, _v8 + _v8.OWNER) >= _v6.seatCapPaid,
      _v32 = "/manage/team/members" === window.location.pathname,
      _v33 = _v2;
    if (_v17 = _v11.T.UpgradeButton, "/manage/team/brand-kits" === window.location.pathname && _v6?.tier && [_v10.Tier.Starter, _v10.Tier.Pro, _v10.Tier.Plus, _v10.Tier.Free, _v10.Tier.Basic].includes(_v6.tier)) _v16 = _v11.T.BrandKitsUpsellMessage, _v17 = _v11.T.BrandKitsUpsellButton, _v0 = _v14, _v18 = !0;else if (_v15) {
      if (_v25) _v16 = _v32 && _v25 && !1 === _v12 && !_v31 ? _v11.T.BasicAccountUpgradeMessage : _v11.T.UpgradePlan, _v17 = _v11.T.UpgradeButton, _v0 = _v14;else if (_v8 + _v8.OWNER + _v6.currentUnassignedSeatCount >= _v8.MAX_TEAM_SIZE_ALLOWED_PRICING && !_v6.isFreeTrial) _v16 = `${_v23(_v8.MAX_TEAM_SIZE_ALLOWED_PRICING)} ${_v11.T.UpgradeToEnterprise}`, _v17 = _v11.T.ContactUs, _v0 = _v13, _v33 = () => {
        _v2({
          location: _v8.TRACK_UPSELL_LOCATIONS.BILLING_PAGE_HEADER,
          feature: _v8.TRACK_UPSELL_FEATURE
        });
      };else if (_v6.isFreeTrial && !_v6.isReverseFreeTrial && (_v6.seatCount >= _v8.MAX_SEATS_ALLOWED_FOR_FREE_TRIALERS || _v10.viewer >= _v8.MAX_VIEWERS_ALLOWED_FOR_FREE_TRIALERS) || _v6.tier === _v10.Tier.Free) _v16 = _v11.T.UpgradePlan, _v17 = _v11.T.UpgradeButton, _v0 = _v14;else if (_v6.isFreeTrial && !_v6.isReverseFreeTrial && !_v6.currentUnassignedSeatCount && _v6.seatCount < _v8.MAX_SEATS_ALLOWED_FOR_FREE_TRIALERS && _v11 === _v10.TeamRole.Owner) _v29 ? (_v16 = _v30, _v17 = _v11.T.UpgradeButton, _v0 = _v14) : (_v19 = !1, _v17 = _v11.T.AddSeats, _v16 = _v11.T.AddSeatsToInviteInTrial, _v18 = !0, _v0 = _v13, _v33 = _v24);else {
        if (_v6.isFreeTrial) return null;
        _v29 || _v31 ? (_v16 = _v30, _v17 = _v11.T.UpgradeButton, _v0 = _v14) : (_v16 = _v11.T.OutofSeats, _v17 = _v11.T.PurchaseSeats, _v0 = _v13, _v18 = !0, _v19 = !1, _v33 = _v24);
      }
    } else _v16 = _v20 ? _v11.T.ContactAccountManagerForSeats : _v21 ? _v11.T.BasicAccountUpgradeMessage : _v23(_v8);
    return _v11 !== _v10.TeamRole.Owner || _v22 || (_v21 || _v15 || (_v16 += _v11.T.UpgradeMessage), _v20 ? _v0 = void 0 : _v14 ? _v0 = _v13 : _v15 || (_v0 = _v14), _v1 = (0, _v1.jsx)(_v12.ContactUsBanner, {
      message: _v16,
      buttonLink: _v0,
      buttonMessage: _v17,
      onClick: _v33,
      isDismissable: _v18,
      openInNewTab: _v19
    })), (0, _v1.jsx)(_v1.Fragment, {
      children: _v1
    });
  }], 0);
  var _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0);
  async function _v18({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      paymentMethodId: _v3
    },
    ..._v4
  }) {
    return (0, _v16.measureLatency)("patchMePaymentMethod", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/me/payment_methods/${_v3}?fields=${_v1.map(_v17.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "PATCH",
        body: JSON.stringify((0, _v17.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v17.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v17.deepCamelCase)(_v1);
    });
  }
  var _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0);
  let _v27 = async (_v0, _v1) => {
    let _v2 = _v0.split("/").slice(-1)[0];
    return fetch("/settings?action=remind_team_member", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "X-Requested-With": "XMLHttpRequest"
      },
      body: (0, _v26.serialize)({
        team_member_id: _v2,
        token: _v1
      })
    });
  };
  _v0.s(["useManageTeamActions", 0, (_v0, _v1, _v2) => {
    let _v3,
      _v4 = (_v3 = (0, _v25.useViewer)(), (0, _v2.useCallback)(({
        targetUserId: _v0,
        targetUserName: _v1,
        targetUserRole: _v2,
        excludeSso: _v3
      }) => {
        let _v4 = (0, _v19.buildActionBpContext)({
            action_type: "click",
            feature: null
          }),
          _v5 = (0, _v20.buildProductAnalyticsBpContext)({
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
          _v6 = (0, _v22.buildWebBpContext)({
            page_name: "team_management_page",
            path: window.location.pathname
          }),
          _v7 = (0, _v21.buildTeamBpContextFromTeamUser)(_v3?.teamUser),
          _v8 = (0, _v23.buildTargetTeamBpContext)({
            is_team_member: !0,
            team_owner_id: _v3?.teamUser?.ownerId || null,
            team_subscription_type: _v3?.teamUser?.accountType || null,
            team_role: _v2?.toLowerCase(),
            team_id: _v3?.teamUser?.teamId || null,
            team_size: _v3?.teamUser?.currentTeamSize || null,
            resource_permission_level: null,
            joined_team_at: null
          });
        (0, _v24.sendBpEventWithContexts)("vimeo.sso_enablement", {
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
          type: _v10.ManageTeamActionTypes.FetchTeamInfoInit,
          payload: {
            shouldShowLoading: _v0
          }
        });
        let _v1 = await (0, _v26.requestTeamsInfo)(_v2);
        _v1({
          type: _v10.ManageTeamActionTypes.FetchTeamInfoComplete,
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
          type: _v10.ManageTeamActionTypes.FetchTeamMembersInit,
          payload: !0
        }), _v6.current.abort(), _v6.current = new AbortController();
        let _v1 = await (0, _v26.requestTeamMembers)(_v0 || _v2, _v0.teamInfo.owner.uri, _v0.currentPage, _v0.searchQuery, _v0.sort.type, _v0.sort.direction, _v0.rolesFilter, _v0.statusesFilter, _v0.accessFilter, _v6.current.signal);
        _v1({
          type: _v10.ManageTeamActionTypes.FetchTeamMembersComplete,
          payload: {
            teamMembers: _v1
          }
        });
      },
      _v8 = async _v0 => {
        if (_v1({
          type: _v10.ManageTeamActionTypes.FetchTeamMemberInit,
          payload: {
            teamMemberUri: _v0
          }
        }), !_v2) throw Error("no viewer");
        try {
          (await _v27(_v0, _v2?.xsrft)).ok ? _v9(_v11.T.ReminderSent) : _v9(_v11.T.PleaseTryAgain);
        } catch (_v0) {
          _v18(!0);
        }
        await _v10(_v0);
      },
      _v9 = (0, _v2.useCallback)((_v0, _v1) => {
        _v1({
          type: _v10.ManageTeamActionTypes.NotificationForOwnerAdmin,
          payload: {
            content: _v0,
            status: _v1
          }
        }), setTimeout(() => _v1({
          type: _v10.ManageTeamActionTypes.NotificationForOwnerAdmin,
          payload: {
            content: null,
            status: null
          }
        }), 0);
      }, [_v1]),
      _v10 = async _v0 => {
        if (!_v2) throw Error("no viewer");
        let _v1 = await (0, _v26.requestTeamMember)(_v2, _v0);
        _v1({
          type: _v10.ManageTeamActionTypes.FetchTeamMemberComplete,
          payload: {
            teamMember: _v1
          }
        });
      },
      _v11 = _v0 => {
        _v1({
          type: _v10.ManageTeamActionTypes.UpdateSeatCount,
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
          _v3 = await (0, _v15.updateTeamInfo)(_v2, _v0.teamInfo.teamData.id, _v1);
        _v1({
          type: _v10.ManageTeamActionTypes.UpdateTeamBrandings,
          payload: {
            teamData: _v3
          }
        });
      },
      _v13 = (0, _v2.useCallback)(async (_v0, _v1) => {
        if (_v2) {
          _v1({
            type: _v10.ManageTeamActionTypes.UpdateTeamMemberInit,
            payload: {
              updatedMemberUri: _v0.uri
            }
          });
          try {
            let _v0 = await (0, _v26.requestUpdateTeamMember)({
              viewer: _v2,
              teamMemberUri: _v0.uri,
              excludeSso: _v1
            });
            _v1({
              type: _v10.ManageTeamActionTypes.UpdateTeamMemberComplete,
              payload: {
                updatedMember: _v0 || _v0,
                viewer: _v2
              }
            }), _v4({
              targetUserId: _v0.user.id,
              targetUserName: _v0.user.name,
              targetUserRole: _v0.role || null,
              excludeSso: _v1
            }), _v9(_v11.T.SSOUpdatedMessage(_v0.user.name, _v1), "success"), _v0.accessFilter.find(_v0 => _v0.applied && [_v10.MemberAccess.LogsInWithSso, _v10.MemberAccess.LogsInWithEmailAndPassword].includes(_v0.value)) && _v1({
              type: _v10.ManageTeamActionTypes.FetchTeamMembersInit,
              payload: !0
            });
          } catch (_v0) {
            _v1({
              type: _v10.ManageTeamActionTypes.UpdateTeamMemberCancel,
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
            type: _v10.ManageTeamActionTypes.UpdateTeamMemberInit,
            payload: {
              updatedMemberUri: _v1.uri
            }
          });
          try {
            let _v0 = await (0, _v26.requestUpdateTeamMember)({
              viewer: _v2,
              teamMemberUri: _v1.uri,
              newRole: _v0,
              updatedRegion: _v2,
              policies: _v3
            });
            _v1({
              type: _v10.ManageTeamActionTypes.UpdateTeamMemberComplete,
              payload: {
                updatedMember: _v0 || _v1,
                viewer: _v2
              }
            }), _v0.accessFilter.find(_v0 => _v0.applied && _v0.value === _v10.MemberAccess.CanViewVideosInChina) && _v1({
              type: _v10.ManageTeamActionTypes.FetchTeamMembersInit,
              payload: !0
            });
          } catch (_v0) {
            throw _v1({
              type: _v10.ManageTeamActionTypes.UpdateTeamMemberCancel,
              payload: {
                teamMember: _v1.uri
              }
            }), console.error("unable to update team member role"), _v0;
          }
        }
      }, [_v1, _v0.accessFilter, _v2]),
      _v15 = (0, _v2.useCallback)(async _v0 => {
        let _v1 = _v0.teamMembers.find(_v0 => _v0.uri === _v0);
        if (_v2 && _v2.user && _v1 && _v1.permissionLevel !== _v10.TeamRole.Owner && (_v1.status !== _v10.MemberStatus.Accepted || !_v1.user || _v1.user.uri !== _v2.user.uri)) {
          _v1({
            type: _v10.ManageTeamActionTypes.UpdateTeamMemberInit,
            payload: !0
          });
          try {
            await (0, _v26.requestDeleteTeamMember)(_v2, _v0), _v9(_v11.T.Done), _v1({
              type: _v10.ManageTeamActionTypes.DeleteTeamMemberComplete,
              payload: {
                teamMemberUri: _v0
              }
            });
            let _v0 = await (0, _v26.requestTeamMembers)(_v2, _v0.teamInfo.owner.uri, _v0.currentPage, _v0.searchQuery, _v0.sort.type, _v0.sort.direction);
            _v1({
              type: _v10.ManageTeamActionTypes.FetchTeamMembersComplete,
              payload: {
                teamMembers: _v0
              }
            });
          } catch (_v0) {
            _v1({
              type: _v10.ManageTeamActionTypes.UpdateTeamMemberCancel,
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
          let _v0 = (await (0, _v26.requestSSOConnections)(_v2, _v0)).data.some(_v0 => _v0.isActive);
          _v1({
            type: _v10.ManageTeamActionTypes.UpdateIsSSOAvailable,
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
          _v1 = await (0, _v26.requestAlbums)(_v2, _v0.teamInfo.owner.uri, _v0);
        _v1({
          type: _v10.ManageTeamActionTypes.FetchTeamShowcaseComplete,
          payload: {
            albums: _v1,
            currentPage: _v0
          }
        });
      },
      _v18 = _v0 => {
        _v1({
          type: _v10.ManageTeamActionTypes.UpdateHasError,
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
            type: _v10.ManageTeamActionTypes.TeamGroupsLoading,
            payload: {
              isLoading: !0,
              isSearching: !!_v2.length
            }
          });
          let _v6 = await (0, _v26.fetchTeamGroups)(_v2, _v0, _v5);
          _v1({
            type: _v10.ManageTeamActionTypes.FetchTeamGroupsComplete,
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
            type: _v10.ManageTeamActionTypes.TeamGroupsLoading,
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
        let _v1 = await (0, _v26.requestMembershipInfo)(_v2, _v0);
        _v1({
          type: _v10.ManageTeamActionTypes.FetchMembershipInfo,
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
        let _v1 = await (0, _v26.requestPaymentMethods)(_v2, _v0);
        _v1({
          type: _v10.ManageTeamActionTypes.FetchPaymentMethods,
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
          _v2 ? await _v18({
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
          }) : await (0, _v26.updatePaymentMethodRequest)(_v2, _v0), _v1({
            type: _v10.ManageTeamActionTypes.UpdatePaymentMethod,
            payload: {
              id: parseInt(_v0)
            }
          }), _v1 && _v23({
            canShow: !0,
            type: "positive",
            text: _v11.T.PaymentMethodUpdated
          });
        } catch (_v0) {
          if (_v1 && _v23({
            canShow: !0,
            type: "negative",
            text: _v11.T.PaymentMethodNotUpdated
          }), !_v1) throw _v0;
        }
      },
      _v23 = _v0 => {
        _v1({
          type: _v10.ManageTeamActionTypes.ShowNotice,
          payload: {
            notice: _v0
          }
        });
      },
      _v24 = (0, _v2.useCallback)(_v0 => {
        _v1({
          type: _v10.ManageTeamActionTypes.ShowBillingPageLinkoutNotice,
          payload: {
            notice: _v0
          }
        });
      }, [_v1]),
      _v25 = _v0 => {
        _v1({
          type: _v10.ManageTeamActionTypes.UpdateInvitesRemaining,
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
          type: _v10.ManageTeamActionTypes.UpdatePaymentMethods,
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
          type: _v10.ManageTeamActionTypes.UpdateSearchQuery,
          payload: {
            searchQuery: _v0
          }
        });
      },
      updateGroupMembersSearchQuery: _v0 => {
        _v1({
          type: _v10.ManageTeamActionTypes.UpdateGroupMembersSearchQuery,
          payload: {
            searchQuery: _v0
          }
        });
      },
      updateSort: _v0 => {
        _v1({
          type: _v10.ManageTeamActionTypes.UpdateSort,
          payload: {
            sort: _v0
          }
        });
      },
      updateDirection: _v0 => {
        _v1({
          type: _v10.ManageTeamActionTypes.UpdateDirection,
          payload: {
            direction: _v0
          }
        });
      },
      updateRolesFilter: _v0 => {
        _v1({
          type: _v10.ManageTeamActionTypes.UpdateRolesFilter,
          payload: {
            rolesFilter: _v0
          }
        });
      },
      updateStatusesFilter: _v0 => {
        _v1({
          type: _v10.ManageTeamActionTypes.UpdateStatusesFilter,
          payload: {
            statusesFilter: _v0
          }
        });
      },
      updateAccessFilter: _v0 => {
        _v1({
          type: _v10.ManageTeamActionTypes.UpdateAccessFilter,
          payload: {
            accessFilter: _v0
          }
        });
      },
      updateCurrentPage: _v0 => {
        _v1({
          type: _v10.ManageTeamActionTypes.UpdateCurrentPage,
          payload: {
            currentPage: _v0
          }
        });
      },
      updateTeamMemberPermission: _v14,
      updateTeamMemberRoleState: (_v0, _v1) => {
        _v1({
          type: _v10.ManageTeamActionTypes.UpdateTeamMemberComplete,
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
          type: _v10.ManageTeamActionTypes.UpdateHasMembershipInfoLoadFailed,
          payload: {
            hasMembershipInfoLoadFailed: _v0
          }
        });
      },
      setGroupUsersError: _v0 => {
        _v1({
          type: _v10.ManageTeamActionTypes.UpdateGroupUsersError,
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
          type: _v10.ManageTeamActionTypes.UpdateTeamCapabilities,
          payload: {
            capabilities: _v0
          }
        });
      },
      clearTeamGroupUsers: () => {
        _v1({
          type: _v10.ManageTeamActionTypes.ClearTeamGroupUsers,
          payload: null
        });
      },
      updateModalToDisplay: _v0 => {
        _v1({
          type: _v10.ManageTeamActionTypes.UpdateModalToDisplay,
          payload: {
            modalToDisplay: _v0
          }
        });
      },
      updateTeamInfoSeatDetails: _v0 => {
        _v1({
          type: _v10.ManageTeamActionTypes.UpdateTeamSeatDetails,
          payload: {
            seatDetails: _v0
          }
        });
      },
      updateTeamGroupsLoadingSearching: (_v0, _v1) => {
        _v1({
          type: _v10.ManageTeamActionTypes.TeamGroupsLoading,
          payload: {
            isLoading: _v0,
            isSearching: _v1
          }
        });
      },
      updateTeamGroups: (_v0, _v1, _v2, _v3, _v4) => {
        _v1({
          type: _v10.ManageTeamActionTypes.FetchTeamGroupsComplete,
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
          type: _v10.ManageTeamActionTypes.UpdateTeamGroupSort,
          payload: _v0
        });
      },
      updateTeamInfoTeamMembersCount: _v0 => {
        _v1({
          type: _v10.ManageTeamActionTypes.UpdateTeamMembersCount,
          payload: {
            teamMembersCount: _v0
          }
        });
      },
      updateMembershipInfo: _v0 => {
        _v1({
          type: _v10.ManageTeamActionTypes.UpdateMembershipInfo,
          payload: {
            membershipInfo: _v0
          }
        });
      },
      updateUploadQuota: _v0 => {
        _v1({
          type: _v10.ManageTeamActionTypes.UpdateUploadQuota,
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
          type: _v10.ManageTeamActionTypes.UpdatePlanQuota,
          payload: {
            cap: _v1,
            periodic: _v2
          }
        });
      },
      updatePlanData: _v0 => {
        _v1({
          type: _v10.ManageTeamActionTypes.UpdatePlanData,
          payload: _v0
        });
      },
      updateSeatCount: _v11,
      removeUnassignedSeats: _v0 => {
        _v1({
          type: _v10.ManageTeamActionTypes.RemoveUnassignedSeats,
          payload: {
            seatCount: _v0
          }
        }), _v11(0);
      },
      updateTeamsPageNotice: _v0 => {
        _v1({
          type: _v10.ManageTeamActionTypes.UpdateTeamsPageNotice,
          payload: {
            notice: _v0
          }
        });
      },
      updateBillingPageNotice: _v0 => {
        _v1({
          type: _v10.ManageTeamActionTypes.UpdateBillingPageNotice,
          payload: {
            notice: _v0
          }
        });
      },
      updateIsMembershipLoading: _v0 => {
        _v1({
          type: _v10.ManageTeamActionTypes.UpdateIsMembershipLoading,
          payload: {
            isMembershipInfoLoading: _v0
          }
        });
      },
      updateIsRemoveSeatsConfirmation: _v0 => {
        _v1({
          type: _v10.ManageTeamActionTypes.UpdateIsRemoveSeatsConfirmation,
          payload: {
            isRemoveSeatsConfirmation: _v0
          }
        });
      },
      updateIsOperationOngoing: _v0 => {
        _v1({
          type: _v10.ManageTeamActionTypes.UpdateIsOperationOngoing,
          payload: {
            isOperationOngoing: _v0
          }
        });
      },
      updateIsBillingSettingChangeOngoing: _v0 => {
        _v1({
          type: _v10.ManageTeamActionTypes.UpdateIsBillingSettingChangeOngoing,
          payload: {
            isBillingSettingChangeOngoing: _v0
          }
        });
      },
      updateIsInviteModalOpen: _v0 => {
        _v1({
          type: _v10.ManageTeamActionTypes.UpdateIsInviteModalOpen,
          payload: {
            isInviteModalOpen: _v0
          }
        });
      },
      updateIsRoleUpgradeRequestsLoaded: _v0 => {
        _v1({
          type: _v10.ManageTeamActionTypes.UpdateIsRoleUpgradeRequestsLoaded,
          payload: {
            isRoleUpgradeRequestsLoaded: _v0
          }
        });
      },
      updateRoleUpgradeRequests: _v0 => {
        _v1({
          type: _v10.ManageTeamActionTypes.UpdateRoleUpgradeRequests,
          payload: {
            roleUpgradeRequests: _v0
          }
        });
      },
      updateSelectedTeamMembers: _v0 => {
        _v1({
          type: _v10.ManageTeamActionTypes.UpdateSelectedTeamMembers,
          payload: {
            selectedTeamMembers: _v0
          }
        });
      },
      updateInvitesRemaining: _v25,
      updateCancelConfirmationInfo: _v0 => {
        _v1({
          type: _v10.ManageTeamActionTypes.UpdateCancelConfirmationInfo,
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