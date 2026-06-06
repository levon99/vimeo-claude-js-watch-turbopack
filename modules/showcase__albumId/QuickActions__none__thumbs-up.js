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
  _v0.s(["QuickActions", 0, ({
    isReplacing: _v0,
    isSaving: _v1,
    onCopyClick: _v2,
    onSaveClick: _v3,
    onThumbsDownClick: _v4,
    onThumbsUpClick: _v5,
    generationId: _v6,
    ratedFeature: _v7,
    showSave: _v8 = !1,
    showCopy: _v9 = !1,
    showThumbs: _v10 = !1
  }) => {
    let [_v11, _v12] = (0, _v2.useState)("none"),
      {
        sendThumbsOnVideoTitleClickEvent: _v13
      } = (0, _v13.useGetSvvManageBpEvents)(),
      _v14 = (0, _v15.useBokehToast)(),
      _v15 = _v0 => {
        let _v1 = _v0.currentTarget.dataset.thumb;
        _v1 !== _v11 && ("thumbs-up" === _v1 && (_v5?.(), _v13(_v7, _v6 ?? null, !0)), "thumbs-down" === _v1 && (_v4?.(), _v13(_v7, _v6 ?? null, !1)), _v1 !== _v11 && _v14?.(_v14.feedback), _v12(_v0 => _v0 === _v1 ? "none" : _v1));
      };
    return (0, _v1.jsxs)(_v3.Box, {
      display: "flex",
      gap: (0, _v6.rem)(4),
      padding: "0",
      minHeight: (0, _v6.rem)(24),
      justifyContent: "center",
      alignItems: "center",
      children: [_v8 && (0, _v1.jsx)(_v5.Tooltip, {
        label: _v0 ? _v14.replace : _v14.save,
        placement: "top",
        children: (0, _v1.jsx)(_v4.IconButton, {
          "aria-label": _v0 ? _v14.replace : _v14.save,
          icon: (0, _v1.jsx)(_v7.Checkmark, {
            color: "text-secondary",
            _hover: {
              color: "text-primary"
            }
          }),
          isLoading: _v1,
          onClick: _v3,
          size: "xs",
          variant: "tertiary"
        })
      }), _v9 && (0, _v1.jsx)(_v5.Tooltip, {
        label: _v14.copy,
        placement: "top",
        children: (0, _v1.jsx)(_v4.IconButton, {
          "aria-label": _v14.copy,
          icon: (0, _v1.jsx)(_v8.Clipboard, {
            color: "text-secondary",
            _hover: {
              color: "text-primary"
            }
          }),
          variant: "tertiary",
          size: "xs",
          onClick: () => {
            _v2?.(), _v14?.(_v14.copied);
          }
        })
      }), _v10 && (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v5.Tooltip, {
          label: _v14.good,
          placement: "top",
          children: (0, _v1.jsx)(_v4.IconButton, {
            "aria-label": _v14.good,
            "data-thumb": "thumbs-up",
            icon: "thumbs-up" === _v11 ? (0, _v1.jsx)(_v10.ThumbUpFilled, {
              color: "text-secondary",
              _hover: {
                color: "text-primary"
              }
            }) : (0, _v1.jsx)(_v9.ThumbUp, {
              color: "text-secondary",
              _hover: {
                color: "text-primary"
              }
            }),
            onClick: _v15,
            variant: "tertiary",
            size: "xs"
          })
        }), (0, _v1.jsx)(_v5.Tooltip, {
          label: _v14.bad,
          placement: "top",
          children: (0, _v1.jsx)(_v4.IconButton, {
            "aria-label": _v14.bad,
            "data-thumb": "thumbs-down",
            icon: "thumbs-down" === _v11 ? (0, _v1.jsx)(_v12.ThumbDownFilled, {
              color: "text-secondary"
            }) : (0, _v1.jsx)(_v11.ThumbDown, {
              color: "text-secondary",
              _hover: {
                color: "text-primary"
              }
            }),
            onClick: _v15,
            variant: "tertiary",
            size: "xs"
          })
        })]
      })]
    });
  }]);
}