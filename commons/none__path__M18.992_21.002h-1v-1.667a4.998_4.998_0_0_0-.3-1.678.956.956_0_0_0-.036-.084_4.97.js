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
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0);
  let _v21 = _v0 => (0, _v1.jsx)(_v20.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      d: "M18.992 21.002h-1v-1.667a4.998 4.998 0 0 0-.3-1.678.956.956 0 0 0-.036-.084 4.976 4.976 0 0 0-.664-1.237l-1.4-1.867a3.019 3.019 0 0 1-.6-1.801v-1.01a3.021 3.021 0 0 1 .878-2.12l.657-.658a4.945 4.945 0 0 0 1.397-2.839c0-.013.008-.025.008-.04l-.003-.013c.035-.213.056-.428.063-.643V3.002h1a1 1 0 1 0 0-2h-14a1 1 0 0 0 0 2h1v2.343c.007.215.028.43.063.643l-.003.014c0 .014.007.026.008.04A4.946 4.946 0 0 0 7.456 8.88l.657.657c.56.564.876 1.326.879 2.121v1.01a3.022 3.022 0 0 1-.6 1.8l-1.4 1.868a4.983 4.983 0 0 0-.665 1.237.968.968 0 0 0-.036.084 5.003 5.003 0 0 0-.3 1.678v1.667h-1a1 1 0 1 0 0 2h14a1 1 0 0 0 0-2Zm-11-16v-2h8v2h-8Zm.878 2.464a2.97 2.97 0 0 1-.377-.464h6.997a2.97 2.97 0 0 1-.377.464l-.657.657a4.96 4.96 0 0 0-1.422 2.879H10.95a4.96 4.96 0 0 0-1.422-2.88l-.657-.656Zm1.122 8.202c.579-.775.922-1.7.988-2.666h2.023c.066.965.41 1.89.989 2.666l1 1.334h-6l1-1.334Zm6 5.334h-8v-1.667c.002-.111.012-.223.027-.333h7.945c.016.11.025.222.028.333v1.667Z",
      fill: "currentColor"
    })
  });
  var _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0);
  let _v27 = /^(\d{4})-(\d{2})-(\d{2})$/,
    _v28 = "reverseTrialLateBanner.dismissedAt";
  function _v29() {
    try {
      return window.localStorage;
    } catch {
      return null;
    }
  }
  let _v30 = {
      read(_v0) {
        let _v1 = _v29();
        if (!_v1) return !1;
        let _v2 = function (_v0) {
          if (null == _v0) return null;
          try {
            let _v0 = JSON.parse(_v0);
            if (null !== _v0 && "object" == typeof _v0 && "number" == typeof _v0.userId && "number" == typeof _v0.dismissedAt) return _v0;
            return null;
          } catch {
            return null;
          }
        }(_v1.getItem(_v28));
        return _v2 ? _v2.userId !== _v0 ? (_v1.removeItem(_v28), !1) : Date.now() - _v2.dismissedAt < 0 : (null !== _v1.getItem(_v28) && _v1.removeItem(_v28), !1);
      },
      write(_v0) {
        let _v1 = _v29();
        if (!_v1) return;
        let _v2 = {
          userId: _v0,
          dismissedAt: Date.now()
        };
        _v1.setItem(_v28, JSON.stringify(_v2));
      }
    },
    _v31 = "reverse_trial_late_banner",
    _v32 = "reverse_trial_late_banner",
    _v33 = ["membership.subscription.trial.isReverseFreeTrial", "membership.subscription.renewal.displayDate", "membership.type"],
    _v34 = ({
      title: _v0,
      description: _v1
    }) => (0, _v1.jsxs)(_v9.HStack, {
      gap: "8px",
      align: "flex-start",
      children: [(0, _v1.jsx)(_v17.Text, {
        color: "text-primary",
        fontSize: "13px",
        lineHeight: "1.5",
        flexShrink: 0,
        children: "•"
      }), (0, _v1.jsxs)(_v17.Text, {
        variant: "body-md",
        color: "text-tertiary",
        children: [(0, _v1.jsx)(_v17.Text, {
          as: "span",
          variant: "heading-xs",
          color: "text-primary",
          children: _v0
        }), " ", _v1]
      })]
    });
  function _v35({
    hostLocation: _v0,
    daysRemaining: _v1,
    displayDate: _v2,
    ctaUrl: _v3,
    onClose: _v4
  }) {
    (0, _v23.usePaywallTracking)({
      paywallTrigger: _v31,
      paywallLocation: _v0,
      paywallType: "popup",
      paywallFeature: _v32,
      isVisible: !0
    });
    let _v5 = _v2 ? function (_v0) {
      let _v1 = /^(\d{4})-(\d{2})-(\d{2})$/.exec(_v0);
      if (!_v1) return "";
      let [, _v2, _v3, _v4] = _v1,
        _v5 = new Date(Date.UTC(Number(_v2), Number(_v3) - 1, Number(_v4))),
        _v6 = new Intl.DateTimeFormat(void 0, {
          weekday: "short",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
          hour12: !0,
          timeZone: "UTC"
        }).format(_v5);
      return (0, _v22.translate)({
        singular: "Expires {DATE} UTC",
        replacements: {
          DATE: _v6
        },
        dictionary: {
          es: {
            singular: "Expira {DATE} UTC"
          },
          "de-DE": {
            singular: "Läuft ab {DATE} UTC"
          },
          "fr-FR": {
            singular: "Expire le {DATE} UTC"
          },
          "ja-JP": {
            singular: "有効期限：{DATE} UTC"
          },
          "ko-KR": {
            singular: "{DATE} UTC에 만료됨"
          },
          "pt-BR": {
            singular: "Expira em {DATE} UTC"
          },
          "zh-CN": {
            singular: "于 {DATE} UTC 到期"
          }
        }
      });
    }(_v2) : "";
    return (0, _v1.jsxs)(_v10.Modal, {
      isOpen: !0,
      onClose: _v4,
      size: ["full", "md"],
      scrollBehavior: "outside",
      children: [(0, _v1.jsx)(_v16.ModalOverlay, {}), (0, _v1.jsxs)(_v14.ModalContent, {
        maxWidth: "480px",
        children: [(0, _v1.jsx)(_v13.ModalHeader, {
          children: (0, _v22.translate)({
            singular: "Your free trial is about to expire",
            dictionary: {
              es: {
                singular: "Tu prueba gratuita está a punto de expirar"
              },
              "de-DE": {
                singular: "Ihre kostenlose Testphase läuft bald ab"
              },
              "fr-FR": {
                singular: "Votre période d'essai va bientôt expirer"
              },
              "ja-JP": {
                singular: "無料トライアルがまもなく終了します"
              },
              "ko-KR": {
                singular: "무료 체험이 곧 만료됩니다"
              },
              "pt-BR": {
                singular: "Seu teste gratuito está prestes a expirar"
              },
              "zh-CN": {
                singular: "您的免费试用即将到期"
              }
            }
          })
        }), (0, _v1.jsx)(_v12.ModalCloseButton, {}), (0, _v1.jsx)(_v11.ModalBody, {
          children: (0, _v1.jsxs)(_v18.VStack, {
            gap: "16px",
            align: "stretch",
            children: [(0, _v1.jsxs)(_v9.HStack, {
              gap: "10px",
              px: "16px",
              py: "12px",
              bg: "status-caution-secondary",
              borderRadius: "12px",
              children: [(0, _v1.jsx)(_v6.Center, {
                flexShrink: 0,
                p: "8px",
                borderRadius: "full",
                bg: "status-caution-primary",
                color: "background",
                children: (0, _v1.jsx)(_v19.InfoCircle, {
                  width: "24px",
                  height: "24px"
                })
              }), (0, _v1.jsxs)(_v4.Box, {
                flex: "1",
                minW: 0,
                children: [(0, _v1.jsx)(_v17.Text, {
                  variant: "heading-sm",
                  color: "status-caution-primary",
                  children: (0, _v22.translate)({
                    singular: "{DAYS} day until your free trial expires",
                    plural: "{DAYS} days until your free trial expires",
                    count: _v1,
                    replacements: {
                      DAYS: _v1
                    },
                    dictionary: {
                      es: {
                        singular: "Queda {DAYS} día hasta que expire tu prueba gratuita",
                        plural: "Quedan {DAYS} días hasta que expire tu prueba gratuita"
                      },
                      "de-DE": {
                        singular: "Noch {DAYS} Tag bis zum Ablauf Ihrer kostenlosen Testphase",
                        plural: "Noch {DAYS} Tage bis zum Ablauf Ihrer kostenlosen Testphase"
                      },
                      "fr-FR": {
                        singular: "Il reste {DAYS} jour avant la fin de votre essai gratuit",
                        plural: "Il reste {DAYS} jours avant la fin de votre essai gratuit"
                      },
                      "ja-JP": {
                        singular: "無料トライアルの終了まであと{DAYS}日",
                        plural: "無料トライアルの終了まであと{DAYS}日"
                      },
                      "ko-KR": {
                        singular: "무료 체험이 {DAYS}일 후에 만료됩니다",
                        plural: "무료 체험이 {DAYS}일 후에 만료됩니다"
                      },
                      "pt-BR": {
                        singular: "Falta {DAYS} dia para o término do seu teste gratuito",
                        plural: "Faltam {DAYS} dias para o término do seu teste gratuito"
                      },
                      "zh-CN": {
                        singular: "{DAYS} 天后您的免费试用到期",
                        plural: "{DAYS} 天后您的免费试用到期"
                      }
                    }
                  })
                }), _v5 && (0, _v1.jsx)(_v17.Text, {
                  variant: "body-sm",
                  color: "status-caution-primary",
                  mt: "2px",
                  children: _v5
                })]
              })]
            }), (0, _v1.jsxs)(_v18.VStack, {
              gap: "8px",
              align: "stretch",
              children: [(0, _v1.jsx)(_v17.Text, {
                variant: "heading-xs",
                color: "text-primary",
                children: (0, _v22.translate)({
                  singular: "If not resolved, you will lose:",
                  dictionary: {
                    es: {
                      singular: "Si no se resuelve, perderá:"
                    },
                    "de-DE": {
                      singular: "Wenn nicht behoben, verlieren Sie:"
                    },
                    "fr-FR": {
                      singular: "Si cela n'est pas résolu, vous perdrez :"
                    },
                    "ja-JP": {
                      singular: "未解決の場合、以下を失います："
                    },
                    "ko-KR": {
                      singular: "해결되지 않으면 다음을 잃게 됩니다:"
                    },
                    "pt-BR": {
                      singular: "Se não for resolvido, você perderá:"
                    },
                    "zh-CN": {
                      singular: "如果未解决，您将失去:"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v34, {
                title: (0, _v22.translate)({
                  singular: "Video hosting and playback",
                  dictionary: {
                    es: {
                      singular: "Alojamiento y reproducción de videos"
                    },
                    "de-DE": {
                      singular: "Video-Hosting und Wiedergabe"
                    },
                    "fr-FR": {
                      singular: "Hébergement et lecture vidéo"
                    },
                    "ja-JP": {
                      singular: "動画のホスティングと再生"
                    },
                    "ko-KR": {
                      singular: "동영상 호스팅 및 재생"
                    },
                    "pt-BR": {
                      singular: "Hospedagem e reprodução de vídeos"
                    },
                    "zh-CN": {
                      singular: "视频托管与播放"
                    }
                  }
                }),
                description: (0, _v22.translate)({
                  singular: "for all your content",
                  dictionary: {
                    es: {
                      singular: "para todo tu contenido"
                    },
                    "de-DE": {
                      singular: "für alle Ihre Inhalte"
                    },
                    "fr-FR": {
                      singular: "pour l'ensemble de votre contenu"
                    },
                    "ja-JP": {
                      singular: "すべてのコンテンツについて"
                    },
                    "ko-KR": {
                      singular: "모든 콘텐츠에 대해"
                    },
                    "pt-BR": {
                      singular: "para todo o seu conteúdo"
                    },
                    "zh-CN": {
                      singular: "适用于您所有内容"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v34, {
                title: (0, _v22.translate)({
                  singular: "Storage",
                  dictionary: {
                    es: {
                      singular: "Almacenamiento:"
                    },
                    "de-DE": {
                      singular: "Speicherplatz"
                    },
                    "fr-FR": {
                      singular: "Stockage"
                    },
                    "ja-JP": {
                      singular: "ストレージ"
                    },
                    "ko-KR": {
                      singular: "저장 공간"
                    },
                    "pt-BR": {
                      singular: "Armazenamento"
                    },
                    "zh-CN": {
                      singular: "存储"
                    }
                  }
                }),
                description: (0, _v22.translate)({
                  singular: "for the videos you’ve uploaded",
                  dictionary: {
                    es: {
                      singular: "para los videos que has subido"
                    },
                    "de-DE": {
                      singular: "für die Videos, die Sie hochgeladen haben"
                    },
                    "fr-FR": {
                      singular: "pour les vidéos que vous avez téléchargées"
                    },
                    "ja-JP": {
                      singular: "アップロードした動画向け"
                    },
                    "ko-KR": {
                      singular: "업로드한 동영상에 대해"
                    },
                    "pt-BR": {
                      singular: "para os vídeos que você enviou"
                    },
                    "zh-CN": {
                      singular: "适用于您上传的视频"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v34, {
                title: (0, _v22.translate)({
                  singular: "Team member access",
                  dictionary: {
                    es: {
                      singular: "Acceso de los miembros del equipo"
                    },
                    "de-DE": {
                      singular: "Zugriff für Teammitglieder"
                    },
                    "fr-FR": {
                      singular: "Accès des membres de l'équipe"
                    },
                    "ja-JP": {
                      singular: "チームメンバーのアクセス"
                    },
                    "ko-KR": {
                      singular: "팀원 접근 권한"
                    },
                    "pt-BR": {
                      singular: "Acesso dos membros da equipe"
                    },
                    "zh-CN": {
                      singular: "团队成员访问权限"
                    }
                  }
                }),
                description: (0, _v22.translate)({
                  singular: "and collaboration features",
                  dictionary: {
                    es: {
                      singular: "y funciones de colaboración"
                    },
                    "de-DE": {
                      singular: "und Funktionen zur Zusammenarbeit"
                    },
                    "fr-FR": {
                      singular: "et les fonctionnalités de collaboration"
                    },
                    "ja-JP": {
                      singular: "およびコラボレーション機能"
                    },
                    "ko-KR": {
                      singular: "및 협업 기능"
                    },
                    "pt-BR": {
                      singular: "e recursos de colaboração"
                    },
                    "zh-CN": {
                      singular: "以及协作功能"
                    }
                  }
                })
              })]
            })]
          })
        }), (0, _v1.jsx)(_v15.ModalFooter, {
          children: (0, _v1.jsx)(_v5.Button, {
            variant: "primary",
            size: "md",
            width: "100%",
            onClick: () => {
              window.location.assign(_v3);
            },
            children: (0, _v22.translate)({
              singular: "Add payment method",
              dictionary: {
                es: {
                  singular: "Añadir método de pago"
                },
                "de-DE": {
                  singular: "Zahlungsmethode hinzufügen"
                },
                "fr-FR": {
                  singular: "Ajouter un mode de paiement"
                },
                "ja-JP": {
                  singular: "支払方法を追加"
                },
                "ko-KR": {
                  singular: "결제 수단 추가"
                },
                "pt-BR": {
                  singular: "Adicionar método de pagamento"
                },
                "zh-CN": {
                  singular: "添加付款方式"
                }
              }
            })
          })
        })]
      })]
    });
  }
  _v0.s(["ReverseTrialLateBanner", 0, function ({
    hostLocation: _v0
  }) {
    let {
        isVisible: _v1,
        daysRemaining: _v2,
        displayDate: _v3,
        ctaUrl: _v4,
        onDismiss: _v5
      } = function (_v0) {
        let _v1 = (0, _v26.useViewer)(),
          _v2 = _v1?.user?.id,
          {
            data: _v3,
            isLoading: _v4
          } = (0, _v24.useGetUser)(() => null == _v2 ? null : {
            select: _v33,
            where: {
              userId: _v2
            },
            headers: {
              Accept: "application/vnd.vimeo.*+json;version=3.4.14"
            }
          }),
          _v5 = _v3?.membership,
          [_v6, _v7] = (0, _v2.useState)(() => null != _v2 && _v30.read(_v2)),
          [_v8, _v9] = (0, _v2.useState)(_v2);
        _v2 !== _v8 && (_v9(_v2), _v7(null != _v2 && _v30.read(_v2)));
        let _v10 = (0, _v2.useMemo)(() => {
            let _v0 = _v5?.subscription?.renewal?.displayDate;
            return _v0 ? function (_v0, _v1 = new Date()) {
              let _v2 = _v27.exec(_v0);
              if (!_v2) return NaN;
              let [, _v3, _v4, _v5] = _v2,
                _v6 = Number(_v3),
                _v7 = Number(_v4),
                _v8 = Number(_v5),
                _v9 = Date.UTC(_v6, _v7 - 1, _v8),
                _v10 = new Date(_v9);
              return _v10.getUTCFullYear() !== _v6 || _v10.getUTCMonth() !== _v7 - 1 || _v10.getUTCDate() !== _v8 ? NaN : Math.round((_v9 - Date.UTC(_v1.getUTCFullYear(), _v1.getUTCMonth(), _v1.getUTCDate())) / 0);
            }(_v0) : NaN;
          }, [_v5?.subscription?.renewal?.displayDate]),
          _v11 = (0, _v2.useMemo)(() => {
            let _v0 = _v5?.type ?? "starter";
            return (0, _v25.buildCheckoutUrl)({
              tier: _v0,
              paywallTrigger: _v31,
              paywallLocation: _v0,
              paywallFeature: _v32,
              paywallType: "popup"
            });
          }, [_v5?.type, _v0]),
          _v12 = (0, _v2.useCallback)(() => {
            null != _v2 && (_v30.write(_v2), _v7(!0));
          }, [_v2]),
          _v13 = _v5?.subscription?.trial?.isReverseFreeTrial === !0;
        return {
          isVisible: !_v4 && !!_v5 && _v13 && _v10 >= 0 && _v10 <= 3 && !_v6,
          daysRemaining: _v10,
          displayDate: _v5?.subscription?.renewal?.displayDate ?? void 0,
          ctaUrl: _v11,
          onDismiss: _v12
        };
      }(_v0),
      [_v6, _v7] = (0, _v2.useState)(!1),
      {
        trackPaywallDismissed: _v8
      } = (0, _v23.usePaywallTracking)({
        paywallTrigger: _v31,
        paywallLocation: _v0,
        paywallType: "banner",
        paywallFeature: _v32,
        isVisible: _v1
      });
    if (!_v1) return null;
    let _v9 = (0, _v22.translate)({
        singular: "Your trial ends in {DAYS} day. Add a payment method to keep access to premium features.",
        plural: "Your trial ends in {DAYS} days. Add a payment method to keep access to premium features.",
        count: _v2,
        replacements: {
          DAYS: `${_v2}`
        },
        dictionary: {
          es: {
            singular: "Tu prueba termina en {DAYS} día. Agrega un método de pago para mantener el acceso a las funciones premium.",
            plural: "Tu prueba termina en {DAYS} días. Agrega un método de pago para mantener el acceso a las funciones premium."
          },
          "de-DE": {
            singular: "Ihre Testphase endet in {DAYS} Tag. Fügen Sie eine Zahlungsmethode hinzu, um weiterhin Zugriff auf Premium-Funktionen zu behalten.",
            plural: "Ihre Testphase endet in {DAYS} Tagen. Fügen Sie eine Zahlungsmethode hinzu, um weiterhin Zugriff auf Premium-Funktionen zu behalten."
          },
          "fr-FR": {
            singular: "Votre période d'essai se termine dans {DAYS} jour. Ajoutez un moyen de paiement pour conserver l'accès aux fonctionnalités premium.",
            plural: "Votre période d'essai se termine dans {DAYS} jours. Ajoutez un moyen de paiement pour conserver l'accès aux fonctionnalités premium."
          },
          "ja-JP": {
            singular: "あと{DAYS}日でトライアルが終了します。プレミアム機能へのアクセスを維持するには支払い方法を追加してください。",
            plural: "あと{DAYS}日でトライアルが終了します。プレミアム機能へのアクセスを維持するには支払い方法を追加してください。"
          },
          "ko-KR": {
            singular: "체험 기간이 {DAYS}일 남았습니다. 프리미엄 기능 이용을 계속하려면 결제 수단을 추가하세요.",
            plural: "체험 기간이 {DAYS}일 남았습니다. 프리미엄 기능 이용을 계속하려면 결제 수단을 추가하세요."
          },
          "pt-BR": {
            singular: "Seu teste termina em {DAYS} dia. Adicione um método de pagamento para manter o acesso aos recursos premium.",
            plural: "Seu teste termina em {DAYS} dias. Adicione um método de pagamento para manter o acesso aos recursos premium."
          },
          "zh-CN": {
            singular: "您的试用将在 {DAYS} 天后结束。添加支付方式以继续访问高级功能。",
            plural: "您的试用将在 {DAYS} 天后结束。添加支付方式以继续访问高级功能。"
          }
        }
      }),
      _v10 = (0, _v22.translate)({
        singular: "Add payment method",
        dictionary: {
          es: {
            singular: "Añadir método de pago"
          },
          "de-DE": {
            singular: "Zahlungsmethode hinzufügen"
          },
          "fr-FR": {
            singular: "Ajouter un mode de paiement"
          },
          "ja-JP": {
            singular: "支払方法を追加"
          },
          "ko-KR": {
            singular: "결제 수단 추가"
          },
          "pt-BR": {
            singular: "Adicionar método de pagamento"
          },
          "zh-CN": {
            singular: "添加付款方式"
          }
        }
      }),
      _v11 = (0, _v22.translate)({
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
      });
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v3.AlertRoot, {
        backgroundColor: "status-caution-secondary",
        marginBottom: "0",
        gap: "sm",
        p: "sm",
        pr: {
          base: "sm",
          md: "md"
        },
        borderRadius: "sm",
        alignItems: {
          base: "flex-start",
          md: "center"
        },
        flexDirection: {
          base: "column",
          md: "row"
        },
        position: "relative",
        children: [(0, _v1.jsxs)(_v8.Flex, {
          gap: "xs",
          alignItems: {
            base: "flex-start",
            md: "center"
          },
          flex: "1",
          minWidth: "0",
          pr: {
            base: "24px",
            md: "0"
          },
          children: [(0, _v1.jsx)(_v4.Box, {
            color: "status-caution-primary",
            pt: "2px",
            flexShrink: 0,
            display: "flex",
            children: (0, _v1.jsx)(_v21, {
              boxSize: {
                base: "12px",
                md: "14px"
              }
            })
          }), (0, _v1.jsx)(_v17.Text, {
            variant: {
              base: "heading-2xs",
              md: "heading-xs"
            },
            color: "text-primary",
            children: _v9
          })]
        }), (0, _v1.jsx)(_v4.Box, {
          alignSelf: {
            base: "flex-end",
            md: "auto"
          },
          flexShrink: 0,
          children: (0, _v1.jsx)(_v5.Button, {
            size: "xs",
            backgroundColor: "status-caution-primary",
            color: "white",
            _hover: {
              backgroundColor: "status-caution-primary"
            },
            onClick: () => _v7(!0),
            children: _v10
          })
        }), (0, _v1.jsx)(_v7.CloseButton, {
          size: "xs",
          variant: "tertiary",
          "aria-label": _v11,
          onClick: () => {
            _v8(), _v5();
          },
          position: {
            base: "absolute",
            md: "static"
          },
          top: {
            base: "8px",
            md: "auto"
          },
          right: {
            base: "8px",
            md: "auto"
          }
        })]
      }), _v6 && (0, _v1.jsx)(_v35, {
        hostLocation: _v0,
        daysRemaining: _v2,
        displayDate: _v3,
        ctaUrl: _v4,
        onClose: () => _v7(!1)
      })]
    });
  }], 0);
}