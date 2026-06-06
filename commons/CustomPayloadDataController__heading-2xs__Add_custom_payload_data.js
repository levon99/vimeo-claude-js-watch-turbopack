{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
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
    _v15 = _v0.i(0);
  function _v16(_v0) {
    return null === _v0 || "" === _v0 || _v0.length <= 0 && (0, _v14.isValidJson)(_v0);
  }
  _v0.s(["CustomPayloadDataController", 0, ({
    customPayloadData: _v0,
    isShown: _v1,
    isOptional: _v2,
    firstElement: _v3
  }) => {
    let _v4 = (0, _v13.useAppDispatch)(),
      [_v5, _v6] = (0, _v2.useState)(!!_v3?.interactiveHotspot?.action?.customPayloadData),
      [_v7, _v8] = (0, _v2.useState)(!0),
      [_v9, _v10] = (0, _v2.useState)(_v0 ?? "");
    if (!_v1) return null;
    let _v11 = _v5 || !_v2;
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [_v2 && (0, _v1.jsxs)(_v5.HStack, {
        children: [(0, _v1.jsx)(_v9.Text, {
          variant: "heading-2xs",
          children: "Add custom payload data"
        }), (0, _v1.jsx)(_v7.Spacer, {}), (0, _v1.jsx)(_v8.Switch, {
          size: "sm",
          onChange: () => {
            if (!_v3) return;
            let _v0 = !_v5;
            _v6(_v0);
            let _v1 = null;
            _v0 && _v16(_v9) && "" !== _v9.trim() ? _v1 = {
              customPayloadData: _v9
            } : _v0 || (_v1 = {
              customPayloadData: null
            }), _v1 && _v4((0, _v12.updateElementAction)({
              ceId: _v3?.id,
              element: {
                interactiveHotspot: {
                  action: _v1
                }
              }
            }));
          },
          isChecked: _v5,
          "data-testid": _v11.testIds.hotspots.settings.customPayloadDataSwitch
        })]
      }), _v11 && (0, _v1.jsxs)(_v3.FormControl, {
        isInvalid: !_v7,
        children: [(0, _v1.jsx)(_v10.Textarea, {
          value: _v9 ?? "",
          onChange: _v0 => {
            if (!_v3) return;
            let _v1 = _v0.target.value;
            if (_v10(_v1), _v16(_v1)) {
              _v8(!0);
              let _v0 = "" === _v1.trim() ? null : _v1;
              _v4((0, _v12.updateElementAction)({
                ceId: _v3.id,
                element: {
                  interactiveHotspot: {
                    action: {
                      customPayloadData: _v0
                    }
                  }
                }
              }));
            } else _v8(!1);
          },
          placeholder: "Enter custom payload data in JSON format",
          maxLength: 0,
          "data-testid": _v11.testIds.hotspots.settings.customPayloadDataTextarea,
          rows: 4,
          resize: "vertical",
          fontFamily: "monospace, Courier New, ABCRepro-Regular, sans-serif"
        }), (0, _v1.jsxs)(_v5.HStack, {
          justifyContent: "space-between",
          alignItems: "center",
          children: [(0, _v1.jsx)(_v4.FormErrorMessage, {
            marginTop: 0,
            fontSize: (0, _v6.rem)(12),
            "data-testid": _v11.testIds.hotspots.settings.customPayloadDataErrorMessage,
            children: "Invalid JSON format"
          }), (0, _v1.jsx)(_v15.CharacterCounter, {
            currentLength: _v9.length,
            maxLength: 0,
            textAlign: "right",
            flexGrow: 1
          })]
        })]
      })]
    });
  }], 0);
  var _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0);
  _v0.s(["JumpToTimeController", 0, ({
    inputTestId: _v0,
    value: _v1,
    onChange: _v2,
    videoSrc: _v3,
    videoDuration: _v4,
    sliderThumbTestId: _v5
  }) => (0, _v1.jsxs)(_v17.Box, {
    children: [(0, _v1.jsx)(_v17.Box, {
      borderRadius: "15px",
      overflow: "hidden",
      children: (0, _v1.jsx)(_v21.default, {
        delay: 0,
        videoUrl: _v3,
        playOnHover: !1,
        videoStartTime: _v1
      })
    }), (0, _v1.jsxs)(_v5.HStack, {
      marginTop: "10px",
      children: [(0, _v1.jsx)(_v18.Flex, {
        gap: "1rem",
        px: "1rem",
        width: "100%",
        children: (0, _v1.jsxs)(_v19.Slider, {
          onChange: _v2,
          value: _v1,
          min: 0,
          max: _v4,
          step: .1,
          children: [(0, _v1.jsx)(_v20.SliderTrack, {
            children: (0, _v1.jsx)(_v20.SliderFilledTrack, {})
          }), (0, _v1.jsx)(_v20.SliderThumb, {
            "data-testid": _v5
          })]
        })
      }), (0, _v1.jsx)(_v22.TimeInput, {
        "data-testid": _v0,
        value: _v1,
        onChange: _v2,
        width: "5.5rem"
      })]
    })]
  })], 0);
  var _v23 = _v0.i(0);
  _v0.s(["EditSheet", 0, _v0 => (0, _v1.jsx)(_v23.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsxs)("g", {
      fill: "currentColor",
      children: [(0, _v1.jsx)("path", {
        d: "M10 15.006h2.42a1 1 0 0 0 .71-.29l7.58-7.58a1.001 1.001 0 0 0 0-1.42l-2.42-2.42a1 1 0 0 0-1.42 0l-7.58 7.58a1.05 1.05 0 0 0-.29.71v2.42a1 1 0 0 0 1 1Zm1-3 6.58-6.58 1 1-6.58 6.58h-1v-1Z"
      }), (0, _v1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3 7a4 4 0 0 1 4-4h4a1 1 0 1 1 0 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4a1 1 0 1 1 2 0v4a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7Z"
      })]
    })
  })], 0);
}