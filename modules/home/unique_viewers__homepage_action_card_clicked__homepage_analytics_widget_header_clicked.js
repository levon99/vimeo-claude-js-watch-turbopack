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
    _v9 = _v0.i(0);
  _v0.i(0);
  var _v10 = _v0.i(0),
    _v11 = _v0.i(0);
  let _v12 = _v0 => _v0 ? _v0.toLowerCase().replace(/\s+/g, "_").replace(/[^a-z0-9_]/g, "") : null,
    _v13 = {
      uniqueViewers: "unique_viewers"
    };
  function _v14() {
    let _v0 = (0, _v11.usePico)(),
      _v1 = (0, _v3.useCallback)(_v0 => null !== _v0 && (_v0.track("homepage_action_card_clicked", {
        homepage_action_card_type: _v0.homepageActionCardType
      }), !0), [_v0]),
      _v2 = (0, _v3.useCallback)(() => null !== _v0 && (_v0.track("homepage_analytics_widget_header_clicked", {}), !0), [_v0]),
      _v3 = (0, _v3.useCallback)(_v0 => null !== _v0 && (_v0.track("homepage_analytics_widget_tab_clicked", {
        homepage_analytics_widget_tab: _v13[_v0.homepageAnalyticsWidgetTab] ?? _v0.homepageAnalyticsWidgetTab
      }), !0), [_v0]),
      _v4 = (0, _v3.useCallback)(_v0 => null !== _v0 && (_v0.track("homepage_recents_carousel_navigated", {
        homepage_recents_direction: _v0.homepageRecentsDirection
      }), !0), [_v0]),
      _v5 = (0, _v3.useCallback)(_v0 => null !== _v0 && (_v0.track("homepage_recents_thumbnail_quick_action_clicked", {
        clip_id: _v0.clipId,
        homepage_recents_thumbnail_quick_action: _v0.homepageRecentsThumbnailQuickAction
      }), !0), [_v0]),
      _v6 = (0, _v3.useCallback)(_v0 => null !== _v0 && (_v0.track("homepage_recents_video_clicked", {
        clip_id: _v0.clipId
      }), !0), [_v0]),
      _v7 = (0, _v3.useCallback)(_v0 => null !== _v0 && (_v0.track("homepage_watch_history_carousel_navigated", {
        homepage_watch_history_direction: _v0.homepageWatchHistoryDirection
      }), !0), [_v0]),
      _v8 = (0, _v3.useCallback)(_v0 => null !== _v0 && (_v0.track("homepage_watch_history_video_clicked", {
        clip_id: _v0.clipId,
        homepage_watch_history_position: _v0.homepageWatchHistoryPosition
      }), !0), [_v0]),
      _v9 = (0, _v3.useCallback)(_v0 => {
        let _v1 = _v12(_v0);
        return null !== _v0 && !!_v1 && (_v0.track("homepage_new_update_card_displayed", {
          homepage_new_update_card_type: _v1
        }), !0);
      }, [_v0]),
      _v10 = (0, _v3.useCallback)(_v0 => {
        let _v1 = _v12(_v0);
        return null !== _v0 && !!_v1 && (_v0.track("homepage_new_update_card_cta_clicked", {
          homepage_new_update_card_type: _v1
        }), !0);
      }, [_v0]);
    return {
      trackHomepageActionCardClicked: _v1,
      trackHomepageAnalyticsWidgetHeaderClicked: _v2,
      trackHomepageAnalyticsWidgetTabClicked: _v3,
      trackHomepageRecentsCarouselNavigated: _v4,
      trackHomepageRecentsThumbnailQuickActionClicked: _v5,
      trackHomepageRecentsVideoClicked: _v6,
      trackHomepageWatchHistoryCarouselNavigated: _v7,
      trackHomepageWatchHistoryVideoClicked: _v8,
      trackHomepageNewUpdateCardDisplayed: _v9,
      trackHomepageNewUpdateCardCtaClicked: _v10,
      trackHomepageNewUpdateCardDismissed: (0, _v3.useCallback)(_v0 => {
        let _v1 = _v12(_v0);
        return null !== _v0 && !!_v1 && (_v0.track("homepage_new_update_card_dismissed", {
          homepage_new_update_card_type: _v1
        }), !0);
      }, [_v0]),
      trackEntitlementsRestrictionsStatus: (0, _v3.useCallback)(({
        restrictions: _v0
      }) => null !== _v0 && (_v0.track("entitlements_restrictions_status", {
        restrictions: _v0
      }), !0), [_v0])
    };
  }
  var _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0);
  let _v21 = ({
    isSuppressed: _v0 = !1
  } = {}) => {
    let {
        settings: _v1
      } = (0, _v16.useOrionSettings)(),
      _v2 = (0, _v3.useContext)(_v17.ViewerContext),
      _v3 = _v2?.teamUser?.ownerId ?? _v2?.user?.id,
      _v4 = "home" === _v1.corporate_upgrade_modal_page,
      _v5 = _v4 && !!_v2 && !!_v3,
      {
        data: _v6
      } = (0, _v15.default)(_v5 ? ["corporate-upgrade-modal/membership", _v3] : null, () => (0, _v20.requestMembershipInfo)(_v2, _v3), {
        revalidateIfStale: !1,
        revalidateOnFocus: !1,
        revalidateOnReconnect: !1
      }),
      {
        shouldRender: _v7,
        productName: _v8
      } = (0, _v19.useCorporateUpgradeModalState)(_v6);
    return !_v0 && _v4 && _v7 ? (0, _v1.jsx)(_v18.CorporateUpgradeModal, {
      productName: _v8
    }) : null;
  };
  var _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0);
  let _v34 = "vimeo_repackaging_modal_seen",
    _v35 = {
      core: "https://i.vimeocdn.com/custom_asset/d81bf3210ba59b3180a5a5ca5317af61",
      professional: "https://i.vimeocdn.com/custom_asset/672f2b3f3ce61600976e835a33efd941"
    },
    _v36 = ({
      tier: _v0,
      productName: _v1,
      formattedPrice: _v2
    }) => {
      let [_v3, _v4] = (0, _v3.useState)(!1),
        {
          trackRepackagingModalDisplayed: _v5,
          trackRepackagingModalDismissed: _v6
        } = (0, _v33.useBillingTracking)();
      (0, _v3.useEffect)(() => {
        try {
          localStorage.getItem(_v34) || (_v4(!0), _v5({
            tier: _v0
          }));
        } catch {}
      }, []);
      let _v7 = () => {
        _v6({
          tier: _v0
        }), _v4(!1);
        try {
          localStorage.setItem(_v34, "1");
        } catch {}
      };
      if (!_v3) return null;
      let _v8 = _v35[_v0];
      return (0, _v1.jsxs)(_v25.Modal, {
        isOpen: _v3,
        onClose: _v7,
        size: ["full", "md"],
        scrollBehavior: "outside",
        children: [(0, _v1.jsx)(_v30.ModalOverlay, {}), (0, _v1.jsxs)(_v28.ModalContent, {
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
          children: [(0, _v1.jsx)(_v27.ModalCloseButton, {
            zIndex: 1
          }), _v8 && (0, _v1.jsx)(_v24.Image, {
            src: _v8,
            alt: "",
            width: "100%",
            height: "220px",
            objectFit: "cover",
            objectPosition: "center top"
          }), (0, _v1.jsxs)(_v26.ModalBody, {
            px: "36px",
            pt: "40px",
            pb: 0,
            children: [(0, _v1.jsx)(_v23.Header, {
              size: "md",
              mb: 4,
              children: (0, _v32.translate)({
                singular: "Meet your new {PRODUCT_NAME} plan",
                replacements: {
                  PRODUCT_NAME: _v1
                },
                dictionary: {
                  es: {
                    singular: "Conoce tu nuevo plan {PRODUCT_NAME}"
                  },
                  "de-DE": {
                    singular: "Lernen Sie Ihren neuen {PRODUCT_NAME}-Plan kennen"
                  },
                  "fr-FR": {
                    singular: "Découvrez votre nouveau forfait {PRODUCT_NAME}"
                  },
                  "ja-JP": {
                    singular: "新しい {PRODUCT_NAME} プランをご紹介します"
                  },
                  "ko-KR": {
                    singular: "새로운 {PRODUCT_NAME} 요금제를 소개합니다"
                  },
                  "pt-BR": {
                    singular: "Conheça o seu novo plano {PRODUCT_NAME}"
                  },
                  "zh-CN": {
                    singular: "了解全新的 {PRODUCT_NAME} 计划"
                  }
                }
              })
            }), (0, _v1.jsx)(_v31.Text, {
              variant: "body-md",
              color: "text-secondary",
              children: (0, _v32.translate)({
                singular: "We're introducing new Vimeo plans for individuals. To keep your account and videos running smoothly, your subscription will renew under the new {PRODUCT_NAME} plan at your next renewal, billed at the {PRODUCT_NAME} price of {PRICE}. You can cancel anytime in your Billing settings. We've sent you an email with the full details about the upcoming changes to your plan.",
                replacements: {
                  PRODUCT_NAME: _v1,
                  PRICE: _v2
                },
                dictionary: {
                  es: {
                    singular: "Estamos introduciendo nuevos planes de Vimeo para usuarios individuales. Para que tu cuenta y tus videos funcionen sin problemas, tu suscripción se renovará bajo el nuevo plan {PRODUCT_NAME} en tu próxima renovación, y se facturará al precio de {PRODUCT_NAME} de {PRICE}. Puedes cancelar en cualquier momento en Configuración de facturación. Te hemos enviado un correo electrónico con los detalles completos sobre los próximos cambios en tu plan."
                  },
                  "de-DE": {
                    singular: "Wir führen neue Vimeo-Tarife für Privatpersonen ein. Damit Ihr Konto und Ihre Videos reibungslos weiterlaufen, wird Ihr Abonnement bei der nächsten Verlängerung auf den neuen {PRODUCT_NAME}-Plan umgestellt und zum {PRODUCT_NAME}-Preis von {PRICE} abgerechnet. Sie können jederzeit in Ihren Abrechnungseinstellungen kündigen. Wir haben Ihnen eine E‑Mail mit allen Details zu den bevorstehenden Änderungen an Ihrem Plan geschickt."
                  },
                  "fr-FR": {
                    singular: "Nous lançons de nouveaux forfaits Vimeo pour les particuliers. Pour assurer le bon fonctionnement de votre compte et de vos vidéos, votre abonnement sera renouvelé sous le nouveau forfait {PRODUCT_NAME} à votre prochain renouvellement, facturé au tarif {PRODUCT_NAME} de {PRICE}. Vous pouvez résilier à tout moment dans vos paramètres de facturation. Nous vous avons envoyé un e‑mail contenant tous les détails concernant les modifications à venir de votre forfait."
                  },
                  "ja-JP": {
                    singular: "個人向けの新しい Vimeo プランを導入します。アカウントと動画をスムーズにご利用いただくため、次回の更新時にサブスクリプションは新しい {PRODUCT_NAME} プランで更新され、{PRODUCT_NAME} の料金である {PRICE} が請求されます。請求設定からいつでもキャンセルできます。プランの今後の変更に関する詳細はメールでお送りしました。"
                  },
                  "ko-KR": {
                    singular: "개인용 새로운 Vimeo 요금제를 도입합니다. 계정과 동영상이 원활하게 운영되도록 하기 위해, 다음 갱신 시 귀하의 구독은 새로운 {PRODUCT_NAME} 요금제로 갱신되며, {PRODUCT_NAME} 요금인 {PRICE}로 청구됩니다. 청구 설정에서 언제든지 취소할 수 있습니다. 요금제 변경 예정 사항에 대한 자세한 내용을 이메일로 보내드렸습니다."
                  },
                  "pt-BR": {
                    singular: "Estamos apresentando novos planos do Vimeo para usuários individuais. Para manter sua conta e seus vídeos funcionando sem problemas, sua assinatura será renovada no próximo vencimento no novo plano {PRODUCT_NAME}, e a cobrança será feita pelo preço do plano {PRODUCT_NAME}, que é {PRICE}. Você pode cancelar a qualquer momento nas configurações de cobrança. Enviamos a você um e-mail com todos os detalhes sobre as próximas alterações no seu plano."
                  },
                  "zh-CN": {
                    singular: "我们即将为个人用户推出新的 Vimeo 计划。为确保您的账号和视频正常运行，您的订阅将在下次续订时转为新的 {PRODUCT_NAME} 计划，并按 {PRODUCT_NAME} 价格 {PRICE} 收费。您可以随时在“账单设置”中取消订阅。我们已向您发送了一封电子邮件，详述有关您计划即将变更的全部信息。"
                  }
                }
              })
            })]
          }), (0, _v1.jsx)(_v29.ModalFooter, {
            px: "36px",
            pt: "32px",
            pb: "40px",
            flexDirection: "column",
            alignItems: "center",
            children: (0, _v1.jsx)(_v22.Button, {
              variant: "primary",
              size: "md",
              width: "100%",
              onClick: _v7,
              children: (0, _v32.translate)({
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
            })
          })]
        })]
      });
    };
  var _v37 = _v0.i(0);
  let _v38 = {
      core: "Core",
      professional: "Professional"
    },
    _v39 = ({
      isSuppressed: _v0 = !1
    } = {}) => {
      let {
          settings: _v1
        } = (0, _v16.useOrionSettings)(),
        _v2 = (0, _v3.useContext)(_v17.ViewerContext),
        _v3 = _v2?.teamUser?.ownerId ?? _v2?.user?.id,
        _v4 = !0 === _v1.show_repackaging_notification_modal,
        _v5 = _v4 && !!_v2 && !!_v3,
        {
          data: _v6
        } = (0, _v15.default)(_v5 ? ["repackaging-modal/membership", _v3] : null, () => (0, _v20.requestMembershipInfo)(_v2, _v3), {
          revalidateIfStale: !1,
          revalidateOnFocus: !1,
          revalidateOnReconnect: !1
        }),
        {
          shouldRender: _v7,
          tier: _v8,
          productName: _v9,
          formattedPrice: _v10
        } = function (_v0) {
          var _v1;
          let _v2,
            {
              scheduledOrder: _v3,
              hasScheduledDowngrade: _v4
            } = (0, _v37.useScheduledOrder)(_v0?.subscriptionId, _v0?.tier, _v0?.hasAutorenew),
            _v5 = (_v1 = _v3?.productName, "core" === (_v2 = _v1?.trim().toLowerCase().replace(/^vimeo\s+/, "") ?? "") ? "core" : "professional" === _v2 ? "professional" : null),
            _v6 = _v3?.price?.formatted ?? _v3?.monthlyPrice?.formatted ?? "";
          return {
            shouldRender: _v4 && !!_v5 && !!_v6,
            tier: _v5,
            productName: _v5 ? _v38[_v5] : "",
            formattedPrice: _v6
          };
        }(_v6);
      return !_v0 && _v4 && _v7 && _v8 ? (0, _v1.jsx)(_v36, {
        tier: _v8,
        productName: _v9,
        formattedPrice: _v10
      }) : null;
    };
  var _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0);
  let _v45 = (0, _v44.rem)(0),
    _v46 = {
      contentMaxWidth: _v45,
      contentInlineStart: (0, _v44.rem)(24)
    };
  function _v47({
    children: _v0
  }) {
    return (0, _v1.jsx)(_v43.Flex, {
      justifyContent: "center",
      backgroundColor: "background",
      children: (0, _v1.jsx)(_v43.Flex, {
        maxW: _v45,
        w: "100%",
        padding: "300",
        paddingTop: {
          base: "12px",
          md: "300"
        },
        gap: "lg",
        flexDirection: "column",
        children: _v0
      })
    });
  }
  let _v48 = "home_watch_redirect",
    _v49 = {
      lastShownAt: 0,
      dismissalCount: 0
    };
  function _v50(_v0) {
    try {
      let _v0 = window.localStorage.getItem(_v0);
      if (null == _v0) return _v49;
      let _v1 = JSON.parse(_v0);
      return "object" == typeof _v1 && null !== _v1 && "number" == typeof _v1.lastShownAt && "number" == typeof _v1.dismissalCount ? _v1 : _v49;
    } catch {
      return _v49;
    }
  }
  function _v51(_v0, _v1) {
    try {
      window.localStorage.setItem(_v0, JSON.stringify(_v1));
    } catch {}
  }
  var _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0),
    _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v61 = _v0.i(0),
    _v62 = _v0.i(0),
    _v63 = _v0.i(0);
  let _v64 = [{
      icon: (0, _v1.jsx)(_v0 => (0, _v1.jsx)(_v63.Icon, {
        viewBox: "0 0 24 24",
        ..._v0,
        fill: "none",
        children: (0, _v1.jsx)("path", {
          d: "M11 9h4a1 1 0 1 0 0-2h-2V6a1 1 0 0 0-2 0v1a3 3 0 0 0 0 6h2a1 1 0 0 1 0 2H9a1 1 0 0 0 0 2h2v1a1 1 0 0 0 2 0v-1a3 3 0 0 0 0-6h-2a1 1 0 0 1 0-2Zm1-8a11 11 0 1 0 0 22 11 11 0 0 0 0-22Zm0 20a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z",
          fill: "currentColor"
        })
      }), {
        boxSize: "24px"
      }),
      tag: () => (0, _v32.translate)({
        singular: "Tips and donations",
        dictionary: {
          es: {
            singular: "Propinas y donaciones"
          },
          "de-DE": {
            singular: "Trinkgelder und Spenden"
          },
          "fr-FR": {
            singular: "Pourboires et dons"
          },
          "ja-JP": {
            singular: "チップと寄付"
          },
          "ko-KR": {
            singular: "팁 및 기부"
          },
          "pt-BR": {
            singular: "Gorjetas e doações"
          },
          "zh-CN": {
            singular: "打赏与捐赠"
          }
        }
      }),
      description: () => (0, _v32.translate)({
        singular: "Let viewers support your work with one-time contributions",
        dictionary: {
          es: {
            singular: "Permite que los espectadores apoyen tu trabajo con contribuciones puntuales"
          },
          "de-DE": {
            singular: "Ermöglichen Sie Zuschauern, Ihre Arbeit mit einmaligen Beiträgen zu unterstützen."
          },
          "fr-FR": {
            singular: "Permettez à vos spectateurs de soutenir votre travail par des contributions ponctuelles"
          },
          "ja-JP": {
            singular: "視聴者が一度きりの寄付であなたの作品を支援できるようにする"
          },
          "ko-KR": {
            singular: "시청자가 일회성 기부로 창작 활동을 지원할 수 있도록 하세요"
          },
          "pt-BR": {
            singular: "Permita que os espectadores apoiem seu trabalho com contribuições pontuais"
          },
          "zh-CN": {
            singular: "让观众通过一次性捐款支持你的作品"
          }
        }
      })
    }, {
      icon: (0, _v1.jsx)(_v0 => (0, _v1.jsx)(_v63.Icon, {
        viewBox: "0 0 24 24",
        ..._v0,
        fill: "none",
        children: (0, _v1.jsx)("path", {
          d: "m10.46 6 .54-.59V9a1 1 0 0 0 2 0V5.41l.54.55A1 1 0 0 0 15 6a1.001 1.001 0 0 0 0-1.42l-2.29-2.29a1 1 0 0 0-.33-.21 1 1 0 0 0-.76 0 1 1 0 0 0-.33.21L9 4.54A1.032 1.032 0 1 0 10.46 6ZM12 12a3 3 0 1 0 0 5.999 3 3 0 0 0 0-6Zm0 4a1 1 0 1 1 0-2.002A1 1 0 0 1 12 16Zm-7-1a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm14 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm1-7h-4a1 1 0 1 0 0 2h4a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h4a1 1 0 0 0 0-2H4a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3Z",
          fill: "currentColor"
        })
      }), {
        boxSize: "24px"
      }),
      tag: () => (0, _v32.translate)({
        singular: "Paid subscriptions",
        dictionary: {
          es: {
            singular: "Suscripciones de pago"
          },
          "de-DE": {
            singular: "Bezahlte Abonnements"
          },
          "fr-FR": {
            singular: "Abonnements payants"
          },
          "ja-JP": {
            singular: "有料サブスクリプション"
          },
          "ko-KR": {
            singular: "유료 구독"
          },
          "pt-BR": {
            singular: "Assinaturas pagas"
          },
          "zh-CN": {
            singular: "付费订阅"
          }
        }
      }),
      description: () => (0, _v32.translate)({
        singular: "Offer exclusive content to monthly supporters",
        dictionary: {
          es: {
            singular: "Ofrece contenido exclusivo a los suscriptores mensuales"
          },
          "de-DE": {
            singular: "Bieten Sie monatlichen Unterstützern exklusive Inhalte an."
          },
          "fr-FR": {
            singular: "Proposez du contenu exclusif aux abonnés mensuels"
          },
          "ja-JP": {
            singular: "月額サポーターに限定コンテンツを提供する"
          },
          "ko-KR": {
            singular: "월간 후원자에게 독점 콘텐츠를 제공하세요"
          },
          "pt-BR": {
            singular: "Ofereça conteúdo exclusivo a apoiadores mensais"
          },
          "zh-CN": {
            singular: "向每月支持者提供独家内容"
          }
        }
      })
    }, {
      icon: (0, _v1.jsx)(_v0 => (0, _v1.jsx)(_v63.Icon, {
        viewBox: "0 0 24 24",
        ..._v0,
        fill: "none",
        children: (0, _v1.jsx)("path", {
          d: "M7 16a1.5 1.5 0 0 0 1.5-1.5.77.77 0 0 0 0-.15l2.79-2.79h.46l1.61 1.61v.08a1.5 1.5 0 1 0 3 0v-.08L20 9.5A1.5 1.5 0 1 0 18.5 8a.767.767 0 0 0 0 .15l-3.61 3.61h-.16L13 10a1.5 1.5 0 1 0-3 0l-3 3a1.5 1.5 0 1 0 0 3Zm13.5 4h-17V3a1 1 0 0 0-2 0v18a1 1 0 0 0 1 1h18a1 1 0 0 0 0-2Z",
          fill: "currentColor"
        })
      }), {
        boxSize: "24px"
      }),
      tag: () => (0, _v32.translate)({
        singular: "Revenue dashboard",
        dictionary: {
          es: {
            singular: "Panel de ingresos"
          },
          "de-DE": {
            singular: "Einnahmen-Dashboard"
          },
          "fr-FR": {
            singular: "Tableau de bord des revenus"
          },
          "ja-JP": {
            singular: "収益ダッシュボード"
          },
          "ko-KR": {
            singular: "수익 대시보드"
          },
          "pt-BR": {
            singular: "Painel de receitas"
          },
          "zh-CN": {
            singular: "收益仪表板"
          }
        }
      }),
      description: () => (0, _v32.translate)({
        singular: "Track your earnings and growth in one place",
        dictionary: {
          es: {
            singular: "Controla tus ingresos y tu crecimiento en un solo lugar"
          },
          "de-DE": {
            singular: "Verfolgen Sie Ihre Einnahmen und Ihr Wachstum an einem Ort"
          },
          "fr-FR": {
            singular: "Suivez vos revenus et votre croissance en un seul endroit"
          },
          "ja-JP": {
            singular: "収益と成長を一か所で把握する"
          },
          "ko-KR": {
            singular: "수익과 성장 추이를 한곳에서 확인하세요"
          },
          "pt-BR": {
            singular: "Acompanhe seus ganhos e seu crescimento em um só lugar"
          },
          "zh-CN": {
            singular: "在一个地方跟踪你的收益和增长"
          }
        }
      })
    }],
    _v65 = ({
      isOpen: _v0,
      onClose: _v1,
      onWaitlistJoin: _v2
    }) => {
      let [_v3, _v4] = (0, _v3.useState)(""),
        _v5 = () => {
          _v3 && (_v2(_v3), _v4(""));
        };
      return (0, _v1.jsxs)(_v25.Modal, {
        isOpen: _v0,
        onClose: _v1,
        size: "md",
        children: [(0, _v1.jsx)(_v30.ModalOverlay, {}), (0, _v1.jsxs)(_v28.ModalContent, {
          borderRadius: "20px",
          maxWidth: "480px",
          overflow: "clip",
          children: [(0, _v1.jsx)(_v27.ModalCloseButton, {}), (0, _v1.jsx)(_v61.ModalHeader, {
            paddingBottom: "0",
            children: (0, _v1.jsx)(_v31.Text, {
              variant: "heading-md",
              children: (0, _v32.translate)({
                singular: "Earn directly from your audience",
                dictionary: {
                  es: {
                    singular: "Obtén ingresos directamente de tu audiencia"
                  },
                  "de-DE": {
                    singular: "Verdienen Sie direkt mit Ihrem Publikum"
                  },
                  "fr-FR": {
                    singular: "Gagnez directement auprès de votre audience"
                  },
                  "ja-JP": {
                    singular: "視聴者から直接収益を得る"
                  },
                  "ko-KR": {
                    singular: "시청자로부터 직접 수익을 얻으세요"
                  },
                  "pt-BR": {
                    singular: "Ganhe diretamente com seu público"
                  },
                  "zh-CN": {
                    singular: "直接从观众处获取收入"
                  }
                }
              })
            })
          }), (0, _v1.jsxs)(_v26.ModalBody, {
            children: [(0, _v1.jsx)(_v31.Text, {
              variant: "body-lg",
              children: (0, _v32.translate)({
                singular: "We're building new ways for creators to monetize on Vimeo. Here's what's coming:",
                dictionary: {
                  es: {
                    singular: "Estamos desarrollando nuevas formas para que los creadores moneticen en Vimeo. Esto es lo que viene:"
                  },
                  "de-DE": {
                    singular: "Wir entwickeln neue Wege, mit denen Creator auf Vimeo Geld verdienen können. Das erwartet Sie:"
                  },
                  "fr-FR": {
                    singular: "Nous développons de nouvelles façons pour les créateurs de monétiser sur Vimeo. Voici ce qui arrive:"
                  },
                  "ja-JP": {
                    singular: "私たちはクリエイターがVimeoで収益化するための新しい方法を構築しています。以下が今後の予定です:"
                  },
                  "ko-KR": {
                    singular: "우리는 크리에이터가 Vimeo에서 수익화할 수 있는 새로운 방법을 개발하고 있습니다. 곧 제공될 내용은 다음과 같습니다:"
                  },
                  "pt-BR": {
                    singular: "Estamos desenvolvendo novas formas para que criadores monetizem no Vimeo. Veja o que está por vir:"
                  },
                  "zh-CN": {
                    singular: "我们正在为创作者在 Vimeo 上构建新的变现方式。以下是即将推出的功能："
                  }
                }
              })
            }), (0, _v1.jsx)(_v43.Flex, {
              direction: "column",
              gap: "lg",
              paddingX: "sm",
              marginTop: "xl",
              children: _v64.map(_v0 => {
                let _v1 = _v0.tag();
                return (0, _v1.jsxs)(_v43.Flex, {
                  gap: "md",
                  align: "flex-start",
                  children: [(0, _v1.jsx)(_v57.Box, {
                    flexShrink: 0,
                    color: "text-secondary",
                    children: _v0.icon
                  }), (0, _v1.jsxs)(_v43.Flex, {
                    direction: "column",
                    gap: "xs",
                    children: [(0, _v1.jsx)(_v62.Tag, {
                      size: "sm",
                      backgroundColor: "fill-brand",
                      _hover: {
                        backgroundColor: "fill-brand"
                      },
                      children: (0, _v1.jsx)(_v62.TagLabel, {
                        fontWeight: "bold",
                        children: _v1
                      })
                    }), (0, _v1.jsx)(_v31.Text, {
                      variant: "body-lg",
                      paddingX: "sm",
                      children: _v0.description()
                    })]
                  })]
                }, _v1);
              })
            }), (0, _v1.jsxs)(_v57.Box, {
              backgroundColor: "rgba(67,107,153,0.05)",
              borderRadius: "md",
              padding: "lg",
              marginTop: "xl",
              children: [(0, _v1.jsxs)(_v31.Text, {
                variant: "heading-sm",
                fontWeight: "medium",
                children: [(0, _v32.translate)({
                  singular: "Be the first to try it.",
                  dictionary: {
                    es: {
                      singular: "Sé el primero en probarlo."
                    },
                    "de-DE": {
                      singular: "Seien Sie der Erste, der es ausprobiert."
                    },
                    "fr-FR": {
                      singular: "Soyez le premier à l'essayer."
                    },
                    "ja-JP": {
                      singular: "いち早くお試しください。"
                    },
                    "ko-KR": {
                      singular: "가장 먼저 사용해 보세요."
                    },
                    "pt-BR": {
                      singular: "Seja o primeiro a experimentar."
                    },
                    "zh-CN": {
                      singular: "率先体验。"
                    }
                  }
                }), "\n", (0, _v32.translate)({
                  singular: "Join the waitlist for early access.",
                  dictionary: {
                    es: {
                      singular: "Únete a la lista de espera para acceso anticipado."
                    },
                    "de-DE": {
                      singular: "Treten Sie der Warteliste bei, um frühzeitigen Zugang zu erhalten."
                    },
                    "fr-FR": {
                      singular: "Rejoignez la liste d'attente pour un accès anticipé."
                    },
                    "ja-JP": {
                      singular: "早期アクセスをご希望の方はウェイトリストにご登録ください。"
                    },
                    "ko-KR": {
                      singular: "조기 이용을 원하시면 대기자 명단에 등록하세요."
                    },
                    "pt-BR": {
                      singular: "Inscreva-se na lista de espera para acesso antecipado."
                    },
                    "zh-CN": {
                      singular: "加入候补名单以抢先体验。"
                    }
                  }
                })]
              }), (0, _v1.jsxs)(_v59.InputGroup, {
                size: "lg",
                marginTop: "md",
                display: ["none", "flex"],
                children: [(0, _v1.jsx)(_v58.Input, {
                  placeholder: "john@email.com",
                  type: "email",
                  value: _v3,
                  onChange: _v0 => _v4(_v0.target.value),
                  onKeyDown: _v0 => "Enter" === _v0.key && _v5(),
                  borderRadius: "lg"
                }), (0, _v1.jsx)(_v60.InputRightElement, {
                  width: "auto",
                  paddingRight: "xs",
                  children: (0, _v1.jsx)(_v22.Button, {
                    size: "md",
                    isDisabled: !_v3,
                    onClick: _v5,
                    children: (0, _v32.translate)({
                      singular: "Join the waitlist",
                      dictionary: {
                        es: {
                          singular: "Únete a la lista de espera"
                        },
                        "de-DE": {
                          singular: "Treten Sie der Warteliste bei"
                        },
                        "fr-FR": {
                          singular: "Rejoindre la liste d'attente"
                        },
                        "ja-JP": {
                          singular: "ウェイトリストに登録する"
                        },
                        "ko-KR": {
                          singular: "대기자 명단에 등록하세요"
                        },
                        "pt-BR": {
                          singular: "Inscreva-se na lista de espera"
                        },
                        "zh-CN": {
                          singular: "加入候补名单"
                        }
                      }
                    })
                  })
                })]
              }), (0, _v1.jsxs)(_v43.Flex, {
                direction: "column",
                gap: "sm",
                marginTop: "md",
                display: ["flex", "none"],
                children: [(0, _v1.jsx)(_v58.Input, {
                  size: "lg",
                  placeholder: "john@email.com",
                  type: "email",
                  value: _v3,
                  onChange: _v0 => _v4(_v0.target.value),
                  onKeyDown: _v0 => "Enter" === _v0.key && _v5(),
                  borderRadius: "lg",
                  minHeight: "var(--vimeo-sizes-lg)"
                }), (0, _v1.jsx)(_v22.Button, {
                  size: "md",
                  width: "100%",
                  isDisabled: !_v3,
                  onClick: _v5,
                  children: (0, _v32.translate)({
                    singular: "Join the waitlist",
                    dictionary: {
                      es: {
                        singular: "Únete a la lista de espera"
                      },
                      "de-DE": {
                        singular: "Treten Sie der Warteliste bei"
                      },
                      "fr-FR": {
                        singular: "Rejoindre la liste d'attente"
                      },
                      "ja-JP": {
                        singular: "ウェイトリストに登録する"
                      },
                      "ko-KR": {
                        singular: "대기자 명단에 등록하세요"
                      },
                      "pt-BR": {
                        singular: "Inscreva-se na lista de espera"
                      },
                      "zh-CN": {
                        singular: "加入候补名单"
                      }
                    }
                  })
                })]
              })]
            })]
          })]
        })]
      });
    };
  var _v66 = _v0.i(0),
    _v67 = _v0.i(0),
    _v68 = _v0.i(0),
    _v69 = _v0.i(0);
  let _v70 = "OBf2Ab4OaXechWavJ4GGNhjkMts",
    _v71 = "global-content-rating-handler",
    _v72 = {
      SAFE: {
        label: (0, _v32.translate)({
          singular: "All Audiences",
          dictionary: {
            es: {
              singular: "Todos los públicos"
            },
            "de-DE": {
              singular: "Alle Zuschauergruppen"
            },
            "fr-FR": {
              singular: "Tout public"
            },
            "ja-JP": {
              singular: "すべての視聴者"
            },
            "ko-KR": {
              singular: "모든 시청자"
            },
            "pt-BR": {
              singular: "Para Todas as Idades"
            },
            "zh-CN": {
              singular: "所有观众"
            }
          }
        }),
        value: "safe"
      },
      MATURE: {
        label: (0, _v32.translate)({
          singular: "Mature",
          dictionary: {
            es: {
              singular: "Para adultos"
            },
            "de-DE": {
              singular: "Nicht jugendfrei"
            },
            "fr-FR": {
              singular: "Adulte"
            },
            "ja-JP": {
              singular: "成人向け"
            },
            "ko-KR": {
              singular: "성인"
            },
            "pt-BR": {
              singular: "Adulto"
            },
            "zh-CN": {
              singular: "成人"
            }
          }
        }),
        value: "mature"
      }
    },
    _v73 = [{
      label: (0, _v32.translate)({
        singular: "Profanity / sexually suggestive content",
        dictionary: {
          es: {
            singular: "Palabras obscenas/contenido sexualmente sugestivo"
          },
          "de-DE": {
            singular: "Obszöne / sexuell anzügliche Inhalte"
          },
          "fr-FR": {
            singular: "Contenu à caractère injurieux /​ érotique"
          },
          "ja-JP": {
            singular: "冒涜／性的に挑発的な内容"
          },
          "ko-KR": {
            singular: "욕설 / 선정적 콘텐츠"
          },
          "pt-BR": {
            singular: "Profanidade/conteúdo sexual sugestivo"
          },
          "zh-CN": {
            singular: "粗言秽语/性暗示内容"
          }
        }
      }),
      value: "language"
    }, {
      label: (0, _v32.translate)({
        singular: "Drug / alcohol use",
        dictionary: {
          es: {
            singular: "Consumo de drogas/alcohol"
          },
          "de-DE": {
            singular: "Drogen‑/Alkoholkonsum"
          },
          "fr-FR": {
            singular: "Consommation de drogue / alcool"
          },
          "ja-JP": {
            singular: "薬物／アルコール使用"
          },
          "ko-KR": {
            singular: "약물/알코올 사용"
          },
          "pt-BR": {
            singular: "Uso de drogas/álcool"
          },
          "zh-CN": {
            singular: "药物/酒精使用"
          }
        }
      }),
      value: "drugs"
    }, {
      label: (0, _v32.translate)({
        singular: "Violence",
        dictionary: {
          es: {
            singular: "Violencia"
          },
          "de-DE": {
            singular: "Gewalt"
          },
          "ja-JP": {
            singular: "暴力"
          },
          "ko-KR": {
            singular: "폭력"
          },
          "pt-BR": {
            singular: "Violência"
          },
          "zh-CN": {
            singular: "暴力"
          }
        }
      }),
      value: "violence"
    }, {
      label: (0, _v32.translate)({
        singular: "Nudity",
        dictionary: {
          es: {
            singular: "Desnudez"
          },
          "de-DE": {
            singular: "Nacktheit"
          },
          "fr-FR": {
            singular: "Nudité"
          },
          "ja-JP": {
            singular: "ヌード"
          },
          "ko-KR": {
            singular: "나체"
          },
          "pt-BR": {
            singular: "Nudez"
          },
          "zh-CN": {
            singular: "裸露"
          }
        }
      }),
      value: "nudity"
    }];
  var _v74 = _v0.i(0),
    _v75 = _v0.i(0);
  let _v76 = () => {
    let _v0 = (0, _v5.useToast)(),
      {
        isOpen: _v1,
        onClose: _v2,
        onOpen: _v3
      } = (0, _v69.useDisclosure)(),
      _v4 = (0, _v3.useRef)(!1),
      _v5 = (0, _v3.useRef)(!1),
      _v6 = (0, _v3.useRef)(!1),
      [_v7, _v8] = (0, _v3.useState)(),
      [_v9, _v10] = (0, _v3.useState)([]),
      {
        showBanner: _v11,
        isLoading: _v12,
        patchData: _v13,
        isPatchLoading: _v14,
        updateDefaultRatings: _v15,
        updateError: _v16,
        patchCalled: _v17
      } = (() => {
        let _v0 = (0, _v42.useViewer)(),
          _v1 = _v0?.teamUser?.ownerId ?? _v0?.user?.id,
          {
            data: _v2,
            mutate: _v3,
            isLoading: _v4
          } = (0, _v75.useGetUserCapabilities)(() => _v1 ? {
            where: {
              userId: _v1
            },
            select: ["seeContentRatingBanner"]
          } : null),
          [_v5, {
            data: _v6,
            loading: _v7,
            error: _v8,
            called: _v9
          }] = (0, _v74.usePatchUser)(),
          _v10 = async _v0 => {
            _v1 && (await _v5({
              select: ["preferences.videos.rating"],
              variables: _v0,
              headers: {
                Accept: "application/vnd.vimeo.*+json;version=3.4.1"
              },
              where: {
                userId: _v1
              }
            }), _v3());
          };
        return {
          showBanner: _v2?.seeContentRatingBanner,
          isLoading: _v4,
          patchData: _v6,
          patchCalled: _v9,
          isPatchLoading: _v7,
          updateDefaultRatings: _v10,
          updateError: _v8
        };
      })(),
      _v18 = (0, _v3.useCallback)(() => {
        _v3(), _v8(void 0), _v10([]);
      }, [_v3]);
    (0, _v3.useEffect)(() => {
      let _v0;
      if (!_v4.current) return _v12 || !_v11 || _v1 || _v6.current || (_v4.current = !0, _v0 = setTimeout(() => {
        _v10.PendoClient.showGuideById(_v70), _v5.current = !0;
      }, _v5.current ? 10 : 0)), () => {
        void 0 !== _v0 && (clearTimeout(_v0), _v4.current = !1);
      };
    }, [_v12, _v11, _v1]), (0, _v3.useEffect)(() => {
      _v17 && !_v14 && (_v16 ? _v0({
        title: (0, _v32.translate)({
          singular: "Changes could not be saved",
          dictionary: {
            es: {
              singular: "No se pudieron guardar los cambios"
            },
            "de-DE": {
              singular: "Änderungen konnten nicht gespeichert werden"
            },
            "fr-FR": {
              singular: "Les modifications n'ont pas pu être enregistrées"
            },
            "ja-JP": {
              singular: "変更を保存できませんでした"
            },
            "ko-KR": {
              singular: "변경 사항이 저장되지 않았습니다"
            },
            "pt-BR": {
              singular: "As alterações não puderam ser salvas"
            },
            "zh-CN": {
              singular: "无法保存更改"
            }
          }
        })
      }) : _v13 && (_v0({
        title: (0, _v32.translate)({
          singular: "Changes saved",
          dictionary: {
            es: {
              singular: "Guardamos los cambios"
            },
            "de-DE": {
              singular: "Änderungen wurden gespeichert"
            },
            "fr-FR": {
              singular: "Changements sauvegardés"
            },
            "ja-JP": {
              singular: "変更内容が保存されました"
            },
            "ko-KR": {
              singular: "변경 사항 저장 완료"
            },
            "pt-BR": {
              singular: "Alterações salvas"
            },
            "zh-CN": {
              singular: "已保存更改"
            }
          }
        })
      }), _v2()));
    }, [_v17, _v14, _v16, _v13]), (0, _v3.useEffect)(() => (_v10.PendoClient.addHandler({
      onClick: _v0 => {
        _v0?.guide?.guideId === _v70 && _v0?.target?.tag === "BUTTON" && _v18();
      }
    }, _v71), () => {
      _v10.PendoClient.removeHandler(_v71);
    }), []);
    let _v19 = async () => {
      if (!_v7) return;
      let _v0 = _v7 === _v72.MATURE.value ? _v9 : _v7 ? [_v7] : [];
      _v0.length && (_v6.current = !0, await _v15({
        videos: {
          rating: _v0
        }
      }));
    };
    return (0, _v1.jsxs)(_v25.Modal, {
      isOpen: _v1,
      onClose: _v2,
      children: [(0, _v1.jsx)(_v30.ModalOverlay, {}), (0, _v1.jsxs)(_v28.ModalContent, {
        maxWidth: (0, _v44.rem)(480),
        children: [(0, _v1.jsxs)(_v61.ModalHeader, {
          position: "relative",
          pt: "lg",
          children: [(0, _v1.jsx)(_v23.Header, {
            size: "md",
            color: "text/primary",
            children: (0, _v32.translate)({
              singular: "Set a default content rating",
              dictionary: {
                es: {
                  singular: "Establezca una calificación de contenido predeterminada"
                },
                "de-DE": {
                  singular: "Standardmäßige Inhaltsbewertung festlegen"
                },
                "fr-FR": {
                  singular: "Définissez une classification par défaut du contenu"
                },
                "ja-JP": {
                  singular: "デフォルトのコンテンツレーティングを設定する"
                },
                "ko-KR": {
                  singular: "기본 콘텐츠 등급 설정"
                },
                "pt-BR": {
                  singular: "Defina uma classificação de conteúdo padrão"
                },
                "zh-CN": {
                  singular: "设置默认内容分级"
                }
              }
            })
          }), (0, _v1.jsx)(_v27.ModalCloseButton, {
            onClick: _v2
          })]
        }), (0, _v1.jsxs)(_v26.ModalBody, {
          py: "0",
          children: [(0, _v1.jsx)(_v57.Box, {
            py: "3",
            children: (0, _v1.jsx)(_v66.Paragraph, {
              size: "md",
              children: (0, _v32.translate)({
                singular: "Unrated videos are restricted in some places and can rank lower in search results. Set a default rating for new uploads to make sure they reach the right audience. You can always change this for each video.",
                dictionary: {
                  es: {
                    singular: "Los videos no clasificados están restringidos en algunos lugares y pueden aparecer más abajo en los resultados de búsqueda. Establezca una calificación predeterminada para las nuevas subidas a fin de asegurarse de que lleguen a la audiencia adecuada. Siempre puede cambiar esto en cada video."
                  },
                  "de-DE": {
                    singular: "Nicht bewertete Videos sind an einigen Stellen eingeschränkt und können in den Suchergebnissen niedriger eingestuft werden. Legen Sie eine Standardbewertung für neue Uploads fest, um dafür zu sorgen, dass sie die richtige Zielgruppe erreichen. Sie können dies jederzeit für jedes Video ändern."
                  },
                  "fr-FR": {
                    singular: "Les vidéos non classées sont restreintes dans certaines régions et peuvent être moins bien classées dans les résultats de recherche. Définissez une classification par défaut pour vos nouvelles mises en ligne afin de vous assurer qu'elles atteignent le bon public. Vous pouvez toujours modifier ce paramètre individuellement pour chaque vidéo."
                  },
                  "ja-JP": {
                    singular: "レーティング未設定の動画は、一部の地域で制限されたり、検索結果の順位が下がったりすることがあります。新しくアップロードする動画にはデフォルトのレーティングを設定し、適切な視聴者に届くようにしましょう。設定は各動画ごとにいつでも変更できます。"
                  },
                  "ko-KR": {
                    singular: "등급이 지정되지 않은 동영상은 일부 지역에서 제한되며 검색 결과에서 순위가 낮을 수 있습니다. 새 업로드에 기본 등급을 설정하여 적절한 시청자층에 도달할 수 있도록 하세요. 이는 동영상마다 언제든지 변경할 수 있습니다."
                  },
                  "pt-BR": {
                    singular: "Os vídeos sem classificação são restritos em algumas regiões e podem ter menos visibilidade nos resultados de pesquisas. Defina um padrão para novos carregamentos e garanta que eles alcancem o público certo. Você pode sempre alterá-la para cada vídeo."
                  },
                  "zh-CN": {
                    singular: "未分级视频在某些地区受到限制，并且在搜索结果中排名较低。为新上传的视频设置默认分级，以确保它们能触及正确的受众。您可以随时为每个视频更改此设置。"
                  }
                }
              })
            })
          }), (0, _v1.jsx)(_v57.Box, {
            py: "3",
            children: (0, _v1.jsx)(_v68.Select, {
              items: Object.values(_v72),
              disabled: _v14,
              placeholder: (0, _v32.translate)({
                singular: "Select a content rating...",
                dictionary: {
                  es: {
                    singular: "Seleccione una calificación del contenido"
                  },
                  "de-DE": {
                    singular: "Wählen Sie eine Inhaltsbewertung aus ..."
                  },
                  "fr-FR": {
                    singular: "Sélectionnez la classification du contenu…"
                  },
                  "ja-JP": {
                    singular: "コンテンツのレーティングを選択..."
                  },
                  "ko-KR": {
                    singular: "콘텐츠 등급 선택..."
                  },
                  "pt-BR": {
                    singular: "Selecione uma classificação para o conteúdo..."
                  },
                  "zh-CN": {
                    singular: "选择内容分级..."
                  }
                }
              }),
              value: _v7 ? [_v7] : [],
              onValueChange: _v0 => {
                var _v1;
                _v8(_v1 = _v0.value[0]), _v1 !== _v72.MATURE.value && _v10([]);
              }
            })
          }), _v7 === _v72.MATURE.value && (0, _v1.jsx)(_v57.Box, {
            width: "100%",
            children: _v73.map(_v0 => (0, _v1.jsx)(_v57.Box, {
              mt: "sm",
              children: (0, _v1.jsx)(_v67.Checkbox, {
                isChecked: _v9.includes(_v0.value),
                onChange: () => {
                  var _v0;
                  return _v0 = _v0.value, void _v10(_v0 => _v0.includes(_v0) ? _v0.filter(_v0 => _v0 !== _v0) : [..._v0, _v0]);
                },
                value: _v0.value,
                name: _v0.value,
                isDisabled: _v14,
                children: (0, _v1.jsx)(_v66.Paragraph, {
                  size: "sm",
                  children: _v0.label
                })
              })
            }, _v0.value))
          })]
        }), (0, _v1.jsx)(_v29.ModalFooter, {
          height: "100%",
          py: "lg",
          children: (0, _v1.jsx)(_v22.Button, {
            width: "100%",
            variant: "primary",
            isDisabled: !_v7 || _v7 === _v72.MATURE.value && 0 === _v9.length || _v14,
            onClick: _v19,
            children: (0, _v32.translate)({
              singular: "Set default rating",
              dictionary: {
                es: {
                  singular: "Establecer calificación predeterminada"
                },
                "de-DE": {
                  singular: "Standardbewertung festlegen"
                },
                "fr-FR": {
                  singular: "Définir une classification par défaut"
                },
                "ja-JP": {
                  singular: "デフォルトのレーティングを設定する"
                },
                "ko-KR": {
                  singular: "기본 등급으로 설정"
                },
                "pt-BR": {
                  singular: "Definir classificação padrão"
                },
                "zh-CN": {
                  singular: "设置默认分级"
                }
              }
            })
          })
        })]
      })]
    });
  };
  var _v77 = _v0.i(0),
    _v78 = _v0.i(0),
    _v79 = _v0.i(0),
    _v80 = _v0.i(0),
    _v81 = _v0.i(0),
    _v82 = _v0.i(0),
    _v83 = _v0.i(0),
    _v84 = _v0.i(0),
    _v85 = _v0.i(0),
    _v86 = _v0.i(0),
    _v87 = _v0.i(0),
    _v88 = _v0.i(0);
  let _v89 = "free_trial_banner_cta_button",
    _v90 = "wayfinder_home",
    _v91 = "banner",
    _v92 = "free_trial";
  var _v93 = _v0.i(0),
    _v94 = _v0.i(0),
    _v95 = _v0.i(0),
    _v96 = _v0.i(0),
    _v97 = _v0.i(0),
    _v97 = _v97,
    _v98 = _v0.i(0),
    _v99 = _v0.i(0),
    _v100 = _v0.i(0),
    _v101 = _v0.i(0),
    _v102 = _v0.i(0),
    _v103 = _v0.i(0),
    _v104 = _v0.i(0);
  let _v105 = ({
      planName: _v0,
      checkoutUrl: _v1,
      onCtaClick: _v2
    }) => (0, _v1.jsxs)(_v43.Flex, {
      align: ["flex-start", "center"],
      justify: "space-between",
      direction: ["column", "row"],
      gap: "md",
      padding: "md",
      borderRadius: "12px",
      backgroundColor: "purple.50",
      children: [(0, _v1.jsxs)(_v43.Flex, {
        align: "center",
        gap: "sm",
        children: [(0, _v1.jsx)(_v62.Tag, {
          size: "sm",
          backgroundColor: "upsell-primary",
          _hover: {
            backgroundColor: "upsell-primary"
          },
          children: (0, _v1.jsx)(_v62.TagLabel, {
            fontWeight: "bold",
            color: "white",
            children: (0, _v32.translate)({
              singular: "Special Offer",
              dictionary: {
                es: {
                  singular: "Oferta especial"
                },
                "de-DE": {
                  singular: "Sonderangebot"
                },
                "fr-FR": {
                  singular: "Offre spéciale"
                },
                "ja-JP": {
                  singular: "特別オファー"
                },
                "ko-KR": {
                  singular: "특별 혜택"
                },
                "pt-BR": {
                  singular: "Oferta Especial"
                },
                "zh-CN": {
                  singular: "特别优惠"
                }
              }
            })
          })
        }), (0, _v1.jsx)(_v31.Text, {
          variant: "body-md",
          fontWeight: "bold",
          children: (0, _v32.translate)({
            singular: "Want to try Vimeo without limits?",
            dictionary: {
              es: {
                singular: "¿Quieres probar Vimeo sin límites?"
              },
              "de-DE": {
                singular: "Möchten Sie Vimeo ohne Einschränkungen testen?"
              },
              "fr-FR": {
                singular: "Vous voulez essayer Vimeo sans limites ?"
              },
              "ja-JP": {
                singular: "制限なくVimeoを試してみませんか?"
              },
              "ko-KR": {
                singular: "제한 없이 Vimeo를 사용해 보시겠어요?"
              },
              "pt-BR": {
                singular: "Quer experimentar o Vimeo sem limites?"
              },
              "zh-CN": {
                singular: "想无限制地试用 Vimeo 吗？"
              }
            }
          })
        })]
      }), (0, _v1.jsx)(_v22.Button, {
        as: "a",
        href: _v1,
        size: "sm",
        width: ["100%", "auto"],
        onClick: _v2,
        variant: "primary",
        children: (0, _v32.translate)({
          singular: "Try {PLAN_NAME} for free",
          replacements: {
            PLAN_NAME: _v0
          },
          dictionary: {
            es: {
              singular: "Prueba {PLAN_NAME} gratis"
            },
            "de-DE": {
              singular: "Testen Sie {PLAN_NAME} kostenlos"
            },
            "fr-FR": {
              singular: "Essayez {PLAN_NAME} gratuitement"
            },
            "ja-JP": {
              singular: "{PLAN_NAME} を無料でお試しください"
            },
            "ko-KR": {
              singular: "{PLAN_NAME}을(를) 무료로 사용해 보세요"
            },
            "pt-BR": {
              singular: "Experimente o {PLAN_NAME} gratuitamente"
            },
            "zh-CN": {
              singular: "免费试用 {PLAN_NAME}"
            }
          }
        })
      })]
    }),
    _v106 = ({
      onClick: _v0
    }) => (0, _v1.jsxs)(_v43.Flex, {
      align: ["flex-start", "center"],
      justify: "space-between",
      direction: ["column", "row"],
      gap: "md",
      padding: "md",
      borderRadius: "12px",
      backgroundColor: "surface",
      children: [(0, _v1.jsxs)(_v43.Flex, {
        align: "center",
        gap: "sm",
        children: [(0, _v1.jsx)(_v62.Tag, {
          size: "sm",
          backgroundColor: "fill-brand",
          _hover: {
            backgroundColor: "fill-brand"
          },
          children: (0, _v1.jsx)(_v62.TagLabel, {
            fontWeight: "bold",
            children: (0, _v32.translate)({
              singular: "New",
              dictionary: {
                es: {
                  singular: "Nuevo"
                },
                "de-DE": {
                  singular: "Neu"
                },
                "fr-FR": {
                  singular: "Nouveau"
                },
                "ja-JP": {
                  singular: "新規作成"
                },
                "ko-KR": {
                  singular: "신규"
                },
                "pt-BR": {
                  singular: "Novo"
                },
                "zh-CN": {
                  singular: "新"
                }
              }
            })
          })
        }), (0, _v1.jsx)(_v31.Text, {
          variant: "body-md",
          fontWeight: "bold",
          children: (0, _v32.translate)({
            singular: "Ready to earn from your content?",
            dictionary: {
              es: {
                singular: "¿Listo para ganar dinero con tu contenido?"
              },
              "de-DE": {
                singular: "Bereit, mit Ihren Inhalten Geld zu verdienen?"
              },
              "fr-FR": {
                singular: "Prêt à gagner de l'argent grâce à votre contenu ?"
              },
              "ja-JP": {
                singular: "コンテンツから収益を得る準備はできていますか?"
              },
              "ko-KR": {
                singular: "콘텐츠로 수익을 올릴 준비가 되셨나요?"
              },
              "pt-BR": {
                singular: "Pronto para ganhar com seu conteúdo?"
              },
              "zh-CN": {
                singular: "准备好通过您的内容赚钱吗?"
              }
            }
          })
        })]
      }), (0, _v1.jsx)(_v22.Button, {
        size: "sm",
        width: ["100%", "auto"],
        onClick: _v0,
        children: (0, _v32.translate)({
          singular: "Monetize your content",
          dictionary: {
            es: {
              singular: "Monetiza tu contenido"
            },
            "de-DE": {
              singular: "Monetarisieren Sie Ihre Inhalte"
            },
            "fr-FR": {
              singular: "Monétisez votre contenu"
            },
            "ja-JP": {
              singular: "コンテンツを収益化する"
            },
            "ko-KR": {
              singular: "콘텐츠로 수익을 창출하세요"
            },
            "pt-BR": {
              singular: "Monetize seu conteúdo"
            },
            "zh-CN": {
              singular: "将您的内容变现"
            }
          }
        })
      })]
    });
  var _v107 = _v0.i(0),
    _v108 = _v0.i(0),
    _v109 = _v0.i(0);
  let _v110 = "enableFeaturedFoldersWidget",
    _v111 = "enableFeaturedVideoWidget",
    _v112 = "enableMyfeedWidget",
    _v113 = "enableWatchButton",
    _v114 = "enableWatchHistoryWidget";
  var _v115 = _v0.i(0),
    _v116 = _v0.i(0),
    _v117 = _v0.i(0),
    _v118 = _v0.i(0),
    _v119 = _v0.i(0),
    _v120 = _v0.i(0),
    _v121 = _v0.i(0),
    _v122 = _v0.i(0),
    _v123 = _v0.i(0),
    _v124 = _v0.i(0);
  let _v125 = () => {
    let _v0 = (0, _v42.useViewer)(),
      _v1 = _v0?.teamUser,
      _v2 = window.location.pathname,
      _v3 = (0, _v3.useCallback)(() => (0, _v119.buildActionBpContext)({
        action_type: "click",
        feature: null
      }), []),
      _v4 = (0, _v3.useCallback)(_v0 => (0, _v123.buildWebBpContext)({
        page_name: "logged_in_home_page",
        referrer_page_name: null,
        referrer: null,
        path: _v2,
        target: null,
        copy: _v0
      }), [_v2]),
      _v5 = (0, _v3.useCallback)(_v0 => (0, _v120.buildProductAnalyticsBpContext)({
        product: "general",
        feature: "general",
        location: "header",
        modal_name: null,
        flow: null,
        element: _v0,
        entity_type: null
      }), []),
      _v6 = (0, _v3.useCallback)(() => (0, _v121.buildTeamBpContextFromTeamUser)(_v1), [_v1]),
      _v7 = (0, _v3.useCallback)(() => (0, _v122.buildThirdPartyIntegrationBpContext)({
        is_integration: !1,
        integration_id: null,
        integration_name: null,
        is_partner: !1
      }), []);
    return {
      sendConfigureWidgetEvent: (0, _v3.useCallback)((_v0, _v1) => {
        (0, _v124.sendBpEventWithContexts)("vimeo.configure_widget", {
          ..._v3(),
          ..._v4(_v0),
          ..._v5(_v1),
          ..._v6(),
          ..._v7()
        }, 3, {
          widget_placement: null,
          widget_name: "team_view",
          is_dismissable: !1,
          is_dynamic_recommendations_widget: !1,
          is_empty_state: !1
        });
      }, [_v3, _v4, _v5, _v6, _v7])
    };
  };
  var _v126 = _v0.i(0),
    _v127 = _v0.i(0),
    _v128 = _v0.i(0);
  let _v129 = ({
      title: _v0,
      team_setting: _v1,
      initialState: _v2,
      widgetName: _v3,
      onOptionUpdate: _v4
    }) => {
      let [_v5, _v6] = (0, _v3.useState)(_v2);
      return (0, _v1.jsx)(_v57.Box, {
        paddingX: (0, _v44.rem)(16),
        paddingY: (0, _v44.rem)(10),
        children: (0, _v1.jsxs)(_v127.FormControl, {
          display: "flex",
          justifyContent: "space-between",
          children: [(0, _v1.jsx)(_v128.FormLabel, {
            htmlFor: `${_v1}-switch`,
            children: (0, _v1.jsx)(_v31.Text, {
              variant: "body-xl",
              color: "text-primary",
              fontSize: (0, _v44.rem)(16),
              lineHeight: (0, _v44.rem)(20),
              fontWeight: "400",
              children: _v0
            })
          }), (0, _v1.jsx)(_v126.Switch, {
            id: `${_v1}-switch`,
            size: "sm",
            isChecked: _v5,
            onChange: () => {
              _v6(!_v5), _v4(_v3, _v1, !_v5);
            }
          })]
        })
      });
    },
    _v130 = ({
      teamSettingsInitialState: _v0,
      onOptionUpdate: _v1
    }) => {
      let {
          sendConfigureWidgetEvent: _v2
        } = _v125(),
        _v3 = () => {
          _v2("Team view", "dropdown_header");
        };
      return (0, _v1.jsx)(_v115.Popover, {
        placement: "bottom-end",
        children: () => (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v116.PopoverTrigger, {
            children: (0, _v1.jsx)(_v22.Button, {
              rightIcon: (0, _v1.jsx)(_v118.ChevronDownSmall, {}),
              color: "text-primary",
              variant: "secondary",
              "data-id": "customize_team_view_button",
              onClick: _v3,
              children: (0, _v32.translate)({
                singular: "Team view",
                dictionary: {
                  es: {
                    singular: "Vista de equipo"
                  },
                  "de-DE": {
                    singular: "Teamansicht"
                  },
                  "fr-FR": {
                    singular: "Vue de l'équipe"
                  },
                  "ja-JP": {
                    singular: "チームの視聴"
                  },
                  "ko-KR": {
                    singular: "팀 보기"
                  },
                  "pt-BR": {
                    singular: "Visualização da equipe"
                  },
                  "zh-CN": {
                    singular: "团队视图"
                  }
                }
              })
            })
          }), (0, _v1.jsxs)(_v117.PopoverContent, {
            backgroundColor: "fill-blur",
            paddingY: "100",
            width: "13.75rem",
            borderColor: "stroke",
            borderWidth: "1px",
            borderRadius: "button",
            sx: {
              boxShadow: "none !important"
            },
            children: [(0, _v1.jsx)(_v129, {
              title: (0, _v32.translate)({
                singular: "Featured content",
                dictionary: {
                  es: {
                    singular: "Contenido destacado"
                  },
                  "de-DE": {
                    singular: "Empfohlene Inhalte"
                  },
                  "fr-FR": {
                    singular: "Contenu à la une"
                  },
                  "ja-JP": {
                    singular: "注目コンテンツ"
                  },
                  "ko-KR": {
                    singular: "추천 콘텐츠"
                  },
                  "pt-BR": {
                    singular: "Conteúdo em destaque"
                  },
                  "zh-CN": {
                    singular: "精选内容"
                  }
                }
              }),
              team_setting: _v111,
              initialState: _v0.enableFeaturedVideoWidget,
              widgetName: "Featured content",
              onOptionUpdate: _v1
            }), (0, _v1.jsx)(_v129, {
              title: (0, _v32.translate)({
                singular: "Featured folders",
                dictionary: {
                  es: {
                    singular: "Carpetas destacadas"
                  },
                  "de-DE": {
                    singular: "Ausgewählte Ordner"
                  },
                  "fr-FR": {
                    singular: "Dossiers à la une"
                  },
                  "ja-JP": {
                    singular: "注目のフォルダー"
                  },
                  "ko-KR": {
                    singular: "추천 폴더"
                  },
                  "pt-BR": {
                    singular: "Pastas em destaque"
                  },
                  "zh-CN": {
                    singular: "精选文件夹"
                  }
                }
              }),
              team_setting: _v110,
              initialState: _v0.enableFeaturedFoldersWidget,
              widgetName: "Featured folders",
              onOptionUpdate: _v1
            }), (0, _v1.jsx)(_v129, {
              title: (0, _v32.translate)({
                singular: "Watch history",
                dictionary: {
                  es: {
                    singular: "Historial de visualizaciones"
                  },
                  "de-DE": {
                    singular: "Verlauf ansehen"
                  },
                  "fr-FR": {
                    singular: "Historique des vidéos regardées"
                  },
                  "ja-JP": {
                    singular: "視聴履歴"
                  },
                  "ko-KR": {
                    singular: "시청 기록"
                  },
                  "pt-BR": {
                    singular: "Histórico de visualizações"
                  },
                  "zh-CN": {
                    singular: "观看记录"
                  }
                }
              }),
              team_setting: _v114,
              initialState: _v0.enableWatchHistoryWidget,
              widgetName: "Watch history",
              onOptionUpdate: _v1
            }), (0, _v1.jsx)(_v129, {
              title: (0, _v32.translate)({
                singular: "Get inspired",
                dictionary: {
                  es: {
                    singular: "Inspírate"
                  },
                  "de-DE": {
                    singular: "Lass dich inspirieren"
                  },
                  "fr-FR": {
                    singular: "Inspirez-vous"
                  },
                  "ja-JP": {
                    singular: "インスピレーションを得る"
                  },
                  "ko-KR": {
                    singular: "영감을 얻으세요"
                  },
                  "pt-BR": {
                    singular: "Inspire-se"
                  },
                  "zh-CN": {
                    singular: "获取灵感"
                  }
                }
              }),
              team_setting: _v112,
              initialState: _v0.enableMyfeedWidget,
              widgetName: "Feed",
              onOptionUpdate: _v1
            }), (0, _v1.jsx)(_v129, {
              title: (0, _v32.translate)({
                singular: "Watch",
                dictionary: {
                  es: {
                    singular: "Ver"
                  },
                  "de-DE": {
                    singular: "Anschauen"
                  },
                  "fr-FR": {
                    singular: "Regarder"
                  },
                  "ja-JP": {
                    singular: "鑑賞"
                  },
                  "ko-KR": {
                    singular: "시청하기"
                  },
                  "pt-BR": {
                    singular: "Assistir"
                  },
                  "zh-CN": {
                    singular: "观看"
                  }
                }
              }),
              team_setting: _v113,
              initialState: _v0.enableWatchButton,
              widgetName: "Watch",
              onOptionUpdate: _v1
            })]
          })]
        })
      });
    };
  var _v131 = _v0.i(0),
    _v132 = _v0.i(0),
    _v133 = _v0.i(0),
    _v134 = _v0.i(0);
  async function _v135({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v133.measureLatency)("getUserPagesHomeWidgets", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/pages/home/widgets?${(0, _v134.searchQueryString)(_v3)}&fields=${_v1.map(_v134.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v134.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v134.deepCamelCase)(_v1);
    });
  }
  var _v136 = _v0.i(0),
    _v137 = _v0.i(0),
    _v138 = _v0.i(0),
    _v139 = _v0.i(0);
  function _v140(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v139.useGctlConfig)();
    return (0, _v138.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/users/${_v2.where.userId}/pages/home/widgets?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v135({
      ..._v2,
      baseUrl: _v3,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      query: {
        ..._v2.query,
        page: _v1 + 1
      }
    }) : null, _v1);
  }
  "true" === _v132.default.env.STORYBOOK && (0, _v137.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v139.useGctlConfig)();
    return (0, _v15.default)(_v2 ? `/users/${_v2.where.userId}/pages/home/widgets${(0, _v137.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v135({
      ..._v2,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      baseUrl: _v3
    }) : null, _v1);
  }, {
    endpoint: "/users/:userId/pages/home/widgets",
    method: "GET"
  }), "true" === _v132.default.env.STORYBOOK && (0, _v137.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v136.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v139.useGctlConfig)(),
      [_v5, _v6] = (0, _v137.useInternalState)();
    return [(0, _v3.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/pages/home/widgets${(0, _v137.serializeQuery)(_v0)}`, _v135({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }));
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
  }, {
    endpoint: "/users/:userId/pages/home/widgets",
    method: "GET"
  }), "true" === _v132.default.env.STORYBOOK && (0, _v137.assignMswData)(_v140, {
    endpoint: "/users/:userId/pages/home/widgets",
    method: "GET"
  });
  let _v141 = new Set(["Owner", "Admin", "Contributor", "Contributor Plus"]),
    _v142 = ["video.isColdStorage", "video.name", "video.uri", "video.user.name", "video.user.uri", "video.user.metadata.connections.projects.options", "video.user.pictures", "video.createdTime", "video.lastUserActionEventDate", "video.modifiedTime", "video.link", "video.password", "video.privacy.view", "video.privacy.originalView", "video.customMetadata", "video.isColdPrivacyRestricted", "video.configUrl", "video.download.codec", "video.download.rendition", "video.download.createdTime", "video.download.expires", "video.download.fps", "video.download.height", "video.download.link", "video.download.publicName", "video.download.quality", "video.download.size", "video.download.sizeShort", "video.download.sourceLink", "video.download.type", "video.download.videoFileId", "video.download.width", "video.embed", "video.pictures", "video.description", "video.metadata.canBeReplaced", "video.metadata.interactions.edit", "video.metadata.interactions.delete", "video.metadata.interactions.invite", "video.metadata.interactions.legalHold.uri", "video.parentProject.isPrivateToUser", "video.parentProject.name", "video.parentProject.uri", "video.reviewPage.link", "video.reviewLinks.uri", "video.reviewLinks.expiresOn", "video.manageLink", "video.canMoveToProject", "video.duration", "video.stats.plays"],
    _v143 = (_v0, _v1, _v2 = !1) => ({
      query: {
        query: "",
        filter: "video",
        filterLive: "false",
        sort: "last_user_action_event_date",
        direction: "desc",
        perPage: _v1,
        page: 1,
        sizes: ["270x152", "300x169"],
        ...(!_v2 ? {
          queryFields: "title,description,chapters,tags",
          precision: 3,
          includeCaptionsResults: !0
        } : {})
      },
      select: _v142,
      where: {
        userId: _v0
      },
      headers: {
        Accept: "application/vnd.vimeo.*; version=3.4.2"
      }
    });
  function _v144() {
    let _v0 = (0, _v42.useViewer)(),
      {
        settings: _v1
      } = (0, _v16.useOrionSettings)(),
      _v2 = _v0?.teamUser?.ownerId ?? _v0?.user?.id,
      {
        data: _v3,
        isLoading: _v4,
        ..._v5
      } = (0, _v131.useGetUserItemsInfinite)(() => _v2 ? _v143(_v2, _v1.hp_recents_number_of_videos, _v1.hp_remove_search_params_results) : null, {
        revalidateOnFocus: !1,
        errorRetryInterval: 0,
        errorRetryCount: 1
      });
    return {
      myVideos: (0, _v3.useMemo)(() => _v3?.flatMap(_v0 => _v0.data).map(_v0 => _v0.video).filter(_v0 => _v0) || [], [_v3]),
      isLoading: _v4,
      ..._v5
    };
  }
  let _v145 = () => {
      let _v0 = (0, _v3.useContext)(_v146);
      if (!_v0) throw Error("useWidgetContext must be used within a WidgetDataContext component");
      return _v0;
    },
    _v146 = (0, _v3.createContext)(null),
    _v147 = ({
      children: _v0
    }) => {
      let _v1 = (0, _v42.useViewer)(),
        {
          settings: _v2
        } = (0, _v16.useOrionSettings)(),
        _v3 = _v1?.teamUser?.ownerId ?? _v1?.user?.id,
        [_v4, _v5] = (0, _v3.useState)(new Set()),
        _v6 = (({
          viewer: _v0,
          ownerId: _v1
        }) => {
          let _v2;
          return !!_v1 && !!_v0?.user && (_v2 = _v0?.teamUser?.accountType ?? _v0?.user?.account, !_v0?.isEnterpriseSite && "enterprise" !== _v2 && (!_v0.teamUser || !!_v0.teamUser.plainTextPermissionLevel));
        })({
          viewer: _v1,
          ownerId: _v3
        });
      (0, _v131.useGetUserItemsInfinite)(() => _v3 ? _v143(_v3, _v2.hp_recents_number_of_videos, _v2.hp_remove_search_params_results) : null, {
        revalidateOnFocus: !1,
        errorRetryInterval: 0,
        errorRetryCount: 1
      });
      let {
          data: _v7,
          isLoading: _v8,
          mutate: _v9,
          error: _v10
        } = _v140(() => !_v3 || _v6 ? null : {
          where: {
            userId: _v3
          },
          select: ["size", "type", "viewData.featuredFolders.canPinFolders", "viewData.featuredContent.canEdit", "viewData.featuredContent.featuredItem.type", "viewData.featuredContent.featuredItem.video.createdTime", "viewData.featuredContent.featuredItem.video.name", "viewData.featuredContent.featuredItem.video.link", "viewData.featuredContent.featuredItem.video.manageLink", "viewData.featuredContent.featuredItem.video.uri", "viewData.featuredContent.featuredItem.video.pictures.sizes", "viewData.featuredContent.featuredItem.video.pictures.uri", "viewData.featuredContent.featuredItem.liveEvent.title", "viewData.featuredContent.featuredItem.liveEvent.metadata.connections.liveVideo.status", "viewData.featuredContent.featuredItem.liveEvent.nextOccurrenceTime", "viewData.featuredContent.featuredItem.liveEvent.schedule.startTime", "viewData.featuredContent.featuredItem.liveEvent.schedule.endTime", "viewData.featuredContent.featuredItem.liveEvent.link", "viewData.featuredContent.featuredItem.liveEvent.settingsLink", "viewData.featuredContent.featuredItem.liveEvent.uri", "viewData.featuredContent.featuredItem.liveEvent.pictures.sizes", "viewData.featuredContent.featuredItem.liveEvent.pictures.uri"],
          query: {
            perPage: 7
          }
        }, {
          revalidateOnFocus: !1
        }),
        _v11 = (({
          viewer: _v0,
          enabled: _v1
        }) => (0, _v3.useMemo)(() => {
          let _v0;
          if (!_v1) return;
          let _v1 = [];
          return _v1.push({
            size: "lg",
            type: "recent-videos",
            viewData: null
          }), (_v0 = _v0?.user?.id) && (_v0?.teamUser?.ownerId ?? _v0) === _v0 && _v1.push({
            size: "md",
            type: "whatsnext",
            viewData: null
          }), (!_v0?.teamUser || _v141.has(_v0.teamUser.plainTextPermissionLevel)) && _v1.push({
            size: "sm",
            type: "analytics",
            viewData: null
          }), _v0?.teamUser?.isWorkspace || _v1.push({
            size: "lg",
            type: "watch-history",
            viewData: null
          }), _v0?.isFromCopyrightRestrictedRegion || _v1.push({
            size: "lg",
            type: "my-feed",
            viewData: null
          }), [{
            data: _v1,
            page: 1,
            perPage: _v1.length,
            total: _v1.length,
            paging: {
              first: "",
              last: "",
              next: null,
              previous: null
            }
          }];
        }, [_v1, _v0]))({
          viewer: _v1,
          enabled: _v6
        }),
        _v12 = _v6 ? _v11 : _v7,
        _v13 = (0, _v3.useMemo)(() => _v12 && 0 !== _v4.size ? _v12.map(_v0 => ({
          ..._v0,
          data: _v0.data.filter(_v0 => !_v4.has(_v0.type))
        })) : _v12, [_v4, _v12]),
        _v14 = (0, _v3.useCallback)(_v0 => {
          _v5(_v0 => {
            if (_v0.has(_v0)) return _v0;
            let _v1 = new Set(_v0);
            return _v1.add(_v0), _v1;
          });
        }, []);
      return (0, _v1.jsx)(_v146.Provider, {
        value: {
          isLoading: !_v6 && _v8,
          shouldUseSyntheticHomeWidgets: _v6,
          widgetData: _v13,
          mutateWidgetData: _v9,
          removeWidget: _v14,
          error: _v6 ? null : _v10
        },
        children: _v0
      });
    },
    _v148 = () => {
      let {
          data: _v0,
          isLoading: _v1
        } = (_v0 => {
          let _v1 = (0, _v42.useViewer)(),
            _v2 = _v1?.teamUser?.ownerId ?? _v1?.user?.id,
            {
              isLoading: _v3,
              workspaceUuid: _v4
            } = (0, _v109.useCurrentWorkspaceDetails)(),
            {
              data: _v5,
              isLoading: _v6
            } = (0, _v107.useGetTeamSettings)(() => !_v2 || _v3 || _v4 ? null : {
              where: {
                userId: _v2
              },
              select: _v0
            }),
            {
              data: _v7,
              isLoading: _v8
            } = (0, _v108.useGetWorkspaceSettings)(() => _v3 || !_v4 ? null : {
              where: {
                workspaceUuid: _v4
              },
              select: _v0
            });
          return {
            data: _v4 ? _v7 : _v5,
            isLoading: _v4 ? _v8 : _v6
          };
        })([_v110, _v111, _v114, _v112, _v113]),
        _v2 = (0, _v42.useViewer)(),
        _v3 = _v2?.teamUser?.ownerId ?? _v2?.user?.id,
        [_v4] = (0, _v107.usePatchTeamSettings)(),
        [_v5] = (0, _v108.usePatchWorkspaceSettings)(),
        {
          mutateWidgetData: _v6
        } = _v145(),
        {
          sendConfigureWidgetEvent: _v7
        } = _v125(),
        {
          isLoading: _v8,
          workspaceUuid: _v9
        } = (0, _v109.useCurrentWorkspaceDetails)(),
        _v10 = async (_v0, _v1, _v2) => {
          _v7(_v0, "dropdown"), _v8 || (_v9 ? await _v5({
            where: {
              workspaceUuid: _v9
            },
            variables: {
              [_v1]: _v2
            }
          }) : _v3 && (await _v4({
            where: {
              userId: _v3
            },
            variables: {
              [_v1]: _v2
            }
          })), _v6());
        };
      return !_v0 || _v1 ? (0, _v1.jsx)(_v1.Fragment, {}) : (0, _v1.jsx)(_v130, {
        teamSettingsInitialState: _v0,
        onOptionUpdate: _v10
      });
    },
    _v149 = () => (0, _v1.jsxs)(_v43.Flex, {
      justifyContent: "space-between",
      children: [(0, _v1.jsx)(_v23.Header, {
        size: "xl",
        children: (0, _v32.translate)({
          singular: "Home",
          dictionary: {
            es: {
              singular: "Inicio"
            },
            "de-DE": {
              singular: "Startseite"
            },
            "fr-FR": {
              singular: "Accueil"
            },
            "ja-JP": {
              singular: "ホーム"
            },
            "ko-KR": {
              singular: "홈"
            },
            "pt-BR": {
              singular: "Página Inicial"
            },
            "zh-CN": {
              singular: "主页"
            }
          }
        })
      }), (0, _v1.jsx)(_v148, {})]
    });
  var _v150 = _v0.i(0),
    _v151 = _v0.i(0),
    _v152 = _v0.i(0),
    _v153 = _v0.i(0),
    _v154 = _v0.i(0);
  let _v155 = ({
    onCtaClick: _v0
  }) => {
    let [_v1, _v2] = (0, _v152.default)("review_hero_banner_dismissed", !1),
      {
        trackReviewHeroDisplayed: _v3,
        trackReviewEntryPointClicked: _v4,
        trackReviewCtaDismissed: _v5
      } = (0, _v153.useMaximizeReviewAdoptionTracking)();
    return ((0, _v154.usePicoEffect)(() => {
      if (_v1) return !1;
      _v3();
    }, [_v1], {
      once: !0
    }), _v1) ? null : (0, _v1.jsxs)(_v57.Box, {
      position: "relative",
      borderRadius: "xl",
      overflow: "hidden",
      bg: "#1a2744",
      w: "100%",
      children: [(0, _v1.jsxs)(_v43.Flex, {
        direction: ["column", "column", "row"],
        minH: [(0, _v44.rem)(506), (0, _v44.rem)(602), (0, _v44.rem)(220)],
        children: [(0, _v1.jsxs)(_v43.Flex, {
          direction: "column",
          justify: "center",
          gap: "md",
          p: ["lg", "xl", "2xl"],
          flex: ["1", "1", "3"],
          zIndex: 1,
          children: [(0, _v1.jsx)(_v57.Box, {
            children: (0, _v1.jsx)(_v57.Box, {
              as: "span",
              display: "inline-block",
              bg: "vimeoBlue.400",
              color: "black",
              borderRadius: (0, _v44.rem)(4),
              px: (0, _v44.rem)(6),
              py: (0, _v44.rem)(2),
              fontSize: "body-sm",
              fontWeight: "semibold",
              lineHeight: "1.2",
              children: (0, _v32.translate)({
                singular: "What's new",
                dictionary: {
                  es: {
                    singular: "Novedades"
                  },
                  "de-DE": {
                    singular: "Was gibt es Neues?"
                  },
                  "fr-FR": {
                    singular: "Quoi de neuf ?"
                  },
                  "ja-JP": {
                    singular: "新着情報"
                  },
                  "ko-KR": {
                    singular: "새로운 기능"
                  },
                  "pt-BR": {
                    singular: "Novidades"
                  },
                  "zh-CN": {
                    singular: "新增内容"
                  }
                }
              })
            })
          }), (0, _v1.jsx)(_v31.Text, {
            variant: "heading-lg",
            color: "white",
            fontSize: ["heading-md", "heading-lg"],
            lineHeight: "1.2",
            children: (0, _v32.translate)({
              singular: "Collect feedback frame by frame",
              dictionary: {
                es: {
                  singular: "Recopilar comentarios fotograma a fotograma"
                },
                "de-DE": {
                  singular: "Feedback Bild für Bild sammeln"
                },
                "fr-FR": {
                  singular: "Collectez des retours image par image"
                },
                "ja-JP": {
                  singular: "フレーム単位でフィードバックを収集する"
                },
                "ko-KR": {
                  singular: "프레임별로 피드백을 수집하세요"
                },
                "pt-BR": {
                  singular: "Colete feedback quadro a quadro"
                },
                "zh-CN": {
                  singular: "逐帧收集反馈"
                }
              }
            })
          }), (0, _v1.jsx)(_v31.Text, {
            variant: "body-md",
            color: "whiteAlpha.700",
            maxW: (0, _v44.rem)(480),
            children: (0, _v32.translate)({
              singular: "Share your video for review, collect time-coded comments, and keep feedback organised as versions change.",
              dictionary: {
                es: {
                  singular: "Comparte tu vídeo para revisión, recopila comentarios con marcas de tiempo y mantén los comentarios organizados a medida que cambian las versiones."
                },
                "de-DE": {
                  singular: "Teilen Sie Ihr Video zur Überprüfung, sammeln Sie zeitkodierte Kommentare und behalten Sie das Feedback organisiert, wenn sich Versionen ändern."
                },
                "fr-FR": {
                  singular: "Partagez votre vidéo pour relecture, recueillez des commentaires horodatés et conservez les retours organisés au fur et à mesure que les versions évoluent."
                },
                "ja-JP": {
                  singular: "レビュー用に動画を共有し、タイムコード付きのコメントを収集し、バージョンが変わってもフィードバックを整理して管理します。"
                },
                "ko-KR": {
                  singular: "검토를 위해 동영상을 공유하고, 타임코드가 포함된 코멘트를 수집하며, 버전이 변경되어도 피드백을 정리된 상태로 유지하세요."
                },
                "pt-BR": {
                  singular: "Compartilhe seu vídeo para revisão, colete comentários com marcação de tempo e mantenha o feedback organizado conforme as versões mudam."
                },
                "zh-CN": {
                  singular: "分享你的视频以供审阅，收集带时间码的评论，并在版本更迭时持续保持反馈有序。"
                }
              }
            })
          }), (0, _v1.jsx)(_v57.Box, {
            pt: "sm",
            children: (0, _v1.jsx)(_v22.Button, {
              variant: "solid",
              size: "md",
              bg: "white",
              color: "black",
              _hover: {
                bg: "gray.100"
              },
              onClick: () => {
                _v4({
                  entryPoint: "hero"
                }), _v0();
              },
              children: (0, _v32.translate)({
                singular: "Try Review Now",
                dictionary: {
                  es: {
                    singular: "Prueba Review ahora"
                  },
                  "de-DE": {
                    singular: "Jetzt Überprüfung ausprobieren"
                  },
                  "fr-FR": {
                    singular: "Essayez Review dès maintenant"
                  },
                  "ja-JP": {
                    singular: "今すぐレビューを試す"
                  },
                  "ko-KR": {
                    singular: "지금 Review를 사용해보세요"
                  },
                  "pt-BR": {
                    singular: "Experimente o Review agora"
                  },
                  "zh-CN": {
                    singular: "立即试用 Review"
                  }
                }
              })
            })
          })]
        }), (0, _v1.jsx)(_v57.Box, {
          flex: ["1", "1", "2"],
          minH: [(0, _v44.rem)(200), (0, _v44.rem)(300), "auto"],
          position: "relative",
          overflow: "hidden",
          children: (0, _v1.jsx)(_v57.Box, {
            as: "iframe",
            src: "https://player.vimeo.com/video/1178419737?badge=0&autopause=0&player_id=0&app_id=58479&background=1",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            minW: "120%",
            minH: "120%",
            w: "auto",
            h: "auto",
            sx: {
              aspectRatio: "16 / 9"
            },
            border: "none",
            allow: "autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share",
            referrerPolicy: "strict-origin-when-cross-origin"
          })
        })]
      }), (0, _v1.jsx)(_v150.IconButton, {
        "aria-label": (0, _v32.translate)({
          singular: "Dismiss",
          dictionary: {
            es: {
              singular: "Descartar"
            },
            "de-DE": {
              singular: "Information verwerfen"
            },
            "fr-FR": {
              singular: "Ignorer"
            },
            "ja-JP": {
              singular: "閉じる"
            },
            "ko-KR": {
              singular: "닫기"
            },
            "pt-BR": {
              singular: "Ignorar"
            },
            "zh-CN": {
              singular: "拒绝"
            }
          }
        }),
        icon: (0, _v1.jsx)(_v151.CloseX, {
          color: "white"
        }),
        variant: "ghost",
        size: "sm",
        position: "absolute",
        top: (0, _v44.rem)(12),
        right: (0, _v44.rem)(12),
        zIndex: 2,
        bg: "blackAlpha.500",
        _hover: {
          bg: "blackAlpha.700"
        },
        borderRadius: "md",
        onClick: () => {
          _v5({
            dismissalStage: "home",
            entryPoint: "hero"
          }), _v2(!0);
        }
      })]
    });
  };
  var _v156 = _v0.i(0),
    _v157 = _v0.i(0),
    _v158 = _v0.i(0),
    _v159 = _v0.i(0),
    _v160 = _v0.i(0);
  let _v161 = ({
    forceColdStorage: _v0 = !1
  }) => {
    let {
        hasColdStorage: _v1,
        isLoading: _v2
      } = (0, _v160.useUserHasColdStorageVideos)({
        forceEligible: _v0
      }),
      {
        trackEntitlementsRestrictionsStatus: _v3
      } = _v14(),
      {
        hasColdPrivacy: _v4,
        isLoading: _v5
      } = (0, _v159.useUserHasColdPrivacyVideos)({
        enabled: !0
      }),
      _v6 = (0, _v158.useColdStorageUpgradeLabel)(),
      _v7 = (0, _v3.useMemo)(() => (0, _v157.deriveColdStorageRestrictions)({
        hasColdStorage: _v1,
        hasColdPrivacy: _v4
      }) ?? [], [_v1, _v4]);
    return ((0, _v154.usePicoEffect)(() => !_v2 && !_v5 && _v3({
      restrictions: _v7
    }), [_v2, _v5, _v7, _v3], {
      once: !0
    }), _v1 || _v4) ? (0, _v1.jsx)(_v156.ColdStorageBanner, {
      surface: "homepage",
      onViewVideos: () => {
        _v1 && _v4 ? window.location.assign("/library") : _v4 ? window.location.assign("/library?filter=cold_privacy") : window.location.assign("/library?filter=locked");
      },
      planName: _v6,
      hasColdStorage: _v1,
      hasColdPrivacy: _v4,
      isColdPrivacyLoading: _v5,
      isPaymentSuspended: _v0,
      onUpdatePayment: () => {
        window.location.assign("/checkout/payments/new?return_url=%2Fhome");
      }
    }) : null;
  };
  var _v162 = _v0.i(0);
  let _v163 = ({
    onCtaClick: _v0
  }) => {
    let [_v1, _v2] = (0, _v152.default)("transfer_file_hero_banner_dismissed", !1),
      {
        trackTransferHeroDisplayed: _v3,
        trackTransferEntryPointClicked: _v4,
        trackTransferCtaDismissed: _v5
      } = (0, _v162.useFileTransferAdoptionTracking)();
    return ((0, _v154.usePicoEffect)(() => {
      if (_v1) return !1;
      _v3();
    }, [_v1], {
      once: !0
    }), _v1) ? null : (0, _v1.jsxs)(_v57.Box, {
      position: "relative",
      borderRadius: "xl",
      overflow: "hidden",
      bg: "#1a2744",
      w: "100%",
      children: [(0, _v1.jsxs)(_v43.Flex, {
        direction: ["column", "column", "row"],
        minH: [(0, _v44.rem)(506), (0, _v44.rem)(602), (0, _v44.rem)(220)],
        children: [(0, _v1.jsxs)(_v43.Flex, {
          direction: "column",
          justify: "center",
          gap: "md",
          p: ["lg", "xl", "2xl"],
          flex: ["1", "1", "3"],
          zIndex: 1,
          children: [(0, _v1.jsx)(_v57.Box, {
            children: (0, _v1.jsx)(_v57.Box, {
              as: "span",
              display: "inline-block",
              bg: "vimeoBlue.400",
              color: "black",
              borderRadius: (0, _v44.rem)(4),
              px: (0, _v44.rem)(6),
              py: (0, _v44.rem)(2),
              fontSize: "body-sm",
              fontWeight: "semibold",
              lineHeight: "1.2",
              children: (0, _v32.translate)({
                singular: "What's new",
                dictionary: {
                  es: {
                    singular: "Novedades"
                  },
                  "de-DE": {
                    singular: "Was gibt es Neues?"
                  },
                  "fr-FR": {
                    singular: "Quoi de neuf ?"
                  },
                  "ja-JP": {
                    singular: "新着情報"
                  },
                  "ko-KR": {
                    singular: "새로운 기능"
                  },
                  "pt-BR": {
                    singular: "Novidades"
                  },
                  "zh-CN": {
                    singular: "新增内容"
                  }
                }
              })
            })
          }), (0, _v1.jsx)(_v31.Text, {
            variant: "heading-lg",
            color: "white",
            fontSize: ["heading-md", "heading-lg"],
            lineHeight: "1.2",
            children: (0, _v32.translate)({
              singular: "Fast video transfer, built for sharing",
              dictionary: {
                es: {
                  singular: "Transferencia rápida de vídeo, diseñada para compartir"
                },
                "de-DE": {
                  singular: "Schneller Videotransfer, für einfaches Teilen entwickelt"
                },
                "fr-FR": {
                  singular: "Transfert rapide de vidéos, conçu pour le partage"
                },
                "ja-JP": {
                  singular: "共有のために作られた高速動画転送"
                },
                "ko-KR": {
                  singular: "공유를 위해 설계된 빠른 동영상 전송"
                },
                "pt-BR": {
                  singular: "Transferência rápida de vídeos, projetada para compartilhamento"
                },
                "zh-CN": {
                  singular: "快速视频传输，专为分享而打造"
                }
              }
            })
          }), (0, _v1.jsx)(_v31.Text, {
            variant: "body-md",
            color: "whiteAlpha.700",
            maxW: (0, _v44.rem)(480),
            children: (0, _v32.translate)({
              singular: "Transfer high-quality video files fast, and share them with anyone through a simple link.",
              dictionary: {
                es: {
                  singular: "Transfiere archivos de vídeo de alta calidad rápidamente y compártelos con cualquier persona mediante un enlace sencillo."
                },
                "de-DE": {
                  singular: "Übertrage hochwertige Videodateien schnell und teile sie mit jedem über einen einfachen Link."
                },
                "fr-FR": {
                  singular: "Transférez rapidement des fichiers vidéo de haute qualité et partagez-les avec n'importe qui via un lien simple."
                },
                "ja-JP": {
                  singular: "高品質な動画ファイルを素早く転送し、シンプルなリンクで誰にでも共有できます。"
                },
                "ko-KR": {
                  singular: "Transfer로 고화질 동영상 파일을 빠르게 전송하고, 간단한 링크로 누구나 공유할 수 있습니다."
                },
                "pt-BR": {
                  singular: "Transfira arquivos de vídeo em alta qualidade rapidamente e compartilhe-os com qualquer pessoa por meio de um link simples."
                },
                "zh-CN": {
                  singular: "快速传输高质量视频文件，通过一个简单链接与任何人分享。"
                }
              }
            })
          }), (0, _v1.jsx)(_v57.Box, {
            pt: "sm",
            children: (0, _v1.jsx)(_v22.Button, {
              variant: "solid",
              size: "md",
              bg: "white",
              color: "black",
              _hover: {
                bg: "gray.100"
              },
              onClick: () => {
                _v4({
                  entryPoint: "hero"
                }), _v0?.();
              },
              children: (0, _v32.translate)({
                singular: "Try Transfer Now",
                dictionary: {
                  es: {
                    singular: "Prueba Transfer ahora"
                  },
                  "de-DE": {
                    singular: "Jetzt Transfer ausprobieren"
                  },
                  "fr-FR": {
                    singular: "Essayez Transfert maintenant"
                  },
                  "ja-JP": {
                    singular: "今すぐTransferを試す"
                  },
                  "ko-KR": {
                    singular: "지금 Transfer 사용해보기"
                  },
                  "pt-BR": {
                    singular: "Experimente o Transfer agora"
                  },
                  "zh-CN": {
                    singular: "立即试用 Transfer"
                  }
                }
              })
            })
          })]
        }), (0, _v1.jsx)(_v57.Box, {
          flex: ["1", "1", "2"],
          minH: [(0, _v44.rem)(200), (0, _v44.rem)(300), "auto"],
          position: "relative",
          overflow: "hidden",
          children: (0, _v1.jsx)(_v57.Box, {
            as: "img",
            src: "https://i.vimeocdn.com/custom_asset/1ea2fd86f8a2390e95cac673d3aeb2bf",
            alt: "",
            position: "absolute",
            top: "0",
            left: "0",
            w: "100%",
            h: "100%",
            objectFit: "cover"
          })
        })]
      }), (0, _v1.jsx)(_v150.IconButton, {
        "aria-label": (0, _v32.translate)({
          singular: "Dismiss",
          dictionary: {
            es: {
              singular: "Descartar"
            },
            "de-DE": {
              singular: "Information verwerfen"
            },
            "fr-FR": {
              singular: "Ignorer"
            },
            "ja-JP": {
              singular: "閉じる"
            },
            "ko-KR": {
              singular: "닫기"
            },
            "pt-BR": {
              singular: "Ignorar"
            },
            "zh-CN": {
              singular: "拒绝"
            }
          }
        }),
        icon: (0, _v1.jsx)(_v151.CloseX, {
          color: "white"
        }),
        variant: "ghost",
        size: "sm",
        position: "absolute",
        top: (0, _v44.rem)(12),
        right: (0, _v44.rem)(12),
        zIndex: 2,
        bg: "blackAlpha.500",
        _hover: {
          bg: "blackAlpha.700"
        },
        borderRadius: "md",
        onClick: () => {
          _v5({
            dismissalStage: "home",
            entryPoint: "hero"
          }), _v2(!0);
        }
      })]
    });
  };
  var _v164 = _v0.i(0),
    _v165 = _v0.i(0),
    _v166 = _v0.i(0),
    _v167 = _v0.i(0),
    _v168 = _v0.i(0);
  let _v169 = ["Uploader", "Contributor", "Contributor Plus", "Admin", "Owner"];
  var _v170 = _v0.i(0);
  let _v171 = "upsellModal-dismissed",
    _v172 = "whsd";
  var _v173 = _v0.i(0),
    _v174 = _v0.i(0),
    _v175 = _v0.i(0),
    _v176 = _v0.i(0),
    _v177 = _v0.i(0);
  let _v178 = {
    paywallTrigger: "login_pcp",
    paywallLocation: "home",
    paywallType: "popup",
    paywallFeature: "plans"
  };
  function _v179(_v0) {
    return `welcomeOfferModal-dismissed:${_v0}`;
  }
  var _v180 = _v0.i(0);
  function _v181({
    isOpen: _v0,
    upgradePlanUrl: _v1,
    onShown: _v2,
    onDismiss: _v3,
    onCtaClick: _v4
  }) {
    let _v5 = (0, _v180.useColorModeValue)("https://i.vimeocdn.com/custom_asset/a9ea0a9faf730c50b005b516ba0e6822", "https://i.vimeocdn.com/custom_asset/8456c41479a93f9f30a6293f71b0d575");
    return (0, _v3.useEffect)(() => {
      _v0 && _v2();
    }, [_v0, _v2]), (0, _v1.jsxs)(_v25.Modal, {
      isOpen: _v0,
      onClose: _v3,
      size: "md",
      children: [(0, _v1.jsx)(_v30.ModalOverlay, {
        zIndex: 0
      }), (0, _v1.jsxs)(_v28.ModalContent, {
        containerProps: {
          style: {
            zIndex: 0
          }
        },
        borderRadius: (0, _v44.rem)(24),
        maxWidth: [(0, _v44.rem)(354), (0, _v44.rem)(354), (0, _v44.rem)(600)],
        maxHeight: "90vh",
        overflowY: "auto",
        width: "100%",
        mx: (0, _v44.rem)(16),
        p: "0",
        position: "relative",
        children: [(0, _v1.jsxs)(_v43.Flex, {
          direction: "column",
          align: "center",
          pt: [(0, _v44.rem)(20), (0, _v44.rem)(20), (0, _v44.rem)(12)],
          pb: (0, _v44.rem)(16),
          children: [(0, _v1.jsx)(_v43.Flex, {
            direction: "column",
            align: "center",
            px: [(0, _v44.rem)(20), (0, _v44.rem)(20), (0, _v44.rem)(24)],
            w: "100%",
            children: (0, _v1.jsxs)(_v43.Flex, {
              direction: "column",
              align: "center",
              gap: [(0, _v44.rem)(24), (0, _v44.rem)(24), (0, _v44.rem)(32)],
              w: "100%",
              maxW: (0, _v44.rem)(400),
              pt: (0, _v44.rem)(24),
              pb: [(0, _v44.rem)(12), (0, _v44.rem)(12), (0, _v44.rem)(24)],
              children: [(0, _v1.jsxs)(_v43.Flex, {
                direction: "column",
                align: "center",
                gap: [(0, _v44.rem)(16), (0, _v44.rem)(16), (0, _v44.rem)(24)],
                w: "100%",
                children: [(0, _v1.jsx)(_v23.Header, {
                  size: {
                    base: "lg",
                    md: "xl"
                  },
                  textAlign: "center",
                  w: "100%",
                  children: (0, _v32.translate)({
                    singular: "Your background video has been paused",
                    dictionary: {
                      es: {
                        singular: "Tu vídeo de fondo ha sido pausado"
                      },
                      "de-DE": {
                        singular: "Ihr Hintergrundvideo wurde pausiert"
                      },
                      "fr-FR": {
                        singular: "Votre vidéo d'arrière-plan a été mise en pause"
                      },
                      "ja-JP": {
                        singular: "背景動画は一時停止されました"
                      },
                      "ko-KR": {
                        singular: "귀하의 배경 동영상이 일시 중지되었습니다"
                      },
                      "pt-BR": {
                        singular: "Seu vídeo de fundo foi pausado"
                      },
                      "zh-CN": {
                        singular: "您的背景视频已暂停"
                      }
                    }
                  })
                }), (0, _v1.jsx)(_v23.Header, {
                  size: {
                    base: "xs",
                    md: "sm"
                  },
                  textAlign: "center",
                  color: "text-secondary",
                  w: "100%",
                  children: (0, _v32.translate)({
                    singular: "Background mode is a paid feature. Your embedded background video is currently not playing on your website. Upgrade your plan to re-enable it.",
                    dictionary: {
                      es: {
                        singular: "El modo de fondo es una función de pago. Tu vídeo de fondo incrustado actualmente no se está reproduciendo en tu sitio web. Actualiza tu plan para volver a activarlo."
                      },
                      "de-DE": {
                        singular: "Der Hintergrundmodus ist eine kostenpflichtige Funktion. Ihr eingebettetes Hintergrundvideo wird derzeit auf Ihrer Website nicht abgespielt. Aktualisieren Sie Ihren Tarif, um es wieder zu aktivieren."
                      },
                      "fr-FR": {
                        singular: "Le mode d'arrière-plan est une fonctionnalité payante. Votre vidéo d'arrière-plan intégrée ne se lit actuellement pas sur votre site web. Mettez à niveau votre offre pour la réactiver."
                      },
                      "ja-JP": {
                        singular: "バックグラウンドモードは有料機能です。埋め込まれた背景動画は現在ウェブサイト上で再生されていません。再度有効にするにはプランをアップグレードしてください。"
                      },
                      "ko-KR": {
                        singular: "백그라운드 모드는 유료 기능입니다. 귀하의 임베디드 배경 동영상이 현재 웹사이트에서 재생되지 않고 있습니다. 다시 활성화하려면 요금제를 업그레이드하세요."
                      },
                      "pt-BR": {
                        singular: "O modo de fundo é um recurso pago. Seu vídeo de fundo incorporado não está sendo reproduzido no seu site. Atualize seu plano para reativá-lo."
                      },
                      "zh-CN": {
                        singular: "背景模式为付费功能。您嵌入的背景视频当前未在您的网站上播放。升级您的计划以重新启用该功能。"
                      }
                    }
                  })
                })]
              }), (0, _v1.jsx)(_v57.Box, {
                as: "img",
                src: _v5,
                alt: "",
                w: "100%",
                h: [(0, _v44.rem)(228), (0, _v44.rem)(228), (0, _v44.rem)(299)],
                objectFit: "cover",
                borderRadius: (0, _v44.rem)(20),
                display: "block"
              })]
            })
          }), (0, _v1.jsx)(_v43.Flex, {
            direction: "column",
            align: "center",
            px: [(0, _v44.rem)(20), (0, _v44.rem)(20), (0, _v44.rem)(24)],
            py: [(0, _v44.rem)(20), (0, _v44.rem)(20), (0, _v44.rem)(24)],
            w: "100%",
            children: (0, _v1.jsx)(_v22.Button, {
              as: "a",
              href: _v1,
              size: "lg",
              variant: "primary",
              w: "100%",
              maxW: (0, _v44.rem)(400),
              onClick: _v4,
              children: (0, _v32.translate)({
                singular: "See plans",
                dictionary: {
                  es: {
                    singular: "Ver los planes"
                  },
                  "de-DE": {
                    singular: "Tarife ansehen"
                  },
                  "fr-FR": {
                    singular: "Abonnements"
                  },
                  "ja-JP": {
                    singular: "プランを見る"
                  },
                  "ko-KR": {
                    singular: "멤버십 보기"
                  },
                  "pt-BR": {
                    singular: "Veja os planos"
                  },
                  "zh-CN": {
                    singular: "查看套餐"
                  }
                }
              })
            })
          })]
        }), (0, _v1.jsx)(_v27.ModalCloseButton, {
          opacity: .4,
          top: [(0, _v44.rem)(12), (0, _v44.rem)(12), (0, _v44.rem)(20)],
          right: [(0, _v44.rem)(12), (0, _v44.rem)(12), (0, _v44.rem)(20)]
        })]
      })]
    });
  }
  var _v182 = _v0.i(0);
  let _v183 = "background-embed-upsell-shown";
  var _v184 = _v0.i(0),
    _v185 = _v0.i(0),
    _v186 = _v0.i(0);
  let _v187 = () => {
    let [_v0, _v1] = (0, _v3.useState)(0),
      _v2 = (0, _v3.useRef)(null);
    return {
      ref: (0, _v3.useCallback)(_v0 => {
        if (_v2.current && (_v2.current.disconnect(), _v2.current = null), !_v0) return;
        let _v1 = (_v0 => {
          let _v1 = _v0.getBoundingClientRect().width;
          if (_v1 > 0) return _v1;
          let _v2 = _v0.parentElement?.getBoundingClientRect().width ?? 0;
          return _v2 > 0 ? _v2 : window.innerWidth;
        })(_v0);
        if (_v1 > 0 && _v1(_v0 => _v0 === _v1 ? _v0 : _v1), "function" == typeof _v186.default) {
          let _v0 = new _v186.default(_v0 => {
            if (!_v0) return;
            let _v1 = _v0[0].target.getBoundingClientRect().width;
            _v1 > 0 && _v1(_v0 => _v0 === _v1 ? _v0 : _v1);
          });
          _v0.observe(_v0), _v2.current = _v0;
        }
      }, []),
      width: _v0
    };
  };
  var _v188 = _v0.i(0),
    _v189 = _v0.i(0);
  let _v190 = {
      sm: {
        BoldTextDisplay: "inline",
        BoldTextStyle: "heading-xs",
        BoxBorderRadius: "16px",
        BoxHeight: "46px",
        BoxWidth: "100%",
        BoxMaxWidth: "none",
        BoxMinWidth: "150px",
        CtaSubCopyDisplay: "none",
        CtaSubCopyLineHeight: "16px",
        Gap: "12px"
      },
      md: {
        BoldTextDisplay: "inline",
        BoldTextStyle: "heading-2xs",
        BoxBorderRadius: "16px",
        BoxHeight: "67px",
        BoxWidth: "auto",
        BoxMaxWidth: "205px",
        BoxMinWidth: "165px",
        CtaSubCopyDisplay: "inline",
        CtaSubCopyLineHeight: "16px",
        Gap: "12px"
      },
      lg: {
        BoldTextDisplay: "block",
        BoldTextStyle: "heading-sm",
        BoxBorderRadius: "16px",
        BoxHeight: "72px",
        BoxWidth: "auto",
        BoxMaxWidth: "288px",
        BoxMinWidth: "205px",
        CtaSubCopyDisplay: "inline-block",
        CtaSubCopyLineHeight: "17px",
        Gap: "16px"
      }
    },
    _v191 = ({
      badge: _v0,
      copy: _v1,
      featured: _v2,
      href: _v3,
      icon: _v4,
      linkDataId: _v5,
      onClick: _v6,
      size: _v7 = "md"
    }) => {
      let _v8 = _v190[_v7],
        _v9 = (0, _v180.useColorModeValue)("vimeoBlue.50", "darkBlueAlpha.500"),
        _v10 = (0, _v180.useColorModeValue)("vimeoBlue.100", "vimeoBlue.800"),
        _v11 = (0, _v180.useColorModeValue)("vimeoBlue.200", "vimeoBlue.800"),
        _v12 = _v5 || `quick_link${_v3.split("?")[0].replace(/[\/?-]/g, "_").replace(/_+$/, "")}`;
      return (0, _v1.jsx)(_v188.default, {
        href: _v3,
        children: (0, _v1.jsxs)(_v43.Flex, {
          alignItems: "center",
          backgroundColor: _v2 ? _v9 : "fill-surface",
          borderRadius: _v8.BoxBorderRadius,
          borderWidth: _v2 ? "1px" : void 0,
          borderStyle: _v2 ? "solid" : void 0,
          borderColor: _v2 ? _v11 : void 0,
          gap: _v8.Gap,
          height: _v8.BoxHeight,
          width: _v8.BoxWidth,
          maxWidth: _v8.BoxMaxWidth,
          minWidth: _v8.BoxMinWidth,
          onClick: _v6,
          padding: _v8.Gap,
          position: "relative",
          transition: "background-color 250ms ease-in-out, color 250ms ease-in-out",
          "data-id": _v12,
          _hover: {
            backgroundColor: _v2 ? _v10 : "fill-component-hover"
          },
          _focusVisible: {
            outline: "2px solid",
            outlineColor: "fill-brand",
            outlineOffset: "1px"
          },
          children: [(0, _v1.jsx)(_v43.Flex, {
            flexShrink: 0,
            children: _v4
          }), (0, _v1.jsx)(_v57.Box, {
            lineHeight: "1rem",
            children: _v1
          }), _v0 && (0, _v1.jsx)(_v57.Box, {
            position: "absolute",
            top: "6px",
            right: "8px",
            children: _v0
          })]
        })
      });
    },
    _v192 = ({
      size: _v0,
      children: _v1
    }) => (0, _v1.jsx)(_v57.Box, {
      className: "quick-link-bold",
      color: "text-primary",
      display: _v190[_v0].BoldTextDisplay,
      textStyle: _v190[_v0].BoldTextStyle,
      children: _v1
    }),
    _v193 = ({
      size: _v0,
      children: _v1
    }) => (0, _v1.jsx)(_v57.Box, {
      as: "span",
      textStyle: "body-sm",
      color: "text-secondary",
      className: "quick-link-cta-subcopy",
      display: _v190[_v0].CtaSubCopyDisplay,
      lineHeight: _v190[_v0].CtaSubCopyLineHeight,
      children: _v1
    }),
    _v194 = ({
      size: _v0 = "md"
    }) => {
      let _v1 = _v190[_v0];
      return (0, _v1.jsx)(_v57.Box, {
        width: _v1.BoxWidth,
        maxWidth: _v1.BoxMaxWidth,
        minWidth: _v1.BoxMinWidth,
        height: _v1.BoxHeight,
        borderRadius: _v1.BoxBorderRadius,
        overflow: "hidden",
        children: (0, _v1.jsx)(_v189.BokehSkeleton, {
          h: "100%",
          w: "100%"
        })
      });
    };
  var _v195 = _v0.i(0),
    _v196 = _v0.i(0),
    _v197 = _v0.i(0),
    _v198 = _v0.i(0);
  let _v199 = (_v0, _v1, _v2, _v3, _v4) => {
      let _v5,
        _v6,
        _v7,
        _v8,
        _v9 = (_v5 = (0, _v42.useViewer)(), _v6 = (0, _v198.buildViewBpContext)({
          view_type: "impression",
          feature: null
        }), _v7 = (0, _v121.buildTeamBpContextFromTeamUser)(_v5?.teamUser), _v8 = (0, _v122.buildThirdPartyIntegrationBpContext)({
          is_integration: !1,
          integration_id: null,
          integration_name: null,
          is_partner: !1
        }), ({
          isEmptyState: _v0,
          productAnalyticsContextProduct: _v1,
          productAnalyticsContextFeature: _v2,
          productAnalyticsContextLocation: _v3,
          productAnalyticsContextFlow: _v4,
          productAnalyticsContextElement: _v5,
          productAnalyticsContextEntityType: _v6,
          webContextCopy: _v7
        }) => {
          let _v8;
          (0, _v124.sendBpEventWithContexts)("vimeo.widget_impression", {
            ...(_v8 = _v7 ?? null, (0, _v123.buildWebBpContext)({
              page_name: "logged_in_home_page",
              referrer_page_name: null,
              referrer: document.referrer,
              path: window.location.pathname,
              target: null,
              copy: _v8
            })),
            ...(0, _v120.buildProductAnalyticsBpContext)({
              product: _v1 ?? "general",
              feature: _v2 ?? "widgets",
              location: _v3 ?? "page_area",
              modal_name: null,
              flow: _v4 ?? null,
              element: _v5 ?? "widget",
              entity_type: _v6 ?? "widget",
              device_type: (0, _v197.default)()
            }),
            ..._v6,
            ..._v7,
            ..._v8
          }, 2, {
            widget_placement: _v1,
            widget_name: _v0,
            is_dismissable: !1,
            is_dynamic_recommendations_widget: !1,
            is_empty_state: _v0
          });
        }),
        [_v10, _v11] = (0, _v3.useState)(!1);
      (0, _v3.useEffect)(() => {
        _v2 || !_v3 || _v10 || (_v9(_v4), _v11(!0));
      }, [_v2, _v3]);
    },
    _v200 = (0, _v3.forwardRef)((_v0, _v1) => {
      let _v2 = (0, _v180.useColorModeValue)("white", "#11191D"),
        _v3 = (0, _v180.useColorModeValue)("#4B7AC2", "#6187C2");
      return (0, _v1.jsxs)("svg", {
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: _v1,
        ..._v0,
        children: [(0, _v1.jsxs)("g", {
          clipPath: "url(#clip0_2931_103856)",
          children: [(0, _v1.jsx)("rect", {
            width: "32",
            height: "32",
            rx: "8",
            fill: _v3
          }), (0, _v1.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M22.6161 16.4482L22.5336 16.3607L22.4371 16.2643C21.638 15.4652 20.3424 15.4652 19.5434 16.2643L14.7687 21.0389C14.6643 21.1433 14.5966 21.2787 14.5758 21.4248L14.2382 23.788C14.1738 24.2381 14.5597 24.624 15.0098 24.5597L17.373 24.2221C17.5191 24.2012 17.6545 24.1335 17.7589 24.0291L22.5336 19.2545C23.3041 18.4839 23.3316 17.2517 22.6161 16.4482ZM21.569 18.2905L16.9551 22.9044L15.7172 23.0812L15.894 21.8433L20.5079 17.2294C20.7743 16.9631 21.2062 16.9631 21.4725 17.2294L21.569 17.3259C21.8353 17.5922 21.8353 18.0241 21.569 18.2905Z",
            fill: _v2
          }), (0, _v1.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M18.4596 11.0068C19.213 11.0068 19.8237 11.6176 19.8237 12.371V14.4172H18.4596V12.371H10.9569V19.8737H13.0031V21.2378H10.9569C10.2035 21.2378 9.59277 20.627 9.59277 19.8737V12.371C9.59277 11.6176 10.2035 11.0068 10.9569 11.0068H18.4596Z",
            fill: _v2
          }), (0, _v1.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M13.6865 14.8353C13.6865 14.4586 13.9541 14.3093 14.2805 14.4997L16.5024 15.796C16.8304 15.9874 16.8288 16.302 16.5102 16.4918L14.2727 17.8249C13.949 18.0178 13.6865 17.8719 13.6865 17.492L13.6865 14.8353Z",
            fill: _v2
          })]
        }), (0, _v1.jsx)("defs", {
          children: (0, _v1.jsx)("clipPath", {
            id: "clip0_2931_103856",
            children: (0, _v1.jsx)("rect", {
              width: "32",
              height: "32",
              rx: "8",
              fill: "white"
            })
          })
        })]
      });
    });
  var _v201 = _v0.i(0),
    _v202 = _v0.i(0);
  let _v203 = ({
      Icon: _v0,
      size: _v1
    }) => {
      let _v2 = (0, _v180.useColorModeValue)("darkBlueAlpha.200", "input-stroke"),
        _v3 = _v204[_v1];
      return (0, _v1.jsx)(_v202.Center, {
        backgroundColor: "sm" === _v1 ? "unset" : _v2,
        boxSize: _v3.boxSize,
        borderRadius: "10px",
        children: (0, _v1.jsx)(_v0, {
          boxSize: _v3.iconSize,
          color: "text-primary"
        })
      });
    },
    _v204 = {
      sm: {
        boxSize: "xs",
        iconSize: "22px"
      },
      md: {
        boxSize: "sm",
        iconSize: "16px"
      },
      lg: {
        boxSize: "md",
        iconSize: "24px"
      }
    },
    _v205 = ({
      IrisIcon: _v0,
      BokehIcon: _v1,
      size: _v2
    }) => (0, _v201.useIsBokeh)() ? (0, _v1.jsx)(_v203, {
      Icon: _v1,
      size: _v2
    }) : (0, _v1.jsx)(_v0, {}),
    _v206 = () => {
      let _v0 = (0, _v42.useViewer)();
      return (0, _v3.useCallback)(({
        copy: _v0,
        feature: _v1,
        flow: _v2,
        product: _v3,
        entityType: _v4
      }) => {
        (0, _v124.sendBpEventWithContexts)("vimeo.start_new_video_flow", {
          ...(0, _v119.buildActionBpContext)({
            action_type: "click",
            feature: null
          }),
          ...(0, _v123.buildWebBpContext)({
            page_name: "logged_in_home_page",
            referrer_page_name: null,
            referrer: document.referrer,
            path: window.location.pathname,
            target: null,
            copy: _v0
          }),
          ...(0, _v120.buildProductAnalyticsBpContext)({
            product: _v3,
            feature: _v1,
            location: "one_click_bar",
            modal_name: null,
            flow: _v2,
            element: "button",
            entity_type: _v4,
            copy: _v0,
            device_type: (0, _v197.default)(),
            is_user_facing_data: !0
          }),
          ...(0, _v121.buildTeamBpContextFromTeamUser)(_v0?.teamUser),
          ...(0, _v122.buildThirdPartyIntegrationBpContext)({
            is_integration: !1,
            integration_id: null,
            integration_name: null,
            managed_user_id: null,
            app_id: null,
            integration_type: null,
            partner_bucket: null,
            is_partner: null
          })
        });
      }, [_v0?.teamUser]);
    },
    _v207 = ({
      size: _v0
    }) => {
      let _v1 = _v206(),
        {
          trackHomepageActionCardClicked: _v2
        } = _v14();
      _v199("one_click_bar", null, !1, !0, {
        isEmptyState: null,
        productAnalyticsContextFeature: "create",
        productAnalyticsContextLocation: "one_click_bar",
        productAnalyticsContextFlow: "blank_editor",
        productAnalyticsContextElement: "button",
        productAnalyticsContextEntityType: null,
        webContextCopy: "create new or from template"
      });
      let _v3 = (0, _v196.useIsMobile)();
      return (0, _v1.jsx)(_v191, {
        copy: (0, _v32.translate)({
          singular: "{B}Create{/B} {C}new or from template{/C}",
          replacements: {
            B: _v0 => (0, _v1.jsx)(_v192, {
              size: _v0,
              children: _v0
            }, "b"),
            C: _v0 => (0, _v1.jsx)(_v193, {
              size: _v0,
              children: _v0
            }, "c")
          },
          dictionary: {
            es: {
              singular: "{B}Crear{/B} {C}nuevo o desde una plantilla{/C}"
            },
            "de-DE": {
              singular: "{B}Erstellen{/B} {C}neu oder aus Vorlage{/C}"
            },
            "fr-FR": {
              singular: "{B}Créer{/B} {C}à partir d'un modèle ou de zéro{/C}"
            },
            "ja-JP": {
              singular: "{C}新規で、またはテンプレートから{/C}{B}作成{/B}"
            },
            "ko-KR": {
              singular: "{C}새로 만들거나 템플릿으로{/C} {B}만들기{/B}"
            },
            "pt-BR": {
              singular: "{B}Criar{/B} {C}novo ou com modelo{/C}"
            },
            "zh-CN": {
              singular: "{B}新建{/B}{C}或从模板创建{/C}"
            }
          }
        }),
        href: _v3 ? "https://vimeo.page.link/createvideo" : "/create/edit?blank=true",
        linkDataId: "quick_link_create_edit",
        icon: (0, _v1.jsx)(_v205, {
          IrisIcon: _v200,
          BokehIcon: _v195.CreateVideo,
          size: _v0
        }),
        onClick: () => {
          _v1({
            copy: "create new or from template",
            feature: "create",
            flow: "blank_editor",
            product: "general",
            entityType: null
          }), _v2({
            homepageActionCardType: "create"
          });
        },
        size: _v0
      });
    };
  var _v208 = _v0.i(0);
  let _v209 = (0, _v3.forwardRef)((_v0, _v1) => {
      let _v2 = (0, _v180.useColorModeValue)("white", "#11191D"),
        _v3 = (0, _v180.useColorModeValue)("#008285", "#438385");
      return (0, _v1.jsxs)("svg", {
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: _v1,
        ..._v0,
        children: [(0, _v1.jsxs)("g", {
          clipPath: "url(#clip0_2931_104115)",
          children: [(0, _v1.jsx)("rect", {
            width: "32",
            height: "32",
            rx: "8",
            fill: _v3
          }), (0, _v1.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M8.22852 13.7509C8.22852 12.9969 8.85083 12.3857 9.61849 12.3857H16.5683C17.336 12.3857 17.9583 12.9969 17.9583 13.7509C17.9583 14.2971 18.6199 14.5693 19.0043 14.1812L19.9018 13.275C20.0326 13.1429 20.2123 13.0684 20.4 13.0684H21.4332C21.8171 13.0684 22.1282 13.374 22.1282 13.7509V20.5767C22.1282 20.9536 21.8171 21.2592 21.4332 21.2592H20.4C20.2123 21.2592 20.0326 21.1847 19.9018 21.0526L19.0043 20.1464C18.6199 19.7583 17.9583 20.0305 17.9583 20.5767C17.9583 21.3306 17.336 21.9418 16.5683 21.9418H9.61849C8.85083 21.9418 8.22852 21.3306 8.22852 20.5767V13.7509ZM9.61849 15.088C9.61849 14.3495 10.2171 13.7509 10.9556 13.7509H15.2312C15.9697 13.7509 16.5683 14.3495 16.5683 15.088V19.2395C16.5683 19.978 15.9697 20.5767 15.2312 20.5767H10.9556C10.2171 20.5767 9.61849 19.978 9.61849 19.2395V15.088ZM18.7923 17.9745C18.3356 17.5305 18.3356 16.7971 18.7923 16.3531L20.6842 14.4429C20.6902 14.4369 20.6982 14.4335 20.7067 14.4335C20.7241 14.4335 20.7383 14.4477 20.7383 14.4651V19.8625C20.7383 19.8799 20.7241 19.8941 20.7067 19.8941C20.6982 19.8941 20.6902 19.8907 20.6842 19.8847L18.7923 17.9745Z",
            fill: _v2
          })]
        }), (0, _v1.jsx)("defs", {
          children: (0, _v1.jsx)("clipPath", {
            id: "clip0_2931_104115",
            children: (0, _v1.jsx)("rect", {
              width: "32",
              height: "32",
              rx: "8",
              fill: "white"
            })
          })
        })]
      });
    }),
    _v210 = ({
      onClick: _v0,
      size: _v1
    }) => {
      let _v2 = _v206(),
        {
          trackHomepageActionCardClicked: _v3
        } = _v14();
      return _v199("one_click_bar", null, !1, !0, {
        isEmptyState: null,
        productAnalyticsContextProduct: "general",
        productAnalyticsContextFeature: "live_event",
        productAnalyticsContextLocation: "one_click_bar",
        productAnalyticsContextFlow: "events",
        productAnalyticsContextElement: "button",
        productAnalyticsContextEntityType: null,
        webContextCopy: "host event or webinar"
      }), (0, _v1.jsx)(_v191, {
        copy: (0, _v1.jsx)("span", {
          children: (0, _v32.translate)({
            singular: "{B}Host{/B} {C}event or webinar{/C}",
            replacements: {
              B: _v0 => (0, _v1.jsx)(_v192, {
                size: _v1,
                children: _v0
              }, "b"),
              C: _v0 => (0, _v1.jsx)(_v193, {
                size: _v1,
                children: _v0
              }, "c")
            },
            dictionary: {
              es: {
                singular: "{B}Organizar{/B} {C}evento o seminario web{/C}"
              },
              "de-DE": {
                singular: "{B}Veranstalten{/B} {C}Event oder Webinar{/C}"
              },
              "fr-FR": {
                singular: "{B}Organiser{/B} {C}un événement ou un webinaire{/C}"
              },
              "ja-JP": {
                singular: "{C}イベントまたはウェビナーを{/C}{B}主催{/B}"
              },
              "ko-KR": {
                singular: "{C}이벤트 또는 웨비나{/C} {B}주최{/B}"
              },
              "pt-BR": {
                singular: "{B}Organizar{/B} {C}evento ou webinar{/C}"
              },
              "zh-CN": {
                singular: "{B}举办{/B} {C}活动或网络研讨会{/C}"
              }
            }
          })
        }),
        href: "/live/select",
        icon: (0, _v1.jsx)(_v205, {
          IrisIcon: _v209,
          BokehIcon: _v208.CameraOn,
          size: _v1
        }),
        onClick: _v0 => {
          _v0?.(_v0), _v2({
            copy: "host event or webinar",
            feature: "live_event",
            flow: "events",
            product: "general",
            entityType: null
          }), _v3({
            homepageActionCardType: "host"
          });
        },
        size: _v1
      });
    };
  var _v211 = _v0.i(0);
  let _v212 = (0, _v3.forwardRef)((_v0, _v1) => {
      let _v2 = (0, _v180.useColorModeValue)("white", "#11191D"),
        _v3 = (0, _v180.useColorModeValue)("#FFB21E", "#FFDC99");
      return (0, _v1.jsxs)("svg", {
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: _v1,
        ..._v0,
        children: [(0, _v1.jsxs)("g", {
          clipPath: "url(#clip0_2931_103730)",
          children: [(0, _v1.jsx)("rect", {
            width: "32",
            height: "32",
            rx: "8",
            fill: _v3
          }), (0, _v1.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M16.2215 10.8496V18.4412L19.4144 15.2483L20.2674 16.1013L16.0452 20.3235C15.8096 20.5591 15.4277 20.5591 15.1921 20.3235L10.9699 16.1013L11.8229 15.2483L15.0152 18.4405V10.8496H16.2215ZM10.7917 21.1017C10.4585 21.1017 10.1885 21.3717 10.1885 21.7049C10.1885 22.038 10.4585 22.308 10.7917 22.308H20.4424C20.7756 22.308 21.0456 22.038 21.0456 21.7049C21.0456 21.3717 20.7756 21.1017 20.4424 21.1017H10.7917Z",
            fill: _v2
          })]
        }), (0, _v1.jsx)("defs", {
          children: (0, _v1.jsx)("clipPath", {
            id: "clip0_2931_103730",
            children: (0, _v1.jsx)("rect", {
              width: "32",
              height: "32",
              rx: "8",
              fill: "white"
            })
          })
        })]
      });
    }),
    _v213 = (0, _v3.lazy)(() => _v0.A(0)),
    _v214 = ({
      size: _v0
    }) => {
      let [_v1, _v2] = (0, _v3.useState)(!1),
        [_v3, _v4] = (0, _v3.useState)(!1),
        _v5 = _v206(),
        {
          trackHomepageActionCardClicked: _v6
        } = _v14();
      return _v199("one_click_bar", null, !1, !0, {
        isEmptyState: null,
        productAnalyticsContextProduct: "upload",
        productAnalyticsContextFeature: "upload",
        productAnalyticsContextLocation: "one_click_bar",
        productAnalyticsContextFlow: "import",
        productAnalyticsContextElement: "button",
        productAnalyticsContextEntityType: null,
        webContextCopy: "import from drive and more"
      }), (0, _v3.useEffect)(() => {
        "true" === new URLSearchParams(window.location.search).get("show-import-modal") && (_v4(!0), _v2(!0));
      }, []), (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v191, {
          copy: (0, _v1.jsx)("span", {
            children: (0, _v32.translate)({
              singular: "{B}Import{/B} {C}from Drive and more{/C}",
              replacements: {
                B: _v0 => (0, _v1.jsx)(_v192, {
                  size: _v0,
                  children: _v0
                }, "b"),
                C: _v0 => (0, _v1.jsx)(_v193, {
                  size: _v0,
                  children: _v0
                }, "c")
              },
              dictionary: {
                es: {
                  singular: "{B}Importar{/B} {C}desde Drive y más{/C}"
                },
                "de-DE": {
                  singular: "{B}Importieren{/B} {C}von Drive und mehr{/C}"
                },
                "fr-FR": {
                  singular: "{B}Importer{/B} {C}depuis Drive et plus encore{/C}"
                },
                "ja-JP": {
                  singular: "{C}ドライブなどから{/C}{B}インポート{/B}"
                },
                "ko-KR": {
                  singular: "{C}드라이브 등에서{/C} {B}가져오기{/B}"
                },
                "pt-BR": {
                  singular: "{B}Importar{/B} {C}do Drive e muito mais{/C}"
                },
                "zh-CN": {
                  singular: "{C}从驱动器等设备{/C}{B}导入{/B}"
                }
              }
            })
          }),
          href: "",
          icon: (0, _v1.jsx)(_v205, {
            IrisIcon: _v212,
            BokehIcon: _v211.DownloadImport,
            size: _v0
          }),
          onClick: () => {
            _v2(!0), _v5({
              copy: "import from drive and more",
              feature: "upload",
              flow: "import",
              product: "general",
              entityType: "video"
            }), _v6({
              homepageActionCardType: "import"
            });
          },
          size: _v0
        }), _v1 && (0, _v1.jsx)(_v3.Suspense, {
          fallback: (0, _v1.jsx)(_v1.Fragment, {}),
          children: (0, _v1.jsx)(_v213, {
            isOpen: _v1,
            setIsOpen: _v0 => {
              _v2(_v0), _v0 || _v4(!1);
            },
            referrerPage: "homepage",
            isAutomatic: _v3
          })
        })]
      });
    };
  var _v215 = _v0.i(0);
  let _v216 = (0, _v3.forwardRef)((_v0, _v1) => {
      let _v2 = (0, _v180.useColorModeValue)("white", "#11191D"),
        _v3 = (0, _v180.useColorModeValue)("#DB2E2E", "#DB6E6E");
      return (0, _v1.jsxs)("svg", {
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: _v1,
        ..._v0,
        children: [(0, _v1.jsxs)("g", {
          clipPath: "url(#clip0_2931_103982)",
          children: [(0, _v1.jsx)("rect", {
            width: "32",
            height: "32",
            rx: "8",
            fill: _v3
          }), (0, _v1.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M20.5869 17.0574C20.5869 19.7877 18.3736 22.001 15.6433 22.001C12.9131 22.001 10.6998 19.7877 10.6998 17.0574C10.6998 14.3271 12.9131 12.1138 15.6433 12.1138C18.3736 12.1138 20.5869 14.3271 20.5869 17.0574ZM15.6433 23.2369C19.0562 23.2369 21.8228 20.4702 21.8228 17.0574C21.8228 13.6446 19.0562 10.8779 15.6433 10.8779C12.2305 10.8779 9.46387 13.6446 9.46387 17.0574C9.46387 20.4702 12.2305 23.2369 15.6433 23.2369ZM15.644 19.5299C17.0092 19.5299 18.1158 18.4232 18.1158 17.0581C18.1158 15.693 17.0092 14.5863 15.644 14.5863C14.2789 14.5863 13.1722 15.693 13.1722 17.0581C13.1722 18.4232 14.2789 19.5299 15.644 19.5299Z",
            fill: _v2
          })]
        }), (0, _v1.jsx)("defs", {
          children: (0, _v1.jsx)("clipPath", {
            id: "clip0_2931_103982",
            children: (0, _v1.jsx)("rect", {
              width: "32",
              height: "32",
              rx: "8",
              fill: "white"
            })
          })
        })]
      });
    }),
    _v217 = ({
      size: _v0
    }) => {
      let _v1 = _v206(),
        {
          trackHomepageActionCardClicked: _v2
        } = _v14();
      return _v199("one_click_bar", null, !1, !0, {
        isEmptyState: null,
        productAnalyticsContextFeature: "record",
        productAnalyticsContextLocation: "one_click_bar",
        productAnalyticsContextElement: "button",
        productAnalyticsContextEntityType: null,
        webContextCopy: "record screen or webcam"
      }), (0, _v1.jsx)(_v191, {
        copy: (0, _v32.translate)({
          singular: "{B}Record{/B} {C}screen or webcam{/C}",
          replacements: {
            B: _v0 => (0, _v1.jsx)(_v192, {
              size: _v0,
              children: _v0
            }, "b"),
            C: _v0 => (0, _v1.jsx)(_v193, {
              size: _v0,
              children: _v0
            }, "c")
          },
          dictionary: {
            es: {
              singular: "{B}Grabar{/B} {C}pantalla o cámara web{/C}"
            },
            "de-DE": {
              singular: "{B}Aufzeichnen{/B} {C}Bildschirm oder Webcam{/C}"
            },
            "fr-FR": {
              singular: "{B}Enregistrer{/B} {C}l'écran ou la caméra{/C}"
            },
            "ja-JP": {
              singular: "{C}画面またはウェブカメラを{/C}{B}録画{/B}"
            },
            "ko-KR": {
              singular: "{C}화면 또는 웹캠{/C} {B}녹화{/B}"
            },
            "pt-BR": {
              singular: "{B}Gravar{/B} {C}tela ou webcam{/C}"
            },
            "zh-CN": {
              singular: "{B}录制{/B} {C}屏幕或网络摄像头{/C}"
            }
          }
        }),
        href: "/record/start-recording",
        icon: (0, _v1.jsx)(_v205, {
          IrisIcon: _v216,
          BokehIcon: _v215.Record,
          size: _v0
        }),
        onClick: () => {
          _v1({
            copy: "record screen or webcam",
            feature: "record",
            flow: null,
            product: "general",
            entityType: null
          }), _v2({
            homepageActionCardType: "record"
          });
        },
        size: _v0
      });
    };
  var _v218 = _v0.i(0),
    _v219 = _v0.i(0);
  let _v220 = ({
    featured: _v0,
    showBadge: _v1,
    size: _v2
  }) => {
    let {
        openReviewModal: _v3
      } = (0, _v104.useReviewModal)(),
      {
        trackReviewEntryPointClicked: _v4
      } = (0, _v153.useMaximizeReviewAdoptionTracking)();
    return (0, _v1.jsx)(_v191, {
      copy: (0, _v32.translate)({
        singular: "{B}Review{/B} {C}and Collaboration{/C}",
        replacements: {
          B: _v0 => (0, _v1.jsx)(_v192, {
            size: _v2,
            children: _v0
          }, "b"),
          C: _v0 => (0, _v1.jsx)(_v193, {
            size: _v2,
            children: _v0
          }, "c")
        },
        dictionary: {
          es: {
            singular: "{B}Review{/B} {C}y Colaboración{/C}"
          },
          "de-DE": {
            singular: "{B}Überprüfung{/B} {C}und Zusammenarbeit{/C}"
          },
          "fr-FR": {
            singular: "{B}Review{/B} {C}et collaboration{/C}"
          },
          "ja-JP": {
            singular: "{B}レビュー{/B} {C}とコラボレーション{/C}"
          },
          "ko-KR": {
            singular: "{B}Review{/B} {C}및 협업{/C}"
          },
          "pt-BR": {
            singular: "{B}Review{/B} {C}e Colaboração{/C}"
          },
          "zh-CN": {
            singular: "{B}Review{/B} {C}与协作{/C}"
          }
        }
      }),
      href: "#",
      icon: (0, _v1.jsx)(_v205, {
        IrisIcon: _v218.Chats,
        BokehIcon: _v218.Chats,
        size: _v2
      }),
      onClick: _v0 => {
        _v0.preventDefault(), _v4({
          entryPoint: "top_bar"
        }), _v3("top_bar");
      },
      size: _v2,
      featured: _v0,
      badge: _v1 ? (0, _v1.jsx)(_v219.NewBadge, {}) : void 0
    });
  };
  var _v221 = _v0.i(0);
  let _v222 = ({
    featured: _v0,
    showBadge: _v1,
    size: _v2
  }) => {
    let {
        openTransferFileModal: _v3
      } = (0, _v103.useTransferFileModal)(),
      {
        trackTransferEntryPointClicked: _v4
      } = (0, _v162.useFileTransferAdoptionTracking)();
    return (0, _v1.jsx)(_v191, {
      copy: (0, _v32.translate)({
        singular: "{B}Transfer{/B} {C}video files{/C}",
        replacements: {
          B: _v0 => (0, _v1.jsx)(_v192, {
            size: _v2,
            children: _v0
          }, "b"),
          C: _v0 => (0, _v1.jsx)(_v193, {
            size: _v2,
            children: _v0
          }, "c")
        },
        dictionary: {
          es: {
            singular: "{B}Transfer{/B} {C}archivos de vídeo{/C}"
          },
          "de-DE": {
            singular: "{B}Transfer{/B} {C}Videodateien{/C}"
          },
          "fr-FR": {
            singular: "{B}Transférez{/B} {C}des fichiers vidéo{/C}"
          },
          "ja-JP": {
            singular: "{B}Transfer{/B} {C}動画ファイル{/C}"
          },
          "ko-KR": {
            singular: "{B}Transfer{/B} {C}동영상 파일{/C}"
          },
          "pt-BR": {
            singular: "{B}Transfer{/B} {C}arquivos de vídeo{/C}"
          },
          "zh-CN": {
            singular: "{B}Transfer{/B} {C}视频文件{/C}"
          }
        }
      }),
      href: "#",
      icon: (0, _v1.jsx)(_v205, {
        IrisIcon: _v221.FileUpload,
        BokehIcon: _v221.FileUpload,
        size: _v2
      }),
      onClick: _v0 => {
        _v0.preventDefault(), _v4({
          entryPoint: "top_bar"
        }), _v3("top_bar");
      },
      size: _v2,
      featured: _v0,
      badge: _v1 ? (0, _v1.jsx)(_v219.NewBadge, {}) : void 0
    });
  };
  var _v223 = _v0.i(0),
    _v224 = _v0.i(0),
    _v225 = _v0.i(0),
    _v226 = _v0.i(0),
    _v227 = _v0.i(0);
  let _v228 = (0, _v3.forwardRef)((_v0, _v1) => {
      let _v2 = (0, _v180.useColorModeValue)("white", "#11191D"),
        _v3 = (0, _v180.useColorModeValue)("#00ADEF", "#78CEEF");
      return (0, _v1.jsxs)("svg", {
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: _v1,
        ..._v0,
        children: [(0, _v1.jsxs)("g", {
          clipPath: "url(#clip0_2931_103520)",
          children: [(0, _v1.jsx)("rect", {
            width: "32",
            height: "32",
            rx: "8",
            fill: _v3
          }), (0, _v1.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M13.622 13.0772C14.3049 11.6743 15.7422 10.8076 17.2116 10.8076C18.2589 10.8076 19.3352 11.2087 20.1488 12.0994C20.9049 12.9271 21.383 14.1204 21.4501 15.6605C22.3357 16.4397 22.8673 17.6862 22.8673 19.0895C22.8673 21.1618 21.136 22.7859 19.3325 22.7859H12.2628C10.4484 22.7859 8.72803 21.0968 8.72803 19.0427C8.72803 17.5847 9.49351 16.4919 10.3054 15.9369C10.517 15.2653 10.8636 14.5912 11.4189 14.0588C11.978 13.5225 12.7082 13.1693 13.622 13.0772ZM17.2116 12.3047C16.1263 12.3047 15.1075 13.0237 14.7595 14.0539L14.5924 14.5486L14.0962 14.5504C13.2721 14.5532 12.735 14.8164 12.368 15.1684C11.9881 15.5327 11.7345 16.0469 11.5824 16.6352L11.499 16.958L11.2162 17.1074C10.7194 17.3698 10.142 18.0639 10.142 19.0427C10.142 20.2381 11.1989 21.2888 12.2628 21.2888H15.0897V18.6052L14.1767 19.5718L13.1769 18.5132L15.7977 15.7383L18.4185 18.5132L17.4187 19.5718L16.5036 18.6029V21.2888H19.3325C20.4147 21.2888 21.4534 20.2733 21.4534 19.0895C21.4534 17.9646 20.9844 17.1009 20.3626 16.6676L20.0442 16.4457L20.0443 16.0421C20.0448 14.623 19.6458 13.7021 19.1325 13.1403C18.6153 12.5741 17.9213 12.3047 17.2116 12.3047Z",
            fill: _v2
          })]
        }), (0, _v1.jsx)("defs", {
          children: (0, _v1.jsx)("clipPath", {
            id: "clip0_2931_103520",
            children: (0, _v1.jsx)("rect", {
              width: "32",
              height: "32",
              rx: "8",
              fill: "white"
            })
          })
        })]
      });
    }),
    _v229 = ({
      size: _v0,
      viewer: _v1,
      bpEvent: _v2
    }) => {
      let {
          fileInputAccept: _v3,
          upload: _v4,
          uploads: _v5
        } = (0, _v226.useUploader)(),
        {
          open: _v6,
          close: _v7
        } = (0, _v175.useUpsellModal)(),
        _v8 = (0, _v3.useRef)(null),
        _v9 = _v1?.user?.id,
        _v10 = _v1?.teamUser ? _v1?.teamUser.ownerId : _v9,
        {
          data: _v11,
          isValidating: _v12
        } = (0, _v225.useGetUserFoldersDefault)(() => _v10 ? {
          where: {
            userId: _v10
          },
          select: ["uri"]
        } : null, {
          revalidateOnFocus: !1
        }),
        _v13 = Number(_v11?.uri.split("/").pop());
      return (0, _v3.useEffect)(() => {
        let _v0 = _v5?.find(_v0 => _v0.state === _v227.STATES.FAILED);
        _v0 && (_v0.error.includes("Your account doesn't have enough free space to upload this video") || _v0.error.includes("You have reached the storage limit for private or embeddable videos")) && _v6({
          tracking: {
            params: {
              feature: "quota",
              location: "page_area",
              page: "home",
              upsell_name: "error_view"
            },
            paywallTracking: {
              paywallTrigger: "wayfinder_home_quick_links_upload_button",
              paywallLocation: "wayfinder_home",
              paywallType: "popup",
              paywallFeature: "storage_limit"
            }
          },
          modalConfig: {
            headerText: (0, _v32.translate)({
              singular: "You've reached your storage limit",
              dictionary: {
                es: {
                  singular: "Alcanzaste el límite de almacenamiento."
                },
                "de-DE": {
                  singular: "Du hast dein Speicherlimit erreicht."
                },
                "fr-FR": {
                  singular: "Vous avez atteint votre limite de stockage"
                },
                "ja-JP": {
                  singular: "ストレージ容量の上限に達しました"
                },
                "ko-KR": {
                  singular: "저장소 한도에 도달했습니다."
                },
                "pt-BR": {
                  singular: "Você atingiu seu limite de armazenamento"
                }
              }
            }),
            subHeaderText: (0, _v32.translate)({
              singular: "To get more storage, upgrade your account",
              dictionary: {
                es: {
                  singular: "Para obtener más almacenamiento, actualice su cuenta"
                },
                "de-DE": {
                  singular: "Um mehr Speicherplatz zu erhalten, aktualisieren Sie Ihr Konto"
                },
                "fr-FR": {
                  singular: "Pour obtenir davantage d'espace de stockage, améliorez votre compte"
                },
                "ja-JP": {
                  singular: "ストレージ容量を増やすには、アカウントをアップグレードしてください"
                },
                "ko-KR": {
                  singular: "저장 공간을 늘리려면, 계정을 업그레이드하세요"
                },
                "pt-BR": {
                  singular: "Para obter mais armazenamento, atualize sua conta"
                },
                "zh-CN": {
                  singular: "要获取更多存储空间，请升级您的账户"
                }
              }
            })
          },
          onClose: _v7
        });
      }, [_v5]), (0, _v1.jsxs)(_v57.Box, {
        display: "contents",
        onClick: _v0 => {
          _v0.stopPropagation(), _v8.current && _v8.current.click();
        },
        children: [(0, _v1.jsx)(_v223.FileInput, {
          multiple: !0,
          ref: _v8,
          onChange: _v0 => {
            let _v1 = _v0?.target?.files;
            _v1 && _v4(_v1 || new FileList(), {
              targetUserId: _v10 || void 0,
              folderId: _v13,
              origin: {
                isDropzone: !1,
                surface: "homepage"
              }
            }), _v0.currentTarget.value = "";
          },
          isDisabled: _v12,
          sx: {
            display: "none"
          },
          accept: _v3
        }), (0, _v1.jsx)(_v191, {
          copy: (0, _v32.translate)({
            singular: "{B}Upload{/B} {C}from computer{/C}",
            replacements: {
              B: _v0 => (0, _v1.jsx)(_v192, {
                size: _v0,
                children: _v0
              }, "b"),
              C: _v0 => (0, _v1.jsx)(_v193, {
                size: _v0,
                children: _v0
              }, "c")
            },
            dictionary: {
              es: {
                singular: "{B}Subir{/B} {C}desde la computadora{/C}"
              },
              "de-DE": {
                singular: "{B}Hochladen{/B} {C}vom Computer{/C}"
              },
              "fr-FR": {
                singular: "{B}Mettre en ligne{/B} {C}depuis l'ordinateur{/C}"
              },
              "ja-JP": {
                singular: "{C}コンピューターから{/C}{B}アップロード{/B}"
              },
              "ko-KR": {
                singular: "{C}컴퓨터에서{/C} {B}업로드{/B}"
              },
              "pt-BR": {
                singular: "{B}Carregar{/B} {C}do computador{/C}"
              },
              "zh-CN": {
                singular: "{C}从计算机{/C}{B}上传{/B}"
              }
            }
          }),
          href: "",
          onClick: _v0 => {
            _v0.preventDefault(), _v2();
          },
          icon: (0, _v1.jsx)(_v205, {
            IrisIcon: _v228,
            BokehIcon: _v224.Upload,
            size: _v0
          }),
          size: _v0
        })]
      });
    },
    _v230 = ({
      size: _v0
    }) => {
      let _v1 = (0, _v42.useViewer)(),
        _v2 = _v206(),
        {
          trackHomepageActionCardClicked: _v3
        } = _v14(),
        _v4 = (0, _v3.useMemo)(() => {
          if (_v1?.user?.createdTime && new Date(_v1.user.createdTime) > new Date("2024-12-12T23:00:00Z")) return "variant";
        }, [_v1?.user?.createdTime]);
      return _v199("one_click_bar", null, !1, !0, {
        isEmptyState: null,
        productAnalyticsContextProduct: "upload",
        productAnalyticsContextFeature: "upload",
        productAnalyticsContextLocation: "one_click_bar",
        productAnalyticsContextFlow: "upload_page",
        productAnalyticsContextElement: "button",
        productAnalyticsContextEntityType: null,
        webContextCopy: "upload from computer"
      }), "variant" === _v4 && _v1 ? (0, _v1.jsx)(_v229, {
        size: _v0,
        viewer: _v1,
        bpEvent: () => {
          _v2({
            copy: "upload from computer",
            feature: "upload",
            flow: "upload_page",
            product: "upload",
            entityType: "video"
          }), _v3({
            homepageActionCardType: "upload"
          });
        }
      }) : (0, _v1.jsx)(_v191, {
        copy: (0, _v32.translate)({
          singular: "{B}Upload{/B} {C}from computer{/C}",
          replacements: {
            B: _v0 => (0, _v1.jsx)(_v192, {
              size: _v0,
              children: _v0
            }, "b"),
            C: _v0 => (0, _v1.jsx)(_v193, {
              size: _v0,
              children: _v0
            }, "c")
          },
          dictionary: {
            es: {
              singular: "{B}Subir{/B} {C}desde la computadora{/C}"
            },
            "de-DE": {
              singular: "{B}Hochladen{/B} {C}vom Computer{/C}"
            },
            "fr-FR": {
              singular: "{B}Mettre en ligne{/B} {C}depuis l'ordinateur{/C}"
            },
            "ja-JP": {
              singular: "{C}コンピューターから{/C}{B}アップロード{/B}"
            },
            "ko-KR": {
              singular: "{C}컴퓨터에서{/C} {B}업로드{/B}"
            },
            "pt-BR": {
              singular: "{B}Carregar{/B} {C}do computador{/C}"
            },
            "zh-CN": {
              singular: "{C}从计算机{/C}{B}上传{/B}"
            }
          }
        }),
        href: "/upload/videos",
        onClick: () => {
          _v2({
            copy: "upload from computer",
            feature: "upload",
            flow: "upload_page",
            product: "upload",
            entityType: "video"
          }), _v3({
            homepageActionCardType: "upload"
          });
        },
        icon: (0, _v1.jsx)(_v205, {
          IrisIcon: _v228,
          BokehIcon: _v224.Upload,
          size: _v0
        }),
        size: _v0
      });
    },
    _v231 = (0, _v3.forwardRef)(({
      fillColor: _v0 = "currentColor",
      ..._v1
    }, _v2) => (0, _v1.jsxs)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 25 24",
      width: _v1.boxSize,
      height: _v1.boxSize,
      fill: "none",
      ref: _v2,
      ..._v1,
      children: [(0, _v1.jsx)("path", {
        fill: _v0,
        fillRule: "evenodd",
        d: "M14.93 10.985h1.649V7.686h-1.65v3.299Zm1.649-4.95H13.28v11.549h1.65v-4.95h1.649c.912 0 1.65-.737 1.65-1.65V7.686c0-.91-.738-1.65-1.65-1.65ZM12.18 9.335v-1.65c0-.91-.738-1.649-1.649-1.649h-1.65a1.65 1.65 0 0 0-1.65 1.65v3.299c0 .912.738 1.65 1.65 1.65h1.65v3.3h-1.65v-1.65H7.23v1.65c0 .91.738 1.649 1.65 1.649h1.65c.91 0 1.65-.738 1.65-1.65v-3.3c0-.91-.74-1.65-1.65-1.65h-1.65V7.687h1.65v1.65h1.65ZM3.352 10.878s-.324.24-.613.52a9.482 9.482 0 0 0-.584.585s-.295-.298-.567-.633a7.81 7.81 0 0 1-.528-.697s.06-.675.209-1.336c.135-.664.362-1.304.362-1.304s.164.417.355.802c.183.387.409.747.409.747s.338-.241.7-.437c.357-.202.716-.363.716-.363s-.184.512-.29 1.045c-.12.529-.169 1.071-.169 1.071Z",
        clipRule: "evenodd"
      }), (0, _v1.jsx)("path", {
        fill: _v0,
        fillRule: "evenodd",
        d: "M3.542 13.903s-.231.33-.418.686c-.203.357-.367.74-.367.74s-.379-.186-.74-.419a8.417 8.417 0 0 1-.722-.495s-.157-.66-.224-1.333c-.082-.673-.07-1.35-.07-1.35s.293.342.591.647c.3.308.625.578.625.578s.247-.335.525-.636c.28-.306.563-.573.563-.573s-.01.546.057 1.086c.053.541.18 1.07.18 1.07Z",
        clipRule: "evenodd"
      }), (0, _v1.jsx)("path", {
        fill: _v0,
        fillRule: "evenodd",
        d: "M4.682 16.707s-.104.38-.176.784c-.08.403-.11.819-.11.819s-.42-.057-.836-.162c-.419-.098-.842-.236-.842-.236s-.357-.577-.64-1.192c-.288-.614-.499-1.258-.499-1.258s.389.23.768.424c.39.193.775.349.775.349s.137-.402.296-.77c.169-.38.35-.722.35-.722s.17.515.4 1.008.514.956.514.956Z",
        clipRule: "evenodd"
      }), (0, _v1.jsx)("path", {
        fill: _v0,
        fillRule: "evenodd",
        d: "M6.66 19.006s.023.39.08.8c.062.396.153.813.153.813s-.407.066-.843.11c-.424.034-.874.04-.874.04s-.52-.434-.982-.928c-.467-.49-.868-1.034-.868-1.034s.43.103.86.158c.43.06.845.085.845.085s.002-.423.036-.826a8.32 8.32 0 0 1 .104-.797s.323.438.698.832c.372.398.79.747.79.747ZM4.132 7.954s-.379.125-.747.295c-.369.165-.74.37-.74.37s-.18-.376-.336-.783c-.16-.404-.278-.83-.278-.83s.273-.621.627-1.198c.342-.585.761-1.117.761-1.117s.014.439.08.87c.05.428.148.839.148.839s.4-.118.804-.19c.394-.082.795-.116.795-.116s-.337.429-.61.898c-.287.463-.504.962-.504.962Z",
        clipRule: "evenodd"
      }), (0, _v1.jsx)("path", {
        fill: _v0,
        fillRule: "evenodd",
        d: "M4.947 3.673s-.246.472-.432.953c-.199.474-.33.96-.33.96s.413-.284.85-.504c.428-.232.867-.409.867-.409l.131-.263c.077-.164.191-.376.318-.582.12-.214.257-.417.364-.57l.178-.257-.303.08c-.184.048-.43.118-.67.207a6.84 6.84 0 0 0-.669.255l-.304.13ZM24.36 10.652s-.242.366-.529.698c-.272.334-.568.633-.568.633s-.281-.31-.583-.586c-.289-.28-.614-.519-.614-.519s-.047-.542-.168-1.072c-.108-.533-.29-1.045-.29-1.045s.358.162.716.363c.361.197.7.437.7.437s.226-.36.409-.746c.19-.385.354-.802.354-.802s.229.639.363 1.304c.15.66.21 1.335.21 1.335Z",
        clipRule: "evenodd"
      }), (0, _v1.jsx)("path", {
        fill: _v0,
        fillRule: "evenodd",
        d: "M24.125 14.415s-.348.27-.723.495c-.362.233-.74.42-.74.42s-.164-.383-.366-.74c-.188-.357-.419-.687-.419-.687s.127-.528.18-1.07c.068-.54.058-1.085.058-1.085s.282.268.561.573c.278.3.527.636.527.636s.325-.27.624-.578c.298-.305.592-.646.592-.646s.012.677-.07 1.349a11.532 11.532 0 0 1-.224 1.333Z",
        clipRule: "evenodd"
      }), (0, _v1.jsx)("path", {
        fill: _v0,
        fillRule: "evenodd",
        d: "M22.702 17.91s-.424.14-.844.237a8.301 8.301 0 0 1-.835.162s-.032-.415-.11-.818c-.072-.403-.176-.785-.176-.785s.285-.462.513-.955c.23-.492.4-1.009.4-1.009s.18.343.35.721c.16.37.295.772.295.772s.386-.156.778-.35c.378-.193.766-.424.766-.424s-.21.644-.498 1.258c-.284.615-.64 1.191-.64 1.191Z",
        clipRule: "evenodd"
      }), (0, _v1.jsx)("path", {
        fill: _v0,
        fillRule: "evenodd",
        d: "M20.243 20.77s-.45-.007-.874-.041c-.436-.044-.843-.11-.843-.11s.091-.417.152-.813c.058-.41.082-.8.082-.8s.418-.35.79-.747c.375-.394.698-.832.698-.832s.074.392.103.797c.035.402.036.826.036.826s.415-.025.846-.085c.431-.055.861-.159.861-.159s-.402.545-.87 1.035c-.46.494-.98.928-.98.928ZM23.388 7.006s-.118.427-.277.83c-.158.407-.337.782-.337.782s-.372-.204-.74-.369a8.012 8.012 0 0 0-.747-.295s-.218-.499-.504-.962c-.273-.47-.611-.898-.611-.898s.4.034.796.117c.404.071.804.189.804.189s.097-.412.149-.837c.065-.433.08-.873.08-.873s.418.533.759 1.117c.356.577.628 1.2.628 1.2Z",
        clipRule: "evenodd"
      }), (0, _v1.jsx)("path", {
        fill: _v0,
        fillRule: "evenodd",
        d: "M19.518 4.674s.438.176.866.409c.437.22.85.503.85.503s-.131-.486-.33-.96c-.186-.48-.432-.953-.432-.953l-.305-.13a7.187 7.187 0 0 0-.668-.256 7.585 7.585 0 0 0-.67-.206L18.525 3l.178.258c.107.153.244.355.364.57.128.206.241.418.319.58l.131.266Z",
        clipRule: "evenodd"
      })]
    })),
    _v232 = () => {
      let _v0 = (0, _v180.useColorModeValue)("black", "white"),
        _v1 = (0, _v180.useColorModeValue)("white", "black");
      return (0, _v1.jsx)(_v202.Center, {
        backgroundColor: _v0,
        boxSize: "sm",
        borderRadius: "sm",
        children: (0, _v1.jsx)(_v231, {
          color: _v1,
          boxSize: "17px"
        })
      });
    },
    _v233 = ({
      size: _v0
    }) => {
      let _v1 = _v206();
      return _v199("one_click_bar", null, !1, !0, {
        isEmptyState: null,
        productAnalyticsContextFeature: "watch",
        productAnalyticsContextLocation: "one_click_bar",
        productAnalyticsContextElement: "button",
        productAnalyticsContextEntityType: null,
        webContextCopy: "watch videos on vimeo"
      }), (0, _v1.jsx)(_v191, {
        copy: (0, _v32.translate)({
          singular: "{B}Watch{/B} {C}videos on Vimeo{/C}",
          replacements: {
            B: _v0 => (0, _v1.jsx)(_v192, {
              size: _v0,
              children: _v0
            }, "b"),
            C: _v0 => (0, _v1.jsx)(_v193, {
              size: _v0,
              children: _v0
            }, "c")
          },
          dictionary: {
            es: {
              singular: "{B}Ver{/B} {C}videos en Vimeo{/C}"
            },
            "de-DE": {
              singular: "{B}Ansehen{/B} {C}Videos on Vimeo{/C}"
            },
            "fr-FR": {
              singular: "{B}Regarder{/B} {C}des vidéos sur Vimeo{/C}"
            },
            "ja-JP": {
              singular: "{C}Vimeoで動画を{/C}{B}視聴{/B}"
            },
            "ko-KR": {
              singular: "{C}Vimeo 동영상{/C} {B}시청{/B}"
            },
            "pt-BR": {
              singular: "{B}Assistir{/B} {C}a vídeos no Vimeo{/C}"
            },
            "zh-CN": {
              singular: "在 Vimeo 上{B}观看{/B} {C}视频{/C}"
            }
          }
        }),
        href: "/watch",
        icon: (0, _v1.jsx)(_v205, {
          IrisIcon: _v232,
          BokehIcon: _v231,
          size: _v0
        }),
        onClick: () => {
          _v1({
            copy: "watch videos on vimeo",
            feature: "watch",
            flow: null,
            product: "general",
            entityType: null
          });
        },
        size: _v0
      });
    },
    _v234 = (0, _v3.lazy)(async () => ({
      default: (await _v0.A(0)).EventCreationWizardModal
    })),
    _v235 = () => {
      var _v0, _v1;
      let {
          ref: _v2,
          width: _v3
        } = _v187(),
        {
          widgetData: _v4,
          isLoading: _v5
        } = _v145(),
        _v6 = (0, _v184.useIsStaff)(),
        _v7 = !_v6 && _v5,
        _v8 = !!_v4,
        _v9 = (0, _v3.useMemo)(() => !!_v8 && _v4.some(_v0 => _v0.data.some(_v0 => "cold-storage" === _v0.type)), [_v8, _v4]),
        _v10 = (0, _v3.useMemo)(() => !_v6 && !_v7 && !!_v8 && _v9, [_v9, _v8, _v6, _v7]),
        {
          hasCreate: _v11,
          hasHost: _v12,
          hasImport: _v13,
          hasRecord: _v14,
          hasReview: _v15,
          hasTransferFile: _v16,
          hasUpload: _v17,
          hasWatch: _v18,
          isLoading: _v19
        } = (() => {
          let _v0 = (0, _v42.useViewer)(),
            {
              capabilities: _v1,
              loading: _v2,
              ready: _v3
            } = (0, _v6.useCapability)(["canCreateLiveEvents", "hasCreation", "hasWatchButton"], _v0?.teamUser?.ownerId ?? _v0?.user?.id),
            {
              capabilities: _v4,
              loading: _v5,
              ready: _v6
            } = (0, _v6.useCapability)(["hasSimplifiedEnterpriseAccount"]),
            {
              maximizeVideoFileTransferAdoption: _v7,
              maximizeReviewAdoption: _v8
            } = (0, _v81.useAdoptionSettings)(),
            _v9 = _v1.hasCreation,
            _v10 = _v1.canCreateLiveEvents;
          return {
            hasCreate: _v9,
            hasHost: _v10,
            hasImport: !0,
            hasRecord: !0,
            hasReview: _v8,
            hasTransferFile: _v7,
            hasUpload: !0,
            hasWatch: !_v4.hasSimplifiedEnterpriseAccount && !_v0?.isSimplifiedSite && _v1.hasWatchButton,
            isLoading: _v2 || _v5 || !_v3 || !_v6
          };
        })(),
        [_v20, _v21] = (0, _v3.useState)(!1),
        [_v22, _v23] = (0, _v3.useState)(!1),
        _v24 = _v0 => {
          _v0.preventDefault(), _v23(!0), _v21(!0);
        },
        _v25 = (_v0 = _v3) >= _v236 - 32 - 240 ? "lg" : _v0 >= _v237 - 32 ? "md" : "sm",
        _v26 = (_v1 = _v3) >= _v236 - 32 - 240 ? _v238.Large : _v1 >= _v237 - 32 ? _v238.Medium : _v238.Small,
        _v27 = (0, _v185.shouldShowInDevelopmentFeature)("inspiration-features"),
        _v28 = (0, _v3.useMemo)(() => {
          if (_v19 || _v7) return Array.from({
            length: 3
          }, (_v0, _v1) => (0, _v1.jsx)(_v194, {
            size: _v25
          }, `loading-${_v1}`));
          let _v0 = [];
          return _v17 && _v0.push((0, _v1.jsx)(_v230, {
            size: _v25
          }, "upload")), _v13 && _v0.push((0, _v1.jsx)(_v214, {
            size: _v25
          }, "import")), _v15 || _v16 || (_v18 && _v27 ? _v0.push((0, _v1.jsx)(_v233, {
            size: _v25
          }, "watch")) : _v11 && _v0.push((0, _v1.jsx)(_v207, {
            size: _v25
          }, "create"))), _v14 && _v0.push((0, _v1.jsx)(_v217, {
            size: _v25
          }, "record")), _v12 && _v0.push((0, _v1.jsx)(_v210, {
            onClick: _v24,
            size: _v25
          }, "host")), _v15 || _v16 || !_v18 || !(_v0.length < 5) || _v27 || _v0.push((0, _v1.jsx)(_v233, {
            size: _v25
          }, "watch")), _v16 && _v0.push((0, _v1.jsx)(_v222, {
            featured: _v16,
            showBadge: _v16,
            size: _v25
          }, "transfer-file")), _v15 && _v0.push((0, _v1.jsx)(_v220, {
            featured: _v15,
            showBadge: _v15,
            size: _v25
          }, "review")), _v0;
        }, [_v17, _v11, _v27, _v12, _v13, _v14, _v15, _v16, _v18, _v19, _v7, _v25]);
      return _v10 ? null : (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v57.Box, {
          display: "grid",
          gap: _v26.Gap,
          gridTemplateColumns: _v26.GridTemplateColumns,
          ref: _v2,
          justifyContent: "flex-start",
          "data-testid": "quick_links_bar",
          children: _v28
        }), _v22 && (0, _v1.jsx)(_v3.Suspense, {
          fallback: null,
          children: (0, _v1.jsx)(_v234, {
            active: _v20,
            activeSet: _v21
          })
        })]
      });
    },
    _v236 = 0,
    _v237 = 0,
    _v238 = {
      Large: {
        GridTemplateColumns: "repeat(auto-fit, minmax(165px, 1fr))",
        Gap: "1.5rem"
      },
      Medium: {
        GridTemplateColumns: "repeat(auto-fit, minmax(165px, auto))",
        Gap: "1.5rem"
      },
      Small: {
        GridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
        Gap: "0.75rem"
      }
    };
  var _v239 = _v0.i(0),
    _v240 = _v0.i(0);
  let _v241 = 0,
    _v242 = 736;
  var _v243 = _v3;
  let _v244 = (0, _v3.forwardRef)(({
    sx: _v0,
    children: _v1,
    ..._v2
  }, _v3) => ((0, _v180.useColorModeValue)("stroke", "transparent"), (0, _v1.jsx)(_v57.Box, {
    sx: {
      ..._v0
    },
    borderRadius: "lg",
    display: "flex",
    position: "relative",
    ref: _v3,
    ..._v2,
    children: _v1
  })));
  class _v245 extends _v243.default.Component {
    constructor(_v0) {
      super(_v0), this.state = {
        hasError: !1
      };
    }
    static getDerivedStateFromError() {
      return {
        hasError: !0
      };
    }
    componentDidCatch(_v0, _v1) {
      window.DD_RUM && window.DD_RUM.onReady(() => {
        window.DD_RUM.addError(_v0, {
          ..._v1
        });
      }), console.error("Error caught in WidgetErrorBoundary:", _v0), console.error("Error info:", _v1);
    }
    render() {
      return this.state.hasError ? this.props.fallback || (0, _v1.jsx)(_v244, {
        h: 350
      }) : this.props.children;
    }
  }
  var _v246 = _v0.i(0);
  _v0.i(0);
  var _v247 = _v0.i(0),
    _v248 = _v0.i(0),
    _v249 = _v0.i(0),
    _v250 = _v0.i(0),
    _v251 = _v0.i(0),
    _v252 = _v0.i(0),
    _v253 = _v0.i(0);
  let _v254 = ({
    onBtnClick: _v0,
    heading: _v1,
    subheading: _v2,
    btnText: _v3,
    icon: _v4
  }) => {
    let _v5 = (0, _v180.useColorModeValue)("text-secondary", "text-primary");
    return (0, _v1.jsx)(_v43.Flex, {
      backgroundColor: "fill-surface",
      borderRadius: "lg",
      width: "100%",
      justify: "center",
      alignItems: "center",
      padding: "4",
      children: (0, _v1.jsxs)(_v253.VStack, {
        gap: 0,
        children: [_v4, (0, _v1.jsx)(_v23.Header, {
          textAlign: "center",
          size: "md",
          color: _v5,
          children: _v1
        }), (0, _v1.jsx)(_v31.Text, {
          variant: "body-xl",
          textAlign: "center",
          fontSize: "lg",
          color: "text-secondary",
          mb: "300",
          children: _v2
        }), (0, _v1.jsx)(_v22.Button, {
          variant: "secondary",
          onClick: _v0,
          children: _v3
        })]
      })
    });
  };
  var _v255 = _v0.i(0),
    _v256 = _v0.i(0),
    _v257 = _v0.i(0),
    _v258 = _v0.i(0),
    _v259 = _v0.i(0),
    _v260 = _v0.i(0),
    _v261 = _v0.i(0);
  async function _v262({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2
    },
    ..._v3
  }) {
    return (0, _v133.measureLatency)("getUserTeamFeaturedContent", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/team/featured_content?fields=${_v1.map(_v134.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "GET"
      });
      if (!_v0.ok) throw new _v134.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v134.deepCamelCase)(_v1);
    });
  }
  async function _v263({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      userId: _v3
    },
    ..._v4
  }) {
    return (0, _v133.measureLatency)("putUserTeamFeaturedContent", "PUT", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v3}/team/featured_content?fields=${_v1.map(_v134.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "PUT",
        body: JSON.stringify((0, _v134.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v134.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v134.deepCamelCase)(_v1);
    });
  }
  function _v264() {
    let {
        mutate: _v0
      } = (0, _v136.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v139.useGctlConfig)(),
      [_v5, _v6] = (0, _v137.useInternalState)();
    return [(0, _v3.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/team/featured_content${(0, _v137.serializeQuery)(_v0)}`, _v263({
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
  "true" === _v132.default.env.STORYBOOK && (0, _v137.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v139.useGctlConfig)();
    return (0, _v15.default)(_v2 ? `/users/${_v2.where.userId}/team/featured_content${(0, _v137.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v262({
      ..._v2,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      baseUrl: _v3
    }) : null, _v1);
  }, {
    endpoint: "/users/:userId/team/featured_content",
    method: "GET"
  }), "true" === _v132.default.env.STORYBOOK && (0, _v137.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v136.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v139.useGctlConfig)(),
      [_v5, _v6] = (0, _v137.useInternalState)();
    return [(0, _v3.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/team/featured_content${(0, _v137.serializeQuery)(_v0)}`, _v262({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }));
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
  }, {
    endpoint: "/users/:userId/team/featured_content",
    method: "GET"
  }), "true" === _v132.default.env.STORYBOOK && (0, _v137.assignMswData)(_v264, {
    endpoint: "/users/:userId/team/featured_content",
    method: "PUT"
  });
  var _v265 = _v0.i(0),
    _v266 = _v0.i(0),
    _v267 = _v0.i(0),
    _v268 = _v0.i(0);
  let _v269 = () => {
      let _v0 = (0, _v180.useColorModeValue)("white", "#C1C1C1");
      return (0, _v1.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "30",
        height: "30",
        viewBox: "0 0 30 30",
        fill: "none",
        children: [(0, _v1.jsx)("mask", {
          id: "path-1-inside-1_14972_103440",
          fill: "white",
          children: (0, _v1.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M4.5 6.25C3.39543 6.25 2.5 7.14543 2.5 8.25V21.75C2.5 22.8546 3.39543 23.75 4.5 23.75H18C19.1046 23.75 20 22.8546 20 21.75V18.5281L23.5692 22.1973C23.7574 22.3908 24.016 22.5 24.286 22.5H26.5C27.0523 22.5 27.5 22.0523 27.5 21.5V8.50007C27.5 7.94778 27.0523 7.50007 26.5 7.50007H24.286C24.016 7.50007 23.7574 7.60926 23.5692 7.8028L20 11.472V8.25C20 7.14543 19.1046 6.25 18 6.25H4.5Z"
          })
        }), (0, _v1.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M4.5 6.25C3.39543 6.25 2.5 7.14543 2.5 8.25V21.75C2.5 22.8546 3.39543 23.75 4.5 23.75H18C19.1046 23.75 20 22.8546 20 21.75V18.5281L23.5692 22.1973C23.7574 22.3908 24.016 22.5 24.286 22.5H26.5C27.0523 22.5 27.5 22.0523 27.5 21.5V8.50007C27.5 7.94778 27.0523 7.50007 26.5 7.50007H24.286C24.016 7.50007 23.7574 7.60926 23.5692 7.8028L20 11.472V8.25C20 7.14543 19.1046 6.25 18 6.25H4.5Z",
          fill: "none"
        }), (0, _v1.jsx)("path", {
          d: "M20 18.5281L21.4336 17.1335L18 13.6036V18.5281H20ZM23.5692 22.1973L25.0028 20.8027L25.0028 20.8027L23.5692 22.1973ZM23.5692 7.8028L25.0028 9.19733L25.0028 9.19733L23.5692 7.8028ZM20 11.472H18V16.3964L21.4336 12.8665L20 11.472ZM4.5 8.25V8.25V4.25C2.29086 4.25 0.5 6.04086 0.5 8.25H4.5ZM4.5 21.75V8.25H0.5V21.75H4.5ZM4.5 21.75H4.5H0.5C0.5 23.9591 2.29086 25.75 4.5 25.75V21.75ZM18 21.75H4.5V25.75H18V21.75ZM18 21.75V25.75C20.2091 25.75 22 23.9591 22 21.75H18ZM18 18.5281V21.75H22V18.5281H18ZM25.0028 20.8027L21.4336 17.1335L18.5664 19.9226L22.1355 23.5918L25.0028 20.8027ZM24.286 20.5C24.556 20.5 24.8145 20.6092 25.0028 20.8027L22.1355 23.5918C22.7003 24.1724 23.4759 24.5 24.286 24.5V20.5ZM26.5 20.5H24.286V24.5H26.5V20.5ZM25.5 21.5C25.5 20.9477 25.9477 20.5 26.5 20.5V24.5C28.1569 24.5 29.5 23.1569 29.5 21.5H25.5ZM25.5 8.50007V21.5H29.5V8.50007H25.5ZM26.5 9.50007C25.9477 9.50007 25.5 9.05235 25.5 8.50007H29.5C29.5 6.84321 28.1569 5.50007 26.5 5.50007V9.50007ZM24.286 9.50007H26.5V5.50007H24.286V9.50007ZM25.0028 9.19733C24.8145 9.39088 24.556 9.50007 24.286 9.50007V5.50007C23.4759 5.50007 22.7003 5.82763 22.1355 6.40828L25.0028 9.19733ZM21.4336 12.8665L25.0028 9.19733L22.1355 6.40827L18.5664 10.0775L21.4336 12.8665ZM18 8.25V11.472H22V8.25H18ZM18 8.25H22C22 6.04086 20.2091 4.25 18 4.25V8.25ZM4.5 8.25H18V4.25H4.5V8.25Z",
          fill: _v0,
          mask: "url(#path-1-inside-1_14972_103440)"
        })]
      });
    },
    _v270 = () => (0, _v1.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "34",
      height: "34",
      viewBox: "0 0 34 34",
      fill: "none",
      children: (0, _v1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2.83301 21.3385C2.83301 24.413 5.43067 26.9167 8.63505 26.9167H15.583V20.4201L13.7514 22.2517L11.7479 20.2483L16.9997 14.9965L22.2514 20.2483L20.2479 22.2517L18.4163 20.4201V26.9167H25.3643C28.5768 26.9167 31.1663 24.4192 31.1663 21.3385C31.1663 18.798 29.3926 16.6472 26.9684 15.9768C27.0198 14.2576 26.989 7.07779 19.7552 7.07779C16.7346 7.07779 14.1499 9.1618 14.1746 11.3484C13.4803 10.9279 12.2589 10.8202 11.378 10.8202C8.8885 10.8202 7.17616 13.2865 7.09529 15.6895C4.59088 16.0376 2.83301 18.8751 2.83301 21.3385Z",
        fill: "#666666"
      })
    }),
    _v271 = ({
      activeTab: _v0
    }) => {
      let _v1 = "video" === _v0,
        _v2 = (0, _v180.useColorModeValue)("grayscale.200", "grayscale.700"),
        _v3 = _v1 ? (0, _v1.jsx)(_v270, {}) : (0, _v1.jsx)(_v269, {});
      return (0, _v1.jsxs)(_v268.Stack, {
        direction: "column",
        minHeight: (0, _v267.rem)(200),
        spacing: 8,
        justifyContent: "center",
        alignItems: "center",
        children: [(0, _v1.jsx)(_v57.Box, {
          display: "flex",
          width: (0, _v267.rem)(60),
          height: (0, _v267.rem)(60),
          backgroundColor: _v2,
          borderRadius: (0, _v267.rem)(40),
          marginBottom: (0, _v267.rem)(8),
          justifyContent: "center",
          alignItems: "center",
          children: _v3
        }), (0, _v1.jsx)(_v23.Header, {
          size: "md",
          justifyContent: "center",
          children: _v1 ? (0, _v250.translate)({
            singular: "No videos yet",
            dictionary: {
              es: {
                singular: "Aún no hay videos"
              },
              "de-DE": {
                singular: "Noch keine Videos"
              },
              "fr-FR": {
                singular: "Aucune vidéo pour le moment"
              },
              "ja-JP": {
                singular: "動画はまだありません"
              },
              "ko-KR": {
                singular: "아직 동영상이 없습니다"
              },
              "pt-BR": {
                singular: "Não há vídeos ainda"
              },
              "zh-CN": {
                singular: "暂无视频"
              }
            }
          }) : (0, _v250.translate)({
            singular: "No events yet",
            dictionary: {
              es: {
                singular: "Aún no hay eventos"
              },
              "de-DE": {
                singular: "Noch keine Events"
              },
              "fr-FR": {
                singular: "Aucun événement pour l'instant"
              },
              "ja-JP": {
                singular: "まだイベントはありません"
              },
              "ko-KR": {
                singular: "아직 이벤트가 없습니다."
              },
              "pt-BR": {
                singular: "Ainda não há eventos"
              },
              "zh-CN": {
                singular: "暂无活动"
              }
            }
          })
        }), (0, _v1.jsx)(_v31.Text, {
          variant: "body-md",
          justifyContent: "center",
          children: _v1 ? (0, _v250.translate)({
            singular: "Upload a video to share with your team",
            dictionary: {
              es: {
                singular: "Suba un video para compartirlo con su equipo"
              },
              "de-DE": {
                singular: "Lade ein Video hoch, um es mit deinem Team zu teilen"
              },
              "fr-FR": {
                singular: "Mettez en ligne une vidéo à partager avec votre équipe"
              },
              "ja-JP": {
                singular: "動画をアップロードしてチームと共有"
              },
              "ko-KR": {
                singular: "팀과 공유할 동영상을 업로드하세요."
              },
              "pt-BR": {
                singular: "Carregue um vídeo para compartilhar com a equipe"
              },
              "zh-CN": {
                singular: "上传视频与团队分享"
              }
            }
          }) : (0, _v250.translate)({
            singular: "Create an event to share with your team",
            dictionary: {
              es: {
                singular: "Cree un evento para compartirlo con su equipo"
              },
              "de-DE": {
                singular: "Erstelle ein Event, um es mit deinem Team zu teilen"
              },
              "fr-FR": {
                singular: "Créez un événement à partager avec votre équipe"
              },
              "ja-JP": {
                singular: "チームと共有するイベントを作成"
              },
              "ko-KR": {
                singular: "팀과 공유할 이벤트를 만드세요."
              },
              "pt-BR": {
                singular: "Crie um evento para compartilhar com a equipe"
              },
              "zh-CN": {
                singular: "创建活动与团队分享"
              }
            }
          })
        })]
      });
    };
  var _v272 = _v0.i(0);
  let _v273 = (0, _v3.createContext)({
      locale: "default"
    }),
    _v274 = () => (0, _v3.useContext)(_v273),
    _v275 = (_v0, _v1) => {
      let _v2 = new Date(_v0);
      return new Intl.DateTimeFormat(_v1, {
        year: "numeric",
        month: "short",
        day: "numeric"
      }).format(_v2);
    },
    _v276 = (_v0, _v1) => {
      let _v2 = new Date(_v0);
      return new Intl.DateTimeFormat(_v1, {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
      }).format(_v2);
    },
    _v277 = ({
      event: _v0,
      onClick: _v1,
      isActive: _v2
    }) => {
      let {
          locale: _v3
        } = _v274(),
        _v4 = _v0.metadata?.connections?.liveVideo?.status === "streaming",
        _v5 = _v0.pictures && _v0.pictures.sizes ? _v0.pictures.sizes[0].height : 56,
        _v6 = _v0.pictures && _v0.pictures.sizes ? _v0.pictures.sizes[0].width : 92;
      return (0, _v1.jsxs)(_v43.Flex, {
        onClick: _v1,
        alignItems: "center",
        cursor: "pointer",
        padding: `${(0, _v44.rem)(10)} 0`,
        borderBottom: "1px solid",
        borderColor: "stroke",
        children: [(0, _v1.jsxs)(_v57.Box, {
          marginRight: (0, _v44.rem)(20),
          position: "relative",
          children: [(0, _v1.jsx)(_v43.Flex, {
            position: "absolute",
            padding: `${(0, _v44.rem)(3)} ${(0, _v44.rem)(6)}`,
            backgroundColor: _v4 ? "red.500" : "gray.600",
            textTransform: "uppercase",
            color: "white",
            fontSize: (0, _v44.rem)(10),
            fontWeight: "500",
            textAlign: "center",
            borderRadius: (0, _v44.rem)(12),
            bottom: (0, _v44.rem)(6),
            left: (0, _v44.rem)(4),
            children: _v4 ? (0, _v250.translate)({
              singular: "Live",
              dictionary: {
                es: {
                  singular: "En vivo"
                },
                "fr-FR": {
                  singular: "Direct"
                },
                "ja-JP": {
                  singular: "ライブ"
                },
                "ko-KR": {
                  singular: "라이브"
                },
                "pt-BR": {
                  singular: "Ao vivo"
                },
                "zh-CN": {
                  singular: "直播"
                }
              }
            }) : (0, _v250.translate)({
              singular: "Offline",
              dictionary: {
                es: {
                  singular: "Desconectado"
                },
                "fr-FR": {
                  singular: "Hors-ligne"
                },
                "ja-JP": {
                  singular: "オフライン"
                },
                "ko-KR": {
                  singular: "오프라인"
                },
                "zh-CN": {
                  singular: "离线"
                }
              }
            })
          }), _v0.pictures?.uri ? (0, _v1.jsx)(_v24.Image, {
            borderRadius: (0, _v44.rem)(3),
            alt: _v0.title,
            src: _v0.pictures.sizes[0].link
          }) : (0, _v1.jsx)(_v43.Flex, {
            borderRadius: (0, _v44.rem)(3),
            height: (0, _v44.rem)(_v5),
            width: (0, _v44.rem)(_v6),
            backgroundColor: "grayscale.900"
          })]
        }), (0, _v1.jsxs)(_v57.Box, {
          marginRight: (0, _v44.rem)(20),
          position: "relative",
          children: [(0, _v1.jsx)(_v23.Header, {
            size: "xs",
            marginBottom: (0, _v44.rem)(6),
            children: _v0.title
          }), _v0.nextOccurrenceTime ? (0, _v1.jsx)(_v66.Paragraph, {
            size: "sm",
            children: `${(0, _v250.translate)({
              singular: "Starts",
              dictionary: {
                es: {
                  singular: "Comienza el"
                },
                "de-DE": {
                  singular: "Beginn"
                },
                "fr-FR": {
                  singular: "Début :"
                },
                "ja-JP": {
                  singular: "開始日時"
                },
                "ko-KR": {
                  singular: "시작"
                },
                "pt-BR": {
                  singular: "Começa em"
                },
                "zh-CN": {
                  singular: "开始"
                }
              }
            })} ${_v276(_v0.nextOccurrenceTime, _v3)}`
          }) : null]
        }), (0, _v1.jsx)(_v57.Box, {
          margin: `0 ${(0, _v44.rem)(36)} 0 auto`,
          children: (0, _v1.jsx)(_v272.Radio, {
            isChecked: _v2
          })
        })]
      }, _v0.uri);
    };
  var _v278 = _v0.i(0),
    _v279 = _v0.i(0),
    _v280 = _v0.i(0);
  let _v281 = ({
      items: _v0,
      itemResult: _v1,
      setPage: _v2,
      page: _v3
    }) => (0, _v1.jsxs)(_v57.Box, {
      children: [_v0, !_v1.loading && (0, _v1.jsxs)(_v278.HStack, {
        width: "100%",
        marginTop: "100",
        children: [(0, _v1.jsx)(_v43.Flex, {
          display: "flex",
          justifyContent: "flex-start",
          width: "50%",
          children: _v1?.data?.paging?.previous && (0, _v1.jsx)(_v150.IconButton, {
            variant: "secondary",
            "aria-label": "Previous page",
            onClick: () => {
              _v2(_v3 ? _v3 - 1 : 1);
            },
            icon: (0, _v1.jsx)(_v279.ChevronLeft, {})
          })
        }), (0, _v1.jsx)(_v43.Flex, {
          display: "flex",
          justifyContent: "flex-end",
          width: "50%",
          children: _v1?.data?.paging?.next && (0, _v1.jsx)(_v150.IconButton, {
            variant: "secondary",
            "aria-label": "Next page",
            onClick: () => {
              _v2(_v3 ? _v3 + 1 : 2);
            },
            icon: (0, _v1.jsx)(_v280.ChevronRight, {})
          })
        })]
      })]
    }),
    _v282 = ({
      video: _v0,
      onClick: _v1,
      isActive: _v2
    }) => {
      let _v3,
        {
          locale: _v4
        } = _v274(),
        _v5 = (_v3 = [92, 56], `//i.vimeocdn.com/video/default${void 0 !== _v3 && `_${_v3[0]}x${_v3[1]}`}.jpg`);
      return (0, _v1.jsxs)(_v43.Flex, {
        cursor: "pointer",
        padding: `${(0, _v44.rem)(10)} 0`,
        alignItems: "center",
        borderBottom: "1px solid",
        borderColor: "stroke",
        id: `video-row${_v0.uri.replace(/\//g, "-")}`,
        onClick: _v1,
        children: [(0, _v1.jsx)(_v57.Box, {
          marginRight: (0, _v44.rem)(20),
          children: (0, _v1.jsx)(_v24.Image, {
            borderRadius: (0, _v44.rem)(3),
            alt: _v0.name,
            src: _v0.pictures && _v0.pictures.sizes ? _v0.pictures.sizes[0].link : _v5
          })
        }), (0, _v1.jsxs)(_v57.Box, {
          marginRight: (0, _v44.rem)(20),
          children: [(0, _v1.jsx)(_v23.Header, {
            size: "xs",
            marginBottom: (0, _v44.rem)(6),
            children: _v0.name
          }), (0, _v1.jsx)(_v66.Paragraph, {
            size: "sm",
            children: (0, _v250.translate)({
              singular: "Modified {DATE}",
              replacements: {
                DATE: () => _v275(_v0.lastUserActionEventDate || "", _v4)
              },
              dictionary: {
                es: {
                  singular: "Modificado el {DATE}"
                },
                "de-DE": {
                  singular: "{DATE} geändert"
                },
                "fr-FR": {
                  singular: "Modifiée le {DATE}"
                },
                "ja-JP": {
                  singular: "変更日 {DATE}"
                },
                "ko-KR": {
                  singular: "{DATE}에 수정됨"
                },
                "pt-BR": {
                  singular: "Modificado em {DATE}"
                },
                "zh-CN": {
                  singular: "修改 {DATE}"
                }
              }
            })
          })]
        }), (0, _v1.jsx)(_v57.Box, {
          margin: `0 ${(0, _v44.rem)(36)} 0 auto`,
          children: (0, _v1.jsx)(_v272.Radio, {
            isChecked: _v2
          })
        })]
      }, _v0.uri);
    };
  var _v283 = _v0.i(0),
    _v284 = _v0.i(0),
    _v285 = _v0.i(0),
    _v286 = _v0.i(0),
    _v287 = _v0.i(0);
  let _v288 = () => {
      let _v0 = (0, _v42.useViewer)(),
        _v1 = (0, _v287.useAnalyticsEvent)(),
        _v2 = _v0?.teamUser,
        _v3 = window.location.href,
        _v4 = window.location.pathname,
        _v5 = (0, _v3.useCallback)(() => (0, _v121.buildTeamBpContextFromTeamUser)(_v2), [_v2]),
        _v6 = (0, _v3.useCallback)(() => (0, _v285.buildTargetTeamBpContext)({
          is_team_member: !!_v2
        }), [_v2]),
        _v7 = (0, _v3.useCallback)(_v0 => (0, _v286.buildVideoBpContext)({
          video_id: _v0
        }), []),
        _v8 = (0, _v3.useCallback)(_v0 => (0, _v119.buildActionBpContext)({
          action_type: _v0,
          feature: null
        }), []),
        _v9 = (0, _v3.useCallback)((_v0, _v1, _v2) => (0, _v123.buildWebBpContext)({
          page_name: "logged_in_home_page",
          referrer_page_name: "logged_in_home_page",
          referrer: _v3,
          path: _v4,
          target: _v0 ?? null,
          target_path: _v1 ?? null,
          copy: _v2 ?? null
        }), [_v4, _v3]),
        _v10 = (0, _v3.useCallback)((_v0, _v1) => (0, _v120.buildProductAnalyticsBpContext)({
          product: "general",
          feature: "general",
          location: "featured_videos_widget",
          modal_name: null,
          element: _v0 ?? null,
          entity_type: _v1 ?? null,
          device_type: (0, _v197.default)()
        }), []),
        _v11 = (0, _v3.useCallback)(_v0 => {
          (0, _v124.sendBpEventWithContexts)("vimeo.open_video", {
            ..._v8("click"),
            ..._v5(),
            ..._v6(),
            ..._v7(_v0.featuredContentId),
            ..._v9(_v0.target, _v0.targetPath, _v0.copy),
            ..._v10(_v0.clickElement, _v0.contentType)
          }, -1);
        }, [_v8, _v10, _v5, _v6, _v7, _v9]),
        _v12 = (0, _v3.useMemo)(() => ({
          product: "wayfinder",
          location: "featured_content_modal",
          team_owner_id: _v2 ? String(_v2.ownerId) : null,
          team_size: _v2?.currentTeamSize ?? null,
          team_subscription_type: _v2?.accountType ?? null,
          actor_team_role: _v2?.plainTextPermissionLevel ?? null,
          actor_resource_role: null,
          video_type: null
        }), [_v2]),
        _v13 = (0, _v3.useCallback)(_v0 => {
          _v1({
            eventName: "vimeo.save_featured_video",
            version: 2,
            fields: {
              ..._v12,
              video_id: _v0.video_id ?? null,
              live_event_id: _v0.live_event_id ?? null,
              is_show_latest_enabled: _v0.is_show_latest_enabled ?? null,
              is_playlist_enabled: _v0.is_playlist_enabled ?? null,
              is_show_schedule_enabled: _v0.is_show_schedule_enabled ?? null,
              video_privacy: null,
              video_embed_privacy: null,
              is_preset_applied: null,
              is_video_password_protected: null,
              video_app_id: null
            }
          });
        }, [_v12, _v1]);
      return {
        sendOpenVideoEvent: _v11,
        sendSaveFeaturedContentEvent: _v13,
        sendClickManageVideoEvent: (0, _v3.useCallback)(() => {
          _v1({
            eventName: "vimeo.click_set_featured_video",
            version: 2,
            fields: {
              ..._v12
            }
          });
        }, [_v12, _v1]),
        sendCancelManageVideoEvent: (0, _v3.useCallback)(() => {
          _v1({
            eventName: "vimeo.click_cancel_featured_video",
            version: 1,
            fields: {
              ..._v12
            }
          });
        }, [_v12, _v1])
      };
    },
    _v289 = "large",
    _v290 = "medium",
    _v291 = "small",
    _v292 = ["type", "video.link", "video.pictures", "video.privacy.view", "video.privacy.embed", "video.type", "video.uri", "video.name", "video.metadata.interactions.edit.uri", "liveEvent.metadata.interactions.edit.uri", "liveEvent.metadata.connections.liveVideo.status", "liveEvent.metadata.connections.videos.total", "liveEvent.embed.schedule", "liveEvent.embed.showLatestArchivedClip", "liveEvent.embed.playlist", "liveEvent.title", "liveEvent.uri", "liveEvent.link", "liveEvent.settingsLink", "liveEvent.pictures", "liveEvent.nextOccurrenceTime", "liveEvent.schedule", "liveEvent.streamPrivacy.embed", "liveEvent.streamPrivacy.view"],
    _v293 = ({
      isOpen: _v0 = !1,
      onClose: _v1,
      ownerId: _v2 = 0,
      setFeaturedItem: _v3,
      savedItemUri: _v4,
      shouldIncludeAllPrivacies: _v5
    }) => {
      if (!_v0) return null;
      let {
          sendSaveFeaturedContentEvent: _v6,
          sendClickManageVideoEvent: _v7,
          sendCancelManageVideoEvent: _v8
        } = _v288(),
        [_v9, _v10] = (0, _v3.useState)("video"),
        [_v11, _v12] = (0, _v3.useState)(""),
        _v13 = (0, _v265.useDebouncedValue)(_v11, 500),
        [_v14, _v15] = (0, _v3.useState)(null),
        [_v16, _v17] = _v264(),
        [_v18, _v19] = (0, _v3.useState)(_v4),
        [_v20, _v21] = (0, _v3.useState)(1),
        {
          getContent: _v22,
          contentResult: _v23,
          videos: _v24,
          events: _v25
        } = ((_v0, _v1, _v2, _v3, _v4) => {
          let _v5 = "video" === _v1,
            _v6 = !!_v3,
            _v7 = _v3.trim().length > 1 ? _v3 : void 0,
            [_v8, _v9] = (0, _v131.useGetUserItemsLazy)(),
            [_v10, _v11] = (0, _v284.useGetUserVideosLazy)(),
            [_v12, _v13] = (0, _v283.useGetUserLiveEventsLazy)(),
            _v14 = _v6 && _v5 ? () => {
              _v8({
                where: {
                  userId: _v0
                },
                query: {
                  perPage: 25,
                  query: _v7,
                  queryFields: "title,description,chapters,tags",
                  excludePrivateToMe: !0,
                  page: _v2,
                  sort: "last_user_action_event_date",
                  direction: "desc",
                  filter: "video",
                  filterPrivacy: _v4
                },
                select: ["video.uri", "video.name", "video.pictures", "video.lastUserActionEventDate"],
                headers: {
                  Accept: "application/vnd.vimeo.*+json;version=3.4"
                }
              });
            } : _v5 ? () => {
              _v10({
                where: {
                  userId: _v0
                },
                query: {
                  perPage: 25,
                  page: _v2,
                  sort: "last_user_action_event_date",
                  direction: "desc",
                  filter: "nolive"
                },
                select: ["uri", "name", "pictures", "lastUserActionEventDate"],
                headers: {
                  Accept: "application/vnd.vimeo.*+json;version=3.4"
                }
              });
            } : () => {
              _v12({
                where: {
                  userId: _v0
                },
                query: {
                  perPage: 25,
                  page: _v2,
                  direction: "desc",
                  type: "recurring",
                  query: _v7
                },
                select: ["uri", "pictures", "title", "nextOccurrenceTime", "metadata.connections.liveVideo.status"],
                headers: {
                  Accept: "application/vnd.vimeo.*+json;version=3.4"
                }
              });
            },
            _v15 = _v6 && _v5 ? _v9 : _v5 ? _v11 : _v13,
            _v16 = _v15.data?.data || [];
          return {
            getContent: _v14,
            contentResult: _v15,
            videos: _v16.filter(_v0 => "lastUserActionEventDate" in _v0 || "video" in _v0).map(_v0 => "video" in _v0 ? _v0.video : _v0),
            events: _v16.filter(_v0 => "nextOccurrenceTime" in _v0)
          };
        })(_v2, _v9, _v20, _v13, _v5 ? void 0 : "public"),
        _v26 = !_v24.length || 1 === _v24.length && _v24[0].uri === _v18,
        _v27 = !_v25.length || 1 === _v25.length && _v25[0].uri === _v18,
        _v28 = (0, _v180.useColorModeValue)("white", "rgba(27, 27, 27, 1)"),
        _v29 = _v26 || _v27 ? (0, _v44.rem)(200) : (0, _v44.rem)(250);
      (0, _v3.useEffect)(() => {
        _v7();
      }, []), (0, _v3.useEffect)(() => {
        _v17.data?.type && ("video" === _v17.data.type ? _v3(_v17.data.video) : _v3(_v17.data.liveEvent));
      }, [_v17.data, _v3]);
      let _v30 = () => {
          _v10("video"), _v8(), _v1();
        },
        _v31 = (0, _v3.useMemo)(() => _v23.loading ? (0, _v1.jsx)(_v57.Box, {
          display: "flex",
          width: "100%",
          justifyContent: "center",
          marginTop: (0, _v44.rem)(16),
          children: (0, _v1.jsx)(_v259.Spinner, {})
        }) : _v26 ? (0, _v1.jsx)(_v271, {
          activeTab: "video"
        }) : (0, _v1.jsx)(_v1.Fragment, {
          children: _v24.map(_v0 => _v18 === _v0.uri ? null : (0, _v1.jsx)(_v282, {
            isActive: _v14 === _v0.uri,
            video: _v0,
            onClick: () => {
              _v15(_v0.uri);
            }
          }, _v0.uri))
        }), [_v24, _v26, _v23, _v14, _v18]),
        _v32 = (0, _v3.useMemo)(() => _v23.loading ? (0, _v1.jsx)(_v57.Box, {
          display: "flex",
          width: "100%",
          justifyContent: "center",
          marginTop: (0, _v44.rem)(16),
          children: (0, _v1.jsx)(_v259.Spinner, {})
        }) : _v27 ? (0, _v1.jsx)(_v271, {
          activeTab: "event"
        }) : (0, _v1.jsx)(_v1.Fragment, {
          children: _v25.map(_v0 => _v18 === _v0.uri ? null : (0, _v1.jsx)(_v277, {
            isActive: _v14 === _v0.uri,
            event: _v0,
            onClick: () => {
              _v15(_v0.uri);
            }
          }, _v0.uri))
        }), [_v25, _v27, _v23, _v14, _v18]);
      async function _v33(_v0) {
        _v0.preventDefault(), await _v16({
          where: {
            userId: _v2
          },
          select: _v292,
          variables: {
            contentUri: _v14 ?? void 0
          }
        }), _v19(_v14), _v6({
          video_id: "video" === _v9 ? String((0, _v266.idFromUri)(_v14)) : void 0,
          live_event_id: "event" === _v9 ? String((0, _v266.idFromUri)(_v14)) : void 0
        }), _v1();
      }
      return (0, _v3.useEffect)(() => {
        _v15(null), _v22();
      }, [_v13, _v20, _v9]), (0, _v1.jsx)(_v25.Modal, {
        size: "md",
        isOpen: _v0,
        onClose: _v30,
        isCentered: !0,
        children: (0, _v1.jsxs)(_v28.ModalContent, {
          width: "100%",
          maxHeight: "80%",
          backgroundColor: _v28,
          children: [(0, _v1.jsx)(_v61.ModalHeader, {
            children: (0, _v1.jsx)(_v23.Header, {
              size: "md",
              children: "Select a video or live event"
            })
          }), (0, _v1.jsx)(_v27.ModalCloseButton, {}), (0, _v1.jsx)(_v26.ModalBody, {
            width: "100%",
            height: "100%",
            children: (0, _v1.jsxs)(_v260.Tabs, {
              variant: "soft",
              onChange: () => {
                _v10("video" === _v9 ? "event" : "video"), _v21(1);
              },
              children: [(0, _v1.jsxs)(_v255.TabList, {
                children: [(0, _v1.jsx)(_v256.Tab, {
                  children: "Videos"
                }), (0, _v1.jsx)(_v256.Tab, {
                  children: "Events"
                }), (0, _v1.jsx)(_v260.TabIndicator, {
                  mt: "-1.5px",
                  height: (0, _v44.rem)(2),
                  width: "100%",
                  background: "blue.500"
                })]
              }), (0, _v1.jsx)(_v57.Box, {
                position: "sticky",
                width: "100%",
                marginTop: "100",
                marginBottom: (0, _v44.rem)(12),
                children: (0, _v1.jsx)(_v261.Search, {
                  variant: "minimal",
                  size: "md",
                  value: _v11,
                  onSubmit: _v33,
                  onChange: function (_v0) {
                    _v12(_v0.currentTarget.value);
                  }
                })
              }), (0, _v1.jsxs)(_v257.TabPanels, {
                display: "inline-block",
                overflowY: "scroll",
                height: _v29,
                children: [(0, _v1.jsx)(_v258.TabPanel, {
                  children: (0, _v1.jsx)(_v281, {
                    items: _v31,
                    itemResult: _v23,
                    setPage: _v21,
                    page: _v20
                  })
                }), (0, _v1.jsx)(_v258.TabPanel, {
                  children: (0, _v1.jsx)(_v281, {
                    items: _v32,
                    itemResult: _v23,
                    setPage: _v21,
                    page: _v20
                  })
                })]
              })]
            })
          }), (0, _v1.jsxs)(_v29.ModalFooter, {
            maxHeight: (0, _v44.rem)(70),
            justifyContent: "right",
            alignItems: "center",
            children: [(0, _v1.jsx)(_v22.Button, {
              variant: "secondary",
              onClick: _v30,
              children: (0, _v250.translate)({
                singular: "Cancel",
                dictionary: {
                  es: {
                    singular: "Cancelar"
                  },
                  "de-DE": {
                    singular: "Abbrechen"
                  },
                  "fr-FR": {
                    singular: "Annuler"
                  },
                  "ja-JP": {
                    singular: "キャンセル"
                  },
                  "ko-KR": {
                    singular: "취소"
                  },
                  "pt-BR": {
                    singular: "Cancelar"
                  },
                  "zh-CN": {
                    singular: "取消"
                  }
                }
              })
            }), "video" === _v9 ? _v26 ? (0, _v1.jsx)(_v188.default, {
              href: "/upload/videos",
              children: (0, _v1.jsx)(_v22.Button, {
                variant: "primary",
                onClick: _v1,
                disabled: !0,
                children: (0, _v250.translate)({
                  singular: "Upload video",
                  dictionary: {
                    es: {
                      singular: "Subir video"
                    },
                    "de-DE": {
                      singular: "Video hochladen"
                    },
                    "fr-FR": {
                      singular: "Mettre en ligne la vidéo"
                    },
                    "ja-JP": {
                      singular: "動画をアップロード"
                    },
                    "ko-KR": {
                      singular: "동영상 업로드"
                    },
                    "pt-BR": {
                      singular: "Carregar Vídeo"
                    },
                    "zh-CN": {
                      singular: "上传视频"
                    }
                  }
                })
              })
            }) : (0, _v1.jsx)(_v22.Button, {
              variant: "primary",
              onClick: _v33,
              children: (0, _v250.translate)({
                singular: "Add video",
                dictionary: {
                  es: {
                    singular: "Agregar video"
                  },
                  "de-DE": {
                    singular: "Video hinzufügen"
                  },
                  "fr-FR": {
                    singular: "Ajouter une vidéo"
                  },
                  "ja-JP": {
                    singular: "動画を追加"
                  },
                  "ko-KR": {
                    singular: "동영상 추가"
                  },
                  "pt-BR": {
                    singular: "Adicionar vídeo"
                  },
                  "zh-CN": {
                    singular: "添加视频"
                  }
                }
              })
            }) : _v27 ? (0, _v1.jsx)(_v188.default, {
              href: "/live/select",
              children: (0, _v1.jsx)(_v22.Button, {
                variant: "primary",
                onClick: _v1,
                disabled: !0,
                children: (0, _v250.translate)({
                  singular: "Create event",
                  dictionary: {
                    es: {
                      singular: "Crear evento"
                    },
                    "de-DE": {
                      singular: "Event erstellen"
                    },
                    "fr-FR": {
                      singular: "Créer un événement"
                    },
                    "ja-JP": {
                      singular: "イベントを作成"
                    },
                    "ko-KR": {
                      singular: "이벤트 생성"
                    },
                    "pt-BR": {
                      singular: "Criar evento"
                    },
                    "zh-CN": {
                      singular: "创建活动"
                    }
                  }
                })
              })
            }) : (0, _v1.jsx)(_v22.Button, {
              variant: "primary",
              onClick: _v33,
              children: (0, _v250.translate)({
                singular: "Add event",
                dictionary: {
                  es: {
                    singular: "Agregar evento"
                  },
                  "de-DE": {
                    singular: "Event hinzufügen"
                  },
                  "fr-FR": {
                    singular: "Ajouter un événement"
                  },
                  "ja-JP": {
                    singular: "イベントを追加"
                  },
                  "ko-KR": {
                    singular: "이벤트 추가"
                  },
                  "pt-BR": {
                    singular: "Adicionar evento"
                  },
                  "zh-CN": {
                    singular: "添加活动"
                  }
                }
              })
            })]
          })]
        })
      });
    };
  var _v294 = _v0.i(0);
  let _v295 = () => (0, _v1.jsxs)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "25",
      height: "24",
      viewBox: "0 0 25 24",
      fill: "none",
      children: [(0, _v1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.5 4H13.5V5.07089C14.2061 5.1719 14.8783 5.37829 15.5 5.67363V4C15.5 2.89543 14.6046 2 13.5 2H11.5C10.3954 2 9.5 2.89543 9.5 4V5.67363C10.1217 5.37829 10.7939 5.1719 11.5 5.07089V4ZM11.5 18.9291C10.7939 18.8281 10.1217 18.6217 9.5 18.3264V20C9.5 21.1046 10.3954 22 11.5 22H13.5C14.6046 22 15.5 21.1046 15.5 20V18.3264C14.8783 18.6217 14.2061 18.8281 13.5 18.9291V20H11.5V18.9291Z",
        fill: "#11191D"
      }), (0, _v1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M18.9278 16.8662L19.9278 15.1342L17.2438 13.5845C17.41 13.0867 17.5 12.5539 17.5 12.0002C17.5 11.798 17.488 11.5986 17.4647 11.4027L20.9358 13.4067C21.888 13.9565 22.2107 15.18 21.6609 16.1324L20.6588 17.868C20.1071 18.8236 18.882 19.1492 17.9358 18.6029L14.4653 16.5992C15.1498 16.3063 15.7557 15.865 16.2426 15.3159L18.9278 16.8662ZM8.75717 8.68479L6.0714 7.13416L5.0714 8.86621L7.75609 10.4162C7.58997 10.914 7.5 11.4466 7.5 12.0002C7.5 12.2026 7.51202 12.4021 7.53539 12.5982L4.06343 10.5937C3.11124 10.0439 2.78848 8.82035 3.3383 7.86802L4.34039 6.13235C4.8921 5.17677 6.11722 4.85122 7.06343 5.39751L10.5343 7.4014C9.84984 7.69434 9.244 8.13561 8.75717 8.68479Z",
        fill: "#11191D"
      }), (0, _v1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M19.4776 11.4356L20.9358 10.5937C21.888 10.0439 22.2107 8.82035 21.6609 7.86802L20.6588 6.13235C20.1071 5.17677 18.882 4.85122 17.9358 5.39751L16.4777 6.23935C17.0538 6.63789 17.5672 7.12062 18.0001 7.66975L18.9278 7.13416L19.9278 8.86621L19.0016 9.40098C19.2566 10.0383 19.4206 10.7218 19.4776 11.4356ZM5.52241 12.5644L4.06343 13.4067C3.11124 13.9565 2.78848 15.18 3.3383 16.1324L4.34039 17.868C4.8921 18.8236 6.11722 19.1492 7.06343 18.6029L8.52198 17.7608C7.94591 17.3622 7.43253 16.8794 6.99962 16.3303L6.0714 16.8662L5.0714 15.1342L5.9983 14.599C5.74332 13.9617 5.57933 13.2781 5.52241 12.5644Z",
        fill: "#11191D"
      }), (0, _v1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.5 5.07129C9.68046 5.33155 8.08665 6.29155 6.99989 7.66994L8.75747 8.68468C9.46282 7.88911 10.418 7.32006 11.5 7.10042V5.07129ZM5.5 12.0004C5.5 11.0819 5.67689 10.2048 5.99846 9.40117L7.75623 10.416C7.59002 10.9139 7.5 11.4466 7.5 12.0004C7.5 12.5542 7.59002 13.0869 7.75624 13.5848L5.99846 14.5996C5.67689 13.796 5.5 12.9189 5.5 12.0004ZM6.99989 16.3309C8.08665 17.7093 9.68047 18.6692 11.5 18.9295V16.9004C10.418 16.6807 9.46283 16.1117 8.75747 15.3161L6.99989 16.3309ZM17.2439 10.4165C17.41 10.9142 17.5 11.4468 17.5 12.0004C17.5 12.554 17.41 13.0866 17.2439 13.5843L19.0017 14.5992C19.3232 13.7957 19.5 12.9187 19.5 12.0004C19.5 11.0821 19.3232 10.2051 19.0017 9.40161L17.2439 10.4165ZM18.0004 7.67032C16.9136 6.29172 15.3197 5.33158 13.5 5.07129V7.10042C14.5822 7.32009 15.5375 7.88929 16.2429 8.68504L18.0004 7.67032ZM13.5 16.9004C14.5822 16.6807 15.5375 16.1115 16.2428 15.3158L18.0004 16.3305C16.9136 17.7091 15.3197 18.6692 13.5 18.9295V16.9004Z",
        fill: "#11191D"
      }), (0, _v1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M15.5 12C15.5 13.6569 14.1569 15 12.5 15C10.8431 15 9.5 13.6569 9.5 12C9.5 10.3431 10.8431 9 12.5 9C14.1569 9 15.5 10.3431 15.5 12ZM12.5 11C11.9477 11 11.5 11.4477 11.5 12C11.5 12.5523 11.9477 13 12.5 13C13.0523 13 13.5 12.5523 13.5 12C13.5 11.4477 13.0523 11 12.5 11Z",
        fill: "#11191D"
      })]
    }),
    _v296 = () => (0, _v1.jsx)(_v57.Box, {
      display: "flex",
      children: (0, _v1.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "30",
        height: "28",
        viewBox: "0 0 25 24",
        fill: "none",
        children: [(0, _v1.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M18.5 12L6.5 19V5L18.5 12Z",
          stroke: "white",
          strokeWidth: "2",
          strokeLinejoin: "round"
        }), (0, _v1.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M19.5 12C19.5 12.3557 19.3111 12.6846 19.0039 12.8638L7.00387 19.8638C6.69458 20.0442 6.31243 20.0455 6.00194 19.8671C5.69145 19.6888 5.5 19.3581 5.5 19L5.5 5C5.5 4.64193 5.69145 4.3112 6.00194 4.13286C6.31243 3.95452 6.69458 3.9558 7.00387 4.13622L19.0039 11.1362C19.3111 11.3154 19.5 11.6443 19.5 12ZM7.5 6.74104V17.259L16.5154 12L7.5 6.74104Z",
          fill: "white"
        })]
      })
    });
  var _v297 = _v0.i(0),
    _v298 = _v0.i(0),
    _v299 = _v0.i(0);
  let _v300 = ({
      isLive: _v0 = !1,
      thumbnailUrl: _v1,
      eventLink: _v2 = "",
      hidePlayIcon: _v3 = !1,
      eventStatus: _v4,
      clickEventAnalyticsEvent: _v5,
      ..._v6
    }) => {
      let _v7 = _v1 && "" !== _v1 ? _v1 : null,
        _v8 = Number(_v6?.aspectRatio ?? 16 / 9),
        _v9 = (0, _v180.useColorModeValue)("slate.50", "grayscale.800"),
        _v10 = (0, _v180.useColorModeValue)("primary", "secondary"),
        _v11 = String(_v6.borderRadius) ?? "0.5rem",
        _v12 = (0, _v180.useColorModeValue)("slate.100", "grayscale.700");
      return (0, _v1.jsxs)(_v57.Box, {
        position: "relative",
        width: _v6.width,
        height: _v6.height,
        minHeight: _v6.minHeight,
        aspectRatio: _v8,
        role: "button",
        cursor: "pointer",
        ..._v6,
        children: [!!_v7 && (0, _v1.jsx)(_v188.default, {
          href: _v2,
          children: (0, _v1.jsx)(_v297.AspectRatio, {
            position: "absolute",
            width: "100%",
            height: _v6.height,
            backgroundSize: "110%",
            backgroundPosition: "center",
            ratio: _v8,
            objectFit: "cover",
            children: (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsx)("img", {
                src: _v7,
                alt: "Featured event",
                style: {
                  borderRadius: _v11
                }
              }), (0, _v1.jsx)(_v57.Box, {
                width: "100%",
                height: "100%",
                background: "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)",
                borderRadius: _v11
              })]
            })
          })
        }), (0, _v1.jsxs)(_v57.Box, {
          background: null !== _v7 ? "none" : _v9,
          height: "100%",
          borderRadius: (0, _v267.rem)(8),
          as: _v188.default,
          href: _v2,
          children: [(0, _v1.jsxs)(_v57.Box, {
            width: "100%",
            height: "100%",
            children: [(0, _v1.jsx)(_v298.Badge, {
              size: "sm",
              variant: _v0 ? "live" : "default",
              position: "absolute",
              margin: (0, _v267.rem)(8),
              height: (0, _v267.rem)(28),
              left: (0, _v267.rem)(12),
              top: (0, _v267.rem)(12),
              padding: `${(0, _v267.rem)(2)} ${(0, _v267.rem)(11)}`,
              children: _v4
            }), !_v7 && (0, _v1.jsx)(_v57.Box, {
              display: "flex",
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              children: (0, _v1.jsx)(_v57.Box, {
                display: "flex",
                width: (0, _v267.rem)(60),
                height: (0, _v267.rem)(60),
                backgroundColor: _v12,
                borderRadius: (0, _v267.rem)(40),
                marginBottom: (0, _v267.rem)(8),
                justifyContent: "center",
                alignItems: "center",
                children: (0, _v1.jsx)(_v208.CameraOn, {})
              })
            })]
          }), !_v3 && (0, _v1.jsx)(_v57.Box, {
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            children: (0, _v1.jsx)(_v22.Button, {
              as: _v188.default,
              href: _v2,
              width: (0, _v267.rem)(59),
              variant: _v10,
              zIndex: 2,
              boxShadow: `0 0 ${(0, _v267.rem)(4)} 0 rgba(0, 0, 0, 1)`,
              sx: {
                "*": {
                  fill: "white"
                }
              },
              onClick: () => {
                _v5?.();
              },
              children: (0, _v1.jsx)(_v299.Play, {})
            })
          })]
        })]
      });
    },
    _v301 = ({
      hidePlayIcon: _v0 = !1,
      videoLink: _v1 = "",
      thumbnailUrl: _v2,
      clickVideoAnalyticsEvent: _v3,
      ..._v4
    }) => {
      let _v5 = _v2 && "" !== _v2 ? _v2 : null,
        _v6 = Number(_v4?.aspectRatio ?? 16 / 9),
        _v7 = (0, _v180.useColorModeValue)("slate.50", "grayscale.800"),
        _v8 = (0, _v180.useColorModeValue)("primary", "secondary"),
        _v9 = String(_v4.borderRadius) ?? (0, _v267.rem)(8);
      return (0, _v1.jsxs)(_v57.Box, {
        position: "relative",
        width: _v4.width,
        height: _v4.height,
        minHeight: _v4.minHeight,
        aspectRatio: _v6,
        role: "button",
        cursor: "pointer",
        ..._v4,
        children: [_v5 ? (0, _v1.jsx)(_v188.default, {
          href: _v1,
          children: (0, _v1.jsx)(_v297.AspectRatio, {
            position: "absolute",
            width: "100%",
            height: _v4.height,
            backgroundSize: "110%",
            backgroundPosition: "center",
            ratio: _v6,
            objectFit: "cover",
            children: (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsx)("img", {
                src: _v5,
                alt: "Featured video",
                style: {
                  borderRadius: _v9
                }
              }), (0, _v1.jsx)(_v57.Box, {
                width: "100%",
                height: "100%",
                background: "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)",
                borderRadius: _v9
              })]
            })
          })
        }) : (0, _v1.jsx)(_v57.Box, {}), (0, _v1.jsx)(_v57.Box, {
          background: null !== _v5 ? "none" : _v7,
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: (0, _v267.rem)(8),
          children: !_v0 && (0, _v1.jsx)(_v22.Button, {
            as: _v188.default,
            href: _v1,
            width: (0, _v267.rem)(59),
            variant: _v8,
            zIndex: 2,
            boxShadow: `0 0 ${(0, _v267.rem)(4)} 0 rgba(0, 0, 0, 1)`,
            sx: {
              "*": {
                fill: "white"
              }
            },
            onClick: () => {
              _v3?.();
            },
            children: (0, _v1.jsx)(_v296, {})
          })
        })]
      });
    },
    _v302 = {
      minWidth: 0,
      maxWidth: "none",
      height: 350
    },
    _v303 = {
      minWidth: 720,
      maxWidth: 0,
      height: 350
    },
    _v304 = {
      minWidth: 360,
      maxWidth: 719,
      height: "auto"
    },
    _v305 = _v0 => _v0 >= _v302.minWidth ? _v302 : _v0 >= _v303.minWidth ? _v303 : _v304,
    _v306 = _v0 => _v0?.uri.includes("live_events") ?? !1,
    _v307 = ({
      width: _v0,
      featuredItem: _v1 = null,
      isEvent: _v2 = !1,
      canUpdate: _v3 = !1,
      locale: _v4,
      openManageModal: _v5
    }) => {
      let _v6,
        _v7 = (0, _v201.useIsBokeh)(),
        _v8 = _v305(_v0),
        _v9 = _v0 >= _v302.minWidth ? _v289 : _v0 >= _v303.minWidth ? _v290 : _v291,
        _v10 = _v9 === _v291,
        _v11 = _v9 === _v290,
        _v12 = _v9 === _v289,
        _v13 = !_v2,
        _v14 = _v13 ? _v1?.name : _v1?.title,
        _v15 = !!_v2 && _v1?.metadata?.connections?.liveVideo?.status === "streaming",
        _v16 = ((_v0, _v1 = !1) => {
          let _v2, _v3;
          if (!_v0) return "";
          let _v4 = _v306(_v0),
            _v5 = _v0?.pictures?.sizes,
            _v6 = (_v2 = _v5, _v3 = Math.round(_v1 ? 4 / 3 : 16 / 9), _v2 ? (_v2.map((_v0, _v1) => {
              if (Math.round(_v0.width / _v0.height * 100 / 100) === _v3) return _v1;
            }), _v2.length - 1) : -1);
          return _v5 && -1 !== _v6 && (!_v4 || _v0?.pictures?.uri) ? _v5[_v6]?.link : "";
        })(_v1 ?? null, _v11),
        _v17 = _v1.nextOccurrenceTime,
        _v18 = _v1?.schedule?.startTime,
        _v19 = _v1?.schedule?.endTime,
        _v20 = _v1?.createdTime,
        _v21 = !!_v19 && !!_v17 && new Date().toISOString() > _v17,
        _v22 = _v15 ? (0, _v250.translate)({
          singular: "Live",
          dictionary: {
            es: {
              singular: "En vivo"
            },
            "fr-FR": {
              singular: "Direct"
            },
            "ja-JP": {
              singular: "ライブ"
            },
            "ko-KR": {
              singular: "라이브"
            },
            "pt-BR": {
              singular: "Ao vivo"
            },
            "zh-CN": {
              singular: "直播"
            }
          }
        }).toUpperCase() : _v21 ? (0, _v250.translate)({
          singular: "Ended",
          dictionary: {
            es: {
              singular: "Finalizado"
            },
            "de-DE": {
              singular: "Beendet"
            },
            "fr-FR": {
              singular: "Terminé"
            },
            "ja-JP": {
              singular: "終了しました"
            },
            "ko-KR": {
              singular: "종료됨"
            },
            "pt-BR": {
              singular: "Encerrado"
            },
            "zh-CN": {
              singular: "已结束"
            }
          }
        }).toUpperCase() : (0, _v250.translate)({
          singular: "Upcoming",
          dictionary: {
            es: {
              singular: "PRÓXIMAMENTE"
            },
            "de-DE": {
              singular: "IN KÜRZE"
            },
            "fr-FR": {
              singular: "À VENIR"
            },
            "ja-JP": {
              singular: "近日配信"
            },
            "ko-KR": {
              singular: "예정"
            },
            "pt-BR": {
              singular: "EM BREVE"
            },
            "zh-CN": {
              singular: "即将上线"
            }
          }
        }).toUpperCase(),
        _v23 = _v18 ? _v21 ? _v276(_v19, _v4) : _v17 ? _v276(_v17, _v4) : (0, _v250.translate)({
          singular: "Not yet scheduled",
          dictionary: {
            es: {
              singular: "Aún no programado"
            },
            "de-DE": {
              singular: "Noch nicht geplant"
            },
            "fr-FR": {
              singular: "Pas encore programmé"
            },
            "ja-JP": {
              singular: "まだスケジュールされていません"
            },
            "ko-KR": {
              singular: "아직 예약되지 않았습니다."
            },
            "pt-BR": {
              singular: "Ainda não agendado"
            },
            "zh-CN": {
              singular: "尚未预定"
            }
          }
        }) : (0, _v250.translate)({
          singular: "Not yet scheduled",
          dictionary: {
            es: {
              singular: "Aún no programado"
            },
            "de-DE": {
              singular: "Noch nicht geplant"
            },
            "fr-FR": {
              singular: "Pas encore programmé"
            },
            "ja-JP": {
              singular: "まだスケジュールされていません"
            },
            "ko-KR": {
              singular: "아직 예약되지 않았습니다."
            },
            "pt-BR": {
              singular: "Ainda não agendado"
            },
            "zh-CN": {
              singular: "尚未预定"
            }
          }
        }),
        _v24 = !!_v20 && _v275(_v20, _v4),
        _v25 = !!_v2 && !_v15 && !!_v1?.nextOccurrenceTime,
        _v26 = _v1?.link ?? "",
        _v27 = _v1?.manageLink ?? null ?? _v26,
        _v28 = (0, _v266.idFromUri)(_v1?.uri),
        _v29 = _v3 ? _v1?.settingsLink : _v1?.link ?? "",
        _v30 = _v13 || _v15,
        _v31 = _v2 && _v15 ? (0, _v250.translate)({
          singular: "Join event",
          dictionary: {
            es: {
              singular: "Unirse al evento"
            },
            "de-DE": {
              singular: "Event beitreten"
            },
            "fr-FR": {
              singular: "Rejoindre l'événement"
            },
            "ja-JP": {
              singular: "イベントに参加"
            },
            "ko-KR": {
              singular: "이벤트 참여"
            },
            "pt-BR": {
              singular: "Participar do evento"
            },
            "zh-CN": {
              singular: "加入活动"
            }
          }
        }) : (0, _v250.translate)({
          singular: "Watch",
          dictionary: {
            es: {
              singular: "Ver"
            },
            "de-DE": {
              singular: "Anschauen"
            },
            "fr-FR": {
              singular: "Regarder"
            },
            "ja-JP": {
              singular: "鑑賞"
            },
            "ko-KR": {
              singular: "시청하기"
            },
            "pt-BR": {
              singular: "Assistir"
            },
            "zh-CN": {
              singular: "观看"
            }
          }
        });
      switch (!0) {
        case _v10:
          _v6 = _v7 ? (0, _v44.rem)(20) : (0, _v44.rem)(18);
          break;
        case _v11:
          _v6 = (0, _v44.rem)(36);
          break;
        default:
          _v6 = _v7 ? (0, _v44.rem)(60) : (0, _v44.rem)(54);
      }
      let _v32 = _v10 ? "100%" : _v11 ? "60%" : "50%",
        _v33 = _v12 ? (0, _v44.rem)(48) : _v11 ? (0, _v44.rem)(32) : 0,
        _v34 = _v10 ? "stretch" : "center",
        _v35 = _v10 ? "column" : "row",
        _v36 = _v10 || _v12 || _v7 || _v0 >= 850 ? "row" : "column",
        _v37 = _v10 || _v0 <= 850 ? "100%" : "auto",
        _v38 = (0, _v180.useColorModeValue)("primary", "secondary"),
        _v39 = (0, _v180.useColorModeValue)("secondary", "outline"),
        _v40 = 16 / 9,
        _v41 = _v7 ? "lg" : (0, _v44.rem)(8),
        _v42 = _v10 ? (0, _v44.rem)(12) : (0, _v44.rem)(24),
        _v43 = _v10 ? (0, _v44.rem)(4) : (0, _v44.rem)(12),
        _v44 = _v10 ? (0, _v44.rem)(50) : (0, _v44.rem)(135),
        _v45 = _v10 ? 1 : _v11 ? 3 : 2,
        _v46 = _v10 ? 25 : _v11 ? 20 : 30,
        _v47 = _v10 && !_v25 ? (0, _v44.rem)(18) : 0,
        _v48 = _v10 ? "100%" : _v11 ? (0, _v44.rem)(284) : (0, _v44.rem)(286),
        _v49 = _v7 ? "100%" : _v48,
        _v50 = _v10 ? (0, _v44.rem)(160) : "100%",
        _v51 = _v10 ? "100%" : _v0 <= 0 ? (0, _v44.rem)(381) : (0, _v44.rem)(508),
        {
          sendOpenVideoEvent: _v52
        } = _v288();
      return (0, _v1.jsx)(_v57.Box, {
        width: _v0,
        minWidth: Math.min(_v0, _v8.minWidth),
        maxWidth: _v8.maxWidth,
        backgroundColor: "fill-surface",
        borderRadius: "lg",
        children: (0, _v1.jsxs)(_v268.Stack, {
          width: "100%",
          height: "100%",
          direction: _v35,
          spacing: _v33,
          justifyContent: "left",
          alignItems: _v34,
          children: [(0, _v1.jsx)(_v57.Box, {
            height: "100%",
            alignItems: "center",
            maxWidth: _v32,
            children: _v2 ? (0, _v1.jsx)(_v300, {
              width: _v51,
              height: _v49,
              minHeight: _v50,
              thumbnailUrl: _v16,
              eventLink: _v29,
              hidePlayIcon: !0,
              aspectRatio: _v40,
              isLive: _v15,
              eventStatus: _v22,
              "data-id": "featured_content_widget_live_event",
              borderRadius: _v41,
              overflow: "hidden",
              clickEventAnalyticsEvent: () => {
                _v52({
                  featuredContentId: _v28,
                  target: "live_event_view_page",
                  targetPath: _v29,
                  copy: "",
                  clickElement: "thumbnail",
                  contentType: "events"
                });
              }
            }) : (0, _v1.jsx)(_v301, {
              width: _v51,
              height: _v49,
              minHeight: _v50,
              thumbnailUrl: _v16,
              hidePlayIcon: !0,
              videoLink: _v27,
              aspectRatio: _v40,
              "data-id": "featured_content_widget_video",
              borderRadius: _v41,
              overflow: "hidden",
              clickVideoAnalyticsEvent: () => {
                _v52({
                  featuredContentId: _v28,
                  target: "single_video_view",
                  targetPath: _v27,
                  copy: "",
                  clickElement: "thumbnail",
                  contentType: "video"
                });
              }
            })
          }), (0, _v1.jsx)(_v57.Box, {
            p: _v7 ? "lg" : void 0,
            pt: _v47,
            pl: _v10 ? void 0 : 0,
            children: (0, _v1.jsxs)(_v268.Stack, {
              direction: "column",
              spacing: _v42,
              justifyContent: "left",
              children: [(0, _v1.jsxs)(_v268.Stack, {
                direction: "column",
                spacing: _v43,
                children: [(!!_v25 || _v13 && _v7) && (0, _v1.jsx)(_v31.Text, {
                  variant: "body-md",
                  color: "text-primary",
                  paddingTop: "0.375rem",
                  children: _v2 ? _v23 : _v24
                }), (0, _v1.jsx)(_v294.Tooltip, {
                  label: _v14,
                  "aria-label": "title-tooltip",
                  isDisabled: _v14?.length <= _v46,
                  children: (0, _v1.jsx)(_v31.Text, {
                    variant: "body-xl",
                    as: "b",
                    fontSize: _v6,
                    fontWeight: "700",
                    wordBreak: "break-word",
                    ...(_v7 && {
                      lineHeight: "106%"
                    }),
                    noOfLines: _v45,
                    maxHeight: _v44,
                    children: _v14
                  })
                })]
              }), (0, _v1.jsx)(_v57.Box, {
                children: (0, _v1.jsxs)(_v268.Stack, {
                  direction: _v36,
                  spacing: 12,
                  children: [!!_v30 && (0, _v1.jsx)(_v188.default, {
                    href: _v13 ? _v27 : _v29,
                    children: (0, _v1.jsx)(_v22.Button, {
                      size: "md",
                      variant: _v38,
                      width: _v37,
                      leftIcon: (0, _v1.jsx)(_v296, {}),
                      "data-id": "featured_content_widget_watch_button",
                      onClick: () => {
                        _v52({
                          featuredContentId: _v28,
                          target: _v2 ? "live_event_view_page" : "single_video_view",
                          targetPath: _v2 ? _v29 : _v27,
                          copy: _v31,
                          clickElement: "button",
                          contentType: _v2 ? "events" : "video"
                        });
                      },
                      children: _v31
                    })
                  }), !!_v3 && (0, _v1.jsx)(_v22.Button, {
                    size: "md",
                    variant: _v39,
                    width: _v37,
                    leftIcon: (0, _v1.jsx)(_v295, {}),
                    sx: {
                      "*": {
                        fill: "text-primary"
                      }
                    },
                    onClick: () => {
                      _v5();
                    },
                    children: _v7 ? (0, _v250.translate)({
                      singular: "Edit",
                      dictionary: {
                        es: {
                          singular: "Editar"
                        },
                        "de-DE": {
                          singular: "Bearbeiten"
                        },
                        "fr-FR": {
                          singular: "Modifier"
                        },
                        "ja-JP": {
                          singular: "編集"
                        },
                        "ko-KR": {
                          singular: "편집"
                        },
                        "pt-BR": {
                          singular: "Editar"
                        },
                        "zh-CN": {
                          singular: "编辑"
                        }
                      }
                    }) : (0, _v250.translate)({
                      singular: "Manage video",
                      dictionary: {
                        es: {
                          singular: "Gestionar video"
                        },
                        "de-DE": {
                          singular: "Video verwalten"
                        },
                        "fr-FR": {
                          singular: "Gérer la vidéo"
                        },
                        "ja-JP": {
                          singular: "動画を管理"
                        },
                        "ko-KR": {
                          singular: "동영상 관리"
                        },
                        "pt-BR": {
                          singular: "Gerenciar vídeo"
                        },
                        "zh-CN": {
                          singular: "管理视频"
                        }
                      }
                    })
                  })]
                })
              })]
            })
          })]
        })
      });
    };
  var _v308 = _v0.i(0),
    _v309 = _v0.i(0),
    _v310 = _v0.i(0),
    _v311 = _v0.i(0),
    _v312 = _v0.i(0),
    _v313 = _v0.i(0),
    _v314 = _v0.i(0),
    _v315 = _v0.i(0),
    _v316 = _v0.i(0),
    _v317 = _v0.i(0),
    _v318 = _v0.i(0),
    _v319 = _v0.i(0);
  let _v320 = ["name", "uri", "isPrivateToUser", "isPinned", "useParentSlackSettings", "isSlackNotificationEnabled", "reviewLinks.uri", "slackIncomingWebhooksId", "user.membership.type", "settings.color", "metadata.connections.items", "metadata.connections.folders.total", "metadata.connections.parentFolder", "metadata.interactions"],
    _v321 = "featured_folders_widget";
  var _v322 = _v0.i(0),
    _v323 = _v0.i(0),
    _v324 = _v0.i(0),
    _v325 = _v0.i(0);
  let _v326 = ({
    backgroundColor: _v0,
    href: _v1,
    title: _v2,
    subtitle: _v3,
    ownerId: _v4,
    folderId: _v5,
    actionsMenu: _v6,
    hoverActions: _v7
  }) => {
    let {
        data: _v8,
        isLoading: _v9
      } = (0, _v324.useGetUserProjectItems)({
        query: {
          perPage: 4,
          sizes: "640x360",
          noPadding: !0
        },
        select: ["type", "folder.settings.color", "video.pictures.sizes.link", "folder.uri", "video.uri"],
        where: {
          userId: _v4,
          projectId: _v5
        },
        headers: {
          Accept: "application/vnd.vimeo.*+json;version=3.4.13"
        }
      }, {
        revalidateOnFocus: !1
      }),
      _v10 = [...Array(4 - (_v8?.data.length || 0))].fill((0, _v1.jsx)(_v57.Box, {
        borderRadius: "md",
        aspectRatio: "16 / 9",
        bgColor: "fill-component"
      }));
    return (0, _v1.jsxs)(_v325.ContentCard, {
      href: _v1,
      width: "286px",
      children: [(0, _v1.jsxs)(_v325.ContentCard.Body, {
        children: [(0, _v1.jsx)(_v325.ContentCard.DefaultThumbnail, {
          background: _v0,
          _groupHover: {
            opacity: 0
          },
          _groupFocusWithin: {
            opacity: 0
          },
          border: "none",
          children: (0, _v1.jsx)(_v323.FolderFilled, {
            color: _v0 ? (0, _v322.readableColor)(_v0) : "text-tertiary",
            boxSize: "lg"
          })
        }), !_v9 && (0, _v1.jsxs)(_v239.Grid, {
          gap: "0.5rem",
          templateColumns: "1fr 1fr",
          opacity: 0,
          _groupHover: {
            opacity: 1
          },
          _groupFocusWithin: {
            opacity: 1
          },
          children: [_v8?.data.map(({
            type: _v0,
            video: _v1,
            folder: _v2
          }) => "video" === _v0 ? (0, _v1.jsx)(_v325.ContentCard.Thumbnail, {
            src: _v1?.pictures?.sizes[0]?.link,
            alt: ""
          }, _v1?.uri) : (0, _v1.jsx)(_v202.Center, {
            backgroundColor: _v2?.settings?.color || "fill-component",
            borderRadius: "md",
            aspectRatio: "16 / 9",
            children: (0, _v1.jsx)(_v323.FolderFilled, {
              boxSize: (0, _v44.rem)(28),
              color: _v2?.settings?.color ? (0, _v322.readableColor)(_v2?.settings?.color) : "text-secondary"
            })
          }, _v2?.uri)), 4 > (_v8?.data.length || 0) ? _v10 : null]
        }), _v9 && (0, _v1.jsx)(_v239.Grid, {
          gap: "0.5rem",
          templateColumns: "1fr 1fr",
          opacity: 0,
          _groupHover: {
            opacity: 1
          },
          _groupFocusWithin: {
            opacity: 1
          },
          children: [void 0, void 0, void 0, void 0].fill((0, _v1.jsx)(_v189.BokehSkeleton, {
            height: "72px",
            borderRadius: "md"
          }))
        }), _v7]
      }), (0, _v1.jsx)(_v325.ContentCard.Footer, {
        actions: _v6,
        title: _v2,
        subtitle: _v3
      })]
    });
  };
  var _v327 = _v0.i(0),
    _v328 = _v0.i(0),
    _v329 = _v0.i(0);
  let _v330 = ({
      name: _v0,
      color: _v1,
      topRightDecoration: _v2
    }) => {
      let _v3 = (0, _v180.useColorModeValue)("slate.400", "grayscale.800");
      return (0, _v1.jsxs)(_v57.Box, {
        position: "relative",
        aspectRatio: 16 / 9,
        bgColor: _v1 || _v3,
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        paddingLeft: (0, _v267.rem)(12),
        transition: "300ms ease-in-out",
        _hover: {
          transform: "translateY(-2px)"
        },
        "data-group": !0,
        children: [(0, _v1.jsx)(_v23.Header, {
          title: _v0,
          size: "xl",
          color: _v1 ? (0, _v267.readableColor)(_v1) : "white",
          maxWidth: "90%",
          noOfLines: 1,
          children: _v0
        }), (0, _v1.jsx)(_v57.Box, {
          position: "absolute",
          top: "75",
          bottom: "0",
          left: "0",
          right: "75",
          children: _v2
        })]
      });
    },
    _v331 = ({
      folder: _v0,
      menu: _v1,
      ownerId: _v2,
      showEnhancedFolderCard: _v3,
      ..._v4
    }) => {
      let _v5 = (0, _v201.useIsBokeh)(),
        _v6 = _v0.metadata.connections.items.total || 0;
      return _v3 ? (0, _v1.jsx)(_v326, {
        actionsMenu: _v1,
        href: (0, _v165.getFolderPageUriFromApiUri)(_v0.uri),
        title: _v0.name,
        ownerId: _v2,
        folderId: Number.parseInt(_v0.uri.split("/").pop()),
        backgroundColor: _v0.settings?.color,
        subtitle: (0, _v250.translate)({
          singular: "{ITEMS} item",
          plural: "{ITEMS} items",
          count: _v6,
          replacements: {
            ITEMS: _v6
          },
          dictionary: {
            es: {
              singular: "{ITEMS} elemento",
              plural: "{ITEMS} elementos"
            },
            "de-DE": {
              singular: "{ITEMS} Element",
              plural: "{ITEMS} Elemente"
            },
            "fr-FR": {
              singular: "{ITEMS} élément",
              plural: "{ITEMS} éléments"
            },
            "ja-JP": {
              singular: "{ITEMS} 件のアイテム",
              plural: "{ITEMS} 件のアイテム"
            },
            "ko-KR": {
              singular: "{ITEMS}개 항목",
              plural: "{ITEMS}개 항목"
            },
            "pt-BR": {
              singular: "{ITEMS} iten",
              plural: "{ITEMS} itens"
            },
            "zh-CN": {
              singular: "{ITEMS} 项",
              plural: "{ITEMS} 项"
            }
          }
        }),
        hoverActions: (0, _v1.jsx)(_v328.HoverActions, {
          type: "folder",
          entity: _v0
        })
      }) : _v5 ? (0, _v1.jsx)(_v327.FolderCard, {
        actionsMenu: _v1,
        href: (0, _v165.getFolderPageUriFromApiUri)(_v0.uri),
        title: _v0.name,
        backgroundColor: _v0.settings?.color,
        subtitle: (0, _v250.translate)({
          singular: "{ITEMS} item",
          plural: "{ITEMS} items",
          count: _v6,
          replacements: {
            ITEMS: _v6
          },
          dictionary: {
            es: {
              singular: "{ITEMS} elemento",
              plural: "{ITEMS} elementos"
            },
            "de-DE": {
              singular: "{ITEMS} Element",
              plural: "{ITEMS} Elemente"
            },
            "fr-FR": {
              singular: "{ITEMS} élément",
              plural: "{ITEMS} éléments"
            },
            "ja-JP": {
              singular: "{ITEMS} 件のアイテム",
              plural: "{ITEMS} 件のアイテム"
            },
            "ko-KR": {
              singular: "{ITEMS}개 항목",
              plural: "{ITEMS}개 항목"
            },
            "pt-BR": {
              singular: "{ITEMS} iten",
              plural: "{ITEMS} itens"
            },
            "zh-CN": {
              singular: "{ITEMS} 项",
              plural: "{ITEMS} 项"
            }
          }
        }),
        hoverActions: (0, _v1.jsx)(_v328.HoverActions, {
          type: "folder",
          entity: _v0
        }),
        width: "286px"
      }) : (0, _v1.jsx)(_v332, {
        folder: _v0,
        menu: _v1,
        ..._v4
      });
    };
  function _v332({
    folder: _v0,
    menu: _v1,
    ..._v2
  }) {
    let {
        name: _v3,
        uri: _v4
      } = _v0,
      _v5 = (0, _v165.getFolderPageUriFromApiUri)(_v4),
      _v6 = _v0.metadata.connections.items.total || 0,
      _v7 = _v0.settings?.color;
    return (0, _v1.jsx)(_v57.Box, {
      ..._v2,
      position: "relative",
      role: "group",
      children: (0, _v1.jsxs)(_v188.default, {
        href: _v5,
        children: [(0, _v1.jsx)(_v330, {
          name: _v3,
          color: _v7,
          topRightDecoration: (0, _v1.jsx)(_v329.FolderTopRightDecoration, {
            folder: _v0,
            location: "featured_folders_widget"
          })
        }), (0, _v1.jsx)(_v57.Box, {
          mt: (0, _v267.rem)(12),
          children: (0, _v1.jsxs)(_v43.Flex, {
            alignItems: "center",
            justify: "space-between",
            children: [(0, _v1.jsxs)(_v253.VStack, {
              alignItems: "flex-start",
              gap: "2",
              width: "100%",
              children: [(0, _v1.jsx)(_v31.Text, {
                variant: "body-xl",
                title: _v3,
                fontSize: (0, _v267.rem)(14),
                fontWeight: "700",
                lineHeight: (0, _v267.rem)(16),
                maxWidth: "90%",
                noOfLines: 1,
                children: _v3
              }), (0, _v1.jsx)(_v31.Text, {
                variant: "body-xl",
                fontSize: (0, _v267.rem)(12),
                fontWeight: "400",
                color: "text-secondary",
                lineHeight: (0, _v267.rem)(15),
                children: (0, _v250.translate)({
                  singular: "{ITEMS} item",
                  plural: "{ITEMS} items",
                  count: _v6,
                  replacements: {
                    ITEMS: _v6
                  },
                  dictionary: {
                    es: {
                      singular: "{ITEMS} elemento",
                      plural: "{ITEMS} elementos"
                    },
                    "de-DE": {
                      singular: "{ITEMS} Element",
                      plural: "{ITEMS} Elemente"
                    },
                    "fr-FR": {
                      singular: "{ITEMS} élément",
                      plural: "{ITEMS} éléments"
                    },
                    "ja-JP": {
                      singular: "{ITEMS} 件のアイテム",
                      plural: "{ITEMS} 件のアイテム"
                    },
                    "ko-KR": {
                      singular: "{ITEMS}개 항목",
                      plural: "{ITEMS}개 항목"
                    },
                    "pt-BR": {
                      singular: "{ITEMS} iten",
                      plural: "{ITEMS} itens"
                    },
                    "zh-CN": {
                      singular: "{ITEMS} 项",
                      plural: "{ITEMS} 项"
                    }
                  }
                })
              })]
            }), _v1]
          })
        })]
      })
    });
  }
  var _v333 = _v0.i(0);
  let _v334 = {
      opacity: 0,
      _groupHover: {
        opacity: 1
      }
    },
    _v335 = ({
      isSmall: _v0,
      onClick: _v1
    }) => {
      let _v2 = (0, _v201.useIsBokeh)();
      return _v0 ? (0, _v1.jsx)(_v294.Tooltip, {
        label: (0, _v250.translate)({
          singular: "Manage featured folders",
          dictionary: {
            es: {
              singular: "Gestionar carpetas destacadas"
            },
            "de-DE": {
              singular: "Verwalten Sie besondere Ordner"
            },
            "fr-FR": {
              singular: "Gérez les dossiers à la une"
            },
            "ja-JP": {
              singular: "注目のフォルダーを管理"
            },
            "ko-KR": {
              singular: "추천 폴더 관리"
            },
            "pt-BR": {
              singular: "Gerenciar pastas em destaque"
            },
            "zh-CN": {
              singular: "管理精选文件夹"
            }
          }
        }),
        variant: "simple",
        children: (0, _v1.jsx)(_v150.IconButton, {
          icon: (0, _v1.jsx)(_v333.EditPencil, {
            display: "block"
          }),
          size: "sm",
          variant: "secondary",
          "aria-label": (0, _v250.translate)({
            singular: "Manage featured folders",
            dictionary: {
              es: {
                singular: "Gestionar carpetas destacadas"
              },
              "de-DE": {
                singular: "Verwalten Sie besondere Ordner"
              },
              "fr-FR": {
                singular: "Gérez les dossiers à la une"
              },
              "ja-JP": {
                singular: "注目のフォルダーを管理"
              },
              "ko-KR": {
                singular: "추천 폴더 관리"
              },
              "pt-BR": {
                singular: "Gerenciar pastas em destaque"
              },
              "zh-CN": {
                singular: "管理精选文件夹"
              }
            }
          }),
          sx: {
            svg: {
              boxSize: "2xs"
            }
          },
          onClick: _v1
        })
      }) : (0, _v1.jsx)(_v22.Button, {
        height: (0, _v267.rem)(32),
        "aria-label": (0, _v250.translate)({
          singular: "Manage featured folders",
          dictionary: {
            es: {
              singular: "Gestionar carpetas destacadas"
            },
            "de-DE": {
              singular: "Verwalten Sie besondere Ordner"
            },
            "fr-FR": {
              singular: "Gérez les dossiers à la une"
            },
            "ja-JP": {
              singular: "注目のフォルダーを管理"
            },
            "ko-KR": {
              singular: "추천 폴더 관리"
            },
            "pt-BR": {
              singular: "Gerenciar pastas em destaque"
            },
            "zh-CN": {
              singular: "管理精选文件夹"
            }
          }
        }),
        variant: "secondary",
        onClick: _v1,
        sx: {
          svg: {
            boxSize: "2xs"
          },
          ...(_v2 ? _v334 : {})
        },
        leftIcon: (0, _v1.jsx)(_v333.EditPencil, {}),
        children: (0, _v250.translate)({
          singular: "Edit",
          dictionary: {
            es: {
              singular: "Editar"
            },
            "de-DE": {
              singular: "Bearbeiten"
            },
            "fr-FR": {
              singular: "Modifier"
            },
            "ja-JP": {
              singular: "編集"
            },
            "ko-KR": {
              singular: "편집"
            },
            "pt-BR": {
              singular: "Editar"
            },
            "zh-CN": {
              singular: "编辑"
            }
          }
        })
      });
    },
    _v336 = _v0 => (0, _v1.jsx)(_v63.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3 5a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm13.293 5.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414L18 13.414V19a1 1 0 1 1-2 0v-5.586l-1.293 1.293a1 1 0 0 1-1.414-1.414l3-3ZM3 12a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm0 7a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Z",
        fill: "currentColor"
      })
    }),
    _v337 = {
      opacity: 0,
      _groupHover: {
        opacity: 1
      }
    },
    _v338 = ({
      isSmall: _v0,
      onClick: _v1
    }) => {
      let _v2 = (0, _v201.useIsBokeh)();
      return _v0 ? (0, _v1.jsx)(_v294.Tooltip, {
        label: (0, _v250.translate)({
          singular: "Reorder featured folders",
          dictionary: {
            es: {
              singular: "Reordenar las carpetas destacadas"
            },
            "de-DE": {
              singular: "Besondere Ordner neu anordnen"
            },
            "fr-FR": {
              singular: "Réorganiser les dossiers à la une"
            },
            "ja-JP": {
              singular: "注目のフォルダーを並べ替え"
            },
            "ko-KR": {
              singular: "추천 폴더 재정렬"
            },
            "pt-BR": {
              singular: "Reordenar pastas em destaque"
            },
            "zh-CN": {
              singular: "重新排序精选文件夹"
            }
          }
        }),
        variant: "simple",
        children: (0, _v1.jsx)(_v150.IconButton, {
          icon: (0, _v1.jsx)(_v336, {
            display: "block"
          }),
          size: "sm",
          variant: "secondary",
          "aria-label": (0, _v250.translate)({
            singular: "Reorder featured folders",
            dictionary: {
              es: {
                singular: "Reordenar las carpetas destacadas"
              },
              "de-DE": {
                singular: "Besondere Ordner neu anordnen"
              },
              "fr-FR": {
                singular: "Réorganiser les dossiers à la une"
              },
              "ja-JP": {
                singular: "注目のフォルダーを並べ替え"
              },
              "ko-KR": {
                singular: "추천 폴더 재정렬"
              },
              "pt-BR": {
                singular: "Reordenar pastas em destaque"
              },
              "zh-CN": {
                singular: "重新排序精选文件夹"
              }
            }
          }),
          sx: {
            svg: {
              boxSize: "2xs"
            }
          },
          onClick: _v1
        })
      }) : (0, _v1.jsx)(_v22.Button, {
        height: (0, _v267.rem)(32),
        "aria-label": (0, _v250.translate)({
          singular: "Reorder featured folders",
          dictionary: {
            es: {
              singular: "Reordenar las carpetas destacadas"
            },
            "de-DE": {
              singular: "Besondere Ordner neu anordnen"
            },
            "fr-FR": {
              singular: "Réorganiser les dossiers à la une"
            },
            "ja-JP": {
              singular: "注目のフォルダーを並べ替え"
            },
            "ko-KR": {
              singular: "추천 폴더 재정렬"
            },
            "pt-BR": {
              singular: "Reordenar pastas em destaque"
            },
            "zh-CN": {
              singular: "重新排序精选文件夹"
            }
          }
        }),
        variant: "secondary",
        onClick: _v1,
        sx: {
          svg: {
            boxSize: "2xs"
          },
          ...(_v2 ? _v337 : {})
        },
        leftIcon: (0, _v1.jsx)(_v336, {}),
        children: (0, _v250.translate)({
          singular: "Reorder",
          dictionary: {
            es: {
              singular: "Reordenar"
            },
            "de-DE": {
              singular: "Neu anordnen"
            },
            "fr-FR": {
              singular: "Réorganiser"
            },
            "ja-JP": {
              singular: "並べ替え"
            },
            "ko-KR": {
              singular: "재정렬"
            },
            "pt-BR": {
              singular: "Reordenar"
            },
            "zh-CN": {
              singular: "重新排序"
            }
          }
        })
      });
    },
    _v339 = ({
      width: _v0,
      widgetPlacement: _v1,
      ownerId: _v2,
      featuredFolders: _v3,
      isEmptyState: _v4,
      isLoading: _v5,
      canAddFolders: _v6,
      mutateFolders: _v7
    }) => {
      let _v8,
        _v9,
        _v10,
        _v11,
        _v12,
        _v13,
        _v14,
        _v15,
        _v16,
        _v17 = _v0 < 730,
        [_v18] = (0, _v308.useMediaQuery)("(max-width: 375px)"),
        _v19 = `${_v18 ? 240 : 270}px`,
        _v20 = _v305(_v0),
        _v21 = (0, _v180.useColorModeValue)("text-secondary", "text-primary"),
        {
          openManageFeaturedFoldersModal: _v22
        } = (0, _v316.useManageFeaturedFoldersModal)(),
        {
          openReorderFeaturedFoldersModal: _v23
        } = (0, _v317.useReorderFeaturedFoldersModal)(),
        {
          notifyItemMoveFailure: _v24,
          notifyItemMoveSuccess: _v25
        } = (0, _v319.useNotifications)(),
        {
          sendScrollInWidgetEvent: _v26,
          sendConfigureWidgetEvent: _v27,
          sendClickFolderEvent: _v28
        } = (_v8 = (0, _v42.useViewer)(), _v9 = _v8?.teamUser, _v10 = _v8?.team, _v11 = window.location.pathname, _v12 = () => (0, _v119.buildActionBpContext)({
          action_type: "click",
          feature: null
        }), _v13 = (_v0, _v1) => (0, _v123.buildWebBpContext)({
          page_name: "logged_in_home_page",
          referrer_page_name: null,
          referrer: null,
          path: _v11,
          target: _v0,
          copy: _v1
        }), _v14 = (_v0, _v1, _v2, _v3, _v4) => (0, _v120.buildProductAnalyticsBpContext)({
          product: "general",
          feature: "widgets",
          location: _v0,
          modal_name: _v1,
          flow: _v2,
          element: _v3,
          entity_type: _v4
        }), _v15 = () => (0, _v121.buildTeamBpContextFromTeamUser)(_v9), _v16 = () => (0, _v122.buildThirdPartyIntegrationBpContext)({
          is_integration: !1,
          integration_id: null,
          integration_name: null,
          is_partner: !1
        }), {
          sendScrollInWidgetEvent: _v0 => {
            (0, _v124.sendBpEventWithContexts)("vimeo.scroll_in_widget", {
              ..._v12(),
              ..._v13(null, "forward" === _v0 ? ">" : "<"),
              ..._v14("featured_folders_widget", null, _v0, "scroll", "widget"),
              ..._v15(),
              ..._v16()
            }, 3, {
              widget_placement: _v1,
              widget_name: _v321,
              is_dismissable: !1,
              is_dynamic_recommendations_widget: !1,
              is_empty_state: _v4
            });
          },
          sendConfigureWidgetEvent: (_v0, _v1) => {
            (0, _v124.sendBpEventWithContexts)("vimeo.configure_widget", {
              ..._v12(),
              ..._v13("featured_folders_modal", _v0),
              ..._v14("featured_folders_widget", _v1 ?? null, null, "button", "widget"),
              ..._v15(),
              ..._v16()
            }, 3, {
              widget_placement: _v1,
              widget_name: _v321,
              is_dismissable: !1,
              is_dynamic_recommendations_widget: !1,
              is_empty_state: _v4
            });
          },
          sendClickFolderEvent: _v0 => {
            let _v1 = _v0.metadata?.connections?.parentFolder?.uri;
            _v4.BigPictureClient.sendEvent(new _v4.Event("vimeo.click_folder_title", 2, {
              actor_resource_role: null,
              actor_team_role: _v9?.plainTextPermissionLevel ?? "Owner",
              entry_page: null,
              folder_id: String((0, _v165.getFolderIdFromFolderUri)(_v0.uri)),
              folder_share_status: null,
              is_pinned: _v0.isPinned,
              is_private_to_me: _v0.isPrivateToUser,
              is_subfolder: !!_v1,
              location: "featured_folders_widget",
              page: "logged_in_home_page",
              parent_folder_id: _v1 ? String((0, _v165.getFolderIdFromFolderUri)(_v1)) : null,
              path: _v11,
              position_row: null,
              product: "general",
              team_owner_id: String((0, _v165.getUserIdFromFolderUri)(_v0.uri)),
              team_size: _v10?.currentTeamSize ?? null,
              team_subscription_type: _v0.user.membership?.type
            }));
          }
        }),
        {
          contentSpaceEnabled: _v29
        } = (0, _v78.useContentSpaceEnabled)(_v2),
        _v30 = _v29 ? (0, _v250.translate)({
          singular: "Team library",
          dictionary: {
            es: {
              singular: "Biblioteca del equipo"
            },
            "de-DE": {
              singular: "Teambibliothek"
            },
            "fr-FR": {
              singular: "Bibliothèque de l'équipe"
            },
            "ja-JP": {
              singular: "チームライブラリ"
            },
            "ko-KR": {
              singular: "팀 라이브러리"
            },
            "pt-BR": {
              singular: "Biblioteca da equipe"
            },
            "zh-CN": {
              singular: "团队视频库"
            }
          }
        }) : (0, _v250.translate)({
          singular: "Library",
          dictionary: {
            es: {
              singular: "Biblioteca"
            },
            "de-DE": {
              singular: "Bibliothek"
            },
            "fr-FR": {
              singular: "Bibliothèque"
            },
            "ja-JP": {
              singular: "ライブラリ"
            },
            "ko-KR": {
              singular: "라이브러리"
            },
            "pt-BR": {
              singular: "Biblioteca"
            },
            "zh-CN": {
              singular: "视频库"
            }
          }
        }),
        _v31 = (_v0, _v1) => {
          _v7?.(), _v25(_v1[0].name, {
            label: "root" === _v0 ? _v30 : _v0.name,
            link: "root" === _v0 ? "/library" : (0, _v165.getFolderPageUriFromApiUri)(_v0.uri)
          });
        },
        _v32 = (_v0, _v1) => {
          _v24(_v1[0].name, "root" === _v0 ? _v30 : _v0.name);
        },
        _v33 = ({
          name: _v0,
          settings: {
            color: _v1
          },
          uri: _v2
        }) => {
          _v7?.(_v0 => _v0 ? {
            ..._v0,
            data: _v0.data.map(_v0 => _v0.uri === _v2 ? {
              ..._v0,
              name: _v0,
              settings: {
                ..._v0.settings,
                color: _v1
              }
            } : _v0)
          } : void 0);
        },
        _v34 = () => {
          _v7?.();
        },
        _v35 = () => {
          _v27("update", "featured_folders_modal");
        },
        _v36 = _v0 => {
          _v27(_v0, "featured_folders_modal");
        },
        _v37 = () => {
          _v7?.();
        },
        _v38 = (0, _v201.useIsBokeh)(),
        {
          capabilities: {
            hasEnhancedFeaturedFolderCard: _v39
          },
          loading: _v40
        } = (0, _v6.useCapability)(["hasEnhancedFeaturedFolderCard"], _v2),
        _v41 = !!((0, _v185.shouldShowInDevelopmentFeature)("enhanced-folder-card", !0) || _v39);
      return (0, _v1.jsx)(_v244, {
        ...(_v4 && {
          height: _v20.height
        }),
        children: _v4 ? (0, _v1.jsx)(_v254, {
          heading: (0, _v250.translate)({
            singular: "Add featured folders",
            dictionary: {
              es: {
                singular: "Agrege carpetas destacadas"
              },
              "de-DE": {
                singular: "Ausgewählte Ordner hinzufügen"
              },
              "fr-FR": {
                singular: "Ajouter des dossiers à la une"
              },
              "ja-JP": {
                singular: "注目のフォルダーを追加"
              },
              "ko-KR": {
                singular: "추천 폴더 추가"
              },
              "pt-BR": {
                singular: "Adicionar pastas em destaque"
              },
              "zh-CN": {
                singular: "添加精选文件夹"
              }
            }
          }),
          subheading: (0, _v250.translate)({
            singular: "Help your team find what's important",
            dictionary: {
              es: {
                singular: "Ayude a su equipo a encontrar lo que es importante"
              },
              "de-DE": {
                singular: "Hilf deinem Team dabei, das Wesentliche zu finden"
              },
              "fr-FR": {
                singular: "Aidez votre équipe à trouver l'essentiel"
              },
              "ja-JP": {
                singular: "チームが重要なものを見つけられるように"
              },
              "ko-KR": {
                singular: "팀원들이 중요한 동영상을 바로 찾을 수 있도록 지원하기"
              },
              "pt-BR": {
                singular: "Ajude sua equipe a encontrar o que é importante"
              },
              "zh-CN": {
                singular: "帮助您的团队找到重要内容"
              }
            }
          }),
          btnText: (0, _v250.translate)({
            singular: "Select folders",
            dictionary: {
              es: {
                singular: "Seleccionar carpetas"
              },
              "de-DE": {
                singular: "Ordner auswählen"
              },
              "fr-FR": {
                singular: "Sélectionner des dossiers"
              },
              "ja-JP": {
                singular: "フォルダーを選択"
              },
              "ko-KR": {
                singular: "폴더 선택"
              },
              "pt-BR": {
                singular: "Selecionar pastas"
              },
              "zh-CN": {
                singular: "选择文件夹"
              }
            }
          }),
          icon: (0, _v1.jsx)(_v309.FolderOpen, {
            width: "lg",
            height: "lg",
            mb: "3",
            color: _v21
          }),
          onBtnClick: () => {
            _v27("manage"), _v22({
              ownerId: _v2,
              onUpdateClick: _v35,
              onDismissClick: _v36,
              onUpdateSuccess: _v37
            });
          }
        }) : (0, _v1.jsx)(_v311.Playlist, {
          w: "100%",
          gap: _v38 || _v41 ? ".5rem" : void 0,
          children: _v5 || _v40 ? (0, _v1.jsx)(_v315.CarouselSkeleton, {
            cardWidth: _v19,
            isLeadingIcon: !1
          }) : (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v312.PlaylistHeader, {
              header: {
                text: (0, _v250.translate)({
                  singular: "Featured folders",
                  dictionary: {
                    es: {
                      singular: "Carpetas destacadas"
                    },
                    "de-DE": {
                      singular: "Ausgewählte Ordner"
                    },
                    "fr-FR": {
                      singular: "Dossiers à la une"
                    },
                    "ja-JP": {
                      singular: "注目のフォルダー"
                    },
                    "ko-KR": {
                      singular: "추천 폴더"
                    },
                    "pt-BR": {
                      singular: "Pastas em destaque"
                    },
                    "zh-CN": {
                      singular: "精选文件夹"
                    }
                  }
                })
              },
              "data-id": "featured_folders_widget_header",
              "data-group": !0,
              ...(_v38 && {
                sx: {
                  pt: 0
                }
              }),
              children: (0, _v1.jsxs)(_v278.HStack, {
                gap: "100",
                children: [_v6 && _v38 && (0, _v1.jsx)(_v338, {
                  isSmall: _v17,
                  onClick: () => {
                    _v23({
                      featuredFolders: _v3,
                      ownerId: _v2,
                      mutateFolders: _v7
                    });
                  }
                }), _v6 && (0, _v1.jsx)(_v335, {
                  isSmall: _v17,
                  onClick: () => {
                    _v27("manage"), _v22({
                      featuredFolders: _v3,
                      ownerId: _v2,
                      onUpdateClick: _v35,
                      onDismissClick: _v36,
                      onUpdateSuccess: _v37
                    });
                  }
                }), (0, _v1.jsx)(_v314.PlaylistCarouselNavigation, {
                  onPrevClick: () => _v26("backward"),
                  onNextClick: () => _v26("forward")
                })]
              })
            }), (0, _v1.jsx)(_v313.Carousel, {
              children: _v3.map(_v0 => (0, _v1.jsx)(_v331, {
                folder: _v0,
                minWidth: _v19,
                width: _v19,
                onClick: () => _v28(_v0),
                ownerId: _v2,
                showEnhancedFolderCard: _v41,
                menu: (0, _v1.jsx)(_v318.FolderMenu, {
                  placement: "right-start",
                  folder: _v0,
                  onMoveSuccess: _v31,
                  onMoveFailure: _v32,
                  onSettingsChange: _v33,
                  onDelete: () => {
                    var _v0;
                    return _v0 = _v0.uri, void _v7?.(_v0 => _v0 ? {
                      ..._v0,
                      data: _v0.data.filter(_v0 => _v0.uri !== _v0)
                    } : void 0);
                  },
                  onSlackIntegrationComplete: _v34,
                  analytics: {
                    product: "Workflow",
                    feature: "wayfinder_home",
                    location: "featured_folders_folder_card"
                  }
                })
              }, _v0.uri))
            })]
          })
        })
      });
    };
  var _v340 = _v0.i(0),
    _v341 = _v0.i(0);
  let _v342 = "https://i.vimeocdn.com/video/default-2308240_295x166.jpg",
    _v343 = ["uri", "name", "pictures.sizes"];
  var _v344 = _v0.i(0),
    _v345 = _v0.i(0),
    _v346 = _v0.i(0);
  let _v347 = "watch_history_widget",
    _v348 = "watch_history",
    _v349 = "community",
    _v350 = "logged_in_home_page",
    _v351 = _v0 => ({
      ...(0, _v123.buildWebBpContext)({
        page_name: _v350,
        path: window.location.pathname,
        referrer: document.referrer,
        referrer_page_name: null,
        target: null,
        target_path: null
      }),
      ...(0, _v121.buildTeamBpContextFromTeamUser)(_v0),
      ...(0, _v122.buildThirdPartyIntegrationBpContext)({
        is_partner: !1,
        integration_id: null,
        integration_name: null
      })
    }),
    _v352 = ({
      copy: _v0,
      notificationCopy: _v1,
      teamUser: _v2
    }) => {
      let _v3 = (0, _v119.buildActionBpContext)({
          action_type: "click",
          feature: null
        }),
        _v4 = (0, _v120.buildProductAnalyticsBpContext)({
          product: _v349,
          feature: _v348,
          location: _v347,
          element: "widget",
          entity_type: null,
          copy: _v0,
          device_type: (0, _v197.default)()
        }),
        _v5 = {
          ..._v3,
          ..._v4,
          ..._v351(_v2)
        };
      (0, _v124.sendBpEventWithContexts)("vimeo.notification_action", _v5, 3, {
        notification_name: "clear_watch_history_notification",
        notification_copy: _v1,
        checkbox_copy: null,
        error_id: null,
        error_name: null,
        is_marked_checkbox: null
      });
    },
    _v353 = ({
      isSmall: _v0,
      onClick: _v1
    }) => {
      let _v2 = (0, _v42.useViewer)(),
        _v3 = () => {
          (({
            teamUser: _v0
          }) => {
            let _v1 = (0, _v119.buildActionBpContext)({
                action_type: "click",
                feature: null
              }),
              _v2 = (0, _v120.buildProductAnalyticsBpContext)({
                product: _v349,
                feature: _v348,
                location: _v347,
                element: "button",
                entity_type: null,
                copy: "clear all history",
                device_type: (0, _v197.default)()
              }),
              _v3 = {
                ..._v1,
                ..._v2,
                ..._v351(_v0)
              };
            (0, _v124.sendBpEventWithContexts)("vimeo.clear_watch_history", _v3, 3, {
              widget_name: _v347,
              widget_placement: 1,
              is_dismissable: !1,
              is_dynamic_recommendations_widget: !1,
              is_empty_state: !1
            });
          })({
            teamUser: _v2?.teamUser
          }), _v1();
        };
      return _v0 ? (0, _v1.jsx)(_v294.Tooltip, {
        label: (0, _v32.translate)({
          singular: "Clear watch history",
          dictionary: {
            es: {
              singular: "Borrar el historial de visualización"
            },
            "de-DE": {
              singular: "Wiedergabeverlauf löschen"
            },
            "fr-FR": {
              singular: "Effacer l'historique de visionnage"
            },
            "ja-JP": {
              singular: "視聴履歴を消去"
            },
            "ko-KR": {
              singular: "시청 기록 삭제"
            },
            "pt-BR": {
              singular: "Limpar histórico de visualizações"
            },
            "zh-CN": {
              singular: "清除观看记录"
            }
          }
        }),
        variant: "simple",
        children: (0, _v1.jsx)(_v150.IconButton, {
          "aria-label": (0, _v32.translate)({
            singular: "Clear watch history",
            dictionary: {
              es: {
                singular: "Borrar el historial de visualización"
              },
              "de-DE": {
                singular: "Wiedergabeverlauf löschen"
              },
              "fr-FR": {
                singular: "Effacer l'historique de visionnage"
              },
              "ja-JP": {
                singular: "視聴履歴を消去"
              },
              "ko-KR": {
                singular: "시청 기록 삭제"
              },
              "pt-BR": {
                singular: "Limpar histórico de visualizações"
              },
              "zh-CN": {
                singular: "清除观看记录"
              }
            }
          }),
          icon: (0, _v1.jsx)(_v346.MinusCircle, {}),
          onClick: _v3,
          size: "sm",
          variant: "secondary"
        })
      }) : (0, _v1.jsx)(_v22.Button, {
        "aria-label": (0, _v32.translate)({
          singular: "Clear watch history",
          dictionary: {
            es: {
              singular: "Borrar el historial de visualización"
            },
            "de-DE": {
              singular: "Wiedergabeverlauf löschen"
            },
            "fr-FR": {
              singular: "Effacer l'historique de visionnage"
            },
            "ja-JP": {
              singular: "視聴履歴を消去"
            },
            "ko-KR": {
              singular: "시청 기록 삭제"
            },
            "pt-BR": {
              singular: "Limpar histórico de visualizações"
            },
            "zh-CN": {
              singular: "清除观看记录"
            }
          }
        }),
        height: 32,
        onClick: _v3,
        variant: "secondary",
        sx: {
          opacity: 0,
          _groupHover: {
            opacity: 1
          }
        },
        children: (0, _v32.translate)({
          singular: "Clear watch history",
          dictionary: {
            es: {
              singular: "Borrar el historial de visualización"
            },
            "de-DE": {
              singular: "Wiedergabeverlauf löschen"
            },
            "fr-FR": {
              singular: "Effacer l'historique de visionnage"
            },
            "ja-JP": {
              singular: "視聴履歴を消去"
            },
            "ko-KR": {
              singular: "시청 기록 삭제"
            },
            "pt-BR": {
              singular: "Limpar histórico de visualizações"
            },
            "zh-CN": {
              singular: "清除观看记录"
            }
          }
        })
      });
    },
    _v354 = {
      CLEAR_HISTORY: (0, _v32.translate)({
        singular: "Clear history",
        dictionary: {
          es: {
            singular: "Borrar el historial"
          },
          "de-DE": {
            singular: "Verlauf löschen"
          },
          "fr-FR": {
            singular: "Effacer l'historique"
          },
          "ja-JP": {
            singular: "履歴を消去"
          },
          "ko-KR": {
            singular: "기록 삭제"
          },
          "pt-BR": {
            singular: "Limpar histórico"
          },
          "zh-CN": {
            singular: "清除历史记录"
          }
        }
      }),
      CLEAR_WATCH_HISTORY: (0, _v32.translate)({
        singular: "You're about to clear your previously watched and in-progress videos across apps or devices where you're logged in",
        dictionary: {
          es: {
            singular: "Está a punto de borrar los videos que ha visto anteriormente y que están en curso en las aplicaciones o los dispositivos en los que ha iniciado sesión."
          },
          "de-DE": {
            singular: "Sie sind im Begriff, Ihre zuvor angesehenen und laufenden Videos in allen Apps oder auf allen Geräten, auf denen Sie angemeldet sind, zu löschen."
          },
          "fr-FR": {
            singular: "Vous êtes sur le point d’effacer vos vidéos précédemment regardées et en cours sur les applications ou appareils où vous êtes connecté"
          },
          "ja-JP": {
            singular: "ログイン中のすべてのアプリやデバイスから、視聴済みの動画と視聴中の動画を消去しようとしています。"
          },
          "ko-KR": {
            singular: "로그인한 앱이나 기기에서 시청 완료 및 시청 중이던 동영상을 모두 삭제하려고 합니다."
          },
          "pt-BR": {
            singular: "Você está prestes a limpar os vídeos assistidos e em andamento nos aplicativos ou dispositivos conectados"
          },
          "zh-CN": {
            singular: "您即将清除在所有登录的应用程序或设备上您之前观看过的和正在播放的视频"
          }
        }
      }),
      CLEAR_WATCH_HISTORY_HEADER: (0, _v32.translate)({
        singular: "Clear watch history",
        dictionary: {
          es: {
            singular: "Borrar el historial de visualización"
          },
          "de-DE": {
            singular: "Wiedergabeverlauf löschen"
          },
          "fr-FR": {
            singular: "Effacer l'historique de visionnage"
          },
          "ja-JP": {
            singular: "視聴履歴を消去"
          },
          "ko-KR": {
            singular: "시청 기록 삭제"
          },
          "pt-BR": {
            singular: "Limpar histórico de visualizações"
          },
          "zh-CN": {
            singular: "清除观看记录"
          }
        }
      }),
      CANCEL_CLEAR_WATCH_HISTORY: (0, _v32.translate)({
        singular: "Cancel",
        dictionary: {
          es: {
            singular: "Cancelar"
          },
          "de-DE": {
            singular: "Abbrechen"
          },
          "fr-FR": {
            singular: "Annuler"
          },
          "ja-JP": {
            singular: "キャンセル"
          },
          "ko-KR": {
            singular: "취소"
          },
          "pt-BR": {
            singular: "Cancelar"
          },
          "zh-CN": {
            singular: "取消"
          }
        }
      }),
      EMPTY_WATCH_HISTORY: (0, _v32.translate)({
        singular: "Videos you watch appear here",
        dictionary: {
          es: {
            singular: "Los videos que usted ve aparecen aquí"
          },
          "de-DE": {
            singular: "Von Ihnen angesehene Videos werden hier angezeigt"
          },
          "fr-FR": {
            singular: "Les vidéos que vous regardez apparaissent ici"
          },
          "ja-JP": {
            singular: "視聴した動画がここに表示されます"
          },
          "ko-KR": {
            singular: "시청한 동영상이 여기에 표시됩니다."
          },
          "pt-BR": {
            singular: "Os vídeos que você assiste aparecem aqui"
          },
          "zh-CN": {
            singular: "您观看的视频会出现在此处"
          }
        }
      }),
      WATCH_HISTORY: (0, _v32.translate)({
        singular: "Watch history",
        dictionary: {
          es: {
            singular: "Historial de visualizaciones"
          },
          "de-DE": {
            singular: "Verlauf ansehen"
          },
          "fr-FR": {
            singular: "Historique des vidéos regardées"
          },
          "ja-JP": {
            singular: "視聴履歴"
          },
          "ko-KR": {
            singular: "시청 기록"
          },
          "pt-BR": {
            singular: "Histórico de visualizações"
          },
          "zh-CN": {
            singular: "观看记录"
          }
        }
      })
    };
  var _v355 = _v0.i(0);
  let _v356 = (_v0, _v1 = "en-US") => new Date(_v0).toLocaleDateString(_v1, {
      month: "long",
      day: "numeric",
      year: "numeric"
    }),
    _v357 = _v0 => _v0 ? parseInt(_v0.split("/")[2], 10) : 0,
    _v358 = _v0 => _v0.replace("users", "user").replace("projects", "folder");
  var _v359 = _v0.i(0),
    _v360 = _v0.i(0),
    _v361 = _v0.i(0),
    _v362 = _v0.i(0),
    _v363 = _v0.i(0),
    _v364 = _v0.i(0);
  let _v365 = ({
      actionType: _v0,
      copy: _v1,
      feature: _v2,
      element: _v3,
      eventName: _v4,
      additionalFields: _v5,
      version: _v6,
      product: _v7,
      viewType: _v8,
      flow: _v9,
      entityType: _v10,
      teamUser: _v11,
      location: _v12,
      videoId: _v13,
      videoOwnerId: _v14,
      target: _v15,
      targetPath: _v16
    }) => {
      let _v17 = _v8 ? (0, _v198.buildViewBpContext)({
          view_type: _v8 || "impression",
          feature: null
        }) : (0, _v119.buildActionBpContext)({
          action_type: _v0 || "click",
          feature: null
        }),
        _v18 = _v13 ? (0, _v286.buildVideoBpContext)({
          video_id: _v13,
          video_owner_id: _v14
        }) : null,
        _v19 = {
          ..._v17,
          ...(0, _v123.buildWebBpContext)({
            page_name: "logged_in_home_page",
            referrer_page_name: null,
            referrer: document.referrer,
            path: window.location.pathname,
            target: _v15 ?? null,
            target_path: _v16 ?? null,
            copy: _v1
          }),
          ...(0, _v120.buildProductAnalyticsBpContext)({
            product: _v7 || "general",
            feature: _v2,
            location: _v12,
            modal_name: null,
            flow: _v9 || null,
            element: _v3,
            entity_type: _v10 || null,
            copy: _v1
          }),
          ...(0, _v121.buildTeamBpContextFromTeamUser)(_v11),
          ...(0, _v122.buildThirdPartyIntegrationBpContext)({
            is_partner: !1,
            integration_id: null,
            integration_name: null
          }),
          ..._v18
        };
      (0, _v124.sendBpEventWithContexts)(_v4, _v19, _v6, {
        ..._v5
      });
    },
    _v366 = ({
      video: _v0,
      dataId: _v1,
      subtitle: _v2,
      viewer: _v3,
      bpLocation: _v4,
      actionsMenu: _v5,
      hoverActions: _v6,
      onClick: _v7,
      paywallTrigger: _v8,
      progress: _v9 = 0,
      showPrivacyBadge: _v10 = !1
    }) => {
      let _v11 = (0, _v362.useStorageLimitLockedVideoPaywall)(),
        {
          thumbnailSrc: _v12
        } = (_v0 => {
          let _v1 = _v0.split("/").pop(),
            {
              uploads: _v2
            } = (0, _v226.useUploader)(),
            _v3 = (0, _v3.useMemo)(() => _v2.find(_v0 => _v0.clipId === _v1), [_v2, _v1]);
          return {
            thumbnailSrc: _v3?.thumbnailLink,
            clipUpload: _v3
          };
        })(_v0.uri),
        {
          trackVideoPrivacyBadgeClicked: _v13
        } = (0, _v360.useVideoPrivacyBadgeTracking)(),
        _v14 = (0, _v364.useVideoPrivacyBadgeHandlers)({
          surface: "card",
          pageSurface: "homepage"
        }),
        _v15 = _v10 ? _v14(_v0) : void 0,
        _v16 = (0, _v3.useMemo)(() => _v0.badge?.type && ["staffpick", "staffpick-premiere", "staffpick-best-of-the-year", "staffpick-best-of-the-month"].includes(_v0.badge.type), [_v0.badge?.type]),
        _v17 = _v5 ? "12rem" : "14rem",
        _v18 = !!_v0.isColdStorage,
        _v19 = _v8 ?? `cold_storage_${_v4.replace(/_widget$/, "")}_locked_video_click`,
        _v20 = _v18 ? () => _v11({
          location: _v4,
          paywallTrigger: _v19,
          upsellName: "locked_video_click"
        }) : void 0,
        _v21 = _v18 && _v20 ? () => {
          _v13({
            videoId: String(_v357(_v0.uri)),
            badgeVariant: "card",
            surface: "homepage"
          }), _v20();
        } : _v15?.onPrivacyBadgeClick;
      return (0, _v1.jsx)(_v363.VideoCard, {
        title: _v0.name,
        subtitle: _v2,
        creator: {
          name: _v0.user.name
        },
        href: _v0.manageLink ?? _v0.link,
        thumbnailSrc: _v12 || _v0.pictures?.sizes[0].link || "https://i.vimeocdn.com/video/default-2308240_295x166.jpg",
        avatarSrc: _v0.user.pictures?.sizes[0].link || "",
        avatarName: _v0.user.name,
        tagText: (0, _v359.secondsToDisplay)(_v0.duration),
        clipId: _v357(_v0.uri),
        configUrl: _v0.configUrl ?? "",
        hoverActions: _v6 || (0, _v1.jsx)(_v328.HoverActions, {
          entity: _v0,
          type: "video"
        }),
        isColdStorage: _v0.isColdStorage,
        videoPrivacy: _v15?.videoPrivacy,
        privacyBadgeVariant: _v15?.variant,
        privacyBadgeTooltip: _v15?.tooltipLabel,
        onPrivacyBadgeClick: _v21,
        "data-id": _v1,
        titleStyles: {
          width: _v17
        },
        progress: _v9,
        onClick: _v0 => {
          _v365({
            actionType: "click",
            copy: _v0.name,
            element: "thumbnail",
            feature: "widgets",
            eventName: "vimeo.open_video",
            teamUser: _v3?.teamUser,
            location: _v4,
            entityType: "video",
            videoId: _v357(_v0.uri),
            videoOwnerId: _v357(_v0.user?.uri)
          }), _v7 && _v7(_v0);
        },
        lockedTooltipLabel: _v18 ? _v362.STORAGE_LIMIT_LOCKED_VIDEO_TOOLTIP_LABEL : void 0,
        onLockedClick: _v20,
        ...(_v5 && {
          actionsMenu: _v5
        }),
        ...(_v16 && {
          topLeftDecoration: (0, _v1.jsx)(_v361.StaffPickBadge, {})
        })
      });
    };
  async function _v367({
    baseUrl: _v0,
    where: {
      videoId: _v1
    },
    ..._v2
  }) {
    return (0, _v133.measureLatency)("deleteVideoWatchHistory", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/videos/${_v1}/watch_history`, {
        ..._v2,
        method: "DELETE"
      });
      if (!_v0.ok) throw new _v134.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v134.deepCamelCase)(_v1);
    });
  }
  function _v368() {
    let {
        mutate: _v0
      } = (0, _v136.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v139.useGctlConfig)(),
      [_v5, _v6] = (0, _v137.useInternalState)();
    return [(0, _v3.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/videos/${_v0.where.videoId}/watch_history${(0, _v137.serializeQuery)(_v0)}`, _v367({
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
  "true" === _v132.default.env.STORYBOOK && (0, _v137.assignMswData)(_v368, {
    endpoint: "/videos/:videoId/watch_history",
    method: "DELETE"
  });
  var _v369 = _v0.i(0),
    _v370 = _v0.i(0),
    _v371 = _v0.i(0),
    _v372 = _v0.i(0);
  let _v373 = ["video.badge.type", "video.configUrl", "video.createdTime", "video.customMetadata", "video.duration", "video.isColdPrivacyRestricted", "video.isColdStorage", "video.link", "video.manageLink", "video.metadata.interactions.edit", "video.name", "video.password", "video.pictures.sizes.link", "video.privacy.view", "video.privacy.originalView", "video.stats.plays", "video.uri", "video.user.name", "video.user.pictures.sizes.link", "video.user.uri"];
  function _v374() {
    let _v0 = (0, _v42.useViewer)(),
      _v1 = _v0?.user?.id,
      {
        isOrionLoading: _v2,
        queryParam: _v3
      } = (0, _v372.useAnalyticsFreshness)(),
      {
        data: _v4,
        isLoading: _v5,
        mutate: _v6
      } = (0, _v371.useGetVideosWatchHistory)(() => _v2 || !_v1 ? null : {
        select: ["lastWatchedTimeCode", "lastWatchedTimestamp", ..._v373],
        query: {
          perPage: 50,
          sizes: ["270x152", "300x169"],
          ..._v3
        }
      }, {
        revalidateOnFocus: !1,
        errorRetryInterval: 0,
        errorRetryCount: 1
      });
    return {
      isLoading: _v5,
      mutate: _v6,
      watchHistoryVideos: (0, _v3.useMemo)(() => _v4?.data ? _v4.data.filter(_v0 => !_v0.video.isColdStorage).map(_v0 => ({
        ..._v0.video,
        lastWatchedTimeCode: _v0.lastWatchedTimeCode,
        lastWatchedTimestamp: _v0.lastWatchedTimestamp
      })) : [], [_v4])
    };
  }
  let _v375 = ({
    setIsRemovingVideo: _v0,
    video: _v1
  }) => {
    let _v2 = (0, _v3.useRef)(0),
      [_v3, {
        called: _v4,
        callCount: _v5,
        error: _v6,
        loading: _v7
      }] = _v368(),
      {
        mutate: _v8
      } = _v374(),
      _v9 = (0, _v319.useNotification)(),
      _v10 = (0, _v42.useViewer)(),
      _v11 = (0, _v370.useCopyVideoLink)({
        video: _v1,
        surface: "ellipsis_menu",
        analyticsElement: "ellipses",
        manageActionLocation: "VL_grid_view_overflow"
      }),
      _v12 = /http/.test(_v1?.link) ? _v1?.link : `${_v10?.vimeoHttpsUrl}${_v1?.link}`;
    return (0, _v3.useEffect)(() => {
      !_v4 || _v7 || _v2.current !== _v5 && (_v2.current += 1, _v6 ? (_v9({
        content: (0, _v32.translate)({
          singular: "Error removing video",
          dictionary: {
            es: {
              singular: "Error al eliminar el video"
            },
            "de-DE": {
              singular: "Fehler beim Entfernen des Videos"
            },
            "fr-FR": {
              singular: "Erreur lors de la suppression de la vidéo"
            },
            "ja-JP": {
              singular: "動画の削除中にエラーが発生しました"
            },
            "ko-KR": {
              singular: "동영상을 제거하는 중 오류 발생"
            },
            "pt-BR": {
              singular: "Erro ao remover o vídeo"
            },
            "zh-CN": {
              singular: "删除视频时出错"
            }
          }
        }),
        status: "failure"
      }), _v0(!1)) : (_v0(!0), _v9({
        content: (0, _v32.translate)({
          singular: "Video removed from history",
          dictionary: {
            es: {
              singular: "Video eliminado del historial"
            },
            "de-DE": {
              singular: "Video aus dem Verlauf entfernt"
            },
            "fr-FR": {
              singular: "Vidéo supprimée de l'historique"
            },
            "ja-JP": {
              singular: "動画が履歴から削除されました"
            },
            "ko-KR": {
              singular: "동영상이 기록에서 삭제되었습니다."
            },
            "pt-BR": {
              singular: "Vídeo removido do histórico"
            },
            "zh-CN": {
              singular: "视频已从历史记录中删除"
            }
          }
        }),
        status: "success"
      }), _v8().then(() => {
        _v0(!1);
      })));
    }, [_v4, _v5, _v6, _v7, _v8, _v9, _v0]), (0, _v1.jsx)(_v1.Fragment, {
      children: (0, _v1.jsx)(_v369.VideoMenu, {
        canDelete: !0,
        canShare: !1,
        canStar: !1,
        deleteIcon: (0, _v1.jsx)(_v346.MinusCircle, {}),
        deleteOptionLabel: (0, _v32.translate)({
          singular: "Remove from history",
          dictionary: {
            es: {
              singular: "Eliminar del historial"
            },
            "de-DE": {
              singular: "Aus dem Verlauf entfernen"
            },
            "fr-FR": {
              singular: "Supprimer de l'historique"
            },
            "ja-JP": {
              singular: "履歴から削除"
            },
            "ko-KR": {
              singular: "기록에서 제거"
            },
            "pt-BR": {
              singular: "Remover do histórico"
            },
            "zh-CN": {
              singular: "从历史中移除"
            }
          }
        }),
        onClick: () => {
          (({
            videoId: _v0,
            teamUser: _v1
          }) => {
            _v4.BigPictureClient.sendEvent(new _v4.Event("vimeo.click_video_card_menu", 3, {
              location: _v347,
              product: _v349,
              page: _v350,
              entry_page: _v350,
              path: window.location.pathname,
              video_id: _v0.toString(),
              team_owner_id: _v1?.ownerId?.toString() ?? null,
              video_privacy: null,
              is_preset_applied: null,
              is_video_password_protected: null,
              video_app_id: null,
              video_embed_privacy: null,
              video_type: null,
              team_size: null,
              team_subscription_type: null,
              actor_team_role: null,
              actor_resource_role: null,
              position_row: null,
              position_column: null,
              target: "actions menu"
            }));
          })({
            videoId: _v357(_v1.uri),
            teamUser: _v10?.teamUser
          });
        },
        onCopyLinkAsync: _v11,
        onDelete: () => {
          let _v0 = _v357(_v1.uri);
          (({
            videoId: _v0,
            videoOwnerId: _v1,
            teamUser: _v2
          }) => {
            let _v3 = (0, _v119.buildActionBpContext)({
                action_type: "click",
                feature: null
              }),
              _v4 = (0, _v120.buildProductAnalyticsBpContext)({
                product: _v349,
                feature: _v348,
                location: _v347,
                element: "icon",
                entity_type: "video",
                copy: "remove from history",
                device_type: (0, _v197.default)()
              }),
              _v5 = (0, _v286.buildVideoBpContext)({
                video_id: _v0,
                video_owner_id: _v1
              }),
              _v6 = {
                ..._v3,
                ..._v4,
                ..._v5,
                ..._v351(_v2)
              };
            (0, _v124.sendBpEventWithContexts)("vimeo.remove_from_watch_history", _v6, -1, {});
          })({
            videoId: _v0,
            videoOwnerId: _v1.user?.uri ? _v357(_v1.user.uri) : null,
            teamUser: _v10?.teamUser
          }), _v3({
            where: {
              videoId: _v0
            }
          });
        },
        placement: "right-start",
        videoLink: _v12
      })
    });
  };
  var _v376 = _v0.i(0),
    _v377 = _v0.i(0);
  let _v378 = ({
      video: _v0
    }) => {
      let _v1 = (0, _v370.useCopyVideoLink)({
        video: _v0,
        surface: "hover_icon",
        analyticsElement: "icon",
        manageActionLocation: "VL_folder_card_hover"
      });
      return (0, _v1.jsxs)(_v325.ContentCard.HoverActions, {
        children: [(0, _v1.jsx)(_v325.ContentCard.HoverAction, {
          children: (0, _v1.jsx)(_v377.ShareAction, {
            video: _v0
          })
        }), (0, _v1.jsx)(_v325.ContentCard.HoverAction, {
          children: (0, _v1.jsx)(_v294.Tooltip, {
            label: (0, _v32.translate)({
              singular: "Copy link",
              dictionary: {
                es: {
                  singular: "Copiar vínculo"
                },
                "de-DE": {
                  singular: "Link kopieren"
                },
                "fr-FR": {
                  singular: "Copier le lien"
                },
                "ja-JP": {
                  singular: "リンクをコピー"
                },
                "ko-KR": {
                  singular: "링크 복사"
                },
                "pt-BR": {
                  singular: "Copiar link"
                },
                "zh-CN": {
                  singular: "复制链接"
                }
              }
            }),
            placement: "top",
            children: (0, _v1.jsx)(_v150.IconButton, {
              "aria-label": (0, _v32.translate)({
                singular: "Copy link",
                dictionary: {
                  es: {
                    singular: "Copiar vínculo"
                  },
                  "de-DE": {
                    singular: "Link kopieren"
                  },
                  "fr-FR": {
                    singular: "Copier le lien"
                  },
                  "ja-JP": {
                    singular: "リンクをコピー"
                  },
                  "ko-KR": {
                    singular: "링크 복사"
                  },
                  "pt-BR": {
                    singular: "Copiar link"
                  },
                  "zh-CN": {
                    singular: "复制链接"
                  }
                }
              }),
              icon: (0, _v1.jsx)(_v376.Link, {}),
              onClick: _v1,
              size: "xs",
              variant: "blur",
              zIndex: 1
            })
          })
        })]
      });
    },
    _v379 = ({
      setIsRemovingVideo: _v0,
      video: _v1,
      position: _v2
    }) => {
      let _v3 = (0, _v42.useViewer)(),
        {
          trackHomepageWatchHistoryVideoClicked: _v4
        } = _v14(),
        _v5 = _v1?.stats?.plays ?? 0,
        _v6 = (0, _v32.translate)({
          singular: "{COUNT} view",
          plural: "{COUNT} views",
          count: Number(_v5),
          replacements: {
            COUNT: (0, _v32.humanize)(_v5)
          },
          dictionary: {
            es: {
              singular: "{COUNT} vista",
              plural: "{COUNT} vistas"
            },
            "de-DE": {
              singular: "{COUNT} Ansicht",
              plural: "{COUNT} Ansichten"
            },
            "fr-FR": {
              singular: "{COUNT} vue",
              plural: "{COUNT} vues"
            },
            "ja-JP": {
              singular: "視聴回数: {COUNT}",
              plural: "視聴回数: {COUNT}"
            },
            "ko-KR": {
              singular: "{COUNT}회",
              plural: "{COUNT}회"
            },
            "pt-BR": {
              singular: "{COUNT} visualização",
              plural: "{COUNT} visualizações"
            },
            "zh-CN": {
              singular: "{COUNT} 观看",
              plural: "{COUNT} 次观看"
            }
          }
        }),
        _v7 = _v356(_v1.createdTime, _v3?.locale),
        _v8 = "";
      _v5 > 0 ? _v8 += `${_v6} • ${_v7}` : _v8 += _v7;
      let {
          switchTeamAndNavigate: _v9
        } = (({
          referrer: _v0,
          timecodeInSeconds: _v1,
          video: _v2
        }) => {
          let _v3 = (0, _v42.useViewer)(),
            _v4 = (({
              referrer: _v0,
              timecodeInSeconds: _v1,
              video: _v2
            }) => {
              let _v3,
                {
                  link: _v4,
                  manageLink: _v5,
                  uri: _v6
                } = _v2,
                _v7 = _v6 ? _v357(_v6) : null,
                _v8 = !1;
              if (_v5 || _v4 || !_v7 ? (_v3 = _v5 ?? _v4, _v8 = !!_v5) : _v3 = `/${_v7}`, _v3 && !_v8 && void 0 !== _v0 && (_v3 += `?ref=${_v0}`), _v3 && void 0 !== _v1 && _v1 > 0) if (!_v8) return `${_v3}#t=${_v1}`;else {
                let _v0 = Math.floor(0 * _v1);
                return `${_v3}?ts=${_v0}`;
              }
              return _v3;
            })({
              referrer: _v0,
              timecodeInSeconds: _v1,
              video: _v2
            });
          return {
            switchTeamAndNavigate: async _v0 => {
              if (_v0 && _v0.preventDefault(), !_v4) return void console.error("No valid navigation URL found for video");
              let _v1 = _v357(_v2.user?.uri),
                _v2 = _v3?.teamUser?.ownerId;
              if (_v1 && _v3?.xsrft && _v1 !== _v2) try {
                let _v0 = await (0, _v355.switchTeam)(_v1, _v3.xsrft);
                200 === _v0.status && _v0.ok && (sessionStorage.setItem("pendingNavigation", _v4), window.location.reload());
              } catch (_v0) {
                console.error("Failed to switch teams:", _v0);
                return;
              }
              window.location.assign(_v4);
            }
          };
        })({
          referrer: "watch_history",
          timecodeInSeconds: _v1.lastWatchedTimeCode,
          video: _v1
        }),
        _v10 = 0;
      _v1.duration && _v1.lastWatchedTimeCode && (_v10 = _v1.lastWatchedTimeCode / _v1.duration * 100);
      let _v11 = _v1.user?.uri ? _v357(_v1.user.uri) : void 0,
        _v12 = null != _v11 && _v11 === (_v3?.teamUser?.ownerId ?? _v3?.user?.id);
      return (0, _v1.jsx)(_v366, {
        actionsMenu: (0, _v1.jsx)(_v375, {
          setIsRemovingVideo: _v0,
          video: _v1
        }),
        bpLocation: "watch_history_widget",
        dataId: "watch-history-video-card",
        hoverActions: (0, _v1.jsx)(_v378, {
          video: _v1
        }),
        onClick: _v0 => {
          _v9(_v0), _v4({
            clipId: String(_v357(_v1.uri)),
            homepageWatchHistoryPosition: _v2
          });
        },
        progress: _v10,
        showPrivacyBadge: _v12,
        subtitle: _v8,
        video: _v1,
        viewer: _v3
      });
    },
    _v380 = ({
      width: _v0
    }) => {
      let [_v1, _v2] = (0, _v3.useState)(!1),
        [_v3, _v4] = (0, _v3.useState)(!1),
        {
          trackHomepageWatchHistoryCarouselNavigated: _v5
        } = _v14(),
        [_v6] = (0, _v308.useMediaQuery)("(max-width: 375)"),
        [_v7] = (0, _v170.usePatchMePreferences)(),
        {
          isLoading: _v8,
          mutate: _v9,
          watchHistoryVideos: _v10
        } = _v374(),
        _v11 = (0, _v42.useViewer)(),
        {
          removeWidget: _v12,
          shouldUseSyntheticHomeWidgets: _v13
        } = _v145(),
        _v14 = Math.round(9 / 16 * 270) + 104,
        _v15 = Math.round(9 / 16 * 240) + 96,
        _v16 = async () => {
          let _v0 = new Date().toISOString();
          _v352({
            copy: "Clear ",
            notificationCopy: "You're about to clear your previously watched and in-progress videos across apps or devices where you're logged in",
            teamUser: _v11?.teamUser
          }), await _v7({
            select: [_v172],
            variables: {
              [_v172]: _v0
            }
          }), _v2(!1), _v9();
        },
        _v17 = _v0 => {
          (({
            flow: _v0,
            teamUser: _v1
          }) => {
            let _v2 = (0, _v119.buildActionBpContext)({
                action_type: "click",
                feature: null
              }),
              _v3 = (0, _v120.buildProductAnalyticsBpContext)({
                product: _v349,
                feature: _v348,
                location: _v347,
                element: "scroll",
                entity_type: "widget",
                copy: null,
                device_type: (0, _v197.default)(),
                flow: _v0
              }),
              _v4 = {
                ..._v2,
                ..._v3,
                ..._v351(_v1)
              };
            (0, _v124.sendBpEventWithContexts)("vimeo.scroll_in_widget", _v4, 3, {
              widget_name: _v347,
              widget_placement: 1,
              is_dismissable: !1,
              is_dynamic_recommendations_widget: !1,
              is_empty_state: !1
            });
          })({
            flow: _v0,
            teamUser: _v11?.teamUser
          }), _v5({
            homepageWatchHistoryDirection: "forward" === _v0 ? "next" : "previous"
          });
        },
        _v18 = _v8 || _v3 || _v10.length > 0;
      return ((0, _v3.useEffect)(() => {
        !_v18 && _v13 && _v12("watch-history");
      }, [_v12, _v13, _v18]), _v8 || _v3) ? (0, _v1.jsx)(_v244, {
        children: (0, _v1.jsx)(_v311.Playlist, {
          w: "100%",
          children: (0, _v1.jsx)(_v315.CarouselSkeleton, {
            cardWidth: `${_v6 ? 240 : 270}px`,
            numOfLines: 3
          })
        })
      }) : 0 === _v10.length ? _v13 ? null : (0, _v1.jsx)(_v244, {
        "data-id": "watch-history-widget",
        children: (0, _v1.jsxs)(_v311.Playlist, {
          gap: "sm",
          w: "100%",
          children: [(0, _v1.jsx)(_v312.PlaylistHeader, {
            "data-group": {
              sx: {
                pt: 0
              }
            },
            header: {
              text: _v354.WATCH_HISTORY
            },
            pt: 0
          }), (0, _v1.jsx)(_v43.Flex, {
            alignItems: "center",
            backgroundColor: "fill-surface",
            borderRadius: "lg",
            justify: "center",
            height: {
              base: `${_v15}px`,
              md: `${_v14}px`
            },
            width: "100%",
            children: (0, _v1.jsxs)(_v253.VStack, {
              gap: "md",
              children: [(0, _v1.jsx)(_v344.History, {
                color: "text-secondary"
              }), (0, _v1.jsx)(_v31.Text, {
                color: "text-secondary",
                fontSize: {
                  base: "md",
                  md: "lg"
                },
                children: _v354.EMPTY_WATCH_HISTORY
              })]
            })
          })]
        })
      }) : (0, _v1.jsxs)(_v244, {
        "data-id": "watch-history-widget",
        children: [(0, _v1.jsxs)(_v311.Playlist, {
          gap: "sm",
          w: "100%",
          children: [(0, _v1.jsx)(_v312.PlaylistHeader, {
            "data-group": {
              sx: {
                pt: 0
              }
            },
            header: {
              text: _v354.WATCH_HISTORY
            },
            pt: 0,
            children: (0, _v1.jsxs)(_v278.HStack, {
              gap: "100",
              children: [(0, _v1.jsx)(_v353, {
                isSmall: _v0 < 730,
                onClick: () => _v2(!0)
              }), (0, _v1.jsx)(_v314.PlaylistCarouselNavigation, {
                nextDataId: "next-button-watch-history",
                onNextClick: () => _v17("forward"),
                onPrevClick: () => _v17("backward"),
                prevDataId: "prev-button-watch-history"
              })]
            })
          }), (0, _v1.jsx)(_v313.Carousel, {
            children: _v10.map((_v0, _v1) => (0, _v1.jsx)(_v379, {
              setIsRemovingVideo: _v4,
              video: _v0,
              position: _v1 + 1
            }, _v0.uri))
          })]
        }), (0, _v1.jsx)(_v345.DeleteModal, {
          bodyContent: _v354.CLEAR_WATCH_HISTORY,
          confirmText: _v354.CLEAR_HISTORY,
          headerContent: _v354.CLEAR_WATCH_HISTORY_HEADER,
          isOpen: _v1,
          onClose: () => {
            _v352({
              copy: "Cancel",
              notificationCopy: "You're about to clear your previously watched and in-progress videos across apps or devices where you're logged in",
              teamUser: _v11?.teamUser
            }), _v2(!1);
          },
          onConfirm: _v16
        })]
      });
    },
    _v381 = ({
      viewData: _v0,
      widgetPlacement: _v1,
      width: _v2
    }) => {
      let _v3 = (0, _v3.useRef)(null),
        _v4 = (0, _v246.useOnScreen)(_v3),
        {
          hasBeenSeen: _v5
        } = (_v0 => {
          let [_v1, _v2] = (0, _v3.useState)(!1),
            _v3 = function (_v0) {
              let [_v1, _v2] = (0, _v3.useState)(!1),
                _v3 = (0, _v3.useRef)(null);
              return (0, _v3.useEffect)(() => (_v3.current || (_v3.current = new IntersectionObserver(([_v0]) => _v2(_v0.isIntersecting))), _v0.current && _v3.current.observe(_v0.current), () => _v3.current?.disconnect()), [_v0]), _v1;
            }(_v0);
          return (0, _v3.useEffect)(() => {
            if (!_v1 && _v3 && _v0.current) {
              let _v0 = _v0.current.getBoundingClientRect();
              _v0.top > 0 && _v0.height > 0 && _v2(!0);
            }
          }, [_v1, _v3, _v0]), {
            hasBeenSeen: _v1
          };
        })(_v3);
      return _v5 ? (0, _v1.jsx)("div", {
        ref: _v3,
        children: (0, _v1.jsx)(_v380, {
          onScreen: _v4,
          viewData: _v0,
          widgetPlacement: _v1,
          width: _v2
        })
      }) : (0, _v1.jsx)("div", {
        ref: _v3,
        style: {
          minHeight: "350px",
          opacity: 0,
          pointerEvents: "none"
        },
        children: (0, _v1.jsx)("span", {
          children: " "
        })
      });
    };
  var _v382 = _v0.i(0),
    _v383 = _v0.i(0),
    _v384 = _v0.i(0),
    _v385 = _v0.i(0),
    _v386 = _v0.i(0),
    _v387 = _v0.i(0),
    _v388 = _v0.i(0),
    _v389 = _v0.i(0),
    _v390 = _v0.i(0),
    _v391 = _v0.i(0),
    _v392 = _v0.i(0),
    _v393 = _v0.i(0),
    _v394 = _v0.i(0),
    _v395 = _v0.i(0),
    _v396 = _v0.i(0),
    _v397 = _v0.i(0),
    _v398 = _v0.i(0),
    _v399 = _v0.i(0),
    _v400 = _v0.i(0),
    _v401 = _v0.i(0),
    _v402 = _v0.i(0),
    _v403 = _v0.i(0),
    _v404 = _v0.i(0),
    _v405 = _v0.i(0),
    _v406 = _v0.i(0);
  let _v407 = "actions menu",
    _v408 = _v0 => ({
      eventName: "vimeo.click_video_card_menu",
      version: 3,
      fields: _v0,
      defaultEventFields: {
        ..._v406.nullTeamContext,
        ..._v406.nullVideoContextData,
        position_row: null,
        position_column: null,
        location: null
      }
    }),
    _v409 = _v0 => ({
      eventName: "workflow.delete_video",
      version: 3,
      fields: _v0,
      defaultEventFields: {
        ..._v406.nullTeamContext,
        ..._v406.nullVideoContextData,
        ..._v406.nullUploadContextData,
        location: null
      }
    }),
    _v410 = () => ({
      eventName: "workflow.open_delete_modal",
      version: 2,
      defaultEventFields: {
        ..._v406.nullTeamContext,
        ..._v406.nullVideoContextData,
        ..._v406.nullUploadContextData,
        location: null
      }
    }),
    _v411 = () => ({
      eventName: "workflow.delete_video_cancelled",
      version: 2,
      defaultEventFields: {
        ..._v406.nullTeamContext,
        ..._v406.nullVideoContextData,
        ..._v406.nullUploadContextData,
        location: null
      }
    }),
    _v412 = ({
      setIsDeletingVideo: _v0,
      onMove: _v1,
      video: _v2,
      hasShareUpsell: _v3,
      hasReviewPageLinkUpsell: _v4,
      hasMultipleReviewLinks: _v5,
      hasProhibitMultipleReviewLinks: _v6
    }) => {
      let {
          mutate: _v7
        } = _v144(),
        _v8 = (0, _v42.useViewer)(),
        _v9 = (0, _v319.useNotification)(),
        {
          openShareFolderModal: _v10
        } = (0, _v399.useShareFolderModal)(),
        _v11 = (0, _v173.usePage)(),
        {
          openDeleteVideoModal: _v12,
          closeDeleteVideoModal: _v13
        } = (0, _v402.useDeleteVideoModal)(),
        [_v14, _v15] = (0, _v390.useDeleteVideo)(),
        {
          open: _v16,
          close: _v17
        } = (0, _v175.useUpsellModal)(),
        {
          open: _v18
        } = (0, _v398.useDownloadModal)(),
        _v19 = (0, _v362.useStorageLimitLockedVideoPaywall)(),
        {
          trackColdStorageUxClicked: _v20
        } = (0, _v157.useColdStorageTracking)(),
        _v21 = (0, _v157.deriveColdStorageRestrictions)({
          hasColdStorage: !!_v2.isColdStorage,
          hasColdPrivacy: !!_v2.isColdPrivacyRestricted
        }),
        _v22 = (0, _v287.useAnalyticsEvent)(),
        {
          getVideoShareLoopTrackingParams: _v23
        } = (0, _v400.useShareLoopTrackingParams)(),
        _v24 = _v8?.user?.uri === _v2?.user?.uri,
        _v25 = _v8?.teamUser?.ownerId,
        {
          capabilities: _v26
        } = (0, _v6.useCapability)(["canManageTeamCollections", "hasEnterprise"], _v25),
        {
          openAddToShowcaseModal: _v27,
          closeAddToShowcaseModal: _v28
        } = (0, _v404.useAddToShowcaseModal)(),
        _v29 = !!_v2?.metadata?.interactions?.edit?.uri,
        _v30 = !!_v2?.metadata?.interactions?.invite?.uri || _v3,
        _v31 = _v23(_v394.PAGE.ELIHP, !1),
        _v32 = /http/.test(_v2?.link) ? `${_v2?.link}${_v31}` : `${_v8?.vimeoHttpsUrl}${_v2?.link}${_v31}`,
        _v33 = _v2?.download,
        _v34 = !!_v2?.metadata?.interactions?.legalHold?.uri,
        {
          handleStarMenuState: _v35
        } = (0, _v403.useStarMenuItem)(),
        {
          isItemStarred: _v36,
          onStarClick: _v37,
          ..._v38
        } = _v35("video", _v2, !0),
        _v39 = _v5 && !_v6,
        {
          canCreateReviewLink: _v40,
          canCopyReviewPageLink: _v41,
          canManageReviewLinks: _v42,
          reviewPageLink: _v43
        } = (0, _v397.useReviewLinkMenuState)({
          hasReviewLinkCapabilities: _v39,
          hasMultipleReviewLinks: _v5,
          reviewLinks: _v2.reviewLinks,
          getReviewPageUrl: (0, _v3.useCallback)(_v0 => (0, _v266.getVideoReviewPageUrl)(_v0, _v357(_v2?.uri)), [_v2?.uri])
        }),
        {
          trackMyVideoMenuClicked: _v44
        } = (0, _v391.useVideoActionsTracking)(),
        _v45 = _v357(_v2?.uri),
        _v46 = String(_v45),
        _v47 = _v357(_v2?.user?.uri),
        _v48 = _v26.canManageTeamCollections && _v29 && !isNaN(_v45) && !isNaN(_v47),
        _v49 = (0, _v3.useCallback)((_v0, _v1, _v2) => {
          _v10?.(_v0, "VL_grid_view_overflow", _v1, _v2);
        }, [_v10]),
        _v50 = (0, _v396.useReviewLinkCopiedToast)(),
        _v51 = (0, _v370.useCopyVideoLink)({
          video: _v2,
          surface: "ellipsis_menu",
          analyticsElement: "ellipses",
          manageActionLocation: "VL_grid_view_overflow"
        }),
        _v52 = (0, _v395.useCreateAndCopyVideoReviewLink)((0, _v3.useCallback)((_v0, _v1) => _v50(() => _v49(_v0, "CREATE_REVIEW_LINK_MODAL", _v1)), [_v50, _v49]));
      return ((0, _v3.useEffect)(() => {
        _v15.called && (_v15.loading || (_v13(), _v15.error ? _v9({
          content: _v401.deleteVideoFailed,
          status: "error"
        }) : (_v9({
          content: _v401.deleteVideoSuccess,
          status: "success"
        }), _v0(!0), _v7().then(() => {
          _v0(!1);
        }))));
      }, [_v15.called, _v15.loading, _v15.error]), _v2.isColdStorage) ? (0, _v1.jsxs)(_v393.ActionsMenu, {
        placement: "right-start",
        onClick: () => {
          _v22(_v408({
            target: _v407
          }));
        },
        title: _v2.name,
        zIndex: _v394.ACTIONS_MENU_Z_INDEX,
        children: [(0, _v1.jsx)(_v57.Box, {
          px: "sm",
          children: (0, _v1.jsx)(_v392.Action, {
            icon: (0, _v1.jsx)(_v388.ArrowUp, {}),
            label: _v362.STORAGE_LIMIT_UNLOCK_ACTION_LABEL,
            onClick: () => {
              _v19({
                location: "recents_widget",
                paywallTrigger: "cold_storage_recents_locked_video_menu_upgrade_button",
                upsellName: "locked_video_upgrade"
              });
            }
          })
        }), !!_v2?.metadata?.interactions?.delete?.uri && (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v387.MenuDivider, {
            mt: "sm",
            mb: "sm"
          }), (0, _v1.jsx)(_v57.Box, {
            px: "sm",
            children: (0, _v1.jsx)(_v392.Action, {
              icon: (0, _v1.jsx)(_v389.TrashBin, {}),
              label: (0, _v32.translate)({
                singular: "Delete",
                dictionary: {
                  es: {
                    singular: "Eliminar"
                  },
                  "de-DE": {
                    singular: "Löschen"
                  },
                  "fr-FR": {
                    singular: "Supprimer"
                  },
                  "ja-JP": {
                    singular: "削除"
                  },
                  "ko-KR": {
                    singular: "삭제"
                  },
                  "pt-BR": {
                    singular: "Excluir"
                  },
                  "zh-CN": {
                    singular: "删除"
                  }
                }
              }),
              onClick: () => {
                _v20({
                  element: "locked_video_menu_delete",
                  restrictions: _v21
                }), _v22(_v410()), _v12({
                  isLoading: _v15.loading,
                  numItemsToDelete: 1,
                  onClickDelete: () => {
                    _v14({
                      where: {
                        videoId: _v357(_v2?.uri)
                      },
                      ...{
                        variables: {
                          sendToRecentlyDeleted: !0
                        }
                      }
                    }), _v22(_v409({
                      live_event_id: null,
                      origin_folder_id: null,
                      origin_type: null
                    })), _v12({
                      isLoading: !0,
                      numItemsToDelete: 1,
                      name: _v2.name,
                      isColdStorage: !0,
                      numColdStorageItems: 1,
                      coldStorageName: _v2.name
                    }), _v36 && _v37?.();
                  },
                  onClickCancel() {
                    _v13(), _v22(_v411());
                  },
                  isOnLegalHold: _v34,
                  name: _v2.name,
                  isColdStorage: !0,
                  numColdStorageItems: 1,
                  coldStorageName: _v2.name
                });
              }
            })
          })]
        })]
      }) : (0, _v1.jsx)(_v369.VideoMenu, {
        placement: "right-start",
        enableReorganizedOverflowMenu: !0,
        isEnterprise: !!_v26.hasEnterprise,
        onClick: () => {
          _v22(_v408({
            target: _v407
          }));
        },
        hasReviewPageLinkUpsell: _v4,
        hasMultipleReviewLinks: _v5,
        canEdit: _v29,
        canShare: _v30,
        canDelete: !!_v2?.metadata?.interactions?.delete?.uri,
        videoEmbedCode: _v2?.embed?.html,
        videoLink: _v32,
        canMove: _v2?.canMoveToProject,
        reviewPageLink: _v43,
        analyticsPageLink: _v2?.manageLink && `${_v2?.manageLink}/analytics`,
        canDownload: !!((_v29 || _v2?.privacy?.download) && _v33 && Array.isArray(_v33) && _v33.length > 0),
        canCreateReviewLink: _v40,
        onCreateReviewLink: () => {
          _v44({
            clipId: _v46,
            myVideoMenuClickedContext: "homepage",
            myVideoMenuAction: "create_review_link"
          }), _v49(_v2?.uri, "CREATE_REVIEW_LINK_MODAL");
        },
        canManageReviewLinks: _v42,
        onManageReviewLinks: () => {
          _v44({
            clipId: _v46,
            myVideoMenuClickedContext: "homepage",
            myVideoMenuAction: "manage_review_links"
          }), _v49(_v2?.uri, "REVIEW_LINKS_PANEL");
        },
        canAddToShowcase: _v48,
        onAddToShowcase: () => {
          isNaN(_v45) || isNaN(_v47) || (_v44({
            clipId: _v46,
            myVideoMenuClickedContext: "homepage",
            myVideoMenuAction: "add_to_showcase"
          }), _v27({
            onClose: _v28,
            showcaseItems: [{
              id: _v45,
              name: _v2.name,
              type: "video"
            }],
            ownerId: _v47,
            pageName: _v11,
            pageUrl: window.location.pathname
          }));
        },
        onShare: () => {
          var _v0;
          _v44({
            clipId: _v46,
            myVideoMenuClickedContext: "homepage",
            myVideoMenuAction: "share"
          }), _v0 = _v2?.uri, _v10?.(_v0, "VL_grid_view_overflow", void 0, void 0, void 0, {
            pageSource: "homepage",
            entryPoint: "share_menu"
          }), _v405.BPAnalyticsV2.openVideoShare({
            location: "card",
            element: "ellipses",
            teamUser: _v8?.teamUser,
            folder: _v2.parentProject,
            video: _v2
          });
        },
        canCopyReviewPageLink: _v41,
        onCopyReviewPageLink: () => {
          _v44({
            clipId: _v46,
            myVideoMenuClickedContext: "homepage",
            myVideoMenuAction: "copy_review_link"
          }), _v4 && !_v5 ? _v16({
            tracking: {
              params: {
                feature: "video-card",
                location: "video_actions_menu",
                page: _v11,
                upsell_name: "copy_review_link"
              },
              paywallTracking: {
                paywallTrigger: "wayfinder_video_actions_copy_review_link_button",
                paywallLocation: "wayfinder_home",
                paywallType: "popup",
                paywallFeature: "video_actions"
              }
            },
            onClose: _v17
          }) : (() => {
            if (_v43) {
              let _v0 = _v2.reviewLinks?.[0]?.uri;
              _v50(_v0 ? () => _v49(_v2?.uri, "CREATE_REVIEW_LINK_MODAL", _v0) : void 0);
            } else _v52(_v45, _v2?.uri);
            _v405.BPAnalyticsV2.clickActionCopyReviewPageLink({
              location: "card",
              element: "ellipses",
              teamUser: _v8?.teamUser,
              folder: _v2.parentProject,
              video: _v2
            });
          })();
        },
        onDownload: _v33 ? () => {
          _v44({
            clipId: _v46,
            myVideoMenuClickedContext: "homepage",
            myVideoMenuAction: "download"
          }), _v18({
            files: _v33,
            videoId: _v357(_v2?.uri)
          }), _v22({
            eventName: "workflow.open_download_modal",
            version: 3,
            fields: {
              is_owner: _v24,
              number_of_files: _v33.length,
              third_party_integration: null
            },
            defaultEventFields: {
              ..._v406.nullTeamContext,
              ..._v406.nullVideoContextData,
              ..._v406.nullUploadContextData,
              location: null
            }
          });
        } : void 0,
        onCopyLinkAsync: () => {
          _v44({
            clipId: _v46,
            myVideoMenuClickedContext: "homepage",
            myVideoMenuAction: "copy_link"
          }), _v51();
        },
        onCopyVideoEmbedCode: () => {
          _v44({
            clipId: _v46,
            myVideoMenuClickedContext: "homepage",
            myVideoMenuAction: "copy_embed_code"
          }), _v9({
            content: _v401.embedCodeCopySuccess,
            status: "success"
          }), _v405.BPAnalyticsV2.clickCopyVideoEmbedCode({
            location: "card",
            element: "ellipses",
            teamUser: _v8?.teamUser,
            folder: _v2.parentProject,
            video: _v2
          });
        },
        onMove: () => {
          _v44({
            clipId: _v46,
            myVideoMenuClickedContext: "homepage",
            myVideoMenuAction: "move"
          }), _v4.BigPictureClient.sendEvent(new _v4.Event("vimeo.click", 147, {
            copy: null,
            feature: "lihp",
            location: "video_card_menu",
            name: "move_video",
            page: _v11,
            target: null,
            type: "general",
            click_type: null,
            device_type: null,
            path: window.location.pathname,
            third_party_integration: null,
            target_path: null
          })), _v8?.user?.uri && _v1();
        },
        onDelete: () => {
          _v22(_v410()), _v12({
            isLoading: _v15.loading,
            numItemsToDelete: 1,
            onClickDelete: () => {
              _v44({
                clipId: _v46,
                myVideoMenuClickedContext: "homepage",
                myVideoMenuAction: "delete"
              }), _v14({
                where: {
                  videoId: _v357(_v2?.uri)
                },
                ...{
                  variables: {
                    sendToRecentlyDeleted: !0
                  }
                }
              }), _v22(_v409({
                live_event_id: null,
                origin_folder_id: null,
                origin_type: null
              })), _v12({
                isLoading: !0,
                numItemsToDelete: 1,
                name: _v2.name
              }), _v36 && _v37?.();
            },
            onClickCancel() {
              _v13(), _v22(_v411());
            },
            isOnLegalHold: _v34,
            name: _v2.name
          });
        },
        onClickAnalyticsPage: () => {
          _v44({
            clipId: _v46,
            myVideoMenuClickedContext: "homepage",
            myVideoMenuAction: "analytics"
          }), _v4.BigPictureClient.sendEvent(new _v4.Event("vimeo.click", 147, {
            copy: "Analytics",
            feature: "analytics",
            location: "video_list",
            name: "click_action_analytics",
            page: _v11,
            target: null,
            target_path: _v2?.manageLink ? `${_v2?.manageLink}/analytics` : "",
            type: "general",
            click_type: null,
            device_type: null,
            path: window.location.pathname,
            third_party_integration: null
          }));
        },
        onClickReviewPage: () => {
          _v4.BigPictureClient.sendEvent(new _v4.Event("vimeo.click", 147, {
            copy: "Review",
            feature: "review",
            location: "video_list",
            name: "open_review_page",
            page: _v11,
            target: "review_page",
            target_path: _v2?.reviewPage?.link || "",
            type: "general",
            click_type: null,
            device_type: null,
            path: window.location.pathname,
            third_party_integration: null
          }));
        },
        onStarClick: _v37 ? () => {
          _v36 || _v44({
            clipId: _v46,
            myVideoMenuClickedContext: "homepage",
            myVideoMenuAction: "add_to_starred"
          }), _v37();
        } : void 0,
        ..._v38,
        zIndex: _v394.ACTIONS_MENU_Z_INDEX
      });
    },
    _v413 = _v384.keyframes`
  from {
    height: 100%;
    display: block;
  }
  to {
    height: 0;
    overflow: hidden;
    display: none;
}
`;
  async function _v414({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v133.measureLatency)("getUserRecommendedActions", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/recommended_actions?${(0, _v134.searchQueryString)(_v3)}&fields=${_v1.map(_v134.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v134.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v134.deepCamelCase)(_v1);
    });
  }
  function _v415(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v139.useGctlConfig)();
    return (0, _v15.default)(_v2 ? `/users/${_v2.where.userId}/recommended_actions${(0, _v137.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v414({
      ..._v2,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      baseUrl: _v3
    }) : null, _v1);
  }
  "true" === _v132.default.env.STORYBOOK && (0, _v137.assignMswData)(_v415, {
    endpoint: "/users/:userId/recommended_actions",
    method: "GET"
  }), "true" === _v132.default.env.STORYBOOK && (0, _v137.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v136.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v139.useGctlConfig)(),
      [_v5, _v6] = (0, _v137.useInternalState)();
    return [(0, _v3.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/recommended_actions${(0, _v137.serializeQuery)(_v0)}`, _v414({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }));
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
  }, {
    endpoint: "/users/:userId/recommended_actions",
    method: "GET"
  }), "true" === _v132.default.env.STORYBOOK && (0, _v137.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v139.useGctlConfig)();
    return (0, _v138.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/users/${_v2.where.userId}/recommended_actions?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v414({
      ..._v2,
      baseUrl: _v3,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      query: {
        ..._v2.query,
        page: _v1 + 1
      }
    }) : null, _v1);
  }, {
    endpoint: "/users/:userId/recommended_actions",
    method: "GET"
  });
  let _v416 = "ko-KR",
    _v417 = "de-DE",
    _v418 = "ja-JP",
    _v419 = "pt-BR",
    _v420 = "fr-FR",
    _v421 = {
      en: 0,
      [_v416]: 0,
      [_v417]: 0,
      [_v418]: 0,
      es: 0,
      [_v419]: 0,
      [_v420]: 0
    },
    _v422 = {
      en: 0,
      [_v416]: 0,
      [_v417]: 0,
      [_v418]: 0,
      es: 0,
      [_v419]: 0,
      [_v420]: 0
    },
    _v423 = {
      en: 0,
      [_v416]: 0,
      [_v417]: 0,
      [_v418]: 0,
      es: 0,
      [_v419]: 0,
      [_v420]: 0
    },
    _v424 = {
      en: 0,
      [_v416]: 0,
      [_v417]: 0,
      [_v418]: 0,
      es: 0,
      [_v419]: 0,
      [_v420]: 0
    },
    _v425 = {
      en: 0,
      [_v416]: 0,
      [_v417]: 0,
      [_v418]: 0,
      es: 0,
      [_v419]: 0,
      [_v420]: 0
    };
  async function _v426({
    baseUrl: _v0,
    where: {
      userId: _v1,
      stateId: _v2
    },
    ..._v3
  }) {
    return (0, _v133.measureLatency)("putUserRecommendation", "PUT", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v1}/recommendations/${_v2}`, {
        ..._v3,
        method: "PUT"
      });
      if (!_v0.ok) throw new _v134.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v134.deepCamelCase)(_v1);
    });
  }
  function _v427() {
    let {
        mutate: _v0
      } = (0, _v136.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v139.useGctlConfig)(),
      [_v5, _v6] = (0, _v137.useInternalState)();
    return [(0, _v3.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/recommendations/${_v0.where.stateId}${(0, _v137.serializeQuery)(_v0)}`, _v426({
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
  async function _v428({
    baseUrl: _v0,
    where: {
      userId: _v1,
      videoId: _v2,
      stateId: _v3
    },
    ..._v4
  }) {
    return (0, _v133.measureLatency)("putUserVideoRecommendation", "PUT", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v1}/videos/${_v2}/recommendations/${_v3}`, {
        ..._v4,
        method: "PUT"
      });
      if (!_v0.ok) throw new _v134.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v134.deepCamelCase)(_v1);
    });
  }
  function _v429() {
    let {
        mutate: _v0
      } = (0, _v136.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v139.useGctlConfig)(),
      [_v5, _v6] = (0, _v137.useInternalState)();
    return [(0, _v3.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/videos/${_v0.where.videoId}/recommendations/${_v0.where.stateId}${(0, _v137.serializeQuery)(_v0)}`, _v428({
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
  "true" === _v132.default.env.STORYBOOK && (0, _v137.assignMswData)(_v427, {
    endpoint: "/users/:userId/recommendations/:stateId",
    method: "PUT"
  }), "true" === _v132.default.env.STORYBOOK && (0, _v137.assignMswData)(_v429, {
    endpoint: "/users/:userId/videos/:videoId/recommendations/:stateId",
    method: "PUT"
  });
  let _v430 = () => {
      let [_v0] = _v427(),
        _v1 = (0, _v3.useContext)(_v17.ViewerContext),
        _v2 = _v1?.user?.id;
      return (0, _v3.useCallback)(_v0 => {
        _v2 && _v0({
          where: {
            userId: _v2,
            stateId: _v0
          }
        });
      }, [_v2, _v0]);
    },
    _v431 = () => {
      let [_v0] = _v429(),
        _v1 = (0, _v3.useContext)(_v17.ViewerContext),
        _v2 = _v1?.user?.id;
      return (0, _v3.useCallback)((_v0, _v1) => {
        _v2 && _v0({
          where: {
            userId: _v2,
            stateId: _v0,
            videoId: _v1
          }
        });
      }, [_v2, _v0]);
    },
    _v432 = () => {
      let _v0 = (0, _v42.useViewer)(),
        _v1 = (0, _v3.useMemo)(() => (0, _v121.buildTeamBpContextFromTeamUser)(_v0?.teamUser), [_v0]),
        _v2 = (0, _v3.useMemo)(() => (0, _v122.buildThirdPartyIntegrationBpContext)({
          is_integration: !1,
          integration_id: null,
          integration_name: null,
          is_partner: null
        }), []),
        _v3 = (0, _v3.useMemo)(() => (0, _v119.buildActionBpContext)({
          action_type: "click",
          feature: null
        }), []);
      return {
        sendWidgetsImpressionEvent: ({
          copy: _v0,
          feature: _v1,
          location: _v2,
          isEmptyState: _v3 = !1,
          widgetPlacement: _v4 = 1
        }) => {
          let _v5 = (0, _v198.buildViewBpContext)({
              view_type: "impression",
              feature: null
            }),
            _v6 = (0, _v123.buildWebBpContext)({
              page_name: "logged_in_home_page",
              location: null,
              referrer_page_name: null,
              path: window.location.pathname,
              copy: null
            }),
            _v7 = (0, _v120.buildProductAnalyticsBpContext)({
              product: "general",
              feature: _v1,
              location: _v2,
              copy: _v0
            });
          (0, _v124.sendBpEventWithContexts)("vimeo.widget_impression", {
            ..._v3,
            ..._v5,
            ..._v6,
            ..._v7,
            ..._v1,
            ..._v2
          }, 1, {
            widget_placement: _v4,
            is_dismissable: !0,
            is_dynamic_recommendations_widget: !0,
            is_empty_state: _v3
          });
        },
        sendCtaEvent: (_v0, {
          product: _v1 = "general",
          feature: _v2,
          copy: _v3,
          location: _v4,
          target: _v5,
          flow: _v6,
          element: _v7,
          entity_type: _v8,
          additionalFields: _v9,
          additionalContexts: _v10,
          schemaVersion: _v11,
          modal_name: _v12,
          clipId: _v13,
          video_privacy: _v14,
          targetPath: _v15 = null
        }) => {
          let _v16 = (0, _v123.buildWebBpContext)({
              page_name: "logged_in_home_page",
              location: null,
              referrer_page_name: null,
              path: window.location.pathname,
              target: _v5 ?? null,
              target_path: _v15,
              copy: _v3
            }),
            _v17 = _v13 ? (0, _v286.buildVideoBpContext)({
              video_id: _v13,
              video_privacy: _v14 ?? null
            }) : {},
            _v18 = (0, _v120.buildProductAnalyticsBpContext)({
              product: _v1,
              feature: _v2,
              location: _v4,
              copy: _v3,
              flow: _v6,
              element: _v7,
              entity_type: _v8,
              modal_name: _v12 ?? null
            });
          (0, _v124.sendBpEventWithContexts)(_v0, {
            ..._v3,
            ..._v16,
            ..._v18,
            ..._v1,
            ..._v2,
            ..._v10,
            ..._v17
          }, _v11, {
            ..._v9
          });
        },
        sendDismissEvent: ({
          copy: _v0,
          location: _v1,
          widgetPlacement: _v2 = 1
        }) => {
          let _v3 = (0, _v123.buildWebBpContext)({
              page_name: "logged_in_home_page",
              location: null,
              referrer_page_name: null,
              path: window.location.pathname
            }),
            _v4 = (0, _v120.buildProductAnalyticsBpContext)({
              product: "general",
              feature: "general",
              location: _v1,
              copy: _v0,
              flow: "recommendation_card_widget_remove"
            });
          (0, _v124.sendBpEventWithContexts)("vimeo.dismiss_widget", {
            ..._v3,
            ..._v3,
            ..._v4,
            ..._v1,
            ..._v2
          }, 1, {
            widget_placement: _v2,
            is_dismissable: !0,
            is_dynamic_recommendations_widget: !0
          });
        }
      };
    },
    _v433 = _v0 => `https://player.vimeo.com/video/${_v0}?background=1`,
    _v434 = _v0 => _v0 > 0 ? _v289 : _v0 >= 720 ? _v290 : _v291;
  var _v435 = _v1,
    _v436 = _v0.i(0),
    _v437 = _v0.i(0),
    _v438 = _v250;
  let _v439 = (0, _v436.default)("div").withConfig({
      displayName: "DismissedWidgetState__IconWrapper",
      componentId: "sc-5693a87d-0"
    })`
  display: flex;
  align-items: center;
  justify-contents: center;
  width: ${2.125}rem;
  height: ${2.125}rem;
  line-height: 0;
  svg {
    width: ${1.75}rem;
    height: ${1.75}rem;
    path {
      fill: ${_v0 => _v0.fillColor};
    }
  }
`,
    _v440 = ({
      labelText: _v0 = (0, _v438.translate)({
        singular: "We'll show you a new recommendation next time",
        dictionary: {
          es: {
            singular: "La próxima vez le mostraremos una nueva recomendación"
          },
          "de-DE": {
            singular: "Beim nächsten Mal werden wir Ihnen eine neue Empfehlung geben."
          },
          "fr-FR": {
            singular: "Nous vous montrerons une nouvelle recommandation la prochaine fois"
          },
          "ja-JP": {
            singular: "次回も新しいおすすめをご紹介します"
          },
          "ko-KR": {
            singular: "다음에는 새로운 추천을 보여드리겠습니다."
          },
          "pt-BR": {
            singular: "Mostraremos uma recomendação nova na próxima vez"
          },
          "zh-CN": {
            singular: "下次我们会向您展示新的推荐"
          }
        }
      }),
      Icon: _v1 = (0, _v435.jsx)(_v437.CircleCheck, {})
    }) => {
      let _v2 = (0, _v180.useColorModeValue)("#657987", "#c1c1c1"),
        {
          ref: _v3,
          width: _v4
        } = _v187(),
        _v5 = _v434(_v4);
      return (0, _v435.jsxs)(_v57.Box, {
        ref: _v3,
        backgroundColor: "surface",
        borderColor: "stroke",
        borderWidth: 1,
        borderRadius: 16,
        boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.05)",
        display: "flex",
        flexDir: "column",
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        height: _v5 === _v289 ? 280 : 350,
        children: [(0, _v435.jsx)(_v439, {
          fillColor: _v2,
          "data-testid": "dismissed-widget-icon",
          children: _v1
        }), (0, _v435.jsx)(_v31.Text, {
          variant: "body-xl",
          "data-testid": "dismissed-widget-label",
          color: "text-secondary",
          marginTop: 12,
          maxW: 220,
          align: "center",
          lineHeight: 1.5,
          children: _v0
        })]
      });
    },
    _v441 = {
      [_v291]: 8,
      [_v290]: 9,
      [_v289]: 10
    },
    _v442 = {
      [_v291]: 8,
      [_v290]: 6,
      [_v289]: 8
    };
  (0, _v267.rem)(382), (0, _v267.rem)(286.5), (0, _v267.rem)(382), (0, _v267.rem)(216);
  let _v443 = ({
      size: _v0 = _v291,
      iframeSrc: _v1,
      title: _v2,
      aspectRatio: _v3,
      dismissBtnProps: _v4,
      onShowDismissedWidget: _v5,
      isShowCloseButton: _v6 = !0,
      sx: _v7
    }) => {
      let [_v8, _v9] = (0, _v3.useState)(!1),
        _v10 = (0, _v201.useIsBokeh)();
      _v1 += (0, _v180.useColorModeValue)("", "&transparent=0");
      let {
        sendDismissEvent: _v11
      } = _v432();
      return _v3 || (_v3 = 4 / 3), (0, _v1.jsxs)(_v268.Stack, {
        position: "relative",
        tabIndex: 0,
        cursor: "pointer",
        outline: "0",
        borderRadius: (0, _v267.rem)(6),
        overflow: "hidden",
        justifyContent: "center",
        ...(_v10 && {
          height: "100%",
          aspectRatio: _v3,
          borderRadius: "lg"
        }),
        children: [(0, _v1.jsx)(_v297.AspectRatio, {
          width: "100%",
          height: _v0 === _v289 || _v0 === _v291 ? "auto" : "100%",
          ratio: _v3,
          backgroundSize: "110%",
          visibility: _v8 ? "visible" : "hidden",
          backgroundPosition: "center",
          backgroundColor: "darkBlueAlpha.300",
          _dark: {
            backgroundColor: "lightBlueAlpha.300"
          },
          borderRadius: (0, _v267.rem)(8),
          backdropFilter: "blur(0)",
          objectFit: "cover",
          children: (0, _v1.jsx)("iframe", {
            onLoad: () => _v9(!0),
            src: _v1,
            style: {
              borderRadius: (0, _v267.rem)(8)
            },
            allow: "autoplay; fullscreen; picture-in-picture",
            title: _v2,
            frameBorder: "0"
          })
        }), _v6 && (0, _v1.jsx)(_v22.Button, {
          position: "absolute",
          zIndex: "auto",
          right: _v442[_v0],
          top: _v441[_v0],
          variant: "secondary",
          size: "sm",
          width: (0, _v267.rem)(32),
          height: (0, _v267.rem)(32),
          onClick: () => {
            if (_v4) {
              let {
                clickHandler: _v0,
                ..._v1
              } = _v4;
              _v0 && _v0(), _v11(_v1);
            }
            _v5();
          },
          children: (0, _v1.jsx)(_v151.CloseX, {
            color: "text-primary",
            width: 20,
            height: 20
          })
        }), !_v8 && (0, _v1.jsx)(_v268.Stack, {
          position: "absolute",
          top: "0",
          left: "0",
          w: "100%",
          h: "100%",
          children: (0, _v1.jsx)(_v189.BokehSkeleton, {
            w: "100%",
            h: "100%"
          })
        })]
      });
    },
    _v444 = ({
      text: _v0,
      overlay: _v1,
      fgColor: _v2,
      bkColor: _v3,
      borderColor: _v4
    }) => {
      let _v5 = (0, _v180.useColorModeValue)("#00608F", "#C8EDFF"),
        _v6 = (0, _v180.useColorModeValue)("blue.50", "#003448"),
        _v7 = (0, _v180.useColorModeValue)(void 0, "solid #414141");
      return (0, _v1.jsx)(_v57.Box, {
        width: "fit-content",
        height: "fit-content",
        padding: "4px 8px 4px 8px",
        alignItems: "flex-start",
        borderRadius: "16px",
        color: _v2 ?? _v5,
        backgroundColor: _v3 ?? _v6,
        borderColor: _v4 ?? _v7,
        ...{
          position: _v1 ? "absolute" : "relative",
          zIndex: _v1 ? 2 : void 0,
          top: 8 * !!_v1,
          left: 8 * !!_v1
        },
        children: (0, _v1.jsx)(_v445, {
          text: _v0
        })
      });
    },
    _v445 = ({
      text: _v0
    }) => (0, _v1.jsx)(_v31.Text, {
      variant: "body-sm",
      fontWeight: "bold",
      children: _v0
    }),
    _v446 = {
      [_v291]: {
        maxWidth: (0, _v44.rem)(719),
        minHeight: (0, _v44.rem)(350)
      },
      [_v290]: {
        maxWidth: (0, _v44.rem)(0),
        height: (0, _v44.rem)(350),
        minWidth: (0, _v44.rem)(720)
      },
      [_v289]: {
        maxWidth: (0, _v44.rem)(0),
        height: (0, _v44.rem)(280),
        minWidth: (0, _v44.rem)(0)
      }
    },
    _v447 = ({
      size: _v0,
      Text: _v1,
      Media: _v2,
      tag: _v3,
      bpImpressionContext: _v4,
      padding: _v5,
      mediaMinWidth: _v6,
      textMinWidth: _v7,
      gap: _v8
    }) => {
      let _v9 = _v0 === _v291,
        {
          sendWidgetsImpressionEvent: _v10
        } = _v432();
      return (0, _v3.useEffect)(() => {
        _v4 && _v10({
          ..._v4
        });
      }, []), (0, _v1.jsx)(_v244, {
        ..._v446[_v0],
        backgroundColor: "fill-surface",
        overflow: "hidden",
        children: (0, _v1.jsx)(_v268.Stack, {
          width: "100%",
          height: "100%",
          direction: _v9 ? "column" : "row",
          justifyContent: "space-between",
          position: "relative",
          gap: _v8,
          children: _v9 ? (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v444, {
              ..._v3,
              overlay: !0
            }), _v2, " ", _v1]
          }) : (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v57.Box, {
              minWidth: _v7,
              height: "100%",
              children: _v1
            }), (0, _v1.jsx)(_v268.Stack, {
              height: "100%",
              minWidth: _v6,
              alignItems: "flex-end",
              children: _v2
            })]
          })
        })
      });
    },
    _v448 = {
      [_v291]: (0, _v44.rem)(25),
      [_v290]: (0, _v44.rem)(16),
      [_v289]: (0, _v44.rem)(12)
    },
    _v449 = ({
      size: _v0,
      title: _v1,
      subtitle: _v2,
      children: _v3,
      tag: _v4,
      ..._v5
    }) => {
      let _v6 = _v0 === _v291;
      return (0, _v1.jsxs)(_v43.Flex, {
        direction: "column",
        width: "100%",
        height: "100%",
        className: "whats-next-text-card",
        ..._v5,
        children: [(0, _v1.jsxs)(_v57.Box, {
          children: [!_v6 && (0, _v1.jsx)(_v444, {
            ..._v4
          }), (0, _v1.jsxs)(_v57.Box, {
            children: [(0, _v1.jsx)(_v23.Header, {
              size: _v6 ? "md" : _v0 === _v290 ? "lg" : "xl",
              marginBottom: _v448[_v0],
              marginTop: _v6 ? "xl" : "lg",
              children: _v1
            }), !_v6 && (0, _v1.jsx)(_v31.Text, {
              variant: "body-xl",
              color: "text-secondary",
              lineHeight: "lg",
              marginBottom: _v6 ? "xl" : "lg",
              children: _v2
            })]
          })]
        }), !_v6 && (0, _v1.jsx)(_v57.Box, {
          className: "text-card-spacer",
          flex: 1
        }), (0, _v1.jsx)(_v57.Box, {
          className: "text-card-cta-continer",
          display: "flex",
          flexDirection: "row",
          gap: 12,
          sx: {
            "& > *": {
              width: _v6 ? "100%" : "auto"
            }
          },
          children: _v3
        })]
      });
    };
  _v449.CTA = ({
    size: _v0,
    variant: _v1,
    icon: _v2,
    onClick: _v3,
    text: _v4,
    isLoading: _v5,
    dataId: _v6
  }) => (0, _v1.jsx)(_v22.Button, {
    size: _v0 ?? "md",
    variant: _v1 ?? "secondary",
    leftIcon: _v2,
    isDisabled: _v5,
    onClick: _v3,
    "data-id": _v6,
    children: _v4
  });
  let _v450 = ({
      size: _v0,
      title: _v1,
      subtitle: _v2,
      iframeSrc: _v3,
      primaryCta: _v4,
      secondaryCta: _v5,
      tag: _v6,
      bpImpressionContext: _v7,
      dismissBtnProps: _v8,
      isShowCloseButton: _v9
    }) => {
      let [_v10, _v11] = (0, _v3.useState)(!1),
        _v12 = (0, _v201.useIsBokeh)();
      return _v10 ? (0, _v1.jsx)(_v440, {}) : (0, _v1.jsx)(_v447, {
        size: _v0,
        padding: (0, _v267.rem)(32),
        gap: _v0 === _v291 ? (0, _v267.rem)(0) : (0, _v267.rem)(44),
        Media: (0, _v1.jsx)(_v443, {
          size: _v0,
          iframeSrc: _v3,
          title: _v1,
          dismissBtnProps: _v8,
          onShowDismissedWidget: () => _v11(!0),
          isShowCloseButton: _v9
        }),
        Text: (0, _v1.jsxs)(_v449, {
          tag: _v6,
          size: _v0,
          title: _v1,
          subtitle: _v2,
          ...(_v12 && {
            sx: {
              p: "lg",
              pt: _v0 === _v291 ? 0 : "lg"
            }
          }),
          children: [_v4 && (0, _v1.jsx)(_v449.CTA, {
            ..._v4
          }), _v5 && (0, _v1.jsx)(_v449.CTA, {
            ..._v5
          })]
        }),
        tag: _v6,
        bpImpressionContext: _v7
      });
    },
    _v451 = ({
      clipId: _v0
    }) => {
      let _v1 = (0, _v3.useContext)(_v17.ViewerContext),
        _v2 = (0, _v2.useRouter)(),
        _v3 = _v430(),
        {
          ref: _v4,
          width: _v5
        } = _v187(),
        _v6 = _v434(_v5),
        _v7 = (0, _v250.translate)({
          singular: "Customize player",
          dictionary: {
            es: {
              singular: "Personalizar el reproductor"
            },
            "de-DE": {
              singular: "Player anpassen"
            },
            "fr-FR": {
              singular: "Personnaliser le player"
            },
            "ja-JP": {
              singular: "プレーヤーのカスタマイズ"
            },
            "ko-KR": {
              singular: "플레이어 커스텀"
            },
            "pt-BR": {
              singular: "Personalize o player"
            },
            "zh-CN": {
              singular: "自定义播放器"
            }
          }
        }),
        _v8 = `/manage/videos/${_v0}/player`,
        {
          sendCtaEvent: _v9
        } = _v432(),
        _v10 = () => {
          _v3("psi");
        },
        _v11 = (0, _v250.translate)({
          singular: "Customize the player",
          dictionary: {
            es: {
              singular: "Reproductor personalizable"
            },
            "de-DE": {
              singular: "Player nach Belieben einstellen"
            },
            "fr-FR": {
              singular: "Personnalisez le player"
            },
            "ja-JP": {
              singular: "プレーヤーのカスタマイズ"
            },
            "ko-KR": {
              singular: "플레이어를 커스텀하세요"
            },
            "pt-BR": {
              singular: "Customize o player"
            },
            "zh-CN": {
              singular: "自定义播放器"
            }
          }
        });
      return (0, _v1.jsx)(_v57.Box, {
        width: "100%",
        height: "100%",
        ref: _v4,
        children: (0, _v1.jsx)(_v450, {
          title: _v11,
          subtitle: (0, _v250.translate)({
            singular: "Make the player your own by changing the color and controls that viewers see on your videos.",
            dictionary: {
              es: {
                singular: "Personalice el reproductor cambiando el color y los controles que los espectadores ven en sus videos."
              },
              "de-DE": {
                singular: "Gestalten Sie den Player nach Ihren Vorstellungen, indem Sie die Farbe und die Steuerelemente ändern, welche die zuschauenden Ihrer Videos sehen."
              },
              "fr-FR": {
                singular: "Appropriez-vous le lecteur en modifiant la couleur et les commandes que les spectateurs voient sur vos vidéos."
              },
              "ja-JP": {
                singular: "動画上で視聴者に表示される色やコントロールを変更して、好みのプレーヤーに仕上げましょう。"
              },
              "ko-KR": {
                singular: "동영상에서 시청자에게 표시되는 색상과 컨트롤을 변경하여 나만의 플레이어를 만들어 보세요."
              },
              "pt-BR": {
                singular: "Personalize o player alterando a cor e os controles que os espectadores veem em seus vídeos."
              },
              "zh-CN": {
                singular: "通过更改观众在视频上看到的颜色和控件，让播放器成为您自己的。"
              }
            }
          }),
          tag: {
            text: (0, _v250.translate)({
              singular: "What's next",
              dictionary: {
                es: {
                  singular: "¿Qué sigue?"
                },
                "de-DE": {
                  singular: "Wie geht es jetzt weiter?"
                },
                "fr-FR": {
                  singular: "Et après ?"
                },
                "ja-JP": {
                  singular: "次のステップ"
                },
                "ko-KR": {
                  singular: "다음 단계"
                },
                "pt-BR": {
                  singular: "E agora?"
                },
                "zh-CN": {
                  singular: "下一步做什么"
                }
              }
            })
          },
          iframeSrc: _v433(_v421[_v1?.locale || "en"]),
          size: _v6,
          primaryCta: {
            text: _v7,
            onClick: () => {
              _v9("vimeo.open_video", {
                product: "dynamic_recommendations",
                feature: "player",
                target: null,
                targetPath: _v8,
                location: "recommendation_card_player_widget",
                element: "button",
                copy: _v7,
                schemaVersion: -1,
                flow: "recommendation_card_widget_select",
                entity_type: "video",
                clipId: _v0
              }), _v10(), _v2.push(_v8);
            },
            dataId: "player_settings_recommendation_card_cta"
          },
          bpImpressionContext: {
            copy: _v11,
            feature: "player",
            location: "recommendation_card_player_widget"
          },
          dismissBtnProps: {
            copy: null,
            location: "recommendation_card_player_widget",
            clickHandler: _v10
          }
        })
      });
    };
  var _v452 = _v0.i(0);
  let _v453 = [[100, 75], [200, 150], [295, 166], [640, 360], [0, 720], [0, 0], [0, 0]],
    _v454 = (_v0 = "https://devi.vimeocdn.com/video/default") => _v453.map(_v0 => `${_v0}_${_v0[0]}x${_v0[1]} ${_v0[1]}w`).join(", ");
  var _v455 = _v0.i(0);
  let _v456 = ({
      size: _v0 = _v291,
      imgAlt: _v1,
      thumbnailUrl: _v2,
      aspectRatio: _v3,
      videoTitle: _v4,
      thumbnailUrlSet: _v5,
      dismissBtnProps: _v6,
      onShowDismissedWidget: _v7,
      isShowCloseButton: _v8 = !0,
      videoLink: _v9 = "",
      ..._v10
    }) => {
      let _v11 = _v0 === _v290,
        _v12 = _v0 === _v289,
        _v13 = _v0 === _v291,
        [_v14, _v15] = (0, _v3.useState)(!1),
        _v16 = (0, _v180.useColorModeValue)({
          background: "white",
          color: "text.primary"
        }, {
          background: "grayscale.700",
          color: "white"
        });
      return _v3 || (_v3 = _v0 == _v289 || _v0 === _v291 ? 16 / 9 : 4 / 3), (0, _v1.jsxs)(_v268.Stack, {
        position: "relative",
        width: _v12 ? (0, _v44.rem)(376) : "100%",
        height: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "darkBlueAlpha.300",
        _dark: {
          backgroundColor: "lightBlueAlpha.300"
        },
        overflow: "hidden",
        borderRadius: "lg",
        minWidth: _v12 ? (0, _v44.rem)(320) : void 0,
        ..._v10,
        children: [(0, _v1.jsxs)(_v268.Stack, {
          visibility: _v14 ? "visible" : "hidden",
          padding: _v11 ? (0, _v44.rem)(12) : 0,
          width: _v12 ? (0, _v44.rem)(376) : _v13 ? "100%" : void 0,
          height: _v11 ? void 0 : "100%",
          tabIndex: 0,
          outline: "0",
          borderRadius: (0, _v44.rem)(8),
          maxWidth: _v11 ? (0, _v44.rem)(261) : "100%",
          ..._v16,
          children: [(0, _v1.jsx)(_v188.default, {
            href: _v9,
            children: (0, _v1.jsx)(_v297.AspectRatio, {
              width: _v11 ? (0, _v44.rem)(238) : "100%",
              height: _v11 ? (0, _v44.rem)(134) : "100%",
              backgroundSize: "110%",
              ratio: _v3,
              backgroundPosition: "center",
              overflow: "hidden",
              borderRadius: (0, _v44.rem)(8),
              backdropFilter: "blur(0)",
              objectFit: "contain",
              children: (0, _v1.jsx)("img", {
                onLoad: () => _v15(!0),
                srcSet: _v5,
                style: {
                  borderRadius: (0, _v44.rem)(8)
                },
                alt: _v1,
                src: _v2
              })
            })
          }), _v11 && (0, _v1.jsx)(_v57.Box, {
            children: (0, _v1.jsx)(_v23.Header, {
              size: "sm",
              children: _v4
            })
          }), _v8 && (0, _v1.jsx)(_v459, {
            size: _v0,
            dismissBtnProps: _v6,
            onShowDismissedWidget: _v7
          })]
        }), !_v14 && (0, _v1.jsx)(_v268.Stack, {
          position: "absolute",
          top: "0",
          left: "0",
          w: "100%",
          h: "100%",
          children: (0, _v1.jsx)(_v189.BokehSkeleton, {
            w: "100%",
            h: "100%"
          })
        })]
      });
    },
    _v457 = {
      [_v291]: 8,
      [_v290]: 9,
      [_v289]: 10
    },
    _v458 = {
      [_v291]: 8,
      [_v290]: 16,
      [_v289]: 8
    },
    _v459 = ({
      size: _v0,
      dismissBtnProps: _v1,
      onShowDismissedWidget: _v2
    }) => {
      let {
          sendDismissEvent: _v3
        } = _v432(),
        {
          clickHandler: _v4,
          ..._v5
        } = _v1;
      return (0, _v1.jsx)(_v22.Button, {
        position: "absolute",
        zIndex: "auto",
        right: _v458[_v0],
        top: _v457[_v0],
        variant: "secondary",
        size: "sm",
        width: 32,
        height: 32,
        onClick: () => {
          _v3(_v5), _v4 && _v4(), _v2();
        },
        children: (0, _v1.jsx)(_v455.CloseXSmall, {
          color: "text-primary",
          width: 20,
          height: 20
        })
      });
    },
    _v460 = ({
      size: _v0,
      title: _v1,
      subtitle: _v2,
      tag: _v3,
      thumbnailUrl: _v4,
      primaryCta: _v5,
      thumbnailUrlSet: _v6,
      secondaryCta: _v7,
      videoTitle: _v8,
      bpImpressionContext: _v9,
      dismissBtnProps: _v10,
      isShowCloseButton: _v11,
      videoLink: _v12 = ""
    }) => {
      let [_v13, _v14] = (0, _v3.useState)(!1);
      return _v13 ? (0, _v1.jsx)(_v440, {}) : (0, _v1.jsx)(_v447, {
        size: _v0,
        Media: (0, _v1.jsx)(_v456, {
          videoTitle: _v8,
          size: _v0,
          thumbnailUrl: _v4,
          thumbnailUrlSet: _v6,
          dismissBtnProps: _v10,
          onShowDismissedWidget: () => _v14(!0),
          isShowCloseButton: _v11,
          videoLink: _v12
        }),
        Text: (0, _v1.jsxs)(_v449, {
          tag: _v3,
          size: _v0,
          title: _v1,
          subtitle: _v2,
          p: "lg",
          pt: _v0 === _v291 ? 0 : "lg",
          children: [_v5 && (0, _v1.jsx)(_v449.CTA, {
            ..._v5
          }), _v7 && (0, _v1.jsx)(_v449.CTA, {
            ..._v7
          })]
        }),
        bpImpressionContext: _v9,
        tag: _v3,
        mediaMinWidth: _v0 === _v290 ? "50%" : void 0,
        textMinWidth: _v0 === _v290 ? "50%" : void 0
      });
    },
    _v461 = ({
      name: _v0,
      updateVideoInteraction: _v1,
      onCopyEmbed: _v2,
      onCopyLink: _v3,
      primaryCtaText: _v4,
      secondaryCtaText: _v5,
      thumbnailSrcSet: _v6,
      clipId: _v7,
      videoLink: _v8
    }) => {
      let {
          ref: _v9,
          width: _v10
        } = _v187(),
        _v11 = _v434(_v10),
        _v12 = (0, _v250.translate)({
          singular: "Share your latest video",
          dictionary: {
            es: {
              singular: "Comparta su último video"
            },
            "de-DE": {
              singular: "Teile dein neuestes Video"
            },
            "fr-FR": {
              singular: "Partager votre dernière vidéo"
            },
            "ja-JP": {
              singular: "最新の動画を共有する"
            },
            "ko-KR": {
              singular: "최신 동영상 공유"
            },
            "pt-BR": {
              singular: "Compartilhe seu vídeo mais recente"
            },
            "zh-CN": {
              singular: "分享您的最新视频"
            }
          }
        });
      return (0, _v1.jsx)(_v57.Box, {
        width: "100%",
        height: "100%",
        ref: _v9,
        children: (0, _v1.jsx)(_v460, {
          title: _v12,
          subtitle: (0, _v250.translate)({
            singular: "Copy the link to share your video on Vimeo, or use the embed code to put it on your website.",
            dictionary: {
              es: {
                singular: "Copie el enlace para compartir su video en Vimeo, o utilice el código de inserción para ponerlo en su sitio web."
              },
              "de-DE": {
                singular: "Kopiere den Link, um dein Video auf Vimeo zu teilen, oder verwende den Einbettungscode, um es auf deine Website zu stellen."
              },
              "fr-FR": {
                singular: "Copiez le lien pour partager votre vidéo sur Vimeo, ou utilisez le code d'intégration pour la publier sur votre site Web."
              },
              "ja-JP": {
                singular: "リンクをコピーして動画をVimeoで共有するか、埋め込みコードを使用してウェブサイトに動画を配置できます。"
              },
              "ko-KR": {
                singular: "링크를 복사하여 Vimeo에서 동영상을 공유하거나 임베드 코드를 사용하여 웹사이트에 올리세요."
              },
              "pt-BR": {
                singular: "Copie o link para compartilhar seu vídeo no Vimeo, ou use o código de incorporação para inseri-lo em seu site."
              },
              "zh-CN": {
                singular: "复制链接，在 Vimeo 上分享您的视频，或使用嵌入代码将其放到您的网站上。"
              }
            }
          }),
          tag: {
            text: (0, _v250.translate)({
              singular: "What’s next",
              dictionary: {
                es: {
                  singular: "Lo nuevo"
                },
                "de-DE": {
                  singular: "Was kommt als nächstes"
                },
                "fr-FR": {
                  singular: "Et après ?"
                },
                "ja-JP": {
                  singular: "次のステップ"
                },
                "ko-KR": {
                  singular: "다음 단계"
                },
                "pt-BR": {
                  singular: "E agora?"
                },
                "zh-CN": {
                  singular: "下一步做什么"
                }
              }
            })
          },
          bpImpressionContext: {
            copy: _v12,
            feature: "general",
            location: "recommendation_card_share_widget"
          },
          dismissBtnProps: {
            copy: null,
            location: "recommendation_card_share_widget",
            clickHandler: () => _v1("share_banner_dismissal", _v7)
          },
          thumbnailUrlSet: _v6 ?? _v454(),
          videoTitle: _v0 ?? "",
          size: _v11,
          primaryCta: {
            text: _v4,
            icon: (0, _v1.jsx)(_v376.Link, {
              style: {
                width: (0, _v267.rem)(16),
                height: (0, _v267.rem)(16)
              }
            }),
            onClick: _v3,
            dataId: "share_recommendation_card_copy_link_btn"
          },
          secondaryCta: {
            text: _v5,
            icon: (0, _v1.jsx)(_v452.Code, {
              style: {
                width: (0, _v267.rem)(16),
                height: (0, _v267.rem)(16)
              }
            }),
            onClick: _v2,
            dataId: "share_recommendation_card_copy_embed_btn"
          },
          videoLink: _v8
        })
      });
    },
    _v462 = _v0 => {
      let {
        data: _v1,
        ..._v2
      } = (0, _v390.useGetVideo)(() => ({
        where: {
          videoId: _v0
        },
        select: ["name", "pictures", "link", "manageLink", "playerEmbedUrl", "privacy"]
      }));
      if (!_v1) return;
      let {
        name: _v3,
        playerEmbedUrl: _v4,
        pictures: _v5,
        link: _v6,
        manageLink: _v7,
        privacy: _v8
      } = _v1;
      return {
        name: _v3,
        playerEmbedUrl: _v4,
        thumbnailSrcSet: _v5?.sizes.map(_v0 => `${_v0.link} ${_v0.width}w`).join(", "),
        link: _v6,
        manageLink: _v7,
        privacy: _v8,
        ..._v2
      };
    },
    _v463 = ({
      clipId: _v0
    }) => {
      let _v1 = _v462(_v0),
        _v2 = (0, _v5.useToast)(),
        {
          sendCtaEvent: _v3
        } = _v432(),
        _v4 = _v431();
      if (_v1?.error) return null;
      let {
          name: _v5,
          link: _v6,
          manageLink: _v7,
          playerEmbedUrl: _v8,
          thumbnailSrcSet: _v9,
          privacy: _v10
        } = _v1 ?? {},
        _v11 = `${_v6}?share=copy`,
        _v12 = _v8 ? ((_v0, _v1 = 640, _v2 = 564) => `<iframe src="${_v0}" width="${_v1}" height="${_v2}" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`)(_v8) : "",
        _v13 = (0, _v250.translate)({
          singular: "Copy link",
          dictionary: {
            es: {
              singular: "Copiar vínculo"
            },
            "de-DE": {
              singular: "Link kopieren"
            },
            "fr-FR": {
              singular: "Copier le lien"
            },
            "ja-JP": {
              singular: "リンクをコピー"
            },
            "ko-KR": {
              singular: "링크 복사"
            },
            "pt-BR": {
              singular: "Copiar link"
            },
            "zh-CN": {
              singular: "复制链接"
            }
          }
        }),
        _v14 = (0, _v250.translate)({
          singular: "Copy embed",
          dictionary: {
            es: {
              singular: "Copiar código de inserción"
            },
            "de-DE": {
              singular: "Einbettungscode kopieren"
            },
            "fr-FR": {
              singular: "Copier le code d'intégration"
            },
            "ja-JP": {
              singular: "埋め込みコードをコピー"
            },
            "ko-KR": {
              singular: "임베드 코드 복사"
            },
            "pt-BR": {
              singular: "Copiar código de incorporação"
            },
            "zh-CN": {
              singular: "复制嵌入"
            }
          }
        });
      return (0, _v1.jsx)(_v461, {
        clipId: _v0,
        name: _v5,
        updateVideoInteraction: _v4,
        onCopyEmbed: () => {
          _v3("vimeo.open_distribution_options", {
            product: "dynamic_recommendations",
            feature: "embed",
            target: null,
            location: "recommendation_card_share_widget",
            element: "button",
            copy: _v14,
            schemaVersion: 2,
            modal_name: null,
            flow: "copy_embed_code",
            entity_type: "video",
            additionalFields: {
              distribution_type: "embed",
              target_quality: null,
              target_resolution: null,
              target_file_details: null,
              target_privacy: null,
              number_of_items: 1,
              embed_config: null,
              embed_custom_dimensions: null
            },
            video_privacy: _v10?.view ?? null,
            clipId: _v0
          }), _v2({
            status: "success",
            title: (0, _v250.translate)({
              singular: "Embed code copied to clipboard",
              dictionary: {
                es: {
                  singular: "Se copió el código de inserción al portapapeles"
                },
                "de-DE": {
                  singular: "Bette den Code ein, der auf die Zwischenablage kopiert wurde"
                },
                "fr-FR": {
                  singular: "Le code d'intégration a été copié dans le presse-papier"
                },
                "ja-JP": {
                  singular: "埋め込みコードがクリップボードにコピーされました"
                },
                "ko-KR": {
                  singular: "임베드 코드가 클립보드로 복사되었습니다"
                },
                "pt-BR": {
                  singular: "Código de incorporação copiado para a área de transferência"
                },
                "zh-CN": {
                  singular: "嵌入代码已复制到剪贴板"
                }
              }
            }),
            duration: 0
          }), _v12 && navigator.clipboard.writeText(_v12), _v4("action_embed", _v0);
        },
        onCopyLink: () => {
          _v3("vimeo.open_distribution_options", {
            product: "dynamic_recommendations",
            feature: "share",
            target: null,
            location: "recommendation_card_share_widget",
            element: "button",
            copy: _v13,
            schemaVersion: 2,
            modal_name: null,
            flow: "share_video_link",
            entity_type: "video",
            additionalFields: {
              distribution_type: "share",
              target_quality: null,
              target_resolution: null,
              target_file_details: null,
              number_of_items: 1,
              embed_config: null,
              embed_custom_dimensions: null
            },
            video_privacy: _v10?.view ?? null,
            clipId: _v0
          }), _v2({
            status: "success",
            title: (0, _v250.translate)({
              singular: "Link copied to clipboard",
              dictionary: {
                es: {
                  singular: "Copiamos el vínculo en el portapapeles"
                },
                "de-DE": {
                  singular: "Link in Zwischenablage kopiert"
                },
                "fr-FR": {
                  singular: "Lien copié dans le presse-papier"
                },
                "ja-JP": {
                  singular: "リンクがクリップボードにコピーされました"
                },
                "ko-KR": {
                  singular: "클립보드로 링크 복사됨"
                },
                "pt-BR": {
                  singular: "Link copiado para a área de transferência"
                },
                "zh-CN": {
                  singular: "链接已复制到剪贴板"
                }
              }
            }),
            duration: 0
          }), navigator.clipboard.writeText(_v11), _v4("action_copy_link", _v0);
        },
        primaryCtaText: _v13,
        secondaryCtaText: _v14,
        thumbnailSrcSet: _v9,
        videoLink: _v7 ?? _v6
      });
    };
  var _v464 = _v0.i(0);
  let _v465 = ({
      showModal: _v0,
      handleClose: _v1,
      bpEventParams: _v2,
      paywallTracking: _v3
    }) => {
      let _v4 = (0, _v3.useContext)(_v17.ViewerContext);
      return _v0 ? (0, _v1.jsx)(_v464.default, {
        apiUrl: _v4?.apiUrl,
        userConfig: {
          jwt: _v4?.jwt,
          userId: _v4?.user?.id
        },
        templateType: "default",
        onClose: _v1,
        tracking: {
          params: _v2,
          paywallTracking: _v3
        }
      }) : null;
    },
    _v466 = () => {
      let _v0 = (0, _v3.useContext)(_v17.ViewerContext),
        {
          ref: _v1,
          width: _v2
        } = _v187(),
        _v3 = _v434(_v2),
        _v4 = (0, _v180.useColorModeValue)({
          fgColor: "hsla(263, 99%, 48%, 1)",
          bkColor: "hsla(259, 75%, 64%, 0.2)"
        }, {
          fgColor: "hsla(0, 0%, 100%, 1)",
          bkColor: "hsla(259, 75%, 64%, 0.6)"
        }),
        {
          sendCtaEvent: _v5
        } = _v432(),
        _v6 = (0, _v250.translate)({
          singular: "Compare plans",
          dictionary: {
            es: {
              singular: "Comparar planes"
            },
            "de-DE": {
              singular: "Pläne vergleichen"
            },
            "fr-FR": {
              singular: "Comparer les abonnements"
            },
            "ja-JP": {
              singular: "プランの比較"
            },
            "ko-KR": {
              singular: "요금제 비교"
            },
            "pt-BR": {
              singular: "Comparar planos"
            },
            "zh-CN": {
              singular: "套餐对比"
            }
          }
        }),
        [_v7, _v8] = (0, _v3.useState)(!1),
        _v9 = (0, _v250.translate)({
          singular: "Upgrade for more video power",
          dictionary: {
            es: {
              singular: "Cambie de plan para obtener más potencia de video"
            },
            "de-DE": {
              singular: "Mit einem Upgrade zu mehr Videoleistung"
            },
            "fr-FR": {
              singular: "Mise à niveau pour encore plus de puissance vidéo"
            },
            "ja-JP": {
              singular: "アップグレードして動画パワーを強化"
            },
            "ko-KR": {
              singular: "업그레이드하여 더 많은 동영상 기능 사용하기"
            },
            "pt-BR": {
              singular: "Faça upgrade para acessar mais recursos de vídeo"
            },
            "zh-CN": {
              singular: "升级以获得更强大的视频功能"
            }
          }
        });
      return (0, _v1.jsxs)(_v57.Box, {
        width: "100%",
        height: "100%",
        ref: _v1,
        children: [(0, _v1.jsx)(_v450, {
          title: _v9,
          subtitle: (0, _v250.translate)({
            singular: "Unlock the tools you need to make, manage, and share stunning videos in minutes.",
            dictionary: {
              es: {
                singular: "Acceda a las herramientas que necesita para crear, gestionar y compartir videos asombrosos en cuestión de minutos."
              },
              "de-DE": {
                singular: "Schalte die Tools frei, die du benötigst, um in Minutenschnelle beeindruckende Videos zu erstellen, zu verwalten und zu teilen."
              },
              "fr-FR": {
                singular: "Débloquez les outils dont vous avez besoin pour créer, gérer et partager des vidéos époustouflantes en quelques minutes."
              },
              "ja-JP": {
                singular: "魅力的な動画をすぐに作成、管理、共有するためのツールのロックを解除しましょう。"
              },
              "ko-KR": {
                singular: "필요한 도구를 사용하여 단 몇 분 만에 멋진 동영상을 만들고 관리하고 공유하세요."
              },
              "pt-BR": {
                singular: "Acesse as ferramentas de que você precisa para criar, gerenciar e compartilhar vídeos incríveis em poucos minutos."
              },
              "zh-CN": {
                singular: "解锁几分钟内制作、管理和分享精彩视频所需的工具。"
              }
            }
          }),
          tag: {
            text: (0, _v250.translate)({
              singular: "Upgrade",
              dictionary: {
                es: {
                  singular: "Actualizar"
                },
                "de-DE": {
                  singular: "Upgraden"
                },
                "fr-FR": {
                  singular: "Mettre à niveau"
                },
                "ja-JP": {
                  singular: "アップグレード"
                },
                "ko-KR": {
                  singular: "업그레이드"
                },
                "zh-CN": {
                  singular: "升级"
                }
              }
            }),
            ..._v4
          },
          iframeSrc: _v433(_v422[_v0?.locale || "en"]),
          size: _v3,
          primaryCta: {
            text: _v6,
            onClick: () => {
              _v8(!0), _v5("vimeo.trigger_upsell", {
                product: "dynamic_recommendations",
                feature: "pricing",
                target: null,
                location: "recommendation_card_upgrade_widget",
                element: "button",
                copy: _v6,
                schemaVersion: 7,
                modal_name: null,
                flow: null,
                entity_type: null,
                additionalFields: {
                  add_on_feature: null,
                  currency: null,
                  discount_offer: null,
                  duration: null,
                  interface_type: "modal",
                  is_discount: null,
                  plan_selected: null,
                  price: null,
                  promo_code_id: null,
                  purchase_type: null,
                  selected_plan: null,
                  upsell_name: "recommendation_card_upgrade",
                  usd_price: null
                }
              });
            },
            isLoading: _v7,
            dataId: "upgrade_recommendation_card_compare_plans_btn"
          },
          bpImpressionContext: {
            copy: _v9,
            feature: "general",
            location: "recommendation_card_upgrade_widget"
          },
          isShowCloseButton: !1
        }), (0, _v1.jsx)(_v465, {
          showModal: _v7,
          handleClose: () => _v8(!1),
          bpEventParams: {
            location: "recommendation_card_upgrade",
            upsell_name: "recommendation_card_upgrade",
            path: "/wayfinder-home",
            page: "logged_in_homepage"
          },
          paywallTracking: {
            paywallTrigger: "wayfinder_home_upgrade_card_button",
            paywallLocation: "wayfinder_home",
            paywallType: "popup",
            paywallFeature: "general"
          }
        })]
      });
    };
  var _v467 = _v0.i(0);
  let _v468 = () => {
      let _v0 = (0, _v3.useContext)(_v17.ViewerContext),
        _v1 = (0, _v2.useRouter)(),
        {
          ref: _v2,
          width: _v3
        } = _v187(),
        _v4 = _v434(_v3),
        _v5 = (0, _v250.translate)({
          singular: "Invite",
          dictionary: {
            es: {
              singular: "Invitar"
            },
            "de-DE": {
              singular: "Einladen"
            },
            "fr-FR": {
              singular: "Inviter"
            },
            "ja-JP": {
              singular: "招待"
            },
            "ko-KR": {
              singular: "초대"
            },
            "pt-BR": {
              singular: "Convidar"
            },
            "zh-CN": {
              singular: "邀请"
            }
          }
        }),
        _v6 = "/manage/team/members",
        _v7 = _v430(),
        {
          isTeamManagementVisible: _v8,
          loading: _v9
        } = (0, _v467.useTeamManagementVisible)(),
        {
          sendCtaEvent: _v10
        } = _v432(),
        _v11 = (0, _v250.translate)({
          singular: "Invite people to collaborate",
          dictionary: {
            es: {
              singular: "Invite a la gente a colaborar"
            },
            "de-DE": {
              singular: "Zur Zusammenarbeit einladen"
            },
            "fr-FR": {
              singular: "Invitez de nouveaux collaborateurs"
            },
            "ja-JP": {
              singular: "メンバーを共同作業に招待"
            },
            "ko-KR": {
              singular: "사람들을 협업에 초대하기"
            },
            "pt-BR": {
              singular: "Convide pessoas para colaborar"
            },
            "zh-CN": {
              singular: "邀请他人合作"
            }
          }
        });
      return _v9 || !_v8 ? null : (0, _v1.jsx)(_v57.Box, {
        width: "100%",
        height: "100%",
        ref: _v2,
        children: (0, _v1.jsx)(_v450, {
          title: _v11,
          subtitle: (0, _v250.translate)({
            singular: "Add people to your team to work together and share videos and folders.",
            dictionary: {
              es: {
                singular: "Añada personas a su equipo para trabajar juntos y compartir videos y carpetas."
              },
              "de-DE": {
                singular: "Fügen Sie Personen zu Ihrem Team hinzu, um zusammenzuarbeiten und Videos und Ordner gemeinsam zu nutzen."
              },
              "fr-FR": {
                singular: "Ajoutez des personnes à votre équipe pour collaborer et partager des vidéos et des dossiers."
              },
              "ja-JP": {
                singular: "チームにメンバーを追加して共同作業し、動画やフォルダーを共有しましょう。"
              },
              "ko-KR": {
                singular: "팀에 사람들을 추가하여 함께 작업하고 동영상과 폴더를 공유하세요."
              },
              "pt-BR": {
                singular: "Inclua pessoas na sua equipe para trabalhar em conjunto e compartilhar vídeos e pastas."
              },
              "zh-CN": {
                singular: "将人员添加到您的团队中，以协同工作、分享视频和文件夹。"
              }
            }
          }),
          tag: {
            text: (0, _v250.translate)({
              singular: "What's next",
              dictionary: {
                es: {
                  singular: "¿Qué sigue?"
                },
                "de-DE": {
                  singular: "Wie geht es jetzt weiter?"
                },
                "fr-FR": {
                  singular: "Et après ?"
                },
                "ja-JP": {
                  singular: "次のステップ"
                },
                "ko-KR": {
                  singular: "다음 단계"
                },
                "pt-BR": {
                  singular: "E agora?"
                },
                "zh-CN": {
                  singular: "下一步做什么"
                }
              }
            })
          },
          iframeSrc: _v433(_v423[_v0?.locale || "en"]),
          size: _v4,
          primaryCta: {
            text: _v5,
            onClick: () => {
              _v10("vimeo.open_team_management", {
                product: "dynamic_recommendations",
                feature: "teams",
                target: "manage_team",
                targetPath: _v6,
                location: "recommendation_card_teams_widget",
                element: "button",
                copy: _v5,
                schemaVersion: -1,
                flow: null,
                entity_type: null
              }), _v7("tci"), _v1.push(_v6);
            },
            dataId: "invite_to_team_recommendation_card_cta"
          },
          bpImpressionContext: {
            copy: _v11,
            feature: "teams",
            location: "recommendation_card_teams_widget"
          },
          dismissBtnProps: {
            copy: null,
            location: "recommendation_card_teams_widget",
            clickHandler: () => _v7("tci")
          }
        })
      });
    },
    _v469 = ({
      thumbnailSrcSet: _v0,
      name: _v1,
      primaryCtaText: _v2,
      secondaryCtaText: _v3,
      showUpgrade: _v4,
      onAddPassword: _v5,
      onManagePrivacy: _v6,
      clipId: _v7,
      updateVideoInteraction: _v8
    }) => {
      let {
          ref: _v9,
          width: _v10
        } = _v187(),
        _v11 = _v434(_v10),
        [_v12, _v13] = (0, _v3.useState)(!1),
        _v14 = (0, _v250.translate)({
          singular: "Control who sees your video",
          dictionary: {
            es: {
              singular: "Controle quién ve su video"
            },
            "de-DE": {
              singular: "Kontrollieren Sie, wer Ihr Video sehen kann"
            },
            "fr-FR": {
              singular: "Contrôlez qui voit votre vidéo"
            },
            "ja-JP": {
              singular: "動画の視聴者をコントロール"
            },
            "ko-KR": {
              singular: "동영상 공개 범위 제어"
            },
            "pt-BR": {
              singular: "Controle quem vê seu vídeo"
            },
            "zh-CN": {
              singular: "控制谁可以看到您的视频"
            }
          }
        });
      return (0, _v1.jsxs)(_v57.Box, {
        width: "100%",
        height: "100%",
        ref: _v9,
        children: [(0, _v1.jsx)(_v460, {
          title: _v14,
          subtitle: (0, _v250.translate)({
            singular: "Change your privacy setting to Public so anyone can watch, or upgrade to add a password for more security.",
            dictionary: {
              es: {
                singular: "Cambie su configuración de privacidad a Público para que cualquiera pueda verlo, o actualice su plan para agregar una contraseña y tener mayor seguridad."
              },
              "de-DE": {
                singular: "Ändern Sie Ihre Privatsphäre-Einstellung auf Öffentlich, damit alle zuschauen können, oder fügen Sie ein Passwort für mehr Sicherheit hinzu."
              },
              "fr-FR": {
                singular: "Réglez vos paramètres de confidentialité sur Public pour que tout le monde puisse regarder votre vidéo. Pour plus de sécurité, mettez votre abonnement à niveau pour pouvoir ajouter un mot de passe."
              },
              "ja-JP": {
                singular: "プライバシー設定を「一般公開」に変更して誰でも視聴できるようにするか、アップグレードしてパスワードを追加し、セキュリティを強化してください。"
              },
              "ko-KR": {
                singular: "누구나 시청할 수 있도록 프라이버시 설정을 공개로 전환하거나 업그레이드하여 보안 강화를 위해 비밀번호를 추가하세요."
              },
              "pt-BR": {
                singular: "Altere sua configuração de privacidade para Pública para que qualquer pessoa possa assistir ou atualize para adicionar uma senha para ter mais segurança."
              },
              "zh-CN": {
                singular: "将您的隐私设置更改为“公开”，让任何人都可以观看；或立即升级，添加密码，提高安全性。"
              }
            }
          }),
          tag: {
            text: (0, _v250.translate)({
              singular: "What’s next",
              dictionary: {
                es: {
                  singular: "Lo nuevo"
                },
                "de-DE": {
                  singular: "Was kommt als nächstes"
                },
                "fr-FR": {
                  singular: "Et après ?"
                },
                "ja-JP": {
                  singular: "次のステップ"
                },
                "ko-KR": {
                  singular: "다음 단계"
                },
                "pt-BR": {
                  singular: "E agora?"
                },
                "zh-CN": {
                  singular: "下一步做什么"
                }
              }
            })
          },
          thumbnailUrlSet: _v0 ?? _v454(),
          videoTitle: _v1 ?? "",
          size: _v11,
          bpImpressionContext: {
            copy: _v14,
            feature: "general",
            location: "recommendation_card_privacy_widget"
          },
          dismissBtnProps: {
            copy: null,
            location: "recommendation_card_privacy_widget",
            clickHandler: () => _v8("pbd", _v7)
          },
          primaryCta: {
            text: _v2,
            onClick: _v6,
            dataId: "privacy_recommendation_card_manage_privacy_btn"
          },
          secondaryCta: _v4 ? {
            text: _v3,
            onClick: () => {
              _v13(!0), _v5?.();
            },
            variant: "tertiary",
            dataId: "privacy_recommendation_card_upgrade_btn"
          } : void 0
        }), (0, _v1.jsx)(_v465, {
          showModal: _v12,
          handleClose: () => _v13(!1),
          bpEventParams: {
            location: "recommendation_card_privacy_widget",
            upsell_name: "recommendation_card_privacy",
            path: "/wayfinder-home",
            page: "logged_in_homepage"
          },
          paywallTracking: {
            paywallTrigger: "wayfinder_home_privacy_card_button",
            paywallLocation: "wayfinder_home",
            paywallType: "popup",
            paywallFeature: "privacy"
          }
        })]
      });
    },
    _v470 = () => {
      let _v0 = {
        device_type: (0, _v197.default)(),
        click_type: null,
        third_party_integration: null
      };
      return {
        trackButtonClickCdiEvent: ({
          eventName: _v0,
          copyText: _v1,
          elementName: _v2,
          userState: _v3,
          targetPath: _v4 = null,
          target: _v5 = null,
          ..._v6
        }) => {
          _v4.BigPictureClient.sendEvent(new _v4.Event("vimeo.cdi_click", 10, {
            event_name: _v0,
            copy: _v1,
            element_name: _v2,
            user_state: _v3,
            target_path: _v4,
            target: _v5,
            ..._v6,
            ..._v0
          }));
        }
      };
    },
    _v471 = ({
      clipId: _v0,
      showUpgrade: _v1,
      userState: _v2
    }) => {
      let _v3 = (0, _v2.useRouter)(),
        {
          sendCtaEvent: _v4
        } = _v432(),
        {
          trackButtonClickCdiEvent: _v5
        } = _v470(),
        _v6 = _v462(_v0),
        _v7 = _v431();
      if (_v6?.error) return (0, _v1.jsx)(_v1.Fragment, {});
      let _v8 = (0, _v250.translate)({
          singular: "Manage privacy",
          dictionary: {
            es: {
              singular: "Gestionar privacidad"
            },
            "de-DE": {
              singular: "Datenschutzeinstellungen verwalten"
            },
            "fr-FR": {
              singular: "Gérer la confidentialité"
            },
            "ja-JP": {
              singular: "プライバシーを管理"
            },
            "ko-KR": {
              singular: "프라이버시 관리"
            },
            "pt-BR": {
              singular: "Gerenciar privacidade"
            },
            "zh-CN": {
              singular: "管理隐私"
            }
          }
        }),
        _v9 = (0, _v250.translate)({
          singular: "Add password",
          dictionary: {
            es: {
              singular: "Añadir contraseña"
            },
            "de-DE": {
              singular: "Kennwort hinzufügen"
            },
            "fr-FR": {
              singular: "Ajouter un mot de passe"
            },
            "ja-JP": {
              singular: "パスワードを追加"
            },
            "ko-KR": {
              singular: "비밀번호 추가"
            },
            "pt-BR": {
              singular: "Adicionar senha"
            },
            "zh-CN": {
              singular: "添加密码"
            }
          }
        }),
        {
          name: _v10,
          thumbnailSrcSet: _v11
        } = _v6 ?? {};
      return (0, _v1.jsx)(_v469, {
        clipId: _v0,
        onAddPassword: () => {
          _v7("amp", _v0), _v4("vimeo.trigger_upsell", {
            product: "dynamic_recommendations",
            feature: "pricing",
            target: null,
            location: "recommendation_card_privacy_widget",
            element: "button",
            copy: _v9,
            schemaVersion: 7,
            modal_name: null,
            flow: null,
            entity_type: null,
            additionalFields: {
              purchase_type: null,
              usd_price: null,
              price: null,
              duration: null,
              currency: null,
              is_discount: null,
              discount_offer: null,
              upsell_name: "recommendation_card_privacy",
              promo_code_id: null,
              interface_type: null,
              selected_plan: null,
              add_on_feature: null
            }
          });
        },
        onManagePrivacy: () => {
          _v5({
            eventName: "manage_clip_privacy",
            page: "ss_lihp",
            feature: "privacy",
            copyText: _v8,
            location: "recommendation_card_privacy",
            type: "general",
            target: `/manage/videos/${_v0}/privacy`,
            elementName: "recommendation_card_privacy",
            userState: _v2,
            path: _v3.pathname
          });
          try {
            _v7("amp", _v0);
          } finally {
            _v3.push(`/manage/videos/${_v0}/privacy`);
          }
        },
        primaryCtaText: _v8,
        secondaryCtaText: _v9,
        updateVideoInteraction: _v7,
        name: _v10,
        showUpgrade: _v1,
        thumbnailSrcSet: _v11
      });
    },
    _v472 = () => {
      let {
          sendCtaEvent: _v0
        } = _v432(),
        {
          ref: _v1,
          width: _v2
        } = _v187(),
        _v3 = _v434(_v2),
        _v4 = (0, _v3.useContext)(_v17.ViewerContext),
        _v5 = _v433(_v424[_v4?.locale || "en"]),
        _v6 = (0, _v2.useRouter)(),
        [_v7, _v8] = (0, _v3.useState)(!1),
        _v9 = (0, _v250.translate)({
          singular: "Upload an existing video",
          dictionary: {
            es: {
              singular: "Suba un video existente"
            },
            "de-DE": {
              singular: "Lade ein vorhandenes Video hoch"
            },
            "fr-FR": {
              singular: "Mettre en ligne une vidéo existante"
            },
            "ja-JP": {
              singular: "既存の動画をアップロードする"
            },
            "ko-KR": {
              singular: "기존 동영상 업로드"
            },
            "pt-BR": {
              singular: "Carregar um vídeo existente"
            },
            "zh-CN": {
              singular: "上传现有视频"
            }
          }
        }),
        _v10 = (0, _v250.translate)({
          singular: "Upload",
          dictionary: {
            es: {
              singular: "Subir"
            },
            "de-DE": {
              singular: "Hochladen"
            },
            "fr-FR": {
              singular: "Importer"
            },
            "ja-JP": {
              singular: "アップロード"
            },
            "ko-KR": {
              singular: "업로드"
            },
            "pt-BR": {
              singular: "Carregar"
            },
            "zh-CN": {
              singular: "上传"
            }
          }
        });
      return (0, _v1.jsx)(_v57.Box, {
        width: "100%",
        height: "100%",
        ref: _v1,
        "data-testid": "whatsnext-upload-widget",
        children: (0, _v1.jsx)(_v450, {
          size: _v3,
          title: _v9,
          subtitle: (0, _v250.translate)({
            singular: "Choose a video from your device to enhance, customize, and share like a pro.",
            dictionary: {
              es: {
                singular: "Elija un video de su dispositivo para mejorarlo, personalizarlo y compartirlo como un profesional."
              },
              "de-DE": {
                singular: "Wähle ein Video von deinem Gerät aus, um es auf professionelle Weise zu bearbeiten, anzupassen und zu teilen."
              },
              "fr-FR": {
                singular: "Choisissez une vidéo à partir de votre appareil pour l'améliorer, la personnaliser et la partager comme un professionnel."
              },
              "ja-JP": {
                singular: "デバイスから動画を選択し、プロのように、補正、カスタマイズ、共有しましょう。"
              },
              "ko-KR": {
                singular: "사용 중인 기기에서 동영상을 선택하여 전문가처럼 동영상을 개선, 커스텀 및 공유하세요."
              },
              "pt-BR": {
                singular: "Escolha um vídeo do seu dispositivo para aprimorar, personalizar e compartilhar como um verdadeiro profissional."
              },
              "zh-CN": {
                singular: "从您的设备中选择一段视频，像专业人士一样进行完善、定制和分享。"
              }
            }
          }),
          tag: {
            text: (0, _v250.translate)({
              singular: "What's next",
              dictionary: {
                es: {
                  singular: "¿Qué sigue?"
                },
                "de-DE": {
                  singular: "Wie geht es jetzt weiter?"
                },
                "fr-FR": {
                  singular: "Et après ?"
                },
                "ja-JP": {
                  singular: "次のステップ"
                },
                "ko-KR": {
                  singular: "다음 단계"
                },
                "pt-BR": {
                  singular: "E agora?"
                },
                "zh-CN": {
                  singular: "下一步做什么"
                }
              }
            })
          },
          iframeSrc: _v5,
          primaryCta: {
            text: _v10,
            onClick: () => {
              _v8(!0), _v0("vimeo.start_new_video_flow", {
                target: "/upload/videos",
                product: "dynamic_recommendations",
                feature: "upload",
                location: "recommendation_card_upload_widget",
                element: "button",
                copy: _v10,
                flow: null,
                entity_type: "video",
                schemaVersion: -1
              }), _v6.push("/upload/videos");
            },
            isLoading: _v7,
            dataId: "upload_recommendation_card_btn"
          },
          bpImpressionContext: {
            copy: _v9,
            feature: "upload",
            location: "recommendation_card_upload_widget"
          },
          isShowCloseButton: !1
        })
      });
    };
  var _v473 = _v0.i(0);
  let _v474 = () => {
      let [_v0, _v1] = (0, _v3.useState)(!1),
        {
          ref: _v2,
          width: _v3
        } = _v187(),
        _v4 = _v434(_v3),
        _v5 = (0, _v3.useContext)(_v17.ViewerContext),
        _v6 = _v433(_v425[_v5?.locale || "en"]),
        _v7 = _v5?.teamUser?.ownerId ?? _v5?.user?.id,
        _v8 = _v430(),
        {
          sendCtaEvent: _v9
        } = _v432(),
        _v10 = (0, _v250.translate)({
          singular: "Create a folder",
          dictionary: {
            es: {
              singular: "Cree una carpeta"
            },
            "de-DE": {
              singular: "Erstelle einen Ordner"
            },
            "fr-FR": {
              singular: "Créez un dossier"
            },
            "ja-JP": {
              singular: "フォルダーを作成"
            },
            "ko-KR": {
              singular: "폴더를 생성하고"
            },
            "pt-BR": {
              singular: "Crie uma pasta"
            },
            "zh-CN": {
              singular: "创建文件夹"
            }
          }
        }),
        _v11 = (0, _v250.translate)({
          singular: "Create folder",
          dictionary: {
            es: {
              singular: "Crear carpeta"
            },
            "de-DE": {
              singular: "Ordner erstellen"
            },
            "fr-FR": {
              singular: "Créer un dossier"
            },
            "ja-JP": {
              singular: "フォルダーを作成"
            },
            "ko-KR": {
              singular: "폴더 만들기"
            },
            "pt-BR": {
              singular: "Criar Pasta"
            },
            "zh-CN": {
              singular: "创建文件夹"
            }
          }
        });
      return (0, _v1.jsxs)(_v57.Box, {
        width: "100%",
        height: "100%",
        ref: _v2,
        "data-testid": "whatsnext-folders-widget",
        children: [(0, _v1.jsx)(_v450, {
          size: _v4,
          title: _v10,
          subtitle: (0, _v250.translate)({
            singular: "Manage and share your videos more easily with folders.",
            dictionary: {
              es: {
                singular: "Gestione y comparta sus videos fácilmente a través de carpetas."
              },
              "de-DE": {
                singular: "Verwalten und teilen Sie Ihre Videos ganz einfach mit Ordnern."
              },
              "fr-FR": {
                singular: "Gérez et partagez vos vidéos plus facilement grâce aux dossiers."
              },
              "ja-JP": {
                singular: "フォルダーを使用すると、動画をより簡単に管理および共有できます。"
              },
              "ko-KR": {
                singular: "폴더로 동영상을 더 쉽게 관리하고 공유하세요."
              },
              "pt-BR": {
                singular: "Gerencie e compartilhe seus vídeos com mais facilidade com pastas."
              },
              "zh-CN": {
                singular: "利用文件夹更轻松地管理和分享您的视频。"
              }
            }
          }),
          tag: {
            text: (0, _v250.translate)({
              singular: "What's next",
              dictionary: {
                es: {
                  singular: "¿Qué sigue?"
                },
                "de-DE": {
                  singular: "Wie geht es jetzt weiter?"
                },
                "fr-FR": {
                  singular: "Et après ?"
                },
                "ja-JP": {
                  singular: "次のステップ"
                },
                "ko-KR": {
                  singular: "다음 단계"
                },
                "pt-BR": {
                  singular: "E agora?"
                },
                "zh-CN": {
                  singular: "下一步做什么"
                }
              }
            })
          },
          iframeSrc: _v6,
          primaryCta: {
            isLoading: _v0,
            text: _v11,
            onClick: () => {
              _v1(!0), _v8("fcbi"), _v9("vimeo.create_new_folder", {
                product: "dynamic_recommendations",
                target: "folders",
                feature: "folders",
                location: "recommendation_card_folders_widget",
                element: "button",
                copy: _v11,
                flow: "recommendation_card_widget_add",
                entity_type: "folder",
                schemaVersion: -1
              });
            },
            dataId: "create_folder_recommendation_card_btn"
          },
          bpImpressionContext: {
            copy: _v10,
            feature: "folders",
            location: "recommendation_card_folders_widget"
          },
          dismissBtnProps: {
            copy: null,
            location: "recommendation_card_folders_widget",
            clickHandler: () => _v8("fcbi")
          }
        }), (0, _v1.jsx)(_v473.FolderSettingsModal, {
          closeModal: () => {
            _v1(!1);
          },
          currentFolderUri: null,
          parentFolderUri: null,
          isOpen: _v0,
          location: window.location.pathname,
          userId: _v7
        })]
      });
    },
    _v475 = ({
      userState: _v0
    }) => {
      let _v1,
        _v2,
        {
          sendCtaEvent: _v3
        } = _v432(),
        {
          trackButtonClickCdiEvent: _v4
        } = _v470(),
        {
          ref: _v5,
          width: _v6
        } = _v187(),
        _v7 = (0, _v2.useRouter)(),
        _v8 = (0, _v319.useNotification)(),
        _v9 = (0, _v42.useViewer)(),
        _v10 = _v434(_v6),
        {
          getSampleVideoId: _v11
        } = (_v1 = (0, _v42.useViewer)(), _v2 = async () => {
          let _v0 = await fetch("/_next/access_token", {
            body: JSON.stringify({
              source: "demo_video",
              token: _v1?.xsrft ?? "",
              scopes: ["public", "private", "upload"]
            }),
            method: "POST",
            headers: {
              "X-Requested-With": "XMLHttpRequest",
              "Content-Type": "application/json"
            }
          });
          if (_v0.ok) {
            let {
              access_token: _v0
            } = await _v0.json();
            return {
              ..._v0
            };
          }
          throw _v0;
        }, {
          getSampleVideoId: async () => {
            if (!_v1) return null;
            let {
                token: _v0
              } = await _v2(),
              _v1 = await fetch(`https://${_v1.apiUrl}/me/videos?fields=uri`, {
                body: JSON.stringify({
                  upload: {
                    approach: "copy"
                  },
                  metadata: {
                    is_demo_video: !0,
                    allow_demo_video_recreate: !0
                  },
                  name: "Set up your first video",
                  description: "Try our branding and collaboration tools. Edit, create, play, and share.",
                  exempt_quota: !0,
                  privacy: {
                    view: "nobody"
                  }
                }),
                method: "POST",
                headers: {
                  Authorization: `bearer ${_v0}`,
                  Accept: "application/vnd.vimeo.*+json;version=3.4",
                  "Content-Type": "application/json"
                }
              });
            if (_v1.ok) return (await _v1.json()).uri.split("/videos/")[1];
            throw _v1;
          }
        }),
        _v12 = _v433(_v424[_v9?.locale || "en"]),
        [_v13, _v14] = (0, _v3.useState)(!1),
        _v15 = (0, _v250.translate)({
          singular: "Start with a sample video",
          dictionary: {
            es: {
              singular: "Comenzar con un video de muestra"
            },
            "de-DE": {
              singular: "Mit einem Beispielvideo beginnen"
            },
            "fr-FR": {
              singular: "Commencez par un exemple de vidéo"
            },
            "ja-JP": {
              singular: "サンプル動画から開始"
            },
            "ko-KR": {
              singular: "샘플 동영상으로 시작하기"
            },
            "pt-BR": {
              singular: "Comece com um vídeo de amostra"
            },
            "zh-CN": {
              singular: "从示例视频开始"
            }
          }
        }),
        _v16 = (0, _v250.translate)({
          singular: "Try it",
          dictionary: {
            es: {
              singular: "Prúebalo"
            },
            "de-DE": {
              singular: "Probieren"
            },
            "fr-FR": {
              singular: "J'essaye !"
            },
            "ja-JP": {
              singular: "試す"
            },
            "ko-KR": {
              singular: "체험하기"
            },
            "pt-BR": {
              singular: "Experimente"
            },
            "zh-CN": {
              singular: "试一试"
            }
          }
        }),
        _v17 = async () => {
          _v14(!0), _v3("vimeo.start_new_video_flow", {
            product: "dynamic_recommendations",
            feature: "demo_video",
            location: "recommendation_card_upload_widget",
            element: "button",
            copy: _v16,
            flow: "demo_video",
            entity_type: "video",
            schemaVersion: -1
          });
          try {
            let _v0 = await _v11();
            if (!_v0) return;
            _v4({
              eventName: "demo_video",
              page: "ss_lihp",
              feature: "demo_video",
              copyText: _v16,
              location: "recommendation_card_upload",
              type: "general",
              target: "upload_page",
              elementName: "recommendation_card_upload",
              userState: _v0,
              path: "/",
              targetPath: `/manage/videos/${_v0}`
            }), _v7.push(`/manage/videos/${_v0}`);
          } catch (_v0) {
            _v8({
              content: "Something went wrong",
              status: "error"
            });
          } finally {
            _v14(!1);
          }
        };
      return (0, _v1.jsx)(_v57.Box, {
        width: "100%",
        height: "100%",
        ref: _v5,
        "data-testid": "whatsnext-upload-sample-widget",
        children: (0, _v1.jsx)(_v450, {
          size: _v10,
          title: _v15,
          subtitle: (0, _v250.translate)({
            singular: "Explore Vimeo's powerful video tools with a test video",
            dictionary: {
              es: {
                singular: "Descubra las eficaces herramientas de video de Vimeo con un video de prueba"
              },
              "de-DE": {
                singular: "Entdecken Sie die leistungsstarken Videotools von Vimeo – mit einem Testvideo"
              },
              "fr-FR": {
                singular: "Découvrez la puissance des outils vidéo de Vimeo en regardant une vidéo de test"
              },
              "ja-JP": {
                singular: "テスト動画でVimeoの強力な動画ツールをチェック"
              },
              "ko-KR": {
                singular: "테스트 동영상을 통해 Vimeo의 강력한 동영상 도구를 살펴보세요."
              },
              "pt-BR": {
                singular: "Explore as poderosas ferramentas de vídeo do Vimeo com um vídeo de teste"
              },
              "zh-CN": {
                singular: "通过测试视频深入了解 Vimeo 强大的视频工具"
              }
            }
          }),
          tag: {
            text: (0, _v250.translate)({
              singular: "What's next",
              dictionary: {
                es: {
                  singular: "¿Qué sigue?"
                },
                "de-DE": {
                  singular: "Wie geht es jetzt weiter?"
                },
                "fr-FR": {
                  singular: "Et après ?"
                },
                "ja-JP": {
                  singular: "次のステップ"
                },
                "ko-KR": {
                  singular: "다음 단계"
                },
                "pt-BR": {
                  singular: "E agora?"
                },
                "zh-CN": {
                  singular: "下一步做什么"
                }
              }
            })
          },
          iframeSrc: _v12,
          primaryCta: {
            text: _v16,
            isLoading: _v13,
            onClick: _v17
          },
          bpImpressionContext: {
            copy: _v15,
            feature: "upload",
            location: "recommendation_card_upload_widget"
          },
          isShowCloseButton: !1
        })
      });
    },
    _v476 = {
      "recent-videos": ({
        widgetPlacement: _v0,
        onScreen: _v1
      }) => {
        let {
            myVideos: _v2,
            isLoading: _v3,
            mutate: _v4
          } = _v144(),
          {
            trackHomepageRecentsCarouselNavigated: _v5,
            trackHomepageRecentsVideoClicked: _v6,
            trackHomepageRecentsThumbnailQuickActionClicked: _v7
          } = _v14(),
          {
            notifyItemMoveSuccess: _v8,
            notifyItemMoveToWorkspaceSuccess: _v9
          } = (0, _v319.useNotifications)(),
          _v10 = (0, _v42.useViewer)(),
          _v11 = _v10?.teamUser?.ownerId ?? _v10?.user?.id,
          {
            openMoveModal: _v12
          } = (0, _v386.useMoveModal)(),
          _v13 = (0, _v3.useRef)(null),
          [_v14, _v15] = (0, _v3.useState)(!1),
          [_v16, _v17] = (0, _v3.useState)(!0),
          {
            capabilities: _v18
          } = (0, _v6.useCapability)(["canSeeUpsellModalOnShare", "hasVideoReviewPageDemo", "hasMultipleReviewLinks", "hasProhibitMultipleReviewLinks"], _v11),
          {
            contentSpaceEnabled: _v19
          } = (0, _v78.useContentSpaceEnabled)(_v11);
        (0, _v385.useUploadLifecycle)((_v0, _v1) => {
          _v1.clipId && _v4();
        }, []);
        let _v20 = _v19 ? (0, _v32.translate)({
            singular: "Team library",
            dictionary: {
              es: {
                singular: "Biblioteca del equipo"
              },
              "de-DE": {
                singular: "Teambibliothek"
              },
              "fr-FR": {
                singular: "Bibliothèque de l'équipe"
              },
              "ja-JP": {
                singular: "チームライブラリ"
              },
              "ko-KR": {
                singular: "팀 라이브러리"
              },
              "pt-BR": {
                singular: "Biblioteca da equipe"
              },
              "zh-CN": {
                singular: "团队视频库"
              }
            }
          }) : (0, _v32.translate)({
            singular: "Library",
            dictionary: {
              es: {
                singular: "Biblioteca"
              },
              "de-DE": {
                singular: "Bibliothek"
              },
              "fr-FR": {
                singular: "Bibliothèque"
              },
              "ja-JP": {
                singular: "ライブラリ"
              },
              "ko-KR": {
                singular: "라이브러리"
              },
              "pt-BR": {
                singular: "Biblioteca"
              },
              "zh-CN": {
                singular: "视频库"
              }
            }
          }),
          [_v21] = (0, _v308.useMediaQuery)("(max-width: 375px)"),
          _v22 = (0, _v3.useMemo)(() => _v2 ?? [], [_v2]),
          _v23 = !!_v18.canSeeUpsellModalOnShare,
          _v24 = !!_v18.hasVideoReviewPageDemo,
          _v25 = !!_v18.hasMultipleReviewLinks,
          _v26 = !!_v18.hasProhibitMultipleReviewLinks;
        return (_v199("recents_widget", _v0, _v3, _v1, {
          isEmptyState: !1,
          webContextCopy: "recents"
        }), (0, _v3.useEffect)(() => {
          _v3 || _v2?.length != 0 || setTimeout(() => {
            _v17(!1);
          }, 500);
        }, [_v3, _v2?.length]), _v3 || _v14) ? (0, _v1.jsx)(_v244, {
          children: (0, _v1.jsx)(_v311.Playlist, {
            w: "100%",
            children: (0, _v1.jsx)(_v315.CarouselSkeleton, {
              cardWidth: `${_v21 ? 240 : 270}px`
            })
          })
        }) : _v22?.length > 0 ? (0, _v1.jsx)(_v244, {
          "data-id": "recents_widget",
          ref: _v13,
          children: (0, _v1.jsxs)(_v311.Playlist, {
            gap: "sm",
            w: "100%",
            children: [(0, _v1.jsx)(_v312.PlaylistHeader, {
              pt: 0,
              header: {
                text: (0, _v32.translate)({
                  singular: "Recents",
                  dictionary: {
                    es: {
                      singular: "Recientes"
                    },
                    "de-DE": {
                      singular: "Neu"
                    },
                    "fr-FR": {
                      singular: "Récents"
                    },
                    "ja-JP": {
                      singular: "最近"
                    },
                    "ko-KR": {
                      singular: "최근"
                    },
                    "pt-BR": {
                      singular: "Recentes"
                    },
                    "zh-CN": {
                      singular: "最近"
                    }
                  }
                }),
                headerLinkDataId: "recents_header_link"
              },
              children: (0, _v1.jsx)(_v314.PlaylistCarouselNavigation, {
                nextDataId: "next-button-recents",
                prevDataId: "prev-button-recents",
                onNextClick: () => {
                  _v365({
                    actionType: "click",
                    copy: ">",
                    element: "scroll",
                    feature: "widgets",
                    eventName: "vimeo.scroll_in_widget",
                    teamUser: _v10?.teamUser,
                    location: "recents_widget",
                    entityType: "widget",
                    flow: "forward",
                    additionalFields: {
                      widget_name: "recents_widget",
                      is_dismissable: !1,
                      is_dynamic_recommendations_widget: !1,
                      is_empty_state: !1
                    }
                  }), _v5({
                    homepageRecentsDirection: "next"
                  });
                },
                onPrevClick: () => {
                  _v365({
                    actionType: "click",
                    copy: "<",
                    element: "scroll",
                    feature: "widgets",
                    eventName: "vimeo.scroll_in_widget",
                    teamUser: _v10?.teamUser,
                    location: "recents_widget",
                    flow: "backward"
                  }), _v5({
                    homepageRecentsDirection: "previous"
                  });
                }
              }, "carousel-navigation-start-recents" + _v22[0]?.uri)
            }), (0, _v1.jsx)(_v313.Carousel, {
              mb: -4,
              children: _v22.map((_v0, _v1) => {
                let _v2 = _v356(_v0?.lastUserActionEventDate || _v0?.releaseTime, _v10?.locale),
                  _v3 = _v357(_v0?.user?.uri);
                return (0, _v1.jsx)(_v57.Box, {
                  w: (0, _v44.rem)(292),
                  children: (0, _v1.jsx)(_v366, {
                    subtitle: _v2,
                    video: _v0,
                    viewer: _v10,
                    dataId: `recents-video-card-${_v1}`,
                    bpLocation: "recents_widget",
                    showPrivacyBadge: !0,
                    onClick: () => _v6({
                      clipId: String(_v357(_v0?.uri))
                    }),
                    hoverActions: (0, _v1.jsx)(_v328.HoverActions, {
                      entity: _v0,
                      type: "video",
                      onQuickActionClick: _v0 => {
                        _v7({
                          clipId: String(_v357(_v0?.uri)),
                          homepageRecentsThumbnailQuickAction: _v0
                        });
                      }
                    }),
                    actionsMenu: (0, _v1.jsx)(_v412, {
                      hasShareUpsell: _v23,
                      hasReviewPageLinkUpsell: _v24,
                      hasMultipleReviewLinks: _v25,
                      hasProhibitMultipleReviewLinks: _v26,
                      setIsDeletingVideo: _v15,
                      onMove: () => {
                        var _v0, _v1, _v2;
                        _v0 = _v0?.name, _v1 = _v0?.uri, _v2 = _v0?.parentProject?.uri, _v12({
                          activeFolderURI: _v2 || "",
                          feature: "lihp",
                          location: "video_card_menu",
                          items: [{
                            name: _v0,
                            parentFolder: {
                              uri: _v2 || "",
                              isPrivateToUser: _v0?.parentProject?.isPrivateToUser
                            },
                            type: "video",
                            uri: _v1
                          }],
                          onMoveSuccess: ({
                            selectedDestination: _v0,
                            items: _v1,
                            destinationWorkspaceId: _v2,
                            destinationWorkspaceName: _v3
                          }) => {
                            if (_v2 && _v3) {
                              let _v0 = "root" === _v0 ? _v20 : _v0.name,
                                _v1 = "root" === _v0 ? "/library" : _v358(_v0.uri);
                              _v9(_v1[0].name, {
                                label: _v0,
                                workspaceName: _v3
                              }, () => {
                                _v10 && (0, _v355.switchTeam)(_v2, _v10.xsrft).finally(() => {
                                  window.location.href = _v358(_v1);
                                });
                              });
                            } else "root" !== _v0 && _v8(_v1[0].name, {
                              label: _v0.name,
                              link: _v358(_v0.uri)
                            });
                          },
                          teamOwnerId: _v3
                        });
                      },
                      video: _v0
                    })
                  }, _v357(_v0?.uri))
                }, _v357(_v0?.uri));
              })
            })]
          }, "playlist-recents" + _v22[0]?.uri)
        }) : _v16 ? (0, _v1.jsx)(_v244, {
          animation: `${_v413} 0.5s ease-in`,
          children: (0, _v1.jsx)(_v311.Playlist, {
            w: "100%",
            children: (0, _v1.jsx)(_v315.CarouselSkeleton, {
              cardWidth: `${_v21 ? 240 : 270}px`
            })
          })
        }) : null;
      },
      "my-feed": ({
        widgetPlacement: _v0,
        onScreen: _v1
      }) => {
        let {
            myFeedVideos: _v2,
            isLoading: _v3
          } = function () {
            let _v0 = (0, _v42.useViewer)(),
              {
                data: _v1,
                ..._v2
              } = (0, _v383.useGetUserFeed)(() => {
                let _v0 = _v0?.user?.id;
                return _v0 ? {
                  select: ["clip.badge.type", "clip.configUrl", "clip.createdTime", "clip.user.name", "clip.user.pictures.sizes.link", "clip.pictures.sizes.link", "clip.name", "clip.duration", "clip.isColdStorage", "clip.link", "clip.stats.plays", "clip.uri"],
                  where: {
                    userId: _v0
                  },
                  query: {
                    perPage: 10,
                    page: 1,
                    sizes: ["270x152", "300x169"]
                  }
                } : null;
              }, {
                revalidateOnFocus: !1,
                errorRetryInterval: 0,
                errorRetryCount: 1
              });
            return {
              myFeedVideos: _v1?.data.map(_v0 => ({
                ..._v0.clip
              })).filter(_v0 => !_v0.isColdStorage) ?? [],
              ..._v2
            };
          }(),
          _v4 = (0, _v42.useViewer)(),
          [_v5] = (0, _v308.useMediaQuery)("(max-width: 375px)"),
          _v6 = (0, _v180.useColorModeValue)("text-secondary", "text-primary");
        if (_v199("my_feed_widget", _v0, _v3, _v1, {
          isEmptyState: !1,
          productAnalyticsContextProduct: "viewer_home",
          webContextCopy: "feed"
        }), _v3) return (0, _v1.jsx)(_v244, {
          children: (0, _v1.jsx)(_v311.Playlist, {
            w: "100%",
            children: (0, _v1.jsx)(_v315.CarouselSkeleton, {
              cardWidth: `${_v5 ? 240 : 270}px`,
              numOfLines: 3
            })
          })
        });
        if (_v2?.length === 0) return (0, _v1.jsx)(_v244, {
          height: (0, _v44.rem)(350),
          children: (0, _v1.jsx)(_v254, {
            heading: (0, _v32.translate)({
              singular: "Find something to watch",
              dictionary: {
                es: {
                  singular: "Encuentre contenido para ver"
                },
                "de-DE": {
                  singular: "Suchen Sie sich etwas aus, was du dir ansehen möchtest"
                },
                "fr-FR": {
                  singular: "Trouvez quelque chose à regarder"
                },
                "ja-JP": {
                  singular: "視聴したい作品を探す"
                },
                "ko-KR": {
                  singular: "볼만한 콘텐츠 찾기"
                },
                "pt-BR": {
                  singular: "Encontre algo para assistir"
                },
                "zh-CN": {
                  singular: "寻找想观看的内容"
                }
              }
            }),
            subheading: (0, _v32.translate)({
              singular: "See amazing videos from people you follow",
              dictionary: {
                es: {
                  singular: "Mire videos increíbles de personas a las que sigue"
                },
                "de-DE": {
                  singular: "Sehen Sie sich faszinierende Videos an von Personenn, denen Sie folgen"
                },
                "fr-FR": {
                  singular: "Découvrez des vidéos sensationnelles créées par les personnes que vous suivez"
                },
                "ja-JP": {
                  singular: "フォローしているユーザーの素晴らしい動画を鑑賞しましょう"
                },
                "ko-KR": {
                  singular: "내가 팔로우하는 사람들의 멋진 동영상 보기"
                },
                "pt-BR": {
                  singular: "Veja vídeos incríveis das pessoas que você segue"
                },
                "zh-CN": {
                  singular: "通过您关注的人查找精彩视频"
                }
              }
            }),
            btnText: (0, _v32.translate)({
              singular: "Browse all videos",
              dictionary: {
                es: {
                  singular: "Buscar todos los videos"
                },
                "de-DE": {
                  singular: "Alle Videos durchstöbern"
                },
                "fr-FR": {
                  singular: "Parcourir toutes les vidéos"
                },
                "ja-JP": {
                  singular: "すべての動画を閲覧"
                },
                "ko-KR": {
                  singular: "모든 동영상 둘러보기"
                },
                "pt-BR": {
                  singular: "Navegar por todos os vídeos"
                },
                "zh-CN": {
                  singular: "浏览所有视频"
                }
              }
            }),
            onBtnClick: () => {
              window.location.pathname = "/watch";
            },
            icon: (0, _v1.jsx)(_v382.Desktop, {
              height: "3.5rem",
              width: "3.5rem",
              color: _v6,
              mb: "1.1875rem"
            })
          })
        });
        let _v7 = "/my-feed",
          _v8 = _v2?.map(_v0 => {
            let _v1 = (0, _v32.translate)({
                singular: "{COUNT} view",
                plural: "{COUNT} views",
                count: _v0?.stats?.plays ?? 0,
                replacements: {
                  COUNT: (0, _v32.humanize)(_v0?.stats?.plays ?? 0)
                },
                dictionary: {
                  es: {
                    singular: "{COUNT} vista",
                    plural: "{COUNT} vistas"
                  },
                  "de-DE": {
                    singular: "{COUNT} Ansicht",
                    plural: "{COUNT} Ansichten"
                  },
                  "fr-FR": {
                    singular: "{COUNT} vue",
                    plural: "{COUNT} vues"
                  },
                  "ja-JP": {
                    singular: "視聴回数: {COUNT}",
                    plural: "視聴回数: {COUNT}"
                  },
                  "ko-KR": {
                    singular: "{COUNT}회",
                    plural: "{COUNT}회"
                  },
                  "pt-BR": {
                    singular: "{COUNT} visualização",
                    plural: "{COUNT} visualizações"
                  },
                  "zh-CN": {
                    singular: "{COUNT} 观看",
                    plural: "{COUNT} 次观看"
                  }
                }
              }),
              _v2 = _v356(_v0.createdTime, _v4?.locale),
              _v3 = [_v0?.stats?.plays ? _v1 : null, _v2].filter(Boolean).join(" • "),
              _v4 = _v357(_v0.uri);
            return (0, _v1.jsx)(_v57.Box, {
              w: (0, _v44.rem)(292),
              children: (0, _v1.jsx)(_v366, {
                subtitle: _v3,
                viewer: _v4,
                video: _v0,
                dataId: "my-feed-video-card",
                bpLocation: "my_feed_widget"
              })
            }, _v4);
          });
        return (0, _v1.jsx)(_v244, {
          "data-id": "my_feed_widget",
          children: (0, _v1.jsxs)(_v311.Playlist, {
            gap: "sm",
            w: "100%",
            children: [(0, _v1.jsx)(_v312.PlaylistHeader, {
              pt: 0,
              onClick: () => {
                window.location.href = _v7, _v365({
                  actionType: "click",
                  copy: "feed",
                  element: "button",
                  feature: "widgets",
                  eventName: "vimeo.content_navigation",
                  teamUser: _v4?.teamUser,
                  location: "my_feed_widget",
                  product: "community",
                  target: "my_feed",
                  targetPath: _v7
                });
              },
              header: {
                text: (0, _v32.translate)({
                  singular: "Get inspired",
                  dictionary: {
                    es: {
                      singular: "Inspírate"
                    },
                    "de-DE": {
                      singular: "Lass dich inspirieren"
                    },
                    "fr-FR": {
                      singular: "Inspirez-vous"
                    },
                    "ja-JP": {
                      singular: "インスピレーションを得る"
                    },
                    "ko-KR": {
                      singular: "영감을 얻으세요"
                    },
                    "pt-BR": {
                      singular: "Inspire-se"
                    },
                    "zh-CN": {
                      singular: "获取灵感"
                    }
                  }
                }),
                to: _v7,
                headerLinkDataId: "my_feed_header_link"
              },
              children: (0, _v1.jsx)(_v314.PlaylistCarouselNavigation, {
                nextDataId: "next-button-my-feed",
                prevDataId: "prev-button-my-feed",
                onNextClick: () => _v365({
                  actionType: "click",
                  copy: ">",
                  element: "scroll",
                  feature: "widgets",
                  eventName: "vimeo.scroll_in_widget",
                  teamUser: _v4?.teamUser,
                  location: "my_feed_widget",
                  entityType: "widget",
                  flow: "forward"
                }),
                onPrevClick: () => _v365({
                  actionType: "click",
                  copy: "<",
                  element: "scroll",
                  feature: "widgets",
                  eventName: "vimeo.scroll_in_widget",
                  teamUser: _v4?.teamUser,
                  location: "my_feed_widget",
                  entityType: "widget",
                  flow: "backward"
                })
              })
            }), (0, _v1.jsx)(_v313.Carousel, {
              mb: -4,
              children: _v8
            })]
          })
        });
      },
      "featured-content": ({
        viewData: _v0,
        width: _v1,
        widgetPlacement: _v2,
        onScreen: _v3
      }) => {
        let _v4 = _v0?.featuredContent?.featuredItem || null,
          _v5 = _v0?.featuredContent?.canEdit || !1,
          _v6 = _v305(_v1),
          _v7 = (0, _v180.useColorModeValue)("text-secondary", "text-primary"),
          {
            isOpen: _v8,
            onOpen: _v9,
            onClose: _v10
          } = (0, _v69.useDisclosure)(),
          _v11 = (0, _v3.useContext)(_v17.ViewerContext),
          _v12 = _v11?.locale ?? navigator.language,
          _v13 = _v11?.teamUser,
          _v14 = _v13?.ownerId ?? _v11?.user?.id,
          _v15 = !!(!_v13 || "Owner" === _v13.plainTextPermissionLevel || "Admin" === _v13.plainTextPermissionLevel),
          _v16 = _v4?.type ? "video" === _v4.type ? _v4.video : _v4.liveEvent : null,
          [_v17, _v18] = (0, _v3.useState)(_v16 ?? null),
          [_v19, _v20] = (0, _v3.useState)(_v306(_v17));
        (0, _v3.useEffect)(() => {
          _v17 && !(0, _v251.default)(_v16, _v17) && _v20(_v306(_v17));
        }, [_v16, _v20, _v17]);
        let _v21 = !_v17 && !_v5,
          _v22 = !_v17 && !!_v5;
        return (_v199("featured_videos_widget", _v2, _v21, _v3, {
          isEmptyState: _v22,
          webContextCopy: _v17 ? _v19 ? _v17.title : _v17.name : null
        }), _v21) ? (0, _v1.jsx)(_v1.Fragment, {}) : (0, _v1.jsxs)(_v244, {
          height: _v6.height,
          children: [_v22 ? (0, _v1.jsx)(_v254, {
            heading: (0, _v250.translate)({
              singular: "Add a featured video or event",
              dictionary: {
                es: {
                  singular: "Agregue un video o evento destacado"
                },
                "de-DE": {
                  singular: "Fügen Sie ein empfohlenes Video oder Event hinzu "
                },
                "fr-FR": {
                  singular: "Ajoutez une vidéo à la une ou un événement"
                },
                "ja-JP": {
                  singular: "注目の動画またはイベントを追加"
                },
                "ko-KR": {
                  singular: "대표 동영상 또는 이벤트 추가"
                },
                "pt-BR": {
                  singular: "Adicione um vídeo ou evento em destaque"
                },
                "zh-CN": {
                  singular: "添加特色视频或活动"
                }
              }
            }),
            subheading: (0, _v250.translate)({
              singular: "Choose what your team sees first",
              dictionary: {
                es: {
                  singular: "Elija lo que su equipo verá primero"
                },
                "de-DE": {
                  singular: "Wählen Sie aus, was Ihr Team zuerst sieht"
                },
                "fr-FR": {
                  singular: "Choisissez ce que votre équipe voit en premier"
                },
                "ja-JP": {
                  singular: "チームに最初に表示するものを選択"
                },
                "ko-KR": {
                  singular: "팀원들이 가장 먼저 볼 콘텐츠 선택"
                },
                "pt-BR": {
                  singular: "Escolha o que sua equipe vê primeiro"
                },
                "zh-CN": {
                  singular: "选择团队首先看到的内容"
                }
              }
            }),
            btnText: (0, _v250.translate)({
              singular: "Select video or event",
              dictionary: {
                es: {
                  singular: "Seleccionar video o evento"
                },
                "de-DE": {
                  singular: "Video oder Event auswählen"
                },
                "fr-FR": {
                  singular: "Sélectionner une vidéo ou un événement"
                },
                "ja-JP": {
                  singular: "動画またはイベントを選択"
                },
                "ko-KR": {
                  singular: "동영상 또는 이벤트 선택"
                },
                "pt-BR": {
                  singular: "Selecionar vídeo ou evento"
                },
                "zh-CN": {
                  singular: "选择视频或活动"
                }
              }
            }),
            onBtnClick: _v9,
            icon: (0, _v1.jsx)(_v252.VideosStack, {
              width: "lg",
              height: "lg",
              mb: "4",
              color: _v7
            })
          }) : (0, _v1.jsx)(_v307, {
            width: _v1,
            featuredItem: _v17,
            isEvent: _v19,
            canUpdate: _v5,
            locale: _v12,
            openManageModal: _v9
          }), (0, _v1.jsx)(_v293, {
            isOpen: _v8,
            onClose: _v10,
            ownerId: _v14,
            setFeaturedItem: _v18,
            savedItemUri: _v17?.uri ?? null,
            shouldIncludeAllPrivacies: _v15
          })]
        });
      },
      "featured-folders": ({
        width: _v0,
        widgetPlacement: _v1,
        onScreen: _v2,
        viewData: _v3
      }) => {
        let _v4 = (0, _v42.useViewer)(),
          _v5 = _v4?.teamUser?.ownerId ?? _v4?.user?.id ?? 0,
          {
            data: _v6,
            isLoading: _v7,
            mutate: _v8
          } = (0, _v310.useGetUserProjects)(() => _v5 ? {
            query: {
              pinnedOnly: !0,
              perPage: 100
            },
            select: _v320,
            where: {
              userId: _v5
            },
            headers: {
              Accept: "application/vnd.vimeo.*+json;version=3.4.13"
            }
          } : null, {
            revalidateOnFocus: !1
          }),
          _v9 = _v6?.data || [],
          _v10 = _v7 ? null : !_v9.length;
        return _v199("featured_folders_widget", _v1, _v7, _v2, {
          isEmptyState: _v10,
          webContextCopy: "featured folders"
        }), (0, _v1.jsx)(_v339, {
          width: _v0,
          ownerId: _v5,
          widgetPlacement: _v1,
          featuredFolders: _v9,
          isLoading: _v7,
          canAddFolders: !!_v3?.featuredFolders?.canPinFolders,
          isEmptyState: _v10,
          mutateFolders: _v8
        });
      },
      "watch-history": _v380,
      "cold-storage": ({
        viewData: _v0
      }) => {
        let _v1 = (0, _v42.useViewer)(),
          _v2 = _v1?.user?.id,
          _v3 = ((_v0, _v1 = 3) => {
            let {
              data: _v2
            } = (0, _v284.useGetUserVideos)(() => _v0 ? {
              where: {
                userId: _v0
              },
              select: _v343,
              query: {
                filter: "cold_storage"
              },
              headers: {
                Accept: "application/vnd.vimeo.*+json;version=3.4.1"
              }
            } : null);
            return (0, _v3.useMemo)(() => {
              let _v0 = _v0 => ({
                  uri: `mocked_uri_${_v0}`,
                  name: `Mocked Video ${_v0 + 1}`,
                  pictures: {
                    sizes: [{
                      link: _v342,
                      height: 166,
                      width: 295
                    }]
                  }
                }),
                _v1 = [...(_v2?.data.slice(0, _v1) || [])];
              for (; _v1.length < _v1;) _v1.push(_v0(_v1.length));
              return _v1;
            }, [_v2, _v1]);
          })(_v2, 3),
          _v4 = _v0?.coldStorage?.videos ?? _v3,
          {
            trackColdStorageUxClicked: _v5
          } = (0, _v157.useColdStorageTracking)();
        return _v2 || _v0?.coldStorage?.videos?.length ? (0, _v1.jsx)(_v244, {
          background: "fill-surface",
          justifyContent: "center",
          padding: "2xl",
          children: (0, _v1.jsxs)(_v43.Flex, {
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            children: [(0, _v1.jsx)(_v43.Flex, {
              position: "relative",
              height: "md",
              children: _v4?.slice(0, 3).map((_v0, _v1) => (0, _v1.jsxs)(_v57.Box, {
                border: "3px solid",
                borderColor: "lightBlueAlpha.500",
                borderRadius: "4px",
                position: "absolute",
                left: 0 === _v1 ? "0px" : 1 === _v1 ? "-5px" : "-10px",
                bottom: "0",
                style: {
                  transform: 1 === _v1 ? "rotate(-16deg)" : 2 === _v1 ? "rotate(-32deg)" : "none",
                  transformOrigin: "bottom left",
                  zIndex: 3 - _v1
                },
                children: [(0, _v1.jsx)(_v24.Image, {
                  src: _v0.pictures.sizes[0]?.link,
                  fallbackSrc: _v342,
                  boxSize: "29px",
                  alt: _v0.name || (0, _v250.translate)({
                    singular: "Video thumbnail",
                    dictionary: {
                      es: {
                        singular: "Miniatura de vídeo"
                      },
                      "de-DE": {
                        singular: "Video-Vorschaubild"
                      },
                      "fr-FR": {
                        singular: "Vignette vidéo"
                      },
                      "ja-JP": {
                        singular: "動画サムネイル"
                      },
                      "ko-KR": {
                        singular: "동영상 섬네일"
                      },
                      "pt-BR": {
                        singular: "Miniatura de foto do vídeo"
                      },
                      "zh-CN": {
                        singular: "视频缩略图"
                      }
                    }
                  })
                }), 0 === _v1 && (0, _v1.jsx)(_v43.Flex, {
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  bottom: "50%",
                  right: "50%",
                  marginRight: (0, _v44.rem)(-9),
                  marginBottom: (0, _v44.rem)(-9),
                  background: "gray.900",
                  boxSize: "17.5",
                  borderRadius: "4px",
                  children: (0, _v1.jsx)(_v340.Lock, {
                    boxSize: "17.5",
                    color: "white"
                  })
                })]
              }, _v0.uri))
            }), (0, _v1.jsx)(_v31.Text, {
              color: "text-primary",
              variant: "heading-md",
              fontSize: "header-2xl",
              marginTop: "xs",
              textAlign: "center",
              children: (0, _v250.translate)({
                singular: "You’re over your storage limit",
                dictionary: {
                  es: {
                    singular: "Superó su límite de almacenamiento"
                  },
                  "de-DE": {
                    singular: "Sie haben Ihr Speicherlimit überschritten"
                  },
                  "fr-FR": {
                    singular: "Vous avez dépassé votre limite de stockage"
                  },
                  "ja-JP": {
                    singular: "ストレージ容量の上限を超えています"
                  },
                  "ko-KR": {
                    singular: "저장 공간 한도를 초과했습니다."
                  },
                  "pt-BR": {
                    singular: "Você ultrapassou o limite de armazenamento"
                  },
                  "zh-CN": {
                    singular: "您已超出存储空间上限"
                  }
                }
              })
            }), (0, _v1.jsx)(_v43.Flex, {
              flexDirection: "column",
              alignItems: "center",
              children: (0, _v1.jsx)(_v31.Text, {
                color: "text-secondary",
                variant: "body-md",
                textAlign: "center",
                children: (0, _v250.translate)({
                  singular: "You’ve downgraded to a free account. Some of your videos may be locked and you cannot upload more.",
                  dictionary: {
                    es: {
                      singular: "Cambió a una cuenta gratuita. Es posible que algunos de sus videos estén bloqueados y no pueda subir más."
                    },
                    "de-DE": {
                      singular: "Sie haben Ihr Konto auf ein kostenloses Konto herabgestuft. Einige Ihrer Videos sind möglicherweise gesperrt, und Sie können keine weiteren hochladen."
                    },
                    "fr-FR": {
                      singular: "Vous êtes passé à un compte gratuit. Certaines de vos vidéos peuvent être verrouillées et vous ne pouvez plus en mettre d'autres en ligne."
                    },
                    "ja-JP": {
                      singular: "無料アカウントにダウングレードしました。一部の動画がロックされ、これ以上動画をアップロードできない場合があります。"
                    },
                    "ko-KR": {
                      singular: "무료 계정으로 다운그레이드되었습니다. 일부 동영상이 잠길 수 있으며 더 이상 업로드할 수 없습니다."
                    },
                    "pt-BR": {
                      singular: "Sua conta voltou para a versão gratuita. Alguns vídeos podem estar bloqueados e não é possível fazer novos uploads."
                    },
                    "zh-CN": {
                      singular: "您已降级为免费帐户。您的一些视频可能已被锁定，无法上传更多视频。"
                    }
                  }
                })
              })
            }), (0, _v1.jsxs)(_v57.Box, {
              gap: "sm",
              display: "flex",
              marginTop: "lg",
              children: [(0, _v1.jsx)(_v22.Button, {
                as: "a",
                variant: "secondary",
                href: "/library",
                onClick: () => {
                  _v5({
                    element: "homepage_hero_delete_videos_button"
                  });
                },
                children: (0, _v250.translate)({
                  singular: "Delete videos",
                  dictionary: {
                    es: {
                      singular: "Eliminar videos"
                    },
                    "de-DE": {
                      singular: "Videos löschen"
                    },
                    "fr-FR": {
                      singular: "Supprimer les vidéos"
                    },
                    "ja-JP": {
                      singular: "動画を削除する"
                    },
                    "ko-KR": {
                      singular: "동영상 삭제"
                    },
                    "pt-BR": {
                      singular: "Excluir vídeos"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v341.UpgradeBadge, {
                size: "md",
                flex: "1",
                noMargin: !0,
                onClick: () => {
                  _v5({
                    element: "homepage_hero_upgrade_button"
                  });
                },
                modalConfig: {},
                modalTracking: {
                  params: {
                    page: "home",
                    feature: "storage",
                    location: "cold_storage_widget",
                    upsell_name: "cold_storage_over_limit"
                  },
                  paywallTracking: {
                    paywallTrigger: "cold_storage_widget_upgrade_button",
                    paywallLocation: "cold_storage_widget",
                    paywallType: "popup",
                    paywallFeature: "storage_limit"
                  }
                }
              })]
            })]
          })
        }) : null;
      },
      whatsnext: ({
        width: _v0
      }) => {
        let _v1 = (0, _v3.useContext)(_v17.ViewerContext),
          {
            removeWidget: _v2
          } = _v145(),
          _v3 = _v1?.user?.id,
          {
            data: _v4,
            isLoading: _v5
          } = _v415(() => _v3 ? {
            select: ["recommendation"],
            where: {
              userId: _v3
            }
          } : null, {
            revalidateOnFocus: !1,
            errorRetryInterval: 0,
            errorRetryCount: 1
          }),
          _v6 = _v4?.data,
          _v7 = !_v5 && Array.isArray(_v6) && 0 === _v6.length;
        if ((0, _v3.useEffect)(() => {
          _v7 && _v2("whatsnext");
        }, [_v2, _v7]), _v7) return null;
        if (_v5 || !_v6) return (0, _v1.jsx)(_v244, {
          children: (0, _v1.jsx)(_v315.WhatsNextSkeleton, {
            cardWidth: _v0
          })
        });
        let {
            bannerToShow: _v8,
            clip: _v9,
            suggestDemoVideo: _v10,
            currentUserState: _v11
          } = _v6[0]?.recommendation,
          _v12 = (_v0 => {
            if (_v0) return parseInt(_v0.split("/videos/")[1], 10);
          })(_v9?.uri);
        switch (_v8) {
          case "player_settings":
            if (_v12) return (0, _v1.jsx)(_v451, {
              clipId: _v12
            });
            break;
          case "upgrade_promo":
            return (0, _v1.jsx)(_v466, {});
          case "team_user":
            return (0, _v1.jsx)(_v468, {});
          case "share":
            if (_v12) return (0, _v1.jsx)(_v463, {
              clipId: _v12
            });
            break;
          case "change_privacy":
            if (_v12) return (0, _v1.jsx)(_v471, {
              clipId: _v12,
              userState: _v11
            });
            break;
          case "change_privacy_or_upgrade":
            if (_v12) return (0, _v1.jsx)(_v471, {
              clipId: _v12,
              showUpgrade: !0,
              userState: _v11
            });
            break;
          case "upload":
            return _v10 ? (0, _v1.jsx)(_v475, {
              userState: _v11
            }) : (0, _v1.jsx)(_v472, {});
          case "create_folder":
            return (0, _v1.jsx)(_v474, {});
        }
        return (0, _v1.jsx)(_v1.Fragment, {});
      },
      analytics: ({
        width: _v0
      }) => {
        let _v1,
          _v2 = (0, _v3.useMemo)(() => _v247.DateTime.utc(), []),
          _v3 = (0, _v3.useContext)(_v17.ViewerContext),
          _v4 = (_v1 = (0, _v42.useViewer)(), (0, _v3.useCallback)(({
            copy: _v0,
            widgetName: _v1,
            emptyState: _v2,
            location: _v3,
            widgetPlacement: _v4
          }) => {
            (0, _v124.sendBpEventWithContexts)("vimeo.widget_impression", {
              view_context: new _v4.EventContext("view_context", 7, {
                view_type: "impression",
                feature: null,
                is_empty_state: null
              }),
              ...(0, _v123.buildWebBpContext)({
                page_name: "logged_in_home_page",
                referrer_page_name: null,
                referrer: document.referrer,
                path: window.location.pathname,
                target: null,
                copy: _v0
              }),
              ...(0, _v120.buildProductAnalyticsBpContext)({
                product: "analysis",
                feature: "widgets",
                location: _v3,
                modal_name: null,
                flow: null,
                element: "widget",
                entity_type: "widget"
              }),
              ...(0, _v121.buildTeamBpContextFromTeamUser)(_v1?.teamUser),
              third_party_integration_context: new _v4.EventContext("third_party_integration_context", 5, {
                is_integration: !1,
                integration_id: null,
                integration_name: null,
                managed_user_id: null,
                app_id: null,
                integration_type: null,
                partner_bucket: null,
                is_partner: null
              })
            }, 2, {
              widget_placement: _v4,
              widget_name: _v1,
              is_dismissable: !1,
              is_dynamic_recommendations_widget: !1,
              is_empty_state: _v2
            });
          }, [_v1?.teamUser]));
        (0, _v3.useEffect)(() => {
          _v4({
            copy: "analytics",
            emptyState: !1,
            widgetPlacement: null,
            location: "page_area",
            widgetName: "analytics_widget"
          });
        }, [_v4]);
        let _v5 = _v3?.teamUser?.ownerId ?? _v3?.user?.id,
          {
            trackHomepageAnalyticsWidgetTabClicked: _v6,
            trackHomepageAnalyticsWidgetHeaderClicked: _v7
          } = _v14(),
          _v8 = (0, _v3.useCallback)(_v0 => {
            _v6({
              homepageAnalyticsWidgetTab: _v0
            });
          }, [_v6]),
          _v9 = {
            startDate: _v2.minus({
              days: 30
            }).startOf("day"),
            endDate: _v2.endOf("day"),
            filterLists: []
          };
        return (0, _v1.jsx)(_v244, {
          overflow: "hidden",
          children: (0, _v1.jsx)(_v248.MemoryRouter, {
            children: (0, _v1.jsx)(_v249.Overview, {
              filters: {
                startDate: _v9.startDate,
                endDate: _v9.endDate,
                filterLists: []
              },
              userId: _v5 ?? 0,
              width: _v0,
              header: (0, _v250.translate)({
                singular: "Analytics",
                dictionary: {
                  es: {
                    singular: "Análisis"
                  },
                  "de-DE": {
                    singular: "Analytik"
                  },
                  "fr-FR": {
                    singular: "Analyses"
                  },
                  "ja-JP": {
                    singular: "分析"
                  },
                  "ko-KR": {
                    singular: "애널리틱스"
                  },
                  "pt-BR": {
                    singular: "Análises"
                  },
                  "zh-CN": {
                    singular: "分析"
                  }
                }
              }),
              isExternal: !0,
              maxWidth: "unset",
              onMetricCardClick: _v8,
              onHeaderClick: _v7
            })
          })
        });
      }
    },
    _v477 = ({
      type: _v0,
      width: _v1,
      viewData: _v2,
      widgetPlacement: _v3
    }) => {
      let _v4 = (0, _v3.useRef)(null),
        _v5 = (0, _v246.useOnScreen)(_v4);
      if ("watch-history" === _v0) return (0, _v1.jsx)(_v381, {
        viewData: _v2,
        widgetPlacement: _v3,
        width: _v1
      });
      let _v6 = _v476[_v0];
      return _v6 ? (0, _v1.jsx)("div", {
        ref: _v4,
        children: (0, _v1.jsx)(_v6, {
          width: _v1,
          viewData: _v2,
          widgetPlacement: _v3,
          onScreen: _v5
        })
      }) : null;
    },
    _v478 = () => {
      let {
          ref: _v0,
          numColumns: _v1,
          gridGap: _v2,
          gridWidth: _v3
        } = (() => {
          var _v0;
          let {
              ref: _v1,
              width: _v2
            } = _v187(),
            _v3 = (0, _v201.useIsBokeh)(),
            _v4 = (_v0 = _v2) >= _v241 ? 3 : _v0 >= _v242 ? 2 : 1,
            _v5 = _v2 >= _v242 ? 24 : 12;
          return {
            ref: _v1,
            numColumns: _v4,
            gridWidth: _v2,
            gridGap: _v3 ? 24 : _v5
          };
        })(),
        {
          isLoading: _v4,
          widgetData: _v5,
          error: _v6
        } = _v145(),
        _v7 = (0, _v5.useToast)(),
        _v8 = !!_v5?.length;
      return (0, _v3.useEffect)(() => {
        _v6 && _v7({
          title: (0, _v32.translate)({
            singular: "Check your network and refresh.",
            dictionary: {
              es: {
                singular: "Compruebe su red y actualice."
              },
              "de-DE": {
                singular: "Überprüfen Sie Ihre Netzwerkverbindung und versuchen Sie es erneut."
              },
              "fr-FR": {
                singular: "Vérifiez votre réseau et actualisez la page."
              },
              "ja-JP": {
                singular: "ネットワークを確認して更新してください。"
              },
              "ko-KR": {
                singular: "네트워크를 확인하고 새로고침하세요."
              },
              "pt-BR": {
                singular: "Verifique e atualize sua rede."
              },
              "zh-CN": {
                singular: "请检查您的网络并刷新。"
              }
            }
          }),
          icon: (0, _v1.jsx)(_v240.InfoCircle, {})
        });
      }, [_v6]), (0, _v1.jsxs)(_v239.Grid, {
        ref: _v0,
        gridTemplateColumns: `repeat(${_v1}, minmax(0, 1fr))`,
        gap: `${_v2 / 16}rem`,
        children: [_v5?.map(_v0 => {
          var _v1, _v2, _v3;
          let _v4,
            _v5,
            _v6,
            _v7,
            _v8,
            _v9 = (_v1 = _v0.data, _v2 = (_v4 = _v1.map(_v0 => {
              var _v1;
              return "lg" === (_v1 = _v0.size) ? 3 : "md" === _v1 ? 2 : 1;
            }), 1 === (_v5 = _v1) ? _v4.map(_v0 => 1) : 2 === _v5 ? _v4.map(_v0 => _v0 > 2 ? 2 : _v0) : _v4), _v3 = _v1, _v6 = [], _v7 = 0, _v8 = [], _v2.forEach((_v0, _v1) => {
              if (_v7 + _v0 > _v3) {
                let _v0 = _v3 - _v7;
                _v8[0] += _v0, _v6.push(..._v8), _v7 = 0, _v8 = [];
              }
              if (_v8.push(_v0), _v7 += _v0, _v1 === _v2.length - 1) {
                let _v0 = _v3 - _v7;
                _v8[0] += _v0, _v6.push(..._v8);
              }
            }), _v6);
          return _v0.data.map((_v0, _v1) => {
            let _v2 = _v9[_v1],
              _v3 = _v1 === _v2 ? _v3 : (_v3 - (_v1 - 1) * _v2) / _v1 * _v2 + _v2 * (_v2 - 1);
            return (0, _v1.jsx)(_v57.Box, {
              gridColumn: `span ${_v2}`,
              pos: "relative",
              sx: {
                "&:has(> :only-child:empty)": {
                  display: "none"
                }
              },
              children: (0, _v1.jsx)(_v245, {
                children: (0, _v1.jsx)(_v477, {
                  width: _v3,
                  type: _v0.type,
                  viewData: _v0.viewData,
                  widgetPlacement: _v1 + 1
                })
              })
            }, _v0.type);
          });
        }), !_v8 && (_v4 || _v6) && (0, _v1.jsx)(_v479, {
          span: _v1
        })]
      });
    },
    _v479 = ({
      span: _v0
    }) => {
      let _v1 = "21.875rem",
        _v2 = "1rem";
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v57.Box, {
          gridColumn: `span ${_v0}`,
          "aria-label": "Loading...",
          children: (0, _v1.jsx)(_v189.BokehSkeleton, {
            h: _v1,
            borderRadius: _v2
          })
        }), (0, _v1.jsx)(_v57.Box, {
          gridColumn: `span ${_v0}`,
          "aria-label": "Loading...",
          children: (0, _v1.jsx)(_v189.BokehSkeleton, {
            h: _v1,
            borderRadius: _v2
          })
        }), (0, _v1.jsx)(_v57.Box, {
          gridColumn: `span ${_v0}`,
          "aria-label": "Loading...",
          children: (0, _v1.jsx)(_v189.BokehSkeleton, {
            h: _v1,
            borderRadius: _v2
          })
        })]
      });
    };
  function _v480({
    canCustomizeHomepage: _v0 = !1,
    playerAssetUrls: _v1,
    banner: _v2,
    suppressSignupUpsell: _v3 = !1,
    forceColdStorage: _v4 = !1
  }) {
    let _v5, _v6, _v7, _v8, _v9;
    _v5 = (0, _v3.useRef)(!1), _v6 = (0, _v42.useViewer)(), (0, _v3.useEffect)(() => {
      !_v6 || _v5.current || (_v4.BigPictureClient.sendEvent(new _v4.Event("vimeo.visit_homepage", 3, {
        actor_resource_role: null,
        actor_team_role: _v6?.teamUser?.plainTextPermissionLevel ?? null,
        entry_page: document.referrer || null,
        has_wayfinder: !0,
        has_wayfinder_toggle: !1,
        is_mobile_web: window.innerWidth < 769,
        page: "wayfinder_home",
        path: window.location.pathname,
        product: "home",
        referer: document.referrer,
        team_owner_id: (_v6?.teamUser?.ownerId ?? _v6?.user?.id ?? "").toString(),
        team_size: _v6?.teamUser?.currentTeamSize ?? null,
        team_subscription_type: _v6?.teamUser?.accountType ?? null
      })), _v5.current = !0);
    }, [_v6]);
    let {
        welcomeOffer: _v10,
        suppressLegacyUpsell: _v11
      } = function () {
        let _v0 = (0, _v42.useViewer)(),
          {
            capabilities: {
              hasPaid: _v1,
              hasFreeTrialEligibility: _v2
            },
            ready: _v3
          } = (0, _v6.useCapability)(["hasPaid", "hasFreeTrialEligibility"], _v0?.teamUser?.ownerId),
          {
            settings: _v4,
            isLoadingResponse: _v5
          } = (0, _v16.useOrionSettings)(),
          _v6 = _v0?.teamUser?.ownerId === _v0?.user?.id,
          _v7 = _v0?.teamUser?.teamId,
          _v8 = _v0?.user?.id,
          _v9 = !!_v0 && _v3 && !_v5,
          _v10 = "enabled" === _v4.welcome_offer_modal_arm,
          _v11 = !!(_v9 && _v10 && !_v1 && _v2 && (_v6 || !_v7) && function (_v0) {
            if (!_v0) return !1;
            let _v1 = Date.parse(_v0);
            return !Number.isNaN(_v1) && Date.now() - _v1 <= 0;
          }(_v0?.user?.createdTime)),
          [_v12, _v13] = (0, _v3.useState)(!1);
        return (0, _v3.useEffect)(() => {
          if (_v11 && null != _v8) {
            try {
              if ("1" === window.localStorage.getItem(_v179(_v8))) return;
            } catch {}
            _v13(!0);
          }
        }, [_v11, _v8]), {
          welcomeOffer: _v12 ? {
            isOpen: !0,
            onClose: () => _v13(!1),
            onDismiss: () => {
              if (null != _v8) try {
                window.localStorage.setItem(_v179(_v8), "1");
              } catch {}
            }
          } : null,
          suppressLegacyUpsell: !_v9 || _v10
        };
      }(),
      {
        showIndividualPlans: _v12
      } = (0, _v56.useB2BRepackagingContext)(),
      _v13 = function () {
        let _v0 = (0, _v42.useViewer)(),
          {
            isRepackagedFree: _v1
          } = (0, _v166.useIsRepackagedFree)(),
          {
            settings: _v2
          } = (0, _v16.useOrionSettings)(),
          [_v3, _v4] = (0, _v3.useState)(!1),
          _v5 = _v0?.user?.id,
          _v6 = null != _v5 && !_v0?.user?.capabilities?.hasPaid && (_v0?.teamUser?.accountType?.toString() ?? _v0?.user?.account?.toString()) === "free",
          _v7 = (0, _v3.useCallback)(() => {
            !_v2.default_modal_dismiss_offer_enabled || !_v6 || _v1 || null == _v5 || (0, _v167.hasDismissOfferBeenDisplayed)(_v5, "default_modal", _v2.default_modal_dismiss_offer_max_displays) || ((0, _v167.markDismissOfferDisplayed)(_v5, "default_modal"), _v4(!0));
          }, [_v2.default_modal_dismiss_offer_enabled, _v2.default_modal_dismiss_offer_max_displays, _v6, _v1, _v5]);
        return (0, _v3.useEffect)(() => (window.addEventListener(_v168.DEFAULT_MODAL_DISMISSED_EVENT, _v7), () => {
          window.removeEventListener(_v168.DEFAULT_MODAL_DISMISSED_EVENT, _v7);
        }), [_v7]), {
          isOpen: _v3,
          variant: _v2.dismiss_offer_paywall_variant,
          tracking: {
            paywallTrigger: "homepage_paywall_dismiss",
            paywallLocation: "wayfinder_home",
            paywallType: "popup",
            paywallFeature: "dismiss_offer"
          },
          close: (0, _v3.useCallback)(() => _v4(!1), [])
        };
      }(),
      {
        spontaneousLoginPaywall: _v14
      } = function () {
        let {
            arm: _v0,
            isEligibleAudience: _v1,
            userId: _v2
          } = (0, _v176.useSpontaneousPaywallEligibility)(),
          {
            trackEligible: _v3
          } = (0, _v177.useSpontaneousPaywallTracking)(),
          _v4 = "t1" === _v0 || "t3" === _v0,
          [_v5, _v6] = (0, _v3.useState)(!1);
        (0, _v3.useEffect)(() => {
          _v6(!1);
        }, [_v2]), (0, _v3.useEffect)(() => {
          if (!_v1 || null == _v2) return;
          let _v0 = `spontaneous_login_pcp_day:${_v2}`,
            _v1 = new Date().toDateString();
          window.localStorage.getItem(_v0) !== _v1 && (window.localStorage.setItem(_v0, _v1), _v3(_v178), _v4 && _v6(!0));
        }, [_v1, _v2, _v4, _v3]);
        let _v7 = (0, _v3.useCallback)(() => _v6(!1), []);
        return {
          spontaneousLoginPaywall: _v5 ? {
            isOpen: !0,
            tier: _v176.SPONTANEOUS_PAYWALL_TIER,
            isFreeTrialEligible: _v176.SPONTANEOUS_PAYWALL_FREE_TRIAL_ELIGIBLE,
            checkoutTarget: "_self",
            postCheckoutUrl: "/home",
            paywallTracking: _v178,
            onDismiss: _v7
          } : null
        };
      }(),
      _v15 = function () {
        let {
            isAudienceMatch: _v0,
            isTreatment: _v1,
            isReady: _v2,
            daysToRenewal: _v3,
            subscriptionId: _v4,
            currentTier: _v5,
            currentPlanName: _v6,
            endDate: _v7,
            revalidateMembership: _v8
          } = (0, _v52.useAutoRenewEncouragementEligibility)(),
          {
            trackEligible: _v9,
            trackDisplayed: _v10,
            trackCtaClicked: _v11,
            trackModalDismissed: _v12,
            trackEnabled: _v13
          } = (0, _v54.useAutoRenewEncouragementTracking)(),
          {
            trackAutoRenewSwitchedOn: _v14
          } = (0, _v33.useBillingTracking)(),
          {
            showEnableSuccessToast: _v15,
            showEnableFailureToast: _v16
          } = (0, _v53.useAutoRenewEncouragementEnableToasts)(),
          [_v17, _v18] = (0, _v3.useState)(!1),
          _v19 = (0, _v3.useRef)(!1),
          _v20 = _v1 ? "treatment" : "control",
          _v21 = null != _v4 && null != _v7 ? `auto-renew-encouragement-modal:${_v4}:${_v7}` : null;
        (0, _v3.useEffect)(() => {
          if (_v19.current || !_v2 || !_v0 || null == _v21) return;
          _v19.current = !0;
          let _v0 = Date.now(),
            _v1 = _v50(_v21);
          if (0 !== _v1.lastShownAt && !(_v0 - _v1.lastShownAt >= 0)) return;
          _v51(_v21, {
            ..._v1,
            lastShownAt: _v0
          }), _v1 && _v18(!0);
          let _v2 = {
            surface: "renewal_modal",
            variant: _v20,
            daysToRenewal: _v3,
            tier: _v5
          };
          _v9(_v2), _v1 && _v10(_v2);
        }, [_v2, _v0, _v1, _v20, _v21, _v3, _v5, _v9, _v10]);
        let _v22 = (0, _v3.useCallback)(() => {
            if (_v18(!1), null != _v21) {
              let _v0 = _v50(_v21),
                _v1 = _v0.dismissalCount + 1;
              _v51(_v21, {
                ..._v0,
                dismissalCount: _v1
              }), _v12({
                surface: "renewal_modal",
                variant: _v20,
                daysToRenewal: _v3,
                tier: _v5,
                dismissalCount: _v1
              });
            }
          }, [_v21, _v3, _v5, _v12, _v20]),
          _v23 = (0, _v3.useCallback)(() => {
            _v11({
              surface: "renewal_modal",
              variant: _v20,
              daysToRenewal: _v3,
              tier: _v5
            });
          }, [_v3, _v5, _v11, _v20]),
          _v24 = (0, _v3.useCallback)(() => {
            _v18(!1), _v13({
              surface: "renewal_modal",
              variant: _v20,
              daysToRenewal: _v3,
              tier: _v5
            }), _v14({
              tier: _v5 ?? void 0,
              periodicity: "annual"
            }), _v15(), _v8();
          }, [_v3, _v5, _v13, _v14, _v20, _v15, _v8]),
          _v25 = (0, _v3.useCallback)(() => {
            _v16();
          }, [_v16]),
          _v26 = _v17 && null != _v4 && null != _v5 && null != _v7 ? {
            subscriptionId: _v4,
            currentPlanName: _v6 ?? _v5,
            currentTier: _v5,
            targetTier: "free",
            endDate: _v7,
            layout: "encouragement",
            secondaryLabel: (0, _v32.translate)({
              singular: "Ignore",
              dictionary: {
                es: {
                  singular: "Ignorar"
                },
                "de-DE": {
                  singular: "Ignorieren"
                },
                "fr-FR": {
                  singular: "Ignorer"
                },
                "ja-JP": {
                  singular: "無視"
                },
                "ko-KR": {
                  singular: "무시"
                },
                "pt-BR": {
                  singular: "Ignorar"
                },
                "zh-CN": {
                  singular: "忽略"
                }
              }
            }),
            onEnableClick: _v23
          } : null;
        return {
          isOpen: null != _v26,
          onDismiss: _v22,
          onEnabled: _v24,
          onError: _v25,
          retentionProps: _v26
        };
      }();
    (() => {
      let _v0 = (0, _v42.useViewer)(),
        _v1 = (0, _v3.useRef)(!1),
        {
          data: _v2
        } = (0, _v170.useGetMePreferences)(() => _v0 ? {
          select: ["aab"]
        } : null);
      (0, _v3.useEffect)(() => {
        !_v1.current && _v2 && _v2.aab && (_v10.PendoClient.showGuideById("zw5TBABCF_nKVT_TD6JKkOYWcys"), _v1.current = !0);
      }, [_v2]);
    })();
    let {
        step: _v16,
        handleDismiss: _v17,
        handleCtaClick: _v18,
        handleErrorClose: _v19
      } = (0, _v102.useViewerAiUpsellModal)("home"),
      {
        isOpen: _v20,
        handleShown: _v21,
        handleDismiss: _v22,
        handleCtaClick: _v23,
        upgradePlanUrl: _v24
      } = function () {
        let _v0,
          _v1,
          _v2,
          [_v3, _v4] = (0, _v3.useState)(!1),
          {
            settings: _v5,
            isLoadingResponse: _v6
          } = (0, _v16.useOrionSettings)(),
          _v7 = _v5.background_embed_upsell_enabled,
          _v8 = (0, _v42.useViewer)(),
          _v9 = _v8?.teamUser?.accountType ?? _v8?.user?.account,
          _v10 = !!_v9 && ["free", "basic"].includes(_v9),
          _v11 = _v8?.user?.id,
          _v12 = _v11 ? `${_v183}:${_v11}` : _v183,
          _v13 = (0, _v3.useRef)(!1),
          {
            trackEligible: _v14,
            trackShown: _v15,
            trackDismissed: _v16,
            trackCtaClicked: _v17
          } = (_v0 = (0, _v11.usePico)(), _v1 = (0, _v3.useCallback)(() => {
            _v0?.track("background_embed_upsell_eligible", {});
          }, [_v0]), _v2 = (0, _v3.useCallback)(() => {
            _v0?.track("background_embed_upsell_shown", {});
          }, [_v0]), {
            trackEligible: _v1,
            trackShown: _v2,
            trackDismissed: (0, _v3.useCallback)(() => {
              _v0?.track("background_embed_upsell_dismissed", {});
            }, [_v0]),
            trackCtaClicked: (0, _v3.useCallback)(() => {
              _v0?.track("background_embed_upsell_cta_clicked", {});
            }, [_v0])
          }),
          _v18 = (0, _v3.useRef)(_v14),
          _v19 = (0, _v3.useRef)(_v15);
        (0, _v3.useEffect)(() => {
          _v18.current = _v14;
        }, [_v14]), (0, _v3.useEffect)(() => {
          _v19.current = _v15;
        }, [_v15]), (0, _v3.useEffect)(() => {
          if (_v6 || !_v7 || !_v10 || _v13.current) return;
          try {
            let _v0 = localStorage.getItem(_v12);
            if (_v0 && Date.now() - Number(_v0) < 0) return;
          } catch {
            return;
          }
          _v18.current();
          let _v0 = setTimeout(() => {
            _v13.current = !0, _v4(!0), _v19.current();
          }, 0);
          return () => clearTimeout(_v0);
        }, [_v6, _v7, _v10, _v12]);
        let _v20 = (0, _v182.buildUpgradePlanUrl)({
            paywallTrigger: "background_embed_upsell_button",
            paywallLocation: "home_page",
            paywallFeature: "background_embed"
          }, {
            paywall_type: "popup"
          }),
          _v21 = (0, _v3.useCallback)(() => {
            try {
              localStorage.setItem(_v12, String(Date.now()));
            } catch {}
          }, [_v12]);
        return {
          isOpen: _v3,
          handleShown: _v21,
          handleDismiss: (0, _v3.useCallback)(() => {
            _v4(!1), _v16();
          }, [_v16]),
          handleCtaClick: (0, _v3.useCallback)(() => {
            _v17();
          }, [_v17]),
          upgradePlanUrl: _v20
        };
      }(),
      [_v25, _v26] = (0, _v3.useState)(!1),
      [_v27, _v28] = (0, _v3.useState)(!1),
      {
        openTransferFileModal: _v29
      } = (0, _v103.useTransferFileModal)(),
      {
        openReviewModal: _v30
      } = (0, _v104.useReviewModal)(),
      {
        settings: _v31
      } = (0, _v16.useOrionSettings)(),
      _v32 = !!_v31.onboarding_upsell_interstitial_enabled;
    ((_v0 = !1) => {
      let _v1 = (0, _v42.useViewer)(),
        _v2 = (0, _v173.usePage)(),
        {
          open: _v3,
          close: _v4
        } = (0, _v175.useUpsellModal)(),
        {
          capabilities: {
            hasEnterprise: _v5
          }
        } = (0, _v6.useCapability)(["hasEnterprise"], _v1?.teamUser?.ownerId),
        _v6 = _v1?.teamUser?.ownerId === _v1?.user?.id,
        _v7 = _v1?.teamUser?.teamId,
        _v8 = (0, _v174.useWindowSize)().width > 0;
      (0, _v3.useEffect)(() => {
        if (!_v1 || _v0) return;
        let _v0 = -1 !== window.document.cookie.split(";").findIndex(_v0 => "joined_with_existing_account=1" === _v0.trim()),
          _v1 = window.localStorage.getItem(_v171) || window.sessionStorage.getItem(_v171),
          _v2 = _v6 || !_v7;
        _v8 && (!_v5 && "joinWithGoogle" === _v1 && !_v0 || "joinWithEmail" === _v1) && _v2 && _v3({
          tracking: {
            params: {
              feature: "reg_flow_web",
              location: "reg_flow_web",
              page: _v2,
              upsell_name: "reg_flow_plan_select"
            },
            paywallTracking: {
              paywallTrigger: "wayfinder_home_signup_banner_button",
              paywallLocation: "wayfinder_home",
              paywallType: "popup",
              paywallFeature: "registration"
            }
          },
          templateType: "default",
          modalConfig: {
            mkcCode: "ent-upgrade-bottom",
            headerText: (0, _v32.translate)({
              singular: "You’re all signed up! Get even more from Vimeo.",
              dictionary: {
                es: {
                  singular: "¡Ya se registró! Aproveche Vimeo al máximo."
                },
                "de-DE": {
                  singular: "Sie sind jetzt angemeldet! Profitieren Sie noch mehr von Vimeo."
                },
                "fr-FR": {
                  singular: "Votre inscription est terminée ! Bénéficiez d'encore plus de fonctionnalités Vimeo."
                },
                "ja-JP": {
                  singular: "サインアップが完了しました！Vimeo をさらに活用しましょう。"
                },
                "ko-KR": {
                  singular: "모두 등록되었습니다! Vimeo에서 더 많은 정보를 얻으세요."
                },
                "pt-BR": {
                  singular: "Todos estão inscritos! Aproveite ainda mais o Vimeo."
                },
                "zh-CN": {
                  singular: "您已注册！获取更多 Vimeo 权益。"
                }
              }
            }),
            subHeaderText: (0, _v32.translate)({
              singular: "Unlock our most powerful video tools with a free trial. Cancel anytime.",
              dictionary: {
                es: {
                  singular: "Acceda a nuestras herramientas de video más potentes a través de una prueba gratuita. Cancele cuando quiera."
                },
                "de-DE": {
                  singular: "Probieren Sie unsere leistungsstärksten Videotools mit einem kostenlosen Test aus. Jederzeit kündbar."
                },
                "fr-FR": {
                  singular: "Accédez à nos outils vidéo les plus puissants lors d'un essai gratuit. Annulation possible à tout moment."
                },
                "ja-JP": {
                  singular: "無料トライアルで最も強力な動画ツールをお試しください。いつでもキャンセルが可能です。"
                },
                "ko-KR": {
                  singular: "무료 평가판을 통해 가장 강력한 동영상 도구를 사용해 보세요. 언제든지 취소할 수 있습니다."
                },
                "pt-BR": {
                  singular: "Tenha acesso às nossas ferramentas de vídeo mais poderosas com um teste gratuito. Cancele a qualquer momento."
                },
                "zh-CN": {
                  singular: "免费试用，解锁我们最强大的视频工具。可随时取消。"
                }
              }
            })
          },
          onClose: () => {
            _v4(), window.sessionStorage.removeItem(_v171), window.localStorage.removeItem(_v171);
          }
        });
      }, [_v6, _v7, _v0]);
    })(_v3 || _v11 || _v32);
    let {
        maximizeVideoFileTransferAdoption: _v33,
        maximizeReviewAdoption: _v34
      } = (0, _v81.useAdoptionSettings)(),
      _v35 = _v31.creator_monetisation_creator_enabled,
      {
        trackImpression: _v36,
        trackClick: _v37,
        trackModalDismissed: _v38,
        trackWaitlistJoin: _v39
      } = (0, _v86.useCreatorMonetisationTracking)(),
      _v40 = (0, _v5.useToast)(),
      _v41 = (0, _v42.useViewer)(),
      _v42 = (0, _v79.useLibraryMergeAnnouncement)("home"),
      _v43 = "now" === _v42.active,
      {
        capabilities: {
          hasFreeTrialEligibility: _v44,
          hasUpsellsForFlatRateTiers: _v45,
          hasPaid: _v46
        },
        ready: _v47
      } = (0, _v6.useCapability)(["hasFreeTrialEligibility", "hasUpsellsForFlatRateTiers", "hasPaid"], _v41?.teamUser?.ownerId),
      {
        trackBannerDisplayed: _v48,
        trackBannerCtaClicked: _v49,
        trackBannerTierError: _v50
      } = (_v7 = (0, _v11.usePico)(), _v8 = (0, _v3.useCallback)(_v0 => {
        if (null === _v7) return !1;
        let _v1 = (0, _v87.v4)();
        return sessionStorage.setItem(_v88.PAYWALL_ID_STORAGE_KEY, _v1), sessionStorage.setItem(_v88.PAYWALL_TRIGGER_STORAGE_KEY, _v89), sessionStorage.setItem(_v88.PAYWALL_LOCATION_STORAGE_KEY, _v90), sessionStorage.setItem(_v88.PAYWALL_TYPE_STORAGE_KEY, _v91), sessionStorage.setItem(_v88.PAYWALL_FEATURE_STORAGE_KEY, _v92), _v7.track("free_trial_banner_displayed", {
          tier: _v0.tier,
          paywall_id: _v1,
          paywall_trigger: _v89,
          paywall_location: _v90,
          paywall_type: _v91,
          paywall_feature: _v92
        }), !0;
      }, [_v7]), {
        trackBannerDisplayed: _v8,
        trackBannerCtaClicked: (0, _v3.useCallback)(_v0 => {
          null !== _v7 && _v7.track("free_trial_banner_cta_clicked", {
            tier: _v0.tier,
            paywall_id: sessionStorage.getItem(_v88.PAYWALL_ID_STORAGE_KEY) ?? null,
            paywall_trigger: _v89,
            paywall_location: _v90,
            paywall_type: _v91,
            paywall_feature: _v92
          });
        }, [_v7]),
        trackBannerTierError: (0, _v3.useCallback)(_v0 => {
          null !== _v7 && _v7.track("free_trial_banner_tier_error", {
            tier_setting: _v0.tier_setting,
            has_upsells_for_flat_rate_tiers: _v0.has_upsells_for_flat_rate_tiers,
            is_repackaging: _v0.is_repackaging
          });
        }, [_v7])
      }),
      _v51 = (0, _v80.useCampaignIdOverride)(),
      _v52 = !!_v51 && _v80.REPACKAGING_CAMPAIGN_IDS.includes(_v51),
      _v53 = (0, _v3.useMemo)(() => {
        let _v0 = _v31.free_trial_banner_tier;
        if ("none" === _v0 || !_v47 || _v46 || !_v44) return null;
        let _v1 = (_v52 ? {
          low_tier: {
            checkout: "creator",
            display: "Creator"
          },
          mid_tier: {
            checkout: "professional",
            display: "Professional"
          },
          high_tier: {
            checkout: "studio",
            display: "Studio"
          }
        } : _v45 ? {
          low_tier: {
            checkout: "plus",
            display: "Plus"
          },
          mid_tier: {
            checkout: "pro",
            display: "Pro"
          },
          high_tier: {
            checkout: "live_premium",
            display: "Premium"
          }
        } : {
          low_tier: {
            checkout: "starter",
            display: "Starter"
          },
          mid_tier: {
            checkout: "standard",
            display: "Standard"
          },
          high_tier: {
            checkout: "advanced",
            display: "Advanced"
          }
        })[_v0];
        return _v1 ? (0, _v55.isB2BRepackagingPlanAvailable)(_v1.checkout, _v12) ? {
          banner: {
            planName: _v1.display,
            checkoutTier: _v1.checkout,
            checkoutUrl: (0, _v85.buildCheckoutUrl)({
              tier: _v1.checkout,
              isTrial: !0,
              paywallTrigger: "free_trial_banner_cta_button",
              paywallLocation: "wayfinder_home",
              paywallFeature: "free_trial",
              paywallType: "banner"
            })
          }
        } : null : {
          tierError: {
            tier_setting: _v0,
            has_upsells_for_flat_rate_tiers: !!_v45,
            is_repackaging: _v52
          }
        };
      }, [_v31.free_trial_banner_tier, _v47, _v46, _v44, _v45, _v52, _v12]),
      _v54 = _v53?.banner ?? null,
      _v55 = (0, _v3.useRef)(!1);
    (0, _v3.useEffect)(() => {
      _v53?.tierError && !_v55.current && (_v55.current = !0, _v50(_v53.tierError));
    }, [_v53, _v50]);
    let _v56 = (0, _v3.useRef)(!1);
    (0, _v3.useEffect)(() => {
      _v54 && !_v56.current && (_v56.current = _v48({
        tier: _v54.checkoutTier
      }));
    }, [_v54, _v48]);
    let _v57 = (0, _v3.useRef)(!1);
    (0, _v3.useEffect)(() => {
      _v35 && !_v57.current && (_v57.current = !0, _v36("uploader"));
    }, [_v35, _v36]), (0, _v3.useEffect)(() => {
      let _v0 = window;
      if (_v0.requestIdleCallback) {
        let _v0 = _v0.requestIdleCallback(() => {
          _v28(!0);
        }, {
          timeout: 0
        });
        return () => {
          _v0.cancelIdleCallback && _v0.cancelIdleCallback(_v0);
        };
      }
      let _v1 = window.setTimeout(() => {
        _v28(!0);
      }, 0);
      return () => {
        window.clearTimeout(_v1);
      };
    }, []);
    let _v58 = !!(_v9 = (0, _v42.useViewer)()) && (!!_v9.user && !_v9.teamUser || !!_v9.teamUser && _v169.includes(_v9.teamUser.plainTextPermissionLevel)),
      {
        isEnabled: _v59,
        targetUserId: _v60,
        privateFolderId: _v61
      } = function () {
        let _v0 = (0, _v42.useViewer)(),
          _v1 = !!_v0?.team,
          _v2 = _v0?.teamUser?.ownerId ?? _v0?.user?.id,
          {
            data: _v3
          } = (0, _v164.useGetUserFoldersPrivateToMe)(() => _v1 && _v2 ? {
            where: {
              ownerId: _v2
            },
            select: ["uri"]
          } : null, {
            revalidateOnFocus: !1
          }),
          _v4 = _v1 && _v3 ? (0, _v165.getFolderIdFromFolderUri)(_v3.uri) : void 0;
        return {
          isEnabled: !_v1 || !!_v4,
          targetUserId: _v2 ?? 0,
          privateFolderId: _v4
        };
      }(),
      {
        contentSpaceEnabled: _v62,
        notTeamGatedContentSpaceEnabled: _v63,
        loading: _v64
      } = (0, _v78.useContentSpaceEnabled)(_v60),
      _v65 = (0, _v1.jsx)(_v481, {
        type: _v94.PlayerType.BarebonePlayer,
        assetUrls: _v1,
        children: (0, _v1.jsxs)(_v147, {
          children: [_v0 && (0, _v1.jsx)(_v149, {}), _v2, (0, _v1.jsx)(_v83.ReverseTrialLateBanner, {
            hostLocation: "home"
          }), _v58 && (0, _v1.jsx)(_v235, {}), (0, _v1.jsx)(_v161, {
            forceColdStorage: _v4
          }), _v54 && (0, _v1.jsx)(_v105, {
            planName: _v54.planName,
            checkoutUrl: _v54.checkoutUrl,
            onCtaClick: () => _v49({
              tier: _v54.checkoutTier
            })
          }), _v35 && (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v106, {
              onClick: () => {
                _v37("uploader"), _v26(!0);
              }
            }), (0, _v1.jsx)(_v65, {
              isOpen: _v25,
              onClose: () => {
                _v38("uploader"), _v26(!1);
              },
              onWaitlistJoin: _v0 => {
                _v39(_v0), _v26(!1), _v40({
                  title: (0, _v32.translate)({
                    singular: "You're on the list! We'll be in touch when it's ready.",
                    dictionary: {
                      es: {
                        singular: "¡Estás en la lista! Nos pondremos en contacto cuando esté listo."
                      },
                      "de-DE": {
                        singular: "Sie stehen auf der Liste! Wir melden uns, sobald es bereit ist."
                      },
                      "fr-FR": {
                        singular: "Vous êtes sur la liste ! Nous vous contacterons dès que ce sera prêt."
                      },
                      "ja-JP": {
                        singular: "リストに登録されました！準備ができ次第ご連絡します。"
                      },
                      "ko-KR": {
                        singular: "목록에 추가되었습니다! 준비가 되는 대로 연락드리겠습니다."
                      },
                      "pt-BR": {
                        singular: "Você está na lista! Entraremos em contato quando estiver disponível."
                      },
                      "zh-CN": {
                        singular: "您已在名单上! 我们会在准备就绪时与您联系."
                      }
                    }
                  }),
                  duration: 0,
                  position: "bottom"
                });
              }
            })]
          }), _v33 && (0, _v1.jsx)(_v163, {
            onCtaClick: () => _v29("hero")
          }), _v34 && (0, _v1.jsx)(_v155, {
            onCtaClick: () => _v30("hero")
          }), (0, _v1.jsx)(_v478, {}), _v27 && !_v43 && (0, _v1.jsx)(_v76, {}), (0, _v1.jsx)(_v101.ViewerAiUpsellModal, {
            step: _v43 ? "closed" : _v16,
            onDismiss: _v17,
            onCtaClick: _v18,
            onErrorClose: _v19
          }), (0, _v1.jsx)(_v181, {
            isOpen: !_v43 && _v20,
            upgradePlanUrl: _v24,
            onShown: _v21,
            onDismiss: _v22,
            onCtaClick: _v23
          }), (0, _v1.jsx)(_v77.LibrariesNowOneModal, {
            isOpen: "now" === _v42.active,
            onClose: () => _v42.dismiss("now"),
            onGoToLibrary: async () => {
              await _v42.dismiss("now"), window.location.assign("/library?library_merge_toast=1");
            }
          })]
        })
      });
    return (0, _v1.jsx)(_v98.NotificationContextProvider, {
      children: (0, _v1.jsxs)(_v97.default, {
        children: [(0, _v1.jsx)(_v47, {
          children: (0, _v1.jsx)(_v100.UploadDropzone, {
            className: "home-upload-dropzone",
            surface: "homepage",
            targetUserId: _v59 ? _v60 : void 0,
            selectedFolderId: _v59 ? _v61 : void 0,
            destinationText: _v64 || !_v63 || _v62 ? (0, _v32.translate)({
              singular: "My library",
              dictionary: {
                es: {
                  singular: "Mi biblioteca"
                },
                "de-DE": {
                  singular: "Meine Bibliothek"
                },
                "fr-FR": {
                  singular: "Ma bibliothèque"
                },
                "ja-JP": {
                  singular: "マイ ライブラリ"
                },
                "ko-KR": {
                  singular: "내 라이브러리"
                },
                "pt-BR": {
                  singular: "Minha Biblioteca"
                },
                "zh-CN": {
                  singular: "我的视频库"
                }
              }
            }) : (0, _v32.translate)({
              singular: "Library",
              dictionary: {
                es: {
                  singular: "Biblioteca"
                },
                "de-DE": {
                  singular: "Bibliothek"
                },
                "fr-FR": {
                  singular: "Bibliothèque"
                },
                "ja-JP": {
                  singular: "ライブラリ"
                },
                "ko-KR": {
                  singular: "라이브러리"
                },
                "pt-BR": {
                  singular: "Biblioteca"
                },
                "zh-CN": {
                  singular: "视频库"
                }
              }
            }),
            disabled: !_v59,
            preserveWrapperWhenDisabled: !0,
            children: (0, _v1.jsx)(_v43.Flex, {
              maxW: "1584",
              w: "100%",
              gap: "lg",
              flexDirection: "column",
              children: _v65
            })
          })
        }), (0, _v1.jsx)(_v99.GlobalNotification, {}), _v10 && (0, _v1.jsx)(_v84.WelcomeOfferModalPaywall, {
          ..._v10,
          paywallTracking: {
            paywallTrigger: "wayfinder_home_welcome_offer",
            paywallLocation: "wayfinder_home",
            paywallType: "popup",
            paywallFeature: "welcome_offer"
          }
        }), _v13.isOpen && "wt_offer" === _v13.variant && (0, _v1.jsx)(_v82.PricingDismissOfferPaywall, {
          isOpen: !0,
          onClose: _v13.close,
          paywallTracking: _v13.tracking
        }), _v13.isOpen && "ev_offer" === _v13.variant && (0, _v1.jsx)(_v84.WelcomeOfferModalPaywall, {
          isOpen: !0,
          onClose: _v13.close,
          onDismiss: _v13.close,
          paywallTracking: _v13.tracking
        }), _v14 && (0, _v1.jsx)(_v96.PlansComparisonPaywallModal, {
          ..._v14
        }), _v15.isOpen && _v15.retentionProps && (0, _v1.jsx)(_v95.AutoRenewRetentionModal, {
          isOpen: !0,
          onClose: _v15.onDismiss,
          onAutoRenewEnabled: _v15.onEnabled,
          onError: _v15.onError,
          ..._v15.retentionProps
        })]
      })
    });
  }
  let _v481 = ({
    children: _v0,
    assetUrls: _v1,
    type: _v2
  }) => _v1 ? (0, _v1.jsx)(_v93.PlayerContextProvider, {
    assetUrls: _v1,
    type: _v2,
    children: _v0
  }) : _v0;
  var _v482 = _v0.i(0),
    _v483 = _v0.i(0),
    _v484 = _v0.i(0),
    _v485 = _v0.i(0),
    _v486 = _v0.i(0),
    _v487 = _v0.i(0),
    _v488 = _v0.i(0),
    _v489 = _v0.i(0),
    _v490 = _v0.i(0),
    _v491 = _v0.i(0),
    _v492 = _v0.i(0),
    _v493 = _v0.i(0),
    _v494 = _v0.i(0),
    _v495 = _v0.i(0),
    _v496 = _v0.i(0);
  let _v497 = "/checkout/payments/new?verify=1",
    _v498 = ["renewalDate", "hasAutorenew", "gracePeriodType", "paymentMethod", "paymentMethod.lastFour", "paymentMethod.textType", "paymentMethod.type"],
    _v499 = "vimeo:card-verification-modal:last-shown",
    _v500 = {
      CARD_BRAND_AMERICAN_EXPRESS: "Amex",
      CARD_BRAND_DISCOVER: "Discover",
      CARD_BRAND_JCB: "JCB",
      CARD_BRAND_MASTER_CARD: "Mastercard",
      CARD_BRAND_UNION_PAY: "UnionPay",
      CARD_BRAND_VISA: "Visa"
    },
    _v501 = {
      amex: _v485.AmexNegative,
      discover: _v486.DiscoverNegative,
      mastercard: _v487.MastercardNegative,
      paypal: _v488.PaypalNegative,
      visa: _v489.VisaNegative
    },
    _v502 = ({
      cardBrand: _v0
    }) => {
      let _v1 = _v501[_v0.toLowerCase().replace(/[^a-z]/g, "")] || _v483.CreditCard;
      return (0, _v1.jsx)(_v202.Center, {
        minW: "32px",
        h: "24px",
        color: "text-primary",
        children: (0, _v1.jsx)(_v1, {
          width: "32px",
          height: "20px"
        })
      });
    },
    _v503 = () => {
      let _v0 = (0, _v42.useViewer)(),
        _v1 = _v0?.teamUser?.ownerId ?? _v0?.user?.id,
        {
          settings: _v2,
          isLoadingResponse: _v3
        } = (0, _v16.useOrionSettings)(),
        _v4 = _v2.card_verification_modal_variant,
        _v5 = "none" !== _v4,
        _v6 = "inline" === _v4,
        _v7 = (0, _v5.useToast)(),
        [_v8, _v9] = (0, _v3.useState)(!0),
        [_v10] = (0, _v3.useState)(() => {
          let _v0 = (() => {
            try {
              let _v0 = window.localStorage.getItem(_v499);
              if (!_v0) return null;
              let _v1 = Number(_v0);
              return Number.isFinite(_v1) ? _v1 : null;
            } catch {
              return null;
            }
          })();
          return null === _v0 || Date.now() - _v0 >= 0;
        }),
        {
          trackModalDisplayed: _v11,
          trackModalClicked: _v12,
          trackBalanceWithoutGracePeriod: _v13
        } = (0, _v496.useCardVerificationTracking)(),
        {
          data: _v14
        } = (0, _v495.useGetUserSettingsBillingMembership)(() => _v5 && null != _v1 ? {
          select: _v498,
          where: {
            userId: Number(_v1)
          }
        } : null),
        {
          data: _v15
        } = (0, _v493.useGetMePaymentMethods)(() => _v5 ? {
          select: ["id", "card.brand", "card.lastFourDigits", "isDefault", "type"],
          query: {
            showDisabled: !1
          }
        } : null),
        {
          data: _v16
        } = (0, _v170.useGetMePreferences)(() => _v5 ? {
          select: ["cvfc"]
        } : null),
        {
          data: _v17
        } = (0, _v494.useGetMeSubscriptions)(() => _v5 ? {
          select: ["paymentMethodId", "isLatest"],
          query: {
            status: "SUBSCRIPTION_STATUS_ACTIVE",
            types: ["SUBSCRIPTION_TYPE_BASE"]
          }
        } : null),
        {
          data: _v18,
          error: _v19
        } = (0, _v492.useGetMeInvoicesOpen)(() => _v5 ? {
          select: ["total"]
        } : null),
        _v20 = void 0 !== _v18 || void 0 !== _v19,
        _v21 = _v18?.total?.unit ?? 0,
        _v22 = _v21 > 0,
        _v23 = !!_v14?.gracePeriodType,
        _v24 = void 0 !== _v14,
        _v25 = _v17?.data.find(_v0 => _v0.isLatest && _v0.paymentMethodId)?.paymentMethodId ?? _v17?.data.find(_v0 => _v0.paymentMethodId)?.paymentMethodId,
        _v26 = _v14?.paymentMethod,
        _v27 = (_v25 ? _v15?.data.find(_v0 => _v0.id === _v25) : void 0) ?? _v15?.data.find(_v0 => _v0.isDefault) ?? _v15?.data[0],
        _v28 = _v26?.lastFour ?? _v27?.card?.lastFourDigits ?? "",
        _v29 = _v26?.textType || (_v27?.card?.brand ? _v500[_v27.card.brand] ?? "Card" : ""),
        _v30 = (_v0 => {
          if (!_v0) return "";
          let _v1 = new Date(_v0.includes(" ") ? _v0.replace(" ", "T") : _v0);
          if (Number.isNaN(_v1.getTime())) return "";
          let _v2 = "u" > typeof navigator && navigator.language || "en-US";
          return _v1.toLocaleDateString(_v2, {
            weekday: "short",
            month: "short",
            day: "numeric"
          });
        })(_v14?.renewalDate),
        _v31 = _v27?.id,
        _v32 = void 0 !== _v15,
        _v33 = (0, _v3.useCallback)(() => {
          _v12({
            variant: _v4,
            element: "postpone_cta"
          }), _v9(!1);
        }, [_v12, _v4]),
        _v34 = (0, _v3.useCallback)(() => {
          _v9(!1), _v7({
            variant: "success",
            isClosable: !1,
            title: (0, _v8.translate)({
              singular: "Card verified successfully",
              dictionary: {
                es: {
                  singular: "Tarjeta verificada correctamente"
                },
                "de-DE": {
                  singular: "Karte erfolgreich verifiziert"
                },
                "fr-FR": {
                  singular: "Carte vérifiée avec succès"
                },
                "ja-JP": {
                  singular: "カードの確認が正常に完了しました"
                },
                "ko-KR": {
                  singular: "카드가 성공적으로 인증되었습니다"
                },
                "pt-BR": {
                  singular: "Cartão verificado com sucesso"
                },
                "zh-CN": {
                  singular: "卡已成功验证"
                }
              }
            })
          });
        }, [_v7]),
        _v35 = _v14?.hasAutorenew === !0,
        _v36 = (_v0 => {
          if (!_v0) return null;
          let _v1 = new Date(_v0.includes(" ") ? _v0.replace(" ", "T") : _v0);
          return Number.isNaN(_v1.getTime()) ? null : (_v1.getTime() - Date.now()) / 0;
        })(_v14?.renewalDate),
        _v37 = !!_v16?.cvfc,
        _v38 = void 0 !== _v16,
        _v39 = void 0 !== _v17,
        _v40 = !_v3 && _v5 && _v10 && _v35 && null !== _v36 && _v36 >= 0 && _v36 <= 30 && _v32 && _v39 && _v20 && _v38 && !_v22 && !_v23 && !_v37 && !!_v28 && !!_v30,
        _v41 = (0, _v3.useRef)(!1);
      (0, _v3.useEffect)(() => {
        _v5 && _v24 && _v20 && _v22 && !_v23 && !_v41.current && (_v41.current = _v13({
          variant: _v4,
          balanceUnit: _v21,
          currency: _v18?.total?.currency ?? null
        }));
      }, [_v5, _v24, _v20, _v22, _v23, _v4, _v21, _v18, _v13]);
      let _v42 = (0, _v3.useRef)(!1);
      (0, _v3.useEffect)(() => {
        if (_v40 && !_v42.current) {
          _v42.current = !0;
          try {
            window.localStorage.setItem(_v499, String(Date.now()));
          } catch {}
        }
      }, [_v40]);
      let _v43 = (0, _v3.useRef)(!1);
      (0, _v3.useEffect)(() => {
        _v40 && !_v43.current && (_v43.current = _v11({
          variant: _v4,
          cardBrand: _v29
        }));
      }, [_v40, _v4, _v29, _v11]);
      let _v44 = (0, _v3.useCallback)(() => {
          _v12({
            variant: _v4,
            element: "verify_cta"
          });
        }, [_v12, _v4]),
        _v45 = (0, _v3.useCallback)(() => {
          _v12({
            variant: _v4,
            element: "add_new_cta"
          });
        }, [_v12, _v4]);
      return _v40 ? _v6 && (_v31 || !_v32) ? _v31 ? (0, _v1.jsxs)(_v25.Modal, {
        isOpen: _v8,
        size: "md",
        isCentered: !0,
        scrollBehavior: "inside",
        closeOnEsc: !1,
        closeOnOverlayClick: !1,
        onClose: () => void 0,
        children: [(0, _v1.jsx)(_v30.ModalOverlay, {}), (0, _v1.jsx)(_v28.ModalContent, {
          maxWidth: {
            base: "calc(100vw - 32px)",
            md: "520px"
          },
          width: {
            base: "calc(100vw - 32px)",
            md: "520px"
          },
          maxH: {
            base: "calc(100dvh - 48px)",
            md: "85dvh"
          },
          borderRadius: "20px",
          overflow: "hidden",
          children: (0, _v1.jsx)(_v26.ModalBody, {
            px: "24px",
            pt: "24px",
            pb: "24px",
            flex: "1",
            minH: 0,
            overflowY: "auto",
            children: (0, _v1.jsxs)(_v253.VStack, {
              gap: "24px",
              align: "stretch",
              children: [(0, _v1.jsxs)(_v57.Box, {
                children: [(0, _v1.jsx)(_v31.Text, {
                  variant: "heading-md",
                  children: (0, _v8.translate)({
                    singular: "Confirm your card for future renewals",
                    dictionary: {
                      es: {
                        singular: "Confirme su tarjeta para renovaciones futuras"
                      },
                      "de-DE": {
                        singular: "Bestätigen Sie Ihre Karte für zukünftige Verlängerungen"
                      },
                      "fr-FR": {
                        singular: "Confirmez votre carte pour les renouvellements futurs"
                      },
                      "ja-JP": {
                        singular: "今後の更新のためにカードを確認してください"
                      },
                      "ko-KR": {
                        singular: "향후 갱신을 위해 카드를 확인하세요"
                      },
                      "pt-BR": {
                        singular: "Confirme seu cartão para renovações futuras"
                      },
                      "zh-CN": {
                        singular: "确认您的卡以便将来续订"
                      }
                    }
                  })
                }), (0, _v1.jsx)(_v31.Text, {
                  variant: "body-md",
                  color: "text-secondary",
                  mt: "8px",
                  children: (0, _v8.translate)({
                    singular: "To keep renewals active, your card needs re-authorization through our secure checkout. If not resolved, your plan might fail to renew. We don't store your card details, and Vimeo never asks for full card details by email or phone.",
                    dictionary: {
                      es: {
                        singular: "Para mantener activas las renovaciones, su tarjeta necesita reautorización a través de nuestro proceso de pago seguro. Si no se resuelve, es posible que su plan no se renueve. No guardamos los datos de su tarjeta, y Vimeo nunca solicita los datos completos de la tarjeta por correo electrónico ni por teléfono."
                      },
                      "de-DE": {
                        singular: "Um Verlängerungen aktiv zu halten, muss Ihre Karte über unseren sicheren Checkout erneut autorisiert werden. Sollte dieses Problem nicht behoben werden, kann die Verlängerung Ihres Plans fehlschlagen. Wir speichern Ihre Kartendaten nicht, und Vimeo fordert niemals vollständige Kartendaten per E‑Mail oder Telefon an."
                      },
                      "fr-FR": {
                        singular: "Pour que les renouvellements restent actifs, votre carte doit être réautorisée via notre paiement sécurisé. Si cela n'est pas résolu, votre abonnement pourrait ne pas être renouvelé. Nous ne stockons pas les informations de votre carte, et Vimeo ne demande jamais les détails complets de votre carte par e-mail ou par téléphone."
                      },
                      "ja-JP": {
                        singular: "更新を継続するためには、安全なチェックアウトでカードの再認証が必要です。解決されない場合、プランの更新に失敗する可能性があります。カード情報は保存しておらず、Vimeoがメールや電話でカードの全情報を尋ねることはありません。"
                      },
                      "ko-KR": {
                        singular: "갱신을 유지하려면 카드가 당사의 안전한 결제 페이지를 통해 재승인되어야 합니다. 해결되지 않으면 요금제가 갱신에 실패할 수 있습니다. 저희는 카드 정보를 저장하지 않으며, Vimeo는 이메일이나 전화로 카드 전체 정보를 절대 요청하지 않습니다."
                      },
                      "pt-BR": {
                        singular: "Para manter as renovações ativas, seu cartão precisa ser reautorizado através do nosso checkout seguro. Caso não seja resolvido, seu plano pode não ser renovado. Não armazenamos os dados do seu cartão, e Vimeo nunca solicita os dados completos do cartão por e-mail ou telefone."
                      },
                      "zh-CN": {
                        singular: "为保持续订有效，您的卡需要通过我们的安全结账流程重新授权。如果未解决，您的计划可能无法续订。我们不存储您的卡信息，且 Vimeo 永远不会通过电子邮件或电话索取完整的卡信息。"
                      }
                    }
                  })
                })]
              }), (0, _v1.jsxs)(_v278.HStack, {
                gap: "12px",
                px: "16px",
                py: "14px",
                bg: "status-info-secondary",
                borderRadius: "12px",
                children: [(0, _v1.jsx)(_v202.Center, {
                  flexShrink: 0,
                  p: "8px",
                  borderRadius: "full",
                  bg: "status-info-primary",
                  color: "background",
                  children: (0, _v1.jsx)(_v484.ShieldCheck, {
                    width: "24px",
                    height: "24px"
                  })
                }), (0, _v1.jsxs)(_v57.Box, {
                  flex: "1",
                  minW: 0,
                  children: [(0, _v1.jsx)(_v31.Text, {
                    variant: "heading-sm",
                    color: "text-primary",
                    children: (0, _v8.translate)({
                      singular: "You won't be charged now",
                      dictionary: {
                        es: {
                          singular: "No se le cobrará ahora"
                        },
                        "de-DE": {
                          singular: "Sie werden jetzt nicht belastet."
                        },
                        "fr-FR": {
                          singular: "Vous ne serez pas facturé maintenant"
                        },
                        "ja-JP": {
                          singular: "今は請求されません"
                        },
                        "ko-KR": {
                          singular: "지금은 요금이 청구되지 않습니다"
                        },
                        "pt-BR": {
                          singular: "Você não será cobrado agora"
                        },
                        "zh-CN": {
                          singular: "现在不会向您收费"
                        }
                      }
                    })
                  }), (0, _v1.jsx)(_v31.Text, {
                    variant: "body-sm",
                    color: "text-secondary",
                    mt: "2px",
                    children: (0, _v8.translate)({
                      singular: "Re-authorization only confirms your card. Your plan renews on {DATE}",
                      replacements: {
                        DATE: _v30
                      },
                      dictionary: {
                        es: {
                          singular: "La reautorización solo confirma su tarjeta. Su plan se renueva el {DATE}"
                        },
                        "de-DE": {
                          singular: "Die erneute Autorisierung bestätigt nur Ihre Karte. Ihr Plan wird am {DATE} verlängert."
                        },
                        "fr-FR": {
                          singular: "La réautorisation confirme uniquement votre carte. Votre abonnement sera renouvelé le {DATE}"
                        },
                        "ja-JP": {
                          singular: "再認証はカードの確認のみ行います。プランは{DATE}に更新されます"
                        },
                        "ko-KR": {
                          singular: "재승인은 카드 확인만 수행합니다. 요금제는 {DATE}에 갱신됩니다"
                        },
                        "pt-BR": {
                          singular: "A reautorização apenas confirma seu cartão. Seu plano será renovado em {DATE}"
                        },
                        "zh-CN": {
                          singular: "重新授权仅用于确认您的卡。您的计划将于 {DATE} 续订。"
                        }
                      }
                    })
                  })]
                })]
              }), (0, _v1.jsx)(_v482.Elements, {
                stripe: null,
                children: (0, _v1.jsx)(_v490.AddPaymentMethod, {
                  isInline: !0,
                  pmId: _v31,
                  addNewPaymentMethodHref: _v497,
                  paymentFormType: _v491.PaymentFormTypes.TYPE_CREDIT_CARD,
                  stripeConfig: null,
                  openInvoice: null,
                  onPostpone: _v33,
                  onAddNew: _v45,
                  onConfirm: _v44,
                  onSuccess: _v34
                })
              })]
            })
          })
        })]
      }) : null : (0, _v1.jsxs)(_v25.Modal, {
        isOpen: !0,
        size: "md",
        isCentered: !0,
        scrollBehavior: "inside",
        closeOnEsc: !1,
        closeOnOverlayClick: !1,
        onClose: () => void 0,
        children: [(0, _v1.jsx)(_v30.ModalOverlay, {}), (0, _v1.jsxs)(_v28.ModalContent, {
          maxWidth: {
            base: "calc(100vw - 32px)",
            md: "480px"
          },
          width: {
            base: "calc(100vw - 32px)",
            md: "480px"
          },
          maxH: {
            base: "calc(100dvh - 48px)",
            md: "85dvh"
          },
          borderRadius: "20px",
          overflow: "hidden",
          children: [(0, _v1.jsx)(_v26.ModalBody, {
            px: "24px",
            pt: "24px",
            pb: "8px",
            flex: "1",
            minH: 0,
            overflowY: "auto",
            children: (0, _v1.jsxs)(_v253.VStack, {
              gap: "24px",
              align: "stretch",
              children: [(0, _v1.jsxs)(_v57.Box, {
                children: [(0, _v1.jsx)(_v31.Text, {
                  variant: "heading-md",
                  children: (0, _v8.translate)({
                    singular: "Confirm your card for future renewals",
                    dictionary: {
                      es: {
                        singular: "Confirme su tarjeta para renovaciones futuras"
                      },
                      "de-DE": {
                        singular: "Bestätigen Sie Ihre Karte für zukünftige Verlängerungen"
                      },
                      "fr-FR": {
                        singular: "Confirmez votre carte pour les renouvellements futurs"
                      },
                      "ja-JP": {
                        singular: "今後の更新のためにカードを確認してください"
                      },
                      "ko-KR": {
                        singular: "향후 갱신을 위해 카드를 확인하세요"
                      },
                      "pt-BR": {
                        singular: "Confirme seu cartão para renovações futuras"
                      },
                      "zh-CN": {
                        singular: "确认您的卡以便将来续订"
                      }
                    }
                  })
                }), (0, _v1.jsx)(_v31.Text, {
                  variant: "body-md",
                  color: "text-secondary",
                  mt: "8px",
                  children: (0, _v8.translate)({
                    singular: "To keep renewals active, your card needs re-authorization through our secure checkout. If not resolved, your plan might fail to renew. We don't store your card details, and Vimeo never asks for full card details by email or phone.",
                    dictionary: {
                      es: {
                        singular: "Para mantener activas las renovaciones, su tarjeta necesita reautorización a través de nuestro proceso de pago seguro. Si no se resuelve, es posible que su plan no se renueve. No guardamos los datos de su tarjeta, y Vimeo nunca solicita los datos completos de la tarjeta por correo electrónico ni por teléfono."
                      },
                      "de-DE": {
                        singular: "Um Verlängerungen aktiv zu halten, muss Ihre Karte über unseren sicheren Checkout erneut autorisiert werden. Sollte dieses Problem nicht behoben werden, kann die Verlängerung Ihres Plans fehlschlagen. Wir speichern Ihre Kartendaten nicht, und Vimeo fordert niemals vollständige Kartendaten per E‑Mail oder Telefon an."
                      },
                      "fr-FR": {
                        singular: "Pour que les renouvellements restent actifs, votre carte doit être réautorisée via notre paiement sécurisé. Si cela n'est pas résolu, votre abonnement pourrait ne pas être renouvelé. Nous ne stockons pas les informations de votre carte, et Vimeo ne demande jamais les détails complets de votre carte par e-mail ou par téléphone."
                      },
                      "ja-JP": {
                        singular: "更新を継続するためには、安全なチェックアウトでカードの再認証が必要です。解決されない場合、プランの更新に失敗する可能性があります。カード情報は保存しておらず、Vimeoがメールや電話でカードの全情報を尋ねることはありません。"
                      },
                      "ko-KR": {
                        singular: "갱신을 유지하려면 카드가 당사의 안전한 결제 페이지를 통해 재승인되어야 합니다. 해결되지 않으면 요금제가 갱신에 실패할 수 있습니다. 저희는 카드 정보를 저장하지 않으며, Vimeo는 이메일이나 전화로 카드 전체 정보를 절대 요청하지 않습니다."
                      },
                      "pt-BR": {
                        singular: "Para manter as renovações ativas, seu cartão precisa ser reautorizado através do nosso checkout seguro. Caso não seja resolvido, seu plano pode não ser renovado. Não armazenamos os dados do seu cartão, e Vimeo nunca solicita os dados completos do cartão por e-mail ou telefone."
                      },
                      "zh-CN": {
                        singular: "为保持续订有效，您的卡需要通过我们的安全结账流程重新授权。如果未解决，您的计划可能无法续订。我们不存储您的卡信息，且 Vimeo 永远不会通过电子邮件或电话索取完整的卡信息。"
                      }
                    }
                  })
                })]
              }), (0, _v1.jsxs)(_v278.HStack, {
                gap: "12px",
                px: "16px",
                py: "14px",
                bg: "status-info-secondary",
                borderRadius: "12px",
                children: [(0, _v1.jsx)(_v202.Center, {
                  flexShrink: 0,
                  p: "8px",
                  borderRadius: "full",
                  bg: "status-info-primary",
                  color: "background",
                  children: (0, _v1.jsx)(_v484.ShieldCheck, {
                    width: "24px",
                    height: "24px"
                  })
                }), (0, _v1.jsxs)(_v57.Box, {
                  flex: "1",
                  minW: 0,
                  children: [(0, _v1.jsx)(_v31.Text, {
                    variant: "heading-sm",
                    color: "text-primary",
                    children: (0, _v8.translate)({
                      singular: "You won't be charged now",
                      dictionary: {
                        es: {
                          singular: "No se le cobrará ahora"
                        },
                        "de-DE": {
                          singular: "Sie werden jetzt nicht belastet."
                        },
                        "fr-FR": {
                          singular: "Vous ne serez pas facturé maintenant"
                        },
                        "ja-JP": {
                          singular: "今は請求されません"
                        },
                        "ko-KR": {
                          singular: "지금은 요금이 청구되지 않습니다"
                        },
                        "pt-BR": {
                          singular: "Você não será cobrado agora"
                        },
                        "zh-CN": {
                          singular: "现在不会向您收费"
                        }
                      }
                    })
                  }), (0, _v1.jsx)(_v31.Text, {
                    variant: "body-sm",
                    color: "text-secondary",
                    mt: "2px",
                    children: (0, _v8.translate)({
                      singular: "Re-authorization only confirms your card. Your plan renews on {DATE}",
                      replacements: {
                        DATE: _v30
                      },
                      dictionary: {
                        es: {
                          singular: "La reautorización solo confirma su tarjeta. Su plan se renueva el {DATE}"
                        },
                        "de-DE": {
                          singular: "Die erneute Autorisierung bestätigt nur Ihre Karte. Ihr Plan wird am {DATE} verlängert."
                        },
                        "fr-FR": {
                          singular: "La réautorisation confirme uniquement votre carte. Votre abonnement sera renouvelé le {DATE}"
                        },
                        "ja-JP": {
                          singular: "再認証はカードの確認のみ行います。プランは{DATE}に更新されます"
                        },
                        "ko-KR": {
                          singular: "재승인은 카드 확인만 수행합니다. 요금제는 {DATE}에 갱신됩니다"
                        },
                        "pt-BR": {
                          singular: "A reautorização apenas confirma seu cartão. Seu plano será renovado em {DATE}"
                        },
                        "zh-CN": {
                          singular: "重新授权仅用于确认您的卡。您的计划将于 {DATE} 续订。"
                        }
                      }
                    })
                  })]
                })]
              }), (0, _v1.jsxs)(_v278.HStack, {
                justifyContent: "space-between",
                px: "12px",
                py: "10px",
                bg: "fill-component",
                borderRadius: "8px",
                children: [(0, _v1.jsxs)(_v278.HStack, {
                  gap: "8px",
                  children: [(0, _v1.jsx)(_v502, {
                    cardBrand: _v29
                  }), (0, _v1.jsxs)(_v31.Text, {
                    variant: "body-md",
                    color: "text-tertiary",
                    children: [_v29 ? `${_v29} ` : "", "••••", _v28]
                  })]
                }), (0, _v1.jsx)(_v202.Center, {
                  bg: "text-secondary",
                  px: "8px",
                  py: "3px",
                  borderRadius: "6px",
                  children: (0, _v1.jsx)(_v31.Text, {
                    fontSize: "11px",
                    fontWeight: "500",
                    color: "background",
                    whiteSpace: "nowrap",
                    children: (0, _v8.translate)({
                      singular: "Pending authorization",
                      dictionary: {
                        es: {
                          singular: "Autorización pendiente"
                        },
                        "de-DE": {
                          singular: "Autorisierung ausstehend"
                        },
                        "fr-FR": {
                          singular: "Autorisation en attente"
                        },
                        "ja-JP": {
                          singular: "承認待ち"
                        },
                        "ko-KR": {
                          singular: "승인 대기 중"
                        },
                        "pt-BR": {
                          singular: "Autorização pendente"
                        },
                        "zh-CN": {
                          singular: "待授权"
                        }
                      }
                    })
                  })
                })]
              })]
            })
          }), (0, _v1.jsx)(_v29.ModalFooter, {
            px: "24px",
            pt: "20px",
            pb: "24px",
            children: (0, _v1.jsxs)(_v253.VStack, {
              gap: "12px",
              align: "stretch",
              width: "100%",
              children: [(0, _v1.jsx)(_v22.Button, {
                as: "a",
                href: "/checkout/payments/verify",
                variant: "primary",
                size: "md",
                width: "100%",
                onClick: _v44,
                children: (0, _v8.translate)({
                  singular: "Confirm payment method",
                  dictionary: {
                    es: {
                      singular: "Confirmar método de pago"
                    },
                    "de-DE": {
                      singular: "Zahlungsmethode bestätigen"
                    },
                    "fr-FR": {
                      singular: "Confirmer le moyen de paiement"
                    },
                    "ja-JP": {
                      singular: "支払い方法を確認"
                    },
                    "ko-KR": {
                      singular: "결제 수단 확인"
                    },
                    "pt-BR": {
                      singular: "Confirmar método de pagamento"
                    },
                    "zh-CN": {
                      singular: "确认支付方式"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v22.Button, {
                as: "a",
                href: _v497,
                variant: "secondary",
                size: "md",
                width: "100%",
                onClick: _v45,
                children: (0, _v8.translate)({
                  singular: "Add new payment method instead",
                  dictionary: {
                    es: {
                      singular: "Agregar nuevo método de pago en su lugar"
                    },
                    "de-DE": {
                      singular: "Stattdessen neue Zahlungsmethode hinzufügen"
                    },
                    "fr-FR": {
                      singular: "Ajouter plutôt un nouveau moyen de paiement"
                    },
                    "ja-JP": {
                      singular: "代わりに新しい支払い方法を追加"
                    },
                    "ko-KR": {
                      singular: "대신 새 결제 수단을 추가"
                    },
                    "pt-BR": {
                      singular: "Adicionar novo método de pagamento em vez disso"
                    },
                    "zh-CN": {
                      singular: "改为添加新的支付方式"
                    }
                  }
                })
              })]
            })
          })]
        })]
      }) : null;
    };
  var _v504 = _v0.i(0),
    _v505 = _v0.i(0),
    _v506 = _v0.i(0),
    _v507 = _v0.i(0),
    _v508 = _v0.i(0),
    _v509 = _v0.i(0);
  function _v510() {
    return (0, _v1.jsx)(_v43.Flex, {
      align: "center",
      justify: "center",
      width: "100%",
      minHeight: (0, _v44.rem)(240),
      p: (0, _v44.rem)(24),
      children: (0, _v1.jsx)(_v259.Spinner, {
        size: "lg"
      })
    });
  }
  let _v511 = "--toast-z-index";
  function _v512({
    onClose: _v0,
    children: _v1
  }) {
    return (0, _v3.useEffect)(() => {
      let _v0 = document.documentElement,
        _v1 = _v0.style.getPropertyValue(_v511);
      return _v0.style.setProperty(_v511, String(0)), () => {
        _v1 ? _v0.style.setProperty(_v511, _v1) : _v0.style.removeProperty(_v511);
      };
    }, []), (0, _v1.jsxs)(_v25.Modal, {
      isOpen: !0,
      onClose: _v0,
      isCentered: !0,
      size: ["full", "md"],
      scrollBehavior: "outside",
      closeOnOverlayClick: !1,
      closeOnEsc: !1,
      autoFocus: !1,
      children: [(0, _v1.jsx)(_v30.ModalOverlay, {
        zIndex: 0
      }), (0, _v1.jsx)(_v28.ModalContent, {
        containerProps: {
          zIndex: 0
        },
        maxWidth: {
          base: "100vw",
          md: (0, _v44.rem)(480)
        },
        width: {
          base: "100vw",
          md: (0, _v44.rem)(480)
        },
        borderRadius: {
          base: "0",
          md: (0, _v44.rem)(20)
        },
        overflow: "hidden",
        children: _v1
      })]
    });
  }
  var _v513 = _v0.i(0),
    _v514 = _v0.i(0),
    _v515 = _v0.i(0);
  function _v516({
    name: _v0,
    src: _v1
  }) {
    return (0, _v1.jsxs)(_v43.Flex, {
      direction: "column",
      align: "center",
      gap: (0, _v44.rem)(8),
      p: (0, _v44.rem)(8),
      borderRadius: (0, _v44.rem)(16),
      minW: 0,
      children: [(0, _v1.jsx)(_v513.Avatar, {
        size: "lg",
        shape: "full",
        src: _v1,
        alt: _v0,
        nameProps: {
          name: _v0
        }
      }), (0, _v1.jsx)(_v31.Text, {
        variant: "heading-xs",
        color: "text-primary",
        maxW: "100%",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        children: _v0
      })]
    });
  }
  function _v517({
    agency: _v0,
    clientName: _v1,
    title: _v2,
    subtitle: _v3,
    onLogout: _v4
  }) {
    return (0, _v1.jsxs)(_v43.Flex, {
      direction: "column",
      align: "center",
      gap: (0, _v44.rem)(24),
      width: "100%",
      children: [(0, _v1.jsxs)(_v43.Flex, {
        direction: "column",
        align: "center",
        gap: (0, _v44.rem)(8),
        width: "100%",
        children: [(0, _v1.jsxs)(_v57.Box, {
          display: "inline-grid",
          gridTemplateColumns: "minmax(0, 1fr) auto minmax(0, 1fr)",
          alignItems: "center",
          gap: (0, _v44.rem)(4),
          maxW: "100%",
          children: [(0, _v1.jsx)(_v516, {
            name: _v0.displayName,
            src: _v0.avatarSrc
          }), (0, _v1.jsx)(_v515.ArrowRight, {
            boxSize: (0, _v44.rem)(20),
            color: "text-primary",
            "aria-hidden": !0
          }), (0, _v1.jsx)(_v516, {
            name: _v1
          })]
        }), (0, _v1.jsxs)(_v57.Box, {
          textAlign: "center",
          children: [(0, _v1.jsx)(_v31.Text, {
            variant: "body-md",
            color: "text-secondary",
            children: (0, _v8.translate)({
              singular: "Want to use a different account?",
              dictionary: {
                es: {
                  singular: "¿Quieres usar otra cuenta?"
                },
                "de-DE": {
                  singular: "Möchtest du ein anderes Konto verwenden?"
                },
                "fr-FR": {
                  singular: "Vous souhaitez utiliser un autre compte ?"
                },
                "ja-JP": {
                  singular: "別のアカウントを使いますか？"
                },
                "ko-KR": {
                  singular: "다른 계정을 사용하시겠습니까?"
                },
                "pt-BR": {
                  singular: "Quer usar outra conta?"
                },
                "zh-CN": {
                  singular: "想使用其他账户吗？"
                }
              }
            })
          }), (0, _v1.jsx)(_v31.Text, {
            variant: "body-md",
            color: "text-secondary",
            children: (0, _v8.translate)({
              singular: "{LOGOUT}Log out{/LOGOUT} and sign in with another one.",
              replacements: {
                LOGOUT: _v0 => (0, _v1.jsx)(_v514.Link, {
                  as: "button",
                  type: "button",
                  onClick: _v4,
                  variant: "inline-secondary",
                  background: "transparent",
                  padding: 0,
                  height: "auto",
                  textDecoration: "underline",
                  children: _v0
                })
              },
              dictionary: {
                es: {
                  singular: "{LOGOUT}Cerrar sesión{/LOGOUT} e inicia sesión con otra cuenta."
                },
                "de-DE": {
                  singular: "{LOGOUT}Abmelden{/LOGOUT} und dich mit einem anderen Konto anmelden."
                },
                "fr-FR": {
                  singular: "{LOGOUT}Se déconnecter{/LOGOUT} et connectez-vous avec un autre compte."
                },
                "ja-JP": {
                  singular: "{LOGOUT}ログアウト{/LOGOUT} と別のアカウントでサインインしてください。"
                },
                "ko-KR": {
                  singular: "{LOGOUT}로그아웃{/LOGOUT}하고 다른 계정으로 로그인하세요."
                },
                "pt-BR": {
                  singular: "{LOGOUT}Sair{/LOGOUT} e faça login com outra conta."
                },
                "zh-CN": {
                  singular: "{LOGOUT}登出{/LOGOUT}并用另一个账户登录。"
                }
              }
            })
          })]
        })]
      }), (0, _v1.jsxs)(_v43.Flex, {
        direction: "column",
        align: "flex-start",
        gap: (0, _v44.rem)(8),
        width: "100%",
        children: [(0, _v1.jsx)(_v31.Text, {
          variant: "heading-md",
          color: "text-primary",
          width: "100%",
          children: _v2
        }), _v3 ? (0, _v1.jsx)(_v31.Text, {
          variant: "body-md",
          color: "text-primary",
          width: "100%",
          children: _v3
        }) : null]
      })]
    });
  }
  var _v518 = _v0.i(0);
  function _v519({
    agencyUserId: _v0
  }) {
    let {
        displayName: _v1
      } = (0, _v506.useAgencyIdentity)(_v0, "the"),
      _v2 = (0, _v8.translate)({
        singular: "{name} can upload and manage videos on your behalf. You can remove their access at any time.",
        replacements: {
          name: _v1
        },
        dictionary: {
          es: {
            singular: "{name} puede subir y gestionar videos en tu nombre. Puedes revocar su acceso en cualquier momento."
          },
          "de-DE": {
            singular: "{name} kann in deinem Namen Videos hochladen und verwalten. Du kannst ihren Zugriff jederzeit entziehen."
          },
          "fr-FR": {
            singular: "{name} peut téléverser et gérer des vidéos en votre nom. Vous pouvez retirer son accès à tout moment."
          },
          "ja-JP": {
            singular: "{name} はあなたに代わって動画をアップロードおよび管理できます。アクセス権はいつでも削除できます。"
          },
          "ko-KR": {
            singular: "{name}은(는) 귀하를 대신해 동영상을 업로드하고 관리할 수 있습니다. 접근 권한은 언제든 해제할 수 있습니다."
          },
          "pt-BR": {
            singular: "{name} pode carregar e gerenciar vídeos em seu nome. Você pode remover o acesso a qualquer momento."
          },
          "zh-CN": {
            singular: "{name} 可以代表您上传和管理视频。您可以随时撤销他们的访问权限。"
          }
        }
      });
    return (0, _v1.jsxs)(_v43.Flex, {
      align: "flex-start",
      gap: (0, _v44.rem)(6),
      p: (0, _v44.rem)(12),
      borderRadius: (0, _v44.rem)(12),
      bg: "status-info-secondary",
      width: "100%",
      children: [(0, _v1.jsx)(_v518.Eye, {
        boxSize: (0, _v44.rem)(20),
        color: "status-info-primary",
        flexShrink: 0,
        "aria-hidden": !0
      }), (0, _v1.jsxs)(_v57.Box, {
        children: [(0, _v1.jsx)(_v31.Text, {
          variant: "heading-xs",
          color: "text-primary",
          children: (0, _v8.translate)({
            singular: "You are the Owner.",
            dictionary: {
              es: {
                singular: "Eres el propietario."
              },
              "de-DE": {
                singular: "Du bist der Inhaber."
              },
              "fr-FR": {
                singular: "Vous êtes le propriétaire."
              },
              "ja-JP": {
                singular: "あなたはオーナーです。"
              },
              "ko-KR": {
                singular: "귀하는 계정 소유자입니다."
              },
              "pt-BR": {
                singular: "Você é o proprietário."
              },
              "zh-CN": {
                singular: "您是所有者。"
              }
            }
          })
        }), (0, _v1.jsx)(_v31.Text, {
          variant: "body-md",
          color: "text-secondary",
          children: _v2
        })]
      })]
    });
  }
  function _v520({
    agency: _v0,
    agencyUserId: _v1,
    clientName: _v2,
    isAccepting: _v3,
    onAccept: _v4,
    onDecline: _v5,
    onLogout: _v6
  }) {
    let _v7 = (0, _v8.translate)({
      singular: "{name} wants to manage your account",
      replacements: {
        name: _v0.displayName
      },
      dictionary: {
        es: {
          singular: "{name} quiere gestionar tu cuenta"
        },
        "de-DE": {
          singular: "{name} möchte dein Konto verwalten"
        },
        "fr-FR": {
          singular: "{name} souhaite gérer votre compte"
        },
        "ja-JP": {
          singular: "{name} があなたのアカウントを管理したいと希望しています"
        },
        "ko-KR": {
          singular: "{name}님이 귀하의 계정을 관리하려고 합니다."
        },
        "pt-BR": {
          singular: "{name} quer gerenciar sua conta"
        },
        "zh-CN": {
          singular: "{name} 想要管理您的账户"
        }
      }
    });
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v61.ModalHeader, {
        pt: (0, _v44.rem)(24),
        pb: (0, _v44.rem)(8),
        px: (0, _v44.rem)(24),
        children: (0, _v1.jsx)(_v517, {
          agency: _v0,
          clientName: _v2,
          title: _v7,
          onLogout: _v6
        })
      }), (0, _v1.jsx)(_v26.ModalBody, {
        px: (0, _v44.rem)(24),
        py: (0, _v44.rem)(20),
        children: (0, _v1.jsx)(_v519, {
          agencyUserId: _v1
        })
      }), (0, _v1.jsx)(_v29.ModalFooter, {
        px: (0, _v44.rem)(24),
        pt: "0",
        pb: (0, _v44.rem)(24),
        children: (0, _v1.jsxs)(_v43.Flex, {
          direction: "column",
          align: "center",
          gap: (0, _v44.rem)(8),
          width: "100%",
          children: [(0, _v1.jsx)(_v22.Button, {
            variant: "primary",
            size: "md",
            width: "100%",
            onClick: _v4,
            isLoading: _v3,
            children: (0, _v8.translate)({
              singular: "Accept",
              dictionary: {
                es: {
                  singular: "Aceptar"
                },
                "de-DE": {
                  singular: "Akzeptieren"
                },
                "fr-FR": {
                  singular: "Accepter"
                },
                "ja-JP": {
                  singular: "同意する"
                },
                "ko-KR": {
                  singular: "수락"
                },
                "pt-BR": {
                  singular: "Aceitar"
                },
                "zh-CN": {
                  singular: "接受"
                }
              }
            })
          }), (0, _v1.jsx)(_v22.Button, {
            variant: "tertiary",
            size: "md",
            width: "100%",
            onClick: _v5,
            isDisabled: _v3,
            children: (0, _v8.translate)({
              singular: "Decline",
              dictionary: {
                es: {
                  singular: "Rechazar"
                },
                "de-DE": {
                  singular: "Ablehnen"
                },
                "fr-FR": {
                  singular: "Refuser"
                },
                "ja-JP": {
                  singular: "辞退する"
                },
                "ko-KR": {
                  singular: "거절"
                },
                "pt-BR": {
                  singular: "Recusar"
                },
                "zh-CN": {
                  singular: "拒绝"
                }
              }
            })
          })]
        })
      })]
    });
  }
  var _v521 = _v0.i(0),
    _v522 = _v0.i(0),
    _v523 = _v0.i(0),
    _v524 = _v0.i(0);
  function _v525({
    agency: _v0,
    agencyUserId: _v1,
    clientName: _v2,
    isTrialEligible: _v3,
    onUpgrade: _v4,
    onDecline: _v5,
    onLogout: _v6
  }) {
    let _v7 = (0, _v8.translate)({
        singular: "{name} wants to manage your account",
        replacements: {
          name: _v0.displayName
        },
        dictionary: {
          es: {
            singular: "{name} quiere gestionar tu cuenta"
          },
          "de-DE": {
            singular: "{name} möchte dein Konto verwalten"
          },
          "fr-FR": {
            singular: "{name} souhaite gérer votre compte"
          },
          "ja-JP": {
            singular: "{name} があなたのアカウントを管理したいと希望しています"
          },
          "ko-KR": {
            singular: "{name}님이 귀하의 계정을 관리하려고 합니다."
          },
          "pt-BR": {
            singular: "{name} quer gerenciar sua conta"
          },
          "zh-CN": {
            singular: "{name} 想要管理您的账户"
          }
        }
      }),
      _v8 = _v3 ? (0, _v8.translate)({
        singular: "Accept and try Standard",
        dictionary: {
          es: {
            singular: "Aceptar y probar Standard"
          },
          "de-DE": {
            singular: "Akzeptieren und Standard testen"
          },
          "fr-FR": {
            singular: "Accepter et essayer Standard"
          },
          "ja-JP": {
            singular: "Standard を承諾してお試しください"
          },
          "ko-KR": {
            singular: "수락하고 Standard를 체험해 보세요"
          },
          "pt-BR": {
            singular: "Aceitar e experimentar o Standard"
          },
          "zh-CN": {
            singular: "接受并试用 Standard"
          }
        }
      }) : (0, _v8.translate)({
        singular: "Accept and upgrade to Standard",
        dictionary: {
          es: {
            singular: "Aceptar y actualizar a Standard"
          },
          "de-DE": {
            singular: "Akzeptieren und auf Standard upgraden"
          },
          "fr-FR": {
            singular: "Accepter et passer au plan Standard"
          },
          "ja-JP": {
            singular: "承諾して Standard にアップグレード"
          },
          "ko-KR": {
            singular: "수락하고 Standard로 업그레이드하세요"
          },
          "pt-BR": {
            singular: "Aceitar e fazer upgrade para o Standard"
          },
          "zh-CN": {
            singular: "接受并升级到 Standard"
          }
        }
      });
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v61.ModalHeader, {
        pt: (0, _v44.rem)(24),
        pb: (0, _v44.rem)(8),
        px: (0, _v44.rem)(24),
        children: (0, _v1.jsx)(_v517, {
          agency: _v0,
          clientName: _v2,
          title: _v7,
          subtitle: (0, _v8.translate)({
            singular: "To let an agency manage your account, you need to be on the Standard plan.",
            dictionary: {
              es: {
                singular: "Para permitir que una agencia gestione tu cuenta, necesitas estar en el plan Standard."
              },
              "de-DE": {
                singular: "Um einer Agentur zu erlauben, dein Konto zu verwalten, musst du den Standard-Plan haben."
              },
              "fr-FR": {
                singular: "Pour permettre à une agence de gérer votre compte, vous devez être sur le plan Standard."
              },
              "ja-JP": {
                singular: "代理店にアカウントを管理させるには、Standard プランに加入している必要があります。"
              },
              "ko-KR": {
                singular: "에이전시가 귀하의 계정을 관리하도록 하려면 Standard 요금제에 가입되어 있어야 합니다."
              },
              "pt-BR": {
                singular: "Para permitir que uma agência gerencie sua conta, você precisa estar no plano Standard."
              },
              "zh-CN": {
                singular: "要让代理机构管理您的账户，您需要订阅 Standard 计划。"
              }
            }
          }),
          onLogout: _v6
        })
      }), (0, _v1.jsx)(_v57.Box, {
        px: (0, _v44.rem)(24),
        py: (0, _v44.rem)(20),
        children: (0, _v1.jsxs)(_v43.Flex, {
          direction: "column",
          align: "center",
          gap: (0, _v44.rem)(32),
          width: "100%",
          children: [(0, _v1.jsx)(_v43.Flex, {
            direction: "column",
            align: "flex-start",
            gap: (0, _v44.rem)(16),
            width: "100%",
            children: [{
              icon: (0, _v1.jsx)(_v521.Groups, {
                boxSize: (0, _v44.rem)(20),
                color: "text-primary"
              }),
              title: (0, _v8.translate)({
                singular: "Collaboration",
                dictionary: {
                  es: {
                    singular: "Colaboración"
                  },
                  "de-DE": {
                    singular: "Zusammenarbeit"
                  },
                  "ja-JP": {
                    singular: "コラボレーション"
                  },
                  "ko-KR": {
                    singular: "협업"
                  },
                  "pt-BR": {
                    singular: "Colaboração"
                  },
                  "zh-CN": {
                    singular: "协作"
                  }
                }
              }),
              description: (0, _v8.translate)({
                singular: "Invite members to collaborate",
                dictionary: {
                  es: {
                    singular: "Invitar a miembros a colaborar"
                  },
                  "de-DE": {
                    singular: "Mitglieder zur Zusammenarbeit einladen"
                  },
                  "fr-FR": {
                    singular: "Inviter des membres à collaborer"
                  },
                  "ja-JP": {
                    singular: "共同作業のためにメンバーを招待"
                  },
                  "ko-KR": {
                    singular: "협업할 구성원을 초대하세요"
                  },
                  "pt-BR": {
                    singular: "Convide membros para colaborar"
                  },
                  "zh-CN": {
                    singular: "邀请成员协作"
                  }
                }
              })
            }, {
              icon: (0, _v1.jsx)(_v522.StyleSparkle, {
                boxSize: (0, _v44.rem)(20),
                color: "text-primary"
              }),
              title: (0, _v8.translate)({
                singular: "Make your videos shine",
                dictionary: {
                  es: {
                    singular: "Haga que sus videos brillen"
                  },
                  "de-DE": {
                    singular: "Lassen Sie Ihre Videos strahlen"
                  },
                  "fr-FR": {
                    singular: "Mettez vos vidéos en valeur"
                  },
                  "ja-JP": {
                    singular: "動画をさらに魅力的に"
                  },
                  "ko-KR": {
                    singular: "동영상을 명작으로 만들기"
                  },
                  "pt-BR": {
                    singular: "Faça seus vídeos brilharem"
                  },
                  "zh-CN": {
                    singular: "让您的视频熠熠生辉"
                  }
                }
              }),
              description: (0, _v8.translate)({
                singular: "4TB of storage, 4k ultra-HD, and our always ad-free player",
                dictionary: {
                  es: {
                    singular: "4TB de almacenamiento, 4K ultra-HD y nuestro reproductor siempre sin anuncios"
                  },
                  "de-DE": {
                    singular: "4TB Speicher, 4k ultra-HD und unser stets werbefreier Player"
                  },
                  "fr-FR": {
                    singular: "4 To de stockage, 4k ultra-HD, et notre lecteur toujours sans publicité"
                  },
                  "ja-JP": {
                    singular: "4TB のストレージ、4k ultra-HD、そして常に広告なしのプレーヤー"
                  },
                  "ko-KR": {
                    singular: "4TB의 저장 공간, 4k ultra-HD, 그리고 항상 광고 없는 플레이어"
                  },
                  "pt-BR": {
                    singular: "4TB de armazenamento, 4k ultra-HD e nosso player sempre sem anúncios"
                  },
                  "zh-CN": {
                    singular: "4TB 存储、4K ultra-HD，以及我们始终无广告的播放器"
                  }
                }
              })
            }, {
              icon: (0, _v1.jsx)(_v524.WatchPlay, {
                boxSize: (0, _v44.rem)(20),
                color: "text-primary"
              }),
              title: (0, _v8.translate)({
                singular: "Showcase your work",
                dictionary: {
                  es: {
                    singular: "Presenta tu trabajo"
                  },
                  "de-DE": {
                    singular: "Präsentiere dein Werk"
                  },
                  "fr-FR": {
                    singular: "Présentez votre travail"
                  },
                  "ja-JP": {
                    singular: "自分の作品を披露"
                  },
                  "ko-KR": {
                    singular: "작품 선보이기"
                  },
                  "pt-BR": {
                    singular: "Mostre seu trabalho"
                  }
                }
              }),
              description: (0, _v8.translate)({
                singular: "Embeddable video portfolio with customizable layouts and designs",
                dictionary: {
                  es: {
                    singular: "Portafolio de videos insertables con diseños y maquetaciones personalizables"
                  },
                  "de-DE": {
                    singular: "Einbettbares Video-Portfolio mit anpassbaren Layouts und Designs"
                  },
                  "fr-FR": {
                    singular: "Portfolio vidéo intégrable avec mises en page et designs personnalisables"
                  },
                  "ja-JP": {
                    singular: "埋め込み可能な動画ポートフォリオ。レイアウトやデザインも自由にカスタマイズ。"
                  },
                  "ko-KR": {
                    singular: "임베딩할 수 있는 커스텀 가능 레이아웃과 디자인의 동영상 포트폴리오"
                  },
                  "pt-BR": {
                    singular: "Portfólio de vídeo incorporável com layouts e designs personalizáveis"
                  },
                  "zh-CN": {
                    singular: "可定制布局与设计的嵌入式视频作品集"
                  }
                }
              })
            }, {
              icon: (0, _v1.jsx)(_v523.Verified, {
                boxSize: (0, _v44.rem)(20),
                color: "text-primary"
              }),
              title: (0, _v8.translate)({
                singular: "Cancel anytime",
                dictionary: {
                  es: {
                    singular: "Cancele cuando quiera"
                  },
                  "de-DE": {
                    singular: "Jederzeit kündbar"
                  },
                  "fr-FR": {
                    singular: "Annulation possible à tout moment"
                  },
                  "ja-JP": {
                    singular: "いつでもキャンセル可能"
                  },
                  "ko-KR": {
                    singular: "언제든지 취소할 수 있습니다."
                  },
                  "pt-BR": {
                    singular: "Cancele a qualquer momento"
                  },
                  "zh-CN": {
                    singular: "可随时取消"
                  }
                }
              }),
              description: _v3 ? (0, _v8.translate)({
                singular: "We’ll remind you before your trial ends",
                dictionary: {
                  es: {
                    singular: "Se lo recordaremos antes de que finalice su período de prueba"
                  },
                  "de-DE": {
                    singular: "Wir werden Sie erinnern, bevor Ihr Probeabo endet"
                  },
                  "fr-FR": {
                    singular: "Nous vous enverrons un rappel avant la fin de votre essai"
                  },
                  "ja-JP": {
                    singular: "トライアル終了前にリマインダーをお送りします"
                  },
                  "ko-KR": {
                    singular: "체험 종료 전 알림 제공"
                  },
                  "pt-BR": {
                    singular: "Avisaremos quando o teste estiver terminando"
                  },
                  "zh-CN": {
                    singular: "我们会在试用期结束前提醒您。"
                  }
                }
              }) : (0, _v8.translate)({
                singular: "Cancel your subscription whenever you need",
                dictionary: {
                  es: {
                    singular: "Cancela tu suscripción cuando lo necesites"
                  },
                  "de-DE": {
                    singular: "Du kannst dein Abonnement jederzeit kündigen."
                  },
                  "fr-FR": {
                    singular: "Résiliez votre abonnement quand vous le souhaitez"
                  },
                  "ja-JP": {
                    singular: "必要なときにいつでもサブスクリプションを解約できます"
                  },
                  "ko-KR": {
                    singular: "필요할 때 언제든 구독을 취소할 수 있습니다"
                  },
                  "pt-BR": {
                    singular: "Cancele sua assinatura sempre que precisar"
                  },
                  "zh-CN": {
                    singular: "需要时随时取消订阅"
                  }
                }
              })
            }].map(_v0 => (0, _v1.jsxs)(_v43.Flex, {
              gap: (0, _v44.rem)(12),
              align: "flex-start",
              width: "100%",
              children: [(0, _v1.jsx)(_v57.Box, {
                display: "flex",
                flexShrink: 0,
                children: _v0.icon
              }), (0, _v1.jsxs)(_v43.Flex, {
                direction: "column",
                align: "flex-start",
                flex: "1",
                minW: "0",
                children: [(0, _v1.jsx)(_v31.Text, {
                  variant: "heading-xs",
                  color: "text-primary",
                  width: "100%",
                  children: _v0.title
                }), (0, _v1.jsx)(_v31.Text, {
                  variant: "body-md",
                  color: "text-secondary",
                  width: "100%",
                  children: _v0.description
                })]
              })]
            }, _v0.title))
          }), (0, _v1.jsx)(_v519, {
            agencyUserId: _v1
          })]
        })
      }), (0, _v1.jsx)(_v29.ModalFooter, {
        px: (0, _v44.rem)(24),
        pt: "0",
        pb: (0, _v44.rem)(24),
        children: (0, _v1.jsxs)(_v43.Flex, {
          direction: "column",
          align: "center",
          gap: (0, _v44.rem)(8),
          width: "100%",
          children: [(0, _v1.jsx)(_v22.Button, {
            variant: "primary",
            size: "md",
            width: "100%",
            onClick: _v4,
            children: _v8
          }), (0, _v1.jsx)(_v22.Button, {
            variant: "tertiary",
            size: "md",
            width: "100%",
            onClick: _v5,
            children: (0, _v8.translate)({
              singular: "Decline",
              dictionary: {
                es: {
                  singular: "Rechazar"
                },
                "de-DE": {
                  singular: "Ablehnen"
                },
                "fr-FR": {
                  singular: "Refuser"
                },
                "ja-JP": {
                  singular: "辞退する"
                },
                "ko-KR": {
                  singular: "거절"
                },
                "pt-BR": {
                  singular: "Recusar"
                },
                "zh-CN": {
                  singular: "拒绝"
                }
              }
            })
          })]
        })
      })]
    });
  }
  _v0.i(0);
  var _v526 = _v0.i(0);
  async function _v527(_v0) {
    try {
      let _v0 = await _v0.json();
      return "number" == typeof _v0.error_code ? _v0.error_code : null;
    } catch {
      return null;
    }
  }
  let _v528 = {
    upsell: "managed_accounts",
    feature: "managed_accounts",
    integration: "managed_accounts"
  };
  function _v529() {
    let _v0 = (0, _v509.useHasMounted)(),
      _v1 = (0, _v42.useViewer)(),
      {
        payload: _v2
      } = (0, _v507.useManagedAccountsInvite)();
    return _v0 && _v1 && null != _v2 ? (0, _v1.jsx)(_v530, {
      payload: _v2
    }) : null;
  }
  function _v530({
    payload: _v0
  }) {
    let _v1 = (0, _v42.useViewer)(),
      {
        xsrft: _v2
      } = _v1 ?? {},
      {
        clear: _v3
      } = (0, _v507.useManagedAccountsInvite)(),
      _v4 = (0, _v5.useToast)(),
      {
        trackAcceptModalShown: _v5,
        trackActionClicked: _v6,
        trackAcceptFailed: _v7
      } = (0, _v508.useManagedAccountsTracking)(),
      [_v8, _v9] = (0, _v3.useState)(!1),
      {
        agencyUserId: _v10
      } = _v0,
      _v11 = (0, _v506.useAgencyIdentity)(_v10, "an"),
      _v12 = _v1?.user?.id === _v10;
    (0, _v3.useEffect)(() => {
      _v12 && _v3();
    }, [_v12, _v3]);
    let _v13 = (0, _v3.useRef)(!1);
    (0, _v3.useEffect)(() => {
      _v11.isError && !_v13.current && (_v13.current = !0, _v3(), _v9(!0), _v4({
        status: "error",
        title: (0, _v8.translate)({
          singular: "This invitation is no longer valid.",
          dictionary: {
            es: {
              singular: "Esta invitación ya no es válida."
            },
            "de-DE": {
              singular: "Diese Einladung ist nicht mehr gültig."
            },
            "fr-FR": {
              singular: "Cette invitation n'est plus valide."
            },
            "ja-JP": {
              singular: "この招待は既に無効です。"
            },
            "ko-KR": {
              singular: "이 초대는 더 이상 유효하지 않습니다."
            },
            "pt-BR": {
              singular: "Este convite não é mais válido."
            },
            "zh-CN": {
              singular: "此邀请已失效。"
            }
          }
        })
      }), _v7({
        invitingUserId: _v10,
        reason: "invalid_invite"
      }));
    }, [_v11.isError, _v3, _v4, _v7, _v10]);
    let _v14 = _v1?.user?.name ?? "",
      _v15 = _v1?.user?.capabilities?.canAddTeamMembers ?? !1,
      {
        capabilities: _v16,
        ready: _v17
      } = (0, _v6.useCapability)(_v15 ? ["haveMoreAdminTeamMembers"] : []),
      _v18 = _v16.haveMoreAdminTeamMembers ?? !1,
      _v19 = _v1?.user?.capabilities?.hasFreeTrialEligibility ?? !1,
      _v20 = !!_v1?.teamUser?.teamId && _v1?.teamUser?.ownerId !== _v1?.user?.id,
      _v21 = (0, _v3.useRef)(!1);
    (0, _v3.useEffect)(() => {
      _v12 || _v15 || !_v20 || _v21.current || (_v21.current = !0, _v3(), _v9(!0), _v4({
        status: "error",
        title: (0, _v8.translate)({
          singular: "Only the account owner can accept this invitation.",
          dictionary: {
            es: {
              singular: "Solo el propietario de la cuenta puede aceptar esta invitación."
            },
            "de-DE": {
              singular: "Nur der Kontoinhaber kann diese Einladung annehmen."
            },
            "fr-FR": {
              singular: "Seul le propriétaire du compte peut accepter cette invitation."
            },
            "ja-JP": {
              singular: "この招待を受け入れられるのはアカウントのオーナーのみです。"
            },
            "ko-KR": {
              singular: "이 초대는 계정 소유자만 수락할 수 있습니다."
            },
            "pt-BR": {
              singular: "Apenas o proprietário da conta pode aceitar este convite."
            },
            "zh-CN": {
              singular: "只有账户所有者可以接受此邀请。"
            }
          }
        })
      }), _v7({
        invitingUserId: _v10,
        reason: "ineligible"
      }));
    }, [_v12, _v15, _v20, _v3, _v4, _v7, _v10]);
    let _v22 = (0, _v3.useCallback)(() => {
        _v9(!0);
      }, []),
      {
        isAccepting: _v23,
        acceptInvite: _v24,
        declineInvite: _v25
      } = function (_v0, _v1, _v2) {
        let _v3 = (0, _v2.useRouter)(),
          _v4 = (0, _v5.useToast)(),
          {
            mutate: _v5
          } = (0, _v526.useSWRConfig)(),
          {
            clear: _v6
          } = (0, _v507.useManagedAccountsInvite)(),
          {
            baseUrl: _v7,
            jwt: _v8
          } = (0, _v139.useGctlConfig)(),
          {
            trackActionClicked: _v9,
            trackFlowCompleted: _v10,
            trackAcceptFailed: _v11
          } = (0, _v508.useManagedAccountsTracking)(),
          [_v12, _v13] = (0, _v3.useState)(!1),
          _v14 = (0, _v3.useCallback)(_v0 => {
            let _v1;
            switch (_v0) {
              case 0:
              case 0:
                _v1 = (0, _v8.translate)({
                  singular: "This user has already been invited to your account.",
                  dictionary: {
                    es: {
                      singular: "Este usuario ya ha sido invitado a tu cuenta."
                    },
                    "de-DE": {
                      singular: "Dieser Nutzer wurde bereits zu deinem Konto eingeladen."
                    },
                    "fr-FR": {
                      singular: "Cet utilisateur a déjà été invité sur votre compte."
                    },
                    "ja-JP": {
                      singular: "このユーザーは既にあなたのアカウントに招待されています。"
                    },
                    "ko-KR": {
                      singular: "이 사용자는 이미 계정에 초대되었습니다."
                    },
                    "pt-BR": {
                      singular: "Este usuário já foi convidado para sua conta."
                    },
                    "zh-CN": {
                      singular: "该用户已被邀请加入您的账户。"
                    }
                  }
                });
                break;
              case 0:
                _v1 = (0, _v8.translate)({
                  singular: "There are no available seats on your account.",
                  dictionary: {
                    es: {
                      singular: "No hay plazas disponibles en tu cuenta."
                    },
                    "de-DE": {
                      singular: "Für dein Konto sind keine Plätze verfügbar."
                    },
                    "fr-FR": {
                      singular: "Il n'y a plus de places disponibles sur votre compte."
                    },
                    "ja-JP": {
                      singular: "アカウントに空きの席がありません。"
                    },
                    "ko-KR": {
                      singular: "계정에 사용 가능한 좌석이 없습니다."
                    },
                    "pt-BR": {
                      singular: "Não há vagas disponíveis na sua conta."
                    },
                    "zh-CN": {
                      singular: "您的账户没有可用名额。"
                    }
                  }
                });
                break;
              case 0:
                _v1 = (0, _v8.translate)({
                  singular: "Only the account owner can accept this invitation.",
                  dictionary: {
                    es: {
                      singular: "Solo el propietario de la cuenta puede aceptar esta invitación."
                    },
                    "de-DE": {
                      singular: "Nur der Kontoinhaber kann diese Einladung annehmen."
                    },
                    "fr-FR": {
                      singular: "Seul le propriétaire du compte peut accepter cette invitation."
                    },
                    "ja-JP": {
                      singular: "この招待を受け入れられるのはアカウントのオーナーのみです。"
                    },
                    "ko-KR": {
                      singular: "이 초대는 계정 소유자만 수락할 수 있습니다."
                    },
                    "pt-BR": {
                      singular: "Apenas o proprietário da conta pode aceitar este convite."
                    },
                    "zh-CN": {
                      singular: "只有账户所有者可以接受此邀请。"
                    }
                  }
                });
                break;
              case 0:
                _v1 = (0, _v8.translate)({
                  singular: "This invitation is no longer valid.",
                  dictionary: {
                    es: {
                      singular: "Esta invitación ya no es válida."
                    },
                    "de-DE": {
                      singular: "Diese Einladung ist nicht mehr gültig."
                    },
                    "fr-FR": {
                      singular: "Cette invitation n'est plus valide."
                    },
                    "ja-JP": {
                      singular: "この招待は既に無効です。"
                    },
                    "ko-KR": {
                      singular: "이 초대는 더 이상 유효하지 않습니다."
                    },
                    "pt-BR": {
                      singular: "Este convite não é mais válido."
                    },
                    "zh-CN": {
                      singular: "此邀请已失效。"
                    }
                  }
                });
                break;
              default:
                _v1 = (0, _v8.translate)({
                  singular: "Something went wrong. Please try again.",
                  dictionary: {
                    es: {
                      singular: "Algo salió mal. Inténtalo de nuevo."
                    },
                    "de-DE": {
                      singular: "Hier ist etwas schiefgelaufen. Bitte nochmal versuchen"
                    },
                    "fr-FR": {
                      singular: "Une erreur s'est produite. Veuillez essayer à nouveau."
                    },
                    "ja-JP": {
                      singular: "エラーが発生しました。 再度お試しください。"
                    },
                    "ko-KR": {
                      singular: "문제가 발생했습니다. 다시 시도해주세요."
                    },
                    "pt-BR": {
                      singular: "Alguma coisa deu errado. Por favor, tente novamente."
                    },
                    "zh-CN": {
                      singular: "出错了。请重试。"
                    }
                  }
                });
            }
            _v4({
              status: "error",
              title: _v1
            });
          }, [_v4]),
          _v15 = (0, _v3.useCallback)(async () => {
            if (!_v12) {
              _v9({
                action: "accept",
                invitingUserId: _v2
              }), _v13(!0);
              try {
                let _v0 = await fetch(`${_v7 ?? ""}/users/managed_accounts/accept`, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: _v8 ? `jwt ${_v8}` : ""
                  },
                  body: JSON.stringify({
                    agency_user_id: _v2
                  })
                });
                if (!_v0.ok) {
                  let _v0 = await _v527(_v0);
                  _v14(_v0), _v11({
                    invitingUserId: _v2,
                    reason: function (_v0) {
                      switch (_v0) {
                        case 0:
                          return "already_invited";
                        case 0:
                          return "already_joined";
                        case 0:
                          return "no_seats";
                        case 0:
                          return "insufficient_permissions";
                        case 0:
                          return "invalid_input";
                        default:
                          return "unknown";
                      }
                    }(_v0)
                  });
                  return;
                }
                let _v1 = await _v0.json(),
                  _v2 = _v1.agency?.name || _v0;
                _v5(_v0 => "string" == typeof _v0 && _v0.includes("/team/members"), void 0, {
                  revalidate: !0
                }), _v6(), _v1(), _v10({
                  invitingUserId: _v2
                }), _v4({
                  status: "success",
                  title: (0, _v8.translate)({
                    singular: "Invite sent to {name}",
                    replacements: {
                      name: _v2
                    },
                    dictionary: {
                      es: {
                        singular: "Invitación enviada a {name}"
                      },
                      "de-DE": {
                        singular: "Einladung an {name} gesendet"
                      },
                      "fr-FR": {
                        singular: "Invitation envoyée à {name}"
                      },
                      "ja-JP": {
                        singular: "{name} に招待を送信しました"
                      },
                      "ko-KR": {
                        singular: "{name}님에게 초대장이 전송되었습니다."
                      },
                      "pt-BR": {
                        singular: "Convite enviado para {name}"
                      },
                      "zh-CN": {
                        singular: "已向 {name} 发送邀请"
                      }
                    }
                  })
                }), _v3.push("/manage/team/members");
              } catch {
                _v14(null), _v11({
                  invitingUserId: _v2,
                  reason: "network_error"
                });
              } finally {
                _v13(!1);
              }
            }
          }, [_v2, _v12, _v7, _v8, _v0, _v5, _v6, _v1, _v4, _v3, _v14, _v9, _v10, _v11]);
        return {
          isAccepting: _v12,
          acceptInvite: _v15,
          declineInvite: (0, _v3.useCallback)(() => {
            _v9({
              action: "decline",
              invitingUserId: _v2
            }), _v6(), _v1(), _v4({
              status: "info",
              title: (0, _v8.translate)({
                singular: "Invitation declined.",
                dictionary: {
                  es: {
                    singular: "Invitación rechazada."
                  },
                  "de-DE": {
                    singular: "Einladung abgelehnt."
                  },
                  "fr-FR": {
                    singular: "Invitation refusée."
                  },
                  "ja-JP": {
                    singular: "招待を辞退しました。"
                  },
                  "ko-KR": {
                    singular: "초대가 거절되었습니다."
                  },
                  "pt-BR": {
                    singular: "Convite recusado."
                  },
                  "zh-CN": {
                    singular: "邀请已被拒绝。"
                  }
                }
              })
            });
          }, [_v6, _v1, _v4, _v2, _v9])
        };
      }(_v11.displayName, _v22, _v10),
      _v26 = (0, _v3.useCallback)(async () => {
        let _v0 = (0, _v85.buildCheckoutUrl)({
          tier: "standard",
          isTrial: _v19,
          paywallTrigger: "managed_accounts_accept_modal",
          paywallLocation: "home",
          paywallType: "popup",
          paywallFeature: "managed_accounts",
          postCheckoutUrl: "/home"
        }, _v528);
        await _v6({
          action: _v19 ? "accept_and_try_standard" : "accept_and_upgrade",
          invitingUserId: _v10
        }), window.location.href = _v0;
      }, [_v19, _v10, _v6]),
      _v27 = (0, _v3.useCallback)(() => {
        _v6({
          action: "logout",
          invitingUserId: _v10
        }), fetch("/log_out", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: new URLSearchParams(_v2 ? {
            token: _v2
          } : {}).toString(),
          credentials: "same-origin"
        }).catch(() => void 0).finally(() => {
          window.location.href = (0, _v505.getManagedAccountsAcceptPath)(_v10);
        });
      }, [_v2, _v10, _v6]),
      _v28 = (0, _v3.useMemo)(() => _v8 || !_v1 || _v12 ? null : _v15 && _v18 ? "simple" : _v20 ? null : "upgrade", [_v8, _v1, _v12, _v15, _v18, _v20]);
    return ((0, _v154.usePicoEffect)(() => {
      if (null === _v28 || _v11.isLoading || _v11.isError || !_v17) return !1;
      _v5({
        modalType: _v28,
        invitingUserId: _v10
      });
    }, [_v28, _v11.isLoading, _v11.isError, _v17, _v10, _v5], {
      once: !0
    }), null === _v28 || _v11.isError) ? null : (0, _v1.jsx)(_v512, {
      onClose: _v25,
      children: _v11.isLoading || !_v17 ? (0, _v1.jsx)(_v510, {}) : "simple" === _v28 ? (0, _v1.jsx)(_v520, {
        agency: _v11,
        agencyUserId: _v10,
        clientName: _v14,
        isAccepting: _v23,
        onAccept: _v24,
        onDecline: _v25,
        onLogout: _v27
      }) : (0, _v1.jsx)(_v525, {
        agency: _v11,
        agencyUserId: _v10,
        clientName: _v14,
        isTrialEligible: _v19,
        onUpgrade: _v26,
        onDecline: _v25,
        onLogout: _v27
      })
    });
  }
  var _v531 = _v0.i(0),
    _v532 = _v0.i(0),
    _v533 = _v0.i(0),
    _v534 = _v0.i(0),
    _v535 = _v0.i(0);
  let _v536 = [.2, .8, .2, 1],
    _v537 = "product-sentiment-pulse-question",
    _v538 = "product-sentiment-pulse-reason",
    _v539 = "product-sentiment-pulse-thanks";
  function _v540({
    phase: _v0,
    selectedAnswer: _v1,
    reason: _v2,
    submitDisabled: _v3,
    reasonVisible: _v4,
    onSelect: _v5,
    onReasonChange: _v6,
    onSubmit: _v7
  }) {
    if ("closed" === _v0) return null;
    let _v8 = [{
      value: "getting_better",
      label: (0, _v8.translate)({
        singular: "Getting better",
        dictionary: {
          es: {
            singular: "Mejorando"
          },
          "de-DE": {
            singular: "Verbessert sich"
          },
          "fr-FR": {
            singular: "Ça s'améliore"
          },
          "ja-JP": {
            singular: "良くなっている"
          },
          "ko-KR": {
            singular: "나아지고 있음"
          },
          "pt-BR": {
            singular: "Melhorando"
          },
          "zh-CN": {
            singular: "变得更好"
          }
        }
      })
    }, {
      value: "about_the_same",
      label: (0, _v8.translate)({
        singular: "About the same",
        dictionary: {
          es: {
            singular: "Más o menos igual"
          },
          "de-DE": {
            singular: "Etwa gleich"
          },
          "fr-FR": {
            singular: "À peu près pareil"
          },
          "ja-JP": {
            singular: "ほぼ同じ"
          },
          "ko-KR": {
            singular: "비슷합니다"
          },
          "pt-BR": {
            singular: "Mais ou menos o mesmo"
          },
          "zh-CN": {
            singular: "大致相同"
          }
        }
      })
    }, {
      value: "getting_worse",
      label: (0, _v8.translate)({
        singular: "Getting worse",
        dictionary: {
          es: {
            singular: "Empeorando"
          },
          "de-DE": {
            singular: "Verschlechtert sich"
          },
          "fr-FR": {
            singular: "Ça empire"
          },
          "ja-JP": {
            singular: "悪くなっている"
          },
          "ko-KR": {
            singular: "나빠지고 있음"
          },
          "pt-BR": {
            singular: "Piorando"
          },
          "zh-CN": {
            singular: "变得更糟"
          }
        }
      })
    }, {
      value: "not_sure",
      label: (0, _v8.translate)({
        singular: "Not sure",
        dictionary: {
          es: {
            singular: "No estoy seguro"
          },
          "de-DE": {
            singular: "Nicht sicher"
          },
          "fr-FR": {
            singular: "Pas sûr"
          },
          "ja-JP": {
            singular: "わからない"
          },
          "ko-KR": {
            singular: "확실하지 않음"
          },
          "pt-BR": {
            singular: "Não tenho certeza"
          },
          "zh-CN": {
            singular: "不确定"
          }
        }
      })
    }];
    return (0, _v1.jsxs)(_v25.Modal, {
      isOpen: !0,
      onClose: () => void 0,
      autoFocus: !1,
      isCentered: !0,
      closeOnEsc: !1,
      closeOnOverlayClick: !1,
      motionPreset: "scale",
      size: "md",
      children: [(0, _v1.jsx)(_v30.ModalOverlay, {}), (0, _v1.jsx)(_v28.ModalContent, {
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "thanks" === _v0 ? _v539 : _v537,
        backgroundColor: "surface",
        color: "text-primary",
        borderRadius: (0, _v44.rem)(24),
        maxWidth: (0, _v44.rem)(480),
        width: [`calc(100% - ${(0, _v44.rem)(32)})`, (0, _v44.rem)(480)],
        mx: "auto",
        my: "auto",
        p: [(0, _v44.rem)(24), (0, _v44.rem)(40)],
        overflow: "hidden",
        children: (0, _v1.jsx)(_v531.AnimatePresence, {
          mode: "wait",
          initial: !1,
          children: (0, _v1.jsx)(_v532.motion.div, {
            initial: {
              opacity: 0,
              y: 8
            },
            animate: {
              opacity: 1,
              y: 0
            },
            exit: {
              opacity: 0,
              y: -8
            },
            transition: {
              duration: .2,
              ease: "easeOut"
            },
            children: "form" === _v0 ? (0, _v1.jsxs)(_v57.Box, {
              children: [(0, _v1.jsx)(_v31.Text, {
                as: "p",
                fontSize: (0, _v44.rem)(14),
                fontWeight: 600,
                color: "text-tertiary",
                mb: (0, _v44.rem)(12),
                children: (0, _v8.translate)({
                  singular: "Quick question",
                  dictionary: {
                    es: {
                      singular: "Pregunta rápida"
                    },
                    "de-DE": {
                      singular: "Kurze Frage"
                    },
                    "fr-FR": {
                      singular: "Petite question"
                    },
                    "ja-JP": {
                      singular: "簡単な質問"
                    },
                    "ko-KR": {
                      singular: "간단한 질문"
                    },
                    "pt-BR": {
                      singular: "Pergunta rápida"
                    },
                    "zh-CN": {
                      singular: "有个小问题"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v31.Text, {
                as: "h2",
                id: _v537,
                fontSize: (0, _v44.rem)(28),
                fontWeight: 500,
                lineHeight: "1.2",
                letterSpacing: "-0.035em",
                color: "text-primary",
                mb: (0, _v44.rem)(24),
                children: (0, _v8.translate)({
                  singular: "Right now, would you say Vimeo as a product is…",
                  dictionary: {
                    es: {
                      singular: "Ahora mismo, ¿dirías que Vimeo como producto está…?"
                    },
                    "de-DE": {
                      singular: "Würden Sie im Moment sagen, dass Vimeo als Produkt …"
                    },
                    "fr-FR": {
                      singular: "En ce moment, diriez-vous que Vimeo en tant que produit est…"
                    },
                    "ja-JP": {
                      singular: "現時点で、Vimeoを製品としてどのように評価しますか…"
                    },
                    "ko-KR": {
                      singular: "지금 시점에서 Vimeo라는 제품을 어떻게 평가하시겠습니까…"
                    },
                    "pt-BR": {
                      singular: "Neste momento, você diria que o Vimeo, como produto, está…"
                    },
                    "zh-CN": {
                      singular: "就目前而言, 你会说 Vimeo 作为一款产品是…"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v533.RadioGroup, {
                value: _v1 ?? "",
                onChange: _v0 => _v5(_v0),
                "aria-labelledby": _v537,
                children: (0, _v1.jsx)(_v268.Stack, {
                  spacing: (0, _v44.rem)(4),
                  children: _v8.map(_v0 => (0, _v1.jsx)(_v272.Radio, {
                    value: _v0.value,
                    size: "md",
                    py: (0, _v44.rem)(8),
                    children: (0, _v1.jsx)(_v31.Text, {
                      variant: "body-lg",
                      color: "text-primary",
                      children: _v0.label
                    })
                  }, _v0.value))
                })
              }), (0, _v1.jsx)(_v531.AnimatePresence, {
                initial: !1,
                children: _v4 && (0, _v1.jsx)(_v532.motion.div, {
                  initial: {
                    opacity: 0,
                    height: 0
                  },
                  animate: {
                    opacity: 1,
                    height: "auto"
                  },
                  exit: {
                    opacity: 0,
                    height: 0
                  },
                  transition: {
                    height: {
                      duration: .4,
                      ease: _v536
                    },
                    opacity: {
                      duration: .3,
                      ease: "easeOut",
                      delay: .05
                    }
                  },
                  style: {
                    overflow: "hidden"
                  },
                  children: (0, _v1.jsxs)(_v57.Box, {
                    pt: (0, _v44.rem)(20),
                    children: [(0, _v1.jsx)(_v31.Text, {
                      as: "label",
                      htmlFor: _v538,
                      display: "block",
                      fontSize: (0, _v44.rem)(13),
                      color: "text-tertiary",
                      mb: (0, _v44.rem)(8),
                      children: (0, _v8.translate)({
                        singular: "What's the main reason? (optional)",
                        dictionary: {
                          es: {
                            singular: "¿Cuál es la razón principal? (opcional)"
                          },
                          "de-DE": {
                            singular: "Was ist der Hauptgrund? (optional)"
                          },
                          "fr-FR": {
                            singular: "Quelle est la raison principale\x0e9? (facultatif)"
                          },
                          "ja-JP": {
                            singular: "主な理由は何ですか？（任意）"
                          },
                          "ko-KR": {
                            singular: "주요 이유는 무엇입니까? (선택 사항)"
                          },
                          "pt-BR": {
                            singular: "Qual o principal motivo? (opcional)"
                          },
                          "zh-CN": {
                            singular: "主要原因是什么? (可选)"
                          }
                        }
                      })
                    }), (0, _v1.jsx)(_v534.Textarea, {
                      id: _v538,
                      size: "md",
                      rows: 3,
                      resize: "none",
                      value: _v2,
                      onChange: _v0 => _v6(_v0.target.value),
                      onKeyDown: _v0 => {
                        (_v0.metaKey || _v0.ctrlKey) && "Enter" === _v0.key && !_v3 && _v7();
                      },
                      placeholder: (0, _v8.translate)({
                        singular: "Add a reason",
                        dictionary: {
                          es: {
                            singular: "Añadir una razón"
                          },
                          "de-DE": {
                            singular: "Grund hinzufügen"
                          },
                          "fr-FR": {
                            singular: "Ajouter une raison"
                          },
                          "ja-JP": {
                            singular: "理由を追加"
                          },
                          "ko-KR": {
                            singular: "이유 추가"
                          },
                          "pt-BR": {
                            singular: "Adicionar um motivo"
                          },
                          "zh-CN": {
                            singular: "添加原因"
                          }
                        }
                      }),
                      "aria-label": (0, _v8.translate)({
                        singular: "What's the main reason? (optional)",
                        dictionary: {
                          es: {
                            singular: "¿Cuál es la razón principal? (opcional)"
                          },
                          "de-DE": {
                            singular: "Was ist der Hauptgrund? (optional)"
                          },
                          "fr-FR": {
                            singular: "Quelle est la raison principale\x0e9? (facultatif)"
                          },
                          "ja-JP": {
                            singular: "主な理由は何ですか？（任意）"
                          },
                          "ko-KR": {
                            singular: "주요 이유는 무엇입니까? (선택 사항)"
                          },
                          "pt-BR": {
                            singular: "Qual o principal motivo? (opcional)"
                          },
                          "zh-CN": {
                            singular: "主要原因是什么? (可选)"
                          }
                        }
                      }),
                      width: "100%"
                    })]
                  })
                }, "reason")
              }), (0, _v1.jsx)(_v22.Button, {
                variant: "primary",
                size: "lg",
                onClick: _v7,
                isDisabled: _v3,
                width: "100%",
                mt: (0, _v44.rem)(24),
                children: (0, _v8.translate)({
                  singular: "Submit",
                  dictionary: {
                    es: {
                      singular: "Enviar"
                    },
                    "de-DE": {
                      singular: "Senden"
                    },
                    "fr-FR": {
                      singular: "Envoyer"
                    },
                    "ja-JP": {
                      singular: "送信"
                    },
                    "ko-KR": {
                      singular: "제출"
                    },
                    "pt-BR": {
                      singular: "Enviar"
                    },
                    "zh-CN": {
                      singular: "提交"
                    }
                  }
                })
              })]
            }) : (0, _v1.jsxs)(_v43.Flex, {
              direction: "column",
              align: "center",
              textAlign: "center",
              px: (0, _v44.rem)(8),
              py: (0, _v44.rem)(28),
              children: [(0, _v1.jsx)(_v532.motion.div, {
                initial: {
                  scale: .7
                },
                animate: {
                  scale: 1
                },
                transition: {
                  duration: .42,
                  ease: _v536
                },
                children: (0, _v1.jsx)(_v43.Flex, {
                  width: (0, _v44.rem)(64),
                  height: (0, _v44.rem)(64),
                  borderRadius: "50%",
                  backgroundColor: "rgba(23, 213, 255, 0.14)",
                  align: "center",
                  justify: "center",
                  mb: (0, _v44.rem)(20),
                  mx: "auto",
                  color: "vimeoBlue.500",
                  children: (0, _v1.jsx)(_v535.Checkmark, {
                    width: 32,
                    height: 32
                  })
                })
              }), (0, _v1.jsx)(_v31.Text, {
                as: "h2",
                id: _v539,
                fontSize: (0, _v44.rem)(26),
                fontWeight: 700,
                letterSpacing: "-0.035em",
                color: "text-primary",
                children: (0, _v8.translate)({
                  singular: "Thanks for the feedback",
                  dictionary: {
                    es: {
                      singular: "Gracias por sus comentarios"
                    },
                    "de-DE": {
                      singular: "Danke für das Feedback"
                    },
                    "fr-FR": {
                      singular: "Merci pour vos commentaires !"
                    },
                    "ja-JP": {
                      singular: "フィードバックをありがとうございます"
                    },
                    "ko-KR": {
                      singular: "피드백을 남겨주셔서 감사합니다."
                    },
                    "pt-BR": {
                      singular: "Agradecemos o feedback"
                    },
                    "zh-CN": {
                      singular: "感谢您的反馈"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v31.Text, {
                mt: (0, _v44.rem)(10),
                fontSize: (0, _v44.rem)(15),
                color: "text-tertiary",
                children: (0, _v8.translate)({
                  singular: "Back to your work.",
                  dictionary: {
                    es: {
                      singular: "Vuelve a tu trabajo."
                    },
                    "de-DE": {
                      singular: "Zurück zu Ihrer Arbeit."
                    },
                    "fr-FR": {
                      singular: "Retournez à votre travail."
                    },
                    "ja-JP": {
                      singular: "作業に戻ってください。"
                    },
                    "ko-KR": {
                      singular: "업무로 돌아가세요."
                    },
                    "pt-BR": {
                      singular: "De volta ao seu trabalho."
                    },
                    "zh-CN": {
                      singular: "回到你的工作."
                    }
                  }
                })
              })]
            })
          }, _v0)
        })
      })]
    });
  }
  let _v541 = "logged_in_homepage",
    _v542 = _v0 => `product_sentiment_pulse_seen_${_v0}`,
    _v543 = () => {
      let _v0,
        _v1,
        _v2,
        _v3,
        _v4 = (0, _v9.useManagedAccountsSuppression)(),
        _v5 = (0, _v42.useViewer)(),
        _v6 = _v5?.user?.id,
        _v7 = _v5?.user?.capabilities?.hasPaid,
        {
          settings: _v8,
          isLoadingResponse: _v9
        } = (0, _v16.useOrionSettings)(),
        _v10 = _v8.trustpilot_review_modal,
        {
          trackStep1Displayed: _v11,
          trackStep2Displayed: _v12,
          trackStep2Dismissed: _v13
        } = (_v0 = (0, _v11.usePico)(), _v1 = (0, _v3.useCallback)(() => null !== _v0 && (_v0.track("trustpilot_review_modal_step1_displayed", {}), !0), [_v0]), _v2 = (0, _v3.useCallback)(() => {
          null !== _v0 && _v0.track("trustpilot_review_modal_step1_accepted", {});
        }, [_v0]), _v3 = (0, _v3.useCallback)(() => {
          null !== _v0 && _v0.track("trustpilot_review_modal_step1_dismissed", {});
        }, [_v0]), {
          trackStep1Displayed: _v1,
          trackStep1Accepted: _v2,
          trackStep1Dismissed: _v3,
          trackStep2Displayed: (0, _v3.useCallback)(() => {
            null !== _v0 && _v0.track("trustpilot_review_modal_step2_displayed", {});
          }, [_v0]),
          trackStep2Dismissed: (0, _v3.useCallback)(() => {
            null !== _v0 && _v0.track("trustpilot_review_modal_step2_dismissed", {});
          }, [_v0])
        }),
        [_v14, _v15] = (0, _v3.useState)(!1),
        [_v16, _v17] = (0, _v3.useState)(null),
        [_v18, _v19] = (0, _v3.useState)(!1),
        _v20 = (0, _v3.useRef)(null),
        _v21 = (0, _v3.useRef)(null),
        _v22 = _v7 && _v10;
      (0, _v3.useEffect)(() => {
        if (_v9 || !_v6 || _v4 || !_v22 || "true" === window.localStorage.getItem(`trustpilot_review_dismissed_${_v6}`) || _v21.current === _v6) return;
        _v21.current = _v6, _v20.current !== _v6 && _v11() && (_v20.current = _v6);
        let _v0 = !1;
        return (async () => {
          try {
            let _v0 = await fetch("/trustpilot/signed_url");
            if (_v0 || !_v0.ok) return;
            let _v1 = await _v0.json();
            if (_v0) return;
            _v17(_v1.signedUrl), _v15(!0), _v12();
          } catch {}
        })(), () => {
          _v0 = !0;
        };
      }, [_v9, _v6, _v4, _v22, _v11, _v12]);
      let _v23 = (0, _v3.useCallback)(() => {
          _v13(), _v15(!1), _v6 && window.localStorage.setItem(`trustpilot_review_dismissed_${_v6}`, "true");
        }, [_v13, _v6]),
        _v24 = (0, _v3.useCallback)(() => {
          _v19(!0);
        }, []);
      return _v4 || !_v14 ? null : (0, _v1.jsxs)(_v25.Modal, {
        isOpen: !0,
        onClose: _v23,
        size: "md",
        scrollBehavior: "outside",
        children: [(0, _v1.jsx)(_v30.ModalOverlay, {}), (0, _v1.jsxs)(_v28.ModalContent, {
          maxWidth: {
            base: "calc(100vw - 32px)",
            md: "520px"
          },
          width: {
            base: "calc(100vw - 32px)",
            md: "520px"
          },
          borderRadius: "20px",
          margin: "auto",
          overflow: "hidden",
          position: "relative",
          children: [(0, _v1.jsx)(_v27.ModalCloseButton, {
            zIndex: 1
          }), (0, _v1.jsxs)(_v26.ModalBody, {
            px: "24px",
            pt: "48px",
            pb: "24px",
            children: [(0, _v1.jsx)(_v31.Text, {
              variant: "heading-md",
              mb: "4px",
              children: (0, _v8.translate)({
                singular: "Leave a review below!",
                dictionary: {
                  es: {
                    singular: "¡Deja una reseña abajo!"
                  },
                  "de-DE": {
                    singular: "Hinterlassen Sie unten eine Bewertung!"
                  },
                  "fr-FR": {
                    singular: "Laissez un avis ci-dessous !"
                  },
                  "ja-JP": {
                    singular: "以下にレビューをお寄せください！"
                  },
                  "ko-KR": {
                    singular: "아래에 리뷰를 남겨 주세요!"
                  },
                  "pt-BR": {
                    singular: "Deixe sua avaliação abaixo!"
                  },
                  "zh-CN": {
                    singular: "请在下方留下您的评价!"
                  }
                }
              })
            }), (0, _v1.jsx)(_v31.Text, {
              variant: "body-sm",
              color: "text-secondary",
              mb: "16px",
              children: (0, _v8.translate)({
                singular: "Scroll down within the form to submit your review.",
                dictionary: {
                  es: {
                    singular: "Desplácese hacia abajo en el formulario para enviar su reseña."
                  },
                  "de-DE": {
                    singular: "Scrollen Sie im Formular nach unten, um Ihre Bewertung abzugeben."
                  },
                  "fr-FR": {
                    singular: "Faites défiler le formulaire vers le bas pour soumettre votre avis."
                  },
                  "ja-JP": {
                    singular: "レビューを送信するには、フォーム内を下にスクロールしてください。"
                  },
                  "ko-KR": {
                    singular: "리뷰를 제출하려면 양식 내에서 아래로 스크롤하세요."
                  },
                  "pt-BR": {
                    singular: "Role para baixo dentro do formulário para enviar sua avaliação."
                  },
                  "zh-CN": {
                    singular: "请在表单中向下滚动以提交您的评论。"
                  }
                }
              })
            }), !_v18 && (0, _v1.jsx)(_v43.Flex, {
              justifyContent: "center",
              alignItems: "center",
              height: "500px",
              children: (0, _v1.jsx)(_v259.Spinner, {
                size: "lg"
              })
            }), _v16 && (0, _v1.jsx)(_v57.Box, {
              as: "iframe",
              src: _v16,
              title: "Trustpilot Review",
              width: "100%",
              height: "500px",
              border: "none",
              borderRadius: "8px",
              display: _v18 ? "block" : "none",
              onLoad: _v24
            })]
          })]
        })]
      });
    },
    _v544 = "pico-new-update-card-tracking",
    _v545 = ({
      playerAssetUrls: _v0
    }) => {
      !function () {
        let _v0,
          _v1 = (0, _v2.useRouter)(),
          _v2 = (0, _v42.useViewer)(),
          {
            settings: _v3,
            isLoadingResponse: _v4
          } = (0, _v16.useOrionSettings)(),
          _v5 = (_v0 = (0, _v11.usePico)(), {
            trackHomeToWatchRedirectTriggered: (0, _v3.useCallback)(() => null !== _v0 && (_v0.track("home_to_watch_redirect_triggered", {}), !0), [_v0]),
            trackHomeToWatchRedirectSkipped: (0, _v3.useCallback)(_v0 => null !== _v0 && (_v0.track("home_to_watch_redirect_skipped", {
              skip_reason: _v0
            }), !0), [_v0])
          }),
          _v6 = (0, _v3.useRef)(!1),
          _v7 = (0, _v3.useRef)(_v5);
        _v7.current = _v5;
        let _v8 = _v2?.user?.id ?? null,
          _v9 = _v2?.user?.createdTime ?? null,
          _v10 = _v3.viewer_segmentation_redirect_to_watch,
          _v11 = _v2?.teamUser?.ownerId ?? _v2?.user?.id,
          {
            capabilities: _v12,
            loading: _v13,
            ready: _v14
          } = (0, _v6.useCapability)(["hasWatchButton"], _v11),
          {
            capabilities: _v15,
            loading: _v16,
            ready: _v17
          } = (0, _v6.useCapability)(["hasSimplifiedEnterpriseAccount"]),
          _v18 = !_v4 && !(_v13 || _v16 || !_v14 || !_v17) && !!_v2,
          _v19 = _v18 && !_v2?.isEnterpriseSite && !_v2?.isSimplifiedSite && !_v15.hasSimplifiedEnterpriseAccount && _v12.hasWatchButton && !_v2?.isFromCopyrightRestrictedRegion;
        (0, _v3.useEffect)(() => {
          if (_v6.current || !_v18 || null === _v8 || !_v10 || !(_v9 && Date.now() - new Date(_v9).getTime() > 0)) return;
          _v6.current = !0;
          let {
              trackHomeToWatchRedirectTriggered: _v0,
              trackHomeToWatchRedirectSkipped: _v1
            } = _v7.current,
            _v2 = function () {
              try {
                let _v0 = sessionStorage.getItem(_v48);
                if (!_v0) return null;
                return JSON.parse(_v0);
              } catch {
                return null;
              }
            }();
          if (_v2?.userId === _v8) return void _v1("already_redirected");
          if (!_v19) return void _v1("watch_not_eligible");
          try {
            sessionStorage.setItem(_v48, JSON.stringify({
              userId: _v8
            }));
          } catch {}
          _v0(), _v1.replace("/watch");
        }, [_v18, _v10, _v9, _v8, _v19, _v1]);
      }();
      let _v1 = (0, _v42.useViewer)(),
        _v2 = (0, _v11.usePico)(),
        _v3 = (_v1?.teamUser?.ownerId ?? _v1?.user?.id) || 0,
        {
          trackHomepageNewUpdateCardDisplayed: _v4,
          trackHomepageNewUpdateCardCtaClicked: _v5,
          trackHomepageNewUpdateCardDismissed: _v6
        } = _v14(),
        {
          capabilities: _v7,
          loading: _v8,
          ready: _v9
        } = (0, _v6.useCapability)(["hasContentSpaceEnabled", "customizeHomepage", "hasActiveSvodTitle", "hasActiveTvodTitle", "canSellVodVerified"], _v3),
        _v10 = (0, _v2.useRouter)(),
        _v11 = (0, _v5.useToast)(),
        _v12 = (0, _v3.useRef)(!1);
      (0, _v3.useEffect)(function () {
        if (!_v10.isReady || _v12.current) return;
        let _v0 = "1" === _v10.query.card_verified,
          _v1 = "1" === _v10.query.card_added;
        if (!_v0 && !_v1) return;
        _v12.current = !0, _v11({
          variant: "success",
          isClosable: !1,
          title: _v0 ? (0, _v8.translate)({
            singular: "Card verified successfully",
            dictionary: {
              es: {
                singular: "Tarjeta verificada correctamente"
              },
              "de-DE": {
                singular: "Karte erfolgreich verifiziert"
              },
              "fr-FR": {
                singular: "Carte vérifiée avec succès"
              },
              "ja-JP": {
                singular: "カードの確認が正常に完了しました"
              },
              "ko-KR": {
                singular: "카드가 성공적으로 인증되었습니다"
              },
              "pt-BR": {
                singular: "Cartão verificado com sucesso"
              },
              "zh-CN": {
                singular: "卡已成功验证"
              }
            }
          }) : (0, _v8.translate)({
            singular: "Payment method added",
            dictionary: {
              es: {
                singular: "Método de pago añadido"
              },
              "de-DE": {
                singular: "Zahlungsmethode hinzugefügt"
              },
              "fr-FR": {
                singular: "Moyen de paiement ajouté"
              },
              "ja-JP": {
                singular: "支払い方法が追加されました"
              },
              "ko-KR": {
                singular: "결제 수단이 추가되었습니다"
              },
              "pt-BR": {
                singular: "Forma de pagamento adicionada"
              },
              "zh-CN": {
                singular: "付款方式已添加"
              }
            }
          })
        });
        let _v2 = {
          ..._v10.query
        };
        delete _v2.card_verified, delete _v2.card_added, _v10.replace({
          pathname: _v10.pathname,
          query: _v2
        }, void 0, {
          shallow: !0
        });
      }, [_v10, _v11]);
      let _v13 = (0, _v3.useRef)(!1);
      (0, _v3.useEffect)(() => {
        if (_v13.current || !_v2) return;
        let _v0 = new _v4.Event("vimeo.pageview", 3, {
          page: "page",
          referrer: "",
          name: "homepage_pico_test"
        });
        _v4.BigPictureClient.sendEvent(_v0), _v2.track("homepage_displayed", {}), _v13.current = !0;
      }, [_v2]), (0, _v3.useEffect)(() => {
        _v9 && !_v8 && _v10.PendoClient.updateOptions({
          visitor: {
            client_has_wayfinder: !0,
            client_has_wayfinder_toggle: !1,
            client_has_content_space: _v7.hasContentSpaceEnabled,
            client_has_active_svod_title: _v7.hasActiveSvodTitle && !_v7.canSellVodVerified,
            client_has_active_tvod_title: _v7.hasActiveTvodTitle && !_v7.canSellVodVerified
          }
        });
      }, [_v9, _v8, _v7.hasContentSpaceEnabled, _v7.hasActiveSvodTitle, _v7.hasActiveTvodTitle, _v7.canSellVodVerified]), (0, _v3.useEffect)(() => {
        if (_v2) return _v10.PendoClient.addHandler({
          onGuideDisplayed: _v0 => _v4(_v0.guideName),
          onClick: _v0 => _v5(_v0.guide?.guideName),
          onGuideDismiss: _v0 => _v6(_v0.guide?.guideName)
        }, _v544), () => {
          _v10.PendoClient.removeHandler(_v544);
        };
      }, [_v2, _v4, _v5, _v6]);
      let {
          banner: _v14,
          modal: _v15,
          isStorageSuspended: _v16
        } = (0, _v504.useGracePeriodBillingUi)({
          orionFlag: "enable_home_grace_period_notifications",
          layout: {
            type: "home"
          }
        }),
        _v17 = (0, _v9.useManagedAccountsSuppression)(),
        _v18 = function ({
          suppressed: _v0 = !1
        } = {}) {
          let _v1,
            _v2,
            {
              settings: _v3
            } = (0, _v16.useOrionSettings)(),
            _v4 = _v3.bi_product_sentiment_pulse_enabled,
            _v5 = (0, _v42.useViewer)(),
            _v6 = _v5?.user?.id ?? null,
            _v7 = _v5?.user?.account ?? "unknown",
            _v8 = (_v5?.location ?? "").toUpperCase() || "unknown",
            {
              trackShown: _v9,
              trackSelected: _v10,
              trackSubmitted: _v11
            } = (_v1 = (0, _v11.usePico)(), _v2 = (0, _v3.useCallback)(({
              userTier: _v0
            }) => {
              _v1?.track("product_sentiment_pulse_shown", {
                surface: _v541,
                user_tier: _v0
              });
            }, [_v1]), {
              trackShown: _v2,
              trackSelected: (0, _v3.useCallback)(({
                answer: _v0
              }) => {
                _v1?.track("product_sentiment_pulse_selected", {
                  surface: _v541,
                  answer: _v0
                });
              }, [_v1]),
              trackSubmitted: (0, _v3.useCallback)(({
                answer: _v0,
                userTier: _v1,
                country: _v2,
                reason: _v3
              }) => {
                _v1?.track("product_sentiment_pulse_submitted", {
                  surface: _v541,
                  answer: _v0,
                  user_tier: _v1,
                  country: _v2,
                  ...(_v3 ? {
                    reason: _v3
                  } : {})
                });
              }, [_v1])
            }),
            [_v12, _v13] = (0, _v3.useState)("closed"),
            [_v14, _v15] = (0, _v3.useState)(null),
            [_v16, _v17] = (0, _v3.useState)(""),
            _v18 = (0, _v3.useRef)(!1),
            _v19 = (0, _v3.useRef)(null);
          (0, _v3.useEffect)(() => {
            if (_v18.current || null === _v6 || _v0) return;
            let _v0 = function () {
              if (!function () {
                try {
                  let {
                    hostname: _v0
                  } = window.location;
                  return "vimeo.dev" === _v0 || "localhost" === _v0 || _v0.endsWith(".vimeows.com");
                } catch {
                  return !1;
                }
              }()) return !1;
              try {
                if ("1" === new URLSearchParams(window.location.search).get("psp_force")) return !0;
                return "1" === window.localStorage.getItem("product_sentiment_pulse_force");
              } catch {
                return !1;
              }
            }();
            !_v4 && !_v0 || !_v0 && function (_v0) {
              try {
                return "1" === window.localStorage.getItem(_v542(_v0));
              } catch {
                return !1;
              }
            }(_v6) || (_v18.current = !0, _v13("form"));
          }, [_v4, _v6, _v0]), (0, _v154.usePicoEffect)(() => {
            if ("form" !== _v12) return !1;
            _v9({
              userTier: _v7
            });
          }, [_v12, _v7, _v9], {
            once: !0
          }), (0, _v3.useEffect)(() => () => {
            _v19.current && clearTimeout(_v19.current);
          }, []);
          let _v20 = (0, _v3.useCallback)(_v0 => {
              "form" === _v12 && (_v15(_v0), "not_sure" === _v0 && _v17(""), _v10({
                answer: _v0
              }));
            }, [_v12, _v10]),
            _v21 = (0, _v3.useCallback)(() => {
              if ("form" !== _v12 || null === _v14) return;
              let _v0 = _v16.trim();
              _v11({
                answer: _v14,
                userTier: _v7,
                country: _v8,
                reason: "not_sure" !== _v14 && _v0 ? _v0 : void 0
              }), null !== _v6 && function (_v0) {
                try {
                  window.localStorage.setItem(_v542(_v0), "1");
                } catch {}
              }(_v6), _v13("thanks"), _v19.current = setTimeout(() => _v13("closed"), 0);
            }, [_v12, _v14, _v16, _v7, _v8, _v6, _v11]);
          return {
            phase: _v12,
            selectedAnswer: _v14,
            reason: _v16,
            submitDisabled: null === _v14,
            reasonVisible: null !== _v14 && "not_sure" !== _v14,
            select: _v20,
            setReason: _v17,
            submit: _v21
          };
        }({
          suppressed: _v17 || !!_v15
        });
      return (0, _v3.useEffect)(() => {
        let _v0 = window.pendo;
        if (_v17 && _v0) try {
          if (_v0.isReady?.()) return _v0.stopGuides?.(), () => {
            try {
              _v0.isReady?.() && _v0.startGuides?.();
            } catch (_v0) {
              console.log("Failed to start pendo guides for managed accounts:", _v0);
            }
          };
        } catch (_v0) {
          console.log("Failed to stop pendo guides for managed accounts:", _v0);
        }
      }, [_v17]), (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v529, {}), (0, _v1.jsx)(_v543, {}), !_v17 && (0, _v1.jsx)(_v503, {}), (0, _v1.jsx)(_v21, {
          isSuppressed: _v17
        }), (0, _v1.jsx)(_v39, {
          isSuppressed: _v17
        }), !_v17 && _v15, (0, _v1.jsx)(_v540, {
          phase: _v18.phase,
          selectedAnswer: _v18.selectedAnswer,
          reason: _v18.reason,
          submitDisabled: _v18.submitDisabled,
          reasonVisible: _v18.reasonVisible,
          onSelect: _v18.select,
          onReasonChange: _v18.setReason,
          onSubmit: _v18.submit
        }), (0, _v1.jsx)(_v480, {
          canCustomizeHomepage: !!_v7.customizeHomepage,
          playerAssetUrls: _v0,
          banner: _v14,
          suppressSignupUpsell: _v17,
          forceColdStorage: _v16
        })]
      });
    };
  (0, _v7.withPageSetup)(() => ({
    props: {
      hasThemeSupport: !0,
      hasUploader: !0,
      hasPlayerAPI: !0
    }
  }), {
    requireLogin: !0,
    noIndex: !0,
    inlineViewer: !0,
    inlinePlayerAssets: !0
  }), _v545.getLayout = (_v0, _v1) => (0, _v1.jsx)(_v41.VideoLibraryLayout, {
    hasSideNav: !0,
    sideNavContent: (0, _v1.jsx)(_v40.SideNavContent, {
      surface: "home"
    }),
    sideNavSurface: "home",
    searchContentAlignment: _v46,
    playerAssetUrls: _v1.playerAssetUrls,
    hasUploader: _v1.hasUploader,
    children: _v0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v545], 0);
}