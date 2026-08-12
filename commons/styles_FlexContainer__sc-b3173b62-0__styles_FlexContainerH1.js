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
    _v12 = _v0.i(0);
  let _v13 = _v8.default.div.withConfig({
    displayName: "styles__FlexContainer",
    componentId: "sc-b3173b62-0"
  })`
  display: flex;
  flex-grow: 1;
  align-items: center;
  flex-basis: 100%;
  justify-content: center;
`;
  (0, _v8.default)(_v13).withConfig({
    displayName: "styles__FlexContainerH1",
    componentId: "sc-b3173b62-1"
  })`
  margin-top: ${(0, _v7.rem)(64)};
  @media (width > ${_v11.breakpoints.TABLET}) {
    margin-top: ${(0, _v7.rem)(120)};
  }
`, (0, _v8.default)(_v9.Header).withConfig({
    displayName: "styles__HeroH1",
    componentId: "sc-b3173b62-2"
  })`
  &&& {
    font-style: normal;
    ${(0, _v12.addTypography)(28, 100)}
    font-weight: 700;
    line-height: ${(0, _v7.rem)(33)};
    margin: 0;

    @media (width > ${_v11.breakpoints.TABLET}) {
      letter-spacing: ${(0, _v7.rem)(-4.6)};
      font-weight: 500 !important;
      line-height: 100%;
    }
  }
`, _v8.default.div.withConfig({
    displayName: "styles__ContentWrapper",
    componentId: "sc-b3173b62-3"
  })`
  display: flex;
  flex-direction: column;
  padding: 0 ${(0, _v10.space)(600)};
`, (0, _v8.default)(_v9.Header).withConfig({
    displayName: "styles__HeroSubheader",
    componentId: "sc-b3173b62-4"
  })`
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  ${(0, _v12.addTypography)(14, 26)}
  line-height: 1.5;
  margin-bottom: ${(0, _v7.rem)(20)};
  margin-top: ${(0, _v7.rem)(20)};
  text-align: center;
`;
  let _v14 = _v8.default.span.withConfig({
    displayName: "styles__FreePlanLink",
    componentId: "sc-b3173b62-5"
  })`
  font-weight: 500;
  &&& a {
    color: inherit;
  }
`;
  var _v15 = _v0.i(0);
  let _v16 = ({
      children: _v0,
      href: _v1 = "/home"
    }) => {
      let _v2 = (0, _v6.useViewer)(),
        [_v3, _v4] = (0, _v2.useState)(!1);
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v14, {
          children: (0, _v1.jsx)(_v3.Link, {
            cursor: "pointer",
            fontSize: "sm",
            variant: "inline-primary",
            href: _v1,
            onClick: _v0 => {
              _v2?.user || ((0, _v15.emitBPEvent)({
                copy: "free_plans",
                location: "upgrade_header",
                target: "join_page",
                plan_selected: "free",
                path: window.location.href
              }), _v0.preventDefault(), window.location.href = "/join");
            },
            children: _v0
          })
        }), (0, _v1.jsx)(_v5.LoginJoinModal, {
          type: "join",
          xsrft: _v2?.xsrft || "",
          shouldOptIntoMarketing: _v2?.shouldOptIntoMarketing,
          onSuccess: () => {
            window.location.href = _v1;
          },
          isShowing: _v3,
          onDismiss: () => _v4(!1),
          faContainer: "upgrade_plan"
        })]
      });
    },
    _v17 = {
      chooseAPlan: (0, _v4.translate)({
        singular: "Choose a plan",
        dictionary: {
          es: {
            singular: "Elija un plan"
          },
          "de-DE": {
            singular: "Suche dir einen Plan aus"
          },
          "fr-FR": {
            singular: "Choisissez un abonnement"
          },
          "ja-JP": {
            singular: "プランをお選びください。"
          },
          "ko-KR": {
            singular: "플랜 선택"
          },
          "pt-BR": {
            singular: "Escolha um plano"
          },
          "zh-CN": {
            singular: "选择套餐"
          }
        }
      }),
      chooseYourPlan: (0, _v4.translate)({
        singular: "Choose your plan",
        dictionary: {
          es: {
            singular: "Elija el plan para usted"
          },
          "de-DE": {
            singular: "Suchen Sie sich einen Plan aus"
          },
          "fr-FR": {
            singular: "Choisissez un abonnement"
          },
          "ja-JP": {
            singular: "プランをお選びください。"
          },
          "ko-KR": {
            singular: "요금제 선택"
          },
          "pt-BR": {
            singular: "Escolha seu plano"
          },
          "zh-CN": {
            singular: "选择您的套餐"
          }
        }
      }),
      upgradeYourPlan: (0, _v4.translate)({
        singular: "Upgrade your plan",
        dictionary: {
          es: {
            singular: "Actualiza tu plan"
          },
          "de-DE": {
            singular: "Tarif upgraden"
          },
          "fr-FR": {
            singular: "Améliorez votre forfait"
          },
          "ja-JP": {
            singular: "プランをアップグレード"
          },
          "ko-KR": {
            singular: "요금제를 업그레이드하세요"
          },
          "pt-BR": {
            singular: "Atualize seu plano"
          },
          "zh-CN": {
            singular: "升级您的计划"
          }
        }
      }),
      theUltimateAdFreePlayer: (0, _v4.translate)({
        singular: "The ultimate ad-free player",
        dictionary: {
          es: {
            singular: "El reproductor definitivo sin anuncios"
          },
          "de-DE": {
            singular: "Der ultimative werbefreie Player"
          },
          "fr-FR": {
            singular: "Le lecteur ultime sans publicités"
          },
          "ja-JP": {
            singular: "広告なしの高機能プレーヤー"
          },
          "ko-KR": {
            singular: "최고의 애드 프리 플레이어"
          },
          "pt-BR": {
            singular: "O player definitivo sem anúncios"
          },
          "zh-CN": {
            singular: "终极无广告播放器"
          }
        }
      })
    },
    _v18 = {
      getStartedWithFree: (0, _v4.translate)({
        singular: "Try any of the plans below for free. Or, if you’re a beginner, get started with our {LINK}Free plan.{/LINK}",
        replacements: {
          LINK: _v0 => (0, _v1.jsx)(_v16, {
            children: _v0
          })
        },
        dictionary: {
          es: {
            singular: "Prueba sin costo cualquiera de los siguientes planes. O, si recién empiezas, da tus primeros pasos con nuestro {LINK}plan gratuito.{/LINK}"
          },
          "de-DE": {
            singular: "Probiere einen der folgenden Tarife kostenlos aus. Und falls du neu bei Vimeo bist, kannst du mit unserem {LINK}kostenlosen Tarif{/LINK} loslegen."
          },
          "fr-FR": {
            singular: "Essayez gratuitement l’un des abonnements ci-dessous. Ou, si vous faites vos premiers pas, commencez par utiliser notre abonnement {LINK}Free{/LINK}."
          },
          "ja-JP": {
            singular: "以下のプランはいずれも無料でお試しいただけます。また、初心者の方は、{LINK}無料プラン{/LINK}からスタートしてみましょう。"
          },
          "ko-KR": {
            singular: "아래는 무료 체험이 가능한 요금제입니다.\n 동여상 제작이 처음이라면 {LINK}Free 요금제{/LINK}로 시작해보세요."
          },
          "pt-BR": {
            singular: "Experimente qualquer um dos planos abaixo gratuitamente. Ou, se for iniciante, comece com nosso {LINK}plano Free{/LINK}."
          },
          "zh-CN": {
            singular: "免费试用以下任何套餐。如果您是初学者，可以从我们的 {LINK}Free 套餐{/LINK}开始入门。"
          }
        }
      }),
      getStartedWithFreeConcise: _v0 => (0, _v4.translate)({
        singular: "Or get started with our {LINK}Free plan.{/LINK}",
        replacements: {
          LINK: _v0 => (0, _v1.jsx)(_v16, {
            href: _v0,
            children: _v0
          })
        },
        dictionary: {
          es: {
            singular: "O comience con nuestro {LINK}plan gratuito{/LINK}."
          },
          "de-DE": {
            singular: "Oder beginnen Sie mit unserem {LINK}kostenlosen Tarif.{/LINK}."
          },
          "fr-FR": {
            singular: "Ou commencez avec notre {LINK}abonnement gratuit{/LINK}."
          },
          "ja-JP": {
            singular: "または、{LINK}Freeプラン{/LINK}から開始。"
          },
          "ko-KR": {
            singular: "또는 {LINK}Free 요금제{/LINK}로 시작해보세요."
          },
          "pt-BR": {
            singular: "Ou comece com nosso {LINK}plano Free{/LINK}."
          },
          "zh-CN": {
            singular: "或者从我们的{LINK}免费套餐{/LINK}开始入门。"
          }
        }
      }),
      getStartedWithBasic: (0, _v4.translate)({
        singular: "Start a free trial, or get started with {LINK}Vimeo Basic.{/LINK}",
        replacements: {
          LINK: _v0 => (0, _v1.jsx)(_v16, {
            children: _v0
          })
        },
        dictionary: {
          es: {
            singular: "Comience una prueba gratuita o empiece con {LINK}Vimeo Basic.{/LINK}"
          },
          "de-DE": {
            singular: "Starte ein kostenloses Probeabo oder lege mit {LINK}Vimeo Basic{/LINK} los."
          },
          "fr-FR": {
            singular: "Commencez un essai gratuit, ou lancez-vous avec {LINK}Vimeo Basic.{/LINK}"
          },
          "ja-JP": {
            singular: "無料トライアルをスタートするか、{LINK}Vimeo Basic{/LINK}を初めましょう。"
          },
          "ko-KR": {
            singular: "무료 평가판을 시작하거나 {LINK}Vimeo Basic{/LINK}을 시작하세요."
          },
          "pt-BR": {
            singular: "Faça uma avaliação gratuita, ou comece com o {LINK}Vimeo Basic.{/LINK}"
          },
          "zh-CN": {
            singular: "开始免费试用，或订阅 {LINK}Vimeo Basic{/LINK} 开始使用。"
          }
        }
      }),
      getStartedWithBasicPlan: (0, _v4.translate)({
        singular: "Start a free trial, or get started with our {LINK}basic plan{/LINK}",
        replacements: {
          LINK: _v0 => (0, _v1.jsx)(_v16, {
            children: _v0
          })
        },
        dictionary: {
          es: {
            singular: "Comience una prueba gratis o empiece con nuestro {LINK}plan Basic{/LINK}."
          },
          "de-DE": {
            singular: "Starten Sie eine kostenlose Testversion, oder beginnen Sie mit unserem {LINK}Basis-Tarif{/LINK}."
          },
          "fr-FR": {
            singular: "Commencez un essai gratuit ou lancez-vous avec notre {LINK}abonnement Basic{/LINK}."
          },
          "ja-JP": {
            singular: "無料トライアルを開始するか、{LINK}Basicプラン{/LINK}で始めましょう"
          },
          "ko-KR": {
            singular: "무료 체험을 시작하거나 {LINK}베이직 요금제{/LINK}로 시작하세요."
          },
          "pt-BR": {
            singular: "Faça uma avaliação gratuita ou comece com o nosso {LINK}plano básico{/LINK}"
          },
          "zh-CN": {
            singular: "开始免费试用，或开始使用我们的 {LINK}Basic 套餐{/LINK}"
          }
        }
      })
    };
  _v0.s(["PRIMARY_HEADERS", 0, _v17, "SECONDARY_HEADERS", 0, _v18], 0);
  let _v19 = _v2.default.createContext({});
  _v0.s(["OverridesContext", 0, _v19, "OverridesContextProvider", 0, function ({
    overrides: _v0,
    viewer: _v1,
    showYearly: _v2,
    children: _v3
  }) {
    let _v4 = {};
    return (_v1?.user?.account === "free" && _v1?.user?.capabilities?.hasFreeTrialEligibility || _v1?.user === null) && _v2 && (_v4 = {
      ctaTreatment: "free_trial_primary"
    }), _v1?.user === null && (_v4.description = _v18.getStartedWithBasicPlan), (0, _v1.jsx)(_v19.Provider, {
      value: {
        ..._v4,
        ..._v0
      },
      children: _v3
    });
  }], 0);
}