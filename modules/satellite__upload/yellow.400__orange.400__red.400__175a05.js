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
    _v9 = _v0.i(0);
  let _v10 = ["yellow.400", "orange.400", "red.400", "purple.400", "blue.400", "green.400", "yellow.500", "orange.500", "red.500", "purple.500", "blue.500", "green.500", "yellow.600", "orange.600", "red.600", "purple.600", "blue.600", "green.600"],
    _v11 = ({
      label: _v0,
      src: _v1,
      ..._v2
    }) => {
      let _v3 = function (_v0) {
          let _v1 = 0;
          if (0 === _v0.length) return _v1;
          for (let _v0 = 0; _v0 < _v0.length; _v0++) _v1 = (_v1 << 5) - _v1 + _v0.charCodeAt(_v0) | 0;
          return Math.abs(_v1);
        }(_v0) % _v10.length,
        _v4 = _v10[_v3];
      return (0, _v1.jsx)(_v9.Image, {
        alt: "Team/workspace logo",
        border: "0.5px solid",
        borderColor: "blackAlpha.200",
        borderRadius: "input-xs",
        boxSize: "xs",
        fallback: (0, _v1.jsx)(_v8.Avatar, {
          id: `team-logo-${_v0}`,
          alt: _v0,
          nameProps: {
            name: _v0,
            color: _v4
          },
          shape: "rounded",
          size: "xs"
        }),
        src: _v1,
        ..._v2
      });
    };
  _v0.s(["TeamLogo", 0, _v11], 0), _v0.s(["TeamListDropdownBokeh", 0, ({
    selectedId: _v0,
    items: _v1,
    selectItem: _v2,
    onOpenChange: _v3,
    dropdownWidth: _v4
  }) => {
    let [_v5, _v6] = (0, _v2.useState)(_v0),
      _v7 = _v1.map(_v0 => ({
        label: _v0.title,
        value: _v0.id,
        src: _v0?.imgSrc
      })),
      _v8 = (0, _v2.useMemo)(() => _v7.filter(_v0 => _v0.value === _v0)[0], [_v7, _v0]);
    return (0, _v1.jsx)(_v3.Box, {
      width: (0, _v4.rem)(_v4 || 210),
      children: (0, _v1.jsx)(_v5.Select, {
        onValueChange: _v0 => {
          let _v1;
          _v6(_v1 = parseInt(_v0.value[0], 10)), _v2(_v1);
        },
        placeholder: _v8.label,
        leftIcon: (0, _v1.jsx)(_v11, {
          ..._v8
        }),
        size: "md",
        items: _v7,
        loopFocus: !0,
        withPortal: !0,
        onOpenChange: _v3,
        children: _v0 => (0, _v1.jsxs)(_v5.SelectItem, {
          display: "flex",
          justifyContent: "space-between",
          children: [(0, _v1.jsx)(_v5.SelectItemText, {
            children: (0, _v1.jsxs)(_v3.Box, {
              as: "span",
              display: "flex",
              alignItems: "center",
              gap: "md",
              children: [(0, _v1.jsx)(_v11, {
                ..._v0
              }), (0, _v1.jsx)(_v5.SelectItemText, {
                children: (0, _v1.jsx)(_v6.Text, {
                  variant: "body-xl",
                  fontSize: "text-sm",
                  noOfLines: 1,
                  maxWidth: (0, _v4.rem)(112),
                  children: _v0.label
                })
              })]
            })
          }), _v5 === _v0.value && (0, _v1.jsx)(_v7.Checkmark, {
            boxSize: "2xs"
          })]
        })
      })
    });
  }], 0);
}