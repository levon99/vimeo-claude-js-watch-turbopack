{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  function _v4(..._v0) {
    return (0, _v3.useMemo)(() => _v0.every(_v0 => null == _v0) ? null : _v0 => {
      _v0.forEach(_v0 => {
        _v0 && function (_v0, _v1) {
          if (null != _v0) {
            if ("function" == typeof _v0) return _v0(_v1);
            try {
              _v0.current = _v1;
            } catch (_v0) {
              throw Error(`Cannot assign value '${_v1}' to ref '${_v0}'`);
            }
          }
        }(_v0, _v0);
      });
    }, _v0);
  }
  _v0.s(["useMergeRefs", 0, _v4], 0);
  var _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = (0, _v2.forwardRef)(({
    accept: _v0,
    children: _v1,
    disabled: _v2,
    multiple: _v3,
    onChange: _v4,
    onDragEnter: _v5,
    onDragLeave: _v6,
    onDragOver: _v7,
    ..._v8
  }, _v9) => {
    let _v10 = _v4(_v3.default.useRef(null), _v9),
      [_v11, _v12] = (0, _v3.useState)(!1),
      _v13 = (0, _v5.useMultiStyleConfig)("Dropzone");
    return (0, _v1.jsxs)(_v6.chakra.div, {
      ...(_v11 && {
        "data-isdragging": !0
      }),
      onDragEnter: _v5,
      onDragLeave: _v0 => {
        _v0.preventDefault(), _v0.stopPropagation(), _v6?.(_v0), _v12(!1);
      },
      onDragOver: _v0 => {
        _v0.preventDefault(), _v0.stopPropagation(), _v7?.(_v0), _v12(!0);
      },
      onDrop: _v0 => {
        _v0.preventDefault(), _v0.stopPropagation(), _v4 && _v4(_v0), _v12(!1);
      },
      __css: _v13.root,
      ..._v8,
      children: [(0, _v1.jsx)(_v6.chakra.input, {
        __css: _v13.input,
        accept: _v0,
        disabled: _v2,
        multiple: _v3,
        onChange: _v4,
        ref: _v10,
        type: "file"
      }), "function" == typeof _v1 ? _v1(_v11) : _v1]
    });
  });
  _v0.s(["Dropzone", 0, _v7], 0);
}