{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = (0, _v2.translate)({
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
    _v7 = (0, _v2.translate)({
      singular: "This video has been restricted because you are exceeding the managed storage limit. Click to restore.",
      dictionary: {
        es: {
          singular: "Este vídeo ha sido restringido porque está excediendo el límite de almacenamiento gestionado. Haga clic para restaurar."
        },
        "de-DE": {
          singular: "Dieses Video wurde eingeschränkt, da Sie das verwaltete Speicherkontingent überschreiten. Klicken Sie, um es wiederherzustellen."
        },
        "fr-FR": {
          singular: "Cette vidéo a été restreinte parce que vous dépassez la limite de stockage géré. Cliquez pour restaurer."
        },
        "ja-JP": {
          singular: "管理対象ストレージの上限を超過しているため、この動画へのアクセスが制限されています. 復元するにはクリックしてください."
        },
        "ko-KR": {
          singular: "관리되는 저장 용량 한도를 초과하여 이 동영상이 제한되었습니다. 복원하려면 클릭하세요."
        },
        "pt-BR": {
          singular: "Este vídeo foi restringido porque você está excedendo o limite de armazenamento gerenciado. Clique para restaurar."
        },
        "zh-CN": {
          singular: "由于您已超过托管存储限制，此视频已被限制。点击恢复。"
        }
      }
    }),
    _v8 = (0, _v2.translate)({
      singular: "Upgrade to unlock",
      dictionary: {
        es: {
          singular: "Actualiza para desbloquear"
        },
        "de-DE": {
          singular: "Upgrade durchführen, um das Video freizuschalten"
        },
        "fr-FR": {
          singular: "Mettez à niveau pour déverrouiller"
        },
        "ja-JP": {
          singular: "ロックを解除するには、アップグレードしてください"
        },
        "ko-KR": {
          singular: "잠금을 해제하려면 업그레이드하세요."
        },
        "pt-BR": {
          singular: "Atualize para desbloquear"
        },
        "zh-CN": {
          singular: "升级以解锁"
        }
      }
    }),
    _v9 = {
      cold_storage_video_card_locked_video_button: "locked_video",
      cold_storage_video_list_locked_video_button: "locked_video",
      cold_storage_recents_locked_video_click: "locked_video",
      cold_storage_video_actions_menu_unlock: "locked_video_menu_upgrade",
      cold_storage_recents_locked_video_menu_upgrade_button: "locked_video_menu_upgrade",
      cold_storage_single_video_locked_page_upgrade_button: "locked_video_page_upgrade_button"
    };
  _v0.s(["COLD_STORAGE_LOCKED_VIDEO_LABEL", 0, _v6, "STORAGE_LIMIT_LOCKED_VIDEO_TOOLTIP_LABEL", 0, _v7, "STORAGE_LIMIT_UNLOCK_ACTION_LABEL", 0, _v8, "useStorageLimitLockedVideoPaywall", 0, () => {
    let _v0 = (0, _v4.usePageName)(),
      {
        open: _v1,
        close: _v2
      } = (0, _v5.useUpsellModal)(),
      {
        trackColdStorageUxClicked: _v3
      } = (0, _v3.useColdStorageTracking)();
    return (0, _v1.useCallback)(({
      location: _v0,
      paywallTrigger: _v1,
      upsellName: _v2 = "locked_video"
    }) => {
      let _v3 = _v9[_v1];
      _v3 && _v3({
        element: _v3
      }), _v1({
        tracking: {
          params: {
            feature: "storage",
            location: _v0,
            page: _v0,
            upsell_name: _v2
          },
          paywallTracking: {
            paywallTrigger: _v1,
            paywallLocation: _v0,
            paywallType: "popup",
            paywallFeature: "storage_limit"
          }
        },
        onClose: _v2
      });
    }, [_v2, _v1, _v0, _v3]);
  }]);
}