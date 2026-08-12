{
  "use strict";

  _v0.s(["DF_CLONE_ELEMENT_SELECTOR", () => _v14, "useStageScreenshot", () => _v15]);
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
    _v13 = _v0.i(0);
  let _v14 = '.df-screenshot-container [data-component-name="dragonfly"]',
    _v15 = () => {
      let _v0 = (0, _v8.useAppSelector)(_v6.isScreenshottingSelector),
        _v1 = (0, _v8.useAppSelector)(_v7.storyboardIdSelector),
        _v2 = (0, _v2.useContext)(_v3.ScreenshotDragonflyContext),
        _v3 = (0, _v8.useAppDispatch)();
      return {
        takeScreenshot: (0, _v2.useCallback)(async (_v0, _v1) => {
          if (_v0) return void console.warn("Screenshot is already in progress.");
          _v3((0, _v6.setStoryboardLayersForScreenshotAction)(_v0)), _v3((0, _v6.setIsScreenshottingAction)(!0));
          let _v2 = new Promise((_v0, _v1) => setTimeout(() => _v1(Error("Screenshot timeout after 15 seconds")), 0)),
            _v3 = (async () => {
              try {
                await (0, _v12.waitForDFCloneRender)();
                let _v0 = (0, _v13.getDurationFromLayers)((0, _v11.extractOverlayInteractiveLayers)(_v0));
                if (0 === _v0) return null;
                _v2.current?.seek(_v0);
                let _v1 = document.querySelector(_v14);
                if (!_v1) return console.error("Dragonfly element not found."), null;
                let _v2 = await _v1.default.toPng(_v1, {
                    copyDefaultStyles: !1,
                    bgColor: "rgba(0,0,0,0)"
                  }),
                  _v3 = await (0, _v10.convertUrlToFile)(_v2, "overlay-thumbnail.png"),
                  _v4 = URL.createObjectURL(_v3);
                return _v3((0, _v6.setOverlayThumbnailObjectUrlAction)({
                  overlayId: _v1,
                  objectUrl: _v4
                })), _v3;
              } catch (_v0) {
                throw console.error("Error taking screenshot:", _v0), _v5.default.sendLog(_v4.FAILED_TO_GENERATE_OVERLAY_THUMBNAIL, _v9.LogComponent.INTERACTIVE_ERROR, {
                  error: _v0.toString(),
                  storyboardId: _v1,
                  overlayId: _v1
                }), _v0;
              }
            })();
          try {
            return await Promise.race([_v3, _v2]);
          } catch (_v0) {
            return console.error(_v0.message), null;
          } finally {
            _v3((0, _v6.setIsScreenshottingAction)(!1)), _v3((0, _v6.setStoryboardLayersForScreenshotAction)([]));
          }
        }, [_v2, _v3, _v0, _v1])
      };
    };
}