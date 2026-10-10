{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = (_v0, _v1) => `calc(${_v0}px + (${_v1 - _v0}) * ((100vw - 375px) / (1545)))`;
  _v0.s(["addTypography", 0, (_v0, _v1) => _v1.css`
  font-weight: normal;
  line-height: 1.2;
  font-size: ${_v0}px;
  word-break: break-word;
  @media screen and (width > ${_v2.breakPoints.tablet}) {
    font-size: ${_v3(_v0, _v1)};
  }
  @media screen and (min-width: ${_v2.breakPoints.desktopLarge}) {
    font-size: ${_v1}px;
  }
`, "addWidth", 0, (_v0, _v1) => _v1.css`
  width: ${_v0}px;
  @media screen and (min-width: ${_v2.breakPoints.mobileEx}) {
    width: ${_v3(_v0, _v1)};
  }
  @media screen and (min-width: ${_v2.breakPoints.desktopLarge}) {
    width: ${_v1}px;
  }
`]);
}