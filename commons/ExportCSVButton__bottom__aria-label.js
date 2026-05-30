{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  _v0.s(["ExportCSVButton", 0, ({
    ..._v0
  }) => {
    let _v1 = (0, _v5.getTranslations)();
    return (0, _v1.jsx)(_v3.Tooltip, {
      label: _v1.ExportCSV,
      placement: "bottom",
      children: (0, _v1.jsx)(_v2.IconButton, {
        "aria-label": "export csv",
        icon: (0, _v1.jsx)(_v4.DownloadImport, {}),
        size: "md",
        variant: "tertiary",
        ..._v0
      })
    });
  }], 0);
  var _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0);
  _v0.s(["SeatCount", 0, {
    Container: ({
      children: _v0
    }) => (0, _v1.jsx)(_v6.HStack, {
      spacing: {
        base: "md",
        lg: "xl"
      },
      divider: (0, _v1.jsx)(_v9.Divider, {
        orientation: "vertical",
        borderColor: "stroke",
        height: (0, _v10.rem)(76)
      }),
      children: _v0
    }),
    Group: ({
      children: _v0,
      title: _v1,
      tooltip: _v2,
      tooltipProps: _v3 = {}
    }) => (0, _v1.jsxs)(_v7.VStack, {
      align: "flex-start",
      children: [_v1 && (0, _v1.jsxs)(_v6.HStack, {
        align: "center",
        children: [(0, _v1.jsx)(_v8.Text, {
          variant: "heading-xs",
          children: _v1
        }), _v2 && (0, _v1.jsx)(_v3.Tooltip, {
          placement: "top-start",
          label: _v2,
          shouldWrapChildren: !0,
          mt: (0, _v10.rem)(-2),
          ..._v3,
          children: (0, _v1.jsx)(_v11.InfoCircle, {
            mt: (0, _v10.rem)(-2),
            boxSize: "2xs"
          })
        })]
      }), (0, _v1.jsx)(_v6.HStack, {
        spacing: {
          base: 4,
          lg: 6
        },
        children: _v0
      })]
    }),
    Tile: ({
      label: _v0,
      value: _v1
    }) => {
      let _v2 = (0, _v12.useLocale)();
      return (0, _v1.jsxs)(_v7.VStack, {
        align: "flex-start",
        spacing: 0,
        children: [(0, _v1.jsx)(_v8.Text, {
          variant: "heading-md",
          children: _v1?.toLocaleString(_v2)
        }), (0, _v1.jsx)(_v8.Text, {
          variant: "body-md",
          color: "text-secondary",
          fontWeight: "350",
          children: _v0
        })]
      });
    }
  }], 0);
}