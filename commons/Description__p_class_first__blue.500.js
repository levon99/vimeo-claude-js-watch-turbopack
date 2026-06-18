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
  _v0.s(["Description", 0, ({
    children: _v0,
    description: _v1,
    onMomentPlay: _v2,
    numLines: _v3 = 5
  }) => {
    let _v4 = (0, _v2.useRef)(null),
      {
        descriptionContainerRef: _v5,
        showExpandButton: _v6,
        isExpanded: _v7,
        toggleExpanded: _v8
      } = (() => {
        let _v0 = (0, _v2.useRef)(null),
          [_v1, _v2] = (0, _v2.useState)(!1),
          [_v3, _v4] = (0, _v2.useState)(!1);
        return (0, _v2.useEffect)(() => {
          let _v0 = _v0.current,
            _v1 = new ResizeObserver(() => {
              _v0 && _v2(_v0.scrollHeight > _v0.clientHeight + 2 || _v3);
            });
          return _v0 && _v1.observe(_v0), () => {
            _v0 && _v1.unobserve(_v0);
          };
        }, [_v3]), {
          descriptionContainerRef: _v0,
          showExpandButton: _v1,
          isExpanded: _v3,
          toggleExpanded: () => {
            _v4(_v0 => !_v0);
          }
        };
      })(),
      _v9 = (0, _v6.useSize)(_v5),
      _v10 = (0, _v6.useSize)(_v4),
      _v11 = _v9?.width || 0,
      _v12 = _v10?.width || 0,
      _v13 = _v10?.height || 22.4,
      _v14 = `linear-gradient(to top, transparent 0%, transparent ${_v13}px, rgb(0, 0, 0) ${_v13}px, rgb(0, 0, 0) 100%), linear-gradient(to right, rgb(0, 0, 0) 0%, rgb(0, 0, 0) ${_v11 - _v12 - 24}px, transparent ${_v11 - _v12 - 4}px, transparent 100%)`,
      _v15 = !_v1.startsWith('<p class="first">'),
      _v16 = {
        p: {
          mb: 200
        }
      };
    return _v15 && (_v16 = {
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
      },
      "> br:only-child": {
        display: "none"
      }
    }), (0, _v1.jsxs)(_v5.VStack, {
      align: "flex-start",
      children: [(0, _v1.jsxs)(_v3.Box, {
        position: "relative",
        children: [(0, _v1.jsx)(_v3.Box, {
          onClick: _v0 => {
            let _v1 = _v0.target.getAttribute("data-time");
            _v1 && _v2?.(parseInt(_v1, 10));
          },
          ref: _v5,
          dangerouslySetInnerHTML: {
            __html: (0, _v8.sanitizeDescriptionHtml)(_v1)
          },
          fontSize: "text-sm",
          lineHeight: "text-sm",
          w: "100%",
          sx: {
            maxHeight: _v7 ? "none" : `calc(${_v3} * var(--vimeo-fontSizes-text-sm, 1.4) * var(--vimeo-lineHeights-text-sm, 0.875rem))`,
            overflow: "hidden",
            maskImage: _v6 && !_v7 ? _v14 : "none",
            ..._v16
          }
        }), (0, _v1.jsx)(_v4.Text, {
          as: "button",
          padding: "0",
          backgroundColor: "transparent",
          position: "absolute",
          bottom: "0",
          right: "0",
          color: "text-secondary",
          onClick: _v8,
          ref: _v4,
          variant: "body-md",
          visibility: _v6 && !_v7 ? "visible" : "hidden",
          _hover: {
            textDecoration: "underline"
          },
          children: (0, _v7.translate)({
            singular: "...more",
            dictionary: {
              es: {
                singular: "Ver más."
              },
              "de-DE": {
                singular: "..der ganze Text"
              },
              "fr-FR": {
                singular: "...plus"
              },
              "ja-JP": {
                singular: "もっと表示"
              },
              "ko-KR": {
                singular: "...추가"
              },
              "pt-BR": {
                singular: "...mais"
              }
            }
          })
        })]
      }), (!_v6 || _v7) && _v0, _v7 ? (0, _v1.jsx)(_v4.Text, {
        as: "button",
        backgroundColor: "transparent",
        color: "text-secondary",
        variant: "body-md",
        onClick: _v8,
        padding: "0",
        _hover: {
          textDecoration: "underline"
        },
        children: (0, _v7.translate)({
          singular: "Show less",
          dictionary: {
            es: {
              singular: "Mostrar menos"
            },
            "de-DE": {
              singular: "Weniger anzeigen"
            },
            "fr-FR": {
              singular: "Afficher moins"
            },
            "ja-JP": {
              singular: "表示件数を減らす"
            },
            "ko-KR": {
              singular: "줄이기"
            },
            "pt-BR": {
              singular: "Mostrar menos"
            },
            "zh-CN": {
              singular: "收起"
            }
          }
        })
      }) : null]
    });
  }]);
}