{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  _v0.s(["usePopper", 0, function (_v0 = {}) {
    let {
        enabled: _v1 = !0,
        modifiers: _v2,
        placement: _v3 = "bottom",
        strategy: _v4 = "absolute",
        arrowPadding: _v5 = 8,
        eventListeners: _v6 = !0,
        offset: _v7,
        gutter: _v8 = 8,
        flip: _v9 = !0,
        boundary: _v10 = "clippingParents",
        preventOverflow: _v11 = !0,
        matchWidth: _v12,
        direction: _v13 = "ltr"
      } = _v0,
      _v14 = (0, _v6.useRef)(null),
      _v15 = (0, _v6.useRef)(null),
      _v16 = (0, _v6.useRef)(null),
      _v17 = (0, _v2.getPopperPlacement)(_v3, _v13),
      _v18 = (0, _v6.useRef)(() => {}),
      _v19 = (0, _v6.useCallback)(() => {
        var _v0;
        _v1 && _v14.current && _v15.current && (null == (_v0 = _v18.current) || _v0.call(_v18), _v16.current = (0, _v5.createPopper)(_v14.current, _v15.current, {
          placement: _v17,
          modifiers: [_v1.innerArrow, _v1.positionArrow, _v1.transformOrigin, {
            ..._v1.matchWidth,
            enabled: !!_v12
          }, {
            name: "eventListeners",
            ...(0, _v3.getEventListenerOptions)(_v6)
          }, {
            name: "arrow",
            options: {
              padding: _v5
            }
          }, {
            name: "offset",
            options: {
              offset: null != _v7 ? _v7 : [0, _v8]
            }
          }, {
            name: "flip",
            enabled: !!_v9,
            options: {
              padding: 8
            }
          }, {
            name: "preventOverflow",
            enabled: !!_v11,
            options: {
              boundary: _v10
            }
          }, ...(null != _v2 ? _v2 : [])],
          strategy: _v4
        }), _v16.current.forceUpdate(), _v18.current = _v16.current.destroy);
      }, [_v17, _v1, _v2, _v12, _v6, _v5, _v7, _v8, _v9, _v11, _v10, _v4]);
    (0, _v6.useEffect)(() => () => {
      var _v0;
      _v14.current || _v15.current || (null == (_v0 = _v16.current) || _v0.destroy(), _v16.current = null);
    }, []);
    let _v20 = (0, _v6.useCallback)(_v0 => {
        _v14.current = _v0, _v19();
      }, [_v19]),
      _v21 = (0, _v6.useCallback)((_v0 = {}, _v1 = null) => ({
        ..._v0,
        ref: (0, _v4.mergeRefs)(_v20, _v1)
      }), [_v20]),
      _v22 = (0, _v6.useCallback)(_v0 => {
        _v15.current = _v0, _v19();
      }, [_v19]),
      _v23 = (0, _v6.useCallback)((_v0 = {}, _v1 = null) => ({
        ..._v0,
        ref: (0, _v4.mergeRefs)(_v22, _v1),
        style: {
          ..._v0.style,
          position: _v4,
          minWidth: _v12 ? void 0 : "max-content",
          inset: "0 auto auto 0"
        }
      }), [_v4, _v22, _v12]),
      _v24 = (0, _v6.useCallback)((_v0 = {}, _v1 = null) => {
        let {
          size: _v2,
          shadowColor: _v3,
          bg: _v4,
          style: _v5,
          ..._v6
        } = _v0;
        return {
          ..._v6,
          ref: _v1,
          "data-popper-arrow": "",
          style: function (_v0) {
            let {
                size: _v1,
                shadowColor: _v2,
                bg: _v3,
                style: _v4
              } = _v0,
              _v5 = {
                ..._v4,
                position: "absolute"
              };
            return _v1 && (_v5["--popper-arrow-size"] = _v1), _v2 && (_v5["--popper-arrow-shadow-color"] = _v2), _v3 && (_v5["--popper-arrow-bg"] = _v3), _v5;
          }(_v0)
        };
      }, []),
      _v25 = (0, _v6.useCallback)((_v0 = {}, _v1 = null) => ({
        ..._v0,
        ref: _v1,
        "data-popper-arrow-inner": ""
      }), []);
    return {
      update() {
        var _v0;
        null == (_v0 = _v16.current) || _v0.update();
      },
      forceUpdate() {
        var _v0;
        null == (_v0 = _v16.current) || _v0.forceUpdate();
      },
      transformOrigin: _v3.cssVars.transformOrigin.varRef,
      referenceRef: _v20,
      popperRef: _v22,
      getPopperProps: _v23,
      getArrowProps: _v24,
      getArrowInnerProps: _v25,
      getReferenceProps: _v21
    };
  }]);
}