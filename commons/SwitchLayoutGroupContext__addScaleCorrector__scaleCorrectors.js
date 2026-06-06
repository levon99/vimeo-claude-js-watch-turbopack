{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = (0, _v4.createContext)({});
  _v0.s(["SwitchLayoutGroupContext", 0, _v7], 0);
  let _v8 = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
  };
  var _v9 = _v0.i(0);
  function _v10(_v0, _v1) {
    return _v1.max === _v1.min ? 0 : _v0 / (_v1.max - _v1.min) * 100;
  }
  let _v11 = {
    correct: (_v0, _v1) => {
      if (!_v1.target) return _v0;
      if ("string" == typeof _v0) if (!_v9.px.test(_v0)) return _v0;else _v0 = parseFloat(_v0);
      let _v2 = _v10(_v0, _v1.target.x),
        _v3 = _v10(_v0, _v1.target.y);
      return `${_v2}% ${_v3}%`;
    }
  };
  var _v12 = _v0.i(0),
    _v13 = _v0.i(0);
  let _v14 = {};
  function _v15(_v0) {
    Object.assign(_v14, _v0);
  }
  _v0.s(["addScaleCorrector", 0, _v15, "scaleCorrectors", 0, _v14], 0);
  let {
    schedule: _v16,
    cancel: _v17
  } = (0, _v0.i(0).createRenderBatcher)(queueMicrotask, !1);
  _v0.s(["microtask", 0, _v16], 0);
  var _v18 = _v0.i(0);
  class _v19 extends _v4.Component {
    componentDidMount() {
      let {
          visualElement: _v0,
          layoutGroup: _v1,
          switchLayoutGroup: _v2,
          layoutId: _v3
        } = this.props,
        {
          projection: _v4
        } = _v0;
      _v15(_v21), _v4 && (_v1.group && _v1.group.add(_v4), _v2 && _v2.register && _v3 && _v2.register(_v4), _v4.root.didUpdate(), _v4.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }), _v4.setOptions({
        ..._v4.options,
        onExitComplete: () => this.safeToRemove()
      })), _v8.hasEverUpdated = !0;
    }
    getSnapshotBeforeUpdate(_v0) {
      let {
          layoutDependency: _v1,
          visualElement: _v2,
          drag: _v3,
          isPresent: _v4
        } = this.props,
        _v5 = _v2.projection;
      return _v5 && (_v5.isPresent = _v4, _v3 || _v0.layoutDependency !== _v1 || void 0 === _v1 ? _v5.willUpdate() : this.safeToRemove(), _v0.isPresent !== _v4 && (_v4 ? _v5.promote() : _v5.relegate() || _v18.frame.postRender(() => {
        let _v0 = _v5.getStack();
        _v0 && _v0.members.length || this.safeToRemove();
      }))), null;
    }
    componentDidUpdate() {
      let {
        projection: _v0
      } = this.props.visualElement;
      _v0 && (_v0.root.didUpdate(), _v16.postRender(() => {
        !_v0.currentAnimation && _v0.isLead() && this.safeToRemove();
      }));
    }
    componentWillUnmount() {
      let {
          visualElement: _v0,
          layoutGroup: _v1,
          switchLayoutGroup: _v2
        } = this.props,
        {
          projection: _v3
        } = _v0;
      _v3 && (_v3.scheduleCheckAfterUnmount(), _v1 && _v1.group && _v1.group.remove(_v3), _v2 && _v2.deregister && _v2.deregister(_v3));
    }
    safeToRemove() {
      let {
        safeToRemove: _v0
      } = this.props;
      _v0 && _v0();
    }
    render() {
      return null;
    }
  }
  function _v20(_v0) {
    let [_v1, _v2] = (0, _v5.usePresence)(),
      _v3 = (0, _v4.useContext)(_v6.LayoutGroupContext);
    return (0, _v3.jsx)(_v19, {
      ..._v0,
      layoutGroup: _v3,
      switchLayoutGroup: (0, _v4.useContext)(_v7),
      isPresent: _v1,
      safeToRemove: _v2
    });
  }
  let _v21 = {
    borderRadius: {
      ..._v11,
      applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: _v11,
    borderTopRightRadius: _v11,
    borderBottomLeftRadius: _v11,
    borderBottomRightRadius: _v11,
    boxShadow: {
      correct: (_v0, {
        treeScale: _v1,
        projectionDelta: _v2
      }) => {
        let _v3 = _v13.complex.parse(_v0);
        if (_v3.length > 5) return _v0;
        let _v4 = _v13.complex.createTransformer(_v0),
          _v5 = +("number" != typeof _v3[0]),
          _v6 = _v2.x.scale * _v1.x,
          _v7 = _v2.y.scale * _v1.y;
        _v3[0 + _v5] /= _v6, _v3[1 + _v5] /= _v7;
        let _v8 = (0, _v12.mixNumber)(_v6, _v7, .5);
        return "number" == typeof _v3[2 + _v5] && (_v3[2 + _v5] /= _v8), "number" == typeof _v3[3 + _v5] && (_v3[3 + _v5] /= _v8), _v4(_v3);
      }
    }
  };
  _v0.i(0);
  var _v22 = _v0.i(0);
  _v0.i(0);
  var _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0);
  let _v30 = (_v0, _v1) => _v0.depth - _v1.depth;
  class _v31 {
    constructor() {
      this.children = [], this.isDirty = !1;
    }
    add(_v0) {
      (0, _v29.addUniqueItem)(this.children, _v0), this.isDirty = !0;
    }
    remove(_v0) {
      (0, _v29.removeItem)(this.children, _v0), this.isDirty = !0;
    }
    forEach(_v0) {
      this.isDirty && this.children.sort(_v30), this.isDirty = !1, this.children.forEach(_v0);
    }
  }
  var _v32 = _v0.i(0);
  _v0.i(0);
  var _v33 = _v0.i(0),
    _v34 = _v0.i(0);
  function _v35(_v0) {
    let _v1 = (0, _v25.isMotionValue)(_v0) ? _v0.get() : _v0;
    return (0, _v34.isCustomValue)(_v1) ? _v1.toValue() : _v1;
  }
  _v0.s(["resolveMotionValue", 0, _v35], 0);
  var _v36 = _v0.i(0),
    _v37 = _v0.i(0);
  let _v38 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    _v39 = _v38.length,
    _v40 = _v0 => "string" == typeof _v0 ? parseFloat(_v0) : _v0,
    _v41 = _v0 => "number" == typeof _v0 || _v9.px.test(_v0);
  function _v42(_v0, _v1) {
    return void 0 !== _v0[_v1] ? _v0[_v1] : _v0.borderRadius;
  }
  let _v43 = _v45(0, .5, _v37.circOut),
    _v44 = _v45(.5, .95, _v23.noop);
  function _v45(_v0, _v1, _v2) {
    return _v0 => _v0 < _v0 ? 0 : _v0 > _v1 ? 1 : _v2((0, _v36.progress)(_v0, _v1, _v0));
  }
  function _v46(_v0, _v1) {
    _v0.min = _v1.min, _v0.max = _v1.max;
  }
  function _v47(_v0, _v1) {
    _v46(_v0.x, _v1.x), _v46(_v0.y, _v1.y);
  }
  function _v48(_v0, _v1) {
    _v0.translate = _v1.translate, _v0.scale = _v1.scale, _v0.originPoint = _v1.originPoint, _v0.origin = _v1.origin;
  }
  var _v49 = _v0.i(0),
    _v50 = _v0.i(0);
  function _v51(_v0, _v1, _v2, _v3, _v4) {
    return _v0 -= _v1, _v0 = (0, _v49.scalePoint)(_v0, 1 / _v2, _v3), void 0 !== _v4 && (_v0 = (0, _v49.scalePoint)(_v0, 1 / _v4, _v3)), _v0;
  }
  function _v52(_v0, _v1, [_v2, _v3, _v4], _v5, _v6) {
    !function (_v0, _v1 = 0, _v2 = 1, _v3 = .5, _v4, _v5 = _v0, _v6 = _v0) {
      if (_v9.percent.test(_v1) && (_v1 = parseFloat(_v1), _v1 = (0, _v12.mixNumber)(_v6.min, _v6.max, _v1 / 100) - _v6.min), "number" != typeof _v1) return;
      let _v7 = (0, _v12.mixNumber)(_v5.min, _v5.max, _v3);
      _v0 === _v5 && (_v7 -= _v1), _v0.min = _v51(_v0.min, _v1, _v2, _v7, _v4), _v0.max = _v51(_v0.max, _v1, _v2, _v7, _v4);
    }(_v0, _v1[_v2], _v1[_v3], _v1[_v4], _v1.scale, _v5, _v6);
  }
  let _v53 = ["x", "scaleX", "originX"],
    _v54 = ["y", "scaleY", "originY"];
  function _v55(_v0, _v1, _v2, _v3) {
    _v52(_v0.x, _v1, _v53, _v2 ? _v2.x : void 0, _v3 ? _v3.x : void 0), _v52(_v0.y, _v1, _v54, _v2 ? _v2.y : void 0, _v3 ? _v3.y : void 0);
  }
  var _v56 = _v0.i(0);
  function _v57(_v0) {
    return 0 === _v0.translate && 1 === _v0.scale;
  }
  function _v58(_v0) {
    return _v57(_v0.x) && _v57(_v0.y);
  }
  function _v59(_v0, _v1) {
    return _v0.min === _v1.min && _v0.max === _v1.max;
  }
  function _v60(_v0, _v1) {
    return Math.round(_v0.min) === Math.round(_v1.min) && Math.round(_v0.max) === Math.round(_v1.max);
  }
  function _v61(_v0, _v1) {
    return _v60(_v0.x, _v1.x) && _v60(_v0.y, _v1.y);
  }
  function _v62(_v0) {
    return (0, _v50.calcLength)(_v0.x) / (0, _v50.calcLength)(_v0.y);
  }
  function _v63(_v0, _v1) {
    return _v0.translate === _v1.translate && _v0.scale === _v1.scale && _v0.originPoint === _v1.originPoint;
  }
  class _v64 {
    constructor() {
      this.members = [];
    }
    add(_v0) {
      (0, _v29.addUniqueItem)(this.members, _v0), _v0.scheduleRender();
    }
    remove(_v0) {
      if ((0, _v29.removeItem)(this.members, _v0), _v0 === this.prevLead && (this.prevLead = void 0), _v0 === this.lead) {
        let _v0 = this.members[this.members.length - 1];
        _v0 && this.promote(_v0);
      }
    }
    relegate(_v0) {
      let _v1,
        _v2 = this.members.findIndex(_v0 => _v0 === _v0);
      if (0 === _v2) return !1;
      for (let _v0 = _v2; _v0 >= 0; _v0--) {
        let _v0 = this.members[_v0];
        if (!1 !== _v0.isPresent) {
          _v1 = _v0;
          break;
        }
      }
      return !!_v1 && (this.promote(_v1), !0);
    }
    promote(_v0, _v1) {
      let _v2 = this.lead;
      if (_v0 !== _v2 && (this.prevLead = _v2, this.lead = _v0, _v0.show(), _v2)) {
        _v2.instance && _v2.scheduleRender(), _v0.scheduleRender(), _v0.resumeFrom = _v2, _v1 && (_v0.resumeFrom.preserveOpacity = !0), _v2.snapshot && (_v0.snapshot = _v2.snapshot, _v0.snapshot.latestValues = _v2.animationValues || _v2.latestValues), _v0.root && _v0.root.isUpdating && (_v0.isLayoutDirty = !0);
        let {
          crossfade: _v0
        } = _v0.options;
        !1 === _v0 && _v2.hide();
      }
    }
    exitAnimationComplete() {
      this.members.forEach(_v0 => {
        let {
          options: _v1,
          resumingFrom: _v2
        } = _v0;
        _v1.onExitComplete && _v1.onExitComplete(), _v2 && _v2.options.onExitComplete && _v2.options.onExitComplete();
      });
    }
    scheduleRender() {
      this.members.forEach(_v0 => {
        _v0.instance && _v0.scheduleRender(!1);
      });
    }
    removeLeadSnapshot() {
      this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
    }
  }
  var _v65 = _v0.i(0),
    _v66 = _v0.i(0);
  let _v67 = {
      type: "projectionFrame",
      totalNodes: 0,
      resolvedTargetDeltas: 0,
      recalculatedProjection: 0
    },
    _v68 = "u" > typeof window && void 0 !== window.MotionDebug,
    _v69 = ["", "X", "Y", "Z"],
    _v70 = {
      visibility: "hidden"
    },
    _v71 = 0;
  function _v72(_v0, _v1, _v2, _v3) {
    let {
      latestValues: _v4
    } = _v1;
    _v4[_v0] && (_v2[_v0] = _v4[_v0], _v1.setStaticValue(_v0, 0), _v3 && (_v3[_v0] = 0));
  }
  function _v73({
    attachResizeListener: _v0,
    defaultParent: _v1,
    measureScroll: _v2,
    checkIsScrollRoot: _v3,
    resetTransform: _v4
  }) {
    return class {
      constructor(_v0 = {}, _v1 = null == _v1 ? void 0 : _v1()) {
        this.id = _v71++, this.animationId = 0, this.children = new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
          x: 1,
          y: 1
        }, this.eventHandlers = new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
          this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
        }, this.updateProjection = () => {
          this.projectionUpdateScheduled = !1, _v68 && (_v67.totalNodes = _v67.resolvedTargetDeltas = _v67.recalculatedProjection = 0), this.nodes.forEach(_v76), this.nodes.forEach(_v83), this.nodes.forEach(_v84), this.nodes.forEach(_v77), _v68 && window.MotionDebug.record(_v67);
        }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map(), this.latestValues = _v0, this.root = _v1 ? _v1.root || _v1 : this, this.path = _v1 ? [..._v1.path, _v1] : [], this.parent = _v1, this.depth = _v1 ? _v1.depth + 1 : 0;
        for (let _v0 = 0; _v0 < this.path.length; _v0++) this.path[_v0].shouldResetTransform = !0;
        this.root === this && (this.nodes = new _v31());
      }
      addEventListener(_v0, _v1) {
        return this.eventHandlers.has(_v0) || this.eventHandlers.set(_v0, new _v33.SubscriptionManager()), this.eventHandlers.get(_v0).add(_v1);
      }
      notifyListeners(_v0, ..._v1) {
        let _v2 = this.eventHandlers.get(_v0);
        _v2 && _v2.notify(..._v1);
      }
      hasListeners(_v0) {
        return this.eventHandlers.has(_v0);
      }
      mount(_v0, _v1 = this.root.hasTreeAnimated) {
        if (this.instance) return;
        this.isSVG = _v0 instanceof SVGElement && "svg" !== _v0.tagName, this.instance = _v0;
        let {
          layoutId: _v2,
          layout: _v3,
          visualElement: _v4
        } = this.options;
        if (_v4 && !_v4.current && _v4.mount(_v0), this.root.nodes.add(this), this.parent && this.parent.children.add(this), _v1 && (_v3 || _v2) && (this.isLayoutDirty = !0), _v0) {
          let _v0,
            _v1 = () => this.root.updateBlockedByResize = !1;
          _v0(_v0, () => {
            let _v0, _v1;
            this.root.updateBlockedByResize = !0, _v0 && _v0(), _v0 = _v28.time.now(), _v1 = ({
              timestamp: _v0
            }) => {
              let _v1 = _v0 - _v0;
              _v1 >= 250 && ((0, _v18.cancelFrame)(_v1), _v1(_v1 - 250));
            }, _v18.frame.read(_v1, !0), _v0 = () => (0, _v18.cancelFrame)(_v1), _v8.hasAnimatedSinceResize && (_v8.hasAnimatedSinceResize = !1, this.nodes.forEach(_v82));
          });
        }
        _v2 && this.root.registerSharedNode(_v2, this), !1 !== this.options.animate && _v4 && (_v2 || _v3) && this.addEventListener("didUpdate", ({
          delta: _v0,
          hasLayoutChanged: _v1,
          hasRelativeTargetChanged: _v2,
          layout: _v3
        }) => {
          if (this.isTreeAnimationBlocked()) {
            this.target = void 0, this.relativeTarget = void 0;
            return;
          }
          let _v4 = this.options.transition || _v4.getDefaultTransition() || _v90,
            {
              onLayoutAnimationStart: _v5,
              onLayoutAnimationComplete: _v6
            } = _v4.getProps(),
            _v7 = !this.targetLayout || !_v61(this.targetLayout, _v3) || _v2,
            _v8 = !_v1 && _v2;
          if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || _v8 || _v1 && (_v7 || !this.currentAnimation)) {
            this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(_v0, _v8);
            let _v0 = {
              ...(0, _v22.getValueTransition)(_v4, "layout"),
              onPlay: _v5,
              onComplete: _v6
            };
            (_v4.shouldReduceMotion || this.options.layoutRoot) && (_v0.delay = 0, _v0.type = !1), this.startAnimation(_v0);
          } else _v1 || _v82(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
          this.targetLayout = _v3;
        });
      }
      unmount() {
        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
        let _v0 = this.getStack();
        _v0 && _v0.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, (0, _v18.cancelFrame)(this.updateProjection);
      }
      blockUpdate() {
        this.updateManuallyBlocked = !0;
      }
      unblockUpdate() {
        this.updateManuallyBlocked = !1;
      }
      isUpdateBlocked() {
        return this.updateManuallyBlocked || this.updateBlockedByResize;
      }
      isTreeAnimationBlocked() {
        return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
      }
      startUpdate() {
        !this.isUpdateBlocked() && (this.isUpdating = !0, this.nodes && this.nodes.forEach(_v85), this.animationId++);
      }
      getTransformTemplate() {
        let {
          visualElement: _v0
        } = this.options;
        return _v0 && _v0.getProps().transformTemplate;
      }
      willUpdate(_v0 = !0) {
        if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
          this.options.onExitComplete && this.options.onExitComplete();
          return;
        }
        if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && function _v0(_v1) {
          if (_v1.hasCheckedOptimisedAppear = !0, _v1.root === _v1) return;
          let {
            visualElement: _v2
          } = _v1.options;
          if (!_v2) return;
          let _v3 = (0, _v27.getOptimisedAppearId)(_v2);
          if (window.MotionHasOptimisedAnimation(_v3, "transform")) {
            let {
              layout: _v0,
              layoutId: _v1
            } = _v1.options;
            window.MotionCancelOptimisedAnimation(_v3, "transform", _v18.frame, !(_v0 || _v1));
          }
          let {
            parent: _v4
          } = _v1;
          _v4 && !_v4.hasCheckedOptimisedAppear && _v0(_v4);
        }(this), this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
        this.isLayoutDirty = !0;
        for (let _v0 = 0; _v0 < this.path.length; _v0++) {
          let _v0 = this.path[_v0];
          _v0.shouldResetTransform = !0, _v0.updateScroll("snapshot"), _v0.options.layoutRoot && _v0.willUpdate(!1);
        }
        let {
          layoutId: _v1,
          layout: _v2
        } = this.options;
        if (void 0 === _v1 && !_v2) return;
        let _v3 = this.getTransformTemplate();
        this.prevTransformTemplateValue = _v3 ? _v3(this.latestValues, "") : void 0, this.updateSnapshot(), _v0 && this.notifyListeners("willUpdate");
      }
      update() {
        if (this.updateScheduled = !1, this.isUpdateBlocked()) {
          this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(_v79);
          return;
        }
        this.isUpdating || this.nodes.forEach(_v80), this.isUpdating = !1, this.nodes.forEach(_v81), this.nodes.forEach(_v74), this.nodes.forEach(_v75), this.clearAllSnapshots();
        let _v0 = _v28.time.now();
        _v18.frameData.delta = (0, _v32.clamp)(0, 0 / 60, _v0 - _v18.frameData.timestamp), _v18.frameData.timestamp = _v0, _v18.frameData.isProcessing = !0, _v18.frameSteps.update.process(_v18.frameData), _v18.frameSteps.preRender.process(_v18.frameData), _v18.frameSteps.render.process(_v18.frameData), _v18.frameData.isProcessing = !1;
      }
      didUpdate() {
        this.updateScheduled || (this.updateScheduled = !0, _v16.read(this.scheduleUpdate));
      }
      clearAllSnapshots() {
        this.nodes.forEach(_v78), this.sharedNodes.forEach(_v86);
      }
      scheduleUpdateProjection() {
        this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, _v18.frame.preRender(this.updateProjection, !1, !0));
      }
      scheduleCheckAfterUnmount() {
        _v18.frame.postRender(() => {
          this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
        });
      }
      updateSnapshot() {
        !this.snapshot && this.instance && (this.snapshot = this.measure());
      }
      updateLayout() {
        if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
        if (this.resumeFrom && !this.resumeFrom.instance) for (let _v0 = 0; _v0 < this.path.length; _v0++) this.path[_v0].updateScroll();
        let _v0 = this.layout;
        this.layout = this.measure(!1), this.layoutCorrected = (0, _v56.createBox)(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
        let {
          visualElement: _v1
        } = this.options;
        _v1 && _v1.notify("LayoutMeasure", this.layout.layoutBox, _v0 ? _v0.layoutBox : void 0);
      }
      updateScroll(_v0 = "measure") {
        let _v1 = !!(this.options.layoutScroll && this.instance);
        if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === _v0 && (_v1 = !1), _v1) {
          let _v0 = _v3(this.instance);
          this.scroll = {
            animationId: this.root.animationId,
            phase: _v0,
            isRoot: _v0,
            offset: _v2(this.instance),
            wasRoot: this.scroll ? this.scroll.isRoot : _v0
          };
        }
      }
      resetTransform() {
        if (!_v4) return;
        let _v0 = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
          _v1 = this.projectionDelta && !_v58(this.projectionDelta),
          _v2 = this.getTransformTemplate(),
          _v3 = _v2 ? _v2(this.latestValues, "") : void 0,
          _v4 = _v3 !== this.prevTransformTemplateValue;
        _v0 && (_v1 || (0, _v66.hasTransform)(this.latestValues) || _v4) && (_v4(this.instance, _v3), this.shouldResetTransform = !1, this.scheduleRender());
      }
      measure(_v0 = !0) {
        var _v1;
        let _v2 = this.measurePageBox(),
          _v3 = this.removeElementScroll(_v2);
        return _v0 && (_v3 = this.removeTransform(_v3)), _v93((_v1 = _v3).x), _v93(_v1.y), {
          animationId: this.root.animationId,
          measuredBox: _v2,
          layoutBox: _v3,
          latestValues: {},
          source: this.id
        };
      }
      measurePageBox() {
        var _v0;
        let {
          visualElement: _v1
        } = this.options;
        if (!_v1) return (0, _v56.createBox)();
        let _v2 = _v1.measureViewportBox();
        if (!((null == (_v0 = this.scroll) ? void 0 : _v0.wasRoot) || this.path.some(_v95))) {
          let {
            scroll: _v0
          } = this.root;
          _v0 && ((0, _v49.translateAxis)(_v2.x, _v0.offset.x), (0, _v49.translateAxis)(_v2.y, _v0.offset.y));
        }
        return _v2;
      }
      removeElementScroll(_v0) {
        var _v1;
        let _v2 = (0, _v56.createBox)();
        if (_v47(_v2, _v0), null == (_v1 = this.scroll) ? void 0 : _v1.wasRoot) return _v2;
        for (let _v0 = 0; _v0 < this.path.length; _v0++) {
          let _v0 = this.path[_v0],
            {
              scroll: _v1,
              options: _v2
            } = _v0;
          _v0 !== this.root && _v1 && _v2.layoutScroll && (_v1.wasRoot && _v47(_v2, _v0), (0, _v49.translateAxis)(_v2.x, _v1.offset.x), (0, _v49.translateAxis)(_v2.y, _v1.offset.y));
        }
        return _v2;
      }
      applyTransform(_v0, _v1 = !1) {
        let _v2 = (0, _v56.createBox)();
        _v47(_v2, _v0);
        for (let _v0 = 0; _v0 < this.path.length; _v0++) {
          let _v0 = this.path[_v0];
          !_v1 && _v0.options.layoutScroll && _v0.scroll && _v0 !== _v0.root && (0, _v49.transformBox)(_v2, {
            x: -_v0.scroll.offset.x,
            y: -_v0.scroll.offset.y
          }), (0, _v66.hasTransform)(_v0.latestValues) && (0, _v49.transformBox)(_v2, _v0.latestValues);
        }
        return (0, _v66.hasTransform)(this.latestValues) && (0, _v49.transformBox)(_v2, this.latestValues), _v2;
      }
      removeTransform(_v0) {
        let _v1 = (0, _v56.createBox)();
        _v47(_v1, _v0);
        for (let _v0 = 0; _v0 < this.path.length; _v0++) {
          let _v0 = this.path[_v0];
          if (!_v0.instance || !(0, _v66.hasTransform)(_v0.latestValues)) continue;
          (0, _v66.hasScale)(_v0.latestValues) && _v0.updateSnapshot();
          let _v1 = (0, _v56.createBox)();
          _v47(_v1, _v0.measurePageBox()), _v55(_v1, _v0.latestValues, _v0.snapshot ? _v0.snapshot.layoutBox : void 0, _v1);
        }
        return (0, _v66.hasTransform)(this.latestValues) && _v55(_v1, this.latestValues), _v1;
      }
      setTargetDelta(_v0) {
        this.targetDelta = _v0, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
      }
      setOptions(_v0) {
        this.options = {
          ...this.options,
          ..._v0,
          crossfade: void 0 === _v0.crossfade || _v0.crossfade
        };
      }
      clearMeasurements() {
        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
      }
      forceRelativeParentToResolveTarget() {
        this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== _v18.frameData.timestamp && this.relativeParent.resolveTargetDelta(!0);
      }
      resolveTargetDelta(_v0 = !1) {
        var _v1;
        let _v2 = this.getLead();
        this.isProjectionDirty || (this.isProjectionDirty = _v2.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = _v2.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = _v2.isSharedProjectionDirty);
        let _v3 = !!this.resumingFrom || this !== _v2;
        if (!(_v0 || _v3 && this.isSharedProjectionDirty || this.isProjectionDirty || (null == (_v1 = this.parent) ? void 0 : _v1.isProjectionDirty) || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
        let {
          layout: _v4,
          layoutId: _v5
        } = this.options;
        if (this.layout && (_v4 || _v5)) {
          if (this.resolvedRelativeTargetAt = _v18.frameData.timestamp, !this.targetDelta && !this.relativeTarget) {
            let _v0 = this.getClosestProjectingParent();
            _v0 && _v0.layout && 1 !== this.animationProgress ? (this.relativeParent = _v0, this.forceRelativeParentToResolveTarget(), this.relativeTarget = (0, _v56.createBox)(), this.relativeTargetOrigin = (0, _v56.createBox)(), (0, _v50.calcRelativePosition)(this.relativeTargetOrigin, this.layout.layoutBox, _v0.layout.layoutBox), _v47(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          if (this.relativeTarget || this.targetDelta) {
            if (this.target || (this.target = (0, _v56.createBox)(), this.targetWithTransforms = (0, _v56.createBox)()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), (0, _v50.calcRelativeBox)(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : _v47(this.target, this.layout.layoutBox), (0, _v49.applyBoxDelta)(this.target, this.targetDelta)) : _v47(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
              this.attemptToResolveRelativeTarget = !1;
              let _v0 = this.getClosestProjectingParent();
              _v0 && !!_v0.resumingFrom == !!this.resumingFrom && !_v0.options.layoutScroll && _v0.target && 1 !== this.animationProgress ? (this.relativeParent = _v0, this.forceRelativeParentToResolveTarget(), this.relativeTarget = (0, _v56.createBox)(), this.relativeTargetOrigin = (0, _v56.createBox)(), (0, _v50.calcRelativePosition)(this.relativeTargetOrigin, this.target, _v0.target), _v47(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
            }
            _v68 && _v67.resolvedTargetDeltas++;
          }
        }
      }
      getClosestProjectingParent() {
        if (!(!this.parent || (0, _v66.hasScale)(this.parent.latestValues) || (0, _v66.has2DTranslate)(this.parent.latestValues))) if (this.parent.isProjecting()) return this.parent;else return this.parent.getClosestProjectingParent();
      }
      isProjecting() {
        return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
      }
      calcProjection() {
        var _v0;
        let _v1 = this.getLead(),
          _v2 = !!this.resumingFrom || this !== _v1,
          _v3 = !0;
        if ((this.isProjectionDirty || (null == (_v0 = this.parent) ? void 0 : _v0.isProjectionDirty)) && (_v3 = !1), _v2 && (this.isSharedProjectionDirty || this.isTransformDirty) && (_v3 = !1), this.resolvedRelativeTargetAt === _v18.frameData.timestamp && (_v3 = !1), _v3) return;
        let {
          layout: _v4,
          layoutId: _v5
        } = this.options;
        if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(_v4 || _v5)) return;
        _v47(this.layoutCorrected, this.layout.layoutBox);
        let _v6 = this.treeScale.x,
          _v7 = this.treeScale.y;
        (0, _v49.applyTreeDeltas)(this.layoutCorrected, this.treeScale, this.path, _v2), _v1.layout && !_v1.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (_v1.target = _v1.layout.layoutBox, _v1.targetWithTransforms = (0, _v56.createBox)());
        let {
          target: _v8
        } = _v1;
        if (!_v8) {
          this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
          return;
        }
        this.projectionDelta && this.prevProjectionDelta ? (_v48(this.prevProjectionDelta.x, this.projectionDelta.x), _v48(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(), (0, _v50.calcBoxDelta)(this.projectionDelta, this.layoutCorrected, _v8, this.latestValues), this.treeScale.x === _v6 && this.treeScale.y === _v7 && _v63(this.projectionDelta.x, this.prevProjectionDelta.x) && _v63(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", _v8)), _v68 && _v67.recalculatedProjection++;
      }
      hide() {
        this.isVisible = !1;
      }
      show() {
        this.isVisible = !0;
      }
      scheduleRender(_v0 = !0) {
        var _v1;
        if (null == (_v1 = this.options.visualElement) || _v1.scheduleRender(), _v0) {
          let _v0 = this.getStack();
          _v0 && _v0.scheduleRender();
        }
        this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
      }
      createProjectionDeltas() {
        this.prevProjectionDelta = (0, _v56.createDelta)(), this.projectionDelta = (0, _v56.createDelta)(), this.projectionDeltaWithTransform = (0, _v56.createDelta)();
      }
      setAnimationOrigin(_v0, _v1 = !1) {
        let _v2,
          _v3 = this.snapshot,
          _v4 = _v3 ? _v3.latestValues : {},
          _v5 = {
            ...this.latestValues
          },
          _v6 = (0, _v56.createDelta)();
        this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !_v1;
        let _v7 = (0, _v56.createBox)(),
          _v8 = (_v3 ? _v3.source : void 0) !== (this.layout ? this.layout.source : void 0),
          _v9 = this.getStack(),
          _v10 = !_v9 || _v9.members.length <= 1,
          _v11 = !!(_v8 && !_v10 && !0 === this.options.crossfade && !this.path.some(_v89));
        this.animationProgress = 0, this.mixTargetDelta = _v0 => {
          let _v1 = _v0 / 0;
          if (_v87(_v6.x, _v0.x, _v1), _v87(_v6.y, _v0.y, _v1), this.setTargetDelta(_v6), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
            var _v2, _v3, _v4, _v5, _v6, _v7;
            (0, _v50.calcRelativePosition)(_v7, this.layout.layoutBox, this.relativeParent.layout.layoutBox), _v4 = this.relativeTarget, _v5 = this.relativeTargetOrigin, _v6 = _v7, _v7 = _v1, _v88(_v4.x, _v5.x, _v6.x, _v7), _v88(_v4.y, _v5.y, _v6.y, _v7), _v2 && (_v2 = this.relativeTarget, _v3 = _v2, _v59(_v2.x, _v3.x) && _v59(_v2.y, _v3.y)) && (this.isProjectionDirty = !1), _v2 || (_v2 = (0, _v56.createBox)()), _v47(_v2, this.relativeTarget);
          }
          _v8 && (this.animationValues = _v5, function (_v0, _v1, _v2, _v3, _v4, _v5) {
            _v4 ? (_v0.opacity = (0, _v12.mixNumber)(0, void 0 !== _v2.opacity ? _v2.opacity : 1, _v43(_v3)), _v0.opacityExit = (0, _v12.mixNumber)(void 0 !== _v1.opacity ? _v1.opacity : 1, 0, _v44(_v3))) : _v5 && (_v0.opacity = (0, _v12.mixNumber)(void 0 !== _v1.opacity ? _v1.opacity : 1, void 0 !== _v2.opacity ? _v2.opacity : 1, _v3));
            for (let _v0 = 0; _v0 < _v39; _v0++) {
              let _v0 = `border${_v38[_v0]}Radius`,
                _v1 = _v42(_v1, _v0),
                _v2 = _v42(_v2, _v0);
              (void 0 !== _v1 || void 0 !== _v2) && (_v1 || (_v1 = 0), _v2 || (_v2 = 0), 0 === _v1 || 0 === _v2 || _v41(_v1) === _v41(_v2) ? (_v0[_v0] = Math.max((0, _v12.mixNumber)(_v40(_v1), _v40(_v2), _v3), 0), (_v9.percent.test(_v2) || _v9.percent.test(_v1)) && (_v0[_v0] += "%")) : _v0[_v0] = _v2);
            }
            (_v1.rotate || _v2.rotate) && (_v0.rotate = (0, _v12.mixNumber)(_v1.rotate || 0, _v2.rotate || 0, _v3));
          }(_v5, _v4, this.latestValues, _v1, _v11, _v10)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = _v1;
        }, this.mixTargetDelta(0 * !!this.options.layoutRoot);
      }
      startAnimation(_v0) {
        this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && ((0, _v18.cancelFrame)(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = _v18.frame.update(() => {
          var _v0;
          let _v1;
          _v8.hasAnimatedSinceResize = !0, this.currentAnimation = (_v0 = {
            ..._v0,
            onUpdate: _v0 => {
              this.mixTargetDelta(_v0), _v0.onUpdate && _v0.onUpdate(_v0);
            },
            onComplete: () => {
              _v0.onComplete && _v0.onComplete(), this.completeAnimation();
            }
          }, (_v1 = (0, _v25.isMotionValue)(0) ? 0 : (0, _v24.motionValue)(0)).start((0, _v26.animateMotionValue)("", _v1, 0, _v0)), _v1.animation), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
        });
      }
      completeAnimation() {
        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
        let _v0 = this.getStack();
        _v0 && _v0.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
      }
      finishAnimation() {
        this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(0), this.currentAnimation.stop()), this.completeAnimation();
      }
      applyTransformsToTarget() {
        let _v0 = this.getLead(),
          {
            targetWithTransforms: _v1,
            target: _v2,
            layout: _v3,
            latestValues: _v4
          } = _v0;
        if (_v1 && _v2 && _v3) {
          if (this !== _v0 && this.layout && _v3 && _v94(this.options.animationType, this.layout.layoutBox, _v3.layoutBox)) {
            _v2 = this.target || (0, _v56.createBox)();
            let _v0 = (0, _v50.calcLength)(this.layout.layoutBox.x);
            _v2.x.min = _v0.target.x.min, _v2.x.max = _v2.x.min + _v0;
            let _v1 = (0, _v50.calcLength)(this.layout.layoutBox.y);
            _v2.y.min = _v0.target.y.min, _v2.y.max = _v2.y.min + _v1;
          }
          _v47(_v1, _v2), (0, _v49.transformBox)(_v1, _v4), (0, _v50.calcBoxDelta)(this.projectionDeltaWithTransform, this.layoutCorrected, _v1, _v4);
        }
      }
      registerSharedNode(_v0, _v1) {
        this.sharedNodes.has(_v0) || this.sharedNodes.set(_v0, new _v64()), this.sharedNodes.get(_v0).add(_v1);
        let _v2 = _v1.options.initialPromotionConfig;
        _v1.promote({
          transition: _v2 ? _v2.transition : void 0,
          preserveFollowOpacity: _v2 && _v2.shouldPreserveFollowOpacity ? _v2.shouldPreserveFollowOpacity(_v1) : void 0
        });
      }
      isLead() {
        let _v0 = this.getStack();
        return !_v0 || _v0.lead === this;
      }
      getLead() {
        var _v0;
        let {
          layoutId: _v1
        } = this.options;
        return _v1 && (null == (_v0 = this.getStack()) ? void 0 : _v0.lead) || this;
      }
      getPrevLead() {
        var _v0;
        let {
          layoutId: _v1
        } = this.options;
        return _v1 ? null == (_v0 = this.getStack()) ? void 0 : _v0.prevLead : void 0;
      }
      getStack() {
        let {
          layoutId: _v0
        } = this.options;
        if (_v0) return this.root.sharedNodes.get(_v0);
      }
      promote({
        needsReset: _v0,
        transition: _v1,
        preserveFollowOpacity: _v2
      } = {}) {
        let _v3 = this.getStack();
        _v3 && _v3.promote(this, _v2), _v0 && (this.projectionDelta = void 0, this.needsReset = !0), _v1 && this.setOptions({
          transition: _v1
        });
      }
      relegate() {
        let _v0 = this.getStack();
        return !!_v0 && _v0.relegate(this);
      }
      resetSkewAndRotation() {
        let {
          visualElement: _v0
        } = this.options;
        if (!_v0) return;
        let _v1 = !1,
          {
            latestValues: _v2
          } = _v0;
        if ((_v2.z || _v2.rotate || _v2.rotateX || _v2.rotateY || _v2.rotateZ || _v2.skewX || _v2.skewY) && (_v1 = !0), !_v1) return;
        let _v3 = {};
        _v2.z && _v72("z", _v0, _v3, this.animationValues);
        for (let _v0 = 0; _v0 < _v69.length; _v0++) _v72(`rotate${_v69[_v0]}`, _v0, _v3, this.animationValues), _v72(`skew${_v69[_v0]}`, _v0, _v3, this.animationValues);
        for (let _v0 in _v0.render(), _v3) _v0.setStaticValue(_v0, _v3[_v0]), this.animationValues && (this.animationValues[_v0] = _v3[_v0]);
        _v0.scheduleRender();
      }
      getProjectionStyles(_v0) {
        var _v1, _v2;
        if (!this.instance || this.isSVG) return;
        if (!this.isVisible) return _v70;
        let _v3 = {
            visibility: ""
          },
          _v4 = this.getTransformTemplate();
        if (this.needsReset) return this.needsReset = !1, _v3.opacity = "", _v3.pointerEvents = _v35(null == _v0 ? void 0 : _v0.pointerEvents) || "", _v3.transform = _v4 ? _v4(this.latestValues, "") : "none", _v3;
        let _v5 = this.getLead();
        if (!this.projectionDelta || !this.layout || !_v5.target) {
          let _v0 = {};
          return this.options.layoutId && (_v0.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, _v0.pointerEvents = _v35(null == _v0 ? void 0 : _v0.pointerEvents) || ""), this.hasProjected && !(0, _v66.hasTransform)(this.latestValues) && (_v0.transform = _v4 ? _v4({}, "") : "none", this.hasProjected = !1), _v0;
        }
        let _v6 = _v5.animationValues || _v5.latestValues;
        this.applyTransformsToTarget(), _v3.transform = function (_v0, _v1, _v2) {
          let _v3 = "",
            _v4 = _v0.x.translate / _v1.x,
            _v5 = _v0.y.translate / _v1.y,
            _v6 = (null == _v2 ? void 0 : _v2.z) || 0;
          if ((_v4 || _v5 || _v6) && (_v3 = `translate3d(${_v4}px, ${_v5}px, ${_v6}px) `), (1 !== _v1.x || 1 !== _v1.y) && (_v3 += `scale(${1 / _v1.x}, ${1 / _v1.y}) `), _v2) {
            let {
              transformPerspective: _v0,
              rotate: _v1,
              rotateX: _v2,
              rotateY: _v3,
              skewX: _v4,
              skewY: _v5
            } = _v2;
            _v0 && (_v3 = `perspective(${_v0}px) ${_v3}`), _v1 && (_v3 += `rotate(${_v1}deg) `), _v2 && (_v3 += `rotateX(${_v2}deg) `), _v3 && (_v3 += `rotateY(${_v3}deg) `), _v4 && (_v3 += `skewX(${_v4}deg) `), _v5 && (_v3 += `skewY(${_v5}deg) `);
          }
          let _v7 = _v0.x.scale * _v1.x,
            _v8 = _v0.y.scale * _v1.y;
          return (1 !== _v7 || 1 !== _v8) && (_v3 += `scale(${_v7}, ${_v8})`), _v3 || "none";
        }(this.projectionDeltaWithTransform, this.treeScale, _v6), _v4 && (_v3.transform = _v4(_v6, _v3.transform));
        let {
          x: _v7,
          y: _v8
        } = this.projectionDelta;
        for (let _v0 in _v3.transformOrigin = `${100 * _v7.origin}% ${100 * _v8.origin}% 0`, _v5.animationValues ? _v3.opacity = _v5 === this ? null != (_v2 = null != (_v1 = _v6.opacity) ? _v1 : this.latestValues.opacity) ? _v2 : 1 : this.preserveOpacity ? this.latestValues.opacity : _v6.opacityExit : _v3.opacity = _v5 === this ? void 0 !== _v6.opacity ? _v6.opacity : "" : void 0 !== _v6.opacityExit ? _v6.opacityExit : 0, _v14) {
          if (void 0 === _v6[_v0]) continue;
          let {
              correct: _v0,
              applyTo: _v1
            } = _v14[_v0],
            _v2 = "none" === _v3.transform ? _v6[_v0] : _v0(_v6[_v0], _v5);
          if (_v1) {
            let _v0 = _v1.length;
            for (let _v0 = 0; _v0 < _v0; _v0++) _v3[_v1[_v0]] = _v2;
          } else _v3[_v0] = _v2;
        }
        return this.options.layoutId && (_v3.pointerEvents = _v5 === this ? _v35(null == _v0 ? void 0 : _v0.pointerEvents) || "" : "none"), _v3;
      }
      clearSnapshot() {
        this.resumeFrom = this.snapshot = void 0;
      }
      resetTree() {
        this.root.nodes.forEach(_v0 => {
          var _v1;
          return null == (_v1 = _v0.currentAnimation) ? void 0 : _v1.stop();
        }), this.root.nodes.forEach(_v79), this.root.sharedNodes.clear();
      }
    };
  }
  function _v74(_v0) {
    _v0.updateLayout();
  }
  function _v75(_v0) {
    var _v1;
    let _v2 = (null == (_v1 = _v0.resumeFrom) ? void 0 : _v1.snapshot) || _v0.snapshot;
    if (_v0.isLead() && _v0.layout && _v2 && _v0.hasListeners("didUpdate")) {
      let {
          layoutBox: _v0,
          measuredBox: _v1
        } = _v0.layout,
        {
          animationType: _v2
        } = _v0.options,
        _v3 = _v2.source !== _v0.layout.source;
      "size" === _v2 ? (0, _v65.eachAxis)(_v0 => {
        let _v1 = _v3 ? _v2.measuredBox[_v0] : _v2.layoutBox[_v0],
          _v2 = (0, _v50.calcLength)(_v1);
        _v1.min = _v0[_v0].min, _v1.max = _v1.min + _v2;
      }) : _v94(_v2, _v2.layoutBox, _v0) && (0, _v65.eachAxis)(_v0 => {
        let _v1 = _v3 ? _v2.measuredBox[_v0] : _v2.layoutBox[_v0],
          _v2 = (0, _v50.calcLength)(_v0[_v0]);
        _v1.max = _v1.min + _v2, _v0.relativeTarget && !_v0.currentAnimation && (_v0.isProjectionDirty = !0, _v0.relativeTarget[_v0].max = _v0.relativeTarget[_v0].min + _v2);
      });
      let _v4 = (0, _v56.createDelta)();
      (0, _v50.calcBoxDelta)(_v4, _v0, _v2.layoutBox);
      let _v5 = (0, _v56.createDelta)();
      _v3 ? (0, _v50.calcBoxDelta)(_v5, _v0.applyTransform(_v1, !0), _v2.measuredBox) : (0, _v50.calcBoxDelta)(_v5, _v0, _v2.layoutBox);
      let _v6 = !_v58(_v4),
        _v7 = !1;
      if (!_v0.resumeFrom) {
        let _v0 = _v0.getClosestProjectingParent();
        if (_v0 && !_v0.resumeFrom) {
          let {
            snapshot: _v0,
            layout: _v1
          } = _v0;
          if (_v0 && _v1) {
            let _v0 = (0, _v56.createBox)();
            (0, _v50.calcRelativePosition)(_v0, _v2.layoutBox, _v0.layoutBox);
            let _v1 = (0, _v56.createBox)();
            (0, _v50.calcRelativePosition)(_v1, _v0, _v1.layoutBox), _v61(_v0, _v1) || (_v7 = !0), _v0.options.layoutRoot && (_v0.relativeTarget = _v1, _v0.relativeTargetOrigin = _v0, _v0.relativeParent = _v0);
          }
        }
      }
      _v0.notifyListeners("didUpdate", {
        layout: _v0,
        snapshot: _v2,
        delta: _v5,
        layoutDelta: _v4,
        hasLayoutChanged: _v6,
        hasRelativeTargetChanged: _v7
      });
    } else if (_v0.isLead()) {
      let {
        onExitComplete: _v0
      } = _v0.options;
      _v0 && _v0();
    }
    _v0.options.transition = void 0;
  }
  function _v76(_v0) {
    _v68 && _v67.totalNodes++, _v0.parent && (_v0.isProjecting() || (_v0.isProjectionDirty = _v0.parent.isProjectionDirty), _v0.isSharedProjectionDirty || (_v0.isSharedProjectionDirty = !!(_v0.isProjectionDirty || _v0.parent.isProjectionDirty || _v0.parent.isSharedProjectionDirty)), _v0.isTransformDirty || (_v0.isTransformDirty = _v0.parent.isTransformDirty));
  }
  function _v77(_v0) {
    _v0.isProjectionDirty = _v0.isSharedProjectionDirty = _v0.isTransformDirty = !1;
  }
  function _v78(_v0) {
    _v0.clearSnapshot();
  }
  function _v79(_v0) {
    _v0.clearMeasurements();
  }
  function _v80(_v0) {
    _v0.isLayoutDirty = !1;
  }
  function _v81(_v0) {
    let {
      visualElement: _v1
    } = _v0.options;
    _v1 && _v1.getProps().onBeforeLayoutMeasure && _v1.notify("BeforeLayoutMeasure"), _v0.resetTransform();
  }
  function _v82(_v0) {
    _v0.finishAnimation(), _v0.targetDelta = _v0.relativeTarget = _v0.target = void 0, _v0.isProjectionDirty = !0;
  }
  function _v83(_v0) {
    _v0.resolveTargetDelta();
  }
  function _v84(_v0) {
    _v0.calcProjection();
  }
  function _v85(_v0) {
    _v0.resetSkewAndRotation();
  }
  function _v86(_v0) {
    _v0.removeLeadSnapshot();
  }
  function _v87(_v0, _v1, _v2) {
    _v0.translate = (0, _v12.mixNumber)(_v1.translate, 0, _v2), _v0.scale = (0, _v12.mixNumber)(_v1.scale, 1, _v2), _v0.origin = _v1.origin, _v0.originPoint = _v1.originPoint;
  }
  function _v88(_v0, _v1, _v2, _v3) {
    _v0.min = (0, _v12.mixNumber)(_v1.min, _v2.min, _v3), _v0.max = (0, _v12.mixNumber)(_v1.max, _v2.max, _v3);
  }
  function _v89(_v0) {
    return _v0.animationValues && void 0 !== _v0.animationValues.opacityExit;
  }
  let _v90 = {
      duration: .45,
      ease: [.4, 0, .1, 1]
    },
    _v91 = _v0 => "u" > typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(_v0),
    _v92 = _v91("applewebkit/") && !_v91("chrome/") ? Math.round : _v23.noop;
  function _v93(_v0) {
    _v0.min = _v92(_v0.min), _v0.max = _v92(_v0.max);
  }
  function _v94(_v0, _v1, _v2) {
    return "position" === _v0 || "preserve-aspect" === _v0 && !(0, _v50.isNear)(_v62(_v1), _v62(_v2), .2);
  }
  function _v95(_v0) {
    var _v1;
    return _v0 !== _v0.root && (null == (_v1 = _v0.scroll) ? void 0 : _v1.wasRoot);
  }
  var _v96 = _v0.i(0);
  let _v97 = _v73({
      attachResizeListener: (_v0, _v1) => (0, _v96.addDomEvent)(_v0, "resize", _v1),
      measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
      }),
      checkIsScrollRoot: () => !0
    }),
    _v98 = {
      current: void 0
    },
    _v99 = _v73({
      measureScroll: _v0 => ({
        x: _v0.scrollLeft,
        y: _v0.scrollTop
      }),
      defaultParent: () => {
        if (!_v98.current) {
          let _v0 = new _v97({});
          _v0.mount(window), _v0.setOptions({
            layoutScroll: !0
          }), _v98.current = _v0;
        }
        return _v98.current;
      },
      resetTransform: (_v0, _v1) => {
        _v0.style.transform = void 0 !== _v1 ? _v1 : "none";
      },
      checkIsScrollRoot: _v0 => "fixed" === window.getComputedStyle(_v0).position
    }),
    _v100 = {
      pan: {
        Feature: _v2.PanGesture
      },
      drag: {
        Feature: _v1.DragGesture,
        ProjectionNode: _v99,
        MeasureLayout: _v20
      }
    };
  _v0.s(["drag", 0, _v100], 0);
  var _v101 = _v0.i(0),
    _v102 = _v0.i(0);
  function _v103(_v0, _v1, _v2) {
    var _v3;
    if (_v0 instanceof Element) return [_v0];
    if ("string" == typeof _v0) {
      let _v0 = document;
      _v1 && (_v0 = _v1.current);
      let _v1 = null != (_v3 = null == _v2 ? void 0 : _v2[_v0]) ? _v3 : _v0.querySelectorAll(_v0);
      return _v1 ? Array.from(_v1) : [];
    }
    return Array.from(_v0);
  }
  function _v104(_v0, _v1) {
    let _v2 = _v103(_v0),
      _v3 = new AbortController();
    return [_v2, {
      passive: !0,
      ..._v1,
      signal: _v3.signal
    }, () => _v3.abort()];
  }
  function _v105(_v0) {
    return _v0 => {
      "touch" === _v0.pointerType || (0, _v102.isDragActive)() || _v0(_v0);
    };
  }
  _v0.s(["resolveElements", 0, _v103], 0);
  var _v106 = _v0.i(0);
  function _v107(_v0, _v1, _v2) {
    let {
      props: _v3
    } = _v0;
    _v0.animationState && _v3.whileHover && _v0.animationState.setActive("whileHover", "Start" === _v2);
    let _v4 = _v3["onHover" + _v2];
    _v4 && _v18.frame.postRender(() => _v4(_v1, (0, _v106.extractEventInfo)(_v1)));
  }
  class _v108 extends _v101.Feature {
    mount() {
      let {
        current: _v0
      } = this.node;
      _v0 && (this.unmount = function (_v0, _v1, _v2 = {}) {
        let [_v3, _v4, _v5] = _v104(_v0, _v2),
          _v6 = _v105(_v0 => {
            let {
                target: _v1
              } = _v0,
              _v2 = _v1(_v0);
            if ("function" != typeof _v2 || !_v1) return;
            let _v3 = _v105(_v0 => {
              _v2(_v0), _v1.removeEventListener("pointerleave", _v3);
            });
            _v1.addEventListener("pointerleave", _v3, _v4);
          });
        return _v3.forEach(_v0 => {
          _v0.addEventListener("pointerenter", _v6, _v4);
        }), _v5;
      }(_v0, _v0 => (_v107(this.node, _v0, "Start"), _v0 => _v107(this.node, _v0, "End"))));
    }
    unmount() {}
  }
  var _v109 = _v101,
    _v110 = _v0.i(0);
  class _v111 extends _v109.Feature {
    constructor() {
      super(...arguments), this.isActive = !1;
    }
    onFocus() {
      let _v0 = !1;
      try {
        _v0 = this.node.current.matches(":focus-visible");
      } catch (_v0) {
        _v0 = !0;
      }
      _v0 && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
    }
    onBlur() {
      this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
    }
    mount() {
      this.unmount = (0, _v110.pipe)((0, _v96.addDomEvent)(this.node.current, "focus", () => this.onFocus()), (0, _v96.addDomEvent)(this.node.current, "blur", () => this.onBlur()));
    }
    unmount() {}
  }
  var _v112 = _v101;
  let _v113 = (_v0, _v1) => !!_v1 && (_v0 === _v1 || _v113(_v0, _v1.parentElement));
  var _v114 = _v0.i(0);
  let _v115 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
    _v116 = new WeakSet();
  function _v117(_v0) {
    return _v0 => {
      "Enter" === _v0.key && _v0(_v0);
    };
  }
  function _v118(_v0, _v1) {
    _v0.dispatchEvent(new PointerEvent("pointer" + _v1, {
      isPrimary: !0,
      bubbles: !0
    }));
  }
  function _v119(_v0) {
    return (0, _v114.isPrimaryPointer)(_v0) && !(0, _v102.isDragActive)();
  }
  function _v120(_v0, _v1, _v2) {
    let {
      props: _v3
    } = _v0;
    _v0.animationState && _v3.whileTap && _v0.animationState.setActive("whileTap", "Start" === _v2);
    let _v4 = _v3["onTap" + ("End" === _v2 ? "" : _v2)];
    _v4 && _v18.frame.postRender(() => _v4(_v1, (0, _v106.extractEventInfo)(_v1)));
  }
  class _v121 extends _v112.Feature {
    mount() {
      let {
        current: _v0
      } = this.node;
      _v0 && (this.unmount = function (_v0, _v1, _v2 = {}) {
        let [_v3, _v4, _v5] = _v104(_v0, _v2),
          _v6 = _v0 => {
            let _v1 = _v0.currentTarget;
            if (!_v119(_v0) || _v116.has(_v1)) return;
            _v116.add(_v1);
            let _v2 = _v1(_v0),
              _v3 = (_v0, _v1) => {
                window.removeEventListener("pointerup", _v4), window.removeEventListener("pointercancel", _v5), _v119(_v0) && _v116.has(_v1) && (_v116.delete(_v1), "function" == typeof _v2 && _v2(_v0, {
                  success: _v1
                }));
              },
              _v4 = _v0 => {
                _v3(_v0, _v2.useGlobalTarget || _v113(_v1, _v0.target));
              },
              _v5 = _v0 => {
                _v3(_v0, !1);
              };
            window.addEventListener("pointerup", _v4, _v4), window.addEventListener("pointercancel", _v5, _v4);
          };
        return _v3.forEach(_v0 => {
          _v115.has(_v0.tagName) || -1 !== _v0.tabIndex || null !== _v0.getAttribute("tabindex") || (_v0.tabIndex = 0), (_v2.useGlobalTarget ? window : _v0).addEventListener("pointerdown", _v6, _v4), _v0.addEventListener("focus", _v0 => ((_v0, _v1) => {
            let _v2 = _v0.currentTarget;
            if (!_v2) return;
            let _v3 = _v117(() => {
              if (_v116.has(_v2)) return;
              _v118(_v2, "down");
              let _v0 = _v117(() => {
                _v118(_v2, "up");
              });
              _v2.addEventListener("keyup", _v0, _v1), _v2.addEventListener("blur", () => _v118(_v2, "cancel"), _v1);
            });
            _v2.addEventListener("keydown", _v3, _v1), _v2.addEventListener("blur", () => _v2.removeEventListener("keydown", _v3), _v1);
          })(_v0, _v4), _v4);
        }), _v5;
      }(_v0, _v0 => (_v120(this.node, _v0, "Start"), (_v0, {
        success: _v1
      }) => _v120(this.node, _v0, _v1 ? "End" : "Cancel")), {
        useGlobalTarget: this.node.props.globalTapTarget
      }));
    }
    unmount() {}
  }
  var _v122 = _v101;
  let _v123 = new WeakMap(),
    _v124 = new WeakMap(),
    _v125 = _v0 => {
      let _v1 = _v123.get(_v0.target);
      _v1 && _v1(_v0);
    },
    _v126 = _v0 => {
      _v0.forEach(_v125);
    },
    _v127 = {
      some: 0,
      all: 1
    };
  class _v128 extends _v122.Feature {
    constructor() {
      super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
    }
    startObserver() {
      var _v0;
      let _v1;
      this.unmount();
      let {
          viewport: _v2 = {}
        } = this.node.getProps(),
        {
          root: _v3,
          margin: _v4,
          amount: _v5 = "some",
          once: _v6
        } = _v2,
        _v7 = {
          root: _v3 ? _v3.current : void 0,
          rootMargin: _v4,
          threshold: "number" == typeof _v5 ? _v5 : _v127[_v5]
        },
        _v8 = _v0 => {
          let {
            isIntersecting: _v1
          } = _v0;
          if (this.isInView === _v1 || (this.isInView = _v1, _v6 && !_v1 && this.hasEnteredView)) return;
          _v1 && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", _v1);
          let {
              onViewportEnter: _v2,
              onViewportLeave: _v3
            } = this.node.getProps(),
            _v4 = _v1 ? _v2 : _v3;
          _v4 && _v4(_v0);
        };
      return _v0 = this.node.current, _v1 = function ({
        root: _v0,
        ..._v1
      }) {
        let _v2 = _v0 || document;
        _v124.has(_v2) || _v124.set(_v2, {});
        let _v3 = _v124.get(_v2),
          _v4 = JSON.stringify(_v1);
        return _v3[_v4] || (_v3[_v4] = new IntersectionObserver(_v126, {
          root: _v0,
          ..._v1
        })), _v3[_v4];
      }(_v7), _v123.set(_v0, _v8), _v1.observe(_v0), () => {
        _v123.delete(_v0), _v1.unobserve(_v0);
      };
    }
    mount() {
      this.startObserver();
    }
    update() {
      if ("u" < typeof IntersectionObserver) return;
      let {
        props: _v0,
        prevProps: _v1
      } = this.node;
      ["amount", "margin", "root"].some(function ({
        viewport: _v0 = {}
      }, {
        viewport: _v1 = {}
      } = {}) {
        return _v0 => _v0[_v0] !== _v1[_v0];
      }(_v0, _v1)) && this.startObserver();
    }
    unmount() {}
  }
  _v0.s(["gestureAnimations", 0, {
    inView: {
      Feature: _v128
    },
    tap: {
      Feature: _v121
    },
    focus: {
      Feature: _v111
    },
    hover: {
      Feature: _v108
    }
  }], 0), _v0.s(["layout", 0, {
    layout: {
      ProjectionNode: _v99,
      MeasureLayout: _v20
    }
  }], 0);
  let _v129 = (0, _v4.createContext)({
    strict: !1
  });
  _v0.s(["LazyContext", 0, _v129], 0);
}