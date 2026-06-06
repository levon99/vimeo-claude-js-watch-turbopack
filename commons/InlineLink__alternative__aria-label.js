{
  "use strict";

  _v0.s(["InlineLink", () => _v23, "default", () => _v14]);
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
  function _v14({
    absoluteUrl: _v0 = !1,
    languageSelect: _v1,
    format: _v2 = "alternative",
    impressumQualifies: _v3,
    isDoNotSellReady: _v4
  }) {
    let _v5 = (0, _v2.useContext)(_v10.ViewerContext),
      _v6 = _v5?.terminateContractQualifies,
      [_v7, _v8, _v9, _v10, _v11, _v12] = (0, _v13.getLegalLinks)(),
      _v13 = (0, _v13.getSiteMapLinks)(!!_v6);
    return (0, _v1.jsxs)(_v16, {
      children: [(0, _v1.jsx)(_v17, {
        children: (0, _v1.jsx)("a", {
          href: "/",
          "aria-label": (0, _v8.translate)({
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
          children: (0, _v1.jsx)(_v11.default, {
            color: _v7.bokehTheme.colors.white,
            width: (0, _v5.rem)(120)
          })
        })
      }, "lovely-footer-00"), _v13.map(({
        header: _v0,
        links: _v1
      }, _v2) => (0, _v1.jsxs)(_v17, {
        children: [(0, _v1.jsx)(_v6.Text, {
          size: "6",
          style: {
            color: _v7.bokehTheme.colors.gray["200"]
          },
          children: _v0
        }), _v1.map((_v0, _v1) => _v0 && (0, _v1.jsx)(_v22, {
          href: _v0 ? (0, _v13.getAbsoluteUrl)(_v0.href) : _v0.href,
          onClick: () => _v0.fa && _v4.FatalAttraction.trackClick(_v0.fa),
          children: _v0.label
        }, `${_v0}-link-${_v1}`))]
      }, `${_v0}-section-${_v2}`)), (0, _v1.jsxs)(_v21, {
        children: [(0, _v1.jsxs)(_v18, {
          children: [(0, _v8.translate)({
            singular: "© {YEAR} Vimeo.com, Inc. All rights reserved.",
            replacements: {
              YEAR: new Date().getFullYear().toString()
            },
            dictionary: {
              es: {
                singular: "© {YEAR} Vimeo.com, Inc. Todos los derechos reservados."
              },
              "de-DE": {
                singular: "© {YEAR} Vimeo.com, Inc. Alle Rechte vorbehalten."
              },
              "fr-FR": {
                singular: "© {YEAR} Vimeo.com, Inc. Tous droits réservés."
              },
              "ja-JP": {
                singular: "© {YEAR} Vimeo.com,Inc.All rights reserved.（不許複製・禁無断転載）"
              },
              "ko-KR": {
                singular: "© {YEAR} Vimeo.com, Inc. 모든 권리 보유."
              },
              "pt-BR": {
                singular: "© {YEAR} Vimeo.com, Inc. Todos os direitos reservados."
              },
              "zh-CN": {
                singular: "© {YEAR} Vimeo.com, Inc. 保留所有权利。"
              }
            }
          }), " ", (0, _v1.jsx)(_v15, {
            linkObj: _v7,
            absoluteUrl: _v0
          }), " | ", (0, _v1.jsx)(_v15, {
            linkObj: _v8,
            absoluteUrl: _v0
          }), !_v3 && (0, _v1.jsx)(_v12.default, {
            isDoNotSellReady: _v4
          }), " | ", (0, _v1.jsx)(_v15, {
            linkObj: _v9,
            absoluteUrl: _v0
          }), " | ", _v3 && (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v15, {
              linkObj: _v10,
              absoluteUrl: _v0
            }), " ", " | "]
          }), (0, _v1.jsx)(_v15, {
            linkObj: _v11,
            absoluteUrl: _v0
          }), " | ", (0, _v1.jsx)(_v15, {
            linkObj: _v12,
            absoluteUrl: _v0
          })]
        }), (0, _v1.jsx)(_v19, {
          format: _v2,
          children: (0, _v8.translate)({
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
        }, "iStillLoveFooter-01"), (0, _v1.jsx)(_v20, {
          children: _v1
        }, "iStillLoveFooter-10")]
      }, "lovely-footer-01")]
    });
  }
  let _v15 = ({
      linkObj: _v0,
      absoluteUrl: _v1
    }) => (0, _v1.jsx)(_v23, {
      href: _v1 ? (0, _v13.getAbsoluteUrl)(_v0.href) : _v0.href,
      children: _v0.label
    }),
    _v16 = _v3.default.footer.withConfig({
      displayName: "StandardFooter__Footer",
      componentId: "sc-6b4b2727-0"
    })`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto;
  padding: 4rem 2.75rem 2rem 2.67rem;
  background: ${_v7.bokehTheme.colors.gray["800"]};

  @media (max-width: 62.5rem) {
    display: none;
  }
`,
    _v17 = _v3.default.div.withConfig({
      displayName: "StandardFooter__SectionStyled",
      componentId: "sc-6b4b2727-1"
    })`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-width: 11.25rem;
  & + & {
    padding-left: 20px;
  }
  a {
    color: ${_v7.bokehTheme.colors.white};
  }
`,
    _v18 = (0, _v3.default)(_v9.Text).withConfig({
      displayName: "StandardFooter__LegalText",
      componentId: "sc-6b4b2727-2"
    })`
  margin-right: auto;
  color: ${_v7.bokehTheme.colors.white};
  cursor: default;
`,
    _v19 = (0, _v3.default)(_v9.Text).withConfig({
      displayName: "StandardFooter__AuxText",
      componentId: "sc-6b4b2727-3"
    })`
  margin-left: 1rem;
  color: ${_v7.bokehTheme.colors.white};
`,
    _v20 = _v3.default.div.withConfig({
      displayName: "StandardFooter__SelectWrapper",
      componentId: "sc-6b4b2727-4"
    })`
  margin-left: 1rem;
`,
    _v21 = _v3.default.div.withConfig({
      displayName: "StandardFooter__Auxiliary",
      componentId: "sc-6b4b2727-5"
    })`
  grid-column: 1/6;
  display: flex;
  width: 100%;
  margin-top: 2rem;
  align-items: center;
  justify-content: flex-end;
`,
    _v22 = (0, _v3.default)(_v9.Text).attrs({
      element: "a"
    }).withConfig({
      displayName: "StandardFooter__LinkedFooterItem",
      componentId: "sc-6b4b2727-6"
    })`
  display: block;
  margin-bottom: 0.5rem;
  color: ${_v7.bokehTheme.colors.white};
  text-decoration: none;

  &:hover {
    text-decoration: none;
    color: ${_v7.bokehTheme.colors.gray["500"]};
  }
`,
    _v23 = (0, _v3.default)(_v9.Text).attrs({
      element: "a"
    }).withConfig({
      displayName: "StandardFooter__InlineLink",
      componentId: "sc-6b4b2727-7"
    })`
  display: inline;
  margin-bottom: 0.5rem;
  color: ${_v7.bokehTheme.colors.white};
  text-decoration: none;

  &:hover {
    text-decoration: none;
    color: ${_v7.bokehTheme.colors.gray["500"]};
  }
`;
}