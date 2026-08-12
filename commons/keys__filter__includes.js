{
  "use strict";

  function _v3(_v0, _v1, _v2 = !1) {
    return _v1 ? Object.keys(_v0).filter(_v0 => _v2 ? !_v1.includes(_v0) : _v1.includes(_v0)).reduce((_v0, _v1) => (_v0[_v1] = _v0[_v1], _v0), {}) : {};
  }
  function _v4(_v0, _v1, _v2, _v3) {
    let _v4 = _v3 && Object.keys(_v3).length > 0 ? new URL(Object.values(_v3)[0], _v0) : new URL(_v0);
    return _v1 && _v2 && _v1.forEach(_v0 => {
      _v2[_v0] && _v4.searchParams.set(_v0, _v2[_v0]);
    }), _v4.toString();
  }
  function _v5(_v0, _v1, _v2, _v3, _v4) {
    var _v5;
    if (!_v1) return `<${_v0}></${_v0}>`;
    let _v6 = (null == (_v5 = _v1.src) ? void 0 : _v5.url) ? Object.assign(Object.assign({}, _v1), {
        src: _v4(_v1.src.url, _v1.src.params, _v3, _v4)
      }) : _v1,
      _v7 = Object.keys(Object.assign(Object.assign({}, _v6), _v2)).reduce((_v0, _v1) => {
        let _v2 = null == _v2 ? void 0 : _v2[_v1],
          _v3 = _v6[_v1],
          _v4 = null != _v2 ? _v2 : _v3,
          _v5 = !0 === _v4 ? _v1 : `${_v1}="${_v4}"`;
        return _v4 ? _v0 + ` ${_v5}` : _v0;
      }, "");
    return `<${_v0}${_v7}></${_v0}>`;
  }
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.formatData = _v2.createHtml = _v2.formatUrl = void 0, _v2.formatUrl = _v4, _v2.createHtml = _v5, _v2.formatData = function (_v0, _v1) {
    var _v2, _v3, _v4, _v5, _v6;
    let _v7 = _v3(_v1, null == (_v2 = _v0.scripts) ? void 0 : _v2.reduce((_v0, _v1) => [..._v0, ...(Array.isArray(_v1.params) ? _v1.params : [])], [])),
      _v8 = _v3(_v1, null == (_v4 = null == (_v3 = _v0.html) ? void 0 : _v3.attributes.src) ? void 0 : _v4.params),
      _v9 = _v3(_v1, [null == (_v6 = null == (_v5 = _v0.html) ? void 0 : _v5.attributes.src) ? void 0 : _v6.slugParam]),
      _v10 = _v3(_v1, [...Object.keys(_v7), ...Object.keys(_v8), ...Object.keys(_v9)], !0);
    return Object.assign(Object.assign({}, _v0), {
      html: _v0.html ? _v5(_v0.html.element, _v0.html.attributes, _v10, _v8, _v9) : null,
      scripts: _v0.scripts ? _v0.scripts.map(_v0 => Object.assign(Object.assign({}, _v0), {
        url: _v4(_v0.url, _v0.params, _v7)
      })) : null
    });
  };
}