{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = (0, _v1.forwardRef)(function (_v0, _v1) {
      let {
        htmlWidth: _v2,
        htmlHeight: _v3,
        alt: _v4,
        ..._v5
      } = _v0;
      return (0, _v2.jsx)("img", {
        width: _v2,
        height: _v3,
        ref: _v1,
        alt: _v4,
        ..._v5
      });
    });
  _v3.displayName = "NativeImage";
  var _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = (0, _v1.forwardRef)(function (_v0, _v1) {
      let _v2,
        {
          fallbackSrc: _v3,
          fallback: _v4,
          src: _v5,
          srcSet: _v6,
          align: _v7,
          fit: _v8,
          loading: _v9,
          ignoreFallback: _v10,
          crossOrigin: _v11,
          fallbackStrategy: _v12 = "beforeLoadOrError",
          referrerPolicy: _v13,
          ..._v14
        } = _v0,
        _v15 = void 0 !== _v3 || void 0 !== _v4,
        _v16 = null != _v9 || _v10 || !_v15,
        _v17 = (_v2 = function (_v0) {
          let {
              loading: _v1,
              src: _v2,
              srcSet: _v3,
              onLoad: _v4,
              onError: _v5,
              crossOrigin: _v6,
              sizes: _v7,
              ignoreFallback: _v8
            } = _v0,
            [_v9, _v10] = (0, _v5.useState)("pending");
          (0, _v5.useEffect)(() => {
            _v10(_v2 ? "loading" : "pending");
          }, [_v2]);
          let _v11 = (0, _v5.useRef)(),
            _v12 = (0, _v5.useCallback)(() => {
              if (!_v2) return;
              _v13();
              let _v0 = new Image();
              _v0.src = _v2, _v6 && (_v0.crossOrigin = _v6), _v3 && (_v0.srcset = _v3), _v7 && (_v0.sizes = _v7), _v1 && (_v0.loading = _v1), _v0.onload = _v0 => {
                _v13(), _v10("loaded"), null == _v4 || _v4(_v0);
              }, _v0.onerror = _v0 => {
                _v13(), _v10("failed"), null == _v5 || _v5(_v0);
              }, _v11.current = _v0;
            }, [_v2, _v6, _v3, _v7, _v4, _v5, _v1]),
            _v13 = () => {
              _v11.current && (_v11.current.onload = null, _v11.current.onerror = null, _v11.current = null);
            };
          return (0, _v4.useSafeLayoutEffect)(() => {
            if (!_v8) return "loading" === _v9 && _v12(), () => {
              _v13();
            };
          }, [_v9, _v12, _v8]), _v8 ? "loaded" : _v9;
        }({
          ..._v0,
          crossOrigin: _v11,
          ignoreFallback: _v16
        }), "loaded" !== _v2 && "beforeLoadOrError" === _v12 || "failed" === _v2 && "onError" === _v12),
        _v18 = {
          ref: _v1,
          objectFit: _v8,
          objectPosition: _v7,
          ...(_v16 ? _v14 : function (_v0, _v1 = []) {
            let _v2 = Object.assign({}, _v0);
            for (let _v0 of _v1) _v0 in _v2 && delete _v2[_v0];
            return _v2;
          }(_v14, ["onError", "onLoad"]))
        };
      return _v17 ? _v4 || (0, _v2.jsx)(_v6.chakra.img, {
        as: _v3,
        className: "chakra-image__placeholder",
        src: _v3,
        ..._v18
      }) : (0, _v2.jsx)(_v6.chakra.img, {
        as: _v3,
        src: _v5,
        srcSet: _v6,
        crossOrigin: _v11,
        loading: _v9,
        referrerPolicy: _v13,
        className: "chakra-image",
        ..._v18
      });
    });
  _v7.displayName = "Image", _v0.s(["Image", 0, _v7], 0);
}