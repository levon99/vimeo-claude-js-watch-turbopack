{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  async function _v5({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2
    },
    ..._v3
  }) {
    return (0, _v3.measureLatency)("getUserSettingsBillingStorageLimitLocking", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/settings/billing/storage_limit_locking?fields=${_v1.map(_v4.intoSnakeCase).join(",")}`, {
        ..._v3,
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
    _v9 = _v0.i(0);
  function _v10(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v9.useGctlConfig)();
    return (0, _v6.default)(_v2 ? `/users/${_v2.where.userId}/settings/billing/storage_limit_locking${(0, _v8.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v5({
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
  "true" === _v2.default.env.STORYBOOK && (0, _v8.assignMswData)(_v10, {
    endpoint: "/users/:userId/settings/billing/storage_limit_locking",
    method: "GET"
  }), "true" === _v2.default.env.STORYBOOK && (0, _v8.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v7.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v9.useGctlConfig)(),
      [_v5, _v6] = (0, _v8.useInternalState)();
    return [(0, _v1.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/settings/billing/storage_limit_locking${(0, _v8.serializeQuery)(_v0)}`, _v5({
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
    endpoint: "/users/:userId/settings/billing/storage_limit_locking",
    method: "GET"
  });
  var _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0);
  let _v14 = {
      anybody: "public",
      cold_storage: "locked",
      disable: "hide_from_vimeo",
      nobody: "private",
      password: "password",
      purgatory: "locked",
      team: "team",
      unlisted: "unlisted"
    },
    _v15 = _v0 => ({
      ..._v0,
      isColdStorage: !0,
      privacy: {
        ..._v0.privacy,
        view: "purgatory"
      }
    });
  _v0.s(["applyStorageLimitLockingStateToVideo", 0, (_v0, _v1) => _v0.uri && _v1.has(_v0.uri) ? _v15(_v0) : _v0, "getStorageLimitLockingPrivacyFilterValue", 0, _v0 => _v0 && _v0 in _v14 ? _v14[_v0] : null, "useStorageLimitLocking", 0, ({
    userId: _v0
  }) => {
    let _v1 = (() => {
        let _v0 = (0, _v13.useViewer)(),
          {
            settings: _v1
          } = (0, _v11.useOrionSettings)();
        return (_v1.enable_cold_storage_library_ux ?? !1) && "free" === (0, _v12.deriveViewerAuthStatus)(_v0);
      })(),
      {
        data: _v2,
        isLoading: _v3
      } = _v10(() => _v0 && _v1 ? {
        where: {
          userId: _v0
        },
        select: ["lockedVideoCount", "lockedVideoIds", "lockedVideosPreview"]
      } : null, {
        revalidateOnFocus: !1
      }),
      _v4 = (0, _v1.useMemo)(() => ({
        lockedVideoUris: new Set((_v2?.lockedVideoIds ?? []).map(_v0 => `/videos/${_v0}`)),
        lockedVideosPreview: (_v2?.lockedVideosPreview ?? []).map(_v0 => _v15({
          createdTime: "",
          filesSize: {
            fileSizeType: "UPLOAD",
            numVersions: 0,
            totalSize: 0
          },
          isColdStorage: !1,
          name: _v0.title,
          pictures: {
            sizes: _v0.thumbnail ? [{
              link: _v0.thumbnail
            }] : []
          },
          privacy: {
            add: !1,
            allowShareLink: !1,
            comments: "nobody",
            download: !1,
            embed: "private",
            view: "nobody"
          },
          uri: _v0.uri
        })),
        lockedVideoIdsTruncated: (_v2?.lockedVideoCount ?? 0) > (_v2?.lockedVideoIds?.length ?? 0)
      }), [_v2]);
    return {
      hasResolvedAllPages: !_v1 || !!_v2,
      isEnabled: _v1,
      isLoading: _v1 && !_v2 && _v3,
      isOverLimit: (_v2?.lockedVideoCount ?? 0) > 0,
      lockedVideoCount: _v2?.lockedVideoCount ?? 0,
      lockedVideoUris: _v4.lockedVideoUris,
      lockedVideosPreview: _v4.lockedVideosPreview,
      lockedVideoIdsTruncated: _v4.lockedVideoIdsTruncated
    };
  }], 0);
}