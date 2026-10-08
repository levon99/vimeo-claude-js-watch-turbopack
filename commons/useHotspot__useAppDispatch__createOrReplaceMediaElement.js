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
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0);
  _v0.s(["useHotspot", 0, () => {
    let _v0 = (0, _v11.useAppDispatch)(),
      {
        createOrReplaceMediaElement: _v1
      } = (0, _v19.useMediaElement)(),
      {
        getStoryboardMetadata: _v2,
        saveHotspotCount: _v3
      } = (0, _v8.useStoryboardMetadata)(),
      {
        addElement: _v4
      } = (0, _v18.useAddElement)(),
      {
        isReplacing: _v5
      } = (0, _v20.useReplaceElement)(),
      {
        uploadMedia: _v6
      } = (0, _v21.useUploadQueue)(),
      {
        getCurrentTimeFromRef: _v7
      } = (0, _v7.useDragonfly)(),
      _v8 = (0, _v11.useAppSelector)(_v9.durationSelector),
      _v9 = (0, _v11.useAppSelector)(_v9.brandColorsSelector),
      _v10 = (0, _v1.useCallback)(_v0 => {
        if (!_v0.isEditable) return {};
        let [_v1, _v2] = _v0.isWhite ? [_v9.primary, _v9.secondary] : [_v9.secondary, _v9.primary];
        if (_v0.primaryColor && !_v0.secondaryColor) return {
          primaryColor: _v1
        };
        if (_v0.primaryColor && _v0.secondaryColor) return {
          primaryColor: _v1,
          secondaryColor: _v2
        };
        throw Error(`Invalid graphic color configuration for graphic: ${_v0.id}`);
      }, [_v9]),
      _v11 = (0, _v1.useCallback)(() => {
        let _v0 = _v2()?.hotspotCount ?? 0;
        return _v3(_v0 + 1), `${_v6.translations.hotspot} #${_v0 + 1}`;
      }, [_v2, _v3]),
      _v12 = (0, _v1.useCallback)(({
        imageElement: _v0,
        interactiveHotspot: _v1,
        hoverAssetId: _v2
      }) => {
        let _v3 = {
          ..._v0,
          bgAlpha: 100,
          interactiveHotspot: {
            name: _v11(),
            altText: "",
            analyticsId: (0, _v16.generateRandomUInt32Id)(),
            ..._v4.INTERACTIVE_HOTSPOT_DEFAULTS,
            ..._v1,
            action: _v1?.action ?? {
              ..._v4.OPEN_URL_ACTION_DEFAULTS
            },
            hover: {
              ..._v1?.hover,
              bgAlpha: _v1?.hover?.bgAlpha ?? 100,
              zoom: _v1?.hover?.zoom ?? _v4.HOTSPOT_DEFAULT_HOVER_ZOOM
            }
          }
        };
        return _v2 && (_v3.interactiveHotspot.hover.sourceHash = _v2, _v3.interactiveHotspot.hover.isLoading = !0), _v3;
      }, [_v11]),
      _v13 = (0, _v1.useCallback)(async (_v0, _v1, _v2) => {
        let {
            colors: _v3 = {},
            interactiveHotspot: _v4
          } = _v2 ?? {},
          {
            time: _v5,
            coordinates: _v6
          } = _v1 ?? {},
          _v7 = _v5 ?? _v7(),
          {
            start: _v8
          } = (0, _v17.getSafeStartAndEndTime)(_v7, _v4.HOTSPOT_DEFAULT_DURATION, _v8),
          _v9 = await _v1({
            mediaItem: _v0,
            time: _v8,
            position: _v6,
            isAddToStoryboard: !1,
            useGraphicsSizing: !0,
            colors: _v3
          });
        if (!(0, _v15.isImageElement)(_v9)) throw Error(_v3.INCORRECT_ELEMENT_TYPE);
        let _v10 = _v5 ? _v9 : _v12({
          imageElement: _v9,
          interactiveHotspot: _v4,
          hoverAssetId: _v0.hoverAssetId
        });
        return _v5 || (_v0((0, _v10.showToolbarAction)(_v13.ToolbarType.IMAGE_HOTSPOT)), _v0((0, _v10.selectToolbarButtonAction)(_v5.ToolbarButtons.HOTSPOT_SETTINGS))), _v10;
      }, [_v1, _v5, _v12, _v7, _v8, _v0]),
      _v14 = (0, _v1.useCallback)(async (_v0, _v1, _v2) => {
        var _v3;
        let _v4,
          {
            shouldAddElement: _v5 = !0,
            interactiveHotspot: _v6
          } = _v2 ?? {},
          _v7 = (_v4 = (_v3 = _v0).svgPath ?? _v3.lowPath, {
            date: "",
            fileName: new URL(_v3.svgPath ?? _v3.path).pathname.split("/").pop() ?? _v3.name,
            width: _v3.width ?? _v2.DEFAULT_GRAPHIC_SIZE,
            height: _v3.height ?? _v2.DEFAULT_GRAPHIC_SIZE,
            id: _v3.id,
            thumbnailUrl: _v4,
            uplOrigin: _v14.UploadMediaOrigin.STICKERLIBITEM,
            previewUrl: _v4,
            title: _v3.name,
            type: _v12.MediaType.IMAGE,
            hoverAssetId: _v3.hoverAssetId,
            duration: _v4.HOTSPOT_DEFAULT_DURATION
          }),
          _v8 = await _v13(_v7, _v1, {
            colors: _v10(_v0),
            interactiveHotspot: _v6
          });
        return !_v5 && _v5 && _v4(_v8), _v6({
          origin: _v14.UploadMediaOrigin.STICKERLIBITEM,
          mediaItem: _v7,
          isReplacing: _v5,
          elementSourceHash: _v8.sourceHash
        }), _v8;
      }, [_v4, _v13, _v10, _v5, _v6]);
    return {
      createOrReplaceHotspotFromMedia: _v13,
      createOrReplaceAndAddHotspotFromGraphic: _v14,
      getNewHotspotName: _v11,
      toHotspotElement: _v12
    };
  }]);
}