{
  "use strict";

  let _v1 = {
      NONE: "none",
      FADE: "fade",
      STAMP: "stamp",
      POP: "pop",
      SLIDE_LEFT: "slideLeft",
      SLIDE_RIGHT: "slideRight",
      SLIDE_TOP: "slideTop",
      SLIDE_BOTTOM: "slideBottom"
    },
    _v2 = [_v1.STAMP, _v1.POP, _v1.SLIDE_LEFT, _v1.SLIDE_RIGHT, _v1.SLIDE_TOP, _v1.SLIDE_BOTTOM],
    _v3 = {
      [_v1.NONE]: 0,
      [_v1.FADE]: 480,
      [_v1.STAMP]: 330,
      [_v1.POP]: 400,
      [_v1.SLIDE_LEFT]: 800,
      [_v1.SLIDE_RIGHT]: 800,
      [_v1.SLIDE_TOP]: 800,
      [_v1.SLIDE_BOTTOM]: 800
    };
  _v0.s(["ANIMATION_DURATION", 0, _v3, "ANIMATION_MARGIN", 0, 2, "ANIMATION_MOCK_OUT_POINT", 0, 0, "EASING_MAP", 0, {
    LINEAR: [1, 1, 1, 1],
    EASE: [.25, .1, .25, 1],
    EASE_IN: [.42, 0, 1, 1],
    EASE_OUT: [.42, 0, .58, 1],
    EASE_OUT_QUAD: [.21, .21, .26, 1],
    EASE_IN_OUT: [0, 0, .58, 1]
  }, "MediaAnimation", 0, _v1, "OVERFLOWING_ANIMATIONS", 0, _v2]);
}