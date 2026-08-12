{
  "use strict";

  var _v3 = _v0.e && _v0.e.__createBinding || (Object.create ? function (_v0, _v1, _v2, _v3) {
      void 0 === _v3 && (_v3 = _v2);
      var _v4 = Object.getOwnPropertyDescriptor(_v1, _v2);
      (!_v4 || ("get" in _v4 ? !_v1.__esModule : _v4.writable || _v4.configurable)) && (_v4 = {
        enumerable: !0,
        get: function () {
          return _v1[_v2];
        }
      }), Object.defineProperty(_v0, _v3, _v4);
    } : function (_v0, _v1, _v2, _v3) {
      void 0 === _v3 && (_v3 = _v2), _v0[_v3] = _v1[_v2];
    }),
    _v4 = _v0.e && _v0.e.__exportStar || function (_v0, _v1) {
      for (var _v2 in _v0) "default" === _v2 || Object.prototype.hasOwnProperty.call(_v1, _v2) || _v3(_v1, _v0, _v2);
    };
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.ObjectSerializer = void 0, _v4(_v0.r(0), _v2), _v4(_v0.r(0), _v2), _v4(_v0.r(0), _v2), _v4(_v0.r(0), _v2), _v4(_v0.r(0), _v2);
  var _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0),
    _v8 = _v0.r(0),
    _v9 = ["string", "boolean", "double", "integer", "long", "float", "number", "any"],
    _v10 = {},
    _v11 = {
      Envelope: _v5.Envelope,
      Event: _v6.Event,
      Tracker: _v8.Tracker,
      EventContext: _v7.EventContext
    };
  _v2.ObjectSerializer = function () {
    function _v0() {}
    return _v0.findCorrectType = function (_v0, _v1) {
      if (void 0 == _v0 || -1 !== _v9.indexOf(_v1.toLowerCase()) || "Date" === _v1 || _v10[_v1] || !_v11[_v1]) return _v1;
      var _v2 = _v11[_v1].discriminator;
      if (null == _v2) return _v1;
      if (!_v0[_v2]) return _v1;
      var _v3 = _v0[_v2];
      return _v11[_v3] ? _v3 : _v1;
    }, _v0.serialize = function (_v0, _v1) {
      if (void 0 == _v0 || -1 !== _v9.indexOf(_v1.toLowerCase())) return _v0;
      if (0 === _v1.lastIndexOf("Array<", 0)) {
        var _v2 = _v1.replace("Array<", "");
        _v2 = _v2.substring(0, _v2.length - 1);
        var _v3 = [];
        for (var _v4 in _v0) {
          var _v5 = _v0[_v4];
          _v3.push(_v0.serialize(_v5, _v2));
        }
        return _v3;
      }
      if ("Date" === _v1) return _v0.toISOString();
      if (_v10[_v1] || !_v11[_v1]) return _v0;
      var _v6 = _v11[_v1 = this.findCorrectType(_v0, _v1)].getAttributeTypeMap(),
        _v7 = {};
      for (var _v4 in _v6) {
        var _v8 = _v6[_v4];
        _v7[_v8.baseName] = _v0.serialize(_v0[_v8.name], _v8.type);
      }
      return _v7;
    }, _v0.deserialize = function (_v0, _v1) {
      if (_v1 = _v0.findCorrectType(_v0, _v1), void 0 == _v0 || -1 !== _v9.indexOf(_v1.toLowerCase())) return _v0;
      if (0 === _v1.lastIndexOf("Array<", 0)) {
        var _v2 = _v1.replace("Array<", "");
        _v2 = _v2.substring(0, _v2.length - 1);
        var _v3 = [];
        for (var _v4 in _v0) {
          var _v5 = _v0[_v4];
          _v3.push(_v0.deserialize(_v5, _v2));
        }
        return _v3;
      }
      if ("Date" === _v1) return new Date(_v0);
      if (_v10[_v1] || !_v11[_v1]) return _v0;
      var _v6 = new _v11[_v1](),
        _v7 = _v11[_v1].getAttributeTypeMap();
      for (var _v4 in _v7) {
        var _v8 = _v7[_v4];
        _v6[_v8.name] = _v0.deserialize(_v0[_v8.baseName], _v8.type);
      }
      return _v6;
    }, _v0;
  }();
}