{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.Event = void 0, _v2.Event = function () {
    function _v0(_v0, _v1, _v2) {
      this.name = _v0, this.ts_ms = Date.now(), this.version = _v1, this.fields = _v2;
    }
    return _v0.getAttributeTypeMap = function () {
      return _v0.attributeTypeMap;
    }, _v0.attributeTypeMap = [{
      name: "name",
      baseName: "name",
      type: "string"
    }, {
      name: "ts_ms",
      baseName: "ts_ms",
      type: "number"
    }, {
      name: "version",
      baseName: "version",
      type: "number"
    }, {
      name: "fields",
      baseName: "fields",
      type: "object"
    }], _v0;
  }();
}