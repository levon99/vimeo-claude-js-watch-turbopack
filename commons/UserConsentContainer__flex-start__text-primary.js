{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  _v0.s(["UserConsentContainer", 0, ({
    onChecked: _v0
  }) => {
    let [_v1, _v2] = (0, _v2.useState)(!1);
    return (0, _v1.jsx)(_v3.Box, {
      paddingTop: "2",
      paddingBottom: "6",
      children: (0, _v1.jsx)(_v4.Checkbox, {
        alignItems: "flex-start",
        isChecked: !!_v1,
        onChange: () => {
          _v2(!_v1), _v0(!_v1);
        },
        color: "text-primary",
        children: (0, _v5.translate)({
          singular: "By checking this box, you authorize us to securely store your card details (excluding CVV) with Stripe for future payments. Manage/remove cards anytime in Billing Settings. Without card storage consent, auto-renewal terms won't apply.",
          dictionary: {
            es: {
              singular: "Al marcar esta casilla, nos autoriza a almacenar de forma segura los datos de su tarjeta (excepto el CVV) en Stripe para futuros pagos. Administre o elimine las tarjetas en cualquier momento en la configuración de facturación. Sin el consentimiento para el almacenamiento de la tarjeta, no se aplicarán los términos de renovación automática."
            },
            "de-DE": {
              singular: "Wenn Sie dieses Kästchen ankreuzen, ermächtigen Sie uns, Ihre Kartendaten (ohne CVV) für zukünftige Zahlungen sicher bei Stripe zu speichern. Verwalten/entfernen Sie Karten jederzeit in den Zahlungseinstellungen. Ohne Zustimmung zur Kartenspeicherung gelten die Bedingungen für die automatische Verlängerung nicht."
            },
            "fr-FR": {
              singular: "En cochant cette case, vous nous autorisez à enregistrer en toute sécurité les détails de votre carte (à l'exclusion du CVV) avec Stripe pour les paiements futurs. Gérez/supprimez vos cartes à tout moment dans les paramètres de facturation. Si vous ne consentez pas à l'enregistrement de la carte, les conditions de renouvellement automatique ne s'appliquent pas."
            },
            "ja-JP": {
              singular: "このボックスをチェックすることにより、お客様のカード情報（CVVを除く）を今後のお支払いに備えてStripeに安全に保管することを許可したものとみなされます。請求設定でいつでもカードを管理/削除できます。カード情報の保存に同意されないと、自動更新の条件は適用されません。"
            },
            "ko-KR": {
              singular: "이 확인란을 선택하면 향후 결제를 위해 귀하의 카드 정보(CVV 제외)를 Stripe에 안전하게 저장하는 것을 승인하게 됩니다. 청구 설정에서 언제든지 카드를 관리하거나 제거할 수 있습니다. 카드 저장 동의가 없으면 자동 갱신 약관이 적용되지 않습니다."
            },
            "pt-BR": {
              singular: "Ao marcar essa caixa, você nos autoriza a armazenar com segurança os dados do seu cartão (excluindo o CVV) na Stripe para a realização de futuros pagamentos. Gerencie/remova cartões quando quiser nas Configurações de cobrança. Sem seu consentimento para o armazenamento do cartão, os termos de renovação automática não se aplicarão."
            },
            "zh-CN": {
              singular: "选中此复选框，即表示您授权我们将您的卡信息（不包括 CVV）安全地保存在 Stripe，以备将来支付之用。在计费设置中随时管理/移除卡。如果保存卡信息未获得持卡人同意，则自动续订条款将不适用。"
            }
          }
        })
      })
    });
  }]);
}