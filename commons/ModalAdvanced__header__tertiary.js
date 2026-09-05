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
    _v9 = _v0.i(0);
  let _v10 = 900,
    _v11 = (0, _v2.forwardRef)(({
      children: _v0,
      width: _v1 = _v10,
      ..._v2
    }, _v3) => {
      let _v4 = (0, _v3.useMultiStyleConfig)("ModalAdvanced", _v2),
        _v5 = "number" == typeof _v1 ? `${Math.min(Math.max(_v1, 560), _v10)}px` : _v1;
      return (0, _v1.jsx)(_v9.ModalContent, {
        ref: _v3,
        __css: _v4.dialog,
        w: _v5,
        maxW: _v5,
        ..._v2,
        children: _v0
      });
    }),
    _v12 = (0, _v2.forwardRef)(({
      title: _v0,
      description: _v1,
      ..._v2
    }, _v3) => {
      let _v4 = (0, _v3.useMultiStyleConfig)("ModalAdvanced", _v2),
        {
          headerId: _v5,
          bodyId: _v6,
          setHeaderMounted: _v7,
          setBodyMounted: _v8
        } = (0, _v4.useModalContext)();
      return (0, _v7.useEffect)(() => (_v7(!0), () => _v7(!1)), [_v7]), (0, _v7.useEffect)(() => {
        if (_v1) return _v8(!0), () => _v8(!1);
      }, [_v1, _v8]), (0, _v1.jsxs)(_v5.Box, {
        as: "header",
        ref: _v3,
        __css: _v4.header,
        ..._v2,
        children: [(0, _v1.jsx)(_v5.Box, {
          as: "h2",
          id: _v5,
          __css: _v4.title,
          children: _v0
        }), _v1 ? (0, _v1.jsx)(_v5.Box, {
          id: _v6,
          __css: _v4.description,
          children: _v1
        }) : null]
      });
    }),
    _v13 = (0, _v2.forwardRef)(({
      children: _v0,
      ..._v1
    }, _v2) => {
      let _v3 = (0, _v3.useMultiStyleConfig)("ModalAdvanced", _v1);
      return (0, _v1.jsx)(_v5.Box, {
        ref: _v2,
        __css: _v3.body,
        ..._v1,
        children: _v0
      });
    }),
    _v14 = (0, _v2.forwardRef)(({
      children: _v0,
      ..._v1
    }, _v2) => {
      let _v3 = (0, _v3.useMultiStyleConfig)("ModalAdvanced", _v1);
      return (0, _v1.jsx)(_v5.Box, {
        as: "nav",
        ref: _v2,
        __css: _v3.sidebar,
        ..._v1,
        children: _v0
      });
    }),
    _v15 = (0, _v2.forwardRef)(({
      children: _v0,
      isActive: _v1 = !1,
      ..._v2
    }, _v3) => {
      let _v4 = (0, _v3.useMultiStyleConfig)("ModalAdvanced", _v2);
      return (0, _v1.jsx)(_v6.Button, {
        ref: _v3,
        variant: "tertiary",
        size: "sm",
        "aria-current": _v1 ? "true" : void 0,
        bgColor: _v1 ? "button-tertiary-hover" : void 0,
        sx: _v4.sidebarItem,
        ..._v2,
        children: _v0
      });
    }),
    _v16 = (0, _v2.forwardRef)(({
      children: _v0,
      ..._v1
    }, _v2) => {
      let _v3 = (0, _v3.useMultiStyleConfig)("ModalAdvanced", _v1);
      return (0, _v1.jsx)(_v5.Box, {
        ref: _v2,
        __css: _v3.panel,
        ..._v1,
        children: _v0
      });
    });
  _v0.s(["MODAL_ADVANCED_MAX_WIDTH", 0, _v10, "MODAL_ADVANCED_MIN_WIDTH", 0, 560, "ModalAdvanced", 0, ({
    children: _v0,
    isCentered: _v1 = !0,
    scrollBehavior: _v2 = "inside",
    ..._v3
  }) => (0, _v1.jsx)(_v8.Modal, {
    isCentered: _v1,
    scrollBehavior: _v2,
    ..._v3,
    children: _v0
  }), "ModalAdvancedBody", 0, _v13, "ModalAdvancedContent", 0, _v11, "ModalAdvancedHeader", 0, _v12, "ModalAdvancedPanel", 0, _v16, "ModalAdvancedSidebar", 0, _v14, "ModalAdvancedSidebarItem", 0, _v15]);
}