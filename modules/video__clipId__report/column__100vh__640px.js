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
    _v11 = _v0.i(0);
  let _v12 = ({
    header: _v0,
    cta: _v1,
    reasons: _v2,
    isPosting: _v3,
    reportReason: _v4,
    setReportReason: _v5,
    onClose: _v6,
    submitReport: _v7
  }) => (0, _v1.jsxs)(_v5.Flex, {
    direction: "column",
    flex: "1",
    maxH: "100vh",
    w: "100%",
    maxW: "640px",
    mx: "auto",
    px: "300",
    py: "300",
    children: [(0, _v1.jsx)(_v6.Header, {
      as: "h1",
      size: "md",
      mb: "300",
      children: _v0
    }), (0, _v1.jsx)(_v9.Box, {
      flex: "1 1 0%",
      minH: "0",
      overflow: "auto",
      children: (0, _v1.jsx)(_v10.ReportReasonList, {
        cta: _v1,
        reasons: _v2,
        reportReason: _v4,
        setReportReason: _v5
      })
    }), (0, _v1.jsx)(_v5.Flex, {
      align: "center",
      gap: "200",
      pt: "300",
      children: (0, _v1.jsx)(_v10.ReportActions, {
        isSubmitDisabled: _v4 == _v11.REASON_UNSELECTED || _v3,
        onClose: _v6,
        onSubmit: _v7
      })
    })]
  });
  var _v13 = _v0.i(0),
    _v14 = _v0.i(0);
  let _v15 = ({
    clipId: _v0,
    onClose: _v1,
    onSubmitReport: _v2
  }) => {
    let {
        reportReason: _v3,
        setReportReason: _v4,
        resetReason: _v5,
        isPosting: _v6,
        postReport: _v7
      } = (0, _v14.useReportVideo)({
        clipId: _v0,
        onSuccess: () => {
          _v5(), _v2();
        }
      }),
      _v8 = async () => {
        await _v7(_v3);
      };
    return (0, _v1.jsx)(_v12, {
      header: (0, _v8.translate)({
        singular: "Report this video",
        dictionary: {
          es: {
            singular: "Reportar este video"
          },
          "de-DE": {
            singular: "Dieses Video melden"
          },
          "fr-FR": {
            singular: "Signaler cette vidéo"
          },
          "ja-JP": {
            singular: "この動画を報告する"
          },
          "ko-KR": {
            singular: "이 동영상 신고"
          },
          "pt-BR": {
            singular: "Denunciar este vídeo"
          },
          "zh-CN": {
            singular: "举报此视频"
          }
        }
      }),
      cta: (0, _v8.translate)({
        singular: "Why are you reporting this video?",
        dictionary: {
          es: {
            singular: "¿Por qué denuncias este video?"
          },
          "de-DE": {
            singular: "Warum meldest du dieses Video?"
          },
          "fr-FR": {
            singular: "Pourquoi signalez-vous cette vidéo ?"
          },
          "ja-JP": {
            singular: "この動画の報告理由"
          },
          "ko-KR": {
            singular: "이 동영상을 신고하는 이유가 무엇입니까?"
          },
          "pt-BR": {
            singular: "Por que você está denunciando este vídeo?"
          },
          "zh-CN": {
            singular: "您为什么要举报这个视频？"
          }
        }
      }),
      reasons: _v13.ReportReasons,
      isPosting: _v6,
      reportReason: _v3,
      setReportReason: _v4,
      onClose: () => {
        _v5(), _v1();
      },
      submitReport: _v8
    });
  };
  var _v16 = _v0.i(0),
    _v17 = _v0.i(0);
  (0, _v16.withPageSetup)({
    requireLogin: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, () => {
    let _v0 = (0, _v2.useRouter)(),
      _v1 = String(_v0.query.clipId ?? ""),
      [_v2, _v3] = (0, _v3.useState)(!1),
      _v4 = () => {
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
        children: (0, _v17.translate)({
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
        children: (0, _v17.translate)({
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
        onClick: _v4,
        children: (0, _v17.translate)({
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
    }) : (0, _v1.jsx)(_v15, {
      clipId: _v1,
      onClose: _v4,
      onSubmitReport: () => _v3(!0)
    });
  }], 0);
}