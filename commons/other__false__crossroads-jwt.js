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
    _v10 = _v0.i(0);
  let _v11 = new Set(Object.values(_v7.SUPPORTED_LANGS)),
    _v12 = _v0 => _v0 && _v11.has(_v0) ? _v0 : "other",
    _v13 = async () => await _v3.default.getConfig(),
    _v14 = async _v0 => {
      if ("false" === _v1.default.env.APP_MINT_CROSSROADS_JWT) return _v0.headers["crossroads-jwt"];
      let {
          mintCrossroadsJwt: _v1
        } = await _v0.A(0),
        _v2 = await _v1(_v0.headers.cookie);
      return _v0.headers["crossroads-jwt"] = _v2, _v2;
    },
    _v15 = async (_v0, _v1) => {
      let _v2 = await _v14(_v0.req),
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
            _v0 = _v5 ? 0 === _v1.length ? "no_xff" : _v1[_v1.length - 1] === _v5 ? "match" : "divergence" : "no_source", _v9.metrics.counter("vimeo_nextjs_client_ip_parity_total", {
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
    },
    _v16 = ["cookie", "crossroads-jwt", "crossroads-language", "user-agent"];
  function _v17(_v0, _v1) {
    let _v2 = _v1.toLowerCase().replace(/^www\./, ""),
      _v3 = (0, _v4.getRequestHost)(_v0.req);
    return _v0.req.headers["vimeo-environment-id"] && _v3 && _v3 !== _v2 ? _v3 : _v1;
  }
  function _v18(_v0) {
    let _v1 = _v0.query?.player_branch;
    return "string" == typeof _v1 && _v1 ? `?${new URLSearchParams({
      player_branch: _v1
    })}` : "";
  }
  async function _v19(_v0) {
    let _v1 = _v0.vimeoConfig.get("vimeo_url");
    if (!_v1) return null;
    let _v2 = _v17(_v0, String(_v1)),
      _v3 = {
        ..._v0.headers,
        Accept: "application/json"
      };
    for (let _v0 of _v16) {
      let _v0 = _v0.req.headers[_v0];
      _v0 && (_v3[_v0] = Array.isArray(_v0) ? _v0.join("; ") : _v0);
    }
    try {
      let _v0 = await fetch(`https://${_v2}/_next/viewer${_v18(_v0)}`, {
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
  async function _v20(_v0) {
    let _v1 = _v0.vimeoConfig.get("vimeo_url");
    if (!_v1) return null;
    let _v2 = _v17(_v0, String(_v1)),
      _v3 = {
        ..._v0.headers,
        Accept: "application/json"
      };
    for (let _v0 of _v16) {
      let _v0 = _v0.req.headers[_v0];
      _v0 && (_v3[_v0] = Array.isArray(_v0) ? _v0.join("; ") : _v0);
    }
    try {
      let _v0 = await fetch(`https://${_v2}/_next/player_assets${_v18(_v0)}`, {
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
  async function _v21(_v0) {
    let _v1 = _v0.vimeoConfig.get("vimeo_url");
    if (!_v1) return null;
    let _v2 = _v17(_v0, String(_v1)),
      _v3 = {
        ..._v0.headers,
        Accept: "application/json"
      };
    for (let _v0 of _v16) {
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
  async function _v22(_v0) {
    let _v1 = _v0.vimeoConfig.get("vimeo_url");
    if (!_v1) return null;
    let _v2 = {
      ..._v0.headers,
      Accept: "application/json"
    };
    for (let _v0 of _v16) {
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
  function _v23(_v0) {
    let _v1 = _v0.vimeoConfig.get("api.creation.magisto.host");
    return _v1 ? (0, _v5.buildMagistoResourceUrls)(String(_v1)) : (console.warn("withPageSetup: api.creation.magisto.host missing from config"), null);
  }
  _v0.s(["withPageSetup", 0, function (_v0, _v1) {
    let _v2, _v3;
    function _v4(_v0, _v1, _v2, _v3, _v4, _v5, _v6) {
      return "props" in _v0 ? {
        ..._v0,
        props: {
          ..._v0.props,
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
      _v3?.noIndex && _v0.res.setHeader("X-Robots-Tag", "noindex"), _v3?.inlineViewer && !(0, _v4.hasVimeoCookie)(_v0.req) && (_v0.req.headers["x-varnish"] ? _v0.res.setHeader("Cache-Control", "public, max-age=600") : (_v0.res.setHeader("Cache-Control", "no-store"), _v0.res.setHeader("CDN-Cache-Control", "max-age=5")));
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
        _v6 = _v5 && (0, _v4.isGooglebot)(_v0.req.headers["user-agent"] ?? ""),
        _v7 = () => {
          _v5 && (_v0.res.setHeader("Cache-Control", "private, no-store"), _v0.res.setHeader("CDN-Cache-Control", "no-store"));
        },
        _v8 = null,
        _v9 = (_v0, _v1, _v2) => {
          _v8 = _v0, _v9.metrics.histogram("vimeo_nextjs_ssr_setup_duration_seconds", {
            route: _v2,
            result: _v1
          }, _v2), _v9.metrics.histogram("vimeo_nextjs_http_request_duration_seconds", {
            route: _v2,
            method: _v3,
            status_code: _v0
          }, _v4());
        };
      _v0.res?.once?.("finish", () => {
        let _v0 = String(_v0.res.statusCode);
        _v0.startsWith("5") && _v0 !== _v8 && _v9.metrics.counter("vimeo_nextjs_http_request_errors_total", {
          route: _v2,
          method: _v3,
          status_code: _v0
        });
      });
      let _v10 = _v0 => {
          var _v1;
          return "redirect" in _v0 ? "number" == typeof (_v1 = _v0.redirect).statusCode ? String(_v1.statusCode) : _v1.permanent ? "308" : "307" : "notFound" in _v0 ? "404" : String(_v0.res?.statusCode || 200);
        },
        _v11 = (_v0, _v1) => {
          let _v2 = _v6 ? 308 : 302;
          return _v9.metrics.counter("vimeo_nextjs_ssr_auth_redirect_total", {
            reason: _v0,
            destination: "/join" === _v1 ? "join" : "/log_in" === _v1 ? "log_in" : "custom"
          }), _v7(), _v9(String(_v2), "auth_redirect", _v4()), {
            redirect: {
              destination: _v1,
              statusCode: _v2
            }
          };
        },
        _v12 = null;
      _v9.metrics.gaugeInc("vimeo_nextjs_http_requests_active");
      try {
        let _v0 = (_v0 => {
            let _v1 = _v0.req.headers["crossroads-language"] ?? _v0.locale ?? "en";
            (0, _v2.setLocale)(_v1);
            try {
              let _v0 = _v0.req.headers[_v8.EDGE_LANGUAGE_HEADER],
                {
                  local: _v1,
                  edge: _v2,
                  parity: _v3
                } = (0, _v8.compareLanguages)(_v0.req.cookies?.language ?? null, _v0.req.headers["accept-language"] ?? null, _v0 ?? null);
              _v9.metrics.counter("vimeo_nextjs_lang_parity_total", {
                parity: (0, _v8.parityLabel)(_v3, _v0),
                local: _v12(_v1),
                edge: _v12(_v2)
              });
            } catch {}
            return _v1;
          })(_v0),
          _v1 = (0, _v4.isChinaRestrictedRequest)(_v0.req),
          _v2 = await _v13(),
          _v3 = await _v15(_v0, _v2),
          _v4 = _v0 => {
            let _v1 = _v3?.redirect;
            if ("function" != typeof _v1) return _v1 ?? _v0;
            try {
              return _v1(_v3) || _v0;
            } catch (_v0) {
              return console.warn("withPageSetup: redirect function threw; using fallback", _v0), _v0;
            }
          };
        if (!_v3?.requireLogin && !_v3?.capability && !_v3?.staffOnly) {
          _v12 = _v4();
          let _v0 = _v3?.inlineViewer === "all" || _v3?.inlineViewer && _v3.jwt && !(0, _v4.isLoggedOut)(_v3.req) ? _v19(_v3) : null,
            _v1 = _v3?.inlinePlayerAssets ? _v20(_v3) : null,
            _v2 = _v3?.inlineCreatePreloads && (0, _v4.isLoggedOut)(_v3.req) ? _v22(_v3) : null,
            _v3 = _v3?.inlineMagistoResources ? _v23(_v3) : null,
            _v4 = _v3?.inlineModbox && !(0, _v4.isLoggedOut)(_v3.req) ? _v21(_v3) : null,
            _v5 = await _v2(_v3),
            _v6 = _v0.res?.getHeader?.("Cache-Control");
          return "string" == typeof _v6 && _v6.includes("no-store") && !_v0.res?.getHeader?.(_v10.CDN_CC_MANAGED) && _v0.res.setHeader("CDN-Cache-Control", "no-store"), _v9(_v10(_v5), "success", _v12), _v4(_v5, {
            locale: _v0,
            isChinaRestricted: _v1
          }, _v0 ? await _v0 : null, _v1 ? await _v1 : null, _v2 ? await _v2 : null, _v3, _v4 ? await _v4 : null);
        }
        if ((0, _v4.isLoggedOut)(_v3.req)) {
          console.log("requireLogin: User is logged-out");
          let _v0 = _v4((0, _v4.hasLoggedIn)(_v3.req) ? "/log_in" : "/join");
          return _v11("logged_out", _v0);
        }
        if (!_v3.jwt) return console.log("requireLogin: Missing JWT"), _v11("missing_jwt", _v4("/log_in"));
        let _v5 = {};
        if (_v3?.staffOnly || _v3?.capability) try {
          let _v0 = ["canViewStaffOnlyPage"];
          if (_v3?.capability && _v0.push(_v3.capability), _v5 = await (0, _v6.fetchAndFormatCapabilties)({
            jwt: _v3.jwt,
            capabilities: _v0,
            apiUrl: _v3.baseUrl,
            headers: _v3.headers
          }), _v3?.staffOnly && !1 === _v5.canViewStaffOnlyPage) return console.log("staffOnly: User does not have staff access"), _v9("404", "capability_denied", _v4()), {
            notFound: !0
          };
          if (_v3?.capability && !1 === _v5[_v3.capability]) {
            if (console.log("capability: User is missing capabilities"), _v3?.redirect) {
              let _v0 = _v6 ? 308 : 307;
              return _v9.metrics.counter("vimeo_nextjs_ssr_auth_redirect_total", {
                reason: "capability_denied",
                destination: "custom"
              }), _v7(), _v9(String(_v0), "auth_redirect", _v4()), {
                redirect: {
                  destination: _v4("/log_in"),
                  statusCode: _v0
                }
              };
            }
            return _v9("404", "capability_denied", _v4()), {
              notFound: !0
            };
          }
        } catch (_v0) {
          return console.log("Failed to fetch capabilities ", _v0), _v11("capability_fetch_failed", _v4("/log_in"));
        }
        _v3.capabilities = _v5, _v12 = _v4();
        let _v6 = _v3?.inlineViewer ? _v19(_v3) : null,
          _v7 = _v3?.inlinePlayerAssets ? _v20(_v3) : null,
          _v8 = _v3?.inlineCreatePreloads && (0, _v4.isLoggedOut)(_v3.req) ? _v22(_v3) : null,
          _v9 = _v3?.inlineMagistoResources ? _v23(_v3) : null,
          _v10 = _v3?.inlineModbox ? _v21(_v3) : null,
          _v11 = await _v2(_v3),
          _v12 = _v0.res?.getHeader?.("Cache-Control");
        return "string" == typeof _v12 && _v12.includes("no-store") && !_v0.res?.getHeader?.(_v10.CDN_CC_MANAGED) && _v0.res.setHeader("CDN-Cache-Control", "no-store"), _v9(_v10(_v11), "success", _v12), _v4(_v11, {
          locale: _v0,
          isChinaRestricted: _v1
        }, _v6 ? await _v6 : null, _v7 ? await _v7 : null, _v8 ? await _v8 : null, _v9, _v10 ? await _v10 : null);
      } catch (_v0) {
        throw _v9("500", "error", _v12 ?? _v4()), _v0;
      } finally {
        _v0.res?.headersSent || _v0.res?.removeHeader?.(_v10.CDN_CC_MANAGED), _v9.metrics.gaugeDec("vimeo_nextjs_http_requests_active");
      }
    };
  }]);
}