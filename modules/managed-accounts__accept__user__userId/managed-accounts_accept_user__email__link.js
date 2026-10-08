{
  "use strict";

  let _v1 = "/managed-accounts/accept/user",
    _v2 = ["email", "link"];
  _v0.s(["MANAGED_ACCOUNTS_ACCEPT_BASE_PATH", 0, _v1, "MANAGED_ACCOUNTS_SOURCES", 0, _v2, "getManagedAccountsAcceptPath", 0, function (_v0) {
    return `${_v1}/${_v0}`;
  }, "normalizeManagedAccountsSource", 0, function (_v0) {
    return "string" == typeof _v0 && _v2.includes(_v0) ? _v0 : null;
  }], 0);
  var _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["useAgencyIdentity", 0, function (_v0, _v1 = "an") {
    let {
        data: _v2,
        isLoading: _v3,
        error: _v4
      } = (0, _v3.useGetUser)(() => null != _v0 && _v0 > 0 ? {
        where: {
          userId: _v0
        },
        select: ["name", "pictures"]
      } : null),
      _v5 = _v2?.name,
      _v6 = !!_v5 && /^user\d+$/.test(_v5),
      _v7 = "an" === _v1 ? (0, _v4.translate)({
        singular: "An agency",
        dictionary: {
          es: {
            singular: "Una agencia"
          },
          "de-DE": {
            singular: "Eine Agentur"
          },
          "fr-FR": {
            singular: "Une agence"
          },
          "ja-JP": {
            singular: "代理店"
          },
          "ko-KR": {
            singular: "대행사"
          },
          "pt-BR": {
            singular: "Uma agência"
          },
          "zh-CN": {
            singular: "一家代理机构"
          }
        }
      }) : (0, _v4.translate)({
        singular: "The agency",
        dictionary: {
          es: {
            singular: "La agencia"
          },
          "de-DE": {
            singular: "Die Agentur"
          },
          "fr-FR": {
            singular: "L'agence"
          },
          "ja-JP": {
            singular: "その代理店"
          },
          "ko-KR": {
            singular: "해당 대행사"
          },
          "pt-BR": {
            singular: "A agência"
          },
          "zh-CN": {
            singular: "该代理机构"
          }
        }
      }),
      _v8 = _v5 ? _v6 ? _v5.charAt(0).toUpperCase() + _v5.slice(1) : _v5 : _v7;
    return {
      resolvedName: _v5,
      displayName: _v8,
      avatarSrc: _v2?.pictures?.baseLink ?? void 0,
      isLoading: _v3,
      isError: !!_v4
    };
  }], 0);
  var _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  _v0.s(["useManagedAccountsTracking", 0, () => {
    let _v0 = (0, _v6.usePico)(),
      _v1 = (0, _v5.useCallback)(({
        source: _v0
      }) => {
        _v0.track("managed_accounts_promo_shown", {
          source: _v0
        });
      }, [_v0]),
      _v2 = (0, _v5.useCallback)(({
        ctaSource: _v0
      }) => {
        _v0.track("managed_accounts_pre_invite_modal_shown", {
          cta_source: _v0
        });
      }, [_v0]),
      _v3 = (0, _v5.useCallback)(({
        ctaSource: _v0
      }) => {
        _v0.track("managed_accounts_invite_modal_shown", {
          cta_source: _v0
        });
      }, [_v0]),
      _v4 = (0, _v5.useCallback)(() => {
        _v0.track("managed_accounts_invite_email_sent", {});
      }, [_v0]),
      _v5 = (0, _v5.useCallback)(() => {
        _v0.track("managed_accounts_invite_link_copied", {});
      }, [_v0]),
      _v6 = (0, _v5.useCallback)(({
        invitingUserId: _v0,
        attribution: _v1
      }) => {
        _v0.track("managed_accounts_accept_page_opened", {
          inviting_user_id: _v0,
          attribution: _v1
        });
      }, [_v0]),
      _v7 = (0, _v5.useCallback)(({
        modalType: _v0,
        invitingUserId: _v1
      }) => {
        _v0.track("managed_accounts_accept_modal_shown", {
          modal_type: _v0,
          inviting_user_id: _v1
        });
      }, [_v0]),
      _v8 = (0, _v5.useCallback)(({
        action: _v0,
        invitingUserId: _v1
      }) => _v0.track("managed_accounts_action_clicked", {
        action: _v0,
        inviting_user_id: _v1
      }), [_v0]);
    return {
      trackPromoShown: _v1,
      trackPreInviteModalShown: _v2,
      trackInviteModalShown: _v3,
      trackInviteEmailSent: _v4,
      trackInviteLinkCopied: _v5,
      trackAcceptPageOpened: _v6,
      trackAcceptModalShown: _v7,
      trackActionClicked: _v8,
      trackFlowCompleted: (0, _v5.useCallback)(({
        invitingUserId: _v0
      }) => {
        _v0.track("managed_accounts_flow_completed", {
          inviting_user_id: _v0
        });
      }, [_v0]),
      trackAcceptFailed: (0, _v5.useCallback)(({
        invitingUserId: _v0,
        reason: _v1
      }) => {
        _v0.track("managed_accounts_accept_failed", {
          inviting_user_id: _v0,
          reason: _v1
        });
      }, [_v0])
    };
  }], 0);
}