{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = {
      light: {
        additions: {
          content: {
            border: (0, _v2.slate)(100),
            border2: (0, _v2.slate)(200),
            border3: (0, _v2.slate)(50),
            border4: (0, _v2.slate)(50),
            border5: (0, _v2.slate)(200),
            color: (0, _v2.slate)(800),
            color2: (0, _v2.slate)(500),
            color3: (0, _v2.slate)(600),
            color4: (0, _v2.slate)(400),
            color5: _v2.white
          },
          item: {
            selected: (0, _v2.grayscale)(50),
            highlight: (0, _v1.rgba)((0, _v2.blue)(500), .1),
            highlight0: (0, _v2.slate)(30),
            highlight2: (0, _v2.slate)(200)
          }
        },
        button: {
          background: (0, _v2.slate)(800),
          background1: (0, _v2.slate)(50),
          background2: (0, _v2.slate)(50)
        },
        input: {
          background: (0, _v2.slate)(50),
          fade: (0, _v1.rgba)(_v2.white, 0),
          disabled: (0, _v1.rgba)(_v2.black, .25)
        },
        description: {
          color0: (0, _v2.slate)(350),
          color1: (0, _v2.slate)(400),
          color2: (0, _v2.slate)(400),
          color3: (0, _v2.slate)(500),
          color4: _v2.white
        },
        element: {
          bg: (0, _v2.grayscale)(50),
          bg0: (0, _v2.blue)(20),
          bg1: _v2.white,
          bg2: _v2.black,
          bg3: _v2.white,
          bg4: (0, _v2.blue)(850),
          bg5: (0, _v2.slate)(50)
        },
        icons: {
          contentColor0: (0, _v2.slate)(50),
          contentColor50: (0, _v2.slate)(150),
          contentColor70: (0, _v2.slate)(200),
          contentColor90: (0, _v2.slate)(300),
          contentColor120: (0, _v2.slate)(300),
          contentColor150: (0, _v2.slate)(350)
        },
        transform: {
          luminance: _v1.darken
        },
        modal: {
          background: _v2.white,
          textColorPrimary: (0, _v2.slate)(800)
        },
        gradients: {
          bg: "linear-gradient(268.81deg, #eef1f4 -2.26%, rgba(238, 241, 244, 0.4) 99.8%)"
        }
      },
      dark: {
        additions: {
          content: {
            border: (0, _v2.grayscale)(600),
            border2: (0, _v2.grayscale)(400),
            border3: (0, _v2.grayscale)(600),
            border4: (0, _v2.grayscale)(800),
            border5: (0, _v2.grayscale)(600),
            color: _v2.white,
            color2: (0, _v2.grayscale)(400),
            color3: (0, _v2.grayscale)(50),
            color4: (0, _v2.grayscale)(50),
            color5: (0, _v2.grayscale)(550)
          },
          item: {
            selected: (0, _v2.grayscale)(600),
            highlight: (0, _v1.rgba)((0, _v2.blue)(500), .3),
            highlight0: (0, _v2.grayscale)(800),
            highlight2: (0, _v2.grayscale)(700)
          }
        },
        input: {
          disabled: (0, _v1.rgba)(_v2.white, .25),
          background: (0, _v2.grayscale)(850),
          fade: (0, _v1.rgba)(_v2.black, 0)
        },
        button: {
          background: (0, _v2.blue)(500),
          background1: (0, _v2.grayscale)(400),
          background2: (0, _v2.grayscale)(600)
        },
        description: {
          color0: (0, _v2.grayscale)(200),
          color1: (0, _v2.grayscale)(200),
          color2: (0, _v2.grayscale)(400),
          color3: (0, _v2.grayscale)(200),
          color4: (0, _v2.slate)(800)
        },
        element: {
          bg: (0, _v2.grayscale)(700),
          bg0: (0, _v2.blue)(850),
          bg1: (0, _v2.grayscale)(800),
          bg2: (0, _v2.grayscale)(800),
          bg3: (0, _v2.grayscale)(850),
          bg4: (0, _v2.blue)(50),
          bg5: (0, _v2.grayscale)(900)
        },
        icons: {
          contentColor0: (0, _v2.grayscale)(600),
          contentColor50: (0, _v2.grayscale)(500),
          contentColor70: (0, _v2.grayscale)(400),
          contentColor90: (0, _v2.grayscale)(100),
          contentColor120: (0, _v2.grayscale)(600),
          contentColor150: (0, _v2.grayscale)(500)
        },
        transform: {
          luminance: _v1.lighten
        },
        modal: {
          background: (0, _v2.grayscale)(800),
          textColorPrimary: _v2.white
        },
        gradients: {
          bg: "linear-gradient(90deg,#282828 10%,rgba(40,40,40,0.4) 50%,#282828 90%)"
        }
      }
    },
    _v5 = (0, _v3.applyCustomTheme)(_v4);
  _v5((0, _v3.getDefaultTheme)()), _v0.s(["applyCustomThemeSVV", 0, _v5]);
}