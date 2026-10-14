{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = _v5.createGlobalStyle`
  body {
    overflow: hidden
  }
`,
    _v8 = (0, _v5.default)(_v3.motion.div).withConfig({
      displayName: "BottomDrawer__Screen",
      componentId: "sc-7364571d-0"
    })`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: ${0};
  height: 200%;
`,
    _v9 = (0, _v5.default)(_v3.motion.div).withConfig({
      displayName: "BottomDrawer__Drawer",
      componentId: "sc-7364571d-1"
    })`
  ${_v6.core.edge(400)};
  background-color: ${_v6.core.color.surface(600)};
  border-radius: 8px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  bottom: 0;
  height: ${_v0 => _v0.height ? (0, _v4.rem)(_v0.height) : (0, _v4.rem)(392)};
  left: 0;
  padding: ${_v6.core.space(200)} ${_v6.core.space(300)};
  position: fixed;
  width: 100%;
  z-index: ${0};
`;
  _v0.s(["SlideUpFromBottomDrawer", 0, ({
    active: _v0,
    children: _v1,
    onScreenClick: _v2,
    height: _v3,
    ref: _v4,
    ..._v5
  }) => (0, _v1.jsx)(_v2.AnimatePresence, {
    mode: "wait",
    children: _v0 && (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v7, {}), _v2 && (0, _v1.jsx)(_v8, {
        onClick: _v2,
        initial: {
          opacity: 0
        },
        animate: {
          opacity: 1
        },
        exit: {
          opacity: 0
        },
        transition: {
          type: "keyframes"
        }
      }), (0, _v1.jsx)(_v9, {
        ref: _v4,
        initial: {
          y: "100%"
        },
        animate: {
          y: 0
        },
        exit: {
          y: "100%"
        },
        transition: {
          type: "keyframes"
        },
        height: _v3,
        ..._v5,
        children: _v1
      })]
    })
  })]);
}