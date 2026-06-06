{
  "use strict";

  var _v3 = _v0.r(0),
    _v4 = _v0.r(0);
  _v2.__esModule = !0, _v2.default = _v23;
  var _v5 = _v4(_v0.r(0)),
    _v6 = _v4(_v0.r(0)),
    _v7 = _v4(_v0.r(0)),
    _v8 = _v4(_v0.r(0)),
    _v9 = _v4(_v0.r(0)),
    _v10 = _v4(_v0.r(0)),
    _v11 = _v4(_v0.r(0)),
    _v12 = _v0.r(0),
    _v13 = _v4(_v0.r(0)),
    _v14 = _v0.r(0),
    _v15 = _v4(_v0.r(0)),
    _v16 = _v4(_v0.r(0)),
    _v17 = _v4(_v0.r(0)),
    _v18 = _v4(_v0.r(0)),
    _v19 = _v3(_v0.r(0));
  function _v20() {
    var _v0 = (0, _v5.default)(["", ".", ""]);
    return _v20 = function () {
      return _v0;
    }, _v0;
  }
  function _v21() {
    var _v0 = (0, _v5.default)(["", ".", ""]);
    return _v21 = function () {
      return _v0;
    }, _v0;
  }
  var _v22 = function (_v0) {
    return "[object Object]" === Object.prototype.toString.call(_v0);
  };
  function _v23(_v0) {
    var _v1 = this;
    if (!(this instanceof _v23)) return new _v23(_v0);
    _v13.default.call(this, {
      type: "object",
      default: function () {
        var _v0 = this;
        if (this._nodes.length) {
          var _v1 = {};
          return this._nodes.forEach(function (_v0) {
            _v1[_v0] = _v0.fields[_v0].default ? _v0.fields[_v0].default() : void 0;
          }), _v1;
        }
      }
    }), this.fields = Object.create(null), this._nodes = [], this._excludedEdges = [], this.withMutation(function () {
      _v1.transform(function (_v0) {
        if ("string" == typeof _v0) try {
          _v0 = JSON.parse(_v0);
        } catch (_v0) {
          _v0 = null;
        }
        return this.isType(_v0) ? _v0 : null;
      }), _v0 && _v1.shape(_v0);
    });
  }
  (0, _v17.default)(_v23, _v13.default, {
    _typeCheck: function (_v0) {
      return _v22(_v0) || "function" == typeof _v0;
    },
    _cast: function (_v0, _v1) {
      var _v2 = this;
      void 0 === _v1 && (_v1 = {});
      var _v3 = _v13.default.prototype._cast.call(this, _v0, _v1);
      if (void 0 === _v3) return this.default();
      if (!this._typeCheck(_v3)) return _v3;
      var _v4 = this.fields,
        _v5 = !0 === this._option("stripUnknown", _v1),
        _v6 = this._nodes.concat(Object.keys(_v3).filter(function (_v0) {
          return -1 === _v2._nodes.indexOf(_v0);
        })),
        _v7 = {},
        _v8 = (0, _v6.default)({}, _v1, {
          parent: _v7,
          __validating: !1
        });
      return _v6.forEach(function (_v0) {
        var _v1 = _v4[_v0],
          _v2 = (0, _v7.default)(_v3, _v0);
        if (_v1) {
          var _v3,
            _v4 = _v1._options && _v1._options.strict;
          if (_v8.path = (0, _v18.default)(_v21(), _v1.path, _v0), _v8.value = _v3[_v0], !0 === (_v1 = _v1.resolve(_v8))._strip) return;
          void 0 !== (_v3 = _v1.__validating && _v4 ? _v3[_v0] : _v1.cast(_v3[_v0], _v8)) && (_v7[_v0] = _v3);
        } else _v2 && !_v5 && (_v7[_v0] = _v3[_v0]);
      }), _v7;
    },
    _validate: function (_v0, _v1) {
      var _v2,
        _v3,
        _v4 = this;
      void 0 === _v1 && (_v1 = {});
      var _v5 = _v1.sync,
        _v6 = [],
        _v7 = null != _v1.originalValue ? _v1.originalValue : _v0;
      return _v2 = this._option("abortEarly", _v1), _v3 = this._option("recursive", _v1), _v1 = (0, _v6.default)({}, _v1, {
        __validating: !0,
        originalValue: _v7
      }), _v13.default.prototype._validate.call(this, _v0, _v1).catch((0, _v19.propagateErrors)(_v2, _v6)).then(function (_v0) {
        if (!_v3 || !_v22(_v0)) {
          if (_v6.length) throw _v6[0];
          return _v0;
        }
        _v7 = _v7 || _v0;
        var _v1 = _v4._nodes.map(function (_v0) {
          var _v1 = (0, _v18.default)(_v20(), _v1.path, _v0),
            _v2 = _v4.fields[_v0],
            _v3 = (0, _v6.default)({}, _v1, {
              path: _v1,
              parent: _v0,
              originalValue: _v7[_v0]
            });
          return !_v2 || (_v3.strict = !0, !_v2.validate) || _v2.validate(_v0[_v0], _v3);
        });
        return (0, _v19.default)({
          sync: _v5,
          validations: _v1,
          value: _v0,
          errors: _v6,
          endEarly: _v2,
          path: _v1.path,
          sort: (0, _v16.default)(_v4.fields)
        });
      });
    },
    concat: function (_v0) {
      var _v1 = _v13.default.prototype.concat.call(this, _v0);
      return _v1._nodes = (0, _v15.default)(_v1.fields, _v1._excludedEdges), _v1;
    },
    shape: function (_v0, _v1) {
      void 0 === _v1 && (_v1 = []);
      var _v2 = this.clone(),
        _v3 = (0, _v6.default)(_v2.fields, _v0);
      if (_v2.fields = _v3, _v1.length) {
        Array.isArray(_v1[0]) || (_v1 = [_v1]);
        var _v4 = _v1.map(function (_v0) {
          return _v0[0] + "-" + _v0[1];
        });
        _v2._excludedEdges = _v2._excludedEdges.concat(_v4);
      }
      return _v2._nodes = (0, _v15.default)(_v3, _v2._excludedEdges), _v2;
    },
    from: function (_v0, _v1, _v2) {
      var _v3 = (0, _v12.getter)(_v0, !0);
      return this.transform(function (_v0) {
        if (null == _v0) return _v0;
        var _v1 = _v0;
        return (0, _v7.default)(_v0, _v0) && (_v1 = (0, _v6.default)({}, _v0), _v2 || delete _v1[_v0], _v1[_v1] = _v3(_v0)), _v1;
      });
    },
    noUnknown: function (_v0, _v1) {
      void 0 === _v0 && (_v0 = !0), void 0 === _v1 && (_v1 = _v14.object.noUnknown), "string" == typeof _v0 && (_v1 = _v0, _v0 = !0);
      var _v2 = this.test({
        name: "noUnknown",
        exclusive: !0,
        message: _v1,
        test: function (_v0) {
          var _v1, _v2;
          return null == _v0 || !_v0 || 0 === (_v1 = this.schema, _v2 = Object.keys(_v1.fields), Object.keys(_v0).filter(function (_v0) {
            return -1 === _v2.indexOf(_v0);
          })).length;
        }
      });
      return _v0 && (_v2._options.stripUnknown = !0), _v2;
    },
    transformKeys: function (_v0) {
      return this.transform(function (_v0) {
        return _v0 && (0, _v10.default)(_v0, function (_v0, _v1) {
          return _v0(_v1);
        });
      });
    },
    camelCase: function () {
      return this.transformKeys(_v9.default);
    },
    snakeCase: function () {
      return this.transformKeys(_v8.default);
    },
    constantCase: function () {
      return this.transformKeys(function (_v0) {
        return (0, _v8.default)(_v0).toUpperCase();
      });
    },
    describe: function () {
      var _v0 = _v13.default.prototype.describe.call(this);
      return _v0.fields = (0, _v11.default)(this.fields, function (_v0) {
        return _v0.describe();
      }), _v0;
    }
  }), _v1.exports = _v2.default;
}