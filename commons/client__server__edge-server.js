{
  "use strict";

  var _v3,
    _v4 = _v0.i(0);
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v5 = {
    APP_CLIENT_INTERNALS: function () {
      return _v56;
    },
    APP_PATHS_MANIFEST: function () {
      return _v20;
    },
    APP_PATH_ROUTES_MANIFEST: function () {
      return _v21;
    },
    AdapterOutputType: function () {
      return _v11;
    },
    BARREL_OPTIMIZATION_PREFIX: function () {
      return _v47;
    },
    BLOCKED_PAGES: function () {
      return _v42;
    },
    BUILD_ID_FILE: function () {
      return _v41;
    },
    BUILD_MANIFEST: function () {
      return _v22;
    },
    CLIENT_PUBLIC_FILES_PATH: function () {
      return _v43;
    },
    CLIENT_REFERENCE_MANIFEST: function () {
      return _v48;
    },
    CLIENT_STATIC_FILES_PATH: function () {
      return _v44;
    },
    CLIENT_STATIC_FILES_RUNTIME_MAIN: function () {
      return _v54;
    },
    CLIENT_STATIC_FILES_RUNTIME_MAIN_APP: function () {
      return _v55;
    },
    CLIENT_STATIC_FILES_RUNTIME_POLYFILLS: function () {
      return _v59;
    },
    CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL: function () {
      return _v60;
    },
    CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH: function () {
      return _v57;
    },
    CLIENT_STATIC_FILES_RUNTIME_WEBPACK: function () {
      return _v58;
    },
    COMPILER_INDEXES: function () {
      return _v10;
    },
    COMPILER_NAMES: function () {
      return _v9;
    },
    CONFIG_FILES: function () {
      return _v40;
    },
    DEFAULT_RUNTIME_WEBPACK: function () {
      return _v61;
    },
    DEFAULT_SANS_SERIF_FONT: function () {
      return _v66;
    },
    DEFAULT_SERIF_FONT: function () {
      return _v65;
    },
    DEV_CLIENT_MIDDLEWARE_MANIFEST: function () {
      return _v37;
    },
    DEV_CLIENT_PAGES_MANIFEST: function () {
      return _v33;
    },
    DYNAMIC_CSS_MANIFEST: function () {
      return _v53;
    },
    EDGE_RUNTIME_WEBPACK: function () {
      return _v62;
    },
    EDGE_UNSUPPORTED_NODE_APIS: function () {
      return _v71;
    },
    EXPORT_DETAIL: function () {
      return _v27;
    },
    EXPORT_MARKER: function () {
      return _v26;
    },
    FUNCTIONS_CONFIG_MANIFEST: function () {
      return _v23;
    },
    IMAGES_MANIFEST: function () {
      return _v31;
    },
    INTERCEPTION_ROUTE_REWRITE_MANIFEST: function () {
      return _v52;
    },
    MIDDLEWARE_BUILD_MANIFEST: function () {
      return _v50;
    },
    MIDDLEWARE_MANIFEST: function () {
      return _v34;
    },
    MIDDLEWARE_REACT_LOADABLE_MANIFEST: function () {
      return _v51;
    },
    MODERN_BROWSERSLIST_TARGET: function () {
      return _v7.default;
    },
    NEXT_BUILTIN_DOCUMENT: function () {
      return _v46;
    },
    NEXT_FONT_MANIFEST: function () {
      return _v25;
    },
    PAGES_MANIFEST: function () {
      return _v19;
    },
    PHASE_ANALYZE: function () {
      return _v13;
    },
    PHASE_DEVELOPMENT_SERVER: function () {
      return _v16;
    },
    PHASE_EXPORT: function () {
      return _v12;
    },
    PHASE_INFO: function () {
      return _v18;
    },
    PHASE_PRODUCTION_BUILD: function () {
      return _v14;
    },
    PHASE_PRODUCTION_SERVER: function () {
      return _v15;
    },
    PHASE_TEST: function () {
      return _v17;
    },
    PREFETCH_HINTS: function () {
      return _v29;
    },
    PRERENDER_MANIFEST: function () {
      return _v28;
    },
    REACT_LOADABLE_MANIFEST: function () {
      return _v38;
    },
    ROUTES_MANIFEST: function () {
      return _v30;
    },
    RSC_MODULE_TYPES: function () {
      return _v70;
    },
    SERVER_DIRECTORY: function () {
      return _v39;
    },
    SERVER_FILES_MANIFEST: function () {
      return _v32;
    },
    SERVER_PROPS_ID: function () {
      return _v64;
    },
    SERVER_REFERENCE_MANIFEST: function () {
      return _v49;
    },
    STATIC_PROPS_ID: function () {
      return _v63;
    },
    STATIC_STATUS_PAGES: function () {
      return _v67;
    },
    STRING_LITERAL_DROP_BUNDLE: function () {
      return _v45;
    },
    SUBRESOURCE_INTEGRITY_MANIFEST: function () {
      return _v24;
    },
    SYSTEM_ENTRYPOINTS: function () {
      return _v72;
    },
    TRACE_OUTPUT_VERSION: function () {
      return _v68;
    },
    TURBOPACK_CLIENT_BUILD_MANIFEST: function () {
      return _v36;
    },
    TURBOPACK_CLIENT_MIDDLEWARE_MANIFEST: function () {
      return _v35;
    },
    TURBO_TRACE_DEFAULT_MEMORY_LIMIT: function () {
      return _v69;
    },
    UNDERSCORE_GLOBAL_ERROR_ROUTE: function () {
      return _v8.UNDERSCORE_GLOBAL_ERROR_ROUTE;
    },
    UNDERSCORE_GLOBAL_ERROR_ROUTE_ENTRY: function () {
      return _v8.UNDERSCORE_GLOBAL_ERROR_ROUTE_ENTRY;
    },
    UNDERSCORE_NOT_FOUND_ROUTE: function () {
      return _v8.UNDERSCORE_NOT_FOUND_ROUTE;
    },
    UNDERSCORE_NOT_FOUND_ROUTE_ENTRY: function () {
      return _v8.UNDERSCORE_NOT_FOUND_ROUTE_ENTRY;
    }
  };
  for (var _v6 in _v5) Object.defineProperty(_v2, _v6, {
    enumerable: !0,
    get: _v5[_v6]
  });
  let _v7 = _v0.r(0)._(_v0.r(0)),
    _v8 = _v0.r(0),
    _v9 = {
      client: "client",
      server: "server",
      edgeServer: "edge-server"
    },
    _v10 = {
      [_v9.client]: 0,
      [_v9.server]: 1,
      [_v9.edgeServer]: 2
    };
  var _v11 = ((_v3 = {}).PAGES = "PAGES", _v3.PAGES_API = "PAGES_API", _v3.APP_PAGE = "APP_PAGE", _v3.APP_ROUTE = "APP_ROUTE", _v3.PRERENDER = "PRERENDER", _v3.STATIC_FILE = "STATIC_FILE", _v3.MIDDLEWARE = "MIDDLEWARE", _v3);
  let _v12 = "phase-export",
    _v13 = "phase-analyze",
    _v14 = "phase-production-build",
    _v15 = "phase-production-server",
    _v16 = "phase-development-server",
    _v17 = "phase-test",
    _v18 = "phase-info",
    _v19 = "pages-manifest.json",
    _v20 = "app-paths-manifest.json",
    _v21 = "app-path-routes-manifest.json",
    _v22 = "build-manifest.json",
    _v23 = "functions-config-manifest.json",
    _v24 = "subresource-integrity-manifest",
    _v25 = "next-font-manifest",
    _v26 = "export-marker.json",
    _v27 = "export-detail.json",
    _v28 = "prerender-manifest.json",
    _v29 = "prefetch-hints.json",
    _v30 = "routes-manifest.json",
    _v31 = "images-manifest.json",
    _v32 = "required-server-files",
    _v33 = "_devPagesManifest.json",
    _v34 = "middleware-manifest.json",
    _v35 = "_clientMiddlewareManifest.js",
    _v36 = "client-build-manifest.json",
    _v37 = "_devMiddlewareManifest.json",
    _v38 = "react-loadable-manifest.json",
    _v39 = "server",
    _v40 = ["next.config.js", "next.config.mjs", "next.config.ts", ...(_v4.default?.features?.typescript ? ["next.config.mts"] : [])],
    _v41 = "BUILD_ID",
    _v42 = ["/_document", "/_app", "/_error"],
    _v43 = "public",
    _v44 = "static",
    _v45 = "__NEXT_DROP_CLIENT_FILE__",
    _v46 = "__NEXT_BUILTIN_DOCUMENT__",
    _v47 = "__barrel_optimize__",
    _v48 = "client-reference-manifest",
    _v49 = "server-reference-manifest",
    _v50 = "middleware-build-manifest",
    _v51 = "middleware-react-loadable-manifest",
    _v52 = "interception-route-rewrite-manifest",
    _v53 = "dynamic-css-manifest",
    _v54 = "main",
    _v55 = `${_v54}-app`,
    _v56 = "app-pages-internals",
    _v57 = "react-refresh",
    _v58 = "webpack",
    _v59 = "polyfills",
    _v60 = Symbol(_v59),
    _v61 = "webpack-runtime",
    _v62 = "edge-runtime-webpack",
    _v63 = "__N_SSG",
    _v64 = "__N_SSP",
    _v65 = {
      name: "Times New Roman",
      xAvgCharWidth: 821,
      azAvgWidth: 854.3953488372093,
      unitsPerEm: 0
    },
    _v66 = {
      name: "Arial",
      xAvgCharWidth: 904,
      azAvgWidth: 934.5116279069767,
      unitsPerEm: 0
    },
    _v67 = ["/500"],
    _v68 = 1,
    _v69 = 0,
    _v70 = {
      client: "client",
      server: "server"
    },
    _v71 = ["clearImmediate", "setImmediate", "BroadcastChannel", "ByteLengthQueuingStrategy", "CompressionStream", "CountQueuingStrategy", "DecompressionStream", "DomException", "MessageChannel", "MessageEvent", "MessagePort", "ReadableByteStreamController", "ReadableStreamBYOBRequest", "ReadableStreamDefaultController", "TransformStreamDefaultController", "WritableStreamDefaultController"],
    _v72 = new Set([_v54, _v57, _v55]);
  ("function" == typeof _v2.default || "object" == typeof _v2.default && null !== _v2.default) && void 0 === _v2.default.__esModule && (Object.defineProperty(_v2.default, "__esModule", {
    value: !0
  }), Object.assign(_v2.default, _v2), _v1.exports = _v2.default);
}