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
    _v11 = _v0.i(0);
  let _v12 = "1.5rem",
    _v13 = (0, _v2.forwardRef)(({
      size: _v0 = "xs",
      status: _v1 = "default",
      label: _v2 = "Upload picture",
      helperText: _v3 = "Max size 2MB",
      acceptedFormats: _v4,
      fileName: _v5 = "File.png",
      fileSize: _v6,
      previewSrc: _v7,
      accept: _v8,
      isDisabled: _v9 = !1,
      retryLabel: _v10 = "Retry upload",
      removeLabel: _v11 = "Remove image",
      cancelLabel: _v12 = "Cancel upload",
      onSelect: _v13,
      onRetry: _v14,
      onRemove: _v15,
      onCancel: _v16,
      ..._v17
    }, _v18) => {
      let _v19 = (0, _v3.useMultiStyleConfig)("ImageUploader", {
          size: _v0
        }),
        _v20 = (0, _v9.useRef)(null),
        _v21 = (0, _v9.useId)(),
        _v22 = "error" === _v1,
        _v23 = "upload-error" === _v1,
        _v24 = "uploading" === _v1,
        _v25 = "uploaded" === _v1,
        _v26 = _v24 || _v25,
        _v27 = !_v9 && ("default" === _v1 || _v22 || _v23),
        _v28 = _v26 ? _v6 : _v22 || _v23 ? _v4 ? `Please upload ${_v4}` : "Please upload a supported file" : _v3,
        _v29 = (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v4.chakra.span, {
            __css: _v19.thumb,
            "data-part": "thumb",
            children: _v24 ? (0, _v1.jsx)(_v11.Spinner, {
              size: "sm"
            }) : _v22 ? (0, _v1.jsx)(_v4.chakra.span, {
              display: "flex",
              color: "status-destructive-primary",
              children: (0, _v1.jsx)(_v5.CircleExclamation, {
                boxSize: _v12
              })
            }) : _v25 && _v7 ? (0, _v1.jsx)(_v4.chakra.img, {
              src: _v7,
              alt: _v5,
              objectFit: "cover",
              boxSize: "full"
            }) : (0, _v1.jsx)(_v6.Upload, {
              boxSize: _v12
            })
          }), (0, _v1.jsxs)(_v4.chakra.span, {
            __css: _v19.content,
            "data-part": "content",
            children: [(0, _v1.jsx)(_v4.chakra.span, {
              __css: _v19.title,
              "data-part": "title",
              children: _v26 ? _v5 : _v22 ? "Failed" : _v23 ? "File not supported" : _v2
            }), _v28 ? (0, _v1.jsx)(_v4.chakra.span, {
              __css: _v19.subtitle,
              "data-part": "subtitle",
              children: _v28
            }) : null]
          })]
        });
      return (0, _v1.jsxs)(_v4.chakra.div, {
        ref: _v18,
        __css: _v19.root,
        "data-status": _v1,
        "data-interactive": _v27 ? "true" : "false",
        ...(_v9 && {
          "data-disabled": !0
        }),
        ..._v17,
        children: [_v27 ? (0, _v1.jsx)(_v4.chakra.label, {
          htmlFor: _v21,
          __css: _v19.trigger,
          "data-part": "trigger",
          children: _v29
        }) : (0, _v1.jsx)(_v4.chakra.div, {
          __css: _v19.trigger,
          "data-part": "trigger",
          children: _v29
        }), _v25 ? (0, _v1.jsxs)(_v4.chakra.div, {
          __css: _v19.actions,
          "data-part": "actions",
          children: [_v14 ? (0, _v1.jsx)(_v10.IconButton, {
            "aria-label": _v10,
            icon: (0, _v1.jsx)(_v7.SyncRefresh, {}),
            size: "sm",
            variant: "tertiary",
            isDisabled: _v9,
            onClick: _v14
          }) : null, _v15 ? (0, _v1.jsx)(_v10.IconButton, {
            "aria-label": _v11,
            icon: (0, _v1.jsx)(_v8.CloseX, {}),
            size: "sm",
            variant: "tertiary",
            isDisabled: _v9,
            onClick: _v15
          }) : null]
        }) : _v22 || _v23 ? (0, _v1.jsx)(_v4.chakra.div, {
          __css: _v19.actions,
          "data-part": "actions",
          children: (0, _v1.jsx)(_v10.IconButton, {
            "aria-label": _v10,
            icon: (0, _v1.jsx)(_v7.SyncRefresh, {}),
            size: "sm",
            variant: "tertiary",
            isDisabled: _v9,
            onClick: () => {
              _v27 && _v20.current?.click();
            }
          })
        }) : _v24 && _v16 ? (0, _v1.jsx)(_v4.chakra.div, {
          __css: _v19.actions,
          "data-part": "actions",
          children: (0, _v1.jsx)(_v10.IconButton, {
            "aria-label": _v12,
            icon: (0, _v1.jsx)(_v8.CloseX, {}),
            size: "sm",
            variant: "tertiary",
            isDisabled: _v9,
            onClick: _v16
          })
        }) : null, (0, _v1.jsx)(_v4.chakra.input, {
          id: _v21,
          ref: _v20,
          type: "file",
          accept: _v8,
          "aria-label": _v2,
          disabled: _v9 || !_v27,
          onClick: _v0 => {
            _v0.currentTarget.value = "";
          },
          onChange: _v0 => {
            let {
              files: _v1
            } = _v0.target;
            _v1 && _v1.length > 0 && _v13?.(_v1);
          },
          __css: _v19.input
        })]
      });
    });
  _v0.s(["ImageUploader", 0, _v13]);
}