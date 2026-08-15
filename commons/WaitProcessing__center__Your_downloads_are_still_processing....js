{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  _v0.s(["WaitProcessing", 0, ({
    closeModal: _v0
  }) => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v4.ModalHeader, {
      pt: "3xl",
      pr: "lg",
      pb: "lg",
      pl: "lg",
      textAlign: "center",
      children: (0, _v1.jsx)(_v5.Paragraph, {
        size: "lg",
        children: (0, _v6.translate)({
          singular: "Your downloads are still processing...",
          dictionary: {
            es: {
              singular: "Sus descargas aún se están procesando..."
            },
            "de-DE": {
              singular: "Deine Downloads werden noch bearbeitet..."
            },
            "fr-FR": {
              singular: "Vos téléchargements sont encore en cours de traitement…"
            },
            "ja-JP": {
              singular: "ダウンロードを処理しています..."
            },
            "ko-KR": {
              singular: "다운로드가 아직 진행 중입니다..."
            },
            "pt-BR": {
              singular: "Seus downloads ainda estão sendo processados..."
            },
            "zh-CN": {
              singular: "您的下载仍在处理中..."
            }
          }
        })
      })
    }), _v0 && (0, _v1.jsx)(_v3.ModalFooter, {
      border: "none",
      py: "sm",
      px: "lg",
      children: (0, _v1.jsx)(_v2.Button, {
        onClick: _v0,
        children: (0, _v6.translate)({
          singular: "OK",
          dictionary: {
            es: {
              singular: "Aceptar"
            },
            "ko-KR": {
              singular: "확인"
            },
            "zh-CN": {
              singular: "确定"
            }
          }
        })
      })
    })]
  })]);
}