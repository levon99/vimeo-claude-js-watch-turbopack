{
  "use strict";

  var _v1,
    _v2,
    _v3,
    _v4,
    _v5,
    _v6,
    _v7,
    _v8,
    _v9,
    _v10,
    _v11,
    _v12,
    _v13,
    _v14,
    _v15,
    _v16,
    _v17,
    _v18,
    _v19,
    _v20,
    _v21,
    _v22,
    _v23,
    _v24,
    _v25,
    _v26,
    _v27,
    _v28,
    _v29,
    _v30,
    _v31,
    _v32,
    _v33,
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0);
  function _v39() {
    return (_v39 = Object.assign.bind()).apply(null, arguments);
  }
  let _v40 = function (_v0) {
    return _v35.createElement("svg", _v39({
      width: 116,
      height: 72,
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, _v0), _v1 || (_v1 = _v35.createElement("path", {
      fill: "currentColor",
      fillOpacity: .24,
      d: "M0 0h116v72H0z"
    })));
  };
  var _v41 = _v0.i(0);
  function _v42(_v0, _v1) {
    (0, _v35.useLayoutEffect)(() => {
      if (_v0) {
        let _v0 = new _v41.default(_v1);
        return _v0.observe(_v0), () => _v0.unobserve(_v0);
      }
    }, [_v0, _v1]);
  }
  _v0.s(["useResizeObserver", 0, _v42], 0);
  var _v43 = _v0.i(0),
    _v44 = _v0.i(0);
  function _v45() {
    return (_v45 = Object.assign.bind()).apply(null, arguments);
  }
  function _v46() {
    return (_v46 = Object.assign.bind()).apply(null, arguments);
  }
  function _v47() {
    return (_v47 = Object.assign.bind()).apply(null, arguments);
  }
  function _v48() {
    return (_v48 = Object.assign.bind()).apply(null, arguments);
  }
  function _v49() {
    return (_v49 = Object.assign.bind()).apply(null, arguments);
  }
  function _v50() {
    return (_v50 = Object.assign.bind()).apply(null, arguments);
  }
  function _v51() {
    return (_v51 = Object.assign.bind()).apply(null, arguments);
  }
  function _v52() {
    return (_v52 = Object.assign.bind()).apply(null, arguments);
  }
  function _v53() {
    return (_v53 = Object.assign.bind()).apply(null, arguments);
  }
  function _v54() {
    return (_v54 = Object.assign.bind()).apply(null, arguments);
  }
  function _v55() {
    return (_v55 = Object.assign.bind()).apply(null, arguments);
  }
  function _v56() {
    return (_v56 = Object.assign.bind()).apply(null, arguments);
  }
  function _v57() {
    return (_v57 = Object.assign.bind()).apply(null, arguments);
  }
  function _v58() {
    return (_v58 = Object.assign.bind()).apply(null, arguments);
  }
  function _v59() {
    return (_v59 = Object.assign.bind()).apply(null, arguments);
  }
  function _v60() {
    return (_v60 = Object.assign.bind()).apply(null, arguments);
  }
  let _v61 = {
      id: null,
      icon: (0, _v34.jsx)(function () {
        let [_v0, _v1] = (0, _v35.useState)(null),
          _v2 = (0, _v35.useCallback)(_v0 => {
            _v1(_v0);
          }, []);
        return _v42(_v0, (0, _v35.useCallback)(_v0 => {
          let _v1 = _v0[0].target,
            _v2 = _v1.clientWidth;
          _v1.style.fontSize = `${Math.min(_v2 / 4, 32)}px`;
        }, [])), (0, _v34.jsxs)(_v37.Box, {
          ref: _v2,
          position: "relative",
          width: "100%",
          height: "100%",
          sx: {
            "& > svg": _v44.FULL_WIDTH_ABSOLUTE_STYLE
          },
          children: [(0, _v34.jsx)(_v40, {
            color: "text-primary"
          }), (0, _v34.jsx)(_v38.Flex, {
            justifyContent: "center",
            alignItems: "center",
            padding: `${(0, _v36.rem)(4)} ${(0, _v36.rem)(2)}`,
            sx: _v44.FULL_WIDTH_ABSOLUTE_STYLE,
            children: (0, _v34.jsx)(_v37.Box, {
              color: "white",
              textAlign: "center",
              userSelect: "none",
              children: _v43.T_AUTO
            })
          })]
        });
      }, {}),
      sources: {}
    },
    _v62 = {
      id: "fullScreen",
      icon: (0, _v34.jsx)(_v40, {
        color: "text-primary"
      }),
      sources: {
        0: {
          x: 0,
          y: 0,
          w: 100,
          h: 100
        }
      }
    },
    _v63 = {
      id: "bigScreen",
      icon: (0, _v34.jsx)(function (_v0) {
        return _v35.createElement("svg", _v47({
          width: 116,
          height: 72,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, _v0), _v6 || (_v6 = _v35.createElement("path", {
          fill: "currentColor",
          fillOpacity: .24,
          d: "M0 0h116v72H0z"
        })), _v7 || (_v7 = _v35.createElement("rect", {
          x: 8,
          y: 8,
          width: 100,
          height: 56,
          rx: 6,
          fill: "currentColor",
          fillOpacity: .64
        })));
      }, {
        color: "text-primary"
      }),
      sources: {
        0: {
          x: 10,
          y: 10,
          w: 80,
          h: 80
        }
      }
    },
    _v64 = {
      id: "topRightInFullscreen",
      icon: (0, _v34.jsx)(function (_v0) {
        return _v35.createElement("svg", _v59({
          width: 116,
          height: 72,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, _v0), _v30 || (_v30 = _v35.createElement("path", {
          fill: "currentColor",
          fillOpacity: .24,
          d: "M0 0h116v72H0z"
        })), _v31 || (_v31 = _v35.createElement("rect", {
          x: 76,
          y: 8,
          width: 32,
          height: 20,
          rx: 4,
          fill: "currentColor",
          fillOpacity: .64
        })));
      }, {
        color: "text-primary"
      }),
      sources: {
        0: {
          x: 0,
          y: 0,
          w: 100,
          h: 100
        },
        1: {
          x: 76.79,
          y: 0,
          w: 23.21,
          h: 23.21,
          e: !0
        }
      }
    },
    _v65 = {
      id: "bottomRightInBigScreen",
      icon: (0, _v34.jsx)(function (_v0) {
        return _v35.createElement("svg", _v52({
          width: 116,
          height: 72,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, _v0), _v16 || (_v16 = _v35.createElement("path", {
          fill: "currentColor",
          fillOpacity: .24,
          d: "M0 0h116v72H0z"
        })), _v17 || (_v17 = _v35.createElement("rect", {
          x: 76,
          y: 44,
          width: 32,
          height: 20,
          rx: 4,
          fill: "currentColor",
          fillOpacity: .64
        })));
      }, {
        color: "text-primary"
      }),
      sources: {
        0: {
          x: 0,
          y: 0,
          w: 100,
          h: 100
        },
        1: {
          x: 76.79,
          y: 76.79,
          w: 23.21,
          h: 23.21,
          e: !0
        }
      }
    },
    _v66 = {
      id: "oneAround",
      icon: (0, _v34.jsx)(function (_v0) {
        return _v35.createElement("svg", _v55({
          width: 116,
          height: 72,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, _v0), _v22 || (_v22 = _v35.createElement("path", {
          fill: "currentColor",
          fillOpacity: .24,
          d: "M0 0h116v72H0z"
        })), _v23 || (_v23 = _v35.createElement("path", {
          d: "M8 14a6 6 0 016-6h67.6a6 6 0 016 6v44a6 6 0 01-6 6H14a6 6 0 01-6-6V14zM89.6 33.75a4 4 0 014-4H104a4 4 0 014 4v4.5a4 4 0 01-4 4H93.6a4 4 0 01-4-4v-4.5z",
          fill: "currentColor",
          fillOpacity: .64
        })));
      }, {
        color: "text-primary"
      }),
      sources: {
        0: {
          x: 0,
          y: 12.5,
          w: 75,
          h: 75
        },
        1: {
          x: 75,
          y: 36.95,
          w: 25,
          h: 26.12
        }
      }
    },
    _v67 = {
      id: "twoAround",
      icon: (0, _v34.jsx)(function (_v0) {
        return _v35.createElement("svg", _v60({
          width: 116,
          height: 72,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, _v0), _v32 || (_v32 = _v35.createElement("path", {
          fill: "currentColor",
          fillOpacity: .24,
          d: "M0 0h116v72H0z"
        })), _v33 || (_v33 = _v35.createElement("path", {
          d: "M8 14a6 6 0 016-6h67.6a6 6 0 016 6v44a6 6 0 01-6 6H14a6 6 0 01-6-6V14zM89.6 27a4 4 0 014-4H104a4 4 0 014 4v4a4 4 0 01-4 4H93.6a4 4 0 01-4-4v-4zM89.6 41a4 4 0 014-4H104a4 4 0 014 4v4a4 4 0 01-4 4H93.6a4 4 0 01-4-4v-4z",
          fill: "currentColor",
          fillOpacity: .64
        })));
      }, {
        color: "text-primary"
      }),
      sources: {
        0: {
          x: 0,
          y: 12.5,
          w: 75,
          h: 75
        },
        1: {
          x: 75,
          y: 25,
          w: 25,
          h: 25
        },
        2: {
          x: 75,
          y: 50,
          w: 25,
          h: 25
        }
      }
    },
    _v68 = {
      id: "threeAround",
      icon: (0, _v34.jsx)(function (_v0) {
        return _v35.createElement("svg", _v58({
          width: 116,
          height: 72,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, _v0), _v28 || (_v28 = _v35.createElement("path", {
          fill: "currentColor",
          fillOpacity: .24,
          d: "M0 0h116v72H0z"
        })), _v29 || (_v29 = _v35.createElement("path", {
          d: "M8 14a6 6 0 016-6h67.6a6 6 0 016 6v44a6 6 0 01-6 6H14a6 6 0 01-6-6V14zM89.6 19.25a4 4 0 014-4H104a4 4 0 014 4v4.5a4 4 0 01-4 4H93.6a4 4 0 01-4-4v-4.5zM89.6 33.75a4 4 0 014-4H104a4 4 0 014 4v4.5a4 4 0 01-4 4H93.6a4 4 0 01-4-4v-4.5zM89.6 48.25a4 4 0 014-4H104a4 4 0 014 4v4.5a4 4 0 01-4 4H93.6a4 4 0 01-4-4v-4.5z",
          fill: "currentColor",
          fillOpacity: .64
        })));
      }, {
        color: "text-primary"
      }),
      sources: {
        0: {
          x: 0,
          y: 12.5,
          w: 75,
          h: 75
        },
        1: {
          x: 75,
          y: 12.5,
          w: 25,
          h: 25
        },
        2: {
          x: 75,
          y: 37.5,
          w: 25,
          h: 25
        },
        3: {
          x: 75,
          y: 62.5,
          w: 25,
          h: 25
        }
      }
    },
    _v69 = {
      id: "fourAround",
      icon: (0, _v34.jsx)(function (_v0) {
        return _v35.createElement("svg", _v54({
          width: 116,
          height: 72,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, _v0), _v20 || (_v20 = _v35.createElement("path", {
          fill: "currentColor",
          fillOpacity: .24,
          d: "M0 0h116v72H0z"
        })), _v21 || (_v21 = _v35.createElement("path", {
          d: "M8 14a6 6 0 016-6h67.6a6 6 0 016 6v44a6 6 0 01-6 6H14a6 6 0 01-6-6V14zM89.6 26.5a4 4 0 014-4H104a4 4 0 014 4V31a4 4 0 01-4 4H93.6a4 4 0 01-4-4v-4.5zM89.6 12a4 4 0 014-4H104a4 4 0 014 4v4.5a4 4 0 01-4 4H93.6a4 4 0 01-4-4V12zM89.6 41a4 4 0 014-4H104a4 4 0 014 4v4.5a4 4 0 01-4 4H93.6a4 4 0 01-4-4V41zM89.6 55.5a4 4 0 014-4H104a4 4 0 014 4V60a4 4 0 01-4 4H93.6a4 4 0 01-4-4v-4.5z",
          fill: "currentColor",
          fillOpacity: .64
        })));
      }, {
        color: "text-primary"
      }),
      sources: {
        0: {
          x: 0,
          y: 12.5,
          w: 75,
          h: 75
        },
        1: {
          x: 75,
          y: 0,
          w: 25,
          h: 25
        },
        2: {
          x: 75,
          y: 25,
          w: 25,
          h: 25
        },
        3: {
          x: 75,
          y: 50,
          w: 25,
          h: 25
        },
        4: {
          x: 75,
          y: 75,
          w: 25,
          h: 25
        }
      }
    },
    _v70 = {
      id: "fiveAround",
      icon: (0, _v34.jsx)(function (_v0) {
        return _v35.createElement("svg", _v53({
          width: 116,
          height: 72,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, _v0), _v18 || (_v18 = _v35.createElement("path", {
          fill: "currentColor",
          fillOpacity: .24,
          d: "M0 0h116v72H0z"
        })), _v19 || (_v19 = _v35.createElement("path", {
          d: "M48.8 55.5a4 4 0 014-4h10.4a4 4 0 014 4V60a4 4 0 01-4 4H52.8a4 4 0 01-4-4v-4.5zM69.2 55.5a4 4 0 014-4h10.4a4 4 0 014 4V60a4 4 0 01-4 4H73.2a4 4 0 01-4-4v-4.5zM89.6 55.5a4 4 0 014-4H104a4 4 0 014 4V60a4 4 0 01-4 4H93.6a4 4 0 01-4-4v-4.5zM89.6 41a4 4 0 014-4H104a4 4 0 014 4v4.5a4 4 0 01-4 4H93.6a4 4 0 01-4-4V41zM89.6 26.5a4 4 0 014-4H104a4 4 0 014 4V31a4 4 0 01-4 4H93.6a4 4 0 01-4-4v-4.5zM8 14a6 6 0 016-6h67.6a6 6 0 016 6v29.5a6 6 0 01-6 6H14a6 6 0 01-6-6V14z",
          fill: "currentColor",
          fillOpacity: .64
        })));
      }, {
        color: "text-primary"
      }),
      sources: {
        0: {
          x: 0,
          y: 0,
          w: 75,
          h: 75
        },
        1: {
          x: 75,
          y: 25,
          w: 25,
          h: 25
        },
        2: {
          x: 75,
          y: 50,
          w: 25,
          h: 25
        },
        3: {
          x: 25,
          y: 75,
          w: 25,
          h: 25
        },
        4: {
          x: 50,
          y: 75,
          w: 25,
          h: 25
        },
        5: {
          x: 75,
          y: 75,
          w: 25,
          h: 25
        }
      }
    },
    _v71 = {
      id: "sixAround",
      icon: (0, _v34.jsx)(function (_v0) {
        return _v35.createElement("svg", _v57({
          width: 116,
          height: 72,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, _v0), _v26 || (_v26 = _v35.createElement("path", {
          fill: "currentColor",
          fillOpacity: .24,
          d: "M0 0h116v72H0z"
        })), _v27 || (_v27 = _v35.createElement("path", {
          d: "M48.8 55.5a4 4 0 014-4h10.4a4 4 0 014 4V60a4 4 0 01-4 4H52.8a4 4 0 01-4-4v-4.5zM69.2 55.5a4 4 0 014-4h10.4a4 4 0 014 4V60a4 4 0 01-4 4H73.2a4 4 0 01-4-4v-4.5zM89.6 55.5a4 4 0 014-4H104a4 4 0 014 4V60a4 4 0 01-4 4H93.6a4 4 0 01-4-4v-4.5zM89.6 41a4 4 0 014-4H104a4 4 0 014 4v4.5a4 4 0 01-4 4H93.6a4 4 0 01-4-4V41zM89.6 26.5a4 4 0 014-4H104a4 4 0 014 4V31a4 4 0 01-4 4H93.6a4 4 0 01-4-4v-4.5zM89.6 12a4 4 0 014-4H104a4 4 0 014 4v4.5a4 4 0 01-4 4H93.6a4 4 0 01-4-4V12zM8 14a6 6 0 016-6h67.6a6 6 0 016 6v29.5a6 6 0 01-6 6H14a6 6 0 01-6-6V14z",
          fill: "currentColor",
          fillOpacity: .64
        })));
      }, {
        color: "text-primary"
      }),
      sources: {
        0: {
          x: 0,
          y: 0,
          w: 75,
          h: 75
        },
        1: {
          x: 75,
          y: 0,
          w: 25,
          h: 25
        },
        2: {
          x: 75,
          y: 25,
          w: 25,
          h: 25
        },
        3: {
          x: 75,
          y: 50,
          w: 25,
          h: 25
        },
        4: {
          x: 25,
          y: 75,
          w: 25,
          h: 25
        },
        5: {
          x: 50,
          y: 75,
          w: 25,
          h: 25
        },
        6: {
          x: 75,
          y: 75,
          w: 25,
          h: 25
        }
      }
    },
    _v72 = {
      id: "sevenAround",
      icon: (0, _v34.jsx)(function (_v0) {
        return _v35.createElement("svg", _v56({
          width: 116,
          height: 72,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, _v0), _v24 || (_v24 = _v35.createElement("path", {
          fill: "currentColor",
          fillOpacity: .24,
          d: "M0 0h116v72H0z"
        })), _v25 || (_v25 = _v35.createElement("path", {
          d: "M28.4 55.5a4 4 0 014-4h10.4a4 4 0 014 4V60a4 4 0 01-4 4H32.4a4 4 0 01-4-4v-4.5zM48.8 55.5a4 4 0 014-4h10.4a4 4 0 014 4V60a4 4 0 01-4 4H52.8a4 4 0 01-4-4v-4.5zM69.2 55.5a4 4 0 014-4h10.4a4 4 0 014 4V60a4 4 0 01-4 4H73.2a4 4 0 01-4-4v-4.5zM89.6 55.5a4 4 0 014-4H104a4 4 0 014 4V60a4 4 0 01-4 4H93.6a4 4 0 01-4-4v-4.5zM89.6 41a4 4 0 014-4H104a4 4 0 014 4v4.5a4 4 0 01-4 4H93.6a4 4 0 01-4-4V41zM89.6 26.5a4 4 0 014-4H104a4 4 0 014 4V31a4 4 0 01-4 4H93.6a4 4 0 01-4-4v-4.5zM89.6 12a4 4 0 014-4H104a4 4 0 014 4v4.5a4 4 0 01-4 4H93.6a4 4 0 01-4-4V12zM8 14a6 6 0 016-6h67.6a6 6 0 016 6v29.5a6 6 0 01-6 6H14a6 6 0 01-6-6V14z",
          fill: "currentColor",
          fillOpacity: .64
        })));
      }, {
        color: "text-primary"
      }),
      sources: {
        0: {
          x: 0,
          y: 0,
          w: 75,
          h: 75
        },
        1: {
          x: 75,
          y: 0,
          w: 25,
          h: 25
        },
        2: {
          x: 75,
          y: 25,
          w: 25,
          h: 25
        },
        3: {
          x: 75,
          y: 50,
          w: 25,
          h: 25
        },
        4: {
          x: 0,
          y: 75,
          w: 25,
          h: 25
        },
        5: {
          x: 25,
          y: 75,
          w: 25,
          h: 25
        },
        6: {
          x: 50,
          y: 75,
          w: 25,
          h: 25
        },
        7: {
          x: 75,
          y: 75,
          w: 25,
          h: 25
        }
      }
    },
    _v73 = {
      id: "bigTwo",
      icon: (0, _v34.jsx)(function (_v0) {
        return _v35.createElement("svg", _v51({
          width: 116,
          height: 72,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, _v0), _v14 || (_v14 = _v35.createElement("path", {
          fill: "currentColor",
          fillOpacity: .24,
          d: "M0 0h116v72H0z"
        })), _v15 || (_v15 = _v35.createElement("path", {
          d: "M8 27a5 5 0 015-5h39a5 5 0 015 5v17a5 5 0 01-5 5H13a5 5 0 01-5-5V27zM59 27a5 5 0 015-5h39a5 5 0 015 5v17a5 5 0 01-5 5H64a5 5 0 01-5-5V27z",
          fill: "currentColor",
          fillOpacity: .64
        })));
      }, {
        color: "text-primary"
      }),
      sources: {
        0: {
          x: 0,
          y: 25,
          w: 50,
          h: 50
        },
        1: {
          x: 50,
          y: 25,
          w: 50,
          h: 50
        }
      }
    },
    _v74 = {
      id: "bigThree",
      icon: (0, _v34.jsx)(function (_v0) {
        return _v35.createElement("svg", _v50({
          width: 116,
          height: 72,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, _v0), _v12 || (_v12 = _v35.createElement("path", {
          fill: "currentColor",
          fillOpacity: .24,
          d: "M0 0h116v72H0z"
        })), _v13 || (_v13 = _v35.createElement("path", {
          d: "M8 13a5 5 0 015-5h39a5 5 0 015 5v17a5 5 0 01-5 5H13a5 5 0 01-5-5V13zM59 13a5 5 0 015-5h39a5 5 0 015 5v17a5 5 0 01-5 5H64a5 5 0 01-5-5V13zM33.5 42a5 5 0 015-5h39a5 5 0 015 5v17a5 5 0 01-5 5h-39a5 5 0 01-5-5V42z",
          fill: "currentColor",
          fillOpacity: .64
        })));
      }, {
        color: "text-primary"
      }),
      sources: {
        0: {
          x: 0,
          y: 0,
          w: 50,
          h: 50
        },
        1: {
          x: 50,
          y: 0,
          w: 50,
          h: 50
        },
        2: {
          x: 25,
          y: 50,
          w: 50,
          h: 50
        }
      }
    },
    _v75 = {
      id: "bigFour",
      icon: (0, _v34.jsx)(function (_v0) {
        return _v35.createElement("svg", _v46({
          width: 116,
          height: 72,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, _v0), _v4 || (_v4 = _v35.createElement("path", {
          fill: "currentColor",
          fillOpacity: .24,
          d: "M0 0h116v72H0z"
        })), _v5 || (_v5 = _v35.createElement("path", {
          d: "M8 13a5 5 0 015-5h39a5 5 0 015 5v17a5 5 0 01-5 5H13a5 5 0 01-5-5V13zM59 13a5 5 0 015-5h39a5 5 0 015 5v17a5 5 0 01-5 5H64a5 5 0 01-5-5V13zM8 42a5 5 0 015-5h39a5 5 0 015 5v17a5 5 0 01-5 5H13a5 5 0 01-5-5V42zM59 42a5 5 0 015-5h39a5 5 0 015 5v17a5 5 0 01-5 5H64a5 5 0 01-5-5V42z",
          fill: "currentColor",
          fillOpacity: .64
        })));
      }, {
        color: "text-primary"
      }),
      sources: {
        0: {
          x: 0,
          y: 0,
          w: 50,
          h: 50
        },
        1: {
          x: 50,
          y: 0,
          w: 50,
          h: 50
        },
        2: {
          x: 0,
          y: 50,
          w: 50,
          h: 50
        },
        3: {
          x: 50,
          y: 50,
          w: 50,
          h: 50
        }
      }
    },
    _v76 = {
      id: "bigFive",
      icon: (0, _v34.jsx)(function (_v0) {
        return _v35.createElement("svg", _v45({
          width: 116,
          height: 72,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, _v0), _v2 || (_v2 = _v35.createElement("path", {
          fill: "currentColor",
          fillOpacity: .24,
          d: "M0 0h116v72H0z"
        })), _v3 || (_v3 = _v35.createElement("path", {
          d: "M8 21.66a4 4 0 014-4h24a4 4 0 014 4v9.334a4 4 0 01-4 4H12a4 4 0 01-4-4V21.66zM42 21.66a4 4 0 014-4h24a4 4 0 014 4v9.334a4 4 0 01-4 4H46a4 4 0 01-4-4V21.66zM76 21.66a4 4 0 014-4h24a4 4 0 014 4v9.334a4 4 0 01-4 4H80a4 4 0 01-4-4V21.66zM25 40.99a4 4 0 014-4h24a4 4 0 014 4v9.333a4 4 0 01-4 4H29a4 4 0 01-4-4V40.99zM59 40.99a4 4 0 014-4h24a4 4 0 014 4v9.333a4 4 0 01-4 4H63a4 4 0 01-4-4V40.99z",
          fill: "currentColor",
          fillOpacity: .64
        })));
      }, {
        color: "text-primary"
      }),
      sources: {
        0: {
          x: 0,
          y: 100 / 6,
          w: 100 / 3,
          h: 100 / 3
        },
        1: {
          x: 100 / 3,
          y: 100 / 6,
          w: 100 / 3,
          h: 100 / 3
        },
        2: {
          x: 100 / 3 * 2,
          y: 100 / 6,
          w: 100 / 3,
          h: 100 / 3
        },
        3: {
          x: 100 / 6,
          y: 50,
          w: 100 / 3,
          h: 100 / 3
        },
        4: {
          x: 100 / 6 + 100 / 3,
          y: 50,
          w: 100 / 3,
          h: 100 / 3
        }
      }
    },
    _v77 = {
      id: "bigSix",
      icon: (0, _v34.jsx)(function (_v0) {
        return _v35.createElement("svg", _v49({
          width: 116,
          height: 72,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, _v0), _v10 || (_v10 = _v35.createElement("path", {
          fill: "currentColor",
          fillOpacity: .24,
          d: "M0 0h116v72H0z"
        })), _v11 || (_v11 = _v35.createElement("path", {
          d: "M8 21.66a4 4 0 014-4h24a4 4 0 014 4v9.334a4 4 0 01-4 4H12a4 4 0 01-4-4V21.66zM42 21.66a4 4 0 014-4h24a4 4 0 014 4v9.334a4 4 0 01-4 4H46a4 4 0 01-4-4V21.66zM76 21.66a4 4 0 014-4h24a4 4 0 014 4v9.334a4 4 0 01-4 4H80a4 4 0 01-4-4V21.66zM8 40.99a4 4 0 014-4h24a4 4 0 014 4v9.333a4 4 0 01-4 4H12a4 4 0 01-4-4V40.99zM42 40.99a4 4 0 014-4h24a4 4 0 014 4v9.333a4 4 0 01-4 4H46a4 4 0 01-4-4V40.99zM76 40.99a4 4 0 014-4h24a4 4 0 014 4v9.333a4 4 0 01-4 4H80a4 4 0 01-4-4V40.99z",
          fill: "currentColor",
          fillOpacity: .64
        })));
      }, {
        color: "text-primary"
      }),
      sources: {
        0: {
          x: 0,
          y: 100 / 6,
          w: 100 / 3,
          h: 100 / 3
        },
        1: {
          x: 100 / 3,
          y: 100 / 6,
          w: 100 / 3,
          h: 100 / 3
        },
        2: {
          x: 100 / 3 * 2,
          y: 100 / 6,
          w: 100 / 3,
          h: 100 / 3
        },
        3: {
          x: 0,
          y: 50,
          w: 100 / 3,
          h: 100 / 3
        },
        4: {
          x: 100 / 3,
          y: 50,
          w: 100 / 3,
          h: 100 / 3
        },
        5: {
          x: 100 / 3 * 2,
          y: 50,
          w: 100 / 3,
          h: 100 / 3
        }
      }
    },
    _v78 = {
      id: "bigSeven",
      icon: (0, _v34.jsx)(function (_v0) {
        return _v35.createElement("svg", _v48({
          width: 116,
          height: 72,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, _v0), _v8 || (_v8 = _v35.createElement("path", {
          fill: "currentColor",
          fillOpacity: .24,
          d: "M0 0h116v72H0z"
        })), _v9 || (_v9 = _v35.createElement("path", {
          d: "M8 12a4 4 0 014-4h24a4 4 0 014 4v9.333a4 4 0 01-4 4H12a4 4 0 01-4-4V12zM42 12a4 4 0 014-4h24a4 4 0 014 4v9.333a4 4 0 01-4 4H46a4 4 0 01-4-4V12zM76 12a4 4 0 014-4h24a4 4 0 014 4v9.333a4 4 0 01-4 4H80a4 4 0 01-4-4V12zM8 31.334a4 4 0 014-4h24a4 4 0 014 4v9.333a4 4 0 01-4 4H12a4 4 0 01-4-4v-9.333zM42 31.334a4 4 0 014-4h24a4 4 0 014 4v9.333a4 4 0 01-4 4H46a4 4 0 01-4-4v-9.333zM76 31.334a4 4 0 014-4h24a4 4 0 014 4v9.333a4 4 0 01-4 4H80a4 4 0 01-4-4v-9.333zM42 50.666a4 4 0 014-4h24a4 4 0 014 4v9.333a4 4 0 01-4 4H46a4 4 0 01-4-4v-9.333z",
          fill: "currentColor",
          fillOpacity: .64
        })));
      }, {
        color: "text-primary"
      }),
      sources: {
        0: {
          x: 0,
          y: 0,
          w: 100 / 3,
          h: 100 / 3
        },
        1: {
          x: 100 / 3,
          y: 0,
          w: 100 / 3,
          h: 100 / 3
        },
        2: {
          x: 100 / 3 * 2,
          y: 0,
          w: 100 / 3,
          h: 100 / 3
        },
        3: {
          x: 0,
          y: 100 / 3,
          w: 100 / 3,
          h: 100 / 3
        },
        4: {
          x: 100 / 3,
          y: 100 / 3,
          w: 100 / 3,
          h: 100 / 3
        },
        5: {
          x: 100 / 3 * 2,
          y: 100 / 3,
          w: 100 / 3,
          h: 100 / 3
        },
        6: {
          x: 100 / 3,
          y: 100 / 3 * 2,
          w: 100 / 3,
          h: 100 / 3
        }
      }
    },
    _v79 = {
      LOGO_DISABLED: [_v65.id, _v68.id, _v69.id, _v70.id, _v71.id, _v72.id],
      DEFAULT_LAYOUT: _v61,
      LAYOUTS: {
        [_v62.id]: _v62,
        [_v63.id]: _v63,
        [_v65.id]: _v65,
        [_v64.id]: _v64,
        [_v66.id]: _v66,
        [_v67.id]: _v67,
        [_v68.id]: _v68,
        [_v69.id]: _v69,
        [_v70.id]: _v70,
        [_v71.id]: _v71,
        [_v72.id]: _v72,
        [_v73.id]: _v73,
        [_v74.id]: _v74,
        [_v75.id]: _v75,
        [_v76.id]: _v76,
        [_v77.id]: _v77,
        [_v78.id]: _v78
      }
    };
  _v0.s(["layoutsConfig", 0, _v79], 0);
}