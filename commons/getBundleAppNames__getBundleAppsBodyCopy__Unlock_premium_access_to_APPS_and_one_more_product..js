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
  })), "getBundleAppsSubscriptionsBodyCopy", 0, (_v0, _v1) => String((0, _v1.translate)({
    singular: "Enjoy complimentary access to {APPS} and one more subscription.",
    plural: "Enjoy complimentary access to {APPS} and {COUNT} more subscriptions.",
    count: _v1,
    replacements: {
      APPS: _v3(_v0),
      COUNT: `${_v1}`
    },
    dictionary: {
      es: {
        singular: "Disfruta de acceso gratuito a {APPS} y una suscripción adicional.",
        plural: "Disfruta de acceso gratuito a {APPS} y {COUNT} suscripciones adicionales."
      },
      "de-DE": {
        singular: "Sie erhalten kostenlosen Zugriff auf {APPS} und ein weiteres Abonnement.",
        plural: "Sie erhalten kostenlosen Zugriff auf {APPS} und {COUNT} weitere Abonnements."
      },
      "fr-FR": {
        singular: "Profitez d'un accès gratuit à {APPS} et à un abonnement supplémentaire.",
        plural: "Profitez d'un accès gratuit à {APPS} et à {COUNT} abonnements supplémentaires."
      },
      "ja-JP": {
        singular: "無料で{APPS}とさらに1つのサブスクリプションにアクセスできます。",
        plural: "無料で{APPS}とさらに{COUNT}件のサブスクリプションにアクセスできます。"
      },
      "ko-KR": {
        singular: "무료로 {APPS} 및 추가 구독 1개를 이용할 수 있습니다.",
        plural: "무료로 {APPS} 및 추가 구독 {COUNT}개를 이용할 수 있습니다."
      },
      "pt-BR": {
        singular: "Desfrute de acesso gratuito a {APPS} e mais uma assinatura.",
        plural: "Desfrute de acesso gratuito a {APPS} e mais {COUNT} assinaturas."
      },
      "zh-CN": {
        singular: "可免费访问 {APPS} 及另一个订阅。",
        plural: "可免费访问 {APPS} 及另外 {COUNT} 个订阅。"
      }
    }
  }))]);
}