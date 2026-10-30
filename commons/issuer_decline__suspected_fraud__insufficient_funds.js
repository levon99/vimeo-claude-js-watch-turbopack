{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = ["issuer_decline", "suspected_fraud", "insufficient_funds", "expired_or_invalid_card", "stored_credential_invalid", "issuer_unavailable", "do_not_honor", "other_decline", "client_validation"],
    _v3 = _v0 => {
      switch (_v0) {
        case "issuer_decline":
        case "do_not_honor":
          return (0, _v1.translate)({
            singular: "Your card issuer declined the payment. Please contact your bank or try a different payment method.",
            dictionary: {
              es: {
                singular: "El emisor de su tarjeta rechazó el pago. Póngase en contacto con su banco o pruebe otro método de pago."
              },
              "de-DE": {
                singular: "Ihr Kartenaussteller hat die Zahlung abgelehnt. Bitte kontaktieren Sie Ihre Bank oder versuchen Sie eine andere Zahlungsmethode."
              },
              "fr-FR": {
                singular: "L'émetteur de votre carte a refusé le paiement. Veuillez contacter votre banque ou essayer un autre moyen de paiement."
              },
              "ja-JP": {
                singular: "カードの発行会社が支払いを拒否しました。銀行にお問い合わせいただくか、別の支払い方法をお試しください。"
              },
              "ko-KR": {
                singular: "카드 발급사가 결제를 거부했습니다. 은행에 문의하시거나 다른 결제 수단을 사용해 보세요."
              },
              "pt-BR": {
                singular: "O emissor do cartão recusou o pagamento. Entre em contato com seu banco ou tente um método de pagamento diferente."
              },
              "zh-CN": {
                singular: "发卡行拒绝了付款。请联系您的银行或尝试其他付款方式。"
              }
            }
          });
        case "suspected_fraud":
          return (0, _v1.translate)({
            singular: "Your payment couldn't be completed. Please contact your bank or try a different payment method.",
            dictionary: {
              es: {
                singular: "No se pudo completar su pago. Póngase en contacto con su banco o pruebe otro método de pago."
              },
              "de-DE": {
                singular: "Ihre Zahlung konnte nicht abgeschlossen werden. Bitte kontaktieren Sie Ihre Bank oder versuchen Sie eine andere Zahlungsmethode."
              },
              "fr-FR": {
                singular: "Votre paiement n'a pas pu être effectué. Veuillez contacter votre banque ou essayer un autre moyen de paiement."
              },
              "ja-JP": {
                singular: "支払いを完了できませんでした。銀行にお問い合わせいただくか、別の支払い方法をお試しください。"
              },
              "ko-KR": {
                singular: "결제를 완료할 수 없습니다. 은행에 문의하시거나 다른 결제 수단을 사용해 보세요."
              },
              "pt-BR": {
                singular: "Seu pagamento não pôde ser concluído. Entre em contato com seu banco ou tente um método de pagamento diferente."
              },
              "zh-CN": {
                singular: "无法完成付款。请联系您的银行或尝试其他付款方式。"
              }
            }
          });
        case "insufficient_funds":
          return (0, _v1.translate)({
            singular: "Your card was declined due to insufficient funds. Please try a different payment method.",
            dictionary: {
              es: {
                singular: "Su tarjeta fue rechazada por fondos insuficientes. Intente con otro método de pago."
              },
              "de-DE": {
                singular: "Ihre Karte wurde aufgrund unzureichender Deckung abgelehnt. Bitte versuchen Sie eine andere Zahlungsmethode."
              },
              "fr-FR": {
                singular: "Votre paiement a été refusé pour insuffisance de fonds. Veuillez essayer un autre moyen de paiement."
              },
              "ja-JP": {
                singular: "残高不足のためカードが拒否されました。別の支払い方法をお試しください。"
              },
              "ko-KR": {
                singular: "잔액 부족으로 카드 결제가 거부되었습니다. 다른 결제 수단을 사용해 보세요."
              },
              "pt-BR": {
                singular: "O cartão foi recusado por fundos insuficientes. Tente um método de pagamento diferente."
              },
              "zh-CN": {
                singular: "因账户余额不足，卡片被拒绝。请尝试其他付款方式。"
              }
            }
          });
        case "expired_or_invalid_card":
          return (0, _v1.translate)({
            singular: "Your card information appears to be expired or invalid. Please check your details or try a different card.",
            dictionary: {
              es: {
                singular: "La información de su tarjeta parece estar caducada o ser inválida. Verifique sus datos o pruebe con otra tarjeta."
              },
              "de-DE": {
                singular: "Ihre Kartendaten scheinen abgelaufen oder ungültig zu sein. Bitte prüfen Sie Ihre Angaben oder versuchen Sie eine andere Karte."
              },
              "fr-FR": {
                singular: "Les informations de votre carte semblent expirées ou invalides. Veuillez vérifier vos informations ou essayer une autre carte."
              },
              "ja-JP": {
                singular: "カード情報が期限切れ、または無効のようです。情報を確認するか、別のカードをご利用ください。"
              },
              "ko-KR": {
                singular: "카드 정보가 만료되었거나 유효하지 않은 것으로 보입니다. 정보를 확인하시거나 다른 카드를 사용해 보세요."
              },
              "pt-BR": {
                singular: "As informações do seu cartão parecem expiradas ou inválidas. Verifique os dados ou tente outro cartão."
              },
              "zh-CN": {
                singular: "您的卡信息似乎已过期或无效。请核对信息或尝试使用其他卡。"
              }
            }
          });
        case "stored_credential_invalid":
          return (0, _v1.translate)({
            singular: "We couldn't use your saved payment method. Please re-enter your card details or try a different payment method.",
            dictionary: {
              es: {
                singular: "No pudimos usar su método de pago guardado. Vuelva a introducir los datos de su tarjeta o pruebe otro método de pago."
              },
              "de-DE": {
                singular: "Wir konnten Ihre gespeicherte Zahlungsmethode nicht verwenden. Bitte geben Sie Ihre Kartendaten erneut ein oder versuchen Sie eine andere Zahlungsmethode."
              },
              "fr-FR": {
                singular: "Nous n'avons pas pu utiliser votre moyen de paiement enregistré. Veuillez ressaisir les informations de votre carte ou essayer un autre moyen de paiement."
              },
              "ja-JP": {
                singular: "保存されている支払い方法を使用できませんでした。カード情報を再入力するか、別の支払い方法をお試しください。"
              },
              "ko-KR": {
                singular: "저장된 결제 수단을 사용할 수 없습니다. 카드 정보를 다시 입력하시거나 다른 결제 수단을 사용해 보세요."
              },
              "pt-BR": {
                singular: "Não foi possível usar o método de pagamento salvo. Por favor, reinsira os dados do cartão ou tente um método de pagamento diferente."
              },
              "zh-CN": {
                singular: "我们无法使用您保存的付款方式。请重新输入卡片信息或尝试其他付款方式。"
              }
            }
          });
        case "issuer_unavailable":
          return (0, _v1.translate)({
            singular: "Your card issuer couldn't be reached. Please try again in a few minutes or use a different payment method.",
            dictionary: {
              es: {
                singular: "No se pudo contactar con el emisor de su tarjeta. Inténtelo de nuevo en unos minutos o use otro método de pago."
              },
              "de-DE": {
                singular: "Ihr Kartenaussteller konnte nicht erreicht werden. Bitte versuchen Sie es in wenigen Minuten erneut oder verwenden Sie eine andere Zahlungsmethode."
              },
              "fr-FR": {
                singular: "Impossible de joindre l'émetteur de votre carte. Veuillez réessayer dans quelques minutes ou utiliser un autre moyen de paiement."
              },
              "ja-JP": {
                singular: "カードの発行会社に接続できませんでした。数分後に再度お試しいただくか、別の支払い方法をご利用ください。"
              },
              "ko-KR": {
                singular: "카드 발급사에 연결할 수 없습니다. 몇 분 후에 다시 시도하시거나 다른 결제 수단을 사용해 보세요."
              },
              "pt-BR": {
                singular: "Não foi possível contatar o emissor do cartão. Tente novamente em alguns minutos ou use um método de pagamento diferente."
              },
              "zh-CN": {
                singular: "无法联系到发卡行。请稍后几分钟再试或使用其他付款方式。"
              }
            }
          });
        case "client_validation":
          return (0, _v1.translate)({
            singular: "Some of your payment details are missing or invalid. Please check the form and try again.",
            dictionary: {
              es: {
                singular: "Algunos de los datos de pago faltan o son inválidos. Revise el formulario y vuelva a intentarlo."
              },
              "de-DE": {
                singular: "Einige Ihrer Zahlungsangaben fehlen oder sind ungültig. Bitte prüfen Sie das Formular und versuchen Sie es erneut."
              },
              "fr-FR": {
                singular: "Certaines de vos informations de paiement sont manquantes ou invalides. Veuillez vérifier le formulaire et réessayer."
              },
              "ja-JP": {
                singular: "支払い情報の一部が不足しているか無効です。フォームを確認して、再度お試しください。"
              },
              "ko-KR": {
                singular: "결제 정보의 일부가 누락되었거나 유효하지 않습니다. 양식을 확인한 후 다시 시도해 주세요."
              },
              "pt-BR": {
                singular: "Alguns dados do seu pagamento estão ausentes ou inválidos. Verifique o formulário e tente novamente."
              },
              "zh-CN": {
                singular: "您的部分付款信息缺失或无效。请检查表单并重试。"
              }
            }
          });
        default:
          return (0, _v1.translate)({
            singular: "Your payment was declined. Please try a different payment method or contact your bank.",
            dictionary: {
              es: {
                singular: "Su pago fue rechazado. Pruebe otro método de pago o póngase en contacto con su banco."
              },
              "de-DE": {
                singular: "Ihre Zahlung wurde abgelehnt. Bitte versuchen Sie eine andere Zahlungsmethode oder kontaktieren Sie Ihre Bank."
              },
              "fr-FR": {
                singular: "Votre paiement a été refusé. Veuillez essayer un autre moyen de paiement ou contacter votre banque."
              },
              "ja-JP": {
                singular: "支払いが拒否されました。別の支払い方法をお試しいただくか、銀行にお問い合わせください。"
              },
              "ko-KR": {
                singular: "결제가 거부되었습니다. 다른 결제 수단을 사용해 보시거나 은행에 문의해 주세요."
              },
              "pt-BR": {
                singular: "Seu pagamento foi recusado. Tente um método de pagamento diferente ou entre em contato com seu banco."
              },
              "zh-CN": {
                singular: "付款被拒绝。请尝试其他付款方式或联系您的银行。"
              }
            }
          });
      }
    },
    _v4 = {
      insufficient_funds: "insufficient_funds",
      card_velocity_exceeded: "insufficient_funds",
      withdrawal_count_limit_exceeded: "insufficient_funds",
      card_declined: "issuer_decline",
      approve_with_id: "issuer_decline",
      call_issuer: "issuer_decline",
      transaction_not_allowed: "issuer_decline",
      do_not_honor: "do_not_honor",
      expired_card: "expired_or_invalid_card",
      incorrect_cvc: "expired_or_invalid_card",
      invalid_cvc: "expired_or_invalid_card",
      incorrect_number: "expired_or_invalid_card",
      invalid_number: "expired_or_invalid_card",
      invalid_expiry_month: "expired_or_invalid_card",
      invalid_expiry_year: "expired_or_invalid_card",
      invalid_account: "expired_or_invalid_card",
      fraudulent: "suspected_fraud",
      lost_card: "suspected_fraud",
      stolen_card: "suspected_fraud",
      pickup_card: "suspected_fraud",
      merchant_blacklist: "suspected_fraud",
      restricted_card: "suspected_fraud",
      issuer_not_available: "issuer_unavailable",
      processing_error: "issuer_unavailable",
      reenter_transaction: "issuer_unavailable",
      try_again_later: "issuer_unavailable",
      new_account_information_available: "stored_credential_invalid"
    },
    _v5 = (_v0, _v1, {
      failingField: _v2,
      rawCode: _v3
    } = {}) => ({
      source: _v0,
      decline_category: _v1,
      failing_field: _v2 ?? null,
      error_code: _v3 ?? null,
      error_message: _v3(_v1)
    }),
    _v6 = !1;
  _v0.s(["acquireCheckoutFailedLatch", 0, () => !_v6 && (_v6 = !0, !0), "canonicalMessageForCategory", 0, _v3, "classifyClientDecline", 0, _v0 => {
    switch (_v0.source) {
      case "zuora_hpm":
        return _v0.rawGatewayInfo ? {
          source: "chase",
          decline_category: null,
          failing_field: null,
          error_code: _v0.rawGatewayInfo.responseCode || null,
          error_message: _v0.rawGatewayInfo.responseMessage || null
        } : _v5("zuora_hpm", "client_validation", {
          failingField: _v0.formField || null,
          rawCode: _v0.formErrorCode || null
        });
      case "stripe":
        let _v0 = (_v0.code ?? "").trim().toLowerCase();
        if (_v0.startsWith("incomplete")) return _v5("stripe", "client_validation", {
          rawCode: _v0 || null
        });
        let _v1 = _v4[_v0];
        return _v1 ? _v5("stripe", _v1, {
          rawCode: _v0
        }) : _v0 ? _v5("stripe", "other_decline", {
          rawCode: _v0
        }) : {
          source: "stripe",
          decline_category: null,
          failing_field: null,
          error_code: null,
          error_message: _v0.message || null
        };
      case "paypal":
        return {
          source: "paypal",
          decline_category: null,
          failing_field: null,
          error_code: null,
          error_message: _v0.message || (0, _v1.translate)({
            singular: "Unable to connect to PayPal.",
            dictionary: {
              es: {
                singular: "No se pudo conectar con PayPal."
              },
              "de-DE": {
                singular: "Die Verbindung zu PayPal konnte nicht hergestellt werden."
              },
              "fr-FR": {
                singular: "Impossible de se connecter à PayPal."
              },
              "ja-JP": {
                singular: "PayPalに接続できませんでした。"
              },
              "ko-KR": {
                singular: "PayPal에 연결할 수 없습니다."
              },
              "pt-BR": {
                singular: "Não foi possível conectar ao PayPal."
              },
              "zh-CN": {
                singular: "无法连接到 PayPal。"
              }
            }
          })
        };
      case "juno_vgs":
        return (_v0 => {
          let _v1 = (_v0.category ?? "").trim().toLowerCase(),
            _v2 = (_v0.declineKind ?? "").trim().toLowerCase(),
            _v3 = (_v0.code ?? "").trim().toLowerCase(),
            _v4 = function (_v0) {
              switch ((_v0 ?? "").trim().toLowerCase()) {
                case "insufficient_funds":
                  return "insufficient_funds";
                case "expired_card":
                case "invalid_expiry_month":
                case "invalid_expiry_year":
                case "incorrect_number":
                case "incorrect_cvc":
                case "incorrect_zip":
                case "incorrect_address":
                case "card_not_supported":
                  return "expired_or_invalid_card";
                case "fraudulent":
                case "lost_card":
                case "stolen_card":
                case "pickup_card":
                case "merchant_blacklist":
                case "restricted_card":
                case "card_velocity_exceeded":
                  return "suspected_fraud";
                case "processing_error":
                  return "issuer_unavailable";
                case "do_not_honor":
                  return "do_not_honor";
                default:
                  return null;
              }
            }(_v3),
            _v5 = "" !== _v3 ? _v3 : "" !== _v1 ? _v1 : null;
          if ("validation" === _v1) {
            let _v0 = _v0.invalidFields ?? [];
            return _v5("juno_vgs", "client_validation", {
              failingField: _v0.length > 0 ? _v0.join(",") : null,
              rawCode: _v5
            });
          }
          return "decline" === _v1 || "user_action_required" === _v1 || "terminal" === _v1 ? _v4 ? _v5("juno_vgs", _v4, {
            rawCode: _v3 || null
          }) : "fraud" === _v3 || "suspected_fraud" === _v3 ? _v5("juno_vgs", "suspected_fraud", {
            rawCode: _v3
          }) : "invalid_card" === _v3 ? _v5("juno_vgs", "expired_or_invalid_card", {
            rawCode: _v3
          }) : "retryable" === _v2 ? _v5("juno_vgs", "issuer_unavailable", {
            rawCode: _v5
          }) : _v5("juno_vgs", "issuer_decline", {
            rawCode: _v5
          }) : "retryable" === _v1 ? _v5("juno_vgs", "issuer_unavailable", {
            rawCode: _v5
          }) : "card_capture_unavailable" === _v3 || "bot_check_protection_unavailable" === _v3 ? {
            source: "juno_vgs",
            decline_category: null,
            failing_field: null,
            error_code: _v3,
            error_message: _v0.message ?? null
          } : "" !== _v1 ? _v5("juno_vgs", "other_decline", {
            rawCode: _v5
          }) : {
            source: "juno_vgs",
            decline_category: null,
            failing_field: null,
            error_code: "" !== _v3 ? _v3 : null,
            error_message: _v0.message ?? null
          };
        })(_v0);
    }
  }, "isDeclineCategory", 0, _v0 => "string" == typeof _v0 && _v2.includes(_v0), "resetCheckoutFailedLatch", 0, () => {
    _v6 = !1;
  }]);
}