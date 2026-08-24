{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["OtherPlansButton", 0, function ({
    paywallTracking: _v0,
    onCtaClick: _v1,
    ..._v2
  }) {
    return (0, _v1.jsx)(_v2.Button, {
      size: "lg",
      variant: "tertiary",
      width: "100%",
      onClick: () => {
        _v1?.("other_plans"), window.location.assign((0, _v4.buildUpgradePlanUrl)(_v0));
      },
      ..._v2,
      children: (0, _v3.translate)({
        singular: "Other Plans",
        dictionary: {
          es: {
            singular: "Otros planes"
          },
          "de-DE": {
            singular: "Andere Pläne"
          },
          "fr-FR": {
            singular: "Autres forfaits"
          },
          "ja-JP": {
            singular: "その他のプラン"
          },
          "ko-KR": {
            singular: "다른 요금제"
          },
          "pt-BR": {
            singular: "Outros planos"
          },
          "zh-CN": {
            singular: "其他套餐"
          }
        }
      })
    });
  }]);
}