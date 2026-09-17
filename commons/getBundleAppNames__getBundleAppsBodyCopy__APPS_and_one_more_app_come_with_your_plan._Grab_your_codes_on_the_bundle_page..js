{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = _v0 => _v0.map(_v0 => _v2.PRODUCT_NAMES[_v0.productId]).join(", ");
  _v0.s(["getBundleAppNames", 0, _v3, "getBundleAppsBodyCopy", 0, (_v0, _v1) => String((0, _v1.translate)({
    singular: "{APPS} and one more app come with your plan. Grab your codes on the bundle page.",
    plural: "{APPS} and {COUNT} more apps come with your plan. Grab your codes on the bundle page.",
    count: _v1,
    replacements: {
      APPS: _v3(_v0),
      COUNT: `${_v1}`
    },
    dictionary: {
      es: {
        singular: "{APPS} y una aplicación más vienen con tu plan. Obtén tus códigos en la página del paquete.",
        plural: "{APPS} y {COUNT} aplicaciones más vienen con tu plan. Obtén tus códigos en la página del paquete."
      },
      "de-DE": {
        singular: "{APPS} und eine weitere App sind in Ihrem Abonnement enthalten. Rufen Sie Ihre Codes auf der Bundle-Seite ab.",
        plural: "{APPS} und {COUNT} weitere Apps sind in Ihrem Abonnement enthalten. Rufen Sie Ihre Codes auf der Bundle-Seite ab."
      },
      "fr-FR": {
        singular: "Votre forfait inclut {APPS} et une application supplémentaire. Récupérez vos codes sur la page du pack.",
        plural: "Votre forfait inclut {APPS} et {COUNT} applications supplémentaires. Récupérez vos codes sur la page du pack."
      },
      "ja-JP": {
        singular: "{APPS}ともう1つのアプリがプランに含まれます。バンドルページでコードを取得してください。",
        plural: "{APPS}と追加で{COUNT}個のアプリがプランに含まれます。バンドルページでコードを取得してください。"
      },
      "ko-KR": {
        singular: "{APPS} 및 추가 앱 1개가 귀하의 요금제에 포함되어 있습니다. 번들 페이지에서 코드를 확인하세요.",
        plural: "{APPS} 및 추가 앱 {COUNT}개가 귀하의 요금제에 포함되어 있습니다. 번들 페이지에서 코드를 확인하세요."
      },
      "pt-BR": {
        singular: "{APPS} e mais um aplicativo estão incluídos no seu plano. Resgate seus códigos na página do pacote.",
        plural: "{APPS} e mais {COUNT} aplicativos estão incluídos no seu plano. Resgate seus códigos na página do pacote."
      },
      "zh-CN": {
        singular: "{APPS} 与另一个应用包含在您的计划中。请在捆绑页面获取您的兑换码。",
        plural: "{APPS} 和 {COUNT} 个其他应用包含在您的计划中。请在捆绑页面获取您的兑换码。"
      }
    }
  }))]);
}