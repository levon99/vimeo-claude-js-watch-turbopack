{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  let _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0),
    _v8 = _v0.r(0),
    _v9 = _v0.r(0),
    _v10 = _v0.r(0),
    _v11 = _v0.r(0),
    _v12 = _v0.r(0),
    _v13 = _v0.r(0),
    _v14 = _v0.r(0),
    _v15 = _v0.r(0),
    _v16 = _v0.r(0),
    _v17 = _v0.r(0),
    _v18 = _v0.r(0);
  _v2.default = class {
    constructor(_v0) {
      this.queuedAssignmentEvents = [], this.banditEventsQueue = [], this.precomputedFlagStore = _v0.precomputedFlagStore, this.precomputedBanditStore = _v0.precomputedBanditStore, this.overrideStore = _v0.overrideStore;
      const {
        subjectKey: _v1,
        subjectAttributes: _v2
      } = _v0.subject;
      this.subject = {
        subjectKey: _v1,
        subjectAttributes: (0, _v5.ensureContextualSubjectAttributes)(_v2)
      }, this.banditActions = _v0.banditActions, _v0.requestParameters ? this.requestParameters = _v0.requestParameters : (this.precomputedFlagStore.getKeys().length > 0 && (this.precomputedFlagStore.isInitialized() || _v4.logger.error(`${_v4.loggerPrefix} EppoPrecomputedClient requires an initialized precomputedFlagStore if requestParameters are not provided`), this.precomputedFlagStore.salt || _v4.logger.error(`${_v4.loggerPrefix} EppoPrecomputedClient requires a precomputedFlagStore with a salt if requestParameters are not provided`)), this.precomputedBanditStore && !this.precomputedBanditStore.isInitialized() && _v4.logger.error(`${_v4.loggerPrefix} Passing banditOptions without requestParameters requires an initialized precomputedBanditStore`), this.precomputedBanditStore && !this.precomputedBanditStore.salt && _v4.logger.warn(`${_v4.loggerPrefix} EppoPrecomputedClient missing or empty salt for precomputedBanditStore`));
    }
    async fetchPrecomputedFlags() {
      if (!this.requestParameters) throw Error("Eppo SDK unable to fetch precomputed flags without the request parameters");
      this.requestPoller?.stop();
      let {
          apiKey: _v0,
          sdkName: _v1,
          sdkVersion: _v2,
          baseUrl: _v3,
          requestTimeoutMs: _v4 = _v8.DEFAULT_REQUEST_TIMEOUT_MS,
          numInitialRequestRetries: _v5 = _v8.DEFAULT_INITIAL_CONFIG_REQUEST_RETRIES,
          numPollRequestRetries: _v6 = _v8.DEFAULT_POLL_CONFIG_REQUEST_RETRIES,
          pollAfterSuccessfulInitialization: _v7 = !1,
          pollAfterFailedInitialization: _v8 = !1,
          throwOnFailedInitialization: _v9 = !1,
          skipInitialPoll: _v10 = !1
        } = this.requestParameters,
        {
          subjectKey: _v11,
          subjectAttributes: _v12
        } = this.subject,
        {
          pollingIntervalMs: _v13 = _v8.DEFAULT_POLL_INTERVAL_MS
        } = this.requestParameters;
      _v13 <= 0 && (_v4.logger.error("pollingIntervalMs must be greater than 0. Using default"), _v13 = _v8.DEFAULT_POLL_INTERVAL_MS);
      let _v14 = new _v3.default({
          defaultUrl: _v8.PRECOMPUTED_BASE_URL,
          baseUrl: _v3,
          queryParams: {
            apiKey: _v0,
            sdkName: _v1,
            sdkVersion: _v2
          },
          sdkTokenDecoder: new _v15.default(_v0)
        }),
        _v15 = new _v10.default(_v14, _v4),
        _v16 = new _v14.default(_v15, this.precomputedFlagStore, _v11, _v12, this.precomputedBanditStore, this.banditActions),
        _v17 = async () => {
          if (await this.precomputedFlagStore.isExpired()) return _v16.fetchAndStorePrecomputedFlags();
        };
      this.requestPoller = (0, _v13.default)(_v13, _v17, {
        maxStartRetries: _v5,
        maxPollRetries: _v6,
        pollAfterSuccessfulStart: _v7,
        pollAfterFailedStart: _v8,
        errorOnFailedStart: _v9,
        skipInitialPoll: _v10
      }), await this.requestPoller.start();
    }
    stopPolling() {
      this.requestPoller && this.requestPoller.stop();
    }
    getPrecomputedAssignment(_v0, _v1, _v2, _v3 = _v0 => _v0) {
      (0, _v16.validateNotBlank)(_v0, "Invalid argument: flagKey cannot be blank");
      let _v4 = this.overrideStore?.get(_v0);
      if (_v4) return _v3(_v4.value);
      let _v5 = this.getPrecomputedFlag(_v0);
      if (null == _v5) return _v4.logger.warn(`${_v4.loggerPrefix} No assigned variation. Flag not found: ${_v0}`), _v1;
      if (!(0, _v18.checkTypeMatch)(_v2, _v5.variationType)) {
        let _v0 = `${_v4.loggerPrefix} Type mismatch: expected ${_v2} but flag ${_v0} has type ${_v5.variationType}`;
        return _v4.logger.error(_v0), _v1;
      }
      let _v6 = {
        flagKey: _v0,
        format: this.precomputedFlagStore.getFormat() ?? "",
        subjectKey: this.subject.subjectKey ?? "",
        subjectAttributes: (0, _v5.ensureNonContextualSubjectAttributes)(this.subject.subjectAttributes ?? {}),
        variation: {
          key: _v5.variationKey ?? "",
          value: _v5.variationValue
        },
        allocationKey: _v5.allocationKey ?? "",
        extraLogging: _v5.extraLogging ?? {},
        doLog: _v5.doLog,
        entityId: null
      };
      try {
        _v6?.doLog && this.logAssignment(_v6);
      } catch (_v0) {
        _v4.logger.error(`${_v4.loggerPrefix} Error logging assignment event: ${_v0}`);
      }
      try {
        return _v6.variation?.value !== void 0 ? _v3(_v6.variation.value) : _v1;
      } catch (_v0) {
        return _v4.logger.error(`${_v4.loggerPrefix} Error transforming value: ${_v0}`), _v1;
      }
    }
    getStringAssignment(_v0, _v1) {
      return this.getPrecomputedAssignment(_v0, _v1, _v11.VariationType.STRING);
    }
    getBooleanAssignment(_v0, _v1) {
      return this.getPrecomputedAssignment(_v0, _v1, _v11.VariationType.BOOLEAN);
    }
    getIntegerAssignment(_v0, _v1) {
      return this.getPrecomputedAssignment(_v0, _v1, _v11.VariationType.INTEGER);
    }
    getNumericAssignment(_v0, _v1) {
      return this.getPrecomputedAssignment(_v0, _v1, _v11.VariationType.NUMERIC);
    }
    getJSONAssignment(_v0, _v1) {
      return this.getPrecomputedAssignment(_v0, _v1, _v11.VariationType.JSON, _v0 => "string" == typeof _v0 ? JSON.parse(_v0) : _v1);
    }
    getBanditAction(_v0, _v1) {
      if (!this.getPrecomputedFlag(_v0)) return _v4.logger.warn(`${_v4.loggerPrefix} No assigned variation. Flag not found: ${_v0}`), {
        variation: _v1,
        action: null
      };
      let _v2 = this.getPrecomputedBandit(_v0),
        _v3 = this.getStringAssignment(_v0, _v1);
      if (_v2) {
        let _v0 = {
          timestamp: new Date().toISOString(),
          featureFlag: _v0,
          bandit: _v2.banditKey,
          subject: this.subject.subjectKey ?? "",
          action: _v2.action,
          actionProbability: _v2.actionProbability,
          optimalityGap: _v2.optimalityGap,
          modelVersion: _v2.modelVersion,
          subjectNumericAttributes: _v2.actionNumericAttributes,
          subjectCategoricalAttributes: _v2.actionCategoricalAttributes,
          actionNumericAttributes: _v2.actionNumericAttributes,
          actionCategoricalAttributes: _v2.actionCategoricalAttributes,
          metaData: this.buildLoggerMetadata(),
          evaluationDetails: null
        };
        try {
          this.logBanditAction(_v0);
        } catch (_v0) {
          _v4.logger.error(`${_v4.loggerPrefix} Error logging bandit action: ${_v0}`);
        }
        return {
          variation: _v3,
          action: _v0.action
        };
      }
      return {
        variation: _v3,
        action: null
      };
    }
    getPrecomputedFlag(_v0) {
      return this.getObfuscatedFlag(_v0);
    }
    getObfuscatedFlag(_v0) {
      let _v1 = this.precomputedFlagStore.salt,
        _v2 = (0, _v12.getMD5Hash)(_v0, _v1),
        _v3 = this.precomputedFlagStore.get(_v2);
      return _v3 ? (0, _v9.decodePrecomputedFlag)(_v3) : null;
    }
    getPrecomputedBandit(_v0) {
      let _v1 = this.getObfuscatedPrecomputedBandit(_v0);
      return _v1 ? (0, _v9.decodePrecomputedBandit)(_v1) : null;
    }
    getObfuscatedPrecomputedBandit(_v0) {
      let _v1 = this.precomputedBanditStore?.salt,
        _v2 = (0, _v12.getMD5Hash)(_v0, _v1);
      return this.precomputedBanditStore?.get(_v2) ?? null;
    }
    isInitialized() {
      return this.precomputedFlagStore.isInitialized();
    }
    setAssignmentLogger(_v0) {
      this.assignmentLogger = _v0, this.flushQueuedEvents(this.queuedAssignmentEvents, this.assignmentLogger?.logAssignment);
    }
    setBanditLogger(_v0) {
      this.banditLogger = _v0, this.flushQueuedEvents(this.banditEventsQueue, this.banditLogger?.logBanditAction);
    }
    disableAssignmentCache() {
      this.assignmentCache = void 0;
    }
    useNonExpiringInMemoryAssignmentCache() {
      this.assignmentCache = new _v7.NonExpiringInMemoryAssignmentCache();
    }
    useLRUInMemoryAssignmentCache(_v0) {
      this.assignmentCache = new _v6.LRUInMemoryAssignmentCache(_v0);
    }
    useCustomAssignmentCache(_v0) {
      this.assignmentCache = _v0;
    }
    flushQueuedEvents(_v0, _v1) {
      let _v2 = [..._v0];
      _v0.length = 0, _v1 && _v2.forEach(_v0 => {
        try {
          _v1(_v0);
        } catch (_v0) {
          _v4.logger.error(`${_v4.loggerPrefix} Error flushing event to logger: ${_v0.message}`);
        }
      });
    }
    logAssignment(_v0) {
      let {
          flagKey: _v1,
          subjectKey: _v2,
          allocationKey: _v3,
          subjectAttributes: _v4,
          variation: _v5,
          format: _v6
        } = _v0,
        _v7 = {
          ...(_v0.extraLogging ?? {}),
          allocation: _v3 ?? null,
          experiment: _v3 ? `${_v1}-${_v3}` : null,
          featureFlag: _v1,
          format: _v6,
          variation: _v5?.key ?? null,
          subject: _v2,
          timestamp: new Date().toISOString(),
          subjectAttributes: _v4,
          metaData: this.buildLoggerMetadata(),
          evaluationDetails: null
        };
      if (!(_v5 && _v3 && this.assignmentCache?.has({
        flagKey: _v1,
        subjectKey: _v2,
        allocationKey: _v3,
        variationKey: _v5.key
      }))) try {
        this.assignmentLogger ? this.assignmentLogger.logAssignment(_v7) : this.queuedAssignmentEvents.length < _v8.MAX_EVENT_QUEUE_SIZE && this.queuedAssignmentEvents.push(_v7), this.assignmentCache?.set({
          flagKey: _v1,
          subjectKey: _v2,
          allocationKey: _v3 ?? "__eppo_no_allocation",
          variationKey: _v5?.key ?? "__eppo_no_variation"
        });
      } catch (_v0) {
        _v4.logger.error(`${_v4.loggerPrefix} Error logging assignment event: ${_v0.message}`);
      }
    }
    logBanditAction(_v0) {
      let _v1 = _v0.subject,
        _v2 = _v0.featureFlag,
        _v3 = {
          flagKey: _v2,
          subjectKey: _v1,
          banditKey: _v0.bandit,
          actionKey: _v0.action ?? "__eppo_no_action"
        };
      if (!this.banditAssignmentCache?.has(_v3)) try {
        this.banditLogger ? this.banditLogger.logBanditAction(_v0) : this.banditEventsQueue.push(_v0), this.banditAssignmentCache?.set(_v3);
      } catch (_v0) {
        _v4.logger.warn({
          err: _v0
        }, "Error encountered logging bandit action");
      }
    }
    buildLoggerMetadata() {
      return {
        obfuscated: !0,
        sdkLanguage: "javascript",
        sdkLibVersion: _v17.LIB_VERSION
      };
    }
    setOverrideStore(_v0) {
      this.overrideStore = _v0;
    }
    unsetOverrideStore() {
      this.overrideStore = void 0;
    }
  };
}