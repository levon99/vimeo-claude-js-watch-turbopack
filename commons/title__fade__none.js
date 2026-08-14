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
      [_v2.Orientation.LANDSCAPE]: 86,
      [_v2.Orientation.PORTRAIT]: 120,
      [_v2.Orientation.SQUARE]: 110,
      [_v2.Orientation.OR_4_5]: 110,
      [_v2.Orientation.OR_4_3]: 90,
      [_v2.Orientation.OR_2_3]: 115,
      [_v2.Orientation.OR_3_4]: 110,
      [_v2.Orientation.OR_16_10]: 80,
      [_v2.Orientation.OR_2_1]: 70
    },
    _v19 = {
      description: 54 / 86,
      button: 34 / 86,
      retakesLeft: 35 / 86
    },
    _v20 = {
      [_v2.Orientation.LANDSCAPE]: {
        widthPadding: 1,
        heightPadding: 1
      },
      [_v2.Orientation.PORTRAIT]: {
        widthPadding: 1.3,
        heightPadding: .4
      },
      [_v2.Orientation.SQUARE]: {
        widthPadding: 1.1,
        heightPadding: .8
      },
      [_v2.Orientation.OR_4_5]: {
        widthPadding: 1.2,
        heightPadding: .7
      },
      [_v2.Orientation.OR_4_3]: {
        widthPadding: 1,
        heightPadding: 1
      },
      [_v2.Orientation.OR_2_3]: {
        widthPadding: 1.1,
        heightPadding: .6
      },
      [_v2.Orientation.OR_3_4]: {
        widthPadding: 1.1,
        heightPadding: .7
      },
      [_v2.Orientation.OR_16_10]: {
        widthPadding: 1,
        heightPadding: 1
      },
      [_v2.Orientation.OR_2_1]: {
        widthPadding: 1,
        heightPadding: 1
      }
    },
    _v21 = {
      x: .28300385462555,
      y: .298766519823788,
      width: .433372797356828,
      height: .18
    },
    _v22 = {
      x: .176756607929515,
      y: .478766519823788,
      width: .637194383259911,
      height: .037929515418502
    },
    _v23 = 24,
    _v24 = {
      x: .442080121145374,
      y: .728755506607929,
      width: .113981277533039,
      height: .108568281938325
    },
    _v25 = {
      x: .284993034305837,
      y: .856577092511013,
      width: .430013931388324,
      height: .032422907488986
    };
  function _v26(_v0) {
    let _v1 = _v10.ORIENTATION_MAP[_v0],
      _v2 = _v10.ORIENTATION_MAP[_v2.Orientation.LANDSCAPE],
      _v3 = _v1.width / _v1.height,
      _v4 = _v2.width / _v2.height,
      _v5 = Math.min(_v1.width, _v1.height),
      _v6 = Math.min(_v2.width, _v2.height);
    return {
      aspectRatio: _v3,
      landscapeAspectRatio: _v4,
      dimensionScale: _v5 / _v6,
      widthRatio: _v2.width / _v1.width,
      heightRatio: _v2.height / _v1.height,
      isWider: _v3 > _v4,
      isTaller: _v3 < _v4
    };
  }
  function _v27(_v0, _v1) {
    let _v2 = _v18[_v0];
    return "title" === _v1 ? _v2 : Math.round(_v2 * _v19[_v1]);
  }
  function _v28(_v0, _v1 = !1) {
    let _v2 = _v26(_v0),
      _v3 = _v24,
      _v4 = _v20[_v0],
      _v5 = _v3.width * _v2.dimensionScale,
      _v6 = _v3.height * _v2.dimensionScale,
      _v7 = _v5,
      _v8 = _v6;
    return _v7 *= _v4.widthPadding, _v8 *= _v4.heightPadding, {
      x: .5 - _v7 / 2,
      y: .78 - _v8 / 2 + (_v1 ? -.01 : 0),
      width: _v7,
      height: _v8
    };
  }
  function _v29(_v0, _v1 = !1) {
    let _v2 = _v26(_v0),
      _v3 = _v21,
      _v4 = _v22,
      _v5 = _v3.y + _v3.height,
      _v6 = Math.max(_v4.y - _v5, .01),
      _v7 = _v3.width * _v2.widthRatio,
      _v8 = _v3.height * _v2.heightRatio,
      _v9 = _v4.width * _v2.widthRatio,
      _v10 = _v4.height * _v2.heightRatio,
      _v11 = _v7,
      _v12 = _v9;
    _v2.isWider ? (_v11 = Math.min(_v7, .6), _v12 = Math.min(_v9, .7)) : _v2.isTaller && (_v11 = Math.min(1.1 * _v7, .85), _v12 = Math.min(1.05 * _v9, .9));
    let _v13 = .4 - (_v8 + _v6 + _v10) / 2 + (_v1 ? .022 * _v2.heightRatio : 0);
    return {
      titleRect: {
        x: .5 - _v11 / 2,
        y: _v13,
        width: _v11,
        height: _v8
      },
      descRect: {
        x: .5 - _v12 / 2,
        y: _v13 + _v8 + _v6,
        width: _v12,
        height: _v10
      }
    };
  }
  let _v30 = {
      [_v2.Orientation.PORTRAIT]: {
        x: .720399470899471,
        y: .014882142857143,
        width: .254349206349206,
        height: .04849880952381
      },
      [_v2.Orientation.SQUARE]: {
        x: .753777777777778,
        y: .017334523809524,
        width: .229587301587302,
        height: .063736904761905
      },
      [_v2.Orientation.LANDSCAPE]: {
        x: .86610757057314,
        y: .023933333333333,
        width: .1195,
        height: .073733333333333
      },
      [_v2.Orientation.OR_4_5]: {
        x: .720399470899471,
        y: .016882142857143,
        width: .254349206349206,
        height: .05249880952381
      },
      [_v2.Orientation.OR_4_3]: {
        x: .84610757057314,
        y: .021933333333333,
        width: .1395,
        height: .068733333333333
      },
      [_v2.Orientation.OR_2_3]: {
        x: .710399470899471,
        y: .013882142857143,
        width: .274349206349206,
        height: .04649880952381
      },
      [_v2.Orientation.OR_3_4]: {
        x: .730399470899471,
        y: .015882142857143,
        width: .244349206349206,
        height: .05049880952381
      },
      [_v2.Orientation.OR_16_10]: {
        x: .85610757057314,
        y: .022933333333333,
        width: .1295,
        height: .071733333333333
      },
      [_v2.Orientation.OR_2_1]: {
        x: .87610757057314,
        y: .025933333333333,
        width: .1095,
        height: .083733333333333
      }
    },
    _v31 = {
      [_v2.Orientation.PORTRAIT]: 50,
      [_v2.Orientation.SQUARE]: 44,
      [_v2.Orientation.LANDSCAPE]: 26,
      [_v2.Orientation.OR_4_5]: 48,
      [_v2.Orientation.OR_4_3]: 32,
      [_v2.Orientation.OR_2_3]: 52,
      [_v2.Orientation.OR_3_4]: 46,
      [_v2.Orientation.OR_16_10]: 28,
      [_v2.Orientation.OR_2_1]: 24
    },
    _v32 = "fade",
    _v33 = {
      compositionTiming: {
        start: 0,
        end: _v7.DEFAULT_OVERLAY_DURATION
      },
      selectable: !1
    },
    _v34 = {
      opacity: 100,
      dropShadow: "none",
      textAlign: "center",
      verticalAlign: "middle",
      zoom: 1
    },
    _v35 = {
      action: {
        type: "none",
        customPayloadData: null
      },
      pauseOnClick: !1,
      hover: {
        bgAlpha: 100,
        zoom: 1
      }
    };
  _v0.s(["createBackgroundElement", 0, () => ({
    id: (0, _v13.createUuidV4)(),
    type: _v11.CompositionElementType.BUTTON,
    zindex: 0,
    rect: _v6.DEFAULT_RECT,
    backgroundColor: "#ebebeb",
    bgAlpha: 100,
    textColor: "#ffffff",
    textContent: "",
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 16,
    animationName: "none",
    font: "Gothic",
    interactiveHotspot: {
      name: _v9.SCORECARD_BACKGROUND_HOTSPOT_NAME,
      analyticsId: (0, _v13.generateRandomUInt32Id)(),
      ..._v35
    },
    ..._v34,
    ..._v33
  }), "createDescriptionElement", 0, (_v0, _v1 = !1) => {
    let {
        descRect: _v2
      } = _v29(_v0, _v1),
      _v3 = _v27(_v0, "description");
    return {
      id: (0, _v13.createUuidV4)(),
      type: _v11.CompositionElementType.BUTTON,
      zindex: 3,
      rect: _v2,
      backgroundColor: "#ebebeb",
      bgAlpha: 0,
      textColor: "#7d7d7d",
      textContent: _v9.SCORECARD_TEMPLATE_DEFAULT_TEXTS.description,
      borderColor: "#000000",
      borderWidth: 0,
      borderRadius: 0,
      fontSize: _v3,
      animationName: _v32,
      font: "InterTight-Regular",
      interactiveHotspot: {
        name: _v9.SCORECARD_DESCRIPTION_HOTSPOT_NAME,
        analyticsId: (0, _v13.generateRandomUInt32Id)(),
        ..._v35
      },
      ..._v34,
      ..._v33
    };
  }, "createRetakeButtonElement", 0, (_v0, _v1 = !1) => {
    let _v2 = _v28(_v0, _v1),
      _v3 = _v27(_v0, "button");
    return {
      id: (0, _v13.createUuidV4)(),
      type: _v11.CompositionElementType.BUTTON,
      zindex: 1,
      rect: _v2,
      backgroundColor: "#000000",
      bgAlpha: 100,
      textColor: "#ffffff",
      textContent: _v9.SCORECARD_TEMPLATE_DEFAULT_TEXTS.retake,
      borderColor: "#000000",
      borderWidth: 0,
      borderRadius: _v23,
      fontSize: _v3,
      animationName: _v32,
      font: "InterTight-Regular",
      interactiveHotspot: {
        name: _v9.SCORECARD_RETAKE_BUTTON_HOTSPOT_NAME,
        analyticsId: (0, _v13.generateRandomUInt32Id)(),
        action: {
          type: _v3.HotspotActionType.RETAKE_QUIZ
        },
        pauseOnClick: !1,
        hover: {
          zoom: 1.05
        }
      },
      ..._v34,
      ..._v33
    };
  }, "createRetakesLeftTextElement", 0, (_v0, _v1 = !1) => {
    let _v2 = function (_v0, _v1 = !1) {
        let _v2 = _v26(_v0),
          _v3 = _v25,
          _v4 = _v28(_v0, _v1),
          _v5 = _v3.width * _v2.dimensionScale,
          _v6 = _v3.height * _v2.dimensionScale,
          _v7 = _v5,
          _v8 = _v6;
        _v2.isWider ? (_v7 = .9 * _v5, _v8 = +_v6) : _v2.isTaller && (_v7 = 1.1 * _v5, _v8 = .9 * _v6);
        let _v9 = .02 * _v2.dimensionScale;
        return {
          x: .5 - _v7 / 2,
          y: _v4.y + _v4.height + _v9,
          width: _v7,
          height: _v8
        };
      }(_v0, _v1),
      _v3 = _v27(_v0, "retakesLeft");
    return {
      id: (0, _v13.createUuidV4)(),
      type: _v11.CompositionElementType.BUTTON,
      zindex: 4,
      rect: _v2,
      backgroundColor: "#ebebeb",
      bgAlpha: 0,
      textColor: "#7d7d7d",
      textContent: _v9.SCORECARD_TEMPLATE_DEFAULT_TEXTS.retakesLeftText,
      borderColor: "#000000",
      borderWidth: 0,
      borderRadius: 0,
      fontSize: _v3,
      animationName: _v32,
      font: "InterTight-Regular",
      interactiveHotspot: {
        name: _v9.SCORECARD_RETAKE_LEFT_TEXT_HOTSPOT_NAME,
        analyticsId: (0, _v13.generateRandomUInt32Id)(),
        ..._v35
      },
      ..._v34,
      ..._v33
    };
  }, "createTitleElement", 0, (_v0, _v1 = !1) => {
    let {
        titleRect: _v2
      } = _v29(_v0, _v1),
      _v3 = _v27(_v0, "title");
    return {
      id: (0, _v13.createUuidV4)(),
      type: _v11.CompositionElementType.BUTTON,
      zindex: 2,
      rect: _v2,
      backgroundColor: "#ebebeb",
      bgAlpha: 0,
      textColor: "#000000",
      textContent: _v9.SCORECARD_TEMPLATE_DEFAULT_TEXTS.title,
      borderColor: "#000000",
      borderWidth: 0,
      borderRadius: 0,
      fontSize: _v3,
      animationName: _v32,
      font: "InterTight-Medium",
      interactiveHotspot: {
        name: _v9.SCORECARD_TITLE_HOTSPOT_NAME,
        analyticsId: (0, _v13.generateRandomUInt32Id)(),
        ..._v35
      },
      ..._v34,
      ..._v33
    };
  }, "getDFStoryboardWithQuestionProgress", 0, (_v0, _v1, _v2) => {
    let _v3 = _v0.orientation ?? _v2.Orientation.LANDSCAPE,
      _v4 = _v0.layers.flatMap(_v0 => _v0.composition.filter(_v12.isOverlayElement).map(_v0 => _v0.id)),
      _v5 = _v2.filter(({
        poll: _v0
      }) => _v0.variant === _v5.POLL_VARIANT.QUIZ),
      _v6 = _v5.length,
      _v7 = _v5.map((_v0, _v1) => {
        let _v2 = _v0.adjustedStartTime,
          _v3 = _v0.adjustedStartTime + (_v0.poll.compositionTiming.end - _v0.poll.compositionTiming.start),
          _v4 = !_v0.linkedElementId,
          _v5 = _v0.linkedElementId && _v4.includes(_v0.linkedElementId);
        return _v4 || _v5 ? (({
          totalQuestions: _v0,
          currentQuestion: _v1,
          orientation: _v2,
          compositionTiming: _v3
        }) => {
          let _v4 = _v30[_v2],
            _v5 = _v31[_v2];
          return {
            id: (0, _v13.createUuidV4)(),
            type: _v11.CompositionElementType.BUTTON,
            rect: _v4,
            backgroundColor: "#181E24",
            bgAlpha: 100,
            textColor: "#FFFFFF",
            textContent: `Question ${_v1} of ${_v0}`,
            borderColor: "#FFFFFF",
            borderWidth: 1,
            borderRadius: 14,
            fontSize: _v5,
            animationName: _v4.AnimationType.NONE,
            font: "InterTight-Medium",
            interactiveHotspot: {
              name: _v9.SCORECARD_RETAKE_LEFT_TEXT_HOTSPOT_NAME,
              analyticsId: (0, _v13.generateRandomUInt32Id)(),
              ..._v35
            },
            ..._v34,
            selectable: !1,
            resizable: !1,
            draggable: !1,
            compositionTiming: _v3
          };
        })({
          totalQuestions: _v6,
          currentQuestion: _v1 + 1,
          orientation: _v3,
          compositionTiming: {
            start: _v2,
            end: _v3
          }
        }) : null;
      }).filter(Boolean),
      _v8 = [..._v0.layers, (0, _v16.createLayer)([..._v7])];
    return {
      ..._v0,
      layers: (0, _v15.alignZIndices)(_v8)
    };
  }, "getDFStoryboardWithScorecardOverlay", 0, (_v0, _v1, _v2) => {
    let _v3 = (0, _v16.createLayer)([{
        id: (0, _v13.createUuidV4)(),
        type: _v11.CompositionElementType.OVERLAY,
        overlayId: _v1,
        rect: _v6.DEFAULT_RECT,
        selectable: !1,
        compositionTiming: {
          start: (0, _v17.toNearestFrame)(_v2 - _v8.SCORECARD_TRIGGER_TIME_FROM_END),
          end: _v2
        }
      }]),
      _v4 = [..._v0.layers];
    _v4.splice(_v4.length - 1, 0, _v3);
    let _v5 = _v0.interactiveOverlays?.map(_v0 => _v0.id === _v1 ? {
        ..._v0,
        interactiveLayers: _v0.interactiveLayers.map(_v0 => ({
          ..._v0,
          composition: _v0.composition.map(_v0 => ({
            ..._v0,
            compositionTiming: {
              start: 0,
              end: _v8.SCORECARD_TRIGGER_TIME_FROM_END
            },
            animationName: _v1.MediaAnimation.NONE
          })) ?? []
        }))
      } : _v0),
      _v6 = {
        ..._v0,
        layers: (0, _v15.alignZIndices)(_v4),
        interactiveOverlays: _v5
      };
    return (0, _v14.lowerCaseUnderscore)(_v6);
  }, "getLogoRectByOrientation", 0, (_v0, _v1) => {
    let _v2 = _v0.width / _v0.height,
      _v3 = _v1 === _v2.Orientation.LANDSCAPE ? .1 : .18,
      _v4 = _v3 * _v10.ORIENTATION_MAP[_v1].width / _v2 / _v10.ORIENTATION_MAP[_v1].height;
    return {
      x: .5 - _v3 / 2,
      y: .2 - _v4 / 2,
      width: _v3,
      height: _v4
    };
  }], 0);
  var _v36 = _v0.i(0),
    _v37 = _v0.i(0);
  _v0.s(["getPollHeight", 0, ({
    questionText: _v0,
    answers: _v1,
    font: _v2,
    pollStyleId: _v3,
    pollRectWidth: _v4,
    orientation: _v5
  }) => {
    let {
      height: _v6,
      width: _v7
    } = (0, _v36.measurePoll)({
      question: _v0,
      answers: _v1,
      styleId: _v3,
      font: _v2,
      orientation: (0, _v37.toBaseOrientation)(_v5)
    });
    return _v4 / (_v7 / _v6) * _v10.ORIENTATION_RATIO_MAP[_v5];
  }], 0);
}