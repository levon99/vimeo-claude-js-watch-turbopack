{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0 => (0, _v2.jsx)(_v1.chakra.div, {
      className: "chakra-stack__item",
      ..._v0,
      __css: {
        display: "inline-block",
        flex: "0 0 auto",
        minWidth: 0,
        ..._v0.__css
      }
    });
  _v3.displayName = "StackItem";
  var _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = (0, _v7.forwardRef)((_v0, _v1) => {
      let {
          isInline: _v2,
          direction: _v3,
          align: _v4,
          justify: _v5,
          spacing: _v6 = "0.5rem",
          wrap: _v7,
          children: _v8,
          divider: _v9,
          className: _v10,
          shouldWrapChildren: _v11,
          ..._v12
        } = _v0,
        _v13 = _v2 ? "row" : null != _v3 ? _v3 : "column",
        _v14 = (0, _v8.useMemo)(() => function (_v0) {
          let {
              spacing: _v1,
              direction: _v2
            } = _v0,
            _v3 = {
              column: {
                my: _v1,
                mx: 0,
                borderLeftWidth: 0,
                borderBottomWidth: "1px"
              },
              "column-reverse": {
                my: _v1,
                mx: 0,
                borderLeftWidth: 0,
                borderBottomWidth: "1px"
              },
              row: {
                mx: _v1,
                my: 0,
                borderLeftWidth: "1px",
                borderBottomWidth: 0
              },
              "row-reverse": {
                mx: _v1,
                my: 0,
                borderLeftWidth: "1px",
                borderBottomWidth: 0
              }
            };
          return {
            "&": (0, _v4.mapResponsive)(_v2, _v0 => _v3[_v0])
          };
        }({
          spacing: _v6,
          direction: _v13
        }), [_v6, _v13]),
        _v15 = !!_v9,
        _v16 = !_v11 && !_v15,
        _v17 = (0, _v8.useMemo)(() => {
          let _v0 = (0, _v5.getValidChildren)(_v8);
          return _v16 ? _v0 : _v0.map((_v0, _v1) => {
            let _v2 = void 0 !== _v0.key ? _v0.key : _v1,
              _v3 = _v1 + 1 === _v0.length,
              _v4 = (0, _v2.jsx)(_v3, {
                children: _v0
              }, _v2),
              _v5 = _v11 ? _v4 : _v0;
            if (!_v15) return _v5;
            let _v6 = (0, _v8.cloneElement)(_v9, {
              __css: _v14
            });
            return (0, _v2.jsxs)(_v8.Fragment, {
              children: [_v5, _v3 ? null : _v6]
            }, _v2);
          });
        }, [_v9, _v14, _v15, _v16, _v11, _v8]),
        _v18 = (0, _v6.cx)("chakra-stack", _v10);
      return (0, _v2.jsx)(_v1.chakra.div, {
        ref: _v1,
        display: "flex",
        alignItems: _v4,
        justifyContent: _v5,
        flexDirection: _v13,
        flexWrap: _v7,
        gap: _v15 ? void 0 : _v6,
        className: _v18,
        ..._v12,
        children: _v17
      });
    });
  _v9.displayName = "Stack", _v0.s(["Stack", 0, _v9], 0);
}