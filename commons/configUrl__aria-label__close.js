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
    _v12 = _v0.i(0);
  let _v13 = ({
      onDismiss: _v0,
      videoId: _v1
    }) => {
      let _v2 = (0, _v1.useRef)(null);
      (0, _v12.default)(_v2, _v0);
      let {
        data: _v3
      } = (0, _v6.useGetVideo)({
        where: {
          videoId: _v1
        },
        select: ["configUrl"]
      });
      return (0, _v2.jsx)(_v14, {
        active: !0,
        content: (0, _v2.jsxs)(_v15, {
          ref: _v2,
          children: [_v3?.configUrl && (0, _v2.jsx)(_v17, {
            configUrl: _v3.configUrl,
            videoId: _v1
          }), (0, _v2.jsx)(_v4.ThemeProvider, {
            theme: _v9.themes.light,
            children: (0, _v2.jsx)(_v16, {
              "aria-label": "close",
              variant: "transparent",
              format: "basic",
              icon: (0, _v2.jsx)(_v5.CloseX, {}),
              onClick: _v0
            })
          })]
        })
      });
    },
    _v14 = (0, _v4.default)(_v8.Modal).withConfig({
      displayName: "VideoModal__StyledModal",
      componentId: "sc-ee3e6309-0"
    })`
  width: ${(0, _v3.rem)(768)};
  aspect-ratio: 16 / 9;
  max-width: calc(100vw - ${(0, _v3.rem)(20)});
`,
    _v15 = _v4.default.div.withConfig({
      displayName: "VideoModal__ModalContent",
      componentId: "sc-ee3e6309-1"
    })`
  ${({
      theme: _v0
    }) => _v0.shadows[200]}
  background: ${_v10.core.color.surface(0)};

  inset: 0;
  position: absolute;
`,
    _v16 = (0, _v4.default)(_v7.Button).withConfig({
      displayName: "VideoModal__DismissButton",
      componentId: "sc-ee3e6309-2"
    })`
  position: absolute;
  top: ${(0, _v3.rem)(10)};
  right: ${(0, _v3.rem)(8)};
  z-index: 15;
`,
    _v17 = ({
      configUrl: _v0,
      videoId: _v1
    }) => {
      let _v2 = (0, _v1.useRef)(null),
        {
          player: _v3
        } = (0, _v11.usePlayer)(_v2, _v1, !0, _v0, !1);
      return (0, _v1.useEffect)(() => (_v3 && _v3.ready(() => {
        _v3._setEmbedSettings({
          controls: 1,
          playbar: 1,
          logo: 1,
          title: 0,
          portrait: 0,
          byline: 0
        }), _v3.play();
      }), () => {
        _v3 && _v3.destroy && _v3.destroy();
      }), [_v3]), (0, _v2.jsx)("div", {
        className: "player js-player",
        ref: _v2
      });
    },
    _v18 = (0, _v1.createContext)({
      setModalContextState: () => console.log("noop")
    });
  _v0.s(["VideoModalContextProvider", 0, ({
    children: _v0
  }) => {
    let [_v1, _v2] = (0, _v1.useState)({
        isActive: !1,
        state: null
      }),
      {
        isActive: _v3,
        state: _v4
      } = _v1;
    return (0, _v2.jsxs)(_v18.Provider, {
      value: {
        setModalContextState: _v2
      },
      children: [_v0, _v3 && (0, _v2.jsx)(_v13, {
        ..._v4
      })]
    });
  }, "VideoModalDispatchContext", 0, _v18], 0), _v0.s(["useVideoModal", 0, () => {
    let {
        setModalContextState: _v0
      } = (0, _v1.useContext)(_v18),
      _v1 = (0, _v1.useCallback)(_v0 => {
        _v0({
          isActive: !0,
          state: _v0
        });
      }, [_v0]);
    return {
      close: (0, _v1.useCallback)(() => {
        _v0({
          isActive: !1,
          state: null
        });
      }, [_v0]),
      open: _v1
    };
  }], 0);
}