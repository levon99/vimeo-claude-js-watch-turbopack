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
  let _v9 = (0, _v2.default)(async () => ({
    default: (await _v0.A(0)).DefaultNavigation
  }), {
    loadableGenerated: {
      modules: [0]
    }
  });
  _v0.s(["DisabledReviewLinkErrorPage", 0, () => (0, _v1.jsxs)("div", {
    children: [(0, _v1.jsx)(_v9, {}), (0, _v1.jsxs)(_v5.Box, {
      id: "vimeo-error-page-view",
      textAlign: "center",
      marginTop: "500",
      children: [(0, _v1.jsx)(_v3.Header, {
        variant: "heading-xl",
        as: "h1",
        marginBottom: "100",
        children: (0, _v7.translate)({
          singular: "This review link is no longer available",
          dictionary: {
            es: {
              singular: "Este enlace de revisión ya no está disponible"
            },
            "de-DE": {
              singular: "Dieser Review-Link ist nicht mehr verfügbar"
            },
            "fr-FR": {
              singular: "Ce lien de révision n'est plus disponible."
            },
            "ja-JP": {
              singular: "このレビューリンクは利用できません"
            },
            "ko-KR": {
              singular: "이 리뷰 링크는 더 이상 사용할 수 없습니다."
            },
            "pt-BR": {
              singular: "Este link de revisão não está mais disponível"
            },
            "zh-CN": {
              singular: "此评论链接已失效"
            }
          }
        })
      }), (0, _v1.jsxs)(_v5.Box, {
        margin: "0 auto",
        maxWidth: (0, _v6.rem)(660),
        paddingX: "200",
        paddingBottom: "100",
        children: [(0, _v1.jsx)(_v4.Paragraph, {
          marginBottom: "400",
          children: (0, _v7.translate)({
            singular: "It may have expired or been turned off",
            dictionary: {
              es: {
                singular: "Es posible que haya expirado o que se haya desactivado"
              },
              "de-DE": {
                singular: "Es ist möglicherweise abgelaufen oder wurde deaktiviert."
              },
              "fr-FR": {
                singular: "Il se peut qu'il ait expiré ou qu'il ait été désactivé."
              },
              "ja-JP": {
                singular: "有効期限が切れているか、無効になっている可能性があります"
              },
              "ko-KR": {
                singular: "만료되었거나 비활성화되었을 수 있습니다."
              },
              "pt-BR": {
                singular: "Ele pode ter expirado ou estar desativado"
              },
              "zh-CN": {
                singular: "可能已过期或已关闭"
              }
            }
          })
        }), (0, _v1.jsx)(_v8.SearchField, {
          id: "error-page-search"
        })]
      })]
    })]
  })]);
}