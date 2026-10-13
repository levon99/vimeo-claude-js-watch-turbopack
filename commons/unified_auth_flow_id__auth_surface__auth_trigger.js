{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = "unified_auth_flow_id",
    _v3 = "auth_surface",
    _v4 = "auth_trigger",
    _v5 = "auth_origin_route",
    _v6 = "auth_surface_type",
    _v7 = "auth_initial_intent",
    _v8 = "auth_attribution_version",
    _v9 = "auth_entry_timestamp",
    _v10 = [_v2, _v3, _v4, _v5, _v6, _v7, "auth_attribution_status", _v8, _v9],
    _v11 = _v1.default.entryPairs,
    _v12 = _v1.default.originRoutes,
    _v13 = ["modal", "page", "iframe", "unknown"],
    _v14 = ["join", "login", "unknown"],
    _v15 = /^[0-9]+$/,
    _v16 = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
    _v17 = _v0 => "string" == typeof _v0 && Object.prototype.hasOwnProperty.call(_v11, _v0),
    _v18 = _v0 => "string" == typeof _v0 && _v16.test(_v0),
    _v19 = _v0 => "string" == typeof _v0 && _v13.includes(_v0),
    _v20 = _v0 => "string" == typeof _v0 && _v14.includes(_v0),
    _v21 = (_v0, _v1) => {
      if ("string" != typeof _v0 || "string" != typeof _v1) return null;
      for (let _v0 of Object.values(_v11)) if (_v0[0] === _v0 && _v0[1] === _v1) return {
        surface: _v0,
        trigger: _v1
      };
      return null;
    },
    _v22 = _v0 => "string" == typeof _v0 && _v12.includes(_v0),
    _v23 = _v0 => {
      if (null == _v0 || "" === _v0) return {
        state: "absent",
        value: null
      };
      let _v1 = "number" == typeof _v0 ? String(_v0) : _v0;
      if ("string" != typeof _v1 || !_v15.test(_v1)) return {
        state: "invalid",
        value: null
      };
      let _v2 = Number(_v1);
      return _v2 <= 0 || _v2 > 0 ? {
        state: "invalid",
        value: null
      } : {
        state: "valid",
        value: _v2
      };
    },
    _v24 = _v0 => "string" == typeof _v0 && "" !== _v0 ? _v0 : null,
    _v25 = _v0 => ({
      flowId: null,
      surface: null,
      trigger: null,
      originRoute: null,
      surfaceType: "unknown",
      initialIntent: "unknown",
      status: "expired",
      version: 1,
      entryTimestamp: _v0
    }),
    _v26 = (_v0, _v1) => {
      let _v2 = null == _v0.flowId || "" === _v0.flowId,
        _v3 = !_v2 && !_v18(_v0.flowId),
        _v4 = !_v2 && _v18(_v0.flowId) ? _v0.flowId : null,
        _v5 = null != _v0.surface && "" !== _v0.surface || null != _v0.trigger && "" !== _v0.trigger,
        _v6 = _v21(_v24(_v0.surface), _v24(_v0.trigger)),
        _v7 = _v5 && null === _v6,
        _v8 = null == _v0.originRoute || "" === _v0.originRoute,
        _v9 = !_v8 && ("string" != typeof _v0.originRoute || !_v22(_v0.originRoute)),
        _v10 = !_v8 && _v22(_v0.originRoute) ? _v0.originRoute : null,
        _v11 = _v19(_v0.surfaceType) ? _v0.surfaceType : "unknown",
        _v12 = _v20(_v0.initialIntent) ? _v0.initialIntent : "unknown",
        _v13 = _v23(_v0.entryTimestamp),
        _v14 = _v23(_v0.version),
        _v15 = null !== _v13.value && _v13.value > _v1 + 0,
        _v16 = null !== _v13.value && _v13.value < _v1 - 0,
        _v17 = "invalid" === _v14.state || "valid" === _v14.state && 1 !== _v14.value,
        _v18 = null === _v4 || "valid" !== _v13.state || _v15 || _v16 ? null : _v4,
        _v19 = {
          flowId: null,
          surface: _v6?.surface ?? null,
          trigger: _v6?.trigger ?? null,
          originRoute: _v10,
          surfaceType: _v11,
          initialIntent: _v12,
          status: "unknown",
          version: 1,
          entryTimestamp: _v13.value
        },
        _v20 = _v3 || _v17 || "invalid" === _v13.state || _v15 || _v9 || _v5 && _v8;
      return _v5 ? _v16 ? _v25(_v13.value) : _v20 || _v7 || "valid" !== _v14.state || "valid" !== _v13.state ? {
        ..._v19,
        flowId: _v18,
        status: "invalid"
      } : {
        ..._v19,
        flowId: _v18,
        status: "explicit"
      } : _v16 ? _v25(_v13.value) : _v20 ? {
        ..._v19,
        flowId: _v18,
        status: "invalid"
      } : {
        ..._v19,
        flowId: _v18,
        status: "unknown"
      };
    },
    _v27 = _v0 => {
      let {
        surface: _v1,
        trigger: _v2
      } = (_v0 => {
        let [_v1, _v2] = _v11[_v0];
        return {
          surface: _v1,
          trigger: _v2
        };
      })(_v0.entry);
      return _v26({
        flowId: _v0.flowId,
        surface: _v1,
        trigger: _v2,
        originRoute: _v0.originRoute,
        surfaceType: _v0.surfaceType,
        initialIntent: _v0.initialIntent,
        version: 1,
        entryTimestamp: _v0.entryTimestamp
      }, _v0.entryTimestamp ?? Date.now());
    },
    _v28 = _v0 => {
      let _v1,
        _v2 = [],
        _v3 = _v26(_v0, Date.now()),
        _v4 = _v35(_v0),
        _v5 = !_v4 && ("invalid" === _v0.status || "invalid" === _v3.status),
        _v6 = _v4 ? _v0 : _v3;
      _v18(_v6.flowId) && _v2.push([_v2, _v6.flowId]);
      let _v7 = _v21(_v6.surface, _v6.trigger);
      return null !== _v7 && (_v2.push([_v3, _v7.surface]), _v2.push([_v4, _v7.trigger])), _v22(_v6.originRoute) && _v2.push([_v5, _v6.originRoute]), _v2.push([_v6, _v19(_v6.surfaceType) ? _v6.surfaceType : "unknown"]), _v2.push([_v7, _v20(_v6.initialIntent) ? _v6.initialIntent : "unknown"]), _v2.push([_v8, _v5 ? "__invalid__" : String(1)]), null !== (_v1 = _v6.entryTimestamp) && Number.isSafeInteger(_v1) && _v1 > 0 && _v1 <= 0 && _v2.push([_v9, String(_v6.entryTimestamp)]), _v2;
    },
    _v29 = _v0 => {
      let _v1 = new URLSearchParams();
      for (let [_v0, _v1] of _v28(_v0)) _v1.set(_v0, _v1);
      return _v1.toString();
    },
    _v30 = new Map([["/home", "/home"], ["/watch", "/watch"], ["/my-feed", "/my-feed"], ["/upgrade-plan", "/upgrade-plan"], ["/pricing", "/pricing"], ["/create", "/create"], ["/create/templates", "/create/templates"], ["/upload", "/upload"], ["/record/start-recording", "/record/start-recording"], ["/stats", "/stats"], ["/help", "/help"], ["/stock", "/stock"], ["/ondemand", "/ondemand"], ["/portfolio", "/portfolio"], ["/group", "/group"], ["/amp", "/amp"]]),
    _v31 = new Map([["/video/[clipId]", "/video/:clipId"], ["/video/[clipId]/[clipHash]", "/video/:clipId"], ["/[username]", "/:username"], ["/profile/[userId]", "/:username"], ["/user/[userId]", "/user/:userId"], ["/channels/[channel]", "/channels/:channel"], ["/search/[[...slug]]", "/search"], ["/create/templates/[[...params]]", "/create/templates"], ["/apps/[appId]/create/[...slug]", "/create/templates"], ["/showcase/[albumId]", "/showcase/:albumId"], ["/event/[...params]", "/event/:eventId"], ["/reviews/[reviewId]/videos/[clipId]", "/reviews/:reviewId/videos/:clipId"]]),
    _v32 = [[/^\/video\/\d+$/, "/video/:clipId"], [/^\/video\/\d+\/[0-9a-fA-F]+$/, "/video/:clipId"], [/^\/reviews\/[^/]+\/videos\/[^/]+$/, "/reviews/:reviewId/videos/:clipId"], [/^\/showcase\/[^/]+$/, "/showcase/:albumId"], [/^\/channels\/[^/]+$/, "/channels/:channel"], [/^\/event\/[^/]+$/, "/event/:eventId"], [/^\/user\/[^/]+$/, "/user/:userId"], [/^\/search(?:\/.*)?$/, "/search"], [/^\/create\/templates(?:\/.*)?$/, "/create/templates"], [/^\/apps\/\d+\/create\/templates(?:\/.*)?$/, "/create/templates"], [/^\/\d+$/, "/:clipId"], [/^\/\d+\/[0-9a-fA-F]+$/, "/:clipId"]],
    _v33 = _v0 => {
      let _v1 = _v0.indexOf("#"),
        _v2 = -1 === _v1 ? "" : _v0.slice(_v1),
        _v3 = -1 === _v1 ? _v0 : _v0.slice(0, _v1),
        _v4 = _v3.indexOf("?");
      return {
        path: -1 === _v4 ? _v3 : _v3.slice(0, _v4),
        search: -1 === _v4 ? "" : _v3.slice(_v4 + 1),
        hash: _v2
      };
    },
    _v34 = _v0 => {
      if ("" === _v0) return _v0;
      let _v1 = _v0.split("&"),
        _v2 = _v1.filter(_v0 => {
          let _v1, _v2;
          return !(null !== (_v2 = (_v0 => {
            try {
              return decodeURIComponent(_v0.replace(/\+/g, " "));
            } catch {
              return null;
            }
          })(-1 === (_v1 = _v0.indexOf("=")) ? _v0 : _v0.slice(0, _v1))) && _v10.includes(_v2));
        });
      return _v2.length === _v1.length ? _v0 : _v2.join("&");
    },
    _v35 = _v0 => {
      if (null != _v0.flowId && "" !== _v0.flowId) return !1;
      let _v1 = _v23(_v0.version);
      return "valid" === _v1.state && 1 === _v1.value && "absent" === _v23(_v0.entryTimestamp).state && null !== _v21(_v24(_v0.surface), _v24(_v0.trigger)) && _v22(_v0.originRoute);
    },
    _v36 = (_v0, _v1) => _v26({
      flowId: crypto.randomUUID(),
      surface: _v0.surface,
      trigger: _v0.trigger,
      originRoute: _v0.originRoute,
      surfaceType: _v0.surfaceType,
      initialIntent: _v0.initialIntent,
      version: 1,
      entryTimestamp: _v1
    }, _v1);
  _v0.s(["adoptAuthAttribution", 0, (_v0, _v1, _v2) => {
    let _v3,
      _v4 = Date.now(),
      _v5 = {
        flowId: (_v3 = "string" == typeof _v0 ? new URLSearchParams(_v0) : _v0).get(_v2),
        surface: _v3.get(_v3),
        trigger: _v3.get(_v4),
        originRoute: _v3.get(_v5),
        surfaceType: _v3.get(_v6),
        initialIntent: _v3.get(_v7),
        version: _v3.get(_v8),
        entryTimestamp: _v3.get(_v9)
      },
      _v6 = _v26(_v5, _v4);
    return "explicit" === _v6.status ? null !== _v6.flowId ? _v6 : {
      ..._v6,
      flowId: crypto.randomUUID()
    } : ("invalid" === _v6.status || "unknown" === _v6.status) && null !== _v6.flowId ? _v6 : _v35(_v5) ? _v36({
      surface: _v6.surface,
      trigger: _v6.trigger,
      originRoute: _v6.originRoute,
      surfaceType: _v2,
      initialIntent: _v1
    }, _v4) : "invalid" === _v6.status || "expired" === _v6.status ? {
      flowId: crypto.randomUUID(),
      surface: null,
      trigger: null,
      originRoute: null,
      surfaceType: _v2,
      initialIntent: _v1,
      status: _v6.status,
      version: 1,
      entryTimestamp: _v6.entryTimestamp
    } : _v36({
      surface: null,
      trigger: null,
      originRoute: null,
      surfaceType: _v2,
      initialIntent: _v1
    }, _v4);
  }, "authAttributionFields", 0, _v28, "authAttributionPayload", 0, _v0 => ({
    unified_auth_flow_id: _v0.flowId,
    auth_surface: _v0.surface,
    auth_trigger: _v0.trigger,
    auth_origin_route: _v0.originRoute,
    auth_surface_type: _v0.surfaceType,
    auth_initial_intent: _v0.initialIntent,
    auth_attribution_status: _v0.status,
    auth_attribution_version: _v0.version,
    auth_entry_timestamp: _v0.entryTimestamp
  }), "authAttributionUrl", 0, (_v0, _v1) => {
    let {
        path: _v2,
        search: _v3,
        hash: _v4
      } = _v33(_v0),
      _v5 = _v34(_v3),
      _v6 = _v29(_v1),
      _v7 = "" === _v5 ? _v6 : `${_v5}&${_v6}`;
    return `${_v2}?${_v7}${_v4}`;
  }, "buildAuthAttribution", 0, _v27, "createAuthEntryContext", 0, (_v0, _v1, _v2, _v3) => _v27({
    flowId: crypto.randomUUID(),
    entry: _v0,
    originRoute: _v1,
    surfaceType: _v2,
    initialIntent: _v3,
    entryTimestamp: Date.now()
  }), "getAuthEntryKeys", 0, _v0 => {
    let _v1 = `${_v0}_`,
      _v2 = {};
    for (let _v0 of Object.keys(_v11)) _v17(_v0) && _v0.startsWith(_v1) && (_v2[_v0.slice(_v1.length)] = _v0);
    return _v2;
  }, "resolveAuthOriginRoute", 0, _v0 => {
    let _v1 = _v0.split("?")[0].split("#")[0],
      _v2 = _v1.length > 1 && _v1.endsWith("/") ? _v1.slice(0, -1) : _v1;
    if (!_v2.startsWith("/")) return null;
    let _v3 = _v30.get(_v2);
    if (void 0 !== _v3) return _v3;
    let _v4 = _v31.get(_v2);
    if (void 0 !== _v4) return _v4;
    if (_v2.includes("[") || _v2.includes("]")) return null;
    for (let [_v0, _v1] of _v32) if (_v0.test(_v2)) return _v1;
    return null;
  }, "serializeAuthAttribution", 0, _v29, "stripAuthAttribution", 0, _v0 => {
    let {
        path: _v1,
        search: _v2,
        hash: _v3
      } = _v33(_v0),
      _v4 = _v34(_v2);
    return _v4 === _v2 ? _v0 : `${_v1}${"" === _v4 ? "" : `?${_v4}`}${_v3}`;
  }]);
}