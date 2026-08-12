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
  _v0.s(["Description", 0, ({
    children: _v0,
    description: _v1,
    onMomentPlay: _v2,
    numLines: _v3 = 5,
    clipPageRework: _v4 = !1
  }) => {
    let _v5 = (0, _v7.useBreakpointValue)({
        base: 3,
        md: 6
      }, {
        ssr: !0,
        fallback: "md"
      }),
      _v6 = _v4 ? _v5 ?? 6 : _v3,
      _v7 = (0, _v2.useRef)(null),
      {
        descriptionContainerRef: _v8,
        showExpandButton: _v9,
        isExpanded: _v10,
        toggleExpanded: _v11
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
      _v12 = (0, _v8.useSize)(_v8),
      _v13 = (0, _v8.useSize)(_v7),
      _v14 = _v12?.width || 0,
      _v15 = _v13?.width || 0,
      _v16 = _v13?.height || 22.4,
      _v17 = `linear-gradient(to top, transparent 0%, transparent ${_v16}px, rgb(0, 0, 0) ${_v16}px, rgb(0, 0, 0) 100%), linear-gradient(to right, rgb(0, 0, 0) 0%, rgb(0, 0, 0) ${_v14 - _v15 - 24}px, transparent ${_v14 - _v15 - 4}px, transparent 100%)`,
      _v18 = !_v1.startsWith('<p class="first">'),
      _v19 = {
        p: {
          mb: 200
        }
      };
    return _v18 && (_v19 = {
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
    }), (0, _v1.jsxs)(_v6.VStack, {
      align: "flex-start",
      children: [(0, _v1.jsxs)(_v3.Box, {
        position: "relative",
        w: "100%",
        children: [(0, _v1.jsx)(_v3.Box, {
          onClick: _v0 => {
            let _v1 = _v0.target.getAttribute("data-time");
            _v1 && _v2?.(parseInt(_v1, 10));
          },
          ref: _v8,
          dangerouslySetInnerHTML: {
            __html: (0, _v10.sanitizeDescriptionHtml)(_v1)
          },
          fontSize: "text-sm",
          lineHeight: "text-sm",
          w: "100%",
          sx: _v4 ? {
            ...(_v4 && !_v10 ? {
              display: "-webkit-box",
              WebkitLineClamp: _v6,
              "-webkit-box-orient": "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis"
            } : {}),
            ..._v19
          } : {
            maxHeight: _v10 ? "none" : `calc(${_v6} * var(--vimeo-fontSizes-text-sm, 1.4) * var(--vimeo-lineHeights-text-sm, 0.875rem))`,
            overflow: "hidden",
            maskImage: _v9 && !_v10 ? _v17 : "none",
            ..._v19
          }
        }), _v4 ? null : (0, _v1.jsx)(_v5.Text, {
          as: "button",
          padding: "0",
          backgroundColor: "transparent",
          position: "absolute",
          bottom: "0",
          right: "0",
          color: "text-secondary",
          onClick: _v11,
          ref: _v7,
          variant: "body-md",
          visibility: _v9 && !_v10 ? "visible" : "hidden",
          _hover: {
            textDecoration: "underline"
          },
          children: (0, _v9.translate)({
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
      }), (!_v9 || _v10) && _v0, _v4 ? _v9 ? (0, _v1.jsx)(_v4.Button, {
        variant: "secondary",
        size: "xs",
        onClick: _v11,
        alignSelf: "flex-start",
        children: _v10 ? (0, _v9.translate)({
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
        }) : (0, _v9.translate)({
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
        })
      }) : null : _v10 ? (0, _v1.jsx)(_v5.Text, {
        as: "button",
        backgroundColor: "transparent",
        color: "text-secondary",
        variant: "body-md",
        onClick: _v11,
        padding: "0",
        _hover: {
          textDecoration: "underline"
        },
        children: (0, _v9.translate)({
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