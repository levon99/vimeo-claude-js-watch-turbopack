{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.i(0);
  var _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  function _v6(_v0, _v1) {
    [..._v1].reverse().forEach(_v0 => {
      let _v1 = _v0.getVariant(_v0);
      _v1 && (0, _v4.setTarget)(_v0, _v1), _v0.variantChildren && _v0.variantChildren.forEach(_v0 => {
        _v6(_v0, _v1);
      });
    });
  }
  function _v7() {
    let _v0 = !1,
      _v1 = new Set(),
      _v2 = {
        subscribe: _v0 => (_v1.add(_v0), () => void _v1.delete(_v0)),
        start(_v0, _v1) {
          (0, _v3.invariant)(_v0, "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");
          let _v2 = [];
          return _v1.forEach(_v0 => {
            _v2.push((0, _v5.animateVisualElement)(_v0, _v0, {
              transitionOverride: _v1
            }));
          }), Promise.all(_v2);
        },
        set: _v0 => ((0, _v3.invariant)(_v0, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."), _v1.forEach(_v0 => {
          var _v1, _v2;
          _v1 = _v0, Array.isArray(_v2 = _v0) ? _v6(_v1, _v2) : "string" == typeof _v2 ? _v6(_v1, [_v2]) : (0, _v4.setTarget)(_v1, _v2);
        })),
        stop() {
          _v1.forEach(_v0 => {
            _v0.values.forEach(_v0 => _v0.stop());
          });
        },
        mount: () => (_v0 = !0, () => {
          _v0 = !1, _v2.stop();
        })
      };
    return _v2;
  }
  var _v8 = _v0.i(0),
    _v9 = _v0.i(0);
  let _v10 = function () {
    let _v0 = (0, _v8.useConstant)(_v7);
    return (0, _v9.useIsomorphicLayoutEffect)(_v0.mount, []), _v0;
  };
  var _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0);
  let _v17 = ({
      isHovered: _v0,
      isMountWidthAnimationDone: _v1
    }) => {
      let _v2 = _v10(),
        _v3 = _v10();
      (0, _v12.useEffect)(() => {
        _v1 && (_v2.start({
          rotate: -180
        }), _v3.start({
          rotate: 180
        }));
      }, [_v3, _v2, _v1]), (0, _v12.useEffect)(() => {
        _v2.start({
          rotate: _v0 ? -90 : 0
        }), _v3.start({
          rotate: 90 * !!_v0
        });
      }, [_v0, _v3, _v2]);
      let _v4 = (0, _v15.useColorModeValue)("black", "white");
      return (0, _v1.jsxs)("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, _v1.jsx)(_v2.motion.path, {
          d: "M20.8611 4.11014L21.9028 4.47168L21.8992 4.47347C22.1068 4.54685 22.216 4.77237 22.1444 4.97819C22.1086 5.09095 22.0155 5.18402 21.8956 5.2234L20.8593 5.58493C20.4011 5.74423 20.0467 6.09861 19.8875 6.55679L19.5259 7.59846C19.4669 7.76312 19.3129 7.86514 19.1501 7.86514C19.1053 7.86514 19.0606 7.85798 19.0176 7.84187C18.9084 7.80786 18.8118 7.71121 18.7742 7.5913L18.4144 6.55501C18.2552 6.09682 17.9008 5.74244 17.4426 5.58314L16.4009 5.22161C16.3114 5.19476 16.2255 5.12138 16.1772 5.02652C16.1289 4.92987 16.1217 4.81711 16.1575 4.71688C16.1951 4.60233 16.2917 4.50569 16.4152 4.4681L17.4462 4.11014C17.9026 3.95085 18.2569 3.59647 18.4162 3.13828L18.7796 2.09662C18.81 2.00355 18.8834 1.91764 18.9782 1.8711C19.0731 1.82457 19.1859 1.81741 19.2861 1.8532C19.3953 1.88721 19.4901 1.98207 19.5295 2.10378L19.8892 3.13828C20.0485 3.59647 20.4029 3.95085 20.8611 4.11014Z",
          fill: _v4,
          animate: _v2,
          transition: {
            type: "spring",
            stiffness: 500,
            damping: 60,
            mass: 1,
            delay: 0
          }
        }), (0, _v1.jsx)(_v2.motion.path, {
          d: "M15.7316 10.906L18.3519 11.817L18.3536 11.8152C18.7349 11.9512 18.9353 12.3665 18.8047 12.7441C18.7349 12.9553 18.563 13.1254 18.3447 13.1969L15.7316 14.1062C14.5002 14.5339 13.5498 15.4843 13.1221 16.7139L12.2111 19.336C12.1019 19.6384 11.8191 19.8264 11.5202 19.8264C11.4432 19.8264 11.3663 19.8138 11.2893 19.7888C11.0656 19.7154 10.8956 19.5436 10.8275 19.3234L9.9219 16.7157C9.49414 15.4879 8.54376 14.5357 7.31417 14.108L4.69748 13.1987C4.51492 13.1379 4.36279 13.0054 4.27688 12.8336C4.19097 12.6618 4.17665 12.4578 4.23929 12.2752C4.31089 12.0568 4.48092 11.8868 4.69748 11.8152L7.31417 10.906C8.54376 10.4782 9.49414 9.52786 9.9219 8.29827L10.8329 5.67621C10.8866 5.50439 11.0226 5.34868 11.198 5.26098C11.3716 5.17507 11.5721 5.16254 11.7547 5.22339C11.9694 5.29499 12.1395 5.46323 12.2128 5.67979L13.1221 8.29827C13.5498 9.52786 14.5002 10.4782 15.7316 10.906Z",
          fill: _v4,
          animate: _v3,
          transition: {
            type: "spring",
            stiffness: 500,
            damping: 60,
            mass: 1,
            delay: 0
          }
        })]
      });
    },
    _v18 = (0, _v2.motion)(_v14.Box),
    _v19 = "translate(-150%, -50%)",
    _v20 = "translate(-50%, -50%)";
  _v0.s(["AiActionBarButton", 0, ({
    onClick: _v0,
    label: _v1 = (0, _v16.translate)({
      singular: "Vimeo AI",
      dictionary: {
        "fr-FR": {
          singular: "IA Vimeo"
        }
      }
    }),
    isDisabled: _v2 = !1,
    buttonRef: _v3,
    testId: _v4,
    variant: _v5 = "minimal"
  }) => {
    let [_v6, _v7] = (0, _v12.useState)(!1),
      [_v8, _v9] = (0, _v12.useState)(!1),
      _v10 = _v10(),
      _v11 = _v10(),
      _v12 = (0, _v12.useRef)(!1),
      _v13 = (0, _v15.useColorModeValue)(.7, 1);
    (0, _v12.useEffect)(() => {
      (async () => {
        await Promise.all([_v10.start({
          width: "100%"
        }, {
          duration: .8
        }), _v11.start({
          transform: _v20,
          opacity: _v13
        }, {
          duration: .8
        })]), _v9(!0), await _v11.start({
          opacity: 0
        }, {
          duration: .8
        }), await _v11.start({
          transform: _v19
        }, {
          duration: .8
        });
      })();
    }, [_v11, _v10, _v13]), (0, _v12.useEffect)(() => {
      (async () => {
        _v6 ? _v11.start({
          transform: _v20,
          opacity: _v13
        }, {
          duration: .4,
          ease: (0, _v11.cubicBezier)(.17, 0, .2, 1)
        }) : !_v6 && _v12.current && (await _v11.start({
          transform: "translate(30%, -50%)",
          opacity: 0
        }, {
          duration: .4,
          ease: "easeIn"
        }), await _v11.start({
          transform: _v19
        }, {
          duration: 0
        })), _v12.current = _v6;
      })();
    }, [_v11, _v13, _v6]);
    let _v14 = () => {
      _v7(!1);
    };
    return (0, _v1.jsxs)(_v18, {
      tabIndex: 0,
      position: "relative",
      zIndex: 0,
      backgroundColor: "transparent",
      _hover: {
        backgroundColor: "transparent !important"
      },
      overflow: "hidden",
      borderRadius: "6px",
      width: 0,
      outlineColor: "blue.500",
      outlineOffset: 2,
      animate: _v10,
      onTouchEnd: _v14,
      onPointerLeave: _v14,
      onPointerEnter: () => {
        _v7(!0);
      },
      children: [(0, _v1.jsx)(_v18, {
        height: "300%",
        width: "300%",
        position: "absolute",
        filter: "blur(12px)",
        opacity: 0,
        zIndex: 1,
        initial: {
          transform: _v19
        },
        borderRadius: "50%",
        animate: _v11,
        children: (0, _v1.jsx)(_v14.Box, {
          height: "100%",
          width: "100%",
          backgroundSize: "100% 100%",
          backgroundImage: "radial-gradient(#82FFEB 0%, #17D5FF 30%, #0BA1FF 45%, #9E00FF 75%, #9E00FF 0%);"
        })
      }), (0, _v1.jsx)(_v13.Button, {
        "data-testid": _v4,
        ref: _v3,
        onClick: _v0,
        zIndex: 2,
        variant: _v5,
        tabIndex: -1,
        _hover: {
          backgroundColor: "transparent !important"
        },
        _active: {
          color: "text-primary"
        },
        size: "sm",
        leftIcon: (0, _v1.jsx)(_v17, {
          isMountWidthAnimationDone: _v8,
          isHovered: _v6
        }),
        isDisabled: _v2,
        children: _v1
      })]
    });
  }], 0);
}