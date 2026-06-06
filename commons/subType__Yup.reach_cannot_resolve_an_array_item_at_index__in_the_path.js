{
  "use strict";

  var _v3 = _v0.r(0);
  _v2.__esModule = !0, _v2.getIn = _v6, _v2.default = void 0;
  var _v4 = _v0.r(0),
    _v5 = _v3(_v0.r(0));
  function _v6(_v0, _v1, _v2, _v3) {
    var _v4, _v5, _v6;
    return (_v3 = _v3 || _v2, _v1) ? ((0, _v4.forEach)(_v1, function (_v0, _v1, _v2) {
      var _v3 = _v1 ? _v0.substr(0, _v0.length - 1).substr(1) : _v0;
      if (_v2 || (0, _v5.default)(_v0, "_subType")) {
        var _v4 = _v2 ? parseInt(_v3, 10) : 0;
        if (_v0 = _v0.resolve({
          context: _v3,
          parent: _v4,
          value: _v2
        })._subType, _v2) {
          if (_v2 && _v4 >= _v2.length) throw Error("Yup.reach cannot resolve an array item at index: " + _v0 + ", in the path: " + _v1 + ". because there is no value at that index. ");
          _v2 = _v2[_v4];
        }
      }
      if (!_v2) {
        if (_v0 = _v0.resolve({
          context: _v3,
          parent: _v4,
          value: _v2
        }), !(0, _v5.default)(_v0, "fields") || !(0, _v5.default)(_v0.fields, _v3)) throw Error("The schema does not contain the path: " + _v1 + ". " + ("(failed at: " + _v6 + ' which is a type: "') + _v0._type + '") ');
        _v0 = _v0.fields[_v3], _v4 = _v2, _v2 = _v2 && _v2[_v3], _v5 = _v0, _v6 = _v1 ? "[" + _v0 + "]" : "." + _v0;
      }
    }), _v0 && (_v0 = _v0.resolve({
      context: _v3,
      parent: _v4,
      value: _v2
    })), {
      schema: _v0,
      parent: _v4,
      parentPath: _v5
    }) : {
      parent: _v4,
      parentPath: _v1,
      schema: _v0.resolve({
        context: _v3,
        parent: _v4,
        value: _v2
      })
    };
  }
  _v2.default = function (_v0, _v1, _v2, _v3) {
    return _v6(_v0, _v1, _v2, _v3).schema;
  };
}