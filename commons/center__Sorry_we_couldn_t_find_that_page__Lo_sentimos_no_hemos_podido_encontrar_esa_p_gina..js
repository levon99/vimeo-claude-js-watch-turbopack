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
  let _v9 = ({
    error: _v0
  }) => (0, _v1.jsxs)(_v3.VStack, {
    textAlign: "center",
    children: [(0, _v1.jsx)(_v4.Header, {
      size: {
        base: "lg",
        md: "2xl"
      },
      children: (0, _v7.translate)({
        singular: "Sorry, we couldn't find that page",
        dictionary: {
          es: {
            singular: "Lo sentimos, no hemos podido encontrar esa página."
          },
          "de-DE": {
            singular: "Leider konnten wir die Seite nicht finden"
          },
          "fr-FR": {
            singular: "Nous n'avons pas pu trouver cette page."
          },
          "ja-JP": {
            singular: "申し訳ありませんが、ページが見つかりませんでした"
          },
          "ko-KR": {
            singular: "죄송합니다. 해당 페이지를 찾을 수 없습니다."
          },
          "pt-BR": {
            singular: "Infelizmente não conseguimos encontrar essa página"
          },
          "zh-CN": {
            singular: "抱歉，我们找不到该页面"
          }
        }
      })
    }), (0, _v1.jsx)(_v5.Paragraph, {
      size: {
        base: "md",
        md: "lg"
      },
      children: (0, _v7.translate)({
        singular: "Make sure you’ve typed the URL correctly, or try searching Vimeo.",
        dictionary: {
          es: {
            singular: "Asegúrese de haber escrito bien el URL o intente buscar el video en Vimeo."
          },
          "de-DE": {
            singular: "Stellen Sie sicher, dass Sie die URL korrekt eingeben oder versuchen Sie Vimeo zu googeln. "
          },
          "fr-FR": {
            singular: "Assurez-vous d'avoir saisi l'URL correctement, ou essayez une recherche sur Vimeo."
          },
          "ja-JP": {
            singular: "URLが正しく記入されているか確認するか、Vimeoを検索してください。"
          },
          "ko-KR": {
            singular: "URL을 정확히 입력했는지 확인하거나 Vimeo를 검색해보세요."
          },
          "pt-BR": {
            singular: "Certifique-se de que você digitou o URL corretamente ou tente procurar no Vimeo."
          },
          "zh-CN": {
            singular: "请确保您输入的 URL 正确无误，或尝试搜索 Vimeo。"
          }
        }
      })
    }), (0, _v1.jsx)(_v6.Box, {
      mt: 100,
      w: {
        base: "75%",
        md: "448px"
      },
      children: (0, _v1.jsx)(_v8.SearchField, {})
    })]
  });
  _v0.s(["ErrorView", 0, ({
    error: _v0,
    children: _v1
  }) => (0, _v1.jsxs)(_v1.Fragment, {
    children: [_v1, (0, _v1.jsx)(_v2.Center, {
      flex: "1",
      backgroundColor: "surface",
      p: 200,
      children: (0, _v1.jsx)(_v9, {
        error: _v0
      })
    })]
  })], 0);
  var _v10 = _v0.i(0);
  class _v11 {
    static isPublicFacingPrivacy(_v0) {
      return [_v10.PRIVACY_PUBLIC, _v10.PRIVACY_PASSWORD, _v10.PRIVACY_USER, _v10.PRIVACY_FOLLOW].includes(_v0);
    }
    static isInternalFacingPrivacy(_v0) {
      return !_v11.isPublicFacingPrivacy(_v0);
    }
    static isPrivacyMatch(_v0, _v1) {
      return _v0 === _v1;
    }
    static isPublicPrivacy(_v0) {
      return this.isPrivacyMatch(_v0, _v10.PRIVACY_PUBLIC);
    }
    static isUnlistedPrivacy(_v0) {
      return this.isPrivacyMatch(_v0, _v10.PRIVACY_UNLISTED);
    }
    static isPasswordPrivacy(_v0) {
      return this.isPrivacyMatch(_v0, _v10.PRIVACY_PASSWORD);
    }
    static isHideFromVimeoPrivacy(_v0) {
      return this.isPrivacyMatch(_v0, _v10.PRIVACY_DISABLE);
    }
  }
  _v0.s(["PrivacyUtility", 0, _v11], 0);
}