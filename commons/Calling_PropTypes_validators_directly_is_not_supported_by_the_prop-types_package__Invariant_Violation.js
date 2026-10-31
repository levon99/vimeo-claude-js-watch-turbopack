{
  "use strict";

  var _v3 = _v0.r(0);
  function _v4() {}
  function _v5() {}
  _v5.resetWarningCache = _v4, _v1.exports = function () {
    function _v0(_v0, _v1, _v2, _v3, _v4, _v5) {
      if (_v5 !== _v3) {
        var _v6 = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
        throw _v6.name = "Invariant Violation", _v6;
      }
    }
    function _v1() {
      return _v0;
    }
    _v0.isRequired = _v0;
    var _v2 = {
      array: _v0,
      bool: _v0,
      func: _v0,
      number: _v0,
      object: _v0,
      string: _v0,
      symbol: _v0,
      any: _v0,
      arrayOf: _v1,
      element: _v0,
      elementType: _v0,
      instanceOf: _v1,
      node: _v0,
      objectOf: _v1,
      oneOf: _v1,
      oneOfType: _v1,
      shape: _v1,
      exact: _v1,
      checkPropTypes: _v5,
      resetWarningCache: _v4
    };
    return _v2.PropTypes = _v2, _v2;
  };
}