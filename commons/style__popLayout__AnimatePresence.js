{
  "use strict";

  _v0.i(0);
  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v2,
    _v7 = _v0.i(0);
  class _v8 extends _v6.Component {
    getSnapshotBeforeUpdate(_v0) {
      let _v1 = this.props.childRef.current;
      if (_v1 && _v0.isPresent && !this.props.isPresent) {
        let _v0 = this.props.sizeRef.current;
        _v0.height = _v1.offsetHeight || 0, _v0.width = _v1.offsetWidth || 0, _v0.top = _v1.offsetTop, _v0.left = _v1.offsetLeft;
      }
      return null;
    }
    componentDidUpdate() {}
    render() {
      return this.props.children;
    }
  }
  function _v9({
    children: _v0,
    isPresent: _v1
  }) {
    let _v2 = (0, _v6.useId)(),
      _v3 = (0, _v6.useRef)(null),
      _v4 = (0, _v6.useRef)({
        width: 0,
        height: 0,
        top: 0,
        left: 0
      }),
      {
        nonce: _v5
      } = (0, _v6.useContext)(_v7.MotionConfigContext);
    return (0, _v6.useInsertionEffect)(() => {
      let {
        width: _v0,
        height: _v1,
        top: _v2,
        left: _v3
      } = _v4.current;
      if (_v1 || !_v3.current || !_v0 || !_v1) return;
      _v3.current.dataset.motionPopId = _v2;
      let _v4 = document.createElement("style");
      return _v5 && (_v4.nonce = _v5), document.head.appendChild(_v4), _v4.sheet && _v4.sheet.insertRule(`
          [data-motion-pop-id="${_v2}"] {
            position: absolute !important;
            width: ${_v0}px !important;
            height: ${_v1}px !important;
            top: ${_v2}px !important;
            left: ${_v3}px !important;
          }
        `), () => {
        document.head.removeChild(_v4);
      };
    }, [_v1]), (0, _v1.jsx)(_v8, {
      isPresent: _v1,
      childRef: _v3,
      sizeRef: _v4,
      children: _v6.cloneElement(_v0, {
        ref: _v3
      })
    });
  }
  let _v10 = ({
    children: _v0,
    initial: _v1,
    isPresent: _v2,
    onExitComplete: _v3,
    custom: _v4,
    presenceAffectsLayout: _v5,
    mode: _v6
  }) => {
    let _v7 = (0, _v4.useConstant)(_v11),
      _v8 = (0, _v2.useId)(),
      _v9 = (0, _v2.useCallback)(_v0 => {
        for (let _v0 of (_v7.set(_v0, !0), _v7.values())) if (!_v0) return;
        _v3 && _v3();
      }, [_v7, _v3]),
      _v10 = (0, _v2.useMemo)(() => ({
        id: _v8,
        initial: _v1,
        isPresent: _v2,
        custom: _v4,
        onExitComplete: _v9,
        register: _v0 => (_v7.set(_v0, !1), () => _v7.delete(_v0))
      }), _v5 ? [Math.random(), _v9] : [_v2, _v9]);
    return (0, _v2.useMemo)(() => {
      _v7.forEach((_v0, _v1) => _v7.set(_v1, !1));
    }, [_v2]), _v2.useEffect(() => {
      _v2 || _v7.size || !_v3 || _v3();
    }, [_v2]), "popLayout" === _v6 && (_v0 = (0, _v1.jsx)(_v9, {
      isPresent: _v2,
      children: _v0
    })), (0, _v1.jsx)(_v5.PresenceContext.Provider, {
      value: _v10,
      children: _v0
    });
  };
  function _v11() {
    return new Map();
  }
  var _v12 = _v0.i(0);
  let _v13 = _v0 => _v0.key || "";
  function _v14(_v0) {
    let _v1 = [];
    return _v2.Children.forEach(_v0, _v0 => {
      (0, _v2.isValidElement)(_v0) && _v1.push(_v0);
    }), _v1;
  }
  var _v15 = _v0.i(0);
  _v0.s(["AnimatePresence", 0, ({
    children: _v0,
    custom: _v1,
    initial: _v2 = !0,
    onExitComplete: _v3,
    presenceAffectsLayout: _v4 = !0,
    mode: _v5 = "sync",
    propagate: _v6 = !1
  }) => {
    let [_v7, _v8] = (0, _v12.usePresence)(_v6),
      _v9 = (0, _v2.useMemo)(() => _v14(_v0), [_v0]),
      _v10 = _v6 && !_v7 ? [] : _v9.map(_v13),
      _v11 = (0, _v2.useRef)(!0),
      _v12 = (0, _v2.useRef)(_v9),
      _v13 = (0, _v4.useConstant)(() => new Map()),
      [_v14, _v15] = (0, _v2.useState)(_v9),
      [_v16, _v17] = (0, _v2.useState)(_v9);
    (0, _v15.useIsomorphicLayoutEffect)(() => {
      _v11.current = !1, _v12.current = _v9;
      for (let _v0 = 0; _v0 < _v16.length; _v0++) {
        let _v0 = _v13(_v16[_v0]);
        _v10.includes(_v0) ? _v13.delete(_v0) : !0 !== _v13.get(_v0) && _v13.set(_v0, !1);
      }
    }, [_v16, _v10.length, _v10.join("-")]);
    let _v18 = [];
    if (_v9 !== _v14) {
      let _v0 = [..._v9];
      for (let _v0 = 0; _v0 < _v16.length; _v0++) {
        let _v0 = _v16[_v0],
          _v1 = _v13(_v0);
        _v10.includes(_v1) || (_v0.splice(_v0, 0, _v0), _v18.push(_v0));
      }
      "wait" === _v5 && _v18.length && (_v0 = _v18), _v17(_v14(_v0)), _v15(_v9);
      return;
    }
    let {
      forceRender: _v19
    } = (0, _v2.useContext)(_v3.LayoutGroupContext);
    return (0, _v1.jsx)(_v1.Fragment, {
      children: _v16.map(_v0 => {
        let _v1 = _v13(_v0),
          _v2 = (!_v6 || !!_v7) && (_v9 === _v16 || _v10.includes(_v1));
        return (0, _v1.jsx)(_v10, {
          isPresent: _v2,
          initial: (!_v11.current || !!_v2) && void 0,
          custom: _v2 ? void 0 : _v1,
          presenceAffectsLayout: _v4,
          mode: _v5,
          onExitComplete: _v2 ? void 0 : () => {
            if (!_v13.has(_v1)) return;
            _v13.set(_v1, !0);
            let _v0 = !0;
            _v13.forEach(_v0 => {
              _v0 || (_v0 = !1);
            }), _v0 && (null == _v19 || _v19(), _v17(_v12.current), _v6 && (null == _v8 || _v8()), _v3 && _v3());
          },
          children: _v0
        }, _v1);
      })
    });
  }], 0);
}