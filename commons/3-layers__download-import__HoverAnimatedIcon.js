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
    _v13 = _v0.i(0);
  let _v14 = {
    send: _v12.Send,
    comment: _v8.Comment,
    "3-layers": _v6._3Layers,
    clock: _v7.Clock,
    "download-import": _v9.DownloadImport,
    flag: _v10.Flag,
    heart: _v11.Heart
  };
  _v0.s(["HoverAnimatedIcon", 0, ({
    iconName: _v0
  }) => {
    let _v1 = (0, _v3.useRef)(null),
      _v2 = (0, _v3.useRef)(null),
      {
        colorMode: _v3
      } = (0, _v5.useColorMode)(),
      [_v4, _v5] = (0, _v3.useState)(!1);
    (0, _v3.useEffect)(() => {
      _v2.current && (_v1.current && _v1.current.destroy(), _v1.current = _v2.default.loadAnimation({
        container: _v2?.current,
        loop: !1,
        autoplay: !1,
        path: `https://f.vimeocdn.com/motion/bokeh_${_v0}_${_v3}.json`
      }));
    }, [_v0, _v3]);
    let _v6 = _v14[_v0];
    return (0, _v3.useEffect)(() => {
      let _v0 = _v2.current?.closest(".chakra-button");
      if (!_v0) return () => {};
      let _v1 = () => {
          _v5(!0), _v1.current?.play();
        },
        _v2 = () => {
          _v5(!1), _v1.current?.stop();
        };
      return _v0.addEventListener("mouseenter", _v1), _v0.addEventListener("mouseleave", _v2), () => {
        _v0 && (_v0.removeEventListener("mouseenter", _v1), _v0.removeEventListener("mouseleave", _v2));
      };
    }, []), (0, _v1.jsxs)(_v4.Center, {
      position: "relative",
      boxSize: _v13.bokehTheme.components.Button.sizes?.sm?.svg?.width ?? "20px",
      children: [(0, _v1.jsx)(_v4.Center, {
        display: _v4 ? "none" : "flex",
        children: (0, _v1.jsx)(_v6, {})
      }), (0, _v1.jsx)(_v4.Center, {
        ref: _v2,
        display: _v4 ? "flex" : "none"
      })]
    });
  }]);
}