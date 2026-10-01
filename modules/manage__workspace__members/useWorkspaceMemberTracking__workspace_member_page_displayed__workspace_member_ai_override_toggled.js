{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useWorkspaceMemberTracking", 0, () => {
    let _v0 = (0, _v2.usePico)(),
      _v1 = (0, _v1.useCallback)(_v0 => {
        _v0.track("workspace_member_page_displayed", {
          tab: _v0.tab,
          team_member_role: _v0.teamMemberRole
        });
      }, [_v0]),
      _v2 = (0, _v1.useCallback)(_v0 => {
        _v0.track("workspace_member_ai_override_toggled", {
          enabled: _v0.enabled
        });
      }, [_v0]),
      _v3 = (0, _v1.useCallback)(_v0 => {
        _v0.track("workspace_member_ai_feature_toggled", {
          feature: _v0.feature,
          enabled: _v0.enabled
        });
      }, [_v0]),
      _v4 = (0, _v1.useCallback)(_v0 => {
        _v0.track("workspace_member_ai_credit_limit_modal_opened", {
          current_limit: _v0.currentLimit
        });
      }, [_v0]);
    return {
      trackPageDisplayed: _v1,
      trackAiOverrideToggled: _v2,
      trackAiFeatureToggled: _v3,
      trackAiCreditLimitModalOpened: _v4,
      trackAiCreditLimitSaved: (0, _v1.useCallback)(_v0 => {
        _v0.track("workspace_member_ai_credit_limit_saved", {
          limit: _v0.limit
        });
      }, [_v0]),
      trackBulkManageClicked: (0, _v1.useCallback)(() => {
        _v0.track("workspace_member_bulk_manage_clicked", {});
      }, [_v0])
    };
  }]);
}