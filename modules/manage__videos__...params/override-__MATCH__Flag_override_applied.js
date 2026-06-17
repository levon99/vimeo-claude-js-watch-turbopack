{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.Evaluator = void 0, _v2.isInShardRange = _v8, _v2.hashKey = _v9, _v2.noneResult = _v10, _v2.matchesRules = _v11, _v2.overrideResult = function (_v0, _v1, _v2, _v3, _v4) {
    let _v5 = "override-" + _v3.key,
      _v6 = _v4.setMatch(0, _v3, {
        key: _v5,
        splits: [],
        doLog: !1
      }, null, void 0).build("MATCH", "Flag override applied");
    return {
      flagKey: _v0,
      subjectKey: _v1,
      variation: _v3,
      subjectAttributes: _v2,
      flagEvaluationDetails: _v6,
      doLog: !1,
      format: "",
      allocationKey: _v5,
      extraLogging: {},
      entityId: null
    };
  };
  let _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0);
  function _v8(_v0, _v1) {
    return _v1.start <= _v0 && _v0 < _v1.end;
  }
  function _v9(_v0, _v1) {
    return `${_v0}-${_v1}`;
  }
  function _v10(_v0, _v1, _v2, _v3, _v4) {
    return {
      flagKey: _v0,
      format: _v4,
      subjectKey: _v1,
      subjectAttributes: _v2,
      allocationKey: null,
      variation: null,
      extraLogging: {},
      doLog: !1,
      flagEvaluationDetails: _v3,
      entityId: null
    };
  }
  function _v11(_v0, _v1, _v2) {
    if (!_v0.length) return {
      matched: !0,
      matchedRule: null
    };
    let _v3 = null;
    return _v0.some(_v0 => {
      let _v1 = (0, _v6.matchesRule)(_v0, _v1, _v2);
      return _v1 && (_v3 = _v0), _v1;
    }) ? {
      matched: !0,
      matchedRule: _v3
    } : {
      matched: !1,
      matchedRule: null
    };
  }
  _v2.Evaluator = class {
    constructor(_v0) {
      this.getMatchedEvaluationCodeAndDescription = (_v0, _v1, _v2, _v3, _v4) => {
        if (!(0, _v3.checkValueTypeMatch)(_v4, _v0.value)) {
          let {
            key: _v0,
            value: _v1
          } = _v0;
          return {
            flagEvaluationCode: "ASSIGNMENT_ERROR",
            flagEvaluationDescription: `Variation (${_v0}) is configured for type ${_v4}, but is set to incompatible value (${_v1})`
          };
        }
        let _v5 = !!_v1.rules?.length,
          _v6 = _v1.splits.length > 1,
          _v7 = _v2.shards.length > 1,
          _v8 = _v6 || _v7;
        return _v5 && _v8 ? {
          flagEvaluationCode: "MATCH",
          flagEvaluationDescription: `Supplied attributes match rules defined in allocation "${_v1.key}" and ${_v3} belongs to the range of traffic assigned to "${_v2.variationKey}".`
        } : _v5 && !_v8 ? {
          flagEvaluationCode: "MATCH",
          flagEvaluationDescription: `Supplied attributes match rules defined in allocation "${_v1.key}".`
        } : {
          flagEvaluationCode: "MATCH",
          flagEvaluationDescription: `${_v3} belongs to the range of traffic assigned to "${_v2.variationKey}" defined in allocation "${_v1.key}".`
        };
      }, this.sharder = _v0 ?? new _v7.MD5Sharder();
    }
    evaluateFlag(_v0, _v1, _v2, _v3, _v4, _v5) {
      let _v6 = new _v4.FlagEvaluationDetailsBuilder(_v1.configEnvironment.name, _v0.allocations, _v1.configFetchedAt, _v1.configPublishedAt);
      try {
        if (!_v0.enabled) return _v10(_v0.key, _v2, _v3, _v6.buildForNoneResult("FLAG_UNRECOGNIZED_OR_DISABLED", `Unrecognized or disabled flag: ${_v0.key}`), _v1.configFormat);
        let _v0 = new Date();
        for (let _v0 = 0; _v0 < _v0.allocations.length; _v0++) {
          let _v0 = _v0.allocations[_v0],
            _v1 = _v0 => {
              _v6.addUnmatchedAllocation({
                key: _v0.key,
                allocationEvaluationCode: _v0,
                orderPosition: _v0 + 1
              });
            };
          if (_v0.startAt && _v0 < new Date(_v0.startAt)) {
            _v1(_v4.AllocationEvaluationCode.BEFORE_START_TIME);
            continue;
          }
          if (_v0.endAt && _v0 > new Date(_v0.endAt)) {
            _v1(_v4.AllocationEvaluationCode.AFTER_END_TIME);
            continue;
          }
          let {
            matched: _v2,
            matchedRule: _v3
          } = _v11(_v0?.rules ?? [], {
            id: _v2,
            ..._v3
          }, _v4);
          if (_v2) {
            for (let _v0 of _v0.splits) if (_v0.shards.every(_v0 => this.matchesShard(_v0, _v2, _v0.totalShards))) {
              let _v0 = _v0.variations[_v0.variationKey],
                {
                  flagEvaluationCode: _v1,
                  flagEvaluationDescription: _v2
                } = this.getMatchedEvaluationCodeAndDescription(_v0, _v0, _v0, _v2, _v5),
                _v3 = _v6.setMatch(_v0, _v0, _v0, _v3, _v5).build(_v1, _v2);
              return {
                flagKey: _v0.key,
                format: _v1.configFormat,
                subjectKey: _v2,
                subjectAttributes: _v3,
                allocationKey: _v0.key,
                variation: _v0,
                extraLogging: _v0.extraLogging ?? {},
                doLog: _v0.doLog,
                flagEvaluationDetails: _v3,
                entityId: _v0.entityId ?? null
              };
            }
            _v1(_v4.AllocationEvaluationCode.TRAFFIC_EXPOSURE_MISS);
          } else _v1(_v4.AllocationEvaluationCode.FAILING_RULE);
        }
        return _v10(_v0.key, _v2, _v3, _v6.buildForNoneResult("DEFAULT_ALLOCATION_NULL", 'No allocations matched. Falling back to "Default Allocation", serving NULL'), _v1.configFormat);
      } catch (_v0) {
        let _v1 = _v6.gracefulBuild("ASSIGNMENT_ERROR", `Assignment Error: ${_v0.message}`);
        if (_v1) {
          let _v0 = new _v5.FlagEvaluationError(_v0.message);
          throw _v0.flagEvaluationDetails = _v1, _v0;
        }
        throw _v0;
      }
    }
    matchesShard(_v0, _v1, _v2) {
      let _v3 = this.sharder.getShard(_v9(_v0.salt, _v1), _v2);
      return _v0.ranges.some(_v0 => _v8(_v3, _v0));
    }
  };
}