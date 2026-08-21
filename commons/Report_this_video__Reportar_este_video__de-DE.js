{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = () => (0, _v5.translate)({
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
    _v7 = () => (0, _v5.translate)({
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
    });
  _v0.s(["backLabel", 0, () => (0, _v5.translate)({
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
  }), "reportFailedMessage", 0, _v7, "reportModalHeader", 0, _v6], 0);
  var _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0);
  async function _v13({
    baseUrl: _v0,
    variables: _v1,
    where: {
      videoId: _v2
    },
    ..._v3
  }) {
    return (0, _v11.measureLatency)("postVideoReport", "POST", async () => {
      let _v0 = await fetch(`${_v0}/videos/${_v2}/report`, {
        ..._v3,
        method: "POST",
        body: JSON.stringify((0, _v12.deepSnakeCase)(_v1))
      });
      if (!_v0.ok) throw new _v12.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v12.deepCamelCase)(_v1);
    });
  }
  var _v14 = _v0.i(0),
    _v15 = _v0.i(0);
  function _v16() {
    let {
        mutate: _v0
      } = (0, _v14.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v15.useGctlConfig)(),
      [_v5, _v6] = (0, _v10.useInternalState)();
    return [(0, _v8.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/videos/${_v0.where.videoId}/report${(0, _v10.serializeQuery)(_v0)}`, _v13({
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
  "true" === _v9.default.env.STORYBOOK && (0, _v10.assignMswData)(_v16, {
    endpoint: "/videos/:videoId/report",
    method: "POST"
  }), _v0.s(["useVideoReport", 0, function ({
    clipId: _v0,
    onClose: _v1,
    onSubmitted: _v2,
    confirmationMode: _v3
  }) {
    let _v4 = (0, _v4.useViewer)();
    return (0, _v1.useReport)({
      onClose: _v1,
      discovery: (0, _v2.useReportReasonsDiscovery)({
        contentType: "video",
        headerTitle: _v6()
      }),
      submitAdapter: function ({
        clipId: _v0
      }) {
        let [_v1, {
          callCount: _v2,
          error: _v3,
          loading: _v4
        }] = _v16();
        return {
          postReport: (_v0, {
            optOutOfCommunications: _v1 = !1
          } = {}) => {
            _v0 && _v0 && _v1({
              where: {
                videoId: Number(_v0)
              },
              variables: {
                optOutOfCommunications: _v1,
                reason: _v0
              }
            });
          },
          status: (0, _v8.useMemo)(() => 0 === _v2 ? {
            state: "idle"
          } : _v4 ? {
            state: "posting"
          } : {
            state: null != _v3 ? "failed" : "succeeded"
          }, [_v2, _v3, _v4])
        };
      }({
        clipId: _v0
      }),
      confirmationMode: _v3,
      onSubmitted: _v2,
      submitFailureMessage: _v7(),
      resolveExternalUrl: _v0 => (0, _v3.withReportedContentUrl)(_v0, _v0),
      offerCommsOptOut: !!_v4?.isUnitedKingdom
    });
  }], 0);
}