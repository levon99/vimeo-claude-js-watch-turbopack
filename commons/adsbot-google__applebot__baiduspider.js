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
  let _v6 = {
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
  class _v7 {
    metadata;
    handlers;
    constructor(_v0, _v1 = !0, ..._v2) {
      this.metadata = _v0, this.handlers = _v2, _v1 && this.handlers.push(_v6);
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
  _v0.s(["EventMultiplexer", 0, _v7], 0);
  let _v8 = "31702560-bb8b-46cc-53ab-210a323e2e80",
    _v9 = {
      vimeo: _v8,
      videoji: "d595fa14-ec9e-481b-7537-a95b9115098a"
    };
  function _v10(_v0, _v1) {
    return _v1 + "question_" + _v0;
  }
  function _v11(_v0) {
    var _v1, _v2;
    if (_v0?.welcomeSurvey) {
      let _v0;
      return _v1 = _v0.welcomeSurvey, _v0 = {}, _v1.forEach(_v0 => {
        _v0.questionId && _v0.answerId && (_v0[_v10(_v0.questionId, "client_welcome_survey_")] = _v0.answerId);
      }), _v0;
    }
    if (_v0?.desktopReg) {
      let _v0;
      return _v2 = _v0.desktopReg, _v0 = {}, _v2.questions?.forEach(_v0 => {
        if (_v0.id) {
          let _v0 = _v10(_v0.id, "client_reg_"),
            _v1 = _v0.answers?.map(_v0 => _v0.id).join(",") || "";
          null != _v1 && _v1?.trim() !== "" && (_v0[_v0] = _v1);
        }
      }), _v0;
    }
    return {};
  }
  _v0.s(["flattenSurveyDetails", 0, _v11], 0);
  let _v12 = _v0 => (null === _v0 || Object.keys(_v0).forEach(_v0 => {
      let _v1 = _v0[_v0];
      void 0 === _v1 ? delete _v0[_v0] : "object" == typeof _v1 && _v12(_v1);
    }), _v0),
    _v13 = _v0 => _v0 && "true" !== new URLSearchParams(window.location.search).get("skip_dev_prefix") && /([-_a-z,0-9]+\.ci\.vimeows.com|vimeo\.dev)$/.test(window.location.host) ? `dev-${_v0}` : _v0;
  class _v14 {
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
        _v2 = _v9[_v0] || _v8, function (_v0, _v1, _v2, _v3, _v4) {
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
      if (!_v14.handlerStore[_v1]) {
        if (this.isInstanceOfMultiplexer(_v14.eventHandlers)) _v14.eventHandlers.addHandler(_v0);else if (_v14.isReady()) throw Error("The registered event handler is not a multiplexer");else _v14.pendingHandlers.push(_v0);
        _v14.handlerStore[_v1] = _v0;
      }
    };
    static removeNode = (_v0, _v1, _v2) => {
      let _v3 = _v0.indexOf(_v1);
      return _v3 > -1 && (_v2.length > 0 ? _v2.forEach(_v0 => delete _v0[_v3][_v0]) : delete _v0[_v3]), _v0 = _v0.filter(_v0 => _v0);
    };
    static removeHandler = (_v0, ..._v1) => {
      let _v2 = _v14.handlerStore[_v0];
      return !!_v2 && (_v14.pendingHandlers = _v14.removeNode(_v14.pendingHandlers, _v2, _v1), _v14.isInstanceOfMultiplexer(_v14.eventHandlers) && _v14.eventHandlers.replaceHandlers(_v14.removeNode(_v14.eventHandlers.getHandlers(), _v2, _v1)), delete _v14.handlerStore[_v0], !0);
    };
    initialize = ({
      visitor: _v0,
      account: _v1,
      eventHandlers: _v2,
      addDefaultValues: _v3
    }) => {
      if (this.isInitializedWithVisitorId = !!_v0.id, _v2 || (_v2 = new _v7({
        visitor: _v0,
        account: _v1
      })), _v14.eventHandlers = _v2, _v14.isInstanceOfMultiplexer(_v14.eventHandlers)) {
        for (let _v0 of _v14.pendingHandlers) _v14.eventHandlers.addHandler(_v0);
        _v14.pendingHandlers = [];
      }
      let {
          client_survey: _v4,
          ..._v5
        } = _v0,
        _v6 = {
          visitor: {
            ..._v5,
            id: _v13(_v0.id),
            client_team_role: _v0.client_team_role ? _v0.client_team_role : _v3 ? "Owner" : void 0,
            ..._v11(_v4),
            client_device_type: _v4 ? "mobile" : _v3 ? "tablet" : "desktop"
          },
          account: {
            ..._v1,
            id: _v1?.id ? _v13(_v1?.id) : _v3 ? _v13(_v0.id) : void 0,
            client_team_size: _v1?.client_team_size ? _v1?.client_team_size : _v3 ? 0 : void 0
          }
        },
        _v7 = window;
      if (_v7.pendo) {
        _v12(_v6);
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
            id: _v13(_v3.id),
            ..._v11(_v2)
          },
          account: {
            ..._v1,
            id: _v13(_v1?.id || _v3?.id)
          }
        };
      return _v12(_v4), _v4;
    };
    static identify = ({
      visitor: _v0,
      account: _v1
    }) => {
      if (!_v0.id) return;
      let _v2 = {
          visitor: {
            ..._v0,
            id: _v13(_v0.id)
          },
          account: {
            id: _v13(_v1?.id || _v0.id)
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
        _v14.isReady() ? _v0(!0) : _v14.addHandler({
          onGuideLoaded: () => _v0(!0),
          onGuideFailed: () => _v1(!1)
        }, _v0);
      });
    }
    static showGuideById = async _v0 => {
      let _v1 = window;
      await _v14.whenReady(_v0), _v1.pendo.showGuideById(_v0);
    };
    static updateOptions = async _v0 => {
      await _v14.whenReady("updateOptions");
      let _v1 = _v14.getUpdateMetadata(_v0),
        _v2 = window.parent;
      _v2.pendo && _v2.pendo.updateOptions({
        ..._v1
      });
    };
    static updateOptionsAndShowGuide = async (_v0, _v1, _v2) => {
      await _v14.whenReady(_v0), _v1 && Object.keys(_v1).length > 0 ? (_v14.updateOptions(_v1), setTimeout(() => {
        _v14.showGuideById(_v0);
      }, _v2 || 0)) : _v14.showGuideById(_v0);
    };
  }
  _v0.s(["PendoClient", 0, _v14], 0), _v0.s([], 0);
}