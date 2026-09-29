{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["RoleMenuOption", 0, ({
    children: _v0,
    disabled: _v1,
    key: _v2,
    onClick: _v3
  }) => {
    let _v4 = {
        cursor: "pointer",
        background: "stroke"
      },
      _v5 = {
        "&:first-of-type": {
          paddingBottom: (0, _v3.rem)(15)
        },
        "&:last-of-type": {
          paddingTop: (0, _v3.rem)(15)
        },
        [`@media (min-width: ${_v4.BreakPoints.xs}px)`]: {
          minWidth: (0, _v3.rem)(250)
        },
        [`@media (min-width: ${_v4.BreakPoints.xmd}px)`]: {
          maxWidth: (0, _v3.rem)(450)
        },
        [`@media (min-width: ${_v4.BreakPoints.md}px)`]: {
          maxWidth: (0, _v3.rem)(552)
        }
      };
    return (0, _v1.jsx)(_v2.Flex, {
      p: `${(0, _v3.rem)(12)} ${(0, _v3.rem)(15)}`,
      cursor: _v1 ? "auto" : void 0,
      pointerEvents: _v1 ? "none" : void 0,
      alignItems: "center",
      borderRadius: (0, _v3.rem)(2),
      _hover: _v4,
      _active: _v4,
      sx: _v5,
      onClick: _v3,
      children: _v0
    }, _v2);
  }]);
}