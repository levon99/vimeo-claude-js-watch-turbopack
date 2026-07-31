{
  "use strict";

  _v0.s(["InspectorManager", () => _v13, "openLastApplicableInspectorAction", () => _v12]);
  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0);
  let _v11 = () => !0,
    _v12 = ({
      skipCurrentInspector: _v0 = !1
    } = {}) => (_v0, _v1) => {
      let _v2 = _v1(),
        _v3 = [..._v2.inspector.inspectorsHistory],
        _v4 = 0;
      for (_v0 && (_v3.pop(), _v4++); _v3.length > 0;) {
        let _v0 = {
            ..._v2,
            inspector: {
              ..._v2.inspector,
              inspectorsHistory: [..._v3]
            }
          },
          _v1 = (0, _v7.lastInspectorSelector)(_v0),
          _v2 = _v5.inspectorsMap[_v1];
        if ((_v2 && "isApplicable" in _v2 && _v2.isApplicable ? _v2.isApplicable : _v11)(_v0)) {
          _v4 > 0 && (_v0((0, _v7.removeInspectorHistoryStepsAction)({
            steps: _v4
          })), _v4 = 0);
          break;
        }
        _v3.pop(), _v4++;
      }
      _v4 > 0 && _v0((0, _v7.removeInspectorHistoryStepsAction)({
        steps: _v4
      }));
    },
    _v13 = () => {
      let _v0 = (0, _v9.useAppSelector)(_v7.currentInspectorSelector),
        _v1 = _v0 && _v5.inspectorsMap[_v0],
        _v2 = (0, _v9.useAppSelector)(_v7.inspectorWidthSelector),
        _v3 = (0, _v9.useAppSelector)(_v8.isLoadingStoryboardSelector),
        _v4 = (0, _v6.useInspectorGuard)(),
        [_v5, _v6] = (0, _v2.useState)(null),
        _v7 = (0, _v2.useCallback)(_v0 => {
          null !== _v0 && _v6(_v0.getBoundingClientRect().left);
        }, []);
      if (!_v4 || !_v1) return null;
      let {
        component: _v8
      } = _v1;
      return (0, _v1.jsx)(_v10.UITransitionContainer, {
        type: _v10.UITransitionType.SLIDE_FADE,
        options: {
          enterDuration: "lg",
          exitDuration: "md",
          offsetX: -340
        },
        children: (0, _v1.jsxs)(_v3.Box, {
          padding: "16px 16px 16px 0",
          position: "relative",
          height: "100%",
          display: "flex",
          ref: _v7,
          zIndex: 1,
          children: [(0, _v1.jsx)(_v3.Box, {
            width: _v2,
            height: "100%",
            ...(_v3 && {
              opacity: .2,
              pointerEvents: "none"
            }),
            position: "relative",
            children: (0, _v1.jsx)(_v8, {}, _v0)
          }), (0, _v1.jsx)(_v4.InspectorHandle, {
            inspectorLeft: _v5
          })]
        })
      });
    };
}