{
  "use strict";

  function _v3(_v0) {
    return !!("object" == typeof _v0 && _v0 && "numericAttributes" in _v0 && "categoricalAttributes" in _v0);
  }
  function _v4(_v0) {
    let _v1 = {
      numericAttributes: {},
      categoricalAttributes: {}
    };
    return Object.entries(_v0).forEach(([_v0, _v1]) => {
      "number" == typeof _v1 ? _v1.numericAttributes[_v0] = _v1 : _v1.categoricalAttributes[_v0] = _v1;
    }), _v1;
  }
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.isInstanceOfContextualAttributes = _v3, _v2.ensureNonContextualSubjectAttributes = function (_v0) {
    return _v3(_v0) ? {
      ..._v0.numericAttributes,
      ..._v0.categoricalAttributes
    } : _v0;
  }, _v2.ensureContextualSubjectAttributes = function (_v0) {
    return _v3(_v0) ? _v0 : _v4(_v0);
  }, _v2.deduceAttributeContext = _v4, _v2.ensureActionsWithContextualAttributes = function (_v0) {
    let _v1 = {};
    return Array.isArray(_v0) ? _v0.forEach(_v0 => {
      _v1[_v0] = {
        numericAttributes: {},
        categoricalAttributes: {}
      };
    }) : Object.values(_v0).every(_v3) ? _v1 = _v0 : Object.entries(_v0).forEach(([_v0, _v1]) => {
      _v1[_v0] = _v4(_v1);
    }), _v1;
  };
}