{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  let _v8 = {
      FADE: "fade",
      SCALE_FADE: "scale-fade",
      SLIDE: "slide",
      SLIDE_FADE: "slide-fade"
    },
    _v9 = {
      [_v8.FADE]: _v2.Fade,
      [_v8.SCALE_FADE]: _v3.ScaleFade,
      [_v8.SLIDE]: _v4.Slide,
      [_v8.SLIDE_FADE]: _v5.SlideFade
    };
  _v0.s(["UITransitionContainer", 0, ({
    type: _v0 = _v8.FADE,
    options: _v1 = {},
    children: _v2
  }) => {
    let _v3 = (0, _v7.useAppSelector)(_v6.isEditorUITransitioningAllowedSelector),
      _v4 = (0, _v7.useAppSelector)(_v6.isEditorUITransitioningSelector);
    if (!_v3) return (0, _v1.jsx)(_v1.Fragment, {
      children: _v2
    });
    let _v5 = _v9[_v0];
    return _v5 ? (0, _v1.jsx)(_v5, {
      in: !_v4,
      ..._v1,
      children: _v2
    }) : (console.error(`Invalid transition type: ${_v0}`), (0, _v1.jsx)(_v1.Fragment, {
      children: _v2
    }));
  }, "UITransitionType", 0, _v8]);
}