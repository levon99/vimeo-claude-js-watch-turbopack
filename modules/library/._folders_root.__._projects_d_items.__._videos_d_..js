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
    _v14 = _v0.i(0);
  let _v15 = [".*\\/folders\\/root.*", ".*\\/projects\\/\\d+\\/items.*", ".*\\/videos\\/\\d+.*"],
    _v16 = _v0 => "object" == typeof _v0 && null !== _v0,
    _v17 = /^\/videos\/\d+(?::[a-zA-Z0-9]+)?$/,
    _v18 = (_v0, {
      uri: _v1,
      patch: _v2
    }) => {
      var _v3;
      if (Array.isArray(_v0)) {
        let _v0 = !1,
          _v1 = _v0.map(_v0 => {
            let _v1 = _v18(_v0, {
              uri: _v1,
              patch: _v2
            });
            return _v1 !== _v0 && (_v0 = !0), _v1;
          });
        return _v0 ? _v1 : _v0;
      }
      if (!_v16(_v0)) return _v0;
      let _v4 = _v0,
        _v5 = !1;
      if ("string" == typeof _v0.uri && ((_v3 = _v0.uri) === _v1 || _v17.test(_v3) && _v17.test(_v1) && (0, _v14.idFromUri)(_v3) === (0, _v14.idFromUri)(_v1))) {
        let _v0 = _v16(_v0.privacy) ? _v0.privacy : {};
        _v0.view !== _v2.privacy && (_v4 = {
          ..._v4,
          privacy: {
            ..._v0,
            view: _v2.privacy
          }
        }, _v5 = !0);
        let _v1 = _v2.password,
          _v2 = _v0.password,
          _v3 = null === _v1 && null != _v2,
          _v4 = "string" == typeof _v1 && _v1 !== _v2;
        (_v3 || _v4) && (_v4 = {
          ..._v4,
          password: _v1
        }, _v5 = !0);
      }
      for (let [_v0, _v1] of Object.entries(_v4)) {
        let _v0 = _v18(_v1, {
          uri: _v1,
          patch: _v2
        });
        _v0 !== _v1 && (_v5 || (_v4 = {
          ..._v4
        }, _v5 = !0), _v4[_v0] = _v0);
      }
      return _v5 ? _v4 : _v0;
    };
  function _v19() {
    let _v0 = (0, _v13.default)();
    return (0, _v3.useCallback)(({
      uri: _v0,
      ..._v1
    }) => {
      let _v2 = _v0 => ((_v0, {
        uri: _v1,
        patch: _v2
      }) => _v18(_v0, {
        uri: _v1,
        patch: _v2
      }))(_v0, {
        uri: _v0,
        patch: _v1
      });
      return Promise.all(_v15.map(_v0 => _v0(_v0, _v2, !1)));
    }, [_v0]);
  }
  _v0.s(["useUpdateVideoPrivacyCache", 0, _v19], 0);
  var _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0);
  _v0.s(["useVideoPrivacyBadgeHandlers", 0, function ({
    surface: _v0
  }) {
    let _v1 = (0, _v3.useContext)(_v10.ViewerContext),
      {
        settings: _v2
      } = (0, _v7.useOrionSettings)(),
      _v3 = (0, _v12.useStorageLimitLockedVideoPaywall)(),
      _v4 = (0, _v11.useColdPrivacyVideoPaywall)(),
      {
        openVideoPrivacyModal: _v5
      } = (0, _v21.useVideoPrivacyModal)(),
      _v6 = _v19(),
      _v7 = (0, _v4.useToast)(),
      _v8 = (0, _v2.useRouter)(),
      _v9 = `video_${_v0}`,
      _v10 = `cold_storage_video_${_v0}_locked_video_button`;
    return _v0 => {
      let _v1 = _v0.isColdStorage ?? !1,
        _v2 = _v0.privacy?.originalView,
        _v3 = (_v2.cold_privacy_enabled ?? !1) && (_v0.isColdPrivacyRestricted ?? !1) && !_v1,
        _v4 = !!_v0.metadata?.interactions?.edit?.uri,
        _v5 = (0, _v22.isVideoMetadataLocked)(_v0),
        _v6 = _v8.DEFAULT_PRIVACY_OPTIONS.find(_v0 => _v0.privacy === _v0.privacy?.view),
        _v7 = _v6 ? (0, _v9.getNewPrivacyCopy)("12px", _v1?.teamUser?.teamName, _v1?.teamUser?.isWorkspace)(_v6) : null,
        _v8 = (0, _v24.getPrivacyTypeIconAndLabel)(_v0.privacy?.view, _v1?.teamUser, _v2),
        _v9 = _v0.privacy?.view === "ptv" || _v0.privacy?.view === "ptvhide",
        _v10 = _v3 ? {
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
        } : _v2.privacy_settings_new_copy && _v7 ? {
          label: _v7.title,
          icon: _v7.icon
        } : _v8,
        _v11 = () => _v3({
          location: _v9,
          paywallTrigger: _v10
        }),
        _v12 = _v1 ? _v11 : _v3 ? () => _v4({
          location: _v9,
          originalView: _v2
        }) : _v5 && _v4 && _v2.enable_privacy_badge_modal ? () => (0, _v20.showVideoMetadataLockedToast)({
          toast: _v7,
          router: _v8,
          managePath: (0, _v20.getVideoManagePath)(_v0)
        }) : _v4 && _v2.enable_privacy_badge_modal ? () => _v5({
          videoId: (0, _v14.idFromUri)(_v0.uri),
          videoName: _v0.name,
          currentPrivacy: _v0.privacy?.view ?? "",
          currentPassword: _v0.password ?? "",
          onSuccess: ({
            privacy: _v0,
            password: _v1
          }) => _v6({
            uri: _v0.uri,
            privacy: _v0,
            password: _v1
          })
        }) : void 0;
      return {
        videoPrivacy: _v10,
        variant: _v3 ? "coldPrivacy" : "default",
        onPrivacyBadgeClick: _v12,
        openLockedVideoPaywall: _v11,
        tooltipLabel: _v3 ? (0, _v23.getColdPrivacyTooltipLabel)(_v2) : void 0
      };
    };
  }], 0);
}