{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.decodeFlag = function (_v0) {
    return {
      ..._v0,
      variations: _v5(_v0.variations, _v0.variationType),
      allocations: _v0.allocations.map(_v7)
    };
  }, _v2.decodeVariations = _v5, _v2.decodeValue = _v6, _v2.decodeAllocation = _v7, _v2.decodeSplit = _v8, _v2.decodeShard = _v9, _v2.decodeObject = _v10, _v2.decodeObjectTo = _v11, _v2.decodePrecomputedFlag = function (_v0) {
    return {
      ..._v0,
      allocationKey: (0, _v4.decodeBase64)(_v0.allocationKey ?? ""),
      variationKey: (0, _v4.decodeBase64)(_v0.variationKey ?? ""),
      variationValue: _v6(_v0.variationValue, _v0.variationType),
      extraLogging: _v10(_v0.extraLogging ?? {})
    };
  }, _v2.decodePrecomputedBandit = function (_v0) {
    return {
      ..._v0,
      banditKey: (0, _v4.decodeBase64)(_v0.banditKey),
      action: (0, _v4.decodeBase64)(_v0.action),
      modelVersion: (0, _v4.decodeBase64)(_v0.modelVersion),
      actionNumericAttributes: _v11(_v0.actionNumericAttributes ?? {}, _v0 => +_v0),
      actionCategoricalAttributes: _v10(_v0.actionCategoricalAttributes ?? {})
    };
  };
  let _v3 = _v0.r(0),
    _v4 = _v0.r(0);
  function _v5(_v0, _v1) {
    return Object.fromEntries(Object.entries(_v0).map(([, _v0]) => {
      let _v1 = (0, _v4.decodeBase64)(_v0.key);
      return [_v1, {
        key: _v1,
        value: _v6(_v0.value, _v1)
      }];
    }));
  }
  function _v6(_v0, _v1) {
    switch (_v1) {
      case _v3.VariationType.INTEGER:
      case _v3.VariationType.NUMERIC:
        return Number((0, _v4.decodeBase64)(_v0));
      case _v3.VariationType.BOOLEAN:
        return "true" === (0, _v4.decodeBase64)(_v0);
      default:
        return (0, _v4.decodeBase64)(_v0);
    }
  }
  function _v7(_v0) {
    return {
      ..._v0,
      key: (0, _v4.decodeBase64)(_v0.key),
      splits: _v0.splits.map(_v8),
      startAt: _v0.startAt ? new Date((0, _v4.decodeBase64)(_v0.startAt)).toISOString() : void 0,
      endAt: _v0.endAt ? new Date((0, _v4.decodeBase64)(_v0.endAt)).toISOString() : void 0
    };
  }
  function _v8(_v0) {
    return {
      extraLogging: _v0.extraLogging ? _v10(_v0.extraLogging) : void 0,
      variationKey: (0, _v4.decodeBase64)(_v0.variationKey),
      shards: _v0.shards.map(_v9)
    };
  }
  function _v9(_v0) {
    return {
      ..._v0,
      salt: (0, _v4.decodeBase64)(_v0.salt)
    };
  }
  function _v10(_v0) {
    return _v11(_v0, _v0 => _v0);
  }
  function _v11(_v0, _v1) {
    return Object.fromEntries(Object.entries(_v0).map(([_v0, _v1]) => [(0, _v4.decodeBase64)(_v0), _v1((0, _v4.decodeBase64)(_v1))]));
  }
}