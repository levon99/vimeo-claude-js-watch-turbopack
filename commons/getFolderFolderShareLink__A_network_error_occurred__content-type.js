{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  async function _v6({
    baseUrl: _v0,
    select: _v1,
    where: {
      projectId: _v2
    },
    ..._v3
  }) {
    return (0, _v4.measureLatency)("getFolderFolderShareLink", "GET", async () => {
      let _v0 = await fetch(`${_v0}/folders/${_v2}/folder_share_link?fields=${_v1.map(_v5.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "GET"
      });
      if (!_v0.ok) throw new _v5.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v5.deepCamelCase)(_v1);
    });
  }
  async function _v7({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      projectId: _v3
    },
    ..._v4
  }) {
    return (0, _v4.measureLatency)("postFolderFolderShareLink", "POST", async () => {
      let _v0 = await fetch(`${_v0}/folders/${_v3}/folder_share_link?fields=${_v1.map(_v5.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "POST",
        body: JSON.stringify((0, _v5.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v5.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v5.deepCamelCase)(_v1);
    });
  }
  async function _v8({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      projectId: _v3
    },
    ..._v4
  }) {
    return (0, _v4.measureLatency)("patchFolderFolderShareLink", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/folders/${_v3}/folder_share_link?fields=${_v1.map(_v5.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "PATCH",
        body: JSON.stringify((0, _v5.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v5.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v5.deepCamelCase)(_v1);
    });
  }
  var _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0);
  function _v12() {
    let {
        mutate: _v0
      } = (0, _v10.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v11.useGctlConfig)(),
      [_v5, _v6] = (0, _v3.useInternalState)();
    return [(0, _v1.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/folders/${_v0.where.projectId}/folder_share_link${(0, _v3.serializeQuery)(_v0)}`, _v7({
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
  _v0.s(["useGetFolderFolderShareLink", 0, function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v11.useGctlConfig)();
    return (0, _v9.default)(_v2 ? `/folders/${_v2.where.projectId}/folder_share_link${(0, _v3.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v6({
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
  }, "usePatchFolderFolderShareLink", 0, function () {
    let {
        mutate: _v0
      } = (0, _v10.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v11.useGctlConfig)(),
      [_v5, _v6] = (0, _v3.useInternalState)();
    return [(0, _v1.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/folders/${_v0.where.projectId}/folder_share_link${(0, _v3.serializeQuery)(_v0)}`, _v8({
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
  }, "usePostFolderFolderShareLink", 0, _v12], 0);
  var _v13 = _v0.i(0),
    _v14 = _v0.i(0);
  let _v15 = ["url", "expiresOn", "intervalDays", "hasExpiration", "revokedAt"],
    _v16 = _v0 => `${_v2.safeWindow?.location.origin ?? ""}${_v0}`,
    _v17 = (_v0, _v1) => {
      let _v2 = _v1.indexOf("?");
      return -1 === _v2 ? _v0 : `${_v0}${_v1.slice(_v2)}`;
    },
    _v18 = async _v0 => {
      try {
        if (_v2.safeNavigator?.clipboard?.writeText) return await _v2.safeNavigator.clipboard.writeText(_v0), !0;
      } catch {}
      return (0, _v14.default)(_v0);
    },
    _v19 = async (_v0, _v1) => !!(await _v18(_v0)) || _v18(_v1);
  _v0.s(["FOLDER_SHARE_LINK_FIELDS", 0, _v15, "useCopyFolderShareLink", 0, () => {
    let _v0 = (0, _v13.useOrionSetting)("sharing_folders"),
      [_v1, {
        data: _v2,
        error: _v3,
        loading: _v4,
        called: _v5
      }] = _v12(),
      _v6 = (0, _v1.useRef)(null),
      _v7 = (0, _v1.useRef)(null),
      [_v8, _v9] = (0, _v1.useState)(null),
      _v10 = (0, _v1.useMemo)(() => _v2?.url != null ? _v16(_v2.url) : null, [_v2]),
      _v11 = (0, _v1.useCallback)(_v0 => {
        _v6.current = _v0, _v1({
          where: {
            projectId: _v0.folderId
          },
          select: _v15
        });
      }, [_v1]),
      _v12 = (0, _v1.useCallback)(() => {
        let _v0 = _v7.current;
        null !== _v0 && (_v7.current = null, _v11(_v0));
      }, [_v11]);
    (0, _v1.useEffect)(() => {
      let _v0 = _v6.current;
      if (null === _v0 || !_v5 || _v4) return;
      _v6.current = null;
      let _v1 = null == _v3 && null != _v2 && null != _v2.revokedAt,
        _v2 = null != _v3 || _v2?.url == null || _v1 ? null : _v17(_v16(_v2.url), _v0.canonicalUrl);
      null !== _v2 && _v9(_v0.folderId), (_v2 ? _v19(_v2, _v0.canonicalUrl) : _v18(_v0.canonicalUrl)).then(_v0 => _v0.onComplete?.(_v0)), _v12();
    }, [_v5, _v4, _v3, _v2, _v12]);
    let _v13 = (0, _v1.useCallback)((_v0, _v1, _v2) => {
      if (!_v0) return void _v18(_v1).then(_v0 => _v2?.(_v0));
      if (null != _v10 && _v8 === _v0) return void _v19(_v17(_v10, _v1), _v1).then(_v0 => _v2?.(_v0));
      let _v3 = {
        folderId: _v0,
        canonicalUrl: _v1,
        onComplete: _v2
      };
      null === _v6.current ? _v11(_v3) : _v7.current = _v3;
    }, [_v0, _v10, _v8, _v11]);
    return {
      isEnabled: _v0,
      shareUrl: _v10,
      linkFolderId: _v8,
      copyFolderShareLink: _v13,
      copyCanonicalUrl: (0, _v1.useCallback)((_v0, _v1) => {
        _v18(_v0).then(_v0 => _v1?.(_v0));
      }, [])
    };
  }, "withOrigin", 0, _v16], 0);
}