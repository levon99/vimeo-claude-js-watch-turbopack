{
  "use strict";

  var _v1,
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = ((_v1 = {}).language = "language", _v1.contentViewingPrefs = "content_viewing_prefs", _v1),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0);
  let _v21 = (0, _v8.default)(_v20.ChevronDown).withConfig({
    displayName: "ChevronIcon",
    componentId: "sc-edf1105f-0"
  })`
  width: ${(0, _v19.rem)(16)};
  height: ${(0, _v19.rem)(16)};
  margin-top: ${(0, _v19.rem)(2)};
  &:hover {
    path {
      fill: ${_v10.bokehTheme.colors.gray["800"]};
    }
  }
  path {
    fill: ${_v10.bokehTheme.colors.gray["200"]};
  }
`;
  var _v22 = _v0.i(0);
  let _v23 = _v8.default.footer.withConfig({
      displayName: "MinimalFooter__Footer",
      componentId: "sc-c1cce895-0"
    })`
  background: ${({
      theme: _v0
    }) => "dark" === _v0.name ? _v10.bokehTheme.colors.gray["900"] : _v10.bokehTheme.colors.gray["50"]};
  display: flex;
  justify-content: space-between;
  padding: ${(0, _v9.rem)(8)} ${(0, _v9.rem)(32)} ${(0, _v9.rem)(16)};
  align-items: center;
  @media (width < ${(0, _v9.rem)(_v15.BreakPoints.sm)}) {
    display: none;
  }
`,
    _v24 = (0, _v8.default)(_v13.Paragraph).attrs({
      size: "3"
    }).withConfig({
      displayName: "MinimalFooter__Text",
      componentId: "sc-c1cce895-1"
    })`
  margin-bottom: 0;
  margin-top: 0;

  &:hover {
    cursor: pointer;
  }
`,
    _v25 = _v8.default.div.withConfig({
      displayName: "MinimalFooter__Section",
      componentId: "sc-c1cce895-2"
    })`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,
    _v26 = _v8.default.div.withConfig({
      displayName: "MinimalFooter__ModalCta",
      componentId: "sc-c1cce895-3"
    })`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    &:hover {
      cursor: pointer;
      color: ${_v10.bokehTheme.colors.gray["800"]};
    }
  }
`,
    _v27 = _v8.default.div.withConfig({
      displayName: "MinimalFooter__MenuCta",
      componentId: "sc-c1cce895-4"
    })`
  margin-bottom: ${(0, _v9.rem)(1)};
  display: flex;
  &:hover {
    cursor: pointer;
    svg {
      transform: rotate(180deg);
    }
  }
`,
    _v28 = (0, _v8.default)(_v25).withConfig({
      displayName: "MinimalFooter__FooterNav",
      componentId: "sc-c1cce895-5"
    })`
  a {
    text-decoration: none;
  }
  p {
    color: ${_v10.bokehTheme.colors.gray["200"]};
  }
  path,
  circle {
    fill: ${_v10.bokehTheme.colors.gray["200"]};
  }
  & > * {
    &:not(:first-child) {
      margin-left: ${(0, _v9.rem)(24)};
    }
    &:first-child {
      margin-bottom: 0;
    }
    &:hover {
      p {
        color: ${({
      theme: _v0
    }) => "dark" === _v0.name ? _v10.bokehTheme.colors.gray["50"] : _v10.bokehTheme.colors.gray["800"]};
      }
      path,
      circle {
        fill: ${({
      theme: _v0
    }) => "dark" === _v0.name ? _v10.bokehTheme.colors.gray["50"] : _v10.bokehTheme.colors.gray["800"]};
      }
    }
  }
`,
    _v29 = function ({
      impressumQualifies: _v0,
      modalCtas: _v1,
      isDoNotSellReady: _v2
    }) {
      let [_v3, _v4] = (0, _v3.useState)(!1),
        _v5 = (0, _v3.useContext)(_v14.ViewerContext),
        _v6 = _v5?.isSimplifiedSite,
        _v7 = _v22.getLegalLinks().filter(_v0 => (!!_v0 || "Impressum" !== _v0.title) && (!_v6 || _v0.forSimplifiedSite === _v6));
      return (0, _v2.jsx)(_v23, {
        children: (0, _v2.jsxs)(_v28, {
          children: [(0, _v2.jsx)(_v17.Copyright, {}), (0, _v2.jsx)(_v24, {
            children: (0, _v2.jsx)(_v22.Upgrade, {})
          }), (0, _v2.jsx)(_v26, {
            children: (0, _v2.jsx)(_v24, {
              onClick: _v1.language.open,
              children: _v1.language.text
            })
          }), (0, _v2.jsx)(_v24, {
            children: (0, _v2.jsx)(_v22.Help, {})
          }), (0, _v2.jsx)(_v26, {
            children: (0, _v2.jsx)(_v24, {
              onClick: _v1.contentPrefs.open,
              children: _v1.contentPrefs.text
            })
          }), (0, _v2.jsx)(_v11.PopOver, {
            attach: "top",
            content: (0, _v2.jsxs)(_v12.Pop.List, {
              children: [_v7.map((_v0, _v1) => (0, _v2.jsx)(_v30, {
                href: _v0.href,
                children: (0, _v2.jsx)(_v16.PopItem, {
                  title: _v0.title,
                  children: _v0.label
                }, _v1)
              }, `link_${_v1}`)), (0, _v2.jsx)(_v18.default, {
                footerType: "minimal",
                isDoNotSellReady: _v2
              })]
            }),
            children: (0, _v2.jsxs)(_v27, {
              onClick: () => _v4(!0),
              children: [(0, _v2.jsx)(_v24, {
                children: (0, _v4.translate)({
                  singular: "Legal",
                  dictionary: {
                    "de-DE": {
                      singular: "Rechtliches"
                    },
                    "fr-FR": {
                      singular: "Juridique"
                    },
                    "ja-JP": {
                      singular: "法務"
                    },
                    "ko-KR": {
                      singular: "법적 고지 사항"
                    },
                    "pt-BR": {
                      singular: "Jurídico"
                    },
                    "zh-CN": {
                      singular: "法务"
                    }
                  }
                })
              }), (0, _v2.jsx)(_v21, {
                style: {
                  transform: `rotate(${_v3 ? "180" : "0"}deg)`
                }
              })]
            })
          })]
        })
      });
    };
  var _v30 = (0, _v8.default)("a").withConfig({
      displayName: "MinimalFooter___StyledA",
      componentId: "sc-c1cce895-6"
    })`
                    text-decoration: none;
                  `,
    _v31 = _v0.i(0);
  let _v32 = _v8.default.footer.withConfig({
      displayName: "MinimalFooter__Footer",
      componentId: "sc-7c7b1822-0"
    })`
  display: flex;
  flex-direction: column;
  @media (min-width: ${(0, _v9.rem)(768)}) {
    display: none;
  }
`,
    _v33 = _v8.default.div.withConfig({
      displayName: "MinimalFooter__Section",
      componentId: "sc-7c7b1822-1"
    })`
  margin: 0 ${(0, _v9.rem)(24)};
  padding: ${(0, _v9.rem)(12)} 0;
`,
    _v34 = _v8.default.div.withConfig({
      displayName: "MinimalFooter__BorderedSection",
      componentId: "sc-7c7b1822-2"
    })`
  margin: 0 ${(0, _v9.rem)(20)};
  border-bottom: solid 1px ${_v10.bokehTheme.colors.gray["50"]};
`,
    _v35 = (0, _v8.default)(_v13.Paragraph).attrs({
      size: "1"
    }).withConfig({
      displayName: "MinimalFooter__Text",
      componentId: "sc-7c7b1822-3"
    })`
  color: ${_v10.bokehTheme.colors.gray["800"]};
  margin: 0;
  &:hover {
    color: ${_v10.bokehTheme.colors.gray["200"]};
  }
`,
    _v36 = function ({
      impressumQualifies: _v0,
      modalCtas: _v1,
      isDoNotSellReady: _v2
    }) {
      let _v3 = (0, _v3.useContext)(_v14.ViewerContext),
        _v4 = _v3?.isSimplifiedSite;
      return (0, _v2.jsxs)(_v32, {
        children: [(0, _v2.jsx)(_v34, {
          children: (0, _v2.jsx)(_v35, {
            children: (0, _v2.jsx)(_v22.Upgrade, {})
          })
        }), (0, _v2.jsx)(_v31.default, {
          location: "minimalFooter",
          title: (0, _v4.translate)({
            singular: "Legal",
            dictionary: {
              "de-DE": {
                singular: "Rechtliches"
              },
              "fr-FR": {
                singular: "Juridique"
              },
              "ja-JP": {
                singular: "法務"
              },
              "ko-KR": {
                singular: "법적 고지 사항"
              },
              "pt-BR": {
                singular: "Jurídico"
              },
              "zh-CN": {
                singular: "法务"
              }
            }
          }),
          items: [_v22.getLegalLinks().filter(_v0 => (!!_v0 || "Impressum" !== _v0.title) && (!_v4 || _v0.forSimplifiedSite === _v4)).map((_v0, _v1) => (0, _v2.jsx)(_v22.Link, {
            href: _v0.href,
            title: _v0.title,
            children: _v0.title
          }, `link-${_v1}`)), (0, _v2.jsx)(_v18.default, {
            footerType: "minimalMobile",
            isDoNotSellReady: _v2
          }, "link-do-not-sell")]
        }), (0, _v2.jsx)(_v31.default, {
          location: "minimalFooter",
          title: (0, _v4.translate)({
            singular: "More",
            dictionary: {
              es: {
                singular: "Ver más"
              },
              "de-DE": {
                singular: "Mehr"
              },
              "fr-FR": {
                singular: "Plus"
              },
              "ja-JP": {
                singular: "詳細"
              },
              "ko-KR": {
                singular: "더 보기"
              },
              "pt-BR": {
                singular: "Mais"
              },
              "zh-CN": {
                singular: "更多"
              }
            }
          }),
          items: [(0, _v2.jsx)(_v22.Link, {
            onClick: _v1.language.open,
            children: _v1.language.text
          }, "language-link"), (0, _v2.jsx)(_v22.Help, {}, "help-link"), (0, _v2.jsx)(_v22.Link, {
            onClick: _v1.contentPrefs.open,
            children: _v1.contentPrefs.text
          }, "preferences-link")]
        }), (0, _v2.jsx)(_v33, {
          children: (0, _v2.jsx)(_v17.Copyright, {})
        })]
      });
    };
  _v0.s(["default", 0, function ({
    contentViewingPrefs: _v0,
    impressumQualifies: _v1,
    locale: _v2,
    locales: _v3 = [],
    localeLabels: _v4 = [],
    xsrft: _v5
  }) {
    let [_v6, _v7] = (0, _v3.useState)(null),
      [_v8, _v9] = (0, _v3.useState)(!1);
    function _v10(_v0) {
      return _v0 => {
        _v0.preventDefault(), _v7(_v0);
      };
    }
    let _v11 = {
      language: {
        text: (0, _v4.translate)({
          singular: "Language",
          dictionary: {
            es: {
              singular: "Idioma"
            },
            "de-DE": {
              singular: "Sprache"
            },
            "fr-FR": {
              singular: "Langue"
            },
            "ja-JP": {
              singular: "言語"
            },
            "ko-KR": {
              singular: "언어"
            },
            "pt-BR": {
              singular: "Idioma"
            },
            "zh-CN": {
              singular: "语言"
            }
          }
        }),
        open: _v10(_v7.language)
      },
      contentPrefs: {
        text: (0, _v4.translate)({
          singular: "Mature content filter",
          dictionary: {
            es: {
              singular: "Filtro de contenido para adultos"
            },
            "de-DE": {
              singular: "Jugendschutzfilter"
            },
            "fr-FR": {
              singular: "Filtre de contenu pour adultes"
            },
            "ja-JP": {
              singular: "成人向けコンテンツフィルター"
            },
            "ko-KR": {
              singular: "성인 콘텐츠 필터"
            },
            "pt-BR": {
              singular: "Filtro de conteúdo adulto"
            },
            "zh-CN": {
              singular: "成人内容过滤器"
            }
          }
        }),
        open: _v10(_v7.contentViewingPrefs)
      }
    };
    return (0, _v3.useEffect)(() => {
      window.onload = () => _v9(!0);
    }, []), (0, _v2.jsxs)(_v2.Fragment, {
      children: [(0, _v2.jsx)(_v6.LanguageSelectModal, {
        active: _v6 === _v7.language,
        activeSet: _v7,
        locale: _v2,
        locales: _v3,
        localeLabels: _v4,
        token: _v5
      }), _v0 && (0, _v2.jsx)(_v5.ContentFilterModal, {
        active: _v6 === _v7.contentViewingPrefs,
        activeSet: _v7,
        token: _v5,
        contentViewingPrefs: _v0
      }), (0, _v2.jsx)(_v36, {
        impressumQualifies: _v1,
        modalCtas: _v11,
        isDoNotSellReady: _v8
      }), (0, _v2.jsx)(_v29, {
        impressumQualifies: _v1,
        modalCtas: _v11,
        isDoNotSellReady: _v8
      })]
    });
  }], 0);
}