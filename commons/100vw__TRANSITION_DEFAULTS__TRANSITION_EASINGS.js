{
  "use strict";

  var _v1 = {
      ease: [.25, .1, .25, 1],
      easeIn: [.4, 0, 1, 1],
      easeOut: [0, 0, .2, 1],
      easeInOut: [.4, 0, .2, 1]
    },
    _v2 = {
      position: {
        left: 0,
        top: 0,
        bottom: 0,
        width: "100%"
      },
      enter: {
        x: 0,
        y: 0
      },
      exit: {
        x: "-100%",
        y: 0
      }
    },
    _v3 = {
      position: {
        right: 0,
        top: 0,
        bottom: 0,
        width: "100%"
      },
      enter: {
        x: 0,
        y: 0
      },
      exit: {
        x: "100%",
        y: 0
      }
    },
    _v4 = {
      position: {
        top: 0,
        left: 0,
        right: 0,
        maxWidth: "100vw"
      },
      enter: {
        x: 0,
        y: 0
      },
      exit: {
        x: 0,
        y: "-100%"
      }
    },
    _v5 = {
      position: {
        bottom: 0,
        left: 0,
        right: 0,
        maxWidth: "100vw"
      },
      enter: {
        x: 0,
        y: 0
      },
      exit: {
        x: 0,
        y: "100%"
      }
    },
    _v6 = {
      enter: {
        duration: .2,
        ease: _v1.easeOut
      },
      exit: {
        duration: .1,
        ease: _v1.easeIn
      }
    };
  _v0.s(["TRANSITION_DEFAULTS", 0, _v6, "TRANSITION_EASINGS", 0, _v1, "getSlideTransition", 0, function (_v0) {
    var _v1;
    switch (null != (_v1 = null == _v0 ? void 0 : _v0.direction) ? _v1 : "right") {
      case "right":
      default:
        return _v3;
      case "left":
        return _v2;
      case "bottom":
        return _v5;
      case "top":
        return _v4;
    }
  }, "withDelay", 0, {
    enter: (_v0, _v1) => ({
      ..._v0,
      delay: "number" == typeof _v1 ? _v1 : null == _v1 ? void 0 : _v1.enter
    }),
    exit: (_v0, _v1) => ({
      ..._v0,
      delay: "number" == typeof _v1 ? _v1 : null == _v1 ? void 0 : _v1.exit
    })
  }]);
}