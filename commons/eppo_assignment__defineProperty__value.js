{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.EppoAssignmentLogger = void 0, _v2.EppoAssignmentLogger = class {
    constructor(_v0) {
      this.eppoClient = _v0;
    }
    logAssignment(_v0) {
      let {
        entityId: _v1,
        featureFlag: _v2,
        experiment: _v3,
        allocation: _v4,
        holdoutKey: _v5,
        holdoutVariation: _v6,
        subject: _v7,
        variation: _v8
      } = _v0;
      _v1 && this.eppoClient.track("__eppo_assignment", {
        entity_id: _v1,
        experiment: _v3,
        feature_flag: _v2,
        allocation: _v4,
        holdout_variation: _v6,
        holdout: _v5,
        subject: _v7,
        variation: _v8
      });
    }
  };
}