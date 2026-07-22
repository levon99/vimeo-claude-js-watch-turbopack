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
    _v15 = _v0.i(0),
    _v16 = _v0.i(0);
  let _v17 = ({
    clipId: _v0,
    onClose: _v1,
    onSubmitReport: _v2
  }) => {
    let _v3 = (0, _v16.useReport)({
      clipId: _v0,
      onClose: _v1,
      onSubmitReport: _v2,
      ownConfirmation: !1
    });
    return (0, _v1.jsxs)(_v5.Flex, {
      direction: "column",
      flex: "1",
      maxH: "100vh",
      w: "100%",
      maxW: "640px",
      mx: "auto",
      px: "300",
      py: "300",
      children: [(0, _v1.jsxs)(_v5.Flex, {
        align: "center",
        gap: "100",
        mb: "200",
        children: [_v3.canGoBack ? (0, _v1.jsx)(_v9.IconButton, {
          "aria-label": (0, _v12.backLabel)(),
          variant: "tertiary",
          size: "sm",
          icon: (0, _v1.jsx)(_v11.ArrowLeft, {}),
          onClick: _v3.onBack
        }) : null, (0, _v1.jsxs)(_v8.Box, {
          flex: "1",
          minW: "0",
          children: [(0, _v1.jsx)(_v6.Header, {
            as: "h1",
            size: "md",
            children: _v3.title
          }), (0, _v1.jsx)(_v7.Text, {
            variant: "body-sm",
            color: "text-secondary",
            children: _v3.subtitle
          })]
        }), (0, _v1.jsx)(_v15.ReportHelpLink, {})]
      }), (0, _v1.jsx)(_v10.Progress, {
        value: _v3.progress,
        size: "xs",
        mb: "200",
        sx: {
          "& > div": {
            transitionProperty: "width",
            transitionDuration: "300ms"
          }
        }
      }), (0, _v1.jsx)(_v8.Box, {
        flex: "1 1 0%",
        minH: "0",
        overflow: "auto",
        children: (0, _v1.jsx)(_v14.ReportBody, {
          isLoading: _v3.isLoading,
          hasData: _v3.hasData,
          error: _v3.error,
          step: _v3.step,
          currentOptions: _v3.currentOptions,
          selected: _v3.selected,
          onSelectNode: _v3.onSelectNode,
          onDone: _v3.handleClose
        })
      }), _v3.showFooter ? (0, _v1.jsxs)(_v5.Flex, {
        direction: "column",
        align: "center",
        gap: "100",
        pt: "300",
        children: [(0, _v1.jsx)(_v13.ContextualReportHelp, {
          currentMenuId: _v3.currentMenuId,
          step: _v3.step
        }), (0, _v1.jsx)(_v4.Button, {
          variant: "primary",
          size: "md",
          width: "100%",
          onClick: _v3.onSubmit,
          isDisabled: _v3.submitDisabled,
          children: _v3.submitLabel
        })]
      }) : null]
    });
  };
  var _v18 = _v0.i(0),
    _v19 = _v0.i(0);
  (0, _v18.withPageSetup)({
    requireLogin: !0,
    inlineViewer: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, () => {
    let _v0 = (0, _v2.useRouter)(),
      _v1 = String(_v0.query.clipId ?? ""),
      [_v2, _v3] = (0, _v3.useState)(!1),
      _v4 = _v0 => {
        ((_v0, _v1) => {
          let {
              webkit: _v2,
              nativeBridge: _v3
            } = window,
            _v4 = {
              action: "reportComplete",
              clipId: _v0,
              outcome: _v1
            };
          try {
            if (_v2?.messageHandlers?.nativeBridge) return _v2.messageHandlers.nativeBridge.postMessage(_v4), !0;
            if (_v3) return _v3.postMessage(JSON.stringify(_v4)), !0;
          } catch {}
          return !1;
        })(_v1, _v0) || _v0.push(`/${_v1}`);
      };
    return _v2 ? (0, _v1.jsxs)(_v5.Flex, {
      direction: "column",
      align: "center",
      justify: "center",
      minH: "100vh",
      gap: 4,
      p: 6,
      children: [(0, _v1.jsx)(_v6.Header, {
        children: (0, _v19.translate)({
          singular: "Thank you for your report",
          dictionary: {
            es: {
              singular: "Gracias por su informe"
            },
            "de-DE": {
              singular: "Vielen Dank für Ihre Meldung"
            },
            "fr-FR": {
              singular: "Merci pour votre signalement"
            },
            "ja-JP": {
              singular: "ご通報ありがとうございます"
            },
            "ko-KR": {
              singular: "신고해 주셔서 감사합니다"
            },
            "pt-BR": {
              singular: "Obrigado pela sua denúncia"
            },
            "zh-CN": {
              singular: "感谢您的举报"
            }
          }
        })
      }), (0, _v1.jsx)(_v7.Text, {
        textAlign: "center",
        children: (0, _v19.translate)({
          singular: "We’ve received your report. We typically review and resolve these reports within 72 business hours; complex reports may take longer and urgent safety issues may be prioritized.",
          dictionary: {
            es: {
              singular: "Hemos recibido su informe. Normalmente revisamos y resolvemos estos informes dentro de 72 horas hábiles; los informes complejos pueden tardar más y los asuntos de seguridad urgentes pueden tener prioridad."
            },
            "de-DE": {
              singular: "Wir haben Ihre Meldung erhalten. In der Regel prüfen und bearbeiten wir Meldungen innerhalb von 72 Geschäftsstunden; komplexe Meldungen können länger dauern und dringende Sicherheitsfälle werden gegebenenfalls priorisiert."
            },
            "fr-FR": {
              singular: "Nous avons bien reçu votre signalement. Nous examinons et traitons habituellement ces signalements sous 72 heures ouvrées ; les cas complexes peuvent prendre plus de temps et les problèmes de sécurité urgents peuvent être traités en priorité."
            },
            "ja-JP": {
              singular: "ご通報を受け付けました。通常、これらの通報は72営業時間以内に審査および解決されます。複雑な通報はさらに時間がかかる場合があり、緊急の安全問題は優先されることがあります。"
            },
            "ko-KR": {
              singular: "신고를 접수했습니다. 일반적으로 이러한 신고는 영업일 기준 72시간 이내에 검토 및 해결됩니다; 복잡한 신고는 더 오래 걸릴 수 있으며 긴급한 안전 문제는 우선 처리될 수 있습니다."
            },
            "pt-BR": {
              singular: "Recebemos sua denúncia. Normalmente revisamos e resolvemos essas denúncias dentro de 72 horas úteis; casos complexos podem levar mais tempo e questões de segurança urgentes podem ser priorizadas."
            },
            "zh-CN": {
              singular: "我们已收到您的举报。我们通常会在72个工作小时内审核并处理此类举报；复杂的举报可能需要更长时间，紧急的安全问题可能会被优先处理。"
            }
          }
        })
      }), (0, _v1.jsx)(_v4.Button, {
        onClick: () => _v4("submitted"),
        children: (0, _v19.translate)({
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
    }) : (0, _v1.jsx)(_v17, {
      clipId: _v1,
      onClose: () => _v4("cancelled"),
      onSubmitReport: () => _v3(!0)
    });
  }], 0);
}