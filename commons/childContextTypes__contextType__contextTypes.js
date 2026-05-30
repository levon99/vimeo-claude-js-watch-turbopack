{
  "use strict";

  var _v3 = _v0.r(0),
    _v4 = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0
    },
    _v5 = {
      name: !0,
      length: !0,
      prototype: !0,
      caller: !0,
      callee: !0,
      arguments: !0,
      arity: !0
    },
    _v6 = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0
    },
    _v7 = {};
  function _v8(_v0) {
    return _v3.isMemo(_v0) ? _v6 : _v7[_v0.$$typeof] || _v4;
  }
  _v7[_v3.ForwardRef] = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, _v7[_v3.Memo] = _v6;
  var _v9 = Object.defineProperty,
    _v10 = Object.getOwnPropertyNames,
    _v11 = Object.getOwnPropertySymbols,
    _v12 = Object.getOwnPropertyDescriptor,
    _v13 = Object.getPrototypeOf,
    _v14 = Object.prototype;
  _v1.exports = function _v0(_v1, _v2, _v3) {
    if ("string" != typeof _v2) {
      if (_v14) {
        var _v4 = _v13(_v2);
        _v4 && _v4 !== _v14 && _v0(_v1, _v4, _v3);
      }
      var _v5 = _v10(_v2);
      _v11 && (_v5 = _v5.concat(_v11(_v2)));
      for (var _v6 = _v8(_v1), _v7 = _v8(_v2), _v8 = 0; _v8 < _v5.length; ++_v8) {
        var _v9 = _v5[_v8];
        if (!_v5[_v9] && !(_v3 && _v3[_v9]) && !(_v7 && _v7[_v9]) && !(_v6 && _v6[_v9])) {
          var _v10 = _v12(_v2, _v9);
          try {
            _v9(_v1, _v9, _v10);
          } catch (_v0) {}
        }
      }
    }
    return _v1;
  };
}