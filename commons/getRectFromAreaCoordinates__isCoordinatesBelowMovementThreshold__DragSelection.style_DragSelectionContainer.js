{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["getRectFromAreaCoordinates", 0, _v0 => {
    let {
        x1: _v1,
        y1: _v2,
        x2: _v3,
        y2: _v4
      } = _v0,
      _v5 = Math.abs(_v3 - _v1),
      _v6 = Math.abs(_v4 - _v2);
    return {
      x: _v3 > _v1 ? _v1 : _v3,
      y: _v4 > _v2 ? _v2 : _v4,
      width: _v5,
      height: _v6
    };
  }, "isCoordinatesBelowMovementThreshold", 0, _v0 => Math.abs(_v0.x2 - _v0.x1) < _v1.DRAG_SELECTION_MIN_DISTANCE && Math.abs(_v0.y2 - _v0.y1) < _v1.DRAG_SELECTION_MIN_DISTANCE], 0);
  var _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = _v3.default.div.withConfig({
      displayName: "DragSelection.style__DragSelectionContainer",
      componentId: "sc-bc740a25-0"
    })`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  pointer-events: none;
`,
    _v6 = _v3.default.div.attrs(({
      x: _v0,
      y: _v1,
      width: _v2,
      height: _v3
    }) => ({
      style: {
        top: `${_v1}px`,
        left: `${_v0}px`,
        width: `${_v2}px`,
        height: `${_v3}px`
      }
    })).withConfig({
      displayName: "DragSelection.style__DragSelectionRect",
      componentId: "sc-bc740a25-1"
    })`
  position: absolute;

  border-radius: 2px;
  border: 1px solid ${_v4.bokehTheme.colors.blue["500"]};
  background: ${(0, _v2.rgba)(_v4.bokehTheme.colors.blue["500"], .1)};
  pointer-events: none;
`;
  _v0.s(["DragSelectionContainer", 0, _v5, "DragSelectionRect", 0, _v6], 0);
}