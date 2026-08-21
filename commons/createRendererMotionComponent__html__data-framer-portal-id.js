{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.i(0);
  var _v2 = _v0.i(0),
    _v3 = _v0.i(0),
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
    _v18 = _v0.i(0);
  _v0.s(["createRendererMotionComponent", 0, function ({
    preloadedFeatures: _v0,
    createVisualElement: _v1,
    useRender: _v2,
    useVisualState: _v3,
    Component: _v4
  }) {
    var _v5, _v6;
    function _v7(_v0, _v1) {
      let _v2,
        _v3 = {
          ...(0, _v2.useContext)(_v5.MotionConfigContext),
          ..._v0,
          layoutId: function ({
            layoutId: _v0
          }) {
            let _v1 = (0, _v2.useContext)(_v3.LayoutGroupContext).id;
            return _v1 && void 0 !== _v0 ? _v1 + "-" + _v0 : _v0;
          }(_v0)
        },
        {
          isStatic: _v4
        } = _v3,
        _v5 = (0, _v7.useCreateMotionContext)(_v0),
        _v6 = _v3(_v0, _v4);
      if (!_v4 && _v8.isBrowser) {
        (0, _v2.useContext)(_v4.LazyContext).strict;
        let _v0 = function (_v0) {
          let {
            drag: _v1,
            layout: _v2
          } = _v9.featureDefinitions;
          if (!_v1 && !_v2) return {};
          let _v3 = {
            ..._v1,
            ..._v2
          };
          return {
            MeasureLayout: (null == _v1 ? void 0 : _v1.isEnabled(_v0)) || (null == _v2 ? void 0 : _v2.isEnabled(_v0)) ? _v3.MeasureLayout : void 0,
            ProjectionNode: _v3.ProjectionNode
          };
        }(_v3);
        _v2 = _v0.MeasureLayout, _v5.visualElement = function (_v0, _v1, _v2, _v3, _v4) {
          var _v5, _v6;
          let {
              visualElement: _v7
            } = (0, _v2.useContext)(_v6.MotionContext),
            _v8 = (0, _v2.useContext)(_v4.LazyContext),
            _v9 = (0, _v2.useContext)(_v13.PresenceContext),
            _v10 = (0, _v2.useContext)(_v5.MotionConfigContext).reducedMotion,
            _v11 = (0, _v2.useRef)(null);
          _v3 = _v3 || _v8.renderer, !_v11.current && _v3 && (_v11.current = _v3(_v0, {
            visualState: _v1,
            parent: _v7,
            props: _v2,
            presenceContext: _v9,
            blockInitialAnimation: !!_v9 && !1 === _v9.initial,
            reducedMotionConfig: _v10
          }));
          let _v12 = _v11.current,
            _v13 = (0, _v2.useContext)(_v18.SwitchLayoutGroupContext);
          _v12 && !_v12.projection && _v4 && ("html" === _v12.type || "svg" === _v12.type) && function (_v0, _v1, _v2, _v3) {
            let {
              layoutId: _v4,
              layout: _v5,
              drag: _v6,
              dragConstraints: _v7,
              layoutScroll: _v8,
              layoutRoot: _v9
            } = _v1;
            _v0.projection = new _v2(_v0.latestValues, _v1["data-framer-portal-id"] ? void 0 : function _v0(_v1) {
              if (_v1) return !1 !== _v1.options.allowProjection ? _v1.projection : _v0(_v1.parent);
            }(_v0.parent)), _v0.projection.setOptions({
              layoutId: _v4,
              layout: _v5,
              alwaysMeasureLayout: !!_v6 || _v7 && (0, _v17.isRefObject)(_v7),
              visualElement: _v0,
              animationType: "string" == typeof _v5 ? _v5 : "both",
              initialPromotionConfig: _v3,
              layoutScroll: _v8,
              layoutRoot: _v9
            });
          }(_v11.current, _v2, _v4, _v13);
          let _v14 = (0, _v2.useRef)(!1);
          (0, _v2.useInsertionEffect)(() => {
            _v12 && _v14.current && _v12.update(_v2, _v9);
          });
          let _v15 = _v2[_v15.optimizedAppearDataAttribute],
            _v16 = (0, _v2.useRef)(!!_v15 && !(null == (_v5 = window.MotionHandoffIsComplete) ? void 0 : _v5.call(window, _v15)) && (null == (_v6 = window.MotionHasOptimisedAnimation) ? void 0 : _v6.call(window, _v15)));
          return (0, _v14.useIsomorphicLayoutEffect)(() => {
            _v12 && (_v14.current = !0, window.MotionIsMounted = !0, _v12.updateFeatures(), _v16.microtask.render(_v12.render), _v16.current && _v12.animationState && _v12.animationState.animateChanges());
          }), (0, _v2.useEffect)(() => {
            _v12 && (!_v16.current && _v12.animationState && _v12.animationState.animateChanges(), _v16.current && (queueMicrotask(() => {
              var _v0;
              null == (_v0 = window.MotionHandoffMarkAsComplete) || _v0.call(window, _v15);
            }), _v16.current = !1));
          }), _v12;
        }(_v4, _v6, _v3, _v1, _v0.ProjectionNode);
      }
      return (0, _v1.jsxs)(_v6.MotionContext.Provider, {
        value: _v5,
        children: [_v2 && _v5.visualElement ? (0, _v1.jsx)(_v2, {
          visualElement: _v5.visualElement,
          ..._v3
        }) : null, _v2(_v4, _v0, (0, _v12.useMotionRef)(_v6, _v5.visualElement, _v1), _v6, _v4, _v5.visualElement)]
      });
    }
    _v0 && (0, _v10.loadFeatures)(_v0), _v7.displayName = `motion.${"string" == typeof _v4 ? _v4 : `create(${null != (_v6 = null != (_v5 = _v4.displayName) ? _v5 : _v4.name) ? _v6 : ""})`}`;
    let _v8 = (0, _v2.forwardRef)(_v7);
    return _v8[_v11.motionComponentSymbol] = _v4, _v8;
  }], 0);
  let _v19 = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
  _v0.s(["isSVGComponent", 0, function (_v0) {
    if ("string" != typeof _v0 || _v0.includes("-")) ;else if (_v19.indexOf(_v0) > -1 || /[A-Z]/u.test(_v0)) return !0;
    return !1;
  }], 0);
}