{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = _v0 => _v0.replace(/<br\s*\/?>\s*$/, "").replace(/\n\s*$/, "").replace(/\s+$/, ""),
    _v7 = ({
      line: _v0 = 1,
      text: _v1 = "",
      showMoreString: _v2,
      customStyle: _v3
    }) => {
      let _v4 = (0, _v3.useRef)(null),
        _v5 = (0, _v3.useRef)(null),
        _v6 = (0, _v3.useRef)(void 0),
        [_v7, _v8] = (0, _v3.useState)(!1);
      (0, _v3.useEffect)(() => {
        let _v0 = document.createElement("canvas");
        if (!_v4.current) return;
        let _v1 = window.getComputedStyle(_v4.current),
          _v2 = [_v1.fontWeight, _v1.fontStyle, _v1.fontSize, _v1.fontFamily].join(" ");
        _v5.current = _v0.getContext("2d"), _v5.current && (_v5.current.font = _v2);
        let _v3 = () => {
          _v6.current && window.cancelAnimationFrame(_v6.current), _v6.current = window.requestAnimationFrame(() => {
            if (!_v4.current || !_v5.current) return;
            _v11.clear();
            let _v0 = window.getComputedStyle(_v4.current);
            _v5.current.font = [_v0.fontWeight, _v0.fontStyle, _v0.fontSize, _v0.fontFamily, _v0.letterSpacing].join(" ");
          });
        };
        return window.addEventListener("resize", _v3), () => {
          window.removeEventListener("resize", _v3), _v6.current && window.cancelAnimationFrame(_v6.current);
        };
      }, []);
      let [_v9, _v10] = (0, _v3.useState)({
        container: null,
        canvas: null,
        measured: !1,
        width: 0
      });
      (0, _v3.useEffect)(() => {
        if ("u" < typeof ResizeObserver) return;
        let _v0 = new ResizeObserver(() => {
          let _v0 = _v4.current?.getBoundingClientRect().width ?? 0;
          _v10(_v0 => _v0.measured && _v0.width === _v0 ? _v0 : {
            container: _v4.current,
            canvas: _v5.current,
            measured: !0,
            width: _v0
          });
        });
        return _v4.current && _v0.observe(_v4.current), () => {
          _v0.disconnect();
        };
      }, []);
      let _v11 = _v9.measured ? _v12(_v9.container, _v9.canvas, _v2, _v1, _v7, _v0) : null,
        [_v12] = (0, _v5.useToken)("semanticTokens", ["colors.text-secondary"]),
        _v13 = _v11 ?? _v6(_v1);
      return (0, _v1.jsx)(_v4.Box, {
        fontSize: "text-sm",
        lineHeight: "text-sm",
        ref: _v4,
        overflow: "hidden",
        onClick: () => _v8(!0),
        dangerouslySetInnerHTML: {
          __html: _v13
        },
        sx: {
          ..._v3,
          ...(!_v9.measured && {
            display: "-webkit-box",
            WebkitLineClamp: _v0,
            "-webkit-box-orient": "vertical"
          }),
          "& .read_more": {
            color: _v12,
            _hover: {
              cursor: "pointer"
            }
          }
        }
      });
    },
    _v8 = /<([^\s>]+)/,
    _v9 = /<[^>]*>/g,
    _v10 = _v0 => {
      let _v1 = _v0.match(_v8);
      return _v1 ? _v1[1] : null;
    },
    _v11 = new Map(),
    _v12 = (_v0, _v1, _v2, _v3, _v4, _v5) => {
      if (!_v0 || !_v5 || !_v3.length) return "";
      let _v6 = _v0.getBoundingClientRect().width;
      if (0 === _v6) return null;
      let _v7 = _v0 => {
          if (!_v1) return 0;
          if (_v11.has(_v0)) return _v11.get(_v0) ?? 0;
          let _v1 = _v0.replace(_v9, ""),
            _v2 = _v1.measureText(_v1).width;
          return _v11.set(_v0, _v2), _v2;
        },
        _v8 = _v6 - _v7("...") - _v7(" " + _v2),
        _v9 = (_v0 => {
          let _v1 = _v6(_v0),
            _v2 = [],
            _v3 = 0;
          for (; _v3 < _v1.length;) if ("<" === _v1[_v3]) {
            let _v0 = _v1.indexOf(">", _v3);
            -1 === _v0 && (_v0 = _v1.length);
            let _v1 = _v1.substring(_v3, _v0 + 1);
            "<br>" === _v1 || "<br/>" === _v1 || "<br />" === _v1 || "</p>" === _v1 || _v1.startsWith("<p") ? _v2.push({
              type: "linebreak",
              content: _v1
            }) : _v2.push({
              type: "tag",
              content: _v1,
              isClosing: _v1.startsWith("</")
            }), _v3 = _v0 + 1;
          } else {
            let _v0 = _v1.indexOf("<", _v3);
            -1 === _v0 && (_v0 = _v1.length);
            let _v1 = _v1.substring(_v3, _v0);
            _v1 && _v2.push({
              type: "text",
              content: _v1
            }), _v3 = _v0;
          }
          return _v2;
        })(_v3),
        _v10 = [],
        _v11 = [],
        _v12 = "";
      _v9.forEach((_v0, _v1) => {
        "linebreak" === _v0.type ? (_v11.length > 0 && (_v10.push({
          content: _v12,
          items: [..._v11]
        }), _v11 = [], _v12 = ""), _v1 < _v9.length - 1 && _v11.push(_v0)) : (_v11.push(_v0), "text" === _v0.type && (_v12 += _v0.content));
      }), _v11.length > 0 && _v10.push({
        content: _v12,
        items: _v11
      });
      let _v13 = _v4 ? Number.MAX_SAFE_INTEGER : _v5,
        _v14 = "",
        _v15 = [],
        _v16 = 0,
        _v17 = !1;
      for (let _v0 = 0; _v0 < _v10.length; _v0++) {
        let _v0 = _v10[_v0],
          _v1 = _v0.items.every(_v0 => "tag" === _v0.type && !_v0.isClosing && !["<br>", "<br/>", "<br />"].includes(_v0.content)),
          _v2 = _v0.content.trim().length > 0;
        if (!_v2 && _v1) {
          for (let _v0 of _v0.items) if (_v14 += _v0.content, "tag" === _v0.type) {
            if (_v0.isClosing) _v15.pop();else if (!_v0.content.includes("/>") && !_v0.content.startsWith("<!")) {
              let _v0 = _v10(_v0.content);
              _v0 && _v15.push(_v0);
            }
          }
          continue;
        }
        let _v3 = 0;
        if ((_v2 || _v0.items.some(_v0 => "linebreak" === _v0.type && ["<br>", "<br/>", "<br />"].includes(_v0.content))) && (_v3 = 1), _v2) {
          let _v0 = _v0.content.split(/\s+/).filter(_v0 => _v0.length > 0),
            _v1 = 1,
            _v2 = 0;
          for (let _v0 of _v0) {
            let _v0 = _v7(_v0 + " ");
            _v2 + _v0 <= _v6 ? _v2 += _v0 : (_v1++, _v2 = _v0);
          }
          _v3 = Math.max(_v3, _v1);
        }
        if (_v16 + _v3 > _v13 || _v16 + _v3 === _v13 && _v0 < _v10.length - 1) {
          let _v0 = _v13 - _v16;
          if (_v0 > 0) {
            let _v0 = 1,
              _v1 = "",
              _v2 = "";
            for (let _v0 of _v0.items) {
              if ("text" === _v0.type) {
                let _v0 = _v0.content.split(/(\s+)/);
                for (let _v0 = 0; _v0 < _v0.length; _v0++) {
                  let _v0 = _v0[_v0];
                  if (!_v0) continue;
                  let _v1 = _v0 < _v0 ? _v6 : _v8;
                  if (_v7(_v2 + _v0) <= _v1) _v2 += _v0;else if (_v0 < _v0) _v1 += _v2, _v0++, _v2 = /^\s+$/.test(_v0) ? "" : _v0;else {
                    _v1 += _v2, _v17 = !0;
                    break;
                  }
                }
                if (_v17) {
                  _v14 += _v1;
                  break;
                }
                _v2 && (_v1 += _v2, _v2 = "");
              } else if ("tag" === _v0.type) {
                if (_v1 += _v0.content, _v0.isClosing) _v15.pop();else if (!_v0.content.includes("/>") && !_v0.content.startsWith("<!")) {
                  let _v0 = _v10(_v0.content);
                  _v0 && _v15.push(_v0);
                }
              } else if ("linebreak" === _v0.type) {
                if (["<br>", "<br/>", "<br />"].includes(_v0.content) && (_v2 = "", ++_v0 > _v0)) {
                  _v17 = !0;
                  break;
                }
                _v1 += _v0.content;
              }
              if (_v17) break;
            }
            _v17 || (_v14 += _v1);
          }
          _v17 = !0;
          break;
        }
        for (let _v0 of (_v16 + _v3 === _v13 && _v0 === _v10.length - 1 && (_v17 = !1), _v16 += _v3, _v0.items)) if (_v14 += _v0.content, "tag" === _v0.type) {
          if (_v0.isClosing) _v15.pop();else if (!_v0.content.includes("/>") && !_v0.content.startsWith("<!")) {
            let _v0 = _v10(_v0.content);
            _v0 && _v15.push(_v0);
          }
        }
      }
      if (!_v17) return _v6(_v3);
      let _v18 = ["a", "span", "em", "i", "strong", "b", "u", "code", "mark", "small", "sub", "sup"],
        _v19 = "";
      for (; _v15.length > 0;) {
        let _v0 = _v15.pop();
        if (void 0 === _v0) break;
        let _v1 = _v0.toLowerCase();
        _v18.includes(_v1) ? _v14 += `</${_v0}>` : _v19 += `</${_v0}>`;
      }
      return _v14 += `<span class="read_more">... ${_v2}</span>`, _v14 += _v19;
    };
  _v0.s(["DetailsDescription", 0, ({
    description: _v0
  }) => {
    let _v1 = !_v0?.startsWith('<p class="first">'),
      _v2 = {
        p: {
          mb: 200
        }
      };
    return _v1 && (_v2 = {
      a: {
        color: "blue.500"
      },
      ol: {
        paddingLeft: "400",
        listStyleType: "auto"
      },
      ul: {
        paddingLeft: "400",
        listStyleType: "unset"
      }
    }), (0, _v1.jsx)(_v7, {
      line: 2,
      text: _v0,
      showMoreString: (0, _v2.translate)({
        singular: "Show more",
        dictionary: {
          es: {
            singular: "Mostrar más"
          },
          "de-DE": {
            singular: "Mehr anzeigen"
          },
          "fr-FR": {
            singular: "Afficher plus"
          },
          "ja-JP": {
            singular: "その他を表示する"
          },
          "ko-KR": {
            singular: "더 보기"
          },
          "pt-BR": {
            singular: "Mostar mais"
          },
          "zh-CN": {
            singular: "显示更多"
          }
        }
      }),
      customStyle: _v2
    });
  }], 0);
}