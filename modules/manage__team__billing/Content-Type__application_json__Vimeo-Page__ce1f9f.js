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
  _v0.i(0);
  var _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0);
  _v0.i(0);
  var _v26 = _v0.i(0),
    _v27 = _v0.i(0),
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
    _v50 = _v0.i(0);
  function _v51(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v50.useGctlConfig)();
    return (0, _v47.default)(_v2 ? `/me/stripe/config${(0, _v49.serializeQuery)(_v2)}` : () => null, _v2 ? () => (0, _v46.getMeStripeConfig)({
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
  "true" === _v45.default.env.STORYBOOK && (0, _v49.assignMswData)(_v51, {
    endpoint: "/me/stripe/config",
    method: "GET"
  }), "true" === _v45.default.env.STORYBOOK && (0, _v49.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v48.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v50.useGctlConfig)(),
      [_v5, _v6] = (0, _v49.useInternalState)();
    return [(0, _v3.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/stripe/config${(0, _v49.serializeQuery)(_v0)}`, (0, _v46.getMeStripeConfig)({
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
  var _v52 = _v0.i(0);
  function _v53() {
    let {
        mutate: _v0
      } = (0, _v48.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v50.useGctlConfig)(),
      [_v5, _v6] = (0, _v49.useInternalState)();
    return [(0, _v3.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/subscriptions/${_v0.where.subscriptionId}${(0, _v49.serializeQuery)(_v0)}`, (0, _v52.patchMeSubscription)({
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
  "true" === _v45.default.env.STORYBOOK && (0, _v49.assignMswData)(_v53, {
    endpoint: "/me/subscriptions/:subscriptionId",
    method: "PATCH"
  });
  var _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v57 = _v57,
    _v58 = _v0.i(0),
    _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v61 = _v0.i(0),
    _v62 = _v0.i(0),
    _v63 = _v0.i(0),
    _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0),
    _v67 = _v0.i(0),
    _v68 = _v0.i(0),
    _v69 = _v0.i(0),
    _v70 = _v0.i(0);
  let _v71 = ({
      onClick: _v0
    }) => (0, _v1.jsx)(_v76, {
      icon: (0, _v1.jsx)(_v66.CloseX, {}),
      size: "sm",
      variant: "minimalTransparent",
      format: "basic",
      onClick: _v0
    }),
    _v72 = ({
      confirmPersonalUser: _v0,
      selectedRadioValue: _v1,
      setShouldDisplayModal: _v2,
      shouldDisplayModal: _v3,
      optInForBusinessUser: _v4,
      optOutForBusinessUser: _v5,
      trackBillingAction: _v6
    }) => (0, _v1.jsx)(_v69.Modal, {
      active: _v3,
      size: "lg",
      content: _v1 === _v62.UserEntity.Personal ? (0, _v1.jsxs)(_v75, {
        children: [(0, _v1.jsxs)(_v11.Header, {
          as: "h4",
          size: "md",
          marginBottom: "17",
          children: [(0, _v67.translate)({
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
          }), (0, _v1.jsx)(_v71, {
            onClick: () => {
              _v6({
                action_type: _v61.BillingActionTypes.CLICK,
                location: _v61.BillingActionLocations.ACCOUNT_USAGE_MODAL_CLOSE_BUTTON
              }), _v2(!1);
            }
          })]
        }), (0, _v1.jsx)(_v70.Paragraph, {
          size: "2",
          children: (0, _v67.translate)({
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
        }), (0, _v1.jsxs)(_v73, {
          children: [(0, _v1.jsx)(_v74, {
            format: "secondary",
            onClick: () => {
              _v6({
                action_type: _v61.BillingActionTypes.CLICK,
                location: _v61.BillingActionLocations.PERSONAL_ACCOUNT_USAGE_MODAL_USE_FOR_BUSINESS_BUTTON
              }), _v2(!1);
            },
            children: (0, _v67.translate)({
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
          }), (0, _v1.jsx)(_v74, {
            format: "primary",
            onClick: () => _v0(),
            children: (0, _v67.translate)({
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
      }) : (0, _v1.jsxs)(_v75, {
        children: [(0, _v1.jsxs)(_v11.Header, {
          as: "h4",
          size: "md",
          marginBottom: "17",
          children: [(0, _v67.translate)({
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
          }), (0, _v1.jsx)(_v71, {
            onClick: () => {
              _v6({
                action_type: _v61.BillingActionTypes.CLICK,
                location: _v61.BillingActionLocations.ACCOUNT_USAGE_MODAL_CLOSE_BUTTON
              }), _v2(!1);
            }
          })]
        }), (0, _v1.jsx)(_v70.Paragraph, {
          size: "2",
          children: (0, _v67.translate)({
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
        }), (0, _v1.jsxs)(_v73, {
          children: [(0, _v1.jsx)(_v74, {
            format: "secondary",
            onClick: () => _v5(),
            children: (0, _v67.translate)({
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
          }), (0, _v1.jsx)(_v74, {
            format: "primary",
            onClick: () => _v4(),
            children: (0, _v67.translate)({
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
    _v73 = _v65.default.div.withConfig({
      displayName: "AccountUsageSelectionModal__ModalButtonsWrapper",
      componentId: "sc-88af39ce-0"
    })`
  display: flex;
  justify-content: flex-end;
  margin-top: ${(0, _v64.rem)(32)};
`,
    _v74 = (0, _v65.default)(_v68.Button).withConfig({
      displayName: "AccountUsageSelectionModal__StyledButton",
      componentId: "sc-88af39ce-1"
    })`
  height: fit-content;
  span {
    overflow: visible;
    white-space: nowrap;
  }
`,
    _v75 = _v65.default.div.withConfig({
      displayName: "AccountUsageSelectionModal__ModalContent",
      componentId: "sc-88af39ce-2"
    })`
  background: white;
  padding: ${(0, _v64.rem)(25)} ${(0, _v64.rem)(30)};
  border-radius: ${(0, _v64.rem)(6)};
`,
    _v76 = (0, _v65.default)(_v68.Button).withConfig({
      displayName: "AccountUsageSelectionModal__CloseIconStyle",
      componentId: "sc-88af39ce-3"
    })`
  position: absolute;
  top: ${(0, _v64.rem)(15)};
  right: ${(0, _v64.rem)(24)};
`;
  var _v77 = _v0.i(0);
  let _v78 = _v0 => (0, _v1.jsx)(_v77.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm.05-19h-.1A10.003 10.003 0 0 1 3 11.95v.1A10.003 10.003 0 0 1 11.95 21h.1A10.003 10.003 0 0 1 21 12.05v-.1A10.003 10.003 0 0 1 12.05 3Z",
        fill: "currentColor"
      })
    }),
    _v79 = _v0 => (0, _v1.jsx)(_v77.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm.05-19h-.1A10.003 10.003 0 0 1 3 11.95v.1A10.003 10.003 0 0 1 11.95 21h.1A10.003 10.003 0 0 1 21 12.05v-.1A10.003 10.003 0 0 1 12.05 3Z",
        fill: "currentColor"
      })
    });
  var _v80 = _v0.i(0),
    _v81 = _v0.i(0);
  let _v82 = ({
    aiCreditsQuota: _v0,
    ..._v1
  }) => {
    let _v2 = (0, _v81.useLocale)();
    return (0, _v1.jsx)(_v13.VStack, {
      ..._v1,
      children: (0, _v1.jsxs)(_v7.Box, {
        children: [(0, _v1.jsxs)(_v37.Text, {
          variant: "heading-xs",
          mb: 4,
          children: [_v63.T.CreditsRemaining, " ", _v0?.remaining && _v0.remaining > 0 ? (0, _v1.jsxs)(_v29.Popover, {
            trigger: "click",
            children: [(0, _v1.jsx)(_v32.PopoverTrigger, {
              children: (0, _v1.jsx)("span", {
                children: (0, _v1.jsx)(_v40.InfoCircle, {
                  color: "text-tertiary",
                  boxSize: "2xs",
                  verticalAlign: "top",
                  position: "relative",
                  top: "0px",
                  ml: 2
                })
              })
            }), (0, _v1.jsx)(_v31.PopoverContent, {
              maxWidth: "300px",
              children: (0, _v1.jsxs)(_v30.PopoverBody, {
                textStyle: "body-md",
                children: [_v0?.resetDate && (0, _v1.jsx)(_v1.Fragment, {
                  children: _v0?.balances && _v0.balances.map((_v0, _v1) => {
                    if (_v0.expirationDate) return (0, _v1.jsxs)(_v12.HStack, {
                      gap: "4px",
                      children: [(0, _v1.jsx)(_v78, {
                        h: "16px",
                        w: "16px",
                        color: "text-primary"
                      }), (0, _v1.jsx)(_v37.Text, {
                        variant: "body-md",
                        children: _v63.T.AiCreditsExpirationDate(_v0.remaining || 0, _v2, new Date(_v0.expirationDate))
                      })]
                    }, `ai-credit-balance-${_v1}`);
                  })
                }), (0, _v1.jsx)(_v7.Box, {
                  margin: "4px 0",
                  children: (0, _v1.jsx)("hr", {})
                }), _v63.T.CreditsWillNotRenew]
              })
            })]
          }) : null]
        }), (0, _v1.jsx)(_v7.Box, {
          children: (0, _v1.jsxs)(_v12.HStack, {
            children: [(0, _v1.jsx)(_v79, {}), (0, _v1.jsx)(_v37.Text, {
              variant: "heading-md",
              children: _v0?.remaining
            })]
          })
        }), "number" == typeof _v0?.remaining && _v0?.remaining <= 50 && (0, _v1.jsx)(_v7.Box, {
          padding: `${(0, _v14.rem)(8)} 0 ${(0, _v14.rem)(8)}`,
          maxWidth: "248px",
          children: (0, _v1.jsx)(_v37.Text, {
            variant: "body-sm",
            color: "text-secondary",
            children: (0, _v1.jsx)(_v80.AiCreditsRemainingUpsellMessage, {
              quotaRemaining: _v0?.remaining,
              location: "page_area"
            })
          })
        })]
      })
    });
  };
  var _v83 = _v0.i(0),
    _v84 = _v0.i(0),
    _v85 = _v0.i(0),
    _v86 = _v0.i(0),
    _v87 = _v0.i(0),
    _v88 = _v0.i(0),
    _v89 = _v0.i(0),
    _v90 = _v0.i(0),
    _v91 = _v0.i(0);
  function _v92({
    isOpen: _v0,
    onClose: _v1,
    planName: _v2,
    renewalPrice: _v3,
    enableAutoRenew: _v4,
    loading: _v5 = !1,
    tier: _v6,
    billingPeriod: _v7
  }) {
    let _v8 = (0, _v16.useIsMobile)(),
      {
        trackBillingAction: _v9
      } = (0, _v3.useContext)(_v91.ManageTeamAnalytics),
      {
        trackAutoRenewSwitchedOn: _v10
      } = (0, _v20.useBillingTracking)(),
      _v11 = (0, _v3.useRef)(!1);
    return (0, _v3.useEffect)(() => {
      _v0 && !_v11.current && (_v9({
        action_type: _v61.BillingActionTypes.LAND,
        location: _v61.BillingActionLocations.AUTORENEW_ENABLE_MODAL
      }), _v11.current = !0);
    }, [_v0, _v9]), (0, _v1.jsxs)(_v84.Modal, {
      isOpen: _v0,
      onClose: () => {
        _v9({
          action_types: _v61.BillingActionTypes.CLICK,
          location: _v61.BillingActionLocations.ENABLE_MODAL_CLOSE_BUTTON
        }), _v1();
      },
      children: [(0, _v1.jsx)(_v85.ModalOverlay, {}), (0, _v1.jsxs)(_v86.ModalContent, {
        maxW: "480px",
        children: [(0, _v1.jsxs)(_v87.ModalHeader, {
          position: "relative",
          pb: 0,
          children: [(0, _v1.jsx)(_v37.Text, {
            variant: "heading-md",
            children: _v8 ? _v63.T.EnableAutoRenewMobile : _v63.T.EnableAutoRenew
          }), (0, _v1.jsx)(_v90.ModalCloseButton, {
            height: "28px",
            style: {
              outline: "none"
            }
          })]
        }), (0, _v1.jsxs)(_v89.ModalBody, {
          children: [(0, _v1.jsx)(_v37.Text, {
            variant: "body-md",
            mb: 3,
            children: _v63.T.AutoRenewModalTitle(_v2)
          }), (0, _v1.jsx)(_v37.Text, {
            variant: "body-xs",
            color: "text-secondary",
            children: _v8 ? _v63.T.AutoRenewModalDisclaimerMobile(_v3) : _v63.T.AutoRenewModalDisclaimerDesktop(_v3)
          })]
        }), (0, _v1.jsx)(_v88.ModalFooter, {
          children: (0, _v1.jsxs)(_v12.HStack, {
            spacing: 3,
            justifyContent: "space-between",
            width: "100%",
            sx: {
              button: {
                width: _v8 ? "100%" : "50%"
              }
            },
            children: [(0, _v1.jsx)(_v8.Button, {
              variant: "tertiary",
              isLoading: _v5,
              onClick: _v1,
              hidden: _v8,
              children: _v63.T.Cancel
            }), (0, _v1.jsx)(_v8.Button, {
              variant: "positive",
              isLoading: _v5,
              onClick: () => {
                _v9({
                  action_type: _v61.BillingActionTypes.CLICK,
                  location: _v61.BillingActionLocations.ENABLE_MODAL_AUTORENEW_BUTTON
                }), _v10({
                  tier: _v6,
                  periodicity: "year" === _v7 ? "annual" : "monthly"
                }), _v4();
              },
              children: _v63.T.EnableAutoRenew
            })]
          })
        })]
      })]
    });
  }
  var _v93 = _v0.i(0),
    _v94 = _v0.i(0);
  async function _v95({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    ..._v3
  }) {
    return (0, _v93.measureLatency)("postMeAccountsContacts", "POST", async () => {
      let _v0 = await fetch(`${_v0}/me/accounts/contacts?fields=${_v1.map(_v94.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "POST",
        body: JSON.stringify((0, _v94.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v94.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v94.deepCamelCase)(_v1);
    });
  }
  async function _v96({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    ..._v3
  }) {
    return (0, _v93.measureLatency)("patchMeAccountsContacts", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/me/accounts/contacts?fields=${_v1.map(_v94.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "PATCH",
        body: JSON.stringify((0, _v94.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v94.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v94.deepCamelCase)(_v1);
    });
  }
  function _v97() {
    let {
        mutate: _v0
      } = (0, _v48.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v50.useGctlConfig)(),
      [_v5, _v6] = (0, _v49.useInternalState)();
    return [(0, _v3.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/accounts/contacts${(0, _v49.serializeQuery)(_v0)}`, _v96({
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
  "true" === _v45.default.env.STORYBOOK && (0, _v49.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v48.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v50.useGctlConfig)(),
      [_v5, _v6] = (0, _v49.useInternalState)();
    return [(0, _v3.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/accounts/contacts${(0, _v49.serializeQuery)(_v0)}`, _v95({
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
  }), "true" === _v45.default.env.STORYBOOK && (0, _v49.assignMswData)(_v97, {
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
        } = (0, _v3.useContext)(_v91.ManageTeamAnalytics),
        [_v6, _v7] = _v97(),
        _v8 = (0, _v25.useElements)(),
        _v9 = (0, _v3.useCallback)(() => {
          _v5({
            action_type: _v61.BillingActionTypes.CLICK,
            location: _v61.BillingActionLocations.OPTOUT_MODAL_CLOSE_BUTTON
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
      }, [_v1, _v0, _v7, _v9]), (0, _v1.jsxs)(_v84.Modal, {
        isOpen: _v1,
        onClose: _v9,
        scrollBehavior: "outside",
        children: [(0, _v1.jsx)(_v85.ModalOverlay, {}), (0, _v1.jsxs)(_v86.ModalContent, {
          children: [(0, _v1.jsx)(_v87.ModalHeader, {
            children: _v63.T.UpdateBillingAddress
          }), (0, _v1.jsx)(_v90.ModalCloseButton, {}), (0, _v1.jsxs)(_v89.ModalBody, {
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
          }), (0, _v1.jsxs)(_v88.ModalFooter, {
            children: [(0, _v1.jsx)(_v8.Button, {
              variant: "secondary",
              mr: 3,
              onClick: _v9,
              children: _v63.T.Close
            }), (0, _v1.jsx)(_v8.Button, {
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
                  action_type: _v61.BillingActionTypes.CLICK,
                  location: _v61.BillingActionLocations.UPDATE_BILLING_ADDRESS_BUTTON
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
              children: _v63.T.Update
            })]
          })]
        })]
      });
    },
    _v100 = ({
      onAddressComplete: _v0
    }) => {
      let _v1 = (0, _v98.useViewer)();
      return (0, _v1.jsxs)(_v7.Box, {
        children: [(0, _v1.jsx)(_v25.AddressElement, {
          options: {
            mode: "billing",
            autocomplete: {
              mode: "automatic"
            },
            defaultValues: {
              address: {
                country: _v1?.location ?? ""
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
          children: (0, _v1.jsx)(_v25.PaymentElement, {
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
      } = (0, _v18.useOrionSettings)(),
      {
        membership: _v1
      } = (0, _v3.useContext)(_v91.ManageTeamStateCtx),
      {
        hasScheduledDowngrade: _v2,
        normalizedScheduledTier: _v3
      } = (0, _v103.useScheduledOrder)(_v1.subscriptionId, _v1.tier, _v1.hasAutorenew);
    return _v2 && _v62.RepackagedTiers.includes(_v3 ?? "") ? {
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
  var _v106 = _v0.i(0),
    _v107 = _v0.i(0),
    _v108 = _v0.i(0),
    _v109 = _v0.i(0),
    _v110 = _v0.i(0);
  let _v111 = _v0 => (0, _v1.jsx)(_v77.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v1.jsxs)("g", {
        fill: "currentColor",
        children: [(0, _v1.jsx)("path", {
          d: "m11.074 12.29 2.69-2.7.04-.01a1.004 1.004 0 1 1 1.42 1.42l-3.44 3.41a1.001 1.001 0 0 1-1.42 0l-1.6-1.6a1.004 1.004 0 1 1 1.42-1.42l.89.9Z"
        }), (0, _v1.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M12.761 1.732a2 2 0 0 0-1.522 0l-7.5 3.088A2 2 0 0 0 2.5 6.67V11c0 6.465 4.766 10.204 8.983 11.396.336.095.69.097 1.027.004 4.229-1.16 8.99-4.94 8.99-11.4V6.67a2 2 0 0 0-1.238-1.85l-7.5-3.088ZM4.5 6.67 12 3.582l7.5 3.088V11c0 5.284-3.859 8.459-7.496 9.465C8.354 19.425 4.5 16.28 4.5 11V6.67Z"
        })]
      })
    }),
    _v112 = ({
      planLabel: _v0,
      renewalPrice: _v1,
      renewalPeriodLabel: _v2,
      nextBillingDateLabel: _v3,
      isAcceptLoading: _v4,
      errorMessage: _v5,
      onAccept: _v6,
      onDismiss: _v7
    }) => {
      let _v8 = (0, _v109.useColorModeValue)("https://i.vimeocdn.com/custom_asset/e520ebb454be34b730a243080e0e4fbd", "https://i.vimeocdn.com/custom_asset/f3b510e81bf8826c59eaf93ca9edd65e");
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v87.ModalHeader, {
          paddingTop: "24px",
          paddingBottom: "0",
          paddingX: "24px",
          children: (0, _v1.jsx)(_v10.Flex, {
            width: "100%",
            justifyContent: "center",
            children: (0, _v1.jsxs)(_v108.Stack, {
              spacing: "6",
              width: "100%",
              maxWidth: (0, _v14.rem)(400),
              align: "center",
              children: [(0, _v1.jsxs)(_v10.Flex, {
                borderRadius: (0, _v14.rem)(4),
                backgroundColor: "var(--button-primary-default, var(--vimeo-colors-text-primary))",
                color: "text-button-inverted",
                alignItems: "center",
                justifyContent: "center",
                gap: "1",
                height: (0, _v14.rem)(28),
                minHeight: (0, _v14.rem)(28),
                paddingX: "1",
                paddingY: "0",
                children: [(0, _v1.jsx)(_v110.AiSparkles, {
                  boxSize: (0, _v14.rem)(14)
                }), (0, _v1.jsx)(_v37.Text, {
                  fontSize: (0, _v14.rem)(14),
                  lineHeight: "1.4",
                  letterSpacing: "-0.42px",
                  fontWeight: "500",
                  color: "text-button-inverted",
                  children: (0, _v67.translate)({
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
              }), (0, _v1.jsxs)(_v108.Stack, {
                spacing: "4",
                width: "100%",
                align: "center",
                paddingX: "8",
                children: [(0, _v1.jsxs)(_v108.Stack, {
                  spacing: "2",
                  width: "100%",
                  align: "center",
                  children: [(0, _v1.jsx)(_v37.Text, {
                    variant: "heading-2xl",
                    textAlign: "center",
                    color: "text-primary",
                    children: (0, _v67.translate)({
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
                  }), (0, _v1.jsx)(_v27.Badge, {
                    variant: "upgrade",
                    size: "sm",
                    height: (0, _v14.rem)(28),
                    minHeight: (0, _v14.rem)(28),
                    children: _v0
                  })]
                }), (0, _v1.jsx)(_v37.Text, {
                  variant: "heading-sm",
                  textAlign: "center",
                  color: "text-primary",
                  children: (0, _v67.translate)({
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
        }), (0, _v1.jsx)(_v89.ModalBody, {
          paddingTop: "24px",
          paddingBottom: "0",
          paddingX: "24px",
          children: (0, _v1.jsx)(_v10.Flex, {
            width: "100%",
            justifyContent: "center",
            children: (0, _v1.jsxs)(_v108.Stack, {
              spacing: "6",
              width: "100%",
              maxWidth: (0, _v14.rem)(400),
              align: "center",
              children: [(0, _v1.jsx)(_v10.Flex, {
                width: "100%",
                justifyContent: "center",
                children: (0, _v1.jsx)(_v7.Box, {
                  as: "img",
                  src: _v8,
                  alt: "",
                  width: "100%",
                  maxWidth: (0, _v14.rem)(490),
                  maxHeight: (0, _v14.rem)(280),
                  objectFit: "contain"
                })
              }), (0, _v1.jsxs)(_v108.Stack, {
                spacing: "2",
                width: "100%",
                align: "stretch",
                children: [(0, _v1.jsxs)(_v10.Flex, {
                  gap: "1",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  width: "100%",
                  children: [(0, _v1.jsx)(_v10.Flex, {
                    alignItems: "center",
                    paddingTop: "2px",
                    children: (0, _v1.jsx)(_v111, {
                      color: "status-positive-primary",
                      boxSize: (0, _v14.rem)(16)
                    })
                  }), (0, _v1.jsx)(_v37.Text, {
                    variant: "heading-xs",
                    color: "status-positive-primary",
                    textAlign: "left",
                    flex: "1",
                    children: (0, _v67.translate)({
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
                }), (0, _v1.jsx)(_v37.Text, {
                  variant: "body-xs",
                  color: "text-tertiary",
                  textAlign: "left",
                  children: (0, _v67.translate)({
                    singular: "By completing this purchase, you agree: You're enrolling in a subscription that will automatically renew every {PERIOD} at {PRICE} (plus tax) until you cancel in your {BILLING_SETTINGS} at least one day before renewal. Pricing may change. Your content may be {DELETED} upon cancellation. By completing this purchase, you agree to our {TERMS_OF_SERVICE}, including the arbitration agreement and class action waiver, and acknowledge our {PRIVACY_POLICY}.",
                    replacements: {
                      PERIOD: _v2,
                      PRICE: _v1,
                      BILLING_SETTINGS: (0, _v1.jsx)(_v28.Link, {
                        href: "https://vimeo.com/settings/billing",
                        variant: "inline-secondary",
                        textDecoration: "underline",
                        isExternal: !0,
                        children: (0, _v67.translate)({
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
                      DELETED: (0, _v1.jsx)(_v28.Link, {
                        href: "https://help.vimeo.com/hc/en-us/articles/12425417275665-What-happens-when-I-lapse-to-the-Free-plan",
                        variant: "inline-secondary",
                        textDecoration: "underline",
                        isExternal: !0,
                        children: (0, _v67.translate)({
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
                      TERMS_OF_SERVICE: (0, _v1.jsx)(_v28.Link, {
                        href: "https://vimeo.com/terms",
                        variant: "inline-secondary",
                        textDecoration: "underline",
                        isExternal: !0,
                        children: (0, _v67.translate)({
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
                      PRIVACY_POLICY: (0, _v1.jsx)(_v28.Link, {
                        href: "https://vimeo.com/privacy",
                        variant: "inline-secondary",
                        textDecoration: "underline",
                        isExternal: !0,
                        children: (0, _v67.translate)({
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
        }), (0, _v1.jsx)(_v88.ModalFooter, {
          paddingTop: "48px",
          paddingBottom: "24px",
          paddingX: "24px",
          children: (0, _v1.jsx)(_v10.Flex, {
            width: "100%",
            justifyContent: "center",
            children: (0, _v1.jsxs)(_v108.Stack, {
              spacing: "2",
              width: "100%",
              maxWidth: (0, _v14.rem)(400),
              children: [_v5 ? (0, _v1.jsx)(_v37.Text, {
                variant: "body-sm",
                color: "status-negative-primary",
                textAlign: "center",
                children: _v5
              }) : null, (0, _v1.jsx)(_v8.Button, {
                onClick: _v6,
                isLoading: _v4,
                size: "lg",
                variant: "primary",
                width: "100%",
                children: (0, _v67.translate)({
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
              }), (0, _v1.jsx)(_v8.Button, {
                onClick: _v7,
                size: "lg",
                variant: "secondary",
                width: "100%",
                children: (0, _v67.translate)({
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
  var _v113 = _v0.i(0),
    _v114 = _v0.i(0),
    _v115 = _v0.i(0),
    _v116 = _v0.i(0);
  let _v117 = ({
    onClick: _v0
  }) => (0, _v1.jsx)(_v115.IconButton, {
    "aria-label": (0, _v67.translate)({
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
    icon: (0, _v1.jsx)(_v116.ArrowLeft, {}),
    variant: "tertiary",
    size: "sm",
    position: "absolute",
    top: "20px",
    left: "20px",
    onClick: _v0
  });
  var _v118 = _v0.i(0);
  let _v119 = _v0 => _v0 ? `url(${_v0})` : void 0,
    _v120 = ({
      frozenVideosCount: _v0,
      storageUsedBytes: _v1,
      storageLimitBytes: _v2,
      targetPlanName: _v3
    }) => {
      let _v4 = _v3 ?? (0, _v67.translate)({
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
        _v5 = (0, _v67.translate)({
          singular: "{COUNT} video will be frozen",
          plural: "{COUNT} videos will be frozen",
          count: _v0,
          replacements: {
            COUNT: (0, _v118.formatNumber)(_v0)
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
        _v6 = (0, _v59.formatBytes)(_v2, !1),
        _v7 = (0, _v67.translate)({
          singular: "{USED} of {LIMIT} in use",
          replacements: {
            USED: (0, _v59.formatBytes)(_v1, !1),
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
      return (0, _v1.jsxs)(_v10.Flex, {
        gap: "3",
        align: "flex-start",
        children: [(0, _v1.jsx)(_v41.CircleExclamationFilled, {
          boxSize: "24px",
          color: "status-caution-primary"
        }), (0, _v1.jsxs)(_v108.Stack, {
          spacing: "4",
          flex: "1",
          children: [(0, _v1.jsxs)(_v108.Stack, {
            spacing: "1",
            children: [(0, _v1.jsx)(_v37.Text, {
              variant: "heading-sm",
              children: _v5
            }), (0, _v1.jsx)(_v37.Text, {
              variant: "body-md",
              color: "text-secondary",
              children: (0, _v67.translate)({
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
          }), (0, _v1.jsxs)(_v108.Stack, {
            spacing: "2",
            width: "100%",
            children: [(0, _v1.jsx)(_v37.Text, {
              variant: "body-sm",
              color: "text-secondary",
              children: _v7
            }), (0, _v1.jsxs)(_v7.Box, {
              position: "relative",
              height: "4px",
              borderRadius: "999px",
              backgroundColor: "blue.50",
              overflow: "visible",
              children: [(0, _v1.jsx)(_v7.Box, {
                position: "absolute",
                inset: "0",
                backgroundColor: "status-destructive-primary",
                borderRadius: "999px"
              }), (0, _v1.jsx)(_v7.Box, {
                position: "absolute",
                top: "0",
                left: "0",
                height: "4px",
                width: _v9,
                backgroundColor: "text-tertiary",
                borderRadius: "999px"
              }), (0, _v1.jsx)(_v7.Box, {
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
    _v121 = ({
      badgeLabel: _v0,
      count: _v1,
      title: _v2,
      description: _v3,
      videos: _v4
    }) => {
      let _v5 = _v4.length > 3,
        _v6 = Math.max(_v1, _v4.length),
        _v7 = _v5 ? _v4.slice(0, 2) : _v4,
        _v8 = _v5 ? _v4.slice(2, 5).map(_v0 => _v119(_v0.thumbnail)).filter(_v0 => !!_v0) : [],
        _v9 = Math.max(_v6 - 2, 0);
      return (0, _v1.jsxs)(_v10.Flex, {
        gap: "3",
        align: "flex-start",
        children: [(0, _v1.jsx)(_v41.CircleExclamationFilled, {
          boxSize: "24px",
          color: "status-caution-primary"
        }), (0, _v1.jsxs)(_v108.Stack, {
          spacing: "4",
          flex: "1",
          children: [(0, _v1.jsxs)(_v108.Stack, {
            spacing: "1",
            children: [(0, _v1.jsx)(_v37.Text, {
              variant: "heading-sm",
              children: _v2
            }), (0, _v1.jsx)(_v37.Text, {
              variant: "body-md",
              color: "text-secondary",
              children: _v3
            })]
          }), (0, _v1.jsxs)(_v113.Grid, {
            width: "100%",
            gap: "3",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            justifyContent: "flex-start",
            children: [_v7.map(_v0 => (0, _v1.jsxs)(_v108.Stack, {
              spacing: "2",
              width: "100%",
              children: [(0, _v1.jsxs)(_v7.Box, {
                aspectRatio: "16 / 9",
                backgroundColor: "gray.100",
                borderRadius: "8px",
                overflow: "hidden",
                position: "relative",
                width: "100%",
                children: [(0, _v1.jsx)(_v7.Box, {
                  backgroundImage: _v119(_v0.thumbnail),
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  position: "absolute",
                  inset: "0"
                }), _v0 && (0, _v1.jsx)(_v7.Box, {
                  backgroundColor: "status-caution-primary",
                  borderRadius: "4px",
                  paddingX: "4px",
                  paddingY: "1px",
                  position: "absolute",
                  right: "8px",
                  top: "8px",
                  children: (0, _v1.jsx)(_v37.Text, {
                    fontSize: "10px",
                    color: "white",
                    fontWeight: "500",
                    children: _v0
                  })
                })]
              }), (0, _v1.jsx)(_v37.Text, {
                variant: "heading-2xs",
                noOfLines: 1,
                textAlign: "left",
                children: _v0.title
              })]
            }, _v0.uri)), _v5 && (0, _v1.jsxs)(_v108.Stack, {
              spacing: "2",
              width: "100%",
              children: [(0, _v1.jsx)(_v7.Box, {
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
                  return _v2 ? (0, _v1.jsx)(_v7.Box, {
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
              }), (0, _v1.jsx)(_v37.Text, {
                variant: "heading-2xs",
                noOfLines: 1,
                textAlign: "left",
                children: (0, _v67.translate)({
                  singular: "and other {COUNT}",
                  plural: "and other {COUNT}",
                  count: _v9,
                  replacements: {
                    COUNT: (0, _v118.formatNumber)(_v9)
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
    _v122 = ({
      unlistedVideosCount: _v0,
      videos: _v1
    }) => {
      let _v2 = Math.max(_v0, _v1.length),
        _v3 = (0, _v67.translate)({
          singular: "{COUNT} unlisted video will become private",
          plural: "{COUNT} unlisted videos will become private",
          count: _v2,
          replacements: {
            COUNT: (0, _v118.formatNumber)(_v2)
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
      return (0, _v1.jsx)(_v121, {
        badgeLabel: (0, _v67.translate)({
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
          children: [(0, _v67.translate)({
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
          }), " ", (0, _v1.jsx)(_v37.Text, {
            as: "span",
            fontWeight: "500",
            color: "text-secondary",
            children: (0, _v67.translate)({
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
    _v123 = ({
      frozenVideosCount: _v0,
      storageLimitBytes: _v1,
      videos: _v2,
      targetPlanName: _v3
    }) => {
      let _v4 = Math.max(_v0, _v2.length),
        _v5 = (0, _v67.translate)({
          singular: "{COUNT} video will be frozen",
          plural: "{COUNT} videos will be frozen",
          count: _v4,
          replacements: {
            COUNT: (0, _v118.formatNumber)(_v4)
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
        _v6 = _v3 ?? (0, _v67.translate)({
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
      return (0, _v1.jsx)(_v121, {
        count: _v4,
        title: _v5,
        description: (0, _v67.translate)({
          singular: "Your videos beyond the {PLAN} storage limit of {LIMIT} will be frozen and no longer accessible.",
          replacements: {
            PLAN: _v6,
            LIMIT: (0, _v59.formatBytes)(_v1, !1)
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
    _v124 = ({
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
      return _v8 || _v9 ? (0, _v1.jsxs)(_v7.Box, {
        backgroundColor: "color-mix(in srgb, var(--vimeo-colors-status-caution-primary) 10%, transparent);",
        paddingX: "24px",
        paddingY: "32px",
        position: "relative",
        overflow: "visible",
        children: [(0, _v1.jsxs)(_v108.Stack, {
          spacing: "10",
          children: [_v8 && (_v9 ? (0, _v1.jsx)(_v120, {
            frozenVideosCount: _v6,
            storageUsedBytes: _v2,
            storageLimitBytes: _v3,
            targetPlanName: _v1
          }) : (0, _v1.jsx)(_v123, {
            frozenVideosCount: _v6,
            storageLimitBytes: _v3,
            videos: _v4,
            targetPlanName: _v1
          })), _v9 && (0, _v1.jsx)(_v122, {
            unlistedVideosCount: _v7,
            videos: _v5
          })]
        }), (0, _v1.jsxs)(_v10.Flex, {
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
          children: [(0, _v1.jsx)(_v41.CircleExclamationFilled, {
            boxSize: "16px",
            color: "white"
          }), (0, _v1.jsx)(_v37.Text, {
            variant: "heading-2xs",
            color: "white",
            children: (0, _v67.translate)({
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
    _v125 = ({
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
        _v12 = [..._v2, (0, _v67.translate)({
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
      return (0, _v1.jsxs)(_v7.Box, {
        sx: {
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale"
        },
        display: "flex",
        flexDirection: "column",
        flex: "1",
        minHeight: "0",
        children: [(0, _v1.jsx)(_v87.ModalHeader, {
          paddingLeft: "60px",
          paddingBottom: "12px",
          children: (0, _v1.jsx)(_v11.Header, {
            size: "md",
            textAlign: "left",
            children: _v0
          })
        }), (0, _v1.jsx)(_v117, {
          onClick: _v6
        }), (0, _v1.jsxs)(_v89.ModalBody, {
          paddingX: "0",
          paddingTop: "12px",
          paddingBottom: "0",
          overflowY: "auto",
          children: [(0, _v1.jsx)(_v124, {
            warningData: _v1
          }), (0, _v1.jsx)(_v7.Box, {
            backgroundColor: _v11 ? "surface" : "color-mix(in srgb, var(--vimeo-colors-status-destructive-primary) 10%, transparent)",
            paddingX: "60px",
            paddingY: _v11 ? "24px" : "32px",
            children: (0, _v1.jsxs)(_v108.Stack, {
              spacing: "4",
              width: "100%",
              children: [(0, _v1.jsx)(_v37.Text, {
                variant: "heading-sm",
                children: (0, _v67.translate)({
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
              }), (0, _v1.jsx)(_v113.Grid, {
                gridTemplateColumns: {
                  base: "repeat(1, minmax(0, 1fr))",
                  md: "repeat(2, minmax(0, 1fr))"
                },
                columnGap: "4",
                rowGap: "6px",
                width: "100%",
                children: _v12.map((_v0, _v1) => {
                  let _v2 = _v1 === _v13;
                  return (0, _v1.jsxs)(_v10.Flex, {
                    gap: "6px",
                    align: "center",
                    children: [!_v2 && (0, _v1.jsx)(_v114.CloseXCircleFilled, {
                      boxSize: "14px",
                      color: "status-destructive-primary"
                    }), (0, _v1.jsx)(_v37.Text, {
                      variant: "heading-xs",
                      color: _v2 ? "status-destructive-primary" : void 0,
                      children: _v0
                    })]
                  }, `feature-${_v1}-${_v0}`);
                })
              })]
            })
          })]
        }), (0, _v1.jsx)(_v88.ModalFooter, {
          paddingTop: "20px",
          paddingBottom: "24px",
          paddingX: {
            base: "24px",
            md: "60px"
          },
          children: (0, _v1.jsxs)(_v108.Stack, {
            spacing: "3",
            width: "100%",
            children: [(0, _v1.jsx)(_v8.Button, {
              onClick: _v4,
              size: "md",
              variant: "primary",
              width: "100%",
              children: (0, _v67.translate)({
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
            }), (0, _v1.jsx)(_v8.Button, {
              onClick: _v5,
              size: "md",
              variant: "destructive",
              isLoading: _v3,
              disabled: _v3,
              width: "100%",
              children: _v7 ? (0, _v67.translate)({
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
              }) : (0, _v67.translate)({
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
  var _v126 = _v0.i(0);
  let _v127 = _v0 => (0, _v1.jsx)(_v77.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5.139 3.086C5.375 1.669 6.725 1 8 1c1.455 0 2.585.956 3.334 1.864.245.297.467.61.666.924a9.15 9.15 0 0 1 .666-.924C13.415 1.956 14.546 1 16 1c1.275 0 2.625.67 2.861 2.086.11.652-.052 1.3-.428 1.914h.999c.252 0 .498 0 .706.017.229.019.499.063.77.201a2 2 0 0 1 .874.874c.138.271.182.541.201.77.017.208.017.454.017.706v.864c0 .252 0 .498-.017.706a2.022 2.022 0 0 1-.201.77 2 2 0 0 1-.782.824v7.107c0 .527 0 .982-.03 1.356-.033.395-.104.789-.297 1.167a3 3 0 0 1-1.311 1.311c-.378.193-.772.264-1.167.296-.375.031-.83.031-1.356.031H7.16c-.527 0-.981 0-1.356-.03-.395-.033-.789-.104-1.167-.297a3 3 0 0 1-1.311-1.311c-.193-.378-.264-.772-.296-1.167C3 18.82 3 18.365 3 17.838v-7.106a2 2 0 0 1-.782-.824 2.022 2.022 0 0 1-.201-.77C2 8.93 2 8.684 2 8.432V7.568c0-.252 0-.498.017-.706.019-.229.063-.499.201-.77a2 2 0 0 1 .874-.874c.271-.138.541-.182.77-.201C4.07 5 4.316 5 4.568 5h.999c-.376-.615-.537-1.262-.428-1.914ZM7.984 7H8.698a5.85 5.85 0 0 0-.144.16C7.602 8.268 7 9.803 7 12a1 1 0 1 0 2 0c0-1.803.482-2.85 1.07-3.535.521-.606 1.188-1.004 1.93-1.362.742.358 1.409.756 1.93 1.362C14.518 9.149 15 10.197 15 12a1 1 0 1 0 2 0c0-2.197-.602-3.732-1.555-4.84a5.933 5.933 0 0 0-.143-.16H19.4a8.194 8.194 0 0 1 .588.011l.002.014c.01.116.01.278.01.575v.8c0 .297 0 .459-.01.575l-.001.014A8.194 8.194 0 0 1 19.4 9H19a1 1 0 1 0 0 2v6.8c0 .577 0 .949-.024 1.232-.022.272-.06.372-.085.422a1 1 0 0 1-.437.437c-.05.025-.15.063-.422.085C17.75 20 17.377 20 16.8 20H13V10a1 1 0 1 0-2 0v10H7.2c-.577 0-.949 0-1.232-.024-.272-.022-.373-.06-.422-.085a1 1 0 0 1-.437-.437c-.025-.05-.063-.15-.085-.422C5 18.75 5 18.377 5 17.8V11a1 1 0 1 0 0-2h-.4a8.192 8.192 0 0 1-.589-.011v-.014A8.186 8.186 0 0 1 4 8.4v-.8a8.186 8.186 0 0 1 .011-.589h.014C4.14 7 4.303 7 4.6 7h3.384Zm7.703-2c1.168-.847 1.225-1.446 1.202-1.586C16.875 3.331 16.725 3 16 3c-.545 0-1.165.377-1.791 1.136a7.335 7.335 0 0 0-.607.864h2.085ZM10.4 5H8.313C7.145 4.153 7.088 3.554 7.11 3.414 7.125 3.331 7.275 3 8 3c.545 0 1.165.377 1.791 1.136.225.273.429.57.607.864Z",
        fill: "currentColor"
      })
    }),
    _v128 = ({
      moreContext: _v0,
      onMoreContextChange: _v1,
      onContinue: _v2,
      onBookCallClicked: _v3,
      onBack: _v4
    }) => (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v87.ModalHeader, {
        paddingLeft: "64px",
        paddingBottom: "8px",
        children: (0, _v1.jsxs)(_v108.Stack, {
          spacing: "1",
          align: "flex-start",
          children: [(0, _v1.jsx)(_v11.Header, {
            size: "md",
            fontWeight: "500",
            letterSpacing: "-0.8px",
            textAlign: "left",
            children: (0, _v67.translate)({
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
          }), (0, _v1.jsx)(_v37.Text, {
            variant: {
              base: "body-lg",
              md: "body-md"
            },
            children: (0, _v67.translate)({
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
      }), (0, _v1.jsx)(_v117, {
        onClick: _v4
      }), (0, _v1.jsxs)(_v89.ModalBody, {
        paddingTop: "0",
        paddingBottom: "0",
        children: [(0, _v1.jsxs)(_v108.Stack, {
          spacing: "3",
          children: [(0, _v1.jsx)(_v7.Box, {
            height: "150px",
            children: (0, _v1.jsx)(_v126.Textarea, {
              placeholder: (0, _v67.translate)({
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
          }), (0, _v1.jsxs)(_v10.Flex, {
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
            children: [(0, _v1.jsx)(_v7.Box, {
              position: "absolute",
              inset: "0",
              borderRadius: "8px",
              backgroundColor: "status-info-secondary",
              opacity: "0.48"
            }), (0, _v1.jsx)(_v10.Flex, {
              alignItems: "center",
              paddingY: "1",
              flexShrink: 0,
              position: "relative",
              zIndex: "1",
              children: (0, _v1.jsx)(_v127, {
                boxSize: "24px"
              })
            }), (0, _v1.jsxs)(_v10.Flex, {
              direction: "row",
              alignItems: "center",
              gap: "2",
              paddingY: "1",
              position: "relative",
              zIndex: "1",
              width: "100%",
              minWidth: "0",
              children: [(0, _v1.jsxs)(_v37.Text, {
                variant: {
                  base: "body-sm",
                  md: "body-md"
                },
                flex: "1",
                minWidth: "0",
                children: [(0, _v67.translate)({
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
                }), (0, _v1.jsx)(_v37.Text, {
                  as: "span",
                  variant: {
                    base: "heading-xs",
                    md: "heading-xs"
                  },
                  children: (0, _v67.translate)({
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
              }), (0, _v1.jsx)(_v8.Button, {
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
                children: (0, _v67.translate)({
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
        }), (0, _v1.jsx)(_v7.Box, {
          borderTopWidth: "1px",
          borderTopColor: "stroke",
          marginTop: "3"
        })]
      }), (0, _v1.jsx)(_v88.ModalFooter, {
        paddingBottom: "24px",
        children: (0, _v1.jsx)(_v10.Flex, {
          width: "100%",
          justifyContent: "flex-end",
          children: (0, _v1.jsx)(_v8.Button, {
            onClick: _v2,
            size: "md",
            variant: "primary",
            children: (0, _v67.translate)({
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
    _v129 = ({
      onBack: _v0,
      onConfirmRandomFreeze: _v1
    }) => (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v87.ModalHeader, {
        paddingLeft: "64px",
        children: (0, _v1.jsxs)(_v108.Stack, {
          spacing: "1",
          align: "flex-start",
          children: [(0, _v1.jsx)(_v11.Header, {
            size: "md",
            fontWeight: "500",
            letterSpacing: "-0.8px",
            textAlign: "left",
            children: (0, _v67.translate)({
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
          }), (0, _v1.jsx)(_v37.Text, {
            variant: {
              base: "body-lg",
              md: "body-md"
            },
            children: (0, _v67.translate)({
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
      }), (0, _v1.jsx)(_v117, {
        onClick: _v0
      }), (0, _v1.jsx)(_v89.ModalBody, {}), (0, _v1.jsx)(_v88.ModalFooter, {
        paddingTop: "20px",
        paddingBottom: "24px",
        children: (0, _v1.jsxs)(_v10.Flex, {
          gap: "3",
          width: "100%",
          justifyContent: "flex-end",
          flexDirection: {
            base: "column",
            md: "row"
          },
          children: [(0, _v1.jsx)(_v8.Button, {
            onClick: _v0,
            size: "md",
            variant: "secondary",
            width: {
              base: "100%",
              md: "auto"
            },
            children: (0, _v67.translate)({
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
          }), (0, _v1.jsx)(_v8.Button, {
            onClick: _v1,
            size: "md",
            variant: "destructive",
            width: {
              base: "100%",
              md: "auto"
            },
            children: (0, _v67.translate)({
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
  var _v130 = _v0.i(0),
    _v131 = _v0.i(0);
  let _v132 = ({
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
        children: [(0, _v1.jsx)(_v87.ModalHeader, {
          paddingLeft: "64px",
          children: (0, _v1.jsx)(_v11.Header, {
            size: "md",
            fontWeight: "500",
            letterSpacing: "-0.8px",
            textAlign: "left",
            children: (0, _v67.translate)({
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
        }), (0, _v1.jsx)(_v117, {
          onClick: _v8
        }), (0, _v1.jsx)(_v89.ModalBody, {
          paddingTop: "8px",
          paddingX: "40px",
          paddingBottom: "0",
          children: _v3 ? (0, _v1.jsx)(_v108.Stack, {
            alignItems: "center",
            justifyContent: "center",
            minH: "360px",
            children: (0, _v1.jsx)(_v36.Spinner, {
              size: "md"
            })
          }) : (0, _v1.jsxs)(_v108.Stack, {
            spacing: "6",
            children: [(0, _v1.jsxs)(_v108.Stack, {
              spacing: "1",
              align: "flex-start",
              children: [(0, _v1.jsx)(_v37.Text, {
                variant: {
                  base: "heading-sm",
                  md: "heading-xs"
                },
                children: (0, _v67.translate)({
                  singular: "Deselect videos until you go below {LIMIT}.",
                  replacements: {
                    LIMIT: (0, _v59.formatBytes)(_v2, !1)
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
              }), (0, _v1.jsx)(_v37.Text, {
                variant: {
                  base: "body-lg",
                  md: "body-md"
                },
                color: "text-secondary",
                children: (0, _v67.translate)({
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
            }), (0, _v1.jsxs)(_v108.Stack, {
              spacing: "2",
              children: [(0, _v1.jsxs)(_v10.Flex, {
                justifyContent: "space-between",
                children: [(0, _v1.jsx)(_v37.Text, {
                  variant: {
                    base: "body-sm",
                    md: "body-sm"
                  },
                  color: "text-secondary",
                  children: (0, _v67.translate)({
                    singular: "Selected: {SIZE}",
                    replacements: {
                      SIZE: (0, _v59.formatBytes)(_v1, !1)
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
                }), (0, _v1.jsx)(_v37.Text, {
                  variant: {
                    base: "body-sm",
                    md: "body-sm"
                  },
                  color: "text-secondary",
                  children: (0, _v67.translate)({
                    singular: "/ {SIZE} limit",
                    replacements: {
                      SIZE: (0, _v59.formatBytes)(_v2, !1)
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
              }), (0, _v1.jsxs)(_v7.Box, {
                height: "4px",
                width: "100%",
                borderRadius: "999px",
                backgroundColor: "button-secondary-default",
                position: "relative",
                children: [_v11 ? (0, _v1.jsxs)(_v1.Fragment, {
                  children: [(0, _v1.jsx)(_v7.Box, {
                    position: "absolute",
                    inset: "0",
                    borderRadius: "999px",
                    backgroundColor: "status-destructive-primary"
                  }), (0, _v1.jsx)(_v7.Box, {
                    position: "absolute",
                    left: "0",
                    top: "0",
                    bottom: "0",
                    width: _v15,
                    borderLeftRadius: "999px",
                    backgroundColor: "gray.400"
                  })]
                }) : (0, _v1.jsxs)(_v1.Fragment, {
                  children: [(0, _v1.jsx)(_v7.Box, {
                    position: "absolute",
                    inset: "0",
                    borderRadius: "999px",
                    backgroundColor: "gray.300",
                    _dark: {
                      backgroundColor: "gray.600"
                    }
                  }), (0, _v1.jsx)(_v7.Box, {
                    position: "absolute",
                    left: "0",
                    top: "0",
                    bottom: "0",
                    width: _v14,
                    borderRadius: 1 === _v12 ? "999px" : void 0,
                    borderLeftRadius: "999px",
                    backgroundColor: "status-positive-primary"
                  })]
                }), (0, _v1.jsx)(_v7.Box, {
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
            }), (0, _v1.jsxs)(_v108.Stack, {
              spacing: "3",
              maxH: "336px",
              overflowY: "auto",
              paddingBottom: "2",
              children: [(0, _v1.jsxs)(_v10.Flex, {
                justifyContent: "space-between",
                alignItems: "center",
                children: [(0, _v1.jsx)(_v37.Text, {
                  variant: {
                    base: "body-sm",
                    md: "body-sm"
                  },
                  children: (0, _v67.translate)({
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
                }), (0, _v1.jsx)(_v8.Button, {
                  size: "xs",
                  variant: "tertiary",
                  onClick: _v5,
                  children: (0, _v67.translate)({
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
              }), (0, _v1.jsx)(_v113.Grid, {
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: "3",
                children: _v0.map(_v0 => (0, _v1.jsxs)(_v108.Stack, {
                  spacing: "2",
                  children: [(0, _v1.jsx)(_v8.Button, {
                    variant: "unstyled",
                    onClick: () => _v4(_v0.id),
                    padding: "0",
                    minH: "0",
                    height: "auto",
                    textAlign: "left",
                    children: (0, _v1.jsxs)(_v7.Box, {
                      borderRadius: "8px",
                      overflow: "hidden",
                      position: "relative",
                      width: "100%",
                      aspectRatio: "16 / 9",
                      children: [_v0.thumbnail ? (0, _v1.jsx)(_v131.Image, {
                        src: _v0.thumbnail,
                        alt: _v0.title,
                        position: "absolute",
                        inset: "0",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        opacity: _v0.selected ? 1 : .6
                      }) : null, (0, _v1.jsx)(_v7.Box, {
                        position: "absolute",
                        top: "8px",
                        left: "8px",
                        pointerEvents: "none",
                        children: (0, _v1.jsx)(_v130.Checkbox, {
                          size: "md",
                          isChecked: _v0.selected
                        })
                      }), (0, _v1.jsx)(_v7.Box, {
                        position: "absolute",
                        left: "8px",
                        bottom: "8px",
                        borderRadius: "4px",
                        paddingX: "6px",
                        paddingY: "2px",
                        backgroundColor: "blackAlpha.700",
                        children: (0, _v1.jsx)(_v37.Text, {
                          variant: {
                            base: "heading-2xs",
                            md: "heading-2xs"
                          },
                          color: "white",
                          children: (0, _v59.formatBytes)(_v0.sizeBytes, !1)
                        })
                      })]
                    })
                  }), (0, _v1.jsx)(_v37.Text, {
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
        }), _v3 ? null : (0, _v1.jsx)(_v88.ModalFooter, {
          paddingTop: "20px",
          paddingBottom: "24px",
          children: (0, _v1.jsxs)(_v108.Stack, {
            spacing: "3",
            width: "100%",
            children: [(0, _v1.jsx)(_v8.Button, {
              onClick: _v6,
              size: "md",
              variant: "primary",
              width: "100%",
              children: (0, _v67.translate)({
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
            }), (0, _v1.jsx)(_v8.Button, {
              onClick: _v7,
              size: "md",
              variant: "destructive",
              width: "100%",
              children: (0, _v67.translate)({
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
    _v133 = "Other";
  var _v134 = _v0.i(0);
  let _v135 = ({
    options: _v0,
    selectedOption: _v1,
    onSelectOption: _v2,
    onContinue: _v3,
    onKeepPlan: _v4,
    onBack: _v5
  }) => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v87.ModalHeader, {
      paddingLeft: "64px",
      children: (0, _v1.jsxs)(_v108.Stack, {
        spacing: "1",
        align: "flex-start",
        children: [(0, _v1.jsx)(_v11.Header, {
          size: "md",
          fontWeight: "500",
          letterSpacing: "-0.8px",
          textAlign: "left",
          children: (0, _v67.translate)({
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
        }), (0, _v1.jsx)(_v37.Text, {
          variant: {
            base: "body-lg",
            md: "body-md"
          },
          children: (0, _v67.translate)({
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
    }), (0, _v1.jsx)(_v117, {
      onClick: _v5
    }), (0, _v1.jsx)(_v89.ModalBody, {
      paddingTop: "32px",
      paddingBottom: "0",
      children: (0, _v1.jsx)(_v134.RadioGroup, {
        children: (0, _v1.jsx)(_v108.Stack, {
          spacing: "4",
          children: _v0.map(_v0 => {
            let _v1 = _v1 === _v0.value,
              _v2 = !!_v1 && !_v1;
            return (0, _v1.jsxs)(_v108.Stack, {
              spacing: "2",
              opacity: _v2 ? .3 : 1,
              transition: "opacity 0.2s ease",
              children: [(0, _v1.jsx)(_v34.Radio, {
                value: _v0.value,
                size: "sm",
                onChange: () => _v2(_v0.value),
                children: (0, _v1.jsx)(_v37.Text, {
                  variant: {
                    base: "heading-sm",
                    md: "heading-2xs"
                  },
                  children: _v0.label
                })
              }), _v1 && _v0.response && (0, _v1.jsxs)(_v108.Stack, {
                spacing: "3",
                paddingLeft: "24px",
                children: [(0, _v1.jsx)(_v37.Text, {
                  variant: {
                    base: "body-xl",
                    md: "body-lg"
                  },
                  color: "text-secondary",
                  children: _v0.response.text
                }), _v0.response.ctas.length > 0 && (0, _v1.jsx)(_v10.Flex, {
                  gap: "2",
                  flexWrap: {
                    base: "wrap",
                    md: "nowrap"
                  },
                  children: _v0.response.ctas.map(_v0 => (0, _v1.jsx)(_v8.Button, {
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
    }), (0, _v1.jsx)(_v88.ModalFooter, {
      paddingBottom: "24px",
      children: (0, _v1.jsxs)(_v10.Flex, {
        gap: "3",
        width: "100%",
        justifyContent: "flex-end",
        flexDirection: {
          base: "column-reverse",
          md: "row"
        },
        children: [(0, _v1.jsx)(_v8.Button, {
          onClick: _v3,
          size: "md",
          variant: "destructive",
          children: (0, _v67.translate)({
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
        }), (0, _v1.jsx)(_v8.Button, {
          onClick: _v4,
          size: "md",
          children: (0, _v67.translate)({
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
  var _v136 = _v0.i(0),
    _v137 = _v0.i(0),
    _v138 = _v0.i(0),
    _v139 = _v0.i(0);
  let _v140 = {
      feature: null
    },
    _v141 = {
      location: null,
      referrer_page_name: null,
      copy: null,
      path: null,
      referrer: null,
      target: null,
      target_path: null
    },
    _v142 = {
      copy: null,
      element: null,
      flow: null,
      modal_name: null,
      is_user_facing_data: null,
      scrolling_percentage: null,
      entity_type: null
    },
    _v143 = {
      app_id: null,
      integration_type: null,
      managed_user_id: null,
      partner_bucket: null,
      is_partner: null,
      integration_id: null,
      integration_name: null
    },
    _v144 = _v0 => {
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
          ..._v142,
          ..._v1,
          device_type: (0, _v139.default)()
        }, {
          product_analytics_context: new _v138.EventContext("product_analytics_context", 150, _v5)
        }),
        _v11 = (_v2 = {
          page_name: "billing",
          path: window.location.pathname
        }, _v6 = {
          ..._v141,
          ..._v2
        }, {
          web_context: new _v138.EventContext("web_context", 48, _v6)
        }),
        _v12 = (_v7 = {
          view_type: "impression",
          is_empty_state: !1,
          feature: null
        }, {
          view_context: new _v138.EventContext("view_context", 7, _v7)
        }),
        _v13 = (_v3 = {
          is_integration: !1
        }, _v8 = {
          ..._v143,
          ..._v3
        }, {
          third_party_integration_context: new _v138.EventContext("third_party_integration_context", 5, _v8)
        }),
        _v14 = (_v4 = {
          action_type: "click"
        }, _v9 = {
          ..._v140,
          ..._v4
        }, {
          action_context: new _v138.EventContext("action_context", 12, _v9)
        }),
        _v15 = {
          team_context: new _v138.EventContext("team_context", 7, {
            is_team_member: !!_v0,
            team_owner_id: _v0?.ownerId || null,
            team_subscription_type: _v0?.accountType || null,
            team_role: (0, _v137.default)(_v0?.plainTextPermissionLevel?.toLowerCase()) || null,
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
  var _v145 = _v0.i(0),
    _v146 = _v0.i(0);
  let _v147 = ({
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
      } = (0, _v3.useContext)(_v91.ManageTeamAnalytics),
      {
        fetchMembershipInfo: _v21,
        updateMembershipInfo: _v22
      } = (0, _v3.useContext)(_v91.ManageTeamDispatchCtx),
      {
        trackCancelSubscriptionPopupDisplayed: _v23,
        trackCancelSubscriptionPopupDismissed: _v24,
        trackCancellationSurveyAnswered: _v25,
        trackCancellationFullTextReasonAnswered: _v26,
        trackCancellationBookCallButtonClicked: _v27,
        trackCancellationLapsingClipSelectionDisplayed: _v28,
        trackCancellationLapsingClipSelectionProceeded: _v29,
        trackCancellationLapsingClipSelectionDeselectAllClicked: _v30,
        trackCancellationLapsingClipWarningDisplayed: _v31,
        trackCancellationLapsingClipWarningBackClicked: _v32,
        trackCancellationLapsingClipWarningConfirmed: _v33,
        trackCancellationOfferAccepted: _v34,
        trackCancellationOfferDismissed: _v35,
        trackCancellationKeepPlanClicked: _v36,
        trackCancellationBackClicked: _v37
      } = (0, _v20.useBillingTracking)(),
      _v38 = "none" === _v16 ? _v19 ? "lapsingSelection" : "confirm" : "survey",
      _v39 = !!_v4.isImpactedByGermanConsumerLaw,
      [_v40, _v41] = (0, _v3.useState)(_v7),
      [_v42, _v43] = (0, _v3.useState)(_v13 ?? _v38),
      _v44 = (0, _v3.useRef)([]),
      _v45 = _v0 => {
        _v44.current.push(_v42), _v43(_v0);
      },
      [_v46, _v47] = (0, _v3.useState)(null),
      [_v48, _v49] = (0, _v3.useState)(""),
      _v50 = _v4.billingPeriod === _v62.UserPlanType.Year,
      _v51 = (0, _v3.useMemo)(() => (({
        isAnnualPlan: _v0
      }) => {
        let _v1 = [{
          value: "I prefer to manually renew",
          label: (0, _v67.translate)({
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
            text: (0, _v67.translate)({
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
          label: (0, _v67.translate)({
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
            text: (0, _v67.translate)({
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
              label: (0, _v67.translate)({
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
          label: (0, _v67.translate)({
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
            text: (0, _v67.translate)({
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
              label: (0, _v67.translate)({
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
          label: (0, _v67.translate)({
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
            text: (0, _v67.translate)({
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
              label: (0, _v67.translate)({
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
              label: (0, _v67.translate)({
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
          label: (0, _v67.translate)({
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
            text: (0, _v67.translate)({
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
              label: (0, _v67.translate)({
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
          label: (0, _v67.translate)({
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
            text: (0, _v67.translate)({
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
              label: (0, _v67.translate)({
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
          label: (0, _v67.translate)({
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
            text: (0, _v67.translate)({
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
              label: (0, _v67.translate)({
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
          label: (0, _v67.translate)({
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
          label: (0, _v67.translate)({
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
            text: (0, _v67.translate)({
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
              label: (0, _v67.translate)({
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
        let _v2 = _v1.find(_v0 => _v0.value === _v133),
          _v3 = (_v0 => {
            let _v1 = [..._v0];
            for (let _v0 = _v1.length - 1; _v0 > 0; _v0 -= 1) {
              let _v0 = Math.floor(Math.random() * (_v0 + 1));
              [_v1[_v0], _v1[_v0]] = [_v1[_v0], _v1[_v0]];
            }
            return _v1;
          })(_v1.filter(_v0 => _v0.value !== _v133));
        return _v2 && _v3.push(_v2), _v3;
      })({
        isAnnualPlan: _v50
      }), [_v50]),
      _v52 = (0, _v3.useMemo)(() => _v144(_v10), [_v10]),
      _v53 = _v10?.ownerId ?? _v14?.user?.id,
      [_v54, _v55] = (0, _v3.useState)(null),
      [_v56, _v57] = (0, _v3.useState)(!1),
      {
        data: _v58,
        isLoading: _v59
      } = (0, _v107.useGetUserSettingsBillingCancellationWarning)(() => _v53 ? {
        where: {
          userId: _v53
        },
        select: ["frozenVideosCount", "frozenVideosPreview", "storageLimitBytes", "storageUsedBytes", "unlistedVideosCount", "unlistedVideosPreview"]
      } : null),
      _v60 = _v19 && (_v58?.storageLimitBytes ?? 0) > 0 && (_v58?.frozenVideosCount ?? 0) + (_v58?.unlistedVideosCount ?? 0) > 0,
      {
        lapsingSelectionVideos: _v61,
        lapsingStorageLimitBytes: _v62,
        selectedLapsingStorageBytes: _v63,
        isLapsingSelectionVideosLoading: _v64,
        isSelectedLapsingStorageOverLimit: _v65,
        shouldShowLapsingSelectionFlow: _v66,
        resetDeselectedLapsingVideoIds: _v67,
        toggleLapsingVideo: _v68,
        deselectAllLapsingVideos: _v69
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
          } = (0, _v136.useGetUserVideosInfinite)(() => _v0 && _v1 ? {
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
        ownerId: _v53,
        shouldAttemptLapsingSelectionFlow: _v60,
        storageLimitBytes: _v58?.storageLimitBytes ?? 0
      }),
      _v70 = _v59 || _v60 && _v64,
      _v71 = "lapsingSelection" === _v42 && _v66 && !_v70,
      _v72 = _v2?.space?.max || 0,
      _v73 = _v2?.space?.unit === "video_size" ? "video_size" : "video_count",
      _v74 = (0, _v118.getDaysBetween)(new Date(), _v4.renewalDate),
      _v75 = _v4.tier ? _v118.tiers[_v4.tier] ?? _v4.tier : (0, _v67.translate)({
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
      _v76 = (0, _v67.translate)({
        singular: "You still have {DAYS} day on the {PLAN} plan. Are you sure you want to cancel?",
        plural: "You still have {DAYS} days on the {PLAN} plan. Are you sure you want to cancel?",
        count: _v74,
        replacements: {
          DAYS: (0, _v118.formatNumber)(_v74),
          PLAN: _v75
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
      _v77 = "video_size" === _v73 ? (0, _v67.translate)({
        singular: "{QUOTA_MAX} of storage",
        replacements: {
          QUOTA_MAX: (0, _v59.formatBytes)(_v72, !1)
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
      }) : (0, _v67.translate)({
        singular: "{QUOTA_MAX} videos of storage",
        replacements: {
          QUOTA_MAX: (0, _v118.formatNumber)(_v72)
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
      _v78 = (0, _v67.translate)({
        singular: "{SEATS} seats",
        replacements: {
          SEATS: (0, _v118.formatNumber)(Math.max(_v11, 1))
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
      _v79 = (0, _v3.useMemo)(() => [_v77, _v78, ...(_v63.cancelFeatureList[_v73][_v4.tier ?? "starter"] ?? [])], [_v73, _v4.tier, _v77, _v78]),
      _v80 = _v4.tier,
      _v81 = _v4.billingPeriod === _v62.UserPlanType.Year ? "annual" : "monthly",
      _v82 = _v4.isImpactedByGermanConsumerLaw ? "german_two_click" : "standard",
      _v83 = (0, _v3.useCallback)(async () => {
        if (!_v14 || !_v53) return void Promise.resolve(_v21());
        try {
          let _v0 = await (0, _v146.requestMembershipInfo)(_v14, _v53);
          return _v22(_v0), _v0;
        } catch {
          Promise.resolve(_v21());
          return;
        }
      }, [_v21, _v53, _v22, _v14]),
      _v84 = (0, _v3.useRef)(!1),
      _v85 = (0, _v3.useRef)(!1);
    (0, _v3.useEffect)(() => {
      if (_v9 && !_v84.current) {
        _v84.current = !0, _v85.current = !1;
        return;
      }
      _v9 || !_v84.current || _v85.current || (_v84.current = !1, _v85.current = !0, (async () => {
        _v1({
          canShow: !0,
          type: "primary",
          text: _v63.T.SubscriptionCanceled
        });
        let _v0 = await _v83();
        if (!_v39 && _v17 && _v3 && _v0?.subscriptionId && _v0?.rejoinOfferEligible) {
          _v55(null), _v43("offer");
          return;
        }
        _v41(!1), _v8();
      })());
    }, [_v9, _v1, _v8, _v17, _v3, _v21, _v83, _v39]);
    let _v86 = (0, _v3.useRef)(!1);
    (0, _v3.useEffect)(() => {
      _v40 && !_v86.current && (_v20({
        action_type: _v61.BillingActionTypes.LAND,
        location: _v61.BillingActionLocations.CANCEL_SUBSCRIPTION_MODAL
      }), _v23({
        tier: _v80,
        periodicity: _v81,
        flowVariant: _v82
      }), _v86.current = !0), _v40 || (_v86.current = !1);
    }, [_v40, _v20, _v23, _v80, _v81, _v82]);
    let _v87 = (0, _v3.useRef)(!1);
    (0, _v3.useEffect)(() => {
      _v40 && "survey" === _v42 && !_v87.current && ((0, _v145.sendBpEventWithContexts)("vimeo.cancel_survey_impression", _v52, 1, {
        subscription_type: _v4.tier,
        is_trial: _v4.isFreeTrial,
        billing_period: _v4.billingPeriod
      }), _v87.current = !0);
    }, [_v40, _v42, _v52, _v4]), (0, _v3.useEffect)(() => {
      "lapsingSelection" !== _v42 || _v70 || _v66 || _v43("confirm");
    }, [_v42, _v70, _v66]);
    let _v88 = (0, _v3.useRef)(!1);
    (0, _v3.useEffect)(() => {
      _v40 && _v71 && !_v88.current && (_v28({
        tier: _v80,
        periodicity: _v81
      }), _v88.current = !0), _v71 || (_v88.current = !1);
    }, [_v40, _v71, _v80, _v81, _v28]);
    let _v89 = (0, _v3.useRef)(!1);
    (0, _v3.useEffect)(() => {
      _v40 && "lapsingWarning" === _v42 && !_v89.current && (_v31({
        tier: _v80,
        periodicity: _v81
      }), _v89.current = !0), "lapsingWarning" !== _v42 && (_v89.current = !1);
    }, [_v40, _v42, _v80, _v81, _v31]);
    let _v90 = _v0 => {
        _v20({
          action_type: _v61.BillingActionTypes.CLICK,
          location: _v0
        });
      },
      _v91 = ({
        trackPopupDismissed: _v0 = !0
      } = {}) => {
        _v0 && _v24({
          tier: _v80,
          periodicity: _v81
        }), _v41(!1), _v8();
      },
      _v92 = async () => {
        if (!_v56) {
          if (_v34({
            tier: _v80,
            periodicity: _v81
          }), _v55(null), !_v14 || !_v4.subscriptionId) return void _v1({
            canShow: !0,
            type: "negative",
            text: _v63.T.SomethingWentWrong
          });
          _v57(!0);
          try {
            await (0, _v146.requestAcceptRejoinOffer)(_v14, _v4.subscriptionId), await _v83(), _v1({
              canShow: !0,
              type: "primary",
              text: _v63.T.CancellationOfferAcceptedSuccess
            }), _v41(!1), _v8();
          } catch {
            let _v0 = await _v83();
            _v0?.hasAutorenew || _v0?.rejoinOfferEligible === !1 ? (_v1({
              canShow: !0,
              type: "negative",
              text: _v63.T.CancellationOfferAcceptedError
            }), _v41(!1), _v8()) : _v55(_v63.T.CancellationOfferAcceptedError);
          } finally {
            _v57(!1);
          }
        }
      },
      _v93 = () => {
        let _v0 = _v48.trim();
        if (_v18 ? "" !== _v0 && _v26({
          tier: _v80,
          periodicity: _v81,
          answer: _v0
        }) : _v46 && (_v25({
          tier: _v80,
          periodicity: _v81,
          answer: _v46
        }), (0, _v145.sendBpEventWithContexts)("vimeo.cancel_survey_submission", _v52, 1, {
          subscription_type: _v4.tier,
          is_trial: _v4.isFreeTrial,
          billing_period: _v4.billingPeriod,
          selected_feedback: _v46 ?? "",
          more_context: ""
        })), _v19) {
          _v67(), _v45("lapsingSelection");
          return;
        }
        _v45("confirm");
      },
      _v94 = () => {
        _v90("optout_modal_nevermind_button"), _v36({
          tier: _v80,
          periodicity: _v81,
          step: _v42
        }), _v91();
      },
      _v95 = () => {
        let _v0 = _v44.current.pop();
        _v0 ? (_v37({
          tier: _v80,
          periodicity: _v81,
          fromStep: _v42
        }), _v43(_v0)) : _v94();
      },
      _v96 = (0, _v118.formatDate)(_v4.renewalDate);
    return (0, _v1.jsxs)(_v84.Modal, {
      isOpen: _v40,
      onClose: () => {
        "offer" === _v42 && _v56 || ("offer" === _v42 && _v35({
          tier: _v80,
          periodicity: _v81
        }), _v90("optout_modal_close_button"), _v91());
      },
      size: ["full", "md"],
      scrollBehavior: "inside",
      closeOnOverlayClick: !1,
      closeOnEsc: !1,
      children: [(0, _v1.jsx)(_v85.ModalOverlay, {}), (0, _v1.jsx)(_v86.ModalContent, {
        containerProps: {
          padding: {
            base: "0 !important"
          }
        },
        maxW: {
          base: "100vw",
          md: "lapsingWarning" === _v42 ? "480px" : "560px"
        },
        width: {
          base: "100vw",
          md: "lapsingWarning" === _v42 ? "480px" : "560px"
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
        children: "survey" === _v42 ? _v18 ? (0, _v1.jsx)(_v128, {
          moreContext: _v48,
          onMoreContextChange: _v49,
          onContinue: _v93,
          onBookCallClicked: () => {
            _v27({
              tier: _v80,
              periodicity: _v81
            }), window.open("https://ms732111.typeform.com/to/USX08yFe", "_blank", "noopener,noreferrer"), _v41(!1), _v8();
          },
          onBack: _v95
        }) : (0, _v1.jsx)(_v135, {
          options: _v51,
          selectedOption: _v46,
          onSelectOption: _v47,
          onContinue: _v93,
          onKeepPlan: _v94,
          onBack: _v95
        }) : "lapsingSelection" === _v42 ? (0, _v1.jsx)(_v132, {
          videos: _v61,
          selectedStorageBytes: _v63,
          storageLimitBytes: _v62,
          isLoadingVideos: _v70,
          onToggleVideo: _v68,
          onDeselectAll: () => {
            _v30({
              tier: _v80,
              periodicity: _v81
            }), _v69();
          },
          onKeepPlan: _v94,
          onContinue: () => {
            if (!_v64) {
              if (_v29({
                tier: _v80,
                periodicity: _v81,
                isOverLimit: _v65
              }), _v65) return void _v45("lapsingWarning");
              _v45("confirm");
            }
          },
          onBack: _v95
        }) : "lapsingWarning" === _v42 ? (0, _v1.jsx)(_v129, {
          onBack: () => {
            _v32({
              tier: _v80,
              periodicity: _v81
            }), _v95();
          },
          onConfirmRandomFreeze: () => {
            _v33({
              tier: _v80,
              periodicity: _v81
            }), _v45("confirm");
          }
        }) : "confirm" === _v42 ? (0, _v1.jsx)(_v125, {
          confirmTitle: _v76,
          warningData: _v19 ? void 0 : _v58,
          featureLabels: _v79,
          cancelRequestPending: _v9,
          onKeepPlan: _v94,
          onConfirmCancel: () => {
            if (_v90("optout_modal_confirm_optout_button"), _v12) {
              _v41(!1), _v8(), _v12(_v0);
              return;
            }
            _v0();
          },
          onBack: _v95,
          isFinalStep: _v39
        }) : (0, _v1.jsx)(_v112, {
          planLabel: _v75,
          renewalPrice: _v5,
          renewalPeriodLabel: _v6,
          nextBillingDateLabel: _v96,
          isAcceptLoading: _v56,
          errorMessage: _v54,
          onAccept: _v92,
          onDismiss: () => {
            _v56 || (_v35({
              tier: _v80,
              periodicity: _v81
            }), _v91({
              trackPopupDismissed: !1
            }));
          }
        })
      })]
    });
  };
  var _v148 = _v0.i(0);
  let _v149 = _v0 => (0, _v1.jsx)(_v77.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M9.018 4.665a3 3 0 0 1 5.963 0A7 7 0 0 1 19 11v3.159c0 .752.337 1.518.84 2.3A1 1 0 0 1 19 18H5a1 1 0 0 1-.84-1.541c.503-.782.84-1.548.84-2.3V11a7 7 0 0 1 4.018-6.335ZM12 4a1 1 0 0 0-1 1v.341a1 1 0 0 1-.667.943A5.003 5.003 0 0 0 7 11v3.159A5.16 5.16 0 0 1 6.641 16H17.36A5.16 5.16 0 0 1 17 14.159V11a5.002 5.002 0 0 0-3.333-4.716A1 1 0 0 1 13 5.341V5a1 1 0 0 0-1-1Zm-1.119 15.527a1 1 0 0 0-1.775.92L10 20l-.894.448v.001l.002.003.002.004.006.011a1.225 1.225 0 0 0 .054.095 2.924 2.924 0 0 0 .643.719c.477.382 1.194.719 2.187.719.993 0 1.71-.337 2.187-.72a2.922 2.922 0 0 0 .643-.718 1.869 1.869 0 0 0 .054-.095l.006-.01.002-.005.001-.003s.001-.002-.893-.449l.894.447a1 1 0 0 0-1.775-.92.915.915 0 0 1-.181.192c-.148.119-.43.281-.938.281-.507 0-.79-.163-.938-.28a.915.915 0 0 1-.181-.193Z",
      fill: "currentColor"
    })
  });
  var _v150 = _v0.i(0);
  function _v151({
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
      } = (0, _v3.useContext)(_v91.ManageTeamAnalytics),
      {
        trackCancelSubscriptionPopupDisplayed: _v9,
        trackCancelSubscriptionPopupDismissed: _v10
      } = (0, _v20.useBillingTracking)(),
      [_v11, _v12] = (0, _v3.useState)(_v4),
      _v13 = _v2?.space?.unit === "video_size" ? "space" : "count",
      _v14 = _v2?.space?.max || 0,
      _v15 = new Date(_v3.renewalDate).toLocaleDateString(navigator.language || "en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      }),
      _v16 = new Date(_v3.renewalDate).getTime() - Date.now() > 0,
      _v17 = !_v3.isFreeTrial,
      _v18 = _v3.billingPeriod === _v62.UserPlanType.Year,
      _v19 = _v3.tier,
      _v20 = _v3.billingPeriod === _v62.UserPlanType.Year ? "annual" : "monthly",
      _v21 = () => {
        _v10({
          tier: _v19,
          periodicity: _v20
        }), _v12(!1), _v5();
      },
      _v22 = _v0 => {
        _v8({
          action_type: _v61.BillingActionTypes.CLICK,
          location: _v0
        });
      },
      _v23 = (0, _v3.useRef)(!1);
    (0, _v3.useEffect)(() => {
      if (_v6 && !_v23.current) {
        _v23.current = !0;
        return;
      }
      !_v6 && _v23.current && (_v23.current = !1, _v1({
        canShow: !0,
        type: "primary",
        text: _v63.T.SubscriptionCanceled
      }), _v12(!1), _v5(), _v7(!0));
    }, [_v6, _v7, _v12, _v1, _v5]);
    let _v24 = (0, _v3.useRef)(!1);
    return (0, _v3.useEffect)(() => {
      _v11 && !_v24.current && (_v8({
        action_type: _v61.BillingActionTypes.LAND,
        location: _v61.BillingActionLocations.CANCEL_SUBSCRIPTION_MODAL
      }), _v9({
        tier: _v19,
        periodicity: _v20
      }), _v24.current = !0);
    }, [_v11, _v8, _v9, _v19, _v20]), (0, _v1.jsx)(_v1.Fragment, {
      children: (0, _v1.jsxs)(_v84.Modal, {
        isOpen: _v11,
        onClose: () => {
          _v22("optout_modal_close_button"), _v21();
        },
        size: ["sm", "md"],
        children: [(0, _v1.jsx)(_v85.ModalOverlay, {}), (0, _v1.jsxs)(_v86.ModalContent, {
          children: [(0, _v1.jsx)(_v87.ModalHeader, {
            children: (0, _v1.jsx)(_v11.Header, {
              size: "md",
              children: _v63.T.CancelYourSubscription
            })
          }), (0, _v1.jsx)(_v90.ModalCloseButton, {
            onClick: () => {
              _v22("optout_modal_close_button"), _v21();
            }
          }), (0, _v1.jsxs)(_v89.ModalBody, {
            paddingTop: "0",
            children: [(0, _v1.jsx)(_v148.Paragraph, {
              fontSize: (0, _v14.rem)(14),
              color: "text-secondary",
              marginBottom: "3",
              children: (0, _v67.translate)({
                singular: "Cancellation will be effective at the end of your subscription on {RENEWAL_DATE}. You'll {LOSE_ACCESS} to the benefits included in your plan, such as:",
                replacements: {
                  RENEWAL_DATE: (0, _v118.formatDate)(_v15),
                  LOSE_ACCESS: (0, _v1.jsx)(_v28.Link, {
                    href: "https://help.vimeo.com/hc/en-us/articles/12425417275665-What-happens-when-I-lapse-to-the-Free-plan",
                    target: "_blank",
                    fontSize: (0, _v14.rem)(14),
                    variant: "inline-secondary",
                    color: "vimeoBlue.600",
                    onClick: () => {
                      _v22("optout_modal_lose_access_button");
                    },
                    children: (0, _v67.translate)({
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
            }), (0, _v1.jsxs)(_v108.Stack, {
              spacing: "300",
              children: [(0, _v1.jsxs)(_v9.Card, {
                backgroundColor: "red.50",
                flexDirection: "column",
                justifyContent: "center",
                padding: "1",
                gap: "2",
                children: [(0, _v1.jsxs)(_v1.Fragment, {
                  children: ["space" === _v13 && (0, _v1.jsxs)(_v10.Flex, {
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "1",
                    children: [(0, _v1.jsx)(_v150.CircleExclamation, {
                      color: "red.600"
                    }), (0, _v1.jsx)(_v37.Text, {
                      variant: "heading-xs",
                      color: "red.600",
                      children: (0, _v67.translate)({
                        singular: "{QUOTA_MAX} of storage",
                        replacements: {
                          QUOTA_MAX: (0, _v59.formatBytes)(_v14, !1)
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
                  }), "count" === _v13 && (0, _v1.jsxs)(_v10.Flex, {
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "1",
                    children: [(0, _v1.jsx)(_v150.CircleExclamation, {
                      color: "red.600"
                    }), (0, _v1.jsx)(_v37.Text, {
                      variant: "heading-xs",
                      color: "red.600",
                      children: (0, _v67.translate)({
                        singular: "{QUOTA_MAX} videos of storage",
                        replacements: {
                          QUOTA_MAX: _v14
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
                }), (0, _v1.jsxs)(_v10.Flex, {
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "1",
                  children: [(0, _v1.jsx)(_v150.CircleExclamation, {
                    color: "red.600"
                  }), (0, _v1.jsx)(_v37.Text, {
                    variant: "heading-xs",
                    color: "red.600",
                    children: `${(0, _v67.translate)({
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
                }), (0, _v1.jsxs)(_v10.Flex, {
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "1",
                  children: [(0, _v1.jsx)(_v150.CircleExclamation, {
                    color: "red.600"
                  }), (0, _v1.jsx)(_v37.Text, {
                    variant: "heading-xs",
                    color: "red.600",
                    children: `${(0, _v67.translate)({
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
              }), (0, _v1.jsxs)(_v108.Stack, {
                spacing: "2",
                children: [_v18 && _v16 && _v17 ? (0, _v1.jsxs)(_v1.Fragment, {
                  children: [(0, _v1.jsx)(_v148.Paragraph, {
                    size: "sm",
                    color: "text-secondary",
                    textAlign: "center",
                    children: (0, _v67.translate)({
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
                  }), (0, _v1.jsxs)(_v8.Button, {
                    onClick: () => {
                      _v22("optout_modal_remind_me_later_button"), _v1({
                        canShow: !0,
                        type: "primary",
                        text: (0, _v67.translate)({
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
                      }), _v21();
                    },
                    variant: "secondary",
                    children: [(0, _v1.jsx)(_v149, {}), (0, _v67.translate)({
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
                }) : (0, _v1.jsx)(_v8.Button, {
                  onClick: () => {
                    _v22("optout_modal_nevermind_button"), _v21();
                  },
                  variant: "secondary",
                  children: (0, _v67.translate)({
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
                }), (0, _v1.jsx)(_v8.Button, {
                  onClick: () => {
                    _v22("optout_modal_confirm_optout_button"), _v0();
                  },
                  variant: "destructive",
                  isLoading: _v6,
                  disabled: _v6,
                  children: _v63.T.CancelSubscription
                })]
              })]
            })]
          }), (0, _v1.jsx)(_v88.ModalFooter, {})]
        })]
      })
    });
  }
  var _v152 = _v0.i(0);
  let _v153 = ({
      onClick: _v0
    }) => (0, _v1.jsx)(_v152.CloseIconStyle, {
      icon: (0, _v1.jsx)(_v66.CloseX, {}),
      size: "sm",
      variant: "minimalTransparent",
      format: "basic",
      onClick: _v0
    }),
    _v154 = _v3.default.memo(({
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
        } = (0, _v3.useContext)(_v91.ManageTeamStateCtx),
        {
          trackBillingAction: _v41
        } = (0, _v3.useContext)(_v91.ManageTeamAnalytics),
        {
          trackCancelPlanButtonClicked: _v42,
          trackCancelSubscriptionPopupDisplayed: _v43,
          trackCancelSubscriptionPopupDismissed: _v44
        } = (0, _v20.useBillingTracking)(),
        _v45 = (0, _v3.useRef)(!1),
        _v46 = (0, _v3.useRef)(!1),
        _v47 = new Date(_v24).toLocaleDateString(navigator.language || "en-US", {
          year: "numeric",
          month: "long",
          day: "numeric"
        }),
        _v48 = new Date(_v24).toLocaleString(navigator.language || "en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: !0
        }),
        _v49 = _v27 && _v28 === _v62.UserEntity.Personal,
        _v50 = _v25 || void 0,
        _v51 = "year" === _v30 ? "annual" : "monthly";
      (0, _v3.useEffect)(() => {
        _v13((_v34 || 0) + (_v35 || 0) + (_v36 || 0) + _v61.OWNER);
      }, [_v34, _v35, _v36]), (0, _v3.useEffect)(() => {
        if (_v3 && !_v45.current) {
          _v45.current = !0;
          return;
        }
        !_v3 && _v45.current && (_v45.current = !1, _v11(!1));
      }, [_v11, _v3]), (0, _v3.useEffect)(() => {
        _v10 && !_v46.current && (_v46.current = !0, _v43({
          tier: _v50,
          periodicity: _v51
        })), _v10 || (_v46.current = !1);
      }, [_v10, _v43, _v50, _v51]);
      let _v52 = _v39.periodic && (_v39.periodic.used > _v61.MAX_VIDEOS ? _v63.T.DowngradeMessageMoreVideos(_v39.periodic.used, _v61.MAX_VIDEOS) : ""),
        _v53 = _v25 && _v62.LegacyTiers.includes(_v25) ? _v62.Tier.Basic : _v62.Tier.Free,
        _v54 = _v53 === _v62.Tier.Free ? "1 GB" : "5 GB",
        _v55 = _v39.lifetime?.used || _v39.periodic?.used || 0,
        _v56 = _v53 === _v62.Tier.Free && _v55 > 0 || _v53 === _v62.Tier.Basic && _v55 > 0,
        _v57 = _v39.space?.unit === "video_size",
        _v58 = _v57 ? _v63.T.DownGradeMessageMoreStorage(_v29, _v55, (0, _v101.default)(_v53), _v54, _v56) : "",
        _v59 = _v12 > _v61.OWNER && !_v57 ? _v63.T.DowngradeMessageMoreMembers(_v12) : "",
        _v60 = !!_v38,
        _v61 = (_v26 === _v62.AccountStatus.Active || _v23) && _v33;
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [_v61 && (0, _v1.jsx)(_v152.StyledModal, {
          active: _v10,
          content: (0, _v1.jsxs)(_v152.ModalContent, {
            children: [(0, _v1.jsxs)(_v106.Row, {
              justifyContent: "space-between",
              children: [(0, _v1.jsx)(_v106.Column, {
                justifyContent: "flex-start",
                children: (0, _v1.jsx)(_v11.Header, {
                  as: "h4",
                  size: "md",
                  marginBottom: "17",
                  children: _v63.T.ConfirmCancel
                })
              }), (0, _v1.jsx)(_v106.Column, {
                children: (0, _v1.jsx)(_v153, {
                  onClick: () => {
                    _v41({
                      action_type: _v61.BillingActionTypes.CLICK,
                      location: _v61.BillingActionLocations.OPTOUT_MODAL_CLOSE_BUTTON
                    }), _v44({
                      tier: _v50,
                      periodicity: _v51
                    }), _v11(!1);
                  }
                })
              })]
            }), (0, _v1.jsx)(_v106.Row, {
              children: (0, _v1.jsx)(_v106.Column, {
                children: (0, _v1.jsx)(_v152.StyledPrimaryParagraph, {
                  size: "2",
                  children: _v63.T.CancelSubscriptionModalCancelMessage(_v29, _v47, _v48, (0, _v101.default)(_v53))
                })
              })
            }), (0, _v1.jsx)(_v106.Row, {
              children: (0, _v1.jsx)(_v106.Column, {
                justifyContent: "flex-start",
                children: (0, _v1.jsxs)(_v152.StyledList, {
                  children: [_v25 && !_v62.LegacyTiers.includes(_v25) && (0, _v1.jsx)("li", {
                    children: (0, _v1.jsxs)(_v106.Column, {
                      justifyContent: "flex-start",
                      alignItems: "center",
                      children: [_v57 ? (0, _v1.jsx)(_v66.CloseX, {
                        height: (0, _v14.rem)(24),
                        width: (0, _v14.rem)(24)
                      }) : (0, _v1.jsx)(_v66.CloseX, {
                        height: (0, _v14.rem)(16),
                        width: (0, _v14.rem)(16),
                        color: "status-destructive-primary"
                      }), (0, _v1.jsx)(_v152.ListItemText, {
                        children: _v57 ? _v63.T.teamMemberSeats(_v12) : _v63.T.VideosPerSeatPerYear(_v40.periodic)
                      })]
                    })
                  }), (_v63.cancelFeatureList[_v39.space?.unit || "video_count"][_v25 || "starter"] ?? []).map((_v0, _v1) => (0, _v1.jsx)("li", {
                    children: (0, _v1.jsxs)(_v106.Column, {
                      justifyContent: "flex-start",
                      alignItems: "center",
                      children: [_v57 ? (0, _v1.jsx)(_v66.CloseX, {
                        height: (0, _v14.rem)(24),
                        width: (0, _v14.rem)(24)
                      }) : (0, _v1.jsx)(_v66.CloseX, {
                        height: (0, _v14.rem)(16),
                        width: (0, _v14.rem)(16),
                        color: "status-destructive-primary"
                      }), (0, _v1.jsx)(_v152.ListItemText, {
                        children: _v0
                      })]
                    })
                  }, _v1))]
                })
              })
            }), (0, _v1.jsx)(_v152.StyledSecondaryParagraph, {
              size: "3",
              children: _v52
            }), (0, _v1.jsx)(_v152.StyledPrimaryParagraph, {
              size: "2",
              children: _v58
            }), (0, _v1.jsx)(_v152.StyledSecondaryParagraph, {
              size: "3",
              style: {
                marginTop: _v52 || _v58 ? (0, _v14.rem)(20) : 0
              },
              children: _v59
            }), (0, _v1.jsx)(_v152.StyledCancelButton, {
              fluid: !0,
              color: (0, _v102.red)(600),
              loading: _v3,
              onClick: () => {
                _v2();
              },
              children: _v49 ? _v63.T.CancelPayment : _v63.T.TurnOffAutoRenew
            }), (0, _v1.jsx)(_v152.StyledSettingsButton, {
              variant: "minimalTransparent",
              fluid: !0,
              disabled: _v3,
              onClick: () => {
                _v41({
                  action_type: _v61.BillingActionTypes.CLICK,
                  location: _v61.BillingActionLocations.OPTOUT_MODAL_CANCEL_OPTOUT_BUTTON
                }), _v44({
                  tier: _v50,
                  periodicity: _v51
                }), _v11(!1);
              },
              children: _v63.T.ReturnToSettings
            })]
          }),
          onOpen: () => _v11(!1),
          children: (0, _v1.jsx)(_v152.StyledCancelSubscriptionButton, {
            variant: "hyperminimal",
            onClick: () => {
              _v0?.(), _v42({
                tier: _v50,
                periodicity: _v51
              }), _v41({
                action_type: _v61.BillingActionTypes.CLICK,
                location: _v49 ? _v61.BillingActionLocations.CANCEL_NEXT_SCHEDULED_PAYMENT_BUTTON : _v61.BillingActionLocations.CANCEL_SUBSCRIPTION_BUTTON
              }), (() => {
                if (!_v60) return _v41({
                  action_type: _v61.BillingActionTypes.CLICK,
                  location: _v61.BillingActionLocations.CANCEL_SUBSCRIPTION_OLD_MODAL
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
            children: _v23 ? _v63.T.CancelTrial : _v49 ? _v63.T.CancelNextScheduledPayment : _v63.T.CancelSubscription
          })
        }), _v16 && (0, _v1.jsx)(_v147, {
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
        }), _v14 && (0, _v1.jsx)(_v151, {
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
  var _v155 = _v0.i(0);
  let _v156 = ({
    showPostCancelSurvey: _v0,
    setShowPostCancelSurvey: _v1,
    membership: _v2,
    teamUser: _v3
  }) => {
    let {
        trackCancellationSurveyAnswered: _v4
      } = (0, _v20.useBillingTracking)(),
      [_v5, _v6] = (0, _v3.useState)(null),
      [_v7, _v8] = (0, _v3.useState)(""),
      _v9 = (0, _v3.useMemo)(() => [{
        value: "I prefer to manually renew",
        label: (0, _v67.translate)({
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
        label: (0, _v67.translate)({
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
        label: (0, _v67.translate)({
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
        label: (0, _v67.translate)({
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
        label: (0, _v67.translate)({
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
        label: (0, _v67.translate)({
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
        label: (0, _v67.translate)({
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
        label: (0, _v67.translate)({
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
      _v10 = (0, _v3.useMemo)(() => _v144(_v3), [_v3]),
      _v11 = _v2.tier,
      _v12 = _v2.billingPeriod === _v62.UserPlanType.Year ? "annual" : "monthly",
      _v13 = () => {
        _v1(!1);
      },
      _v14 = (0, _v3.useRef)(!1);
    return (0, _v3.useEffect)(() => {
      _v0 && !_v14.current && ((0, _v145.sendBpEventWithContexts)("vimeo.cancel_survey_impression", _v10, 1, {
        subscription_type: _v2.tier,
        is_trial: _v2.isFreeTrial,
        billing_period: _v2.billingPeriod
      }), _v14.current = !0);
    }, [_v0, _v14, _v2, _v10]), (0, _v1.jsxs)(_v84.Modal, {
      isOpen: _v0,
      onClose: _v13,
      size: ["sm", "md"],
      children: [(0, _v1.jsx)(_v85.ModalOverlay, {}), (0, _v1.jsxs)(_v86.ModalContent, {
        children: [(0, _v1.jsxs)(_v87.ModalHeader, {
          children: [(0, _v1.jsx)(_v11.Header, {
            size: "md",
            children: (0, _v67.translate)({
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
          }), (0, _v1.jsx)(_v11.Header, {
            size: "xs",
            children: (0, _v67.translate)({
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
        }), (0, _v1.jsx)(_v90.ModalCloseButton, {
          onClick: _v13
        }), (0, _v1.jsxs)(_v89.ModalBody, {
          children: [(0, _v1.jsx)(_v134.RadioGroup, {
            children: (0, _v1.jsxs)(_v108.Stack, {
              spacing: "2",
              children: [_v9.map(_v0 => (0, _v1.jsx)(_v34.Radio, {
                value: _v0.value,
                onChange: () => _v6(_v0.value),
                children: _v0.label
              }, _v0.value)), (0, _v1.jsx)(_v34.Radio, {
                value: "other",
                children: (0, _v67.translate)({
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
          }), (0, _v1.jsx)(_v155.FormLabel, {
            marginTop: "4",
            fontSize: (0, _v14.rem)(14),
            children: (0, _v67.translate)({
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
          }), (0, _v1.jsx)(_v126.Textarea, {
            onChange: _v0 => _v8(_v0.target.value),
            value: _v7
          })]
        }), (0, _v1.jsx)(_v88.ModalFooter, {
          children: (0, _v1.jsx)(_v8.Button, {
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
              (0, _v145.sendBpEventWithContexts)("vimeo.cancel_survey_submission", _v10, 1, _v1), _v1(!1);
            },
            variant: "primary",
            isDisabled: !_v5 && "" === _v7.trim(),
            children: "Submit"
          })
        })]
      })]
    });
  };
  var _v157 = _v0.i(0);
  let _v158 = _v0 => (0, _v1.jsx)(_v77.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v1.jsx)("path", {
        d: "M8 16.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM12 2C8 2 4 3.37 4 6v12c0 2.63 4 4 8 4s8-1.37 8-4V6c0-2.63-4-4-8-4Zm6 16c0 .71-2.28 2-6 2s-6-1.29-6-2v-3.27A13.16 13.16 0 0 0 12 16a13.16 13.16 0 0 0 6-1.27V18Zm0-6c0 .71-2.28 2-6 2s-6-1.29-6-2V8.73A13.16 13.16 0 0 0 12 10a13.16 13.16 0 0 0 6-1.27V12Zm-6-4C8.28 8 6 6.71 6 6s2.28-2 6-2 6 1.29 6 2-2.28 2-6 2Zm-4 2.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z",
        fill: "currentColor"
      })
    }),
    _v159 = _v0 => (0, _v1.jsx)(_v77.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12.015 5a2.265 2.265 0 1 0 0 4.53 2.265 2.265 0 0 0 0-4.53ZM7.75 7.265a4.265 4.265 0 1 1 8.53 0 4.265 4.265 0 0 1-8.53 0ZM5.866 14.07c1.549-.98 3.533-1.59 5.337-1.59h.035l.034.003c.173.012.655.006 1.059.002.184-.003.351-.005.466-.005 1.804 0 3.788.61 5.337 1.59 1.513.957 2.866 2.446 2.866 4.309 0 1.51-1.282 2.632-2.734 2.632H5.734C4.282 21.01 3 19.887 3 18.377c0-1.862 1.353-3.35 2.866-4.308Zm1.07 1.69C5.646 16.574 5 17.535 5 18.378c0 .293.271.632.734.632h12.532c.463 0 .734-.34.734-.633 0-.842-.647-1.803-1.935-2.618-1.252-.792-2.869-1.28-4.268-1.28l-.286.003c-.397.005-1.049.012-1.336-.002-1.392.006-2.996.492-4.24 1.279Z",
        fill: "currentColor"
      })
    }),
    _v160 = _v0 => (0, _v1.jsx)(_v77.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v1.jsxs)("g", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "currentColor",
        children: [(0, _v1.jsx)("path", {
          d: "M17.666 7.335c-3.113-3.113-8.219-3.113-11.331 0-3.113 3.112-3.113 8.218 0 11.33A1 1 0 1 1 4.92 20.08c-3.893-3.894-3.893-10.266 0-14.16 3.894-3.893 10.266-3.893 14.16 0 3.893 3.894 3.893 10.266 0 14.16a1 1 0 0 1-1.414-1.414c3.112-3.113 3.112-8.219 0-11.331Z"
        }), (0, _v1.jsx)("path", {
          d: "M16.207 9.793a1 1 0 0 1 0 1.414l-3.5 3.5a1 1 0 0 1-1.414-1.414l3.5-3.5a1 1 0 0 1 1.414 0Z"
        })]
      })
    });
  var _v161 = _v0.i(0);
  async function _v162({
    baseUrl: _v0,
    select: _v1,
    query: _v2,
    ..._v3
  }) {
    return (0, _v93.measureLatency)("getMeSubscriptionPlansUsageCheck", "GET", async () => {
      let _v0 = await fetch(`${_v0}/me/subscription_plans/usage_check?${(0, _v94.searchQueryString)(_v2)}&fields=${_v1.map(_v94.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "GET"
      });
      if (!_v0.ok) throw new _v94.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v94.deepCamelCase)(_v1);
    });
  }
  function _v163(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v50.useGctlConfig)();
    return (0, _v47.default)(_v2 ? `/me/subscription_plans/usage_check${(0, _v49.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v162({
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
  "true" === _v45.default.env.STORYBOOK && (0, _v49.assignMswData)(_v163, {
    endpoint: "/me/subscription_plans/usage_check",
    method: "GET"
  }), "true" === _v45.default.env.STORYBOOK && (0, _v49.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v48.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v50.useGctlConfig)(),
      [_v5, _v6] = (0, _v49.useInternalState)();
    return [(0, _v3.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/me/subscription_plans/usage_check${(0, _v49.serializeQuery)(_v0)}`, _v162({
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
  var _v164 = _v0.i(0),
    _v165 = _v0.i(0);
  let _v166 = {
      professional: "creator",
      studio: "professional",
      production: "studio"
    },
    _v167 = ({
      scheduledOrder: _v0,
      membership: _v1,
      onSuccess: _v2,
      onError: _v3
    }) => {
      let _v4 = function (_v0, _v1) {
          let _v2 = _v0?.productName?.toLowerCase().replace("vimeo ", "") ?? "";
          if (_v166[_v2]) return _v166[_v2];
          let _v3 = _v1.tier;
          return _v3 && _v166[_v3] ? _v166[_v3] : null;
        }(_v0, _v1),
        {
          isOpen: _v5,
          onOpen: _v6,
          onClose: _v7
        } = (0, _v39.useDisclosure)(),
        {
          trackBillingPageDowngradeClicked: _v8
        } = (0, _v20.useBillingTracking)(),
        _v9 = (0, _v164.useGetSubscriptionPlansData)(),
        {
          data: _v10
        } = _v163(() => _v4 ? {
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
        _v15 = _v14?.quotaPeriod === "year" ? (0, _v67.translate)({
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
        }) : (0, _v67.translate)({
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
      return (0, _v1.jsxs)(_v10.Flex, {
        p: 6,
        border: "1px solid",
        borderColor: "background",
        borderRadius: "md",
        bg: "fill-surface",
        width: {
          base: "100%",
          lg: (0, _v14.rem)(300)
        },
        flexShrink: 0,
        alignSelf: "stretch",
        flexDirection: "column",
        children: [(0, _v1.jsx)(_v11.Header, {
          as: "h2",
          size: "md",
          children: _v11.name
        }), (0, _v1.jsxs)(_v7.Box, {
          mt: 4,
          children: [(0, _v1.jsx)(_v37.Text, {
            variant: "heading-lg",
            as: "span",
            children: _v11.priceFormatted?.annualMonthly
          }), (0, _v1.jsxs)(_v37.Text, {
            variant: "body-sm",
            color: "text-secondary",
            mt: 1,
            children: [(0, _v67.translate)({
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
            }), " ", (0, _v67.translate)({
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
        }), (0, _v1.jsxs)(_v13.VStack, {
          align: "flex-start",
          spacing: 3,
          mt: 5,
          flex: 1,
          children: [(0, _v1.jsxs)(_v7.Box, {
            display: "flex",
            alignItems: "center",
            gap: 2,
            children: [(_v12 ?? 0) <= 1 ? (0, _v1.jsx)(_v159, {}) : (0, _v1.jsx)(_v161.Users, {}), (0, _v1.jsx)(_v37.Text, {
              variant: "body-sm",
              children: (0, _v67.translate)({
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
          }), _v13 && (0, _v1.jsxs)(_v7.Box, {
            display: "flex",
            alignItems: "center",
            gap: 2,
            children: [(0, _v1.jsx)(_v158, {}), (0, _v1.jsx)(_v37.Text, {
              variant: "body-sm",
              children: (0, _v67.translate)({
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
          }), _v14?.periodicQuota && (0, _v1.jsxs)(_v7.Box, {
            display: "flex",
            alignItems: "center",
            gap: 2,
            children: [(0, _v1.jsx)(_v160, {}), (0, _v1.jsx)(_v37.Text, {
              variant: "body-sm",
              children: _v15
            })]
          })]
        }), (0, _v1.jsx)(_v8.Button, {
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
              newPeriodicity: _v1.billingPeriod === _v62.UserPlanType.Year ? "annual" : "monthly"
            }), _v6();
          },
          children: (0, _v67.translate)({
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
        }), (0, _v1.jsx)(_v165.DowngradeFlowModal, {
          isOpen: _v5,
          onClose: _v7,
          onSuccess: _v2,
          onError: _v3,
          membership: _v1,
          currentPlanName: _v16,
          currentTier: _v0?.productName?.toLowerCase().replace("vimeo ", "") || _v1.tier || "",
          targetTier: _v4 ?? "",
          targetPlanName: _v11.name,
          targetBillingPlanId: _v11.id?.annual ?? "",
          totalSeats: _v1.seatCount
        })]
      });
    },
    _v168 = {
      professional: "creator",
      advanced: "professional"
    };
  var _v169 = _v0.i(0),
    _v170 = _v0.i(0),
    _v171 = _v0.i(0),
    _v172 = _v0.i(0);
  let _v173 = "/terms",
    _v174 = "/privacy",
    _v175 = ({
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
      let _v10,
        _v11,
        _v12,
        {
          areBusinessPlansEnforced: _v13,
          isWhitelistedForIndPlans: _v14
        } = (0, _v169.useB2BRepackagingContext)(),
        _v15 = _v6?.productName?.toLowerCase().replace("vimeo ", ""),
        _v16 = function ({
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
          let _v4 = _v0 ? _v168[_v0] : void 0;
          return _v4 ? {
            kind: "downgrade",
            targetTier: _v4
          } : {
            kind: "none"
          };
        }({
          tier: _v15,
          areBusinessPlansEnforced: _v13,
          isWhitelistedForIndPlans: _v14
        }),
        _v17 = "discount_match_lower" === _v16.kind,
        _v18 = "downgrade" === _v16.kind ? _v16.targetTier ?? null : null,
        _v19 = "creator" === _v18 || "professional" === _v18 || "creator" === _v15 || "professional" === _v15,
        _v20 = _v13 && !_v14 && !!_v8 && !_v19,
        _v21 = (0, _v3.useMemo)(() => {
          let _v0 = ["creator", "professional", "studio"];
          return _v15 && !_v0.includes(_v15) ? [..._v0, _v15] : _v0;
        }, [_v15]),
        _v22 = (0, _v164.useGetSubscriptionPlansData)(_v21, void 0, !1),
        {
          baseUrl: _v23,
          jwt: _v24,
          xVimeoPage: _v25,
          locale: _v26
        } = (0, _v50.useGctlConfig)(),
        [_v27, _v28] = (0, _v3.useState)(!1),
        {
          trackCancelSubscriptionDowngradeModalDisplayed: _v29,
          trackCancelSubscriptionDowngradeClicked: _v30,
          trackCancelSubscriptionDowngradeSkipped: _v31
        } = (0, _v20.useBillingTracking)(),
        {
          trackUserScheduledDowngrade: _v32,
          trackDowngradeFailed: _v33
        } = (0, _v172.usePricingTracking)(),
        {
          trackIndividualEligibilityCtaClicked: _v34
        } = (0, _v21.useIndividualEligibilityTracking)(),
        _v35 = _v7.billingPeriod === _v62.UserPlanType.Year ? "annual" : "monthly",
        _v36 = _v7.subscriptionId,
        _v37 = (0, _v3.useMemo)(() => _v22 && _v18 ? _v22.find(_v0 => _v0.tier === _v18) ?? null : null, [_v22, _v18]),
        _v38 = (0, _v3.useMemo)(() => _v22?.find(_v0 => "studio" === _v0.tier) ?? null, [_v22]),
        _v39 = (0, _v3.useMemo)(() => _v22?.find(_v0 => "professional" === _v0.tier) ?? null, [_v22]),
        _v40 = _v17 ? "discount" : "downgrade",
        _v41 = _v17 ? "studio" : _v18 ?? null,
        _v42 = _v15 ? _v22?.find(_v0 => _v0.tier === _v15) ?? null : null,
        _v43 = (_v11 = (_v10 = _v7.billingPeriod === _v62.UserPlanType.Year) ? _v37?.price?.annualMonthly : _v37?.price?.monthly, (_v12 = _v10 ? _v42?.price?.annualMonthly : _v42?.price?.monthly) && _v11 && _v12 > _v11 ? Math.floor((_v12 - _v11) / _v12 * 100) : null),
        _v44 = _v7.billingPeriod === _v62.UserPlanType.Year ? _v37?.id?.annual ?? "" : _v37?.id?.monthly ?? "",
        _v45 = _v7.billingPeriod === _v62.UserPlanType.Year ? _v38?.id?.annual ?? "" : _v38?.id?.monthly ?? "",
        _v46 = (0, _v3.useCallback)(async () => {
          if (_v37) {
            if (_v30({
              currentPlan: _v7.tier ?? null,
              newPlan: _v18 ?? "",
              newPeriodicity: _v35,
              offerKind: "downgrade",
              discountPercent: _v43
            }), !_v7.hasAutorenew) {
              _v5?.((0, _v67.translate)({
                singular: "To change your plan, please turn auto-renew back on first.",
                dictionary: {
                  es: {
                    singular: "Para cambiar tu plan, primero vuelve a activar la renovación automática."
                  },
                  "de-DE": {
                    singular: "Um Ihren Plan zu ändern, schalten Sie bitte zuerst die automatische Verlängerung wieder ein."
                  },
                  "fr-FR": {
                    singular: "Pour modifier votre forfait, veuillez d'abord réactiver le renouvellement automatique."
                  },
                  "ja-JP": {
                    singular: "プランを変更するには、まず自動更新を再度オンにしてください。"
                  },
                  "ko-KR": {
                    singular: "요금제를 변경하려면 먼저 자동 갱신을 다시 켜 주세요."
                  },
                  "pt-BR": {
                    singular: "Para alterar seu plano, por favor reative a renovação automática primeiro."
                  },
                  "zh-CN": {
                    singular: "要更改您的订阅计划，请先重新开启自动续订。"
                  }
                }
              })), _v1();
              return;
            }
            _v28(!0);
            try {
              await (0, _v171.putMeSubscriptionScheduledOrder)({
                where: {
                  subscriptionId: _v36
                },
                variables: {
                  billingPlanId: _v44,
                  acceptedFromCancellationFlow: !0
                },
                baseUrl: _v23,
                headers: {
                  "Content-Type": "application/json",
                  Authorization: _v24 ? `jwt ${_v24}` : "",
                  "Vimeo-Page": `${_v25}`,
                  "Accept-Language": _v26 ?? "en"
                }
              }), _v32({
                currentPlan: _v7.tier ?? "",
                newPlan: _v18 ?? "",
                newPeriodicity: _v35
              }), _v4?.(), _v1();
            } catch (_v0) {
              _v33({
                currentPlan: _v7.tier ?? "",
                targetPlan: _v18 ?? "",
                targetPeriodicity: _v35,
                errorMessage: _v0 instanceof Error ? _v0.message : String(_v0)
              }), _v5?.(), _v1();
            } finally {
              _v28(!1);
            }
          }
        }, [_v36, _v37, _v44, _v23, _v24, _v25, _v26, _v1, _v30, _v33, _v32, _v7.tier, _v7.hasAutorenew, _v18, _v35, _v43, _v4, _v5]),
        _v47 = _v7.billingPeriod === _v62.UserPlanType.Year ? _v38?.price?.annualMonthly : _v38?.price?.monthly,
        _v48 = _v7.billingPeriod === _v62.UserPlanType.Year ? _v39?.price?.annualMonthly : _v39?.price?.monthly,
        _v49 = _v47 && _v48 && _v47 > _v48 ? Math.floor((_v47 - _v48) / _v47 * 100) : null,
        _v50 = _v17 ? _v49 : _v43,
        _v51 = (0, _v3.useCallback)(async () => {
          if (_v45 && null !== _v49) {
            if (_v30({
              currentPlan: _v7.tier ?? null,
              newPlan: "studio",
              newPeriodicity: _v35,
              offerKind: "discount",
              discountPercent: _v49
            }), !_v7.hasAutorenew) {
              _v5?.((0, _v67.translate)({
                singular: "To change your plan, please turn auto-renew back on first.",
                dictionary: {
                  es: {
                    singular: "Para cambiar tu plan, primero vuelve a activar la renovación automática."
                  },
                  "de-DE": {
                    singular: "Um Ihren Plan zu ändern, schalten Sie bitte zuerst die automatische Verlängerung wieder ein."
                  },
                  "fr-FR": {
                    singular: "Pour modifier votre forfait, veuillez d'abord réactiver le renouvellement automatique."
                  },
                  "ja-JP": {
                    singular: "プランを変更するには、まず自動更新を再度オンにしてください。"
                  },
                  "ko-KR": {
                    singular: "요금제를 변경하려면 먼저 자동 갱신을 다시 켜 주세요."
                  },
                  "pt-BR": {
                    singular: "Para alterar seu plano, por favor reative a renovação automática primeiro."
                  },
                  "zh-CN": {
                    singular: "要更改您的订阅计划，请先重新开启自动续订。"
                  }
                }
              })), _v1();
              return;
            }
            _v28(!0);
            try {
              await (0, _v171.putMeSubscriptionScheduledOrder)({
                where: {
                  subscriptionId: _v36
                },
                variables: {
                  billingPlanId: _v45,
                  discountPercent: _v49,
                  acceptedFromCancellationFlow: !0
                },
                baseUrl: _v23,
                headers: {
                  "Content-Type": "application/json",
                  Authorization: _v24 ? `jwt ${_v24}` : "",
                  "Vimeo-Page": `${_v25}`,
                  "Accept-Language": _v26 ?? "en"
                }
              }), _v32({
                currentPlan: _v7.tier ?? "",
                newPlan: "studio",
                newPeriodicity: _v35
              }), _v4?.(), _v1();
            } catch (_v0) {
              _v33({
                currentPlan: _v7.tier ?? "",
                targetPlan: "studio",
                targetPeriodicity: _v35,
                errorMessage: _v0 instanceof Error ? _v0.message : String(_v0)
              }), _v5?.(), _v1();
            } finally {
              _v28(!1);
            }
          }
        }, [_v45, _v49, _v36, _v23, _v24, _v25, _v26, _v1, _v30, _v33, _v32, _v7.tier, _v7.hasAutorenew, _v35, _v4, _v5]),
        _v52 = (0, _v3.useRef)(!1),
        _v53 = (0, _v3.useRef)(!1);
      (0, _v3.useEffect)(() => {
        if (!_v0) {
          _v52.current = !1, _v53.current = !1;
          return;
        }
        _v17 || _v37 || _v18 || _v53.current || (_v53.current = !0, _v2()), (_v17 ? null == _v38 || null == _v39 : null == _v37) || _v52.current || (_v29({
          tier: _v7.tier ?? null,
          periodicity: _v35,
          offerKind: _v40,
          targetTier: _v41,
          discountPercent: _v50
        }), _v52.current = !0);
      }, [_v0, _v17, _v37, _v38, _v39, _v18, _v2]);
      let _v54 = _v7.renewalDate ? new Date(_v7.renewalDate) : null,
        _v55 = _v54 && !Number.isNaN(_v54.getTime()) ? new Intl.DateTimeFormat(_v26 ?? "en", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric"
        }).format(_v54) : "",
        _v56 = _v38?.priceFormatted?.annual,
        _v57 = _v38?.priceFormatted?.annualMonthly,
        _v58 = _v38?.price?.annual,
        _v59 = _v38?.currency?.currencyCode,
        _v60 = null != _v58 && null !== _v49 ? _v58 * (1 - _v49 / 100) : null,
        _v61 = null !== _v60 && _v59 ? new Intl.NumberFormat(_v26 ?? "en", {
          style: "currency",
          currency: _v59,
          minimumFractionDigits: 0,
          maximumFractionDigits: 2
        }).format(_v60) : null,
        _v62 = _v37?.priceFormatted?.annual,
        _v63 = () => {
          _v34({
            location: "cancellation_offer",
            offerKind: _v17 ? "discount" : "downgrade"
          }), _v1(), _v8?.();
        },
        _v64 = () => {
          _v9 || (_v31({
            tier: _v7.tier ?? null,
            periodicity: _v35,
            offerKind: _v40,
            targetTier: _v41
          }), _v2());
        },
        _v65 = (0, _v3.useRef)(!1);
      (0, _v3.useEffect)(() => {
        if (_v9 && !_v65.current) {
          _v65.current = !0;
          return;
        }
        !_v9 && _v65.current && (_v65.current = !1, _v1());
      }, [_v9, _v1]);
      let _v66 = _v0 => _v0 => (0, _v1.jsx)(_v28.Link, {
          href: _v0,
          textDecoration: "underline",
          color: "text-primary",
          target: "_blank",
          rel: "noopener noreferrer",
          children: _v0
        }),
        _v67 = _v0 => (0, _v1.jsx)(_v37.Text, {
          variant: "body-xs",
          color: "text-secondary",
          mt: 5,
          children: "discount" === _v0 ? (0, _v67.translate)({
            singular: "By accepting this discount, you agree: You’ll get a promotional discount on an automatically renewing subscription valid for one year, for a total price of {DISCOUNTED_AMOUNT}. If you don’t cancel before {RENEWAL_DATE} your subscription will renew at full price and you’ll be charged {ANNUAL_AMOUNT} (plus tax) on that date and every year thereafter until you cancel in your Billing Settings. Pricing may change. Your content may be deleted upon cancellation. By completing this purchase, you agree to our {TOS_URL}Terms of Service{/TOS_URL}, including the arbitration agreement and class action waiver, and acknowledge our {PP_URL}Privacy Policy{/PP_URL}.",
            replacements: {
              DISCOUNTED_AMOUNT: _v61 ?? "",
              RENEWAL_DATE: _v55,
              ANNUAL_AMOUNT: _v56 ?? "",
              TOS_URL: _v66(_v173),
              PP_URL: _v66(_v174)
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
          }) : (0, _v67.translate)({
            singular: "By accepting this downgrade, you agree: You’ll get a promotional discount on an automatically renewing subscription. If you don’t cancel before {RENEWAL_DATE} your subscription will renew at full price and you’ll be charged {FULL_PRICE} (plus tax) on that date and every year thereafter until you cancel in your Billing Settings. Pricing may change. Your content may be deleted upon cancellation. By completing this purchase, you agree to our {TOS_URL}Terms of Service{/TOS_URL}, including the arbitration agreement and class action waiver, and acknowledge our {PP_URL}Privacy Policy{/PP_URL}.",
            replacements: {
              RENEWAL_DATE: _v55,
              FULL_PRICE: _v62 ?? "",
              TOS_URL: _v66(_v173),
              PP_URL: _v66(_v174)
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
      if (_v17) {
        let _v0 = _v7.billingPeriod === _v62.UserPlanType.Year ? _v38?.priceFormatted?.annualMonthly : _v38?.priceFormatted?.monthly,
          _v1 = _v38?.currency?.currencyCode,
          _v2 = _v47 && null !== _v49 ? _v47 * (1 - _v49 / 100) : null,
          _v3 = null !== _v2 && _v1 ? new Intl.NumberFormat(_v26 ?? "en", {
            style: "currency",
            currency: _v1,
            minimumFractionDigits: 0,
            maximumFractionDigits: 2
          }).format(_v2) : null,
          _v4 = _v38?.metadata?.entitlements?.params,
          _v5 = _v4?.teamSeats ?? null,
          _v6 = _v4?.seats?.admin ?? null,
          _v7 = _v4?.restrictedVideoStorageLimit ?? null,
          _v8 = _v4?.bandwidth?.periodicQuota ?? null,
          _v9 = _v4?.bandwidth?.quotaPeriod === "year";
        return (0, _v1.jsxs)(_v84.Modal, {
          isOpen: _v0,
          onClose: _v1,
          size: "sm",
          scrollBehavior: "outside",
          closeOnOverlayClick: !1,
          closeOnEsc: !1,
          children: [(0, _v1.jsx)(_v85.ModalOverlay, {}), (0, _v1.jsxs)(_v86.ModalContent, {
            borderRadius: "16px",
            maxW: "520px",
            p: 6,
            children: [(0, _v1.jsx)(_v115.IconButton, {
              "aria-label": "Go back",
              icon: (0, _v1.jsx)(_v170.ChevronLeft, {}),
              variant: "minimalTransparent",
              size: "sm",
              position: "absolute",
              top: "20px",
              left: "20px",
              onClick: _v3
            }), (0, _v1.jsxs)(_v89.ModalBody, {
              p: 0,
              children: [(0, _v1.jsx)(_v11.Header, {
                size: "md",
                paddingLeft: "48px",
                children: (0, _v67.translate)({
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
              }), (0, _v1.jsxs)(_v10.Flex, {
                mt: 4,
                alignItems: "center",
                gap: 2,
                children: [_v3 && (0, _v1.jsx)(_v37.Text, {
                  variant: "heading-xl",
                  as: "span",
                  children: _v3
                }), _v0 && (0, _v1.jsx)(_v37.Text, {
                  variant: "body-lg",
                  color: "text-tertiary",
                  as: "span",
                  textDecoration: "line-through",
                  children: _v0
                }), null !== _v49 && (0, _v1.jsx)(_v27.Badge, {
                  size: "sm",
                  backgroundColor: "status-positive-secondary",
                  textColor: "status-positive-primary",
                  border: "none",
                  borderRadius: "999px",
                  px: 3,
                  py: 3,
                  children: (0, _v67.translate)({
                    singular: "Save {PERCENT}%",
                    replacements: {
                      PERCENT: _v49
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
              }), (0, _v1.jsxs)(_v7.Box, {
                mt: 1,
                children: [(0, _v1.jsx)(_v37.Text, {
                  variant: "body-sm",
                  color: "text-secondary",
                  children: (0, _v67.translate)({
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
                }), _v57 && (0, _v1.jsx)(_v37.Text, {
                  variant: "body-sm",
                  color: "text-secondary",
                  children: (0, _v67.translate)({
                    singular: "Renews at {AMOUNT}/month, billed annually",
                    replacements: {
                      AMOUNT: _v57
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
                }), (0, _v1.jsx)(_v37.Text, {
                  variant: "body-sm",
                  color: "text-secondary",
                  children: (0, _v67.translate)({
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
              }), (0, _v1.jsxs)(_v13.VStack, {
                align: "flex-start",
                spacing: 3,
                mt: 5,
                children: [null !== _v5 && (0, _v1.jsxs)(_v7.Box, {
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  children: [_v5 <= 1 ? (0, _v1.jsx)(_v159, {}) : (0, _v1.jsx)(_v161.Users, {}), (0, _v1.jsx)(_v37.Text, {
                    variant: "body-sm",
                    children: _v6 ? (0, _v67.translate)({
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
                    }) : (0, _v67.translate)({
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
                }), _v7 && (0, _v1.jsxs)(_v7.Box, {
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  children: [(0, _v1.jsx)(_v158, {}), (0, _v1.jsx)(_v37.Text, {
                    variant: "body-sm",
                    children: (0, _v67.translate)({
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
                }), _v8 && (0, _v1.jsxs)(_v7.Box, {
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  children: [(0, _v1.jsx)(_v158, {}), (0, _v1.jsx)(_v37.Text, {
                    variant: "body-sm",
                    children: _v9 ? (0, _v67.translate)({
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
                    }) : (0, _v67.translate)({
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
              }), _v67("discount")]
            }), (0, _v1.jsx)(_v88.ModalFooter, {
              p: 0,
              mt: 6,
              children: (0, _v1.jsxs)(_v108.Stack, {
                spacing: 3,
                width: "100%",
                children: [(0, _v1.jsx)(_v8.Button, {
                  variant: "primary",
                  size: "md",
                  width: "100%",
                  onClick: _v51,
                  isLoading: _v27,
                  disabled: _v27,
                  children: (0, _v67.translate)({
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
                }), (0, _v1.jsx)(_v8.Button, {
                  variant: "destructive",
                  size: "md",
                  width: "100%",
                  onClick: _v64,
                  isLoading: _v9,
                  disabled: _v9 || _v27,
                  children: (0, _v67.translate)({
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
                }), _v20 && (0, _v1.jsx)(_v8.Button, {
                  variant: "hyperminimal",
                  background: "none",
                  size: "md",
                  width: "100%",
                  onClick: _v63,
                  children: (0, _v67.translate)({
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
      if (!_v37) return null;
      let {
          teamSeats: _v68,
          restrictedVideoStorageLimit: _v69,
          bandwidth: _v70,
          seats: _v71
        } = _v37?.metadata?.entitlements?.params ?? {},
        _v72 = _v71?.admin ?? null,
        _v73 = _v70?.periodicQuota ?? null,
        _v74 = _v70?.quotaPeriod === "year",
        _v75 = _v7.billingPeriod === _v62.UserPlanType.Year,
        _v76 = _v15 ? _v22?.find(_v0 => _v0.tier === _v15) ?? null : null,
        _v77 = _v75 ? _v37?.price?.annualMonthly : _v37?.price?.monthly,
        _v78 = _v75 ? _v76?.price?.annualMonthly : _v76?.price?.monthly,
        _v79 = _v78 && _v77 && _v78 > _v77 ? Math.floor((_v78 - _v77) / _v78 * 100) : null,
        _v80 = _v75 ? _v76?.priceFormatted?.annualMonthly : _v76?.priceFormatted?.monthly,
        _v81 = "professional" === _v18 ? (0, _v67.translate)({
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
        }) : (0, _v67.translate)({
          singular: "{PLAN} gives your team the essentials at a lower price.",
          replacements: {
            PLAN: _v37?.name
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
      return (0, _v1.jsxs)(_v84.Modal, {
        isOpen: _v0,
        onClose: _v1,
        size: "sm",
        scrollBehavior: "outside",
        closeOnOverlayClick: !1,
        closeOnEsc: !1,
        children: [(0, _v1.jsx)(_v85.ModalOverlay, {}), (0, _v1.jsxs)(_v86.ModalContent, {
          borderRadius: "16px",
          maxW: "520px",
          p: 6,
          children: [(0, _v1.jsx)(_v115.IconButton, {
            "aria-label": "Go back",
            icon: (0, _v1.jsx)(_v170.ChevronLeft, {}),
            variant: "minimalTransparent",
            size: "sm",
            position: "absolute",
            top: "20px",
            left: "20px",
            onClick: _v3
          }), (0, _v1.jsxs)(_v89.ModalBody, {
            p: 0,
            children: [(0, _v1.jsxs)(_v11.Header, {
              size: "md",
              paddingLeft: "48px",
              children: [(0, _v67.translate)({
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
              }), (0, _v1.jsx)(_v7.Box, {
                as: "span",
                display: "block",
                children: (0, _v67.translate)({
                  singular: "Try {PLAN}",
                  replacements: {
                    PLAN: _v37?.name
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
            }), (0, _v1.jsx)(_v37.Text, {
              variant: "body-md",
              color: "text-secondary",
              mt: 2,
              children: _v81
            }), (0, _v1.jsxs)(_v10.Flex, {
              mt: 4,
              alignItems: "center",
              gap: 2,
              flexWrap: "wrap",
              children: [(0, _v1.jsx)(_v37.Text, {
                variant: "heading-xl",
                as: "span",
                children: _v75 ? _v37?.priceFormatted?.annualMonthly : _v37?.priceFormatted?.monthly
              }), _v80 && null !== _v79 && (0, _v1.jsx)(_v37.Text, {
                variant: "body-lg",
                color: "text-tertiary",
                as: "span",
                textDecoration: "line-through",
                children: _v80
              }), null !== _v79 && (0, _v1.jsx)(_v27.Badge, {
                size: "sm",
                backgroundColor: "status-positive-secondary",
                textColor: "status-positive-primary",
                border: "none",
                borderRadius: "999px",
                px: 3,
                py: 3,
                children: (0, _v67.translate)({
                  singular: "Save {PERCENT}%",
                  replacements: {
                    PERCENT: _v79
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
            }), (0, _v1.jsxs)(_v7.Box, {
              mt: 1,
              children: [(0, _v1.jsx)(_v37.Text, {
                variant: "body-sm",
                color: "text-secondary",
                children: _v75 ? (0, _v67.translate)({
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
                }) : (0, _v67.translate)({
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
              }), (0, _v1.jsx)(_v37.Text, {
                variant: "body-sm",
                color: "text-secondary",
                children: (0, _v67.translate)({
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
            }), (0, _v1.jsxs)(_v13.VStack, {
              align: "flex-start",
              spacing: 3,
              mt: 5,
              children: [null != _v68 && (0, _v1.jsxs)(_v7.Box, {
                display: "flex",
                alignItems: "center",
                gap: 2,
                children: [_v68 <= 1 ? (0, _v1.jsx)(_v159, {}) : (0, _v1.jsx)(_v161.Users, {}), (0, _v1.jsx)(_v37.Text, {
                  variant: "body-sm",
                  children: _v72 ? (0, _v67.translate)({
                    singular: "{USERS} users + {ADMINS} admins",
                    replacements: {
                      USERS: _v68,
                      ADMINS: _v72
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
                  }) : (0, _v67.translate)({
                    singular: "{AMOUNT} user",
                    plural: "{AMOUNT} users",
                    count: _v68,
                    replacements: {
                      AMOUNT: _v68
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
              }), _v69 && (0, _v1.jsxs)(_v7.Box, {
                display: "flex",
                alignItems: "center",
                gap: 2,
                children: [(0, _v1.jsx)(_v158, {}), (0, _v1.jsx)(_v37.Text, {
                  variant: "body-sm",
                  children: (0, _v67.translate)({
                    singular: "{AMOUNT} storage for Embeds and non-Public videos",
                    replacements: {
                      AMOUNT: _v69
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
              }), _v73 && (0, _v1.jsxs)(_v7.Box, {
                display: "flex",
                alignItems: "center",
                gap: 2,
                children: [(0, _v1.jsx)(_v158, {}), (0, _v1.jsx)(_v37.Text, {
                  variant: "body-sm",
                  children: _v74 ? (0, _v67.translate)({
                    singular: "{AMOUNT} of bandwidth per year",
                    replacements: {
                      AMOUNT: _v73
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
                  }) : (0, _v67.translate)({
                    singular: "{AMOUNT} of bandwidth per month",
                    replacements: {
                      AMOUNT: _v73
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
            }), _v67("downgrade")]
          }), (0, _v1.jsx)(_v88.ModalFooter, {
            p: 0,
            mt: 6,
            children: (0, _v1.jsxs)(_v108.Stack, {
              spacing: 3,
              width: "100%",
              children: [(0, _v1.jsx)(_v8.Button, {
                variant: "primary",
                size: "md",
                width: "100%",
                onClick: _v46,
                isLoading: _v27,
                disabled: _v27,
                children: (0, _v67.translate)({
                  singular: "Downgrade to {PLAN}",
                  replacements: {
                    PLAN: _v37?.name ?? ""
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
              }), (0, _v1.jsx)(_v8.Button, {
                variant: "destructive",
                size: "md",
                width: "100%",
                onClick: _v64,
                isLoading: _v9,
                disabled: _v9 || _v27,
                children: (0, _v67.translate)({
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
              }), _v20 && (0, _v1.jsx)(_v8.Button, {
                variant: "hyperminimal",
                background: "none",
                size: "md",
                width: "100%",
                onClick: _v63,
                children: (0, _v67.translate)({
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
  var _v176 = _v0.i(0),
    _v177 = _v0.i(0),
    _v178 = _v0.i(0);
  let _v179 = ({
      children: _v0
    }) => (0, _v1.jsx)(_v7.Box, {
      sx: {
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale"
      },
      display: "flex",
      flexDirection: "column",
      flex: "1",
      minHeight: "0",
      children: _v0
    }),
    _v180 = ({
      label: _v0,
      value: _v1,
      divider: _v2
    }) => (0, _v1.jsxs)(_v10.Flex, {
      justifyContent: "space-between",
      alignItems: "center",
      gap: "4",
      paddingTop: _v2 ? "12px" : "0",
      borderTopWidth: _v2 ? "1px" : "0",
      borderTopStyle: "dashed",
      borderColor: "stroke",
      children: [(0, _v1.jsx)(_v37.Text, {
        variant: "body-md",
        color: "text-secondary",
        children: _v0
      }), (0, _v1.jsx)(_v7.Box, {
        textAlign: "right",
        children: _v1
      })]
    }),
    _v181 = ({
      membership: _v0,
      isOpen: _v1,
      onClose: _v2
    }) => {
      let _v3 = (0, _v3.useContext)(_v60.ViewerContext),
        {
          showNotice: _v4
        } = (0, _v3.useContext)(_v91.ManageTeamDispatchCtx),
        {
          trackWithdrawModalOpen: _v5,
          trackWithdrawModalClosed: _v6,
          trackWithdrawRequested: _v7,
          trackWithdrawAbandoned: _v8
        } = (0, _v20.useBillingTracking)(),
        _v9 = (0, _v3.useMemo)(() => ({
          tier: _v0.tierForDisplay,
          periodicity: _v0.nextCycle?.billingPeriod
        }), [_v0.tierForDisplay, _v0.nextCycle?.billingPeriod]),
        _v10 = (0, _v3.useRef)(!1),
        _v11 = _v3?.user?.email ?? "",
        _v12 = !_v0.isFreeTrial,
        [_v13, _v14] = (0, _v3.useState)("info"),
        [_v15, _v16] = (0, _v3.useState)(_v11),
        [_v17, _v18] = (0, _v3.useState)(!1),
        [_v19, _v20] = (0, _v3.useState)(null),
        [_v21, _v22] = (0, _v3.useState)(_v1);
      _v1 !== _v21 && (_v22(_v1), _v1 && (_v14("info"), _v16(_v11), _v20(null), _v18(!1))), (0, _v3.useEffect)(() => {
        _v1 && (_v10.current = !1, _v5(_v9));
      }, [_v1]);
      let _v23 = _v15.trim(),
        _v24 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(_v23),
        _v25 = () => {
          let _v0 = null !== _v19;
          _v6(_v9), _v10.current || _v8(_v9), _v14("info"), _v16(_v11), _v20(null), _v18(!1), _v2(), _v0 && window.location.assign("/home");
        },
        _v26 = async () => {
          if (_v3 && _v0.subscriptionId && !_v17) {
            _v10.current = !0, _v7(_v9), _v18(!0);
            try {
              let _v0 = await (0, _v146.requestSubscriptionWithdrawal)(_v3, _v0.subscriptionId, _v23);
              _v20(_v0), _v14("confirmation");
            } catch {
              _v4({
                canShow: !0,
                type: "negative",
                text: (0, _v67.translate)({
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
                })
              }), _v25();
            } finally {
              _v18(!1);
            }
          }
        },
        _v27 = _v0.tierForDisplay || (0, _v67.translate)({
          singular: "your plan",
          dictionary: {
            es: {
              singular: "su plan"
            },
            "de-DE": {
              singular: "Ihr Tarif"
            },
            "fr-FR": {
              singular: "votre offre"
            },
            "ja-JP": {
              singular: "あなたのプラン"
            },
            "ko-KR": {
              singular: "귀하의 요금제"
            },
            "pt-BR": {
              singular: "seu plano"
            },
            "zh-CN": {
              singular: "您的订阅计划"
            }
          }
        }),
        _v28 = _v0.latestRefundableTransaction?.amount ?? _v0.totalPriceForDisplay,
        _v29 = [(0, _v67.translate)({
          singular: "Your subscription will be canceled immediately.",
          dictionary: {
            es: {
              singular: "Su suscripción será cancelada de forma inmediata."
            },
            "de-DE": {
              singular: "Ihr Abonnement wird sofort gekündigt."
            },
            "fr-FR": {
              singular: "Votre abonnement sera annulé immédiatement."
            },
            "ja-JP": {
              singular: "サブスクリプションは直ちに解約されます."
            },
            "ko-KR": {
              singular: "귀하의 구독은 즉시 취소됩니다."
            },
            "pt-BR": {
              singular: "Sua assinatura será cancelada imediatamente."
            },
            "zh-CN": {
              singular: "您的订阅将立即被取消。"
            }
          }
        }), _v12 ? (0, _v67.translate)({
          singular: "You will receive a full refund of your latest payment.",
          dictionary: {
            es: {
              singular: "Recibirá un reembolso completo de su último pago."
            },
            "de-DE": {
              singular: "Sie erhalten die vollständige Rückerstattung Ihrer letzten Zahlung."
            },
            "fr-FR": {
              singular: "Vous recevrez le remboursement intégral de votre dernier paiement."
            },
            "ja-JP": {
              singular: "直近の支払いは全額返金されます."
            },
            "ko-KR": {
              singular: "최근 결제 금액은 전액 환불됩니다."
            },
            "pt-BR": {
              singular: "Você receberá o reembolso total do seu último pagamento."
            },
            "zh-CN": {
              singular: "您将收到最近一次付款的全额退款。"
            }
          }
        }) : (0, _v67.translate)({
          singular: "You will lose access to your plan benefits.",
          dictionary: {
            es: {
              singular: "Perderá el acceso a los beneficios de su plan."
            },
            "de-DE": {
              singular: "Sie verlieren den Zugriff auf die Vorteile Ihres Tarifs."
            },
            "fr-FR": {
              singular: "Vous perdrez l'accès aux avantages de votre offre."
            },
            "ja-JP": {
              singular: "プランの特典を利用できなくなります."
            },
            "ko-KR": {
              singular: "요금제 혜택에 대한 접근 권한을 잃게 됩니다."
            },
            "pt-BR": {
              singular: "Você perderá o acesso aos benefícios do seu plano."
            },
            "zh-CN": {
              singular: "您将无法再享受订阅计划的权益。"
            }
          }
        }), (0, _v67.translate)({
          singular: "This action cannot be undone.",
          dictionary: {
            es: {
              singular: "Esta acción no se puede deshacer."
            },
            "de-DE": {
              singular: "Diese Aktion kann nicht rückgängig gemacht werden."
            },
            "fr-FR": {
              singular: "Cette action ne peut pas être annulée."
            },
            "ja-JP": {
              singular: "この操作は取り消せません."
            },
            "ko-KR": {
              singular: "이 작업은 되돌릴 수 없습니다."
            },
            "pt-BR": {
              singular: "Esta ação não pode ser desfeita."
            },
            "zh-CN": {
              singular: "此操作无法撤销。"
            }
          }
        })];
      return (0, _v1.jsxs)(_v84.Modal, {
        isOpen: _v1,
        onClose: _v25,
        size: "md",
        isCentered: !0,
        scrollBehavior: "inside",
        closeOnOverlayClick: !_v17,
        closeOnEsc: !_v17,
        children: [(0, _v1.jsx)(_v85.ModalOverlay, {}), (0, _v1.jsx)(_v86.ModalContent, {
          containerProps: {
            padding: {
              base: "16px",
              md: "16px"
            }
          },
          maxW: {
            base: "calc(100vw - 32px)",
            md: "560px"
          },
          width: {
            base: "calc(100vw - 32px)",
            md: "560px"
          },
          height: "auto",
          maxH: {
            base: "calc(100dvh - 32px)",
            md: "90vh"
          },
          borderRadius: "16px",
          margin: "auto",
          overflow: "hidden",
          children: "info" === _v13 ? (0, _v1.jsxs)(_v179, {
            children: [(0, _v1.jsx)(_v87.ModalHeader, {
              paddingX: {
                base: "20px",
                md: "60px"
              },
              paddingTop: "24px",
              paddingBottom: "16px",
              children: (0, _v1.jsx)(_v13.VStack, {
                gap: "4px",
                align: "stretch",
                children: (0, _v1.jsx)(_v37.Text, {
                  variant: "heading-md",
                  color: "text-primary",
                  children: (0, _v67.translate)({
                    singular: "Withdraw from your subscription",
                    dictionary: {
                      es: {
                        singular: "Darse de baja de su suscripción"
                      },
                      "de-DE": {
                        singular: "Ihr Abonnement widerrufen"
                      },
                      "fr-FR": {
                        singular: "Se rétracter de votre abonnement"
                      },
                      "ja-JP": {
                        singular: "サブスクリプションを解約します"
                      },
                      "ko-KR": {
                        singular: "귀하의 구독을 철회"
                      },
                      "pt-BR": {
                        singular: "Desistir da sua assinatura"
                      },
                      "zh-CN": {
                        singular: "撤销您的订阅"
                      }
                    }
                  })
                })
              })
            }), (0, _v1.jsx)(_v89.ModalBody, {
              paddingX: {
                base: "20px",
                md: "60px"
              },
              paddingTop: "12px",
              paddingBottom: "12px",
              overflow: {
                base: "auto",
                sm: "visible"
              },
              children: (0, _v1.jsxs)(_v13.VStack, {
                gap: "24px",
                align: "stretch",
                children: [_v12 && (0, _v1.jsx)(_v7.Box, {
                  borderWidth: "1px",
                  borderColor: "stroke",
                  borderRadius: "12px",
                  padding: "16px",
                  children: (0, _v1.jsxs)(_v13.VStack, {
                    gap: "12px",
                    align: "stretch",
                    children: [(0, _v1.jsxs)(_v10.Flex, {
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "4",
                      children: [(0, _v1.jsx)(_v37.Text, {
                        variant: "body-md",
                        color: "text-secondary",
                        children: (0, _v67.translate)({
                          singular: "Plan",
                          dictionary: {
                            "de-DE": {
                              singular: "Tarif"
                            },
                            "fr-FR": {
                              singular: "Offre"
                            },
                            "ja-JP": {
                              singular: "プラン"
                            },
                            "ko-KR": {
                              singular: "요금제"
                            },
                            "pt-BR": {
                              singular: "Plano"
                            },
                            "zh-CN": {
                              singular: "订阅计划"
                            }
                          }
                        })
                      }), (0, _v1.jsx)(_v27.Badge, {
                        variant: "upgrade",
                        size: "sm",
                        children: _v27
                      })]
                    }), (0, _v1.jsx)(_v180, {
                      divider: !0,
                      label: (0, _v67.translate)({
                        singular: "Amount paid",
                        dictionary: {
                          es: {
                            singular: "Importe pagado"
                          },
                          "de-DE": {
                            singular: "Gezahlter Betrag"
                          },
                          "fr-FR": {
                            singular: "Montant payé"
                          },
                          "ja-JP": {
                            singular: "支払金額"
                          },
                          "ko-KR": {
                            singular: "결제 금액"
                          },
                          "pt-BR": {
                            singular: "Valor pago"
                          },
                          "zh-CN": {
                            singular: "已支付金额"
                          }
                        }
                      }),
                      value: (0, _v1.jsx)(_v37.Text, {
                        variant: "heading-sm",
                        color: "text-primary",
                        children: _v28
                      })
                    }), _v0.startDate && (0, _v1.jsx)(_v180, {
                      divider: !0,
                      label: (0, _v67.translate)({
                        singular: "Payment date",
                        dictionary: {
                          es: {
                            singular: "Fecha de pago"
                          },
                          "de-DE": {
                            singular: "Zahlungsdatum"
                          },
                          "fr-FR": {
                            singular: "Date de paiement"
                          },
                          "ja-JP": {
                            singular: "支払日"
                          },
                          "ko-KR": {
                            singular: "결제일"
                          },
                          "pt-BR": {
                            singular: "Data do pagamento"
                          },
                          "zh-CN": {
                            singular: "付款日期"
                          }
                        }
                      }),
                      value: (0, _v1.jsx)(_v37.Text, {
                        variant: "heading-sm",
                        color: "text-primary",
                        children: (0, _v118.formatDate)(_v0.startDate)
                      })
                    })]
                  })
                }), (0, _v1.jsxs)(_v4.AlertRoot, {
                  variant: "warning",
                  borderRadius: "12px",
                  flexDirection: "column",
                  alignItems: "stretch",
                  gap: "8px",
                  padding: "16px",
                  children: [(0, _v1.jsxs)(_v12.HStack, {
                    gap: "8px",
                    align: "center",
                    children: [(0, _v1.jsx)(_v41.CircleExclamationFilled, {
                      color: "yellow.500",
                      boxSize: (0, _v14.rem)(20)
                    }), (0, _v1.jsx)(_v37.Text, {
                      variant: "heading-2xs",
                      color: "text-primary",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      children: (0, _v67.translate)({
                        singular: "Here's what happens",
                        dictionary: {
                          es: {
                            singular: "Esto es lo que sucede"
                          },
                          "de-DE": {
                            singular: "So läuft es ab"
                          },
                          "fr-FR": {
                            singular: "Voici ce qui se passe"
                          },
                          "ja-JP": {
                            singular: "手続きの内容は以下のとおりです."
                          },
                          "ko-KR": {
                            singular: "다음은 진행되는 내용입니다."
                          },
                          "pt-BR": {
                            singular: "Veja o que acontece"
                          },
                          "zh-CN": {
                            singular: "接下来会发生什么"
                          }
                        }
                      })
                    })]
                  }), (0, _v1.jsx)(_v7.Box, {
                    as: "ul",
                    margin: "0",
                    paddingLeft: "20px",
                    sx: {
                      listStyleType: "disc"
                    },
                    children: _v29.map((_v0, _v1) => (0, _v1.jsx)(_v37.Text, {
                      as: "li",
                      variant: "body-md",
                      color: "text-primary",
                      marginTop: 0 === _v1 ? "0" : "4px",
                      children: _v0
                    }, _v1))
                  })]
                }), (0, _v1.jsxs)(_v176.FormControl, {
                  children: [(0, _v1.jsxs)(_v155.FormLabel, {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: "1.4",
                    letterSpacing: "-0.03em",
                    color: "text-primary",
                    marginBottom: "4px",
                    children: [(0, _v67.translate)({
                      singular: "Send confirmation to",
                      dictionary: {
                        es: {
                          singular: "Enviar confirmación a"
                        },
                        "de-DE": {
                          singular: "Bestätigung senden an"
                        },
                        "fr-FR": {
                          singular: "Envoyer la confirmation à"
                        },
                        "ja-JP": {
                          singular: "確認の送信先"
                        },
                        "ko-KR": {
                          singular: "확인 메일을 보낼 주소"
                        },
                        "pt-BR": {
                          singular: "Enviar confirmação para"
                        },
                        "zh-CN": {
                          singular: "发送确认至"
                        }
                      }
                    }), (0, _v1.jsx)(_v37.Text, {
                      as: "span",
                      variant: "body-sm",
                      fontWeight: 400,
                      color: "text-tertiary",
                      children: (0, _v67.translate)({
                        singular: "Editable",
                        dictionary: {
                          "de-DE": {
                            singular: "Bearbeitbar"
                          },
                          "fr-FR": {
                            singular: "Modifiable"
                          },
                          "ja-JP": {
                            singular: "編集可能"
                          },
                          "ko-KR": {
                            singular: "편집 가능"
                          },
                          "pt-BR": {
                            singular: "Editável"
                          },
                          "zh-CN": {
                            singular: "可编辑"
                          }
                        }
                      })
                    })]
                  }), (0, _v1.jsx)(_v177.Input, {
                    size: "lg",
                    type: "email",
                    value: _v15,
                    placeholder: _v11,
                    autoComplete: "off",
                    onChange: _v0 => _v16(_v0.target.value)
                  })]
                })]
              })
            }), (0, _v1.jsx)(_v88.ModalFooter, {
              paddingTop: "24px",
              paddingBottom: "24px",
              paddingX: {
                base: "20px",
                md: "60px"
              },
              children: (0, _v1.jsxs)(_v13.VStack, {
                gap: "8px",
                align: "stretch",
                width: "100%",
                children: [(0, _v1.jsx)(_v8.Button, {
                  variant: "destructive",
                  size: "lg",
                  width: "100%",
                  isLoading: _v17,
                  disabled: !_v24 || _v17,
                  onClick: _v26,
                  children: (0, _v67.translate)({
                    singular: "Confirm and withdraw",
                    dictionary: {
                      es: {
                        singular: "Confirmar y darse de baja"
                      },
                      "de-DE": {
                        singular: "Bestätigen und widerrufen"
                      },
                      "fr-FR": {
                        singular: "Confirmer la rétractation"
                      },
                      "ja-JP": {
                        singular: "確認して解約する"
                      },
                      "ko-KR": {
                        singular: "확인하고 철회하기"
                      },
                      "pt-BR": {
                        singular: "Confirmar e desistir"
                      },
                      "zh-CN": {
                        singular: "确认并撤销订阅"
                      }
                    }
                  })
                }), (0, _v1.jsx)(_v8.Button, {
                  variant: "secondary",
                  size: "lg",
                  width: "100%",
                  disabled: _v17,
                  onClick: _v25,
                  children: (0, _v67.translate)({
                    singular: "Keep my plan",
                    dictionary: {
                      es: {
                        singular: "Mantener mi plan"
                      },
                      "de-DE": {
                        singular: "Mein Tarif behalten"
                      },
                      "fr-FR": {
                        singular: "Conserver mon offre"
                      },
                      "ja-JP": {
                        singular: "プランを継続する"
                      },
                      "ko-KR": {
                        singular: "요금제 유지"
                      },
                      "pt-BR": {
                        singular: "Manter meu plano"
                      },
                      "zh-CN": {
                        singular: "保留我的订阅计划"
                      }
                    }
                  })
                })]
              })
            })]
          }) : (0, _v1.jsxs)(_v179, {
            children: [(0, _v1.jsx)(_v87.ModalHeader, {
              paddingTop: "40px",
              paddingBottom: "0",
              paddingX: {
                base: "20px",
                md: "60px"
              },
              children: (0, _v1.jsx)(_v10.Flex, {
                justifyContent: "center",
                children: (0, _v1.jsx)(_v178.CircleCheckFilled, {
                  boxSize: (0, _v14.rem)(56),
                  color: "status-positive-primary"
                })
              })
            }), (0, _v1.jsx)(_v89.ModalBody, {
              paddingTop: "20px",
              paddingBottom: "0",
              paddingX: {
                base: "20px",
                md: "60px"
              },
              children: (0, _v1.jsxs)(_v13.VStack, {
                gap: "12px",
                align: "center",
                textAlign: "center",
                children: [(0, _v1.jsx)(_v37.Text, {
                  variant: "heading-md",
                  color: "text-primary",
                  children: (0, _v67.translate)({
                    singular: "Your subscription is canceled",
                    dictionary: {
                      es: {
                        singular: "Su suscripción ha sido cancelada"
                      },
                      "de-DE": {
                        singular: "Ihr Abonnement wurde gekündigt"
                      },
                      "fr-FR": {
                        singular: "Votre abonnement est annulé"
                      },
                      "ja-JP": {
                        singular: "サブスクリプションは解約されました."
                      },
                      "ko-KR": {
                        singular: "귀하의 구독이 취소되었습니다."
                      },
                      "pt-BR": {
                        singular: "Sua assinatura foi cancelada"
                      },
                      "zh-CN": {
                        singular: "您的订阅已取消"
                      }
                    }
                  })
                }), (0, _v1.jsx)(_v37.Text, {
                  variant: "body-md",
                  color: "text-secondary",
                  children: _v19?.refundAmount ? (0, _v67.translate)({
                    singular: "Your refund of {AMOUNT} is on its way to your payment method.",
                    replacements: {
                      AMOUNT: `${_v19.refundAmount} ${_v19.refundCurrency ?? ""}`.trim()
                    },
                    dictionary: {
                      es: {
                        singular: "Su reembolso de {AMOUNT} está en camino a su método de pago."
                      },
                      "de-DE": {
                        singular: "Ihre Rückerstattung in Höhe von {AMOUNT} ist auf dem Weg zu Ihrer Zahlungsmethode."
                      },
                      "fr-FR": {
                        singular: "Votre remboursement de {AMOUNT} est en cours vers votre moyen de paiement."
                      },
                      "ja-JP": {
                        singular: "{AMOUNT} の返金はご利用の支払方法へ向けて処理中です."
                      },
                      "ko-KR": {
                        singular: "{AMOUNT} 환불이 귀하의 결제 수단으로 처리 중입니다."
                      },
                      "pt-BR": {
                        singular: "Seu reembolso de {AMOUNT} está a caminho do seu método de pagamento."
                      },
                      "zh-CN": {
                        singular: "金额为 {AMOUNT} 的退款正在退回至您的支付方式。"
                      }
                    }
                  }) : (0, _v67.translate)({
                    singular: "Your withdrawal has been processed.",
                    dictionary: {
                      es: {
                        singular: "Su baja ha sido procesada."
                      },
                      "de-DE": {
                        singular: "Ihr Widerruf wurde bearbeitet."
                      },
                      "fr-FR": {
                        singular: "Votre rétractation a été traitée."
                      },
                      "ja-JP": {
                        singular: "ご解約の手続きが完了しました."
                      },
                      "ko-KR": {
                        singular: "귀하의 철회 요청이 처리되었습니다."
                      },
                      "pt-BR": {
                        singular: "Sua desistência foi processada."
                      },
                      "zh-CN": {
                        singular: "您的撤销请求已处理。"
                      }
                    }
                  })
                }), _v19?.reference && (0, _v1.jsx)(_v7.Box, {
                  width: "100%",
                  borderWidth: "1px",
                  borderColor: "stroke",
                  borderRadius: "8px",
                  paddingX: "12px",
                  paddingY: "6px",
                  marginTop: "12px",
                  children: (0, _v1.jsx)(_v37.Text, {
                    variant: "body-md",
                    color: "text-tertiary",
                    children: (0, _v67.translate)({
                      singular: "Reference: {REFERENCE}",
                      replacements: {
                        REFERENCE: _v19.reference
                      },
                      dictionary: {
                        es: {
                          singular: "Referencia: {REFERENCE}"
                        },
                        "de-DE": {
                          singular: "Referenz: {REFERENCE}"
                        },
                        "fr-FR": {
                          singular: "Référence\n: {REFERENCE}"
                        },
                        "ja-JP": {
                          singular: "参照: {REFERENCE}"
                        },
                        "ko-KR": {
                          singular: "참조: {REFERENCE}"
                        },
                        "pt-BR": {
                          singular: "Referência: {REFERENCE}"
                        },
                        "zh-CN": {
                          singular: "参考编号：{REFERENCE}"
                        }
                      }
                    })
                  })
                })]
              })
            }), (0, _v1.jsx)(_v88.ModalFooter, {
              paddingTop: "32px",
              paddingBottom: "24px",
              paddingX: {
                base: "20px",
                md: "60px"
              },
              children: (0, _v1.jsx)(_v8.Button, {
                variant: "primary",
                size: "lg",
                width: "100%",
                onClick: _v25,
                children: (0, _v67.translate)({
                  singular: "Done",
                  dictionary: {
                    es: {
                      singular: "Hecho"
                    },
                    "de-DE": {
                      singular: "Fertig"
                    },
                    "fr-FR": {
                      singular: "Terminé"
                    },
                    "ja-JP": {
                      singular: "完了"
                    },
                    "ko-KR": {
                      singular: "완료"
                    },
                    "pt-BR": {
                      singular: "Feito"
                    },
                    "zh-CN": {
                      singular: "已存档"
                    }
                  }
                })
              })
            })]
          })
        })]
      });
    };
  var _v182 = _v0.i(0),
    _v183 = _v0.i(0);
  let _v184 = [_v62.Tier.Creator, _v62.Tier.Core, _v62.Tier.Professional],
    _v185 = ({
      children: _v0,
      onRequestIndividualPlans: _v1,
      onChangePlanClick: _v2
    }) => {
      let _v3,
        _v4,
        _v5,
        {
          isTeamInfoLoading: _v6,
          isMembershipInfoLoading: _v7,
          isBillingSettingChangeOngoing: _v8,
          isUploadQuotaLoading: _v9,
          membership: _v10,
          paymentMethods: _v11,
          isFetchPaymentMethodsLoading: _v12,
          teamInfo: {
            seatDetails: _v13,
            teamData: {
              ownerId: _v14
            }
          },
          teamCapabilities: {
            canUsePaymentsService: _v15
          },
          uploadQuota: _v16,
          planData: _v17
        } = (0, _v3.useContext)(_v91.ManageTeamStateCtx),
        {
          uploadQuota: _v18
        } = (0, _v58.useUserQuotaApi)(),
        {
          settings: _v19
        } = (0, _v18.useOrionSettings)(),
        _v20 = _v18?.restricted ?? null,
        _v21 = (0, _v3.useContext)(_v60.ViewerContext),
        _v22 = _v21?.teamUser,
        [_v23, _v24] = (0, _v54.useGetUserLazy)(),
        {
          scheduledOrder: _v25,
          hasScheduledDowngrade: _v26,
          isScheduledOrderLoading: _v27,
          normalizedScheduledTier: _v28
        } = (0, _v103.useScheduledOrder)(_v10.subscriptionId, _v10.tier, _v10.hasAutorenew),
        _v29 = _v62.RepackagedTiers.includes(_v10.tier ?? ""),
        _v30 = _v25?.productName?.toLowerCase().replace("vimeo ", "") ?? "",
        _v31 = _v26 && (0, _v182.isCorporateScheduledTier)(_v25?.productName),
        _v32 = _v26 && _v10.tier === _v62.Tier.Advanced && "professional" === _v30,
        _v33 = _v19.show_downgrade_card_billing && _v26 && !_v31 && !_v32 && "creator" !== _v30,
        {
          showNotice: _v34,
          showBillingPageLinkoutNotice: _v35,
          updateIsBillingSettingChangeOngoing: _v36,
          updateMembershipInfo: _v37,
          updatePaymentMethod: _v38,
          fetchMembershipInfo: _v39
        } = (0, _v3.useContext)(_v91.ManageTeamDispatchCtx),
        {
          trackAutoRenewSwitchedOn: _v40,
          trackAutoRenewSwitchedOff: _v41,
          trackBillingPageDisplayed: _v42,
          trackBillingPagePaymentMethodClicked: _v43,
          trackBillingPagePaymentMethodDropdownClicked: _v44,
          trackBillingPagePastPurchasesClicked: _v45,
          trackBillingPageChangePlanClicked: _v46,
          trackCancellationConfirmed: _v47,
          trackWithdrawButtonClicked: _v48
        } = (0, _v20.useBillingTracking)(),
        _v49 = (0, _v56.usePico)(),
        {
          trackBillingAction: _v50
        } = (0, _v3.useContext)(_v91.ManageTeamAnalytics),
        _v51 = (0, _v3.useRef)(!1),
        _v52 = () => {
          (_v46(), _v2 && _v28 && _v184.includes(_v28)) ? _v2(_v28) : window.open((0, _v19.buildUpgradePlanUrl)({
            paywallTrigger: "billing_card_change_plan_button",
            paywallLocation: "billing_card",
            paywallFeature: "billing"
          }), "_self");
        },
        {
          capabilities: _v53
        } = (0, _v43.useCapability)(["hasSelfServeBandwidth"]),
        [_v54, _v55] = (0, _v44.usePatchMe)(),
        [_v56, _v57] = _v53(),
        [_v58, _v59] = (0, _v3.useState)(!1),
        [_v60, _v61] = (0, _v3.useState)({
          isBusinessChecked: _v10.userEntity === _v62.UserEntity.Business,
          isPersonalChecked: _v10.userEntity === _v62.UserEntity.Personal,
          selectedRadioValue: void 0
        }),
        [_v62, _v63] = (0, _v3.useState)(!1),
        _v64 = (0, _v3.useRef)(0),
        _v65 = _v10.billingPeriod === _v62.UserPlanType.Month ? _v63.T.Month : _v63.T.Year,
        _v66 = _v10.isImpactedByGermanConsumerLaw && _v10.tier !== _v62.Tier.Free,
        _v67 = _v66 && _v10.userEntity === _v62.UserEntity.Personal,
        _v68 = _v21?.xsrft ?? "",
        _v69 = _v24?.data?.aiCreditsQuota,
        _v70 = (0, _v3.useRef)(0),
        _v71 = !_v10.hasAutorenew,
        _v72 = !!_v10?.gracePeriodType,
        _v73 = (0, _v183.getDisplayedGracePeriodEndDate)(_v10?.gracePeriodType, _v10?.originalEndDate, _v10?.endDate),
        _v74 = (0, _v3.useMemo)(() => {
          let _v0 = {
            badge_msg: "",
            message: "",
            renew: ""
          };
          if (_v10.status === _v62.AccountStatus.Active) _v0.badge_msg = _v63.T.Active, _v0.message = _v67 ? _v63.T.NextScheduledPaymentDate : _v63.T.AutoRenewDate, _v0.renew = _v63.T.RenewNow;else if (_v10.status === _v62.AccountStatus.Lapsed) _v0.badge_msg = _v63.T.Active, _v0.message = _v63.T.SubscriptionStartDate;else if (_v10.status === _v62.AccountStatus.Cancelled) {
            let _v0 = _v67 ? _v63.T.ScheduleOneTimePayment : _v63.T.EnableAutoRenew;
            _v0.badge_msg = _v63.T.PlanExpires((0, _v118.convertDateToMMDDYY)(_v10.renewalDate)), _v0.message = _v63.T.SubscriptionEndDate, _v0.renew = _v0;
          }
          return _v10.tier === _v62.Tier.Free && (_v0.badge_msg = _v63.T.Active, _v0.message = _v63.T.SubscriptionStartDate), _v10.isFreeTrial && (_v0.badge_msg = _v71 ? _v63.T.AccessEnding : _v63.T.FreeTrial, _v0.message = _v19.show_trial_renewal_date_in_billing_card ? _v67 ? _v63.T.NextScheduledPaymentDate : _v63.T.AutoRenewDate : _v63.T.SubscriptionStartDate), (_v71 || _v72) && (_v0.badge_msg = _v63.T.AccessEnding, _v0.message = _v71 ? _v63.T.AccessEnding : _v63.T.RenewalDate), _v10.isStorageEntitlementSuspended && (_v0.badge_msg = _v63.T.Expired), _v0;
        }, [_v67, _v10.isFreeTrial, _v10.isStorageEntitlementSuspended, _v10.renewalDate, _v10.status, _v10.tier, _v19.show_trial_renewal_date_in_billing_card, _v71, _v72]),
        [_v75, _v76] = (0, _v3.useState)(!1),
        {
          isOpen: _v77,
          onOpen: _v78,
          onClose: _v79
        } = (0, _v39.useDisclosure)(),
        _v80 = _v51({
          select: ["currency", "publishableKey"]
        }, {
          revalidateIfStale: !1,
          revalidateOnFocus: !1,
          revalidateOnReconnect: !1
        }),
        [_v81, _v82] = (0, _v3.useState)(0),
        [_v83, _v84] = (0, _v3.useState)(_v10.billingAddress),
        _v85 = _v10.tier,
        _v86 = "year" === _v10.billingPeriod ? "annual" : "monthly";
      (0, _v3.useEffect)(() => {
        _v51.current || _v7 || _v27 || null === _v49 || void 0 !== _v85 && (_v51.current = !0, _v42({
          tier: _v85,
          periodicity: _v86,
          b2bBanner: _v31,
          b2cCard: _v33
        }));
      }, [_v7, _v27, _v49, _v85, _v33, _v31]), (0, _v3.useEffect)(() => {
        _v84(_v10.billingAddress);
      }, [_v10.billingAddress]);
      let [_v87, _v88] = (0, _v3.useMemo)(() => _v83 && _v80.data?.publishableKey && _v80.data?.currency ? [{
          mode: "setup",
          currency: _v80.data.currency
        }, (0, _v26.loadStripe)(_v80.data.publishableKey)] : [void 0, null], [_v83, _v80.data]),
        _v89 = (0, _v3.useRef)(0);
      _v7 || _v9 || !(_v89.current < 1) || (_v50({
        action_type: _v61.BillingActionTypes.LAND,
        location: _v61.BillingActionLocations.PAGE
      }), _v89.current += 1), (0, _v3.useEffect)(() => {
        _v14 && _v23({
          select: ["aiCreditsQuota"],
          where: {
            userId: _v14
          }
        });
      }, [_v14, _v23]), (0, _v3.useEffect)(() => {
        void 0 !== _v60.selectedRadioValue && (_v54({
          select: ["profilePreferences"],
          variables: {
            profilePreferences: {
              userEntity: _v60.selectedRadioValue
            }
          }
        }), _v55.loading || _v55.error || _v37({
          ..._v10,
          userEntity: _v60.selectedRadioValue
        }));
      }, [_v60.isBusinessChecked, _v60.isPersonalChecked, _v55.error]), (0, _v3.useEffect)(() => {
        _v10.userEntity && _v61(_v0 => ({
          ..._v0,
          ...{
            isBusinessChecked: _v10.userEntity === _v62.UserEntity.Business,
            isPersonalChecked: _v10.userEntity === _v62.UserEntity.Personal
          }
        }));
      }, [_v10.userEntity]);
      let _v90 = (0, _v3.useCallback)(_v0 => {
          _v36(!0), _v38(_v0);
          let _v1 = _v11.find(_v0 => (0, _v118.getIdFromLink)(_v0.uri ?? "", !0) === _v0);
          _v1 && (_v10.paymentMethod = _v1), _v37(_v10), _v50({
            action_type: _v61.BillingActionTypes.SELECT,
            location: _v61.BillingActionLocations.PAYMENT_METHOD_OPTION
          });
        }, [_v38, _v10, _v11, _v37, _v50, _v36]),
        _v91 = async _v0 => {
          try {
            let _v0 = _v0 && _v11.length > 0 ? (0, _v118.getIdFromLink)(_v11[0].uri, !0) : void 0;
            return await _v56({
              select: [],
              where: {
                subscriptionId: _v10.subscriptionId
              },
              variables: {
                autoRenew: _v0,
                paymentMethodId: _v0
              }
            }), _v0 && _v34({
              canShow: !0,
              type: "primary",
              text: _v63.T.EnableAutoRenewSuccess
            }), !0;
          } catch {
            return _v34({
              canShow: !0,
              type: "negative",
              text: _v63.T.SomethingWentWrong
            }), !1;
          }
        };
      (0, _v3.useEffect)(() => {
        if (_v57.callCount <= _v70.current || !_v57.data || _v57.loading) return;
        let _v0 = _v57.data.autoRenew || !1,
          _v1 = _v57.data.status,
          _v2 = _v0 && "SUBSCRIPTION_STATUS_CANCELLED" !== _v1 ? _v62.AccountStatus.Active : _v62.AccountStatus.Cancelled;
        _v37({
          ..._v10,
          hasAutorenew: _v0,
          subscriptionId: _v57.data.id,
          status: _v2
        }), _v70.current = _v57.callCount, _v36(!1);
      }, [_v57, _v10, _v37, _v36]);
      let _v92 = async () => {
          _v50({
            action_type: _v61.BillingActionTypes.CLICK,
            location: _v61.BillingActionLocations.OPTOUT_MODAL_CONFIRM_OPTOUT_BUTTON
          });
          let _v0 = _v25?.productName?.toLowerCase().replace("vimeo ", ""),
            _v1 = !!_v25?.discount || !!_v25?.discountPercent;
          if (_v47({
            tier: _v85,
            periodicity: _v86,
            flowVariant: _v66 ? "german_two_click" : "standard",
            hadDowngradeOffer: !!_v0 && ["professional", "studio", "production"].includes(_v0) && !_v1
          }), _v15) (await _v91(!1)) && _v41({
            tier: _v85,
            periodicity: _v86
          });else try {
            _v36(!0), await (0, _v42.submitOptOutRequest)({
              token: _v68
            }), _v41({
              tier: _v85,
              periodicity: _v86
            });
          } catch {
            _v36(!1), _v34({
              canShow: !0,
              type: "negative",
              text: _v63.T.SomethingWentWrong
            });
          }
        },
        _v93 = () => {
          if (_v15) _v36(!0), _v91(!0);else {
            let _v0 = (0, _v118.getIdFromLink)(_v10.suggestedPaymentMethod?.uri ?? _v11[0]?.uri ?? "", !0);
            if (-1 === parseInt(_v0)) return void _v34({
              canShow: !0,
              type: "negative",
              text: _v63.T.SomethingWentWrong
            });
            try {
              _v95(_v0);
            } catch {
              _v34({
                canShow: !0,
                type: "negative",
                text: _v63.T.SomethingWentWrong
              });
              return;
            }
          }
        },
        _v94 = _v0 => {
          let {
            value: _v1
          } = _v0.target;
          _v50({
            action_type: _v61.BillingActionTypes.SELECT,
            location: _v1 === _v62.UserEntity.Personal ? _v61.BillingActionLocations.USER_ENTITY_PERSONAL_RADIO : _v61.BillingActionLocations.USER_ENTITY_BUSINESS_RADIO
          }), _v61(_v0 => ({
            ..._v0,
            selectedRadioValue: _v1
          })), _v66 ? _v59(!0) : _v61(_v0 => ({
            ..._v0,
            ...{
              isPersonalChecked: _v1 === _v62.UserEntity.Personal,
              isBusinessChecked: _v1 === _v62.UserEntity.Business
            }
          }));
        };
      async function _v95(_v0) {
        _v36(!0), await _v38(_v0, !1), _v39(), _v34({
          canShow: !0,
          type: "primary",
          text: _v63.T.EnableAutoRenewSuccess
        }), _v36(!1);
      }
      let _v96 = _v13?.totalPurchasedCount || _v10.seatCount,
        _v97 = _v13?.additionalPurchasedCount || 0,
        _v98 = null != _v10.additionalSeatPrice && null != _v10.basePlanPrice,
        _v99 = _v10.tier === _v62.Tier.Free ? _v63.T.Free : _v98 ? (0, _v118.formatAmountWithCurrency)(_v10.basePlanPrice + _v10.additionalSeatPrice * _v97, _v10.currency, 0) : (0, _v118.formatAmountWithCurrency)(_v10.pricePerSeat * (_v61.OWNER + _v97), _v10.currency, 0),
        _v100 = _v98 ? (0, _v118.formatAmountWithCurrency)(_v10.additionalSeatPrice, _v10.currency, 0) : (0, _v118.formatAmountWithCurrency)(_v10.pricePerSeat, _v10.currency, 0),
        _v101 = _v10.tier === _v62.Tier.Advanced ? "/enterprise/contact-us" : "/upgrade",
        _v102 = _v10.paymentMethod ?? _v10.suggestedPaymentMethod ?? _v11.find(_v0 => _v0.inUse) ?? _v11[0],
        _v103 = _v102 && (0, _v118.isPaymentExpired)(_v102),
        _v104 = (0, _v3.useCallback)(() => {
          if (!window) return !1;
          _v50({
            action_type: _v61.BillingActionTypes.CLICK,
            location: _v61.BillingActionLocations.UPGRADE_BUTTON
          });
          let _v0 = window.open(_v101, "_blank");
          _v0 && (_v63(!0), _v64.current = setInterval(() => {
            _v0 && _v0.closed && (_v0 = null, _v63(!1), _v35({
              canShow: !1,
              type: "primary",
              text: ""
            }));
          }, 0)), window.successfulUpgradeCallback = () => {
            _v63(!1), _v35({
              canShow: !1,
              type: "primary",
              text: ""
            }), _v64.current && clearInterval(_v64.current), window.location.reload();
          };
        }, [_v101, _v63, _v35, _v50]);
      (0, _v3.useEffect)(() => {
        _v62 && _v35({
          canShow: !0,
          type: "primary",
          text: "Upgrade flow is in progress in another tab."
        });
      }, [_v62, _v35]);
      let _v105 = (0, _v3.useCallback)(_v0 => {
          if (_v26 && _v25) {
            let _v0 = "year" === _v25.billingPeriod ? _v63.T.Year : _v63.T.Month,
              _v1 = _v0 ?? ("year" === _v25.billingPeriod ? _v25.price?.formatted : _v25.monthlyPrice?.formatted);
            if (_v1 && _v25.seatCount) return _v63.T.PricePerSeatWithTeamSeats(_v1, _v0, _v25.seatCount);
          }
          if (_v98) {
            let _v0 = _v0 ?? (0, _v118.formatAmountWithCurrency)(_v10.basePlanPrice, _v10.currency, 0);
            return _v63.T.PricePerSeatWithTeamSeats(_v0, _v65, 1);
          }
          let _v1 = _v0 ?? _v100;
          return _v10.tier && _v62.LegacyTiers.includes(_v10?.tier) ? _v63.T.PriceWithoutSeats(_v1, _v65) : _v10.tier === _v62.Tier.Free ? _v63.T.PricePerSeatForFreeUsers(_v1) : _v13 && _v16?.space?.unit === "video_size" ? _v63.T.PricePerSeatWithTeamSeats(_v1, _v65, _v13.basePlanCount) : _v63.T.PricePerSeat(_v1, _v65);
        }, [_v10, _v16, _v100, _v65, _v13, _v26, _v25, _v98]),
        _v106 = (0, _v3.useCallback)(() => _v10 && _v10.tier == _v62.Tier.Free ? "" : _v98 && _v97 > 0 ? _v63.T.PlanDetailsVerboseSeats(_v10.tierForDisplay, _v97, _v100) : _v98 ? _v63.T.PlanDetailsVerbose(_v10.tierForDisplay) : _v10?.tier && _v16?.space?.unit === "video_size" ? _v97 > 0 ? _v63.T.PlanDetailsVerboseSeats(_v118.tiers[_v10?.tier], _v97, _v100) : _v63.T.PlanDetailsVerbose(_v10.tierForDisplay) : _v63.T.PlanDetails(_v10.nextCycle?.seatCount ?? _v96, _v100), [_v10, _v16, _v100, _v96, _v97, _v98]),
        _v107 = (0, _v3.useMemo)(() => _v10.isReverseFreeTrial ? _v17 ? {
          price: (0, _v118.formatAmountWithCurrency)(_v17.price.annual, _v10.currency, 0),
          period: "year"
        } : {
          price: "",
          period: "year"
        } : null, [_v10, _v17]),
        _v108 = (0, _v3.useMemo)(() => {
          if (_v107) return _v107.price;
          if (_v10 && _v17 && _v10.tier === _v62.Tier.Plus) {
            let _v0 = "month" === _v10.billingPeriod && _v17.price.monthly ? _v17.price.monthly : _v17.price.annual;
            return (0, _v118.formatAmountWithCurrency)(_v0, _v10.currency, 0);
          }
          return _v10.tier !== _v62.Tier.Plus ? _v99 : "";
        }, [_v10, _v17, _v99, _v107]);
      function _v109(_v0) {
        return _v62.SolutionTiers.includes(_v0);
      }
      let _v110 = _v10.tier === _v62.Tier.Free && _v16.lifetime && _v16.lifetime?.unit === "video_count",
        _v111 = _v69?.available !== void 0 || null,
        _v112 = (0, _v38.useBreakpointValue)({
          base: "center",
          sm: "flex-start"
        }),
        _v113 = (0, _v38.useBreakpointValue)({
          base: 3,
          sm: 6
        }),
        _v114 = (0, _v38.useBreakpointValue)({
          base: "center",
          sm: "flex-end"
        }),
        _v115 = (0, _v38.useBreakpointValue)({
          base: "column",
          md: "row"
        }),
        _v116 = (0, _v38.useBreakpointValue)({
          base: 24,
          lg: 5
        }),
        _v117 = (0, _v38.useBreakpointValue)({
          base: "100%",
          sm: "50%",
          lg: _v110 || _v10.tier && _v109(_v10.tier) || _v111 ? "25%" : "33%"
        }),
        _v118 = (0, _v38.useBreakpointValue)({
          base: "column",
          lg: "row"
        }),
        _v119 = (_v10.status === _v62.AccountStatus.Active || _v10.isFreeTrial) && _v10.hasAutorenew,
        _v120 = _v10.status === _v62.AccountStatus.Cancelled && _v75,
        _v121 = _v19.enable_subscription_withdrawal && _v10.isWithdrawalEligible && _v15,
        {
          isOpen: _v122,
          onOpen: _v123,
          onClose: _v124
        } = (0, _v39.useDisclosure)(),
        {
          isOpen: _v125,
          close: _v126
        } = (_v3 = (0, _v2.useRouter)(), {
          isOpen: "1" === (_v4 = (0, _v83.useSearchParams)()).get("auto-renew"),
          close: () => {
            let _v0 = new URLSearchParams(_v4.toString());
            _v0.delete("auto-renew"), _v3.replace({
              pathname: location.pathname,
              search: _v0.toString()
            });
          }
        });
      (0, _v3.useEffect)(() => {
        _v71 && !_v7 && _v125 && _v10.tier && _v10.status !== _v62.AccountStatus.Cancelled && _v126();
      }, [_v126, _v125, _v7, _v10.status, _v10.tier, _v71]);
      let _v127 = _v26 ? _v25?.productName ?? "" : _v10.tierForDisplay,
        _v128 = !_v26 && _v53.hasSelfServeBandwidth ? ` ${_v17?.metadata.entitlements.params.bandwidth.periodicQuota} annual bandwidth` : "",
        _v129 = _v25 ? _v63.T.Month : _v107 ? _v63.T.Year : _v65,
        _v130 = (0, _v3.useMemo)(() => {
          let _v0 = _v108;
          return _v129 === _v63.T.Month && _v25?.monthlyPrice?.formatted && (_v0 = _v25?.monthlyPrice?.formatted), _v129 === _v63.T.Year && _v25?.price?.formatted && (_v0 = _v25?.price?.formatted), _v0;
        }, [_v129, _v25?.monthlyPrice?.formatted, _v25?.price?.formatted, _v108]),
        _v131 = !!_v25?.discount || !!_v25?.discountPercent,
        _v132 = (0, _v3.useMemo)(() => _v131 ? _v129 === _v63.T.Month ? _v25?.originalMonthlyPrice?.formatted ?? null : _v25?.originalPrice?.formatted ?? null : null, [_v131, _v129, _v25?.originalMonthlyPrice?.formatted, _v25?.originalPrice?.formatted]),
        _v133 = _v25 ? _v63.T.PlanDetailsVerbose(_v25.productName ?? "") : _v106(),
        _v134 = _v57.loading || _v8,
        [_v135, _v136] = (0, _v3.useState)(!1),
        [_v137, _v138] = (0, _v3.useState)(null),
        [_v139, _v140] = (0, _v3.useState)(0),
        [_v141, _v142] = (0, _v3.useState)(!1),
        _v143 = {
          cancelAutoRenew: _v92,
          cancelRequestPending: _v134,
          notification: _v34,
          setShowPostCancelSurvey: _v76,
          renewalPrice: _v130,
          renewalPeriodLabel: _v129,
          teamUser: _v22,
          reopenBspAtConfirmSignal: _v139,
          ...(!!(_v5 = _v25?.productName?.toLowerCase().replace("vimeo ", "")) && ["professional", "studio", "production"].includes(_v5) && !_v131 && {
            onBeforeCancel: (_v0, _v1) => {
              _v136(!0), _v138(() => _v0), _v142(!!_v1?.skipBspBackTarget);
            }
          })
        },
        _v144 = _v6 || _v9 || _v7 || _v12 || _v27,
        [_v145, _v146] = (0, _v3.useState)(!1);
      return ((0, _v3.useEffect)(() => {
        _v144 || _v145 || _v146(!0);
      }, [_v144, _v145]), _v144 && !_v145) ? (0, _v1.jsx)(_v35.Skeleton, {
        marginTop: (0, _v14.rem)(26),
        minHeight: (0, _v14.rem)(411)
      }) : (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsxs)(_v10.Flex, {
          mt: 6,
          gap: 6,
          flexDirection: {
            base: "column",
            lg: "row"
          },
          alignItems: "flex-start",
          children: [(0, _v1.jsxs)(_v7.Box, {
            p: 6,
            border: "1px solid",
            borderColor: "background",
            borderRadius: "md",
            bg: "fill-surface",
            flex: 1,
            children: [(0, _v1.jsxs)(_v10.Flex, {
              justifyContent: "flex-start",
              flexDirection: _v115,
              alignItems: {
                base: _v71 || _v72 ? "flex-start" : _v112,
                md: _v71 || _v72 ? "center" : _v112
              },
              children: [(0, _v1.jsxs)(_v13.VStack, {
                align: "flex-start",
                flexGrow: 1,
                children: [(0, _v1.jsxs)(_v12.HStack, {
                  width: "max-content",
                  children: [(0, _v1.jsxs)(_v37.Text, {
                    variant: "heading-md",
                    children: [_v127, _v128]
                  }), _v26 ? (0, _v1.jsx)(_v27.Badge, {
                    ml: (0, _v14.rem)("5px"),
                    size: "sm",
                    backgroundColor: _v32 ? "status-positive-primary" : "status-caution-primary",
                    textColor: "white",
                    border: "none",
                    children: _v63.T.ActiveAtNextRenewal
                  }) : (0, _v1.jsx)(_v27.Badge, {
                    ml: (0, _v14.rem)("5px"),
                    size: "sm",
                    variant: "Cancelled" === _v10.status ? "mature" : void 0,
                    backgroundColor: _v71 || _v72 ? "status-caution-primary" : "Cancelled" !== _v10.status ? "status-positive-primary" : void 0,
                    textColor: "Cancelled" !== _v10.status ? "white" : void 0,
                    border: "Cancelled" !== _v10.status ? "none" : void 0,
                    children: _v74.badge_msg
                  })]
                }), (0, _v1.jsxs)(_v37.Text, {
                  variant: "body-sm",
                  color: "text-secondary",
                  whiteSpace: "nowrap",
                  children: [_v105(_v131 ? _v25?.billingPeriod === "year" ? _v25?.originalPrice?.formatted : _v25?.originalMonthlyPrice?.formatted : void 0), " ", !_v26 && (0, _v1.jsx)(_v28.Link, {
                    onClick: () => {
                      _v50({
                        action_type: _v61.BillingActionTypes.CLICK,
                        location: _v61.BillingActionLocations.SEE_PLAN_DETAILS_BUTTON
                      });
                    },
                    href: (0, _v19.buildUpgradePlanUrl)({
                      paywallTrigger: "billing_card_see_plan_details_link",
                      paywallLocation: "billing_card",
                      paywallFeature: "billing"
                    }),
                    isExternal: !0,
                    variant: _v71 || _v72 ? "brand" : "inline-secondary",
                    fontSize: "12px",
                    children: _v63.T.SeePlanDetails
                  })]
                })]
              }), (0, _v1.jsx)(_v13.VStack, {
                hidden: _v72,
                align: _v114,
                flexGrow: 1,
                mt: {
                  base: 16,
                  md: 0
                },
                width: "100%",
                children: _v26 ? (0, _v1.jsx)(_v8.Button, {
                  variant: "primary",
                  size: "sm",
                  onClick: _v52,
                  width: {
                    base: "100%",
                    md: "auto"
                  },
                  display: {
                    base: "none",
                    md: "inline-flex"
                  },
                  children: _v63.T.ChangePlan
                }) : _v71 && _v10.status === _v62.AccountStatus.Cancelled ? _v10.isReverseFreeTrial ? null : (0, _v1.jsx)(_v8.Button, {
                  variant: "primary",
                  isLoading: _v8,
                  size: "sm",
                  onClick: () => {
                    _v50({
                      action_type: _v61.BillingActionTypes.CLICK,
                      location: _v67 ? _v61.BillingActionLocations.SCHEDULE_ONE_TIME_PAYMENT_BUTTON : _v61.BillingActionLocations.ENABLE_AUTORENEW_BUTTON
                    });
                    let _v0 = "year" === _v10.billingPeriod ? "annual" : "monthly";
                    _v40({
                      tier: _v10.tier,
                      periodicity: _v0
                    }), _v93();
                  },
                  width: {
                    base: "100%",
                    md: "auto"
                  },
                  children: _v74.renew
                }) : (0, _v1.jsx)(_v8.Button, {
                  variant: "upsell",
                  size: "sm",
                  onClick: _v104,
                  width: {
                    base: "100%",
                    md: "auto"
                  },
                  children: _v63.T.UpgradeButton
                })
              })]
            }), (0, _v1.jsx)(_v10.Flex, {
              flexDirection: "column",
              mt: _v116,
              children: (0, _v1.jsxs)(_v10.Flex, {
                flexDirection: _v115,
                flexWrap: "wrap",
                justifyContent: "space-between",
                children: [(0, _v1.jsx)(_v13.VStack, {
                  align: "flex-start",
                  spacing: _v113,
                  flexGrow: 1,
                  width: _v117,
                  mb: _v116,
                  children: (0, _v1.jsxs)(_v7.Box, {
                    children: [(0, _v1.jsxs)(_v37.Text, {
                      as: "span",
                      variant: "heading-xs",
                      mb: 1,
                      children: [_v10.tier !== _v62.Tier.Free ? _v63.T.CostAtRenewal : _v63.T.Cost, " "]
                    }), (0, _v1.jsx)(_v37.Text, {
                      as: "span",
                      variant: "heading-xs",
                      color: "text-tertiary",
                      children: _v10.tier !== _v62.Tier.Free ? _v63.T.PerSubscriptionType(_v129) : ""
                    }), (0, _v1.jsxs)(_v37.Text, {
                      variant: "heading-md",
                      mt: 1,
                      mb: 1,
                      children: [_v132 && (0, _v1.jsx)(_v37.Text, {
                        as: "span",
                        textDecoration: "line-through",
                        color: "text-tertiary",
                        mr: 2,
                        children: _v132
                      }), _v130]
                    }), _v131 && _v25?.discountPercent ? (0, _v1.jsx)(_v37.Text, {
                      variant: "body-sm",
                      color: "status-positive-primary",
                      children: _v63.T.CostAtRenewalDiscount(_v25.discountPercent)
                    }) : null, (0, _v1.jsx)(_v37.Text, {
                      variant: "body-sm",
                      children: _v133
                    }), _v10.tier !== _v62.Tier.Free && (0, _v1.jsx)(_v37.Text, {
                      variant: "body-sm",
                      color: "text-tertiary",
                      children: _v63.T.CostAtRenewalTaxNote
                    })]
                  })
                }), (0, _v1.jsx)(_v13.VStack, {
                  align: "flex-start",
                  spacing: _v113,
                  flexGrow: 1,
                  width: _v117,
                  mb: _v116,
                  children: (0, _v1.jsxs)(_v7.Box, {
                    width: "70%",
                    children: [(0, _v1.jsxs)(_v37.Text, {
                      as: "span",
                      variant: "heading-xs",
                      mb: 1,
                      children: [_v74.message, !_v71 && !_v72 && _v10.status === _v62.AccountStatus.Cancelled && (0, _v1.jsx)(_v40.InfoCircle, {
                        boxSize: "2xs",
                        verticalAlign: "top",
                        position: "relative",
                        ml: "4px",
                        top: "4px",
                        color: "status-destructive-primary"
                      })]
                    }), (0, _v1.jsxs)(_v10.Flex, {
                      mt: 1,
                      mb: 1,
                      gap: 1,
                      alignItems: "center",
                      children: [(_v71 && _v10.status === _v62.AccountStatus.Cancelled || _v72) && (0, _v1.jsx)(_v41.CircleExclamationFilled, {
                        boxSize: "2xs",
                        color: "status-destructive-primary"
                      }), (0, _v1.jsx)(_v37.Text, {
                        variant: "heading-md",
                        textColor: _v71 || _v72 ? "status-destructive-primary" : "text-primary",
                        whiteSpace: "nowrap",
                        children: _v10.isFreeTrial && _v19.show_trial_renewal_date_in_billing_card ? (0, _v118.formatDate)(_v10.renewalDate) : [_v62.Tier.Free, _v62.Tier.Basic].includes(_v10.tier) || _v10.isFreeTrial ? (0, _v118.formatDate)(_v10.startDate) : _v10.gracePeriodType ? (0, _v118.formatDate)(_v10.originalEndDate) : _v10.status == _v62.AccountStatus.Cancelled ? (0, _v118.formatDate)(_v10.endDate) : (0, _v118.formatDate)(_v10.renewalDate)
                      })]
                    }), _v72 && _v10 && (0, _v1.jsx)(_v37.Text, {
                      variant: "body-sm",
                      color: "status-destructive-primary",
                      children: _v63.T.AccessExtended((0, _v118.getDaysBetween)(_v10.originalEndDate, _v73 ?? _v10.endDate))
                    }), !_v71 && !_v72 && _v10.status === _v62.AccountStatus.Cancelled && (0, _v1.jsx)(_v1.Fragment, {
                      children: _v11.length ? (0, _v1.jsxs)(_v10.Flex, {
                        alignItems: "center",
                        children: [(0, _v1.jsx)(_v8.Button, {
                          isDisabled: _v8,
                          size: "xs",
                          variant: "link",
                          textDecoration: "underline",
                          background: "none",
                          pl: "0",
                          onClick: () => {
                            _v50({
                              action_type: _v61.BillingActionTypes.CLICK,
                              location: _v67 ? _v61.BillingActionLocations.SCHEDULE_ONE_TIME_PAYMENT_BUTTON : _v61.BillingActionLocations.ENABLE_AUTORENEW_BUTTON
                            }), _v93();
                          },
                          children: _v74.renew
                        }), _v67 && (0, _v1.jsxs)(_v29.Popover, {
                          trigger: "click",
                          children: [(0, _v1.jsx)(_v32.PopoverTrigger, {
                            children: (0, _v1.jsx)("span", {
                              children: (0, _v1.jsx)(_v40.InfoCircle, {
                                color: "text-tertiary",
                                boxSize: "2xs",
                                verticalAlign: "top",
                                position: "relative",
                                top: "4px"
                              })
                            })
                          }), (0, _v1.jsx)(_v31.PopoverContent, {
                            maxWidth: "200px",
                            children: (0, _v1.jsx)(_v30.PopoverBody, {
                              textStyle: "body-md",
                              children: _v63.T.ScheduleOneTimePaymentWithDate((0, _v118.formatDate)(_v10.renewalDate))
                            })
                          })]
                        }), _v8 && (0, _v1.jsx)(_v36.Spinner, {
                          size: "xs",
                          ml: (0, _v14.rem)(15)
                        })]
                      }) : (0, _v1.jsx)(_v10.Flex, {
                        alignItems: "center",
                        children: (0, _v1.jsxs)(_v29.Popover, {
                          trigger: "click",
                          children: [(0, _v1.jsx)(_v32.PopoverTrigger, {
                            children: (0, _v1.jsx)("span", {
                              children: (0, _v1.jsx)(_v40.InfoCircle, {
                                color: "text-tertiary",
                                boxSize: "2xs",
                                verticalAlign: "top",
                                position: "relative",
                                top: "4px"
                              })
                            })
                          }), (0, _v1.jsx)(_v31.PopoverContent, {
                            maxWidth: "200px",
                            children: (0, _v1.jsx)(_v30.PopoverBody, {
                              textStyle: "body-md",
                              children: _v63.T.AddNewCard
                            })
                          })]
                        })
                      })
                    })]
                  })
                }), (0, _v1.jsx)(_v13.VStack, {
                  align: "flex-start",
                  spacing: _v113,
                  flexGrow: 1,
                  width: _v117,
                  mb: _v110 || _v10.tier && _v109(_v10.tier) ? _v116 : 0,
                  children: _v16.periodic && (_v10.tier !== _v62.Tier.Free || _v16?.space?.unit !== "video_count") && (0, _v1.jsx)(_v1.Fragment, {
                    children: (0, _v1.jsxs)(_v7.Box, {
                      children: [(0, _v1.jsxs)(_v37.Text, {
                        variant: "heading-xs",
                        mb: 1,
                        children: [_v20 || _v16?.space?.unit === "video_size" ? _v63.T.StorageUsed : _v63.T.VideosUsed, (0, _v1.jsxs)(_v29.Popover, {
                          trigger: "click",
                          children: [(0, _v1.jsx)(_v32.PopoverTrigger, {
                            children: (0, _v1.jsx)("span", {
                              children: (0, _v1.jsx)(_v40.InfoCircle, {
                                color: _v20 ? (_v20.used ?? 0) >= (_v20.max ?? 0) ? "status-destructive-primary" : "text-tertiary" : _v16?.space && _v16.space.used >= _v16.space.max ? "status-destructive-primary" : "text-tertiary",
                                boxSize: "2xs",
                                verticalAlign: "top",
                                position: "relative",
                                top: "2px",
                                ml: 2
                              })
                            })
                          }), (0, _v1.jsx)(_v31.PopoverContent, {
                            maxWidth: "200px",
                            children: (0, _v1.jsx)(_v30.PopoverBody, {
                              textStyle: "body-md",
                              children: _v20 ? _v63.T.RestrictedStorageUsageInfo : _v63.T.VideoUsageInfo
                            })
                          })]
                        })]
                      }), (0, _v1.jsx)(_v7.Box, {
                        children: (0, _v1.jsxs)(_v12.HStack, {
                          mt: 1,
                          mb: 2,
                          justifyContent: "space-between",
                          children: [(0, _v1.jsx)(_v37.Text, {
                            variant: "heading-md",
                            children: _v20 ? _v63.T.UsageOfMax((0, _v59.formatBytes)(_v20.used ?? 0, (_v20.used ?? 0) > 0), (0, _v59.formatBytes)(_v20.max ?? 0, !1)) : _v16?.space?.unit === "video_size" ? _v63.T.UsageOfMax((0, _v59.formatBytes)(_v16?.space.used, _v16?.space.used > 0), (0, _v59.formatBytes)(_v16?.space.max, !1)) : _v63.T.UsageOfMax((0, _v118.formatNumber)(_v16.periodic.used), (0, _v118.formatNumber)(_v16.periodic.max))
                          }), _v10.tier && _v109(_v10.tier) && (0, _v1.jsx)(_v37.Text, {
                            variant: "body-md",
                            color: "text-secondary",
                            alignSelf: "center",
                            children: _v20 ? _v63.T.Percentage(Math.round((_v20.used ?? 0) / (_v20.max ?? 1) * 100)) : _v16?.space?.unit === "video_size" ? _v63.T.Percentage(Math.round(_v16?.space.used / _v16?.space.max * 100)) : _v63.T.Percentage(Math.round(_v16.periodic.used / _v16.periodic.max * 100))
                          })]
                        })
                      }), (0, _v1.jsx)(_v7.Box, {
                        children: _v20 ? (_v20.used ?? 0) < (_v20.max ?? 0) ? (0, _v1.jsx)(_v33.Progress, {
                          size: "xs",
                          variant: "default",
                          value: _v20.used ?? 0,
                          max: _v20.max ?? 0
                        }) : (0, _v1.jsx)(_v33.Progress, {
                          size: "xs",
                          bgColor: "status-destructive-primary",
                          variant: "destructive",
                          value: _v20.max ?? 0,
                          max: _v20.max ?? 0
                        }) : _v16?.space && _v16.space.used < _v16.space.max ? (0, _v1.jsx)(_v33.Progress, {
                          size: "xs",
                          variant: "default",
                          value: _v16?.space?.used || _v16.periodic.used,
                          max: _v16?.space?.max || _v16.periodic.max
                        }) : (0, _v1.jsx)(_v33.Progress, {
                          size: "xs",
                          bgColor: "status-destructive-primary",
                          variant: "destructive",
                          value: _v16?.space?.max || _v16.periodic.max,
                          max: _v16?.space?.max || _v16.periodic.max
                        })
                      })]
                    })
                  })
                }), _v10.tier === _v62.Tier.Free && _v16.lifetime && _v16.lifetime?.unit === "video_count" && (0, _v1.jsx)(_v13.VStack, {
                  align: "flex-start",
                  spacing: _v113,
                  flexGrow: 1,
                  width: _v117,
                  children: (0, _v1.jsxs)(_v7.Box, {
                    children: [(0, _v1.jsxs)(_v37.Text, {
                      variant: "heading-xs",
                      mb: 4,
                      children: [_v63.T.LifetimeVideos, " ", (0, _v1.jsx)(_v37.Text, {
                        as: "span",
                        variant: "body-md",
                        color: "text-tertiary",
                        children: _v63.T.Total
                      }), (0, _v1.jsxs)(_v29.Popover, {
                        trigger: "click",
                        children: [(0, _v1.jsx)(_v32.PopoverTrigger, {
                          children: (0, _v1.jsx)("span", {
                            children: (0, _v1.jsx)(_v40.InfoCircle, {
                              color: _v16.lifetime.used >= _v16.lifetime.max ? "status-destructive-primary" : "text-tertiary",
                              boxSize: "2xs",
                              verticalAlign: "top",
                              position: "relative",
                              top: "2px",
                              ml: 2
                            })
                          })
                        }), (0, _v1.jsx)(_v31.PopoverContent, {
                          maxWidth: "200px",
                          children: (0, _v1.jsx)(_v30.PopoverBody, {
                            textStyle: "body-md",
                            children: _v63.T.VideoUsageInfo
                          })
                        })]
                      })]
                    }), (0, _v1.jsx)(_v7.Box, {
                      children: (0, _v1.jsx)(_v37.Text, {
                        variant: "heading-md",
                        mt: 4,
                        mb: 4,
                        children: _v63.T.UsageOfMax((0, _v118.formatNumber)(_v16.lifetime?.used), (0, _v118.formatNumber)(_v16.lifetime?.max))
                      })
                    }), (0, _v1.jsx)(_v7.Box, {
                      children: _v16.lifetime.used < _v16.lifetime.max ? (0, _v1.jsx)(_v33.Progress, {
                        size: "xs",
                        variant: "default",
                        value: _v16.lifetime.used,
                        max: _v16.lifetime.max
                      }) : (0, _v1.jsx)(_v33.Progress, {
                        size: "xs",
                        bgColor: "status-destructive-primary",
                        variant: "destructive",
                        value: _v16.lifetime.max,
                        max: _v16.lifetime.max
                      })
                    })]
                  })
                }), _v111 && _v69 && (0, _v1.jsx)(_v82, {
                  spacing: _v113,
                  width: _v117,
                  align: "flex-start",
                  flexGrow: 1,
                  aiCreditsQuota: _v69
                })]
              })
            }), (0, _v1.jsx)(_v7.Box, {
              borderBottom: "1px solid",
              borderColor: "stroke",
              my: 6
            }), (0, _v1.jsxs)(_v10.Flex, {
              flexDirection: _v118,
              mt: 6,
              gap: {
                base: 16,
                md: 32
              },
              children: [(0, _v1.jsxs)(_v13.VStack, {
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
                children: [(0, _v1.jsx)(_v37.Text, {
                  variant: "heading-xs",
                  children: _v63.T.PaymentMethod
                }), (0, _v1.jsxs)(_v13.VStack, {
                  alignItems: "start",
                  width: "100%",
                  children: [_v11?.length ? (0, _v1.jsx)(_v57.default, {
                    activePaymentMethod: _v102,
                    edit: !0,
                    status: _v10.status === _v62.AccountStatus.Active,
                    paymentMethods: _v11,
                    onSelect: _v90,
                    isOperationOngoing: _v8,
                    inGracePeriod: _v10?.gracePeriodType !== null,
                    trackAddPaymentMethod: () => {
                      _v50({
                        action_type: _v61.BillingActionTypes.CLICK,
                        location: _v61.BillingActionLocations.ADD_NEW_CARD_BUTTON
                      });
                    },
                    trackOpenSelectDropdown: () => {
                      _v50({
                        action_type: _v61.BillingActionTypes.CLICK,
                        location: _v61.BillingActionLocations.PAYMENT_METHOD_DROPDOWN
                      }), _v44();
                    },
                    hasPaymentExpired: _v103,
                    allPaymentMethodsExpired: (() => {
                      if (_v11) {
                        for (let _v0 = 0; _v0 < _v11?.length; _v0++) if (!(0, _v118.isPaymentExpired)(_v11[_v0])) return !1;
                      }
                      return !0;
                    })(),
                    addNewPaymentMethod: _v10?.gracePeriodType !== null
                  }) : (0, _v1.jsx)(_v8.Button, {
                    onClick: () => {
                      let _v0 = _v10.isReverseFreeTrial ? (0, _v55.buildCheckoutUrl)({
                        tier: _v10.tier ?? _v62.Tier.Starter,
                        paywallTrigger: "reverse_trial_billing_add_payment",
                        paywallLocation: "billing_settings",
                        paywallFeature: "reverse_trial_billing_add_payment",
                        paywallType: "popup"
                      }) : "/checkout/payments/new";
                      window.open(_v0, "_blank"), _v43(), _v50({
                        action_type: _v61.BillingActionTypes.CLICK,
                        location: _v61.BillingActionLocations.ADD_NEW_CARD_BUTTON
                      });
                    },
                    isDisabled: _v10.tier === _v62.Tier.Free,
                    variant: "link",
                    textDecoration: "underline",
                    children: _v63.T.AddNewCard
                  }), _v72 && _v103 && (0, _v1.jsxs)(_v10.Flex, {
                    alignItems: "center",
                    gap: 1,
                    mb: 2,
                    children: [(0, _v1.jsx)(_v41.CircleExclamationFilled, {
                      color: "status-destructive-primary",
                      width: 16,
                      height: 16
                    }), (0, _v1.jsx)(_v37.Text, {
                      variant: "body-sm",
                      color: "status-destructive-primary",
                      children: _v63.T.CardExpired
                    })]
                  }), (0, _v1.jsx)(_v8.Button, {
                    size: "xs",
                    variant: "link",
                    background: "none",
                    px: "0",
                    onClick: () => {
                      _v45(), window.open("/settings/billing/purchases", "_blank"), _v50({
                        action_type: _v61.BillingActionTypes.CLICK,
                        location: _v61.BillingActionLocations.VIEW_PAST_PURCHASES_BUTTON
                      });
                    },
                    children: (0, _v1.jsx)(_v37.Text, {
                      variant: "body-sm",
                      color: "text-primary",
                      fontWeight: "350",
                      children: _v63.T.ViewPastPurchases
                    })
                  })]
                }), _v102?.disableOption && (0, _v1.jsx)(_v37.Text, {
                  variant: "body-sm",
                  color: "status-destructive-primary",
                  children: _v63.T.IncorrectPaymentMethodLink
                })]
              }), (0, _v1.jsxs)(_v13.VStack, {
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
                children: [(0, _v1.jsxs)(_v37.Text, {
                  variant: "heading-xs",
                  children: [_v63.T.AccountUsage, (0, _v1.jsxs)(_v29.Popover, {
                    trigger: "click",
                    children: [(0, _v1.jsx)(_v32.PopoverTrigger, {
                      children: (0, _v1.jsx)("span", {
                        children: (0, _v1.jsx)(_v40.InfoCircle, {
                          color: "text-tertiary",
                          boxSize: "2xs",
                          verticalAlign: "top",
                          position: "relative",
                          ml: "4px",
                          top: "2px"
                        })
                      })
                    }), (0, _v1.jsx)(_v31.PopoverContent, {
                      maxWidth: "200px",
                      children: (0, _v1.jsx)(_v30.PopoverBody, {
                        textStyle: "body-md",
                        children: _v10.isImpactedByGermanConsumerLaw ? _v63.T.AccountUsageGerman : _v63.T.AccountUsageNonGerman
                      })
                    })]
                  })]
                }), (0, _v1.jsxs)(_v13.VStack, {
                  spacing: 2,
                  children: [(0, _v1.jsx)(_v34.Radio, {
                    id: _v62.UserEntity.Personal,
                    isChecked: _v60.isPersonalChecked,
                    value: _v62.UserEntity.Personal,
                    size: "md",
                    onChange: _v0 => _v94(_v0),
                    children: _v63.T.Personal
                  }, _v62.UserEntity.Personal), (0, _v1.jsx)(_v34.Radio, {
                    id: _v62.UserEntity.Business,
                    isChecked: _v60.isBusinessChecked,
                    value: _v62.UserEntity.Business,
                    size: "md",
                    onChange: _v0 => _v94(_v0),
                    children: _v63.T.Business
                  }, _v62.UserEntity.Business)]
                }), (0, _v1.jsx)(_v72, {
                  trackBillingAction: _v50,
                  shouldDisplayModal: _v58,
                  setShouldDisplayModal: _v59,
                  selectedRadioValue: _v60.selectedRadioValue,
                  confirmPersonalUser: () => {
                    _v50({
                      action_type: _v61.BillingActionTypes.CLICK,
                      location: _v61.BillingActionLocations.PERSONAL_ACCOUNT_USAGE_MODAL_CONFIRM_BUTTON
                    }), _v10.userEntity === _v62.UserEntity.Business && _v10.hasAutorenew && (_v15 ? (_v36(!0), _v91(!1)) : (0, _v42.submitOptOutRequest)({
                      token: _v68,
                      userEntity: _v62.UserEntity.Personal
                    })), _v61(_v0 => ({
                      ..._v0,
                      isPersonalChecked: !0
                    })), _v59(!1);
                  },
                  optInForBusinessUser: () => {
                    _v50({
                      action_type: _v61.BillingActionTypes.CLICK,
                      location: _v61.BillingActionLocations.BUSINESS_ACCOUNT_USAGE_MODAL_ENABLE_AUTORENEW_BUTTON
                    }), _v61(_v0 => ({
                      ..._v0,
                      isBusinessChecked: !0
                    })), _v10.hasAutorenew || (_v93(), _v37({
                      ..._v10,
                      hasAutorenew: !0
                    })), _v59(!1);
                  },
                  optOutForBusinessUser: () => {
                    _v50({
                      action_type: _v61.BillingActionTypes.CLICK,
                      location: _v61.BillingActionLocations.BUSINESS_ACCOUNT_USAGE_MODAL_KEEP_AUTORENEW_OFF_BUTTON
                    }), _v61(_v0 => ({
                      ..._v0,
                      isBusinessChecked: !0
                    })), _v10.hasAutorenew && (_v15 ? (_v36(!0), _v91(!1)) : (0, _v42.submitOptOutRequest)({
                      token: _v68
                    })), _v59(!1);
                  }
                })]
              }), _v83 && (0, _v1.jsxs)(_v13.VStack, {
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
                children: [(0, _v1.jsx)(_v10.Flex, {
                  flexDirection: _v115,
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  children: (0, _v1.jsxs)(_v37.Text, {
                    variant: "heading-xs",
                    children: [_v63.T.BillingAddress, (0, _v1.jsxs)(_v25.Elements, {
                      stripe: _v88,
                      options: _v87,
                      children: [(0, _v1.jsx)(_v8.Button, {
                        marginLeft: "2",
                        size: "xs",
                        variant: "tertiary",
                        color: "status-info-primary",
                        display: "inline",
                        onClick: () => {
                          _v82(_v0 => _v0 + 1), _v78();
                        },
                        children: _v63.T.Update
                      }), (0, _v1.jsx)(_v99, {
                        onUpdateBillingAddress: _v0 => {
                          _v84(_v0);
                        },
                        isOpen: _v77,
                        onClose: () => {
                          _v79();
                        }
                      }, _v81)]
                    })]
                  })
                }), (0, _v1.jsxs)(_v37.Text, {
                  variant: "body-sm",
                  color: "text-primary",
                  fontWeight: "350",
                  children: [_v83.firstName, " ", _v83.lastName]
                }), (0, _v1.jsx)(_v37.Text, {
                  variant: "body-sm",
                  color: "text-primary",
                  fontWeight: "350",
                  children: [_v83?.line1, _v83?.line2, _v83?.city, _v83?.state, _v83?.postalCode, _v83?.country].filter(_v0 => "string" == typeof _v0 && "" !== _v0).join(", ")
                })]
              }), !_v26 && !_v29 && (0, _v1.jsx)(_v10.Flex, {
                justifyContent: "flex-start",
                mt: 6,
                hidden: !_v119 && !_v120 && !_v121,
                children: (0, _v1.jsxs)(_v13.VStack, {
                  align: "flex-start",
                  spacing: 4,
                  flexGrow: 1,
                  width: {
                    base: "100%",
                    lg: "33%"
                  },
                  px: "lg",
                  py: "md",
                  children: [(0, _v1.jsxs)(_v10.Flex, {
                    align: "center",
                    gap: 1,
                    flexWrap: "wrap",
                    justifyContent: "flex-start",
                    children: [(0, _v1.jsx)(_v154, {
                      ..._v143
                    }), _v121 && (0, _v1.jsxs)(_v1.Fragment, {
                      children: [(0, _v1.jsx)(_v37.Text, {
                        variant: "body-sm",
                        color: "text-secondary",
                        children: _v63.T.Or
                      }), (0, _v1.jsx)(_v152.StyledWithdrawSubscriptionButton, {
                        variant: "hyperminimal",
                        onClick: () => {
                          _v48({
                            tier: _v10.tierForDisplay,
                            periodicity: _v10.nextCycle?.billingPeriod
                          }), _v123();
                        },
                        children: _v63.T.WithdrawFromSubscription
                      })]
                    })]
                  }), _v120 && (0, _v1.jsx)(_v156, {
                    showPostCancelSurvey: _v75,
                    setShowPostCancelSurvey: _v76,
                    membership: _v10,
                    teamUser: _v22
                  })]
                })
              })]
            }), _v26 && (0, _v1.jsx)(_v7.Box, {
              display: {
                base: "block",
                md: "none"
              },
              mt: 6,
              children: (0, _v1.jsx)(_v8.Button, {
                variant: "primary",
                size: "sm",
                onClick: _v52,
                width: "auto",
                children: _v63.T.ChangePlan
              })
            }), _v71 && (0, _v1.jsx)(_v92, {
              isOpen: _v125,
              onClose: _v126,
              planName: _v10.tierForDisplay,
              renewalPrice: _v130,
              loading: _v8,
              enableAutoRenew: _v93,
              tier: _v10.tier,
              billingPeriod: _v10.billingPeriod
            }), _v121 && (0, _v1.jsx)(_v181, {
              membership: _v10,
              isOpen: _v122,
              onClose: _v124
            })]
          }), _v33 && (0, _v1.jsx)(_v167, {
            scheduledOrder: _v25,
            membership: _v10,
            onSuccess: () => {
              window.location.reload();
            },
            onError: _v0 => {
              _v34({
                canShow: !0,
                type: "negative",
                text: _v0 ?? _v63.T.SomethingWentWrong
              });
            }
          })]
        }), (_v26 || _v29) && (0, _v1.jsxs)(_v7.Box, {
          bg: "fill-surface",
          borderRadius: "md",
          border: "1px solid",
          borderColor: "background",
          px: "lg",
          py: "md",
          mt: 6,
          hidden: !_v119 && !_v120 && !_v121,
          children: [(0, _v1.jsxs)(_v10.Flex, {
            alignItems: "center",
            gap: 0,
            display: _v119 || _v121 ? "inline-flex" : "none",
            children: [_v119 && (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsx)(_v37.Text, {
                variant: "body-sm",
                color: "text-secondary",
                whiteSpace: "nowrap",
                pr: "2px",
                children: _v63.T.CancelSubscriptionFooterPrefix
              }), (0, _v1.jsx)(_v154, {
                ..._v143
              })]
            }), _v119 && _v121 && (0, _v1.jsx)(_v37.Text, {
              variant: "body-sm",
              color: "text-secondary",
              pl: "2px",
              pr: "2px",
              children: _v63.T.Or
            }), _v121 && (0, _v1.jsx)(_v152.StyledWithdrawSubscriptionButton, {
              variant: "hyperminimal",
              onClick: () => {
                _v48({
                  tier: _v10.tierForDisplay,
                  periodicity: _v10.nextCycle?.billingPeriod
                }), _v123();
              },
              children: _v63.T.WithdrawFromSubscription
            })]
          }), _v120 && (0, _v1.jsx)(_v156, {
            showPostCancelSurvey: _v75,
            setShowPostCancelSurvey: _v76,
            membership: _v10,
            teamUser: _v22
          })]
        }), "function" == typeof _v0 ? _v0({
          hasScheduledDowngrade: _v26
        }) : _v0, (0, _v1.jsx)(_v175, {
          isOpen: _v135,
          onClose: () => _v136(!1),
          onBack: () => {
            (_v136(!1), _v141) ? _v142(!1) : _v140(_v0 => _v0 + 1);
          },
          cancelRequestPending: _v134,
          onDecline: () => {
            _v137?.();
          },
          onSuccess: () => {
            window.location.reload();
          },
          onError: _v0 => {
            _v34({
              canShow: !0,
              type: "negative",
              text: _v0 ?? _v63.T.SomethingWentWrong
            });
          },
          scheduledOrder: _v25,
          membership: _v10,
          onRequestIndividualPlans: _v1 ? () => {
            _v136(!1), _v1();
          } : void 0
        }), _v31 && "billing" === _v19.corporate_upgrade_modal_page && (0, _v1.jsx)(_v157.CorporateUpgradeModal, {
          productName: _v25?.productName ?? _v10.tierForDisplay
        })]
      });
    },
    _v186 = "RENEWAL_SUCCESSFUL",
    _v187 = "RENEWAL_FAILED",
    _v188 = ({
      locale: _v0,
      membership: _v1,
      noticeType: _v2,
      onClose: _v3
    }) => {
      let _v4 = _v1.tierForDisplay,
        _v5 = _v2 === _v186,
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
        children: _v5 ? _v63.T.RenewalNotice.Success(_v4, _v6.format(_v7)) : _v63.T.RenewalNotice.Failure(_v4, _v6.format(_v7), `/checkout/${_v1.tier}/renew-now`)
      });
    };
  var _v189 = _v0.i(0),
    _v190 = _v0.i(0),
    _v191 = _v0.i(0);
  async function _v192({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      userId: _v3
    },
    ..._v4
  }) {
    return (0, _v93.measureLatency)("patchUserSeats", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v3}/seats?fields=${_v1.map(_v94.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "PATCH",
        body: JSON.stringify((0, _v94.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v94.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v94.deepCamelCase)(_v1);
    });
  }
  function _v193() {
    let {
        mutate: _v0
      } = (0, _v48.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v50.useGctlConfig)(),
      [_v5, _v6] = (0, _v49.useInternalState)();
    return [(0, _v3.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/seats${(0, _v49.serializeQuery)(_v0)}`, _v192({
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
  function _v194({
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
      } = (0, _v3.useContext)(_v91.ManageTeamStateCtx),
      {
        removeUnassignedSeats: _v6,
        showNotice: _v7,
        updateIsMembershipLoading: _v8,
        updateIsOperationOngoing: _v9,
        updateIsRemoveSeatsConfirmation: _v10
      } = (0, _v3.useContext)(_v91.ManageTeamDispatchCtx),
      {
        trackBillingAction: _v11
      } = (0, _v3.useContext)(_v91.ManageTeamAnalytics),
      [_v12, _v13] = _v193(),
      _v14 = (0, _v3.useContext)(_v60.ViewerContext),
      _v15 = _v14?.teamUser?.ownerId || _v14?.user?.id || 0,
      _v16 = () => {
        _v9(!1), _v10(!1), _v0();
      },
      _v17 = async () => {
        let _v0 = (_v3?.nextCycle?.seatCount || 0) - _v4;
        if (_v9(!0), _v11({
          action_type: _v61.BillingActionTypes.CLICK,
          location: _v61.BillingActionLocations.REMOVE_SEATS_MODAL_CONFIRM_DELETE_BUTTON
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
        text: _v63.T.InviteForm.ServerError
      }), _v16()), _v5 && _v13?.data && (_v13?.data?.nextCycle?.seatCount || 0) < _v3?.nextCycle?.seatCount && (_v6(_v5.currentUnassignedCount - _v4), _v1 || (_v8(!0), _v16()), _v7({
        canShow: !0,
        type: "positive",
        text: _v63.T.DeleteSeatsSuccess(_v4)
      }));
    }, [_v13, _v2]);
    let _v18 = new Date().getTime(),
      _v19 = Math.round(Math.abs((new Date(_v3?.renewalDate).getTime() - _v18) / 0));
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v85.ModalOverlay, {}), (0, _v1.jsxs)(_v86.ModalContent, {
        children: [(0, _v1.jsx)(_v87.ModalHeader, {
          children: ` ${_v63.T.DeleteSeatsConfirmation(_v4)} `
        }), (0, _v1.jsx)(_v90.ModalCloseButton, {
          top: "8px",
          right: "8px",
          onClick: _v0
        }), (0, _v1.jsxs)(_v89.ModalBody, {
          children: [(0, _v1.jsx)(_v37.Text, {
            marginBottom: (0, _v14.rem)(12),
            variant: "body-md",
            children: ` ${_v63.T.DeleteSeatsSummary(_v19)} `
          }), (0, _v1.jsx)(_v37.Text, {
            variant: "body-md",
            children: ` ${_v63.T.DeleteSeatsWarning} `
          })]
        }), (0, _v1.jsxs)(_v88.ModalFooter, {
          children: [(0, _v1.jsx)(_v8.Button, {
            variant: "tertiary",
            isDisabled: _v2,
            onClick: _v0,
            children: _v63.T.Cancel
          }), (0, _v1.jsx)(_v8.Button, {
            isLoading: _v2,
            onClick: _v17,
            variant: "destructive",
            children: _v63.T.ConfirmDeleteSeats
          })]
        })]
      })]
    });
  }
  "true" === _v45.default.env.STORYBOOK && (0, _v49.assignMswData)(_v193, {
    endpoint: "/users/:userId/seats",
    method: "PATCH"
  });
  let _v195 = _v3.default.memo(() => {
    let {
        updateIsRemoveSeatsConfirmation: _v0
      } = (0, _v3.useContext)(_v91.ManageTeamDispatchCtx),
      _v1 = () => _v0(!1);
    return (0, _v1.jsx)(_v84.Modal, {
      isOpen: !0,
      onClose: _v1,
      children: (0, _v1.jsx)(_v194, {
        closeModal: _v1
      })
    });
  });
  var _v196 = _v0.i(0),
    _v197 = _v0.i(0),
    _v198 = _v0.i(0),
    _v199 = _v0.i(0);
  let _v200 = _v65.default.div.withConfig({
      displayName: "style__ModalContent",
      componentId: "sc-11114d88-0"
    })`
  ${({
      theme: _v0
    }) => _v0.shadows[200]}
  position: relative;
  padding: ${(0, _v64.rem)(22)} ${(0, _v64.rem)(24)};
  border-radius: ${(0, _v64.rem)(8)};
  background: ${_v196.core.color.surface(500)};
  transform: translate(0%, 0%);

  min-width: ${(0, _v64.rem)(500)};
  ${_v198.media.xmd`
    min-width: ${(0, _v64.rem)(500)};
  `}
`,
    _v201 = (0, _v65.default)(_v68.Button).withConfig({
      displayName: "style__StyledDeleteSeatsButton",
      componentId: "sc-11114d88-1"
    })`
  min-width: ${(0, _v64.rem)(82)};
  padding: 0;
  margin-left: ${(0, _v64.rem)(-5)};
  font-size: ${(0, _v64.rem)(12)};
  font-weight: 700;
  color: ${(0, _v102.red)(600)};

  &:hover {
    color: ${(0, _v102.red)(600)};
  }
`,
    _v202 = (0, _v65.default)(_v69.Modal).withConfig({
      displayName: "style__StyledModal",
      componentId: "sc-11114d88-2"
    })`
  box-shadow: none;
  min-height: ${(0, _v64.rem)(350)};
`,
    _v203 = (0, _v65.default)(_v70.Paragraph).withConfig({
      displayName: "style__DisableRemoveSeatsModalParagraph",
      componentId: "sc-11114d88-3"
    })`
  color: ${_v197.color.text.secondary};

  a {
    color: ${_v197.color.text.secondary};
  }
`,
    _v204 = _v65.default.div.withConfig({
      displayName: "style__TextSection",
      componentId: "sc-11114d88-4"
    })`
  margin: ${(0, _v64.rem)(48)} ${(0, _v64.rem)(17)} ${(0, _v64.rem)(48)} ${(0, _v64.rem)(36)};
`,
    _v205 = (0, _v65.default)(_v199.CloseButton).withConfig({
      displayName: "style__StyledCloseButton",
      componentId: "sc-11114d88-5"
    })`
  padding: 0;
  margin: ${(0, _v64.rem)(8)} 0;
`;
  function _v206({
    closeModal: _v0
  }) {
    return (0, _v1.jsxs)(_v200, {
      children: [(0, _v1.jsx)(_v205, {
        className: "invite-modal-close-button",
        onClick: _v0
      }), (0, _v1.jsx)(_v204, {
        children: (0, _v1.jsx)(_v203, {
          size: "2",
          children: _v63.T.DisableSeatDeletion("/help/contact", () => void 0)
        })
      })]
    });
  }
  let _v207 = _v3.default.memo(({
    onClick: _v0
  }) => {
    let [_v1, _v2] = (0, _v3.useState)(!1),
      {
        trackBillingAction: _v3
      } = (0, _v3.useContext)(_v91.ManageTeamAnalytics),
      _v4 = (0, _v3.useCallback)(() => (0, _v1.jsx)(_v206, {
        closeModal: () => _v2(!1)
      }), []);
    return (0, _v1.jsx)(_v202, {
      active: _v1,
      content: _v4(),
      onOpen: () => _v2(!1),
      children: (0, _v1.jsx)(_v201, {
        variant: "hyperminimal",
        onClick: () => {
          _v0?.(), _v2(!0), _v3({
            action_type: _v61.BillingActionTypes.CLICK,
            location: _v61.BillingActionLocations.DELETE_SEATS_BUTTON
          });
        },
        children: _v63.T.DeleteSeats
      })
    });
  });
  var _v208 = _v0.i(0);
  function _v209() {
    let {
        membership: _v0,
        seatCount: _v1,
        teamInfo: {
          seatDetails: _v2
        }
      } = (0, _v3.useContext)(_v91.ManageTeamStateCtx),
      _v3 = new Date(_v0.renewalDate).toLocaleDateString(navigator.language || "en-US", {
        year: "2-digit",
        month: "2-digit",
        day: "2-digit"
      }),
      _v4 = _v2?.additionalPurchasedCount || _v0.seatCount - _v61.OWNER,
      _v5 = _v0.additionalSeatPrice ?? _v0.pricePerSeat,
      _v6 = _v0.additionalSeatPriceForDisplay ?? _v0.pricePerSeatForDisplay,
      _v7 = null != _v0.additionalSeatPrice && null != _v0.basePlanPrice,
      _v8 = _v0.nextCycle?.seatCount - _v1,
      _v9 = _v7 ? _v0.basePlanPrice + Math.max(0, _v8 - 1) * _v5 : _v5 * _v8;
    return (0, _v1.jsxs)(_v7.Box, {
      backgroundColor: "background",
      gap: (0, _v14.rem)("8px"),
      padding: (0, _v14.rem)("12px"),
      borderRadius: "md",
      children: [(0, _v1.jsxs)(_v7.Box, {
        display: "flex",
        justifyContent: "space-between",
        children: [(0, _v1.jsxs)(_v7.Box, {
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          paddingBottom: (0, _v14.rem)("12px"),
          children: [(0, _v1.jsx)(_v37.Text, {
            variant: "heading-xs",
            children: _v63.T.DueAtRenewal
          }), (0, _v1.jsx)(_v37.Text, {
            variant: "body-sm",
            children: _v63.T.SeatPriceDetails(_v4 - _v1, _v6, _v0.billingPeriod === _v62.UserPlanType.Month ? _v63.T.Monthly : _v63.T.Annually)
          })]
        }), (0, _v1.jsxs)(_v7.Box, {
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          children: [(0, _v1.jsx)(_v37.Text, {
            variant: "heading-xs",
            children: (0, _v118.formatAmountWithCurrency)(_v9, _v0.currency, 2)
          }), (0, _v1.jsx)(_v37.Text, {
            variant: "body-sm",
            children: _v63.T.PlusSignTax
          })]
        })]
      }), (0, _v1.jsx)(_v208.Divider, {
        borderColor: "stroke"
      }), (0, _v1.jsx)(_v7.Box, {
        display: "flex",
        justifyContent: "space-between",
        paddingTop: (0, _v14.rem)("12px"),
        children: (0, _v1.jsx)(_v7.Box, {
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          children: (0, _v1.jsx)(_v37.Text, {
            variant: "body-sm",
            children: _v63.T.RenewsOnDate(_v3)
          })
        })
      })]
    });
  }
  var _v210 = _v0.i(0);
  function _v211() {
    let [_v0, _v1] = (0, _v3.useState)(1),
      {
        invitesRemaining: _v2,
        teamInfo: {
          seatDetails: _v3
        }
      } = (0, _v3.useContext)(_v91.ManageTeamStateCtx),
      {
        updateSeatCount: _v4
      } = (0, _v3.useContext)(_v91.ManageTeamDispatchCtx);
    (0, _v3.useEffect)(() => {
      _v4(_v0);
    }, [_v0, _v4]);
    let _v5 = _v3?.additionalPurchasedCount || _v2;
    return (0, _v1.jsxs)(_v7.Box, {
      display: "flex",
      alignItems: "baseline",
      children: [(0, _v1.jsxs)(_v210.NumberInput, {
        border: "input-stroke",
        defaultValue: 1,
        min: 1,
        max: _v5,
        size: "sm",
        width: (0, _v14.rem)("78px"),
        marginRight: (0, _v14.rem)("10px"),
        onChange: _v0 => _v1(Number(_v0)),
        children: [(0, _v1.jsx)(_v210.NumberInputField, {
          value: _v0
        }), (0, _v1.jsxs)(_v210.NumberInputStepper, {
          children: [(0, _v1.jsx)(_v210.NumberIncrementStepper, {
            _disabled: {
              color: "stroke"
            }
          }), (0, _v1.jsx)(_v210.NumberDecrementStepper, {
            _disabled: {
              color: "stroke"
            }
          })]
        })]
      }), (0, _v1.jsx)(_v11.Header, {
        as: "h6",
        size: "xs",
        children: _v63.T.SeatDenominator(_v5)
      })]
    });
  }
  function _v212() {
    return (0, _v1.jsxs)(_v7.Box, {
      paddingBottom: (0, _v14.rem)(24),
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      children: [(0, _v1.jsx)(_v11.Header, {
        as: "h6",
        size: "xs",
        alignItems: "flex-start",
        children: _v63.T.NumberOfSeats
      }), (0, _v1.jsx)(_v211, {})]
    });
  }
  function _v213({
    closeModal: _v0
  }) {
    let {
      updateIsRemoveSeatsConfirmation: _v1
    } = (0, _v3.useContext)(_v91.ManageTeamDispatchCtx);
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v85.ModalOverlay, {}), (0, _v1.jsxs)(_v86.ModalContent, {
        children: [(0, _v1.jsx)(_v87.ModalHeader, {
          fontSize: "heading-md",
          children: ` ${_v63.T.RemoveUnassignedSeats} `
        }), (0, _v1.jsx)(_v90.ModalCloseButton, {
          top: "8px",
          right: "8px",
          onClick: _v0
        }), (0, _v1.jsxs)(_v89.ModalBody, {
          children: [(0, _v1.jsx)(_v212, {}), (0, _v1.jsx)(_v209, {}), (0, _v1.jsx)(_v7.Box, {
            paddingTop: (0, _v14.rem)("16px"),
            fontSize: "body-sm",
            color: "text-secondary",
            children: _v63.T.TermsConditionsPrivacyPolicy("/terms", "/privacy", () => void 0)
          })]
        }), (0, _v1.jsxs)(_v88.ModalFooter, {
          display: "block",
          children: [(0, _v1.jsx)(_v8.Button, {
            width: "100%",
            variant: "destructive",
            onClick: () => {
              _v1(!0), _v0();
            },
            children: _v63.T.DeleteSeats
          }), (0, _v1.jsx)(_v8.Button, {
            marginTop: (0, _v14.rem)(8),
            width: "100%",
            variant: "tertiary",
            onClick: _v0,
            children: _v63.T.InviteForm.Cancel
          })]
        })]
      })]
    });
  }
  let _v214 = _v3.default.memo(({
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
        } = (0, _v3.useContext)(_v91.ManageTeamAnalytics);
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v8.Button, {
          alignSelf: "flex-end",
          _hover: {
            backgroundColor: "transparent"
          },
          backgroundColor: "transparent",
          textColor: "status-destructive-primary",
          textDecoration: "underline",
          onClick: () => {
            _v0?.(), _v2(), _v4({
              action_type: _v61.BillingActionTypes.CLICK,
              location: _v61.BillingActionLocations.DELETE_SEATS_BUTTON
            });
          },
          children: _v63.T.DeleteSeats
        }), (0, _v1.jsx)(_v84.Modal, {
          isOpen: _v1,
          onClose: _v3,
          children: (0, _v1.jsx)(_v213, {
            closeModal: _v3
          })
        })]
      });
    }),
    _v215 = ({
      size: _v0
    }) => {
      let [_v1, _v2] = (0, _v3.useState)(!1),
        _v3 = (0, _v3.useRef)(0),
        {
          trackBillingAction: _v4
        } = (0, _v3.useContext)(_v91.ManageTeamAnalytics),
        {
          showBillingPageLinkoutNotice: _v5
        } = (0, _v3.useContext)(_v91.ManageTeamDispatchCtx),
        {
          membership: _v6
        } = (0, _v3.useContext)(_v91.ManageTeamStateCtx),
        _v7 = "advanced" === _v6.tier ? "/enterprise/contact-us" : "/upgrade",
        _v8 = (0, _v3.useCallback)(() => {
          if (!window) return !1;
          _v4({
            action_type: _v61.BillingActionTypes.CLICK,
            location: _v61.BillingActionLocations.UPGRADE_BUTTON
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
      }, [_v1, _v5]), (0, _v1.jsx)(_v8.Button, {
        variant: "upsell",
        size: _v0,
        onClick: _v8,
        children: _v63.T.UpgradeButton
      });
    },
    _v216 = ({
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
        } = (0, _v3.useContext)(_v91.ManageTeamStateCtx),
        {
          fetchTeamInfo: _v17,
          updateModalToDisplay: _v18,
          updateBillingPageNotice: _v19,
          updateIsMembershipLoading: _v20
        } = (0, _v3.useContext)(_v91.ManageTeamDispatchCtx),
        {
          trackBillingAction: _v21
        } = (0, _v3.useContext)(_v91.ManageTeamAnalytics),
        {
          trackBillingPageAddSeatsClicked: _v22
        } = (0, _v20.useBillingTracking)(),
        {
          reason: _v23
        } = (0, _v191.useIsSeatChangeBlocked)({
          tier: _v8.tier,
          hasScheduledDowngrade: _v0
        }),
        _v24 = [];
      "scheduled_downgrade" === _v23 && _v24.push(_v63.T.AddSeatsDowngradeTooltip), "tier_restricted" === _v23 && _v24.push(_v63.T.AddSeatsBusinessTierTooltip), _v8.isReverseFreeTrial && _v24.unshift(_v63.T.AddSeatsReverseTrialTooltip);
      let _v25 = _v24.length > 0,
        _v26 = _v8.seatCapTrial || _v10?.basePlanCount || 0,
        _v27 = _v8.isFreeTrial ? _v26 : _v8.seatCapPaid,
        _v28 = _v11 || _v8.seatCount,
        _v29 = (_v15 ? _v9 : _v11) || _v11,
        _v30 = _v61.OWNER + _v13 + _v14 + _v1,
        _v31 = _v10 ? Math.max(0, _v10?.totalPurchasedCount - _v61.OWNER) : _v30 - _v61.OWNER,
        _v32 = (0, _v3.useCallback)(() => 0 === _v31 || 0 === _v1 || _v8.tier && _v33(_v8.tier) ? null : _v1 > 0 && _v8.status === _v62.AccountStatus.Active && (_v8?.billingPeriod === _v62.UserPlanType.Month || _v8?.isFreeTrial ? (0, _v1.jsx)(_v214, {}) : (0, _v1.jsx)(_v207, {})), [_v1, _v8, _v31]);
      function _v33(_v0) {
        return _v62.SolutionTiers.includes(_v0);
      }
      let _v34 = (0, _v38.useBreakpointValue)({
          base: "column",
          md: "row"
        }),
        _v35 = (0, _v38.useBreakpointValue)({
          base: 1,
          md: 2,
          lg: 4
        }),
        _v36 = (0, _v38.useBreakpointValue)({
          base: 32,
          md: 25,
          lg: 4
        });
      return _v6 || _v7 || _v3 || _v2 ? (0, _v1.jsx)(_v35.Skeleton, {
        marginTop: (0, _v14.rem)(26),
        height: (0, _v14.rem)(259)
      }) : (0, _v1.jsx)(_v7.Box, {
        display: "flex",
        justifyContent: "space-between",
        p: 6,
        mt: 6,
        bg: "fill-surface",
        borderRadius: "md",
        border: "1px solid",
        borderColor: "background",
        children: (0, _v1.jsxs)(_v7.Box, {
          width: "100%",
          children: [(0, _v1.jsxs)(_v10.Flex, {
            justifyContent: "space-between",
            mb: 4,
            direction: {
              base: "column",
              md: "row"
            },
            children: [(0, _v1.jsx)(_v37.Text, {
              variant: "heading-md",
              mb: {
                base: 4,
                md: 0
              },
              children: "Lapsed" === _v8.status || _v8.tier === _v62.Tier.Free || _v16?.space?.unit === "video_size" ? _v63.T.SeatCount(_v11) : _v63.T.PaidSeats(_v8.nextCycle?.seatCount ?? _v30)
            }), _v8.tier && !_v33(_v8.tier) ? (0, _v1.jsx)(_v189.Tooltip, {
              shouldWrapChildren: !0,
              isDisabled: !_v25,
              label: _v25 ? _v24[0] : void 0,
              children: (0, _v1.jsx)(_v8.Button, {
                variant: "secondary",
                size: "sm",
                onClick: () => {
                  _v25 || (_v22(), _v21({
                    action_type: _v61.BillingActionTypes.CLICK,
                    location: _v61.BillingActionLocations.ADD_SEATS_BUTTON
                  }), _v18({
                    currentModalInDisplay: _v62.TeamManagementModals.PURCHASE_SEATS_MODAL,
                    data: {
                      purchaseSeatModalLocation: _v23.PURCHASE_TRIGGERED_FROM.BILLING_PAGE_ADD_SEATS,
                      onPurchaseSuccess: _v0 => {
                        _v19(_v23.NOTICE_TYPES.PURCHASE_SUCCESSFULL_WITH_SEATS), _v18({
                          currentModalInDisplay: null,
                          data: {
                            seatsCount: _v0
                          }
                        }), _v20(!0), _v17();
                      }
                    }
                  }));
                },
                isDisabled: _v25 || _v4 || _v8.tier === _v62.Tier.Free || _v8.tier === _v62.Tier.CustomSelfServe || _v8.status === _v62.AccountStatus.Lapsed || _v29 > 0 && _v12 + _v61.OWNER >= _v29 || _v27 > 0 && _v28 >= _v27,
                mb: {
                  base: 4,
                  md: 0
                },
                children: _v63.T.AddSeats
              })
            }) : (0, _v1.jsx)(_v190.Container, {
              bg: "upsell-secondary",
              borderRadius: "sm",
              children: (0, _v1.jsxs)(_v12.HStack, {
                justifyContent: "space-between",
                px: (0, _v14.rem)(10),
                py: (0, _v14.rem)(8),
                children: [(0, _v1.jsx)(_v37.Text, {
                  variant: "body-sm",
                  children: _v63.T.UpgradeToAddSeats
                }), (0, _v1.jsx)(_v215, {
                  size: "xs"
                })]
              })
            })]
          }), (0, _v1.jsxs)(_v10.Flex, {
            direction: _v34,
            wrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-start",
            children: [(0, _v1.jsxs)(_v13.VStack, {
              align: "flex-start",
              flexBasis: `calc(100% / ${_v35})`,
              mb: _v36,
              children: [(0, _v1.jsxs)(_v12.HStack, {
                alignItems: "center",
                children: [(0, _v1.jsx)(_v37.Text, {
                  variant: "heading-xs",
                  mb: 1,
                  children: _v63.T.Owner
                }), (0, _v1.jsxs)(_v29.Popover, {
                  trigger: "click",
                  children: [(0, _v1.jsx)(_v32.PopoverTrigger, {
                    children: (0, _v1.jsx)("span", {
                      children: (0, _v1.jsx)(_v40.InfoCircle, {
                        color: "text-tertiary",
                        boxSize: "2xs",
                        verticalAlign: "top",
                        position: "relative",
                        top: "2px"
                      })
                    })
                  }), (0, _v1.jsx)(_v31.PopoverContent, {
                    maxWidth: "200px",
                    children: (0, _v1.jsx)(_v30.PopoverBody, {
                      textStyle: "body-md",
                      children: _v63.T.OwnerToolTip
                    })
                  })]
                })]
              }), (0, _v1.jsx)(_v37.Text, {
                variant: "heading-md",
                children: _v61.OWNER
              })]
            }), (0, _v1.jsxs)(_v13.VStack, {
              align: "flex-start",
              flexBasis: `calc(100% / ${_v35})`,
              mb: _v36,
              children: [(0, _v1.jsx)(_v37.Text, {
                variant: "heading-xs",
                mb: 1,
                children: _v63.T.Admins
              }), (0, _v1.jsx)(_v37.Text, {
                variant: "heading-md",
                children: _v13
              })]
            }), (0, _v1.jsxs)(_v13.VStack, {
              align: "flex-start",
              flexBasis: `calc(100% / ${_v35})`,
              mb: _v36,
              children: [(0, _v1.jsx)(_v37.Text, {
                variant: "heading-xs",
                mb: 1,
                children: _v63.T.Contributors
              }), (0, _v1.jsx)(_v37.Text, {
                variant: "heading-md",
                children: _v14
              })]
            }), (0, _v1.jsxs)(_v13.VStack, {
              align: "flex-start",
              flexBasis: `calc(100% / ${_v35})`,
              children: [(0, _v1.jsx)(_v37.Text, {
                variant: "heading-xs",
                mb: 1,
                children: _v63.T.Unassigned
              }), (0, _v1.jsx)(_v37.Text, {
                variant: "heading-md",
                children: _v1
              })]
            })]
          }), (0, _v1.jsxs)(_v10.Flex, {
            justifyContent: {
              base: "center",
              md: "flex-end"
            },
            children: [_v32(), _v5 && (0, _v1.jsx)(_v195, {})]
          })]
        })
      });
    };
  var _v217 = _v0.i(0),
    _v218 = _v0.i(0);
  function _v219({
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
          children: (0, _v1.jsx)(_v15.CircleExclamationFilled, {
            color: "status-caution-primary"
          })
        }), (0, _v1.jsxs)(_v12.HStack, {
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          children: [(0, _v1.jsx)(_v5.AlertDescription, {
            children: _v1 ? (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v218.translate)({
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
              }), " ", (0, _v1.jsx)(_v37.Text, {
                as: "span",
                fontWeight: "medium",
                children: _v0
              }), " ", (0, _v218.translate)({
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
              children: [(0, _v218.translate)({
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
              }), " ", (0, _v1.jsx)(_v37.Text, {
                as: "span",
                fontWeight: "medium",
                children: _v0
              }), " ", (0, _v218.translate)({
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
          }), _v2 && (0, _v1.jsx)(_v8.Button, {
            variant: "secondary",
            background: "white",
            size: "xs",
            flexShrink: 0,
            onClick: _v2,
            children: (0, _v218.translate)({
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
            "aria-label": (0, _v218.translate)({
              singular: "Dismiss notice",
              dictionary: {
                es: {
                  singular: "Descartar aviso"
                },
                "de-DE": {
                  singular: "Hinweis schließen"
                },
                "fr-FR": {
                  singular: "Fermer la notification"
                },
                "ja-JP": {
                  singular: "通知を閉じる"
                },
                "ko-KR": {
                  singular: "알림 닫기"
                },
                "pt-BR": {
                  singular: "Fechar aviso"
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
      }), _v7 && (0, _v1.jsxs)(_v12.HStack, {
        mt: 2,
        gap: 1,
        px: 3,
        children: [(0, _v1.jsx)(_v37.Text, {
          variant: "body-sm",
          color: "text-tertiary",
          children: (0, _v218.translate)({
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
        }), _v3 ? (0, _v1.jsx)(_v8.Button, {
          variant: "tertiary",
          size: "xs",
          onClick: _v3,
          p: 0,
          textDecoration: "underline",
          children: (0, _v218.translate)({
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
        }) : (0, _v1.jsx)(_v8.Button, {
          variant: "tertiary",
          size: "xs",
          as: "a",
          href: _v4,
          p: 0,
          textDecoration: "underline",
          children: (0, _v218.translate)({
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
  var _v220 = _v0.i(0),
    _v221 = _v0.i(0),
    _v222 = _v0.i(0),
    _v223 = _v0.i(0),
    _v224 = _v0.i(0),
    _v225 = _v0.i(0),
    _v226 = _v0.i(0);
  let _v227 = ["creator", "core", "professional", "studio"],
    _v228 = ["creator", "core", "professional"],
    _v229 = ({
      isOpen: _v0,
      onClose: _v1,
      scheduledTier: _v2
    }) => {
      let _v3 = (0, _v3.useContext)(_v60.ViewerContext),
        {
          width: _v4
        } = (0, _v221.useWindowSize)(),
        _v5 = (0, _v3.useMemo)(() => function (_v0) {
          let _v1 = _v227.indexOf(_v0);
          if (-1 === _v1) return [];
          let _v2 = Math.max(0, _v1 - 1);
          return _v227.slice(_v2, _v2 + 3);
        }(_v2), [_v2]),
        {
          capabilities: {
            hasMonthlyBilling: _v6
          },
          ready: _v7
        } = (0, _v43.useCapability)(["hasMonthlyBilling"]),
        _v8 = !(_v7 && _v6),
        _v9 = (0, _v220.useCampaignIdOverride)(),
        {
          campaignId: _v10,
          isLoading: _v11
        } = (0, _v224.useRepackagingCampaign)(_v9),
        _v12 = _v9 ?? _v10,
        _v13 = (0, _v164.useGetSubscriptionPlansData)(void 0, void 0, !0, {
          bypassTierHierarchy: !0,
          ...(_v12 ? {
            campaignId: _v12
          } : {}),
          usePaymentsService: !0
        }),
        {
          data: _v14
        } = (0, _v225.useSubscriptionPlansUsageCheck)(_v5),
        _v15 = (0, _v3.useMemo)(() => ({
          plans: _v5,
          noBadge: !0,
          showMonthlyDropdown: !1,
          showCardBorder: !0
        }), [_v5]),
        _v16 = !!_v3?.user,
        _v17 = !!_v13 && _v7 && !_v11;
      return _v228.includes(_v2) && _v3 ? (0, _v1.jsxs)(_v84.Modal, {
        isOpen: _v0,
        onClose: _v1,
        children: [(0, _v1.jsx)(_v85.ModalOverlay, {}), (0, _v1.jsxs)(_v86.ModalContent, {
          maxW: {
            base: "95vw",
            md: (0, _v14.rem)(0)
          },
          children: [(0, _v1.jsx)(_v87.ModalHeader, {
            children: (0, _v1.jsx)(_v11.Header, {
              size: "lg",
              textAlign: "center",
              children: (0, _v218.translate)({
                singular: "Upgrade to unlock more video tools",
                dictionary: {
                  es: {
                    singular: "Cambie de plan para acceder a más herramientas de video"
                  },
                  "de-DE": {
                    singular: "Upgrade zur Freischaltung weiterer Video-Tools vornehmen"
                  },
                  "fr-FR": {
                    singular: "Mettre à niveau pour débloquer plus d'outils vidéo"
                  },
                  "ja-JP": {
                    singular: "アップグレードして、さらに多くの動画ツールをご利用ください"
                  },
                  "ko-KR": {
                    singular: "업그레이드하여 더 많은 동영상 도구를 이용하세요"
                  },
                  "pt-BR": {
                    singular: "Faça upgrade para acessar mais ferramentas de vídeo"
                  }
                }
              })
            })
          }), (0, _v1.jsx)(_v90.ModalCloseButton, {
            "aria-label": (0, _v218.translate)({
              singular: "Close",
              dictionary: {
                es: {
                  singular: "Cerrar"
                },
                "de-DE": {
                  singular: "Schließen"
                },
                "fr-FR": {
                  singular: "Fermer "
                },
                "ja-JP": {
                  singular: "閉じる"
                },
                "ko-KR": {
                  singular: "닫기"
                },
                "pt-BR": {
                  singular: "Fechar"
                },
                "zh-CN": {
                  singular: "关闭"
                }
              }
            })
          }), (0, _v1.jsx)(_v89.ModalBody, {
            children: _v17 ? (0, _v1.jsx)(_v222.OverridesContextProvider, {
              showYearly: _v8,
              viewer: _v3,
              overrides: _v15,
              children: (0, _v1.jsx)(_v223.PlansDataProvider, {
                overrides: _v15,
                plansData: _v13,
                isLoggedIn: _v16,
                capabilitiesReady: _v7,
                isPricingRedesign: !0,
                downgradeEnabled: !0,
                effectiveTier: _v2,
                upcomingTier: _v2,
                usageCheckData: _v14,
                hideIndividualPlans: !1,
                children: (0, _v1.jsx)(_v226.default, {
                  showYearly: _v8,
                  isBillingFreqToggleAvailable: !1,
                  showStrikePrice: !1,
                  isMobileBreakpoint: _v4 <= 0,
                  showCrossSellCard: !1
                })
              })
            }) : (0, _v1.jsx)(_v7.Box, {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: (0, _v14.rem)(320),
              children: (0, _v1.jsx)(_v36.Spinner, {})
            })
          }), (0, _v1.jsx)(_v88.ModalFooter, {
            justifyContent: "center",
            children: (0, _v1.jsx)(_v8.Button, {
              as: "a",
              variant: "tertiary",
              href: (0, _v19.buildUpgradePlanUrl)({
                paywallTrigger: "billing_card_change_plan_modal_see_all_plans",
                paywallLocation: "change_plan_modal",
                paywallFeature: "billing"
              }),
              children: (0, _v218.translate)({
                singular: "See all details and plans",
                dictionary: {
                  es: {
                    singular: "Ver todos los detalles y planes"
                  },
                  "de-DE": {
                    singular: "Alle Details und Pläne ansehen"
                  },
                  "fr-FR": {
                    singular: "Voir tous les détails et les forfaits"
                  },
                  "ja-JP": {
                    singular: "すべての詳細とプランを見る"
                  },
                  "ko-KR": {
                    singular: "세부 정보 및 요금제 모두 보기"
                  },
                  "pt-BR": {
                    singular: "Veja todos os detalhes e planos"
                  },
                  "zh-CN": {
                    singular: "查看所有详情与订阅计划"
                  }
                }
              })
            })
          })]
        })]
      }) : null;
    };
  var _v230 = _v0.i(0),
    _v231 = _v0.i(0),
    _v232 = _v0.i(0),
    _v233 = _v0.i(0),
    _v234 = _v0.i(0),
    _v235 = _v0.i(0);
  function _v236() {
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
      } = (0, _v3.useContext)(_v91.ManageTeamStateCtx),
      {
        showNotice: _v15,
        updateBillingPageNotice: _v16,
        showBillingPageLinkoutNotice: _v17
      } = (0, _v3.useContext)(_v91.ManageTeamDispatchCtx),
      _v18 = (0, _v3.useContext)(_v60.ViewerContext),
      [_v19, _v20] = (0, _v3.useState)(() => (0, _v24.parseLocationSearch)("rns")),
      {
        trackBillingPageRepackagingLearnMoreClicked: _v21
      } = (0, _v20.useBillingTracking)(),
      {
        trackIndividualEligibilityCtaClicked: _v22
      } = (0, _v21.useIndividualEligibilityTracking)(),
      {
        settings: _v23
      } = (0, _v18.useOrionSettings)(),
      {
        scheduledOrder: _v24,
        hasScheduledDowngrade: _v25,
        normalizedScheduledTier: _v26
      } = (0, _v103.useScheduledOrder)(_v7.subscriptionId, _v7.tier, _v7.hasAutorenew),
      {
        areBusinessPlansEnforced: _v27,
        isWhitelistedForIndPlans: _v28,
        hasSubmittedSurvey: _v29,
        showIndividualPlans: _v30,
        canRequestEligibility: _v31
      } = (0, _v169.useB2BRepackagingContext)(),
      _v32 = _v26 ?? _v7.tier,
      _v33 = _v32 === _v62.Tier.Studio || _v32 === _v62.Tier.Production,
      {
        open: _v34,
        modal: _v35
      } = (0, _v230.useIndividualEligibilityModal)({
        initialStep: _v29 && !_v28 ? "not_qualified" : void 0
      }),
      [_v36, _v37] = (0, _v3.useState)(!1),
      [_v38, _v39] = (0, _v3.useState)(null),
      _v40 = _v24?.productName?.toLowerCase().replace("vimeo ", "") ?? "",
      _v41 = _v25 && ("studio" === _v40 || "production" === _v40),
      _v42 = _v25 && _v7.tier === _v62.Tier.Advanced && "professional" === _v40,
      _v43 = _v27 && _v33 && !_v28 || _v41,
      _v44 = _v41 ? _v24?.productName ?? _v7.tierForDisplay ?? "" : _v7.tierForDisplay ?? "",
      _v45 = _v27 && !_v28,
      _v46 = !_v45 && _v30 ? (0, _v19.buildUpgradePlanUrl)({
        paywallTrigger: "billing_corporate_downgrade_check_plans_link",
        paywallLocation: "billing",
        paywallFeature: "corporate_downgrade"
      }) : void 0,
      _v47 = (0, _v3.useMemo)(() => {
        if (!_v7) return !1;
        let {
          tier: _v0,
          renewalDate: _v1,
          gracePeriodType: _v2,
          tierForDisplay: _v3
        } = _v7;
        return !!(_v0 && _v3 && _v1 && null !== _v2);
      }, [_v7]),
      _v48 = !!_v7?.isStorageEntitlementSuspended,
      _v49 = (0, _v16.useIsMobile)(),
      _v50 = _v7.tier === _v62.Tier.Creator,
      _v51 = (0, _v183.getDisplayedGracePeriodEndDate)(_v7?.gracePeriodType, _v7?.originalEndDate, _v7?.endDate);
    (0, _v3.useEffect)(() => {
      null === _v19 || _v16(_v19 && "1" === _v19 ? _v186 : _v187);
    }, [_v19, _v16]);
    let _v52 = _v4.query.survey;
    if ((0, _v3.useEffect)(() => {
      if ("b2b_repack" !== _v52 || !_v31) return;
      _v34("billing_deeplink");
      let _v0 = new URL(window.location.toString());
      _v0.searchParams.delete("survey");
      let _v1 = _v0.pathname + _v0.search + _v0.hash;
      _v4.replace(_v1, void 0, {
        shallow: !0
      });
    }, [_v52, _v31, _v34, _v4]), !1 === _v12 || !_v6 && _v13 !== _v62.TeamRole.Owner) return (0, _v1.jsx)(_v9.Card, {
      mt: (0, _v14.rem)(100),
      children: (0, _v1.jsx)(_v10.Flex, {
        justify: "center",
        align: "center",
        minH: (0, _v14.rem)(100),
        children: (0, _v1.jsx)(_v11.Header, {
          as: "h5",
          size: "sm",
          color: "text-secondary",
          children: _v63.T.UnavailableBillingPage
        })
      })
    });
    let _v53 = _v10 && _v7 && (_v10 === _v187 || _v10 === _v186),
      _v54 = !_v6;
    return (0, _v1.jsxs)(_v7.Box, {
      children: [(0, _v1.jsx)(_v17.SettingsPageContentHeader, {
        title: _v63.T.Billing
      }), _v54 && _v8.canShow && (0, _v1.jsx)(_v4.Alert, {
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
      }), _v54 && _v9.canShow && (0, _v1.jsx)(_v4.Alert, {
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
          children: _v63.T.Errors.MembershipInfoLoadError
        })
      }), !_v6 && _v7.renewalDate && _v53 && (0, _v1.jsx)(_v188, {
        locale: _v18?.locale,
        membership: _v7,
        noticeType: _v10,
        onClose: () => {
          let _v0;
          (_v0 = new URL(window.location.toString())).searchParams.delete("rns"), _v4.push(_v0.toString(), void 0, {
            shallow: !0
          }), _v20(null), _v16(null);
        }
      }), _v54 && _v10 && !_v50 && Object.values(_v23.NOTICE_TYPES).includes(_v10) && (0, _v1.jsx)(_v7.Box, {
        mt: (0, _v14.rem)(4),
        children: (0, _v1.jsx)(_v22.PurchaseSeatsNotice, {
          noticeType: _v10,
          onClose: () => _v16(null),
          seatsCount: _v14
        })
      }), _v47 && _v48 && (0, _v1.jsxs)(_v4.AlertRoot, {
        backgroundColor: "status-destructive-secondary",
        size: "sm",
        p: 4,
        alignItems: "center",
        children: [(0, _v1.jsx)(_v15.CircleExclamationFilled, {
          color: "status-destructive-primary"
        }), (0, _v1.jsxs)(_v12.HStack, {
          gap: 0,
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          children: [(0, _v1.jsx)(_v13.VStack, {
            gap: 0,
            align: "flex-start",
            children: (0, _v1.jsx)(_v5.AlertDescription, {
              children: _v63.T.storageSuspendedBillingBanner(_v7?.tierForDisplay, _v51 ?? "")
            })
          }), (0, _v1.jsx)(_v8.Button, {
            ml: 2,
            size: "xs",
            backgroundColor: "red.50",
            color: "#0E1216",
            fontSize: "12px",
            fontWeight: 500,
            lineHeight: "140%",
            letterSpacing: "-0.36px",
            _hover: {
              backgroundColor: "red.100"
            },
            onClick: () => {
              (0, _v231.sendBpEventWithContexts)("vimeo.update_payment_method_click", {
                ...(0, _v232.buildActionBpContext)({
                  action_type: "click",
                  feature: null
                }),
                ...(0, _v233.buildProductAnalyticsBpContext)({
                  location: "upper_banner",
                  device_type: (0, _v139.default)(),
                  element: "button",
                  feature: "billing",
                  product: "payments",
                  copy: _v63.T.UpdatePaymentMethod,
                  is_user_facing_data: !1,
                  entity_type: null
                }),
                ...(0, _v234.buildTeamBpContext)({
                  is_team_member: !0
                }),
                ...(0, _v235.buildThirdPartyIntegrationBpContext)({
                  integration_id: null,
                  integration_name: null,
                  is_partner: null
                })
              }), window.open("/checkout/payments/new");
            },
            children: _v63.T.UpdatePaymentMethod
          })]
        })]
      }), _v47 && !_v48 && (0, _v1.jsxs)(_v4.AlertRoot, {
        backgroundColor: "status-destructive-secondary",
        size: "sm",
        p: 4,
        alignItems: "center",
        children: [(0, _v1.jsx)(_v15.CircleExclamationFilled, {
          color: "status-destructive-primary"
        }), (0, _v1.jsxs)(_v12.HStack, {
          gap: 0,
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          children: [(0, _v1.jsx)(_v13.VStack, {
            gap: 0,
            align: "flex-start",
            children: (0, _v1.jsx)(_v5.AlertDescription, {
              children: _v49 ? _v63.T.gracePeriodMobile(_v7?.tierForDisplay, _v51 ?? "") : _v63.T.gracePeriodDesktop(_v7?.tierForDisplay, _v51 ?? "")
            })
          }), (0, _v1.jsx)(_v8.Button, {
            ml: 2,
            size: "xs",
            backgroundColor: "red.50",
            color: "#0E1216",
            fontSize: "12px",
            fontWeight: 500,
            lineHeight: "140%",
            letterSpacing: "-0.36px",
            _hover: {
              backgroundColor: "red.100"
            },
            onClick: () => {
              (0, _v231.sendBpEventWithContexts)("vimeo.update_payment_method_click", {
                ...(0, _v232.buildActionBpContext)({
                  action_type: "click",
                  feature: null
                }),
                ...(0, _v233.buildProductAnalyticsBpContext)({
                  location: "upper_banner",
                  device_type: (0, _v139.default)(),
                  element: "button",
                  feature: "billing",
                  product: "payments",
                  copy: _v63.T.UpdatePaymentMethod,
                  is_user_facing_data: !1,
                  entity_type: null
                }),
                ...(0, _v234.buildTeamBpContext)({
                  is_team_member: !0
                }),
                ...(0, _v235.buildThirdPartyIntegrationBpContext)({
                  integration_id: null,
                  integration_name: null,
                  is_partner: null
                })
              }), window.open("/checkout/payments/new");
            },
            children: _v63.T.UpdatePaymentMethod
          })]
        })]
      }), _v25 && !_v36 && !_v41 && (_v0 = _v24?.productName ?? _v7.tierForDisplay ?? "Vimeo", _v1 = _v42 ? "status-positive" : "status-caution", _v2 = _v42 ? _v63.T.PositiveDowngradeNotice(_v0) : _v63.T.DowngradeNotice(_v0), _v3 = function (_v0) {
        switch (_v0) {
          case "rp_2026":
            return "https://vimeo.com/new-plans-feb-2026-50";
          case "rp_2026_strict":
            return "https://vimeo.com/new-plans-feb-2026-30";
          default:
            return "/not-found";
        }
      }(_v23.campaign_id_override), (0, _v1.jsxs)(_v4.AlertRoot, {
        backgroundColor: `${_v1}-secondary`,
        borderRadius: "md",
        py: 3,
        px: 4,
        sx: {
          paddingRight: "3rem"
        },
        children: [(0, _v1.jsx)(_v6.AlertIcon, {
          children: (0, _v1.jsx)(_v15.CircleExclamationFilled, {
            color: `${_v1}-primary`
          })
        }), (0, _v1.jsxs)(_v12.HStack, {
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          children: [(0, _v1.jsx)(_v5.AlertDescription, {
            children: _v2
          }), (0, _v1.jsx)(_v8.Button, {
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
            children: _v63.T.LearnMore
          }), (0, _v1.jsx)(_v4.AlertCloseButton, {
            color: `${_v1}-primary`,
            "aria-label": "Dismiss notice",
            onClick: () => _v37(!0),
            transform: "translate(0, +4px)"
          })]
        })]
      })), _v43 && (0, _v1.jsx)(_v7.Box, {
        mt: 4,
        children: (0, _v1.jsx)(_v219, {
          tierLabel: _v44,
          isEligibleForIndividualPlans: _v28 && _v41,
          onLearnMore: () => {
            window.open("https://vimeo.com/new-plans-businesses", "_blank", "noopener,noreferrer");
          },
          onRequestEligibility: _v45 ? () => {
            _v22({
              location: "billing_repackaging_banner"
            }), _v34("billing_repackaging_banner");
          } : void 0,
          checkOtherPlansHref: _v46
        })
      }), _v35, !_v5 && (0, _v1.jsx)(_v185, {
        onRequestIndividualPlans: () => _v34("cancellation_offer"),
        onChangePlanClick: _v0 => _v39(_v0),
        children: ({
          hasScheduledDowngrade: _v0
        }) => _v11 && (0, _v1.jsx)(_v216, {
          hasScheduledDowngrade: _v0
        })
      }), null !== _v38 && (0, _v1.jsx)(_v229, {
        isOpen: !0,
        scheduledTier: _v38,
        onClose: () => _v39(null)
      })]
    });
  }
  _v236.getLayout = _v217.getLayout, _v0.s(["__N_SSP", 0, !0, "default", 0, _v236], 0);
}