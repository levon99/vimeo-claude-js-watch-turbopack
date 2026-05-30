{
  "use strict";

  var _v3, _v4;
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.FlagEvaluationDetailsBuilder = _v2.AllocationEvaluationCode = _v2.flagEvaluationCodes = void 0;
  let _v5 = _v0.r(0);
  _v2.flagEvaluationCodes = ["MATCH", "FLAG_UNRECOGNIZED_OR_DISABLED", "TYPE_MISMATCH", "ASSIGNMENT_ERROR", "DEFAULT_ALLOCATION_NULL", "NO_ACTIONS_SUPPLIED_FOR_BANDIT", "BANDIT_ERROR"], (_v4 = _v3 || (_v2.AllocationEvaluationCode = _v3 = {})).UNEVALUATED = "UNEVALUATED", _v4.MATCH = "MATCH", _v4.BEFORE_START_TIME = "BEFORE_START_TIME", _v4.TRAFFIC_EXPOSURE_MISS = "TRAFFIC_EXPOSURE_MISS", _v4.AFTER_END_TIME = "AFTER_END_TIME", _v4.FAILING_RULE = "FAILING_RULE", _v2.FlagEvaluationDetailsBuilder = class {
    constructor(_v0, _v1, _v2, _v3) {
      this.environmentName = _v0, this.allocations = _v1, this.configFetchedAt = _v2, this.configPublishedAt = _v3, this.variationKey = null, this.variationValue = null, this.matchedRule = null, this.matchedAllocation = null, this.unmatchedAllocations = [], this.addUnmatchedAllocation = _v0 => {
        this.unmatchedAllocations.push(_v0);
      }, this.setNone = () => (this.variationKey = null, this.variationValue = null, this.matchedRule = null, this.matchedAllocation = null, this), this.setMatch = (_v0, _v1, _v2, _v3, _v4) => (this.variationKey = _v1.key, this.variationValue = _v4 === _v5.VariationType.JSON && "string" == typeof _v1.value ? JSON.parse(_v1.value) : _v1.value, this.matchedRule = _v3, this.matchedAllocation = {
        key: _v2.key,
        allocationEvaluationCode: _v3.MATCH,
        orderPosition: _v0 + 1
      }, this), this.buildForNoneResult = (_v0, _v1) => this.setNone().build(_v0, _v1), this.build = (_v0, _v1) => ({
        environmentName: this.environmentName,
        flagEvaluationCode: _v0,
        flagEvaluationDescription: _v1,
        variationKey: this.variationKey,
        variationValue: this.variationValue,
        banditKey: null,
        banditAction: null,
        configFetchedAt: this.configFetchedAt,
        configPublishedAt: this.configPublishedAt,
        matchedRule: this.matchedRule,
        matchedAllocation: this.matchedAllocation,
        unmatchedAllocations: this.unmatchedAllocations,
        unevaluatedAllocations: this.calculateUnevaluatedAllocations()
      }), this.gracefulBuild = (_v0, _v1) => {
        try {
          return this.build(_v0, _v1);
        } catch (_v0) {
          return null;
        }
      }, this.calculateUnevaluatedAllocations = () => {
        let _v0 = this.matchedAllocation ? this.unmatchedAllocations.length + 1 : this.unmatchedAllocations.length,
          _v1 = _v0 + 1;
        return this.allocations.slice(_v0).map((_v0, _v1) => ({
          key: _v0.key,
          allocationEvaluationCode: _v3.UNEVALUATED,
          orderPosition: _v1 + _v1
        }));
      }, this.setNone();
    }
  };
}