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
    _v10 = _v0.i(0);
  _v0.s(["DownloadVersionModal", 0, ({
    videoId: _v0,
    versionSequenceNumber: _v1,
    downloadConfig: _v2,
    isOpen: _v3,
    onClose: _v4,
    versionUri: _v5,
    pageName: _v6,
    reviewId: _v7
  }) => {
    let _v8 = (_v2.files || []).map(_v0 => ({
      ..._v0,
      link: _v0.downloadUrl || _v0.link
    }));
    return _v2.sourceFile && (_v8 = [..._v8, {
      ..._v2.sourceFile,
      link: _v2.sourceFile.downloadUrl || _v2.sourceFile.link
    }]), (0, _v1.jsxs)(_v2.Modal, {
      isOpen: _v3,
      onClose: _v4,
      children: [(0, _v1.jsx)(_v7.ModalOverlay, {
        zIndex: "modal"
      }), (0, _v1.jsxs)(_v5.ModalContent, {
        children: [(0, _v1.jsx)(_v6.ModalHeader, {
          children: `${(0, _v9.translate)({
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
          })} ${(0, _v10.getVersionNumber)(_v1)}`
        }), (0, _v1.jsx)(_v4.ModalCloseButton, {}), (0, _v1.jsx)(_v3.ModalBody, {
          paddingBottom: "md",
          children: (0, _v1.jsx)(_v8.DownloadFilesContent, {
            videoID: _v0,
            files: _v8,
            versionUri: _v5,
            pageName: _v6,
            reviewId: _v7
          })
        })]
      })]
    });
  }]);
}