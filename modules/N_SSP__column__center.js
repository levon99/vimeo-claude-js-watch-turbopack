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
  (0, _v9.withPageSetup)({
    requireLogin: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, () => {
    let _v0 = (0, _v2.useRouter)(),
      _v1 = String(_v0.query.clipId ?? ""),
      [_v2, _v3] = (0, _v3.useState)(!1),
      _v4 = (0, _v3.useRef)(!1),
      _v5 = () => {
        _v0.push(`/${_v1}`);
      };
    return _v2 ? (0, _v1.jsxs)(_v5.Flex, {
      direction: "column",
      align: "center",
      justify: "center",
      minH: "100vh",
      gap: 4,
      p: 6,
      children: [(0, _v1.jsx)(_v6.Header, {
        children: (0, _v10.translate)({
          singular: "Thank you for reporting",
          dictionary: {
            es: {
              singular: "Gracias por reportar"
            },
            "de-DE": {
              singular: "Danke für Ihre Meldung"
            },
            "fr-FR": {
              singular: "Merci pour votre signalement"
            },
            "ja-JP": {
              singular: "ご報告ありがとうございます"
            },
            "ko-KR": {
              singular: "신고해 주셔서 감사합니다"
            },
            "pt-BR": {
              singular: "Obrigado por denunciar"
            },
            "zh-CN": {
              singular: "感谢您举报"
            }
          }
        })
      }), (0, _v1.jsx)(_v7.Text, {
        children: (0, _v10.translate)({
          singular: "Your report has been submitted. Our moderation team will review it.",
          dictionary: {
            es: {
              singular: "Su reporte ha sido enviado. Nuestro equipo de moderación lo revisará."
            },
            "de-DE": {
              singular: "Ihre Meldung wurde übermittelt. Unser Moderationsteam wird sie prüfen."
            },
            "fr-FR": {
              singular: "Votre signalement a été soumis. Notre équipe de modération l'examinera."
            },
            "ja-JP": {
              singular: "ご報告は送信されました。モデレーションチームが確認いたします。"
            },
            "ko-KR": {
              singular: "신고가 제출되었습니다. 저희 운영팀에서 검토하겠습니다."
            },
            "pt-BR": {
              singular: "Sua denúncia foi enviada. Nossa equipe de moderação analisará a denúncia."
            },
            "zh-CN": {
              singular: "您的举报已提交。我们的审核团队将会审查。"
            }
          }
        })
      }), (0, _v1.jsx)(_v4.Button, {
        onClick: _v5,
        children: (0, _v10.translate)({
          singular: "Return to video",
          dictionary: {
            es: {
              singular: "Volver al video"
            },
            "de-DE": {
              singular: "Zurück zum Video"
            },
            "fr-FR": {
              singular: "Retour à la vidéo"
            },
            "ja-JP": {
              singular: "動画に戻る"
            },
            "ko-KR": {
              singular: "동영상으로 돌아가기"
            },
            "pt-BR": {
              singular: "Voltar ao vídeo"
            },
            "zh-CN": {
              singular: "返回视频"
            }
          }
        })
      })]
    }) : (0, _v1.jsx)(_v8.ReportVideoModal, {
      clipId: _v1,
      isOpen: !0,
      onClose: () => {
        queueMicrotask(() => {
          _v4.current || _v5();
        });
      },
      onSubmitReport: () => {
        _v4.current = !0, _v3(!0);
      }
    });
  }], 0);
}