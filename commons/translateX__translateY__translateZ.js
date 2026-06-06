{
  "use strict";

  var _v1,
    _v2,
    _v3,
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0);
  let _v20 = _v0 => (_v0, _v1) => {
    let _v2 = (0, _v12.useContext)(_v14.MotionContext),
      _v3 = (0, _v12.useContext)(_v15.PresenceContext),
      _v4 = () => function ({
        scrapeMotionValuesFromProps: _v0,
        createRenderState: _v1,
        onUpdate: _v2
      }, _v3, _v4, _v5) {
        let _v6 = {
          latestValues: function (_v0, _v1, _v2, _v3) {
            let _v4 = {},
              _v5 = _v3(_v0, {});
            for (let _v0 in _v5) _v4[_v0] = (0, _v19.resolveMotionValue)(_v5[_v0]);
            let {
                initial: _v6,
                animate: _v7
              } = _v0,
              _v8 = (0, _v16.isControllingVariants)(_v0),
              _v9 = (0, _v16.isVariantNode)(_v0);
            _v1 && _v9 && !_v8 && !1 !== _v0.inherit && (void 0 === _v6 && (_v6 = _v1.initial), void 0 === _v7 && (_v7 = _v1.animate));
            let _v10 = !!_v2 && !1 === _v2.initial,
              _v11 = (_v10 = _v10 || !1 === _v6) ? _v7 : _v6;
            if (_v11 && "boolean" != typeof _v11 && !(0, _v13.isAnimationControls)(_v11)) {
              let _v0 = Array.isArray(_v11) ? _v11 : [_v11];
              for (let _v0 = 0; _v0 < _v0.length; _v0++) {
                let _v0 = (0, _v17.resolveVariantFromProps)(_v0, _v0[_v0]);
                if (_v0) {
                  let {
                    transitionEnd: _v0,
                    transition: _v1,
                    ..._v2
                  } = _v0;
                  for (let _v0 in _v2) {
                    let _v0 = _v2[_v0];
                    if (Array.isArray(_v0)) {
                      let _v0 = _v10 ? _v0.length - 1 : 0;
                      _v0 = _v0[_v0];
                    }
                    null !== _v0 && (_v4[_v0] = _v0);
                  }
                  for (let _v0 in _v0) _v4[_v0] = _v0[_v0];
                }
              }
            }
            return _v4;
          }(_v3, _v4, _v5, _v0),
          renderState: _v1()
        };
        return _v2 && (_v6.onMount = _v0 => _v2({
          props: _v3,
          current: _v0,
          ..._v6
        }), _v6.onUpdate = _v0 => _v2(_v0)), _v6;
      }(_v0, _v0, _v2, _v3);
    return _v1 ? _v4() : (0, _v18.useConstant)(_v4);
  };
  var _v21 = _v0.i(0),
    _v22 = _v0.i(0);
  let _v23 = (_v0, _v1) => _v1 && "number" == typeof _v0 ? _v1.transform(_v0) : _v0;
  var _v24 = _v0.i(0);
  let _v25 = {
      x: "translateX",
      y: "translateY",
      z: "translateZ",
      transformPerspective: "perspective"
    },
    _v26 = _v21.transformPropOrder.length;
  function _v27(_v0, _v1, _v2) {
    let {
        style: _v3,
        vars: _v4,
        transformOrigin: _v5
      } = _v0,
      _v6 = !1,
      _v7 = !1;
    for (let _v0 in _v1) {
      let _v0 = _v1[_v0];
      if (_v21.transformProps.has(_v0)) {
        _v6 = !0;
        continue;
      }
      if ((0, _v22.isCSSVariableName)(_v0)) {
        _v4[_v0] = _v0;
        continue;
      }
      {
        let _v0 = _v23(_v0, _v24.numberValueTypes[_v0]);
        _v0.startsWith("origin") ? (_v7 = !0, _v5[_v0] = _v0) : _v3[_v0] = _v0;
      }
    }
    if (!_v1.transform && (_v6 || _v2 ? _v3.transform = function (_v0, _v1, _v2) {
      let _v3 = "",
        _v4 = !0;
      for (let _v0 = 0; _v0 < _v26; _v0++) {
        let _v0 = _v21.transformPropOrder[_v0],
          _v1 = _v0[_v0];
        if (void 0 === _v1) continue;
        let _v2 = !0;
        if (!(_v2 = "number" == typeof _v1 ? _v1 === +!!_v0.startsWith("scale") : 0 === parseFloat(_v1)) || _v2) {
          let _v0 = _v23(_v1, _v24.numberValueTypes[_v0]);
          if (!_v2) {
            _v4 = !1;
            let _v0 = _v25[_v0] || _v0;
            _v3 += `${_v0}(${_v0}) `;
          }
          _v2 && (_v1[_v0] = _v0);
        }
      }
      return _v3 = _v3.trim(), _v2 ? _v3 = _v2(_v1, _v4 ? "" : _v3) : _v4 && (_v3 = "none"), _v3;
    }(_v1, _v0.transform, _v2) : _v3.transform && (_v3.transform = "none")), _v7) {
      let {
        originX: _v0 = "50%",
        originY: _v1 = "50%",
        originZ: _v2 = 0
      } = _v5;
      _v3.transformOrigin = `${_v0} ${_v1} ${_v2}`;
    }
  }
  var _v28 = _v0.i(0);
  let _v29 = {
      offset: "stroke-dashoffset",
      array: "stroke-dasharray"
    },
    _v30 = {
      offset: "strokeDashoffset",
      array: "strokeDasharray"
    };
  function _v31(_v0, _v1, _v2) {
    return "string" == typeof _v0 ? _v0 : _v28.px.transform(_v1 + _v2 * _v0);
  }
  function _v32(_v0, {
    attrX: _v1,
    attrY: _v2,
    attrScale: _v3,
    originX: _v4,
    originY: _v5,
    pathLength: _v6,
    pathSpacing: _v7 = 1,
    pathOffset: _v8 = 0,
    ..._v9
  }, _v10, _v11) {
    let _v12, _v13;
    if (_v27(_v0, _v9, _v11), _v10) {
      _v0.style.viewBox && (_v0.attrs.viewBox = _v0.style.viewBox);
      return;
    }
    _v0.attrs = _v0.style, _v0.style = {};
    let {
      attrs: _v14,
      style: _v15,
      dimensions: _v16
    } = _v0;
    _v14.transform && (_v16 && (_v15.transform = _v14.transform), delete _v14.transform), _v16 && (void 0 !== _v4 || void 0 !== _v5 || _v15.transform) && (_v12 = _v31(void 0 !== _v4 ? _v4 : .5, _v16.x, _v16.width), _v13 = _v31(void 0 !== _v5 ? _v5 : .5, _v16.y, _v16.height), _v15.transformOrigin = `${_v12} ${_v13}`), void 0 !== _v1 && (_v14.x = _v1), void 0 !== _v2 && (_v14.y = _v2), void 0 !== _v3 && (_v14.scale = _v3), void 0 !== _v6 && function (_v0, _v1, _v2 = 1, _v3 = 0, _v4 = !0) {
      _v0.pathLength = 1;
      let _v5 = _v4 ? _v29 : _v30;
      _v0[_v5.offset] = _v28.px.transform(-_v3);
      let _v6 = _v28.px.transform(_v1),
        _v7 = _v28.px.transform(_v2);
      _v0[_v5.array] = `${_v6} ${_v7}`;
    }(_v14, _v6, _v7, _v8, !1);
  }
  let _v33 = () => ({
      style: {},
      transform: {},
      transformOrigin: {},
      vars: {}
    }),
    _v34 = () => ({
      ..._v33(),
      attrs: {}
    }),
    _v35 = _v0 => "string" == typeof _v0 && "svg" === _v0.toLowerCase();
  var _v36 = _v0.i(0);
  function _v37(_v0, {
    style: _v1,
    vars: _v2
  }, _v3, _v4) {
    for (let _v0 in Object.assign(_v0.style, _v1, _v4 && _v4.getProjectionStyles(_v3)), _v2) _v0.style.setProperty(_v0, _v2[_v0]);
  }
  let _v38 = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
  function _v39(_v0, _v1, _v2, _v3) {
    for (let _v0 in _v37(_v0, _v1, void 0, _v3), _v1.attrs) _v0.setAttribute(_v38.has(_v0) ? _v0 : (0, _v36.camelToDash)(_v0), _v1.attrs[_v0]);
  }
  var _v40 = _v0.i(0),
    _v41 = _v0.i(0);
  function _v42(_v0, {
    layout: _v1,
    layoutId: _v2
  }) {
    return _v21.transformProps.has(_v0) || _v0.startsWith("origin") || (_v1 || void 0 !== _v2) && (!!_v41.scaleCorrectors[_v0] || "opacity" === _v0);
  }
  function _v43(_v0, _v1, _v2) {
    var _v3;
    let {
        style: _v4
      } = _v0,
      _v5 = {};
    for (let _v0 in _v4) ((0, _v40.isMotionValue)(_v4[_v0]) || _v1.style && (0, _v40.isMotionValue)(_v1.style[_v0]) || _v42(_v0, _v0) || (null == (_v3 = null == _v2 ? void 0 : _v2.getValue(_v0)) ? void 0 : _v3.liveStyle) !== void 0) && (_v5[_v0] = _v4[_v0]);
    return _v5;
  }
  function _v44(_v0, _v1, _v2) {
    let _v3 = _v43(_v0, _v1, _v2);
    for (let _v0 in _v0) ((0, _v40.isMotionValue)(_v0[_v0]) || (0, _v40.isMotionValue)(_v1[_v0])) && (_v3[-1 !== _v21.transformPropOrder.indexOf(_v0) ? "attr" + _v0.charAt(0).toUpperCase() + _v0.substring(1) : _v0] = _v0[_v0]);
    return _v3;
  }
  let _v45 = ["x", "y", "width", "height", "cx", "cy", "r"],
    _v46 = {
      useVisualState: _v20({
        scrapeMotionValuesFromProps: _v44,
        createRenderState: _v34,
        onUpdate: ({
          props: _v0,
          prevProps: _v1,
          current: _v2,
          renderState: _v3,
          latestValues: _v4
        }) => {
          if (!_v2) return;
          let _v5 = !!_v0.drag;
          if (!_v5) {
            for (let _v0 in _v4) if (_v21.transformProps.has(_v0)) {
              _v5 = !0;
              break;
            }
          }
          if (!_v5) return;
          let _v6 = !_v1;
          if (_v1) for (let _v0 = 0; _v0 < _v45.length; _v0++) {
            let _v0 = _v45[_v0];
            _v0[_v0] !== _v1[_v0] && (_v6 = !0);
          }
          _v6 && _v11.frame.read(() => {
            try {
              _v3.dimensions = "function" == typeof _v2.getBBox ? _v2.getBBox() : _v2.getBoundingClientRect();
            } catch (_v0) {
              _v3.dimensions = {
                x: 0,
                y: 0,
                width: 0,
                height: 0
              };
            }
            _v11.frame.render(() => {
              _v32(_v3, _v4, _v35(_v2.tagName), _v0.transformTemplate), _v39(_v2, _v3);
            });
          });
        }
      })
    },
    _v47 = {
      useVisualState: _v20({
        scrapeMotionValuesFromProps: _v43,
        createRenderState: _v33
      })
    };
  function _v48(_v0, _v1, _v2) {
    for (let _v0 in _v1) (0, _v40.isMotionValue)(_v1[_v0]) || _v42(_v0, _v2) || (_v0[_v0] = _v1[_v0]);
  }
  let _v49 = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
  function _v50(_v0) {
    return _v0.startsWith("while") || _v0.startsWith("drag") && "draggable" !== _v0 || _v0.startsWith("layout") || _v0.startsWith("onTap") || _v0.startsWith("onPan") || _v0.startsWith("onLayout") || _v49.has(_v0);
  }
  let _v51 = _v0 => !_v50(_v0);
  try {
    (_v1 = _v0.r(0).default) && (_v51 = _v0 => _v0.startsWith("on") ? !_v50(_v0) : _v1(_v0));
  } catch (_v0) {}
  var _v52 = _v0.i(0);
  _v0.i(0);
  var _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0);
  let _v59 = {
      current: null
    },
    _v60 = {
      current: !1
    };
  var _v61 = _v0.i(0),
    _v62 = _v0.i(0),
    _v63 = _v0.i(0),
    _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0),
    _v67 = _v0.i(0);
  let _v68 = [..._v66.dimensionValueTypes, _v65.color, _v63.complex],
    _v69 = new WeakMap();
  var _v70 = _v0.i(0);
  let _v71 = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
  class _v72 {
    scrapeMotionValuesFromProps(_v0, _v1, _v2) {
      return {};
    }
    constructor({
      parent: _v0,
      props: _v1,
      presenceContext: _v2,
      reducedMotionConfig: _v3,
      blockInitialAnimation: _v4,
      visualState: _v5
    }, _v6 = {}) {
      this.current = null, this.children = new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map(), this.KeyframeResolver = _v70.KeyframeResolver, this.features = {}, this.valueSubscriptions = new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
        this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
      }, this.renderScheduledAt = 0, this.scheduleRender = () => {
        let _v0 = _v53.time.now();
        this.renderScheduledAt < _v0 && (this.renderScheduledAt = _v0, _v11.frame.render(this.render, !1, !0));
      };
      const {
        latestValues: _v7,
        renderState: _v8,
        onUpdate: _v9
      } = _v5;
      this.onUpdate = _v9, this.latestValues = _v7, this.baseTarget = {
        ..._v7
      }, this.initialValues = _v1.initial ? {
        ..._v7
      } : {}, this.renderState = _v8, this.parent = _v0, this.props = _v1, this.presenceContext = _v2, this.depth = _v0 ? _v0.depth + 1 : 0, this.reducedMotionConfig = _v3, this.options = _v6, this.blockInitialAnimation = !!_v4, this.isControllingVariants = (0, _v16.isControllingVariants)(_v1), this.isVariantNode = (0, _v16.isVariantNode)(_v1), this.isVariantNode && (this.variantChildren = new Set()), this.manuallyAnimateOnMount = !!(_v0 && _v0.current);
      const {
        willChange: _v10,
        ..._v11
      } = this.scrapeMotionValuesFromProps(_v1, {}, this);
      for (const _v0 in _v11) {
        const _v0 = _v11[_v0];
        void 0 !== _v7[_v0] && (0, _v40.isMotionValue)(_v0) && _v0.set(_v7[_v0], !1);
      }
    }
    mount(_v0) {
      this.current = _v0, _v69.set(_v0, this), this.projection && !this.projection.instance && this.projection.mount(_v0), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((_v0, _v1) => this.bindToMotionValue(_v1, _v0)), _v60.current || function () {
        if (_v60.current = !0, _v58.isBrowser) if (window.matchMedia) {
          let _v0 = window.matchMedia("(prefers-reduced-motion)"),
            _v1 = () => _v59.current = _v0.matches;
          _v0.addListener(_v1), _v1();
        } else _v59.current = !1;
      }(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || _v59.current), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
    }
    unmount() {
      for (let _v0 in _v69.delete(this.current), this.projection && this.projection.unmount(), (0, _v11.cancelFrame)(this.notifyUpdate), (0, _v11.cancelFrame)(this.render), this.valueSubscriptions.forEach(_v0 => _v0()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this), this.events) this.events[_v0].clear();
      for (let _v0 in this.features) {
        let _v0 = this.features[_v0];
        _v0 && (_v0.unmount(), _v0.isMounted = !1);
      }
      this.current = null;
    }
    bindToMotionValue(_v0, _v1) {
      let _v2;
      this.valueSubscriptions.has(_v0) && this.valueSubscriptions.get(_v0)();
      let _v3 = _v21.transformProps.has(_v0),
        _v4 = _v1.on("change", _v0 => {
          this.latestValues[_v0] = _v0, this.props.onUpdate && _v11.frame.preRender(this.notifyUpdate), _v3 && this.projection && (this.projection.isTransformDirty = !0);
        }),
        _v5 = _v1.on("renderRequest", this.scheduleRender);
      window.MotionCheckAppearSync && (_v2 = window.MotionCheckAppearSync(this, _v0, _v1)), this.valueSubscriptions.set(_v0, () => {
        _v4(), _v5(), _v2 && _v2(), _v1.owner && _v1.stop();
      });
    }
    sortNodePosition(_v0) {
      return this.current && this.sortInstanceNodePosition && this.type === _v0.type ? this.sortInstanceNodePosition(this.current, _v0.current) : 0;
    }
    updateFeatures() {
      let _v0 = "animation";
      for (_v0 in _v54.featureDefinitions) {
        let _v0 = _v54.featureDefinitions[_v0];
        if (!_v0) continue;
        let {
          isEnabled: _v1,
          Feature: _v2
        } = _v0;
        if (!this.features[_v0] && _v2 && _v1(this.props) && (this.features[_v0] = new _v2(this)), this.features[_v0]) {
          let _v0 = this.features[_v0];
          _v0.isMounted ? _v0.update() : (_v0.mount(), _v0.isMounted = !0);
        }
      }
    }
    triggerBuild() {
      this.build(this.renderState, this.latestValues, this.props);
    }
    measureViewportBox() {
      return this.current ? this.measureInstanceViewportBox(this.current, this.props) : (0, _v55.createBox)();
    }
    getStaticValue(_v0) {
      return this.latestValues[_v0];
    }
    setStaticValue(_v0, _v1) {
      this.latestValues[_v0] = _v1;
    }
    update(_v0, _v1) {
      (_v0.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = _v0, this.prevPresenceContext = this.presenceContext, this.presenceContext = _v1;
      for (let _v0 = 0; _v0 < _v71.length; _v0++) {
        let _v0 = _v71[_v0];
        this.propEventSubscriptions[_v0] && (this.propEventSubscriptions[_v0](), delete this.propEventSubscriptions[_v0]);
        let _v1 = _v0["on" + _v0];
        _v1 && (this.propEventSubscriptions[_v0] = this.on(_v0, _v1));
      }
      this.prevMotionValues = function (_v0, _v1, _v2) {
        for (let _v0 in _v1) {
          let _v0 = _v1[_v0],
            _v1 = _v2[_v0];
          if ((0, _v40.isMotionValue)(_v0)) _v0.addValue(_v0, _v0);else if ((0, _v40.isMotionValue)(_v1)) _v0.addValue(_v0, (0, _v62.motionValue)(_v0, {
            owner: _v0
          }));else if (_v1 !== _v0) if (_v0.hasValue(_v0)) {
            let _v0 = _v0.getValue(_v0);
            !0 === _v0.liveStyle ? _v0.jump(_v0) : _v0.hasAnimated || _v0.set(_v0);
          } else {
            let _v0 = _v0.getStaticValue(_v0);
            _v0.addValue(_v0, (0, _v62.motionValue)(void 0 !== _v0 ? _v0 : _v0, {
              owner: _v0
            }));
          }
        }
        for (let _v0 in _v2) void 0 === _v1[_v0] && _v0.removeValue(_v0);
        return _v1;
      }(this, this.scrapeMotionValuesFromProps(_v0, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this);
    }
    getProps() {
      return this.props;
    }
    getVariant(_v0) {
      return this.props.variants ? this.props.variants[_v0] : void 0;
    }
    getDefaultTransition() {
      return this.props.transition;
    }
    getTransformPagePoint() {
      return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
      return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
    }
    addVariantChild(_v0) {
      let _v1 = this.getClosestVariantNode();
      if (_v1) return _v1.variantChildren && _v1.variantChildren.add(_v0), () => _v1.variantChildren.delete(_v0);
    }
    addValue(_v0, _v1) {
      let _v2 = this.values.get(_v0);
      _v1 !== _v2 && (_v2 && this.removeValue(_v0), this.bindToMotionValue(_v0, _v1), this.values.set(_v0, _v1), this.latestValues[_v0] = _v1.get());
    }
    removeValue(_v0) {
      this.values.delete(_v0);
      let _v1 = this.valueSubscriptions.get(_v0);
      _v1 && (_v1(), this.valueSubscriptions.delete(_v0)), delete this.latestValues[_v0], this.removeValueFromRenderState(_v0, this.renderState);
    }
    hasValue(_v0) {
      return this.values.has(_v0);
    }
    getValue(_v0, _v1) {
      if (this.props.values && this.props.values[_v0]) return this.props.values[_v0];
      let _v2 = this.values.get(_v0);
      return void 0 === _v2 && void 0 !== _v1 && (_v2 = (0, _v62.motionValue)(null === _v1 ? void 0 : _v1, {
        owner: this
      }), this.addValue(_v0, _v2)), _v2;
    }
    readValue(_v0, _v1) {
      var _v2;
      let _v3 = void 0 === this.latestValues[_v0] && this.current ? null != (_v2 = this.getBaseTargetFromProps(this.props, _v0)) ? _v2 : this.readValueFromInstance(this.current, _v0, this.options) : this.latestValues[_v0];
      if (null != _v3) {
        if ("string" == typeof _v3 && ((0, _v56.isNumericalString)(_v3) || (0, _v57.isZeroValueString)(_v3))) _v3 = parseFloat(_v3);else {
          let _v0;
          _v0 = _v3, !_v68.find((0, _v67.testValueType)(_v0)) && _v63.complex.test(_v1) && (_v3 = (0, _v64.getAnimatableNone)(_v0, _v1));
        }
        this.setBaseTarget(_v0, (0, _v40.isMotionValue)(_v3) ? _v3.get() : _v3);
      }
      return (0, _v40.isMotionValue)(_v3) ? _v3.get() : _v3;
    }
    setBaseTarget(_v0, _v1) {
      this.baseTarget[_v0] = _v1;
    }
    getBaseTarget(_v0) {
      var _v1;
      let _v2,
        {
          initial: _v3
        } = this.props;
      if ("string" == typeof _v3 || "object" == typeof _v3) {
        let _v0 = (0, _v17.resolveVariantFromProps)(this.props, _v3, null == (_v1 = this.presenceContext) ? void 0 : _v1.custom);
        _v0 && (_v2 = _v0[_v0]);
      }
      if (_v3 && void 0 !== _v2) return _v2;
      let _v4 = this.getBaseTargetFromProps(this.props, _v0);
      return void 0 === _v4 || (0, _v40.isMotionValue)(_v4) ? void 0 !== this.initialValues[_v0] && void 0 === _v2 ? void 0 : this.baseTarget[_v0] : _v4;
    }
    on(_v0, _v1) {
      return this.events[_v0] || (this.events[_v0] = new _v61.SubscriptionManager()), this.events[_v0].add(_v1);
    }
    notify(_v0, ..._v1) {
      this.events[_v0] && this.events[_v0].notify(..._v1);
    }
  }
  var _v73 = _v0.i(0);
  class _v74 extends _v72 {
    constructor() {
      super(...arguments), this.KeyframeResolver = _v73.DOMKeyframesResolver;
    }
    sortInstanceNodePosition(_v0, _v1) {
      return 2 & _v0.compareDocumentPosition(_v1) ? 1 : -1;
    }
    getBaseTargetFromProps(_v0, _v1) {
      return _v0.style ? _v0.style[_v1] : void 0;
    }
    removeValueFromRenderState(_v0, {
      vars: _v1,
      style: _v2
    }) {
      delete _v1[_v0], delete _v2[_v0];
    }
    handleChildMotionValue() {
      this.childSubscription && (this.childSubscription(), delete this.childSubscription);
      let {
        children: _v0
      } = this.props;
      (0, _v40.isMotionValue)(_v0) && (this.childSubscription = _v0.on("change", _v0 => {
        this.current && (this.current.textContent = `${_v0}`);
      }));
    }
  }
  var _v75 = _v0.i(0);
  class _v76 extends _v74 {
    constructor() {
      super(...arguments), this.type = "html", this.renderInstance = _v37;
    }
    readValueFromInstance(_v0, _v1) {
      if (_v21.transformProps.has(_v1)) {
        let _v0 = (0, _v75.getDefaultValueType)(_v1);
        return _v0 && _v0.default || 0;
      }
      {
        let _v0 = window.getComputedStyle(_v0),
          _v1 = ((0, _v22.isCSSVariableName)(_v1) ? _v0.getPropertyValue(_v1) : _v0[_v1]) || 0;
        return "string" == typeof _v1 ? _v1.trim() : _v1;
      }
    }
    measureInstanceViewportBox(_v0, {
      transformPagePoint: _v1
    }) {
      return (0, _v52.measureViewportBox)(_v0, _v1);
    }
    build(_v0, _v1, _v2) {
      _v27(_v0, _v1, _v2.transformTemplate);
    }
    scrapeMotionValuesFromProps(_v0, _v1, _v2) {
      return _v43(_v0, _v1, _v2);
    }
  }
  class _v77 extends _v74 {
    constructor() {
      super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = _v55.createBox;
    }
    getBaseTargetFromProps(_v0, _v1) {
      return _v0[_v1];
    }
    readValueFromInstance(_v0, _v1) {
      if (_v21.transformProps.has(_v1)) {
        let _v0 = (0, _v75.getDefaultValueType)(_v1);
        return _v0 && _v0.default || 0;
      }
      return _v1 = _v38.has(_v1) ? _v1 : (0, _v36.camelToDash)(_v1), _v0.getAttribute(_v1);
    }
    scrapeMotionValuesFromProps(_v0, _v1, _v2) {
      return _v44(_v0, _v1, _v2);
    }
    build(_v0, _v1, _v2) {
      _v32(_v0, _v1, this.isSVGTag, _v2.transformTemplate);
    }
    renderInstance(_v0, _v1, _v2, _v3) {
      _v39(_v0, _v1, _v2, _v3);
    }
    mount(_v0) {
      this.isSVGTag = _v35(_v0.tagName), super.mount(_v0);
    }
  }
  let _v78 = (_v2 = {
      ..._v5.animations,
      ..._v7.gestureAnimations,
      ..._v6.drag,
      ..._v8.layout
    }, _v3 = (_v0, _v1) => (0, _v10.isSVGComponent)(_v0) ? new _v77(_v1) : new _v76(_v1, {
      allowProjection: _v0 !== _v12.Fragment
    }), function (_v0, {
      forwardMotionProps: _v1
    } = {
      forwardMotionProps: !1
    }) {
      let _v2 = {
        ...((0, _v10.isSVGComponent)(_v0) ? _v46 : _v47),
        preloadedFeatures: _v2,
        useRender: function (_v0 = !1) {
          return (_v0, _v1, _v2, {
            latestValues: _v3
          }, _v4) => {
            let _v5 = ((0, _v10.isSVGComponent)(_v0) ? function (_v0, _v1, _v2, _v3) {
                let _v4 = (0, _v12.useMemo)(() => {
                  let _v0 = _v34();
                  return _v32(_v0, _v1, _v35(_v3), _v0.transformTemplate), {
                    ..._v0.attrs,
                    style: {
                      ..._v0.style
                    }
                  };
                }, [_v1]);
                if (_v0.style) {
                  let _v0 = {};
                  _v48(_v0, _v0.style, _v0), _v4.style = {
                    ..._v0,
                    ..._v4.style
                  };
                }
                return _v4;
              } : function (_v0, _v1) {
                let _v2,
                  _v3,
                  _v4 = {},
                  _v5 = (_v2 = _v0.style || {}, _v48(_v3 = {}, _v2, _v0), Object.assign(_v3, function ({
                    transformTemplate: _v0
                  }, _v1) {
                    return (0, _v12.useMemo)(() => {
                      let _v0 = _v33();
                      return _v27(_v0, _v1, _v0), Object.assign({}, _v0.vars, _v0.style);
                    }, [_v1]);
                  }(_v0, _v1)), _v3);
                return _v0.drag && !1 !== _v0.dragListener && (_v4.draggable = !1, _v5.userSelect = _v5.WebkitUserSelect = _v5.WebkitTouchCallout = "none", _v5.touchAction = !0 === _v0.drag ? "none" : `pan-${"x" === _v0.drag ? "y" : "x"}`), void 0 === _v0.tabIndex && (_v0.onTap || _v0.onTapStart || _v0.whileTap) && (_v4.tabIndex = 0), _v4.style = _v5, _v4;
              })(_v1, _v3, _v4, _v0),
              _v6 = function (_v0, _v1, _v2) {
                let _v3 = {};
                for (let _v0 in _v0) ("values" !== _v0 || "object" != typeof _v0.values) && (_v51(_v0) || !0 === _v2 && _v50(_v0) || !_v1 && !_v50(_v0) || _v0.draggable && _v0.startsWith("onDrag")) && (_v3[_v0] = _v0[_v0]);
                return _v3;
              }(_v1, "string" == typeof _v0, _v0),
              _v7 = _v0 !== _v12.Fragment ? {
                ..._v6,
                ..._v5,
                ref: _v2
              } : {},
              {
                children: _v8
              } = _v1,
              _v9 = (0, _v12.useMemo)(() => (0, _v40.isMotionValue)(_v8) ? _v8.get() : _v8, [_v8]);
            return (0, _v12.createElement)(_v0, {
              ..._v7,
              children: _v9
            });
          };
        }(_v1),
        createVisualElement: _v3,
        Component: _v0
      };
      return (0, _v9.createRendererMotionComponent)(_v2);
    }),
    _v79 = (0, _v4.createDOMMotionComponentProxy)(_v78);
  _v0.s(["motion", 0, _v79], 0);
}