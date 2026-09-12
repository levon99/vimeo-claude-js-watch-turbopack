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
    _v15 = _v0.i(0);
  let _v16 = ({
    availableCredits: _v0,
    children: _v1,
    location: _v2,
    name: _v3,
    usedCredits: _v4
  }) => {
    let _v5,
      _v6,
      _v7,
      {
        sendClickMeterHelpCenterEvent: _v8,
        sendClickMeterVideoLibraryEvent: _v9
      } = (_v6 = (0, _v15.useViewer)(), _v7 = ({
        availableCredits: _v0,
        eventName: _v1,
        location: _v2,
        pageName: _v3,
        usedCredits: _v4
      }) => {
        (0, _v13.sendBpEventWithContexts)(_v1, {
          ...(0, _v9.buildActionBpContext)({
            action_type: "click",
            feature: null
          }),
          ...(({
            location: _v0
          }) => (0, _v10.buildProductAnalyticsBpContext)({
            product: "ai",
            feature: "ai_translate",
            location: _v0,
            is_user_facing_data: !0,
            entity_type: "ai_credits"
          }))({
            location: _v2
          }),
          ...(0, _v12.buildWebBpContext)({
            page_name: _v3,
            location: null,
            referrer_page_name: _v3,
            referrer: window?.location?.href
          }),
          ...(0, _v11.buildTeamBpContextFromTeamUser)(_v6?.teamUser),
          ...(0, _v14.buildThirdPartyIntegrationBpContext)({
            integration_id: null,
            integration_name: null,
            is_partner: null
          }),
          ...{
            ai_credits_context: new _v8.EventContext("ai_credits_context", 1, {
              credits_available: _v0,
              credits_used: _v4,
              is_credits_relevant: !0
            })
          }
        }, 1);
      }, {
        sendClickMeterHelpCenterEvent: ({
          availableCredits: _v0,
          location: _v1,
          pageName: _v2,
          usedCredits: _v3
        }) => {
          _v7({
            availableCredits: _v0,
            eventName: "vimeo.open_meter_help_center",
            location: _v1,
            pageName: _v2,
            usedCredits: _v3
          });
        },
        sendClickMeterVideoLibraryEvent: ({
          availableCredits: _v0,
          location: _v1,
          pageName: _v2,
          usedCredits: _v3
        }) => {
          _v7({
            availableCredits: _v0,
            eventName: "vimeo.start_translation_from_meter",
            location: _v1,
            pageName: _v2,
            usedCredits: _v3
          });
        }
      }),
      _v10 = "/manage/team/billing" === (0, _v2.usePathname)() ? "billing" : "logged_in_home_page",
      _v11 = "";
    return "help" === _v3 ? (_v11 = "/help/sso?redirect_to=https://help.vimeo.com/hc/en-us/articles/33610803164177-About-AI-Credits", _v5 = () => _v8({
      availableCredits: _v0,
      location: _v2,
      pageName: _v10,
      usedCredits: _v4
    })) : "videoLibrary" === _v3 && (_v11 = "/library?startTranslation=true", _v5 = () => _v9({
      availableCredits: _v0,
      location: _v2,
      pageName: _v10,
      usedCredits: _v4
    })), (0, _v1.jsx)(_v4.Link, {
      variant: "inline-secondary",
      href: _v11,
      target: "_blank",
      onClick: () => _v5(),
      children: _v1
    });
  };
  _v0.s(["AiCreditsRemainingUpsellMessage", 0, ({
    location: _v0,
    quotaRemaining: _v1,
    showZeroCreditsMessage: _v2,
    isWorkspaceAdminUser: _v3
  }) => {
    let _v4 = (0, _v3.useContext)(_v6.ViewerContext);
    return _v2 ? (0, _v7.getOutOfAICreditsText)({
      showZeroCreditsMessage: !!_v2,
      isWorkspaceAdminUser: !!_v3
    }) : _v4?.user?.isFreeTrial ? (0, _v5.translate)({
      singular: "Get more AI credits when your subscription starts. {LINK}Learn more.{/LINK}",
      replacements: {
        LINK: _v0 => _v16({
          name: "help",
          availableCredits: _v1,
          children: _v0,
          location: _v0,
          usedCredits: null
        })
      },
      dictionary: {
        es: {
          singular: "Obtenga más créditos de IA cuando comience su suscripción. {LINK}Más información{/LINK}."
        },
        "de-DE": {
          singular: "Erhalten Sie mehr AI-Credits, wenn Ihr Abonnement startet. {LINK}Mehr erfahren.{/LINK}"
        },
        "fr-FR": {
          singular: "Recevez plus de crédits d'IA lorsque votre abonnement commence. {LINK}En savoir plus.{/LINK}"
        },
        "ja-JP": {
          singular: "サブスクリプションが開始されると、AIクレジットをさらに獲得できます。{LINK}詳細はこちら。{/LINK}"
        },
        "ko-KR": {
          singular: "구독이 시작되면 더 많은 AI 크레딧을 받으실 수 있습니다. {LINK}자세히 보기{/LINK}"
        },
        "pt-BR": {
          singular: "Ganhe mais créditos de IA quando sua assinatura começar. {LINK}Saiba mais.{/LINK}"
        },
        "zh-CN": {
          singular: "当您的订阅开始时，您将获得更多的 AI 积分。{LINK}了解更多。{/LINK}"
        }
      }
    }) : (0, _v5.translate)({
      singular: "{LINK}Start a translation{/LINK} to buy more credits. You’ll only get billed for what you use.",
      replacements: {
        LINK: _v0 => _v16({
          name: "videoLibrary",
          availableCredits: _v1,
          children: _v0,
          location: _v0,
          usedCredits: null
        })
      },
      dictionary: {
        es: {
          singular: "{LINK}Comience una traducción{/LINK} para comprar más créditos. Solo se le facturará por lo que utilice."
        },
        "de-DE": {
          singular: "{LINK}Starten Sie eine Übersetzung{/LINK}, um weitere Credits zu kaufen. Ihnen wird nur das in Rechnung gestellt, was Sie nutzen."
        },
        "fr-FR": {
          singular: "{LINK}Commencez une traduction{/LINK} pour acheter plus de crédits. Vous ne serez facturé(e) que pour ce que vous utilisez."
        },
        "ja-JP": {
          singular: "クレジットを追加購入するには{LINK}翻訳を開始{/LINK}してください。ご利用になった分だけ請求されます。"
        },
        "ko-KR": {
          singular: "더 많은 크레딧을 구매하려면 {LINK}번역을 시작{/LINK}하세요. 사용한 만큼만 요금이 청구됩니다."
        },
        "pt-BR": {
          singular: "{LINK}Inicie uma tradução{/LINK} para comprar mais créditos. Você só será cobrado pelo que usar."
        },
        "zh-CN": {
          singular: "{LINK}开始翻译{/LINK}以购买更多积分。您只需按使用量付费。"
        }
      }
    });
  }], 0);
}