{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useContentSpaceTracking", 0, () => {
    let _v0 = (0, _v2.usePico)(),
      _v1 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("start_team_flow_opened", {
        entry_point: _v0.entryPoint
      }), !0), [_v0]),
      _v2 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("start_team_paywall_shown", {
        entry_point: _v0.entryPoint
      }), !0), [_v0]),
      _v3 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("start_team_details_submitted", {
        entry_point: _v0.entryPoint,
        has_custom_logo: _v0.hasCustomLogo,
        accent_color_type: _v0.accentColorType
      }), !0), [_v0]),
      _v4 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("create_team_library_displayed", {
        entry_point: _v0.entryPoint
      }), !0), [_v0]),
      _v5 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("create_team_library_confirmed", {
        entry_point: _v0.entryPoint
      }), !0), [_v0]),
      _v6 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("create_team_library_succeeded", {
        entry_point: _v0.entryPoint,
        migration_enqueued: _v0.migrationEnqueued
      }), !0), [_v0]),
      _v7 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("create_team_library_failed", {
        entry_point: _v0.entryPoint,
        error_source: _v0.errorSource
      }), !0), [_v0]),
      _v8 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("start_team_flow_abandoned", {
        entry_point: _v0.entryPoint,
        step: _v0.step
      }), !0), [_v0]),
      _v9 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("team_library_migration_widget_displayed", {
        phase: _v0.phase
      }), !0), [_v0]),
      _v10 = (0, _v1.useCallback)(() => null !== _v0 && (_v0.track("team_library_migration_run_in_background_clicked", {}), !0), [_v0]),
      _v11 = (0, _v1.useCallback)(() => null !== _v0 && (_v0.track("team_library_migration_open_team_library_clicked", {}), !0), [_v0]),
      _v12 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("team_library_migration_widget_dismissed", {
        phase: _v0.phase
      }), !0), [_v0]),
      _v13 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("merge_libraries_clicked", {
        surface: _v0.surface
      }), !0), [_v0]),
      _v14 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("merge_libraries_confirmed", {
        surface: _v0.surface
      }), !0), [_v0]),
      _v15 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("merge_libraries_succeeded", {
        surface: _v0.surface
      }), !0), [_v0]),
      _v16 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("merge_libraries_failed", {
        surface: _v0.surface
      }), !0), [_v0]),
      _v17 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("merge_libraries_dismissed", {
        surface: _v0.surface
      }), !0), [_v0]),
      _v18 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("back_on_your_own_displayed", {
        trigger: _v0.trigger
      }), !0), [_v0]),
      _v19 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("back_on_your_own_confirmed", {
        choice: _v0.choice
      }), !0), [_v0]),
      _v20 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("library_becoming_one_announcement_displayed", {
        merge_date: _v0.mergeDate ?? null
      }), !0), [_v0]),
      _v21 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("library_becoming_one_announcement_cta_clicked", {
        cta: _v0.cta
      }), !0), [_v0]),
      _v22 = (0, _v1.useCallback)(() => null !== _v0 && (_v0.track("library_becoming_one_announcement_dismissed", {}), !0), [_v0]),
      _v23 = (0, _v1.useCallback)(() => null !== _v0 && (_v0.track("library_now_one_announcement_displayed", {}), !0), [_v0]),
      _v24 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("library_now_one_announcement_cta_clicked", {
        cta: _v0.cta
      }), !0), [_v0]),
      _v25 = (0, _v1.useCallback)(() => null !== _v0 && (_v0.track("library_now_one_announcement_dismissed", {}), !0), [_v0]),
      _v26 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("team_members_preview_opened", {
        team_started: _v0.teamStarted
      }), !0), [_v0]),
      _v27 = (0, _v1.useCallback)(() => null !== _v0 && (_v0.track("team_members_manage_clicked", {}), !0), [_v0]),
      _v28 = (0, _v1.useCallback)(() => null !== _v0 && (_v0.track("team_members_invite_clicked", {}), !0), [_v0]),
      _v29 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("merge_libraries_help_clicked", {
        surface: _v0.surface
      }), !0), [_v0]);
    return {
      trackStartTeamFlowOpened: _v1,
      trackStartTeamPaywallShown: _v2,
      trackStartTeamDetailsSubmitted: _v3,
      trackCreateTeamLibraryDisplayed: _v4,
      trackCreateTeamLibraryConfirmed: _v5,
      trackCreateTeamLibrarySucceeded: _v6,
      trackCreateTeamLibraryFailed: _v7,
      trackStartTeamFlowAbandoned: _v8,
      trackTeamLibraryMigrationWidgetDisplayed: _v9,
      trackTeamLibraryMigrationRunInBackgroundClicked: _v10,
      trackTeamLibraryMigrationOpenTeamLibraryClicked: _v11,
      trackTeamLibraryMigrationWidgetDismissed: _v12,
      trackMergeLibrariesClicked: _v13,
      trackMergeLibrariesConfirmed: _v14,
      trackMergeLibrariesSucceeded: _v15,
      trackMergeLibrariesFailed: _v16,
      trackMergeLibrariesDismissed: _v17,
      trackBackOnYourOwnDisplayed: _v18,
      trackBackOnYourOwnConfirmed: _v19,
      trackLibraryBecomingOneAnnouncementDisplayed: _v20,
      trackLibraryBecomingOneAnnouncementCtaClicked: _v21,
      trackLibraryBecomingOneAnnouncementDismissed: _v22,
      trackLibraryNowOneAnnouncementDisplayed: _v23,
      trackLibraryNowOneAnnouncementCtaClicked: _v24,
      trackLibraryNowOneAnnouncementDismissed: _v25,
      trackTeamMembersPreviewOpened: _v26,
      trackTeamMembersManageClicked: _v27,
      trackTeamMembersInviteClicked: _v28,
      trackMergeLibrariesHelpClicked: _v29,
      trackCreateTeamLibraryHelpClicked: (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("create_team_library_help_clicked", {
        entry_point: _v0.entryPoint
      }), !0), [_v0]),
      trackBackOnYourOwnHelpClicked: (0, _v1.useCallback)(() => null !== _v0 && (_v0.track("back_on_your_own_help_clicked", {}), !0), [_v0])
    };
  }]);
}