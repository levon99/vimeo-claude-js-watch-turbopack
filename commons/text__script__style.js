{
  "use strict";

  var _v3 = _v0.e && _v0.e.__importDefault || function (_v0) {
    return _v0 && _v0.__esModule ? _v0 : {
      default: _v0
    };
  };
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.default = function _v0(_v1, _v2) {
    void 0 === _v2 && (_v2 = {});
    for (var _v3, _v4, _v5, _v6, _v7, _v8 = [], _v9 = "function" == typeof _v2.replace, _v10 = null != (_v3 = _v2.transform) ? _v3 : _v6.returnFirstArg, _v11 = null != (_v4 = _v2.library) ? _v4 : _v7, _v12 = _v11.cloneElement, _v13 = _v11.createElement, _v14 = _v11.isValidElement, _v15 = _v1.length, _v16 = 0; _v16 < _v15; _v16++) {
      var _v17,
        _v18 = _v1[_v16];
      if (_v9) {
        var _v19 = null == (_v5 = _v2.replace) ? void 0 : _v5.call(_v2, _v18, _v16);
        if (_v14(_v19)) {
          _v15 > 1 && (_v19 = _v12(_v19, {
            key: null != (_v6 = _v19.key) ? _v6 : _v16
          })), _v8.push(_v10(_v19, _v18, _v16));
          continue;
        }
      }
      if ("text" === _v18.type) {
        var _v20 = !_v18.data.trim().length;
        if (_v20 && _v18.parent && !(0, _v6.canTextBeChildOfNode)(_v18.parent) || _v2.trim && _v20) continue;
        _v8.push(_v10(_v18.data, _v18, _v16));
        continue;
      }
      var _v21 = {};
      (_v17 = _v18, _v6.PRESERVE_CUSTOM_ATTRIBUTES && "tag" === _v17.type && (0, _v6.isCustomComponent)(_v17.name, _v17.attribs)) ? ((0, _v6.setStyleProp)(_v18.attribs.style, _v18.attribs), _v21 = _v18.attribs) : _v18.attribs && (_v21 = (0, _v5.default)(_v18.attribs, _v18.name));
      var _v22 = void 0;
      switch (_v18.type) {
        case "script":
        case "style":
          _v18.children[0] && (_v21.dangerouslySetInnerHTML = {
            __html: _v18.children[0].data
          });
          break;
        case "tag":
          "textarea" === _v18.name && _v18.children[0] ? _v21.defaultValue = _v18.children[0].data : (null == (_v7 = _v18.children) ? void 0 : _v7.length) && (_v22 = _v0(_v18.children, _v2));
          break;
        default:
          continue;
      }
      _v15 > 1 && (_v21.key = _v16), _v8.push(_v10(_v13(_v18.name, _v21, _v22), _v18, _v16));
    }
    return 1 === _v8.length ? _v8[0] : _v8;
  };
  var _v4 = _v0.r(0),
    _v5 = _v3(_v0.r(0)),
    _v6 = _v0.r(0),
    _v7 = {
      cloneElement: _v4.cloneElement,
      createElement: _v4.createElement,
      isValidElement: _v4.isValidElement
    };
}