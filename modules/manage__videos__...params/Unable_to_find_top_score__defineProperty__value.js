{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.BanditEvaluator = void 0;
  let _v3 = _v0.r(0),
    _v4 = _v0.r(0);
  _v2.BanditEvaluator = class {
    constructor() {
      this.assignmentShards = _v3.BANDIT_ASSIGNMENT_SHARDS, this.sharder = new _v4.MD5Sharder();
    }
    evaluateBestBanditAction(_v0, _v1, _v2) {
      let _v3 = this.scoreActions(_v0, _v1, _v2),
        {
          topAction: _v4
        } = this.getTopScore(_v3);
      return _v4;
    }
    evaluateBandit(_v0, _v1, _v2, _v3, _v4) {
      let _v5 = this.scoreActions(_v2, _v3, _v4),
        _v6 = this.weighActions(_v5, _v4.gamma, _v4.actionProbabilityFloor),
        _v7 = this.selectAction(_v0, _v1, _v6),
        _v8 = Object.values(_v5).reduce((_v0, _v1) => _v1 > _v0 ? _v1 : _v0, -1 / 0) - _v5[_v7];
      return {
        flagKey: _v0,
        subjectKey: _v1,
        subjectAttributes: _v2,
        actionKey: _v7,
        actionAttributes: _v3[_v7],
        actionScore: _v5[_v7],
        actionWeight: _v6[_v7],
        gamma: _v4.gamma,
        optimalityGap: _v8
      };
    }
    scoreActions(_v0, _v1, _v2) {
      let _v3 = {};
      return Object.entries(_v1).forEach(([_v0, _v1]) => {
        let _v2 = _v2.defaultActionScore,
          _v3 = _v2.coefficients[_v0];
        _v3 && (_v2 = _v3.intercept + this.scoreNumericAttributes(_v3.subjectNumericCoefficients, _v0.numericAttributes) + this.scoreCategoricalAttributes(_v3.subjectCategoricalCoefficients, _v0.categoricalAttributes) + this.scoreNumericAttributes(_v3.actionNumericCoefficients, _v1.numericAttributes) + this.scoreCategoricalAttributes(_v3.actionCategoricalCoefficients, _v1.categoricalAttributes)), _v3[_v0] = _v2;
      }), _v3;
    }
    scoreNumericAttributes(_v0, _v1) {
      return _v0.reduce((_v0, _v1) => {
        let _v2 = _v1[_v1.attributeKey];
        return "number" == typeof _v2 && isFinite(_v2) ? _v0 += _v2 * _v1.coefficient : _v0 += _v1.missingValueCoefficient, _v0;
      }, 0);
    }
    scoreCategoricalAttributes(_v0, _v1) {
      return _v0.reduce((_v0, _v1) => {
        let _v2 = _v1[_v1.attributeKey]?.toString(),
          _v3 = _v2 && _v1.valueCoefficients[_v2];
        return _v0 + ("number" == typeof _v3 ? _v3 : _v1.missingValueCoefficient);
      }, 0);
    }
    weighActions(_v0, _v1, _v2) {
      let _v3 = {},
        _v4 = Object.entries(_v0);
      if (!_v4.length) return _v3;
      let {
        topScore: _v5,
        topAction: _v6
      } = this.getTopScore(_v0);
      if (null === _v5 || null === _v6) throw Error("Unable to find top score");
      let _v7 = _v4.length,
        _v8 = _v2 / _v7,
        _v9 = 0;
      return _v4.forEach(([_v0, _v1]) => {
        if (_v0 === _v6) return;
        let _v2 = Math.max(1 / (_v7 + _v1 * (_v5 - _v1)), _v8);
        _v9 += _v2, _v3[_v0] = _v2;
      }), _v3[_v6] = Math.max(1 - _v9, 0), _v3;
    }
    selectAction(_v0, _v1, _v2) {
      let _v3 = Object.entries(_v2).sort((_v0, _v1) => {
          let _v2 = this.sharder.getShard(`${_v0}-${_v1}-${_v0[0]}`, this.assignmentShards) - this.sharder.getShard(`${_v0}-${_v1}-${_v1[0]}`, this.assignmentShards);
          return 0 === _v2 && (_v2 = _v0[0] < _v1[0] ? -1 : 1), _v2;
        }),
        _v4 = this.sharder.getShard(`${_v0}-${_v1}`, this.assignmentShards) / this.assignmentShards,
        _v5 = 0,
        _v6 = null;
      for (let _v0 of _v3) if ((_v5 += _v0[1]) > _v4) {
        _v6 = _v0[0];
        break;
      }
      if (null === _v6) throw Error(`No bandit action selected for flag "${_v0}" and subject "${_v1}"`);
      return _v6;
    }
    getTopScore(_v0) {
      let _v1 = Object.entries(_v0),
        _v2 = null,
        _v3 = null;
      return _v1.forEach(([_v0, _v1]) => {
        (null === _v2 || null === _v3 || _v1 > _v2 || _v1 === _v2 && _v0 < _v3) && (_v2 = _v1, _v3 = _v0);
      }), {
        topScore: _v2,
        topAction: _v3
      };
    }
  };
}