{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = (0, _v1.memo)(({
    fonts: _v0
  }) => ((0, _v1.useLayoutEffect)(() => function (_v0) {
    let _v1 = _v0.map(_v0 => {
      let _v1 = _v3.graphicsConfig.FONTS.AVAILABLE_FONTS[_v0].family;
      return `
        @font-face {
          font-family: '${_v1}';
          src: url('${_v3.graphicsConfig.FONTS.FONTS_PATH}live/${_v1}/${_v1}-Regular.ttf')
           format('truetype');
        }

        @font-face {
          font-family: '${_v1}';
          font-weight: bold;
          src: url('${_v3.graphicsConfig.FONTS.FONTS_PATH}live/${_v1}/${_v1}-Bold.ttf')
           format('truetype');
        }
      `;
    }).join("\n");
    if (!document.getElementById("live-font-css")) {
      let _v0 = document.getElementsByTagName("head")[0],
        _v1 = document.createElement("style");
      _v1.id = "live-font-css", _v1.innerHTML = _v1, _v0.appendChild(_v1);
    }
  }(_v0), [_v0]), (0, _v2.jsx)("div", {
    style: {
      opacity: 0,
      zIndex: -1,
      position: "absolute"
    },
    children: _v0.map(_v0 => {
      let _v1 = _v3.graphicsConfig.FONTS.AVAILABLE_FONTS[_v0].family,
        _v2 = _v3.graphicsConfig.FONTS.AVAILABLE_FONTS[_v0].displayName;
      return (0, _v2.jsxs)("div", {
        children: [(0, _v2.jsx)("span", {
          style: {
            fontFamily: _v1
          },
          children: "A"
        }), (0, _v2.jsx)("span", {
          style: {
            fontFamily: _v1,
            fontWeight: "bold"
          },
          children: "A"
        })]
      }, _v2);
    })
  })));
  _v0.s(["FontsProvider", 0, _v4], 0);
}