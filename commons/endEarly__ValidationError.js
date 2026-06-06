{
  "use strict";

  var _v3 = _v0.r(0);
  _v2.__esModule = !0, _v2.propagateErrors = function (_v0, _v1) {
    return _v0 ? null : function (_v0) {
      return _v1.push(_v0), _v0.value;
    };
  }, _v2.settled = _v8, _v2.collectErrors = _v9, _v2.default = function (_v0) {
    var _v1,
      _v2,
      _v3 = _v0.endEarly,
      _v4 = (0, _v4.default)(_v0, ["endEarly"]);
    return _v3 ? (_v1 = _v4.validations, _v2 = _v4.value, _v7(_v4.sync).all(_v1).catch(function (_v0) {
      throw "ValidationError" === _v0.name && (_v0.value = _v2), _v0;
    }).then(function () {
      return _v2;
    })) : _v9(_v4);
  };
  var _v4 = _v3(_v0.r(0)),
    _v5 = _v0.r(0),
    _v6 = _v3(_v0.r(0)),
    _v7 = function (_v0) {
      return _v0 ? _v5.SynchronousPromise : Promise;
    };
  function _v8(_v0, _v1) {
    return _v7(_v1).all(_v0.map(function (_v0) {
      return _v0.then(function (_v0) {
        return {
          fulfilled: !0,
          value: _v0
        };
      }, function (_v0) {
        return {
          fulfilled: !1,
          value: _v0
        };
      });
    }));
  }
  function _v9(_v0) {
    var _v1,
      _v2 = _v0.validations,
      _v3 = _v0.value,
      _v4 = _v0.path,
      _v5 = _v0.sync,
      _v6 = _v0.errors,
      _v7 = _v0.sort;
    return void 0 === (_v1 = _v6) && (_v1 = []), _v6 = _v1.inner && _v1.inner.length ? _v1.inner : [].concat(_v1), _v8(_v2, _v5).then(function (_v0) {
      var _v1 = _v0.filter(function (_v0) {
        return !_v0.fulfilled;
      }).reduce(function (_v0, _v1) {
        var _v2 = _v1.value;
        if (!_v6.default.isError(_v2)) throw _v2;
        return _v0.concat(_v2);
      }, []);
      if (_v7 && _v1.sort(_v7), (_v6 = _v1.concat(_v6)).length) throw new _v6.default(_v6, _v3, _v4);
      return _v3;
    });
  }
}