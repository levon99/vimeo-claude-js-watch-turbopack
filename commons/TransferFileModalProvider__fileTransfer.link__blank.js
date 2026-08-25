{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  let _v9 = (0, _v2.createContext)({
    openTransferFileModal: () => {}
  });
  _v0.s(["TransferFileModalProvider", 0, ({
    children: _v0
  }) => {
    let _v1 = (0, _v8.useViewer)(),
      _v2 = _v1?.teamUser?.ownerId ?? _v1?.user?.id,
      _v3 = (0, _v3.useToast)(),
      [_v4, _v5] = (0, _v2.useState)(!1),
      [_v6, _v7] = (0, _v2.useState)(null),
      [_v8, _v9] = (0, _v2.useState)(null),
      {
        trackTransferEntryPointVideoConfirmed: _v10,
        trackTransferCtaDismissed: _v11
      } = (0, _v5.useFileTransferAdoptionTracking)(),
      {
        data: _v12,
        isLoading: _v13
      } = (0, _v6.useGetUnlockedVideo)(() => _v6 ? {
        where: {
          videoId: _v6
        },
        select: ["fileTransfer.link"]
      } : null),
      _v14 = !!_v6 && !_v13 && void 0 !== _v12,
      _v15 = (0, _v2.useRef)(!1);
    (0, _v2.useEffect)(() => {
      if (!_v14 || _v15.current) return;
      _v15.current = !0;
      let _v0 = _v12?.fileTransfer?.link;
      _v0 ? (_v8 && _v10({
        entryPoint: _v8
      }), window.open(_v0, "_blank")) : _v3({
        title: (0, _v4.translate)({
          singular: "File transfer is not available for this video.",
          dictionary: {
            es: {
              singular: "La transferencia de archivos no está disponible para este vídeo."
            },
            "de-DE": {
              singular: "Dateiübertragung ist für dieses Video nicht verfügbar."
            },
            "fr-FR": {
              singular: "Le transfert de fichier n’est pas disponible pour cette vidéo."
            },
            "ja-JP": {
              singular: "この動画ではファイル転送は利用できません。"
            },
            "ko-KR": {
              singular: "이 동영상에서는 파일 전송을 사용할 수 없습니다."
            },
            "pt-BR": {
              singular: "A transferência de arquivo não está disponível para este vídeo."
            },
            "zh-CN": {
              singular: "此视频不支持文件传输。"
            }
          }
        }),
        variant: "warning"
      }), _v7(null);
    }, [_v14, _v12, _v3, _v10, _v8]);
    let _v16 = (0, _v2.useCallback)(_v0 => {
      _v9(_v0), _v5(!0);
    }, []);
    return (0, _v1.jsxs)(_v9.Provider, {
      value: {
        openTransferFileModal: _v16
      },
      children: [_v0, _v4 && (0, _v1.jsx)(_v7.VideoListModal, {
        closeVideoModal: () => {
          _v8 && _v11({
            dismissalStage: "select_video_modal",
            entryPoint: _v8
          }), _v5(!1);
        },
        isVideoListModalOpen: _v4,
        resourceId: 0,
        resourceOwnerId: _v2,
        type: "video_file_transfer",
        selectedVideo: null,
        onSuccess: _v0 => {
          if (_v0) {
            let _v0 = Number(_v0.split("/").pop());
            _v0 && (_v15.current = !1, _v7(_v0), _v5(!1));
          }
        }
      })]
    });
  }, "useTransferFileModal", 0, () => (0, _v2.useContext)(_v9)]);
}