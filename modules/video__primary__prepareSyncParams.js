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
  let _v15 = ({
    activeThumb: _v0,
    siteId: _v1,
    videoId: _v2
  }) => {
    let _v3 = (_v0 => {
      try {
        let _v0 = "video",
          _v1 = new URL(_v0).pathname,
          _v2 = _v1.match(RegExp(`\\/${_v0}\\/(\\d+-[a-zA-Z0-9]+-d)(?=_)`));
        if (_v2 && _v2[1]) return `${_v0}/${_v2[1]}`;
        let _v3 = _v1.match(RegExp(`\\/${_v0}\\/(\\d+)(?=_|\\.|$)`));
        if (_v3 && _v3[1]) return `${_v0}/${_v3[1]}`;
        return "";
      } catch {
        return "";
      }
    })(_v0.src);
    return _v3 ? {
      where: {
        videoId: _v2,
        siteId: _v1
      },
      variables: {
        primary: {
          path: _v3
        }
      },
      select: ["primary"]
    } : null;
  };
  _v0.s(["prepareSyncParams", 0, _v15, "shouldOpenSyncModal", 0, ({
    hasStreamingCapability: _v0,
    hasStreamingSite: _v1,
    clickedThumbnail: _v2
  }) => _v0 && _v1 && !_v2.active], 0);
  var _v16 = _v0.i(0);
  let _v17 = () => ({
    BODY: {
      DESCRIPTION: (0, _v16.translate)({
        singular: "Do you want to update your Vimeo Streaming primary thumbnail to match?",
        dictionary: {
          es: {
            singular: "¿Quiere actualizar su miniatura principal de Vimeo Streaming para que coincida?"
          },
          "de-DE": {
            singular: "Möchten Sie Ihr primäres Vimeo Streaming-Vorschaubild entsprechend aktualisieren?"
          },
          "fr-FR": {
            singular: "Voulez-vous mettre à jour votre miniature principale Vimeo Streaming pour qu'elle corresponde ?"
          },
          "ja-JP": {
            singular: "Vimeoストリーミングのプライマリサムネイルも一致するように更新しますか？"
          },
          "ko-KR": {
            singular: "Vimeo 스트리밍 기본 섬네일을 동기화하기 위해 업데이트할까요?"
          },
          "pt-BR": {
            singular: "Quer atualizar a miniatura principal do Vimeo Streaming para coincidir?"
          },
          "zh-CN": {
            singular: "是否要更新 Vimeo Streaming 的主缩略图以保持一致？"
          }
        }
      })
    },
    FOOTER: {
      NO_BTN: (0, _v16.translate)({
        singular: "No",
        dictionary: {
          "de-DE": {
            singular: "Nein"
          },
          "fr-FR": {
            singular: "Non"
          },
          "ja-JP": {
            singular: "いいえ"
          },
          "ko-KR": {
            singular: "아니요"
          },
          "pt-BR": {
            singular: "Não"
          },
          "zh-CN": {
            singular: "否"
          }
        }
      }),
      YES_BTN: (0, _v16.translate)({
        singular: "Yes",
        dictionary: {
          es: {
            singular: "Sí"
          },
          "de-DE": {
            singular: "Ja"
          },
          "fr-FR": {
            singular: "Oui"
          },
          "ja-JP": {
            singular: "はい"
          },
          "ko-KR": {
            singular: "예"
          },
          "pt-BR": {
            singular: "Sim"
          },
          "zh-CN": {
            singular: "是"
          }
        }
      })
    },
    HEADER: {
      TITLE: (0, _v16.translate)({
        singular: "Update Vimeo Streaming thumbnails?",
        dictionary: {
          es: {
            singular: "¿Desea actualizar las miniaturas de Vimeo Streaming?"
          },
          "de-DE": {
            singular: "Vimeo Streaming-Vorschaubilder aktualisieren?"
          },
          "fr-FR": {
            singular: "Mettre à jour les vignettes Vimeo Streaming ?"
          },
          "ja-JP": {
            singular: "Vimeoストリーミングのサムネイルを更新しますか？"
          },
          "ko-KR": {
            singular: "Vimeo 스트리밍 섬네일을 업데이트할까요?"
          },
          "pt-BR": {
            singular: "Atualizar as miniaturas do Vimeo Streaming?"
          },
          "zh-CN": {
            singular: "要更新 Vimeo Streaming 缩略图吗？"
          }
        }
      })
    },
    TOAST: {
      SYNC_ERROR: (0, _v16.translate)({
        singular: "Failed to sync primary thumbnail",
        dictionary: {
          es: {
            singular: "No se pudo sincronizar la miniatura principal"
          },
          "de-DE": {
            singular: "Primäres Vorschaubild konnte nicht synchronisiert werden"
          },
          "fr-FR": {
            singular: "Échec de la synchronisation de la miniature principale"
          },
          "ja-JP": {
            singular: "プライマリサムネイルの同期に失敗しました"
          },
          "ko-KR": {
            singular: "기본 섬네일 동기화 실패"
          },
          "pt-BR": {
            singular: "Não foi possível sincronizar a miniatura principal"
          },
          "zh-CN": {
            singular: "无法同步主缩略图"
          }
        }
      }),
      SYNC_SUCCESS: (0, _v16.translate)({
        singular: "Primary thumbnail synced successfully",
        dictionary: {
          es: {
            singular: "La miniatura principal se sincronizó exitosamente"
          },
          "de-DE": {
            singular: "Primäres Vorschaubild erfolgreich synchronisiert"
          },
          "fr-FR": {
            singular: "La vignette principale a bien été synchronisée"
          },
          "ja-JP": {
            singular: "プライマリサムネイルが同期されました"
          },
          "ko-KR": {
            singular: "기본 섬네일 동기화 완료"
          },
          "pt-BR": {
            singular: "Miniatura principal sincronizada com sucesso"
          },
          "zh-CN": {
            singular: "主缩略图已成功同步"
          }
        }
      })
    }
  });
  _v0.s(["SyncModal", 0, ({
    isOpen: _v0,
    onClose: _v1,
    activeThumb: _v2,
    siteId: _v3,
    videoId: _v4
  }) => {
    let _v5 = (0, _v2.useMemo)(_v17, []),
      _v6 = (0, _v13.useToast)(),
      [_v7, {
        loading: _v8
      }] = (0, _v14.usePatchVideoSiteThumbnails)(),
      {
        mutate: _v9
      } = (0, _v14.useGetVideoSiteThumbnails)(() => _v3 ? {
        where: {
          videoId: _v4,
          siteId: _v3
        },
        select: ["featuredCarouselMobile", "featuredCarouselMobileVertical", "featuredCarouselWide", "primary", "square", "vertical"]
      } : null);
    if (!_v2 || !_v3) return null;
    let _v10 = async () => {
      let _v0 = _v15({
        activeThumb: _v2,
        siteId: _v3,
        videoId: _v4
      });
      if (!_v0) {
        _v6({
          title: _v5.TOAST.SYNC_ERROR,
          status: "error"
        }), _v1();
        return;
      }
      try {
        await _v7(_v0), _v6({
          title: _v5.TOAST.SYNC_SUCCESS,
          status: "success"
        }), _v9();
      } catch (_v0) {
        _v6({
          title: _v5.TOAST.SYNC_ERROR,
          status: "error"
        });
      }
      _v1();
    };
    return (0, _v1.jsxs)(_v3.Modal, {
      isOpen: _v0,
      onClose: _v1,
      isCentered: !0,
      children: [(0, _v1.jsx)(_v4.ModalOverlay, {}), (0, _v1.jsxs)(_v5.ModalContent, {
        children: [(0, _v1.jsxs)(_v6.ModalHeader, {
          children: [(0, _v1.jsx)(_v10.Header, {
            size: "lg",
            children: _v5.HEADER.TITLE
          }), (0, _v1.jsx)(_v9.ModalCloseButton, {
            onClick: _v1
          })]
        }), (0, _v1.jsx)(_v7.ModalBody, {
          children: (0, _v1.jsx)(_v12.Paragraph, {
            size: "lg",
            color: "text-secondary",
            children: _v5.BODY.DESCRIPTION
          })
        }), (0, _v1.jsxs)(_v8.ModalFooter, {
          children: [(0, _v1.jsx)(_v11.Button, {
            variant: "secondary",
            onClick: _v1,
            isDisabled: _v8,
            children: _v5.FOOTER.NO_BTN
          }), (0, _v1.jsx)(_v11.Button, {
            variant: "primary",
            onClick: _v10,
            isLoading: _v8,
            children: _v5.FOOTER.YES_BTN
          })]
        })]
      })]
    });
  }], 0);
}