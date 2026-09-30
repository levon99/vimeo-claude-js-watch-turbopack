{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = _v0 => "monthly" === _v0 ? "month" : "year";
  _v0.s(["getBundleAddOnLegalAfterBillingSettings", 0, (_v0, _v1, _v2) => String((0, _v1.translate)({
    singular: " at least 1 day before renewal. Your {PLAN_NAME} subscription ({PLAN_PRICE}) renews as usual. Pricing may change. If you cancel or downgrade, some content or features may no longer be available, and some content may be deleted. You also agree to the ",
    replacements: {
      PLAN_NAME: _v0,
      PLAN_PRICE: `${(0, _v3.formatBundlePrice)(_v1)}/${_v4(_v2)}`
    },
    dictionary: {
      es: {
        singular: " al menos 1 día antes de la renovación. Su suscripción {PLAN_NAME} ({PLAN_PRICE}) se renueva con normalidad. Los precios pueden cambiar. Si cancela o degrada, algunos contenidos o funciones pueden dejar de estar disponibles y parte del contenido puede eliminarse. También acepta la "
      },
      "de-DE": {
        singular: " mindestens 1 Tag vor der Verlängerung. Ihr {PLAN_NAME}-Abonnement ({PLAN_PRICE}) verlängert sich wie gewohnt. Preise können sich ändern. Wenn Sie kündigen oder ein Downgrade durchführen, sind einige Inhalte oder Funktionen möglicherweise nicht mehr verfügbar und einige Inhalte können gelöscht werden. Sie stimmen außerdem den "
      },
      "fr-FR": {
        singular: " au moins 1 jour avant le renouvellement. Votre abonnement {PLAN_NAME} ({PLAN_PRICE}) est renouvelé comme d'habitude. Les tarifs peuvent changer. Si vous annulez ou rétrogradez, certains contenus ou fonctionnalités peuvent ne plus être disponibles, et certains contenus peuvent être supprimés. Vous acceptez également "
      },
      "ja-JP": {
        singular: " 少なくとも更新の1日前に。あなたの{PLAN_NAME}サブスクリプション（{PLAN_PRICE}）は通常通り更新されます。価格は変更される場合があります。解約またはダウングレードした場合、一部のコンテンツや機能が利用できなくなったり、一部のコンテンツが削除されたりする場合があります。あなたはまた、 "
      },
      "ko-KR": {
        singular: " 갱신 최소 1일 전에. 귀하의 {PLAN_NAME} 구독({PLAN_PRICE})은(는) 정상적으로 갱신됩니다. 가격은 변경될 수 있습니다. 취소하거나 다운그레이드하면 일부 콘텐츠나 기능을 더 이상 이용할 수 없게 되거나 일부 콘텐츠가 삭제될 수 있습니다. 또한 귀하는 "
      },
      "pt-BR": {
        singular: " pelo menos 1 dia antes da renovação. Sua assinatura {PLAN_NAME} ({PLAN_PRICE}) renova normalmente. Os preços podem mudar. Se você cancelar ou reduzir o plano, alguns conteúdos ou recursos podem não estar mais disponíveis, e algum conteúdo pode ser excluído. Você também concorda com a "
      },
      "zh-CN": {
        singular: " 至少在续订前 1 天。您的 {PLAN_NAME} 订阅（{PLAN_PRICE}）将照常续订。价格可能会变动。如果您取消或降级，某些内容或功能可能不再可用，部分内容可能会被删除。您还同意 "
      }
    }
  })), "getBundleAddOnLegalBeforeBillingSettings", 0, (_v0, _v1, _v2) => String((0, _v1.translate)({
    singular: "By completing this purchase, you're activating the Product Bundle offer as an eligible {PLAN_NAME} subscriber for {BUNDLE_PRICE} (plus tax), charged today and every {PERIOD} thereafter unless you cancel in ",
    replacements: {
      PLAN_NAME: _v0,
      BUNDLE_PRICE: `${(0, _v3.formatBundlePrice)(_v1)}/${_v4(_v2)}`,
      PERIOD: _v4(_v2)
    },
    dictionary: {
      es: {
        singular: "Al completar esta compra, está activando la oferta de paquete de productos como suscriptor elegible de {PLAN_NAME} por {BUNDLE_PRICE} (más impuestos), cobrado hoy y cada {PERIOD} a partir de entonces, a menos que cancele en "
      },
      "de-DE": {
        singular: "Wenn Sie diesen Kauf abschließen, aktivieren Sie als berechtigter {PLAN_NAME}-Abonnent das Produkt-Bundle-Angebot für {BUNDLE_PRICE} (zzgl. Steuern), das heute und danach alle {PERIOD} abgebucht wird, sofern Sie nicht innerhalb von "
      },
      "fr-FR": {
        singular: "En complétant cet achat, vous activez l'offre Product Bundle en tant qu'abonné {PLAN_NAME} éligible pour {BUNDLE_PRICE} (plus taxes), facturé aujourd'hui puis tous les {PERIOD} par la suite, sauf si vous annulez "
      },
      "ja-JP": {
        singular: "この購入を完了すると、対象の{PLAN_NAME}加入者として{BUNDLE_PRICE}（税別）で製品バンドルオファーが有効になり、本日およびその後{PERIOD}ごとに課金されます。キャンセルするには "
      },
      "ko-KR": {
        singular: "이 구매를 완료하면 자격 있는 {PLAN_NAME} 구독자로서 {BUNDLE_PRICE} (세금 별도)의 제품 번들 혜택이 활성화되며, 취소하지 않는 한 오늘 및 이후 매 {PERIOD}마다 청구됩니다 "
      },
      "pt-BR": {
        singular: "Ao concluir esta compra, você estará ativando a oferta do Pacote de Produtos como assinante elegível do {PLAN_NAME} por {BUNDLE_PRICE} (mais impostos), cobrado hoje e a cada {PERIOD} a partir de então, a menos que você cancele em "
      },
      "zh-CN": {
        singular: "完成此购买后，作为符合条件的 {PLAN_NAME} 订阅者，您将以 {BUNDLE_PRICE}（另加税）激活产品捆绑优惠，费用将于今天以及随后每个 {PERIOD} 收取，除非您在 "
      }
    }
  })), "getBundleAddOnLegalBeforePrivacyPolicy", 0, () => String((0, _v1.translate)({
    singular: " and acknowledge the ",
    dictionary: {
      es: {
        singular: " y reconocer la "
      },
      "de-DE": {
        singular: " und bestätigen die "
      },
      "fr-FR": {
        singular: " et reconnaissez "
      },
      "ja-JP": {
        singular: " を確認し、同意する "
      },
      "ko-KR": {
        singular: " 그리고 이를 확인합니다 "
      },
      "pt-BR": {
        singular: " e reconhece a "
      },
      "zh-CN": {
        singular: " 并确认 "
      }
    }
  })), "getBundleAddOnLegalFree", 0, (_v0, _v1, _v2) => String((0, _v1.translate)({
    singular: "By completing this purchase, you're activating the Product Bundle offer as an eligible {PLAN_NAME} subscriber at no extra cost. Your {PLAN_NAME} subscription ({PLAN_PRICE}) renews as usual. Pricing may change. If you cancel or downgrade, some content or features may no longer be available, and some content may be deleted. You also agree to the ",
    replacements: {
      PLAN_NAME: _v0,
      PLAN_PRICE: `${(0, _v3.formatBundlePrice)(_v1)}/${_v4(_v2)}`
    },
    dictionary: {
      es: {
        singular: "Al completar esta compra, está activando la oferta de paquete de productos como suscriptor elegible de {PLAN_NAME} sin costo adicional. Su suscripción {PLAN_NAME} ({PLAN_PRICE}) se renueva con normalidad. Los precios pueden cambiar. Si cancela o degrada, algunos contenidos o funciones pueden dejar de estar disponibles y parte del contenido puede eliminarse. También acepta la "
      },
      "de-DE": {
        singular: "Wenn Sie diesen Kauf abschließen, aktivieren Sie als berechtigter {PLAN_NAME}-Abonnent das Produkt-Bundle-Angebot ohne zusätzliche Kosten. Ihr {PLAN_NAME}-Abonnement ({PLAN_PRICE}) verlängert sich wie gewohnt. Preise können sich ändern. Wenn Sie kündigen oder ein Downgrade durchführen, sind einige Inhalte oder Funktionen möglicherweise nicht mehr verfügbar und einige Inhalte können gelöscht werden. Sie stimmen außerdem den "
      },
      "fr-FR": {
        singular: "En complétant cet achat, vous activez l'offre Product Bundle en tant qu'abonné {PLAN_NAME} éligible sans frais supplémentaires. Votre abonnement {PLAN_NAME} ({PLAN_PRICE}) est renouvelé comme d'habitude. Les tarifs peuvent changer. Si vous annulez ou rétrogradez, certains contenus ou fonctionnalités peuvent ne plus être disponibles, et certains contenus peuvent être supprimés. Vous acceptez également "
      },
      "ja-JP": {
        singular: "この購入を完了すると、対象の{PLAN_NAME}加入者として追加料金なしで製品バンドルオファーが有効になります。あなたの{PLAN_NAME}サブスクリプション（{PLAN_PRICE}）は通常通り更新されます。価格は変更される場合があります。解約またはダウングレードした場合、一部のコンテンツや機能が利用できなくなったり、一部のコンテンツが削除されたりする場合があります。あなたはまた、 "
      },
      "ko-KR": {
        singular: "이 구매를 완료하면 자격 있는 {PLAN_NAME} 구독자로서 추가 비용 없이 제품 번들 혜택이 활성화됩니다. 귀하의 {PLAN_NAME} 구독({PLAN_PRICE})은(는) 정상적으로 갱신됩니다. 가격은 변경될 수 있습니다. 취소하거나 다운그레이드하면 일부 콘텐츠나 기능을 더 이상 이용할 수 없게 되거나 일부 콘텐츠가 삭제될 수 있습니다. 또한 귀하는 "
      },
      "pt-BR": {
        singular: "Ao concluir esta compra, você está ativando a oferta do Pacote de Produtos como assinante elegível do {PLAN_NAME} sem custo adicional. Sua assinatura {PLAN_NAME} ({PLAN_PRICE}) renova normalmente. Os preços podem mudar. Se você cancelar ou reduzir o plano, alguns conteúdos ou recursos podem não estar mais disponíveis, e algum conteúdo pode ser excluído. Você também concorda com a "
      },
      "zh-CN": {
        singular: "完成此购买后，作为符合条件的 {PLAN_NAME} 订阅者，您将免费激活产品捆绑优惠。您的 {PLAN_NAME} 订阅（{PLAN_PRICE}）将照常续订。价格可能会变动。如果您取消或降级，某些内容或功能可能不再可用，部分内容可能会被删除。您还同意 "
      }
    }
  })), "getBundleAddOnModalTitle", 0, _v0 => String((0, _v1.translate)({
    singular: "{COUNT} essential product. One bundle.",
    plural: "{COUNT} essential products. One bundle.",
    count: _v0,
    replacements: {
      COUNT: `${_v0}`
    },
    dictionary: {
      es: {
        singular: "{COUNT} producto esencial. Un paquete.",
        plural: "{COUNT} productos esenciales. Un paquete."
      },
      "de-DE": {
        singular: "{COUNT} unverzichtbares Produkt. Ein Bundle.",
        plural: "{COUNT} unverzichtbare Produkte. Ein Bundle."
      },
      "fr-FR": {
        singular: "{COUNT} produit essentiel. Un pack.",
        plural: "{COUNT} produits essentiels. Un pack."
      },
      "ja-JP": {
        singular: "{COUNT}個の必須製品。1つのバンドル。",
        plural: "{COUNT}個の必須製品。1つのバンドル。"
      },
      "ko-KR": {
        singular: "{COUNT}개의 필수 제품. 번들 1개.",
        plural: "{COUNT}개의 필수 제품. 번들 1개."
      },
      "pt-BR": {
        singular: "{COUNT} produto essencial. Um pacote.",
        plural: "{COUNT} produtos essenciais. Um pacote."
      },
      "zh-CN": {
        singular: "{COUNT} 个必备产品。一个捆绑包。",
        plural: "{COUNT} 个必备产品。一个捆绑包。"
      }
    }
  })), "getBundleAddOnPeriodLabel", 0, _v0 => String((0, _v1.translate)({
    singular: "per {PERIOD}",
    replacements: {
      PERIOD: _v4(_v0)
    },
    dictionary: {
      es: {
        singular: "por {PERIOD}"
      },
      "de-DE": {
        singular: "pro {PERIOD}"
      },
      "fr-FR": {
        singular: "par {PERIOD}"
      },
      "ja-JP": {
        singular: "{PERIOD}ごと"
      },
      "ko-KR": {
        singular: "매 {PERIOD}"
      },
      "pt-BR": {
        singular: "por {PERIOD}"
      },
      "zh-CN": {
        singular: "每 {PERIOD}"
      }
    }
  })), "getBundleAddOnPurchaseCompletedLabel", 0, () => String((0, _v1.translate)({
    singular: "Added",
    dictionary: {
      es: {
        singular: "Añadido"
      },
      "de-DE": {
        singular: "Hinzugefügt"
      },
      "fr-FR": {
        singular: "Ajouté"
      },
      "ja-JP": {
        singular: "追加した日"
      },
      "ko-KR": {
        singular: "추가됨"
      },
      "pt-BR": {
        singular: "Adicionado(a)"
      },
      "zh-CN": {
        singular: "已添加"
      }
    }
  })), "getBundleAddOnPurchaseCtaLabel", 0, _v0 => null === _v0 || 0 === _v0.amount ? String((0, _v1.translate)({
    singular: "Add add-on bundle",
    dictionary: {
      es: {
        singular: "Agregar paquete complementario"
      },
      "de-DE": {
        singular: "Add-On-Bundle hinzufügen"
      },
      "fr-FR": {
        singular: "Ajouter le pack d'extensions"
      },
      "ja-JP": {
        singular: "アドオンバンドルを追加"
      },
      "ko-KR": {
        singular: "애드온 번들 추가"
      },
      "pt-BR": {
        singular: "Adicionar pacote de complementos"
      },
      "zh-CN": {
        singular: "添加附加包"
      }
    }
  })) : String((0, _v1.translate)({
    singular: "Purchase add-on bundle",
    dictionary: {
      es: {
        singular: "Comprar paquete complementario"
      },
      "de-DE": {
        singular: "Add-On-Bundle kaufen"
      },
      "fr-FR": {
        singular: "Acheter le pack d'extensions"
      },
      "ja-JP": {
        singular: "アドオンバンドルを購入"
      },
      "ko-KR": {
        singular: "애드온 번들 구매"
      },
      "pt-BR": {
        singular: "Comprar pacote de complementos"
      },
      "zh-CN": {
        singular: "购买附加包"
      }
    }
  })), "getBundleAddOnSubtitle", 0, (_v0, _v1) => {
    let _v2 = _v0.map(_v0 => _v2.PRODUCT_NAMES[_v0.productId]).join(", ");
    return void 0 === _v1 ? String((0, _v1.translate)({
      singular: "Unlock access to {PRODUCTS}.",
      replacements: {
        PRODUCTS: _v2
      },
      dictionary: {
        es: {
          singular: "Desbloquear acceso a {PRODUCTS}."
        },
        "de-DE": {
          singular: "Zugriff auf {PRODUCTS} freischalten."
        },
        "fr-FR": {
          singular: "Débloquez l'accès à {PRODUCTS}."
        },
        "ja-JP": {
          singular: "{PRODUCTS}へのアクセスを有効にします。"
        },
        "ko-KR": {
          singular: "{PRODUCTS}에 대한 액세스 잠금 해제."
        },
        "pt-BR": {
          singular: "Desbloqueie o acesso a {PRODUCTS}."
        },
        "zh-CN": {
          singular: "解锁对 {PRODUCTS} 的访问。"
        }
      }
    })) : String((0, _v1.translate)({
      singular: "Unlock access to {PRODUCTS} and {COUNT} more premium product.",
      plural: "Unlock access to {PRODUCTS} and {COUNT} more premium products.",
      count: _v1,
      replacements: {
        PRODUCTS: _v2,
        COUNT: `${_v1}`
      },
      dictionary: {
        es: {
          singular: "Desbloquear acceso a {PRODUCTS} y {COUNT} producto premium más.",
          plural: "Desbloquear acceso a {PRODUCTS} y {COUNT} productos premium más."
        },
        "de-DE": {
          singular: "Zugriff auf {PRODUCTS} und {COUNT} weiteres Premium-Produkt freischalten.",
          plural: "Zugriff auf {PRODUCTS} und {COUNT} weitere Premium-Produkte freischalten."
        },
        "fr-FR": {
          singular: "Débloquez l'accès à {PRODUCTS} et à {COUNT} autre produit premium.",
          plural: "Débloquez l'accès à {PRODUCTS} et à {COUNT} autres produits premium."
        },
        "ja-JP": {
          singular: "{PRODUCTS}とさらに{COUNT}個のプレミアム製品へのアクセスを有効にします。",
          plural: "{PRODUCTS}とさらに{COUNT}個のプレミアム製品へのアクセスを有効にします。"
        },
        "ko-KR": {
          singular: "{PRODUCTS} 및 추가 {COUNT}개의 프리미엄 제품에 대한 액세스 잠금 해제.",
          plural: "{PRODUCTS} 및 추가 {COUNT}개의 프리미엄 제품에 대한 액세스 잠금 해제."
        },
        "pt-BR": {
          singular: "Desbloqueie o acesso a {PRODUCTS} e mais {COUNT} produto premium.",
          plural: "Desbloqueie o acesso a {PRODUCTS} e mais {COUNT} produtos premium."
        },
        "zh-CN": {
          singular: "解锁对 {PRODUCTS} 的访问，以及额外 {COUNT} 个优质产品。",
          plural: "解锁对 {PRODUCTS} 的访问，以及额外 {COUNT} 个优质产品。"
        }
      }
    }));
  }, "getBundleAddOnValueBadgeLabel", 0, (_v0, _v1) => String((0, _v1.translate)({
    singular: "{VALUE} / {PERIOD} in value",
    replacements: {
      VALUE: (({
        amount: _v0,
        currency: _v1
      }) => new Intl.NumberFormat("" !== (0, _v1.getCurrentLocale)() ? (0, _v1.getCurrentLocale)() : "en-US", {
        style: "currency",
        currency: _v1,
        maximumFractionDigits: Number.isInteger(_v0) ? 0 : void 0
      }).format(_v0))(_v0),
      PERIOD: _v4(_v1)
    },
    dictionary: {
      es: {
        singular: "{VALUE} / {PERIOD} en valor"
      },
      "de-DE": {
        singular: "im Wert von {VALUE} / {PERIOD}"
      },
      "fr-FR": {
        singular: "{VALUE} / {PERIOD} de valeur"
      },
      "ja-JP": {
        singular: "{VALUE} / {PERIOD} 相当の価値"
      },
      "ko-KR": {
        singular: "{VALUE} / {PERIOD} 상당"
      },
      "pt-BR": {
        singular: "{VALUE} / {PERIOD} em valor"
      },
      "zh-CN": {
        singular: "{VALUE} / {PERIOD} 的价值"
      }
    }
  }))]);
}