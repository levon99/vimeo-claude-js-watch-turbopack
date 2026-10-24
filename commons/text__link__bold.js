{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  let _v9 = /^\s*(\d+)[.)]\s+(.*)$/,
    _v10 = /^\s*[-*•]\s+(.*)$/,
    _v11 = /^\s*(#{1,6})\s+(.*)$/,
    _v12 = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*(.+?)\*\*/g,
    _v13 = /^(https?:|mailto:|\/)/i,
    _v14 = _v0 => {
      let _v1,
        _v2 = [],
        _v3 = new RegExp(_v12),
        _v4 = 0;
      for (; null !== (_v1 = _v3.exec(_v0));) _v1.index > _v4 && _v2.push({
        type: "text",
        text: _v0.slice(_v4, _v1.index)
      }), void 0 !== _v1[2] ? _v2.push({
        type: "link",
        href: _v1[2],
        parts: _v14(_v1[1])
      }) : _v2.push({
        type: "bold",
        parts: _v14(_v1[3])
      }), _v4 = _v3.lastIndex;
      return _v4 < _v0.length && _v2.push({
        type: "text",
        text: _v0.slice(_v4)
      }), _v2.length > 0 ? _v2 : [{
        type: "text",
        text: _v0
      }];
    },
    _v15 = (0, _v6.rem)(12),
    _v16 = (0, _v6.rem)(21),
    _v17 = (0, _v6.rem)(5),
    _v18 = (0, _v6.rem)(3),
    _v19 = (_v0, _v1) => {
      let _v2 = new Map();
      return _v0.map(_v0 => {
        let _v1 = _v1(_v0),
          _v2 = _v2.get(_v1) ?? 0;
        return _v2.set(_v1, _v2 + 1), {
          item: _v0,
          key: `${_v1}#${_v2}`
        };
      });
    },
    _v20 = _v0 => "text" === _v0.type ? `text:${_v0.text}` : "bold" === _v0.type ? `bold:${JSON.stringify(_v0.parts)}` : `link:${_v0.href}:${JSON.stringify(_v0.parts)}`,
    _v21 = _v0 => {
      switch (_v0.type) {
        case "paragraph":
          return `paragraph:${_v0.text}`;
        case "heading":
          return `heading:${_v0.level}:${_v0.text}`;
        case "ordered-list":
          return `ordered-list:${_v0.items.join("\n")}`;
        case "unordered-list":
          return `unordered-list:${_v0.items.join("\n")}`;
        default:
          throw Error(`Unhandled help answer block: ${_v0.type}`);
      }
    },
    _v22 = {
      1: "h1",
      2: "h2",
      3: "h3",
      4: "h4",
      5: "h5",
      6: "h6"
    },
    _v23 = {
      1: "heading-md",
      2: "heading-sm",
      3: "heading-xs",
      4: "heading-2xs",
      5: "heading-2xs",
      6: "heading-2xs"
    },
    _v24 = _v0 => _v19(_v0, _v20).map(({
      item: _v0,
      key: _v1
    }) => {
      let _v2;
      return "text" === _v0.type ? _v0.text : "bold" === _v0.type ? (0, _v1.jsx)(_v5.Text, {
        as: "span",
        fontFamily: "heading",
        children: _v24(_v0.parts)
      }, _v1) : (_v2 = _v0.href, _v13.test(_v2.trim())) ? (0, _v1.jsx)(_v5.Text, {
        as: "a",
        href: _v0.href,
        target: "_blank",
        rel: "noopener noreferrer",
        textDecoration: "underline",
        wordBreak: "break-word",
        _focusVisible: {
          outline: "2px solid",
          outlineOffset: "2px",
          outlineColor: "currentColor"
        },
        children: _v24(_v0.parts)
      }, _v1) : (0, _v1.jsx)(_v8.default.Fragment, {
        children: _v24(_v0.parts)
      }, _v1);
    }),
    _v25 = ({
      items: _v0
    }) => (0, _v1.jsx)(_v1.Fragment, {
      children: _v19(_v0, _v0 => _v0).map(({
        item: _v0,
        key: _v1
      }) => (0, _v1.jsx)(_v5.Text, {
        as: "li",
        variant: "body-md",
        lineHeight: "1.5",
        whiteSpace: "pre-wrap",
        marginY: _v17,
        paddingLeft: _v18,
        children: _v24(_v14(_v0))
      }, _v1))
    }),
    _v26 = ({
      answer: _v0
    }) => {
      let _v1 = _v19((_v0 => {
        let _v1 = [],
          _v2 = [],
          _v3 = null,
          _v4 = () => {
            _v2.length > 0 && (_v1.push({
              type: "paragraph",
              text: _v2.join("\n")
            }), _v2 = []);
          },
          _v5 = () => {
            _v3 && (_v1.push(_v3), _v3 = null);
          };
        for (let _v0 of _v0.replace(/\r\n?/g, "\n").split("\n")) {
          if ("" === _v0.trim()) {
            _v4(), _v5();
            continue;
          }
          let _v0 = _v11.exec(_v0);
          if (_v0) {
            _v4(), _v5(), _v1.push({
              type: "heading",
              level: _v0[1].length,
              text: _v0[2].trim()
            });
            continue;
          }
          let _v1 = _v9.exec(_v0);
          if (_v1) {
            _v4(), _v3?.type !== "ordered-list" && (_v5(), _v3 = {
              type: "ordered-list",
              start: Number(_v1[1]),
              items: []
            }), _v3.items.push(_v1[2]);
            continue;
          }
          let _v2 = _v10.exec(_v0);
          if (_v2) {
            _v4(), _v3?.type !== "unordered-list" && (_v5(), _v3 = {
              type: "unordered-list",
              items: []
            }), _v3.items.push(_v2[1]);
            continue;
          }
          if (_v3) {
            let _v0 = _v3.items.length - 1;
            _v3.items[_v0] = `${_v3.items[_v0]}
${_v0.trim()}`;
            continue;
          }
          _v2.push(_v0);
        }
        return _v4(), _v5(), _v1;
      })(_v0), _v21);
      return (0, _v1.jsx)(_v2.Box, {
        children: _v1.map(({
          item: _v0,
          key: _v1
        }, _v2) => {
          let _v3 = _v2 < _v1.length - 1 ? _v15 : void 0;
          if ("heading" === _v0.type) {
            let _v0 = Math.min(_v0.level, 6);
            return (0, _v1.jsx)(_v5.Text, {
              as: _v22[_v0],
              variant: _v23[_v0],
              marginBottom: _v3,
              children: _v24(_v14(_v0.text))
            }, _v1);
          }
          return "paragraph" === _v0.type ? (0, _v1.jsx)(_v5.Text, {
            variant: "body-md",
            lineHeight: "1.5",
            whiteSpace: "pre-wrap",
            marginBottom: _v3,
            children: _v24(_v14(_v0.text))
          }, _v1) : "ordered-list" === _v0.type ? (0, _v1.jsx)(_v2.Box, {
            as: "ol",
            start: _v0.start,
            paddingLeft: _v16,
            marginBottom: _v3,
            sx: {
              listStyleType: "decimal"
            },
            children: (0, _v1.jsx)(_v25, {
              items: _v0.items
            })
          }, _v1) : (0, _v1.jsx)(_v2.Box, {
            as: "ul",
            paddingLeft: _v16,
            marginBottom: _v3,
            sx: {
              listStyleType: "disc"
            },
            children: (0, _v1.jsx)(_v25, {
              items: _v0.items
            })
          }, _v1);
        })
      });
    };
  _v0.s(["HelpBody", 0, ({
    result: _v0,
    footer: _v1,
    sourceCaption: _v2,
    hideContactSupport: _v3
  }) => _v0.refused ? (0, _v1.jsx)(_v5.Text, {
    variant: "body-md",
    color: "text-secondary",
    children: _v0.answer
  }) : (0, _v1.jsxs)(_v4.Flex, {
    flexDir: "column",
    alignItems: "flex-start",
    children: [(0, _v1.jsx)(_v26, {
      answer: _v0.answer
    }), void 0 !== _v2 && !_v0.escalate && (0, _v1.jsx)(_v5.Text, {
      variant: "body-sm",
      color: "text-tertiary",
      marginTop: (0, _v6.rem)(13),
      children: _v2
    }), _v0.escalate && !0 !== _v3 && (0, _v1.jsx)(_v3.Button, {
      as: "a",
      href: "https://help.vimeo.com/",
      target: "_blank",
      rel: "noopener noreferrer",
      size: "sm",
      variant: "primary",
      marginTop: "sm",
      children: (0, _v7.translate)({
        singular: "Contact Vimeo Support",
        dictionary: {
          es: {
            singular: "Contactar con el soporte de Vimeo"
          },
          "de-DE": {
            singular: "Vimeo-Support kontaktieren"
          },
          "fr-FR": {
            singular: "Contacter le support Vimeo"
          },
          "ja-JP": {
            singular: "Vimeo サポートにお問い合わせください"
          },
          "ko-KR": {
            singular: "Vimeo 지원팀에 문의"
          },
          "pt-BR": {
            singular: "Entrar em contato com o Suporte do Vimeo"
          },
          "zh-CN": {
            singular: "联系 Vimeo 支持"
          }
        }
      })
    }), null != _v1 ? (0, _v1.jsx)(_v2.Box, {
      marginTop: "sm",
      children: _v1
    }) : null]
  })], 0);
}