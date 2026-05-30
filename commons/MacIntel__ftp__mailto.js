{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = /ipad/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1,
    _v7 = () => !1,
    _v8 = new _v2.default({
      "ftp:": {
        validate: _v7
      },
      "mailto:": {
        validate: _v7
      }
    }, {
      fuzzyIP: !1,
      fuzzyEmail: !1
    }),
    _v9 = ({
      text: _v0,
      paraBreak: _v1
    }) => {
      let _v2 = (0, _v3.useMemo)(() => {
        if (_v6 && _v1 && _v0.length > _v1) {
          let _v0 = _v0.match(RegExp(`.{1,${_v1}}`, "g")) || [];
          return (0, _v1.jsx)(_v1.Fragment, {
            children: _v0.map((_v0, _v1) => (0, _v1.jsx)(_v13, {
              children: _v0
            }, _v1))
          });
        }
        return (0, _v1.jsx)(_v1.Fragment, {
          children: _v0
        });
      }, [_v0]);
      return (0, _v1.jsx)(_v1.Fragment, {
        children: _v2
      });
    },
    _v10 = ({
      raw: _v0,
      url: _v1,
      customLinkCss: _v2,
      paraBreak: _v3,
      ..._v4
    }) => {
      let _v5 = (0, _v3.useMemo)(() => (_v0 => {
        let _v1 = _v0.split(/^(http(s)?\:)?\/\//).pop();
        if (_v1) {
          let _v0 = _v1.split(/[\/\?]/)[0];
          return /\:(\d+)$/.test(_v0);
        }
        return !1;
      })(_v1) ? (0, _v1.jsx)(_v9, {
        text: _v0,
        paraBreak: _v3
      }) : (0, _v1.jsx)(_v14, {
        contentEditable: !1,
        href: _v1,
        target: "_blank",
        rel: "noopener noreferrer nofollow",
        ..._v4,
        children: _v0
      }), [_v0, _v1]);
      return (0, _v1.jsx)(_v1.Fragment, {
        children: _v5
      });
    },
    _v11 = _v4.css`
  text-decoration: none;
  color: ${_v5.bokehTheme.colors.blue["500"]};
  &:hover {
    color: ${_v5.bokehTheme.colors.blue["600"]};
  }
`,
    _v12 = _v4.css`
  transform: translate3d(0, 0, 0);
  transform-style: preserve-3d;
  backface-visibility: hidden;
  position: relative;
`,
    _v13 = _v4.default.span.withConfig({
      displayName: "Linkify__Span",
      componentId: "sc-139cb347-0"
    })`
  ${_v12}
`,
    _v14 = _v4.default.a.withConfig({
      displayName: "Linkify__CustomLinkText",
      componentId: "sc-139cb347-1"
    })`
  ${_v12}
  word-break: ${({
      linkWordBreakStyle: _v0
    }) => _v0 || "break-all"};
  ${({
      customLinkCss: _v0
    }) => _v0 || _v11}
`;
  _v0.s(["default", 0, ({
    text: _v0,
    ..._v1
  }) => {
    let _v2 = (0, _v3.useMemo)(() => {
      if (_v8.pretest(_v0)) {
        let _v0 = 0,
          _v1 = [];
        return (_v8.match(_v0) || []).forEach(_v0 => {
          _v1.push((0, _v1.jsx)(_v9, {
            text: _v0.substring(_v0, _v0.index)
          }, `text-splitter-${_v0.index}`)), _v1.push((0, _v1.jsx)(_v10, {
            ..._v0,
            ..._v1
          }, `linkify-link-${_v0.index}`)), _v0 = _v0.lastIndex;
        }), _v1.push((0, _v1.jsx)(_v9, {
          text: _v0.substring(_v0)
        }, `text-splitter-${_v0}`)), _v1;
      }
      return (0, _v1.jsx)(_v9, {
        text: _v0
      });
    }, [_v0]);
    return (0, _v1.jsx)(_v1.Fragment, {
      children: _v2
    });
  }], 0);
}