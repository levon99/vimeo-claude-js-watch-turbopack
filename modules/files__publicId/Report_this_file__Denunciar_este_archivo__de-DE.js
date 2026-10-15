{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = () => (0, _v5.translate)({
      singular: "Report this file",
      dictionary: {
        es: {
          singular: "Denunciar este archivo"
        },
        "de-DE": {
          singular: "Diese Datei melden"
        },
        "fr-FR": {
          singular: "Signaler ce fichier"
        },
        "ja-JP": {
          singular: "このファイルを報告"
        },
        "ko-KR": {
          singular: "이 파일 신고하기"
        },
        "pt-BR": {
          singular: "Denunciar este arquivo"
        },
        "zh-CN": {
          singular: "举报此文件"
        }
      }
    }),
    _v7 = () => (0, _v5.translate)({
      singular: "This file could not be reported",
      dictionary: {
        es: {
          singular: "No se pudo denunciar este archivo"
        },
        "de-DE": {
          singular: "Diese Datei konnte nicht gemeldet werden"
        },
        "fr-FR": {
          singular: "Ce fichier n'a pas pu être signalé"
        },
        "ja-JP": {
          singular: "このファイルを報告できませんでした"
        },
        "ko-KR": {
          singular: "이 파일을 신고할 수 없습니다"
        },
        "pt-BR": {
          singular: "Este arquivo não pôde ser denunciado"
        },
        "zh-CN": {
          singular: "无法举报此文件"
        }
      }
    });
  _v0.s(["reportFailedMessage", 0, _v7, "reportFileModalHeader", 0, _v6, "returnToFileLabel", 0, () => (0, _v5.translate)({
    singular: "Return to file",
    dictionary: {
      es: {
        singular: "Volver al archivo"
      },
      "de-DE": {
        singular: "Zurück zur Datei"
      },
      "fr-FR": {
        singular: "Retour au fichier"
      },
      "ja-JP": {
        singular: "ファイルに戻る"
      },
      "ko-KR": {
        singular: "파일로 돌아가기"
      },
      "pt-BR": {
        singular: "Voltar ao arquivo"
      },
      "zh-CN": {
        singular: "返回文件"
      }
    }
  })], 0);
  var _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0);
  async function _v12({
    baseUrl: _v0,
    variables: _v1,
    where: {
      fileId: _v2
    },
    ..._v3
  }) {
    return (0, _v10.measureLatency)("postFileReport", "POST", async () => {
      let _v0 = await fetch(`${_v0}/files/${_v2}/report`, {
        ..._v3,
        method: "POST",
        body: JSON.stringify((0, _v11.deepSnakeCase)(_v1))
      });
      if (!_v0.ok) throw new _v11.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v11.deepCamelCase)(_v1);
    });
  }
  var _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0);
  _v0.s(["useFileReport", 0, function ({
    publicId: _v0,
    onClose: _v1,
    onSubmitted: _v2
  }) {
    let _v3 = (0, _v4.useViewer)();
    return (0, _v1.useReport)({
      onClose: _v1,
      discovery: (0, _v2.useReportReasonsDiscovery)({
        contentType: "file",
        headerTitle: _v6()
      }),
      submitAdapter: function ({
        publicId: _v0
      }) {
        let [_v1, {
          callCount: _v2,
          error: _v3,
          loading: _v4
        }] = function () {
          let {
              mutate: _v0
            } = (0, _v13.useSWRConfig)(),
            {
              baseUrl: _v1,
              jwt: _v2,
              xVimeoPage: _v3,
              locale: _v4
            } = (0, _v14.useGctlConfig)(),
            [_v5, _v6] = (0, _v9.useInternalState)();
          return [(0, _v8.useCallback)(async _v0 => {
            _v6({
              type: "REQUEST"
            });
            try {
              let _v0 = await _v0(`/files/${_v0.where.fileId}/report${(0, _v9.serializeQuery)(_v0)}`, _v12({
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
        }();
        return {
          postReport: (_v0, {
            optOutOfCommunications: _v1 = !1
          } = {}) => {
            _v0 && _v0 && _v1({
              where: {
                fileId: _v0
              },
              variables: {
                optOutOfCommunications: _v1,
                reason: _v0,
                source: (0, _v15.reportSourceHint)()
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
        publicId: _v0
      }),
      onSubmitted: _v2,
      submitFailureMessage: _v7(),
      resolveExternalUrl: _v0 => (0, _v3.withReportedContentUrl)(_v0, `files/${_v0}`),
      offerCommsOptOut: !!_v3?.isUnitedKingdom
    });
  }], 0);
}