{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0);
  _v0.s(["ThreeDotsButton", 0, ({
    items: _v0,
    ..._v1
  }) => {
    let _v2 = (0, _v2.useRef)(null),
      _v3 = (0, _v2.useRef)(null),
      [_v4, _v5] = (0, _v2.useState)(!1);
    (0, _v9.useOutsideClick)({
      enabled: _v4,
      ref: _v2,
      handler: _v0 => {
        _v3.current && _v0.target && (_v3.current == _v0.target || _v3.current?.contains(_v0.target)) || _v5(!1);
      }
    });
    let _v6 = _v0.map(_v0 => "button" === _v0.type ? (0, _v1.jsx)(_v7.MenuItem, {
      id: _v0.id,
      onClick: () => {
        _v5(!1), _v0.callback();
      },
      children: _v0.content
    }, _v0.idKey) : (0, _v1.jsx)(_v6.MenuDivider, {
      id: _v0.id,
      my: "50"
    }, _v0.idKey));
    return (0, _v1.jsxs)(_v4.Menu, {
      isOpen: _v4,
      placement: "bottom-end",
      children: [(0, _v1.jsx)(_v5.MenuButton, {
        as: _v3.IconButton,
        ref: _v3,
        icon: (0, _v1.jsx)(_v10.EllipsisV, {
          boxSize: "2xs"
        }),
        variant: "tertiary",
        borderRadius: "md",
        size: "md",
        onClick: () => _v5(!_v4),
        ..._v1
      }), (0, _v1.jsx)(_v8.MenuList, {
        borderRadius: "md",
        py: "75",
        backgroundColor: "surface",
        ref: _v2,
        children: _v6
      })]
    });
  }]);
}