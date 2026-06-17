{
  "use strict";

  var _v1,
    _v2,
    _v3,
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
    _v15 = _v0.i(0);
  let _v16 = () => (0, _v4.jsxs)(_v10.Flex, {
    direction: "column",
    align: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    grow: 1,
    padding: (0, _v13.rem)(24),
    background: "background",
    children: [(0, _v4.jsx)(_v14.CircleExclamation, {
      boxSize: "2xl"
    }), (0, _v4.jsx)(_v11.Header, {
      size: "xl",
      marginY: (0, _v13.rem)(8),
      children: (0, _v15.translate)({
        singular: "This page isn’t available",
        dictionary: {
          es: {
            singular: "Esta página no está disponible"
          },
          "de-DE": {
            singular: "Diese Seite ist nicht verfügbar."
          },
          "fr-FR": {
            singular: "Cette page n'est pas disponible"
          },
          "ja-JP": {
            singular: "このページは利用できません"
          },
          "ko-KR": {
            singular: "이 페이지를 사용할 수 없습니다."
          },
          "pt-BR": {
            singular: "Esta página não está disponível"
          },
          "zh-CN": {
            singular: "此页面不可用"
          }
        }
      })
    }), (0, _v4.jsx)(_v12.Paragraph, {
      size: "lg",
      textAlign: "center",
      maxWidth: (0, _v13.rem)(400),
      marginBottom: (0, _v13.rem)(16),
      children: (0, _v15.translate)({
        singular: "The link might have expired",
        dictionary: {
          es: {
            singular: "Es posible que el enlace haya caducado"
          },
          "de-DE": {
            singular: "Der Link ist möglicherweise abgelaufen"
          },
          "fr-FR": {
            singular: "Le lien a peut-être expiré"
          },
          "ja-JP": {
            singular: "リンクが期限切れになっている可能性があります"
          },
          "ko-KR": {
            singular: "링크가 만료되었을 수 있습니다."
          },
          "pt-BR": {
            singular: "O link pode ter expirado"
          },
          "zh-CN": {
            singular: "链接可能已过期"
          }
        }
      })
    })]
  });
  var _v17 = _v0.i(0);
  let _v18 = () => (0, _v4.jsx)(_v10.Flex, {
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    bgColor: "background",
    children: (0, _v4.jsx)(_v17.Spinner, {
      size: "xl"
    })
  });
  var _v19 = _v0.i(0);
  class _v20 {
    events = new Map();
    on(_v0, _v1) {
      this.events.has(_v0) || this.events.set(_v0, []), this.events.get(_v0).push(_v1);
    }
    once(_v0, _v1) {
      let _v2 = (..._v0) => {
        this.off(_v0, _v2), _v1(..._v0);
      };
      _v2.originalListener = _v1, this.on(_v0, _v2);
    }
    off(_v0, _v1) {
      let _v2 = this.events.get(_v0);
      if (!_v2) return;
      let _v3 = _v2.filter(_v0 => _v0 !== _v1 && _v0.originalListener !== _v1);
      _v3.length > 0 ? this.events.set(_v0, _v3) : this.events.delete(_v0);
    }
    emit(_v0, ..._v1) {
      let _v2 = this.events.get(_v0);
      _v2 && 0 !== _v2.length && [..._v2].forEach(_v0 => {
        try {
          _v0(..._v1);
        } catch (_v0) {
          _v19.Logger.getGlobal().error(`event handler for "${String(_v0)}" failed`, _v0);
        }
      });
    }
    removeAllListeners(_v0) {
      _v0 ? this.events.delete(_v0) : this.events.clear();
    }
  }
  var _v21 = _v19;
  class _v22 extends _v21.Logger {
    static crossWindowLogTransport;
    static setCrossWindowLogTransport(_v0) {
      _v22.crossWindowLogTransport = _v0;
    }
    static create(_v0, _v1 = !0) {
      return _v1 ? new _v22(_v0, _v0 => {
        try {
          _v22.crossWindowLogTransport?.(_v0);
        } catch {}
      }) : new _v22(_v0);
    }
    static stringifyDataSafe(_v0) {
      try {
        return JSON.stringify(_v0);
      } catch {
        return String(_v0);
      }
    }
    topic;
    crossWindowLogTransport;
    constructor(_v0, _v1) {
      super(_v0, !0), this.topic = _v0, this.crossWindowLogTransport = _v1;
    }
    debug(..._v0) {
      super.debug(..._v0), this.sendCrossWindowMessage("debug", ..._v0);
    }
    info(..._v0) {
      super.info(..._v0), this.sendCrossWindowMessage("info", ..._v0);
    }
    warn(..._v0) {
      super.warn(..._v0), this.sendCrossWindowMessage("warn", ..._v0);
    }
    error(..._v0) {
      super.error(..._v0), this.sendCrossWindowMessage("error", ..._v0);
    }
    sendCrossWindowMessage(_v0, _v1, _v2) {
      this.crossWindowLogTransport?.({
        level: _v0,
        message: _v1,
        timestamp: Date.now(),
        topic: this.topic,
        data: _v22.stringifyDataSafe(_v2)
      });
    }
  }
  var _v23 = ((_v1 = {}).SEND_LOG_FROM_INTEGRATION_TO_HOST = "__send_log_from_integration_to_host__", _v1),
    _v24 = ((_v2 = {}).CONNECTION_CHECK = "__host_requesting_connection_check__", _v2.REQUEST_CONFIG = "__integration_requesting_config__", _v2);
  let _v25 = [...Object.values(_v24), ...Object.values(_v23)];
  (_v3 = {}).CONFIG = "config", _v3.TOKEN_REFRESH = "tokenrefresh";
  class _v26 {
    messengerService;
    storageService;
    tokenService;
    log;
    eventEmitter;
    _isDestroyed;
    config;
    loadConfigPromise;
    constructor(_v0, _v1, _v2) {
      this.messengerService = _v0, this.storageService = _v1, this.tokenService = _v2, this.log = _v22.create("Integration"), this.eventEmitter = new _v20(), this._isDestroyed = !1, this.config = null, this.loadConfigPromise = null, this.handleTokenRefresh = this.handleTokenRefresh.bind(this);
    }
    destroy() {
      this._isDestroyed || (this.eventEmitter.removeAllListeners(), this.stopTokenRotation(), this.messengerService.destroy(), this._isDestroyed = !0);
    }
    isDestroyed() {
      return this._isDestroyed;
    }
    loadConfig() {
      return this.assertNotDestroyed("loadConfig"), this.loadConfigPromise || (this.loadConfigPromise = (async () => {
        try {
          return this.tryToLoadConfigFromStorage(), this.config || (await this.loadConfigFromHostWindow()), this.config;
        } finally {
          this.loadConfigPromise = null;
        }
      })()), this.loadConfigPromise;
    }
    startTokenRotation() {
      this.assertNotDestroyed("startTokenRotation"), this.tokenService.onTokenRefresh(this.handleTokenRefresh), this.tokenService.startTokenAutoRefresh();
    }
    stopTokenRotation() {
      this.assertNotDestroyed("stopTokenRotation"), this.tokenService.offTokenRefresh(this.handleTokenRefresh), this.tokenService.stopTokenAutoRefresh();
    }
    async forceTokenRefresh() {
      return this.assertNotDestroyed("forceTokenRefresh"), this.tokenService.forceTokenRefresh();
    }
    on(_v0, _v1) {
      this.assertNotDestroyed("on"), this.eventEmitter.on(_v0, _v1);
    }
    once(_v0, _v1) {
      this.assertNotDestroyed("once"), this.eventEmitter.once(_v0, _v1);
    }
    off(_v0, _v1) {
      this._isDestroyed || this.eventEmitter.off(_v0, _v1);
    }
    handleTokenRefresh(_v0) {
      this.config = {
        ...this.config,
        accessToken: _v0
      }, this.storageService.saveConfig(this.config), this.eventEmitter.emit("tokenrefresh", _v0), this.eventEmitter.emit("config", {
        ...this.config
      });
    }
    tryToLoadConfigFromStorage() {
      let _v0 = this.storageService.loadConfig();
      _v0 ? (this.config = _v0, this.setAccessTokens(), this.eventEmitter.emit("config", {
        ..._v0
      })) : this.log.info("no config found in storage");
    }
    async loadConfigFromHostWindow() {
      let [_v0, _v1] = await this.messengerService.sendMessageWithResponse(_v24.REQUEST_CONFIG);
      _v0 ? (this.log.info("config loaded from host"), this.config = _v1, this.storageService.saveConfig(_v1), this.setAccessTokens(), this.eventEmitter.emit("config", {
        ..._v1
      })) : this._isDestroyed || this.throwError(`failed to load config from host: ${String(_v1)}`);
    }
    setAccessTokens() {
      if (!this.config?.accessToken) return void this.log.error("failed to set accessTokens for tokenService");
    }
    assertNotDestroyed(_v0) {
      this._isDestroyed && this.throwError(`Cannot call ${String(_v0)}() on destroyed Integration instance`);
    }
    throwError(_v0) {
      throw this.log.error(_v0), Error(_v0);
    }
  }
  class _v27 {}
  class _v28 extends _v27 {
    static STORAGE_KEY = "vimeo-integration-sdk-storage";
    log = _v22.create("ConfigSessionStorageService");
    saveConfig(_v0) {
      try {
        sessionStorage.setItem(_v28.STORAGE_KEY, JSON.stringify(_v0)), this.log.info("config saved to sessionStorage");
      } catch (_v0) {
        this.log.warn("failed to save config to sessionStorage", _v0);
      }
    }
    loadConfig() {
      try {
        let _v0 = sessionStorage.getItem(_v28.STORAGE_KEY);
        if (!_v0) return this.log.info("no data found in sessionStorage"), null;
        let _v1 = JSON.parse(_v0);
        return this.log.info("config loaded from sessionStorage"), _v1;
      } catch (_v0) {
        return this.log.warn("failed to load config from sessionStorage", _v0), null;
      }
    }
    clearConfig() {
      try {
        sessionStorage.removeItem(_v28.STORAGE_KEY), this.log.info("config cleared from sessionStorage");
      } catch (_v0) {
        this.log.warn("failed to clear config from sessionStorage", _v0);
      }
    }
  }
  class _v29 extends _v27 {
    config = null;
    saveConfig(_v0) {
      this.config = _v0;
    }
    loadConfig() {
      return this.config;
    }
    clearConfig() {
      this.config = null;
    }
  }
  async function _v30(_v0, _v1, _v2) {
    let _v3;
    for (let _v0 = 0; _v0 < _v0; _v0++) try {
      return await _v2();
    } catch (_v0) {
      _v3 = _v0, _v0 < _v0 - 1 && (await new Promise(_v0 => setTimeout(_v0, _v1)));
    }
    throw _v3;
  }
  function _v31(_v0) {
    try {
      let _v0 = _v0.split(".");
      if (3 !== _v0.length) return null;
      let _v1 = _v0[1],
        _v2 = function (_v0) {
          let _v1 = _v0.replace(/-/g, "+").replace(/_/g, "/");
          switch (_v1.length % 4) {
            case 0:
              break;
            case 2:
              _v1 += "==";
              break;
            case 3:
              _v1 += "=";
              break;
            default:
              throw Error("base64 string is not of the correct length");
          }
          try {
            return decodeURIComponent(atob(_v1).replace(/(.)/g, (_v0, _v1) => {
              let _v2 = _v1.charCodeAt(0).toString(16).toUpperCase();
              return _v2.length < 2 && (_v2 = "0" + _v2), "%" + _v2;
            }));
          } catch {
            return atob(_v1);
          }
        }(_v1);
      return JSON.parse(_v2);
    } catch {
      return null;
    }
  }
  class _v32 {
    static TOKEN_REFRESH_RETRIES = 5;
    static TOKEN_REFRESH_RETRY_INTERVAL_MS = 0;
    static TOKEN_REFRESH_OFFSET_MS = 0;
    static MAX_TOKEN_REFRESH_ITERATIONS = 250;
    log = _v22.create("TokenService");
    eventEmitter = new _v20();
    accessToken = null;
    refreshToken = null;
    tokenRefreshTimer = null;
    tokenRefreshPromise = null;
    isTokenRefreshEnabled = !1;
    successfulTokenRefreshIterationsCount = 0;
    constructor() {
      this.handleWindowVisibilityChange = this.handleWindowVisibilityChange.bind(this);
    }
    setTokens(_v0, _v1) {
      this.accessToken = _v0, this.refreshToken = _v1, this.isTokenRefreshEnabled && (this.stopTokenAutoRefresh(), this.startTokenAutoRefresh());
    }
    onTokenRefresh(_v0) {
      this.eventEmitter.on("tokenRefresh", _v0);
    }
    offTokenRefresh(_v0) {
      this.eventEmitter.off("tokenRefresh", _v0);
    }
    startTokenAutoRefresh() {
      if (this.successfulTokenRefreshIterationsCount >= _v32.MAX_TOKEN_REFRESH_ITERATIONS) return void this.log.warn("not starting token auto refresh due to max refreshes amount reached");
      if (this.clearTokenRefreshTimer(), !this.accessToken || !this.refreshToken) return void this.log.warn("not starting token refresh because refresh or access tokens or both are not set");
      if (!_v31(this.refreshToken)) return void this.log.warn("invalid refresh token, not starting token rotation");
      let _v0 = function (_v0) {
        let _v1 = _v31(_v0);
        if (!_v1 || !_v1.exp) return null;
        let _v2 = Math.floor(Date.now() / 0);
        return Math.max(0, (_v1.exp - _v2) * 0);
      }(this.accessToken);
      if (null === _v0) return void this.log.warn("invalid access token, not starting token rotation");
      let _v1 = Math.max(_v0 - _v32.TOKEN_REFRESH_OFFSET_MS, 0);
      this.tokenRefreshTimer = window.setTimeout(() => void this.refreshAccessToken(), _v1), this.isTokenRefreshEnabled = !0, document.addEventListener("visibilitychange", this.handleWindowVisibilityChange), this.log.info(`token refresh scheduled in ${Math.round(_v1 / 0)} seconds`);
    }
    stopTokenAutoRefresh() {
      this.isTokenRefreshEnabled = !1, this.clearTokenRefreshTimer(), document.removeEventListener("visibilitychange", this.handleWindowVisibilityChange), this.log.info("token auto refresh stopped");
    }
    async forceTokenRefresh() {
      return this.accessToken && this.refreshToken ? this.refreshAccessToken() : (this.log.warn("not starting forceTokenRefresh because refresh or access tokens or both are not set"), null);
    }
    refreshAccessToken() {
      return this.tokenRefreshPromise || (this.clearTokenRefreshTimer(), this.tokenRefreshPromise = (async () => {
        try {
          return this.log.info("refreshing token"), this.accessToken = await _v30(_v32.TOKEN_REFRESH_RETRIES, _v32.TOKEN_REFRESH_RETRY_INTERVAL_MS, () => this.getNewAccessToken()), this.isTokenRefreshEnabled && this.startTokenAutoRefresh(), this.successfulTokenRefreshIterationsCount += 1, this.log.info("token refreshed successfully"), this.eventEmitter.emit("tokenRefresh", this.accessToken), this.accessToken;
        } catch (_v0) {
          return this.log.error(`failed to refresh token after ${_v32.TOKEN_REFRESH_RETRIES} retries`, _v0), null;
        } finally {
          this.tokenRefreshPromise = null;
        }
      })()), this.tokenRefreshPromise;
    }
    handleWindowVisibilityChange() {
      if ("visible" === document.visibilityState && !this.tokenRefreshPromise && this.isTokenRefreshEnabled) {
        if (!this.accessToken || !this.refreshToken) return void this.log.warn("visibilitychange: token refresh is enabled, but accessToken or refreshToken or both are not set");
        this.startTokenAutoRefresh();
      }
    }
    getNewAccessToken() {
      return Promise.reject("getNewAccessToken mocked, cannot retrieve new token");
    }
    clearTokenRefreshTimer() {
      this.tokenRefreshTimer && (window.clearTimeout(this.tokenRefreshTimer), this.tokenRefreshTimer = null);
    }
  }
  class _v33 {
    static WILDCARD_ORIGIN = "*";
    static MESSAGES_WITH_RESPONSE_TIMEOUT_MS = 0;
    log = _v22.create("WindowMessagingService", !1);
    eventEmitter = new _v20();
    targetOrigin;
    allowedOrigins;
    acquiringTargetWindowPromise;
    targetWindow = null;
    messageIdCounter = 0;
    registeredOnMessageWithResponseEvents = [];
    constructor(_v0) {
      this.targetOrigin = _v0.targetOrigin, this.allowedOrigins = _v0.allowedOrigins, this.validateConfig(), this.handleNewMessage = this.handleNewMessage.bind(this), this.handleConnectionCheck = this.handleConnectionCheck.bind(this), this.setupMessageListeners(), this.acquiringTargetWindowPromise = this.detectAndSetTargetWindow();
    }
    destroy() {
      this.eventEmitter.removeAllListeners(), this.clearMessageListeners(), this.registeredOnMessageWithResponseEvents = [];
    }
    async sendMessage(_v0, _v1, _v2) {
      if (await this.acquiringTargetWindowPromise, !this.targetWindow) return this.log.warn(`trying to sendMessage without target window set ${_v0}`), !1;
      let _v3 = {
        payload: _v1,
        eventName: _v0,
        messageId: _v2,
        timestamp: Date.now()
      };
      try {
        return this.targetWindow.postMessage(_v3, this.targetOrigin), !0;
      } catch (_v0) {
        return this.log.warn("error", `failed to postMessage ${_v0}: ${String(_v0)}`), !1;
      }
    }
    async sendMessageWithResponse(_v0, _v1) {
      await this.acquiringTargetWindowPromise;
      let _v2 = `${++this.messageIdCounter}_${Date.now()}`;
      return new Promise(_v0 => {
        let _v1,
          _v2 = _v0 => {
            _v2 === _v0.messageId && (window.clearTimeout(_v1), _v0([!0, _v0.payload]));
          };
        _v1 = window.setTimeout(() => {
          this.offMessage(_v0, _v2), _v0([!1, Error("Response timeout")]);
        }, _v33.MESSAGES_WITH_RESPONSE_TIMEOUT_MS), this.onMessage(_v0, _v2);
        let _v3 = () => {
          window.clearTimeout(_v1), this.offMessage(_v0, _v2), this.log.warn(`failed to postMessage (with response) ${_v0}`), _v0([!1, Error("Failed to postMessage")]);
        };
        this.sendMessage(_v0, _v1, _v2).then(_v0 => {
          _v0 || _v3();
        }).catch(_v3);
      });
    }
    onMessage(_v0, _v1) {
      this.eventEmitter.on(_v0, _v1);
    }
    offMessage(_v0, _v1) {
      this.eventEmitter.off(_v0, _v1);
    }
    onMessageWithResponse(_v0, _v1) {
      if (this.registeredOnMessageWithResponseEvents.includes(_v0)) throw Error(`Trying to register more than 1 handler for message with response for event ${_v0}`);
      this.registeredOnMessageWithResponseEvents.push(_v0), this.eventEmitter.on(_v0, async _v0 => {
        if (_v0.messageId) try {
          let _v0 = await _v1(_v0);
          (await this.sendMessage(_v0, _v0, _v0.messageId)) || this.log.warn(`failed to sendMessage after onMessageWithResponse handler for event ${_v0}`);
        } catch (_v0) {
          this.log.warn(`onMessageWithResponse handler failed for event ${_v0}`, _v0);
        }
      });
    }
    setupMessageListeners() {
      window.addEventListener("message", this.handleNewMessage), this.onMessageWithResponse(_v24.CONNECTION_CHECK, this.handleConnectionCheck);
    }
    clearMessageListeners() {
      window.removeEventListener("message", this.handleNewMessage), this.offMessage(_v24.CONNECTION_CHECK, this.handleConnectionCheck);
    }
    handleNewMessage(_v0) {
      let _v1 = _v0.data,
        _v2 = _v0.source;
      if (_v1 && "object" == typeof _v1 && _v1.eventName && _v2 !== window && _v2 === this.targetWindow && _v1?.eventName && _v25.includes(_v1.eventName)) {
        if (!this.isOriginAllowed(_v0.origin)) return void this.log.info(`blocked inbound message from disallowed origin: ${_v0.origin}`);
        this.eventEmitter.emit(_v1.eventName, _v1);
      }
    }
    handleConnectionCheck() {}
    async detectAndSetTargetWindow() {
      await this.waitForSelfWindowLoaded(), this.targetWindow = this.detectHostWindow();
    }
    async waitForSelfWindowLoaded() {
      "complete" !== document.readyState && (await new Promise(_v0 => {
        window.addEventListener("load", _v0, {
          once: !0
        });
      }));
    }
    detectHostWindow() {
      let _v0 = window.opener;
      if (_v0) return this.log.info("detected host via window.opener"), _v0;
      let _v1 = window.parent;
      return _v1 && _v1 !== window ? (this.log.info("detected host via window.parent (iframe)"), _v1) : (this.log.warn("no host window detected"), null);
    }
    validateConfig() {
      if (!this.targetOrigin.length) throw Error("targetOrigin is an empty string");
      if (0 === this.allowedOrigins.length) throw Error("allowedOrigins is an empty array");
      let _v0 = this.allowedOrigins.includes(_v33.WILDCARD_ORIGIN),
        _v1 = this.targetOrigin === _v33.WILDCARD_ORIGIN;
      if (!_v0 && !_v1 && !this.allowedOrigins.includes(this.targetOrigin)) throw Error(`targetOrigin (${this.targetOrigin}) is not in the list of allowed origins: ${this.allowedOrigins.join(",")}`);
    }
    isOriginAllowed(_v0) {
      try {
        if (this.allowedOrigins.includes(_v33.WILDCARD_ORIGIN)) return !0;
        let _v0 = new URL(_v0).origin;
        return this.allowedOrigins.includes(_v0);
      } catch {
        return !1;
      }
    }
  }
  class _v34 {
    static create(_v0 = {}) {
      let _v1 = new _v33({
        targetOrigin: document.referrer ? new URL(document.referrer).origin : _v33.WILDCARD_ORIGIN,
        allowedOrigins: _v0.allowedOrigins ?? [_v33.WILDCARD_ORIGIN]
      });
      return _v22.setCrossWindowLogTransport(_v0 => {
        _v1.sendMessage(_v23.SEND_LOG_FROM_INTEGRATION_TO_HOST, _v0);
      }), new _v26(_v1, !function () {
        try {
          return window.self !== window.top;
        } catch (_v0) {
          return !0;
        }
      }() ? new _v28() : new _v29(), new _v32());
    }
  }
  var _v35 = _v0.i(0),
    _v36 = _v0.i(0);
  async function _v37({
    baseUrl: _v0,
    select: _v1,
    ..._v2
  }) {
    return (0, _v35.measureLatency)("getTokensInfo", "GET", async () => {
      let _v0 = await fetch(`${_v0}/tokens/info?fields=${_v1.map(_v36.intoSnakeCase).join(",")}`, {
        ..._v2,
        method: "GET"
      });
      if (!_v0.ok) throw new _v36.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v36.deepCamelCase)(_v1);
    });
  }
  _v0.s(["VpaasProvider", 0, function ({
    children: _v0,
    hasVpaasViewer: _v1,
    baseUrl: _v2
  }) {
    let {
        config: _v3,
        error: _v4
      } = function ({
        loadConfig: _v0
      } = {}) {
        let _v1 = (0, _v6.useRef)(void 0),
          [_v2, _v3] = (0, _v6.useState)(null),
          [_v4, _v5] = (0, _v6.useState)(null);
        return (0, _v6.useEffect)(() => {
          let _v0 = _v34.create();
          return _v1.current = _v0, _v0 && (_v0.on("config", _v3), (async () => {
            try {
              await _v0.loadConfig();
            } catch (_v0) {
              _v0.isDestroyed() || _v5(_v0);
            }
          })()), () => {
            _v0.destroy(), _v1.current = null;
          };
        }, [_v0]), {
          integrationRef: _v1,
          config: _v2,
          error: _v4
        };
      }({
        loadConfig: _v1
      }),
      {
        vpaasViewer: _v5,
        vpaasViewerError: _v6
      } = function ({
        baseUrl: _v0,
        jwtAccessToken: _v1
      }) {
        let [_v2, _v3] = (0, _v6.useState)(null),
          [_v4, _v5] = (0, _v6.useState)(null);
        return (0, _v6.useEffect)(() => {
          if (!_v1 || !_v0) return;
          let _v0 = !1;
          return (async () => {
            try {
              _v5(null);
              let _v0 = await _v37({
                baseUrl: _v0,
                select: ["name", "email", "externalId"],
                headers: new Headers({
                  Authorization: `jwt ${_v1}`
                })
              });
              _v0 || _v3({
                user: {
                  id: _v0.externalId,
                  name: _v0.name,
                  email: _v0.email
                },
                locale: ("u" > typeof navigator ? navigator.language : "en-US") ?? "en-US"
              });
            } catch (_v0) {
              _v0 || _v5(_v0);
            }
          })(), () => {
            _v0 = !0;
          };
        }, [_v0, _v1]), {
          vpaasViewer: _v2,
          vpaasViewerError: _v4
        };
      }({
        baseUrl: _v2,
        jwtAccessToken: _v3?.accessToken
      }),
      _v7 = (0, _v6.useMemo)(() => ({
        isEnabled: !0,
        producerTitle: _v3?.producerTitle
      }), [_v3?.producerTitle]),
      _v8 = (0, _v5.useRouter)().pathname,
      _v9 = (0, _v6.useMemo)(() => {
        let _v0 = new URLSearchParams(window?.location.search ?? ""),
          _v1 = _v0.get("dbg-jwt-override"),
          _v2 = _v0.get("dbg-locale-override");
        return {
          baseUrl: _v2,
          xVimeoPage: _v8,
          jwt: _v1 ?? _v3?.accessToken,
          locale: _v2 ?? _v5?.locale
        };
      }, [_v2, _v8, _v3, _v5]);
    return _v1 ? (_v3 || _v4) && (_v5 || _v6) ? _v4 || _v6 ? (0, _v4.jsx)(_v16, {}) : (0, _v4.jsx)(_v9.VpaasContext.Provider, {
      value: _v7,
      children: (0, _v4.jsx)(_v8.ViewerContext.Provider, {
        value: _v5,
        children: (0, _v4.jsx)(_v7.GctlProvider, {
          jwt: _v9.jwt,
          baseUrl: _v9.baseUrl,
          locale: _v9.locale,
          xVimeoPage: _v9.xVimeoPage,
          children: _v0
        })
      })
    }) : (0, _v4.jsx)(_v18, {}) : (0, _v4.jsx)(_v9.VpaasContext.Provider, {
      value: _v7,
      children: _v0
    });
  }], 0);
}