{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useLiveStreamBroadcasterTracking", 0, () => {
    let _v0 = (0, _v2.usePico)(),
      _v1 = (0, _v1.useRef)([]);
    (0, _v1.useEffect)(() => {
      if (null !== _v0) {
        for (let _v0 of _v1.current) _v0.track("live_stream_destination_action_clicked", {
          live_stream_destination: _v0.liveStreamDestination,
          live_stream_destination_action: _v0.liveStreamDestinationAction
        });
        _v1.current = [];
      }
    }, [_v0]);
    let _v2 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("live_stream_broadcaster_displayed", {
          live_event_id: _v0.liveEventId ?? ""
        });
      }, [_v0]),
      _v3 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_stream_sidebar_panel_clicked", {
          live_stream_panel: _v0.liveStreamPanel
        });
      }, [_v0]),
      _v4 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_stream_speaker_invited", {
          live_stream_invite_method: _v0.liveStreamInviteMethod
        });
      }, [_v0]),
      _v5 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_stream_backstage_toggled", {
          live_stream_new_status: _v0.liveStreamNewStatus
        });
      }, [_v0]),
      _v6 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_stream_template_selected", {
          live_stream_template_type: _v0.liveStreamTemplateType
        });
      }, [_v0]),
      _v7 = (0, _v1.useCallback)(() => {
        _v0?.track("live_stream_scene_added", {});
      }, [_v0]),
      _v8 = (0, _v1.useCallback)(() => {
        _v0?.track("live_stream_layout_selected", {});
      }, [_v0]),
      _v9 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_stream_media_added", {
          live_stream_media_type: _v0.liveStreamMediaType
        });
      }, [_v0]),
      _v10 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_stream_lower_third_saved", {
          live_stream_has_image: _v0.liveStreamHasImage
        });
      }, [_v0]),
      _v11 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_stream_brand_logo_added", {
          live_stream_logo_source: _v0.liveStreamLogoSource
        });
      }, [_v0]),
      _v12 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_stream_brand_color_changed", {
          live_stream_color_type: _v0.liveStreamColorType
        });
      }, [_v0]),
      _v13 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_stream_settings_section_clicked", {
          live_stream_settings_section: _v0.liveStreamSettingsSection
        });
      }, [_v0]),
      _v14 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_stream_basics_changed", {
          live_stream_basics_field: _v0.liveStreamBasicsField
        });
      }, [_v0]),
      _v15 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_stream_basics_thumbnail_select_clicked", {
          live_stream_thumbnail_state: _v0.liveStreamThumbnailState
        });
      }, [_v0]),
      _v16 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_stream_privacy_changed", {
          live_stream_privacy_type: _v0.liveStreamPrivacyType,
          live_stream_privacy_value: _v0.liveStreamPrivacyValue
        });
      }, [_v0]),
      _v17 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_stream_schedule_configured", {
          live_stream_has_start_date: _v0.liveStreamHasStartDate,
          live_stream_has_end_date: _v0.liveStreamHasEndDate,
          live_stream_recurring_event: _v0.liveStreamRecurringEvent
        });
      }, [_v0]),
      _v18 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_stream_production_mode_changed", {
          live_stream_production_mode: _v0.liveStreamProductionMode
        });
      }, [_v0]),
      _v19 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_stream_latency_changed", {
          live_stream_latency: _v0.liveStreamLatency
        });
      }, [_v0]),
      _v20 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_stream_reactions_toggled", {
          live_stream_new_status: _v0.liveStreamNewStatus
        });
      }, [_v0]),
      _v21 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_stream_audience_speakers_toggled", {
          live_stream_new_status: _v0.liveStreamNewStatus
        });
      }, [_v0]),
      _v22 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_stream_closed_captions_toggled", {
          live_stream_new_status: _v0.liveStreamNewStatus
        });
      }, [_v0]),
      _v23 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_stream_custom_keyword_use", {
          live_stream_custom_keyword_count: _v0.liveStreamCustomKeywordCount
        });
      }, [_v0]),
      _v24 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_stream_registration_toggled", {
          live_stream_new_status: _v0.liveStreamNewStatus
        });
      }, [_v0]),
      _v25 = (0, _v1.useCallback)(_v0 => {
        if (null === _v0) {
          _v1.current.length < 32 && _v1.current.push(_v0);
          return;
        }
        _v0.track("live_stream_destination_action_clicked", {
          live_stream_destination: _v0.liveStreamDestination,
          live_stream_destination_action: _v0.liveStreamDestinationAction
        });
      }, [_v0]),
      _v26 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_stream_registration_section_clicked", {
          live_stream_registration_section: _v0.liveStreamRegistrationSection
        });
      }, [_v0]),
      _v27 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_stream_registration_form_tab_changed", {
          live_stream_form_tab: _v0.liveStreamFormTab
        });
      }, [_v0]),
      _v28 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_stream_registration_field_added", {
          live_stream_field_category: _v0.liveStreamFieldCategory,
          ...(void 0 !== _v0.registrationFieldType ? {
            registration_field_type: _v0.registrationFieldType
          } : {})
        });
      }, [_v0]),
      _v29 = (0, _v1.useCallback)(() => {
        _v0?.track("live_stream_registration_preset_changed", {});
      }, [_v0]),
      _v30 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_stream_registration_appearance_changed", {
          live_stream_appearance_setting: _v0.liveStreamAppearanceSetting
        });
      }, [_v0]),
      _v31 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_stream_registration_background_added", {
          live_stream_background_source: _v0.liveStreamBackgroundSource
        });
      }, [_v0]),
      _v32 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_stream_registration_preview_changed", {
          live_stream_preview_type: _v0.liveStreamPreviewType
        });
      }, [_v0]),
      _v33 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_stream_registration_email_toggled", {
          live_stream_email_type: _v0.liveStreamEmailType,
          live_stream_new_status: _v0.liveStreamNewStatus
        });
      }, [_v0]),
      _v34 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_stream_registration_email_from_changed", {
          live_stream_email_type: _v0.liveStreamEmailType
        });
      }, [_v0]),
      _v35 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_stream_registration_reminder_configured", {
          live_stream_reminder_action: _v0.liveStreamReminderAction,
          live_stream_reminder_offset_value: _v0.liveStreamReminderOffsetValue,
          live_stream_reminder_offset_unit: _v0.liveStreamReminderOffsetUnit,
          live_stream_reminder_offset_direction: _v0.liveStreamReminderOffsetDirection
        });
      }, [_v0]),
      _v36 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_stream_registrants_action_clicked", {
          live_stream_registrants_action: _v0.liveStreamRegistrantsAction
        });
      }, [_v0]),
      _v37 = (0, _v1.useCallback)(() => {
        _v0?.track("live_stream_qa_started", {});
      }, [_v0]),
      _v38 = (0, _v1.useCallback)(() => {
        _v0?.track("live_stream_qa_ended", {});
      }, [_v0]),
      _v39 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_stream_qa_overflow_action_clicked", {
          live_stream_qa_action: _v0.liveStreamQaAction
        });
      }, [_v0]),
      _v40 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_stream_qa_speaker_replies_toggled", {
          live_stream_new_status: _v0.liveStreamNewStatus
        });
      }, [_v0]),
      _v41 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_stream_poll_created", {
          live_stream_poll_option_count: _v0.liveStreamPollOptionCount
        });
      }, [_v0]),
      _v42 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_stream_chat_toggled", {
          live_stream_new_status: _v0.liveStreamNewStatus
        });
      }, [_v0]),
      _v43 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_stream_chat_tab_changed", {
          live_stream_chat_tab: _v0.liveStreamChatTab
        });
      }, [_v0]),
      _v44 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_stream_chat_overflow_action_clicked", {
          live_stream_chat_action: _v0.liveStreamChatAction
        });
      }, [_v0]),
      _v45 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_stream_top_bar_action_clicked", {
          live_stream_top_bar_action: _v0.liveStreamTopBarAction
        });
      }, [_v0]),
      _v46 = (0, _v1.useCallback)(() => {
        _v0?.track("live_stream_share_link_copied", {});
      }, [_v0]),
      _v47 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_stream_embed_configured", {
          live_stream_embed_type: _v0.liveStreamEmbedType,
          live_stream_embed_privacy: _v0.liveStreamEmbedPrivacy
        });
      }, [_v0]),
      _v48 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_stream_toolbar_action_clicked", {
          live_stream_toolbar_action: _v0.liveStreamToolbarAction
        });
      }, [_v0]),
      _v49 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_stream_effects_clicked", {
          live_stream_participant_role: _v0.liveStreamParticipantRole
        });
      }, [_v0]),
      _v50 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_stream_camera_background_changed", {
          live_stream_camera_background_type: _v0.liveStreamCameraBackgroundType,
          live_stream_participant_role: _v0.liveStreamParticipantRole
        });
      }, [_v0]),
      _v51 = (0, _v1.useCallback)(() => {
        _v0?.track("live_stream_go_live_clicked", {});
      }, [_v0]),
      _v52 = (0, _v1.useCallback)(() => {
        _v0?.track("live_stream_engagement_menu_opened", {});
      }, [_v0]),
      _v53 = (0, _v1.useCallback)(() => {
        _v0?.track("live_stream_google_slides_import_started", {});
      }, [_v0]),
      _v54 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_stream_google_slides_account_connected", {
          live_stream_google_slides_connection_type: _v0.liveStreamGoogleSlidesConnectionType
        });
      }, [_v0]),
      _v55 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_stream_google_slides_import_completed", {
          live_stream_google_slides_import_method: _v0.liveStreamGoogleSlidesImportMethod,
          live_stream_google_slides_file_size_bytes: _v0.liveStreamGoogleSlidesFileSizeBytes,
          live_stream_google_slides_duration_ms: _v0.liveStreamGoogleSlidesDurationMs
        });
      }, [_v0]),
      _v56 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_stream_google_slides_import_failed", {
          live_stream_google_slides_error_reason: _v0.liveStreamGoogleSlidesErrorReason,
          live_stream_google_slides_page_count: _v0.liveStreamGoogleSlidesPageCount ?? null,
          live_stream_google_slides_duration_ms: _v0.liveStreamGoogleSlidesDurationMs ?? null
        });
      }, [_v0]),
      _v57 = (0, _v1.useCallback)(() => {
        _v0?.track("live_stream_google_slides_account_disconnected", {});
      }, [_v0]),
      _v58 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_stream_camera_position_preset_selected", {
          live_stream_camera_position_corner: _v0.liveStreamCameraPositionCorner
        });
      }, [_v0]);
    return {
      trackLiveStreamBroadcasterDisplayed: _v2,
      trackLiveStreamSidebarPanelClicked: _v3,
      trackLiveStreamSpeakerInvited: _v4,
      trackLiveStreamBackstageToggled: _v5,
      trackLiveStreamTemplateSelected: _v6,
      trackLiveStreamSceneAdded: _v7,
      trackLiveStreamLayoutSelected: _v8,
      trackLiveStreamMediaAdded: _v9,
      trackLiveStreamLowerThirdSaved: _v10,
      trackLiveStreamBrandLogoAdded: _v11,
      trackLiveStreamBrandColorChanged: _v12,
      trackLiveStreamSettingsSectionClicked: _v13,
      trackLiveStreamBasicsChanged: _v14,
      trackLiveStreamBasicsThumbnailSelectClicked: _v15,
      trackLiveStreamPrivacyChanged: _v16,
      trackLiveStreamScheduleConfigured: _v17,
      trackLiveStreamProductionModeChanged: _v18,
      trackLiveStreamLatencyChanged: _v19,
      trackLiveStreamReactionsToggled: _v20,
      trackLiveStreamAudienceSpeakersToggled: _v21,
      trackLiveStreamClosedCaptionsToggled: _v22,
      trackLiveStreamCustomKeywordUse: _v23,
      trackLiveStreamRegistrationToggled: _v24,
      trackLiveStreamDestinationActionClicked: _v25,
      trackLiveStreamRegistrationSectionClicked: _v26,
      trackLiveStreamRegistrationFormTabChanged: _v27,
      trackLiveStreamRegistrationFieldAdded: _v28,
      trackLiveStreamRegistrationPresetChanged: _v29,
      trackLiveStreamRegistrationAppearanceChanged: _v30,
      trackLiveStreamRegistrationBackgroundAdded: _v31,
      trackLiveStreamRegistrationPreviewChanged: _v32,
      trackLiveStreamRegistrationEmailToggled: _v33,
      trackLiveStreamRegistrationEmailFromChanged: _v34,
      trackLiveStreamRegistrationReminderConfigured: _v35,
      trackLiveStreamRegistrantsActionClicked: _v36,
      trackLiveStreamQaStarted: _v37,
      trackLiveStreamQaEnded: _v38,
      trackLiveStreamQaOverflowActionClicked: _v39,
      trackLiveStreamQaSpeakerRepliesToggled: _v40,
      trackLiveStreamPollCreated: _v41,
      trackLiveStreamChatToggled: _v42,
      trackLiveStreamChatTabChanged: _v43,
      trackLiveStreamChatOverflowActionClicked: _v44,
      trackLiveStreamTopBarActionClicked: _v45,
      trackLiveStreamShareLinkCopied: _v46,
      trackLiveStreamEmbedConfigured: _v47,
      trackLiveStreamToolbarActionClicked: _v48,
      trackLiveStreamEffectsClicked: _v49,
      trackLiveStreamCameraBackgroundChanged: _v50,
      trackLiveStreamGoLiveClicked: _v51,
      trackLiveStreamEngagementMenuOpened: _v52,
      trackLiveStreamGoogleSlidesImportStarted: _v53,
      trackLiveStreamGoogleSlidesAccountConnected: _v54,
      trackLiveStreamGoogleSlidesImportCompleted: _v55,
      trackLiveStreamGoogleSlidesImportFailed: _v56,
      trackLiveStreamGoogleSlidesAccountDisconnected: _v57,
      trackLiveStreamCameraPositionPresetSelected: _v58,
      trackLiveStreamCameraPositionDragged: (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_stream_camera_position_dragged", {
          live_stream_camera_position_left: _v0.liveStreamCameraPositionLeft,
          live_stream_camera_position_top: _v0.liveStreamCameraPositionTop,
          live_stream_camera_position_width: _v0.liveStreamCameraPositionWidth,
          live_stream_camera_position_height: _v0.liveStreamCameraPositionHeight
        });
      }, [_v0]),
      trackLiveStreamCameraPositionResized: (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_stream_camera_position_resized", {
          live_stream_camera_position_left: _v0.liveStreamCameraPositionLeft,
          live_stream_camera_position_top: _v0.liveStreamCameraPositionTop,
          live_stream_camera_position_width: _v0.liveStreamCameraPositionWidth,
          live_stream_camera_position_height: _v0.liveStreamCameraPositionHeight
        });
      }, [_v0])
    };
  }]);
}