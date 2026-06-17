{
  "use strict";

  _v0.s(["IMAGE_DIMENSIONS_LIMIT_10K_RESOLUTION", 0, {
    width: 0,
    height: 0
  }, "addQueryParam", 0, (_v0, _v1 = "r", _v2 = "fit") => {
    if (!_v0) return "";
    let _v3 = new URL(_v0);
    return _v3.searchParams.set(_v1, _v2), _v3.toString();
  }, "getUploadedImageDimensions", 0, function (_v0) {
    return new Promise((_v0, _v1) => {
      let _v2 = new Image();
      _v2.src = URL.createObjectURL(_v0), _v2.onload = () => {
        _v0({
          width: _v2.width,
          height: _v2.height
        });
      }, _v2.onerror = _v0 => {
        _v1(_v0);
      };
    });
  }], 0);
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
    _v15 = _v0.i(0),
    _v16 = _v0.i(0);
  let _v17 = ({
    height: _v0,
    width: _v1,
    onClick: _v2
  }) => (0, _v1.jsx)(_v4.Center, {
    height: _v0,
    width: _v1,
    backgroundColor: "stroke",
    _hover: {
      backgroundColor: "input-stroke-hover"
    },
    borderRadius: "md",
    children: (0, _v1.jsx)(_v11.Tooltip, {
      label: (0, _v16.getTranslations)().Upload,
      shouldWrapChildren: !0,
      placement: "top",
      children: (0, _v1.jsx)(_v7.IconButton, {
        "aria-label": "upload-image",
        icon: (0, _v1.jsx)(_v13.ImageUpload, {}),
        variant: "tertiary",
        onClick: _v2
      })
    })
  });
  _v0.s(["UploadableImage", 0, ({
    height: _v0,
    width: _v1,
    onChange: _v2,
    onDelete: _v3 = () => void 0,
    isImageUploaded: _v4 = !1,
    isLoading: _v5 = !1,
    header: _v6,
    tooltip: _v7,
    tooltipProps: _v8 = {},
    customFallback: _v9,
    ..._v10
  }) => {
    let _v11 = (0, _v16.getTranslations)(),
      _v12 = (0, _v2.useRef)(null),
      _v13 = () => {
        _v12.current && _v12.current.click();
      };
    return (0, _v1.jsxs)(_v12.VStack, {
      align: "start",
      children: [(0, _v1.jsxs)(_v6.HStack, {
        gap: "xs",
        children: [_v6 && (0, _v1.jsx)(_v10.Text, {
          variant: "body-sm",
          children: _v6
        }), _v7 && (0, _v1.jsx)(_v11.Tooltip, {
          label: _v7,
          shouldWrapChildren: !0,
          placement: "top",
          ..._v8,
          children: (0, _v1.jsx)(_v15.InfoCircle, {
            boxSize: "2xs"
          })
        })]
      }), _v5 && (0, _v1.jsx)(_v4.Center, {
        width: _v1,
        height: _v0,
        children: (0, _v1.jsx)(_v9.Spinner, {
          size: "sm"
        })
      }), !_v5 && _v4 && (0, _v1.jsxs)(_v3.Box, {
        position: "relative",
        width: _v1,
        height: _v0,
        children: [(0, _v1.jsx)(_v8.Image, {
          ..._v10,
          boxSize: "100%",
          position: "absolute",
          alt: "image",
          fallback: (0, _v1.jsx)(_v4.Center, {
            width: _v1,
            height: _v0,
            children: (0, _v1.jsx)(_v9.Spinner, {
              size: "sm"
            })
          })
        }), (0, _v1.jsx)(_v4.Center, {
          boxSize: "100%",
          position: "absolute",
          borderRadius: _v10.borderRadius,
          _hover: {
            opacity: +!_v5
          },
          opacity: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          children: (0, _v1.jsx)(_v11.Tooltip, {
            label: _v11.Delete,
            shouldWrapChildren: !0,
            placement: "top",
            children: (0, _v1.jsx)(_v14.TrashBin, {
              "aria-label": "delete-image",
              cursor: "pointer",
              color: "white",
              onClick: () => !_v5 && _v3()
            })
          })
        })]
      }), !_v5 && !_v4 && (0, _v1.jsx)(_v5.Dropzone, {
        border: "none",
        ref: _v12,
        onChange: _v2,
        children: "function" == typeof _v9 ? _v9({
          onEdit: _v13
        }) : (0, _v1.jsx)(_v17, {
          width: _v1,
          height: _v0,
          onClick: _v13
        })
      })]
    });
  }], 0);
}