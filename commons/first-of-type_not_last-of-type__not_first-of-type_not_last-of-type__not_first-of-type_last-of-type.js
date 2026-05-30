{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = {
      horizontal: {
        "> *:first-of-type:not(:last-of-type)": {
          borderEndRadius: 0
        },
        "> *:not(:first-of-type):not(:last-of-type)": {
          borderRadius: 0
        },
        "> *:not(:first-of-type):last-of-type": {
          borderStartRadius: 0
        }
      },
      vertical: {
        "> *:first-of-type:not(:last-of-type)": {
          borderBottomRadius: 0
        },
        "> *:not(:first-of-type):not(:last-of-type)": {
          borderRadius: 0
        },
        "> *:not(:first-of-type):last-of-type": {
          borderTopRadius: 0
        }
      }
    },
    _v8 = {
      horizontal: _v0 => ({
        "& > *:not(style) ~ *:not(style)": {
          marginStart: _v0
        }
      }),
      vertical: _v0 => ({
        "& > *:not(style) ~ *:not(style)": {
          marginTop: _v0
        }
      })
    },
    _v9 = (0, _v3.forwardRef)(function (_v0, _v1) {
      let {
          size: _v2,
          colorScheme: _v3,
          variant: _v4,
          className: _v5,
          spacing: _v6 = "0.5rem",
          isAttached: _v7,
          isDisabled: _v8,
          orientation: _v9 = "horizontal",
          ..._v10
        } = _v0,
        _v11 = (0, _v4.cx)("chakra-button__group", _v5),
        _v12 = (0, _v5.useMemo)(() => ({
          size: _v2,
          colorScheme: _v3,
          variant: _v4,
          isDisabled: _v8
        }), [_v2, _v3, _v4, _v8]),
        _v13 = {
          display: "inline-flex",
          ...(_v7 ? _v7[_v9] : _v8[_v9](_v6))
        },
        _v14 = "vertical" === _v9;
      return (0, _v6.jsx)(_v1.ButtonGroupProvider, {
        value: _v12,
        children: (0, _v6.jsx)(_v2.chakra.div, {
          ref: _v1,
          role: "group",
          __css: _v13,
          className: _v11,
          "data-attached": _v7 ? "" : void 0,
          "data-orientation": _v9,
          flexDir: _v14 ? "column" : void 0,
          ..._v10
        })
      });
    });
  _v9.displayName = "ButtonGroup", _v0.s(["ButtonGroup", 0, _v9]);
}