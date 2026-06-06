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
    _v12 = _v0.i(0);
  _v0.s(["useUploadFileList", 0, ({
    onUploadFailure: _v0,
    targetUserId: _v1,
    paywallTracking: _v2
  }) => {
    let {
        upload: _v3,
        uploads: _v4
      } = (0, _v7.useUploader)(),
      {
        open: _v5,
        close: _v6
      } = (0, _v12.useUpsellModal)(),
      _v7 = (0, _v11.useUpsellAnalyticsPage)(),
      _v8 = (0, _v1.useRouter)(),
      _v9 = (0, _v4.useIsMobile)(),
      _v10 = (0, _v2.useRef)(new Set()),
      {
        paywallTrigger: _v11,
        paywallLocation: _v12,
        paywallType: _v13,
        paywallFeature: _v14
      } = _v2,
      _v15 = "number" == typeof _v1 && _v1 > 0,
      _v16 = (0, _v2.useCallback)((_v0, _v1) => {
        let _v2 = "quota" === _v14 && "video_size" === _v0 && "lifetime" === _v1 ? "storage_limit" : _v14;
        if (_v9) {
          let _v0 = (0, _v6.buildUpgradePlanUrl)({
            paywallTrigger: _v11,
            paywallLocation: _v12,
            paywallFeature: _v2
          }, {
            feature: "quota",
            location: "page_area",
            page: _v7,
            paywall: "1",
            upsell: "error_view"
          });
          (0, _v10.launchLateStagePaywallFromUpgradePlanUrl)(_v0) || _v8.push(_v0);
        } else _v5({
          tracking: {
            params: {
              feature: "quota",
              location: "page_area",
              page: _v7,
              upsell_name: "error_view"
            },
            paywallTracking: {
              paywallTrigger: _v11,
              paywallLocation: _v12,
              paywallType: _v13,
              paywallFeature: _v2
            }
          },
          modalConfig: {
            headerText: (0, _v5.translate)({
              singular: "You've reached your storage limit",
              dictionary: {
                es: {
                  singular: "Alcanzaste el límite de almacenamiento."
                },
                "de-DE": {
                  singular: "Du hast dein Speicherlimit erreicht."
                },
                "fr-FR": {
                  singular: "Vous avez atteint votre limite de stockage"
                },
                "ja-JP": {
                  singular: "ストレージ容量の上限に達しました"
                },
                "ko-KR": {
                  singular: "저장소 한도에 도달했습니다."
                },
                "pt-BR": {
                  singular: "Você atingiu seu limite de armazenamento"
                }
              }
            }),
            subHeaderText: (0, _v5.translate)({
              singular: "To get more storage, upgrade your account",
              dictionary: {
                es: {
                  singular: "Para obtener más almacenamiento, actualice su cuenta"
                },
                "de-DE": {
                  singular: "Um mehr Speicherplatz zu erhalten, aktualisieren Sie Ihr Konto"
                },
                "fr-FR": {
                  singular: "Pour obtenir davantage d'espace de stockage, améliorez votre compte"
                },
                "ja-JP": {
                  singular: "ストレージ容量を増やすには、アカウントをアップグレードしてください"
                },
                "ko-KR": {
                  singular: "저장 공간을 늘리려면, 계정을 업그레이드하세요"
                },
                "pt-BR": {
                  singular: "Para obter mais armazenamento, atualize sua conta"
                },
                "zh-CN": {
                  singular: "要获取更多存储空间，请升级您的账户"
                }
              }
            })
          },
          onClose: _v6
        });
      }, [_v6, _v9, _v5, _v8, _v7, _v11, _v12, _v13, _v14]),
      {
        isLoading: _v17
      } = (0, _v8.useQuotaCheck)({
        targetUserId: _v15 ? _v1 : void 0,
        onQuotaReached: _v15 ? _v16 : void 0
      });
    return (0, _v2.useEffect)(() => {
      let _v0 = new Set(_v4.map(({
        id: _v0
      }) => _v0));
      _v10.current.forEach(_v0 => {
        _v0.has(_v0) || _v10.current.delete(_v0);
      }), _v4.filter(_v0 => {
        let _v1 = _v0.state === _v9.STATES.FAILED && !_v10.current.has(_v0.id);
        return _v1 && _v10.current.add(_v0.id), _v1;
      }).forEach(_v0 => {
        _v0?.(_v0.error), _v3.BigPictureClient.sendEvent(new _v3.Event("vimeo.embeddable_uploader_error", 1, {
          error_copy: _v0.error
        }));
      });
    }, [_v4, _v0]), {
      uploadFiles: (0, _v2.useCallback)(_v0 => {
        _v3(_v0.files, {
          targetUserId: _v0.targetUserId,
          folderId: _v0.folderId
        }, _v0.uploadClipProperties);
      }, [_v3]),
      isLoading: _v17
    };
  }]);
}