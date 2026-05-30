{
  "use strict";

  var _v3 = _v0.r(0),
    _v4 = _v0.r(0);
  _v2.__esModule = !0, _v2.default = void 0;
  var _v5 = _v4(_v0.r(0)),
    _v6 = _v4(_v0.r(0)),
    _v7 = _v4(_v0.r(0)),
    _v8 = _v4(_v0.r(0)),
    _v9 = _v4(_v0.r(0)),
    _v10 = _v4(_v0.r(0)),
    _v11 = _v4(_v0.r(0)),
    _v12 = _v4(_v0.r(0)),
    _v13 = _v0.r(0),
    _v14 = _v3(_v0.r(0));
  function _v15() {
    var _v0 = (0, _v6.default)(["", "[", "]"]);
    return _v15 = function () {
      return _v0;
    }, _v0;
  }
  var _v16 = function (_v0) {
    return !(0, _v8.default)(_v0) && _v0.length > 0;
  };
  function _v17(_v0) {
    var _v1 = this;
    if (!(this instanceof _v17)) return new _v17(_v0);
    _v12.default.call(this, {
      type: "array"
    }), this._subType = void 0, this.withMutation(function () {
      _v1.transform(function (_v0) {
        if ("string" == typeof _v0) try {
          _v0 = JSON.parse(_v0);
        } catch (_v0) {
          _v0 = null;
        }
        return this.isType(_v0) ? _v0 : null;
      }), _v0 && _v1.of(_v0);
    });
  }
  _v2.default = _v17, (0, _v7.default)(_v17, _v12.default, {
    _typeCheck: function (_v0) {
      return Array.isArray(_v0);
    },
    _cast: function (_v0, _v1) {
      var _v2 = this,
        _v3 = _v12.default.prototype._cast.call(this, _v0, _v1);
      return this._typeCheck(_v3) && this._subType ? _v3.map(function (_v0) {
        return _v2._subType.cast(_v0, _v1);
      }) : _v3;
    },
    _validate: function (_v0, _v1) {
      var _v2 = this;
      void 0 === _v1 && (_v1 = {});
      var _v3 = [],
        _v4 = _v1.sync,
        _v5 = _v1.path,
        _v6 = this._subType,
        _v7 = this._option("abortEarly", _v1),
        _v8 = this._option("recursive", _v1),
        _v9 = null != _v1.originalValue ? _v1.originalValue : _v0;
      return _v12.default.prototype._validate.call(this, _v0, _v1).catch((0, _v14.propagateErrors)(_v7, _v3)).then(function (_v0) {
        if (!_v8 || !_v6 || !_v2._typeCheck(_v0)) {
          if (_v3.length) throw _v3[0];
          return _v0;
        }
        _v9 = _v9 || _v0;
        var _v1 = _v0.map(function (_v0, _v1) {
          var _v2 = (0, _v10.default)(_v15(), _v1.path, _v1),
            _v3 = (0, _v5.default)({}, _v1, {
              path: _v2,
              strict: !0,
              parent: _v0,
              originalValue: _v9[_v1]
            });
          return !_v6.validate || _v6.validate(_v0, _v3);
        });
        return (0, _v14.default)({
          sync: _v4,
          path: _v5,
          value: _v0,
          errors: _v3,
          endEarly: _v7,
          validations: _v1
        });
      });
    },
    of: function (_v0) {
      var _v1 = this.clone();
      if (!1 !== _v0 && !(0, _v9.default)(_v0)) throw TypeError("`array.of()` sub-schema must be a valid yup schema, or `false` to negate a current sub-schema. not: " + (0, _v11.default)(_v0));
      return _v1._subType = _v0, _v1;
    },
    required: function (_v0) {
      return void 0 === _v0 && (_v0 = _v13.mixed.required), _v12.default.prototype.required.call(this, _v0).test({
        message: _v0,
        name: "required",
        test: _v16
      });
    },
    min: function (_v0, _v1) {
      return _v1 = _v1 || _v13.array.min, this.test({
        message: _v1,
        name: "min",
        exclusive: !0,
        params: {
          min: _v0
        },
        test: function (_v0) {
          return (0, _v8.default)(_v0) || _v0.length >= this.resolve(_v0);
        }
      });
    },
    max: function (_v0, _v1) {
      return _v1 = _v1 || _v13.array.max, this.test({
        message: _v1,
        name: "max",
        exclusive: !0,
        params: {
          max: _v0
        },
        test: function (_v0) {
          return (0, _v8.default)(_v0) || _v0.length <= this.resolve(_v0);
        }
      });
    },
    ensure: function () {
      return this.default(function () {
        return [];
      }).transform(function (_v0) {
        return null === _v0 ? [] : [].concat(_v0);
      });
    },
    compact: function (_v0) {
      var _v1 = _v0 ? function (_v0, _v1, _v2) {
        return !_v0(_v0, _v1, _v2);
      } : function (_v0) {
        return !!_v0;
      };
      return this.transform(function (_v0) {
        return null != _v0 ? _v0.filter(_v1) : _v0;
      });
    },
    describe: function () {
      var _v0 = _v12.default.prototype.describe.call(this);
      return this._subType && (_v0.innerType = this._subType.describe()), _v0;
    }
  }), _v1.exports = _v2.default;
}