{
  "use strict";

  _v0.s(["default", () => _v29], 0), _v0.s(["JSONtoBlobURL", () => _v23, "addUrlParams", () => _v16, "getFolderId", () => _v20, "getFolderIdFromUri", () => _v21, "getMandatoryVimeoVideoId", () => _v22, "getVimeoVideoId", () => _v18, "getVimeoVideoIdString", () => _v19, "isDataUrl", () => _v25, "isLocalUrl", () => _v24, "partnerRouteToPreview", () => _v27, "replaceUrlParams", () => _v17, "setHashUrlParam", () => _v26], 0);
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
    _v14 = _v0.i(0);
  let _v15 = {
    EDITOR_ERROR_ALERT: "EditorErrorAlert",
    EDITOR_ERROR: "EditorError",
    EDITOR_UPLOAD_ERROR: "EditorUploadError",
    EDITOR_API_ERROR: "EditorApiError",
    INTERACTIVE_ERROR: "InteractiveError"
  };
  _v0.s(["LogComponent", 0, _v15], 0);
  let _v16 = (_v0, _v1) => {
      let _v2 = `${_v0}=${_v1}`,
        {
          history: _v3,
          location: _v4
        } = window;
      _v3.replaceState(_v3.state, "", _v4.href + "&" + `${_v2}`);
    },
    _v17 = (_v0, _v1) => {
      let {
          history: _v2,
          location: _v3
        } = window,
        _v4 = new URLSearchParams(_v3.search);
      _v4.set(_v0, _v1), _v2.replaceState(_v2.state, "", `${_v3.origin}${_v3.pathname}?${_v4.toString()}`);
    },
    _v18 = () => {
      let _v0 = new URLSearchParams(window.location.search).get("vid");
      return _v0 ? parseInt(_v0) : null;
    },
    _v19 = () => {
      let _v0 = new URLSearchParams(window.location.search).get("vid");
      return null !== _v0 && /^\d+$/.test(_v0) ? _v0 : null;
    },
    _v20 = () => {
      let _v0 = Number(new URLSearchParams(window.location.search).get("folder_id"));
      return isNaN(_v0) ? null : _v0;
    },
    _v21 = (_v0 = "") => {
      let _v1 = Number(_v0?.match(/(\d)+/g)?.[1]);
      return isNaN(_v1) ? null : _v1;
    },
    _v22 = () => {
      let _v0 = _v18();
      if ("number" != typeof _v0) throw Error(`vid query parameter is missing in URL ${window.location.href}`);
      return _v0;
    },
    _v23 = _v0 => {
      let _v1 = new Blob([JSON.stringify(_v0)], {
        type: "application/json"
      });
      return URL.createObjectURL(_v1);
    },
    _v24 = _v0 => (void 0 === _v0 && _v14.default.sendLog(_v13.MISSING_LOCAL_URL, _v15.EDITOR_ERROR), _v0?.startsWith("blob")),
    _v25 = _v0 => (void 0 === _v0 && _v14.default.sendLog(_v13.MISSING_DATA_URL, _v15.EDITOR_ERROR), _v0?.startsWith("data")),
    _v26 = _v0 => {
      (_v0 => {
        let {
            history: _v1,
            location: _v2
          } = window,
          _v3 = new URLSearchParams(_v2.search);
        _v0.forEach(_v0 => {
          _v3.has(_v0) && _v3.delete(_v0);
        }), _v1.replaceState(_v1.state, "", `${_v2.origin}${_v2.pathname}?${_v3.toString()}`);
      })(["blank", "et"]), _v17("hash", _v0);
    },
    _v27 = _v0 => {
      let _v1 = window.location.href,
        _v2 = _v1.match(/\/apps\/(\d+)\//);
      if (_v2 && _v2[1]) {
        let _v0 = _v2[1],
          _v1 = new URL(_v1);
        _v1.search = "", _v1.pathname = `/apps/${_v0}/preview/${_v0}`, _v1.searchParams.append("container", _v11.PRODUCT.EDITOR), window.location.href = _v1.href;
      } else window.location.href = window.location.host;
    };
  class _v28 {
    videoSessionId;
    isStaff = !1;
    storyboardId = null;
    teamUser;
    editorContextFlow = null;
    productAnalyticsContextFlow = null;
    onboardingId;
    thirdPartyIntegration;
    editorQueryParams;
    product = _v11.PRODUCT.EDITOR;
    editorFeature = _v11.PRODUCT.EDITOR;
    setVideoSessionId(_v0) {
      this.videoSessionId = _v0;
    }
    setStoryboardId(_v0) {
      this.storyboardId = _v0;
    }
    init({
      query: _v0,
      thirdPartyIntegration: _v1,
      teamUser: _v2,
      product: _v3
    }) {
      this.onboardingId = _v0.onboardingID, this.teamUser = _v2, this.thirdPartyIntegration = _v1, this.editorQueryParams = _v0, this.product = _v3, this.editorFeature = _v3 === _v11.PRODUCT.SIMPLIFIED_INTERACTIVE ? "interactive" : "editor";
      let _v4 = !window.location.host.endsWith(".ci.vimeows.com") && !window.location.host.endsWith("vimeo.dev") && !window.location.host.endsWith("vimeows.work"),
        _v5 = new _v1.Configuration(_v4 ? _v1.Service.FRESNEL_PROD : _v1.Service.FRESNEL_DEV);
      _v1.BigPictureClient.configure(_v5);
    }
    send({
      eventName: _v0,
      contexts: _v1,
      version: _v2 = -1,
      additionalFields: _v3 = {}
    }) {
      let _v4 = new _v1.Event(_v0, _v2, _v3);
      _v1 ? _v1.BigPictureClient.sendEventWithContexts(_v4, _v1) : _v1.BigPictureClient.sendEvent(_v4);
    }
    buildViewContext = (_v0, _v1 = !1) => (0, _v12.buildViewBpContext)({
      feature: "editor",
      view_type: _v0,
      is_empty_state: _v1
    }, 7);
    buildActionContext = _v0 => (0, _v2.buildActionBpContext)({
      action_type: _v0,
      feature: "editor"
    });
    buildEditorContext = _v0 => (0, _v3.buildEditorBpContext)({
      element: _v0.element || null,
      via: _v0.via || null,
      editor_feature: _v0.editorFeature || this.editorFeature,
      video_session_id: this.videoSessionId?.toString() || "",
      previous_video_id: this.getClipId(),
      previous_method: null,
      previous_method_api_id: null,
      flow: this.editorContextFlow,
      storyboard_id: this.storyboardId,
      storyboard_version: _v10.PROTOCOL_VERSION.toString()
    });
    buildProductAnalyticsContext = _v0 => {
      let {
        feature: _v1,
        location: _v2,
        flow: _v3 = this.productAnalyticsContextFlow,
        element: _v4 = null,
        modal_name: _v5 = null,
        copy: _v6 = null,
        is_user_facing_data: _v7 = null,
        entity_type: _v8 = null
      } = _v0;
      return (0, _v4.buildProductAnalyticsBpContext)({
        feature: _v1,
        product: this.product,
        location: _v2,
        modal_name: _v5,
        element: _v4,
        is_user_facing_data: _v7,
        entity_type: _v8,
        copy: _v6,
        flow: _v3
      });
    };
    buildVideoContext = () => (0, _v8.buildVideoBpContext)({
      video_id: Number(_v18())
    });
    buildWebContext = () => (0, _v7.buildWebBpContext)({
      page_name: "create_editor",
      location: "editor",
      referrer_page_name: this.getReferrerPageName(),
      referrer: document.referrer,
      path: window.location.pathname,
      target: null,
      copy: null
    });
    buildTeamContext = () => (0, _v5.buildTeamBpContextFromTeamUser)(this.teamUser);
    buildThirdPartyIntegrationContext = _v0 => (0, _v6.buildThirdPartyIntegrationBpContext)({
      integration_id: _v0.integration_id,
      integration_name: _v0.integration_name,
      is_partner: _v0.is_partner
    });
    getReferrerPageName = () => {
      if (this.onboardingId) return "seo_tools";
      let _v0 = (0, _v9.getEntryPage)(document.referrer) || null;
      return ("lihp" === _v0 && (_v0 = "logged_in_home_page"), "mvv" === _v0 && (_v0 = "multiple_video_view"), !_v0 || /^https?:/i.test(_v0)) ? null : _v0;
    };
    getThirdPartyIntegration = () => this.thirdPartyIntegration || null;
    setIsStaff(_v0) {
      this.isStaff = _v0;
    }
    setFlow(_v0, _v1) {
      let {
          ai: _v2,
          blank: _v3,
          onboardingID: _v4
        } = this.editorQueryParams || {},
        {
          referrer: _v5
        } = document,
        _v6 = /create\/templates$/.test(_v5) || "true" === _v3,
        _v7 = _v5.includes("create/templates") && !_v5.endsWith("create/templates") && _v0.endsWith("1000"),
        _v8 = !!_v18(),
        _v9 = _v18() && _v0.endsWith("1000"),
        _v10 = _v8 && !_v0.endsWith("1000");
      this.setStoryboardId(_v0), this.product === _v11.PRODUCT.SIMPLIFIED_INTERACTIVE ? this.editorContextFlow = "interactive" : _v4 ? this.editorContextFlow = "seo_tools_campaign" : _v6 ? (this.editorContextFlow = "blank_editor", this.productAnalyticsContextFlow = "blank_editor") : _v7 && "team_templates" === _v1 ? (this.editorContextFlow = "team_template", this.productAnalyticsContextFlow = "team_template") : _v7 && "templates" === _v1 ? (this.editorContextFlow = "template", this.productAnalyticsContextFlow = "template") : _v9 ? (this.editorContextFlow = "edit_vimeo_video", this.productAnalyticsContextFlow = "edit_vimeo_video") : _v10 ? (this.editorContextFlow = "edit_create_video", this.productAnalyticsContextFlow = "edit_create_video") : "true" === _v2 && (this.productAnalyticsContextFlow = "ai");
    }
    getFlow() {
      return this.editorContextFlow;
    }
    getClipId = () => {
      let _v0 = new URLSearchParams(window.location.search).get("vid");
      return _v0 ? parseInt(_v0, 10) : null;
    };
  }
  let _v29 = new _v28();
}