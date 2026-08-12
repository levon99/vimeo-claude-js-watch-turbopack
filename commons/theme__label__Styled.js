{
  "use strict";

  let _v1;
  var _v2,
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v9 = _v9,
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0).default,
    _v16 = function (_v0) {
      return "theme" !== _v0;
    },
    _v17 = function (_v0) {
      return "string" == typeof _v0 && _v0.charCodeAt(0) > 96 ? _v15 : _v16;
    },
    _v18 = function (_v0, _v1, _v2) {
      var _v3;
      if (_v1) {
        var _v4 = _v1.shouldForwardProp;
        _v3 = _v0.__emotion_forwardProp && _v4 ? function (_v0) {
          return _v0.__emotion_forwardProp(_v0) && _v4(_v0);
        } : _v4;
      }
      return "function" != typeof _v3 && _v2 && (_v3 = _v0.__emotion_forwardProp), _v3;
    },
    _v19 = function (_v0) {
      var _v1 = _v0.cache,
        _v2 = _v0.serialized,
        _v3 = _v0.isStringTag;
      return (0, _v13.registerStyles)(_v1, _v2, _v3), (0, _v12.useInsertionEffectAlwaysWithSyncFallback)(function () {
        return (0, _v13.insertStyles)(_v1, _v2, _v3);
      }), null;
    },
    _v20 = function _v0(_v1, _v2) {
      var _v3,
        _v4,
        _v5 = _v1.__emotion_real === _v1,
        _v6 = _v5 && _v1.__emotion_base || _v1;
      void 0 !== _v2 && (_v3 = _v2.label, _v4 = _v2.target);
      var _v7 = _v18(_v1, _v2, _v5),
        _v8 = _v7 || _v17(_v6),
        _v9 = !_v8("as");
      return function () {
        var _v0 = arguments,
          _v1 = _v5 && void 0 !== _v1.__emotion_styles ? _v1.__emotion_styles.slice(0) : [];
        if (void 0 !== _v3 && _v1.push("label:" + _v3 + ";"), null == _v0[0] || void 0 === _v0[0].raw) _v1.push.apply(_v1, _v0);else {
          var _v2 = _v0[0];
          _v1.push(_v2[0]);
          for (var _v3 = _v0.length, _v4 = 1; _v4 < _v3; _v4++) _v1.push(_v0[_v4], _v2[_v4]);
        }
        var _v5 = (0, _v9.w)(function (_v0, _v1, _v2) {
          var _v3 = _v9 && _v0.as || _v6,
            _v4 = "",
            _v5 = [],
            _v6 = _v0;
          if (null == _v0.theme) {
            for (var _v7 in _v6 = {}, _v0) _v6[_v7] = _v0[_v7];
            _v6.theme = _v14.useContext(_v10.ThemeContext);
          }
          "string" == typeof _v0.className ? _v4 = (0, _v13.getRegisteredStyles)(_v1.registered, _v5, _v0.className) : null != _v0.className && (_v4 = _v0.className + " ");
          var _v8 = (0, _v11.serializeStyles)(_v1.concat(_v5), _v1.registered, _v6);
          _v4 += _v1.key + "-" + _v8.name, void 0 !== _v4 && (_v4 += " " + _v4);
          var _v9 = _v9 && void 0 === _v7 ? _v17(_v3) : _v8,
            _v10 = {};
          for (var _v11 in _v0) (!_v9 || "as" !== _v11) && _v9(_v11) && (_v10[_v11] = _v0[_v11]);
          return _v10.className = _v4, _v2 && (_v10.ref = _v2), _v14.createElement(_v14.Fragment, null, _v14.createElement(_v19, {
            cache: _v1,
            serialized: _v8,
            isStringTag: "string" == typeof _v3
          }), _v14.createElement(_v3, _v10));
        });
        return _v5.displayName = void 0 !== _v3 ? _v3 : "Styled(" + ("string" == typeof _v6 ? _v6 : _v6.displayName || _v6.name || "Component") + ")", _v5.defaultProps = _v1.defaultProps, _v5.__emotion_real = _v5, _v5.__emotion_base = _v6, _v5.__emotion_styles = _v1, _v5.__emotion_forwardProp = _v7, Object.defineProperty(_v5, "toString", {
          value: function () {
            return "." + _v4;
          }
        }), _v5.withComponent = function (_v0, _v1) {
          return _v0(_v0, (0, _v8.default)({}, _v2, _v1, {
            shouldForwardProp: _v18(_v5, _v1, !0)
          })).apply(void 0, _v1);
        }, _v5;
      };
    }.bind(null);
  ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"].forEach(function (_v0) {
    _v20[_v0] = _v20(_v0);
  });
  var _v21 = null != (_v2 = _v20.default) ? _v2 : _v20;
  function _v22(_v0, _v1) {
    let {
      baseStyle: _v2,
      ..._v3
    } = null != _v1 ? _v1 : {};
    _v3.shouldForwardProp || (_v3.shouldForwardProp = _v3.shouldForwardProp);
    let _v4 = (({
        baseStyle: _v0
      }) => _v0 => {
        let {
            theme: _v1,
            css: _v2,
            __css: _v3,
            sx: _v4,
            ..._v5
          } = _v0,
          _v6 = (0, _v6.objectFilter)(_v5, (_v0, _v1) => (0, _v5.isStyleProp)(_v1)),
          _v7 = function (_v0, ..._v1) {
            if (null == _v0) throw TypeError("Cannot convert undefined or null to object");
            let _v2 = {
              ..._v0
            };
            for (let _v0 of _v1) if (null != _v0) for (let _v0 in _v0) Object.prototype.hasOwnProperty.call(_v0, _v0) && (_v0 in _v2 && delete _v2[_v0], _v2[_v0] = _v0[_v0]);
            return _v2;
          }({}, _v3, (0, _v7.runIfFn)(_v0, _v0), (0, _v6.filterUndefined)(_v6), _v4),
          _v8 = (0, _v5.css)(_v7)(_v0.theme);
        return _v2 ? [_v8, _v2] : _v8;
      })({
        baseStyle: _v2
      }),
      _v5 = _v21(_v0, _v3)(_v4);
    return _v14.default.forwardRef(function (_v0, _v1) {
      let {
        colorMode: _v2,
        forced: _v3
      } = (0, _v4.useColorMode)();
      return _v14.default.createElement(_v5, {
        ref: _v1,
        "data-theme": _v3 ? _v2 : void 0,
        ..._v0
      });
    });
  }
  var _v23 = (_v1 = new Map(), new Proxy(_v22, {
    apply: (_v0, _v1, _v2) => _v22(..._v2),
    get: (_v0, _v1) => (_v1.has(_v1) || _v1.set(_v1, _v22(_v1)), _v1.get(_v1))
  }));
  _v0.s(["chakra", 0, _v23], 0);
}