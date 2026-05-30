{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v3 = {
    ACTION_SUFFIX: function () {
      return _v16;
    },
    APP_DIR_ALIAS: function () {
      return _v41;
    },
    CACHE_ONE_YEAR_SECONDS: function () {
      return _v31;
    },
    DOT_NEXT_ALIAS: function () {
      return _v39;
    },
    ESLINT_DEFAULT_DIRS: function () {
      return _v61;
    },
    GSP_NO_RETURNED_VALUE: function () {
      return _v55;
    },
    GSSP_COMPONENT_MEMBER_ERROR: function () {
      return _v58;
    },
    GSSP_NO_RETURNED_VALUE: function () {
      return _v56;
    },
    HTML_CONTENT_TYPE_HEADER: function () {
      return _v6;
    },
    INFINITE_CACHE: function () {
      return _v32;
    },
    INSTRUMENTATION_HOOK_FILENAME: function () {
      return _v37;
    },
    JSON_CONTENT_TYPE_HEADER: function () {
      return _v7;
    },
    MATCHED_PATH_HEADER: function () {
      return _v10;
    },
    MIDDLEWARE_FILENAME: function () {
      return _v33;
    },
    MIDDLEWARE_LOCATION_REGEXP: function () {
      return _v34;
    },
    NEXT_BODY_SUFFIX: function () {
      return _v19;
    },
    NEXT_CACHE_IMPLICIT_TAG_ID: function () {
      return _v29;
    },
    NEXT_CACHE_REVALIDATED_TAGS_HEADER: function () {
      return _v22;
    },
    NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER: function () {
      return _v23;
    },
    NEXT_CACHE_ROOT_PARAM_TAG_ID: function () {
      return _v30;
    },
    NEXT_CACHE_SOFT_TAG_MAX_LENGTH: function () {
      return _v28;
    },
    NEXT_CACHE_TAGS_HEADER: function () {
      return _v21;
    },
    NEXT_CACHE_TAG_MAX_ITEMS: function () {
      return _v26;
    },
    NEXT_CACHE_TAG_MAX_LENGTH: function () {
      return _v27;
    },
    NEXT_DATA_SUFFIX: function () {
      return _v17;
    },
    NEXT_INTERCEPTION_MARKER_PREFIX: function () {
      return _v9;
    },
    NEXT_META_SUFFIX: function () {
      return _v18;
    },
    NEXT_NAV_DEPLOYMENT_ID_HEADER: function () {
      return _v20;
    },
    NEXT_QUERY_PARAM_PREFIX: function () {
      return _v8;
    },
    NEXT_RESUME_HEADER: function () {
      return _v24;
    },
    NEXT_RESUME_STATE_LENGTH_HEADER: function () {
      return _v25;
    },
    NON_STANDARD_NODE_ENV: function () {
      return _v59;
    },
    PAGES_DIR_ALIAS: function () {
      return _v38;
    },
    PRERENDER_REVALIDATE_HEADER: function () {
      return _v11;
    },
    PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER: function () {
      return _v12;
    },
    PROXY_FILENAME: function () {
      return _v35;
    },
    PROXY_LOCATION_REGEXP: function () {
      return _v36;
    },
    PUBLIC_DIR_MIDDLEWARE_CONFLICT: function () {
      return _v49;
    },
    ROOT_DIR_ALIAS: function () {
      return _v40;
    },
    RSC_ACTION_CLIENT_WRAPPER_ALIAS: function () {
      return _v48;
    },
    RSC_ACTION_ENCRYPTION_ALIAS: function () {
      return _v47;
    },
    RSC_ACTION_PROXY_ALIAS: function () {
      return _v44;
    },
    RSC_ACTION_VALIDATE_ALIAS: function () {
      return _v43;
    },
    RSC_CACHE_WRAPPER_ALIAS: function () {
      return _v45;
    },
    RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS: function () {
      return _v46;
    },
    RSC_MOD_REF_PROXY_ALIAS: function () {
      return _v42;
    },
    RSC_SEGMENTS_DIR_SUFFIX: function () {
      return _v13;
    },
    RSC_SEGMENT_SUFFIX: function () {
      return _v14;
    },
    RSC_SUFFIX: function () {
      return _v15;
    },
    SERVER_PROPS_EXPORT_ERROR: function () {
      return _v54;
    },
    SERVER_PROPS_GET_INIT_PROPS_CONFLICT: function () {
      return _v51;
    },
    SERVER_PROPS_SSG_CONFLICT: function () {
      return _v52;
    },
    SERVER_RUNTIME: function () {
      return _v62;
    },
    SSG_FALLBACK_EXPORT_ERROR: function () {
      return _v60;
    },
    SSG_GET_INITIAL_PROPS_CONFLICT: function () {
      return _v50;
    },
    STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR: function () {
      return _v53;
    },
    TEXT_PLAIN_CONTENT_TYPE_HEADER: function () {
      return _v5;
    },
    UNSTABLE_REVALIDATE_RENAME_ERROR: function () {
      return _v57;
    },
    WEBPACK_LAYERS: function () {
      return _v65;
    },
    WEBPACK_RESOURCE_QUERIES: function () {
      return _v66;
    },
    WEB_SOCKET_MAX_RECONNECTIONS: function () {
      return _v63;
    }
  };
  for (var _v4 in _v3) Object.defineProperty(_v2, _v4, {
    enumerable: !0,
    get: _v3[_v4]
  });
  let _v5 = "text/plain",
    _v6 = "text/html; charset=utf-8",
    _v7 = "application/json; charset=utf-8",
    _v8 = "nxtP",
    _v9 = "nxtI",
    _v10 = "x-matched-path",
    _v11 = "x-prerender-revalidate",
    _v12 = "x-prerender-revalidate-if-generated",
    _v13 = ".segments",
    _v14 = ".segment.rsc",
    _v15 = ".rsc",
    _v16 = ".action",
    _v17 = ".json",
    _v18 = ".meta",
    _v19 = ".body",
    _v20 = "x-nextjs-deployment-id",
    _v21 = "x-next-cache-tags",
    _v22 = "x-next-revalidated-tags",
    _v23 = "x-next-revalidate-tag-token",
    _v24 = "next-resume",
    _v25 = "x-next-resume-state-length",
    _v26 = 128,
    _v27 = 256,
    _v28 = 0,
    _v29 = "_N_T_",
    _v30 = "_N_RP_",
    _v31 = 0,
    _v32 = 0,
    _v33 = "middleware",
    _v34 = `(?:src/)?${_v33}`,
    _v35 = "proxy",
    _v36 = `(?:src/)?${_v35}`,
    _v37 = "instrumentation",
    _v38 = "private-next-pages",
    _v39 = "private-dot-next",
    _v40 = "private-next-root-dir",
    _v41 = "private-next-app-dir",
    _v42 = "private-next-rsc-mod-ref-proxy",
    _v43 = "private-next-rsc-action-validate",
    _v44 = "private-next-rsc-server-reference",
    _v45 = "private-next-rsc-cache-wrapper",
    _v46 = "private-next-rsc-track-dynamic-import",
    _v47 = "private-next-rsc-action-encryption",
    _v48 = "private-next-rsc-action-client-wrapper",
    _v49 = "You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict",
    _v50 = "You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps",
    _v51 = "You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.",
    _v52 = "You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps",
    _v53 = "can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props",
    _v54 = "pages with `getServerSideProps` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export",
    _v55 = "Your `getStaticProps` function did not return an object. Did you forget to add a `return`?",
    _v56 = "Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?",
    _v57 = "The `unstable_revalidate` property is available for general use.\nPlease use `revalidate` instead.",
    _v58 = "can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member",
    _v59 = 'You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env',
    _v60 = "Pages with `fallback` enabled in `getStaticPaths` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export",
    _v61 = ["app", "pages", "components", "lib", "src"],
    _v62 = {
      edge: "edge",
      experimentalEdge: "experimental-edge",
      nodejs: "nodejs"
    },
    _v63 = 12,
    _v64 = {
      shared: "shared",
      reactServerComponents: "rsc",
      serverSideRendering: "ssr",
      actionBrowser: "action-browser",
      apiNode: "api-node",
      apiEdge: "api-edge",
      middleware: "middleware",
      instrument: "instrument",
      edgeAsset: "edge-asset",
      appPagesBrowser: "app-pages-browser",
      pagesDirBrowser: "pages-dir-browser",
      pagesDirEdge: "pages-dir-edge",
      pagesDirNode: "pages-dir-node"
    },
    _v65 = {
      ..._v64,
      GROUP: {
        builtinReact: [_v64.reactServerComponents, _v64.actionBrowser],
        serverOnly: [_v64.reactServerComponents, _v64.actionBrowser, _v64.instrument, _v64.middleware],
        neutralTarget: [_v64.apiNode, _v64.apiEdge],
        clientOnly: [_v64.serverSideRendering, _v64.appPagesBrowser],
        bundled: [_v64.reactServerComponents, _v64.actionBrowser, _v64.serverSideRendering, _v64.appPagesBrowser, _v64.shared, _v64.instrument, _v64.middleware],
        appPages: [_v64.reactServerComponents, _v64.serverSideRendering, _v64.appPagesBrowser, _v64.actionBrowser]
      }
    },
    _v66 = {
      edgeSSREntry: "__next_edge_ssr_entry__",
      metadata: "__next_metadata__",
      metadataRoute: "__next_metadata_route__",
      metadataImageMeta: "__next_metadata_image_meta__"
    };
}