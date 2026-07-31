{
  "use strict";

  let _v1 = {
      floatingBox: "floatingBox",
      fullFrame: "fullFrame",
      lowerThird: "lowerThird",
      resizableBox: "resizableBox"
    },
    _v2 = {
      width: 570,
      type: "fixed-ratio",
      hasBackgroundColor: !0,
      colorTokens: {
        questionText: "default",
        answerText: "secondary",
        answerBackground: "default",
        background: "secondary",
        questionBackground: "secondary"
      },
      position: {
        x: .1,
        y: .25
      },
      general: {
        fontSize: 32,
        spacing: 30,
        borderRadius: 0
      },
      container: {
        padding: 50,
        borderRadius: 45
      },
      question: {
        padding: 0,
        marginBottom: 25
      },
      answers: {
        gap: 15
      },
      answer: {
        fontSize: 24,
        padding: 30,
        paddingLeft: 40,
        borderRadius: 20
      }
    },
    _v3 = {
      width: 0,
      type: "fixed-ratio",
      colorTokens: {
        questionText: "default",
        answerText: "default",
        answerBackground: "secondary",
        background: "primary",
        questionBackground: "primary"
      },
      hasBackgroundColor: !0,
      position: {
        x: 0,
        y: 0
      },
      general: {
        fontSize: 106.4,
        spacing: 40,
        borderRadius: 0
      },
      container: {
        padding: 420,
        borderRadius: 0
      },
      question: {
        padding: 0
      },
      answers: {
        gap: 30.5
      },
      answer: {
        fontSize: 40,
        padding: 40,
        paddingLeft: 66.5,
        borderRadius: 30
      }
    },
    _v4 = {
      width: 0,
      type: "fixed-ratio",
      hasQuestionBackgroundColor: !0,
      colorTokens: {
        questionText: "default",
        answerText: "default",
        answerBackground: "secondary",
        background: "primary",
        questionBackground: "secondary"
      },
      position: {
        x: .03777,
        y: .667
      },
      general: {
        fontSize: 50,
        spacing: 40,
        borderRadius: 20
      },
      container: {
        padding: 0
      },
      question: {
        textAlign: "center",
        padding: 40
      },
      answers: {
        gap: 60,
        flexDirection: "row"
      },
      answer: {
        fontSize: 30,
        padding: 40,
        paddingLeft: 50,
        textAlign: "center"
      }
    },
    _v5 = {
      width: 0,
      hasBackgroundColor: !0,
      type: "freeform",
      colorTokens: {
        questionText: "default",
        answerText: "secondary",
        answerBackground: "default",
        background: "secondary",
        questionBackground: "secondary"
      },
      position: {
        x: .1,
        y: .25
      },
      general: {
        fontSize: 26,
        spacing: 30,
        borderRadius: 0
      },
      container: {
        padding: 24,
        borderRadius: 27,
        width: "100%"
      },
      question: {
        padding: 0,
        marginBottom: 25
      },
      answers: {
        gap: 6
      },
      answer: {
        fontSize: 21,
        padding: 18,
        borderRadius: 13.39,
        iconSize: 24,
        iconMarginTop: 4
      }
    },
    _v6 = {
      [_v1.floatingBox]: {
        landscape: {
          ..._v2,
          position: {
            x: .1,
            y: .25
          }
        },
        portrait: {
          ..._v2,
          position: {
            x: .245,
            y: .6
          }
        },
        square: {
          ..._v2,
          position: {
            x: .1,
            y: .52
          }
        },
        "4-5": {
          ..._v2,
          position: {
            x: .2,
            y: .55
          }
        },
        "4-3": {
          ..._v2,
          position: {
            x: .15,
            y: .3
          }
        },
        "2-3": {
          ..._v2,
          position: {
            x: .22,
            y: .58
          }
        },
        "3-4": {
          ..._v2,
          position: {
            x: .25,
            y: .62
          }
        },
        "16-10": {
          ..._v2,
          position: {
            x: .08,
            y: .22
          }
        },
        "2-1": {
          ..._v2,
          position: {
            x: .05,
            y: .18
          }
        }
      },
      [_v1.fullFrame]: {
        landscape: {
          ..._v3,
          container: {
            ..._v3.container,
            paddingBottom: 335,
            paddingTop: 305
          }
        },
        portrait: {
          ..._v3,
          container: {
            ..._v3.container,
            padding: 150,
            paddingBottom: 0,
            paddingTop: 0
          }
        },
        square: {
          ..._v3,
          container: {
            ..._v3.container,
            padding: 150,
            paddingBottom: 755,
            paddingTop: 725
          }
        },
        "4-5": {
          ..._v3,
          container: {
            ..._v3.container,
            padding: 300,
            paddingBottom: 0,
            paddingTop: 0
          }
        },
        "4-3": {
          ..._v3,
          container: {
            ..._v3.container,
            paddingBottom: 400,
            paddingTop: 370
          }
        },
        "2-3": {
          ..._v3,
          container: {
            ..._v3.container,
            padding: 200,
            paddingBottom: 0,
            paddingTop: 0
          }
        },
        "3-4": {
          ..._v3,
          container: {
            ..._v3.container,
            padding: 250,
            paddingBottom: 0,
            paddingTop: 0
          }
        },
        "16-10": {
          ..._v3,
          container: {
            ..._v3.container,
            paddingBottom: 280,
            paddingTop: 250
          }
        },
        "2-1": {
          ..._v3,
          container: {
            ..._v3.container,
            paddingBottom: 200,
            paddingTop: 170
          }
        }
      },
      [_v1.lowerThird]: {
        landscape: {
          ..._v4,
          position: {
            ..._v4.position,
            y: .667
          }
        },
        portrait: {
          ..._v4,
          position: {
            ..._v4.position,
            y: .88
          }
        },
        square: {
          ..._v4,
          position: {
            ..._v4.position,
            y: .81
          }
        },
        "4-5": {
          ..._v4,
          position: {
            ..._v4.position,
            y: .85
          }
        },
        "4-3": {
          ..._v4,
          position: {
            ..._v4.position,
            y: .72
          }
        },
        "2-3": {
          ..._v4,
          position: {
            ..._v4.position,
            y: .87
          }
        },
        "3-4": {
          ..._v4,
          position: {
            ..._v4.position,
            y: .86
          }
        },
        "16-10": {
          ..._v4,
          position: {
            ..._v4.position,
            y: .65
          }
        },
        "2-1": {
          ..._v4,
          position: {
            ..._v4.position,
            y: .62
          }
        }
      },
      [_v1.resizableBox]: {
        landscape: {
          ..._v5,
          position: {
            x: .1,
            y: .25
          }
        },
        portrait: {
          ..._v5,
          position: {
            x: .245,
            y: .6
          }
        },
        square: {
          ..._v5,
          position: {
            x: .1,
            y: .52
          }
        },
        "4-5": {
          ..._v5,
          position: {
            x: .2,
            y: .55
          }
        },
        "4-3": {
          ..._v5,
          position: {
            x: .15,
            y: .3
          }
        },
        "2-3": {
          ..._v5,
          position: {
            x: .22,
            y: .58
          }
        },
        "3-4": {
          ..._v5,
          position: {
            x: .25,
            y: .62
          }
        },
        "16-10": {
          ..._v5,
          position: {
            x: .08,
            y: .22
          }
        },
        "2-1": {
          ..._v5,
          position: {
            x: .05,
            y: .18
          }
        }
      }
    };
  _v0.s(["BRAND_INDICATOR", 0, "__brand__", "LINE_HEIGHT_RATIO", 0, 1.2, "NO_BRAKE_SPACE", 0, " ", "POLL_STYLES", 0, _v6, "POLL_STYLE_ID", 0, _v1, "TRANSPARENT", 0, "transparent"]);
}