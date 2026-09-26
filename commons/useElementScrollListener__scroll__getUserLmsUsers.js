{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["useElementScrollListener", 0, ({
    bottomOffset: _v0,
    handler: _v1
  }) => {
    let [_v2, _v3] = (0, _v1.useState)(null);
    return (0, _v1.useEffect)(() => {
      if (!_v2) return;
      let _v0 = () => {
        _v2.scrollHeight - _v2.offsetHeight - _v2.scrollTop <= _v0 && _v1();
      };
      return _v2.addEventListener("scroll", _v0), () => {
        _v2?.removeEventListener("scroll", _v0);
      };
    }, [_v0, _v2, _v1]), _v3;
  }], 0);
  var _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  async function _v5({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v3.measureLatency)("getUserLmsUsers", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/lms/users?${(0, _v4.searchQueryString)(_v3)}&fields=${_v1.map(_v4.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v4.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v4.deepCamelCase)(_v1);
    });
  }
  var _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0);
  function _v11() {
    let {
        mutate: _v0
      } = (0, _v7.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v10.useGctlConfig)(),
      [_v5, _v6] = (0, _v8.useInternalState)();
    return [(0, _v1.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/lms/users${(0, _v8.serializeQuery)(_v0)}`, _v5({
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
  }
  "true" === _v2.default.env.STORYBOOK && (0, _v8.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v10.useGctlConfig)();
    return (0, _v6.default)(_v2 ? `/users/${_v2.where.userId}/lms/users${(0, _v8.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v5({
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
    endpoint: "/users/:userId/lms/users",
    method: "GET"
  }), "true" === _v2.default.env.STORYBOOK && (0, _v8.assignMswData)(_v11, {
    endpoint: "/users/:userId/lms/users",
    method: "GET"
  }), "true" === _v2.default.env.STORYBOOK && (0, _v8.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v10.useGctlConfig)();
    return (0, _v9.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/users/${_v2.where.userId}/lms/users?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v5({
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
    endpoint: "/users/:userId/lms/users",
    method: "GET"
  }), _v0.s(["useGetLearners", 0, (_v0, _v1 = "", _v2) => {
    let [_v3, _v4] = (0, _v1.useState)([]),
      [_v5, _v6] = (0, _v1.useState)(0),
      _v7 = (0, _v1.useRef)(0),
      [_v8, {
        data: _v9,
        loading: _v10,
        error: _v11
      }] = _v11(),
      [_v12, _v13] = (0, _v1.useState)(_v1),
      [_v14, _v15] = (0, _v1.useState)(!1),
      _v16 = (0, _v1.useRef)(!1),
      _v17 = (0, _v1.useRef)(!1),
      _v18 = (0, _v1.useRef)(!0),
      _v19 = (0, _v1.useRef)(!1),
      _v20 = (0, _v1.useRef)(null);
    (0, _v1.useEffect)(() => {
      _v20.current = (_v0, _v1 = "") => _v8({
        where: {
          userId: _v0
        },
        select: ["learnerId", "learnerIds", "user.name", "user.pictures.sizes", "uri"],
        query: {
          perPage: 25,
          page: _v0,
          search: _v1 ?? null,
          filter: _v2
        }
      });
    }, [_v8, _v0]), (0, _v1.useEffect)(() => {
      _v19.current || (_v19.current = !0, _v20.current?.(1, _v12));
    }, []);
    let _v21 = (0, _v1.useCallback)(_v0 => {
        _v0 !== _v12 && (_v13(_v0), _v18.current = !0, _v20.current?.(1, _v0));
      }, [_v12]),
      _v22 = (0, _v1.useCallback)(() => {
        _v16.current || _v10 || (_v16.current = !0, _v20.current?.(_v5 + 1, _v12));
      }, [_v5, _v10, _v12]),
      _v23 = (0, _v1.useCallback)(() => {
        _v17.current || _v10 || (_v17.current = !0, _v20.current?.(1, _v12));
      }, [_v10, _v12]);
    return (0, _v1.useEffect)(() => {
      if (_v9) {
        if (_v9.total !== _v7.current && (_v7.current = _v9.total), (_v17.current || _v18.current) && 1 === _v9.page) {
          _v4(() => _v9.data), _v6(_v9.page), _v15(_v9.page < _v9.total / 25), _v16.current = !1, _v17.current = !1, _v18.current = !1;
          return;
        }
        _v16.current && _v9.page !== _v5 && (_v4(_v0 => _v0.concat(_v9.data)), _v6(_v9.page), _v15(_v9.page < _v9.total / 25), _v16.current = !1);
      }
    }, [_v5, _v9]), (0, _v1.useMemo)(() => ({
      isLoading: _v10,
      isQueryLoading: _v18.current,
      isMoreLoading: _v16.current,
      isReloadLoading: _v17.current,
      learners: _v3,
      error: _v11,
      canLoadMore: _v14,
      loadMore: _v22,
      reload: _v23,
      updateQuery: _v21,
      query: _v12,
      learnersTotalCount: _v7.current
    }), [_v14, _v11, _v22, _v23, _v10, _v12, _v21, _v3]);
  }], 0);
}