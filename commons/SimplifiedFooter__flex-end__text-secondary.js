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
  _v0.s(["SimplifiedFooter", 0, () => (0, _v1.jsx)(_v2.Flex, {
    justify: "flex-end",
    w: "100%",
    children: (0, _v1.jsxs)(_v4.HStack, {
      divider: (0, _v1.jsx)(_v5.Box, {
        borderColor: "text-secondary",
        w: (0, _v6.rem)(5),
        h: (0, _v6.rem)(14)
      }),
      flexWrap: "wrap",
      children: [(0, _v1.jsx)(_v3.Text, {
        color: "text-secondary",
        variant: "body-lg",
        children: (0, _v7.translate)({
          singular: "© {YEAR} VideoJi, Inc. All rights reserved.",
          replacements: {
            YEAR: new Date().getFullYear().toString()
          },
          dictionary: {
            es: {
              singular: "© {YEAR} VideoJi, Inc. Todos los derechos reservados."
            },
            "de-DE": {
              singular: "© {YEAR} VideoJi, Inc. Alle Rechte vorbehalten."
            },
            "fr-FR": {
              singular: "© {YEAR} VideoJi, Inc. Tous droits réservés."
            },
            "ja-JP": {
              singular: "© {YEAR} VideoJi, Inc. All rights reserved.（不許複製・禁無断転載）"
            },
            "ko-KR": {
              singular: "© {YEAR} VideoJi, Inc. 모든 권리 보유."
            },
            "pt-BR": {
              singular: "© {YEAR} VideoJi, Inc. Todos os direitos reservados."
            },
            "zh-CN": {
              singular: "© {YEAR} VideoJi, Inc. 保留所有权利。"
            }
          }
        })
      }, "vimeo"), (0, _v1.jsx)(_v8.FooterLink, {
        color: "text-secondary",
        href: "https://www.videoji.cn/terms",
        children: (0, _v7.translate)({
          singular: "Terms",
          dictionary: {
            es: {
              singular: "Condiciones"
            },
            "de-DE": {
              singular: "Nutzungsbedingungen"
            },
            "fr-FR": {
              singular: "Conditions"
            },
            "ja-JP": {
              singular: "利用規約"
            },
            "ko-KR": {
              singular: "이용 약관"
            },
            "pt-BR": {
              singular: "Termos"
            },
            "zh-CN": {
              singular: "条款"
            }
          }
        })
      }), (0, _v1.jsx)(_v8.FooterLink, {
        color: "text-secondary",
        href: "https://www.videoji.cn/privacy",
        children: (0, _v7.translate)({
          singular: "Privacy",
          dictionary: {
            es: {
              singular: "Privacidad"
            },
            "de-DE": {
              singular: "Datenschutz"
            },
            "fr-FR": {
              singular: "Confidentialité "
            },
            "ja-JP": {
              singular: "プライバシー"
            },
            "ko-KR": {
              singular: "프라이버시"
            },
            "pt-BR": {
              singular: "Privacidade"
            },
            "zh-CN": {
              singular: "隐私"
            }
          }
        })
      }), (0, _v1.jsx)(_v8.FooterLink, {
        color: "text-secondary",
        href: "https://beian.miit.gov.cn/",
        children: "京ICP备19007319号-125"
      }), (0, _v1.jsxs)(_v8.FooterLink, {
        color: "text-secondary",
        href: "https://beian.mps.gov.cn/#/query/webSearch?code=11010502055965",
        display: "flex",
        alignItems: "center",
        children: [(0, _v1.jsx)(_v5.Box, {
          as: "img",
          src: "https://i.vimeocdn.com/custom_asset/ab0722b567a25d9773896cb689643ded",
          alt: "京公网安备",
          h: "1rem",
          mr: "xs"
        }), "京公网安备11010502055965号"]
      })]
    })
  })]);
}