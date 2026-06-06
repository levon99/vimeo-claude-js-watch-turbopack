{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = ["children"],
    _v12 = ["children"];
  function _v13(_v0, _v1) {
    if (null == _v0) return {};
    var _v2,
      _v3,
      _v4 = function (_v0, _v1) {
        if (null == _v0) return {};
        var _v2 = {};
        for (var _v3 in _v0) if (Object.prototype.hasOwnProperty.call(_v0, _v3)) {
          if (_v1.indexOf(_v3) >= 0) continue;
          _v2[_v3] = _v0[_v3];
        }
        return _v2;
      }(_v0, _v1);
    if (Object.getOwnPropertySymbols) {
      var _v5 = Object.getOwnPropertySymbols(_v0);
      for (_v3 = 0; _v3 < _v5.length; _v3++) _v2 = _v5[_v3], !(_v1.indexOf(_v2) >= 0) && Object.prototype.propertyIsEnumerable.call(_v0, _v2) && (_v4[_v2] = _v0[_v2]);
    }
    return _v4;
  }
  function _v14(_v0) {
    return (_v14 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_v0) {
      return typeof _v0;
    } : function (_v0) {
      return _v0 && "function" == typeof Symbol && _v0.constructor === Symbol && _v0 !== Symbol.prototype ? "symbol" : typeof _v0;
    })(_v0);
  }
  var _v15 = {
      click: "onClick",
      mousedown: "onMouseDown",
      mouseup: "onMouseUp",
      mouseover: "onMouseOver",
      mousemove: "onMouseMove",
      mouseout: "onMouseOut",
      mouseenter: "onMouseEnter",
      mouseleave: "onMouseLeave",
      touchcancel: "onTouchCancel",
      touchend: "onTouchEnd",
      touchmove: "onTouchMove",
      touchstart: "onTouchStart",
      contextmenu: "onContextMenu",
      dblclick: "onDoubleClick"
    },
    _v16 = function (_v0) {
      return "string" == typeof _v0 ? _v0 : _v0 ? _v0.displayName || _v0.name || "Component" : "";
    },
    _v17 = null,
    _v18 = null,
    _v19 = function _v0(_v1) {
      if (_v1 === _v17 && Array.isArray(_v18)) return _v18;
      var _v2 = [];
      return _v6.Children.forEach(_v1, function (_v0) {
        (0, _v2.default)(_v0) || ((0, _v7.isFragment)(_v0) ? _v2 = _v2.concat(_v0(_v0.props.children)) : _v2.push(_v0));
      }), _v18 = _v2, _v17 = _v1, _v2;
    };
  function _v20(_v0, _v1) {
    var _v2 = [],
      _v3 = [];
    return _v3 = Array.isArray(_v1) ? _v1.map(function (_v0) {
      return _v16(_v0);
    }) : [_v16(_v1)], _v19(_v0).forEach(function (_v0) {
      var _v1 = (0, _v1.default)(_v0, "type.displayName") || (0, _v1.default)(_v0, "type.name");
      -1 !== _v3.indexOf(_v1) && _v2.push(_v0);
    }), _v2;
  }
  var _v21 = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"],
    _v22 = function (_v0) {
      return _v0 && _v0.type && (0, _v3.default)(_v0.type) && _v21.indexOf(_v0.type) >= 0;
    },
    _v23 = function (_v0, _v1, _v2, _v3) {
      var _v4,
        _v5 = null != (_v4 = null === _v10.FilteredElementKeyMap || void 0 === _v10.FilteredElementKeyMap ? void 0 : _v10.FilteredElementKeyMap[_v3]) ? _v4 : [];
      return _v1.startsWith("data-") || !(0, _v4.default)(_v0) && (_v3 && _v5.includes(_v1) || _v10.SVGElementPropKeys.includes(_v1)) || _v2 && _v10.EventKeys.includes(_v1);
    },
    _v24 = function _v0(_v1, _v2) {
      if (_v1 === _v2) return !0;
      var _v3 = _v6.Children.count(_v1);
      if (_v3 !== _v6.Children.count(_v2)) return !1;
      if (0 === _v3) return !0;
      if (1 === _v3) return _v25(Array.isArray(_v1) ? _v1[0] : _v1, Array.isArray(_v2) ? _v2[0] : _v2);
      for (var _v4 = 0; _v4 < _v3; _v4++) {
        var _v5 = _v1[_v4],
          _v6 = _v2[_v4];
        if (Array.isArray(_v5) || Array.isArray(_v6)) {
          if (!_v0(_v5, _v6)) return !1;
        } else if (!_v25(_v5, _v6)) return !1;
      }
      return !0;
    },
    _v25 = function (_v0, _v1) {
      if ((0, _v2.default)(_v0) && (0, _v2.default)(_v1)) return !0;
      if (!(0, _v2.default)(_v0) && !(0, _v2.default)(_v1)) {
        var _v2 = _v0.props || {},
          _v3 = _v2.children,
          _v4 = _v13(_v2, _v11),
          _v5 = _v1.props || {},
          _v6 = _v5.children,
          _v7 = _v13(_v5, _v12);
        if (_v3 && _v6) return (0, _v9.shallowEqual)(_v4, _v7) && _v24(_v3, _v6);
        if (!_v3 && !_v6) return (0, _v9.shallowEqual)(_v4, _v7);
      }
      return !1;
    };
  _v0.s(["filterProps", 0, function (_v0, _v1, _v2) {
    if (!_v0 || "function" == typeof _v0 || "boolean" == typeof _v0) return null;
    var _v3 = _v0;
    if ((0, _v6.isValidElement)(_v0) && (_v3 = _v0.props), !(0, _v5.default)(_v3)) return null;
    var _v4 = {};
    return Object.keys(_v3).forEach(function (_v0) {
      var _v1;
      _v23(null == (_v1 = _v3) ? void 0 : _v1[_v0], _v0, _v1, _v2) && (_v4[_v0] = _v3[_v0]);
    }), _v4;
  }, "filterSvgElements", 0, function (_v0) {
    var _v1 = [];
    return _v19(_v0).forEach(function (_v0) {
      _v22(_v0) && _v1.push(_v0);
    }), _v1;
  }, "findAllByType", 0, _v20, "findChildByType", 0, function (_v0, _v1) {
    var _v2 = _v20(_v0, _v1);
    return _v2 && _v2[0];
  }, "getDisplayName", 0, _v16, "getReactEventByType", 0, function (_v0) {
    var _v1 = _v0 && _v0.type;
    return _v1 && _v15[_v1] ? _v15[_v1] : null;
  }, "hasClipDot", 0, function (_v0) {
    return _v0 && "object" === _v14(_v0) && "clipDot" in _v0;
  }, "isChildrenEqual", 0, _v24, "parseChildIndex", 0, function (_v0, _v1) {
    return _v19(_v1).indexOf(_v0);
  }, "renderByOrder", 0, function (_v0, _v1) {
    var _v2 = [],
      _v3 = {};
    return _v19(_v0).forEach(function (_v0, _v1) {
      if (_v22(_v0)) _v2.push(_v0);else if (_v0) {
        var _v2 = _v16(_v0.type),
          _v3 = _v1[_v2] || {},
          _v4 = _v3.handler,
          _v5 = _v3.once;
        if (_v4 && (!_v5 || !_v3[_v2])) {
          var _v6 = _v4(_v0, _v2, _v1);
          _v2.push(_v6), _v3[_v2] = !0;
        }
      }
    }), _v2;
  }, "validateWidthHeight", 0, function (_v0) {
    if (!_v0 || !_v0.props) return !1;
    var _v1 = _v0.props,
      _v2 = _v1.width,
      _v3 = _v1.height;
    return !!(0, _v8.isNumber)(_v2) && !(_v2 <= 0) && !!(0, _v8.isNumber)(_v3) && !(_v3 <= 0);
  }]);
}