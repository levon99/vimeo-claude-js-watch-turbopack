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
    _v16 = _v0.i(0);
  let _v17 = /^https?:\/\/(?:(?:[^:@]+(?::[^:@]+)?)?@)?(?:(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)|\[(?:(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|(?:[0-9a-fA-F]{1,4}:){1,7}:|(?:[0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|(?:[0-9a-fA-F]{1,4}:){1,5}(?::[0-9a-fA-F]{1,4}){1,2}|(?:[0-9a-fA-F]{1,4}:){1,4}(?::[0-9a-fA-F]{1,4}){1,3}|(?:[0-9a-fA-F]{1,4}:){1,3}(?::[0-9a-fA-F]{1,4}){1,4}|(?:[0-9a-fA-F]{1,4}:){1,2}(?::[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:(?:(?::[0-9a-fA-F]{1,4}){1,6})|:(?:(?::[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(?::[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(?:ffff(?::0{1,4}){0,1}:){0,1}(?:(?:25[0-5]|(?:2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(?:25[0-5]|(?:2[0-4]|1{0,1}[0-9]){0,1}[0-9])|(?:[0-9a-fA-F]{1,4}:){1,4}:(?:(?:25[0-5]|(?:2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(?:25[0-5]|(?:2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\]|(?:(?:[a-zA-Z0-9\u00a1-\uffff][a-zA-Z0-9\u00a1-\uffff_-]{0,62})?[a-zA-Z0-9\u00a1-\uffff]\.)+(?:[a-zA-Z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
  function _v18(_v0) {
    return _v0.interactiveHotspot.action.type !== _v13.HotspotActionType.NONE;
  }
  _v0.s(["getDefaultHotspotUrl", 0, function (_v0) {
    return (0, _v11.isInteractiveHotspot)(_v0) && _v0.interactiveHotspot.action.type === _v13.HotspotActionType.OPEN_URL ? _v0.interactiveHotspot.action.url : _v14.HOTSPOT_DEFAULT_URL;
  }, "handleTimeRestrictions", 0, function ({
    compositionTiming: _v0,
    name: _v1,
    newTime: _v2,
    videoDuration: _v3
  }) {
    return "start" === _v1 && _v2 >= _v3 ? {
      start: (0, _v16.toNearestFrame)(_v3 - _v14.HOTSPOT_MIN_DURATION),
      end: _v3
    } : "start" === _v1 && _v0.end <= _v2 ? {
      end: (0, _v16.toNearestFrame)(_v2 + _v14.HOTSPOT_DEFAULT_DURATION)
    } : "end" === _v1 && 0 === _v2 ? {
      start: 0,
      end: (0, _v16.toNearestFrame)(_v14.HOTSPOT_MIN_DURATION)
    } : "end" === _v1 && _v0.start >= _v2 ? {
      start: _v2 - _v14.HOTSPOT_DEFAULT_DURATION < 0 ? 0 : (0, _v16.toNearestFrame)(_v2 - _v14.HOTSPOT_DEFAULT_DURATION)
    } : {};
  }, "hasInteractivity", 0, _v18, "isValidUrl", 0, function (_v0) {
    return "" === _v0 ? {
      isValid: !1,
      validityMessage: _v15.translations.pleaseEnterValidUrl
    } : _v0.startsWith("https://") || _v0.startsWith("http://") ? _v17.test(_v0) ? _v0.length > 0 ? {
      isValid: !1,
      validityMessage: _v15.translations.urlIsTooLong
    } : {
      isValid: !0,
      validityMessage: ""
    } : {
      isValid: !1,
      validityMessage: _v15.translations.pleaseEnterValidUrl
    } : {
      isValid: !1,
      validityMessage: _v15.translations.urlMustBeginWithProtocol
    };
  }], 0), _v0.s(["useAddElement", 0, () => {
    let _v0 = (0, _v7.useAppDispatch)(),
      {
        toggleInspector: _v1
      } = (0, _v2.useInspector)(),
      _v2 = (0, _v7.useAppSelector)(_v6.overlayEditorDurationSelector),
      _v3 = (0, _v7.useAppSelector)(_v3.currentInspectorSelector),
      _v4 = (0, _v1.useCallback)(_v0 => {
        let _v1 = _v0 => {
          _v3 !== _v0 && queueMicrotask(() => {
            _v1(_v0);
          });
        };
        if ((0, _v11.isInteractiveHotspot)(_v0)) {
          if ((0, _v11.isButtonElement)(_v0)) {
            if (_v0.textContent) return void _v1(_v8.InspectorType.BUTTON_TEXT_EDIT);
            if (_v18(_v0)) return void _v1(_v8.InspectorType.HOTSPOTS_SETTINGS);
          }
          if ((0, _v11.isImageHotspot)(_v0)) return _v18(_v0) ? void _v1(_v8.InspectorType.HOTSPOTS_SETTINGS) : void 0;
        }
        if ((0, _v11.isPollElement)(_v0)) return void _v1(_v8.InspectorType.POLL_EDIT);
      }, [_v1, _v3]);
    return {
      addElement: (0, _v1.useCallback)((_v0, _v1) => {
        let {
          resetSelection: _v2 = !1,
          copy: _v3,
          isIgnoreUndo: _v4 = !1,
          preventOverlayCompositionTiming: _v5 = !1
        } = _v1 ?? {};
        !_v5 && _v2 && _v0.compositionTiming && (_v0.compositionTiming = {
          start: 0,
          end: _v2
        }), (0, _v11.isGraphicElement)(_v0) && _v0((0, _v5.addSourceAction)((0, _v12.createGraphicLibrarySource)({
          id: _v0.sourceHash,
          name: _v0.sourceHash,
          path: _v0.mediaPath,
          isWhite: !1,
          isEditable: !1
        }))), (0, _v11.isSoundElement)(_v0) ? _v0((0, _v5.addAudioAction)({
          element: _v0,
          isIgnoreUndo: _v4
        })) : (0, _v11.isTimeTriggerElement)(_v0) ? _v0((0, _v5.addTimeTriggerAction)({
          element: _v0,
          isIgnoreUndo: _v4
        })) : _v0((0, _v5.addElementAction)({
          element: _v0,
          isIgnoreUndo: _v4
        })), _v2 ? _v0((0, _v4.resetSelectionAction)()) : _v0((0, _v4.selectCEsAction)({
          ceIds: [_v0.id]
        })), (0, _v10.trackAddElement)(_v0, _v3), _v2 || _v4(_v0);
      }, [_v0, _v4, _v2]),
      addIntroOutroElement: (0, _v1.useCallback)((_v0, _v1, _v2) => {
        _v0(_v2 === _v9.IntroOutroContext.INTRO ? (0, _v5.addIntroElementAction)({
          element: _v0
        }) : (0, _v5.addOutroElementAction)({
          element: _v0,
          videoDuration: _v1
        }));
      }, [_v0]),
      openInspectorAfterAddingElementIfNeeded: _v4
    };
  }], 0);
}