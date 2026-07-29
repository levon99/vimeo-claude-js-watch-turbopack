{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = _v3.keyframes`
  0%, 100% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--vimeo-colors-fill-brand) 60%, transparent); }
  50% { box-shadow: 0 0 0 5px color-mix(in srgb, var(--vimeo-colors-fill-brand) 0%, transparent); }
`;
  _v0.s(["NewFeatureDot", 0, _v0 => (0, _v1.jsx)(_v2.Box, {
    w: (0, _v4.rem)(8),
    h: (0, _v4.rem)(8),
    borderRadius: "full",
    bg: "fill-brand",
    flexShrink: 0,
    pointerEvents: "none",
    animation: `${_v5} 1.5s ease-in-out infinite`,
    ..._v0
  })]);
}