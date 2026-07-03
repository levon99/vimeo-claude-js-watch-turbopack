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
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0);
  let _v18 = _v6.default.footer.withConfig({
      displayName: "StandardFooter__Footer",
      componentId: "sc-c42bc5f8-0"
    })`
  display: flex;
  flex-direction: column;
  background: ${_v9.bokehTheme.colors.gray["800"]};

  @media (min-width: ${(0, _v8.rem)(0)}) {
    display: none;
  }
`,
    _v19 = _v6.default.div.withConfig({
      displayName: "StandardFooter__Section",
      componentId: "sc-c42bc5f8-1"
    })`
  margin: 0 ${(0, _v8.rem)(24)};
  padding: ${(0, _v8.rem)(12)} 0;

  p {
    color: ${_v9.bokehTheme.colors.white};
  }
`,
    _v20 = (0, _v6.default)(_v11.Paragraph).attrs({
      size: "1"
    }).withConfig({
      displayName: "StandardFooter__Text",
      componentId: "sc-c42bc5f8-2"
    })`
  color: ${_v9.bokehTheme.colors.gray["800"]};
  margin: 0;
`,
    _v21 = function ({
      absoluteUrl: _v0 = !1,
      languageSelect: _v1,
      isDoNotSellReady: _v2
    }) {
      let _v3,
        _v4 = (0, _v2.useContext)(_v12.ViewerContext),
        _v5 = _v4?.isSimplifiedSite,
        _v6 = _v4?.impressumQualifies,
        _v7 = _v4?.terminateContractQualifies,
        _v8 = _v17.getSiteMapLinks(!!_v7);
      return (0, _v1.jsxs)(_v18, {
        children: [(0, _v1.jsx)(_v19, {
          children: (0, _v1.jsx)("a", {
            href: "/",
            "aria-label": (0, _v10.translate)({
              singular: "Vimeo logo. Click on this link to navigate to the homepage.",
              dictionary: {
                es: {
                  singular: "Logo de Vimeo. Haz clic en este enlace para navegar a la página de inicio."
                },
                "de-DE": {
                  singular: "Vimeo-Logo. Klicke auf diesen Link, um zur Startseite zu gelangen."
                },
                "fr-FR": {
                  singular: "Logo Vimeo. Cliquez sur le lien pour accéder à la page d'accueil."
                },
                "ja-JP": {
                  singular: "Vimeoロゴホームページに移動するには、このリンクをクリック。"
                },
                "ko-KR": {
                  singular: "Vimeo 로고 이 링크를 클릭하면 홈페이지로 이동합니다."
                },
                "pt-BR": {
                  singular: "Logo do Vimeo. Clique neste link para navegar até a página inicial."
                },
                "zh-CN": {
                  singular: "Vimeo 徽标点击此链接导航至首页。"
                }
              }
            }),
            children: (0, _v1.jsx)(_v14.default, {
              color: _v9.bokehTheme.colors.white,
              width: (0, _v8.rem)(120)
            })
          })
        }), _v8.map((_v0, _v1) => (0, _v1.jsx)(_v13.default, {
          location: "footer",
          title: _v0.header,
          items: _v0.links.map((_v0, _v1) => _v0 && (0, _v1.jsx)(_v17.Link, {
            href: _v0 ? _v17.getAbsoluteUrl(_v0.href) : _v0.href,
            onClick: () => {
              _v0.fa && _v7.FatalAttraction.trackClick(_v0.fa);
            },
            children: _v0.label
          }, `${_v0}-mobile-${_v1}`))
        }, `mobile-footer-links-${_v0.header}-${_v1}`)), (0, _v1.jsx)(_v13.default, {
          location: "footer",
          title: (0, _v10.translate)({
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
          items: ((_v3 = _v17.getLegalLinks().filter(_v0 => (!!_v6 || "Impressum" !== _v0.title) && (!_v5 || _v0.forSimplifiedSite === _v5)).map((_v0, _v1) => (0, _v1.jsx)(_v17.Link, {
            title: _v0.title,
            href: _v0 ? _v17.getAbsoluteUrl(_v0.href) : _v0.href,
            children: _v0.title
          }, `${_v0}-mobile-${_v1}`))).splice(2, 0, (0, _v1.jsx)(_v16.default, {
            footerType: "standardMobile",
            isDoNotSellReady: _v2
          })), _v3)
        }), (0, _v1.jsxs)(_v19, {
          children: [(0, _v1.jsx)(_v20, {
            children: (0, _v10.translate)({
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
            })
          }), _v1]
        }), (0, _v1.jsx)(_v19, {
          children: (0, _v1.jsx)(_v15.Copyright, {})
        })]
      });
    };
  _v0.s(["default", 0, function ({
    absoluteUrl: _v0 = !1,
    locale: _v1,
    locales: _v2 = [],
    localeLabels: _v3 = [],
    xsrft: _v4,
    impressumQualifies: _v5
  }) {
    let [_v6, _v7] = (0, _v2.useState)(!1),
      _v8 = _v2 && _v2.length && (0, _v1.jsx)(_v3.Select, {
        id: "language-select",
        size: "sm",
        defaultValue: _v1,
        onChange: _v0 => {
          let {
            value: _v1
          } = _v0.target;
          (0, _v4.setLanguage)({
            locale: _v1,
            token: _v4
          }).then(({
            ok: _v0
          }) => _v0 && window.location.reload());
        },
        children: _v2.map((_v0, _v1) => (0, _v1.jsx)(_v3.Select.Option, {
          value: _v0,
          children: _v3[_v1]
        }, `${_v0}-footer-${_v1}`))
      });
    return (0, _v2.useEffect)(() => {
      window.onload = () => _v7(!0);
    }, []), (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v21, {
        absoluteUrl: _v0,
        languageSelect: _v8,
        isDoNotSellReady: _v6
      }), (0, _v1.jsx)(_v5.default, {
        absoluteUrl: _v0,
        languageSelect: _v8,
        impressumQualifies: _v5,
        isDoNotSellReady: _v6
      })]
    });
  }], 0);
}