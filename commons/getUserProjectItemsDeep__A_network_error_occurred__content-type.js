{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  async function _v4({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2,
      projectId: _v3
    },
    query: _v4,
    ..._v5
  }) {
    return (0, _v2.measureLatency)("getUserProjectItemsDeep", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/projects/${_v3}/items/deep?${(0, _v3.searchQueryString)(_v4)}&fields=${_v1.map(_v3.intoSnakeCase).join(",")}`, {
        ..._v5,
        method: "GET"
      });
      if (!_v0.ok) throw new _v3.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v3.deepCamelCase)(_v1);
    });
  }
  var _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0);
  function _v11(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v10.useGctlConfig)();
    return (0, _v5.default)(_v2 ? `/users/${_v2.where.userId}/projects/${_v2.where.projectId}/items/deep${(0, _v7.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v4({
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
  function _v12() {
    let {
        mutate: _v0
      } = (0, _v6.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v10.useGctlConfig)(),
      [_v5, _v6] = (0, _v7.useInternalState)();
    return [(0, _v8.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/projects/${_v0.where.projectId}/items/deep${(0, _v7.serializeQuery)(_v0)}`, _v4({
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
  "true" === _v1.default.env.STORYBOOK && (0, _v7.assignMswData)(_v11, {
    endpoint: "/users/:userId/projects/:projectId/items/deep",
    method: "GET"
  }), "true" === _v1.default.env.STORYBOOK && (0, _v7.assignMswData)(_v12, {
    endpoint: "/users/:userId/projects/:projectId/items/deep",
    method: "GET"
  }), "true" === _v1.default.env.STORYBOOK && (0, _v7.assignMswData)(function (_v0, _v1) {
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
      return [`/users/${_v2.where.userId}/projects/${_v2.where.projectId}/items/deep?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v4({
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
    endpoint: "/users/:userId/projects/:projectId/items/deep",
    method: "GET"
  }), _v0.s(["useGetUserProjectItemsDeep", 0, _v11, "useGetUserProjectItemsDeepLazy", 0, _v12], 0);
  var _v13 = _v0.i(0),
    _v14 = _v0.i(0);
  function _v15(_v0) {
    let _v1 = {
      privacy: _v0.privacy
    };
    return "password" === _v0.privacy && (_v1.password = _v0.password), ("anybody" === _v0.privacy || "password" === _v0.privacy) && (_v1.allowComments = _v0.allowComments), _v1;
  }
  function _v16(_v0) {
    let _v1 = {
      embedPermission: _v0.embedPermission
    };
    if ("whitelist" === _v0.embedPermission) {
      let _v0 = _v0.newDomains.map(_v0 => _v0.value);
      _v1[_v0.isOverwritingDomains ? "embedDomains" : "embedDomainsAdd"] = _v0;
    }
    return _v1;
  }
  let _v17 = (_v0, _v1) => {
    if (!_v1.length) return;
    let _v2 = _v1[0].privacy?.[_v0];
    if (void 0 !== _v2) return _v1.every(_v0 => _v0.privacy?.[_v0] === _v2) ? _v2 : void 0;
  };
  _v0.s(["createClipsOnlyPayload", 0, function (_v0, _v1) {
    let _v2, _v3;
    return {
      ...(_v2 = _v0.privacy !== _v1.privacy, _v3 = _v0.allowComments !== _v1.allowComments, !_v2 && !_v3 ? {} : _v2 ? _v15(_v0) : {
        allowComments: _v0.allowComments
      }),
      ..._v16(_v0),
      ...(_v0.allowDownloads === _v1.allowDownloads ? {} : {
        allowDownloads: _v0.allowDownloads
      })
    };
  }, "createPrivacyOptions", 0, function (_v0) {
    return {
      ..._v15(_v0),
      ..._v16(_v0),
      allowDownloads: _v0.allowDownloads
    };
  }, "getDefaultFormValuesForClips", 0, _v0 => ({
    privacy: _v17("view", _v0),
    embedPermission: void 0,
    allowDownloads: (_v0 => {
      if (!_v0.length) return;
      let _v1 = _v0[0].privacy?.download;
      if (void 0 !== _v1) return _v0.every(_v0 => _v0.privacy?.download === _v1) ? "true" === String(_v1) : void 0;
    })(_v0),
    allowComments: _v17("comments", _v0),
    password: 1 === _v0.length && _v0[0].password ? _v0[0].password : "",
    newDomains: [],
    isOverwritingDomains: !1
  }), "getUpdatingToastId", 0, _v0 => `bulk-privacy-updating-${_v0}`, "launchDownloadUpgradePaywall", 0, () => {
    let _v0 = (0, _v13.buildUpgradePlanUrl)({
      paywallTrigger: "bulk_privacy_allow_downloads_upgrade_button",
      paywallLocation: "bulk_privacy_modal",
      paywallFeature: "privacy"
    }, {
      upsell: "privacy_settings_allow_downloads",
      integration: "none",
      feature: "privacy",
      paywall: "1"
    });
    (0, _v14.launchLateStagePaywallFromUpgradePlanUrl)(_v0) || window.open(_v0, "_blank");
  }, "launchEmbedUpgradePaywall", 0, () => {
    let _v0 = (0, _v13.buildUpgradePlanUrl)({
      paywallTrigger: "bulk_privacy_embed_whitelist_upgrade_button",
      paywallLocation: "bulk_privacy_modal",
      paywallFeature: "privacy"
    }, {
      upsell: "privacy_settings_embed_specific_domains",
      integration: "none",
      feature: "privacy",
      paywall: "1"
    });
    (0, _v14.launchLateStagePaywallFromUpgradePlanUrl)(_v0) || window.open(_v0, "_blank");
  }], 0);
}