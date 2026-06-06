{
  "use strict";

  var _v1 = _v0.i(0);
  (0, _v1.keyframes)({
    "0%": {
      strokeDasharray: "1, 400",
      strokeDashoffset: "0"
    },
    "50%": {
      strokeDasharray: "400, 400",
      strokeDashoffset: "-100"
    },
    "100%": {
      strokeDasharray: "400, 400",
      strokeDashoffset: "-260"
    }
  }), (0, _v1.keyframes)({
    "0%": {
      transform: "rotate(0deg)"
    },
    "100%": {
      transform: "rotate(360deg)"
    }
  });
  var _v2 = (0, _v1.keyframes)({
      "0%": {
        left: "-40%"
      },
      "100%": {
        left: "100%"
      }
    }),
    _v3 = (0, _v1.keyframes)({
      from: {
        backgroundPosition: "1rem 0"
      },
      to: {
        backgroundPosition: "0 0"
      }
    }),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    [_v10, _v11] = (0, _v8.createContext)({
      name: "ProgressStylesContext",
      errorMessage: "useProgressStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Progress />\" "
    }),
    _v12 = (0, _v7.forwardRef)((_v0, _v1) => {
      let {
          min: _v2,
          max: _v3,
          value: _v4,
          isIndeterminate: _v5,
          role: _v6,
          ..._v7
        } = _v0,
        _v8 = function (_v0) {
          let {
              value: _v1 = 0,
              min: _v2,
              max: _v3,
              valueText: _v4,
              getValueText: _v5,
              isIndeterminate: _v6,
              role: _v7 = "progressbar"
            } = _v0,
            _v8 = (_v1 - _v2) * 100 / (_v3 - _v2);
          return {
            bind: {
              "data-indeterminate": _v6 ? "" : void 0,
              "aria-valuemax": _v3,
              "aria-valuemin": _v2,
              "aria-valuenow": _v6 ? void 0 : _v1,
              "aria-valuetext": (() => {
                if (null != _v1) return "function" == typeof _v5 ? _v5(_v1, _v8) : _v4;
              })(),
              role: _v7
            },
            percent: _v8,
            value: _v1
          };
        }({
          value: _v4,
          min: _v2,
          max: _v3,
          isIndeterminate: _v5,
          role: _v6
        }),
        _v9 = {
          height: "100%",
          ..._v11().filledTrack
        };
      return (0, _v9.jsx)(_v4.chakra.div, {
        ref: _v1,
        style: {
          width: `${_v8.percent}%`,
          ..._v7.style
        },
        ..._v8.bind,
        ..._v7,
        __css: _v9
      });
    }),
    _v13 = (0, _v7.forwardRef)((_v0, _v1) => {
      var _v2;
      let {
          value: _v3,
          min: _v4 = 0,
          max: _v5 = 100,
          hasStripe: _v6,
          isAnimated: _v7,
          children: _v8,
          borderRadius: _v9,
          isIndeterminate: _v10,
          "aria-label": _v11,
          "aria-labelledby": _v12,
          "aria-valuetext": _v13,
          title: _v14,
          role: _v15,
          ..._v16
        } = (0, _v5.omitThemingProps)(_v0),
        _v17 = (0, _v6.useMultiStyleConfig)("Progress", _v0),
        _v18 = null != _v9 ? _v9 : null == (_v2 = _v17.track) ? void 0 : _v2.borderRadius,
        _v19 = {
          animation: `${_v3} 1s linear infinite`
        },
        _v20 = {
          ...(!_v10 && _v6 && _v7 && _v19),
          ...(_v10 && {
            position: "absolute",
            willChange: "left",
            minWidth: "50%",
            animation: `${_v2} 1s ease infinite normal none running`
          })
        },
        _v21 = {
          overflow: "hidden",
          position: "relative",
          ..._v17.track
        };
      return (0, _v9.jsx)(_v4.chakra.div, {
        ref: _v1,
        borderRadius: _v18,
        __css: _v21,
        ..._v16,
        children: (0, _v9.jsxs)(_v10, {
          value: _v17,
          children: [(0, _v9.jsx)(_v12, {
            "aria-label": _v11,
            "aria-labelledby": _v12,
            "aria-valuetext": _v13,
            min: _v4,
            max: _v5,
            value: _v3,
            isIndeterminate: _v10,
            css: _v20,
            borderRadius: _v18,
            title: _v14,
            role: _v15
          }), _v8]
        })
      });
    });
  _v13.displayName = "Progress", _v0.s(["Progress", 0, _v13, "useProgressStyles", 0, _v11], 0);
}