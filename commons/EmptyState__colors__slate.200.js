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
    _v15 = _v0.i(0);
  let _v16 = (0, _v3.default)(async () => {
    let {
      AreaGraph: _v0
    } = await _v0.A(0);
    return {
      default: _v0
    };
  }, {
    loadableGenerated: {
      modules: [0]
    },
    loading: () => (0, _v1.jsx)(_v5.Box, {
      width: "66%",
      height: "100%"
    })
  });
  _v0.s(["EmptyState", 0, ({
    isMobile: _v0,
    header: _v1,
    isExternal: _v2
  }) => {
    let _v3 = (0, _v10.useViewer)(),
      [_v4, _v5] = (0, _v9.useToken)("colors", ["slate.200", "grayscale.600"]),
      _v6 = (0, _v8.useColorModeValue)(_v4, _v5);
    return (0, _v1.jsx)(_v15.Widget, {
      name: "analytics_overview",
      isMobile: _v0,
      header: {
        to: _v1 ? "/analytics" : "/analytics/video",
        title: _v1 || _v11.translations.overview,
        bpTarget: "Video Report"
      },
      isExternal: _v2,
      children: (0, _v1.jsxs)(_v5.Box, {
        children: [(0, _v1.jsx)(_v5.Box, {
          marginTop: _v0 ? "0.5rem" : "-1rem",
          marginBottom: _v0 ? "1.25rem" : "0.85rem",
          children: (0, _v1.jsx)(_v4.Text, {
            variant: "body-xl",
            fontSize: "0.688rem",
            color: "text-secondary",
            opacity: .3,
            children: _v11.translations.dateRange(_v2.DateTime.fromISO("2023-10-01"), _v2.DateTime.fromISO("2023-11-01"), _v3?.locale ?? "en")
          })
        }), (0, _v1.jsxs)(_v5.Box, {
          display: "grid",
          gap: "1rem",
          gridTemplateColumns: _v0 ? "1fr" : "minmax(68%, 1fr) minmax(187px, 308px)",
          gridTemplateRows: _v0 ? "9.875rem 3rem" : "",
          maxHeight: "12.5rem",
          height: "12.5rem",
          children: [(0, _v1.jsx)(_v5.Box, {
            display: "contents",
            children: (0, _v1.jsx)(_v16, {
              color: _v6,
              data: _v13.mockEmptyStateData,
              isMobile: _v0,
              dataKey: "views"
            })
          }), (0, _v1.jsx)(_v5.Box, {
            children: _v0 ? (0, _v1.jsx)(_v6.Flex, {
              gap: "0.5rem",
              justifyContent: "center",
              marginTop: "-0.3rem",
              children: Object.keys(_v12.DataKey).map(_v0 => (0, _v1.jsx)(_v7.Button, {
                variant: "secondary",
                disabled: "views" === _v12.DataKey[_v0],
                children: _v11.translations[_v12.DataKey[_v0]]
              }, _v0))
            }) : (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsx)(_v14.EmptyNumberCard, {
                isActive: !0,
                trend: 1,
                dataKey: "views"
              }, "views"), (0, _v1.jsx)(_v14.EmptyNumberCard, {
                isActive: !1,
                trend: -1,
                dataKey: "impressions"
              }, "impressions"), (0, _v1.jsx)(_v14.EmptyNumberCard, {
                isActive: !1,
                trend: 0,
                dataKey: "uniqueViewers"
              }, "uniqueViewers")]
            })
          }), (0, _v1.jsx)(_v5.Box, {
            position: "absolute",
            height: _v0 ? "14rem" : "15rem",
            width: "100%",
            bg: "surface",
            opacity: .5,
            zIndex: 1,
            left: "0"
          })]
        }), (0, _v1.jsx)(_v6.Flex, {
          justifyContent: "center",
          children: (0, _v1.jsxs)(_v6.Flex, {
            position: "absolute",
            top: "40%",
            zIndex: 1,
            flexDirection: "column",
            alignItems: "center",
            maxWidth: _v0 ? "17.5rem" : "22.5rem",
            textAlign: "center",
            children: [(0, _v1.jsx)(_v4.Text, {
              variant: "heading-md",
              color: "text-primary",
              marginBottom: "1rem",
              children: _v11.translations.emptyStateHeader
            }), (0, _v1.jsx)(_v4.Text, {
              variant: "body-lg",
              color: "text-secondary",
              children: _v11.translations.emptyStateDescription
            })]
          })
        })]
      })
    });
  }]);
}