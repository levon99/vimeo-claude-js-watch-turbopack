{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  function _v4(_v0) {
    let {
      tagName: _v1,
      isContentEditable: _v2
    } = _v0.target;
    return "INPUT" !== _v1 && "TEXTAREA" !== _v1 && !0 !== _v2;
  }
  _v0.s(["useClickable", 0, function (_v0 = {}) {
    let _v1,
      _v2,
      _v3,
      _v4,
      {
        ref: _v5,
        isDisabled: _v6,
        isFocusable: _v7,
        clickOnEnter: _v8 = !0,
        clickOnSpace: _v9 = !0,
        onMouseDown: _v10,
        onMouseUp: _v11,
        onClick: _v12,
        onKeyDown: _v13,
        onKeyUp: _v14,
        tabIndex: _v15,
        onMouseOver: _v16,
        onMouseLeave: _v17,
        ..._v18
      } = _v0,
      [_v19, _v20] = (0, _v1.useState)(!0),
      [_v21, _v22] = (0, _v1.useState)(!1),
      _v23 = (_v2 = (_v1 = (0, _v1.useRef)(new Map())).current, _v3 = (0, _v1.useCallback)((_v0, _v1, _v2, _v3) => {
        _v1.current.set(_v2, {
          type: _v1,
          el: _v0,
          options: _v3
        }), _v0.addEventListener(_v1, _v2, _v3);
      }, []), _v4 = (0, _v1.useCallback)((_v0, _v1, _v2, _v3) => {
        _v0.removeEventListener(_v1, _v2, _v3), _v1.current.delete(_v2);
      }, []), (0, _v1.useEffect)(() => () => {
        _v2.forEach((_v0, _v1) => {
          _v4(_v0.el, _v0.type, _v1, _v0.options);
        });
      }, [_v4, _v2]), {
        add: _v3,
        remove: _v4
      }),
      _v24 = _v19 ? _v15 : _v15 || 0,
      _v25 = _v6 && !_v7,
      _v26 = (0, _v1.useCallback)(_v0 => {
        if (_v6) {
          _v0.stopPropagation(), _v0.preventDefault();
          return;
        }
        _v0.currentTarget.focus(), null == _v12 || _v12(_v0);
      }, [_v6, _v12]),
      _v27 = (0, _v1.useCallback)(_v0 => {
        _v21 && _v4(_v0) && (_v0.preventDefault(), _v0.stopPropagation(), _v22(!1), _v23.remove(document, "keyup", _v27, !1));
      }, [_v21, _v23]),
      _v28 = (0, _v1.useCallback)(_v0 => {
        if (null == _v13 || _v13(_v0), _v6 || _v0.defaultPrevented || _v0.metaKey || !_v4(_v0.nativeEvent) || _v19) return;
        let _v1 = _v8 && "Enter" === _v0.key;
        _v9 && " " === _v0.key && (_v0.preventDefault(), _v22(!0)), _v1 && (_v0.preventDefault(), _v0.currentTarget.click()), _v23.add(document, "keyup", _v27, !1);
      }, [_v6, _v19, _v13, _v8, _v9, _v23, _v27]),
      _v29 = (0, _v1.useCallback)(_v0 => {
        null == _v14 || _v14(_v0), _v6 || _v0.defaultPrevented || _v0.metaKey || !_v4(_v0.nativeEvent) || _v19 || _v9 && " " === _v0.key && (_v0.preventDefault(), _v22(!1), _v0.currentTarget.click());
      }, [_v9, _v19, _v6, _v14]),
      _v30 = (0, _v1.useCallback)(_v0 => {
        0 === _v0.button && (_v22(!1), _v23.remove(document, "mouseup", _v30, !1));
      }, [_v23]),
      _v31 = (0, _v1.useCallback)(_v0 => {
        if (0 === _v0.button) {
          if (_v6) {
            _v0.stopPropagation(), _v0.preventDefault();
            return;
          }
          _v19 || _v22(!0), _v0.currentTarget.focus({
            preventScroll: !0
          }), _v23.add(document, "mouseup", _v30, !1), null == _v10 || _v10(_v0);
        }
      }, [_v6, _v19, _v10, _v23, _v30]),
      _v32 = (0, _v1.useCallback)(_v0 => {
        0 === _v0.button && (_v19 || _v22(!1), null == _v11 || _v11(_v0));
      }, [_v11, _v19]),
      _v33 = (0, _v1.useCallback)(_v0 => {
        _v6 ? _v0.preventDefault() : null == _v16 || _v16(_v0);
      }, [_v6, _v16]),
      _v34 = (0, _v1.useCallback)(_v0 => {
        _v21 && (_v0.preventDefault(), _v22(!1)), null == _v17 || _v17(_v0);
      }, [_v21, _v17]),
      _v35 = (0, _v3.mergeRefs)(_v5, _v0 => {
        _v0 && "BUTTON" !== _v0.tagName && _v20(!1);
      });
    return _v19 ? {
      ..._v18,
      ref: _v35,
      type: "button",
      "aria-disabled": _v25 ? void 0 : _v6,
      disabled: _v25,
      onClick: _v26,
      onMouseDown: _v10,
      onMouseUp: _v11,
      onKeyUp: _v14,
      onKeyDown: _v13,
      onMouseOver: _v16,
      onMouseLeave: _v17
    } : {
      ..._v18,
      ref: _v35,
      role: "button",
      "data-active": (0, _v2.dataAttr)(_v21),
      "aria-disabled": _v6 ? "true" : void 0,
      tabIndex: _v25 ? void 0 : _v24,
      onClick: _v26,
      onMouseDown: _v31,
      onMouseUp: _v32,
      onKeyUp: _v29,
      onKeyDown: _v28,
      onMouseOver: _v33,
      onMouseLeave: _v34
    };
  }], 0);
}