{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  let _v8 = (0, _v3.forwardRef)((_v0, _v1) => {
    let [_v2, _v3] = (0, _v4.createSplitProps)()(_v0, ["xChannel", "yChannel"]),
      _v4 = (0, _v7.useColorPickerContext)(),
      _v5 = (0, _v2.mergeProps)(_v4.getAreaProps(_v2), _v3);
    return (0, _v1.jsx)(_v6.ColorPickerAreaPropsProvider, {
      value: _v2,
      children: (0, _v1.jsx)(_v5.ark.div, {
        ..._v5,
        ref: _v1
      })
    });
  });
  _v8.displayName = "ColorPickerArea", _v0.s(["ColorPickerArea", 0, _v8], 0);
  let _v9 = (0, _v3.forwardRef)((_v0, _v1) => {
    let _v2 = (0, _v7.useColorPickerContext)(),
      _v3 = (0, _v6.useColorPickerAreaPropsContext)(),
      _v4 = (0, _v2.mergeProps)(_v2.getAreaBackgroundProps(_v3), _v0);
    return (0, _v1.jsx)(_v5.ark.div, {
      ..._v4,
      ref: _v1
    });
  });
  _v9.displayName = "ColorPickerAreaBackground", _v0.s(["ColorPickerAreaBackground", 0, _v9], 0);
  let _v10 = (0, _v3.forwardRef)((_v0, _v1) => {
    let _v2 = (0, _v7.useColorPickerContext)(),
      _v3 = (0, _v6.useColorPickerAreaPropsContext)(),
      _v4 = (0, _v2.mergeProps)(_v2.getAreaThumbProps(_v3), _v0);
    return (0, _v1.jsx)(_v5.ark.div, {
      ..._v4,
      ref: _v1
    });
  });
  _v10.displayName = "ColorPickerAreaThumb", _v0.s(["ColorPickerAreaThumb", 0, _v10], 0);
  let _v11 = (0, _v3.forwardRef)((_v0, _v1) => {
    let [_v2, _v3] = (0, _v4.createSplitProps)()(_v0, ["channel", "orientation"]),
      _v4 = (0, _v7.useColorPickerContext)(),
      _v5 = (0, _v2.mergeProps)(_v4.getChannelInputProps(_v2), _v3);
    return (0, _v1.jsx)(_v5.ark.input, {
      ..._v5,
      ref: _v1
    });
  });
  _v11.displayName = "ColorPickerChannelInput", _v0.s(["ColorPickerChannelInput", 0, _v11], 0);
  var _v12 = _v0.i(0);
  let [_v13, _v14] = (0, _v12.createContext)({
      name: "ColorPickerChannelSliderContext",
      hookName: "useColorPickerChannelSliderContext",
      providerName: "<ColorPickerChannelSliderProvider />"
    }),
    [_v15, _v16] = (0, _v12.createContext)({
      name: "ColorPickerFormatContext",
      hookName: "useColorPickerFormatPropsContext",
      providerName: "<ColorPickerFormatPropsProvider />",
      strict: !1
    });
  _v0.s(["ColorPickerFormatPropsProvider", 0, _v15, "useColorPickerFormatPropsContext", 0, _v16], 0);
  let _v17 = (0, _v3.forwardRef)((_v0, _v1) => {
    let [_v2, _v3] = (0, _v4.createSplitProps)()(_v0, ["channel", "orientation"]),
      _v4 = (0, _v7.useColorPickerContext)(),
      _v5 = _v16(),
      _v6 = {
        ..._v2,
        ..._v5
      },
      _v7 = (0, _v2.mergeProps)(_v4.getChannelSliderProps(_v6), _v3);
    return (0, _v1.jsx)(_v13, {
      value: _v2,
      children: (0, _v1.jsx)(_v5.ark.div, {
        ..._v7,
        ref: _v1
      })
    });
  });
  _v17.displayName = "ColorPickerChannelSlider", _v0.s(["ColorPickerChannelSlider", 0, _v17], 0);
  let _v18 = (0, _v3.forwardRef)((_v0, _v1) => {
    let _v2 = (0, _v7.useColorPickerContext)(),
      _v3 = _v14(),
      _v4 = (0, _v2.mergeProps)(_v2.getChannelSliderLabelProps(_v3), _v0);
    return (0, _v1.jsx)(_v5.ark.label, {
      ..._v4,
      ref: _v1
    });
  });
  _v18.displayName = "ColorPickerChannelSliderLabel", _v0.s(["ColorPickerChannelSliderLabel", 0, _v18], 0);
  let _v19 = (0, _v3.forwardRef)((_v0, _v1) => {
    let _v2 = (0, _v7.useColorPickerContext)(),
      _v3 = _v14(),
      _v4 = _v16(),
      _v5 = {
        ..._v3,
        ..._v4
      },
      _v6 = (0, _v2.mergeProps)(_v2.getChannelSliderThumbProps(_v5), _v0);
    return (0, _v1.jsx)(_v5.ark.div, {
      ..._v6,
      ref: _v1
    });
  });
  _v19.displayName = "ColorPickerChannelSliderThumb", _v0.s(["ColorPickerChannelSliderThumb", 0, _v19], 0);
  let _v20 = (0, _v3.forwardRef)((_v0, _v1) => {
    let _v2 = (0, _v7.useColorPickerContext)(),
      _v3 = _v14(),
      _v4 = _v16(),
      _v5 = {
        ..._v3,
        ..._v4
      },
      _v6 = (0, _v2.mergeProps)(_v2.getChannelSliderTrackProps(_v5), _v0);
    return (0, _v1.jsx)(_v5.ark.div, {
      ..._v6,
      ref: _v1
    });
  });
  _v20.displayName = "ColorPickerChannelSliderTrack", _v0.s(["ColorPickerChannelSliderTrack", 0, _v20], 0);
  var _v21 = _v0.i(0);
  let _v22 = (0, _v3.forwardRef)((_v0, _v1) => {
    let {
        locale: _v2
      } = (0, _v21.useLocaleContext)(),
      _v3 = (0, _v7.useColorPickerContext)(),
      _v4 = _v14(),
      _v5 = (0, _v2.mergeProps)(_v3.getChannelSliderValueTextProps(_v4), _v0);
    return (0, _v1.jsx)(_v5.ark.span, {
      ..._v5,
      ref: _v1,
      children: _v0.children || _v3.getChannelValueText(_v4.channel, _v2)
    });
  });
  _v22.displayName = "ColorPickerChannelSliderValueText", _v0.s(["ColorPickerChannelSliderValueText", 0, _v22], 0);
  var _v23 = _v0.i(0),
    _v24 = _v0.i(0);
  let _v25 = (0, _v3.forwardRef)((_v0, _v1) => {
    let _v2 = (0, _v7.useColorPickerContext)(),
      _v3 = (0, _v24.usePresenceContext)(),
      _v4 = (0, _v2.mergeProps)(_v2.getContentProps(), _v3.getPresenceProps(), _v0);
    return _v3.unmounted ? null : (0, _v1.jsx)(_v5.ark.div, {
      ..._v4,
      ref: (0, _v23.composeRefs)(_v3.ref, _v1)
    });
  });
  _v25.displayName = "ColorPickerContent", _v0.s(["ColorPickerContent", 0, _v25], 0), _v0.s(["ColorPickerContext", 0, _v0 => _v0.children((0, _v7.useColorPickerContext)())], 0);
}