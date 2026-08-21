{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  let _v8 = _v6.ToastIcon;
  _v0.s(["useAutoRenewEncouragementEnableToasts", 0, function () {
    let _v0 = (0, _v6.useToast)();
    return {
      showEnableSuccessToast: (0, _v2.useCallback)(() => {
        _v0({
          variant: "success",
          isClosable: !0,
          render: _v0 => (0, _v1.jsx)(_v6.ToastRoot, {
            ..._v0,
            variant: "success",
            children: (0, _v1.jsxs)(_v4.Center, {
              gap: "sm",
              alignItems: "flex-start",
              children: [(0, _v1.jsx)(_v8, {}), (0, _v1.jsxs)(_v5.Text, {
                variant: "body-md",
                children: [(0, _v1.jsx)(_v3.Box, {
                  as: "span",
                  fontFamily: "heading",
                  children: (0, _v7.translate)({
                    singular: "Auto-renew is on!",
                    dictionary: {
                      es: {
                        singular: "¡La renovación automática está activada!"
                      },
                      "de-DE": {
                        singular: "Die automatische Verlängerung ist aktiviert!"
                      },
                      "fr-FR": {
                        singular: "Le renouvellement automatique est activé !"
                      },
                      "ja-JP": {
                        singular: "自動更新がオンになりました!"
                      },
                      "ko-KR": {
                        singular: "자동 갱신이 활성화되었습니다!"
                      },
                      "pt-BR": {
                        singular: "Renovação automática ativada!"
                      },
                      "zh-CN": {
                        singular: "自动续订已开启！"
                      }
                    }
                  })
                }), " ", (0, _v7.translate)({
                  singular: "You'll be sent a reminder email before your subscription renews.",
                  dictionary: {
                    es: {
                      singular: "Antes de que se renueve la suscripción, recibirás un recordatorio por correo electrónico."
                    },
                    "de-DE": {
                      singular: "Wir schicken dir eine Erinnerungs-E-Mail, bevor dein Abo verlängert wird."
                    },
                    "fr-FR": {
                      singular: "Nous vous enverrons un e-mail de rappel avant le renouvellement de votre abonnement."
                    },
                    "ja-JP": {
                      singular: "サブスクリプションの更新前に、リマインダーメールが送信されます。"
                    },
                    "ko-KR": {
                      singular: "구독 갱신 전에 알림 이메일을 보내드립니다."
                    },
                    "pt-BR": {
                      singular: "Você receberá um e-mail de lembrete antes de sua assinatura ser renovada."
                    },
                    "zh-CN": {
                      singular: "您将在续订前收到电子邮件提醒。"
                    }
                  }
                })]
              })]
            })
          })
        });
      }, [_v0]),
      showEnableFailureToast: (0, _v2.useCallback)(() => {
        _v0({
          variant: "warning",
          isClosable: !0,
          render: _v0 => (0, _v1.jsx)(_v6.ToastRoot, {
            ..._v0,
            variant: "warning",
            children: (0, _v1.jsxs)(_v4.Center, {
              gap: "sm",
              alignItems: "flex-start",
              children: [(0, _v1.jsx)(_v8, {}), (0, _v1.jsxs)(_v5.Text, {
                variant: "body-md",
                children: [(0, _v1.jsx)(_v3.Box, {
                  as: "span",
                  fontFamily: "heading",
                  children: (0, _v7.translate)({
                    singular: "Auto-renew couldn't be turned on.",
                    dictionary: {
                      es: {
                        singular: "No se pudo activar la renovación automática."
                      },
                      "de-DE": {
                        singular: "Die automatische Verlängerung konnte nicht aktiviert werden."
                      },
                      "fr-FR": {
                        singular: "Le renouvellement automatique n'a pas pu être activé."
                      },
                      "ja-JP": {
                        singular: "自動更新をオンにできませんでした。"
                      },
                      "ko-KR": {
                        singular: "자동 갱신을 활성화할 수 없습니다."
                      },
                      "pt-BR": {
                        singular: "Não foi possível ativar a renovação automática."
                      },
                      "zh-CN": {
                        singular: "无法启用自动续订。"
                      }
                    }
                  })
                }), " ", (0, _v7.translate)({
                  singular: "Try again, or update your payment method to keep your subscription active.",
                  dictionary: {
                    es: {
                      singular: "Inténtalo de nuevo, o actualiza tu método de pago para mantener tu suscripción activa."
                    },
                    "de-DE": {
                      singular: "Versuchen Sie es erneut oder aktualisieren Sie Ihre Zahlungsmethode, um Ihr Abonnement aktiv zu halten."
                    },
                    "fr-FR": {
                      singular: "Réessayez, ou mettez à jour votre moyen de paiement pour maintenir votre abonnement actif."
                    },
                    "ja-JP": {
                      singular: "もう一度お試しいただくか、支払い方法を更新してサブスクリプションを継続してください。"
                    },
                    "ko-KR": {
                      singular: "구독을 유지하려면 다시 시도하거나 결제 수단을 업데이트하세요."
                    },
                    "pt-BR": {
                      singular: "Tente novamente, ou atualize seu método de pagamento para manter sua assinatura ativa."
                    },
                    "zh-CN": {
                      singular: "请重试，或更新您的付款方式以保持订阅有效。"
                    }
                  }
                })]
              })]
            })
          })
        });
      }, [_v0])
    };
  }]);
}