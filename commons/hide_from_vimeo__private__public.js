{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = {
    disable: "hide_from_vimeo",
    nobody: "private",
    anybody: "public"
  };
  _v0.s(["useRecordingTracking", 0, () => {
    let _v0 = (0, _v2.usePico)(),
      _v1 = (0, _v1.useCallback)(() => null !== _v0 && (_v0.track("recording_page_displayed", {}), !0), [_v0]),
      _v2 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("recording_started", {
        recording_has_camera: _v0.recordingHasCamera,
        recording_has_microphone: _v0.recordingHasMicrophone,
        recording_has_screen_share: _v0.recordingHasScreenShare,
        recording_has_teleprompter: _v0.recordingHasTeleprompter,
        recording_quality: _v0.recordingQuality.toLowerCase(),
        recording_camera_background: _v0.recordingCameraBackground
      }), !0), [_v0]),
      _v3 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("recording_completed", {
        recording_duration_seconds: _v0.recordingDurationSeconds
      }), !0), [_v0]),
      _v4 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("recording_in_progress_action_clicked", {
        recording_in_progress_action: _v0.recordingInProgressAction
      }), !0), [_v0]),
      _v5 = (0, _v1.useCallback)(_v0 => {
        if (null === _v0) return !1;
        let _v1 = _v0.recordingLayoutCategory.toLowerCase();
        return _v0.track("recording_layout_changed", {
          recording_layout_category: "both" === _v1 ? "camera_and_screen" : _v1,
          recording_new_layout: _v0.recordingNewLayout
        }), !0;
      }, [_v0]),
      _v6 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("recording_layout_flipped", {
        recording_flip_direction: _v0.recordingFlipDirection
      }), !0), [_v0]),
      _v7 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("recording_camera_changed", {
        recording_camera_source: _v0.recordingCameraSource
      }), !0), [_v0]),
      _v8 = (0, _v1.useCallback)(() => null !== _v0 && (_v0.track("recording_microphone_changed", {}), !0), [_v0]),
      _v9 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("recording_camera_background_changed", {
        recording_camera_background: _v0.recordingCameraBackground
      }), !0), [_v0]),
      _v10 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("recording_quality_changed", {
        recording_new_quality: _v0.recordingNewQuality.toLowerCase()
      }), !0), [_v0]),
      _v11 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("recording_pip_toggled", {
        recording_new_status: _v0.recordingNewStatus
      }), !0), [_v0]),
      _v12 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("recording_teleprompter_toggled", {
        recording_new_status: _v0.recordingNewStatus
      }), !0), [_v0]),
      _v13 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("recording_audio_waveform_toggled", {
        recording_new_status: _v0.recordingNewStatus
      }), !0), [_v0]),
      _v14 = (0, _v1.useCallback)(() => null !== _v0 && (_v0.track("recording_save_to_folder_clicked", {}), !0), [_v0]),
      _v15 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("recording_share_action_clicked", {
        recording_share_action: _v0.recordingShareAction
      }), !0), [_v0]);
    return {
      trackRecordingPageDisplayed: _v1,
      trackRecordingStarted: _v2,
      trackRecordingCompleted: _v3,
      trackRecordingInProgressActionClicked: _v4,
      trackRecordingLayoutChanged: _v5,
      trackRecordingLayoutFlipped: _v6,
      trackRecordingCameraChanged: _v7,
      trackRecordingMicrophoneChanged: _v8,
      trackRecordingCameraBackgroundChanged: _v9,
      trackRecordingQualityChanged: _v10,
      trackRecordingPipToggled: _v11,
      trackRecordingTeleprompterToggled: _v12,
      trackRecordingAudioWaveformToggled: _v13,
      trackRecordingSaveToFolderClicked: _v14,
      trackRecordingShareActionClicked: _v15,
      trackRecordingSharePrivacyChanged: (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("recording_share_privacy_changed", {
        recording_new_privacy: _v3[_v0.recordingNewPrivacy] ?? _v0.recordingNewPrivacy
      }), !0), [_v0]),
      trackRecordingRatioChanged: (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("recording_ratio_changed", {
        recording_new_ratio: _v0.recordingNewRatio
      }), !0), [_v0])
    };
  }]);
}