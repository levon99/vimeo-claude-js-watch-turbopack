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
    _v17 = _v0.i(0);
  _v0.i(0);
  var _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0);
  _v0.i(0);
  var _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0);
  function _v52(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v51.useGctlConfig)();
    return (0, _v48.default)(_v2 ? `/me/stripe/config${(0, _v50.serializeQuery)(_v2)}` : () => null, _v2 ? () => (0, _v47.getMeStripeConfig)({
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
  "true" === _v46.default.env.STORYBOOK && (0, _v50.assignMswData)(_v52, {
    endpoint: "/me/stripe/config",
    method: "GET"
  }), "true" === _v46.default.env.STORYBOOK && (0, _v50.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v49.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v51.useGctlConfig)(),
      [_v5, _v6] = (0, _v50.useInternalState)();
    return [(0, _v3.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/stripe/config${(0, _v50.serializeQuery)(_v0)}`, (0, _v47.getMeStripeConfig)({
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
    endpoint: "/me/stripe/config",
    method: "GET"
  });
  var _v53 = _v0.i(0),
    _v54 = _v0.i(0);
  async function _v55({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      subscriptionId: _v3
    },
    ..._v4
  }) {
    return (0, _v53.measureLatency)("patchMeSubscription", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/me/subscriptions/${_v3}?fields=${_v1.map(_v54.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "PATCH",
        body: JSON.stringify((0, _v54.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v54.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v54.deepCamelCase)(_v1);
    });
  }
  function _v56() {
    let {
        mutate: _v0
      } = (0, _v49.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v51.useGctlConfig)(),
      [_v5, _v6] = (0, _v50.useInternalState)();
    return [(0, _v3.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/subscriptions/${_v0.where.subscriptionId}${(0, _v50.serializeQuery)(_v0)}`, _v55({
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
  "true" === _v46.default.env.STORYBOOK && (0, _v50.assignMswData)(_v56, {
    endpoint: "/me/subscriptions/:subscriptionId",
    method: "PATCH"
  });
  var _v57 = _v0.i(0),
    _v58 = _v0.i(0),
    _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v60 = _v60,
    _v61 = _v0.i(0),
    _v62 = _v0.i(0),
    _v63 = _v0.i(0),
    _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0),
    _v67 = _v0.i(0),
    _v68 = _v0.i(0),
    _v69 = _v0.i(0),
    _v70 = _v0.i(0),
    _v71 = _v0.i(0),
    _v72 = _v0.i(0),
    _v73 = _v0.i(0);
  let _v74 = ({
      onClick: _v0
    }) => (0, _v1.jsx)(_v79, {
      icon: (0, _v1.jsx)(_v69.CloseX, {}),
      size: "sm",
      variant: "minimalTransparent",
      format: "basic",
      onClick: _v0
    }),
    _v75 = ({
      confirmPersonalUser: _v0,
      selectedRadioValue: _v1,
      setShouldDisplayModal: _v2,
      shouldDisplayModal: _v3,
      optInForBusinessUser: _v4,
      optOutForBusinessUser: _v5,
      trackBillingAction: _v6
    }) => (0, _v1.jsx)(_v72.Modal, {
      active: _v3,
      size: "lg",
      content: _v1 === _v65.UserEntity.Personal ? (0, _v1.jsxs)(_v78, {
        children: [(0, _v1.jsxs)(_v12.Header, {
          as: "h4",
          size: "md",
          marginBottom: "17",
          children: [(0, _v70.translate)({
            singular: "Personal account selection",
            dictionary: {
              es: {
                singular: "Selección de cuenta Personal"
              },
              "de-DE": {
                singular: "Deine Auswahl – Persönliches Konto"
              },
              "fr-FR": {
                singular: "Compte personnel"
              },
              "ja-JP": {
                singular: "個人アカウントの選択"
              },
              "ko-KR": {
                singular: "개인 계정 선택"
              },
              "pt-BR": {
                singular: "Seleção de conta Pessoal"
              },
              "zh-CN": {
                singular: "个人账户选择"
              }
            }
          }), (0, _v1.jsx)(_v74, {
            onClick: () => {
              _v6({
                action_type: _v64.BillingActionTypes.CLICK,
                location: _v64.BillingActionLocations.ACCOUNT_USAGE_MODAL_CLOSE_BUTTON
              }), _v2(!1);
            }
          })]
        }), (0, _v1.jsx)(_v73.Paragraph, {
          size: "2",
          children: (0, _v70.translate)({
            singular: "By selecting Personal as your account usage type, we will disable automatic renewal in accordance with German law. You will need to return to this page to manually renew your subscription at the end of the current term.",
            dictionary: {
              es: {
                singular: "Al seleccionar Personal como tipo de uso de tu cuenta, desactivaremos la renovación automática de acuerdo con la legislación alemana. Deberás volver a esta página para renovar manualmente tu suscripción al finalizar el período actual."
              },
              "de-DE": {
                singular: 'Wenn du "Persönlich" als Nutzungsart für dein Konto auswählst, deaktivieren wir die automatische Verlängerung in Übereinstimmung mit der deutschen Gesetzgebung. Nach Ablauf der aktuellen Laufzeit musst du diese Seite erneut aufrufen, um dein Abonnement manuell zu verlängern.'
              },
              "fr-FR": {
                singular: "Vous avez choisi un compte à usage personnel. Par conséquent, nous allons désactiver le renouvellement automatique, conformément à la loi allemande. Nous vous invitons à retourner sur cette page à la fin de la période en cours pour renouveler manuellement votre abonnement."
              },
              "ja-JP": {
                singular: "アカウントの利用タイプで個人を選択すると、ドイツの法律に基づき、自動更新が無効化されます。サブスクリプションを更新するには、現在のサブスクリプション期間終了時にこのページに戻り、手動で更新する必要があります。"
              },
              "ko-KR": {
                singular: "계정 사용 유형으로 개인을 선택하면 독일 법률에 따라 자동 갱신이 비활성화됩니다. 현재 기간이 끝날 때 이 페이지로 돌아와서 구독을 수동으로 갱신해야 합니다."
              },
              "pt-BR": {
                singular: "Se você selecionar Pessoal como tipo de uso da sua conta, desativaremos a renovação automática, de acordo com a lei alemã. Você precisará retornar a esta página para renovar manualmente sua assinatura ao final do período atual."
              },
              "zh-CN": {
                singular: "通过选择个人作为您的帐户使用类型，我们将根据德国法律禁用自动续订。您需要返回此页面，以便在当前期限结束时手动续订您的订阅。"
              }
            }
          })
        }), (0, _v1.jsxs)(_v76, {
          children: [(0, _v1.jsx)(_v77, {
            format: "secondary",
            onClick: () => {
              _v6({
                action_type: _v64.BillingActionTypes.CLICK,
                location: _v64.BillingActionLocations.PERSONAL_ACCOUNT_USAGE_MODAL_USE_FOR_BUSINESS_BUTTON
              }), _v2(!1);
            },
            children: (0, _v70.translate)({
              singular: "I use for business",
              dictionary: {
                es: {
                  singular: "Uso con fines comerciales"
                },
                "de-DE": {
                  singular: "Ich nutze mein Konto geschäftlich"
                },
                "fr-FR": {
                  singular: "Je suis un(e) pro"
                },
                "ja-JP": {
                  singular: "私はビジネス目的で使用します"
                },
                "ko-KR": {
                  singular: "비즈니스용으로 사용합니다"
                },
                "pt-BR": {
                  singular: "Eu uso para negócios"
                },
                "zh-CN": {
                  singular: "我用于商务目的"
                }
              }
            })
          }), (0, _v1.jsx)(_v77, {
            format: "primary",
            onClick: () => _v0(),
            children: (0, _v70.translate)({
              singular: "Confirm",
              dictionary: {
                es: {
                  singular: "Confirmar"
                },
                "de-DE": {
                  singular: "Bestätigen"
                },
                "fr-FR": {
                  singular: "Confirmer"
                },
                "ja-JP": {
                  singular: "確定"
                },
                "ko-KR": {
                  singular: "확인"
                },
                "pt-BR": {
                  singular: "Confirmar"
                },
                "zh-CN": {
                  singular: "确认"
                }
              }
            })
          })]
        })]
      }) : (0, _v1.jsxs)(_v78, {
        children: [(0, _v1.jsxs)(_v12.Header, {
          as: "h4",
          size: "md",
          marginBottom: "17",
          children: [(0, _v70.translate)({
            singular: "Business account selection",
            dictionary: {
              es: {
                singular: "Selección de cuenta Business"
              },
              "de-DE": {
                singular: "Deine Auswahl – Business-Konto"
              },
              "fr-FR": {
                singular: "Compte professionnel"
              },
              "ja-JP": {
                singular: "ビジネスアカウントの選択"
              },
              "ko-KR": {
                singular: "비즈니스 계정 선택"
              },
              "pt-BR": {
                singular: "Seleção de conta Business"
              },
              "zh-CN": {
                singular: "选择 Business 帐户"
              }
            }
          }), (0, _v1.jsx)(_v74, {
            onClick: () => {
              _v6({
                action_type: _v64.BillingActionTypes.CLICK,
                location: _v64.BillingActionLocations.ACCOUNT_USAGE_MODAL_CLOSE_BUTTON
              }), _v2(!1);
            }
          })]
        }), (0, _v1.jsx)(_v73.Paragraph, {
          size: "2",
          children: (0, _v70.translate)({
            singular: "You've successfully changed your account usage type to Business. You are now eligible to enroll in automatic renewal. Once enabled, your subscription will automatically renew at the end of your current term. We'll send you a reminder email in advance and you can cancel at anytime prior to renewal.",
            dictionary: {
              es: {
                singular: "Cambiaste correctamente el tipo de uso de tu cuenta a Business. Ya puedes inscribirte en la renovación automática. Una vez activada, tu suscripción se renovará automáticamente al finalizar el período actual. Te enviaremos un recordatorio por correo electrónico con antelación y podrás cancelarla en cualquier momento antes de la renovación."
              },
              "de-DE": {
                singular: "Du hast die Verwendungsart deines Kontos erfolgreich auf Business geändert. Damit kannst du dich jetzt für die automatische Verlängerung anmelden. Wenn du die automatische Verlängerung aktiviert hast, wird dein Abonnement am Ende der aktuellen Laufzeit automatisch verlängert. Vorab wirst du eine E-Mail zur Erinnerung von uns erhalten. Und natürlich kannst du jederzeit vor der Verlängerung kündigen."
              },
              "fr-FR": {
                singular: "Vous avez opté pour un compte à usage professionnel. Vous êtes par conséquent éligible au renouvellement automatique. Si vous activez cette option, votre abonnement sera automatiquement renouvelé à la fin de la période en cours. Nous vous enverrons un e-mail de rappel avant la date de renouvellement et vous pourrez résilier l'abonnement à tout moment jusqu'à cette date."
              },
              "ja-JP": {
                singular: "アカウントの利用タイプをビジネスに変更しました。これで自動更新を選択できるようになりました。自動更新を選択すると、現在のサブスクリプション期間終了時にサブスクリプションが自動的に更新されます。その前にVimeoからリマインダーメールが届くので、必要に応じて更新前にキャンセルすることができます。"
              },
              "ko-KR": {
                singular: "계정 사용 유형을 비즈니스로 변경했습니다. 이제 자동 갱신 등록이 가능합니다. 자동 갱신이 활성화되면 현재 기간이 끝날 때 구독이 자동으로 갱신됩니다. 사전에 알림 이메일을 보내드리며 갱신 전에는 언제든지 취소할 수 있습니다."
              },
              "pt-BR": {
                singular: "Você alterou com sucesso o tipo de uso da sua conta para Business. Agora você pode inscrever-se na renovação automática. Depois que ela for ativada, sua assinatura será renovada automaticamente ao final do período atual. Enviaremos um e-mail de lembrete com antecedência, e você poderá cancelar a qualquer momento antes da renovação."
              },
              "zh-CN": {
                singular: "您已成功将账户使用类型更改为“商业”。您现在可以注册自动续订。启用之后，您的订阅将在当前期限结束时自动续订。我们会提前给您发送一封提醒邮件，您可以在续订前随时取消。"
              }
            }
          })
        }), (0, _v1.jsxs)(_v76, {
          children: [(0, _v1.jsx)(_v77, {
            format: "secondary",
            onClick: () => _v5(),
            children: (0, _v70.translate)({
              singular: "Keep auto-renew off",
              dictionary: {
                es: {
                  singular: "Mantener desactivada la renovación automática"
                },
                "de-DE": {
                  singular: "Automatische Verlängerung deaktiviert lassen"
                },
                "fr-FR": {
                  singular: "Ne pas activer"
                },
                "ja-JP": {
                  singular: "自動更新をオフにしておく"
                },
                "ko-KR": {
                  singular: "자동 갱신 해제"
                },
                "pt-BR": {
                  singular: "Manter a renovação automática desativada"
                },
                "zh-CN": {
                  singular: "继续关闭自动续订"
                }
              }
            })
          }), (0, _v1.jsx)(_v77, {
            format: "primary",
            onClick: () => _v4(),
            children: (0, _v70.translate)({
              singular: "Enable auto-renew",
              dictionary: {
                es: {
                  singular: "Habilitar la renovación automática"
                },
                "de-DE": {
                  singular: "Automatische Verlängerung aktivieren"
                },
                "fr-FR": {
                  singular: "Activer le renouvellement automatique"
                },
                "ja-JP": {
                  singular: "自動更新を有効にする"
                },
                "ko-KR": {
                  singular: "자동 갱신 활성화"
                },
                "pt-BR": {
                  singular: "Ativar renovação automática"
                },
                "zh-CN": {
                  singular: "启用自动续订"
                }
              }
            })
          })]
        })]
      })
    }),
    _v76 = _v68.default.div.withConfig({
      displayName: "AccountUsageSelectionModal__ModalButtonsWrapper",
      componentId: "sc-88af39ce-0"
    })`
  display: flex;
  justify-content: flex-end;
  margin-top: ${(0, _v67.rem)(32)};
`,
    _v77 = (0, _v68.default)(_v71.Button).withConfig({
      displayName: "AccountUsageSelectionModal__StyledButton",
      componentId: "sc-88af39ce-1"
    })`
  height: fit-content;
  span {
    overflow: visible;
    white-space: nowrap;
  }
`,
    _v78 = _v68.default.div.withConfig({
      displayName: "AccountUsageSelectionModal__ModalContent",
      componentId: "sc-88af39ce-2"
    })`
  background: white;
  padding: ${(0, _v67.rem)(25)} ${(0, _v67.rem)(30)};
  border-radius: ${(0, _v67.rem)(6)};
`,
    _v79 = (0, _v68.default)(_v71.Button).withConfig({
      displayName: "AccountUsageSelectionModal__CloseIconStyle",
      componentId: "sc-88af39ce-3"
    })`
  position: absolute;
  top: ${(0, _v67.rem)(15)};
  right: ${(0, _v67.rem)(24)};
`;
  var _v80 = _v0.i(0),
    _v81 = _v0.i(0),
    _v82 = _v0.i(0),
    _v83 = _v0.i(0);
  let _v84 = ({
    aiCreditsQuota: _v0,
    ..._v1
  }) => {
    let _v2 = (0, _v83.useLocale)();
    return (0, _v1.jsx)(_v14.VStack, {
      ..._v1,
      children: (0, _v1.jsxs)(_v8.Box, {
        children: [(0, _v1.jsxs)(_v38.Text, {
          variant: "heading-xs",
          mb: 4,
          children: [_v66.T.CreditsRemaining, " ", _v0?.remaining && _v0.remaining > 0 ? (0, _v1.jsxs)(_v30.Popover, {
            trigger: "click",
            children: [(0, _v1.jsx)(_v33.PopoverTrigger, {
              children: (0, _v1.jsx)("span", {
                children: (0, _v1.jsx)(_v41.InfoCircle, {
                  color: "text-tertiary",
                  boxSize: "2xs",
                  verticalAlign: "top",
                  position: "relative",
                  top: "0px",
                  ml: 2
                })
              })
            }), (0, _v1.jsx)(_v32.PopoverContent, {
              maxWidth: "300px",
              children: (0, _v1.jsxs)(_v31.PopoverBody, {
                textStyle: "body-md",
                children: [_v0?.resetDate && (0, _v1.jsx)(_v1.Fragment, {
                  children: _v0?.balances && _v0.balances.map((_v0, _v1) => {
                    if (_v0.expirationDate) return (0, _v1.jsxs)(_v13.HStack, {
                      gap: "4px",
                      children: [(0, _v1.jsx)(_v80.VimeoCoin, {
                        h: "16px",
                        w: "16px",
                        color: "text-primary"
                      }), (0, _v1.jsx)(_v38.Text, {
                        variant: "body-md",
                        children: _v66.T.AiCreditsExpirationDate(_v0.remaining || 0, _v2, new Date(_v0.expirationDate))
                      })]
                    }, `ai-credit-balance-${_v1}`);
                  })
                }), (0, _v1.jsx)(_v8.Box, {
                  margin: "4px 0",
                  children: (0, _v1.jsx)("hr", {})
                }), _v66.T.CreditsWillNotRenew]
              })
            })]
          }) : null]
        }), (0, _v1.jsx)(_v8.Box, {
          children: (0, _v1.jsxs)(_v13.HStack, {
            children: [(0, _v1.jsx)(_v81.VimeoCoinFilled, {}), (0, _v1.jsx)(_v38.Text, {
              variant: "heading-md",
              children: _v0?.remaining
            })]
          })
        }), "number" == typeof _v0?.remaining && _v0?.remaining <= 50 && (0, _v1.jsx)(_v8.Box, {
          padding: `${(0, _v15.rem)(8)} 0 ${(0, _v15.rem)(8)}`,
          maxWidth: "248px",
          children: (0, _v1.jsx)(_v38.Text, {
            variant: "body-sm",
            color: "text-secondary",
            children: (0, _v1.jsx)(_v82.AiCreditsRemainingUpsellMessage, {
              quotaRemaining: _v0?.remaining,
              location: "page_area"
            })
          })
        })]
      })
    });
  };
  var _v85 = _v0.i(0),
    _v86 = _v0.i(0),
    _v87 = _v0.i(0),
    _v88 = _v0.i(0),
    _v89 = _v0.i(0),
    _v90 = _v0.i(0),
    _v91 = _v0.i(0),
    _v92 = _v0.i(0),
    _v93 = _v0.i(0);
  function _v94({
    isOpen: _v0,
    onClose: _v1,
    planName: _v2,
    renewalPrice: _v3,
    enableAutoRenew: _v4,
    loading: _v5 = !1,
    tier: _v6,
    billingPeriod: _v7
  }) {
    let _v8 = (0, _v17.useIsMobile)(),
      {
        trackBillingAction: _v9
      } = (0, _v3.useContext)(_v93.ManageTeamAnalytics),
      {
        trackAutoRenewSwitchedOn: _v10
      } = (0, _v22.useBillingTracking)(),
      _v11 = (0, _v3.useRef)(!1);
    return (0, _v3.useEffect)(() => {
      _v0 && !_v11.current && (_v9({
        action_type: _v64.BillingActionTypes.LAND,
        location: _v64.BillingActionLocations.AUTORENEW_ENABLE_MODAL
      }), _v11.current = !0);
    }, [_v0, _v9]), (0, _v1.jsxs)(_v86.Modal, {
      isOpen: _v0,
      onClose: () => {
        _v9({
          action_types: _v64.BillingActionTypes.CLICK,
          location: _v64.BillingActionLocations.ENABLE_MODAL_CLOSE_BUTTON
        }), _v1();
      },
      children: [(0, _v1.jsx)(_v87.ModalOverlay, {}), (0, _v1.jsxs)(_v88.ModalContent, {
        maxW: "480px",
        children: [(0, _v1.jsxs)(_v89.ModalHeader, {
          position: "relative",
          pb: 0,
          children: [(0, _v1.jsx)(_v38.Text, {
            variant: "heading-md",
            children: _v8 ? _v66.T.EnableAutoRenewMobile : _v66.T.EnableAutoRenew
          }), (0, _v1.jsx)(_v92.ModalCloseButton, {
            height: "28px",
            style: {
              outline: "none"
            }
          })]
        }), (0, _v1.jsxs)(_v91.ModalBody, {
          children: [(0, _v1.jsx)(_v38.Text, {
            variant: "body-md",
            mb: 3,
            children: _v66.T.AutoRenewModalTitle(_v2)
          }), (0, _v1.jsx)(_v38.Text, {
            variant: "body-xs",
            color: "text-secondary",
            children: _v8 ? _v66.T.AutoRenewModalDisclaimerMobile(_v3) : _v66.T.AutoRenewModalDisclaimerDesktop(_v3)
          })]
        }), (0, _v1.jsx)(_v90.ModalFooter, {
          children: (0, _v1.jsxs)(_v13.HStack, {
            spacing: 3,
            justifyContent: "space-between",
            width: "100%",
            sx: {
              button: {
                width: _v8 ? "100%" : "50%"
              }
            },
            children: [(0, _v1.jsx)(_v9.Button, {
              variant: "tertiary",
              isLoading: _v5,
              onClick: _v1,
              hidden: _v8,
              children: _v66.T.Cancel
            }), (0, _v1.jsx)(_v9.Button, {
              variant: "positive",
              isLoading: _v5,
              onClick: () => {
                _v9({
                  action_type: _v64.BillingActionTypes.CLICK,
                  location: _v64.BillingActionLocations.ENABLE_MODAL_AUTORENEW_BUTTON
                }), _v10({
                  tier: _v6,
                  periodicity: "year" === _v7 ? "annual" : "monthly"
                }), _v4();
              },
              children: _v66.T.EnableAutoRenew
            })]
          })
        })]
      })]
    });
  }
  async function _v95({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    ..._v3
  }) {
    return (0, _v53.measureLatency)("postMeAccountsContacts", "POST", async () => {
      let _v0 = await fetch(`${_v0}/me/accounts/contacts?fields=${_v1.map(_v54.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "POST",
        body: JSON.stringify((0, _v54.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v54.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v54.deepCamelCase)(_v1);
    });
  }
  async function _v96({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    ..._v3
  }) {
    return (0, _v53.measureLatency)("patchMeAccountsContacts", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/me/accounts/contacts?fields=${_v1.map(_v54.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "PATCH",
        body: JSON.stringify((0, _v54.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v54.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v54.deepCamelCase)(_v1);
    });
  }
  function _v97() {
    let {
        mutate: _v0
      } = (0, _v49.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v51.useGctlConfig)(),
      [_v5, _v6] = (0, _v50.useInternalState)();
    return [(0, _v3.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/accounts/contacts${(0, _v50.serializeQuery)(_v0)}`, _v96({
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
  "true" === _v46.default.env.STORYBOOK && (0, _v50.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v49.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v51.useGctlConfig)(),
      [_v5, _v6] = (0, _v50.useInternalState)();
    return [(0, _v3.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/accounts/contacts${(0, _v50.serializeQuery)(_v0)}`, _v95({
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
  }, {
    endpoint: "/me/accounts/contacts",
    method: "POST"
  }), "true" === _v46.default.env.STORYBOOK && (0, _v50.assignMswData)(_v97, {
    endpoint: "/me/accounts/contacts",
    method: "PATCH"
  });
  var _v98 = _v0.i(0);
  let _v99 = ({
      onUpdateBillingAddress: _v0,
      isOpen: _v1,
      onClose: _v2
    }) => {
      let [_v3, _v4] = (0, _v3.useState)(null),
        {
          trackBillingAction: _v5
        } = (0, _v3.useContext)(_v93.ManageTeamAnalytics),
        [_v6, _v7] = _v97(),
        _v8 = (0, _v26.useElements)(),
        _v9 = (0, _v3.useCallback)(() => {
          _v5({
            action_type: _v64.BillingActionTypes.CLICK,
            location: _v64.BillingActionLocations.OPTOUT_MODAL_CLOSE_BUTTON
          }), _v4(null), _v8?.getElement("address")?.clear(), _v2();
        }, [_v8, _v2, _v5]);
      return (0, _v3.useEffect)(() => {
        if (!_v7.error && !_v7.loading && _v7.data && _v1) {
          let {
              firstName: _v0,
              lastName: _v1,
              address: _v2
            } = _v7.data,
            {
              address: _v3,
              address2: _v4,
              city: _v5,
              state: _v6,
              postalCode: _v7,
              country: _v8
            } = _v2;
          _v0({
            firstName: _v0,
            lastName: _v1,
            line1: _v3,
            line2: _v4,
            city: _v5,
            state: _v6,
            postalCode: _v7,
            country: _v8
          }), _v9();
        }
      }, [_v1, _v0, _v7, _v9]), (0, _v1.jsxs)(_v86.Modal, {
        isOpen: _v1,
        onClose: _v9,
        scrollBehavior: "outside",
        children: [(0, _v1.jsx)(_v87.ModalOverlay, {}), (0, _v1.jsxs)(_v88.ModalContent, {
          children: [(0, _v1.jsx)(_v89.ModalHeader, {
            children: _v66.T.UpdateBillingAddress
          }), (0, _v1.jsx)(_v92.ModalCloseButton, {}), (0, _v1.jsxs)(_v91.ModalBody, {
            children: [_v7.error && (0, _v1.jsx)(_v4.Alert, {
              status: "error",
              size: "sm",
              marginBottom: "4",
              children: _v7.error.message
            }), (0, _v1.jsx)(_v100, {
              onAddressComplete: _v0 => {
                _v0 && _v4(_v0);
              }
            })]
          }), (0, _v1.jsxs)(_v90.ModalFooter, {
            children: [(0, _v1.jsx)(_v9.Button, {
              variant: "secondary",
              mr: 3,
              onClick: _v9,
              children: _v66.T.Close
            }), (0, _v1.jsx)(_v9.Button, {
              variant: "primary",
              isLoading: _v7.loading,
              isDisabled: !_v3,
              onClick: () => {
                if (!_v3) return;
                let {
                    firstName: _v0,
                    lastName: _v1
                  } = _v3,
                  {
                    line1: _v2,
                    line2: _v3,
                    city: _v4,
                    state: _v5,
                    postal_code: _v6,
                    country: _v7
                  } = _v3.address;
                _v0 && _v1 && (_v5({
                  action_type: _v64.BillingActionTypes.CLICK,
                  location: _v64.BillingActionLocations.UPDATE_BILLING_ADDRESS_BUTTON
                }), _v6({
                  select: [],
                  variables: {
                    firstName: _v0,
                    lastName: _v1,
                    address: {
                      address: _v2,
                      address_2: _v3 || void 0,
                      city: _v4,
                      state: _v5,
                      postalCode: _v6,
                      country: _v7
                    }
                  }
                }));
              },
              children: _v66.T.Update
            })]
          })]
        })]
      });
    },
    _v100 = ({
      onAddressComplete: _v0
    }) => {
      let _v1 = (0, _v98.useViewer)();
      return (0, _v1.jsxs)(_v8.Box, {
        children: [(0, _v1.jsx)(_v26.AddressElement, {
          options: {
            mode: "billing",
            autocomplete: {
              mode: "automatic"
            },
            defaultValues: {
              address: {
                country: _v1.location
              }
            },
            display: {
              name: "split"
            }
          },
          onChange: _v0 => {
            _v0.complete ? _v0(_v0.value) : _v0(null);
          }
        }), (0, _v1.jsx)("div", {
          style: {
            display: "none"
          },
          children: (0, _v1.jsx)(_v26.PaymentElement, {
            options: {
              layout: "tabs"
            }
          })
        })]
      });
    };
  var _v101 = _v0.i(0),
    _v102 = _v0.i(0),
    _v103 = _v0.i(0);
  let _v104 = {
    bsp_cancellation_flow: !0,
    cancellation_survey_kind: "none",
    lapsing_clip_selection_cancellation_ux: !1
  };
  function _v105() {
    let {
        settings: _v0
      } = (0, _v20.useOrionSettings)(),
      {
        membership: _v1
      } = (0, _v3.useContext)(_v93.ManageTeamStateCtx),
      {
        hasScheduledDowngrade: _v2,
        normalizedScheduledTier: _v3
      } = (0, _v103.useScheduledOrder)(_v1.subscriptionId, _v1.tier, _v1.hasAutorenew);
    return _v2 && _v65.RepackagedTiers.includes(_v3 ?? "") ? {
      settings: {
        ..._v0,
        ..._v104
      },
      isScheduledRepackagedDowngrade: !0
    } : {
      settings: _v0,
      isScheduledRepackagedDowngrade: !1
    };
  }
  var _v106 = _v0.i(0);
  async function _v107({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2
    },
    ..._v3
  }) {
    return (0, _v53.measureLatency)("getUserSettingsBillingCancellationWarning", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/settings/billing/cancellation_warning?fields=${_v1.map(_v54.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "GET"
      });
      if (!_v0.ok) throw new _v54.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v54.deepCamelCase)(_v1);
    });
  }
  function _v108(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v51.useGctlConfig)();
    return (0, _v48.default)(_v2 ? `/users/${_v2.where.userId}/settings/billing/cancellation_warning${(0, _v50.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v107({
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
  "true" === _v46.default.env.STORYBOOK && (0, _v50.assignMswData)(_v108, {
    endpoint: "/users/:userId/settings/billing/cancellation_warning",
    method: "GET"
  }), "true" === _v46.default.env.STORYBOOK && (0, _v50.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v49.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v51.useGctlConfig)(),
      [_v5, _v6] = (0, _v50.useInternalState)();
    return [(0, _v3.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/settings/billing/cancellation_warning${(0, _v50.serializeQuery)(_v0)}`, _v107({
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
    endpoint: "/users/:userId/settings/billing/cancellation_warning",
    method: "GET"
  });
  var _v109 = _v0.i(0),
    _v110 = _v0.i(0),
    _v111 = _v0.i(0),
    _v112 = _v0.i(0);
  let _v113 = ({
    planLabel: _v0,
    renewalPrice: _v1,
    renewalPeriodLabel: _v2,
    nextBillingDateLabel: _v3,
    isAcceptLoading: _v4,
    errorMessage: _v5,
    onAccept: _v6,
    onDismiss: _v7
  }) => {
    let _v8 = (0, _v110.useColorModeValue)("https://i.vimeocdn.com/custom_asset/e520ebb454be34b730a243080e0e4fbd", "https://i.vimeocdn.com/custom_asset/f3b510e81bf8826c59eaf93ca9edd65e");
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v89.ModalHeader, {
        paddingTop: "24px",
        paddingBottom: "0",
        paddingX: "24px",
        children: (0, _v1.jsx)(_v11.Flex, {
          width: "100%",
          justifyContent: "center",
          children: (0, _v1.jsxs)(_v109.Stack, {
            spacing: "6",
            width: "100%",
            maxWidth: (0, _v15.rem)(400),
            align: "center",
            children: [(0, _v1.jsxs)(_v11.Flex, {
              borderRadius: (0, _v15.rem)(4),
              backgroundColor: "var(--button-primary-default, var(--vimeo-colors-text-primary))",
              color: "text-button-inverted",
              alignItems: "center",
              justifyContent: "center",
              gap: "1",
              height: (0, _v15.rem)(28),
              minHeight: (0, _v15.rem)(28),
              paddingX: "1",
              paddingY: "0",
              children: [(0, _v1.jsx)(_v111.AiSparkles, {
                boxSize: (0, _v15.rem)(14)
              }), (0, _v1.jsx)(_v38.Text, {
                fontSize: (0, _v15.rem)(14),
                lineHeight: "1.4",
                letterSpacing: "-0.42px",
                fontWeight: "500",
                color: "text-button-inverted",
                children: (0, _v70.translate)({
                  singular: "Special offer",
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
                      singular: "Oferta especial"
                    },
                    "zh-CN": {
                      singular: "特别优惠"
                    }
                  }
                })
              })]
            }), (0, _v1.jsxs)(_v109.Stack, {
              spacing: "4",
              width: "100%",
              align: "center",
              paddingX: "8",
              children: [(0, _v1.jsxs)(_v109.Stack, {
                spacing: "2",
                width: "100%",
                align: "center",
                children: [(0, _v1.jsx)(_v38.Text, {
                  variant: "heading-2xl",
                  textAlign: "center",
                  color: "text-primary",
                  children: (0, _v70.translate)({
                    singular: "Rejoin and get 40% off",
                    dictionary: {
                      es: {
                        singular: "Vuelve a suscribirte y obtén 40% de descuento"
                      },
                      "de-DE": {
                        singular: "Treten Sie wieder bei und erhalten Sie 40 % Rabatt"
                      },
                      "fr-FR": {
                        singular: "Réinscrivez-vous et bénéficiez de 40 % de réduction"
                      },
                      "ja-JP": {
                        singular: "再加入で40%オフ"
                      },
                      "ko-KR": {
                        singular: "다시 가입하고 40% 할인 받기"
                      },
                      "pt-BR": {
                        singular: "Reingresse e ganhe 40% de desconto"
                      },
                      "zh-CN": {
                        singular: "重新加入并可享受 40% 折扣"
                      }
                    }
                  })
                }), (0, _v1.jsx)(_v28.Badge, {
                  variant: "upgrade",
                  size: "sm",
                  height: (0, _v15.rem)(28),
                  minHeight: (0, _v15.rem)(28),
                  children: _v0
                })]
              }), (0, _v1.jsx)(_v38.Text, {
                variant: "heading-sm",
                textAlign: "center",
                color: "text-primary",
                children: (0, _v70.translate)({
                  singular: "Keep your {PLAN} plan at a discounted price for 12 months!",
                  replacements: {
                    PLAN: _v0
                  },
                  dictionary: {
                    es: {
                      singular: "¡Mantén tu plan {PLAN} a un precio con descuento durante 12 meses!"
                    },
                    "de-DE": {
                      singular: "Behalten Sie Ihren {PLAN}-Plan 12 Monate lang zu einem vergünstigten Preis!"
                    },
                    "fr-FR": {
                      singular: "Conservez votre forfait {PLAN} à prix réduit pendant 12 mois !"
                    },
                    "ja-JP": {
                      singular: "12か月間、{PLAN}プランを割引価格でご利用いただけます！"
                    },
                    "ko-KR": {
                      singular: "12개월 동안 {PLAN} 요금제를 할인된 가격으로 유지하세요!"
                    },
                    "pt-BR": {
                      singular: "Mantenha seu plano {PLAN} com desconto por 12 meses!"
                    },
                    "zh-CN": {
                      singular: "将您的 {PLAN} 计划以优惠价格保留 12 个月！"
                    }
                  }
                })
              })]
            })]
          })
        })
      }), (0, _v1.jsx)(_v91.ModalBody, {
        paddingTop: "24px",
        paddingBottom: "0",
        paddingX: "24px",
        children: (0, _v1.jsx)(_v11.Flex, {
          width: "100%",
          justifyContent: "center",
          children: (0, _v1.jsxs)(_v109.Stack, {
            spacing: "6",
            width: "100%",
            maxWidth: (0, _v15.rem)(400),
            align: "center",
            children: [(0, _v1.jsx)(_v11.Flex, {
              width: "100%",
              justifyContent: "center",
              children: (0, _v1.jsx)(_v8.Box, {
                as: "img",
                src: _v8,
                alt: "",
                width: "100%",
                maxWidth: (0, _v15.rem)(490),
                maxHeight: (0, _v15.rem)(280),
                objectFit: "contain"
              })
            }), (0, _v1.jsxs)(_v109.Stack, {
              spacing: "2",
              width: "100%",
              align: "stretch",
              children: [(0, _v1.jsxs)(_v11.Flex, {
                gap: "1",
                alignItems: "flex-start",
                justifyContent: "center",
                width: "100%",
                children: [(0, _v1.jsx)(_v11.Flex, {
                  alignItems: "center",
                  paddingTop: "2px",
                  children: (0, _v1.jsx)(_v112.ShieldCheck, {
                    color: "status-positive-primary",
                    boxSize: (0, _v15.rem)(16)
                  })
                }), (0, _v1.jsx)(_v38.Text, {
                  variant: "heading-xs",
                  color: "status-positive-primary",
                  textAlign: "left",
                  flex: "1",
                  children: (0, _v70.translate)({
                    singular: "No charge will be applied to you until your next billing date, {DATE}",
                    replacements: {
                      DATE: _v3
                    },
                    dictionary: {
                      es: {
                        singular: "No se aplicará ningún cargo hasta su próxima fecha de facturación, {DATE}"
                      },
                      "de-DE": {
                        singular: "Ihnen werden bis zu Ihrem nächsten Abrechnungsdatum, {DATE}, keine Kosten berechnet."
                      },
                      "fr-FR": {
                        singular: "Aucun prélèvement ne sera effectué avant votre prochaine date de facturation, {DATE}"
                      },
                      "ja-JP": {
                        singular: "次回の請求日である{DATE}までは料金は請求されません"
                      },
                      "ko-KR": {
                        singular: "다음 결제일인 {DATE}까지는 요금이 청구되지 않습니다"
                      },
                      "pt-BR": {
                        singular: "Nenhuma cobrança será aplicada até sua próxima data de faturamento, {DATE}"
                      },
                      "zh-CN": {
                        singular: "在您的下一次计费日 {DATE} 之前不会向您收取费用"
                      }
                    }
                  })
                })]
              }), (0, _v1.jsx)(_v38.Text, {
                variant: "body-xs",
                color: "text-tertiary",
                textAlign: "left",
                children: (0, _v70.translate)({
                  singular: "By completing this purchase, you agree: You're enrolling in a subscription that will automatically renew every {PERIOD} at {PRICE} (plus tax) until you cancel in your {BILLING_SETTINGS} at least one day before renewal. Pricing may change. Your content may be {DELETED} upon cancellation. By completing this purchase, you agree to our {TERMS_OF_SERVICE}, including the arbitration agreement and class action waiver, and acknowledge our {PRIVACY_POLICY}.",
                  replacements: {
                    PERIOD: _v2,
                    PRICE: _v1,
                    BILLING_SETTINGS: (0, _v1.jsx)(_v29.Link, {
                      href: "https://vimeo.com/settings/billing",
                      variant: "inline-secondary",
                      textDecoration: "underline",
                      isExternal: !0,
                      children: (0, _v70.translate)({
                        singular: "Billing Settings",
                        dictionary: {
                          es: {
                            singular: "Configuración de facturación"
                          },
                          "de-DE": {
                            singular: "Abrechnungseinstellungen"
                          },
                          "fr-FR": {
                            singular: "Paramètres de facturation"
                          },
                          "ja-JP": {
                            singular: "請求設定"
                          },
                          "ko-KR": {
                            singular: "결제 설정"
                          },
                          "pt-BR": {
                            singular: "Configurações de cobrança"
                          },
                          "zh-CN": {
                            singular: "计费设置"
                          }
                        }
                      })
                    }, "billing-settings"),
                    DELETED: (0, _v1.jsx)(_v29.Link, {
                      href: "https://help.vimeo.com/hc/en-us/articles/12425417275665-What-happens-when-I-lapse-to-the-Free-plan",
                      variant: "inline-secondary",
                      textDecoration: "underline",
                      isExternal: !0,
                      children: (0, _v70.translate)({
                        singular: "deleted",
                        dictionary: {
                          es: {
                            singular: "eliminado"
                          },
                          "de-DE": {
                            singular: "gelöscht"
                          },
                          "fr-FR": {
                            singular: "supprimé"
                          },
                          "ja-JP": {
                            singular: "削除"
                          },
                          "ko-KR": {
                            singular: "삭제됨"
                          },
                          "pt-BR": {
                            singular: "excluído"
                          },
                          "zh-CN": {
                            singular: "删除"
                          }
                        }
                      })
                    }, "deleted"),
                    TERMS_OF_SERVICE: (0, _v1.jsx)(_v29.Link, {
                      href: "https://vimeo.com/terms",
                      variant: "inline-secondary",
                      textDecoration: "underline",
                      isExternal: !0,
                      children: (0, _v70.translate)({
                        singular: "Terms of Service",
                        dictionary: {
                          es: {
                            singular: "Términos de servicio"
                          },
                          "de-DE": {
                            singular: "Nutzungsbedingungen"
                          },
                          "fr-FR": {
                            singular: "Conditions d'utilisation "
                          },
                          "ja-JP": {
                            singular: "利用規約"
                          },
                          "ko-KR": {
                            singular: "서비스 약관"
                          },
                          "pt-BR": {
                            singular: "Termos de Serviço"
                          },
                          "zh-CN": {
                            singular: "服务条款"
                          }
                        }
                      })
                    }, "terms-of-service"),
                    PRIVACY_POLICY: (0, _v1.jsx)(_v29.Link, {
                      href: "https://vimeo.com/privacy",
                      variant: "inline-secondary",
                      textDecoration: "underline",
                      isExternal: !0,
                      children: (0, _v70.translate)({
                        singular: "Privacy Policy",
                        dictionary: {
                          es: {
                            singular: "Política de privacidad"
                          },
                          "de-DE": {
                            singular: "Datenschutzerklärung"
                          },
                          "fr-FR": {
                            singular: "Politique de confidentialité "
                          },
                          "ja-JP": {
                            singular: "プライバシーポリシー"
                          },
                          "ko-KR": {
                            singular: "개인정보보호 정책"
                          },
                          "pt-BR": {
                            singular: "Política de Privacidade"
                          },
                          "zh-CN": {
                            singular: "隐私政策"
                          }
                        }
                      })
                    }, "privacy-policy")
                  },
                  dictionary: {
                    es: {
                      singular: "Al completar esta compra, aceptas: Te estás inscribiendo en una suscripción que se renovará automáticamente cada {PERIOD} por {PRICE} (más impuestos) hasta que canceles en tus {BILLING_SETTINGS} al menos un día antes de la renovación. Los precios pueden cambiar. Tu contenido puede ser {DELETED} tras la cancelación. Al completar esta compra, aceptas nuestros {TERMS_OF_SERVICE}, incluido el acuerdo de arbitraje y la renuncia a acciones colectivas, y reconoces nuestra {PRIVACY_POLICY}."
                    },
                    "de-DE": {
                      singular: "Mit Abschluss dieses Kaufs stimmen Sie zu: Sie schließen ein Abonnement ab, das sich alle {PERIOD} automatisch zum Preis von {PRICE} (zzgl. Steuern) verlängert, bis Sie es in Ihren {BILLING_SETTINGS} mindestens einen Tag vor der Verlängerung kündigen. Die Preise können sich ändern. Ihre Inhalte können bei Kündigung {DELETED} werden. Mit Abschluss dieses Kaufs stimmen Sie unseren {TERMS_OF_SERVICE}, einschließlich der Schiedsklausel und des Verzichts auf Sammelklagen, zu und erkennen unsere {PRIVACY_POLICY} an."
                    },
                    "fr-FR": {
                      singular: "En effectuant cet achat, vous acceptez : vous souscrivez à un abonnement qui sera automatiquement renouvelé tous les {PERIOD} au tarif de {PRICE} (plus taxes) jusqu'à ce que vous annuliez dans vos {BILLING_SETTINGS} au moins un jour avant le renouvellement. Les tarifs peuvent changer. Votre contenu peut être {DELETED} lors de l'annulation. En effectuant cet achat, vous acceptez nos {TERMS_OF_SERVICE}, y compris la clause d'arbitrage et la renonciation aux actions de groupe, et reconnaissez notre {PRIVACY_POLICY}."
                    },
                    "ja-JP": {
                      singular: "購入を完了することで、以下に同意するものとします：ご購入により、{PERIOD}ごとに{PRICE}（税別）で自動的に更新されるサブスクリプションに登録されます。更新日の少なくとも1日前までに{BILLING_SETTINGS}で解約しない限り、自動更新されます。料金は変更される場合があります。解約時にコンテンツが{DELETED}される場合があります。購入を完了することで、仲裁合意および集団訴訟放棄を含む当社の{TERMS_OF_SERVICE}に同意し、当社の{PRIVACY_POLICY}を確認したことを承認します。"
                    },
                    "ko-KR": {
                      singular: "이 구매를 완료하면 귀하는 다음에 동의하게 됩니다: 귀하는 구독에 등록되며, 이 구독은 {PERIOD}마다 {PRICE}(세금 별도)로 자동 갱신되며, 갱신 최소 하루 전까지 {BILLING_SETTINGS}에서 취소하지 않는 한 계속됩니다. 요금은 변경될 수 있습니다. 취소 시 귀하의 콘텐츠는 {DELETED}될 수 있습니다. 이 구매를 완료함으로써 귀하는 중재 합의 및 집단 소송 포기를 포함한 당사의 {TERMS_OF_SERVICE}에 동의하고 당사의 {PRIVACY_POLICY}를 확인합니다."
                    },
                    "pt-BR": {
                      singular: "Ao concluir esta compra, você concorda: Você está se inscrevendo em uma assinatura que será renovada automaticamente a cada {PERIOD} por {PRICE} (mais impostos) até que você cancele em suas {BILLING_SETTINGS} pelo menos um dia antes da renovação. Os preços podem mudar. Seu conteúdo pode ser {DELETED} após o cancelamento. Ao concluir esta compra, você concorda com nossos {TERMS_OF_SERVICE}, incluindo o acordo de arbitragem e a renúncia a ações coletivas, e reconhece nossa {PRIVACY_POLICY}."
                    },
                    "zh-CN": {
                      singular: "完成此次购买即表示您同意：您正在订阅一项服务，该订阅将以 {PRICE} (加税) 的价格每 {PERIOD} 自动续订，除非您在续订日前至少一天在您的 {BILLING_SETTINGS} 中取消。价格可能会变动。取消后您的内容可能会被{DELETED}。完成此次购买即表示您同意我们的 {TERMS_OF_SERVICE}，包括仲裁协议和集体诉讼豁免，并已知悉我们的 {PRIVACY_POLICY}。"
                    }
                  }
                })
              })]
            })]
          })
        })
      }), (0, _v1.jsx)(_v90.ModalFooter, {
        paddingTop: "48px",
        paddingBottom: "24px",
        paddingX: "24px",
        children: (0, _v1.jsx)(_v11.Flex, {
          width: "100%",
          justifyContent: "center",
          children: (0, _v1.jsxs)(_v109.Stack, {
            spacing: "2",
            width: "100%",
            maxWidth: (0, _v15.rem)(400),
            children: [_v5 ? (0, _v1.jsx)(_v38.Text, {
              variant: "body-sm",
              color: "status-negative-primary",
              textAlign: "center",
              children: _v5
            }) : null, (0, _v1.jsx)(_v9.Button, {
              onClick: _v6,
              isLoading: _v4,
              size: "lg",
              variant: "primary",
              width: "100%",
              children: (0, _v70.translate)({
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
            }), (0, _v1.jsx)(_v9.Button, {
              onClick: _v7,
              size: "lg",
              variant: "secondary",
              width: "100%",
              children: (0, _v70.translate)({
                singular: "No thanks",
                dictionary: {
                  es: {
                    singular: "No, gracias"
                  },
                  "de-DE": {
                    singular: "Nein, danke"
                  },
                  "fr-FR": {
                    singular: "Non merci"
                  },
                  "ja-JP": {
                    singular: "いいえ、結構です"
                  },
                  "ko-KR": {
                    singular: "괜찮습니다"
                  },
                  "pt-BR": {
                    singular: "Não, obrigado"
                  },
                  "zh-CN": {
                    singular: "不用，谢谢"
                  }
                }
              })
            })]
          })
        })
      })]
    });
  };
  var _v114 = _v0.i(0),
    _v115 = _v0.i(0),
    _v116 = _v0.i(0),
    _v117 = _v0.i(0);
  let _v118 = ({
    onClick: _v0
  }) => (0, _v1.jsx)(_v116.IconButton, {
    "aria-label": (0, _v70.translate)({
      singular: "Go back",
      dictionary: {
        es: {
          singular: "Volver"
        },
        "de-DE": {
          singular: "Zurück"
        },
        "fr-FR": {
          singular: "Retour"
        },
        "ja-JP": {
          singular: "戻る"
        },
        "ko-KR": {
          singular: "돌아가기"
        },
        "pt-BR": {
          singular: "Voltar"
        },
        "zh-CN": {
          singular: "返回"
        }
      }
    }),
    icon: (0, _v1.jsx)(_v117.ArrowLeft, {}),
    variant: "tertiary",
    size: "sm",
    position: "absolute",
    top: "20px",
    left: "20px",
    onClick: _v0
  });
  var _v119 = _v0.i(0);
  let _v120 = _v0 => _v0 ? `url(${_v0})` : void 0,
    _v121 = ({
      frozenVideosCount: _v0,
      storageUsedBytes: _v1,
      storageLimitBytes: _v2,
      targetPlanName: _v3
    }) => {
      let _v4 = _v3 ?? (0, _v70.translate)({
          singular: "free plan",
          dictionary: {
            es: {
              singular: "plan gratuito"
            },
            "de-DE": {
              singular: "kostenloser Plan"
            },
            "fr-FR": {
              singular: "forfait gratuit"
            },
            "ja-JP": {
              singular: "無料プラン"
            },
            "ko-KR": {
              singular: "무료 플랜"
            },
            "pt-BR": {
              singular: "plano gratuito"
            },
            "zh-CN": {
              singular: "免费计划"
            }
          }
        }),
        _v5 = (0, _v70.translate)({
          singular: "{COUNT} video will be frozen",
          plural: "{COUNT} videos will be frozen",
          count: _v0,
          replacements: {
            COUNT: (0, _v119.formatNumber)(_v0)
          },
          dictionary: {
            es: {
              singular: "{COUNT} video quedará congelado",
              plural: "{COUNT} videos quedarán congelados"
            },
            "de-DE": {
              singular: "{COUNT} Video wird eingefroren",
              plural: "{COUNT} Videos werden eingefroren"
            },
            "fr-FR": {
              singular: "{COUNT} vidéo sera gelée",
              plural: "{COUNT} vidéos seront gelées"
            },
            "ja-JP": {
              singular: "{COUNT}本の動画が凍結されます",
              plural: "{COUNT}本の動画が凍結されます"
            },
            "ko-KR": {
              singular: "{COUNT}개의 동영상이 동결됩니다",
              plural: "{COUNT}개의 동영상이 동결됩니다"
            },
            "pt-BR": {
              singular: "{COUNT} vídeo será congelado",
              plural: "{COUNT} vídeos serão congelados"
            },
            "zh-CN": {
              singular: "{COUNT} 个视频将被冻结",
              plural: "{COUNT} 个视频将被冻结"
            }
          }
        }),
        _v6 = (0, _v62.formatBytes)(_v2, !1),
        _v7 = (0, _v70.translate)({
          singular: "{USED} of {LIMIT} in use",
          replacements: {
            USED: (0, _v62.formatBytes)(_v1, !1),
            LIMIT: _v6
          },
          dictionary: {
            es: {
              singular: "{USED} de {LIMIT} en uso"
            },
            "de-DE": {
              singular: "{USED} von {LIMIT} verwendet"
            },
            "fr-FR": {
              singular: "{USED} sur {LIMIT} utilisés"
            },
            "ja-JP": {
              singular: "{LIMIT}中{USED}を使用中"
            },
            "ko-KR": {
              singular: "{LIMIT} 중 {USED} 사용 중"
            },
            "pt-BR": {
              singular: "{USED} de {LIMIT} em uso"
            },
            "zh-CN": {
              singular: "已使用 {USED}（共 {LIMIT}）"
            }
          }
        }),
        _v8 = _v1 > 0 ? Math.min(_v2 / _v1, 1) : 0,
        _v9 = `${100 * _v8}%`;
      return (0, _v1.jsxs)(_v11.Flex, {
        gap: "3",
        align: "flex-start",
        children: [(0, _v1.jsx)(_v16.CircleExclamationFilled, {
          boxSize: "24px",
          color: "status-caution-primary"
        }), (0, _v1.jsxs)(_v109.Stack, {
          spacing: "4",
          flex: "1",
          children: [(0, _v1.jsxs)(_v109.Stack, {
            spacing: "1",
            children: [(0, _v1.jsx)(_v38.Text, {
              variant: "heading-sm",
              children: _v5
            }), (0, _v1.jsx)(_v38.Text, {
              variant: "body-md",
              color: "text-secondary",
              children: (0, _v70.translate)({
                singular: "Your videos beyond the {PLAN} storage limit of {LIMIT} will be frozen and no longer accessible.",
                replacements: {
                  PLAN: _v4,
                  LIMIT: _v6
                },
                dictionary: {
                  es: {
                    singular: "Los videos que excedan el límite de almacenamiento de {LIMIT} del plan {PLAN} quedarán congelados y ya no serán accesibles."
                  },
                  "de-DE": {
                    singular: "Ihre Videos, die das Speicherlimit von {LIMIT} des {PLAN}-Plans überschreiten, werden gesperrt und sind nicht mehr zugänglich."
                  },
                  "fr-FR": {
                    singular: "Vos vidéos au‑delà de la limite de stockage de {LIMIT} du forfait {PLAN} seront bloquées et ne seront plus accessibles."
                  },
                  "ja-JP": {
                    singular: "{PLAN} のストレージ上限 {LIMIT} を超えるビデオは凍結され、アクセスできなくなります。"
                  },
                  "ko-KR": {
                    singular: "{PLAN} 플랜의 {LIMIT} 저장 한도를 초과하는 동영상은 동결되어 더 이상 접근할 수 없습니다."
                  },
                  "pt-BR": {
                    singular: "Seus vídeos além do limite de armazenamento de {LIMIT} do plano {PLAN} serão congelados e ficarão inacessíveis."
                  },
                  "zh-CN": {
                    singular: "超出 {PLAN} 存储限制 {LIMIT} 的视频将被冻结并无法访问。"
                  }
                }
              })
            })]
          }), (0, _v1.jsxs)(_v109.Stack, {
            spacing: "2",
            width: "100%",
            children: [(0, _v1.jsx)(_v38.Text, {
              variant: "body-sm",
              color: "text-secondary",
              children: _v7
            }), (0, _v1.jsxs)(_v8.Box, {
              position: "relative",
              height: "4px",
              borderRadius: "999px",
              backgroundColor: "blue.50",
              overflow: "visible",
              children: [(0, _v1.jsx)(_v8.Box, {
                position: "absolute",
                inset: "0",
                backgroundColor: "status-destructive-primary",
                borderRadius: "999px"
              }), (0, _v1.jsx)(_v8.Box, {
                position: "absolute",
                top: "0",
                left: "0",
                height: "4px",
                width: _v9,
                backgroundColor: "text-tertiary",
                borderRadius: "999px"
              }), (0, _v1.jsx)(_v8.Box, {
                position: "absolute",
                left: _v9,
                top: "50%",
                marginLeft: "-1px",
                marginTop: "-8px",
                height: "16px",
                borderLeft: "1px dotted",
                borderColor: "text-tertiary"
              })]
            })]
          })]
        })]
      });
    },
    _v122 = ({
      badgeLabel: _v0,
      count: _v1,
      title: _v2,
      description: _v3,
      videos: _v4
    }) => {
      let _v5 = _v4.length > 3,
        _v6 = Math.max(_v1, _v4.length),
        _v7 = _v5 ? _v4.slice(0, 2) : _v4,
        _v8 = _v5 ? _v4.slice(2, 5).map(_v0 => _v120(_v0.thumbnail)).filter(_v0 => !!_v0) : [],
        _v9 = Math.max(_v6 - 2, 0);
      return (0, _v1.jsxs)(_v11.Flex, {
        gap: "3",
        align: "flex-start",
        children: [(0, _v1.jsx)(_v16.CircleExclamationFilled, {
          boxSize: "24px",
          color: "status-caution-primary"
        }), (0, _v1.jsxs)(_v109.Stack, {
          spacing: "4",
          flex: "1",
          children: [(0, _v1.jsxs)(_v109.Stack, {
            spacing: "1",
            children: [(0, _v1.jsx)(_v38.Text, {
              variant: "heading-sm",
              children: _v2
            }), (0, _v1.jsx)(_v38.Text, {
              variant: "body-md",
              color: "text-secondary",
              children: _v3
            })]
          }), (0, _v1.jsxs)(_v114.Grid, {
            width: "100%",
            gap: "3",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            justifyContent: "flex-start",
            children: [_v7.map(_v0 => (0, _v1.jsxs)(_v109.Stack, {
              spacing: "2",
              width: "100%",
              children: [(0, _v1.jsxs)(_v8.Box, {
                aspectRatio: "16 / 9",
                backgroundColor: "gray.100",
                borderRadius: "8px",
                overflow: "hidden",
                position: "relative",
                width: "100%",
                children: [(0, _v1.jsx)(_v8.Box, {
                  backgroundImage: _v120(_v0.thumbnail),
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  position: "absolute",
                  inset: "0"
                }), _v0 && (0, _v1.jsx)(_v8.Box, {
                  backgroundColor: "status-caution-primary",
                  borderRadius: "4px",
                  paddingX: "4px",
                  paddingY: "1px",
                  position: "absolute",
                  right: "8px",
                  top: "8px",
                  children: (0, _v1.jsx)(_v38.Text, {
                    fontSize: "10px",
                    color: "white",
                    fontWeight: "500",
                    children: _v0
                  })
                })]
              }), (0, _v1.jsx)(_v38.Text, {
                variant: "heading-2xs",
                noOfLines: 1,
                textAlign: "left",
                children: _v0.title
              })]
            }, _v0.uri)), _v5 && (0, _v1.jsxs)(_v109.Stack, {
              spacing: "2",
              width: "100%",
              children: [(0, _v1.jsx)(_v8.Box, {
                aspectRatio: "16 / 9",
                backgroundColor: "transparent",
                borderRadius: "8px",
                overflow: "hidden",
                position: "relative",
                width: "100%",
                children: _v8.map((_v0, _v1) => {
                  let _v2 = [{
                    top: "20%",
                    left: "10%",
                    rotate: "-4deg"
                  }, {
                    top: "2%",
                    left: "30%",
                    rotate: "1deg"
                  }, {
                    top: "40%",
                    left: "48%",
                    rotate: "4deg"
                  }][_v1];
                  return _v2 ? (0, _v1.jsx)(_v8.Box, {
                    aspectRatio: "16 / 9",
                    backgroundImage: _v0,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    border: "1.5px solid white",
                    borderRadius: "4px",
                    position: "absolute",
                    width: "48%",
                    top: _v2.top,
                    left: _v2.left,
                    transform: `rotate(${_v2.rotate})`
                  }, `stacked-warning-videos-${_v1}`) : null;
                })
              }), (0, _v1.jsx)(_v38.Text, {
                variant: "heading-2xs",
                noOfLines: 1,
                textAlign: "left",
                children: (0, _v70.translate)({
                  singular: "and other {COUNT}",
                  plural: "and other {COUNT}",
                  count: _v9,
                  replacements: {
                    COUNT: (0, _v119.formatNumber)(_v9)
                  },
                  dictionary: {
                    es: {
                      singular: "y otro {COUNT}",
                      plural: "y otros {COUNT}"
                    },
                    "de-DE": {
                      singular: "und {COUNT} weiterer",
                      plural: "und {COUNT} weitere"
                    },
                    "fr-FR": {
                      singular: "et {COUNT} autre",
                      plural: "et {COUNT} autres"
                    },
                    "ja-JP": {
                      singular: "その他{COUNT}件",
                      plural: "その他{COUNT}件"
                    },
                    "ko-KR": {
                      singular: "및 기타 {COUNT}개",
                      plural: "및 기타 {COUNT}개"
                    },
                    "pt-BR": {
                      singular: "e outro {COUNT}",
                      plural: "e outros {COUNT}"
                    },
                    "zh-CN": {
                      singular: "以及另外 {COUNT} 个",
                      plural: "以及另外 {COUNT} 个"
                    }
                  }
                })
              })]
            }, "stacked-warning-videos")]
          })]
        })]
      });
    },
    _v123 = ({
      unlistedVideosCount: _v0,
      videos: _v1
    }) => {
      let _v2 = Math.max(_v0, _v1.length),
        _v3 = (0, _v70.translate)({
          singular: "{COUNT} unlisted video will become private",
          plural: "{COUNT} unlisted videos will become private",
          count: _v2,
          replacements: {
            COUNT: (0, _v119.formatNumber)(_v2)
          },
          dictionary: {
            es: {
              singular: "{COUNT} video sin listar se volverá privado",
              plural: "{COUNT} videos sin listar se volverán privados"
            },
            "de-DE": {
              singular: "{COUNT} nicht gelistetes Video wird privat",
              plural: "{COUNT} nicht gelistete Videos werden privat"
            },
            "fr-FR": {
              singular: "{COUNT} vidéo non répertoriée deviendra privée",
              plural: "{COUNT} vidéos non répertoriées deviendront privées"
            },
            "ja-JP": {
              singular: "{COUNT}本の限定公開動画が非公開になります",
              plural: "{COUNT}本の限定公開動画が非公開になります"
            },
            "ko-KR": {
              singular: "{COUNT}개의 Unlisted 동영상이 Private 상태가 됩니다",
              plural: "{COUNT}개의 Unlisted 동영상이 Private 상태가 됩니다"
            },
            "pt-BR": {
              singular: "{COUNT} vídeo Não listado ficará Privado",
              plural: "{COUNT} vídeos Não listados ficarão Privados"
            },
            "zh-CN": {
              singular: "{COUNT} 个未列出（Unlisted）的视频将变为私人（Private）",
              plural: "{COUNT} 个未列出（Unlisted）的视频将变为私人（Private）"
            }
          }
        });
      return (0, _v1.jsx)(_v122, {
        badgeLabel: (0, _v70.translate)({
          singular: "Unlisted",
          dictionary: {
            es: {
              singular: "Sin listar"
            },
            "de-DE": {
              singular: "Nicht gelistet"
            },
            "fr-FR": {
              singular: "Non répertorié"
            },
            "ja-JP": {
              singular: "限定公開"
            },
            "ko-KR": {
              singular: "일부 공개"
            },
            "pt-BR": {
              singular: "Não listado"
            },
            "zh-CN": {
              singular: "未公开发布"
            }
          }
        }),
        count: _v2,
        title: _v3,
        description: (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v70.translate)({
            singular: "Your currently Unlisted videos will revert to Private status, meaning",
            dictionary: {
              es: {
                singular: "Tus videos actualmente No listados volverán a ser Privados, lo que significa"
              },
              "de-DE": {
                singular: "Ihre derzeit nicht gelisteten Videos werden auf Privat zurückgesetzt, was bedeutet"
              },
              "fr-FR": {
                singular: "Vos vidéos actuellement non répertoriées redeviendront privées, ce qui signifie"
              },
              "ja-JP": {
                singular: "現在「限定公開」の動画は「非公開」に戻ります。つまり："
              },
              "ko-KR": {
                singular: "현재 Unlisted 상태인 동영상은 Private 상태로 되돌아갑니다. 즉"
              },
              "pt-BR": {
                singular: "Seus vídeos atualmente Não listados voltarão ao status Privado, o que significa"
              },
              "zh-CN": {
                singular: "您当前的未列出（Unlisted）视频将恢复为私人（Private）状态，这意味着"
              }
            }
          }), " ", (0, _v1.jsx)(_v38.Text, {
            as: "span",
            fontWeight: "500",
            color: "text-secondary",
            children: (0, _v70.translate)({
              singular: "any shared links will no longer work.",
              dictionary: {
                es: {
                  singular: "cualquier enlace compartido dejará de funcionar."
                },
                "de-DE": {
                  singular: "Alle geteilten Links funktionieren nicht mehr."
                },
                "fr-FR": {
                  singular: "tous les liens partagés cesseront de fonctionner."
                },
                "ja-JP": {
                  singular: "共有しているリンクはすべて無効になります。"
                },
                "ko-KR": {
                  singular: "공유된 모든 링크가 더 이상 작동하지 않습니다."
                },
                "pt-BR": {
                  singular: "quaisquer links compartilhados não funcionarão mais."
                },
                "zh-CN": {
                  singular: "任何已共享的链接将不再可用。"
                }
              }
            })
          })]
        }),
        videos: _v1
      });
    },
    _v124 = ({
      frozenVideosCount: _v0,
      storageLimitBytes: _v1,
      videos: _v2,
      targetPlanName: _v3
    }) => {
      let _v4 = Math.max(_v0, _v2.length),
        _v5 = (0, _v70.translate)({
          singular: "{COUNT} video will be frozen",
          plural: "{COUNT} videos will be frozen",
          count: _v4,
          replacements: {
            COUNT: (0, _v119.formatNumber)(_v4)
          },
          dictionary: {
            es: {
              singular: "{COUNT} video quedará congelado",
              plural: "{COUNT} videos quedarán congelados"
            },
            "de-DE": {
              singular: "{COUNT} Video wird eingefroren",
              plural: "{COUNT} Videos werden eingefroren"
            },
            "fr-FR": {
              singular: "{COUNT} vidéo sera gelée",
              plural: "{COUNT} vidéos seront gelées"
            },
            "ja-JP": {
              singular: "{COUNT}本の動画が凍結されます",
              plural: "{COUNT}本の動画が凍結されます"
            },
            "ko-KR": {
              singular: "{COUNT}개의 동영상이 동결됩니다",
              plural: "{COUNT}개의 동영상이 동결됩니다"
            },
            "pt-BR": {
              singular: "{COUNT} vídeo será congelado",
              plural: "{COUNT} vídeos serão congelados"
            },
            "zh-CN": {
              singular: "{COUNT} 个视频将被冻结",
              plural: "{COUNT} 个视频将被冻结"
            }
          }
        }),
        _v6 = _v3 ?? (0, _v70.translate)({
          singular: "free plan",
          dictionary: {
            es: {
              singular: "plan gratuito"
            },
            "de-DE": {
              singular: "kostenloser Plan"
            },
            "fr-FR": {
              singular: "forfait gratuit"
            },
            "ja-JP": {
              singular: "無料プラン"
            },
            "ko-KR": {
              singular: "무료 플랜"
            },
            "pt-BR": {
              singular: "plano gratuito"
            },
            "zh-CN": {
              singular: "免费计划"
            }
          }
        });
      return (0, _v1.jsx)(_v122, {
        count: _v4,
        title: _v5,
        description: (0, _v70.translate)({
          singular: "Your videos beyond the {PLAN} storage limit of {LIMIT} will be frozen and no longer accessible.",
          replacements: {
            PLAN: _v6,
            LIMIT: (0, _v62.formatBytes)(_v1, !1)
          },
          dictionary: {
            es: {
              singular: "Los videos que excedan el límite de almacenamiento de {LIMIT} del plan {PLAN} quedarán congelados y ya no serán accesibles."
            },
            "de-DE": {
              singular: "Ihre Videos, die das Speicherlimit von {LIMIT} des {PLAN}-Plans überschreiten, werden gesperrt und sind nicht mehr zugänglich."
            },
            "fr-FR": {
              singular: "Vos vidéos au‑delà de la limite de stockage de {LIMIT} du forfait {PLAN} seront bloquées et ne seront plus accessibles."
            },
            "ja-JP": {
              singular: "{PLAN} のストレージ上限 {LIMIT} を超えるビデオは凍結され、アクセスできなくなります。"
            },
            "ko-KR": {
              singular: "{PLAN} 플랜의 {LIMIT} 저장 한도를 초과하는 동영상은 동결되어 더 이상 접근할 수 없습니다."
            },
            "pt-BR": {
              singular: "Seus vídeos além do limite de armazenamento de {LIMIT} do plano {PLAN} serão congelados e ficarão inacessíveis."
            },
            "zh-CN": {
              singular: "超出 {PLAN} 存储限制 {LIMIT} 的视频将被冻结并无法访问。"
            }
          }
        }),
        videos: _v2
      });
    },
    _v125 = ({
      warningData: _v0,
      targetPlanName: _v1
    }) => {
      let _v2 = _v0?.storageUsedBytes ?? 0,
        _v3 = _v0?.storageLimitBytes ?? 0,
        _v4 = _v0?.frozenVideosPreview ?? [],
        _v5 = _v0?.unlistedVideosPreview ?? [],
        _v6 = Math.max(_v0?.frozenVideosCount ?? 0, _v4.length),
        _v7 = Math.max(_v0?.unlistedVideosCount ?? 0, _v5.length),
        _v8 = _v2 > _v3,
        _v9 = _v7 > 0;
      return _v8 || _v9 ? (0, _v1.jsxs)(_v8.Box, {
        backgroundColor: "color-mix(in srgb, var(--vimeo-colors-status-caution-primary) 10%, transparent);",
        paddingX: "24px",
        paddingY: "32px",
        position: "relative",
        overflow: "visible",
        children: [(0, _v1.jsxs)(_v109.Stack, {
          spacing: "10",
          children: [_v8 && (_v9 ? (0, _v1.jsx)(_v121, {
            frozenVideosCount: _v6,
            storageUsedBytes: _v2,
            storageLimitBytes: _v3,
            targetPlanName: _v1
          }) : (0, _v1.jsx)(_v124, {
            frozenVideosCount: _v6,
            storageLimitBytes: _v3,
            videos: _v4,
            targetPlanName: _v1
          })), _v9 && (0, _v1.jsx)(_v123, {
            unlistedVideosCount: _v7,
            videos: _v5
          })]
        }), (0, _v1.jsxs)(_v11.Flex, {
          position: "absolute",
          top: "-10px",
          right: "24px",
          backgroundColor: "status-caution-primary",
          borderRadius: "4px",
          paddingX: "6px",
          height: "20px",
          alignItems: "center",
          gap: "1",
          zIndex: "2",
          children: [(0, _v1.jsx)(_v16.CircleExclamationFilled, {
            boxSize: "16px",
            color: "white"
          }), (0, _v1.jsx)(_v38.Text, {
            variant: "heading-2xs",
            color: "white",
            children: (0, _v70.translate)({
              singular: "Warning",
              dictionary: {
                es: {
                  singular: "Advertencia"
                },
                "de-DE": {
                  singular: "Warnung"
                },
                "fr-FR": {
                  singular: "Attention"
                },
                "ja-JP": {
                  singular: "警告"
                },
                "ko-KR": {
                  singular: "경고"
                },
                "pt-BR": {
                  singular: "Aviso"
                },
                "zh-CN": {
                  singular: "警告"
                }
              }
            })
          })]
        })]
      }) : null;
    },
    _v126 = ({
      confirmTitle: _v0,
      warningData: _v1,
      featureLabels: _v2,
      cancelRequestPending: _v3,
      onKeepPlan: _v4,
      onConfirmCancel: _v5,
      onBack: _v6,
      isFinalStep: _v7 = !1
    }) => {
      let _v8 = _v1?.storageUsedBytes ?? 0,
        _v9 = _v1?.storageLimitBytes ?? 0,
        _v10 = _v1?.unlistedVideosCount ?? 0,
        _v11 = _v8 > _v9 || _v10 > 0,
        _v12 = [..._v2, (0, _v70.translate)({
          singular: "...and much more",
          dictionary: {
            es: {
              singular: "...y mucho más"
            },
            "de-DE": {
              singular: "...und vieles mehr"
            },
            "fr-FR": {
              singular: "...et bien plus encore"
            },
            "ja-JP": {
              singular: "...ほかにも多数の機能"
            },
            "ko-KR": {
              singular: "...그리고 훨씬 더 많은 기능"
            },
            "pt-BR": {
              singular: "...e muito mais"
            },
            "zh-CN": {
              singular: "...还有更多"
            }
          }
        })],
        _v13 = _v12.length - 1;
      return (0, _v1.jsxs)(_v8.Box, {
        sx: {
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale"
        },
        display: "flex",
        flexDirection: "column",
        flex: "1",
        minHeight: "0",
        children: [(0, _v1.jsx)(_v89.ModalHeader, {
          paddingLeft: "60px",
          paddingBottom: "12px",
          children: (0, _v1.jsx)(_v12.Header, {
            size: "md",
            textAlign: "left",
            children: _v0
          })
        }), (0, _v1.jsx)(_v118, {
          onClick: _v6
        }), (0, _v1.jsxs)(_v91.ModalBody, {
          paddingX: "0",
          paddingTop: "12px",
          paddingBottom: "0",
          overflowY: "auto",
          children: [(0, _v1.jsx)(_v125, {
            warningData: _v1
          }), (0, _v1.jsx)(_v8.Box, {
            backgroundColor: _v11 ? "surface" : "color-mix(in srgb, var(--vimeo-colors-status-destructive-primary) 10%, transparent)",
            paddingX: "60px",
            paddingY: _v11 ? "24px" : "32px",
            children: (0, _v1.jsxs)(_v109.Stack, {
              spacing: "4",
              width: "100%",
              children: [(0, _v1.jsx)(_v38.Text, {
                variant: "heading-sm",
                children: (0, _v70.translate)({
                  singular: "You are also losing access to",
                  dictionary: {
                    es: {
                      singular: "Además, perderás acceso a"
                    },
                    "de-DE": {
                      singular: "Sie verlieren außerdem den Zugriff auf"
                    },
                    "fr-FR": {
                      singular: "Vous perdez également l'accès à"
                    },
                    "ja-JP": {
                      singular: "また次のものへのアクセスも失われます"
                    },
                    "ko-KR": {
                      singular: "다음 항목에 대한 접근 권한도 잃게 됩니다"
                    },
                    "pt-BR": {
                      singular: "Você também perderá acesso a"
                    },
                    "zh-CN": {
                      singular: "您还将失去对以下内容的访问"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v114.Grid, {
                gridTemplateColumns: {
                  base: "repeat(1, minmax(0, 1fr))",
                  md: "repeat(2, minmax(0, 1fr))"
                },
                columnGap: "4",
                rowGap: "6px",
                width: "100%",
                children: _v12.map((_v0, _v1) => {
                  let _v2 = _v1 === _v13;
                  return (0, _v1.jsxs)(_v11.Flex, {
                    gap: "6px",
                    align: "center",
                    children: [!_v2 && (0, _v1.jsx)(_v115.CloseXCircleFilled, {
                      boxSize: "14px",
                      color: "status-destructive-primary"
                    }), (0, _v1.jsx)(_v38.Text, {
                      variant: "heading-xs",
                      color: _v2 ? "status-destructive-primary" : void 0,
                      children: _v0
                    })]
                  }, `feature-${_v1}-${_v0}`);
                })
              })]
            })
          })]
        }), (0, _v1.jsx)(_v90.ModalFooter, {
          paddingTop: "20px",
          paddingBottom: "24px",
          paddingX: {
            base: "24px",
            md: "60px"
          },
          children: (0, _v1.jsxs)(_v109.Stack, {
            spacing: "3",
            width: "100%",
            children: [(0, _v1.jsx)(_v9.Button, {
              onClick: _v4,
              size: "md",
              variant: "primary",
              width: "100%",
              children: (0, _v70.translate)({
                singular: "Keep plan",
                dictionary: {
                  es: {
                    singular: "Mantener el plan"
                  },
                  "de-DE": {
                    singular: "Plan behalten"
                  },
                  "fr-FR": {
                    singular: "Conserver le forfait"
                  },
                  "ja-JP": {
                    singular: "プランを継続する"
                  },
                  "ko-KR": {
                    singular: "요금제 유지"
                  },
                  "pt-BR": {
                    singular: "Manter plano"
                  },
                  "zh-CN": {
                    singular: "保留计划"
                  }
                }
              })
            }), (0, _v1.jsx)(_v9.Button, {
              onClick: _v5,
              size: "md",
              variant: "destructive",
              isLoading: _v3,
              disabled: _v3,
              width: "100%",
              children: _v7 ? (0, _v70.translate)({
                singular: "Confirm cancellation",
                dictionary: {
                  es: {
                    singular: "Confirmar cancelación"
                  },
                  "de-DE": {
                    singular: "Kündigung bestätigen"
                  },
                  "fr-FR": {
                    singular: "Confirmer l'annulation"
                  },
                  "ja-JP": {
                    singular: "解約を確定する"
                  },
                  "ko-KR": {
                    singular: "취소 확인"
                  },
                  "pt-BR": {
                    singular: "Confirmar cancelamento"
                  },
                  "zh-CN": {
                    singular: "确认取消"
                  }
                }
              }) : (0, _v70.translate)({
                singular: "Continue to cancel",
                dictionary: {
                  es: {
                    singular: "Continuar con la cancelación"
                  },
                  "de-DE": {
                    singular: "Weiter kündigen"
                  },
                  "fr-FR": {
                    singular: "Continuer l'annulation"
                  },
                  "ja-JP": {
                    singular: "解約を続ける"
                  },
                  "ko-KR": {
                    singular: "취소 계속하기"
                  },
                  "pt-BR": {
                    singular: "Continuar para cancelar"
                  },
                  "zh-CN": {
                    singular: "继续取消"
                  }
                }
              })
            })]
          })
        })]
      });
    };
  var _v127 = _v0.i(0),
    _v128 = _v0.i(0);
  let _v129 = ({
      moreContext: _v0,
      onMoreContextChange: _v1,
      onContinue: _v2,
      onBookCallClicked: _v3,
      onBack: _v4
    }) => (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v89.ModalHeader, {
        paddingLeft: "64px",
        paddingBottom: "8px",
        children: (0, _v1.jsxs)(_v109.Stack, {
          spacing: "1",
          align: "flex-start",
          children: [(0, _v1.jsx)(_v12.Header, {
            size: "md",
            fontWeight: "500",
            letterSpacing: "-0.8px",
            textAlign: "left",
            children: (0, _v70.translate)({
              singular: "Why are you canceling?",
              dictionary: {
                es: {
                  singular: "¿Por qué estás cancelando?"
                },
                "de-DE": {
                  singular: "Warum kündigen Sie?"
                },
                "fr-FR": {
                  singular: "Pourquoi annulez-vous ?"
                },
                "ja-JP": {
                  singular: "解約の理由をお聞かせください。"
                },
                "ko-KR": {
                  singular: "왜 취소하시나요?"
                },
                "pt-BR": {
                  singular: "Por que você está cancelando?"
                },
                "zh-CN": {
                  singular: "您为什么取消？"
                }
              }
            })
          }), (0, _v1.jsx)(_v38.Text, {
            variant: {
              base: "body-lg",
              md: "body-md"
            },
            children: (0, _v70.translate)({
              singular: "Tell us in your own words. Your feedback will help us improve Vimeo.",
              dictionary: {
                es: {
                  singular: "Cuéntanos con tus propias palabras. Tus comentarios nos ayudarán a mejorar Vimeo."
                },
                "de-DE": {
                  singular: "Beschreiben Sie es in eigenen Worten. Ihr Feedback hilft uns, Vimeo zu verbessern."
                },
                "fr-FR": {
                  singular: "Exprimez-vous avec vos propres mots. Vos retours nous aideront à améliorer Vimeo."
                },
                "ja-JP": {
                  singular: "ご自身の言葉でお聞かせください。いただいたフィードバックはVimeoの改善に役立ちます。"
                },
                "ko-KR": {
                  singular: "자유롭게 작성해 주세요. 고객님의 피드백은 Vimeo 개선에 도움이 됩니다."
                },
                "pt-BR": {
                  singular: "Conte-nos com suas próprias palavras. Seu feedback nos ajudará a melhorar Vimeo."
                },
                "zh-CN": {
                  singular: "请用您自己的话告诉我们。您的反馈将帮助我们改进 Vimeo。"
                }
              }
            })
          })]
        })
      }), (0, _v1.jsx)(_v118, {
        onClick: _v4
      }), (0, _v1.jsxs)(_v91.ModalBody, {
        paddingTop: "0",
        paddingBottom: "0",
        children: [(0, _v1.jsxs)(_v109.Stack, {
          spacing: "3",
          children: [(0, _v1.jsx)(_v8.Box, {
            height: "150px",
            children: (0, _v1.jsx)(_v127.Textarea, {
              placeholder: (0, _v70.translate)({
                singular: "Write your feedback",
                dictionary: {
                  es: {
                    singular: "Escribe tus comentarios"
                  },
                  "de-DE": {
                    singular: "Schreiben Sie Ihr Feedback"
                  },
                  "fr-FR": {
                    singular: "Écrivez votre avis"
                  },
                  "ja-JP": {
                    singular: "フィードバックを記入してください"
                  },
                  "ko-KR": {
                    singular: "피드백 작성"
                  },
                  "pt-BR": {
                    singular: "Escreva seu feedback"
                  },
                  "zh-CN": {
                    singular: "请写下您的反馈"
                  }
                }
              }),
              resize: "none",
              height: "100%",
              _placeholder: {
                color: "text-tertiary"
              },
              value: _v0,
              onChange: _v0 => _v1(_v0.target.value)
            })
          }), (0, _v1.jsxs)(_v11.Flex, {
            gap: "3",
            alignItems: "center",
            height: {
              base: "auto",
              md: "68px"
            },
            paddingLeft: "4",
            paddingRight: "2",
            paddingY: "2",
            borderRadius: "8px",
            position: "relative",
            overflow: "hidden",
            width: "100%",
            children: [(0, _v1.jsx)(_v8.Box, {
              position: "absolute",
              inset: "0",
              borderRadius: "8px",
              backgroundColor: "status-info-secondary",
              opacity: "0.48"
            }), (0, _v1.jsx)(_v11.Flex, {
              alignItems: "center",
              paddingY: "1",
              flexShrink: 0,
              position: "relative",
              zIndex: "1",
              children: (0, _v1.jsx)(_v128.Gift, {
                boxSize: "24px"
              })
            }), (0, _v1.jsxs)(_v11.Flex, {
              direction: "row",
              alignItems: "center",
              gap: "2",
              paddingY: "1",
              position: "relative",
              zIndex: "1",
              width: "100%",
              minWidth: "0",
              children: [(0, _v1.jsxs)(_v38.Text, {
                variant: {
                  base: "body-sm",
                  md: "body-md"
                },
                flex: "1",
                minWidth: "0",
                children: [(0, _v70.translate)({
                  singular: "We'd love to hear more! Chat with our Product team and get a ",
                  dictionary: {
                    es: {
                      singular: "¡Nos encantaría saber más! Chatea con nuestro equipo de Producto y obtén una "
                    },
                    "de-DE": {
                      singular: "Wir würden gerne mehr erfahren! Chatten Sie mit unserem Produktteam und erhalten Sie "
                    },
                    "fr-FR": {
                      singular: "Nous aimerions en savoir plus ! Discutez avec notre équipe Produit et obtenez un "
                    },
                    "ja-JP": {
                      singular: "ぜひ詳しくお聞かせください！プロダクトチームとチャットして、 "
                    },
                    "ko-KR": {
                      singular: "더 자세한 이야기를 듣고 싶습니다! 제품팀과 채팅하시면 "
                    },
                    "pt-BR": {
                      singular: "Adoraríamos saber mais! Converse com nossa equipe de Produto e receba um "
                    },
                    "zh-CN": {
                      singular: "我们很想了解更多！与我们的产品团队交流并获得 "
                    }
                  }
                }), (0, _v1.jsx)(_v38.Text, {
                  as: "span",
                  variant: {
                    base: "heading-xs",
                    md: "heading-xs"
                  },
                  children: (0, _v70.translate)({
                    singular: "$50 gift card 🙏🏻",
                    dictionary: {
                      es: {
                        singular: "Tarjeta de regalo de $50 🙏🏻"
                      },
                      "de-DE": {
                        singular: "Geschenkkarte im Wert von $50 🙏🏻"
                      },
                      "fr-FR": {
                        singular: "carte cadeau de 50 $ 🙏🏻"
                      },
                      "ja-JP": {
                        singular: "$50 ギフトカード 🙏🏻"
                      },
                      "ko-KR": {
                        singular: "$50 상품권 🙏🏻"
                      },
                      "pt-BR": {
                        singular: "Cartão-presente de $50 🙏🏻"
                      },
                      "zh-CN": {
                        singular: "$50 礼品卡 🙏🏻"
                      }
                    }
                  })
                })]
              }), (0, _v1.jsx)(_v9.Button, {
                variant: "secondary",
                size: "sm",
                height: "32px",
                minWidth: "103px",
                paddingX: "3",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: "500",
                lineHeight: "1.4",
                letterSpacing: "-0.42px",
                flexShrink: 0,
                marginLeft: "auto",
                onClick: _v3,
                children: (0, _v70.translate)({
                  singular: "Book a call",
                  dictionary: {
                    es: {
                      singular: "Reservar una llamada"
                    },
                    "de-DE": {
                      singular: "Anruf buchen"
                    },
                    "fr-FR": {
                      singular: "Réserver un appel"
                    },
                    "ja-JP": {
                      singular: "通話を予約する"
                    },
                    "ko-KR": {
                      singular: "통화 예약"
                    },
                    "pt-BR": {
                      singular: "Agende uma chamada"
                    },
                    "zh-CN": {
                      singular: "预约通话"
                    }
                  }
                })
              })]
            })]
          })]
        }), (0, _v1.jsx)(_v8.Box, {
          borderTopWidth: "1px",
          borderTopColor: "stroke",
          marginTop: "3"
        })]
      }), (0, _v1.jsx)(_v90.ModalFooter, {
        paddingBottom: "24px",
        children: (0, _v1.jsx)(_v11.Flex, {
          width: "100%",
          justifyContent: "flex-end",
          children: (0, _v1.jsx)(_v9.Button, {
            onClick: _v2,
            size: "md",
            variant: "primary",
            children: (0, _v70.translate)({
              singular: "Continue",
              dictionary: {
                es: {
                  singular: "Continuar"
                },
                "de-DE": {
                  singular: "Weiter"
                },
                "fr-FR": {
                  singular: "Continuer"
                },
                "ja-JP": {
                  singular: "次へ"
                },
                "ko-KR": {
                  singular: "계속"
                },
                "pt-BR": {
                  singular: "Continuar"
                },
                "zh-CN": {
                  singular: "继续"
                }
              }
            })
          })
        })
      })]
    }),
    _v130 = ({
      onBack: _v0,
      onConfirmRandomFreeze: _v1
    }) => (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v89.ModalHeader, {
        paddingLeft: "64px",
        children: (0, _v1.jsxs)(_v109.Stack, {
          spacing: "1",
          align: "flex-start",
          children: [(0, _v1.jsx)(_v12.Header, {
            size: "md",
            fontWeight: "500",
            letterSpacing: "-0.8px",
            textAlign: "left",
            children: (0, _v70.translate)({
              singular: "You’re still exceeding storage limits.",
              dictionary: {
                es: {
                  singular: "Sigues excediendo los límites de almacenamiento."
                },
                "de-DE": {
                  singular: "Sie überschreiten weiterhin Ihr Speicherkontingent."
                },
                "fr-FR": {
                  singular: "Vous dépassez toujours les limites de stockage."
                },
                "ja-JP": {
                  singular: "ストレージ上限をまだ超過しています。"
                },
                "ko-KR": {
                  singular: "여전히 저장 용량 한도를 초과하고 있습니다."
                },
                "pt-BR": {
                  singular: "Você ainda está excedendo os limites de armazenamento."
                },
                "zh-CN": {
                  singular: "您仍然超出存储限制."
                }
              }
            })
          }), (0, _v1.jsx)(_v38.Text, {
            variant: {
              base: "body-lg",
              md: "body-md"
            },
            children: (0, _v70.translate)({
              singular: "If you continue, Vimeo will randomly select videos to freeze. To choose which videos you want to keep, go back.",
              dictionary: {
                es: {
                  singular: "Si continúas, Vimeo seleccionará videos al azar para congelar. Para elegir qué videos quieres conservar, vuelve atrás."
                },
                "de-DE": {
                  singular: "Wenn Sie fortfahren, wählt Vimeo zufällig Videos zum Einfrieren aus. Um auszuwählen, welche Videos Sie behalten möchten, gehen Sie zurück."
                },
                "fr-FR": {
                  singular: "Si vous continuez, Vimeo sélectionnera aléatoirement des vidéos à geler. Pour choisir les vidéos que vous souhaitez conserver, revenez en arrière."
                },
                "ja-JP": {
                  singular: "続行すると、Vimeo がランダムに凍結する動画を選択します。保持したい動画を選ぶには、戻ってください。"
                },
                "ko-KR": {
                  singular: "계속하면 Vimeo가 무작위로 동영상을 선택하여 동결합니다. 보관하려는 동영상을 직접 선택하려면 뒤로 가십시오."
                },
                "pt-BR": {
                  singular: "Se você continuar, Vimeo selecionará aleatoriamente vídeos para congelar. Para escolher quais vídeos deseja manter, volte."
                },
                "zh-CN": {
                  singular: "如果您继续, Vimeo 将随机选择要冻结的视频. 要选择您想保留的视频, 请返回."
                }
              }
            })
          })]
        })
      }), (0, _v1.jsx)(_v118, {
        onClick: _v0
      }), (0, _v1.jsx)(_v91.ModalBody, {}), (0, _v1.jsx)(_v90.ModalFooter, {
        paddingTop: "20px",
        paddingBottom: "24px",
        children: (0, _v1.jsxs)(_v11.Flex, {
          gap: "3",
          width: "100%",
          justifyContent: "flex-end",
          flexDirection: {
            base: "column",
            md: "row"
          },
          children: [(0, _v1.jsx)(_v9.Button, {
            onClick: _v0,
            size: "md",
            variant: "secondary",
            width: {
              base: "100%",
              md: "auto"
            },
            children: (0, _v70.translate)({
              singular: "Select videos to keep",
              dictionary: {
                es: {
                  singular: "Selecciona videos para conservar"
                },
                "de-DE": {
                  singular: "Wählen Sie die Videos aus, die Sie behalten möchten."
                },
                "fr-FR": {
                  singular: "Sélectionnez les vidéos à conserver"
                },
                "ja-JP": {
                  singular: "保持する動画を選択してください"
                },
                "ko-KR": {
                  singular: "보관할 동영상 선택"
                },
                "pt-BR": {
                  singular: "Selecione os vídeos para manter"
                },
                "zh-CN": {
                  singular: "选择要保留的视频"
                }
              }
            })
          }), (0, _v1.jsx)(_v9.Button, {
            onClick: _v1,
            size: "md",
            variant: "destructive",
            width: {
              base: "100%",
              md: "auto"
            },
            children: (0, _v70.translate)({
              singular: "Cancel and freeze randomly",
              dictionary: {
                es: {
                  singular: "Cancelar y congelar aleatoriamente"
                },
                "de-DE": {
                  singular: "Kündigen und zufällig einfrieren"
                },
                "fr-FR": {
                  singular: "Annuler et geler au hasard"
                },
                "ja-JP": {
                  singular: "ランダムにキャンセルして凍結する"
                },
                "ko-KR": {
                  singular: "무작위로 취소 및 동결"
                },
                "pt-BR": {
                  singular: "Cancelar e congelar aleatoriamente"
                },
                "zh-CN": {
                  singular: "取消并随机冻结"
                }
              }
            })
          })]
        })
      })]
    });
  var _v131 = _v0.i(0),
    _v132 = _v0.i(0);
  let _v133 = ({
      videos: _v0,
      selectedStorageBytes: _v1,
      storageLimitBytes: _v2,
      isLoadingVideos: _v3,
      onToggleVideo: _v4,
      onDeselectAll: _v5,
      onKeepPlan: _v6,
      onContinue: _v7,
      onBack: _v8
    }) => {
      let _v9 = _v0.filter(_v0 => _v0.selected).length,
        _v10 = _v0.length,
        _v11 = _v1 > _v2,
        _v12 = _v2 > 0 ? Math.min(_v1 / _v2, 1) : 0,
        _v13 = _v2 > 0 ? _v11 ? Math.min(_v2 / Math.max(_v1, 1), 1) : 1 : 0,
        _v14 = `${100 * _v12}%`,
        _v15 = `${100 * _v13}%`;
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v89.ModalHeader, {
          paddingLeft: "64px",
          children: (0, _v1.jsx)(_v12.Header, {
            size: "md",
            fontWeight: "500",
            letterSpacing: "-0.8px",
            textAlign: "left",
            children: (0, _v70.translate)({
              singular: "You are at risk of losing your videos.",
              dictionary: {
                es: {
                  singular: "Estás en riesgo de perder tus videos."
                },
                "de-DE": {
                  singular: "Sie laufen Gefahr, Ihre Videos zu verlieren."
                },
                "fr-FR": {
                  singular: "Vous risquez de perdre vos vidéos."
                },
                "ja-JP": {
                  singular: "動画が失われる可能性があります。"
                },
                "ko-KR": {
                  singular: "동영상을 잃을 위험이 있습니다."
                },
                "pt-BR": {
                  singular: "Você corre o risco de perder seus vídeos."
                },
                "zh-CN": {
                  singular: "您有丢失视频的风险."
                }
              }
            })
          })
        }), (0, _v1.jsx)(_v118, {
          onClick: _v8
        }), (0, _v1.jsx)(_v91.ModalBody, {
          paddingTop: "8px",
          paddingX: "40px",
          paddingBottom: "0",
          children: _v3 ? (0, _v1.jsx)(_v109.Stack, {
            alignItems: "center",
            justifyContent: "center",
            minH: "360px",
            children: (0, _v1.jsx)(_v37.Spinner, {
              size: "md"
            })
          }) : (0, _v1.jsxs)(_v109.Stack, {
            spacing: "6",
            children: [(0, _v1.jsxs)(_v109.Stack, {
              spacing: "1",
              align: "flex-start",
              children: [(0, _v1.jsx)(_v38.Text, {
                variant: {
                  base: "heading-sm",
                  md: "heading-xs"
                },
                children: (0, _v70.translate)({
                  singular: "Deselect videos until you go below {LIMIT}.",
                  replacements: {
                    LIMIT: (0, _v62.formatBytes)(_v2, !1)
                  },
                  dictionary: {
                    es: {
                      singular: "Deselecciona videos hasta quedar por debajo de {LIMIT}."
                    },
                    "de-DE": {
                      singular: "Wählen Sie Videos ab, bis Sie unter {LIMIT} liegen."
                    },
                    "fr-FR": {
                      singular: "Désélectionnez des vidéos jusqu'à descendre en dessous de {LIMIT}."
                    },
                    "ja-JP": {
                      singular: "{LIMIT}未満になるまで動画の選択を解除してください。"
                    },
                    "ko-KR": {
                      singular: "{LIMIT} 미만이 될 때까지 동영상 선택을 해제하세요."
                    },
                    "pt-BR": {
                      singular: "Desmarque vídeos até ficar abaixo de {LIMIT}."
                    },
                    "zh-CN": {
                      singular: "取消选择视频直到低于 {LIMIT}."
                    }
                  }
                })
              }), (0, _v1.jsx)(_v38.Text, {
                variant: {
                  base: "body-lg",
                  md: "body-md"
                },
                color: "text-secondary",
                children: (0, _v70.translate)({
                  singular: "Some of your videos will be frozen. Frozen videos cannot be viewed or downloaded unless you upgrade again.",
                  dictionary: {
                    es: {
                      singular: "Algunos de tus videos serán congelados. Los videos congelados no se pueden ver ni descargar a menos que vuelvas a actualizar."
                    },
                    "de-DE": {
                      singular: "Einige Ihrer Videos werden eingefroren. Eingefrorene Videos können nicht angesehen oder heruntergeladen werden, es sei denn, Sie führen erneut ein Upgrade durch."
                    },
                    "fr-FR": {
                      singular: "Certaines de vos vidéos seront gelées. Les vidéos gelées ne peuvent pas être consultées ni téléchargées, sauf si vous effectuez de nouveau une mise à niveau."
                    },
                    "ja-JP": {
                      singular: "一部の動画が凍結されます。凍結された動画は、再度アップグレードしない限り閲覧やダウンロードができません。"
                    },
                    "ko-KR": {
                      singular: "일부 동영상이 동결됩니다. 동결된 동영상은 다시 업그레이드하지 않는 한 시청하거나 다운로드할 수 없습니다."
                    },
                    "pt-BR": {
                      singular: "Alguns dos seus vídeos serão congelados. Vídeos congelados não podem ser visualizados ou baixados a menos que você faça upgrade novamente."
                    },
                    "zh-CN": {
                      singular: "您的一些视频将被冻结. 冻结的视频无法被查看或下载, 除非您再次升级."
                    }
                  }
                })
              })]
            }), (0, _v1.jsxs)(_v109.Stack, {
              spacing: "2",
              children: [(0, _v1.jsxs)(_v11.Flex, {
                justifyContent: "space-between",
                children: [(0, _v1.jsx)(_v38.Text, {
                  variant: {
                    base: "body-sm",
                    md: "body-sm"
                  },
                  color: "text-secondary",
                  children: (0, _v70.translate)({
                    singular: "Selected: {SIZE}",
                    replacements: {
                      SIZE: (0, _v62.formatBytes)(_v1, !1)
                    },
                    dictionary: {
                      es: {
                        singular: "Seleccionados: {SIZE}"
                      },
                      "de-DE": {
                        singular: "Ausgewählt: {SIZE}"
                      },
                      "fr-FR": {
                        singular: "Sélectionné: {SIZE}"
                      },
                      "ja-JP": {
                        singular: "選択済み: {SIZE}"
                      },
                      "ko-KR": {
                        singular: "선택됨: {SIZE}"
                      },
                      "pt-BR": {
                        singular: "Selecionado: {SIZE}"
                      },
                      "zh-CN": {
                        singular: "已选择: {SIZE}"
                      }
                    }
                  })
                }), (0, _v1.jsx)(_v38.Text, {
                  variant: {
                    base: "body-sm",
                    md: "body-sm"
                  },
                  color: "text-secondary",
                  children: (0, _v70.translate)({
                    singular: "/ {SIZE} limit",
                    replacements: {
                      SIZE: (0, _v62.formatBytes)(_v2, !1)
                    },
                    dictionary: {
                      es: {
                        singular: "/ {SIZE} límite"
                      },
                      "de-DE": {
                        singular: "/ {SIZE} Limit"
                      },
                      "fr-FR": {
                        singular: "/ {SIZE} limite"
                      },
                      "ja-JP": {
                        singular: "/ {SIZE} 上限"
                      },
                      "ko-KR": {
                        singular: "/ {SIZE} 제한"
                      },
                      "pt-BR": {
                        singular: "/ {SIZE} limite"
                      },
                      "zh-CN": {
                        singular: "/ {SIZE} 限制"
                      }
                    }
                  })
                })]
              }), (0, _v1.jsxs)(_v8.Box, {
                height: "4px",
                width: "100%",
                borderRadius: "999px",
                backgroundColor: "button-secondary-default",
                position: "relative",
                children: [_v11 ? (0, _v1.jsxs)(_v1.Fragment, {
                  children: [(0, _v1.jsx)(_v8.Box, {
                    position: "absolute",
                    inset: "0",
                    borderRadius: "999px",
                    backgroundColor: "status-destructive-primary"
                  }), (0, _v1.jsx)(_v8.Box, {
                    position: "absolute",
                    left: "0",
                    top: "0",
                    bottom: "0",
                    width: _v15,
                    borderLeftRadius: "999px",
                    backgroundColor: "gray.400"
                  })]
                }) : (0, _v1.jsxs)(_v1.Fragment, {
                  children: [(0, _v1.jsx)(_v8.Box, {
                    position: "absolute",
                    inset: "0",
                    borderRadius: "999px",
                    backgroundColor: "gray.300",
                    _dark: {
                      backgroundColor: "gray.600"
                    }
                  }), (0, _v1.jsx)(_v8.Box, {
                    position: "absolute",
                    left: "0",
                    top: "0",
                    bottom: "0",
                    width: _v14,
                    borderRadius: 1 === _v12 ? "999px" : void 0,
                    borderLeftRadius: "999px",
                    backgroundColor: "status-positive-primary"
                  })]
                }), (0, _v1.jsx)(_v8.Box, {
                  position: "absolute",
                  left: _v15,
                  top: "-6px",
                  bottom: "-6px",
                  marginLeft: "-1px",
                  borderLeftWidth: "1px",
                  borderLeftStyle: "dotted",
                  borderLeftColor: "text-tertiary"
                })]
              })]
            }), (0, _v1.jsxs)(_v109.Stack, {
              spacing: "3",
              maxH: "336px",
              overflowY: "auto",
              paddingBottom: "2",
              children: [(0, _v1.jsxs)(_v11.Flex, {
                justifyContent: "space-between",
                alignItems: "center",
                children: [(0, _v1.jsx)(_v38.Text, {
                  variant: {
                    base: "body-sm",
                    md: "body-sm"
                  },
                  children: (0, _v70.translate)({
                    singular: "{COUNT} video selected / {TOTAL}",
                    plural: "{COUNT} videos selected / {TOTAL}",
                    count: _v9,
                    replacements: {
                      COUNT: _v9,
                      TOTAL: _v10
                    },
                    dictionary: {
                      es: {
                        singular: "{COUNT} video seleccionado / {TOTAL}",
                        plural: "{COUNT} videos seleccionados / {TOTAL}"
                      },
                      "de-DE": {
                        singular: "{COUNT} Video ausgewählt / {TOTAL}",
                        plural: "{COUNT} Videos ausgewählt / {TOTAL}"
                      },
                      "fr-FR": {
                        singular: "{COUNT} vidéo sélectionnée / {TOTAL}",
                        plural: "{COUNT} vidéos sélectionnées / {TOTAL}"
                      },
                      "ja-JP": {
                        singular: "{COUNT}件選択 / {TOTAL}",
                        plural: "{COUNT}件選択 / {TOTAL}"
                      },
                      "ko-KR": {
                        singular: "{COUNT}개 동영상 선택됨 / {TOTAL}",
                        plural: "{COUNT}개 동영상 선택됨 / {TOTAL}"
                      },
                      "pt-BR": {
                        singular: "{COUNT} vídeo selecionado / {TOTAL}",
                        plural: "{COUNT} vídeos selecionados / {TOTAL}"
                      },
                      "zh-CN": {
                        singular: "{COUNT} 个视频已选择 / {TOTAL}",
                        plural: "{COUNT} 个视频已选择 / {TOTAL}"
                      }
                    }
                  })
                }), (0, _v1.jsx)(_v9.Button, {
                  size: "xs",
                  variant: "tertiary",
                  onClick: _v5,
                  children: (0, _v70.translate)({
                    singular: "Deselect all",
                    dictionary: {
                      es: {
                        singular: "Deseleccionar todo"
                      },
                      "de-DE": {
                        singular: "Alle abwählen"
                      },
                      "fr-FR": {
                        singular: "Tout désélectionner"
                      },
                      "ja-JP": {
                        singular: "すべての選択を解除"
                      },
                      "ko-KR": {
                        singular: "모두 선택 해제"
                      },
                      "pt-BR": {
                        singular: "Desmarcar tudo"
                      },
                      "zh-CN": {
                        singular: "取消全选"
                      }
                    }
                  })
                })]
              }), (0, _v1.jsx)(_v114.Grid, {
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: "3",
                children: _v0.map(_v0 => (0, _v1.jsxs)(_v109.Stack, {
                  spacing: "2",
                  children: [(0, _v1.jsx)(_v9.Button, {
                    variant: "unstyled",
                    onClick: () => _v4(_v0.id),
                    padding: "0",
                    minH: "0",
                    height: "auto",
                    textAlign: "left",
                    children: (0, _v1.jsxs)(_v8.Box, {
                      borderRadius: "8px",
                      overflow: "hidden",
                      position: "relative",
                      width: "100%",
                      aspectRatio: "16 / 9",
                      children: [_v0.thumbnail ? (0, _v1.jsx)(_v132.Image, {
                        src: _v0.thumbnail,
                        alt: _v0.title,
                        position: "absolute",
                        inset: "0",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        opacity: _v0.selected ? 1 : .6
                      }) : null, (0, _v1.jsx)(_v8.Box, {
                        position: "absolute",
                        top: "8px",
                        left: "8px",
                        pointerEvents: "none",
                        children: (0, _v1.jsx)(_v131.Checkbox, {
                          size: "md",
                          isChecked: _v0.selected
                        })
                      }), (0, _v1.jsx)(_v8.Box, {
                        position: "absolute",
                        left: "8px",
                        bottom: "8px",
                        borderRadius: "4px",
                        paddingX: "6px",
                        paddingY: "2px",
                        backgroundColor: "blackAlpha.700",
                        children: (0, _v1.jsx)(_v38.Text, {
                          variant: {
                            base: "heading-2xs",
                            md: "heading-2xs"
                          },
                          color: "white",
                          children: (0, _v62.formatBytes)(_v0.sizeBytes, !1)
                        })
                      })]
                    })
                  }), (0, _v1.jsx)(_v38.Text, {
                    variant: {
                      base: "heading-2xs",
                      md: "heading-2xs"
                    },
                    noOfLines: 1,
                    children: _v0.title
                  })]
                }, _v0.id))
              })]
            })]
          })
        }), _v3 ? null : (0, _v1.jsx)(_v90.ModalFooter, {
          paddingTop: "20px",
          paddingBottom: "24px",
          children: (0, _v1.jsxs)(_v109.Stack, {
            spacing: "3",
            width: "100%",
            children: [(0, _v1.jsx)(_v9.Button, {
              onClick: _v6,
              size: "md",
              variant: "primary",
              width: "100%",
              children: (0, _v70.translate)({
                singular: "Keep plan",
                dictionary: {
                  es: {
                    singular: "Mantener el plan"
                  },
                  "de-DE": {
                    singular: "Plan behalten"
                  },
                  "fr-FR": {
                    singular: "Conserver le forfait"
                  },
                  "ja-JP": {
                    singular: "プランを継続する"
                  },
                  "ko-KR": {
                    singular: "요금제 유지"
                  },
                  "pt-BR": {
                    singular: "Manter plano"
                  },
                  "zh-CN": {
                    singular: "保留计划"
                  }
                }
              })
            }), (0, _v1.jsx)(_v9.Button, {
              onClick: _v7,
              size: "md",
              variant: "destructive",
              width: "100%",
              children: (0, _v70.translate)({
                singular: "Cancel and freeze unselected videos",
                dictionary: {
                  es: {
                    singular: "Cancelar y congelar videos no seleccionados"
                  },
                  "de-DE": {
                    singular: "Kündigen und nicht ausgewählte Videos einfrieren"
                  },
                  "fr-FR": {
                    singular: "Annuler et geler les vidéos non sélectionnées"
                  },
                  "ja-JP": {
                    singular: "未選択の動画をキャンセルして凍結する"
                  },
                  "ko-KR": {
                    singular: "선택되지 않은 동영상을 취소 및 동결"
                  },
                  "pt-BR": {
                    singular: "Cancelar e congelar vídeos não selecionados"
                  },
                  "zh-CN": {
                    singular: "取消并冻结未选择的视频"
                  }
                }
              })
            })]
          })
        })]
      });
    },
    _v134 = "Other";
  var _v135 = _v0.i(0);
  let _v136 = ({
    options: _v0,
    selectedOption: _v1,
    onSelectOption: _v2,
    onContinue: _v3,
    onKeepPlan: _v4,
    onBack: _v5
  }) => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v89.ModalHeader, {
      paddingLeft: "64px",
      children: (0, _v1.jsxs)(_v109.Stack, {
        spacing: "1",
        align: "flex-start",
        children: [(0, _v1.jsx)(_v12.Header, {
          size: "md",
          fontWeight: "500",
          letterSpacing: "-0.8px",
          textAlign: "left",
          children: (0, _v70.translate)({
            singular: "Why are you canceling?",
            dictionary: {
              es: {
                singular: "¿Por qué estás cancelando?"
              },
              "de-DE": {
                singular: "Warum kündigen Sie?"
              },
              "fr-FR": {
                singular: "Pourquoi annulez-vous ?"
              },
              "ja-JP": {
                singular: "解約の理由をお聞かせください。"
              },
              "ko-KR": {
                singular: "왜 취소하시나요?"
              },
              "pt-BR": {
                singular: "Por que você está cancelando?"
              },
              "zh-CN": {
                singular: "您为什么取消？"
              }
            }
          })
        }), (0, _v1.jsx)(_v38.Text, {
          variant: {
            base: "body-lg",
            md: "body-md"
          },
          children: (0, _v70.translate)({
            singular: "Your feedback will help us improve Vimeo",
            dictionary: {
              es: {
                singular: "Tus comentarios nos ayudarán a mejorar Vimeo"
              },
              "de-DE": {
                singular: "Ihr Feedback hilft uns, Vimeo zu verbessern"
              },
              "fr-FR": {
                singular: "Vos retours nous aideront à améliorer Vimeo"
              },
              "ja-JP": {
                singular: "ご意見はVimeoの改善に役立ちます。"
              },
              "ko-KR": {
                singular: "귀하의 피드백은 Vimeo를 개선하는 데 도움이 됩니다"
              },
              "pt-BR": {
                singular: "Seu feedback nos ajudará a melhorar o Vimeo"
              },
              "zh-CN": {
                singular: "您的反馈将帮助我们改进 Vimeo"
              }
            }
          })
        })]
      })
    }), (0, _v1.jsx)(_v118, {
      onClick: _v5
    }), (0, _v1.jsx)(_v91.ModalBody, {
      paddingTop: "32px",
      paddingBottom: "0",
      children: (0, _v1.jsx)(_v135.RadioGroup, {
        children: (0, _v1.jsx)(_v109.Stack, {
          spacing: "4",
          children: _v0.map(_v0 => {
            let _v1 = _v1 === _v0.value,
              _v2 = !!_v1 && !_v1;
            return (0, _v1.jsxs)(_v109.Stack, {
              spacing: "2",
              opacity: _v2 ? .3 : 1,
              transition: "opacity 0.2s ease",
              children: [(0, _v1.jsx)(_v35.Radio, {
                value: _v0.value,
                size: "sm",
                onChange: () => _v2(_v0.value),
                children: (0, _v1.jsx)(_v38.Text, {
                  variant: {
                    base: "heading-sm",
                    md: "heading-2xs"
                  },
                  children: _v0.label
                })
              }), _v1 && _v0.response && (0, _v1.jsxs)(_v109.Stack, {
                spacing: "3",
                paddingLeft: "24px",
                children: [(0, _v1.jsx)(_v38.Text, {
                  variant: {
                    base: "body-xl",
                    md: "body-lg"
                  },
                  color: "text-secondary",
                  children: _v0.response.text
                }), _v0.response.ctas.length > 0 && (0, _v1.jsx)(_v11.Flex, {
                  gap: "2",
                  flexWrap: {
                    base: "wrap",
                    md: "nowrap"
                  },
                  children: _v0.response.ctas.map(_v0 => (0, _v1.jsx)(_v9.Button, {
                    size: "sm",
                    variant: "primary",
                    onClick: () => window.open(_v0.href, "_blank", "noopener,noreferrer"),
                    children: _v0.label
                  }, _v0.label))
                })]
              })]
            }, _v0.value);
          })
        })
      })
    }), (0, _v1.jsx)(_v90.ModalFooter, {
      paddingBottom: "24px",
      children: (0, _v1.jsxs)(_v11.Flex, {
        gap: "3",
        width: "100%",
        justifyContent: "flex-end",
        flexDirection: {
          base: "column-reverse",
          md: "row"
        },
        children: [(0, _v1.jsx)(_v9.Button, {
          onClick: _v3,
          size: "md",
          variant: "destructive",
          children: (0, _v70.translate)({
            singular: "Continue to cancel",
            dictionary: {
              es: {
                singular: "Continuar con la cancelación"
              },
              "de-DE": {
                singular: "Weiter kündigen"
              },
              "fr-FR": {
                singular: "Continuer l'annulation"
              },
              "ja-JP": {
                singular: "解約を続ける"
              },
              "ko-KR": {
                singular: "취소 계속하기"
              },
              "pt-BR": {
                singular: "Continuar para cancelar"
              },
              "zh-CN": {
                singular: "继续取消"
              }
            }
          })
        }), (0, _v1.jsx)(_v9.Button, {
          onClick: _v4,
          size: "md",
          children: (0, _v70.translate)({
            singular: "Keep plan",
            dictionary: {
              es: {
                singular: "Mantener el plan"
              },
              "de-DE": {
                singular: "Plan behalten"
              },
              "fr-FR": {
                singular: "Conserver le forfait"
              },
              "ja-JP": {
                singular: "プランを継続する"
              },
              "ko-KR": {
                singular: "요금제 유지"
              },
              "pt-BR": {
                singular: "Manter plano"
              },
              "zh-CN": {
                singular: "保留计划"
              }
            }
          })
        })]
      })
    })]
  });
  var _v137 = _v0.i(0),
    _v138 = _v0.i(0),
    _v139 = _v0.i(0),
    _v140 = _v0.i(0);
  let _v141 = {
      feature: null
    },
    _v142 = {
      location: null,
      referrer_page_name: null,
      copy: null,
      path: null,
      referrer: null,
      target: null,
      target_path: null
    },
    _v143 = {
      copy: null,
      element: null,
      flow: null,
      modal_name: null,
      is_user_facing_data: null,
      scrolling_percentage: null,
      entity_type: null
    },
    _v144 = {
      app_id: null,
      integration_type: null,
      managed_user_id: null,
      partner_bucket: null,
      is_partner: null,
      integration_id: null,
      integration_name: null
    },
    _v145 = _v0 => {
      var _v1, _v2, _v3, _v4;
      let _v5,
        _v6,
        _v7,
        _v8,
        _v9,
        _v10 = (_v1 = {
          product: "monetization",
          feature: "billing",
          location: "modal",
          modal_name: "cancel_survey_modal"
        }, _v5 = {
          ..._v143,
          ..._v1,
          device_type: (0, _v140.default)()
        }, {
          product_analytics_context: new _v139.EventContext("product_analytics_context", 150, _v5)
        }),
        _v11 = (_v2 = {
          page_name: "billing",
          path: window.location.pathname
        }, _v6 = {
          ..._v142,
          ..._v2
        }, {
          web_context: new _v139.EventContext("web_context", 48, _v6)
        }),
        _v12 = (_v7 = {
          view_type: "impression",
          is_empty_state: !1,
          feature: null
        }, {
          view_context: new _v139.EventContext("view_context", 7, _v7)
        }),
        _v13 = (_v3 = {
          is_integration: !1
        }, _v8 = {
          ..._v144,
          ..._v3
        }, {
          third_party_integration_context: new _v139.EventContext("third_party_integration_context", 5, _v8)
        }),
        _v14 = (_v4 = {
          action_type: "click"
        }, _v9 = {
          ..._v141,
          ..._v4
        }, {
          action_context: new _v139.EventContext("action_context", 12, _v9)
        }),
        _v15 = {
          team_context: new _v139.EventContext("team_context", 7, {
            is_team_member: !!_v0,
            team_owner_id: _v0?.ownerId || null,
            team_subscription_type: _v0?.accountType || null,
            team_role: (0, _v138.default)(_v0?.plainTextPermissionLevel?.toLowerCase()) || null,
            team_size: _v0?.currentTeamSize || null,
            team_id: _v0?.teamId || null,
            resource_permission_level: null,
            joined_team_at: _v0?.joinedOn ? new Date(_v0?.joinedOn).getTime() : null
          })
        };
      return {
        ..._v10,
        ..._v11,
        ..._v12,
        ..._v13,
        ..._v14,
        ..._v15
      };
    };
  var _v146 = _v0.i(0),
    _v147 = _v0.i(0);
  let _v148 = ({
    cancelSubscription: _v0,
    notification: _v1,
    uploadQuota: _v2,
    canUsePaymentsService: _v3,
    membership: _v4,
    renewalPrice: _v5,
    renewalPeriodLabel: _v6,
    open: _v7,
    close: _v8,
    cancelRequestPending: _v9,
    teamUser: _v10,
    totalSeats: _v11,
    onBeforeCancel: _v12,
    initialStep: _v13
  }) => {
    let _v14 = (0, _v98.useViewer)(),
      {
        settings: _v15
      } = _v105(),
      _v16 = _v15.cancellation_survey_kind,
      _v17 = _v15.cancellation_offer_enabled,
      _v18 = "fulltext_question" === _v16,
      _v19 = _v15.lapsing_clip_selection_cancellation_ux,
      {
        trackBillingAction: _v20
      } = (0, _v3.useContext)(_v93.ManageTeamAnalytics),
      {
        fetchMembershipInfo: _v21,
        updateMembershipInfo: _v22
      } = (0, _v3.useContext)(_v93.ManageTeamDispatchCtx),
      {
        trackCancelSubscriptionPopupDisplayed: _v23,
        trackCancelSubscriptionPopupDismissed: _v24,
        trackAutoRenewSwitchedOff: _v25,
        trackCancellationSurveyAnswered: _v26,
        trackCancellationFullTextReasonAnswered: _v27,
        trackCancellationBookCallButtonClicked: _v28,
        trackCancellationLapsingClipSelectionDisplayed: _v29,
        trackCancellationLapsingClipSelectionProceeded: _v30,
        trackCancellationLapsingClipSelectionDeselectAllClicked: _v31,
        trackCancellationLapsingClipWarningDisplayed: _v32,
        trackCancellationLapsingClipWarningBackClicked: _v33,
        trackCancellationLapsingClipWarningConfirmed: _v34,
        trackCancellationOfferAccepted: _v35,
        trackCancellationOfferDismissed: _v36
      } = (0, _v22.useBillingTracking)(),
      _v37 = "none" === _v16 ? _v19 ? "lapsingSelection" : "confirm" : "survey",
      _v38 = !!_v4.isImpactedByGermanConsumerLaw,
      [_v39, _v40] = (0, _v3.useState)(_v7),
      [_v41, _v42] = (0, _v3.useState)(_v13 ?? _v37),
      _v43 = (0, _v3.useRef)([]),
      _v44 = _v0 => {
        _v43.current.push(_v41), _v42(_v0);
      },
      [_v45, _v46] = (0, _v3.useState)(null),
      [_v47, _v48] = (0, _v3.useState)(""),
      _v49 = _v4.billingPeriod === _v65.UserPlanType.Year,
      _v50 = (0, _v3.useMemo)(() => (({
        isAnnualPlan: _v0
      }) => {
        let _v1 = [{
          value: "I prefer to manually renew",
          label: (0, _v70.translate)({
            singular: "I prefer to manually renew",
            dictionary: {
              es: {
                singular: "Prefiero renovar manualmente"
              },
              "de-DE": {
                singular: "Ich möchte das Abonnement lieber manuell verlängern"
              },
              "fr-FR": {
                singular: "Je préfère renouveler mon abonnement manuellement"
              },
              "ja-JP": {
                singular: "手動で更新したい"
              },
              "ko-KR": {
                singular: "직접 갱신하는 것을 선호합니다."
              },
              "pt-BR": {
                singular: "Prefiro renovar manualmente"
              },
              "zh-CN": {
                singular: "我更愿意手动续订"
              }
            }
          }),
          response: {
            text: (0, _v70.translate)({
              singular: "We get it—you like being in control. Just a heads up: if your plan lapses, videos over your storage quota may become inaccessible.",
              dictionary: {
                es: {
                  singular: "Lo entendemos: te gusta tener el control. Solo un aviso: si tu plan caduca, los videos que excedan tu cuota de almacenamiento pueden volverse inaccesibles."
                },
                "de-DE": {
                  singular: "Wir verstehen Sie — Sie möchten die Kontrolle behalten. Nur ein Hinweis: Wenn Ihr Plan ausläuft, können Videos, die Ihr Speicherkontingent überschreiten, unzugänglich werden."
                },
                "fr-FR": {
                  singular: "Nous comprenons — vous aimez garder le contrôle. Petit rappel : si votre forfait expire, les vidéos dépassant votre quota de stockage peuvent devenir inaccessibles."
                },
                "ja-JP": {
                  singular: "承知しました — ご自身で管理することを好まれるのですね。念のためお知らせします：プランが期限切れになると、ストレージの上限を超えた動画はアクセスできなくなる可能性があります。"
                },
                "ko-KR": {
                  singular: "이해합니다—통제권을 유지하기를 원하시겠죠. 참고로, 요금제가 만료되면 저장 용량 한도를 초과한 동영상은 접근할 수 없게 될 수 있습니다."
                },
                "pt-BR": {
                  singular: "Entendemos—você gosta de ter controle. Só um aviso: se seu plano expirar, vídeos além da sua cota de armazenamento podem ficar inacessíveis."
                },
                "zh-CN": {
                  singular: "我们理解——您喜欢掌控一切。友情提醒：如果您的计划到期，超出存储限额的视频可能会变得无法访问。"
                }
              }
            }),
            ctas: []
          }
        }, {
          value: "My plan is too expensive",
          label: (0, _v70.translate)({
            singular: "My plan is too expensive",
            dictionary: {
              es: {
                singular: "Mi plan es demasiado costoso"
              },
              "de-DE": {
                singular: "Mein Tarif ist zu teuer"
              },
              "fr-FR": {
                singular: "Mon abonnement est trop cher"
              },
              "ja-JP": {
                singular: "プランが高すぎる"
              },
              "ko-KR": {
                singular: "요금제가 너무 비쌉니다."
              },
              "pt-BR": {
                singular: "Meu plano é muito caro"
              },
              "zh-CN": {
                singular: "我的套餐太贵了"
              }
            }
          }),
          response: {
            text: (0, _v70.translate)({
              singular: "We hear you. We have flexible plans at different price points—let's find one that fits your needs and budget.",
              dictionary: {
                es: {
                  singular: "Te escuchamos. Tenemos planes flexibles en distintos rangos de precio—encuentremos uno que se ajuste a tus necesidades y presupuesto."
                },
                "de-DE": {
                  singular: "Wir hören Sie. Wir haben flexible Pläne zu unterschiedlichen Preisen — lassen Sie uns einen finden, der Ihren Bedürfnissen und Ihrem Budget entspricht."
                },
                "fr-FR": {
                  singular: "Nous vous entendons. Nous proposons des forfaits flexibles à différents niveaux de prix — trouvons celui qui correspond à vos besoins et à votre budget."
                },
                "ja-JP": {
                  singular: "お聞きしました。価格帯の異なる柔軟なプランをご用意しています—ご要望とご予算に合うプランを一緒に見つけましょう。"
                },
                "ko-KR": {
                  singular: "말씀 잘 들었습니다. 당사는 다양한 가격대의 유연한 요금제를 제공하고 있습니다—귀하의 필요와 예산에 맞는 요금제를 찾아보겠습니다."
                },
                "pt-BR": {
                  singular: "Nós ouvimos você. Temos planos flexíveis com diferentes faixas de preço—vamos encontrar um que atenda às suas necessidades e ao seu orçamento."
                },
                "zh-CN": {
                  singular: "我们听到了您的意见。我们提供不同价格的灵活套餐——让我们帮您找到符合需求和预算的方案。"
                }
              }
            }),
            ctas: [{
              label: (0, _v70.translate)({
                singular: "Compare our plans",
                dictionary: {
                  es: {
                    singular: "Compara nuestros planes"
                  },
                  "de-DE": {
                    singular: "Unsere Pläne vergleichen"
                  },
                  "fr-FR": {
                    singular: "Comparer nos forfaits"
                  },
                  "ja-JP": {
                    singular: "プランを比較する"
                  },
                  "ko-KR": {
                    singular: "요금제 비교하기"
                  },
                  "pt-BR": {
                    singular: "Compare nossos planos"
                  },
                  "zh-CN": {
                    singular: "比较我们的计划"
                  }
                }
              }),
              href: "https://vimeo.com/upgrade-plan"
            }]
          }
        }, {
          value: "I don't know if I want to renew yet",
          label: (0, _v70.translate)({
            singular: "I don't know if I want to renew yet",
            dictionary: {
              es: {
                singular: "Aún no sé si quiero renovar"
              },
              "de-DE": {
                singular: "Ich weiß noch nicht, ob ich verlängern möchte"
              },
              "fr-FR": {
                singular: "Je ne sais pas encore si je souhaite renouveler mon abonnement"
              },
              "ja-JP": {
                singular: "まだ更新するかどうか分からない"
              },
              "ko-KR": {
                singular: "아직 갱신하고 싶은지 잘 모르겠습니다."
              },
              "pt-BR": {
                singular: "Ainda não sei se quero renovar"
              },
              "zh-CN": {
                singular: "我不知道是否要续订"
              }
            }
          }),
          response: {
            text: (0, _v70.translate)({
              singular: "No pressure! Just a heads up: if your plan lapses, videos over your storage quota may become inaccessible.",
              dictionary: {
                es: {
                  singular: "Sin presiones. Solo un aviso: si tu plan caduca, los videos que excedan tu cuota de almacenamiento pueden volverse inaccesibles."
                },
                "de-DE": {
                  singular: "Kein Druck! Nur ein Hinweis: Wenn Ihr Plan ausläuft, können Videos, die Ihr Speicherkontingent überschreiten, unzugänglich werden."
                },
                "fr-FR": {
                  singular: "Aucune pression ! Petit rappel : si votre forfait expire, les vidéos dépassant votre quota de stockage peuvent devenir inaccessibles."
                },
                "ja-JP": {
                  singular: "ご安心ください！念のためお知らせします：プランが期限切れになると、ストレージ上限を超えた動画はアクセス不可になる可能性があります。"
                },
                "ko-KR": {
                  singular: "강요는 아닙니다! 참고로, 요금제가 만료되면 저장 용량 한도를 초과한 동영상은 접근할 수 없게 될 수 있습니다."
                },
                "pt-BR": {
                  singular: "Sem pressão! Só um aviso: se seu plano expirar, vídeos além da sua cota de armazenamento podem ficar inacessíveis."
                },
                "zh-CN": {
                  singular: "不必担心！友情提醒：如果您的计划到期，超出存储限额的视频可能会变得无法访问。"
                }
              }
            }),
            ctas: [{
              label: (0, _v70.translate)({
                singular: "Learn about your membership options",
                dictionary: {
                  es: {
                    singular: "Conoce tus opciones de membresía"
                  },
                  "de-DE": {
                    singular: "Erfahren Sie mehr über Ihre Mitgliedschaftsoptionen"
                  },
                  "fr-FR": {
                    singular: "En savoir plus sur vos options d'abonnement"
                  },
                  "ja-JP": {
                    singular: "メンバーシップのオプションについて学ぶ"
                  },
                  "ko-KR": {
                    singular: "멤버십 옵션 알아보기"
                  },
                  "pt-BR": {
                    singular: "Saiba mais sobre suas opções de assinatura"
                  },
                  "zh-CN": {
                    singular: "了解您的会员选项"
                  }
                }
              }),
              href: "https://vimeo.zendesk.com/hc/en-us/articles/224978548-How-to-renew-or-upgrade-your-account"
            }]
          }
        }, {
          value: "My videos aren't getting enough views, likes or comments",
          label: (0, _v70.translate)({
            singular: "My videos aren't getting enough views, likes or comments",
            dictionary: {
              es: {
                singular: "Mis videos no obtienen las suficientes vistas, Me gusta o comentarios"
              },
              "de-DE": {
                singular: "Meine Videos werden nicht genug gesehen oder bekommen nicht genug Likes oder Kommentare."
              },
              "fr-FR": {
                singular: "Mes vidéos n'obtiennent pas assez de vues, de mentions J'aime ou de commentaires"
              },
              "ja-JP": {
                singular: "動画に十分な視聴数、いいね、コメントがつかない"
              },
              "ko-KR": {
                singular: "동영상에 조회수가 낮거나 좋아하기 또는 코멘트가 충분하지 않습니다."
              },
              "pt-BR": {
                singular: "Meus vídeos não estão tendo muitas visualizações, curtidas ou comentários"
              },
              "zh-CN": {
                singular: "我的视频的观看次数、点赞或评论不够多"
              }
            }
          }),
          response: {
            text: (0, _v70.translate)({
              singular: "Let's fix that. Our marketing tools and social publishing features can help you reach a wider audience.",
              dictionary: {
                es: {
                  singular: "Solucionémoslo. Nuestras herramientas de marketing y funciones de publicación en redes sociales pueden ayudarte a llegar a una audiencia más amplia."
                },
                "de-DE": {
                  singular: "Lassen Sie uns das beheben. Unsere Marketing-Tools und Funktionen zur Veröffentlichung in sozialen Netzwerken können Ihnen helfen, ein größeres Publikum zu erreichen."
                },
                "fr-FR": {
                  singular: "Remédions à cela. Nos outils marketing et nos fonctionnalités de publication sur les réseaux sociaux peuvent vous aider à atteindre un public plus large."
                },
                "ja-JP": {
                  singular: "問題を解決しましょう。弊社のマーケティングツールとソーシャル公開機能が、より多くの視聴者に届く手助けをします。"
                },
                "ko-KR": {
                  singular: "문제를 해결해드리겠습니다. 당사의 마케팅 도구와 소셜 게시 기능을 통해 더 많은 시청자에게 도달할 수 있습니다."
                },
                "pt-BR": {
                  singular: "Vamos resolver isso. Nossas ferramentas de marketing e recursos de publicação em redes sociais podem ajudar você a alcançar um público maior."
                },
                "zh-CN": {
                  singular: "让我们来解决这个问题。我们的营销工具和社交发布功能可以帮助您接触更广泛的受众。"
                }
              }
            }),
            ctas: [{
              label: (0, _v70.translate)({
                singular: "Learn how to publish to social",
                dictionary: {
                  es: {
                    singular: "Aprende a publicar en redes sociales"
                  },
                  "de-DE": {
                    singular: "Erfahren Sie, wie Sie auf Social Media veröffentlichen"
                  },
                  "fr-FR": {
                    singular: "Découvrez comment publier sur les réseaux sociaux"
                  },
                  "ja-JP": {
                    singular: "ソーシャルへ公開する方法を学ぶ"
                  },
                  "ko-KR": {
                    singular: "소셜에 게시하는 방법 알아보기"
                  },
                  "pt-BR": {
                    singular: "Saiba como publicar nas redes sociais"
                  },
                  "zh-CN": {
                    singular: "了解如何发布到社交平台"
                  }
                }
              }),
              href: "https://vimeo.zendesk.com/hc/en-us/articles/115014756727-Publish-to-social"
            }, {
              label: (0, _v70.translate)({
                singular: "Boost video SEO",
                dictionary: {
                  es: {
                    singular: "Impulsa el SEO de tus videos"
                  },
                  "de-DE": {
                    singular: "Video-SEO verbessern"
                  },
                  "fr-FR": {
                    singular: "Améliorer le référencement de vos vidéos"
                  },
                  "ja-JP": {
                    singular: "動画のSEOを強化"
                  },
                  "ko-KR": {
                    singular: "동영상 SEO 향상"
                  },
                  "pt-BR": {
                    singular: "Impulsione o SEO de vídeo"
                  },
                  "zh-CN": {
                    singular: "提升视频 SEO"
                  }
                }
              }),
              href: "https://vimeo.com/features/video-seo"
            }]
          }
        }, {
          value: "The product is hard to use",
          label: (0, _v70.translate)({
            singular: "The product is hard to use",
            dictionary: {
              es: {
                singular: "El producto es difícil de usar"
              },
              "de-DE": {
                singular: "Das Produkt ist schwer zu bedienen"
              },
              "fr-FR": {
                singular: "Le produit est difficile à utiliser"
              },
              "ja-JP": {
                singular: "製品が使いにくい"
              },
              "ko-KR": {
                singular: "제품 사용이 어렵습니다."
              },
              "pt-BR": {
                singular: "O produto é difícil de usar"
              },
              "zh-CN": {
                singular: "这个产品很难用"
              }
            }
          }),
          response: {
            text: (0, _v70.translate)({
              singular: "We hear you. Speak with our Product team, get a $50 gift card, and be up and running in 15 minutes.",
              dictionary: {
                es: {
                  singular: "Te escuchamos. Habla con nuestro equipo de Producto, recibe una tarjeta de regalo de $50 y estarás operativo en 15 minutos."
                },
                "de-DE": {
                  singular: "Wir hören Ihnen zu. Sprechen Sie mit unserem Produktteam, erhalten Sie eine Geschenkkarte im Wert von $50 und sind in 15 Minuten startklar."
                },
                "fr-FR": {
                  singular: "Nous vous entendons. Parlez avec notre équipe Produit, recevez une carte-cadeau de $50 et soyez opérationnel en 15 minutes."
                },
                "ja-JP": {
                  singular: "ご意見を承りました。プロダクトチームとお話しいただくと、$50のギフトカードを受け取り、15分でご利用を開始できます。"
                },
                "ko-KR": {
                  singular: "말씀 잘 들었습니다. 제품팀과 상담하시고 $50 기프트 카드를 받으시면 15분 안에 바로 이용을 시작하실 수 있습니다."
                },
                "pt-BR": {
                  singular: "Ouvimos você. Converse com nossa equipe de Produto, ganhe um cartão-presente de $50 e esteja pronto para usar em 15 minutos."
                },
                "zh-CN": {
                  singular: "我们已听到您的反馈。与我们的产品团队沟通，获得一张价值 $50 的礼品卡，并在 15 分钟内完成设置并投入使用。"
                }
              }
            }),
            ctas: [{
              label: (0, _v70.translate)({
                singular: "Speak to our team",
                dictionary: {
                  es: {
                    singular: "Habla con nuestro equipo"
                  },
                  "de-DE": {
                    singular: "Sprechen Sie mit unserem Team"
                  },
                  "fr-FR": {
                    singular: "Contactez notre équipe"
                  },
                  "ja-JP": {
                    singular: "当社チームに相談する"
                  },
                  "ko-KR": {
                    singular: "팀에 문의하기"
                  },
                  "pt-BR": {
                    singular: "Fale com nossa equipe"
                  },
                  "zh-CN": {
                    singular: "联系我们的团队"
                  }
                }
              }),
              href: "https://ms732111.typeform.com/to/USX08yFe"
            }]
          }
        }, {
          value: "I don't use my subscription enough",
          label: (0, _v70.translate)({
            singular: "I don't use my subscription enough",
            dictionary: {
              es: {
                singular: "No uso lo suficiente mi suscripción"
              },
              "de-DE": {
                singular: "Ich nutze mein Abonnement nicht oft genug"
              },
              "fr-FR": {
                singular: "Je n'utilise pas assez mon abonnement"
              },
              "ja-JP": {
                singular: "サブスクリプションを十分に利用していない"
              },
              "ko-KR": {
                singular: "구독을 자주 안 씁니다."
              },
              "pt-BR": {
                singular: "Não uso minha assinatura o suficiente"
              },
              "zh-CN": {
                singular: "我没有充分利用我的订阅"
              }
            }
          }),
          response: {
            text: (0, _v70.translate)({
              singular: "You might be surprised what's included. From powerful editing to screen recording and social publishing—there's a lot to explore.",
              dictionary: {
                es: {
                  singular: "Podrías sorprenderte con lo que incluye. Desde edición potente hasta grabación de pantalla y publicación en redes sociales—hay mucho por descubrir."
                },
                "de-DE": {
                  singular: "Sie werden überrascht sein, was alles enthalten ist. Von leistungsstarken Bearbeitungstools über Bildschirmaufnahmen bis hin zur Veröffentlichung in sozialen Netzwerken — es gibt viel zu entdecken."
                },
                "fr-FR": {
                  singular: "Vous pourriez être surpris de ce qui est inclus. Des outils d'édition puissants à l'enregistrement d'écran et à la publication sur les réseaux sociaux — il y a beaucoup à découvrir."
                },
                "ja-JP": {
                  singular: "含まれている内容に驚くかもしれません。強力な編集機能から画面録画、ソーシャル公開まで—探るべき機能がたくさんあります。"
                },
                "ko-KR": {
                  singular: "포함된 항목에 놀라실 수도 있습니다. 강력한 편집 기능부터 화면 녹화 및 소셜 게시 기능까지—살펴볼 것이 많습니다."
                },
                "pt-BR": {
                  singular: "Você pode se surpreender com o que está incluído. Desde edição poderosa até gravação de tela e publicação em redes sociais—há muito o que explorar."
                },
                "zh-CN": {
                  singular: "您可能会对包含的功能感到惊喜。从强大的编辑到屏幕录制和社交发布——有很多值得探索的功能。"
                }
              }
            }),
            ctas: [{
              label: (0, _v70.translate)({
                singular: "See all features",
                dictionary: {
                  es: {
                    singular: "Ver todas las funciones"
                  },
                  "de-DE": {
                    singular: "Alle Funktionen anzeigen"
                  },
                  "fr-FR": {
                    singular: "Voir toutes les fonctionnalités"
                  },
                  "ja-JP": {
                    singular: "すべての機能を見る"
                  },
                  "ko-KR": {
                    singular: "모든 기능 보기"
                  },
                  "pt-BR": {
                    singular: "Ver todos os recursos"
                  },
                  "zh-CN": {
                    singular: "查看所有功能"
                  }
                }
              }),
              href: "https://vimeo.com/features"
            }]
          }
        }, {
          value: "I found an alternative solution",
          label: (0, _v70.translate)({
            singular: "I found an alternative solution",
            dictionary: {
              es: {
                singular: "He encontrado una solución alternativa"
              },
              "de-DE": {
                singular: "Ich habe eine alternative Lösung gefunden"
              },
              "fr-FR": {
                singular: "J'ai trouvé une autre solution"
              },
              "ja-JP": {
                singular: "代わりのソリューションを見つけた"
              },
              "ko-KR": {
                singular: "대체 솔루션을 찾았습니다."
              },
              "pt-BR": {
                singular: "Encontrei outra solução"
              },
              "zh-CN": {
                singular: "我找到了一个替代方案"
              }
            }
          }),
          response: {
            text: (0, _v70.translate)({
              singular: "We hear you. Can we get this right for you? Speak with our Product team and earn a $50 gift card.",
              dictionary: {
                es: {
                  singular: "Te escuchamos. ¿Podemos resolver esto para ti? Habla con nuestro equipo de Producto y recibe una tarjeta de regalo de $50."
                },
                "de-DE": {
                  singular: "Wir hören Ihnen zu. Können wir das für Sie richtig hinbekommen? Sprechen Sie mit unserem Produktteam und erhalten Sie eine Geschenkkarte im Wert von $50."
                },
                "fr-FR": {
                  singular: "Nous vous entendons. Pouvons-nous régler cela pour vous ? Parlez avec notre équipe Produit et gagnez une carte-cadeau de $50."
                },
                "ja-JP": {
                  singular: "ご意見を承りました。こちらで適切に対応させていただけますか？プロダクトチームとお話しいただくと、$50のギフトカードを差し上げます。"
                },
                "ko-KR": {
                  singular: "말씀 잘 들었습니다. 원하시는 대로 처리해 드릴까요? 제품팀과 상담하시고 $50 기프트 카드를 받으세요."
                },
                "pt-BR": {
                  singular: "Ouvimos você. Podemos acertar isso para você? Converse com nossa equipe de Produto e ganhe um cartão-presente de $50."
                },
                "zh-CN": {
                  singular: "我们已听到您的反馈。我们能为您把问题处理好吗？与我们的产品团队沟通，即可获得一张价值 $50 的礼品卡。"
                }
              }
            }),
            ctas: [{
              label: (0, _v70.translate)({
                singular: "Speak to our team",
                dictionary: {
                  es: {
                    singular: "Habla con nuestro equipo"
                  },
                  "de-DE": {
                    singular: "Sprechen Sie mit unserem Team"
                  },
                  "fr-FR": {
                    singular: "Contactez notre équipe"
                  },
                  "ja-JP": {
                    singular: "当社チームに相談する"
                  },
                  "ko-KR": {
                    singular: "팀에 문의하기"
                  },
                  "pt-BR": {
                    singular: "Fale com nossa equipe"
                  },
                  "zh-CN": {
                    singular: "联系我们的团队"
                  }
                }
              }),
              href: "https://ms732111.typeform.com/to/c9GHQ0Sd"
            }]
          }
        }, {
          value: "Other",
          label: (0, _v70.translate)({
            singular: "Other",
            dictionary: {
              es: {
                singular: "Otro"
              },
              "de-DE": {
                singular: "Sonstiges"
              },
              "fr-FR": {
                singular: "Autre"
              },
              "ja-JP": {
                singular: "その他"
              },
              "ko-KR": {
                singular: "기타"
              },
              "pt-BR": {
                singular: "Outro"
              },
              "zh-CN": {
                singular: "其他"
              }
            }
          })
        }];
        _v0 && _v1.push({
          value: "I plan to continue with a monthly subscription",
          label: (0, _v70.translate)({
            singular: "I plan to continue with a monthly subscription",
            dictionary: {
              es: {
                singular: "Tengo la intención de continuar con una suscripción mensual"
              },
              "de-DE": {
                singular: "Ich plane, mit einem Monatsabonnement fortzufahren"
              },
              "fr-FR": {
                singular: "Je prévois de continuer avec un abonnement mensuel"
              },
              "ja-JP": {
                singular: "月間サブスクリプションを継続する予定だ"
              },
              "ko-KR": {
                singular: "월간 구독으로 계속 이용할 계획입니다."
              },
              "pt-BR": {
                singular: "Pretendo continuar com uma assinatura mensal"
              },
              "zh-CN": {
                singular: "我打算继续按月订阅"
              }
            }
          }),
          response: {
            text: (0, _v70.translate)({
              singular: "Before you switch, know that annual saves you up to 40%—but monthly is here whenever you need it.",
              dictionary: {
                es: {
                  singular: "Antes de cambiar, ten en cuenta que el plan anual te ahorra hasta un 40%—pero el mensual está disponible cuando lo necesites."
                },
                "de-DE": {
                  singular: "Bevor Sie wechseln: Ein Jahresabo spart Ihnen bis zu 40 % — das Monatsabo steht Ihnen jedoch jederzeit zur Verfügung."
                },
                "fr-FR": {
                  singular: "Avant de changer, sachez que l'abonnement annuel vous permet d'économiser jusqu'à 40 % — mais l'option mensuelle est disponible quand vous en avez besoin."
                },
                "ja-JP": {
                  singular: "変更する前にご確認ください：年払いにすると最大40%節約できます—ただし、月払いは必要なときにいつでもご利用いただけます。"
                },
                "ko-KR": {
                  singular: "전환하기 전에, 연간 요금제는 최대 40%까지 절약된다는 점을 참고하세요—필요할 때는 월별 요금제가 항상 제공됩니다."
                },
                "pt-BR": {
                  singular: "Antes de mudar, saiba que o plano anual oferece até 40% de economia—mas o mensal está disponível sempre que você precisar."
                },
                "zh-CN": {
                  singular: "在您切换之前，请注意年度订阅最多可为您节省 40%——但按月订阅随时可用。"
                }
              }
            }),
            ctas: [{
              label: (0, _v70.translate)({
                singular: "Learn about your membership options",
                dictionary: {
                  es: {
                    singular: "Conoce tus opciones de membresía"
                  },
                  "de-DE": {
                    singular: "Erfahren Sie mehr über Ihre Mitgliedschaftsoptionen"
                  },
                  "fr-FR": {
                    singular: "En savoir plus sur vos options d'abonnement"
                  },
                  "ja-JP": {
                    singular: "メンバーシップのオプションについて学ぶ"
                  },
                  "ko-KR": {
                    singular: "멤버십 옵션 알아보기"
                  },
                  "pt-BR": {
                    singular: "Saiba mais sobre suas opções de assinatura"
                  },
                  "zh-CN": {
                    singular: "了解您的会员选项"
                  }
                }
              }),
              href: "https://vimeo.zendesk.com/hc/en-us/articles/224978548-How-to-renew-or-upgrade-your-account"
            }]
          }
        });
        let _v2 = _v1.find(_v0 => _v0.value === _v134),
          _v3 = (_v0 => {
            let _v1 = [..._v0];
            for (let _v0 = _v1.length - 1; _v0 > 0; _v0 -= 1) {
              let _v0 = Math.floor(Math.random() * (_v0 + 1));
              [_v1[_v0], _v1[_v0]] = [_v1[_v0], _v1[_v0]];
            }
            return _v1;
          })(_v1.filter(_v0 => _v0.value !== _v134));
        return _v2 && _v3.push(_v2), _v3;
      })({
        isAnnualPlan: _v49
      }), [_v49]),
      _v51 = (0, _v3.useMemo)(() => _v145(_v10), [_v10]),
      _v52 = _v10?.ownerId ?? _v14?.user?.id,
      [_v53, _v54] = (0, _v3.useState)(null),
      [_v55, _v56] = (0, _v3.useState)(!1),
      {
        data: _v57,
        isLoading: _v58
      } = _v108(() => _v52 ? {
        where: {
          userId: _v52
        },
        select: ["frozenVideosCount", "frozenVideosPreview", "storageLimitBytes", "storageUsedBytes", "unlistedVideosCount", "unlistedVideosPreview"]
      } : null),
      _v59 = _v19 && (_v57?.storageLimitBytes ?? 0) > 0 && (_v57?.frozenVideosCount ?? 0) + (_v57?.unlistedVideosCount ?? 0) > 0,
      {
        lapsingSelectionVideos: _v60,
        lapsingStorageLimitBytes: _v61,
        selectedLapsingStorageBytes: _v62,
        isLapsingSelectionVideosLoading: _v63,
        isSelectedLapsingStorageOverLimit: _v64,
        shouldShowLapsingSelectionFlow: _v65,
        resetDeselectedLapsingVideoIds: _v66,
        toggleLapsingVideo: _v67,
        deselectAllLapsingVideos: _v68
      } = (({
        ownerId: _v0,
        shouldAttemptLapsingSelectionFlow: _v1,
        storageLimitBytes: _v2
      }) => {
        let [_v3, _v4] = (0, _v3.useState)(() => new Set()),
          {
            data: _v5,
            isValidating: _v6,
            size: _v7,
            setSize: _v8
          } = (0, _v137.useGetUserVideosInfinite)(() => _v0 && _v1 ? {
            where: {
              userId: _v0
            },
            query: {
              perPage: 100,
              sort: "date",
              direction: "desc",
              filter: "nolive"
            },
            select: ["uri", "name", "pictures.sizes.link", "pictures.sizes.width", "filesSize.totalSize"]
          } : null),
          _v9 = (_v5?.at(-1)?.paging.next ?? null) !== null,
          _v10 = _v1 && (!_v5 || 0 === _v5.length || _v9);
        (0, _v3.useEffect)(() => {
          _v1 && _v9 && !_v6 && _v8(_v7 + 1);
        }, [_v9, _v6, _v7, _v8, _v1]);
        let _v11 = (0, _v3.useMemo)(() => _v5?.flatMap(_v0 => _v0.data.map(_v0 => {
            var _v1;
            return {
              uri: _v0.uri,
              title: _v0.name,
              thumbnail: (_v1 = _v0.pictures?.sizes) && 0 !== _v1.length ? [..._v1].sort((_v0, _v1) => _v1.width - _v0.width)[0]?.link ?? null : null,
              sizeBytes: _v0.filesSize?.totalSize ?? 0
            };
          })) ?? [], [_v5]),
          _v12 = (0, _v3.useMemo)(() => 0 === _v11.length ? [] : _v11.filter((_v0, _v1, _v2) => _v2.findIndex(_v0 => _v0.uri === _v0.uri) === _v1).map(_v0 => ({
            ..._v0,
            id: _v0.uri,
            selected: !0
          })), [_v11]),
          _v13 = (0, _v3.useMemo)(() => _v12.map(_v0 => ({
            ..._v0,
            selected: !_v3.has(_v0.id)
          })), [_v12, _v3]),
          _v14 = _v1 && (_v10 || _v12.length > 0),
          _v15 = (0, _v3.useMemo)(() => _v13.filter(_v0 => _v0.selected).reduce((_v0, _v1) => _v0 + _v1.sizeBytes, 0), [_v13]),
          _v16 = (0, _v3.useCallback)(() => {
            _v4(new Set());
          }, []);
        return {
          lapsingSelectionVideos: _v13,
          lapsingStorageLimitBytes: _v2,
          selectedLapsingStorageBytes: _v15,
          isLapsingSelectionVideosLoading: _v10,
          isSelectedLapsingStorageOverLimit: _v2 > 0 && _v15 > _v2,
          shouldShowLapsingSelectionFlow: _v14,
          resetDeselectedLapsingVideoIds: _v16,
          toggleLapsingVideo: (0, _v3.useCallback)(_v0 => {
            _v4(_v0 => {
              let _v1 = new Set(_v0);
              return _v1.has(_v0) ? _v1.delete(_v0) : _v1.add(_v0), _v1;
            });
          }, []),
          deselectAllLapsingVideos: (0, _v3.useCallback)(() => {
            _v4(new Set(_v12.map(_v0 => _v0.id)));
          }, [_v12])
        };
      })({
        ownerId: _v52,
        shouldAttemptLapsingSelectionFlow: _v59,
        storageLimitBytes: _v57?.storageLimitBytes ?? 0
      }),
      _v69 = _v58 || _v59 && _v63,
      _v70 = "lapsingSelection" === _v41 && _v65 && !_v69,
      _v71 = _v2?.space?.max || 0,
      _v72 = _v2?.space?.unit === "video_size" ? "video_size" : "video_count",
      _v73 = (0, _v119.getDaysBetween)(new Date(), _v4.renewalDate),
      _v74 = _v4.tier ? _v119.tiers[_v4.tier] ?? _v4.tier : (0, _v70.translate)({
        singular: "plan",
        dictionary: {
          "de-DE": {
            singular: "Plan"
          },
          "fr-FR": {
            singular: "forfait"
          },
          "ja-JP": {
            singular: "プラン"
          },
          "ko-KR": {
            singular: "요금제"
          },
          "pt-BR": {
            singular: "plano"
          },
          "zh-CN": {
            singular: "计划"
          }
        }
      }),
      _v75 = (0, _v70.translate)({
        singular: "You still have {DAYS} day on the {PLAN} plan. Are you sure you want to cancel?",
        plural: "You still have {DAYS} days on the {PLAN} plan. Are you sure you want to cancel?",
        count: _v73,
        replacements: {
          DAYS: (0, _v119.formatNumber)(_v73),
          PLAN: _v74
        },
        dictionary: {
          es: {
            singular: "Te queda {DAYS} día en el plan {PLAN}. ¿Estás seguro de que quieres cancelar?",
            plural: "Te quedan {DAYS} días en el plan {PLAN}. ¿Estás seguro de que quieres cancelar?"
          },
          "de-DE": {
            singular: "Sie haben noch {DAYS} Tag im {PLAN}-Plan. Sind Sie sicher, dass Sie kündigen möchten?",
            plural: "Sie haben noch {DAYS} Tage im {PLAN}-Plan. Sind Sie sicher, dass Sie kündigen möchten?"
          },
          "fr-FR": {
            singular: "Il vous reste {DAYS} jour sur le forfait {PLAN}. Êtes-vous sûr de vouloir annuler ?",
            plural: "Il vous reste {DAYS} jours sur le forfait {PLAN}. Êtes-vous sûr de vouloir annuler ?"
          },
          "ja-JP": {
            singular: "{PLAN}プランはあと{DAYS}日残っています。解約してもよろしいですか？",
            plural: "{PLAN}プランはあと{DAYS}日残っています。解約してもよろしいですか？"
          },
          "ko-KR": {
            singular: "{PLAN} 요금제에 {DAYS}일이 남아 있습니다. 정말 취소하시겠습니까?",
            plural: "{PLAN} 요금제에 {DAYS}일이 남아 있습니다. 정말 취소하시겠습니까?"
          },
          "pt-BR": {
            singular: "Você ainda tem {DAYS} dia no plano {PLAN}. Tem certeza de que deseja cancelar?",
            plural: "Você ainda tem {DAYS} dias no plano {PLAN}. Tem certeza de que deseja cancelar?"
          },
          "zh-CN": {
            singular: "您在 {PLAN} 计划上还剩 {DAYS} 天。您确定要取消吗？",
            plural: "您在 {PLAN} 计划上还剩 {DAYS} 天。您确定要取消吗？"
          }
        }
      }),
      _v76 = "video_size" === _v72 ? (0, _v70.translate)({
        singular: "{QUOTA_MAX} of storage",
        replacements: {
          QUOTA_MAX: (0, _v62.formatBytes)(_v71, !1)
        },
        dictionary: {
          es: {
            singular: "{QUOTA_MAX} de almacenamiento"
          },
          "de-DE": {
            singular: "{QUOTA_MAX} Speicherplatz"
          },
          "fr-FR": {
            singular: "{QUOTA_MAX} d'espace de stockage"
          },
          "ja-JP": {
            singular: "{QUOTA_MAX}のストレージ"
          },
          "ko-KR": {
            singular: "{QUOTA_MAX} 저장 공간"
          },
          "pt-BR": {
            singular: "{QUOTA_MAX} de armazenamento"
          },
          "zh-CN": {
            singular: "{QUOTA_MAX} 的存储空间"
          }
        }
      }) : (0, _v70.translate)({
        singular: "{QUOTA_MAX} videos of storage",
        replacements: {
          QUOTA_MAX: (0, _v119.formatNumber)(_v71)
        },
        dictionary: {
          es: {
            singular: "{QUOTA_MAX} de almacenamiento de video"
          },
          "de-DE": {
            singular: "{QUOTA_MAX} Videospeicher"
          },
          "fr-FR": {
            singular: "{QUOTA_MAX} vidéos stockées"
          },
          "ja-JP": {
            singular: "{QUOTA_MAX}本の動画のストレージ"
          },
          "ko-KR": {
            singular: "{QUOTA_MAX}개 동영상 저장 공간"
          },
          "pt-BR": {
            singular: "{QUOTA_MAX} vídeos de armazenamento"
          },
          "zh-CN": {
            singular: "{QUOTA_MAX} 个视频的存储空间"
          }
        }
      }),
      _v77 = (0, _v70.translate)({
        singular: "{SEATS} seats",
        replacements: {
          SEATS: (0, _v119.formatNumber)(Math.max(_v11, 1))
        },
        dictionary: {
          es: {
            singular: "{SEATS} plazas"
          },
          "de-DE": {
            singular: "{SEATS} Plätze"
          },
          "fr-FR": {
            singular: "{SEATS} places"
          },
          "ja-JP": {
            singular: "{SEATS}席"
          },
          "ko-KR": {
            singular: "{SEATS} 좌석"
          },
          "pt-BR": {
            singular: "{SEATS} assentos"
          },
          "zh-CN": {
            singular: "{SEATS} 个席位"
          }
        }
      }),
      _v78 = (0, _v3.useMemo)(() => [_v76, _v77, ...(_v66.cancelFeatureList[_v72][_v4.tier ?? "starter"] ?? [])], [_v72, _v4.tier, _v76, _v77]),
      _v79 = _v4.tier,
      _v80 = _v4.billingPeriod === _v65.UserPlanType.Year ? "annual" : "monthly",
      _v81 = (0, _v3.useCallback)(async () => {
        if (!_v14 || !_v52) return void Promise.resolve(_v21());
        try {
          let _v0 = await (0, _v147.requestMembershipInfo)(_v14, _v52);
          return _v22(_v0), _v0;
        } catch {
          Promise.resolve(_v21());
          return;
        }
      }, [_v21, _v52, _v22, _v14]),
      _v82 = (0, _v3.useRef)(!1),
      _v83 = (0, _v3.useRef)(!1);
    (0, _v3.useEffect)(() => {
      if (_v9 && !_v82.current) {
        _v82.current = !0, _v83.current = !1;
        return;
      }
      _v9 || !_v82.current || _v83.current || (_v82.current = !1, _v83.current = !0, (async () => {
        _v1({
          canShow: !0,
          type: "primary",
          text: _v66.T.SubscriptionCanceled
        });
        let _v0 = await _v81();
        if (!_v38 && _v17 && _v3 && _v0?.subscriptionId && _v0?.rejoinOfferEligible) {
          _v54(null), _v42("offer");
          return;
        }
        _v40(!1), _v8();
      })());
    }, [_v9, _v1, _v8, _v17, _v3, _v21, _v81, _v38]);
    let _v84 = (0, _v3.useRef)(!1);
    (0, _v3.useEffect)(() => {
      _v39 && !_v84.current && (_v20({
        action_type: _v64.BillingActionTypes.LAND,
        location: _v64.BillingActionLocations.CANCEL_SUBSCRIPTION_MODAL
      }), _v23({
        tier: _v79,
        periodicity: _v80
      }), _v84.current = !0), _v39 || (_v84.current = !1);
    }, [_v39, _v20, _v23, _v79, _v80]);
    let _v85 = (0, _v3.useRef)(!1);
    (0, _v3.useEffect)(() => {
      _v39 && "survey" === _v41 && !_v85.current && ((0, _v146.sendBpEventWithContexts)("vimeo.cancel_survey_impression", _v51, 1, {
        subscription_type: _v4.tier,
        is_trial: _v4.isFreeTrial,
        billing_period: _v4.billingPeriod
      }), _v85.current = !0);
    }, [_v39, _v41, _v51, _v4]), (0, _v3.useEffect)(() => {
      "lapsingSelection" !== _v41 || _v69 || _v65 || _v42("confirm");
    }, [_v41, _v69, _v65]);
    let _v86 = (0, _v3.useRef)(!1);
    (0, _v3.useEffect)(() => {
      _v39 && _v70 && !_v86.current && (_v29({
        tier: _v79,
        periodicity: _v80
      }), _v86.current = !0), _v70 || (_v86.current = !1);
    }, [_v39, _v70, _v79, _v80, _v29]);
    let _v87 = (0, _v3.useRef)(!1);
    (0, _v3.useEffect)(() => {
      _v39 && "lapsingWarning" === _v41 && !_v87.current && (_v32({
        tier: _v79,
        periodicity: _v80
      }), _v87.current = !0), "lapsingWarning" !== _v41 && (_v87.current = !1);
    }, [_v39, _v41, _v79, _v80, _v32]);
    let _v88 = _v0 => {
        _v20({
          action_type: _v64.BillingActionTypes.CLICK,
          location: _v0
        });
      },
      _v89 = ({
        trackPopupDismissed: _v0 = !0
      } = {}) => {
        _v0 && _v24({
          tier: _v79,
          periodicity: _v80
        }), _v40(!1), _v8();
      },
      _v90 = async () => {
        if (!_v55) {
          if (_v35({
            tier: _v79,
            periodicity: _v80
          }), _v54(null), !_v14 || !_v4.subscriptionId) return void _v1({
            canShow: !0,
            type: "negative",
            text: _v66.T.SomethingWentWrong
          });
          _v56(!0);
          try {
            await (0, _v147.requestAcceptRejoinOffer)(_v14, _v4.subscriptionId), await _v81(), _v1({
              canShow: !0,
              type: "primary",
              text: _v66.T.CancellationOfferAcceptedSuccess
            }), _v40(!1), _v8();
          } catch {
            let _v0 = await _v81();
            _v0?.hasAutorenew || _v0?.rejoinOfferEligible === !1 ? (_v1({
              canShow: !0,
              type: "negative",
              text: _v66.T.CancellationOfferAcceptedError
            }), _v40(!1), _v8()) : _v54(_v66.T.CancellationOfferAcceptedError);
          } finally {
            _v56(!1);
          }
        }
      },
      _v91 = () => {
        let _v0 = _v47.trim();
        if (_v18 ? "" !== _v0 && _v27({
          tier: _v79,
          periodicity: _v80,
          answer: _v0
        }) : _v45 && (_v26({
          tier: _v79,
          periodicity: _v80,
          answer: _v45
        }), (0, _v146.sendBpEventWithContexts)("vimeo.cancel_survey_submission", _v51, 1, {
          subscription_type: _v4.tier,
          is_trial: _v4.isFreeTrial,
          billing_period: _v4.billingPeriod,
          selected_feedback: _v45 ?? "",
          more_context: ""
        })), _v19) {
          _v66(), _v44("lapsingSelection");
          return;
        }
        _v44("confirm");
      },
      _v92 = () => {
        _v88("optout_modal_nevermind_button"), _v89();
      },
      _v93 = () => {
        let _v0 = _v43.current.pop();
        _v0 ? _v42(_v0) : _v92();
      },
      _v94 = (0, _v119.formatDate)(_v4.renewalDate);
    return (0, _v1.jsxs)(_v86.Modal, {
      isOpen: _v39,
      onClose: () => {
        "offer" === _v41 && _v55 || (_v88("optout_modal_close_button"), _v89());
      },
      size: ["full", "md"],
      scrollBehavior: "inside",
      closeOnOverlayClick: !1,
      closeOnEsc: !1,
      children: [(0, _v1.jsx)(_v87.ModalOverlay, {}), (0, _v1.jsx)(_v88.ModalContent, {
        containerProps: {
          padding: {
            base: "0 !important"
          }
        },
        maxW: {
          base: "100vw",
          md: "lapsingWarning" === _v41 ? "480px" : "560px"
        },
        width: {
          base: "100vw",
          md: "lapsingWarning" === _v41 ? "480px" : "560px"
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
          md: "90vh"
        },
        borderRadius: {
          base: "0",
          md: "16px"
        },
        margin: {
          base: "0",
          md: "auto"
        },
        children: "survey" === _v41 ? _v18 ? (0, _v1.jsx)(_v129, {
          moreContext: _v47,
          onMoreContextChange: _v48,
          onContinue: _v91,
          onBookCallClicked: () => {
            _v28({
              tier: _v79,
              periodicity: _v80
            }), window.open("https://ms732111.typeform.com/to/USX08yFe", "_blank", "noopener,noreferrer"), _v40(!1), _v8();
          },
          onBack: _v93
        }) : (0, _v1.jsx)(_v136, {
          options: _v50,
          selectedOption: _v45,
          onSelectOption: _v46,
          onContinue: _v91,
          onKeepPlan: _v92,
          onBack: _v93
        }) : "lapsingSelection" === _v41 ? (0, _v1.jsx)(_v133, {
          videos: _v60,
          selectedStorageBytes: _v62,
          storageLimitBytes: _v61,
          isLoadingVideos: _v69,
          onToggleVideo: _v67,
          onDeselectAll: () => {
            _v31({
              tier: _v79,
              periodicity: _v80
            }), _v68();
          },
          onKeepPlan: _v92,
          onContinue: () => {
            if (!_v63) {
              if (_v30({
                tier: _v79,
                periodicity: _v80,
                isOverLimit: _v64
              }), _v64) return void _v44("lapsingWarning");
              _v44("confirm");
            }
          },
          onBack: _v93
        }) : "lapsingWarning" === _v41 ? (0, _v1.jsx)(_v130, {
          onBack: () => {
            _v33({
              tier: _v79,
              periodicity: _v80
            }), _v93();
          },
          onConfirmRandomFreeze: () => {
            _v34({
              tier: _v79,
              periodicity: _v80
            }), _v44("confirm");
          }
        }) : "confirm" === _v41 ? (0, _v1.jsx)(_v126, {
          confirmTitle: _v75,
          warningData: _v19 ? void 0 : _v57,
          featureLabels: _v78,
          cancelRequestPending: _v9,
          onKeepPlan: _v92,
          onConfirmCancel: () => {
            if (_v88("optout_modal_confirm_optout_button"), _v25({
              tier: _v79,
              periodicity: _v80
            }), _v12) {
              _v40(!1), _v8(), _v12(_v0);
              return;
            }
            _v0();
          },
          onBack: _v93,
          isFinalStep: _v38
        }) : (0, _v1.jsx)(_v113, {
          planLabel: _v74,
          renewalPrice: _v5,
          renewalPeriodLabel: _v6,
          nextBillingDateLabel: _v94,
          isAcceptLoading: _v55,
          errorMessage: _v53,
          onAccept: _v90,
          onDismiss: () => {
            _v55 || (_v36({
              tier: _v79,
              periodicity: _v80
            }), _v89({
              trackPopupDismissed: !1
            }));
          }
        })
      })]
    });
  };
  var _v149 = _v0.i(0),
    _v150 = _v0.i(0),
    _v151 = _v0.i(0);
  function _v152({
    cancelSubscription: _v0,
    notification: _v1,
    uploadQuota: _v2,
    membership: _v3,
    open: _v4,
    close: _v5,
    cancelRequestPending: _v6,
    setShowPostCancelSurvey: _v7
  }) {
    let {
        trackBillingAction: _v8
      } = (0, _v3.useContext)(_v93.ManageTeamAnalytics),
      {
        trackCancelSubscriptionPopupDisplayed: _v9,
        trackCancelSubscriptionPopupDismissed: _v10,
        trackAutoRenewSwitchedOff: _v11
      } = (0, _v22.useBillingTracking)(),
      [_v12, _v13] = (0, _v3.useState)(_v4),
      _v14 = _v2?.space?.unit === "video_size" ? "space" : "count",
      _v15 = _v2?.space?.max || 0,
      _v16 = new Date(_v3.renewalDate).toLocaleDateString(navigator.language || "en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      }),
      _v17 = new Date(_v3.renewalDate).getTime() - Date.now() > 0,
      _v18 = !_v3.isFreeTrial,
      _v19 = _v3.billingPeriod === _v65.UserPlanType.Year,
      _v20 = _v3.tier,
      _v21 = _v3.billingPeriod === _v65.UserPlanType.Year ? "annual" : "monthly",
      _v22 = () => {
        _v10({
          tier: _v20,
          periodicity: _v21
        }), _v13(!1), _v5();
      },
      _v23 = _v0 => {
        _v8({
          action_type: _v64.BillingActionTypes.CLICK,
          location: _v0
        });
      },
      _v24 = (0, _v3.useRef)(!1);
    (0, _v3.useEffect)(() => {
      if (_v6 && !_v24.current) {
        _v24.current = !0;
        return;
      }
      !_v6 && _v24.current && (_v24.current = !1, _v1({
        canShow: !0,
        type: "primary",
        text: _v66.T.SubscriptionCanceled
      }), _v13(!1), _v5(), _v7(!0));
    }, [_v6, _v7, _v13, _v1, _v5]);
    let _v25 = (0, _v3.useRef)(!1);
    return (0, _v3.useEffect)(() => {
      _v12 && !_v25.current && (_v8({
        action_type: _v64.BillingActionTypes.LAND,
        location: _v64.BillingActionLocations.CANCEL_SUBSCRIPTION_MODAL
      }), _v9({
        tier: _v20,
        periodicity: _v21
      }), _v25.current = !0);
    }, [_v12, _v8, _v9, _v20, _v21]), (0, _v1.jsx)(_v1.Fragment, {
      children: (0, _v1.jsxs)(_v86.Modal, {
        isOpen: _v12,
        onClose: () => {
          _v23("optout_modal_close_button"), _v22();
        },
        size: ["sm", "md"],
        children: [(0, _v1.jsx)(_v87.ModalOverlay, {}), (0, _v1.jsxs)(_v88.ModalContent, {
          children: [(0, _v1.jsx)(_v89.ModalHeader, {
            children: (0, _v1.jsx)(_v12.Header, {
              size: "md",
              children: _v66.T.CancelYourSubscription
            })
          }), (0, _v1.jsx)(_v92.ModalCloseButton, {
            onClick: () => {
              _v23("optout_modal_close_button"), _v22();
            }
          }), (0, _v1.jsxs)(_v91.ModalBody, {
            paddingTop: "0",
            children: [(0, _v1.jsx)(_v149.Paragraph, {
              fontSize: (0, _v15.rem)(14),
              color: "text-secondary",
              marginBottom: "3",
              children: (0, _v70.translate)({
                singular: "Cancellation will be effective at the end of your subscription on {RENEWAL_DATE}. You'll {LOSE_ACCESS} to the benefits included in your plan, such as:",
                replacements: {
                  RENEWAL_DATE: (0, _v119.formatDate)(_v16),
                  LOSE_ACCESS: (0, _v1.jsx)(_v29.Link, {
                    href: "https://help.vimeo.com/hc/en-us/articles/12425417275665-What-happens-when-I-lapse-to-the-Free-plan",
                    target: "_blank",
                    fontSize: (0, _v15.rem)(14),
                    variant: "inline-secondary",
                    color: "vimeoBlue.600",
                    onClick: () => {
                      _v23("optout_modal_lose_access_button");
                    },
                    children: (0, _v70.translate)({
                      singular: "lose access",
                      dictionary: {
                        es: {
                          singular: "perder el acceso"
                        },
                        "de-DE": {
                          singular: "Zugang verlieren"
                        },
                        "fr-FR": {
                          singular: "perdre l'accès"
                        },
                        "ja-JP": {
                          singular: "アクセスできなくなります"
                        },
                        "ko-KR": {
                          singular: "액세스 권한 상실"
                        },
                        "pt-BR": {
                          singular: "perderá acesso"
                        },
                        "zh-CN": {
                          singular: "失去访问权限"
                        }
                      }
                    })
                  }, "lose-access")
                },
                dictionary: {
                  es: {
                    singular: "La cancelación será efectiva al final de su suscripción el {RENEWAL_DATE}. Usted tendrá acceso {LOSE_ACCESS} a los beneficios incluidos en su plan, como:"
                  },
                  "de-DE": {
                    singular: "Die Kündigung wird zum Ende Ihres Abonnements am {RENEWAL_DATE} wirksam. Sie {LOSE_ACCESS} zu den in Ihrem Plan enthaltenen Leistungen, wie z. B.:"
                  },
                  "fr-FR": {
                    singular: "L'annulation prendra effet à la fin de votre abonnement, le {RENEWAL_DATE}. Vous {LOSE_ACCESS} aux avantages inclus dans votre abonnement, tels que :"
                  },
                  "ja-JP": {
                    singular: "キャンセルは{RENEWAL_DATE}のサブスクリプション終了時に有効になります。次を始めとする、プランに含まれる特典を{LOSE_ACCESS}します："
                  },
                  "ko-KR": {
                    singular: "취소는 구독 만료일인 {RENEWAL_DATE}에 적용됩니다. 다음과 같은 요금제 포함 혜택 이용이 {LOSE_ACCESS}."
                  },
                  "pt-BR": {
                    singular: "O cancelamento entrará em vigor no final da sua assinatura em {RENEWAL_DATE}. Você {LOSE_ACCESS} aos benefícios incluídos no seu plano, como:"
                  },
                  "zh-CN": {
                    singular: "取消将在您的订阅于 {RENEWAL_DATE}结束时生效。您将{LOSE_ACCESS}套餐中包含的福利，例如："
                  }
                }
              })
            }), (0, _v1.jsxs)(_v109.Stack, {
              spacing: "300",
              children: [(0, _v1.jsxs)(_v10.Card, {
                backgroundColor: "red.50",
                flexDirection: "column",
                justifyContent: "center",
                padding: "1",
                gap: "2",
                children: [(0, _v1.jsxs)(_v1.Fragment, {
                  children: ["space" === _v14 && (0, _v1.jsxs)(_v11.Flex, {
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "1",
                    children: [(0, _v1.jsx)(_v151.CircleExclamation, {
                      color: "red.600"
                    }), (0, _v1.jsx)(_v38.Text, {
                      variant: "heading-xs",
                      color: "red.600",
                      children: (0, _v70.translate)({
                        singular: "{QUOTA_MAX} of storage",
                        replacements: {
                          QUOTA_MAX: (0, _v62.formatBytes)(_v15, !1)
                        },
                        dictionary: {
                          es: {
                            singular: "{QUOTA_MAX} de almacenamiento"
                          },
                          "de-DE": {
                            singular: "{QUOTA_MAX} Speicherplatz"
                          },
                          "fr-FR": {
                            singular: "{QUOTA_MAX} d'espace de stockage"
                          },
                          "ja-JP": {
                            singular: "{QUOTA_MAX}のストレージ"
                          },
                          "ko-KR": {
                            singular: "{QUOTA_MAX} 저장 공간"
                          },
                          "pt-BR": {
                            singular: "{QUOTA_MAX} de armazenamento"
                          },
                          "zh-CN": {
                            singular: "{QUOTA_MAX} 的存储空间"
                          }
                        }
                      })
                    })]
                  }), "count" === _v14 && (0, _v1.jsxs)(_v11.Flex, {
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "1",
                    children: [(0, _v1.jsx)(_v151.CircleExclamation, {
                      color: "red.600"
                    }), (0, _v1.jsx)(_v38.Text, {
                      variant: "heading-xs",
                      color: "red.600",
                      children: (0, _v70.translate)({
                        singular: "{QUOTA_MAX} videos of storage",
                        replacements: {
                          QUOTA_MAX: _v15
                        },
                        dictionary: {
                          es: {
                            singular: "{QUOTA_MAX} de almacenamiento de video"
                          },
                          "de-DE": {
                            singular: "{QUOTA_MAX} Videospeicher"
                          },
                          "fr-FR": {
                            singular: "{QUOTA_MAX} vidéos stockées"
                          },
                          "ja-JP": {
                            singular: "{QUOTA_MAX}本の動画のストレージ"
                          },
                          "ko-KR": {
                            singular: "{QUOTA_MAX}개 동영상 저장 공간"
                          },
                          "pt-BR": {
                            singular: "{QUOTA_MAX} vídeos de armazenamento"
                          },
                          "zh-CN": {
                            singular: "{QUOTA_MAX} 个视频的存储空间"
                          }
                        }
                      })
                    })]
                  })]
                }), (0, _v1.jsxs)(_v11.Flex, {
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "1",
                  children: [(0, _v1.jsx)(_v151.CircleExclamation, {
                    color: "red.600"
                  }), (0, _v1.jsx)(_v38.Text, {
                    variant: "heading-xs",
                    color: "red.600",
                    children: `${(0, _v70.translate)({
                      singular: "Password protection will no longer be available",
                      dictionary: {
                        es: {
                          singular: "La protección por contraseña ya no estará disponible"
                        },
                        "de-DE": {
                          singular: "Der Kennwortschutz wird nicht mehr verfügbar sein"
                        },
                        "fr-FR": {
                          singular: "La protection par mot de passe ne sera plus disponible"
                        },
                        "ja-JP": {
                          singular: "パスワード保護は利用できなくなります"
                        },
                        "ko-KR": {
                          singular: "비밀번호로 보호 기능을 더 이상 사용할 수 없게 됩니다."
                        },
                        "pt-BR": {
                          singular: "A proteção com senha não estará mais disponível"
                        },
                        "zh-CN": {
                          singular: "不再提供密码保护"
                        }
                      }
                    })}`
                  })]
                }), (0, _v1.jsxs)(_v11.Flex, {
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "1",
                  children: [(0, _v1.jsx)(_v151.CircleExclamation, {
                    color: "red.600"
                  }), (0, _v1.jsx)(_v38.Text, {
                    variant: "heading-xs",
                    color: "red.600",
                    children: `${(0, _v70.translate)({
                      singular: "Player customization options will be removed",
                      dictionary: {
                        es: {
                          singular: "Se eliminarán las opciones de personalización del reproductor"
                        },
                        "de-DE": {
                          singular: "Optionen zur Spieleranpassung werden entfernt"
                        },
                        "fr-FR": {
                          singular: "Les options de personnalisation du player seront supprimées"
                        },
                        "ja-JP": {
                          singular: "プレーヤーのカスタマイズオプションは削除されます"
                        },
                        "ko-KR": {
                          singular: "플레이어 커스텀 옵션이 제거됩니다."
                        },
                        "pt-BR": {
                          singular: "As opções de personalização do player serão removidas"
                        },
                        "zh-CN": {
                          singular: "播放器自定义选项将被移除"
                        }
                      }
                    })}`
                  })]
                })]
              }), (0, _v1.jsxs)(_v109.Stack, {
                spacing: "2",
                children: [_v19 && _v17 && _v18 ? (0, _v1.jsxs)(_v1.Fragment, {
                  children: [(0, _v1.jsx)(_v149.Paragraph, {
                    size: "sm",
                    color: "text-secondary",
                    textAlign: "center",
                    children: (0, _v70.translate)({
                      singular: "We'll remind you 30 days before your plan renews",
                      dictionary: {
                        es: {
                          singular: "Le recordaremos 30 días antes de que se renueve su plan"
                        },
                        "de-DE": {
                          singular: "Wir werden Sie 30 Tage vor der Verlängerung Ihres Abonnements daran erinnern"
                        },
                        "fr-FR": {
                          singular: "Nous vous enverrons un rappel 30 jours avant le renouvellement de votre abonnement"
                        },
                        "ja-JP": {
                          singular: "プランが更新される30日前にお知らせします"
                        },
                        "ko-KR": {
                          singular: "요금제 갱신 30일 전에 알려드리겠습니다."
                        },
                        "pt-BR": {
                          singular: "Lembraremos você 30 dias antes da renovação do seu plano"
                        },
                        "zh-CN": {
                          singular: "我们会在您的套餐续订前 30 天提醒您"
                        }
                      }
                    })
                  }), (0, _v1.jsxs)(_v9.Button, {
                    onClick: () => {
                      _v23("optout_modal_remind_me_later_button"), _v1({
                        canShow: !0,
                        type: "primary",
                        text: (0, _v70.translate)({
                          singular: "We’ll send a reminder email 30 days before your plan auto-renews",
                          dictionary: {
                            es: {
                              singular: "Le enviaremos un correo electrónico de recordatorio 30 días antes de la renovación automática de su plan"
                            },
                            "de-DE": {
                              singular: "Wir werden Ihnen 30 Tage vor der automatischen Verlängerung Ihres Abonnements eine Erinnerungs-E-Mail senden"
                            },
                            "fr-FR": {
                              singular: "Nous vous enverrons un e-mail de rappel 30 jours avant le renouvellement automatique de votre abonnement"
                            },
                            "ja-JP": {
                              singular: "プランが自動更新される30日前にリマインダーメールを送信します"
                            },
                            "ko-KR": {
                              singular: "요금제 자동 갱신 30일 전에 알림 이메일을 보내드립니다."
                            },
                            "pt-BR": {
                              singular: "Enviaremos um e-mail de lembrete 30 dias antes da renovação automática do seu plano"
                            },
                            "zh-CN": {
                              singular: "我们将在您的套餐自动更新前 30 天给您发送一封提醒电子邮件"
                            }
                          }
                        })
                      }), _v22();
                    },
                    variant: "secondary",
                    children: [(0, _v1.jsx)(_v150.Bell, {}), (0, _v70.translate)({
                      singular: "Remind me later",
                      dictionary: {
                        es: {
                          singular: "Recordármelo más tarde"
                        },
                        "de-DE": {
                          singular: "Später erinnern"
                        },
                        "fr-FR": {
                          singular: "Me le rappeler plus tard"
                        },
                        "ja-JP": {
                          singular: "後でリマインドする"
                        },
                        "ko-KR": {
                          singular: "나중에 알림 받기"
                        },
                        "pt-BR": {
                          singular: "Me lembrar depois"
                        },
                        "zh-CN": {
                          singular: "稍后提醒我"
                        }
                      }
                    })]
                  })]
                }) : (0, _v1.jsx)(_v9.Button, {
                  onClick: () => {
                    _v23("optout_modal_nevermind_button"), _v22();
                  },
                  variant: "secondary",
                  children: (0, _v70.translate)({
                    singular: "Nevermind",
                    dictionary: {
                      es: {
                        singular: "Olvídenlo"
                      },
                      "de-DE": {
                        singular: "Kein Problem. "
                      },
                      "fr-FR": {
                        singular: "Continuer"
                      },
                      "ja-JP": {
                        singular: "やめる"
                      },
                      "ko-KR": {
                        singular: "괜찮아요"
                      },
                      "pt-BR": {
                        singular: "Deixa para lá!"
                      },
                      "zh-CN": {
                        singular: "不理会"
                      }
                    }
                  })
                }), (0, _v1.jsx)(_v9.Button, {
                  onClick: () => {
                    _v23("optout_modal_confirm_optout_button"), _v11({
                      tier: _v20,
                      periodicity: _v21
                    }), _v0();
                  },
                  variant: "destructive",
                  isLoading: _v6,
                  disabled: _v6,
                  children: _v66.T.CancelSubscription
                })]
              })]
            })]
          }), (0, _v1.jsx)(_v90.ModalFooter, {})]
        })]
      })
    });
  }
  var _v153 = _v0.i(0);
  let _v154 = ({
      onClick: _v0
    }) => (0, _v1.jsx)(_v153.CloseIconStyle, {
      icon: (0, _v1.jsx)(_v69.CloseX, {}),
      size: "sm",
      variant: "minimalTransparent",
      format: "basic",
      onClick: _v0
    }),
    _v155 = _v3.default.memo(({
      onClick: _v0,
      onBeforeCancel: _v1,
      cancelAutoRenew: _v2,
      cancelRequestPending: _v3,
      notification: _v4,
      setShowPostCancelSurvey: _v5,
      renewalPrice: _v6,
      renewalPeriodLabel: _v7,
      teamUser: _v8,
      reopenBspAtConfirmSignal: _v9
    }) => {
      let [_v10, _v11] = (0, _v3.useState)(!1),
        [_v12, _v13] = (0, _v3.useState)(0),
        [_v14, _v15] = (0, _v3.useState)(!1),
        [_v16, _v17] = (0, _v3.useState)(!1),
        [_v18, _v19] = (0, _v3.useState)(void 0),
        _v20 = (0, _v3.useRef)(_v9);
      (0, _v3.useEffect)(() => {
        _v9 !== _v20.current && (_v20.current = _v9, _v19("confirm"), _v17(!0));
      }, [_v9]);
      let {
          settings: _v21
        } = _v105(),
        _v22 = _v21.bsp_cancellation_flow,
        {
          membership: {
            isFreeTrial: _v23,
            renewalDate: _v24,
            tier: _v25,
            status: _v26,
            isImpactedByGermanConsumerLaw: _v27,
            userEntity: _v28,
            tierForDisplay: _v29,
            billingPeriod: _v30,
            subscriptionId: _v31,
            rejoinOfferEligible: _v32,
            hasAutorenew: _v33
          },
          teamInfo: {
            teamMembersCount: {
              admin: _v34,
              contributor: _v35,
              viewer: _v36
            },
            seatDetails: _v37
          },
          teamCapabilities: {
            canUsePaymentsService: _v38
          },
          uploadQuota: _v39,
          planQuota: _v40
        } = (0, _v3.useContext)(_v93.ManageTeamStateCtx),
        {
          trackBillingAction: _v41
        } = (0, _v3.useContext)(_v93.ManageTeamAnalytics),
        {
          trackCancelPlanButtonClicked: _v42,
          trackCancelSubscriptionPopupDisplayed: _v43,
          trackCancelSubscriptionPopupDismissed: _v44,
          trackAutoRenewSwitchedOff: _v45
        } = (0, _v22.useBillingTracking)(),
        _v46 = (0, _v3.useRef)(!1),
        _v47 = (0, _v3.useRef)(!1),
        _v48 = new Date(_v24).toLocaleDateString(navigator.language || "en-US", {
          year: "numeric",
          month: "long",
          day: "numeric"
        }),
        _v49 = new Date(_v24).toLocaleString(navigator.language || "en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: !0
        }),
        _v50 = _v27 && _v28 === _v65.UserEntity.Personal,
        _v51 = _v25 || void 0,
        _v52 = "year" === _v30 ? "annual" : "monthly";
      (0, _v3.useEffect)(() => {
        _v13((_v34 || 0) + (_v35 || 0) + (_v36 || 0) + _v64.OWNER);
      }, [_v34, _v35, _v36]), (0, _v3.useEffect)(() => {
        if (_v3 && !_v46.current) {
          _v46.current = !0;
          return;
        }
        !_v3 && _v46.current && (_v46.current = !1, _v11(!1));
      }, [_v11, _v3]), (0, _v3.useEffect)(() => {
        _v10 && !_v47.current && (_v47.current = !0, _v43({
          tier: _v51,
          periodicity: _v52
        })), _v10 || (_v47.current = !1);
      }, [_v10, _v43, _v51, _v52]);
      let _v53 = _v39.periodic && (_v39.periodic.used > _v64.MAX_VIDEOS ? _v66.T.DowngradeMessageMoreVideos(_v39.periodic.used, _v64.MAX_VIDEOS) : ""),
        _v54 = _v25 && _v65.LegacyTiers.includes(_v25) ? _v65.Tier.Basic : _v65.Tier.Free,
        _v55 = _v54 === _v65.Tier.Free ? "1 GB" : "5 GB",
        _v56 = _v39.lifetime?.used || _v39.periodic?.used || 0,
        _v57 = _v54 === _v65.Tier.Free && _v56 > 0 || _v54 === _v65.Tier.Basic && _v56 > 0,
        _v58 = _v39.space?.unit === "video_size",
        _v59 = _v58 ? _v66.T.DownGradeMessageMoreStorage(_v29, _v56, (0, _v101.default)(_v54), _v55, _v57) : "",
        _v60 = _v12 > _v64.OWNER && !_v58 ? _v66.T.DowngradeMessageMoreMembers(_v12) : "",
        _v61 = !!_v38,
        _v62 = (_v26 === _v65.AccountStatus.Active || _v23) && _v33;
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [_v62 && (0, _v1.jsx)(_v153.StyledModal, {
          active: _v10,
          content: (0, _v1.jsxs)(_v153.ModalContent, {
            children: [(0, _v1.jsxs)(_v106.Row, {
              justifyContent: "space-between",
              children: [(0, _v1.jsx)(_v106.Column, {
                justifyContent: "flex-start",
                children: (0, _v1.jsx)(_v12.Header, {
                  as: "h4",
                  size: "md",
                  marginBottom: "17",
                  children: _v66.T.ConfirmCancel
                })
              }), (0, _v1.jsx)(_v106.Column, {
                children: (0, _v1.jsx)(_v154, {
                  onClick: () => {
                    _v41({
                      action_type: _v64.BillingActionTypes.CLICK,
                      location: _v64.BillingActionLocations.OPTOUT_MODAL_CLOSE_BUTTON
                    }), _v44({
                      tier: _v51,
                      periodicity: _v52
                    }), _v11(!1);
                  }
                })
              })]
            }), (0, _v1.jsx)(_v106.Row, {
              children: (0, _v1.jsx)(_v106.Column, {
                children: (0, _v1.jsx)(_v153.StyledPrimaryParagraph, {
                  size: "2",
                  children: _v66.T.CancelSubscriptionModalCancelMessage(_v29, _v48, _v49, (0, _v101.default)(_v54))
                })
              })
            }), (0, _v1.jsx)(_v106.Row, {
              children: (0, _v1.jsx)(_v106.Column, {
                justifyContent: "flex-start",
                children: (0, _v1.jsxs)(_v153.StyledList, {
                  children: [_v25 && !_v65.LegacyTiers.includes(_v25) && (0, _v1.jsx)("li", {
                    children: (0, _v1.jsxs)(_v106.Column, {
                      justifyContent: "flex-start",
                      alignItems: "center",
                      children: [_v58 ? (0, _v1.jsx)(_v69.CloseX, {
                        height: (0, _v15.rem)(24),
                        width: (0, _v15.rem)(24)
                      }) : (0, _v1.jsx)(_v69.CloseX, {
                        height: (0, _v15.rem)(16),
                        width: (0, _v15.rem)(16),
                        color: "status-destructive-primary"
                      }), (0, _v1.jsx)(_v153.ListItemText, {
                        children: _v58 ? _v66.T.teamMemberSeats(_v12) : _v66.T.VideosPerSeatPerYear(_v40.periodic)
                      })]
                    })
                  }), _v66.cancelFeatureList[_v39.space?.unit || "video_count"][_v25 || "starter"].map((_v0, _v1) => (0, _v1.jsx)("li", {
                    children: (0, _v1.jsxs)(_v106.Column, {
                      justifyContent: "flex-start",
                      alignItems: "center",
                      children: [_v58 ? (0, _v1.jsx)(_v69.CloseX, {
                        height: (0, _v15.rem)(24),
                        width: (0, _v15.rem)(24)
                      }) : (0, _v1.jsx)(_v69.CloseX, {
                        height: (0, _v15.rem)(16),
                        width: (0, _v15.rem)(16),
                        color: "status-destructive-primary"
                      }), (0, _v1.jsx)(_v153.ListItemText, {
                        children: _v0
                      })]
                    })
                  }, _v1))]
                })
              })
            }), (0, _v1.jsx)(_v153.StyledSecondaryParagraph, {
              size: "3",
              children: _v53
            }), (0, _v1.jsx)(_v153.StyledPrimaryParagraph, {
              size: "2",
              children: _v59
            }), (0, _v1.jsx)(_v153.StyledSecondaryParagraph, {
              size: "3",
              style: {
                marginTop: _v53 || _v59 ? (0, _v15.rem)(20) : 0
              },
              children: _v60
            }), (0, _v1.jsx)(_v153.StyledCancelButton, {
              fluid: !0,
              color: (0, _v102.red)(600),
              loading: _v3,
              onClick: () => {
                _v45({
                  tier: _v51,
                  periodicity: _v52
                }), _v2();
              },
              children: _v50 ? _v66.T.CancelPayment : _v66.T.TurnOffAutoRenew
            }), (0, _v1.jsx)(_v153.StyledSettingsButton, {
              variant: "minimalTransparent",
              fluid: !0,
              disabled: _v3,
              onClick: () => {
                _v41({
                  action_type: _v64.BillingActionTypes.CLICK,
                  location: _v64.BillingActionLocations.OPTOUT_MODAL_CANCEL_OPTOUT_BUTTON
                }), _v44({
                  tier: _v51,
                  periodicity: _v52
                }), _v11(!1);
              },
              children: _v66.T.ReturnToSettings
            })]
          }),
          onOpen: () => _v11(!1),
          children: (0, _v1.jsx)(_v153.StyledCancelSubscriptionButton, {
            variant: "hyperminimal",
            onClick: () => {
              _v0?.(), _v42({
                tier: _v51,
                periodicity: _v52
              }), _v41({
                action_type: _v64.BillingActionTypes.CLICK,
                location: _v50 ? _v64.BillingActionLocations.CANCEL_NEXT_SCHEDULED_PAYMENT_BUTTON : _v64.BillingActionLocations.CANCEL_SUBSCRIPTION_BUTTON
              }), (() => {
                if (!_v61) return _v41({
                  action_type: _v64.BillingActionTypes.CLICK,
                  location: _v64.BillingActionLocations.CANCEL_SUBSCRIPTION_OLD_MODAL
                }), _v11(!0);
                if (_v22) {
                  if (_v27) {
                    if (_v1) return _v1(_v2, {
                      skipBspBackTarget: !0
                    });
                    _v19("confirm");
                  }
                  _v17(!0);
                  return;
                }
                _v15(!0);
              })();
            },
            children: _v23 ? _v66.T.CancelTrial : _v50 ? _v66.T.CancelNextScheduledPayment : _v66.T.CancelSubscription
          })
        }), _v16 && (0, _v1.jsx)(_v148, {
          uploadQuota: _v39,
          canUsePaymentsService: !!_v38,
          open: _v16,
          close: () => {
            _v17(!1), _v19(void 0);
          },
          cancelRequestPending: _v3,
          notification: _v4,
          cancelSubscription: _v2,
          membership: {
            isFreeTrial: _v23,
            renewalDate: _v24,
            billingPeriod: _v30,
            tier: _v25,
            subscriptionId: _v31,
            rejoinOfferEligible: _v32,
            isImpactedByGermanConsumerLaw: _v27
          },
          renewalPrice: _v6,
          renewalPeriodLabel: _v7,
          teamUser: _v8,
          totalSeats: (_v37?.currentAssignedCount || 1) + (_v37?.currentUnassignedCount || 0),
          onBeforeCancel: _v1,
          initialStep: _v18
        }), _v14 && (0, _v1.jsx)(_v152, {
          uploadQuota: _v39,
          open: _v14,
          close: () => _v15(!1),
          cancelRequestPending: _v3,
          notification: _v4,
          cancelSubscription: _v2,
          membership: {
            isFreeTrial: _v23,
            renewalDate: _v24,
            billingPeriod: _v30,
            tier: _v25
          },
          setShowPostCancelSurvey: _v5
        })]
      });
    });
  var _v156 = _v0.i(0);
  let _v157 = ({
    showPostCancelSurvey: _v0,
    setShowPostCancelSurvey: _v1,
    membership: _v2,
    teamUser: _v3
  }) => {
    let {
        trackCancellationSurveyAnswered: _v4
      } = (0, _v22.useBillingTracking)(),
      [_v5, _v6] = (0, _v3.useState)(null),
      [_v7, _v8] = (0, _v3.useState)(""),
      _v9 = (0, _v3.useMemo)(() => [{
        value: "I prefer to manually renew",
        label: (0, _v70.translate)({
          singular: "I prefer to manually renew",
          dictionary: {
            es: {
              singular: "Prefiero renovar manualmente"
            },
            "de-DE": {
              singular: "Ich möchte das Abonnement lieber manuell verlängern"
            },
            "fr-FR": {
              singular: "Je préfère renouveler mon abonnement manuellement"
            },
            "ja-JP": {
              singular: "手動で更新したい"
            },
            "ko-KR": {
              singular: "직접 갱신하는 것을 선호합니다."
            },
            "pt-BR": {
              singular: "Prefiro renovar manualmente"
            },
            "zh-CN": {
              singular: "我更愿意手动续订"
            }
          }
        })
      }, {
        value: "My plan is too expensive",
        label: (0, _v70.translate)({
          singular: "My plan is too expensive",
          dictionary: {
            es: {
              singular: "Mi plan es demasiado costoso"
            },
            "de-DE": {
              singular: "Mein Tarif ist zu teuer"
            },
            "fr-FR": {
              singular: "Mon abonnement est trop cher"
            },
            "ja-JP": {
              singular: "プランが高すぎる"
            },
            "ko-KR": {
              singular: "요금제가 너무 비쌉니다."
            },
            "pt-BR": {
              singular: "Meu plano é muito caro"
            },
            "zh-CN": {
              singular: "我的套餐太贵了"
            }
          }
        })
      }, {
        value: "I don't know if I want to renew yet",
        label: (0, _v70.translate)({
          singular: "I don't know if I want to renew yet",
          dictionary: {
            es: {
              singular: "Aún no sé si quiero renovar"
            },
            "de-DE": {
              singular: "Ich weiß noch nicht, ob ich verlängern möchte"
            },
            "fr-FR": {
              singular: "Je ne sais pas encore si je souhaite renouveler mon abonnement"
            },
            "ja-JP": {
              singular: "まだ更新するかどうか分からない"
            },
            "ko-KR": {
              singular: "아직 갱신하고 싶은지 잘 모르겠습니다."
            },
            "pt-BR": {
              singular: "Ainda não sei se quero renovar"
            },
            "zh-CN": {
              singular: "我不知道是否要续订"
            }
          }
        })
      }, {
        value: "My videos aren't getting enough views, likes or comments",
        label: (0, _v70.translate)({
          singular: "My videos aren't getting enough views, likes or comments",
          dictionary: {
            es: {
              singular: "Mis videos no obtienen las suficientes vistas, Me gusta o comentarios"
            },
            "de-DE": {
              singular: "Meine Videos werden nicht genug gesehen oder bekommen nicht genug Likes oder Kommentare."
            },
            "fr-FR": {
              singular: "Mes vidéos n'obtiennent pas assez de vues, de mentions J'aime ou de commentaires"
            },
            "ja-JP": {
              singular: "動画に十分な視聴数、いいね、コメントがつかない"
            },
            "ko-KR": {
              singular: "동영상에 조회수가 낮거나 좋아하기 또는 코멘트가 충분하지 않습니다."
            },
            "pt-BR": {
              singular: "Meus vídeos não estão tendo muitas visualizações, curtidas ou comentários"
            },
            "zh-CN": {
              singular: "我的视频的观看次数、点赞或评论不够多"
            }
          }
        })
      }, {
        value: "The product is hard to use",
        label: (0, _v70.translate)({
          singular: "The product is hard to use",
          dictionary: {
            es: {
              singular: "El producto es difícil de usar"
            },
            "de-DE": {
              singular: "Das Produkt ist schwer zu bedienen"
            },
            "fr-FR": {
              singular: "Le produit est difficile à utiliser"
            },
            "ja-JP": {
              singular: "製品が使いにくい"
            },
            "ko-KR": {
              singular: "제품 사용이 어렵습니다."
            },
            "pt-BR": {
              singular: "O produto é difícil de usar"
            },
            "zh-CN": {
              singular: "这个产品很难用"
            }
          }
        })
      }, {
        value: "I don't use my subscription enough",
        label: (0, _v70.translate)({
          singular: "I don't use my subscription enough",
          dictionary: {
            es: {
              singular: "No uso lo suficiente mi suscripción"
            },
            "de-DE": {
              singular: "Ich nutze mein Abonnement nicht oft genug"
            },
            "fr-FR": {
              singular: "Je n'utilise pas assez mon abonnement"
            },
            "ja-JP": {
              singular: "サブスクリプションを十分に利用していない"
            },
            "ko-KR": {
              singular: "구독을 자주 안 씁니다."
            },
            "pt-BR": {
              singular: "Não uso minha assinatura o suficiente"
            },
            "zh-CN": {
              singular: "我没有充分利用我的订阅"
            }
          }
        })
      }, {
        value: "I plan to continue with a monthly subscription",
        label: (0, _v70.translate)({
          singular: "I plan to continue with a monthly subscription",
          dictionary: {
            es: {
              singular: "Tengo la intención de continuar con una suscripción mensual"
            },
            "de-DE": {
              singular: "Ich plane, mit einem Monatsabonnement fortzufahren"
            },
            "fr-FR": {
              singular: "Je prévois de continuer avec un abonnement mensuel"
            },
            "ja-JP": {
              singular: "月間サブスクリプションを継続する予定だ"
            },
            "ko-KR": {
              singular: "월간 구독으로 계속 이용할 계획입니다."
            },
            "pt-BR": {
              singular: "Pretendo continuar com uma assinatura mensal"
            },
            "zh-CN": {
              singular: "我打算继续按月订阅"
            }
          }
        })
      }, {
        value: "I found an alternative solution",
        label: (0, _v70.translate)({
          singular: "I found an alternative solution",
          dictionary: {
            es: {
              singular: "He encontrado una solución alternativa"
            },
            "de-DE": {
              singular: "Ich habe eine alternative Lösung gefunden"
            },
            "fr-FR": {
              singular: "J'ai trouvé une autre solution"
            },
            "ja-JP": {
              singular: "代わりのソリューションを見つけた"
            },
            "ko-KR": {
              singular: "대체 솔루션을 찾았습니다."
            },
            "pt-BR": {
              singular: "Encontrei outra solução"
            },
            "zh-CN": {
              singular: "我找到了一个替代方案"
            }
          }
        })
      }].sort(() => Math.random() - .5), []),
      _v10 = (0, _v3.useMemo)(() => _v145(_v3), [_v3]),
      _v11 = _v2.tier,
      _v12 = _v2.billingPeriod === _v65.UserPlanType.Year ? "annual" : "monthly",
      _v13 = () => {
        _v1(!1);
      },
      _v14 = (0, _v3.useRef)(!1);
    return (0, _v3.useEffect)(() => {
      _v0 && !_v14.current && ((0, _v146.sendBpEventWithContexts)("vimeo.cancel_survey_impression", _v10, 1, {
        subscription_type: _v2.tier,
        is_trial: _v2.isFreeTrial,
        billing_period: _v2.billingPeriod
      }), _v14.current = !0);
    }, [_v0, _v14, _v2, _v10]), (0, _v1.jsxs)(_v86.Modal, {
      isOpen: _v0,
      onClose: _v13,
      size: ["sm", "md"],
      children: [(0, _v1.jsx)(_v87.ModalOverlay, {}), (0, _v1.jsxs)(_v88.ModalContent, {
        children: [(0, _v1.jsxs)(_v89.ModalHeader, {
          children: [(0, _v1.jsx)(_v12.Header, {
            size: "md",
            children: (0, _v70.translate)({
              singular: "Tell us why you canceled",
              dictionary: {
                es: {
                  singular: "Cuéntenos por qué canceló"
                },
                "de-DE": {
                  singular: "Teilen Sie uns mit, warum Sie gekündigt haben"
                },
                "fr-FR": {
                  singular: "Dites-nous pourquoi vous avez annulé"
                },
                "ja-JP": {
                  singular: "キャンセルの理由を教えてください"
                },
                "ko-KR": {
                  singular: "취소한 이유를 알려주세요."
                },
                "pt-BR": {
                  singular: "Conte-nos por que você decidiu cancelar"
                },
                "zh-CN": {
                  singular: "请告诉我们您取消的原因"
                }
              }
            })
          }), (0, _v1.jsx)(_v12.Header, {
            size: "xs",
            children: (0, _v70.translate)({
              singular: "Your feedback will help improve Vimeo",
              dictionary: {
                es: {
                  singular: "Sus comentarios ayudarán a mejorar Vimeo"
                },
                "de-DE": {
                  singular: "Ihr Feedback wird dazu beitragen, Vimeo zu verbessern"
                },
                "fr-FR": {
                  singular: "Vos commentaires nous aideront à perfectionner Vimeo"
                },
                "ja-JP": {
                  singular: "Vimeoのサービス向上のため、フィードバックにご協力ください"
                },
                "ko-KR": {
                  singular: "회원님의 의견은 Vimeo 개선에 큰 도움이 됩니다."
                },
                "pt-BR": {
                  singular: "Sua opinião ajudará a aprimorar o Vimeo"
                },
                "zh-CN": {
                  singular: "您的反馈将有助于改进 Vimeo"
                }
              }
            })
          })]
        }), (0, _v1.jsx)(_v92.ModalCloseButton, {
          onClick: _v13
        }), (0, _v1.jsxs)(_v91.ModalBody, {
          children: [(0, _v1.jsx)(_v135.RadioGroup, {
            children: (0, _v1.jsxs)(_v109.Stack, {
              spacing: "2",
              children: [_v9.map(_v0 => (0, _v1.jsx)(_v35.Radio, {
                value: _v0.value,
                onChange: () => _v6(_v0.value),
                children: _v0.label
              }, _v0.value)), (0, _v1.jsx)(_v35.Radio, {
                value: "other",
                children: (0, _v70.translate)({
                  singular: "Other",
                  dictionary: {
                    es: {
                      singular: "Otro"
                    },
                    "de-DE": {
                      singular: "Sonstiges"
                    },
                    "fr-FR": {
                      singular: "Autre"
                    },
                    "ja-JP": {
                      singular: "その他"
                    },
                    "ko-KR": {
                      singular: "기타"
                    },
                    "pt-BR": {
                      singular: "Outro"
                    },
                    "zh-CN": {
                      singular: "其他"
                    }
                  }
                })
              })]
            })
          }), (0, _v1.jsx)(_v156.FormLabel, {
            marginTop: "4",
            fontSize: (0, _v15.rem)(14),
            children: (0, _v70.translate)({
              singular: "Add more context (optional)",
              dictionary: {
                es: {
                  singular: "Agregue más contexto (opcional)"
                },
                "de-DE": {
                  singular: "Mehr Kontext hinzufügen (optional)"
                },
                "fr-FR": {
                  singular: "Ajouter du contexte (facultatif)"
                },
                "ja-JP": {
                  singular: "コンテキストをさらに追加（任意）"
                },
                "ko-KR": {
                  singular: "추가 정보 입력(선택 사항)"
                },
                "pt-BR": {
                  singular: "Adicionar mais contexto (opcional)"
                },
                "zh-CN": {
                  singular: "添加更多上下文（可选）"
                }
              }
            })
          }), (0, _v1.jsx)(_v127.Textarea, {
            onChange: _v0 => _v8(_v0.target.value),
            value: _v7
          })]
        }), (0, _v1.jsx)(_v90.ModalFooter, {
          children: (0, _v1.jsx)(_v9.Button, {
            onClick: () => {
              let _v0 = _v7.trim();
              if (!_v5 && "" === _v0) return void _v1(!1);
              _v5 && _v4({
                tier: _v11,
                periodicity: _v12,
                answer: _v5
              });
              let _v1 = {
                subscription_type: _v2.tier,
                is_trial: _v2.isFreeTrial,
                billing_period: _v2.billingPeriod,
                selected_feedback: _v5,
                more_context: _v7
              };
              (0, _v146.sendBpEventWithContexts)("vimeo.cancel_survey_submission", _v10, 1, _v1), _v1(!1);
            },
            variant: "primary",
            isDisabled: !_v5 && "" === _v7.trim(),
            children: "Submit"
          })
        })]
      })]
    });
  };
  var _v158 = _v0.i(0),
    _v159 = _v0.i(0),
    _v160 = _v0.i(0),
    _v161 = _v0.i(0),
    _v162 = _v0.i(0);
  async function _v163({
    baseUrl: _v0,
    select: _v1,
    query: _v2,
    ..._v3
  }) {
    return (0, _v53.measureLatency)("getMeSubscriptionPlansUsageCheck", "GET", async () => {
      let _v0 = await fetch(`${_v0}/me/subscription_plans/usage_check?${(0, _v54.searchQueryString)(_v2)}&fields=${_v1.map(_v54.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "GET"
      });
      if (!_v0.ok) throw new _v54.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v54.deepCamelCase)(_v1);
    });
  }
  function _v164(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v51.useGctlConfig)();
    return (0, _v48.default)(_v2 ? `/me/subscription_plans/usage_check${(0, _v50.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v163({
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
  "true" === _v46.default.env.STORYBOOK && (0, _v50.assignMswData)(_v164, {
    endpoint: "/me/subscription_plans/usage_check",
    method: "GET"
  }), "true" === _v46.default.env.STORYBOOK && (0, _v50.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v49.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v51.useGctlConfig)(),
      [_v5, _v6] = (0, _v50.useInternalState)();
    return [(0, _v3.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/subscription_plans/usage_check${(0, _v50.serializeQuery)(_v0)}`, _v163({
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
    endpoint: "/me/subscription_plans/usage_check",
    method: "GET"
  });
  var _v165 = _v0.i(0),
    _v166 = _v0.i(0);
  let _v167 = {
      professional: "creator",
      studio: "professional",
      production: "studio"
    },
    _v168 = ({
      scheduledOrder: _v0,
      membership: _v1,
      onSuccess: _v2,
      onError: _v3
    }) => {
      let _v4 = function (_v0, _v1) {
          let _v2 = _v0?.productName?.toLowerCase().replace("vimeo ", "") ?? "";
          if (_v167[_v2]) return _v167[_v2];
          let _v3 = _v1.tier;
          return _v3 && _v167[_v3] ? _v167[_v3] : null;
        }(_v0, _v1),
        {
          isOpen: _v5,
          onOpen: _v6,
          onClose: _v7
        } = (0, _v40.useDisclosure)(),
        {
          trackBillingPageDowngradeClicked: _v8
        } = (0, _v22.useBillingTracking)(),
        _v9 = (0, _v165.useGetSubscriptionPlansData)(),
        {
          data: _v10
        } = _v164(() => _v4 ? {
          select: ["data.restrictedVideoStorage.over", "data.seats.over", "data.bandwidth.over"],
          query: {
            tiers: _v4
          }
        } : null),
        _v11 = (0, _v3.useMemo)(() => _v9 && _v4 ? _v9.find(_v0 => _v0.tier === _v4) ?? null : null, [_v9, _v4]);
      if (!_v11) return null;
      if (_v10?.data) {
        let {
          restrictedVideoStorage: _v0,
          seats: _v1,
          bandwidth: _v2
        } = _v10.data;
        if (_v0?.over || _v1?.over || _v2?.over) return null;
      }
      let {
          teamSeats: _v12,
          restrictedVideoStorageLimit: _v13,
          bandwidth: _v14
        } = _v11.metadata?.entitlements?.params ?? {},
        _v15 = _v14?.quotaPeriod === "year" ? (0, _v70.translate)({
          singular: "{AMOUNT} Annual Bandwidth",
          replacements: {
            AMOUNT: _v14?.periodicQuota ?? ""
          },
          dictionary: {
            es: {
              singular: "{AMOUNT} de ancho de banda anual"
            },
            "de-DE": {
              singular: "{AMOUNT} jährliche Bandbreite"
            },
            "fr-FR": {
              singular: "{AMOUNT} de bande passante annuelle"
            },
            "ja-JP": {
              singular: "{AMOUNT} の年間帯域"
            },
            "ko-KR": {
              singular: "{AMOUNT} 연간 대역폭"
            },
            "pt-BR": {
              singular: "{AMOUNT} de largura de banda anual"
            },
            "zh-CN": {
              singular: "{AMOUNT} 年度带宽"
            }
          }
        }) : (0, _v70.translate)({
          singular: "{AMOUNT} Monthly Bandwidth",
          replacements: {
            AMOUNT: _v14?.periodicQuota ?? ""
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
              singular: "{AMOUNT} の月間帯域"
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
        _v16 = _v0?.productName ?? _v1.tierForDisplay ?? "";
      return (0, _v1.jsxs)(_v11.Flex, {
        p: 6,
        border: "1px solid",
        borderColor: "background",
        borderRadius: "md",
        bg: "fill-surface",
        width: {
          base: "100%",
          lg: (0, _v15.rem)(300)
        },
        flexShrink: 0,
        alignSelf: "stretch",
        flexDirection: "column",
        children: [(0, _v1.jsx)(_v12.Header, {
          as: "h2",
          size: "md",
          children: _v11.name
        }), (0, _v1.jsxs)(_v8.Box, {
          mt: 4,
          children: [(0, _v1.jsx)(_v38.Text, {
            variant: "heading-lg",
            as: "span",
            children: _v11.priceFormatted?.annualMonthly
          }), (0, _v1.jsxs)(_v38.Text, {
            variant: "body-sm",
            color: "text-secondary",
            mt: 1,
            children: [(0, _v70.translate)({
              singular: "per month,",
              dictionary: {
                es: {
                  singular: "por mes,"
                },
                "de-DE": {
                  singular: "pro Monat,"
                },
                "fr-FR": {
                  singular: "par mois,"
                },
                "ja-JP": {
                  singular: "月額、"
                },
                "ko-KR": {
                  singular: "월별,"
                },
                "pt-BR": {
                  singular: "por mês,"
                },
                "zh-CN": {
                  singular: "每月，"
                }
              }
            }), " ", (0, _v70.translate)({
              singular: "billed annually",
              dictionary: {
                es: {
                  singular: "facturados anualmente"
                },
                "de-DE": {
                  singular: "Jährliche Abrechnung"
                },
                "fr-FR": {
                  singular: "facturé annuellement"
                },
                "ja-JP": {
                  singular: "年払い"
                },
                "ko-KR": {
                  singular: "연간 청구"
                },
                "pt-BR": {
                  singular: "fatura enviada anualmente"
                },
                "zh-CN": {
                  singular: "按年计费"
                }
              }
            })]
          })]
        }), (0, _v1.jsxs)(_v14.VStack, {
          align: "flex-start",
          spacing: 3,
          mt: 5,
          flex: 1,
          children: [(0, _v1.jsxs)(_v8.Box, {
            display: "flex",
            alignItems: "center",
            gap: 2,
            children: [(_v12 ?? 0) <= 1 ? (0, _v1.jsx)(_v160.PersonUser, {}) : (0, _v1.jsx)(_v162.Users, {}), (0, _v1.jsx)(_v38.Text, {
              variant: "body-sm",
              children: (0, _v70.translate)({
                singular: "{AMOUNT} user",
                plural: "{AMOUNT} users",
                count: _v12 ?? 1,
                replacements: {
                  AMOUNT: _v12 ?? 1
                },
                dictionary: {
                  es: {
                    singular: "{AMOUNT} usuario",
                    plural: "{AMOUNT} usuarios"
                  },
                  "de-DE": {
                    singular: "{AMOUNT} Nutzer",
                    plural: "{AMOUNT} Nutzer"
                  },
                  "fr-FR": {
                    singular: "{AMOUNT} utilisateur",
                    plural: "{AMOUNT} utilisateurs"
                  },
                  "ja-JP": {
                    singular: "{AMOUNT}ユーザー",
                    plural: "{AMOUNT}ユーザー"
                  },
                  "ko-KR": {
                    singular: "{AMOUNT} 사용자",
                    plural: "{AMOUNT} 사용자"
                  },
                  "pt-BR": {
                    singular: "{AMOUNT} usuário",
                    plural: "{AMOUNT} usuários"
                  },
                  "zh-CN": {
                    singular: "{AMOUNT} 用户",
                    plural: "{AMOUNT} 用户"
                  }
                }
              })
            })]
          }), _v13 && (0, _v1.jsxs)(_v8.Box, {
            display: "flex",
            alignItems: "center",
            gap: 2,
            children: [(0, _v1.jsx)(_v159.Database, {}), (0, _v1.jsx)(_v38.Text, {
              variant: "body-sm",
              children: (0, _v70.translate)({
                singular: "{AMOUNT} storage for Embeds and non-Public videos",
                replacements: {
                  AMOUNT: _v13
                },
                dictionary: {
                  es: {
                    singular: "{AMOUNT} de almacenamiento para Embeds y videos no públicos"
                  },
                  "de-DE": {
                    singular: "{AMOUNT} Speicher für Einbettungen und nicht-öffentliche Videos"
                  },
                  "fr-FR": {
                    singular: "{AMOUNT} de stockage pour les intégrations et les vidéos non publiques"
                  },
                  "ja-JP": {
                    singular: "{AMOUNT} の埋め込みおよび非公開ビデオ用ストレージ"
                  },
                  "ko-KR": {
                    singular: "{AMOUNT} 임베드 및 비공개 동영상용 저장 공간"
                  },
                  "pt-BR": {
                    singular: "{AMOUNT} de armazenamento para Embeds e vídeos não públicos"
                  },
                  "zh-CN": {
                    singular: "{AMOUNT} 用于嵌入和非公开视频的存储空间"
                  }
                }
              })
            })]
          }), _v14?.periodicQuota && (0, _v1.jsxs)(_v8.Box, {
            display: "flex",
            alignItems: "center",
            gap: 2,
            children: [(0, _v1.jsx)(_v161.Speedometer, {}), (0, _v1.jsx)(_v38.Text, {
              variant: "body-sm",
              children: _v15
            })]
          })]
        }), (0, _v1.jsx)(_v9.Button, {
          variant: "secondary",
          size: "sm",
          width: "100%",
          mt: 6,
          background: "white",
          border: "1px solid",
          borderColor: "stroke",
          onClick: () => {
            _v8({
              newPlan: _v4 ?? "unknown",
              newPeriodicity: _v1.billingPeriod === _v65.UserPlanType.Year ? "annual" : "monthly"
            }), _v6();
          },
          children: (0, _v70.translate)({
            singular: "Downgrade",
            dictionary: {
              es: {
                singular: "Cambiar a plan inferior"
              },
              "fr-FR": {
                singular: "Rétrograder"
              },
              "ja-JP": {
                singular: "ダウングレード"
              },
              "ko-KR": {
                singular: "다운그레이드"
              },
              "pt-BR": {
                singular: "Rebaixar"
              },
              "zh-CN": {
                singular: "降级"
              }
            }
          })
        }), (0, _v1.jsx)(_v166.DowngradeFlowModal, {
          isOpen: _v5,
          onClose: _v7,
          onSuccess: _v2,
          onError: _v3,
          membership: _v1,
          currentPlanName: _v16,
          targetTier: _v4 ?? "",
          targetPlanName: _v11.name,
          targetBillingPlanId: _v11.id?.annual ?? "",
          totalSeats: _v1.seatCount
        })]
      });
    },
    _v169 = {
      professional: "creator",
      advanced: "professional"
    };
  var _v170 = _v0.i(0),
    _v171 = _v0.i(0),
    _v172 = _v0.i(0),
    _v173 = _v0.i(0);
  let _v174 = "/terms",
    _v175 = "/privacy",
    _v176 = ({
      isOpen: _v0,
      onClose: _v1,
      onDecline: _v2,
      onBack: _v3,
      onSuccess: _v4,
      onError: _v5,
      scheduledOrder: _v6,
      membership: _v7,
      onRequestIndividualPlans: _v8,
      cancelRequestPending: _v9 = !1
    }) => {
      let {
          areBusinessPlansEnforced: _v10,
          isWhitelistedForIndPlans: _v11
        } = (0, _v170.useB2BRepackagingContext)(),
        _v12 = _v6?.productName?.toLowerCase().replace("vimeo ", ""),
        _v13 = function ({
          tier: _v0,
          areBusinessPlansEnforced: _v1,
          isWhitelistedForIndPlans: _v2
        }) {
          let _v3 = _v1 && _v2;
          if ("studio" === _v0) return _v3 ? {
            kind: "downgrade",
            targetTier: "professional"
          } : {
            kind: "discount_match_lower",
            targetTier: "professional"
          };
          if ("production" === _v0) return _v3 ? {
            kind: "downgrade",
            targetTier: "professional"
          } : {
            kind: "downgrade",
            targetTier: "studio"
          };
          let _v4 = _v0 ? _v169[_v0] : void 0;
          return _v4 ? {
            kind: "downgrade",
            targetTier: _v4
          } : {
            kind: "none"
          };
        }({
          tier: _v12,
          areBusinessPlansEnforced: _v10,
          isWhitelistedForIndPlans: _v11
        }),
        _v14 = "discount_match_lower" === _v13.kind,
        _v15 = "downgrade" === _v13.kind ? _v13.targetTier ?? null : null,
        _v16 = "creator" === _v15 || "professional" === _v15 || "creator" === _v12 || "professional" === _v12,
        _v17 = _v10 && !_v11 && !!_v8 && !_v16,
        _v18 = (0, _v3.useMemo)(() => {
          let _v0 = ["creator", "professional", "studio"];
          return _v12 && !_v0.includes(_v12) ? [..._v0, _v12] : _v0;
        }, [_v12]),
        _v19 = (0, _v165.useGetSubscriptionPlansData)(_v18, void 0, !1),
        {
          baseUrl: _v20,
          jwt: _v21,
          xVimeoPage: _v22,
          locale: _v23
        } = (0, _v51.useGctlConfig)(),
        [_v24, _v25] = (0, _v3.useState)(!1),
        {
          trackCancelSubscriptionDowngradeModalDisplayed: _v26,
          trackCancelSubscriptionDowngradeClicked: _v27,
          trackCancelSubscriptionDowngradeSkipped: _v28
        } = (0, _v22.useBillingTracking)(),
        {
          trackUserScheduledDowngrade: _v29,
          trackDowngradeFailed: _v30
        } = (0, _v173.usePricingTracking)(),
        _v31 = _v7.billingPeriod === _v65.UserPlanType.Year ? "annual" : "monthly",
        _v32 = _v7.subscriptionId,
        _v33 = (0, _v3.useMemo)(() => _v19 && _v15 ? _v19.find(_v0 => _v0.tier === _v15) ?? null : null, [_v19, _v15]),
        _v34 = (0, _v3.useMemo)(() => _v19?.find(_v0 => "studio" === _v0.tier) ?? null, [_v19]),
        _v35 = (0, _v3.useMemo)(() => _v19?.find(_v0 => "professional" === _v0.tier) ?? null, [_v19]),
        _v36 = _v7.billingPeriod === _v65.UserPlanType.Year ? _v33?.id?.annual ?? "" : _v33?.id?.monthly ?? "",
        _v37 = _v7.billingPeriod === _v65.UserPlanType.Year ? _v34?.id?.annual ?? "" : _v34?.id?.monthly ?? "",
        _v38 = (0, _v3.useCallback)(async () => {
          if (_v33) {
            _v27({
              newPlan: _v15 ?? "",
              newPeriodicity: _v31
            }), _v25(!0);
            try {
              await (0, _v172.putMeSubscriptionScheduledOrder)({
                where: {
                  subscriptionId: _v32
                },
                variables: {
                  billingPlanId: _v36,
                  acceptedFromCancellationFlow: !0
                },
                baseUrl: _v20,
                headers: {
                  "Content-Type": "application/json",
                  Authorization: _v21 ? `jwt ${_v21}` : "",
                  "Vimeo-Page": `${_v22}`,
                  "Accept-Language": _v23 ?? "en"
                }
              }), _v29({
                newPlan: _v15 ?? "",
                newPeriodicity: _v31
              }), _v4?.(), _v1();
            } catch (_v0) {
              _v30({
                currentPlan: _v7.tier ?? "",
                targetPlan: _v15 ?? "",
                targetPeriodicity: _v31,
                errorMessage: _v0 instanceof Error ? _v0.message : String(_v0)
              }), _v5?.(), _v1();
            } finally {
              _v25(!1);
            }
          }
        }, [_v32, _v33, _v36, _v20, _v21, _v22, _v23, _v1, _v27, _v30, _v29, _v7.tier, _v15, _v31, _v4, _v5]),
        _v39 = _v7.billingPeriod === _v65.UserPlanType.Year ? _v34?.price?.annualMonthly : _v34?.price?.monthly,
        _v40 = _v7.billingPeriod === _v65.UserPlanType.Year ? _v35?.price?.annualMonthly : _v35?.price?.monthly,
        _v41 = _v39 && _v40 && _v39 > _v40 ? Math.floor((_v39 - _v40) / _v39 * 100) : null,
        _v42 = (0, _v3.useCallback)(async () => {
          if (_v37 && null !== _v41) {
            _v27({
              newPlan: "studio",
              newPeriodicity: _v31
            }), _v25(!0);
            try {
              await (0, _v172.putMeSubscriptionScheduledOrder)({
                where: {
                  subscriptionId: _v32
                },
                variables: {
                  billingPlanId: _v37,
                  discountPercent: _v41,
                  acceptedFromCancellationFlow: !0
                },
                baseUrl: _v20,
                headers: {
                  "Content-Type": "application/json",
                  Authorization: _v21 ? `jwt ${_v21}` : "",
                  "Vimeo-Page": `${_v22}`,
                  "Accept-Language": _v23 ?? "en"
                }
              }), _v29({
                newPlan: "studio",
                newPeriodicity: _v31
              }), _v4?.(), _v1();
            } catch (_v0) {
              _v30({
                currentPlan: _v7.tier ?? "",
                targetPlan: "studio",
                targetPeriodicity: _v31,
                errorMessage: _v0 instanceof Error ? _v0.message : String(_v0)
              }), _v5?.(), _v1();
            } finally {
              _v25(!1);
            }
          }
        }, [_v37, _v41, _v32, _v20, _v21, _v22, _v23, _v1, _v27, _v30, _v29, _v7.tier, _v31, _v4, _v5]),
        _v43 = (0, _v3.useRef)(!1),
        _v44 = (0, _v3.useRef)(!1);
      (0, _v3.useEffect)(() => {
        if (!_v0) {
          _v43.current = !1, _v44.current = !1;
          return;
        }
        _v14 || _v33 || _v15 || _v44.current || (_v44.current = !0, _v2()), (_v14 || _v33) && !_v43.current && (_v26(), _v43.current = !0);
      }, [_v0, _v14, _v33, _v15, _v2]);
      let _v45 = _v7.renewalDate ? new Intl.DateTimeFormat(_v23 ?? "en", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric"
        }).format(new Date(_v7.renewalDate)) : "",
        _v46 = _v34?.priceFormatted?.annual,
        _v47 = _v34?.priceFormatted?.annualMonthly,
        _v48 = _v34?.price?.annual,
        _v49 = _v34?.currency?.currencyCode,
        _v50 = null != _v48 && null !== _v41 ? _v48 * (1 - _v41 / 100) : null,
        _v51 = null !== _v50 && _v49 ? new Intl.NumberFormat(_v23 ?? "en", {
          style: "currency",
          currency: _v49,
          minimumFractionDigits: 0,
          maximumFractionDigits: 2
        }).format(_v50) : null,
        _v52 = _v33?.priceFormatted?.annual,
        _v53 = () => {
          _v9 || (_v28(), _v2());
        },
        _v54 = (0, _v3.useRef)(!1);
      (0, _v3.useEffect)(() => {
        if (_v9 && !_v54.current) {
          _v54.current = !0;
          return;
        }
        !_v9 && _v54.current && (_v54.current = !1, _v1());
      }, [_v9, _v1]);
      let _v55 = _v0 => _v0 => (0, _v1.jsx)(_v29.Link, {
          href: _v0,
          textDecoration: "underline",
          color: "text-primary",
          target: "_blank",
          rel: "noopener noreferrer",
          children: _v0
        }),
        _v56 = _v0 => (0, _v1.jsx)(_v38.Text, {
          variant: "body-xs",
          color: "text-secondary",
          mt: 5,
          children: "discount" === _v0 ? (0, _v70.translate)({
            singular: "By accepting this discount, you agree: You’ll get a promotional discount on an automatically renewing subscription valid for one year, for a total price of {DISCOUNTED_AMOUNT}. If you don’t cancel before {RENEWAL_DATE} your subscription will renew at full price and you’ll be charged {ANNUAL_AMOUNT} (plus tax) on that date and every year thereafter until you cancel in your Billing Settings. Pricing may change. Your content may be deleted upon cancellation. By completing this purchase, you agree to our {TOS_URL}Terms of Service{/TOS_URL}, including the arbitration agreement and class action waiver, and acknowledge our {PP_URL}Privacy Policy{/PP_URL}.",
            replacements: {
              DISCOUNTED_AMOUNT: _v51 ?? "",
              RENEWAL_DATE: _v45,
              ANNUAL_AMOUNT: _v46 ?? "",
              TOS_URL: _v55(_v174),
              PP_URL: _v55(_v175)
            },
            dictionary: {
              es: {
                singular: "Al aceptar este descuento, usted acepta: Recibirá un descuento promocional en una suscripción de renovación automática válida por un año, por un precio total de {DISCOUNTED_AMOUNT}. Si no cancela antes del {RENEWAL_DATE}, su suscripción se renovará al precio completo y se le cobrará {ANNUAL_AMOUNT} (más impuestos) en esa fecha y cada año posteriormente hasta que cancele en sus Ajustes de facturación. Los precios pueden cambiar. Su contenido puede ser eliminado tras la cancelación. Al completar esta compra, usted acepta nuestros {TOS_URL}Términos de servicio{/TOS_URL}, incluido el acuerdo de arbitraje y la renuncia a demandas colectivas, y reconoce nuestra {PP_URL}Política de privacidad{/PP_URL}."
              },
              "de-DE": {
                singular: "Wenn Sie diesen Rabatt annehmen, stimmen Sie zu: Sie erhalten einen Aktionsrabatt auf ein automatisch verlängerndes Abonnement, das für ein Jahr gültig ist, zu einem Gesamtpreis von {DISCOUNTED_AMOUNT}. Wenn Sie nicht vor dem {RENEWAL_DATE} kündigen, wird Ihr Abonnement zum vollen Preis verlängert und Ihnen an diesem Datum und jedes Jahr danach bis zur Kündigung in Ihren Abrechnungseinstellungen {ANNUAL_AMOUNT} (zzgl. Steuern) berechnet. Preise können sich ändern. Ihre Inhalte können bei Kündigung gelöscht werden. Mit dem Abschluss dieses Kaufs stimmen Sie unseren {TOS_URL}Nutzungsbedingungen{/TOS_URL} zu, einschließlich der Schiedsvereinbarung und des Verzichts auf Sammelklagen, und erkennen unsere {PP_URL}Datenschutzerklärung{/PP_URL} an."
              },
              "fr-FR": {
                singular: "En acceptant cette remise, vous acceptez : Vous bénéficierez d'une remise promotionnelle sur un abonnement à renouvellement automatique valable pendant un an, pour un prix total de {DISCOUNTED_AMOUNT}. Si vous ne résiliez pas avant le {RENEWAL_DATE}, votre abonnement sera renouvelé au tarif plein et vous serez facturé {ANNUAL_AMOUNT} (plus taxes) à cette date, puis chaque année par la suite jusqu'à ce que vous annuliez dans vos Paramètres de facturation. Les tarifs peuvent changer. Votre contenu peut être supprimé lors de la résiliation. En complétant cet achat, vous acceptez nos {TOS_URL}Conditions d'utilisation{/TOS_URL}, y compris la clause d'arbitrage et la renonciation aux actions collectives, et reconnaissez notre {PP_URL}Politique de confidentialité{/PP_URL}."
              },
              "ja-JP": {
                singular: "この割引を受け入れることで、以下に同意するものとします：自動更新される1年間有効なサブスクリプションに対してプロモーション割引が適用され、合計金額は{DISCOUNTED_AMOUNT}になります。{RENEWAL_DATE}までに解約しない場合、サブスクリプションは通常料金で更新され、その日およびその後毎年、{ANNUAL_AMOUNT}（税金が加算されます）が請求されます。価格は変更される場合があります。解約時にコンテンツが削除されることがあります。この購入を完了することで、{TOS_URL}利用規約{/TOS_URL}（仲裁合意および集団訴訟放棄を含む）に同意し、{PP_URL}プライバシーポリシー{/PP_URL}を確認したことを了承します。"
              },
              "ko-KR": {
                singular: "본 할인 혜택을 수락하면 다음에 동의하게 됩니다: 자동으로 갱신되는 1년 유효 구독에 대해 프로모션 할인이 적용되어 총 금액은 {DISCOUNTED_AMOUNT}입니다. {RENEWAL_DATE} 이전에 취소하지 않으면 구독이 정가로 갱신되며 해당 날짜 및 이후 매년 {ANNUAL_AMOUNT} (세금 별도)가 청구됩니다(결제 설정에서 취소할 때까지). 가격은 변경될 수 있습니다. 취소 시 콘텐츠가 삭제될 수 있습니다. 본 구매를 완료함으로써 귀하는 중재 합의 및 집단 소송 포기를 포함한 당사의 {TOS_URL}서비스 약관{/TOS_URL}에 동의하고 당사의 {PP_URL}개인정보 처리방침{/PP_URL}을 확인합니다."
              },
              "pt-BR": {
                singular: "Ao aceitar este desconto, você concorda: Você receberá um desconto promocional em uma assinatura que renova automaticamente, válida por um ano, por um preço total de {DISCOUNTED_AMOUNT}. Se você não cancelar antes de {RENEWAL_DATE}, sua assinatura será renovada pelo preço cheio e você será cobrado {ANNUAL_AMOUNT} (mais impostos) nessa data e a cada ano subsequente até que você cancele em suas Configurações de Cobrança. Os preços podem mudar. Seu conteúdo pode ser excluído após o cancelamento. Ao concluir esta compra, você concorda com nossos {TOS_URL}Termos de Serviço{/TOS_URL}, incluindo o acordo de arbitragem e a renúncia a ações coletivas, e reconhece nossa {PP_URL}Política de Privacidade{/PP_URL}."
              },
              "zh-CN": {
                singular: "接受此折扣即表示您同意：您将获得一项为期一年的自动续订订阅的促销折扣，总价为 {DISCOUNTED_AMOUNT}。如果您未在 {RENEWAL_DATE} 前取消，您的订阅将在该日期按全价续订，届时及此后每年您都将被收取 {ANNUAL_AMOUNT}（加税），直至您在账单设置中取消。价格可能会变动。取消订阅后您的内容可能会被删除。完成购买即表示您同意我们的 {TOS_URL}服务条款{/TOS_URL}，包括仲裁协议和集体诉讼放弃条款，并已知悉我们的 {PP_URL}隐私政策{/PP_URL}。"
              }
            }
          }) : (0, _v70.translate)({
            singular: "By accepting this downgrade, you agree: You’ll get a promotional discount on an automatically renewing subscription. If you don’t cancel before {RENEWAL_DATE} your subscription will renew at full price and you’ll be charged {FULL_PRICE} (plus tax) on that date and every year thereafter until you cancel in your Billing Settings. Pricing may change. Your content may be deleted upon cancellation. By completing this purchase, you agree to our {TOS_URL}Terms of Service{/TOS_URL}, including the arbitration agreement and class action waiver, and acknowledge our {PP_URL}Privacy Policy{/PP_URL}.",
            replacements: {
              RENEWAL_DATE: _v45,
              FULL_PRICE: _v52 ?? "",
              TOS_URL: _v55(_v174),
              PP_URL: _v55(_v175)
            },
            dictionary: {
              es: {
                singular: "Al aceptar esta rebaja de plan, usted acepta: Recibirá un descuento promocional en una suscripción de renovación automática. Si no cancela antes del {RENEWAL_DATE}, su suscripción se renovará al precio completo y se le cobrará {FULL_PRICE} (más impuestos) en esa fecha y cada año posteriormente hasta que cancele en sus Ajustes de facturación. Los precios pueden cambiar. Su contenido puede ser eliminado tras la cancelación. Al completar esta compra, usted acepta nuestros {TOS_URL}Términos de servicio{/TOS_URL}, incluido el acuerdo de arbitraje y la renuncia a demandas colectivas, y reconoce nuestra {PP_URL}Política de privacidad{/PP_URL}."
              },
              "de-DE": {
                singular: "Wenn Sie dieses Downgrade annehmen, stimmen Sie zu: Sie erhalten einen Aktionsrabatt auf ein automatisch verlängerndes Abonnement. Wenn Sie nicht vor dem {RENEWAL_DATE} kündigen, wird Ihr Abonnement zum vollen Preis verlängert und Ihnen an diesem Datum und jedes Jahr danach bis zur Kündigung in Ihren Abrechnungseinstellungen {FULL_PRICE} (zzgl. Steuern) berechnet. Preise können sich ändern. Ihre Inhalte können bei Kündigung gelöscht werden. Mit dem Abschluss dieses Kaufs stimmen Sie unseren {TOS_URL}Nutzungsbedingungen{/TOS_URL} zu, einschließlich der Schiedsvereinbarung und des Verzichts auf Sammelklagen, und erkennen unsere {PP_URL}Datenschutzerklärung{/PP_URL} an."
              },
              "fr-FR": {
                singular: "En acceptant ce déclassement, vous acceptez : Vous bénéficierez d'une remise promotionnelle sur un abonnement à renouvellement automatique. Si vous ne résiliez pas avant le {RENEWAL_DATE}, votre abonnement sera renouvelé au tarif plein et vous serez facturé {FULL_PRICE} (plus taxes) à cette date, puis chaque année par la suite jusqu'à ce que vous annuliez dans vos Paramètres de facturation. Les tarifs peuvent changer. Votre contenu peut être supprimé lors de la résiliation. En complétant cet achat, vous acceptez nos {TOS_URL}Conditions d'utilisation{/TOS_URL}, y compris la clause d'arbitrage et la renonciation aux actions collectives, et reconnaissez notre {PP_URL}Politique de confidentialité{/PP_URL}."
              },
              "ja-JP": {
                singular: "このダウングレードを受け入れることで、以下に同意するものとします：自動更新されるサブスクリプションに対してプロモーション割引が適用されます。{RENEWAL_DATE}までに解約しない場合、サブスクリプションは通常料金で更新され、その日およびその後毎年、{FULL_PRICE}（税金が加算されます）が請求されます。価格は変更される場合があります。解約時にコンテンツが削除されることがあります。この購入を完了することで、{TOS_URL}利用規約{/TOS_URL}（仲裁合意および集団訴訟放棄を含む）に同意し、{PP_URL}プライバシーポリシー{/PP_URL}を確認したことを了承します。"
              },
              "ko-KR": {
                singular: "본 다운그레이드를 수락하면 다음에 동의하게 됩니다: 자동으로 갱신되는 구독에 대해 프로모션 할인이 적용됩니다. {RENEWAL_DATE} 이전에 취소하지 않으면 구독이 정가로 갱신되며 해당 날짜 및 이후 매년 {FULL_PRICE} (세금 별도)가 청구됩니다(결제 설정에서 취소할 때까지). 가격은 변경될 수 있습니다. 취소 시 콘텐츠가 삭제될 수 있습니다. 본 구매를 완료함으로써 귀하는 중재 합의 및 집단 소송 포기를 포함한 당사의 {TOS_URL}서비스 약관{/TOS_URL}에 동의하고 당사의 {PP_URL}개인정보 처리방침{/PP_URL}을 확인합니다."
              },
              "pt-BR": {
                singular: "Ao aceitar este downgrade, você concorda: Você receberá um desconto promocional em uma assinatura que renova automaticamente. Se você não cancelar antes de {RENEWAL_DATE}, sua assinatura será renovada pelo preço cheio e você será cobrado {FULL_PRICE} (mais impostos) nessa data e a cada ano subsequente até que você cancele em suas Configurações de Cobrança. Os preços podem mudar. Seu conteúdo pode ser excluído após o cancelamento. Ao concluir esta compra, você concorda com nossos {TOS_URL}Termos de Serviço{/TOS_URL}, incluindo o acordo de arbitragem e a renúncia a ações coletivas, e reconhece nossa {PP_URL}Política de Privacidade{/PP_URL}."
              },
              "zh-CN": {
                singular: "接受此降级即表示您同意：您将获得一项自动续订订阅的促销折扣。如果您未在 {RENEWAL_DATE} 前取消，您的订阅将在该日期按全价续订，届时及此后每年您都将被收取 {FULL_PRICE}（加税），直至您在账单设置中取消。价格可能会变动。取消订阅后您的内容可能会被删除。完成购买即表示您同意我们的 {TOS_URL}服务条款{/TOS_URL}，包括仲裁协议和集体诉讼放弃条款，并已知悉我们的 {PP_URL}隐私政策{/PP_URL}。"
              }
            }
          })
        });
      if (_v14) {
        let _v0 = _v7.billingPeriod === _v65.UserPlanType.Year ? _v34?.priceFormatted?.annualMonthly : _v34?.priceFormatted?.monthly,
          _v1 = _v34?.currency?.currencyCode,
          _v2 = _v39 && null !== _v41 ? _v39 * (1 - _v41 / 100) : null,
          _v3 = null !== _v2 && _v1 ? new Intl.NumberFormat(_v23 ?? "en", {
            style: "currency",
            currency: _v1,
            minimumFractionDigits: 0,
            maximumFractionDigits: 2
          }).format(_v2) : null,
          _v4 = _v34?.metadata?.entitlements?.params,
          _v5 = _v4?.teamSeats ?? null,
          _v6 = _v4?.seats?.admin ?? null,
          _v7 = _v4?.restrictedVideoStorageLimit ?? null,
          _v8 = _v4?.bandwidth?.periodicQuota ?? null,
          _v9 = _v4?.bandwidth?.quotaPeriod === "year";
        return (0, _v1.jsxs)(_v86.Modal, {
          isOpen: _v0,
          onClose: _v1,
          size: "sm",
          scrollBehavior: "outside",
          closeOnOverlayClick: !1,
          closeOnEsc: !1,
          children: [(0, _v1.jsx)(_v87.ModalOverlay, {}), (0, _v1.jsxs)(_v88.ModalContent, {
            borderRadius: "16px",
            maxW: "520px",
            p: 6,
            children: [(0, _v1.jsx)(_v116.IconButton, {
              "aria-label": "Go back",
              icon: (0, _v1.jsx)(_v171.ChevronLeft, {}),
              variant: "minimalTransparent",
              size: "sm",
              position: "absolute",
              top: "20px",
              left: "20px",
              onClick: _v3
            }), (0, _v1.jsxs)(_v91.ModalBody, {
              p: 0,
              children: [(0, _v1.jsx)(_v12.Header, {
                size: "md",
                paddingLeft: "48px",
                children: (0, _v70.translate)({
                  singular: "Get Studio at a discounted price",
                  dictionary: {
                    es: {
                      singular: "Obtén Studio a un precio con descuento"
                    },
                    "de-DE": {
                      singular: "Studio zu einem vergünstigten Preis erhalten"
                    },
                    "fr-FR": {
                      singular: "Obtenez Studio à prix réduit"
                    },
                    "ja-JP": {
                      singular: "Studioを割引価格で入手"
                    },
                    "ko-KR": {
                      singular: "할인된 가격으로 Studio 이용"
                    },
                    "pt-BR": {
                      singular: "Adquira o Studio por um preço com desconto"
                    },
                    "zh-CN": {
                      singular: "以折扣价购买 Studio"
                    }
                  }
                })
              }), (0, _v1.jsxs)(_v11.Flex, {
                mt: 4,
                alignItems: "center",
                gap: 2,
                children: [_v3 && (0, _v1.jsx)(_v38.Text, {
                  variant: "heading-xl",
                  as: "span",
                  children: _v3
                }), _v0 && (0, _v1.jsx)(_v38.Text, {
                  variant: "body-lg",
                  color: "text-tertiary",
                  as: "span",
                  textDecoration: "line-through",
                  children: _v0
                }), null !== _v41 && (0, _v1.jsx)(_v28.Badge, {
                  size: "sm",
                  backgroundColor: "status-positive-secondary",
                  textColor: "status-positive-primary",
                  border: "none",
                  borderRadius: "999px",
                  px: 3,
                  py: 3,
                  children: (0, _v70.translate)({
                    singular: "Save {PERCENT}%",
                    replacements: {
                      PERCENT: _v41
                    },
                    dictionary: {
                      es: {
                        singular: "Ahorra {PERCENT}%"
                      },
                      "de-DE": {
                        singular: "Sparen Sie {PERCENT}%"
                      },
                      "fr-FR": {
                        singular: "Économisez {PERCENT}\x0f%"
                      },
                      "ja-JP": {
                        singular: "{PERCENT}%オフ"
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
              }), (0, _v1.jsxs)(_v8.Box, {
                mt: 1,
                children: [(0, _v1.jsx)(_v38.Text, {
                  variant: "body-sm",
                  color: "text-secondary",
                  children: (0, _v70.translate)({
                    singular: "Per month, billed annually, locked for the first year",
                    dictionary: {
                      es: {
                        singular: "Por mes, facturado anualmente, bloqueado durante el primer año"
                      },
                      "de-DE": {
                        singular: "Pro Monat, jährlich abgerechnet, im ersten Jahr festgeschrieben"
                      },
                      "fr-FR": {
                        singular: "Par mois, facturé annuellement, engagement d'un an"
                      },
                      "ja-JP": {
                        singular: "月額（年額請求）、初年度は固定"
                      },
                      "ko-KR": {
                        singular: "월별 요금, 연간 청구, 첫 해 동안 고정"
                      },
                      "pt-BR": {
                        singular: "Por mês, faturado anualmente, com preço fixo no primeiro ano"
                      },
                      "zh-CN": {
                        singular: "按月计费，按年收取，首年锁定"
                      }
                    }
                  })
                }), _v47 && (0, _v1.jsx)(_v38.Text, {
                  variant: "body-sm",
                  color: "text-secondary",
                  children: (0, _v70.translate)({
                    singular: "Renews at {AMOUNT}/month, billed annually",
                    replacements: {
                      AMOUNT: _v47
                    },
                    dictionary: {
                      es: {
                        singular: "Se renueva a {AMOUNT}/mes, facturado anualmente"
                      },
                      "de-DE": {
                        singular: "Verlängert sich zu {AMOUNT}/Monat, jährlich abgerechnet"
                      },
                      "fr-FR": {
                        singular: "Se renouvelle à {AMOUNT}/mois, facturé annuellement"
                      },
                      "ja-JP": {
                        singular: "{AMOUNT}/月で更新され、年額請求されます"
                      },
                      "ko-KR": {
                        singular: "갱신 시 {AMOUNT}/월, 연간 청구"
                      },
                      "pt-BR": {
                        singular: "Renova por {AMOUNT}/mês, faturado anualmente"
                      },
                      "zh-CN": {
                        singular: "续订价为 {AMOUNT}/月，按年收取"
                      }
                    }
                  })
                }), (0, _v1.jsx)(_v38.Text, {
                  variant: "body-sm",
                  color: "text-secondary",
                  children: (0, _v70.translate)({
                    singular: "plus applicable taxes",
                    dictionary: {
                      es: {
                        singular: "más impuestos aplicables"
                      },
                      "de-DE": {
                        singular: "zzgl. anfallender Steuern"
                      },
                      "fr-FR": {
                        singular: "plus les taxes applicables"
                      },
                      "ja-JP": {
                        singular: "別途、適用される税金がかかります"
                      },
                      "ko-KR": {
                        singular: "해당 세금 별도"
                      },
                      "pt-BR": {
                        singular: "mais impostos aplicáveis"
                      },
                      "zh-CN": {
                        singular: "另加适用税费"
                      }
                    }
                  })
                })]
              }), (0, _v1.jsxs)(_v14.VStack, {
                align: "flex-start",
                spacing: 3,
                mt: 5,
                children: [null !== _v5 && (0, _v1.jsxs)(_v8.Box, {
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  children: [_v5 <= 1 ? (0, _v1.jsx)(_v160.PersonUser, {}) : (0, _v1.jsx)(_v162.Users, {}), (0, _v1.jsx)(_v38.Text, {
                    variant: "body-sm",
                    children: _v6 ? (0, _v70.translate)({
                      singular: "{USERS} users + {ADMINS} admins",
                      replacements: {
                        USERS: _v5,
                        ADMINS: _v6
                      },
                      dictionary: {
                        es: {
                          singular: "{USERS} usuarios + {ADMINS} administradores"
                        },
                        "de-DE": {
                          singular: "{USERS} Benutzer + {ADMINS} Administratoren"
                        },
                        "fr-FR": {
                          singular: "{USERS} utilisateurs + {ADMINS} administrateurs"
                        },
                        "ja-JP": {
                          singular: "{USERS} ユーザー + {ADMINS} 管理者"
                        },
                        "ko-KR": {
                          singular: "{USERS} 사용자 + {ADMINS} 관리자"
                        },
                        "pt-BR": {
                          singular: "{USERS} usuários + {ADMINS} administradores"
                        },
                        "zh-CN": {
                          singular: "{USERS} 用户 + {ADMINS} 管理员"
                        }
                      }
                    }) : (0, _v70.translate)({
                      singular: "{AMOUNT} user",
                      plural: "{AMOUNT} users",
                      count: _v5,
                      replacements: {
                        AMOUNT: _v5
                      },
                      dictionary: {
                        es: {
                          singular: "{AMOUNT} usuario",
                          plural: "{AMOUNT} usuarios"
                        },
                        "de-DE": {
                          singular: "{AMOUNT} Nutzer",
                          plural: "{AMOUNT} Nutzer"
                        },
                        "fr-FR": {
                          singular: "{AMOUNT} utilisateur",
                          plural: "{AMOUNT} utilisateurs"
                        },
                        "ja-JP": {
                          singular: "{AMOUNT}ユーザー",
                          plural: "{AMOUNT}ユーザー"
                        },
                        "ko-KR": {
                          singular: "{AMOUNT} 사용자",
                          plural: "{AMOUNT} 사용자"
                        },
                        "pt-BR": {
                          singular: "{AMOUNT} usuário",
                          plural: "{AMOUNT} usuários"
                        },
                        "zh-CN": {
                          singular: "{AMOUNT} 用户",
                          plural: "{AMOUNT} 用户"
                        }
                      }
                    })
                  })]
                }), _v7 && (0, _v1.jsxs)(_v8.Box, {
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  children: [(0, _v1.jsx)(_v159.Database, {}), (0, _v1.jsx)(_v38.Text, {
                    variant: "body-sm",
                    children: (0, _v70.translate)({
                      singular: "{AMOUNT} storage for Embeds and non-Public videos",
                      replacements: {
                        AMOUNT: _v7
                      },
                      dictionary: {
                        es: {
                          singular: "{AMOUNT} de almacenamiento para Embeds y videos no públicos"
                        },
                        "de-DE": {
                          singular: "{AMOUNT} Speicher für Einbettungen und nicht-öffentliche Videos"
                        },
                        "fr-FR": {
                          singular: "{AMOUNT} de stockage pour les intégrations et les vidéos non publiques"
                        },
                        "ja-JP": {
                          singular: "{AMOUNT} の埋め込みおよび非公開ビデオ用ストレージ"
                        },
                        "ko-KR": {
                          singular: "{AMOUNT} 임베드 및 비공개 동영상용 저장 공간"
                        },
                        "pt-BR": {
                          singular: "{AMOUNT} de armazenamento para Embeds e vídeos não públicos"
                        },
                        "zh-CN": {
                          singular: "{AMOUNT} 用于嵌入和非公开视频的存储空间"
                        }
                      }
                    })
                  })]
                }), _v8 && (0, _v1.jsxs)(_v8.Box, {
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  children: [(0, _v1.jsx)(_v159.Database, {}), (0, _v1.jsx)(_v38.Text, {
                    variant: "body-sm",
                    children: _v9 ? (0, _v70.translate)({
                      singular: "{AMOUNT} of bandwidth per year",
                      replacements: {
                        AMOUNT: _v8
                      },
                      dictionary: {
                        es: {
                          singular: "{AMOUNT} de ancho de banda por año"
                        },
                        "de-DE": {
                          singular: "{AMOUNT} Bandbreite pro Jahr"
                        },
                        "fr-FR": {
                          singular: "{AMOUNT} de bande passante par an"
                        },
                        "ja-JP": {
                          singular: "{AMOUNT} の年間帯域幅"
                        },
                        "ko-KR": {
                          singular: "{AMOUNT}의 연간 대역폭"
                        },
                        "pt-BR": {
                          singular: "{AMOUNT} de largura de banda por ano"
                        },
                        "zh-CN": {
                          singular: "{AMOUNT} 年度带宽"
                        }
                      }
                    }) : (0, _v70.translate)({
                      singular: "{AMOUNT} of bandwidth per month",
                      replacements: {
                        AMOUNT: _v8
                      },
                      dictionary: {
                        es: {
                          singular: "{AMOUNT} de ancho de banda por mes"
                        },
                        "de-DE": {
                          singular: "{AMOUNT} Bandbreite pro Monat"
                        },
                        "fr-FR": {
                          singular: "{AMOUNT} de bande passante par mois"
                        },
                        "ja-JP": {
                          singular: "月あたり{AMOUNT}の帯域幅"
                        },
                        "ko-KR": {
                          singular: "{AMOUNT}의 월별 대역폭"
                        },
                        "pt-BR": {
                          singular: "{AMOUNT} de largura de banda por mês"
                        },
                        "zh-CN": {
                          singular: "{AMOUNT} 每月带宽"
                        }
                      }
                    })
                  })]
                })]
              }), _v56("discount")]
            }), (0, _v1.jsx)(_v90.ModalFooter, {
              p: 0,
              mt: 6,
              children: (0, _v1.jsxs)(_v109.Stack, {
                spacing: 3,
                width: "100%",
                children: [(0, _v1.jsx)(_v9.Button, {
                  variant: "primary",
                  size: "md",
                  width: "100%",
                  onClick: _v42,
                  isLoading: _v24,
                  disabled: _v24,
                  children: (0, _v70.translate)({
                    singular: "Continue with Studio",
                    dictionary: {
                      es: {
                        singular: "Continuar con Studio"
                      },
                      "de-DE": {
                        singular: "Weiter mit Studio"
                      },
                      "fr-FR": {
                        singular: "Continuer avec Studio"
                      },
                      "ja-JP": {
                        singular: "Studioで続ける"
                      },
                      "ko-KR": {
                        singular: "Studio로 계속"
                      },
                      "pt-BR": {
                        singular: "Continuar com o Studio"
                      },
                      "zh-CN": {
                        singular: "继续使用 Studio"
                      }
                    }
                  })
                }), (0, _v1.jsx)(_v9.Button, {
                  variant: "destructive",
                  size: "md",
                  width: "100%",
                  onClick: _v53,
                  isLoading: _v9,
                  disabled: _v9 || _v24,
                  children: (0, _v70.translate)({
                    singular: "Confirm cancellation",
                    dictionary: {
                      es: {
                        singular: "Confirmar cancelación"
                      },
                      "de-DE": {
                        singular: "Kündigung bestätigen"
                      },
                      "fr-FR": {
                        singular: "Confirmer l'annulation"
                      },
                      "ja-JP": {
                        singular: "解約を確定する"
                      },
                      "ko-KR": {
                        singular: "취소 확인"
                      },
                      "pt-BR": {
                        singular: "Confirmar cancelamento"
                      },
                      "zh-CN": {
                        singular: "确认取消"
                      }
                    }
                  })
                }), _v17 && (0, _v1.jsx)(_v9.Button, {
                  variant: "hyperminimal",
                  background: "none",
                  size: "md",
                  width: "100%",
                  onClick: () => {
                    _v1(), _v8?.();
                  },
                  children: (0, _v70.translate)({
                    singular: "Request an individual plan",
                    dictionary: {
                      es: {
                        singular: "Solicitar un plan individual"
                      },
                      "de-DE": {
                        singular: "Einen individuellen Plan anfordern"
                      },
                      "fr-FR": {
                        singular: "Demander un plan individuel"
                      },
                      "ja-JP": {
                        singular: "個別プランをリクエストする"
                      },
                      "ko-KR": {
                        singular: "개별 요금제 요청"
                      },
                      "pt-BR": {
                        singular: "Solicite um plano individual"
                      },
                      "zh-CN": {
                        singular: "申请个人计划"
                      }
                    }
                  })
                })]
              })
            })]
          })]
        });
      }
      if (!_v33) return null;
      let {
          teamSeats: _v57,
          restrictedVideoStorageLimit: _v58,
          bandwidth: _v59,
          seats: _v60
        } = _v33?.metadata?.entitlements?.params ?? {},
        _v61 = _v60?.admin ?? null,
        _v62 = _v59?.periodicQuota ?? null,
        _v63 = _v59?.quotaPeriod === "year",
        _v64 = _v7.billingPeriod === _v65.UserPlanType.Year,
        _v65 = _v12 ? _v19?.find(_v0 => _v0.tier === _v12) ?? null : null,
        _v66 = _v64 ? _v33?.price?.annualMonthly : _v33?.price?.monthly,
        _v67 = _v64 ? _v65?.price?.annualMonthly : _v65?.price?.monthly,
        _v68 = _v67 && _v66 && _v67 > _v66 ? Math.floor((_v67 - _v66) / _v67 * 100) : null,
        _v69 = _v64 ? _v65?.priceFormatted?.annualMonthly : _v65?.priceFormatted?.monthly,
        _v70 = "professional" === _v15 ? (0, _v70.translate)({
          singular: "Professional is built for individual creators. Get the same essentials at a lower price.",
          dictionary: {
            es: {
              singular: "Professional está diseñado para creadores individuales. Obtén las mismas funciones esenciales a un precio más bajo."
            },
            "de-DE": {
              singular: "Professional ist für einzelne Kreative konzipiert. Erhalten Sie dieselben wesentlichen Funktionen zu einem niedrigeren Preis."
            },
            "fr-FR": {
              singular: "Professional est conçu pour les créateurs indépendants. Profitez des mêmes fonctionnalités essentielles à un tarif inférieur."
            },
            "ja-JP": {
              singular: "Professionalは個人クリエイター向けに作られています。同じ基本機能をより低価格でご利用いただけます。"
            },
            "ko-KR": {
              singular: "Professional은 개인 크리에이터를 위해 설계되었습니다. 동일한 필수 기능을 더 낮은 가격에 이용하세요."
            },
            "pt-BR": {
              singular: "Professional é feito para criadores individuais. Obtenha os mesmos recursos essenciais por um preço menor."
            },
            "zh-CN": {
              singular: "Professional 面向个人创作者打造。以更低的价格获得相同的核心功能。"
            }
          }
        }) : (0, _v70.translate)({
          singular: "{PLAN} gives your team the essentials at a lower price.",
          replacements: {
            PLAN: _v33?.name
          },
          dictionary: {
            es: {
              singular: "{PLAN} ofrece a tu equipo las funciones esenciales a un precio más bajo."
            },
            "de-DE": {
              singular: "{PLAN} bietet Ihrem Team die wesentlichen Funktionen zu einem niedrigeren Preis."
            },
            "fr-FR": {
              singular: "{PLAN} offre à votre équipe les fonctionnalités essentielles à un tarif inférieur."
            },
            "ja-JP": {
              singular: "{PLAN} はチームに基本機能をより低価格で提供します。"
            },
            "ko-KR": {
              singular: "{PLAN}은 팀에 필요한 필수 기능을 더 낮은 가격에 제공합니다."
            },
            "pt-BR": {
              singular: "{PLAN} oferece à sua equipe os recursos essenciais por um preço menor."
            },
            "zh-CN": {
              singular: "{PLAN} 以更低的价格为您的团队提供核心功能。"
            }
          }
        });
      return (0, _v1.jsxs)(_v86.Modal, {
        isOpen: _v0,
        onClose: _v1,
        size: "sm",
        scrollBehavior: "outside",
        closeOnOverlayClick: !1,
        closeOnEsc: !1,
        children: [(0, _v1.jsx)(_v87.ModalOverlay, {}), (0, _v1.jsxs)(_v88.ModalContent, {
          borderRadius: "16px",
          maxW: "520px",
          p: 6,
          children: [(0, _v1.jsx)(_v116.IconButton, {
            "aria-label": "Go back",
            icon: (0, _v1.jsx)(_v171.ChevronLeft, {}),
            variant: "minimalTransparent",
            size: "sm",
            position: "absolute",
            top: "20px",
            left: "20px",
            onClick: _v3
          }), (0, _v1.jsxs)(_v91.ModalBody, {
            p: 0,
            children: [(0, _v1.jsxs)(_v12.Header, {
              size: "md",
              paddingLeft: "48px",
              children: [(0, _v70.translate)({
                singular: "Looking for something simpler?",
                dictionary: {
                  es: {
                    singular: "¿Buscas algo más sencillo?"
                  },
                  "de-DE": {
                    singular: "Suchen Sie etwas Einfacheres?"
                  },
                  "fr-FR": {
                    singular: "Vous cherchez quelque chose de plus simple ?"
                  },
                  "ja-JP": {
                    singular: "もっとシンプルなものをお探しですか？"
                  },
                  "ko-KR": {
                    singular: "더 단순한 것을 찾고 계신가요?"
                  },
                  "pt-BR": {
                    singular: "Procurando algo mais simples?"
                  },
                  "zh-CN": {
                    singular: "想要更简单的方案吗？"
                  }
                }
              }), (0, _v1.jsx)(_v8.Box, {
                as: "span",
                display: "block",
                children: (0, _v70.translate)({
                  singular: "Try {PLAN}",
                  replacements: {
                    PLAN: _v33?.name
                  },
                  dictionary: {
                    es: {
                      singular: "Prueba {PLAN}"
                    },
                    "de-DE": {
                      singular: "Testen Sie {PLAN}"
                    },
                    "fr-FR": {
                      singular: "Essayez {PLAN}"
                    },
                    "ja-JP": {
                      singular: "{PLAN} をお試しください"
                    },
                    "ko-KR": {
                      singular: "{PLAN} 체험해 보기"
                    },
                    "pt-BR": {
                      singular: "Experimente {PLAN}"
                    },
                    "zh-CN": {
                      singular: "试用 {PLAN}"
                    }
                  }
                })
              })]
            }), (0, _v1.jsx)(_v38.Text, {
              variant: "body-md",
              color: "text-secondary",
              mt: 2,
              children: _v70
            }), (0, _v1.jsxs)(_v11.Flex, {
              mt: 4,
              alignItems: "center",
              gap: 2,
              flexWrap: "wrap",
              children: [(0, _v1.jsx)(_v38.Text, {
                variant: "heading-xl",
                as: "span",
                children: _v64 ? _v33?.priceFormatted?.annualMonthly : _v33?.priceFormatted?.monthly
              }), _v69 && null !== _v68 && (0, _v1.jsx)(_v38.Text, {
                variant: "body-lg",
                color: "text-tertiary",
                as: "span",
                textDecoration: "line-through",
                children: _v69
              }), null !== _v68 && (0, _v1.jsx)(_v28.Badge, {
                size: "sm",
                backgroundColor: "status-positive-secondary",
                textColor: "status-positive-primary",
                border: "none",
                borderRadius: "999px",
                px: 3,
                py: 3,
                children: (0, _v70.translate)({
                  singular: "Save {PERCENT}%",
                  replacements: {
                    PERCENT: _v68
                  },
                  dictionary: {
                    es: {
                      singular: "Ahorra {PERCENT}%"
                    },
                    "de-DE": {
                      singular: "Sparen Sie {PERCENT}%"
                    },
                    "fr-FR": {
                      singular: "Économisez {PERCENT}\x0f%"
                    },
                    "ja-JP": {
                      singular: "{PERCENT}%オフ"
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
            }), (0, _v1.jsxs)(_v8.Box, {
              mt: 1,
              children: [(0, _v1.jsx)(_v38.Text, {
                variant: "body-sm",
                color: "text-secondary",
                children: _v64 ? (0, _v70.translate)({
                  singular: "per month, billed annually",
                  dictionary: {
                    es: {
                      singular: "al mes facturados anualmente"
                    },
                    "de-DE": {
                      singular: "pro Monat, mit jährlicher Abrechnung"
                    },
                    "fr-FR": {
                      singular: "par mois, facturé annuellement"
                    },
                    "ja-JP": {
                      singular: "/月、年払い"
                    },
                    "ko-KR": {
                      singular: "매월, 연간 결제"
                    },
                    "pt-BR": {
                      singular: "por mês, cobrança anual"
                    },
                    "zh-CN": {
                      singular: "每月，按年计费"
                    }
                  }
                }) : (0, _v70.translate)({
                  singular: "per month",
                  dictionary: {
                    es: {
                      singular: "al mes"
                    },
                    "de-DE": {
                      singular: "pro Monat"
                    },
                    "fr-FR": {
                      singular: "par mois"
                    },
                    "ja-JP": {
                      singular: "月々"
                    },
                    "ko-KR": {
                      singular: "월"
                    },
                    "pt-BR": {
                      singular: "por mês"
                    },
                    "zh-CN": {
                      singular: "/月"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v38.Text, {
                variant: "body-sm",
                color: "text-secondary",
                children: (0, _v70.translate)({
                  singular: "plus applicable taxes",
                  dictionary: {
                    es: {
                      singular: "más impuestos aplicables"
                    },
                    "de-DE": {
                      singular: "zzgl. anfallender Steuern"
                    },
                    "fr-FR": {
                      singular: "plus les taxes applicables"
                    },
                    "ja-JP": {
                      singular: "別途、適用される税金がかかります"
                    },
                    "ko-KR": {
                      singular: "해당 세금 별도"
                    },
                    "pt-BR": {
                      singular: "mais impostos aplicáveis"
                    },
                    "zh-CN": {
                      singular: "另加适用税费"
                    }
                  }
                })
              })]
            }), (0, _v1.jsxs)(_v14.VStack, {
              align: "flex-start",
              spacing: 3,
              mt: 5,
              children: [null != _v57 && (0, _v1.jsxs)(_v8.Box, {
                display: "flex",
                alignItems: "center",
                gap: 2,
                children: [_v57 <= 1 ? (0, _v1.jsx)(_v160.PersonUser, {}) : (0, _v1.jsx)(_v162.Users, {}), (0, _v1.jsx)(_v38.Text, {
                  variant: "body-sm",
                  children: _v61 ? (0, _v70.translate)({
                    singular: "{USERS} users + {ADMINS} admins",
                    replacements: {
                      USERS: _v57,
                      ADMINS: _v61
                    },
                    dictionary: {
                      es: {
                        singular: "{USERS} usuarios + {ADMINS} administradores"
                      },
                      "de-DE": {
                        singular: "{USERS} Benutzer + {ADMINS} Administratoren"
                      },
                      "fr-FR": {
                        singular: "{USERS} utilisateurs + {ADMINS} administrateurs"
                      },
                      "ja-JP": {
                        singular: "{USERS} ユーザー + {ADMINS} 管理者"
                      },
                      "ko-KR": {
                        singular: "{USERS} 사용자 + {ADMINS} 관리자"
                      },
                      "pt-BR": {
                        singular: "{USERS} usuários + {ADMINS} administradores"
                      },
                      "zh-CN": {
                        singular: "{USERS} 用户 + {ADMINS} 管理员"
                      }
                    }
                  }) : (0, _v70.translate)({
                    singular: "{AMOUNT} user",
                    plural: "{AMOUNT} users",
                    count: _v57,
                    replacements: {
                      AMOUNT: _v57
                    },
                    dictionary: {
                      es: {
                        singular: "{AMOUNT} usuario",
                        plural: "{AMOUNT} usuarios"
                      },
                      "de-DE": {
                        singular: "{AMOUNT} Nutzer",
                        plural: "{AMOUNT} Nutzer"
                      },
                      "fr-FR": {
                        singular: "{AMOUNT} utilisateur",
                        plural: "{AMOUNT} utilisateurs"
                      },
                      "ja-JP": {
                        singular: "{AMOUNT}ユーザー",
                        plural: "{AMOUNT}ユーザー"
                      },
                      "ko-KR": {
                        singular: "{AMOUNT} 사용자",
                        plural: "{AMOUNT} 사용자"
                      },
                      "pt-BR": {
                        singular: "{AMOUNT} usuário",
                        plural: "{AMOUNT} usuários"
                      },
                      "zh-CN": {
                        singular: "{AMOUNT} 用户",
                        plural: "{AMOUNT} 用户"
                      }
                    }
                  })
                })]
              }), _v58 && (0, _v1.jsxs)(_v8.Box, {
                display: "flex",
                alignItems: "center",
                gap: 2,
                children: [(0, _v1.jsx)(_v159.Database, {}), (0, _v1.jsx)(_v38.Text, {
                  variant: "body-sm",
                  children: (0, _v70.translate)({
                    singular: "{AMOUNT} storage for Embeds and non-Public videos",
                    replacements: {
                      AMOUNT: _v58
                    },
                    dictionary: {
                      es: {
                        singular: "{AMOUNT} de almacenamiento para Embeds y videos no públicos"
                      },
                      "de-DE": {
                        singular: "{AMOUNT} Speicher für Einbettungen und nicht-öffentliche Videos"
                      },
                      "fr-FR": {
                        singular: "{AMOUNT} de stockage pour les intégrations et les vidéos non publiques"
                      },
                      "ja-JP": {
                        singular: "{AMOUNT} の埋め込みおよび非公開ビデオ用ストレージ"
                      },
                      "ko-KR": {
                        singular: "{AMOUNT} 임베드 및 비공개 동영상용 저장 공간"
                      },
                      "pt-BR": {
                        singular: "{AMOUNT} de armazenamento para Embeds e vídeos não públicos"
                      },
                      "zh-CN": {
                        singular: "{AMOUNT} 用于嵌入和非公开视频的存储空间"
                      }
                    }
                  })
                })]
              }), _v62 && (0, _v1.jsxs)(_v8.Box, {
                display: "flex",
                alignItems: "center",
                gap: 2,
                children: [(0, _v1.jsx)(_v159.Database, {}), (0, _v1.jsx)(_v38.Text, {
                  variant: "body-sm",
                  children: _v63 ? (0, _v70.translate)({
                    singular: "{AMOUNT} of bandwidth per year",
                    replacements: {
                      AMOUNT: _v62
                    },
                    dictionary: {
                      es: {
                        singular: "{AMOUNT} de ancho de banda por año"
                      },
                      "de-DE": {
                        singular: "{AMOUNT} Bandbreite pro Jahr"
                      },
                      "fr-FR": {
                        singular: "{AMOUNT} de bande passante par an"
                      },
                      "ja-JP": {
                        singular: "{AMOUNT} の年間帯域幅"
                      },
                      "ko-KR": {
                        singular: "{AMOUNT}의 연간 대역폭"
                      },
                      "pt-BR": {
                        singular: "{AMOUNT} de largura de banda por ano"
                      },
                      "zh-CN": {
                        singular: "{AMOUNT} 年度带宽"
                      }
                    }
                  }) : (0, _v70.translate)({
                    singular: "{AMOUNT} of bandwidth per month",
                    replacements: {
                      AMOUNT: _v62
                    },
                    dictionary: {
                      es: {
                        singular: "{AMOUNT} de ancho de banda por mes"
                      },
                      "de-DE": {
                        singular: "{AMOUNT} Bandbreite pro Monat"
                      },
                      "fr-FR": {
                        singular: "{AMOUNT} de bande passante par mois"
                      },
                      "ja-JP": {
                        singular: "月あたり{AMOUNT}の帯域幅"
                      },
                      "ko-KR": {
                        singular: "{AMOUNT}의 월별 대역폭"
                      },
                      "pt-BR": {
                        singular: "{AMOUNT} de largura de banda por mês"
                      },
                      "zh-CN": {
                        singular: "{AMOUNT} 每月带宽"
                      }
                    }
                  })
                })]
              })]
            }), _v56("downgrade")]
          }), (0, _v1.jsx)(_v90.ModalFooter, {
            p: 0,
            mt: 6,
            children: (0, _v1.jsxs)(_v109.Stack, {
              spacing: 3,
              width: "100%",
              children: [(0, _v1.jsx)(_v9.Button, {
                variant: "primary",
                size: "md",
                width: "100%",
                onClick: _v38,
                isLoading: _v24,
                disabled: _v24,
                children: (0, _v70.translate)({
                  singular: "Downgrade to {PLAN}",
                  replacements: {
                    PLAN: _v33?.name ?? ""
                  },
                  dictionary: {
                    es: {
                      singular: "Cambiar a {PLAN}"
                    },
                    "de-DE": {
                      singular: "Auf {PLAN} herabstufen"
                    },
                    "fr-FR": {
                      singular: "Rétrograder vers {PLAN}"
                    },
                    "ja-JP": {
                      singular: "{PLAN}にダウングレード"
                    },
                    "ko-KR": {
                      singular: "{PLAN}으로 다운그레이드"
                    },
                    "pt-BR": {
                      singular: "Rebaixar para {PLAN}"
                    },
                    "zh-CN": {
                      singular: "降级到 {PLAN}"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v9.Button, {
                variant: "destructive",
                size: "md",
                width: "100%",
                onClick: _v53,
                isLoading: _v9,
                disabled: _v9 || _v24,
                children: (0, _v70.translate)({
                  singular: "Confirm cancellation",
                  dictionary: {
                    es: {
                      singular: "Confirmar cancelación"
                    },
                    "de-DE": {
                      singular: "Kündigung bestätigen"
                    },
                    "fr-FR": {
                      singular: "Confirmer l'annulation"
                    },
                    "ja-JP": {
                      singular: "解約を確定する"
                    },
                    "ko-KR": {
                      singular: "취소 확인"
                    },
                    "pt-BR": {
                      singular: "Confirmar cancelamento"
                    },
                    "zh-CN": {
                      singular: "确认取消"
                    }
                  }
                })
              }), _v17 && (0, _v1.jsx)(_v9.Button, {
                variant: "hyperminimal",
                background: "none",
                size: "md",
                width: "100%",
                onClick: () => {
                  _v1(), _v8?.();
                },
                children: (0, _v70.translate)({
                  singular: "Request an individual plan",
                  dictionary: {
                    es: {
                      singular: "Solicitar un plan individual"
                    },
                    "de-DE": {
                      singular: "Einen individuellen Plan anfordern"
                    },
                    "fr-FR": {
                      singular: "Demander un plan individuel"
                    },
                    "ja-JP": {
                      singular: "個別プランをリクエストする"
                    },
                    "ko-KR": {
                      singular: "개별 요금제 요청"
                    },
                    "pt-BR": {
                      singular: "Solicite um plano individual"
                    },
                    "zh-CN": {
                      singular: "申请个人计划"
                    }
                  }
                })
              })]
            })
          })]
        })]
      });
    };
  var _v177 = _v0.i(0),
    _v178 = _v0.i(0);
  let _v179 = ({
      children: _v0,
      onRequestIndividualPlans: _v1
    }) => {
      let _v2,
        _v3,
        _v4,
        {
          isTeamInfoLoading: _v5,
          isMembershipInfoLoading: _v6,
          isBillingSettingChangeOngoing: _v7,
          isUploadQuotaLoading: _v8,
          membership: _v9,
          paymentMethods: _v10,
          isFetchPaymentMethodsLoading: _v11,
          teamInfo: {
            seatDetails: _v12,
            teamData: {
              ownerId: _v13
            }
          },
          teamCapabilities: {
            canUsePaymentsService: _v14
          },
          uploadQuota: _v15,
          planData: _v16
        } = (0, _v3.useContext)(_v93.ManageTeamStateCtx),
        {
          bandwidthQuota: _v17,
          uploadQuota: _v18
        } = (0, _v61.useUserQuotaApi)(),
        {
          settings: _v19
        } = (0, _v20.useOrionSettings)(),
        _v20 = _v18?.restricted ?? null,
        _v21 = (0, _v3.useContext)(_v63.ViewerContext),
        _v22 = _v21?.teamUser,
        _v23 = _v21?.locale || "en",
        [_v24, _v25] = (0, _v57.useGetUserLazy)(),
        {
          scheduledOrder: _v26,
          hasScheduledDowngrade: _v27,
          isScheduledOrderLoading: _v28
        } = (0, _v103.useScheduledOrder)(_v9.subscriptionId, _v9.tier, _v9.hasAutorenew),
        _v29 = _v65.RepackagedTiers.includes(_v9.tier ?? ""),
        _v30 = _v26?.productName?.toLowerCase().replace("vimeo ", "") ?? "",
        _v31 = _v27 && (0, _v177.isCorporateScheduledTier)(_v26?.productName),
        _v32 = _v27 && _v9.tier === _v65.Tier.Advanced && "professional" === _v30,
        _v33 = _v19.show_downgrade_card_billing && _v27 && !_v31 && !_v32 && "creator" !== _v30,
        {
          showNotice: _v34,
          showBillingPageLinkoutNotice: _v35,
          updateIsBillingSettingChangeOngoing: _v36,
          updateMembershipInfo: _v37,
          updatePaymentMethod: _v38,
          fetchMembershipInfo: _v39
        } = (0, _v3.useContext)(_v93.ManageTeamDispatchCtx),
        {
          trackAutoRenewSwitchedOn: _v40,
          trackBillingPageDisplayed: _v41,
          trackBillingPagePaymentMethodClicked: _v42,
          trackBillingPagePaymentMethodDropdownClicked: _v43,
          trackBillingPagePastPurchasesClicked: _v44,
          trackBillingPageChangePlanClicked: _v45
        } = (0, _v22.useBillingTracking)(),
        _v46 = (0, _v59.usePico)(),
        {
          trackBillingAction: _v47
        } = (0, _v3.useContext)(_v93.ManageTeamAnalytics),
        _v48 = (0, _v3.useRef)(!1),
        {
          capabilities: _v49
        } = (0, _v43.useCapability)(["hasSelfServeBandwidth"]),
        [_v50, _v51] = (0, _v45.usePatchMe)(),
        [_v52, _v53] = _v56(),
        [_v54, _v55] = (0, _v3.useState)(!1),
        [_v56, _v57] = (0, _v3.useState)({
          isBusinessChecked: _v9.userEntity === _v65.UserEntity.Business,
          isPersonalChecked: _v9.userEntity === _v65.UserEntity.Personal,
          selectedRadioValue: void 0
        }),
        [_v58, _v59] = (0, _v3.useState)(!1),
        _v60 = (0, _v3.useRef)(0),
        _v61 = _v9.billingPeriod === _v65.UserPlanType.Month ? _v66.T.Month : _v66.T.Year,
        _v62 = _v9.isImpactedByGermanConsumerLaw && _v9.tier !== _v65.Tier.Free,
        _v63 = _v62 && _v9.userEntity === _v65.UserEntity.Personal,
        _v64 = _v21?.xsrft ?? "",
        _v65 = _v25?.data?.aiCreditsQuota,
        _v66 = (0, _v3.useRef)(0),
        _v67 = !_v9.hasAutorenew,
        {
          assignment: _v68
        } = (0, _v18.useCuidEppoAssignment)({
          flagKey: "grace-period-optimization",
          assignmentType: "BOOLEAN",
          defaultAssignment: !1,
          disabled: !_v9?.gracePeriodType
        }),
        _v69 = (0, _v178.getDisplayedGracePeriodEndDate)(_v9?.gracePeriodType, _v9?.originalEndDate, _v9?.endDate),
        _v70 = (0, _v3.useMemo)(() => {
          let _v0 = {
            badge_msg: "",
            message: "",
            renew: ""
          };
          if (_v9.status === _v65.AccountStatus.Active) _v0.badge_msg = _v66.T.Active, _v0.message = _v63 ? _v66.T.NextScheduledPaymentDate : _v66.T.AutoRenewDate, _v0.renew = _v66.T.RenewNow;else if (_v9.status === _v65.AccountStatus.Lapsed) _v0.badge_msg = _v66.T.Active, _v0.message = _v66.T.SubscriptionStartDate;else if (_v9.status === _v65.AccountStatus.Cancelled) {
            let _v0 = _v63 ? _v66.T.ScheduleOneTimePayment : _v66.T.EnableAutoRenew;
            _v0.badge_msg = _v66.T.PlanExpires((0, _v119.convertDateToMMDDYY)(_v9.renewalDate)), _v0.message = _v66.T.SubscriptionEndDate, _v0.renew = _v0;
          }
          return _v9.tier === _v65.Tier.Free && (_v0.badge_msg = _v66.T.Active, _v0.message = _v66.T.SubscriptionStartDate), _v9.isFreeTrial && (_v0.badge_msg = _v67 ? _v66.T.AccessEnding : _v66.T.FreeTrial, _v0.message = _v19.show_trial_renewal_date_in_billing_card ? _v63 ? _v66.T.NextScheduledPaymentDate : _v66.T.AutoRenewDate : _v66.T.SubscriptionStartDate), (_v67 || _v68) && (_v0.badge_msg = _v66.T.AccessEnding, _v0.message = _v67 ? _v66.T.AccessEnding : _v66.T.RenewalDate), _v0;
        }, [_v63, _v9.isFreeTrial, _v9.renewalDate, _v9.status, _v9.tier, _v19.show_trial_renewal_date_in_billing_card, _v67, _v68]),
        [_v71, _v72] = (0, _v3.useState)(!1),
        {
          isOpen: _v73,
          onOpen: _v74,
          onClose: _v75
        } = (0, _v40.useDisclosure)(),
        _v76 = _v52({
          select: ["currency", "publishableKey"]
        }, {
          revalidateIfStale: !1,
          revalidateOnFocus: !1,
          revalidateOnReconnect: !1
        }),
        [_v77, _v78] = (0, _v3.useState)(0),
        [_v79, _v80] = (0, _v3.useState)(_v9.billingAddress),
        _v81 = _v9.tier,
        _v82 = "year" === _v9.billingPeriod ? "annual" : "monthly";
      (0, _v3.useEffect)(() => {
        _v48.current || _v6 || _v28 || null === _v46 || void 0 !== _v81 && (_v48.current = !0, _v41({
          tier: _v81,
          periodicity: _v82,
          b2bBanner: _v31,
          b2cCard: _v33
        }));
      }, [_v6, _v28, _v46, _v81, _v33, _v31]), (0, _v3.useEffect)(() => {
        _v80(_v9.billingAddress);
      }, [_v9.billingAddress]);
      let [_v83, _v84] = (0, _v3.useMemo)(() => _v79 && _v76.data?.publishableKey && _v76.data?.currency ? [{
          mode: "setup",
          currency: _v76.data.currency
        }, (0, _v27.loadStripe)(_v76.data.publishableKey)] : [void 0, null], [_v79, _v76.data]),
        _v85 = (0, _v3.useRef)(0);
      _v6 || _v8 || !(_v85.current < 1) || (_v47({
        action_type: _v64.BillingActionTypes.LAND,
        location: _v64.BillingActionLocations.PAGE
      }), _v85.current += 1), (0, _v3.useEffect)(() => {
        _v13 && _v24({
          select: ["aiCreditsQuota"],
          where: {
            userId: _v13
          }
        });
      }, [_v13, _v24]), (0, _v3.useEffect)(() => {
        void 0 !== _v56.selectedRadioValue && (_v50({
          select: ["profilePreferences"],
          variables: {
            profilePreferences: {
              userEntity: _v56.selectedRadioValue
            }
          }
        }), _v51.loading || _v51.error || _v37({
          ..._v9,
          userEntity: _v56.selectedRadioValue
        }));
      }, [_v56.isBusinessChecked, _v56.isPersonalChecked, _v51.error]), (0, _v3.useEffect)(() => {
        _v9.userEntity && _v57(_v0 => ({
          ..._v0,
          ...{
            isBusinessChecked: _v9.userEntity === _v65.UserEntity.Business,
            isPersonalChecked: _v9.userEntity === _v65.UserEntity.Personal
          }
        }));
      }, [_v9.userEntity]);
      let _v86 = (0, _v3.useCallback)(_v0 => {
          _v36(!0), _v38(_v0);
          let _v1 = _v10.find(_v0 => (0, _v119.getIdFromLink)(_v0.uri ?? "", !0) === _v0);
          _v1 && (_v9.paymentMethod = _v1), _v37(_v9), _v47({
            action_type: _v64.BillingActionTypes.SELECT,
            location: _v64.BillingActionLocations.PAYMENT_METHOD_OPTION
          });
        }, [_v38, _v9, _v10, _v37, _v47, _v36]),
        _v87 = async _v0 => {
          try {
            let _v0 = _v0 && _v10.length > 0 ? (0, _v119.getIdFromLink)(_v10[0].uri, !0) : void 0;
            await _v52({
              select: [],
              where: {
                subscriptionId: _v9.subscriptionId
              },
              variables: {
                autoRenew: _v0,
                paymentMethodId: _v0
              }
            }), _v0 && _v34({
              canShow: !0,
              type: "primary",
              text: _v66.T.EnableAutoRenewSuccess
            });
          } catch (_v0) {
            _v34({
              canShow: !0,
              type: "negative",
              text: _v66.T.SomethingWentWrong
            });
          }
        };
      (0, _v3.useEffect)(() => {
        if (_v53.callCount <= _v66.current || !_v53.data || _v53.loading) return;
        let _v0 = _v53.data.autoRenew || !1,
          _v1 = _v53.data.status,
          _v2 = _v0 && "SUBSCRIPTION_STATUS_CANCELLED" !== _v1 ? _v65.AccountStatus.Active : _v65.AccountStatus.Cancelled;
        _v37({
          ..._v9,
          hasAutorenew: _v0,
          subscriptionId: _v53.data.id,
          status: _v2
        }), _v66.current = _v53.callCount, _v36(!1);
      }, [_v53, _v9, _v37, _v36]);
      let _v88 = async () => {
          if (_v47({
            action_type: _v64.BillingActionTypes.CLICK,
            location: _v64.BillingActionLocations.OPTOUT_MODAL_CONFIRM_OPTOUT_BUTTON
          }), _v14) _v87(!1);else try {
            _v36(!0), await (0, _v42.submitOptOutRequest)({
              token: _v64
            });
          } catch (_v0) {
            _v36(!1), _v34({
              canShow: !0,
              type: "negative",
              text: _v66.T.SomethingWentWrong
            });
          }
        },
        _v89 = () => {
          if (_v14) _v36(!0), _v87(!0);else {
            let _v0 = (0, _v119.getIdFromLink)(_v9.suggestedPaymentMethod?.uri ?? _v10[0]?.uri ?? "", !0);
            if (-1 === parseInt(_v0)) return void _v34({
              canShow: !0,
              type: "negative",
              text: _v66.T.SomethingWentWrong
            });
            try {
              _v91(_v0);
            } catch (_v0) {
              _v34({
                canShow: !0,
                type: "negative",
                text: _v66.T.SomethingWentWrong
              });
              return;
            }
          }
        },
        _v90 = _v0 => {
          let {
            value: _v1
          } = _v0.target;
          _v47({
            action_type: _v64.BillingActionTypes.SELECT,
            location: _v1 === _v65.UserEntity.Personal ? _v64.BillingActionLocations.USER_ENTITY_PERSONAL_RADIO : _v64.BillingActionLocations.USER_ENTITY_BUSINESS_RADIO
          }), _v57(_v0 => ({
            ..._v0,
            selectedRadioValue: _v1
          })), _v62 ? _v55(!0) : _v57(_v0 => ({
            ..._v0,
            ...{
              isPersonalChecked: _v1 === _v65.UserEntity.Personal,
              isBusinessChecked: _v1 === _v65.UserEntity.Business
            }
          }));
        };
      async function _v91(_v0) {
        _v36(!0), await _v38(_v0, !1), _v39(), _v34({
          canShow: !0,
          type: "primary",
          text: _v66.T.EnableAutoRenewSuccess
        }), _v36(!1);
      }
      let _v92 = _v12?.totalPurchasedCount || _v9.seatCount,
        _v93 = _v12?.additionalPurchasedCount || 0,
        _v94 = null != _v9.additionalSeatPrice && null != _v9.basePlanPrice,
        _v95 = _v9.tier === _v65.Tier.Free ? _v66.T.Free : _v94 ? (0, _v119.formatAmountWithCurrency)(_v9.basePlanPrice + _v9.additionalSeatPrice * _v93, _v9.currency, 0) : (0, _v119.formatAmountWithCurrency)(_v9.pricePerSeat * (_v64.OWNER + _v93), _v9.currency, 0),
        _v96 = _v94 ? (0, _v119.formatAmountWithCurrency)(_v9.additionalSeatPrice, _v9.currency, 0) : (0, _v119.formatAmountWithCurrency)(_v9.pricePerSeat, _v9.currency, 0),
        _v97 = _v9.tier === _v65.Tier.Advanced ? "/enterprise/contact-us" : "/upgrade",
        _v98 = _v9.paymentMethod ?? _v9.suggestedPaymentMethod ?? _v10.find(_v0 => _v0.inUse) ?? _v10[0],
        _v99 = _v98 && (0, _v119.isPaymentExpired)(_v98),
        _v100 = (0, _v3.useCallback)(() => {
          if (!window) return !1;
          _v47({
            action_type: _v64.BillingActionTypes.CLICK,
            location: _v64.BillingActionLocations.UPGRADE_BUTTON
          });
          let _v0 = window.open(_v97, "_blank");
          _v0 && (_v59(!0), _v60.current = setInterval(() => {
            _v0 && _v0.closed && (_v0 = null, _v59(!1), _v35({
              canShow: !1,
              type: "primary",
              text: ""
            }));
          }, 0)), window.successfulUpgradeCallback = () => {
            _v59(!1), _v35({
              canShow: !1,
              type: "primary",
              text: ""
            }), _v60.current && clearInterval(_v60.current), window.location.reload();
          };
        }, [_v97, _v59, _v35, _v47]);
      (0, _v3.useEffect)(() => {
        _v58 && _v35({
          canShow: !0,
          type: "primary",
          text: "Upgrade flow is in progress in another tab."
        });
      }, [_v58, _v35]);
      let _v101 = (0, _v3.useCallback)(_v0 => {
          if (_v27 && _v26) {
            let _v0 = "year" === _v26.billingPeriod ? _v66.T.Year : _v66.T.Month,
              _v1 = _v0 ?? ("year" === _v26.billingPeriod ? _v26.price?.formatted : _v26.monthlyPrice?.formatted);
            if (_v1 && _v26.seatCount) return _v66.T.PricePerSeatWithTeamSeats(_v1, _v0, _v26.seatCount);
          }
          if (_v94) {
            let _v0 = _v0 ?? (0, _v119.formatAmountWithCurrency)(_v9.basePlanPrice, _v9.currency, 0);
            return _v66.T.PricePerSeatWithTeamSeats(_v0, _v61, 1);
          }
          let _v1 = _v0 ?? _v96;
          return _v9.tier && _v65.LegacyTiers.includes(_v9?.tier) ? _v66.T.PriceWithoutSeats(_v1, _v61) : _v9.tier === _v65.Tier.Free ? _v66.T.PricePerSeatForFreeUsers(_v1) : _v12 && _v15?.space?.unit === "video_size" ? _v66.T.PricePerSeatWithTeamSeats(_v1, _v61, _v12.basePlanCount) : _v66.T.PricePerSeat(_v1, _v61);
        }, [_v9, _v15, _v96, _v61, _v12, _v27, _v26, _v94]),
        _v102 = (0, _v3.useCallback)(() => _v9 && _v9.tier == _v65.Tier.Free ? "" : _v94 && _v93 > 0 ? _v66.T.PlanDetailsVerboseSeats(_v9.tierForDisplay, _v93, _v96) : _v94 ? _v66.T.PlanDetailsVerbose(_v9.tierForDisplay) : _v9?.tier && _v15?.space?.unit === "video_size" ? _v93 > 0 ? _v66.T.PlanDetailsVerboseSeats(_v119.tiers[_v9?.tier], _v93, _v96) : _v66.T.PlanDetailsVerbose(_v9.tierForDisplay) : _v66.T.PlanDetails(_v9.nextCycle?.seatCount ?? _v92, _v96), [_v9, _v15, _v96, _v92, _v93, _v94]),
        _v103 = (0, _v3.useMemo)(() => _v9.isReverseFreeTrial ? _v16 ? {
          price: (0, _v119.formatAmountWithCurrency)(_v16.price.annual, _v9.currency, 0),
          period: "year"
        } : {
          price: "",
          period: "year"
        } : null, [_v9, _v16]),
        _v104 = (0, _v3.useMemo)(() => {
          if (_v103) return _v103.price;
          if (_v9 && _v16 && _v9.tier === _v65.Tier.Plus) {
            let _v0 = "month" === _v9.billingPeriod && _v16.price.monthly ? _v16.price.monthly : _v16.price.annual;
            return (0, _v119.formatAmountWithCurrency)(_v0, _v9.currency, 0);
          }
          return _v9.tier !== _v65.Tier.Plus ? _v95 : "";
        }, [_v9, _v16, _v95, _v103]);
      function _v105(_v0) {
        return _v65.SolutionTiers.includes(_v0);
      }
      let _v106 = _v9.tier === _v65.Tier.Free && _v15.lifetime && _v15.lifetime?.unit === "video_count",
        _v107 = _v65?.available !== void 0 || null,
        {
          assignment: _v108,
          isEppoSDKInitialized: _v109
        } = (0, _v18.useEppoAssignment)({
          flagKey: "display-bandwidth-cx-meter",
          subject: {
            key: _v21?.user?.id ?? "",
            keyType: _v44.SubjectKeyTypes.TOGGLE_FOR_ALL_SUBJECTS
          },
          defaultAssignment: !1
        }),
        _v110 = _v109 && _v108,
        _v111 = (0, _v39.useBreakpointValue)({
          base: "center",
          sm: "flex-start"
        }),
        _v112 = (0, _v39.useBreakpointValue)({
          base: 3,
          sm: 6
        }),
        _v113 = (0, _v39.useBreakpointValue)({
          base: "center",
          sm: "flex-end"
        }),
        _v114 = (0, _v39.useBreakpointValue)({
          base: "column",
          md: "row"
        }),
        _v115 = (0, _v39.useBreakpointValue)({
          base: 24,
          lg: 5
        }),
        _v116 = (0, _v39.useBreakpointValue)({
          base: "100%",
          sm: "50%",
          lg: _v106 || _v9.tier && _v105(_v9.tier) || _v107 ? _v110 ? "20%" : "25%" : _v110 ? "25%" : "33%"
        }),
        _v117 = (0, _v39.useBreakpointValue)({
          base: "column",
          lg: "row"
        }),
        _v118 = (0, _v39.useBreakpointValue)({
          base: "center",
          md: "flex-end"
        }),
        _v119 = (0, _v39.useBreakpointValue)({
          base: "center",
          md: "flex-end"
        }),
        _v120 = new Date(),
        _v121 = new Date();
      _v121.setDate(_v121.getDate() - 3);
      let _v122 = new Date();
      _v122.setDate(1), _v122.setMonth(_v122.getMonth() + 1), _v122.setHours(0), _v122.setMinutes(0);
      let _v123 = Intl.DateTimeFormat(_v23, {
          month: "short",
          day: "numeric"
        }),
        _v124 = Intl.DateTimeFormat(_v23, {
          year: "numeric",
          month: "short",
          day: "numeric"
        });
      _v120.setDate(_v120.getDate() - 4);
      let _v125 = (_v9.status === _v65.AccountStatus.Active || _v9.isFreeTrial) && _v9.hasAutorenew,
        _v126 = _v9.status === _v65.AccountStatus.Cancelled && _v71,
        {
          isOpen: _v127,
          close: _v128
        } = (_v2 = (0, _v2.useRouter)(), {
          isOpen: "1" === (_v3 = (0, _v85.useSearchParams)()).get("auto-renew"),
          close: () => {
            let _v0 = new URLSearchParams(_v3.toString());
            _v0.delete("auto-renew"), _v2.replace({
              pathname: location.pathname,
              search: _v0.toString()
            });
          }
        });
      (0, _v3.useEffect)(() => {
        _v67 && !_v6 && _v127 && _v9.tier && _v9.status !== _v65.AccountStatus.Cancelled && _v128();
      }, [_v128, _v127, _v6, _v9.status, _v9.tier, _v67]);
      let _v129 = _v27 ? _v26?.productName ?? "" : _v9.tierForDisplay,
        _v130 = !_v27 && _v49.hasSelfServeBandwidth ? ` ${_v16?.metadata.entitlements.params.bandwidth.periodicQuota} annual bandwidth` : "",
        _v131 = _v26 ? _v66.T.Month : _v103 ? _v66.T.Year : _v61,
        _v132 = (0, _v3.useMemo)(() => {
          let _v0 = _v104;
          return _v131 === _v66.T.Month && _v26?.monthlyPrice?.formatted && (_v0 = _v26?.monthlyPrice?.formatted), _v131 === _v66.T.Year && _v26?.price?.formatted && (_v0 = _v26?.price?.formatted), _v0;
        }, [_v131, _v26?.monthlyPrice?.formatted, _v26?.price?.formatted, _v104]),
        _v133 = !!_v26?.discount || !!_v26?.discountPercent,
        _v134 = (0, _v3.useMemo)(() => _v133 ? _v131 === _v66.T.Month ? _v26?.originalMonthlyPrice?.formatted ?? null : _v26?.originalPrice?.formatted ?? null : null, [_v133, _v131, _v26?.originalMonthlyPrice?.formatted, _v26?.originalPrice?.formatted]),
        _v135 = _v26 ? _v66.T.PlanDetailsVerbose(_v26.productName ?? "") : _v102(),
        _v136 = _v53.loading || _v7,
        [_v137, _v138] = (0, _v3.useState)(!1),
        [_v139, _v140] = (0, _v3.useState)(null),
        [_v141, _v142] = (0, _v3.useState)(0),
        [_v143, _v144] = (0, _v3.useState)(!1),
        _v145 = {
          cancelAutoRenew: _v88,
          cancelRequestPending: _v136,
          notification: _v34,
          setShowPostCancelSurvey: _v72,
          renewalPrice: _v132,
          renewalPeriodLabel: _v131,
          teamUser: _v22,
          reopenBspAtConfirmSignal: _v141,
          ...(!!(_v4 = _v26?.productName?.toLowerCase().replace("vimeo ", "")) && ["professional", "studio", "production"].includes(_v4) && !_v133 && {
            onBeforeCancel: (_v0, _v1) => {
              _v138(!0), _v140(() => _v0), _v144(!!_v1?.skipBspBackTarget);
            }
          })
        },
        _v146 = _v5 || _v8 || _v6 || _v11 || _v28,
        [_v147, _v148] = (0, _v3.useState)(!1);
      return ((0, _v3.useEffect)(() => {
        _v146 || _v147 || _v148(!0);
      }, [_v146, _v147]), _v146 && !_v147) ? (0, _v1.jsx)(_v36.Skeleton, {
        marginTop: (0, _v15.rem)(26),
        minHeight: (0, _v15.rem)(411)
      }) : (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsxs)(_v11.Flex, {
          mt: 6,
          gap: 6,
          flexDirection: {
            base: "column",
            lg: "row"
          },
          alignItems: "flex-start",
          children: [(0, _v1.jsxs)(_v8.Box, {
            p: 6,
            border: "1px solid",
            borderColor: "background",
            borderRadius: "md",
            bg: "fill-surface",
            flex: 1,
            children: [(0, _v1.jsxs)(_v11.Flex, {
              justifyContent: "flex-start",
              flexDirection: _v114,
              alignItems: {
                base: _v67 || _v68 ? "flex-start" : _v111,
                md: _v67 || _v68 ? "center" : _v111
              },
              children: [(0, _v1.jsxs)(_v14.VStack, {
                align: "flex-start",
                flexGrow: 1,
                children: [(0, _v1.jsxs)(_v13.HStack, {
                  width: "max-content",
                  children: [(0, _v1.jsxs)(_v38.Text, {
                    variant: "heading-md",
                    children: [_v129, _v130]
                  }), _v27 ? (0, _v1.jsx)(_v28.Badge, {
                    ml: (0, _v15.rem)("5px"),
                    size: "sm",
                    backgroundColor: _v32 ? "status-positive-primary" : "status-caution-primary",
                    textColor: "white",
                    border: "none",
                    children: _v66.T.ActiveAtNextRenewal
                  }) : (0, _v1.jsx)(_v28.Badge, {
                    ml: (0, _v15.rem)("5px"),
                    size: "sm",
                    variant: "Cancelled" === _v9.status ? "mature" : void 0,
                    backgroundColor: _v67 || _v68 ? "status-caution-primary" : "Cancelled" !== _v9.status ? "status-positive-primary" : void 0,
                    textColor: "Cancelled" !== _v9.status ? "white" : void 0,
                    border: "Cancelled" !== _v9.status ? "none" : void 0,
                    children: _v70.badge_msg
                  })]
                }), (0, _v1.jsxs)(_v38.Text, {
                  variant: "body-sm",
                  color: "text-secondary",
                  whiteSpace: "nowrap",
                  children: [_v101(_v133 ? _v26?.billingPeriod === "year" ? _v26?.originalPrice?.formatted : _v26?.originalMonthlyPrice?.formatted : void 0), " ", !_v27 && (0, _v1.jsx)(_v29.Link, {
                    onClick: () => {
                      _v47({
                        action_type: _v64.BillingActionTypes.CLICK,
                        location: _v64.BillingActionLocations.SEE_PLAN_DETAILS_BUTTON
                      });
                    },
                    href: (0, _v21.buildUpgradePlanUrl)({
                      paywallTrigger: "billing_card_see_plan_details_link",
                      paywallLocation: "billing_card",
                      paywallFeature: "billing"
                    }),
                    isExternal: !0,
                    variant: _v67 || _v68 ? "brand" : "inline-secondary",
                    fontSize: "12px",
                    children: _v66.T.SeePlanDetails
                  })]
                })]
              }), (0, _v1.jsx)(_v14.VStack, {
                hidden: _v68,
                align: _v113,
                flexGrow: 1,
                mt: {
                  base: 16,
                  md: 0
                },
                width: "100%",
                children: _v27 ? (0, _v1.jsx)(_v9.Button, {
                  variant: "primary",
                  size: "sm",
                  onClick: () => {
                    _v45();
                    let _v0 = (0, _v21.buildUpgradePlanUrl)({
                      paywallTrigger: "billing_card_change_plan_button",
                      paywallLocation: "billing_card",
                      paywallFeature: "billing"
                    });
                    window.open(_v0, "_self");
                  },
                  width: {
                    base: "100%",
                    md: "auto"
                  },
                  display: {
                    base: "none",
                    md: "inline-flex"
                  },
                  children: _v66.T.ChangePlan
                }) : _v67 && _v9.status === _v65.AccountStatus.Cancelled ? _v9.isReverseFreeTrial ? null : (0, _v1.jsx)(_v9.Button, {
                  variant: "primary",
                  isLoading: _v7,
                  size: "sm",
                  onClick: () => {
                    _v47({
                      action_type: _v64.BillingActionTypes.CLICK,
                      location: _v63 ? _v64.BillingActionLocations.SCHEDULE_ONE_TIME_PAYMENT_BUTTON : _v64.BillingActionLocations.ENABLE_AUTORENEW_BUTTON
                    });
                    let _v0 = "year" === _v9.billingPeriod ? "annual" : "monthly";
                    _v40({
                      tier: _v9.tier,
                      periodicity: _v0
                    }), _v89();
                  },
                  width: {
                    base: "100%",
                    md: "auto"
                  },
                  children: _v70.renew
                }) : (0, _v1.jsx)(_v9.Button, {
                  variant: "upsell",
                  size: "sm",
                  onClick: _v100,
                  width: {
                    base: "100%",
                    md: "auto"
                  },
                  children: _v66.T.UpgradeButton
                })
              })]
            }), (0, _v1.jsx)(_v11.Flex, {
              flexDirection: "column",
              mt: _v115,
              children: (0, _v1.jsxs)(_v11.Flex, {
                flexDirection: _v114,
                flexWrap: "wrap",
                justifyContent: "space-between",
                children: [(0, _v1.jsx)(_v14.VStack, {
                  align: "flex-start",
                  spacing: _v112,
                  flexGrow: 1,
                  width: _v116,
                  mb: _v115,
                  children: (0, _v1.jsxs)(_v8.Box, {
                    children: [(0, _v1.jsxs)(_v38.Text, {
                      as: "span",
                      variant: "heading-xs",
                      mb: 1,
                      children: [_v9.tier !== _v65.Tier.Free ? _v66.T.CostAtRenewal : _v66.T.Cost, " "]
                    }), (0, _v1.jsx)(_v38.Text, {
                      as: "span",
                      variant: "heading-xs",
                      color: "text-tertiary",
                      children: _v9.tier !== _v65.Tier.Free ? _v66.T.PerSubscriptionType(_v131) : ""
                    }), (0, _v1.jsxs)(_v38.Text, {
                      variant: "heading-md",
                      mt: 1,
                      mb: 1,
                      children: [_v134 && (0, _v1.jsx)(_v38.Text, {
                        as: "span",
                        textDecoration: "line-through",
                        color: "text-tertiary",
                        mr: 2,
                        children: _v134
                      }), _v132]
                    }), _v133 && _v26?.discountPercent ? (0, _v1.jsx)(_v38.Text, {
                      variant: "body-sm",
                      color: "status-positive-primary",
                      children: _v66.T.CostAtRenewalDiscount(_v26.discountPercent)
                    }) : null, (0, _v1.jsx)(_v38.Text, {
                      variant: "body-sm",
                      children: _v135
                    })]
                  })
                }), (0, _v1.jsx)(_v14.VStack, {
                  align: "flex-start",
                  spacing: _v112,
                  flexGrow: 1,
                  width: _v116,
                  mb: _v115,
                  children: (0, _v1.jsxs)(_v8.Box, {
                    width: "70%",
                    children: [(0, _v1.jsxs)(_v38.Text, {
                      as: "span",
                      variant: "heading-xs",
                      mb: 1,
                      children: [_v70.message, !_v67 && !_v68 && _v9.status === _v65.AccountStatus.Cancelled && (0, _v1.jsx)(_v41.InfoCircle, {
                        boxSize: "2xs",
                        verticalAlign: "top",
                        position: "relative",
                        ml: "4px",
                        top: "4px",
                        color: "status-destructive-primary"
                      }), !_v68 && _v9?.gracePeriodType && (0, _v1.jsx)(_v16.CircleExclamationFilled, {
                        boxSize: "2xs",
                        verticalAlign: "top",
                        position: "relative",
                        ml: "4px",
                        top: "4px",
                        color: "status-destructive-primary"
                      })]
                    }), (0, _v1.jsxs)(_v11.Flex, {
                      mt: 1,
                      mb: 1,
                      gap: 1,
                      alignItems: "center",
                      children: [(_v67 && _v9.status === _v65.AccountStatus.Cancelled || _v68) && (0, _v1.jsx)(_v16.CircleExclamationFilled, {
                        boxSize: "2xs",
                        color: "status-destructive-primary"
                      }), (0, _v1.jsx)(_v38.Text, {
                        variant: "heading-md",
                        textColor: _v67 || _v68 ? "status-destructive-primary" : "text-primary",
                        whiteSpace: "nowrap",
                        children: _v9.isFreeTrial && _v19.show_trial_renewal_date_in_billing_card ? (0, _v119.formatDate)(_v9.renewalDate) : [_v65.Tier.Free, _v65.Tier.Basic].includes(_v9.tier) || _v9.isFreeTrial ? (0, _v119.formatDate)(_v9.startDate) : _v9.gracePeriodType ? (0, _v119.formatDate)(_v9.originalEndDate) : _v9.status == _v65.AccountStatus.Cancelled ? (0, _v119.formatDate)(_v9.endDate) : (0, _v119.formatDate)(_v9.renewalDate)
                      })]
                    }), _v68 && _v9 && (0, _v1.jsx)(_v38.Text, {
                      variant: "body-sm",
                      color: "status-destructive-primary",
                      children: _v66.T.AccessExtended((0, _v119.getDaysBetween)(_v9.originalEndDate, _v69 ?? _v9.endDate))
                    }), !_v67 && !_v68 && _v9.status === _v65.AccountStatus.Cancelled && (0, _v1.jsx)(_v1.Fragment, {
                      children: _v10.length ? (0, _v1.jsxs)(_v11.Flex, {
                        alignItems: "center",
                        children: [(0, _v1.jsx)(_v9.Button, {
                          isDisabled: _v7,
                          size: "xs",
                          variant: "link",
                          textDecoration: "underline",
                          background: "none",
                          pl: "0",
                          onClick: () => {
                            _v47({
                              action_type: _v64.BillingActionTypes.CLICK,
                              location: _v63 ? _v64.BillingActionLocations.SCHEDULE_ONE_TIME_PAYMENT_BUTTON : _v64.BillingActionLocations.ENABLE_AUTORENEW_BUTTON
                            }), _v89();
                          },
                          children: _v70.renew
                        }), _v63 && (0, _v1.jsxs)(_v30.Popover, {
                          trigger: "click",
                          children: [(0, _v1.jsx)(_v33.PopoverTrigger, {
                            children: (0, _v1.jsx)("span", {
                              children: (0, _v1.jsx)(_v41.InfoCircle, {
                                color: "text-tertiary",
                                boxSize: "2xs",
                                verticalAlign: "top",
                                position: "relative",
                                top: "4px"
                              })
                            })
                          }), (0, _v1.jsx)(_v32.PopoverContent, {
                            maxWidth: "200px",
                            children: (0, _v1.jsx)(_v31.PopoverBody, {
                              textStyle: "body-md",
                              children: _v66.T.ScheduleOneTimePaymentWithDate((0, _v119.formatDate)(_v9.renewalDate))
                            })
                          })]
                        }), _v7 && (0, _v1.jsx)(_v37.Spinner, {
                          size: "xs",
                          ml: (0, _v15.rem)(15)
                        })]
                      }) : (0, _v1.jsx)(_v11.Flex, {
                        alignItems: "center",
                        children: (0, _v1.jsxs)(_v30.Popover, {
                          trigger: "click",
                          children: [(0, _v1.jsx)(_v33.PopoverTrigger, {
                            children: (0, _v1.jsx)("span", {
                              children: (0, _v1.jsx)(_v41.InfoCircle, {
                                color: "text-tertiary",
                                boxSize: "2xs",
                                verticalAlign: "top",
                                position: "relative",
                                top: "4px"
                              })
                            })
                          }), (0, _v1.jsx)(_v32.PopoverContent, {
                            maxWidth: "200px",
                            children: (0, _v1.jsx)(_v31.PopoverBody, {
                              textStyle: "body-md",
                              children: _v66.T.AddNewCard
                            })
                          })]
                        })
                      })
                    })]
                  })
                }), (0, _v1.jsx)(_v14.VStack, {
                  align: "flex-start",
                  spacing: _v112,
                  flexGrow: 1,
                  width: _v116,
                  mb: _v106 || _v9.tier && _v105(_v9.tier) ? _v115 : 0,
                  children: _v15.periodic && (_v9.tier !== _v65.Tier.Free || _v15?.space?.unit !== "video_count") && (0, _v1.jsx)(_v1.Fragment, {
                    children: (0, _v1.jsxs)(_v8.Box, {
                      children: [(0, _v1.jsxs)(_v38.Text, {
                        variant: "heading-xs",
                        mb: 1,
                        children: [_v20 || _v15?.space?.unit === "video_size" ? _v66.T.StorageUsed : _v66.T.VideosUsed, (0, _v1.jsxs)(_v30.Popover, {
                          trigger: "click",
                          children: [(0, _v1.jsx)(_v33.PopoverTrigger, {
                            children: (0, _v1.jsx)("span", {
                              children: (0, _v1.jsx)(_v41.InfoCircle, {
                                color: _v20 ? (_v20.used ?? 0) >= (_v20.max ?? 0) ? "status-destructive-primary" : "text-tertiary" : _v15?.space && _v15.space.used >= _v15.space.max ? "status-destructive-primary" : "text-tertiary",
                                boxSize: "2xs",
                                verticalAlign: "top",
                                position: "relative",
                                top: "2px",
                                ml: 2
                              })
                            })
                          }), (0, _v1.jsx)(_v32.PopoverContent, {
                            maxWidth: "200px",
                            children: (0, _v1.jsx)(_v31.PopoverBody, {
                              textStyle: "body-md",
                              children: _v20 ? _v66.T.RestrictedStorageUsageInfo : _v66.T.VideoUsageInfo
                            })
                          })]
                        })]
                      }), (0, _v1.jsx)(_v8.Box, {
                        children: (0, _v1.jsxs)(_v13.HStack, {
                          mt: 1,
                          mb: 2,
                          justifyContent: "space-between",
                          children: [(0, _v1.jsx)(_v38.Text, {
                            variant: "heading-md",
                            children: _v20 ? _v66.T.UsageOfMax((0, _v62.formatBytes)(_v20.used ?? 0, (_v20.used ?? 0) > 0), (0, _v62.formatBytes)(_v20.max ?? 0, !1)) : _v15?.space?.unit === "video_size" ? _v66.T.UsageOfMax((0, _v62.formatBytes)(_v15?.space.used, _v15?.space.used > 0), (0, _v62.formatBytes)(_v15?.space.max, !1)) : _v66.T.UsageOfMax((0, _v119.formatNumber)(_v15.periodic.used), (0, _v119.formatNumber)(_v15.periodic.max))
                          }), _v9.tier && _v105(_v9.tier) && (0, _v1.jsx)(_v38.Text, {
                            variant: "body-md",
                            color: "text-secondary",
                            alignSelf: "center",
                            children: _v20 ? _v66.T.Percentage(Math.round((_v20.used ?? 0) / (_v20.max ?? 1) * 100)) : _v15?.space?.unit === "video_size" ? _v66.T.Percentage(Math.round(_v15?.space.used / _v15?.space.max * 100)) : _v66.T.Percentage(Math.round(_v15.periodic.used / _v15.periodic.max * 100))
                          })]
                        })
                      }), (0, _v1.jsx)(_v8.Box, {
                        children: _v20 ? (_v20.used ?? 0) < (_v20.max ?? 0) ? (0, _v1.jsx)(_v34.Progress, {
                          size: "xs",
                          variant: "default",
                          value: _v20.used ?? 0,
                          max: _v20.max ?? 0
                        }) : (0, _v1.jsx)(_v34.Progress, {
                          size: "xs",
                          bgColor: "status-destructive-primary",
                          variant: "destructive",
                          value: _v20.max ?? 0,
                          max: _v20.max ?? 0
                        }) : _v15?.space && _v15.space.used < _v15.space.max ? (0, _v1.jsx)(_v34.Progress, {
                          size: "xs",
                          variant: "default",
                          value: _v15?.space?.used || _v15.periodic.used,
                          max: _v15?.space?.max || _v15.periodic.max
                        }) : (0, _v1.jsx)(_v34.Progress, {
                          size: "xs",
                          bgColor: "status-destructive-primary",
                          variant: "destructive",
                          value: _v15?.space?.max || _v15.periodic.max,
                          max: _v15?.space?.max || _v15.periodic.max
                        })
                      })]
                    })
                  })
                }), _v9.tier === _v65.Tier.Free && _v15.lifetime && _v15.lifetime?.unit === "video_count" && (0, _v1.jsx)(_v14.VStack, {
                  align: "flex-start",
                  spacing: _v112,
                  flexGrow: 1,
                  width: _v116,
                  children: (0, _v1.jsxs)(_v8.Box, {
                    children: [(0, _v1.jsxs)(_v38.Text, {
                      variant: "heading-xs",
                      mb: 4,
                      children: [_v66.T.LifetimeVideos, " ", (0, _v1.jsx)(_v38.Text, {
                        as: "span",
                        variant: "body-md",
                        color: "text-tertiary",
                        children: _v66.T.Total
                      }), (0, _v1.jsxs)(_v30.Popover, {
                        trigger: "click",
                        children: [(0, _v1.jsx)(_v33.PopoverTrigger, {
                          children: (0, _v1.jsx)("span", {
                            children: (0, _v1.jsx)(_v41.InfoCircle, {
                              color: _v15.lifetime.used >= _v15.lifetime.max ? "status-destructive-primary" : "text-tertiary",
                              boxSize: "2xs",
                              verticalAlign: "top",
                              position: "relative",
                              top: "2px",
                              ml: 2
                            })
                          })
                        }), (0, _v1.jsx)(_v32.PopoverContent, {
                          maxWidth: "200px",
                          children: (0, _v1.jsx)(_v31.PopoverBody, {
                            textStyle: "body-md",
                            children: _v66.T.VideoUsageInfo
                          })
                        })]
                      })]
                    }), (0, _v1.jsx)(_v8.Box, {
                      children: (0, _v1.jsx)(_v38.Text, {
                        variant: "heading-md",
                        mt: 4,
                        mb: 4,
                        children: _v66.T.UsageOfMax((0, _v119.formatNumber)(_v15.lifetime?.used), (0, _v119.formatNumber)(_v15.lifetime?.max))
                      })
                    }), (0, _v1.jsx)(_v8.Box, {
                      children: _v15.lifetime.used < _v15.lifetime.max ? (0, _v1.jsx)(_v34.Progress, {
                        size: "xs",
                        variant: "default",
                        value: _v15.lifetime.used,
                        max: _v15.lifetime.max
                      }) : (0, _v1.jsx)(_v34.Progress, {
                        size: "xs",
                        bgColor: "status-destructive-primary",
                        variant: "destructive",
                        value: _v15.lifetime.max,
                        max: _v15.lifetime.max
                      })
                    })]
                  })
                }), _v107 && _v65 && (0, _v1.jsx)(_v84, {
                  spacing: _v112,
                  width: _v116,
                  align: "flex-start",
                  flexGrow: 1,
                  aiCreditsQuota: _v65
                }), _v17 && _v110 && void 0 !== _v17.used && void 0 !== _v17.available && (0, _v1.jsx)(_v14.VStack, {
                  align: "flex-start",
                  spacing: _v112,
                  flexGrow: 1,
                  width: _v116,
                  children: (0, _v1.jsxs)(_v8.Box, {
                    children: [(0, _v1.jsxs)(_v38.Text, {
                      variant: "heading-xs",
                      mb: 4,
                      children: [_v66.T.Bandwidth, (0, _v1.jsxs)(_v30.Popover, {
                        trigger: "click",
                        children: [(0, _v1.jsx)(_v33.PopoverTrigger, {
                          children: (0, _v1.jsx)("span", {
                            children: (0, _v1.jsx)(_v41.InfoCircle, {
                              color: _v17.used >= _v17.available ? "status-destructive-primary" : "text-tertiary",
                              boxSize: "2xs",
                              verticalAlign: "top",
                              position: "relative",
                              top: "2px",
                              ml: 2
                            })
                          })
                        }), (0, _v1.jsx)(_v32.PopoverContent, {
                          maxWidth: "200px",
                          children: (0, _v1.jsxs)(_v31.PopoverBody, {
                            textStyle: "body-md",
                            children: [_v66.T.BandwidthUsageInfo(_v124.format(_v122), _v123.format(_v121)), " ", (0, _v1.jsx)(_v29.Link, {
                              variant: "inline-primary",
                              fontSize: "body-md",
                              href: "/analytics/bandwidth",
                              isExternal: !0,
                              children: _v66.T.SeeUsageDetails
                            }, "see-bandwidth-usage-details")]
                          })
                        })]
                      })]
                    }), (0, _v1.jsx)(_v8.Box, {
                      children: (0, _v1.jsx)(_v13.HStack, {
                        mt: 4,
                        mb: 2,
                        justifyContent: "space-between",
                        children: (0, _v1.jsx)(_v38.Text, {
                          variant: "heading-md",
                          children: _v66.T.UsageOfMax((0, _v62.formatBytes)(_v17.used, _v17.used > 0), (0, _v62.formatBytes)(_v17.available, !1))
                        })
                      })
                    }), (0, _v1.jsx)(_v8.Box, {
                      children: _v17.used < _v17.available ? (0, _v1.jsx)(_v34.Progress, {
                        size: "xs",
                        variant: "default",
                        value: _v17.used,
                        max: _v17.available
                      }) : (0, _v1.jsx)(_v34.Progress, {
                        size: "xs",
                        bgColor: "status-destructive-primary",
                        variant: "destructive",
                        value: _v17.available,
                        max: _v17.available
                      })
                    })]
                  })
                })]
              })
            }), (0, _v1.jsx)(_v8.Box, {
              borderBottom: "1px solid",
              borderColor: "stroke",
              my: 6
            }), (0, _v1.jsxs)(_v11.Flex, {
              flexDirection: _v117,
              mt: 6,
              gap: {
                base: 16,
                md: 32
              },
              children: [(0, _v1.jsxs)(_v14.VStack, {
                align: "flex-start",
                spacing: 4,
                flexGrow: 1,
                width: {
                  base: "100%",
                  lg: "33%"
                },
                background: "background",
                px: "lg",
                py: "md",
                borderRadius: "lg",
                children: [(0, _v1.jsxs)(_v38.Text, {
                  variant: "heading-xs",
                  children: [_v66.T.PaymentMethod, !_v68 && _v9?.gracePeriodType && (0, _v1.jsx)(_v16.CircleExclamationFilled, {
                    boxSize: "2xs",
                    verticalAlign: "top",
                    position: "relative",
                    ml: "4px",
                    top: "2px",
                    color: "status-destructive-primary"
                  })]
                }), (0, _v1.jsxs)(_v14.VStack, {
                  alignItems: "start",
                  width: "100%",
                  children: [_v10?.length ? (0, _v1.jsx)(_v60.default, {
                    activePaymentMethod: _v98,
                    edit: !0,
                    status: _v9.status === _v65.AccountStatus.Active,
                    paymentMethods: _v10,
                    onSelect: _v86,
                    isOperationOngoing: _v7,
                    inGracePeriod: _v9?.gracePeriodType !== null,
                    trackAddPaymentMethod: () => {
                      _v47({
                        action_type: _v64.BillingActionTypes.CLICK,
                        location: _v64.BillingActionLocations.ADD_NEW_CARD_BUTTON
                      });
                    },
                    trackOpenSelectDropdown: () => {
                      _v47({
                        action_type: _v64.BillingActionTypes.CLICK,
                        location: _v64.BillingActionLocations.PAYMENT_METHOD_DROPDOWN
                      }), _v43();
                    },
                    hasPaymentExpired: _v99,
                    allPaymentMethodsExpired: (() => {
                      if (_v10) {
                        for (let _v0 = 0; _v0 < _v10?.length; _v0++) if (!(0, _v119.isPaymentExpired)(_v10[_v0])) return !1;
                      }
                      return !0;
                    })(),
                    addNewPaymentMethod: _v9?.gracePeriodType !== null
                  }) : (0, _v1.jsx)(_v9.Button, {
                    onClick: () => {
                      let _v0 = _v9.isReverseFreeTrial ? (0, _v58.buildCheckoutUrl)({
                        tier: _v9.tier ?? _v65.Tier.Starter,
                        paywallTrigger: "reverse_trial_billing_add_payment",
                        paywallLocation: "billing_settings",
                        paywallFeature: "reverse_trial_billing_add_payment",
                        paywallType: "popup"
                      }) : "/checkout/payments/new";
                      window.open(_v0, "_blank"), _v42(), _v47({
                        action_type: _v64.BillingActionTypes.CLICK,
                        location: _v64.BillingActionLocations.ADD_NEW_CARD_BUTTON
                      });
                    },
                    isDisabled: _v9.tier === _v65.Tier.Free,
                    variant: "link",
                    textDecoration: "underline",
                    children: _v66.T.AddNewCard
                  }), _v68 && _v99 && (0, _v1.jsxs)(_v11.Flex, {
                    alignItems: "center",
                    gap: 1,
                    mb: 2,
                    children: [(0, _v1.jsx)(_v16.CircleExclamationFilled, {
                      color: "status-destructive-primary",
                      width: 16,
                      height: 16
                    }), (0, _v1.jsx)(_v38.Text, {
                      variant: "body-sm",
                      color: "status-destructive-primary",
                      children: _v66.T.CardExpired
                    })]
                  }), (0, _v1.jsx)(_v9.Button, {
                    size: "xs",
                    variant: "link",
                    background: "none",
                    px: "0",
                    onClick: () => {
                      _v44(), window.open("/settings/billing/purchases", "_blank"), _v47({
                        action_type: _v64.BillingActionTypes.CLICK,
                        location: _v64.BillingActionLocations.VIEW_PAST_PURCHASES_BUTTON
                      });
                    },
                    children: (0, _v1.jsx)(_v38.Text, {
                      variant: "body-sm",
                      color: "text-primary",
                      fontWeight: "350",
                      children: _v66.T.ViewPastPurchases
                    })
                  })]
                }), _v98?.disableOption && (0, _v1.jsx)(_v38.Text, {
                  variant: "body-sm",
                  color: "status-destructive-primary",
                  children: _v66.T.IncorrectPaymentMethodLink
                })]
              }), (0, _v1.jsxs)(_v14.VStack, {
                align: "flex-start",
                spacing: 4,
                flexGrow: 1,
                width: {
                  base: "100%",
                  lg: "33%"
                },
                background: "background",
                px: "lg",
                py: "md",
                borderRadius: "lg",
                children: [(0, _v1.jsxs)(_v38.Text, {
                  variant: "heading-xs",
                  children: [_v66.T.AccountUsage, (0, _v1.jsxs)(_v30.Popover, {
                    trigger: "click",
                    children: [(0, _v1.jsx)(_v33.PopoverTrigger, {
                      children: (0, _v1.jsx)("span", {
                        children: (0, _v1.jsx)(_v41.InfoCircle, {
                          color: "text-tertiary",
                          boxSize: "2xs",
                          verticalAlign: "top",
                          position: "relative",
                          ml: "4px",
                          top: "2px"
                        })
                      })
                    }), (0, _v1.jsx)(_v32.PopoverContent, {
                      maxWidth: "200px",
                      children: (0, _v1.jsx)(_v31.PopoverBody, {
                        textStyle: "body-md",
                        children: _v9.isImpactedByGermanConsumerLaw ? _v66.T.AccountUsageGerman : _v66.T.AccountUsageNonGerman
                      })
                    })]
                  })]
                }), (0, _v1.jsxs)(_v14.VStack, {
                  spacing: 2,
                  children: [(0, _v1.jsx)(_v35.Radio, {
                    id: _v65.UserEntity.Personal,
                    isChecked: _v56.isPersonalChecked,
                    value: _v65.UserEntity.Personal,
                    size: "md",
                    onChange: _v0 => _v90(_v0),
                    children: _v66.T.Personal
                  }, _v65.UserEntity.Personal), (0, _v1.jsx)(_v35.Radio, {
                    id: _v65.UserEntity.Business,
                    isChecked: _v56.isBusinessChecked,
                    value: _v65.UserEntity.Business,
                    size: "md",
                    onChange: _v0 => _v90(_v0),
                    children: _v66.T.Business
                  }, _v65.UserEntity.Business)]
                }), (0, _v1.jsx)(_v75, {
                  trackBillingAction: _v47,
                  shouldDisplayModal: _v54,
                  setShouldDisplayModal: _v55,
                  selectedRadioValue: _v56.selectedRadioValue,
                  confirmPersonalUser: () => {
                    _v47({
                      action_type: _v64.BillingActionTypes.CLICK,
                      location: _v64.BillingActionLocations.PERSONAL_ACCOUNT_USAGE_MODAL_CONFIRM_BUTTON
                    }), _v9.userEntity === _v65.UserEntity.Business && _v9.hasAutorenew && (_v14 ? (_v36(!0), _v87(!1)) : (0, _v42.submitOptOutRequest)({
                      token: _v64,
                      userEntity: _v65.UserEntity.Personal
                    })), _v57(_v0 => ({
                      ..._v0,
                      isPersonalChecked: !0
                    })), _v55(!1);
                  },
                  optInForBusinessUser: () => {
                    _v47({
                      action_type: _v64.BillingActionTypes.CLICK,
                      location: _v64.BillingActionLocations.BUSINESS_ACCOUNT_USAGE_MODAL_ENABLE_AUTORENEW_BUTTON
                    }), _v57(_v0 => ({
                      ..._v0,
                      isBusinessChecked: !0
                    })), _v9.hasAutorenew || (_v89(), _v37({
                      ..._v9,
                      hasAutorenew: !0
                    })), _v55(!1);
                  },
                  optOutForBusinessUser: () => {
                    _v47({
                      action_type: _v64.BillingActionTypes.CLICK,
                      location: _v64.BillingActionLocations.BUSINESS_ACCOUNT_USAGE_MODAL_KEEP_AUTORENEW_OFF_BUTTON
                    }), _v57(_v0 => ({
                      ..._v0,
                      isBusinessChecked: !0
                    })), _v9.hasAutorenew && (_v14 ? (_v36(!0), _v87(!1)) : (0, _v42.submitOptOutRequest)({
                      token: _v64
                    })), _v55(!1);
                  }
                })]
              }), _v79 && (0, _v1.jsxs)(_v14.VStack, {
                align: "flex-start",
                spacing: 4,
                flexGrow: 1,
                width: {
                  base: "100%",
                  lg: "33%"
                },
                background: "background",
                px: "lg",
                py: "md",
                borderRadius: "lg",
                children: [(0, _v1.jsx)(_v11.Flex, {
                  flexDirection: _v114,
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  children: (0, _v1.jsxs)(_v38.Text, {
                    variant: "heading-xs",
                    children: [_v66.T.BillingAddress, (0, _v1.jsxs)(_v26.Elements, {
                      stripe: _v84,
                      options: _v83,
                      children: [(0, _v1.jsx)(_v9.Button, {
                        marginLeft: "2",
                        size: "xs",
                        variant: "tertiary",
                        color: "status-info-primary",
                        display: "inline",
                        onClick: () => {
                          _v78(_v0 => _v0 + 1), _v74();
                        },
                        children: _v66.T.Update
                      }), (0, _v1.jsx)(_v99, {
                        onUpdateBillingAddress: _v0 => {
                          _v80(_v0);
                        },
                        isOpen: _v73,
                        onClose: () => {
                          _v75();
                        }
                      }, _v77)]
                    })]
                  })
                }), (0, _v1.jsxs)(_v38.Text, {
                  variant: "body-sm",
                  color: "text-primary",
                  fontWeight: "350",
                  children: [_v79.firstName, " ", _v79.lastName]
                }), (0, _v1.jsx)(_v38.Text, {
                  variant: "body-sm",
                  color: "text-primary",
                  fontWeight: "350",
                  children: [_v79?.line1, _v79?.line2, _v79?.city, _v79?.state, _v79?.postalCode, _v79?.country].filter(_v0 => "string" == typeof _v0 && "" !== _v0).join(", ")
                })]
              }), !_v27 && !_v29 && (0, _v1.jsx)(_v11.Flex, {
                justifyContent: _v119,
                mt: 6,
                hidden: !_v125 && !_v126,
                children: (0, _v1.jsxs)(_v14.VStack, {
                  align: _v118,
                  spacing: 4,
                  flexGrow: 1,
                  width: {
                    base: "100%",
                    md: "33%"
                  },
                  children: [(0, _v1.jsx)(_v155, {
                    ..._v145
                  }), _v126 && (0, _v1.jsx)(_v157, {
                    showPostCancelSurvey: _v71,
                    setShowPostCancelSurvey: _v72,
                    membership: _v9,
                    teamUser: _v22
                  })]
                })
              })]
            }), _v27 && (0, _v1.jsx)(_v8.Box, {
              display: {
                base: "block",
                md: "none"
              },
              mt: 6,
              children: (0, _v1.jsx)(_v9.Button, {
                variant: "primary",
                size: "sm",
                onClick: () => {
                  _v45();
                  let _v0 = (0, _v21.buildUpgradePlanUrl)({
                    paywallTrigger: "billing_card_change_plan_button",
                    paywallLocation: "billing_card",
                    paywallFeature: "billing"
                  });
                  window.open(_v0, "_self");
                },
                width: "auto",
                children: _v66.T.ChangePlan
              })
            }), _v67 && (0, _v1.jsx)(_v94, {
              isOpen: _v127,
              onClose: _v128,
              planName: _v9.tierForDisplay,
              renewalPrice: _v132,
              loading: _v7,
              enableAutoRenew: _v89,
              tier: _v9.tier,
              billingPeriod: _v9.billingPeriod
            })]
          }), _v33 && (0, _v1.jsx)(_v168, {
            scheduledOrder: _v26,
            membership: _v9,
            onSuccess: () => {
              window.location.reload();
            },
            onError: () => {
              _v34({
                canShow: !0,
                type: "negative",
                text: _v66.T.SomethingWentWrong
              });
            }
          })]
        }), (_v27 || _v29) && (0, _v1.jsxs)(_v8.Box, {
          bg: "fill-surface",
          borderRadius: "md",
          border: "1px solid",
          borderColor: "background",
          px: "lg",
          py: "md",
          mt: 6,
          hidden: !_v125 && !_v126,
          children: [(0, _v1.jsxs)(_v11.Flex, {
            alignItems: "center",
            gap: 0,
            display: _v125 ? "inline-flex" : "none",
            children: [(0, _v1.jsx)(_v38.Text, {
              variant: "body-sm",
              color: "text-secondary",
              whiteSpace: "nowrap",
              pr: "2px",
              children: _v66.T.CancelSubscriptionFooterPrefix
            }), (0, _v1.jsx)(_v155, {
              ..._v145
            })]
          }), _v126 && (0, _v1.jsx)(_v157, {
            showPostCancelSurvey: _v71,
            setShowPostCancelSurvey: _v72,
            membership: _v9,
            teamUser: _v22
          })]
        }), "function" == typeof _v0 ? _v0({
          hasScheduledDowngrade: _v27
        }) : _v0, (0, _v1.jsx)(_v176, {
          isOpen: _v137,
          onClose: () => _v138(!1),
          onBack: () => {
            (_v138(!1), _v143) ? _v144(!1) : _v142(_v0 => _v0 + 1);
          },
          cancelRequestPending: _v136,
          onDecline: () => {
            _v139?.();
          },
          onSuccess: () => {
            window.location.reload();
          },
          onError: () => {
            _v34({
              canShow: !0,
              type: "negative",
              text: _v66.T.SomethingWentWrong
            });
          },
          scheduledOrder: _v26,
          membership: _v9,
          onRequestIndividualPlans: _v1 ? () => {
            _v138(!1), _v1();
          } : void 0
        }), _v31 && "billing" === _v19.corporate_upgrade_modal_page && (0, _v1.jsx)(_v158.CorporateUpgradeModal, {
          productName: _v26?.productName ?? _v9.tierForDisplay
        })]
      });
    },
    _v180 = "RENEWAL_SUCCESSFUL",
    _v181 = "RENEWAL_FAILED",
    _v182 = ({
      locale: _v0,
      membership: _v1,
      noticeType: _v2,
      onClose: _v3
    }) => {
      let _v4 = _v1.tierForDisplay,
        _v5 = _v2 === _v180,
        _v6 = Intl.DateTimeFormat(_v0, {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          timeZoneName: "short"
        }),
        _v7 = Date.parse(_v1.renewalDate);
      return (0, _v1.jsx)(_v4.Alert, {
        status: _v5 ? "success" : "error",
        onClose: _v3,
        children: _v5 ? _v66.T.RenewalNotice.Success(_v4, _v6.format(_v7)) : _v66.T.RenewalNotice.Failure(_v4, _v6.format(_v7), `/checkout/${_v1.tier}/renew-now`)
      });
    };
  var _v183 = _v0.i(0),
    _v184 = _v0.i(0),
    _v185 = _v0.i(0);
  async function _v186({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      userId: _v3
    },
    ..._v4
  }) {
    return (0, _v53.measureLatency)("patchUserSeats", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v3}/seats?fields=${_v1.map(_v54.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "PATCH",
        body: JSON.stringify((0, _v54.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v54.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v54.deepCamelCase)(_v1);
    });
  }
  function _v187() {
    let {
        mutate: _v0
      } = (0, _v49.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v51.useGctlConfig)(),
      [_v5, _v6] = (0, _v50.useInternalState)();
    return [(0, _v3.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/seats${(0, _v50.serializeQuery)(_v0)}`, _v186({
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
  function _v188({
    closeModal: _v0
  }) {
    let {
        isMembershipInfoLoading: _v1,
        isOperationOngoing: _v2,
        membership: _v3,
        seatCount: _v4,
        teamInfo: {
          seatDetails: _v5
        }
      } = (0, _v3.useContext)(_v93.ManageTeamStateCtx),
      {
        removeUnassignedSeats: _v6,
        showNotice: _v7,
        updateIsMembershipLoading: _v8,
        updateIsOperationOngoing: _v9,
        updateIsRemoveSeatsConfirmation: _v10
      } = (0, _v3.useContext)(_v93.ManageTeamDispatchCtx),
      {
        trackBillingAction: _v11
      } = (0, _v3.useContext)(_v93.ManageTeamAnalytics),
      [_v12, _v13] = _v187(),
      _v14 = (0, _v3.useContext)(_v63.ViewerContext),
      _v15 = _v14?.teamUser?.ownerId || _v14?.user?.id || 0,
      _v16 = () => {
        _v9(!1), _v10(!1), _v0();
      },
      _v17 = async () => {
        let _v0 = (_v3?.nextCycle?.seatCount || 0) - _v4;
        if (_v9(!0), _v11({
          action_type: _v64.BillingActionTypes.CLICK,
          location: _v64.BillingActionLocations.REMOVE_SEATS_MODAL_CONFIRM_DELETE_BUTTON
        }), _v0 < 0) {
          _v9(!1), _v10(!1);
          return;
        }
        await _v12({
          select: [],
          where: {
            userId: _v15
          },
          variables: {
            quantity: _v0
          }
        });
      };
    (0, _v3.useEffect)(() => {
      _v13?.error && (_v7({
        canShow: !0,
        type: "negative",
        text: _v66.T.InviteForm.ServerError
      }), _v16()), _v5 && _v13?.data && (_v13?.data?.nextCycle?.seatCount || 0) < _v3?.nextCycle?.seatCount && (_v6(_v5.currentUnassignedCount - _v4), _v1 || (_v8(!0), _v16()), _v7({
        canShow: !0,
        type: "positive",
        text: _v66.T.DeleteSeatsSuccess(_v4)
      }));
    }, [_v13, _v2]);
    let _v18 = new Date().getTime(),
      _v19 = Math.round(Math.abs((new Date(_v3?.renewalDate).getTime() - _v18) / 0));
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v87.ModalOverlay, {}), (0, _v1.jsxs)(_v88.ModalContent, {
        children: [(0, _v1.jsx)(_v89.ModalHeader, {
          children: ` ${_v66.T.DeleteSeatsConfirmation(_v4)} `
        }), (0, _v1.jsx)(_v92.ModalCloseButton, {
          top: "8px",
          right: "8px",
          onClick: _v0
        }), (0, _v1.jsxs)(_v91.ModalBody, {
          children: [(0, _v1.jsx)(_v38.Text, {
            marginBottom: (0, _v15.rem)(12),
            variant: "body-md",
            children: ` ${_v66.T.DeleteSeatsSummary(_v19)} `
          }), (0, _v1.jsx)(_v38.Text, {
            variant: "body-md",
            children: ` ${_v66.T.DeleteSeatsWarning} `
          })]
        }), (0, _v1.jsxs)(_v90.ModalFooter, {
          children: [(0, _v1.jsx)(_v9.Button, {
            variant: "tertiary",
            isDisabled: _v2,
            onClick: _v0,
            children: _v66.T.Cancel
          }), (0, _v1.jsx)(_v9.Button, {
            isLoading: _v2,
            onClick: _v17,
            variant: "destructive",
            children: _v66.T.ConfirmDeleteSeats
          })]
        })]
      })]
    });
  }
  "true" === _v46.default.env.STORYBOOK && (0, _v50.assignMswData)(_v187, {
    endpoint: "/users/:userId/seats",
    method: "PATCH"
  });
  let _v189 = _v3.default.memo(() => {
    let {
        updateIsRemoveSeatsConfirmation: _v0
      } = (0, _v3.useContext)(_v93.ManageTeamDispatchCtx),
      _v1 = () => _v0(!1);
    return (0, _v1.jsx)(_v86.Modal, {
      isOpen: !0,
      onClose: _v1,
      children: (0, _v1.jsx)(_v188, {
        closeModal: _v1
      })
    });
  });
  var _v190 = _v0.i(0),
    _v191 = _v0.i(0),
    _v192 = _v0.i(0),
    _v193 = _v0.i(0);
  let _v194 = _v68.default.div.withConfig({
      displayName: "style__ModalContent",
      componentId: "sc-11114d88-0"
    })`
  ${({
      theme: _v0
    }) => _v0.shadows[200]}
  position: relative;
  padding: ${(0, _v67.rem)(22)} ${(0, _v67.rem)(24)};
  border-radius: ${(0, _v67.rem)(8)};
  background: ${_v190.core.color.surface(500)};
  transform: translate(0%, 0%);

  min-width: ${(0, _v67.rem)(500)};
  ${_v192.media.xmd`
    min-width: ${(0, _v67.rem)(500)};
  `}
`,
    _v195 = (0, _v68.default)(_v71.Button).withConfig({
      displayName: "style__StyledDeleteSeatsButton",
      componentId: "sc-11114d88-1"
    })`
  min-width: ${(0, _v67.rem)(82)};
  padding: 0;
  margin-left: ${(0, _v67.rem)(-5)};
  font-size: ${(0, _v67.rem)(12)};
  font-weight: 700;
  color: ${(0, _v102.red)(600)};

  &:hover {
    color: ${(0, _v102.red)(600)};
  }
`,
    _v196 = (0, _v68.default)(_v72.Modal).withConfig({
      displayName: "style__StyledModal",
      componentId: "sc-11114d88-2"
    })`
  box-shadow: none;
  min-height: ${(0, _v67.rem)(350)};
`,
    _v197 = (0, _v68.default)(_v73.Paragraph).withConfig({
      displayName: "style__DisableRemoveSeatsModalParagraph",
      componentId: "sc-11114d88-3"
    })`
  color: ${_v191.color.text.secondary};

  a {
    color: ${_v191.color.text.secondary};
  }
`,
    _v198 = _v68.default.div.withConfig({
      displayName: "style__TextSection",
      componentId: "sc-11114d88-4"
    })`
  margin: ${(0, _v67.rem)(48)} ${(0, _v67.rem)(17)} ${(0, _v67.rem)(48)} ${(0, _v67.rem)(36)};
`,
    _v199 = (0, _v68.default)(_v193.CloseButton).withConfig({
      displayName: "style__StyledCloseButton",
      componentId: "sc-11114d88-5"
    })`
  padding: 0;
  margin: ${(0, _v67.rem)(8)} 0;
`;
  function _v200({
    closeModal: _v0
  }) {
    return (0, _v1.jsxs)(_v194, {
      children: [(0, _v1.jsx)(_v199, {
        className: "invite-modal-close-button",
        onClick: _v0
      }), (0, _v1.jsx)(_v198, {
        children: (0, _v1.jsx)(_v197, {
          size: "2",
          children: _v66.T.DisableSeatDeletion("/help/contact", () => void 0)
        })
      })]
    });
  }
  let _v201 = _v3.default.memo(({
    onClick: _v0
  }) => {
    let [_v1, _v2] = (0, _v3.useState)(!1),
      {
        trackBillingAction: _v3
      } = (0, _v3.useContext)(_v93.ManageTeamAnalytics),
      _v4 = (0, _v3.useCallback)(() => (0, _v1.jsx)(_v200, {
        closeModal: () => _v2(!1)
      }), []);
    return (0, _v1.jsx)(_v196, {
      active: _v1,
      content: _v4(),
      onOpen: () => _v2(!1),
      children: (0, _v1.jsx)(_v195, {
        variant: "hyperminimal",
        onClick: () => {
          _v0?.(), _v2(!0), _v3({
            action_type: _v64.BillingActionTypes.CLICK,
            location: _v64.BillingActionLocations.DELETE_SEATS_BUTTON
          });
        },
        children: _v66.T.DeleteSeats
      })
    });
  });
  var _v202 = _v0.i(0);
  function _v203() {
    let {
        membership: _v0,
        seatCount: _v1,
        teamInfo: {
          seatDetails: _v2
        }
      } = (0, _v3.useContext)(_v93.ManageTeamStateCtx),
      _v3 = new Date(_v0.renewalDate).toLocaleDateString(navigator.language || "en-US", {
        year: "2-digit",
        month: "2-digit",
        day: "2-digit"
      }),
      _v4 = _v2?.additionalPurchasedCount || _v0.seatCount - _v64.OWNER,
      _v5 = _v0.additionalSeatPrice ?? _v0.pricePerSeat,
      _v6 = _v0.additionalSeatPriceForDisplay ?? _v0.pricePerSeatForDisplay,
      _v7 = null != _v0.additionalSeatPrice && null != _v0.basePlanPrice,
      _v8 = _v0.nextCycle?.seatCount - _v1,
      _v9 = _v7 ? _v0.basePlanPrice + Math.max(0, _v8 - 1) * _v5 : _v5 * _v8;
    return (0, _v1.jsxs)(_v8.Box, {
      backgroundColor: "background",
      gap: (0, _v15.rem)("8px"),
      padding: (0, _v15.rem)("12px"),
      borderRadius: "md",
      children: [(0, _v1.jsxs)(_v8.Box, {
        display: "flex",
        justifyContent: "space-between",
        children: [(0, _v1.jsxs)(_v8.Box, {
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          paddingBottom: (0, _v15.rem)("12px"),
          children: [(0, _v1.jsx)(_v38.Text, {
            variant: "heading-xs",
            children: _v66.T.DueAtRenewal
          }), (0, _v1.jsx)(_v38.Text, {
            variant: "body-sm",
            children: _v66.T.SeatPriceDetails(_v4 - _v1, _v6, _v0.billingPeriod === _v65.UserPlanType.Month ? _v66.T.Monthly : _v66.T.Annually)
          })]
        }), (0, _v1.jsxs)(_v8.Box, {
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          children: [(0, _v1.jsx)(_v38.Text, {
            variant: "heading-xs",
            children: (0, _v119.formatAmountWithCurrency)(_v9, _v0.currency, 2)
          }), (0, _v1.jsx)(_v38.Text, {
            variant: "body-sm",
            children: _v66.T.PlusSignTax
          })]
        })]
      }), (0, _v1.jsx)(_v202.Divider, {
        borderColor: "stroke"
      }), (0, _v1.jsx)(_v8.Box, {
        display: "flex",
        justifyContent: "space-between",
        paddingTop: (0, _v15.rem)("12px"),
        children: (0, _v1.jsx)(_v8.Box, {
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          children: (0, _v1.jsx)(_v38.Text, {
            variant: "body-sm",
            children: _v66.T.RenewsOnDate(_v3)
          })
        })
      })]
    });
  }
  var _v204 = _v0.i(0);
  function _v205() {
    let [_v0, _v1] = (0, _v3.useState)(1),
      {
        invitesRemaining: _v2,
        teamInfo: {
          seatDetails: _v3
        }
      } = (0, _v3.useContext)(_v93.ManageTeamStateCtx),
      {
        updateSeatCount: _v4
      } = (0, _v3.useContext)(_v93.ManageTeamDispatchCtx);
    (0, _v3.useEffect)(() => {
      _v4(_v0);
    }, [_v0, _v4]);
    let _v5 = _v3?.additionalPurchasedCount || _v2;
    return (0, _v1.jsxs)(_v8.Box, {
      display: "flex",
      alignItems: "baseline",
      children: [(0, _v1.jsxs)(_v204.NumberInput, {
        border: "input-stroke",
        defaultValue: 1,
        min: 1,
        max: _v5,
        size: "sm",
        width: (0, _v15.rem)("78px"),
        marginRight: (0, _v15.rem)("10px"),
        onChange: _v0 => _v1(Number(_v0)),
        children: [(0, _v1.jsx)(_v204.NumberInputField, {
          value: _v0
        }), (0, _v1.jsxs)(_v204.NumberInputStepper, {
          children: [(0, _v1.jsx)(_v204.NumberIncrementStepper, {
            _disabled: {
              color: "stroke"
            }
          }), (0, _v1.jsx)(_v204.NumberDecrementStepper, {
            _disabled: {
              color: "stroke"
            }
          })]
        })]
      }), (0, _v1.jsx)(_v12.Header, {
        as: "h6",
        size: "xs",
        children: _v66.T.SeatDenominator(_v5)
      })]
    });
  }
  function _v206() {
    return (0, _v1.jsxs)(_v8.Box, {
      paddingBottom: (0, _v15.rem)(24),
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      children: [(0, _v1.jsx)(_v12.Header, {
        as: "h6",
        size: "xs",
        alignItems: "flex-start",
        children: _v66.T.NumberOfSeats
      }), (0, _v1.jsx)(_v205, {})]
    });
  }
  function _v207({
    closeModal: _v0
  }) {
    let {
      updateIsRemoveSeatsConfirmation: _v1
    } = (0, _v3.useContext)(_v93.ManageTeamDispatchCtx);
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v87.ModalOverlay, {}), (0, _v1.jsxs)(_v88.ModalContent, {
        children: [(0, _v1.jsx)(_v89.ModalHeader, {
          fontSize: "heading-md",
          children: ` ${_v66.T.RemoveUnassignedSeats} `
        }), (0, _v1.jsx)(_v92.ModalCloseButton, {
          top: "8px",
          right: "8px",
          onClick: _v0
        }), (0, _v1.jsxs)(_v91.ModalBody, {
          children: [(0, _v1.jsx)(_v206, {}), (0, _v1.jsx)(_v203, {}), (0, _v1.jsx)(_v8.Box, {
            paddingTop: (0, _v15.rem)("16px"),
            fontSize: "body-sm",
            color: "text-secondary",
            children: _v66.T.TermsConditionsPrivacyPolicy("/terms", "/privacy", () => void 0)
          })]
        }), (0, _v1.jsxs)(_v90.ModalFooter, {
          display: "block",
          children: [(0, _v1.jsx)(_v9.Button, {
            width: "100%",
            variant: "destructive",
            onClick: () => {
              _v1(!0), _v0();
            },
            children: _v66.T.DeleteSeats
          }), (0, _v1.jsx)(_v9.Button, {
            marginTop: (0, _v15.rem)(8),
            width: "100%",
            variant: "tertiary",
            onClick: _v0,
            children: _v66.T.InviteForm.Cancel
          })]
        })]
      })]
    });
  }
  let _v208 = _v3.default.memo(({
      onClick: _v0
    }) => {
      let [_v1, _v2, _v3] = function () {
          let [_v0, _v1] = (0, _v3.useState)(!1),
            _v2 = (0, _v3.useCallback)(() => {
              _v1(!1);
            }, []);
          return [_v0, (0, _v3.useCallback)(() => {
            _v1(!0);
          }, []), _v2];
        }(),
        {
          trackBillingAction: _v4
        } = (0, _v3.useContext)(_v93.ManageTeamAnalytics);
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v9.Button, {
          alignSelf: "flex-end",
          _hover: {
            backgroundColor: "transparent"
          },
          backgroundColor: "transparent",
          textColor: "status-destructive-primary",
          textDecoration: "underline",
          onClick: () => {
            _v0?.(), _v2(), _v4({
              action_type: _v64.BillingActionTypes.CLICK,
              location: _v64.BillingActionLocations.DELETE_SEATS_BUTTON
            });
          },
          children: _v66.T.DeleteSeats
        }), (0, _v1.jsx)(_v86.Modal, {
          isOpen: _v1,
          onClose: _v3,
          children: (0, _v1.jsx)(_v207, {
            closeModal: _v3
          })
        })]
      });
    }),
    _v209 = ({
      size: _v0
    }) => {
      let [_v1, _v2] = (0, _v3.useState)(!1),
        _v3 = (0, _v3.useRef)(0),
        {
          trackBillingAction: _v4
        } = (0, _v3.useContext)(_v93.ManageTeamAnalytics),
        {
          showBillingPageLinkoutNotice: _v5
        } = (0, _v3.useContext)(_v93.ManageTeamDispatchCtx),
        {
          membership: _v6
        } = (0, _v3.useContext)(_v93.ManageTeamStateCtx),
        _v7 = "advanced" === _v6.tier ? "/enterprise/contact-us" : "/upgrade",
        _v8 = (0, _v3.useCallback)(() => {
          if (!window) return !1;
          _v4({
            action_type: _v64.BillingActionTypes.CLICK,
            location: _v64.BillingActionLocations.UPGRADE_BUTTON
          });
          let _v0 = window.open(_v7, "_blank");
          _v0 && (_v2(!0), _v3.current = setInterval(() => {
            _v0 && _v0.closed && (_v0 = null, _v2(!1), _v5({
              canShow: !1,
              type: "primary",
              text: ""
            }));
          }, 0)), window.successfulUpgradeCallback = () => {
            _v2(!1), _v5({
              canShow: !1,
              type: "primary",
              text: ""
            }), _v3.current && clearInterval(_v3.current), window.location.reload();
          };
        }, [_v4, _v7, _v5]);
      return (0, _v3.useEffect)(() => {
        _v1 && _v5({
          canShow: !0,
          type: "primary",
          text: "Upgrade flow is in progress in another tab."
        });
      }, [_v1, _v5]), (0, _v1.jsx)(_v9.Button, {
        variant: "upsell",
        size: _v0,
        onClick: _v8,
        children: _v66.T.UpgradeButton
      });
    },
    _v210 = ({
      hasScheduledDowngrade: _v0
    }) => {
      let {
          invitesRemaining: _v1,
          isFetchPaymentMethodsLoading: _v2,
          isMembershipInfoLoading: _v3,
          isBillingSettingChangeOngoing: _v4,
          isRemoveSeatsConfirmation: _v5,
          isTeamInfoLoading: _v6,
          isUploadQuotaLoading: _v7,
          membership: _v8,
          teamInfo: {
            owner: {
              maxTeamMembers: _v9
            },
            seatDetails: _v10,
            maxTeamSize: _v11,
            currentTeamSize: _v12,
            teamMembersCount: {
              admin: _v13,
              contributor: _v14
            }
          },
          teamCapabilities: {
            hasPerSeatPricingModelTeamMember: _v15
          },
          uploadQuota: _v16
        } = (0, _v3.useContext)(_v93.ManageTeamStateCtx),
        {
          fetchTeamInfo: _v17,
          updateModalToDisplay: _v18,
          updateBillingPageNotice: _v19,
          updateIsMembershipLoading: _v20
        } = (0, _v3.useContext)(_v93.ManageTeamDispatchCtx),
        {
          trackBillingAction: _v21
        } = (0, _v3.useContext)(_v93.ManageTeamAnalytics),
        {
          trackBillingPageAddSeatsClicked: _v22
        } = (0, _v22.useBillingTracking)(),
        {
          reason: _v23
        } = (0, _v185.useIsSeatChangeBlocked)({
          tier: _v8.tier,
          hasScheduledDowngrade: _v0
        }),
        _v24 = [];
      "scheduled_downgrade" === _v23 && _v24.push(_v66.T.AddSeatsDowngradeTooltip), "tier_restricted" === _v23 && _v24.push(_v66.T.AddSeatsBusinessTierTooltip), _v8.isReverseFreeTrial && _v24.unshift(_v66.T.AddSeatsReverseTrialTooltip);
      let _v25 = _v24.length > 0,
        _v26 = _v8.seatCapTrial || _v10?.basePlanCount || 0,
        _v27 = _v8.isFreeTrial ? _v26 : _v8.seatCapPaid,
        _v28 = _v11 || _v8.seatCount,
        _v29 = (_v15 ? _v9 : _v11) || _v11,
        _v30 = _v64.OWNER + _v13 + _v14 + _v1,
        _v31 = _v10 ? Math.max(0, _v10?.totalPurchasedCount - _v64.OWNER) : _v30 - _v64.OWNER,
        _v32 = (0, _v3.useCallback)(() => 0 === _v31 || 0 === _v1 || _v8.tier && _v33(_v8.tier) ? null : _v1 > 0 && _v8.status === _v65.AccountStatus.Active && (_v8?.billingPeriod === _v65.UserPlanType.Month || _v8?.isFreeTrial ? (0, _v1.jsx)(_v208, {}) : (0, _v1.jsx)(_v201, {})), [_v1, _v8, _v31]);
      function _v33(_v0) {
        return _v65.SolutionTiers.includes(_v0);
      }
      let _v34 = (0, _v39.useBreakpointValue)({
          base: "column",
          md: "row"
        }),
        _v35 = (0, _v39.useBreakpointValue)({
          base: 1,
          md: 2,
          lg: 4
        }),
        _v36 = (0, _v39.useBreakpointValue)({
          base: 32,
          md: 25,
          lg: 4
        });
      return _v6 || _v7 || _v3 || _v2 ? (0, _v1.jsx)(_v36.Skeleton, {
        marginTop: (0, _v15.rem)(26),
        height: (0, _v15.rem)(259)
      }) : (0, _v1.jsx)(_v8.Box, {
        display: "flex",
        justifyContent: "space-between",
        p: 6,
        mt: 6,
        bg: "fill-surface",
        borderRadius: "md",
        border: "1px solid",
        borderColor: "background",
        children: (0, _v1.jsxs)(_v8.Box, {
          width: "100%",
          children: [(0, _v1.jsxs)(_v11.Flex, {
            justifyContent: "space-between",
            mb: 4,
            direction: {
              base: "column",
              md: "row"
            },
            children: [(0, _v1.jsx)(_v38.Text, {
              variant: "heading-md",
              mb: {
                base: 4,
                md: 0
              },
              children: "Lapsed" === _v8.status || _v8.tier === _v65.Tier.Free || _v16?.space?.unit === "video_size" ? _v66.T.SeatCount(_v11) : _v66.T.PaidSeats(_v8.nextCycle?.seatCount ?? _v30)
            }), _v8.tier && !_v33(_v8.tier) ? (0, _v1.jsx)(_v183.Tooltip, {
              shouldWrapChildren: !0,
              isDisabled: !_v25,
              label: _v25 ? _v24[0] : void 0,
              children: (0, _v1.jsx)(_v9.Button, {
                variant: "secondary",
                size: "sm",
                onClick: () => {
                  _v25 || (_v22(), _v21({
                    action_type: _v64.BillingActionTypes.CLICK,
                    location: _v64.BillingActionLocations.ADD_SEATS_BUTTON
                  }), _v18({
                    currentModalInDisplay: _v65.TeamManagementModals.PURCHASE_SEATS_MODAL,
                    data: {
                      purchaseSeatModalLocation: _v24.PURCHASE_TRIGGERED_FROM.BILLING_PAGE_ADD_SEATS,
                      onPurchaseSuccess: _v0 => {
                        _v19(_v24.NOTICE_TYPES.PURCHASE_SUCCESSFULL_WITH_SEATS), _v18({
                          currentModalInDisplay: null,
                          data: {
                            seatsCount: _v0
                          }
                        }), _v20(!0), _v17();
                      }
                    }
                  }));
                },
                isDisabled: _v25 || _v4 || _v8.tier === _v65.Tier.Free || _v8.tier === _v65.Tier.CustomSelfServe || _v8.status === _v65.AccountStatus.Lapsed || _v29 > 0 && _v12 + _v64.OWNER >= _v29 || _v27 > 0 && _v28 >= _v27,
                mb: {
                  base: 4,
                  md: 0
                },
                children: _v66.T.AddSeats
              })
            }) : (0, _v1.jsx)(_v184.Container, {
              bg: "upsell-secondary",
              borderRadius: "sm",
              children: (0, _v1.jsxs)(_v13.HStack, {
                justifyContent: "space-between",
                px: (0, _v15.rem)(10),
                py: (0, _v15.rem)(8),
                children: [(0, _v1.jsx)(_v38.Text, {
                  variant: "body-sm",
                  children: _v66.T.UpgradeToAddSeats
                }), (0, _v1.jsx)(_v209, {
                  size: "xs"
                })]
              })
            })]
          }), (0, _v1.jsxs)(_v11.Flex, {
            direction: _v34,
            wrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-start",
            children: [(0, _v1.jsxs)(_v14.VStack, {
              align: "flex-start",
              flexBasis: `calc(100% / ${_v35})`,
              mb: _v36,
              children: [(0, _v1.jsxs)(_v13.HStack, {
                alignItems: "center",
                children: [(0, _v1.jsx)(_v38.Text, {
                  variant: "heading-xs",
                  mb: 1,
                  children: _v66.T.Owner
                }), (0, _v1.jsxs)(_v30.Popover, {
                  trigger: "click",
                  children: [(0, _v1.jsx)(_v33.PopoverTrigger, {
                    children: (0, _v1.jsx)("span", {
                      children: (0, _v1.jsx)(_v41.InfoCircle, {
                        color: "text-tertiary",
                        boxSize: "2xs",
                        verticalAlign: "top",
                        position: "relative",
                        top: "2px"
                      })
                    })
                  }), (0, _v1.jsx)(_v32.PopoverContent, {
                    maxWidth: "200px",
                    children: (0, _v1.jsx)(_v31.PopoverBody, {
                      textStyle: "body-md",
                      children: _v66.T.OwnerToolTip
                    })
                  })]
                })]
              }), (0, _v1.jsx)(_v38.Text, {
                variant: "heading-md",
                children: _v64.OWNER
              })]
            }), (0, _v1.jsxs)(_v14.VStack, {
              align: "flex-start",
              flexBasis: `calc(100% / ${_v35})`,
              mb: _v36,
              children: [(0, _v1.jsx)(_v38.Text, {
                variant: "heading-xs",
                mb: 1,
                children: _v66.T.Admins
              }), (0, _v1.jsx)(_v38.Text, {
                variant: "heading-md",
                children: _v13
              })]
            }), (0, _v1.jsxs)(_v14.VStack, {
              align: "flex-start",
              flexBasis: `calc(100% / ${_v35})`,
              mb: _v36,
              children: [(0, _v1.jsx)(_v38.Text, {
                variant: "heading-xs",
                mb: 1,
                children: _v66.T.Contributors
              }), (0, _v1.jsx)(_v38.Text, {
                variant: "heading-md",
                children: _v14
              })]
            }), (0, _v1.jsxs)(_v14.VStack, {
              align: "flex-start",
              flexBasis: `calc(100% / ${_v35})`,
              children: [(0, _v1.jsx)(_v38.Text, {
                variant: "heading-xs",
                mb: 1,
                children: _v66.T.Unassigned
              }), (0, _v1.jsx)(_v38.Text, {
                variant: "heading-md",
                children: _v1
              })]
            })]
          }), (0, _v1.jsxs)(_v11.Flex, {
            justifyContent: {
              base: "center",
              md: "flex-end"
            },
            children: [_v32(), _v5 && (0, _v1.jsx)(_v189, {})]
          })]
        })
      });
    };
  var _v211 = _v0.i(0),
    _v212 = _v0.i(0);
  function _v213({
    tierLabel: _v0,
    isEligibleForIndividualPlans: _v1 = !1,
    onLearnMore: _v2,
    onRequestEligibility: _v3,
    checkOtherPlansHref: _v4
  }) {
    let [_v5, _v6] = (0, _v3.useState)(!1);
    if (_v5) return null;
    let _v7 = !!(_v3 || _v4);
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v4.AlertRoot, {
        backgroundColor: "status-caution-secondary",
        borderRadius: "md",
        py: 3,
        px: 4,
        sx: {
          paddingRight: "3rem"
        },
        children: [(0, _v1.jsx)(_v6.AlertIcon, {
          children: (0, _v1.jsx)(_v16.CircleExclamationFilled, {
            color: "status-caution-primary"
          })
        }), (0, _v1.jsxs)(_v13.HStack, {
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          children: [(0, _v1.jsx)(_v5.AlertDescription, {
            children: _v1 ? (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v212.translate)({
                singular: "You're confirmed eligible for Individual plans. Your account is set to renew on the",
                dictionary: {
                  es: {
                    singular: "Se confirma que eres elegible para los planes Individual. Tu cuenta está programada para renovarse el"
                  },
                  "de-DE": {
                    singular: "Ihre Berechtigung für Einzelpläne wurde bestätigt. Ihr Konto wird am"
                  },
                  "fr-FR": {
                    singular: "Votre éligibilité aux abonnements individuels est confirmée. Votre compte est programmé pour se renouveler le"
                  },
                  "ja-JP": {
                    singular: "個人プランの対象であることが確認されました。お客様のアカウントの次回の更新日は "
                  },
                  "ko-KR": {
                    singular: "귀하는 개인 요금제 가입 자격이 확인되었습니다. 귀하의 계정 갱신일은"
                  },
                  "pt-BR": {
                    singular: "Sua elegibilidade para Planos Individuais foi confirmada. Sua conta será renovada em"
                  },
                  "zh-CN": {
                    singular: "您已确认符合个人计划资格。您的账户将于 "
                  }
                }
              }), " ", (0, _v1.jsx)(_v38.Text, {
                as: "span",
                fontWeight: "medium",
                children: _v0
              }), " ", (0, _v212.translate)({
                singular: "plan.",
                dictionary: {
                  "de-DE": {
                    singular: "Plan."
                  },
                  "ja-JP": {
                    singular: "プラン."
                  },
                  "ko-KR": {
                    singular: "요금제."
                  },
                  "pt-BR": {
                    singular: "plano."
                  },
                  "zh-CN": {
                    singular: "计划。"
                  }
                }
              })]
            }) : (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v212.translate)({
                singular: "Companies can no longer use Individual plans. Your account has been identified as corporate and moved to the",
                dictionary: {
                  es: {
                    singular: "Las empresas ya no pueden usar planes individuales. Su cuenta ha sido identificada como corporativa y trasladada al"
                  },
                  "de-DE": {
                    singular: "Unternehmen können Individualpläne nicht mehr nutzen. Ihr Konto wurde als Firmenkonto identifiziert und verschoben zu"
                  },
                  "fr-FR": {
                    singular: "Les entreprises ne peuvent plus utiliser les plans individuels. Votre compte a été identifié comme professionnel et transféré vers le"
                  },
                  "ja-JP": {
                    singular: "企業はもはや個人プランを利用できません。お客様のアカウントは法人として識別され、次へ移行されました "
                  },
                  "ko-KR": {
                    singular: "기업은 더 이상 개인 요금제를 사용할 수 없습니다. 귀하의 계정이 기업으로 확인되어"
                  },
                  "pt-BR": {
                    singular: "Empresas não podem mais usar planos individuais. Sua conta foi identificada como corporativa e movida para o"
                  },
                  "zh-CN": {
                    singular: "公司不再可以使用个人计划。您的账户已被识别为企业账户并已迁移到"
                  }
                }
              }), " ", (0, _v1.jsx)(_v38.Text, {
                as: "span",
                fontWeight: "medium",
                children: _v0
              }), " ", (0, _v212.translate)({
                singular: "plan.",
                dictionary: {
                  "de-DE": {
                    singular: "Plan."
                  },
                  "ja-JP": {
                    singular: "プラン."
                  },
                  "ko-KR": {
                    singular: "요금제."
                  },
                  "pt-BR": {
                    singular: "plano."
                  },
                  "zh-CN": {
                    singular: "计划。"
                  }
                }
              })]
            })
          }), _v2 && (0, _v1.jsx)(_v9.Button, {
            variant: "secondary",
            background: "white",
            size: "xs",
            flexShrink: 0,
            onClick: _v2,
            children: (0, _v212.translate)({
              singular: "Learn more",
              dictionary: {
                es: {
                  singular: "Ver más"
                },
                "de-DE": {
                  singular: "Mehr dazu"
                },
                "fr-FR": {
                  singular: "En savoir plus "
                },
                "ja-JP": {
                  singular: "詳細を見る"
                },
                "ko-KR": {
                  singular: "자세히 보기"
                },
                "pt-BR": {
                  singular: "Saiba mais"
                },
                "zh-CN": {
                  singular: "了解更多"
                }
              }
            })
          }), (0, _v1.jsx)(_v4.AlertCloseButton, {
            color: "status-caution-primary",
            "aria-label": (0, _v212.translate)({
              singular: "Dismiss notice",
              dictionary: {
                es: {
                  singular: "Descartar aviso"
                },
                "de-DE": {
                  singular: "Hinweis schließen"
                },
                "fr-FR": {
                  singular: "Ignorer la notification"
                },
                "ja-JP": {
                  singular: "通知を閉じる"
                },
                "ko-KR": {
                  singular: "알림 닫기"
                },
                "pt-BR": {
                  singular: "Ignorar aviso"
                },
                "zh-CN": {
                  singular: "关闭通知"
                }
              }
            }),
            onClick: () => _v6(!0),
            transform: "translate(0, +4px)"
          })]
        })]
      }), _v7 && (0, _v1.jsxs)(_v13.HStack, {
        mt: 2,
        gap: 1,
        px: 3,
        children: [(0, _v1.jsx)(_v38.Text, {
          variant: "body-sm",
          color: "text-tertiary",
          children: (0, _v212.translate)({
            singular: "Not a business or Non Profit but you noticed a plan change?",
            dictionary: {
              es: {
                singular: "¿No es una empresa ni una organización sin fines de lucro, pero ha notado un cambio de plan?"
              },
              "de-DE": {
                singular: "Sie sind kein Unternehmen oder Non-Profit, aber Ihnen ist eine Planänderung aufgefallen?"
              },
              "fr-FR": {
                singular: "Vous n'êtes pas une entreprise ni une organisation à but non lucratif, mais vous avez remarqué un changement de plan\x02f?"
              },
              "ja-JP": {
                singular: "事業者でも非営利団体でもないのにプランの変更に気付きましたか？"
              },
              "ko-KR": {
                singular: "사업체나 비영리 단체가 아닌데 요금제 변경을 발견하셨나요?"
              },
              "pt-BR": {
                singular: "Não é uma empresa nem uma organização sem fins lucrativos, mas percebeu uma alteração no plano?"
              },
              "zh-CN": {
                singular: "不是企业或非营利组织，但您注意到计划变更？"
              }
            }
          })
        }), _v3 ? (0, _v1.jsx)(_v9.Button, {
          variant: "tertiary",
          size: "xs",
          onClick: _v3,
          p: 0,
          textDecoration: "underline",
          children: (0, _v212.translate)({
            singular: "Request eligibility for dedicated plans",
            dictionary: {
              es: {
                singular: "Solicitar elegibilidad para planes dedicados"
              },
              "de-DE": {
                singular: "Berechtigung für dedizierte Pläne anfordern"
              },
              "fr-FR": {
                singular: "Demander l'éligibilité aux plans dédiés"
              },
              "ja-JP": {
                singular: "専用プランの適格性を申請する"
              },
              "ko-KR": {
                singular: "전용 요금제 자격 요청하기"
              },
              "pt-BR": {
                singular: "Solicitar elegibilidade para planos dedicados"
              },
              "zh-CN": {
                singular: "申请专属计划资格"
              }
            }
          })
        }) : (0, _v1.jsx)(_v9.Button, {
          variant: "tertiary",
          size: "xs",
          as: "a",
          href: _v4,
          p: 0,
          textDecoration: "underline",
          children: (0, _v212.translate)({
            singular: "Check other plans",
            dictionary: {
              es: {
                singular: "Consultar otros planes"
              },
              "de-DE": {
                singular: "Andere Pläne prüfen"
              },
              "fr-FR": {
                singular: "Consulter d'autres formules"
              },
              "ja-JP": {
                singular: "他のプランを確認する"
              },
              "ko-KR": {
                singular: "다른 요금제 확인"
              },
              "pt-BR": {
                singular: "Confira outros planos"
              },
              "zh-CN": {
                singular: "查看其他计划"
              }
            }
          })
        })]
      })]
    });
  }
  var _v214 = _v0.i(0),
    _v215 = _v0.i(0),
    _v216 = _v0.i(0),
    _v217 = _v0.i(0),
    _v218 = _v0.i(0),
    _v219 = _v0.i(0);
  function _v220() {
    let _v0,
      _v1,
      _v2,
      _v3,
      _v4 = (0, _v2.useRouter)(),
      {
        hasMembershipInfoLoadFailed: _v5,
        isMembershipInfoLoading: _v6,
        membership: _v7,
        notice: _v8,
        billingPageLinkoutNotice: _v9,
        billingPageNotice: _v10,
        teamCapabilities: {
          hasPerSeatPricingModelTeamMember: _v11,
          hasManageTeamBillingSettingsPage: _v12
        },
        teamInfo: {
          untranslatedUserRole: _v13
        },
        modalToDisplay: {
          data: {
            seatsCount: _v14 = 1
          } = {}
        }
      } = (0, _v3.useContext)(_v93.ManageTeamStateCtx),
      {
        showNotice: _v15,
        updateBillingPageNotice: _v16,
        showBillingPageLinkoutNotice: _v17
      } = (0, _v3.useContext)(_v93.ManageTeamDispatchCtx),
      _v18 = (0, _v3.useContext)(_v63.ViewerContext),
      [_v19, _v20] = (0, _v3.useState)(() => (0, _v25.parseLocationSearch)("rns")),
      {
        trackBillingPageRepackagingLearnMoreClicked: _v21
      } = (0, _v22.useBillingTracking)(),
      {
        settings: _v22
      } = (0, _v20.useOrionSettings)(),
      {
        scheduledOrder: _v23,
        hasScheduledDowngrade: _v24,
        normalizedScheduledTier: _v25
      } = (0, _v103.useScheduledOrder)(_v7.subscriptionId, _v7.tier, _v7.hasAutorenew),
      {
        areBusinessPlansEnforced: _v26,
        isWhitelistedForIndPlans: _v27,
        hasSubmittedSurvey: _v28,
        showIndividualPlans: _v29,
        canRequestEligibility: _v30
      } = (0, _v170.useB2BRepackagingContext)(),
      _v31 = _v25 ?? _v7.tier,
      _v32 = _v31 === _v65.Tier.Studio || _v31 === _v65.Tier.Production,
      {
        open: _v33,
        modal: _v34
      } = (0, _v214.useIndividualEligibilityModal)({
        initialStep: _v28 && !_v27 ? "not_qualified" : void 0
      }),
      [_v35, _v36] = (0, _v3.useState)(!1),
      _v37 = _v23?.productName?.toLowerCase().replace("vimeo ", "") ?? "",
      _v38 = _v24 && ("studio" === _v37 || "production" === _v37),
      _v39 = _v24 && _v7.tier === _v65.Tier.Advanced && "professional" === _v37,
      _v40 = _v26 && _v32 && !_v27 || _v38,
      _v41 = _v38 ? _v23?.productName ?? _v7.tierForDisplay ?? "" : _v7.tierForDisplay ?? "",
      _v42 = _v26 && !_v27,
      _v43 = !_v42 && _v29 ? (0, _v21.buildUpgradePlanUrl)({
        paywallTrigger: "billing_corporate_downgrade_check_plans_link",
        paywallLocation: "billing",
        paywallFeature: "corporate_downgrade"
      }) : void 0,
      _v44 = (0, _v3.useMemo)(() => {
        if (!_v7) return !1;
        let {
          tier: _v0,
          renewalDate: _v1,
          gracePeriodType: _v2,
          tierForDisplay: _v3
        } = _v7;
        return !!(_v0 && _v3 && _v1 && null !== _v2);
      }, [_v7]),
      {
        assignment: _v45
      } = (0, _v18.useCuidEppoAssignment)({
        flagKey: "grace-period-optimization",
        assignmentType: "BOOLEAN",
        defaultAssignment: !1,
        disabled: !_v44
      }),
      _v46 = (0, _v17.useIsMobile)(),
      _v47 = _v7.tier === _v65.Tier.Creator,
      _v48 = (0, _v178.getDisplayedGracePeriodEndDate)(_v7?.gracePeriodType, _v7?.originalEndDate, _v7?.endDate);
    (0, _v3.useEffect)(() => {
      null === _v19 || _v16(_v19 && "1" === _v19 ? _v180 : _v181);
    }, [_v19, _v16]);
    let _v49 = _v4.query.survey;
    if ((0, _v3.useEffect)(() => {
      if ("b2b_repack" !== _v49 || !_v30) return;
      _v33();
      let _v0 = new URL(window.location.toString());
      _v0.searchParams.delete("survey");
      let _v1 = _v0.pathname + _v0.search + _v0.hash;
      _v4.replace(_v1, void 0, {
        shallow: !0
      });
    }, [_v49, _v30, _v33, _v4]), !1 === _v12 || !_v6 && _v13 !== _v65.TeamRole.Owner) return (0, _v1.jsx)(_v10.Card, {
      mt: (0, _v15.rem)(100),
      children: (0, _v1.jsx)(_v11.Flex, {
        justify: "center",
        align: "center",
        minH: (0, _v15.rem)(100),
        children: (0, _v1.jsx)(_v12.Header, {
          as: "h5",
          size: "sm",
          color: "text-secondary",
          children: _v66.T.UnavailableBillingPage
        })
      })
    });
    let _v50 = _v10 && _v7 && (_v10 === _v181 || _v10 === _v180),
      _v51 = !_v6;
    return (0, _v1.jsxs)(_v8.Box, {
      children: [(0, _v1.jsx)(_v19.SettingsPageContentHeader, {
        title: _v66.T.Billing
      }), _v51 && _v8.canShow && (0, _v1.jsx)(_v4.Alert, {
        status: "positive" === _v8.type ? "success" : "negative" === _v8.type ? "error" : "info",
        onClose: () => {
          _v15({
            canShow: !1,
            type: "primary",
            text: ""
          });
        },
        children: (0, _v1.jsx)(_v5.AlertDescription, {
          children: _v8.text
        })
      }), _v51 && _v9.canShow && (0, _v1.jsx)(_v4.Alert, {
        status: "positive" === _v9.type ? "success" : "negative" === _v9.type ? "error" : "info",
        onClose: () => {
          _v17({
            canShow: !1,
            type: "primary",
            text: ""
          });
        },
        children: (0, _v1.jsx)(_v5.AlertDescription, {
          children: _v9.text
        })
      }), _v5 && (0, _v1.jsx)(_v4.Alert, {
        status: "error",
        children: (0, _v1.jsx)(_v5.AlertDescription, {
          children: _v66.T.Errors.MembershipInfoLoadError
        })
      }), !_v6 && _v7.renewalDate && _v50 && (0, _v1.jsx)(_v182, {
        locale: _v18?.locale,
        membership: _v7,
        noticeType: _v10,
        onClose: () => {
          let _v0;
          (_v0 = new URL(window.location.toString())).searchParams.delete("rns"), _v4.push(_v0.toString(), void 0, {
            shallow: !0
          }), _v20(null), _v16(null);
        }
      }), _v51 && _v10 && !_v47 && Object.values(_v24.NOTICE_TYPES).includes(_v10) && (0, _v1.jsx)(_v8.Box, {
        mt: (0, _v15.rem)(4),
        children: (0, _v1.jsx)(_v23.PurchaseSeatsNotice, {
          noticeType: _v10,
          onClose: () => _v16(null),
          seatsCount: _v14
        })
      }), _v44 && !_v45 && (0, _v1.jsx)(_v4.Alert, {
        status: "error",
        children: (0, _v1.jsx)(_v5.AlertDescription, {
          children: _v66.T.graceRetryPeriod(_v7?.tierForDisplay, _v48 ?? "")
        })
      }), _v44 && _v45 && (0, _v1.jsxs)(_v4.AlertRoot, {
        backgroundColor: "status-destructive-secondary",
        size: "sm",
        p: 4,
        children: [(0, _v1.jsx)(_v16.CircleExclamationFilled, {
          color: "status-destructive-primary"
        }), (0, _v1.jsxs)(_v13.HStack, {
          gap: 0,
          justifyContent: "space-between",
          alignItems: "flex-start",
          width: "100%",
          children: [(0, _v1.jsxs)(_v14.VStack, {
            gap: 0,
            align: "flex-start",
            children: [(0, _v1.jsx)(_v7.AlertTitle, {
              mb: 1,
              children: _v66.T.UpdatePaymentMethod
            }), (0, _v1.jsx)(_v5.AlertDescription, {
              children: _v46 ? _v66.T.gracePeriodMobile(_v48 ?? "") : _v66.T.gracePeriodDesktop(_v48 ?? "")
            })]
          }), (0, _v1.jsx)(_v9.Button, {
            ml: 2,
            variant: "destructive",
            size: "xs",
            onClick: () => {
              (0, _v215.sendBpEventWithContexts)("vimeo.update_payment_method_click", {
                ...(0, _v216.buildActionBpContext)({
                  action_type: "click",
                  feature: null
                }),
                ...(0, _v217.buildProductAnalyticsBpContext)({
                  location: "upper_banner",
                  device_type: (0, _v140.default)(),
                  element: "button",
                  feature: "billing",
                  product: "payments",
                  copy: _v66.T.Update,
                  is_user_facing_data: !1,
                  entity_type: null
                }),
                ...(0, _v218.buildTeamBpContext)({
                  is_team_member: !0
                }),
                ...(0, _v219.buildThirdPartyIntegrationBpContext)({
                  integration_id: null,
                  integration_name: null,
                  is_partner: null
                })
              }), window.open("/checkout/payments/new");
            },
            children: _v66.T.Update
          })]
        })]
      }), _v24 && !_v35 && !_v38 && (_v0 = _v23?.productName ?? _v7.tierForDisplay ?? "Vimeo", _v1 = _v39 ? "status-positive" : "status-caution", _v2 = _v39 ? _v66.T.PositiveDowngradeNotice(_v0) : _v66.T.DowngradeNotice(_v0), _v3 = function (_v0) {
        switch (_v0) {
          case "rp_2026":
            return "https://vimeo.com/new-plans-feb-2026-50";
          case "rp_2026_strict":
            return "https://vimeo.com/new-plans-feb-2026-30";
          default:
            return "/not-found";
        }
      }(_v22.campaign_id_override), (0, _v1.jsxs)(_v4.AlertRoot, {
        backgroundColor: `${_v1}-secondary`,
        borderRadius: "md",
        py: 3,
        px: 4,
        sx: {
          paddingRight: "3rem"
        },
        children: [(0, _v1.jsx)(_v6.AlertIcon, {
          children: (0, _v1.jsx)(_v16.CircleExclamationFilled, {
            color: `${_v1}-primary`
          })
        }), (0, _v1.jsxs)(_v13.HStack, {
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          children: [(0, _v1.jsx)(_v5.AlertDescription, {
            children: _v2
          }), (0, _v1.jsx)(_v9.Button, {
            variant: "secondary",
            background: "white",
            size: "xs",
            as: "a",
            href: _v3,
            target: "_blank",
            rel: "noopener noreferrer",
            flexShrink: 0,
            onClick: () => {
              _v21();
            },
            children: _v66.T.LearnMore
          }), (0, _v1.jsx)(_v4.AlertCloseButton, {
            color: `${_v1}-primary`,
            "aria-label": "Dismiss notice",
            onClick: () => _v36(!0),
            transform: "translate(0, +4px)"
          })]
        })]
      })), _v40 && (0, _v1.jsx)(_v8.Box, {
        mt: 4,
        children: (0, _v1.jsx)(_v213, {
          tierLabel: _v41,
          isEligibleForIndividualPlans: _v27 && _v38,
          onLearnMore: () => {
            window.open("https://vimeo.com/new-plans-businesses", "_blank", "noopener,noreferrer");
          },
          onRequestEligibility: _v42 ? _v33 : void 0,
          checkOtherPlansHref: _v43
        })
      }), _v34, !_v5 && (0, _v1.jsx)(_v179, {
        onRequestIndividualPlans: _v33,
        children: ({
          hasScheduledDowngrade: _v0
        }) => _v11 && (0, _v1.jsx)(_v210, {
          hasScheduledDowngrade: _v0
        })
      })]
    });
  }
  _v220.getLayout = _v211.getLayout, _v0.s(["__N_SSP", 0, !0, "default", 0, _v220], 0);
}