{
  "use strict";

  _v0.s(["ScreenshotContainer", () => _v23, "ScreenshotDragonflyContext", () => _v22], 0), _v0.s(["createPlaceholderImageDataUrlUsingPixels", () => _v18, "prepareStoryboardForScreenshot", () => _v19, "waitForDFCloneRender", () => _v20], 0);
  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = ({
    size: _v0,
    children: _v1
  }) => (0, _v1.jsx)(_v3.Box, {
    width: `${_v0.width}px`,
    height: `${_v0.height}px`,
    borderRadius: "6px",
    boxSizing: "border-box",
    left: 0,
    zIndex: 0,
    className: "df-screenshot-container",
    position: "absolute",
    top: 0,
    _after: {
      content: '""',
      position: "absolute",
      top: 0,
      width: "100%",
      height: "100%",
      borderRadius: "6px",
      border: "2px solid var(--chakra-colors-formats-secondary)"
    },
    _before: {
      content: '""',
      position: "absolute",
      boxSizing: "content-box",
      width: "100%",
      height: "100%",
      top: "-3px",
      left: "-3px",
      borderRadius: "9px",
      border: "3px solid var(--chakra-colors-formats-primary)",
      pointerEvents: "none"
    },
    children: _v1
  });
  var _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0);
  function _v16(_v0) {
    return encodeURIComponent(_v0).replace(/'/g, "%27").replace(/"/g, "%22");
  }
  function _v17({
    width: _v0,
    height: _v1,
    iconName: _v2 = "iFrame",
    iconColor: _v3 = "white",
    iconSize: _v4 = "60%",
    iconX: _v5 = "20%",
    iconY: _v6 = "20%",
    backgroundColor: _v7 = "black"
  }) {
    let _v8 = _v16({
        iFrame: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${_v3}">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7Zm4-2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Zm6.609 2.972a1 1 0 0 1 .557 1.3l-2.472 6.18a1 1 0 0 1-1.857-.743l2.472-6.18a1 1 0 0 1 1.3-.557Zm-4.35 1.457a1 1 0 0 1 0 1.414L8.112 11.99l1.147 1.147a1 1 0 1 1-1.415 1.414l-1.679-1.68a1.247 1.247 0 0 1 0-1.763l1.68-1.68a1 1 0 0 1 1.414 0Zm5.534 0a1 1 0 0 1 1.414 0l1.68 1.68a1.247 1.247 0 0 1 0 1.763l-1.68 1.68a1 1 0 0 1-1.414-1.415l1.147-1.147-1.147-1.147a1 1 0 0 1 0-1.414Z" fill="${_v3}"></path>
      </svg>
    `,
        overlay: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false" fill="${_v3}">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.776 3h4.448c.982 0 1.78 0 2.428.053.668.054 1.263.17 1.816.452a4.636 4.636 0 0 1 2.027 2.027c.282.553.397 1.148.452 1.816C21 7.996 21 8.794 21 9.776v4.448c0 .982 0 1.78-.053 2.428-.055.668-.17 1.263-.452 1.816a4.636 4.636 0 0 1-2.027 2.027c-.553.282-1.148.397-1.816.452-.648.053-1.446.053-2.428.053H9.776c-.983 0-1.78 0-2.428-.053-.668-.055-1.263-.17-1.816-.452a4.636 4.636 0 0 1-2.027-2.027c-.282-.553-.398-1.148-.452-1.816C3 16.004 3 15.206 3 14.224V9.776c0-.982 0-1.78.053-2.428.054-.668.17-1.263.452-1.816a4.636 4.636 0 0 1 2.027-2.027c.553-.282 1.148-.398 1.816-.452C7.996 3 8.794 3 9.776 3ZM7.51 5.046c-.544.045-.847.127-1.072.241-.496.253-.899.656-1.152 1.152-.114.225-.196.528-.24 1.072C5 8.067 5 8.783 5 9.818v4.364c0 1.035 0 1.75.046 2.307.045.544.127.847.241 1.072.253.496.656.899 1.152 1.152.225.114.528.196 1.072.24C8.067 19 8.783 19 9.818 19h4.364c1.035 0 1.75 0 2.307-.046.544-.045.847-.127 1.072-.241.496-.253.899-.656 1.152-1.152.114-.225.196-.528.24-1.072.046-.557.047-1.272.047-2.307V9.818c0-1.035 0-1.75-.046-2.307-.045-.544-.127-.847-.241-1.072a2.637 2.637 0 0 0-1.152-1.152c-.225-.114-.528-.196-1.072-.24C15.932 5 15.217 5 14.182 5H9.818c-1.035 0-1.75 0-2.307.046ZM13.5 7.985a1 1 0 0 1 1-1H16a1 1 0 1 1 0 2h-1.5a1 1 0 0 1-1-1Zm-4.364-.989h.028l1.116-.01h.027c.18 0 .369 0 .532.014.183.015.419.052.661.175.325.166.59.43.755.755.123.242.16.478.175.661.013.163.013.352.013.531v1.746c0 .18 0 .368-.013.531a1.74 1.74 0 0 1-.175.662c-.166.325-.43.589-.755.755a1.74 1.74 0 0 1-.661.175 6.819 6.819 0 0 1-.532.013h-.027l-1.116.01h-.028c-.18 0-.369 0-.531-.014a1.742 1.742 0 0 1-.662-.175 1.727 1.727 0 0 1-.755-.755 1.74 1.74 0 0 1-.175-.661A6.84 6.84 0 0 1 7 10.878V9.132c0-.18 0-.368.013-.531.015-.183.052-.42.175-.662.166-.325.43-.589.755-.755a1.74 1.74 0 0 1 .662-.175c.162-.013.352-.013.53-.013Zm-.136 2v2.017h.164l1.116-.01h.163V8.988h-.163l-1.116.01H9ZM13.5 12a1 1 0 0 1 1-1H16a1 1 0 1 1 0 2h-1.5a1 1 0 0 1-1-1ZM7 16a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z" fill="${_v3}"></path>
      </svg>
    `
      }[_v2] || ""),
      _v9 = _v16(`
      <svg xmlns="http://www.w3.org/2000/svg" width="${_v0}" height="${_v1}" viewBox="0 0 ${_v0} ${_v1}">
        <rect width="100%" height="100%" fill="${_v7}" />
        <image href="data:image/svg+xml,${_v8}" x="${_v5}" y="${_v6}" width="${_v4}" height="${_v4}" />
      </svg>
    `);
    return `data:image/svg+xml;charset=utf-8,${_v9}`;
  }
  function _v18({
    width: _v0,
    height: _v1,
    iconName: _v2 = "iFrame",
    iconColor: _v3 = "white",
    iconSize: _v4 = 64,
    backgroundColor: _v5 = "black"
  }) {
    let _v6 = (_v0 - _v4) / 2,
      _v7 = (_v1 - _v4) / 2;
    return _v17({
      width: _v0,
      height: _v1,
      iconName: _v2,
      iconColor: _v3,
      iconSize: `${_v4}px`,
      iconX: `${_v6}px`,
      iconY: `${_v7}px`,
      backgroundColor: _v5
    });
  }
  let _v19 = ({
      storyboard: _v0,
      layersToUpdate: _v1,
      stageSize: _v2
    }) => {
      let _v3 = [..._v0.sources],
        _v4 = _v1.map(_v0 => {
          let _v1 = _v0.composition.map(_v0 => {
            if ((0, _v14.isIframeElement)(_v0)) {
              var _v1, _v2;
              let _v0 = _v0.rect,
                _v1 = (_v1 = {
                  width: _v2.width * _v0.width,
                  height: _v2.height * _v0.height
                }, {
                  hash: `hash-${(0, _v15.randomString)(8)}`,
                  mhash: "",
                  previewUrl: function ({
                    width: _v0,
                    height: _v1,
                    iconName: _v2 = "iFrame",
                    iconColor: _v3 = "white",
                    iconSize: _v4 = "60%",
                    iconXYPosition: _v5 = "20%",
                    backgroundColor: _v6 = "black"
                  }) {
                    return _v17({
                      width: _v0,
                      height: _v1,
                      iconName: _v2,
                      iconColor: _v3,
                      iconSize: _v4,
                      iconX: _v5,
                      iconY: _v5,
                      backgroundColor: _v6
                    });
                  }({
                    width: _v1.width,
                    height: _v1.height
                  }),
                  width: _v1.width,
                  height: _v1.height,
                  duration: 0,
                  type: "image",
                  status: "ready",
                  service: null,
                  previewHeight: _v1.height,
                  previewWidth: _v1.width,
                  previewUrlLivePhoto: null,
                  order: 0,
                  text: null,
                  name: "iframe-placeholder",
                  size: 100,
                  externalId: "",
                  hasAudio: !1,
                  masks: null,
                  thumb: {
                    thumbUrl: "",
                    height: _v1.height,
                    width: _v1.width
                  },
                  thumbnailsSprites: null,
                  transcriptions: null,
                  fps: 0
                });
              return _v3.push(_v1), _v2 = _v1.hash, {
                id: _v0.id,
                type: _v12.CompositionElementType.IMAGE,
                sourceHash: _v2,
                compositionTiming: _v0.compositionTiming,
                selectable: !1,
                rect: {
                  ..._v0.rect
                },
                layers: [{
                  type: "full_source",
                  effects: []
                }],
                flip: {
                  horizontal: !1,
                  vertical: !1
                },
                rotate: 0,
                sourceFootageRect: {
                  x: 0,
                  y: 0,
                  width: 1,
                  height: 1
                },
                isManualCrop: !1,
                innerMediaRect: {
                  x: 0,
                  y: 0,
                  width: 1,
                  height: 1
                },
                thumbnailUrl: "",
                isLoading: !1,
                zindex: _v0.zindex
              };
            }
            return _v0;
          });
          return {
            ..._v0,
            composition: _v1
          };
        });
      return {
        ..._v0,
        sources: _v3,
        layers: _v4
      };
    },
    _v20 = () => new Promise(_v0 => {
      let _v1 = new MutationObserver(() => {
        let _v0 = document.querySelector(`${_v13.DF_CLONE_ELEMENT_SELECTOR} .frame`);
        _v0 && _v0.children.length > 0 && (_v1.disconnect(), _v0());
      });
      _v1.observe(document.body, {
        childList: !0,
        subtree: !0
      });
    }),
    _v21 = {},
    _v22 = (0, _v2.createContext)((0, _v2.createRef)()),
    _v23 = () => {
      let _v0 = (0, _v9.useAppSelector)(_v5.fontsSelector),
        _v1 = (0, _v9.useAppSelector)(_v8.storyboardSelector),
        _v2 = (0, _v9.useAppSelector)(_v6.overlayLayersForScreenshotSelector),
        _v3 = (0, _v9.useAppSelector)(_v7.stageSizeSelector),
        _v4 = (0, _v9.useAppSelector)(_v6.isScreenshottingSelector),
        _v5 = (0, _v2.useContext)(_v22),
        _v6 = (0, _v2.useRef)(null),
        _v7 = _v6.current,
        _v8 = (0, _v2.useMemo)(() => {
          let _v0 = _v19({
            storyboard: _v1,
            layersToUpdate: _v2,
            stageSize: _v3
          });
          return (0, _v11.getDFStoryboardForOverlayEditor)(_v0);
        }, [_v2, _v1, _v3]),
        _v9 = (0, _v2.useCallback)(async () => {
          _v6.current = (await _v0.A(0)).default;
        }, []);
      (0, _v2.useEffect)(() => {
        _v9();
      }, [_v9]);
      let _v10 = _v7 && _v0 && _v1.id && _v4 && _v2.length > 0;
      return (0, _v1.jsx)(_v1.Fragment, {
        children: _v10 && (0, _v1.jsx)(_v4, {
          size: _v3,
          children: (0, _v1.jsx)(_v7, {
            storyboard: _v8,
            fonts: _v0,
            ref: _v5,
            onEnded: () => _v5.current?.pause(),
            compositionOverride: _v21,
            fontFamilyDecorator: _v10.getFontFamily,
            isAssumeFontsLoaded: !0,
            "data-testid": "screenshotter-dragonfly",
            elementsStatuses: _v21,
            loader: null
          })
        })
      });
    };
}