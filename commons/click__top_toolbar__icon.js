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
    _v14 = _v0.i(0);
  let _v15 = ({
      feature: _v0,
      copy: _v1 = null
    }) => ({
      ..._v14.default.buildWebContext(),
      ..._v14.default.buildActionContext("click"),
      ..._v14.default.buildTeamContext(),
      ..._v14.default.buildEditorContext({
        via: null,
        editorFeature: ""
      }),
      ..._v14.default.buildProductAnalyticsContext({
        feature: _v0,
        location: "top_toolbar",
        element: "icon",
        copy: _v1
      })
    }),
    _v16 = ({
      action: _v0 = null,
      actionState: _v1 = null,
      selectionName: _v2 = null,
      selectionValue: _v3 = null,
      actionCTA: _v4 = null,
      selectionFormat: _v5 = null,
      numberOfElements: _v6 = null
    }) => ({
      action: _v0,
      action_cta: _v4,
      action_state: _v1,
      number_of_elements: _v6,
      selection_format: _v5,
      selection_id: null,
      third_party_integration: _v14.default.getThirdPartyIntegration(),
      selection_name: _v2,
      selection_value: _v3
    }),
    _v17 = ({
      orientation: _v0,
      elementType: _v1
    }) => {
      _v14.default.send({
        eventName: "vimeo.apply_replace_action",
        version: 4,
        contexts: _v15({
          feature: "media"
        }),
        additionalFields: _v16({
          actionCTA: "replace",
          selectionFormat: _v0,
          selectionName: _v1
        })
      });
    };
  _v0.s(["sendTrackApplyReplaceAction", 0, _v17, "sendTrackChangeAudioFadeIn", 0, ({
    fadeInBefore: _v0,
    fadeInAfter: _v1
  }) => {
    _v14.default.send({
      eventName: "vimeo.change_audio_fade_in",
      version: 4,
      contexts: _v15({
        feature: "media"
      }),
      additionalFields: _v16({
        actionState: _v0,
        selectionValue: Number(_v1),
        actionCTA: "fade_in"
      })
    });
  }, "sendTrackChangeAudioFadeOut", 0, ({
    fadeOutBefore: _v0,
    fadeOutAfter: _v1
  }) => {
    _v14.default.send({
      eventName: "vimeo.change_audio_fade_out",
      version: 4,
      contexts: _v15({
        feature: "media"
      }),
      additionalFields: _v16({
        actionState: _v0,
        selectionValue: Number(_v1),
        actionCTA: "fade_out"
      })
    });
  }, "sendTrackChangeAudioVolume", 0, ({
    volumeBefore: _v0,
    volumeAfter: _v1
  }) => {
    _v14.default.send({
      eventName: "vimeo.change_audio_volume",
      version: 4,
      contexts: _v15({
        feature: "media"
      }),
      additionalFields: _v16({
        actionState: _v0.toString(),
        selectionValue: _v1,
        actionCTA: "audio_volume"
      })
    });
  }, "sendTrackChangeFontSize", 0, ({
    fontSizeBefore: _v0,
    fontSizeAfter: _v1,
    action: _v2
  }) => {
    _v14.default.send({
      eventName: "vimeo.change_font_size",
      version: 4,
      contexts: _v15({
        feature: "text"
      }),
      additionalFields: _v16({
        actionState: _v0.toString(),
        selectionValue: _v1,
        action: _v2
      })
    });
  }, "sendTrackChangeMotionEffect", 0, ({
    orientation: _v0,
    elementType: _v1,
    motionEffectValue: _v2
  }) => {
    _v14.default.send({
      eventName: "vimeo.change_motion_effect",
      version: 4,
      contexts: _v15({
        feature: "media"
      }),
      additionalFields: _v16({
        actionCTA: _v2,
        selectionFormat: _v0,
        selectionName: _v1
      })
    });
  }, "sendTrackSelectAlignmentOptions", 0, () => {
    _v14.default.send({
      eventName: "vimeo.select_alignment_options",
      version: 4,
      contexts: _v15({
        feature: "text"
      }),
      additionalFields: _v16({})
    });
  }, "sendTrackSelectFitType", 0, ({
    orientation: _v0,
    elementType: _v1,
    fitType: _v2,
    numberOfElements: _v3
  }) => {
    _v14.default.send({
      eventName: "vimeo.select_fit_type",
      version: 4,
      contexts: _v15({
        feature: "media"
      }),
      additionalFields: _v16({
        actionCTA: _v2,
        selectionFormat: _v0,
        selectionName: _v1,
        numberOfElements: _v3 ?? null
      })
    });
  }, "sendTrackSelectFitTypeOptions", 0, ({
    orientation: _v0,
    elementType: _v1,
    numberOfElements: _v2
  }) => {
    _v14.default.send({
      eventName: "vimeo.select_fit_types_options",
      version: 4,
      contexts: _v15({
        feature: "media"
      }),
      additionalFields: _v16({
        actionCTA: "fit_types",
        selectionFormat: _v0,
        selectionName: _v1,
        numberOfElements: _v2 ?? null
      })
    });
  }, "sendTrackSelectFontOptions", 0, ({
    fontBefore: _v0
  }) => {
    _v14.default.send({
      eventName: "vimeo.select_font_options",
      version: 4,
      contexts: _v15({
        feature: "media"
      }),
      additionalFields: _v16({
        actionState: _v0
      })
    });
  }, "sendTrackSelectMediaSoundOptions", 0, () => {
    _v14.default.send({
      eventName: "vimeo.select_media_sound_options",
      version: 4,
      contexts: _v15({
        feature: "media"
      }),
      additionalFields: _v16({
        actionCTA: "media_sound",
        selectionName: "VideoElement"
      })
    });
  }, "sendTrackSelectMotionEffectOptions", 0, ({
    orientation: _v0,
    elementType: _v1
  }) => {
    _v14.default.send({
      eventName: "vimeo.select_motion_effect_options",
      version: 4,
      contexts: _v15({
        feature: "media"
      }),
      additionalFields: _v16({
        actionCTA: "motion_effect",
        selectionFormat: _v0,
        selectionName: _v1
      })
    });
  }, "sendTrackSelectReplaceOption", 0, ({
    orientation: _v0
  }) => {
    _v14.default.send({
      eventName: "vimeo.select_replace_option",
      version: 4,
      contexts: _v15({
        feature: "media"
      }),
      additionalFields: _v16({
        actionCTA: "replace",
        selectionFormat: _v0
      })
    });
  }, "sendTrackSelectTextAlignment", 0, ({
    alignmentBefore: _v0,
    alignmentAfter: _v1
  }) => {
    _v14.default.send({
      eventName: "vimeo.select_text_alignment",
      version: 4,
      contexts: _v15({
        feature: "text"
      }),
      additionalFields: _v16({
        actionState: _v0,
        selectionName: _v1
      })
    });
  }, "sendTrackSelectTextAnimation", 0, () => {
    _v14.default.send({
      eventName: "vimeo.select_text_animation",
      version: 4,
      contexts: _v15({
        feature: "text"
      }),
      additionalFields: _v16({
        actionCTA: "animation"
      })
    });
  }, "sendTrackSelectTextColorOptions", 0, ({
    colorType: _v0
  }) => {
    _v14.default.send({
      eventName: "vimeo.select_text_color_options",
      version: 4,
      contexts: _v15({
        feature: "text",
        copy: _v0
      }),
      additionalFields: _v16({})
    });
  }, "sendTrackSelectTextDropShadow", 0, ({
    shadowBefore: _v0,
    shadowAfter: _v1
  }) => {
    let _v2 = _v0 === _v13.DropShadow.SHARP ? "strong" : _v0,
      _v3 = _v1 === _v13.DropShadow.SHARP ? "strong" : _v1;
    _v14.default.send({
      eventName: "vimeo.select_text_drop_shadow",
      version: 4,
      contexts: _v15({
        feature: "text",
        copy: _v1
      }),
      additionalFields: _v16({
        actionState: _v2,
        selectionName: _v3
      })
    });
  }, "sendTrackSelectTextDropShadowOptions", 0, () => {
    _v14.default.send({
      eventName: "vimeo.select_drop_shadow_options",
      version: 4,
      contexts: _v15({
        feature: "text"
      }),
      additionalFields: _v16({
        actionCTA: "drop_shadow"
      })
    });
  }, "sendTrackSelectTextEdit", 0, () => {
    _v14.default.send({
      eventName: "vimeo.select_text_edit",
      version: 4,
      contexts: _v15({
        feature: "text"
      }),
      additionalFields: _v16({
        actionCTA: "edit_text"
      })
    });
  }], 0);
  var _v18 = _v0.i(0);
  _v0.s(["useReplaceElement", 0, () => {
    let _v0 = (0, _v10.useAppDispatch)(),
      _v1 = (0, _v10.useAppSelector)(_v9.isReplaceToolbarOpenSelector),
      _v2 = (0, _v10.useAppSelector)(_v5.currentInspectorSelector),
      _v3 = (0, _v10.useAppSelector)(_v8.orientationSelector),
      _v4 = (0, _v10.useAppSelector)(_v4.isInteractiveSelector),
      _v5 = (0, _v10.useAppSelector)(_v6.isEditingOverlaySelector),
      {
        pause: _v6
      } = (0, _v3.useDragonfly)(),
      _v7 = (0, _v1.useCallback)(_v0 => {
        _v6(), _v0((0, _v9.showToolbarAction)(_v12.ToolbarType.REPLACE)), _v2 !== _v11.InspectorType.HOTSPOTS && _v4 && ((0, _v18.isInteractiveHotspot)(_v0) && _v0.interactiveHotspot.action.type !== _v2.HotspotActionType.NONE || !_v5) ? _v0((0, _v5.openInspectorAction)({
          inspectorType: _v11.InspectorType.HOTSPOTS
        })) : _v2 === _v11.InspectorType.MEDIA || (0, _v18.isImageHotspot)(_v0) && _v0?.interactiveHotspot.action.type !== _v2.HotspotActionType.NONE || _v0((0, _v5.openInspectorAction)({
          inspectorType: _v11.InspectorType.MEDIA
        }));
      }, [_v2, _v0, _v5, _v4, _v6]);
    return {
      isReplacing: _v1,
      enterReplaceMode: _v7,
      exitReplaceMode: (0, _v1.useCallback)(_v0 => {
        _v17({
          orientation: _v3,
          elementType: _v0.type
        }), _v0((0, _v9.showToolbarAction)((0, _v18.getToolbarTypeForElement)(_v0))), _v0((0, _v7.clearLastElementAction)());
      }, [_v0, _v3]),
      replaceElement: (0, _v1.useCallback)(({
        selectedElement: _v0,
        newElement: _v1
      }) => {
        if (!_v0 || !_v1) return;
        _v1.id = _v0.id, _v1.zindex = _v0.zindex;
        let _v2 = _v0.compositionTiming.end - _v0.compositionTiming.start;
        (0, _v18.isVideoElement)(_v1) && (_v2 = Math.min(_v2, _v1.timing.endTime - _v1.timing.startTime));
        let _v3 = {
          ..._v1,
          compositionTiming: {
            start: _v0.compositionTiming.start,
            end: _v0.compositionTiming.start + _v2
          },
          ...((0, _v18.isVideoElement)(_v1) && {
            timing: {
              startTime: 0,
              endTime: _v2
            }
          }),
          ...((0, _v18.isVideoElement)(_v0) && (0, _v18.isVideoElement)(_v1) && {
            effects: _v0.effects
          }),
          ...((0, _v18.isImageElement)(_v0) && (0, _v18.isImageElement)(_v1) && {
            layers: _v0.layers
          }),
          ...((0, _v18.isGraphicElement)(_v0) && (0, _v18.isGraphicElement)(_v1) && {
            rotate: _v0.rotate,
            flip: _v0.flip,
            style: _v0.style,
            bgAlpha: _v0.bgAlpha,
            primaryColor: _v1.primaryColor && _v0.primaryColor ? _v0.primaryColor : _v1.primaryColor,
            secondaryColor: _v1.secondaryColor && _v0.secondaryColor ? _v0.secondaryColor : _v1.secondaryColor
          })
        };
        (0, _v18.isMediaElement)(_v3) && (0, _v18.isMediaElement)(_v0) && (_v0.animationMid && (0, _v18.isImageElement)(_v0) && (0, _v18.isImageElement)(_v3) && (_v3.animationMid = _v0.animationMid), _v0.animationOut && (_v3.animationOut = _v0.animationOut), _v0.animationName && (_v3.animationName = _v0.animationName)), (0, _v18.isImageHotspot)(_v0) && (0, _v18.isImageElement)(_v1) && (_v3.bgAlpha = _v0.bgAlpha, _v3.rotate = _v0.rotate, _v3.flip = _v0.flip, _v3.interactiveHotspot = _v0.interactiveHotspot, _v1.primaryColor && (_v3.primaryColor = _v0.primaryColor ?? _v1.primaryColor), _v1.secondaryColor && (_v3.secondaryColor = _v0.secondaryColor ?? _v1.secondaryColor)), _v0((0, _v8.replaceElementAction)({
          ceId: _v0.id,
          element: _v3
        }));
      }, [_v0])
    };
  }], 0);
}