{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = _v0 => "function" == typeof _v0.headers?.get && "1" === _v0.headers.get("crossroads-logged-out") || "1" === _v0.headers["crossroads-logged-out"] || !_v9(_v0),
    _v5 = _v0 => {
      if ("function" == typeof _v0.cookies?.get) return _v0.cookies.get("has_logged_in")?.value === "1";
      let _v1 = _v0.cookies;
      return _v1?.has_logged_in === "1";
    },
    _v6 = _v0 => _v0.toLowerCase().includes("googlebot"),
    _v7 = _v0 => {
      let _v1 = "function" == typeof _v0.headers?.get ? _v0.headers.get("host") : _v0.headers?.host;
      return _v1 ? _v1.toLowerCase().split(":")[0].replace(/^www\./, "") : "";
    },
    _v8 = _v0 => {
      let _v1 = ("function" == typeof _v0.headers?.get ? _v0.headers.get("vimeo-environment-tld") || "" : _v0.headers?.["vimeo-environment-tld"] ?? "").trim().toLowerCase();
      return "cn" === _v1 || "hk" === _v1;
    },
    _v9 = _v0 => {
      if ("function" == typeof _v0.cookies?.get) return null != _v0.cookies.get("vimeo");
      let _v1 = _v0.cookies;
      if (_v1 && null != _v1.vimeo) return !0;
      let _v2 = _v0.headers?.cookie;
      return "string" == typeof _v2 && /(?:^|;\s*)vimeo=/.test(_v2);
    };
  _v0.s(["getRequestHost", 0, _v7, "hasLoggedIn", 0, _v5, "hasVimeoCookie", 0, _v9, "isChinaRestrictedRequest", 0, _v8, "isGooglebot", 0, _v6, "isLoggedOut", 0, _v4], 0);
  var _v10 = _v0.i(0),
    _v11 = _v0.i(0);
  let _v12 = (_v0, _v1, _v2) => globalThis.__metrics?.histogram(_v0, _v1, _v2),
    _v13 = (_v0, _v1) => globalThis.__metrics?.counter(_v0, _v1),
    _v14 = async () => await _v3.default.getConfig(),
    _v15 = ["cookie", "crossroads-jwt", "crossroads-language", "crossroads-logged-out", "user-agent"];
  function _v16(_v0, _v1) {
    let _v2 = _v1.toLowerCase().replace(/^www\./, ""),
      _v3 = _v7(_v0.req);
    return _v0.req.headers["vimeo-environment-id"] && _v3 && _v3 !== _v2 ? _v3 : _v1;
  }
  function _v17(_v0) {
    let _v1 = _v0.query?.player_branch;
    return "string" == typeof _v1 && _v1 ? `?${new URLSearchParams({
      player_branch: _v1
    })}` : "";
  }
  async function _v18(_v0) {
    let _v1 = _v0.vimeoConfig.get("vimeo_url");
    if (!_v1) return null;
    let _v2 = _v16(_v0, String(_v1)),
      _v3 = {
        ..._v0.headers,
        Accept: "application/json"
      };
    for (let _v0 of _v15) {
      let _v0 = _v0.req.headers[_v0];
      _v0 && (_v3[_v0] = Array.isArray(_v0) ? _v0.join("; ") : _v0);
    }
    try {
      let _v0 = await fetch(`https://${_v2}/_next/viewer${_v17(_v0)}`, {
        headers: _v3
      });
      if (!_v0.ok) return null;
      let _v1 = await _v0.json();
      if (!_v1 || "object" != typeof _v1 || Array.isArray(_v1)) return null;
      return _v1;
    } catch (_v0) {
      return console.warn("withPageSetup: failed to fetch viewer for inline bootstrap", _v0), null;
    }
  }
  async function _v19(_v0) {
    let _v1 = _v0.vimeoConfig.get("vimeo_url");
    if (!_v1) return null;
    let _v2 = _v16(_v0, String(_v1)),
      _v3 = {
        ..._v0.headers,
        Accept: "application/json"
      };
    for (let _v0 of _v15) {
      let _v0 = _v0.req.headers[_v0];
      _v0 && (_v3[_v0] = Array.isArray(_v0) ? _v0.join("; ") : _v0);
    }
    try {
      let _v0 = await fetch(`https://${_v2}/_next/player_assets${_v17(_v0)}`, {
        headers: _v3
      });
      if (!_v0.ok) return null;
      let _v1 = await _v0.json();
      if (!_v1 || "object" != typeof _v1 || Array.isArray(_v1)) return null;
      return _v1;
    } catch (_v0) {
      return console.warn("withPageSetup: failed to fetch player assets", _v0), null;
    }
  }
  async function _v20(_v0) {
    let _v1 = _v0.vimeoConfig.get("vimeo_url");
    if (!_v1) return null;
    let _v2 = _v16(_v0, String(_v1)),
      _v3 = {
        ..._v0.headers,
        Accept: "application/json"
      };
    for (let _v0 of _v15) {
      let _v0 = _v0.req.headers[_v0];
      _v0 && (_v3[_v0] = Array.isArray(_v0) ? _v0.join("; ") : _v0);
    }
    try {
      let _v0 = await fetch(`https://${_v2}/_next/modbox`, {
        headers: _v3
      });
      if (!_v0.ok) return null;
      let _v1 = await _v0.json(),
        _v2 = _v1?.modboxPanel;
      if ("string" != typeof _v2 || "" === _v2) return null;
      return _v2;
    } catch (_v0) {
      return console.warn("withPageSetup: failed to fetch modbox panel", _v0), null;
    }
  }
  async function _v21(_v0) {
    let _v1 = _v0.vimeoConfig.get("vimeo_url");
    if (!_v1) return null;
    let _v2 = {
      ..._v0.headers,
      Accept: "application/json"
    };
    for (let _v0 of _v15) {
      let _v0 = _v0.req.headers[_v0];
      _v0 && (_v2[_v0] = Array.isArray(_v0) ? _v0.join("; ") : _v0);
    }
    try {
      let _v0 = await fetch(`https://${_v1}/_next/create_preloads`, {
        headers: _v2
      });
      if (!_v0.ok) return null;
      let _v1 = await _v0.json();
      if (!_v1 || "object" != typeof _v1 || Array.isArray(_v1) || null == _v1.preloadedTemplates && null == _v1.preloadedTags) return null;
      return _v1;
    } catch (_v0) {
      return console.warn("withPageSetup: failed to fetch create preloads", _v0), null;
    }
  }
  function _v22(_v0) {
    let _v1 = _v0.vimeoConfig.get("api.creation.magisto.host");
    return _v1 ? (0, _v10.buildMagistoResourceUrls)(String(_v1)) : (console.warn("withPageSetup: api.creation.magisto.host missing from config"), null);
  }
  _v0.s(["withPageSetup", 0, function (_v0, _v1) {
    let _v2, _v3;
    function _v4(_v0, _v1, _v2, _v3, _v4, _v5, _v6) {
      return "props" in _v0 ? {
        ..._v0,
        props: {
          ..._v0.props,
          ...(_v3?.omitEsi ? {
            omitEsi: !0
          } : {}),
          ...(_v2 ? {
            viewerBootstrap: _v2
          } : {}),
          ...(_v3 ? {
            playerAssetUrls: _v3
          } : {}),
          ...(_v4 ? {
            createPreloads: _v4
          } : {}),
          ...(_v5 ? {
            magistoResourceUrls: _v5
          } : {}),
          ...(_v6 ? {
            modboxPanel: _v6
          } : {}),
          withPageSetup: _v1
        }
      } : _v0;
    }
    return "function" == typeof _v0 ? (_v2 = _v0, _v3 = _v1) : (_v3 = _v0, _v2 = () => ({
      props: {}
    })), async function (_v0) {
      _v3?.noIndex && _v0.res.setHeader("X-Robots-Tag", "noindex"), _v3?.inlineViewer && !_v9(_v0.req) && _v0.res.setHeader("Cache-Control", "public, max-age=600");
      let _v1 = _v1.default.hrtime.bigint(),
        _v2 = function (_v0, _v1) {
          let _v2 = _v0.split("?")[0];
          if (_v2.length > 1 && _v2.endsWith("/") && (_v2 = _v2.slice(0, -1)), !_v1) return _v2;
          let _v3 = _v2.split("/").map(_v0 => {
            try {
              return decodeURIComponent(_v0);
            } catch {
              return _v0;
            }
          });
          for (let [_v0, _v1] of Object.entries(_v1)) {
            if (!Array.isArray(_v1) || 0 === _v1.length) continue;
            let _v0 = _v3.length - _v1.length;
            if (_v0 >= 0 && _v1.every((_v0, _v1) => _v3[_v0 + _v1] === _v0)) {
              _v3 = [..._v3.slice(0, _v0), `:...${_v0}`];
              break;
            }
          }
          let _v4 = new Set();
          for (let [_v0, _v1] of Object.entries(_v1)) if ("string" == typeof _v1) {
            for (let _v0 = 0; _v0 < _v3.length; _v0++) if (!_v4.has(_v0) && _v3[_v0] === _v1) {
              _v3[_v0] = `:${_v0}`, _v4.add(_v0);
              break;
            }
          }
          return _v3.join("/");
        }(_v0.resolvedUrl ?? "unknown", _v0.params),
        _v3 = _v0.req.method ?? "GET",
        _v4 = () => Number(_v1.default.hrtime.bigint() - _v1) / 0,
        _v5 = !!_v3?.googleBotPermanentRedirect && _v3?.redirect != null,
        _v6 = _v5 && _v6(_v0.req.headers["user-agent"] ?? ""),
        _v7 = () => {
          _v5 && _v0.res.setHeader("Cache-Control", "private, no-store");
        },
        _v8 = (_v0, _v1, _v2) => {
          _v12("vimeo_nextjs_ssr_setup_duration_seconds", {
            route: _v2,
            result: _v1
          }, _v2), _v12("vimeo_nextjs_http_request_duration_seconds", {
            route: _v2,
            method: _v3,
            status_code: _v0
          }, _v4());
        },
        _v9 = _v0 => "number" == typeof _v0.statusCode ? String(_v0.statusCode) : _v0.permanent ? "308" : "307",
        _v10 = (_v0, _v1) => {
          let _v2 = _v6 ? 308 : 302;
          return _v13("vimeo_nextjs_ssr_auth_redirect_total", {
            reason: _v0,
            destination: "/join" === _v1 ? "join" : "/log_in" === _v1 ? "log_in" : "custom"
          }), _v7(), _v8(String(_v2), "auth_redirect", _v4()), {
            redirect: {
              destination: _v1,
              statusCode: _v2
            }
          };
        },
        _v11 = null;
      globalThis.__metrics?.gaugeInc("vimeo_nextjs_http_requests_active");
      try {
        let _v0,
          _v1,
          _v2,
          _v3 = (_v0 = _v0.req.headers["crossroads-language"] ?? "en", (0, _v2.setLocale)(_v0), _v0),
          _v4 = _v8(_v0.req),
          _v5 = await _v14(),
          _v6 = (_v1 = _v0.req.headers["crossroads-jwt"], _v2 = {
            "Content-Type": "application/json",
            Authorization: `jwt ${_v1}`
          }, ["x-forwarded-for", "x-geo-vary-group", "vimeo-environment-id", "vimeo-environment-tld"].forEach(_v0 => {
            let _v1 = _v0.req.headers[_v0];
            _v1 && (_v2[_v0] = _v1);
          }), {
            ..._v0,
            jwt: _v1,
            baseUrl: `https://${_v5.get("api_url")}`,
            headers: _v2,
            vimeoConfig: _v5
          }),
          _v7 = _v0 => {
            let _v1 = _v3?.redirect;
            if ("function" != typeof _v1) return _v1 ?? _v0;
            try {
              return _v1(_v6) || _v0;
            } catch (_v0) {
              return console.warn("withPageSetup: redirect function threw; using fallback", _v0), _v0;
            }
          };
        if (!_v3?.requireLogin && !_v3?.capability && !_v3?.staffOnly) {
          _v11 = _v4();
          let _v0 = _v3?.inlineViewer === "all" || _v3?.inlineViewer && _v6.jwt && !_v4(_v6.req) ? _v18(_v6) : null,
            _v1 = _v3?.inlinePlayerAssets ? _v19(_v6) : null,
            _v2 = _v3?.inlineCreatePreloads && _v4(_v6.req) ? _v21(_v6) : null,
            _v3 = _v3?.inlineMagistoResources ? _v22(_v6) : null,
            _v4 = _v3?.inlineModbox && !_v4(_v6.req) ? _v20(_v6) : null,
            _v5 = await _v2(_v6),
            _v6 = "redirect" in _v5 ? _v9(_v5.redirect) : "notFound" in _v5 ? "404" : "200";
          return _v8(_v6, "success", _v11), _v4(_v5, {
            locale: _v3,
            isChinaRestricted: _v4
          }, _v0 ? await _v0 : null, _v1 ? await _v1 : null, _v2 ? await _v2 : null, _v3, _v4 ? await _v4 : null);
        }
        if (_v4(_v6.req)) {
          console.log("requireLogin: User is logged-out");
          let _v0 = _v7(_v5(_v6.req) ? "/log_in" : "/join");
          return _v10("logged_out", _v0);
        }
        if (!_v6.jwt) return console.log("requireLogin: Missing JWT"), _v10("missing_jwt", _v7("/log_in"));
        let _v8 = {};
        if (_v3?.staffOnly || _v3?.capability) try {
          let _v0 = ["canViewStaffOnlyPage"];
          if (_v3?.capability && _v0.push(_v3.capability), _v8 = await (0, _v11.fetchAndFormatCapabilties)({
            jwt: _v6.jwt,
            capabilities: _v0,
            apiUrl: _v6.baseUrl,
            headers: _v6.headers
          }), _v3?.staffOnly && !1 === _v8.canViewStaffOnlyPage) return console.log("staffOnly: User does not have staff access"), _v8("404", "capability_denied", _v4()), {
            notFound: !0
          };
          if (_v3?.capability && !1 === _v8[_v3.capability]) {
            if (console.log("capability: User is missing capabilities"), _v3?.redirect) {
              let _v0 = _v6 ? 308 : 307;
              return _v13("vimeo_nextjs_ssr_auth_redirect_total", {
                reason: "capability_denied",
                destination: "custom"
              }), _v7(), _v8(String(_v0), "auth_redirect", _v4()), {
                redirect: {
                  destination: _v7("/log_in"),
                  statusCode: _v0
                }
              };
            }
            return _v8("404", "capability_denied", _v4()), {
              notFound: !0
            };
          }
        } catch (_v0) {
          return console.log("Failed to fetch capabilities ", _v0), _v10("capability_fetch_failed", _v7("/log_in"));
        }
        _v6.capabilities = _v8, _v11 = _v4();
        let _v9 = _v3?.inlineViewer ? _v18(_v6) : null,
          _v10 = _v3?.inlinePlayerAssets ? _v19(_v6) : null,
          _v11 = _v3?.inlineCreatePreloads && _v4(_v6.req) ? _v21(_v6) : null,
          _v12 = _v3?.inlineMagistoResources ? _v22(_v6) : null,
          _v13 = _v3?.inlineModbox ? _v20(_v6) : null,
          _v14 = await _v2(_v6),
          _v15 = "redirect" in _v14 ? _v9(_v14.redirect) : "notFound" in _v14 ? "404" : "200";
        return _v8(_v15, "success", _v11), _v4(_v14, {
          locale: _v3,
          isChinaRestricted: _v4
        }, _v9 ? await _v9 : null, _v10 ? await _v10 : null, _v11 ? await _v11 : null, _v12, _v13 ? await _v13 : null);
      } catch (_v0) {
        throw _v8("500", "error", _v11 ?? _v4()), _v0;
      } finally {
        globalThis.__metrics?.gaugeDec("vimeo_nextjs_http_requests_active");
      }
    };
  }], 0);
}