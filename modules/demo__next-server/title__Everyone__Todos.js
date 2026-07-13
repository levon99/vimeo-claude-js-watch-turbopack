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
    _v9 = _v0.i(0);
  let _v10 = () => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v2.default, {
      children: (0, _v1.jsx)("title", {
        children: (0, _v9.translate)({
          singular: "Everyone",
          dictionary: {
            es: {
              singular: "Todos"
            },
            "de-DE": {
              singular: "Jeder"
            },
            "fr-FR": {
              singular: "Tout le monde"
            },
            "ja-JP": {
              singular: "全員"
            },
            "ko-KR": {
              singular: "모두가"
            },
            "pt-BR": {
              singular: "Todo mundo"
            },
            "zh-CN": {
              singular: "所有人"
            }
          }
        })
      })
    }), (0, _v1.jsx)(_v4.Flex, {
      mt: "lg",
      px: "lg",
      gap: "lg",
      children: (0, _v1.jsxs)(_v4.Flex, {
        direction: "column",
        gap: "md",
        children: [(0, _v1.jsx)(_v5.Header, {
          size: "xl",
          children: "Next Server Demo Page"
        }), (0, _v1.jsx)(_v6.Text, {
          variant: "body-xl",
          children: "This page is being served via the Node server"
        }), (0, _v1.jsx)(_v3.default, {
          href: "/home",
          children: "Home"
        }), (0, _v1.jsx)(_v3.default, {
          href: "/upload/videos",
          children: "Upload"
        }), (0, _v1.jsx)(_v3.default, {
          href: "/signup/custom",
          children: "Sign up"
        }), (0, _v1.jsx)(_v3.default, {
          href: "/help/contact/billing",
          children: "Help"
        }), (0, _v1.jsx)(_v3.default, {
          href: "/welcome/pro",
          children: "Welcome"
        }), (0, _v1.jsx)(_v3.default, {
          href: "/live/guest/wheee",
          children: "Live guest"
        }), (0, _v1.jsx)(_v6.Text, {
          variant: "body-xl",
          children: (0, _v9.translate)({
            singular: "For customers with standard video needs: from hosting & custom branding to livestreaming.",
            dictionary: {
              es: {
                singular: "Para clientes con necesidades estándar de video: desde alojamiento y personalización de la marca hasta transmisión en vivo."
              },
              "de-DE": {
                singular: "Für Kunden mit Standardvideobedürfnissen: Hosting, benutzerdefiniertes Branding oder Livestreaming."
              },
              "fr-FR": {
                singular: "Pour les clients ayant des besoins vidéo standard : de l'hébergement à la personnalisation à leur image en passant par le streaming en direct."
              },
              "ja-JP": {
                singular: "顧客にホスティングやカスタムブランディング、ライブストリーミングなどの標準的な動画ニーズがある場合。"
              },
              "ko-KR": {
                singular: "호스팅과 커스텀 브랜딩부터 라이브 스트리밍까지, 일반적인 동영상 니즈를 갖고 있는 고객용."
              },
              "pt-BR": {
                singular: "Para clientes com necessidades de vídeo padrão: desde a hospedagem e personalização da marca até a transmissão ao vivo."
              },
              "zh-CN": {
                singular: "适用于有标准视频需求的客户：从托管与自定义品牌设计到直播的标准需求。"
              }
            }
          })
        })]
      })
    })]
  });
  _v10.getLayout = _v0 => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v8.DefaultNavigation, {}), _v0]
  }), (0, _v7.withPageSetup)(() => ({
    props: {
      bypassAgeVerification: !0
    }
  }), {
    staffOnly: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v10], 0);
}