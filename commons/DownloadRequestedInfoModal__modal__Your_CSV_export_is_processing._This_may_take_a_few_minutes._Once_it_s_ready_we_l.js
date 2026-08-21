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
  _v0.s(["DownloadRequestedInfoModal", 0, ({
    email: _v0,
    onClose: _v1,
    open: _v2
  }) => (0, _v1.jsxs)(_v4.Modal, {
    isOpen: _v2,
    onClose: _v1,
    isCentered: !0,
    size: "lg",
    children: [(0, _v1.jsx)(_v10.ModalOverlay, {
      zIndex: "modal"
    }), (0, _v1.jsxs)(_v7.ModalContent, {
      children: [(0, _v1.jsxs)(_v3.Flex, {
        children: [(0, _v1.jsx)(_v9.ModalHeader, {
          flexGrow: 1,
          children: _v14.default.DownloadModalHeading
        }), (0, _v1.jsx)(_v6.ModalCloseButton, {})]
      }), (0, _v1.jsx)(_v5.ModalBody, {
        children: (0, _v1.jsx)(_v11.Paragraph, {
          size: "md",
          children: (0, _v13.translate)({
            singular: "Your CSV export is processing. This may take a few minutes. Once it's ready, we'll send an email to {EMAIL} with a link to download the file.",
            replacements: {
              EMAIL: () => _v0
            },
            dictionary: {
              es: {
                singular: "La exportación del archivo CSV se está procesando. Esto puede tardar unos minutos. Una vez que esté listo, le enviaremos un correo electrónico a {EMAIL} con un enlace para descargarlo."
              },
              "de-DE": {
                singular: "Dein CSV-Export wird verarbeitet. Das kann ein paar Minuten dauern. Sobald alles fertig ist, senden wir eine E-Mail mit einem Link zum Herunterladen der Datei an {EMAIL} ."
              },
              "fr-FR": {
                singular: "Votre exportation CSV est en cours de traitement. Cela peut prendre quelques minutes. Dès que le fichier sera prêt, vous recevrez un e-mail à l'adresse {EMAIL} avec un lien pour le télécharger."
              },
              "ja-JP": {
                singular: "CSVエクスポートを処理しています。少々お待ちください。準備が整いましたら、ファイルのダウンロード用リンクを{EMAIL}宛てにメールで送信します。"
              },
              "ko-KR": {
                singular: "CSV 내보내기를 처리 중입니다. 몇 분 정도 걸릴 수 있습니다. 준비가 완료되면 파일을 다운로드할 수 있는 링크가 포함된 이메일을 {EMAIL}(으)로 보내드립니다."
              },
              "pt-BR": {
                singular: "Sua exportação CSV está sendo processada. Isto pode levar alguns minutos. Quando terminar, enviaremos um e-mail para {EMAIL} com o link para baixar o arquivo."
              },
              "zh-CN": {
                singular: "您的 CSV 导出正在处理中。这可能需要几分钟时间。准备就绪后，我们将向 {EMAIL} 发送一封包含文件下载链接的电子邮件。"
              }
            }
          })
        })
      }), (0, _v1.jsx)(_v8.ModalFooter, {
        border: "0",
        children: (0, _v1.jsx)(_v2.Button, {
          size: "lg",
          onClick: _v1,
          minWidth: (0, _v12.rem)(105),
          variant: "primary",
          children: _v14.default.DownloadModalOK
        })
      })]
    })]
  })]);
}