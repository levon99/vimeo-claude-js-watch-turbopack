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
    _v11 = _v0.i(0);
  _v0.s(["PageNotAvailablePage", 0, () => {
    let _v0 = (0, _v11.useViewer)(),
      _v1 = !!_v0?.user;
    return (0, _v1.jsxs)(_v2.Flex, {
      align: "center",
      flexDirection: {
        base: "column",
        md: "row"
      },
      w: "100%",
      maxW: "1440px",
      p: {
        base: "1rem",
        md: (0, _v8.rem)(58)
      },
      m: "auto",
      gap: {
        base: "3rem",
        md: (0, _v8.rem)(58)
      },
      children: [(0, _v1.jsxs)(_v7.VStack, {
        alignItems: "flex-start",
        gap: {
          base: (0, _v8.rem)(24),
          md: (0, _v8.rem)(40)
        },
        flex: "1",
        p: {
          base: "1rem",
          md: 0
        },
        children: [(0, _v1.jsx)(_v5.Text, {
          variant: {
            base: "heading-xl",
            md: "heading-2xl"
          },
          children: (0, _v10.translate)({
            singular: "This page isn’t available in your region",
            dictionary: {
              es: {
                singular: "Esta página no está disponible en su región."
              },
              "de-DE": {
                singular: "Diese Seite ist in Ihrer Region nicht verfügbar"
              },
              "fr-FR": {
                singular: "Cette page n'est pas disponible dans votre région."
              },
              "ja-JP": {
                singular: "このページはお住まいの地域ではご利用いただけません"
              },
              "ko-KR": {
                singular: "이 페이지는 귀하의 지역에서는 이용할 수 없습니다."
              },
              "pt-BR": {
                singular: "Esta página não está disponível na sua região"
              },
              "zh-CN": {
                singular: "您所在地区无法查看此页面"
              }
            }
          })
        }), (0, _v1.jsx)(_v6.Button, {
          as: "a",
          href: _v1 ? "/library-search" : "/",
          size: "lg",
          w: {
            base: "100%",
            sm: (0, _v8.rem)(243)
          },
          justifyContent: "space-between",
          color: "black",
          bgColor: "vimeoBlue.400",
          rightIcon: (0, _v1.jsx)(_v4.Box, {
            px: (0, _v8.rem)(14),
            py: (0, _v8.rem)(4),
            bg: "vimeoBlue.600",
            borderRadius: "input-xs",
            children: (0, _v1.jsx)(_v9.ArrowRight, {})
          }),
          children: _v1 ? (0, _v10.translate)({
            singular: "Visit your library",
            dictionary: {
              es: {
                singular: "Visite su biblioteca"
              },
              "de-DE": {
                singular: "Besuchen Sie Ihre Bibliothek"
              },
              "fr-FR": {
                singular: "Consultez votre bibliothèque"
              },
              "ja-JP": {
                singular: "ライブラリにアクセス"
              },
              "ko-KR": {
                singular: "라이브러리로 이동"
              },
              "pt-BR": {
                singular: "Visite sua biblioteca"
              },
              "zh-CN": {
                singular: "访问您的视频库"
              }
            }
          }) : (0, _v10.translate)({
            singular: "Go Home",
            dictionary: {
              es: {
                singular: "Inicio"
              },
              "de-DE": {
                singular: "Zur Startseite"
              },
              "fr-FR": {
                singular: "Aller à la page d'accueil "
              },
              "ja-JP": {
                singular: "ホームへ"
              },
              "ko-KR": {
                singular: "홈으로 이동"
              },
              "pt-BR": {
                singular: "Ir para a página inicial"
              },
              "zh-CN": {
                singular: "返回主页"
              }
            }
          })
        })]
      }), (0, _v1.jsx)(_v3.AspectRatio, {
        ratio: 1,
        flex: "1",
        width: "100%",
        children: (0, _v1.jsx)(_v4.Box, {
          as: "img",
          alt: "Visit your library",
          src: "https://i.vimeocdn.com/custom_asset/3f5b122c872998c97fef34ce13d0b1bd"
        })
      })]
    });
  }]);
}