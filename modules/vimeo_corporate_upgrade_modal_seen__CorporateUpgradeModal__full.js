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
    _v16 = _v0.i(0);
  let _v17 = "vimeo_corporate_upgrade_modal_seen";
  _v0.s(["CorporateUpgradeModal", 0, ({
    productName: _v0
  }) => {
    let [_v1, _v2] = (0, _v2.useState)(!1),
      {
        trackBillingB2bModalDisplayed: _v3,
        trackBillingB2bModalDismissed: _v4,
        trackBillingB2bModalExplorePlansClicked: _v5,
        trackBillingB2bModalContactSupportClicked: _v6,
        trackBillingPageRepackagingLearnMoreClicked: _v7
      } = (0, _v16.useBillingTracking)();
    (0, _v2.useEffect)(() => {
      try {
        localStorage.getItem(_v17) || (_v2(!0), _v3());
      } catch {}
    }, []);
    let _v8 = () => {
      _v4(), _v2(!1);
      try {
        localStorage.setItem(_v17, "1");
      } catch {}
    };
    return _v1 ? (0, _v1.jsxs)(_v7.Modal, {
      isOpen: _v1,
      onClose: _v8,
      size: ["full", "md"],
      scrollBehavior: "outside",
      children: [(0, _v1.jsx)(_v12.ModalOverlay, {}), (0, _v1.jsxs)(_v10.ModalContent, {
        containerProps: {
          padding: {
            base: "0 !important"
          }
        },
        maxW: {
          base: "100vw",
          md: "480px"
        },
        width: {
          base: "100vw",
          md: "480px"
        },
        height: {
          base: "100dvh",
          md: "auto"
        },
        minH: {
          base: "100dvh",
          md: "auto"
        },
        maxH: {
          base: "100dvh",
          md: "auto"
        },
        borderRadius: {
          base: "0",
          md: "16px"
        },
        margin: {
          base: "0",
          md: "auto"
        },
        overflow: "hidden",
        children: [(0, _v1.jsx)(_v9.ModalCloseButton, {
          zIndex: 1
        }), (0, _v1.jsx)(_v5.Image, {
          src: "https://i.vimeocdn.com/custom_asset/3be1a473a647baec9d516757c2d9e767",
          alt: "",
          width: "100%",
          height: "280px",
          objectFit: "cover",
          objectPosition: "center top"
        }), (0, _v1.jsxs)(_v8.ModalBody, {
          px: "36px",
          pt: "40px",
          pb: 0,
          children: [(0, _v1.jsx)(_v4.Header, {
            size: "md",
            mb: 4,
            children: (0, _v14.translate)({
              singular: "Meet your new business plan",
              dictionary: {
                es: {
                  singular: "Conozca su nuevo plan empresarial"
                },
                "de-DE": {
                  singular: "Lernen Sie Ihren neuen Business-Tarif kennen"
                },
                "fr-FR": {
                  singular: "Découvrez votre nouveau plan entreprise"
                },
                "ja-JP": {
                  singular: "新しいビジネスプランをご案内します"
                },
                "ko-KR": {
                  singular: "새로운 비즈니스 요금제를 만나보세요"
                },
                "pt-BR": {
                  singular: "Conheça seu novo plano empresarial"
                },
                "zh-CN": {
                  singular: "了解您的新企业方案"
                }
              }
            })
          }), (0, _v1.jsx)(_v13.Text, {
            variant: "body-md",
            color: "text-secondary",
            children: (0, _v14.translate)({
              singular: "Based on our {LINK_A}Plan Usage Policy{/LINK_A}, your account qualifies for the {BOLD}Vimeo {PRODUCT_NAME} Plan{/BOLD}, designed for corporate and collaborative use. To better support your workflow and ensure compliance with our {LINK_B}Plan Usage Policy{/LINK_B}, your subscription will automatically upgrade at your next renewal date at the {BOLD}Vimeo {PRODUCT_NAME} Plan{/BOLD} price. We've sent you an email with full details about the upcoming changes to your plan.",
              replacements: {
                PRODUCT_NAME: _v0,
                BOLD: _v0 => (0, _v1.jsx)("b", {
                  children: _v0
                }),
                LINK_A: _v0 => (0, _v1.jsx)(_v6.Link, {
                  href: "https://vimeo.com/legal/policies/plan-usage",
                  isExternal: !0,
                  variant: "inline-secondary",
                  textDecoration: "underline",
                  onClick: _v7,
                  children: _v0
                }),
                LINK_B: _v0 => (0, _v1.jsx)(_v6.Link, {
                  href: "https://vimeo.com/legal/policies/plan-usage",
                  isExternal: !0,
                  variant: "inline-secondary",
                  textDecoration: "underline",
                  onClick: _v7,
                  children: _v0
                })
              },
              dictionary: {
                es: {
                  singular: "De acuerdo con nuestra {LINK_A}Política de uso del plan{/LINK_A}, su cuenta califica para el {BOLD}Vimeo {PRODUCT_NAME} Plan{/BOLD}, diseñado para uso corporativo y colaborativo. Para apoyar mejor su flujo de trabajo y garantizar el cumplimiento de nuestra {LINK_B}Política de uso del plan{/LINK_B}, su suscripción se actualizará automáticamente en la fecha de su próxima renovación al precio del {BOLD}Vimeo {PRODUCT_NAME} Plan{/BOLD}. Le hemos enviado un correo electrónico con los detalles completos sobre los próximos cambios en su plan."
                },
                "de-DE": {
                  singular: "Basierend auf unserer {LINK_A}Nutzungsrichtlinie für Pläne{/LINK_A} erfüllt Ihr Konto die Voraussetzungen für den {BOLD}Vimeo {PRODUCT_NAME} Plan{/BOLD}, der für den unternehmensbezogenen und kollaborativen Einsatz konzipiert ist. Um Ihren Arbeitsablauf besser zu unterstützen und die Einhaltung unserer {LINK_B}Nutzungsrichtlinie für Pläne{/LINK_B} sicherzustellen, wird Ihr Abonnement bei Ihrer nächsten Verlängerung automatisch auf den {BOLD}Vimeo {PRODUCT_NAME} Plan{/BOLD} zum entsprechenden Preis umgestellt. Wir haben Ihnen eine E-Mail mit allen Details zu den bevorstehenden Änderungen an Ihrem Plan gesendet."
                },
                "fr-FR": {
                  singular: "En fonction de notre {LINK_A}Plan Usage Policy{/LINK_A}, votre compte est éligible au {BOLD}Vimeo {PRODUCT_NAME} Plan{/BOLD}, conçu pour une utilisation professionnelle et collaborative. Afin de mieux soutenir votre flux de travail et d’assurer la conformité avec notre {LINK_B}Plan Usage Policy{/LINK_B}, votre abonnement sera automatiquement mis à niveau lors de votre prochaine date de renouvellement, au tarif du {BOLD}Vimeo {PRODUCT_NAME} Plan{/BOLD}. Nous vous avons envoyé un e-mail contenant tous les détails concernant les changements à venir de votre plan."
                },
                "ja-JP": {
                  singular: "{LINK_A}プラン利用規約{/LINK_A}に基づき、お客様のアカウントは企業および共同作業向けに設計された{BOLD}Vimeo {PRODUCT_NAME} プラン{/BOLD}の対象となります。ワークフローをより良くサポートし、{LINK_B}プラン利用規約{/LINK_B}への準拠を確保するため、ご契約は次回の更新日に{BOLD}Vimeo {PRODUCT_NAME} プラン{/BOLD}の料金で自動的にアップグレードされます。プランの変更に関する詳細はメールでお送りしました。"
                },
                "ko-KR": {
                  singular: "{LINK_A}요금제 이용 정책{/LINK_A}에 따라 귀하의 계정은 기업 및 협업용으로 설계된 {BOLD}Vimeo {PRODUCT_NAME} 요금제{/BOLD}에 적합합니다. 워크플로를 보다 원활히 지원하고 {LINK_B}요금제 이용 정책{/LINK_B} 준수를 보장하기 위해, 귀하의 구독은 다음 갱신일에 {BOLD}Vimeo {PRODUCT_NAME} 요금제{/BOLD} 요금으로 자동 업그레이드됩니다. 귀하의 요금제에 대한 향후 변경 사항의 자세한 내용을 이메일로 보내드렸습니다."
                },
                "pt-BR": {
                  singular: "Com base em nossa {LINK_A}Política de Uso do Plano{/LINK_A}, sua conta é elegível para o {BOLD}Plano Vimeo {PRODUCT_NAME}{/BOLD}, projetado para uso corporativo e colaborativo. Para oferecer melhor suporte ao seu fluxo de trabalho e garantir conformidade com nossa {LINK_B}Política de Uso do Plano{/LINK_B}, sua assinatura será atualizada automaticamente na sua próxima data de renovação pelo preço do {BOLD}Plano Vimeo {PRODUCT_NAME}{/BOLD}. Enviamos um e-mail com todos os detalhes sobre as próximas alterações no seu plano."
                },
                "zh-CN": {
                  singular: "根据我们的{LINK_A}计划使用政策{/LINK_A}，您的账户符合{BOLD}Vimeo {PRODUCT_NAME} Plan{/BOLD}的资格，专为企业与协作使用而设计。为更好地支持您的工作流程并确保遵守我们的{LINK_B}计划使用政策{/LINK_B}，您的订阅将在下一次续订时按{BOLD}Vimeo {PRODUCT_NAME} Plan{/BOLD}的价格自动升级。我们已向您发送了一封电子邮件，包含有关您订阅计划即将变更的完整详情。"
                }
              }
            })
          })]
        }), (0, _v1.jsxs)(_v11.ModalFooter, {
          px: "36px",
          pt: "32px",
          pb: "40px",
          flexDirection: "column",
          alignItems: "center",
          children: [(0, _v1.jsx)(_v3.Button, {
            variant: "primary",
            size: "md",
            width: "100%",
            onClick: _v8,
            children: (0, _v14.translate)({
              singular: "Got it!",
              dictionary: {
                es: {
                  singular: "¡Entendido!"
                },
                "de-DE": {
                  singular: "Verstanden!"
                },
                "fr-FR": {
                  singular: "C'est noté !"
                },
                "ja-JP": {
                  singular: "承知しました！"
                },
                "ko-KR": {
                  singular: "알겠습니다!"
                },
                "pt-BR": {
                  singular: "Entendi!"
                },
                "zh-CN": {
                  singular: "知道了!"
                }
              }
            })
          }), (0, _v1.jsxs)(_v13.Text, {
            variant: "body-sm",
            color: "text-secondary",
            mt: 3,
            children: [(0, _v14.translate)({
              singular: "Not a business?",
              dictionary: {
                es: {
                  singular: "¿No es una empresa?"
                },
                "de-DE": {
                  singular: "Kein Unternehmen?"
                },
                "fr-FR": {
                  singular: "Vous n'êtes pas une entreprise ?"
                },
                "ja-JP": {
                  singular: "法人ではありませんか？"
                },
                "ko-KR": {
                  singular: "비즈니스 계정이 아니신가요?"
                },
                "pt-BR": {
                  singular: "Não é uma empresa?"
                },
                "zh-CN": {
                  singular: "不是企业?"
                }
              }
            }), " ", (0, _v1.jsx)(_v6.Link, {
              href: (0, _v15.buildUpgradePlanUrl)({
                paywallTrigger: "corporate_upgrade_modal_explore_plans_button",
                paywallLocation: "corporate_upgrade_modal",
                paywallFeature: "billing"
              }),
              variant: "inline-secondary",
              textDecoration: "underline",
              onClick: _v5,
              children: (0, _v14.translate)({
                singular: "Explore plans",
                dictionary: {
                  es: {
                    singular: "Explorar planes"
                  },
                  "de-DE": {
                    singular: "Pläne erkunden"
                  },
                  "fr-FR": {
                    singular: "Explorer les offres"
                  },
                  "ja-JP": {
                    singular: "プランを確認する"
                  },
                  "ko-KR": {
                    singular: "요금제 살펴보기"
                  },
                  "pt-BR": {
                    singular: "Explore os planos"
                  },
                  "zh-CN": {
                    singular: "查看方案"
                  }
                }
              })
            }), " ", (0, _v14.translate)({
              singular: "or",
              dictionary: {
                es: {
                  singular: "o"
                },
                "de-DE": {
                  singular: "oder"
                },
                "fr-FR": {
                  singular: "ou"
                },
                "ja-JP": {
                  singular: "または"
                },
                "ko-KR": {
                  singular: "또는"
                },
                "pt-BR": {
                  singular: "ou"
                },
                "zh-CN": {
                  singular: "或"
                }
              }
            }), " ", (0, _v1.jsx)(_v6.Link, {
              href: "https://vimeo.com/help/contact",
              isExternal: !0,
              variant: "inline-secondary",
              textDecoration: "underline",
              onClick: _v6,
              children: (0, _v14.translate)({
                singular: "Contact Support",
                dictionary: {
                  es: {
                    singular: "Contactar con soporte"
                  },
                  "de-DE": {
                    singular: "Support kontaktieren"
                  },
                  "fr-FR": {
                    singular: "Contacter l'assistance"
                  },
                  "ja-JP": {
                    singular: "サポートにお問い合わせ"
                  },
                  "ko-KR": {
                    singular: "지원팀에 문의"
                  },
                  "pt-BR": {
                    singular: "Fale com o suporte"
                  },
                  "zh-CN": {
                    singular: "联系客服"
                  }
                }
              })
            }), "."]
          })]
        })]
      })]
    }) : null;
  }]);
}