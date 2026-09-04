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
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0);
  _v0.i(0);
  var _v25 = _v0.i(0),
    _v26 = _v0.i(0);
  let _v27 = "vgs_checkout_resume";
  function _v28(_v0) {
    try {
      sessionStorage.removeItem(_v0);
    } catch {}
  }
  async function _v29(_v0) {
    var _v1, _v2;
    let _v3,
      _v4,
      _v5 = await (0, _v25.loadStripe)(_v0.providerData.publishable_key);
    if (!_v5) throw Error("Stripe could not be initialized.");
    let _v6 = function (_v0) {
        let _v1 = `${_v0.setupIntentId}-${Math.random().toString(36).slice(2, 10)}`;
        try {
          sessionStorage.setItem(_v1, JSON.stringify(_v0));
        } catch {}
        return _v1;
      }((_v1 = {
        token: _v0.token,
        setupIntentId: _v0.setupIntentId
      }, _v3 = (0, _v26.decodeCheckoutToken)(_v1.token), {
        token: _v1.token,
        setupIntentId: _v1.setupIntentId,
        referenceKey: _v3.reference_key,
        productId: _v3.product_id,
        expiresAt: Date.now() + (_v1.ttlMs ?? 0)
      })),
      {
        error: _v7
      } = await _v5.confirmCardSetup(_v0.providerData.client_secret, {
        return_url: (_v2 = _v0.returnUrl, _v4 = _v2.includes("?") ? "&" : "?", `${_v2}${_v4}${_v27}=${_v6}`)
      });
    if (_v7) throw _v28(_v6), Error(_v7.message ?? "3D Secure authentication failed.");
  }
  let _v30 = {
    "3ds_stripe": async ({
      providerData: _v0,
      returnUrl: _v1,
      setupIntentId: _v2,
      token: _v3
    }) => {
      await _v29({
        providerData: _v0,
        returnUrl: _v1,
        setupIntentId: _v2,
        token: _v3
      });
    }
  };
  _v0.i(0), _v0.i(0), _v0.i(0), _v0.i(0), _v0.i(0);
  var _v31 = _v0.i(0);
  _v0.i(0), _v0.i(0), _v0.i(0), _v0.i(0), _v0.i(0), _v0.i(0);
  var _v32 = "https://js.verygoodvault.com",
    _v33 = "https://js3.verygoodvault.com",
    _v34 = (0, _v31.v4)(),
    _v35 = {
      vaultId: "",
      environment: "sandbox",
      version: "canary"
    },
    _v36 = "ScriptLoad",
    _v37 = function (_v0) {
      return _v0 + " is undefined.";
    },
    _v38 = _v35,
    _v39 = function (_v0) {
      _v0 && (_v38 = Object.assign({}, _v0));
    },
    _v40 = function () {
      return _v38;
    },
    _v41 = {
      vaultId: function (_v0) {
        return "string" == typeof _v0 && /^tnt.{8}$/.test(_v0);
      },
      environment: function (_v0) {
        return "string" == typeof _v0 && /^(sandbox|live)((-eu|-ap)-\d{1})?$/.test(_v0);
      },
      version: function (_v0) {
        return "canary" === _v0 || "string" == typeof _v0 && /^\d{1,2}\.\d{1,2}(\.\d{1,2}(-beta\.\d{1,2})?)?$/.test(_v0) && !_v0.startsWith("1.");
      },
      integrity: function (_v0) {
        return !_v0 || "string" == typeof _v0;
      },
      crossorigin: function (_v0) {
        return !_v0 || "string" == typeof _v0;
      },
      logLevel: function (_v0) {
        return void 0 === _v0 || "none" === _v0;
      }
    },
    _v42 = function (_v0) {
      throw Error(_v0 + " is required.");
    },
    _v43 = function (_v0, _v1) {
      if (_v0) {
        var _v2 = Object.keys(_v0).filter(function (_v0) {
          return !_v0[_v0](_v1[_v0]);
        }).map(function (_v0) {
          return Error(_v0 + " is invalid.");
        });
        if (_v2.length) throw _v2[0];
      }
    },
    _v44 = function (_v0) {
      _v43(_v41, _v0);
    },
    _v45 = function (_v0) {
      _v44(_v0), _v39(_v0), _v46({
        type: "LoadedFromPackage"
      });
    },
    _v46 = function (_v0) {
      var _v1 = _v40(),
        _v2 = _v1.vaultId,
        _v3 = _v1.environment,
        _v4 = _v1.version;
      if ("none" !== _v1.logLevel && "u" > typeof window && "function" == typeof window.btoa && "function" == typeof fetch) {
        var _v5 = "",
          _v6 = {
            env: _v3,
            tnt: _v2,
            userAgent: window.navigator.userAgent,
            version: _v4,
            timestamp: Date.now(),
            vgsCollectSessionId: _v34
          };
        try {
          _v5 = window.btoa(JSON.stringify(Object.assign({}, _v0, _v6)));
        } catch (_v0) {
          return;
        }
        fetch("https://vgs-collect-keeper.apps.verygood.systems/vgs", {
          method: "POST",
          body: _v5
        }).then(function () {
          return !0;
        }).catch(function () {
          return !0;
        });
      }
    },
    _v47 = function (_v0) {
      var _v1 = document.head || document.body;
      if (!_v1) throw Error("Unable to find document.head or document.body");
      return _v1.appendChild(_v0), _v0;
    },
    _v48 = function (_v0, _v1) {
      var _v2 = document.createElement("link");
      _v2.rel = _v0, _v2.href = _v1, _v47(_v2);
    },
    _v49 = function (_v0) {
      var _v1 = _v0.split(".");
      return {
        major: parseInt(_v1[0]) || 0,
        minor: parseInt(_v1[1]) || 0,
        patch: parseInt(_v1[2]) || 0
      };
    },
    _v50 = function (_v0, _v1) {
      if ("canary" === _v0) return !0;
      var _v2 = _v49(_v0),
        _v3 = _v49(_v1);
      return _v2.major !== _v3.major ? _v2.major > _v3.major : _v2.minor !== _v3.minor ? _v2.minor > _v3.minor : _v2.patch !== _v3.patch && _v2.patch > _v3.patch;
    },
    _v51 = _v32,
    _v52 = function () {
      try {
        return document.querySelectorAll('script[src^="' + _v51 + '/vgs-collect/"]').length > 0;
      } catch (_v0) {
        return !1;
      }
    },
    _v53 = function () {
      var _v0 = _v40(),
        _v1 = _v0.vaultId,
        _v2 = _v0.environment,
        _v3 = _v0.version,
        _v4 = _v0.integrity,
        _v5 = _v0.crossorigin,
        _v6 = document.createElement("script");
      return _v6.src = _v51 + "/vgs-collect/" + _v3 + "/vgs-collect.js?sessionId=" + _v34 + "&tenantId=" + _v1 + "&env=" + _v2, _v4 && (_v6.integrity = _v4), "string" == typeof _v5 && (_v6.crossOrigin = _v5), _v47(_v6), _v6;
    },
    _v54 = function (_v0, _v1, _v2) {
      _v2 && window.VGSCollect && "function" == typeof window.VGSCollect.logLevel && window.VGSCollect.logLevel(_v2), window.VGSCollect.init = function (_v0) {
        return void 0 === _v0 && (_v0 = function () {}), window.VGSCollect.create(_v0, _v1, _v0);
      };
    },
    _v55 = function () {
      _v48("dns-prefetch", _v32), _v48("dns-prefetch", _v33);
    },
    _v56 = function () {
      _v48("preconnect", _v32), _v48("preconnect", _v33);
    };
  Promise.resolve().then(function () {
    "u" > typeof window && !window.VGSCollect && (_v55(), _v56());
  });
  var _v57 = function (_v0) {
    void 0 === _v0 && (_v0 = _v42("config"));
    var _v1 = _v0,
      _v2 = _v1.vaultId,
      _v3 = void 0 === _v2 ? _v42("vaultId") : _v2,
      _v4 = _v1.environment,
      _v5 = void 0 === _v4 ? _v35.environment : _v4,
      _v6 = _v1.version,
      _v7 = void 0 === _v6 ? _v35.version : _v6,
      _v8 = _v1.integrity,
      _v9 = _v1.crossorigin,
      _v10 = _v1.logLevel;
    return "canary" === _v7 && console.warn("Please explicitly set locked VGS Collect.js version before going live. Check out the changelog https://www.verygoodsecurity.com/docs/vgs-collect/js/changelog"), _v45({
      vaultId: _v3,
      environment: _v5,
      version: _v7,
      integrity: _v8,
      crossorigin: _v9,
      logLevel: _v10
    }), new Promise(function (_v0, _v1) {
      if ("u" < typeof window) return void _v1(_v37("window"));
      if (window.VGSCollect) {
        _v54(_v3, _v5, _v10), _v0(window.VGSCollect);
        return;
      }
      (function _v0(_v1) {
        return void 0 === _v1 && (_v1 = !0), new Promise(function (_v0, _v1) {
          var _v2 = _v40().version;
          if (_v52() && window.VGSCollect && _v0(window.VGSCollect), !_v1 && _v50(_v2, "2.3.0") && (_v51 = _v33), !window.VGSCollect) {
            var _v3 = _v53();
            _v3 && (_v3.onload = function () {
              window.VGSCollect || (_v46({
                type: "InstanceUndefined",
                status: "OK",
                mainCDN: _v1
              }), _v1(_v37("VGS Collect"))), _v46({
                type: _v36,
                status: "OK",
                mainCDN: _v1
              }), _v0(window.VGSCollect);
            }, _v3.onerror = function () {
              _v46({
                type: _v36,
                status: "Failed",
                mainCDN: _v1
              }), _v1 ? _v0(_v0(!1)) : _v1("VGS Collect.js script was not loaded.");
            });
          }
        });
      })().then(function () {
        _v54(_v3, _v5, _v10), _v0(window.VGSCollect);
      }).catch(function (_v0) {
        _v1(_v0);
      });
    });
  };
  function _v58(_v0, _v1) {
    if (_v0.id) return `#${_v0.id}`;
    let _v2 = `juno-checkout-${_v1}-${crypto.randomUUID()}`;
    return _v0.setAttribute("id", _v2), `#${_v2}`;
  }
  class _v59 extends Error {
    details;
    constructor(_v0, _v1) {
      super(_v0), this.details = _v1;
    }
  }
  function _v60(_v0) {
    return "pan_alias" === _v0 || _v0.includes("number") || _v0.includes("card") ? "pan" : "cvv_alias" === _v0 || _v0.includes("cvv") || _v0.includes("cvc") ? "cvv" : null;
  }
  function _v61(_v0, _v1) {
    let _v2 = void 0 === _v1 ? "Card setup failed" : `Card setup failed (${_v1})`;
    if (!_v0 || "object" != typeof _v0) return new _v59(_v2, {
      kind: "unknown"
    });
    let _v3 = "string" == typeof _v0.error_code ? _v0.error_code : null,
      _v4 = _v0.error_description ?? _v0.error;
    if ("string" == typeof _v4 && "" !== _v4.trim()) return new _v59(`${_v2}: ${_v4}`, {
      kind: "http",
      status: _v1 ?? 0,
      errorCode: _v3,
      errorDescription: _v4
    });
    let _v5 = _v0.errors;
    if (Array.isArray(_v5) && _v5.length > 0) {
      let _v0 = _v5.map(_v0 => [_v0.path, _v0.detail].filter(Boolean).join(": ")).join("; "),
        _v1 = _v5.map(_v0 => _v0.path ? _v60(_v0.path) : null).filter(_v0 => null !== _v0);
      return new _v59(`${_v2}: ${_v0}`, {
        kind: _v1.length > 0 ? "field_validation" : "unknown",
        ...(_v1.length > 0 ? {
          fields: _v1
        } : {})
      });
    }
    let _v6 = Object.keys(_v0).map(_v60).filter(_v0 => null !== _v0);
    return _v6.length > 0 ? new _v59(`${_v2}: check ${_v6.join(", ")}`, {
      kind: "field_validation",
      fields: _v6
    }) : new _v59(_v2, {
      kind: "http",
      status: _v1 ?? 0,
      errorCode: _v3,
      errorDescription: null
    });
  }
  let _v62 = {
      mount: async function (_v0) {
        let _v1 = (await _v57({
          vaultId: _v0.authorization.vault_id,
          environment: _v0.authorization.environment,
          version: "3.3.0"
        })).init(_v0.onStateChange);
        _v1.setRouteId(_v0.authorization.inbound_route_id);
        let _v2 = function (_v0) {
            let {
              fontFamily: _v1 = "Arial, sans-serif",
              fontFace: _v2,
              fontSize: _v3 = "14px",
              lineHeight: _v4 = "19.6px",
              letterSpacing: _v5,
              padding: _v6 = "12px 11px",
              color: _v7 = "#000",
              placeholderColor: _v8 = window.getComputedStyle(window.document.documentElement).getPropertyValue("--vimeo-colors-text-secondary").trim() || "#3d4751",
              backgroundColor: _v9,
              transition: _v10
            } = _v0 ?? {};
            return {
              "box-sizing": "border-box",
              ...(_v2 && {
                "@font-face": {
                  "font-family": _v2.fontFamily,
                  "font-style": _v2.fontStyle,
                  "font-weight": _v2.fontWeight,
                  "font-display": _v2.fontDisplay,
                  src: _v2.src
                }
              }),
              "font-family": _v1,
              "font-size": _v3,
              "line-height": _v4,
              ...(_v5 ? {
                "letter-spacing": _v5
              } : {}),
              padding: _v6,
              color: _v7,
              ...(_v9 ? {
                "background-color": _v9
              } : {}),
              ...(_v10 ? {
                transition: _v10
              } : {}),
              "&::placeholder": {
                color: _v8
              }
            };
          }(_v0.cardFieldStyle),
          _v3 = _v0.cardFieldPlaceholders;
        return _v1.field(_v58(_v0.fieldHosts.number, "number"), {
          name: "pan_alias",
          type: "card-number",
          validations: ["required", "validCardNumber"],
          ...(_v3?.cardNumber ? {
            placeholder: _v3.cardNumber,
            showCardIcon: !0,
            autoComplete: "off"
          } : {
            showCardIcon: !1
          }),
          css: _v2
        }), _v1.field(_v58(_v0.fieldHosts.cvc, "cvc"), {
          name: "cvv_alias",
          type: "card-security-code",
          validations: ["required", "validCardSecurityCode"],
          ...(_v3?.cvv ? {
            placeholder: _v3.cvv
          } : {}),
          css: _v2
        }), _v1;
      },
      submit: function (_v0) {
        return new Promise((_v0, _v1) => {
          _v0.form.submit(`/products/${encodeURIComponent(_v0.productId)}/setup-intents`, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${_v0.checkoutToken}`
            },
            data: _v0 => {
              let _v1 = _v0.cardholderName ?? void 0;
              return {
                hcaptcha_token: _v0.hcaptchaToken,
                payment_method_setup: {
                  type: _v0.authorization.type,
                  vault_id: _v0.authorization.vault_id,
                  pan_alias: _v0.pan_alias,
                  cvv_alias: _v0.cvv_alias,
                  ...(_v1 ? {
                    cardholder_name: _v1
                  } : {}),
                  exp_month: _v0.expiration.month,
                  exp_year: _v0.expiration.year
                }
              };
            }
          }, (_v0, _v1) => {
            _v0 >= 200 && _v0 < 300 ? _v0(_v1) : _v1(_v61(_v1, _v0));
          }, _v0 => _v1(_v61(_v0, void 0)));
        });
      }
    },
    _v63 = null;
  async function _v64(_v0, _v1) {
    let _v2 = await (window.hcaptcha ? Promise.resolve(window.hcaptcha) : _v63 || (_v63 = new Promise((_v0, _v1) => {
        let _v2 = document.createElement("script");
        window.__vimeoJunoHcaptchaOnload = () => {
          (window.__vimeoJunoHcaptchaOnload = void 0, window.hcaptcha) ? _v0(window.hcaptcha) : (_v63 = null, _v1(Error("hCaptcha did not load.")));
        }, _v2.src = "https://js.hcaptcha.com/1/api.js?render=explicit&onload=__vimeoJunoHcaptchaOnload", _v2.async = !0, _v2.onerror = () => {
          window.__vimeoJunoHcaptchaOnload = void 0, _v63 = null, _v1(Error("hCaptcha failed to load."));
        }, document.head.appendChild(_v2);
      }))),
      _v3 = _v2.render(_v0, {
        sitekey: _v1,
        size: "invisible"
      });
    return async () => {
      try {
        _v2.reset(_v3);
      } catch {}
      return (await _v2.execute(_v3, {
        async: !0
      })).response;
    };
  }
  let _v65 = {
    production: "https://public.juno.bendingspoons.com",
    preproduction: "https://public.preproduction.juno.bendingspoons.com"
  };
  async function _v66(_v0, _v1, _v2) {
    let _v3 = await fetch(_v0, {
        method: "POST",
        credentials: "omit",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${_v1}`
        },
        body: JSON.stringify(_v2)
      }),
      _v4 = 204 === _v3.status ? null : await _v3.json();
    if (!_v3.ok) throw Error((_v4 && "object" == typeof _v4 && "error" in _v4 ? String(_v4.error) : _v3.statusText) || `Request failed (${_v3.status}).`);
    return _v4;
  }
  function _v67(_v0, _v1, _v2, _v3) {
    return _v66(`${_v65[_v0]}/products/${encodeURIComponent(_v1)}/setup-intents/${encodeURIComponent(_v3)}/confirm-authentication`, _v2, {});
  }
  class _v68 extends Error {
    failure;
    constructor(_v0, _v1) {
      super(_v0), this.failure = _v1;
    }
  }
  function _v69(_v0, _v1, _v2) {
    return {
      category: "validation",
      stage: _v0,
      code: _v1,
      validation: {
        invalidInputs: _v2
      }
    };
  }
  function _v70(_v0, _v1 = "unexpected") {
    return {
      category: "unexpected",
      stage: _v0,
      code: _v1
    };
  }
  function _v71(_v0) {
    if ("succeeded" === _v0.status) return {
      status: "succeeded",
      setupIntentId: _v0.id
    };
    if ("failed" === _v0.status) {
      let _v0 = _v0.latest_attempt?.result?.error,
        _v1 = _v0?.category,
        _v2 = _v0?.code ?? "unexpected";
      return {
        status: "failed",
        failure: "terminal" === _v1 ? {
          category: "decline",
          stage: "finalization",
          code: _v2,
          declineKind: "terminal"
        } : "user_action_required" === _v1 ? {
          category: "decline",
          stage: "finalization",
          code: _v2,
          declineKind: "user_action_required"
        } : "retryable" === _v1 ? {
          category: "decline",
          stage: "finalization",
          code: _v2,
          declineKind: "retryable"
        } : _v70("finalization", _v2)
      };
    }
    return null;
  }
  async function _v72(_v0, _v1, _v2, _v3, _v4) {
    let _v5 = _v0.latest_attempt;
    if (!_v5 || _v5?.authentication.status !== "required") try {
      return await _v67(_v4, _v3, _v2, _v0.id);
    } catch (_v0) {
      throw new _v68(_v0 instanceof Error ? _v0.message : "Authentication confirmation failed.", _v70("finalization", "authentication_confirmation_failed"));
    }
    let _v6 = _v5.authentication.provider_data.type,
      _v7 = _v30[_v6];
    if (!_v7) throw Error(`Unsupported 3D Secure provider: ${_v6}`);
    try {
      await _v7({
        providerData: _v5.authentication.provider_data,
        returnUrl: _v1.returnUrl,
        setupIntentId: _v0.id,
        token: _v2
      });
    } catch (_v0) {
      throw new _v68(_v0 instanceof Error ? _v0.message : "3D Secure authentication failed.", {
        category: "decline",
        stage: "authentication",
        code: "three_ds_failed",
        declineKind: "user_action_required"
      });
    }
    try {
      return await _v67(_v4, _v3, _v2, _v0.id);
    } catch (_v0) {
      throw new _v68(_v0 instanceof Error ? _v0.message : "Authentication confirmation failed.", _v70("finalization", "authentication_confirmation_failed"));
    }
  }
  var _v73 = _v0.i(0);
  function _v74(_v0) {
    throw Error(`Unhandled failure category: ${JSON.stringify(_v0)}`);
  }
  function _v75(_v0) {
    if (!_v0) return (0, _v12.translate)({
      singular: "Something went wrong on our side. Please try again later or contact support if the problem persists.",
      dictionary: {
        es: {
          singular: "Algo salió mal por nuestra parte. Por favor, inténtelo de nuevo más tarde o póngase en contacto con el soporte si el problema persiste."
        },
        "de-DE": {
          singular: "Bei uns ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut oder kontaktieren Sie den Support, falls das Problem weiterhin besteht."
        },
        "fr-FR": {
          singular: "Une erreur est survenue de notre côté. Veuillez réessayer plus tard ou contacter l'assistance si le problème persiste."
        },
        "ja-JP": {
          singular: "当社側で問題が発生しました. 後ほど再度お試しいただくか、問題が解消しない場合はサポートにお問い合わせください."
        },
        "ko-KR": {
          singular: "저희 측에서 문제가 발생했습니다. 나중에 다시 시도해 보시거나 문제가 지속되면 고객 지원에 문의해 주세요."
        },
        "pt-BR": {
          singular: "Algo deu errado do nosso lado. Por favor, tente novamente mais tarde ou entre em contato com o suporte se o problema persistir."
        },
        "zh-CN": {
          singular: "我们这边出现了问题。请稍后再试，若问题仍然存在，请联系客服。"
        }
      }
    });
    switch (_v0.category) {
      case "validation":
        {
          let _v0 = _v0.validation.invalidInputs,
            _v1 = _v0.some(_v0 => "pan" === _v0.field),
            _v2 = _v0.some(_v0 => "cvv" === _v0.field);
          if (_v0.some(_v0 => "expiration" === _v0.field), _v1 && _v2) return (0, _v12.translate)({
            singular: "Please check the format of your card number and CVV.",
            dictionary: {
              es: {
                singular: "Compruebe el formato del número de tarjeta y del CVV."
              },
              "de-DE": {
                singular: "Bitte überprüfen Sie das Format Ihrer Kartennummer und Ihres CVV-Codes."
              },
              "fr-FR": {
                singular: "Veuillez vérifier le format du numéro de votre carte et du CVV."
              },
              "ja-JP": {
                singular: "カード番号とCVV の形式をご確認ください."
              },
              "ko-KR": {
                singular: "카드 번호와 CVV 형식을 확인해 주세요."
              },
              "pt-BR": {
                singular: "Por favor, verifique o formato do número do seu cartão e do CVV."
              },
              "zh-CN": {
                singular: "请检查您的卡号和CVV的格式。"
              }
            }
          });
          if (_v1) return (0, _v12.translate)({
            singular: "Please check the format of your card number.",
            dictionary: {
              es: {
                singular: "Compruebe el formato del número de tarjeta."
              },
              "de-DE": {
                singular: "Bitte überprüfen Sie das Format Ihrer Kartennummer."
              },
              "fr-FR": {
                singular: "Veuillez vérifier le format du numéro de votre carte."
              },
              "ja-JP": {
                singular: "カード番号の形式をご確認ください."
              },
              "ko-KR": {
                singular: "카드 번호 형식을 확인해 주세요."
              },
              "pt-BR": {
                singular: "Por favor, verifique o formato do número do seu cartão."
              },
              "zh-CN": {
                singular: "请检查您的卡号格式。"
              }
            }
          });
          if (_v2) return (0, _v12.translate)({
            singular: "Please check the format of your CVV.",
            dictionary: {
              es: {
                singular: "Compruebe el formato de su CVV."
              },
              "de-DE": {
                singular: "Bitte überprüfen Sie das Format Ihres CVV-Codes."
              },
              "fr-FR": {
                singular: "Veuillez vérifier le format de votre CVV."
              },
              "ja-JP": {
                singular: "CVV の形式をご確認ください."
              },
              "ko-KR": {
                singular: "CVV 형식을 확인해 주세요."
              },
              "pt-BR": {
                singular: "Por favor, verifique o formato do seu CVV."
              },
              "zh-CN": {
                singular: "请检查您的CVV格式。"
              }
            }
          });
          return (0, _v12.translate)({
            singular: "Some of your payment details are missing or invalid. Please check the form and try again.",
            dictionary: {
              es: {
                singular: "Algunos de los datos de pago faltan o son inválidos. Revise el formulario y vuelva a intentarlo."
              },
              "de-DE": {
                singular: "Einige Ihrer Zahlungsangaben fehlen oder sind ungültig. Bitte prüfen Sie das Formular und versuchen Sie es erneut."
              },
              "fr-FR": {
                singular: "Certaines de vos informations de paiement sont manquantes ou invalides. Veuillez vérifier le formulaire et réessayer."
              },
              "ja-JP": {
                singular: "支払い情報の一部が不足しているか無効です。フォームを確認して、再度お試しください。"
              },
              "ko-KR": {
                singular: "결제 정보의 일부가 누락되었거나 유효하지 않습니다. 양식을 확인한 후 다시 시도해 주세요."
              },
              "pt-BR": {
                singular: "Alguns dados do seu pagamento estão ausentes ou inválidos. Verifique o formulário e tente novamente."
              },
              "zh-CN": {
                singular: "您的部分付款信息缺失或无效。请检查表单并重试。"
              }
            }
          });
        }
      case "decline":
        if ("three_ds_failed" === _v0.code) return (0, _v12.translate)({
          singular: "Authentication failed. Please try again or use a different card.",
          dictionary: {
            es: {
              singular: "La autenticación ha fallado. Por favor, inténtelo de nuevo o utilice otra tarjeta."
            },
            "de-DE": {
              singular: "Die Authentifizierung ist fehlgeschlagen. Bitte versuchen Sie es erneut oder verwenden Sie eine andere Karte."
            },
            "fr-FR": {
              singular: "Échec de l’authentification. Veuillez réessayer ou utiliser une autre carte."
            },
            "ja-JP": {
              singular: "認証に失敗しました。もう一度お試しいただくか、別のカードをご利用ください。"
            },
            "ko-KR": {
              singular: "인증에 실패했습니다. 다시 시도하시거나 다른 카드를 사용해 주세요."
            },
            "pt-BR": {
              singular: "Falha na autenticação. Por favor, tente novamente ou use outro cartão."
            },
            "zh-CN": {
              singular: "身份验证失败。请再试一次或使用另一张卡。"
            }
          }
        });
        switch (_v0.declineKind) {
          case "retryable":
            return (0, _v12.translate)({
              singular: "We couldn't process your card right now. Please try again.",
              dictionary: {
                es: {
                  singular: "No pudimos procesar su tarjeta en este momento. Por favor, inténtelo de nuevo."
                },
                "de-DE": {
                  singular: "Wir konnten Ihre Karte derzeit nicht verarbeiten. Bitte versuchen Sie es erneut."
                },
                "fr-FR": {
                  singular: "Nous n'avons pas pu traiter votre carte pour le moment. Veuillez réessayer."
                },
                "ja-JP": {
                  singular: "現在、お客様のカードを処理できませんでした。もう一度お試しください。"
                },
                "ko-KR": {
                  singular: "지금은 카드 결제를 처리할 수 없습니다. 다시 시도해 주세요."
                },
                "pt-BR": {
                  singular: "Não conseguimos processar seu cartão agora. Por favor, tente novamente."
                },
                "zh-CN": {
                  singular: "我们目前无法处理您的卡. 请重试."
                }
              }
            });
          case "user_action_required":
            return (0, _v12.translate)({
              singular: "Your card was declined. Please check your details or try a different card.",
              dictionary: {
                es: {
                  singular: "Su tarjeta fue rechazada. Por favor, verifique sus datos o pruebe con otra tarjeta."
                },
                "de-DE": {
                  singular: "Ihre Karte wurde abgelehnt. Bitte überprüfen Sie Ihre Angaben oder versuchen Sie es mit einer anderen Karte."
                },
                "fr-FR": {
                  singular: "Votre carte a été refusée. Vérifiez vos informations ou essayez une autre carte."
                },
                "ja-JP": {
                  singular: "お使いのカードは承認されませんでした。詳細をご確認いただくか、別のカードをお試しください。"
                },
                "ko-KR": {
                  singular: "카드가 거부되었습니다. 세부 정보를 확인하거나 다른 카드를 사용해 주세요."
                },
                "pt-BR": {
                  singular: "Seu cartão foi recusado. Verifique seus dados ou tente outro cartão."
                },
                "zh-CN": {
                  singular: "您的卡被拒绝. 请核对您的信息或尝试使用另一张卡."
                }
              }
            });
          case "terminal":
            return (0, _v12.translate)({
              singular: "This card was declined. Please try a different card.",
              dictionary: {
                es: {
                  singular: "Esta tarjeta fue rechazada. Por favor, pruebe con otra tarjeta."
                },
                "de-DE": {
                  singular: "Diese Karte wurde abgelehnt. Bitte versuchen Sie es mit einer anderen Karte."
                },
                "fr-FR": {
                  singular: "Cette carte a été refusée. Veuillez essayer une autre carte."
                },
                "ja-JP": {
                  singular: "このカードは承認されませんでした。別のカードをお試しください。"
                },
                "ko-KR": {
                  singular: "이 카드는 거부되었습니다. 다른 카드를 사용해 주세요."
                },
                "pt-BR": {
                  singular: "Este cartão foi recusado. Por favor, tente outro cartão."
                },
                "zh-CN": {
                  singular: "该卡被拒绝. 请尝试使用另一张卡."
                }
              }
            });
          default:
            return _v74(_v0.declineKind);
        }
      case "retryable":
        return (0, _v12.translate)({
          singular: "We couldn't process your card right now. Please try again.",
          dictionary: {
            es: {
              singular: "No pudimos procesar su tarjeta en este momento. Por favor, inténtelo de nuevo."
            },
            "de-DE": {
              singular: "Wir konnten Ihre Karte derzeit nicht verarbeiten. Bitte versuchen Sie es erneut."
            },
            "fr-FR": {
              singular: "Nous n'avons pas pu traiter votre carte pour le moment. Veuillez réessayer."
            },
            "ja-JP": {
              singular: "現在、お客様のカードを処理できませんでした。もう一度お試しください。"
            },
            "ko-KR": {
              singular: "지금은 카드 결제를 처리할 수 없습니다. 다시 시도해 주세요."
            },
            "pt-BR": {
              singular: "Não conseguimos processar seu cartão agora. Por favor, tente novamente."
            },
            "zh-CN": {
              singular: "我们目前无法处理您的卡. 请重试."
            }
          }
        });
      case "unexpected":
        return (0, _v12.translate)({
          singular: "Something went wrong on our side. Please try again later or contact support if the problem persists.",
          dictionary: {
            es: {
              singular: "Algo salió mal por nuestra parte. Por favor, inténtelo de nuevo más tarde o póngase en contacto con el soporte si el problema persiste."
            },
            "de-DE": {
              singular: "Bei uns ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut oder kontaktieren Sie den Support, falls das Problem weiterhin besteht."
            },
            "fr-FR": {
              singular: "Une erreur est survenue de notre côté. Veuillez réessayer plus tard ou contacter l'assistance si le problème persiste."
            },
            "ja-JP": {
              singular: "当社側で問題が発生しました. 後ほど再度お試しいただくか、問題が解消しない場合はサポートにお問い合わせください."
            },
            "ko-KR": {
              singular: "저희 측에서 문제가 발생했습니다. 나중에 다시 시도해 보시거나 문제가 지속되면 고객 지원에 문의해 주세요."
            },
            "pt-BR": {
              singular: "Algo deu errado do nosso lado. Por favor, tente novamente mais tarde ou entre em contato com o suporte se o problema persistir."
            },
            "zh-CN": {
              singular: "我们这边出现了问题。请稍后再试，若问题仍然存在，请联系客服。"
            }
          }
        });
      default:
        return _v74(_v0);
    }
  }
  let _v76 = ({
      children: _v0,
      defaultPaymentFormType: _v1 = _v22.PaymentFormTypes.TYPE_CREDIT_CARD,
      formAlert: _v2,
      onFormLoaded: _v3,
      onPaymentTypeChanged: _v4,
      onControllerChange: _v5,
      onStatusChange: _v6,
      onSubmissionComplete: _v7,
      onSubmissionStart: _v8,
      onResumedPaymentMethod: _v9,
      isAddingPaymentMethod: _v10,
      isDefault: _v11,
      showExistingPaymentMethods: _v12,
      showPaypalOption: _v13,
      bspStyling: _v14,
      wetransferInspired: _v15 = !1,
      storedMethod: _v16,
      billingAddress: _v17
    }) => {
      let _v18 = (0, _v3.useRouter)(),
        _v19 = (0, _v14.useViewer)(),
        {
          state: {
            order: _v20,
            tier: _v21,
            isMonthly: _v22,
            isFreeTrial: _v23,
            subscriptionProduct: _v24,
            creatorProductAction: _v25,
            iosUserId: _v26,
            paymentAlert: _v27
          },
          dispatch: _v28
        } = (0, _v73.useStateContext)(),
        _v29 = (0, _v4.useRef)(null),
        _v30 = (0, _v4.useRef)(null),
        _v31 = (0, _v4.useRef)(null),
        _v32 = (0, _v4.useRef)({}),
        _v33 = (0, _v4.useRef)(""),
        _v34 = (0, _v4.useRef)(null),
        _v35 = (0, _v4.useRef)(null),
        [_v36, _v37] = (0, _v4.useState)(""),
        _v38 = (0, _v4.useRef)(!1),
        _v39 = (0, _v4.useRef)(!1),
        _v40 = (0, _v4.useRef)(!1),
        _v41 = (0, _v4.useRef)(_v7),
        _v42 = (0, _v4.useRef)(_v8),
        _v43 = (0, _v4.useRef)(_v9),
        _v44 = (0, _v4.useRef)(_v10),
        [_v45, _v46] = (0, _v4.useState)(_v1),
        [_v47, _v48] = (0, _v4.useState)({}),
        {
          trackStep: _v49
        } = (0, _v20.useJunoSetupCheckoutTracking)(_v10 ? "add_payment_method" : "purchase", _v26),
        {
          trackCheckoutFailed: _v50
        } = (0, _v13.useCheckoutTracking)(_v26),
        _v51 = (0, _v23.getCheckoutPeriodicity)(_v24?.isCreatorProduct, _v25, _v22),
        _v52 = (0, _v4.useCallback)((_v0, _v1) => {
          if (_v44.current || !(0, _v21.acquireCheckoutFailedLatch)()) return;
          let _v2 = _v0?.category === "decline" ? _v0.declineKind : void 0,
            _v3 = (0, _v21.classifyClientDecline)({
              source: "juno_vgs",
              category: _v0?.category,
              declineKind: _v2,
              code: _v0?.code,
              message: _v1 ?? _v75(_v0)
            });
          _v50({
            tier: _v24?.tier ?? _v21 ?? "unknown",
            periodicity: _v51,
            isFreeTrial: _v23,
            source: _v3.source,
            decline_category: _v3.decline_category,
            failing_field: _v3.failing_field,
            error_code: _v3.error_code,
            error_message: _v3.error_message
          });
        }, [_v23, _v51, _v24, _v21, _v50]),
        _v53 = _v18.query?.token ? String(_v18.query.token) : void 0,
        _v54 = _v19?.user?.id ?? _v26,
        {
          preauthorize: _v55,
          ensureCustomer: _v56,
          createPaymentMethod: _v57
        } = (0, _v19.useJunoSetupCheckoutApi)({
          isAddingPaymentMethod: !!_v10,
          setPaymentMethodAsActive: !_v10 || (_v11 ?? !0),
          billingAddress: _v17,
          iosJwt: _v53,
          trackStep: _v49
        });
      (0, _v4.useEffect)(() => {
        _v44.current = _v10, _v43.current = _v9, _v41.current = _v7, _v42.current = _v8;
      });
      let _v58 = (0, _v4.useCallback)(_v0 => {
          _v33.current = _v0, _v37(_v0);
        }, []),
        _v59 = (0, _v4.useCallback)(() => {
          let {
            month: _v0,
            year: _v1
          } = _v32.current;
          if (!_v0 || !_v1) return null;
          let _v2 = new Date();
          return _v1 < _v2.getFullYear() || _v1 === _v2.getFullYear() && _v0 < _v2.getMonth() + 1 ? null : {
            month: _v0,
            year: _v1
          };
        }, []),
        _v60 = (0, _v4.useCallback)(() => _v33.current.trim() || null, []),
        _v61 = (0, _v4.useCallback)((_v0, _v1) => {
          _v48(_v0 => {
            let _v1 = {
              ..._v0,
              [_v0]: Number(_v1)
            };
            return _v32.current = _v1, _v1;
          });
        }, []),
        [_v62, _v63] = (0, _v4.useState)({}),
        _v64 = (0, _v4.useCallback)(_v0 => {
          _v63(_v0 => {
            let _v1 = _v0.pan_alias,
              _v2 = _v0.cvv_alias;
            return _v0.pan_alias?.isEmpty === _v1?.isEmpty && _v0.pan_alias?.isFocused === _v1?.isFocused && _v0.cvv_alias?.isEmpty === _v2?.isEmpty && _v0.cvv_alias?.isFocused === _v2?.isFocused ? _v0 : {
              pan_alias: _v1,
              cvv_alias: _v2
            };
          });
        }, []),
        _v65 = (0, _v4.useCallback)(_v0 => {
          _v44.current && _v41.current?.({
            kind: "juno",
            ..._v0
          });
        }, []),
        _v66 = (0, _v4.useCallback)(() => {
          _v28({
            type: _v22.ActionTypes.PAYMENT_ALERT,
            payload: {
              status: "error",
              message: (0, _v12.translate)({
                singular: "Something went wrong on our side. Please try again later or contact support if the problem persists.",
                dictionary: {
                  es: {
                    singular: "Algo salió mal por nuestra parte. Por favor, inténtelo de nuevo más tarde o póngase en contacto con el soporte si el problema persiste."
                  },
                  "de-DE": {
                    singular: "Bei uns ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut oder kontaktieren Sie den Support, falls das Problem weiterhin besteht."
                  },
                  "fr-FR": {
                    singular: "Une erreur est survenue de notre côté. Veuillez réessayer plus tard ou contacter l'assistance si le problème persiste."
                  },
                  "ja-JP": {
                    singular: "当社側で問題が発生しました. 後ほど再度お試しいただくか、問題が解消しない場合はサポートにお問い合わせください."
                  },
                  "ko-KR": {
                    singular: "저희 측에서 문제가 발생했습니다. 나중에 다시 시도해 보시거나 문제가 지속되면 고객 지원에 문의해 주세요."
                  },
                  "pt-BR": {
                    singular: "Algo deu errado do nosso lado. Por favor, tente novamente mais tarde ou entre em contato com o suporte se o problema persistir."
                  },
                  "zh-CN": {
                    singular: "我们这边出现了问题。请稍后再试，若问题仍然存在，请联系客服。"
                  }
                }
              })
            }
          });
        }, [_v28]),
        _v67 = (0, _v4.useCallback)((_v0, _v1) => {
          if ((_v39.current || _v1) && ("succeeded" === _v0.status ? _v49({
            stage: "setup_succeeded",
            outcome: "completed"
          }) : _v49({
            stage: _v0.failure.stage,
            outcome: "failed",
            failure: {
              category: _v0.failure.category,
              code: _v0.failure.code,
              paymentMethodType: "vgs_card"
            }
          })), "succeeded" !== _v0.status) {
            let _v0 = _v75(_v0.failure);
            _v52(_v0.failure), _v65({
              success: !1,
              errorMessage: _v0
            }), _v28({
              type: _v22.ActionTypes.PAYMENT_ALERT,
              payload: {
                status: "error",
                message: _v0
              }
            });
            return;
          }
          _v1 && _v57(_v0.setupIntentId).then(_v0 => {
            ((0, _v24.clearCachedToken)(), _v44.current) ? _v65({
              success: !0,
              paymentMethodId: _v0,
              setupIntentId: _v0.setupIntentId
            }) : _v43.current?.(_v0);
          }).catch(_v0 => {
            _v65({
              success: !1,
              errorMessage: _v0 instanceof Error ? _v0.message : "Payment method creation failed."
            }), _v66();
          });
        }, [_v57, _v28, _v66, _v65, _v52, _v49]),
        {
          state: _v68,
          submit: _v69
        } = function ({
          cardFieldRefs: _v0,
          cardFieldStyle: _v1,
          cardFieldPlaceholders: _v2,
          getCardholderName: _v3,
          getExpiration: _v4,
          isActive: _v5,
          junoEnvironment: _v6,
          userId: _v7,
          onResult: _v8,
          preauthorize: _v9,
          returnUrl: _v10,
          onCardFieldsStateChange: _v11
        }) {
          let [_v12, _v13] = (0, _v4.useState)("idle"),
            _v14 = (0, _v4.useRef)(null);
          return (0, _v4.useEffect)(() => {
            if (!_v5) return;
            let _v0 = !1,
              _v1 = 0,
              _v2 = () => {
                var _v0;
                let _v1, _v2, _v3, _v4, _v5, _v6, _v7, _v8, _v9;
                if (_v0 || _v14.current) return;
                let {
                  cardNumber: _v10,
                  securityCode: _v11,
                  captcha: _v12
                } = _v0;
                if (!_v10.current || !_v11.current || !_v12.current) {
                  _v1 = requestAnimationFrame(_v2);
                  return;
                }
                let _v13 = (_v1 = (_v0 = {
                  junoEnvironment: _v6,
                  userId: _v7,
                  onResult: _v8,
                  preauthorize: _v9,
                  getCardholderName: _v3,
                  getExpiration: _v4,
                  cardFieldStyle: _v1,
                  cardFieldPlaceholders: _v2,
                  returnUrl: _v10,
                  onStateChange: _v13,
                  onCardFieldsStateChange: _v11
                }).junoEnvironment, _v2 = null, _v3 = null, _v4 = null, _v5 = null, _v6 = null, _v7 = () => Promise.reject(Error("Checkout hCaptcha is unavailable.")), _v8 = !1, _v9 = (_v0, _v1 = !1, _v2 = "terminal") => (_v0.onResult(_v0, _v1), _v0.onStateChange(_v2), _v0), {
                  async mount(_v0) {
                    var _v1;
                    let _v2,
                      _v3 = (_v1 = window.location.href, _v2 = /[?&]vgs_checkout_resume=([^&]+)/.exec(_v1), _v2?.[1] ?? null);
                    if (_v3) {
                      let _v0,
                        _v1 = function (_v0, _v1) {
                          try {
                            let _v0 = sessionStorage.getItem(_v0);
                            if (!_v0) return null;
                            let _v1 = JSON.parse(_v0);
                            if (!_v1.token || !_v1.setupIntentId || _v1.expiresAt <= Date.now() || void 0 === _v1 || (0, _v26.decodeCheckoutToken)(_v1.token).user_id !== _v1) return _v28(_v0), null;
                            return _v1;
                          } catch {
                            return _v28(_v0), null;
                          }
                        }(_v3, _v0.userId);
                      if (_v28(_v3), (_v0 = new URL(window.location.href)).searchParams.delete(_v27), window.history.replaceState(null, "", `${_v0.pathname}${_v0.search}${_v0.hash}`), _v1) {
                        _v0.onStateChange("resuming");
                        try {
                          let _v0 = await _v67(_v1, _v1.productId, _v1.token, _v1.setupIntentId),
                            _v1 = _v71(_v0);
                          _v1 && !_v8 ? _v9(_v1, !0) : _v8 || _v9({
                            status: "failed",
                            failure: _v70("finalization", "intent_incomplete")
                          });
                        } catch {
                          _v8 || _v9({
                            status: "failed",
                            failure: _v70("finalization", "resume_failed")
                          });
                        }
                        return;
                      }
                    }
                    _v0.onStateChange("loading");
                    try {
                      let _v0 = (0, _v24.readCachedToken)(_v0.userId);
                      if (!_v0) {
                        let _v0 = await _v0.preauthorize();
                        _v0 = _v0.token, (0, _v24.writeCachedToken)(_v0, 0 * _v0.expiresAt);
                      }
                      if (_v8) return;
                      let _v1 = (0, _v26.decodeCheckoutToken)(_v0);
                      _v5 = _v0, _v6 = _v1.product_id;
                      let _v2 = (0, _v26.firstAuthorization)(_v1);
                      if (!(0, _v26.isVgsCardAuthorization)(_v2)) throw Error("Checkout token authorizes an unsupported payment method.");
                      if (_v4 = _v2, _v3 = function (_v0) {
                        if ("vgs_card" === _v0) return _v62;
                        throw Error(`Unsupported card-capture method: ${String(_v0)}`);
                      }(_v2.type), _v2 = await _v3.mount({
                        authorization: _v2,
                        fieldHosts: {
                          number: _v0.cardNumber,
                          cvc: _v0.securityCode
                        },
                        onStateChange: _v0 => _v0.onCardFieldsStateChange?.(_v0),
                        cardFieldStyle: _v0.cardFieldStyle,
                        cardFieldPlaceholders: _v0.cardFieldPlaceholders
                      }), !_v1.hcaptcha_site_key) throw Error("Checkout hCaptcha site key is missing.");
                      _v7 = await _v64(_v0.captcha, _v1.hcaptcha_site_key), _v8 || _v0.onStateChange("ready");
                    } catch {
                      _v8 || _v9({
                        status: "failed",
                        failure: _v70("initiation", "start_failed")
                      });
                    }
                  },
                  async submit() {
                    if (!_v2 || !_v3 || !_v4 || !_v5 || !_v6) return null;
                    _v0.onStateChange("submitting");
                    try {
                      let _v0 = (0, _v24.readCachedToken)(_v0.userId);
                      if (!_v0) {
                        let _v0 = await _v0.preauthorize();
                        _v0 = _v0.token, (0, _v24.writeCachedToken)(_v0, 0 * _v0.expiresAt);
                        let _v1 = (0, _v26.decodeCheckoutToken)(_v0);
                        _v5 = _v0, _v6 = _v1.product_id;
                      }
                      let _v1 = _v0.getExpiration();
                      if (!_v1) return _v9({
                        status: "failed",
                        failure: _v69("capture", "invalid_expiration", [{
                          field: "expiration",
                          reason: "invalid_format"
                        }])
                      }, !1, "ready");
                      let _v2 = await _v7(),
                        _v3 = await _v3.submit({
                          form: _v2,
                          authorization: _v4,
                          productId: _v6,
                          checkoutToken: _v5,
                          hcaptchaToken: _v2,
                          cardholderName: _v0.getCardholderName(),
                          expiration: _v1
                        }),
                        _v4 = "requires_action" === _v3.status ? await _v72(_v3, _v0, _v5, _v6, _v1) : _v3,
                        _v5 = _v71(_v4);
                      if (!_v5) return _v9({
                        status: "failed",
                        failure: _v70("finalization", "intent_incomplete")
                      }, !1, "ready");
                      return _v9(_v5, !1, "succeeded" === _v5.status ? "terminal" : "ready");
                    } catch (_v0) {
                      return _v9({
                        status: "failed",
                        failure: _v0 instanceof _v68 ? _v0.failure : function (_v0) {
                          if (!(_v0 instanceof _v59)) return _v70("capture");
                          if ("field_validation" === _v0.details.kind) {
                            let {
                                fields: _v0
                              } = _v0.details,
                              _v1 = _v0.map(_v0 => ({
                                field: _v0,
                                reason: "invalid_format"
                              }));
                            return _v69("capture", 1 === _v0.length ? `invalid_${_v0[0]}` : "invalid_card_details", _v1);
                          }
                          return "http" === _v0.details.kind ? _v70("capture", _v0.details.errorCode ?? "unexpected") : _v70("capture");
                        }(_v0)
                      }, !1, "ready");
                    }
                  },
                  destroy() {
                    _v8 = !0, _v2?.unmount?.(), _v2 = null;
                  }
                });
                _v14.current = _v13, _v13.mount({
                  cardNumber: _v10.current,
                  securityCode: _v11.current,
                  captcha: _v12.current
                });
              };
            return _v1 = requestAnimationFrame(_v2), () => {
              _v0 = !0, cancelAnimationFrame(_v1), _v14.current?.destroy(), _v14.current = null;
            };
          }, [_v0.cardNumber, _v0.securityCode, _v0.captcha, _v1, _v2, _v5, _v6, _v7, _v8, _v9, _v3, _v4, _v10, _v11]), {
            state: _v12,
            submit: (0, _v4.useCallback)(() => _v14.current?.submit() ?? Promise.resolve(null), [])
          };
        }({
          isActive: _v45 === _v22.PaymentFormTypes.TYPE_CREDIT_CARD,
          junoEnvironment: "production" !== (0, _v10.default)() || (0, _v11.isClientNonProduction)() ? "preproduction" : "production",
          userId: void 0 === _v54 ? void 0 : String(_v54),
          preauthorize: _v55,
          getCardholderName: _v60,
          getExpiration: _v59,
          cardFieldRefs: {
            cardNumber: _v29,
            securityCode: _v30,
            captcha: _v31
          },
          returnUrl: window.location.href,
          onResult: _v67,
          cardFieldStyle: _v15 ? _v81 : void 0,
          cardFieldPlaceholders: _v15 ? _v80 : void 0,
          onCardFieldsStateChange: _v15 ? _v64 : void 0
        }),
        _v70 = (0, _v4.useMemo)(() => ({
          prepare: async (_v0, _v1) => {
            let _v2;
            _v42.current?.(), _v49({
              stage: "submission_started",
              outcome: "completed"
            });
            try {
              await _v56();
            } catch (_v0) {
              let _v1 = _v0 instanceof Error ? _v0.message : "Failed to ensure customer account.";
              throw _v52(void 0, _v1), _v65({
                success: !1,
                errorMessage: _v1
              }), _v66(), _v0;
            }
            let _v3 = await _v69();
            if (null === _v3) {
              let _v0 = (0, _v12.translate)({
                singular: "Card setup did not complete.",
                dictionary: {
                  es: {
                    singular: "No se completó la configuración de la tarjeta."
                  },
                  "de-DE": {
                    singular: "Karteneinrichtung wurde nicht abgeschlossen."
                  },
                  "fr-FR": {
                    singular: "La configuration de la carte n’a pas été complétée."
                  },
                  "ja-JP": {
                    singular: "カードの設定が完了しませんでした。"
                  },
                  "ko-KR": {
                    singular: "카드 설정이 완료되지 않았습니다."
                  },
                  "pt-BR": {
                    singular: "Configuração do cartão não foi concluída."
                  },
                  "zh-CN": {
                    singular: "卡片设置未完成。"
                  }
                }
              });
              throw _v52({
                stage: "capture",
                category: "validation",
                code: "card_setup_incomplete",
                validation: {
                  invalidInputs: []
                }
              }, _v0), _v65({
                success: !1,
                errorMessage: _v0
              }), Error(_v0);
            }
            if ("succeeded" !== _v3.status) {
              let _v0 = _v75(_v3.failure);
              throw _v52(_v3.failure), _v65({
                success: !1,
                errorMessage: _v0
              }), Error(_v0);
            }
            try {
              _v2 = await _v57(_v3.setupIntentId, _v1), (0, _v24.clearCachedToken)();
            } catch (_v0) {
              let _v1 = _v0 instanceof Error ? _v0.message : "Payment method creation failed.";
              throw _v52(void 0, _v1), _v65({
                success: !1,
                errorMessage: _v1
              }), _v66(), Error("Payment method creation failed.");
            }
            return _v65({
              success: !0,
              paymentMethodId: _v2,
              setupIntentId: _v3.setupIntentId
            }), {
              refId: _v2,
              formType: _v22.PaymentFormTypes.TYPE_CREDIT_CARD,
              provider: "juno"
            };
          },
          dispose: () => void 0
        }), [_v57, _v66, _v56, _v65, _v69, _v52, _v49]);
      if ((0, _v4.useEffect)(() => (_v5?.(_v70), () => _v5?.(null)), [_v70, _v5]), (0, _v4.useEffect)(() => {
        if (_v45 === _v22.PaymentFormTypes.TYPE_PAYPAL) return void _v3?.(_v22.PaymentFormTypes.TYPE_PAYPAL);
        if ("ready" !== _v68) {
          _v38.current = !1, "terminal" !== _v68 || _v39.current || _v40.current || (_v40.current = !0, _v49({
            stage: "form_ready",
            outcome: "failed",
            failure: void 0
          })), _v6?.("submitting" === _v68 || "resuming" === _v68 ? {
            status: "preparing",
            attemptId: ""
          } : {
            status: "mounting"
          });
          return;
        }
        _v39.current || (_v39.current = !0, _v49({
          stage: "form_ready",
          outcome: "completed"
        })), _v38.current || (_v38.current = !0, _v3?.(_v22.PaymentFormTypes.TYPE_CREDIT_CARD));
      }, [_v45, _v68, _v3, _v6, _v49]), !_v20 && !_v10) return null;
      let _v71 = {
          type: _v22.PaymentFormTypes.TYPE_CREDIT_CARD,
          data: (0, _v15.getFormType)(_v22.PaymentFormTypes.TYPE_CREDIT_CARD)
        },
        _v72 = {
          type: _v22.PaymentFormTypes.TYPE_PAYPAL,
          data: (0, _v15.getFormType)(_v22.PaymentFormTypes.TYPE_PAYPAL)
        },
        _v73 = _v13 ? [_v71, _v72] : [_v71],
        _v74 = _v45 === _v22.PaymentFormTypes.TYPE_PAYPAL ? _v72 : _v71;
      return (0, _v1.jsxs)(_v18.PaymentMethodForm, {
        formAlert: _v2?.message ? _v2 : void 0,
        formIsLoading: "loading" === _v68 || "resuming" === _v68,
        formTypes: _v73,
        renderedFormType: _v74,
        showExistingPaymentMethods: _v12,
        bspStyling: _v14,
        wetransferInspired: _v15,
        hasError: _v15 && _v27?.status === "error",
        storedMethod: _v15 ? _v16 : void 0,
        onPaymentTypeChanged: _v0 => {
          _v46(_v0), _v4?.(_v0), _v0 === _v22.PaymentFormTypes.TYPE_PAYPAL && _v3?.(_v0);
        },
        children: [_v45 === _v22.PaymentFormTypes.TYPE_CREDIT_CARD && (_v15 ? (0, _v1.jsxs)(_v6.Flex, {
          flexDirection: "column",
          gap: (0, _v9.rem)(8),
          width: "100%",
          children: [(0, _v1.jsx)(_v83, {
            value: _v36,
            onChange: _v58,
            inputRef: _v34
          }), (0, _v1.jsxs)(_v6.Flex, {
            flexDirection: {
              base: "column",
              md: "row"
            },
            gap: (0, _v9.rem)(6),
            alignItems: "stretch",
            width: "100%",
            children: [(0, _v1.jsx)(_v82, {
              flex: {
                base: "none",
                md: "1"
              },
              ref: _v29,
              label: (0, _v12.translate)({
                singular: "Card number",
                dictionary: {
                  es: {
                    singular: "Número de tarjeta"
                  },
                  "de-DE": {
                    singular: "Kartennummer"
                  },
                  "fr-FR": {
                    singular: "Numéro de carte"
                  },
                  "ja-JP": {
                    singular: "カード番号"
                  },
                  "ko-KR": {
                    singular: "카드 번호"
                  },
                  "pt-BR": {
                    singular: "Número do cartão"
                  },
                  "zh-CN": {
                    singular: "卡号"
                  }
                }
              }),
              isFloating: _v62.pan_alias?.isEmpty === !1 || _v62.pan_alias?.isFocused === !0,
              isFocused: _v62.pan_alias?.isFocused === !0
            }), (0, _v1.jsxs)(_v6.Flex, {
              gap: (0, _v9.rem)(6),
              alignItems: "stretch",
              width: {
                base: "100%",
                md: "auto"
              },
              children: [(0, _v1.jsx)(_v84, {
                onChange: _v61,
                inputRef: _v35,
                onComplete: () => {
                  let _v0 = _v30.current?.querySelector("iframe");
                  _v0 instanceof HTMLIFrameElement && _v0.focus();
                }
              }), (0, _v1.jsx)(_v82, {
                flex: {
                  base: "1",
                  md: `0 0 ${(0, _v9.rem)(76)}`
                },
                ref: _v30,
                label: (0, _v12.translate)({
                  singular: "CVV",
                  dictionary: {
                    "zh-CN": {
                      singular: "安全码"
                    }
                  }
                }),
                isFloating: _v62.cvv_alias?.isEmpty === !1 || _v62.cvv_alias?.isFocused === !0,
                isFocused: _v62.cvv_alias?.isFocused === !0
              })]
            })]
          }), (0, _v1.jsx)("div", {
            ref: _v31
          })]
        }) : (0, _v1.jsxs)(_v6.Flex, {
          flexDirection: "column",
          gap: "100",
          width: "100%",
          children: [(0, _v1.jsx)(_v78, {
            value: _v36,
            onChange: _v58
          }), (0, _v1.jsx)(_v77, {
            label: (0, _v12.translate)({
              singular: "Card Number",
              dictionary: {
                es: {
                  singular: "Número de tarjeta"
                },
                "de-DE": {
                  singular: "Kartennummer"
                },
                "fr-FR": {
                  singular: "Numéro de carte"
                },
                "ja-JP": {
                  singular: "カード番号"
                },
                "ko-KR": {
                  singular: "카드 번호"
                },
                "pt-BR": {
                  singular: "Número do Cartão"
                },
                "zh-CN": {
                  singular: "卡号"
                }
              }
            }),
            ref: _v29
          }), (0, _v1.jsxs)(_v6.Flex, {
            flexDirection: {
              base: "column",
              lg: "row"
            },
            gap: "100",
            width: "100%",
            children: [(0, _v1.jsx)(_v79, {
              value: _v47,
              onChange: _v61
            }), (0, _v1.jsx)(_v77, {
              label: (0, _v12.translate)({
                singular: "CVV",
                dictionary: {
                  "zh-CN": {
                    singular: "安全码"
                  }
                }
              }),
              ref: _v30
            })]
          }), (0, _v1.jsx)("div", {
            ref: _v31
          })]
        })), _v0]
      });
    },
    _v77 = _v4.default.forwardRef(function ({
      flex: _v0,
      label: _v1
    }, _v2) {
      return (0, _v1.jsx)(_v16.LabelContainer, {
        flex: _v0 ?? "1",
        labelCopy: _v1,
        useBoldLabel: !1,
        children: (0, _v1.jsx)(_v5.Box, {
          backgroundColor: "surface",
          borderColor: "stroke",
          borderWidth: "1px",
          borderRadius: "input-md",
          height: "40px",
          ref: _v2,
          sx: {
            "& > iframe": {
              width: "100%",
              height: "100%"
            }
          }
        })
      });
    }),
    _v78 = ({
      value: _v0,
      onChange: _v1
    }) => (0, _v1.jsx)(_v16.LabelContainer, {
      flex: "1",
      labelCopy: (0, _v12.translate)({
        singular: "Cardholder Name",
        dictionary: {
          es: {
            singular: "Nombre del titular"
          },
          "de-DE": {
            singular: "Name des Karteninhabers"
          },
          "fr-FR": {
            singular: "Nom du titulaire"
          },
          "ja-JP": {
            singular: "カード名義"
          },
          "ko-KR": {
            singular: "카드 소유자 이름"
          },
          "pt-BR": {
            singular: "Nome do Titular"
          },
          "zh-CN": {
            singular: "持卡人姓名"
          }
        }
      }),
      useBoldLabel: !1,
      children: (0, _v1.jsx)(_v7.Input, {
        type: "text",
        name: "cardholderName",
        "aria-label": (0, _v12.translate)({
          singular: "Cardholder Name",
          dictionary: {
            es: {
              singular: "Nombre del titular"
            },
            "de-DE": {
              singular: "Name des Karteninhabers"
            },
            "fr-FR": {
              singular: "Nom du titulaire"
            },
            "ja-JP": {
              singular: "カード名義"
            },
            "ko-KR": {
              singular: "카드 소유자 이름"
            },
            "pt-BR": {
              singular: "Nome do Titular"
            },
            "zh-CN": {
              singular: "持卡人姓名"
            }
          }
        }),
        onChange: _v0 => _v1(_v0.currentTarget.value),
        size: "md",
        value: _v0
      })
    }),
    _v79 = ({
      value: _v0,
      onChange: _v1
    }) => {
      let _v2 = (0, _v4.useMemo)(() => Array.from({
          length: 12
        }, (_v0, _v1) => {
          let _v2 = String(_v1 + 1).padStart(2, "0");
          return {
            value: _v2,
            label: _v2
          };
        }), []),
        _v3 = (0, _v4.useMemo)(() => {
          let _v0 = new Date().getFullYear();
          return Array.from({
            length: 20
          }, (_v0, _v1) => {
            let _v2 = String(_v0 + _v1);
            return {
              value: _v2,
              label: _v2
            };
          });
        }, []);
      return (0, _v1.jsx)(_v16.LabelContainer, {
        flex: "2.3",
        labelCopy: (0, _v12.translate)({
          singular: "Expiration Date",
          dictionary: {
            es: {
              singular: "Fecha de expiración"
            },
            "de-DE": {
              singular: "Ablaufdatum"
            },
            "fr-FR": {
              singular: "Date d’expiration"
            },
            "ja-JP": {
              singular: "有効期限"
            },
            "ko-KR": {
              singular: "만료일"
            },
            "pt-BR": {
              singular: "Data de Expiração"
            },
            "zh-CN": {
              singular: "到期日期"
            }
          }
        }),
        useBoldLabel: !1,
        children: (0, _v1.jsxs)(_v6.Flex, {
          alignItems: "center",
          gap: "75",
          width: "100%",
          children: [(0, _v1.jsx)(_v5.Box, {
            backgroundColor: "surface",
            borderColor: "stroke",
            borderRadius: "input-md",
            borderWidth: "1px",
            flex: "1",
            height: "40px",
            children: (0, _v1.jsxs)(_v5.Box, {
              as: "select",
              "aria-label": (0, _v12.translate)({
                singular: "Month",
                dictionary: {
                  es: {
                    singular: "Mes",
                    plural: "Meses"
                  },
                  "de-DE": {
                    singular: "Monat",
                    plural: "Monate"
                  },
                  "fr-FR": {
                    singular: "Mois",
                    plural: "Mois"
                  },
                  "ja-JP": {
                    singular: "か月",
                    plural: "か月"
                  },
                  "ko-KR": {
                    singular: "개월",
                    plural: "개월"
                  },
                  "pt-BR": {
                    singular: "Mês",
                    plural: "Meses"
                  },
                  "zh-CN": {
                    singular: "月",
                    plural: "月"
                  }
                }
              }),
              background: "transparent",
              border: "0",
              color: _v0.month ? "text-primary" : "text-secondary",
              fontFamily: "Arial, sans-serif",
              fontSize: "14px",
              height: "100%",
              onChange: _v0 => _v1("month", _v0.target.value),
              paddingInline: "75",
              value: _v0.month ? String(_v0.month).padStart(2, "0") : "",
              width: "100%",
              children: [(0, _v1.jsx)("option", {
                value: "",
                children: (0, _v12.translate)({
                  singular: "- Select One -",
                  dictionary: {
                    es: {
                      singular: "- Seleccione uno -"
                    },
                    "de-DE": {
                      singular: "- Bitte auswählen -"
                    },
                    "fr-FR": {
                      singular: "- Sélectionner -"
                    },
                    "ja-JP": {
                      singular: "- 選択してください -"
                    },
                    "ko-KR": {
                      singular: "- 하나 선택 -"
                    },
                    "pt-BR": {
                      singular: "- Selecione um -"
                    },
                    "zh-CN": {
                      singular: "- 请选择一项 -"
                    }
                  }
                })
              }), _v2.map(_v0 => (0, _v1.jsx)("option", {
                value: _v0.value,
                children: _v0.label
              }, _v0.value))]
            })
          }), (0, _v1.jsx)(_v8.Text, {
            "aria-hidden": "true",
            variant: "body-lg",
            children: "/"
          }), (0, _v1.jsx)(_v5.Box, {
            backgroundColor: "surface",
            borderColor: "stroke",
            borderRadius: "input-md",
            borderWidth: "1px",
            flex: "1",
            height: "40px",
            children: (0, _v1.jsxs)(_v5.Box, {
              as: "select",
              "aria-label": (0, _v12.translate)({
                singular: "Year",
                dictionary: {
                  es: {
                    singular: "Año",
                    plural: "Años"
                  },
                  "de-DE": {
                    singular: "Jahr",
                    plural: "Jahre"
                  },
                  "fr-FR": {
                    singular: "An",
                    plural: "Ans"
                  },
                  "ja-JP": {
                    singular: "年",
                    plural: "年"
                  },
                  "ko-KR": {
                    singular: "년",
                    plural: "년"
                  },
                  "pt-BR": {
                    singular: "Ano",
                    plural: "Anos"
                  },
                  "zh-CN": {
                    singular: "年",
                    plural: "年"
                  }
                }
              }),
              background: "transparent",
              border: "0",
              color: _v0.year ? "text-primary" : "text-secondary",
              fontFamily: "Arial, sans-serif",
              fontSize: "14px",
              height: "100%",
              onChange: _v0 => _v1("year", _v0.target.value),
              paddingInline: "75",
              value: _v0.year ? String(_v0.year) : "",
              width: "100%",
              children: [(0, _v1.jsx)("option", {
                value: "",
                children: (0, _v12.translate)({
                  singular: "- Select One -",
                  dictionary: {
                    es: {
                      singular: "- Seleccione uno -"
                    },
                    "de-DE": {
                      singular: "- Bitte auswählen -"
                    },
                    "fr-FR": {
                      singular: "- Sélectionner -"
                    },
                    "ja-JP": {
                      singular: "- 選択してください -"
                    },
                    "ko-KR": {
                      singular: "- 하나 선택 -"
                    },
                    "pt-BR": {
                      singular: "- Selecione um -"
                    },
                    "zh-CN": {
                      singular: "- 请选择一项 -"
                    }
                  }
                })
              }), _v3.map(_v0 => (0, _v1.jsx)("option", {
                value: _v0.value,
                children: _v0.label
              }, _v0.value))]
            })
          })]
        })
      });
    },
    _v80 = {
      cardNumber: "Card number",
      cvv: "CVV"
    },
    _v81 = {
      fontFace: {
        fontFamily: "ABCRepro-Regular",
        fontStyle: "normal",
        fontWeight: "350",
        fontDisplay: "swap",
        src: 'url("https://f.vimeocdn.com/js_opt/app/vimeo-next/_next/static/media/ABCRepro-Screen.2d0dd2ca.woff2") format("woff2")'
      },
      fontFamily: "ABCRepro-Regular, sans-serif",
      fontSize: "14px",
      lineHeight: "38px",
      letterSpacing: "normal",
      padding: "0 16px",
      color: "rgba(14, 18, 22, 1)",
      placeholderColor: "transparent",
      backgroundColor: "rgba(255, 255, 255, 1)",
      transition: "all 0.12s ease-in-out"
    },
    _v82 = _v4.default.forwardRef(function ({
      flex: _v0,
      label: _v1,
      isFloating: _v2 = !1,
      isFocused: _v3 = !1
    }, _v4) {
      return (0, _v1.jsxs)(_v5.Box, {
        position: "relative",
        flex: _v0,
        minWidth: 0,
        sx: {
          "& > iframe": {
            width: "100%",
            height: "100%",
            border: "none",
            display: "block"
          }
        },
        children: [(0, _v1.jsx)(_v5.Box, {
          height: (0, _v9.rem)(40),
          backgroundColor: "background",
          borderColor: "stroke",
          borderWidth: (0, _v9.rem)(1),
          borderRadius: (0, _v9.rem)(12),
          overflow: "hidden",
          ref: _v4,
          outline: _v3 ? "2px solid" : void 0,
          outlineOffset: _v3 ? "-2px" : void 0,
          outlineColor: _v3 ? "var(--vimeo-colors-focus-alt)" : void 0
        }), _v1 && (0, _v1.jsx)(_v5.Box, {
          position: "absolute",
          top: _v2 ? (0, _v9.rem)(-8) : (0, _v9.rem)(10),
          left: (0, _v9.rem)(12),
          paddingX: (0, _v9.rem)(4),
          marginX: (0, _v9.rem)(3),
          backgroundColor: _v2 ? "var(--vimeo-colors-surface)" : "transparent",
          color: _v2 ? "var(--vimeo-colors-text-tertiary)" : "var(--vimeo-colors-text-secondary)",
          zIndex: 1,
          pointerEvents: "none",
          transformOrigin: "left top",
          transition: "0.2s ease all",
          children: (0, _v1.jsx)(_v8.Text, {
            sx: {
              ...(_v2 ? _v17.floatingLabelTypography : _v17.floatingPlaceholderTypography),
              color: "inherit"
            },
            children: _v1
          })
        })]
      });
    }),
    _v83 = ({
      value: _v0,
      onChange: _v1,
      inputRef: _v2
    }) => (0, _v1.jsx)(_v17.FloatingInput, {
      label: (0, _v12.translate)({
        singular: "Cardholder name",
        dictionary: {
          es: {
            singular: "Nombre del titular de la tarjeta"
          },
          "de-DE": {
            singular: "Name des Karteninhabers"
          },
          "fr-FR": {
            singular: "Nom du titulaire de la carte"
          },
          "ja-JP": {
            singular: "クレジットカード名義人名"
          },
          "ko-KR": {
            singular: "카드 소지자 이름"
          },
          "pt-BR": {
            singular: "Nome do titular"
          },
          "zh-CN": {
            singular: "持卡人姓名"
          }
        }
      }),
      name: "cardholderName",
      value: _v0,
      onValueChange: _v1,
      autoComplete: "cc-name",
      inputRef: _v2
    }),
    _v84 = ({
      onChange: _v0,
      inputRef: _v1,
      onComplete: _v2
    }) => {
      let _v3,
        _v4,
        [_v5, _v6] = (0, _v4.useState)("");
      return (0, _v1.jsx)(_v5.Box, {
        flex: {
          base: "1",
          md: `0 0 ${(0, _v9.rem)(100)}`
        },
        minWidth: 0,
        children: (0, _v1.jsx)(_v17.FloatingInput, {
          label: (0, _v12.translate)({
            singular: "MM / YY",
            dictionary: {
              "fr-FR": {
                singular: "MM / AA"
              }
            }
          }),
          name: "cardExpiration",
          value: (_v3 = _v5.slice(0, 2), _v4 = _v5.slice(2, 4), _v5.length <= 2 ? _v3 : `${_v3} / ${_v4}`),
          onValueChange: _v0 => {
            let _v1 = _v0.replaceAll(/\D/g, "").slice(0, 4);
            _v6(_v1), _v1.length >= 2 && _v0("month", _v1.slice(0, 2)), _v1.length > 2 && _v0("year", `20${_v1.slice(2, 4)}`), _v1.length < 2 && _v0("month", ""), _v1.length < 4 && _v0("year", ""), 4 === _v1.length && _v2?.();
          },
          inputMode: "numeric",
          autoComplete: "cc-exp",
          inputRef: _v1
        })
      });
    };
  var _v85 = _v0.i(0),
    _v86 = _v0.i(0),
    _v87 = _v0.i(0),
    _v88 = _v0.i(0);
  let _v89 = () => {
    let _v0 = (0, _v15.getFormType)(_v22.PaymentFormTypes.TYPE_PAYPAL);
    return (0, _v1.jsxs)(_v6.Flex, {
      align: "center",
      justify: "center",
      direction: "column",
      gap: "sm",
      marginBottom: (0, _v9.rem)(16),
      children: [(0, _v1.jsx)(_v5.Box, {
        as: "img",
        height: (0, _v9.rem)(75),
        src: _v0.imageSource,
        alt: _v0.name
      }), (0, _v1.jsx)(_v87.Alert, {
        maxW: (0, _v9.rem)(468),
        status: "info",
        children: (0, _v1.jsx)(_v88.AlertDescription, {
          children: (0, _v12.translate)({
            singular: "To add your payment method, you will be redirected to PayPal. Once you have completed the process, you will be automatically returned to this page.",
            dictionary: {
              es: {
                singular: "Para agregar su método de pago, lo redirigiremos a PayPal. Una vez que haya completado el proceso, volverá automáticamente a esta página."
              },
              "de-DE": {
                singular: "Um Ihre Zahlungsmethode hinzuzufügen, werden Sie zu PayPal weitergeleitet. Sobald Sie den Vorgang abgeschlossen haben, werden Sie automatisch auf diese Seite zurückgeleitet."
              },
              "fr-FR": {
                singular: "Vous serez redirigé(e) vers PayPal pour ajouter votre méthode de paiement. Une fois le processus terminé, vous serez automatiquement redirigé(e) sur cette page."
              },
              "ja-JP": {
                singular: "お支払い方法を追加するため、PayPalにリダイレクトされます。プロセスが完了すると、自動的にこのページに戻ります。"
              },
              "ko-KR": {
                singular: "결제 수단을 추가하기 위해 PayPal로 이동합니다. 과정을 완료하고 나면 자동으로 이 페이지로 돌아옵니다."
              },
              "pt-BR": {
                singular: "Vamos redirecionar você ao PayPal para adicionar sua forma de pagamento. Depois de concluir o processo, você voltará automaticamente a esta página."
              },
              "zh-CN": {
                singular: "要添加您的付款方式，您将被重定向到 PayPal。完成此过程后，您将自动返回此页面。"
              }
            }
          })
        })
      })]
    });
  };
  _v0.s(["PayPalBox", 0, _v89], 0);
  let _v90 = ({
    children: _v0,
    formAlert: _v1,
    onFormLoaded: _v2,
    onBillingName: _v3,
    isAddingPaymentMethod: _v4,
    showExistingPaymentMethods: _v5,
    showPaypalOption: _v6,
    onPaymentTypeChanged: _v7,
    bspStyling: _v8,
    wetransferInspired: _v9,
    storedMethod: _v10
  }) => {
    let {
        state: {
          order: _v11
        },
        dispatch: _v12
      } = (0, _v73.useStateContext)(),
      [_v13, _v14] = (0, _v4.useState)({
        type: _v22.PaymentFormTypes.TYPE_STRIPE,
        data: (0, _v15.getFormType)(_v22.PaymentFormTypes.TYPE_STRIPE)
      });
    if (!_v11 && !_v4) return null;
    let _v15 = _v6 ? [{
      type: _v22.PaymentFormTypes.TYPE_STRIPE,
      data: (0, _v15.getFormType)(_v22.PaymentFormTypes.TYPE_STRIPE)
    }, {
      type: _v22.PaymentFormTypes.TYPE_PAYPAL,
      data: (0, _v15.getFormType)(_v22.PaymentFormTypes.TYPE_PAYPAL)
    }] : [{
      type: _v22.PaymentFormTypes.TYPE_STRIPE,
      data: (0, _v15.getFormType)(_v22.PaymentFormTypes.TYPE_STRIPE)
    }];
    return (0, _v1.jsxs)(_v18.PaymentMethodForm, {
      formAlert: _v1?.message ? _v1 : void 0,
      formTypes: _v15,
      renderedFormType: _v13,
      bspStyling: _v8,
      wetransferInspired: _v9,
      storedMethod: _v10,
      onPaymentTypeChanged: _v0 => {
        _v14({
          type: _v0,
          data: (0, _v15.getFormType)(_v0)
        }), _v7?.(_v0), _v0 === _v22.PaymentFormTypes.TYPE_PAYPAL && _v2?.(_v0);
      },
      children: [_v5 && (0, _v1.jsxs)(_v6.Flex, {
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "2",
        children: [(0, _v1.jsx)(_v8.Text, {
          variant: "heading-md",
          children: (0, _v12.translate)({
            singular: "Card details:",
            dictionary: {
              es: {
                singular: "Información de la tarjeta:"
              },
              "de-DE": {
                singular: "Daten zur Kreditkarte:"
              },
              "fr-FR": {
                singular: "Données de carte bancaire :"
              },
              "ja-JP": {
                singular: "カードの詳細:"
              },
              "ko-KR": {
                singular: "카드 세부 사항"
              },
              "pt-BR": {
                singular: "Detalhes do cartão:"
              },
              "zh-CN": {
                singular: "卡片详情："
              }
            }
          })
        }), (0, _v1.jsx)(_v86.Button, {
          variant: "secondary",
          size: "sm",
          onClick: _v5,
          children: (0, _v12.translate)({
            singular: "Use saved card",
            dictionary: {
              es: {
                singular: "Usar la tarjeta guardada"
              },
              "de-DE": {
                singular: "Gespeicherte Karte verwenden"
              },
              "fr-FR": {
                singular: "Utilisez une carte sauvegardée"
              },
              "ja-JP": {
                singular: "登録したカードを使用"
              },
              "ko-KR": {
                singular: "저장된 카드 사용"
              },
              "pt-BR": {
                singular: "Usar um cartão que já salvei"
              },
              "zh-CN": {
                singular: "使用已保存的卡"
              }
            }
          })
        })]
      }), _v9 ? null : _v13.type === _v22.PaymentFormTypes.TYPE_PAYPAL ? (0, _v1.jsx)(_v89, {}) : (0, _v1.jsxs)(_v5.Box, {
        as: "form",
        width: "100%",
        children: [(0, _v1.jsx)(_v16.LabelContainer, {
          flex: "1",
          labelCopy: (0, _v12.translate)({
            singular: "Cardholder name",
            dictionary: {
              es: {
                singular: "Nombre del titular de la tarjeta"
              },
              "de-DE": {
                singular: "Name des Karteninhabers"
              },
              "fr-FR": {
                singular: "Nom du titulaire de la carte"
              },
              "ja-JP": {
                singular: "クレジットカード名義人名"
              },
              "ko-KR": {
                singular: "카드 소지자 이름"
              },
              "pt-BR": {
                singular: "Nome do titular"
              },
              "zh-CN": {
                singular: "持卡人姓名"
              }
            }
          }),
          marginBottom: "16px",
          showAsterisk: !1,
          useBoldLabel: _v8,
          children: (0, _v1.jsx)(_v7.Input, {
            type: "text",
            onChange: _v0 => {
              _v3(_v0.target.value);
            },
            size: "md"
          })
        }), (0, _v1.jsx)(_v85.PaymentElement, {
          onReady: () => _v2?.(_v22.PaymentFormTypes.TYPE_STRIPE),
          onLoadError: _v0 => {
            _v0.error?.message && _v12({
              type: _v22.ActionTypes.PAYMENT_ALERT,
              payload: {
                message: _v0.error?.message,
                status: "error"
              }
            });
          },
          options: {
            fields: {
              billingDetails: "never"
            },
            layout: {
              type: "tabs"
            },
            terms: {
              card: "never"
            }
          }
        })]
      }), _v0]
    });
  };
  var _v91 = _v0.i(0),
    _v92 = _v0.i(0),
    _v93 = _v0.i(0),
    _v94 = _v0.i(0),
    _v95 = _v22;
  let _v96 = ["en", "es", "de_DE", "fr_FR", "ja_JP", "pt_BR", "ko_KR"];
  async function _v97(_v0) {
    let _v1,
      _v2 = await fetch("/payments/hosted_pages/token", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-type": "application/json",
          "X-Requested-With": "XMLHttpRequest"
        },
        body: JSON.stringify(_v0)
      });
    if (!_v2.ok) throw Error(`Unable to load the Zuora hosted page (status ${_v2.status})`);
    try {
      _v1 = await _v2.json();
    } catch {
      throw Error("Received a malformed Zuora hosted page response");
    }
    if (!_v1?.token || !_v1.signature || !_v1.tenantId || !_v1.url || !_v1.key) throw Error("Received a malformed Zuora hosted page response");
    return _v1;
  }
  let _v98 = ({
    children: _v0,
    currency: _v1,
    defaultPaymentFormType: _v2 = _v95.PaymentFormTypes.TYPE_CREDIT_CARD,
    formAlert: _v3,
    includeAddressFields: _v4,
    onErrorLoadingForm: _v5,
    onFormLoaded: _v6,
    onPaymentTypeChanged: _v7,
    onSubmissionComplete: _v8,
    onSubmissionStart: _v9,
    onSubmitError: _v10,
    isAddingPaymentMethod: _v11,
    requireAccountId: _v12,
    showExistingPaymentMethods: _v13,
    showPaypalOption: _v14,
    bspStyling: _v15,
    hidePaymentTypeSelector: _v16,
    pmId: _v17,
    billingAddress: _v18,
    shouldSyncPostalCode: _v19,
    wetransferInspired: _v20 = !1,
    onControllerChange: _v21,
    onStatusChange: _v22
  }) => {
    let [_v23] = (0, _v91.useTrackCheckoutFormAction)(),
      _v24 = (0, _v14.useViewer)(),
      {
        state: {
          tier: _v25,
          isMonthly: _v26,
          isFreeTrial: _v27,
          subscriptionProduct: _v28,
          creatorProductAction: _v29,
          iosUserId: _v30
        },
        dispatch: _v31
      } = (0, _v73.useStateContext)(),
      _v32 = (0, _v3.useRouter)(),
      {
        trackCheckoutFailed: _v33
      } = (0, _v13.useCheckoutTracking)(_v30),
      _v34 = _v28?.isCreatorProduct ? (0, _v23.getPlanType)(_v29) : _v26 ? "monthly" : "annual",
      _v35 = (0, _v4.useEffectEvent)(_v0 => {
        _v25 && (0, _v21.acquireCheckoutFailedLatch)() && _v33({
          tier: _v25,
          periodicity: _v34,
          isFreeTrial: _v27,
          source: "network",
          http_status: null,
          endpoint: "zuora_submit",
          error_message: _v0
        });
      }),
      _v36 = (0, _v4.useEffectEvent)(_v0 => {
        _v25 && (0, _v21.acquireCheckoutFailedLatch)() && _v33({
          tier: _v25,
          periodicity: _v34,
          isFreeTrial: _v27,
          error_message: _v0
        });
      }),
      _v37 = _v32.query?.token ? String(_v32.query?.token) : void 0,
      [_v38, _v39] = (0, _v4.useState)(!!window.Z),
      [_v40, _v41] = (0, _v4.useState)(),
      [_v42, _v43] = (0, _v4.useState)(!0),
      _v44 = (0, _v4.useRef)(null),
      _v45 = (0, _v4.useRef)(null),
      _v46 = (0, _v4.useRef)(0),
      _v47 = (0, _v4.useRef)(null),
      _v48 = (0, _v4.useRef)(null),
      _v49 = (0, _v4.useRef)({
        generation: -1,
        settled: !0,
        timeoutId: null
      }),
      _v50 = (0, _v4.useRef)(!1),
      _v51 = (0, _v4.useRef)(null),
      _v52 = (0, _v4.useRef)(() => void 0),
      _v53 = "";
    _v53 = (_v24?.locale || "en").replace(/-/g, "_").replace(/_([a-z])/g, (_v0, _v1) => `_${_v1.toUpperCase()}`), _v53 = _v96.includes(_v53) ? _v53 : "en";
    let _v54 = (0, _v4.useEffectEvent)(_v0 => {
        _v22?.(_v0);
      }),
      _v55 = (0, _v4.useEffectEvent)((_v0 = !1) => {
        _v46.current += 1;
        let _v1 = _v46.current,
          _v2 = _v49.current;
        null != _v2.timeoutId && clearTimeout(_v2.timeoutId), _v49.current = {
          generation: -1,
          settled: !0,
          timeoutId: null
        }, _v48.current = null;
        let _v3 = _v51.current;
        return _v3 && (_v0 ? _v3.generation = _v1 : (_v51.current = null, _v3.reject({
          kind: "disposed",
          message: "The payment form was replaced before preparation completed"
        }))), _v54({
          status: "mounting"
        }), _v1;
      }),
      _v56 = (0, _v4.useEffectEvent)((_v0, _v1) => {
        let _v2 = _v51.current;
        _v2 && _v2.generation === _v0 && (_v51.current = null, _v2.reject(_v1));
      }),
      _v57 = (0, _v4.useEffectEvent)((_v0, _v1) => {
        if (_v0 !== _v46.current) return;
        let _v2 = _v49.current;
        if (_v2.generation === _v0) {
          if (_v2.settled) return;
          _v2.settled = !0, null != _v2.timeoutId && (clearTimeout(_v2.timeoutId), _v2.timeoutId = null);
        }
        let _v3 = "true" === _v1.success || !0 === _v1.success,
          _v4 = {
            ..._v1,
            success: _v3
          },
          _v5 = _v51.current;
        if (_v5?.generation === _v0) {
          _v51.current = null;
          let _v0 = _v45.current?.type;
          _v3 && _v4.refId && _v0 ? _v5.resolve({
            refId: _v4.refId,
            formType: _v0
          }) : _v5.reject({
            kind: _v3 ? "malformed_result" : "validation",
            message: _v3 ? "Zuora completed without a payment method reference" : "Zuora could not prepare the payment method"
          });
        }
        _v24 && ((0, _v92.trackZuoraOrderStep)({
          hpm_session_id: _v24.xsrft,
          user_id: `${_v24.user?.id}`,
          step_name: "HPM On Submit Callback",
          step_message: _v3 ? "success" : "failure"
        }), (0, _v92.trackZuoraOrderStep)({
          hpm_session_id: _v24.xsrft,
          user_id: `${_v24.user?.id}`,
          step_name: "HPM onSubmissionComplete",
          payment_method_id: _v4.refId
        }));
        let _v6 = {
          kind: "zuora_hpm",
          success: _v3,
          refId: _v4.refId,
          redirectUrl: _v11 ? void 0 : _v4.redirectUrl
        };
        if (_v8?.(_v6), !_v3) {
          let _v0 = (0, _v12.translate)({
            singular: "Unable to submit payment",
            dictionary: {
              es: {
                singular: "No se puede enviar el pago"
              },
              "de-DE": {
                singular: "Zahlung kann nicht übermittelt werden"
              },
              "fr-FR": {
                singular: "Impossible de soumettre le paiement"
              },
              "ja-JP": {
                singular: "支払いを送信できません"
              },
              "ko-KR": {
                singular: "결제를 제출할 수 없습니다"
              },
              "pt-BR": {
                singular: "Não foi possível enviar o pagamento"
              },
              "zh-CN": {
                singular: "无法提交付款"
              }
            }
          });
          _v36(_v0), _v31({
            type: _v95.ActionTypes.PAYMENT_ALERT,
            payload: {
              status: "error",
              message: _v0
            }
          });
        }
      }),
      _v58 = (0, _v4.useEffectEvent)(_v0 => {
        if (_v0 !== _v46.current) return;
        let _v1 = _v49.current;
        _v1.generation !== _v0 || _v1.settled || (_v24 && (0, _v92.trackZuoraOrderStep)({
          hpm_session_id: _v24.xsrft,
          user_id: `${_v24.user?.id}`,
          step_name: "Vimeo defined HPM Timeout"
        }), (0, _v92.trackOrderFailure)({
          userId: Number(_v24?.user?.id),
          description: "Timed out. Did not receive a response from Zuora"
        }), _v35("Timed out. Did not receive a response from Zuora"), _v56(_v0, {
          kind: "timeout",
          message: "Timed out. Did not receive a response from Zuora"
        }), _v57(_v0, {
          refId: "",
          success: !1
        }));
      }),
      _v59 = (0, _v4.useEffectEvent)(_v0 => {
        _v0 === _v46.current && (_v31({
          type: _v95.ActionTypes.PAYMENT_ALERT,
          payload: void 0
        }), (0, _v21.resetCheckoutFailedLatch)(), _v24 && (0, _v92.trackZuoraOrderStep)({
          hpm_session_id: _v24.xsrft,
          user_id: `${_v24.user?.id}`,
          step_name: "HPM Submit Started"
        }), _v9?.(), _v49.current = {
          generation: _v0,
          settled: !1,
          timeoutId: null
        }, _v49.current.timeoutId = setTimeout(() => {
          _v58(_v0);
        }, 0));
      }),
      _v60 = (0, _v4.useEffectEvent)(_v0 => {
        if (_v0 !== _v46.current || _v47.current !== _v0) return;
        _v43(!1), window?.Z?.setFieldValue("callbackFunctionEnabled", "true"), _v24 && (0, _v92.trackZuoraOrderStep)({
          hpm_session_id: _v24.xsrft,
          user_id: `${_v24.user?.id}`,
          step_name: "HPM - OnLoadCallback"
        });
        let _v1 = _v45.current?.type ?? _v2;
        _v1 && _v6?.(_v1), _v48.current = _v0, _v54({
          status: "ready"
        });
      }),
      _v61 = (0, _v4.useEffectEvent)((_v0, ..._v1) => {
        if (_v0 !== _v46.current) return;
        let _v2 = _v45.current,
          _v3 = _v1[2],
          _v4 = _v51.current,
          _v5 = _v2?.type === _v95.PaymentFormTypes.TYPE_CREDIT_CARD && _v3?.includes("ThreeDs2_Authentication_Exception"),
          _v6 = null === _v4 || _v4.generation === _v0,
          _v7 = {
            kind: "validation",
            message: _v3 || "Zuora could not prepare the payment method",
            code: _v1[1] || void 0,
            field: _v1[0] || void 0
          };
        if (_v5 && _v6) {
          _v56(_v0, _v7), _v10(..._v1), _v52.current();
          return;
        }
        _v56(_v0, _v7), _v10(..._v1);
      }),
      _v62 = async (_v0, _v1, _v2) => {
        if (!window.Z) return;
        let _v3 = await _v97({
          form_type: _v0,
          include_address_fields: _v4,
          token: _v24?.xsrft || "",
          require_account_id: _v12,
          currency: _v1,
          ios_jwt: _v37,
          pm_id: _v17
        });
        if (_v50.current || _v1 !== _v46.current || !window.Z) return;
        let _v4 = function ({
          data: _v0,
          paymentType: _v1,
          userLocale: _v2
        }) {
          let _v3 = {
            tenantId: _v0.tenantId,
            id: _v0.pageId,
            token: _v0.token,
            signature: _v0.signature,
            style: "inline",
            key: _v0.key,
            submitEnabled: "false",
            url: _v0.url,
            field_currency: _v0.currency,
            paymentGateway: "Self Serve Stripe",
            locale: _v2
          };
          if (_v0.accountId && (_v3.field_accountId = _v0.accountId), _v0.pmId) {
            let _v0;
            _v3.pmId = _v0.pmId, _v3.field_agreementSupportedBrands = "Visa,MasterCard,AmericanExpress,Discover", _v3.field_mitConsentAgreementSrc = "External", _v3.field_mitCredentialProfileType = "Recurring", _v0 = "u" > typeof crypto && "function" == typeof crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`, _v3.field_mitConsentAgreementRef = `vimeo-card-verify:${_v0}`;
          }
          return _v1 === _v95.PaymentFormTypes.TYPE_CREDIT_CARD && (_v3.param_gwOptions_IndustryType = "EC"), _v3;
        }({
          data: _v3,
          paymentType: _v0,
          userLocale: _v53
        });
        return _v47.current = _v1, window.Z.setEventHandler("onloadCallback", () => _v60(_v1)), window.Z.setEventHandler("onSubmit", () => _v59(_v1)), window.Z.renderWithErrorHandler(_v4, [], _v0 => _v57(_v1, _v0), (..._v0) => {
          _v2?.onBeforeSubmitError?.(_v0), _v61(_v1, ..._v0);
        }), _v3;
      },
      _v63 = async (_v0 = !1) => {
        let _v1 = _v55(_v0);
        _v44.current && (_v44.current.innerHTML = ""), _v43(!0);
        try {
          await _v62(_v95.PaymentFormTypes.TYPE_CREDIT_CARD, _v1);
        } catch {
          let _v0 = (0, _v12.translate)({
            singular: "Unable to submit payment",
            dictionary: {
              es: {
                singular: "No se puede enviar el pago"
              },
              "de-DE": {
                singular: "Zahlung kann nicht übermittelt werden"
              },
              "fr-FR": {
                singular: "Impossible de soumettre le paiement"
              },
              "ja-JP": {
                singular: "支払いを送信できません"
              },
              "ko-KR": {
                singular: "결제를 제출할 수 없습니다"
              },
              "pt-BR": {
                singular: "Não foi possível enviar o pagamento"
              },
              "zh-CN": {
                singular: "无法提交付款"
              }
            }
          });
          _v43(!1), _v5?.(Error("Unable to re-render form")), _v56(_v1, {
            kind: "transport",
            message: _v0
          }), _v31({
            type: _v95.ActionTypes.PAYMENT_ALERT,
            payload: {
              status: "error",
              message: _v0
            }
          }), _v54({
            status: "failed"
          });
        }
      };
    (0, _v4.useEffect)(() => {
      _v52.current = _v63;
    }, [_v63]), (0, _v4.useEffect)(() => {
      _v45.current = _v40 || null;
    }, [_v40]), (0, _v4.useEffect)(() => {
      if (_v38 || _v20) return;
      _v24 && (0, _v92.trackZuoraOrderStep)({
        hpm_session_id: _v24.xsrft,
        user_id: `${_v24.user?.id}`,
        flow_type: "classic",
        step_name: "HPM script loaded"
      });
      let _v0 = document.createElement("script");
      _v0.src = "https://static.zuora.com/Resources/libs/hosted/1.3.1/zuora-min.js", _v0.async = !0;
      let _v1 = () => {
        _v39(!0);
      };
      return _v0.addEventListener("load", _v1), document.body.appendChild(_v0), () => {
        _v0.removeEventListener("load", _v1), _v38 || document.body.removeChild(_v0);
      };
    }, [_v38, _v24, _v20]), (0, _v4.useEffect)(() => {
      if (_v20 || !_v38 || !_v24 || !window.Z || _v40) return;
      let _v0 = !1;
      return Promise.resolve().then(async () => {
        if (_v0) return;
        let _v0 = _v55();
        if (_v41({
          type: _v2,
          data: (0, _v15.getFormType)(_v2)
        }), _v2 === _v95.PaymentFormTypes.TYPE_PAYPAL) {
          _v43(!1), _v6?.(_v2), _v54({
            status: "ready"
          });
          return;
        }
        try {
          await _v62(_v2, _v0);
        } catch {
          if (_v0) return;
          _v43(!1), _v5?.(Error("Unable to render form")), _v54({
            status: "failed"
          });
        }
      }), () => {
        _v0 = !0;
      };
    }, [_v2, _v38, _v20, _v4, _v6, _v12, _v24, _v1, _v5, _v53, _v37, _v17, _v40, _v55, _v54]), (0, _v4.useEffect)(() => {
      if (!_v42 && _v40?.type === _v95.PaymentFormTypes.TYPE_CREDIT_CARD && window.Z && document.getElementById(_v93.ZUORA_HPM_IFRAME_ID) && (!1 !== _v19 && _v18?.postalCode !== void 0 && window.Z.post(_v93.ZUORA_HPM_IFRAME_ID, `setField(creditCardPostalCode:${_v18.postalCode ?? ""})`), _v18?.state !== void 0 && window.Z.post(_v93.ZUORA_HPM_IFRAME_ID, `setField(creditCardState:${_v18.state ?? ""})`), _v18?.country)) {
        let _v0 = _v94.countries[_v18.country]?.iso3;
        window.Z.post(_v93.ZUORA_HPM_IFRAME_ID, `setField(creditCardCountry:${_v0})`);
      }
    }, [_v18, _v42, _v40, _v19]);
    let [_v64] = (0, _v4.useState)(() => ({
      prepare: (_v0, _v1) => {
        let _v2 = _v46.current;
        return _v50.current || _v48.current !== _v2 || !window.Z ? Promise.reject({
          kind: "disposed",
          message: "The payment form is not ready"
        }) : _v51.current ? Promise.reject({
          kind: "validation",
          message: "A payment preparation is already in progress"
        }) : new Promise((_v0, _v1) => {
          _v51.current = {
            attemptId: _v0.attemptId,
            generation: _v2,
            resolve: _v0,
            reject: _v1
          }, _v1.addEventListener("abort", () => {
            _v56(_v2, {
              kind: "disposed",
              message: "The payment preparation was cancelled"
            });
          }, {
            once: !0
          }), window.Z?.submit();
        });
      },
      dispose: () => {
        _v56(_v46.current, {
          kind: "disposed",
          message: "The payment preparation was cancelled"
        });
      }
    }));
    return ((0, _v4.useEffect)(() => (_v21?.(_v64), () => {
      _v21?.(null);
    }), [_v64, _v21]), (0, _v4.useEffect)(() => () => {
      _v50.current = !0, _v46.current += 1;
      let _v0 = _v51.current;
      _v51.current = null, _v0?.reject({
        kind: "disposed",
        message: "The payment form was removed before preparation completed"
      });
      let _v1 = _v49.current;
      null != _v1.timeoutId && clearTimeout(_v1.timeoutId);
    }, []), _v38 || _v20) ? (0, _v1.jsxs)(_v18.PaymentMethodForm, {
      formIsLoading: _v42,
      formAlert: _v3?.message ? _v3 : void 0,
      hidePaymentTypeSelector: _v16,
      formTypes: _v14 ? [{
        type: _v95.PaymentFormTypes.TYPE_CREDIT_CARD,
        data: (0, _v15.getFormType)(_v95.PaymentFormTypes.TYPE_CREDIT_CARD)
      }, {
        type: _v95.PaymentFormTypes.TYPE_PAYPAL,
        data: (0, _v15.getFormType)(_v95.PaymentFormTypes.TYPE_PAYPAL)
      }] : [{
        type: _v95.PaymentFormTypes.TYPE_CREDIT_CARD,
        data: (0, _v15.getFormType)(_v95.PaymentFormTypes.TYPE_CREDIT_CARD)
      }],
      renderedFormType: _v40,
      bspStyling: _v15,
      onPaymentTypeChanged: _v0 => {
        let _v1 = (0, _v15.getFormType)(_v0);
        _v23(_v93.CHECKOUT_FORM_ACTION_TYPE_CLICK, _v0 === _v95.PaymentFormTypes.TYPE_PAYPAL ? _v93.CHECKOUT_FORM_ACTION_LOCATION_PAYMENT_TYPE_PAYPAL : _v93.CHECKOUT_FORM_ACTION_LOCATION_PAYMENT_TYPE_CREDIT_CARD), _v7?.(_v0);
        let _v2 = _v55();
        if (_v44.current && (_v44.current.innerHTML = ""), _v31({
          type: _v95.ActionTypes.PAYMENT_ALERT,
          payload: void 0
        }), _v43(!0), _v41({
          type: _v0,
          data: _v1
        }), _v0 === _v95.PaymentFormTypes.TYPE_PAYPAL || _v20) {
          _v43(!1), _v0 === _v95.PaymentFormTypes.TYPE_PAYPAL && (_v6?.(_v0), _v54({
            status: "ready"
          }));
          return;
        }
        _v62(_v0, _v2, {
          onBeforeSubmitError: _v0 => {
            _v24 && (0, _v92.trackZuoraOrderStep)({
              hpm_session_id: _v24.xsrft,
              user_id: `${_v24.user?.id}`,
              step_name: "HPM onSubmitError",
              step_message: JSON.stringify(_v0)
            });
          }
        }).catch(() => {
          _v43(!1), _v5?.(Error("Unable to render form")), _v54({
            status: "failed"
          });
        });
      },
      showExistingPaymentMethods: _v13,
      children: [!_v20 && (0, _v1.jsx)(_v5.Box, {
        ref: _v44,
        width: "100%",
        sx: {
          "& > iframe": {
            width: "100%",
            backgroundColor: "transparent !important",
            maxHeight: {
              base: "347px",
              sm: "265px"
            }
          }
        },
        id: "zuora_payment"
      }), _v0]
    }) : (0, _v1.jsx)(_v18.Loader, {});
  };
  _v0.s(["PaymentMethodFormContainer", 0, _v0 => {
    let {
      settings: _v1,
      isLoadingResponse: _v2
    } = (0, _v2.useOrionSettings)();
    return _v0.defaultPaymentFormType === _v22.PaymentFormTypes.TYPE_STRIPE ? (0, _v1.jsx)(_v90, {
      ..._v0,
      children: _v0.children
    }) : _v2 && !_v0.pmId ? null : _v1.vgs_checkout_enabled && !_v0.pmId ? (0, _v1.jsx)(_v76, {
      ..._v0,
      children: _v0.children
    }) : (0, _v1.jsx)(_v98, {
      ..._v0
    });
  }], 0);
  var _v99 = _v0.i(0);
  _v0.s(["UserConsentContainer", 0, ({
    onChecked: _v0
  }) => {
    let [_v1, _v2] = (0, _v4.useState)(!1);
    return (0, _v1.jsx)(_v5.Box, {
      paddingTop: "2",
      paddingBottom: "6",
      children: (0, _v1.jsx)(_v99.Checkbox, {
        alignItems: "flex-start",
        isChecked: !!_v1,
        onChange: () => {
          _v2(!_v1), _v0(!_v1);
        },
        color: "text-primary",
        children: (0, _v12.translate)({
          singular: "By checking this box, you authorize us to securely store your card details (excluding CVV) with Stripe for future payments. Manage/remove cards anytime in Billing Settings. Without card storage consent, auto-renewal terms won't apply.",
          dictionary: {
            es: {
              singular: "Al marcar esta casilla, nos autoriza a almacenar de forma segura los datos de su tarjeta (excepto el CVV) en Stripe para futuros pagos. Administre o elimine las tarjetas en cualquier momento en la configuración de facturación. Sin el consentimiento para el almacenamiento de la tarjeta, no se aplicarán los términos de renovación automática."
            },
            "de-DE": {
              singular: "Wenn Sie dieses Kästchen ankreuzen, ermächtigen Sie uns, Ihre Kartendaten (ohne CVV) für zukünftige Zahlungen sicher bei Stripe zu speichern. Verwalten/entfernen Sie Karten jederzeit in den Zahlungseinstellungen. Ohne Zustimmung zur Kartenspeicherung gelten die Bedingungen für die automatische Verlängerung nicht."
            },
            "fr-FR": {
              singular: "En cochant cette case, vous nous autorisez à enregistrer en toute sécurité les détails de votre carte (à l'exclusion du CVV) avec Stripe pour les paiements futurs. Gérez/supprimez vos cartes à tout moment dans les paramètres de facturation. Si vous ne consentez pas à l'enregistrement de la carte, les conditions de renouvellement automatique ne s'appliquent pas."
            },
            "ja-JP": {
              singular: "このボックスをチェックすることにより、お客様のカード情報（CVVを除く）を今後のお支払いに備えてStripeに安全に保管することを許可したものとみなされます。請求設定でいつでもカードを管理/削除できます。カード情報の保存に同意されないと、自動更新の条件は適用されません。"
            },
            "ko-KR": {
              singular: "이 확인란을 선택하면 향후 결제를 위해 귀하의 카드 정보(CVV 제외)를 Stripe에 안전하게 저장하는 것을 승인하게 됩니다. 청구 설정에서 언제든지 카드를 관리하거나 제거할 수 있습니다. 카드 저장 동의가 없으면 자동 갱신 약관이 적용되지 않습니다."
            },
            "pt-BR": {
              singular: "Ao marcar essa caixa, você nos autoriza a armazenar com segurança os dados do seu cartão (excluindo o CVV) na Stripe para a realização de futuros pagamentos. Gerencie/remova cartões quando quiser nas Configurações de cobrança. Sem seu consentimento para o armazenamento do cartão, os termos de renovação automática não se aplicarão."
            },
            "zh-CN": {
              singular: "选中此复选框，即表示您授权我们将您的卡信息（不包括 CVV）安全地保存在 Stripe，以备将来支付之用。在计费设置中随时管理/移除卡。如果保存卡信息未获得持卡人同意，则自动续订条款将不适用。"
            }
          }
        })
      })
    });
  }], 0);
}