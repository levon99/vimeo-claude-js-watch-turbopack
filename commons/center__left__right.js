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
    _v11 = _v0.i(0);
  let _v12 = {
    CENTER: "center",
    LEFT: "left",
    RIGHT: "right"
  };
  _v0.s(["Alignment", 0, _v12, "VerticalAlignment", 0, {
    BOTTOM: "bottom",
    MIDDLE: "middle",
    TOP: "top"
  }], 0);
  let _v13 = _v0 => Math.round((_v0 + Number.EPSILON) * 100) / 100,
    _v14 = (_v0, _v1, _v2, _v3) => {
      let _v4 = _v0.filter(_v0 => _v13(_v0.rect.x) !== _v13(_v1.x + _v3) || _v13(_v0.rect.y) !== _v13(_v1.y + _v3));
      return _v4.length === _v0.length ? _v3 : _v14(_v4, _v1, _v2, _v3 + _v2);
    },
    _v15 = (_v0, _v1, _v2, _v3) => {
      let _v4 = _v0.x;
      return _v3 === _v12.CENTER && (_v4 += (_v0.width - _v1) / 2), _v3 === _v12.RIGHT && (_v4 += _v0.width - _v1), {
        width: _v1,
        height: _v2,
        x: _v4,
        y: _v0.y + (_v0.height - _v2) / 2
      };
    };
  _v0.s(["calculateContainedRect", 0, function ({
    rect: _v0,
    newWidth: _v1,
    newHeight: _v2
  }) {
    let _v3 = {
        height: 0,
        width: 0,
        x: 0,
        y: 0
      },
      _v4 = _v0.height / _v2;
    return _v3.height = _v0.height, _v3.width = _v1 * _v4, _v3.x = _v0.x + (_v0.width - _v3.width) / 2, _v3.y = _v0.y + (_v0.height - _v3.height) / 2, _v3;
  }, "getBoundingBoxRect", 0, _v0 => {
    let {
      top: _v1,
      left: _v2,
      right: _v3,
      bottom: _v4
    } = _v0.reduce((_v0, _v1) => {
      let {
        x: _v2,
        y: _v3,
        width: _v4,
        height: _v5
      } = _v1;
      return {
        top: Math.min(_v0.top, _v3),
        left: Math.min(_v0.left, _v2),
        right: Math.max(_v0.right, _v2 + _v4),
        bottom: Math.max(_v0.bottom, _v3 + _v5)
      };
    }, {
      top: 11,
      left: 11,
      right: -10,
      bottom: -10
    });
    return {
      x: _v2,
      y: _v1,
      width: _v3 - _v2,
      height: _v4 - _v1
    };
  }, "getRectWithOffset", 0, (_v0, _v1) => {
    let _v2 = _v14(_v1, _v0, _v9.ELEMENT_STAGE_NUDGE, 0),
      _v3 = 1 - _v0.width,
      _v4 = 1 - _v0.height;
    return {
      ..._v0,
      x: Math.min(_v0.x + _v2, _v3),
      y: Math.min(_v0.y + _v2, _v4)
    };
  }, "realignRect", 0, _v15, "recenterRect", 0, (_v0, _v1, _v2) => _v15(_v0, _v1, _v2, _v12.CENTER)], 0);
  var _v16 = _v0.i(0);
  let _v17 = _v0 => _v0?.type === _v1.CompositionElementType.TEXT,
    _v18 = _v0 => _v0?.type === _v1.CompositionElementType.SOUND,
    _v19 = _v0 => _v0?.type === _v1.CompositionElementType.GRAPHIC_IMAGE || _v0?.type === _v1.CompositionElementType.GRAPHIC_IMAGE_UPLOADED,
    _v20 = _v0 => _v0?.type === _v1.CompositionElementType.IMAGE && void 0 !== _v0.interactiveHotspot,
    _v21 = _v0 => _v0?.type === _v1.CompositionElementType.BUTTON,
    _v22 = _v0 => _v21(_v0) || _v20(_v0),
    _v23 = _v0 => _v0?.type === _v1.CompositionElementType.POLL,
    _v24 = _v0 => _v0?.type === _v1.CompositionElementType.OVERLAY,
    _v25 = _v0 => _v0?.type === _v1.CompositionElementType.TIME_TRIGGER,
    _v26 = _v0 => _v0?.type === _v1.CompositionElementType.IFRAME,
    _v27 = _v0 => _v0?.type === _v1.CompositionElementType.VIDEO,
    _v28 = _v0 => _v0?.type === _v1.CompositionElementType.VIDEO || _v0?.type === _v1.CompositionElementType.IMAGE,
    _v29 = _v0 => _v0 === _v7.MediaType.IMAGE || _v0 === _v7.MediaType.VIDEO,
    _v30 = ({
      type: _v0,
      interactiveHotspot: _v1
    }) => {
      switch (_v0) {
        case _v1.CompositionElementType.IMAGE:
          return _v1 ? _v1.CompositionElementCategoryType.IMAGE_HOTSPOT : _v1.CompositionElementCategoryType.IMAGE;
        case _v1.CompositionElementType.POLL:
          return _v1.CompositionElementCategoryType.POLL;
        case _v1.CompositionElementType.BUTTON:
          return _v1.CompositionElementCategoryType.BUTTON;
        case _v1.CompositionElementType.VIDEO:
          return _v1.CompositionElementCategoryType.VIDEO;
        case _v1.CompositionElementType.TEXT:
          return _v1.CompositionElementCategoryType.TEXT;
        case _v1.CompositionElementType.GRAPHIC_IMAGE:
        case _v1.CompositionElementType.GRAPHIC_IMAGE_UPLOADED:
          return _v1.CompositionElementCategoryType.GRAPHICS;
        case _v1.CompositionElementType.SOUND:
          return _v1.CompositionElementCategoryType.SOUND;
        case _v1.CompositionElementType.SOLID:
          return _v1.CompositionElementCategoryType.SOLID;
        case _v1.CompositionElementType.TIME_TRIGGER:
          return _v1.CompositionElementCategoryType.TIME_TRIGGER;
        case _v1.CompositionElementType.OVERLAY:
          return _v1.CompositionElementCategoryType.OVERLAY;
        case _v1.CompositionElementType.IFRAME:
          return _v1.CompositionElementCategoryType.IFRAME;
        default:
          return _v1.CompositionElementCategoryType.EMPTY;
      }
    },
    _v31 = {
      [_v1.CompositionElementCategoryType.VIDEO]: _v8.ToolbarType.VIDEO,
      [_v1.CompositionElementCategoryType.IMAGE]: _v8.ToolbarType.IMAGE,
      [_v1.CompositionElementCategoryType.IMAGE_HOTSPOT]: _v8.ToolbarType.IMAGE_HOTSPOT,
      [_v1.CompositionElementCategoryType.TEXT]: _v8.ToolbarType.TEXT,
      [_v1.CompositionElementCategoryType.BUTTON]: _v8.ToolbarType.BUTTON,
      [_v1.CompositionElementCategoryType.GRAPHICS]: _v8.ToolbarType.GRAPHICS,
      [_v1.CompositionElementCategoryType.SOLID]: _v8.ToolbarType.SOLID,
      [_v1.CompositionElementCategoryType.SOUND]: _v8.ToolbarType.SOUND,
      [_v1.CompositionElementCategoryType.EMPTY]: _v8.ToolbarType.CANVAS
    };
  _v0.s(["createPartialTextElement", 0, ({
    textElement: _v0,
    text: _v1,
    font: _v2,
    fontSize: _v3,
    fetchedFonts: _v4,
    languages: _v5,
    orientation: _v6
  }) => {
    if (!_v0 || !_v4 || !_v5) throw Error(_v5.DATA_STILL_FETCHING);
    let _v7 = _v2;
    if (_v1 && (0, _v11.isLanguageChanged)(_v0.text, _v1, _v5)) {
      let _v0 = (0, _v11.detectLanguage)(_v1, _v5),
        _v1 = (0, _v10.getPreferredFontByLanguage)(Object.values(_v4), _v0);
      _v7 = _v1?.name;
    }
    let _v8 = {};
    if (_v7 || _v1) {
      let {
          lineHeight: _v0
        } = _v4[_v7 || _v0.font].metaData,
        {
          SVG_HEIGHT: _v1
        } = (0, _v16.createSVGDimensions)(_v6),
        {
          width: _v2,
          height: _v3
        } = (0, _v16.getSVGTextDimensions)({
          text: _v1 || _v0.text,
          font: _v7 || _v0.font,
          fontSize: _v0.fontSize * _v1,
          orientation: _v6,
          lineHeight: _v0
        });
      _v8.rect = _v15(_v0.rect, _v2, _v3, _v0.align);
    }
    if (_v3) {
      let _v0 = (0, _v10.getRelativeFontSize)(_v3, _v6) / _v0.fontSize,
        {
          width: _v1,
          height: _v2
        } = _v0.rect;
      _v8.rect = _v15(_v0.rect, _v1 * _v0, _v2 * _v0, _v0.align), _v8.fontSize = _v0.fontSize * _v0;
    }
    return _v7 && (_v8.font = _v7), _v1 && (_v8.text = _v1), _v8;
  }, "getCategoryType", 0, _v30, "getCompositionWithoutTransition", 0, _v0 => _v0.filter(_v0 => _v0.type !== _v1.CompositionElementType.TRANSITION), "getLinkedOverlayId", 0, _v0 => _v22(_v0) && _v0.interactiveHotspot.action.type === _v3.HotspotActionType.SHOW_OVERLAY ? (_v0.interactiveHotspot?.action).overlayId : _v24(_v0) ? _v0.overlayId : void 0, "getPadding", 0, (_v0, _v1) => {
    if (_v17(_v0) && _v1) {
      let {
        textStyleId: _v0
      } = _v0;
      return "Circle" === _v0 ? _v4.CIRCLE_PADDING : _v1[_v0]?.metaData?.bgPadding ?? _v9.DEFAULT_BG_PADDING;
    }
    return _v9.DEFAULT_BG_PADDING;
  }, "getSortedComposition", 0, (_v0, _v1) => {
    let _v2 = _v0.slice().sort((_v0, _v1) => _v0.compositionTiming.start - _v1.compositionTiming.start);
    return _v1 && _v2.findIndex(_v0 => _v0.id === _v1) > -1 && _v2.splice(_v2.findIndex(_v0 => _v0.id === _v1), 1), _v2;
  }, "getToolbarTypeForElement", 0, _v0 => _v31[_v30({
    type: _v0.type,
    interactiveHotspot: _v20(_v0)
  })] || _v8.ToolbarType.CANVAS, "isButtonElement", 0, _v21, "isDuplicatableElement", 0, _v0 => void 0 !== _v0 && !_v0.isLoading && !_v25(_v0), "isElementAllowedInInteractiveOverlay", 0, _v0 => !_v24(_v0) && !_v25(_v0), "isElementTypeSound", 0, _v0 => _v0 === _v1.CompositionElementType.SOUND || _v0 === _v6.DnDItemType.GRID_ELEMENT_SOUND, "isElementWithTiming", 0, _v0 => _v27(_v0) || _v18(_v0), "isGraphicElement", 0, _v19, "isIframeElement", 0, _v26, "isIframeGoogleMapsElement", 0, _v0 => _v26(_v0) && _v0.preset === _v2.IframeElementPreset.GOOGLE_MAPS, "isIframeUrlElement", 0, _v0 => _v26(_v0) && _v0.preset === _v2.IframeElementPreset.URL, "isIframeVimeoVideoElement", 0, _v0 => _v26(_v0) && _v0.preset === _v2.IframeElementPreset.VIMEO_VIDEO, "isImageElement", 0, _v0 => _v0?.type === _v1.CompositionElementType.IMAGE, "isImageHotspot", 0, _v20, "isInCurrentTime", 0, (_v0, _v1, _v2) => {
    let _v3 = !1;
    return _v3 = _v0 >= _v2 ? _v1.compositionTiming.end >= _v0 : _v1.compositionTiming.end > _v0, _v1.compositionTiming.start <= _v0 && _v3;
  }, "isInteractiveElement", 0, _v0 => _v20(_v0) || _v23(_v0) || _v25(_v0) || _v21(_v0) || _v24(_v0), "isInteractiveHotspot", 0, _v22, "isLogo", 0, _v0 => !!_v0?.sourceHash?.includes("logo"), "isMediaElement", 0, _v28, "isMediaType", 0, _v29, "isOverlayElement", 0, _v24, "isPollElement", 0, _v23, "isReplaceableElement", 0, _v0 => _v28(_v0) || _v19(_v0), "isReplaceableType", 0, _v0 => _v29(_v0) || _v0 === _v1.CompositionElementCategoryType.GRAPHICS, "isSolidElement", 0, _v0 => _v0?.type === _v1.CompositionElementType.SOLID, "isSoundElement", 0, _v18, "isTextElement", 0, _v17, "isTimeTriggerElement", 0, _v25, "isTransitionElement", 0, _v0 => _v0?.type === _v1.CompositionElementType.TRANSITION, "isUploadedGraphicElement", 0, _v0 => _v0?.type === _v1.CompositionElementType.GRAPHIC_IMAGE_UPLOADED, "isVideoElement", 0, _v27], 0);
}