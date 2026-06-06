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
    _v10 = _v0.i(0);
  let _v11 = _v0 => (0, _v1.jsx)(_v10.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M16.087 5.07c1.115.115 2.269-.1 3.563-1.071a1 1 0 0 1 1.6.8v11.25a1 1 0 0 1-.4.8c-1.706 1.28-3.364 1.626-4.969 1.46-1.511-.156-2.943-.77-4.21-1.313l-.065-.028c-1.342-.575-2.512-1.068-3.693-1.19-.999-.103-2.029.059-3.163.792v3.979a1 1 0 1 1-2 0V4.799a1 1 0 0 1 .4-.8c1.706-1.28 3.364-1.626 4.969-1.46 1.511.156 2.943.77 4.21 1.313l.065.028c1.342.575 2.512 1.068 3.693 1.19ZM4.75 14.303a6.548 6.548 0 0 1 3.369-.514c1.511.156 2.943.77 4.21 1.313l.065.028c1.342.575 2.512 1.068 3.693 1.19.999.103 2.029-.06 3.163-.792V6.545a6.549 6.549 0 0 1-3.368.514c-1.512-.156-2.944-.77-4.21-1.313l-.066-.028c-1.342-.575-2.512-1.068-3.693-1.19-.999-.103-2.029.06-3.163.792v8.983Z",
      fill: "currentColor"
    })
  });
  _v0.s(["Flag", 0, _v11], 0);
  var _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0);
  let _v15 = {
    send: _v13.Send,
    comment: _v8.Comment,
    "3-layers": _v6._3Layers,
    clock: _v7.Clock,
    "download-import": _v9.DownloadImport,
    flag: _v11,
    heart: _v12.Heart
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
    let _v6 = _v15[_v0];
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
      boxSize: _v14.bokehTheme.components.Button.sizes?.sm?.svg?.width ?? "20px",
      children: [(0, _v1.jsx)(_v4.Center, {
        display: _v4 ? "none" : "flex",
        children: (0, _v1.jsx)(_v6, {})
      }), (0, _v1.jsx)(_v4.Center, {
        ref: _v2,
        display: _v4 ? "flex" : "none"
      })]
    });
  }], 0);
}