{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = ["yellow.400", "orange.400", "red.400", "purple.400", "blue.400", "green.400", "yellow.500", "orange.500", "red.500", "purple.500", "blue.500", "green.500", "yellow.600", "orange.600", "red.600", "purple.600", "blue.600", "green.600"];
  _v0.s(["WorkspaceLogo", 0, ({
    fallbackAvatarSize: _v0,
    label: _v1,
    logoUrl: _v2,
    ..._v3
  }) => {
    let _v4 = function (_v0) {
        let _v1 = 0;
        if (0 === _v0.length) return _v1;
        for (let _v0 = 0; _v0 < _v0.length; _v0++) _v1 = (_v1 << 5) - _v1 + _v0.charCodeAt(_v0) | 0;
        return Math.abs(_v1);
      }(_v1) % _v4.length,
      _v5 = _v4[_v4];
    return (0, _v1.jsx)(_v3.Image, {
      alt: _v1,
      border: "0.5px solid",
      borderColor: "blackAlpha.200",
      borderRadius: "input-xs",
      boxSize: "xs",
      fallback: (0, _v1.jsx)(_v2.Avatar, {
        alt: _v1,
        nameProps: {
          name: _v1,
          color: _v5
        },
        shape: "rounded",
        size: _v0 ?? "xs"
      }),
      src: _v2,
      ..._v3
    });
  }]);
}