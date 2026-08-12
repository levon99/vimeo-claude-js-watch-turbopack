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
  _v0.s(["useFinalSaveHook", 0, () => {
    let _v0 = (0, _v7.useViewer)(),
      _v1 = (0, _v9.useStore)(_v0 => _v0.commonStore.capabilities),
      _v2 = (0, _v9.useStore)(_v0 => _v0.commonStore.actions.setCapabilities),
      _v3 = (0, _v9.useStore)(_v0 => _v0.commonStore.showcaseOwnerId),
      _v4 = (0, _v9.useStore)(_v0 => _v0.commonStore.mutateShowcaseData),
      _v5 = (0, _v9.useStore)(_v0 => _v0.appearanceStore.albumConfig),
      [_v6, {
        data: _v7,
        loading: _v8,
        error: _v9
      }] = (0, _v4.usePatchAlbum)(),
      _v10 = (0, _v2.useToast)(),
      {
        isDeltaEmpty: _v11,
        resetDeltaValues: _v12,
        resetStoreValues: _v13,
        getDeltaKeyValuePairs: _v14,
        getDeltaKeys: _v15
      } = (0, _v11.useForm)(),
      {
        setCommonData: _v16,
        setOpenModal: _v17,
        setCloseModal: _v18
      } = (0, _v9.useStore)(_v0 => _v0.commonStore.actions),
      _v19 = (0, _v9.useStore)(_v0 => _v0.commonStore.isSaveLoading),
      _v20 = (0, _v9.useStore)(_v0 => _v0.commonStore.actions.setIsSaveLoading),
      {
        setInfoData: _v21
      } = (0, _v9.useStore)(_v0 => _v0.infoStore.actions),
      {
        setSeoData: _v22
      } = (0, _v9.useStore)(_v0 => _v0.seoStore.actions),
      {
        setTvAppsData: _v23
      } = (0, _v9.useStore)(_v0 => _v0.tvAppsStore.actions),
      _v24 = (0, _v9.useStore)(_v0 => _v0.appearanceStore.actions.setAppearanceData),
      {
        showcaseId: _v25
      } = (0, _v9.useStore)(_v0 => _v0.commonStore.showcaseConfig),
      _v26 = (0, _v9.useStore)(_v0 => _v0.commonStore.deltaValues?.privacy),
      _v27 = (0, _v9.useStore)(_v0 => _v0.timelineStore.actions.timelineReset),
      {
        getUpgradeControlsEnabled: _v28
      } = (0, _v10.useAppearance)(),
      {
        sendShowcaseSaveEvent: _v29
      } = (0, _v8.useBpEventService)(),
      {
        trackPrivacyChanged: _v30
      } = (0, _v6.useViewPrivacyChangeTracking)(),
      {
        ResetConfigStoreFields: _v31
      } = (0, _v13.generateConfigPremiumFields)(_v5),
      _v32 = (0, _v1.useRef)(null),
      _v33 = () => {
        let _v0 = _v14();
        if ((0, _v13.isEmpty)(_v0)) {
          _v32.current = null, _v12(_v14.ResetTypeEnum.SAVED);
          return;
        }
        if (Array.isArray(_v26) && _v26.length > 1) {
          let _v0 = _v26[0]?.view ?? null,
            _v1 = _v26[1]?.view ?? null;
          _v32.current = _v1 && _v0 !== _v1 ? {
            previousPrivacy: _v0,
            newPrivacy: _v1
          } : null;
        } else _v32.current = null;
        _v6({
          where: {
            albumId: _v25
          },
          select: _v15(),
          variables: _v0
        }), _v20(!0), _v29({
          isUserFree: _v28()
        });
      };
    return (0, _v1.useEffect)(() => {
      if (!_v8 && !_v9 && _v7) {
        if (_v32.current) {
          let {
            previousPrivacy: _v0,
            newPrivacy: _v1
          } = _v32.current;
          _v30({
            entityType: "showcase",
            previousPrivacy: _v0,
            newPrivacy: _v1
          }), _v32.current = null;
        }
        _v10({
          title: (0, _v5.translate)({
            singular: "Changes saved",
            dictionary: {
              es: {
                singular: "Guardamos los cambios"
              },
              "de-DE": {
                singular: "Änderungen wurden gespeichert"
              },
              "fr-FR": {
                singular: "Changements sauvegardés"
              },
              "ja-JP": {
                singular: "変更内容が保存されました"
              },
              "ko-KR": {
                singular: "변경 사항 저장 완료"
              },
              "pt-BR": {
                singular: "Alterações salvas"
              },
              "zh-CN": {
                singular: "已保存更改"
              }
            }
          }),
          isClosable: !1
        }), _v20(!1), _v27(), _v12(_v14.ResetTypeEnum.SAVED), _v21(_v7), _v22(_v7), _v23(_v7), _v16(_v7), _v24(_v7), _v4?.(), _v1?.canCustomizeAlbums || (0, _v3.getUserCapabilities)({
          capabilities: ["hasShowcasePasswordPrivacyUpsell"],
          userId: _v3,
          jwt: _v0?.jwt,
          apiUrl: _v0?.apiUrl
        }).then(_v0 => {
          _v2({
            ..._v1,
            hasShowcasePasswordPrivacyUpsell: _v0?.hasShowcasePasswordPrivacyUpsell
          });
        });
      }
      !_v8 && _v9 && (_v32.current = null, _v20(!1), _v10({
        title: (0, _v5.translate)({
          singular: "Couldn’t save changes. Check your connection and try again.",
          dictionary: {
            es: {
              singular: "No se pudieron guardar los cambios. Compruebe la conexión e inténtelo de nuevo."
            },
            "de-DE": {
              singular: "Änderungen konnten nicht gespeichert werden. Bitte überprüfe deine Verbindung und versuche es erneut."
            },
            "fr-FR": {
              singular: "Impossible d'enregistrer les modifications. Vérifiez votre connexion et réessayez."
            },
            "ja-JP": {
              singular: "変更を保存できませんでした。接続状況を確認のうえ、再試行してください。"
            },
            "ko-KR": {
              singular: "변경 사항을 저장하지 못했습니다. 연결을 확인하고 다시 시도해 주세요."
            },
            "pt-BR": {
              singular: "Não foi possível salvar as alterações. Verifique sua conexão e tente novamente."
            },
            "zh-CN": {
              singular: "无法保存更改。请检查您的连接，然后重试。"
            }
          }
        }),
        variant: "warning"
      }));
    }, [_v8, _v9, _v7]), {
      loading: _v19,
      isDeltaEmpty: _v11,
      handleCancel: () => {
        _v27(), _v12(_v14.ResetTypeEnum.CANCELLED);
      },
      handleSave: () => {
        _v28() ? (_v29({
          isUserNotAllowedToSave: !0
        }), _v17(_v14.ModalType.SAVE_WITHOUT_PREMIUM)) : _v33();
      },
      handleSaveWithoutPremium: () => {
        _v28() && (_v18(), _v13([..._v12.ResetStoreFields, ..._v31]), _v33());
      },
      handleCancelWithoutPremium: () => {
        _v18();
      }
    };
  }]);
}