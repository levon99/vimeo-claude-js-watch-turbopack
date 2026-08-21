{
  "use strict";

  let _v1 = ["adsbot-google", "applebot", "baiduspider", "bingbot", "blekkobot", "Embedly", "facebookexternalhit", "Facebot", "feedfetcher-google", "feedly", "FlipboardProxy", "google web preview", "Googlebot", "GrapeshotCrawler", "linkedinbot", "mail.ru_bot", "mediapartners-google", "msnbot_mobile", "msnbot", "pinterest", "Seznam", "SkypeUriPreview", "slurp", "superfeedr bot", "tumblr", "twitterbot", "yandex", "prerender"],
    _v2 = "u" > typeof navigator,
    _v3 = _v2 && (/ipad|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1),
    _v4 = _v2 && /iphone|ipod|android|webos|blackberry|windows phone/i.test(navigator.userAgent.toLowerCase());
  class _v5 {
    eventHandlers;
    metadata;
    pendo;
    activeGuide;
    observer;
    isDisplaying = !1;
    constructor(_v0, _v1, _v2) {
      this.eventHandlers = _v0, this.metadata = _v1, this.pendo = _v2;
    }
    getEventHandlers() {
      let _v0 = this.eventHandlers,
        _v1 = {};
      if (!_v0) return _v1;
      let {
        onReady: _v2,
        onGuideLoaded: _v3,
        onGuideFailed: _v4
      } = _v0;
      return _v2 && (_v1.ready = _v2), _v3 && (_v1.guidesLoaded = _v3), _v4 && (_v1.guidesFailed = _v4), _v1;
    }
    triggerAdvanceAndUpdateGuide() {
      if (this.activeGuide) try {
        this.triggerGuideAdvanced();
      } finally {
        this.updateActiveGuide();
      }
    }
    triggerGuideDisplayed() {
      this.updateActiveGuide(), this.isDisplaying = !0;
      let _v0 = this.cloneActiveGuide(),
        _v1 = {
          ..._v0,
          metadata: this.metadata
        };
      _v0 && this.eventHandlers?.onGuideDisplayed?.(_v1);
    }
    triggerDisplayEvent() {
      this.isDisplaying ? this.triggerAdvanceAndUpdateGuide() : this.triggerGuideDisplayed();
    }
    isGuideRemoved = _v0 => _v0.some(_v0 => Array.from(_v0.removedNodes.values()).filter(_v0 => _v0 instanceof HTMLElement).map(_v0 => _v0).some(_v0 => _v0?.id === "pendo-base"));
    guideChangeListener = _v0 => {
      this.isGuideRemoved(_v0) && !this.pendo?.getActiveGuide?.()?.guide && this.handleDismiss();
    };
    getGlobalScripts() {
      return () => {
        this.triggerDisplayEvent(), this.addEngagementHandlers(), this.addGuideChangeObserver();
      };
    }
    triggerGuideAdvanced() {
      let _v0 = this.pendo?.getActiveGuide?.(),
        _v1 = _v0?.guide?.id,
        _v2 = _v0?.guide?.activeStep?.()?.id,
        _v3 = this.activeGuide?.guideId,
        _v4 = this.activeGuide?.step?.id;
      if (!_v1 || !_v2 || !_v4 || !_v3) return;
      let _v5 = this.deriveStepNumber() || 1;
      _v1 === _v3 && _v2 !== _v4 && this.eventHandlers?.onGuideAdvanced?.({
        metadata: this.metadata,
        previousStep: {
          id: _v4,
          stepNumber: _v5 - 1
        },
        currentGuideState: {
          guideId: _v1,
          guideName: _v0.guide?.name,
          step: {
            id: _v2,
            stepNumber: _v5
          }
        }
      });
    }
    updateActiveGuide() {
      let _v0 = this.pendo,
        _v1 = _v0?.getActiveGuide?.()?.guide;
      if (!(_v1?.name && _v1?.id)) {
        this.activeGuide = void 0;
        return;
      }
      this.activeGuide = {
        guideName: _v1.name,
        guideId: _v1.id
      }, _v1.activeStep?.()?.id && (this.activeGuide.step = {
        id: _v1.activeStep().id,
        stepNumber: this.deriveStepNumber()
      });
    }
    handleDismiss() {
      try {
        let _v0 = this.eventHandlers?.onGuideDismiss;
        _v0 && _v0({
          guide: this.cloneActiveGuide(),
          metadata: this.metadata
        });
      } finally {
        this.observer?.disconnect(), this.isDisplaying = !1;
      }
    }
    cloneActiveGuide() {
      if (this.activeGuide) return {
        guideId: this.activeGuide.guideId,
        guideName: this.activeGuide.guideName,
        step: {
          id: this.activeGuide.step?.id,
          stepNumber: this.activeGuide.step?.stepNumber
        }
      };
    }
    addGuideChangeObserver() {
      this.observer?.disconnect(), this.observer = new MutationObserver(this.guideChangeListener), this.observer.observe(document.body, {
        childList: !0,
        subtree: !0,
        characterDataOldValue: !0
      });
    }
    deriveStepNumber(_v0) {
      let _v1 = this.pendo?.getActiveGuide?.()?.guide?.steps;
      return _v0 || (_v0 = this.pendo?.getActiveGuide?.()?.guide?.activeStep?.().id), _v1?.map((_v0, _v1) => [_v0.id === _v0, _v1])?.find(_v0 => _v0.length >= 2 && !0 === _v0[0])?.[1];
    }
    getActiveStepIdFromDOM(_v0) {
      let _v1 = _v0.closest("._pendo-step-container-size"),
        _v2 = _v1?.id;
      _v2 = _v2?.replace(/^pendo-g-/, "");
      let _v3 = this.deriveStepNumber(_v2) || this.activeGuide?.step?.stepNumber,
        _v4 = {
          id: _v2,
          stepNumber: _v3
        };
      if (_v2) return _v4;
    }
    getGuideTitle() {
      let _v0 = this.pendo.dom("._pendo-text-title");
      return _v0.length > 0 ? _v0[0].innerText : "";
    }
    engagementHandler = _v0 => {
      let _v1 = _v0?.target,
        _v2 = _v1?.children?.length;
      if (_v2 && _v2 > 0 && "mouseenter" !== _v0.type) return;
      let _v3 = {
          target: {
            tag: _v1?.tagName,
            copy: "mouseenter" === _v0.type ? this.getGuideTitle() : _v1?.innerText,
            className: _v1?.className,
            id: _v1?.id,
            href: _v1?.href
          },
          guide: this.cloneActiveGuide(),
          metadata: this.metadata
        },
        _v4 = this.getActiveStepIdFromDOM(_v1);
      switch (_v3.guide && _v4 && (_v3.guide = {
        ..._v3.guide,
        step: _v4
      }), _v0.type) {
        case "click":
          this.eventHandlers?.onClick?.(_v3);
          break;
        case "mouseenter":
          this.eventHandlers?.onHover?.(_v3);
          break;
        case "touchend":
          this.eventHandlers?.onTouch?.(_v3);
      }
    };
    addEngagementHandlers() {
      let _v0 = this.eventHandlers?.onClick,
        _v1 = this.pendo;
      if (!_v0) return;
      let _v2 = _v1.dom("#pendo-guide-container");
      if (_v2.length > 0) {
        let _v0 = _v2[0];
        _v0.addEventListener("click", this.engagementHandler), _v0.addEventListener("mouseenter", this.engagementHandler), _v0.addEventListener("touchend", this.engagementHandler);
      }
    }
  }
  var _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  let _v8 = /vuid=(\w+\.\w+);?/,
    _v9 = "vimeo.pendo_guide_interaction";
  function _v10(_v0) {
    let _v1,
      _v2 = window,
      _v3 = /\.ci\.vimeows.com$/.test(window?.location?.host) ? "staging" : _v7.default?.env?.NODE_ENV === "production" ? "production" : "development";
    return new _v6.Event("vimeo.web_global", 5, {
      user: {
        subscription_type: _v0?.account?.client_subscription_type,
        is_mod: !!_v2?.vimeo?.cur_user && _v2?.vimeo?.cur_user.is_mod,
        session_id: null,
        teams: null,
        user_id: _v0?.visitor?.id,
        vuid: (_v1 = document.cookie.match(_v8)) && _v1.length >= 2 ? _v1[1] : null,
        flags: null,
        is_free_trial: !1
      },
      application: {
        application: "vimeo",
        vimeo_language: _v0?.visitor?.client_device_language || "en",
        product: "pendo_guide",
        build_environment: _v3,
        version: {
          full: "1.0.0",
          major: "1",
          minor: "0",
          patch: "0"
        }
      },
      platform: {
        device_language: window?.navigator?.language ?? "",
        screen: {
          dpi: screen.pixelDepth,
          height: screen.height,
          width: screen.width,
          size: `${screen.width} x ${screen.height}`
        },
        network: null,
        platform: "web"
      }
    });
  }
  class _v11 {
    mapClickType(_v0) {
      switch (_v0) {
        case "click":
          return "click";
        case "touch":
          return "tap";
        case "hover":
          return "hover";
      }
      return null;
    }
    map(_v0, _v1) {
      let {
        guide: _v2,
        target: _v3
      } = _v0;
      return new _v6.Event(_v9, 1, {
        guide_id: _v2?.guideId ?? null,
        guide_name: _v2?.guideName ?? null,
        step_id: _v2?.step?.id ?? null,
        step_number: _v2?.step?.stepNumber ?? null,
        tag: _v3?.tag ?? null,
        copy: _v3?.copy ?? null,
        action: this.mapClickType(_v1),
        path: window.top?.location.href ?? null
      });
    }
  }
  class _v12 {
    map({
      guide: _v0
    }) {
      return new _v6.Event(_v9, 1, {
        guide_id: _v0?.guideId ?? null,
        guide_name: _v0?.guideName ?? null,
        step_id: _v0?.step?.id ?? null,
        step_number: _v0?.step?.stepNumber ?? null,
        action: "dismiss",
        path: window.top?.location.href ?? null,
        tag: null,
        copy: null
      });
    }
  }
  class _v13 {
    map(_v0) {
      return new _v6.Event(_v9, 1, {
        guide_id: _v0.guideId ?? null,
        guide_name: _v0?.guideName ?? null,
        step_id: _v0?.step?.id ?? null,
        step_number: _v0?.step?.stepNumber ?? null,
        action: "impression",
        path: window.top?.location.href ?? null,
        tag: null,
        copy: null
      });
    }
  }
  class _v14 {
    map(_v0) {
      let {
        guideId: _v1,
        guideName: _v2,
        step: _v3
      } = _v0.currentGuideState;
      return new _v6.Event(_v9, 1, {
        guide_id: _v1 ?? null,
        guide_name: _v2 ?? null,
        step_id: _v3?.id ?? null,
        step_number: _v3?.stepNumber ?? null,
        action: "impression",
        path: window.top?.location.href ?? null,
        tag: null,
        copy: null
      });
    }
  }
  class _v15 {
    metadata;
    config;
    eventMappers;
    constructor(_v0, _v1, _v2 = {
      clickMapper: new _v11(),
      hoverMapper: new _v11(),
      touchMapper: new _v11(),
      dismissMapper: new _v12(),
      guideDisplayMapper: new _v13(),
      guideAdvanceMapper: new _v14()
    }) {
      this.metadata = _v0, this.config = _v1, this.eventMappers = _v2, this.config || (this.config = function (_v0) {
        return _v0 || (_v0 = _v10()), new _v6.Configuration(!/\.ci\.vimeows\.com$/.test(window.location.host) ? _v6.Service.FRESNEL_PROD : _v6.Service.FRESNEL_DEV, _v0);
      }(_v10(this.metadata))), _v6.BigPictureClient.configure(this.config);
    }
    onGuideDismiss = _v0 => {
      this.sendEvent(this.eventMappers.dismissMapper?.map(_v0));
    };
    onClick = _v0 => {
      this.sendEvent(this.eventMappers.clickMapper?.map(_v0, "click"));
    };
    onHover = _v0 => {
      this.sendEvent(this.eventMappers.hoverMapper?.map(_v0, "hover"));
    };
    onTouch = _v0 => {
      this.sendEvent(this.eventMappers.touchMapper?.map(_v0, "touch"));
    };
    onGuideAdvanced = _v0 => {
      this.sendEvent(this.eventMappers.guideAdvanceMapper?.map(_v0));
    };
    onGuideDisplayed = _v0 => {
      this.sendEvent(this.eventMappers.guideDisplayMapper?.map(_v0));
    };
    sendEvent(_v0) {
      _v0 && _v6.BigPictureClient.sendEvent(_v0);
    }
  }
  _v0.s(["BigPictureAdapter", 0, _v15], 0), _v0.s([], 0);
  let _v16 = {
    onGuideLoaded: () => {
      let _v0 = window;
      _v0.pendo.attachEvent(document, "click", _v0 => {
        let _v1 = _v0.target,
          _v2 = _v0.composedPath(),
          _v3 = !1;
        for (let _v0 = 0; _v0 < _v2.length; _v0++) _v2[_v0]?.id === "pendo-resource-center-container" && (_v3 = !0);
        !_v0.pendo.dom("#pendo-resource-center-container").length || _v3 || _v0.pendo.dom(_v1).closest(_v0.pendo.BuildingBlocks.BuildingBlockResourceCenter.getResourceCenter().steps[0].elementPathRule).length || _v0.pendo.BuildingBlocks.BuildingBlockResourceCenter.dismissResourceCenter();
      });
    }
  };
  class _v17 {
    metadata;
    handlers;
    constructor(_v0, _v1 = !0, ..._v2) {
      this.metadata = _v0, this.handlers = _v2, _v1 && (this.handlers.push(new _v15(this.metadata)), this.handlers.push(_v16));
    }
    addHandler(_v0) {
      this.handlers.push(_v0);
    }
    getHandlers() {
      return this.handlers;
    }
    replaceHandlers(_v0) {
      this.handlers = _v0;
    }
    onClick = _v0 => {
      this.handlers.forEach(_v0 => this.safeEmit(() => _v0?.onClick?.(_v0)));
    };
    onGuideDismiss = _v0 => {
      this.handlers.forEach(_v0 => this.safeEmit(() => _v0?.onGuideDismiss?.(_v0)));
    };
    onReady = () => {
      this.handlers.forEach(_v0 => this.safeEmit(() => _v0?.onReady?.()));
    };
    onGuideLoaded = () => {
      this.handlers.forEach(_v0 => this.safeEmit(() => _v0?.onGuideLoaded?.()));
    };
    onGuideFailed = () => {
      this.handlers.forEach(_v0 => this.safeEmit(() => _v0?.onGuideFailed?.()));
    };
    onGuideAdvanced = _v0 => {
      this.handlers.forEach(_v0 => this.safeEmit(() => _v0?.onGuideAdvanced?.(_v0)));
    };
    onGuideDisplayed = _v0 => {
      this.handlers.forEach(_v0 => this.safeEmit(() => _v0?.onGuideDisplayed?.(_v0)));
    };
    onHover = _v0 => {
      this.handlers.forEach(_v0 => this.safeEmit(() => _v0?.onHover?.(_v0)));
    };
    onTouch = _v0 => {
      this.handlers.forEach(_v0 => this.safeEmit(() => _v0?.onTouch?.(_v0)));
    };
    async safeEmit(_v0) {
      try {
        _v0?.();
      } catch (_v0) {}
    }
  }
  _v0.s(["EventMultiplexer", 0, _v17], 0), _v0.s([], 0);
  let _v18 = "31702560-bb8b-46cc-53ab-210a323e2e80",
    _v19 = {
      vimeo: _v18,
      videoji: "d595fa14-ec9e-481b-7537-a95b9115098a"
    };
  function _v20(_v0, _v1) {
    return _v1 + "question_" + _v0;
  }
  function _v21(_v0) {
    var _v1, _v2;
    if (_v0?.welcomeSurvey) {
      let _v0;
      return _v1 = _v0.welcomeSurvey, _v0 = {}, _v1.forEach(_v0 => {
        _v0.questionId && _v0.answerId && (_v0[_v20(_v0.questionId, "client_welcome_survey_")] = _v0.answerId);
      }), _v0;
    }
    if (_v0?.desktopReg) {
      let _v0;
      return _v2 = _v0.desktopReg, _v0 = {}, _v2.questions?.forEach(_v0 => {
        if (_v0.id) {
          let _v0 = _v20(_v0.id, "client_reg_"),
            _v1 = _v0.answers?.map(_v0 => _v0.id).join(",") || "";
          null != _v1 && _v1?.trim() !== "" && (_v0[_v0] = _v1);
        }
      }), _v0;
    }
    return {};
  }
  _v0.s(["flattenSurveyDetails", 0, _v21], 0);
  let _v22 = _v0 => (null === _v0 || Object.keys(_v0).forEach(_v0 => {
      let _v1 = _v0[_v0];
      void 0 === _v1 ? delete _v0[_v0] : "object" == typeof _v1 && _v22(_v1);
    }), _v0),
    _v23 = _v0 => _v0 && "true" !== new URLSearchParams(window.location.search).get("skip_dev_prefix") && /([-_a-z,0-9]+\.ci\.vimeows.com|vimeo\.dev)$/.test(window.location.host) ? `dev-${_v0}` : _v0;
  class _v24 {
    userIdentified = !1;
    static eventHandlers;
    static pendingHandlers = [];
    static handlerStore = {};
    constructor(_v0 = "vimeo") {
      this.initInstall(_v0);
    }
    get isInitializedWithVisitorId() {
      return this.userIdentified;
    }
    set isInitializedWithVisitorId(_v0) {
      this.userIdentified = _v0;
    }
    initInstall = _v0 => {
      let _v1;
      if (_v1 = RegExp(`(${_v1.join("|").replace(".", "\\.").replace("-", "\\-")})`, "i"), !window.navigator.userAgent.match(_v1) && !window.pendo) try {
        var _v2;
        _v2 = _v19[_v0] || _v18, function (_v0, _v1, _v2, _v3, _v4) {
          let _v5, _v6, _v7, _v8, _v9;
          for ((_v4 = _v0[_v3] = _v0[_v3] || {})._q = _v4._q || [], _v6 = 0, _v7 = (_v5 = ["initialize", "identify", "updateOptions", "pageLoad", "track"]).length; _v6 < _v7; ++_v6) !function (_v0) {
            _v4[_v0] = _v4[_v0] || function () {
              _v4._q[_v0 === _v5[0] ? "unshift" : "push"]([_v0].concat([].slice.call(arguments, 0)));
            };
          }(_v5[_v6]);
          (_v8 = _v1.createElement(_v2)).async = !0, _v8.src = "https://cdn.pendo.io/agent/static/" + _v2 + "/pendo.js", (_v9 = _v1.getElementsByTagName(_v2)[0]).parentNode.insertBefore(_v8, _v9);
        }(window, document, "script", "pendo");
      } catch {
        console.warn("Error Installing Pendo Snippet");
      }
    };
    static isInstanceOfMultiplexer = _v0 => void 0 !== _v0 && "addHandler" in _v0;
    static addHandler = (_v0, _v1) => {
      if (!_v24.handlerStore[_v1]) {
        if (this.isInstanceOfMultiplexer(_v24.eventHandlers)) _v24.eventHandlers.addHandler(_v0);else if (_v24.isReady()) throw Error("The registered event handler is not a multiplexer");else _v24.pendingHandlers.push(_v0);
        _v24.handlerStore[_v1] = _v0;
      }
    };
    static removeNode = (_v0, _v1, _v2) => {
      let _v3 = _v0.indexOf(_v1);
      return _v3 > -1 && (_v2.length > 0 ? _v2.forEach(_v0 => delete _v0[_v3][_v0]) : delete _v0[_v3]), _v0 = _v0.filter(_v0 => _v0);
    };
    static removeHandler = (_v0, ..._v1) => {
      let _v2 = _v24.handlerStore[_v0];
      return !!_v2 && (_v24.pendingHandlers = _v24.removeNode(_v24.pendingHandlers, _v2, _v1), _v24.isInstanceOfMultiplexer(_v24.eventHandlers) && _v24.eventHandlers.replaceHandlers(_v24.removeNode(_v24.eventHandlers.getHandlers(), _v2, _v1)), delete _v24.handlerStore[_v0], !0);
    };
    initialize = ({
      visitor: _v0,
      account: _v1,
      eventHandlers: _v2,
      addDefaultValues: _v3
    }) => {
      if (this.isInitializedWithVisitorId = !!_v0.id, _v2 || (_v2 = new _v17({
        visitor: _v0,
        account: _v1
      })), _v24.eventHandlers = _v2, _v24.isInstanceOfMultiplexer(_v24.eventHandlers)) {
        for (let _v0 of _v24.pendingHandlers) _v24.eventHandlers.addHandler(_v0);
        _v24.pendingHandlers = [];
      }
      let {
          client_survey: _v4,
          ..._v5
        } = _v0,
        _v6 = {
          visitor: {
            ..._v5,
            id: _v23(_v0.id),
            client_team_role: _v0.client_team_role ? _v0.client_team_role : _v3 ? "Owner" : void 0,
            ..._v21(_v4),
            client_device_type: _v4 ? "mobile" : _v3 ? "tablet" : "desktop"
          },
          account: {
            ..._v1,
            id: _v1?.id ? _v23(_v1?.id) : _v3 ? _v23(_v0.id) : void 0,
            client_team_size: _v1?.client_team_size ? _v1?.client_team_size : _v3 ? 0 : void 0
          }
        },
        _v7 = window;
      if (_v7.pendo) {
        _v22(_v6);
        let _v0 = new _v5(_v2, {
          visitor: _v0,
          account: _v1
        }, _v7.pendo);
        _v7.pendo.initialize({
          ..._v6,
          events: _v0.getEventHandlers(),
          guides: {
            globalScripts: [{
              script: _v0.getGlobalScripts()
            }]
          }
        });
      }
    };
    static getUpdateMetadata = ({
      visitor: _v0,
      account: _v1
    }) => {
      let {
          client_survey: _v2,
          ..._v3
        } = _v0 || {},
        _v4 = {
          visitor: {
            ..._v3,
            id: _v23(_v3.id),
            ..._v21(_v2)
          },
          account: {
            ..._v1,
            id: _v23(_v1?.id || _v3?.id)
          }
        };
      return _v22(_v4), _v4;
    };
    static identify = ({
      visitor: _v0,
      account: _v1
    }) => {
      if (!_v0.id) return;
      let _v2 = {
          visitor: {
            ..._v0,
            id: _v23(_v0.id)
          },
          account: {
            id: _v23(_v1?.id || _v0.id)
          }
        },
        _v3 = window;
      _v3.pendo && _v3.pendo.identify({
        ..._v2
      });
    };
    static isReady = () => {
      let _v0 = window;
      return !!_v0.pendo && _v0.pendo.isReady?.();
    };
    static async whenReady(_v0) {
      await new Promise((_v0, _v1) => {
        _v24.isReady() ? _v0(!0) : _v24.addHandler({
          onGuideLoaded: () => _v0(!0),
          onGuideFailed: () => _v1(!1)
        }, _v0);
      });
    }
    static showGuideById = async _v0 => {
      let _v1 = window;
      await _v24.whenReady(_v0), _v1.pendo.showGuideById(_v0);
    };
    static updateOptions = async _v0 => {
      await _v24.whenReady("updateOptions");
      let _v1 = _v24.getUpdateMetadata(_v0),
        _v2 = window.parent;
      _v2.pendo && _v2.pendo.updateOptions({
        ..._v1
      });
    };
    static updateOptionsAndShowGuide = async (_v0, _v1, _v2) => {
      await _v24.whenReady(_v0), _v1 && Object.keys(_v1).length > 0 ? (_v24.updateOptions(_v1), setTimeout(() => {
        _v24.showGuideById(_v0);
      }, _v2 || 0)) : _v24.showGuideById(_v0);
    };
  }
  _v0.s(["PendoClient", 0, _v24], 0), _v0.s([], 0);
}