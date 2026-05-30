{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.Envelope = void 0;
  var _v3 = _v0.r(0),
    _v4 = _v0.r(0);
  _v2.Envelope = function () {
    function _v0(_v0, _v1) {
      this.event = _v0, this.eid = (0, _v4.v4)(), this.ts_ms = Date.now(), this.created_at = Date.now(), this._tracker = new _v3.Tracker(), this._globalBPO = _v1;
    }
    return Object.defineProperty(_v0.prototype, "tracker", {
      get: function () {
        return this._tracker;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(_v0.prototype, "global", {
      get: function () {
        return this._globalBPO;
      },
      enumerable: !1,
      configurable: !0
    }), _v0.getAttributeTypeMap = function () {
      return _v0.attributeTypeMap;
    }, _v0.attributeTypeMap = [{
      name: "eid",
      baseName: "eid",
      type: "string"
    }, {
      name: "ts_ms",
      baseName: "ts_ms",
      type: "number"
    }, {
      name: "created_at",
      baseName: "created_at",
      type: "number"
    }, {
      name: "event",
      baseName: "event",
      type: "Event"
    }, {
      name: "global",
      baseName: "global",
      type: "Event"
    }, {
      name: "tracker",
      baseName: "tracker",
      type: "Tracker"
    }], _v0;
  }();
}