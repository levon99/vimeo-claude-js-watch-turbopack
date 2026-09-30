{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = _v2.default.div.withConfig({
    displayName: "Spacer__SpacerComponent",
    componentId: "sc-21c04049-0"
  })`
  ${({
    direction: _v0,
    size: _v1
  }) => {
    switch (_v0) {
      case "horizontal":
        return _v2.css`
          width: ${_v1 ? "number" == typeof _v1 ? (0, _v3.space)(_v1) : _v1 : 0};
        `;
      case "vertical":
        return _v2.css`
          height: ${_v1 ? "number" == typeof _v1 ? (0, _v3.space)(_v1) : _v1 : 0};
        `;
      default:
        return _v2.css`
          flex-grow: 1;
        `;
    }
  }}
`;
  _v0.s(["Spacer", 0, function ({
    ..._v0
  }) {
    return (0, _v1.jsx)(_v4, {
      ..._v0
    });
  }]);
}