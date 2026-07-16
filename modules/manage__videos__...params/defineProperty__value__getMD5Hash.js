{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.getMD5Hash = _v5, _v2.buildStorageKeySuffix = function (_v0) {
    return _v5(_v0).slice(0, 16);
  }, _v2.encodeBase64 = _v6, _v2.attributeEncodeBase64 = _v7, _v2.decodeBase64 = function (_v0) {
    return _v3.decode(_v0);
  }, _v2.obfuscatePrecomputedBanditMap = function (_v0, _v1) {
    return Object.fromEntries(Object.entries(_v1).map(([_v0, _v1]) => {
      var _v2;
      return [_v5(_v0, _v0), {
        banditKey: _v6((_v2 = _v1).banditKey),
        action: _v6(_v2.action),
        actionProbability: _v2.actionProbability,
        optimalityGap: _v2.optimalityGap,
        modelVersion: _v6(_v2.modelVersion),
        actionNumericAttributes: _v8(_v2.actionNumericAttributes),
        actionCategoricalAttributes: _v8(_v2.actionCategoricalAttributes)
      }];
    }));
  }, _v2.obfuscatePrecomputedFlags = function (_v0, _v1) {
    let _v2 = {};
    return Object.keys(_v1).forEach(_v0 => {
      let _v1 = _v1[_v0],
        _v2 = Object.fromEntries(Object.entries(_v1.extraLogging ?? {}).map(_v0 => _v0.map(_v6))),
        _v3 = _v5(_v0, _v0);
      _v2[_v3] = {
        flagKey: _v3,
        variationType: _v1.variationType,
        extraLogging: _v2,
        doLog: _v1.doLog,
        allocationKey: _v6(_v1.allocationKey ?? ""),
        variationKey: _v6(_v1.variationKey ?? ""),
        variationValue: _v6(_v1.variationValue)
      };
    }), _v2;
  };
  let _v3 = _v0.r(0),
    _v4 = _v0.r(0);
  function _v5(_v0, _v1 = "") {
    return new _v4().append(_v1).append(_v0).end();
  }
  function _v6(_v0) {
    return _v3.encode(_v0);
  }
  function _v7(_v0) {
    return "string" != typeof _v0 ? _v6(String(_v0)) : _v6(_v0);
  }
  function _v8(_v0) {
    return Object.fromEntries(Object.entries(_v0).map(([_v0, _v1]) => [_v6(_v0), _v7(_v1)]));
  }
}