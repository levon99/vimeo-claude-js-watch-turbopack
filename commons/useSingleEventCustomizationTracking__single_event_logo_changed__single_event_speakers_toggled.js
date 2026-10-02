{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useSingleEventCustomizationTracking", 0, () => {
    let _v0 = (0, _v2.usePico)(),
      _v1 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("single_event_logo_changed", {
          single_event_logo_type: _v0.logoType
        });
      }, [_v0]),
      _v2 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("single_event_speakers_toggled", {
          single_event_new_status: _v0.newStatus
        });
      }, [_v0]),
      _v3 = (0, _v1.useCallback)(() => {
        _v0?.track("single_event_manage_speakers_clicked", {});
      }, [_v0]),
      _v4 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("single_event_speaker_saved", {
          single_event_speaker_action: _v0.speakerAction,
          single_event_speaker_section: _v0.speakerSection
        });
      }, [_v0]),
      _v5 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("single_event_speaker_visibility_changed", {
          single_event_new_status: _v0.newStatus
        });
      }, [_v0]),
      _v6 = (0, _v1.useCallback)(() => {
        _v0?.track("single_event_speaker_deleted", {});
      }, [_v0]);
    return {
      trackSingleEventCustomizationLogoChanged: _v1,
      trackSingleEventCustomizationSpeakersToggled: _v2,
      trackSingleEventCustomizationManageSpeakersClicked: _v3,
      trackSingleEventCustomizationSpeakerSaved: _v4,
      trackSingleEventCustomizationSpeakerVisibilityChanged: _v5,
      trackSingleEventCustomizationSpeakerDeleted: _v6,
      trackSingleEventCustomizationPlayerSettingToggled: (0, _v1.useCallback)(_v0 => {
        _v0?.track("single_event_player_setting_toggled", {
          single_event_player_setting: _v0.playerSetting,
          single_event_new_status: _v0.newStatus
        });
      }, [_v0]),
      trackSingleEventCustomizationSpeakersDisplayed: (0, _v1.useCallback)(_v0 => {
        _v0?.track("single_event_speakers_displayed", {
          live_event_id: _v0.liveEventId,
          single_event_speaker_count: _v0.speakerCount
        });
      }, [_v0])
    };
  }]);
}