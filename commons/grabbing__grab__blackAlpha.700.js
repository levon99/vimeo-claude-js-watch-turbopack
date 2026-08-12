{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  let _v8 = (0, _v4.forwardRef)(({
    zoomRatio: _v0,
    image: _v1,
    imageCropCircleDiameter: _v2,
    windowWidth: _v3
  }, _v4) => {
    let _v5 = (0, _v4.useRef)(null),
      _v6 = (0, _v4.useRef)(null),
      _v7 = (0, _v4.useRef)(null),
      [_v8, _v9] = (0, _v4.useState)(!0),
      _v10 = (0, _v4.useRef)(null),
      [_v11, _v12] = (0, _v4.useState)({
        top: 0,
        left: 0
      }),
      [{
        pos: _v13
      }, _v14] = (0, _v3.useSpring)(() => ({
        from: {
          pos: [0, 0]
        }
      })),
      [_v15, _v16] = (0, _v4.useState)(!1),
      _v17 = (0, _v4.useCallback)(_v0 => {
        if (null !== _v0) {
          let {
            offsetWidth: _v0,
            offsetHeight: _v1
          } = _v0;
          _v14({
            pos: [-(_v0 * _v1.naturalWidth - _v0) / 2, -(_v0 * _v1.naturalHeight - _v1) / 2],
            immediate: !0
          }), _v12({
            left: (_v0 - _v2) / 2,
            top: (_v1 - _v2) / 2
          });
        }
      }, [_v3, _v1, _v2]);
    (0, _v4.useImperativeHandle)(_v4, () => ({
      calculateCropSize() {
        let _v0 = _v7.current,
          _v1 = _v5.current;
        if (_v0 && _v1) {
          let {
              top: _v0,
              left: _v1
            } = _v0.getBoundingClientRect(),
            {
              top: _v2,
              left: _v3
            } = _v1.getBoundingClientRect(),
            _v4 = Math.max(Math.round((_v1 - _v3) / _v0), 0),
            _v5 = Math.max(Math.round((_v0 - _v2) / _v0), 0),
            _v6 = _v2 / _v0,
            _v7 = Math.min(Math.round(_v4 + _v6), _v1.naturalWidth),
            _v8 = Math.min(Math.round(_v5 + _v6), _v1.naturalHeight);
          return {
            xMin: _v4,
            yMin: _v5,
            xMax: _v7,
            yMax: _v8
          };
        }
      }
    }));
    let _v18 = _v0 => {
        let [_v1, _v2] = _v0,
          {
            offsetWidth: _v3,
            offsetHeight: _v4
          } = _v5.current || {
            offsetWidth: 0,
            offsetHeight: 0
          },
          _v5 = _v11.left + _v2 - _v3,
          _v6 = _v11.top + _v2 - _v4;
        return _v1 > _v11.left ? _v1 = _v11.left : _v1 < _v5 && (_v1 = _v5), _v2 > _v11.top ? _v2 = _v11.top : _v2 < _v6 && (_v2 = _v6), [_v1, _v2];
      },
      _v19 = (0, _v5.useDrag)(({
        down: _v0,
        active: _v1,
        movement: _v2,
        memo: _v3 = _v13.get()
      }) => {
        let _v4 = (0, _v5.addV)(_v2, _v3);
        return _v16(_v0), _v14({
          pos: _v18(_v4),
          immediate: _v1
        }), _v3;
      });
    (0, _v4.useEffect)(() => {
      let {
          naturalWidth: _v0,
          naturalHeight: _v1
        } = _v1,
        _v2 = _v0 * _v0,
        _v3 = _v1 * _v0,
        [_v4, _v5] = _v13.get();
      if (_v2 >= _v2 && _v3 >= _v2 && _v5.current && _v6.current) {
        let _v0 = (_v5.current.width - _v2) / 2 + _v4,
          _v1 = (_v5.current.height - _v3) / 2 + _v5;
        _v5.current.height = _v6.current.height = _v3, _v5.current.width = _v6.current.width = _v2, _v8 ? _v9(!1) : _v14({
          pos: _v18([_v0, _v1]),
          immediate: !0
        });
      }
    }, [_v0, _v3]);
    let _v20 = (_v0, _v1 = {
      top: 0,
      left: 0
    }) => {
      let _v2 = _v2.animated.div;
      return (0, _v1.jsx)(_v2, {
        ..._v19(),
        ref: _v10,
        style: {
          cursor: _v15 ? "grabbing" : "grab",
          transform: _v13.to((_v0, _v1) => `translate3d(${_v0 - _v1.left}px, ${_v1 - _v1.top}px, 0px)`)
        },
        children: (0, _v1.jsx)("img", {
          src: _v1.src,
          ref: _v0,
          alt: _v1.name,
          draggable: !1,
          onDragStart: _v0 => {
            _v0.preventDefault();
          }
        })
      });
    };
    return (0, _v1.jsxs)(_v6.Box, {
      ref: _v17,
      bg: "blackAlpha.700",
      overflow: "hidden",
      position: "relative",
      h: {
        base: (0, _v7.rem)(255),
        md: (0, _v7.rem)(284)
      },
      children: [(0, _v1.jsx)(_v6.Box, {
        ref: _v7,
        position: "absolute",
        h: (0, _v7.rem)(_v2),
        w: (0, _v7.rem)(_v2),
        borderRadius: "50%",
        overflow: "hidden",
        style: {
          transform: `translate3d(${_v11.left}px, ${_v11.top}px, 0px)`
        },
        children: _v20(_v6, _v11)
      }), (0, _v1.jsx)(_v6.Box, {
        opacity: .5,
        position: "relative",
        userSelect: "none",
        children: _v20(_v5)
      })]
    });
  });
  _v0.s(["ImageCrop", 0, _v8], 0);
  var _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0);
  let _v14 = {
    as: "button",
    type: "button",
    bg: "transparent",
    border: "none",
    p: 0,
    lineHeight: 0,
    cursor: "pointer",
    _hover: {
      bg: "transparent"
    },
    _active: {
      bg: "transparent"
    },
    _focus: {
      boxShadow: "none"
    }
  };
  _v0.s(["ImageCropSlider", 0, function ({
    value: _v0,
    onChange: _v1
  }) {
    let _v2 = _v0 => _v1(Math.max(0, Math.min(100, _v0 + _v0)));
    return (0, _v1.jsxs)(_v9.Flex, {
      align: "center",
      gap: 3,
      px: 6,
      py: 4,
      children: [(0, _v1.jsx)(_v6.Box, {
        ..._v14,
        "aria-label": "Zoom out",
        onClick: () => _v2(-1),
        children: (0, _v1.jsx)(_v12.Minus, {
          boxSize: (0, _v7.rem)(20)
        })
      }), (0, _v1.jsxs)(_v10.Slider, {
        "aria-label": "zoom",
        value: _v0,
        min: 0,
        max: 100,
        step: 1,
        size: "md",
        onChange: _v1,
        flex: "1",
        children: [(0, _v1.jsx)(_v11.SliderTrack, {
          children: (0, _v1.jsx)(_v11.SliderFilledTrack, {})
        }), (0, _v1.jsx)(_v11.SliderThumb, {})]
      }), (0, _v1.jsx)(_v6.Box, {
        ..._v14,
        "aria-label": "Zoom in",
        onClick: () => _v2(1),
        children: (0, _v1.jsx)(_v13.Plus, {
          boxSize: (0, _v7.rem)(20)
        })
      })]
    });
  }], 0);
}