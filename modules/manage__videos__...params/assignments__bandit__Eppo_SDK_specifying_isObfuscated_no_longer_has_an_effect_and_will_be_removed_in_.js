{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.checkTypeMatch = _v32, _v2.checkValueTypeMatch = function (_v0, _v1) {
    if (void 0 == _v0) return !0;
    switch (_v0) {
      case _v24.VariationType.STRING:
        return "string" == typeof _v1;
      case _v24.VariationType.BOOLEAN:
        return "boolean" == typeof _v1;
      case _v24.VariationType.INTEGER:
        return "number" == typeof _v1 && Number.isInteger(_v1);
      case _v24.VariationType.NUMERIC:
        return "number" == typeof _v1;
      case _v24.VariationType.JSON:
        return "string" == typeof _v1;
      default:
        return !1;
    }
  };
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
    _v18 = _v0.r(0),
    _v19 = _v0.r(0),
    _v20 = _v0.r(0),
    _v21 = _v0.r(0),
    _v22 = _v0.r(0),
    _v23 = _v0.r(0),
    _v24 = _v0.r(0),
    _v25 = _v0.r(0),
    _v26 = _v0.r(0),
    _v27 = _v0.r(0),
    _v28 = _v0.r(0),
    _v29 = _v0.r(0),
    _v30 = _v0.r(0),
    _v31 = _v0.r(0);
  function _v32(_v0, _v1) {
    return void 0 === _v0 || _v1 === _v0;
  }
  _v2.default = class {
    constructor({
      eventDispatcher: _v0 = new _v19.default(),
      isObfuscated: _v1,
      flagConfigurationStore: _v2,
      banditVariationConfigurationStore: _v3,
      banditModelConfigurationStore: _v4,
      overrideStore: _v5,
      configurationRequestParameters: _v6
    }) {
      this.assignmentEventsQueue = new _v18.BoundedEventQueue("assignments"), this.banditEventsQueue = new _v18.BoundedEventQueue("bandit"), this.banditEvaluator = new _v7.BanditEvaluator(), this.isGracefulFailureMode = !0, this.evaluator = new _v17.Evaluator(), this.overrideValidator = new _v26.OverrideValidator(), this.eventDispatcher = _v0, this.flagConfigurationStore = _v2, this.banditVariationConfigurationStore = _v3, this.banditModelConfigurationStore = _v4, this.overrideStore = _v5, this.configurationRequestParameters = _v6, void 0 !== _v1 && _v5.logger.warn("[Eppo SDK] specifying isObfuscated no longer has an effect and will be removed in the next major release; obfuscation is now inferred from the configuration, so you can safely remove the option.");
    }
    getConfiguration() {
      return this.configurationRequestor ? this.configurationRequestor.getConfiguration() : new _v23.StoreBackedConfiguration(this.flagConfigurationStore, this.banditVariationConfigurationStore, this.banditModelConfigurationStore);
    }
    async parseOverrides(_v0) {
      if (!_v0) return;
      let _v1 = this.overrideValidator.parseOverridePayload(_v0);
      return await this.overrideValidator.validateKey(_v1.browserExtensionKey), _v1.overrides;
    }
    withOverrides(_v0) {
      if (_v0 && Object.keys(_v0).length) {
        let _v0 = (0, _v29.shallowClone)(this);
        return _v0.overrideStore = new _v12.MemoryOnlyConfigurationStore(), _v0.overrideStore.setEntries(_v0), _v0;
      }
      return this;
    }
    setConfigurationRequestParameters(_v0) {
      this.configurationRequestParameters = _v0;
    }
    setFlagConfigurationStore(_v0) {
      this.flagConfigurationStore = _v0, this.updateConfigRequestorIfExists();
    }
    setBanditVariationConfigurationStore(_v0) {
      this.banditVariationConfigurationStore = _v0, this.updateConfigRequestorIfExists();
    }
    setEventDispatcher(_v0) {
      this.eventDispatcher = _v0;
    }
    setContext(_v0, _v1) {
      this.eventDispatcher?.attachContext(_v0, _v1);
    }
    setBanditModelConfigurationStore(_v0) {
      this.banditModelConfigurationStore = _v0, this.updateConfigRequestorIfExists();
    }
    updateConfigRequestorIfExists() {
      this.configurationRequestor && this.configurationRequestor.setConfigurationStores(this.flagConfigurationStore, this.banditVariationConfigurationStore || null, this.banditModelConfigurationStore || null);
    }
    setIsObfuscated(_v0) {
      _v5.logger.warn("[Eppo SDK] setIsObfuscated no longer has an effect and will be removed in the next major release; obfuscation is now inferred from the configuration, so you can safely remove the call to this method.");
    }
    setOverrideStore(_v0) {
      this.overrideStore = _v0;
    }
    unsetOverrideStore() {
      this.overrideStore = void 0;
    }
    getOverrideVariationKeys() {
      return Object.fromEntries(Object.entries(this.overrideStore?.entries() ?? {}).map(([_v0, _v1]) => [_v0, _v1.key]));
    }
    async fetchFlagConfigurations() {
      if (!this.configurationRequestParameters) throw Error("Eppo SDK unable to fetch flag configurations without configuration request parameters");
      this.requestPoller?.stop();
      let {
          apiKey: _v0,
          sdkName: _v1,
          sdkVersion: _v2,
          baseUrl: _v3,
          requestTimeoutMs: _v4 = _v14.DEFAULT_REQUEST_TIMEOUT_MS,
          numInitialRequestRetries: _v5 = _v14.DEFAULT_INITIAL_CONFIG_REQUEST_RETRIES,
          numPollRequestRetries: _v6 = _v14.DEFAULT_POLL_CONFIG_REQUEST_RETRIES,
          pollAfterSuccessfulInitialization: _v7 = !1,
          pollAfterFailedInitialization: _v8 = !1,
          throwOnFailedInitialization: _v9 = !1,
          skipInitialPoll: _v10 = !1
        } = this.configurationRequestParameters,
        {
          pollingIntervalMs: _v11 = _v14.DEFAULT_POLL_INTERVAL_MS
        } = this.configurationRequestParameters;
      _v11 <= 0 && (_v5.logger.error("pollingIntervalMs must be greater than 0. Using default"), _v11 = _v14.DEFAULT_POLL_INTERVAL_MS);
      let _v12 = new _v4.default({
          baseUrl: _v3,
          queryParams: {
            apiKey: _v0,
            sdkName: _v1,
            sdkVersion: _v2
          },
          sdkTokenDecoder: new _v28.default(_v0)
        }),
        _v13 = new _v22.default(_v12, _v4),
        _v14 = new _v11.default(_v13, this.flagConfigurationStore, this.banditVariationConfigurationStore ?? null, this.banditModelConfigurationStore ?? null);
      this.configurationRequestor = _v14;
      let _v15 = async () => {
        if (await _v14.isFlagConfigExpired()) return _v14.fetchAndStoreConfigurations();
      };
      this.requestPoller = (0, _v27.default)(_v11, _v15, {
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
    getStringAssignment(_v0, _v1, _v2, _v3) {
      return this.getStringAssignmentDetails(_v0, _v1, _v2, _v3).variation;
    }
    getStringAssignmentDetails(_v0, _v1, _v2, _v3) {
      let {
        eppoValue: _v4,
        flagEvaluationDetails: _v5
      } = this.getAssignmentVariation(_v0, _v1, _v2, _v16.EppoValue.String(_v3), _v24.VariationType.STRING);
      return {
        variation: _v4.stringValue ?? _v3,
        action: null,
        evaluationDetails: _v5
      };
    }
    getBoolAssignment(_v0, _v1, _v2, _v3) {
      return this.getBooleanAssignment(_v0, _v1, _v2, _v3);
    }
    getBooleanAssignment(_v0, _v1, _v2, _v3) {
      return this.getBooleanAssignmentDetails(_v0, _v1, _v2, _v3).variation;
    }
    getBooleanAssignmentDetails(_v0, _v1, _v2, _v3) {
      let {
        eppoValue: _v4,
        flagEvaluationDetails: _v5
      } = this.getAssignmentVariation(_v0, _v1, _v2, _v16.EppoValue.Bool(_v3), _v24.VariationType.BOOLEAN);
      return {
        variation: _v4.boolValue ?? _v3,
        action: null,
        evaluationDetails: _v5
      };
    }
    getIntegerAssignment(_v0, _v1, _v2, _v3) {
      return this.getIntegerAssignmentDetails(_v0, _v1, _v2, _v3).variation;
    }
    getIntegerAssignmentDetails(_v0, _v1, _v2, _v3) {
      let {
        eppoValue: _v4,
        flagEvaluationDetails: _v5
      } = this.getAssignmentVariation(_v0, _v1, _v2, _v16.EppoValue.Numeric(_v3), _v24.VariationType.INTEGER);
      return {
        variation: _v4.numericValue ?? _v3,
        action: null,
        evaluationDetails: _v5
      };
    }
    getNumericAssignment(_v0, _v1, _v2, _v3) {
      return this.getNumericAssignmentDetails(_v0, _v1, _v2, _v3).variation;
    }
    getNumericAssignmentDetails(_v0, _v1, _v2, _v3) {
      let {
        eppoValue: _v4,
        flagEvaluationDetails: _v5
      } = this.getAssignmentVariation(_v0, _v1, _v2, _v16.EppoValue.Numeric(_v3), _v24.VariationType.NUMERIC);
      return {
        variation: _v4.numericValue ?? _v3,
        action: null,
        evaluationDetails: _v5
      };
    }
    getJSONAssignment(_v0, _v1, _v2, _v3) {
      return this.getJSONAssignmentDetails(_v0, _v1, _v2, _v3).variation;
    }
    getJSONAssignmentDetails(_v0, _v1, _v2, _v3) {
      let {
        eppoValue: _v4,
        flagEvaluationDetails: _v5
      } = this.getAssignmentVariation(_v0, _v1, _v2, _v16.EppoValue.JSON(_v3), _v24.VariationType.JSON);
      return {
        variation: _v4.objectValue ?? _v3,
        action: null,
        evaluationDetails: _v5
      };
    }
    getBanditAction(_v0, _v1, _v2, _v3, _v4) {
      let {
        variation: _v5,
        action: _v6
      } = this.getBanditActionDetails(_v0, _v1, _v2, _v3, _v4);
      return {
        variation: _v5,
        action: _v6
      };
    }
    getBestAction(_v0, _v1, _v2, _v3) {
      let _v4 = this.getConfiguration(),
        _v5 = null,
        _v6 = _v4.getFlagBanditVariations(_v0),
        _v7 = _v6?.at(0)?.key;
      if (_v7) {
        let _v0 = _v4.getBandit(_v7);
        if (_v0) {
          let _v0 = (0, _v6.ensureContextualSubjectAttributes)(_v1),
            _v1 = (0, _v6.ensureActionsWithContextualAttributes)(_v2);
          _v5 = this.banditEvaluator.evaluateBestBanditAction(_v0, _v1, _v0.modelData);
        }
      }
      return _v5 ?? _v3;
    }
    getBanditActionDetails(_v0, _v1, _v2, _v3, _v4) {
      let _v5 = this.getConfiguration(),
        _v6 = _v4,
        _v7 = null,
        _v8 = this.newFlagEvaluationDetailsBuilder(_v5, _v0).buildForNoneResult("ASSIGNMENT_ERROR", "Unexpected error getting assigned variation for bandit action");
      try {
        let _v0 = (0, _v6.ensureNonContextualSubjectAttributes)(_v2),
          {
            variation: _v1,
            evaluationDetails: _v2
          } = this.getStringAssignmentDetails(_v0, _v1, _v0, _v4);
        _v6 = _v1, _v8 = _v2;
        let _v3 = _v5.getFlagVariationBandit(_v0, _v6);
        if (!_v3) return {
          variation: _v6,
          action: null,
          evaluationDetails: _v8
        };
        _v8.banditKey = _v3.banditKey;
        let _v4 = this.evaluateBanditAction(_v0, _v1, _v2, _v3, _v3.modelData);
        if (_v4?.actionKey) {
          _v7 = _v4.actionKey;
          let _v0 = {
            timestamp: new Date().toISOString(),
            featureFlag: _v0,
            bandit: _v3.banditKey,
            subject: _v1,
            action: _v7,
            actionProbability: _v4.actionWeight,
            optimalityGap: _v4.optimalityGap,
            modelVersion: _v3.modelVersion,
            subjectNumericAttributes: _v4.subjectAttributes.numericAttributes,
            subjectCategoricalAttributes: _v4.subjectAttributes.categoricalAttributes,
            actionNumericAttributes: _v4.actionAttributes.numericAttributes,
            actionCategoricalAttributes: _v4.actionAttributes.categoricalAttributes,
            metaData: this.buildLoggerMetadata(),
            evaluationDetails: _v8
          };
          try {
            this.logBanditAction(_v0);
          } catch (_v0) {
            _v5.logger.error({
              err: _v0
            }, "Error logging bandit event");
          }
          _v8.banditAction = _v7;
        }
      } catch (_v0) {
        if (_v5.logger.error({
          err: _v0
        }, "Error determining bandit action"), !this.isGracefulFailureMode) throw _v0;
        _v6 && (_v8.flagEvaluationCode = "BANDIT_ERROR"), _v8.flagEvaluationDescription = `Error evaluating bandit action: ${_v0?.message}`;
      }
      return {
        variation: _v6,
        action: _v7,
        evaluationDetails: _v8
      };
    }
    getExperimentContainerEntry(_v0, _v1, _v2) {
      let {
          flagKey: _v3,
          controlVariationEntry: _v4,
          treatmentVariationEntries: _v5
        } = _v0,
        _v6 = this.getStringAssignment(_v3, _v1, _v2, "control");
      if ("control" === _v6) return _v4;
      if (!_v6.startsWith("treatment-")) return _v5.logger.warn(`Variation '${_v6}' cannot be mapped to a container. Defaulting to control variation.`), _v4;
      let _v7 = Number.parseInt(_v6.split("-")[1]) - 1;
      return isNaN(_v7) ? (_v5.logger.warn(`Variation '${_v6}' cannot be mapped to a container. Defaulting to control variation.`), _v4) : _v7 >= _v5.length ? (_v5.logger.warn(`Selected treatment variation (${_v7}) index is out of bounds. Defaulting to control variation.`), _v4) : _v5[_v7];
    }
    evaluateBanditAction(_v0, _v1, _v2, _v3, _v4) {
      if (!Object.keys(_v3).length) return null;
      let _v5 = (0, _v6.ensureContextualSubjectAttributes)(_v2),
        _v6 = (0, _v6.ensureActionsWithContextualAttributes)(_v3);
      return this.banditEvaluator.evaluateBandit(_v0, _v1, _v5, _v6, _v4);
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
        _v5.logger.warn({
          err: _v0
        }, "Error encountered logging bandit action");
      }
    }
    getAssignmentVariation(_v0, _v1, _v2, _v3, _v4) {
      try {
        let _v0 = this.getAssignmentDetail(_v0, _v1, _v2, _v4);
        return this.parseVariationWithDetails(_v0, _v3, _v4);
      } catch (_v0) {
        let _v1 = this.rethrowIfNotGraceful(_v0, _v3);
        if (_v0 instanceof _v21.FlagEvaluationError && _v0.flagEvaluationDetails) return {
          eppoValue: _v1,
          flagEvaluationDetails: _v0.flagEvaluationDetails
        };
        return {
          eppoValue: _v1,
          flagEvaluationDetails: new _v20.FlagEvaluationDetailsBuilder("", [], "", "").buildForNoneResult("ASSIGNMENT_ERROR", `Assignment Error: ${_v0.message}`)
        };
      }
    }
    parseVariationWithDetails({
      flagEvaluationDetails: _v0,
      variation: _v1
    }, _v2, _v3) {
      try {
        if (!_v1 || "MATCH" !== _v0.flagEvaluationCode) return {
          eppoValue: _v2,
          flagEvaluationDetails: _v0
        };
        return {
          eppoValue: _v16.EppoValue.valueOf(_v1.value, _v3),
          flagEvaluationDetails: _v0
        };
      } catch (_v0) {
        return {
          eppoValue: this.rethrowIfNotGraceful(_v0, _v2),
          flagEvaluationDetails: _v0
        };
      }
    }
    rethrowIfNotGraceful(_v0, _v1) {
      if (this.isGracefulFailureMode) return _v5.logger.error(`${_v5.loggerPrefix} Error getting assignment: ${_v0.message}`), _v1 ?? _v16.EppoValue.Null();
      throw _v0;
    }
    getAllAssignments(_v0, _v1 = {}) {
      let _v2 = this.getConfiguration(),
        _v3 = _v2.getFlagConfigDetails(),
        _v4 = this.getFlagKeys(),
        _v5 = {};
      return _v4.forEach(_v0 => {
        let _v1 = this.getNormalizedFlag(_v2, _v0);
        if (!_v1) return void _v5.logger.debug(`${_v5.loggerPrefix} No assigned variation. Flag does not exist.`);
        let _v2 = this.evaluator.evaluateFlag(_v1, _v3, _v0, _v1, _v2.isObfuscated());
        _v2.variation && _v2.allocationKey ? _v5[_v0] = {
          flagKey: _v0,
          allocationKey: _v2.allocationKey,
          doLog: _v2.doLog,
          extraLogging: _v2.extraLogging,
          variationKey: _v2.variation.key,
          variationType: _v1.variationType,
          variationValue: _v2.variation.value.toString()
        } : _v5.logger.debug(`${_v5.loggerPrefix} No assigned variation: ${_v0}`);
      }), _v5;
    }
    getPrecomputedConfiguration(_v0, _v1 = {}, _v2 = {}, _v3) {
      let _v4 = this.getConfiguration(),
        _v5 = _v4.getFlagConfigDetails(),
        _v6 = (0, _v6.ensureContextualSubjectAttributes)(_v1),
        _v7 = (0, _v6.ensureNonContextualSubjectAttributes)(_v1),
        _v8 = this.getAllAssignments(_v0, _v7),
        _v9 = this.computeBanditsForFlags(_v4, _v0, _v6, _v2, _v8),
        _v10 = _v13.PrecomputedConfiguration.obfuscated(_v0, _v8, _v9, _v3 ?? "", _v6, _v5.configEnvironment);
      return JSON.stringify(_v13.ConfigurationWireV1.precomputed(_v10));
    }
    getAssignmentDetail(_v0, _v1, _v2 = {}, _v3) {
      (0, _v30.validateNotBlank)(_v1, "Invalid argument: subjectKey cannot be blank"), (0, _v30.validateNotBlank)(_v0, "Invalid argument: flagKey cannot be blank");
      let _v4 = this.getConfiguration(),
        _v5 = this.newFlagEvaluationDetailsBuilder(_v4, _v0),
        _v6 = this.overrideStore?.get(_v0);
      if (_v6) return (0, _v17.overrideResult)(_v0, _v1, _v2, _v6, _v5);
      let _v7 = _v4.getFlagConfigDetails(),
        _v8 = this.getNormalizedFlag(_v4, _v0);
      if (null === _v8) {
        _v5.logger.warn(`${_v5.loggerPrefix} No assigned variation. Flag not found: ${_v0}`);
        let _v0 = _v5.buildForNoneResult("FLAG_UNRECOGNIZED_OR_DISABLED", `Unrecognized or disabled flag: ${_v0}`);
        return (0, _v17.noneResult)(_v0, _v1, _v2, _v0, _v7.configFormat);
      }
      if (!_v32(_v3, _v8.variationType)) {
        let _v0 = `Variation value does not have the correct type. Found ${_v8.variationType}, but expected ${_v3} for flag ${_v0}`;
        if (this.isGracefulFailureMode) {
          let _v0 = _v5.buildForNoneResult("TYPE_MISMATCH", _v0);
          return (0, _v17.noneResult)(_v0, _v1, _v2, _v0, _v7.configFormat);
        }
        throw TypeError(_v0);
      }
      if (!_v8.enabled) {
        _v5.logger.info(`${_v5.loggerPrefix} No assigned variation. Flag is disabled: ${_v0}`);
        let _v0 = _v5.buildForNoneResult("FLAG_UNRECOGNIZED_OR_DISABLED", `Unrecognized or disabled flag: ${_v0}`);
        return (0, _v17.noneResult)(_v0, _v1, _v2, _v0, _v7.configFormat);
      }
      let _v9 = _v4.isObfuscated(),
        _v10 = this.evaluator.evaluateFlag(_v8, _v7, _v1, _v2, _v9, _v3);
      _v9 && (_v10.flagKey = _v0);
      try {
        _v10?.doLog && this.maybeLogAssignment(_v10);
      } catch (_v0) {
        _v5.logger.error(`${_v5.loggerPrefix} Error logging assignment event: ${_v0}`);
      }
      return _v10;
    }
    track(_v0, _v1) {
      this.eventDispatcher.dispatch({
        uuid: (0, _v3.v4)(),
        type: _v0,
        timestamp: new Date().getTime(),
        payload: _v1
      });
    }
    newFlagEvaluationDetailsBuilder(_v0, _v1) {
      let _v2 = this.getNormalizedFlag(_v0, _v1),
        _v3 = _v0.getFlagConfigDetails();
      return new _v20.FlagEvaluationDetailsBuilder(_v3.configEnvironment.name, _v2?.allocations ?? [], _v3.configFetchedAt, _v3.configPublishedAt);
    }
    getNormalizedFlag(_v0, _v1) {
      return _v0.isObfuscated() ? this.getObfuscatedFlag(_v0, _v1) : _v0.getFlag(_v1);
    }
    getObfuscatedFlag(_v0, _v1) {
      let _v2 = _v0.getFlag((0, _v25.getMD5Hash)(_v1));
      return _v2 ? (0, _v15.decodeFlag)(_v2) : null;
    }
    getFlagKeys() {
      return this.getConfiguration().getFlagKeys();
    }
    isInitialized() {
      return this.getConfiguration().isInitialized();
    }
    setLogger(_v0) {
      this.setAssignmentLogger(_v0);
    }
    setAssignmentLogger(_v0) {
      this.assignmentLogger = _v0, this.flushQueuedEvents(this.assignmentEventsQueue, this.assignmentLogger?.logAssignment);
    }
    setBanditLogger(_v0) {
      this.banditLogger = _v0, this.flushQueuedEvents(this.banditEventsQueue, this.banditLogger?.logBanditAction);
    }
    disableAssignmentCache() {
      this.assignmentCache = void 0;
    }
    useNonExpiringInMemoryAssignmentCache() {
      this.assignmentCache = new _v9.NonExpiringInMemoryAssignmentCache();
    }
    useLRUInMemoryAssignmentCache(_v0) {
      this.assignmentCache = new _v8.LRUInMemoryAssignmentCache(_v0);
    }
    useCustomAssignmentCache(_v0) {
      this.assignmentCache = _v0;
    }
    disableBanditAssignmentCache() {
      this.banditAssignmentCache = void 0;
    }
    useNonExpiringInMemoryBanditAssignmentCache() {
      this.banditAssignmentCache = new _v9.NonExpiringInMemoryAssignmentCache();
    }
    useExpiringInMemoryBanditAssignmentCache(_v0, _v1) {
      this.banditAssignmentCache = new _v10.TLRUInMemoryAssignmentCache(_v0, _v1);
    }
    useCustomBanditAssignmentCache(_v0) {
      this.banditAssignmentCache = _v0;
    }
    setIsGracefulFailureMode(_v0) {
      this.isGracefulFailureMode = _v0;
    }
    getFlagConfigurations() {
      return this.getConfiguration().getFlags();
    }
    flushQueuedEvents(_v0, _v1) {
      let _v2 = _v0.flush();
      _v1 && _v2.forEach(_v0 => {
        try {
          _v1(_v0);
        } catch (_v0) {
          _v5.logger.error(`${_v5.loggerPrefix} Error flushing event to logger: ${_v0.message}`);
        }
      });
    }
    maybeLogAssignment(_v0) {
      let {
          flagKey: _v1,
          format: _v2,
          subjectKey: _v3,
          allocationKey: _v4 = null,
          subjectAttributes: _v5,
          variation: _v6,
          flagEvaluationDetails: _v7,
          extraLogging: _v8 = {},
          entityId: _v9
        } = _v0,
        _v10 = {
          ..._v8,
          allocation: _v4,
          experiment: _v4 ? `${_v1}-${_v4}` : null,
          featureFlag: _v1,
          format: _v2,
          variation: _v6?.key ?? null,
          subject: _v3,
          timestamp: new Date().toISOString(),
          subjectAttributes: _v5,
          metaData: this.buildLoggerMetadata(),
          evaluationDetails: _v7,
          entityId: _v9
        };
      if (!(_v6 && _v4 && this.assignmentCache?.has({
        flagKey: _v1,
        subjectKey: _v3,
        allocationKey: _v4,
        variationKey: _v6.key
      }))) try {
        this.assignmentLogger ? this.assignmentLogger.logAssignment(_v10) : this.assignmentEventsQueue.push(_v10), this.assignmentCache?.set({
          flagKey: _v1,
          subjectKey: _v3,
          allocationKey: _v4 ?? "__eppo_no_allocation",
          variationKey: _v6?.key ?? "__eppo_no_variation"
        });
      } catch (_v0) {
        _v5.logger.error(`${_v5.loggerPrefix} Error logging assignment event: ${_v0.message}`);
      }
    }
    buildLoggerMetadata() {
      return {
        obfuscated: this.getConfiguration().isObfuscated(),
        sdkLanguage: "javascript",
        sdkLibVersion: _v31.LIB_VERSION
      };
    }
    computeBanditsForFlags(_v0, _v1, _v2, _v3, _v4) {
      let _v5 = {};
      return Object.keys(_v3).forEach(_v0 => {
        let _v1 = _v4[_v0];
        if (_v1) {
          let _v0 = this.getPrecomputedBandit(_v0, _v0, _v1.variationValue, _v1, _v2, _v3[_v0]);
          _v0 && (_v5[_v0] = _v0);
        }
      }), _v5;
    }
    getPrecomputedBandit(_v0, _v1, _v2, _v3, _v4, _v5) {
      let _v6 = _v0.getFlagVariationBandit(_v1, _v2);
      if (!_v6) return null;
      let _v7 = this.evaluateBanditAction(_v1, _v3, _v4, _v5, _v6.modelData);
      return _v7 ? {
        banditKey: _v6.banditKey,
        action: _v7.actionKey,
        actionNumericAttributes: _v7.actionAttributes.numericAttributes,
        actionCategoricalAttributes: _v7.actionAttributes.categoricalAttributes,
        actionProbability: _v7.actionWeight,
        modelVersion: _v6.modelVersion,
        optimalityGap: _v7.optimalityGap
      } : null;
    }
  };
}