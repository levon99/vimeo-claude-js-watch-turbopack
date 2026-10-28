{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = {
      light: {
        additions: {
          content: {
            border: _v2.bokehTheme.colors.gray["100"],
            border2: _v2.bokehTheme.colors.gray["200"],
            border3: _v2.bokehTheme.colors.gray["50"],
            border4: _v2.bokehTheme.colors.gray["50"],
            border5: _v2.bokehTheme.colors.gray["200"],
            color: _v2.bokehTheme.colors.gray["800"],
            color2: _v2.bokehTheme.colors.gray["500"],
            color3: _v2.bokehTheme.colors.gray["600"],
            color4: _v2.bokehTheme.colors.gray["400"],
            color5: _v2.bokehTheme.colors.white
          },
          item: {
            selected: _v2.bokehTheme.colors.gray["50"],
            highlight: (0, _v1.rgba)(_v2.bokehTheme.colors.vimeoBlue["500"], .1),
            highlight0: _v2.bokehTheme.colors.gray["50"],
            highlight2: _v2.bokehTheme.colors.gray["200"]
          }
        },
        button: {
          background: _v2.bokehTheme.colors.gray["800"],
          background1: _v2.bokehTheme.colors.gray["50"],
          background2: _v2.bokehTheme.colors.gray["50"]
        },
        input: {
          background: _v2.bokehTheme.colors.gray["50"],
          fade: (0, _v1.rgba)(_v2.bokehTheme.colors.white, 0),
          disabled: (0, _v1.rgba)(_v2.bokehTheme.colors.black, .25)
        },
        description: {
          color0: _v2.bokehTheme.colors.gray["350"],
          color1: _v2.bokehTheme.colors.gray["400"],
          color2: _v2.bokehTheme.colors.gray["400"],
          color3: _v2.bokehTheme.colors.gray["500"],
          color4: _v2.bokehTheme.colors.white
        },
        element: {
          bg: _v2.bokehTheme.colors.gray["50"],
          bg0: _v2.bokehTheme.colors.vimeoBlue["50"],
          bg1: _v2.bokehTheme.colors.white,
          bg2: _v2.bokehTheme.colors.black,
          bg3: _v2.bokehTheme.colors.white,
          bg4: _v2.bokehTheme.colors.vimeoBlue["900"],
          bg5: _v2.bokehTheme.colors.gray["50"]
        },
        icons: {
          contentColor0: _v2.bokehTheme.colors.gray["50"],
          contentColor50: _v2.bokehTheme.colors.gray["100"],
          contentColor70: _v2.bokehTheme.colors.gray["200"],
          contentColor90: _v2.bokehTheme.colors.gray["300"],
          contentColor120: _v2.bokehTheme.colors.gray["300"],
          contentColor150: _v2.bokehTheme.colors.gray["350"]
        },
        transform: {
          luminance: _v1.darken
        },
        modal: {
          background: _v2.bokehTheme.colors.white,
          textColorPrimary: _v2.bokehTheme.colors.gray["800"]
        },
        gradients: {
          bg: "linear-gradient(268.81deg, #eef1f4 -2.26%, rgba(238, 241, 244, 0.4) 99.8%)"
        }
      },
      dark: {
        additions: {
          content: {
            border: _v2.bokehTheme.colors.gray["600"],
            border2: _v2.bokehTheme.colors.gray["400"],
            border3: _v2.bokehTheme.colors.gray["600"],
            border4: _v2.bokehTheme.colors.gray["800"],
            border5: _v2.bokehTheme.colors.gray["600"],
            color: _v2.bokehTheme.colors.white,
            color2: _v2.bokehTheme.colors.gray["400"],
            color3: _v2.bokehTheme.colors.gray["50"],
            color4: _v2.bokehTheme.colors.gray["50"],
            color5: _v2.bokehTheme.colors.gray["600"]
          },
          item: {
            selected: _v2.bokehTheme.colors.gray["600"],
            highlight: (0, _v1.rgba)(_v2.bokehTheme.colors.vimeoBlue["500"], .3),
            highlight0: _v2.bokehTheme.colors.gray["800"],
            highlight2: _v2.bokehTheme.colors.gray["700"]
          }
        },
        input: {
          disabled: (0, _v1.rgba)(_v2.bokehTheme.colors.white, .25),
          background: _v2.bokehTheme.colors.gray["800"],
          fade: (0, _v1.rgba)(_v2.bokehTheme.colors.black, 0)
        },
        button: {
          background: _v2.bokehTheme.colors.vimeoBlue["500"],
          background1: _v2.bokehTheme.colors.gray["400"],
          background2: _v2.bokehTheme.colors.gray["600"]
        },
        description: {
          color0: _v2.bokehTheme.colors.gray["200"],
          color1: _v2.bokehTheme.colors.gray["200"],
          color2: _v2.bokehTheme.colors.gray["400"],
          color3: _v2.bokehTheme.colors.gray["200"],
          color4: _v2.bokehTheme.colors.gray["800"]
        },
        element: {
          bg: _v2.bokehTheme.colors.gray["700"],
          bg0: _v2.bokehTheme.colors.vimeoBlue["900"],
          bg1: _v2.bokehTheme.colors.gray["800"],
          bg2: _v2.bokehTheme.colors.gray["800"],
          bg3: _v2.bokehTheme.colors.gray["800"],
          bg4: _v2.bokehTheme.colors.vimeoBlue["50"],
          bg5: _v2.bokehTheme.colors.gray["900"]
        },
        icons: {
          contentColor0: _v2.bokehTheme.colors.gray["600"],
          contentColor50: _v2.bokehTheme.colors.gray["500"],
          contentColor70: _v2.bokehTheme.colors.gray["400"],
          contentColor90: _v2.bokehTheme.colors.gray["100"],
          contentColor120: _v2.bokehTheme.colors.gray["600"],
          contentColor150: _v2.bokehTheme.colors.gray["500"]
        },
        transform: {
          luminance: _v1.lighten
        },
        modal: {
          background: _v2.bokehTheme.colors.gray["800"],
          textColorPrimary: _v2.bokehTheme.colors.white
        },
        gradients: {
          bg: "linear-gradient(90deg,#282828 10%,rgba(40,40,40,0.4) 50%,#282828 90%)"
        }
      }
    },
    _v5 = (0, _v3.applyCustomTheme)(_v4);
  _v5((0, _v3.getDefaultTheme)()), _v0.s(["applyCustomThemeSVV", 0, _v5]);
}