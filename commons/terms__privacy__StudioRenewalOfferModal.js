{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0);
  let _v19 = "/terms",
    _v20 = "/privacy";
  _v0.s(["StudioRenewalOfferModal", 0, ({
    isOpen: _v0,
    onClose: _v1,
    savingsPercent: _v2,
    discountedMonthlyPrice: _v3,
    fullMonthlyPrice: _v4,
    currencyCode: _v5,
    locale: _v6,
    studioPlan: _v7,
    renewalDate: _v8,
    isAnnual: _v9,
    onRenew: _v10,
    isRenewing: _v11 = !1
  }) => {
    let _v12 = _v0 => new Intl.NumberFormat(_v6 ?? "en", {
        style: "currency",
        currency: _v5 ?? "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
      }).format(_v0),
      _v13 = _v7?.metadata?.entitlements?.params,
      _v14 = _v13?.teamSeats ?? null,
      _v15 = _v13?.seats?.admin ?? null,
      _v16 = _v13?.restrictedVideoStorageLimit ?? null,
      _v17 = _v13?.bandwidth ?? null,
      _v18 = _v17?.quotaPeriod === "year" ? (0, _v18.translate)({
        singular: "{AMOUNT} yearly bandwidth",
        replacements: {
          AMOUNT: _v17.periodicQuota ?? ""
        },
        dictionary: {
          es: {
            singular: "{AMOUNT} de ancho de banda anual"
          },
          "de-DE": {
            singular: "{AMOUNT} Bandbreite pro Jahr"
          },
          "fr-FR": {
            singular: "{AMOUNT} de bande passante annuelle"
          },
          "ja-JP": {
            singular: "{AMOUNT} の年間帯域幅"
          },
          "ko-KR": {
            singular: "{AMOUNT} 연간 대역폭"
          },
          "pt-BR": {
            singular: "{AMOUNT} de largura de banda anual"
          },
          "zh-CN": {
            singular: "{AMOUNT} 年带宽"
          }
        }
      }) : (0, _v18.translate)({
        singular: "{AMOUNT} monthly bandwidth",
        replacements: {
          AMOUNT: _v17?.periodicQuota ?? ""
        },
        dictionary: {
          es: {
            singular: "{AMOUNT} de ancho de banda mensual"
          },
          "de-DE": {
            singular: "{AMOUNT} monatliche Bandbreite"
          },
          "fr-FR": {
            singular: "{AMOUNT} de bande passante mensuelle"
          },
          "ja-JP": {
            singular: "{AMOUNT}の月間帯域幅"
          },
          "ko-KR": {
            singular: "{AMOUNT} 월간 대역폭"
          },
          "pt-BR": {
            singular: "{AMOUNT} de largura de banda mensal"
          },
          "zh-CN": {
            singular: "{AMOUNT} 每月带宽"
          }
        }
      }),
      _v19 = (() => {
        if (!_v8) return "";
        let _v0 = new Date(_v8);
        return Number.isNaN(_v0.getTime()) ? "" : new Intl.DateTimeFormat(_v6 ?? "en", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric"
        }).format(_v0);
      })(),
      _v20 = _v12(_v3 * (_v9 ? 12 : 1)),
      _v21 = _v9 ? (0, _v18.translate)({
        singular: "plus taxes. Per month, billed annually.",
        dictionary: {
          es: {
            singular: "más impuestos. Por mes, facturado anualmente."
          },
          "de-DE": {
            singular: "zzgl. Steuern. Pro Monat, jährlich abgerechnet."
          },
          "fr-FR": {
            singular: "plus taxes. Par mois, facturé annuellement."
          },
          "ja-JP": {
            singular: "税別。月額（年払い）。"
          },
          "ko-KR": {
            singular: "세금 별도. 월별 요금, 연간 청구."
          },
          "pt-BR": {
            singular: "mais impostos. Por mês, cobrado anualmente."
          },
          "zh-CN": {
            singular: "另加税。按年计费，折合每月。"
          }
        }
      }) : (0, _v18.translate)({
        singular: "plus taxes. Per month, billed monthly.",
        dictionary: {
          es: {
            singular: "más impuestos. Por mes, facturado mensualmente."
          },
          "de-DE": {
            singular: "zzgl. Steuern. Pro Monat, monatlich abgerechnet."
          },
          "fr-FR": {
            singular: "plus taxes. Par mois, facturé mensuellement."
          },
          "ja-JP": {
            singular: "税別。月額（月払い）。"
          },
          "ko-KR": {
            singular: "세금 별도. 월별 요금, 월간 청구."
          },
          "pt-BR": {
            singular: "mais impostos. Por mês, cobrado mensalmente."
          },
          "zh-CN": {
            singular: "另加税。按月计费，每月结算。"
          }
        }
      }),
      _v22 = _v0 => _v0 => (0, _v1.jsx)(_v5.Link, {
        href: _v0,
        textDecoration: "underline",
        color: "text-primary",
        target: "_blank",
        rel: "noopener noreferrer",
        children: _v0
      });
    return (0, _v1.jsxs)(_v6.Modal, {
      isOpen: _v0,
      onClose: _v1,
      size: "lg",
      scrollBehavior: "outside",
      children: [(0, _v1.jsx)(_v12.ModalOverlay, {}), (0, _v1.jsxs)(_v10.ModalContent, {
        maxW: "600px",
        padding: {
          base: `${(0, _v13.rem)(24)} ${(0, _v13.rem)(24)} ${(0, _v13.rem)(20)}`,
          md: `${(0, _v13.rem)(32)} ${(0, _v13.rem)(64)}`
        },
        children: [(0, _v1.jsx)(_v7.ModalAdvancedHeader, {
          title: (0, _v18.translate)({
            singular: "Renew Studio at a discounted price",
            dictionary: {
              es: {
                singular: "Renovar Studio a precio reducido"
              },
              "de-DE": {
                singular: "Studio zum reduzierten Preis verlängern"
              },
              "fr-FR": {
                singular: "Renouveler Studio à prix réduit"
              },
              "ja-JP": {
                singular: "割引価格で Studio を更新"
              },
              "ko-KR": {
                singular: "Studio를 할인된 가격으로 갱신"
              },
              "pt-BR": {
                singular: "Renove o Studio com desconto"
              },
              "zh-CN": {
                singular: "以折扣价续订 Studio"
              }
            }
          }),
          description: (0, _v18.translate)({
            singular: "Studio gives your team the essentials at a lower price.",
            dictionary: {
              es: {
                singular: "Studio ofrece a su equipo lo esencial a un precio más bajo."
              },
              "de-DE": {
                singular: "Studio bietet Ihrem Team die wichtigsten Funktionen zu einem günstigeren Preis."
              },
              "fr-FR": {
                singular: "Studio offre à votre équipe l'essentiel à un prix inférieur."
              },
              "ja-JP": {
                singular: "Studio は、チームに必要な基本機能を低価格で提供します。"
              },
              "ko-KR": {
                singular: "Studio는 팀에 필수 기능을 더 낮은 가격으로 제공합니다."
              },
              "pt-BR": {
                singular: "O Studio oferece à sua equipe o essencial por um preço mais baixo."
              },
              "zh-CN": {
                singular: "Studio 以更低价格为您的团队提供核心功能。"
              }
            }
          }),
          paddingTop: 0,
          paddingBottom: 4,
          paddingX: 0
        }), (0, _v1.jsx)(_v9.ModalCloseButton, {}), (0, _v1.jsxs)(_v8.ModalBody, {
          p: 0,
          pt: 0,
          px: 0,
          children: [(0, _v1.jsxs)(_v3.Box, {
            display: "flex",
            flexDirection: "column",
            gap: 1,
            children: [(0, _v1.jsxs)(_v3.Box, {
              display: "flex",
              alignItems: "center",
              gap: 2,
              children: [(0, _v1.jsx)(_v14.Text, {
                variant: "heading-lg",
                as: "span",
                children: _v12(_v3)
              }), (0, _v1.jsx)(_v14.Text, {
                variant: "body-lg",
                color: "text-tertiary",
                as: "span",
                textDecoration: "line-through",
                children: _v12(_v4)
              }), (0, _v1.jsx)(_v2.Badge, {
                size: "sm",
                backgroundColor: "status-positive-secondary",
                textColor: "status-positive-primary",
                border: "none",
                borderRadius: "999px",
                px: 3,
                py: 3,
                children: (0, _v18.translate)({
                  singular: "Save {PERCENT}%",
                  replacements: {
                    PERCENT: _v2
                  },
                  dictionary: {
                    es: {
                      singular: "Ahorre {PERCENT}%"
                    },
                    "de-DE": {
                      singular: "Sparen Sie {PERCENT}%"
                    },
                    "fr-FR": {
                      singular: "Économisez {PERCENT}%"
                    },
                    "ja-JP": {
                      singular: "{PERCENT}%節約"
                    },
                    "ko-KR": {
                      singular: "{PERCENT}% 절약"
                    },
                    "pt-BR": {
                      singular: "Economize {PERCENT}%"
                    },
                    "zh-CN": {
                      singular: "节省 {PERCENT}%"
                    }
                  }
                })
              })]
            }), (0, _v1.jsx)(_v14.Text, {
              variant: "body-sm",
              color: "text-secondary",
              children: _v21
            })]
          }), (0, _v1.jsxs)(_v3.Box, {
            display: "flex",
            flexDirection: "column",
            gap: 3,
            mt: 6,
            children: [null !== _v14 && (0, _v1.jsxs)(_v3.Box, {
              display: "flex",
              alignItems: "center",
              gap: 3,
              children: [(0, _v1.jsx)(_v17.Users, {}), (0, _v1.jsx)(_v14.Text, {
                variant: "body-md",
                color: "text-secondary",
                children: _v15 ? (0, _v18.translate)({
                  singular: "{USERS} users + {ADMINS} admins (up to {ADD_USERS})",
                  replacements: {
                    USERS: _v14,
                    ADMINS: _v15,
                    ADD_USERS: 200
                  },
                  dictionary: {
                    es: {
                      singular: "{USERS} usuarios + {ADMINS} administradores (hasta {ADD_USERS})"
                    },
                    "de-DE": {
                      singular: "{USERS} Nutzer + {ADMINS} Administratoren (bis zu {ADD_USERS})"
                    },
                    "fr-FR": {
                      singular: "{USERS} utilisateurs + {ADMINS} administrateurs (jusqu'à {ADD_USERS})"
                    },
                    "ja-JP": {
                      singular: "{USERS} ユーザー + {ADMINS} 管理者（最大 {ADD_USERS}）"
                    },
                    "ko-KR": {
                      singular: "{USERS} 사용자 + {ADMINS} 관리자 (최대 {ADD_USERS})"
                    },
                    "pt-BR": {
                      singular: "{USERS} usuários + {ADMINS} administradores (até {ADD_USERS})"
                    },
                    "zh-CN": {
                      singular: "{USERS} 用户 + {ADMINS} 管理员（最多 {ADD_USERS}）"
                    }
                  }
                }) : (0, _v18.translate)({
                  singular: "{AMOUNT} users (up to {ADD_USERS})",
                  replacements: {
                    AMOUNT: _v14,
                    ADD_USERS: 200
                  },
                  dictionary: {
                    es: {
                      singular: "{AMOUNT} usuarios (hasta {ADD_USERS})"
                    },
                    "de-DE": {
                      singular: "{AMOUNT} Nutzer (bis zu {ADD_USERS})"
                    },
                    "fr-FR": {
                      singular: "{AMOUNT} utilisateurs (jusqu'à {ADD_USERS})"
                    },
                    "ja-JP": {
                      singular: "{AMOUNT}ユーザー（最大{ADD_USERS}まで）"
                    },
                    "ko-KR": {
                      singular: "{AMOUNT} 사용자({ADD_USERS}까지)"
                    },
                    "pt-BR": {
                      singular: "{AMOUNT} usuários (até {ADD_USERS})"
                    },
                    "zh-CN": {
                      singular: "{AMOUNT} 用户 (最多 {ADD_USERS})"
                    }
                  }
                })
              })]
            }), null !== _v16 && (0, _v1.jsxs)(_v3.Box, {
              display: "flex",
              alignItems: "center",
              gap: 3,
              children: [(0, _v1.jsx)(_v15.ManagedStorage, {}), (0, _v1.jsx)(_v14.Text, {
                variant: "body-md",
                color: "text-secondary",
                children: (0, _v18.translate)({
                  singular: "{AMOUNT} managed storage for embeddable and non-Public videos",
                  replacements: {
                    AMOUNT: _v16
                  },
                  dictionary: {
                    es: {
                      singular: "{AMOUNT} de almacenamiento gestionado para vídeos incrustables y no públicos"
                    },
                    "de-DE": {
                      singular: "{AMOUNT} verwalteter Speicher für einbettbare und nicht-öffentliche Videos"
                    },
                    "fr-FR": {
                      singular: "{AMOUNT} de stockage géré pour les vidéos intégrables et non publiques"
                    },
                    "ja-JP": {
                      singular: "{AMOUNT}の埋め込み可能および非公開動画向け管理ストレージ"
                    },
                    "ko-KR": {
                      singular: "{AMOUNT} 임베드 가능 및 비공개 동영상용 관리형 저장공간"
                    },
                    "pt-BR": {
                      singular: "{AMOUNT} de armazenamento gerenciado para vídeos incorporáveis e não públicos"
                    },
                    "zh-CN": {
                      singular: "{AMOUNT} 托管存储，用于可嵌入和非公开视频"
                    }
                  }
                })
              })]
            }), (0, _v1.jsxs)(_v3.Box, {
              display: "flex",
              alignItems: "center",
              gap: 3,
              children: [(0, _v1.jsx)(_v16.Speedometer, {}), (0, _v1.jsx)(_v14.Text, {
                variant: "body-md",
                color: "text-secondary",
                children: _v18
              })]
            })]
          }), (0, _v1.jsx)(_v14.Text, {
            variant: "body-xs",
            color: "text-secondary",
            mt: 6,
            mb: 6,
            children: _v9 ? (0, _v18.translate)({
              singular: "By accepting, you agree: You'll get a promotional discount on an automatically renewing subscription for a total price of {DISCOUNTED_AMOUNT} (plus tax), charged on {DATE}. If you don't cancel before {DATE_2}, your subscription will renew at the promotional price of {DISCOUNTED_AMOUNT_2} (plus tax) on that date and will continue to automatically renew annually unless you cancel in Billing Settings. Subscription price may change in accordance with our Terms of Service. Your content may be deleted upon cancellation. By completing this purchase, you agree to our {TOS_URL}Terms of Service{/TOS_URL}, including the arbitration agreement and class action waiver, and acknowledge our {PP_URL}Privacy Policy{/PP_URL}.",
              replacements: {
                DISCOUNTED_AMOUNT: _v20,
                DATE: _v19,
                DATE_2: _v19,
                DISCOUNTED_AMOUNT_2: _v20,
                TOS_URL: _v22(_v19),
                PP_URL: _v22(_v20)
              },
              dictionary: {
                es: {
                  singular: "Al aceptar, usted acepta: recibirá un descuento promocional en una suscripción con renovación automática por un precio total de {DISCOUNTED_AMOUNT} (más impuestos), que se cobrará el {DATE}. Si no cancela antes del {DATE_2}, su suscripción se renovará al precio promocional de {DISCOUNTED_AMOUNT_2} (más impuestos) en esa fecha y continuará renovándose automáticamente cada año a menos que cancele en Configuración de facturación. El precio de la suscripción puede cambiar de acuerdo con nuestros Términos de servicio. Su contenido puede ser eliminado al cancelar. Al completar esta compra, usted acepta nuestros {TOS_URL}Términos de servicio{/TOS_URL}, incluido el acuerdo de arbitraje y la renuncia a demandas colectivas, y reconoce nuestra {PP_URL}Política de privacidad{/PP_URL}."
                },
                "de-DE": {
                  singular: "Mit der Bestätigung erklären Sie sich einverstanden: Sie erhalten einen Aktionsrabatt auf ein automatisch verlängerbares Abonnement zu einem Gesamtpreis von {DISCOUNTED_AMOUNT} (zzgl. Steuern). Die Belastung erfolgt am {DATE}. Wenn Sie nicht vor dem {DATE_2} kündigen, wird Ihr Abonnement an diesem Datum zum Aktionspreis von {DISCOUNTED_AMOUNT_2} (zzgl. Steuern) verlängert und sich anschließend automatisch jährlich erneuern, sofern Sie nicht in den Abrechnungseinstellungen kündigen. Der Abonnementpreis kann sich gemäß unseren {TOS_URL}Nutzungsbedingungen{/TOS_URL} ändern. Ihre Inhalte können bei Kündigung gelöscht werden. Mit dem Abschluss dieses Kaufs stimmen Sie unseren {TOS_URL}Nutzungsbedingungen{/TOS_URL} zu, einschließlich der Schiedsvereinbarung und des Verzichts auf Sammelklagen, und erkennen unsere {PP_URL}Datenschutzerklärung{/PP_URL} an."
                },
                "fr-FR": {
                  singular: "En acceptant, vous acceptez : vous bénéficierez d'une remise promotionnelle sur un abonnement à renouvellement automatique pour un prix total de {DISCOUNTED_AMOUNT} (taxes en sus), facturé le {DATE}. Si vous n'annulez pas avant le {DATE_2}, votre abonnement sera renouvelé au prix promotionnel de {DISCOUNTED_AMOUNT_2} (taxes en sus) à cette date et continuera à se renouveler automatiquement chaque année, à moins que vous ne l'annuliez dans les Paramètres de facturation. Le prix de l'abonnement peut être modifié conformément à nos Conditions d'utilisation. Votre contenu peut être supprimé en cas d'annulation. En complétant cet achat, vous acceptez nos {TOS_URL}Conditions d'utilisation{/TOS_URL}, y compris l'accord d'arbitrage et la renonciation aux recours collectifs, et reconnaissez notre {PP_URL}Politique de confidentialité{/PP_URL}."
                },
                "ja-JP": {
                  singular: "同意すると、次の内容に同意したことになります：自動更新されるサブスクリプションにプロモーション割引が適用され、合計金額は{DISCOUNTED_AMOUNT}（税別）で、{DATE}に請求されます。{DATE_2}までに解約しない場合、サブスクリプションはその日にプロモーション価格{DISCOUNTED_AMOUNT_2}（税別）で更新され、その後は Billing Settings で解約しない限り年次で自動更新されます。サブスクリプションの価格は当社の利用規約に従って変更される場合があります。解約時にコンテンツが削除される可能性があります。この購入を完了することにより、仲裁合意および集団訴訟の放棄を含む当社の{TOS_URL}利用規約{/TOS_URL}に同意し、{PP_URL}プライバシーポリシー{/PP_URL}を確認したことを承認します。"
                },
                "ko-KR": {
                  singular: "동의하시면 다음에 동의하게 됩니다: 자동으로 갱신되는 구독에 대해 프로모션 할인이 적용되며 총액은 {DISCOUNTED_AMOUNT} (세금 별도)이며, {DATE}에 청구됩니다. {DATE_2} 이전에 취소하지 않으면 구독은 해당 날짜에 프로모션 가격인 {DISCOUNTED_AMOUNT_2} (세금 별도)로 갱신되며, 청구 설정에서 취소하지 않는 한 자동으로 매년 갱신됩니다. 구독 가격은 당사의 서비스 약관에 따라 변경될 수 있습니다. 취소 시 콘텐츠가 삭제될 수 있습니다. 이 구매를 완료함으로써 귀하는 중재 합의 및 집단 소송 포기를 포함한 당사의 {TOS_URL}서비스 약관{/TOS_URL}에 동의하고 당사의 {PP_URL}개인정보 처리방침{/PP_URL}을 확인합니다."
                },
                "pt-BR": {
                  singular: "Ao aceitar, você concorda: você receberá um desconto promocional em uma assinatura com renovação automática por um preço total de {DISCOUNTED_AMOUNT} (mais impostos), cobrado em {DATE}. Se você não cancelar antes de {DATE_2}, sua assinatura será renovada pelo preço promocional de {DISCOUNTED_AMOUNT_2} (mais impostos) nessa data e continuará a ser renovada automaticamente anualmente, a menos que você cancele nas Configurações de cobrança. O preço da assinatura pode mudar de acordo com nossos Termos de Serviço. Seu conteúdo pode ser excluído em caso de cancelamento. Ao concluir esta compra, você concorda com nossos {TOS_URL}Termos de Serviço{/TOS_URL}, incluindo o acordo de arbitragem e a renúncia a ações coletivas, e reconhece nossa {PP_URL}Política de Privacidade{/PP_URL}."
                },
                "zh-CN": {
                  singular: "接受即表示您同意：您将以促销优惠价格购买一个会自动续订的订阅，总价格为 {DISCOUNTED_AMOUNT}（另含税费），将在 {DATE} 收取。如果您未在 {DATE_2} 之前取消，您的订阅将在该日以促销价格 {DISCOUNTED_AMOUNT_2}（另含税费）续订，并将继续每年自动续订，除非您在 Billing Settings 中取消订阅。订阅价格可能根据我们的服务条款而变更。取消后您的内容可能被删除。完成购买即表示您同意我们的 {TOS_URL}服务条款{/TOS_URL}（包括仲裁协议和放弃集体诉讼条款），并已知悉我们的 {PP_URL}隐私政策{/PP_URL}。"
                }
              }
            }) : (0, _v18.translate)({
              singular: "By accepting, you agree: You'll get a promotional discount on an automatically renewing subscription for a total price of {DISCOUNTED_AMOUNT} (plus tax), charged on {DATE}. If you don't cancel before {DATE_2}, your subscription will renew at the promotional price of {DISCOUNTED_AMOUNT_2} (plus tax) on that date and will continue to automatically renew monthly unless you cancel in Billing Settings. Subscription price may change in accordance with our Terms of Service. Your content may be deleted upon cancellation. By completing this purchase, you agree to our {TOS_URL}Terms of Service{/TOS_URL}, including the arbitration agreement and class action waiver, and acknowledge our {PP_URL}Privacy Policy{/PP_URL}.",
              replacements: {
                DISCOUNTED_AMOUNT: _v20,
                DATE: _v19,
                DATE_2: _v19,
                DISCOUNTED_AMOUNT_2: _v20,
                TOS_URL: _v22(_v19),
                PP_URL: _v22(_v20)
              },
              dictionary: {
                es: {
                  singular: "Al aceptar, usted acepta: recibirá un descuento promocional en una suscripción con renovación automática por un precio total de {DISCOUNTED_AMOUNT} (más impuestos), que se cobrará el {DATE}. Si no cancela antes del {DATE_2}, su suscripción se renovará al precio promocional de {DISCOUNTED_AMOUNT_2} (más impuestos) en esa fecha y continuará renovándose automáticamente cada mes a menos que cancele en Configuración de facturación. El precio de la suscripción puede cambiar de acuerdo con nuestros Términos de servicio. Su contenido puede ser eliminado al cancelar. Al completar esta compra, usted acepta nuestros {TOS_URL}Términos de servicio{/TOS_URL}, incluido el acuerdo de arbitraje y la renuncia a demandas colectivas, y reconoce nuestra {PP_URL}Política de privacidad{/PP_URL}."
                },
                "de-DE": {
                  singular: "Mit der Bestätigung erklären Sie sich einverstanden: Sie erhalten einen Aktionsrabatt auf ein automatisch verlängerbares Abonnement zu einem Gesamtpreis von {DISCOUNTED_AMOUNT} (zzgl. Steuern). Die Belastung erfolgt am {DATE}. Wenn Sie nicht vor dem {DATE_2} kündigen, wird Ihr Abonnement an diesem Datum zum Aktionspreis von {DISCOUNTED_AMOUNT_2} (zzgl. Steuern) verlängert und sich anschließend automatisch monatlich erneuern, sofern Sie nicht in den Abrechnungseinstellungen kündigen. Der Abonnementpreis kann sich gemäß unseren {TOS_URL}Nutzungsbedingungen{/TOS_URL} ändern. Ihre Inhalte können bei Kündigung gelöscht werden. Mit dem Abschluss dieses Kaufs stimmen Sie unseren {TOS_URL}Nutzungsbedingungen{/TOS_URL} zu, einschließlich der Schiedsvereinbarung und des Verzichts auf Sammelklagen, und erkennen unsere {PP_URL}Datenschutzerklärung{/PP_URL} an."
                },
                "fr-FR": {
                  singular: "En acceptant, vous acceptez : vous bénéficierez d'une remise promotionnelle sur un abonnement à renouvellement automatique pour un prix total de {DISCOUNTED_AMOUNT} (taxes en sus), facturé le {DATE}. Si vous n'annulez pas avant le {DATE_2}, votre abonnement sera renouvelé au prix promotionnel de {DISCOUNTED_AMOUNT_2} (taxes en sus) à cette date et continuera à se renouveler automatiquement chaque mois, à moins que vous ne l'annuliez dans les Paramètres de facturation. Le prix de l'abonnement peut être modifié conformément à nos Conditions d'utilisation. Votre contenu peut être supprimé en cas d'annulation. En complétant cet achat, vous acceptez nos {TOS_URL}Conditions d'utilisation{/TOS_URL}, y compris l'accord d'arbitrage et la renonciation aux recours collectifs, et reconnaissez notre {PP_URL}Politique de confidentialité{/PP_URL}."
                },
                "ja-JP": {
                  singular: "同意すると、次の内容に同意したことになります：自動更新されるサブスクリプションにプロモーション割引が適用され、合計金額は{DISCOUNTED_AMOUNT}（税別）で、{DATE}に請求されます。{DATE_2}までに解約しない場合、サブスクリプションはその日にプロモーション価格{DISCOUNTED_AMOUNT_2}（税別）で更新され、その後は Billing Settings で解約しない限り毎月自動更新されます。サブスクリプションの価格は当社の利用規約に従って変更される場合があります。解約時にコンテンツが削除される可能性があります。この購入を完了することにより、仲裁合意および集団訴訟の放棄を含む当社の{TOS_URL}利用規約{/TOS_URL}に同意し、{PP_URL}プライバシーポリシー{/PP_URL}を確認したことを承認します。"
                },
                "ko-KR": {
                  singular: "동의하시면 다음에 동의하게 됩니다: 자동으로 갱신되는 구독에 대해 프로모션 할인이 적용되며 총액은 {DISCOUNTED_AMOUNT} (세금 별도)이며, {DATE}에 청구됩니다. {DATE_2} 이전에 취소하지 않으면 구독은 해당 날짜에 프로모션 가격인 {DISCOUNTED_AMOUNT_2} (세금 별도)로 갱신되며, 청구 설정에서 취소하지 않는 한 자동으로 매월 갱신됩니다. 구독 가격은 당사의 서비스 약관에 따라 변경될 수 있습니다. 취소 시 콘텐츠가 삭제될 수 있습니다. 이 구매를 완료함으로써 귀하는 중재 합의 및 집단 소송 포기를 포함한 당사의 {TOS_URL}서비스 약관{/TOS_URL}에 동의하고 당사의 {PP_URL}개인정보 처리방침{/PP_URL}을 확인합니다."
                },
                "pt-BR": {
                  singular: "Ao aceitar, você concorda: você receberá um desconto promocional em uma assinatura com renovação automática por um preço total de {DISCOUNTED_AMOUNT} (mais impostos), cobrado em {DATE}. Se você não cancelar antes de {DATE_2}, sua assinatura será renovada pelo preço promocional de {DISCOUNTED_AMOUNT_2} (mais impostos) nessa data e continuará a ser renovada automaticamente mensalmente, a menos que você cancele nas Configurações de cobrança. O preço da assinatura pode mudar de acordo com nossos Termos de Serviço. Seu conteúdo pode ser excluído em caso de cancelamento. Ao concluir esta compra, você concorda com nossos {TOS_URL}Termos de Serviço{/TOS_URL}, incluindo o acordo de arbitragem e a renúncia a ações coletivas, e reconhece nossa {PP_URL}Política de Privacidade{/PP_URL}."
                },
                "zh-CN": {
                  singular: "接受即表示您同意：您将以促销优惠价格购买一个会自动续订的订阅，总价格为 {DISCOUNTED_AMOUNT}（另含税费），将在 {DATE} 收取。如果您未在 {DATE_2} 之前取消，您的订阅将在该日以促销价格 {DISCOUNTED_AMOUNT_2}（另含税费）续订，并将继续每月自动续订，除非您在 Billing Settings 中取消订阅。订阅价格可能根据我们的服务条款而变更。取消后您的内容可能被删除。完成购买即表示您同意我们的 {TOS_URL}服务条款{/TOS_URL}（包括仲裁协议和放弃集体诉讼条款），并已知悉我们的 {PP_URL}隐私政策{/PP_URL}。"
                }
              }
            })
          })]
        }), (0, _v1.jsx)(_v11.ModalFooter, {
          p: 0,
          mt: 5,
          px: 0,
          children: (0, _v1.jsx)(_v4.Button, {
            variant: "primary",
            size: "lg",
            width: "100%",
            onClick: _v10,
            isLoading: _v11,
            isDisabled: _v11,
            children: (0, _v18.translate)({
              singular: "Renew at {PERCENT}% discount",
              replacements: {
                PERCENT: _v2
              },
              dictionary: {
                es: {
                  singular: "Renovar con un descuento del {PERCENT}%"
                },
                "de-DE": {
                  singular: "Erneuern mit {PERCENT}% Rabatt"
                },
                "fr-FR": {
                  singular: "Renouvelez avec une réduction de {PERCENT}%"
                },
                "ja-JP": {
                  singular: "{PERCENT}%割引で更新"
                },
                "ko-KR": {
                  singular: "{PERCENT}% 할인으로 갱신"
                },
                "pt-BR": {
                  singular: "Renove com {PERCENT}% de desconto"
                },
                "zh-CN": {
                  singular: "以 {PERCENT}% 折扣续订"
                }
              }
            })
          })
        })]
      })]
    });
  }]);
}