{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = () => (0, _v5.translate)({
      singular: "Report this comment",
      dictionary: {
        es: {
          singular: "Denuncie este comentario"
        },
        "de-DE": {
          singular: "Diesen Kommentar melden"
        },
        "fr-FR": {
          singular: "Signaler ce commentaire"
        },
        "ja-JP": {
          singular: "このコメントを報告する"
        },
        "ko-KR": {
          singular: "이 댓글 신고"
        },
        "pt-BR": {
          singular: "Denunciar este comentário"
        },
        "zh-CN": {
          singular: "举报此评论"
        }
      }
    }),
    _v7 = () => (0, _v5.translate)({
      singular: "Comment could not be reported",
      dictionary: {
        es: {
          singular: "No se pudo denunciar el comentario."
        },
        "de-DE": {
          singular: "Kommentar konnte nicht gemeldet werden"
        },
        "fr-FR": {
          singular: "Impossible de signaler le commentaire"
        },
        "ja-JP": {
          singular: "コメントを報告できませんでした"
        },
        "ko-KR": {
          singular: "댓글을 신고할 수 없습니다."
        },
        "pt-BR": {
          singular: "Não foi possível denunciar o comentário"
        },
        "zh-CN": {
          singular: "评论无法举报"
        }
      }
    });
  _v0.s(["reportCommentModalHeader", 0, _v6, "reportFailedMessage", 0, _v7, "returnToVideoLabel", 0, () => (0, _v5.translate)({
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
  })], 0);
  var _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0);
  async function _v13({
    baseUrl: _v0,
    variables: _v1,
    where: {
      videoId: _v2,
      commentId: _v3
    },
    ..._v4
  }) {
    return (0, _v11.measureLatency)("postVideoCommentReport", "POST", async () => {
      let _v0 = await fetch(`${_v0}/videos/${_v2}/comments/${_v3}/report`, {
        ..._v4,
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
        let _v0 = await _v0(`/videos/${_v0.where.videoId}/comments/${_v0.where.commentId}/report${(0, _v10.serializeQuery)(_v0)}`, _v13({
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
    endpoint: "/videos/:videoId/comments/:commentId/report",
    method: "POST"
  }), _v0.s(["usePostVideoCommentReport", 0, _v16], 0), _v0.s(["useCommentReport", 0, function ({
    clipId: _v0,
    commentId: _v1,
    onClose: _v2,
    onSubmitted: _v3
  }) {
    let _v4 = (0, _v4.useViewer)();
    return (0, _v1.useReport)({
      onClose: _v2,
      discovery: (0, _v2.useReportReasonsDiscovery)({
        contentType: "comment",
        headerTitle: _v6()
      }),
      submitAdapter: function ({
        clipId: _v0,
        commentId: _v1
      }) {
        let [_v2, {
          callCount: _v3,
          error: _v4,
          loading: _v5
        }] = _v16();
        return {
          postReport: (_v0, {
            optOutOfCommunications: _v1 = !1
          } = {}) => {
            _v0 && _v1 && _v0 && _v2({
              where: {
                videoId: Number(_v0),
                commentId: Number(_v1)
              },
              variables: {
                reason: _v0,
                optOutOfCommunications: _v1
              }
            });
          },
          status: (0, _v8.useMemo)(() => 0 === _v3 ? {
            state: "idle"
          } : _v5 ? {
            state: "posting"
          } : {
            state: null != _v4 ? "failed" : "succeeded"
          }, [_v3, _v4, _v5])
        };
      }({
        clipId: _v0,
        commentId: _v1
      }),
      onSubmitted: _v3,
      submitFailureMessage: _v7(),
      resolveExternalUrl: _v0 => (0, _v3.withReportedContentUrl)(_v0, `${_v0}?comment=${_v1}`),
      offerCommsOptOut: !!_v4?.isUnitedKingdom
    });
  }], 0);
}