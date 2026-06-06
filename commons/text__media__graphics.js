{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = {
    [_v1.CompositionElementType.TEXT]: "text",
    [_v1.CompositionElementType.IMAGE]: "media",
    [_v1.CompositionElementType.VIDEO]: "media",
    [_v1.CompositionElementType.GRAPHIC_IMAGE]: "graphics",
    [_v1.CompositionElementType.GRAPHIC_IMAGE_UPLOADED]: "graphics",
    [_v1.CompositionElementType.LOGO]: "media",
    [_v1.CompositionElementType.SOUND]: "media",
    [_v1.CompositionElementType.BUTTON]: "hotspot",
    [_v1.CompositionElementType.HOTSPOT]: "hotspot",
    [_v1.CompositionElementType.TIME_TRIGGER]: "hotspot",
    [_v1.CompositionElementType.POLL]: "polls_and_quizzes",
    [_v1.CompositionElementType.OVERLAY]: "overlays",
    [_v1.CompositionElementType.IFRAME]: "embed",
    [_v1.CompositionElementType.TRANSITION]: "transition",
    [_v1.CompositionElementType.SOLID]: "graphics"
  };
  _v0.s(["trackAddElement", 0, (_v0, _v1) => {
    let _v2 = _v0.compositionTiming.end - _v0.compositionTiming.start;
    _v2.default.send({
      eventName: "vimeo.add_timeline_element",
      version: 2,
      contexts: {
        ..._v2.default.buildActionContext("click"),
        ..._v2.default.buildEditorContext({
          via: "timeline",
          element: _v0.type,
          editorFeature: "add_element"
        }),
        ..._v2.default.buildWebContext(),
        ..._v2.default.buildTeamContext(),
        ..._v2.default.buildProductAnalyticsContext({
          feature: _v5[_v0.type],
          location: "drawer",
          copy: _v1
        })
      },
      additionalFields: {
        third_party_integration: _v2.default.getThirdPartyIntegration(),
        action: null,
        action_direction: null,
        element_duration: _v2,
        element_duration_destination: _v2,
        element_num: null,
        layer_num: null,
        number_of_elements_in_layerr: null,
        number_of_selected_elements: 1,
        total_number_of_layers: null,
        selection_id: (0, _v3.isPollElement)(_v0) ? _v0.styleId : null
      }
    });
  }, "trackDeleteElements", 0, ({
    ceIds: _v0,
    via: _v1,
    layers: _v2,
    copy: _v3
  }) => {
    _v0.forEach(_v0 => {
      let {
        layerIndex: _v1,
        ceIndex: _v2
      } = (0, _v4.getLayerDataByCeId)(_v0, _v2);
      if (-1 === _v1 || -1 === _v2) return;
      let _v3 = _v2[_v1].composition[_v2],
        _v4 = _v3.compositionTiming.end - _v3.compositionTiming.start;
      _v2.default.send({
        eventName: "vimeo.delete_timeline_element",
        version: 1,
        contexts: {
          ..._v2.default.buildActionContext("click"),
          ..._v2.default.buildEditorContext({
            via: _v1,
            element: _v3.type,
            editorFeature: "delete_element"
          }),
          ..._v2.default.buildWebContext(),
          ..._v2.default.buildTeamContext(),
          ..._v2.default.buildProductAnalyticsContext({
            feature: _v5[_v3.type],
            location: "drawer",
            copy: _v3
          })
        },
        additionalFields: {
          action: "delete",
          action_direction: null,
          element_duration: _v4,
          element_duration_destination: _v4,
          element_num: _v2,
          layer_num: _v1,
          number_of_elements_in_layerr: _v2[_v1].composition.length,
          number_of_selected_elements: _v0.length,
          third_party_integration: _v2.default.getThirdPartyIntegration(),
          total_number_of_layers: _v2.length
        }
      });
    });
  }], 0);
  var _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  _v0.s(["createGraphicLibrarySource", 0, _v0 => ({
    mhash: "",
    hash: _v0.id,
    height: 0,
    width: 0,
    type: _v6.SourceType.IMAGE,
    duration: 0,
    service: "",
    previewUrl: _v0.path,
    previewUrlLivePhoto: null,
    previewHeight: _v0.height ?? _v7.DEFAULT_LIBRARY_GRAPHIC_DIMENSIONS.height,
    previewWidth: _v0.width ?? _v7.DEFAULT_LIBRARY_GRAPHIC_DIMENSIONS.width,
    order: 0,
    text: null,
    name: _v0.name,
    size: 0,
    externalId: "",
    hasAudio: !1,
    masks: null,
    thumbnailsSprites: null,
    thumb: null,
    transcriptions: [],
    status: "",
    fps: 0
  }), "getGraphicRectSize", 0, function (_v0) {
    let _v1 = _v7.DEFAULT_GRAPHIC_RECT_SIZE,
      _v2 = _v7.DEFAULT_GRAPHIC_RECT_SIZE,
      _v3 = _v8.OrientationRatio[_v0];
    return _v3 && (_v3 > 1 ? _v1 /= _v3 : _v2 *= _v3), {
      rectWidth: _v1,
      rectHeight: _v2
    };
  }], 0);
}