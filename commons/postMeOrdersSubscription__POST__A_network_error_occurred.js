{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  async function _v5({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      subscriptionId: _v3
    },
    ..._v4
  }) {
    return (0, _v3.measureLatency)("postMeOrdersSubscription", "POST", async () => {
      let _v0 = await fetch(`${_v0}/me/orders/subscriptions/${_v3}?fields=${_v1.map(_v4.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "POST",
        body: JSON.stringify((0, _v4.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v4.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v4.deepCamelCase)(_v1);
    });
  }
  var _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  function _v9() {
    let {
        mutate: _v0
      } = (0, _v7.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v8.useGctlConfig)(),
      [_v5, _v6] = (0, _v2.useInternalState)();
    return [(0, _v6.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/orders/subscriptions/${_v0.where.subscriptionId}${(0, _v2.serializeQuery)(_v0)}`, _v5({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }), !1);
        _v6({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v6({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v1, _v3, _v2, _v4, _v6]), _v5];
  }
  "true" === _v1.default.env.STORYBOOK && (0, _v2.assignMswData)(_v9, {
    endpoint: "/me/orders/subscriptions/:subscriptionId",
    method: "POST"
  }), _v0.s(["usePostMeOrdersSubscription", 0, _v9], 0);
  var _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0);
  let _v13 = {
      PAYPAL_CONNECTION: "paypal_connection",
      SIFT_ERROR: "sift_error",
      ZUORA_HPM_841: "zuora_hpm_841"
    },
    _v14 = "issuer_decline",
    _v15 = "insufficient_funds",
    _v16 = "expired_card",
    _v17 = "card_unusable",
    _v18 = "invalid_card",
    _v19 = "paypal_decline",
    _v20 = {
      "01": _v14,
      "05": _v14,
      "06": _v14,
      12: _v14,
      52: _v14,
      56: _v14,
      C5: _v14,
      89: _v15,
      D7: _v15,
      33: _v16,
      "04": _v17,
      "07": _v17,
      "09": _v17,
      41: _v17,
      F3: _v17,
      PB: _v17,
      14: _v18,
      72: _v18,
      841: _v18,
      0: _v19
    };
  _v0.s(["ERROR_TYPE", 0, _v13, "getDeclineMessage", 0, _v0 => {
    switch (_v0 ? _v20[_v0] : void 0) {
      case _v14:
        return (0, _v12.translate)({
          singular: "Your bank declined this payment. Please contact your card issuer or try a different card.",
          dictionary: {
            es: {
              singular: "Su banco rechazó este pago. Por favor, póngase en contacto con el emisor de su tarjeta o pruebe con otra tarjeta."
            },
            "de-DE": {
              singular: "Ihre Bank hat diese Zahlung abgelehnt. Bitte kontaktieren Sie Ihren Kartenaussteller oder versuchen Sie eine andere Karte."
            },
            "fr-FR": {
              singular: "Votre banque a refusé ce paiement. Veuillez contacter l'émetteur de votre carte ou essayer une autre carte."
            },
            "ja-JP": {
              singular: "銀行がこの支払いを拒否しました。カード発行会社にお問い合わせいただくか、別のカードをお試しください。"
            },
            "ko-KR": {
              singular: "은행이 이 결제를 거절했습니다. 카드 발급사에 문의하시거나 다른 카드를 사용해 보세요."
            },
            "pt-BR": {
              singular: "Seu banco recusou este pagamento. Entre em contato com a emissora do seu cartão ou tente outro cartão."
            },
            "zh-CN": {
              singular: "您的银行拒绝了此次支付。请联系发卡行或尝试使用其他卡。"
            }
          }
        });
      case _v15:
        return (0, _v12.translate)({
          singular: "This payment was declined due to insufficient funds. Please try a different card.",
          dictionary: {
            es: {
              singular: "Este pago fue rechazado por fondos insuficientes. Por favor, pruebe con otra tarjeta."
            },
            "de-DE": {
              singular: "Diese Zahlung wurde wegen unzureichender Mittel abgelehnt. Bitte versuchen Sie eine andere Karte."
            },
            "fr-FR": {
              singular: "Ce paiement a été refusé pour insuffisance de fonds. Veuillez essayer une autre carte."
            },
            "ja-JP": {
              singular: "残高不足のため、この支払いは拒否されました。別のカードをお試しください。"
            },
            "ko-KR": {
              singular: "잔액 부족으로 인해 결제가 거절되었습니다. 다른 카드를 사용해 주세요."
            },
            "pt-BR": {
              singular: "Este pagamento foi recusado por fundos insuficientes. Tente outro cartão."
            },
            "zh-CN": {
              singular: "付款因资金不足被拒。请尝试使用其他卡。"
            }
          }
        });
      case _v16:
        return (0, _v12.translate)({
          singular: "Your card has expired. Please update the expiry date or try a different card.",
          dictionary: {
            es: {
              singular: "Su tarjeta ha caducado. Actualice la fecha de vencimiento o pruebe con otra tarjeta."
            },
            "de-DE": {
              singular: "Ihre Karte ist abgelaufen. Bitte aktualisieren Sie das Ablaufdatum oder versuchen Sie eine andere Karte."
            },
            "fr-FR": {
              singular: "Votre carte a expiré. Veuillez mettre à jour la date d'expiration ou essayer une autre carte."
            },
            "ja-JP": {
              singular: "カードの有効期限が切れています。有効期限を更新するか、別のカードをお試しください。"
            },
            "ko-KR": {
              singular: "카드가 만료되었습니다. 유효기간을 업데이트하시거나 다른 카드를 사용해 주세요."
            },
            "pt-BR": {
              singular: "Seu cartão expirou. Atualize a data de validade ou tente outro cartão."
            },
            "zh-CN": {
              singular: "您的卡已过期。请更新有效期或尝试使用其他卡。"
            }
          }
        });
      case _v17:
        return (0, _v12.translate)({
          singular: "This card cannot be used for this payment. Please try a different card.",
          dictionary: {
            es: {
              singular: "Esta tarjeta no puede utilizarse para este pago. Por favor, pruebe con otra tarjeta."
            },
            "de-DE": {
              singular: "Diese Karte kann für diese Zahlung nicht verwendet werden. Bitte versuchen Sie eine andere Karte."
            },
            "fr-FR": {
              singular: "Cette carte ne peut pas être utilisée pour ce paiement. Veuillez essayer une autre carte."
            },
            "ja-JP": {
              singular: "このカードはこの支払いに使用できません。別のカードをお試しください。"
            },
            "ko-KR": {
              singular: "이 카드는 이 결제에 사용할 수 없습니다. 다른 카드를 사용해 주세요."
            },
            "pt-BR": {
              singular: "Este cartão não pode ser usado para este pagamento. Tente outro cartão."
            },
            "zh-CN": {
              singular: "该卡无法用于此次支付。请尝试使用其他卡。"
            }
          }
        });
      case _v18:
        return (0, _v12.translate)({
          singular: "We were unable to verify your card details. Please check them or try a different card.",
          dictionary: {
            es: {
              singular: "No pudimos verificar los datos de su tarjeta. Por favor, compruébelos o pruebe con otra tarjeta."
            },
            "de-DE": {
              singular: "Wir konnten Ihre Kartendaten nicht verifizieren. Bitte überprüfen Sie diese oder versuchen Sie eine andere Karte."
            },
            "fr-FR": {
              singular: "Nous n'avons pas pu vérifier les détails de votre carte. Veuillez les vérifier ou essayer une autre carte."
            },
            "ja-JP": {
              singular: "カード情報を確認できませんでした。情報を確認するか、別のカードをお試しください。"
            },
            "ko-KR": {
              singular: "카드 정보를 확인할 수 없습니다. 정보를 확인하시거나 다른 카드를 사용해 보세요."
            },
            "pt-BR": {
              singular: "Não foi possível verificar os dados do seu cartão. Verifique-os ou tente outro cartão."
            },
            "zh-CN": {
              singular: "我们无法验证您的卡信息。请检查后重试或尝试使用其他卡。"
            }
          }
        });
      case _v19:
        return (0, _v12.translate)({
          singular: "Your PayPal payment could not be completed. Please try a different funding source in your PayPal account, or pay with a card.",
          dictionary: {
            es: {
              singular: "No se pudo completar su pago con PayPal. Por favor, pruebe con una fuente de financiación diferente en su cuenta de PayPal o pague con una tarjeta."
            },
            "de-DE": {
              singular: "Ihre PayPal-Zahlung konnte nicht abgeschlossen werden. Bitte wählen Sie eine andere Finanzierungsquelle in Ihrem PayPal-Konto oder bezahlen Sie mit einer Karte."
            },
            "fr-FR": {
              singular: "Votre paiement PayPal n'a pas pu être effectué. Veuillez essayer une autre source de financement dans votre compte PayPal, ou payer avec une carte."
            },
            "ja-JP": {
              singular: "PayPalでの支払いを完了できませんでした。PayPalアカウント内の別の資金源をお試しいただくか、カードでお支払いください。"
            },
            "ko-KR": {
              singular: "PayPal 결제를 완료할 수 없습니다. PayPal 계정에서 다른 결제 수단을 시도하거나 카드로 결제해 주세요."
            },
            "pt-BR": {
              singular: "Seu pagamento via PayPal não pôde ser concluído. Tente uma fonte de financiamento diferente na sua conta PayPal ou pague com um cartão."
            },
            "zh-CN": {
              singular: "您的 PayPal 支付未能完成。请尝试在您的 PayPal 帐户中更换资金来源，或改用银行卡支付。"
            }
          }
        });
      default:
        return (0, _v12.translate)({
          singular: "Some information could not be verified. Please check the information or try a different card.",
          dictionary: {
            es: {
              singular: "No se pudo verificar parte de la información. Por favor, compruebe la información o pruebe con otra tarjeta."
            },
            "de-DE": {
              singular: "Einige Informationen konnten nicht verifiziert werden. Bitte überprüfen Sie die Angaben oder versuchen Sie eine andere Karte."
            },
            "fr-FR": {
              singular: "Certaines informations n'ont pas pu être vérifiées. Veuillez vérifier les informations ou essayer une autre carte."
            },
            "ja-JP": {
              singular: "一部の情報を確認できませんでした。情報を確認するか、別のカードをお試しください。"
            },
            "ko-KR": {
              singular: "일부 정보를 확인할 수 없습니다. 정보를 확인하시거나 다른 카드를 사용해 보세요."
            },
            "pt-BR": {
              singular: "Algumas informações não puderam ser verificadas. Verifique os dados ou tente outro cartão."
            },
            "zh-CN": {
              singular: "某些信息无法验证。请检查信息或尝试使用其他卡。"
            }
          }
        });
    }
  }, "getErrorMessage", 0, _v0 => {
    switch (_v0) {
      case _v13.SIFT_ERROR:
        let _v0 = document.location.origin + "/help/contact?question=%20&category=cf_billing_membership&subcategory=cf_s_error_with_checkout_page";
        return (0, _v12.translate)({
          singular: "We were unable to process this transaction. Please {A}contact us{/A} directly.",
          replacements: {
            A: _v0 => (0, _v10.jsx)(_v11.Link, {
              href: _v0,
              target: "_blank",
              variant: "inline-primary",
              children: _v0
            })
          },
          dictionary: {
            es: {
              singular: "No pudimos procesar esta transacción. Por favor, {A}contáctenos{/A} directamente."
            },
            "de-DE": {
              singular: "Wir konnten diese Transaktion nicht verarbeiten. Bitte {A}kontaktieren Sie uns{/A} direkt."
            },
            "fr-FR": {
              singular: "Nous n'avons pas pu traiter cette transaction. Veuillez {A}nous contacter{/A} directement."
            },
            "ja-JP": {
              singular: "この取引を処理できませんでした。{A}お問い合わせ{/A}に直接ご連絡ください。"
            },
            "ko-KR": {
              singular: "거래를 처리할 수 없습니다. {A}직접 문의해 주세요{/A}."
            },
            "pt-BR": {
              singular: "Não foi possível processar esta transação. Por favor, {A}entre em contato conosco{/A} diretamente."
            },
            "zh-CN": {
              singular: "我们无法处理此交易。请直接{A}联系我们{/A}。"
            }
          }
        });
      case _v13.PAYPAL_CONNECTION:
        return (0, _v12.translate)({
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
        });
      case _v13.ZUORA_HPM_841:
        let {
            pathname: _v1,
            search: _v2
          } = window.location,
          _v3 = new URLSearchParams(_v2);
        _v3.set("currency", "USD");
        let _v4 = `${_v1}?${_v3.toString()}`;
        return (0, _v12.translate)({
          singular: "There seems to be a problem with the card you are trying to use. If you intend to pay with JCB, please click {A}here{/A} to refresh your currency to USD (prices may vary). Otherwise, please try a different method of payment.",
          replacements: {
            A: _v0 => (0, _v10.jsx)(_v11.Link, {
              href: _v4,
              variant: "inline-primary",
              children: _v0
            })
          },
          dictionary: {
            es: {
              singular: "Parece haber un problema con la tarjeta que está intentando usar. Si desea pagar con JCB, haga clic {A}aquí{/A} para actualizar su moneda a USD (los precios pueden variar). De lo contrario, pruebe otro método de pago."
            },
            "de-DE": {
              singular: "Bei der von Ihnen verwendeten Karte scheint ein Problem vorzuliegen. Wenn Sie mit JCB bezahlen möchten, klicken Sie bitte {A}hier{/A}, um Ihre Währung auf USD zu aktualisieren (Preise können variieren). Andernfalls versuchen Sie bitte eine andere Zahlungsmethode."
            },
            "fr-FR": {
              singular: "Il semble y avoir un problème avec la carte que vous essayez d'utiliser. Si vous souhaitez payer avec JCB, cliquez {A}ici{/A} pour basculer votre devise en USD (les prix peuvent varier). Sinon, veuillez essayer un autre mode de paiement."
            },
            "ja-JP": {
              singular: "お使いのカードに問題があるようです。JCBで支払う場合は{A}こちら{/A}をクリックして通貨をUSDに変更してください（価格は異なる場合があります）。それ以外の場合は別の支払方法をお試しください。"
            },
            "ko-KR": {
              singular: "사용하려는 카드에 문제가 있는 것 같습니다. JCB로 결제하려는 경우 {A}여기{/A}를 클릭하여 통화를 USD로 변경하세요(가격이 달라질 수 있음). 그렇지 않으면 다른 결제 수단을 시도해 주세요."
            },
            "pt-BR": {
              singular: "Parece haver um problema com o cartão que você está tentando usar. Se você pretende pagar com JCB, clique {A}aqui{/A} para atualizar sua moeda para USD (os preços podem variar). Caso contrário, tente outro método de pagamento."
            },
            "zh-CN": {
              singular: "您尝试使用的卡片似乎有问题。如果您打算使用 JCB 支付，请点击 {A}这里{/A} 将货币刷新为 USD（价格可能有所不同）。否则，请尝试其他支付方式。"
            }
          }
        });
      default:
        return (0, _v12.translate)({
          singular: "Some information could not be verified. Please check the information or try a different card.",
          dictionary: {
            es: {
              singular: "No se pudo verificar parte de la información. Por favor, compruebe la información o pruebe con otra tarjeta."
            },
            "de-DE": {
              singular: "Einige Informationen konnten nicht verifiziert werden. Bitte überprüfen Sie die Angaben oder versuchen Sie eine andere Karte."
            },
            "fr-FR": {
              singular: "Certaines informations n'ont pas pu être vérifiées. Veuillez vérifier les informations ou essayer une autre carte."
            },
            "ja-JP": {
              singular: "一部の情報を確認できませんでした。情報を確認するか、別のカードをお試しください。"
            },
            "ko-KR": {
              singular: "일부 정보를 확인할 수 없습니다. 정보를 확인하시거나 다른 카드를 사용해 보세요."
            },
            "pt-BR": {
              singular: "Algumas informações não puderam ser verificadas. Verifique os dados ou tente outro cartão."
            },
            "zh-CN": {
              singular: "某些信息无法验证。请检查信息或尝试使用其他卡。"
            }
          }
        });
    }
  }, "parseGatewayDeclineCode", 0, _v0 => {
    let _v1 = _v0?.match(/\|\s*CODE:\s*([^\s|]+)/i);
    return _v1?.[1];
  }], 0);
}