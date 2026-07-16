{
  "use strict";

  var _v3, _v4, _v5, _v6, _v7, _v8;
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.ObfuscatedOperatorType = _v2.OperatorType = void 0, _v2.matchesRule = function (_v0, _v1, _v2) {
    var _v3, _v4, _v5;
    return !(_v3 = _v1, _v4 = _v0.conditions, _v5 = _v2, _v4.map(_v0 => _v5 ? function (_v0, _v1) {
      let _v2 = _v0[_v1.attribute];
      if (_v1.operator === _v4.IS_NULL) return _v1.value === (0, _v10.getMD5Hash)("true") ? null == _v2 : null != _v2;
      if (null != _v2) switch (_v1.operator) {
        case _v4.GTE:
        case _v4.GT:
        case _v4.LTE:
        case _v4.LT:
          {
            let _v0 = (0, _v10.decodeBase64)(_v1.value);
            if (_v16(_v0) === _v5.SEM_VER) return _v15(_v2, _v0, _v1.operator === _v4.GTE ? _v9.gte : _v1.operator === _v4.GT ? _v9.gt : _v1.operator === _v4.LTE ? _v9.lte : _v9.lt);
            return _v14(_v2, Number(_v0), (_v0, _v1) => _v1.operator === _v4.GTE ? _v0 >= _v1 : _v1.operator === _v4.GT ? _v0 > _v1 : _v1.operator === _v4.LTE ? _v0 <= _v1 : _v0 < _v1);
          }
        case _v4.MATCHES:
          return new RegExp((0, _v10.decodeBase64)(_v1.value)).test(_v2);
        case _v4.NOT_MATCHES:
          return !new RegExp((0, _v10.decodeBase64)(_v1.value)).test(_v2);
        case _v4.ONE_OF:
          return _v11((0, _v10.getMD5Hash)(_v2.toString()), _v1.value);
        case _v4.NOT_ONE_OF:
          return _v12((0, _v10.getMD5Hash)(_v2.toString()), _v1.value);
      }
      return !1;
    }(Object.entries(_v3).reduce((_v0, [_v1, _v2]) => ({
      [(0, _v10.getMD5Hash)(_v1)]: _v2,
      ..._v0
    }), {}), _v0) : function (_v0, _v1) {
      let _v2 = _v0[_v1.attribute];
      if (_v1.operator === _v3.IS_NULL) return _v1.value ? null == _v2 : null != _v2;
      if (null != _v2) switch (_v1.operator) {
        case _v3.GTE:
        case _v3.GT:
        case _v3.LTE:
        case _v3.LT:
          if (_v16(_v1.value) === _v5.SEM_VER) {
            let _v0 = _v1.operator === _v3.GTE ? _v9.gte : _v1.operator === _v3.GT ? _v9.gt : _v1.operator === _v3.LTE ? _v9.lte : _v9.lt;
            return _v15(_v2, _v1.value, _v0);
          }
          return _v14(_v2, _v1.value, (_v0, _v1) => _v1.operator === _v3.GTE ? _v0 >= _v1 : _v1.operator === _v3.GT ? _v0 > _v1 : _v1.operator === _v3.LTE ? _v0 <= _v1 : _v0 < _v1);
        case _v3.MATCHES:
          return new RegExp(_v1.value).test(_v2);
        case _v3.NOT_MATCHES:
          return !new RegExp(_v1.value).test(_v2);
        case _v3.ONE_OF:
          return _v11(_v2.toString(), _v1.value);
        case _v3.NOT_ONE_OF:
          return _v12(_v2.toString(), _v1.value);
      }
      return !1;
    }(_v3, _v0))).includes(!1);
  };
  let _v9 = _v0.r(0),
    _v10 = _v0.r(0);
  function _v11(_v0, _v1) {
    return _v13(_v0, _v1).length > 0;
  }
  function _v12(_v0, _v1) {
    return 0 === _v13(_v0, _v1).length;
  }
  function _v13(_v0, _v1) {
    return _v1.filter(_v0 => _v0 === _v0);
  }
  function _v14(_v0, _v1, _v2) {
    return _v2(Number(_v0), Number(_v1));
  }
  function _v15(_v0, _v1, _v2) {
    return !!(0, _v9.valid)(_v0) && !!(0, _v9.valid)(_v1) && _v2(_v0, _v1);
  }
  function _v16(_v0) {
    return "number" == typeof _v0 ? _v5.NUMERIC : Array.isArray(_v0) ? _v5.STRING_ARRAY : "string" == typeof _v0 && (0, _v9.valid)(_v0) ? _v5.SEM_VER : isNaN(Number(_v0)) ? _v5.PLAIN_STRING : _v5.NUMERIC;
  }
  (_v6 = _v3 || (_v2.OperatorType = _v3 = {})).MATCHES = "MATCHES", _v6.NOT_MATCHES = "NOT_MATCHES", _v6.GTE = "GTE", _v6.GT = "GT", _v6.LTE = "LTE", _v6.LT = "LT", _v6.ONE_OF = "ONE_OF", _v6.NOT_ONE_OF = "NOT_ONE_OF", _v6.IS_NULL = "IS_NULL", (_v7 = _v4 || (_v2.ObfuscatedOperatorType = _v4 = {})).MATCHES = "05015086bdd8402218f6aad6528bef08", _v7.NOT_MATCHES = "8323761667755378c3a78e0a6ed37a78", _v7.GTE = "32d35312e8f24bc1669bd2b45c00d47c", _v7.GT = "cd6a9bd2a175104eed40f0d33a8b4020", _v7.LTE = "cc981ecc65ecf63ad1673cbec9c64198", _v7.LT = "c562607189d77eb9dfb707464c1e7b0b", _v7.ONE_OF = "27457ce369f2a74203396a35ef537c0b", _v7.NOT_ONE_OF = "602f5ee0b6e84fe29f43ab48b9e1addf", _v7.IS_NULL = "dbd9c38e0339e6c34bd48cafc59be388", (_v8 = _v5 || (_v5 = {})).PLAIN_STRING = "PLAIN_STRING", _v8.STRING_ARRAY = "STRING_ARRAY", _v8.SEM_VER = "SEM_VER", _v8.NUMERIC = "NUMERIC";
}