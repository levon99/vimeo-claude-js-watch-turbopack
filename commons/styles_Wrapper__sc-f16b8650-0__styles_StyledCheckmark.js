{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = `${(0, _v1.em)(750)}`,
    _v6 = _v2.default.ul.withConfig({
      displayName: "styles__Wrapper",
      componentId: "sc-f16b8650-0"
    })`
  padding-left: 0;
  margin: 0;
`,
    _v7 = _v3.bokehTheme.colors.gray["400"],
    _v8 = _v3.bokehTheme.colors.gray["200"],
    _v9 = (0, _v2.default)(_v4.Checkmark).withConfig({
      displayName: "styles__StyledCheckmark",
      componentId: "sc-f16b8650-1"
    })`
  path {
    fill: #b3bfc8;
  }
  width: 24px;
  height: 24px;
  position: absolute;
  top: -3px;
`,
    _v10 = _v2.default.div.withConfig({
      displayName: "styles__ItemTextWrapper",
      componentId: "sc-f16b8650-2"
    })``,
    _v11 = _v2.default.li.withConfig({
      displayName: "styles__Item",
      componentId: "sc-f16b8650-3"
    })`
  ${_v0 => _v0.isBottomPositioned ? "position: absolute; bottom: 0;" : "position: relative;"}
  margin-bottom: ${_v0 => _v0.isSplit ? "30px" : "8px"};
  margin-left: ${_v0 => "none" === _v0.decoration ? "0" : "12px"};
  font-size: 14px;
  color: ${_v0 => _v0.theme.content.color};
  line-height: 18px;
  list-style: none;
  display: ${_v0 => _v0.hideIfMobile ? "none" : null};
  ${_v0 => _v0.isWindows ? _v0.bold ? "font-family: Arial; white-space: nowrap; font-weight: bold;" : "font-family: Arial" : _v0.bold && !_v0.isWindows ? "white-space: nowrap; font-family: Arial, system-ui, sans-serif;" : null};
  @media (min-width: ${_v5}) {
    display: block;
  }

  ${_v10} {
    margin-left: ${_v0 => "checkmarks" === _v0.decoration ? "36px" : "0"};
  }

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: '';
    display: ${_v0 => "bullets" === _v0.decoration ? "block" : "none"};
    width: 5px;
    height: 5px;
    position: absolute;
    left: -12px;
    top: 7px;
    background-color: ${_v0 => _v0.isHighlighted ? `${_v7}` : `${_v8}`};
    border-radius: 50%;
  }
`;
  _v0.s(["Item", 0, _v11, "ItemTextWrapper", 0, _v10, "StyledCheckmark", 0, _v9, "TABLET", 0, _v5, "Wrapper", 0, _v6]);
}