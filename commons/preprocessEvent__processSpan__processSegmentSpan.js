{
  "use strict";

  let _v1, _v2, _v3, _v4, _v5, _v6, _v7, _v8, _v9, _v10, _v11, _v12, _v13, _v14;
  var _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0);
  function _v19(_v0, _v1, _v2 = [_v1], _v3 = "npm") {
    let _v4 = (_v0._metadata = _v0._metadata || {}).sdk = _v0._metadata.sdk || {};
    _v4.name || (_v4.name = `sentry.javascript.${_v1}`, _v4.packages = _v2.map(_v0 => ({
      name: `${_v3}:@sentry/${_v0}`,
      version: _v18.SDK_VERSION
    })), _v4.version = _v18.SDK_VERSION);
  }
  var _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0);
  let _v23 = [];
  function _v24(_v0, _v1) {
    for (let _v0 of _v1) _v0?.afterAllSetup && _v0.afterAllSetup(_v0);
  }
  function _v25(_v0, _v1, _v2) {
    if (_v2[_v1.name]) {
      _v22.DEBUG_BUILD && _v16.debug.log(`Integration skipped because it was already installed: ${_v1.name}`);
      return;
    }
    if (_v2[_v1.name] = _v1, _v23.includes(_v1.name) || "function" != typeof _v1.setupOnce || (_v1.setupOnce(), _v23.push(_v1.name)), _v1.setup && "function" == typeof _v1.setup && _v1.setup(_v0), "function" == typeof _v1.preprocessEvent) {
      let _v0 = _v1.preprocessEvent.bind(_v1);
      _v0.on("preprocessEvent", (_v0, _v1) => _v0(_v0, _v1, _v0));
    }
    if ("function" == typeof _v1.processEvent) {
      let _v0 = _v1.processEvent.bind(_v1),
        _v1 = Object.assign((_v0, _v1) => _v0(_v0, _v1, _v0), {
          id: _v1.name
        });
      _v0.addEventProcessor(_v1);
    }
    ["processSpan", "processSegmentSpan"].forEach(_v0 => {
      let _v1 = _v1[_v0];
      "function" == typeof _v1 && _v0.on(_v0, _v0 => _v1.call(_v1, _v0, _v0));
    }), _v22.DEBUG_BUILD && _v16.debug.log(`Integration installed: ${_v1.name}`);
  }
  function _v26(_v0) {
    let _v1 = [];
    _v0.message && _v1.push(_v0.message);
    try {
      let _v0 = _v0.exception.values[_v0.exception.values.length - 1];
      _v0?.value && (_v1.push(_v0.value), _v0.type && _v1.push(`${_v0.type}: ${_v0.value}`));
    } catch {}
    return _v1;
  }
  var _v27 = _v0.i(0),
    _v28 = _v0.i(0);
  let _v29 = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/, /^Can't find variable: gmo$/, /^undefined is not an object \(evaluating 'a\.[A-Z]'\)$/, /can't redefine non-configurable property "solana"/, /vv\(\)\.getRestrictions is not a function/, /Can't find variable: _AutofillCallbackHandler/, /Object Not Found Matching Id:\d+, MethodName:simulateEvent/, /^Java exception was raised during method invocation$/];
  function _v30(_v0 = {}, _v1 = {}) {
    return {
      allowUrls: [...(_v0.allowUrls || []), ...(_v1.allowUrls || [])],
      denyUrls: [...(_v0.denyUrls || []), ...(_v1.denyUrls || [])],
      ignoreErrors: [...(_v0.ignoreErrors || []), ...(_v1.ignoreErrors || []), ...(_v0.disableErrorDefaults ? [] : _v29)],
      ignoreTransactions: [...(_v0.ignoreTransactions || []), ...(_v1.ignoreTransactions || [])]
    };
  }
  function _v31(_v0) {
    try {
      let _v0 = [...(_v0.exception?.values ?? [])].reverse().find(_v0 => _v0.mechanism?.parent_id === void 0 && _v0.stacktrace?.frames?.length),
        _v1 = _v0?.stacktrace?.frames;
      return _v1 ? function (_v0 = []) {
        for (let _v0 = _v0.length - 1; _v0 >= 0; _v0--) {
          let _v0 = _v0[_v0];
          if (_v0 && "<anonymous>" !== _v0.filename && "[native code]" !== _v0.filename) return _v0.filename || null;
        }
        return null;
      }(_v1) : null;
    } catch {
      return _v22.DEBUG_BUILD && _v16.debug.error(`Cannot extract url for event ${(0, _v27.getEventDescription)(_v0)}`), null;
    }
  }
  var _v32 = _v0.i(0);
  let _v33 = new WeakMap();
  var _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0);
  function _v37(_v0, _v1) {
    let _v2 = (0, _v36.getFramesFromEvent)(_v0),
      _v3 = (0, _v36.getFramesFromEvent)(_v1);
    if (!_v2 && !_v3) return !0;
    if (_v2 && !_v3 || !_v2 && _v3 || _v3.length !== _v2.length) return !1;
    for (let _v0 = 0; _v0 < _v3.length; _v0++) {
      let _v0 = _v3[_v0],
        _v1 = _v2[_v0];
      if (_v0.filename !== _v1.filename || _v0.lineno !== _v1.lineno || _v0.colno !== _v1.colno || _v0.function !== _v1.function) return !1;
    }
    return !0;
  }
  function _v38(_v0, _v1) {
    let _v2 = _v0.fingerprint,
      _v3 = _v1.fingerprint;
    if (!_v2 && !_v3) return !0;
    if (_v2 && !_v3 || !_v2 && _v3) return !1;
    try {
      return _v2.join("") === _v3.join("");
    } catch {
      return !1;
    }
  }
  function _v39(_v0) {
    return _v0.exception?.values?.[0];
  }
  var _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0);
  _v0.i(0);
  var _v43 = _v0.i(0),
    _v44 = _v0.i(0);
  _v0.i(0);
  var _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0);
  function _v49(_v0, _v1) {
    var _v2, _v3, _v4, _v5;
    let _v6,
      _v7 = _v1 ?? (_v5 = _v0, _v50().get(_v5)) ?? [];
    if (0 === _v7.length) return;
    let _v8 = _v0.getOptions(),
      _v9 = (_v2 = _v8._metadata, _v3 = _v8.tunnel, _v4 = _v0.getDsn(), _v6 = {}, _v2?.sdk && (_v6.sdk = {
        name: _v2.sdk.name,
        version: _v2.sdk.version
      }), _v3 && _v4 && (_v6.dsn = (0, _v40.dsnToString)(_v4)), (0, _v48.createEnvelope)(_v6, [[{
        type: "log",
        item_count: _v7.length,
        content_type: "application/vnd.sentry.items.log+json"
      }, {
        items: _v7
      }]]));
    _v50().set(_v0, []), _v0.emit("flushLogs"), _v0.sendEnvelope(_v9);
  }
  function _v50() {
    return (0, _v43.getGlobalSingleton)("clientToLogBufferMap", () => new WeakMap());
  }
  function _v51(_v0, _v1) {
    var _v2, _v3, _v4, _v5;
    let _v6,
      _v7 = _v1 ?? (_v5 = _v0, _v52().get(_v5)) ?? [];
    if (0 === _v7.length) return;
    let _v8 = _v0.getOptions(),
      _v9 = (_v2 = _v8._metadata, _v3 = _v8.tunnel, _v4 = _v0.getDsn(), _v6 = {}, _v2?.sdk && (_v6.sdk = {
        name: _v2.sdk.name,
        version: _v2.sdk.version
      }), _v3 && _v4 && (_v6.dsn = (0, _v40.dsnToString)(_v4)), (0, _v48.createEnvelope)(_v6, [[{
        type: "trace_metric",
        item_count: _v7.length,
        content_type: "application/vnd.sentry.items.trace-metric+json"
      }, {
        items: _v7
      }]]));
    _v52().set(_v0, []), _v0.emit("flushMetrics"), _v0.sendEnvelope(_v9);
  }
  function _v52() {
    return (0, _v43.getGlobalSingleton)("clientToMetricBufferMap", () => new WeakMap());
  }
  var _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0);
  function _v56(_v0) {
    return "object" == typeof _v0 && "function" == typeof _v0.unref && _v0.unref(), _v0;
  }
  let _v57 = Symbol.for("SentryBufferFullError");
  function _v58(_v0 = 100) {
    let _v1 = new Set();
    return {
      get $() {
        return Array.from(_v1);
      },
      add: function (_v0) {
        if (!(_v1.size < _v0)) return (0, _v55.rejectedSyncPromise)(_v57);
        let _v1 = _v0();
        return _v1.add(_v1), _v1.then(() => {
          _v1.delete(_v1);
        }, () => {
          _v1.delete(_v1);
        }), _v1;
      },
      drain: function (_v0) {
        if (!_v1.size) return (0, _v55.resolvedSyncPromise)(!0);
        let _v1 = Promise.allSettled(Array.from(_v1)).then(() => !0);
        return _v0 ? Promise.race([_v1, new Promise(_v0 => _v56(setTimeout(() => _v0(!1), _v0)))]) : _v1;
      }
    };
  }
  var _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v61 = _v0.i(0),
    _v62 = _v0.i(0),
    _v63 = _v0.i(0);
  let _v64 = "Not capturing exception because it's already been captured.",
    _v65 = "Discarded session because of missing or non-string release",
    _v66 = Symbol.for("SentryInternalError"),
    _v67 = Symbol.for("SentryDoNotSendEventError");
  function _v68(_v0) {
    return {
      message: _v0,
      [_v66]: !0
    };
  }
  function _v69(_v0) {
    return {
      message: _v0,
      [_v67]: !0
    };
  }
  function _v70(_v0) {
    return !!_v0 && "object" == typeof _v0 && _v66 in _v0;
  }
  function _v71(_v0) {
    return !!_v0 && "object" == typeof _v0 && _v67 in _v0;
  }
  function _v72(_v0, _v1, _v2, _v3, _v4) {
    let _v5,
      _v6 = 0,
      _v7 = !1;
    _v0.on(_v2, () => {
      _v6 = 0, clearTimeout(_v5), _v7 = !1;
    }), _v0.on(_v1, _v0 => {
      (_v6 += _v3(_v0)) >= 0 ? _v4(_v0) : _v7 || (_v7 = !0, _v5 = _v56(setTimeout(() => {
        _v4(_v0);
      }, 0)));
    }), _v0.on("flush", () => {
      _v4(_v0);
    });
  }
  class _v73 {
    constructor(_v0) {
      if (this._options = _v0, this._integrations = {}, this._numProcessing = 0, this._outcomes = {}, this._hooks = {}, this._eventProcessors = [], this._promiseBuffer = _v58(_v0.transportOptions?.bufferSize ?? 64), _v0.dsn ? this._dsn = (0, _v40.makeDsn)(_v0.dsn) : _v22.DEBUG_BUILD && _v16.debug.warn("No DSN provided, client will not send events."), this._dsn) {
        const _v0 = function (_v0, _v1, _v2) {
          let _v3, _v4, _v5;
          return _v1 || `${(_v3 = _v0.protocol ? `${_v0.protocol}:` : "", _v4 = _v0.port ? `:${_v0.port}` : "", `${_v3}//${_v0.host}${_v4}${_v0.path ? `/${_v0.path}` : ""}/api/`)}${_v0.projectId}/envelope/?${(_v5 = {
            sentry_version: "7"
          }, _v0.publicKey && (_v5.sentry_key = _v0.publicKey), _v2 && (_v5.sentry_client = `${_v2.name}/${_v2.version}`), new URLSearchParams(_v5).toString())}`;
        }(this._dsn, _v0.tunnel, _v0._metadata ? _v0._metadata.sdk : void 0);
        this._transport = _v0.transport({
          tunnel: this._options.tunnel,
          recordDroppedEvent: this.recordDroppedEvent.bind(this),
          ..._v0.transportOptions,
          url: _v0
        });
      }
      this._options.enableLogs = this._options.enableLogs ?? this._options._experiments?.enableLogs, this._options.enableLogs && _v72(this, "afterCaptureLog", "flushLogs", _v78, _v49), (this._options.enableMetrics ?? this._options._experiments?.enableMetrics ?? !0) && _v72(this, "afterCaptureMetric", "flushMetrics", _v77, _v51);
    }
    captureException(_v0, _v1, _v2) {
      let _v3 = (0, _v27.uuid4)();
      if ((0, _v27.checkOrSetAlreadyCaught)(_v0)) return _v22.DEBUG_BUILD && _v16.debug.log(_v64), _v3;
      let _v4 = {
        event_id: _v3,
        ..._v1
      };
      return this._process(() => this.eventFromException(_v0, _v4).then(_v0 => this._captureEvent(_v0, _v4, _v2)).then(_v0 => _v0), "error"), _v4.event_id;
    }
    captureMessage(_v0, _v1, _v2, _v3) {
      let _v4 = {
          event_id: (0, _v27.uuid4)(),
          ..._v2
        },
        _v5 = (0, _v44.isParameterizedString)(_v0) ? _v0 : String(_v0),
        _v6 = (0, _v44.isPrimitive)(_v0),
        _v7 = _v6 ? this.eventFromMessage(_v5, _v1, _v4) : this.eventFromException(_v0, _v4);
      return this._process(() => _v7.then(_v0 => this._captureEvent(_v0, _v4, _v3)), _v6 ? "unknown" : "error"), _v4.event_id;
    }
    captureEvent(_v0, _v1, _v2) {
      let _v3 = (0, _v27.uuid4)();
      if (_v1?.originalException && (0, _v27.checkOrSetAlreadyCaught)(_v1.originalException)) return _v22.DEBUG_BUILD && _v16.debug.log(_v64), _v3;
      let _v4 = {
          event_id: _v3,
          ..._v1
        },
        _v5 = _v0.sdkProcessingMetadata || {},
        _v6 = _v5.capturedSpanScope,
        _v7 = _v5.capturedSpanIsolationScope,
        _v8 = _v74(_v0.type);
      return this._process(() => this._captureEvent(_v0, _v4, _v6 || _v2, _v7), _v8), _v4.event_id;
    }
    captureSession(_v0) {
      this.sendSession(_v0), (0, _v53.updateSession)(_v0, {
        init: !1
      });
    }
    getDsn() {
      return this._dsn;
    }
    getOptions() {
      return this._options;
    }
    getSdkMetadata() {
      return this._options._metadata;
    }
    getTransport() {
      return this._transport;
    }
    async flush(_v0) {
      let _v1 = this._transport;
      if (!_v1) return !0;
      this.emit("flush");
      let _v2 = await this._isClientDoneProcessing(_v0),
        _v3 = await _v1.flush(_v0);
      return _v2 && _v3;
    }
    async close(_v0) {
      _v49(this);
      let _v1 = await this.flush(_v0);
      return this.getOptions().enabled = !1, this.emit("close"), _v1;
    }
    getEventProcessors() {
      return this._eventProcessors;
    }
    addEventProcessor(_v0) {
      this._eventProcessors.push(_v0);
    }
    init() {
      (this._isEnabled() || this._options.integrations.some(({
        name: _v0
      }) => _v0.startsWith("Spotlight"))) && this._setupIntegrations();
    }
    getIntegrationByName(_v0) {
      return this._integrations[_v0];
    }
    addIntegration(_v0) {
      let _v1 = this._integrations[_v0.name];
      !_v1 && _v0.beforeSetup && _v0.beforeSetup(this), _v25(this, _v0, this._integrations), _v1 || _v24(this, [_v0]);
    }
    sendEvent(_v0, _v1 = {}) {
      this.emit("beforeSendEvent", _v0, _v1);
      let _v2 = (0, _v42.createEventEnvelope)(_v0, this._dsn, this._options._metadata, this._options.tunnel);
      for (let _v0 of _v1.attachments || []) _v2 = (0, _v48.addItemToEnvelope)(_v2, (0, _v48.createAttachmentEnvelopeItem)(_v0));
      this.sendEnvelope(_v2).then(_v0 => this.emit("afterSendEvent", _v0, _v0));
    }
    sendSession(_v0) {
      let {
        release: _v1,
        environment: _v2 = _v41.DEFAULT_ENVIRONMENT
      } = this._options;
      if ("aggregates" in _v0) {
        let _v0 = _v0.attrs || {};
        if (!_v0.release && !_v1) {
          _v22.DEBUG_BUILD && _v16.debug.warn(_v65);
          return;
        }
        _v0.release = _v0.release || _v1, _v0.environment = _v0.environment || _v2, _v0.attrs = _v0;
      } else {
        if (!_v0.release && !_v1) {
          _v22.DEBUG_BUILD && _v16.debug.warn(_v65);
          return;
        }
        _v0.release = _v0.release || _v1, _v0.environment = _v0.environment || _v2;
      }
      this.emit("beforeSendSession", _v0);
      let _v3 = (0, _v42.createSessionEnvelope)(_v0, this._dsn, this._options._metadata, this._options.tunnel);
      this.sendEnvelope(_v3);
    }
    recordDroppedEvent(_v0, _v1, _v2 = 1) {
      if (this._options.sendClientReports) {
        let _v0 = `${_v0}:${_v1}`;
        _v22.DEBUG_BUILD && _v16.debug.log(`Recording outcome: "${_v0}"${_v2 > 1 ? ` (${_v2} times)` : ""}`), this._outcomes[_v0] = (this._outcomes[_v0] || 0) + _v2;
      }
    }
    on(_v0, _v1) {
      let _v2 = this._hooks[_v0] = this._hooks[_v0] || new Set(),
        _v3 = (..._v0) => _v1(..._v0);
      return _v2.add(_v3), () => {
        _v2.delete(_v3);
      };
    }
    emit(_v0, ..._v1) {
      let _v2 = this._hooks[_v0];
      _v2 && _v2.forEach(_v0 => _v0(..._v1));
    }
    async sendEnvelope(_v0) {
      if (this.emit("beforeEnvelope", _v0), this._isEnabled() && this._transport) try {
        return await this._transport.send(_v0);
      } catch (_v0) {
        return _v22.DEBUG_BUILD && _v16.debug.error("Error while sending envelope:", _v0), {};
      }
      return _v22.DEBUG_BUILD && _v16.debug.error("Transport disabled"), {};
    }
    dispose() {}
    _setupIntegrations() {
      var _v0;
      let _v1,
        {
          integrations: _v2
        } = this._options;
      this._integrations = (_v0 = this, _v1 = {}, _v2.forEach(_v0 => {
        _v0?.beforeSetup && _v0.beforeSetup(_v0);
      }), _v2.forEach(_v0 => {
        _v0 && _v25(_v0, _v0, _v1);
      }), _v1), _v24(this, _v2);
    }
    _updateSessionFromEvent(_v0, _v1) {
      let _v2 = "fatal" === _v1.level,
        _v3 = !1,
        _v4 = _v1.exception?.values;
      if (_v4) {
        for (let _v0 of (_v3 = !0, _v2 = !1, _v4)) if (_v0.mechanism?.handled === !1) {
          _v2 = !0;
          break;
        }
      }
      let _v5 = "ok" === _v0.status;
      (_v5 && 0 === _v0.errors || _v5 && _v2) && ((0, _v53.updateSession)(_v0, {
        ...(_v2 && {
          status: "crashed"
        }),
        errors: _v0.errors || Number(_v3 || _v2)
      }), this.captureSession(_v0));
    }
    async _isClientDoneProcessing(_v0) {
      let _v1 = 0;
      for (; !_v0 || _v1 < _v0;) {
        if (await new Promise(_v0 => setTimeout(_v0, 1)), !this._numProcessing) return !0;
        _v1++;
      }
      return !1;
    }
    _isEnabled() {
      return !1 !== this.getOptions().enabled && void 0 !== this._transport;
    }
    _prepareEvent(_v0, _v1, _v2, _v3) {
      let _v4 = this.getOptions(),
        _v5 = Object.keys(this._integrations);
      return !_v1.integrations && _v5?.length && (_v1.integrations = _v5), this.emit("preprocessEvent", _v0, _v1), _v0.type || _v3.setLastEventId(_v0.event_id || _v1.event_id), (0, _v62.prepareEvent)(_v4, _v0, _v1, _v2, this, _v3).then(_v0 => (null === _v0 || (this.emit("postprocessEvent", _v0, _v1), _v0.contexts = {
        trace: {
          ..._v0.contexts?.trace,
          ...(0, _v21.getTraceContextFromScope)(_v2)
        },
        ..._v0.contexts
      }, _v0.sdkProcessingMetadata = {
        dynamicSamplingContext: (0, _v47.getDynamicSamplingContextFromScope)(this, _v2),
        ..._v0.sdkProcessingMetadata
      }), _v0));
    }
    _captureEvent(_v0, _v1 = {}, _v2 = (0, _v21.getCurrentScope)(), _v3 = (0, _v21.getIsolationScope)()) {
      return _v22.DEBUG_BUILD && _v75(_v0) && _v16.debug.log(`Captured error event \`${_v26(_v0)[0] || "<unknown>"}\``), this._processEvent(_v0, _v1, _v2, _v3).then(_v0 => _v0.event_id, _v0 => {
        _v22.DEBUG_BUILD && (_v71(_v0) ? _v16.debug.log(_v0.message) : _v70(_v0) ? _v16.debug.warn(_v0.message) : _v16.debug.warn(_v0));
      });
    }
    _processEvent(_v0, _v1, _v2, _v3) {
      let _v4 = this.getOptions(),
        {
          sampleRate: _v5
        } = _v4,
        _v6 = _v76(_v0),
        _v7 = _v75(_v0),
        _v8 = _v0.type || "error",
        _v9 = `before send for type \`${_v8}\``,
        _v10 = void 0 === _v5 ? void 0 : (0, _v61.parseSampleRate)(_v5);
      if (_v7 && "number" == typeof _v10 && (0, _v59.safeMathRandom)() > _v10) return this.recordDroppedEvent("sample_rate", "error"), (0, _v55.rejectedSyncPromise)(_v69(`Discarding event because it's not included in the random sample (sampling rate = ${_v5})`));
      let _v11 = _v74(_v0.type);
      return this._prepareEvent(_v0, _v1, _v2, _v3).then(_v0 => {
        if (null === _v0) throw this.recordDroppedEvent("event_processor", _v11), _v69("An event processor returned `null`, will not send event.");
        return _v1.data?.__sentry__ === !0 ? _v0 : function (_v0, _v1) {
          let _v2 = `${_v1} must return \`null\` or a valid event.`;
          if ((0, _v44.isThenable)(_v0)) return _v0.then(_v0 => {
            if (!(0, _v44.isPlainObject)(_v0) && null !== _v0) throw _v68(_v2);
            return _v0;
          }, _v0 => {
            throw _v68(`${_v1} rejected with ${_v0}`);
          });
          if (!(0, _v44.isPlainObject)(_v0) && null !== _v0) throw _v68(_v2);
          return _v0;
        }(function (_v0, _v1, _v2, _v3) {
          let {
              beforeSend: _v4,
              beforeSendTransaction: _v5,
              ignoreSpans: _v6
            } = _v1,
            _v7 = !(0, _v54.isStreamedBeforeSendSpanCallback)(_v1.beforeSendSpan) && _v1.beforeSendSpan,
            _v8 = _v2;
          if (_v75(_v8) && _v4) return _v4(_v8, _v3);
          if (_v76(_v8)) {
            if (_v7 || _v6) {
              let _v0 = function (_v0) {
                let {
                  trace_id: _v1,
                  parent_span_id: _v2,
                  span_id: _v3,
                  status: _v4,
                  origin: _v5,
                  data: _v6,
                  op: _v7
                } = _v0.contexts?.trace ?? {};
                return {
                  data: _v6 ?? {},
                  description: _v0.transaction,
                  op: _v7,
                  parent_span_id: _v2,
                  span_id: _v3 ?? "",
                  start_timestamp: _v0.start_timestamp ?? 0,
                  status: _v4,
                  timestamp: _v0.timestamp,
                  trace_id: _v1 ?? "",
                  origin: _v5,
                  profile_id: _v6?.[_v34.SEMANTIC_ATTRIBUTE_PROFILE_ID],
                  exclusive_time: _v6?.[_v34.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME],
                  measurements: _v0.measurements,
                  is_segment: !0
                };
              }(_v8);
              if (_v6?.length && (0, _v63.shouldIgnoreSpan)(_v0, _v6)) return null;
              if (_v7) {
                let _v0 = _v7(_v0);
                if (_v0) _v8 = (0, _v60.merge)(_v2, {
                  type: "transaction",
                  timestamp: _v0.timestamp,
                  start_timestamp: _v0.start_timestamp,
                  transaction: _v0.description,
                  contexts: {
                    trace: {
                      trace_id: _v0.trace_id,
                      span_id: _v0.span_id,
                      parent_span_id: _v0.parent_span_id,
                      op: _v0.op,
                      status: _v0.status,
                      origin: _v0.origin,
                      data: {
                        ..._v0.data,
                        ...(_v0.profile_id && {
                          [_v34.SEMANTIC_ATTRIBUTE_PROFILE_ID]: _v0.profile_id
                        }),
                        ...(_v0.exclusive_time && {
                          [_v34.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME]: _v0.exclusive_time
                        })
                      }
                    }
                  },
                  measurements: _v0.measurements
                });else (0, _v35.showSpanDropWarning)();
              }
              if (_v8.spans) {
                let _v0 = [],
                  _v1 = _v8.spans;
                for (let _v0 of _v1) {
                  if (_v6?.length && (0, _v63.shouldIgnoreSpan)(_v0, _v6)) {
                    (0, _v63.reparentChildSpans)(_v1, _v0);
                    continue;
                  }
                  if (_v7) {
                    let _v0 = _v7(_v0);
                    _v0 ? _v0.push(_v0) : ((0, _v35.showSpanDropWarning)(), _v0.push(_v0));
                  } else _v0.push(_v0);
                }
                let _v2 = _v8.spans.length - _v0.length;
                _v2 && _v0.recordDroppedEvent("before_send", "span", _v2), _v8.spans = _v0;
              }
            }
            if (_v5) {
              if (_v8.spans) {
                let _v0 = _v8.spans.length;
                _v8.sdkProcessingMetadata = {
                  ..._v2.sdkProcessingMetadata,
                  spanCountBeforeProcessing: _v0
                };
              }
              return _v5(_v8, _v3);
            }
          }
          return _v8;
        }(this, _v4, _v0, _v1), _v9);
      }).then(_v0 => {
        if (null === _v0) {
          if (this.recordDroppedEvent("before_send", _v11), _v6) {
            let _v0 = 1 + (_v0.spans || []).length;
            this.recordDroppedEvent("before_send", "span", _v0);
          }
          throw _v69(`${_v9} returned \`null\`, will not send event.`);
        }
        let _v1 = _v2.getSession() || _v3.getSession();
        if (_v7 && _v1 && this._updateSessionFromEvent(_v1, _v0), _v6) {
          let _v0 = (_v0.sdkProcessingMetadata?.spanCountBeforeProcessing || 0) - (_v0.spans ? _v0.spans.length : 0);
          _v0 > 0 && this.recordDroppedEvent("before_send", "span", _v0);
        }
        let _v2 = _v0.transaction_info;
        return _v6 && _v2 && _v0.transaction !== _v0.transaction && (_v0.transaction_info = {
          ..._v2,
          source: "custom"
        }), this.sendEvent(_v0, _v1), _v0;
      }).then(null, _v0 => {
        if (_v71(_v0) || _v70(_v0)) throw _v0;
        throw this.captureException(_v0, {
          mechanism: {
            handled: !1,
            type: "internal"
          },
          data: {
            __sentry__: !0
          },
          originalException: _v0
        }), _v68(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${_v0}`);
      });
    }
    _process(_v0, _v1) {
      this._numProcessing++, this._promiseBuffer.add(_v0).then(_v0 => (this._numProcessing--, _v0), _v0 => (this._numProcessing--, _v0 === _v57 && this.recordDroppedEvent("queue_overflow", _v1), _v0));
    }
    _clearOutcomes() {
      let _v0 = this._outcomes;
      return this._outcomes = {}, Object.entries(_v0).map(([_v0, _v1]) => {
        let [_v2, _v3] = _v0.split(":");
        return {
          reason: _v2,
          category: _v3,
          quantity: _v1
        };
      });
    }
    _flushOutcomes() {
      var _v0;
      let _v1;
      _v22.DEBUG_BUILD && _v16.debug.log("Flushing outcomes...");
      let _v2 = this._clearOutcomes();
      if (0 === _v2.length) {
        _v22.DEBUG_BUILD && _v16.debug.log("No outcomes to send");
        return;
      }
      if (!this._dsn) {
        _v22.DEBUG_BUILD && _v16.debug.log("No dsn provided, will not send outcomes");
        return;
      }
      _v22.DEBUG_BUILD && _v16.debug.log("Sending outcomes:", _v2);
      let _v3 = (_v0 = this._options.tunnel && (0, _v40.dsnToString)(this._dsn), _v1 = [{
        type: "client_report"
      }, {
        timestamp: (0, _v46.dateTimestampInSeconds)(),
        discarded_events: _v2
      }], (0, _v48.createEnvelope)(_v0 ? {
        dsn: _v0
      } : {}, [_v1]));
      this.sendEnvelope(_v3);
    }
  }
  function _v74(_v0) {
    return "replay_event" === _v0 ? "replay" : _v0 || "error";
  }
  function _v75(_v0) {
    return void 0 === _v0.type;
  }
  function _v76(_v0) {
    return "transaction" === _v0.type;
  }
  function _v77(_v0) {
    let _v1 = 0;
    return _v0.name && (_v1 += 2 * _v0.name.length), (_v1 += 8) + _v79(_v0.attributes);
  }
  function _v78(_v0) {
    let _v1 = 0;
    return _v0.message && (_v1 += 2 * _v0.message.length), _v1 + _v79(_v0.attributes);
  }
  function _v79(_v0) {
    if (!_v0) return 0;
    let _v1 = 0;
    return Object.values(_v0).forEach(_v0 => {
      Array.isArray(_v0) ? _v1 += _v0.length * _v80(_v0[0]) : (0, _v44.isPrimitive)(_v0) ? _v1 += _v80(_v0) : _v1 += 100;
    }), _v1;
  }
  function _v80(_v0) {
    return "string" == typeof _v0 ? 2 * _v0.length : "number" == typeof _v0 ? 8 : 4 * ("boolean" == typeof _v0);
  }
  function _v81(_v0) {
    "aggregates" in _v0 ? _v0.attrs?.ip_address === void 0 && (_v0.attrs = {
      ..._v0.attrs,
      ip_address: "{{auto}}"
    }) : void 0 === _v0.ipAddress && (_v0.ipAddress = "{{auto}}");
  }
  var _v82 = _v0.i(0);
  function _v83(_v0) {
    return (0, _v44.isError)(_v0) && "__sentry_fetch_url_host__" in _v0 && "string" == typeof _v0.__sentry_fetch_url_host__ ? `${_v0.message} (${_v0.__sentry_fetch_url_host__})` : _v0.message;
  }
  function _v84(_v0, _v1) {
    var _v2, _v3;
    let _v4,
      _v5,
      _v6 = _v86(_v0, _v1),
      _v7 = {
        type: (_v2 = _v1, !(_v4 = _v2?.name) && _v88(_v2) ? _v2.message && Array.isArray(_v2.message) && 2 == _v2.message.length ? _v2.message[0] : "WebAssembly.Exception" : _v4),
        value: (_v3 = _v1, _v5 = _v3?.message, _v88(_v3) ? Array.isArray(_v3.message) && 2 == _v3.message.length ? _v3.message[1] : "wasm exception" : _v5 ? _v5.error && "string" == typeof _v5.error.message ? _v83(_v5.error) : _v83(_v3) : "No error message")
      };
    return _v6.length && (_v7.stacktrace = {
      frames: _v6
    }), void 0 === _v7.type && "" === _v7.value && (_v7.value = "Unrecoverable error caught"), _v7;
  }
  function _v85(_v0, _v1) {
    return {
      exception: {
        values: [_v84(_v0, _v1)]
      }
    };
  }
  function _v86(_v0, _v1) {
    var _v2, _v3;
    let _v4 = _v1.stacktrace || _v1.stack || "",
      _v5 = (_v2 = _v1) && _v87.test(_v2.message) ? 1 : 0,
      _v6 = "number" == typeof (_v3 = _v1).framesToPop ? _v3.framesToPop : 0;
    try {
      return _v0(_v4, _v5, _v6);
    } catch {}
    return [];
  }
  let _v87 = /Minified React error #\d+;/i;
  function _v88(_v0) {
    return "u" > typeof WebAssembly && void 0 !== WebAssembly.Exception && _v0 instanceof WebAssembly.Exception;
  }
  function _v89(_v0, _v1, _v2, _v3, _v4) {
    let _v5;
    if ((0, _v44.isErrorEvent)(_v1) && _v1.error) return _v85(_v0, _v1.error);
    if ((0, _v44.isDOMError)(_v1) || (0, _v44.isDOMException)(_v1)) {
      if ("stack" in _v1) _v5 = _v85(_v0, _v1);else {
        let _v0 = _v1.name || ((0, _v44.isDOMError)(_v1) ? "DOMError" : "DOMException"),
          _v1 = _v1.message ? `${_v0}: ${_v1.message}` : _v0;
        _v5 = _v90(_v0, _v1, _v2, _v3), (0, _v27.addExceptionTypeValue)(_v5, _v1);
      }
      return "code" in _v1 && (_v5.tags = {
        ..._v5.tags,
        "DOMException.code": `${_v1.code}`
      }), _v5;
    }
    return (0, _v44.isError)(_v1) ? _v85(_v0, _v1) : ((0, _v44.isPlainObject)(_v1) || (0, _v44.isEvent)(_v1) ? _v5 = function (_v0, _v1, _v2, _v3) {
      let _v4 = (0, _v21.getClient)(),
        _v5 = _v4?.getOptions().normalizeDepth,
        _v6 = Object.values(_v1).find(_v0 => _v0 instanceof Error),
        _v7 = {
          __serialized__: (0, _v82.normalizeToSize)(_v1, _v5)
        };
      if (_v6) return {
        exception: {
          values: [_v84(_v0, _v6)]
        },
        extra: _v7
      };
      let _v8 = {
        exception: {
          values: [{
            type: (0, _v44.isEvent)(_v1) ? _v1.constructor.name : _v3 ? "UnhandledRejection" : "Error",
            value: function (_v0, {
              isUnhandledRejection: _v1
            }) {
              let _v2 = (0, _v32.extractExceptionKeysForMessage)(_v0),
                _v3 = _v1 ? "promise rejection" : "exception";
              if ((0, _v44.isErrorEvent)(_v0)) return `Event \`ErrorEvent\` captured as ${_v3} with message \`${_v0.message}\``;
              if ((0, _v44.isEvent)(_v0)) {
                let _v0 = function (_v0) {
                  try {
                    let _v0 = Object.getPrototypeOf(_v0);
                    return _v0 ? _v0.constructor.name : void 0;
                  } catch {}
                }(_v0);
                return `Event \`${_v0}\` (type=${_v0.type}) captured as ${_v3}`;
              }
              return `Object captured as ${_v3} with keys: ${_v2}`;
            }(_v1, {
              isUnhandledRejection: _v3
            })
          }]
        },
        extra: _v7
      };
      if (_v2) {
        let _v0 = _v86(_v0, _v2);
        _v0.length && (_v8.exception.values[0].stacktrace = {
          frames: _v0
        });
      }
      return _v8;
    }(_v0, _v1, _v2, _v4) : (_v5 = _v90(_v0, _v1, _v2, _v3), (0, _v27.addExceptionTypeValue)(_v5, `${_v1}`, void 0)), (0, _v27.addExceptionMechanism)(_v5, {
      synthetic: !0
    }), _v5);
  }
  function _v90(_v0, _v1, _v2, _v3) {
    let _v4 = {};
    if (_v3 && _v2) {
      let _v0 = _v86(_v0, _v2);
      _v0.length && (_v4.exception = {
        values: [{
          value: _v1,
          stacktrace: {
            frames: _v0
          }
        }]
      }), (0, _v27.addExceptionMechanism)(_v4, {
        synthetic: !0
      });
    }
    if ((0, _v44.isParameterizedString)(_v1)) {
      let {
        __sentry_template_string__: _v0,
        __sentry_template_values__: _v1
      } = _v1;
      return _v4.logentry = {
        message: _v0,
        params: _v1
      }, _v4;
    }
    return _v4.message = _v1, _v4;
  }
  var _v91 = _v0.i(0);
  let _v92 = _v17.GLOBAL_OBJ,
    _v93 = 0;
  function _v94(_v0, _v1 = {}) {
    if ("function" != typeof _v0) return _v0;
    try {
      let _v0 = _v0.__sentry_wrapped__;
      if (_v0) if ("function" == typeof _v0) return _v0;else return _v0;
      if ((0, _v32.getOriginalFunction)(_v0)) return _v0;
    } catch {
      return _v0;
    }
    let _v2 = function (..._v0) {
      try {
        let _v0 = _v0.map(_v0 => _v94(_v0, _v1));
        return _v0.apply(this, _v0);
      } catch (_v0) {
        throw _v93++, setTimeout(() => {
          _v93--;
        }), (0, _v21.withScope)(_v0 => {
          _v0.addEventProcessor(_v0 => (_v1.mechanism && ((0, _v27.addExceptionTypeValue)(_v0, void 0, void 0), (0, _v27.addExceptionMechanism)(_v0, _v1.mechanism)), _v0.extra = {
            ..._v0.extra,
            arguments: _v0
          }, _v0)), (0, _v20.captureException)(_v0);
        }), _v0;
      }
    };
    try {
      for (let _v0 in _v0) Object.prototype.hasOwnProperty.call(_v0, _v0) && (_v2[_v0] = _v0[_v0]);
    } catch {}
    (0, _v32.markFunctionWrapped)(_v2, _v0), (0, _v32.addNonEnumerableProperty)(_v0, "__sentry_wrapped__", _v2);
    try {
      Object.getOwnPropertyDescriptor(_v2, "name").configurable && Object.defineProperty(_v2, "name", {
        get: () => _v0.name
      });
    } catch {}
    return _v2;
  }
  function _v95() {
    let _v0 = (0, _v91.getLocationHref)(),
      {
        referrer: _v1
      } = _v92.document || {},
      {
        userAgent: _v2
      } = _v92.navigator || {};
    return {
      url: _v0,
      headers: {
        ...(_v1 && {
          Referer: _v1
        }),
        ...(_v2 && {
          "User-Agent": _v2
        })
      }
    };
  }
  class _v96 extends _v73 {
    constructor(_v0) {
      const _v1 = function (_v0) {
        return {
          release: "string" == typeof __SENTRY_RELEASE__ ? __SENTRY_RELEASE__ : _v92.SENTRY_RELEASE?.id,
          sendClientReports: !0,
          parentSpanIsAlwaysRootSpan: !0,
          ..._v0
        };
      }(_v0);
      _v19(_v1, "browser", ["browser"], _v92.SENTRY_SDK_SOURCE || "npm"), _v1._metadata?.sdk && (_v1._metadata.sdk.settings = {
        infer_ip: _v1.sendDefaultPii ? "auto" : "never",
        ..._v1._metadata.sdk.settings
      }), super(_v1);
      const {
          sendDefaultPii: _v2,
          sendClientReports: _v3,
          enableLogs: _v4,
          _experiments: _v5,
          enableMetrics: _v6
        } = this._options,
        _v7 = _v6 ?? _v5?.enableMetrics ?? !0;
      _v92.document && (_v3 || _v4 || _v7) && _v92.document.addEventListener("visibilitychange", () => {
        "hidden" === _v92.document.visibilityState && (_v3 && this._flushOutcomes(), _v4 && _v49(this), _v7 && _v51(this));
      }), _v2 && this.on("beforeSendSession", _v81);
    }
    eventFromException(_v0, _v1) {
      var _v2, _v3;
      let _v4;
      return _v2 = this._options.stackParser, _v3 = this._options.attachStacktrace, _v4 = _v89(_v2, _v0, _v1?.syntheticException || void 0, _v3), (0, _v27.addExceptionMechanism)(_v4), _v4.level = "error", _v1?.event_id && (_v4.event_id = _v1.event_id), (0, _v55.resolvedSyncPromise)(_v4);
    }
    eventFromMessage(_v0, _v1 = "info", _v2) {
      return function (_v0, _v1, _v2 = "info", _v3, _v4) {
        let _v5 = _v90(_v0, _v1, _v3?.syntheticException || void 0, _v4);
        return _v5.level = _v2, _v3?.event_id && (_v5.event_id = _v3.event_id), (0, _v55.resolvedSyncPromise)(_v5);
      }(this._options.stackParser, _v0, _v1, _v2, this._options.attachStacktrace);
    }
    _prepareEvent(_v0, _v1, _v2, _v3) {
      return _v0.platform = _v0.platform || "javascript", super._prepareEvent(_v0, _v1, _v2, _v3);
    }
  }
  let _v97 = {},
    _v98 = {};
  function _v99(_v0, _v1) {
    _v97[_v0] = _v97[_v0] || [], _v97[_v0].push(_v1);
  }
  function _v100(_v0, _v1) {
    if (!_v98[_v0]) {
      _v98[_v0] = !0;
      try {
        _v1();
      } catch (_v0) {
        _v22.DEBUG_BUILD && _v16.debug.error(`Error while instrumenting ${_v0}`, _v0);
      }
    }
  }
  function _v101(_v0, _v1) {
    let _v2 = _v0 && _v97[_v0];
    if (_v2) for (let _v0 of _v2) try {
      _v0(_v1);
    } catch (_v0) {
      _v22.DEBUG_BUILD && _v16.debug.error(`Error while triggering instrumentation handler.
Type: ${_v0}
Name: ${(0, _v36.getFunctionName)(_v0)}
Error:`, _v0);
    }
  }
  function _v102() {
    "console" in _v17.GLOBAL_OBJ && _v16.CONSOLE_LEVELS.forEach(function (_v0) {
      _v0 in _v17.GLOBAL_OBJ.console && (0, _v32.fill)(_v17.GLOBAL_OBJ.console, _v0, function (_v0) {
        return _v16.originalConsoleMethods[_v0] = _v0, function (..._v0) {
          _v101("console", {
            args: _v0,
            level: _v0
          });
          let _v1 = _v16.originalConsoleMethods[_v0];
          _v1?.apply(_v17.GLOBAL_OBJ.console, _v0);
        };
      });
    });
  }
  let _v103 = _v17.GLOBAL_OBJ;
  function _v104(_v0) {
    return _v0 && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(_v0.toString());
  }
  function _v105(_v0, _v1) {
    let _v2 = "fetch";
    _v99(_v2, _v0), _v100(_v2, () => _v106(void 0, _v1));
  }
  function _v106(_v0, _v1 = !1) {
    (!_v1 || function () {
      if ("string" == typeof EdgeRuntime) return !0;
      if (!function () {
        if (!("fetch" in _v103)) return !1;
        try {
          return new Headers(), new Request("data:,"), new Response(), !0;
        } catch {
          return !1;
        }
      }()) return !1;
      if (_v104(_v103.fetch)) return !0;
      let _v0 = !1,
        _v1 = _v103.document;
      if (_v1 && "function" == typeof _v1.createElement) try {
        let _v0 = _v1.createElement("iframe");
        _v0.hidden = !0, _v1.head.appendChild(_v0), _v0.contentWindow?.fetch && (_v0 = _v104(_v0.contentWindow.fetch)), _v1.head.removeChild(_v0);
      } catch (_v0) {
        _v22.DEBUG_BUILD && _v16.debug.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", _v0);
      }
      return _v0;
    }()) && (0, _v32.fill)(_v17.GLOBAL_OBJ, "fetch", function (_v0) {
      return function (..._v0) {
        let _v1 = Error(),
          {
            method: _v2,
            url: _v3
          } = function (_v0) {
            if (0 === _v0.length) return {
              method: "GET",
              url: ""
            };
            if (2 === _v0.length) {
              let [_v0, _v1] = _v0;
              return {
                url: _v110(_v0),
                method: _v109(_v1, "method") ? String(_v1.method).toUpperCase() : (0, _v44.isRequest)(_v0) && _v109(_v0, "method") ? String(_v0.method).toUpperCase() : "GET"
              };
            }
            let _v1 = _v0[0];
            return {
              url: _v110(_v1),
              method: _v109(_v1, "method") ? String(_v1.method).toUpperCase() : "GET"
            };
          }(_v0),
          _v4 = {
            args: _v0,
            fetchData: {
              method: _v2,
              url: _v3
            },
            startTimestamp: 0 * (0, _v46.timestampInSeconds)(),
            virtualError: _v1,
            headers: function (_v0) {
              let [_v1, _v2] = _v0;
              try {
                if ("object" == typeof _v2 && null !== _v2 && "headers" in _v2 && _v2.headers) return new Headers(_v2.headers);
                if ((0, _v44.isRequest)(_v1)) return new Headers(_v1.headers);
              } catch {}
            }(_v0)
          };
        return _v0 || _v101("fetch", {
          ..._v4
        }), _v0.apply(_v17.GLOBAL_OBJ, _v0).then(async _v0 => (_v0 ? _v0(_v0) : _v101("fetch", {
          ..._v4,
          endTimestamp: 0 * (0, _v46.timestampInSeconds)(),
          response: _v0
        }), _v0), _v0 => {
          _v101("fetch", {
            ..._v4,
            endTimestamp: 0 * (0, _v46.timestampInSeconds)(),
            error: _v0
          }), (0, _v44.isError)(_v0) && void 0 === _v0.stack && (_v0.stack = _v1.stack, (0, _v32.addNonEnumerableProperty)(_v0, "framesToPop", 1));
          let _v1 = (0, _v21.getClient)(),
            _v2 = _v1?.getOptions().enhanceFetchErrorMessages ?? "always";
          if (!1 !== _v2 && _v0 instanceof TypeError && ("Failed to fetch" === _v0.message || "Load failed" === _v0.message || "NetworkError when attempting to fetch resource." === _v0.message)) try {
            let _v0 = new URL(_v4.fetchData.url).host;
            "always" === _v2 ? _v0.message = `${_v0.message} (${_v0})` : (0, _v32.addNonEnumerableProperty)(_v0, "__sentry_fetch_url_host__", _v0);
          } catch {}
          throw _v0;
        });
      };
    });
  }
  async function _v107(_v0, _v1) {
    if (_v0?.body) {
      let _v0 = _v0.body,
        _v1 = _v0.getReader(),
        _v2 = setTimeout(() => {
          _v0.cancel().then(null, () => {});
        }, 0),
        _v3 = !0;
      for (; _v3;) {
        let _v0;
        try {
          _v0 = setTimeout(() => {
            _v0.cancel().then(null, () => {});
          }, 0);
          let {
            done: _v0
          } = await _v1.read();
          clearTimeout(_v0), _v0 && (_v1(), _v3 = !1);
        } catch {
          _v3 = !1;
        } finally {
          clearTimeout(_v0);
        }
      }
      clearTimeout(_v2), _v1.releaseLock(), _v0.cancel().then(null, () => {});
    }
  }
  function _v108(_v0) {
    let _v1;
    try {
      _v1 = _v0.clone();
    } catch {
      return;
    }
    _v107(_v1, () => {
      _v101("fetch-body-resolved", {
        endTimestamp: 0 * (0, _v46.timestampInSeconds)(),
        response: _v0
      });
    });
  }
  function _v109(_v0, _v1) {
    return !!_v0 && "object" == typeof _v0 && !!_v0[_v1];
  }
  function _v110(_v0) {
    return "string" == typeof _v0 ? _v0 : _v0 ? _v109(_v0, "url") ? _v0.url : _v0.toString ? _v0.toString() : "" : "";
  }
  function _v111(_v0, _v1) {
    let _v2 = (0, _v21.getClient)(),
      _v3 = (0, _v21.getIsolationScope)();
    if (!_v2) return;
    let {
      beforeBreadcrumb: _v4 = null,
      maxBreadcrumbs: _v5 = 100
    } = _v2.getOptions();
    if (_v5 <= 0) return;
    let _v6 = {
        timestamp: (0, _v46.dateTimestampInSeconds)(),
        ..._v0
      },
      _v7 = _v4 ? (0, _v16.consoleSandbox)(() => _v4(_v6, _v1)) : _v6;
    null !== _v7 && (_v2.emit && _v2.emit("beforeAddBreadcrumb", _v7, _v1), _v3.addBreadcrumb(_v7, _v5));
  }
  function _v112(_v0) {
    if (void 0 !== _v0) return _v0 >= 400 && _v0 < 500 ? "warning" : _v0 >= 500 ? "error" : void 0;
  }
  function _v113(_v0) {
    return "isRelative" in _v0;
  }
  function _v114(_v0, _v1) {
    let _v2 = 0 >= _v0.indexOf("://") && 0 !== _v0.indexOf("//"),
      _v3 = _v1 ?? (_v2 ? "thismessage:/" : void 0);
    try {
      if ("canParse" in URL && !URL.canParse(_v0, _v3)) return;
      let _v0 = new URL(_v0, _v3);
      if (_v2) return {
        isRelative: _v2,
        pathname: _v0.pathname,
        search: _v0.search,
        hash: _v0.hash
      };
      return _v0;
    } catch {}
  }
  function _v115(_v0) {
    if (!_v0) return {};
    let _v1 = _v0.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!_v1) return {};
    let _v2 = _v1[6] || "",
      _v3 = _v1[8] || "";
    return {
      host: _v1[4],
      path: _v1[5],
      protocol: _v1[2],
      search: _v2,
      hash: _v3,
      relative: _v1[5] + _v2 + _v3
    };
  }
  function _v116(_v0) {
    return _v0.split(/[?#]/, 1)[0];
  }
  function _v117(_v0, _v1 = !0) {
    if (_v0.startsWith("data:")) {
      let _v0 = _v0.match(/^data:([^;,]+)/),
        _v1 = _v0 ? _v0[1] : "text/plain",
        _v2 = _v0.includes(";base64,"),
        _v3 = _v0.indexOf(","),
        _v4 = "";
      if (_v1 && -1 !== _v3) {
        let _v0 = _v0.slice(_v3 + 1);
        _v4 = _v0.length > 10 ? `${_v0.slice(0, 10)}... [truncated]` : _v0;
      }
      return `data:${_v1}${_v2 ? ",base64" : ""}${_v4 ? `,${_v4}` : ""}`;
    }
    return _v0;
  }
  let _v118 = _v17.GLOBAL_OBJ;
  function _v119() {
    if (!_v118.document) return;
    let _v0 = _v101.bind(null, "dom"),
      _v1 = _v120(_v0, !0);
    _v118.document.addEventListener("click", _v1, !1), _v118.document.addEventListener("keypress", _v1, !1), ["EventTarget", "Node"].forEach(_v0 => {
      let _v1 = _v118[_v0]?.prototype;
      _v1?.hasOwnProperty?.("addEventListener") && ((0, _v32.fill)(_v1, "addEventListener", function (_v0) {
        return function (_v0, _v1, _v2) {
          if ("click" === _v0 || "keypress" == _v0) try {
            let _v0 = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {},
              _v1 = _v0[_v0] = _v0[_v0] || {
                refCount: 0
              };
            if (!_v1.handler) {
              let _v0 = _v120(_v0);
              _v1.handler = _v0, _v0.call(this, _v0, _v0, _v2);
            }
            _v1.refCount++;
          } catch {}
          return _v0.call(this, _v0, _v1, _v2);
        };
      }), (0, _v32.fill)(_v1, "removeEventListener", function (_v0) {
        return function (_v0, _v1, _v2) {
          if ("click" === _v0 || "keypress" == _v0) try {
            let _v0 = this.__sentry_instrumentation_handlers__ || {},
              _v1 = _v0[_v0];
            _v1 && (_v1.refCount--, _v1.refCount <= 0 && (_v0.call(this, _v0, _v1.handler, _v2), _v1.handler = void 0, delete _v0[_v0]), 0 === Object.keys(_v0).length && delete this.__sentry_instrumentation_handlers__);
          } catch {}
          return _v0.call(this, _v0, _v1, _v2);
        };
      }));
    });
  }
  function _v120(_v0, _v1 = !1) {
    return _v0 => {
      var _v1;
      if (!_v0 || _v0._sentryCaptured) return;
      let _v2 = function (_v0) {
        try {
          return _v0.target;
        } catch {
          return null;
        }
      }(_v0);
      if (_v1 = _v0.type, "keypress" === _v1 && (!_v2?.tagName || "INPUT" !== _v2.tagName && "TEXTAREA" !== _v2.tagName && !_v2.isContentEditable && 1)) return;
      (0, _v32.addNonEnumerableProperty)(_v0, "_sentryCaptured", !0), _v2 && !_v2._sentryId && (0, _v32.addNonEnumerableProperty)(_v2, "_sentryId", (0, _v27.uuid4)());
      let _v3 = "keypress" === _v0.type ? "input" : _v0.type;
      !function (_v0) {
        if (_v0.type !== _v3) return !1;
        try {
          if (!_v0.target || _v0.target._sentryId !== _v4) return !1;
        } catch {}
        return !0;
      }(_v0) && (_v0({
        event: _v0,
        name: _v3,
        global: _v1
      }), _v3 = _v0.type, _v4 = _v2 ? _v2._sentryId : void 0), clearTimeout(_v2), _v2 = _v118.setTimeout(() => {
        _v4 = void 0, _v3 = void 0;
      }, 0);
    };
  }
  let _v121 = "__sentry_xhr_v3__";
  function _v122(_v0) {
    _v99("xhr", _v0), _v100("xhr", _v123);
  }
  function _v123() {
    if (!_v118.XMLHttpRequest) return;
    let _v0 = XMLHttpRequest.prototype;
    _v0.open = new Proxy(_v0.open, {
      apply(_v0, _v1, _v2) {
        let _v3 = Error(),
          _v4 = 0 * (0, _v46.timestampInSeconds)(),
          _v5 = (0, _v44.isString)(_v2[0]) ? _v2[0].toUpperCase() : void 0,
          _v6 = function (_v0) {
            if ((0, _v44.isString)(_v0)) return _v0;
            try {
              return _v0.toString();
            } catch {}
          }(_v2[1]);
        if (!_v5 || !_v6) return _v0.apply(_v1, _v2);
        _v1[_v121] = {
          method: _v5,
          url: _v6,
          request_headers: {}
        }, "POST" === _v5 && _v6.match(/sentry_key/) && (_v1.__sentry_own_request__ = !0);
        let _v7 = () => {
          let _v0 = _v1[_v121];
          if (_v0 && 4 === _v1.readyState) {
            try {
              _v0.status_code = _v1.status;
            } catch {}
            _v101("xhr", {
              endTimestamp: 0 * (0, _v46.timestampInSeconds)(),
              startTimestamp: _v4,
              xhr: _v1,
              virtualError: _v3
            });
          }
        };
        return "onreadystatechange" in _v1 && "function" == typeof _v1.onreadystatechange ? _v1.onreadystatechange = new Proxy(_v1.onreadystatechange, {
          apply: (_v0, _v1, _v2) => (_v7(), _v0.apply(_v1, _v2))
        }) : _v1.addEventListener("readystatechange", _v7), _v1.setRequestHeader = new Proxy(_v1.setRequestHeader, {
          apply(_v0, _v1, _v2) {
            let [_v3, _v4] = _v2,
              _v5 = _v1[_v121];
            return _v5 && (0, _v44.isString)(_v3) && (0, _v44.isString)(_v4) && (_v5.request_headers[_v3.toLowerCase()] = _v4), _v0.apply(_v1, _v2);
          }
        }), _v0.apply(_v1, _v2);
      }
    }), _v0.send = new Proxy(_v0.send, {
      apply(_v0, _v1, _v2) {
        let _v3 = _v1[_v121];
        return _v3 && (void 0 !== _v2[0] && (_v3.body = _v2[0]), _v101("xhr", {
          startTimestamp: 0 * (0, _v46.timestampInSeconds)(),
          xhr: _v1
        })), _v0.apply(_v1, _v2);
      }
    });
  }
  function _v124(_v0) {
    let _v1 = "history";
    _v99(_v1, _v0), _v100(_v1, _v125);
  }
  function _v125() {
    function _v0(_v0) {
      return function (..._v0) {
        let _v1 = _v0.length > 2 ? _v0[2] : void 0;
        if (_v1) {
          let _v0 = _v5,
            _v1 = function (_v0) {
              try {
                return new URL(_v0, _v118.location.origin).toString();
              } catch {
                return _v0;
              }
            }(String(_v1));
          if (_v5 = _v1, _v0 === _v1) return _v0.apply(this, _v0);
          _v101("history", {
            from: _v0,
            to: _v1
          });
        }
        return _v0.apply(this, _v0);
      };
    }
    _v118.addEventListener("popstate", () => {
      let _v0 = _v118.location.href,
        _v1 = _v5;
      _v5 = _v0, _v1 === _v0 || _v101("history", {
        from: _v1,
        to: _v0
      });
    }), "history" in _v103 && _v103.history && ((0, _v32.fill)(_v118.history, "pushState", _v0), (0, _v32.fill)(_v118.history, "replaceState", _v0));
  }
  let _v126 = "u" < typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
    _v127 = "EventTarget,Window,Node,ApplicationCache,AudioTrackList,BroadcastChannel,ChannelMergerNode,CryptoOperation,EventSource,FileReader,HTMLUnknownElement,IDBDatabase,IDBRequest,IDBTransaction,KeyOperation,MediaController,MessagePort,ModalWindow,Notification,SVGElementInstance,Screen,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebSocket,WebSocketWorker,Worker,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload".split(",");
  function _v128(_v0) {
    return function (..._v0) {
      let _v1 = _v0[0];
      return _v0[0] = _v94(_v1, {
        mechanism: {
          handled: !1,
          type: `auto.browser.browserapierrors.${(0, _v36.getFunctionName)(_v0)}`
        }
      }), _v0.apply(this, _v0);
    };
  }
  function _v129(_v0) {
    return function (_v0) {
      return _v0.apply(this, [_v94(_v0, {
        mechanism: {
          data: {
            handler: (0, _v36.getFunctionName)(_v0)
          },
          handled: !1,
          type: "auto.browser.browserapierrors.requestAnimationFrame"
        }
      })]);
    };
  }
  function _v130(_v0) {
    return function (..._v0) {
      let _v1 = this;
      return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(_v0 => {
        _v0 in _v1 && "function" == typeof _v1[_v0] && (0, _v32.fill)(_v1, _v0, function (_v0) {
          let _v1 = {
              mechanism: {
                data: {
                  handler: (0, _v36.getFunctionName)(_v0)
                },
                handled: !1,
                type: `auto.browser.browserapierrors.xhr.${_v0}`
              }
            },
            _v2 = (0, _v32.getOriginalFunction)(_v0);
          return _v2 && (_v1.mechanism.data.handler = (0, _v36.getFunctionName)(_v2)), _v94(_v0, _v1);
        });
      }), _v0.apply(this, _v0);
    };
  }
  function _v131() {
    try {
      let _v0 = _v92.Intl;
      if (!_v0) return;
      let _v1 = _v0.DateTimeFormat().resolvedOptions();
      return {
        locale: _v1.locale,
        timezone: _v1.timeZone,
        calendar: _v1.calendar
      };
    } catch {
      return;
    }
  }
  let _v132 = null;
  function _v133(_v0) {
    let _v1 = "error";
    _v99(_v1, _v0), _v100(_v1, _v134);
  }
  function _v134() {
    _v132 = _v17.GLOBAL_OBJ.onerror, _v17.GLOBAL_OBJ.onerror = function (_v0, _v1, _v2, _v3, _v4) {
      return _v101("error", {
        column: _v3,
        error: _v4,
        line: _v2,
        msg: _v0,
        url: _v1
      }), !!_v132 && _v132.apply(this, arguments);
    }, _v17.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = !0;
  }
  let _v135 = null;
  function _v136(_v0) {
    let _v1 = "unhandledrejection";
    _v99(_v1, _v0), _v100(_v1, _v137);
  }
  function _v137() {
    _v135 = _v17.GLOBAL_OBJ.onunhandledrejection, _v17.GLOBAL_OBJ.onunhandledrejection = function (_v0) {
      return _v101("unhandledrejection", _v0), !_v135 || _v135.apply(this, arguments);
    }, _v17.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0;
  }
  function _v138(_v0) {
    _v126 && _v16.debug.log(`Global Handler attached: ${_v0}`);
  }
  function _v139() {
    let _v0 = (0, _v21.getClient)();
    return _v0?.getOptions() || {
      stackParser: () => [],
      attachStacktrace: !1
    };
  }
  function _v140(_v0) {
    return Array.isArray(_v0.errors);
  }
  function _v141(_v0, _v1, _v2) {
    _v0.mechanism = {
      handled: !0,
      type: "auto.core.linked_errors",
      ...(_v140(_v2) && {
        is_exception_group: !0
      }),
      ..._v0.mechanism,
      exception_id: _v1
    };
  }
  function _v142(_v0, _v1, _v2, _v3) {
    _v0.mechanism = {
      handled: !0,
      ..._v0.mechanism,
      type: "chained",
      source: _v1,
      exception_id: _v2,
      parent_id: _v3
    };
  }
  function _v143(_v0, _v1, _v2, _v3) {
    let _v4 = {
      filename: _v0,
      function: "<anonymous>" === _v1 ? _v36.UNKNOWN_FUNCTION : _v1,
      in_app: !0
    };
    return void 0 !== _v2 && (_v4.lineno = _v2), void 0 !== _v3 && (_v4.colno = _v3), _v4;
  }
  let _v144 = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
    _v145 = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
    _v146 = /\((\S*)(?::(\d+))(?::(\d+))\)/,
    _v147 = /at (.+?) ?\(data:(.+?),/,
    _v148 = [30, _v0 => {
      let _v1 = _v0.match(_v147);
      if (_v1) return {
        filename: `<data:${_v1[2]}>`,
        function: _v1[1]
      };
      let _v2 = _v144.exec(_v0);
      if (_v2) {
        let [, _v0, _v1, _v2] = _v2;
        return _v143(_v0, _v36.UNKNOWN_FUNCTION, +_v1, +_v2);
      }
      let _v3 = _v145.exec(_v0);
      if (_v3) {
        if (_v3[2]?.indexOf("eval") === 0) {
          let _v0 = _v146.exec(_v3[2]);
          _v0 && (_v3[2] = _v0[1], _v3[3] = _v0[2], _v3[4] = _v0[3]);
        }
        let [_v0, _v1] = _v153(_v3[1] || _v36.UNKNOWN_FUNCTION, _v3[2]);
        return _v143(_v1, _v0, _v3[3] ? +_v3[3] : void 0, _v3[4] ? +_v3[4] : void 0);
      }
    }],
    _v149 = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
    _v150 = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
    _v151 = [50, _v0 => {
      let _v1 = _v149.exec(_v0);
      if (_v1) {
        if (_v1[3] && _v1[3].indexOf(" > eval") > -1) {
          let _v0 = _v150.exec(_v1[3]);
          _v0 && (_v1[1] = _v1[1] || "eval", _v1[3] = _v0[1], _v1[4] = _v0[2], _v1[5] = "");
        }
        let _v0 = _v1[3],
          _v1 = _v1[1] || _v36.UNKNOWN_FUNCTION;
        return [_v1, _v0] = _v153(_v1, _v0), _v143(_v0, _v1, _v1[4] ? +_v1[4] : void 0, _v1[5] ? +_v1[5] : void 0);
      }
    }],
    _v152 = (0, _v36.createStackParser)(_v148, _v151),
    _v153 = (_v0, _v1) => {
      let _v2 = -1 !== _v0.indexOf("safari-extension"),
        _v3 = -1 !== _v0.indexOf("safari-web-extension");
      return _v2 || _v3 ? [-1 !== _v0.indexOf("@") ? _v0.split("@")[0] : _v36.UNKNOWN_FUNCTION, _v2 ? `safari-extension:${_v1}` : `safari-web-extension:${_v1}`] : [_v0, _v1];
    },
    _v154 = "u" < typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
    _v155 = {};
  function _v156(_v0, _v1 = function (_v0) {
    let _v1 = _v155[_v0];
    if (_v1) return _v1;
    let _v2 = _v118[_v0];
    if (_v104(_v2)) return _v155[_v0] = _v2.bind(_v118);
    let _v3 = _v118.document;
    if (_v3 && "function" == typeof _v3.createElement) try {
      let _v0 = _v3.createElement("iframe");
      _v0.hidden = !0, _v3.head.appendChild(_v0);
      let _v1 = _v0.contentWindow;
      _v1?.[_v0] && (_v2 = _v1[_v0]), _v3.head.removeChild(_v0);
    } catch (_v0) {
      _v154 && _v16.debug.warn(`Could not create sandbox iframe for ${_v0} check, bailing to window.${_v0}: `, _v0);
    }
    return _v2 ? _v155[_v0] = _v2.bind(_v118) : _v2;
  }("fetch")) {
    let _v2 = 0,
      _v3 = 0;
    async function _v4(_v0) {
      let _v1 = _v0.body.length;
      _v2 += _v1, _v3++;
      let _v2 = {
        body: _v0.body,
        method: "POST",
        referrerPolicy: "strict-origin",
        headers: _v0.headers,
        keepalive: _v2 <= 0 && _v3 < 15,
        ..._v0.fetchOptions
      };
      try {
        let _v0 = await _v1(_v0.url, _v2);
        return {
          statusCode: _v0.status,
          headers: {
            "x-sentry-rate-limits": _v0.headers.get("X-Sentry-Rate-Limits"),
            "retry-after": _v0.headers.get("Retry-After")
          }
        };
      } catch (_v0) {
        throw _v155.fetch = void 0, _v0;
      } finally {
        _v2 -= _v1, _v3--;
      }
    }
    return function (_v0, _v1, _v2 = _v58(_v0.bufferSize || 64)) {
      let _v3 = {};
      return {
        send: function (_v0) {
          let _v1 = [];
          if ((0, _v48.forEachEnvelopeItem)(_v0, (_v0, _v1) => {
            let _v2 = (0, _v48.envelopeItemTypeToDataCategory)(_v1);
            !function (_v0, _v1, _v2 = (0, _v59.safeDateNow)()) {
              return (_v0[_v1] || _v0.all || 0) > _v2;
            }(_v3, _v2) ? _v1.push(_v0) : _v0.recordDroppedEvent("ratelimit_backoff", _v2);
          }), 0 === _v1.length) return Promise.resolve({});
          let _v2 = (0, _v48.createEnvelope)(_v0[0], _v1),
            _v3 = _v0 => {
              if ((0, _v48.envelopeContainsItemType)(_v2, ["client_report"])) {
                _v22.DEBUG_BUILD && _v16.debug.warn(`Dropping client report. Will not send outcomes (reason: ${_v0}).`);
                return;
              }
              (0, _v48.forEachEnvelopeItem)(_v2, (_v0, _v1) => {
                _v0.recordDroppedEvent(_v0, (0, _v48.envelopeItemTypeToDataCategory)(_v1));
              });
            };
          return _v2.add(() => _v1({
            body: (0, _v48.serializeEnvelope)(_v2)
          }).then(_v0 => (413 === _v0.statusCode ? (_v22.DEBUG_BUILD && _v16.debug.error("Sentry responded with status code 413. Envelope was discarded due to exceeding size limits."), _v3("send_error")) : (_v22.DEBUG_BUILD && void 0 !== _v0.statusCode && (_v0.statusCode < 200 || _v0.statusCode >= 300) && _v16.debug.warn(`Sentry responded with status code ${_v0.statusCode} to sent event.`), _v3 = function (_v0, {
            statusCode: _v1,
            headers: _v2
          }, _v3 = (0, _v59.safeDateNow)()) {
            let _v4 = {
                ..._v0
              },
              _v5 = _v2?.["x-sentry-rate-limits"],
              _v6 = _v2?.["retry-after"];
            if (_v5) for (let _v0 of _v5.trim().split(",")) {
              let [_v0, _v1,,, _v2] = _v0.split(":", 5),
                _v3 = parseInt(_v0, 10),
                _v4 = (isNaN(_v3) ? 60 : _v3) * 0;
              if (_v1) for (let _v0 of _v1.split(";")) "metric_bucket" === _v0 ? (!_v2 || _v2.split(";").includes("custom")) && (_v4[_v0] = _v3 + _v4) : _v4[_v0] = _v3 + _v4;else _v4.all = _v3 + _v4;
            } else _v6 ? _v4.all = _v3 + function (_v0, _v1 = (0, _v59.safeDateNow)()) {
              let _v2 = parseInt(`${_v0}`, 10);
              if (!isNaN(_v2)) return 0 * _v2;
              let _v3 = Date.parse(`${_v0}`);
              return isNaN(_v3) ? 0 : _v3 - _v1;
            }(_v6, _v3) : 429 === _v1 && (_v4.all = _v3 + 0);
            return _v4;
          }(_v3, _v0)), _v0), _v0 => {
            throw _v3("network_error"), _v22.DEBUG_BUILD && _v16.debug.error("Encountered error running transport request:", _v0), _v0;
          })).then(_v0 => _v0, _v0 => {
            if (_v0 === _v57) return _v22.DEBUG_BUILD && _v16.debug.error("Skipped sending event because buffer is full."), _v3("queue_overflow"), Promise.resolve({});
            throw _v0;
          });
        },
        flush: _v0 => _v2.drain(_v0)
      };
    }(_v0, _v4, _v58(_v0.bufferSize || 40));
  }
  function _v157(_v0) {
    let _v1;
    return [((_v0 = {}) => ({
      ...((_v0 = {}) => {
        let _v1;
        return {
          name: "EventFilters",
          setup(_v0) {
            _v1 = _v30(_v0, _v0.getOptions());
          },
          processEvent: (_v0, _v1, _v2) => (_v1 || (_v1 = _v30(_v0, _v2.getOptions())), !function (_v0, _v1) {
            if (_v0.type) {
              if ("transaction" === _v0.type && function (_v0, _v1) {
                if (!_v1?.length) return !1;
                let _v2 = _v0.transaction;
                return !!_v2 && (0, _v28.stringMatchesSomePattern)(_v2, _v1);
              }(_v0, _v1.ignoreTransactions)) return _v22.DEBUG_BUILD && _v16.debug.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${(0, _v27.getEventDescription)(_v0)}`), !0;
            } else {
              var _v2, _v3, _v4;
              if (_v2 = _v0, _v3 = _v1.ignoreErrors, _v3?.length && _v26(_v2).some(_v0 => (0, _v28.stringMatchesSomePattern)(_v0, _v3))) return _v22.DEBUG_BUILD && _v16.debug.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${(0, _v27.getEventDescription)(_v0)}`), !0;
              if (_v4 = _v0, _v4.exception?.values?.length && !_v4.message && !_v4.exception.values.some(_v0 => _v0.stacktrace || _v0.type && "Error" !== _v0.type || _v0.value)) return _v22.DEBUG_BUILD && _v16.debug.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${(0, _v27.getEventDescription)(_v0)}`), !0;
              if (function (_v0, _v1) {
                if (!_v1?.length) return !1;
                let _v2 = _v31(_v0);
                return !!_v2 && (0, _v28.stringMatchesSomePattern)(_v2, _v1);
              }(_v0, _v1.denyUrls)) return _v22.DEBUG_BUILD && _v16.debug.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${(0, _v27.getEventDescription)(_v0)}.
Url: ${_v31(_v0)}`), !0;
              if (!function (_v0, _v1) {
                if (!_v1?.length) return !0;
                let _v2 = _v31(_v0);
                return !_v2 || (0, _v28.stringMatchesSomePattern)(_v2, _v1);
              }(_v0, _v1.allowUrls)) return _v22.DEBUG_BUILD && _v16.debug.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${(0, _v27.getEventDescription)(_v0)}.
Url: ${_v31(_v0)}`), !0;
            }
            return !1;
          }(_v0, _v1) ? _v0 : null)
        };
      })(_v0),
      name: "InboundFilters"
    }))(), {
      name: "FunctionToString",
      setupOnce() {
        _v1 = Function.prototype.toString;
        try {
          Function.prototype.toString = function (..._v0) {
            let _v1 = (0, _v32.getOriginalFunction)(this),
              _v2 = _v33.has((0, _v21.getClient)()) && void 0 !== _v1 ? _v1 : this;
            return _v1.apply(_v2, _v0);
          };
        } catch {}
      },
      setup(_v0) {
        _v33.set(_v0, !0);
      }
    }, {
      name: "ConversationId",
      setup(_v0) {
        _v0.on("spanStart", _v0 => {
          let _v1 = (0, _v21.getCurrentScope)().getScopeData(),
            _v2 = (0, _v21.getIsolationScope)().getScopeData(),
            _v3 = _v1.conversationId || _v2.conversationId;
          if (_v3) {
            let {
              op: _v0,
              data: _v1,
              description: _v2
            } = (0, _v35.spanToJSON)(_v0);
            if (!_v0?.startsWith("gen_ai.") && !_v1["ai.operationId"] && !_v2?.startsWith("ai.")) return;
            _v0.setAttribute(_v34.GEN_AI_CONVERSATION_ID_ATTRIBUTE, _v3);
          }
        });
      }
    }, ((_v0 = {}) => {
      let _v1 = {
        XMLHttpRequest: !0,
        eventTarget: !0,
        requestAnimationFrame: !0,
        setInterval: !0,
        setTimeout: !0,
        unregisterOriginalCallbacks: !1,
        ..._v0
      };
      return {
        name: "BrowserApiErrors",
        setupOnce() {
          _v1.setTimeout && (0, _v32.fill)(_v92, "setTimeout", _v128), _v1.setInterval && (0, _v32.fill)(_v92, "setInterval", _v128), _v1.requestAnimationFrame && (0, _v32.fill)(_v92, "requestAnimationFrame", _v129), _v1.XMLHttpRequest && "XMLHttpRequest" in _v92 && (0, _v32.fill)(XMLHttpRequest.prototype, "send", _v130);
          let _v0 = _v1.eventTarget;
          _v0 && (Array.isArray(_v0) ? _v0 : _v127).forEach(_v0 => {
            var _v1, _v2;
            let _v3;
            return _v1 = _v0, _v2 = _v1, _v3 = _v92[_v1]?.prototype, void (_v3?.hasOwnProperty?.("addEventListener") && ((0, _v32.fill)(_v3, "addEventListener", function (_v0) {
              return function (_v0, _v1, _v2) {
                var _v3, _v4, _v5, _v6;
                try {
                  _v3 = _v1, "function" == typeof _v3.handleEvent && (_v1.handleEvent = _v94(_v1.handleEvent, {
                    mechanism: {
                      data: {
                        handler: (0, _v36.getFunctionName)(_v1),
                        target: _v1
                      },
                      handled: !1,
                      type: "auto.browser.browserapierrors.handleEvent"
                    }
                  }));
                } catch {}
                return _v2.unregisterOriginalCallbacks && (_v4 = this, _v5 = _v0, _v6 = _v1, _v4 && "object" == typeof _v4 && "removeEventListener" in _v4 && "function" == typeof _v4.removeEventListener && _v4.removeEventListener(_v5, _v6)), _v0.apply(this, [_v0, _v94(_v1, {
                  mechanism: {
                    data: {
                      handler: (0, _v36.getFunctionName)(_v1),
                      target: _v1
                    },
                    handled: !1,
                    type: "auto.browser.browserapierrors.addEventListener"
                  }
                }), _v2]);
              };
            }), (0, _v32.fill)(_v3, "removeEventListener", function (_v0) {
              return function (_v0, _v1, _v2) {
                try {
                  let _v0 = _v1.__sentry_wrapped__;
                  _v0 && _v0.call(this, _v0, _v0, _v2);
                } catch {}
                return _v0.call(this, _v0, _v1, _v2);
              };
            })));
          });
        }
      };
    })(), ((_v0 = {}) => {
      let _v1 = {
        console: !0,
        dom: !0,
        fetch: !0,
        history: !0,
        sentry: !0,
        xhr: !0,
        ..._v0
      };
      return {
        name: "Breadcrumbs",
        setup(_v0) {
          var _v1, _v2, _v3, _v4, _v5, _v6, _v7;
          let _v8;
          _v1.console && (_v1 = _v0, _v99(_v8 = "console", function (_v0) {
            var _v1;
            if ((0, _v21.getClient)() !== _v1) return;
            let _v2 = {
              category: "console",
              data: {
                arguments: _v0.args,
                logger: "console"
              },
              level: "warn" === (_v1 = _v0.level) ? "warning" : ["fatal", "error", "warning", "log", "info", "debug"].includes(_v1) ? _v1 : "log",
              message: (0, _v28.safeJoin)(_v0.args, " ")
            };
            if ("assert" === _v0.level) if (!1 !== _v0.args[0]) return;else _v2.message = `Assertion failed: ${(0, _v28.safeJoin)(_v0.args.slice(1), " ") || "console.assert"}`, _v2.data.arguments = _v0.args.slice(1);
            _v111(_v2, {
              input: _v0.args,
              level: _v0.level
            });
          }), _v100(_v8, _v102)), _v1.dom && (_v99("dom", (_v2 = _v0, _v3 = _v1.dom, function (_v0) {
            let _v1, _v2;
            if ((0, _v21.getClient)() !== _v2) return;
            let _v3 = "object" == typeof _v3 ? _v3.serializeAttribute : void 0,
              _v4 = "object" == typeof _v3 && "number" == typeof _v3.maxStringLength ? _v3.maxStringLength : void 0;
            _v4 && _v4 > 0 && (_v126 && _v16.debug.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${_v4} was configured. Sentry will use 1024 instead.`), _v4 = 0), "string" == typeof _v3 && (_v3 = [_v3]);
            try {
              var _v5;
              let _v0 = _v0.event,
                _v1 = (_v5 = _v0) && _v5.target ? _v0.target : _v0;
              _v1 = (0, _v91.htmlTreeAsString)(_v1, {
                keyAttrs: _v3,
                maxStringLength: _v4
              }), _v2 = (0, _v91.getComponentName)(_v1);
            } catch {
              _v1 = "<unknown>";
            }
            if (0 === _v1.length) return;
            let _v6 = {
              category: `ui.${_v0.name}`,
              message: _v1
            };
            _v2 && (_v6.data = {
              "ui.component_name": _v2
            }), _v111(_v6, {
              event: _v0.event,
              name: _v0.name,
              global: _v0.global
            });
          })), _v100("dom", _v119)), _v1.xhr && _v122((_v4 = _v0, function (_v0) {
            if ((0, _v21.getClient)() !== _v4) return;
            let {
                startTimestamp: _v1,
                endTimestamp: _v2
              } = _v0,
              _v3 = _v0.xhr[_v121];
            if (!_v1 || !_v2 || !_v3) return;
            let {
                method: _v4,
                url: _v5,
                status_code: _v6,
                body: _v7
              } = _v3,
              _v8 = {
                xhr: _v0.xhr,
                input: _v7,
                startTimestamp: _v1,
                endTimestamp: _v2
              },
              _v9 = {
                category: "xhr",
                data: {
                  method: _v4,
                  url: _v5,
                  status_code: _v6
                },
                type: "http",
                level: _v112(_v6)
              };
            _v4.emit("beforeOutgoingRequestBreadcrumb", _v9, _v8), _v111(_v9, _v8);
          })), _v1.fetch && _v105((_v5 = _v0, function (_v0) {
            if ((0, _v21.getClient)() !== _v5) return;
            let {
              startTimestamp: _v1,
              endTimestamp: _v2
            } = _v0;
            if (_v2 && (!_v0.fetchData.url.match(/sentry_key/) || "POST" !== _v0.fetchData.method)) if (_v0.error) {
              let _v0 = {
                  data: _v0.error,
                  input: _v0.args,
                  startTimestamp: _v1,
                  endTimestamp: _v2
                },
                _v1 = {
                  category: "fetch",
                  data: _v0.fetchData,
                  level: "error",
                  type: "http"
                };
              _v5.emit("beforeOutgoingRequestBreadcrumb", _v1, _v0), _v111(_v1, _v0);
            } else {
              let _v0 = _v0.response,
                _v1 = {
                  ..._v0.fetchData,
                  status_code: _v0?.status
                },
                _v2 = {
                  input: _v0.args,
                  response: _v0,
                  startTimestamp: _v1,
                  endTimestamp: _v2
                },
                _v3 = {
                  category: "fetch",
                  data: _v1,
                  type: "http",
                  level: _v112(_v1.status_code)
                };
              _v5.emit("beforeOutgoingRequestBreadcrumb", _v3, _v2), _v111(_v3, _v2);
            }
          })), _v1.history && _v124((_v6 = _v0, function (_v0) {
            if ((0, _v21.getClient)() !== _v6) return;
            let _v1 = _v0.from,
              _v2 = _v0.to,
              _v3 = _v115(_v92.location.href),
              _v4 = _v1 ? _v115(_v1) : void 0,
              _v5 = _v115(_v2);
            _v4?.path || (_v4 = _v3), _v3.protocol === _v5.protocol && _v3.host === _v5.host && (_v2 = _v5.relative), _v3.protocol === _v4.protocol && _v3.host === _v4.host && (_v1 = _v4.relative), _v111({
              category: "navigation",
              data: {
                from: _v1,
                to: _v2
              }
            });
          })), _v1.sentry && _v0.on("beforeSendEvent", (_v7 = _v0, function (_v0) {
            (0, _v21.getClient)() === _v7 && _v111({
              category: `sentry.${"transaction" === _v0.type ? "transaction" : "event"}`,
              event_id: _v0.event_id,
              level: _v0.level,
              message: (0, _v27.getEventDescription)(_v0)
            }, {
              event: _v0
            });
          }));
        }
      };
    })(), ((_v0 = {}) => {
      let _v1 = {
        onerror: !0,
        onunhandledrejection: !0,
        ..._v0
      };
      return {
        name: "GlobalHandlers",
        setupOnce() {
          Error.stackTraceLimit = 50;
        },
        setup(_v0) {
          var _v1, _v2;
          _v1.onerror && (_v1 = _v0, _v133(_v0 => {
            var _v1, _v2, _v3, _v4;
            let _v5,
              _v6,
              _v7,
              _v8,
              _v9,
              {
                stackParser: _v10,
                attachStacktrace: _v11
              } = _v139();
            if ((0, _v21.getClient)() !== _v1 || _v93 > 0) return;
            let {
                msg: _v12,
                url: _v13,
                line: _v14,
                column: _v15,
                error: _v16
              } = _v0,
              _v17 = (_v1 = _v89(_v10, _v16 || _v12, void 0, _v11, !1), _v2 = _v13, _v3 = _v14, _v4 = _v15, 0 === (_v9 = (_v8 = (_v7 = (_v6 = (_v5 = _v1.exception = _v1.exception || {}).values = _v5.values || [])[0] = _v6[0] || {}).stacktrace = _v7.stacktrace || {}).frames = _v8.frames || []).length && _v9.push({
                colno: _v4,
                lineno: _v3,
                filename: function (_v0) {
                  if ((0, _v44.isString)(_v0) && 0 !== _v0.length) return _v0.startsWith("data:") ? `<${_v117(_v0, !1)}>` : _v0;
                }(_v2) ?? (0, _v91.getLocationHref)(),
                function: _v36.UNKNOWN_FUNCTION,
                in_app: !0
              }), _v1);
            _v17.level = "error", (0, _v20.captureEvent)(_v17, {
              originalException: _v16,
              mechanism: {
                handled: !1,
                type: "auto.browser.global_handlers.onerror"
              }
            });
          }), _v138("onerror")), _v1.onunhandledrejection && (_v2 = _v0, _v136(_v0 => {
            var _v1;
            let {
              stackParser: _v2,
              attachStacktrace: _v3
            } = _v139();
            if ((0, _v21.getClient)() !== _v2 || _v93 > 0) return;
            let _v4 = function (_v0) {
                if ((0, _v44.isPrimitive)(_v0)) return _v0;
                try {
                  if ("reason" in _v0) return _v0.reason;
                  if ("detail" in _v0 && "reason" in _v0.detail) return _v0.detail.reason;
                } catch {}
                return _v0;
              }(_v0),
              _v5 = (0, _v44.isPrimitive)(_v4) ? (_v1 = _v4, {
                exception: {
                  values: [{
                    type: "UnhandledRejection",
                    value: `Non-Error promise rejection captured with value: ${String(_v1)}`
                  }]
                }
              }) : _v89(_v2, _v4, void 0, _v3, !0);
            _v5.level = "error", (0, _v20.captureEvent)(_v5, {
              originalException: _v4,
              mechanism: {
                handled: !1,
                type: "auto.browser.global_handlers.onunhandledrejection"
              }
            });
          }), _v138("onunhandledrejection"));
        }
      };
    })(), ((_v0 = {}) => {
      let _v1 = _v0.limit || 5,
        _v2 = _v0.key || "cause";
      return {
        name: "LinkedErrors",
        preprocessEvent(_v0, _v1, _v2) {
          !function (_v0, _v1, _v2, _v3, _v4, _v5) {
            if (!_v4.exception?.values || !_v5 || !(0, _v44.isInstanceOf)(_v5.originalException, Error)) return;
            let _v6 = _v4.exception.values.length > 0 ? _v4.exception.values[_v4.exception.values.length - 1] : void 0;
            _v6 && (_v4.exception.values = function _v0(_v1, _v2, _v3, _v4, _v5, _v6, _v7, _v8) {
              if (_v6.length >= _v3 + 1) return _v6;
              let _v9 = [..._v6];
              if ((0, _v44.isInstanceOf)(_v4[_v5], Error)) {
                _v141(_v7, _v8, _v4);
                let _v0 = _v1(_v2, _v4[_v5]),
                  _v1 = _v9.length;
                _v142(_v0, _v5, _v1, _v8), _v9 = _v0(_v1, _v2, _v3, _v4[_v5], _v5, [_v0, ..._v9], _v0, _v1);
              }
              return _v140(_v4) && _v4.errors.forEach((_v0, _v1) => {
                if ((0, _v44.isInstanceOf)(_v0, Error)) {
                  _v141(_v7, _v8, _v4);
                  let _v0 = _v1(_v2, _v0),
                    _v1 = _v9.length;
                  _v142(_v0, `errors[${_v1}]`, _v1, _v8), _v9 = _v0(_v1, _v2, _v3, _v0, _v5, [_v0, ..._v9], _v0, _v1);
                }
              }), _v9;
            }(_v0, _v1, _v3, _v5.originalException, _v2, _v4.exception.values, _v6, 0));
          }(_v84, _v2.getOptions().stackParser, _v2, _v1, _v0, _v1);
        }
      };
    })(), {
      name: "Dedupe",
      processEvent(_v0) {
        if (_v0.type) return _v0;
        try {
          var _v1, _v2, _v3, _v4, _v5, _v6;
          let _v0, _v1, _v2, _v3;
          if (_v1 = _v0, (_v2 = _v1) && (_v3 = _v1, _v4 = _v2, _v0 = _v3.message, _v1 = _v4.message, (_v0 || _v1) && (!_v0 || _v1) && (_v0 || !_v1) && _v0 === _v1 && _v38(_v3, _v4) && _v37(_v3, _v4) && 1 || (_v5 = _v1, _v6 = _v2, _v2 = _v39(_v6), _v3 = _v39(_v5), _v2 && _v3 && _v2.type === _v3.type && _v2.value === _v3.value && _v38(_v5, _v6) && _v37(_v5, _v6)))) return _v22.DEBUG_BUILD && _v16.debug.warn("Event dropped due to being a duplicate of previously captured event."), null;
        } catch {}
        return _v1 = _v0;
      }
    }, {
      name: "HttpContext",
      preprocessEvent(_v0) {
        if (!_v92.navigator && !_v92.location && !_v92.document) return;
        let _v1 = _v95(),
          _v2 = {
            ..._v1.headers,
            ..._v0.request?.headers
          };
        _v0.request = {
          ..._v1,
          ..._v0.request,
          headers: _v2
        };
      }
    }, {
      name: "CultureContext",
      preprocessEvent(_v0) {
        let _v1 = _v131();
        _v1 && (_v0.contexts = {
          ..._v0.contexts,
          culture: {
            ..._v1,
            ..._v0.contexts?.culture
          }
        });
      },
      processSegmentSpan(_v0) {
        let _v1 = _v131();
        _v1 && (_v0.attributes = {
          "culture.locale": _v1.locale,
          "culture.timezone": _v1.timezone,
          "culture.calendar": _v1.calendar,
          ..._v0.attributes
        });
      }
    }, ((_v0 = {}) => {
      let _v1 = _v0.lifecycle ?? "route";
      return {
        name: "BrowserSession",
        setupOnce() {
          if (void 0 === _v92.document) {
            _v126 && _v16.debug.warn("Using the `browserSessionIntegration` in non-browser environments is not supported.");
            return;
          }
          (0, _v20.startSession)({
            ignoreDuration: !0
          }), (0, _v20.captureSession)();
          let _v0 = (0, _v21.getIsolationScope)(),
            _v1 = _v0.getUser();
          _v0.addScopeListener(_v0 => {
            let _v1 = _v0.getUser();
            (_v1?.id !== _v1?.id || _v1?.ip_address !== _v1?.ip_address) && ((0, _v20.captureSession)(), _v1 = _v1);
          }), "route" === _v1 && _v124(({
            from: _v0,
            to: _v1
          }) => {
            _v0 !== _v1 && ((0, _v20.startSession)({
              ignoreDuration: !0
            }), (0, _v20.captureSession)());
          });
        }
      };
    })()];
  }
  var _v158 = _v0.i(0),
    _v159 = _v0.i(0),
    _v160 = _v0.i(0),
    _v161 = _v0.i(0),
    _v162 = _v0.i(0),
    _v163 = _v0.i(0),
    _v164 = _v0.i(0);
  let _v165 = {
    idleTimeout: 0,
    finalTimeout: 0,
    childSpanTimeout: 0
  };
  function _v166(_v0, _v1 = {}) {
    var _v2;
    let _v3,
      _v4,
      _v5 = new Map(),
      _v6 = !1,
      _v7 = "externalFinish",
      _v8 = !_v1.disableAutoFinish,
      _v9 = [],
      {
        idleTimeout: _v10 = _v165.idleTimeout,
        finalTimeout: _v11 = _v165.finalTimeout,
        childSpanTimeout: _v12 = _v165.childSpanTimeout,
        beforeSpanEnd: _v13,
        trimIdleSpanEndTimestamp: _v14 = !0
      } = _v1,
      _v15 = (0, _v21.getClient)();
    if (!_v15 || !(0, _v160.hasSpansEnabled)()) {
      let _v0 = new _v161.SentryNonRecordingSpan(),
        _v1 = {
          sample_rate: "0",
          sampled: "false",
          ...(0, _v47.getDynamicSamplingContextFromSpan)(_v0)
        };
      return (0, _v47.freezeDscOnSpan)(_v0, _v1), _v0;
    }
    let _v16 = (0, _v21.getCurrentScope)(),
      _v17 = (0, _v35.getActiveSpan)(),
      _v18 = (_v2 = _v0, _v3 = (0, _v164.startInactiveSpan)(_v2), (0, _v45._setSpanForScope)((0, _v21.getCurrentScope)(), _v3), _v22.DEBUG_BUILD && _v16.debug.log("[Tracing] Started span is an idle span"), _v3);
    function _v19() {
      _v4 && (clearTimeout(_v4), _v4 = void 0);
    }
    function _v20(_v0) {
      _v19(), _v4 = setTimeout(() => {
        !_v6 && 0 === _v5.size && _v8 && (_v7 = "idleTimeout", _v18.end(_v0));
      }, _v10);
    }
    function _v21(_v0) {
      _v4 = setTimeout(() => {
        !_v6 && _v8 && (_v7 = "heartbeatFailed", _v18.end(_v0));
      }, _v12);
    }
    function _v22(_v0) {
      _v6 = !0, _v5.clear(), _v9.forEach(_v0 => _v0()), (0, _v45._setSpanForScope)(_v16, _v17);
      let _v1 = (0, _v35.spanToJSON)(_v18),
        {
          start_timestamp: _v2
        } = _v1;
      if (!_v2) return;
      _v1.data[_v34.SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON] || _v18.setAttribute(_v34.SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON, _v7);
      let _v3 = _v1.status;
      _v3 && "unknown" !== _v3 || _v18.setStatus({
        code: _v163.SPAN_STATUS_OK
      }), _v16.debug.log(`[Tracing] Idle span "${_v1.op}" finished`);
      let _v4 = (0, _v35.getSpanDescendants)(_v18).filter(_v0 => _v0 !== _v18),
        _v5 = 0;
      _v4.forEach(_v0 => {
        _v0.isRecording() && (_v0.setStatus({
          code: _v163.SPAN_STATUS_ERROR,
          message: "cancelled"
        }), _v0.end(_v0), _v22.DEBUG_BUILD && _v16.debug.log("[Tracing] Cancelling span since span ended early", JSON.stringify(_v0, void 0, 2)));
        let {
            timestamp: _v1 = 0,
            start_timestamp: _v2 = 0
          } = (0, _v35.spanToJSON)(_v0),
          _v3 = _v2 <= _v0,
          _v4 = _v1 - _v2 <= (_v11 + _v10) / 0;
        if (_v22.DEBUG_BUILD) {
          let _v0 = JSON.stringify(_v0, void 0, 2);
          _v3 ? _v4 || _v16.debug.log("[Tracing] Discarding span since it finished after idle span final timeout", _v0) : _v16.debug.log("[Tracing] Discarding span since it happened after idle span was finished", _v0);
        }
        (!_v4 || !_v3) && ((0, _v35.removeChildSpanFromSpan)(_v18, _v0), _v5++);
      }), _v5 > 0 && _v18.setAttribute("sentry.idle_span_discarded_spans", _v5);
    }
    return _v18.end = new Proxy(_v18.end, {
      apply(_v0, _v1, _v2) {
        if (_v13 && _v13(_v18), _v1 instanceof _v161.SentryNonRecordingSpan) return;
        let [_v3, ..._v4] = _v2,
          _v5 = _v3 || (0, _v46.timestampInSeconds)(),
          _v6 = (0, _v35.spanTimeInputToSeconds)(_v5),
          _v7 = (0, _v35.getSpanDescendants)(_v18).filter(_v0 => _v0 !== _v18),
          _v8 = (0, _v35.spanToJSON)(_v18);
        if (!_v7.length || !_v14) return _v22(_v6), Reflect.apply(_v0, _v1, [_v6, ..._v4]);
        let _v9 = _v15.getOptions().ignoreSpans,
          _v10 = _v7?.reduce((_v0, _v1) => {
            let _v2 = (0, _v35.spanToJSON)(_v1);
            return !_v2.timestamp || _v9 && (0, _v63.shouldIgnoreSpan)(_v2, _v9) ? _v0 : _v0 ? Math.max(_v0, _v2.timestamp) : _v2.timestamp;
          }, void 0),
          _v11 = _v8.start_timestamp,
          _v12 = Math.min(_v11 ? _v11 + _v11 / 0 : 1 / 0, Math.max(_v11 || -1 / 0, Math.min(_v6, _v10 || 1 / 0)));
        return _v22(_v12), Reflect.apply(_v0, _v1, [_v12, ..._v4]);
      }
    }), _v9.push(_v15.on("spanStart", _v0 => {
      var _v1;
      !(_v6 || _v0 === _v18 || (0, _v35.spanToJSON)(_v0).timestamp || _v0 instanceof _v162.SentrySpan && _v0.isStandaloneSpan()) && (0, _v35.getSpanDescendants)(_v18).includes(_v0) && (_v1 = _v0.spanContext().spanId, _v19(), _v5.set(_v1, !0), _v21((0, _v46.timestampInSeconds)() + _v12 / 0));
    })), _v9.push(_v15.on("spanEnd", _v0 => {
      if (!_v6) {
        var _v1;
        _v1 = _v0.spanContext().spanId, _v5.has(_v1) && _v5.delete(_v1), 0 === _v5.size && _v20((0, _v46.timestampInSeconds)() + _v10 / 0);
      }
    })), _v9.push(_v15.on("idleSpanEnableAutoFinish", _v0 => {
      _v0 === _v18 && (_v8 = !0, _v20(), _v5.size && _v21());
    })), _v1.disableAutoFinish || _v20(), setTimeout(() => {
      _v6 || (_v18.setStatus({
        code: _v163.SPAN_STATUS_ERROR,
        message: "deadline_exceeded"
      }), _v7 = "finalTimeout", _v18.end());
    }, _v11), _v18;
  }
  let _v167 = !1;
  var _v168 = _v0.i(0),
    _v169 = _v0.i(0),
    _v170 = _v0.i(0);
  let _v171 = (_v0, _v1, _v2, _v3) => {
      let _v4, _v5;
      return _v0 => {
        if (_v1.value >= 0 && (_v0 || _v3) && ((_v5 = _v1.value - (_v4 ?? 0)) || void 0 === _v4)) {
          var _v1;
          _v4 = _v1.value, _v1.delta = _v5, _v1 = _v1.value, _v1.rating = _v1 > _v2[1] ? "poor" : _v1 > _v2[0] ? "needs-improvement" : "good", _v0(_v1);
        }
      };
    },
    _v172 = (_v0 = !0) => {
      let _v1 = _v118.performance?.getEntriesByType?.("navigation")[0];
      if (!_v0 || _v1 && _v1.responseStart > 0 && _v1.responseStart < performance.now()) return _v1;
    },
    _v173 = () => {
      let _v0 = _v172();
      return _v0?.activationStart ?? 0;
    };
  function _v174(_v0, _v1, _v2) {
    _v118.document && _v118.addEventListener(_v0, _v1, _v2);
  }
  function _v175(_v0, _v1, _v2) {
    _v118.document && _v118.removeEventListener(_v0, _v1, _v2);
  }
  let _v176 = -1,
    _v177 = new Set(),
    _v178 = _v0 => {
      if (("pagehide" === _v0.type || _v118.document?.visibilityState === "hidden") && _v176 > -1) {
        if ("visibilitychange" === _v0.type || "pagehide" === _v0.type) for (let _v0 of _v177) _v0();
        isFinite(_v176) || (_v176 = "visibilitychange" === _v0.type ? _v0.timeStamp : 0, _v175("prerenderingchange", _v178, !0));
      }
    },
    _v179 = () => {
      if (_v118.document && _v176 < 0) {
        let _v0 = _v173();
        _v176 = (_v118.document.prerendering ? void 0 : globalThis.performance.getEntriesByType("visibility-state").filter(_v0 => "hidden" === _v0.name && _v0.startTime > _v0)[0]?.startTime) ?? (_v118.document?.visibilityState !== "hidden" || _v118.document?.prerendering ? 1 / 0 : 0), _v174("visibilitychange", _v178, !0), _v174("pagehide", _v178, !0), _v174("prerenderingchange", _v178, !0);
      }
      return {
        get firstHiddenTime() {
          return _v176;
        },
        onHidden(_v0) {
          _v177.add(_v0);
        }
      };
    },
    _v180 = (_v0, _v1 = -1) => {
      let _v2 = _v172(),
        _v3 = "navigate";
      return _v2 && (_v118.document?.prerendering || _v173() > 0 ? _v3 = "prerender" : _v118.document?.wasDiscarded ? _v3 = "restore" : _v2.type && (_v3 = _v2.type.replace(/_/g, "-"))), {
        name: _v0,
        value: _v1,
        rating: "good",
        delta: 0,
        entries: [],
        id: `v5-${Date.now()}-${Math.floor(Math.random() * (0 - 1)) + 0}`,
        navigationType: _v3
      };
    },
    _v181 = new WeakMap();
  function _v182(_v0, _v1) {
    try {
      return _v181.get(_v0) || _v181.set(_v0, new _v1()), _v181.get(_v0);
    } catch (_v0) {
      return new _v1();
    }
  }
  class _v183 {
    constructor() {
      _v183.prototype.__init.call(this), _v183.prototype.__init2.call(this);
    }
    __init() {
      this._sessionValue = 0;
    }
    __init2() {
      this._sessionEntries = [];
    }
    _processEntry(_v0) {
      if (_v0.hadRecentInput) return;
      let _v1 = this._sessionEntries[0],
        _v2 = this._sessionEntries[this._sessionEntries.length - 1];
      this._sessionValue && _v1 && _v2 && _v0.startTime - _v2.startTime < 0 && _v0.startTime - _v1.startTime < 0 ? (this._sessionValue += _v0.value, this._sessionEntries.push(_v0)) : (this._sessionValue = _v0.value, this._sessionEntries = [_v0]), this._onAfterProcessingUnexpectedShift?.(_v0);
    }
  }
  let _v184 = (_v0, _v1, _v2 = {}) => {
      try {
        if (PerformanceObserver.supportedEntryTypes.includes(_v0)) {
          let _v0 = new PerformanceObserver(_v0 => {
            Promise.resolve().then(() => {
              _v1(_v0.getEntries());
            });
          });
          return _v0.observe({
            type: _v0,
            buffered: !0,
            ..._v2
          }), _v0;
        }
      } catch {}
    },
    _v185 = _v0 => {
      let _v1 = !1;
      return () => {
        _v1 || (_v0(), _v1 = !0);
      };
    },
    _v186 = _v0 => {
      _v118.document?.prerendering ? addEventListener("prerenderingchange", () => _v0(), !0) : _v0();
    },
    _v187 = [0, 0],
    _v188 = [.1, .25],
    _v189 = 0,
    _v190 = 1 / 0,
    _v191 = 0,
    _v192 = _v0 => {
      _v0.forEach(_v0 => {
        _v0.interactionId && (_v190 = Math.min(_v190, _v0.interactionId), _v189 = (_v191 = Math.max(_v191, _v0.interactionId)) ? (_v191 - _v190) / 7 + 1 : 0);
      });
    },
    _v193 = () => _v6 ? _v189 : performance.interactionCount || 0,
    _v194 = 0;
  class _v195 {
    constructor() {
      _v195.prototype.__init.call(this), _v195.prototype.__init2.call(this);
    }
    __init() {
      this._longestInteractionList = [];
    }
    __init2() {
      this._longestInteractionMap = new Map();
    }
    _resetInteractions() {
      _v194 = _v193(), this._longestInteractionList.length = 0, this._longestInteractionMap.clear();
    }
    _estimateP98LongestInteraction() {
      let _v0 = Math.min(this._longestInteractionList.length - 1, Math.floor((_v193() - _v194) / 50));
      return this._longestInteractionList[_v0];
    }
    _processEntry(_v0) {
      if (this._onBeforeProcessingEntry?.(_v0), !(_v0.interactionId || "first-input" === _v0.entryType)) return;
      let _v1 = this._longestInteractionList.at(-1),
        _v2 = this._longestInteractionMap.get(_v0.interactionId);
      if (_v2 || this._longestInteractionList.length < 10 || _v0.duration > _v1._latency) {
        if (_v2 ? _v0.duration > _v2._latency ? (_v2.entries = [_v0], _v2._latency = _v0.duration) : _v0.duration === _v2._latency && _v0.startTime === _v2.entries[0].startTime && _v2.entries.push(_v0) : (_v2 = {
          id: _v0.interactionId,
          entries: [_v0],
          _latency: _v0.duration
        }, this._longestInteractionMap.set(_v2.id, _v2), this._longestInteractionList.push(_v2)), this._longestInteractionList.sort((_v0, _v1) => _v1._latency - _v0._latency), this._longestInteractionList.length > 10) for (let _v0 of this._longestInteractionList.splice(10)) this._longestInteractionMap.delete(_v0.id);
        this._onAfterProcessingINPCandidate?.(_v2);
      }
    }
  }
  let _v196 = _v0 => {
      let _v1 = _v118.requestIdleCallback || _v118.setTimeout;
      _v118.document?.visibilityState === "hidden" ? _v0() : (_v174("visibilitychange", _v0 = _v185(_v0), {
        once: !0,
        capture: !0
      }), _v174("pagehide", _v0, {
        once: !0,
        capture: !0
      }), _v1(() => {
        _v0(), _v175("visibilitychange", _v0, {
          capture: !0
        }), _v175("pagehide", _v0, {
          capture: !0
        });
      }));
    },
    _v197 = [200, 500];
  class _v198 {
    _processEntry(_v0) {
      this._onBeforeProcessingEntry?.(_v0);
    }
  }
  let _v199 = [0, 0],
    _v200 = [800, 0],
    _v201 = _v0 => {
      _v118.document?.prerendering ? _v186(() => _v201(_v0)) : _v118.document?.readyState !== "complete" ? addEventListener("load", () => _v201(_v0), !0) : setTimeout(_v0);
    },
    _v202 = {},
    _v203 = {};
  function _v204(_v0, _v1 = !1) {
    return _v213("cls", _v0, _v209, _v7, _v1);
  }
  function _v205(_v0, _v1 = !1) {
    return _v213("lcp", _v0, _v210, _v8, _v1);
  }
  function _v206(_v0) {
    return _v213("inp", _v0, _v212, _v10);
  }
  function _v207(_v0, _v1) {
    var _v2;
    let _v3;
    return _v214(_v0, _v1), _v203[_v0] || (_v3 = {}, "event" === (_v2 = _v0) && (_v3.durationThreshold = 0), _v184(_v2, _v0 => {
      _v208(_v2, {
        entries: _v0
      });
    }, _v3), _v203[_v0] = !0), _v215(_v0, _v1);
  }
  function _v208(_v0, _v1) {
    let _v2 = _v202[_v0];
    if (_v2?.length) for (let _v0 of _v2) try {
      _v0(_v1);
    } catch (_v0) {
      _v154 && _v16.debug.error(`Error while triggering instrumentation handler.
Type: ${_v0}
Name: ${(0, _v36.getFunctionName)(_v0)}
Error:`, _v0);
    }
  }
  function _v209() {
    return ((_v0, _v1 = {}) => {
      ((_v0, _v1 = {}) => {
        _v186(() => {
          let _v0,
            _v1 = _v179(),
            _v2 = _v180("FCP"),
            _v3 = _v184("paint", _v0 => {
              for (let _v0 of _v0) "first-contentful-paint" === _v0.name && (_v3.disconnect(), _v0.startTime < _v1.firstHiddenTime && (_v2.value = Math.max(_v0.startTime - _v173(), 0), _v2.entries.push(_v0), _v0(!0)));
            });
          _v3 && (_v0 = _v171(_v0, _v2, _v187, _v1.reportAllChanges));
        });
      })(_v185(() => {
        let _v0,
          _v1 = _v180("CLS", 0),
          _v2 = _v179(),
          _v3 = _v182(_v1, _v183),
          _v4 = _v0 => {
            for (let _v0 of _v0) _v3._processEntry(_v0);
            _v3._sessionValue > _v1.value && (_v1.value = _v3._sessionValue, _v1.entries = _v3._sessionEntries, _v0());
          },
          _v5 = _v184("layout-shift", _v4);
        _v5 && (_v0 = _v171(_v0, _v1, _v188, _v1.reportAllChanges), _v2.onHidden(() => {
          _v4(_v5.takeRecords()), _v0(!0);
        }), _v118?.setTimeout?.(_v0));
      }));
    })(_v0 => {
      _v208("cls", {
        metric: _v0
      }), _v7 = _v0;
    }, {
      reportAllChanges: !0
    });
  }
  function _v210() {
    return ((_v0, _v1 = {}) => {
      _v186(() => {
        let _v0,
          _v1 = _v179(),
          _v2 = _v180("LCP"),
          _v3 = _v182(_v1, _v198),
          _v4 = _v0 => {
            for (let _v0 of (_v1.reportAllChanges || (_v0 = _v0.slice(-1)), _v0)) _v3._processEntry(_v0), _v0.startTime < _v1.firstHiddenTime && (_v2.value = Math.max(_v0.startTime - _v173(), 0), _v2.entries = [_v0], _v0());
          },
          _v5 = _v184("largest-contentful-paint", _v4);
        if (_v5) {
          _v0 = _v171(_v0, _v2, _v199, _v1.reportAllChanges);
          let _v0 = _v185(() => {
              _v4(_v5.takeRecords()), _v5.disconnect(), _v0(!0);
            }),
            _v1 = _v0 => {
              _v0.isTrusted && (_v196(_v0), _v175(_v0.type, _v1, {
                capture: !0
              }));
            };
          for (let _v0 of ["keydown", "click", "visibilitychange"]) _v174(_v0, _v1, {
            capture: !0
          });
        }
      });
    })(_v0 => {
      _v208("lcp", {
        metric: _v0
      }), _v8 = _v0;
    }, {
      reportAllChanges: !0
    });
  }
  function _v211() {
    return ((_v0, _v1 = {}) => {
      let _v2 = _v180("TTFB"),
        _v3 = _v171(_v0, _v2, _v200, _v1.reportAllChanges);
      _v201(() => {
        let _v0 = _v172();
        _v0 && (_v2.value = Math.max(_v0.responseStart - _v173(), 0), _v2.entries = [_v0], _v3(!0));
      });
    })(_v0 => {
      _v208("ttfb", {
        metric: _v0
      }), _v9 = _v0;
    });
  }
  function _v212() {
    return ((_v0, _v1 = {}) => {
      if (!(globalThis.PerformanceEventTiming && "interactionId" in PerformanceEventTiming.prototype)) return;
      let _v2 = _v179();
      _v186(() => {
        let _v0;
        "interactionCount" in performance || _v6 || (_v6 = _v184("event", _v192, {
          type: "event",
          buffered: !0,
          durationThreshold: 0
        }));
        let _v1 = _v180("INP"),
          _v2 = _v182(_v1, _v195),
          _v3 = _v0 => {
            _v196(() => {
              for (let _v0 of _v0) _v2._processEntry(_v0);
              let _v0 = _v2._estimateP98LongestInteraction();
              _v0 && _v0._latency !== _v1.value && (_v1.value = _v0._latency, _v1.entries = _v0.entries, _v0());
            });
          },
          _v4 = _v184("event", _v3, {
            durationThreshold: _v1.durationThreshold ?? 40
          });
        _v0 = _v171(_v0, _v1, _v197, _v1.reportAllChanges), _v4 && (_v4.observe({
          type: "first-input",
          buffered: !0
        }), _v2.onHidden(() => {
          _v3(_v4.takeRecords()), _v0(!0);
        }));
      });
    })(_v0 => {
      _v208("inp", {
        metric: _v0
      }), _v10 = _v0;
    });
  }
  function _v213(_v0, _v1, _v2, _v3, _v4 = !1) {
    let _v5;
    return _v214(_v0, _v1), _v203[_v0] || (_v5 = _v2(), _v203[_v0] = !0), _v3 && _v1({
      metric: _v3
    }), _v215(_v0, _v1, _v4 ? _v5 : void 0);
  }
  function _v214(_v0, _v1) {
    _v202[_v0] = _v202[_v0] || [], _v202[_v0].push(_v1);
  }
  function _v215(_v0, _v1, _v2) {
    return () => {
      _v2 && _v2();
      let _v0 = _v202[_v0];
      if (!_v0) return;
      let _v1 = _v0.indexOf(_v1);
      -1 !== _v1 && _v0.splice(_v1, 1);
    };
  }
  function _v216(_v0) {
    return "number" == typeof _v0 && isFinite(_v0);
  }
  function _v217(_v0, _v1, _v2, {
    ..._v3
  }) {
    let _v4 = (0, _v35.spanToJSON)(_v0).start_timestamp;
    return _v4 && _v4 > _v1 && "function" == typeof _v0.updateStartTime && _v0.updateStartTime(_v1), (0, _v164.withActiveSpan)(_v0, () => {
      let _v0 = (0, _v164.startInactiveSpan)({
        startTime: _v1,
        ..._v3
      });
      return _v0 && _v0.end(_v2), _v0;
    });
  }
  function _v218(_v0) {
    let _v1,
      _v2 = (0, _v21.getClient)();
    if (!_v2) return;
    let {
        name: _v3,
        transaction: _v4,
        attributes: _v5,
        startTime: _v6
      } = _v0,
      {
        release: _v7,
        environment: _v8,
        sendDefaultPii: _v9
      } = _v2.getOptions(),
      _v10 = _v2.getIntegrationByName("Replay"),
      _v11 = _v10?.getReplayId(),
      _v12 = (0, _v21.getCurrentScope)(),
      _v13 = _v12.getUser(),
      _v14 = void 0 !== _v13 ? _v13.email || _v13.id || _v13.ip_address : void 0;
    try {
      _v1 = _v12.getScopeData().contexts.profile.profile_id;
    } catch {}
    let _v15 = {
      release: _v7,
      environment: _v8,
      user: _v14 || void 0,
      profile_id: _v1 || void 0,
      replay_id: _v11 || void 0,
      transaction: _v4,
      "user_agent.original": _v118.navigator?.userAgent,
      "client.address": _v9 ? "{{auto}}" : void 0,
      ..._v5
    };
    return (0, _v164.startInactiveSpan)({
      name: _v3,
      attributes: _v15,
      startTime: _v6,
      experimental: {
        standalone: !0
      }
    });
  }
  function _v219() {
    return _v118.addEventListener && _v118.performance;
  }
  function _v220(_v0) {
    return _v0 / 0;
  }
  function _v221(_v0) {
    try {
      return PerformanceObserver.supportedEntryTypes.includes(_v0);
    } catch {
      return !1;
    }
  }
  function _v222(_v0, _v1) {
    let _v2,
      _v3,
      _v4 = !1;
    function _v5(_v0) {
      !_v4 && _v3 && _v1(_v0, _v3.spanContext().spanId, _v3), _v4 = !0;
    }
    _v174("visibilitychange", _v2 = _v0 => {
      ("pagehide" === _v0.type || _v118.document?.visibilityState === "hidden") && (() => {
        _v5("pagehide");
      })(_v0);
    }, {
      capture: !0,
      once: !0
    }), _v174("pagehide", _v2, {
      capture: !0,
      once: !0
    });
    let _v6 = _v0.on("beforeStartNavigationSpan", (_v0, _v1) => {
        _v1?.isRedirect || (_v5("navigation"), _v6(), _v7());
      }),
      _v7 = _v0.on("afterStartPageLoadSpan", _v0 => {
        _v3 = _v0, _v7();
      });
  }
  let _v223 = [],
    _v224 = new Map(),
    _v225 = new Map(),
    _v226 = {
      click: "click",
      pointerdown: "click",
      pointerup: "click",
      mousedown: "click",
      mouseup: "click",
      touchstart: "click",
      touchend: "click",
      mouseover: "hover",
      mouseout: "hover",
      mouseenter: "hover",
      mouseleave: "hover",
      pointerover: "hover",
      pointerout: "hover",
      pointerenter: "hover",
      pointerleave: "hover",
      dragstart: "drag",
      dragend: "drag",
      drag: "drag",
      dragenter: "drag",
      dragleave: "drag",
      dragover: "drag",
      drop: "drag",
      keydown: "press",
      keyup: "press",
      keypress: "press",
      input: "press"
    },
    _v227 = ({
      metric: _v0
    }) => {
      if (void 0 == _v0.value) return;
      let _v1 = _v220(_v0.value);
      if (_v1 > 60) return;
      let _v2 = _v0.entries.find(_v0 => _v0.duration === _v0.value && _v226[_v0.name]);
      if (!_v2) return;
      let {
          interactionId: _v3
        } = _v2,
        _v4 = _v226[_v2.name],
        _v5 = _v220((0, _v46.browserPerformanceTimeOrigin)() + _v2.startTime),
        _v6 = (0, _v35.getActiveSpan)(),
        _v7 = _v6 ? (0, _v35.getRootSpan)(_v6) : void 0,
        _v8 = null != _v3 ? _v224.get(_v3) : void 0,
        _v9 = _v8?.span || _v7,
        _v10 = _v9 ? (0, _v35.spanToJSON)(_v9).description : (0, _v21.getCurrentScope)().getScopeData().transactionName,
        _v11 = _v218({
          name: _v8?.elementName || (0, _v91.htmlTreeAsString)(_v2.target),
          transaction: _v10,
          attributes: {
            [_v34.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.browser.inp",
            [_v34.SEMANTIC_ATTRIBUTE_SENTRY_OP]: `ui.interaction.${_v4}`,
            [_v34.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME]: _v2.duration
          },
          startTime: _v5
        });
      _v11 && (_v11.addEvent("inp", {
        [_v34.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT]: "millisecond",
        [_v34.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE]: _v0.value
      }), _v11.end(_v5 + _v1));
    };
  var _v228 = _v0.i(0);
  function _v229(_v0) {
    return null != _v0 && _v0 > 0 && _v0 <= 0;
  }
  function _v230(_v0) {
    return _v0 ? (((0, _v46.browserPerformanceTimeOrigin)() || performance.timeOrigin) + _v0) / 0 : _v0;
  }
  function _v231(_v0) {
    let _v1 = {};
    if (void 0 != _v0.nextHopProtocol) {
      let {
        name: _v0,
        version: _v1
      } = function (_v0) {
        let _v1 = "unknown",
          _v2 = "unknown",
          _v3 = "";
        for (let _v0 of _v0) {
          if ("/" === _v0) {
            [_v1, _v2] = _v0.split("/");
            break;
          }
          if (!isNaN(Number(_v0))) {
            _v1 = "h" === _v3 ? "http" : _v3, _v2 = _v0.split(_v3)[1];
            break;
          }
          _v3 += _v0;
        }
        return _v3 === _v0 && (_v1 = _v3), {
          name: _v1,
          version: _v2
        };
      }(_v0.nextHopProtocol);
      _v1["network.protocol.version"] = _v1, _v1["network.protocol.name"] = _v0;
    }
    return (0, _v46.browserPerformanceTimeOrigin)() || _v219()?.timeOrigin ? Object.fromEntries(Object.entries({
      ..._v1,
      "http.request.redirect_start": _v230(_v0.redirectStart),
      "http.request.redirect_end": _v230(_v0.redirectEnd),
      "http.request.worker_start": _v230(_v0.workerStart),
      "http.request.fetch_start": _v230(_v0.fetchStart),
      "http.request.domain_lookup_start": _v230(_v0.domainLookupStart),
      "http.request.domain_lookup_end": _v230(_v0.domainLookupEnd),
      "http.request.connect_start": _v230(_v0.connectStart),
      "http.request.secure_connection_start": _v230(_v0.secureConnectionStart),
      "http.request.connection_end": _v230(_v0.connectEnd),
      "http.request.request_start": _v230(_v0.requestStart),
      "http.request.response_start": _v230(_v0.responseStart),
      "http.request.response_end": _v230(_v0.responseEnd),
      "http.request.time_to_first_byte": null != _v0.responseStart ? _v0.responseStart / 0 : void 0
    }).filter(([, _v0]) => null != _v0)) : _v1;
  }
  let _v232 = 0,
    _v233 = {};
  function _v234(_v0, _v1, _v2, _v3, _v4 = _v2) {
    var _v5;
    let _v6 = _v1["secureConnection" === (_v5 = _v2) ? "connectEnd" : "fetch" === _v5 ? "domainLookupStart" : `${_v5}End`],
      _v7 = _v1[`${_v2}Start`];
    _v7 && _v6 && _v217(_v0, _v3 + _v220(_v7), _v3 + _v220(_v6), {
      op: `browser.${_v4}`,
      name: _v1.name,
      attributes: {
        [_v34.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ui.browser.metrics",
        ...("redirect" === _v2 && null != _v1.redirectCount ? {
          "http.redirect_count": _v1.redirectCount
        } : {})
      }
    });
  }
  function _v235(_v0) {
    let {
        name: _v1,
        op: _v2,
        origin: _v3,
        metricName: _v4,
        value: _v5,
        attributes: _v6,
        parentSpan: _v7,
        reportEvent: _v8,
        startTime: _v9,
        endTime: _v10
      } = _v0,
      _v11 = (0, _v21.getCurrentScope)().getScopeData().transactionName,
      _v12 = {
        [_v34.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: _v3,
        [_v34.SEMANTIC_ATTRIBUTE_SENTRY_OP]: _v2,
        [_v34.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME]: 0,
        [`browser.web_vital.${_v4}.value`]: _v5,
        "sentry.transaction": _v11,
        "user_agent.original": _v118.navigator?.userAgent,
        ..._v6
      };
    _v7 && (0, _v35.spanToStreamedSpanJSON)(_v7).attributes?.[_v34.SEMANTIC_ATTRIBUTE_SENTRY_OP] === "pageload" && (_v12["sentry.pageload.span_id"] = _v7.spanContext().spanId), _v8 && (_v12[`browser.web_vital.${_v4}.report_event`] = _v8);
    let _v13 = (0, _v164.startInactiveSpan)({
      name: _v1,
      attributes: _v12,
      startTime: _v9,
      parentSpan: _v7
    });
    _v13 && _v13.end(_v10 ?? _v9);
  }
  let _v236 = "sentry_previous_trace";
  function _v237(_v0) {
    return 1 === _v0.traceFlags;
  }
  var _v238 = _v0.i(0),
    _v239 = _v0.i(0);
  function _v240(_v0 = {}) {
    let _v1 = _v0.client || (0, _v21.getClient)();
    if (!(0, _v20.isEnabled)() || !_v1) return {};
    let _v2 = (0, _v43.getMainCarrier)(),
      _v3 = (0, _v239.getAsyncContextStrategy)(_v2);
    if (_v3.getTraceData) return _v3.getTraceData(_v0);
    let _v4 = _v0.scope || (0, _v21.getCurrentScope)(),
      _v5 = _v0.span || (0, _v35.getActiveSpan)();
    if (!_v5 && (0, _v21.hasExternalPropagationContext)()) return {};
    let _v6 = _v5 ? (0, _v35.spanToTraceHeader)(_v5) : function (_v0) {
        let {
          traceId: _v1,
          sampled: _v2,
          propagationSpanId: _v3
        } = _v0.getPropagationContext();
        return (0, _v170.generateSentryTraceHeader)(_v1, _v3, _v2);
      }(_v4),
      _v7 = _v5 ? (0, _v47.getDynamicSamplingContextFromSpan)(_v5) : (0, _v47.getDynamicSamplingContextFromScope)(_v1, _v4),
      _v8 = (0, _v238.dynamicSamplingContextToSentryBaggageHeader)(_v7);
    if (!_v170.TRACEPARENT_REGEXP.test(_v6)) return _v16.debug.warn("Invalid sentry-trace data. Cannot generate trace data"), {};
    let _v9 = {
      "sentry-trace": _v6,
      baggage: _v8
    };
    return _v0.propagateTraceparent && (_v9.traceparent = _v5 ? (0, _v35.spanToTraceparentHeader)(_v5) : function (_v0) {
      let {
        traceId: _v1,
        sampled: _v2,
        propagationSpanId: _v3
      } = _v0.getPropagationContext();
      return (0, _v170.generateTraceparentHeader)(_v1, _v3, _v2);
    }(_v4)), _v9;
  }
  function _v241(_v0) {
    return "string" == typeof _v0 && _v0.split(",").some(_v0 => _v0.trim().startsWith(_v238.SENTRY_BAGGAGE_KEY_PREFIX));
  }
  function _v242(_v0, _v1, _v2, _v3) {
    let _v4 = {
      url: _v117(_v0),
      type: "fetch",
      "http.method": _v2,
      [_v34.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: _v3,
      [_v34.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "http.client"
    };
    return _v1 && (_v113(_v1) || (_v4["http.url"] = _v117(_v1.href), _v4["server.address"] = _v1.host), _v1.search && (_v4["http.query"] = _v1.search), _v1.hash && (_v4["http.fragment"] = _v1.hash)), _v4;
  }
  function _v243(_v0) {
    try {
      return new URL(_v0, _v92.location.origin).href;
    } catch {
      return;
    }
  }
  function _v244(_v0) {
    try {
      return new Headers(_v0);
    } catch {
      return;
    }
  }
  Symbol.for("sentry__originalRequestBody");
  let _v245 = new WeakMap(),
    _v246 = new Map(),
    _v247 = {
      traceFetch: !0,
      traceXHR: !0,
      enableHTTPTimings: !0,
      trackFetchStreamPerformance: !1
    };
  function _v248(_v0, _v1) {
    let {
      url: _v2
    } = (0, _v35.spanToJSON)(_v0).data;
    if (!_v2 || "string" != typeof _v2) return;
    let _v3 = () => void setTimeout(_v4);
    if ((0, _v168.hasSpanStreamingEnabled)(_v1)) {
      let _v0 = _v0.end.bind(_v0);
      _v0.end = _v0 => {
        let _v1 = _v0 ?? (0, _v46.timestampInSeconds)(),
          _v2 = !1,
          _v3 = () => {
            _v2 || (_v2 = !0, setTimeout(_v4), _v0(_v1), clearTimeout(_v4));
          };
        _v3 = _v3;
        let _v4 = setTimeout(_v3, 300);
      };
    }
    let _v4 = _v207("resource", ({
      entries: _v0
    }) => {
      _v0.forEach(_v0 => {
        "resource" === _v0.entryType && "initiatorType" in _v0 && "string" == typeof _v0.nextHopProtocol && ("fetch" === _v0.initiatorType || "xmlhttprequest" === _v0.initiatorType) && _v0.name.endsWith(_v2) && (_v0.setAttributes(_v231(_v0)), _v3());
      });
    });
  }
  let _v249 = /Googlebot|Google-InspectionTool|Storebot-Google|Bingbot|Slurp|DuckDuckBot|Baiduspider|YandexBot|Facebot|facebookexternalhit|LinkedInBot|Twitterbot|Applebot/i;
  function _v250() {
    let _v0 = _v92.navigator;
    return !!_v0?.userAgent && _v249.test(_v0.userAgent);
  }
  let _v251 = {
    ..._v165,
    instrumentNavigation: !0,
    instrumentPageLoad: !0,
    markBackgroundSpan: !0,
    enableLongTask: !0,
    enableLongAnimationFrame: !0,
    enableInp: !0,
    ignoreResourceSpans: [],
    ignorePerformanceApiSpans: [],
    detectRedirects: !0,
    linkPreviousTrace: "in-memory",
    consistentTraceSampling: !1,
    enableReportPageLoaded: !1,
    _experiments: {},
    ..._v247
  };
  function _v252(_v0, _v1, _v2) {
    _v0.emit("startPageLoadSpan", _v1, _v2), (0, _v21.getCurrentScope)().setTransactionName(_v1.name);
    let _v3 = _v0[_v256];
    return _v3 && _v0.emit("afterStartPageLoadSpan", _v3), _v3;
  }
  function _v253(_v0, _v1, _v2) {
    let {
      url: _v3,
      isRedirect: _v4
    } = _v2 || {};
    _v0.emit("beforeStartNavigationSpan", _v1, {
      isRedirect: _v4
    }), _v0.emit("startNavigationSpan", _v1, {
      isRedirect: _v4
    });
    let _v5 = (0, _v21.getCurrentScope)();
    return _v5.setTransactionName(_v1.name), _v3 && !_v4 && _v5.setSDKProcessingMetadata({
      normalizedRequest: {
        ..._v95(),
        url: _v3
      }
    }), _v0[_v256];
  }
  function _v254(_v0) {
    let _v1 = _v92.document,
      _v2 = _v1?.querySelector(`meta[name=${_v0}]`);
    return _v2?.getAttribute("content") || void 0;
  }
  function _v255(_v0) {
    let _v1 = _v92.performance?.getEntriesByType?.("navigation")[0],
      _v2 = _v1?.serverTiming?.find(_v0 => _v0.name === _v0);
    return _v2?.description;
  }
  let _v256 = "_sentry_idleSpan";
  function _v257(_v0, _v1) {
    (0, _v32.addNonEnumerableProperty)(_v0, _v256, _v1);
  }
  let _v258 = _v17.GLOBAL_OBJ,
    _v259 = null,
    _v260 = new Map(),
    _v261 = new Map();
  function _v262(_v0) {
    let _v1 = _v0.split("/").filter(Boolean),
      _v2 = 0;
    for (let _v0 of _v1) if (_v0.startsWith(":")) {
      let _v0 = _v0.substring(1);
      _v0.endsWith("*?") ? _v2 += 0 : _v0.endsWith("*") ? _v2 += 100 : _v2 += 10;
    }
    return _v1.length > 0 && (_v2 += 1 / _v1.length), _v2;
  }
  function _v263(_v0) {
    if (_v260.has(_v0)) return _v260.get(_v0) ?? null;
    try {
      let _v0 = new RegExp(_v0);
      return _v260.set(_v0, _v0), _v0;
    } catch (_v0) {
      return _v159.DEBUG_BUILD && _v16.debug.warn("Could not compile regex", {
        regexString: _v0,
        error: _v0
      }), null;
    }
  }
  function _v264() {
    if (!_v258?._sentryRouteManifest || "string" != typeof _v258._sentryRouteManifest) return null;
    let _v0 = _v258._sentryRouteManifest;
    if (_v259 && _v13 === _v0) return _v259;
    _v260.clear(), _v261.clear();
    let _v1 = {
      staticRoutes: [],
      dynamicRoutes: [],
      isrRoutes: []
    };
    try {
      if (_v1 = JSON.parse(_v0), !Array.isArray(_v1.staticRoutes) || !Array.isArray(_v1.dynamicRoutes)) return null;
      return _v259 = _v1, _v13 = _v0, _v1;
    } catch {
      return _v159.DEBUG_BUILD && _v16.debug.warn("Could not extract route manifest"), null;
    }
  }
  let _v265 = _v0 => {
    let _v1 = _v264();
    if (!_v1) return;
    let _v2 = _v0.length > 1 && _v0.endsWith("/") ? _v0.slice(0, -1) : _v0;
    if (_v261.has(_v2)) return _v261.get(_v2);
    let {
      staticRoutes: _v3,
      dynamicRoutes: _v4
    } = _v1;
    if (!Array.isArray(_v3) || !Array.isArray(_v4)) return;
    let _v5 = function (_v0, _v1, _v2) {
      let _v3 = [];
      if (_v1.some(_v0 => _v0.path === _v0)) return _v3;
      for (let _v0 of _v2) if (_v0.regex) {
        let _v0 = _v263(_v0.regex);
        _v0?.test(_v0) && _v3.push(_v0.path);
      }
      if (!_v0.startsWith("/:")) {
        for (let _v0 of _v2) if (_v0.hasOptionalPrefix && _v0.regex) {
          let _v0 = "/" === _v0 ? "/SENTRY_OPTIONAL_PREFIX" : `/SENTRY_OPTIONAL_PREFIX${_v0}`,
            _v1 = _v263(_v0.regex);
          _v1?.test(_v0) && _v3.push(_v0.path);
        }
      }
      return _v3;
    }(_v2, _v3, _v4).sort((_v0, _v1) => _v262(_v0) - _v262(_v1))[0];
    return _v261.set(_v2, _v5), _v5;
  };
  function _v266(_v0) {
    return _v0.length > 1 && _v0.endsWith("/") ? _v0.slice(0, -1) : _v0;
  }
  let _v267 = "incomplete-app-router-transaction",
    _v268 = "router-patch",
    _v269 = {
      current: void 0
    },
    _v270 = _v17.GLOBAL_OBJ,
    _v271 = _v17.GLOBAL_OBJ;
  function _v272(_v0) {
    try {
      return new URL(_v0, "http://example.com/").pathname;
    } catch {
      return "/";
    }
  }
  let _v273 = new WeakSet();
  function _v274(_v0, _v1, _v2) {
    _v273.has(_v1) || (_v273.add(_v1), ["back", "forward", "push", "replace"].forEach(_v0 => {
      _v1?.[_v0] && (_v1[_v0] = new Proxy(_v1[_v0], {
        apply(_v0, _v1, _v2) {
          if ("router-patch" !== _v268) return _v0.apply(_v1, _v2);
          let _v3 = _v267,
            _v4 = {
              [_v34.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "navigation",
              [_v34.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.navigation.nextjs.app_router_instrumentation",
              [_v34.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "url"
            },
            _v5 = _v2[0],
            _v6 = _v15.default.env._sentryBasePath ?? _v271._sentryBasePath,
            _v7 = _v6 && "string" == typeof _v5 && !_v5.startsWith(_v6) ? `${_v6}${_v5}` : _v5;
          "push" === _v0 ? (_v3 = _v266(_v272(_v7)), _v4["navigation.type"] = "router.push") : "replace" === _v0 ? (_v3 = _v266(_v272(_v7)), _v4["navigation.type"] = "router.replace") : "back" === _v0 ? _v4["navigation.type"] = "router.back" : "forward" === _v0 && (_v4["navigation.type"] = "router.forward");
          let _v8 = _v265(_v3);
          return _v2.current = _v253(_v0, {
            name: _v8 ?? _v3,
            attributes: {
              ..._v4,
              [_v34.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: _v8 ? "route" : "url"
            }
          }), _v0.apply(_v1, _v2);
        }
      }));
    }));
  }
  var _v275 = _v0.i(0);
  let _v276 = _v275.default.events ? _v275.default : _v275.default.default,
    _v277 = /^(\S+:\\|\/?)([\s\S]*?)((?:\.{1,2}|[^/\\]+?|)(\.[^./\\]*|))(?:[/\\]*)$/;
  function _v278(..._v0) {
    let _v1 = "",
      _v2 = !1;
    for (let _v0 = _v0.length - 1; _v0 >= -1 && !_v2; _v0--) {
      let _v0 = _v0 >= 0 ? _v0[_v0] : "/";
      _v0 && (_v1 = `${_v0}/${_v1}`, _v2 = "/" === _v0.charAt(0));
    }
    return _v1 = function (_v0, _v1) {
      let _v2 = 0;
      for (let _v0 = _v0.length - 1; _v0 >= 0; _v0--) {
        let _v0 = _v0[_v0];
        "." === _v0 ? _v0.splice(_v0, 1) : ".." === _v0 ? (_v0.splice(_v0, 1), _v2++) : _v2 && (_v0.splice(_v0, 1), _v2--);
      }
      if (_v1) for (; _v2--;) _v0.unshift("..");
      return _v0;
    }(_v1.split("/").filter(_v0 => !!_v0), !_v2).join("/"), (_v2 ? "/" : "") + _v1 || ".";
  }
  function _v279(_v0) {
    let _v1 = 0;
    for (; _v1 < _v0.length && "" === _v0[_v1]; _v1++);
    let _v2 = _v0.length - 1;
    for (; _v2 >= 0 && "" === _v0[_v2]; _v2--);
    return _v1 > _v2 ? [] : _v0.slice(_v1, _v2 - _v1 + 1);
  }
  let _v280 = new class {
      constructor(_v0) {
        this._maxSize = _v0, this._cache = new Map();
      }
      get size() {
        return this._cache.size;
      }
      get(_v0) {
        let _v1 = this._cache.get(_v0);
        if (void 0 !== _v1) return this._cache.delete(_v0), this._cache.set(_v0, _v1), _v1;
      }
      set(_v0, _v1) {
        if (this._cache.size >= this._maxSize) {
          let _v0 = this._cache.keys().next().value;
          this._cache.delete(_v0);
        }
        this._cache.set(_v0, _v1);
      }
      remove(_v0) {
        let _v1 = this._cache.get(_v0);
        return _v1 && this._cache.delete(_v0), _v1;
      }
      clear() {
        this._cache.clear();
      }
      keys() {
        return Array.from(this._cache.keys());
      }
      values() {
        let _v0 = [];
        return this._cache.forEach(_v0 => _v0.push(_v0)), _v0;
      }
    }(100),
    _v281 = _v17.GLOBAL_OBJ,
    _v282 = !1,
    _v283 = _v17.GLOBAL_OBJ,
    _v284 = _v15.default.env.SENTRY_ENVIRONMENT ?? ("true" === _v15.default.env.IS_STAGING ? "staging" : "production"),
    _v285 = "production" === _v284;
  globalThis._sentryRouteManifest = '{"isrRoutes":[],"dynamicRoutes":[],"staticRoutes":[]}', globalThis._sentryNextJsVersion = "16.2.2";
  let _v286 = Promise.reject.bind(Promise);
  Promise.reject = function (_v0) {
    if (void 0 === _v0) try {
      _v111({
        category: "promise.reject",
        message: "Promise.reject(undefined)",
        level: "warning",
        data: {
          stack: Error().stack
        }
      });
    } catch {}
    return _v286(_v0);
  };
  let _v287 = 0,
    _v288 = 0;
  !function (_v0) {
    let _v1, _v2, _v3, _v4, _v5;
    _v282 && (0, _v16.consoleSandbox)(() => {
      console.warn("[@sentry/nextjs] You are calling `Sentry.init()` more than once on the client. This can happen if you have both a `sentry.client.config.ts` and a `instrumentation-client.ts` file with `Sentry.init()` calls. It is recommended to call `Sentry.init()` once in `instrumentation-client.ts`.");
    }), _v282 = !0, !_v159.DEBUG_BUILD && _v0.debug && (0, _v16.consoleSandbox)(() => {
      console.warn("[@sentry/nextjs] You have enabled `debug: true`, but Sentry debug logging was removed from your bundle (likely via `withSentryConfig({ disableLogger: true })` / `webpack.treeshake.removeDebugLogging: true`). Set that option to `false` to see Sentry debug output.");
    }), ("u" < typeof __SENTRY_TRACING__ || __SENTRY_TRACING__) && function () {
      _v92.document && function (_v0) {
        let _v1 = _v265(_v0) || _v0,
          _v2 = _v280.get(_v1);
        if (void 0 !== _v2) return _v2;
        let _v3 = _v264();
        if (!_v3?.isrRoutes || !Array.isArray(_v3.isrRoutes) || 0 === _v3.isrRoutes.length) return _v280.set(_v1, !1), !1;
        let _v4 = _v3.isrRoutes.includes(_v1);
        return _v280.set(_v1, _v4), _v4;
      }(_v92.location.pathname) && (_v0("sentry-trace"), _v0("baggage"));
      function _v0(_v0) {
        try {
          let _v0 = _v92.document.querySelector(`meta[name="${_v0}"]`);
          _v0 && _v0.remove();
        } catch {}
      }
    }();
    let _v6 = {
      environment: _v0.environment || _v15.default.env.SENTRY_ENVIRONMENT || ((_v1 = _v15.default.env.NEXT_PUBLIC_VERCEL_ENV) ? `vercel-${_v1}` : void 0) || "production",
      defaultIntegrations: (_v3 = _v157(_v0), ("u" < typeof __SENTRY_TRACING__ || __SENTRY_TRACING__) && _v3.push(function (_v0 = {}) {
        let _v1 = ((_v0 = {}) => {
            let _v1, _v2, _v3;
            "enableElementTiming" in _v0 && (0, _v16.consoleSandbox)(() => {
              console.warn("[Sentry] `enableElementTiming` is deprecated and no longer has any effect. Use the standalone `elementTimingIntegration` instead.");
            });
            let _v4 = {
                name: void 0,
                source: void 0
              },
              _v5 = _v92.document,
              {
                enableInp: _v6,
                enableLongTask: _v7,
                enableLongAnimationFrame: _v8,
                _experiments: {
                  enableInteractions: _v9,
                  enableStandaloneClsSpans: _v10,
                  enableStandaloneLcpSpans: _v11
                },
                beforeStartSpan: _v12,
                idleTimeout: _v13,
                finalTimeout: _v14,
                childSpanTimeout: _v15,
                markBackgroundSpan: _v16,
                traceFetch: _v17,
                traceXHR: _v18,
                trackFetchStreamPerformance: _v19,
                shouldCreateSpanForRequest: _v20,
                enableHTTPTimings: _v21,
                ignoreResourceSpans: _v22,
                ignorePerformanceApiSpans: _v23,
                instrumentPageLoad: _v24,
                instrumentNavigation: _v25,
                detectRedirects: _v26,
                linkPreviousTrace: _v27,
                consistentTraceSampling: _v28,
                enableReportPageLoaded: _v29,
                onRequestSpanStart: _v30,
                onRequestSpanEnd: _v31
              } = {
                ..._v251,
                ..._v0
              },
              _v32 = _v250();
            function _v33(_v0, _v1, _v2 = !0) {
              let _v3 = "pageload" === _v1.op,
                _v4 = _v1.name,
                _v5 = _v12 ? _v12(_v1) : _v1,
                _v6 = _v5.attributes || {};
              if (_v4 !== _v5.name && (_v6[_v34.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = "custom", _v5.attributes = _v6), !_v2) {
                let _v0 = (0, _v46.dateTimestampInSeconds)();
                (0, _v164.startInactiveSpan)({
                  ..._v5,
                  startTime: _v0
                }).end(_v0);
                return;
              }
              _v4.name = _v5.name, _v4.source = _v6[_v34.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
              let _v7 = _v166(_v5, {
                idleTimeout: _v13,
                finalTimeout: _v14,
                childSpanTimeout: _v15,
                disableAutoFinish: _v3,
                beforeSpanEnd: _v0 => {
                  _v1?.();
                  let _v1 = (0, _v168.hasSpanStreamingEnabled)(_v0);
                  !function (_v0, _v1) {
                    let _v2 = _v219(),
                      _v3 = (0, _v46.browserPerformanceTimeOrigin)();
                    if (!_v2?.getEntries || !_v3) return;
                    let {
                        spanStreamingEnabled: _v4,
                        ignorePerformanceApiSpans: _v5,
                        ignoreResourceSpans: _v6,
                        recordClsOnPageloadSpan: _v7,
                        recordLcpOnPageloadSpan: _v8
                      } = _v1,
                      _v9 = _v220(_v3),
                      _v10 = _v2.getEntries(),
                      {
                        op: _v11,
                        start_timestamp: _v12
                      } = (0, _v35.spanToJSON)(_v0);
                    if (_v10.slice(_v232).forEach(_v0 => {
                      let _v1 = _v220(_v0.startTime),
                        _v2 = _v220(Math.max(0, _v0.duration));
                      if ("navigation" !== _v11 || !_v12 || !(_v9 + _v1 < _v12)) switch (_v0.entryType) {
                        case "navigation":
                          var _v3, _v4, _v5, _v6, _v7, _v8;
                          let _v0, _v1, _v2;
                          _v3 = _v0, _v4 = _v0, _v5 = _v9, ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach(_v0 => {
                            _v234(_v3, _v4, _v0, _v5);
                          }), _v234(_v3, _v4, "secureConnection", _v5, "TLS/SSL"), _v234(_v3, _v4, "fetch", _v5, "cache"), _v234(_v3, _v4, "domainLookup", _v5, "DNS"), _v6 = _v3, _v7 = _v4, _v0 = (_v8 = _v5) + _v220(_v7.requestStart), _v1 = _v8 + _v220(_v7.responseEnd), _v2 = _v8 + _v220(_v7.responseStart), _v7.responseEnd && (_v217(_v6, _v0, _v1, {
                            op: "browser.request",
                            name: _v7.name,
                            attributes: {
                              [_v34.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ui.browser.metrics"
                            }
                          }), _v217(_v6, _v2, _v1, {
                            op: "browser.response",
                            name: _v7.name,
                            attributes: {
                              [_v34.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ui.browser.metrics"
                            }
                          }));
                          break;
                        case "mark":
                        case "paint":
                        case "measure":
                          {
                            !function (_v0, _v1, _v2, _v3, _v4, _v5) {
                              if (function (_v0) {
                                if (_v0?.entryType === "measure") try {
                                  return "Components ⚛" === _v0.detail.devtools.track;
                                } catch {
                                  return;
                                }
                              }(_v1) || ["mark", "measure"].includes(_v1.entryType) && (0, _v28.stringMatchesSomePattern)(_v1.name, _v5)) return;
                              let _v6 = _v172(!1),
                                _v7 = _v4 + Math.max(_v2, _v220(_v6 ? _v6.requestStart : 0)),
                                _v8 = _v4 + _v2,
                                _v9 = _v8 + _v3,
                                _v10 = {
                                  [_v34.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.resource.browser.metrics"
                                };
                              _v7 !== _v8 && (_v10["sentry.browser.measure_happened_before_request"] = !0, _v10["sentry.browser.measure_start_time"] = _v7), function (_v0, _v1) {
                                try {
                                  let _v0 = _v1.detail;
                                  if (!_v0) return;
                                  if ("object" == typeof _v0) {
                                    for (let [_v0, _v1] of Object.entries(_v0)) if (_v1 && (0, _v44.isPrimitive)(_v1)) _v0[`sentry.browser.measure.detail.${_v0}`] = _v1;else if (void 0 !== _v1) try {
                                      _v0[`sentry.browser.measure.detail.${_v0}`] = JSON.stringify(_v1);
                                    } catch {}
                                    return;
                                  }
                                  if ((0, _v44.isPrimitive)(_v0)) {
                                    _v0["sentry.browser.measure.detail"] = _v0;
                                    return;
                                  }
                                  try {
                                    _v0["sentry.browser.measure.detail"] = JSON.stringify(_v0);
                                  } catch {}
                                } catch {}
                              }(_v10, _v1), _v7 <= _v9 && _v217(_v0, _v7, _v9, {
                                name: _v1.name,
                                op: _v1.entryType,
                                attributes: _v10
                              });
                            }(_v0, _v0, _v1, _v2, _v9, _v5);
                            let _v0 = _v179(),
                              _v1 = _v0.startTime < _v0.firstHiddenTime;
                            "first-paint" === _v0.name && _v1 && (_v233.fp = {
                              value: _v0.startTime,
                              unit: "millisecond"
                            }), "first-contentful-paint" === _v0.name && _v1 && (_v233.fcp = {
                              value: _v0.startTime,
                              unit: "millisecond"
                            });
                            break;
                          }
                        case "resource":
                          !function (_v0, _v1, _v2, _v3, _v4, _v5, _v6) {
                            var _v7, _v8;
                            if ("xmlhttprequest" === _v1.initiatorType || "fetch" === _v1.initiatorType) return;
                            let _v9 = _v1.initiatorType ? `resource.${_v1.initiatorType}` : "resource.other";
                            if (_v6?.includes(_v9)) return;
                            let _v10 = {
                                [_v34.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.resource.browser.metrics"
                              },
                              _v11 = _v115(_v2);
                            _v11.protocol && (_v10["url.scheme"] = _v11.protocol.split(":").pop()), _v11.host && (_v10["server.address"] = _v11.host), _v10["url.same_origin"] = _v2.includes(_v118.location.origin), _v7 = _v1, _v8 = _v10, [["responseStatus", "http.response.status_code"], ["transferSize", "http.response_transfer_size"], ["encodedBodySize", "http.response_content_length"], ["decodedBodySize", "http.decoded_response_content_length"], ["renderBlockingStatus", "resource.render_blocking_status"], ["deliveryType", "http.response_delivery_type"]].forEach(([_v0, _v1]) => {
                              let _v2 = _v7[_v0];
                              null != _v2 && ("number" == typeof _v2 && _v2 < 0 || "string" == typeof _v2) && (_v8[_v1] = _v2);
                            });
                            let _v12 = {
                                ..._v10,
                                ..._v231(_v1)
                              },
                              _v13 = _v5 + _v3;
                            _v217(_v0, _v13, _v13 + _v4, {
                              name: _v2.replace(_v118.location.origin, ""),
                              op: _v9,
                              attributes: _v12
                            });
                          }(_v0, _v0, _v0.name, _v1, _v2, _v9, _v6);
                      }
                    }), _v232 = Math.max(_v10.length - 1, 0), function (_v0, _v1) {
                      let _v2 = _v118.navigator;
                      if (!_v2) return;
                      let _v3 = _v2.connection;
                      _v3 && (_v3.effectiveType && _v0.setAttribute(_v1 ? "network.connection.effective_type" : "effectiveConnectionType", _v3.effectiveType), _v3.type && _v0.setAttribute(_v1 ? "network.connection.type" : "connectionType", _v3.type), _v216(_v3.rtt) && (_v233["connection.rtt"] = {
                        value: _v3.rtt,
                        unit: "millisecond"
                      }, _v1 && _v0.setAttribute("network.connection.rtt", _v3.rtt))), _v216(_v2.deviceMemory) && (_v1 ? _v0.setAttribute("device.memory.estimated_capacity", _v2.deviceMemory) : _v0.setAttribute("deviceMemory", `${_v2.deviceMemory} GB`)), _v216(_v2.hardwareConcurrency) && (_v1 ? _v0.setAttribute("device.processor_count", _v2.hardwareConcurrency) : _v0.setAttribute("hardwareConcurrency", String(_v2.hardwareConcurrency)));
                    }(_v0, _v4), "pageload" === _v11) {
                      if (function (_v0) {
                        let _v1 = _v172(!1);
                        if (!_v1) return;
                        let {
                          responseStart: _v2,
                          requestStart: _v3
                        } = _v1;
                        _v3 <= _v2 && (_v0["ttfb.requestTime"] = {
                          value: _v2 - _v3,
                          unit: "millisecond"
                        });
                      }(_v233), _v4) {
                        let _v0 = (_v0, _v1, _v2) => {
                          let _v3 = _v2 ?? `browser.web_vital.${_v0}.value`;
                          _v0.setAttribute(_v3, _v1), _v154 && _v16.debug.log("Setting web vital attribute", {
                            [_v3]: _v1
                          }, "on pageload span");
                        };
                        ["ttfb", "fp", "fcp"].forEach(_v0 => {
                          _v233[_v0] && _v0(_v0, _v233[_v0].value);
                        }), _v233["ttfb.requestTime"] && _v0("ttfb.requestTime", _v233["ttfb.requestTime"].value, "browser.web_vital.ttfb.request_time");
                      } else {
                        var _v13, _v14;
                        _v7 || delete _v233.cls, _v8 || delete _v233.lcp, Object.entries(_v233).forEach(([_v0, _v1]) => {
                          (0, _v228.setMeasurement)(_v0, _v1.value, _v1.unit);
                        }), _v13 = _v0, _v14 = _v1, _v11 && _v14.recordLcpOnPageloadSpan && (_v11.element && _v13.setAttribute("lcp.element", (0, _v91.htmlTreeAsString)(_v11.element)), _v11.id && _v13.setAttribute("lcp.id", _v11.id), _v11.url && _v13.setAttribute("lcp.url", _v11.url.trim().slice(0, 200)), null != _v11.loadTime && _v13.setAttribute("lcp.loadTime", _v11.loadTime), null != _v11.renderTime && _v13.setAttribute("lcp.renderTime", _v11.renderTime), _v13.setAttribute("lcp.size", _v11.size)), _v12?.sources && _v14.recordClsOnPageloadSpan && _v12.sources.forEach((_v0, _v1) => _v13.setAttribute(`cls.source.${_v1 + 1}`, (0, _v91.htmlTreeAsString)(_v0.node)));
                      }
                      _v0.setAttribute(_v4 ? "browser.performance.time_origin" : "performance.timeOrigin", _v9), _v0.setAttribute(_v4 ? "browser.performance.navigation.activation_start" : "performance.activationStart", _v173());
                    }
                    _v11 = void 0, _v12 = void 0, _v233 = {};
                  }(_v0, {
                    recordClsOnPageloadSpan: !_v1 && !_v10,
                    recordLcpOnPageloadSpan: !_v1 && !_v11,
                    ignoreResourceSpans: _v22,
                    ignorePerformanceApiSpans: _v23,
                    spanStreamingEnabled: _v1
                  }), _v257(_v0, void 0);
                  let _v2 = (0, _v21.getCurrentScope)(),
                    _v3 = _v2.getPropagationContext();
                  _v2.setPropagationContext({
                    ..._v3,
                    traceId: _v7.spanContext().traceId,
                    sampled: (0, _v35.spanIsSampled)(_v7),
                    dsc: (0, _v47.getDynamicSamplingContextFromSpan)(_v0)
                  }), _v3 && (_v3 = void 0);
                },
                trimIdleSpanEndTimestamp: !_v29
              });
              function _v8() {
                _v5 && ["interactive", "complete"].includes(_v5.readyState) && _v0.emit("idleSpanEnableAutoFinish", _v7);
              }
              _v3 && _v29 && (_v3 = _v7), _v257(_v0, _v7), _v3 && !_v29 && _v5 && (_v5.addEventListener("readystatechange", () => {
                _v8();
              }), _v8());
            }
            return {
              name: "BrowserTracing",
              setup(_v0) {
                if (_v32) {
                  _v126 && _v16.debug.log("[Tracing] Skipping browserTracingIntegration setup for bot user agent.");
                  return;
                }
                function _v1() {
                  let _v0 = (0, _v35.getActiveSpan)(),
                    _v1 = _v0 && (0, _v35.getRootSpan)(_v0);
                  if (_v1) {
                    let _v0 = "internal_error";
                    _v22.DEBUG_BUILD && _v16.debug.log(`[Tracing] Root span: ${_v0} -> Global error occurred`), _v1.setStatus({
                      code: _v163.SPAN_STATUS_ERROR,
                      message: _v0
                    });
                  }
                }
                _v167 || (_v1.tag = "sentry_tracingErrorCallback", _v167 = !0, _v133(_v1), _v136(_v1));
                let _v2 = (0, _v168.hasSpanStreamingEnabled)(_v0);
                if (_v1 = function ({
                  recordClsStandaloneSpans: _v0,
                  recordLcpStandaloneSpans: _v1,
                  client: _v2
                }) {
                  let _v3 = _v219();
                  if (_v3 && (0, _v46.browserPerformanceTimeOrigin)()) {
                    _v3.mark && _v118.performance.mark("sentry-tracing-init");
                    let _v0 = _v1 ? function (_v0) {
                        let _v1,
                          _v2 = 0;
                        if (!_v221("largest-contentful-paint")) return;
                        let _v3 = _v205(({
                          metric: _v0
                        }) => {
                          let _v1 = _v0.entries[_v0.entries.length - 1];
                          _v1 && _v229(_v0.value) && (_v2 = _v0.value, _v1 = _v1);
                        }, !0);
                        _v222(_v0, (_v0, _v1) => {
                          (function (_v0, _v1, _v2, _v3) {
                            if (!_v229(_v0)) return;
                            _v154 && _v16.debug.log(`Sending LCP span (${_v0})`);
                            let _v4 = _v220(((0, _v46.browserPerformanceTimeOrigin)() || 0) + (_v1?.startTime || 0)),
                              _v5 = (0, _v21.getCurrentScope)().getScopeData().transactionName,
                              _v6 = _v1 ? (0, _v91.htmlTreeAsString)(_v1.element) : "Largest contentful paint",
                              _v7 = {
                                [_v34.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.browser.lcp",
                                [_v34.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "ui.webvital.lcp",
                                [_v34.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME]: 0,
                                "sentry.pageload.span_id": _v2,
                                "sentry.report_event": _v3
                              };
                            _v1 && (_v1.element && (_v7["lcp.element"] = (0, _v91.htmlTreeAsString)(_v1.element)), _v1.id && (_v7["lcp.id"] = _v1.id), _v1.url && (_v7["lcp.url"] = _v1.url), null != _v1.loadTime && (_v7["lcp.loadTime"] = _v1.loadTime), null != _v1.renderTime && (_v7["lcp.renderTime"] = _v1.renderTime), null != _v1.size && (_v7["lcp.size"] = _v1.size));
                            let _v8 = _v218({
                              name: _v6,
                              transaction: _v5,
                              attributes: _v7,
                              startTime: _v4
                            });
                            _v8 && (_v8.addEvent("lcp", {
                              [_v34.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT]: "millisecond",
                              [_v34.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE]: _v0
                            }), _v8.end(_v4));
                          })(_v2, _v1, _v1, _v0), _v3();
                        });
                      }(_v2) : !1 === _v1 ? _v205(({
                        metric: _v0
                      }) => {
                        let _v1 = _v0.entries[_v0.entries.length - 1];
                        _v1 && _v229(_v0.value) && (_v233.lcp = {
                          value: _v0.value,
                          unit: "millisecond"
                        }, _v11 = _v1);
                      }, !0) : void 0,
                      _v1 = _v0 ? function (_v0) {
                        let _v1,
                          _v2 = 0;
                        if (!_v221("layout-shift")) return;
                        let _v3 = _v204(({
                          metric: _v0
                        }) => {
                          let _v1 = _v0.entries[_v0.entries.length - 1];
                          _v1 && (_v2 = _v0.value, _v1 = _v1);
                        }, !0);
                        _v222(_v0, (_v0, _v1) => {
                          var _v2, _v3, _v4, _v5;
                          let _v6, _v7, _v8, _v9, _v10;
                          _v2 = _v2, _v3 = _v1, _v4 = _v1, _v5 = _v0, _v154 && _v16.debug.log(`Sending CLS span (${_v2})`), _v6 = _v3 ? _v220(((0, _v46.browserPerformanceTimeOrigin)() || 0) + _v3.startTime) : (0, _v46.timestampInSeconds)(), _v7 = (0, _v21.getCurrentScope)().getScopeData().transactionName, _v8 = _v3 ? (0, _v91.htmlTreeAsString)(_v3.sources[0]?.node) : "Layout shift", _v9 = {
                            [_v34.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.browser.cls",
                            [_v34.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "ui.webvital.cls",
                            [_v34.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME]: 0,
                            "sentry.pageload.span_id": _v4,
                            "sentry.report_event": _v5
                          }, _v3?.sources && _v3.sources.forEach((_v0, _v1) => {
                            _v9[`cls.source.${_v1 + 1}`] = (0, _v91.htmlTreeAsString)(_v0.node);
                          }), (_v10 = _v218({
                            name: _v8,
                            transaction: _v7,
                            attributes: _v9,
                            startTime: _v6
                          })) && (_v10.addEvent("cls", {
                            [_v34.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT]: "",
                            [_v34.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE]: _v2
                          }), _v10.end(_v6)), _v3();
                        });
                      }(_v2) : !1 === _v0 ? _v204(({
                        metric: _v0
                      }) => {
                        let _v1 = _v0.entries[_v0.entries.length - 1];
                        _v1 && (_v233.cls = {
                          value: _v0.value,
                          unit: ""
                        }, _v12 = _v1);
                      }, !0) : void 0,
                      _v2 = _v213("ttfb", ({
                        metric: _v0
                      }) => {
                        _v0.entries[_v0.entries.length - 1] && (_v233.ttfb = {
                          value: _v0.value,
                          unit: "millisecond"
                        });
                      }, _v211, _v9);
                    return () => {
                      _v2(), _v0?.(), _v1?.();
                    };
                  }
                  return () => void 0;
                }({
                  recordClsStandaloneSpans: _v2 ? void 0 : _v10 || !1,
                  recordLcpStandaloneSpans: _v2 ? void 0 : _v11 || !1,
                  client: _v0
                }), _v2 ? (!function (_v0) {
                  let _v1,
                    _v2 = 0;
                  if (!_v221("largest-contentful-paint")) return;
                  let _v3 = _v205(({
                    metric: _v0
                  }) => {
                    let _v1 = _v0.entries[_v0.entries.length - 1];
                    _v1 && _v229(_v0.value) && (_v2 = _v0.value, _v1 = _v1);
                  }, !0);
                  _v222(_v0, (_v0, _v1, _v2) => {
                    (function (_v0, _v1, _v2, _v3) {
                      if (!_v229(_v0)) return;
                      _v154 && _v16.debug.log(`Sending LCP span (${_v0})`);
                      let _v4 = (0, _v46.browserPerformanceTimeOrigin)() || 0,
                        _v5 = _v220(_v4),
                        _v6 = _v220(_v4 + (_v1?.startTime || 0)),
                        _v7 = _v1 ? (0, _v91.htmlTreeAsString)(_v1.element) : "Largest contentful paint",
                        _v8 = {};
                      _v1?.element && (_v8["browser.web_vital.lcp.element"] = (0, _v91.htmlTreeAsString)(_v1.element)), _v1?.id && (_v8["browser.web_vital.lcp.id"] = _v1.id), _v1?.url && (_v8["browser.web_vital.lcp.url"] = _v1.url), _v1?.loadTime != null && (_v8["browser.web_vital.lcp.load_time"] = _v1.loadTime), _v1?.renderTime != null && (_v8["browser.web_vital.lcp.render_time"] = _v1.renderTime), _v1?.size != null && (_v8["browser.web_vital.lcp.size"] = _v1.size), _v235({
                        name: _v7,
                        op: "ui.webvital.lcp",
                        origin: "auto.http.browser.lcp",
                        metricName: "lcp",
                        value: _v0,
                        attributes: _v8,
                        parentSpan: _v2,
                        reportEvent: _v3,
                        startTime: _v5,
                        endTime: _v6
                      });
                    })(_v2, _v1, _v2, _v0), _v3();
                  });
                }(_v0), !function (_v0) {
                  let _v1,
                    _v2 = 0;
                  if (!_v221("layout-shift")) return;
                  let _v3 = _v204(({
                    metric: _v0
                  }) => {
                    let _v1 = _v0.entries[_v0.entries.length - 1];
                    _v1 && (_v2 = _v0.value, _v1 = _v1);
                  }, !0);
                  _v222(_v0, (_v0, _v1, _v2) => {
                    var _v3, _v4, _v5, _v6;
                    let _v7, _v8, _v9;
                    _v3 = _v2, _v4 = _v1, _v5 = _v2, _v6 = _v0, _v154 && _v16.debug.log(`Sending CLS span (${_v3})`), _v7 = _v4 ? _v220(((0, _v46.browserPerformanceTimeOrigin)() || 0) + _v4.startTime) : (0, _v46.timestampInSeconds)(), _v8 = _v4 ? (0, _v91.htmlTreeAsString)(_v4.sources[0]?.node) : "Layout shift", _v9 = {}, _v4?.sources && _v4.sources.forEach((_v0, _v1) => {
                      _v9[`browser.web_vital.cls.source.${_v1 + 1}`] = (0, _v91.htmlTreeAsString)(_v0.node);
                    }), _v235({
                      name: _v8,
                      op: "ui.webvital.cls",
                      origin: "auto.http.browser.cls",
                      metricName: "cls",
                      value: _v3,
                      attributes: _v9,
                      parentSpan: _v5,
                      reportEvent: _v6,
                      startTime: _v7
                    }), _v3();
                  });
                }(_v0), _v6 && _v219() && (0, _v46.browserPerformanceTimeOrigin)() && _v206(({
                  metric: _v0
                }) => {
                  var _v1, _v2, _v3;
                  let _v4, _v5, _v6, _v7, _v8, _v9, _v10, _v11;
                  if (null == _v0.value || _v220(_v0.value) > 60) return;
                  let _v12 = _v0.entries.find(_v0 => _v0.duration === _v0.value && _v226[_v0.name]);
                  _v12 && (_v1 = _v0.value, _v2 = _v12, _v154 && _v16.debug.log(`Sending INP span (${_v1})`), _v4 = _v220((0, _v46.browserPerformanceTimeOrigin)() + _v2.startTime), _v5 = _v220(_v1), _v6 = _v226[_v2.name], _v7 = null != (_v3 = _v2.interactionId) ? _v224.get(_v3) : void 0, _v9 = (_v8 = (0, _v35.getActiveSpan)()) ? (0, _v35.getRootSpan)(_v8) : void 0, _v11 = (_v10 = _v7?.span || _v9) ? (0, _v35.spanToStreamedSpanJSON)(_v10).name : (0, _v21.getCurrentScope)().getScopeData().transactionName, _v235({
                    name: _v7?.elementName || (0, _v91.htmlTreeAsString)(_v2.target),
                    op: `ui.interaction.${_v6}`,
                    origin: "auto.http.browser.inp",
                    metricName: "inp",
                    value: _v1,
                    attributes: {
                      [_v34.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME]: _v2.duration,
                      "sentry.transaction": _v11
                    },
                    startTime: _v4,
                    endTime: _v4 + _v5,
                    parentSpan: _v10
                  }));
                })) : _v6 && function () {
                  if (_v219() && (0, _v46.browserPerformanceTimeOrigin)()) {
                    let _v0 = _v206(_v227);
                    () => {
                      _v0();
                    };
                  }
                }(), _v8 && _v17.GLOBAL_OBJ.PerformanceObserver && PerformanceObserver.supportedEntryTypes?.includes("long-animation-frame") ? new PerformanceObserver(_v0 => {
                  let _v1 = (0, _v35.getActiveSpan)();
                  if (_v1) for (let _v0 of _v0.getEntries()) {
                    if (!_v0.scripts[0]) continue;
                    let _v0 = _v220((0, _v46.browserPerformanceTimeOrigin)() + _v0.startTime),
                      {
                        start_timestamp: _v1,
                        op: _v2
                      } = (0, _v35.spanToJSON)(_v1);
                    if ("navigation" === _v2 && _v1 && _v0 < _v1) continue;
                    let _v3 = _v220(_v0.duration),
                      _v4 = {
                        [_v34.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ui.browser.metrics"
                      },
                      {
                        invoker: _v5,
                        invokerType: _v6,
                        sourceURL: _v7,
                        sourceFunctionName: _v8,
                        sourceCharPosition: _v9
                      } = _v0.scripts[0];
                    _v4["browser.script.invoker"] = _v5, _v4["browser.script.invoker_type"] = _v6, _v7 && (_v4["code.filepath"] = _v7), _v8 && (_v4["code.function"] = _v8), -1 !== _v9 && (_v4["browser.script.source_char_position"] = _v9), _v217(_v1, _v0, _v0 + _v3, {
                      name: "Main UI thread blocked",
                      op: "ui.long-animation-frame",
                      attributes: _v4
                    });
                  }
                }).observe({
                  type: "long-animation-frame",
                  buffered: !0
                }) : _v7 && _v207("longtask", ({
                  entries: _v0
                }) => {
                  let _v1 = (0, _v35.getActiveSpan)();
                  if (!_v1) return;
                  let {
                    op: _v2,
                    start_timestamp: _v3
                  } = (0, _v35.spanToJSON)(_v1);
                  for (let _v0 of _v0) {
                    let _v0 = _v220((0, _v46.browserPerformanceTimeOrigin)() + _v0.startTime),
                      _v1 = _v220(_v0.duration);
                    "navigation" === _v2 && _v3 && _v0 < _v3 || _v217(_v1, _v0, _v0 + _v1, {
                      name: "Main UI thread blocked",
                      op: "ui.long-task",
                      attributes: {
                        [_v34.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ui.browser.metrics"
                      }
                    });
                  }
                }), _v9 && _v207("event", ({
                  entries: _v0
                }) => {
                  let _v1 = (0, _v35.getActiveSpan)();
                  if (_v1) {
                    for (let _v0 of _v0) if ("click" === _v0.name) {
                      let _v0 = _v220((0, _v46.browserPerformanceTimeOrigin)() + _v0.startTime),
                        _v1 = _v220(_v0.duration),
                        _v2 = {
                          name: (0, _v91.htmlTreeAsString)(_v0.target),
                          op: `ui.interaction.${_v0.name}`,
                          startTime: _v0,
                          attributes: {
                            [_v34.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ui.browser.metrics"
                          }
                        },
                        _v3 = (0, _v91.getComponentName)(_v0.target);
                      _v3 && (_v2.attributes["ui.component_name"] = _v3), _v217(_v1, _v0, _v0 + _v1, _v2);
                    }
                  }
                }), _v26 && _v5) {
                  let _v0 = () => {
                    _v2 = (0, _v46.timestampInSeconds)();
                  };
                  addEventListener("click", _v0, {
                    capture: !0
                  }), addEventListener("keydown", _v0, {
                    capture: !0,
                    passive: !0
                  });
                }
                function _v3() {
                  let _v0 = _v0[_v256];
                  _v0 && !(0, _v35.spanToJSON)(_v0).timestamp && (_v126 && _v16.debug.log(`[Tracing] Finishing current active span with op: ${(0, _v35.spanToJSON)(_v0).op}`), _v0.setAttribute(_v34.SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON, "cancelled"), _v0.end());
                }
                _v0.on("startNavigationSpan", (_v0, _v1) => {
                  if ((0, _v21.getClient)() !== _v0) return;
                  if (_v1?.isRedirect) {
                    _v126 && _v16.debug.warn("[Tracing] Detected redirect, navigation span will not be the root span, but a child span."), _v33(_v0, {
                      op: "navigation.redirect",
                      ..._v0
                    }, !1);
                    return;
                  }
                  _v2 = void 0, _v3(), (0, _v21.getIsolationScope)().setPropagationContext({
                    traceId: (0, _v169.generateTraceId)(),
                    sampleRand: Math.random(),
                    propagationSpanId: (0, _v160.hasSpansEnabled)() ? void 0 : (0, _v169.generateSpanId)()
                  });
                  let _v2 = (0, _v21.getCurrentScope)();
                  _v2.setPropagationContext({
                    traceId: (0, _v169.generateTraceId)(),
                    sampleRand: Math.random(),
                    propagationSpanId: (0, _v160.hasSpansEnabled)() ? void 0 : (0, _v169.generateSpanId)()
                  }), _v2.setSDKProcessingMetadata({
                    normalizedRequest: void 0
                  }), _v33(_v0, {
                    op: "navigation",
                    ..._v0,
                    parentSpan: null,
                    forceTransaction: !0
                  });
                }), _v0.on("startPageLoadSpan", (_v0, _v1 = {}) => {
                  if ((0, _v21.getClient)() !== _v0) return;
                  _v3();
                  let _v2 = _v1.sentryTrace || _v254("sentry-trace") || _v255("sentry-trace"),
                    _v3 = _v1.baggage || _v254("baggage") || _v255("baggage"),
                    _v4 = (0, _v170.propagationContextFromHeaders)(_v2, _v3),
                    _v5 = (0, _v21.getCurrentScope)();
                  _v5.setPropagationContext(_v4), (0, _v160.hasSpansEnabled)() || (_v5.getPropagationContext().propagationSpanId = (0, _v169.generateSpanId)()), _v5.setSDKProcessingMetadata({
                    normalizedRequest: _v95()
                  }), _v33(_v0, {
                    op: "pageload",
                    ..._v0
                  });
                }), _v0.on("endPageloadSpan", () => {
                  _v29 && _v3 && (_v3.setAttribute(_v34.SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON, "reportPageLoaded"), _v3.end());
                });
              },
              afterAllSetup(_v0) {
                var _v1, _v2, _v3, _v4, _v5;
                let _v6;
                if (_v32) return;
                let _v7 = (0, _v91.getLocationHref)();
                if ("off" !== _v27 && function (_v0, {
                  linkPreviousTrace: _v1,
                  consistentTraceSampling: _v2
                }) {
                  let _v3 = "session-storage" === _v1,
                    _v4 = _v3 ? function () {
                      try {
                        let _v0 = _v92.sessionStorage?.getItem(_v236);
                        return JSON.parse(_v0);
                      } catch {
                        return;
                      }
                    }() : void 0;
                  _v0.on("spanStart", _v0 => {
                    if ((0, _v35.getRootSpan)(_v0) !== _v0) return;
                    let _v1 = (0, _v21.getCurrentScope)().getPropagationContext();
                    _v4 = function (_v0, _v1, _v2) {
                      let _v3 = (0, _v35.spanToJSON)(_v1),
                        _v4 = {
                          spanContext: _v1.spanContext(),
                          startTimestamp: _v3.start_timestamp,
                          sampleRate: function () {
                            try {
                              return Number(_v2.dsc?.sample_rate) ?? Number(_v3.data?.[_v34.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE]);
                            } catch {
                              return 0;
                            }
                          }(),
                          sampleRand: _v2.sampleRand
                        };
                      if (!_v0) return _v4;
                      let _v5 = _v0.spanContext;
                      return _v5.traceId === _v3.trace_id ? _v0 : (Date.now() / 0 - _v0.startTimestamp <= 0 && (_v126 && _v16.debug.log(`Adding previous_trace \`${JSON.stringify(_v5)}\` link to span \`${JSON.stringify({
                        op: _v3.op,
                        ..._v1.spanContext()
                      })}\``), _v1.addLink({
                        context: _v5,
                        attributes: {
                          [_v34.SEMANTIC_LINK_ATTRIBUTE_LINK_TYPE]: "previous_trace"
                        }
                      }), _v1.setAttribute("sentry.previous_trace", `${_v5.traceId}-${_v5.spanId}-${+!!_v237(_v5)}`)), _v4);
                    }(_v4, _v0, _v1), _v3 && function (_v0) {
                      try {
                        _v92.sessionStorage.setItem(_v236, JSON.stringify(_v0));
                      } catch (_v0) {
                        _v126 && _v16.debug.warn("Could not store previous trace in sessionStorage", _v0);
                      }
                    }(_v4);
                  });
                  let _v5 = !0;
                  _v2 && _v0.on("beforeSampling", _v0 => {
                    if (!_v4) return;
                    let _v1 = (0, _v21.getCurrentScope)(),
                      _v2 = _v1.getPropagationContext();
                    if (_v5 && _v2.parentSpanId) {
                      _v5 = !1;
                      return;
                    }
                    _v1.setPropagationContext({
                      ..._v2,
                      dsc: {
                        ..._v2.dsc,
                        sample_rate: String(_v4.sampleRate),
                        sampled: String(_v237(_v4.spanContext))
                      },
                      sampleRand: _v4.sampleRand
                    }), _v0.parentSampled = _v237(_v4.spanContext), _v0.parentSampleRate = _v4.sampleRate, _v0.spanAttributes = {
                      ..._v0.spanAttributes,
                      [_v34.SEMANTIC_ATTRIBUTE_SENTRY_PREVIOUS_TRACE_SAMPLE_RATE]: _v4.sampleRate
                    };
                  });
                }(_v0, {
                  linkPreviousTrace: _v27,
                  consistentTraceSampling: _v28
                }), _v92.location) {
                  if (_v24) {
                    let _v0 = (0, _v46.browserPerformanceTimeOrigin)();
                    _v252(_v0, {
                      name: _v92.location.pathname,
                      startTime: _v0 ? _v0 / 0 : void 0,
                      attributes: {
                        [_v34.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "url",
                        [_v34.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.pageload.browser"
                      }
                    });
                  }
                  _v25 && _v124(({
                    to: _v0,
                    from: _v1
                  }) => {
                    var _v2, _v3;
                    let _v4, _v5;
                    if (void 0 === _v1 && _v7?.indexOf(_v0) !== -1) {
                      _v7 = void 0;
                      return;
                    }
                    _v7 = void 0;
                    let _v6 = _v114(_v0),
                      _v7 = _v0[_v256],
                      _v8 = _v7 && _v26 && (_v2 = _v7, _v3 = _v2, _v4 = (0, _v35.spanToJSON)(_v2), !((_v5 = (0, _v46.dateTimestampInSeconds)()) - _v4.start_timestamp > 1.5) && (!_v3 || !(_v5 - _v3 <= 1.5)));
                    _v253(_v0, {
                      name: _v6?.pathname || _v92.location.pathname,
                      attributes: {
                        [_v34.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "url",
                        [_v34.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.navigation.browser"
                      }
                    }, {
                      url: _v0,
                      isRedirect: _v8
                    });
                  });
                }
                _v16 && (_v92.document ? _v92.document.addEventListener("visibilitychange", () => {
                  let _v0 = (0, _v35.getActiveSpan)();
                  if (!_v0) return;
                  let _v1 = (0, _v35.getRootSpan)(_v0);
                  if (_v92.document.hidden && _v1) {
                    let _v0 = "cancelled",
                      {
                        op: _v1,
                        status: _v2
                      } = (0, _v35.spanToJSON)(_v1);
                    _v126 && _v16.debug.log(`[Tracing] Transaction: ${_v0} -> since tab moved to the background, op: ${_v1}`), _v2 || _v1.setStatus({
                      code: _v163.SPAN_STATUS_ERROR,
                      message: _v0
                    }), _v1.setAttribute("sentry.cancellation_reason", "document.hidden"), _v1.end();
                  }
                }) : _v126 && _v16.debug.warn("[Tracing] Could not set up background tab detection due to lack of global document")), _v9 && (_v1 = _v0, _v2 = _v13, _v3 = _v14, _v4 = _v15, _v5 = _v4, _v92.document && addEventListener("click", () => {
                  let _v0 = "ui.action.click",
                    _v1 = _v1[_v256];
                  if (_v1 && ["navigation", "pageload"].includes((0, _v35.spanToJSON)(_v1).op)) {
                    _v126 && _v16.debug.warn(`[Tracing] Did not create ${_v0} span because a pageload or navigation span is in progress.`);
                    return;
                  }
                  if (_v6 && (_v6.setAttribute(_v34.SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON, "interactionInterrupted"), _v6.end(), _v6 = void 0), !_v5.name) {
                    _v126 && _v16.debug.warn(`[Tracing] Did not create ${_v0} transaction because _latestRouteName is missing.`);
                    return;
                  }
                  _v6 = _v166({
                    name: _v5.name,
                    op: _v0,
                    attributes: {
                      [_v34.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: _v5.source || "url"
                    }
                  }, {
                    idleTimeout: _v2,
                    finalTimeout: _v3,
                    childSpanTimeout: _v4
                  });
                }, {
                  capture: !0
                })), _v6 && function () {
                  let _v0,
                    _v1 = Object.keys(_v226);
                  function _v2(_v0) {
                    let _v1 = _v0.target;
                    if (!_v1) return;
                    let _v2 = (0, _v91.htmlTreeAsString)(_v1),
                      _v3 = Math.round(_v0.timeStamp);
                    if (_v225.set(_v3, _v2), _v225.size > 50) {
                      let _v0 = _v225.keys().next().value;
                      void 0 !== _v0 && _v225.delete(_v0);
                    }
                  }
                  "u" > typeof window && (!(!("u" > typeof __SENTRY_BROWSER_BUNDLE__ && __SENTRY_BROWSER_BUNDLE__) && "[object process]" === Object.prototype.toString.call(void 0 !== _v15.default ? _v15.default : 0)) || (_v0 = _v17.GLOBAL_OBJ.process, _v0?.type === "renderer")) && _v1.forEach(_v0 => {
                    _v118.addEventListener(_v0, _v2, {
                      capture: !0,
                      passive: !0
                    });
                  });
                  let _v3 = ({
                    entries: _v0
                  }) => {
                    let _v1 = (0, _v35.getActiveSpan)(),
                      _v2 = _v1 && (0, _v35.getRootSpan)(_v1);
                    _v0.forEach(_v0 => {
                      if (!("duration" in _v0)) return;
                      let _v1 = _v0.interactionId;
                      if (null == _v1 || _v224.has(_v1)) return;
                      let _v2 = _v0.target ? (0, _v91.htmlTreeAsString)(_v0.target) : function (_v0) {
                        let _v1 = Math.round(_v0.startTime),
                          _v2 = _v225.get(_v1);
                        if (!_v2) for (let _v0 = -5; _v0 <= 5; _v0++) {
                          let _v0 = _v225.get(_v1 + _v0);
                          if (_v0) {
                            _v2 = _v0;
                            break;
                          }
                        }
                        return _v2 || "<unknown>";
                      }(_v0);
                      if (_v223.length > 10) {
                        let _v0 = _v223.shift();
                        _v224.delete(_v0);
                      }
                      _v223.push(_v1), _v224.set(_v1, {
                        span: _v2,
                        elementName: _v2
                      });
                    });
                  };
                  _v207("event", _v3), _v207("first-input", _v3);
                }(), function (_v0, _v1) {
                  let {
                      traceFetch: _v2,
                      traceXHR: _v3,
                      trackFetchStreamPerformance: _v4,
                      shouldCreateSpanForRequest: _v5,
                      enableHTTPTimings: _v6,
                      tracePropagationTargets: _v7,
                      onRequestSpanStart: _v8,
                      onRequestSpanEnd: _v9
                    } = {
                      ..._v247,
                      ..._v1
                    },
                    _v10 = "function" == typeof _v5 ? _v5 : _v0 => !0,
                    _v11 = _v0 => function (_v0, _v1) {
                      let _v2 = (0, _v91.getLocationHref)();
                      if (_v2) {
                        let _v0, _v1;
                        try {
                          _v0 = new URL(_v0, _v2), _v1 = new URL(_v2).origin;
                        } catch {
                          return !1;
                        }
                        let _v2 = _v0.origin === _v1;
                        return _v1 ? (0, _v28.stringMatchesSomePattern)(_v0.toString(), _v1) || _v2 && (0, _v28.stringMatchesSomePattern)(_v0.pathname, _v1) : _v2;
                      }
                      {
                        let _v0 = !!_v0.match(/^\/(?!\/)/);
                        return _v1 ? (0, _v28.stringMatchesSomePattern)(_v0, _v1) : _v0;
                      }
                    }(_v0, _v7),
                    _v12 = {},
                    _v13 = _v0.getOptions().propagateTraceparent;
                  if (_v2) {
                    let _v0;
                    _v0.addEventProcessor(_v0 => ("transaction" === _v0.type && _v0.spans && _v0.spans.forEach(_v0 => {
                      if ("http.client" === _v0.op) {
                        let _v0 = _v246.get(_v0.span_id);
                        _v0 && (_v0.timestamp = _v0 / 0, _v246.delete(_v0.span_id));
                      }
                    }), _v0)), _v4 && (_v99(_v0 = "fetch-body-resolved", _v0 => {
                      if (_v0.response) {
                        let _v0 = _v245.get(_v0.response);
                        _v0 && _v0.endTimestamp && _v246.set(_v0, _v0.endTimestamp);
                      }
                    }), _v100(_v0, () => _v106(_v108))), _v105(_v0 => {
                      let _v1 = function (_v0, _v1, _v2, _v3, _v4) {
                        if (!_v0.fetchData) return;
                        let {
                            method: _v5,
                            url: _v6
                          } = _v0.fetchData,
                          _v7 = (0, _v160.hasSpansEnabled)() && _v1(_v6);
                        if (_v0.endTimestamp) {
                          var _v8, _v9, _v10;
                          let _v0,
                            _v1 = _v0.fetchData.__span;
                          if (!_v1) return;
                          let _v2 = _v3[_v1];
                          _v2 && (_v7 && (function (_v0, _v1) {
                            if (_v1.response) {
                              (0, _v163.setHttpStatus)(_v0, _v1.response.status);
                              let _v0 = _v1.response?.headers?.get("content-length");
                              if (_v0) {
                                let _v0 = parseInt(_v0);
                                _v0 > 0 && _v0.setAttribute("http.response_content_length", _v0);
                              }
                            } else _v1.error && _v0.setStatus({
                              code: _v163.SPAN_STATUS_ERROR,
                              message: "internal_error"
                            });
                            _v0.end();
                          }(_v2, _v0), _v8 = _v2, _v9 = _v0, _v0 = "object" == typeof (_v10 = _v4) && null !== _v10 ? _v10.onRequestSpanEnd : void 0, _v0?.(_v8, {
                            headers: _v9.response?.headers,
                            error: _v9.error
                          })), delete _v3[_v1]);
                          return;
                        }
                        let {
                            spanOrigin: _v11 = "auto.http.browser",
                            propagateTraceparent: _v12 = !1
                          } = "object" == typeof _v4 ? _v4 : {
                            spanOrigin: _v4
                          },
                          _v13 = (0, _v21.getClient)(),
                          _v14 = !!(0, _v35.getActiveSpan)(),
                          _v15 = _v7 && _v14 ? (0, _v164.startInactiveSpan)(function (_v0, _v1, _v2) {
                            if (_v0.startsWith("data:")) {
                              let _v0 = _v117(_v0);
                              return {
                                name: `${_v1} ${_v0}`,
                                attributes: _v242(_v0, void 0, _v1, _v2)
                              };
                            }
                            let _v3 = _v114(_v0),
                              _v4 = _v3 ? function (_v0) {
                                if (_v113(_v0)) return _v0.pathname;
                                let _v1 = new URL(_v0);
                                return _v1.search = "", _v1.hash = "", ["80", "443"].includes(_v1.port) && (_v1.port = ""), _v1.password && (_v1.password = "%filtered%"), _v1.username && (_v1.username = "%filtered%"), _v1.toString();
                              }(_v3) : _v0;
                            return {
                              name: `${_v1} ${_v4}`,
                              attributes: _v242(_v0, _v3, _v1, _v2)
                            };
                          }(_v6, _v5, _v11)) : new _v161.SentryNonRecordingSpan();
                        if (_v7 && !_v14 && _v13?.recordDroppedEvent("no_parent_span", "span"), _v0.fetchData.__span = _v15.spanContext().spanId, _v3[_v15.spanContext().spanId] = _v15, _v2(_v0.fetchData.url)) {
                          let _v0 = _v0.args[0],
                            _v1 = {
                              ...(_v0.args[1] || {})
                            },
                            _v2 = function (_v0, _v1, _v2, _v3) {
                              var _v4, _v5;
                              let _v6 = _v240({
                                  span: _v2,
                                  propagateTraceparent: _v3
                                }),
                                _v7 = _v6["sentry-trace"],
                                _v8 = _v6.baggage,
                                _v9 = _v6.traceparent;
                              if (!_v7) return;
                              let _v10 = _v1.headers || ((0, _v44.isRequest)(_v0) ? _v0.headers : void 0);
                              if (!_v10) return {
                                ..._v6
                              };
                              if (_v4 = _v10, "u" > typeof Headers && (0, _v44.isInstanceOf)(_v4, Headers)) {
                                let _v0 = new Headers(_v10);
                                if (_v0.get("sentry-trace") || _v0.set("sentry-trace", _v7), _v3 && _v9 && !_v0.get("traceparent") && _v0.set("traceparent", _v9), _v8) {
                                  let _v0 = _v0.get("baggage");
                                  _v0 ? _v241(_v0) || _v0.set("baggage", `${_v0},${_v8}`) : _v0.set("baggage", _v8);
                                }
                                return _v0;
                              }
                              if (Array.isArray(_v5 = _v10) && _v5.every(_v0 => Array.isArray(_v0) && 2 === _v0.length && "string" == typeof _v0[0])) {
                                let _v0 = [..._v10];
                                _v0.find(_v0 => "sentry-trace" === _v0[0]) || _v0.push(["sentry-trace", _v7]), _v3 && _v9 && !_v0.find(_v0 => "traceparent" === _v0[0]) && _v0.push(["traceparent", _v9]);
                                let _v1 = _v10.find(_v0 => "baggage" === _v0[0] && "string" == typeof _v0[1] && _v241(_v0[1]));
                                return _v8 && !_v1 && _v0.push(["baggage", _v8]), _v0;
                              }
                              {
                                let _v0 = "sentry-trace" in _v10 ? _v10["sentry-trace"] : void 0,
                                  _v1 = "traceparent" in _v10 ? _v10.traceparent : void 0,
                                  _v2 = "baggage" in _v10 ? _v10.baggage : void 0,
                                  _v3 = _v2 ? Array.isArray(_v2) ? [..._v2] : [_v2] : [],
                                  _v4 = _v2 && (Array.isArray(_v2) ? _v2.find(_v0 => _v241(_v0)) : _v241(_v2));
                                _v8 && !_v4 && _v3.push(_v8);
                                let _v5 = Object.assign({}, _v10, {
                                  "sentry-trace": _v0 ?? _v7,
                                  baggage: _v3.length > 0 ? _v3.join(",") : void 0
                                });
                                return _v3 && _v9 && !_v1 && (_v5.traceparent = _v9), _v5;
                              }
                            }(_v0, _v1, (0, _v160.hasSpansEnabled)() && _v14 ? _v15 : void 0, _v12);
                          _v2 && (_v0.args[1] = _v1, _v1.headers = _v2);
                        }
                        if (_v13) {
                          let _v0 = {
                            input: _v0.args,
                            response: _v0.response,
                            startTimestamp: _v0.startTimestamp,
                            endTimestamp: _v0.endTimestamp
                          };
                          _v13.emit("beforeOutgoingRequestSpan", _v15, _v0);
                        }
                        return _v15;
                      }(_v0, _v10, _v11, _v12, {
                        propagateTraceparent: _v13,
                        onRequestSpanEnd: _v9
                      });
                      if (_v0.response && _v0.fetchData.__span && _v245.set(_v0.response, _v0.fetchData.__span), _v1) {
                        let _v0 = _v243(_v0.fetchData.url),
                          _v1 = _v0 ? _v115(_v0).host : void 0;
                        _v1.setAttributes({
                          "http.url": _v0 ? _v117(_v0) : void 0,
                          "server.address": _v1
                        }), _v6 && _v248(_v1, _v0), _v8?.(_v1, {
                          headers: _v0.headers
                        });
                      }
                    });
                  }
                  _v3 && _v122(_v0 => {
                    let _v1 = function (_v0, _v1, _v2, _v3, _v4, _v5) {
                      let _v6 = _v0.xhr,
                        _v7 = _v6?.[_v121];
                      if (!_v6 || _v6.__sentry_own_request__ || !_v7) return;
                      let {
                          url: _v8,
                          method: _v9
                        } = _v7,
                        _v10 = (0, _v160.hasSpansEnabled)() && _v1(_v8);
                      if (_v0.endTimestamp) {
                        let _v0 = _v6.__sentry_xhr_span_id__;
                        if (!_v0) return;
                        let _v1 = _v3[_v0];
                        _v1 && (_v10 && void 0 !== _v7.status_code && ((0, _v163.setHttpStatus)(_v1, _v7.status_code), _v1.end(), _v5?.(_v1, {
                          headers: _v244(function (_v0) {
                            let _v1;
                            try {
                              _v1 = _v0.getAllResponseHeaders();
                            } catch (_v0) {
                              return _v154 && _v16.debug.error(_v0, "Failed to get xhr response headers", _v0), {};
                            }
                            return _v1 ? _v1.split("\r\n").reduce((_v0, _v1) => {
                              let [_v2, _v3] = _v1.split(": ");
                              return _v3 && (_v0[_v2.toLowerCase()] = _v3), _v0;
                            }, {}) : {};
                          }(_v6)),
                          error: _v0.error
                        })), delete _v3[_v0]);
                        return;
                      }
                      let _v11 = _v243(_v8),
                        _v12 = _v11 ? _v115(_v11) : _v115(_v8),
                        _v13 = _v117(_v116(_v8)),
                        _v14 = (0, _v21.getClient)(),
                        _v15 = !!(0, _v35.getActiveSpan)(),
                        _v16 = _v10 && _v15 ? (0, _v164.startInactiveSpan)({
                          name: `${_v9} ${_v13}`,
                          attributes: {
                            url: _v117(_v8),
                            type: "xhr",
                            "http.method": _v9,
                            "http.url": _v11 ? _v117(_v11) : void 0,
                            "server.address": _v12?.host,
                            [_v34.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.browser",
                            [_v34.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "http.client",
                            ...(_v12?.search && {
                              "http.query": _v12?.search
                            }),
                            ...(_v12?.hash && {
                              "http.fragment": _v12?.hash
                            })
                          }
                        }) : new _v161.SentryNonRecordingSpan();
                      return _v10 && !_v15 && _v14?.recordDroppedEvent("no_parent_span", "span"), _v6.__sentry_xhr_span_id__ = _v16.spanContext().spanId, _v3[_v6.__sentry_xhr_span_id__] = _v16, _v2(_v8) && function (_v0, _v1, _v2) {
                        let {
                          "sentry-trace": _v3,
                          baggage: _v4,
                          traceparent: _v5
                        } = _v240({
                          span: _v1,
                          propagateTraceparent: _v2
                        });
                        _v3 && function (_v0, _v1, _v2, _v3) {
                          let _v4 = _v0.__sentry_xhr_v3__?.request_headers;
                          if (!_v4?.["sentry-trace"] && _v0.setRequestHeader) try {
                            if (_v0.setRequestHeader("sentry-trace", _v1), _v3 && !_v4?.traceparent && _v0.setRequestHeader("traceparent", _v3), _v2) {
                              let _v0 = _v4?.baggage;
                              _v0 && _v0.split(",").some(_v0 => _v0.trim().startsWith("sentry-")) || _v0.setRequestHeader("baggage", _v2);
                            }
                          } catch {}
                        }(_v0, _v3, _v4, _v5);
                      }(_v6, (0, _v160.hasSpansEnabled)() && _v15 ? _v16 : void 0, _v4), _v14 && _v14.emit("beforeOutgoingRequestSpan", _v16, _v0), _v16;
                    }(_v0, _v10, _v11, _v12, _v13, _v9);
                    _v1 && (_v6 && _v248(_v1, _v0), _v8?.(_v1, {
                      headers: _v244(_v0.xhr.__sentry_xhr_v3__?.request_headers)
                    }));
                  });
                }(_v0, {
                  traceFetch: _v17,
                  traceXHR: _v18,
                  trackFetchStreamPerformance: _v19,
                  tracePropagationTargets: _v0.getOptions().tracePropagationTargets,
                  shouldCreateSpanForRequest: _v20,
                  enableHTTPTimings: _v21,
                  onRequestSpanStart: _v30,
                  onRequestSpanEnd: _v31
                });
              }
            };
          })({
            ..._v0,
            instrumentNavigation: !1,
            instrumentPageLoad: !1,
            onRequestSpanStart(..._v0) {
              let [_v1, {
                headers: _v2
              }] = _v0;
              return _v2?.get("next-router-prefetch") && _v1?.setAttribute("http.request.prefetch", !0), _v0.onRequestSpanStart?.(..._v0);
            }
          }),
          {
            instrumentPageLoad: _v2 = !0,
            instrumentNavigation: _v3 = !0
          } = _v0;
        return {
          ..._v1,
          afterAllSetup(_v0) {
            !_v250() && (_v3 && function (_v0) {
              if (_v92.document.getElementById("__NEXT_DATA__")) _v276.events.on("routeChangeStart", _v0 => {
                let _v1,
                  _v2,
                  _v3 = _v116(_v0),
                  _v4 = function (_v0) {
                    let _v1 = _v92.__BUILD_MANIFEST?.sortedPages;
                    if (_v1) return _v1.find(_v0 => {
                      let _v1,
                        _v2,
                        _v3,
                        _v4 = (_v1 = _v0.split("/"), _v2 = "", _v1[_v1.length - 1]?.match(/^\[\[\.\.\..+\]\]$/) && (_v1.pop(), _v2 = "(?:/(.+?))?"), _v3 = _v1.map(_v0 => _v0.replace(/^\[\.\.\..+\]$/, "(.+?)").replace(/^\[.*\]$/, "([^/]+?)")).join("/"), RegExp(`^${_v3}${_v2}(?:/)?$`));
                      return _v0.match(_v4);
                    });
                  }(_v3);
                _v4 ? (_v1 = _v4, _v2 = "route") : (_v1 = _v3, _v2 = "url"), _v253(_v0, {
                  name: _v1,
                  attributes: {
                    [_v34.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "navigation",
                    [_v34.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.navigation.nextjs.pages_router_instrumentation",
                    [_v34.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: _v2
                  }
                });
              });else {
                let _v0, _v1, _v2;
                _v14 = (_v0, _v1) => {
                  let _v2 = _v15.default.env._sentryBasePath ?? _v271._sentryBasePath,
                    _v3 = _v266(new URL(_v2 && !_v0.startsWith(_v2) ? `${_v2}${_v0}` : _v0, _v92.location.href).pathname),
                    _v4 = _v265(_v3),
                    _v5 = _v4 ?? _v3;
                  "router-patch" === _v268 && (_v268 = "transition-start-hook");
                  let _v6 = _v269.current;
                  _v6 ? (_v6.updateName(_v5), _v6.setAttributes({
                    "navigation.type": `router.${_v1}`,
                    [_v34.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: _v4 ? "route" : "url"
                  }), _v269.current = void 0) : _v253(_v0, {
                    name: _v5,
                    attributes: {
                      [_v34.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "navigation",
                      [_v34.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.navigation.nextjs.app_router_instrumentation",
                      [_v34.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: _v4 ? "route" : "url",
                      "navigation.type": `router.${_v1}`
                    }
                  });
                }, _v92.addEventListener("popstate", () => {
                  let _v0 = _v266(_v92.location.pathname),
                    _v1 = _v265(_v0);
                  _v269.current?.isRecording() ? (_v269.current.updateName(_v1 ?? _v0), _v269.current.setAttribute(_v34.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, _v1 ? "route" : "url")) : _v269.current = _v253(_v0, {
                    name: _v1 ?? _v0,
                    attributes: {
                      [_v34.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.navigation.nextjs.app_router_instrumentation",
                      [_v34.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: _v1 ? "route" : "url",
                      "navigation.type": "browser.popstate"
                    }
                  });
                }), _v0 = !1, _v1 = 0, _v2 = setInterval(() => {
                  _v1++;
                  let _v0 = _v270?.next?.router ?? _v270?.nd?.router;
                  _v0 || _v1 > 500 ? clearInterval(_v2) : _v0 && (clearInterval(_v2), _v0 = !0, _v274(_v0, _v0, _v269), ["nd", "next"].forEach(_v0 => {
                    let _v1 = _v270[_v0];
                    _v1 && (_v270[_v0] = new Proxy(_v1, {
                      set: (_v0, _v1, _v2) => ("router" === _v1 && "object" == typeof _v2 && null !== _v2 && _v274(_v0, _v2, _v269), _v0[_v1] = _v2, !0)
                    }));
                  }));
                }, 20);
              }
            }(_v0), _v1.afterAllSetup(_v0), _v2 && function (_v0) {
              if (_v92.document.getElementById("__NEXT_DATA__")) !function (_v0) {
                let {
                    route: _v1,
                    params: _v2,
                    sentryTrace: _v3,
                    baggage: _v4
                  } = function () {
                    let _v0,
                      _v1 = _v92.document.getElementById("__NEXT_DATA__");
                    if (_v1?.innerHTML) try {
                      _v0 = JSON.parse(_v1.innerHTML);
                    } catch {
                      _v159.DEBUG_BUILD && _v16.debug.warn("Could not extract __NEXT_DATA__");
                    }
                    if (!_v0) return {};
                    let _v2 = {},
                      {
                        page: _v3,
                        query: _v4,
                        props: _v5
                      } = _v0;
                    return _v2.route = _v3, _v2.params = _v4, _v5?.pageProps && (_v2.sentryTrace = _v5.pageProps._sentryTraceData, _v2.baggage = _v5.pageProps._sentryBaggage), _v2;
                  }(),
                  _v5 = (0, _v238.parseBaggageHeader)(_v4),
                  _v6 = _v1 || _v92.location.pathname;
                _v5?.["sentry-transaction"] && "/_error" === _v6 && (_v6 = (_v6 = _v5["sentry-transaction"]).replace(/^(GET|POST|PUT|DELETE|PATCH|HEAD|OPTIONS|TRACE|CONNECT)\s+/i, ""));
                let _v7 = (0, _v46.browserPerformanceTimeOrigin)();
                _v252(_v0, {
                  name: _v6,
                  startTime: _v7 ? _v7 / 0 : void 0,
                  attributes: {
                    [_v34.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "pageload",
                    [_v34.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.pageload.nextjs.pages_router_instrumentation",
                    [_v34.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: _v1 ? "route" : "url",
                    ...(_v2 && _v0.getOptions().sendDefaultPii && {
                      ..._v2
                    })
                  }
                }, {
                  sentryTrace: _v3,
                  baggage: _v4
                });
              }(_v0);else {
                let _v0, _v1, _v2;
                _v1 = _v265(_v0 = _v266(_v92.location.pathname)), _v252(_v0, {
                  name: _v1 ?? _v0,
                  startTime: (_v2 = (0, _v46.browserPerformanceTimeOrigin)()) ? _v2 / 0 : void 0,
                  attributes: {
                    [_v34.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "pageload",
                    [_v34.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.pageload.nextjs.app_router_instrumentation",
                    [_v34.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: _v1 ? "route" : "url"
                  }
                });
              }
            }(_v0));
          }
        };
      }()), _v4 = _v15.default.env._sentryBasePath || _v283._sentryBasePath, _v5 = "true" === _v15.default.env._experimentalThirdPartyOriginStackFrames || "true" === _v283._experimentalThirdPartyOriginStackFrames, _v3.push((({
        assetPrefix: _v0,
        basePath: _v1,
        rewriteFramesAssetPrefixPath: _v2,
        experimentalThirdPartyOriginStackFrames: _v3
      }) => ({
        ...((_v0 = {}) => {
          let _v1 = _v0.root,
            _v2 = _v0.prefix || "app:///",
            _v3 = "window" in _v17.GLOBAL_OBJ && !!_v17.GLOBAL_OBJ.window,
            _v4 = _v0.iteratee || function ({
              isBrowser: _v0,
              root: _v1,
              prefix: _v2
            }) {
              return _v0 => {
                if (!_v0.filename) return _v0;
                let _v1 = /^[a-zA-Z]:\\/.test(_v0.filename) || _v0.filename.includes("\\") && !_v0.filename.includes("/"),
                  _v2 = /^\//.test(_v0.filename);
                if (_v0) {
                  if (_v1) {
                    let _v0 = _v0.filename;
                    0 === _v0.indexOf(_v1) && (_v0.filename = _v0.replace(_v1, _v2));
                  }
                } else if (_v1 || _v2) {
                  let _v0,
                    _v1,
                    _v2 = _v1 ? _v0.filename.replace(/^[a-zA-Z]:/, "").replace(/\\/g, "/") : _v0.filename,
                    _v3 = _v1 ? function (_v0, _v1) {
                      _v0 = _v278(_v0).slice(1), _v1 = _v278(_v1).slice(1);
                      let _v2 = _v279(_v0.split("/")),
                        _v3 = _v279(_v1.split("/")),
                        _v4 = Math.min(_v2.length, _v3.length),
                        _v5 = _v4;
                      for (let _v0 = 0; _v0 < _v4; _v0++) if (_v2[_v0] !== _v3[_v0]) {
                        _v5 = _v0;
                        break;
                      }
                      let _v6 = [];
                      for (let _v0 = _v5; _v0 < _v2.length; _v0++) _v6.push("..");
                      return (_v6 = _v6.concat(_v3.slice(_v5))).join("/");
                    }(_v1, _v2) : (_v0 = _v2.length > 0 ? `<truncated>${_v2.slice(0)}` : _v2, (_v1 = _v277.exec(_v0)) ? _v1.slice(1) : [])[2] || "";
                  _v0.filename = `${_v2}${_v3}`;
                }
                return _v0;
              };
            }({
              isBrowser: _v3,
              root: _v1,
              prefix: _v2
            });
          return {
            name: "RewriteFrames",
            processEvent(_v0) {
              let _v1 = _v0;
              return _v0.exception && Array.isArray(_v0.exception.values) && (_v1 = function (_v0) {
                try {
                  return {
                    ..._v0,
                    exception: {
                      ..._v0.exception,
                      values: _v0.exception.values.map(_v0 => {
                        var _v1;
                        return {
                          ..._v0,
                          ...(_v0.stacktrace && {
                            stacktrace: {
                              ...(_v1 = _v0.stacktrace),
                              frames: _v1?.frames?.map(_v0 => _v4(_v0))
                            }
                          })
                        };
                      })
                    }
                  };
                } catch {
                  return _v0;
                }
              }(_v1)), _v1;
            }
          };
        })({
          iteratee: _v0 => {
            if (_v3) {
              let _v0 = "u" > typeof window && window.location ? window.location.origin : "";
              if (_v0.filename?.startsWith(_v0) && !_v0.filename.endsWith(".js")) return _v0;
              if (_v0) _v0.filename?.startsWith(_v0) && (_v0.filename = _v0.filename.replace(_v0, "app://"));else if (_v1) try {
                let {
                  origin: _v0
                } = new URL(_v0.filename);
                _v0 === _v0 && (_v0.filename = _v0.filename?.replace(_v0, "app://").replace(_v1, ""));
              } catch {}
            } else try {
              let {
                origin: _v0
              } = new URL(_v0.filename);
              _v0.filename = _v0.filename?.replace(_v0, "app://").replace(_v2, "");
            } catch {}
            return _v3 ? (_v0.filename?.includes("/_next") && (_v0.filename = decodeURI(_v0.filename)), _v0.filename?.match(/\/_next\/static\/chunks\/(main-|main-app-|polyfills-|webpack-|framework-|framework\.)[0-9a-f]+\.js$/) && (_v0.in_app = !1)) : (_v0.filename?.startsWith("app:///_next") && (_v0.filename = decodeURI(_v0.filename)), _v0.filename?.match(/^app:\/\/\/_next\/static\/chunks\/(main-|main-app-|polyfills-|webpack-|framework-|framework\.)[0-9a-f]+\.js$/) && (_v0.in_app = !1)), _v0;
          }
        }),
        name: "NextjsClientStackFrameNormalization"
      }))({
        assetPrefix: "https://f.vimeocdn.com/next-server/vimeo-next",
        basePath: _v4,
        rewriteFramesAssetPrefixPath: "/next-server/vimeo-next",
        experimentalThirdPartyOriginStackFrames: _v5
      })), _v3),
      release: "f9e2b73bec1750bf5fc02f9f368ccdc63c6e6deb",
      ..._v0
    };
    !function (_v0) {
      let _v1 = _v15.default.env._sentryRewritesTunnelPath || _v281._sentryRewritesTunnelPath;
      if (_v1 && _v0.dsn) {
        let _v0 = (0, _v40.dsnFromString)(_v0.dsn);
        if (!_v0) return;
        let _v1 = _v0.host.match(/^o(\d+)\.ingest(?:\.([a-z]{2}))?\.sentry\.io$/);
        if (_v1) {
          let _v0 = _v1[1],
            _v1 = _v1[2],
            _v2 = `${_v1}?o=${_v0}&p=${_v0.projectId}`;
          _v1 && (_v2 += `&r=${_v1}`), _v0.tunnel = _v2, _v159.DEBUG_BUILD && _v16.debug.log(`Tunneling events to "${_v2}"`);
        } else _v159.DEBUG_BUILD && _v16.debug.warn("Provided DSN is not a Sentry SaaS DSN. Will not tunnel events.");
      }
    }(_v6), _v19(_v6, "nextjs", ["nextjs", "react"]), _v19(_v2 = {
      ..._v6
    }, "react"), (0, _v20.setContext)("react", {
      version: _v158.version
    }), function (_v0 = {}) {
      var _v1;
      let _v2,
        _v3 = !_v0.skipBrowserExtensionCheck && !!function () {
          if (void 0 === _v92.window || _v92.nw) return !1;
          let _v0 = _v92.chrome || _v92.browser;
          if (!_v0?.runtime?.id) return !1;
          let _v1 = (0, _v91.getLocationHref)();
          return !(_v92 === _v92.top && /^(?:chrome-extension|moz-extension|ms-browser-extension|safari-web-extension):\/\//.test(_v1));
        }() && (_v126 && (0, _v16.consoleSandbox)(() => {
          console.error("[Sentry] You cannot use Sentry.init() in a browser extension, see: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/");
        }), !0),
        _v4 = null == _v0.defaultIntegrations ? _v157() : _v0.defaultIntegrations,
        _v5 = {
          ..._v0,
          enabled: !_v3 && _v0.enabled,
          stackParser: (0, _v36.stackParserFromStackParserOptions)(_v0.stackParser || _v152),
          integrations: function (_v0) {
            let _v1,
              _v2,
              _v3 = _v0.defaultIntegrations || [],
              _v4 = _v0.integrations;
            if (_v3.forEach(_v0 => {
              _v0.isDefaultInstance = !0;
            }), Array.isArray(_v4)) _v1 = [..._v3, ..._v4];else if ("function" == typeof _v4) {
              let _v0 = _v4(_v3);
              _v1 = Array.isArray(_v0) ? _v0 : [_v0];
            } else _v1 = _v3;
            return _v2 = {}, _v1.forEach(_v0 => {
              let {
                  name: _v1
                } = _v0,
                _v2 = _v2[_v1];
              _v2 && !_v2.isDefaultInstance && _v0.isDefaultInstance || (_v2[_v1] = _v0);
            }), Object.values(_v2);
          }({
            integrations: _v0.integrations,
            defaultIntegrations: _v4
          }),
          transport: _v0.transport || _v156
        };
      !0 === _v5.debug && (_v22.DEBUG_BUILD ? _v16.debug.enable() : (0, _v16.consoleSandbox)(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      })), (0, _v21.getCurrentScope)().update(_v5.initialScope), _v1 = _v2 = new _v96(_v5), (0, _v21.getCurrentScope)().setClient(_v1), _v2.init();
    }(_v2);
    let _v7 = _v0 => "transaction" === _v0.type && "/404" === _v0.transaction ? null : _v0;
    _v7.id = "NextClient404Filter", (0, _v20.addEventProcessor)(_v7);
    let _v8 = _v0 => "transaction" === _v0.type && _v0.transaction === _v267 ? null : _v0;
    _v8.id = "IncompleteTransactionFilter", (0, _v20.addEventProcessor)(_v8);
    let _v9 = (_v0, _v1) => {
      var _v2;
      return (_v2 = _v1?.originalException, (0, _v44.isError)(_v2) && "string" == typeof _v2.digest && _v2.digest.startsWith("NEXT_REDIRECT;") || _v0.exception?.values?.[0]?.value === "NEXT_REDIRECT") ? null : _v0;
    };
    _v9.id = "NextRedirectErrorFilter", (0, _v20.addEventProcessor)(_v9);
    try {
      (0, _v21.getGlobalScope)().setTag("turbopack", !0);
    } catch {}
  }({
    dsn: "https://0a37e74b815884a9b93905d42fd36619@o6787.ingest.us.sentry.io/4511274141876224",
    environment: _v284,
    tracesSampleRate: _v285 ? .01 : 1,
    ignoreErrors: ["fresnel-events.vimeocdn.com", "browser-intake-datadoghq.com", "zaloJSV2", "JsInternal", "telemetry.transcend.io"],
    beforeBreadcrumb: _v0 => "xhr" === _v0.category && "string" == typeof _v0.data?.url && _v0.data.url.includes("vimeocdn.com") && 200 === _v0.data.status_code ? null : _v0,
    beforeSend(_v0, _v1) {
      let _v2;
      if (function () {
        let _v0 = "u" > typeof navigator ? navigator.userAgent : "";
        if (!/;\s*wv\)/.test(_v0)) return !1;
        let _v1 = Number(_v0.match(/Chrome\/(\d+)\./)?.[1] ?? 0);
        return _v1 > 0 && _v1 < 110;
      }() || (_v2 = "u" > typeof navigator ? navigator.userAgent : "", /Lightpanda/i.test(_v2))) return null;
      let _v3 = _v1.originalException;
      if ("u" > typeof Event && _v3 instanceof Event && "error" === _v3.type && _v3.target instanceof Element && ["LINK", "SCRIPT", "IMG"].includes(_v3.target.tagName)) return null;
      let _v4 = _v0.exception?.values?.[0];
      if (_v4?.type === "SyntaxError") {
        let _v0 = _v4.stacktrace?.frames,
          _v1 = _v4.mechanism?.type === "auto.browser.global_handlers.onerror" || _v4.mechanism?.type === "onerror" || _v4.mechanism?.type === "auto.browser.global_handlers.onunhandledrejection" || _v4.mechanism?.type === "onunhandledrejection";
        if (_v0?.length === 1) {
          let _v0 = _v0[0].filename ?? _v0[0].abs_path ?? "";
          if (_v0.startsWith("app:///") && !_v0.includes("_next/static") && _v1) return null;
        }
      }
      let _v5 = _v0.exception?.values?.[0];
      if (_v5?.type === "TypeError") {
        let _v0 = _v5.mechanism?.type === "auto.browser.global_handlers.onerror" || _v5.mechanism?.type === "onerror",
          _v1 = _v5.stacktrace?.frames;
        if (_v0 && _v1?.length === 1) {
          let _v0 = _v1[0].filename ?? _v1[0].abs_path ?? "";
          if ("" === _v0 || "<anonymous>" === _v0 || "[native code]" === _v0) return null;
        }
      }
      let _v6 = _v0.exception?.values?.[0];
      if (_v6?.type === "TypeError" && _v6.value?.startsWith("Failed to fetch")) {
        let _v0 = _v6.stacktrace?.frames ?? [],
          _v1 = _v0.findIndex(_v0 => {
            let _v1 = _v0.filename ?? _v0.abs_path ?? "";
            return _v1.includes("datadog-rum.js") || _v1.includes("ajax-listener.js");
          }),
          _v2 = _v0.some((_v0, _v1) => !(_v1 >= _v1) && !!(_v0.filename ?? _v0.abs_path ?? "").includes("_next/static") && !1 !== _v0.in_app && !_v0.some((_v0, _v1) => {
            if (_v1 <= _v1 || _v1 >= _v1) return !1;
            let _v2 = _v0.filename ?? _v0.abs_path ?? "";
            return _v2.includes("/cm/") || _v2.includes("airgap.js");
          }));
        if (-1 !== _v1 && !_v2 || (_v288 += 1) > 1) return null;
      }
      let _v7 = _v0.exception?.values?.[0];
      if (_v7?.type === "TypeError" && _v7.mechanism?.type === "auto.browser.browserapierrors.addEventListener" && /\.split is not a function/.test(_v7.value ?? "")) {
        let _v0 = "u" > typeof navigator ? navigator.userAgent : "";
        if (/Tizen|SMART-TV/i.test(_v0)) return null;
      }
      let _v8 = _v0.exception?.values?.[0];
      if (_v8?.type === "TypeError" && "Illegal invocation" === _v8.value) {
        let _v0 = _v8.stacktrace?.frames ?? [];
        if (_v0.length > 0 && _v0.every(_v0 => (_v0.filename ?? _v0.abs_path ?? "").includes("airgap.js"))) return null;
      }
      let _v9 = _v0.exception?.values?.[0];
      if (_v9?.type === "TypeError" && "Cannot read properties of null (reading 'lastChild')" === _v9.value && (_v9.mechanism?.type === "auto.browser.global_handlers.onerror" || _v9.mechanism?.type === "onerror") && (_v9.stacktrace?.frames ?? []).some(_v0 => "prepareVideo" === _v0.function)) return null;
      let _v10 = _v0.exception?.values?.[0];
      if (_v10?.type === "InvalidStateError" && "The object is in an invalid state." === _v10.value && _v10.mechanism?.type === "auto.browser.browserapierrors.addEventListener" && _v10.mechanism?.handled === !1 && _v10.mechanism?.data?.handler === "<anonymous>") {
        let _v0 = _v10.stacktrace?.frames ?? [];
        if (_v0.length > 0 && _v0.every(_v0 => (_v0.filename ?? _v0.abs_path ?? "").includes("@sentry"))) return null;
      }
      let _v11 = _v0.exception?.values?.[0];
      if (_v11?.type === "InvalidStateError" && _v11.mechanism?.type === "auto.browser.browserapierrors.addEventListener" && _v11.mechanism?.handled === !1 && /Failed to read the 'responseText' property from 'XMLHttpRequest'/.test(_v11.value ?? "") && /was 'arraybuffer'/.test(_v11.value ?? "")) return null;
      let _v12 = _v0.exception?.values?.[0];
      if (_v12?.mechanism?.type === "auto.browser.browserapierrors.addEventListener" && _v12.mechanism?.handled === !1 && /Java exception was raised during method invocation/.test(_v12.value ?? "")) return null;
      let _v13 = _v0.exception?.values?.[0];
      if (_v13?.type === "UnhandledRejection" && /Object Not Found Matching Id:\d+, MethodName:\w+, ParamCount:\d+/.test(_v13.value ?? "") && !(_v13.stacktrace?.frames ?? []).some(_v0 => {
        let _v1 = _v0.filename ?? _v0.abs_path ?? "";
        return _v1.includes("_next/static") && !1 !== _v0.in_app || _v1.includes("app:///p/") || _v1.includes("/telecine") || _v1.includes("/media-sorcerer");
      })) return null;
      let _v14 = _v0.exception?.values?.[0];
      if (_v14?.type === "TypeError" && /window\.webkit\.messageHandlers/.test(_v14.value ?? "")) return null;
      let _v15 = _v0.exception?.values?.[0];
      if (_v15?.type === "AbortError" && "signal is aborted without reason" === _v15.value && _v15.mechanism?.handled === !1 && (_v15.mechanism?.type === "auto.browser.global_handlers.onunhandledrejection" || _v15.mechanism?.type === "onunhandledrejection")) return null;
      let _v16 = _v0.exception?.values?.[0];
      if (_v16?.value?.startsWith("Module load timeout") && (_v287 += 1) > 1) return null;
      if (_v0.exception?.values?.[0]?.type === "UnhandledRejection" && void 0 === _v1.originalException) try {
        let _v0 = document.querySelector("[data-ready]"),
          _v1 = null,
          _v2 = document.querySelector("video");
        if (_v2) {
          let _v0 = null;
          try {
            _v0 = _v2.currentSrc && new URL(_v2.currentSrc).hostname || null;
          } catch {
            _v0 = null;
          }
          _v1 = {
            readyState: _v2.readyState,
            networkState: _v2.networkState,
            errorCode: _v2.error?.code ?? null,
            paused: _v2.paused,
            currentTime: Math.round(_v2.currentTime),
            duration: Number.isFinite(_v2.duration) ? Math.round(_v2.duration) : null,
            srcHost: _v0
          };
        }
        let _v3 = _v0.breadcrumbs ?? [],
          _v4 = _v3.filter(_v0 => ("xhr" === _v0.category || "fetch" === _v0.category) && _v0.data?.status_code === 0).length,
          _v5 = document.activeElement;
        _v0.extra = {
          ..._v0.extra,
          timeSincePageLoadMs: Math.round(performance.now()),
          dataReady: _v0?.getAttribute("data-ready") ?? null,
          url: window.location.href,
          breadcrumbCount: _v3.length,
          videoState: _v1,
          failedRequestBreadcrumbs: _v4,
          online: navigator.onLine,
          visibilityState: document.visibilityState,
          activeElement: _v5 ? `${_v5.tagName.toLowerCase()}${_v5.id ? `#${_v5.id}` : ""}` : null
        };
      } catch {}
      return _v0;
    }
  }), _v0.s(["onRouterTransitionStart", 0, function (_v0, _v1) {
    _v14 && _v14(_v0, _v1);
  }], 0);
}