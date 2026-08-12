{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v3,
    _v4,
    _v5,
    _v6 = {
      DynamicHoleKind: function () {
        return _v52;
      },
      Postpone: function () {
        return _v29;
      },
      PreludeState: function () {
        return _v59;
      },
      abortAndThrowOnSynchronousRequestDataAccess: function () {
        return _v28;
      },
      abortOnSynchronousPlatformIOAccess: function () {
        return _v27;
      },
      accessedDynamicData: function () {
        return _v37;
      },
      annotateDynamicAccess: function () {
        return _v42;
      },
      consumeDynamicAccess: function () {
        return _v38;
      },
      createDynamicTrackingState: function () {
        return _v20;
      },
      createDynamicValidationState: function () {
        return _v21;
      },
      createHangingInputAbortSignal: function () {
        return _v41;
      },
      createInstantValidationState: function () {
        return _v53;
      },
      createRenderInBrowserAbortSignal: function () {
        return _v40;
      },
      formatDynamicAPIAccesses: function () {
        return _v39;
      },
      getFirstDynamicReason: function () {
        return _v22;
      },
      getNavigationDisallowedDynamicReasons: function () {
        return _v63;
      },
      getStaticShellDisallowedDynamicReasons: function () {
        return _v62;
      },
      isDynamicPostpone: function () {
        return _v32;
      },
      isPrerenderInterruptedError: function () {
        return _v36;
      },
      logDisallowedDynamicError: function () {
        return _v60;
      },
      markCurrentScopeAsDynamic: function () {
        return _v23;
      },
      postponeWithTracking: function () {
        return _v30;
      },
      throwIfDisallowedDynamic: function () {
        return _v61;
      },
      throwToInterruptStaticGeneration: function () {
        return _v24;
      },
      trackAllowedDynamicAccess: function () {
        return _v51;
      },
      trackDynamicDataInDynamicRender: function () {
        return _v25;
      },
      trackDynamicHoleInNavigation: function () {
        return _v54;
      },
      trackDynamicHoleInRuntimeShell: function () {
        return _v56;
      },
      trackDynamicHoleInStaticShell: function () {
        return _v57;
      },
      trackThrownErrorInNavigation: function () {
        return _v55;
      },
      useDynamicRouteParams: function () {
        return _v43;
      },
      useDynamicSearchParams: function () {
        return _v44;
      }
    };
  for (var _v7 in _v6) Object.defineProperty(_v2, _v7, {
    enumerable: !0,
    get: _v6[_v7]
  });
  let _v8 = (_v3 = _v0.r(0)) && _v3.__esModule ? _v3 : {
      default: _v3
    },
    _v9 = _v0.r(0),
    _v10 = _v0.r(0),
    _v11 = _v0.r(0),
    _v12 = _v0.r(0),
    _v13 = _v0.r(0),
    _v14 = _v0.r(0),
    _v15 = _v0.r(0),
    _v16 = _v0.r(0),
    _v17 = _v0.r(0),
    _v18 = _v0.r(0),
    _v19 = "function" == typeof _v8.default.unstable_postpone;
  function _v20(_v0) {
    return {
      isDebugDynamicAccesses: _v0,
      dynamicAccesses: [],
      syncDynamicErrorWithStack: null
    };
  }
  function _v21() {
    return {
      hasSuspenseAboveBody: !1,
      hasDynamicMetadata: !1,
      dynamicMetadata: null,
      hasDynamicViewport: !1,
      hasAllowedDynamic: !1,
      dynamicErrors: []
    };
  }
  function _v22(_v0) {
    var _v1;
    return null == (_v1 = _v0.dynamicAccesses[0]) ? void 0 : _v1.expression;
  }
  function _v23(_v0, _v1, _v2) {
    if (_v1) switch (_v1.type) {
      case "cache":
      case "unstable-cache":
      case "private-cache":
        return;
    }
    if (!_v0.forceDynamic && !_v0.forceStatic) {
      if (_v0.dynamicShouldError) throw Object.defineProperty(new _v10.StaticGenBailoutError(`Route ${_v0.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${_v2}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
        value: "E553",
        enumerable: !1,
        configurable: !0
      });
      if (_v1) switch (_v1.type) {
        case "prerender-ppr":
          return _v30(_v0.route, _v2, _v1.dynamicTracking);
        case "prerender-legacy":
          _v1.revalidate = 0;
          let _v0 = Object.defineProperty(new _v9.DynamicServerError(`Route ${_v0.route} couldn't be rendered statically because it used ${_v2}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
            value: "E550",
            enumerable: !1,
            configurable: !0
          });
          throw _v0.dynamicUsageDescription = _v2, _v0.dynamicUsageStack = _v0.stack, _v0;
      }
    }
  }
  function _v24(_v0, _v1, _v2) {
    let _v3 = Object.defineProperty(new _v9.DynamicServerError(`Route ${_v1.route} couldn't be rendered statically because it used \`${_v0}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
      value: "E558",
      enumerable: !1,
      configurable: !0
    });
    throw _v2.revalidate = 0, _v1.dynamicUsageDescription = _v0, _v1.dynamicUsageStack = _v3.stack, _v3;
  }
  function _v25(_v0) {
    switch (_v0.type) {
      case "cache":
      case "unstable-cache":
      case "private-cache":
        return;
    }
  }
  function _v26(_v0, _v1, _v2) {
    let _v3 = _v35(`Route ${_v0} needs to bail out of prerendering at this point because it used ${_v1}.`);
    _v2.controller.abort(_v3);
    let _v4 = _v2.dynamicTracking;
    _v4 && _v4.dynamicAccesses.push({
      stack: _v4.isDebugDynamicAccesses ? Error().stack : void 0,
      expression: _v1
    });
  }
  function _v27(_v0, _v1, _v2, _v3) {
    let _v4 = _v3.dynamicTracking;
    _v26(_v0, _v1, _v3), _v4 && null === _v4.syncDynamicErrorWithStack && (_v4.syncDynamicErrorWithStack = _v2);
  }
  function _v28(_v0, _v1, _v2, _v3) {
    if (!1 === _v3.controller.signal.aborted) {
      _v26(_v0, _v1, _v3);
      let _v0 = _v3.dynamicTracking;
      _v0 && null === _v0.syncDynamicErrorWithStack && (_v0.syncDynamicErrorWithStack = _v2);
    }
    throw _v35(`Route ${_v0} needs to bail out of prerendering at this point because it used ${_v1}.`);
  }
  function _v29({
    reason: _v0,
    route: _v1
  }) {
    let _v2 = _v11.workUnitAsyncStorage.getStore();
    _v30(_v1, _v0, _v2 && "prerender-ppr" === _v2.type ? _v2.dynamicTracking : null);
  }
  function _v30(_v0, _v1, _v2) {
    (function () {
      if (!_v19) throw Object.defineProperty(Error("Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js"), "__NEXT_ERROR_CODE", {
        value: "E224",
        enumerable: !1,
        configurable: !0
      });
    })(), _v2 && _v2.dynamicAccesses.push({
      stack: _v2.isDebugDynamicAccesses ? Error().stack : void 0,
      expression: _v1
    }), _v8.default.unstable_postpone(_v31(_v0, _v1));
  }
  function _v31(_v0, _v1) {
    return `Route ${_v0} needs to bail out of prerendering at this point because it used ${_v1}. React throws this special object to indicate where. It should not be caught by your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
  }
  function _v32(_v0) {
    return "object" == typeof _v0 && null !== _v0 && "string" == typeof _v0.message && _v33(_v0.message);
  }
  function _v33(_v0) {
    return _v0.includes("needs to bail out of prerendering at this point because it used") && _v0.includes("Learn more: https://nextjs.org/docs/messages/ppr-caught-error");
  }
  if (!1 === _v33(_v31("%%%", "^^^"))) throw Object.defineProperty(Error("Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js"), "__NEXT_ERROR_CODE", {
    value: "E296",
    enumerable: !1,
    configurable: !0
  });
  let _v34 = "NEXT_PRERENDER_INTERRUPTED";
  function _v35(_v0) {
    let _v1 = Object.defineProperty(Error(_v0), "__NEXT_ERROR_CODE", {
      value: "E394",
      enumerable: !1,
      configurable: !0
    });
    return _v1.digest = _v34, _v1;
  }
  function _v36(_v0) {
    return "object" == typeof _v0 && null !== _v0 && _v0.digest === _v34 && "name" in _v0 && "message" in _v0 && _v0 instanceof Error;
  }
  function _v37(_v0) {
    return _v0.length > 0;
  }
  function _v38(_v0, _v1) {
    return _v0.dynamicAccesses.push(..._v1.dynamicAccesses), _v0.dynamicAccesses;
  }
  function _v39(_v0) {
    return _v0.filter(_v0 => "string" == typeof _v0.stack && _v0.stack.length > 0).map(({
      expression: _v0,
      stack: _v1
    }) => (_v1 = _v1.split("\n").slice(4).filter(_v0 => !(_v0.includes("node_modules/next/") || _v0.includes(" (<anonymous>)") || _v0.includes(" (node:"))).join("\n"), `Dynamic API Usage Debug - ${_v0}:
${_v1}`));
  }
  function _v40() {
    let _v0 = new AbortController();
    return _v0.abort(Object.defineProperty(new _v16.BailoutToCSRError("Render in Browser"), "__NEXT_ERROR_CODE", {
      value: "E721",
      enumerable: !1,
      configurable: !0
    })), _v0.signal;
  }
  function _v41(_v0) {
    switch (_v0.type) {
      case "prerender":
      case "prerender-runtime":
        let _v0 = new AbortController();
        if (_v0.cacheSignal) _v0.cacheSignal.inputReady().then(() => {
          _v0.abort();
        });else if ("prerender-runtime" === _v0.type && _v0.stagedRendering) {
          let {
            stagedRendering: _v0
          } = _v0;
          _v0.waitForStage((0, _v13.getRuntimeStage)(_v0)).then(() => (0, _v15.scheduleOnNextTick)(() => _v0.abort()));
        } else (0, _v15.scheduleOnNextTick)(() => _v0.abort());
        return _v0.signal;
      case "prerender-client":
      case "validation-client":
      case "prerender-ppr":
      case "prerender-legacy":
      case "request":
      case "cache":
      case "private-cache":
      case "unstable-cache":
      case "generate-static-params":
        return;
    }
  }
  function _v42(_v0, _v1) {
    let _v2 = _v1.dynamicTracking;
    _v2 && _v2.dynamicAccesses.push({
      stack: _v2.isDebugDynamicAccesses ? Error().stack : void 0,
      expression: _v0
    });
  }
  function _v43(_v0) {
    let _v1 = _v12.workAsyncStorage.getStore(),
      _v2 = _v11.workUnitAsyncStorage.getStore();
    if (_v1 && _v2) switch (_v2.type) {
      case "prerender-client":
      case "prerender":
        {
          let _v0 = _v2.fallbackRouteParams;
          _v0 && _v0.size > 0 && _v8.default.use((0, _v13.makeHangingPromise)(_v2.renderSignal, _v1.route, _v0));
          break;
        }
      case "prerender-ppr":
        {
          let _v0 = _v2.fallbackRouteParams;
          if (_v0 && _v0.size > 0) return _v30(_v1.route, _v0, _v2.dynamicTracking);
          break;
        }
      case "validation-client":
      case "prerender-legacy":
      case "request":
      case "unstable-cache":
        break;
      case "prerender-runtime":
        throw Object.defineProperty(new _v17.InvariantError(`\`${_v0}\` was called during a runtime prerender. Next.js should be preventing ${_v0} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
          value: "E771",
          enumerable: !1,
          configurable: !0
        });
      case "cache":
      case "private-cache":
        throw Object.defineProperty(new _v17.InvariantError(`\`${_v0}\` was called inside a cache scope. Next.js should be preventing ${_v0} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
          value: "E745",
          enumerable: !1,
          configurable: !0
        });
      case "generate-static-params":
        throw Object.defineProperty(new _v17.InvariantError(`\`${_v0}\` was called in \`generateStaticParams\`. Next.js should be preventing ${_v0} from being included in server component files statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
          value: "E1130",
          enumerable: !1,
          configurable: !0
        });
    }
  }
  function _v44(_v0) {
    let _v1 = _v12.workAsyncStorage.getStore(),
      _v2 = _v11.workUnitAsyncStorage.getStore();
    if (_v1) switch (!_v2 && (0, _v11.throwForMissingRequestStore)(_v0), _v2.type) {
      case "validation-client":
      case "request":
        return;
      case "prerender-client":
        _v8.default.use((0, _v13.makeHangingPromise)(_v2.renderSignal, _v1.route, _v0));
        break;
      case "prerender-legacy":
      case "prerender-ppr":
        if (_v1.forceStatic) return;
        throw Object.defineProperty(new _v16.BailoutToCSRError(_v0), "__NEXT_ERROR_CODE", {
          value: "E394",
          enumerable: !1,
          configurable: !0
        });
      case "prerender":
      case "prerender-runtime":
        throw Object.defineProperty(new _v17.InvariantError(`\`${_v0}\` was called from a Server Component. Next.js should be preventing ${_v0} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
          value: "E795",
          enumerable: !1,
          configurable: !0
        });
      case "cache":
      case "unstable-cache":
      case "private-cache":
        throw Object.defineProperty(new _v17.InvariantError(`\`${_v0}\` was called inside a cache scope. Next.js should be preventing ${_v0} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
          value: "E745",
          enumerable: !1,
          configurable: !0
        });
      case "generate-static-params":
        throw Object.defineProperty(new _v17.InvariantError(`\`${_v0}\` was called in \`generateStaticParams\`. Next.js should be preventing ${_v0} from being included in server component files statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
          value: "E1130",
          enumerable: !1,
          configurable: !0
        });
    }
  }
  let _v45 = /\n\s+at Suspense \(<anonymous>\)/,
    _v46 = RegExp(`\\n\\s+at Suspense \\(<anonymous>\\)(?:(?!\\n\\s+at (?:body|div|main|section|article|aside|header|footer|nav|form|p|span|h1|h2|h3|h4|h5|h6) \\(<anonymous>\\))[\\s\\S])*?\\n\\s+at ${_v14.ROOT_LAYOUT_BOUNDARY_NAME} \\([^\\n]*\\)`),
    _v47 = RegExp(`\\n\\s+at ${_v14.METADATA_BOUNDARY_NAME}[\\n\\s]`),
    _v48 = RegExp(`\\n\\s+at ${_v14.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`),
    _v49 = RegExp(`\\n\\s+at ${_v14.OUTLET_BOUNDARY_NAME}[\\n\\s]`),
    _v50 = RegExp(`\\n\\s+at ${_v18.INSTANT_VALIDATION_BOUNDARY_NAME}[\\n\\s]`);
  function _v51(_v0, _v1, _v2, _v3) {
    if (!_v49.test(_v1)) {
      if (_v47.test(_v1)) {
        _v2.hasDynamicMetadata = !0;
        return;
      }
      if (_v48.test(_v1)) {
        _v2.hasDynamicViewport = !0;
        return;
      }
      if (_v46.test(_v1)) {
        _v2.hasAllowedDynamic = !0, _v2.hasSuspenseAboveBody = !0;
        return;
      } else if (_v45.test(_v1)) {
        _v2.hasAllowedDynamic = !0;
        return;
      } else {
        if (_v3.syncDynamicErrorWithStack) return void _v2.dynamicErrors.push(_v3.syncDynamicErrorWithStack);
        let _v0 = _v58(Object.defineProperty(Error(`Route "${_v0.route}": Uncached data was accessed outside of <Suspense>. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route`), "__NEXT_ERROR_CODE", {
          value: "E1079",
          enumerable: !1,
          configurable: !0
        }), _v1, null);
        return void _v2.dynamicErrors.push(_v0);
      }
    }
  }
  var _v52 = ((_v4 = {})[_v4.Runtime = 1] = "Runtime", _v4[_v4.Dynamic = 2] = "Dynamic", _v4);
  function _v53(_v0) {
    return {
      hasDynamicMetadata: !1,
      hasAllowedClientDynamicAboveBoundary: !1,
      dynamicMetadata: null,
      hasDynamicViewport: !1,
      hasAllowedDynamic: !1,
      dynamicErrors: [],
      validationPreventingErrors: [],
      thrownErrorsOutsideBoundary: [],
      createInstantStack: _v0
    };
  }
  function _v54(_v0, _v1, _v2, _v3, _v4, _v5) {
    if (_v49.test(_v1)) return;
    if (_v47.test(_v1)) {
      let _v0 = _v58(Object.defineProperty(Error(`Route "${_v0.route}": ${1 === _v4 ? "Runtime data such as `cookies()`, `headers()`, `params`, or `searchParams` was accessed inside `generateMetadata` or you have file-based metadata such as icons that depend on dynamic params segments." : "Uncached data or `connection()` was accessed inside `generateMetadata`."} Except for this instance, the page would have been entirely prerenderable which may have been the intended behavior. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`), "__NEXT_ERROR_CODE", {
        value: "E1076",
        enumerable: !1,
        configurable: !0
      }), _v1, _v2.createInstantStack);
      _v2.dynamicMetadata = _v0;
      return;
    }
    if (_v48.test(_v1)) {
      let _v0 = _v58(Object.defineProperty(Error(`Route "${_v0.route}": ${1 === _v4 ? "Runtime data such as `cookies()`, `headers()`, `params`, or `searchParams` was accessed inside `generateViewport`." : "Uncached data or `connection()` was accessed inside `generateViewport`."} This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`), "__NEXT_ERROR_CODE", {
        value: "E1086",
        enumerable: !1,
        configurable: !0
      }), _v1, _v2.createInstantStack);
      _v2.dynamicErrors.push(_v0);
      return;
    }
    let _v6 = _v50.exec(_v1);
    if (_v6) {
      let _v0 = _v45.exec(_v1);
      if (_v0 && _v0.index < _v6.index) {
        _v2.hasAllowedDynamic = !0;
        return;
      }
    } else if (_v5.expectedIds.size === _v5.renderedIds.size) {
      _v2.hasAllowedClientDynamicAboveBoundary = !0, _v2.hasAllowedDynamic = !0;
      return;
    } else {
      let _v0 = _v58(Object.defineProperty(Error(`Route "${_v0.route}": Could not validate \`unstable_instant\` because a Client Component in a parent segment prevented the page from rendering.`), "__NEXT_ERROR_CODE", {
        value: "E1082",
        enumerable: !1,
        configurable: !0
      }), _v1, _v2.createInstantStack);
      _v2.validationPreventingErrors.push(_v0);
      return;
    }
    if (_v3.syncDynamicErrorWithStack) {
      let _v0 = _v3.syncDynamicErrorWithStack;
      null !== _v2.createInstantStack && void 0 === _v0.cause && (_v0.cause = _v2.createInstantStack()), _v2.dynamicErrors.push(_v0);
      return;
    }
    let _v7 = _v58(Object.defineProperty(Error(`Route "${_v0.route}": ${1 === _v4 ? "Runtime data such as `cookies()`, `headers()`, `params`, or `searchParams` was accessed outside of `<Suspense>`." : "Uncached data or `connection()` was accessed outside of `<Suspense>`."} This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route`), "__NEXT_ERROR_CODE", {
      value: "E1078",
      enumerable: !1,
      configurable: !0
    }), _v1, _v2.createInstantStack);
    _v2.dynamicErrors.push(_v7);
  }
  function _v55(_v0, _v1, _v2, _v3) {
    let _v4 = _v50.exec(_v3);
    if (_v4) {
      let _v0 = _v45.exec(_v3);
      if (_v0 && _v0.index < _v4.index) return;
      let _v1 = _v58(Object.defineProperty(Error(`Route "${_v0.route}": Could not validate \`unstable_instant\` because an error prevented the target segment from rendering.`, {
        cause: _v2
      }), "__NEXT_ERROR_CODE", {
        value: "E1112",
        enumerable: !1,
        configurable: !0
      }), _v3, null);
      _v1.validationPreventingErrors.push(_v1);
    } else {
      let _v0 = _v58(Object.defineProperty(Error("An error occurred while attempting to validate instant UI. This error may be preventing the validation from completing.", {
        cause: _v2
      }), "__NEXT_ERROR_CODE", {
        value: "E1118",
        enumerable: !1,
        configurable: !0
      }), _v3, null);
      _v1.thrownErrorsOutsideBoundary.push(_v0);
    }
  }
  function _v56(_v0, _v1, _v2, _v3) {
    if (_v49.test(_v1)) return;
    if (_v47.test(_v1)) {
      _v2.dynamicMetadata = _v58(Object.defineProperty(Error(`Route "${_v0.route}": Uncached data or \`connection()\` was accessed inside \`generateMetadata\`. Except for this instance, the page would have been entirely prerenderable which may have been the intended behavior. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`), "__NEXT_ERROR_CODE", {
        value: "E1080",
        enumerable: !1,
        configurable: !0
      }), _v1, null);
      return;
    }
    if (_v48.test(_v1)) {
      let _v0 = _v58(Object.defineProperty(Error(`Route "${_v0.route}": Uncached data or \`connection()\` was accessed inside \`generateViewport\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`), "__NEXT_ERROR_CODE", {
        value: "E1077",
        enumerable: !1,
        configurable: !0
      }), _v1, null);
      _v2.dynamicErrors.push(_v0);
      return;
    }
    if (_v46.test(_v1)) {
      _v2.hasAllowedDynamic = !0, _v2.hasSuspenseAboveBody = !0;
      return;
    }
    if (_v45.test(_v1)) {
      _v2.hasAllowedDynamic = !0;
      return;
    } else if (_v3.syncDynamicErrorWithStack) return void _v2.dynamicErrors.push(_v3.syncDynamicErrorWithStack);
    let _v4 = _v58(Object.defineProperty(Error(`Route "${_v0.route}": Uncached data or \`connection()\` was accessed outside of \`<Suspense>\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route`), "__NEXT_ERROR_CODE", {
      value: "E1084",
      enumerable: !1,
      configurable: !0
    }), _v1, null);
    _v2.dynamicErrors.push(_v4);
  }
  function _v57(_v0, _v1, _v2, _v3) {
    if (!_v49.test(_v1)) {
      if (_v47.test(_v1)) {
        _v2.dynamicMetadata = _v58(Object.defineProperty(Error(`Route "${_v0.route}": Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed inside \`generateMetadata\` or you have file-based metadata such as icons that depend on dynamic params segments. Except for this instance, the page would have been entirely prerenderable which may have been the intended behavior. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`), "__NEXT_ERROR_CODE", {
          value: "E1085",
          enumerable: !1,
          configurable: !0
        }), _v1, null);
        return;
      }
      if (_v48.test(_v1)) {
        let _v0 = _v58(Object.defineProperty(Error(`Route "${_v0.route}": Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed inside \`generateViewport\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`), "__NEXT_ERROR_CODE", {
          value: "E1081",
          enumerable: !1,
          configurable: !0
        }), _v1, null);
        _v2.dynamicErrors.push(_v0);
        return;
      }
      if (_v46.test(_v1)) {
        _v2.hasAllowedDynamic = !0, _v2.hasSuspenseAboveBody = !0;
        return;
      } else if (_v45.test(_v1)) {
        _v2.hasAllowedDynamic = !0;
        return;
      } else {
        if (_v3.syncDynamicErrorWithStack) return void _v2.dynamicErrors.push(_v3.syncDynamicErrorWithStack);
        let _v0 = _v58(Object.defineProperty(Error(`Route "${_v0.route}": Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed outside of \`<Suspense>\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route`), "__NEXT_ERROR_CODE", {
          value: "E1083",
          enumerable: !1,
          configurable: !0
        }), _v1, null);
        return void _v2.dynamicErrors.push(_v0);
      }
    }
  }
  function _v58(_v0, _v1, _v2) {
    return null !== _v2 && (_v0.cause = _v2()), _v0.stack = _v0.name + ": " + _v0.message + _v1, _v0;
  }
  var _v59 = ((_v5 = {})[_v5.Full = 0] = "Full", _v5[_v5.Empty = 1] = "Empty", _v5[_v5.Errored = 2] = "Errored", _v5);
  function _v60(_v0, _v1) {
    console.error(_v1), console.error(`To get a more detailed stack trace and pinpoint the issue, try one of the following:
  - Start the app in development mode by running \`next dev\`, then open "${_v0.route}" in your browser to investigate the error.
  - Rerun the production build with \`next build --debug-prerender\` to generate better stack traces.`);
  }
  function _v61(_v0, _v1, _v2, _v3) {
    if (_v3.syncDynamicErrorWithStack) throw _v60(_v0, _v3.syncDynamicErrorWithStack), new _v10.StaticGenBailoutError();
    if (0 !== _v1) {
      if (_v2.hasSuspenseAboveBody) return;
      let _v0 = _v2.dynamicErrors;
      if (_v0.length > 0) {
        for (let _v0 = 0; _v0 < _v0.length; _v0++) _v60(_v0, _v0[_v0]);
        throw new _v10.StaticGenBailoutError();
      }
      if (_v2.hasDynamicViewport) throw console.error(`Route "${_v0.route}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) without explicitly allowing fully dynamic rendering. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`), new _v10.StaticGenBailoutError();
      if (1 === _v1) throw console.error(`Route "${_v0.route}" did not produce a static shell and Next.js was unable to determine a reason. This is a bug in Next.js.`), new _v10.StaticGenBailoutError();
    } else if (!1 === _v2.hasAllowedDynamic && _v2.hasDynamicMetadata) throw console.error(`Route "${_v0.route}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) when the rest of the route does not. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`), new _v10.StaticGenBailoutError();
  }
  function _v62(_v0, _v1, _v2, _v3) {
    if (_v3 || _v2.hasSuspenseAboveBody) return [];
    if (0 !== _v1) {
      let _v0 = _v2.dynamicErrors;
      if (_v0.length > 0) return _v0;
      if (1 === _v1) return [Object.defineProperty(new _v17.InvariantError(`Route "${_v0.route}" did not produce a static shell and Next.js was unable to determine a reason.`), "__NEXT_ERROR_CODE", {
        value: "E936",
        enumerable: !1,
        configurable: !0
      })];
    } else if (!1 === _v2.hasAllowedDynamic && 0 === _v2.dynamicErrors.length && _v2.dynamicMetadata) return [_v2.dynamicMetadata];
    return [];
  }
  function _v63(_v0, _v1, _v2, _v3, _v4) {
    if (_v3) {
      let {
        missingSampleErrors: _v0
      } = _v3;
      if (_v0.length > 0) return _v0;
    }
    let {
      validationPreventingErrors: _v5
    } = _v2;
    if (_v5.length > 0) return _v5;
    if (_v4.renderedIds.size < _v4.expectedIds.size) {
      let {
        thrownErrorsOutsideBoundary: _v0,
        createInstantStack: _v1
      } = _v2;
      if (0 === _v0.length) {
        let _v0 = `Route "${_v0.route}": Could not validate \`unstable_instant\` because the target segment was prevented from rendering for an unknown reason.`,
          _v1 = null !== _v1 ? _v1() : Error();
        return _v1.name = "Error", _v1.message = _v0, [_v1];
      }
      if (1 === _v0.length) {
        let _v0 = `Route "${_v0.route}": Could not validate \`unstable_instant\` because the target segment was prevented from rendering, likely due to the following error.`,
          _v1 = null !== _v1 ? _v1() : Error();
        return _v1.name = "Error", _v1.message = _v0, [_v1, _v0[0]];
      }
      {
        let _v0 = `Route "${_v0.route}": Could not validate \`unstable_instant\` because the target segment was prevented from rendering, likely due to one of the following errors.`,
          _v1 = null !== _v1 ? _v1() : Error();
        return _v1.name = "Error", _v1.message = _v0, [_v1, ..._v0];
      }
    }
    if (0 !== _v1) {
      let _v0 = _v2.dynamicErrors;
      if (_v0.length > 0) return _v0;
      if (1 === _v1) return _v2.hasAllowedClientDynamicAboveBoundary ? [] : [Object.defineProperty(new _v17.InvariantError(`Route "${_v0.route}" failed to render during instant validation and Next.js was unable to determine a reason.`), "__NEXT_ERROR_CODE", {
        value: "E1055",
        enumerable: !1,
        configurable: !0
      })];
    } else {
      let _v0 = _v2.dynamicErrors;
      if (_v0.length > 0) return _v0;
      if (!1 === _v2.hasAllowedDynamic && _v2.dynamicMetadata) return [_v2.dynamicMetadata];
    }
    return [];
  }
}