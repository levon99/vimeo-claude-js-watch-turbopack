{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["SearchMagnifierAi", 0, _v0 => (0, _v1.jsx)(_v2.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsxs)("g", {
      fill: "currentColor",
      children: [(0, _v1.jsx)("path", {
        d: "M11.1 2.5a8 8 0 0 1 6.32 12.905l4.386 4.388a1 1 0 1 1-1.414 1.414l-4.386-4.388a7.968 7.968 0 0 1-5.56 1.652 4.775 4.775 0 0 0 .87-1.977 6 6 0 1 0-6.191-5.463 4.798 4.798 0 0 0-1.856 1.114A8 8 0 0 1 11.1 2.5Z"
      }), (0, _v1.jsx)("path", {
        d: "m7.471 15.935 1.25.434-.004.003c.249.087.38.358.294.605a.463.463 0 0 1-.298.294l-1.244.434c-.55.191-.975.617-1.166 1.167l-.434 1.25a.48.48 0 0 1-.61.292.464.464 0 0 1-.292-.301l-.432-1.244a1.883 1.883 0 0 0-1.166-1.166l-1.25-.434a.476.476 0 0 1 .017-.904l1.237-.43a1.885 1.885 0 0 0 1.164-1.166l.436-1.25a.475.475 0 0 1 .9.009l.432 1.241c.191.55.616.975 1.166 1.166Z"
      })]
    })
  })], 0), _v0.s(["FLOW_GRADIENT_KEYFRAMES", 0, {
    "@keyframes vimeoPulse": {
      "0%": {
        opacity: 0,
        backgroundPosition: "0% 0%"
      },
      "14%": {
        opacity: 1,
        backgroundPosition: "15% 15%"
      },
      "46%": {
        opacity: 1,
        backgroundPosition: "85% 85%"
      },
      "60%": {
        opacity: 0,
        backgroundPosition: "100% 100%"
      },
      "100%": {
        opacity: 0,
        backgroundPosition: "0% 0%"
      }
    },
    "@keyframes vimeoInnerGlow": {
      "0%": {
        boxShadow: "inset 7px 7px 14px -6px rgba(23, 213, 255, 0), inset -7px -7px 14px -6px rgba(135, 91, 229, 0)"
      },
      "14%": {
        boxShadow: "inset 7px 7px 14px -6px rgba(23, 213, 255, 0.15), inset -7px -7px 14px -6px rgba(135, 91, 229, 0.15)"
      },
      "46%": {
        boxShadow: "inset 7px 7px 14px -6px rgba(135, 91, 229, 0.15), inset -7px -7px 14px -6px rgba(23, 213, 255, 0.15)"
      },
      "60%": {
        boxShadow: "inset 7px 7px 14px -6px rgba(135, 91, 229, 0), inset -7px -7px 14px -6px rgba(23, 213, 255, 0)"
      },
      "100%": {
        boxShadow: "inset 7px 7px 14px -6px rgba(23, 213, 255, 0), inset -7px -7px 14px -6px rgba(135, 91, 229, 0)"
      }
    },
    "@media (prefers-reduced-motion: reduce)": {
      "&, & *, &::before, &::after, & *::before, & *::after": {
        animation: "none !important"
      }
    }
  }, "FLOW_GRADIENT_LAYERS_SX", 0, {
    "&::before": {
      content: '""',
      position: "absolute",
      inset: 0,
      borderRadius: "inherit",
      backgroundImage: "linear-gradient(120deg, transparent 0%, var(--vimeo-colors-vimeoBlueAlpha-200) 30%, transparent 55%, var(--vimeo-colors-vimeoBlueAlpha-100) 80%, transparent 100%)",
      backgroundSize: "300% 300%",
      opacity: 0,
      animation: "vimeoPulse 10s ease-in-out 3",
      pointerEvents: "none",
      zIndex: 0
    },
    "&::after": {
      content: '""',
      position: "absolute",
      inset: "-1px",
      borderRadius: "inherit",
      padding: "1px",
      backgroundImage: "linear-gradient(120deg, var(--vimeo-colors-grayAlpha-300) 0%, var(--vimeo-colors-vimeoBlue-200) 24%, var(--vimeo-colors-grayAlpha-300) 48%, var(--vimeo-colors-vimeoBlue-300) 68%, var(--vimeo-colors-purple-300) 80%, var(--vimeo-colors-grayAlpha-300) 100%)",
      backgroundSize: "300% 300%",
      opacity: 0,
      animation: "vimeoPulse 10s ease-in-out 3",
      WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
      WebkitMaskComposite: "xor",
      maskComposite: "exclude",
      pointerEvents: "none",
      zIndex: 0
    }
  }, "FLOW_INNER_GLOW_SX", 0, {
    animation: "vimeoInnerGlow 10s ease-in-out 3"
  }], 0);
}