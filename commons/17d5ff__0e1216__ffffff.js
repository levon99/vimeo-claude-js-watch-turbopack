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
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0);
  let _v18 = {
      vimeo: {
        background: "#17d5ff",
        foreground: "#0e1216"
      },
      wetransfer: {
        background: "#000000",
        foreground: "#ffffff"
      },
      evernote: {
        background: "#00a82d",
        foreground: "#ffffff"
      },
      harvest: {
        background: "#fa5d00",
        foreground: "#ffffff"
      },
      splice: {
        background: "#181d26",
        foreground: "#ffffff"
      },
      mileiq: {
        background: "#ffa800",
        foreground: "#000000"
      },
      issuu: {
        background: "#F26F61",
        foreground: "#ffffff"
      },
      komoot: {
        background: "#546825",
        foreground: "#ffffff"
      },
      aol: {
        background: "#f8d551",
        foreground: "#000000"
      },
      remini: {
        background: "#AB2022",
        foreground: "#ffffff"
      },
      meetup: {
        background: "#ff4a79",
        foreground: "#ffffff"
      },
      streamyard: {
        background: "#1461e1",
        foreground: "#ffffff"
      },
      airtable: {
        background: "#ffffff",
        foreground: "#000000"
      },
      tractive: {
        background: "#007fc8",
        foreground: "#ffffff"
      }
    },
    _v19 = {
      vimeo: {
        Component: _v15.default,
        viewBox: "0 0 36.6473 31.7456"
      },
      wetransfer: {
        Component: _v16.default,
        viewBox: "0 0 49.9121 23.6514"
      },
      evernote: {
        Component: _v7.default,
        viewBox: "0 0 40.0197 48.2361"
      },
      harvest: {
        Component: _v8.default,
        viewBox: "0 0 40.114 40.1152"
      },
      mileiq: {
        Component: _v12.default,
        viewBox: "0 0 40.7109 39.1651"
      },
      issuu: {
        Component: _v9.default,
        viewBox: "0 0 44.8702 44.7133"
      },
      komoot: {
        Component: _v10.default,
        viewBox: "0 0 45.6231 54.1481"
      },
      meetup: {
        Component: _v11.default,
        viewBox: "0 0 51.1179 48.5572"
      },
      aol: {
        Component: _v6.default,
        viewBox: "0 0 56 20"
      },
      streamyard: {
        Component: _v13.default,
        viewBox: "0 0 50.7234 37"
      },
      airtable: {
        Component: _v5.default,
        viewBox: "0 0 46 46"
      },
      tractive: {
        Component: _v14.default,
        viewBox: "0 0 43.359 50.332"
      }
    };
  Object.keys(_v19);
  let _v20 = 16.05 / 67.5;
  _v0.s(["ProductTileView", 0, ({
    productId: _v0,
    size: _v1,
    logoScale: _v2 = .75,
    borderRadius: _v3
  }) => {
    let {
        background: _v4,
        foreground: _v5
      } = _v18[_v0],
      _v6 = (0, _v3.rem)(_v1 * (1 - _v2) / 2),
      _v7 = _v3 ?? (0, _v3.rem)(_v1 * _v20);
    return (0, _v1.jsx)(_v2.Flex, {
      width: (0, _v3.rem)(_v1),
      height: (0, _v3.rem)(_v1),
      background: _v4,
      borderRadius: _v7,
      padding: _v6,
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      flexShrink: 0,
      children: ((_v0, _v1) => {
        let _v2 = _v19[_v0];
        if (void 0 === _v2) return null;
        let _v3 = _v2.Component;
        return (0, _v1.jsx)(_v3, {
          ..._v1,
          viewBox: _v2.viewBox
        });
      })(_v0, {
        style: {
          width: "100%",
          height: "100%",
          display: "block"
        }
      }) ?? (0, _v1.jsx)(_v4.Text, {
        variant: "body-sm",
        color: _v5,
        fontWeight: "medium",
        children: _v17.PRODUCT_NAMES[_v0]
      })
    });
  }]);
}