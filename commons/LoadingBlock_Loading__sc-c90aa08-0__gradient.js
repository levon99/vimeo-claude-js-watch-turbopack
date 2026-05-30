{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = _v3.keyframes`
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
`,
    _v6 = _v4.bokehTheme.colors.gray["50"],
    _v7 = `linear-gradient(
  90deg,
    ${_v6} 10%,
    ${_v4.bokehTheme.colors.white} 50%,
    ${_v6} 90%
)`,
    _v8 = _v4.bokehTheme.colors.gray["800"],
    _v9 = `linear-gradient(
  90deg,
  ${_v8} 10%,
  ${_v4.bokehTheme.colors.gray["700"]} 50%,
  ${_v8} 90%
)`,
    _v10 = _v3.default.div.withConfig({
      displayName: "LoadingBlock__Loading",
      componentId: "sc-c90aa08-0"
    })`
  &::before {
    content: '';
    position: absolute;
    // Why 151%? Fixes a bug with the dark theme loader where a 1px wide white line
    // could _sometimes_ be seen on _some_ screens. The pixels contain mysteries.
    width: 151%;
    height: 100%;
    background: ${({
      theme: _v0,
      variant: _v1
    }) => "gradient" === _v1 ? "light" === _v0.name ? _v7 : _v9 : "light" === _v0.name ? _v6 : _v8};

    ${({
      variant: _v0,
      speed: _v1
    }) => {
      let _v2 = Math.floor(0 * _v1) + "ms";
      return "gradient" === _v0 && _v3.css`
          animation: ${_v5} ${_v2} cubic-bezier(0.05, 0.13, 0.67, 0.38) infinite;
        `;
    }}
  }

  position: relative;
  width: 100%;
  height: 100%;
  border-radius: ${(0, _v2.rem)(8)};
  overflow: hidden;
  background: ${({
      theme: _v0
    }) => "light" === _v0.name ? _v6 : _v8};
`;
  _v0.s(["LoadingBlock", 0, function ({
    variant: _v0 = "gradient",
    speed: _v1 = 1,
    forwardRef: _v2,
    ..._v3
  }) {
    return (0, _v1.jsx)(_v10, {
      variant: _v0,
      speed: _v1,
      ref: _v2,
      ..._v3
    });
  }]);
}