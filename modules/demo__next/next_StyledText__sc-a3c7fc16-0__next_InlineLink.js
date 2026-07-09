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
  let _v9 = _v2.default.span.withConfig({
      displayName: "next__StyledText",
      componentId: "sc-a3c7fc16-0"
    })`
  color: blue;
`,
    _v10 = _v2.default.a.withConfig({
      displayName: "next__InlineLink",
      componentId: "sc-a3c7fc16-1"
    })`
  display: inline;
  color: #555;
  text-decoration: none;
  text-decoration: underline;

  &:hover {
    text-decoration: underline;
  }
`;
  function _v11(_v0, _v1) {
    return _v0 => (0, _v1.jsx)(_v10, {
      href: _v1,
      children: _v0
    }, _v0);
  }
  let _v12 = () => (0, _v1.jsxs)(_v7.Page, {
    children: [(0, _v1.jsx)("h1", {
      children: (0, _v4.translate)({
        singular: "Home",
        dictionary: {
          es: {
            singular: "Inicio"
          },
          "de-DE": {
            singular: "Startseite"
          },
          "fr-FR": {
            singular: "Accueil"
          },
          "ja-JP": {
            singular: "ホーム"
          },
          "ko-KR": {
            singular: "홈"
          },
          "pt-BR": {
            singular: "Página Inicial"
          },
          "zh-CN": {
            singular: "主页"
          }
        }
      })
    }), (0, _v1.jsx)("h2", {
      children: "language tests below:"
    }), (0, _v1.jsxs)("ul", {
      children: [(0, _v1.jsxs)("li", {
        children: [(0, _v1.jsx)("h4", {
          children: "simple:"
        }), (0, _v4.translate)({
          singular: "Home",
          dictionary: {
            es: {
              singular: "Inicio"
            },
            "de-DE": {
              singular: "Startseite"
            },
            "fr-FR": {
              singular: "Accueil"
            },
            "ja-JP": {
              singular: "ホーム"
            },
            "ko-KR": {
              singular: "홈"
            },
            "pt-BR": {
              singular: "Página Inicial"
            },
            "zh-CN": {
              singular: "主页"
            }
          }
        })]
      }), (0, _v1.jsxs)("li", {
        children: [(0, _v1.jsx)("h4", {
          children: "simple replacement:"
        }), (0, _v4.translate)({
          singular: "No results for {SEARCH_TEXT}",
          replacements: {
            SEARCH_TEXT: "5"
          },
          dictionary: {
            es: {
              singular: "No hay resultados para {SEARCH_TEXT}"
            },
            "de-DE": {
              singular: "Keine Ergebnisse für {SEARCH_TEXT}"
            },
            "fr-FR": {
              singular: "Aucun résultat pour {SEARCH_TEXT}"
            },
            "ja-JP": {
              singular: "{SEARCH_TEXT}の結果はありません"
            },
            "ko-KR": {
              singular: "{SEARCH_TEXT}에 대한 결과가 없습니다"
            },
            "pt-BR": {
              singular: "Nenhum resultado para {SEARCH_TEXT}"
            },
            "zh-CN": {
              singular: "未找到与 {SEARCH_TEXT} 相关的结果"
            }
          }
        })]
      }), (0, _v1.jsxs)("li", {
        children: [(0, _v1.jsx)("h4", {
          children: "plural replacement:"
        }), (0, _v4.translate)({
          singular: "{COUNT} year ago",
          plural: "{COUNT} years ago",
          count: 1,
          replacements: {
            COUNT: 1
          },
          dictionary: {
            es: {
              singular: "Hace {COUNT} año",
              plural: "Hace {COUNT} años"
            },
            "de-DE": {
              singular: "vor {COUNT} Jahr",
              plural: "vor {COUNT} Jahren"
            },
            "fr-FR": {
              singular: "Il y a {COUNT} an",
              plural: "Il y a {COUNT} ans"
            },
            "ja-JP": {
              singular: "{COUNT}年前",
              plural: "{COUNT}年前"
            },
            "ko-KR": {
              singular: "{COUNT}년 전",
              plural: "{COUNT}년 전"
            },
            "pt-BR": {
              singular: "{COUNT} ano atrás",
              plural: "{COUNT} anos atrás"
            },
            "zh-CN": {
              singular: "{COUNT} 年前",
              plural: "{COUNT} 年前"
            }
          }
        }), (0, _v4.translate)({
          singular: "{COUNT} year ago",
          plural: "{COUNT} years ago",
          count: 5,
          replacements: {
            COUNT: 5
          },
          dictionary: {
            es: {
              singular: "Hace {COUNT} año",
              plural: "Hace {COUNT} años"
            },
            "de-DE": {
              singular: "vor {COUNT} Jahr",
              plural: "vor {COUNT} Jahren"
            },
            "fr-FR": {
              singular: "Il y a {COUNT} an",
              plural: "Il y a {COUNT} ans"
            },
            "ja-JP": {
              singular: "{COUNT}年前",
              plural: "{COUNT}年前"
            },
            "ko-KR": {
              singular: "{COUNT}년 전",
              plural: "{COUNT}년 전"
            },
            "pt-BR": {
              singular: "{COUNT} ano atrás",
              plural: "{COUNT} anos atrás"
            },
            "zh-CN": {
              singular: "{COUNT} 年前",
              plural: "{COUNT} 年前"
            }
          }
        })]
      }), (0, _v1.jsxs)("li", {
        children: [(0, _v1.jsx)("h4", {
          children: "multiple replacments:"
        }), (0, _v4.translate)({
          singular: "© {YEAR} Vimeo, Inc. All rights reserved. {TERMS}Terms{/TERMS}, {PRIVACY}Privacy{/PRIVACY}, {US_STATE_PRIVACY}U.S. State Privacy{/US_STATE_PRIVACY}, {IMPRESSUM}Impressum{/IMPRESSUM}, {COPYRIGHT}Copyright{/COPYRIGHT} & {COOKIES}Cookies{/COOKIES}",
          replacements: {
            YEAR: new Date().getFullYear().toString(),
            TERMS: _v11("legal-link-terms", "/terms"),
            PRIVACY: _v11("legal-link-privacy", "/privacy"),
            US_STATE_PRIVACY: _v11("legal-link-us-state-privacy", "/privacy/us-state-privacy"),
            IMPRESSUM: _v11("legal-link-impressum", "/leo/guidelines/impressum"),
            COPYRIGHT: _v11("legal-link-copyright", "/dmca"),
            COOKIES: _v11("legal-link-cookies", "/cookie_policy")
          },
          dictionary: {
            es: {
              singular: "© {YEAR} Vimeo, Inc. Todos los derechos reservados. {TERMS}Condiciones{/TERMS}, {PRIVACY}privacidad{/PRIVACY}, {US_STATE_PRIVACY}EE. UU. Privacidad{/US_STATE_PRIVACY}, {IMPRESSUM}Impressum{/IMPRESSUM}, {COPYRIGHT}derechos de autor{/COPYRIGHT} y {COOKIES}cookies{/COOKIES}"
            },
            "de-DE": {
              singular: "© {YEAR} Vimeo, Inc. Alle Rechte vorbehalten. {TERMS}AGB{/TERMS},{PRIVACY}Datenschutz{/PRIVACY},{US_STATE_PRIVACY}Datenschutz in US-Bundesstaaten{/US_STATE_PRIVACY},{IMPRESSUM}Impressum{/IMPRESSUM},{COPYRIGHT}Urheberrecht{/COPYRIGHT} und {COOKIES}Cookies{/COOKIES}"
            },
            "fr-FR": {
              singular: "© {YEAR} Vimeo, Inc. Tous droits réservés. {TERMS}Conditions d'utilisation{/TERMS}, {PRIVACY}Confidentialité{/PRIVACY}, {US_STATE_PRIVACY}Confidentialité des États américains{/US_STATE_PRIVACY}, {IMPRESSUM}Mentions légales{/IMPRESSUM}, {COPYRIGHT}Droit d'auteur{/COPYRIGHT} et {COOKIES}Cookies{/COOKIES}"
            },
            "ja-JP": {
              singular: "© {YEAR} Vimeo, Inc.All rights reserved.（不許複製・禁無断転載）{TERMS}利用規約{/TERMS}、{PRIVACY}プライバシー{/PRIVACY}、 {US_STATE_PRIVACY}米国州のプライバシー{/US_STATE_PRIVACY}、{IMPRESSUM}Impressum{/IMPRESSUM}、{COPYRIGHT}著作権{/COPYRIGHT}＆{COOKIES}Cookies{/COOKIES}"
            },
            "ko-KR": {
              singular: "© {YEAR} Vimeo, Inc. All rights reserved. {TERMS}이용 약관{/TERMS}, {PRIVACY}개인정보 보호{/PRIVACY}, {US_STATE_PRIVACY}미국 주 개인정보 보호{/US_STATE_PRIVACY}, {IMPRESSUM}기업 정보{/IMPRESSUM}, {COPYRIGHT}저작권{/COPYRIGHT} 및 {COOKIES}쿠키{/COOKIES}"
            },
            "pt-BR": {
              singular: "© {YEAR} Vimeo, Inc. Todos os direitos reservados. {TERMS}Termos{/TERMS}, {PRIVACY}Privacidade{/PRIVACY}, {US_STATE_PRIVACY}Leis estaduais de privacidade dos EUA{/US_STATE_PRIVACY}, {IMPRESSUM}Impressum{/IMPRESSUM}, {COPYRIGHT}Direitos autorais{/COPYRIGHT} & {COOKIES}Cookies{/COOKIES}"
            },
            "zh-CN": {
              singular: "© {YEAR} Vimeo, Inc. 保留所有权利。{TERMS}条款{/TERMS}、{PRIVACY}隐私权{/PRIVACY}、{US_STATE_PRIVACY}美国隐私权法{/US_STATE_PRIVACY}、{IMPRESSUM}版权说明{/IMPRESSUM}、{COPYRIGHT}版权{/COPYRIGHT}与 {COOKIES}Cookie{/COOKIES}"
            }
          }
        })]
      }), (0, _v1.jsxs)("li", {
        children: [(0, _v1.jsx)("h4", {
          children: "replacement with enclossing function:"
        }), (0, _v4.translate)({
          singular: "Storage {usedText}{percentUsed}%{/usedText}",
          replacements: {
            percentUsed: "50",
            usedText: _v0 => (0, _v1.jsx)(_v9, {
              children: _v0
            }, "percent")
          },
          dictionary: {
            es: {
              singular: "Almacenamiento: {usedText}{percentUsed} %{/usedText}"
            },
            "de-DE": {
              singular: "Speicherplatz zu {usedText}{percentUsed} % aufgebraucht{/usedText}"
            },
            "fr-FR": {
              singular: "Stockage : {usedText}{percentUsed} %{/usedText}"
            },
            "ja-JP": {
              singular: "ストレージ {usedText}{percentUsed}%{/usedText}"
            },
            "ko-KR": {
              singular: "저장 공간 {usedText}{percentUsed}%{/usedText}"
            },
            "pt-BR": {
              singular: "{usedText}{percentUsed}%{/usedText} de Armazenamento"
            },
            "zh-CN": {
              singular: "存储 {usedText}{percentUsed}%{/usedText}"
            }
          }
        })]
      })]
    })]
  });
  _v12.getLayout = (_v0, _v1) => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v5.HeaderLayout, {
      ..._v1
    }), (0, _v1.jsx)(_v8.NextNavigationLayout, {}), _v0, (0, _v1.jsx)(_v6.StandardFooterLayout, {})]
  }), (0, _v3.withPageSetup)({
    staffOnly: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v12], 0);
}