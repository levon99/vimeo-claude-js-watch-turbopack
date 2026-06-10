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
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0);
  _v0.s(["useVideoPrivacyBadgeHandlers", 0, function ({
    surface: _v0
  }) {
    let _v1 = (0, _v3.useContext)(_v10.ViewerContext),
      {
        settings: _v2
      } = (0, _v7.useOrionSettings)(),
      _v3 = (0, _v11.useStorageLimitLockedVideoPaywall)(),
      {
        openVideoPrivacyModal: _v4
      } = (0, _v14.useVideoPrivacyModal)(),
      _v5 = (0, _v12.useUpdateVideoPrivacyCache)(),
      _v6 = (0, _v4.useToast)(),
      _v7 = (0, _v2.useRouter)(),
      _v8 = `video_${_v0}`,
      _v9 = `cold_storage_video_${_v0}_locked_video_button`;
    return _v0 => {
      let _v1 = _v0.isColdStorage ?? !1,
        _v2 = !!_v0.metadata?.interactions?.edit?.uri,
        _v3 = (0, _v15.isVideoMetadataLocked)(_v0),
        _v4 = _v8.DEFAULT_PRIVACY_OPTIONS.find(_v0 => _v0.privacy === _v0.privacy?.view),
        _v5 = _v4 ? (0, _v9.getNewPrivacyCopy)("12px", _v1?.teamUser?.teamName, _v1?.teamUser?.isWorkspace)(_v4) : null,
        _v6 = (0, _v16.getPrivacyTypeIconAndLabel)(_v0.privacy?.view, _v1?.teamUser, _v0.privacy?.originalView),
        _v7 = _v0.privacy?.view === "ptv" || _v0.privacy?.view === "ptvhide",
        _v8 = _v1 ? {
          label: (0, _v6.translate)({
            singular: "Locked",
            dictionary: {
              es: {
                singular: "Bloqueado"
              },
              "de-DE": {
                singular: "Gesperrt"
              },
              "fr-FR": {
                singular: "Verrouillé"
              },
              "ja-JP": {
                singular: "ロック済み"
              },
              "ko-KR": {
                singular: "잠김"
              },
              "pt-BR": {
                singular: "Bloqueado"
              },
              "zh-CN": {
                singular: "已锁定"
              }
            }
          }),
          icon: (0, _v1.jsx)(_v5.CircleExclamation, {
            boxSize: "2xs",
            color: "status-caution-primary"
          })
        } : _v7 ? {
          label: (0, _v6.translate)({
            singular: "VOD",
            dictionary: {
              "zh-CN": {
                singular: "视频点播"
              }
            }
          })
        } : _v2.privacy_settings_new_copy && _v5 ? {
          label: _v5.title,
          icon: _v5.icon
        } : _v6,
        _v9 = () => _v3({
          location: _v8,
          paywallTrigger: _v9
        }),
        _v10 = _v1 ? _v9 : _v3 && _v2 && _v2.enable_privacy_badge_modal ? () => (0, _v13.showVideoMetadataLockedToast)({
          toast: _v6,
          router: _v7,
          managePath: (0, _v13.getVideoManagePath)(_v0)
        }) : _v2 && _v2.enable_privacy_badge_modal ? () => _v4({
          videoId: (0, _v17.idFromUri)(_v0.uri),
          videoName: _v0.name,
          currentPrivacy: _v0.privacy?.view ?? "",
          currentPassword: _v0.password ?? "",
          onSuccess: ({
            privacy: _v0,
            password: _v1
          }) => _v5({
            uri: _v0.uri,
            privacy: _v0,
            password: _v1
          })
        }) : void 0;
      return {
        videoPrivacy: _v8,
        variant: _v1 ? "coldStorage" : "default",
        onPrivacyBadgeClick: _v10,
        openLockedVideoPaywall: _v9
      };
    };
  }]);
}