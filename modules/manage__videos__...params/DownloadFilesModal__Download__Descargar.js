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
    _v15 = _v0.i(0);
  _v0.s(["DownloadFilesModal", 0, ({
    files: _v0,
    active: _v1,
    closeModal: _v2,
    onFileDownload: _v3,
    isMaxResolution: _v4 = !0,
    videoID: _v5,
    versionUri: _v6,
    location: _v7,
    usesDrm: _v8,
    pageName: _v9,
    audioTracksSelector: _v10,
    reviewId: _v11
  }) => {
    let {
        settings: _v12
      } = (0, _v12.useOrionSettings)(),
      _v13 = (0, _v2.useMemo)(() => _v0 ? (0, _v15.filterVideoFilesForKnownResolutionThenSortAlphabetically)(_v0, {
        allowAudioDownload: _v12.enable_audio_download
      }) : [], [_v0, _v12.enable_audio_download]),
      _v14 = _v13.length > 0 || _v10;
    return (0, _v1.jsxs)(_v5.Modal, {
      isOpen: _v1,
      onClose: _v2,
      children: [(0, _v1.jsx)(_v10.ModalOverlay, {}), (0, _v1.jsx)(_v7.ModalContent, {
        pb: "md",
        children: _v14 ? (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v9.ModalHeader, {
            p: "lg",
            pb: "md",
            m: "0",
            children: (0, _v1.jsx)(_v4.Header, {
              size: "lg",
              children: (0, _v11.translate)({
                singular: "Download",
                dictionary: {
                  es: {
                    singular: "Descargar"
                  },
                  "de-DE": {
                    singular: "Herunterladen"
                  },
                  "fr-FR": {
                    singular: "Télécharger "
                  },
                  "ja-JP": {
                    singular: "ダウンロード"
                  },
                  "ko-KR": {
                    singular: "다운로드"
                  },
                  "pt-BR": {
                    singular: "Baixar"
                  },
                  "zh-CN": {
                    singular: "下载"
                  }
                }
              })
            })
          }), (0, _v1.jsx)(_v8.ModalCloseButton, {}), (0, _v1.jsxs)(_v6.ModalBody, {
            pt: "sm",
            pr: "lg",
            pb: "lg",
            pl: "lg",
            children: [!_v4 && (0, _v1.jsx)(_v3.Alert, {
              mb: "xl",
              children: (0, _v11.translate)({
                singular: "This video is still optimizing, and will be available in high resolution shortly.",
                dictionary: {
                  es: {
                    singular: "Este video aún se está optimizando; en breve, estará disponible en alta resolución."
                  },
                  "de-DE": {
                    singular: "Die Optimierung dieses Videos läuft noch. Es wird in Kürze in hoher Auflösung verfügbar sein."
                  },
                  "fr-FR": {
                    singular: "Cette vidéo est toujours en cours d'optimisation et sera disponible en haute résolution sous peu."
                  },
                  "ja-JP": {
                    singular: "この動画は最適化中のため、まもなく高解像度でご利用いただけるようになります。"
                  },
                  "ko-KR": {
                    singular: "이 동영상은 최적화 중이며 곧 고해상도로 이용할 수 있습니다."
                  },
                  "pt-BR": {
                    singular: "Este vídeo ainda está otimizando, e estará disponível em alta resolução em breve."
                  },
                  "zh-CN": {
                    singular: "该视频仍在优化中，很快将可观看高清版本。"
                  }
                }
              })
            }), (0, _v1.jsx)(_v14.DownloadFilesContent, {
              files: _v13,
              handleClick: _v3,
              location: _v7,
              videoID: _v5,
              versionUri: _v6,
              pageName: _v9,
              usesDrm: _v8,
              audioTracksSelector: _v10,
              reviewId: _v11
            })]
          })]
        }) : (0, _v1.jsx)(_v13.WaitProcessing, {
          closeModal: _v2
        })
      })]
    });
  }]);
}