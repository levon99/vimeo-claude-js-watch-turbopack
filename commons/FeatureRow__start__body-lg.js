{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["FeatureRow", 0, function ({
    title: _v0,
    description: _v1,
    Icon: _v2
  }) {
    return (0, _v1.jsxs)(_v2.HStack, {
      alignItems: "start",
      gap: "md",
      children: [_v2, (0, _v1.jsxs)(_v4.VStack, {
        alignItems: "start",
        gap: "0",
        children: [(0, _v1.jsx)(_v3.Text, {
          variant: "body-lg",
          children: _v0
        }), (0, _v1.jsx)(_v3.Text, {
          variant: "body-md",
          color: "text-secondary",
          children: _v1
        })]
      })]
    });
  }], 0);
  var _v5 = _v0.i(0);
  _v0.s(["PaywallCTAsWrapper", 0, function ({
    children: _v0
  }) {
    return (0, _v1.jsx)(_v5.Box, {
      display: "flex",
      flexDirection: "column",
      position: "sticky",
      bottom: "0",
      width: "100%",
      maxWidth: "400px",
      gap: "sm",
      alignItems: "stretch",
      bg: "surface",
      pt: "24px",
      children: _v0
    });
  }], 0);
  var _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0);
  _v0.s(["PurchaseButton", 0, function ({
    isTrial: _v0,
    planName: _v1,
    paywallTracking: _v2,
    subscriptionTier: _v3,
    postCheckoutUrl: _v4
  }) {
    let _v5 = _v1 ?? (_v3 ? (0, _v6.default)(`${_v3}`) : ""),
      _v6 = _v5 ? _v0 ? (0, _v8.translate)({
        singular: "Try {PLAN_NAME} for free",
        replacements: {
          PLAN_NAME: _v5
        },
        dictionary: {
          es: {
            singular: "Prueba {PLAN_NAME} gratis"
          },
          "de-DE": {
            singular: "Testen Sie {PLAN_NAME} kostenlos"
          },
          "fr-FR": {
            singular: "Essayez {PLAN_NAME} gratuitement"
          },
          "ja-JP": {
            singular: "{PLAN_NAME} を無料でお試しください"
          },
          "ko-KR": {
            singular: "{PLAN_NAME}을(를) 무료로 사용해 보세요"
          },
          "pt-BR": {
            singular: "Experimente o {PLAN_NAME} gratuitamente"
          },
          "zh-CN": {
            singular: "免费试用 {PLAN_NAME}"
          }
        }
      }) : (0, _v8.translate)({
        singular: "Join Vimeo {PLAN_NAME}",
        replacements: {
          PLAN_NAME: _v5
        },
        dictionary: {
          es: {
            singular: "Únete a Vimeo {PLAN_NAME}"
          },
          "de-DE": {
            singular: "Treten Sie Vimeo {PLAN_NAME} bei"
          },
          "fr-FR": {
            singular: "Rejoignez Vimeo {PLAN_NAME}"
          },
          "ja-JP": {
            singular: "Vimeo {PLAN_NAME} に加入する"
          },
          "ko-KR": {
            singular: "Vimeo {PLAN_NAME}에 가입하기"
          },
          "pt-BR": {
            singular: "Assine o Vimeo {PLAN_NAME}"
          },
          "zh-CN": {
            singular: "加入 Vimeo {PLAN_NAME}"
          }
        }
      }) : _v0 ? (0, _v8.translate)({
        singular: "Try for free",
        dictionary: {
          es: {
            singular: "Prueba gratuita"
          },
          "de-DE": {
            singular: "Kostenlos testen"
          },
          "fr-FR": {
            singular: "Essayer gratuitement"
          },
          "ja-JP": {
            singular: "無料で試す"
          },
          "ko-KR": {
            singular: "무료로 체험해 보기"
          },
          "pt-BR": {
            singular: "Experimente grátis"
          },
          "zh-CN": {
            singular: "免费试用"
          }
        }
      }) : (0, _v8.translate)({
        singular: "Join Vimeo",
        dictionary: {
          es: {
            singular: "Unirse a Vimeo"
          },
          "de-DE": {
            singular: "Registriere dich bei Vimeo"
          },
          "fr-FR": {
            singular: "S'inscrire à Vimeo"
          },
          "ja-JP": {
            singular: "Vimeoに登録"
          },
          "ko-KR": {
            singular: "Vimeo 가입"
          },
          "pt-BR": {
            singular: "Cadastre-se no Vimeo"
          },
          "zh-CN": {
            singular: "加入 Vimeo"
          }
        }
      });
    return (0, _v1.jsx)(_v7.Button, {
      size: "lg",
      variant: "primary",
      width: "100%",
      onClick: () => {
        if (!_v3) return;
        let _v0 = (0, _v9.buildCheckoutUrl)({
          ..._v2,
          tier: _v3,
          isTrial: _v0,
          postCheckoutUrl: _v4
        });
        window.location.assign(_v0);
      },
      children: _v6
    });
  }], 0);
}