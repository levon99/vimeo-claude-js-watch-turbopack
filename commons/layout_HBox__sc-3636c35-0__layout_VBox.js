{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = _v1.default.div.withConfig({
      displayName: "layout__HBox",
      componentId: "sc-3636c35-0"
    })`
  display: flex;
  align-items: ${_v0 => _v0.align};
  flex-wrap: ${_v0 => _v0.wrap};
  flex: ${_v0 => _v0.flex || 0};
  justify-content: ${_v0 => _v0.justify};
`,
    _v3 = _v1.default.div.withConfig({
      displayName: "layout__VBox",
      componentId: "sc-3636c35-1"
    })`
  display: flex;
  flex-direction: column;
  flex: ${_v0 => _v0.flex};
  align-items: ${_v0 => _v0.align};
  flex-wrap: ${_v0 => _v0.wrap};
  justify-content: ${_v0 => _v0.justify};
`;
  _v1.default.div.withConfig({
    displayName: "layout__Box",
    componentId: "sc-3636c35-2"
  })`
  flex: ${_v0 => _v0.flex};
  padding: ${_v0 => _v0.padding};
`;
  let _v4 = _v1.default.div.withConfig({
      displayName: "layout__CenterAbsoluteChild",
      componentId: "sc-3636c35-3"
    })`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
`,
    _v5 = _v1.default.div.withConfig({
      displayName: "layout__Position",
      componentId: "sc-3636c35-4"
    })`
  position: ${_v0 => _v0.relativity};
  top: ${_v0 => _v0.top};
  left: ${_v0 => _v0.left};
  right: ${_v0 => _v0.right};
  bottom: ${_v0 => _v0.bottom};
  z-index: ${_v0 => _v0.zIndex};
`;
  _v1.default.div.withConfig({
    displayName: "layout__PositionCenter",
    componentId: "sc-3636c35-5"
  })`
  position: ${_v0 => _v0.relativity};
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
`, _v1.default.div.withConfig({
    displayName: "layout__Container",
    componentId: "sc-3636c35-6"
  })`
  max-width: ${_v0 => _v0.maxWidth || "1600px"};
  padding: ${_v0 => _v0.padding};
  width: 100%;
  height: 100%;
  margin: 0 auto;
`, _v0.s(["CenterAbsoluteChild", 0, _v4, "HBox", 0, _v2, "Position", 0, _v5, "VBox", 0, _v3]);
}