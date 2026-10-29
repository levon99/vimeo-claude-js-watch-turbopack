{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  async function _v5({
    baseUrl: _v0,
    where: {
      albumId: _v1,
      videoId: _v2,
      commentId: _v3
    },
    query: _v4,
    ..._v5
  }) {
    return (0, _v3.measureLatency)("deleteAlbumVideoComment", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/albums/${_v1}/videos/${_v2}/comments/${_v3}?${(0, _v4.searchQueryString)(_v4)}`, {
        ..._v5,
        method: "DELETE"
      });
      if (!_v0.ok) throw new _v4.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v4.deepCamelCase)(_v1);
    });
  }
  async function _v6({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      albumId: _v3,
      videoId: _v4,
      commentId: _v5
    },
    query: _v6,
    ..._v7
  }) {
    return (0, _v3.measureLatency)("patchAlbumVideoComment", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/albums/${_v3}/videos/${_v4}/comments/${_v5}?${(0, _v4.searchQueryString)(_v6)}&fields=${_v1.map(_v4.intoSnakeCase).join(",")}`, {
        ..._v7,
        method: "PATCH",
        body: JSON.stringify((0, _v4.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v4.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v4.deepCamelCase)(_v1);
    });
  }
  var _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  function _v9() {
    let {
        mutate: _v0
      } = (0, _v7.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v8.useGctlConfig)(),
      [_v5, _v6] = (0, _v2.useInternalState)();
    return [(0, _v1.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/albums/${_v0.where.albumId}/videos/${_v0.where.videoId}/comments/${_v0.where.commentId}${(0, _v2.serializeQuery)(_v0)}`, _v6({
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
  async function _v10({
    baseUrl: _v0,
    where: {
      videoId: _v1,
      commentId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v3.measureLatency)("deleteVideoComment", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/videos/${_v1}/comments/${_v2}?${(0, _v4.searchQueryString)(_v3)}`, {
        ..._v4,
        method: "DELETE"
      });
      if (!_v0.ok) throw new _v4.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v4.deepCamelCase)(_v1);
    });
  }
  async function _v11({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      videoId: _v3,
      commentId: _v4
    },
    query: _v5,
    ..._v6
  }) {
    return (0, _v3.measureLatency)("patchVideoComment", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/videos/${_v3}/comments/${_v4}?${(0, _v4.searchQueryString)(_v5)}&fields=${_v1.map(_v4.intoSnakeCase).join(",")}`, {
        ..._v6,
        method: "PATCH",
        body: JSON.stringify((0, _v4.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v4.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v4.deepCamelCase)(_v1);
    });
  }
  function _v12() {
    let {
        mutate: _v0
      } = (0, _v7.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v8.useGctlConfig)(),
      [_v5, _v6] = (0, _v2.useInternalState)();
    return [(0, _v1.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/videos/${_v0.where.videoId}/comments/${_v0.where.commentId}${(0, _v2.serializeQuery)(_v0)}`, _v11({
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
  async function _v13({
    baseUrl: _v0,
    where: {
      videoId: _v1,
      commentId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v3.measureLatency)("deleteVideoPrivateComment", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/videos/${_v1}/private_comments/${_v2}?${(0, _v4.searchQueryString)(_v3)}`, {
        ..._v4,
        method: "DELETE"
      });
      if (!_v0.ok) throw new _v4.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v4.deepCamelCase)(_v1);
    });
  }
  async function _v14({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      videoId: _v3,
      commentId: _v4
    },
    query: _v5,
    ..._v6
  }) {
    return (0, _v3.measureLatency)("patchVideoPrivateComment", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/videos/${_v3}/private_comments/${_v4}?${(0, _v4.searchQueryString)(_v5)}&fields=${_v1.map(_v4.intoSnakeCase).join(",")}`, {
        ..._v6,
        method: "PATCH",
        body: JSON.stringify((0, _v4.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v4.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v4.deepCamelCase)(_v1);
    });
  }
  function _v15() {
    let {
        mutate: _v0
      } = (0, _v7.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v8.useGctlConfig)(),
      [_v5, _v6] = (0, _v2.useInternalState)();
    return [(0, _v1.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/videos/${_v0.where.videoId}/private_comments/${_v0.where.commentId}${(0, _v2.serializeQuery)(_v0)}`, _v14({
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
  _v0.s(["useDeleteAlbumVideoComment", 0, function () {
    let {
        mutate: _v0
      } = (0, _v7.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v8.useGctlConfig)(),
      [_v5, _v6] = (0, _v2.useInternalState)();
    return [(0, _v1.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/albums/${_v0.where.albumId}/videos/${_v0.where.videoId}/comments/${_v0.where.commentId}${(0, _v2.serializeQuery)(_v0)}`, _v5({
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
  }, "usePatchAlbumVideoComment", 0, _v9], 0), _v0.i(0), _v0.s(["useDeleteVideoComment", 0, function () {
    let {
        mutate: _v0
      } = (0, _v7.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v8.useGctlConfig)(),
      [_v5, _v6] = (0, _v2.useInternalState)();
    return [(0, _v1.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/videos/${_v0.where.videoId}/comments/${_v0.where.commentId}${(0, _v2.serializeQuery)(_v0)}`, _v10({
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
  }, "usePatchVideoComment", 0, _v12], 0), _v0.s(["useDeleteVideoPrivateComment", 0, function () {
    let {
        mutate: _v0
      } = (0, _v7.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v8.useGctlConfig)(),
      [_v5, _v6] = (0, _v2.useInternalState)();
    return [(0, _v1.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/videos/${_v0.where.videoId}/private_comments/${_v0.where.commentId}${(0, _v2.serializeQuery)(_v0)}`, _v13({
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
  }, "usePatchVideoPrivateComment", 0, _v15], 0);
  var _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0);
  function _v22(_v0, _v1, _v2, _v3, _v4, _v5, _v6) {
    let [_v7, {
        loading: _v8,
        error: _v9
      }] = _v15(),
      {
        revalidateComments: _v10
      } = (0, _v21.usePrivateComments)(_v0, _v2, _v4, void 0, _v6),
      [_v11, _v12] = (0, _v1.useState)(null),
      _v13 = (0, _v19.getReviewPasswordHashFromCookie)(_v6),
      _v14 = async (_v0, _v1) => {
        _v12(_v0), await _v7({
          where: {
            videoId: _v0,
            commentId: (0, _v19.idFromUri)(_v0)
          },
          variables: _v1,
          select: ["metadata.connections.replies.total", "text", "richtext", "uri", "metadata.connections.user", "createdTime", "replies.text", "replies.richtext", "replies.createdTime", "replies.metadata.connections.user", "replies.uri", "replies.userName", "metadata", "timeCode", "userName"],
          query: {
            reviewId: _v6,
            password: _v13
          }
        }), _v15(_v0, _v1);
      },
      _v15 = (_v0, _v1) => {
        if (!_v8 && !_v9) {
          let _v0 = {};
          _v10(_v0 => _v0?.filter(_v0 => !!_v0).map(_v0 => ({
            ..._v0,
            data: _v0.data?.map(_v0 => _v0.uri === _v0 ? (_v0.richtext = _v0.richtext, _v0.timeCode = _v0.timeCode, {
              ..._v0,
              ..._v1
            }) : _v0)
          })));
        }
      };
    return {
      updateCommentText: async (_v0, _v1) => {
        _v14(_v0, {
          richtext: _v1
        });
      },
      resolveComment: async _v0 => {
        _v14(_v0, {
          status: "closed"
        });
      },
      unresolveComment: async _v0 => {
        _v14(_v0, {
          status: "open"
        });
      },
      updateCommentPosition: async (_v0, _v1) => {
        _v14(_v0, {
          coordinates: _v1
        });
      },
      editCommentLoading: _v8,
      editCommentError: _v9 ? {
        errorMessage: (0, _v16.translate)({
          singular: "Unable to edit comment",
          dictionary: {
            es: {
              singular: "No se puede editar el comentario"
            },
            "de-DE": {
              singular: "Kommentar kann nicht bearbeitet werden"
            },
            "fr-FR": {
              singular: "Impossible de modifier le commentaire"
            },
            "ja-JP": {
              singular: "コメントを編集できません"
            },
            "ko-KR": {
              singular: "댓글을 편집할 수 없습니다."
            },
            "pt-BR": {
              singular: "Não foi possível editar o comentário"
            },
            "zh-CN": {
              singular: "无法编辑评论"
            }
          }
        }),
        errorCommentId: _v11
      } : null
    };
  }
  _v0.s(["useEditComment", 0, function (_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7, _v8) {
    let {
      videoData: _v9
    } = (0, _v20.useVideoData)(_v0, _v5, _v6, _v7, _v8);
    return (_v1 ? function (_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7, _v8) {
      let [_v9, _v10] = _v12(),
        [_v11, _v12] = _v9(),
        {
          loading: _v13,
          error: _v14
        } = _v5 ? _v12 : _v10,
        {
          revalidateComments: _v15
        } = (0, _v21.usePublicComments)(_v0, _v2, _v4, _v5, void 0, _v7, _v8),
        [_v16, _v17] = (0, _v1.useState)(null),
        _v18 = (0, _v17.getPasswordHashFromCookie)(_v0),
        _v19 = async (_v0, _v1) => {
          _v17(_v0), await _v9({
            where: {
              videoId: _v0,
              commentId: (0, _v19.idFromUri)(_v0)
            },
            variables: {
              richtext: _v1
            },
            select: _v18.EDIT_PUBLIC_COMMENT_FIELDS,
            ...(0, _v19.getPublicCommentQuery)(_v18, _v7, _v8)
          }), _v21(_v0, {
            text: _v1
          });
        },
        _v20 = async (_v0, _v1) => {
          if (!_v5) return;
          let _v2 = (0, _v19.getShowcasePasswordHashFromCookie)(_v5);
          _v17(_v0), await _v11({
            where: {
              albumId: _v5,
              videoId: _v0,
              commentId: (0, _v19.idFromUri)(_v0)
            },
            variables: {
              richtext: _v1
            },
            select: _v18.EDIT_PUBLIC_COMMENT_FIELDS,
            ...(_v2 ? {
              query: {
                password: _v2
              }
            } : {})
          }), _v21(_v0, {
            text: _v1
          });
        },
        _v21 = (_v0, _v1) => {
          _v13 || _v14 || _v15(_v0 => _v0?.filter(_v0 => !!_v0).map(_v0 => ({
            ..._v0,
            data: _v0.data?.map(_v0 => _v0.uri === _v0 ? {
              ..._v0,
              ..._v1
            } : _v0)
          })));
        };
      return {
        updateCommentText: _v5 ? _v20 : _v19,
        resolveComment: () => null,
        unresolveComment: () => null,
        editCommentLoading: _v13,
        editCommentError: _v14 ? {
          errorMessage: (0, _v16.translate)({
            singular: "Unable to edit comment",
            dictionary: {
              es: {
                singular: "No se puede editar el comentario"
              },
              "de-DE": {
                singular: "Kommentar kann nicht bearbeitet werden"
              },
              "fr-FR": {
                singular: "Impossible de modifier le commentaire"
              },
              "ja-JP": {
                singular: "コメントを編集できません"
              },
              "ko-KR": {
                singular: "댓글을 편집할 수 없습니다."
              },
              "pt-BR": {
                singular: "Não foi possível editar o comentário"
              },
              "zh-CN": {
                singular: "无法编辑评论"
              }
            }
          }),
          errorCommentId: _v16
        } : null
      };
    } : _v22)(_v0, _v9, _v2, _v3, _v4, _v5, _v6, _v7, _v8);
  }, "useEditPrivateComment", 0, _v22], 0);
}