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
  let _v20 = (0, _v18.videoPrivacyIcons)("12px"),
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
    surface: _v0,
    pageSurface: _v1
  }) {
    let _v2 = (0, _v3.useContext)(_v10.ViewerContext),
      _v3 = (0, _v12.useStorageLimitLockedVideoPaywall)(),
      _v4 = (0, _v11.useColdPrivacyVideoPaywall)(),
      {
        openVideoPrivacyModal: _v5
      } = (0, _v15.useVideoPrivacyModal)(),
      _v6 = (0, _v13.useUpdateVideoPrivacyCache)(),
      {
        trackVideoPrivacyBadgeClicked: _v7
      } = (0, _v8.useVideoPrivacyBadgeTracking)(),
      _v8 = (0, _v4.useToast)(),
      _v9 = (0, _v2.useRouter)(),
      _v10 = `video_${_v0}`,
      _v11 = `cold_storage_video_${_v0}_locked_video_button`,
      _v12 = "homepage" === _v1 ? "homepage" : "library",
      _v13 = "paid" === (0, _v7.deriveViewerAuthStatus)(_v2);
    return _v0 => {
      let _v1 = _v0.isColdStorage ?? !1,
        _v2 = _v0.privacy?.view,
        _v3 = _v0.privacy?.originalView,
        _v4 = !_v13 && (_v0.isColdPrivacyRestricted ?? !1) && !_v1,
        _v5 = !!_v0.metadata?.interactions?.edit?.uri,
        _v6 = (0, _v16.isVideoMetadataLocked)(_v0),
        _v7 = _v0.metadata?.hasMandatoryEmailCapture ?? !1,
        _v8 = _v2 ? _v21(_v2, _v2?.teamUser, _v3) : void 0,
        _v9 = "ptv" === _v2 || "ptvhide" === _v2,
        _v10 = _v4 ? {
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
        } : _v9 ? {
          label: (0, _v6.translate)({
            singular: "VOD",
            dictionary: {
              "zh-CN": {
                singular: "视频点播"
              }
            }
          })
        } : _v8,
        _v11 = () => _v3({
          location: _v10,
          paywallTrigger: _v11
        }),
        _v12 = _v1 ? _v11 : _v4 ? () => _v4({
          location: _v10,
          originalView: _v3
        }) : _v7 && _v5 ? () => (0, _v9.showRegistrationRequiredToast)({
          toast: _v8,
          router: _v9,
          managePath: (0, _v14.getVideoManagePath)(_v0)
        }) : _v6 && _v5 ? () => (0, _v14.showVideoMetadataLockedToast)({
          toast: _v8,
          router: _v9,
          managePath: (0, _v14.getVideoManagePath)(_v0)
        }) : _v5 && _v2 ? () => _v5({
          videoId: (0, _v22.idFromUri)(_v0.uri),
          videoName: _v0.name,
          currentPrivacy: _v2,
          currentPassword: _v0.password ?? "",
          currentEmbedPrivacy: _v0.privacy?.embed,
          filesSize: _v0.filesSize,
          pageSource: _v12,
          entryPoint: "privacy_badge",
          onSuccess: ({
            privacy: _v0,
            password: _v1,
            embed: _v2,
            link: _v3
          }) => _v6({
            uri: _v0.uri,
            privacy: _v0,
            password: _v1,
            link: _v3,
            isColdStorage: !(0, _v13.shouldClearColdStorageLock)({
              isColdStorage: _v0.isColdStorage,
              privacy: _v0,
              embed: _v2 ?? _v0.privacy?.embed
            }) && void 0
          }),
          onEmbedSuccess: _v0 => {
            let _v1 = _v0.privacy?.originalView ?? _v0.privacy?.view,
              _v2 = (0, _v13.shouldClearColdStorageLock)({
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
        videoPrivacy: _v10,
        variant: _v4 ? "coldPrivacy" : "default",
        onPrivacyBadgeClick: _v12 ? () => {
          _v7({
            videoId: String((0, _v22.idFromUri)(_v0.uri)),
            badgeVariant: _v0,
            surface: _v1
          }), _v12();
        } : void 0,
        openLockedVideoPaywall: _v11,
        tooltipLabel: _v4 ? (0, _v17.getColdPrivacyTooltipLabel)(_v3) : void 0
      };
    };
  }], 0);
}