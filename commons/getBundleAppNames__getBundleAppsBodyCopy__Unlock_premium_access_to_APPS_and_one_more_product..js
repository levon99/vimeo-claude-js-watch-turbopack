{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = _v0 => _v0.map(_v0 => _v2.PRODUCT_NAMES[_v0.productId]).join(", ");
  _v0.s(["getBundleAppNames", 0, _v3, "getBundleAppsBodyCopy", 0, (_v0, _v1) => String((0, _v1.translate)({
    singular: "Unlock premium access to {APPS} and one more product.",
    plural: "Unlock premium access to {APPS} and {COUNT} more products.",
    count: _v1,
    replacements: {
      APPS: _v3(_v0),
      COUNT: `${_v1}`
    },
    dictionary: {
      es: {
        singular: "Desbloquear acceso premium a {APPS} y un producto más.",
        plural: "Desbloquear acceso premium a {APPS} y {COUNT} productos más."
      },
      "de-DE": {
        singular: "Schalte Premiumzugang zu {APPS} und einem weiteren Produkt frei.",
        plural: "Schalte Premiumzugang zu {APPS} und {COUNT} weiteren Produkten frei."
      },
      "fr-FR": {
        singular: "Débloquez l'accès premium à {APPS} et à un produit supplémentaire.",
        plural: "Débloquez l'accès premium à {APPS} et à {COUNT} produits supplémentaires."
      },
      "ja-JP": {
        singular: "{APPS}ともう1つの製品でプレミアムアクセスを利用できます。",
        plural: "{APPS}とさらに{COUNT}製品でプレミアムアクセスを利用できます。"
      },
      "ko-KR": {
        singular: "{APPS} 및 1개의 추가 제품에 대한 프리미엄 액세스를 잠금 해제합니다.",
        plural: "{APPS} 및 {COUNT}개의 추가 제품에 대한 프리미엄 액세스를 잠금 해제합니다."
      },
      "pt-BR": {
        singular: "Desbloqueie acesso premium a {APPS} e mais um produto.",
        plural: "Desbloqueie acesso premium a {APPS} e mais {COUNT} produtos."
      },
      "zh-CN": {
        singular: "解锁 {APPS} 的高级访问权限以及另一个产品。",
        plural: "解锁 {APPS} 的高级访问权限以及另外 {COUNT} 个产品。"
      }
    }
  }))]);
}