{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  let _v8 = ({
    availableCredits: _v0,
    children: _v1,
    location: _v2,
    name: _v3,
    usedCredits: _v4
  }) => {
    let _v5,
      {
        sendClickMeterHelpCenterEvent: _v6,
        sendClickMeterVideoLibraryEvent: _v7
      } = {
        sendClickMeterHelpCenterEvent: _v0 => {},
        sendClickMeterVideoLibraryEvent: _v0 => {}
      },
      _v8 = "/manage/team/billing" === (0, _v2.usePathname)() ? "billing" : "logged_in_home_page",
      _v9 = "";
    return "help" === _v3 ? (_v9 = "/help/sso?redirect_to=https://help.vimeo.com/hc/en-us/articles/33610803164177-About-AI-Credits", _v5 = () => _v6({
      availableCredits: _v0,
      location: _v2,
      pageName: _v8,
      usedCredits: _v4
    })) : "videoLibrary" === _v3 && (_v9 = "/library?startTranslation=true", _v5 = () => _v7({
      availableCredits: _v0,
      location: _v2,
      pageName: _v8,
      usedCredits: _v4
    })), (0, _v1.jsx)(_v4.Link, {
      variant: "inline-secondary",
      href: _v9,
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
        LINK: _v0 => _v8({
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
        LINK: _v0 => _v8({
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