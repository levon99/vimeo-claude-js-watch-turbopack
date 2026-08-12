{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = () => (0, _v6.translate)({
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
    _v8 = () => (0, _v6.translate)({
      singular: "Video could not be reported",
      dictionary: {
        es: {
          singular: "No se pudo denunciar el video"
        },
        "de-DE": {
          singular: "Video konnte nicht gemeldet werden"
        },
        "fr-FR": {
          singular: "Impossible de signaler la vidéo"
        },
        "ja-JP": {
          singular: "動画を報告できませんでした"
        },
        "ko-KR": {
          singular: "동영상을 신고할 수 없습니다."
        },
        "pt-BR": {
          singular: "Não foi possível denunciar o vídeo"
        },
        "zh-CN": {
          singular: "无法报告视频"
        }
      }
    }),
    _v9 = () => (0, _v6.translate)({
      singular: "Don’t contact me about this report.",
      dictionary: {
        es: {
          singular: "No me contacten acerca de este informe."
        },
        "de-DE": {
          singular: "Bitte kontaktieren Sie mich nicht wegen dieses Berichts."
        },
        "fr-FR": {
          singular: "Ne me contactez pas au sujet de ce signalement."
        },
        "ja-JP": {
          singular: "このレポートに関する連絡は不要です。"
        },
        "ko-KR": {
          singular: "이 보고서에 관해 저에게 연락하지 마십시오."
        },
        "pt-BR": {
          singular: "Não entre em contato comigo sobre este relatório."
        },
        "zh-CN": {
          singular: "请不要就此报告联系我。"
        }
      }
    }),
    _v10 = () => (0, _v6.translate)({
      singular: "We won’t send you any communications regarding this report. You will still see a temporary confirmation message on screen when you submit.",
      dictionary: {
        es: {
          singular: "No le enviaremos ninguna comunicación acerca de este informe. Aún así verá un mensaje de confirmación temporal en pantalla cuando lo envíe."
        },
        "de-DE": {
          singular: "Wir werden Ihnen keine Mitteilungen zu diesem Bericht senden. Auf dem Bildschirm wird Ihnen beim Absenden jedoch weiterhin eine vorübergehende Bestätigungsnachricht angezeigt."
        },
        "fr-FR": {
          singular: "Nous ne vous enverrons aucune communication concernant ce signalement. Vous verrez toutefois un message de confirmation temporaire à l’écran lorsque vous soumettrez."
        },
        "ja-JP": {
          singular: "このレポートに関するご連絡はお送りしません。送信すると、画面上に一時的な確認メッセージが表示されます。"
        },
        "ko-KR": {
          singular: "이 보고서에 관해 어떠한 연락도 보내드리지 않습니다. 제출하시면 화면에 일시적인 확인 메시지가 표시됩니다."
        },
        "pt-BR": {
          singular: "Não enviaremos nenhuma comunicação sobre este relatório. Você ainda verá uma mensagem temporária de confirmação na tela quando você enviar."
        },
        "zh-CN": {
          singular: "我们不会就此报告向您发送任何通讯。提交后，屏幕上仍会短暂显示一条确认消息。"
        }
      }
    });
  _v0.s(["backLabel", 0, () => (0, _v6.translate)({
    singular: "Back",
    dictionary: {
      es: {
        singular: "Atrás"
      },
      "de-DE": {
        singular: "Zurück"
      },
      "fr-FR": {
        singular: "Retour"
      },
      "ja-JP": {
        singular: "戻る"
      },
      "ko-KR": {
        singular: "뒤로"
      },
      "pt-BR": {
        singular: "Voltar"
      },
      "zh-CN": {
        singular: "返回"
      }
    }
  }), "commsOptOutDescription", 0, _v10, "commsOptOutLabel", 0, _v9, "reportFailedMessage", 0, _v8, "reportModalHeader", 0, _v7], 0), _v0.s(["CommsOptOutCheckbox", 0, ({
    isChecked: _v0,
    onChange: _v1
  }) => (0, _v1.jsxs)(_v2.Box, {
    children: [(0, _v1.jsx)(_v4.Divider, {
      mb: "300",
      borderColor: "stroke"
    }), (0, _v1.jsx)(_v3.Checkbox, {
      alignItems: "flex-start",
      px: "200",
      isChecked: _v0,
      onChange: _v0 => _v1(_v0.target.checked),
      children: (0, _v1.jsxs)(_v2.Box, {
        children: [(0, _v1.jsx)(_v5.Text, {
          variant: "body-md",
          fontWeight: "medium",
          children: _v9()
        }), (0, _v1.jsx)(_v5.Text, {
          variant: "body-sm",
          color: "text-secondary",
          children: _v10()
        })]
      })
    })]
  })], 0);
  var _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0);
  async function _v20({
    baseUrl: _v0,
    variables: _v1,
    where: {
      videoId: _v2
    },
    ..._v3
  }) {
    return (0, _v18.measureLatency)("postVideoReport", "POST", async () => {
      let _v0 = await fetch(`${_v0}/videos/${_v2}/report`, {
        ..._v3,
        method: "POST",
        body: JSON.stringify((0, _v19.deepSnakeCase)(_v1))
      });
      if (!_v0.ok) throw new _v19.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v19.deepCamelCase)(_v1);
    });
  }
  var _v21 = _v0.i(0),
    _v22 = _v0.i(0);
  function _v23() {
    let {
        mutate: _v0
      } = (0, _v21.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v22.useGctlConfig)(),
      [_v5, _v6] = (0, _v17.useInternalState)();
    return [(0, _v11.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/videos/${_v0.where.videoId}/report${(0, _v17.serializeQuery)(_v0)}`, _v20({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }), !1);
        _v6({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v6({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v1, _v3, _v2, _v4, _v6]), _v5];
  }
  "true" === _v16.default.env.STORYBOOK && (0, _v17.assignMswData)(_v23, {
    endpoint: "/videos/:videoId/report",
    method: "POST"
  }), _v0.s(["useVideoReport", 0, function ({
    clipId: _v0,
    onClose: _v1,
    onSubmitted: _v2,
    confirmationMode: _v3
  }) {
    let [_v4, _v5] = (0, _v11.useState)(!1),
      _v6 = (0, _v15.useViewer)(),
      _v7 = (0, _v12.useReport)({
        onClose: _v1,
        discovery: (0, _v13.useReportReasonsDiscovery)({
          contentType: "video",
          headerTitle: _v7()
        }),
        submitAdapter: function ({
          clipId: _v0,
          optOutOfCommunications: _v1
        }) {
          let [_v2, {
            callCount: _v3,
            error: _v4,
            loading: _v5
          }] = _v23();
          return {
            postReport: _v0 => {
              _v0 && _v0 && _v2({
                where: {
                  videoId: Number(_v0)
                },
                variables: {
                  optOutOfCommunications: _v1,
                  reason: _v0
                }
              });
            },
            status: (0, _v11.useMemo)(() => 0 === _v3 ? {
              state: "idle"
            } : _v5 ? {
              state: "posting"
            } : {
              state: null != _v4 ? "failed" : "succeeded"
            }, [_v3, _v4, _v5])
          };
        }({
          clipId: _v0,
          optOutOfCommunications: _v4
        }),
        confirmationMode: _v3,
        onSubmitted: _v2,
        submitFailureMessage: _v8(),
        resolveExternalUrl: _v0 => (0, _v14.withReportedContentUrl)(_v0, _v0)
      });
    return {
      ..._v7,
      showCommsOptOut: !!_v6?.isUnitedKingdom && _v7.selected?.kind === "submit",
      optOutOfCommunications: _v4,
      setOptOutOfCommunications: _v5
    };
  }], 0);
}