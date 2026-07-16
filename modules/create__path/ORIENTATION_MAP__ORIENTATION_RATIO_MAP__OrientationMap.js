{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = {
      [_v1.Orientation.LANDSCAPE]: {
        width: 0,
        height: 0
      },
      [_v1.Orientation.SQUARE]: {
        width: 0,
        height: 0
      },
      [_v1.Orientation.PORTRAIT]: {
        width: 0,
        height: 0
      },
      [_v1.Orientation.OR_4_5]: {
        width: 0,
        height: 0
      },
      [_v1.Orientation.OR_4_3]: {
        width: 0,
        height: 0
      },
      [_v1.Orientation.OR_2_3]: {
        width: 0,
        height: 0
      },
      [_v1.Orientation.OR_3_4]: {
        width: 0,
        height: 0
      },
      [_v1.Orientation.OR_16_10]: {
        width: 0,
        height: 0
      },
      [_v1.Orientation.OR_2_1]: {
        width: 0,
        height: 960
      }
    },
    _v3 = {
      [_v1.Orientation.LANDSCAPE]: 0 / 0,
      [_v1.Orientation.SQUARE]: 1,
      [_v1.Orientation.PORTRAIT]: .5625,
      [_v1.Orientation.OR_4_5]: .8,
      [_v1.Orientation.OR_4_3]: 0 / 0,
      [_v1.Orientation.OR_2_3]: 0 / 0,
      [_v1.Orientation.OR_3_4]: .75,
      [_v1.Orientation.OR_16_10]: 1.6,
      [_v1.Orientation.OR_2_1]: 2
    };
  _v0.s(["ORIENTATION_MAP", 0, _v2, "ORIENTATION_RATIO_MAP", 0, _v3], 0);
  let _v4 = {
      [_v1.Orientation.LANDSCAPE]: 16 / 9,
      [_v1.Orientation.SQUARE]: 1,
      [_v1.Orientation.PORTRAIT]: 9 / 16,
      [_v1.Orientation.OR_4_5]: .8,
      [_v1.Orientation.OR_4_3]: 4 / 3,
      [_v1.Orientation.OR_16_10]: 1.6,
      [_v1.Orientation.OR_3_4]: 3 / 4,
      [_v1.Orientation.OR_2_3]: 2 / 3,
      [_v1.Orientation.OR_2_1]: 2
    },
    _v5 = {
      [_v1.Orientation.LANDSCAPE]: "16:9",
      [_v1.Orientation.SQUARE]: "1:1",
      [_v1.Orientation.PORTRAIT]: "9:16",
      [_v1.Orientation.OR_4_5]: "4:5",
      [_v1.Orientation.OR_4_3]: "4:3",
      [_v1.Orientation.OR_16_10]: "16:10",
      [_v1.Orientation.OR_3_4]: "3:4",
      [_v1.Orientation.OR_2_3]: "2:3",
      [_v1.Orientation.OR_2_1]: "2:1"
    };
  _v0.s(["OrientationMap", 0, {
    LND: "landscape",
    SQR: "square",
    PRT: "portrait",
    OR45: "4-5",
    OR43: "4-3",
    OR1610: "16-10",
    OR34: "3-4",
    OR23: "2-3",
    OR21: "2-1"
  }, "OrientationRatio", 0, _v4, "OrientationRatioString", 0, _v5, "OrientationShorthand", 0, {
    LANDSCAPE: "LND",
    SQUARE: "SQR",
    PORTRAIT: "PRT",
    OR_4_5: "OR45",
    OR_4_3: "OR43",
    OR_16_10: "OR1610",
    OR_3_4: "OR34",
    OR_2_3: "OR23",
    OR_2_1: "OR21"
  }], 0);
}