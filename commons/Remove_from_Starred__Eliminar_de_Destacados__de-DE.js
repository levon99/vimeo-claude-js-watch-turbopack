{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = (0, _v1.translate)({
      singular: "Remove from Starred",
      dictionary: {
        es: {
          singular: "Eliminar de Destacados"
        },
        "de-DE": {
          singular: "Aus Favoriten entfernen"
        },
        "fr-FR": {
          singular: "Supprimer des favoris"
        },
        "ja-JP": {
          singular: "スター付きから削除"
        },
        "ko-KR": {
          singular: '"별점 평가 완료"에서 삭제'
        },
        "pt-BR": {
          singular: "Remover dos favoritos"
        },
        "zh-CN": {
          singular: "从星标中移除"
        }
      }
    }),
    _v3 = (0, _v1.translate)({
      singular: "Add to Starred",
      dictionary: {
        es: {
          singular: "Agregar a Destacados"
        },
        "de-DE": {
          singular: "Zu Favoriten hinzufügen"
        },
        "fr-FR": {
          singular: "Ajouter aux favoris"
        },
        "ja-JP": {
          singular: "スター付きに追加"
        },
        "ko-KR": {
          singular: '"별점 평가 완료"에 추가'
        },
        "pt-BR": {
          singular: "Adicionar aos favoritos"
        },
        "zh-CN": {
          singular: "添加到带星标内容"
        }
      }
    });
  _v0.s(["ADD_TO_STARRED", 0, _v3, "EXPANDABLE_MENU_DATA_ID", 0, "starred_side_nav_toggle", "ItemType", 0, {
    Video: "video",
    Folder: "folder"
  }, "LIST_QUERY_FIELDS", 0, ["type", "video.canMoveToProject", "video.embed", "video.download", "video.metadata.canBeReplaced", "video.status", "video.metadata.interactions.edit.uri", "video.metadata.interactions.delete.uri", "video.metadata.interactions.invite.uri", "video.metadata.interactions.legalHold.uri", "video.name", "video.user.uri", "video.user.uploadQuota", "video.manageLink", "video.link", "video.uri", "video.privacy.download", "video.reviewPage", "folder.metadata.connections.items.uri", "folder.metadata.connections.parentFolder.uri", "folder.name", "folder.useParentSlackSettings", "folder.uri", "folder.privacy.view", "folder.isSlackNotificationEnabled", "folder.isPrivateToUser", "folder.metadata.connections.teamMembers.uri", "folder.metadata.interactions.edit", "folder.metadata.interactions.editSettings", "folder.metadata.interactions.delete", "folder.metadata.interactions.invite", "folder.reviewLinks.uri", "folder.slackIncomingWebhooksId"], "PER_PAGE_DATA", 0, 8, "REMOVE_FROM_STARRED", 0, _v2, "STARRED_ITEM_STATUS_ACTIVE", 0, "active"], 0);
  var _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  async function _v8({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2,
      teamMemberId: _v3,
      listUuid: _v4
    },
    query: _v5,
    ..._v6
  }) {
    return (0, _v6.measureLatency)("getUserMemberListItems", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/members/${_v3}/lists/${_v4}/items?${(0, _v7.searchQueryString)(_v5)}&fields=${_v1.map(_v7.intoSnakeCase).join(",")}`, {
        ..._v6,
        method: "GET"
      });
      if (!_v0.ok) throw new _v7.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v7.deepCamelCase)(_v1);
    });
  }
  async function _v9({
    baseUrl: _v0,
    variables: _v1,
    where: {
      userId: _v2,
      teamMemberId: _v3,
      listUuid: _v4
    },
    ..._v5
  }) {
    return (0, _v6.measureLatency)("postUserMemberListItems", "POST", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/members/${_v3}/lists/${_v4}/items`, {
        ..._v5,
        method: "POST",
        body: JSON.stringify((0, _v7.deepSnakeCase)(_v1))
      });
      if (!_v0.ok) throw new _v7.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v7.deepCamelCase)(_v1);
    });
  }
  async function _v10({
    baseUrl: _v0,
    where: {
      userId: _v1,
      teamMemberId: _v2,
      listUuid: _v3
    },
    query: _v4,
    ..._v5
  }) {
    return (0, _v6.measureLatency)("deleteUserMemberListItems", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v1}/members/${_v2}/lists/${_v3}/items?${(0, _v7.searchQueryString)(_v4)}`, {
        ..._v5,
        method: "DELETE"
      });
      if (!_v0.ok) throw new _v7.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v7.deepCamelCase)(_v1);
    });
  }
  var _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0);
  function _v16() {
    let {
        baseUrl: _v0,
        jwt: _v1,
        xVimeoPage: _v2,
        locale: _v3
      } = (0, _v15.useGctlConfig)(),
      [_v4, _v5] = (0, _v5.useInternalState)();
    return [(0, _v11.useCallback)(async _v0 => {
      _v5({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v10({
          ..._v0,
          baseUrl: _v0,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v1 ? `jwt ${_v1}` : "",
            "Vimeo-Page": `${_v2}`,
            "Accept-Language": _v3 ?? "en"
          }
        });
        _v5({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v5({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v0, _v2, _v1, _v3, _v5]), _v4];
  }
  "true" === _v4.default.env.STORYBOOK && (0, _v5.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v15.useGctlConfig)();
    return (0, _v12.default)(_v2 ? `/users/${_v2.where.userId}/members/${_v2.where.teamMemberId}/lists/${_v2.where.listUuid}/items${(0, _v5.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v8({
      ..._v2,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      baseUrl: _v3
    }) : null, _v1);
  }, {
    endpoint: "/users/:userId/members/:teamMemberId/lists/:listUuid/items",
    method: "GET"
  }), "true" === _v4.default.env.STORYBOOK && (0, _v5.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v13.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v15.useGctlConfig)(),
      [_v5, _v6] = (0, _v5.useInternalState)();
    return [(0, _v11.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/members/${_v0.where.teamMemberId}/lists/${_v0.where.listUuid}/items${(0, _v5.serializeQuery)(_v0)}`, _v8({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }));
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
  }, {
    endpoint: "/users/:userId/members/:teamMemberId/lists/:listUuid/items",
    method: "GET"
  }), "true" === _v4.default.env.STORYBOOK && (0, _v5.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v15.useGctlConfig)();
    return (0, _v14.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/users/${_v2.where.userId}/members/${_v2.where.teamMemberId}/lists/${_v2.where.listUuid}/items?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v8({
      ..._v2,
      baseUrl: _v3,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      query: {
        ..._v2.query,
        page: _v1 + 1
      }
    }) : null, _v1);
  }, {
    endpoint: "/users/:userId/members/:teamMemberId/lists/:listUuid/items",
    method: "GET"
  }), "true" === _v4.default.env.STORYBOOK && (0, _v5.assignMswData)(function () {
    let {
        baseUrl: _v0,
        jwt: _v1,
        xVimeoPage: _v2,
        locale: _v3
      } = (0, _v15.useGctlConfig)(),
      [_v4, _v5] = (0, _v5.useInternalState)();
    return [(0, _v11.useCallback)(async _v0 => {
      _v5({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v9({
          ..._v0,
          baseUrl: _v0,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v1 ? `jwt ${_v1}` : "",
            "Vimeo-Page": `${_v2}`,
            "Accept-Language": _v3 ?? "en"
          }
        });
        _v5({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v5({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v0, _v2, _v1, _v3, _v5]), _v4];
  }, {
    endpoint: "/users/:userId/members/:teamMemberId/lists/:listUuid/items",
    method: "POST"
  }), "true" === _v4.default.env.STORYBOOK && (0, _v5.assignMswData)(_v16, {
    endpoint: "/users/:userId/members/:teamMemberId/lists/:listUuid/items",
    method: "DELETE"
  }), _v0.s(["useDeleteUserMemberListItems", 0, _v16], 0);
}