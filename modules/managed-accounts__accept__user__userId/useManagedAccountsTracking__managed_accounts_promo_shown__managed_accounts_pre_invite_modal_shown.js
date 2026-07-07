{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useManagedAccountsTracking", 0, () => {
    let _v0 = (0, _v2.usePico)(),
      _v1 = (0, _v1.useCallback)(({
        source: _v0
      }) => {
        _v0.track("managed_accounts_promo_shown", {
          source: _v0
        });
      }, [_v0]),
      _v2 = (0, _v1.useCallback)(({
        ctaSource: _v0
      }) => {
        _v0.track("managed_accounts_pre_invite_modal_shown", {
          cta_source: _v0
        });
      }, [_v0]),
      _v3 = (0, _v1.useCallback)(({
        ctaSource: _v0
      }) => {
        _v0.track("managed_accounts_invite_modal_shown", {
          cta_source: _v0
        });
      }, [_v0]),
      _v4 = (0, _v1.useCallback)(() => {
        _v0.track("managed_accounts_invite_email_sent", {});
      }, [_v0]),
      _v5 = (0, _v1.useCallback)(() => {
        _v0.track("managed_accounts_invite_link_copied", {});
      }, [_v0]),
      _v6 = (0, _v1.useCallback)(({
        invitingUserId: _v0,
        attribution: _v1
      }) => {
        _v0.track("managed_accounts_accept_page_opened", {
          inviting_user_id: _v0,
          attribution: _v1
        });
      }, [_v0]),
      _v7 = (0, _v1.useCallback)(({
        modalType: _v0,
        invitingUserId: _v1
      }) => {
        _v0.track("managed_accounts_accept_modal_shown", {
          modal_type: _v0,
          inviting_user_id: _v1
        });
      }, [_v0]),
      _v8 = (0, _v1.useCallback)(({
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
      trackFlowCompleted: (0, _v1.useCallback)(({
        invitingUserId: _v0
      }) => {
        _v0.track("managed_accounts_flow_completed", {
          inviting_user_id: _v0
        });
      }, [_v0]),
      trackAcceptFailed: (0, _v1.useCallback)(({
        invitingUserId: _v0,
        reason: _v1
      }) => {
        _v0.track("managed_accounts_accept_failed", {
          inviting_user_id: _v0,
          reason: _v1
        });
      }, [_v0])
    };
  }]);
}