{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useClipboard", 0, function (_v0, _v1 = {}) {
    let [_v2, _v3] = (0, _v1.useState)(!1),
      [_v4, _v5] = (0, _v1.useState)(_v0);
    (0, _v1.useEffect)(() => _v5(_v0), [_v0]);
    let {
        timeout: _v6 = 0,
        ..._v7
      } = "number" == typeof _v1 ? {
        timeout: _v1
      } : _v1,
      _v8 = (0, _v1.useCallback)(() => {
        _v3((0, _v2.default)(_v4, _v7));
      }, [_v4, _v7]);
    return (0, _v1.useEffect)(() => {
      let _v0 = null;
      return _v2 && (_v0 = window.setTimeout(() => {
        _v3(!1);
      }, _v6)), () => {
        _v0 && window.clearTimeout(_v0);
      };
    }, [_v6, _v2]), {
      value: _v4,
      setValue: _v5,
      onCopy: _v8,
      hasCopied: _v2
    };
  }]);
}