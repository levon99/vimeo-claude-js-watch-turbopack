{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = (0, _v5.rem)(12),
    _v7 = (0, _v5.rem)(5),
    _v8 = [{
      id: "1",
      width: "100%"
    }, {
      id: "2",
      width: "64%"
    }, {
      id: "3",
      width: "85%"
    }, {
      id: "4",
      width: "100%"
    }, {
      id: "5",
      width: "85%"
    }, {
      id: "6",
      width: "64%"
    }],
    _v9 = ({
      width: _v0
    }) => (0, _v1.jsx)(_v3.Skeleton, {
      variant: "text",
      width: _v0,
      height: _v6,
      borderRadius: _v7,
      flexShrink: 0
    }),
    _v10 = ({
      caption: _v0
    }) => (0, _v1.jsx)(_v4.Text, {
      variant: "body-sm",
      color: "text-tertiary",
      marginTop: (0, _v5.rem)(18),
      flexShrink: 0,
      children: _v0
    });
  _v0.s(["CardLoading", 0, ({
    caption: _v0,
    fill: _v1 = !1
  }) => _v1 ? (0, _v1.jsxs)(_v2.Flex, {
    flexDir: "column",
    flex: "1",
    minHeight: 0,
    paddingTop: (0, _v5.rem)(9),
    children: [(0, _v1.jsx)(_v2.Flex, {
      flexDir: "column",
      flex: "1",
      minHeight: 0,
      overflow: "hidden",
      gap: "3",
      sx: {
        maskImage: "linear-gradient(to bottom, #000 76%, transparent)",
        WebkitMaskImage: "linear-gradient(to bottom, #000 76%, transparent)"
      },
      children: Array.from({
        length: 18
      }, (_v0, _v1) => (0, _v1.jsx)(_v9, {
        width: _v8[_v1 % _v8.length].width
      }, _v1))
    }), void 0 !== _v0 && (0, _v1.jsx)(_v10, {
      caption: _v0
    })]
  }) : (0, _v1.jsxs)(_v2.Flex, {
    flexDir: "column",
    paddingTop: (0, _v5.rem)(9),
    children: [(0, _v1.jsx)(_v2.Flex, {
      flexDir: "column",
      gap: "3",
      children: _v8.map(_v0 => (0, _v1.jsx)(_v9, {
        width: _v0.width
      }, _v0.id))
    }), void 0 !== _v0 && (0, _v1.jsx)(_v10, {
      caption: _v0
    })]
  })]);
}