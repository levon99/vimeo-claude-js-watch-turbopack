{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = {
      light: {
        elements: {
          bg0: _v2.bokehTheme.colors.gray["50"],
          bg1: _v2.bokehTheme.colors.white,
          color0: _v2.bokehTheme.colors.gray["100"],
          color1: _v2.bokehTheme.colors.gray["200"],
          color2: _v2.bokehTheme.colors.gray["800"],
          color3: _v2.bokehTheme.colors.gray["800"],
          color4: _v2.bokehTheme.colors.gray["200"],
          color5: _v2.bokehTheme.colors.gray["300"],
          color6: _v2.bokehTheme.colors.gray["100"]
        },
        icons: {
          fill0: _v2.bokehTheme.colors.gray["200"]
        }
      },
      dark: {
        elements: {
          bg0: _v2.bokehTheme.colors.gray["700"],
          bg1: _v2.bokehTheme.colors.gray["800"],
          color0: _v2.bokehTheme.colors.gray["600"],
          color1: _v2.bokehTheme.colors.gray["400"],
          color2: _v2.bokehTheme.colors.gray["100"],
          color3: _v2.bokehTheme.colors.white,
          color4: _v2.bokehTheme.colors.gray["600"],
          color5: _v2.bokehTheme.colors.gray["200"],
          color6: _v2.bokehTheme.colors.gray["700"]
        },
        icons: {
          fill0: _v2.bokehTheme.colors.gray["200"]
        }
      }
    },
    _v4 = (0, _v1.applyCustomTheme)(_v3);
  _v0.s(["applyCustomThemeEssentialFooter", 0, _v4]);
}