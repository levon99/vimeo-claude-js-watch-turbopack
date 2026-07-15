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
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0);
  let _v20 = (0, _v9.videoPrivacyIcons)("12px"),
    _v21 = (_v0, _v1, _v2) => {
      let _v3 = ("cold_storage" === _v0 || "purgatory" === _v0) && _v2 ? _v2 : _v0,
        _v4 = (0, _v19.getPrivacyLabel)(_v0, _v1, _v2),
        _v5 = _v20["cold_storage" === _v3 ? "purgatory" : _v3]?.icon;
      return _v4 && _v5 ? {
        label: _v4,
        icon: _v5
      } : void 0;
    };
  _v0.s(["getPrivacyTypeIconAndLabel", 0, _v21], 0);
  var _v22 = _v0.i(0);
  _v0.s(["useVideoPrivacyBadgeHandlers", 0, function ({
    surface: _v0
  }) {
    let _v1 = (0, _v3.useContext)(_v11.ViewerContext),
      {
        settings: _v2
      } = (0, _v7.useOrionSettings)(),
      _v3 = (0, _v13.useStorageLimitLockedVideoPaywall)(),
      _v4 = (0, _v12.useColdPrivacyVideoPaywall)(),
      {
        openVideoPrivacyModal: _v5
      } = (0, _v16.useVideoPrivacyModal)(),
      _v6 = (0, _v14.useUpdateVideoPrivacyCache)(),
      _v7 = (0, _v4.useToast)(),
      _v8 = (0, _v2.useRouter)(),
      _v9 = `video_${_v0}`,
      _v10 = `cold_storage_video_${_v0}_locked_video_button`,
      _v11 = "paid" === (0, _v8.deriveViewerAuthStatus)(_v1);
    return _v0 => {
      let _v1 = _v0.isColdStorage ?? !1,
        _v2 = _v0.privacy?.view,
        _v3 = _v0.privacy?.originalView,
        _v4 = !_v11 && (_v2.cold_privacy_enabled ?? !1) && (_v0.isColdPrivacyRestricted ?? !1) && !_v1,
        _v5 = !!_v0.metadata?.interactions?.edit?.uri,
        _v6 = (0, _v17.isVideoMetadataLocked)(_v0),
        _v7 = _v9.DEFAULT_PRIVACY_OPTIONS.find(_v0 => _v0.privacy === _v2),
        _v8 = _v7 ? (0, _v10.getNewPrivacyCopy)("12px", _v1?.teamUser?.teamName, _v1?.teamUser?.isWorkspace)(_v7) : null,
        _v9 = _v2 ? _v21(_v2, _v1?.teamUser, _v3) : void 0,
        _v10 = "ptv" === _v2 || "ptvhide" === _v2,
        _v11 = _v4 ? {
          label: (0, _v6.translate)({
            singular: "Private",
            dictionary: {
              es: {
                singular: "Privado"
              },
              "de-DE": {
                singular: "Privat"
              },
              "fr-FR": {
                singular: "Privé"
              },
              "ja-JP": {
                singular: "プライベート"
              },
              "ko-KR": {
                singular: "비공개"
              },
              "pt-BR": {
                singular: "Privado"
              },
              "zh-CN": {
                singular: "私密"
              }
            }
          }),
          icon: (0, _v1.jsx)(_v5.CircleExclamation, {
            boxSize: "2xs",
            color: "status-caution-primary"
          })
        } : _v10 ? {
          label: (0, _v6.translate)({
            singular: "VOD",
            dictionary: {
              "zh-CN": {
                singular: "视频点播"
              }
            }
          })
        } : _v2.privacy_settings_new_copy && _v8 ? {
          label: _v8.title,
          icon: _v8.icon
        } : _v9,
        _v12 = () => _v3({
          location: _v9,
          paywallTrigger: _v10
        }),
        _v13 = _v1 ? _v12 : _v4 ? () => _v4({
          location: _v9,
          originalView: _v3
        }) : _v6 && _v5 ? () => (0, _v15.showVideoMetadataLockedToast)({
          toast: _v7,
          router: _v8,
          managePath: (0, _v15.getVideoManagePath)(_v0)
        }) : _v5 && _v2 ? () => _v5({
          videoId: (0, _v22.idFromUri)(_v0.uri),
          videoName: _v0.name,
          currentPrivacy: _v2,
          currentPassword: _v0.password ?? "",
          currentEmbedPrivacy: _v0.privacy?.embed,
          filesSize: _v0.filesSize,
          onSuccess: ({
            privacy: _v0,
            password: _v1,
            embed: _v2
          }) => _v6({
            uri: _v0.uri,
            privacy: _v0,
            password: _v1,
            isColdStorage: !(0, _v14.shouldClearColdStorageLock)({
              isColdStorage: _v0.isColdStorage,
              privacy: _v0,
              embed: _v2 ?? _v0.privacy?.embed
            }) && void 0
          }),
          onEmbedSuccess: _v0 => {
            let _v1 = _v0.privacy?.originalView ?? _v0.privacy?.view,
              _v2 = (0, _v14.shouldClearColdStorageLock)({
                isColdStorage: _v0.isColdStorage,
                privacy: _v1,
                embed: _v0
              });
            return _v6({
              uri: _v0.uri,
              privacy: _v2 ? _v1 : void 0,
              embed: _v0,
              isColdStorage: !_v2 && void 0
            });
          }
        }) : void 0;
      return {
        videoPrivacy: _v11,
        variant: _v4 ? "coldPrivacy" : "default",
        onPrivacyBadgeClick: _v13,
        openLockedVideoPaywall: _v12,
        tooltipLabel: _v4 ? (0, _v18.getColdPrivacyTooltipLabel)(_v3) : void 0
      };
    };
  }], 0);
}