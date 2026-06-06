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
    _v9 = "u" < typeof document || null === document;
  _v0.s(["usePortal_DEPRECATED", 0, function (_v0, _v1) {
    var _v2,
      _v3,
      _v4 = (0, _v2.useRef)(null),
      _v5 = (0, _v2.useRef)(null),
      _v6 = (0, _v2.useRef)(null),
      _v7 = _v1.allowPageInteraction,
      _v8 = void 0 !== _v7 && _v7,
      _v9 = _v1.anchorToWindow,
      _v10 = void 0 !== _v9 && _v9,
      _v11 = _v1.attach,
      _v12 = _v1.forceActive,
      _v13 = _v1.margin,
      _v14 = _v1.onClick,
      _v15 = _v1.screen,
      _v16 = _v1.trigger,
      _v17 = void 0 === _v16 ? "click" : _v16,
      _v18 = (0, _v5.useMountAnimations)(_v1, {
        childRef: _v5,
        screenRef: _v4
      }),
      _v19 = _v18.open,
      _v20 = _v18.close,
      _v21 = _v18.active,
      _v22 = _v18.animationProps,
      _v23 = !0 === _v12 || !1 === _v12,
      _v24 = function (_v0) {
        return !_v23 && _v21 ? _v20(_v0) : _v19(_v0);
      };
    if ((0, _v8.useOutsideClick)([_v6, _v5], function (_v0) {
      !_v8 && (_v23 || "click" !== _v17 || _v20(_v0));
    }), _v9) return [null, null];
    var _v25 = (_v2 = "iris-portals", _v9 ? null : null != (_v3 = document.getElementById(_v2)) ? _v3 : function (_v0) {
        if (_v9) return null;
        var _v1 = function (_v0) {
          if (_v9) return null;
          var _v1 = document.createElement("div");
          return Object.entries(_v0).map(function (_v0) {
            var _v1 = (0, _v1._)(_v0, 2),
              _v2 = _v1[0],
              _v3 = _v1[1];
            return _v1[_v2] = _v3;
          }), _v1;
        }({
          id: _v0
        });
        return document.body.appendChild(_v1), _v1;
      }(_v2)),
      _v26 = !_v23 && "click" === _v17 && {
        onClick: function (_v0) {
          _v14 && _v14(_v0), _v24(_v0);
        }
      },
      _v27 = (0, _v2.cloneElement)(_v0, (0, _v1.c)({
        ref: _v5
      }, _v22)),
      _v28 = (0, _v3.createPortal)(_v2.default.createElement(_v2.default.Fragment, null, _v2.default.createElement(_v7.Anchor, {
        anchor: _v6,
        anchorToWindow: _v10,
        attach: (0, _v6.coordinates)(void 0 === _v11 ? null : _v11, _v10),
        childRef: _v5,
        margin: void 0 === _v13 ? 8 : _v13,
        children: _v27
      }), void 0 !== _v15 && _v15 && _v2.default.createElement(_v4.Screen, {
        ref: _v4,
        onClick: _v24
      })), _v25);
    return [_v21 && _v28, (0, _v1.c)((0, _v1.c)({
      ref: _v6
    }, _v26), !_v23 && "hover" === _v17 && {
      onMouseEnter: _v19,
      onMouseLeave: _v20
    })];
  }, "validate", 0, function (_v0) {
    var _v1 = _v0.type;
    return "string" == typeof _v1 || _v1.$$typeof && "Symbol(react.forward_ref)" === _v1.$$typeof.toString();
  }], 0);
}