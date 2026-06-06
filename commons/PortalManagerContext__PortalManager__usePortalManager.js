{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    [_v3, _v4] = (0, _v1.createContext)({
      strict: !1,
      name: "PortalManagerContext"
    });
  function _v5(_v0) {
    let {
      children: _v1,
      zIndex: _v2
    } = _v0;
    return (0, _v2.jsx)(_v3, {
      value: {
        zIndex: _v2
      },
      children: _v1
    });
  }
  _v5.displayName = "PortalManager", _v0.s(["PortalManager", 0, _v5, "usePortalManager", 0, _v4], 0);
  var _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    [_v9, _v10] = (0, _v1.createContext)({
      strict: !1,
      name: "PortalContext"
    }),
    _v11 = "chakra-portal",
    _v12 = _v0 => (0, _v2.jsx)("div", {
      className: "chakra-portal-zIndex",
      style: {
        position: "absolute",
        zIndex: _v0.zIndex,
        top: 0,
        left: 0,
        right: 0
      },
      children: _v0.children
    }),
    _v13 = _v0 => {
      let {
          appendToParentPortal: _v1,
          children: _v2
        } = _v0,
        [_v3, _v4] = (0, _v8.useState)(null),
        _v5 = (0, _v8.useRef)(null),
        [, _v6] = (0, _v8.useState)({});
      (0, _v8.useEffect)(() => _v6({}), []);
      let _v7 = _v10(),
        _v8 = _v4();
      (0, _v6.useSafeLayoutEffect)(() => {
        if (!_v3) return;
        let _v0 = _v3.ownerDocument,
          _v1 = _v1 && null != _v7 ? _v7 : _v0.body;
        if (!_v1) return;
        _v5.current = _v0.createElement("div"), _v5.current.className = _v11, _v1.appendChild(_v5.current), _v6({});
        let _v2 = _v5.current;
        return () => {
          _v1.contains(_v2) && _v1.removeChild(_v2);
        };
      }, [_v3]);
      let _v9 = (null == _v8 ? void 0 : _v8.zIndex) ? (0, _v2.jsx)(_v12, {
        zIndex: null == _v8 ? void 0 : _v8.zIndex,
        children: _v2
      }) : _v2;
      return _v5.current ? (0, _v7.createPortal)((0, _v2.jsx)(_v9, {
        value: _v5.current,
        children: _v9
      }), _v5.current) : (0, _v2.jsx)("span", {
        ref: _v0 => {
          _v0 && _v4(_v0);
        }
      });
    },
    _v14 = _v0 => {
      let {
          children: _v1,
          containerRef: _v2,
          appendToParentPortal: _v3
        } = _v0,
        _v4 = _v2.current,
        _v5 = null != _v4 ? _v4 : "u" > typeof window ? document.body : void 0,
        _v6 = (0, _v8.useMemo)(() => {
          let _v0 = null == _v4 ? void 0 : _v4.ownerDocument.createElement("div");
          return _v0 && (_v0.className = _v11), _v0;
        }, [_v4]),
        [, _v7] = (0, _v8.useState)({});
      return ((0, _v6.useSafeLayoutEffect)(() => _v7({}), []), (0, _v6.useSafeLayoutEffect)(() => {
        if (_v6 && _v5) return _v5.appendChild(_v6), () => {
          _v5.removeChild(_v6);
        };
      }, [_v6, _v5]), _v5 && _v6) ? (0, _v7.createPortal)((0, _v2.jsx)(_v9, {
        value: _v3 ? _v6 : null,
        children: _v1
      }), _v6) : null;
    };
  function _v15(_v0) {
    let {
      containerRef: _v1,
      ..._v2
    } = {
      appendToParentPortal: !0,
      ..._v0
    };
    return _v1 ? (0, _v2.jsx)(_v14, {
      containerRef: _v1,
      ..._v2
    }) : (0, _v2.jsx)(_v13, {
      ..._v2
    });
  }
  _v15.className = _v11, _v15.selector = ".chakra-portal", _v15.displayName = "Portal", _v0.s(["Portal", 0, _v15], 0);
}