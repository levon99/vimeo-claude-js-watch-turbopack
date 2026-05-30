{
  "use strict";

  var _v1,
    _v2,
    _v3 = _v0.i(0);
  (_v1 = _v2 || (_v2 = {})).Red = "#E22B12", _v1.Blue = "#00adef", _v1.Green = "#28A878", _v1.Yellow = "#ffb21e", _v1.Slate = "#657987", _v1.Grayscale = "#666666", _v1.black = "#000000", _v1.white = "#FFFFFF", _v1.Fuschia = "#ED72C2", _v1.Cerise = "#FF6678", _v1.Vermilion = "#E75A32", _v1.Peridot = "#9DB753", _v1.Cerulean = "#008285", _v1.Lapis = "#4B7AC2", _v1.Amethyst = "#8697FB", _v1.Taupe = "#BBA69C", _v1.Violet = "#743ED9";
  var _v4 = {
      50: "#fee7e5",
      100: "#fdd1cb",
      200: "#faa599",
      300: "#f77866",
      350: "#f5624e",
      400: "#f34c35",
      500: "#E22B12",
      525: "#e21f05",
      600: "#c01902",
      700: "#911100",
      800: "#610c00",
      850: "#480800",
      900: "#300600",
      950: "#170300"
    },
    _v5 = {
      50: "#fff7e8",
      100: "#ffefd2",
      200: "#ffe0a5",
      300: "#ffd078",
      350: "#ffc961",
      400: "#ffc14b",
      500: "#ffb21e",
      525: "#ffad0f",
      600: "#da920a",
      700: "#a56e06",
      800: "#6f4a03",
      850: "#533702",
      900: "#372500",
      950: "#1b1200"
    },
    _v6 = {
      50: "#e8f7f1",
      100: "#d3eee3",
      200: "#a7dec7",
      300: "#7cccab",
      350: "#66c49d",
      400: "#52ba90",
      500: "#28A878",
      525: "#269f6e",
      600: "#1e885c",
      700: "#166646",
      800: "#0e452f",
      850: "#0a3424",
      900: "#052316",
      950: "#02110b"
    },
    _v7 = function (_v0) {
      return _v6[_v0] || _v28(_v2.Green, _v0);
    },
    _v8 = {
      50: "#e5f5fd",
      100: "#c8edff",
      200: "#99d9f8",
      300: "#5cc9ff",
      350: "#4cbdf3",
      400: "#33b3f2",
      500: "#00adef",
      525: "#0099e3",
      600: "#0080bf",
      700: "#00608f",
      800: "#00405f",
      850: "#002f47",
      900: "#00202f",
      950: "#001017"
    },
    _v9 = function (_v0) {
      return _v8[_v0] || _v28(_v2.Blue, _v0);
    },
    _v10 = {
      50: "#eef1f4",
      100: "#dee4e9",
      200: "#bdcad3",
      300: "#9caebd",
      350: "#8da1b1",
      400: "#7c93a6",
      500: "#657987",
      525: "#597286",
      600: "#496073",
      700: "#364857",
      800: "#23313b",
      850: "#1a252c",
      900: "#11191d",
      950: "#080d0f"
    },
    _v11 = function (_v0) {
      return _v10[_v0] || _v28(_v2.Slate, _v0);
    },
    _v12 = {
      50: "#efefef",
      100: "#e0e0e0",
      200: "#c1c1c1",
      300: "#a3a3a3",
      350: "#939393",
      400: "#848484",
      500: "#666666",
      525: "#606060",
      600: "#515151",
      700: "#3d3d3d",
      800: "#282828",
      850: "#1e1e1e",
      900: "#141414",
      950: "#0a0a0a"
    },
    _v13 = function (_v0) {
      return _v12[_v0] || _v28(_v2.Grayscale, _v0, !0);
    },
    _v14 = {
      50: "#ffeef8",
      100: "#ffdef3",
      200: "#febfe8",
      300: "#ff9fdd",
      350: "#fe90d8",
      400: "#fd81d2",
      500: "#ED72C2",
      525: "#f35abd",
      600: "#d642a3",
      700: "#a72b7b",
      800: "#701b53",
      850: "#55143e",
      900: "#390c29",
      950: "#1c0615"
    },
    _v15 = {
      50: "#ffefe7",
      100: "#ffe0d1",
      200: "#ffc2a3",
      300: "#ffa575",
      350: "#fe965f",
      400: "#fc894a",
      500: "#E75A32",
      525: "#dc512e",
      600: "#ba3826",
      700: "#8d1d1b",
      800: "#5f1117",
      850: "#480c14",
      900: "#30070e",
      950: "#180308"
    },
    _v16 = function (_v0) {
      return _v15[_v0] || _v28(_v2.Vermilion, _v0);
    },
    _v17 = {
      50: "#fbf8e9",
      100: "#f7f4d5",
      200: "#edecaf",
      300: "#dde189",
      350: "#d1da78",
      400: "#c4d367",
      500: "#9DB753",
      525: "#91bb40",
      600: "#6da232",
      700: "#437d21",
      800: "#1f5713",
      850: "#14410d",
      900: "#092c08",
      950: "#041605"
    },
    _v18 = function (_v0) {
      return _v17[_v0] || _v28(_v2.Peridot, _v0);
    },
    _v19 = {
      50: "#e1f6ec",
      100: "#c6ecdc",
      200: "#8ed9c2",
      300: "#5ac1aa",
      350: "#40b5a3",
      400: "#2ba597",
      500: "#008285",
      525: "#006d7e",
      600: "#00586a",
      700: "#003e4f",
      800: "#002735",
      850: "#001c27",
      900: "#00111a",
      950: "#00080d"
    },
    _v20 = function (_v0) {
      return _v19[_v0] || _v28(_v2.Cerulean, _v0);
    },
    _v21 = {
      50: "#e9f0fc",
      100: "#d3e2fa",
      200: "#acc7f1",
      300: "#88afe5",
      350: "#77a1de",
      400: "#6895d5",
      500: "#4B7AC2",
      525: "#3672c9",
      600: "#2460b3",
      700: "#12478f",
      800: "#052e66",
      850: "#01234f",
      900: "#001934",
      950: "#000c1a"
    },
    _v22 = function (_v0) {
      return _v21[_v0] || _v28(_v2.Lapis, _v0);
    },
    _v23 = {
      50: "#f5f1ff",
      100: "#ebe5ff",
      200: "#d3ccff",
      300: "#b7b3ff",
      350: "#a7a7ff",
      400: "#9b9ffe",
      500: "#8697FB",
      525: "#7e8bef",
      600: "#6468cf",
      700: "#4540a6",
      800: "#312574",
      850: "#271a59",
      900: "#190f3d",
      950: "#0e071f"
    },
    _v24 = function (_v0) {
      return _v23[_v0] || _v28(_v2.Amethyst, _v0);
    },
    _v25 = {
      50: "#fbf8f2",
      100: "#f6f0e6",
      200: "#ebdfcf",
      300: "#deccbb",
      350: "#d6c3b2",
      400: "#cdb8aa",
      500: "#BBA69C",
      525: "#b09e95",
      600: "#918680",
      700: "#6a6663",
      800: "#444",
      850: "#333",
      900: "#222",
      950: "#101010"
    },
    _v26 = function (_v0) {
      return _v25[_v0] || _v28(_v2.Taupe, _v0);
    },
    _v27 = {
      0: "#FFFFFF",
      50: "#FAFCFD",
      100: "#ded5f5",
      200: "#c1aded",
      300: "#a686eb",
      400: "#8a5ee8",
      500: "#743ed9",
      600: "#5e1ec9",
      700: "#49179d",
      800: "#341070",
      900: "#0a0e12",
      0: "#000000"
    },
    _v28 = function (_v0, _v1, _v2) {
      var _v3, _v4, _v5, _v6, _v7, _v8, _v9, _v10, _v11, _v12, _v13, _v14, _v15, _v16, _v17, _v18, _v19;
      return void 0 === _v2 && (_v2 = !1), 500 === _v1 ? _v3 = _v0 : _v1 > 500 ? (_v5 = (_v4 = {
        color: _v0,
        grade: _v1,
        grayscale: _v2
      }).color, _v6 = _v4.grade, _v8 = void 0 !== (_v7 = _v4.grayscale) && _v7, _v6 = _v6 / 100 - 5, _v9 = _v8 ? 0 : _v6 / 50 + _v31(_v5, _v6, "darken"), _v10 = _v8 ? 0 : _v30(_v5, _v6, "darken"), _v11 = _v6 / 5, _v3 = _v29(_v5).shade(_v11).saturate(_v9).adjustHue(_v10).end()) : _v1 < 500 && (_v13 = (_v12 = {
        color: _v0,
        grade: _v1,
        grayscale: _v2
      }).color, _v14 = _v12.grade, _v16 = void 0 !== (_v15 = _v12.grayscale) && _v15, _v17 = (_v14 = -(_v14 / 100 * 1) + 5) / 5, _v18 = _v16 ? 0 : _v30(_v13, _v14, "lighten"), _v19 = _v16 ? 0 : _v14 / 100 + _v31(_v13, _v14, "lighten"), _v3 = _v29(_v13).tint(_v17).saturate(_v19).adjustHue(_v18).end()), _v3;
    };
  function _v29(_v0) {
    return {
      tint: function (_v0) {
        return _v29((0, _v3.tint)(_v0, _v0));
      },
      shade: function (_v0) {
        return _v29((0, _v3.shade)(_v0, _v0));
      },
      saturate: function (_v0) {
        return _v29((0, _v3.saturate)(_v0, _v0));
      },
      adjustHue: function (_v0) {
        return _v29((0, _v3.adjustHue)(_v0, _v0));
      },
      end: function () {
        return _v0;
      }
    };
  }
  function _v30(_v0, _v1, _v2) {
    switch (void 0 === _v1 && (_v1 = 0), void 0 === _v2 && (_v2 = "darken"), _v0) {
      case _v9(500):
        return 3;
      case _v7(500):
        return -2;
      case _v11(500):
        return 1;
      case _v16(500):
        if ("lighten" === _v2) return 8 + -.25 * _v1;
        return -6 * _v1;
      case _v18(500):
        if ("lighten" === _v2) return -2 + -5 * _v1;
        return 3 + 10 * _v1;
      case _v20(500):
        if ("lighten" === _v2) return -2 + -6 * _v1;
        return 6 + 3 * _v1;
      case _v22(500):
        if ("lighten" === _v2) return -2 + _v1 / 2;
        return -1 + -.5 * _v1;
      case _v24(500):
        return 6 * _v1;
      case _v26(500):
        return 5 * _v1;
      default:
        return 0;
    }
  }
  function _v31(_v0, _v1, _v2) {
    switch (void 0 === _v1 && (_v1 = 0), void 0 === _v2 && (_v2 = "darken"), _v0) {
      case _v13(500):
      case _v7(500):
        return 0;
      case _v11(500):
        return .05;
      case _v7(500):
        return 0;
      case _v14[500] || _v28(_v2.Fuschia, 500):
        return .2;
      case _v16(500):
        if ("lighten" === _v2) return .15 + _v1 / 40;
        return 0;
      case _v18(500):
        return .1 + _v1 / 30;
      case _v20(500):
        return .05 + _v1 / 50;
      case _v22(500):
        if ("lighten" === _v2) return _v1 / 15;
        return .1 + _v1 / 10;
      case _v24(500):
        return _v1 / 20;
      case _v26(500):
        if ("lighten" === _v2) return _v1 / 15;
        return -(_v1 / 20);
      default:
        return .1;
    }
  }
  _v0.s(["amethyst", 0, _v24, "black", 0, "#000000", "blue", 0, _v9, "grayscale", 0, _v13, "green", 0, _v7, "red", 0, function (_v0) {
    return _v4[_v0] || _v28(_v2.Red, _v0);
  }, "slate", 0, _v11, "violet", 0, function (_v0) {
    return _v27[_v0] || _v28(_v2.Violet, _v0);
  }, "white", 0, "#FFFFFF", "yellow", 0, function (_v0) {
    return _v5[_v0] || _v28(_v2.Yellow, _v0);
  }]);
}