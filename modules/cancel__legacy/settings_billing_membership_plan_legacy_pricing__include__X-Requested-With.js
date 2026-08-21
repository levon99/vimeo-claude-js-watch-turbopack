{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v2,
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
  class _v16 extends _v4.Component {
    state = {
      isMonthly: !1,
      currentPrice: "",
      legacyPrice: "",
      redirectToSurvey: !1
    };
    componentDidMount() {
      fetch("/settings/billing/membership_plan/legacy_pricing", {
        credentials: "include",
        method: "GET",
        headers: {
          "X-Requested-With": "XMLHttpRequest"
        }
      }).then(_v0 => {
        if (_v0.ok) return _v0.json();
        this.redirectToSurvey();
      }).then(_v0 => {
        let _v1 = (0, _v8.camelize)(_v0);
        this.setState({
          isMonthly: _v1.isMonthly,
          currentPrice: _v1.currentPrice,
          legacyPrice: _v1.legacyPrice
        }), (!_v1.currentPrice || !_v1.legacyPrice || parseFloat(_v1.currentPrice.replace(/[^\d.-]/g, "")) <= parseFloat(_v1.legacyPrice.replace(/[^\d.-]/g, ""))) && (_v7.FatalAttraction.trackEvent({
          container: "legacy_pricing_bad_data",
          keyword: JSON.stringify({
            currentPrice: _v1.currentPrice,
            legacyPrice: _v1.legacyPrice,
            userId: (0, _v3.default)(this.props, "viewer.user.id"),
            accountType: (0, _v3.default)(this.props, "viewer.user.account")
          })
        }), this.redirectToSurvey());
      }).catch(() => {
        this.redirectToSurvey();
      });
    }
    redirectToSurvey() {
      this.setState({
        redirectToSurvey: !0
      });
    }
    render() {
      return this.state.redirectToSurvey ? (0, _v1.jsx)(_v5.Redirect, {
        to: "/cancel/reason"
      }) : this.state.currentPrice && this.state.legacyPrice ? (0, _v1.jsxs)(_v17, {
        children: [(0, _v1.jsxs)("header", {
          children: [(0, _v1.jsx)(_v20, {
            children: (0, _v9.translate)({
              singular: "Are you sure?",
              dictionary: {
                es: {
                  singular: "¿Estás seguro(a)?"
                },
                "de-DE": {
                  singular: "Bist du dir sicher?"
                },
                "fr-FR": {
                  singular: "Êtes-vous sûr ?"
                },
                "ja-JP": {
                  singular: "よろしいですか？"
                },
                "ko-KR": {
                  singular: "정말로 실행할까요?"
                },
                "pt-BR": {
                  singular: "Você tem certeza?"
                },
                "zh-CN": {
                  singular: "您确定吗？"
                }
              }
            })
          }), (0, _v1.jsx)(_v20, {
            children: (0, _v9.translate)({
              singular: "You'll lose your legacy pricing.",
              dictionary: {
                es: {
                  singular: "Perderás el precio preexistente."
                },
                "de-DE": {
                  singular: "Du wirst den alten Preis verlieren."
                },
                "fr-FR": {
                  singular: "Vous perdrez votre ancien prix."
                },
                "ja-JP": {
                  singular: "今後 従来の価格はご利用になれません。"
                },
                "ko-KR": {
                  singular: "기존 가격을 잃게 됩니다."
                },
                "pt-BR": {
                  singular: "Você perderá seu preço antigo."
                },
                "zh-CN": {
                  singular: "您将无法再使用旧定价。"
                }
              }
            })
          })]
        }), (0, _v1.jsxs)(_v18, {
          children: [(0, _v1.jsx)(_v13.Text, {
            centered: !0,
            children: (0, _v9.translate)({
              singular: "Since you joined, the cost for new members has increased to:",
              dictionary: {
                es: {
                  singular: "Desde que te uniste, el costo para los nuevos miembros ha aumentado a:"
                },
                "de-DE": {
                  singular: "Seit deiner Registrierung sind die Kosten für neue Mitglieder auf folgenden Betrag gestiegen."
                },
                "fr-FR": {
                  singular: "Depuis votre inscription, le tarif pour les nouveaux membres est passé à :"
                },
                "ja-JP": {
                  singular: "お客様のVimeoご登録後、新規メンバー料金が次のとおり変更になりました："
                },
                "ko-KR": {
                  singular: "새 회원부터는 멤버십 요금이 다음과 같이 인상됩니다."
                },
                "pt-BR": {
                  singular: "Desde que você se cadastrou, o valor para novos assinantes aumentou para:"
                },
                "zh-CN": {
                  singular: "自您加入以来，新会员的费用已增长至："
                }
              }
            })
          }), (0, _v1.jsx)(_v13.Text, {
            centered: !0,
            children: this.state.isMonthly ? (0, _v9.translate)({
              singular: "{PRICE} /month",
              replacements: {
                PRICE: (0, _v1.jsx)(_v21, {
                  children: this.state.currentPrice
                }, "new-price")
              },
              dictionary: {
                es: {
                  singular: "{PRICE} / mes"
                },
                "de-DE": {
                  singular: "{PRICE}/Monat"
                },
                "fr-FR": {
                  singular: "{PRICE}/mois"
                },
                "ja-JP": {
                  singular: "{PRICE} / 月"
                },
                "ko-KR": {
                  singular: "{PRICE}/월"
                },
                "pt-BR": {
                  singular: "{PRICE} /mês"
                },
                "zh-CN": {
                  singular: "{PRICE}/月"
                }
              }
            }) : (0, _v9.translate)({
              singular: "{PRICE} /year",
              replacements: {
                PRICE: (0, _v1.jsx)(_v21, {
                  children: this.state.currentPrice
                }, "new-price")
              },
              dictionary: {
                es: {
                  singular: "{PRICE}/año"
                },
                "de-DE": {
                  singular: "{PRICE}/Jahr"
                },
                "fr-FR": {
                  singular: "{PRICE} / an"
                },
                "ja-JP": {
                  singular: "{PRICE}/ 年"
                },
                "ko-KR": {
                  singular: "연 {PRICE}"
                },
                "pt-BR": {
                  singular: "{PRICE} /ano"
                },
                "zh-CN": {
                  singular: "{PRICE}/年"
                }
              }
            })
          }), (0, _v1.jsx)(_v13.Text, {
            centered: !0,
            children: this.state.isMonthly ? (0, _v9.translate)({
              singular: "If your membership expires, you'll lose your current pricing of {STRONG}{PRICE}/month{/STRONG}, and a new membership will be full price if you decide to return.",
              replacements: {
                PRICE: this.state.legacyPrice,
                STRONG: _v0 => (0, _v1.jsx)("strong", {
                  children: _v0
                }, "old-price")
              },
              dictionary: {
                es: {
                  singular: "Si tu membresía caduca, perderás tu precio actual de {STRONG}{PRICE} / mes{/STRONG}. Si decides volver, el precio de la nueva membresía no tendrá descuento."
                },
                "de-DE": {
                  singular: "Wenn deine Mitgliedschaft abläuft, verlierst du den bisherigen Preis von {STRONG}{PRICE}/Monat{/STRONG}. Solltest du dich zu einem späteren Zeitpunkt für eine neue Mitgliedschaft entscheiden, wird dir der volle Preis berechnet."
                },
                "fr-FR": {
                  singular: "Si votre abonnement arrive à expiration, vous perdrez votre tarif actuel de {STRONG}{PRICE}/mois{/STRONG}, et votre nouvelle adhésion vous sera facturée au plein tarif si vous décidez de revenir."
                },
                "ja-JP": {
                  singular: "現在のメンバーシップの期限が切れると従来の価格{STRONG}{PRICE}/月々{/STRONG}はご利用いただけなくなり、再度戻る場合は新しいメンバーシップ料金価格となります。"
                },
                "ko-KR": {
                  singular: "멤버십이 만료되면 기존 요금({STRONG}{PRICE}/월{/STRONG})을 더 이상 유지하실 수 없습니다. 이후에 다시 멤버십을 구매할 때에는 정상 가격으로 청구됩니다."
                },
                "pt-BR": {
                  singular: "Se sua assinatura vencer, você perderá seu preço atual de {STRONG}{PRICE}/mês{/STRONG}, e uma nova assinatura será cobrada com o valor integral caso você decida voltar."
                },
                "zh-CN": {
                  singular: "如果您的会员资格到期，您将无法再使用当前{/STRONG}每月 {PRICE}{STRONG} 的价格。如果您决定返回，新会员将采用全价计费。"
                }
              }
            }) : (0, _v9.translate)({
              singular: "If your membership expires, you'll lose your current pricing of {STRONG}{PRICE}/year{/STRONG}, and a new membership will be full price if you decide to return.",
              replacements: {
                PRICE: this.state.legacyPrice,
                STRONG: _v0 => (0, _v1.jsx)("strong", {
                  children: _v0
                }, "old-price")
              },
              dictionary: {
                es: {
                  singular: "Si tu membresía caduca, perderás tu precio actual de {STRONG}{PRICE} / año{/STRONG}. Si decides volver, el precio de la nueva membresía no tendrá descuento."
                },
                "de-DE": {
                  singular: "Wenn deine Mitgliedschaft abläuft, verlierst du den bisherigen Preis von {STRONG}{PRICE}/Jahr{/STRONG} und bei einer neuen Mitgliedschaft wird der volle Preis berechnet, falls du sie dann doch noch nimmst."
                },
                "fr-FR": {
                  singular: "Si votre abonnement arrive à expiration, vous perdrez votre tarif actuel de {STRONG}{PRICE}/an{/STRONG}, et votre nouvelle adhésion vous sera facturée au plein tarif si vous décidez de revenir."
                },
                "ja-JP": {
                  singular: "現在のメンバーシップの期限が切れると従来の価格{STRONG}{PRICE}/年間{/STRONG}はご利用いただけなくなり、再度戻る場合は新しいメンバーシップ料金価格となります。"
                },
                "ko-KR": {
                  singular: "멤버십이 만료되면 기존 요금({STRONG}{PRICE}/연{/STRONG})을 더 이상 유지하실 수 없습니다. 이후에 다시 멤버십을 구매할 때에는 정상 가격으로 청구됩니다."
                },
                "pt-BR": {
                  singular: "Se sua assinatura vencer, você perderá seu preço atual de {STRONG}{PRICE}/ano{/STRONG}, e uma nova assinatura será cobrada com o valor integral caso você decida voltar."
                },
                "zh-CN": {
                  singular: "如果您的会员资格到期，您将无法再使用当前{/STRONG}每年 {PRICE}{STRONG} 的价格。如果您决定返回，新会员将采用全价计费。"
                }
              }
            })
          })]
        }), (0, _v1.jsxs)(_v19, {
          children: [(0, _v1.jsx)(_v12.Button, {
            onClick: () => {
              (0, _v15.default)("legacyCancel", {
                ref_path: window.location.pathname,
                target: "/settings"
              }), window.location.href = "/settings";
            },
            children: (0, _v9.translate)({
              singular: "Return to settings",
              dictionary: {
                es: {
                  singular: "Volver a la configuración "
                },
                "de-DE": {
                  singular: "Zurück zu Einstellungen"
                },
                "fr-FR": {
                  singular: "Revenir aux paramètres"
                },
                "ja-JP": {
                  singular: "設定に戻る"
                },
                "ko-KR": {
                  singular: "설정으로 돌아가기"
                },
                "pt-BR": {
                  singular: "Voltar para configurações"
                },
                "zh-CN": {
                  singular: "返回设置"
                }
              }
            })
          }), (0, _v1.jsx)(_v12.Button, {
            variant: "outline",
            onClick: () => {
              (0, _v15.default)("legacyContinue", {
                ref_path: window.location.pathname,
                target: "/settings"
              }), window.location.href = "/cancel/reason";
            },
            children: (0, _v9.translate)({
              singular: "Turn off auto-renew",
              dictionary: {
                es: {
                  singular: "Desactivar la renovación automática"
                },
                "de-DE": {
                  singular: "Automatische Verlängerung deaktivieren"
                },
                "fr-FR": {
                  singular: "Désactiver le renouvellement automatique"
                },
                "ja-JP": {
                  singular: "自動更新をオフにする"
                },
                "ko-KR": {
                  singular: "자동 갱신 해제"
                },
                "pt-BR": {
                  singular: "Desativar renovação automática"
                },
                "zh-CN": {
                  singular: "关闭自动续订"
                }
              }
            })
          })]
        })]
      }) : null;
    }
  }
  let _v17 = (0, _v6.default)(_v10.Page).withConfig({
      displayName: "Legacy__PageStyled",
      componentId: "sc-38e178c5-0"
    })`
  width: 100%;
  max-width: 500px;

  section {
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;
    margin-bottom: 0.25rem;
  }

  footer {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 0.5rem;
    justify-content: stretch;
    align-content: stretch;

    @media (min-width: ${_v11.TABLET}) {
      grid-template-columns: 1fr 1fr;
    }
  }

  button {
    width: 100%;
  }
`,
    _v18 = _v6.default.section.withConfig({
      displayName: "Legacy__Body",
      componentId: "sc-38e178c5-1"
    })`
  margin-top: 0.6rem !important;
`,
    _v19 = _v6.default.footer.withConfig({
      displayName: "Legacy__Footer",
      componentId: "sc-38e178c5-2"
    })`
  padding: 0;

  @media (min-width: ${"46.875em"}) {
    padding: 0 5rem;
  }
`,
    _v20 = (0, _v6.default)(_v14.H2).withConfig({
      displayName: "Legacy__HeaderText",
      componentId: "sc-38e178c5-3"
    })`
  margin-bottom: 0.2rem;
  text-align: center;
`,
    _v21 = _v6.default.span.withConfig({
      displayName: "Legacy__PriceText",
      componentId: "sc-38e178c5-4"
    })`
  font-size: 2rem;
`;
  var _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0);
  let _v27 = _v0 => {
    let _v1 = (0, _v2.useContext)(_v25.ViewerContext);
    return (0, _v1.jsx)(_v16, {
      ..._v0,
      viewer: _v1
    });
  };
  _v27.getLayout = _v0 => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v23.RainbowRibbon, {}), (0, _v1.jsx)(_v26.ReactRouterLayout, {
      path: "/cancel/legacy",
      children: _v0
    }), (0, _v1.jsx)(_v24.MinimalFooterLayout, {})]
  }), (0, _v22.withPageSetup)({
    requireLogin: !0,
    inlineViewer: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v27], 0);
}