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
  async function _v12({
    baseUrl: _v0,
    where: {
      category: _v1
    },
    ..._v2
  }) {
    return (0, _v10.measureLatency)("getMeCategory", "GET", async () => {
      let _v0 = await fetch(`${_v0}/me/categories/${_v1}`, {
        ..._v2,
        method: "GET"
      });
      if (!_v0.ok) throw new _v11.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v11.deepCamelCase)(_v1);
    });
  }
  async function _v13({
    baseUrl: _v0,
    where: {
      category: _v1
    },
    ..._v2
  }) {
    return (0, _v10.measureLatency)("putMeCategory", "PUT", async () => {
      let _v0 = await fetch(`${_v0}/me/categories/${_v1}`, {
        ..._v2,
        method: "PUT"
      });
      if (!_v0.ok) throw new _v11.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v11.deepCamelCase)(_v1);
    });
  }
  async function _v14({
    baseUrl: _v0,
    where: {
      category: _v1
    },
    ..._v2
  }) {
    return (0, _v10.measureLatency)("deleteMeCategory", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/me/categories/${_v1}`, {
        ..._v2,
        method: "DELETE"
      });
      if (!_v0.ok) throw new _v11.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v11.deepCamelCase)(_v1);
    });
  }
  var _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0);
  function _v18(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v17.useGctlConfig)();
    return (0, _v15.default)(_v2 ? `/me/categories/${_v2.where.category}${(0, _v9.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v12({
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
  }
  function _v19() {
    let {
        mutate: _v0
      } = (0, _v16.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v17.useGctlConfig)(),
      [_v5, _v6] = (0, _v9.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/categories/${_v0.where.category}${(0, _v9.serializeQuery)(_v0)}`, _v13({
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
  function _v20() {
    let {
        mutate: _v0
      } = (0, _v16.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v17.useGctlConfig)(),
      [_v5, _v6] = (0, _v9.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/categories/${_v0.where.category}${(0, _v9.serializeQuery)(_v0)}`, _v14({
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
  "true" === _v8.default.env.STORYBOOK && (0, _v9.assignMswData)(_v18, {
    endpoint: "/me/categories/:category",
    method: "GET"
  }), "true" === _v8.default.env.STORYBOOK && (0, _v9.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v16.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v17.useGctlConfig)(),
      [_v5, _v6] = (0, _v9.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/categories/${_v0.where.category}${(0, _v9.serializeQuery)(_v0)}`, _v12({
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
    endpoint: "/me/categories/:category",
    method: "GET"
  }), "true" === _v8.default.env.STORYBOOK && (0, _v9.assignMswData)(_v19, {
    endpoint: "/me/categories/:category",
    method: "PUT"
  }), "true" === _v8.default.env.STORYBOOK && (0, _v9.assignMswData)(_v20, {
    endpoint: "/me/categories/:category",
    method: "DELETE"
  }), _v0.s(["useDeleteMeCategory", 0, _v20, "useGetMeCategory", 0, _v18, "usePutMeCategory", 0, _v19], 0);
  var _v21 = _v0.i(0);
  async function _v22({
    baseUrl: _v0,
    where: {
      followUserId: _v1
    },
    ..._v2
  }) {
    return (0, _v10.measureLatency)("getMeFollowing", "GET", async () => {
      let _v0 = await fetch(`${_v0}/me/following/${_v1}`, {
        ..._v2,
        method: "GET"
      });
      if (!_v0.ok) throw new _v11.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v11.deepCamelCase)(_v1);
    });
  }
  async function _v23({
    baseUrl: _v0,
    where: {
      followUserId: _v1
    },
    query: _v2,
    ..._v3
  }) {
    return (0, _v10.measureLatency)("putMeFollowing", "PUT", async () => {
      let _v0 = await fetch(`${_v0}/me/following/${_v1}?${(0, _v11.searchQueryString)(_v2)}`, {
        ..._v3,
        method: "PUT"
      });
      if (!_v0.ok) throw new _v11.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v11.deepCamelCase)(_v1);
    });
  }
  async function _v24({
    baseUrl: _v0,
    where: {
      followUserId: _v1
    },
    query: _v2,
    ..._v3
  }) {
    return (0, _v10.measureLatency)("deleteMeFollowing", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/me/following/${_v1}?${(0, _v11.searchQueryString)(_v2)}`, {
        ..._v3,
        method: "DELETE"
      });
      if (!_v0.ok) throw new _v11.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v11.deepCamelCase)(_v1);
    });
  }
  function _v25(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v17.useGctlConfig)();
    return (0, _v15.default)(_v2 ? `/me/following/${_v2.where.followUserId}${(0, _v9.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v22({
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
  }
  function _v26() {
    let {
        mutate: _v0
      } = (0, _v16.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v17.useGctlConfig)(),
      [_v5, _v6] = (0, _v9.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/following/${_v0.where.followUserId}${(0, _v9.serializeQuery)(_v0)}`, _v23({
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
  function _v27() {
    let {
        mutate: _v0
      } = (0, _v16.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v17.useGctlConfig)(),
      [_v5, _v6] = (0, _v9.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/following/${_v0.where.followUserId}${(0, _v9.serializeQuery)(_v0)}`, _v24({
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
  async function _v28({
    baseUrl: _v0,
    where: {
      groupId: _v1
    },
    ..._v2
  }) {
    return (0, _v10.measureLatency)("getMeGroup", "GET", async () => {
      let _v0 = await fetch(`${_v0}/me/groups/${_v1}`, {
        ..._v2,
        method: "GET"
      });
      if (!_v0.ok) throw new _v11.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v11.deepCamelCase)(_v1);
    });
  }
  async function _v29({
    baseUrl: _v0,
    where: {
      groupId: _v1
    },
    ..._v2
  }) {
    return (0, _v10.measureLatency)("putMeGroup", "PUT", async () => {
      let _v0 = await fetch(`${_v0}/me/groups/${_v1}`, {
        ..._v2,
        method: "PUT"
      });
      if (!_v0.ok) throw new _v11.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v11.deepCamelCase)(_v1);
    });
  }
  async function _v30({
    baseUrl: _v0,
    where: {
      groupId: _v1
    },
    ..._v2
  }) {
    return (0, _v10.measureLatency)("deleteMeGroup", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/me/groups/${_v1}`, {
        ..._v2,
        method: "DELETE"
      });
      if (!_v0.ok) throw new _v11.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v11.deepCamelCase)(_v1);
    });
  }
  function _v31(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v17.useGctlConfig)();
    return (0, _v15.default)(_v2 ? `/me/groups/${_v2.where.groupId}${(0, _v9.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v28({
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
  }
  function _v32() {
    let {
        mutate: _v0
      } = (0, _v16.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v17.useGctlConfig)(),
      [_v5, _v6] = (0, _v9.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/groups/${_v0.where.groupId}${(0, _v9.serializeQuery)(_v0)}`, _v29({
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
  function _v33() {
    let {
        mutate: _v0
      } = (0, _v16.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v17.useGctlConfig)(),
      [_v5, _v6] = (0, _v9.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/groups/${_v0.where.groupId}${(0, _v9.serializeQuery)(_v0)}`, _v30({
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
  _v0.s(["deleteMeFollowing", 0, _v24, "getMeFollowing", 0, _v22, "putMeFollowing", 0, _v23], 0), "true" === _v8.default.env.STORYBOOK && (0, _v9.assignMswData)(_v25, {
    endpoint: "/me/following/:followUserId",
    method: "GET"
  }), "true" === _v8.default.env.STORYBOOK && (0, _v9.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v16.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v17.useGctlConfig)(),
      [_v5, _v6] = (0, _v9.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/following/${_v0.where.followUserId}${(0, _v9.serializeQuery)(_v0)}`, _v22({
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
    endpoint: "/me/following/:followUserId",
    method: "GET"
  }), "true" === _v8.default.env.STORYBOOK && (0, _v9.assignMswData)(_v26, {
    endpoint: "/me/following/:followUserId",
    method: "PUT"
  }), "true" === _v8.default.env.STORYBOOK && (0, _v9.assignMswData)(_v27, {
    endpoint: "/me/following/:followUserId",
    method: "DELETE"
  }), _v0.s(["useDeleteMeFollowing", 0, _v27, "useGetMeFollowing", 0, _v25, "usePutMeFollowing", 0, _v26], 0), "true" === _v8.default.env.STORYBOOK && (0, _v9.assignMswData)(_v31, {
    endpoint: "/me/groups/:groupId",
    method: "GET"
  }), "true" === _v8.default.env.STORYBOOK && (0, _v9.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v16.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v17.useGctlConfig)(),
      [_v5, _v6] = (0, _v9.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/groups/${_v0.where.groupId}${(0, _v9.serializeQuery)(_v0)}`, _v28({
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
    endpoint: "/me/groups/:groupId",
    method: "GET"
  }), "true" === _v8.default.env.STORYBOOK && (0, _v9.assignMswData)(_v32, {
    endpoint: "/me/groups/:groupId",
    method: "PUT"
  }), "true" === _v8.default.env.STORYBOOK && (0, _v9.assignMswData)(_v33, {
    endpoint: "/me/groups/:groupId",
    method: "DELETE"
  }), _v0.s(["useDeleteMeGroup", 0, _v33, "useGetMeGroup", 0, _v31, "usePutMeGroup", 0, _v32], 0), _v0.s(["FollowButton", 0, function ({
    user: _v0,
    source: _v1
  }) {
    var _v2, _v3;
    let _v4,
      _v5 = (0, _v2.useRef)(null),
      {
        updateFollow: _v6,
        isFollowingSubject: _v7
      } = (_v2 = _v0, _v3 = {
        source: _v1
      }, ((_v0, {
        isFollowing: _v1,
        canFollow: _v2,
        source: _v3
      }) => {
        let [_v4, _v5] = (0, _v2.useState)(_v1),
          {
            putHook: _v6,
            deleteHook: _v7,
            getHook: _v8
          } = (_v0 => {
            if (void 0 !== _v0.category) return {
              putHook: _v19,
              deleteHook: _v20,
              getHook: _v18
            };
            if (void 0 !== _v0.channelId) return {
              putHook: _v21.usePutMeChannel,
              deleteHook: _v21.useDeleteMeChannel,
              getHook: _v21.useGetMeChannel
            };
            if (void 0 !== _v0.groupId) return {
              putHook: _v32,
              deleteHook: _v33,
              getHook: _v31
            };
            if (void 0 !== _v0.followUserId) return {
              putHook: _v26,
              deleteHook: _v27,
              getHook: _v25
            };
            throw Error("Invalid where type");
          })(_v0),
          [_v9, {
            loading: _v10,
            error: _v11
          }] = _v6(),
          [_v12, {
            loading: _v13,
            error: _v14
          }] = _v7(),
          {
            mutate: _v15,
            isValidating: _v16,
            error: _v17
          } = _v8(() => _v2 ? {
            where: _v0,
            query: {
              source: _v3
            }
          } : null, {
            revalidateOnFocus: !1,
            shouldRetryOnError: !1
          });
        (0, _v2.useEffect)(() => {
          _v16 || _v5(!_v17);
        }, [_v17, _v16]);
        let _v18 = async () => {
            _v5(!_v4), await (_v4 ? _v12 : _v9)({
              where: _v0
            }), _v15();
          },
          _v19 = (0, _v7.useToast)();
        return (0, _v2.useEffect)(() => {
          _v11 && (_v5(!1), _v19({
            title: (0, _v6.translate)({
              singular: "Oops! Something went wrong. Please try again.",
              dictionary: {
                es: {
                  singular: "¡Ups, algo salió mal! Vuelve a intentarlo."
                },
                "de-DE": {
                  singular: "Hoppla! Etwas ist schief gelaufen. Bitte versuche es nochmal."
                },
                "fr-FR": {
                  singular: "Oups ! Une erreur s'est produite. Veuillez essayer à nouveau."
                },
                "ja-JP": {
                  singular: "エラーが発生しました。再度お試しください。"
                },
                "ko-KR": {
                  singular: "죄송합니다. 문제가 발생했습니다. 다시 시도해주세요."
                },
                "pt-BR": {
                  singular: "Oh! Alguma coisa deu errado. Por favor, tente novamente."
                },
                "zh-CN": {
                  singular: "哎呀，出错了。请重试。"
                }
              }
            }),
            status: "error"
          }));
        }, [_v11, _v19]), (0, _v2.useEffect)(() => {
          _v14 && (_v5(!0), _v19({
            title: (0, _v6.translate)({
              singular: "Oops! Something went wrong. Please try again.",
              dictionary: {
                es: {
                  singular: "¡Ups, algo salió mal! Vuelve a intentarlo."
                },
                "de-DE": {
                  singular: "Hoppla! Etwas ist schief gelaufen. Bitte versuche es nochmal."
                },
                "fr-FR": {
                  singular: "Oups ! Une erreur s'est produite. Veuillez essayer à nouveau."
                },
                "ja-JP": {
                  singular: "エラーが発生しました。再度お試しください。"
                },
                "ko-KR": {
                  singular: "죄송합니다. 문제가 발생했습니다. 다시 시도해주세요."
                },
                "pt-BR": {
                  singular: "Oh! Alguma coisa deu errado. Por favor, tente novamente."
                },
                "zh-CN": {
                  singular: "哎呀，出错了。请重试。"
                }
              }
            }),
            status: "error"
          }));
        }, [_v14, _v19]), {
          isFollowingSubject: _v4,
          isLoadingFollow: _v16 || _v10 || _v13,
          updateFollow: _v18
        };
      })({
        followUserId: Number((_v4 = (_v2?.uri ?? "").match(/[a-zA-Z0-9]+$/)) ? _v4[0] : "")
      }, {
        isFollowing: _v3?.defaultIsFollowing || _v2?.metadata?.interactions?.follow?.added,
        canFollow: !!_v2 && !_v2.metadata?.interactions?.block?.added,
        source: _v3?.source ?? ""
      })),
      [_v8, _v9] = (0, _v2.useState)(!1);
    return (0, _v2.useLayoutEffect)(() => {
      let _v0 = _v5.current;
      if (_v0) return _v0.addEventListener("mouseover", () => _v9(!0)), _v0.addEventListener("mouseout", () => _v9(!1)), () => {
        _v0.removeEventListener("mouseover", () => _v9(!0)), _v0.removeEventListener("mouseout", () => _v9(!1));
      };
    }, [_v5]), (0, _v1.jsx)(_v3.Button, {
      ref: _v5,
      size: "sm",
      w: "100%",
      onClick: _v0 => {
        _v0.preventDefault(), _v6();
      },
      variant: "secondary",
      children: _v7 ? _v8 ? (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v5.CloseXSmall, {}), (0, _v6.translate)({
          singular: "Unfollow",
          dictionary: {
            es: {
              singular: "Dejar de seguir"
            },
            "de-DE": {
              singular: "Nicht mehr folgen"
            },
            "fr-FR": {
              singular: "Ne plus suivre"
            },
            "ja-JP": {
              singular: "フォロー解除"
            },
            "ko-KR": {
              singular: "팔로우 취소"
            },
            "pt-BR": {
              singular: "Parar de seguir"
            },
            "zh-CN": {
              singular: "取消关注"
            }
          }
        })]
      }) : (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v4.CheckSmall, {}), (0, _v6.translate)({
          singular: "Following",
          dictionary: {
            es: {
              singular: "Siguiendo"
            },
            "de-DE": {
              singular: "Folgt"
            },
            "fr-FR": {
              singular: "Abonné"
            },
            "ja-JP": {
              singular: "フォロー中"
            },
            "ko-KR": {
              singular: "팔로잉"
            },
            "pt-BR": {
              singular: "Seguindo"
            },
            "zh-CN": {
              singular: "关注"
            }
          }
        })]
      }) : (0, _v1.jsx)(_v1.Fragment, {
        children: (0, _v6.translate)({
          singular: "Follow",
          dictionary: {
            es: {
              singular: "Seguir"
            },
            "de-DE": {
              singular: "Folgen"
            },
            "fr-FR": {
              singular: "Suivre"
            },
            "ja-JP": {
              singular: "フォロー"
            },
            "ko-KR": {
              singular: "팔로우"
            },
            "pt-BR": {
              singular: "Seguir"
            },
            "zh-CN": {
              singular: "关注"
            }
          }
        })
      })
    });
  }], 0), _v0.s(["LinkOrStaticElem", 0, function ({
    label: _v0,
    newTab: _v1,
    onClick: _v2,
    url: _v3,
    children: _v4
  }) {
    return _v3 ? (0, _v1.jsx)("a", {
      href: _v3,
      rel: "noopener noreferrer",
      "aria-label": _v0,
      onClick: _v2,
      target: _v1 ? "_blank" : "_self",
      children: _v4
    }) : (0, _v1.jsx)(_v1.Fragment, {
      children: _v4
    });
  }], 0);
  var _v34 = _v0.i(0),
    _v35 = _v0.i(0);
  _v0.s(["default", 0, function ({
    backgroundVideo: _v0,
    elemWidth: _v1,
    isVisible: _v2
  }) {
    let {
        aspectRatio: _v3,
        clipId: _v4,
        configUrl: _v5,
        endTime: _v6,
        firstFrameUrl: _v7,
        startTime: _v8,
        yPosition: _v9
      } = _v0,
      _v10 = (0, _v2.useRef)(null),
      _v11 = (0, _v2.useRef)(_v3),
      [_v12, _v13] = (0, _v2.useState)(!0),
      {
        player: _v14
      } = (0, _v35.usePlayer)(_v10, _v4, !0, _v5 || "", !0, "auto");
    (0, _v2.useEffect)(() => {
      let _v0 = () => {
        _v14.currentTime >= _v6 - .501 && (_v14.currentTime = _v8);
      };
      return _v14 && (_v14.currentTime = _v8, _v13(!1), _v11.current = _v14.videoWidth / _v14.videoHeight, _v14.on("timeupdate", _v0)), () => {
        _v14 && _v14.off("timeupdate", _v0);
      };
    }, [_v6, _v14, _v8]), (0, _v2.useEffect)(() => {
      _v14 && (_v2 ? Promise.resolve().then(() => _v14.play()).catch(_v0 => {
        if (_v0?.name === "NoFiles") return void _v13(!0);
        if (_v0 && "AbortError" !== _v0.name) throw _v0;
      }) : _v14.pause());
    }, [_v2, _v14]);
    let _v15 = `${-80 * (_v9 || 50) / 100}px`;
    return (0, _v1.jsxs)(_v34.Box, {
      w: _v1,
      h: 80,
      position: "absolute",
      overflow: "hidden",
      borderTopRadius: "drawer",
      children: [_v12 ? (0, _v1.jsx)(_v34.Box, {
        display: "block",
        sx: {
          video: {
            display: "block",
            width: "100%"
          }
        },
        position: "absolute",
        left: 0,
        right: 0,
        top: _v15,
        children: (0, _v1.jsx)("img", {
          src: _v7,
          alt: _v4.toString(),
          width: _v1,
          height: "auto"
        })
      }) : null, (0, _v1.jsx)(_v34.Box, {
        sx: {
          display: _v12 ? "none" : "block",
          video: {
            display: "block",
            width: "100%"
          }
        },
        position: "absolute",
        left: 0,
        right: 0,
        top: _v15,
        ref: _v10
      })]
    });
  }], 0), _v0.s(["T", 0, {
    followersCount: _v0 => (0, _v6.translate)({
      singular: "{COUNT} follower",
      plural: "{COUNT} followers",
      count: _v0,
      replacements: {
        COUNT: (0, _v6.humanize)(_v0 ?? 0)
      },
      dictionary: {
        es: {
          singular: "{COUNT} seguidor",
          plural: "{COUNT} seguidores"
        },
        "de-DE": {
          singular: "{COUNT} Follower",
          plural: "{COUNT} Follower"
        },
        "fr-FR": {
          singular: "{COUNT} abonné",
          plural: "{COUNT} abonnés"
        },
        "ja-JP": {
          singular: "{COUNT} 人のフォロワー",
          plural: "{COUNT} 人のフォロワー"
        },
        "ko-KR": {
          singular: "팔로워 {COUNT}명",
          plural: "팔로워 {COUNT}명"
        },
        "pt-BR": {
          singular: "{COUNT} seguidor",
          plural: "{COUNT} seguidores"
        },
        "zh-CN": {
          singular: "{COUNT} 名粉丝",
          plural: "{COUNT} 名粉丝"
        }
      }
    }),
    videosCount: _v0 => (0, _v6.translate)({
      singular: "{COUNT} video",
      plural: "{COUNT} videos",
      count: _v0,
      replacements: {
        COUNT: (0, _v6.humanize)(_v0 ?? 0)
      },
      dictionary: {
        "de-DE": {
          singular: "{COUNT} Video",
          plural: "{COUNT} Videos"
        },
        "fr-FR": {
          singular: "{COUNT} vidéo",
          plural: "{COUNT} vidéos"
        },
        "ja-JP": {
          singular: "{COUNT} 件の動画",
          plural: "{COUNT}件の動画"
        },
        "ko-KR": {
          singular: "동영상 {COUNT}개",
          plural: "동영상 {COUNT}개"
        },
        "pt-BR": {
          singular: "{COUNT} vídeo",
          plural: "{COUNT} vídeos"
        },
        "zh-CN": {
          singular: "{COUNT} 个视频",
          plural: "{COUNT} 个视频"
        }
      }
    })
  }], 0);
}