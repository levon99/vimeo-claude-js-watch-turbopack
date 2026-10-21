{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = _v0 => !_v9(_v0),
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
  _v0.s(["getRequestHost", 0, _v7, "hasLoggedIn", 0, _v5, "isChinaRestrictedRequest", 0, _v8, "isGooglebot", 0, _v6, "isLoggedOut", 0, _v4], 0);
  let _v10 = 5,
    _v11 = "x-cdn-cc-managed";
  _v0.s(["CDN_CC_MANAGED", 0, _v11, "setCacheHeaders", 0, (_v0, _v1, {
    ttl: _v2 = 0,
    cdnTtl: _v3 = _v10,
    keys: _v4
  }) => {
    if (!_v4(_v0)) return;
    let _v5 = !!_v0.headers["x-varnish"];
    if (0 === _v2 ? (_v1.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, post-check=0, pre-check=0"), _v5 || (_v1.setHeader("CDN-Cache-Control", "no-store"), _v1.setHeader(_v11, "1"))) : _v5 ? (_v1.setHeader("Cache-Control", `max-age=${_v2}`), _v1.setHeader("Expires", new Date(Date.now() + 0 * _v2).toUTCString())) : (_v1.setHeader("Cache-Control", "no-store"), _v1.setHeader("CDN-Cache-Control", `max-age=${_v3}`), _v1.setHeader(_v11, "1")), _v4 && Object.keys(_v4).length > 0) {
      let _v0 = Object.entries(_v4).map(([_v0, _v1]) => `${_v0}:${_v1}`);
      _v5 && _v1.setHeader("X-HashTwo", _v0), _v1.setHeader("Cache-Tag", _v0.join(","));
    }
  }], 0);
  var _v12 = _v0.i(0);
  function _v13(_v0, _v1) {
    if (void 0 === _v1) return _v0;
    let [_v2, _v3 = ""] = _v1.split("?"),
      _v4 = new URLSearchParams(_v3),
      _v5 = new URLSearchParams();
    if (_v4.forEach((_v0, _v1) => {
      "t_lp" !== _v1 && _v12.ATTRIBUTION_PARAM_NAMES.includes(_v1) && "" !== _v0 && _v5.set(_v1, _v0);
    }), 0 == [..._v5].length) return _v0;
    _v5.set("t_lp", `${_v2}?${_v5.toString()}`);
    let _v6 = _v5.toString(),
      _v7 = _v0.includes("?") ? "&" : "?",
      _v8 = `${_v0}${_v7}${_v6}`;
    return _v8.length > 0 ? _v0 : _v8;
  }
  var _v14 = _v0.i(0);
  let _v15 = ["cookie", "crossroads-jwt", "crossroads-language", "user-agent"];
  function _v16(_v0) {
    let _v1 = _v0.query?.player_branch;
    return "string" == typeof _v1 && _v1 ? `?${new URLSearchParams({
      player_branch: _v1
    })}` : "";
  }
  function _v17(_v0) {
    let _v1 = {
      ..._v0.headers,
      Accept: "application/json"
    };
    for (let _v0 of _v15) {
      let _v0 = _v0.req.headers[_v0];
      _v0 && (_v1[_v0] = Array.isArray(_v0) ? _v0.join("; ") : _v0);
    }
    return _v1;
  }
  async function _v18(_v0, _v1) {
    if (!_v1) return null;
    let _v2 = _v17(_v0);
    try {
      let _v0 = await fetch(`https://${_v1}/_next/viewer${_v16(_v0)}`, {
        headers: _v2
      });
      if (!_v0.ok) return null;
      let _v1 = await _v0.json();
      if (!_v1 || "object" != typeof _v1 || Array.isArray(_v1)) return null;
      return _v1;
    } catch (_v0) {
      return console.warn("withPageSetup: failed to fetch viewer for inline bootstrap", _v0), null;
    }
  }
  async function _v19(_v0, _v1) {
    if (!_v1) return null;
    let _v2 = _v17(_v0);
    try {
      let _v0 = await fetch(`https://${_v1}/_next/player_assets${_v16(_v0)}`, {
        headers: _v2
      });
      if (!_v0.ok) return null;
      let _v1 = await _v0.json();
      if (!_v1 || "object" != typeof _v1 || Array.isArray(_v1)) return null;
      return _v1;
    } catch (_v0) {
      return console.warn("withPageSetup: failed to fetch player assets", _v0), null;
    }
  }
  async function _v20(_v0, _v1) {
    if (!_v1) return null;
    let _v2 = _v17(_v0);
    try {
      let _v0 = await fetch(`https://${_v1}/_next/modbox`, {
        headers: _v2
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
    let _v2 = _v17(_v0);
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
  var _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0);
  let _v25 = {
      en: "en",
      es: "es",
      fr: "fr-FR",
      de: "de-DE",
      ja: "ja-JP",
      pt: "pt-BR",
      ko: "ko-KR",
      zh: "zh-CN"
    },
    _v26 = _v0 => Object.hasOwn(_v25, _v0) ? _v25[_v0] : "",
    _v27 = new Set(Object.values(_v25)),
    _v28 = _v0 => _v0 && _v27.has(_v0) ? _v0 : "other",
    _v29 = async () => _v23.default.getConfig(),
    _v30 = async _v0 => {
      if ("false" === _v1.default.env.APP_MINT_CROSSROADS_JWT) return _v0.headers["crossroads-jwt"];
      let {
          mintCrossroadsJwt: _v1
        } = await _v0.A(0),
        _v2 = await _v1(_v0.headers.cookie);
      return _v0.headers["crossroads-jwt"] = _v2, _v2;
    },
    _v31 = async (_v0, _v1) => {
      let _v2 = await _v30(_v0.req),
        _v3 = {
          "Content-Type": "application/json",
          Authorization: `jwt ${_v2}`
        };
      return Object.entries({
        "x-forwarded-for": (_v0 => {
          let _v1 = _v0.req.headers["cf-connecting-ip"],
            _v2 = Array.isArray(_v1) ? _v1[0] : _v1,
            _v3 = _v0.req.headers["x-forwarded-for"],
            _v4 = _v2?.trim(),
            _v5 = _v4 && !_v4.includes(",") ? _v4 : void 0;
          try {
            let _v0,
              _v1 = ((Array.isArray(_v3) ? _v3.join(",") : _v3) ?? "").split(",").map(_v0 => _v0.trim()).filter(Boolean);
            _v0 = _v5 ? 0 === _v1.length ? "no_xff" : _v1[_v1.length - 1] === _v5 ? "match" : "divergence" : "no_source", _v3.metrics.counter("vimeo_nextjs_client_ip_parity_total", {
              parity: _v0,
              xff_entries: _v1.length >= 3 ? "3plus" : String(_v1.length)
            });
          } catch {}
          return _v5 ?? _v3;
        })(_v0),
        "x-geo-vary-group": _v0.req.headers["x-geo-vary-group"],
        "vimeo-environment-id": _v0.req.headers["vimeo-environment-id"],
        "vimeo-environment-tld": _v0.req.headers["vimeo-environment-tld"]
      }).forEach(([_v0, _v1]) => {
        _v1 && (_v3[_v0] = _v1);
      }), {
        ..._v0,
        jwt: _v2,
        baseUrl: `https://${_v1.get("api_url")}`,
        headers: _v3,
        vimeoConfig: _v1
      };
    };
  _v0.s(["withPageSetup", 0, function (_v0, _v1) {
    let _v2, _v3;
    return "function" == typeof _v0 ? (_v2 = _v0, _v3 = _v1) : (_v3 = _v0, _v2 = () => ({
      props: {}
    })), async function (_v0) {
      let _v1 = _v4(_v0.req);
      _v3?.noIndex && _v0.res.setHeader("X-Robots-Tag", "noindex"), _v3?.inlineViewer && _v1 && (_v0.req.headers["x-varnish"] ? _v0.res.setHeader("Cache-Control", "public, max-age=600") : (_v0.res.setHeader("Cache-Control", "no-store"), _v0.res.setHeader("CDN-Cache-Control", "max-age=5")));
      let _v2 = _v1.default.hrtime.bigint(),
        _v3 = function (_v0, _v1) {
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
        _v4 = _v0.req.method ?? "GET",
        _v5 = () => Number(_v1.default.hrtime.bigint() - _v2) / 0,
        _v6 = null,
        _v7 = (_v0, _v1, _v2) => {
          _v6 = _v0, _v3.metrics.histogram("vimeo_nextjs_ssr_setup_duration_seconds", {
            route: _v3,
            result: _v1
          }, _v2), _v3.metrics.histogram("vimeo_nextjs_http_request_duration_seconds", {
            route: _v3,
            method: _v4,
            status_code: _v0
          }, _v5());
        };
      _v0.res?.once?.("finish", () => {
        let _v0 = String(_v0.res.statusCode);
        _v0.startsWith("5") && _v0 !== _v6 && _v3.metrics.counter("vimeo_nextjs_http_request_errors_total", {
          route: _v3,
          method: _v4,
          status_code: _v0
        });
      });
      let _v8 = (_v0, _v1, _v2 = 302, _v3) => {
          let _v4 = !!_v3?.googleBotPermanentRedirect && _v3?.redirect != null,
            _v5 = _v4 && _v6(_v0.req.headers["user-agent"] ?? ""),
            _v6 = _v1.split("?")[0],
            _v7 = _v5 ? 308 : _v2;
          return _v3.metrics.counter("vimeo_nextjs_ssr_auth_redirect_total", {
            reason: _v0,
            destination: _v3 ?? ("/join" === _v6 ? "join" : "/log_in" === _v6 ? "log_in" : "custom")
          }), _v4 && (_v0.res.setHeader("Cache-Control", "private, no-store"), _v0.res.setHeader("CDN-Cache-Control", "no-store")), _v7(String(_v7), "auth_redirect", _v5()), {
            redirect: {
              destination: _v1,
              statusCode: _v7
            }
          };
        },
        _v9 = null;
      _v3.metrics.gaugeInc("vimeo_nextjs_http_requests_active");
      try {
        var _v10;
        let _v0,
          _v1,
          _v2,
          _v3,
          _v4 = (_v0 = _v0.req.headers["crossroads-language"] || _v0.locale || "en", (0, _v22.setLocale)(_v0), (_v0 => {
            try {
              var _v1, _v2, _v3;
              let _v0,
                _v1 = _v0.req.headers["x-language-edge"],
                {
                  local: _v2,
                  edge: _v3,
                  parity: _v4
                } = (_v1 = _v0.req.cookies?.language ?? null, _v2 = _v0.req.headers["accept-language"] ?? null, _v3 = _v1 ?? null, {
                  local: _v0 = (_v1 ? _v26(_v1.toLowerCase().split("-")[0]) : "") || function (_v0) {
                    if (!_v0) return "";
                    for (let _v0 of new _v24.default({
                      headers: {
                        "accept-language": _v0
                      }
                    }).languages()) {
                      let _v0 = _v26(_v0.toLowerCase().split("-")[0]);
                      if (_v0) return _v0;
                    }
                    return "";
                  }(_v2) || "en",
                  edge: _v3,
                  parity: _v3 ? _v0 === _v3 ? "match" : "divergence" : "edge_absent"
                });
              _v3.metrics.counter("vimeo_nextjs_lang_parity_total", {
                parity: "edge_absent" !== _v4 ? _v4 : void 0 === _v1 ? "chain_skipped" : "edge_empty",
                local: _v28(_v2),
                edge: _v28(_v3)
              });
            } catch {}
          })(_v0), _v0),
          _v5 = _v8(_v0.req),
          _v6 = await _v29(),
          _v7 = await _v31(_v0, _v6),
          _v8 = _v0 => {
            let _v1 = _v3?.redirect;
            if ("function" != typeof _v1) return _v1 ?? _v13(_v0, _v0.resolvedUrl);
            try {
              return _v1(_v7) || _v13(_v0, _v0.resolvedUrl);
            } catch (_v0) {
              return console.warn("withPageSetup: redirect function threw; using fallback", _v0), _v13(_v0, _v0.resolvedUrl);
            }
          };
        if (!(!_v3?.requireLogin && !_v3?.capability && !_v3?.staffOnly)) {
          if (_v1) {
            console.log("requireLogin: User is logged-out");
            let _v0 = _v8(_v5(_v7.req) ? "/log_in" : "/join");
            return _v8("logged_out", _v0);
          }
          if (!_v7.jwt) return console.log("requireLogin: Missing JWT"), _v8("missing_jwt", _v8("/log_in"));
          if (_v3?.staffOnly || _v3?.capability) {
            let _v0 = {};
            try {
              let _v0 = ["canViewStaffOnlyPage"];
              if (_v3?.capability && _v0.push(_v3.capability), _v0 = await (0, _v2.fetchAndFormatCapabilties)({
                jwt: _v7.jwt,
                capabilities: _v0,
                apiUrl: _v7.baseUrl,
                headers: _v7.headers
              }), _v3?.staffOnly && !1 === _v0.canViewStaffOnlyPage) return console.log("staffOnly: User does not have staff access"), _v7("404", "capability_denied", _v5()), {
                notFound: !0
              };
              if (_v3?.capability && !1 === _v0[_v3.capability]) {
                if (console.log("capability: User is missing capabilities"), _v3?.redirect) return _v8("capability_denied", _v8("/log_in"), 307, "custom");
                return _v7("404", "capability_denied", _v5()), {
                  notFound: !0
                };
              }
            } catch (_v0) {
              return console.log("Failed to fetch capabilities ", _v0), _v8("capability_fetch_failed", _v8("/log_in"));
            }
          }
        }
        _v9 = _v5();
        let _v9 = _v3?.inlineViewer === "all" || !!(_v3?.inlineViewer && _v7.jwt && !_v1),
          _v10 = !!_v3?.inlinePlayerAssets,
          _v11 = !!(_v3?.inlineCreatePreloads && _v1),
          _v12 = !!_v3?.inlineMagistoResources,
          _v13 = !!(_v3?.inlineModbox && !_v1),
          _v14 = _v7.vimeoConfig.get("vimeo_url"),
          _v15 = _v14 ? (_v1 = (_v10 = String(_v14)).toLowerCase().replace(/^www\./, ""), _v2 = _v7(_v7.req), _v7.req.headers["vimeo-environment-id"] && _v2 && _v2 !== _v1 ? _v2 : _v10) : null,
          _v16 = _v9 ? _v18(_v7, _v15) : null,
          _v17 = _v10 ? _v19(_v7, _v15) : null,
          _v18 = _v11 ? _v21(_v7) : null,
          _v19 = _v12 ? (_v3 = _v7.vimeoConfig.get("api.creation.magisto.host")) ? (0, _v14.buildMagistoResourceUrls)(String(_v3)) : (console.warn("withPageSetup: api.creation.magisto.host missing from config"), null) : null,
          _v20 = _v13 ? _v20(_v7, _v15) : null,
          _v21 = await _v2(_v7),
          _v22 = _v0.res?.getHeader?.("Cache-Control");
        "string" == typeof _v22 && _v22.includes("no-store") && !_v0.res?.getHeader?.(_v11) && _v0.res.setHeader("CDN-Cache-Control", "no-store"), _v7(function (_v0, _v1) {
          if ("redirect" in _v0) {
            let {
              redirect: _v0
            } = _v0;
            return "statusCode" in _v0 ? String(_v0.statusCode) : _v0.permanent ? "308" : "307";
          }
          return "notFound" in _v0 ? "404" : String(_v1 || 200);
        }(_v21, _v0.res?.statusCode), "success", _v9);
        let [_v23, _v24, _v25, _v26] = await Promise.all([_v16, _v17, _v18, _v20]);
        if (!("props" in _v21)) return _v21;
        return {
          ..._v21,
          props: {
            ..._v21.props,
            ...(_v23 ? {
              viewerBootstrap: _v23
            } : {}),
            ...(_v24 ? {
              playerAssetUrls: _v24
            } : {}),
            ...(_v25 ? {
              createPreloads: _v25
            } : {}),
            ...(_v19 ? {
              magistoResourceUrls: _v19
            } : {}),
            ...(_v26 ? {
              modboxPanel: _v26
            } : {}),
            withPageSetup: {
              locale: _v4,
              isChinaRestricted: _v5
            }
          }
        };
      } catch (_v0) {
        throw _v7("500", "error", _v9 ?? _v5()), _v0;
      } finally {
        _v0.res?.headersSent || _v0.res?.removeHeader?.(_v11), _v3.metrics.gaugeDec("vimeo_nextjs_http_requests_active");
      }
    };
  }], 0);
}