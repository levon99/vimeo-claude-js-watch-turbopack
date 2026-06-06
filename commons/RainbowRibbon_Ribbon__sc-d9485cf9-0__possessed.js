{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = _v4.keyframes`
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
`,
    _v6 = _v4.default.div.withConfig({
      displayName: "RainbowRibbon__Ribbon",
      componentId: "sc-d9485cf9-0"
    })`
  width: 100%;
  height: ${function ({
      ribbonType: _v0
    }) {
      switch (_v0) {
        case "mod":
        case "possessed":
          return (0, _v2.rem)(6);
        default:
          return (0, _v2.rem)(3);
      }
    }};
  ${function ({
      ribbonType: _v0
    }) {
      switch (_v0) {
        case "mod":
          return _v4.css`
        background-image: linear-gradient(270deg, #dce35b, #45b649);
        background-size: 200%;
        animation: ${_v5} 5s linear infinite;
      `;
        case "possessed":
          return _v4.css`
        background: linear-gradient(to right, #7b4397, #dc2430);
        background-size: 200%;
        animation: ${_v5} 5s linear infinite;
      `;
        default:
          return _v4.css`
        background-image: linear-gradient(
          to right,
          #73d2f6,
          #0088cc 22%,
          #7fc400 36%,
          #ffd583 48%,
          #ffb21e 63%,
          #ff4d4d 76%,
          #503873
        );
      `;
      }
    }};
`;
  _v0.s(["default", 0, function ({
    ribbonType: _v0
  }) {
    let [_v1, _v2] = (0, _v3.useState)(!0);
    return (0, _v3.useEffect)(() => {
      ("mod" === _v0 || "possessed" === _v0) && _v2(!1);
    }), _v1 ? (0, _v1.jsx)(_v6, {
      ribbonType: "rainbow"
    }) : (0, _v1.jsx)(_v6, {
      ribbonType: _v0
    });
  }]);
}