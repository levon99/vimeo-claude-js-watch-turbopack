{
  "use strict";

  var _v3 = _v0.r(0);
  _v2.__esModule = !0, _v2.default = function (_v0) {
    var _v1 = _v0.name,
      _v2 = _v0.message,
      _v3 = _v0.test,
      _v4 = _v0.params;
    function _v5(_v0) {
      var _v1 = _v0.value,
        _v2 = _v0.path,
        _v3 = _v0.label,
        _v4 = _v0.options,
        _v5 = _v0.originalValue,
        _v6 = _v0.sync,
        _v7 = (0, _v4.default)(_v0, ["value", "path", "label", "options", "originalValue", "sync"]),
        _v8 = _v4.parent,
        _v9 = function (_v0) {
          return _v8.default.isRef(_v0) ? _v0.getValue(_v8, _v4.context) : _v0;
        },
        _v10 = _v11({
          message: _v2,
          path: _v2,
          value: _v1,
          originalValue: _v5,
          params: _v4,
          label: _v3,
          resolve: _v9,
          name: _v1
        });
      return function (_v0, _v1, _v2, _v3) {
        var _v4 = _v0.call(_v1, _v2);
        if (!_v3) return Promise.resolve(_v4);
        if (_v4 && "function" == typeof _v4.then && "function" == typeof _v4.catch) throw Error('Validation test of type: "' + _v1.type + '" returned a Promise during a synchronous validate. This test will finish after the validate call has returned');
        return _v9.SynchronousPromise.resolve(_v4);
      }(_v3, (0, _v5.default)({
        path: _v2,
        parent: _v8,
        type: _v1,
        createError: _v10,
        resolve: _v9,
        options: _v4
      }, _v7), _v1, _v6).then(function (_v0) {
        if (_v7.default.isError(_v0)) throw _v0;
        if (!_v0) throw _v10();
      });
    }
    return _v5.TEST_NAME = _v1, _v5.TEST_FN = _v3, _v5.TEST = _v0, _v5;
  };
  var _v4 = _v3(_v0.r(0)),
    _v5 = _v3(_v0.r(0)),
    _v6 = _v3(_v0.r(0)),
    _v7 = _v3(_v0.r(0)),
    _v8 = _v3(_v0.r(0)),
    _v9 = _v0.r(0),
    _v10 = _v7.default.formatError;
  function _v11(_v0) {
    var _v1 = _v0.value,
      _v2 = _v0.label,
      _v3 = _v0.resolve,
      _v4 = _v0.originalValue,
      _v5 = (0, _v4.default)(_v0, ["value", "label", "resolve", "originalValue"]);
    return function (_v0) {
      var _v1,
        _v2,
        _v3 = void 0 === _v0 ? {} : _v0,
        _v4 = _v3.path,
        _v5 = void 0 === _v4 ? _v5.path : _v4,
        _v6 = _v3.message,
        _v7 = void 0 === _v6 ? _v5.message : _v6,
        _v8 = _v3.type,
        _v9 = void 0 === _v8 ? _v5.name : _v8,
        _v10 = _v3.params;
      return _v10 = (0, _v5.default)({
        path: _v5,
        value: _v1,
        originalValue: _v4,
        label: _v2
      }, (_v1 = _v5.params, _v2 = _v10, (0, _v6.default)((0, _v5.default)({}, _v1, _v2), _v3))), (0, _v5.default)(new _v7.default(_v10(_v7, _v10), _v1, _v5, _v9), {
        params: _v10
      });
    };
  }
  _v1.exports.createErrorFactory = _v11, _v1.exports = _v2.default;
}