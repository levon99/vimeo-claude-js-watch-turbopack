{
  "use strict";

  var _v1 = (_v0, _v1) => ({
      var: _v0,
      varRef: _v1 ? `var(${_v0}, ${_v1})` : `var(${_v0})`
    }),
    _v2 = {
      arrowShadowColor: _v1("--popper-arrow-shadow-color"),
      arrowSize: _v1("--popper-arrow-size", "8px"),
      arrowSizeHalf: _v1("--popper-arrow-size-half"),
      arrowBg: _v1("--popper-arrow-bg"),
      transformOrigin: _v1("--popper-transform-origin"),
      arrowOffset: _v1("--popper-arrow-offset")
    };
  function _v3(_v0) {
    return _v0.includes("top") ? "1px 1px 0px 0 var(--popper-arrow-shadow-color)" : _v0.includes("bottom") ? "-1px -1px 0px 0 var(--popper-arrow-shadow-color)" : _v0.includes("right") ? "-1px 1px 0px 0 var(--popper-arrow-shadow-color)" : _v0.includes("left") ? "1px -1px 0px 0 var(--popper-arrow-shadow-color)" : void 0;
  }
  var _v4 = {
      top: "bottom center",
      "top-start": "bottom left",
      "top-end": "bottom right",
      bottom: "top center",
      "bottom-start": "top left",
      "bottom-end": "top right",
      left: "right center",
      "left-start": "right top",
      "left-end": "right bottom",
      right: "left center",
      "right-start": "left top",
      "right-end": "left bottom"
    },
    _v5 = _v0 => _v4[_v0],
    _v6 = {
      scroll: !0,
      resize: !0
    };
  _v0.s(["cssVars", 0, _v2, "getBoxShadow", 0, _v3, "getEventListenerOptions", 0, function (_v0) {
    return "object" == typeof _v0 ? {
      enabled: !0,
      options: {
        ..._v6,
        ..._v0
      }
    } : {
      enabled: _v0,
      options: _v6
    };
  }, "toTransformOrigin", 0, _v5], 0);
  var _v7 = _v0 => {
      _v0.elements.popper.style.setProperty(_v2.transformOrigin.var, _v5(_v0.placement));
    },
    _v8 = _v0 => _v0.startsWith("top") ? {
      property: "bottom",
      value: _v2.arrowOffset.varRef
    } : _v0.startsWith("bottom") ? {
      property: "top",
      value: _v2.arrowOffset.varRef
    } : _v0.startsWith("left") ? {
      property: "right",
      value: _v2.arrowOffset.varRef
    } : _v0.startsWith("right") ? {
      property: "left",
      value: _v2.arrowOffset.varRef
    } : void 0,
    _v9 = _v0 => {
      if (!_v0.elements.arrow) return;
      let _v1 = _v0.elements.arrow.querySelector("[data-popper-arrow-inner]");
      if (!_v1) return;
      let _v2 = _v3(_v0.placement);
      _v2 && _v1.style.setProperty("--popper-arrow-default-shadow", _v2), Object.assign(_v1.style, {
        transform: "rotate(45deg)",
        background: _v2.arrowBg.varRef,
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: "inherit",
        boxShadow: "var(--popper-arrow-shadow, var(--popper-arrow-default-shadow))"
      });
    };
  _v0.s(["innerArrow", 0, {
    name: "innerArrow",
    enabled: !0,
    phase: "main",
    requires: ["arrow"],
    fn: ({
      state: _v0
    }) => {
      _v9(_v0);
    },
    effect: ({
      state: _v0
    }) => () => {
      _v9(_v0);
    }
  }, "matchWidth", 0, {
    name: "matchWidth",
    enabled: !0,
    phase: "beforeWrite",
    requires: ["computeStyles"],
    fn: ({
      state: _v0
    }) => {
      _v0.styles.popper.width = `${_v0.rects.reference.width}px`;
    },
    effect: ({
      state: _v0
    }) => () => {
      let _v0 = _v0.elements.reference;
      _v0.elements.popper.style.width = `${_v0.offsetWidth}px`;
    }
  }, "positionArrow", 0, {
    name: "positionArrow",
    enabled: !0,
    phase: "afterWrite",
    fn: ({
      state: _v0
    }) => {
      (_v0 => {
        var _v1;
        if (!_v0.placement) return;
        let _v2 = _v8(_v0.placement);
        if ((null == (_v1 = _v0.elements) ? void 0 : _v1.arrow) && _v2) {
          Object.assign(_v0.elements.arrow.style, {
            [_v2.property]: _v2.value,
            width: _v2.arrowSize.varRef,
            height: _v2.arrowSize.varRef,
            zIndex: -1
          });
          let _v0 = {
            [_v2.arrowSizeHalf.var]: `calc(${_v2.arrowSize.varRef} / 2 - 1px)`,
            [_v2.arrowOffset.var]: `calc(${_v2.arrowSizeHalf.varRef} * -1)`
          };
          for (let _v0 in _v0) _v0.elements.arrow.style.setProperty(_v0, _v0[_v0]);
        }
      })(_v0);
    }
  }, "transformOrigin", 0, {
    name: "transformOrigin",
    enabled: !0,
    phase: "write",
    fn: ({
      state: _v0
    }) => {
      _v7(_v0);
    },
    effect: ({
      state: _v0
    }) => () => {
      _v7(_v0);
    }
  }], 0);
  var _v10 = {
      "start-start": {
        ltr: "left-start",
        rtl: "right-start"
      },
      "start-end": {
        ltr: "left-end",
        rtl: "right-end"
      },
      "end-start": {
        ltr: "right-start",
        rtl: "left-start"
      },
      "end-end": {
        ltr: "right-end",
        rtl: "left-end"
      },
      start: {
        ltr: "left",
        rtl: "right"
      },
      end: {
        ltr: "right",
        rtl: "left"
      }
    },
    _v11 = {
      "auto-start": "auto-end",
      "auto-end": "auto-start",
      "top-start": "top-end",
      "top-end": "top-start",
      "bottom-start": "bottom-end",
      "bottom-end": "bottom-start"
    };
  _v0.s(["getPopperPlacement", 0, function (_v0, _v1 = "ltr") {
    var _v2, _v3;
    let _v4 = (null == (_v2 = _v10[_v0]) ? void 0 : _v2[_v1]) || _v0;
    return "ltr" === _v1 ? _v4 : null != (_v3 = _v11[_v0]) ? _v3 : _v4;
  }], 0);
}